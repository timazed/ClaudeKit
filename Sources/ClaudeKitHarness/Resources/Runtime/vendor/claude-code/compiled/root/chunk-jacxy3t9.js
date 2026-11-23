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
var chunk_jacxy3t9_exports = {};
__export(chunk_jacxy3t9_exports, {
  default: () => chunk_jacxy3t9_default
});
module.exports = __toCommonJS(chunk_jacxy3t9_exports);
var import_chunk_8ttkntne = require("/$bunfs/root/chunk-8ttkntne.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var u = (0, import_chunk_w1d7ygsk.V)(function(n) {
  Object.defineProperty(n, "__esModule", { value: true });
  n.getMachineId = void 0;
  var r = (0, import_chunk_w1d7ygsk.ft)("fs"), i = (0, import_chunk_8ttkntne.CCr)(), t = (0, import_chunk_xfj2cwfv._u)();
  async function c() {
    try {
      return (await r.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    try {
      return (await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  n.getMachineId = c;
});
var chunk_jacxy3t9_default = u();
