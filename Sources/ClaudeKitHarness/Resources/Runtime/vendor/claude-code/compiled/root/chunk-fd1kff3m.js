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
var chunk_fd1kff3m_exports = {};
__export(chunk_fd1kff3m_exports, {
  PWa: () => PWa,
  RWa: () => RWa,
  Rii: () => Rii,
  _Xr: () => _Xr,
  xWa: () => xWa
});
module.exports = __toCommonJS(chunk_fd1kff3m_exports);
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_zlib = require("zlib");
var i = "bot_protected_tengu_sparkling_pike", s = /^[\x20\x22\x23\x25-\x5b\x5d-\x7e]*$/, o = /^\/(?:.*\/)?(?:bash|zsh)$/;
function Rii(t) {
  return o.test(t);
}
function RWa(t, e) {
  let n = `cd ${t} && env ${e}`;
  return _Xr(n) ? `cd ${t} && exec env ${e}` : n;
}
function xWa(t, e = t, n) {
  if (!_Xr(e)) return [t];
  return [n !== void 0 && Rii(n) ? n : "/bin/sh", "-c", t];
}
function PWa(t) {
  if (!_Xr(t)) return t;
  return `/bin/sh -c 'eval "\`printf %s ${(0, import_zlib.gzipSync)(t).toString("base64")} | /usr/bin/base64 --decode| /usr/bin/gunzip\`"'`;
}
function _Xr(t) {
  return !s.test(t) && (0, import_chunk_sghy0qej.Pe)(i, { safe: true });
}
