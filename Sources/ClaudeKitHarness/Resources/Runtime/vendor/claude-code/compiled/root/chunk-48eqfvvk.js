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
var chunk_48eqfvvk_exports = {};
__export(chunk_48eqfvvk_exports, {
  Eii: () => Eii,
  IJl: () => IJl
});
module.exports = __toCommonJS(chunk_48eqfvvk_exports);
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_6qsjjx4s = require("/$bunfs/root/chunk-6qsjjx4s.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var o = 20, d = /* @__PURE__ */ new Set(["refused", "unresolved", "unreachable", "proxyRefused", "certificate"]), f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ chats: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).default([]) })), _ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ session_id: (0, import_chunk_adx6804h.n)().refine(import_chunk_xfj2cwfv.fPo), name: (0, import_chunk_adx6804h.n)() }));
async function i(t) {
  if ((0, import_chunk_r60bafc1.vre)()?.live !== true || !(0, import_chunk_znn7ks07.Hl)() || (0, import_chunk_k449cc64.wt)() || !(0, import_chunk_865at33z.b)("tengu_lucky_lemur", false) || !(0, import_chunk_7d2qr9z5.FH)() || (0, import_chunk_7d2qr9z5._je)() || (0, import_chunk_7d2qr9z5.aIi)() !== null) return;
  let r = (0, import_chunk_r60bafc1.Pc)() ?? (0, import_chunk_r60bafc1.NT)();
  if (r) return r.callPairedRoute?.(t);
  if (!(0, import_chunk_865at33z.Hj)()) return;
  let e = { ...import_chunk_6qsjjx4s.Ups, auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, maxRedirects: 0, signal: AbortSignal.timeout(import_chunk_6qsjjx4s.Ups.timeout) }, a = t.body === void 0 ? await import_chunk_865at33z.zt.get(t.path, e) : await import_chunk_865at33z.zt.post(t.path, t.body, e);
  return a.ok ? a : void 0;
}
async function IJl() {
  try {
    let t = (0, import_chunk_865at33z.b)("tengu_tranquil_diffie", true) ? await i({ path: "/worker/paired-chats" }) : void 0;
    if (t === void 0) return [];
    let r = f().safeParse(t.data);
    if (t.status !== 200 || !r.success) return (0, import_chunk_cqa9hrgx.l)("paired_chats_list", "not_listed"), [];
    return (0, import_chunk_cqa9hrgx.u)("paired_chats_list"), r.data.chats.flatMap((e) => _().safeParse(e).data ?? []).slice(0, o).map((e) => ({ id: (0, import_chunk_t39bs2jr.Zoe)(e.session_id), name: (0, import_chunk_865at33z.Fdt)(e.name) }));
  } catch {
    return (0, import_chunk_cqa9hrgx.m)("paired_chats_list", "no_answer"), [];
  }
}
async function Eii(t, r) {
  try {
    let e = await i({ path: "/worker/paired-messages", body: { to_session_id: t, event: r } });
    if (e === void 0) return "not_tried";
    let { delivered: a, paired: s } = Object(e.data);
    if (e.status === 200 && a === true) return (0, import_chunk_cqa9hrgx.u)("paired_chat_send"), "delivered";
    if ((e.status === 413 || e.status === 429) && s === true) return (0, import_chunk_cqa9hrgx.l)("paired_chat_send", "refused"), e;
    if (e.status < 500 && e.status !== 408) return "not_taken";
  } catch (e) {
    if (d.has((0, import_chunk_tvttgr51.zX)((0, import_chunk_jv7av99m.w)(e)))) return "not_taken";
  }
  return (0, import_chunk_cqa9hrgx.l)("paired_chat_send", "no_answer"), "no_answer";
}
