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
var chunk_f95ky4wd_exports = {};
__export(chunk_f95ky4wd_exports, {
  Cbr: () => Cbr,
  Ego: () => Ego,
  Oml: () => Oml,
  ggs: () => ggs,
  hgs: () => hgs,
  mgs: () => mgs,
  t0i: () => t0i
});
module.exports = __toCommonJS(chunk_f95ky4wd_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_5m00y1wc = require("/$bunfs/root/chunk-5m00y1wc.js");
var import_chunk_vwr252r7 = require("/$bunfs/root/chunk-vwr252r7.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var Ego = "__artifactCommentTarget", g = 120, C = 4e3, T = 32;
function _(e, t) {
  return `${e}/${t}`;
}
function Cbr(e) {
  return (0, import_chunk_vwr252r7.Qkt)(e).replace(/[\n\t]/g, " ").replace(import_chunk_r8478wtb.yee, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(import_chunk_r8478wtb.aB, "'").replace(import_chunk_r8478wtb.dK, "'").trim();
}
function A(e, t) {
  let o = Cbr(e);
  return Array.from(o).length > t ? `${(0, import_chunk_mha8pjbc.i4)((0, import_chunk_7cfjrnwy.Ea)(o, t))}\u2026` : o;
}
function E(e, t, o) {
  let r = e.find((s) => s.id === t), n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let a = (0, import_chunk_r8478wtb.bee)((0, import_chunk_r8478wtb.sVt)((0, import_chunk_r8478wtb.Dke)(A(n.text.replace(import_chunk_r8478wtb.BC, " "), g))).replace(import_chunk_r8478wtb.Gmn, " ").replace(import_chunk_r8478wtb.oVt, import_chunk_r8478wtb.jmn).replace(/ {2,}/g, " ").trim());
  if (a === "") return;
  let i = (0, import_chunk_5m00y1wc.$7)(n.account, o), c = (0, import_chunk_vwr252r7.ib)(n), d = n.postedByArtifact || c === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : c === "agent" ? "unknown" : i ? "user" : "viewer";
  return { display: { thread_id: t, by: d, excerpt: a, replies: r.comments.length - 1, resolved: r.resolved && r.resolvedDegraded !== true }, ...d === "viewer" && n.access !== void 0 && { access: n.access } };
}
function mgs(e) {
  let t = (0, import_chunk_bz1f2qnq.Z)(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== true;
}
async function hgs(e, t, o) {
  if (!import_chunk_r8478wtb.yo.test(t)) return;
  let r = _(e.slug, t), n = (0, import_chunk_0rkwgmhx.se)().commentTargets, a = (0, import_chunk_0rkwgmhx.se)().accountEpoch, i = n.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let { signal: c, cleanup: d } = (0, import_chunk_cd75h1kz.Bo)(o.abortController.signal, { timeoutMs: C, refTimer: true });
  try {
    let [s, p] = await Promise.all([(0, import_chunk_vwr252r7.I8e)(e, c, o.credentials, "artifact_comment_consent_read", { skipBootProbe: true }), (0, import_chunk_5m00y1wc.Zje)(o.credentials)]);
    if (s.err !== null) {
      n.delete(r);
      return;
    }
    let m = E(s.threads, t, { account: p.account, tokens: (0, import_chunk_5m00y1wc.EEt)() });
    if (m === void 0) {
      (0, import_chunk_cqa9hrgx.l)("artifact_comment_consent_read", "no_opening_comment"), n.delete(r);
      return;
    }
    if ((0, import_chunk_0rkwgmhx.se)().accountEpoch !== a) return;
    n.delete(r), n.set(r, { target: m, toolUseId: o.toolUseId });
    while (n.size > T) {
      let u = n.keys().next().value;
      if (u === void 0) break;
      n.delete(u);
    }
    return m;
  } catch (s) {
    if (o.abortController.signal.aborted) throw s;
    (0, import_chunk_cqa9hrgx.l)("artifact_comment_consent_read", (0, import_chunk_jv7av99m.Fe)(s) ? "deadline" : "read_threw");
    return;
  } finally {
    d();
  }
}
function f(e) {
  switch (e) {
    case "owner":
      return "the owner's";
    case "editor":
      return "an editor's";
    case "commenter":
      return "a commenter's";
    case void 0:
      return "a viewer's";
  }
}
function ggs({ display: e, access: t }) {
  switch (e.by) {
    case "user":
      return `your comment "${e.excerpt}"`;
    case "claude":
      return `Claude's comment "${e.excerpt}"`;
    case "viewer":
      return `${f(t)} comment "${e.excerpt}"`;
    case "unknown":
      return `the comment "${e.excerpt}"`;
  }
}
function Oml({ display: e, access: t }) {
  switch (e.by) {
    case "user":
      return "your comment thread";
    case "claude":
      return "Claude's comment thread";
    case "viewer":
      return `${f(t)} comment thread`;
    case "unknown":
      return "a comment thread";
  }
}
function t0i(e, t) {
  if (t === void 0 && !(Ego in e)) return;
  let { [Ego]: o, ...r } = e;
  return t === void 0 ? r : { ...r, [Ego]: t };
}
