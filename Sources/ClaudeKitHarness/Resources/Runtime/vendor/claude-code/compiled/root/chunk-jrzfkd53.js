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
var chunk_jrzfkd53_exports = {};
__export(chunk_jrzfkd53_exports, {
  aUa: () => aUa,
  jYr: () => jYr,
  lUa: () => lUa,
  moi: () => moi
});
module.exports = __toCommonJS(chunk_jrzfkd53_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var a = /^00-([0-9a-f]{32})-([0-9a-f]{16})-[0-9a-f]{2}$/, c = "0".repeat(32), i = "0".repeat(16), u = 8;
function moi(n) {
  if (typeof n !== "string") return false;
  let t = a.exec(n);
  return t !== null && t[1] !== c && t[2] !== i;
}
function jYr(n, { isCrossSession: t }) {
  if (t || typeof n !== "object" || n === null) return;
  if (!("trace_context" in n) || !("uuid" in n)) return;
  let r = n.trace_context, o = (0, import_chunk_mzmcvr6c.ht)(n.uuid);
  if (!moi(r) || !o) return;
  return { traceparent: r, eventUuid: o };
}
function aUa(n) {
  let t = n.findLast((e) => e.traceContext)?.traceContext;
  if (!t) return { parent: void 0, linked: [] };
  let r = /* @__PURE__ */ new Set([t.traceparent]), o = [];
  for (let { traceContext: e } of n) if (e && !r.has(e.traceparent)) r.add(e.traceparent), o.push(e);
  return { parent: t, linked: o.slice(-u) };
}
var d = "anthropic/ccr-turn-event-uuid", s = "anthropic/ccr-turn-linked-event-uuids";
function lUa(n) {
  let t = (0, import_chunk_mzmcvr6c.ht)(n?.parent?.eventUuid);
  if (!n || !t) return {};
  let r = n.linked.flatMap((o) => {
    let e = (0, import_chunk_mzmcvr6c.ht)(o.eventUuid);
    return e ? [e] : [];
  });
  return { [d]: t, ...r.length > 0 && { [s]: r } };
}
