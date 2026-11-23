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
var chunk_7fx7xdda_exports = {};
__export(chunk_7fx7xdda_exports, {
  Bue: () => Bue,
  Jgt: () => Jgt,
  NJt: () => NJt,
  PUe: () => PUe,
  Qgt: () => Qgt,
  kii: () => kii,
  unt: () => unt
});
module.exports = __toCommonJS(chunk_7fx7xdda_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_2567t09g = require("/$bunfs/root/chunk-2567t09g.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
(0, import_chunk_adx6804h.B)();
var s = { non_exclusive_heartbeat_interval_ms: 0, multisession_poll_interval_ms_not_at_capacity: 2e3, multisession_poll_interval_ms_partial_capacity: 2e3, multisession_poll_interval_ms_at_capacity: 6e5, reclaim_older_than_ms: 5e3, session_keepalive_interval_v2_ms: 12e4, sse_connect_timeout_ms: 3e4, watch_sessions: false, watch_connected_poll_interval_ms: 6e4, watch_fallback_poll_interval_ms: 3e4, watch_session_end_window_ms: 6e5, forced_stops_per_hour: 3 };
var u = { message: "must be 0 (disabled) or \u2265100ms" }, l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.E)().int().min(0).max(60).default(s.forced_stops_per_hour).catch(0)), d = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ non_exclusive_heartbeat_interval_ms: (0, import_chunk_adx6804h.E)().int().min(0).default(0), multisession_poll_interval_ms_not_at_capacity: (0, import_chunk_adx6804h.E)().int().min(100).default(s.multisession_poll_interval_ms_not_at_capacity), multisession_poll_interval_ms_partial_capacity: (0, import_chunk_adx6804h.E)().int().min(100).default(s.multisession_poll_interval_ms_partial_capacity), multisession_poll_interval_ms_at_capacity: (0, import_chunk_adx6804h.E)().int().refine((e) => e === 0 || e >= 100, u).default(s.multisession_poll_interval_ms_at_capacity), reclaim_older_than_ms: (0, import_chunk_adx6804h.E)().int().min(1).default(5e3), session_keepalive_interval_v2_ms: (0, import_chunk_adx6804h.E)().int().min(0).default(12e4), sse_connect_timeout_ms: (0, import_chunk_adx6804h.E)().int().max(import_chunk_2567t09g.au).refine((e) => e === 0 || e >= 2e4, { message: "must be 0 (disabled) or \u226520000ms" }).default(s.sse_connect_timeout_ms), watch_sessions: (0, import_chunk_adx6804h.P)().catch(s.watch_sessions), watch_connected_poll_interval_ms: (0, import_chunk_adx6804h.E)().int().min(15e3).max(96e3).catch(s.watch_connected_poll_interval_ms), watch_fallback_poll_interval_ms: (0, import_chunk_adx6804h.E)().int().min(15e3).max(96e3).catch(s.watch_fallback_poll_interval_ms), watch_session_end_window_ms: (0, import_chunk_adx6804h.E)().int().min(0).max(36e5).catch(s.watch_session_end_window_ms), forced_stops_per_hour: l() }).refine((e) => e.non_exclusive_heartbeat_interval_ms > 0 || e.multisession_poll_interval_ms_at_capacity > 0, { message: "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0" }));
function Bue() {
  let e = (0, import_chunk_865at33z.yoe)("tengu_bridge_poll_interval_config", s, 3e5), t = d().safeParse(e);
  if (t.success) return t.data;
  return { ...s, forced_stops_per_hour: l().parse(typeof e === "object" && e !== null && "forced_stops_per_hour" in e ? e.forced_stops_per_hour : void 0) };
}
(0, import_chunk_adx6804h.B)();
var kii = "subdirectory", f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ version: (0, import_chunk_adx6804h.v)(1), session_ingress_token: (0, import_chunk_adx6804h.n)().min(1), api_base_url: (0, import_chunk_adx6804h.n)(), claude_code_args: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional().catch(void 0), mcp_config: (0, import_chunk_adx6804h.$t)({ content: (0, import_chunk_adx6804h.n)(), path: (0, import_chunk_adx6804h.n)().optional(), mode: (0, import_chunk_adx6804h.E)().optional() }).optional().catch(void 0), auto_mode_environment: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().catch(void 0), worktree: (0, import_chunk_adx6804h.P)().optional().catch(void 0), [kii]: (0, import_chunk_adx6804h.ie)().optional() })), h = { secret_did_not_decode: "Work secret is not valid JSON", unsupported_version: "Unsupported work secret version", missing_session_ingress_token: "Invalid work secret: missing or empty session_ingress_token", missing_api_base_url: "Invalid work secret: missing api_base_url" };
class Jgt extends Error {
  verdict;
  constructor(e) {
    super(h[e]);
    this.verdict = e;
    this.name = "WorkSecretShapeError";
  }
}
function PUe(e) {
  let t;
  try {
    t = (0, import_chunk_w578pjby.te)(Buffer.from(e, "base64url").toString("utf-8"));
  } catch {
    throw new Jgt("secret_did_not_decode");
  }
  let o = f().safeParse(t);
  if (o.success) return o.data;
  let r = new Set(o.error.issues.map((i) => i.path[0]));
  if (r.has(void 0) || r.has("version")) throw new Jgt("unsupported_version");
  if (r.has("session_ingress_token")) throw new Jgt("missing_session_ingress_token");
  throw new Jgt("missing_api_base_url");
}
function Qgt(e, t) {
  if (e === t) return true;
  let o = e.slice(e.lastIndexOf("_") + 1), r = t.slice(t.lastIndexOf("_") + 1);
  return o.length >= 4 && o === r;
}
function unt(e, t) {
  return (0, import_chunk_t39bs2jr.Mw)(t, "sessionId"), `${e.replace(/\/+$/, "")}/v1/code/sessions/${t}`;
}
async function NJt(e, t) {
  let o = await import_chunk_kcy9vg4b.LS.post(`${e}/worker/register`, {}, { headers: { Authorization: `Bearer ${t}`, "Content-Type": "application/json", "anthropic-version": "2023-06-01", "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, timeout: 1e4 }), r = o.data?.worker_epoch, i = typeof r === "string" ? Number(r) : r;
  if (typeof i !== "number" || !Number.isFinite(i) || !Number.isSafeInteger(i)) {
    let a = (0, import_chunk_qesvcmqe.qTr)(`${(0, import_chunk_w578pjby._)(o.data)}`, "register_worker_response");
    throw Error(`registerWorker: invalid worker_epoch in response${a === void 0 ? " (the response is not quoted: it is too long or is not one plain line)" : `: ${a}`}`);
  }
  return i;
}
