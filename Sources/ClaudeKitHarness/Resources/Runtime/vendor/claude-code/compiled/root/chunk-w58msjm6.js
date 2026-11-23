const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s3, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s3, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_w58msjm6_exports = {};
__export(chunk_w58msjm6_exports, {
  $Y: () => $Y,
  $ii: () => $ii,
  $sr: () => $sr,
  BJt: () => BJt,
  Bii: () => Bii,
  CXr: () => CXr,
  Dii: () => Dii,
  EXr: () => EXr,
  FJl: () => FJl,
  Fii: () => Fii,
  Fsr: () => Fsr,
  Hii: () => Hii,
  Ih: () => Ih,
  JRn: () => JRn,
  Lii: () => Lii,
  Lsr: () => Lsr,
  NJl: () => NJl,
  Nii: () => Nii,
  Nsr: () => Nsr,
  QRn: () => QRn,
  TXr: () => TXr,
  UJt: () => UJt,
  Uii: () => Uii,
  Z8o: () => Z8o,
  eYo: () => eYo,
  ene: () => ene,
  hnt: () => hnt,
  kXr: () => kXr,
  mnt: () => mnt,
  mq: () => mq,
  nYo: () => nYo,
  tYo: () => tYo,
  vXr: () => vXr,
  wXr: () => wXr
});
module.exports = __toCommonJS(chunk_w58msjm6_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_6k3h3wej = require("/$bunfs/root/chunk-6k3h3wej.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_zs6b24vw = require("/$bunfs/root/chunk-zs6b24vw.js");
var import_chunk_0vfnz5xh = require("/$bunfs/root/chunk-0vfnz5xh.js");
var import_chunk_ea0prthn = require("/$bunfs/root/chunk-ea0prthn.js");
var import_chunk_3v09xgvh = require("/$bunfs/root/chunk-3v09xgvh.js");
var import_chunk_v6tczjz9 = require("/$bunfs/root/chunk-v6tczjz9.js");
var import_chunk_cvbctnmz = require("/$bunfs/root/chunk-cvbctnmz.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_os = require("os");
var import_promises = require("fs/promises");
var import_path = require("path");
function UJt() {
  return (import_chunk_c203g5kd.s.ALL_PROXY || import_chunk_c203g5kd.s.all_proxy) && (0, import_chunk_3jjr3wje.d3)() === void 0 && (0, import_chunk_865at33z.Hpn)() ? " Claude Code does not use ALL_PROXY to load your organization's settings. If your network needs a proxy, set HTTPS_PROXY to the proxy's http:// or https:// URL. Then start Claude Code again." : "";
}
var ct = "tengu_managed_config_prefetch_off";
function Lsr() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH;
  if (e !== void 0) return e;
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || !(0, import_chunk_zhr7rpv7.pc)() && (0, import_chunk_2nv4wrez.T1)() === void 0 && !(0, import_chunk_f9x2f6cx.st)()) return false;
  return !(0, import_chunk_865at33z.b)(ct, false);
}
function Ne({ jws: e, settings: n, bodySent: r, authType: g, fetchedAs: c, cachePath: h }) {
  let p = c?.organizationUuid;
  if (g !== "oauth" || p === void 0 || (0, import_chunk_ea0prthn.oye)() !== p || !r && (0, import_chunk_xcgcdx61.DHr)(n)) return;
  try {
    if ((0, import_chunk_42nfpkzm.q2t)().kind === "profile") return;
  } catch (y) {
    (0, import_chunk_w578pjby.t)(`Remote settings: could not read the profile store: ${(0, import_chunk_jv7av99m.d)(y)}`, { level: "error" });
    return;
  }
  return () => {
    try {
      if ((0, import_chunk_ea0prthn.oye)() !== p) return false;
      if (import_chunk_6k3h3wej.TTe.get().kind === "unavailable") return false;
    } catch (R) {
      return (0, import_chunk_k449cc64.i)(R), (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_trusted_source", "error"), false;
    }
    let y;
    try {
      y = (0, import_chunk_v6tczjz9.iGe)();
    } catch (R) {
      return (0, import_chunk_w578pjby.t)(`Remote settings: the organization pin could not be read: ${(0, import_chunk_jv7av99m.d)(R)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_trusted_source", "org_pin_unknown"), false;
    }
    if (y !== void 0 && !y.includes(p)) return (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_trusted_source", "org_pin_mismatch"), false;
    if (y !== void 0) try {
      if ((0, import_chunk_xcgcdx61.MJe)({ jws: e, kind: "managed-settings", orgUuid: p, unanchoredClaims: "accept", bodySha: (0, import_chunk_xcgcdx61.xz)((0, import_chunk_xcgcdx61.Yut)(n)), nowMs: Date.now(), roots: (0, import_chunk_xcgcdx61.iOe)() }).result === "aud_mismatch") return (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_trusted_source", "org_pin_aud_mismatch"), false;
    } catch (R) {
      return (0, import_chunk_k449cc64.i)(R), (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_trusted_source", "error"), false;
    }
    return ut({ jws: e, settings: n, cachePath: h, pinnedOrgs: y }), true;
  };
}
function ut({ jws: e, settings: n, cachePath: r, pinnedOrgs: g }) {
  try {
    let c = (0, import_chunk_xcgcdx61.Yut)(n), h = (0, import_chunk_xcgcdx61.YKn)({ kind: "managed-settings", cachePath: r, live: { jws: e }, body: c, bodySha: (0, import_chunk_xcgcdx61.xz)(c), account: (0, import_chunk_865at33z.Dc)(), pinnedOrgs: g, nowMs: Date.now(), roots: (0, import_chunk_xcgcdx61.iOe)() });
    if (h.trusted) (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_trusted_source");
    else (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_trusted_source", h.reason);
  } catch (c) {
    (0, import_chunk_k449cc64.i)(c), (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_trusted_source", "error");
  }
}
var le = 1e4, mt = 5, yt = 36e5, _t = 3e4;
class Ue {
  poller = null;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  fetchSettledPromise = null;
  fetchSettledResolve = null;
  signedCacheShadowChecked = false;
  storedCopyShadow = void 0;
  storedCopyReported = false;
  storedCopyAtStart = void 0;
  liveAnswer = void 0;
  livePrincipalChecked = false;
  backstopReleased = false;
  refreshesHybridToken = true;
  takesProjectEnv = true;
  isApprovalOwed = false;
  prefetch = new import_chunk_865at33z.Bxr();
  oauthRefreshLatch = { attempted: false, recoveries: { begun: 0, running: 0 } };
  createBarrier(e) {
    this.fetchSettledPromise = new Promise((n) => {
      this.fetchSettledResolve = n, e?.(n);
    }), this.loadingCompletePromise = new Promise((n) => {
      this.loadingCompleteResolve = n;
    });
  }
  releaseLoadBarrier() {
    this.loadingCompleteResolve?.(), this.loadingCompleteResolve = null;
  }
  releaseBarrier() {
    this.releaseLoadBarrier(), this.fetchSettledResolve?.(), this.fetchSettledResolve = null;
  }
  detachBarrier() {
    let e = this.loadingCompleteResolve, n = this.fetchSettledResolve;
    if (this.loadingCompleteResolve = null, this.loadingCompletePromise = null, this.fetchSettledResolve = null, this.fetchSettledPromise = null, !e && !n) return null;
    return () => {
      e?.(), n?.();
    };
  }
  startPoller(e) {
    this.poller = e;
  }
  stopPoller() {
    this.poller?.[Symbol.dispose](), this.poller = null;
  }
}
var St = new import_chunk_2904xtvq.j(() => new Ue());
function F() {
  return St.of((0, import_chunk_f9x2f6cx.N)().host);
}
function JRn() {
  Ye();
  let e = F();
  if (e.loadingCompletePromise) return;
  if ((0, import_chunk_42nfpkzm.Mp)()) e.createBarrier((n) => {
    setTimeout((r, g) => {
      if (g.fetchSettledResolve === r) {
        if ((0, import_chunk_zs6b24vw.Wii)()) {
          (0, import_chunk_w578pjby.t)("Remote settings: Loading promise timeout deferred \u2014 consent dialog pending");
          return;
        }
        (0, import_chunk_w578pjby.t)("Remote settings: Loading promise timed out, resolving anyway (load and fetch barriers)"), g.backstopReleased = true, (0, import_chunk_xcgcdx61.Tea)(), g.releaseBarrier();
      }
    }, _t, n, e);
  });
}
function Hii() {
  F().refreshesHybridToken = false;
}
function NJl() {
  F().takesProjectEnv = false;
}
function FJl() {
  return F().isApprovalOwed;
}
function Dii(e) {
  if ((0, import_chunk_f9x2f6cx.Io)() || !(0, import_chunk_42nfpkzm.Mp)() || (0, import_chunk_xcgcdx61.Si)() !== null || (0, import_chunk_xcgcdx61.kI)() || (0, import_chunk_xcgcdx61.BJe)() || (0, import_chunk_xcgcdx61.MHo)() !== void 0) return;
  if ((0, import_chunk_865at33z.tr)()?.refreshToken && (0, import_chunk_865at33z.Dc)() === void 0) return;
  let n = (0, import_chunk_xcgcdx61.aqt)(), r = n ? (0, import_chunk_xcgcdx61.xz)(n) : void 0, g = F(), { oauthRefreshLatch: c } = g;
  g.prefetch.set({ checksum: r, epoch: (0, import_chunk_xcgcdx61.Gee)(), endpoint: we(), principal: Ge() }, async (h) => ke((0, import_chunk_865at33z.fhe)() ? (0, import_chunk_865at33z.Jxr)(r, await (0, import_chunk_p1ewvgeh.I$i)(n !== null, await (0, import_chunk_p1ewvgeh.Zkr)())) : r, false, e, h, c), (h) => h.success);
}
function Z8o() {
  let e = F();
  e.prefetch.clear(), e.oauthRefreshLatch = { attempted: false, recoveries: { begun: 0, running: 0 } };
}
function Ge() {
  if ((0, import_chunk_f9x2f6cx.Io)()) return "gateway";
  let e = (0, import_chunk_865at33z.tr)(), n = (0, import_chunk_865at33z.Dc)(), r = (0, import_chunk_865at33z.KGn)();
  return (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)([(0, import_chunk_865at33z.Rt)() && (0, import_chunk_42nfpkzm.pEo)(), e?.accessToken === void 0 ? null : e.refreshToken ? [n?.organizationUuid ?? "", n?.accountUuid ?? "", (0, import_chunk_ccm69jjy.Je)(e.accessToken)] : (0, import_chunk_ccm69jjy.Je)(e.accessToken), (0, import_chunk_865at33z.Lzt)().fingerprint, (0, import_chunk_865at33z.upn)() ? (0, import_chunk_9b4aq7fb.tL)()?.organizationUuid ?? "" : null, r === void 0 ? null : (0, import_chunk_ccm69jjy.Je)(r)]));
}
function wt() {
  let e = (0, import_chunk_865at33z.XV)({ ownEntrypoint: true });
  if (!(0, import_chunk_3t7ve0wy._0o)()) return e;
  let n = `, ${import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT ?? "cli"}`, r = e.indexOf(n);
  return r === -1 ? e : e.slice(0, r + n.length) + `, ${import_chunk_3t7ve0wy.y0o}` + e.slice(r + n.length);
}
function we() {
  let e = (0, import_chunk_xcgcdx61.cm)() ? null : (0, import_chunk_f9x2f6cx.Io)();
  if (e) return `${e.url}/managed/settings`;
  return `${(0, import_chunk_ephf358x.cn)().BASE_API_URL}/api/claude_code/settings`;
}
function ge(e) {
  if (!e) return e;
  return (0, import_chunk_6mfepmbb.s2)(e, "remote managed settings").settings ?? {};
}
function Ee(e, n) {
  let r = (0, import_chunk_xcgcdx61.vHo)(e);
  if ((0, import_chunk_6mfepmbb.PJe)(e, ye)) return { ruledEmpty: kt(e, n) };
  let g = (0, import_chunk_6mfepmbb.s2)(r, n), c = r, h = Object.keys(c);
  if (!g.settings && h.length > 0 && !h.every((p) => g.removed.includes(p)) && !bt(c)) return (0, import_chunk_w578pjby.t)(`Remote settings: ruled_empty - no key in the payload could be applied as written (${g.errors.length} rulings); nothing of it applies`), { ruledEmpty: { success: false, error: "No setting in the payload could be applied as written", errorKind: "ruled_empty", rulings: g.errors, skipRetry: true } };
  if (g.errors.length > 0) (0, import_chunk_w578pjby.t)(`Remote settings: Payload contains ${g.errors.length} invalid entries; applying the salvaged subset`);
  return { settings: r, salvagedSettings: Et(c, g) };
}
var ye = 5e3;
function kt(e, n) {
  let r = Object.keys(e).filter((C) => (0, import_chunk_6mfepmbb.PJe)(e[C], ye - 1)).map(import_chunk_xcgcdx61.cge), [g = "", c, h, ...p] = r, y = [g, c, h].filter((C) => C !== void 0).map((C) => `"${C}"`).join(", "), R = p.length === 0 ? "" : ` and ${p.length} more ${(0, import_chunk_7cfjrnwy.O)(p.length, "key")}`;
  return (0, import_chunk_w578pjby.t)(`Remote settings: ruled_empty - the payload nests more than ${ye} levels deep; none of it was read`, { level: "warn" }), { success: false, error: "The settings nest too deeply to be read", errorKind: "ruled_empty", wholeDocumentUnread: true, rulings: [{ file: n, path: g, message: `Objects or arrays under ${y}${R} are nested past the ${ye.toLocaleString("en-US")} levels Claude Code reads, so none of these settings were applied. Reduce the nesting there.`, severity: "fatal" }], skipRetry: true };
}
function vt(e) {
  return { ...e, path: "" };
}
function At(e) {
  return { ...e, message: `${e.message} The settings received earlier were kept.`, severity: "warning" };
}
function bt(e) {
  let n = Object.keys(e);
  return n.length > 0 && n.every((r) => import_chunk_6mfepmbb.wKt.some((g) => g === r));
}
function je(e, n, r) {
  let g = [...import_chunk_6mfepmbb.wKt.filter((h) => h in n && !(h in e)), ...r.onlySubstitutes ? r.errors.filter((h) => h.onlySubstitutes).map((h) => h.path) : []].filter((h) => h in n);
  if (g.length === 0) return e;
  let c = (0, import_chunk_6mfepmbb.RFe)(n).copy;
  return { ...e, ...Object.fromEntries(g.map((h) => [h, c[h]])) };
}
function Tt(e) {
  let n = (0, import_chunk_6mfepmbb.s2)(e, "remote managed settings");
  return je(n.settings ?? {}, e, n);
}
function Et(e, n) {
  let r = n.errors.length > 0 ? n.settings ?? {} : void 0;
  return r === void 0 ? void 0 : je(r, e, n);
}
async function Ot(e) {
  let n = (0, import_chunk_xcgcdx61.MHo)();
  if (n === void 0) return null;
  if (n === "fail") return { success: false, error: "mocked fetch failure", errorKind: "unknown_error", skipRetry: true };
  if (n === "empty") return { success: true, settings: {}, checksum: void 0, consentIdentity: await Pe(e) };
  try {
    let r = (0, import_chunk_xcgcdx61.sqt)(), g = r !== void 0 ? await (0, import_promises.readFile)(r, "utf-8") : n, c = (0, import_chunk_w578pjby.te)(g);
    if (!c || typeof c !== "object" || Array.isArray(c)) return { success: false, error: "mock JSON parse failed", errorKind: "parse_error", skipRetry: true };
    let h = Ee(c, "mock remote settings");
    if ("ruledEmpty" in h) return h.ruledEmpty;
    return { success: true, ...h, checksum: "mock", consentIdentity: await Pe(e) };
  } catch {
    return { success: false, error: "mock JSON parse failed", errorKind: "parse_error", skipRetry: true };
  }
}
function BJt() {
  return (0, import_chunk_42nfpkzm.Mp)();
}
async function mq() {
  if ((0, import_chunk_xcgcdx61.Out)()) return;
  let e = F();
  if (e.loadingCompletePromise) await e.loadingCompletePromise;
}
function Lii() {
  let e = F(), n = e.storedCopyAtStart;
  return { storedCopy: n === void 0 || n === "not_read" ? "not_read" : (0, import_chunk_xcgcdx61.qKn)(n, e.storedCopyShadow), liveSigned: (0, import_chunk_7q6ee47s.Pks)({ kind: "managed-settings", answer: e.liveAnswer, account: (0, import_chunk_865at33z.Dc)() }) };
}
async function Ih() {
  let e = F();
  if (e.fetchSettledPromise) await e.fetchSettledPromise;
}
(0, import_chunk_tvttgr51.sXi)(Ih, import_chunk_42nfpkzm.e2i);
import_chunk_cvbctnmz.oI.wait = Ih;
import_chunk_cvbctnmz.oI.ask = () => it();
import_chunk_cvbctnmz.oI.fetches = import_chunk_42nfpkzm.Mp;
function QRn() {
  return F().backstopReleased;
}
function ene() {
  return (0, import_chunk_xcgcdx61.zee)((0, import_chunk_42nfpkzm.Mp)());
}
function wXr() {
  return !(0, import_chunk_3t7ve0wy.Vxt)() && (0, import_chunk_42nfpkzm.Mp)() && (0, import_chunk_xcgcdx61.wDr)();
}
function Ye() {
  (0, import_chunk_bzyb60p0.K2a)(async () => {
    if (wXr()) await Ih();
    else if (ene()) await mq();
  });
}
async function Pt(e, n) {
  if ((0, import_chunk_xcgcdx61.cm)()) {
    let h = (0, import_chunk_3v09xgvh.eCr)();
    if (h === null || (0, import_chunk_3v09xgvh.eun)()) return { headers: {}, error: h === null ? "No credential from the host that launched this session" : "The settings endpoint was moved after this session was launched", authType: "none" };
    let p = we();
    return h.kind === "bearer" ? { headers: { Authorization: `Bearer ${h.token}`, "anthropic-beta": import_chunk_ephf358x.ff }, authType: "oauth", credentialOrigin: "injected_token", url: p } : { headers: { "x-api-key": h.key }, authType: "api_key", url: p };
  }
  if (n !== null) {
    let { getHybridOauthTokens: h, getValidHybridAccessToken: p, HYBRID_SETTINGS_SCOPE: y, usable: R } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-j6pycvmk.js"))), C = await h(), v = (!F().refreshesHybridToken || !C?.refreshToken) && (0, import_chunk_865at33z.NR)(C?.expiresAt ?? null);
    if (v && !(0, import_chunk_xcgcdx61.bqn)()) (0, import_chunk_cqa9hrgx.l)("oauth_token_refresh", C?.refreshToken ? "hybrid_oauth_renewal_due" : "hybrid_oauth_renewal_due_in_copy");
    if ((0, import_chunk_xcgcdx61.Rea)(v), v) return (0, import_chunk_w578pjby.t)("Remote settings: the organization sign-in's token is due for renewal; this process starts no refresh"), { headers: {}, error: "renewal_due", authType: "hybrid_oauth" };
    let w = C && (!F().refreshesHybridToken || !C.refreshToken) ? R(C) : await p();
    if (!w.ok) return (0, import_chunk_w578pjby.t)(`Remote settings: no organization sign-in token (${w.reason})`), { headers: {}, error: w.reason, authType: "hybrid_oauth", retryable: w.reason === "refresh_failed" };
    if (!w.accessToken || !w.scopes.includes(y) || w.organizationUuid !== n) return { headers: {}, error: "needs_sign_in", authType: "hybrid_oauth" };
    return { headers: {}, hybridAccessToken: w.accessToken, authType: "hybrid_oauth", consentIdentity: await Ve() };
  }
  let r = (0, import_chunk_f9x2f6cx.Io)();
  if (r) {
    let h = (0, import_chunk_f9x2f6cx.iA)(r) ? await Xe(r, e) : void 0;
    return { headers: { Authorization: `Bearer ${r.jwt}` }, authType: "gateway_jwt", consentIdentity: qe(r, h), pinnedFingerprint: h };
  }
  let g = (0, import_chunk_42nfpkzm.q2t)();
  if (g.kind === "org_login") {
    let h = (0, import_chunk_865at33z.tr)();
    if (h?.accessToken) return { headers: { Authorization: `Bearer ${h.accessToken}`, "anthropic-beta": import_chunk_ephf358x.ff }, authType: "oauth", accessToken: h.accessToken, ...await Oe(e) };
  }
  if (g.kind === "api_key") {
    if ((0, import_chunk_865at33z.Yme)(g.key) === null) return (0, import_chunk_w578pjby.t)("Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host"), { headers: {}, error: "Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host", authType: "api_key" };
    return { headers: { "x-api-key": g.key }, authType: "api_key" };
  }
  if (g.kind === "host_bearer") return { headers: { Authorization: `Bearer ${g.bearer}` }, authType: "oauth", credentialOrigin: "injected_token" };
  if (g.kind === "profile") {
    if ((0, import_chunk_9b4aq7fb.z7i)()) return (0, import_chunk_w578pjby.t)("Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart"), { headers: {}, error: "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart", authType: "profile", profileError: true };
    try {
      let { getWIFCredentials: h, getWIFTokenCache: p } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-e9bvzfbq.js"))), [y, R] = await Promise.all([p(), h()]);
      if (y !== null) {
        if (!(0, import_chunk_42nfpkzm.Sks)(R?.baseURL)) {
          let v = `Remote settings: profile base URL ${R?.baseURL ?? "(unknown)"} is not the settings endpoint's host; not fetching with the profile credential`;
          return (0, import_chunk_w578pjby.t)(v), { headers: {}, error: v, authType: "profile", profileError: true };
        }
        let C = await y.getToken();
        return { headers: { ...R?.extraHeaders, Authorization: `Bearer ${C}` }, authType: "profile", accessToken: C, profileBearer: true, consentIdentity: We() };
      }
    } catch (h) {
      let p = `Remote settings: profile credential unavailable: ${(0, import_chunk_jv7av99m.d)(h)}`;
      (0, import_chunk_w578pjby.t)(p, { level: "error" });
      let { isWIFTransientExchangeError: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-e9bvzfbq.js")));
      return { headers: {}, error: p, authType: "profile", profileError: true, retryable: y(h) };
    }
  }
  let c = (0, import_chunk_865at33z.tr)();
  if (c?.accessToken) return { headers: { Authorization: `Bearer ${c.accessToken}`, "anthropic-beta": import_chunk_ephf358x.ff }, authType: "oauth", accessToken: c.accessToken, ...await Oe(e) };
  return { headers: {}, error: "No authentication available", authType: "none" };
}
async function It(e) {
  return (await Oe(e)).consentIdentity;
}
async function Oe(e) {
  let n = (0, import_chunk_865at33z.Dc)(), r = await (0, import_chunk_865at33z.v_)(e), g = r === "store" ? "stored_login" : r === "env" || r === "fd" ? "injected_token" : void 0;
  if (r !== "store") return { credentialOrigin: g };
  return { credentialOrigin: g, consentIdentity: n?.organizationUuid ? { organizationUuid: n.organizationUuid, accountUuid: n.accountUuid } : void 0 };
}
function We() {
  let e = (0, import_chunk_9b4aq7fb.tL)(), n = (0, import_chunk_865at33z.Dc)();
  return e?.organizationUuid && e.accountEmail && n?.organizationUuid === e.organizationUuid && n.emailAddress === e.accountEmail && n.accountUuid ? { organizationUuid: e.organizationUuid, accountUuid: n.accountUuid } : void 0;
}
var ze = "gateway:";
async function Ve(e) {
  {
    let { getHybridOauthTokens: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-j6pycvmk.js"))), r = await n(e);
    return r?.organizationUuid && r.accountUuid ? { organizationUuid: `${import_chunk_p1ewvgeh.ISo}${r.organizationUuid}`, accountUuid: r.accountUuid } : void 0;
  }
  return;
}
var Ft = 256;
function qe(e, n) {
  if (!(0, import_chunk_f9x2f6cx.iA)(e) || !n || n === import_chunk_tvttgr51.eXi) return;
  let r;
  try {
    r = new URL(e.url);
  } catch {
    return;
  }
  if (r.protocol !== "https:") return;
  let g = `${r.origin}${r.pathname === "/" ? "" : r.pathname}`, c = (0, import_chunk_865at33z.dpn)(e) ?? "";
  return { organizationUuid: `${ze}${g}#${n}`, accountUuid: c.length > Ft ? `sha256:${(0, import_crypto.createHash)("sha256").update(c).digest("hex")}` : c };
}
async function Xe(e, n) {
  return (0, import_chunk_tvttgr51.Mze)((0, import_chunk_tvttgr51.gB)(new URL(e.url)), n);
}
async function Pe(e) {
  let n = (0, import_chunk_f9x2f6cx.Io)();
  if (n) return qe(n, await Xe(n, e).catch(() => {
    return;
  }));
  if ((0, import_chunk_865at33z.lm)({ skipRetrievingKeyFromApiKeyHelper: true }).key === null && (0, import_chunk_865at33z.upn)()) return We();
  return It(e);
}
async function Ae(e, n, r, g) {
  if (!e) return;
  let c = e.organizationUuid.startsWith(ze) ? await Pe(g) : e.organizationUuid.startsWith(import_chunk_p1ewvgeh.ISo) ? await Ve(g) : (0, import_chunk_865at33z.Dc)();
  if (c?.organizationUuid !== e.organizationUuid || c.accountUuid !== e.accountUuid) {
    (0, import_chunk_w578pjby.t)("Remote settings: consent identity no longer matches the fetch identity; not recording org consent");
    return;
  }
  await (0, import_chunk_p1ewvgeh.sSl)(e, n, r);
}
function z(e) {
  if ((0, import_chunk_xcgcdx61.Gee)() === e) return false;
  return (0, import_chunk_w578pjby.t)("Remote settings: Cache was reset (login/logout) during this fetch; discarding its result"), (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_pull", "reset_during_fetch"), true;
}
function Se(e) {
  return e.httpStatus !== void 0 ? `${e.errorKind}/${e.httpStatus}` : e.errorKind;
}
async function Dt(e, n) {
  let r = await Ot(n.credentials);
  if (r) return r;
  let g = null, c = (0, import_chunk_f9x2f6cx.st)() ? import_chunk_865at33z.lzn : void 0, h = (0, import_chunk_f9x2f6cx.Io)() && !n.background || n.singleAttempt ? 0 : n.maxRetries ?? c?.maxRetries ?? mt, p = Lsr(), y = p && n.startupAwaited === true && !n.background && !(0, import_chunk_f9x2f6cx.Io)(), R = p ? n.oauthRefreshLatch : void 0, C = (A) => ke(e, false, n.credentials, A, R, n.hybridOrganizationUuid), v = n.prefetched, w = false;
  for (let A = 1; A <= h + 1; A++) {
    let E = v ?? (0, import_chunk_865at33z.X7e)(C);
    if (v = void 0, y && A === 1) {
      let P = await (0, import_chunk_865at33z.RCt)({ first: E, send: C, isAnswer: (H, k) => H.success || H.skipRetry === true && !(k && H.errorKind === "http_401"), stillWanted: Lsr, retryFollows: h > 0 });
      g = P.result, w ||= P.hedged;
    } else g = await E.attempt;
    if (g.attempts = A, w) g.hedged = true;
    if (g.success) return g;
    if (g.skipRetry) return g;
    if (A > h) return g;
    let G = (0, import_chunk_865at33z.NN)(A, void 0, c?.retryMaxDelayMs, void 0, c?.retryBaseDelayMs);
    (0, import_chunk_w578pjby.t)(`Remote settings: Retry ${A}/${h} after ${G}ms (${Se({ errorKind: g.errorKind ?? "unknown_error", ...g.httpStatus !== void 0 && { httpStatus: g.httpStatus } })})`), await (0, import_chunk_5appeerh.K)(G);
  }
  return g;
}
var Mt = Date.now();
function Le(e) {
  let n = (() => {
    switch (e.errorKind) {
      case "http_401":
      case "http_403":
        return "auth_failed";
      case "timeout":
        return "timeout";
      case "network_error":
        return "network_error";
      case "parse_error":
      case "ruled_empty":
      case "sign_in_off":
        return "parse_failed";
      case "http_4xx":
      case "http_5xx":
      case "unknown_error":
      case "gateway_cert_mismatch":
      case "gateway_public_address":
      case "gateway_pin_refused":
      case "gateway_pin_unreadable":
        return "request_failed";
      case "no_auth_available":
      case "profile_credential_error":
      case "api_key_not_sent":
      case void 0:
        return;
    }
  })(), r = e.errorKind === "http_401" ? 401 : e.errorKind === "http_403" ? 403 : e.httpStatus, g = e.authType === "oauth" ? "oauth" : e.authType === "api_key" ? "api_key" : e.authType === "profile" ? "wif" : void 0;
  return (0, import_chunk_865at33z.Qxr)({ errorCode: n, httpStatus: r, serverErrorType: e.serverErrorType, serverErrorCode: e.serverErrorCode, serverAuthDenial: e.serverAuthDenial, tokenRefreshOutcome: e.tokenRefreshOutcome, forcedRefreshOutcome: e.forcedRefreshOutcome, authType: g, credentialOrigin: e.authType === "api_key" ? "static_key" : e.credentialOrigin, injectedTokenRecovery: e.credentialOrigin === "injected_token" ? (0, import_chunk_865at33z.tzn)() : void 0, noResponse: e.noResponse });
}
function Nt() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_starry_beacon", false) === true;
  } catch {
    return false;
  }
}
function Be(e, n, r) {
  return e ?? (r ? (0, import_chunk_tvttgr51.wIo)(n, r.network) : void 0);
}
async function ke(e, n = false, r, g, c, h = null) {
  let p = c && (0, import_chunk_865at33z.ydt)(c.recoveries), y, R, C = false, v = false, w, A, E = false, G, P = {}, H = (k) => ((0, import_chunk_w578pjby.t)(`Remote settings: Fetch attempt failed (${Se({ errorKind: k.errorKind ?? "unknown_error", ...k.httpStatus !== void 0 && { httpStatus: k.httpStatus } })})`), { ...P, ...k });
  try {
    if (w = h !== null ? "not_needed" : await (0, import_chunk_865at33z.ENe)({ credentials: r }), h === null) await (0, import_chunk_np189awg.o3)(r);
    let k = await Pt(r, h);
    if (y = k.accessToken, R = k.hybridAccessToken, C = k.profileBearer === true, v = k.accessToken !== void 0 && k.credentialOrigin === "stored_login", A = k.consentIdentity, P = { authType: k.authType, credentialOrigin: k.credentialOrigin, tokenRefreshOutcome: k.authType === "oauth" ? w : void 0 }, k.error) return H({ success: false, error: k.profileError ? k.error : "Authentication required for remote settings", errorKind: k.profileError ? "profile_credential_error" : k.authType === "api_key" ? "api_key_not_sent" : k.retryable ? "network_error" : "no_auth_available", skipRetry: !k.retryable });
    if (h !== null && k.hybridAccessToken === void 0) return (0, import_chunk_w578pjby.t)(`Remote settings: request not sent: this session's credential (${k.authType}) is not the organization sign-in's token`), H({ success: false, error: "Authentication required for remote settings", errorKind: "no_auth_available", skipRetry: true });
    let o = k.url ?? we();
    E = k.url !== void 0;
    let Q = { ...k.headers, "User-Agent": (0, import_chunk_3t7ve0wy.IB)() ? wt() : (0, import_chunk_tb84sczh.Ri)(), "Cache-Control": "no-cache", Pragma: "no-cache" }, D = (0, import_chunk_xcgcdx61.Out)() || h !== null ? void 0 : e;
    if (D) Q["If-None-Match"] = `"${D}"`;
    let Z = (0, import_chunk_f9x2f6cx.Io)()?.hostVerdict, ee = (0, import_chunk_tvttgr51.Xhe)(k.pinnedFingerprint, o), B = ee === void 0 && Z && "verified" in Z && Z.verified && !("vouched" in Z) ? (0, import_chunk_tvttgr51.nXi)(o, Z.network) : void 0, X = B !== void 0 && !E, V = X ? void 0 : Be(ee, o, B), ie = { headers: Q, timeout: le, ...((0, import_chunk_xcgcdx61.cm)() || (0, import_chunk_865at33z.Hpn)()) && { proxy: false }, ...E && { maxRedirects: 0, adapter: "http" }, validateStatus: (x) => x === 200 || x === 204 || x === 304 || x === 404, signal: g }, ae = Nt(), U = (x) => ae ? { ...ie, adapter: "http", beforeRedirect(oe, L) {
      if (!(0, import_chunk_akwvpp7y.a2)((0, import_chunk_akwvpp7y.Koe)(oe), x)) throw G = L.statusCode, Error("Refused a redirect to another origin");
      ie.beforeRedirect?.(oe, L);
    } } : ie, M = U(o), T = h !== null ? await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-j6pycvmk.js")))).readHybridSettingsDocument(h, k.hybridAccessToken ?? "", (x, oe) => import_chunk_3jjr3wje.bn.get(x, { ...U(x), proxy: false, headers: { ...Q, Authorization: oe } })) : X ? await (0, import_chunk_tvttgr51.MIs)(o, () => {
      let x = Be(ee, o, B);
      if (x === void 0) throw Error("settings fetch: a proxy now applies to the gateway, so the request was not sent again");
      return import_chunk_3jjr3wje.bn.get(o, { ...M, httpsAgent: x });
    }, le, g, { repeatable: true, binding: B }) : E ? await (0, import_chunk_xfj2cwfv.VN)(le, (x) => import_chunk_3jjr3wje.bn.get(o, { ...M, ...x, ...V && { httpsAgent: V } }), g) : await import_chunk_3jjr3wje.bn.get(o, { ...M, ...V && { httpsAgent: V } });
    if ((0, import_chunk_tvttgr51.OIs)(T.headers?.["x-cc-gateway-version"]), T.status === 304) {
      if (!D) return (0, import_chunk_w578pjby.t)("Remote settings: 304 to an unconditional request"), { success: false, error: "Unexpected 304 Not Modified", errorKind: "unknown_error", httpStatus: 304, skipRetry: true, ...P, ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
      return (0, import_chunk_w578pjby.t)("Remote settings: Using cached settings (304)"), { success: true, settings: null, checksum: e, signature: (0, import_chunk_xcgcdx61.KKn)(T.headers), consentIdentity: A, ...P, responseKind: "not_modified", ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
    }
    if (T.status === 204 || T.status === 404) {
      if (h !== null) return (0, import_chunk_w578pjby.t)(`Remote settings: ${T.status} for an organization sign-in; the fetch has failed`), { success: false, error: `Unexpected ${T.status}`, errorKind: T.status === 404 ? "http_4xx" : "unknown_error", httpStatus: T.status, skipRetry: true, ...P, ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
      if (xe() && P.authType !== "gateway_jwt" && !(0, import_chunk_7q6ee47s.tGe)(T.headers)) return (0, import_chunk_w578pjby.t)(`Remote settings: ${T.status} without Anthropic's request id \u2014 an intermediary's answer, keeping cached settings`), { success: false, error: `${T.status} from an intermediary (no Anthropic request id)`, errorKind: "http_4xx", httpStatus: T.status, skipRetry: true, ...P, ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
      return (0, import_chunk_w578pjby.t)(`Remote settings: No settings found (${T.status})`), { success: true, settings: {}, checksum: void 0, signature: (0, import_chunk_xcgcdx61.KKn)(T.headers), consentIdentity: A, ...P, responseKind: "none_configured", ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
    }
    if ((0, import_chunk_vcnr02by.wws)(T.data), h !== null) {
      let { readClaudeCodeSignInSwitch: x } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ektdetf3.js")));
      if (await x(T.data, h) === false) return (0, import_chunk_w578pjby.t)("Remote settings: Claude Code sign-in is not turned on for this member"), (0, import_chunk_xcgcdx61.PHo)(h, true), { success: false, error: "Claude Code sign-in is not turned on", errorKind: "sign_in_off", skipRetry: true, ...P, ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
      let { translateHybridDocument: oe } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2q2c1b7t.js"))), L = await oe(T.data, h);
      if (L === null) return (0, import_chunk_w578pjby.t)("Remote settings: Not a settings document of an organization sign-in"), { success: false, error: "Invalid remote settings format", errorKind: "parse_error", skipRetry: true, ...P, ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
      (0, import_chunk_xcgcdx61.Oea)(L.notApplied), (0, import_chunk_xcgcdx61.Iea)(h, L.marketplaces ?? []), (0, import_chunk_xcgcdx61.Hea)(L.note ?? null);
      let se = Ee(L.settings, "your organization's settings");
      if ("ruledEmpty" in se) return (0, import_chunk_xcgcdx61.PHo)(h, true), { ...se.ruledEmpty, ...P };
      if ((0, import_chunk_xcgcdx61.wDs)(h, L.pluginLocksByUrl ?? []), c) (0, import_chunk_865at33z.zGe)(c, p);
      (0, import_chunk_w578pjby.t)("Remote settings: Fetched for the organization sign-in"), (0, import_chunk_xcgcdx61.PHo)(h, false);
      let de = se.salvagedSettings ?? se.settings, q = (0, import_chunk_xcgcdx61.Aqn)(de);
      if (q !== de) (0, import_chunk_w578pjby.t)('Remote settings: Left out the "!" rules among the ask and deny rules of the organization sign-in', { level: "warn" });
      return { success: true, settings: (0, import_chunk_xcgcdx61.uta)(se.settings), salvagedSettings: q, consentIdentity: A, ...P };
    }
    let re = (0, import_chunk_0vfnz5xh.AXr)().safeParse(T.data);
    if (!re.success) return (0, import_chunk_w578pjby.t)(`Remote settings: Invalid response format - ${re.error.message}`), { success: false, error: "Invalid remote settings format", errorKind: "parse_error", skipRetry: true, ...P, ...(0, import_chunk_7q6ee47s.nGe)(T.headers) };
    let ce = Ee((0, import_chunk_xcgcdx61.Out)() ? (0, import_chunk_xcgcdx61.NHr)(re.data.settings) : re.data.settings, "remote managed settings");
    if ("ruledEmpty" in ce) return { ...ce.ruledEmpty, ...P };
    if (c && re.data.checksum) (0, import_chunk_865at33z.zGe)(c, p);
    return (0, import_chunk_w578pjby.t)("Remote settings: Fetched successfully"), { success: true, ...ce, checksum: re.data.checksum, isAnsweredEmpty: Object.keys(re.data.settings).length === 0, signature: (0, import_chunk_xcgcdx61.Out)() ? void 0 : (0, import_chunk_xcgcdx61.KKn)(T.headers), consentIdentity: A, ...P };
  } catch (k) {
    if (G !== void 0) return H({ success: false, error: (0, import_chunk_jv7av99m.d)(k), errorKind: "http_4xx", httpStatus: G, requestIdPresent: false, blockedAtNetworkEdge: true, skipRetry: true });
    let o = (0, import_chunk_jv7av99m.d)(k?.cause);
    if ((0, import_chunk_jv7av99m.d)(k).includes(import_chunk_tvttgr51.VVt)) return H({ success: false, error: "Cloud gateway TLS pin is in a symlinked credentials file", errorKind: "gateway_pin_refused", skipRetry: true });
    if ((0, import_chunk_jv7av99m.d)(k).includes(import_chunk_tvttgr51.JVn)) return H({ success: false, error: "Cloud gateway TLS pin could not be read from the credentials file", errorKind: "gateway_pin_unreadable" });
    if ((0, import_chunk_jv7av99m.d)(k).includes(import_chunk_tvttgr51.kIo) || o.includes(import_chunk_tvttgr51.kIo)) {
      let B = (0, import_chunk_tvttgr51.Ghn)(k);
      return H({ success: false, error: "Cloud gateway TLS certificate does not match stored pin", errorKind: "gateway_cert_mismatch", ...B && { gatewayPinMismatch: B }, skipRetry: true });
    }
    if ((0, import_chunk_jv7av99m.d)(k).includes(import_chunk_tvttgr51.IIs) || o.includes(import_chunk_tvttgr51.IIs)) return H({ success: false, error: "Cloud gateway connection outside the network it was checked on", errorKind: "gateway_public_address", skipRetry: true });
    let { kind: Q, status: D, message: Z } = (0, import_chunk_jv7av99m.$i)(k);
    if (D === 404 && h === null) {
      if (xe() && P.authType !== "gateway_jwt" && !(0, import_chunk_7q6ee47s.tGe)(import_chunk_3jjr3wje.bn.isAxiosError(k) ? k.response?.headers : void 0)) return H({ success: false, error: "404 from an intermediary (no Anthropic request id)", errorKind: "http_4xx", httpStatus: 404, skipRetry: true, ...(0, import_chunk_7q6ee47s.XTr)(k) });
      return { success: true, settings: {}, checksum: "", consentIdentity: A, ...P, responseKind: "none_configured", ...(0, import_chunk_7q6ee47s.XTr)(k) };
    }
    let ee = { ...(0, import_chunk_7q6ee47s.jvt)(k), ...(0, import_chunk_7q6ee47s.XTr)(k) };
    switch (Q) {
      case "auth": {
        let B = { success: false, error: "Not authorized for remote settings", errorKind: D === 401 ? "http_401" : "http_403", ...(0, import_chunk_865at33z.NCs)(k) && { blockedAtNetworkEdge: true }, skipRetry: true, ...ee };
        if (g?.aborted) return H(B);
        let X, V = y ?? R;
        if (D === 401 && V && !n && !c?.attempted && (R === void 0 || F().refreshesHybridToken)) {
          let ae = await (0, import_chunk_865at33z.azn)(c, async () => {
            if (R !== void 0) {
              if (c) c.attempted = true;
              let { getHybridOauthTokens: U, getValidHybridAccessToken: M } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-j6pycvmk.js")));
              if (!(await U())?.refreshToken) {
                (0, import_chunk_w578pjby.t)("Remote settings: the organization sign-in's token that got a 401 was not renewed (this process holds no refresh token)");
                return;
              }
              let T = await M(V);
              if (!T.ok) {
                (0, import_chunk_w578pjby.t)(`Remote settings: the organization sign-in's token that got a 401 was not renewed (${T.reason})`);
                return;
              }
              return T.accessToken;
            }
            if (C) {
              if (c) c.attempted = true;
              let { getWIFTokenCache: U, invalidateWIFToken: M } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-e9bvzfbq.js")));
              return await M(V), U().then((T) => T?.getToken()).catch(() => {
                return;
              });
            }
            return X = { outcome: void 0 }, await (0, import_chunk_865at33z.UR)(V, r, void 0, { onForcedRefreshOutcome: (U) => {
              if (X = { outcome: U }, B.forcedRefreshOutcome = U, c) c.attempted = true, c.lastOutcome = U;
            } }), (0, import_chunk_865at33z.tr)()?.accessToken;
          });
          if (ae && ae !== V) {
            H(B), (0, import_chunk_y53wbr8a.a)("tengu_remote_settings_401_force_refresh_retry", {});
            let U = await ke(e, true, r, g, c, h);
            return { ...U, retriedAfter401: true, forcedRefreshOutcome: U.forcedRefreshOutcome ?? B.forcedRefreshOutcome };
          }
        }
        if (D === 401 && v && (0, import_chunk_865at33z.rzn)(w, X)) B.skipRetry = false;
        if (D === 401 && C && n) (0, import_chunk_9b4aq7fb.V7i)(true);
        if (D === 401 && B.forcedRefreshOutcome === void 0 && c?.attempted) B.forcedRefreshOutcome = c.lastOutcome;
        return H(B);
      }
      case "timeout":
        return H({ success: false, error: "Remote settings request timeout", errorKind: "timeout", errno: (0, import_chunk_7q6ee47s.Qcn)(k) });
      case "network":
        return H({ success: false, error: "Cannot connect to server", errorKind: "network_error", errno: (0, import_chunk_7q6ee47s.Qcn)(k) });
      default:
        return H({ success: false, error: Z, errorKind: D !== void 0 && D >= 500 ? "http_5xx" : D !== void 0 && D >= 400 ? "http_4xx" : "unknown_error", ...D !== void 0 && D >= 300 && { httpStatus: D }, ...Q === "http" && D === void 0 && { noResponse: true, errno: (0, import_chunk_7q6ee47s.Qcn)(k) }, ...ee, ...((0, import_chunk_jv7av99m.CJ)(D) || E && D !== void 0 && D >= 300 && D < 400) && { skipRetry: true } });
    }
  }
}
function xe() {
  return (0, import_chunk_865at33z.fhe)() || (0, import_chunk_f9x2f6cx.st)();
}
function Qe(e) {
  let n = (0, import_chunk_qwbhh2k3.Pn)(e, import_chunk_rpdn91q1.Tgn);
  return n.env ? { ...n, env: (0, import_chunk_qwbhh2k3.Pn)(n.env, import_chunk_rpdn91q1.vgn) } : n;
}
async function Fe(e, n) {
  {
    let r = Qe(n), { readSignedInOrganizationUuid: g, rereadSignIn: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2q2c1b7t.js"))), { takeFromRawSettings: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-77pb6j67.js"))), p = (0, import_chunk_xcgcdx61.IHo)();
    if (p === null) return false;
    let y = "Remote settings: Not saved, because the organization sign-in has ended", R = (0, import_chunk_xcgcdx61.RDs)(r, (0, import_chunk_xcgcdx61.ADs)(r, true, h));
    if (R.length > 0) (0, import_chunk_w578pjby.t)(`Remote settings: Until it has fetched the settings, the next start will lack these, in whole or in part: ${R.join(", ")}`, { level: "warn" });
    let C = (0, import_chunk_xcgcdx61.bDs)(e);
    try {
      await (0, import_promises.mkdir)((0, import_path.dirname)(p), { recursive: true, mode: 448 }), await (0, import_chunk_q7qjcthc.FM)(p, (0, import_chunk_w578pjby._)({ organizationUuid: e, settings: r, fetchedAt: Date.now(), ...C.length > 0 && { pluginLocksByUrl: C } }, null, 2), { mode: 384, flush: true, beforePublish: () => g() === e });
      let v = await c(), w = v === import_chunk_zzrn5zap.bs || await kXr(v);
      return (0, import_chunk_w578pjby.t)(w ? `Remote settings: Saved to ${p}` : y), w;
    } catch (v) {
      (0, import_chunk_w578pjby.t)(v instanceof import_chunk_q7qjcthc.x_n ? y : `Remote settings: Failed to save - ${(0, import_chunk_jv7av99m.d)(v)}`);
    }
  }
  return false;
}
async function kXr(e) {
  {
    let { readSignedInOrganizationUuid: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2q2c1b7t.js"))), r = (0, import_chunk_xcgcdx61.Cqn)();
    if (r !== null && r.organizationUuid === (e === void 0 ? n() : e)) return true;
    let g = (0, import_chunk_xcgcdx61.IHo)();
    if (g !== null) await (0, import_promises.rm)(g, { force: true }).catch((c) => (0, import_chunk_w578pjby.t)(`Remote settings: Couldn't delete the cached settings of the organization sign-in (${(0, import_chunk_jv7av99m.d)(c)})`, { level: "error" }));
  }
  return false;
}
var Ie = Symbol("keep the stored statement"), he = Symbol("the server sent the body now");
async function be(e, n, r, g, c, h) {
  if ((0, import_chunk_xcgcdx61._ge)()) return;
  if (g !== null) {
    await Fe(g, e);
    return;
  }
  let p = (0, import_chunk_w578pjby._)((0, import_chunk_xcgcdx61.JKt)() ? (0, import_chunk_xcgcdx61.Yut)(e) : e, null, 2), y = (0, import_chunk_xcgcdx61.cea)(e, h);
  if ((0, import_chunk_f9x2f6cx.Y)() && (0, import_chunk_m15w38ag.ne)() && n !== void 0 && !(0, import_chunk_xcgcdx61.kI)()) {
    let R = await n.write(import_chunk_hkvzj051.at.state("remote-settings"), p, { publishDiscipline: "inPlace", mode: 384, flush: true });
    if (!R.ok) {
      (0, import_chunk_w578pjby.t)(`Remote settings: Failed to save - ${(0, import_chunk_7n1spq36.un)(R.error)}`);
      return;
    }
    if ((0, import_chunk_w578pjby.t)("Remote settings: Saved via storage backend"), (0, import_chunk_xcgcdx61.iqt)("cache", p), r !== Ie) await (0, import_chunk_xcgcdx61.xgn)((0, import_chunk_xcgcdx61.IK)(), r);
    if (await (0, import_chunk_p1ewvgeh.aSs)(c === he ? void 0 : c), y !== void 0) {
      let C = await n.write(import_chunk_hkvzj051.at.state(import_chunk_xcgcdx61.uOe), y, { publishDiscipline: "inPlace", mode: 384 });
      if ((0, import_chunk_w578pjby.t)(C.ok ? "Remote settings: Saved helper consent via storage backend" : `Remote settings: Failed to save helper consent - ${(0, import_chunk_7n1spq36.un)(C.error)}`), C.ok) (0, import_chunk_xcgcdx61.iqt)("helperConsent", y);
    }
    return;
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) {
    (0, import_chunk_2yx6c1y2.ZN)("remote_settings", "remote-settings.json");
    return;
  }
  try {
    let R = (0, import_chunk_xcgcdx61.IK)();
    await (0, import_chunk_xcgcdx61.OMo)(R, p), (0, import_chunk_w578pjby.t)(`Remote settings: Saved to ${R}`);
  } catch (R) {
    (0, import_chunk_w578pjby.t)(`Remote settings: Failed to save - ${R instanceof Error ? R.message : "unknown error"}`);
    return;
  }
  if ((0, import_chunk_m15w38ag.ne)() && !(0, import_chunk_xcgcdx61.kI)()) (0, import_chunk_xcgcdx61.iqt)("cache", p);
  if (r !== Ie) await (0, import_chunk_xcgcdx61.xgn)((0, import_chunk_xcgcdx61.IK)(), r);
  if (await (0, import_chunk_p1ewvgeh.aSs)(c === he ? void 0 : c), y === void 0) return;
  try {
    if (await (0, import_chunk_xcgcdx61.OMo)((0, import_chunk_xcgcdx61.EHo)(), y), (0, import_chunk_m15w38ag.ne)() && !(0, import_chunk_xcgcdx61.kI)()) (0, import_chunk_xcgcdx61.iqt)("helperConsent", y);
  } catch (R) {
    (0, import_chunk_w578pjby.t)(`Remote settings: Failed to save helper consent - ${(0, import_chunk_jv7av99m.d)(R)}`);
  }
}
async function Nsr(e) {
  if (CXr(), (0, import_chunk_42nfpkzm.k9)(), (0, import_chunk_r3mm3x33.pr)(), Z8o(), F().detachBarrier()?.(), (0, import_chunk_865at33z.vde)(e)) return;
  if ((0, import_chunk_xcgcdx61.cm)()) return;
  let n = (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? await e.delete(import_chunk_hkvzj051.at.state(import_chunk_xcgcdx61.uOe)).then((r) => r.ok ? void 0 : (0, import_chunk_7n1spq36.un)(r.error)) : await (0, import_promises.rm)((0, import_chunk_xcgcdx61.EHo)(), { force: true }).then(() => {
    return;
  }, import_chunk_jv7av99m.d);
  if (n !== void 0) {
    (0, import_chunk_w578pjby.t)(`Remote settings: Failed to remove helper consent - ${n}`);
    return;
  }
  if ((0, import_chunk_m15w38ag.ne)() && !(0, import_chunk_xcgcdx61.kI)()) (0, import_chunk_xcgcdx61.iqt)("helperConsent", null);
  if ((0, import_chunk_xcgcdx61.kI)()) return;
  if (await (0, import_chunk_xcgcdx61.LHr)((0, import_chunk_xcgcdx61.IK)()), await (0, import_chunk_p1ewvgeh.O$i)(), (0, import_chunk_m15w38ag.ne)() && e !== void 0) {
    if ((await e.delete(import_chunk_hkvzj051.at.state("remote-settings"))).ok) (0, import_chunk_xcgcdx61.iqt)("cache", null);
    return;
  }
  try {
    let r = (0, import_chunk_xcgcdx61.IK)();
    await (0, import_promises.unlink)(r);
  } catch (r) {
    if ((0, import_chunk_m15w38ag.ne)() && !(0, import_chunk_jv7av99m.J)(r)) return;
  }
  if ((0, import_chunk_m15w38ag.ne)()) (0, import_chunk_xcgcdx61.iqt)("cache", null);
}
var De;
async function Me(e = {}) {
  try {
    return await Ht(e);
  } finally {
    let n = () => (0, import_chunk_6mfepmbb.ige)().settings;
    (0, import_chunk_2yx6c1y2.bFl)(n), (0, import_chunk_2yx6c1y2.wMs)(n);
  }
}
async function Ht(e) {
  let n = (0, import_chunk_42nfpkzm.Mp)();
  if ((0, import_chunk_xcgcdx61.ZKt)(), !n) return F().prefetch.clear(), { settings: null, fetchSucceeded: true, resolution: "ineligible" };
  let r = (0, import_chunk_xcgcdx61.Si)(), g = (0, import_chunk_xcgcdx61.kI)();
  if (g || (0, import_chunk_xcgcdx61.BJe)()) return F().prefetch.clear(), (0, import_chunk_w578pjby.t)(g ? `Remote settings: Using override file ${g} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch` : "Remote settings: confined evaluation child \u2014 serving the harness-written policy snapshot, no fetch"), { settings: (0, import_chunk_xcgcdx61.Yb)(), fetchSucceeded: true, resolution: "local" };
  if (r === null) (0, import_chunk_42nfpkzm.Jji)();
  let c = (0, import_chunk_xcgcdx61.aqt)(), h = (0, import_chunk_xcgcdx61.nc)(), p = import_chunk_vcnr02by.gLe.get(), y = (0, import_chunk_xcgcdx61.bea)(), R = (0, import_chunk_xcgcdx61.wea)(), C = c ? (0, import_chunk_xcgcdx61.xz)(c) : void 0, v = (0, import_chunk_xcgcdx61.Gee)(), w = F();
  if (!w.signedCacheShadowChecked) {
    if (w.signedCacheShadowChecked = true, w.storedCopyAtStart = (0, import_chunk_xcgcdx61._ge)() || (0, import_chunk_xcgcdx61.cm)() || r !== null ? "not_read" : { enforced: (0, import_chunk_xcgcdx61.r_n)(), gateAnswer: y, hadCopy: c !== null }, c && !(0, import_chunk_xcgcdx61.cm)() && r === null) (0, import_chunk_7q6ee47s.Oks)({ kind: "managed-settings", cachePath: (0, import_chunk_xcgcdx61.IK)(), bodySha: (0, import_chunk_xcgcdx61.JKt)() ? (0, import_chunk_xcgcdx61.xz)((0, import_chunk_xcgcdx61.Yut)(c)) : (0, import_chunk_xcgcdx61.xz)(c), readStoredAccount: import_chunk_865at33z.Dc, readOrgPin: import_chunk_v6tczjz9.iGe, onJudged: (E) => {
      w.storedCopyShadow = E;
    } });
  }
  if (!e.background && w.prefetch.pending) {
    let E = await (0, import_chunk_865at33z.v_)(e.credentials);
    if (E !== "store" || import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN) (0, import_chunk_865at33z.dke)();
    if ((0, import_chunk_865at33z.Ixr)(E)) await (0, import_chunk_865at33z.U9)((0, import_chunk_f9x2f6cx.N)().host, e.credentials);
  }
  let A = e.background ? void 0 : w.prefetch.take((E) => E.checksum === C && E.epoch === v && E.endpoint === we() && E.principal === Ge());
  try {
    let E = Date.now(), G = r === null ? await (0, import_chunk_p1ewvgeh.Zkr)(E) : void 0, P = (0, import_chunk_865at33z.fhe)() && r === null ? await (0, import_chunk_p1ewvgeh.I$i)(c !== null, G, E) : void 0, H = (0, import_chunk_865at33z.fhe)() ? (0, import_chunk_865at33z.Jxr)(C, P) : C, k = Date.now(), o = await Dt(H, { ...e, prefetched: A, oauthRefreshLatch: e.background ? void 0 : w.oauthRefreshLatch, hybridOrganizationUuid: r }), Q = Date.now() - k;
    if (e.cycleFacts) e.cycleFacts.hadCache = c !== null, e.cycleFacts.fetchMs = Q;
    let D = k + Q;
    if (o.success && o.responseKind !== "not_modified") (0, import_chunk_p1ewvgeh.hyl)(D);
    let Z = o.authType === "oauth", ee = o.success ? void 0 : Le(o), B = (0, import_chunk_865at33z.yRo)(o.success ? { succeeded: true, responseKind: o.responseKind ?? "body" } : { succeeded: false, failure: o.errorKind === "no_auth_available" || o.errorKind === "api_key_not_sent" ? "no_credentials" : o.errorKind === "profile_credential_error" ? "credential_exchange" : o.errorKind === "timeout" ? "timeout" : o.errorKind === "network_error" || o.errorKind === "gateway_public_address" || o.noResponse ? "network" : o.errorKind === "gateway_cert_mismatch" || o.errorKind === "gateway_pin_refused" || o.errorKind === "gateway_pin_unreadable" ? "tls" : o.errorKind === "parse_error" || o.errorKind === "ruled_empty" || o.errorKind === "sign_in_off" ? "parse" : o.httpStatus !== void 0 || o.errorKind === "http_401" || o.errorKind === "http_403" ? "http" : "other", httpStatus: o.httpStatus ?? (o.errorKind === "http_401" ? 401 : o.errorKind === "http_403" ? 403 : void 0), serverErrorType: o.serverErrorType, serverErrorCode: o.serverErrorCode, serverAuthDenial: o.serverAuthDenial, credentialState: ee, tokenRefreshOutcome: o.tokenRefreshOutcome, forcedRefreshOutcome: o.forcedRefreshOutcome, errno: o.errno, responseContentType: o.responseContentType, requestIdPresent: o.requestIdPresent, exchangeFinal: o.errorKind === "profile_credential_error" ? o.skipRetry === true : void 0 });
    if (e.cycleFacts) e.cycleFacts.outcomeReason = B;
    let X = (0, import_chunk_xcgcdx61.r_n)(), V = (0, import_chunk_xcgcdx61._ge)() ? "not_read" : (0, import_chunk_xcgcdx61.qKn)({ enforced: X, gateAnswer: y, hadCopy: c !== null }, w.storedCopyShadow), ie = o.success ? o.settings : void 0;
    w.liveAnswer = o.success ? { jws: o.signature, bodySha: () => {
      if (ie !== null && ie !== void 0) return (0, import_chunk_xcgcdx61.xz)((0, import_chunk_xcgcdx61.Yut)(ie));
      return c !== null && (0, import_chunk_xcgcdx61.JKt)() ? (0, import_chunk_xcgcdx61.xz)((0, import_chunk_xcgcdx61.Yut)(c)) : o.checksum ?? "";
    } } : void 0;
    let ae = !w.storedCopyReported && r === null;
    w.storedCopyReported = true;
    let U = X ? R : (0, import_chunk_xcgcdx61.jRt)(w.storedCopyShadow);
    if (o.success && o.signature !== void 0 && U !== void 0 && !w.livePrincipalChecked) w.livePrincipalChecked = true, (0, import_chunk_7q6ee47s.Iks)({ kind: "managed-settings", jws: o.signature, trustedPrincipal: U, gate: X ? "enforced" : "shadow" });
    if ((0, import_chunk_y53wbr8a.a)("tengu_remote_settings_fetch", { duration_ms: Q, ms_since_startup: D - Mt, success: o.success, error_kind: (0, import_chunk_78g0060s.fe)(o.errorKind), http_status: o.httpStatus, attempts: o.attempts, had_cache: c !== null, cache_age_ms: c !== null ? G : void 0, stored_copy: ae ? (0, import_chunk_78g0060s.f)(V) : void 0, stored_copy_gate: ae ? (0, import_chunk_78g0060s.f)(X ? "enforced" : "shadow") : void 0, is_load: !e.background, awaited: e.startupAwaited === true, auth_type: (0, import_chunk_78g0060s.fe)(o.authType), token_source: (0, import_chunk_78g0060s.f)((0, import_chunk_865at33z.xa)().source), credential_road: (0, import_chunk_78g0060s.f)((0, import_chunk_7q6ee47s.YTr)()), credential_origin: (0, import_chunk_78g0060s.fe)(o.credentialOrigin), api_key_prefix: o.authType === "api_key" ? (0, import_chunk_78g0060s.f)((0, import_chunk_865at33z.Txr)()) : void 0, has_custom_base_url: (0, import_chunk_zhr7rpv7.mLr)(), token_refresh_outcome: Z ? (0, import_chunk_78g0060s.fe)(o.tokenRefreshOutcome) : void 0, forced_refresh_outcome: Z ? (0, import_chunk_78g0060s.fe)(o.forcedRefreshOutcome) : void 0, retried_after_401: o.retriedAfter401 ?? false, server_error_type: (0, import_chunk_78g0060s.fe)(o.serverErrorType), server_error_code: (0, import_chunk_78g0060s.fe)(o.serverErrorCode), server_auth_denial: (0, import_chunk_78g0060s.fe)(o.serverAuthDenial), injected_token_recovery: (0, import_chunk_78g0060s.fe)(!o.success && o.credentialOrigin === "injected_token" ? (0, import_chunk_865at33z.tzn)() : void 0), credential_state: (0, import_chunk_78g0060s.fe)(ee), error_errno: (0, import_chunk_78g0060s.fe)(o.errno), outcome_reason: (0, import_chunk_78g0060s.f)(B), response_kind: (0, import_chunk_78g0060s.fe)(o.success ? o.responseKind ?? "body" : void 0), request_id_present: o.requestIdPresent, response_content_type: (0, import_chunk_78g0060s.fe)(o.responseContentType), prefetched: A !== void 0, hedged: o.hedged === true }), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
    if (!o.success && o.errorKind === "ruled_empty") {
      if (c) (0, import_chunk_xcgcdx61.n_n)(c);
      let L = c !== null && Object.keys(c).length > 0;
      if (L) (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_pull", "ruled_empty_kept_previous"), (0, import_chunk_w578pjby.t)("Remote settings: ruled_empty_kept_previous - the previously accepted settings stay in force");
      else (0, import_chunk_cqa9hrgx.m)("remote_managed_settings_pull", "ruled_empty_nothing_kept"), (0, import_chunk_w578pjby.t)("Remote settings: ruled_empty_nothing_kept - no previously accepted settings to keep; nothing applied");
      return { settings: c, fetchSucceeded: false, failure: { errorKind: "ruled_empty", message: o.error ?? "ruled empty", rulings: o.wholeDocumentUnread ? (o.rulings ?? []).map(L ? At : vt) : o.rulings ?? [], ...o.wholeDocumentUnread && { wholeDocumentUnread: true } }, resolution: "ruled_empty" };
    }
    if (!o.success) {
      if (o.errorKind === "sign_in_off") (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_pull", o.errorKind);
      else (0, import_chunk_cqa9hrgx.m)("remote_managed_settings_pull", o.errorKind ?? "remote_managed_settings_fetch_failed");
      let L = { errorKind: o.errorKind ?? "unknown_error", message: o.error ?? "Unknown error", ...o.httpStatus !== void 0 && { httpStatus: o.httpStatus }, ...o.noResponse === true && { noResponse: true }, ...o.errno !== void 0 && { errno: o.errno }, ...(0, import_chunk_7q6ee47s.zYe)(o) !== void 0 && { serverErrorType: (0, import_chunk_7q6ee47s.zYe)(o), ...o.serverErrorCode !== void 0 && { serverErrorCode: o.serverErrorCode }, ...o.serverAuthDenial !== void 0 && { serverAuthDenial: o.serverAuthDenial } }, ...(o.errorKind === "http_401" || o.errorKind === "http_403") && { credentialState: Le(o.serverErrorStamped === true || !(0, import_chunk_865at33z.fhe)() ? o : { ...o, serverErrorType: void 0, serverErrorCode: void 0, serverAuthDenial: o.errorKind === "http_401" ? o.serverAuthDenial : void 0 }) }, ...o.gatewayPinMismatch && { gatewayPinMismatch: o.gatewayPinMismatch }, ...o.blockedAtNetworkEdge && { blockedAtNetworkEdge: true } };
      if (c) return (0, import_chunk_w578pjby.t)(`Remote settings: Using stale cache after fetch failure (${Se(L)})`), (0, import_chunk_xcgcdx61.n_n)(c), { settings: c, fetchSucceeded: false, failure: L, resolution: "failed" };
      return (0, import_chunk_w578pjby.t)(`Remote settings: Fetch failed (${Se(L)}) and no cached settings`), { settings: null, fetchSucceeded: false, failure: L, resolution: "failed" };
    }
    if (o.settings === null && c && c === (0, import_chunk_xcgcdx61.THo)()) {
      if ((0, import_chunk_w578pjby.t)("Remote settings: Cache still valid (304 Not Modified)"), (0, import_chunk_xcgcdx61.n_n)(c, { verified: true }), !(0, import_chunk_xcgcdx61._ge)()) {
        await (0, import_chunk_xcgcdx61.IMo)((0, import_chunk_xcgcdx61.IK)(), o.signature, { keptVerifiable: (0, import_chunk_xcgcdx61.JKt)() });
        let L = z(v);
        if (await (0, import_chunk_xcgcdx61.MMo)((0, import_chunk_xcgcdx61.IK)(), L)) await (0, import_chunk_p1ewvgeh.O$i)();
        else if (!(0, import_chunk_865at33z.fhe)()) await (0, import_chunk_p1ewvgeh.aSs)();
        if (L) return { settings: null, fetchSucceeded: false, resolution: "reset" };
      }
      if (!h) {
        if (await Te(), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
        if (c === (0, import_chunk_xcgcdx61.THo)()) {
          if (await Ae(o.consentIdentity, ge(c), e.storageV5, e.credentials), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
        }
      }
      return (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_pull", { status: (0, import_chunk_78g0060s.S)("not_modified") }), { settings: c, fetchSucceeded: true, resolution: "applied" };
    }
    let M = o.settings ?? c ?? {};
    if (Object.keys(M).length > 0) {
      let L = o.consentIdentity ? await (0, import_chunk_p1ewvgeh.oSl)(o.consentIdentity, e.storageV5) : null, se = (W) => {
        let ue = ge((0, import_chunk_xcgcdx61.THo)(W));
        return L !== null ? { source: "org_record", dangerousSettingsHash: L, consentedPayload: ue } : { source: "consented_payload", settings: ue };
      }, de = ge(M), q = await (0, import_chunk_zs6b24vw.Yii)(se("enabling"), de, e.showSecurityDialog, Ne({ jws: o.signature, settings: M, bodySent: o.settings !== null, authType: o.authType, fetchedAs: o.consentIdentity, cachePath: (0, import_chunk_xcgcdx61.IK)() }));
      if (q === "rejected" && r !== null) {
        let W = require("/$bunfs/root/chunk-ygm86ja5.js");
        W.releaseUnappliedHybridOrganization(r);
      }
      if (z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
      let Ce = (q === "deferred_non_interactive" || q === "deferred_no_consent_surface") && !(0, import_chunk_xcgcdx61.kHo)(se("listing"), de, "listing");
      if (!Ce && !(0, import_chunk_zs6b24vw.Jii)(q)) {
        if (q === "superseded") return (0, import_chunk_w578pjby.t)("Remote settings: A newer fetch took over the pending consent review; leaving the decision to it"), { settings: c, fetchSucceeded: true, resolution: "consent_superseded" };
        if (q === "deferred_no_consent_surface") {
          let W = (0, import_chunk_zs6b24vw.qii)();
          if (W) (0, import_chunk_w578pjby.t)("Remote settings: Consent prompt deferred to the next interactive session (this command cannot host it); keeping the consented baseline"), (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_pull", "consent_deferred_no_surface");
          else (0, import_chunk_w578pjby.t)("Remote settings: No consent surface in this interactive session; keeping the consented baseline"), (0, import_chunk_cqa9hrgx.m)("remote_managed_settings_pull", "remote_managed_settings_no_consent_surface");
          return F().isApprovalOwed = true, { settings: c, fetchSucceeded: false, resolution: W ? "deferred" : "no_consent_surface" };
        }
        return (0, import_chunk_w578pjby.t)("Remote settings: User rejected new settings, using cached settings"), { settings: c, fetchSucceeded: true, resolution: "rejected" };
      }
      if ((0, import_chunk_xcgcdx61.n_n)(M, { verified: true, consentDeferred: q === "deferred_non_interactive" }), !h) {
        if (await Te(), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
      }
      if (await $e(r, q === "deferred_non_interactive" || Ce), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
      if (Ce && o.settings !== null) {
        (0, import_chunk_xcgcdx61.CHo)(M, "listing");
        let W = o.salvagedSettings === void 0 || (0, import_chunk_xcgcdx61.JKt)() && o.signature !== void 0;
        await be((W ? void 0 : o.salvagedSettings) ?? M, e.storageV5, W ? o.signature : void 0, r, he, "listing");
      }
      switch (q) {
        case "approved":
        case "first_party_silent":
        case "no_check_needed":
          if ((0, import_chunk_xcgcdx61.CHo)(M), await Ae(o.consentIdentity, de, e.storageV5, e.credentials), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
          let W = (0, import_chunk_xcgcdx61.JKt)() && o.settings !== null && o.signature !== void 0, ue = (0, import_chunk_xcgcdx61.JKt)() && o.settings === null;
          await be(W || ue ? M : o.salvagedSettings ?? (o.settings === null ? Tt(M) : M), e.storageV5, W || o.salvagedSettings === void 0 && o.settings !== null ? o.signature : ue ? o.signature ?? Ie : void 0, r, o.settings !== null || !(0, import_chunk_865at33z.fhe)() ? he : P === void 0 ? 0 : E - P), (0, import_chunk_w578pjby.t)("Remote settings: Applied new settings successfully"), (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_pull", { status: (0, import_chunk_78g0060s.S)("updated") });
          break;
        case "deferred_non_interactive":
          if ((0, import_chunk_w578pjby.t)("Remote settings: Applied for this non-interactive run; consent deferred \u2014 not persisting the disk cache as consented"), r !== null) await Fe(r, o.salvagedSettings ?? M);
          (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_pull", { status: (0, import_chunk_78g0060s.S)("applied_consent_deferred") });
          break;
        case "rejected":
        case "deferred_no_consent_surface":
        case "superseded":
          break;
      }
      return { settings: M, fetchSucceeded: true, resolution: "applied" };
    }
    let re = o.responseKind === "none_configured" && o.requestIdPresent === true;
    if ((o.isAnsweredEmpty === true || re) && !z(v)) (0, import_chunk_vcnr02by.Sws)();
    let ce = o.responseKind === "none_configured" && (0, import_chunk_xcgcdx61.cm)() && (0, import_chunk_xcgcdx61.aqt)() === null && import_chunk_vcnr02by.gLe.get() === "served" === (p === "served"), x = (0, import_chunk_vcnr02by.j2e)();
    (0, import_chunk_xcgcdx61.n_n)(M, { verified: true });
    let oe = ce && (0, import_chunk_vcnr02by.j2e)() === x;
    if (!h && !oe) {
      if (await Te(), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
    }
    if (await $e(r), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
    if ((0, import_chunk_xcgcdx61.CHo)(M), await Ae(o.consentIdentity, M, e.storageV5, e.credentials), z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
    return await be(o.settings ?? {}, e.storageV5, o.signature, r, he), (0, import_chunk_w578pjby.t)("Remote settings: Saved empty sentinel (404 response)"), (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_pull", { status: (0, import_chunk_78g0060s.S)("no_content") }), { settings: M, fetchSucceeded: true, resolution: "none", changesNothing: oe };
  } catch {
    if (z(v)) return { settings: null, fetchSucceeded: false, resolution: "reset" };
    (0, import_chunk_cqa9hrgx.m)("remote_managed_settings_pull", "remote_managed_settings_unexpected");
    let E = { errorKind: "unknown_error", message: "Unexpected error while applying remote settings" };
    if (c) return (0, import_chunk_w578pjby.t)("Remote settings: Using stale cache after error"), (0, import_chunk_xcgcdx61.n_n)(c), { settings: c, fetchSucceeded: false, failure: E, resolution: "failed" };
    return { settings: null, fetchSucceeded: false, failure: E, resolution: "failed" };
  }
}
function Re(e) {
  if (!(0, import_chunk_42nfpkzm.Mp)()) {
    let r = (0, import_chunk_xcgcdx61.mge)();
    if (r) (0, import_chunk_xcgcdx61.AHo)({ state: "ineligible", reason: r });
    return;
  }
  let n = Ze() !== void 0;
  if (e.fetchSucceeded) {
    if (F().isApprovalOwed = false, (0, import_chunk_xcgcdx61.AHo)({ state: "ok", hasSettings: e.settings !== null && Object.keys(e.settings).length > 0 }), n) (0, import_chunk_r3mm3x33.pr)();
    return;
  }
  if (e.failure) {
    let r = (0, import_chunk_xcgcdx61.Si)() !== null && (0, import_chunk_2yx6c1y2.Kb)() !== "remote", g = e.settings !== null && Object.keys(e.settings).length > 0;
    if ((0, import_chunk_xcgcdx61.AHo)(g && !r ? { state: "stale_cache", failure: e.failure, transportEnvWithheld: !(0, import_chunk_xcgcdx61.nc)() } : { state: "failed", failure: e.failure, ...g && (0, import_chunk_2yx6c1y2.c3)().settings !== null && { restrictionsOnly: true } }), n || e.failure.rulings !== void 0) (0, import_chunk_r3mm3x33.pr)();
  }
}
function Ze() {
  let e = (0, import_chunk_xcgcdx61.Tm)();
  return e?.state === "failed" || e?.state === "stale_cache" ? e.failure.rulings : void 0;
}
async function mnt(e, n, r) {
  (0, import_chunk_xcgcdx61.Sqn)(), Ye(), (0, import_chunk_7q6ee47s.vvl)(Lt);
  let g = F(), c = (0, import_chunk_42nfpkzm.Mp)();
  if ((0, import_chunk_xcgcdx61.cm)()) try {
    if ((0, import_chunk_y53wbr8a.a)("tengu_cowork_cloud_launch_credential", { credential_road: (0, import_chunk_78g0060s.f)((0, import_chunk_7q6ee47s.YTr)()), asks: c }), (0, import_chunk_xcgcdx61.cDr)()) (0, import_chunk_cqa9hrgx.l)("cowork_cloud_launch", "name_on_wsl_kernel", { container_launch: (0, import_chunk_3t7ve0wy.OOe)() });
  } catch (A) {
    (0, import_chunk_k449cc64.i)(A);
  }
  if (c && !g.loadingCompletePromise) g.createBarrier();
  let h = g.fetchSettledResolve, p = (0, import_chunk_xcgcdx61.Gee)(), y = (0, import_chunk_xcgcdx61.Yb)() !== null;
  if (y && g.loadingCompleteResolve) g.releaseLoadBarrier();
  let R = r?.startupAwaited === true;
  if (y && !R) (0, import_chunk_7q6ee47s.xwe)("settings", { source: "cache", hadCache: y, awaited: R });
  let C = {}, v = "error", w = R ? (0, import_chunk_7q6ee47s.xks)("settings") : null;
  try {
    let A = await Me({ ...r, showSecurityDialog: e, storageV5: n, cycleFacts: C }), { settings: E, fetchSucceeded: G } = A;
    if (v = et(A), (0, import_chunk_xcgcdx61.Gee)() === p) Re(A);
    if ((0, import_chunk_xcgcdx61.Gee)() === p && (0, import_chunk_42nfpkzm.Mp)() && !(0, import_chunk_xcgcdx61.kI)() && !(0, import_chunk_xcgcdx61.BJe)()) dt(e, n, r?.credentials);
    let P = (0, import_chunk_r3mm3x33.Br)(), H = A.changesNothing === true && P.hasStateSubscriber && P.takeMisread(import_chunk_2yx6c1y2._p);
    if (H) (0, import_chunk_w578pjby.t)("Remote settings: the server holds no settings, but one read of a settings file found settings and another found none, so the settings are applied again");
    if (E !== null && (A.changesNothing !== true || H)) P.isChangeNoticeWithheld = false, vXr();
    else if (A.changesNothing === true) P.isChangeNoticeWithheld = true;
    else if ((0, import_chunk_xcgcdx61.oxt)()) vXr();
    return G;
  } finally {
    if (tt(h), (0, import_chunk_xcgcdx61.Gee)() === p) (0, import_chunk_xcgcdx61.RHo)();
    if (C.outcomeReason !== void 0) De = C.outcomeReason;
    (0, import_chunk_7q6ee47s.xwe)("settings", { source: v, hadCache: y, awaited: R, fetchMs: C.fetchMs }), w?.("completed");
  }
}
function Lt() {
  let e = (0, import_chunk_xcgcdx61.mge)(), n = (0, import_chunk_42nfpkzm.Mp)() ? De : (0, import_chunk_865at33z.SRo)((0, import_chunk_865at33z.Oxr)(e));
  return { settings_outcome_reason: (0, import_chunk_78g0060s.fe)(n), settings_ineligible_reason: (0, import_chunk_78g0060s.fe)(e) };
}
function et({ resolution: e, settings: n }) {
  switch (e) {
    case "applied":
      return n !== null && Object.keys(n).length > 0 ? "fetch" : "none";
    case "none":
      return "none";
    case "local":
      return "cache";
    case "failed":
    case "ruled_empty":
    case "no_consent_surface":
      return "error";
    case "reset":
    case "consent_superseded":
      return "superseded";
    case "rejected":
      return "rejected";
    case "deferred":
      return "deferred";
    case "ineligible":
      return "ineligible";
  }
}
function tt(e) {
  let n = F();
  if (n.fetchSettledResolve && n.fetchSettledResolve === e) n.releaseBarrier();
}
async function Nii(e, n, r) {
  return (await (0, import_chunk_xfj2cwfv.VN)(le, ({ timeout: c, signal: h }) => import_chunk_3jjr3wje.bn.get(e, { headers: { "User-Agent": (0, import_chunk_tb84sczh.Ri)(), Authorization: n, "Cache-Control": "no-cache", Pragma: "no-cache" }, timeout: c, signal: h, proxy: false, ...import_chunk_865at33z.dNe }), r)).data;
}
async function Fii(e) {
  {
    if (await kXr(), (0, import_chunk_2yx6c1y2.XPe)(e)) return true;
    let n = await ke(void 0, false, void 0, void 0, void 0, e), r = n.salvagedSettings ?? n.settings ?? {};
    if (!n.success || (0, import_chunk_xcgcdx61.uce)((0, import_chunk_xcgcdx61.Iz)(Qe(r), "listing"))) return false;
    return Fe(e, r);
  }
  return false;
}
async function $Y(e, n, r, g) {
  return (await EXr(e, n, r, g)).fetchSucceeded;
}
var Bt = 5e3;
async function $ii(e, n, r) {
  let g, c = new Promise((y) => {
    g = (0, import_chunk_zs6b24vw.Gii)(() => y("consent_pending"));
  }), h = (0, import_chunk_7q6ee47s.xks)("settings", { supersede: true }), p = EXr(e, n, r, { startupAwaited: true, callerRecordsBarrier: true }).then(({ fetchSucceeded: y }) => y ? "refreshed" : "failed", (y) => ((0, import_chunk_k449cc64.i)(y), "failed"));
  try {
    let y = await (0, import_chunk_5appeerh.me)(Promise.race([p, c]), Bt);
    if (h(y === void 0 ? "timed_out" : "completed"), y === void 0) return (0, import_chunk_cqa9hrgx.l)("remote_managed_settings_startup_await", "deadline_expired"), "timed_out";
    return y;
  } finally {
    g?.(), h("completed");
  }
}
async function Uii(e, { timeoutMs: n = le } = {}) {
  let r = await import_chunk_3jjr3wje.bn.get(`${(0, import_chunk_ephf358x.cn)().BASE_API_URL}/api/claude_code/settings`, { headers: { "User-Agent": (0, import_chunk_tb84sczh.Ri)(), "Cache-Control": "no-cache", Pragma: "no-cache", Authorization: `Bearer ${e}`, "anthropic-beta": import_chunk_ephf358x.ff }, timeout: n, signal: AbortSignal.timeout(n), maxRedirects: 0, adapter: "http", ...(0, import_chunk_865at33z.Hpn)() && { proxy: false }, validateStatus: (h) => h === 200 || h === 204 || h === 304 || h === 404 }), g = r.headers ?? {}, c = g["content-type"];
  return { status: r.status, contentType: typeof c === "string" ? c : "", requestIdPresent: (0, import_chunk_7q6ee47s.tGe)(g) };
}
async function EXr(e, n, r, g) {
  let c = g?.startupAwaited === true;
  CXr(), (0, import_chunk_42nfpkzm.k9)(), (0, import_chunk_xcgcdx61.Sqn)();
  let h = (0, import_chunk_xcgcdx61.Gee)(), p = F(), y = p.detachBarrier();
  if (!(0, import_chunk_42nfpkzm.Mp)()) return p.prefetch.clear(), y?.(), Re({ settings: null, fetchSucceeded: true, resolution: "ineligible" }), (0, import_chunk_xcgcdx61.RHo)(), (0, import_chunk_7q6ee47s.xwe)("settings", { source: "ineligible", hadCache: false, awaited: c }), vXr(), (0, import_chunk_2yx6c1y2.wMs)(() => (0, import_chunk_6mfepmbb.ige)().settings), { fetchSucceeded: true };
  JRn();
  let R = p.fetchSettledResolve;
  if (y) if (p.fetchSettledPromise) p.fetchSettledPromise.then(y);
  else y();
  let C, v, w = {}, A = "error", E = c && !g?.callerRecordsBarrier ? (0, import_chunk_7q6ee47s.xks)("settings", { supersede: true }) : null;
  try {
    v = await Me({ showSecurityDialog: e, storageV5: n, credentials: r, startupAwaited: c, maxRetries: g?.maxRetries, cycleFacts: w }), A = et(v), C = { fetchSucceeded: v.fetchSucceeded, ...v.failure && { failure: v.failure } };
  } finally {
    if (tt(R), (0, import_chunk_xcgcdx61.Gee)() === h) (0, import_chunk_xcgcdx61.RHo)();
    if (w.outcomeReason !== void 0) De = w.outcomeReason;
    (0, import_chunk_7q6ee47s.xwe)("settings", { source: A, hadCache: w.hadCache === true, awaited: c, fetchMs: w.fetchMs }), E?.("completed");
  }
  if ((0, import_chunk_w578pjby.t)("Remote settings: Refreshed after auth change"), (0, import_chunk_xcgcdx61.Gee)() !== h) return (0, import_chunk_w578pjby.t)("Remote settings: Refresh superseded by a login/logout reset; not notifying"), C;
  if (Re(v), !(0, import_chunk_xcgcdx61.kI)()) dt(e, n, r);
  return vXr(), C;
}
function vXr() {
  try {
    (0, import_chunk_xcgcdx61.pge)(), import_chunk_trq47kfh.Ti.notifyChange("policySettings");
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
async function Te() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  try {
    var _stack = [];
    try {
      let e = (0, import_chunk_xcgcdx61.Si)(), n = [];
      if (e !== null) {
        let w = require("/$bunfs/root/chunk-961ywnra.js");
        n = w.namesAwaitingHybridConnection();
      }
      const r = __using(_stack, { [Symbol.dispose]: () => {
        if (n.length > 0 && (0, import_chunk_xcgcdx61.Si)() === e) {
          let w = require("/$bunfs/root/chunk-961ywnra.js");
          w.countHybridConnectionPass(n);
        }
      } });
      let [{ applyConfigEnvironmentVariables: g, applySafeConfigEnvironmentVariables: c }, { checkHasTrustDialogAccepted: h }, { captureAdmin3PSteeringSnapshot: p }, { providerBoundRoute: y, resetProviderBoundCachesIfMoved: R }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7etk1m9c.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-zd7jjspn.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5yvkyeeq.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-jg0eem7v.js")))]), v = (0, import_chunk_xcgcdx61.Si)() !== null ? y() : null;
      if (F().takesProjectEnv && h()) g();
      else {
        c();
        let [{ configureGlobalAgents: w }, { clearCACertsCache: A, loadExtraCACerts: E }, { clearMTLSCache: G, loadMTLSClientMaterial: P }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cydghwmm.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z55t9k86.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vs30n4sv.js")))]);
        A(), G(), await Promise.all([E(), P()]), w();
      }
      if (p(), v !== null) R(v);
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function TXr(e) {
  let [n] = (0, import_chunk_6mfepmbb.OJe)(e?.slice(0, 1) ?? []);
  if (!n || !e) return "";
  let r = e.length - 1;
  return ` (${n.path === "" ? "" : `${n.path}: `}${n.message}${r > 0 ? `, and ${r} more` : ""})`;
}
function hnt(e) {
  let { origin: n, pathname: r } = new URL(e);
  return `${n}${r.replace(/\/$/, "")}`;
}
function _e(e) {
  return `Claude Desktop runs Claude Code under your organization's policy from the gateway at ${hnt(e)}, but`;
}
function Bii(e) {
  let n = (0, import_chunk_f9x2f6cx.Io)(), r = n?.hostVerdict;
  if (!n || !r) return;
  if ("unresolvedReason" in r) return `${_e(n.url)} it could not be checked. ${r.unresolvedReason} If this keeps happening, contact your administrator.`;
  if (r.verified) return;
  let g = r.reason ?? "it is not Anthropic-operated or inside your organization's network.";
  if (e) return `Your organization requires managed settings, but the gateway at ${hnt(n.url)} is not an accepted source for them: ${g} Contact your administrator.`;
  if (r.codeTabRulesUnanswered !== void 0) {
    let c = (0, import_chunk_tvttgr51.XVn)(void 0, r.codeTabRulesUnanswered) ? (0, import_chunk_tvttgr51.GVt)() : "Send your message again.";
    return `${_e(n.url)} Claude Code couldn't ask that gateway whether it has rules for this session (${r.codeTabRulesUnanswered}). ${c} This check runs because Claude Code on ${(0, import_os.hostname)()} doesn't take settings from that gateway: ${g}`;
  }
  if (r.hasCodeTabRules) return `${_e(n.url)} Claude Code on ${(0, import_os.hostname)()} doesn't take settings from that gateway: ${g}`;
  if (r.hasCodeTabRules === false) {
    (0, import_chunk_w578pjby.t)(`[gateway] ${hnt(n.url)} is not accepted as a source of managed settings. It says that it has no Code tab rules for this person, so no warning is shown`);
    return;
  }
  nt(`the gateway at ${hnt(n.url)} is not an accepted source for them: ${g.replace(/\.\s*$/, "")}`);
  return;
}
function eYo(e) {
  let n = (0, import_chunk_f9x2f6cx.Io)();
  if (!n || !(0, import_chunk_f9x2f6cx.ILo)(n)) return;
  let r = _e(n.url), g = (0, import_chunk_xcgcdx61.Tm)(), c = g?.state === "failed" || g?.state === "stale_cache" ? g.failure : void 0;
  if (c?.errorKind === "gateway_public_address") return `${r} this machine is no longer reaching it from inside your organization's network (it may have left that network or VPN, or the gateway's name now resolves elsewhere), so the policy was not fetched. Reconnect to that network and start again, or contact your administrator.`;
  if (c?.errorKind === "ruled_empty") return `${r} none of the settings it served could be applied as written${TXr(c.rulings)}. Ask your administrator to fix them.`;
  if (!e || c) {
    let h = c ? `: ${(0, import_chunk_t3er6wbx.Uhe)(c.errorKind, c.httpStatus)}` : "";
    return `${r} the policy could not be loaded from it${h}. Check your network connection, or contact your administrator.`;
  }
  tYo();
  return;
}
function tYo() {
  let e = (0, import_chunk_f9x2f6cx.Io)();
  if (!e || !(0, import_chunk_f9x2f6cx.ILo)(e)) return;
  let n = (0, import_chunk_xcgcdx61.Tm)();
  if (n?.state === "ok" && !n.hasSettings) nt(`the gateway at ${hnt(e.url)} has no Claude Code policy for this Desktop session (self-hosted gateway admins: set \`serve_to_desktop: true\` on this user's policy, or change \`cli\` to \`code\` in every policy)`);
}
function nt(e) {
  let n = `Starting without your organization's managed settings: ${e}.`;
  (0, import_chunk_w578pjby.t)(`Remote settings: ${n}`, { level: "warn" }), (0, import_chunk_ndrgvsn7.$E)(`${n}
`);
}
var pe = "Your organization requires remote managed settings to load, but they could not be loaded.";
function nYo(e) {
  return e?.errno === "CERT_ERROR" ? "Could not verify the gateway's TLS certificate. Check your connection, and join your organization's network if the gateway needs it." : "Check your connection, and join your organization's network if the gateway needs it. If it still fails, try again in a few minutes.";
}
async function Fsr(e, n, r) {
  try {
    if (await e()) {
      let R = n();
      if (R !== void 0) return { valid: false, message: `${pe} ${R}` };
      return r === void 0 ? { valid: true } : ot(r.startsSession, r.freshCopyMandated);
    }
  } catch (R) {
    (0, import_chunk_k449cc64.i)(R);
  }
  let g = Ze();
  if (g !== void 0) return { valid: false, message: `${pe} None of the settings the server returned could be applied as written${TXr(g)}; ask your administrator to fix them.` };
  let c = (0, import_chunk_xcgcdx61.Si)() !== null ? (0, import_chunk_xcgcdx61.oP)() : "`claude auth login`", h = (0, import_chunk_xcgcdx61.Tm)(), p = h?.state === "failed" || h?.state === "stale_cache" ? h.failure : void 0;
  if (p?.errorKind === "sign_in_off") {
    let R = (0, import_chunk_t3er6wbx.Uhe)("sign_in_off");
    return { valid: false, message: `${pe} ${R.charAt(0).toUpperCase()}${R.slice(1)}.` };
  }
  let y = (0, import_chunk_865at33z.nT)() ? "You can check your network connection or contact your admin." : (0, import_chunk_f9x2f6cx.kse)() && p?.errorKind !== "http_401" && p?.errorKind !== "http_403" ? nYo(p) : `Run ${c} to re-authenticate, check your network connection, or contact your administrator.`;
  return { valid: false, message: `${pe} ${p?.blockedAtNetworkEdge ? import_chunk_865at33z.LCs : y}${p?.errno !== void 0 ? UJt() : ""}` };
}
async function $e(e, n = false) {
  {
    if (e === null) return;
    let r = require("/$bunfs/root/chunk-7etk1m9c.js"), g = (0, import_chunk_xcgcdx61.Wy)();
    if (!r.isFetchedHybridRouteInForce()) (0, import_chunk_xcgcdx61.Wea)(e);
    else (0, import_chunk_xcgcdx61.Bea)(e);
    if (g && !(0, import_chunk_xcgcdx61.Wy)()) {
      let [{ resetUserCache: c }, { clearClaudeAIMcpConfigsCache: h }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-wbay8rf8.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1az1n9js.js")))]);
      (0, import_chunk_865at33z.Mxr)(), c(), h();
    }
    if ((0, import_chunk_xcgcdx61.Wy)()) (0, import_chunk_f9x2f6cx.Z6e)(void 0);
    if (!n) {
      let { keepAppliedHybridOrganization: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ygm86ja5.js")));
      await c(e);
    }
  }
}
var rt = " To use Claude Code without your organization's settings, run `claude auth logout`, which signs out of all accounts.";
async function $sr(e, n = false, r = true) {
  {
    let g = false;
    F().refreshesHybridToken = true;
    try {
      if (await e()) return ot(r, n);
      if (!n && !(0, import_chunk_42nfpkzm.Y2t)(r)) return { valid: true };
    } catch (A) {
      g = true, (0, import_chunk_k449cc64.i)(A);
    }
    let c = (0, import_chunk_xcgcdx61.Tm)(), h = c?.state === "failed" || c?.state === "stale_cache" ? c.failure : void 0, p = h && (0, import_chunk_t3er6wbx.Uhe)(h.errorKind, h.httpStatus), y = p ? `could not be loaded (${p})` : g ? "could not be loaded" : "could not be applied", R = h?.errno !== void 0 && Boolean(import_chunk_c203g5kd.s.ALL_PROXY || import_chunk_c203g5kd.s.all_proxy) && import_chunk_3jjr3wje.bn.defaults.proxy === void 0, C = h?.errorKind === "parse_error" ? "Start `claude` again once that is fixed; if this version is out of date, run `claude update` first." : R ? "Claude Code does not use ALL_PROXY to load your organization's settings. If your network needs a proxy, set HTTPS_PROXY to the proxy's http:// or https:// URL. Then start `claude` again." : "Start `claude` again once that is fixed.", v = n || (0, import_chunk_t3er6wbx.KPo)(p) ? "" : rt, w = n ? "this computer's managed settings require a fresh copy at each start (enforceAnthropicSignIn)" : (0, import_chunk_xcgcdx61.Yb)() ? "a start takes where Claude Code sends your requests only from them" : "none are stored on this computer";
    return { valid: false, message: `Your organization's settings ${y}, and ${w}, so Claude Code did not start. ${C}${v}` };
  }
  return { valid: true };
}
function ot(e, n) {
  if (e && (0, import_chunk_xcgcdx61.dF)() === "connection_unusable") {
    let r = (0, import_chunk_xcgcdx61.Si)(), g = r === null ? void 0 : (0, import_chunk_xcgcdx61.Uea)(r);
    return { valid: false, errorType: "organization_connection_unusable", message: `Claude Code did not start. ${import_chunk_xcgcdx61.nqt} ${import_chunk_xcgcdx61.jJe}.` + (g === void 0 || g.length === 0 ? "" : ` The settings that a terminal can't use here: ${g.join(", ")}.`) + " Ask your administrator." + (n ? "" : rt) };
  }
  return { valid: true };
}
async function it(e, n, r) {
  if (!(0, import_chunk_42nfpkzm.Mp)()) return;
  if (F().refreshesHybridToken = true, !(0, import_chunk_xcgcdx61.cm)() && (0, import_chunk_xcgcdx61.Si)() === null) {
    if (await (0, import_chunk_np189awg.o3)(r), (0, import_chunk_f9x2f6cx.yPt)()) {
      (0, import_chunk_w578pjby.t)("Remote settings: Background poll skipped because the gateway sign-in has expired");
      return;
    }
  }
  let g = (0, import_chunk_xcgcdx61.Yb)(ge), c = g ? (0, import_chunk_w578pjby._)(g) : null, h = (0, import_chunk_xcgcdx61.nc)(), p = import_chunk_vcnr02by.gLe.get() === "served", y = (0, import_chunk_xcgcdx61.Gee)();
  try {
    let R = await Me({ background: true, showSecurityDialog: e, storageV5: n, credentials: r });
    if ((0, import_chunk_xcgcdx61.Gee)() !== y) {
      (0, import_chunk_w578pjby.t)("Remote settings: Background poll superseded by a login/logout reset; not notifying");
      return;
    }
    if (R.fetchSucceeded || R.failure?.errorKind === "ruled_empty" || R.failure?.errorKind === "sign_in_off") Re(R);
    let C = (0, import_chunk_xcgcdx61.Yb)(ge), w = (C ? (0, import_chunk_w578pjby._)(C) : null) !== c, A = !h && (0, import_chunk_xcgcdx61.nc)(), E = (0, import_chunk_xcgcdx61.cm)() && !p && import_chunk_vcnr02by.gLe.get() === "served";
    if (w || A || E) (0, import_chunk_w578pjby.t)(w ? "Remote settings: Changed during background poll" : "Remote settings: Confirmed by a background poll"), vXr();
  } catch {
  }
}
function dt(e, n, r) {
  let g = F();
  if (g.poller !== null) return;
  if (!(0, import_chunk_42nfpkzm.Mp)()) return;
  let h = (0, import_chunk_7q6ee47s.hEo)(() => void it(e, n, r), yt, { unref: true });
  g.startPoller(h), (0, import_chunk_w578pjby.Ct)(h);
}
function CXr() {
  F().stopPoller();
}
