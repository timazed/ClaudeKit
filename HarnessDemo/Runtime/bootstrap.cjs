'use strict';
// Runtime adapters only. The unmodified official CLI owns the agent loop.
require('./shims/fetch.js').installWebGlobals();
require('./shims/wasm-stub.js').install();
require('./shims/process-title.js').install();
require('./shims/intl.js').install();
require('./shims/fs-safe-copy.js').install();
require('./shims/child_process.js').install();
require('node:module').syncBuiltinESMExports();

const fs = require('node:fs');
const path = require('node:path');
const { Readable, Writable } = require('node:stream');
const { pathToFileURL } = require('node:url');

// Dedicated pipes, not dup2: UIKit's stdout/stderr are never commandeered.
if (process.env.DEMO_INPUT_FD) {
  const input = fs.createReadStream(null, { fd: Number(process.env.DEMO_INPUT_FD), autoClose: false });
  const output = new Writable({ write(chunk, encoding, done) {
    try { fs.writeSync(Number(process.env.DEMO_OUTPUT_FD), chunk); done(); } catch (e) { done(e); }
  }});
  const error = new Writable({ write(chunk, encoding, done) {
    try { fs.writeSync(Number(process.env.DEMO_ERROR_FD), chunk); done(); } catch (e) { done(e); }
  }});
  for (const [name, value] of Object.entries({ stdin: input, stdout: output, stderr: error })) {
    value.isTTY = false;
    Object.defineProperty(process, name, { configurable: true, get: () => value });
  }
  global.console = new (require('node:console').Console)(output, error);
}
const emit = (event) => process.stdout.write(JSON.stringify(event) + '\n');
require('./shims/process-exit.js').install(code => emit({ type: 'demo_exit', code }));
function failure(error) {
  if (error?.__sessionExit) return;
  emit({ type: 'demo_error', message: error?.stack || String(error) });
}
process.on('uncaughtException', failure);
process.on('unhandledRejection', failure);
// Keep Node alive after a CLI error; nodejs-mobile cannot reinitialize in-process.
setInterval(() => {}, 60000);

(async () => {
  const workspace = process.env.DEMO_WORKSPACE;
  if (!workspace) throw new Error('DEMO_WORKSPACE is required');
  fs.mkdirSync(workspace, { recursive: true });
  process.chdir(workspace);
  process.env.DISABLE_AUTOUPDATER = '1';
  process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = '1';
  process.env.DISABLE_TELEMETRY = '1';
  process.env.DISABLE_ERROR_REPORTING = '1';
  process.env.USE_BUILTIN_RIPGREP = '0';
  if (process.env.DEMO_MODE === 'fixture') {
    const server = await require('./fixture.cjs').start(emit);
    process.env.ANTHROPIC_BASE_URL = `http://127.0.0.1:${server.address().port}`;
    process.env.ANTHROPIC_API_KEY = 'fixture-key-not-a-real-credential';
  } else {
    // The official harness owns Claude account OAuth, storage, and refresh.
    delete process.env.ANTHROPIC_BASE_URL;
    if (process.env.DEMO_MODE === 'account') {
      delete process.env.ANTHROPIC_API_KEY;
      delete process.env.ANTHROPIC_AUTH_TOKEN;
      delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
      delete process.env.CLAUDE_CODE_SIMPLE;
    } else if (!process.env.ANTHROPIC_API_KEY) throw new Error('Enter an Anthropic API key before starting API mode.');
  }
  const pin = require('./vendor/claude-code/harness-pin.json');
  const cli = path.join(__dirname, 'vendor/claude-code/cli.js');
  const hash = require('node:crypto').createHash('sha256').update(fs.readFileSync(cli)).digest('hex');
  if (hash !== pin.cli_sha256) {
    throw new Error('Official CLI checksum mismatch');
  }
  // --bare disables the harness's own OAuth lookup; account mode must not use it.
  const args = [...(process.env.DEMO_MODE === 'account' ? [] : ['--bare']), '-p', '--input-format', 'stream-json', '--output-format', 'stream-json',
    '--verbose', '--include-partial-messages', '--permission-prompt-tool', 'stdio',
    '--permission-mode', 'default', '--tools', '', '--strict-mcp-config',
    '--mcp-config', JSON.stringify({ mcpServers: { ios: { type: 'sdk', name: 'ios' } } }),
    '--setting-sources', '', '--model', process.env.DEMO_MODEL || 'claude-sonnet-4-6',
    '--system-prompt', 'You are testing an official Claude Code harness embedded on iOS. Use the ios MCP tools when asked to write or read the demo note. Keep responses brief.'];
  const resumeTarget = require('./resume.cjs').resolveResumeTarget(process.env.CLAUDE_CONFIG_DIR, process.env.DEMO_RESUME);
  if (resumeTarget) args.push('--resume', resumeTarget);
  process.argv = ['node', cli, ...args];
  emit({ type: 'demo_runtime', node: process.version, platform: process.platform,
    arch: process.arch, pid: process.pid, jitless: process.execArgv.includes('--jitless'),
    icu: process.versions.icu || null, flags: process.execArgv,
    harnessVersion: pin.version, harnessSHA256: hash, mode: process.env.DEMO_MODE,
    workspace, resumedSession: process.env.DEMO_RESUME || null });
  await import(pathToFileURL(cli).href);
})().catch(failure);

