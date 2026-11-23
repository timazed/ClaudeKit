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
var chunk_ztmmf1hr_exports = {};
__export(chunk_ztmmf1hr_exports, {
  CONTINUE_NOTIFICATION: () => t,
  projectContinuePermissionDialog: () => r
});
module.exports = __toCommonJS(chunk_ztmmf1hr_exports);
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
var t = "Claude wants to send this session\u2019s work to a Claude Project", r = (0, import_chunk_h485hv2e.ds)({ kind: "permission_continue_in_projects", payload: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_8tg38aha.Ew)((e) => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e)), result: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_8tg38aha.Ew)((e) => typeof e === "object" && e !== null && "behavior" in e)), default: { behavior: "cancelled" } });
