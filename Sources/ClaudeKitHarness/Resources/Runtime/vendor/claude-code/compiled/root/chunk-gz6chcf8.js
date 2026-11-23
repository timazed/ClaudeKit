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
var chunk_gz6chcf8_exports = {};
__export(chunk_gz6chcf8_exports, {
  $st: () => $st,
  Afo: () => Afo,
  Cfo: () => Cfo,
  Rfo: () => Rfo,
  S9e: () => S9e,
  Sal: () => Sal,
  Tfo: () => Tfo,
  Xon: () => Xon,
  Yon: () => Yon,
  Z$t: () => Z$t,
  _al: () => _al,
  a_r: () => a_r,
  bG: () => bG,
  bal: () => bal,
  cU: () => cU,
  efs: () => efs,
  exi: () => exi,
  fal: () => fal,
  gal: () => gal,
  hal: () => hal,
  i_r: () => i_r,
  kNn: () => kNn,
  mal: () => mal,
  nxi: () => nxi,
  o_r: () => o_r,
  oxi: () => oxi,
  pal: () => pal,
  r_r: () => r_r,
  rxi: () => rxi,
  s_r: () => s_r,
  tfs: () => tfs,
  txi: () => txi,
  ual: () => ual,
  yal: () => yal
});
module.exports = __toCommonJS(chunk_gz6chcf8_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_yn71faep = require("/$bunfs/root/chunk-yn71faep.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_x1z3yh1m = require("/$bunfs/root/chunk-x1z3yh1m.js");
var import_chunk_4xgvg9z4 = require("/$bunfs/root/chunk-4xgvg9z4.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_util = require("util");
var import_util2 = require("util");
var F = ["betas", "tool_choice", "thinking", "context_management", "output_config", "speed", "temperature", "max_tokens"];
function ual(e) {
  return { model: e.model, tools: e.tools.map((n, r) => ({ key: z(n, r), deferred: Z$t(n), bound: Z$t(n), cacheControl: void 0, body: n })), system: e.system.map((n) => ({ preamble: false, cacheControl: void 0, body: n })), messages: [], envelope: {}, seeded: true };
}
function exi(e, n = {}) {
  let r = n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === true ? re(e.messages) : void 0), d = typeof e.system === "string" ? [{ type: "text", text: e.system }] : e.system ?? [], a = {};
  for (let o of F) {
    let c = o === "betas" ? Z(e.betas) : o === "context_management" ? ee(e.context_management) : e[o];
    if (c !== void 0) a[o] = c;
  }
  return { model: e.model, envelope: a, tools: (e.tools ?? []).map((o, c) => {
    let y = o;
    if ("ownership_metadata" in o) {
      let { ownership_metadata: g, ...f } = o;
      y = f;
    }
    return { key: z(o, c), deferred: o.defer_loading === true, bound: o.defer_loading === true && typeof o.name === "string" && r?.has(o.name) === true, cacheControl: v(o), body: M(y) };
  }), system: d.map((o) => ({ preamble: (0, import_chunk_4xgvg9z4.I7)(o), cacheControl: v(o), body: M(o) })), messages: e.messages.map((o, c, y) => ({ role: o.role, turnScopedSystem: o.role === "system" && c === y.length - 1, blocks: typeof o.content === "string" ? [{ thinking: false, cacheControl: void 0, body: { type: "text", text: o.content } }] : o.content.map((g) => ({ thinking: g.type === "thinking" || g.type === "redacted_thinking", cacheControl: v(g), body: efs(te(M(g)), void 0) })) })) };
}
function r_r(e) {
  return { model: e.model, tools: e.tools.filter(ne).map((n) => n.body), system: e.system.filter((n) => !n.preamble).map((n) => n.body), messages: e.messages.filter((n) => !n.turnScopedSystem).map((n) => ({ role: n.role, content: n.blocks.filter((r) => !r.thinking).map((r) => r.body) })) };
}
function fal(e) {
  return e.part === "tool" || e.part === "system" || e.part === "message";
}
var P = 16;
function txi(e, n) {
  return e.seeded ? O(e, n) : [...O(e, n), ...H(e, n), ...X(e, n), ...J(e, n)];
}
function O(e, n) {
  let r = r_r(e), d = r_r(n), a = [], o = (l) => (a.push(l), a.length < P), c = (l) => new Map([...l.filter((h) => !h.deferred), ...l.filter((h) => h.bound)].map((h) => [h.key, h])), y = c(e.tools), g = c(n.tools), f = [], p = false;
  for (let [l, h] of y) {
    let k = h.body, _ = g.get(l);
    if (_ === void 0) {
      if (h.deferred) {
        if (!e.seeded) f.push({ part: "tool", id: l, kind: "removed", prev: k });
        continue;
      }
      if (p = true, !o({ part: "tool", id: l, kind: "removed", prev: k })) return a;
    } else if (h.deferred !== _.deferred) {
      p = true;
      let x = h.deferred ? { part: "tool", id: l, kind: "added", next: _.body } : { part: "tool", id: l, kind: "removed", prev: k };
      if (!o(x)) return a;
    } else if (!(0, import_util.isDeepStrictEqual)(k, _.body)) {
      p ||= !h.deferred;
      let x = _.body, T = [...Object.keys(k), ...Object.keys(x)].find((R) => !(0, import_util.isDeepStrictEqual)(bG(k, R), bG(x, R))) ?? "?";
      if (!o({ part: "tool", id: l, kind: "changed", field: T, prev: k, next: x })) return a;
    }
  }
  for (let [l, h] of g) if (!y.has(l) && !h.deferred) {
    if (p = true, !o({ part: "tool", id: l, kind: "added", next: h.body })) return a;
  }
  if (!p) {
    let l = (x) => [...x.values()].flatMap((T) => T.deferred ? [] : [T.key]), h = l(y), _ = l(g).filter((x) => y.has(x)).find((x, T) => h[T] !== x);
    if (_ !== void 0) o({ part: "tool", id: _, kind: "reordered" });
  }
  let b = Math.max(r.system.length, d.system.length);
  for (let l = 0; l < b; l++) {
    let h = r.system[l], k = d.system[l], _ = h === void 0 ? "added" : k === void 0 ? "removed" : "changed";
    if (_ !== "changed" || !(0, import_util.isDeepStrictEqual)(h, k)) {
      if (!o({ part: "system", index: l, kind: _, prev: h, next: k })) return a;
    }
  }
  for (let l = 0; l < r.messages.length; l++) {
    let h = r.messages[l], k = d.messages[l];
    if (k !== void 0 && (0, import_util.isDeepStrictEqual)(h, k)) continue;
    let _ = { part: "message", index: l, role: h.role, kind: k === void 0 ? "removed" : "changed", prev: h, next: k };
    if (!o(_)) return a;
  }
  for (let l of f) if (!o(l)) break;
  return a;
}
function H(e, n) {
  let r = [], d = Math.min(e.messages.length, n.messages.length);
  for (let a = 0; a < d && r.length < P; a++) {
    let o = B(e.messages[a]), c = B(n.messages[a]);
    if (o.length === 0 && c.length === 0) continue;
    if (o.length === c.length && o.every((g, f) => g === c[f])) continue;
    let y = o.slice(0, c.length).every((g, f) => g === c[f]) || c.slice(0, o.length).every((g, f) => g === o[f]);
    r.push({ part: "thinking", index: a, kind: !y ? "changed" : c.length < o.length ? "dropped" : "added" });
  }
  return r;
}
function B(e) {
  return e.blocks.flatMap((n) => {
    if (!n.thinking) return [];
    let r = bG(n.body, "signature"), d = bG(n.body, "data");
    return [typeof r === "string" ? r : typeof d === "string" ? d : "?"];
  });
}
function X(e, n) {
  let r = j(e, e.messages.length), d = j(n, e.messages.length), a = [];
  for (let [o, { at: c, marker: y }] of r) {
    if (a.length >= P) return a;
    let g = d.get(o);
    if (g === void 0) a.push({ part: "cache", at: c, kind: "dropped", prev: y, next: void 0 });
    else if (!(0, import_util.isDeepStrictEqual)(y, g.marker)) a.push({ part: "cache", at: c, kind: "changed", prev: y, next: g.marker });
  }
  for (let [o, { at: c, marker: y }] of d) {
    if (a.length >= P) return a;
    if (!r.has(o)) a.push({ part: "cache", at: c, kind: "added", prev: void 0, next: y });
  }
  return a;
}
function j(e, n) {
  let r = /* @__PURE__ */ new Map();
  for (let d of e.tools) if (d.cacheControl !== void 0) r.set(`tools:${d.key}`, { at: { segment: "tools", key: d.key }, marker: d.cacheControl });
  return e.system.forEach((d, a) => {
    if (d.cacheControl !== void 0) r.set(`system:${a}`, { at: { segment: "system", index: a }, marker: d.cacheControl });
  }), e.messages.slice(0, n).forEach((d, a) => {
    d.blocks.forEach((o, c) => {
      if (o.cacheControl !== void 0) r.set(`messages:${a}.${c}`, { at: { segment: "messages", index: a, block: c }, marker: o.cacheControl });
    });
  }), r;
}
function J(e, n) {
  return [["model", e.model, n.model], ["attribution_header", K(e), K(n)], ["deferred_tools", L(e), L(n)], ...F.map((d) => [d, e.envelope[d], n.envelope[d]])].filter(([, d, a]) => !(0, import_util.isDeepStrictEqual)(d, a)).map(([d, a, o]) => ({ part: "envelope", id: d, kind: "changed", prev: a, next: o }));
}
function Z(e) {
  return e && [...e].sort();
}
function ee(e) {
  if (!(0, import_chunk_0jve1fep.Le)(e) || !Array.isArray(e.edits)) return e;
  return { ...e, edits: e.edits.map((n) => {
    if (!(0, import_chunk_0jve1fep.Le)(n) || !(0, import_chunk_0jve1fep.Le)(n.trigger) || !(0, import_chunk_0jve1fep.Le)(n.keep) || n.trigger.type !== "tool_uses" || n.keep.type !== "tool_uses" || typeof n.trigger.value !== "number" || typeof n.keep.value !== "number") return n;
    let r = n.trigger.value - n.keep.value, { trigger: d, keep: a, ...o } = n;
    return { ...o, triggerLessKeep: r };
  }) };
}
function K(e) {
  for (let n of e.system) {
    let r = bG(n.body, "text");
    if (typeof r === "string" && r.startsWith(import_chunk_4xgvg9z4.qBt)) return r;
  }
  return "";
}
function L(e) {
  return e.tools.filter((n) => n.deferred).map((n) => n.key).sort().join(",");
}
function ne(e) {
  return !e.deferred || e.bound;
}
function Z$t(e) {
  return bG(e, "defer_loading") === true;
}
function re(e) {
  let n = /* @__PURE__ */ new Set();
  for (let r of e) {
    if (typeof r.content === "string") continue;
    if (r.role === "system") {
      for (let a of r.content) {
        let o = bG(a, "tool"), c = bG(a, "type") === "tool_addition" && typeof o === "object" && o !== null ? bG(o, "name") : void 0;
        if (typeof c === "string") n.add((0, import_chunk_qebpc5de.Gl)(c));
      }
      continue;
    }
    if (r.role !== "user") continue;
    for (let a of r.content) {
      if (!(0, import_chunk_yn71faep.JUt)(a)) continue;
      for (let o of a.content) if ((0, import_chunk_yn71faep.XUt)(o)) n.add((0, import_chunk_qebpc5de.Gl)(o.tool_name));
    }
  }
  return n;
}
function v(e) {
  return "cache_control" in e ? e.cache_control : void 0;
}
function M(e) {
  if (!("cache_control" in e)) return e;
  let { cache_control: n, ...r } = e;
  return r;
}
function te(e) {
  if (!("safeguards" in e)) return e;
  let { safeguards: n, ...r } = e;
  return r;
}
function bG(e, n) {
  if (e === void 0) return;
  let r = Object(e), d;
  for (let a of Object.keys(e)) {
    let o = r[a];
    if (a === n) d = o;
  }
  return d;
}
function C(e) {
  let n = bG(e, "type") === "tool_addition" ? bG(e, "tool") : void 0;
  if (typeof n !== "object" || n === null) return;
  let r = bG(n, "definition");
  return typeof r === "object" && r !== null ? { tool: n, definition: r } : void 0;
}
var nxi = "https://address-not-recorded.invalid";
function o_r(e) {
  return typeof e === "object" && e !== null && typeof bG(e, "server_url") === "string" ? { ...e, server_url: nxi } : e;
}
function pal(e) {
  let n = C(e)?.definition, r = bG(n, "name");
  return typeof r === "string" && bG(n, "input_schema") !== void 0 ? r : void 0;
}
function rxi(e) {
  return C(e) !== void 0;
}
function Tfo(e) {
  return bG(C(e)?.definition, "ownership_metadata");
}
function efs(e, n) {
  let r = C(e);
  if (r === void 0 || n === Tfo(e)) return e;
  let { ownership_metadata: d, ...a } = { ownership_metadata: void 0, ...r.definition }, o = n === void 0 ? a : { ...r.definition, ownership_metadata: n };
  return { ...e, tool: { ...r.tool, definition: o } };
}
function z(e, n) {
  let r = bG(e, "name");
  if (typeof r === "string") return r;
  let d = bG(e, "type");
  return typeof d === "string" ? d : `tools[${n}]`;
}
function $st(e) {
  let { type: n, name: r, defer_loading: d, input_schema: a } = W(e);
  return typeof r === "string" && d === true && (n === void 0 || n === "custom") && I(a) && !("cache_control" in e);
}
function mal(e) {
  let { type: n, name: r, description: d, defer_loading: a, input_schema: o } = W(e);
  return typeof r === "string" && (d === void 0 || typeof d === "string") && a !== true && (n === void 0 || n === "custom") && I(o) && !("cache_control" in e);
}
var tfs = ["strict", "eager_input_streaming", "citations"];
function kNn(e) {
  return e.some((n) => bG(n, "eager_input_streaming") === true);
}
function Yon(e, { strict: n, eager: r, citations: d }) {
  let a = { ...e };
  if (!n && "strict" in a) {
    let { strict: o, ...c } = a;
    a = c;
  }
  if (!r && "eager_input_streaming" in a) {
    let { eager_input_streaming: o, ...c } = a;
    a = c;
  }
  if (!d && "citations" in a) {
    let { citations: o, ...c } = a;
    a = c;
  }
  return a;
}
function I(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && bG(e, "type") === "object";
}
function W(e) {
  return { __proto__: null, ...e };
}
function S(e, n) {
  return ((0, import_chunk_h4t4qfaq.li)(e) || e === import_chunk_x1z3yh1m.gAe) && n(e) ? e : (0, import_chunk_qebpc5de.Gl)(e);
}
function V() {
  if (!(0, import_chunk_865at33z.Hc)()) return false;
  return !(import_chunk_c203g5kd.s.CLAUDE_CODE_SIMPLE || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_ATTACHMENTS);
}
function S9e() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  return e.keptDeferredToolsEnabled ??= V(), e.keptDeferredToolsEnabled;
}
function s_r() {
  return (0, import_chunk_n5qd9b6p.Ar)().keptDeferredToolsEnabled ?? V();
}
function Cfo() {
  return (0, import_chunk_865at33z.Hc)() && (0, import_chunk_3t7ve0wy.Sa)();
}
var oe = 5e3;
function E(e) {
  return (0, import_chunk_yn71faep.dmo)(e.toolUseId, e.toolName);
}
class q {
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  #r = /* @__PURE__ */ new Set();
  #t = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Map();
  #s = false;
  #i = 0;
  get(e) {
    return this.#e.get(E(e));
  }
  set(e, n) {
    let r = E(e);
    if (!this.#e.delete(r) && this.#e.size >= oe) {
      let d = this.#e.keys().next().value;
      if (d !== void 0) this.#e.delete(d);
    }
    if (this.#e.set(r, n), this.#n.add(e.toolName), n.kind === "sent") this.#r.add(e.toolName);
  }
  get sentToolNames() {
    return this.#r;
  }
  sentEntryOf(e) {
    let n;
    for (let r of this.#e.values()) if (r.kind === "sent" && "name" in r.entry.schema && r.entry.schema.name === e) n = r.entry;
    return n;
  }
  hasTool(e) {
    return this.#n.has(e);
  }
  get size() {
    return this.#e.size;
  }
  noteSpliced(e, n) {
    this.#o.set(e, n);
  }
  splicedInputSchema(e) {
    return this.#o.get(e);
  }
  telemetrySignatureChanged(e, n) {
    if (n === this.#t.get(e)) return false;
    return this.#t.set(e, n), true;
  }
  get generation() {
    return this.#i;
  }
  noteRetractionFailure() {
    let e = !this.#s;
    return this.#s = true, e;
  }
  clear() {
    this.#e.clear(), this.#n.clear(), this.#r.clear(), this.#t.clear(), this.#o.clear(), this.#i++;
  }
}
var i_r = new import_chunk_pzzqg6s3.ze(() => new q());
function cU() {
  return i_r.of((0, import_chunk_f9x2f6cx.N)());
}
function G(e, n, r, d = true, a) {
  let o = (0, import_chunk_4vsz8a99.dwe)(r), c = /* @__PURE__ */ new Map();
  for (let p of n) {
    let b = e.get(p), l = b?.kind === "sent" && "name" in b.entry.schema ? b.entry.schema.name : void 0, h = S(p.toolName, (k) => o.has(k) || k === l);
    if (c.has(h)) continue;
    if (b?.kind === "sent" && (d || !b.entry.isMcp)) c.set(h, b.entry);
  }
  let y = /* @__PURE__ */ new Set(), g = [], f = [];
  for (let p of n) {
    let b = e.get(p);
    if (b?.kind === "stripped") {
      y.add(E(p));
      continue;
    }
    if (b?.kind === "sent") continue;
    let l = S(p.toolName, (k) => o.has(k) || c.has(k)), h = c.get(l);
    if (h) g.push({ reference: p, entry: h });
    else if (!o.has(l) && !a?.keeps(l)) f.push(p);
  }
  return { kept: c, strippedReferenceKeys: y, resolvedAgainstKept: g, unrecordedDepartures: f };
}
function oxi(e, n, r, { keepMcp: d = true, surfacedOnWire: a, declaredInline: o } = {}) {
  try {
    if (!S9e() || (0, import_chunk_2zeyvjwb.uo)("hipaa")) return;
    let c = (0, import_chunk_yn71faep.gje)(e, { surfacedOnWire: a });
    if (c.length === 0) return;
    let y = cU(), g = y.generation, f = (0, import_chunk_865at33z.Pr)(r), p = A(f, r), { kept: b, strippedReferenceKeys: l, resolvedAgainstKept: h, unrecordedDepartures: k } = G(y, c, n, d, o);
    if (p) {
      for (let { reference: _, entry: x } of h) y.set(_, { kind: "sent", entry: x });
      for (let _ of k) y.set(_, { kind: "stripped" });
    }
    return { references: c, kept: b, strippedReferenceKeys: l, writes: p, category: f, querySource: r, generation: g };
  } catch (c) {
    (0, import_chunk_k449cc64.i)(c), (0, import_chunk_cqa9hrgx.m)("mcp_kept_deferred_tools", "plan_failed");
    return;
  }
}
function hal(e, n, { keepMcp: r = true, surfacedOnWire: d } = {}) {
  try {
    let a = cU();
    if (!S9e() || (0, import_chunk_2zeyvjwb.uo)("hipaa")) return;
    let o = (0, import_chunk_4vsz8a99.dwe)(n);
    if ([...a.sentToolNames].every((y) => o.has(S(y, () => true)))) return [];
    let { kept: c } = G(a, (0, import_chunk_yn71faep.gje)(e, { surfacedOnWire: d }), n, r);
    return [...c.keys()].filter((y) => !o.has(y));
  } catch (a) {
    Afo(a);
    return;
  }
}
function Xon(e) {
  let n = cU(), r = e.findLastIndex((d) => d.type === "system" && d.subtype === "compact_boundary");
  return new Set((0, import_chunk_yn71faep.gje)(e.slice(r + 1)).filter((d) => n.get(d)?.kind !== "stripped").map((d) => d.toolName));
}
function gal(e) {
  let n = cU(), r = /* @__PURE__ */ new Set();
  for (let d of e?.references ?? []) if (n.get(d)?.kind === "stripped") r.add(E(d));
  return r;
}
function Afo(e) {
  if ((0, import_chunk_k449cc64.i)(e), cU().noteRetractionFailure()) (0, import_chunk_cqa9hrgx.m)("mcp_kept_deferred_tools", "retraction_failed");
}
function _al(e, n, r, { requestCarriesStructuredOutputs: d, requestDeclaresSearchCitations: a }) {
  try {
    let o = Math.max(n.length - 1, 0), c = cU(), y = c.generation !== e.generation, g = { strict: d, eager: kNn(n), citations: a }, f = [], p = [], b;
    for (let [k, _] of e.kept) {
      if (b === void 0) {
        b = /* @__PURE__ */ new Map();
        for (let R = 0; R < n.length; R++) {
          let D = n[R];
          if ("name" in D && !b.has(D.name)) b.set(D.name, R);
        }
      }
      let x = b.get(k), T = x === void 0 ? void 0 : n[x];
      if (x !== void 0 && T !== void 0) {
        if ("defer_loading" in T && T.defer_loading && !y) {
          let R = Yon(_.schema, g);
          if (n[x] = R, !("name" in R) || R.name !== k) b = void 0;
        }
        continue;
      }
      p.push([k, _]), f.push(Yon(_.schema, g));
    }
    if (n.splice(o, 0, ...f), !y) {
      for (let [k, { schema: _, isMcp: x }] of p) if (!x && "input_schema" in _) c.noteSpliced(k, _.input_schema);
    }
    if (!e.writes || y) return;
    let l = e.querySource ?? "";
    if (p.length === 0 && e.strippedReferenceKeys.size === 0) c.telemetrySignatureChanged(l, "");
    else {
      (0, import_chunk_w578pjby.t)(`Dynamic tool loading: keeping ${p.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`);
      let k = `${p.map(([_]) => _).sort().join(",")}|${e.strippedReferenceKeys.size}`;
      if (c.telemetrySignatureChanged(l, k)) {
        let _ = (0, import_chunk_78g0060s.fe)(e.category);
        (0, import_chunk_cqa9hrgx.u)("mcp_kept_deferred_tools", { kept_count: p.length, kept_mcp_count: (0, import_chunk_4smdap7r.U)(p, ([, x]) => x.isMcp), stripped_reference_count: e.strippedReferenceKeys.size, ..._ !== void 0 && { query_source_category: _ } });
      }
    }
    let h = /* @__PURE__ */ new Map();
    for (let k of e.references) {
      if (e.strippedReferenceKeys.has(E(k))) continue;
      let _ = S(k.toolName, (R) => r.has(R) || e.kept.has(R)), x = r.get(_);
      if (e.kept.has(_) || !x || !("defer_loading" in x.schema) || x.schema.defer_loading !== true) continue;
      let T = h.get(_);
      if (T === void 0) T = { schema: x.schema, isMcp: x.isMcp }, h.set(_, T);
      c.set(k, { kind: "sent", entry: T });
    }
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o), (0, import_chunk_cqa9hrgx.m)("mcp_kept_deferred_tools", "record_failed");
  }
}
function Rfo(e, n, r) {
  try {
    let d = r?.strippedReferences ?? /* @__PURE__ */ new Set();
    if (n.length === 0 && d.size === 0 || !s_r()) return 0;
    let a = cU(), o = /* @__PURE__ */ new Map();
    for (let f of n) if ($st(f) && !o.has(f.name)) o.set(f.name, { schema: f, isMcp: f.name.startsWith("mcp__") });
    let c;
    if (r?.surfacedCarrier !== void 0) {
      c = /* @__PURE__ */ new Set();
      for (let f of e) {
        if (f.type !== "attachment" || f.attachment.type !== "deferred_tools_delta" || r.surfacedCarrier.nameOnlyAnnouncements.has(f.uuid)) continue;
        let p = f.attachment.surfacedNames;
        for (let b of Array.isArray(p) ? p : []) if (typeof b === "string" && o.has(b)) c.add(b);
      }
      for (let f of c) r.surfacedCarrier.surfacedOnWire.add(f);
    }
    let y = 0, g = /* @__PURE__ */ new Set();
    for (let f of (0, import_chunk_yn71faep.gje)(e, { surfacedOnWire: c })) {
      let p = a.get(f);
      if (d.has(E(f))) {
        if (p?.kind !== "stripped") a.set(f, { kind: "stripped" }), y++;
        continue;
      }
      if (p !== void 0) continue;
      let b = S(f.toolName, (h) => o.has(h)), l = o.get(b);
      if (l === void 0) continue;
      a.set(f, { kind: "sent", entry: l }), g.add(b), y++;
    }
    if (y > 0) (0, import_chunk_w578pjby.t)(`Dynamic tool loading: seeded ${y} tool reference(s) to ${g.size} deferred tool(s) the previous process sent`);
    return y;
  } catch (d) {
    return (0, import_chunk_k449cc64.i)(d), (0, import_chunk_cqa9hrgx.m)("mcp_kept_deferred_tools", "seed_failed"), 0;
  }
}
function se(e, n) {
  if ((0, import_util2.isDeepStrictEqual)(e, n)) return true;
  let r = { ...e };
  for (let d of tfs) if (!(d in n)) delete r[d];
  return (0, import_util2.isDeepStrictEqual)(r, n);
}
function yal(e, n, r, d, a, o) {
  try {
    if (n.size === 0 || !S9e()) return;
    let c = cU();
    if (c.generation !== o) return;
    if (!A((0, import_chunk_865at33z.Pr)(a), a)) return;
    let y = /* @__PURE__ */ new Map();
    for (let g of (0, import_chunk_yn71faep.gje)(e, { surfacedOnWire: n })) {
      if (c.get(g) !== void 0) continue;
      let f = S(g.toolName, (l) => d?.kept.has(l) === true || r.has(l)), p = d?.kept.get(f) ?? r.get(f);
      if (!p || !("defer_loading" in p.schema) || p.schema.defer_loading !== true) continue;
      let b = y.get(f);
      if (b === void 0) b = { schema: p.schema, isMcp: p.isMcp }, y.set(f, b);
      c.set(g, { kind: "sent", entry: b });
    }
  } catch (c) {
    (0, import_chunk_k449cc64.i)(c), (0, import_chunk_cqa9hrgx.m)("mcp_kept_deferred_tools", "record_failed");
  }
}
function Sal(e, n) {
  try {
    let r = Y(n);
    for (let d = 0; d < e.length; d++) {
      let a = r.get(e[d].name);
      if (a !== void 0 && $st(a)) e[d] = a;
    }
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function bal(e, n) {
  try {
    let r = cU();
    if (!e.writes || r.generation !== e.generation) return;
    let d = Y(n), a = /* @__PURE__ */ new Map();
    for (let o of e.references) {
      if (e.strippedReferenceKeys.has(E(o))) continue;
      let c = S(o.toolName, (p) => d.has(p)), y = d.get(c), g = r.get(o);
      if (y === void 0 || g?.kind !== "sent" || se(g.entry.schema, y)) continue;
      let f = a.get(c);
      if (f === void 0) f = { schema: y, isMcp: g.entry.isMcp }, a.set(c, f);
      r.set(o, { kind: "sent", entry: f });
    }
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r), (0, import_chunk_cqa9hrgx.m)("mcp_kept_deferred_tools", "record_failed");
  }
}
function A(e, n) {
  return e === "main" || e === "subagent" && n !== import_chunk_060xwhvh.Ukl;
}
function a_r(e) {
  return A((0, import_chunk_865at33z.Pr)(e), e);
}
function Y(e) {
  let n = /* @__PURE__ */ new Map();
  for (let r of e) if ("defer_loading" in r && r.defer_loading === true && "name" in r && typeof r.name === "string") if ("cache_control" in r) {
    let { cache_control: d, ...a } = r;
    n.set(r.name, a);
  } else n.set(r.name, r);
  return n;
}
