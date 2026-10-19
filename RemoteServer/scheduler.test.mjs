import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createScheduler } from './scheduler.mjs';
const flush = () => new Promise(resolve => setImmediate(resolve));
test('independent jobs overlap without duplicate runs and cancellation is isolated', async () => {
  const jobs = new Map(Array.from({ length: 5 }, (_, i) => [i, { id: i, state: 'queued', submission: {} }]));
  const releases = new Map(), starts = [];
  const scheduler = createScheduler({ jobs, maximumConcurrent: 4, save: async () => {}, notify: async () => {}, run: job => new Promise(resolve => {
    starts.push(job.id); releases.set(job.id, () => { if (job.state !== 'cancelled') job.state = 'completed'; resolve(); });
  }) });
  try {
    scheduler.tick(); scheduler.tick(); await flush(); assert.equal(starts.length, 4);
    jobs.get(0).state = 'cancelled'; releases.get(0)(); await flush(); assert.equal(starts.length, 5);
    for (const release of releases.values()) release(); await flush();
    assert.equal(jobs.get(0).state, 'cancelled'); assert.equal(jobs.get(4).state, 'completed');
    assert.equal(new Set(starts).size, 5);
  } finally { scheduler.stop(); }
});
test('push retry survives scheduler restart without replaying generation', async () => {
  const job = { id: 1, state: 'completed', submission: { completion: {} } }, jobs = new Map([[1, job]]);
  let persisted, time = 0, pushes = 0;
  const options = { jobs, now: () => time, save: async job => { persisted = structuredClone(job); }, run: async () => assert.fail('must not generate'), notify: async () => { pushes++; throw new Error('offline'); } };
  const first = createScheduler(options); first.tick(); await flush(); first.stop();
  assert.equal(persisted.pushAttempts, 1); assert.equal(pushes, 1);
  jobs.set(1, persisted); time = persisted.pushNextAttemptAt;
  const second = createScheduler({ ...options, notify: async () => { pushes++; } });
  try { second.tick(); await flush(); assert.equal(pushes, 2); assert.equal(persisted.pushDelivered, true); second.tick(); await flush(); assert.equal(pushes, 2); }
  finally { second.stop(); }
});
