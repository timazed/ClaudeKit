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
var chunk_18rsj2ts_exports = {};
__export(chunk_18rsj2ts_exports, {
  BUl: () => BUl,
  Bqt: () => Bqt,
  D0r: () => D0r,
  Gqt: () => Gqt,
  Ixt: () => Ixt,
  L0r: () => L0r,
  Mxt: () => Mxt,
  N0r: () => N0r,
  Nz: () => Nz,
  RDo: () => RDo,
  WUl: () => WUl,
  Wqt: () => Wqt,
  jqt: () => jqt,
  k6e: () => k6e,
  oa: () => oa,
  pe: () => pe,
  rQe: () => rQe,
  tra: () => tra,
  uh: () => uh,
  w6e: () => w6e,
  xDo: () => xDo,
  zqt: () => zqt
});
module.exports = __toCommonJS(chunk_18rsj2ts_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_async_hooks = require("async_hooks");
var import_fs = require("fs");
var import_path = require("path");
var i = new import_async_hooks.AsyncLocalStorage(), Bqt = "walked:";
function uh(e, t) {
  return i.run({ cwd: (0, import_chunk_z6pfqf6e.pn)(e) }, t);
}
async function w6e(e) {
  let t = oa();
  if (t === null) return e();
  let n = { outer: r(), isOver: false, look: jqt(t) };
  try {
    return await i.run({ cwd: t, call: n }, e);
  } finally {
    n.isOver = true;
  }
}
function Wqt(e) {
  let t = g();
  return t === void 0 ? i.exit(e) : i.run(t, e);
}
function rQe() {
  let e = r();
  return e?.call === void 0 ? void 0 : e.cwd;
}
function BUl() {
  return r()?.call?.look.physical;
}
function RDo(e) {
  let t = r()?.call;
  return t === void 0 || e !== false && t.look.physical === e;
}
function xDo(e) {
  let t = r()?.call?.look;
  if (t?.notVouched !== void 0) return { atHold: true, found: t.notVouched };
  if (e.notVouched !== void 0) return { atHold: false, found: e.notVouched };
  if (e.physical === null) return { atHold: false, found: "deleted" };
  if (e.physical === void 0) return { atHold: false, found: "unexaminable" };
  return { atHold: false, found: typeof t?.physical === "string" && t.physical.startsWith(Bqt) && e.physical.startsWith(Bqt) ? "identity_changed" : "led_elsewhere" };
}
async function tra(e) {
  return (0, import_chunk_f9x2f6cx.Y)() ? { physical: void 0 } : x(e, await (0, import_chunk_z6pfqf6e.HPt)(e));
}
function jqt(e) {
  return (0, import_chunk_f9x2f6cx.Y)() ? { physical: void 0 } : x(e, (0, import_chunk_z6pfqf6e.XOe)(e));
}
function D0r(e) {
  return (0, import_chunk_t7fzcstv.bt)() ? e() : i.exit(e);
}
function L0r(e, t) {
  return uh(e ?? pe(), t);
}
function k6e(e, t) {
  return e === null ? t() : L0r(e.cwd, t);
}
function Nz() {
  return g() !== void 0;
}
function Ixt(e) {
  let t = (0, import_chunk_z6pfqf6e.pn)(e), n = r();
  if (n?.call !== void 0) {
    let d = jqt(t);
    while (n?.call !== void 0) n.cwd = t, n.call.look = d, n = f(n.call.outer);
  }
  if (n) n.cwd = t;
  else (0, import_chunk_f9x2f6cx.spt)(e);
}
function N0r() {
  return r()?.cwd ?? (0, import_chunk_f9x2f6cx.mP)();
}
function oa() {
  if (r()?.cwd === void 0 && (0, import_chunk_f9x2f6cx.ns)() === null) return null;
  return pe();
}
function pe() {
  try {
    return N0r();
  } catch (e) {
    if ((0, import_chunk_f9x2f6cx.k1e)(e) && (0, import_chunk_f9x2f6cx.ns)() === null) throw e;
    return (0, import_chunk_f9x2f6cx.Te)();
  }
}
function Mxt() {
  return !Nz() && (0, import_chunk_t7fzcstv.bt)() ? void 0 : pe();
}
function Gqt(e) {
  return (0, import_chunk_f9x2f6cx.aFr)() ?? e;
}
function C(e) {
  return Nz() ? e : Gqt(e);
}
function zqt() {
  return C(pe());
}
function WUl() {
  try {
    let e = oa();
    return e === null ? null : C(e);
  } catch {
    return null;
  }
}
function f(e) {
  let t = e;
  while (t?.call?.isOver === true) t = t.call.outer;
  return t;
}
function r() {
  return f(i.getStore());
}
function g() {
  let e = r();
  while (e?.call !== void 0) e = f(e.call.outer);
  return e;
}
function x(e, t) {
  if (t.real !== void 0) return { physical: t.real };
  let n = (d) => t.code === "ENOENT" ? { physical: null } : y(d);
  switch (t.code) {
    case "EPERM":
    case "EACCES":
      return { physical: void 0 };
    case "ENOENT":
    case "UNKNOWN":
    case "EUNKNOWN":
    case "EISDIR":
      return n({ kind: "lookup", code: t.code });
    default:
      return y({ kind: "lookup", code: t.code });
  }
}
function y(e) {
  return { physical: false, notVouched: e };
}
