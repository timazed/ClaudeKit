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
var chunk_gftn60qp_exports = {};
__export(chunk_gftn60qp_exports, {
  OWi: () => OWi,
  OYe: () => OYe,
  _cn: () => _cn,
  gcn: () => gcn,
  oWn: () => oWn,
  ok: () => ok,
  sWn: () => sWn,
  skl: () => skl
});
module.exports = __toCommonJS(chunk_gftn60qp_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
function oWn() {
  let r = false;
  try {
    r = (0, import_chunk_xcgcdx61.cm)();
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
  try {
    return r && (0, import_chunk_wj4me9k5.Cws)();
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), true;
  }
}
function ok() {
  if (!oWn()) return false;
  try {
    return (0, import_chunk_wj4me9k5.cv)() === "unanswered";
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), true;
  }
}
function gcn() {
  try {
    (0, import_chunk_865at33z.ce)().organizationAsk.hasHeld = true;
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function OWi(r) {
  return "origin" in r && r.origin === "server";
}
function sWn(r) {
  return ((0, import_chunk_f9x2f6cx.sE)()?.[r] ?? []).filter(OWi);
}
function OYe() {
  return sWn("PreToolUse").length > 0;
}
function _cn() {
  return (0, import_chunk_f9x2f6cx.qNs)() || OYe();
}
function skl() {
  return (0, import_chunk_f9x2f6cx.qNs)() && !OYe();
}
