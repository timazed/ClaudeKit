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
var chunk_zptyswqz_exports = {};
__export(chunk_zptyswqz_exports, {
  Ioi: () => Ioi,
  Moi: () => Moi,
  Ooi: () => Ooi,
  PUa: () => PUa,
  Poi: () => Poi,
  RUa: () => RUa,
  xUa: () => xUa
});
module.exports = __toCommonJS(chunk_zptyswqz_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_q2a93xh8 = require("/$bunfs/root/chunk-q2a93xh8.js");
var import_chunk_2qh29p4b = require("/$bunfs/root/chunk-2qh29p4b.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function RUa() {
  return import_chunk_c203g5kd.So.CLAUDE_CODE_ARTIFACT_MCP ?? true;
}
function xUa() {
  return (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)().min(1).max(64), (0, import_chunk_adx6804h.ie)()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${import_chunk_nwk8fexj.Hx}\` skill for the current contract and per-capability guidance.`);
}
function Poi(i) {
  let a = /* @__PURE__ */ new Map();
  for (let e of i) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let t = e.mcpInfo.serverName, r = a.get(t);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue;
    }
    let o = e.mcpInfo.displayName ?? t;
    a.set(t, { server: o, toolPrefix: (0, import_chunk_px0hhsq7.mr)(e.name)?.serverName ?? t, toolNames: [e.mcpInfo.toolName], ...(0, import_chunk_q2a93xh8.pSo)(o) ? {} : { declarable: false } });
  }
  return [...a.values()];
}
function Ooi(i) {
  let a = `mcp__${import_chunk_qdcbcsg7.$n}__`, e = /* @__PURE__ */ new Set();
  for (let t of i) {
    if (!t.name.startsWith(a)) continue;
    let r = t.name.slice(a.length), o = r.indexOf("__");
    if (o > 0) e.add(r.slice(0, o));
  }
  return [...e];
}
function Ioi() {
  return (0, import_chunk_3t7ve0wy.Ol)();
}
function d(i) {
  let a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
  for (let r of i) {
    let o = r.mcpInfo;
    if (o?.serverType !== "sdk" || (0, import_chunk_mzmcvr6c.ht)(o.serverName) === null) continue;
    let l = a.get(o.serverName);
    if (l !== void 0) {
      l.toolNames.push(o.toolName);
      continue;
    }
    if (e.has(o.serverName)) continue;
    let c = o.serverInfoName ?? "";
    if (c.trim() === "" || (0, import_chunk_mzmcvr6c.ht)(c.trim()) !== null) {
      e.add(o.serverName);
      continue;
    }
    a.set(o.serverName, { server: c, toolPrefix: o.serverName, toolNames: [o.toolName], ...(0, import_chunk_q2a93xh8.pSo)(c) ? {} : { declarable: false } });
  }
  let t = [...a.values()];
  return { named: t.filter((r) => r.declarable !== false), unnamedIds: [...e], undeclarable: t.filter((r) => r.declarable === false) };
}
function p() {
  return (0, import_chunk_865at33z.b)("tengu_cobalt_plinth_yew", false);
}
function Moi(i, a) {
  let e = Ioi() ? d(i) : null, t = (0, import_chunk_2qh29p4b.l0t)(a ?? []);
  if (!t) return { ccrHosted: false, metaConnector: null, hosted: e };
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true, o = t.name, l = i.find((f) => f.mcpInfo?.serverName === o), c = l && (0, import_chunk_px0hhsq7.mr)(l.name)?.serverName, m = c && p() ? { server: import_chunk_epy4sc29.oIo, toolPrefix: c } : null;
  return { ccrHosted: r, metaConnector: m, hosted: e };
}
function PUa(i, a) {
  let { metaConnector: e, hosted: t } = Moi(i, a), r = [...Poi(i), ...t === null ? [] : [...t.named, ...t.undeclarable]];
  return e ? [...r, e] : r;
}
