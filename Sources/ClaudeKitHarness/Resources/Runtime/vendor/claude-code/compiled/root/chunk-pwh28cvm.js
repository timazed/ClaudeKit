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
var chunk_pwh28cvm_exports = {};
__export(chunk_pwh28cvm_exports, {
  I5t: () => I5t
});
module.exports = __toCommonJS(chunk_pwh28cvm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3bgaher8 = require("/$bunfs/root/chunk-3bgaher8.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class i {
  activePark = null;
}
var d = new import_chunk_2904xtvq.j(() => new i());
async function I5t(r, e, n, a) {
  if (!(0, import_chunk_865at33z.sf)()) return false;
  let o = d.of(r), t = await (0, import_chunk_3bgaher8.KKs)(e, n, a);
  switch (t.kind) {
    case "refused":
      return false;
    case "already":
      if (o.activePark?.needs !== e) s(o, e, { tempo: "idle", needs: void 0, detail: "" }, a);
      return true;
    case "wrote":
      return s(o, e, t.prior, a), true;
  }
}
function s(r, e, n, a) {
  r.activePark?.unsubscribe();
  let o = (0, import_chunk_f9x2f6cx.MI)(() => {
    if ((0, import_chunk_865at33z.sf)()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    r.activePark = null, t.unsubscribe(), (0, import_chunk_3bgaher8.qKs)(e, t.prior, t.storageV5).catch(import_chunk_9e5mdyfk.Lu);
  });
  r.activePark = { needs: e, prior: n, storageV5: a, unsubscribe: o };
}
