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
var chunk_54cc3p46_exports = {};
__export(chunk_54cc3p46_exports, {
  default: () => chunk_54cc3p46_default
});
module.exports = __toCommonJS(chunk_54cc3p46_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var i = (0, import_chunk_w1d7ygsk.V)(function(t) {
  Object.defineProperty(t, "__esModule", { value: true });
  t.getMachineId = void 0;
  var e = (0, import_chunk_xfj2cwfv._u)();
  async function n() {
    e.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  t.getMachineId = n;
});
var chunk_54cc3p46_default = i();
