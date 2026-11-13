'use client';
import {useRef,useState} from 'react';
import {useFarm} from '@/lib/farm-context';
import {useLanguage} from '@/lib/language';
import {bangladeshDivisions,matchBangladeshLocation} from '@/lib/bangladesh';
import type {LocationResult} from '@/lib/live-types';

export default function FarmAddressField({field}:{field:'division'|'district'|'plot'}){
 const {details,setDetails,draftSource,draftName,setDraft,setDraftLabel,setDraftName}=useFarm();
 const {t,language}=useLanguage();
 const requestId=useRef(0),sourceRef=useRef(draftSource),[lookupError,setLookupError]=useState(false);
 sourceRef.current=draftSource;
 const selected=bangladeshDivisions.find(division=>division.name===details.division);
 if(field==='plot')return <input className="farm-address-control" name="plot" aria-label={t('Mauza / CS Plot Number (optional)')} value={details.plot||''} onChange={event=>setDetails({...details,plot:event.target.value})} maxLength={500} />;
 async function change(value:string){
  const currentRequest=++requestId.current;setLookupError(false);
  if(field==='division'){setDetails({...details,division:value,district:''});if(['none','saved','admin'].includes(draftSource))setDraft(null,'none');return;}
  setDetails({...details,district:value});
  if(value&&!draftName.trim())setDraftName(value+' field');
  if(!value||!['none','saved','admin'].includes(draftSource))return;
  setDraft(null,'none');
  try{const response=await fetch('/api/locations?q='+encodeURIComponent(value+', Bangladesh'));if(!response.ok)throw new Error();const data=await response.json() as {results:LocationResult[]};if(currentRequest!==requestId.current||!['none','admin'].includes(sourceRef.current))return;const place=data.results.find(result=>matchBangladeshLocation(result).division===details.division&&matchBangladeshLocation(result).district===value);if(place){setDraft(place,'admin');setDraftLabel([place.name,place.region,place.country].filter(Boolean).join(', '));}else setLookupError(true);}catch{if(currentRequest===requestId.current&&['none','admin'].includes(sourceRef.current))setLookupError(true);}
 }
 return <><select className="farm-address-control" name={field} aria-label={t(field==='division'?'Division':'District')} required disabled={field==='district'&&!selected} value={details[field]||''} onChange={event=>{void change(event.target.value);}}>
  <option value="">{t(field==='division'?'Select division':selected?'Select district':'Select a division first')}</option>
  {field==='division'?bangladeshDivisions.map(item=><option key={item.name} value={item.name}>{language==='bn'?item.bn:item.name}</option>):selected?.districts.map(([name,bn])=><option key={name} value={name}>{language==='bn'?bn:name}</option>)}
 </select>{lookupError&&<span className="live-hint" role="status">{t('Could not place this district on the map. Search a nearby place or tap the map.')}</span>}</>;
}
