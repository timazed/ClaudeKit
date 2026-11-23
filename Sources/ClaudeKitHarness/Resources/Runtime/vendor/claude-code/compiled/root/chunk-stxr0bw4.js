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
var chunk_stxr0bw4_exports = {};
__export(chunk_stxr0bw4_exports, {
  Aks: () => Aks,
  Cks: () => Cks,
  E9: () => E9,
  Eql: () => Eql,
  Jcn: () => Jcn,
  KWn: () => KWn,
  Kle: () => Kle,
  Tks: () => Tks,
  VTr: () => VTr,
  Xcn: () => Xcn,
  alt: () => alt,
  ilt: () => ilt,
  kql: () => kql,
  mEo: () => mEo,
  oxe: () => oxe,
  red: () => red,
  rxe: () => rxe,
  zTr: () => zTr
});
module.exports = __toCommonJS(chunk_stxr0bw4_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_gnb95k99 = require("/$bunfs/root/chunk-gnb95k99.js");
var import_chunk_b3pvef3t = require("/$bunfs/root/chunk-b3pvef3t.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var D = "2023-06-01";
function KWn(e) {
  return { Authorization: `Bearer ${e}`, "Content-Type": "application/json", "anthropic-version": D, "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)(), "User-Agent": (0, import_chunk_tb84sczh.Ri)() };
}
function Xcn(e) {
  return e !== null && typeof e === "object" && "terminal" in e && e.terminal === true;
}
function B(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || e.error === null || typeof e.error !== "object") return false;
  let n = e.error, r = "type" in n ? n.type : void 0, p = "resource_type" in n ? n.resource_type : void 0, o = "reason" in n ? n.reason : void 0;
  return r === "not_found_error" && p === "session_grouping" || o === "public_grouping_hosted_only" || o === "feature_disabled";
}
function U(e) {
  if (e === 401) return "oauth_rejected";
  if (e === 408 || e === 429 || e >= 500) return "transient";
  return "rejected";
}
async function zTr(e, n, r, p, o, c, l, h, m, u, i) {
  let b = `${e}/v1/code/sessions`, a = { cwd: l ?? (0, import_chunk_18rsj2ts.pe)(), ...h && { model: h } };
  if (c && "gitRepoUrl" in c) {
    let { buildGitSessionContext: g } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p63239vn.js"))), { sources: y, outcomes: v, report: w } = await g(c.gitRepoUrl, c.branch, c.defaultBranch);
    if (w.branchDropped && w.warnMessage) {
      let E = `${w.branchDropped}:${c.gitRepoUrl}:${c.branch}`;
      if (!u || u.lastKey !== E) {
        if (u) u.lastKey = E;
        (0, import_chunk_w578pjby.t)(`[code-session] ${w.warnMessage}`);
      }
    } else if (u) u.lastKey = null;
    if (y.length > 0 || v.length > 0) a.sources = y, a.outcomes = v, a.reuse_outcome_branches = true;
  }
  let s;
  try {
    s = await import_chunk_kcy9vg4b.LS.post(b, { title: r, bridge: {}, ...o?.length && { tags: o }, ...m && { session_grouping_id: m }, config: a }, { headers: KWn(n), timeout: p, validateStatus: (g) => g < 500 });
  } catch (g) {
    return (0, import_chunk_w578pjby.t)(`[code-session] Session create request failed: ${(0, import_chunk_jv7av99m.d)(g)}`), null;
  }
  if (s.status !== 200 && s.status !== 201) {
    let g = (0, import_chunk_qesvcmqe.k1)(s.data);
    (0, import_chunk_w578pjby.t)(`[code-session] Session create failed ${s.status}${g ? `: ${g}` : ""}`);
    let y = (0, import_chunk_qesvcmqe.E1)(s.data);
    if (s.status === 401) {
      if ((0, import_chunk_702cfzzh.JN)(s.config)) return null;
      i?.();
    }
    if (s.status >= 400 && s.status < 500 && B(s.data)) return { terminal: true, reason: "grouping_rejected", status: s.status, detail: y };
    switch (U(s.status)) {
      case "oauth_rejected":
        return { terminal: false, reason: "oauth_rejected" };
      case "transient":
        return null;
      case "rejected":
        return { terminal: true, reason: "request_rejected", status: s.status, detail: y };
    }
  }
  let f = s.data;
  if (!f || typeof f !== "object" || !("session" in f) || !f.session || typeof f.session !== "object" || !("id" in f.session) || typeof f.session.id !== "string" || !f.session.id.startsWith("cse_") || !(0, import_chunk_t39bs2jr.P0r)(f.session.id)) return (0, import_chunk_w578pjby.t)(`[code-session] No usable session.id (cse_*) in response: ${(0, import_chunk_w578pjby._)(f).slice(0, 200)}`), { terminal: true, reason: "malformed_response", status: s.status, detail: void 0 };
  return f.session.id;
}
function rxe(e) {
  return e !== null && "terminal" in e && e.terminal === true;
}
function E9(e) {
  return typeof e === "object" && e !== null && "terminal" in e && e.terminal === false;
}
function oxe(e) {
  let n = S(e);
  if (n !== void 0 && "resource" in n) {
    let r = n.resource;
    if (r === "untrusted_device" || r === "session_stale_relogin") return r;
  }
  return;
}
function red(e) {
  let n = S(e);
  return n !== void 0 && "resource" in n && n.resource === "untrusted_device" && "sub_reason" in n && n.sub_reason === "bound_unattested" ? "bound_unattested" : void 0;
}
function Kle(e) {
  if (oxe(e) === "untrusted_device") {
    let n = S(e), r = n !== void 0 && "sub_reason" in n ? n.sub_reason : void 0;
    if (r === void 0 || r === null || r === "") return { kind: "token_refused" };
    if (typeof r !== "string") return { kind: "unrecognized", subReason: `(${typeof r}, not a string)` };
    switch (r) {
      case "bound_unattested":
        return { kind: "token_refused" };
      case "served_call_unsigned":
        return { kind: "signature_wanted", subReason: r };
      default:
        if ((0, import_chunk_b3pvef3t.ELe)(r)) return { kind: "unrecognized", subReason: r };
        return (0, import_chunk_w578pjby.t)(`[code-session] a 403's sub_reason is too long or not snake_case, so a placeholder is passed on. As sent (${r.length} characters; cleaned, first 64): ${(0, import_chunk_tp3c5q2s.Ft)(r, 64)}`), { kind: "unrecognized", subReason: "(string, too long or not snake_case)" };
    }
  }
  return;
}
var N = "trusted_device_required";
function Jcn(e) {
  return e.kind === "token_refused" || e.kind === "unrecognized" && e.subReason === N;
}
function ilt(e) {
  return e.kind !== "signature_wanted";
}
var mEo = { kind: "signature_wanted", subReason: "served_call_unsigned" };
function alt(e) {
  let n = S(e);
  if (n === void 0) return;
  let r = { ...n };
  return { reason: x(r.reason), resource: x(r.resource), subReason: x(r.sub_reason) };
}
function x(e) {
  if (e === void 0 || e === null || e === "") return "";
  return typeof e === "string" && (0, import_chunk_b3pvef3t.ELe)(e) ? e : void 0;
}
function S(e) {
  return e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object" ? e.error : void 0;
}
async function Tks(e, n, r, p, o, c, l) {
  if (!C(e, "/bridge")) return { terminal: true, reason: "invalid_session_id" };
  let h = `${n}/v1/code/sessions/${e}/bridge`, m = KWn(r);
  if (o) m["X-Trusted-Device-Token"] = o;
  let u;
  try {
    u = await import_chunk_kcy9vg4b.LS.post(h, l === void 0 ? {} : { expected_epoch: l.expectedEpoch }, { headers: m, timeout: p, validateStatus: (a) => a < 500 });
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`[code-session] /bridge request failed: ${(0, import_chunk_jv7av99m.d)(a)}`), null;
  }
  if (u.status !== 200) {
    let a = (0, import_chunk_qesvcmqe.k1)(u.data);
    if ((0, import_chunk_w578pjby.t)(`[code-session] /bridge failed ${u.status}${a ? `: ${a}` : ""}`), u.status === 401) {
      if ((0, import_chunk_702cfzzh.JN)(u.config)) return null;
      c?.();
    }
    if (l !== void 0 && u.status === 409) {
      let f = S(u.data), g = l.expectedEpoch, y = [k(f !== void 0 && "expected_epoch" in f ? f.expected_epoch : void 0), k(f !== void 0 && "actual_epoch" in f ? f.actual_epoch : void 0)];
      l.onRefused(y.includes(g) ? y.find((v) => v !== void 0 && v > g) : void 0);
    }
    let s;
    if (u.status === 403) {
      let f = oxe(u.data);
      if (f === "untrusted_device") {
        let g = Kle(u.data);
        return { terminal: true, reason: f, ...g && { refusal: g } };
      }
      if (f) return { terminal: true, reason: f };
      if (alt(u.data)?.resource === "session_security_tier_below_org_policy") return { terminal: true, reason: "session_security_tier_below_org_policy", status: 403 };
      s = (0, import_chunk_702cfzzh.zke)((g) => u.headers?.[g]), (0, import_chunk_w578pjby.t)(`[code-session] /bridge 403 source=${s}`);
    }
    switch (U(u.status)) {
      case "oauth_rejected":
        return { terminal: false, reason: "oauth_rejected" };
      case "transient":
        return null;
      case "rejected":
        return { terminal: true, reason: "request_rejected", status: u.status, ...alt(u.data)?.reason === "session_not_bridge" && { sessionNotBridge: true }, ...s && { source: s } };
    }
  }
  let i = u.data;
  if (i === null || typeof i !== "object" || !("worker_jwt" in i) || typeof i.worker_jwt !== "string" || !("expires_in" in i) || typeof i.expires_in !== "number" || !("api_base_url" in i) || typeof i.api_base_url !== "string" || !("worker_epoch" in i)) return (0, import_chunk_w578pjby.t)(`[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${(0, import_chunk_w578pjby._)(i).slice(0, 200)}`), { terminal: true, reason: "malformed_response", status: 200 };
  let b = k(i.worker_epoch);
  if (b === void 0) return (0, import_chunk_w578pjby.t)(`[code-session] /bridge worker_epoch invalid: ${(0, import_chunk_w578pjby._)(i.worker_epoch)}`), { terminal: true, reason: "malformed_response", status: 200 };
  return { worker_jwt: i.worker_jwt, api_base_url: i.api_base_url, expires_in: i.expires_in, worker_epoch: b, mcp_config: F(i), ...{} };
}
function C(e, n) {
  try {
    return (0, import_chunk_t39bs2jr.Mw)(e, "sessionId"), true;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`[code-session] ${n}: ${(0, import_chunk_jv7av99m.d)(r)}`), false;
  }
}
function R(e, n, r, p, o, c = "") {
  let l = o.trustedDeviceToken ? { "X-Trusted-Device-Token": o.trustedDeviceToken } : void 0;
  if (o.useV2) {
    let m = (0, import_chunk_t39bs2jr.Pu)(p);
    return { url: `${n}/v1/code/sessions/${m}${c}`, headers: { ...KWn(r), ...l }, id: m };
  }
  if (!o.orgUUID) return (0, import_chunk_w578pjby.t)(`[code-session] ${e} ${p}: v1 compat path needs an org UUID`), null;
  let h = (0, import_chunk_t39bs2jr.mm)(p);
  return { url: `${n}/v1/sessions/${h}${c}`, headers: { ...KWn(r), "anthropic-beta": "ccr-byoc-2025-07-29", "x-organization-uuid": o.orgUUID, ...l }, id: h };
}
function j(e, n) {
  return Math.max(1, e - (Date.now() - n));
}
async function kql(e, n, r, p, o) {
  if (!C(r, "Get")) return "invalid";
  let c = R("Get", e, n, r, o);
  if (!c) return "invalid";
  let { url: l, headers: h, id: m } = c, u = Date.now();
  try {
    let i = await import_chunk_kcy9vg4b.LS.get(l, { headers: h, timeout: p, validateStatus: (s) => s < 500 });
    if (!o.useV2 && (0, import_chunk_gnb95k99.Rwe)(i)) return (0, import_chunk_w578pjby.t)(`[code-session] Get ${m}: /v1/sessions is retired, repeating on /v1/code/sessions`), await kql(e, n, r, j(p, u), { ...o, useV2: true });
    if (i.status !== 200) {
      let s = (0, import_chunk_qesvcmqe.k1)(i.data);
      return (0, import_chunk_w578pjby.t)(`[code-session] Get ${m} failed ${i.status}${s ? `: ${s}` : ""}`), i.status;
    }
    if (!o.useV2) {
      let s = i.data;
      return { ...s, status: s?.status ?? s?.session_status, id: typeof s?.id === "string" ? s.id : m };
    }
    let b = i.data, a = b?.response_shape ?? b?.session;
    if (a && typeof a.id === "string") return { ...a, updated_at: "last_event_at" in a && typeof a.last_event_at === "string" ? a.last_event_at : void 0 };
    return (0, import_chunk_w578pjby.t)(`[code-session] Get ${m}: no session.id in 200 response`), i.status;
  } catch (i) {
    return (0, import_chunk_w578pjby.t)(`[code-session] Get ${m} failed: ${(0, import_chunk_jv7av99m.d)(i)}`), import_chunk_3jjr3wje.bn.isAxiosError(i) && i.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
async function Cks(e, n, r, p, o) {
  let c = C(r, "GetShare") ? R("GetShare", e, n, r, { useV2: true, trustedDeviceToken: o }, "/share") : null;
  if (!c) return { failure: "unsafe_id" };
  try {
    let l = await import_chunk_kcy9vg4b.LS.get(c.url, { headers: c.headers, timeout: p, validateStatus: () => true });
    if (l.status === 200) return { body: l.data };
    if ((0, import_chunk_w578pjby.t)(`[code-session] GetShare ${c.id}: ${l.status}`), l.status === 401) return { failure: "unauthorized" };
    return { failure: l.status >= 500 ? "server_error" : "client_error" };
  } catch (l) {
    return (0, import_chunk_w578pjby.t)(`[code-session] GetShare ${c.id} failed: ${(0, import_chunk_jv7av99m.d)(l)}`), { failure: import_chunk_3jjr3wje.bn.isAxiosError(l) && l.code === "ECONNABORTED" ? "timeout" : "network" };
  }
}
async function Eql(e, n, r, p, o, c) {
  if (!C(r, "Update")) return "invalid";
  let l = R("Update", e, n, r, c);
  if (!l) return "invalid";
  let { url: h, headers: m, id: u } = l, i = { headers: m, timeout: o, validateStatus: () => true }, b = Date.now();
  try {
    let a = c.useV2 ? await import_chunk_kcy9vg4b.LS.put(h, p, i) : await import_chunk_kcy9vg4b.LS.patch(h, p, i);
    if (!c.useV2 && (0, import_chunk_gnb95k99.Rwe)(a)) return (0, import_chunk_w578pjby.t)(`[code-session] Update ${u}: /v1/sessions is retired, repeating on /v1/code/sessions`), await Eql(e, n, r, p, j(o, b), { ...c, useV2: true });
    if (a.status !== 200) {
      let s = (0, import_chunk_qesvcmqe.k1)(a.data);
      (0, import_chunk_w578pjby.t)(`[code-session] Update ${u} failed ${a.status}${s ? `: ${s}` : ""}`);
    }
    return a.status;
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`[code-session] Update ${u} failed: ${(0, import_chunk_jv7av99m.d)(a)}`), import_chunk_3jjr3wje.bn.isAxiosError(a) && a.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
async function VTr(e, n, r, p, o) {
  return A("Archive", "/archive", e, n, r, p, o, "untrusted_device");
}
async function Aks(e, n, r, p, o) {
  return A("Unarchive", "/unarchive", e, n, r, p, o, "elevated_auth");
}
async function A(e, n, r, p, o, c, l, h) {
  if (!C(o, e)) return "invalid";
  let m = R(e, r, p, o, l, n);
  if (!m) return "invalid";
  let { url: u, headers: i, id: b } = m, a = Date.now();
  try {
    let s = await import_chunk_kcy9vg4b.LS.post(u, {}, { headers: i, timeout: c, validateStatus: () => true }), f = !l.useV2 && (0, import_chunk_gnb95k99.Rwe)(s) ? R(e, r, p, o, { ...l, useV2: true }, n) : null;
    if (f) (0, import_chunk_w578pjby.t)(`[code-session] ${e} ${b}: /v1/sessions is retired, repeating on /v1/code/sessions`), s = await import_chunk_kcy9vg4b.LS.post(f.url, {}, { headers: f.headers, timeout: j(c, a), validateStatus: () => true });
    if ((0, import_chunk_w578pjby.t)(`[code-session] ${e} ${b} status=${s.status}`), s.status === 403) {
      let g = Kle(s.data);
      if (g !== void 0) return h === "elevated_auth" && !ilt(g) ? "untrusted_device_no_enroll" : "untrusted_device";
      if (h === "elevated_auth" && oxe(s.data) === "session_stale_relogin") return "session_stale_relogin";
    }
    return s.status;
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`[code-session] ${e} ${b} failed: ${(0, import_chunk_jv7av99m.d)(s)}`), import_chunk_3jjr3wje.bn.isAxiosError(s) && s.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
function F(e) {
  if (!("mcp_config" in e)) return;
  let n = e.mcp_config;
  if (n !== null && typeof n === "object" && "content" in n && typeof n.content === "string" && n.content.length > 0) return { content: n.content };
  return;
}
function k(e) {
  let n = typeof e === "string" ? Number(e) : e;
  return typeof n === "number" && Number.isSafeInteger(n) ? n : void 0;
}
