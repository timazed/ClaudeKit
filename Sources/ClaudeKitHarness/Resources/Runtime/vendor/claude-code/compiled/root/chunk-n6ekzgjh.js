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
var chunk_n6ekzgjh_exports = {};
__export(chunk_n6ekzgjh_exports, {
  Rga: () => Rga,
  Ubn: () => Ubn,
  WVe: () => WVe,
  xga: () => xga
});
module.exports = __toCommonJS(chunk_n6ekzgjh_exports);
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_crypto = require("crypto");
var import_os = require("os");
var i = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/, a = /^[A-Za-z]{1,64}$/, c = /^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/\d{1,4}$/, m = 8, I = 64, p = 9999, r = { hostname: import_os.hostname, randomHex: (t) => (0, import_crypto.randomBytes)(t).toString("hex") };
function Rga(t = r) {
  return `dev-${t.randomHex(m)}`;
}
function Ubn(t = r) {
  let [e = ""] = t.hostname().split(".");
  return (0, import_chunk_syr33dp2.Wdn)(e, I);
}
function xga(t, e, n) {
  if (!i.test(t) || !a.test(e) || !Number.isInteger(n) || n < 0 || n > p) throw Error("cannot form a device hook id from these inputs");
  return `${t}/${e}/${n}`;
}
function WVe(t) {
  let e = c.exec(t);
  return e ? { instanceId: e[1], event: e[2] } : null;
}
