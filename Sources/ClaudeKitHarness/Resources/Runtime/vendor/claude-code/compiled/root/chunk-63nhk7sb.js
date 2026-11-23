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
var chunk_63nhk7sb_exports = {};
__export(chunk_63nhk7sb_exports, {
  M8l: () => M8l,
  e2o: () => e2o,
  t2o: () => t2o
});
module.exports = __toCommonJS(chunk_63nhk7sb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_6k9zs54e = require("/$bunfs/root/chunk-6k9zs54e.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_path = __toESM(require("path"));
(0, import_chunk_adx6804h.B)();
async function e2o({ tool: e, input: n, id: s, toolUseContext: l, canUseTool: m = import_chunk_bzyb60p0.xk, recordsRefusal: a = false, synthesizedBy: d }) {
  let f = structuredClone(n), g = { type: "tool_use", id: s, name: e.name, input: n, caller: { type: "direct" } }, T, o = false, r = [];
  for await (let y of (0, import_chunk_bzyb60p0.Y$)(g, (0, import_chunk_bzyb60p0.La)({ content: "", isVirtual: true }), d === void 0 ? m : (t, h, w, I, _, ...U) => m(t, h, _ === s && (0, import_chunk_z688m88d.Zt)(h, f) ? { ...w, synthesizedBy: d } : w, I, _, ...U), { ...l, innerCall: true, options: { ...l.options, tools: l.options.tools.map((t) => t.name === e.name ? { ...t, maxResultSizeChars: 1 / 0 } : t) }, onPermissionDenial: (t, h, w) => {
    if (h !== s || l.abortController.signal.aborted) return;
    if (o = true, a) l.onPermissionDenial?.(t, h, w);
  }, localDenialTracking: (0, import_chunk_bzyb60p0.a5)() }, () => (/* @__PURE__ */ new Date()).toISOString())) {
    if ((0, import_chunk_bzyb60p0.IO)(y)) continue;
    let { message: t } = y;
    if (t.type === "attachment") {
      if (t.attachment.type !== "hook_deferred_tool") r.push(t);
    } else if (t.type === "user" && Array.isArray(t.message.content) && t.message.content.some((h) => h.type === "tool_result" && h.tool_use_id === s)) T = t;
  }
  return { result: T, attachments: r, checkFailed: o };
}
var k = 4, M = 15e3, C = 200, P = (e) => `${import_chunk_hn3cwwzt.Vj}: ${(0, import_chunk_f64qna2j.Us)(e, C, true)} was not shown. ${import_chunk_k883m4fq.De} it if you still need it.`, S = (e) => `${import_chunk_hn3cwwzt.Vj}: ${(0, import_chunk_f64qna2j.Us)(e, C, true)} was not shown: its permission check did not pass. ${import_chunk_k883m4fq.De} it if you still need it.`, R = `${import_chunk_hn3cwwzt.Vj}: no pictures were shown, because the command is still running in the background. ${import_chunk_k883m4fq.De} them when it has finished.`, v = `${import_chunk_hn3cwwzt.Vj}: no pictures were shown, because the list was too long. ${import_chunk_k883m4fq.De} the ones you need.`, N = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ file: (0, import_chunk_adx6804h.c)({ dimensions: (0, import_chunk_adx6804h.c)({ originalWidth: (0, import_chunk_adx6804h.E)().optional(), originalHeight: (0, import_chunk_adx6804h.E)().optional(), displayWidth: (0, import_chunk_adx6804h.E)().optional(), displayHeight: (0, import_chunk_adx6804h.E)().optional() }) }) }));
function L(e) {
  return import_path.default.isAbsolute(e) && import_chunk_k883m4fq.RXe.has(import_path.default.extname(e).slice(1).toLowerCase());
}
async function O(e, n, s, l, m, a, d) {
  let f = (0, import_chunk_4vsz8a99.tn)(s.options.tools, import_chunk_k883m4fq.De);
  if (f === void 0 || !L(e)) return [];
  let { result: g, attachments: T, checkFailed: o } = await e2o({ tool: f, input: { file_path: e }, id: `${s.toolUseId}_view_${n}`, toolUseContext: s, recordsRefusal: true, canUseTool: d });
  if (l.push(...T), o) m.add(e);
  let r = g?.message.content, y = Array.isArray(r) ? r.find((w) => w.type === "tool_result") : void 0;
  if (y?.is_error === true || !Array.isArray(y?.content) || !y.content.every((w) => w.type === "image")) return [];
  let t = N().safeParse(g?.toolUseResult), h = t.success && (0, import_chunk_fbqj9ad4.Yne)(t.data.file.dimensions);
  if (h) a[n] = h;
  return y.content;
}
async function F(e, n, s, l) {
  let m = [], a = /* @__PURE__ */ new Set(), d = [], f = e.slice(0, n), g = f.map(() => []), T;
  try {
    let o = (0, import_chunk_cbnm4p23.sd)(s.abortController);
    T = setTimeout((r) => r.abort(), M, o), g = await Promise.all(f.map((r, y) => O(r, y, { ...s, abortController: o }, m, a, d, l).catch((t) => ((0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(t)), []))));
  } catch (o) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
  } finally {
    clearTimeout(T);
  }
  return { viewedImages: { blocks: g.flat(), notes: [...f.filter((o, r) => g[r]?.length === 0).map((o) => a.has(o) ? S(o) : P(o)), ...e.length > n ? [`${import_chunk_hn3cwwzt.Vj}: only the first ${n} were looked at. ${import_chunk_k883m4fq.De} the others if you still need them.`] : []] }, shown: f.filter((o, r) => g[r]?.length !== 0), newMessages: [...m, ...d.filter(Boolean).map((o) => (0, import_chunk_bzyb60p0.Me)({ content: o, isMeta: true }))] };
}
function A(e, n, s) {
  (0, import_chunk_cqa9hrgx.u)("bash_view_images", { asked_count: e === import_chunk_6k9zs54e.LG ? 0 : e.length, shown_count: n, wait_ms: Math.round(s) });
}
function t2o(e, { checksFirst: n = false } = {}) {
  let s = Promise.resolve();
  return async (l, m, a, d, f, g) => {
    if (g !== void 0) return g;
    let T = (0, import_chunk_bz1f2qnq.Z)(a).shouldAvoidPermissionPrompts === true;
    if (e === void 0 || n || !T || (0, import_chunk_bzyb60p0.JL)()) {
      let o = s.then(() => (0, import_chunk_bzyb60p0.xk)(l, m, { ...a, permissionRound: void 0 }, d, f)).finally(() => a.session.outsideReadPrompt.closeFor(f));
      s = Promise.allSettled([o]);
      let r = await o;
      if (r.behavior !== "allow" || e === void 0) return r;
    }
    return e(l, m, T ? a : { ...a, permissionLayers: [...a.permissionLayers ?? [], { kind: "avoid_prompts" }] }, d, f);
  };
}
async function M8l({ named: e, output: n, toolUseContext: s, canUseTool: l }) {
  let m = { shown: [], newMessages: [] };
  if (n.backgroundTaskId !== void 0) return A(e, 0, 0), { ...m, viewedImages: { blocks: [], notes: [R] } };
  if (n.interrupted === true || n.timedOutAfterMs !== void 0 || s.abortController.signal.aborted) return A(e, 0, 0), m;
  if (e === import_chunk_6k9zs54e.LG) return A(e, 0, 0), { ...m, viewedImages: { blocks: [], notes: [v] } };
  let a = performance.now(), d = await F(e, n.isImage === true ? k - 1 : k, { ...s, requestDialog: void 0, preserveToolUseResults: true }, t2o(l));
  return A(e, d.viewedImages.blocks.length, performance.now() - a), d;
}
