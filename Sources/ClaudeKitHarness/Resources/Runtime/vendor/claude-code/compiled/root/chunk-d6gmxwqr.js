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
var chunk_d6gmxwqr_exports = {};
__export(chunk_d6gmxwqr_exports, {
  DPa: () => DPa,
  Fet: () => Fet,
  HPa: () => HPa,
  I$e: () => I$e,
  Iht: () => Iht,
  LPa: () => LPa,
  Mht: () => Mht,
  NZn: () => NZn,
  W9s: () => W9s,
  Yvn: () => Yvn,
  dKr: () => dKr,
  iVo: () => iVo,
  j9s: () => j9s,
  oVo: () => oVo,
  rVo: () => rVo,
  sVo: () => sVo
});
module.exports = __toCommonJS(chunk_d6gmxwqr_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_bsnb5bky = require("/$bunfs/root/chunk-bsnb5bky.js");
var import_chunk_m4k4ejs3 = require("/$bunfs/root/chunk-m4k4ejs3.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_p6x4t4m6 = require("/$bunfs/root/chunk-p6x4t4m6.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_9hnj2g25 = require("/$bunfs/root/chunk-9hnj2g25.js");
var import_chunk_hsfenxnq = require("/$bunfs/root/chunk-hsfenxnq.js");
var import_chunk_nf8edcy9 = require("/$bunfs/root/chunk-nf8edcy9.js");
var import_chunk_r2t6wr2n = require("/$bunfs/root/chunk-r2t6wr2n.js");
var import_chunk_bff9jygm = require("/$bunfs/root/chunk-bff9jygm.js");
var import_chunk_k4bfa4wx = require("/$bunfs/root/chunk-k4bfa4wx.js");
var import_chunk_s12kntv9 = require("/$bunfs/root/chunk-s12kntv9.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var Iht = "README.md", Fet = "project/README.md", q = [{ name: "api/tokens.md", holds: "palette, type, fonts" }, { name: "tokens.json", holds: "exact token values" }];
function rVo(e, t) {
  let n = e === Fet ? "project/" : "", [o, r] = (0, import_chunk_6mfepmbb.Wl)(q.map(({ name: s, holds: d }) => ({ path: n + s, holds: d })), (s) => !Array.isArray(t) || t.includes(s.path));
  return { present: o, absent: r.map((s) => s.path) };
}
var J = 12e3, Q = 7e3, ee = 700, NZn = { interrupted: "interrupted before it could be read", timeout: "reading it took too long", failed: "the read failed unexpectedly" };
function I$e(e, t, n, o) {
  let r = () => n.abortController.signal.aborted ? "interrupted" : t.aborted ? "timeout" : "failed";
  return new Promise((s) => {
    let d = () => s(o(r()));
    if (t.aborted) {
      e.catch(() => {
      }), d();
      return;
    }
    t.addEventListener("abort", d, { once: true }), e.then((a) => {
      t.removeEventListener("abort", d), s(a);
    }, (a) => {
      t.removeEventListener("abort", d);
      let f = r();
      if (f === "failed") (0, import_chunk_k449cc64.i)(a);
      s(o(f));
    });
  });
}
function HPa(e, t) {
  let n = e.find((o) => o.default !== void 0);
  if (n === void 0 || n.default === void 0) return e.length === 0 ? { url: void 0, why: "the account lists no design systems \u2014 build without one unless the user names one" } : { url: void 0, why: `no default is set among the ${e.length}${t ? " or more" : ""} design systems the account lists \u2014 name the listed systems to the user and ask which to use before creating, then read their pick with its own call; with nobody to ask, build without one; they are ${te(e)}` };
  return { url: n.url, source: { default: n.default, title: n.title } };
}
function te(e) {
  let n = e.slice(0, 3).map((o) => `${(0, import_chunk_w578pjby._)((0, import_chunk_s12kntv9.S_)((0, import_chunk_r8478wtb.uD)(o.title, 40)) ?? "Untitled")} ${(0, import_chunk_r8478wtb.Xl)(o.url, "(unrecognized address)")}`);
  return e.length > 3 ? `${n.join(", ")}, and ${e.length - 3} more` : n.join(", ");
}
async function W9s(e, t, n, o, r, s) {
  let d = (0, import_chunk_r8478wtb.Dn)(e);
  if (d === null || d.env !== (0, import_chunk_r8478wtb.Ws)()) return { ok: false, why: "it is not an Artifact URL of this session's claude.ai", code: "not_a_link" };
  let f = [...(0, import_chunk_nf8edcy9.att)() ? ["files"] : [], ...o ? ["store"] : []];
  if (f.length === 0) return { ok: false, ...I("off", "off") };
  if (f.every((b) => x(b, d, e, n, r))) return { ok: false, why: V, code: "rule" };
  let g = { signal: t, credentials: n.credentials }, p = await I$e((0, import_chunk_p6x4t4m6.bg)(d, { toolUseId: n.toolUseId, abortController: { signal: t }, ...g }, s).then(() => {
    return;
  }), t, n, (b) => b);
  if (p !== void 0) return { ok: false, why: `${NZn[p]} \u2014 read it with its own call`, code: `probe_${p}` };
  let R = (0, import_chunk_qtg8rez4.Bt)(d.slug);
  if ((0, import_chunk_qtg8rez4.o2e)(R)) return { ok: false, why: `it is in another of the user's organizations, or one they are no longer part of, so nothing in this session can read it until ${import_chunk_mha8pjbc.Bbe} \u2014 say so rather than guess its values`, code: "other_org" };
  let y = (0, import_chunk_qtg8rez4.up)(R);
  if ((0, import_chunk_qtg8rez4.uw)(d.slug) && !(0, import_chunk_865at33z.qi)(n.agentContext)) return { ok: false, why: Y, code: "notice_pending" };
  await I$e((0, import_chunk_nf8edcy9.aCn)(d, g), t, n, () => {
    return;
  });
  let m = x("files", d, e, n, r), A = x("store", d, e, n, r);
  return { ok: true, parsed: d, owned: y, filesRuled: m, storeRuled: A, filesOk: (0, import_chunk_nf8edcy9.att)() && !m && j(d, y, "files", n, r), storeOk: o && !A && j(d, y, "store", n, r) };
}
function oVo(e, t, n, o) {
  return !((0, import_chunk_qtg8rez4.uw)(e.slug) && !(0, import_chunk_865at33z.qi)(n.agentContext)) && !x("files", e, t, n, o) && j(e, (0, import_chunk_qtg8rez4.up)((0, import_chunk_qtg8rez4.Bt)(e.slug)), "files", n, o);
}
async function DPa(e, t, n, o, r, s) {
  let d = { default: t.default, title: t.title }, a = (h, O) => ((0, import_chunk_cqa9hrgx.l)("artifact_design_system_guide", O), { design_system: { url: e, ...d, unavailable: h } }), f = await W9s(e, n, o, r, s, "design_system_guide");
  if (!f.ok) return a(f.why, f.code);
  let { parsed: g, owned: p, filesRuled: R, storeRuled: y, filesOk: m, storeOk: A } = f, b = H((0, import_chunk_nf8edcy9.att)(), R, m), D = H(r, y, A);
  if (!m && !A) {
    let h = I(b, D);
    return a(h.why, h.code);
  }
  let [w, P] = await Promise.all([A ? le(g, n, o) : S, m ? ie(g, n, o) : se]), C = de(P), v = C.doc?.path === Fet, E = !v && w.doc !== void 0, L = v ? C.doc : w.doc ?? C.doc;
  if (L === void 0) {
    let h = w.why ?? C.why, O = w.moved === true && b === "off" ? ne : I(b, D);
    return h === void 0 ? a(O.why, O.code) : a(h, "nothing_read");
  }
  if (!p) sVo(g, E ? "read_db" : "read_file", o);
  if (!p || !(0, import_chunk_k4bfa4wx.k0e)(g.slug)) (0, import_chunk_k4bfa4wx.Ox)();
  let G = E || P.project.failed !== void 0 || j9s(g, e, o, s) || !oVo(g, e, o, s) ? null : await I$e((0, import_chunk_m4k4ejs3.Oue)(g, n, o.credentials), n, o, () => null), F = G?.kind === "ok" ? rVo(L.path, G.files.map((h) => h.path)).present.map((h) => h.path) : void 0;
  (0, import_chunk_cqa9hrgx.u)("artifact_design_system_guide", { store: E, project: v, owned: p, ...F !== void 0 && { count: F.length } });
  let W = E || v ? void 0 : D === "ruled" ? `a permission rule governs reading its store, ${M}` : D === "unconsented" ? `its store needs approval to read here, ${M}` : w.unchecked === true ? `its store could not be checked, ${M}` : w.keptButUnread === true ? `its store's README is empty or could not be read here, ${M}` : void 0;
  return { design_system: { url: e, ...d, ...E && { store: true }, docs: [L], ...F !== void 0 && { token_files: F }, ...W !== void 0 && { unavailable: W } } };
}
var k = "read it with its own call, which may ask the user", V = "a permission rule governs reading it \u2014 read it with its own call and that rule decides", M = "so this is its published README, which may be older than the one in its store", ne = { why: "it moved to its own files, which this session does not serve", code: "nothing_read" };
function x(e, t, n, o, r) {
  return e === "files" ? Mht(t, n, "read_file", o, { pipelineRan: r }) || Mht(t, n, "read_file", o, { pipelineRan: r, fields: { path: Fet } }) : Mht(t, n, "read_db", o, { pipelineRan: r }) || Mht(t, n, "read_db", o, { pipelineRan: r, fields: U });
}
function H(e, t, n) {
  return !e ? "off" : t ? "ruled" : n ? "read" : "unconsented";
}
function I(e, t) {
  let n = [e, t].filter((o) => o !== "read" && o !== "off");
  if (e !== "read" && t !== "read" && n.length === 0) return { why: "this session serves neither its files nor its store", code: "not_served" };
  if (n.includes("unconsented")) return e === "read" || t === "read" ? { why: `its ${e === "unconsented" ? "files" : "store"} cannot be read here without the user's approval \u2014 ${k}`, code: "nothing_read" } : { why: Y, code: "not_consented" };
  if (n.includes("ruled")) return { why: V, code: "rule" };
  return e === "off" ? { why: "its store holds no README for it, and this session does not serve its files", code: "nothing_read" } : { why: t === "off" ? "it has no README to read here (this session does not read stores)" : "it has no README to read", code: "nothing_read" };
}
var Y = `reading it here first needs the user's approval, which this call does not ask for \u2014 ${k}`, U = { db_op: "get", collection: "ds", doc_id: "meta" }, oe = { read_file: { path: Iht }, read_db: { db_op: "get", collection: "files", doc_id: Iht } };
function Mht(e, t, n, o, r = {}) {
  let s = r.fields ?? (n === "list_files" ? {} : oe[n]), d = (0, import_chunk_bz1f2qnq.Z)(o);
  return (n === "read_file" ? [{ action: n, fields: s }, { action: "read", fields: s }] : n === "list_files" ? [{ action: n, fields: s }, { action: "list", fields: { ...s, scope: "files" } }] : [{ action: n, fields: s }]).some((f) => ["deny", "ask"].some((g) => (0, import_chunk_hsfenxnq._0)(d, e, t, g, { action: f.action, fields: f.fields, wholeToolAskAnswered: r.pipelineRan === true }) !== null));
}
function j9s(e, t, n, o) {
  let r = (0, import_chunk_bz1f2qnq.Z)(n);
  return Mht(e, t, "list_files", n, { pipelineRan: o }) || ["deny", "ask"].some((s) => (0, import_chunk_hsfenxnq.Ix)(r, e, t, s) !== null);
}
function j(e, t, n, o, r) {
  if (!(0, import_chunk_9hnj2g25.sZ)(o)) {
    let s = (0, import_chunk_nf8edcy9.rTe)(e, o, n === "store", r);
    return !s.ask || s.remember === "artifact" && (0, import_chunk_z1z1qsrb.V0e)(s, e.slug, (0, import_chunk_z1z1qsrb.cat)(t, e));
  }
  return n === "store" ? t || (0, import_chunk_nf8edcy9.eDt)(o, e.slug) : (0, import_chunk_nf8edcy9.pMe)(o, e, "files", "land");
}
function sVo(e, t, n) {
  if (!(0, import_chunk_9hnj2g25.sZ)(n) && !(0, import_chunk_z1z1qsrb.yle)("foreign_read", e.slug)) {
    let o = t === "read_db" ? (0, import_chunk_nf8edcy9.eDt)(n, e.slug) : (0, import_chunk_nf8edcy9.nTe)(n, e.slug);
    (0, import_chunk_9hnj2g25.B1n)(t, e.slug, void 0, o || void 0);
  }
}
var S = { doc: void 0, why: void 0 };
async function z(e, t, n, o, r) {
  let s = await I$e((0, import_chunk_mha8pjbc.HWt)(e, t, o, r.credentials, "artifact_design_system_guide_read"), o, r, (f) => ({ err: NZn[f], late: f }));
  if (s.err === null) return s.html.trim() === "" ? S : { doc: N(s.html, t), why: void 0 };
  if (s.missingFile === true || n && s.status === 404 && s.errorCode === void 0) return S;
  let a = s.late !== void 0 ? NZn[s.late] : "the content host refused or failed";
  return { doc: void 0, why: re(t, a), failed: a };
}
var re = (e, t) => `its ${e} could not be fetched (${t}) \u2014 ${k}`, se = { root: S, project: S };
async function ie(e, t, n) {
  let [o, r] = await Promise.all([z(e, Iht, false, t, n), z(e, Fet, true, t, n)]);
  return { root: o, project: r };
}
function de({ project: e, root: t }) {
  if (e.doc !== void 0 || t.doc !== void 0) return e.doc !== void 0 ? e : t;
  if (e.failed !== void 0 && t.failed !== void 0) return { doc: void 0, why: `its ${e.failed === t.failed ? `${Fet} and ${Iht} could not be fetched (${t.failed})` : `${Fet} (${e.failed}) and ${Iht} (${t.failed}) could not be fetched`} \u2014 read the design system with its own call, which may ask the user` };
  return e.why !== void 0 ? e : t;
}
var ae = /* @__PURE__ */ new Set(["store_unavailable", "busy", "quota_or_rate", "quota_exceeded", "upstream_auth"]);
function X(e, t, n, o, r) {
  return I$e((0, import_chunk_bsnb5bky.syo)(r.session.host, { slug: e.slug, op: "get", collection: t, docId: n, askFrame: true }, o, r.storageV5, r.credentials), o, r, (s) => ({ kind: "error", code: "store_unavailable", message: NZn[s], reason: s }));
}
async function le(e, t, n) {
  let [o, r] = await Promise.all([X(e, U.collection, U.doc_id, t, n), X(e, "files", Iht, t, n)]);
  if (o.kind !== "ok") return o.kind !== "error" || o.code === "not_declared" ? { doc: void 0, why: void 0 } : { doc: void 0, why: `its store could not be read (${o.message}) \u2014 ${k}`, ...ae.has(o.code) && { unchecked: true } };
  if (ue(o.docs[0]?.data)) return { doc: void 0, why: void 0, moved: true };
  let s = ce(r);
  return { ...s === void 0 && r.kind !== "not_found" && { keptButUnread: true }, doc: s === void 0 ? void 0 : N(s), why: r.kind === "error" ? `its store could not be read (${r.message}) \u2014 ${k}` : r.kind === "ok" && s === void 0 ? typeof r.docs[0]?.data.data === "string" ? "its README.md in the store is empty" : "its README.md is a stored file rather than an inline document \u2014 read it from the system with its own call" : void 0 };
}
function ue(e) {
  let t = (0, import_chunk_ma3kja9f.T)(e) ? e.movedTo : void 0;
  return (0, import_chunk_ma3kja9f.T)(t) && typeof t.path === "string" && typeof t.at === "string";
}
function ce(e) {
  if (e.kind !== "ok") return;
  let t = e.docs[0]?.data.data;
  return typeof t === "string" && t.trim() !== "" ? t : void 0;
}
function iVo(e, t, n) {
  let o = (0, import_chunk_r8478wtb.qu)(t), r = Array.from(o).length;
  return r > n ? { path: e, text: (0, import_chunk_r8478wtb.qu)((0, import_chunk_7cfjrnwy.Ea)(o, n)), chars: r, clipped: true } : { path: e, text: o, chars: r };
}
var fe = [`
## Consuming this system (generated`, `
## Index (generated`], K = "[\u2026authored guide clipped here; its generated tail follows\u2026]";
function N(e, t = Iht) {
  let n = J, o = (0, import_chunk_r8478wtb.qu)(e), r = Array.from(o).length;
  if (r <= n) return { path: t, text: o, chars: r };
  let s = fe.map((g) => o.lastIndexOf(g)).find((g) => g !== -1) ?? -1;
  if (s === -1) return iVo(t, o, n);
  let d = (0, import_chunk_7cfjrnwy.Ea)(o.slice(s), Q), a = n - Array.from(d).length - Array.from(K).length - 2, f = (0, import_chunk_7cfjrnwy.Ea)(o.slice(0, s), a);
  return { path: t, text: (0, import_chunk_r8478wtb.qu)(`${f}
${K}
${d}`), chars: r, clipped: true };
}
function ge(e, t, n, o) {
  let r = n === Fet;
  if (t && !r) return `Its other cards are not attached: read one when you need it with ${(0, import_chunk_mha8pjbc.Eu)('action "read_db" and `db_op`: "get"', () => `the ${import_chunk_r8478wtb.Zf} tool, action "get"`)}, \`url\`: ${(0, import_chunk_w578pjby._)(e)}, and a \`collection\` and \`doc_id\`: "api" and "tokens.md" (palette, type, fonts); "ds" and "tokens" (exact token values); "ds" and "meta" (the system's record). Where the README's index is shown, read a card it names by the collection and doc id the index gives.`;
  let { present: s, absent: d } = rVo(n, o), a = `${(0, import_chunk_mha8pjbc.Eu)('action "read_file"', () => 'action "read"')}, \`url\`: ${(0, import_chunk_w578pjby._)(e)}`, f = `Its file list has no ${d.map((g) => `"${g}"`).join(" and no ")}.`;
  if (s.length === 0) return `${f} Where the README's index is shown, read a card it names with ${a}, and \`path\` set to ${r ? '"project/" followed by the path the index gives' : "its path there"}.`;
  return `Its other cards are not attached: read one when you need it with ${a}, and a \`path\`: ${s.map((g) => `"${g.path}" (${g.holds}); `).join("")}or, where the README's index is shown, a card it names, ${r ? 'at "project/" followed by the path the index gives' : "by its path there"}.${d.length === 0 ? "" : ` ${f}`}`;
}
function Yvn(e, t) {
  let n = Array.from(e).length > t;
  return (0, import_chunk_r8478wtb.qu)((0, import_chunk_7cfjrnwy.Ea)(e, t)).replace(import_chunk_r8478wtb.BC, " ").replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim() + (n ? " \u2026" : "");
}
function dKr(e) {
  if (e === null || typeof e !== "object" || !("docs" in e) || !Array.isArray(e.docs) || !e.docs.some((t) => t !== null && typeof t === "object" && "text" in t && t.text !== "")) return;
  return { ...e, docs: e.docs.map((t) => t !== null && typeof t === "object" ? { ...t, text: "" } : t) };
}
function LPa(e) {
  let t = (0, import_chunk_adx6804h.c)((0, import_chunk_r2t6wr2n.FZn)()).safeParse({ design_system: e }), n = t.success ? t.data.design_system : void 0;
  if (n === void 0) return { text: "", attached: false };
  let o = n.unavailable === void 0 ? void 0 : Yvn(n.unavailable, ee);
  if (typeof n.url !== "string") return { text: `

[Design system not attached \u2014 ${o ?? "no default could be found"}.]`, attached: false };
  let r = (0, import_chunk_r8478wtb.Xl)(n.url, "(unrecognized address)"), s = typeof n.title === "string" ? ` ${(0, import_chunk_w578pjby._)(Yvn((0, import_chunk_r8478wtb.rVt)((0, import_chunk_s12kntv9.S_)((0, import_chunk_r8478wtb.uD)(n.title, 200)) ?? ""), 200) || "Untitled")}` : "", d = `${r}${s}, the ${n.default === "user" ? "user's" : "organization's"} default design system`, a = (n.docs ?? []).find((m) => (m.path === Iht || m.path === Fet) && m.text !== "");
  if (a === void 0) return { text: `

[Design system not attached (${d}) \u2014 ${o ?? "its README is not kept in this record; read it with its own call if you need it"}.]`, attached: false };
  let f = N(a.text), g = f.clipped === true || a.clipped === true, p = Math.max(f.chars, a.chars), R = " This is the standing choice; ignore it if the user or the session named another, or declined one, in this conversation.", y = g ? `
[\u2026clipped at ${Array.from(f.text).length} of ${p} characters; read the whole file from the design system if you need the rest]` : "";
  return { text: `

${import_chunk_k449cc64.lu}
Design system ${d}.${R} Its ${a.path} (${n.store === true ? "a document of its store" : "a published file"}) follows \u2014 do not fetch it again${g ? " unless you need the clipped remainder" : ""}.${o !== void 0 ? ` (${o}.)` : ""} ${ge(r, n.store === true, a.path, n.token_files)}

${a.path}:
${(0, import_chunk_bff9jygm.mtr)(f.text + y)}`, attached: true };
}
