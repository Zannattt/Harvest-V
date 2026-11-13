'use client';
import {useState,type FormEvent} from 'react';
import Link from 'next/link';
import {useProfile} from '@/lib/profile-context';
import {useLanguage} from '@/lib/language';
import AppNavbar from '@/components/app-navbar';
export default function ProfilePage(){const {profile,loading,error,save}=useProfile();const {t}=useLanguage();const [saving,setSaving]=useState(false),[saved,setSaved]=useState(false);
 async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();const data=new FormData(event.currentTarget);setSaved(false);setSaving(true);try{setSaved(await save(String(data.get('name')||''),String(data.get('phone')||'')));}finally{setSaving(false);}}
 return <><AppNavbar active="profile"/><main className="functional-page"><h1>{t('Edit profile')}</h1><p>{t('Your name and phone number appear in the profile area across HarvestV.')}</p>
 {loading?<p role="status">{t('Loading profile…')}</p>:<form className="check-form profile-form" key={profile?.updatedAt||'new'} onSubmit={submit} onChange={()=>setSaved(false)}><label>{t('Your name')}<input name="name" autoComplete="name" defaultValue={profile?.name||''} required maxLength={100}/></label><label>{t('Phone number (optional)')}<input name="phone" type="tel" inputMode="tel" autoComplete="tel" defaultValue={profile?.phone||''} maxLength={30}/></label><div className="live-actions"><button type="submit" className="button primary" disabled={saving}>{t(saving?'Saving…':'Save profile')}</button><Link href="/dashboard" className="button outlined">{t('Dashboard')}</Link></div>{saved&&<p className="live-success" role="status">{t('Profile saved. Your details are updated across HarvestV.')}</p>}</form>}{error&&<p role="alert" className="live-error">{t(error)}</p>}</main></>;
}
