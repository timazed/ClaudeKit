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
var chunk_fz05fj2e_exports = {};
__export(chunk_fz05fj2e_exports, {
  workflowPermissionDialog: () => s
});
module.exports = __toCommonJS(chunk_fz05fj2e_exports);
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
var s = (0, import_chunk_h485hv2e.ds)({ kind: "permission_workflow", payload: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_8tg38aha.Ew)((o) => typeof o === "object" && o !== null && "requestId" in o && "toolName" in o && "permissionResult" in o && "script" in o)), result: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_8tg38aha.Ew)((o) => typeof o === "object" && o !== null && "behavior" in o)), default: { behavior: "cancelled" } });
