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
var chunk_1fryb3st_exports = {};
__export(chunk_1fryb3st_exports, {
  M9n: () => M9n,
  fOt: () => fOt
});
module.exports = __toCommonJS(chunk_1fryb3st_exports);
var M9n = "Sandbox required but unavailable", fOt = "sandbox.failIfUnavailable is set, but this session runs in Anthropic's cloud container, which has no command sandbox and isolates the session itself, so it starts anyway.";
