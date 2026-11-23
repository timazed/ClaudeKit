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
var chunk_2b68nqd2_exports = {};
__export(chunk_2b68nqd2_exports, {
  h1s: () => h1s
});
module.exports = __toCommonJS(chunk_2b68nqd2_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function d(e) {
  return e !== void 0 && (0, import_chunk_xcgcdx61.x_)(e) ? { kind: "unresolved", reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more." } : { kind: "copy" };
}
async function h1s(e, o) {
  let [r, l] = await Promise.all([(0, import_chunk_bzyb60p0.vx)(e, o), (0, import_chunk_bzyb60p0.Bd)(o)]), n = l[(0, import_chunk_xcgcdx61.Kn)(e).marketplace ?? ""]?.source;
  if (r === null) return d(n);
  let { source: t } = r.entry, c = (0, import_chunk_bzyb60p0.Pnt)(t, n);
  if (typeof t !== "string" || !c) return { kind: "copy" };
  let i = (0, import_chunk_bzyb60p0.vS)(r.marketplaceInstallLocation) === void 0 ? "workspace" : "system", a = await (0, import_chunk_wj4me9k5.h9)(e, r.marketplaceInstallLocation, t, l, (0, import_chunk_bzyb60p0._A)(), o, i);
  return a.kind === "ok" ? { kind: "folder", path: a.entryPath } : { kind: "unresolved", reason: (0, import_chunk_wj4me9k5.A2t)(a, r.marketplaceInstallLocation, t).message };
}
