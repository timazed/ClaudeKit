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
var chunk_ha95f5eh_exports = {};
__export(chunk_ha95f5eh_exports, {
  BLa: () => BLa,
  I3o: () => I3o,
  QZs: () => QZs,
  ULa: () => ULa
});
module.exports = __toCommonJS(chunk_ha95f5eh_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_qh0nzvn2 = require("/$bunfs/root/chunk-qh0nzvn2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
function QZs(e) {
  let o = (0, import_chunk_bzyb60p0.Qui)(e, (0, import_chunk_bzyb60p0.Qeo)(e, e));
  return o === null ? e : [...e, n(o)];
}
function ULa(e, o) {
  let r = s(e), a = (0, import_chunk_4smdap7r.M)([...r.ended ?? [], ...o]);
  return [...e, n(a.length > 0 ? { ...r, ended: a } : r)];
}
var I3o = (e) => n(s(e)), s = (e) => (0, import_chunk_bzyb60p0.Qui)(e, (0, import_chunk_bzyb60p0.Qeo)(e, e)) ?? { type: "session_cron_carry", tasks: [] };
function BLa(e) {
  return import_chunk_qh0nzvn2.RDt.subscribe(() => {
    try {
      e.append(I3o(e.getSnapshot()));
    } catch (o) {
      (0, import_chunk_w578pjby.t)(`[loop] cancel note not written: ${o instanceof Error ? o.name : "unknown"}`, { level: "error" });
    }
  });
}
var n = (e) => ({ attachment: e, type: "attachment", uuid: (0, import_crypto.randomUUID)(), timestamp: (/* @__PURE__ */ new Date()).toISOString() });
