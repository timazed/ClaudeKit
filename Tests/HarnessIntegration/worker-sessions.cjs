'use strict';
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'claudekit-workers-'));
const child = spawn(process.execPath, ['--jitless', '--no-short-builtin-calls', '--regexp-interpret-all',
  path.join(root, 'Sources/ClaudeKitHarness/Resources/Runtime/host.cjs')], { stdio: ['pipe', 'pipe', 'pipe'] });
const send = value => child.stdin.write(JSON.stringify(value) + '\n');
let active, buffer = '', pid;
const results = [];
child.stderr.on('data', d => process.stderr.write(d));
const timer = setTimeout(() => { console.error('Timed out'); child.kill('SIGKILL'); process.exitCode = 1; }, 90000);
child.stdout.on('data', chunk => {
  buffer += chunk;
  let n;
  while ((n = buffer.indexOf('\n')) >= 0) {
    const packet = JSON.parse(buffer.slice(0,n)); buffer = buffer.slice(n+1);
    const e = packet.event;
    if (e.type === 'host_ready') { pid = e.pid; continue; }
    if (!active || packet.generation !== active.id) continue;
    const input = message => send({ op: 'send', generation: active.id, message });
    const respond = (id, response) => input({ type: 'control_response', response: { subtype: 'success', request_id: id, response } });
    try {
      if (e.type === 'host_error') throw new Error(e.message);
      if (e.type === 'host_runtime') {
        assert.equal(e.pid,pid); active.threadId=e.threadId;
        input({ type:'control_request', request_id:'init', request:{subtype:'initialize',sdkMcpServers:['ios']} });
      }
      if (e.type === 'control_response' && e.response.request_id === 'init') {
        input({type:'user',message:{role:'user',content:active.resume?'RESUME_PROOF':'Write and read the note.'},parent_tool_use_id:null,session_id:''});
      }
      if (e.type === 'system' && e.subtype === 'init') active.session=e.session_id;
      if (e.type === 'control_request') {
        const r=e.request;
        if (r.subtype==='can_use_tool') { active.approvals++; respond(e.request_id,{behavior:'allow',updatedInput:r.input}); }
        else if (r.subtype==='mcp_message') {
          const m=r.message; let result={};
          if(m.method==='initialize') result={protocolVersion:'2025-03-26',capabilities:{tools:{}},serverInfo:{name:'ios',version:'1'}};
          if(m.method==='tools/list') result={tools:[
            {name:'write_note',description:'Write a note.',inputSchema:{type:'object',properties:{text:{type:'string'}},required:['text']}},
            {name:'read_note',description:'Read the note.',inputSchema:{type:'object',properties:{}}}
          ]};
          if(m.method==='tools/call') {
            active.calls++;
            if(m.params.name==='write_note') active.note=m.params.arguments.text;
            result={content:[{type:'text',text:m.params.name==='write_note'?'saved':active.note}]};
          }
          respond(e.request_id,{mcp_response:{jsonrpc:'2.0',id:m.id??0,result}});
        }
      }
      if(e.type==='result') {
        assert.equal(e.is_error,false,JSON.stringify(e));
        assert.ok(e.result.includes(active.expected || active.note));
        assert.equal(active.calls,active.resume?0:2);
        const done=active.resolve;
        results.push({session:active.session,pid,threadId:active.threadId,calls:active.calls,approvals:active.approvals,passed:true});
        setTimeout(()=>done({...active}),1200);
      }
    } catch(error) { console.error(error); clearTimeout(timer); child.kill('SIGKILL'); process.exitCode=1; }
  }
});
function run(id,previous) {
  return new Promise(resolve=>{
    active={id,resolve,resume:previous?.session,expected:previous?.note,calls:0,approvals:0};
    send({op:'open',generation:id,options:{mode:'fixture',workspace:path.join(directory,'workspace'),
      configDirectory:path.join(directory,'config'),cacheDirectory:path.join(directory,'cache'),resume:previous?.session}});
  });
}
(async()=>{
  const a=await run('a'); const b=await run('b'); const restored=await run('a-again',a);
  assert.notEqual(a.session,b.session);assert.notEqual(a.note,b.note);assert.equal(a.session,restored.session);
  assert.equal(new Set(results.map(r=>r.threadId)).size,3);
  console.log(JSON.stringify({passed:true,sequence:'A → B → A',results},null,2));
  clearTimeout(timer);child.stdin.end();
})();
