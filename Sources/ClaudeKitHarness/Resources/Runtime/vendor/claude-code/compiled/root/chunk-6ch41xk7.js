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
var chunk_6ch41xk7_exports = {};
__export(chunk_6ch41xk7_exports, {
  LEl: () => LEl
});
module.exports = __toCommonJS(chunk_6ch41xk7_exports);
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
function LEl(e) {
  if (!Object.hasOwn(e, import_chunk_xzvhvaa2.xFe)) return { tier: e, organization: null, memberLost: false };
  {
    let n = require("/$bunfs/root/chunk-r56k3e76.js");
    return n.takeFreeFormSettingsFromHostTier(e);
  }
  let { [import_chunk_xzvhvaa2.xFe]: t, ...r } = e;
  return { tier: r, organization: null, memberLost: false };
}
