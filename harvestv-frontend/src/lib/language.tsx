"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { bangla } from './bangla';
import type { Language } from './content';
const LanguageContext=createContext<{language:Language;setLanguage:(value:Language)=>void;t:(text:string)=>string}>({language:'en',setLanguage:()=>{},t:text=>text});
export function translate(text:string,language:Language){
 if(language==='en')return text;
 const coordinates=text.match(/^Device location: (.+)\. Confirm your farm location separately\.$/);
 if(coordinates)return `ডিভাইসের অবস্থান: ${coordinates[1]}। খামারের অবস্থান আলাদাভাবে নিশ্চিত করুন।`;
 const key=text.trim();const translated=bangla[key];
 if(translated)return text.replace(key,translated);
 if(/^[\d\s.,%°–−+→~:()/-]+$/.test(key))return text.replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[Number(d)]);
 return text;
}
export function LanguageProvider({children}:{children:ReactNode}){
 const [language,updateLanguage]=useState<Language>('en');
 useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem('harvestv-language')||'"en"');if(saved==='en'||saved==='bn')updateLanguage(saved);}catch{}},[]);
 function setLanguage(next:Language){updateLanguage(next);try{localStorage.setItem('harvestv-language',JSON.stringify(next));}catch{}}
 useEffect(()=>{document.documentElement.lang=language;},[language]);
 return <LanguageContext.Provider value={{language,setLanguage,t:text=>translate(text,language)}}>{children}</LanguageContext.Provider>;
}
export const useLanguage=()=>useContext(LanguageContext);
export function T({text}:{text:string}){return useLanguage().t(text);}
