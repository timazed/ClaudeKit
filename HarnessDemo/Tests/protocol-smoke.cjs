'use strict';
// Desktop transport regression test; device evidence must come from the Swift app.
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const workspace = process.env.DEMO_TEST_WORKSPACE || fs.mkdtempSync(path.join(os.tmpdir(), 'harness-protocol-'));
const resume = process.argv.includes('--resume') ? fs.readFileSync(path.join(workspace, 'session-id'), 'utf8') : '';
const child = spawn(process.execPath, ['--jitless', '--no-short-builtin-calls', '--regexp-interpret-all',
  path.join(root, 'Runtime/bootstrap.cjs')], { env: { ...process.env, DEMO_MODE: 'fixture',
  DEMO_WORKSPACE: workspace, CLAUDE_CONFIG_DIR: path.join(workspace, 'config'), XDG_CACHE_HOME: path.join(workspace, 'cache'), DEMO_RESUME: resume }, stdio: ['pipe', 'pipe', 'pipe'] });
const timeout = setTimeout(() => { child.kill('SIGKILL'); process.exitCode = 1; console.error('Timed out'); }, 90000);
let buffer = '', writes = 0, reads = 0, approvals = 0, deltas = 0, initialized = false, completed = false, session;
const send = value => child.stdin.write(JSON.stringify(value) + '\n');
function respond(id, response) { send({ type: 'control_response', response: { subtype: 'success', request_id: id, response } }); }
child.stderr.on('data', data => process.stderr.write(data));
child.stdout.on('data', data => {
  buffer += data.toString();
  let newline;
  while ((newline = buffer.indexOf('\n')) !== -1) {
    const line = buffer.slice(0, newline); buffer = buffer.slice(newline + 1);
    if (!line.trim()) continue;
    let event;
    try { event = JSON.parse(line); } catch { console.error('Non-JSON stdout:', line.slice(0, 200)); continue; }
    if (event.type === 'control_request') {
      const req = event.request;
      if (req.subtype === 'can_use_tool') {
        assert.ok(['mcp__ios__write_note', 'mcp__ios__read_note'].includes(req.tool_name));
        approvals++;
        respond(event.request_id, { behavior: 'allow', updatedInput: req.input });
      } else if (req.subtype === 'mcp_message') {
        const msg = req.message;
        let result = {};
        if (msg.method === 'initialize') result = { protocolVersion: '2025-03-26', capabilities: { tools: {} }, serverInfo: { name: 'ios', version: '1.0' } };
        if (msg.method === 'tools/list') result = { tools: [
          { name: 'write_note', description: 'Write the demo note using native iOS filesystem APIs.', inputSchema: { type: 'object', properties: { text: { type: 'string' } }, required: ['text'], additionalProperties: false } },
          { name: 'read_note', description: 'Read the demo note using native iOS filesystem APIs.', inputSchema: { type: 'object', properties: {}, additionalProperties: false } }
        ] };
        if (msg.method === 'tools/call') {
          if (msg.params.name === 'write_note') { fs.writeFileSync(path.join(workspace, 'proof.txt'), msg.params.arguments.text); writes++; result = { content: [{ type: 'text', text: 'saved' }] }; }
          else if (msg.params.name === 'read_note') { reads++; result = { content: [{ type: 'text', text: fs.readFileSync(path.join(workspace, 'proof.txt'), 'utf8') }] }; }
          else throw new Error('Unknown native tool');
        }
        respond(event.request_id, { mcp_response: { jsonrpc: '2.0', id: msg.id ?? 0, result } });
      } else throw new Error('Unhandled control request ' + JSON.stringify(req));
    } else if (event.type === 'control_response' && event.response.request_id === 'demo-init') {
      assert.equal(event.response.subtype, 'success');
      initialized = true;
      send({ type: 'user', message: { role: 'user', content: resume ? 'RESUME_PROOF: recall the earlier note from this conversation.' : 'Write a unique note, read it back, and report the result.' }, parent_tool_use_id: null, session_id: '' });
    } else if (event.type === 'stream_event') { deltas++; }
    else if (event.type === 'system' && event.subtype === 'init') {
      session = event.session_id;
      fs.writeFileSync(path.join(workspace, 'session-id'), session);
      console.log(JSON.stringify({ type: 'init', session, tools: event.tools, mcp_servers: event.mcp_servers }));
    } else if (event.type === 'result') {
      try {
        assert.equal(event.is_error, false, JSON.stringify(event));
        assert.ok(initialized && session && deltas > 0);
        assert.match(event.result, resume ? /RESUME_OK:/ : /PROOF_OK:/);
        assert.equal(writes, resume ? 0 : 1);
        assert.equal(reads, resume ? 0 : 1);
        assert.equal(approvals, resume ? 0 : 2);
        completed = true;
        console.log(JSON.stringify({ passed: true, environment: 'desktop-transport-only', workspace, session, writes, reads, approvals, deltas, result: event.result }));
      } catch (error) { process.exitCode = 1; console.error(error); }
      clearTimeout(timeout);
      setTimeout(() => child.kill('SIGKILL'), 1000); // let official transcript flush first
    } else console.log(JSON.stringify(event));
  }
});
child.on('exit', () => { clearTimeout(timeout); if (!completed) process.exitCode = 1; });
send({ type: 'control_request', request_id: 'demo-init', request: { subtype: 'initialize', sdkMcpServers: ['ios'] } });
