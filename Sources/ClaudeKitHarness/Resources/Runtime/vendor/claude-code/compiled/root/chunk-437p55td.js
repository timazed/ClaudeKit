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
var chunk_437p55td_exports = {};
__export(chunk_437p55td_exports, {
  M7r: () => M7r,
  Msi: () => Msi
});
module.exports = __toCommonJS(chunk_437p55td_exports);
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
var import_chunk_bsw3jbbx = require("/$bunfs/root/chunk-bsw3jbbx.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var m = [import_chunk_6mfepmbb.iEe, { product: import_chunk_6mfepmbb.qR, attach: import_chunk_6mfepmbb.p3 }];
function Msi(e) {
  return d(e)?.product;
}
function d(e) {
  return m.find((n) => e.startsWith(`${n.product}/`));
}
async function p() {
  return (await Promise.all([import_chunk_6mfepmbb.iEe.attach, import_chunk_6mfepmbb.iEe.product].map((e) => (0, import_promises.access)(e, import_fs.constants.W_OK).then(() => false, (n) => (0, import_chunk_jv7av99m.w)(n) !== "ENOENT")))).includes(true);
}
async function T(e) {
  let [n, o, t, r] = await Promise.all([(0, import_promises.lstat)(import_chunk_6mfepmbb.qR).catch((a) => (0, import_chunk_jv7av99m.w)(a) === "ENOENT" ? void 0 : "unknown"), (0, import_promises.realpath)(import_chunk_6mfepmbb.qR).catch(() => {
    return;
  }), (0, import_promises.realpath)(import_chunk_6mfepmbb.p3).catch(() => {
    return;
  }), (0, import_chunk_yt7wk02j.rfs)(e)]);
  if (n === "unknown") return true;
  return n?.isSymbolicLink() ? o === void 0 || o !== t : r.some((a) => a.path === import_chunk_6mfepmbb.qR);
}
async function O(e, n) {
  let [o, t] = await Promise.all([e, n].map((r) => (0, import_promises.realpath)(r).catch(() => {
    return;
  })));
  return o !== void 0 && t !== void 0 && o !== `${t}/${e.slice(n.length + 1)}`;
}
async function M7r(e, n) {
  let o = d(e);
  if (o === void 0 || (0, import_chunk_pbteexar.jS)(n) || n.restricted === true) return;
  let t = e.slice(o.product.length + 1), r = (0, import_chunk_bsw3jbbx.MMe)(t), a = (s) => [e, `${o.attach}/${t}`].some((u) => (0, import_chunk_p1ewvgeh.Ia)(u, n, "read", s) !== null);
  if (r === "dot_name" || r === "instruction_file" || r === "unsafe_name" || await O(e, o.product) || await (0, import_chunk_w82axegn.J6)(e, e, { readable: true, secretStores: true }) !== void 0 || a("deny") || a("ask") || (0, import_chunk_p1ewvgeh.rwe)(n)) return "no_copy";
  return n.mode === "bypassPermissions" || r !== void 0 || a("allow") || (o.product === import_chunk_6mfepmbb.rOe ? await p() : await T(n)) ? void 0 : "sendable";
}
