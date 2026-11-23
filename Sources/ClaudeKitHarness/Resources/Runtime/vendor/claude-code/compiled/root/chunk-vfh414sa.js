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
var chunk_vfh414sa_exports = {};
__export(chunk_vfh414sa_exports, {
  RRn: () => RRn,
  cBa: () => cBa,
  uBa: () => uBa
});
module.exports = __toCommonJS(chunk_vfh414sa_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ server_instructions: (0, import_chunk_adx6804h.n)().optional(), server_instructions_by_server: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional(), tools: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional(), search_hints: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional(), param_descriptions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)())).optional(), prompts: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional(), skills: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() })), g = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()));
function RRn(e) {
  if (!e.pluginSource) return;
  let { name: r, marketplace: i } = (0, import_chunk_xcgcdx61.Kn)(e.pluginSource);
  if (!(0, import_chunk_xcgcdx61.iu)(i) && !(0, import_chunk_xcgcdx61.KKt)(r, i)) return;
  let u = (0, import_chunk_865at33z.b)("tengu_official_plugin_prompt_overrides", {}), o = g().safeParse(u);
  if (!o.success) {
    (0, import_chunk_w578pjby.t)("tengu_official_plugin_prompt_overrides: GB payload is not an object; ignoring", { level: "error" });
    return;
  }
  let f = o.data[r];
  if (f === void 0) return;
  let d = l().safeParse(f);
  if (!d.success) {
    (0, import_chunk_w578pjby.t)(`tengu_official_plugin_prompt_overrides: entry for '${r}' failed schema (${d.error.issues[0]?.message}); using baked-in text`, { level: "error" });
    return;
  }
  let s = d.data;
  if (Object.keys(s).length === 0) return;
  return { ...s, server_instructions_by_server: a(s.server_instructions_by_server), tools: a(s.tools), search_hints: a(s.search_hints), param_descriptions: a(s.param_descriptions), prompts: a(s.prompts), skills: a(s.skills) };
}
function a(e) {
  if (e === void 0) return;
  let r = /* @__PURE__ */ Object.create(null);
  return Object.assign(r, e);
}
function cBa(e, r) {
  if (!e) return;
  let i = e.server_instructions_by_server;
  if (i) {
    let u = (0, import_chunk_px0hhsq7.hOe)(r), o = u && i[u.serverName];
    if (o !== void 0) return o;
  }
  return e.server_instructions;
}
function uBa(e, r) {
  if (!r || !e.properties) return e;
  let i = { ...e.properties }, u = false;
  for (let [o, f] of Object.entries(r)) {
    let d = i[o];
    if (d !== null && typeof d === "object") i[o] = { ...d, description: f }, u = true;
  }
  if (!u) return e;
  return { ...e, properties: i };
}
