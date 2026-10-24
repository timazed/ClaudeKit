// Durable, tool-free jobs using the pinned official Claude Code executable.
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn } from 'node:child_process';
import { StringDecoder } from 'node:string_decoder';
import { fileURLToPath } from 'node:url';
import { notifyCompletion } from './push.mjs';
import { createScheduler } from './scheduler.mjs';
function limit(name, fallback) {
  const value = process.env[name] === undefined ? fallback : Number(process.env[name]);
  if (!Number.isSafeInteger(value) || value < 0) throw new Error('Invalid limit: ' + name);
  return value === 0 ? Infinity : value;
}
const maximumConcurrent = limit('CLAUDEKIT_REMOTE_CONCURRENCY', 4);
const maximumOutstanding = limit('CLAUDEKIT_REMOTE_MAX_OUTSTANDING', 0);
const maximumRetained = limit('CLAUDEKIT_REMOTE_MAX_RETAINED', 0);
const timeoutMs = limit('CLAUDEKIT_REMOTE_TIMEOUT_MS', 300000);
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.env.CLAUDEKIT_REMOTE_DIRECTORY || path.join(here, 'data'));
const cli = path.resolve(process.env.CLAUDEKIT_CLI || path.join(here, '../Sources/ClaudeKitHarness/Resources/Runtime/vendor/claude-code/cli.js'));
const config = process.env.CLAUDEKIT_ACCOUNT_DIRECTORY;
const token = process.env.CLAUDEKIT_REMOTE_TOKEN;
if (!token || token.length < 32 || !config) throw new Error('Configure a strong remote token and the server-owned Claude account directory');
const pin = JSON.parse(await fs.readFile(path.join(here, '../Sources/ClaudeKitHarness/Resources/Runtime/vendor/claude-code/harness-pin.json'), 'utf8'));
if (crypto.createHash('sha256').update(await fs.readFile(cli)).digest('hex') !== pin.cli_sha256) throw new Error('Harness checksum mismatch');
await fs.mkdir(root, { recursive: true, mode: 0o700 });
await fs.mkdir(path.join(root, 'workspace'), { recursive: true, mode: 0o700 });
const jobs = new Map(); const active = new Map();
const writes = new Map(); let mutations = Promise.resolve();
function serialized(action) { const next = mutations.then(action, action); mutations = next.catch(() => {}); return next; }
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function canonical(value) { return Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value; }
const terminal = job => !['queued', 'running'].includes(job.state);
const file = id => path.join(root, id + '.json');
async function save(job) {
  job.updatedAt = Date.now(); const snapshot = JSON.stringify(job);
  const write = (writes.get(job.id) || Promise.resolve()).then(async () => {
    const temporary = file(job.id) + '.' + crypto.randomUUID() + '.tmp';
    await fs.writeFile(temporary, snapshot, { mode: 0o600 }); await fs.rename(temporary, file(job.id));
  });
  writes.set(job.id, write.catch(() => {})); await write;
}

