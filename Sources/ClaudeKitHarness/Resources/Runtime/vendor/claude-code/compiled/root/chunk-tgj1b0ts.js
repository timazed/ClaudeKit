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
var chunk_tgj1b0ts_exports = {};
__export(chunk_tgj1b0ts_exports, {
  AUa: () => AUa,
  CUa: () => CUa,
  EUa: () => EUa,
  TUa: () => TUa,
  kUa: () => kUa,
  o4e: () => o4e,
  s8o: () => s8o,
  t7r: () => t7r,
  vUa: () => vUa,
  xoi: () => xoi
});
module.exports = __toCommonJS(chunk_tgj1b0ts_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var s = null;
function kUa(e) {
  let n = s;
  return s = e, n;
}
function EUa() {
  return s;
}
var r = null;
function vUa(e) {
  let n = r;
  return r = e, n;
}
async function o4e(e) {
  return await r?.(e) ?? false;
}
class t7r extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}
var t = null;
function TUa(e) {
  let n = t;
  return t = e, n;
}
function s8o() {
  return t;
}
function CUa(e) {
  let n = (0, import_chunk_qdcbcsg7.mt)();
  if (n.scopeExpansionDisclosed) return;
  n.scopeExpansionDisclosed = true, n.pendingScopeExpansionNotice = e;
}
function xoi() {
  let e = (0, import_chunk_qdcbcsg7.mt)(), n = e.pendingScopeExpansionNotice;
  return e.pendingScopeExpansionNotice = void 0, n;
}
function AUa() {
  let e = xoi();
  if (e) process.stderr.write(`${e}
`);
}
