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
var chunk_5vq6zjxf_exports = {};
__export(chunk_5vq6zjxf_exports, {
  DVo: () => DVo,
  FVo: () => FVo,
  HVo: () => HVo,
  LVo: () => LVo,
  NVo: () => NVo,
  Q8s: () => Q8s,
  XKr: () => XKr,
  t7l: () => t7l
});
module.exports = __toCommonJS(chunk_5vq6zjxf_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_hsfenxnq = require("/$bunfs/root/chunk-hsfenxnq.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_h46f12bd = require("/$bunfs/root/chunk-h46f12bd.js");
var import_chunk_e18ra2xv = require("/$bunfs/root/chunk-e18ra2xv.js");
var import_chunk_nf8edcy9 = require("/$bunfs/root/chunk-nf8edcy9.js");
var import_chunk_m4k4ejs3 = require("/$bunfs/root/chunk-m4k4ejs3.js");
var import_chunk_wn7cmvgm = require("/$bunfs/root/chunk-wn7cmvgm.js");
var import_chunk_p6x4t4m6 = require("/$bunfs/root/chunk-p6x4t4m6.js");
var import_chunk_x6p49xr0 = require("/$bunfs/root/chunk-x6p49xr0.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
function O(n, e) {
  return (0, import_chunk_w578pjby._)((0, import_chunk_r8478wtb.uD)(n, e));
}
var H = 3e3;
function HVo(n, e) {
  let i = n.mcpInfo?.effectiveMaxPermission;
  if (i !== void 0 && i !== "allow") return "permission_ceiling";
  if (n.requiresUserInteraction?.()) return "requires_interaction";
  return [...(0, import_chunk_ht27b0vz.Vs)(e), ...(0, import_chunk_ht27b0vz.al)(e)].some((r) => (0, import_chunk_ht27b0vz.jc)(e, n, r)) ? "rule" : void 0;
}
var j = /^The user just created a new, empty (?:[^\n<]{1,80}? )?artifact at (https?:\/\/\S+) and has it open beside this conversation/, R = /artifact at (https?:\/\/\S+) and has it open beside this conversation/g, U = /<system-reminder>([\s\S]*?)<\/system-reminder>/g;
function DVo(n, e) {
  let i = [];
  for (let r of n) {
    if (r.type === "assistant") break;
    if (r.type !== "user") continue;
    if (r.origin !== void 0 && r.origin.kind !== "human" || r.verifiedSlackHumanTurn === true || r.projectsUserTurn === true || r.isMeta === true) continue;
    let { content: s } = r.message, a = typeof s === "string" ? [s] : s.flatMap((o) => o.type === "text" ? [o.text] : []);
    for (let o of a) i.push(...XKr(o, e));
  }
  return i;
}
var F = "The user just created a new, empty ";
function B(n) {
  let e = new RegExp(R), i = n.indexOf(F);
  while (i !== -1) {
    let r = i + F.length;
    e.lastIndex = r;
    let s = e.exec(n);
    if (n.slice(r, s?.index).includes("<")) return true;
    i = s === null ? -1 : n.indexOf(F, s.index + s[0].length);
  }
  return new Set([...n.matchAll(R)].map((r) => r[1])).size > 1;
}
function XKr(n, e) {
  if (!e(n) || B(n)) return [];
  return [...n.matchAll(U)].map((i) => (i[1] ?? "").trim()).filter((i) => i !== "");
}
function LVo(n) {
  if (new Set(n.flatMap((r) => [...r.matchAll(R)].map((s) => s[1]))).size > 1) return null;
  let i;
  for (let r of n) {
    let s = j.exec(r)?.[1], a = s === void 0 ? null : (0, import_chunk_r8478wtb.Dn)(s);
    if (s === void 0 || a === null) continue;
    if (i !== void 0 && i.slug !== a.slug) return null;
    i ??= { slug: a.slug, env: a.env, url: s };
  }
  return i === void 0 ? null : { blankArtifact: i };
}
var W = "The artifact named in this session's opening context carries an instructions file; it is below, read ahead for you. The artifact's own content was not read: read it as the opening context asks; that read's result will repeat these instructions.";
function NVo(n, e) {
  return !(0, import_chunk_qtg8rez4.uw)(e.slug) && (0, import_chunk_nf8edcy9.pMe)(n, e, "files", "land");
}
function Q8s(n, e) {
  return !(0, import_chunk_qtg8rez4.uw)(e) && (0, import_chunk_nf8edcy9.nTe)(n, e);
}
var g = "artifact-type/reference/";
async function K(n, e, i, r = { warmShareEntry: import_chunk_p6x4t4m6.bg, readTypeInstructions: import_chunk_e18ra2xv.Fan, isArtifactReadEnabled: import_chunk_z1z1qsrb.Pkr, filesConsented: NVo, listArtifactTypes: import_chunk_e18ra2xv.Dbe, listFrameFiles: import_chunk_m4k4ejs3.Oue }, s) {
  let a = n.blankArtifact, o = performance.now(), p = (0, import_chunk_cd75h1kz.Bo)(i, { timeoutMs: H, refTimer: true });
  try {
    if (!r.isArtifactReadEnabled()) return { kind: "skipped", reason: "artifact_off" };
    if (!(0, import_chunk_e18ra2xv.$an)()) return { kind: "skipped", reason: "catalog_off" };
    let y = (0, import_chunk_bz1f2qnq.Z)(e), A = (0, import_chunk_4vsz8a99.tn)(e.options.tools ?? [], import_chunk_r8478wtb.Vt), w = A === void 0 ? "not_in_pool" : HVo(A, y);
    if (w !== void 0) return { kind: "skipped", reason: "tool_unavailable", detail: w };
    let k = a.url;
    for (let f of ["deny", "ask"]) if ((0, import_chunk_hsfenxnq.Ix)(y, a, k, f) !== null) return { kind: "skipped", reason: "rule", detail: f };
    await r.warmShareEntry(a, { abortController: { signal: p.signal }, credentials: e.credentials }, "opening_prefetch");
    let N = (0, import_chunk_bz1f2qnq.Z)(e);
    for (let f of ["deny", "ask"]) if ((0, import_chunk_hsfenxnq.Ix)(N, a, k, f) !== null) return { kind: "skipped", reason: "rule", detail: f };
    let E = (0, import_chunk_qtg8rez4.Bt)(a.slug);
    if (!(0, import_chunk_qtg8rez4.up)(E)) {
      if (p.signal.aborted && !i.aborted) return { kind: "skipped", reason: "read_failed", detail: "the share probe took longer than the prefetch budget" };
      return { kind: "skipped", reason: "not_owned" };
    }
    if (E?.typeLocked !== true) return { kind: "skipped", reason: "not_typed" };
    let c = await r.readTypeInstructions(a, p.signal, e.credentials);
    if (c.kind !== "read") return { kind: "skipped", reason: "instructions_unavailable", detail: c.kind === "unavailable" ? c.why : "none" };
    let D = (0, import_chunk_e18ra2xv.Nje)(c);
    try {
      await r.listArtifactTypes({ firstParty: true, signal: p.signal, credentials: e.credentials });
    } catch {
    }
    let m = await q(a, p.signal, e, r), C = (0, import_chunk_r8478wtb.sr)(a), x = FVo((0, import_chunk_ht78eyc4.Fg)());
    if (m.why === "listing failed") (0, import_chunk_cqa9hrgx.l)("artifact_opening_prefetch", "listing_failed");
    if (!m.listed) (0, import_chunk_w578pjby.t)(`[artifactOpeningPrefetch] type files of ${a.slug} not saved: not attempted, the type's reference pages were not listed (the files consent does not stand for this artifact, or its listing failed)`);
    let P = !m.listed ? null : c.clipped ? await (r.readWholeInstructions ?? G)(a, p.signal, e.credentials) : c.text, I = P === null ? null : (await (0, import_chunk_wn7cmvgm.yHt)({ type: { artifact: a, instructions: P, pages: m.pages.map((f) => g + f), stillConsented: () => r.filesConsented(e, a) }, system: null }, e, p.signal, r.readFrameFile)).type, T = m.listed && (0, import_chunk_h46f12bd.kwr)(e.options.tools ?? []) ? (0, import_chunk_e18ra2xv.w0i)(c.text) : null, v = T ?? "", h = I === null ? null : { ...I, urlReadAsked: v !== "", skillByRead: !c.clipped }, b = h === null ? null : (0, import_chunk_wn7cmvgm.$Oa)(h, [v, (0, import_chunk_e18ra2xv.ygs)(c.text), (0, import_chunk_e18ra2xv.Ogs)(c.text)].map((f) => f.trim()).filter((f) => f !== "").map((f) => `

${f}`).join(""));
    if (h !== null && b === null) (0, import_chunk_w578pjby.t)(`[artifactOpeningPrefetch] type files of ${a.slug} saved but not used: SKILL.md does not fit one Bash output, the text stays inline`);
    if (h !== null && b !== null) return { kind: "attached", content: b, manifest: V(C, x, T === null && s !== void 0 && M(e, s)), typeFiles: h, durationMs: performance.now() - o };
    return { kind: "attached", content: W + D, manifest: X(C, m, x, T === null && s !== void 0 && M(e, s)), typeFiles: null, durationMs: performance.now() - o };
  } catch (y) {
    return { kind: "skipped", reason: "read_failed", detail: p.signal.aborted && !i.aborted ? "the read took longer than the prefetch budget" : (0, import_chunk_jv7av99m.d)(y) };
  } finally {
    p.cleanup();
  }
}
async function G(n, e, i) {
  let r = await (0, import_chunk_mha8pjbc.N7)({ ...n, file: import_chunk_e18ra2xv.S0 }, e, i, "artifact_type_instructions_read");
  if (r.err !== null) return (0, import_chunk_w578pjby.t)(`[artifactOpeningPrefetch] type files of ${n.slug} not saved: the whole SKILL.md was not read (${(0, import_chunk_mha8pjbc.H0e)(r)})`), null;
  return (0, import_chunk_r8478wtb.qu)(r.html);
}
async function t7l(n, e, i, r, s) {
  let a = LVo([...DVo(e, r.isSystemReminderOnlyText), ...i === null ? [] : XKr(i, r.isSystemReminderOnlyText)]);
  if (a === null) return null;
  let o = await K(a, n, n.abortController.signal, s, r.isDeferredTool);
  if ((0, import_chunk_w578pjby.t)(o.kind === "attached" ? `[artifactOpeningPrefetch] attached: ${o.content.length} chars + index ${o.manifest.length} chars in ${Math.round(o.durationMs)}ms` : `[artifactOpeningPrefetch] skipped: ${o.reason}${o.detail === void 0 ? "" : ` (${o.detail})`}`), o.kind === "attached") return (0, import_chunk_cqa9hrgx.u)("artifact_opening_prefetch", { duration_ms: Math.round(o.durationMs) }), { content: `${o.content}

${o.manifest}`, slug: a.blankArtifact.slug, typeFiles: o.typeFiles };
  if (o.reason === "read_failed" || o.detail === "listing failed") (0, import_chunk_cqa9hrgx.l)("artifact_opening_prefetch", o.reason === "read_failed" ? "read_failed" : "listing_failed");
  return null;
}
async function q(n, e, i, r) {
  if (!r.filesConsented(i, n)) return { listed: false, pages: [], why: "no files consent" };
  let s;
  try {
    s = await r.listFrameFiles(n, e, i.credentials);
  } catch {
    s = null;
  }
  if (s?.kind !== "ok") return { listed: false, pages: [], why: "listing failed" };
  return { listed: true, pages: s.files.map((a) => a.path).filter((a) => a.startsWith(g) && a.endsWith(".md")).map((a) => a.slice(g.length)).filter((a) => !a.includes("/")).sort() };
}
function FVo(n) {
  return { readFile: n ? (e, i) => `Artifact action "read", url "${e}", path ${O(i, S)}` : (e, i) => `Artifact action "read_file", url "${e}", path ${O(i, S)}`, listFiles: n ? (e) => `Artifact action "list", url "${e}", scope "files"` : (e) => `Artifact action "list_files", url "${e}"`, readArtifact: (e) => `Artifact action "read", url "${e}"` };
}
var Y = import_chunk_x6p49xr0.e7t;
function z(n, e, i) {
  let r = e.slice(0, Y), s = r.map((a) => `- ${O(g + a, S)}: ${i.readFile(n, g + a)}`);
  if (e.length > r.length) s.push(`- and ${e.length - r.length} more under ${g} (${i.listFiles(n)} names them)`);
  return [`Reference pages of the type of the artifact at ${n}, on the artifact and not loaded (the names are the type's own files, listed as data):`, ...s, `Issue every file read you need, and the artifact read itself (${i.readArtifact(n)}), in ONE message (parallel tool calls); then Read any file a result says was saved; then write. Use exactly the call shapes given here; no other fields.`].join(`
`);
}
function M(n, e) {
  let i = (0, import_chunk_4vsz8a99.tn)(n.options.tools ?? [], import_chunk_r8478wtb.Zf);
  return i !== void 0 && !e(i);
}
var L = "ArtifactData is loaded in this session: read the canvas (ArtifactData list / get on this url) in that same first message rather than searching for the tool first.";
function X(n, e, i, r) {
  let s = z(n, e.pages, i);
  return [`Loaded ahead of this turn for the artifact at ${n}: the instructions file found on it (SKILL.md) \u2014 inlined above; do not read it again.`, ...e.pages.length > 0 ? [s] : [...e.listed ? [] : [`Its type's reference pages are on the artifact under ${g} (${i.listFiles(n)} names them).`], ...s.split(`
`).slice(1)], ...r ? [L] : []].join(`
`);
}
function V(n, e, i) {
  return [`Make that Bash call and the artifact read itself, ${e.readArtifact(n)}, in ONE message (parallel tool calls); then write.`, ...i ? [L] : []].join(`
`);
}
var S = 128;
