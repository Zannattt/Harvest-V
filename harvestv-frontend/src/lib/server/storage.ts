import {Pool} from 'pg';
import {db} from './database';

type Parameter=string|number|null;
const connectionString=process.env.DATABASE_URL||process.env.POSTGRES_URL;
let pool:Pool|undefined;
let ready:Promise<void>|undefined;

function remotePool(){
 if(!connectionString)throw new Error('DATABASE_URL is not configured');
 pool??=new Pool({connectionString,max:2,idleTimeoutMillis:1000,allowExitOnIdle:true});
 return pool;
}

async function prepareRemote(){
 ready??=(async()=>{
  await remotePool().query(`
   CREATE TABLE IF NOT EXISTS farms(owner TEXT PRIMARY KEY, payload TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS farm_records(id TEXT PRIMARY KEY, owner TEXT NOT NULL, payload TEXT NOT NULL, active INTEGER NOT NULL DEFAULT 0, updated_at TEXT NOT NULL);
   CREATE INDEX IF NOT EXISTS farm_records_owner ON farm_records(owner);
   CREATE TABLE IF NOT EXISTS feedback(id TEXT PRIMARY KEY, owner TEXT NOT NULL, message TEXT NOT NULL, photo_name TEXT, photo_data TEXT, created_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS rotation_plans(owner TEXT PRIMARY KEY, plan_id TEXT NOT NULL, saved_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS rotation_plan_records(owner TEXT NOT NULL, farm_id TEXT NOT NULL, plan_id TEXT NOT NULL, saved_at TEXT NOT NULL, PRIMARY KEY(owner,farm_id));
   CREATE TABLE IF NOT EXISTS information_checks(id TEXT PRIMARY KEY, owner TEXT NOT NULL, payload TEXT NOT NULL, created_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS profiles(owner TEXT PRIMARY KEY, name TEXT NOT NULL, phone TEXT NOT NULL, updated_at TEXT NOT NULL);
  `);
 })().catch(error=>{ready=undefined;throw error;});
 await ready;
}

function localSql(sql:string){return sql.replace(/\$\d+/g,'?');}

export async function rows<T>(sql:string,params:Parameter[]=[]):Promise<T[]>{
 if(connectionString){await prepareRemote();const result=await remotePool().query(sql,params);return result.rows as T[];}
 if(process.env.VERCEL)throw new Error('DATABASE_URL is not configured');
 return db().prepare(localSql(sql)).all(...params) as T[];
}

export async function row<T>(sql:string,params:Parameter[]=[]):Promise<T|undefined>{
 if(connectionString){await prepareRemote();const result=await remotePool().query(sql,params);return result.rows[0] as T|undefined;}
 if(process.env.VERCEL)throw new Error('DATABASE_URL is not configured');
 return db().prepare(localSql(sql)).get(...params) as T|undefined;
}

export async function run(sql:string,params:Parameter[]=[]):Promise<void>{
 if(connectionString){await prepareRemote();await remotePool().query(sql,params);return;}
 if(process.env.VERCEL)throw new Error('DATABASE_URL is not configured');
 db().prepare(localSql(sql)).run(...params);
}

export async function saveFarmRecord(owner:string,id:string,payload:string,updatedAt:string){
 const update='UPDATE farm_records SET active=0 WHERE owner=$1';
 const insert='INSERT INTO farm_records(id,owner,payload,active,updated_at) VALUES($1,$2,$3,1,$4) ON CONFLICT(id) DO UPDATE SET payload=excluded.payload,active=1,updated_at=excluded.updated_at';
 if(connectionString){
  await prepareRemote();const client=await remotePool().connect();
  try{await client.query('BEGIN');await client.query(update,[owner]);await client.query(insert,[id,owner,payload,updatedAt]);await client.query('COMMIT');}
  catch(error){await client.query('ROLLBACK');throw error;}finally{client.release();}
  return;
 }
 if(process.env.VERCEL)throw new Error('DATABASE_URL is not configured');
 const local=db();local.exec('BEGIN');
 try{local.prepare(localSql(update)).run(owner);local.prepare(localSql(insert)).run(id,owner,payload,updatedAt);local.exec('COMMIT');}
 catch(error){local.exec('ROLLBACK');throw error;}
}

export async function selectFarmRecord(owner:string,id:string){
 const update='UPDATE farm_records SET active=0 WHERE owner=$1';
 const select='UPDATE farm_records SET active=1 WHERE id=$1 AND owner=$2';
 if(connectionString){
  await prepareRemote();const client=await remotePool().connect();
  try{await client.query('BEGIN');await client.query(update,[owner]);await client.query(select,[id,owner]);await client.query('COMMIT');}
  catch(error){await client.query('ROLLBACK');throw error;}finally{client.release();}
  return;
 }
 if(process.env.VERCEL)throw new Error('DATABASE_URL is not configured');
 const local=db();local.exec('BEGIN');
 try{local.prepare(localSql(update)).run(owner);local.prepare(localSql(select)).run(id,owner);local.exec('COMMIT');}
 catch(error){local.exec('ROLLBACK');throw error;}
}
