'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {useFarm} from './farm-context';
export type FarmerProfile={name:string;phone:string;updatedAt:string};
const ProfileContext=createContext<{profile:FarmerProfile|null;loading:boolean;error:string;save:(name:string,phone:string)=>Promise<boolean>}>({profile:null,loading:true,error:'',save:async()=>false});
export function ProfileProvider({children}:{children:ReactNode}){
 const {loading:farmLoading}=useFarm();
 const [profile,setProfile]=useState<FarmerProfile|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState('');
 useEffect(()=>{if(farmLoading)return;const controller=new AbortController();fetch('/api/profile',{signal:controller.signal,cache:'no-store'}).then(async response=>{if(!response.ok)throw new Error();setProfile((await response.json()).profile);}).catch(cause=>{if(cause.name!=='AbortError')setError('Could not load your profile. Please reload and try again.');}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});return()=>controller.abort();},[farmLoading]);
 async function save(name:string,phone:string){setError('');try{const response=await fetch('/api/profile',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,phone})});const body=await response.json();if(!response.ok){setError(body.error==='INVALID_PHONE'?'Enter a valid phone number or leave it blank.':body.error==='INVALID_NAME'?'Enter your name (up to 100 characters).':body.error==='STORAGE_UNAVAILABLE'?'Profile storage is unavailable. Please try again later.':body.error==='INVALID_REQUEST'?'The server rejected this save request. Please reload and try again.':'Could not save your profile. Please try again.');return false;}setProfile(body.profile);return true;}catch{setError('Could not save your profile. Please try again.');return false;}}
 return <ProfileContext.Provider value={{profile,loading,error,save}}>{children}</ProfileContext.Provider>;
}
export const useProfile=()=>useContext(ProfileContext);
