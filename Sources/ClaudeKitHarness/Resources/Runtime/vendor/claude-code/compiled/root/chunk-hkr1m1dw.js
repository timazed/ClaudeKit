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
var chunk_hkr1m1dw_exports = {};
__export(chunk_hkr1m1dw_exports, {
  bTa: () => bTa
});
module.exports = __toCommonJS(chunk_hkr1m1dw_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
function bTa(e, n) {
  let a = (0, import_chunk_xcgcdx61.QR)().safeParse(n.dangerouslyDisableSandbox);
  if (a.success && a.data) return { deniedFlag: "dangerouslyDisableSandbox", message: `unsandboxed execution (dangerouslyDisableSandbox) is not available to ${e}. If the command failed with a sandbox violation, the operation cannot be performed in this context \u2014 do not retry it.` };
  let o = (0, import_chunk_xcgcdx61.QR)().safeParse(n.run_in_background);
  if (o.success && o.data) return { deniedFlag: "run_in_background", message: `run_in_background is not available to ${e} \u2014 run the command in the foreground.` };
  return { sanitizedInput: { ...n, dangerouslyDisableSandbox: false, run_in_background: false } };
}
