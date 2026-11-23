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
var chunk_tn1mf787_exports = {};
__export(chunk_tn1mf787_exports, {
  default: () => chunk_tn1mf787_default
});
module.exports = __toCommonJS(chunk_tn1mf787_exports);
var import_chunk_8ttkntne = require("/$bunfs/root/chunk-8ttkntne.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var d = (0, import_chunk_w1d7ygsk.V)(function(s) {
  Object.defineProperty(s, "__esModule", { value: true });
  s.getMachineId = void 0;
  var e = (0, import_chunk_w1d7ygsk.ft)("process"), n = (0, import_chunk_8ttkntne.CCr)(), c = (0, import_chunk_xfj2cwfv._u)();
  async function o() {
    let t = "%windir%\\System32\\REG.exe";
    if (e.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in e.env) t = "%windir%\\sysnative\\cmd.exe /c " + t;
    try {
      let i = (await n.execAsync(`${t} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");
      if (i.length === 2) return i[1].trim();
    } catch (r) {
      c.diag.debug(`error reading machine id: ${r}`);
    }
    return;
  }
  s.getMachineId = o;
});
var chunk_tn1mf787_default = d();
