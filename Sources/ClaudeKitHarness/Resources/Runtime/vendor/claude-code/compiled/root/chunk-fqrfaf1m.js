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
var chunk_fqrfaf1m_exports = {};
__export(chunk_fqrfaf1m_exports, {
  gGl: () => gGl,
  p6o: () => p6o
});
module.exports = __toCommonJS(chunk_fqrfaf1m_exports);
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var n = ["PATH", "HOME", "USERPROFILE", "SystemRoot", "TMPDIR", "TEMP", "TMP", "LANG", "LC_ALL", "TERM", "NO_COLOR", "FORCE_COLOR", "USER_TYPE", "CLAUDE_CONFIG_DIR", ...import_chunk_2mwkxzk6.MZa];
function p6o(r) {
  let t = {};
  for (let o of n) {
    let e = r[o];
    if (e !== void 0) t[o] = e;
  }
  return t;
}
function gGl(r) {
  return (0, import_chunk_f9x2f6cx.Io)() === null ? r : { ...r, CLAUDE_CODE_DISABLE_FEATURE_FLAGS: "1" };
}
