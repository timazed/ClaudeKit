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
var chunk_kskame3d_exports = {};
__export(chunk_kskame3d_exports, {
  A9l: () => A9l,
  VBs: () => VBs
});
module.exports = __toCommonJS(chunk_kskame3d_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_vbjta162 = require("/$bunfs/root/chunk-vbjta162.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_sg5zbskk = require("/$bunfs/root/chunk-sg5zbskk.js");
var import_chunk_39davzmt = require("/$bunfs/root/chunk-39davzmt.js");
var import_chunk_d0bewyh8 = require("/$bunfs/root/chunk-d0bewyh8.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_6qsjjx4s = require("/$bunfs/root/chunk-6qsjjx4s.js");
var import_chunk_zh47ka3v = require("/$bunfs/root/chunk-zh47ka3v.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_yw8k626q = require("/$bunfs/root/chunk-yw8k626q.js");
var import_chunk_stxr0bw4 = require("/$bunfs/root/chunk-stxr0bw4.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_4wtfvxk7 = require("/$bunfs/root/chunk-4wtfvxk7.js");
var import_chunk_6535dt17 = require("/$bunfs/root/chunk-6535dt17.js");
var import_chunk_vd3pj026 = require("/$bunfs/root/chunk-vd3pj026.js");
var import_chunk_vcq8ssd5 = require("/$bunfs/root/chunk-vcq8ssd5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
function re(e) {
  return {};
}
function ie(e) {
  return [];
}
(0, import_chunk_adx6804h.B)();
var de = "Anything you haven\u2019t pushed stays on this computer.", be = ["rebase", "merge", "cherry-pick", "revert", "bisect"], Re = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.n)().catch(""), o = (0, import_chunk_adx6804h.zn)("type", [(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("source_revision_not_on_remote_error"), result: e, revision: e, default_branch: e }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("source_revision_stale_on_remote_error"), revision: e, unpushed_commit_count: (0, import_chunk_adx6804h.E)().int().nonnegative().catch(0), is_dirty: (0, import_chunk_adx6804h.P)().catch(false), mid_operation: e })]);
  return (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ error: o }).transform((r) => r.error), o]);
});
function le(e) {
  let o = Re().safeParse(e);
  if (!o.success) return;
  let r = o.data, g = q(r.revision);
  switch (r.type) {
    case "source_revision_not_on_remote_error":
      return se(r.result) === "not_on_remote" ? { kind: "not_on_remote", revision: g, defaultBranch: q(r.default_branch) } : { kind: "inconclusive", revision: g };
    case "source_revision_stale_on_remote_error":
      return { kind: "stale", revision: g, unpushedCount: r.unpushed_commit_count, isDirty: r.is_dirty, midOperation: be.find((s) => s === se(r.mid_operation)) ?? null };
  }
}
function ue(e) {
  switch (e.kind) {
    case "not_on_remote":
      return { notice: [`${e.revision || "This branch"} isn\u2019t on the remote yet. The cloud session starts from the default branch${e.defaultBranch && `, ${e.defaultBranch},`} instead.`, `Staying on this computer: your work on ${e.revision || "this branch"}.`], fallback: "default_branch" };
    case "stale":
      return { notice: Q(me(e.revision || "this branch"), fe(e.unpushedCount || null, e.isDirty, e.midOperation)), fallback: "proceed_as_is" };
    case "inconclusive":
      return { notice: [`Couldn\u2019t confirm ${e.revision || "this branch"} is on the remote. If it isn\u2019t, the cloud session may not start.`, "The cloud session starts from what the remote has. Anything you haven\u2019t pushed stays on this computer."], fallback: "proceed_as_is" };
  }
}
function ce(e) {
  if (e === null || e.submodules_unverified) return { notice: [`Couldn\u2019t check your git state. ${ae("this branch")}`, de], covers: ["proceed_as_is", "default_branch"] };
  let o = e.branch === null ? "this commit" : q(e.branch) || "this branch", r = fe(e.unpushed_count, e.is_dirty, e.mid_operation);
  if (e.unpushed_count === null) return { notice: Q(ae(o), r), covers: ["proceed_as_is", "default_branch"] };
  return r.length > 0 ? { notice: Q(me(o), r), covers: ["proceed_as_is"] } : void 0;
}
function se(e) {
  return e.replace(/^REVISION_PREFLIGHT_RESULT_/, "").toLowerCase();
}
function q(e) {
  let o = e.replace(/^refs\/heads\//, "");
  return /\s/u.test(o) ? "" : (0, import_chunk_865at33z.$Ct)(o, "");
}
function me(e) {
  return `The cloud session starts from ${e} as it was last pushed.`;
}
function ae(e) {
  return `The cloud session starts from ${e} as it was last pushed, or from the default branch if it isn\u2019t on the remote.`;
}
function fe(e, o, r) {
  let g = [...e ? [`${e} unpushed ${e === 1 ? "commit" : "commits"}`] : [], ...o ? ["uncommitted changes"] : [], ...r ? [`a ${r} in progress`] : []];
  return e === null && g.length > 0 ? [...g, "anything else you haven\u2019t pushed"] : g;
}
function Q(e, o) {
  return o.length > 0 ? [`Some changes won\u2019t come with you. ${e}`, `Staying on this computer: ${new Intl.ListFormat("en", { type: "conjunction" }).format(o)}.`] : [e, de];
}
var Ee = "tengu_teleport_permission_mode_refused";
async function j(e) {
  let { sessionId: o, baseUrl: r, accessToken: g, environmentId: s, trustedDeviceToken: h, outcomeBranch: R, permissionMode: w } = e, H = `${r}/v1/code/sessions/${o}/move-to-cloud`, C = (0, import_chunk_stxr0bw4.KWn)(g);
  if (h) C["X-Trusted-Device-Token"] = h;
  let y;
  try {
    y = await import_chunk_3jjr3wje.bn.post(H, { environment_id: s, ...R && { outcome_branch: R }, ...w && { permission_mode: w }, ...Ae(e.sourceRevision), ...Ne(e.memoryMode), ...e.revisionFallback && { revision_fallback: e.revisionFallback } }, { headers: C, timeout: 15e3, validateStatus: (k) => k < 600 });
  } catch (k) {
    let F = k !== null && typeof k === "object" && "code" in k ? String(k.code) : "", _ = F === "ENOTFOUND" || F === "ECONNREFUSED", O = `Couldn't reach the server: ${(0, import_chunk_jv7av99m.d)(k)}${_ ? "" : ". The move may still have gone through. Check the session at claude.ai/code."}`;
    if (!_) e.onMayHaveMoved?.(O);
    return { ok: false, message: O, mayHaveCommitted: !_ };
  }
  if (y.status === 200 || y.status === 201) {
    e.onMoved?.();
    let k = Fe(y.data), F = k?.environment_kind ?? "cloud", _ = k?.environment_id ?? s;
    return (0, import_chunk_w578pjby.t)(`[code-session] move-to-cloud ${o} \u2192 ${F} (env ${_})`), { ok: true, environmentKind: F, sessionId: o, ...He(e.sourceRevision, y.data), ...Oe(e.memoryMode, y.data), ...re(y.data) };
  }
  if (y.status === 401 && e.onAuth401 !== void 0) {
    let k = e.onAuth401, F = (0, import_chunk_702cfzzh.JN)(y.config), _;
    try {
      _ = await k(g, F);
    } catch (O) {
      (0, import_chunk_w578pjby.t)(`[code-session] move-to-cloud ${o}: the 401 handler failed, not resending: ${(0, import_chunk_jv7av99m.d)(O)}`);
    }
    if (_ !== void 0 && (F || _ !== g)) return j({ ...e, accessToken: _, onAuth401: (O, x) => (k(O, x).catch(() => {
    }), Promise.resolve(void 0)) });
  }
  let T = y.status >= 500 ? `The server responded with ${y.status}. The move may still have gone through. Check the session at claude.ai/code.` : void 0;
  if (T !== void 0) e.onMayHaveMoved?.(T);
  let I = (0, import_chunk_qesvcmqe.k1)(y.data) ?? "", A = (0, import_chunk_6qsjjx4s.pFn)(y.data);
  if (T === void 0 && w && A === "move_permission_mode_refused") {
    (0, import_chunk_w578pjby.t)(`[code-session] move-to-cloud ${o} refused for its permission mode (${y.status})${I ? `: ${I}` : ""}; moving without one`);
    let k = await j({ ...e, permissionMode: void 0 });
    try {
      (0, import_chunk_y53wbr8a.a)(Ee, { retry_without_mode: (0, import_chunk_78g0060s.S)(k.ok ? "success" : k.mayHaveCommitted ? "maybe_committed" : "failed") });
    } catch {
    }
    return k;
  }
  let N = y.status === 400 && A === "session_not_bridge" ? "This session is already in the cloud. Refresh claude.ai/code to see it." : void 0;
  if (N !== void 0) e.onMayHaveMoved?.(N);
  if ((0, import_chunk_w578pjby.t)(`[code-session] move-to-cloud ${o} failed ${y.status}${A ? ` [${A}]` : ""}${I ? `: ${I}` : ""}`), T !== void 0) return { ok: false, message: T, mayHaveCommitted: true };
  if (N !== void 0) return { ok: false, message: N, mayHaveCommitted: true };
  let D = (0, import_chunk_qesvcmqe.E1)(y.data), U = /^the request was invalid\.?$/i.test(D ?? "") ? void 0 : D;
  return e.onRefusal?.({ status: y.status, codes: (0, import_chunk_stxr0bw4.alt)(y.data), message: U }), { ok: false, message: U ?? `The server couldn\u2019t move this session (HTTP ${y.status}). Run with --debug to see the raw response.`, mayHaveCommitted: false, reason: A, revisionConflict: y.status === 409 ? le(y.data) : void 0 };
}
function Fe(e) {
  if (e === null || typeof e !== "object" || !("session" in e) || e.session === null || typeof e.session !== "object") return;
  let o = e.session;
  return { environment_kind: typeof o.environment_kind === "string" ? o.environment_kind : void 0, environment_id: typeof o.environment_id === "string" ? o.environment_id : void 0 };
}
function Ae(e) {
  return {};
}
function Ne(e) {
  return {};
}
function Oe(e, o) {
  return {};
}
function He(e, o) {
  return {};
}
function X(e) {
  return;
}
async function Ie(e) {
  if (!(0, import_chunk_w5s307zm.dr)((0, import_chunk_18rsj2ts.pe)())) return { kind: "no-git" };
  let o = (0, import_chunk_f9x2f6cx.Te)(), r = await (0, import_chunk_w5s307zm.pm)(o), [g, s] = await Promise.all([Ce(r), (0, import_chunk_39davzmt.oii)(o, r === "HEAD" ? null : r)]);
  return { kind: "ready", outcomeBranch: `claude/teleport-${e.slice(-8)}`, checkout: g, localWork: s };
}
var ve = "Couldn\u2019t confirm this session\u2019s Remote Control connection and git branch are unchanged, so nothing moved. Run /teleport again.";
async function _e(e) {
  if ((0, import_chunk_f9x2f6cx.cC)()) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "restricted_session"), { kind: "precondition", message: import_chunk_bzyb60p0.VQo };
  {
    let M = (0, import_chunk_yw8k626q.eTa)();
    if (M !== void 0) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "repl_mode_not_carried"), { kind: "precondition", message: M };
  }
  let o = G((0, import_chunk_r60bafc1.Pc)()), r = o?.bridgeSessionId;
  if (!o || !r) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "no_bridge"), { kind: "precondition", message: "This session isn\u2019t connected to Remote Control. Run /remote-control first, then try again." };
  let g = (0, import_chunk_m15w38ag.ne)() && e.credentials !== void 0 ? await (0, import_chunk_mw2v4wks.V9e)(e.credentials) : (0, import_chunk_mw2v4wks.z9e)();
  if (!g) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "no_auth"), { kind: "precondition", message: "Not signed in to claude.ai. Run /login with your claude.ai account and try again." };
  let s = await Ie(r);
  switch (s.kind) {
    case "no-git":
      return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "no_git"), { kind: "precondition", message: `${(0, import_chunk_18rsj2ts.pe)()} isn\u2019t a git repository, so the cloud has nothing to clone. Try again from one that has a remote.` };
    case "ready":
      break;
    default:
      return s;
  }
  if (o.gitRepoUrl === null) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "no_git_remote"), { kind: "precondition", message: "Can\u2019t move. Moving to the cloud needs a remote named origin, in a repository that isn\u2019t your home directory. A new session started from one can move." };
  let { checkout: h, outcomeBranch: R } = s, w = ce(s.localWork), H = w === void 0 ? o.publishGitStateBeforeHandoff?.() : void 0, C = (0, import_chunk_k449cc64.wt)() ? null : await Be(o), y = C && (0, import_chunk_43nz5n02.Ro)(C.host) && (0, import_chunk_865at33z.b)("tengu_teleport_github_access_precheck", true) ? (0, import_chunk_bzyb60p0.ulr)(C.owner, C.name).catch(() => null) : null, T;
  try {
    T = await (0, import_chunk_vd3pj026.uHt)(e.storageV5, e.credentials);
  } catch (M) {
    return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "env_lookup_failed"), { kind: "precondition", message: `Couldn\u2019t look up cloud environments: ${(0, import_chunk_jv7av99m.d)(M)}` };
  }
  let I = (M) => M.kind !== "bridge" && !(0, import_chunk_p3d6wgn7.lje)(M), A = T.selectedTarget && I(T.selectedTarget) ? T.selectedTarget : (0, import_chunk_p3d6wgn7.G9e)(T.availableTargets, I);
  if (!A || (0, import_chunk_p3d6wgn7.lje)(A)) {
    if (T.environmentsError) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "env_lookup_failed"), { kind: "precondition", message: `Couldn\u2019t look up cloud environments: ${T.environmentsError}` };
    return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "no_environment"), { kind: "precondition", message: "No cloud environment available. Create one at claude.ai/code (or run /web-setup), then try again." + ((0, import_chunk_p3d6wgn7.lje)(T.selectedTarget) ? " Your default environment is self-hosted. Continuing in the cloud needs an Anthropic-hosted one." : "") };
  }
  let N = await y;
  if (C && (N?.verdict === "github_not_connected" || N?.verdict === "github_repo_not_found")) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", N.verdict), { kind: "precondition", message: N.verdict === "github_not_connected" ? (0, import_chunk_bzyb60p0.HZr)({ subject: `Cloud sessions clone ${C.owner}/${C.name}`, ...J() }) : (0, import_chunk_bzyb60p0.DZr)({ owner: C.owner, name: C.name, ...J(), apostrophe: "\u2019" }) };
  await H;
  let D, U = o;
  if (w !== void 0) {
    D = X();
    let M = await ge(e, w.notice, r, h);
    if (M.kind !== "confirmed") return M;
    U = M.handle, await U.publishGitStateBeforeHandoff?.();
  }
  (0, import_chunk_y53wbr8a.a)("tengu_teleport_to_cloud", { action: (0, import_chunk_78g0060s.S)("start") });
  let k = (0, import_chunk_d0bewyh8.Vu)(r, U.sessionIngressUrl, { from: "cli" }), F = { sessionUrl: k, accessToken: g, environmentId: A.environment_id, outcomeBranch: R, checkout: h }, { result: _, memoryMode: O } = await he(e, U, { ...F, memoryModeAtNotice: D, isAfterYes: w !== void 0 }), x = new Set(w?.covers), W;
  while (!_.ok && _.revisionConflict !== void 0 && W === void 0) {
    (0, import_chunk_p3d6wgn7.wps)(r);
    let { notice: M, fallback: L } = ue(_.revisionConflict), te = !x.has(L), Y = await ge(e, te ? M : void 0, r, h);
    if (Y.kind !== "confirmed") return Y;
    if (x.add(L), te && L === "default_branch") await Y.handle.publishGitStateBeforeHandoff?.();
    else W = L;
    ({ result: _, memoryMode: O } = await he(e, Y.handle, { ...F, memoryModeAtNotice: O, isAfterYes: true, revisionFallback: W }));
  }
  if (!_.ok) {
    let M = !_.mayHaveCommitted && _.reason === "github_token_missing";
    if (_.mayHaveCommitted) (0, import_chunk_cqa9hrgx.l)("teleport_to_cloud", "maybe_committed");
    else (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", M ? "github_not_connected" : _.reason === "unconfirmed_before_move" ? "unconfirmed_before_move" : "request_failed"), (0, import_chunk_p3d6wgn7.wps)(r);
    return (0, import_chunk_y53wbr8a.a)("tengu_teleport_to_cloud", { action: (0, import_chunk_78g0060s.S)(_.mayHaveCommitted ? "maybe_committed" : "failed") }), { kind: "server-error", failure: M ? { ..._, message: `No GitHub account is connected to your Claude account (or the connection expired). ${(0, import_chunk_bzyb60p0.Uci)(J())}` } : _, sessionId: r };
  }
  let xe = false;
  if (W !== void 0) (0, import_chunk_cqa9hrgx.l)("teleport_to_cloud", `revision_${W}`);
  else (0, import_chunk_cqa9hrgx.u)("teleport_to_cloud");
  let { environmentKind: V } = _;
  (0, import_chunk_y53wbr8a.a)("tengu_teleport_to_cloud", { action: (0, import_chunk_78g0060s.S)("success"), environment_kind: (0, import_chunk_865at33z.r6t)(V) ? (0, import_chunk_78g0060s.f)(V) : (0, import_chunk_78g0060s.S)(V === "cloud" ? "cloud" : "other") });
  let oe = ie(_);
  return { kind: "ok", success: _, sessionUrl: k, ...oe.length > 0 && { afterMove: oe.join(`
`) } };
}
async function ge(e, o, r, g) {
  if (o !== void 0) {
    let h = await e.confirmMove?.(o);
    if (h !== true) {
      if (h === false) (0, import_chunk_y53wbr8a.a)("tengu_teleport_to_cloud", { action: (0, import_chunk_78g0060s.S)("declined") });
      return { kind: "precondition", message: "Teleport cancelled" };
    }
  }
  let s = await ke(r, g);
  if (s === null) return (0, import_chunk_cqa9hrgx.m)("teleport_to_cloud", "unconfirmed_before_move"), (0, import_chunk_y53wbr8a.a)("tengu_teleport_to_cloud", { action: (0, import_chunk_78g0060s.S)("failed") }), { kind: "precondition", message: ve };
  return { kind: "confirmed", handle: s };
}
async function ke(e, o) {
  let r = await (0, import_chunk_39davzmt.I8o)((0, import_chunk_w5s307zm.pm)((0, import_chunk_f9x2f6cx.Te)()).then(Ce)).catch((s) => {
    (0, import_chunk_w578pjby.t)(`[teleport] the checkout could not be read again: ${(0, import_chunk_jv7av99m.d)(s)}`);
    return;
  }), g = G((0, import_chunk_r60bafc1.Pc)());
  return g?.bridgeSessionId === e && r === o ? g : null;
}
async function Ce(e) {
  return e === "HEAD" ? (0, import_chunk_w5s307zm.y6e)((0, import_chunk_f9x2f6cx.Te)()) : e;
}
async function he(e, o, r) {
  (0, import_chunk_p3d6wgn7.oyr)(o.bridgeSessionId);
  let g = false;
  try {
    o.stopLocalPreview?.(), await o.settleUploadsBeforeHandoff?.();
    let s = await (0, import_chunk_mw2v4wks.V9e)(e.credentials) ?? r.accessToken, h = await (0, import_chunk_sg5zbskk.tT)();
    if (r.isAfterYes && await ke(o.bridgeSessionId, r.checkout) === null) return { result: { ok: false, message: ve, mayHaveCommitted: false, reason: "unconfirmed_before_move" }, memoryMode: r.memoryModeAtNotice };
    let R = (0, import_chunk_6535dt17.rTa)(), w = X(r.memoryModeAtNotice);
    return g = true, { result: await j({ onMoved: () => {
      e.onMoved?.(r.sessionUrl), ye(e);
    }, onMayHaveMoved: (C) => {
      e.onMayHaveMoved?.(C), ye(e);
    }, sessionId: o.bridgeSessionId, baseUrl: (0, import_chunk_mw2v4wks.sj)(), accessToken: s, onAuth401: (C, y) => (0, import_chunk_mw2v4wks.lyr)(C, e.credentials, y), environmentId: r.environmentId, trustedDeviceToken: h, outcomeBranch: r.outcomeBranch, permissionMode: R, memoryMode: w, revisionFallback: r.revisionFallback }), memoryMode: w };
  } catch (s) {
    if (!g) (0, import_chunk_p3d6wgn7.wps)(o.bridgeSessionId);
    throw s;
  }
}
function ye(e) {
  try {
    e.beforeMove?.();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[teleport] the step at the move's commit point failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
function Me(e) {
  return (0, import_chunk_7d2qr9z5.Cpe)() ? { kind: "reconnect", oldSessionId: e } : { kind: "disconnect" };
}
var z = "/remote-control is no longer active. Run /remote-control to start a new session.";
function Z(e, o) {
  let r = `Session now in the cloud: ${e}`;
  switch (o.kind) {
    case "disconnected":
      return `${r}
${z}`;
    case "reconnected":
      return `${r}
New /remote-control session is active \xB7 Continue here, on your phone, or at ${o.newUrl}`;
    case "reconnect-pending":
      return `${r}
Starting a new /remote-control session. It\u2019ll show as /rc shortly.`;
  }
}
function G(e) {
  return e && !e.outboundOnly ? e : null;
}
function Be(e) {
  if (e.gitRepoUrl === void 0) return (0, import_chunk_3hr8g93j.gT)();
  return e.gitRepoUrl ? (0, import_chunk_vbjta162.vks)(e.gitRepoUrl) : Promise.resolve(null);
}
function J() {
  return { webSetupHint: (0, import_chunk_zh47ka3v.Bbt)() ? "run /web-setup to reuse your GitHub CLI login" : "", rerun: "then run /teleport again" };
}
var Pe = 1e4, $e = 100, we = 250;
function ee(e, o = false) {
  e.setAppState((r) => {
    if (!r.replBridgeEnabled) return r;
    return { ...r, replBridgeSkipNextArchive: true, replBridgeEnabled: false, replBridgeExplicit: false, replBridgeOutboundOnly: false, ...o && { replBridgeSessionGroupingId: void 0 } };
  });
}
function Ue(e) {
  e.setAppState((o) => {
    if (o.replBridgeEnabled) return o;
    return { ...o, replBridgeEnabled: true };
  });
}
async function De(e, o, r = Pe) {
  let g = Date.now() + r;
  while (Date.now() < g) {
    if (o.aborted) return null;
    let s = (0, import_chunk_r60bafc1.Pc)()?.bridgeSessionId;
    if (s && s !== e) return s;
    await (0, import_chunk_5appeerh.K)($e, o);
  }
  return null;
}
async function VBs(e, o) {
  let r, g, s;
  try {
    return await Le(e, o, { onMoved: (h) => {
      r = h;
    }, onAfterMove: (h) => {
      g = h;
    }, onMayHaveMoved: (h) => {
      s = h;
    } });
  } catch (h) {
    if (r !== void 0) return (0, import_chunk_k449cc64.i)(h), `Session now in the cloud: ${r}
Claude Code didn\u2019t finish updating Remote Control in this terminal after the move (${(0, import_chunk_jv7av99m.d)(h)}).${g === void 0 ? "" : `
${g}`}`;
    if (s !== void 0) return (0, import_chunk_k449cc64.i)(h), `${s}
Claude Code didn\u2019t finish updating Remote Control in this terminal (${(0, import_chunk_jv7av99m.d)(h)}).`;
    throw h;
  }
}
async function A9l(e) {
  let o = G((0, import_chunk_r60bafc1.Pc)()), r = o?.bridgeSessionId ?? (0, import_chunk_bzyb60p0._Q)()?.id;
  if (!r || !(0, import_chunk_t39bs2jr.TI)(r)) return;
  let g = await (0, import_chunk_865at33z.cxs)(r, void 0, e.credentials).catch((w) => {
    (0, import_chunk_w578pjby.t)(`[teleport] Couldn't read Remote Control session ${r} to see whether it was moved elsewhere, so the move goes on: ${(0, import_chunk_jv7av99m.d)(w)}`, { level: "error" });
    return;
  });
  if (g === void 0 || (0, import_chunk_t39bs2jr.Un)(String(g.session.id)) !== (0, import_chunk_t39bs2jr.Un)(r)) return;
  let s = g.session.environment_kind;
  if (typeof s !== "string" || s === "" || s === "bridge" || s === "chat") return;
  let R = `Can't move this session to the cloud: it was already moved there from another device or app. Continue it at ${(0, import_chunk_d0bewyh8.Vu)(r, o?.sessionIngressUrl, { from: "cli" })}`;
  if (o === null) return (0, import_chunk_p3d6wgn7.oyr)(r), (0, import_chunk_bzyb60p0.nSe)(void 0, void 0, void 0, e.storageV5), R;
  return Se(e, r), `${R}
${z}`;
}
async function Le(e, o, r) {
  if ((0, import_chunk_vcq8ssd5.Bte)()) return "Couldn\u2019t teleport: this conversation or this Claude Code process ran under an organization sign-in (not a claude.ai login), or Claude Code could not check that. A cloud session runs under a claude.ai login, outside the organization of that sign-in. You can continue this conversation here. To teleport a new conversation, start Claude Code again. If you use an organization sign-in, run `claude auth logout` before you start Claude Code again.";
  let g = false, s;
  try {
    s = await _e({ beforeMove: () => {
      if (g = (0, import_chunk_0tkterak.o9r)("cloud_handoff"), g) e.applyMessageOp({ type: "append", messages: [(0, import_chunk_bzyb60p0.Pt)(import_chunk_0tkterak.r9r.cloud_handoff, "warning")] });
    }, onMoved: r.onMoved, onMayHaveMoved: (h) => r.onMayHaveMoved(`Couldn\u2019t teleport: ${h}`), credentials: e.credentials, storageV5: e.storageV5, confirmMove: o });
  } finally {
    (0, import_chunk_0tkterak.Egt)();
  }
  switch (s.kind) {
    case "precondition":
      return s.message;
    case "server-error": {
      if (s.failure.mayHaveCommitted) return r.onMayHaveMoved((0, import_chunk_4wtfvxk7.jte)(`Couldn\u2019t teleport: ${s.failure.message}`, g)), Se(e, s.sessionId), (0, import_chunk_4wtfvxk7.jte)(`Couldn\u2019t teleport: ${s.failure.message}
${z}`, g);
      return (0, import_chunk_4wtfvxk7.jte)(`Couldn\u2019t teleport: ${s.failure.message}`, g);
    }
    case "ok": {
      r.onAfterMove(s.afterMove), (0, import_chunk_p3d6wgn7.oyr)(s.success.sessionId), (0, import_chunk_bzyb60p0.nSe)(void 0, void 0, void 0, e.storageV5);
      let h = s.sessionUrl, { afterMove: R } = s, w = (y) => R === void 0 ? y : `${y}
${R}`, H = Me(s.success.sessionId);
      if (H.kind === "disconnect") return setTimeout(ee, we, e, true), w(Z(h, { kind: "disconnected" }));
      ee(e), await (0, import_chunk_5appeerh.K)(0), Ue(e);
      let C = await De(H.oldSessionId, e.abortController.signal);
      return w(Z(h, C ? { kind: "reconnected", newUrl: (0, import_chunk_d0bewyh8.Vu)(C, void 0, { from: "cli" }) } : { kind: "reconnect-pending" }));
    }
  }
}
function Se(e, o) {
  (0, import_chunk_p3d6wgn7.oyr)(o), (0, import_chunk_bzyb60p0.nSe)(void 0, void 0, void 0, e.storageV5), setTimeout(ee, we, e, true);
}
