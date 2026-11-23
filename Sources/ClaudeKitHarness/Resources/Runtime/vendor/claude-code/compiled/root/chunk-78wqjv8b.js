const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_78wqjv8b_exports = {};
__export(chunk_78wqjv8b_exports, {
  OSa: () => OSa,
  pXn: () => pXn,
  tzs: () => tzs
});
module.exports = __toCommonJS(chunk_78wqjv8b_exports);
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_sgar51s8 = require("/$bunfs/root/chunk-sgar51s8.js");
var import_chunk_kbrc7tnt = require("/$bunfs/root/chunk-kbrc7tnt.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var m = 25;
async function u(o) {
  let t = await (0, import_promises2.open)(o, "r");
  try {
    let n = Buffer.alloc(32);
    await t.read(n, 0, n.length, 0);
    let r = Buffer.alloc(n.readUInt32LE(20));
    await t.read(r, 0, r.length, n.length);
    for (let e = 0; e < r.length; e += r.readUInt32LE(e + 4)) {
      if (r.readUInt32LE(e) !== m) continue;
      let p = r.readUInt32LE(e + 64);
      for (let c = 0; c < p; c++) {
        let i = e + 72 + c * 80;
        if (r.toString("latin1", i, i + 16) !== "__info_plist\0\0\0\0") continue;
        let l = Buffer.alloc(Number(r.readBigUInt64LE(i + 40)));
        return await t.read(l, 0, l.length, r.readUInt32LE(i + 48)), l;
      }
    }
    return null;
  } finally {
    await t.close();
  }
}
async function g() {
  if (!pXn()) return null;
  if ((0, import_chunk_sgar51s8.sye)(process.execPath) !== void 0) return null;
  let o = (0, import_path.join)(tzs(), "Contents", "MacOS"), t = (0, import_path.join)(o, "claude");
  try {
    let n = await u(process.execPath);
    if (n === null) return null;
    let r = (await (0, import_promises.stat)(process.execPath)).ino;
    await (0, import_promises.mkdir)(o, { recursive: true }), await (0, import_promises.writeFile)((0, import_path.join)(o, "..", "Info.plist"), n);
    try {
      if ((await (0, import_promises.stat)(t)).ino === r) return t;
    } catch {
    }
    let e = (0, import_chunk_q7qjcthc.LM)(t);
    await (0, import_promises.link)(process.execPath, e);
    try {
      await (0, import_chunk_q7qjcthc.ra)(e, t);
    } finally {
      await (0, import_promises.unlink)(e).catch(() => {
      });
    }
    return t;
  } catch {
    return null;
  }
}
async function OSa() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "macos") return;
  if (import_chunk_c203g5kd.s.CLAUDE_BG_TCC_DISCLAIMED) {
    import_chunk_c203g5kd.s.unset("CLAUDE_BG_TCC_DISCLAIMED");
    return;
  }
  let t = (import_chunk_c203g5kd.s.CLAUDE_PTY_HOST_NO_STABLE_PATH === "1" || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BG_STABLE_PATH ? null : await g()) ?? process.execPath, r = [...(0, import_chunk_wzdjp7c0.dg)() ? [t] : [t, process.argv[1]], ...process.argv.slice(2)], e = (0, import_chunk_kbrc7tnt.uqr)(process.env);
  e.CLAUDE_BG_TCC_DISCLAIMED = "1", delete e.CLAUDE_PTY_HOST_NO_STABLE_PATH;
  try {
    process.execve(t, r, e, { macDisclaimResponsibility: true });
  } catch {
  }
}
function tzs() {
  return (0, import_path.join)((0, import_chunk_thchq5z2.Bvt)(), "claude", "ClaudeCode.app");
}
function pXn() {
  return process.execPath.startsWith((0, import_path.join)((0, import_chunk_thchq5z2.Bvt)(), "claude", "versions") + import_path.sep);
}
