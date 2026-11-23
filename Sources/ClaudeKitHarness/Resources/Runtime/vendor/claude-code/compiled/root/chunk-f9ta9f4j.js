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
var chunk_f9ta9f4j_exports = {};
__export(chunk_f9ta9f4j_exports, {
  default: () => chunk_f9ta9f4j_default
});
module.exports = __toCommonJS(chunk_f9ta9f4j_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var d = (0, import_chunk_w1d7ygsk.V)(function(i) {
  Object.defineProperty(i, "__esModule", { value: true });
  i.getMachineId = void 0;
  var t = (0, import_chunk_w1d7ygsk.ft)("fs"), r = (0, import_chunk_xfj2cwfv._u)();
  async function s() {
    let c = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let a of c) try {
      return (await t.promises.readFile(a, { encoding: "utf8" })).trim();
    } catch (e) {
      r.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  i.getMachineId = s;
});
var chunk_f9ta9f4j_default = d();
