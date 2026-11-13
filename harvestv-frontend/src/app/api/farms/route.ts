import {owner,validWrite} from '@/lib/server/database';
import {row,rows,run,saveFarmRecord,selectFarmRecord} from '@/lib/server/storage';
import type {FarmRecord} from '@/lib/live-types';
import {validDistrict} from '@/lib/bangladesh';
import {randomUUID} from 'node:crypto';

export const runtime='nodejs';
export const dynamic='force-dynamic';

async function records(user:string):Promise<FarmRecord[]>{
 let saved=await rows<{id:string;payload:string}>('SELECT id,payload FROM farm_records WHERE owner=$1 ORDER BY active DESC,updated_at DESC',[user]);
 if(!saved.length){
  const legacy=await row<{payload:string}>('SELECT payload FROM farms WHERE owner=$1',[user]);
  if(legacy){const id=randomUUID();const value=JSON.parse(legacy.payload) as FarmRecord;value.id=id;await run('INSERT INTO farm_records(id,owner,payload,active,updated_at) VALUES($1,$2,$3,1,$4)',[id,user,JSON.stringify(value),value.updatedAt||new Date().toISOString()]);saved=[{id,payload:JSON.stringify(value)}];}
 }
 return saved.map(item=>({...JSON.parse(item.payload) as FarmRecord,id:item.id}));
}

export async function GET(){
 try{const user=await owner(),farms=await records(user);return Response.json({farm:farms[0]||null,farms},{headers:{'Cache-Control':'no-store'}});}
 catch{return Response.json({error:'STORAGE_UNAVAILABLE'},{status:503});}
}

export async function PUT(request:Request){
 if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});
 try{
  const text=await request.text();if(text.length>16000)return Response.json({error:'TOO_LARGE'},{status:413});
  const body=JSON.parse(text);
  if(typeof body.latitude!=='number'||typeof body.longitude!=='number'||!Number.isFinite(body.latitude)||!Number.isFinite(body.longitude)||Math.abs(body.latitude)>90||Math.abs(body.longitude)>180||typeof body.name!=='string'||!body.name.trim()||body.name.length>120||typeof body.label!=='string'||body.label.length>200)return Response.json({error:'INVALID_FARM'},{status:400});
  const details:Record<string,string>={};for(const [key,value] of Object.entries(body.details||{})){if(/^[a-zA-Z][a-zA-Z0-9]{0,30}$/.test(key)&&typeof value==='string'&&value.length<=500)details[key]=value;}
  if(!validDistrict(details.division,details.district))return Response.json({error:'INVALID_DISTRICT'},{status:400});
  const dateValid=(value:string)=>/^\d{4}-\d{2}-\d{2}$/.test(value)&&Number.isFinite(Date.parse(value))&&new Date(value).toISOString().slice(0,10)===value;
  if((details.area&&(!Number.isFinite(Number(details.area))||Number(details.area)<=0||Number(details.area)>100000))||(details.ph&&(!Number.isFinite(Number(details.ph))||Number(details.ph)<0||Number(details.ph)>14))||[details.plantingDate,details.harvestDate].some(value=>value&&!dateValid(value))||(details.plantingDate&&details.harvestDate&&details.harvestDate<details.plantingDate))return Response.json({error:'INVALID_DETAILS'},{status:400});
  const user=await owner();
  const requestedId=typeof body.id==='string'&&/^[a-f0-9-]{36}$/.test(body.id)?body.id:null;
  const existing=requestedId?await row<{id:string}>('SELECT id FROM farm_records WHERE id=$1 AND owner=$2',[requestedId,user]):undefined;
  const id=existing?.id||randomUUID();
  const farm:FarmRecord={id,name:body.name.trim(),label:body.label,latitude:body.latitude,longitude:body.longitude,details,updatedAt:new Date().toISOString()};
  await saveFarmRecord(user,id,JSON.stringify(farm),farm.updatedAt);
  return Response.json({farm,farms:await records(user)},{headers:{'Cache-Control':'no-store'}});
 }catch{return Response.json({error:'STORAGE_UNAVAILABLE'},{status:503});}
}

export async function PATCH(request:Request){
 if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});
 try{
  const {id}=await request.json();if(typeof id!=='string')return Response.json({error:'INVALID_FARM'},{status:400});
  const user=await owner(),found=await row('SELECT 1 FROM farm_records WHERE id=$1 AND owner=$2',[id,user]);
  if(!found)return Response.json({error:'NOT_FOUND'},{status:404});
  await selectFarmRecord(user,id);const farms=await records(user);
  return Response.json({farm:farms[0],farms});
 }catch{return Response.json({error:'STORAGE_UNAVAILABLE'},{status:503});}
}
