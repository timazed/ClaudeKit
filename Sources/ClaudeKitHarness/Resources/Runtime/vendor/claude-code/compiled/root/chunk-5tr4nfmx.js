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
var chunk_5tr4nfmx_exports = {};
__export(chunk_5tr4nfmx_exports, {
  UDt: () => UDt,
  ati: () => ati,
  kXl: () => kXl
});
module.exports = __toCommonJS(chunk_5tr4nfmx_exports);
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_t8bqgjer = require("/$bunfs/root/chunk-t8bqgjer.js");
var import_chunk_wwhjj2yk = require("/$bunfs/root/chunk-wwhjj2yk.js");
class r {
  reader = void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? false;
  }
}
var o = new r();
function ati(e) {
  o.register(e);
}
function UDt() {
  let e = (0, import_chunk_2zeyvjwb.zR)("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && (0, import_chunk_2zeyvjwb.uo)("hipaa")) return false;
  if ((0, import_chunk_t8bqgjer.Ott)()) return true;
  return (0, import_chunk_3t7ve0wy.Wu)() && (0, import_chunk_zhr7rpv7.jn)() && o.read();
}
function kXl(e) {
  if (!import_chunk_wwhjj2yk.zco.includes(e)) return true;
  return UDt();
}
