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
var chunk_0snrq607_exports = {};
__export(chunk_0snrq607_exports, {
  ABa: () => ABa,
  CBa: () => CBa,
  MRn: () => MRn,
  PBa: () => PBa,
  RBa: () => RBa,
  asi: () => asi,
  g8o: () => g8o,
  isi: () => isi,
  lsi: () => lsi,
  xBa: () => xBa
});
module.exports = __toCommonJS(chunk_0snrq607_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_yn71faep = require("/$bunfs/root/chunk-yn71faep.js");
var import_chunk_fe5esh7d = require("/$bunfs/root/chunk-fe5esh7d.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_86sakbrd = require("/$bunfs/root/chunk-86sakbrd.js");
var import_chunk_zmrcnbgs = require("/$bunfs/root/chunk-zmrcnbgs.js");
var import_chunk_shs9e3r5 = require("/$bunfs/root/chunk-shs9e3r5.js");
var import_chunk_ksk52rm1 = require("/$bunfs/root/chunk-ksk52rm1.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
class C {
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Map();
  note(e, n, o = [], a = [], s = []) {
    if (n.length === 0 && a.length === 0 && s.length === 0) return;
    for (let [i, u] of [[this.#e, n], [this.#n, a], [this.#t, s], [this.#o, o]]) {
      let w = i.get(e) ?? /* @__PURE__ */ new Set();
      for (let r of u) w.add(r);
      i.set(e, w);
    }
  }
  listed(e) {
    return [...this.#o.get(e) ?? []];
  }
  shown(e) {
    return [...this.#e.get(e) ?? []];
  }
  lists(e) {
    return [...this.#n.get(e) ?? []];
  }
  objects(e) {
    return [...this.#t.get(e) ?? []];
  }
  tools() {
    return [...this.#e.keys()];
  }
  get any() {
    return this.#e.size > 0;
  }
}
var R = new import_chunk_pzzqg6s3.ze(() => new C());
var W = new import_chunk_2904xtvq.j(() => ({ value: false })), D = new import_chunk_2904xtvq.j(() => ({ value: false }));
function CBa(e, n, o, a = [], s = []) {
  let i;
  try {
    i = (0, import_chunk_f9x2f6cx.N)();
  } catch {
    return (0, import_chunk_w578pjby.t)("[connector upload] no session in reach, so no path form is shown for this tool"), false;
  }
  if (n.length > 0 || a.length > 0 || s.length > 0) (0, import_chunk_f9x2f6cx.kr)(W).value = true, isi();
  return R.of(i).note(e, n, V(o), a, s), true;
}
function isi() {
  (0, import_chunk_f9x2f6cx.kr)(D).value = true;
}
function asi() {
  return (0, import_chunk_f9x2f6cx.kr)(D).value;
}
function ABa(e) {
  let n = v();
  return n === void 0 || n === b ? [] : n.listed(e);
}
function g8o(e) {
  let n = v();
  return (0, import_chunk_4smdap7r.M)([...n === void 0 || n === b ? [] : n.tools(), ...e === void 0 ? [] : T(e).tools.keys()]);
}
var E = (0, import_chunk_t57w17k7.de)({ said: false }, (e) => {
  e.said = false;
});
function _(e, n, { text: o, lists: a, objects: s }) {
  let i = e.get(n), u = { text: /* @__PURE__ */ new Set([...i?.text ?? [], ...o]), lists: /* @__PURE__ */ new Set([...i?.lists ?? [], ...a]), objects: /* @__PURE__ */ new Set([...i?.objects ?? [], ...s]) };
  if (u.text.size > 0 || u.lists.size > 0 || u.objects.size > 0) e.set(n, u);
}
var I = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakSet(), H = /* @__PURE__ */ new WeakMap(), K = /^\s*\[(?:[\s[\],{}\d.eE+-]|null|true|false)*["']/, L = /^[^"']*(?:"[^"]*(?:$|"\s*(?:[,:}]|\]\s*(?:$|[,\]])))|'[^']*'\s*(?:,|\]\s*(?:$|[,\]])))/, B = /^[^"'\]]*(?:"[^"]*"|'[^']*')\s*(?:$|["'])/;
function U(e) {
  if (!e.trimStart().startsWith("[")) return false;
  try {
    return Array.isArray((0, import_chunk_w578pjby.te)(e)) && e.includes('"');
  } catch {
    return K.test(e) && (L.test(e) || B.test(e));
  }
}
function MRn(e, n, o, a, s, i = () => []) {
  let u = v();
  if (u === b) return { asked: "out_of_reach" };
  let w = T(a), r = w.unreadable, l = r ? Object.keys(n) : e === void 0 ? [] : (0, import_chunk_4smdap7r.M)([...u?.shown(e) ?? [], ...w.tools.get(e)?.text ?? []]), d = r || e === void 0 ? [] : (0, import_chunk_4smdap7r.M)([...u?.lists(e) ?? [], ...w.tools.get(e)?.lists ?? []]), h = r || e === void 0 ? [] : (0, import_chunk_4smdap7r.M)([...u?.objects(e) ?? [], ...w.tools.get(e)?.objects ?? []]);
  if (l.length === 0 && d.length === 0 && h.length === 0) return r ? { asked: "unknown", text: [], inObjects: [] } : { asked: "nothing" };
  let f = o(), g = i(), p = (c) => Object.hasOwn(n, c) ? n[c] : void 0, m = (0, import_chunk_4smdap7r.M)([...l, ...d]).filter((c) => !f.includes(c) && (!r || P(s, c)) && (0, import_chunk_86sakbrd.HRn)(g.includes(c) ? (0, import_chunk_86sakbrd.OBa)(p(c)) : p(c), (x) => l.includes(c) || x !== p(c) || U(x), { intoObjects: true })), k = h.filter((c) => !f.includes(c) && !g.includes(c) && (0, import_chunk_86sakbrd.TJt)(p(c))), y = l.length + d.length > 0 && Object.keys(n).some((c) => !P(s, c));
  return { asked: r ? "unknown" : "named", text: (0, import_chunk_4smdap7r.M)([...m, ...k]), inObjects: m.filter((c) => !(0, import_chunk_86sakbrd.HRn)(p(c), () => true)), ...m.length === 0 && k.length > 0 && !y && { onlyPathObjects: true }, ...y && { unlisted: true } };
}
function P(e, n) {
  try {
    let o = (0, import_chunk_0jve1fep.Le)(e) ? e.properties : void 0;
    return (0, import_chunk_0jve1fep.Le)(o) && Object.hasOwn(o, n);
  } catch {
    return false;
  }
}
function V(e) {
  try {
    let n = (0, import_chunk_0jve1fep.Le)(e) ? e.properties : void 0;
    return (0, import_chunk_0jve1fep.Le)(n) ? Object.getOwnPropertyNames(n) : [];
  } catch {
    return [];
  }
}
function RBa(e) {
  return { error: `No file was sent and ${e} was not called. The program that runs Claude Code made this call outside this session, so Claude Code could not reach the session's note of the connector arguments it asked you to fill with file paths. That note may be the only record of them, so rather than risk sending a file's path to a connector as plain text, Claude Code refuses every connector call made this way, whatever its arguments. The connector is not at fault, and neither is this call: changing it makes no difference. Calling again may or may not work; that depends on the program. Tell the user that the fault is in that program.`, code: "path_note_out_of_reach" };
}
function xBa(e, n) {
  return { error: Array.isArray(n) ? `No file was sent and ${e} was not called. Claude Code could not read the tool definitions saved in this conversation, so it cannot tell which connector arguments it asked you to fill with file paths. While that is so, it refuses connector calls that have text in an argument, even inside a list or object, and calls that have an argument ${e} does not list. The one exception is a local file's path in an argument for which Claude Code, or the app that runs it, sends the file. The connector is not at fault. Tell the user that starting a new conversation avoids this.` : `No file was sent and ${e} was not called. Claude Code was given this call without the conversation's messages, so it could not read the tool definitions saved in this conversation and cannot tell which connector arguments it asked you to fill with file paths. While that is so, it refuses connector calls that have text in an argument, even inside a list or object, and calls that have an argument ${e} does not list. The one exception is a local file's path in an argument for which Claude Code, or the app that runs it, sends the file. The connector is not at fault, and a new conversation will not help. Tell the user that the fault is in Claude Code or in the program that runs Claude Code.`, code: "path_record_unreadable" };
}
function lsi(e) {
  let n = v();
  if (n === b) return true;
  let o = T(e);
  return (n?.any ?? false) || o.unreadable || o.tools.size > 0;
}
var b = Symbol("the note of path forms is out of reach");
function v() {
  try {
    return R.peek((0, import_chunk_f9x2f6cx.N)());
  } catch (e) {
    if ((0, import_chunk_f9x2f6cx.kr)(W).value) return (0, import_chunk_w578pjby.t)(`[connector upload] this session's note of path forms is out of reach: ${(0, import_chunk_shs9e3r5.u0)(e)}`, { level: "warn" }), b;
    return;
  }
}
function T(e) {
  let n = /* @__PURE__ */ new Map();
  if (!Array.isArray(e)) {
    let s = F();
    if (!E.said) E.said = true, (0, import_chunk_w578pjby.t)(s ? "[connector upload] a tool call had no messages list, so the tool definitions this conversation saved could not be read for it; while uploads are on, a call with no list is refused if it holds text outside the arguments the upload fills" : "[connector upload] a tool call had no messages list; uploads are off in this session, so no call is refused for that: it was checked only against the path forms this session showed");
    return { tools: n, unreadable: s };
  }
  let o = z(n, e);
  if (o.length === 0) return { tools: n, unreadable: false };
  let a = F();
  if (!O.has(e)) O.add(e), (0, import_chunk_w578pjby.t)(a ? "[connector upload] reading the tool definitions saved in this conversation threw, so in this conversation connector calls with text outside the arguments the upload fills are refused; a new conversation avoids this" : "[connector upload] reading the tool definitions saved in this conversation threw; uploads are off in this session, so no call is refused for that: a call that is checked is judged by the definitions that could be read and the path forms this session showed"), (0, import_chunk_shs9e3r5.kG)(new import_chunk_jv7av99m.A(`MCP connector upload: reading the tool definitions saved in this conversation threw (${(0, import_chunk_shs9e3r5.u0)(o[0])})`, "MCP connector upload: reading the tool definitions saved in this conversation threw"), o[0]);
  return { tools: n, unreadable: a };
}
function z(e, n) {
  let o = [], a = false;
  try {
    let i = I.get(n), u = i !== void 0 && i.length === n.length && i.last === n.at(-1) ? i.rows : /* @__PURE__ */ new WeakMap();
    for (let r of n) {
      let l;
      try {
        if (!S(r)) continue;
        let { attachment: d } = r, h = u.get(r);
        if (h !== void 0 && h.attachment === d) {
          if (l = h.asks, h.damage !== void 0) o.push(h.damage);
        } else {
          let f = [], g = G(r, f);
          if (g.length === 0 && f.length === 0) continue;
          let p = /* @__PURE__ */ new Map();
          l = p;
          for (let [m, k] of g) {
            let y = (0, import_chunk_0jve1fep.Le)(k) ? k.input_schema : void 0;
            _(p, m, { text: (0, import_chunk_86sakbrd.dsi)(y), lists: (0, import_chunk_86sakbrd.csi)(y), objects: (0, import_chunk_86sakbrd.usi)(y) });
          }
          u.set(r, { attachment: d, asks: p, ...f.length > 0 && { damage: f[0] } }), o.push(...f);
        }
      } catch (d) {
        a = true, o.push(d);
      }
      if (l === void 0) continue;
      for (let [d, h] of l) _(e, d, h);
    }
    if (!a) I.set(n, { length: n.length, last: n.at(-1), rows: u });
    let w = [];
    for (let r of n) try {
      if (S(r)) {
        let { attachment: f, uuid: g } = r, p = f.type === "deferred_tools_delta" ? f.surfacedNames : void 0, m = Array.isArray(p) ? p : [];
        for (let k of m) if (typeof k === "string") w.push({ toolUseId: g, toolName: k });
        continue;
      }
      let l = (0, import_chunk_0jve1fep.Le)(r) && r.type === "user" ? r.message : void 0, d = typeof l === "object" && l !== null && "content" in l ? l.content : void 0, h = Array.isArray(d) ? d : [];
      for (let f of h) if ((0, import_chunk_yn71faep.JUt)(f) && typeof f.tool_use_id === "string") {
        for (let g of f.content) if ((0, import_chunk_yn71faep.XUt)(g)) w.push({ toolUseId: f.tool_use_id, toolName: g.tool_name });
      }
    } catch (l) {
      o.push(l);
    }
    for (let r of w) {
      let l = (0, import_chunk_gz6chcf8.cU)().get(r), d = l?.kind === "sent" ? l.entry.schema : void 0;
      if (!(0, import_chunk_0jve1fep.Le)(d) || typeof d.name !== "string") continue;
      _(e, d.name, { text: (0, import_chunk_86sakbrd.dsi)(d.input_schema), lists: (0, import_chunk_86sakbrd.csi)(d.input_schema), objects: (0, import_chunk_86sakbrd.usi)(d.input_schema) });
    }
  } catch (i) {
    o.push(i);
  }
  let s = H.get(n);
  if (s !== void 0) {
    for (let [i, u] of s.asks) _(e, i, u);
    o.push(...s.thrown);
  }
  return o;
}
function X(e) {
  let n = /* @__PURE__ */ new Map(), o = z(n, e);
  return n.size === 0 && o.length === 0 ? void 0 : { asks: n, thrown: o.slice(0, 1) };
}
function PBa(e) {
  let n = X(e);
  if (n === void 0) return;
  let o = Object.freeze([]);
  return H.set(o, n), O.add(o), o;
}
function F() {
  let e = (0, import_chunk_w50zedgp.H7)() ? true : false;
  return !(0, import_chunk_ksk52rm1.pN)() && !e && q((0, import_chunk_ksk52rm1.wUt)());
}
function q(e) {
  return e === "unreadable" ? asi() : e;
}
function G(e, n) {
  if (!S(e)) return [];
  switch (e.attachment.type) {
    case "prompt_snapshot": {
      let o = (0, import_chunk_fe5esh7d.TA)([e]);
      if (o === void 0) throw Error("a saved prompt_snapshot row does not read as one");
      return [...o.toolEntries];
    }
    case "deferred_tools_record": {
      let { entries: o } = (0, import_chunk_fe5esh7d.tj)([e]), a = e.attachment.entries;
      if (!Array.isArray(a) || a.some((s) => !(0, import_chunk_0jve1fep.Le)(s) || typeof s.name !== "string" || !o.has(s.name))) n.push(Error("a saved deferred_tools_record row does not read as one"));
      return [...o];
    }
    case "deferred_tools_delta":
      return [...(0, import_chunk_zmrcnbgs.XWe)([e]).values()].flatMap((o) => [...o].map(([a, { definition: s }]) => [a, s]));
    default:
      return [];
  }
}
function S(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && e.type === "attachment" && (0, import_chunk_0jve1fep.Le)(e.attachment);
}
