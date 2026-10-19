'use strict';
const { parentPort, workerData: options, threadId } = require('node:worker_threads');
const { Readable, Writable } = require('node:stream');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const crypto = require('node:crypto');
const emit = event => parentPort.postMessage(event);
require('./shims/workspace.js').install(options.workspace);
require('./shims/fetch.js').installWebGlobals();
require('./shims/wasm-stub.js').install();
require('./shims/process-title.js').install();
require('./shims/intl.js').install();
require('./shims/fs-safe-copy.js').install();
require('./shims/child_process.js').install();
require('node:module').syncBuiltinESMExports();
// process.exit in a Worker exits that isolate, never the native app's Node host.
process.on('uncaughtException', error => emit({ type: 'host_error', message: options.mode === 'fixture' ? String(error.stack) : 'Unhandled harness error' }));
process.on('unhandledRejection', error => emit({ type: 'host_error', message: options.mode === 'fixture' ? String(error.stack) : 'Unhandled harness rejection' }));
(async () => {
  for (const key of ['ANTHROPIC_API_KEY', 'ANTHROPIC_AUTH_TOKEN', 'CLAUDE_CODE_OAUTH_TOKEN', 'CLAUDE_CODE_SIMPLE',
    'ANTHROPIC_BASE_URL', 'CLAUDE_CODE_ENTRYPOINT', 'CLAUDE_CODE_USE_BEDROCK', 'CLAUDE_CODE_USE_VERTEX', 'CLAUDE_CODE_USE_FOUNDRY']) delete process.env[key];
  Object.assign(process.env, {
    CLAUDE_CONFIG_DIR: options.configDirectory, XDG_CONFIG_HOME: options.configDirectory,
    XDG_DATA_HOME: options.configDirectory, XDG_STATE_HOME: options.configDirectory,
    XDG_CACHE_HOME: options.cacheDirectory, DISABLE_AUTOUPDATER: '1',
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1', DISABLE_TELEMETRY: '1', DISABLE_ERROR_REPORTING: '1',
    USE_BUILTIN_RIPGREP: '0', TERM: 'dumb', NO_COLOR: '1', SHELL: '/bin/sh'
  });
  if (options.mode === 'fixture') {
    process.env.DEMO_NONCE = options.nonce || crypto.randomUUID();
    const server = await require('./fixture.cjs').start(emit);
    process.env.ANTHROPIC_BASE_URL = `http://127.0.0.1:${server.address().port}`;
    process.env.ANTHROPIC_API_KEY = 'fixture-key-not-a-real-credential';
  } else if (options.mode === 'apiKey') {
    if (!options.apiKey) throw new Error('API key required');
    process.env.ANTHROPIC_API_KEY = options.apiKey;
  } else if (options.mode !== 'account') throw new Error('Unknown authentication mode');
  const cli = path.join(__dirname, 'vendor/claude-code/cli.js');
  const hash = crypto.createHash('sha256').update(fs.readFileSync(cli)).digest('hex');
  if (hash !== 'bc3358282800e3e99daa8e71ac5b7b1566bd0d7ca7eb94f714a7859365d3163f') throw new Error('Harness checksum mismatch');
  const args = [...(options.mode === 'account' ? [] : ['--bare']), '-p', '--input-format', 'stream-json',
    '--output-format', 'stream-json', '--verbose', '--replay-user-messages', '--include-partial-messages', '--permission-prompt-tool', 'stdio',
    '--permission-mode', 'default', '--tools', options.webSearch ? 'WebSearch' : '', '--strict-mcp-config', '--mcp-config',
    JSON.stringify({ mcpServers: { ios: { type: 'sdk', name: 'ios' } } }), '--setting-sources', '',
    '--model', options.model || 'claude-sonnet-4-6', '--system-prompt', options.instructions || 'Be helpful and concise.'];
  if (options.webSearch) args.push("--settings", JSON.stringify({ permissions: { ask: ["WebSearch"] } }));
  if (options.outputSchema) args.push("--json-schema", JSON.stringify(options.outputSchema));
  if (options.ephemeral) args.push("--no-session-persistence");
  if (options.resume && !options.ephemeral) args.push('--resume', require('./resume.cjs').resolveResumeTarget(options.configDirectory, options.resume));
  process.argv = ['node', cli, ...(options.command === 'logout' ? ['auth', 'logout'] : args)];
  emit({ type: 'host_runtime', pid: process.pid, threadId, platform: process.platform,
    node: process.version, harnessVersion: '2.1.112', harnessSHA256: hash,
    jitless: process.execArgv.includes('--jitless') });
  await import(pathToFileURL(cli).href);
})().catch(() => emit({ type: 'host_error', message: 'Harness initialization failed' }));