const files = (await fs.readdir(root)).filter(name => name.endsWith('.json'));
if (files.length > maximumRetained) throw new Error('Job retention cleanup required');
for (const name of files) {
  const id = name.slice(0, -5); if (!uuid.test(id)) continue;
  const stat = await fs.stat(file(id)); if (stat.size > 16 * 1024 * 1024) throw new Error('Oversized job record');
  const job = JSON.parse(await fs.readFile(file(id), 'utf8'));
  if (job.id !== id) throw new Error('Invalid job identity');
  if (job.state === 'running') { job.state = 'interrupted'; job.failure = 'Server restarted during generation; no automatic replay'; await save(job); }
  jobs.set(id, job);
}
function publicJob(job) { const { submission, digest, pushDelivered, pushAttempts, pushNextAttemptAt, ...result } = job; return result; }
function reply(res, status, value) { res.writeHead(status, { 'content-type': 'application/json', 'cache-control': 'no-store' }); res.end(JSON.stringify(value)); }
async function body(req) {
  const chunks = []; let size = 0;
  for await (const chunk of req) { size += chunk.length; if (size > 6 * 1024 * 1024) throw new Error('Body too large'); chunks.push(chunk); }
  return JSON.parse(Buffer.concat(chunks).toString());
}
function authorized(req) {
  const actual = Buffer.from(req.headers.authorization || ''), expected = Buffer.from('Bearer ' + token);
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}
const server = http.createServer(async (req, res) => {
  try {
    if (!authorized(req)) return reply(res, 401, { error: 'Unauthorized' });
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname === '/v1/jobs' && req.method === 'POST') {
      const submission = await body(req); return await serialized(async () => { const id = String(submission.id || '').toLowerCase(); const request = submission.request;
      if (!uuid.test(id) || !request || typeof request.text !== 'string' || Buffer.byteLength(request.text) > 1024 * 1024 || !/^[a-zA-Z0-9_.:-]{1,100}$/.test(submission.model || '') ||
          request.webSearch?.mode === 'live' || (request.images?.length || 0) || request.memory || request.personaOverride || (request.skills?.length || 0)) return reply(res, 400, { error: 'Invalid request' });
      if (submission.completion && (!/^[a-fA-F0-9]{32,512}$/.test(submission.completion.deviceToken || '') || !['silent','alert'].includes(submission.completion.mode))) return reply(res, 400, { error: 'Invalid push request' });
      const digest = crypto.createHash('sha256').update(JSON.stringify(canonical(submission))).digest('hex');
      if (jobs.has(id)) {
        const job = jobs.get(id); return reply(res, job.digest === digest ? 200 : 409, job.digest === digest ? publicJob(job) : { error: 'Idempotency conflict' });
      }
      if (submission.parentJobID) {
        const parent = jobs.get(String(submission.parentJobID).toLowerCase());
        if (!parent || parent.state !== 'completed' || !uuid.test(parent.sessionID || '') || request.executionMode === 'ephemeral') return reply(res, 400, { error: 'Parent must be a completed persistent job' });
      }
      if (jobs.size >= maximumRetained || [...jobs.values()].filter(j => !terminal(j)).length >= maximumOutstanding) return reply(res, 429, { error: 'Queue full' });
      const job = { id, digest, submission, state: 'queued', createdAt: Date.now(), updatedAt: Date.now() };
      await save(job); jobs.set(id, job); reply(res, 202, publicJob(job)); scheduler.tick(); return;
      });
    }
    const match = /^\/v1\/jobs\/([a-f0-9-]+)$/i.exec(url.pathname);
    if (!match || !uuid.test(match[1]) || !jobs.has(match[1].toLowerCase())) return reply(res, 404, { error: 'Unknown job' });
    const job = jobs.get(match[1].toLowerCase());
    if (req.method === 'DELETE' && !terminal(job)) {
      job.state = 'cancelled';
      if (active.has(job.id)) { const child = active.get(job.id); child.kill('SIGTERM'); setTimeout(() => { if (child.exitCode === null && child.signalCode === null) child.kill('SIGKILL'); }, 3000).unref(); }
      await save(job);
    } else if (req.method !== 'GET' && req.method !== 'DELETE') return reply(res, 405, { error: 'Method not allowed' });
    reply(res, 200, publicJob(job));
  } catch { if (!res.headersSent) reply(res, 400, { error: 'Request could not be processed' }); else res.destroy(); }
});
server.headersTimeout = 10000; server.requestTimeout = 30000;
server.listen(Number(process.env.PORT || 8787), '127.0.0.1', () => process.send?.({ port: server.address().port })); // Put TLS/authenticated ingress in front for remote devices.
const scheduler = createScheduler({ jobs, save, run, notify: notifyCompletion, maximumConcurrent });
server.on('close', () => scheduler.stop());
async function run(job) {
  const request = job.submission.request;
  const args = [cli, '-p', '--input-format', 'stream-json', '--output-format', 'stream-json', '--verbose', '--tools', '', '--strict-mcp-config', '--mcp-config', '{"mcpServers":{}}', '--setting-sources', '', '--model', job.submission.model];
  if (request.executionMode === 'ephemeral') args.push('--no-session-persistence');
  else if (job.submission.parentJobID) args.push('--resume', jobs.get(String(job.submission.parentJobID).toLowerCase()).sessionID, '--fork-session');
  else args.push('--session-id', job.id);
  if (request.outputSchema) args.push('--json-schema', JSON.stringify(request.outputSchema));
  if (request.formatInstructions) args.push('--append-system-prompt', String(request.formatInstructions));
  const env = { ...process.env, CLAUDE_CONFIG_DIR: path.resolve(config), DISABLE_AUTOUPDATER: '1', CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: '1' };
  for (const key of ['ANTHROPIC_API_KEY','ANTHROPIC_AUTH_TOKEN','CLAUDE_CODE_OAUTH_TOKEN','ANTHROPIC_BASE_URL','CLAUDE_CODE_USE_BEDROCK','CLAUDE_CODE_USE_VERTEX','CLAUDE_CODE_USE_FOUNDRY','CLAUDEKIT_REMOTE_TOKEN']) delete env[key];
  const child = spawn(process.execPath, args, { cwd: path.join(root, 'workspace'), env, stdio: ['pipe','pipe','ignore'] }); active.set(job.id, child);
  const text = request.text + (request.context == null ? '' : '\n\nHost app context:\n' + JSON.stringify(request.context));
  child.stdin.on('error', () => {});
  child.stdin.end(JSON.stringify({ type: 'user', message: { role: 'user', content: text }, parent_tool_use_id: null, session_id: '' }) + '\n');
  let buffer = '', result, invalid = false; const utf8 = new StringDecoder('utf8');
  const timer = Number.isFinite(timeoutMs) ? setTimeout(() => { invalid = true; child.kill('SIGKILL'); }, timeoutMs) : undefined;
  child.stdout.on('data', chunk => {
    buffer += utf8.write(chunk);
    if (Buffer.byteLength(buffer) > 8 * 1024 * 1024) { invalid = true; child.kill('SIGKILL'); return; }
    let index;
    while ((index = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, index); buffer = buffer.slice(index + 1);
      try { const event = JSON.parse(line); if (event.type === 'result') result = event; } catch { /* Only structured frames are consumed. */ }
    }
  });
  await new Promise(resolve => { child.once('error', () => { invalid = true; resolve(); }); child.once('close', resolve); }); clearTimeout(timer); active.delete(job.id);
  if (job.state === 'cancelled') return;
  if (invalid || !result || result.is_error !== false) { job.state = 'failed'; job.failure = 'Official harness did not complete successfully'; return; }
  job.state = 'completed'; job.sessionID = request.executionMode === 'ephemeral' ? undefined : result.session_id; job.text = result.result || ''; job.structuredOutput = result.structured_output;
  job.usage = { inputTokens: result.usage?.input_tokens || 0, outputTokens: result.usage?.output_tokens || 0 };
  if (Buffer.byteLength(JSON.stringify(publicJob(job))) > 8 * 1024 * 1024) {
    delete job.text; delete job.structuredOutput; job.state = 'failed'; job.failure = 'Result exceeds client response limit';
  }
}
scheduler.tick();
