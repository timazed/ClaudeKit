'use strict';
// Validate the OFFICIAL harness's login initiation without logging URL/state,
// exchanging a code, supplying a credential, or making an inference request.
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'harness-auth-'));
let passed = false, buffer = '';
const child = spawn(process.execPath, ['--jitless', '--no-short-builtin-calls', '--regexp-interpret-all', path.join(root, 'Runtime/bootstrap.cjs')], {
  env: { ...process.env, DEMO_MODE: 'account', DEMO_WORKSPACE: workspace, CLAUDE_CONFIG_DIR: path.join(workspace, 'config'), XDG_CACHE_HOME: path.join(workspace, 'cache') },
  stdio: ['pipe', 'pipe', 'pipe']
});
const send = (id, request) => child.stdin.write(JSON.stringify({ type: 'control_request', request_id: id, request }) + '\n');
const timeout = setTimeout(() => { console.error('Official auth initialization timed out'); child.kill('SIGKILL'); process.exitCode = 1; }, 30000);
child.stdout.on('data', data => {
  buffer += data;
  let i;
  while ((i = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, i); buffer = buffer.slice(i + 1);
    let e; try { e = JSON.parse(line); } catch { continue; }
    if (e.type === 'demo_error') { console.error(e.message); continue; }
    if (e.type !== 'control_response') continue;
    const r = e.response;
    try {
      assert.equal(r.subtype, 'success', r.error);
      if (r.request_id === 'auth-test-init') send('auth-test-login', { subtype: 'claude_authenticate', loginWithClaudeAi: true });
      if (r.request_id === 'auth-test-login') {
        const automatic = new URL(r.response.automaticUrl);
        const manual = new URL(r.response.manualUrl);
        assert.ok(['https://claude.ai', 'https://claude.com'].includes(automatic.origin));
        assert.ok(['/oauth/authorize', '/cai/oauth/authorize'].includes(automatic.pathname));
        assert.equal(manual.origin, automatic.origin);
        assert.equal(automatic.searchParams.get('code_challenge_method'), 'S256');
        assert.ok(automatic.searchParams.get('state'));
        const callback = new URL(automatic.searchParams.get('redirect_uri'));
        assert.ok(['localhost', '127.0.0.1'].includes(callback.hostname));
        passed = true;
        console.log(JSON.stringify({ passed: true, harnessVersion: '2.1.112', mode: 'account',
          authorizationOrigin: automatic.origin, authorizationPath: automatic.pathname,
          pkce: 'S256', callbackHost: callback.hostname, manualFallback: true,
          scope: 'Official harness generates login URL and owns PKCE/callback; account authentication and inference await human sign-in.' }));
        clearTimeout(timeout); child.kill('SIGKILL');
      }
    } catch (error) { console.error(error.message); process.exitCode = 1; clearTimeout(timeout); child.kill('SIGKILL'); }
  }
});
child.on('exit', () => { clearTimeout(timeout); if (!passed) process.exitCode = 1; });
send('auth-test-init', { subtype: 'initialize' });
