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
var chunk_h9k982pa_exports = {};
__export(chunk_h9k982pa_exports, {
  Aii: () => Aii,
  Cii: () => Cii,
  Msr: () => Msr,
  VRn: () => VRn,
  gXr: () => gXr,
  vWa: () => vWa
});
module.exports = __toCommonJS(chunk_h9k982pa_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
async function Cii(d) {
  let r = (0, import_chunk_865at33z.Sw)();
  if (r?.accountUuid) return { accountUuid: r.accountUuid, organizationUuid: r.organizationUuid || void 0 };
  if (!(0, import_chunk_7d2qr9z5.s8e)() || (0, import_chunk_k449cc64.wt)()) return;
  let c = d(), o = c === void 0 ? void 0 : await VRn(c);
  if (o === void 0) (0, import_chunk_w578pjby.t)("[bridge:owner-pin] daemon owner not declared: no bootstrap stamp, and the daemon credential is absent or was not attributed by the server in time \u2014 spawned sessions run the unverified inbox path", { level: "warn" });
  return o;
}
var V = 1e3, I = 3e5, C = 15e3, N = 4, gXr = 1e4, H = 3e3;
async function Msr(d) {
  return (0, import_chunk_mw2v4wks.CR)() === void 0 && (0, import_chunk_7d2qr9z5.FH)() && await (0, import_chunk_865at33z.v_)(d) === "store";
}
async function vWa(d) {
  return (await Aii(d)).pin;
}
async function Aii({ getAccessToken: d, storageV5: r, credentials: c, presetOwner: o }) {
  let k = d();
  if (k === void 0) return { pin: void 0, reason: "no_token" };
  if (!(0, import_chunk_7d2qr9z5.s8e)() || (0, import_chunk_k449cc64.wt)()) return { pin: void 0, reason: "disabled" };
  if (o === void 0 && !await Msr(c)) return { pin: void 0, reason: "not_store_login" };
  let _ = await (0, import_chunk_865at33z.uS)(r), i, s = k, a = false;
  if (o !== void 0) {
    i = { accountUuid: o.accountUuid, organizationUuid: o.organizationUuid || void 0 };
    let e = await A(k) ? "unknown" : await D(k);
    if (e === "foreign") return { pin: void 0, reason: "not_owner" };
    if (e === "unknown" && !u(_)) return { pin: void 0, reason: "unresolved" };
  } else {
    if (!_?.accountUuid) return { pin: void 0, reason: "no_identity" };
    i = { accountUuid: _.accountUuid, organizationUuid: _.organizationUuid || void 0 };
  }
  let R = o === void 0 ? (0, import_chunk_865at33z.Sw)() : void 0;
  if (R !== void 0 && !v(R) && !await x()) return (0, import_chunk_w578pjby.t)("[bridge:owner-pin] identity sources disagree and the credential could not be validated \u2014 session runs unpinned"), { pin: void 0, reason: "unresolved" };
  let f, l, P = 0, O = "unchanged", g = 0, w, p, h, E = N;
  function u(e) {
    return e !== void 0 && Boolean(e.accountUuid) && e.accountUuid === i.accountUuid && (!e.organizationUuid || !i.organizationUuid || e.organizationUuid === i.organizationUuid);
  }
  function v(e) {
    if (!u(e)) return false;
    return i = { accountUuid: i.accountUuid, organizationUuid: i.organizationUuid ?? (e.organizationUuid || void 0) }, a = true, true;
  }
  async function x() {
    let e = await VRn(s);
    if (e === void 0) return false;
    return i = e, a = true, true;
  }
  async function D(e) {
    let n = await VRn(e);
    if (n === void 0) return "unknown";
    if (!u(n)) return "foreign";
    return i = { accountUuid: i.accountUuid, organizationUuid: i.organizationUuid ?? n.organizationUuid }, s = e, a = true, "owner";
  }
  async function A(e) {
    let n = await (0, import_chunk_865at33z.pp)(c).catch(() => null);
    return n?.accessToken === e && n.expiresAt !== null && n.expiresAt <= Date.now();
  }
  function z() {
    if (!a && o !== void 0) return true;
    if (!a) {
      let n = (0, import_chunk_865at33z.Sw)();
      if (n !== void 0 && !v(n)) return true;
    }
    let e = (0, import_chunk_865at33z.Sn)();
    return Boolean(e?.accountUuid) && !u(e);
  }
  function T(e) {
    if (P = Date.now() + e, E = N, e > 0) O = "unchanged", g = Date.now() + gXr;
  }
  function m(e) {
    if (P = Date.now() + C, e === "inconclusive") O = e, g = Date.now() + gXr;
    if (w === void 0 || h !== void 0 || E === 0) return e;
    return E--, h = setTimeout(() => {
      h = void 0;
      try {
        if (z()) w?.();
      } catch {
      }
    }, C), e;
  }
  async function F(e) {
    if (l !== void 0) await l;
    let n = void 0;
    if (!a && o !== void 0) {
      if (n = await (0, import_chunk_865at33z.K7e)(r, c).catch(() => {
        return;
      }), n === void 0) return m("inconclusive");
      let y = await A(n.accessToken) ? "unknown" : await D(n.accessToken);
      if (y === "foreign") return T(0), "changed";
      if (y === "unknown") return m(u(n) ? "unchanged" : "inconclusive");
    } else if (!a) {
      let y = (0, import_chunk_865at33z.Sw)();
      if (!(y !== void 0 && v(y)) && !await x()) return m("inconclusive");
    }
    if (n ??= await (0, import_chunk_865at33z.K7e)(r, c).catch(() => {
      return;
    }), !n?.accountUuid) return m(e ? "inconclusive" : "unchanged");
    let b = u(n);
    if (n.accessToken === s) return T(b ? C : I), "unchanged";
    let U = await A(n.accessToken) ? void 0 : await VRn(n.accessToken);
    if (U === void 0) return m("inconclusive");
    if (u(U)) return (0, import_chunk_w578pjby.t)("[bridge:owner-pin] the server attributes the rotated credential to the owner \u2014 re-baselining"), i = { accountUuid: i.accountUuid, organizationUuid: i.organizationUuid ?? U.organizationUuid }, s = n.accessToken, T(b ? C : I), "unchanged";
    return T(0), "changed";
  }
  function B() {
    let e = g - Date.now();
    return e > 0 && e <= gXr;
  }
  let S = { identityLooksChanged: z, confirmChanged(e) {
    if (e?.fresh) {
      g = 0;
      let n = f;
      if (n !== void 0) return n.then(() => S.confirmChanged({ fresh: true }));
    } else if (f === void 0 && B()) return Promise.resolve(O);
    return f ??= F(e?.fresh === true).finally(() => {
      f = void 0;
    }), f;
  }, confirmedUnchangedRecently() {
    return f === void 0 && O === "unchanged" && B();
  }, noteAcceptedToken(e) {
    let n = e !== s;
    if (s = e, g = 0, !n || l !== void 0 || !(0, import_chunk_7d2qr9z5.s8e)()) return;
    l = (0, import_chunk_865at33z.uS)(r).then(async (b) => {
      if (!b?.accountUuid || u(b)) return;
      let U = await x();
      (0, import_chunk_w578pjby.t)(U ? "[bridge:owner-pin] request accepted while the identity file names another account \u2014 re-pinned to the tenant the server attributes the credential to" : "[bridge:owner-pin] request accepted while the identity file names another account, but the credential could not be attributed \u2014 keeping the pinned owner");
    }).finally(() => {
      l = void 0;
    });
  }, ownerToken: () => s, ownerVerified: () => a, subscribe(e) {
    w = e;
    let n = (0, import_chunk_865at33z.Tde)(() => {
      try {
        if (Date.now() < P || !z()) return;
      } catch {
        return;
      }
      clearTimeout(p), p = setTimeout(() => {
        p = void 0, w?.();
      }, V);
    });
    return () => {
      w = void 0, clearTimeout(p), p = void 0, clearTimeout(h), h = void 0, n();
    };
  } };
  return { pin: S };
}
async function VRn(d) {
  let r = await (0, import_chunk_5appeerh.me)((0, import_chunk_865at33z.E7e)(d).catch(() => {
    return;
  }), H);
  return r?.account_uuid ? { accountUuid: r.account_uuid, organizationUuid: r.organization_uuid || void 0 } : void 0;
}
