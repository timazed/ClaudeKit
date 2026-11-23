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
var chunk_7f901c6t_exports = {};
__export(chunk_7f901c6t_exports, {
  DQ: () => DQ,
  DZa: () => DZa,
  FZa: () => FZa,
  Ibt: () => Ibt,
  LZa: () => LZa,
  NZa: () => NZa,
  Obt: () => Obt,
  Qki: () => Qki,
  Vot: () => Vot,
  Zki: () => Zki,
  a0n: () => a0n,
  arn: () => arn,
  bls: () => bls,
  irn: () => irn,
  mmr: () => mmr,
  nKl: () => nKl,
  srn: () => srn,
  wls: () => wls,
  zot: () => zot
});
module.exports = __toCommonJS(chunk_7f901c6t_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_hgh71h4h = require("/$bunfs/root/chunk-hgh71h4h.js");
var import_chunk_jsm9pvcb = require("/$bunfs/root/chunk-jsm9pvcb.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_07r720jc = require("/$bunfs/root/chunk-07r720jc.js");
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_crypto = require("crypto");
function DZa(e) {
  e.madeBy = "model";
}
function srn(e) {
  return e.madeBy === "model" || e.madeBy === void 0 || e.madeBy === "other" && e.handedOff === true;
}
function LZa(e) {
  return { ...e.modWroteCall === true && { modWroteCall: true }, ...e.handedOff === true && { handedOff: true }, ...e.madeBy !== void 0 && { madeBy: e.madeBy } };
}
function Obt(e) {
  return e.handedOff === true || e.madeBy === "input";
}
function NZa(e) {
  return e.type === "assistant" ? Obt(e) : e.type === "system" && e.subtype === "local_command" && e.madeBy === "input";
}
function FZa(e, t) {
  return e.madeBy !== "input" && e.handedOff === true === (t.handedOff === true);
}
function Qki(e) {
  return e.type === "assistant" && e.madeBy === void 0 && !("version" in e) && !("sessionId" in e) ? { madeBy: "other" } : void 0;
}
function irn(e) {
  return e === "now" || e === "next" || e === "later" ? e : void 0;
}
function Ibt(e) {
  return e.type === "image" && e.content.length > 0;
}
function zot(e) {
  return e.mode === "poll-event" || e.mode === "task-notification" || e.skipAttachments === true;
}
function Vot(e) {
  return e.type === "assistant" && !Obt(e) && !/^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.uuid);
}
function a0n(e) {
  return e.findLast((t) => t.type === "user" || t.type === "assistant");
}
function DQ(e) {
  let t = (n) => n.type === "user" && Array.isArray(n.message.content) && n.message.content.length > 0 && n.message.content.every((i) => i.type === "tool_result"), o = e.filter((n) => n.type === "user" || n.type === "assistant"), r = o.length - 1, s = /* @__PURE__ */ new Set();
  while (r >= 0 && t(o[r])) {
    let n = o[r];
    if (n.type === "user" && Array.isArray(n.message.content)) {
      for (let i of n.message.content) if (i.type === "tool_result") s.add(i.tool_use_id);
    }
    r--;
  }
  for (; r >= 0 && o[r].type === "assistant"; r--) {
    let n = o[r];
    if (n.type === "assistant" && Array.isArray(n.message.content) && n.message.content.some((i) => i.type === "tool_use" && !s.has(i.id))) return true;
  }
  return false;
}
function mmr(e) {
  return e.findLast((t) => t.type === "assistant" && Array.isArray(t.message.content) && t.message.content.some((o) => o.type === "tool_use")) ?? e.at(-1);
}
var k = [import_chunk_xcgcdx61.Ds, import_chunk_xcgcdx61.$p];
function arn(e) {
  return (0, import_chunk_xcgcdx61._Ee)({ name: e, source: `${e}@${import_chunk_xcgcdx61.Ds}` }).some((t) => {
    let o = (0, import_chunk_07r720jc.r0e)(t);
    return o !== void 0 && o.status().kind === "live" && k.some((r) => o.args.pluginStorageId === `${t}@${r}`);
  });
}
var d = 3;
function m(e, t) {
  if (e.bytes === void 0) return e;
  let o = e.bytes.length, r = Math.min(t + import_chunk_hgh71h4h.CSe, o), s = r < o ? r - (r - t) % d : r;
  return t > 0 && t >= o ? { deny: `offset ${t} is at or past the item's ${o} bytes` } : { type: e.type, mediaType: e.mediaType, base64: e.bytes.subarray(t, s).toString("base64"), size: o, ...s < o && { next: s } };
}
var bls = Object.freeze({ deny: "no prompt.submit in flight carries an attachment under that id" });
function p() {
  let e = /* @__PURE__ */ new Map();
  return { hold: (t, o) => t.map((r) => {
    let s = `media_${(0, import_crypto.randomUUID)().replace(/-/g, "")}`;
    return e.set(s, (0, import_chunk_7e1w6rv3.ud)(() => r.read(o))), { ...r.attachment, id: s };
  }), release: (t) => t.forEach((o) => e.delete(o.id ?? "")), read: async ({ id: t, offset: o }) => {
    let r = await e.get(t)?.();
    return r === void 0 || !e.has(t) ? bls : m(r, o ?? 0);
  }, clear: () => e.clear() };
}
var wls = (0, import_chunk_t57w17k7.de)(p(), (e) => {
  e.clear();
});
function nKl(e, t, o) {
  let r = wls.hold(e, t);
  return new Promise((s) => {
    s(o(r));
  }).finally(() => wls.release(r));
}
var l = Object.freeze({ deny: "the image is not held inline: its block names a URL or a file" });
function u(e) {
  if (e.block.type === "text") return { unreadable: e.block.text };
  let { source: t } = e.block;
  return t.type === "base64" ? { type: "image", mediaType: t.media_type, bytes: Buffer.from(t.data, "base64") } : l;
}
var y = Object.freeze({ deny: "the document is not held as inline bytes: its block names a URL or a file, or nests other blocks" });
var f = "application/octet-stream";
function c(e) {
  let t = (0, import_chunk_ma3kja9f.T)(e) ? e : {}, { data: o, media_type: r } = t, s = t.type === "base64";
  return typeof o === "string" && (s || t.type === "text") ? { type: "document", mediaType: typeof r === "string" ? r : f, bytes: Buffer.from(o, s ? "base64" : "utf8") } : y;
}
var g = (e) => ({ attachment: { type: "document" }, read: async () => c(e.source) });
function h({ source: e }) {
  let t = (0, import_chunk_jsm9pvcb.Wi)(e) ? e : void 0, o = t?.type === "base64" ? t.media_type : void 0;
  return { type: "image", mediaType: typeof o === "string" ? o : void 0 };
}
var b = (e) => ({ attachment: h(e), read: async (t) => u(await (0, import_chunk_fbqj9ad4.kon)(e, (0, import_chunk_yvba4101.ac)(t))) });
function x(e) {
  if (!(0, import_chunk_jsm9pvcb.Wi)(e)) return [];
  return e.type === "image" ? [b(e)] : e.type === "document" ? [g(e)] : [];
}
var I = Object.freeze({ unreadable: "the pasted image is empty" });
var M = (e) => ({ attachment: { type: "image", mediaType: e.mediaType, filename: e.filename }, read: async (t) => Ibt(e) ? u(await (0, import_chunk_fbqj9ad4.EA)({ data: e.content, mediaType: e.mediaType, limits: (0, import_chunk_yvba4101.ac)(t) })) : I });
var Zki = (e, t) => [...typeof e === "string" ? [] : e.flatMap(x), ...Object.values(t ?? {}).filter((o) => o.type === "image").map(M)];
