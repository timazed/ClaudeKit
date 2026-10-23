import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { fork } from 'node:child_process';
import { once } from 'node:events';
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
test('HTTP receipt replay, conflict, authentication and restart recovery without generation', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'claudekit-remote-'));
  const token = crypto.randomBytes(32).toString('hex');
  const id = crypto.randomUUID(), interruptedID = crypto.randomUUID();
  const submission = { id, model: 'test', request: { text: 'already completed', executionMode: 'threaded', images: [] } };
  const digest = crypto.createHash('sha256').update(JSON.stringify(canonical(submission))).digest('hex');
  await fs.writeFile(path.join(root, id + '.json'), JSON.stringify({ id, submission, digest, state: 'completed', text: 'receipt', createdAt: 1, updatedAt: 1 }));
  await fs.writeFile(path.join(root, interruptedID + '.json'), JSON.stringify({ id: interruptedID, submission: { request: {} }, state: 'running', createdAt: 1, updatedAt: 1 }));
  const child = fork(new URL('./server.mjs', import.meta.url), [], { execPath: process.execPath,
    env: { ...process.env, PORT: '0', CLAUDEKIT_REMOTE_TOKEN: token, CLAUDEKIT_REMOTE_DIRECTORY: root, CLAUDEKIT_ACCOUNT_DIRECTORY: path.join(root, 'empty-account') },
    stdio: ['ignore', 'ignore', 'pipe', 'ipc'] });
  let errors = ''; child.stderr.on('data', chunk => { errors += chunk; });
  try {
    const port = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Server startup timed out')), 10000);
      child.once('message', value => { clearTimeout(timer); resolve(value.port); });
      child.once('exit', () => { clearTimeout(timer); reject(new Error('Server exited: ' + errors)); });
    });
    const request = (url, options = {}) => fetch(`http://127.0.0.1:${port}${url}`, { ...options, headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json', ...options.headers } });
    assert.equal((await request('/v1/jobs/' + id, { headers: { Authorization: 'invalid' } })).status, 401);
    const receipt = await (await request('/v1/jobs/' + id)).json();
    assert.equal(receipt.text, 'receipt'); assert.equal(receipt.submission, undefined);
    const replay = await request('/v1/jobs', { method: 'POST', body: JSON.stringify(submission) });
    assert.equal(replay.status, 200); assert.equal((await replay.json()).text, 'receipt');
    const conflict = await request('/v1/jobs', { method: 'POST', body: JSON.stringify({ ...submission, request: { ...submission.request, text: 'changed' } }) });
    assert.equal(conflict.status, 409);
    assert.equal((await (await request('/v1/jobs/' + interruptedID)).json()).state, 'interrupted');
    assert.equal((await request('/v1/jobs', { method: 'POST', body: JSON.stringify({ ...submission, id: crypto.randomUUID(), parentJobID: crypto.randomUUID() }) })).status, 400);
    assert.equal(JSON.parse(await fs.readFile(path.join(root, interruptedID + '.json'), 'utf8')).state, 'interrupted');
  } finally {
    if (child.exitCode === null && child.signalCode === null) {
      const exited = once(child, 'exit'); child.kill('SIGTERM'); await exited;
    }
    await fs.rm(root, { recursive: true, force: true });
  }
});
