const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_4b5275ey_exports = {};
__export(chunk_4b5275ey_exports, {
  AEi: () => AEi,
  Alo: () => Alo,
  CEi: () => CEi,
  Clo: () => Clo,
  Dmr: () => Dmr,
  Hmr: () => Hmr,
  Kls: () => Kls,
  Lmr: () => Lmr,
  Nmr: () => Nmr,
  R1t: () => R1t,
  S0n: () => S0n,
  TEi: () => TEi,
  Tlo: () => Tlo,
  krn: () => krn,
  mG: () => mG,
  qls: () => qls,
  vEi: () => vEi
});
module.exports = __toCommonJS(chunk_4b5275ey_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_5qqp06t1 = require("/$bunfs/root/chunk-5qqp06t1.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
function mG() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE;
}
function Hmr() {
  if (!mG()) return;
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  return e ? (0, import_chunk_z6pfqf6e.Pp)(e) : void 0;
}
function Kls() {
  let e = Hmr();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return (0, import_path.join)(e, "known_marketplaces.json");
}
function vEi() {
  let e = Hmr();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return (0, import_path.join)(e, "marketplaces");
}
function TEi() {
  let e = Hmr();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return (0, import_path.join)(e, "plugins");
}
var krn = "cli";
class w {
  keyOf = () => krn;
  statesByKey = /* @__PURE__ */ new Map();
  useKey(e) {
    this.keyOf = e;
  }
  key() {
    return this.keyOf();
  }
  existing(e) {
    return this.statesByKey.get(e);
  }
  current() {
    let e = this.keyOf(), n = this.statesByKey.get(e);
    if (n) return n;
    let i = { path: null, promise: null, extractions: { byDir: /* @__PURE__ */ new Map(), inFlight: /* @__PURE__ */ new Map(), previews: /* @__PURE__ */ new Map(), pruning: /* @__PURE__ */ new Map(), nextSeq: 0 }, cleanupHandle: null };
    return this.statesByKey.set(e, i), i.cleanupHandle = (0, import_chunk_w578pjby.Ct)(async () => {
      if (i.path) try {
        await (0, import_promises.rm)(i.path, { recursive: true, force: true }), (0, import_chunk_w578pjby.t)(`Cleaned up session plugin cache at ${i.path}`);
      } catch (o) {
        (0, import_chunk_w578pjby.t)(`Failed to clean up session plugin cache: ${o}`);
      }
    }), i;
  }
  forget(e) {
    let n = this.statesByKey.get(e);
    return this.statesByKey.delete(e), n;
  }
  reset() {
    for (let e of this.statesByKey.values()) e.cleanupHandle?.();
    this.statesByKey.clear(), this.keyOf = () => krn;
  }
}
var F = new import_chunk_2904xtvq.j(() => new w());
function h() {
  return F.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Tlo() {
  return h().current().extractions;
}
async function R1t() {
  let e = h().current();
  if (e.path) return e.path;
  if (!e.promise) e.promise = (async () => {
    let n = (0, import_crypto.randomBytes)(8).toString("hex"), i = (0, import_path.join)((0, import_chunk_8nvd6fqx.Fp)(), `claude-plugin-session-${n}`);
    return await (0, import_chunk_w578pjby.le)().mkdir(i, { mode: 448 }), e.path = i, (0, import_chunk_w578pjby.t)(`Created session plugin cache at ${i}`), i;
  })();
  return e.promise;
}
function Dmr() {
  let e = h();
  return e.existing(e.key())?.path ?? null;
}
async function qls() {
  let e = h(), n = e.existing(e.key());
  if (!n?.path) return;
  try {
    await (0, import_promises.rm)(n.path, { recursive: true, force: true }), (0, import_chunk_w578pjby.t)(`Cleaned up session plugin cache at ${n.path}`);
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`Failed to clean up session plugin cache: ${i}`);
  } finally {
    n.path = null, n.promise = null;
  }
}
async function Lmr(e) {
  let n = h().forget(e);
  if (!n) return;
  if (n.cleanupHandle?.(), n.promise && !n.path) await n.promise.catch(() => {
  });
  if (n.path) try {
    await (0, import_promises.rm)(n.path, { recursive: true, force: true }), (0, import_chunk_w578pjby.t)(`Cleaned up session plugin cache at ${n.path}`);
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`Failed to clean up session plugin cache: ${i}`);
  }
}
async function Clo(e, n) {
  await (0, import_chunk_w578pjby.le)().mkdir((0, import_path.dirname)(e)), await (0, import_chunk_q7qjcthc.yr)(e, n);
}
async function Z(e) {
  let n = {};
  await P(e, "", n, /* @__PURE__ */ new Set());
  let { zipSync: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-zvmbp0fh.js"))), a = o(n, { level: 6 });
  return (0, import_chunk_w578pjby.t)(`Created ZIP from ${e}: ${Object.keys(n).length} files, ${a.length} bytes`), a;
}
async function P(e, n, i, o) {
  let a = n ? (0, import_path.join)(e, n) : e, g;
  try {
    g = await (0, import_promises.readdir)(a);
  } catch {
    return;
  }
  try {
    let r = await (0, import_promises.stat)(a, { bigint: true });
    if (r.dev !== 0n || r.ino !== 0n) {
      let u = `${r.dev}:${r.ino}`;
      if (o.has(u)) {
        (0, import_chunk_w578pjby.t)(`Skipping symlink cycle at ${a}`);
        return;
      }
      o.add(u);
    }
  } catch {
    return;
  }
  for (let r of g) {
    if (r === ".git") continue;
    let u = (0, import_path.join)(a, r), l = n ? `${n}/${r}` : r, c;
    try {
      c = await (0, import_promises.lstat)(u);
    } catch {
      continue;
    }
    if (c.isSymbolicLink()) continue;
    if (c.isDirectory()) await P(e, l, i, o);
    else if (c.isFile()) try {
      let f = await (0, import_promises.readFile)(u);
      i[l] = [new Uint8Array(f), { os: 3, attrs: (c.mode & 65535) << 16 }];
    } catch (f) {
      (0, import_chunk_w578pjby.t)(`Failed to read file for zip: ${l}: ${f}`);
    }
  }
}
async function Nmr(e, n, i) {
  let o = await (0, import_chunk_w578pjby.le)().readFileBytes(e);
  await S0n(o, n, i);
}
async function S0n(e, n, i) {
  let o = await (0, import_chunk_5qqp06t1.Gst)(e), a = (0, import_chunk_5qqp06t1.wsn)(e);
  await (0, import_chunk_w578pjby.le)().mkdir(n);
  let g = [];
  for (let [r, u] of Object.entries(o)) {
    if (i?.skipEntry?.(r)) continue;
    if (r.endsWith("/")) {
      await (0, import_chunk_w578pjby.le)().mkdir((0, import_path.join)(n, r));
      continue;
    }
    let l = (0, import_path.join)(n, r);
    await (0, import_chunk_w578pjby.le)().mkdir((0, import_path.dirname)(l)), await (0, import_promises.writeFile)(l, u), g.push(r);
    let c = a[r];
    if (c && c & 73) await (0, import_promises.chmod)(l, c & import_chunk_5qqp06t1.zst).catch(() => {
    });
  }
  return (0, import_chunk_w578pjby.t)(`Extracted ZIP to ${n}: ${Object.keys(o).length} entries`), g;
}
async function Alo(e, n) {
  let i = await Z(e);
  await Clo(n, i), await (0, import_chunk_c203g5kd.Za)(e).catch((o) => {
    (0, import_chunk_w578pjby.t)(`Failed to remove ${e} after publishing its zip archive: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
  });
}
function CEi(e) {
  let n = e.replace(/[^a-zA-Z0-9\-_]/g, "-");
  return (0, import_path.join)("marketplaces", `${n}.json`);
}
function AEi(e) {
  return ["github", "git", "url", "settings"].includes(e.source);
}
