import {owner,validWrite} from '@/lib/server/database';
import {row,run} from '@/lib/server/storage';

export const runtime='nodejs';
export const dynamic='force-dynamic';

export async function GET(){
 try{
  const profile=await row<{name:string;phone:string;updatedAt:string}>('SELECT name,phone,updated_at AS "updatedAt" FROM profiles WHERE owner=$1',[await owner()]);
  return Response.json({profile:profile||null},{headers:{'Cache-Control':'no-store'}});
 }catch{return Response.json({error:'STORAGE_UNAVAILABLE'},{status:503});}
}

export async function PUT(request:Request){
 if(!validWrite(request))return Response.json({error:'INVALID_REQUEST'},{status:403});
 try{
  const text=await request.text();if(text.length>2000)return Response.json({error:'TOO_LARGE'},{status:413});
  const body=JSON.parse(text);
  if(typeof body.name!=='string'||!body.name.trim()||body.name.trim().length>100||typeof body.phone!=='string')return Response.json({error:'INVALID_NAME'},{status:400});
  const phone=body.phone.trim().replace(/[০-৯]/g,(digit:string)=>String('০১২৩৪৫৬৭৮৯'.indexOf(digit)));
  if(phone&&(phone.length>30||!/^[+\d\s().-]+$/.test(phone)||phone.replace(/\D/g,'').length<7||phone.replace(/\D/g,'').length>15))return Response.json({error:'INVALID_PHONE'},{status:400});
  const profile={name:body.name.trim(),phone,updatedAt:new Date().toISOString()};
  await run('INSERT INTO profiles(owner,name,phone,updated_at) VALUES($1,$2,$3,$4) ON CONFLICT(owner) DO UPDATE SET name=excluded.name,phone=excluded.phone,updated_at=excluded.updated_at',[await owner(),profile.name,profile.phone,profile.updatedAt]);
  return Response.json({profile});
 }catch{return Response.json({error:'STORAGE_UNAVAILABLE'},{status:503});}
}
