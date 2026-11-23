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
var chunk_jf04cjm6_exports = {};
__export(chunk_jf04cjm6_exports, {
  $fa: () => $fa,
  Bfa: () => Bfa,
  Ufa: () => Ufa,
  _1r: () => _1r,
  y1r: () => y1r
});
module.exports = __toCommonJS(chunk_jf04cjm6_exports);
var import_chunk_cc0rj9gh = require("/$bunfs/root/chunk-cc0rj9gh.js");
var n = "anthropic/shellDirectory", _1r = "anthropic/shellDirectoryHeld", $fa = "anthropic/shellDirectoryMayBeMade", Ufa = "anthropic/shellDirectoryMadeAgain";
function y1r(e, t) {
  return { ...e, _meta: { ...e._meta, [n]: t } };
}
function Bfa(e, t) {
  return t.length <= import_chunk_cc0rj9gh.oOi && !/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(t) && t.startsWith(`${e}/`) && t !== `${e}/.` && (0, import_chunk_cc0rj9gh.ayr)(e, t.slice(e.length + 1)) !== void 0;
}
