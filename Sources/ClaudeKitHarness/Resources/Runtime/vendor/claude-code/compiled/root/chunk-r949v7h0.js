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
var chunk_r949v7h0_exports = {};
__export(chunk_r949v7h0_exports, {
  FG: () => FG,
  UEr: () => UEr,
  hSl: () => hSl
});
module.exports = __toCommonJS(chunk_r949v7h0_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var i = __toESM(require("fs/promises"));
function UEr() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND;
  if (e === "byoc" || e === "anthropic_cloud") return e;
  return null;
}
function FG(e, r) {
  return Boolean(e) && (!r || r === "anthropic_cloud");
}
async function hSl() {
  if (!FG(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID, import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND)) return;
  try {
    let e = [(0, import_chunk_6mfepmbb.eP)(), (0, import_chunk_6mfepmbb.tge)()];
    await Promise.all(e.map((r) => i.mkdir(r).catch((o) => {
      let n = (0, import_chunk_jv7av99m.w)(o);
      if (n !== "EEXIST" && n !== "ENOENT") (0, import_chunk_42tcgre6.q)("warn", "user_data_roots_mkdir_failed", { code: n ?? "unknown" });
    })));
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`uploads and outputs directories not created: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
  }
}
