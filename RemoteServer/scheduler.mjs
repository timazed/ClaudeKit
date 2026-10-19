// Durable state belongs to the host's save function; no generation is replayed here.
export function createScheduler({ jobs, save, run, notify, maximumConcurrent = 4, now = Date.now }) {
  if (!(maximumConcurrent === Infinity || Number.isSafeInteger(maximumConcurrent) && maximumConcurrent > 0)) throw new Error('Invalid concurrency');
  const running = new Set(), notifying = new Set();
  let stopped = false;
  async function push(job) {
    if (stopped || !job.submission.completion || job.pushDelivered || notifying.has(job.id) || (job.pushNextAttemptAt || 0) > now()) return;
    notifying.add(job.id);
    try {
      job.pushAttempts = (job.pushAttempts || 0) + 1;
      job.pushNextAttemptAt = now() + Math.min(3600000, 1000 * 2 ** Math.min(job.pushAttempts, 12));
      await save(job); // Persist retry intent before external delivery (at-least-once).
      await notify(job);
      job.pushDelivered = true;
      await save(job);
    } catch { /* Durable retry intent remains; polling never depends on push. */ }
    finally { notifying.delete(job.id); }
  }
  function tick() {
    if (stopped) return;
    for (const job of jobs.values()) {
      if (!['queued', 'running'].includes(job.state)) { void push(job); continue; }
      if (job.state !== 'queued' || running.has(job.id) || running.size >= maximumConcurrent) continue;
      running.add(job.id);
      void (async () => {
        try {
          job.state = 'running'; await save(job);
          if (job.state !== 'cancelled') await run(job);
          await save(job);
        } catch { job.state = 'interrupted'; job.failure = 'Worker or persistence failed; no automatic generation replay'; try { await save(job); } catch {} }
        finally { running.delete(job.id); tick(); }
      })();
    }
  }
  const timer = setInterval(tick, 1000); timer.unref();
  return { tick, stop() { stopped = true; clearInterval(timer); }, get activeCount() { return running.size; } };
}
