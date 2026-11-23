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
var chunk_m8kb4p7n_exports = {};
__export(chunk_m8kb4p7n_exports, {
  MSn: () => MSn
});
module.exports = __toCommonJS(chunk_m8kb4p7n_exports);
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_ckgkcep6 = require("/$bunfs/root/chunk-ckgkcep6.js");
function MSn({ sessionId: s, getAccessToken: i, fetchSession: n, initial: e, createOrigin: a }) {
  if (!(0, import_chunk_ckgkcep6._Ie)()) return;
  let o = false, r = (t) => {
    if (!Array.isArray(t.tags)) throw Error("the session came without a readable tag list");
    return (0, import_chunk_r9ecxfn9.qrl)(t, o);
  };
  return (0, import_chunk_r9ecxfn9.Zrl)({ ...e && { initial: e.then(r) }, read: () => n(s, { accessToken: i() }).then(r) });
}
