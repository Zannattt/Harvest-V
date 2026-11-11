"use client";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/language';

export default function PageInteractions({page,children}:{page:string;children:ReactNode}) {
 const {language,setLanguage,t}=useLanguage();
 const root=useRef<HTMLDivElement>(null);const router=useRouter();const [message,setMessage]=useState('');const [reports,setReports]=useState<string[]>([]);
 useEffect(()=>{try {const saved=JSON.parse(localStorage.getItem('harvestv-field-profile')||'{}');root.current?.querySelectorAll<HTMLInputElement>('input[name]').forEach(input=>{if(saved[input.name])input.value=saved[input.name];});setReports(JSON.parse(localStorage.getItem('harvestv-field-reports')||'[]'));}catch{}},[]);
 function save(key:string,value:unknown){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{setMessage('Could not save. Allow browser storage and try again.');return false;}}
 function click(event:MouseEvent<HTMLDivElement>){const target=(event.target as HTMLElement).closest<HTMLElement>('button,[data-name="View Sources"],[data-name="View sources"]');if(!target)return;const label=(target.dataset.action??target.textContent??'').replace(/\s+/g,' ').trim();const id=target.dataset.nodeId;
  if(/^(Change field|\+ Add new farm|\+ Add your farm|Change Plot Context|Register New Field)$/.test(label)){router.push('/my-farm');return;}
  if(/Plan next crop|View full plan/.test(label)){router.push('/crop-rotation');return;}
  if(/Save Farm/.test(label)){const values:Record<string,string>={};root.current?.querySelectorAll<HTMLInputElement>('input[name]').forEach(e=>values[e.name]=e.value);if(save('harvestv-field-profile',values)){const existing=JSON.parse(localStorage.getItem('harvestv-farm')||'{}');save('harvestv-farm',{...existing,name:existing.name||'Shonar Bangla Agro',location:values.division||'Mymensingh',area:existing.area||'1.5',soil:existing.soil||0,crop:existing.crop||0,water:existing.water||0});setMessage('Farm saved on this device.');}return;}
  if(label==='Discard changes'){root.current?.querySelectorAll<HTMLInputElement>('input[name]').forEach(input=>input.value=input.defaultValue);setMessage('Unsaved changes discarded.');return;}
  if(/Save This Plan|Select This Plan/.test(label)){if(save('harvestv-selected-plan',label.includes('Save')?1:2)){save('harvestv-plan',true);setMessage('Plan saved on this device. SMS alerts are not connected.');}return;}
  if(label==='Check information'){const advice=root.current?.querySelector<HTMLTextAreaElement>('textarea[name="advice"]');if(!advice?.value.trim()){advice?.focus();setMessage('Please enter the advice you want to check.');return;}setMessage('Insufficient evidence: live reference retrieval is not connected. The dossiers below are examples, not verification of your advice.');return;}
  if(label.includes('Submit Feedback')||label==='Submit Note'){const input=root.current?.querySelector<HTMLTextAreaElement>('textarea');if(!input?.value.trim()){input?.focus();setMessage('Please write your observation first.');return;}const next=[input.value.trim(),...reports];if(save('harvestv-field-reports',next)){setReports(next);input.value='';setMessage('Saved on this device. Not sent to an agricultural expert.');}return;}
  if(id==='115:741'||id==='115:748'||id==='115:755'||['Silt Loam','Clay Loam','Sandy Loam','Yes, helpful','Needs adjustment'].includes(label)){target.parentElement?.querySelectorAll('button').forEach(e=>e.setAttribute('aria-pressed','false'));target.setAttribute('aria-pressed','true');return;}
  if(label==='Use my current location'){if(!navigator.geolocation){setMessage('Location is unavailable. Please use manual entry.');return;}navigator.geolocation.getCurrentPosition(p=>setMessage(`Device location: ${p.coords.latitude.toFixed(4)}, ${p.coords.longitude.toFixed(4)}. Confirm your farm location separately.`),()=>setMessage('Could not find your device location. Your manual entries are unchanged.'));return;}
  if(label==='Confirm farm location'){setMessage('Farm location confirmed from your current entries. The displayed map is a sample preview.');return;}
  if(/Manual entry/.test(label)){root.current?.querySelector<HTMLInputElement>('input[name="division"]')?.focus();return;}
  if(/Submit for Fast/.test(label)){router.push('/feedback');return;}
  if(label==='Cadastral Export'){const values=Array.from(root.current?.querySelectorAll<HTMLInputElement>('input[name]')||[]).map(e=>`${e.name}: ${e.value}`).join('\n');const url=URL.createObjectURL(new Blob([values],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='harvestv-field-profile.txt';a.click();URL.revokeObjectURL(url);return;}
  if(label==='EN'||label==='বাংলা'){setLanguage(label==='EN'?'en':'bn');setMessage('');return;}
  if(/Log Field Action/.test(label)){setMessage('Field action logged on this device.');save('harvestv-last-field-action',new Date().toISOString());return;}
  if(/Fertilizer Schedule/.test(label)){setMessage('Example schedule: top-dress in 4 days. Confirm the amount and timing with your local agricultural officer.');return;}
  if(/Change Crop|Add Crop/.test(label)){setMessage('Choose a crop: Rice, Mustard, Mungbean, or Jute.');return;}
  if(target.dataset.sources){setMessage('Example research dossier. Live source retrieval is not connected; these cards do not verify newly entered advice.');return;}
  setMessage('This feature is a frontend preview. No request has been sent.');
 }
 return <div ref={root} className={`figma-page page-${page}`} onClick={click}>
  <div className="mobile-page-nav"><a href="/">HarvestV</a><select aria-label={t('Go to page')} value={'/'+page} onChange={e=>router.push(e.target.value)}>{[['/','Home'],['/dashboard','Dashboard'],['/my-farm','My Farm'],['/crop-rotation','Crop Rotation'],['/information-check','Information Check'],['/feedback','Feedback']].map(([url,label])=><option key={url} value={url}>{t(label)}</option>)}</select><div className="page-language-switch" role="group" aria-label="Language / ভাষা"><button data-action="EN" aria-pressed={language==='en'} lang="en">EN</button><button data-action="বাংলা" aria-pressed={language==='bn'} lang="bn">বাংলা</button></div></div>
  {children}
  {page==='feedback'&&reports.length>0&&<section className="local-reports"><h2>{t('Reports saved on this device')}</h2>{reports.map((report,i)=><article key={i}><strong>{t('Saved locally · awaiting submission')}</strong><p>{report}</p></article>)}</section>}
  <div className="prototype-label">{t('Frontend preview · sample farm data and example advice')}</div>
  {message&&<div className="page-status" role="status"><p>{t(message)}</p><button aria-label={t('Dismiss message')} onClick={event=>{event.stopPropagation();setMessage('');}}>×</button></div>}
 </div>;
}
