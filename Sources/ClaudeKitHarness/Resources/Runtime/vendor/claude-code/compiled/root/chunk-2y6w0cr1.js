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
var chunk_2y6w0cr1_exports = {};
__export(chunk_2y6w0cr1_exports, {
  $jr: () => $jr,
  Akn: () => Akn,
  Bjr: () => Bjr,
  Ckn: () => Ckn,
  EWo: () => EWo,
  QIt: () => QIt,
  Szs: () => Szs,
  UL: () => UL,
  Ujr: () => Ujr,
  Wjr: () => Wjr,
  _zs: () => _zs,
  gzs: () => gzs,
  kWo: () => kWo,
  kXn: () => kXn,
  nba: () => nba,
  o8t: () => o8t,
  oba: () => oba,
  rba: () => rba,
  sba: () => sba,
  tba: () => tba,
  u$e: () => u$e,
  vWo: () => vWo,
  wWo: () => wWo,
  yzs: () => yzs
});
module.exports = __toCommonJS(chunk_2y6w0cr1_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_stxr0bw4 = require("/$bunfs/root/chunk-stxr0bw4.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_06wfh5v6 = require("/$bunfs/root/chunk-06wfh5v6.js");
var import_chunk_gnb95k99 = require("/$bunfs/root/chunk-gnb95k99.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
class UL extends Error {
  status;
  errorType;
  suppressible;
  constructor(e, r, p, w = false) {
    super(e);
    this.name = "BridgeFatalError", this.status = r, this.errorType = p, this.suppressible = w;
  }
}
class $jr extends UL {
  hint;
  constructor(e, r) {
    super(`${e}: ${r}`, 403, "untrusted_device");
    this.hint = r;
  }
}
async function I(e, r, p, w, v, b, T) {
  let R = (0, import_chunk_stxr0bw4.Kle)(w.data);
  if (R === void 0) return w;
  let k = false;
  if ((0, import_chunk_stxr0bw4.ilt)(R)) {
    p(`[bridge:api] ${T}: 403 untrusted_device, enrolling this computer and retrying`);
    let A = await e.recover(v);
    if (A) {
      let P = await b(r(), A), n = P.status === 403 ? (0, import_chunk_stxr0bw4.Kle)(P.data) : void 0;
      if (n === void 0) return P;
      R = n, k = true, p(`[bridge:api] ${T}: retry after enrollment also got untrusted_device`);
    }
  }
  throw new $jr(T, e.hint(R, { justEnrolled: k }));
}
function gzs(e) {
  function r(n) {
    e.onDebug?.(n);
  }
  let p = 0, w = 100;
  async function v(n, s) {
    let g = { Authorization: `Bearer ${n}`, "Content-Type": "application/json", "anthropic-version": "2023-06-01", "anthropic-beta": import_chunk_xfj2cwfv.j3i.header, "x-environment-runner-version": e.runnerVersion, "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, o = s ?? await e.getTrustedDeviceToken?.();
    if (o) g["X-Trusted-Device-Token"] = o;
    return g;
  }
  function b() {
    let n = e.getAccessToken();
    if (!n) throw Error(import_chunk_sr33d2zd.lGe);
    return n;
  }
  async function T(n, s, g) {
    let o = g === "enroll_and_retry" ? e.untrustedDevice : void 0, c = o ? await e.getTrustedDeviceToken?.() : void 0, _ = b(), h = await n(_, c);
    if (h.status === 403 && o) return I(o, b, r, h, c, n, s);
    if (h.status !== 401) return h;
    if (!e.onAuth401) return r(`[bridge:api] ${s}: 401 received, no refresh handler`), h;
    if (r(`[bridge:api] ${s}: 401 received, attempting token refresh`), await e.onAuth401(_)) {
      r(`[bridge:api] ${s}: Token refreshed, retrying request`);
      let E = b(), D = await n(E, c);
      if (D.status === 403 && o) return I(o, b, r, D, c, n, s);
      if (D.status !== 401) return D;
      r(`[bridge:api] ${s}: Retry after refresh also got 401`);
    } else r(`[bridge:api] ${s}: Token refresh failed`);
    return h;
  }
  let R = { async registerBridgeEnvironment(n, s) {
    return (0, import_chunk_cqa9hrgx.qo)("bridge_environment_register", async () => {
      r(`[bridge:api] POST /v1/environments/bridge bridgeId=${n.bridgeId}`);
      let g, o = n.getToolHostAdvert?.() ?? { kind: "withdraw" };
      switch (o.kind) {
        case "advertise":
          g = { tool_host: "2", tool_host_cc_version: o.advert.cliVersion, tool_host_platform: o.advert.platform };
          break;
        case "withdraw":
          if (n.reuseEnvironmentId) g = { tool_host: "", tool_host_cc_version: "", tool_host_platform: "", tool_host_blocker: "" };
          break;
        case "unknown":
          break;
      }
      let c, _ = n.getDirectoryBrowseAdvert ? n.getDirectoryBrowseAdvert() : false;
      if (_ === true) c = { dir_browse: "1" };
      else if (_ === false && n.reuseEnvironmentId) c = { dir_browse: "" };
      let h = await Promise.resolve().then(() => n.getDeviceUuid?.()).catch(() => {
        return;
      }), y = { machine_name: n.machineName, ...n.machineId != null && { machine_id: n.machineId }, directory: n.dir, branch: n.branch, git_repo_url: (0, import_chunk_w5s307zm.Axt)(n.gitRepoUrl), max_sessions: n.maxSessions, metadata: { worker_type: n.workerType, ...n.machineId != null && { machine_id: n.machineId }, ...h !== void 0 && { device_uuid: h }, ...g, ...c }, ...n.hostProfile && { host: n.hostProfile }, ...n.reuseEnvironmentId && { environment_id: n.reuseEnvironmentId } }, E = await T(async (D, B) => import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}/v1/environments/bridge`, y, { headers: await v(D, B), timeout: 15e3, signal: s, validateStatus: (V) => V < 500 }), "Registration", "enroll_and_retry");
      if (E.status === 409 && (0, import_chunk_qesvcmqe.llt)(E.data) === import_chunk_sr33d2zd.fjn) throw new UL((0, import_chunk_qesvcmqe.E1)(E.data) ?? "This folder is already served by another Claude Code on this device. Stop it first.", 409, import_chunk_sr33d2zd.fjn);
      return x(E.status, E.data, "Registration", E.headers), r(`[bridge:api] POST /v1/environments/bridge -> ${E.status} environment_id=${E.data.environment_id}`), r(`[bridge:api] >>> ${(0, import_chunk_qesvcmqe.Rks)({ ...y, ...y.host && { host: { tools: y.host.tools.length, mcp: y.host.mcp_servers?.length ?? 0 } } })}`), r(`[bridge:api] <<< ${(0, import_chunk_qesvcmqe.Rks)(E.data)}`), E.data;
    }, C);
  }, async pollForWork(n, s, g, o, c) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId");
    let _ = p;
    p = 0;
    let h = {};
    if (o !== void 0) h.reclaim_older_than_ms = o;
    if (c !== void 0) h.poll_interval_ms = c;
    let y = await import_chunk_kcy9vg4b.LS.get(`${e.baseUrl}/v1/environments/${n}/work/poll`, { headers: await v(s), params: Object.keys(h).length > 0 ? h : void 0, timeout: 1e4, signal: g, validateStatus: (D) => D < 500 });
    if (x(y.status, y.data, "Poll", y.headers), !y.data) {
      if (p = _ + 1, p === 1 || p % w === 0) r(`[bridge:api] GET .../work/poll -> ${y.status} (no work, ${p} consecutive empty polls)`);
      return null;
    }
    let E = y.data.data?.mode;
    if (E != null) {
      let { id: D, data: B } = y.data;
      return r(`[bridge:api] GET .../work/poll -> ${y.status} workId=${(0, import_chunk_qesvcmqe.Rme)(D)} type=${(0, import_chunk_qesvcmqe.qWn)(B.type)} mode=${(0, import_chunk_qesvcmqe.qWn)(E)} sessionId=${(0, import_chunk_qesvcmqe.Rme)(B.id)}`), y.data;
    }
    return r(`[bridge:api] GET .../work/poll -> ${y.status} workId=${y.data.id} type=${y.data.data?.type}${y.data.data?.id ? ` sessionId=${y.data.data.id}` : ""}`), r(`[bridge:api] <<< ${(0, import_chunk_qesvcmqe.Rks)(y.data)}`), y.data;
  }, async acknowledgeWork(n, s, g, o = s) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId"), (0, import_chunk_t39bs2jr.Mw)(s, "workId"), r(`[bridge:api] POST .../work/${o}/ack`);
    let c = await import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}/v1/environments/${n}/work/${s}/ack`, {}, { headers: await v(g), timeout: 1e4, validateStatus: (_) => _ < 500 });
    x(c.status, c.data, "Acknowledge", c.headers), r(`[bridge:api] POST .../work/${o}/ack -> ${c.status}`);
  }, async stopWork(n, s, g, o, c = s) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId"), (0, import_chunk_t39bs2jr.Mw)(s, "workId"), r(`[bridge:api] POST .../work/${c}/stop force=${o}`);
    let _ = await import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}/v1/environments/${n}/work/${s}/stop`, { force: o }, { headers: await v(g), timeout: 1e4, validateStatus: (h) => h < 500 });
    x(_.status, _.data, "StopWork"), r(`[bridge:api] POST .../work/${c}/stop -> ${_.status}`);
  }, async deregisterEnvironment(n) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId"), r(`[bridge:api] DELETE /v1/environments/bridge/${n}`);
    let s = await T(async (g, o) => import_chunk_kcy9vg4b.LS.delete(`${e.baseUrl}/v1/environments/bridge/${n}`, { headers: await v(g, o), timeout: 1e4, validateStatus: (c) => c < 500 }), "Deregister", "pass_through");
    x(s.status, s.data, "Deregister"), r(`[bridge:api] DELETE /v1/environments/bridge/${n} -> ${s.status}`);
  }, async markEnvironmentOffline(n, s) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId");
    let g = `/v1/environments/bridge/${n}/offline`;
    r(`[bridge:api] POST ${g}`);
    let o = await import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}${g}`, void 0, { headers: await v(s), timeout: 5e3, validateStatus: (c) => c < 500 });
    x(o.status, o.data, "MarkOffline"), r(`[bridge:api] POST ${g} -> ${o.status}`);
  }, async archiveSession(n) {
    (0, import_chunk_t39bs2jr.Mw)(n, "sessionId");
    let s = `/v1/code/sessions/${(0, import_chunk_t39bs2jr.Pu)(n)}/archive`, g = e.useCcrV2SessionCrud?.() ? [s] : [`/v1/sessions/${(0, import_chunk_t39bs2jr.mm)(n)}/archive`, s];
    for (let o of g) {
      r(`[bridge:api] POST ${o}`);
      let c = await T(async (_, h) => import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}${o}`, {}, { headers: await v(_, h), timeout: 1e4, validateStatus: (y) => y < 500 }), "ArchiveSession", "pass_through");
      if (o !== s && (0, import_chunk_gnb95k99.Rwe)(c)) continue;
      if (c.status === 409) {
        r(`[bridge:api] POST ${o} -> 409 (already archived)`);
        return;
      }
      x(c.status, c.data, "ArchiveSession"), r(`[bridge:api] POST ${o} -> ${c.status}`);
      return;
    }
  }, async reconnectSession(n, s, g) {
    return (0, import_chunk_cqa9hrgx.qo)("bridge_session_reconnect", async () => {
      (0, import_chunk_t39bs2jr.Mw)(n, "environmentId"), (0, import_chunk_t39bs2jr.Mw)(s, "sessionId"), r(`[bridge:api] POST /v1/environments/${n}/bridge/reconnect session_id=${s}`);
      let o = await T(async (c, _) => import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}/v1/environments/${n}/bridge/reconnect`, { session_id: s }, { headers: await v(c, _), timeout: 1e4, signal: g, validateStatus: (h) => h < 500 }), "ReconnectSession", "enroll_and_retry");
      x(o.status, o.data, "ReconnectSession"), r(`[bridge:api] POST .../bridge/reconnect -> ${o.status}`);
    }, C);
  }, async heartbeatWork(n, s, g) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId"), (0, import_chunk_t39bs2jr.Mw)(s, "workId"), r(`[bridge:api] POST .../work/${s}/heartbeat`);
    let o = await import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}/v1/environments/${n}/work/${s}/heartbeat`, {}, { headers: await v(g), timeout: 1e4, validateStatus: (c) => c < 500 });
    return x(o.status, o.data, "Heartbeat"), r(`[bridge:api] POST .../work/${s}/heartbeat -> ${o.status} lease_extended=${o.data.lease_extended} state=${o.data.state}`), o.data;
  } };
  function k(n) {
    return n instanceof Error && "status" in n && typeof n.status === "number" ? `http_${n.status}` : C(n);
  }
  R.refuseToolHost = async (n, s, g, o) => {
    let c = `[bridge:api] POST /v1/code/sessions/${(0, import_chunk_qesvcmqe.Rme)(n)}/tool_hosts/refuse workId=${(0, import_chunk_qesvcmqe.Rme)(s)} code=${g}`;
    try {
      if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || (0, import_chunk_k449cc64.wt)() || !(0, import_chunk_2zeyvjwb.hk)("allow_remote_control")) {
        r(`${c} not sent`);
        return;
      }
      await (0, import_chunk_cqa9hrgx.qo)("bridge_tool_host_refuse", async () => {
        (0, import_chunk_t39bs2jr.Mw)(n, "sessionId"), r(c);
        let _ = await import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}/v1/code/sessions/${(0, import_chunk_t39bs2jr.Pu)(n)}/tool_hosts/refuse`, { work_id: s, code: g }, { headers: { ...await v(b()), "anthropic-beta": import_chunk_xfj2cwfv.c6n.header, "anthropic-client-feature": "ccr" }, timeout: 5e3, signal: o, maxRedirects: 0, validateStatus: (h) => h < 500 });
        x(_.status, _.data, "RefuseToolHost"), r(`${c} -> ${_.status}`);
      }, k);
    } catch (_) {
      r(`${c} failed (${k(_)}); not retried`);
    }
  };
  async function A(n) {
    let { "anthropic-beta": s, ...g } = await v(n);
    return { ...g, "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)(), "anthropic-client-version": e.runnerVersion };
  }
  R.sessionsWatch = { async mintResumeToken(n, s) {
    let { status: g, data: o, headers: c } = await import_chunk_kcy9vg4b.LS.get(`${e.baseUrl}/v1/code/sessions?limit=1`, { headers: await A(n), timeout: 1e4, signal: s, maxRedirects: 0, validateStatus: () => true });
    r(`[bridge:api] GET /v1/code/sessions?limit=1 -> ${g}`);
    let _ = o !== null && typeof o === "object" && "resume_token" in o ? o.resume_token : void 0;
    return { status: g, retryAfterMs: (0, import_chunk_865at33z.qp)(c["retry-after"]), ...typeof _ === "string" && { resumeToken: _ } };
  }, async open(n, s, g) {
    let { status: o, data: c, headers: _ } = await import_chunk_kcy9vg4b.LS.get(`${e.baseUrl}/v1/code/sessions/watch?include_trigger_sessions=true&exclude_tags=-`, { headers: { ...await A(n), Accept: "text/event-stream", "Last-Event-ID": s }, responseType: "stream", timeout: 0, signal: g, maxRedirects: 0, validateStatus: () => true });
    r(`[bridge:api] GET /v1/code/sessions/watch -> ${o}`);
    let h = _["content-type"];
    if (o === 200 && typeof h === "string" && h.includes("text/event-stream")) return { status: o, body: c };
    return c.destroy(), { status: o, retryAfterMs: (0, import_chunk_865at33z.qp)(_["retry-after"]) };
  } };
  async function P(n, s) {
    return { ...await v(n, s), "anthropic-beta": import_chunk_xfj2cwfv.c6n.header, "anthropic-client-feature": "ccr" };
  }
  return R.hostRequests = { async poll(n, s, g) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId");
    let o = `/v1/code/environments/${n}/host_requests`, c = await T(async (E, D) => import_chunk_kcy9vg4b.LS.get(`${e.baseUrl}${o}`, { headers: await P(E, D), params: { wait_ms: s }, timeout: s + 1e4, signal: g, maxRedirects: 0, validateStatus: (B) => B < 500 }), "PollHostRequests", "enroll_and_retry");
    if (c.status >= 400) r(`[bridge:api] GET .../host_requests?wait_ms=${s} -> ${c.status} ${H(c.data)}`);
    x(c.status, c.data, "PollHostRequests", c.headers);
    let _ = c.data, h = _ !== null && typeof _ === "object" && "requests" in _ ? _.requests : void 0, y = Array.isArray(h) ? h.filter((E) => E !== null && typeof E === "object") : [];
    return r(`[bridge:api] GET .../host_requests?wait_ms=${s} -> ${c.status} requests=${y.length}`), y;
  }, async answer(n, s, g, o) {
    (0, import_chunk_t39bs2jr.Mw)(n, "environmentId"), (0, import_chunk_t39bs2jr.Mw)(s, "requestId");
    let c = `[bridge:api] POST .../host_requests/${(0, import_chunk_qesvcmqe.Rme)(s)}/result ${"refusal" in g ? `refusal=${g.refusal}` : `entries=${g.entries.length}`}`, _ = await T(async (E, D) => import_chunk_kcy9vg4b.LS.post(`${e.baseUrl}/v1/code/environments/${n}/host_requests/${s}/result`, g, { headers: await P(E, D), timeout: 1e4, signal: o, maxRedirects: 0, validateStatus: (B) => B < 500 }), "AnswerHostRequest", "enroll_and_retry");
    if (_.status >= 400) r(`${c} -> ${_.status} ${H(_.data)}`);
    x(_.status, _.data, "AnswerHostRequest", _.headers);
    let h = _.data, y = h !== null && typeof h === "object" && "delivered" in h && h.delivered === true;
    return r(`${c} -> ${_.status} delivered=${y}`), y;
  } }, R;
}
function x(e, r, p, w) {
  if (e === 200 || e === 204) return;
  let v = (0, import_chunk_qesvcmqe.E1)(r), b = N(r);
  switch (e) {
    case 401:
      throw new UL(`${p}: Authentication failed (401)${v ? `: ${v}` : ""}. ${import_chunk_sr33d2zd.lGe}`, 401, b);
    case 403:
      if (QIt(b)) throw new UL("Remote Control session expired.", 403, b);
      throw new UL(`${p}: Access denied (403)${v ? `: ${v}` : ""}. Check your organization permissions.`, 403, b, (0, import_chunk_qesvcmqe.k1)(r)?.includes("external_poll_sessions"));
    case 404:
      throw new UL(v ?? `${p}: Not found (404). Remote Control may not be available for this organization.`, 404, b);
    case 410:
      throw new UL(v ?? "Remote Control session expired.", 410, b ?? "environment_expired");
    case 429: {
      let T = (0, import_chunk_865at33z.qp)(w?.["retry-after"]);
      throw Object.assign(Error(`${p}: Rate limited (429). Polling too frequently.`), T !== void 0 ? { status: e, retryAfterMs: T } : { status: e });
    }
    default:
      throw Object.assign(Error(`${p}: Failed with status ${e}${v ? `: ${v}` : ""}`), { status: e });
  }
}
function QIt(e) {
  if (!e) return false;
  return e.includes("expired") || e.includes("lifetime");
}
function _zs(e) {
  return e.suppressible;
}
function C(e) {
  if (e instanceof UL) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === import_chunk_sr33d2zd.lGe) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}
