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
var chunk_fqra1yx2_exports = {};
__export(chunk_fqra1yx2_exports, {
  AJl: () => AJl,
  Asi: () => Asi,
  CJl: () => CJl,
  Csi: () => Csi,
  E8o: () => E8o,
  EJl: () => EJl,
  Esi: () => Esi,
  FBa: () => FBa,
  I7r: () => I7r,
  Isi: () => Isi,
  Mzl: () => Mzl,
  O7r: () => O7r,
  Osi: () => Osi,
  Psi: () => Psi,
  RJl: () => RJl,
  Rsi: () => Rsi,
  Ssi: () => Ssi,
  TJl: () => TJl,
  Tsi: () => Tsi,
  _si: () => _si,
  _sr: () => _sr,
  bJl: () => bJl,
  bsi: () => bsi,
  gsi: () => gsi,
  hsi: () => hsi,
  k8o: () => k8o,
  kJl: () => kJl,
  ksi: () => ksi,
  m0t: () => m0t,
  msi: () => msi,
  vJl: () => vJl,
  vsi: () => vsi,
  w8o: () => w8o,
  wJl: () => wJl,
  wTe: () => wTe,
  wsi: () => wsi,
  xsi: () => xsi,
  ysi: () => ysi,
  zI: () => zI
});
module.exports = __toCommonJS(chunk_fqra1yx2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
class FBa {
  state = { status: "inactive" };
  fallbackSadEmitted = /* @__PURE__ */ new Set();
  toolsBaseline = { captured: false };
  relayThinkingStripOwed = false;
  lastDispatchRelayed = false;
  lastDispatchFallback = void 0;
  openBootVerdict = void 0;
  bootSettled = false;
  handoffMarkerStep = void 0;
  enableStubsCalled = /* @__PURE__ */ new Map();
  chromeSwitchedOn = void 0;
  chromeRefusal = void 0;
  forkDirectLines = /* @__PURE__ */ new Set();
  relayRefusedGzip = false;
}
var Mzl = new import_chunk_pzzqg6s3.ze(() => new FBa());
function n() {
  return Mzl.of((0, import_chunk_f9x2f6cx.N)());
}
function zI() {
  return n().state;
}
function msi(e) {
  let r = n();
  if (r.state.status !== "inactive") return;
  r.state = e, r.relayThinkingStripOwed = false;
}
function wTe(e, r, o) {
  let a = n();
  if (a.state.status === "reverted") return;
  if (a.state.status === "active") {
    if (e === "device_tool_requested" || e === "device_tool_request_repeated" || e === "account_memory_withdrawn" || e === "tool_results_cut" || e === "time_zone_withdrawn") (0, import_chunk_42tcgre6.q)("info", "cli_teleport_relay_ended", { reason: e });
    else if (e !== "direct_served") (0, import_chunk_cqa9hrgx.l)("upgrade_teleport_cache", e), s(e);
    if (e !== "direct_served") d(r, e);
    a.relayThinkingStripOwed = true;
  }
  a.state = { status: "reverted", reason: e, detail: o };
}
function hsi(e, r) {
  let o = n().enableStubsCalled;
  if (!o.has(e)) return o.set(e, r), "not_repeat";
  return !!r && r === o.get(e) ? "not_repeat" : "repeat";
}
function bJl(e) {
  n().chromeSwitchedOn = e;
}
function w8o() {
  return n().chromeSwitchedOn;
}
function wJl(e) {
  n().chromeRefusal = e;
}
function gsi() {
  return n().chromeRefusal;
}
var i = /* @__PURE__ */ new WeakMap();
function _si(e, r) {
  i.set(e, r);
}
function kJl(e) {
  let r = n();
  if (r.relayThinkingStripOwed) return e.mainLoop ? "strip_and_mark" : "strip";
  if (r.state.status !== "active") return "keep";
  return e.fetch !== void 0 && i.has(e.fetch) ? "keep" : "strip";
}
function EJl(e) {
  return n().state.status === "active" && e !== void 0 && i.get(e) === "main";
}
function vJl(e) {
  return n().state.status === "active" && e !== void 0 && i.has(e);
}
function ysi(e) {
  n().openBootVerdict = e;
}
function O7r() {
  return n().openBootVerdict !== void 0;
}
function k8o() {
  n().bootSettled = true;
}
function TJl() {
  return !n().bootSettled || zI().status === "active" || O7r();
}
function I7r() {
  let e = n(), r = e.openBootVerdict;
  return e.openBootVerdict = void 0, r;
}
function m0t(e) {
  n().handoffMarkerStep = e;
}
function Ssi() {
  let e = n(), r = e.handoffMarkerStep;
  return e.handoffMarkerStep = void 0, r;
}
function _sr() {
  let e = I7r();
  if (e === void 0) return;
  (0, import_chunk_cqa9hrgx.l)("upgrade_teleport_cache", e), (0, import_chunk_42tcgre6.q)("warn", "cli_teleport_arm_verdict", { outcome: "refused", error_code: e }), (0, import_chunk_w578pjby.t)(`prompt-cache relay stays off: boot had no marker (${e}) and no hand-off armed it`);
}
function bsi() {
  n().relayThinkingStripOwed = true;
}
function wsi() {
  return n().relayThinkingStripOwed;
}
function ksi() {
  return !n().relayRefusedGzip;
}
function Esi() {
  let e = n();
  if (e.relayRefusedGzip) return;
  e.relayRefusedGzip = true, (0, import_chunk_42tcgre6.q)("warn", "cli_teleport_relay_gzip_refused");
}
function vsi(e) {
  let r = n();
  r.lastDispatchRelayed = e, r.lastDispatchFallback = void 0;
}
function Tsi(e, r) {
  n().lastDispatchFallback = { cause: e, httpStatus: r };
}
function CJl() {
  return n().lastDispatchFallback;
}
function AJl() {
  let e = n();
  return e.relayThinkingStripOwed && !e.lastDispatchRelayed;
}
function RJl(e) {
  let r = n();
  if (!r.relayThinkingStripOwed) return;
  r.relayThinkingStripOwed = false, (0, import_chunk_42tcgre6.q)("info", "cli_teleport_relay_thinking_settled", { outcome: e });
}
function Csi(e) {
  let r = n();
  if (r.fallbackSadEmitted.has(e)) return;
  r.fallbackSadEmitted.add(e), (0, import_chunk_cqa9hrgx.l)("upgrade_teleport_cache", e), s(e);
}
function Asi(e, r) {
  if (n().state.status !== "active") return;
  s("direct_served", e), d(r, `direct_served_${e}`), wTe("direct_served", r, e);
}
function E8o(e, r) {
  let o = n();
  if (o.state.status !== "active") return;
  let a = e.at(-1);
  if (a !== void 0) o.forkDirectLines.add(a);
  if (r !== void 0) (0, import_chunk_cqa9hrgx.l)("upgrade_relay_fork_direct", r);
}
function Rsi(e) {
  let r = n().forkDirectLines;
  return r.size > 0 && e.some((o) => r.has(o));
}
function d(e, r) {
  (0, import_chunk_cqa9hrgx.l)("upgrade_relay_end", `${e}_${r}`);
}
function s(e, r) {
  (0, import_chunk_42tcgre6.q)("warn", "cli_teleport_relay_fallback", { reason: e, ...r !== void 0 && { cause: r } });
}
function xsi(e) {
  let r = c(e);
  if (r === void 0) return zI().status === "active";
  return wTe("context_reduced", "main", r), false;
}
function Psi(e) {
  return zI().status === "active" && c(e) === void 0;
}
function c(e) {
  let r = zI();
  if (r.status !== "active") return;
  let o = r.preAnchorLineUuids;
  if (e.length < o.length) return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${o.length}`;
  for (let a = 0; a < o.length; a++) if (e[a] !== o[a]) return `pre-anchor line ${a} changed since arm`;
  return;
}
function Osi(e, r) {
  let o = n();
  if (o.state.status !== "active") return false;
  let a = o.toolsBaseline;
  if (!a.captured) return o.toolsBaseline = { captured: true, model: e, fingerprint: r }, true;
  if (e !== a.model) return false;
  if (a.fingerprint === r) return true;
  return wTe("tools_changed", "main", a.fingerprint === null ? "session gained a toolset after a toolless first relay-attempted dispatch" : r === null ? "session lost its toolset after a tooled first relay-attempted dispatch" : "outgoing toolset diverged from the first relay-attempted dispatch baseline"), false;
}
function Isi(e, r) {
  let o = n();
  if (o.state.status !== "active") return "not_comparable";
  let a = o.toolsBaseline;
  if (!a.captured) return "intact";
  if (e !== a.model) return "not_comparable";
  return a.fingerprint === r ? "intact" : "changed";
}
