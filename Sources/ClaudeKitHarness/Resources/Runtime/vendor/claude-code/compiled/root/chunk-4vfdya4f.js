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
var chunk_4vfdya4f_exports = {};
__export(chunk_4vfdya4f_exports, {
  $De: () => $De
});
module.exports = __toCommonJS(chunk_4vfdya4f_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_promises = require("fs/promises");
var import_path = require("path");
function $De(e, f, c) {
  let { defaultValue: a, mode: T, ensureDir: s = false, indent: p, trailingNewline: w = false } = c;
  function u() {
    return S(a) ? a() : a;
  }
  async function m() {
    let n;
    try {
      n = await (0, import_promises.readFile)(e, "utf8");
    } catch (i) {
      if ((0, import_chunk_jv7av99m.J)(i)) return u();
      throw i;
    }
    let r;
    try {
      r = (0, import_chunk_w578pjby.te)(n);
    } catch (i) {
      return (0, import_chunk_w578pjby.t)(`jsonStore: ${e} is not valid JSON: ${i}`, { level: "warn" }), u();
    }
    let o = f().safeParse(r);
    if (!o.success) return (0, import_chunk_w578pjby.t)(`jsonStore: ${e} failed schema validation: ${o.error.message}`, { level: "warn" }), u();
    return o.data;
  }
  async function d(n) {
    if (s !== false) await (0, import_promises.mkdir)((0, import_path.dirname)(e), { recursive: true, mode: s === true ? void 0 : s.mode });
    let r = (0, import_chunk_w578pjby._)(n, null, p) + (w ? `
` : "");
    await (0, import_chunk_q7qjcthc.yr)(e, r, T);
  }
  let l = Promise.resolve();
  function y(n) {
    let r = l.then(async () => {
      let o = n(await m());
      return await d(o), o;
    });
    return l = r.then(() => {
      return;
    }, () => {
      return;
    }), r;
  }
  return { path() {
    return e;
  }, read: m, write: d, update: y };
}
function S(e) {
  return typeof e === "function";
}
