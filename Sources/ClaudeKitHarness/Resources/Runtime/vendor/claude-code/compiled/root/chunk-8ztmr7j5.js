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
var chunk_8ztmr7j5_exports = {};
__export(chunk_8ztmr7j5_exports, {
  default: () => chunk_8ztmr7j5_default
});
module.exports = __toCommonJS(chunk_8ztmr7j5_exports);
var import_chunk_8ttkntne = require("/$bunfs/root/chunk-8ttkntne.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var o = (0, import_chunk_w1d7ygsk.V)(function(c) {
  Object.defineProperty(c, "__esModule", { value: true });
  c.getMachineId = void 0;
  var i = (0, import_chunk_8ttkntne.CCr)(), n = (0, import_chunk_xfj2cwfv._u)();
  async function u() {
    try {
      let t = (await i.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((d) => d.includes("IOPlatformUUID"));
      if (!t) return;
      let r = t.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (e) {
      n.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  c.getMachineId = u;
});
var chunk_8ztmr7j5_default = o();
