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
var chunk_3fzdhydm_exports = {};
__export(chunk_3fzdhydm_exports, {
  $0a: () => $0a,
  D0a: () => D0a,
  F0a: () => F0a,
  IQs: () => IQs,
  L0a: () => L0a,
  N0a: () => N0a,
  Snr: () => Snr,
  cgt: () => cgt,
  d5r: () => d5r,
  dgt: () => dgt,
  mMe: () => mMe,
  vCn: () => vCn,
  ynr: () => ynr
});
module.exports = __toCommonJS(chunk_3fzdhydm_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k46cdxhb = require("/$bunfs/root/chunk-k46cdxhb.js");
var import_chunk_skrb3t34 = require("/$bunfs/root/chunk-skrb3t34.js");
var import_chunk_tgj1b0ts = require("/$bunfs/root/chunk-tgj1b0ts.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var f = ["agent_design_projects"];
function ynr(e) {
  return typeof e === "string" && f.includes(e);
}
function dgt(e) {
  switch (e) {
    case "agent_design_projects":
      return "Connect to Claude Design? Claude can read and edit your Design projects from this tool. Change anytime at claude.ai/design/settings or with /design revoke.";
  }
}
function D0a(e) {
  e.consentCache = null, e.consentFetch = null, e.consentCacheGeneration++;
}
async function c(e) {
  await (0, import_chunk_865at33z.od)({ credentials: e });
  let n;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) n = await (0, import_chunk_865at33z.pp)(e);
  else n = (0, import_chunk_865at33z.tr)();
  let o = n?.refreshToken && n.scopes?.includes("user:design:read") ? n.accessToken : null;
  if (!o) {
    let r = await (0, import_chunk_skrb3t34.MQs)(e);
    o = r.ok ? r.accessToken : n?.accessToken ?? null;
  }
  return { auth: "none", proxyOptionsFor: import_chunk_3jjr3wje.XX, ...o && { headers: { Authorization: `Bearer ${o}` } } };
}
async function y(e) {
  try {
    let n = await import_chunk_865at33z.zt.get("/v1/design/consent", { ...await c(e), validateStatus: (r) => r < 500 });
    if (!n.ok || n.status !== 200) return {};
    let o = {};
    for (let r of f) {
      let s = n.data?.[r];
      if (typeof s === "boolean") o[r] = s;
    }
    return o;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Design consent pre-flight GET failed (${(0, import_chunk_jv7av99m.d)(n)}); falling back to 403-seeded cache.`), {};
  }
}
function mMe(e, n, o) {
  if (n === "agent_design_projects" && o === false) (0, import_chunk_k46cdxhb.hUa)(e), (0, import_chunk_k46cdxhb.gUa)(e), (0, import_chunk_k46cdxhb.mUa)(e);
  e.consentCache = { ...e.consentCache ?? {}, [n]: o };
}
async function L0a(e) {
  return !!(await (0, import_chunk_skrb3t34.htt)(e))?.accessToken;
}
async function h(e) {
  if (!(0, import_chunk_zhr7rpv7.jn)()) return { ok: false, reason: "wrong_provider" };
  if ((0, import_chunk_xcgcdx61.Wy)()) return { ok: false, reason: "wrong_provider" };
  if ((0, import_chunk_k449cc64.wt)()) return { ok: false, reason: "essential_traffic_only" };
  await (0, import_chunk_865at33z.od)({ credentials: e });
  let n;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) n = await (0, import_chunk_865at33z.pp)(e);
  else n = (0, import_chunk_865at33z.tr)();
  if (n?.accessToken && n.refreshToken && n.scopes?.includes("user:design:read")) return { ok: true, accessToken: n.accessToken, bearer: "design_scoped_login" };
  let o = await (0, import_chunk_skrb3t34.MQs)(e);
  if (o.ok) return { ok: true, accessToken: o.accessToken, bearer: "design_credential" };
  if (n?.accessToken) return { ok: true, accessToken: n.accessToken, bearer: n.scopes?.includes("user:design:read") ? "design_scoped_login" : "login" };
  return { ok: false, reason: o.reason, detail: o.detail };
}
async function vCn(e) {
  return h(e);
}
async function Snr(e, n) {
  if (!(0, import_chunk_zhr7rpv7.jn)() || (0, import_chunk_k449cc64.wt)()) return null;
  if (e.consentCache === null) {
    let o = e.consentFetch ??= y(n), r = e.consentCacheGeneration, s = await o;
    if (e.consentCache === null && e.consentCacheGeneration === r) {
      e.consentCache = {};
      for (let a of f) {
        let i = s[a];
        if (typeof i === "boolean") mMe(e, a, i);
      }
    }
    if (e.consentFetch === o) e.consentFetch = null;
  }
  return e.consentCache?.agent_design_projects === false ? "agent_design_projects" : null;
}
async function IQs(e) {
  if (!(0, import_chunk_zhr7rpv7.jn)() || (0, import_chunk_k449cc64.wt)()) return false;
  let n;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) n = (await (0, import_chunk_865at33z.pp)(e))?.accessToken;
  else n = (0, import_chunk_865at33z.tr)()?.accessToken;
  if (n) return false;
  return !(await (0, import_chunk_skrb3t34.htt)(e))?.accessToken;
}
async function cgt(e, n, o) {
  try {
    let r = await import_chunk_865at33z.zt.post("/v1/design/consent", { consent: n }, { ...await c(o), validateStatus: (s) => s < 300 });
    if (!r.ok) throw new import_chunk_jv7av99m.A(`Couldn't record Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent POST blocked by policy gate");
  } catch (r) {
    throw (0, import_chunk_cqa9hrgx.m)("design_consent", "post_failed"), r;
  }
  mMe(e, n, true), (0, import_chunk_cqa9hrgx.u)("design_consent");
}
async function N0a(e, n, o) {
  try {
    let r = await import_chunk_865at33z.zt.delete("/v1/design/consent", { consent: n }, { ...await c(o), validateStatus: (s) => s < 300 });
    if (!r.ok) throw new import_chunk_jv7av99m.A(`Couldn't revoke Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent DELETE blocked by policy gate");
  } catch (r) {
    if ((0, import_chunk_3jjr3wje.fd)(r) && r.response?.status === 404) mMe(e, n, false);
    throw (0, import_chunk_cqa9hrgx.m)("design_consent", "delete_failed"), r;
  }
  mMe(e, n, false), (0, import_chunk_cqa9hrgx.u)("design_consent");
}
async function _(e) {
  try {
    let n = await import_chunk_865at33z.zt.get("/v1/design/grants", { ...await c(e), validateStatus: (s) => s < 500 });
    if (!n.ok || n.status !== 200) {
      let s = n.ok ? n.status : 0;
      return (0, import_chunk_cqa9hrgx.l)("design_project_grant", s === 404 ? "probe_404_old_server" : "probe_http_error", { status: s }), null;
    }
    let o = n.data?.grants;
    if (!Array.isArray(o)) return (0, import_chunk_cqa9hrgx.l)("design_project_grant", "probe_shape"), null;
    let r = /* @__PURE__ */ new Set();
    for (let s of o) {
      let a = s?.project_id;
      if (typeof a === "string" && a.length > 0) r.add(a);
    }
    return r;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Design project-grant probe failed (${(0, import_chunk_jv7av99m.d)(n)}); falling back to the per-batch plan flow.`), (0, import_chunk_cqa9hrgx.l)("design_project_grant", "probe_network"), null;
  }
}
async function d5r(e, n, o) {
  let r = e.grantsFetch ??= _(o);
  try {
    let s = await r;
    if (s === null) return "unavailable";
    return s.has(n) ? "granted" : "notGranted";
  } finally {
    if (e.grantsFetch === r) e.grantsFetch = null;
  }
}
async function F0a(e, n, o) {
  let r;
  try {
    let s = await import_chunk_865at33z.zt.post("/v1/design/grants", { project_id: n }, { ...await c(o), validateStatus: (a) => a < 300 || a === 404 });
    if (!s.ok) throw new import_chunk_jv7av99m.A(`Couldn't record the Design project write grant (${s.reason === "no-auth" ? s.detail : s.reason}).`, "design project grant POST blocked by policy gate");
    r = s.status;
  } catch (s) {
    throw (0, import_chunk_cqa9hrgx.m)("design_project_grant", "post_failed"), s;
  }
  if (r === 404) throw (0, import_chunk_k46cdxhb._Ua)(e, n), (0, import_chunk_cqa9hrgx.m)("design_project_grant", "mint_refused_404"), new import_chunk_jv7av99m.A("This project cannot hold a durable write grant for this account (it may be shared from another organization, or not viewable) \u2014 use finalize_plan with writes/deletes and pass the returned plan_token for writes to this project.", "design project grant mint refused for this project");
  (0, import_chunk_k46cdxhb.Wgt)(e, n), (0, import_chunk_cqa9hrgx.u)("design_project_grant");
}
function $0a(e, n, o) {
  let r = null;
  async function s() {
    let a;
    try {
      let i = await import_chunk_865at33z.zt.get("/v1/design/grants", { ...await c(o), validateStatus: (g) => g < 500 });
      if (!i.ok || i.status !== 200) return null;
      a = i.data?.grants;
    } catch (i) {
      return (0, import_chunk_w578pjby.t)(`Server-approval watcher poll failed (${(0, import_chunk_jv7av99m.d)(i)}); will poll again.`), null;
    }
    if (!Array.isArray(a)) return null;
    for (let i of a) {
      let g = i;
      if (g?.project_id !== n) continue;
      let p = typeof g.created_at === "string" ? Date.parse(g.created_at) : NaN;
      if (Number.isNaN(p)) return null;
      return { present: true, createdAtMs: p };
    }
    return { present: false };
  }
  return { async poll() {
    let a = await s();
    if (a === null) return false;
    if (r === null) return r = { createdAtMs: a.present ? a.createdAtMs : null }, false;
    if (!a.present) return false;
    if (!(r.createdAtMs === null || a.createdAtMs > r.createdAtMs)) return false;
    if ((0, import_chunk_k46cdxhb.r4e)(e, n)) return false;
    return (0, import_chunk_k46cdxhb.Wgt)(e, n), true;
  } };
}
(0, import_chunk_tgj1b0ts.kUa)(h);
(0, import_chunk_tgj1b0ts.vUa)(async (e) => !!await (0, import_chunk_skrb3t34.htt)(e));
(0, import_chunk_tgj1b0ts.TUa)({ wouldNeedDesignConsent: Snr, consentPromptFor: dgt, postDesignConsent: cgt, seedDesignConsentBit: mMe, isConsentBit: ynr });
