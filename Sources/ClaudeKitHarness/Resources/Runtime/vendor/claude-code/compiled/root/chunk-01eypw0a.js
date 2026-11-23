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
var chunk_01eypw0a_exports = {};
__export(chunk_01eypw0a_exports, {
  $0i: () => $0i,
  $gs: () => $gs,
  F0i: () => F0i,
  Fgs: () => Fgs,
  Kan: () => Kan,
  Npe: () => Npe,
  Ugs: () => Ugs,
  _U: () => _U,
  _Wt: () => _Wt,
  gWt: () => gWt,
  ohl: () => ohl,
  s_o: () => s_o,
  shl: () => shl
});
module.exports = __toCommonJS(chunk_01eypw0a_exports);
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
function Fgs(e, n) {
  return e.filter((r) => {
    let o = (0, import_chunk_f9x2f6cx.pte)(r);
    if (o === void 0) return true;
    if (n.has(o)) return false;
    return n.add(o), true;
  });
}
function l(e) {
  return e === void 0 ? void 0 : (0, import_chunk_px0hhsq7.KDs)(e) ?? { type: "unknown" };
}
function gWt(e) {
  return typeof e === "string" && /^msg_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/.test(e);
}
var _ = 2147483648;
function m(e) {
  return e === "artifact" || e === "memory" || e === "session" ? e : void 0;
}
function w(e) {
  return e === "read" || e === "write" || e === "copy" ? e : void 0;
}
function F0i(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return;
  if (e.response_id !== void 0) return gWt(e.response_id) ? { response_id: e.response_id, listed: Array.isArray(e.listed) ? e.listed.filter(gWt) : [], ...(0, import_chunk_px0hhsq7.wge)(e.mark_sent_by) && { mark_sent_by: e.mark_sent_by } } : void 0;
  let n = {};
  if (typeof e.tool_name === "string") n.tool_name = e.tool_name;
  if ((0, import_chunk_px0hhsq7.wge)(e.tool_use_id)) n.tool_use_id = e.tool_use_id;
  if ((0, import_chunk_px0hhsq7.wge)(e.event_id)) n.event_id = e.event_id;
  if (n.tool_use_id === void 0 && n.event_id === void 0) return;
  if (n.tool_use_id !== void 0 && n.tool_name === void 0) n.tool_name = "";
  if (e.inner_call_index !== void 0) {
    if (typeof e.inner_call_index !== "number" || !Number.isSafeInteger(e.inner_call_index) || e.inner_call_index < 0 || e.inner_call_index >= _) return;
    n.inner_call_index = e.inner_call_index;
  }
  if (e.no_message === true) n.no_message = true;
  if (e.implicit === true) n.implicit = true;
  if (e.carried === true) n.carried = true;
  let r = l(e.server);
  if (r !== void 0) n.server = r;
  if ((0, import_chunk_px0hhsq7.wge)(e.mcp_tool_name)) n.mcp_tool_name = e.mcp_tool_name;
  if ("source" in e && e.source !== void 0) {
    let o = e.source;
    if (!(0, import_chunk_ma3kja9f.T)(o) || !(0, import_chunk_px0hhsq7.wge)(o.type) || !((0, import_chunk_px0hhsq7.wge)(o.id) || o.id === null)) return;
    n.source = { type: o.type, id: o.id };
  }
  if ("touched" in e && e.touched !== void 0) {
    let o = e.touched;
    if (!(0, import_chunk_ma3kja9f.T)(o)) return;
    let i = m(o.kind), u = w(o.action);
    if (i === void 0 || u === void 0 || !((0, import_chunk_px0hhsq7.wge)(o.id) || o.id === null) || !(o.to === void 0 || (0, import_chunk_px0hhsq7.wge)(o.to))) return;
    n.touched = { kind: i, id: o.id, action: u, ...o.to !== void 0 && { to: o.to } };
  }
  return n;
}
var s_o = 1;
function _Wt(e, ...n) {
  for (let r of n) if (!e.incomplete?.includes(r)) e.incomplete = [...e.incomplete ?? [], r];
}
function F(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return;
  let n = import_chunk_f9x2f6cx.ejl.find((i) => i === e.type), r = import_chunk_f9x2f6cx.ZWl.find((i) => i === e.via);
  if (n === void 0 || r === void 0) return;
  let o = n === "unknown" ? e.id === null ? null : void 0 : (0, import_chunk_px0hhsq7.wge)(e.id) ? e.id : void 0;
  return o === void 0 ? void 0 : { type: n, id: o, via: r, ...(0, import_chunk_px0hhsq7.wge)(e.started) && { started: e.started } };
}
function ohl(e) {
  if (e.v !== s_o || !Array.isArray(e.sessions)) return { sessions: [], lost: true };
  let n = e.sessions.map(F);
  return { sessions: Npe(n.flatMap((r) => r ?? [])), lost: n.some((r) => r === void 0) };
}
function Npe(e) {
  let n = /* @__PURE__ */ new Set();
  return e.filter((r) => {
    let o = (0, import_chunk_f9x2f6cx.h3n)(r);
    if (n.has(o)) return false;
    return n.add(o), true;
  });
}
function $0i(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && (0, import_chunk_ma3kja9f.T)(e.forkedFrom) && (0, import_chunk_px0hhsq7.wge)(e.forkedFrom.sessionId) ? e.forkedFrom.sessionId : void 0;
}
function Kan(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && (0, import_chunk_px0hhsq7.wge)(e.sessionId) ? e.sessionId : void 0;
}
function _U(e, n) {
  return { type: "claude_code_session", id: e, via: n };
}
function $gs(e, n, r = []) {
  if (e.type === "data-flow-incomplete") {
    _Wt(n, ...(0, import_chunk_f9x2f6cx.JWl)(e.codes));
    return;
  }
  if (e.type !== "data-flow-records") return;
  if (e.v !== s_o) {
    _Wt(n, import_chunk_f9x2f6cx.f3n);
    return;
  }
  if (!Array.isArray(e.records)) {
    _Wt(n, import_chunk_f9x2f6cx.f3n);
    return;
  }
  let o = e.records.flatMap((d) => F0i(d) ?? []);
  if (o.length < e.records.length) _Wt(n, import_chunk_f9x2f6cx.f3n);
  let i = n.records.splice(n.records.findLastIndex((d) => d.response_id === void 0) + 1), u = new Map(e.snapshot === true ? [] : i.map((d) => [d.response_id, d])), a = [], c = /* @__PURE__ */ new Set();
  for (let d of o) if (d.response_id === void 0) a.push(d);
  else {
    let { listed: s, ...t } = d;
    s?.forEach((f) => {
      u.delete(f), c.add(f);
    }), u.set(d.response_id, t);
  }
  for (let d of c.size > 0 ? r : []) if (d.records.findLast(({ response_id: t }) => t === void 0 || c.has(t))?.response_id !== void 0) d.records = d.records.filter(({ response_id: t }) => !c.has(t));
  if (e.snapshot === true) {
    n.records = [...Fgs(a, /* @__PURE__ */ new Set()), ...u.values()];
    return;
  }
  if (a.length === 0) {
    u.forEach((d) => n.records.push(d));
    return;
  }
  let p = /* @__PURE__ */ new Map();
  n.records.forEach((d, s) => {
    let t = (0, import_chunk_f9x2f6cx.pte)(d);
    if (t !== void 0) p.set(t, s);
  });
  for (let d of a) {
    let s = (0, import_chunk_f9x2f6cx.pte)(d), t = s === void 0 ? void 0 : p.get(s), f = t === void 0 ? void 0 : n.records[t];
    if (t === void 0 || f === void 0) {
      if (n.records.push(d), s !== void 0) p.set(s, n.records.length - 1);
      continue;
    }
    if (f.carried === true && d.carried !== true) {
      n.records[t] = d;
      continue;
    }
    if (d.no_message === true && f.no_message !== true) n.records[t] = { ...f, no_message: true };
  }
  u.forEach((d) => n.records.push(d));
}
function Ugs(e, n) {
  let r = e.get(n);
  if (r === void 0) r = { records: [] }, e.set(n, r);
  return r;
}
function shl(e) {
  let n = { records: [] };
  return $gs({ type: "data-flow-records", v: s_o, records: e.flatMap((r) => r.records) }, n), _Wt(n, ...e.flatMap((r) => r.incomplete ?? [])), n;
}
