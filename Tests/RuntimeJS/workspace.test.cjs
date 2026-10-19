const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { Worker } = require('node:worker_threads');
test('concurrent worker workspaces, chdir, ESM and symlinks stay independent', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'claudekit-workspace-'));
  const original = process.cwd();
  const shim = path.resolve(__dirname, '../../Sources/ClaudeKitHarness/Resources/Runtime/shims/workspace.js');
  try {
    await Promise.all(Array.from({ length: 4 }, async (_, i) => {
      const directory = path.join(root, String(i)); await fs.mkdir(directory);
      await new Promise((resolve, reject) => {
        const worker = new Worker(`
          const { workerData } = require('node:worker_threads');
          require(workerData.shim).install(workerData.directory);
          const fs = require('node:fs');
          (async () => {
            fs.mkdirSync('child'); process.chdir('child');
            const esm = await import('node:fs/promises');
            await esm.writeFile('value', String(workerData.i));
            fs.symlinkSync('value', 'link');
            if (fs.readFileSync('link', 'utf8') !== String(workerData.i)) throw new Error('wrong workspace');
            process.chdir('..');
            if (await esm.readFile('child/value', 'utf8') !== String(workerData.i)) throw new Error('wrong chdir');
          })().catch(error => { throw error; });
        `, { eval: true, workerData: { shim, directory, i } });
        worker.once('error', reject); worker.once('exit', code => code ? reject(new Error('worker exit ' + code)) : resolve());
      });
      assert.equal(await fs.readFile(path.join(directory, 'child/value'), 'utf8'), String(i));
    }));
    assert.equal(process.cwd(), original);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});
