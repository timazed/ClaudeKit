const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_mfvyym3b_exports = {};
__export(chunk_mfvyym3b_exports, {
  A1r: () => A1r,
  Kjl: () => Kjl,
  RSn: () => RSn,
  YPt: () => YPt,
  cFo: () => cFo,
  dFo: () => dFo,
  fC: () => fC,
  fFo: () => fFo,
  uFo: () => uFo,
  xSn: () => xSn,
  z5n: () => z5n
});
module.exports = __toCommonJS(chunk_mfvyym3b_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_ejeqtcg6 = require("/$bunfs/root/chunk-ejeqtcg6.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_vfw28y4s = require("/$bunfs/root/chunk-vfw28y4s.js");
var import_chunk_21y9ek9j = require("/$bunfs/root/chunk-21y9ek9j.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_xgsn0ms8 = require("/$bunfs/root/chunk-xgsn0ms8.js");
var import_chunk_zh47ka3v = require("/$bunfs/root/chunk-zh47ka3v.js");
var import_chunk_gnb95k99 = require("/$bunfs/root/chunk-gnb95k99.js");
var A1r = "ui:pinned", dFo = "detachedFromParentAt", cFo = "completedAckAt", uFo = "openedInAppAt", M = 25e3, F = 4, G = 15e3, K = 200, B = 50, U = 8e6, Y = 1e6, D = 128, V = 600, H = 1024, X = 20, j = 6e4, E = "Run `claude auth login` (or /login in a local session), then try again.", z = { started_by_session: "Cloud sessions cannot be used from a program that was started inside a Claude Code session. Start it outside the session and try again.", provider: "Cloud sessions aren't available with this API provider. They run on Anthropic's infrastructure and require an Anthropic account.", evaluation_run: import_chunk_sjqze7qg.wnn, nonessential_traffic: "Cloud sessions are unavailable while CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set.", policy: "Cloud sessions are disabled by your organization's policy.", policy_unverified: "Your organization's policy could not be read, so cloud sessions are unavailable. Try again in a moment.", not_signed_in: `Cloud sessions need a sign-in with a Claude account. ${E}`, sign_in_expired: `Your sign-in was not accepted. ${E}`, not_found: "That cloud session was not found for this sign-in.", forbidden: "The service did not allow this sign-in to read cloud sessions from this computer. Try Claude Code on the web instead.", temporarily_unavailable: "Cloud sessions could not be read right now. Try again in a moment.", failed: "Cloud sessions could not be read." }, W = "Cloud sessions are disabled for the rest of this session because an organization with a restricted policy was signed in earlier. Restart Claude Code to check again.", Q = "Your organization's policy could not be loaded: the request for it got a 404, which usually means that a proxy or gateway does not forward it. Ask your network admin to forward it; `claude doctor` shows which host was asked.", J = `Cloud sessions aren't available with this Console sign-in. They need a sign-in with a Claude account. ${E}`, Z = "Cloud sessions can't be read with this Console sign-in.", q = "Cloud sessions can't be read with your Console sign-in in this process. This is a bug in Claude Code; please report it.";
class Kjl {
  inFlight = 0;
  reported = /* @__PURE__ */ new Set();
  proofRereadAt = Number.NEGATIVE_INFINITY;
  async wasForbidden() {
    if (Date.now() - this.proofRereadAt < j) return;
    this.proofRereadAt = Date.now();
    try {
      let { clearTrustedDeviceTokenCache: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-y8vskpae.js")));
      e();
    } catch (e) {
      (0, import_chunk_w578pjby.t)(`[cloud-sessions] the kept read of the trusted-device proof was not cleared: ${(0, import_chunk_jv7av99m.Qu)(e) ?? "error"}`, { level: "error" });
    }
  }
  async answer(e, n) {
    if (e.subtype === "get_cloud_session") RSn(e.subtype, e.session_id);
    else if (e.cursor !== void 0 && !y(e.cursor)) throw new import_chunk_jv7av99m.gr(`${e.subtype}: cursor must be a next_cursor as it was given`);
    let o = await this.bounded(e.subtype, n, async (a) => {
      let d = e.subtype === "list_cloud_sessions" && e.user_initiated !== true, _ = await xSn(!d);
      if (_ !== null) return _;
      if (e.subtype === "list_cloud_sessions") {
        let { result: C, newerApi: w } = await P({ newer: `/v1/code/sessions?${new URLSearchParams({ limit: String(e.only_runs === true ? B : K), ...e.only_runs === true && { only_trigger_sessions: "true" }, ...e.only_archived === true && { statuses: "archived" }, ...e.cursor === void 0 ? { include_pinned_beyond_page: "true" } : { cursor: e.cursor } })}`, older: "/v1/sessions" }, { signal: a, context: n, maxResponseBytes: U, isBackground: d }), I = C.ok && C.status === 404 ? fC("failed") : YPt(C, d);
        if (I !== null) return I;
        let S = C.ok ? C.data : void 0;
        if (!(0, import_chunk_0jve1fep.Le)(S) || !Array.isArray(S.data)) return fC("failed");
        let O = (0, import_chunk_0jve1fep.Le)(S.pinned_beyond_page) ? S.pinned_beyond_page.sessions : void 0;
        return { status: "ok", sessions: [...S.data, ...Array.isArray(O) ? O : []].flatMap((R) => T(R, w) ?? []), truncated: w ? typeof S.next_cursor === "string" && S.next_cursor !== "" : S.has_more === true, ...w && { ...g(S, ["next_cursor"], y), ...g(e, ["only_runs", "only_archived"], (R) => R === true || void 0) } };
      }
      let { result: l, newerApi: p } = await P({ newer: `/v1/code/sessions/${e.session_id}`, older: `/v1/sessions/${e.session_id}` }, { signal: a, context: n, maxResponseBytes: Y, isBackground: d }), c = YPt(l, d);
      if (c !== null) return c;
      let h = l.ok ? l.data : void 0, f = p ? (0, import_chunk_865at33z.vzn)(h) : h;
      if (!(0, import_chunk_0jve1fep.Le)(f)) return fC("not_found");
      let v = L(f), k = p ? T(f, true) : void 0;
      return { status: "ok", ...typeof f.title === "string" && f.title !== "" && { title: f.title }, ...v !== void 0 && { branch: v }, ...(0, import_chunk_865at33z.r6t)(f.environment_kind) && { environment_kind: f.environment_kind }, ...oe(f), ...p && se(f), ...k !== void 0 && { session: k } };
    }), r = o.status === "unavailable" ? o.reason ?? "failed" : void 0;
    switch (e.subtype) {
      case "list_cloud_sessions":
        if (r === void 0) (0, import_chunk_cqa9hrgx.u)("sdk_list_cloud_sessions");
        else (0, import_chunk_cqa9hrgx.m)("sdk_list_cloud_sessions", r);
        break;
      case "get_cloud_session":
        if (r === void 0) (0, import_chunk_cqa9hrgx.u)("sdk_get_cloud_session");
        else (0, import_chunk_cqa9hrgx.m)("sdk_get_cloud_session", r);
        break;
    }
    return o;
  }
  async bounded(e, n, o) {
    if (this.inFlight >= F) return fC("temporarily_unavailable");
    this.inFlight++;
    let r = (0, import_chunk_cbnm4p23.sd)(n.abortController);
    try {
      let a = await (0, import_chunk_5appeerh.me)(o(r.signal), M);
      if (a !== void 0) return a;
      return r.abort(), fC("temporarily_unavailable");
    } catch (a) {
      let { kind: d, status: _ } = (0, import_chunk_jv7av99m.$i)(a), l = (0, import_chunk_jv7av99m.Qu)(a) ?? "error";
      if ((0, import_chunk_w578pjby.t)(`[cloud-sessions] ${e} failed: ${l} ${d} ${_ ?? "no status"}`, { level: "error" }), d === "other" && !r.signal.aborted && !(0, import_chunk_jv7av99m.rH)(a) && !this.reported.has(l)) this.reported.add(l), (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`[cloud-sessions] ${e} failed: ${l}`, "a cloud-session read failed with an internal error"));
      let p = d !== "other" && _ === void 0 && !(0, import_chunk_jv7av99m.rH)(a);
      return fC(r.signal.aborted || p ? "temporarily_unavailable" : "failed");
    } finally {
      this.inFlight--;
    }
  }
}
function T(e, n) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return;
  let o = N(e.id), r = [e.updated_at, e.last_event_at, e.created_at].find((c) => typeof c === "string");
  if (o === void 0 || typeof r !== "string") return;
  let a;
  switch (e.session_status) {
    case "running":
    case "idle":
    case "requires_action":
    case "archived":
    case "pending":
    case "failed":
      a = e.session_status;
      break;
    default:
      a = (0, import_chunk_xgsn0ms8.Q7r)({ status: typeof e.status === "string" ? e.status : void 0, worker_status: typeof e.worker_status === "string" ? e.worker_status : void 0, connection_status: typeof e.connection_status === "string" ? e.connection_status : void 0 });
  }
  let [d, ..._] = x(e, "sources").filter(import_chunk_0jve1fep.Le).filter((c) => c.type === "git_repository").map(({ url: c }) => {
    let [h, f] = typeof c === "string" ? (0, import_chunk_3hr8g93j.eQe)(c)?.split("/") ?? [] : [];
    return h && f ? { owner: h, name: f } : void 0;
  }), l = _.filter((c) => c !== void 0), p = L(e);
  return { id: o, title: typeof e.title === "string" ? e.title : "", updated_at: r, status: a, ...(0, import_chunk_865at33z.r6t)(e.environment_kind) && { environment_kind: e.environment_kind }, ...d !== void 0 && { repository: d }, ...l.length > 0 && { other_repositories: l }, ...p !== void 0 && { branch: p }, ...n && ne(e), ...n && ee(e, `${d?.owner}/${d?.name}`) };
}
function ee(e, n) {
  let o = (0, import_chunk_0jve1fep.Le)(e.external_metadata) ? e.external_metadata.current_branches : void 0, r = (0, import_chunk_0jve1fep.Le)(o) ? o : {}, a = y(r[Object.hasOwn(r, n) ? n : ""]);
  return a === "" ? void 0 : { current_branch: a };
}
function RSn(e, n) {
  if (typeof n !== "string" || n.length > D || !import_chunk_vfw28y4s.Z9e.test(n)) throw new import_chunk_jv7av99m.gr(`${e}: session_id is not a cloud session id`);
}
async function xSn(e) {
  if (await (0, import_chunk_ejeqtcg6.eue)() !== void 0) return fC("started_by_session");
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return fC("provider");
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_EVAL_CONFINED) return fC("evaluation_run");
  if ((0, import_chunk_k449cc64.wt)()) return fC("nonessential_traffic");
  if (await (0, import_chunk_7q6ee47s.Zh)(), (0, import_chunk_zh47ka3v.Sae)() !== null) switch ((0, import_chunk_2nv4wrez.rGe)() ? "route_missing" : (0, import_chunk_2nv4wrez.ba)(import_chunk_zh47ka3v.$q.policy)) {
    case "org_denied":
      if (e) await (0, import_chunk_21y9ek9j.RG)("allow_remote_sessions", "cloud_session");
      return fC("policy");
    case "latched":
      return fC("policy", W);
    case "route_missing":
      return fC("policy_unverified", Q);
    default:
      return fC("policy_unverified");
  }
  if ((0, import_chunk_865at33z.qk)()) {
    if (!(0, import_chunk_865at33z.uPr)()) return fC("failed", q);
    let n = (0, import_chunk_865at33z.Ozn)();
    if (n === "unknown") return fC("policy_unverified");
    return fC("not_signed_in", n === "not_ldr" ? J : Z);
  }
  return null;
}
async function fFo(e) {
  e.signal.throwIfAborted();
  let n = e.withDeviceProof ? (await (0, import_chunk_865at33z.YU)())["X-Trusted-Device-Token"] : void 0, o = { ...e.olderApi && { "anthropic-beta": import_chunk_865at33z.Rzn }, ...n !== void 0 && { "X-Trusted-Device-Token": n } };
  return { auth: "teleport-org", ...Object.keys(o).length > 0 && { headers: o }, maxRedirects: 0, validateStatus: () => true, timeout: e.timeoutMs ?? G, maxContentLength: e.maxResponseBytes, signal: e.signal, isBackground: e.isBackground, credentials: e.context.credentials, storageV5: e.context.storageV5 };
}
async function z5n(e, n) {
  let o = await fFo(n);
  return n.signal.throwIfAborted(), import_chunk_865at33z.zt.get(e, o);
}
async function P(e, n) {
  if (!(0, import_chunk_7d2qr9z5.K5)()) {
    let o = await z5n(e.older, { ...n, olderApi: true });
    if (!o.ok || !(0, import_chunk_gnb95k99.Rwe)(o)) return { result: o, newerApi: false };
  }
  return { result: await z5n(e.newer, { ...n, olderApi: false }), newerApi: true };
}
function YPt(e, n) {
  if (!e.ok) switch (e.reason) {
    case "data-residency":
      return fC("provider");
    case "essential-traffic-only":
      return fC("nonessential_traffic");
    case "no-auth":
      return fC("not_signed_in");
  }
  switch (e.status) {
    case 200:
      return null;
    case 401:
      return fC(n ? "temporarily_unavailable" : "sign_in_expired");
    case 403:
      return fC("forbidden");
    case 404:
      return fC("not_found");
    case 429:
      return fC("temporarily_unavailable");
    default:
      return fC(e.status >= 500 ? "temporarily_unavailable" : "failed");
  }
}
function fC(e, n = z[e]) {
  return { status: "unavailable", reason: e, message: n };
}
function N(e) {
  let n = typeof e === "string" ? (0, import_chunk_t39bs2jr.Zoe)(e) : "";
  return n.length <= D && import_chunk_vfw28y4s.Z9e.test(n) ? n : void 0;
}
function b(e) {
  let n = (0, import_chunk_sjqze7qg.i7)(e);
  return n.length <= V ? n : "";
}
function y(e) {
  let n = b(e);
  return n === e ? n : "";
}
function g(e, n, o) {
  return Object.fromEntries(n.flatMap((r) => {
    let a = (0, import_chunk_0jve1fep.Le)(e) ? o(e[r]) : void 0;
    return a === void 0 || a === "" ? [] : [[r, a]];
  }));
}
function ne(e) {
  let n = (0, import_chunk_0jve1fep.Le)(e.client_metadata) ? e.client_metadata : {}, o = { ...e, suggested_from_session_id: n.suggestedFromSessionId, detached_from_parent_at: n[dFo], completed_at: n[cFo], opened_in_app_at: n[uFo], lifecycle_status: e.status }, r = e.external_metadata, a = g((0, import_chunk_0jve1fep.Le)(r) ? r.post_turn_summary : void 0, ["status_category", "status_detail", "needs_action"], import_chunk_sjqze7qg.Rot);
  return { pinned: Array.isArray(e.tags) && e.tags.includes(A1r), ...g(e, ["tags"], te), ...g(o, ["lifecycle_status", "worker_status", "connection_status", "created_at", "environment_id", "self_hosted_runner_pool_id", "trigger_id", "agent_id", "detached_from_parent_at", "last_event_at", "completed_at", "opened_in_app_at"], b), ...g(o, ["parent_session_id", "suggested_from_session_id"], N), ...typeof e.unread === "boolean" && { unread: e.unread }, ...g(e.config, ["origin", "model", "effort_level", "permission_mode"], b), ...g(r, ["recap"], import_chunk_sjqze7qg.Rot), ...Object.keys(a).length > 0 && { summary: a } };
}
function te(e) {
  return Array.isArray(e) && e.length <= H && e.every((n) => y(n) !== "") ? e : void 0;
}
function se(e) {
  let { pending_action: n, pending_actions: o } = (0, import_chunk_0jve1fep.Le)(e.external_metadata) ? e.external_metadata : {}, r = [...Array.isArray(o) ? o.slice(0, X) : [], n], a = (0, import_chunk_pbteexar.Ls)(r.filter(import_chunk_0jve1fep.Le), "tool_use_id").flatMap((d) => {
    let _ = y(d.tool_use_id), l = y(d.tool_name), p = (0, import_chunk_mzmcvr6c.ht)(d.server_connector), c = y(d.server_connector_name);
    return _ && l && p ? { tool_use_id: _, tool_name: l, id: p, ...c !== "" && { name: c, added_account: d.server_connector_added_account === true } } : [];
  });
  return a.length > 0 ? { waiting_connectors: a } : void 0;
}
function oe(e) {
  let n = e.self_hosted_runner_state, o = (0, import_chunk_0jve1fep.Le)(n) ? n.wait : void 0, { spawn_state: r, ...a } = g(o, ["spawn_state", "spawn_eta_at", "spawn_failure_code", "spawn_user_message"], b), d = g(o, ["spawn_consecutive_failures", "pool_alive_runner_count", "pool_eligible_runner_count", "sessions_ahead"], (_) => Number.isSafeInteger(_) ? _ : void 0);
  return r === void 0 ? void 0 : { runner_wait: { spawn_state: r, ...a, ...d } };
}
function x(e, n) {
  let o = (0, import_chunk_0jve1fep.Le)(e.config) ? e.config : e.session_context, r = (0, import_chunk_0jve1fep.Le)(o) ? o[n] : void 0;
  return Array.isArray(r) ? r : [];
}
function L(e) {
  let n = x(e, "outcomes").find((a) => (0, import_chunk_0jve1fep.Le)(a) && a.type === "git_repository"), o = (0, import_chunk_0jve1fep.Le)(n) ? n.git_info : void 0, r = (0, import_chunk_0jve1fep.Le)(o) && Array.isArray(o.branches) ? o.branches[0] : void 0;
  return typeof r === "string" && r !== "" ? r : void 0;
}
