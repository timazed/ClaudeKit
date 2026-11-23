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
var chunk_t7fzcstv_exports = {};
__export(chunk_t7fzcstv_exports, {
  CI: () => CI,
  E6e: () => E6e,
  F0r: () => F0r,
  Hxt: () => Hxt,
  IDo: () => IDo,
  ODo: () => ODo,
  PDo: () => PDo,
  Vqt: () => Vqt,
  Zl: () => Zl,
  br: () => br,
  bt: () => bt,
  r4n: () => r4n
});
module.exports = __toCommonJS(chunk_t7fzcstv_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var t = { ccr: { controlChannel: true, modelCatalog: true, setPermissionMode: true, sessionRecord: true, fanout: true, presence: true, catchupReplay: true, bashExec: true, fileRead: true, sendNow: true, deliveryReports: true }, ssh: { controlChannel: true, modelCatalog: true, setPermissionMode: true, sessionRecord: false, fanout: false, presence: false, catchupReplay: false, bashExec: false, fileRead: true, sendNow: false, deliveryReports: false }, direct: { controlChannel: false, modelCatalog: false, setPermissionMode: false, sessionRecord: false, fanout: false, presence: false, catchupReplay: false, bashExec: false, fileRead: false, sendNow: false, deliveryReports: false } };
var PDo = { isRemoteMode: false };
function br() {
  return (0, import_chunk_f9x2f6cx.v$)().remote;
}
var Vqt = "Stopped waiting for the session \u2014 the command may still finish there";
function bt() {
  return (0, import_chunk_f9x2f6cx.Hn)() || br() !== null;
}
function E6e(e, o) {
  return bt() ? o : e;
}
function Zl() {
  return F0r(br());
}
function r4n() {
  let e = br();
  return e ? CI("setPermissionMode") && !e.viewerOnly : !bt();
}
function F0r(e) {
  return e?.caps?.controlChannel === true && !e.viewerOnly;
}
function Hxt() {
  return false;
}
function CI(e) {
  return br()?.caps?.[e] === true;
}
function ODo(e, o) {
  return o && !(e.isRemoteMode && e.viewerOnly);
}
function r(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}
function IDo(e, o, s, a, n = false) {
  if (!o.isRemoteMode) return PDo;
  return { kind: e, isRemoteMode: true, viewerOnly: s, caps: t[e], sessionId: a, ...n && { consoleProfileBearer: n }, sendMessage: o.sendMessage, cancelRequest: o.cancelRequest, cancelHeldMessages: o.cancelHeldMessages ?? (() => false), sendQueuedNow: o.sendQueuedNow ?? (() => Promise.resolve("failed")), workerSendsNow: o.workerSendsNow ?? (() => false), takeBackSentMessage: o.takeBackSentMessage, noteSendDropped: o.noteSendDropped, serviceTimeMs: o.serviceTimeMs ?? (() => {
    return;
  }), holdsSends: o.holdsSends ?? (() => false), disconnect: o.disconnect, sendControlRequest: o.sendControlRequest ?? (() => r(e)), ...false };
}
