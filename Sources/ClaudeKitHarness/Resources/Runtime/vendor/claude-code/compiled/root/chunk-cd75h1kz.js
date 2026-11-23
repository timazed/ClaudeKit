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
var chunk_cd75h1kz_exports = {};
__export(chunk_cd75h1kz_exports, {
  Bo: () => Bo
});
module.exports = __toCommonJS(chunk_cd75h1kz_exports);
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_2567t09g = require("/$bunfs/root/chunk-2567t09g.js");
function Bo(r, m) {
  let { signalB: n, timeoutMs: i, refTimer: u, timeoutError: s, fewListeners: b } = m ?? {}, t = b ? new AbortController() : (0, import_chunk_cbnm4p23._r)();
  if (r?.aborted || n?.aborted) return t.abort(), { signal: t.signal, cleanup: () => {
  } };
  let e, o = () => {
    if (e !== void 0) clearTimeout(e);
    t.abort();
  };
  if (i !== void 0) {
    let a = Math.min(i, import_chunk_2567t09g.au);
    if (e = s ? setTimeout((d) => d.abort(new DOMException("The operation timed out.", "TimeoutError")), a, t) : setTimeout(o, a), !u) e.unref?.();
  }
  r?.addEventListener("abort", o), n?.addEventListener("abort", o);
  let l = () => {
    if (e !== void 0) clearTimeout(e);
    r?.removeEventListener("abort", o), n?.removeEventListener("abort", o);
  };
  return { signal: t.signal, cleanup: l };
}
