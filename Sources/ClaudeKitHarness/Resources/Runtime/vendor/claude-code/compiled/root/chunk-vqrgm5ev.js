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
var chunk_vqrgm5ev_exports = {};
__export(chunk_vqrgm5ev_exports, {
  AAe: () => AAe,
  RAe: () => RAe,
  eOi: () => eOi,
  edl: () => edl,
  tOi: () => tOi
});
module.exports = __toCommonJS(chunk_vqrgm5ev_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function AAe(a) {
  return (0, import_chunk_4smdap7r.M)(a.flatMap((t) => t.type === "attachment" ? t.attachment?.type === "credential_org" ? [t.attachment.organizationUuid] : [] : t.type === "system" && t.subtype === "compact_boundary" ? t.compactMetadata?.preCompactOrganizations ?? [] : []).map((t) => String(t).toLowerCase()).reverse()).reverse();
}
function eOi(a) {
  return a.some((t) => (0, import_chunk_865at33z.On)(t) && t.compactMetadata?.preCompactOrganizationsCoverStart !== true) || a.find((t) => AAe([t]).length > 0 || t.type === "assistant" && t.message?.model !== import_chunk_bp9b0hd8.xs)?.type === "assistant";
}
function tOi(a) {
  return a.some((t) => (0, import_chunk_865at33z.On)(t) && t.compactMetadata?.preCompactOrganizationsCoverStart === void 0);
}
function RAe(a, t) {
  let o = AAe(t);
  if (o.length > 0) a.compactMetadata.preCompactOrganizations = o;
  a.compactMetadata.preCompactOrganizationsCoverStart = tOi(t) ? void 0 : !eOi(t);
}
function edl(a) {
  return (0, import_chunk_ma3kja9f.T)(a.compactMetadata) ? { ...a, compactMetadata: (0, import_chunk_qwbhh2k3.Pn)(a.compactMetadata, ["preCompactOrganizations", "preCompactOrganizationsCoverStart"]) } : a;
}
