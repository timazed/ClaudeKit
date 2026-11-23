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
var chunk_vhsysgcd_exports = {};
__export(chunk_vhsysgcd_exports, {
  EC: () => EC,
  G5: () => G5,
  JRi: () => JRi,
  Lae: () => Lae,
  QRi: () => QRi,
  Sfo: () => Sfo,
  Von: () => Von,
  WO: () => WO,
  XRi: () => XRi,
  YWe: () => YWe,
  Zs: () => Zs,
  bNn: () => bNn,
  bfo: () => bfo,
  nal: () => nal,
  qWe: () => qWe,
  ral: () => ral,
  tal: () => tal,
  wNn: () => wNn,
  wfo: () => wfo,
  y9e: () => y9e,
  yl: () => yl
});
module.exports = __toCommonJS(chunk_vhsysgcd_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var r = /* @__PURE__ */ new WeakSet();
function XRi() {
  let e = Object.freeze({});
  return r.add(e), e;
}
function EC(e) {
  return typeof e === "object" && e !== null && r.has(e);
}
function WO(e) {
  return e.getMessages?.() ?? e.messages;
}
function G5(e) {
  return e.dispatchedOverBridge === true || e.submissionVerifiedSlackHumanTurn === true;
}
function y9e(e) {
  return (0, import_chunk_865at33z._a)(e.submissionOrigin) && !G5(e) && (e.promptSource === "typed" || e.promptSource === "queued");
}
function bNn(e) {
  return e.isMidTurn === true && e.promptSource === void 0 ? (0, import_chunk_865at33z._a)(e.submissionOrigin) && !G5(e) : y9e(e) && EC(e.submittedFromComposer);
}
function qWe(e) {
  return e.submittedOnLocalStdin === true && !G5(e);
}
function Sfo(e) {
  return qWe(e) && (0, import_chunk_865at33z._a)(e.submissionOrigin);
}
function tal(e) {
  return qWe(e) || (0, import_chunk_865at33z._a)(e.submissionOrigin) && e.submissionVerifiedSlackHumanTurn !== true;
}
function Von(e) {
  return e.submittedBySessionChannelPerson === true && !G5(e);
}
function Lae(e) {
  return (e.getIsResponseStreaming?.() ?? e.isMidTurn) === true;
}
function JRi(e) {
  return e?.type === "local-jsx" && e.runsBesideTurns?.() === true;
}
function nal() {
  return { allowedTools: [], getAllowedTools: void 0 };
}
function ral() {
  return { allowedTools: [], getAllowedTools: () => Promise.resolve([]) };
}
function Zs(e) {
  return e.userFacingName?.() ?? e.name;
}
function wNn(e) {
  if (e.type === "prompt" && e.userFacingName !== void 0) e.shedAliases = [...e.shedAliases ?? [], e.userFacingName()];
  e.userFacingName = void 0;
}
function yl(e) {
  if (!QRi(e)) return false;
  return e.isEnabled?.() ?? true;
}
function QRi(e) {
  let o;
  try {
    o = e.policyGate;
  } catch {
    return false;
  }
  if (o == null) return true;
  return (0, import_chunk_2zeyvjwb.qhe)(o.policy);
}
function bfo(e, o) {
  let n = e.trimStart();
  if (!n.startsWith("/")) return false;
  let t = n.slice(1).match(/^[a-zA-Z0-9:_-]+/)?.[0], s = n.slice(1).split(/\s/, 1)[0];
  if (t !== void 0 && o(t)) return true;
  return s !== void 0 && s !== t && s.length > 0 && o(s);
}
function wfo(e, o, n) {
  return e.getContext?.(o, n) ?? e.context ?? "inline";
}
function YWe(e, o, n) {
  if (e?.answersHelp && import_chunk_k449cc64.bF.includes(o.trim())) return false;
  let t = e?.immediate;
  return typeof t === "function" ? t(o, n) : t === true;
}
