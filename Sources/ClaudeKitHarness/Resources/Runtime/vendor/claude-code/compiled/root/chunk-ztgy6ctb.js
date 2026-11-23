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
var chunk_ztgy6ctb_exports = {};
__export(chunk_ztgy6ctb_exports, {
  jzr: () => jzr,
  nQn: () => nQn,
  rQn: () => rQn
});
module.exports = __toCommonJS(chunk_ztgy6ctb_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
async function nQn() {
  let e = rQn() ? null : await (0, import_chunk_e15pxvhz.$pr)();
  if (e !== null) return { root: e, nested: false, followsShell: false };
  let r = (0, import_chunk_e15pxvhz.Fpr)();
  if (r !== null) return { root: r, nested: true, followsShell: false };
  let o = await H();
  return o === null ? null : { ...o, nested: true };
}
var E = new import_chunk_2904xtvq.j(() => (0, import_crypto.randomBytes)(32));
function jzr(e) {
  return (0, import_crypto.createHmac)("sha256", (0, import_chunk_f9x2f6cx.kr)(E)).update(e).digest().subarray(0, 16).toString("base64url");
}
var O = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set());
function rQn() {
  if ((0, import_chunk_6e68m1dj.h1l)()) return true;
  if (!(0, import_chunk_6e68m1dj.cEe)()) return false;
  let e = (0, import_chunk_f9x2f6cx.kr)(O), r = (0, import_chunk_e15pxvhz.g5e)();
  if (!e.has(r) && (0, import_chunk_e15pxvhz.lao)() === null) e.add(r);
  return e.has(r);
}
var F = 256;
async function H() {
  try {
    if (!((0, import_chunk_6e68m1dj.hn)() || (0, import_chunk_6e68m1dj.cEe)()) || import_chunk_ha393e1n.Ue.isSandboxingEnabled()) return null;
    let e = (0, import_chunk_e15pxvhz.g5e)(), r = (0, import_chunk_6e68m1dj.hn)() ? null : (0, import_chunk_2yx6c1y2.ah)(await (0, import_promises.realpath)(e));
    if (r !== null && ![(0, import_chunk_6e68m1dj.Agn)(), (0, import_chunk_6e68m1dj.HHr)((0, import_chunk_6e68m1dj.Agn)())].some((s) => (0, import_chunk_z6pfqf6e.pn)(r) === (0, import_chunk_2yx6c1y2.ah)(s))) return (0, import_chunk_w578pjby.t)("workspace diff: the process has left the directory in which it was started, so no nested repository is looked for", { level: "warn" }), null;
    if ((0, import_chunk_w5s307zm.jy)(e) !== null) return null;
    let o = (0, import_chunk_18rsj2ts.pe)(), n = await I(r, e);
    if (n.size > 1) {
      let s = (0, import_chunk_e15pxvhz.Ias)(o), l = s === void 0 ? void 0 : n.get(s), D = l !== void 0 && await g(l) === "directory" ? await m(l, r) : null;
      return D === null ? null : { root: D, followsShell: true };
    }
    let [a] = n.values();
    if (a !== void 0) {
      let s = await g(a);
      if (s === "directory") {
        let l = await m(a, r);
        return l === null ? null : { root: l, followsShell: false };
      }
      if (s === "other") return null;
    }
    let u = [], c = 0;
    for await (let s of await (0, import_promises.opendir)(e)) {
      if (++c > F) return null;
      if (!s.isDirectory() || s.name.startsWith(".")) continue;
      let l = (0, import_path.join)(e, s.name);
      if (await g(l) !== "absent") u.push(l);
    }
    let p = (0, import_chunk_2yx6c1y2.ah)(o), y = u.find((s) => {
      let l = (0, import_chunk_2yx6c1y2.ah)(s);
      return p === l || p.startsWith(l + import_path.sep);
    }) ?? (u.length === 1 ? u[0] : void 0), R = y === void 0 ? null : await m(y, r);
    return R === null ? null : { root: R, followsShell: u.length > 1 };
  } catch (e) {
    if ((0, import_chunk_jv7av99m.SS)(e)) (0, import_chunk_w578pjby.t)(`workspace diff: nested repository scan failed: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
    else (0, import_chunk_k449cc64.i)(e);
    return null;
  }
}
async function I(e, r) {
  let o = (0, import_chunk_e15pxvhz.sao)();
  if (e === null) return o;
  let n = /* @__PURE__ */ new Map();
  for (let [a, u] of o) {
    let c = await C(u, r);
    if (c !== null && S(c, e)) n.set(a, c);
  }
  if (n.size < o.size) (0, import_chunk_w578pjby.t)(`workspace diff: ignored ${o.size - n.size} declared checkout(s) that do not resolve or lie outside the launch directory`, { level: "warn" });
  return n;
}
function S(e, r) {
  let o = (0, import_chunk_2yx6c1y2.ah)(e);
  return o === r || o.startsWith(r + import_path.sep);
}
async function C(e, r) {
  if (!(0, import_chunk_6e68m1dj.GKn)(e, r) || (0, import_chunk_w5s307zm._6e)(e, r)) return null;
  try {
    return await (0, import_promises.realpath)(e);
  } catch {
    return null;
  }
}
async function g(e) {
  try {
    return (await (0, import_promises.lstat)((0, import_path.join)(e, ".git"))).isDirectory() ? "directory" : "other";
  } catch (r) {
    let o = (0, import_chunk_jv7av99m.w)(r);
    if (o === "ENOENT" || o === "ENOTDIR") return "absent";
    throw r;
  }
}
async function x(e) {
  try {
    let [r, o, n] = await Promise.all([(0, import_promises.lstat)((0, import_path.join)(e, "HEAD")), (0, import_promises.lstat)((0, import_path.join)(e, "objects")), (0, import_promises.lstat)((0, import_path.join)(e, "refs"))]);
    return r.isFile() && o.isDirectory() && n.isDirectory();
  } catch {
    return false;
  }
}
async function m(e, r) {
  let o = (0, import_chunk_e15pxvhz.eki)(e);
  if (o === null) return null;
  if (r !== null) {
    if ((0, import_chunk_kypvvv9j.r0l)(o.gitDir) !== false) return null;
    if (!await x(o.gitDir)) return null;
  }
  let n = r === null ? await (0, import_chunk_e15pxvhz.$pr)(void 0, e) : o.workTree;
  if (n === null || r === null) return n;
  let a = await C(n, (0, import_chunk_6e68m1dj.HHr)((0, import_chunk_6e68m1dj.Agn)()));
  return a !== null && S(a, r) ? a : null;
}
