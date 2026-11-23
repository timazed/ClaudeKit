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
var chunk_4hz7p0re_exports = {};
__export(chunk_4hz7p0re_exports, {
  aer: () => aer
});
module.exports = __toCommonJS(chunk_4hz7p0re_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_q4y63y6c = require("/$bunfs/root/chunk-q4y63y6c.js");
async function aer(r, o) {
  if (!(0, import_chunk_q4y63y6c.oV)()) return;
  try {
    let e = await (0, import_chunk_9e5mdyfk.Is)(r, o);
    if (!e || !(0, import_chunk_9e5mdyfk.Wd)(e) || e.state === "stopped" || (0, import_chunk_9e5mdyfk.rv)(e)) return;
    await (0, import_chunk_9e5mdyfk.Hf)(r, { ...e, state: "stopped", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o);
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`stop not recorded on the job's row: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
  }
}
