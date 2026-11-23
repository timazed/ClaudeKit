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
var chunk_zmrcnbgs_exports = {};
__export(chunk_zmrcnbgs_exports, {
  Kon: () => Kon,
  XWe: () => XWe,
  Zus: () => Zus,
  cal: () => cal,
  qon: () => qon
});
module.exports = __toCommonJS(chunk_zmrcnbgs_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function cal(e) {
  return (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)((0, import_chunk_xcgcdx61.sF)(e))).slice(0, 16);
}
function d(e) {
  if (!Array.isArray(e)) return [];
  return e.filter((n) => typeof n === "object" && n !== null && typeof n.name === "string" && typeof n.listing === "string" && (typeof n.definition === "object" && n.definition !== null || typeof n.sameAs === "string"));
}
function XWe(e, n = /* @__PURE__ */ new Set()) {
  let s = /* @__PURE__ */ new Map();
  for (let i of e) {
    if (i.type !== "attachment" || i.attachment?.type !== "deferred_tools_delta" || typeof i.uuid !== "string" || n.has(i.uuid)) continue;
    let r = /* @__PURE__ */ new Map();
    for (let t of d(i.attachment.surfacedDefinitions)) {
      if ("definition" in t) {
        r.set(t.name, { definition: t.definition, listing: t.listing, definedIn: i.uuid });
        continue;
      }
      let o = s.get(t.sameAs)?.get(t.name);
      if (o !== void 0) r.set(t.name, o);
    }
    if (r.size > 0) s.set(i.uuid, r);
  }
  return s;
}
function Zus(e) {
  let n = /* @__PURE__ */ new Set();
  for (let s of e.values()) for (let i of s.keys()) n.add(i);
  return n;
}
function Kon(e, n) {
  let s = XWe(e, n), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map();
  for (let o of e) {
    if (o.type !== "attachment" || o.attachment?.type !== "deferred_tools_delta" || typeof o.uuid === "string" && n.has(o.uuid)) continue;
    for (let f of (0, import_chunk_4smdap7r.Nr)(o.attachment.removedByBlock)) if (i.has(f)) r.add(f);
    if (typeof o.uuid !== "string") continue;
    for (let [f, a] of s.get(o.uuid) ?? []) i.set(f, a), r.delete(f), t.set(f, (t.get(f) ?? 0) + 1);
  }
  return { definedByValue: i, withdrawn: r, timesDefined: t };
}
function qon(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}
