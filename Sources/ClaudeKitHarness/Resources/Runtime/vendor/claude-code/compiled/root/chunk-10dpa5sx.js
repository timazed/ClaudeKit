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
var chunk_10dpa5sx_exports = {};
__export(chunk_10dpa5sx_exports, {
  OCr: () => OCr
});
module.exports = __toCommonJS(chunk_10dpa5sx_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var OCr = (0, import_chunk_w1d7ygsk.V)(function(e) {
  Object.defineProperty(e, "__esModule", { value: true });
  e.HELPER_ARG_UNSAFE_MESSAGE = e.HELPER_BREAKOUT_FREE_RE = void 0;
  e.hasNoHelperBreakoutChars = o;
  e.HELPER_BREAKOUT_FREE_RE = /^[^"%\x00-\x1f]+$/;
  function o(r) {
    return e.HELPER_BREAKOUT_FREE_RE.test(r);
  }
  e.HELPER_ARG_UNSAFE_MESSAGE = 'must be non-empty and must not contain a double quote ("), a percent sign (%) or a control character (in a registry or plist JSON string, write each backslash as \\\\)';
});
