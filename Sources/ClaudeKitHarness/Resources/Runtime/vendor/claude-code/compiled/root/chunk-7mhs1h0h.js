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
var chunk_7mhs1h0h_exports = {};
__export(chunk_7mhs1h0h_exports, {
  a0i: () => a0i,
  l0i: () => l0i
});
module.exports = __toCommonJS(chunk_7mhs1h0h_exports);
function a0i() {
  return { view: void 0, logs: [], unreadErrors: 0, unreadWarnings: 0, cleanupRegistered: false };
}
function l0i(n) {
  return (o) => n((e) => {
    let r = { webBrowser: e.webBrowser, bagelActive: e.bagelActive, bagelUrl: e.bagelUrl, bagelPanelVisible: e.bagelPanelVisible }, t = o(r);
    if (t === r) return e;
    return { ...e, ...t };
  });
}
