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
var chunk_wvxk15ee_exports = {};
__export(chunk_wvxk15ee_exports, {
  Egr: () => Egr,
  GLn: () => GLn,
  Gol: () => Gol,
  HAi: () => HAi,
  Kol: () => Kol,
  M$t: () => M$t,
  MAi: () => MAi,
  Tgr: () => Tgr,
  Vol: () => Vol,
  jol: () => jol,
  ouo: () => ouo,
  vgr: () => vgr,
  von: () => von,
  zLn: () => zLn,
  zol: () => zol
});
module.exports = __toCommonJS(chunk_wvxk15ee_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var d = "https://claude.ai/code/artifact/", jol = { read: null };
function GLn() {
  return (0, import_chunk_f9x2f6cx.Y)() && (0, import_chunk_865at33z.b)("tengu_inked_lantern", false) === true;
}
function zLn() {
  if (!(0, import_chunk_f9x2f6cx.Y)()) return false;
  let e = (0, import_chunk_865at33z.b)("tengu_inked_lantern", null);
  return typeof e === "boolean" ? e : (0, import_chunk_3t7ve0wy.Lw)();
}
function m(e) {
  return GLn() && e.some((o) => (0, import_chunk_4vsz8a99.gt)(o, import_chunk_bkfd2ttj._d)) ? e.find((o) => o.mcpInfo?.docsConnector === true && o.mcpInfo.toolName === import_chunk_qdcbcsg7.oJe)?.mcpInfo?.serverName : void 0;
}
function ouo(e, o) {
  return o.planDoc !== void 0 && M$t(o) === void 0 ? void 0 : m(e);
}
function M$t({ planDoc: e }) {
  return GLn() && e?.id !== void 0 ? { id: e.id, title: e.title } : void 0;
}
function Gol({ id: e }) {
  return `${d}${e}`;
}
function zol(e) {
  let o = typeof e === "string" && e.startsWith(d) ? e.slice(d.length) : void 0;
  return o !== void 0 && import_chunk_r8478wtb.yo.test(o) ? o : void 0;
}
function Egr({ id: e, title: o }) {
  return o === void 0 ? `the Claude Doc with the id ${e}` : `the Claude Doc "${o}"`;
}
function g(e) {
  return typeof e === "string" && e.trim() !== "" && e.length <= 200 && !/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e);
}
function vgr(e, o, r) {
  let { container: t, ref: i, batch: f = [] } = o;
  if (e.mcpInfo?.docsConnector !== true || r.agentId !== void 0 || !GLn() || m(r.options.tools) === void 0 || !(0, import_chunk_ma3kja9f.T)(t) || t.kind !== "project") return false;
  let u = (0, import_chunk_bz1f2qnq.Z)(r);
  if (u.planDoc !== void 0) {
    let l = M$t(u);
    if (l === void 0 || !s(t, ["kind", "id"]) || t.id !== l.id) return false;
    return e.mcpInfo.toolName === import_chunk_qdcbcsg7.Ihn ? s(o, ["container", "object", "payload", "verbose"]) && o.object === "utterance" : e.mcpInfo.toolName === import_chunk_qdcbcsg7.Gct && s(o, ["container", "ref", "payload", "engine", "verbose"]) && (0, import_chunk_ma3kja9f.T)(i) && s(i, ["object", "id"]) && i.object === "node";
  }
  let { create: a } = t;
  return e.mcpInfo.toolName === import_chunk_qdcbcsg7.oJe && s(o, ["container", "batch", "verbose"]) && Array.isArray(f) && f.length === 0 && s(t, ["kind", "create"]) && (0, import_chunk_ma3kja9f.T)(a) && s(a, ["name", "doc"]) && g(a.name) && (a.doc === void 0 || (0, import_chunk_ma3kja9f.T)(a.doc) && s(a.doc, ["markdown", "blocks"]));
}
function s(e, o) {
  return Object.keys(e).every((r) => o.includes(r));
}
(0, import_chunk_adx6804h.B)();
function von(e) {
  try {
    let o = new URL(e.url);
    return o.protocol === "https:" && (0, import_chunk_zhr7rpv7.md)(o.href) && o.pathname === import_chunk_qdcbcsg7.zct;
  } catch {
    return false;
  }
}
function MAi(e) {
  let { request_id: o } = (0, import_chunk_ddfyyyy7.Q8e)(e);
  return o === void 0 ? {} : { "anthropic/requestId": o };
}
var y = /* @__PURE__ */ new Set(["create", "update"]);
function Vol(e, o) {
  let r = e.mcpInfo;
  if (r === void 0 || r.scope !== "claudeai" || !y.has(r.toolName)) return false;
  let t = o.find((i) => i.name === r.serverName);
  return t !== void 0 && t.config.scope === "claudeai" && t.config.type === "claudeai-proxy" && von(t.config);
}
var A = 65536;
function HAi(e) {
  return e.length <= A && e.includes('"frame"');
}
function Kol(e) {
  for (let o of Tgr(e)) {
    if (!HAi(o)) continue;
    let r = (0, import_chunk_7cfjrnwy.nt)(o, `

`), t;
    try {
      t = (0, import_chunk_w578pjby.te)(r);
    } catch {
      continue;
    }
    let i = D(t);
    if (i !== null) return i;
  }
  return null;
}
var _ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ frame: (0, import_chunk_adx6804h.c)({ slug: (0, import_chunk_adx6804h.n)().regex(import_chunk_r8478wtb.yo) }) }));
function D(e) {
  let o = _().safeParse(e);
  return o.success ? o.data.frame.slug : null;
}
function* Tgr(e) {
  if (typeof e === "string") {
    yield e;
    return;
  }
  if (!Array.isArray(e)) return;
  for (let o of e) if (o !== null && typeof o === "object" && "type" in o && o.type === "text" && "text" in o && typeof o.text === "string") yield o.text;
}
