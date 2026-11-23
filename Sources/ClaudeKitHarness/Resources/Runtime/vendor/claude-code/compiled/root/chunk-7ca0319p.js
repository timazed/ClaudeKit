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
var chunk_7ca0319p_exports = {};
__export(chunk_7ca0319p_exports, {
  VXe: () => VXe,
  XDl: () => XDl,
  Yj: () => Yj
});
module.exports = __toCommonJS(chunk_7ca0319p_exports);
var XDl = 65536, VXe = 3e3;
function d(t) {
  t.cancel().catch(() => {
  });
}
async function Yj(t, { maxBytes: o = 65536, timeoutMs: i } = {}) {
  let e;
  try {
    let n = t.body?.getReader();
    if (!n) return;
    if (i !== void 0) e = setTimeout(d, i, n), e.unref?.();
    let r = o;
    for (; ; ) {
      let { done: a, value: c } = await n.read();
      if (a) return;
      if (r -= c.byteLength, r < 0) {
        await n.cancel();
        return;
      }
    }
  } catch {
  } finally {
    if (e !== void 0) clearTimeout(e);
  }
}
