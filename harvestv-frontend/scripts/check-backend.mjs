import assert from 'node:assert/strict';
const base=process.env.HARVESTV_TEST_URL||'http://127.0.0.1:3000';
const first=await fetch(base+'/api/farms');assert.equal(first.status,200);const cookie=first.headers.get('set-cookie')?.split(';')[0];assert.ok(cookie,'An anonymous session should be created');
const sample={name:'Backend integration test',label:'Public Mymensingh coordinates',latitude:24.75,longitude:90.4,details:{division:'Mymensingh',district:'Mymensingh',crop:'Rice',soil:'Silt Loam',water:'Rainfed'}};
const saved=await fetch(base+'/api/farms',{method:'PUT',headers:{'Content-Type':'application/json',Cookie:cookie,Origin:base},body:JSON.stringify(sample)});assert.equal(saved.status,200);assert.equal((await saved.json()).farm.name,sample.name);
const read=await fetch(base+'/api/farms',{headers:{Cookie:cookie}});assert.equal((await read.json()).farm.details.crop,'Rice','Farm details must persist');
assert.equal((await (await fetch(base+'/api/farms',{headers:{Cookie:cookie}})).json()).farm.details.district,'Mymensingh','Division and district should persist without a CS plot number');
for(const details of [{division:'Dhaka',district:'Sylhet'},{division:'Dhaka'},{}]){const invalidAddress=await fetch(base+'/api/farms',{method:'PUT',headers:{'Content-Type':'application/json',Cookie:cookie,Origin:base},body:JSON.stringify({...sample,details})});assert.equal(invalidAddress.status,400,'Missing or mismatched division/district must be rejected');}
const isolated=await fetch(base+'/api/farms');assert.equal((await isolated.json()).farm,null,'Another session must not see this farm');
const forbidden=await fetch(base+'/api/farms',{method:'PUT',headers:{'Content-Type':'application/json',Origin:'https://unrelated.example'},body:JSON.stringify(sample)});assert.equal(forbidden.status,403,'Cross-origin writes must be rejected');
const badSoil=await fetch(base+'/api/farms',{method:'PUT',headers:{'Content-Type':'application/json',Cookie:cookie,Origin:base},body:JSON.stringify({...sample,details:{...sample.details,ph:'30'}})});assert.equal(badSoil.status,400,'Impossible soil pH must be rejected');
const invalid=await fetch(base+'/api/weather?latitude=Infinity&longitude=90');assert.equal(invalid.status,400);
const empty=await fetch(base+'/api/weather?latitude=&longitude=90');assert.equal(empty.status,400);
const feedback=await fetch(base+'/api/feedback',{method:'POST',headers:{'Content-Type':'application/json',Cookie:cookie,Origin:base},body:JSON.stringify({message:'Integration test observation'})});assert.equal(feedback.status,201);assert.equal((await feedback.json()).expertReview,false);
const reports=await fetch(base+'/api/feedback',{headers:{Cookie:cookie}});assert.ok((await reports.json()).reports.some(r=>r.message==='Integration test observation'));
const otherReports=await fetch(base+'/api/feedback');assert.equal((await otherReports.json()).reports.length,0);
const weather=await fetch(base+'/api/weather?latitude=24.75&longitude=90.4');assert.equal(weather.status,200);const forecast=await weather.json();assert.equal(forecast.source,'Open-Meteo');assert.equal(forecast.days.length,7);assert.ok(Number.isFinite(forecast.current.temperature));assert.ok(forecast.observedAt);assert.equal(forecast.timezone,'Asia/Dhaka');
const climate=await fetch(base+'/api/climate?latitude=24.75&longitude=90.4');assert.equal(climate.status,200);const history=await climate.json();assert.equal(history.source,'NASA POWER');assert.ok(history.days>0&&history.days<=60);assert.ok(history.solarUnit);assert.ok(history.end<new Date().toISOString().slice(0,10));
console.log('Passed: farm persistence, anonymous-session isolation, cross-origin protection, coordinate validation, feedback persistence, live weather, and NASA history.');
