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
var chunk_fe5esh7d_exports = {};
__export(chunk_fe5esh7d_exports, {
  Efo: () => Efo,
  Jus: () => Jus,
  QSe: () => QSe,
  Qus: () => Qus,
  Rwt: () => Rwt,
  TA: () => TA,
  Xus: () => Xus,
  ZRi: () => ZRi,
  aal: () => aal,
  dal: () => dal,
  ial: () => ial,
  lal: () => lal,
  n_r: () => n_r,
  sal: () => sal,
  spe: () => spe,
  tM: () => tM,
  tj: () => tj,
  vfo: () => vfo
});
module.exports = __toCommonJS(chunk_fe5esh7d_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var S = ["announced", "inline"];
function n_r() {
  return (0, import_chunk_865at33z.Hc)();
}
var A = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ systemPrompt: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), tools: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)(), schema: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), server: (0, import_chunk_adx6804h.n)().optional() })).optional(), cliPrefix: (0, import_chunk_adx6804h.n)().optional(), reminderFold: (0, import_chunk_adx6804h.P)().optional().catch(void 0), systemTurns: (0, import_chunk_adx6804h.P)().optional().catch(void 0), toolChangeHeader: (0, import_chunk_adx6804h.P)().optional().catch(void 0), inlineTools: (0, import_chunk_adx6804h.P)().optional().catch(void 0), keptReminders: (0, import_chunk_adx6804h.P)().optional().catch(void 0), toolResultSafeguards: (0, import_chunk_adx6804h.P)().optional().catch(void 0), systemTurnsAnsweredBy: (0, import_chunk_adx6804h.n)().optional().catch(void 0), projectDocsAsDocuments: (0, import_chunk_adx6804h.P)().optional().catch(void 0), effortAfterText: (0, import_chunk_adx6804h.P)().optional().catch(void 0), leadingTools: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().catch(void 0), echoWireToolInputs: (0, import_chunk_adx6804h.P)().optional().catch(void 0), contextRendering: (0, import_chunk_adx6804h.F)(S).optional().catch(void 0) }));
function Efo(e) {
  return { ...e?.systemTurns !== void 0 && { systemTurns: e.systemTurns }, ...e?.toolChangeHeader !== void 0 && { toolChangeHeader: e.toolChangeHeader }, ...e?.inlineTools !== void 0 && { inlineTools: e.inlineTools }, ...e?.keptReminders !== void 0 && { keptReminders: e.keptReminders }, ...e?.toolResultSafeguards !== void 0 && { toolResultSafeguards: e.toolResultSafeguards }, ...e?.systemTurnsAnsweredBy !== void 0 && { systemTurnsAnsweredBy: e.systemTurnsAnsweredBy }, ...e?.projectDocsAsDocuments !== void 0 && { projectDocsAsDocuments: e.projectDocsAsDocuments }, ...e?.effortAfterText !== void 0 && { effortAfterText: e.effortAfterText }, ...e?.leadingTools !== void 0 && { leadingTools: e.leadingTools } };
}
function sal(e) {
  return e?.systemTurnsAnsweredBy === void 0 ? e : { ...e, systemTurnsAnsweredBy: void 0 };
}
var M = /* @__PURE__ */ new Set(["prompt_snapshot", "prompt_render_point", "deferred_tools_record", "tool_offer_record"]);
function ial(e) {
  return e.filter((t) => t.type !== "attachment" || !M.has(t.attachment.type));
}
function Rwt(e) {
  return e.type === "attachment" && e.attachment.type === "prompt_snapshot";
}
function w(e) {
  return e.type === "attachment" && e.attachment.type === "prompt_render_point";
}
var R = /* @__PURE__ */ new WeakMap();
function TA(e) {
  let t = e.findLast(Rwt)?.attachment;
  if (t === void 0) return;
  let m = R.get(t);
  if (m) return m;
  let o = A().safeParse(t).data;
  if (!o) return;
  let a = o.tools ?? [], d = (0, import_chunk_4mh8nmh5.Sl)(o.systemPrompt), l = { record: t, systemPrompt: d, systemPromptHash: vfo(d), toolDescriptions: new Map(a.map((r) => [r.name, r.description])), toolEntries: new Map(a.flatMap((r) => r.schema !== void 0 && (0, import_chunk_gz6chcf8.mal)(r.schema) ? [[r.name, r.schema]] : [])), toolServers: new Map(a.flatMap((r) => r.server === void 0 ? [] : [[r.name, r.server]])), cliPrefix: o.cliPrefix !== void 0 && (0, import_chunk_4mh8nmh5.ngo)(o.cliPrefix) ? o.cliPrefix : void 0, reminderFold: o.reminderFold, wireShape: Efo(o), echoWireToolInputs: o.echoWireToolInputs, contextRendering: o.contextRendering };
  return R.set(t, l), l;
}
function spe(e, t) {
  return QSe(t) && !Jus(e) ? TA(e) : void 0;
}
function tM(e, t) {
  return QSe(t) ? TA(e) : void 0;
}
function Xus(e, t) {
  return [...e.toolDescriptions].flatMap(([m, o]) => {
    if (t?.has(m)) return [];
    let a = e.toolEntries.get(m), d = e.toolServers.get(m);
    return [{ name: m, description: o, ...a && { schema: a }, ...d !== void 0 && { server: d } }];
  });
}
function aal() {
  return { type: "prompt_render_point", cause: "set_model_system_prompt" };
}
function Jus(e) {
  return e.findLastIndex(w) > e.findLastIndex(Rwt);
}
var z = /\b(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day, (?:January|February|March|April|May|June|July|August|September|October|November|December) \d{2}, \d{4}\b/g;
function g(e) {
  return e.replace(z, "Thursday, January 01, 1970");
}
function Qus(e, t, m = false) {
  try {
    let o = TA(e), a = typeof t === "string" ? (0, import_chunk_4mh8nmh5.T1n)(t) : t;
    if (o === void 0 || a === void 0 || a.length === 0) return false;
    if (a.every((l) => o.systemPrompt.includes(l))) return true;
    if (!m) return false;
    let d = o.systemPrompt.map(g);
    return a.every((l) => d.includes(g(l)));
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
var E = ["above_static_line", "between_lines", "below_boundary"];
function lal(e, t, m = false) {
  let o = TA(e);
  if (o === void 0) return { changed_part_kind: "other" };
  let a = typeof t === "string" ? (0, import_chunk_4mh8nmh5.T1n)(t) : t ?? [], d = a.indexOf(import_chunk_xcgcdx61.bD), l = o.systemPrompt.indexOf(import_chunk_xcgcdx61.bD);
  if (d === -1 || l === -1) return { changed_part_kind: "whole" };
  let r = b(a, d, m), f = b(o.systemPrompt, l, m), [u, ...x] = E.filter((h) => r[h] !== f[h]);
  if (u === void 0) return { changed_part_kind: "other" };
  if (x.length > 0) return { changed_part_kind: r.above_static_line === f.above_static_line ? "both_lower_parts" : "several" };
  let y = r[u].length - f[u].length;
  return y === 0 ? { changed_part_kind: u, length_change_kind: "same_length" } : { changed_part_kind: u, length_change_kind: y > 0 ? "longer" : "shorter", length_change: Math.abs(y) };
}
function ZRi(e) {
  return e.filter(Rwt).map((t) => t.uuid);
}
var D = "user_memory";
function _(e, t) {
  let m = `</${t}>`, o = [`<${t}>`, `<${t} `].map((l) => e?.indexOf(l) ?? -1).filter((l) => l !== -1), a = o.length === 0 ? -1 : Math.min(...o), d = e?.lastIndexOf(m) ?? -1;
  return a === -1 || d < a ? void 0 : e?.slice(a, d + m.length);
}
function dal(e, t, m) {
  try {
    let o = TA(e);
    if (o === void 0 || Jus(e)) return;
    let a = o.systemPrompt.at(-1);
    for (let d of m) {
      let l = _(t, d), r = _(a, d);
      if (d === D && l !== void 0 && r !== void 0) continue;
      if (l !== r) return r === void 0 ? "appeared" : l === void 0 ? "vanished" : "changed";
    }
    return;
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function QSe(e) {
  if (e.systemPromptSnapshot === false) return false;
  return e.systemPromptSnapshot === true || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg" || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || !(0, import_chunk_ge3qft6b.HRe)();
}
function vfo(e) {
  return (0, import_chunk_myvyhcm0.Zn)(e.join("\0"));
}
var O = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ entries: (0, import_chunk_adx6804h.oc)((e) => Array.isArray(e)), nameOnlyAnnouncements: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), strippedReferences: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), toolInputCopies: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).optional().catch(void 0) })), I = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), copy: (0, import_chunk_adx6804h.F)(["wire", "displayed"]) }));
function k(e) {
  return e.type === "attachment" && e.attachment.type === "deferred_tools_record";
}
function tj(e) {
  let t = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
  try {
    for (let d of e) {
      if (!k(d)) continue;
      let l = O().safeParse(d.attachment).data;
      for (let r of l?.entries ?? []) if ((0, import_chunk_ma3kja9f.T)(r)) {
        let f = r.name;
        if (typeof f === "string") t.set(f, r);
      }
      for (let r of l?.nameOnlyAnnouncements ?? []) m.add(r);
      for (let r of l?.strippedReferences ?? []) o.add(r);
      for (let r of l?.toolInputCopies ?? []) {
        let f = I().safeParse(r).data;
        if (f !== void 0) a.set(f.id, f.copy);
      }
    }
  } catch (d) {
    (0, import_chunk_k449cc64.i)(d), t.clear(), m.clear(), o.clear(), a.clear();
  }
  return { entries: t, nameOnlyAnnouncements: m, strippedReferences: o, toolInputCopies: a };
}
function b(e, t, m) {
  let o = t === 0 ? "" : e[0] ?? "", a = (0, import_chunk_4mh8nmh5.T1n)(o, import_chunk_4mh8nmh5.v1n), d = a.indexOf(import_chunk_4mh8nmh5.v1n), l = { above_static_line: d === 0 ? "" : a[0] ?? "", between_lines: d === -1 ? "" : a[d + 1] ?? "", below_boundary: e[t + 1] ?? "" };
  return m ? (0, import_chunk_khxw3ng0.er)(l, g) : l;
}
