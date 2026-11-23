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
var chunk_6a9gdcsm_exports = {};
__export(chunk_6a9gdcsm_exports, {
  Eje: () => Eje,
  Gul: () => Gul,
  Jm: () => Jm,
  Zms: () => Zms,
  dSr: () => dSr,
  f8e: () => f8e,
  hho: () => hho,
  jul: () => jul,
  mho: () => mho,
  wBt: () => wBt,
  yit: () => yit,
  zul: () => zul
});
module.exports = __toCommonJS(chunk_6a9gdcsm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_pnqybv63 = require("/$bunfs/root/chunk-pnqybv63.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
var wBt = { skill: "skill_tool", mcp: "mcp_tool", evalRegistered: "eval_registered", dynamic: "dynamic_tool", unreadable: "unreadable_tool" };
function Jm(e) {
  try {
    if (e.name.startsWith(import_chunk_pmryp5f3.S1)) return wBt.skill;
    let r = String((0, import_chunk_865at33z.hr)(e.name));
    if (r !== e.name) return r;
    if (e.mcpInfo !== void 0) return wBt.mcp;
    if (e.name.startsWith("eval_registered__")) return wBt.evalRegistered;
    if (e.uiTableKey !== void 0 || e.name.includes("__")) return wBt.dynamic;
    return e.name;
  } catch {
    return wBt.unreadable;
  }
}
var b = [...Object.values(wBt), import_chunk_hn3cwwzt.ke, import_chunk_4x1jja6d.Ac, import_chunk_bkfd2ttj._d, import_chunk_rb36kwbn.lt, import_chunk_k883m4fq.De, import_chunk_rb36kwbn.Dt, import_chunk_pnqybv63.PG, import_chunk_cee6q0wn.Yd];
function Zms(e) {
  let r = Jm(e);
  return b.find((d) => d === r) ?? "other_tool";
}
var x = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set());
function y(e, r) {
  return `${e}_${r}`;
}
var k = /_(\d+)$/;
function yit(e) {
  let r = k.exec(e);
  return r ? e.slice(0, -r[0].length) : void 0;
}
function O(e, r, d) {
  let a = (0, import_chunk_4vsz8a99.tn)(r, e.name);
  if (a === void 0 || !(0, import_chunk_4vsz8a99.GP)(a)) return null;
  let c = (f) => ((0, import_chunk_cqa9hrgx.l)("batch_tools", f, { tool_name: (0, import_chunk_865at33z.hr)(a.name), isMcp: false }), [{ type: "tool_use", id: y(e.id, 0), name: a.name, input: e.input, ...e.caller !== void 0 && { caller: e.caller } }]);
  try {
    let f = a.inputSchema.safeParse(e.input);
    if (!f.success) return { synthetics: c("parse_failed"), decomposed: false };
    let { v1Tool: n, entries: o } = a.perEntryHookInputs(f.data);
    if (o.length === 0) return { synthetics: c("zero_entries"), decomposed: false };
    return { decomposed: true, synthetics: o.map((s, m) => {
      let h = s;
      try {
        h = d(n, s);
      } catch (p) {
        if (p instanceof Error && p.name === "ZodError") {
          let T = p instanceof import_chunk_adx6804h.Bz ? (0, import_chunk_4smdap7r.M)(p.issues.map((g) => g.code)).join(",") : "unknown";
          (0, import_chunk_w578pjby.t)(`Normalizing a batch entry's input for tool=${Jm(n)} was rejected: issues ${T}; the error text (${p.message.length} characters) is not logged`, { level: "error" });
        } else (0, import_chunk_k449cc64.i)(Error(`Normalizing a batch entry's input for tool=${Zms(n)} failed: ${(0, import_chunk_jv7av99m.D1e)(p)} was thrown; its text is not logged`));
      }
      return { type: "tool_use", id: y(e.id, m), name: n.name, input: h, ...e.caller !== void 0 && { caller: e.caller } };
    }) };
  } catch {
    return { synthetics: c("per_entry_threw"), decomposed: false };
  }
}
function mho(e) {
  let r;
  for (let d of e) if ((0, import_chunk_4vsz8a99.GP)(d)) r ??= /* @__PURE__ */ new Set(), r.add(d.underlyingV1ToolName);
  if (r === void 0) return e;
  return e.filter((d) => !r.has(d.name));
}
function dSr(e, r, d) {
  let a, c = [];
  for (let f = 0; f < e.length; f++) {
    let n = e[f];
    if (n.type !== "tool_use") {
      a?.push(n);
      continue;
    }
    let o = O(n, r, d);
    if (o === null) {
      a?.push(n);
      continue;
    }
    if (a ??= e.slice(0, f), a.push(...o.synthetics), o.decomposed) c.push({ id: n.id, name: n.name }), (0, import_chunk_cqa9hrgx.u)("batch_tools", { tool_name: (0, import_chunk_865at33z.hr)(n.name), isMcp: false });
  }
  return { content: a ?? e, batchToolUses: c };
}
function jul(e, r, d) {
  if (r === void 0 || r.length === 0) return e;
  let a = /* @__PURE__ */ new Map();
  for (let o of r) if (!a.has(o.id)) a.set(o.id, o);
  let c = /* @__PURE__ */ new Map();
  for (let o of a.values()) {
    let s = (0, import_chunk_4vsz8a99.tn)(d, o.name);
    if (s === void 0 || !(0, import_chunk_4vsz8a99.GP)(s)) continue;
    let m = [], h;
    for (let p of e) if (p.type === "tool_use" && yit(p.id) === o.id) h ??= p, m.push(p.input);
    try {
      c.set(o.id, { type: "tool_use", id: o.id, name: o.name, input: s.reassemble(m), ...h?.caller !== void 0 && { caller: h.caller } });
    } catch {
      let p = x.of((0, import_chunk_f9x2f6cx.N)().host);
      if (!p.has(o.id)) p.add(o.id), (0, import_chunk_cqa9hrgx.l)("batch_tools", "reassemble_threw", { tool_name: (0, import_chunk_865at33z.hr)(o.name), isMcp: false });
    }
  }
  let f = /* @__PURE__ */ new Set(), n = [];
  for (let o of e) {
    if (o.type === "tool_use") {
      let s = yit(o.id);
      if (s !== void 0 && c.has(s)) {
        if (!f.has(s)) f.add(s), n.push(c.get(s));
        continue;
      }
    }
    n.push(o);
  }
  return n;
}
function Gul(e, r) {
  let d = false;
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let o of n.message.content) if (o.type === "tool_result" && yit(o.tool_use_id) !== void 0) d = true;
  }
  if (!d) return e;
  let a = /* @__PURE__ */ new Map();
  for (let n of e) {
    if (n.type !== "assistant") continue;
    for (let o of n.message.content) if (o.type === "tool_use") a.set(o.id, o);
  }
  let c = /* @__PURE__ */ new Map();
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let o of n.message.content) {
      if (o.type !== "tool_result") continue;
      let s = yit(o.tool_use_id);
      if (s === void 0 || !a.has(s)) continue;
      let m = c.get(s);
      if (m === void 0) m = /* @__PURE__ */ new Map(), c.set(s, m);
      if (!m.has(o.tool_use_id)) m.set(o.tool_use_id, o);
    }
  }
  if (c.size === 0) return e;
  let f = /* @__PURE__ */ new Set();
  return e.flatMap((n) => {
    if (n.type !== "user" || !Array.isArray(n.message.content)) return [n];
    let o = false, s = [];
    for (let m of n.message.content) {
      if (m.type !== "tool_result") {
        s.push(m);
        continue;
      }
      let h = yit(m.tool_use_id), p = h !== void 0 ? c.get(h) : void 0;
      if (h === void 0 || p === void 0) {
        s.push(m);
        continue;
      }
      if (o = true, f.has(h)) continue;
      f.add(h);
      let T = a.get(h), g = (0, import_chunk_4vsz8a99.tn)(r, T.name), _ = g !== void 0 && (0, import_chunk_4vsz8a99.GP)(g) ? g : void 0;
      s.push(w(_, h, R(_, T.input, h, p)));
    }
    if (!o) return [n];
    if (s.length === 0) return [];
    return [{ ...n, message: { ...n.message, content: s } }];
  });
}
function R(e, r, d, a) {
  let c;
  if (e !== void 0) try {
    let n = e.inputSchema.safeParse(r);
    if (n.success) c = e.perEntryHookInputs(n.data).entries;
  } catch {
  }
  let f = c?.length ?? 0;
  for (let n of a.keys()) {
    let o = k.exec(n);
    if (o) f = Math.max(f, Number(o[1]) + 1);
  }
  if (f > 1e3) f = c?.length ?? a.size;
  return Array.from({ length: f }, (n, o) => {
    let s = a.get(y(d, o));
    return s !== void 0 ? { input: c?.[o], result: s } : { input: c?.[o], error: "no result" };
  });
}
function w(e, r, d) {
  let a = [], c = "", f = false, n = (s) => {
    if (s.length > 0) c = c === "" ? s : `${c}
${s}`;
  }, o = () => {
    if (c !== "") a.push({ type: "text", text: c }), c = "";
  };
  for (let [s, m] of d.entries()) {
    let h = m.result === void 0 || m.result.is_error === true;
    if (h) f = true;
    if (n(`--- entry ${s + 1}${h ? " (error)" : ""} ---`), m.result !== void 0) {
      let p = m.result.content;
      if (typeof p === "string") n(p);
      else if (Array.isArray(p)) for (let T of p) if (T.type === "text") n(T.text);
      else o(), a.push(T);
    } else n(`[entry ${s + 1} error: ${m.error ?? "no result"}]`);
  }
  if (d.length === 1 && e !== void 0) n(`<system-reminder>Tip: ${e.name} accepts multiple entries in one call (\`${e.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`);
  return o(), { type: "tool_result", tool_use_id: r, content: a.length === 1 && a[0]?.type === "text" ? a[0].text : a, ...f && { is_error: true } };
}
var E = /* @__PURE__ */ new Map();
function f8e(e) {
  return E.get(e);
}
function hho(e) {
  return e.map(f8e).filter((r) => r !== void 0).filter((r) => r.isEnabled());
}
function zul(e, r) {
  return r.find((d) => d.underlyingV1ToolName === e)?.name ?? e;
}
function Eje(e) {
  for (let [r, d] of E) if (d.name === e) return r;
  return;
}
