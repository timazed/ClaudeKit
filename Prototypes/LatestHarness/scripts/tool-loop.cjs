'use strict';
const {spawn}=require('node:child_process'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),work=fs.mkdtempSync(path.join(os.tmpdir(),'latest-harness-fixture-'));
const child=spawn(process.execPath,['--jitless','--no-warnings',path.join(root,'Runtime/bootstrap.cjs')],{env:{...process.env,HOME:work,CLAUDE_CONFIG_DIR:path.join(work,'config'),DEMO_MODE:'fixture',DEMO_WORKSPACE:path.join(work,'workspace')},stdio:['pipe','pipe','pipe']});
const events=[];let buffer='',note='',calls=0,approvals=0,stream=0,finished=false;
const send=m=>child.stdin.write(JSON.stringify(m)+'\n');
const respond=(id,value)=>send({type:'control_response',response:{subtype:'success',request_id:id,response:value}});
const timeout=setTimeout(()=>finish(new Error('Fixture timed out')),60000);
function finish(error){if(finished)return;finished=true;clearTimeout(timeout);child.kill("SIGKILL");fs.writeFileSync(path.join(root,'Artifacts/desktop-events.json'),JSON.stringify(events,null,2));if(error){console.error(error.stack);process.exitCode=1;}else console.log(JSON.stringify({passed:true,version:'2.1.308',calls,approvals,stream,note}));}
child.stderr.on('data',b=>process.stderr.write(b));
child.on('exit',code=>{if(!finished)finish(new Error('Host exited '+code));});
child.stdout.on('data',b=>{buffer+=b;let n;while((n=buffer.indexOf('\n'))>=0){const line=buffer.slice(0,n);buffer=buffer.slice(n+1);if(!line.trim())continue;let e;try{e=JSON.parse(line);}catch{console.error(line);continue;}events.push(e);console.error("EVENT",e.type,e.subtype||"",e.response?.request_id||"",e.stage||"");try{
 if(e.type==='demo_runtime')send({type:'control_request',request_id:'init',request:{subtype:'initialize',sdkMcpServers:['ios']}});
 if(e.type==='control_response'&&e.response.request_id==='init')send({type:'user',message:{role:'user',content:'Write and read the demo note using the ios tools.'},parent_tool_use_id:null,session_id:''});
 if(e.type==='stream_event')stream++;
 if(e.type==='demo_error'||e.type==='demo_fixture_error')throw new Error(e.message);
 if(e.type==='control_request'){
 const r=e.request;if(r.subtype==='can_use_tool'){approvals++;respond(e.request_id,{behavior:'allow',updatedInput:r.input});}
 else if(r.subtype==='mcp_message'){
 const m=r.message;let result={};
 if(m.method==='initialize')result={protocolVersion:'2025-03-26',capabilities:{tools:{}},serverInfo:{name:'ios',version:'1'}};
 if(m.method==='tools/list')result={tools:[{name:'write_note',description:'Write demo note',inputSchema:{type:'object',properties:{text:{type:'string'}},required:['text']}},{name:'read_note',description:'Read demo note',inputSchema:{type:'object',properties:{}}}]};
 if(m.method==='tools/call'){calls++;if(m.params.name==='write_note'){note=m.params.arguments.text;fs.writeFileSync(path.join(work,'proof.txt'),note);}else assert.equal(fs.readFileSync(path.join(work,'proof.txt'),'utf8'),note);result={content:[{type:'text',text:m.params.name==='write_note'?'saved':note}]};}
 respond(e.request_id,{mcp_response:{jsonrpc:'2.0',id:m.id??0,result}});
 }}
 if(e.type==='result'){assert.equal(e.is_error,false,JSON.stringify(e));assert.equal(calls,2);assert.ok(e.result.includes(note));assert.ok(stream>0);finish();}
 }catch(error){finish(error);}}});
