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
var chunk_gt1m9nqp_exports = {};
__export(chunk_gt1m9nqp_exports, {
  FEs: () => FEs,
  NEs: () => NEs,
  Szi: () => Szi,
  yzi: () => yzi
});
module.exports = __toCommonJS(chunk_gt1m9nqp_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
function yzi(e = FEs) {
  let o = import_chunk_c203g5kd.s.CLAUDE_CODE_HOVER_REST;
  if (o === void 0) return;
  if (NEs(o) !== "pinned") return;
  return { backend: (0, import_chunk_m15w38ag.ne)() ? e() : void 0, configHome: (0, import_chunk_2gtmjt3y.Nl)() };
}
function Szi(e) {
  let o = (0, import_chunk_m15w38ag.ne)() ? e.backend : void 0;
  if (o === void 0) return;
  if (!(0, import_chunk_2gtmjt3y.qOe)(e.configHome)) {
    let r = (0, import_chunk_2gtmjt3y.Nl)();
    (0, import_chunk_w578pjby.t)(r !== null && e.configHome !== null ? `CLAUDE_CONFIG_DIR now names ${r}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access` : `The v5 storage backend is not used: the config home was ${e.configHome ?? "absent"} when it was built at start-up and is ${r ?? "absent"} now`, { level: "warn" });
    return;
  }
  return o;
}
function NEs(e) {
  if (typeof e !== "boolean") (0, import_chunk_w578pjby.t)(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`, { level: "warn" });
  let o = (0, import_chunk_m15w38ag.Hjl)(e);
  if (o === "conflict") (0, import_chunk_w578pjby.t)(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`, { level: "warn" });
  return o;
}
function FEs() {
  if (!(0, import_chunk_m15w38ag.ne)()) return;
  return;
}
