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
var chunk_mpjscf1z_exports = {};
__export(chunk_mpjscf1z_exports, {
  LYt: () => LYt,
  RZn: () => RZn,
  cPa: () => cPa,
  k9s: () => k9s
});
module.exports = __toCommonJS(chunk_mpjscf1z_exports);
var import_chunk_3pbeyrw9 = require("/$bunfs/root/chunk-3pbeyrw9.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_21y9ek9j = require("/$bunfs/root/chunk-21y9ek9j.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_2xk5sedb = require("/$bunfs/root/chunk-2xk5sedb.js");
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
var import_chunk_sg5zbskk = require("/$bunfs/root/chunk-sg5zbskk.js");
var import_chunk_hhx1bdcf = require("/$bunfs/root/chunk-hhx1bdcf.js");
var import_chunk_fm523nqz = require("/$bunfs/root/chunk-fm523nqz.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
function k() {
  return !(0, import_chunk_865at33z.ge)().remoteDialogSeen;
}
async function LYt(n) {
  let o = await (0, import_chunk_7d2qr9z5.SFn)();
  if (o) {
    if (o.orgPolicyDenied) (0, import_chunk_21y9ek9j.$H)("allow_remote_control", "slash_command");
    return { kind: "error", message: o.reason };
  }
  let l = await (0, import_chunk_2xk5sedb.hXr)();
  if (l) return { kind: "error", message: l };
  if (!((0, import_chunk_m15w38ag.ne)() && n !== void 0 ? await (0, import_chunk_mw2v4wks.t1)(n) : (0, import_chunk_mw2v4wks.V5)())) return { kind: "error", message: import_chunk_sr33d2zd.lGe };
  if (await (0, import_chunk_sg5zbskk.lEs)(n), await (0, import_chunk_sg5zbskk.DEo)()) {
    let g = (0, import_chunk_fm523nqz.glt)();
    if (g !== null) return { kind: "error", message: g };
    if ((0, import_chunk_sg5zbskk.aGe)()) return { kind: "error", message: import_chunk_sg5zbskk.uun };
    return { kind: "unenrolled-trusted-device" };
  }
  return (0, import_chunk_w578pjby.t)("[bridge] Prerequisites passed, enabling bridge"), null;
}
function k9s() {
  return { askedAs: p((0, import_chunk_865at33z.Sn)()) };
}
async function RZn({ setAppState: n, requestDialog: o, dialogStore: l, storageV5: s, via: g, name: d, sessionGroupingId: i, consent: u, onCalloutRequested: b }) {
  (0, import_chunk_hhx1bdcf.RKr)(s);
  let c = { action: (0, import_chunk_78g0060s.S)("connect"), via: (0, import_chunk_78g0060s.S)(g) };
  if (u !== void 0 && p((0, import_chunk_865at33z.Sn)()) !== u.askedAs) return (0, import_chunk_w578pjby.t)("[bridge:repl] Remote Control consent was given under a different account than is signed in now \u2014 not enabling"), { kind: "account_changed" };
  if (l?.getState().open.some((r) => r.kind === import_chunk_3pbeyrw9.rMe.kind)) return { kind: "already_asking" };
  if (k()) {
    let r;
    if (u !== void 0) r = true;
    else {
      if (!o) return { kind: "cannot_ask" };
      n((m) => m.replBridgeInitialName === d && m.replBridgeSessionGroupingId === i ? m : { ...m, replBridgeInitialName: d, replBridgeSessionGroupingId: i }), b?.();
      let e = k9s(), B = await o(import_chunk_3pbeyrw9.rMe, {}, { place: "under" });
      if (r = B === "enable" && p((0, import_chunk_865at33z.Sn)()) === e.askedAs, B === "enable" && !r) (0, import_chunk_w578pjby.t)("[bridge:repl] Remote Control callout answered under a different account than it was asked for \u2014 not enabling");
    }
    if (r && u === void 0) (0, import_chunk_865at33z.Ke)((e) => e.remoteDialogSeen ? e : { ...e, remoteDialogSeen: true }, s);
    if (r) (0, import_chunk_y53wbr8a.a)("tengu_bridge_command", c);
    return n((e) => {
      if (r) return e.replBridgeEnabled && e.replBridgeExplicit && !e.replBridgeOutboundOnly ? e : { ...e, replBridgeEnabled: true, replBridgeExplicit: true, replBridgeOutboundOnly: false, replBridgeError: void 0, replBridgeErrorKind: void 0, ...u !== void 0 && { replBridgeInitialName: d, replBridgeSessionGroupingId: i } };
      return e.replBridgeInitialName === void 0 && e.replBridgeSessionGroupingId === void 0 ? e : { ...e, replBridgeInitialName: void 0, replBridgeSessionGroupingId: void 0 };
    }), r ? { kind: "enabled" } : { kind: "declined" };
  }
  (0, import_chunk_y53wbr8a.a)("tengu_bridge_command", c);
  let f = false;
  return n((r) => {
    if (r.replBridgeEnabled && !r.replBridgeOutboundOnly) {
      if (i !== void 0) f = true;
      return r;
    }
    return { ...r, replBridgeEnabled: true, replBridgeExplicit: true, replBridgeOutboundOnly: false, replBridgeInitialName: d, replBridgeSessionGroupingId: i, replBridgeError: void 0, replBridgeErrorKind: void 0 };
  }), f ? { kind: "already_on_project_fixed" } : { kind: "enabled" };
}
async function cPa({ getAppState: n, signal: o, timeoutMs: l, pollMs: s = 200 }) {
  let g = Date.now() + l;
  for (; ; ) {
    o.throwIfAborted();
    let d = (0, import_chunk_r60bafc1.Pc)();
    if (d !== null && d.outboundOnly !== true) return "connected";
    let i = n();
    if (!i.replBridgeEnabled || i.replBridgeError !== void 0) return "failed";
    if (Date.now() >= g) return "timed_out";
    await (0, import_chunk_5appeerh.K)(s, o);
  }
}
function p(n) {
  return n && `${n.accountUuid}/${n.organizationUuid || ""}`;
}
