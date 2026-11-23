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
var chunk_thj6vbn4_exports = {};
__export(chunk_thj6vbn4_exports, {
  K2: () => K2,
  h6: () => h6,
  kDt: () => kDt
});
module.exports = __toCommonJS(chunk_thj6vbn4_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
function n() {
  try {
    return (0, import_chunk_zddv3vvj.nZ)() && (0, import_chunk_z2xw6net.fSr)();
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), true;
  }
}
function K2(r) {
  try {
    let o = (0, import_chunk_865at33z.ce)(), e = o.hookRegistrationEpoch !== r.epoch || o.loadedModules !== r.modules;
    return r.wasUnknown || n() || e && (0, import_chunk_hrmqj4hy.tX)() && (0, import_chunk_z2xw6net.fSr)();
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), true;
  }
}
function kDt({ isRunReached: r }) {
  try {
    return n() || (0, import_chunk_865at33z.ce)().loadedModules.some((o) => !(0, import_chunk_59mwkeke.yd)(o) && (0, import_chunk_vcnr02by.IYe)(o.args.pluginStorageId) && (o.hooks("prompt.submit") || !r && o.hooks("command.run")));
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), true;
  }
}
function h6() {
  let r = (0, import_chunk_865at33z.ce)();
  return { wasUnknown: n(), epoch: r.hookRegistrationEpoch, modules: r.loadedModules };
}
