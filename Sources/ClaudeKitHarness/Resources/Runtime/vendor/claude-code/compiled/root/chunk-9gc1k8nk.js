const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_9gc1k8nk_exports = {};
__export(chunk_9gc1k8nk_exports, {
  jBs: () => jBs
});
module.exports = __toCommonJS(chunk_9gc1k8nk_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
function jBs() {
  let t, o = false, r = () => {
    if ((0, import_chunk_d775ds6c.MT)()) o = true, Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cxmtqdes.js"))).then(({ createRemoteToolHostsRuntime: e }) => {
      t = e();
    }).catch((e) => {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), o = false;
    });
  }, s = void 0;
  if ((0, import_chunk_sjqze7qg.jYa)({ get remote() {
    if (!o) r();
    return t;
  }, ...s !== void 0 && { loopbackDev: s } }), (0, import_chunk_d775ds6c.MT)()) r();
}
