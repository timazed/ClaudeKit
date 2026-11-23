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
var chunk_97767zgv_exports = {};
__export(chunk_97767zgv_exports, {
  $Pa: () => $Pa,
  BYt: () => BYt,
  FPa: () => FPa,
  Jvn: () => Jvn,
  NPa: () => NPa,
  Qvn: () => Qvn,
  UPa: () => UPa,
  Xvn: () => Xvn
});
module.exports = __toCommonJS(chunk_97767zgv_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_e4jbq56j = require("/$bunfs/root/chunk-e4jbq56j.js");
var import_chunk_f3kgcpgw = require("/$bunfs/root/chunk-f3kgcpgw.js");
var import_chunk_abrbwf3y = require("/$bunfs/root/chunk-abrbwf3y.js");
var import_chunk_7mk0bxzp = require("/$bunfs/root/chunk-7mk0bxzp.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class g {
  seated = void 0;
  picker = void 0;
  seat(e) {
    this.seated = e;
  }
  vacate(e) {
    if (this.seated === e) this.seated = void 0;
  }
  current() {
    return this.seated;
  }
  install(e) {
    this.picker = e;
  }
  pickDue() {
    if (this.picker === void 0 || this.seated === void 0) return false;
    return this.picker(this.seated), true;
  }
}
var Xvn = new import_chunk_2904xtvq.j(() => new g());
function Jvn() {
  return require("/$bunfs/root/chunk-p1hs700s.js");
}
function T(e) {
  if (e.id.startsWith(import_chunk_f3kgcpgw.S8s) || e.id.startsWith(import_chunk_f3kgcpgw.yVo)) return (0, import_chunk_78g0060s.S)("org-tip");
  if ((0, import_chunk_abrbwf3y.hHt)(e.id)) return (0, import_chunk_78g0060s.S)("served-tip");
  let { isBuiltInTipId: t, MARKETPLACE_PLUGIN_TIP_ID_PREFIX: n } = Jvn();
  if (e.id.startsWith(n)) return e.pluginId !== void 0 && (0, import_chunk_xcgcdx61.uf)(e.pluginId).marketplace === import_chunk_7mk0bxzp.nh ? (0, import_chunk_78g0060s.Fr)(e.id) : (0, import_chunk_78g0060s.S)("marketplace-plugin:org-marketplace");
  return t(e.id) ? (0, import_chunk_78g0060s.Fr)(e.id) : (0, import_chunk_78g0060s.S)("other");
}
function h(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let t = e.map((n) => ({ tip: n, sessions: (0, import_chunk_e4jbq56j.f6)(n.id) }));
  return t.sort((n, r) => {
    if (n.sessions !== r.sessions) return r.sessions - n.sessions;
    return (r.tip.priority ?? 0) - (n.tip.priority ?? 0);
  }), t[0]?.tip;
}
async function NPa(e) {
  if ((0, import_chunk_2yx6c1y2.zr)().spinnerTipsEnabled === false) return;
  let { getRelevantTips: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p1hs700s.js"))), n = await t(e);
  if (n.length === 0) return;
  return h(n);
}
async function FPa(e, t) {
  try {
    return await e.content(t);
  } catch (n) {
    let { tipSessionCaches: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p1hs700s.js")));
    return r.of(t.session.host).failedTipIds.add(e.id), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(n), "tip content threw")), "";
  }
}
async function $Pa(e) {
  try {
    if ((0, import_chunk_2yx6c1y2.vt)().spinnerTipsEnabled === false) return null;
    let { getSecurityReviewClosingTip: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p1hs700s.js")));
    return await t(e);
  } catch (t) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(t), "security review closing tip threw")), (0, import_chunk_cqa9hrgx.l)("tips_security_review_show", "threw"), null;
  }
}
var p = 2;
class w {
  fired = /* @__PURE__ */ new Set();
  fire(e, t) {
    if (e <= 0) return;
    let n = e > t ? "true" : "false", r = e >= p && t < p ? "true" : "false", s = `${n}|${r}`;
    if (this.fired.has(s)) return;
    this.fired.add(s), (0, import_chunk_y53wbr8a.a)("tengu_dead_probe_legacy_plugin_tip_counts", { changes_max: (0, import_chunk_78g0060s.f)(n), changes_outcome: (0, import_chunk_78g0060s.f)(r) });
  }
}
var _ = new import_chunk_2904xtvq.j(() => new w());
function y() {
  return _.of((0, import_chunk_f9x2f6cx.N)().host);
}
async function UPa(e) {
  if ((0, import_chunk_2yx6c1y2.zr)().spinnerTipsEnabled === false) return;
  let { isTipRelevantSafe: t, tipSessionCaches: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p1hs700s.js"))), r = n.of(e.session.host);
  if ((0, import_chunk_f3kgcpgw.iqe)()) return;
  let s = await r.getMarketplacePluginTips(e.storageV5);
  if (s.length === 0) return;
  let d = [];
  for (let o of s) {
    if (!o.pluginId) continue;
    if (r.failedTipIds.has(o.id)) continue;
    let c = (0, import_chunk_e4jbq56j.zte)(o.id), m = (0, import_chunk_e4jbq56j.jDa)(o.pluginId);
    if (y().fire(m, c), Math.max(c, m) >= p) continue;
    if ((0, import_chunk_e4jbq56j.f6)(o.id) < o.cooldownSessions) continue;
    if (await t(o, e)) d.push(o);
  }
  return h(d);
}
function Qvn(e, t = "spinner", n) {
  if ((0, import_chunk_e4jbq56j.ctt)(e.id, n, e.advertisedCommand), (0, import_chunk_cqa9hrgx.u)(t === "startup" ? "tips_startup_show" : "tips_spinner_show"), (0, import_chunk_abrbwf3y.hHt)(e.id)) (0, import_chunk_cqa9hrgx.u)("tips_served_tip_show");
  (0, import_chunk_y53wbr8a.a)("tengu_tip_shown", { tipIdLength: T(e), ...(0, import_chunk_abrbwf3y.hHt)(e.id) && { tip_id_sha12: (0, import_chunk_myvyhcm0.Zn)(e.id) }, cooldownSessions: e.cooldownSessions, surface: (0, import_chunk_78g0060s.f)(t) });
}
var BYt = "cc-plugin-tips";
