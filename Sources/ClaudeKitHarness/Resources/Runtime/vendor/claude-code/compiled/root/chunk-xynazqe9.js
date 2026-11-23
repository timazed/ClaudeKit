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
var chunk_xynazqe9_exports = {};
__export(chunk_xynazqe9_exports, {
  Hi: () => Hi,
  iUe: () => iUe,
  qJ: () => qJ,
  xy: () => xy
});
module.exports = __toCommonJS(chunk_xynazqe9_exports);
class qJ extends Error {
  timeoutMs;
  constructor(e, r) {
    super(`${e} timed out after ${r}ms`);
    this.timeoutMs = r;
    this.name = "BoundedTimeoutError";
  }
}
async function Hi(e, r, n) {
  let t, o = new Promise((c, i) => {
    t = setTimeout((s, u, m) => s(new qJ(u, m)), Math.min(r, 2147483647), i, n, r);
  });
  try {
    return await Promise.race([e, o]);
  } finally {
    if (t) clearTimeout(t);
    e.catch(() => {
    });
  }
}
var iUe = 5e3;
function xy(e, r) {
  return Hi(e, iUe, `[runner:stuck] fs op '${r}' (check TMPDIR mount health)`);
}
