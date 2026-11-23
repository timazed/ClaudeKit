'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const esbuild = require('esbuild');
const rewritePattern = require('regexpu-core');

const extracted = path.resolve(__dirname, '../Artifacts/extracted');
const runtime = path.resolve(__dirname, '../Runtime');
const compiled = path.join(runtime, 'compiled');
const manifest = JSON.parse(fs.readFileSync(path.join(extracted, 'manifest.json')));
const pin = require('../../../HarnessDemo/ThirdParty/claude-code.json');
const guardModule = 'root/chunk-jq3ec90n.js';
const guard = 'if (!X || parseInt(X) < 22)';
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
if (manifest.binary_sha256 !== pin.binary_sha256 || manifest.entry !== '/$bunfs/root/cli') {
  throw new Error('Unexpected module graph or entry point');
}
fs.rmSync(compiled, { recursive: true, force: true });
let adaptedGuard = false;
for (const item of manifest.modules) {
  if (item.path.endsWith('.node')) continue;
  const source = fs.readFileSync(path.join(extracted, item.path));
  if (hash(source) !== item.sha256) throw new Error('Module checksum mismatch: ' + item.path);
  const target = path.join(compiled, item.path);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (((item.flags >>> 8) & 255) !== 1) {
    fs.writeFileSync(target, source);
    continue;
  }
  let { code } = esbuild.transformSync(source.toString(), {
    format: 'cjs', target: 'node18', supported: { 'dynamic-import': false },
    define: {
      'import.meta.require': 'require', 'import.meta.dirname': '__dirname',
      'import.meta.path': '__filename', 'import.meta.url': '__prototypeModuleURL',
    },
    banner: 'const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;',
    sourcefile: item.name,
  });
  if (item.path === 'root/chunk-8bkqeb5d.js') {
    // NodeMobile 18 lacks the Unicode sets flag used by the terminal-width module.
    const pattern = String.raw`^\p{RGI_Emoji}$`;
    const original = `new RegExp(${JSON.stringify(pattern)}, "v")`;
    if (!code.includes(original)) throw new Error('Review upstream emoji-width expression');
    const compatible = rewritePattern(pattern, 'v', { unicodeSetsFlag: 'transform' });
    code = code.replace(original, () => `new RegExp(${JSON.stringify(compatible)}, "u")`);
  }
  if (item.path === guardModule) {
    if (code.split(guard).length !== 2) throw new Error('Review upstream Node version check');
    code = code.replace(guard, 'if ((!X || parseInt(X) < 22) && process.platform !== "ios")');
    adaptedGuard = true;
  }
  fs.writeFileSync(target, code);
}
if (!adaptedGuard || hash(fs.readFileSync(path.join(compiled, 'root/cli'))) !== pin.cli_sha256) {
  throw new Error('Review generated entry and iOS compatibility patch');
}
fs.mkdirSync(path.join(runtime, 'vendor'), { recursive: true });
fs.writeFileSync(path.join(runtime, 'vendor/harness-pin.json'), JSON.stringify(pin));
for (const name of ['core-js', 'ws']) {
  const destination = path.join(runtime, 'node_modules', name);
  fs.rmSync(destination, { recursive: true, force: true });
  fs.cpSync(path.resolve(__dirname, '../node_modules', name), destination, { recursive: true });
}
console.log('Prepared', manifest.modules.length, 'modules/assets for Claude Code', pin.version);
