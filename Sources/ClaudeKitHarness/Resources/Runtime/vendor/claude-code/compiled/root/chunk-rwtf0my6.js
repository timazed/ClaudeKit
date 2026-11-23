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
var chunk_rwtf0my6_exports = {};
__export(chunk_rwtf0my6_exports, {
  $Ko: () => $Ko,
  D7l: () => D7l,
  DHt: () => DHt,
  H7l: () => H7l,
  HHt: () => HHt,
  M7l: () => M7l,
  aMa: () => aMa,
  nXs: () => nXs,
  ntr: () => ntr,
  rXs: () => rXs
});
module.exports = __toCommonJS(chunk_rwtf0my6_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_5412tm8t = require("/$bunfs/root/chunk-5412tm8t.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
function HHt(e) {
  return (0, import_chunk_5412tm8t.uj)(e) ? e.message : "a value that is not a Claude Code error, so it is not shown";
}
var S = 1e4;
function F(e) {
  return e.length > 1e3 && /^[A-Za-z0-9+/=]+$/.test(e.slice(0, 256));
}
function N(e) {
  let n = 0, u = 0, s = [e];
  while (s.length > 0) {
    if (++u > S) return 1 / 0;
    let o = s.pop();
    if (typeof o === "string") {
      if (!F(o)) n += o.length;
    } else if (o !== null && typeof o === "object") {
      let r = Array.isArray(o) ? o : Object.values(o);
      if (u + s.length + r.length > S) return 1 / 0;
      for (let i of r) s.push(i);
    }
  }
  return n;
}
function y(e) {
  return `Output too large to show here${Number.isFinite(e) ? ` (about ${(0, import_chunk_7e12xj51.dn)(e)})` : ""}. The whole output is in the Claude Code session on the computer running it.`;
}
function k(e, n) {
  let { preview: u, hasMore: s } = (0, import_chunk_qp5chy39.TDe)(e, import_chunk_qp5chy39.uN), o = (0, import_chunk_7cfjrnwy.ee)(e, u.length), r = n ? " The whole output is in the Claude Code session on the computer running it." : "";
  return `Output too large to show here (${(0, import_chunk_7e12xj51.dn)(Buffer.byteLength(e, "utf8"))}).${r} First ${(0, import_chunk_7e12xj51.dn)(import_chunk_qp5chy39.uN)}:
${o}${s ? `
...` : ""}`;
}
function P(e, n, u) {
  if (n === "") return;
  let s = (0, import_chunk_qp5chy39.UQ)(e.name, e.maxResultSizeChars, e.persistenceThresholdCeiling, e.skipAggregateToolResultBudget === true), o = Number.isFinite(s) ? s : import_chunk_tt4yhkc0.ME;
  return n.length <= o ? n : k(n, u);
}
function nXs(e, n) {
  if (e === import_chunk_hn3cwwzt.ke || e === import_chunk_rb36kwbn.yt) return;
  return n !== null && typeof n === "object" && "result" in n && typeof n.result === "string" ? n.result : void 0;
}
function R(e, n) {
  if (e !== import_chunk_hn3cwwzt.ke && e !== import_chunk_rb36kwbn.yt || n === null || typeof n !== "object" || !("persistedOutputPath" in n) || typeof n.persistedOutputPath !== "string" || n.persistedOutputPath === "") return;
  return "persistedOutputSize" in n && typeof n.persistedOutputSize === "number" ? n.persistedOutputSize : 1 / 0;
}
function aMa(e, n, u) {
  if (n.servedText !== void 0) return { kind: "built", toolName: e.name, from: "servedText" };
  let s = R(e.name, u);
  if (s === void 0) return { kind: "built", toolName: e.name, from: n.mcpContent === true ? "mcpContent" : "toolOutput" };
  let o = n.resultBeforeReadBack === void 0 ? y(s) : x(e, n.resultBeforeReadBack, n.toolUseId, n.mcpContent === true, true);
  return o === void 0 ? void 0 : { kind: "stored", text: o };
}
function $Ko(e, n, u, s, o) {
  if (n === "servedText") {
    let i = nXs(e.name, u);
    return i === void 0 ? void 0 : P(e, i, o);
  }
  let r = R(e.name, u);
  if (r !== void 0) return y(r);
  return x(e, u, s, n === "mcpContent", o);
}
function x(e, n, u, s, o) {
  try {
    let r = (0, import_chunk_qp5chy39.UQ)(e.name, e.maxResultSizeChars, e.persistenceThresholdCeiling, e.skipAggregateToolResultBudget === true), i = Number.isFinite(r), l = i ? r : import_chunk_tt4yhkc0.ME;
    if (!i) {
      let a = N(n);
      if (a > l * 10) return y(a);
    }
    let f = e.mapToolResultToToolResultBlockParam(n, u)?.content, d = Array.isArray(f) && (e.isMcp !== true || s), c = typeof f === "string" ? f : d ? f.filter((a) => a?.type === "text" && typeof a.text === "string").map((a) => a.text).join(`
`) : f !== void 0 && f !== null ? (0, import_chunk_w578pjby._)(f) : "";
    if (c === "") return;
    return c.length <= l ? c : k(c, o);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`Could not build the Remote Control result text for a script's ${e.name} call; the Remote Control apps will show an empty result: ${HHt(r)}`, { level: "error" });
    return;
  }
}
var h = 1e4, T = 5e4, m = 1e4;
function DHt(e, n, u) {
  let s = 0, o = 0, r = [e];
  while (r.length > 0 && s <= n && o <= u) {
    let i = r.pop();
    if (o++, typeof i === "string") s += i.length;
    else if (Array.isArray(i)) {
      for (let l of i) if (r.push(l), o + r.length > u) return { chars: s, values: o + r.length };
    } else if (i !== null && typeof i === "object") for (let l in i) {
      if (!Object.hasOwn(i, l)) continue;
      if (s += l.length, r.push(i[l]), o + r.length > u || s > n) return { chars: s, values: o + r.length };
    }
  }
  return { chars: s, values: o };
}
function w(e, n) {
  if (e.isMcp === true || R(e.name, n) !== void 0) return;
  let u = e.stripForCreation ? e.stripForCreation(n) : e.stripToolUseResultAtCreation && e.stripForStorage ? e.stripForStorage(n, false) : n, s = DHt(u, T, m);
  return s.chars <= T && s.values <= m ? u : void 0;
}
function b(e) {
  if (typeof e === "string") {
    if (e.length <= h) return;
    let l = (0, import_chunk_7cfjrnwy.ee)(e, h);
    return `${l}
\u2026[${e.length - l.length} more characters, not sent to Remote Control]`;
  }
  if (Array.isArray(e)) {
    let l = DHt(e, T, m);
    return l.chars > T || l.values > m ? "[too large to send to Remote Control]" : void 0;
  }
  if (e === null || typeof e !== "object") return;
  let n = e, u = false, s = 0, o = 0, r = {}, i = Object.keys(n);
  for (let [l, f] of i.entries()) {
    let d = n[f], c = d;
    if (typeof d === "string" && d.length > h) {
      let p = (0, import_chunk_7cfjrnwy.ee)(d, h);
      c = `${p}
\u2026[${d.length - p.length} more characters, not sent to Remote Control]`;
    } else if (d !== null && typeof d === "object") {
      let p = DHt(d, h, m);
      if (p.chars > h || p.values > m) c = "[too large to send to Remote Control]";
    }
    let a = DHt(c, T, m);
    if (s + a.chars + f.length > T || o + a.values + 1 > m) {
      let p = i.length - l;
      return r["[not sent to Remote Control]"] = `${p} more ${p === 1 ? "field" : "fields"}`, r;
    }
    if (s += a.chars + f.length, o += a.values + 1, c !== d) u = true;
    r[f] = c;
  }
  return u ? r : void 0;
}
function M7l(e, n, u) {
  let { visibleToRemoteClients: s, remoteToolResult: o, hiddenToolUseIds: r, isVirtual: i, detachedToolUseIds: l, withheldScriptToolUseId: f, ...d } = e, c = s === true, a = c ? o : void 0, p = j(a, d.toolUseResultStripped === true, d.toolUseResult, u);
  return n(d).map((g) => {
    if (g.type !== "user") return g;
    let O = c ? B(g) : g, C = U(g, r);
    return { ...O, ...p !== void 0 && { tool_use_result: p }, ...a !== void 0 && I(g, a, d, u), ...C.length > 0 && { hidden_tool_use_ids: C }, ...i === true && { is_virtual: true } };
  });
}
function j(e, n, u, s) {
  if (n || e === null || typeof e !== "object" || !("kind" in e) || e.kind !== "built" || !("toolName" in e) || typeof e.toolName !== "string" || !("from" in e) || e.from !== "toolOutput") return;
  try {
    let o = (0, import_chunk_4vsz8a99.tn)(s ?? [], e.toolName);
    return o === void 0 ? void 0 : w(o, u);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Could not build the structured result of a script's ${e.toolName} call for Remote Control; the Remote Control apps get its text alone: ${HHt(o)}`, { level: "error" });
    return;
  }
}
function A(e, n, u, s, o, r) {
  if (e === null || typeof e !== "object" || !("kind" in e)) return;
  if (e.kind === "stored") return "text" in e && typeof e.text === "string" ? e.text : void 0;
  if (e.kind !== "built" || u || !("toolName" in e) || typeof e.toolName !== "string" || !("from" in e) || e.from !== "toolOutput" && e.from !== "mcpContent" && e.from !== "servedText") return;
  try {
    let i = (0, import_chunk_4vsz8a99.tn)(o ?? [], e.toolName);
    return i === void 0 ? void 0 : $Ko(i, e.from, n, s, r);
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`Could not build the Remote Control result text for a script's ${e.toolName} call; the Remote Control apps will show an empty result: ${HHt(i)}`, { level: "error" });
    return;
  }
}
function ntr(e, n, u) {
  let s = e.remoteToolResult;
  if (e.visibleToRemoteClients !== true || s?.kind !== "built") return;
  try {
    let o = e.message.content, r = Array.isArray(o) ? o.find((l) => l?.type === "tool_result") : void 0;
    if (r?.type !== "tool_result") return;
    let i = A(s, e.toolUseResult, e.toolUseResultStripped === true, r.tool_use_id, n, u);
    return i === void 0 ? void 0 : { kind: "stored", text: i };
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Could not keep the Remote Control text of a script's ${typeof s.toolName === "string" ? s.toolName : "tool"} call when Claude Code dropped the call's result text to save space; the Remote Control apps will show an empty result for that call: ${HHt(o)}`, { level: "error" });
    return;
  }
}
function H7l(e, n) {
  let u = M(n), s = /* @__PURE__ */ new Map();
  for (let o of e) {
    if (o.type !== "user" || !Array.isArray(o.message.content)) continue;
    let r = ntr(o, u, true) ?? o.remoteToolResult;
    for (let i of o.message.content) if (i.type === "tool_result") s.set(i.tool_use_id, r?.kind === "stored" ? r.text : i.content);
  }
  return e.flatMap((o) => o.type !== "assistant" ? [] : o.message.content.flatMap((r) => r.type === "tool_use" && (0, import_chunk_4vsz8a99.tn)(u, r.name) !== void 0 ? [{ tool_name: r.name, tool_input: r.input, tool_use_id: r.id, tool_response: s.get(r.id) }] : []));
}
function rXs(e, n, u) {
  let s = n.visibleToRemoteClients === true ? n.remoteToolResult : void 0, o = U(e, n.hiddenToolUseIds), r = v(n.detachedToolUseIds), i = n.withheldScriptToolUseId;
  return { ...e, ...s !== void 0 && I(e, s, n, M(u)), ...o.length > 0 && { hidden_tool_use_ids: o }, ...r.length > 0 && { detached_tool_use_ids: r }, ...typeof i === "string" && { withheld_script_tool_use_id: i } };
}
function M(e) {
  try {
    return [...e ?? [], ...(0, import_chunk_4vsz8a99.Dbo)() ?? [], ...(0, import_chunk_4vsz8a99.OU)() ?? []];
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Could not list the tools for a script's calls; the VS Code extension will show an empty result for some of them: ${HHt(n)}`, { level: "error" }), e ?? [];
  }
}
function U(e, n) {
  let u = e.message.content;
  if (!Array.isArray(u)) return [];
  let s = new Set(u.flatMap((o) => o?.type === "tool_result" ? [o.tool_use_id] : []));
  return v(n).filter((o) => s.has(o));
}
function v(e) {
  return Array.isArray(e) ? e.filter((n) => typeof n === "string") : [];
}
function I(e, n, u, s) {
  let o = e.message.content;
  if (!Array.isArray(o)) return;
  return { message: { ...e.message, content: o.map((r) => {
    if (r?.type !== "tool_result") return r;
    let i = A(n, u.toolUseResult, u.toolUseResultStripped === true, r.tool_use_id, s, true);
    return i === void 0 ? r : { ...r, content: i };
  }) } };
}
function B(e) {
  if (!("tool_use_result" in e)) return e;
  let { tool_use_result: n, ...u } = e;
  return u;
}
function D7l(e, n) {
  let { visibleToRemoteClients: u, ...s } = e;
  return n(s).map((o) => {
    let r = o.type === "assistant" ? o.message.content : null;
    if (o.type !== "assistant" || !Array.isArray(r)) return o;
    return { ...o, message: { ...o.message, content: r.map((i) => {
      if (i.type !== "tool_use") return i;
      let l;
      try {
        l = b(i.input);
      } catch (f) {
        (0, import_chunk_w578pjby.t)(`Could not shorten the input of a script's ${typeof i.name === "string" ? i.name : "tool"} call for Remote Control; the Remote Control apps get a note in place of the input: ${HHt(f)}`, { level: "error" }), l = "[not sent to Remote Control]";
      }
      return l === void 0 ? i : { ...i, input: l };
    }) } };
  });
}