function H(e) {
  let r = (0, import_chunk_stxr0bw4.alt)(e)?.resource;
  if (r) return `resource=${r}`;
  let p = N(e);
  return p === void 0 ? "type=<none>" : `type=${(0, import_chunk_qesvcmqe.qWn)(p)}`;
}
function N(e) {
  if (e && typeof e === "object") {
    if ("error" in e && e.error && typeof e.error === "object" && "type" in e.error && typeof e.error.type === "string") return e.error.type;
  }
  return;
}
function o8t(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0;
}
function Ckn(e) {
  let r = o8t(e);
  if (r !== void 0) return `status ${r}`;
  return e instanceof Error ? e.name : "unknown";
}
function u$e(e, r, p) {
  (async () => {
    try {
      await p();
    } catch (w) {
      (0, import_chunk_w578pjby.t)(`${e} ${r} failed (${Ckn(w)})`);
    }
  })();
}
var Ujr = 3, tba = 20, F = 6e4, U = 36e5, W = 9e5, G = 864e5, L = 0.25, X = 36e5;
function wWo(e, r = Date.now(), p = Math.random) {
  if (typeof e !== "number" || !Number.isFinite(e) || e * 1e3 < X) return;
  let w = e * 1e3, b = Math.min(Math.max(w / 10, W), G) * (1 + L * p());
  return r + w - b;
}
var nba = 3e5, rba = 36e5, oba = 3, Bjr = 5;
async function yzs(e, r, { retryWithoutId: p }) {
  try {
    return await e(r);
  } catch (w) {
    if (!p || !(0, import_chunk_7d2qr9z5.akt)() || r === void 0 || !(w instanceof UL) || !(w.status === 404 || w.status === 410 || QIt(w.errorType))) throw w;
    return (0, import_chunk_w578pjby.t)(`[bridge:init] Registration under ${r} answered ${w.status}; registering with no environment id`, { level: "warn" }), e(void 0);
  }
}
function Szs(e, r) {
  let p = Math.round(r);
  if (e) (0, import_chunk_cqa9hrgx.u)("bridge_environment_reuse", { age_ms: p });
  else (0, import_chunk_cqa9hrgx.l)("bridge_environment_reuse", "declined", { age_ms: p });
}
async function kWo({ api: e, config: r, environmentId: p, activeSessions: w, attempt: v, trigger: b, signal: T }) {
  if (O(b)) (0, import_chunk_w578pjby.t)(`[bridge:poll] What this environment advertises changed (${b}); re-registering environment ${p} (attempt ${v})`);
  else if (b === "proactive") (0, import_chunk_w578pjby.t)(`[bridge:poll] Environment secret expires soon; re-registering environment ${p} to renew it (attempt ${v})`, { level: "info" });
  else (0, import_chunk_w578pjby.t)(`[bridge:poll] Poll returned ${b === "poll_401" ? 401 : 404}; re-registering environment ${p} (attempt ${v}/${Ujr})`, { level: "warn" });
  let R, k, A;
  try {
    let { hostProfile: s, ...g } = r, o = await (0, import_chunk_06wfh5v6.pwa)(s);
    r.hostProfile = o;
    let c = r.getToolHostAdvert?.();
    k = c;
    let _ = r.getDirectoryBrowseAdvert?.();
    A = _, R = await e.registerBridgeEnvironment({ ...g, ...o && { hostProfile: o }, ...c && { getToolHostAdvert: () => c }, ...r.getDirectoryBrowseAdvert && { getDirectoryBrowseAdvert: () => _ }, reuseEnvironmentId: p }, T);
  } catch (s) {
    let g = s instanceof Error && s.message === import_chunk_sr33d2zd.lGe ? 401 : j(s), o = g !== void 0;
    if ((0, import_chunk_w578pjby.t)(`[bridge:poll] Re-registration of ${p} ${o ? "rejected" : "failed transiently"}: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: o ? "error" : "warn" }), !o && k !== void 0 && k.kind !== "unknown" && !M(k, r.registeredToolHostAdvert)) r.registeredToolHostAdvert = "unconfirmed";
    if (!o && A !== void 0 && A !== r.registeredDirectoryBrowseAdvert && (A || r.registeredDirectoryBrowseAdvert !== void 0)) r.registeredDirectoryBrowseAdvert = "unconfirmed";
    if (T.aborted) return { outcome: "transient" };
    if ((0, import_chunk_y53wbr8a.a)("tengu_bridge_env_reregister", { attempt: v, outcome: o ? (0, import_chunk_78g0060s.S)("register_rejected") : (0, import_chunk_78g0060s.S)("register_transient"), trigger: (0, import_chunk_78g0060s.f)(b) }), g !== void 0) {
      if (O(b)) (0, import_chunk_cqa9hrgx.l)("bridge_env_reregister", "advert_register_rejected");
      else if (b === "proactive") (0, import_chunk_cqa9hrgx.l)("bridge_env_reregister", "proactive_register_rejected");
      else (0, import_chunk_cqa9hrgx.m)("bridge_env_reregister", "register_rejected");
      return { outcome: "fatal", reason: "register_rejected", status: g, message: (0, import_chunk_jv7av99m.d)(s) };
    }
    return { outcome: "transient", retryAfterMs: kXn(s) };
  }
  if (R.environment_id !== p) {
    if ((0, import_chunk_w578pjby.t)(`[bridge:poll] Re-registration returned ${R.environment_id}, not ${p}; not adopting it`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_bridge_env_reregister", { attempt: v, outcome: (0, import_chunk_78g0060s.S)("replaced"), trigger: (0, import_chunk_78g0060s.f)(b) }), O(b)) (0, import_chunk_cqa9hrgx.l)("bridge_env_reregister", "advert_replaced");
    else if (b === "proactive") (0, import_chunk_cqa9hrgx.l)("bridge_env_reregister", "proactive_replaced");
    else (0, import_chunk_cqa9hrgx.m)("bridge_env_reregister", "replaced");
    return await e.deregisterEnvironment(R.environment_id).catch((s) => (0, import_chunk_w578pjby.t)(`[bridge:poll] Failed to delete replacement environment ${R.environment_id}: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: "warn" })), { outcome: "fatal", reason: "replaced" };
  }
  EWo(r, k, true), vWo(r, A, true);
  let P = [...w.keys()];
  if ((0, import_chunk_y53wbr8a.a)("tengu_bridge_env_reregister", { attempt: v, outcome: (0, import_chunk_78g0060s.S)("reregistered"), active_sessions: P.length, trigger: (0, import_chunk_78g0060s.f)(b) }), (0, import_chunk_42tcgre6.q)("info", "bridge_env_reregistered", { attempt: v, active_sessions: P.length, trigger: b }), b === "proactive") return (0, import_chunk_w578pjby.t)(`[bridge:poll] Environment ${p} re-registered in place; secret renewed`, { level: "info" }), { outcome: "reregistered", environmentSecret: R.environment_secret, ...R.environment_secret_expires_in !== void 0 && { environmentSecretExpiresIn: R.environment_secret_expires_in }, pendingRequeues: [] };
  (0, import_chunk_w578pjby.t)(`[bridge:poll] Environment ${p} re-registered in place; re-queuing ${P.length} session(s)`, { level: "info" });
  let n = [];
  for (let s of P) {
    if (T.aborted) break;
    if (!w.has(s)) continue;
    if (await Wjr(e, p, s, T) !== "done") n.push(s);
  }
  return { outcome: "reregistered", environmentSecret: R.environment_secret, ...R.environment_secret_expires_in !== void 0 && { environmentSecretExpiresIn: R.environment_secret_expires_in }, pendingRequeues: n };
}
async function sba({ api: e, config: r, environmentId: p, activeSessions: w, pacing: v, signal: b }) {
  let T, R = "tool_host_advert_changed";
  try {
    let A = r.getToolHostAdvert?.(), P = A !== void 0 && A.kind !== "unknown" && !M(A, r.registeredToolHostAdvert), n = r.getDirectoryBrowseAdvert?.(), s = n !== void 0 && n !== r.registeredDirectoryBrowseAdvert && (n || r.registeredDirectoryBrowseAdvert !== void 0);
    if (!P && !s) {
      v.failures = 0;
      return;
    }
    let g = v.notBefore - Date.now();
    if (g > 0 && g <= U) return;
    R = P ? "tool_host_advert_changed" : "dir_browse_advert_changed", T = await kWo({ api: e, config: r, environmentId: p, activeSessions: w, attempt: v.failures + 1, trigger: R, signal: b });
  } catch (A) {
    if (!b.aborted) (0, import_chunk_k449cc64.i)(A);
  }
  let k = T?.outcome === "reregistered" ? T : void 0;
  return v.failures = k ? 0 : v.failures + 1, v.notBefore = Date.now() + Math.min(F * 2 ** v.failures, U), k ? { registration: k, trigger: R } : void 0;
}
function EWo(e, r, p) {
  if (r === void 0 || r.kind === "unknown" && p) return;
  let w = e.registeredToolHostAdvert, v = r.kind === "advertise" ? { kind: "advertise", advert: r.advert } : { kind: "withdraw" };
  if (e.registeredToolHostAdvert = v, !M(v, w ?? { kind: "withdraw" })) (0, import_chunk_y53wbr8a.a)("tengu_bridge_tool_host_advert", { advertised: v.kind === "advertise" });
}
function vWo(e, r, p) {
  if (r !== void 0) e.registeredDirectoryBrowseAdvert = r;
  else if (!e.getDirectoryBrowseAdvert) return;
  else if (!p) e.registeredDirectoryBrowseAdvert = false;
  else if (e.registeredDirectoryBrowseAdvert === void 0) e.registeredDirectoryBrowseAdvert = "unconfirmed";
}
function O(e) {
  return e === "tool_host_advert_changed" || e === "dir_browse_advert_changed";
}
async function Wjr(e, r, p, w) {
  try {
    return await e.reconnectSession(r, p, w), "done";
  } catch (v) {
    let b = Akn(v);
    if ((0, import_chunk_w578pjby.t)(`[bridge:poll] reconnectSession(${p}) after re-registration ${b ? "rejected" : "failed transiently"}: ${(0, import_chunk_jv7av99m.d)(v)}`, { level: "warn" }), b) return "done";
    return w.aborted ? "aborted" : "retry";
  }
}
function M(e, r) {
  if (r === void 0 || r === "unconfirmed") return false;
  return e.kind === "advertise" && r.kind === "advertise" ? (0, import_chunk_z688m88d.Zt)(e.advert, r.advert) : e.kind === r.kind;
}
function kXn(e) {
  return e && typeof e === "object" && "retryAfterMs" in e && typeof e.retryAfterMs === "number" ? e.retryAfterMs : void 0;
}
function Akn(e) {
  return j(e) !== void 0;
}
function j(e) {
  if (e instanceof UL) return e.status;
  if (e && typeof e === "object" && "status" in e && typeof e.status === "number" && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429) return e.status;
  return;
}
