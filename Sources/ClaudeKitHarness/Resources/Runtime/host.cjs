'use strict';
// One native Node instance; independent session channels with isolated logical workspaces.
const fs = require('node:fs');
const readline = require('node:readline');
const { Worker } = require('node:worker_threads');
const path = require('node:path');
const { StringDecoder } = require('node:string_decoder');
const input = process.env.CLAUDEKIT_INPUT_FD
  ? fs.createReadStream(null, { fd: Number(process.env.CLAUDEKIT_INPUT_FD), autoClose: false }) : process.stdin;
function emit(value) {
  const line = JSON.stringify(value) + '\n';
  if (process.env.CLAUDEKIT_OUTPUT_FD) fs.writeSync(Number(process.env.CLAUDEKIT_OUTPUT_FD), line);
  else process.stdout.write(line);
}
const channels = new Map();
async function close(channel = 'main') {
  const old = channels.get(channel);
  if (!old) return;
  channels.delete(channel);
  await old.worker.terminate();
  emit({ channel, generation: old.generation, event: { type: 'host_closed' } });
}
let lifecycle = Promise.resolve();
const lines = readline.createInterface({ input, crlfDelay: Infinity });
lines.on('line', line => {
  let command;
  try {
    if (Buffer.byteLength(line) > 8 * 1024 * 1024) throw new Error('Protocol input exceeds limit');
    command = JSON.parse(line);
    command.channel = command.channel || 'main';
    if (command.op === 'send') {
      lifecycle = lifecycle.then(() => {
        const active = channels.get(command.channel);
        if (active?.generation === command.generation) active.worker.stdin.write(JSON.stringify(command.message) + "\n");
      }).catch(() => emit({ channel: command.channel, generation: command.generation, event: { type: 'host_error', message: 'Harness input failed' } }));
      return;
    }
    lifecycle = lifecycle.then(async () => {
      const channel = command.channel;
      const active = channels.get(channel);
      if (command.op === 'flush') {
        const current = active;
        if (current?.generation !== command.generation) return;
        let persisted = false;
        for (let attempt = 0; attempt < 120; attempt++) {
          try {
            const file = require('./resume.cjs').resolveResumeTarget(current.options.configDirectory, command.sessionID);
            const fd = fs.openSync(file, 'r');
            try {
              const size = fs.fstatSync(fd).size;
              const tail = Buffer.alloc(Math.min(size, 2 * 1024 * 1024));
              fs.readSync(fd, tail, 0, tail.length, size - tail.length);
              persisted = tail.toString().split('\n').some(line => {
                try { return JSON.parse(line).uuid === command.messageUUID; } catch { return false; }
              });
            } finally { fs.closeSync(fd); }
          } catch {}
          if (persisted) break;
          await new Promise(resolve => setTimeout(resolve, 25));
        }
        if (channels.get(channel) === current) emit({ channel, generation: current.generation, event: { type: 'host_flushed', persisted } });
        return;
      }
      if (command.op === 'closeChannel') { await close(channel); return; }
      if (command.op === 'close') { if (active?.generation === command.generation) await close(channel); return; }
      if (command.op !== 'open') throw new Error('Unknown host operation');
      await close(channel);
      const options = command.options;
      fs.mkdirSync(options.workspace, { recursive: true });
      const worker = new Worker(path.join(__dirname, 'session.cjs'), {
        workerData: options, resourceLimits: { stackSizeMb: 16 },
        stdin: true, stdout: true, stderr: true
      });
      const current = { worker, generation: command.generation, options }; channels.set(channel, current);
      worker.on('message', event => {
        if (channels.get(channel) === current) emit({ channel, generation: current.generation, event });
      });
      // Parse structured harness output. Never export arbitrary stderr
      // or crash stacks, which may contain credentials or conversation data.
      let buffer = ''; const decoder = new StringDecoder('utf8');
      worker.stdout.on('data', chunk => {
        if (channels.get(channel) !== current) return;
        buffer += decoder.write(chunk);
        let index;
        while ((index = buffer.indexOf('\n')) >= 0) {
          const line = buffer.slice(0, index); buffer = buffer.slice(index + 1);
          if (Buffer.byteLength(line) > 8 * 1024 * 1024) { emit({ channel, generation: current.generation, event: { type: 'host_error', message: 'Protocol line exceeds limit' } }); void close(channel); return; }
          try { if (channels.get(channel) === current) emit({ channel, generation: current.generation, event: JSON.parse(line) }); } catch {}
        }
        if (Buffer.byteLength(buffer) > 8 * 1024 * 1024) { emit({ channel, generation: current.generation, event: { type: 'host_error', message: 'Protocol line exceeds limit' } }); void close(channel); }
      });
      worker.stderr.resume();
      worker.on('error', () => {
        if (channels.get(channel) === current) emit({ channel, generation: current.generation, event: { type: 'host_error', message: 'Harness isolate failed' } });
      });
      worker.on('exit', code => {
        if (channels.get(channel) === current) {
          channels.delete(channel);
          emit({ channel, generation: current.generation, event: options.command === 'logout' && code === 0 ? { type: 'host_logged_out' } : { type: 'host_error', message: `Harness isolate exited (${code})` } });
        }
      });
    }).catch(() => emit({ channel: command.channel, generation: command.generation, event: { type: 'host_error', message: 'Harness lifecycle operation failed' } }));
  } catch { emit({ channel: command?.channel, generation: command?.generation, event: { type: 'host_error', message: 'Invalid host command' } }); }
});
lines.on('close', () => { lifecycle = lifecycle.then(() => Promise.all([...channels.keys()].map(close))); });
emit({ generation: '', event: { type: 'host_ready', pid: process.pid, platform: process.platform } });
