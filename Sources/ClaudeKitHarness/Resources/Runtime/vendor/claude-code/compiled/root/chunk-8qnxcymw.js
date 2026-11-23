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
var chunk_8qnxcymw_exports = {};
__export(chunk_8qnxcymw_exports, {
  xnr: () => xnr
});
module.exports = __toCommonJS(chunk_8qnxcymw_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
function xnr({ isNonInteractiveSession: e = false, settings: o = (0, import_chunk_2yx6c1y2.zr)() ?? {}, ignoreProjectModePick: n } = {}) {
  return (0, import_chunk_k67pwqya.UBn)({ cli: { isNonInteractiveSession: e }, env: { CLAUDE_CODE_REMOTE: import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? "1" : void 0, CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT ? "1" : void 0, USER_TYPE: "external" }, settings: o, ignoreProjectModePick: n });
}
