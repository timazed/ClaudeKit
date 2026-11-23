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
var chunk_r7skfyeq_exports = {};
__export(chunk_r7skfyeq_exports, {
  OZ: () => OZ,
  Pji: () => Pji
});
module.exports = __toCommonJS(chunk_r7skfyeq_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
async function OZ() {
  try {
    let s = t();
    if (s.length > 0) await Promise.race([Promise.allSettled(s), (0, import_chunk_5appeerh.K)(200)]), s.length = 0;
    let [{ settle1PEventLoggingBeforeExit: e, shutdown1PEventLogging: r }, { shutdownDatadog: n }, { shutdownErrorTracking: a }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5nyv269y.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xt5b4m8b.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s3nvydpc.js")))]), i = e(), c = [r(), n(), a()];
    await Promise.race([Promise.all(c), (0, import_chunk_5appeerh.K)(500)]), await i;
  } catch {
  }
}
class o {
  tasks = [];
}
var u = new import_chunk_2904xtvq.j(() => new o());
function t() {
  return (0, import_chunk_f9x2f6cx.kr)(u).tasks;
}
function Pji(s) {
  t().push(s.catch(() => {
  }));
}
