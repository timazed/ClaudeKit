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
var chunk_d2tjaek4_exports = {};
__export(chunk_d2tjaek4_exports, {
  IZ: () => IZ,
  K2t: () => K2t,
  OV: () => OV,
  V2t: () => V2t,
  Wg: () => Wg,
  Xji: () => Xji,
  YP: () => YP,
  Yji: () => Yji,
  fEo: () => fEo,
  kg: () => kg
});
module.exports = __toCommonJS(chunk_d2tjaek4_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var YP = "CLAUDE_CODE_PROCESS_WRAPPER", V2t = 12e3, c = { argv: [], error: null, platformIgnored: false, record: "" };
class f {
  memoRaw = void 0;
  memoState = c;
  getState() {
    let r = (0, import_chunk_ch6jxpf8.R_)(() => process.env[YP]);
    if (!r) return c;
    let e = r === this.memoRaw ? this.memoState.error : null;
    if (r === this.memoRaw && e === null) return this.memoState;
    if (this.memoRaw = r, this.memoState = v(r), this.memoState.error && this.memoState.error !== e) (0, import_chunk_w578pjby.t)(`${YP} is set but can't be used \u2014 self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`, { level: "error" });
    else if (this.memoState.platformIgnored) (0, import_chunk_w578pjby.t)(`${YP} is set but ignored on Windows \u2014 the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`, { level: "warn" });
    return this.memoState;
  }
}
var S = new import_chunk_2904xtvq.j(() => new f());
function fEo() {
  return S.of((0, import_chunk_f9x2f6cx.N)().host).getState();
}
function Wg() {
  return fEo().argv;
}
function kg() {
  return fEo().error;
}
async function OV() {
  if (kg() !== null) return false;
  let r = Wg();
  if (r.length === 0) return true;
  let e = Xji(r)[0];
  return e === void 0 ? true : Yji(e);
}
async function Yji(r) {
  try {
    if (!(await (0, import_promises.stat)(r)).isFile()) return false;
    return await (0, import_promises.access)(r, import_fs.constants.X_OK), true;
  } catch {
    return false;
  }
}
function Xji(r) {
  let e = r[0];
  return e !== void 0 && e.startsWith("/") ? [e] : [];
}
async function K2t() {
  let r = kg();
  if (r) return r;
  if (await OV()) return null;
  return `${YP}: launcher \`${Wg()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry`;
}
function IZ() {
  return fEo().record;
}
function v(r) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return { argv: [], error: null, platformIgnored: true, record: "" };
  let e;
  try {
    e = y(r);
  } catch (n) {
    return i(n instanceof Error ? n.message : String(n));
  }
  if (e.length === 0) return i("the value is set but contains no launcher \u2014 unset the variable to run without one, or set it to the absolute path of your launcher");
  let s = e[0];
  if (s === process.execPath || s === (0, import_path.join)((0, import_chunk_thchq5z2.Tme)(), "claude")) return i(`launcher \`${s}\` is Claude Code's own launch path \u2014 point ${YP} at your launcher, not at claude`);
  if (!(0, import_path.isAbsolute)(s)) return i("the launcher must be an absolute path, not a bare name resolved via PATH");
  try {
    let n = (0, import_fs.statSync)(s);
    if (!n.isFile() || (n.mode & 73) === 0) return i(`launcher \`${s}\` is not an executable regular file`);
  } catch {
    return i(`launcher \`${s}\` does not exist or is not readable`);
  }
  return { argv: e, error: null, platformIgnored: false, record: e.map((n) => /[\s"]/.test(n) ? (0, import_chunk_w578pjby._)(n) : n).join(" ") };
}
function i(r) {
  return { argv: [], error: `${YP}: ${r}`, platformIgnored: false, record: "" };
}
var P = ";|&$()`<>";
function y(r) {
  let e = r.trim();
  if (e === "") return [];
  if (e.startsWith("[")) {
    let o;
    try {
      o = (0, import_chunk_w578pjby.te)(e);
    } catch {
      throw Error("value starts with `[` but is not valid JSON");
    }
    if (!Array.isArray(o) || !o.every((a) => typeof a === "string")) throw Error("JSON form must be an array of strings");
    if (o.length > 0 && o.some((a) => a === "")) {
      if (o.every((a) => a === "")) return [];
      throw Error("the JSON array contains an empty element \u2014 remove it, or fill in the value it was a placeholder for");
    }
    return o;
  }
  let s = [], n = "", u = false, l = false;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    if (l) {
      if (a === "\\" && (e[o + 1] === '"' || e[o + 1] === "\\")) n += e[++o];
      else if (a === '"') l = false;
      else n += a;
      continue;
    }
    if (a === '"') {
      l = true, u = true;
      continue;
    }
    if (/\s/.test(a)) {
      if (u) s.push(n), n = "", u = false;
      continue;
    }
    if (P.includes(a)) throw Error("the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) \u2014 it is an argv list, not a shell command");
    n += a, u = true;
  }
  if (l) throw Error("unterminated double quote");
  if (u) s.push(n);
  if (s.length > 0 && s.some((o) => o === "")) {
    if (s.every((o) => o === "")) return [];
    throw Error('the value contains an empty `""` token \u2014 remove it, or fill in the value it was a placeholder for');
  }
  return s;
}
