'use strict';
// Node workers share a native cwd. Resolve file-system paths at the adapter
// boundary so each official harness isolate has its own logical workspace.
exports.install = function install(workspace) {
  const fs = require('node:fs');
  const path = require('node:path');
  let cwd = fs.realpathSync(workspace);
  const resolve = value => typeof value === 'string' && !path.isAbsolute(value) ? path.resolve(cwd, value) :
    Buffer.isBuffer(value) && !path.isAbsolute(value.toString()) ? Buffer.from(path.resolve(cwd, value.toString())) : value;
  const one = ['access','appendFile','chmod','chown','exists','lchmod','lchown','lutimes','lstat','mkdir','mkdtemp','open','opendir','readdir','readFile','readlink','realpath','rm','rmdir','stat','statfs','truncate','unlink','utimes','watch','watchFile','unwatchFile','writeFile','createReadStream','createWriteStream','openAsBlob'];
  const two = ['copyFile','cp','link','rename'];
  function wrap(object, name, indices) {
    const original = object[name]; if (typeof original !== 'function') return;
    const adapted = function (...args) { for (const index of indices) args[index] = resolve(args[index]); return original.apply(this, args); };
    Object.assign(adapted, original);
    if (typeof original.native === 'function') adapted.native = function (...args) { args[0] = resolve(args[0]); return original.native.apply(this, args); };
    object[name] = adapted;
  }
  for (const name of one) { wrap(fs, name, [0]); wrap(fs, name + 'Sync', [0]); wrap(fs.promises, name, [0]); }
  for (const name of two) { wrap(fs, name, [0,1]); wrap(fs, name + 'Sync', [0,1]); wrap(fs.promises, name, [0,1]); }
  // A relative symlink target is relative to the link, not the caller's cwd.
  for (const object of [fs, fs.promises]) wrap(object, 'symlink', [1]); wrap(fs, 'symlinkSync', [1]);
  for (const object of [fs, fs.promises]) for (const name of ['glob','globSync']) {
    const original = object[name]; if (typeof original !== 'function') continue;
    object[name] = function (pattern, options, ...rest) {
      if (typeof options === 'function') return original.call(this, pattern, { cwd }, options);
      return original.call(this, pattern, { ...options, cwd: options?.cwd ? resolve(options.cwd) : cwd }, ...rest);
    };
  }
  process.cwd = () => cwd;
  process.chdir = next => { const destination = fs.realpathSync(resolve(next)); if (!fs.statSync(destination).isDirectory()) throw new Error('Workspace is not a directory'); cwd = destination; process.env.PWD = cwd; };
  process.env.PWD = cwd;
  require('node:module').syncBuiltinESMExports();
};
