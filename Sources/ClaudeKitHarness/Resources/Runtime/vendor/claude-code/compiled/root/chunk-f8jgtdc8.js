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
var chunk_f8jgtdc8_exports = {};
__export(chunk_f8jgtdc8_exports, {
  XIt: () => XIt,
  _Wo: () => _Wo
});
module.exports = __toCommonJS(chunk_f8jgtdc8_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
async function XIt(n, e) {
  return (await _Wo(n, e))?.tags ?? null;
}
async function _Wo(n, e) {
  try {
    let s = e.getAccessToken ? await e.getAccessToken() : void 0, { getBridgeSessionOrStatus: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xjn4hrkg.js"))), { session: r } = await i(n, { baseUrl: e.baseUrl, ...s && { getAccessToken: () => s }, credentials: e.credentials, useV2: true });
    if (!r || !Array.isArray(r.tags)) return null;
    let a = typeof r.created_at === "string" ? Date.parse(r.created_at) : Number.NaN;
    return { tags: r.tags, createdAtMs: Number.isNaN(a) ? void 0 : a };
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`[bridge:session] session tag read failed: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: "warn" }), null;
  }
}
