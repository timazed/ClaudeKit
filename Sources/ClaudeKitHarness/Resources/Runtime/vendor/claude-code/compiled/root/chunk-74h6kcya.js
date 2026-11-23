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
var chunk_74h6kcya_exports = {};
__export(chunk_74h6kcya_exports, {
  FIt: () => FIt,
  Kr: () => Kr,
  Ps: () => Ps,
  QBo: () => QBo,
  RGs: () => RGs,
  Uw: () => Uw,
  X: () => X,
  ZBo: () => ZBo,
  eWo: () => eWo,
  jse: () => jse,
  lo: () => lo,
  uW: () => uW
});
module.exports = __toCommonJS(chunk_74h6kcya_exports);
var import_chunk_3dxkbe9d = require("/$bunfs/root/chunk-3dxkbe9d.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
(0, import_chunk_bs4h6795.G)();
var uW = (0, import_chunk_bs4h6795.an)(null), QBo = (0, import_chunk_bs4h6795.an)(null), ZBo = (0, import_chunk_bs4h6795.an)(null);
function FIt() {
  let e = (0, import_chunk_bs4h6795.be)(ZBo);
  if (!e) throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e;
}
var eWo = (0, import_chunk_bs4h6795.an)(null);
function jse() {
  let e = (0, import_chunk_bs4h6795.be)(eWo);
  if (!e) throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e;
}
function Uw() {
  let e = (0, import_chunk_bs4h6795.be)(QBo);
  if (!e) throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e;
}
function lo() {
  let e = (0, import_chunk_bs4h6795.be)(uW);
  if (!e) throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");
  return e;
}
function X(e) {
  let t = lo();
  return (0, import_chunk_3dxkbe9d.$e)(t, e);
}
function Kr() {
  return lo().setState;
}
function RGs() {
  let e = lo();
  return (0, import_chunk_bs4h6795.re)(() => (0, import_chunk_se72nykz.MIr)(e.setState), [e]);
}
function Ps(e) {
  return (0, import_chunk_3dxkbe9d.$e)((0, import_chunk_bs4h6795.be)(uW), e);
}
