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
var chunk_cx3m3vmr_exports = {};
__export(chunk_cx3m3vmr_exports, {
  SVo: () => SVo,
  aqe: () => aqe
});
module.exports = __toCommonJS(chunk_cx3m3vmr_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_nn296t4g = require("/$bunfs/root/chunk-nn296t4g.js");
var aqe = "cc-plugin-you-should-know";
var SVo = { id: "you-should-know-plugin", providerAgnostic: true, advertisedCommand: "plugin", cooldownSessions: 10, maxLifetimeShows: 3, content: async (o) => `Want a side agent watching your back while Claude works? Turn on You should know:
${(0, import_chunk_nn296t4g.ls)("suggestion", o.theme)(`/plugin enable ${aqe}@${import_chunk_xcgcdx61.Ds}`)}`, isRelevant: async () => (0, import_chunk_vfyns8ja.GGt)(aqe) && (0, import_chunk_vfyns8ja.iI)(aqe)?.defaultEnabled === false && (0, import_chunk_vfyns8ja.zGt)(`${aqe}@${import_chunk_xcgcdx61.Ds}`) === void 0 };
