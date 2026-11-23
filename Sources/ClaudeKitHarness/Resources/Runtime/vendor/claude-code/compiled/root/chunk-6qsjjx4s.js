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
var chunk_6qsjjx4s_exports = {};
__export(chunk_6qsjjx4s_exports, {
  Cyr: () => Cyr,
  Kdl: () => Kdl,
  Ups: () => Ups,
  Ydl: () => Ydl,
  ain: () => ain,
  jOi: () => jOi,
  pFn: () => pFn,
  pmo: () => pmo,
  qdl: () => qdl
});
module.exports = __toCommonJS(chunk_6qsjjx4s_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
(0, import_chunk_adx6804h.B)();
var w = "2023-06-01", ain = "https://github.com/apps/claude/installations/new", x = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ subscription_found: (0, import_chunk_adx6804h.P)() }));
function pFn(e) {
  if (!e || typeof e !== "object") return;
  let r = "error" in e ? e.error : e;
  if (r && typeof r === "object" && "reason" in r && typeof r.reason === "string") return r.reason;
  return;
}
var A = "ccr-byoc-2025-07-29";
async function Cyr(e, r) {
  let { sessionId: l, repo: i, prNumber: f, baseUrl: _, getAccessToken: k, getTrustedDeviceToken: g, onUnauthorized: b } = r, o = E(e), h = k();
  if (!h) return (0, import_chunk_w578pjby.t)(`[bridge] No access token for ${e}-pr`), (0, import_chunk_cqa9hrgx.m)(o, "no_token"), { ok: false, reason: "no_token" };
  let y = `${_}/v1/code/github/${e}-pull-request`, T = { session_id: (0, import_chunk_t39bs2jr.mm)(l), repo: i, pr_number: f }, a;
  try {
    a = await import_chunk_kcy9vg4b.LS.post(y, T, { headers: pmo(h, { trustedDeviceToken: await g?.() }), timeout: 1e4, validateStatus: (s) => s < 500, skipSessionsBearerReport: true });
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`[bridge] ${e}-pr request failed: ${(0, import_chunk_jv7av99m.d)(s)}`), (0, import_chunk_cqa9hrgx.m)(o, "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (!(a.status >= 200 && a.status < 300 || a.status === 409)) {
    let s = pFn(a.data);
    if (a.status === 401 && !s?.startsWith("github_")) {
      if (!(0, import_chunk_702cfzzh.JN)(a.config)) b?.((0, import_chunk_702cfzzh.gVn)(a.config?.headers?.get?.("Authorization")) ?? h).catch(() => {
      });
    }
    let R = (0, import_chunk_qesvcmqe.k1)(a.data);
    return (0, import_chunk_w578pjby.t)(`[bridge] ${e}-pr failed ${a.status}${s ? ` [${s}]` : ""}${R ? `: ${R}` : ""}`), (0, import_chunk_cqa9hrgx.m)(o, s === "github_app_not_installed" ? s : "http_error"), { ok: false, reason: s, detail: (0, import_chunk_qesvcmqe.E1)(a.data) };
  }
  if ((0, import_chunk_w578pjby.t)(`[bridge] ${e}-pr ${i}#${f} ok`), (0, import_chunk_cqa9hrgx.u)(o), e === "unsubscribe") {
    let s = x().safeParse(a.data);
    if (s.success) return { ok: true, subscriptionFound: s.data.subscription_found };
  }
  return { ok: true };
}
function E(e) {
  return e === "subscribe" ? "bridge_pr_subscribe" : "bridge_pr_unsubscribe";
}
function pmo(e, { orgUUID: r, trustedDeviceToken: l } = {}) {
  let i = { Authorization: `Bearer ${e}`, "Content-Type": "application/json", "anthropic-version": w, "anthropic-beta": A, "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)(), "User-Agent": (0, import_chunk_tb84sczh.Ri)() };
  if (r !== void 0) i["x-organization-uuid"] = r;
  if (l !== void 0) i["X-Trusted-Device-Token"] = l;
  return i;
}
var jOi = "/worker/record-created-pr";
async function Kdl(e) {
  let r = `${e.sessionUrl.replace(/\/+$/, "")}${jOi}`;
  try {
    return { ok: true, status: (await import_chunk_kcy9vg4b.LS.post(r, { owner: e.owner, repo: e.repo, pr_number: e.prNumber, head_ref: e.headRef }, { headers: { Authorization: `Bearer ${e.workerToken}`, "Content-Type": "application/json", "anthropic-version": w, "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)(), "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, timeout: e.timeoutMs })).status };
  } catch (l) {
    let { kind: i, status: f } = (0, import_chunk_jv7av99m.$i)(l);
    return { ok: false, kind: i, status: f };
  }
}
var Ups = { timeout: 5e3, maxContentLength: 16384, validateStatus: () => true };
function qdl({ path: e, body: r }, l, i) {
  let f = `${l.replace(/\/+$/, "")}${e}`, _ = { ...Ups, headers: pmo(i), beforeRedirect: () => {
    throw Error("redirect refused");
  } };
  return r === void 0 ? import_chunk_kcy9vg4b.LS.get(f, _) : import_chunk_kcy9vg4b.LS.post(f, r, _);
}
var I = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ results: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)(), error_reason: (0, import_chunk_adx6804h.n)().optional() })) })), j = /^chan_[A-Za-z0-9_-]{1,120}$/;
async function Ydl(e) {
  let { door: r, items: l, signal: i } = e;
  if (!j.test(r.channelId)) return (0, import_chunk_cqa9hrgx.m)("bridge_project_files_write", "invalid_channel"), { ok: false, reason: "invalid_channel" };
  let f = r.getBearerToken();
  if (!f) return (0, import_chunk_cqa9hrgx.m)("bridge_project_files_write", "no_token"), { ok: false, reason: "no_token" };
  let _ = `${r.apiBaseUrl}/v1/code/sessions/${encodeURIComponent(r.sessionId)}/worker/channels/${encodeURIComponent(r.channelId)}/files:write`, k = { session_id: r.sessionId, channel_id: r.channelId, worker_epoch: r.getWorkerEpoch(), files: l.map((o) => ({ path: o.path, content: o.content.toString("base64") })) }, g;
  try {
    g = await import_chunk_kcy9vg4b.LS.post(_, k, { headers: pmo(f), timeout: 9e4, maxBodyLength: 1 / 0, signal: i, validateStatus: (o) => o < 500 });
  } catch (o) {
    if (import_chunk_3jjr3wje.bn.isCancel(o)) return (0, import_chunk_cqa9hrgx.m)("bridge_project_files_write", "aborted"), { ok: false, reason: "aborted" };
    return (0, import_chunk_w578pjby.t)(`[bridge] project files write request failed: ${(0, import_chunk_jv7av99m.d)(o)}`), (0, import_chunk_cqa9hrgx.m)("bridge_project_files_write", "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (g.status !== 200) {
    let o = pFn(g.data);
    return (0, import_chunk_w578pjby.t)(`[bridge] project files write refused: status=${g.status}${o ? ` [${o}]` : ""}`), (0, import_chunk_cqa9hrgx.m)("bridge_project_files_write", "http_error"), { ok: false, reason: "http_error", status: g.status, code: o };
  }
  let b = I().safeParse(g.data);
  if (!b.success) return (0, import_chunk_cqa9hrgx.m)("bridge_project_files_write", "bad_response"), { ok: false, reason: "bad_response" };
  return (0, import_chunk_cqa9hrgx.u)("bridge_project_files_write"), { ok: true, results: b.data.results };
}
