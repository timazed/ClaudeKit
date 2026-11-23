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
var chunk_k3z40a7r_exports = {};
__export(chunk_k3z40a7r_exports, {
  GJs: () => GJs,
  jJs: () => jJs,
  jtr: () => jtr
});
module.exports = __toCommonJS(chunk_k3z40a7r_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_3ah5kacx = require("/$bunfs/root/chunk-3ah5kacx.js");
var import_chunk_3nqvc94p = require("/$bunfs/root/chunk-3nqvc94p.js");
var jJs = [1e3, 2e3, 3e3, 4e3];
async function GJs(e, r, s) {
  if (r > 0) await (0, import_chunk_5appeerh.K)(e[r - 1] ?? 0, s);
  return !s.aborted;
}
async function jtr(e) {
  let { signal: r } = e, s = (0, import_chunk_3nqvc94p.e5r)(), o = e.retryDelaysMs ?? jJs, a = false, i = null;
  for (let t = 0; t <= o.length; t++) {
    if (!await GJs(o, t, r)) break;
    try {
      return await (0, import_chunk_3nqvc94p.y0a)(e.projectId, { body: (0, import_chunk_3ah5kacx.LDa)(e.message, e.sourceSessionId), clientMessageId: s }, r, e.credentials), { outcome: "sent" };
    } catch (n) {
      if (i = n, a ||= !(0, import_chunk_3nqvc94p._0a)(n), r.aborted || !(0, import_chunk_3nqvc94p.p6)(n)) break;
    }
  }
  return { outcome: a ? "uncertain" : "not_sent", failure: i };
}
