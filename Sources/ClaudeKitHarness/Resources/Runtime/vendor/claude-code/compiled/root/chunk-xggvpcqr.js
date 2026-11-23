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
var chunk_xggvpcqr_exports = {};
__export(chunk_xggvpcqr_exports, {
  IXl: () => IXl,
  Igt: () => Igt,
  NXt: () => NXt,
  Sti: () => Sti,
  e8r: () => e8r,
  lUe: () => lUe,
  mzl: () => mzl,
  rFa: () => rFa
});
module.exports = __toCommonJS(chunk_xggvpcqr_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var mzl = '<wake reason="external-event"';
function rFa(e) {
  return e.startsWith(mzl);
}
var S = /^[a-z0-9-]{1,32}$/, w = /^[a-z0-9_.-]{1,64}$/, b = 2048, g = /([a-z][a-z-]*)="([^"\s]{0,256})"/g, I = /* @__PURE__ */ new Set(["reason", "current-time"]), P = /* @__PURE__ */ new Set(["source", "kind", "from", "trust", "untrusted-keys"]), j = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()));
function f(e) {
  return e.trim() === "";
}
function lUe(e) {
  if (!rFa(e)) return null;
  let t = e.indexOf(">");
  if (t === -1 || t > b) return null;
  let s = e.slice(5, t);
  if (!f(s.replace(g, " "))) return null;
  for (let i of s.matchAll(g)) if (!I.has(i[1])) return null;
  let r = e.indexOf("<event ", t + 1);
  if (r === -1 || !f(e.slice(t + 1, r))) return null;
  let o = e.indexOf(">", r);
  if (o === -1 || o - r > b) return null;
  let E = e.indexOf("</event>", o + 1);
  if (E === -1) return null;
  let T = E + 8, m = e.indexOf("</wake>", T);
  if (m === -1 || !f(e.slice(T, m))) return null;
  if (!f(e.slice(m + 7))) return null;
  let a = /* @__PURE__ */ new Map(), h = e.slice(r + 6, o);
  if (!f(h.replace(g, " "))) return null;
  for (let i of h.matchAll(g)) {
    if (!P.has(i[1])) return null;
    let A = i[1];
    if (!a.has(A)) a.set(A, i[2]);
  }
  let k = a.get("source"), _ = a.get("kind");
  if (k === void 0 || _ === void 0 || !S.test(k) || !w.test(_)) return null;
  let d = e.slice(o + 1, E), x = d.indexOf("<!--");
  if (x !== -1) {
    if (!f(d.slice(0, x))) return null;
    let i = d.indexOf("-->", x + 4);
    if (i === -1) return null;
    d = d.slice(i + 3);
  }
  let z = O(d);
  if (z === null) return null;
  let R = a.get("from"), W = (a.get("untrusted-keys") ?? "").split(",").filter((i) => i !== "");
  return { source: k, kind: _, ...R !== void 0 && { from: R }, data: z, untrustedKeys: W };
}
var y = /^[^"'<>&\s]{0,256}$/, K = /^[^"'<>&\s,]{1,256}$/, N = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ reason: (0, import_chunk_adx6804h.v)("external-event"), current_time: (0, import_chunk_adx6804h.n)().regex(y), event: (0, import_chunk_adx6804h.c)({ source: (0, import_chunk_adx6804h.n)().regex(S), kind: (0, import_chunk_adx6804h.n)().regex(w), from: (0, import_chunk_adx6804h.n)().regex(y), trust: (0, import_chunk_adx6804h.n)().regex(y), untrusted_keys: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().regex(K)).refine((e) => e.join(",").length <= 256).optional(), guidance: (0, import_chunk_adx6804h.n)().refine((e) => !e.includes("--") && !e.includes("</event>")).optional(), data: (0, import_chunk_adx6804h.n)() }) }));
function IXl(e, t) {
  if (!rFa(e)) return null;
  let s = N().safeParse(t);
  if (!s.success) {
    if (D().safeParse(t).success) (0, import_chunk_cqa9hrgx.l)("ccr_external_event_record", "malformed_record");
    return lUe(e);
  }
  let { event: r } = s.data;
  if (U(s.data) !== e) return (0, import_chunk_cqa9hrgx.l)("ccr_external_event_record", "text_mismatch"), lUe(e);
  let o = O(r.data);
  if (o === null) return (0, import_chunk_cqa9hrgx.l)("ccr_external_event_record", "malformed_record"), lUe(e);
  return (0, import_chunk_cqa9hrgx.u)("ccr_external_event_record"), { source: r.source, kind: r.kind, from: r.from, data: o, untrustedKeys: r.untrusted_keys ?? [] };
}
var D = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ reason: (0, import_chunk_adx6804h.v)("external-event") }));
function U({ current_time: e, event: t }) {
  let s = t.untrusted_keys === void 0 || t.untrusted_keys.length === 0 ? "" : ` untrusted-keys="${t.untrusted_keys.join(",")}"`, r = t.guidance === void 0 || t.guidance === "" ? "" : `    <!-- ${t.guidance} -->
`, o = t.data.replaceAll("<", "\\u003c").replaceAll(">", "\\u003e").replaceAll("&", "\\u0026");
  return `<wake reason="external-event" current-time="${e}">
  <event source="${t.source}" kind="${t.kind}" from="${t.from}" trust="${t.trust}"${s}>
` + r + `    ${o}
  </event>
</wake>`;
}
function O(e) {
  let t = e.trim();
  if (!t.startsWith("{")) return null;
  let s;
  try {
    s = (0, import_chunk_w578pjby.te)(t);
  } catch {
    return null;
  }
  if (typeof s !== "object" || s === null || Array.isArray(s)) return null;
  let r = j().safeParse(s);
  return r.success ? r.data : null;
}
function Igt(e) {
  return e.source === "session-inbox" && e.kind === "message.received";
}
function e8r(e) {
  return e?.kind === "task-notification" && e.subkind === "session-inbox";
}
function NXt(e) {
  return Igt(e) && e.from === "rc_owner" && e.data.sender_kind === "rc_owner";
}
function Sti(e, t) {
  if (!e8r(e)) return;
  let s = lUe(t), r = s !== null && NXt(s) ? s.data.file_id : void 0;
  return typeof r === "string" ? r : void 0;
}
