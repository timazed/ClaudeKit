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
var chunk_wx2mpa0f_exports = {};
__export(chunk_wx2mpa0f_exports, {
  Svl: () => Svl,
  X2t: () => X2t,
  fb: () => fb,
  yvl: () => yvl
});
module.exports = __toCommonJS(chunk_wx2mpa0f_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var o = null;
function yvl(n) {
  o = n;
}
function fb() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG === true || (0, import_chunk_69qhefwa.Ne)(o?.()?.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG);
}
var t = 300;
function X2t() {
  let n = o?.(), e = (n === void 0 ? import_chunk_c203g5kd.s.CLAUDE_CODE_PERSONAL_CONFIG_FIX : n.CLAUDE_CODE_PERSONAL_CONFIG_FIX)?.trim();
  if (e === void 0 || e === "" || e.length > t || /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e)) return;
  return e;
}
function Svl() {
  let n = o?.(), e = (n === void 0 ? import_chunk_c203g5kd.s.CLAUDE_CODE_PERSONAL_HOOKS_OFF : n.CLAUDE_CODE_PERSONAL_HOOKS_OFF)?.trim().toLowerCase();
  switch (e) {
    case void 0:
    case "":
    case "none":
    case "0":
    case "false":
    case "no":
    case "off":
      return;
    case "retry":
    case "fix":
    case "launch":
      return e;
    default:
      return "host";
  }
}
