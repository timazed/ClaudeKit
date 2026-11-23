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
var chunk_hpwa54j5_exports = {};
__export(chunk_hpwa54j5_exports, {
  A5s: () => A5s,
  R5s: () => R5s,
  Tht: () => Tht,
  hVr: () => hVr,
  t6o: () => t6o
});
module.exports = __toCommonJS(chunk_hpwa54j5_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_h46f12bd = require("/$bunfs/root/chunk-h46f12bd.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_7h77vtaa = require("/$bunfs/root/chunk-7h77vtaa.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_jvq8g4xf = require("/$bunfs/root/chunk-jvq8g4xf.js");
var import_chunk_3nbehccc = require("/$bunfs/root/chunk-3nbehccc.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
function t6o() {
  return (0, import_chunk_z1z1qsrb.Sle)() ? `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${(0, import_chunk_h46f12bd.mln)(true)}` : "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one).";
}
function A5s() {
  return (0, import_chunk_6e68m1dj.hn)() && !(0, import_chunk_ac8t6db0.mj)();
}
var b = { ok: false, reason: "relay-unavailable", status: 0, route: "relay", fromFrame: false };
function y(t) {
  return `Couldn't confirm the delete (the cloud relay failed: ${t}) \u2014 it may have gone through; check with action "list" before telling the user or trying again.`;
}
var A = 65536, R = 1e3, w = 1e4;
function C(t) {
  return typeof t === "string" ? t.trim() : "";
}
function g(t, a, o) {
  return { source: t.source === "tool" ? (0, import_chunk_78g0060s.S)("tool") : (0, import_chunk_78g0060s.S)("dialog"), route: o === "relay" ? (0, import_chunk_78g0060s.S)("relay") : (0, import_chunk_78g0060s.S)("direct"), ...t.sessionMinted !== void 0 && { session_minted: t.sessionMinted }, ...t.ageSeconds !== void 0 && { age_s: t.ageSeconds }, ...t.sinceUpdateSeconds !== void 0 && { since_update_s: t.sinceUpdateSeconds }, ...a && { retried: true } };
}
async function hVr(t, a, o) {
  let h = () => A5s() ? Promise.resolve(b) : import_chunk_ac8t6db0.im.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, { refreshOAuth: true, headers: (0, import_chunk_ddfyyyy7.sm)(), timeout: 15e3, maxContentLength: A, signal: o.signal, credentials: a }), e, c = false;
  try {
    if (e = await h(), e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503)) {
      let n = Math.min((0, import_chunk_865at33z.qp)(e.response.headers?.["retry-after"]) ?? R, w);
      await (0, import_chunk_5appeerh.K)(n, o.signal, { abortError: () => new import_chunk_jv7av99m.Ie() }), c = true, e = await h();
    }
  } catch (n) {
    if ((0, import_chunk_3jjr3wje.wd)(n) || n instanceof import_chunk_jv7av99m.Ie || o.signal?.aborted) throw n;
    let f = (0, import_chunk_ac8t6db0.SN)(n);
    return (0, import_chunk_cqa9hrgx.m)("artifact_delete", "request_error", g(o, c, f ? "relay" : "direct")), { err: f ? y("no answer") : "Couldn't delete the Artifact (network error)", reason: "request_error" };
  }
  let r = g(o, c, e.route);
  if (!e.ok) {
    if (e.reason === "relay-unavailable" || e.reason === "relay-not-served") return (0, import_chunk_cqa9hrgx.m)("artifact_delete", e.reason.replace(/-/g, "_"), { ...r, status: e.status }), { err: t6o(), reason: "unavailable" };
    return (0, import_chunk_cqa9hrgx.m)("artifact_delete", e.reason, r), { err: e.reason === "no-auth" ? (0, import_chunk_7j8he8m3.TE)(e.detail) : `Artifact delete unavailable: ${e.reason}`, reason: "unavailable" };
  }
  if (!e.fromFrame && (e.status < 200 || e.status >= 300)) return (0, import_chunk_cqa9hrgx.m)("artifact_delete", "relay_error", { ...r, status: e.status }), { err: y(`HTTP ${e.status}`), reason: "http_failed", status: e.status };
  if (e.status === 404) {
    if (!(0, import_chunk_ac8t6db0.Xpe)(e.data)) return (0, import_chunk_cqa9hrgx.m)("artifact_delete", "not_found_foreign", { ...r, status: 404 }), { err: `Couldn't confirm the delete: the "not found" answer did not come from the Artifact service (a proxy or network edge may have answered), so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`, reason: "http_failed", status: 404 };
    return (0, import_chunk_cqa9hrgx.l)("artifact_delete", "not_found", r), { err: null, alreadyGone: true };
  }
  if (e.status === 403) {
    let n = C(e.data);
    if (/^not owner\b/.test(n)) return (0, import_chunk_cqa9hrgx.l)("artifact_delete", "not_owner", r), { err: "Only the Artifact's owner can delete it.", reason: "not_owner", status: 403 };
    if (n.startsWith(import_chunk_ac8t6db0.hZ)) return (0, import_chunk_cqa9hrgx.m)("artifact_delete", "ccr_credential_refused", r), { err: t6o(), reason: "unavailable", status: 403 };
  }
  if (e.status < 200 || e.status >= 300) return (0, import_chunk_cqa9hrgx.m)("artifact_delete", "http_failed", { ...r, status: e.status }), { err: e.status >= 500 ? `Couldn't confirm the delete (HTTP ${e.status}) \u2014 the Artifact may already be unreachable; retry once.` : `Couldn't delete the Artifact (HTTP ${e.status})`, reason: "http_failed", status: e.status };
  if (e.status !== 204 || e.route === "relay" && !(0, import_chunk_ac8t6db0.hle)(e)) return (0, import_chunk_cqa9hrgx.m)("artifact_delete", "ok_foreign", { ...r, status: e.status }), { err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`, reason: "http_failed", status: e.status };
  return (0, import_chunk_cqa9hrgx.u)("artifact_delete", r), { err: null, alreadyGone: false };
}
function F(t, a) {
  let o = Object.keys(t.frameUrls), h = o.filter((p) => (0, import_chunk_r8478wtb.Xc)(t.frameUrls[p].url) !== a), e = t.artifactRefs?.filter((p) => p.slug !== a), c = (e?.length ?? 0) !== (t.artifactRefs?.length ?? 0), r = t.artifactReadVersions !== void 0 && a in t.artifactReadVersions, n = t.artifactReadObservers !== void 0 && a in t.artifactReadObservers;
  if (h.length === o.length && !c && !r && !n) return t;
  let { [a]: f, ...d } = t.artifactReadVersions ?? {}, { [a]: E, ..._ } = t.artifactReadObservers ?? {};
  return { ...t, frameUrls: Object.fromEntries(h.map((p) => [p, t.frameUrls[p]])), ...c && { artifactRefs: e }, ...r && { artifactReadVersions: d }, ...n && { artifactReadObservers: _ } };
}
function Tht(t, a) {
  let o;
  if (a.updateAppState((f) => {
    let d = F(f, t);
    return o = d === f ? void 0 : d.frameUrls, d;
  }), o !== void 0) (0, import_chunk_3nbehccc.OY)(o);
  let { shareStatus: h, createdFromType: e, deferredSurface: c, remoteControlSkippedSlugs: r, coordinatorEditors: n } = (0, import_chunk_0rkwgmhx.se)();
  for (let [f, d] of h.filePathToSlug) if (d === t) (0, import_chunk_qtg8rez4.Y0e)(f);
  for (let [f, d] of e) if (d.slug === t) e.delete(f);
  if (c.delete(t), r.delete(t), (0, import_chunk_0rkwgmhx.Ykr)(t, "page_gone"), n.delete(t), (0, import_chunk_7h77vtaa.U7s)(t, a.context), (0, import_chunk_6d4w1614.uDa)(t), import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (0, import_chunk_jvq8g4xf.O$e)(t) !== void 0) (0, import_chunk_jvq8g4xf._Vr)({ slug: t, context: a.context }).catch(import_chunk_k449cc64.i);
}
function R5s(t) {
  return `<${import_chunk_r8478wtb.OAt} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again \u2014 publishing the same file creates a new Artifact at a new URL. Do not use this url again.`;
}
