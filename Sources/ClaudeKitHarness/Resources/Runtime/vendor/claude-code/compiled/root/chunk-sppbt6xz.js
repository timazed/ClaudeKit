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
var chunk_sppbt6xz_exports = {};
__export(chunk_sppbt6xz_exports, {
  OG: () => OG,
  s1: () => s1
});
module.exports = __toCommonJS(chunk_sppbt6xz_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
class c {
  latched = void 0;
  v1Selected = false;
  latch(e, o) {
    this.latched = e, this.v1Selected = o;
  }
  reset() {
    this.latched = void 0, this.v1Selected = false;
  }
}
var r = (0, import_chunk_t57w17k7.de)(new c(), (e) => e.reset());
function OG() {
  if (r.latched !== void 0) return r.latched;
  let e = import_chunk_c203g5kd.s.MCP_SDK_GENERATION, o = e === "v1" || e === "v2" ? e : void 0;
  if (e !== void 0 && o === void 0) (0, import_chunk_w578pjby.t)(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`, { level: "warn" });
  let i = o ?? "v2", n = "v2", d = o === void 0 ? "default" : i === n ? "env" : "env_v1_compat";
  if (r.latch(n, i === "v1"), i !== n) (0, import_chunk_w578pjby.t)("The v1 MCP client was selected, but this build has only the v2 client. It uses the older handshake and relaxed sign-in checks.", { level: "warn" });
  return (0, import_chunk_w578pjby.t)(`mcp runtime arm: ${n} (source: ${d})`), (0, import_chunk_y53wbr8a.a)("tengu_mcp_sdk_generation", { generation: (0, import_chunk_78g0060s.f)(n), source: (0, import_chunk_78g0060s.f)(d) }), n;
}
function s1() {
  return OG(), r.v1Selected;
}
