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
var chunk_tvq790h1_exports = {};
__export(chunk_tvq790h1_exports, {
  $Oi: () => $Oi,
  YUt: () => YUt,
  iin: () => iin
});
module.exports = __toCommonJS(chunk_tvq790h1_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var u = /^skill_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function $Oi(i) {
  return u.test(i);
}
var r = "skill_id";
function iin(i, e) {
  let o = {};
  if (typeof i === "string" && $Oi(i)) o.skillId = i;
  if (typeof e === "string" && (0, import_chunk_mgntjepj.Oxe)(e)) o.pluginId = e;
  return o.skillId === void 0 && o.pluginId === void 0 ? void 0 : o;
}
var d = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ [r]: (0, import_chunk_adx6804h.n)().regex(u).optional().catch(void 0), [import_chunk_mgntjepj.FTt]: (0, import_chunk_adx6804h.n)().regex(import_chunk_mgntjepj.pCs).optional().catch(void 0) })), a = 262144, _ = () => {
  return;
};
function YUt() {
  let i = import_chunk_c203g5kd.s.CLAUDE_CODE_SKILL_ATTRIBUTION;
  if (i === void 0) return _;
  let e = (0, import_chunk_mgntjepj.fCs)("CLAUDE_CODE_SKILL_ATTRIBUTION", i, a, f);
  return (o) => e.get((0, import_chunk_mgntjepj.Kwe)(o));
}
function f(i) {
  let e = d().safeParse(i);
  if (!e.success) {
    (0, import_chunk_w578pjby.t)("Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry: not a JSON object");
    return;
  }
  let o = iin(e.data[r], e.data[import_chunk_mgntjepj.FTt]);
  if (typeof i === "object" && i !== null) {
    for (let [l, S] of [[r, o?.skillId], [import_chunk_mgntjepj.FTt, o?.pluginId]]) if (l in i && S === void 0) (0, import_chunk_w578pjby.t)(`Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry field: invalid ${l}`);
  }
  return o;
}
