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
var chunk_wchg8n4v_exports = {};
__export(chunk_wchg8n4v_exports, {
  B0a: () => B0a,
  BQs: () => BQs,
  G0a: () => G0a,
  U4o: () => U4o,
  W0a: () => W0a,
  _tt: () => _tt,
  j0a: () => j0a
});
module.exports = __toCommonJS(chunk_wchg8n4v_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
(0, import_chunk_bs4h6795.G)();
var _tt = "continue";
function B0a(t, e, n) {
  if (n && e === _tt && t === _tt + "/") return "/";
  if (e.startsWith("/") && t.length === _tt.length + e.length + 1 && t.startsWith(_tt + e)) return t.slice(_tt.length);
  return t;
}
class o {
  lastResult = null;
  listeners = /* @__PURE__ */ new Set();
  inFlight = null;
}
var l = new import_chunk_pzzqg6s3.ze(() => new o());
function i() {
  return l.of((0, import_chunk_f9x2f6cx.N)());
}
function U4o(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}
function W0a() {
  return i().inFlight;
}
function BQs(t) {
  i().inFlight = t;
}
function j0a() {
  U4o(null), i().inFlight = null;
}
function G0a() {
  let [t, e] = (0, import_chunk_bs4h6795.y)(() => i().lastResult);
  return (0, import_chunk_bs4h6795.H)(() => {
    let n = i();
    return e(n.lastResult), n.listeners.add(e), () => {
      n.listeners.delete(e);
    };
  }, []), t;
}
