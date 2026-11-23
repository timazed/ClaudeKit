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
var chunk_1jsam4b3_exports = {};
__export(chunk_1jsam4b3_exports, {
  $En: () => $En,
  $Jn: () => $Jn,
  AMt: () => AMt,
  Azr: () => Azr,
  BJn: () => BJn,
  Czr: () => Czr,
  DKs: () => DKs,
  Ezr: () => Ezr,
  FEn: () => FEn,
  FJn: () => FJn,
  FKs: () => FKs,
  HKs: () => HKs,
  IKs: () => IKs,
  LKs: () => LKs,
  MKs: () => MKs,
  NKs: () => NKs,
  OKs: () => OKs,
  PKs: () => PKs,
  RMt: () => RMt,
  Tzr: () => Tzr,
  UJn: () => UJn,
  j8t: () => j8t,
  vzr: () => vzr,
  xKs: () => xKs,
  z2o: () => z2o
});
module.exports = __toCommonJS(chunk_1jsam4b3_exports);
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_r3y72ye0 = require("/$bunfs/root/chunk-r3y72ye0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var $En = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)().min(1) }));
var Azr = (t) => t.kind === "plugin" && "name" in t ? t.name : void 0;
function NKs(t, e) {
  let { message: o } = t, r = o.content.flatMap((s) => {
    let f = $En().safeParse(s);
    return f.success ? [f.data.text] : [];
  }), i = o.content.find((s) => s.type !== "text");
  if (i !== void 0 || r.length !== o.content.length) return { reason: `a ${i?.type ?? "text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)` };
  if (o.type === "system") {
    let [s] = r;
    return s !== void 0 && r.length === 1 ? { row: { ...(0, import_chunk_bzyb60p0.Pt)(s, "info"), uuid: e } } : { reason: "a notice that is not one text block" };
  }
  let m = o.type === "user" && o.isMeta === true, u = Azr(t.origin);
  return m ? { row: (0, import_chunk_bzyb60p0.Me)({ content: r.map((s) => ({ type: "text", text: s })), isMeta: true, uuid: e, ...u !== void 0 && { origin: { kind: "plugin", name: u } } }) } : { reason: `a ${o.type} row` + (o.type === "user" ? " that is not isMeta" : "") + " (a plugin appends a user-role isMeta row or a system notice; a prompt is $.prompt.submit)" };
}
function FKs(t, e) {
  let o = t ?? "main";
  if (e) return `${o} is a conversation no plugin may shape`;
  if (t === void 0) return "this session keeps no conversation to append to";
  return `no running loop is ${t}`;
}
var Tzr = (t) => (0, import_chunk_bzyb60p0.cSe)(t).messages.map((e) => ({ content: e.message.content }));
function FEn(t) {
  let { content: e } = t;
  return typeof e === "string" ? [e] : e.flatMap((r) => r.type === "text" ? [r.text] : []);
}
function DKs(t) {
  let e = "content" in t ? t.content : void 0;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function Czr(t) {
  switch (t.type) {
    case "user":
    case "assistant":
      return (0, import_chunk_bzyb60p0.aXo)(t.message.content);
    case "attachment":
      return Tzr(t).flatMap(FEn).map((e) => ({ type: "text", text: e }));
    case "system": {
      let e = DKs(t);
      return e === void 0 ? [] : [{ type: "text", text: e }];
    }
  }
}
function z2o(t) {
  let e = t.type === "attachment", o = t.type === "system", r = e ? t.attachment.type : o ? t.subtype : void 0, i = !(0, import_chunk_f9x2f6cx.Hu)(t), m = t.type === "assistant" ? "assistant" : "user", u = "isMeta" in t && t.isMeta === true;
  return { type: t.type, ...r !== void 0 && { name: r }, ...i && { role: m }, ...u && { isMeta: true }, content: Czr(t) };
}
var LKs = (t, e) => !(0, import_chunk_bzyb60p0.eoo)(t) && e.length > 0 && e.every(({ content: o }) => typeof o === "string" || o.every((r) => r.type === "text"));
async function UJn(t, e) {
  let r = e?.isHookable === true ? e : void 0, i = (0, import_chunk_mzmcvr6c.ht)(t.uuid), m = FKs(t.agentId, e !== void 0), s = i !== null && r !== void 0 ? NKs(t, i) : { reason: i === null ? "a uuid the engine did not mint" : m };
  if (r === void 0 || "reason" in s) {
    let c = "reason" in s ? s.reason : m;
    throw new import_chunk_hcg738hf.je(`$.session.append: refused: ${c}`);
  }
  let { row: f } = s;
  if (f.type === "user") {
    let c = Azr(t.origin);
    r.notes.add([{ rowUuid: f.uuid, ...c !== void 0 && { plugin: c }, content: (0, import_chunk_sjqze7qg.tU)(f.message.content) }]), (0, import_chunk_r3y72ye0.Rzr)(r);
  } else (r.keepArrived ?? r.keep)([f]), r.arrived([f]);
  return { message: z2o(f), uuid: f.uuid };
}
var Ezr = /* @__PURE__ */ new Set(["text", "image", "document"]);
function j8t(t) {
  let e = /* @__PURE__ */ new Map();
  return t.map((o) => {
    if (Ezr.has(o.type)) return;
    if (o.type === "tool_use" && typeof o.id === "string") return `tool_use:${o.id}`;
    let r = o.tool_use_id;
    if (o.type === "tool_result" && typeof r === "string") return `tool_result:${r}`;
    let i = e.get(o.type) ?? 0;
    return e.set(o.type, i + 1), `${o.type}#${i}`;
  });
}
(0, import_chunk_adx6804h.B)();
var xKs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.n)() }));
var AMt = (t) => Array.isArray(t) ? t.flatMap((e) => {
  let o = xKs().safeParse(e);
  return o.success ? [o.data] : [];
}) : [];
var RMt = (t, e) => e.flatMap((o) => {
  let r = o.kind === "text" ? o.text : t[o.index];
  return r === void 0 ? [] : [r];
});
function $Jn(t, e) {
  if (e === void 0 || typeof e === "string") return e ?? t;
  let o = Array.isArray(t) ? t : [], r = /* @__PURE__ */ new Set();
  return e.flatMap((i) => {
    let m = o.findIndex((f, c) => !r.has(c) && (0, import_chunk_bzyb60p0.fSt)(f, i)), u = o[m], s = $En().safeParse(i);
    if (u !== void 0) return r.add(m), [u];
    return s.success ? [{ type: "text", text: s.data.text }] : [];
  });
}
var PKs = /* @__PURE__ */ new Set(["thinking", "redacted_thinking", "tool_result"]);
function OKs(t, e, o) {
  let r = e.findIndex((m, u) => !o.has(u) && Ezr.has(m.type) && (0, import_chunk_bzyb60p0.fSt)(m, t));
  if (r !== -1) return o.add(r), { kind: "raised", index: r };
  let i = $En().safeParse(t);
  return i.success ? { kind: "text", text: i.data.text } : void 0;
}
var vzr = "^";
var IKs = (t, e, o) => ({ kind: "tool-result", index: t, ...e !== void 0 && { content: e }, isError: o });
(0, import_chunk_adx6804h.B)();
var MKs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("tool_result"), content: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.n)() }))]).optional(), is_error: (0, import_chunk_adx6804h.P)().optional() }));
function HKs(t, e, o) {
  let r = MKs().safeParse(e);
  return r.success ? IKs(t, r.data.content, r.data.is_error ?? o) : { kind: "raised", index: t };
}
function FJn(t, e) {
  if (t.length === 0) return [];
  let o = j8t(t), r = new Set(o.filter((a) => a !== void 0)), i = o.filter((a, d) => a !== void 0 && t[d]?.type === "tool_result"), m = j8t(e), u = (0, import_chunk_4smdap7r.U)(e, (a) => a.type === "tool_result" && typeof a.tool_use_id !== "string") === i.length, s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), g = vzr, S = 0;
  e.forEach((a, d) => {
    let l = a.type === "tool_result" && typeof a.tool_use_id !== "string", y = l ? u ? i[S++] : void 0 : m[d];
    if (y === void 0 && !l) {
      let A = OKs(a, t, c), _ = s.get(g) ?? [];
      if (A !== void 0) s.set(g, [..._, A]);
      return;
    }
    if (y === void 0 || !r.has(y)) return;
    if (g = y, a.type === "tool_result") f.set(y, a);
  });
  let k = t.findIndex((a) => !PKs.has(a.type)), T = k === -1 ? t.length : k, x = [];
  if (t.forEach((a, d) => {
    if (d === T) x.push(...s.get(vzr) ?? []);
    let l = o[d];
    if (l === void 0) return;
    let y = f.get(l);
    x.push(y === void 0 ? { kind: "raised", index: d } : HKs(d, y, a.is_error === true), ...s.get(l) ?? []);
  }), T === t.length) x.push(...s.get(vzr) ?? []);
  return x.length > 0 ? x : [{ kind: "text", text: import_chunk_bp9b0hd8.Wp }];
}
var BJn = ({ message: t, agentId: e }, o) => ({ message: { type: t.type, ...t.type === "user" && { role: "user", isMeta: true }, content: t.content }, door: "note", origin: { kind: "plugin", name: o }, uuid: (0, import_crypto.randomUUID)(), ...e !== void 0 && { agentId: e } });
