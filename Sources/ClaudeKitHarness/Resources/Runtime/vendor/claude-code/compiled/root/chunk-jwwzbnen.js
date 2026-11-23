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
var chunk_jwwzbnen_exports = {};
__export(chunk_jwwzbnen_exports, {
  $jl: () => $jl,
  Fjl: () => Fjl,
  sve: () => sve
});
module.exports = __toCommonJS(chunk_jwwzbnen_exports);
function Fjl({ remote: n, isNonInteractiveSession: e, headlessCloud: s, headlessCloudPrint: l = false, isContinue: i, pendingAssistantChat: o, pendingConnectUrl: r, pendingSSHHost: u }) {
  if (e) return s || l;
  if (i) return false;
  return n !== null || Boolean(o?.sessionId) || Boolean(o?.discover) || Boolean(r) || Boolean(u);
}
function $jl(n, e) {
  return n ? null : e;
}
var t = /^(?:session|cse)_[A-Za-z0-9_]+$/;
function sve(n) {
  if (t.test(n)) return n;
  if (n.includes("/") && !/\s/.test(n)) {
    for (let e of n.split(/[/?#]/)) if (t.test(e)) return e;
  }
  return null;
}
