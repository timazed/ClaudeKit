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
var chunk_8kp03twd_exports = {};
__export(chunk_8kp03twd_exports, {
  AIi: () => AIi,
  Jae: () => Jae,
  dms: () => dms
});
module.exports = __toCommonJS(chunk_8kp03twd_exports);
var Jae = "Remote Control is disabled by your organization's policy (managed setting `disableRemoteControl`).", dms = "Couldn't verify your organization's Remote Control policy. Retry, or run `claude doctor` for details.", AIi = "Remote Control was turned off by your organization's policy.";
