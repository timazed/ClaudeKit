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
var chunk_wzzzxdne_exports = {};
__export(chunk_wzzzxdne_exports, {
  Aon: () => Aon,
  BWe: () => BWe,
  Pst: () => Pst,
  QKl: () => QKl,
  SG: () => SG,
  Ssl: () => Ssl,
  YAi: () => YAi,
  ZKl: () => ZKl,
  _wt: () => _wt,
  aus: () => aus,
  bsl: () => bsl,
  eql: () => eql,
  fuo: () => fuo,
  huo: () => huo,
  lAe: () => lAe,
  lus: () => lus,
  muo: () => muo,
  puo: () => puo,
  tql: () => tql,
  uuo: () => uuo,
  wsl: () => wsl,
  ysl: () => ysl,
  ywt: () => ywt
});
module.exports = __toCommonJS(chunk_wzzzxdne_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function R() {
  let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), o = 0, r = 0, a = 0, n = [], l = (p, c) => {
    e.set(p, c), n.push(p), r += 1;
  };
  return { answerOf: (p) => e.get(p), pendingOf: (p) => t.get(p), revision: () => r, settledSince: (p) => p < a ? void 0 : n.slice(p - a), settle: l, resolve: (p, c) => {
    let f = o, u = c.then((P) => {
      if (f === o) l(p, P), t.delete(p);
      return P;
    });
    return t.set(p, u), u.catch(() => {
      if (f === o) t.delete(p);
    }), u;
  }, invalidatePromptAttachments: () => {
    o += 1, e.clear(), t.clear(), r += 1, a = r, n.length = 0;
  } };
}
var m = (0, import_chunk_t57w17k7.de)(R(), (e) => e.invalidatePromptAttachments());
var Pst = m.answerOf;
var ysl = m.revision;
var QKl = m.settledSince;
var Ssl = m.invalidatePromptAttachments;
var ZKl = m.pendingOf;
var eql = m.resolve;
var tql = m.settle;
function SG(e) {
  return Array.isArray(e) && e.some((t) => t.type === "tool_result");
}
function aus(e) {
  if (SG(e.message.content)) return false;
  return Boolean(e.promptId || e.turnOrigin || !(e.isMeta || e.isVirtual || e.isVisibleInTranscriptOnly));
}
var y = 1e7;
function A(e, t) {
  return typeof e === "number" && Number.isInteger(e) && e >= t && e <= y;
}
function uuo(e) {
  if (typeof e !== "object" || e === null || !("promptIndex" in e) || !("turnIndex" in e)) return false;
  let { promptIndex: t, turnIndex: o } = e;
  return A(o, 1) && A(t, 0) && t <= o;
}
function lus(e, t) {
  let o = e[t];
  if (o?.type !== "user" || !uuo(o.turnPosition)) return;
  let { turnIndex: r } = o.turnPosition, { promptIndex: a } = o.turnPosition;
  for (let n = t - 1; n >= 0; n--) {
    let l = e[n];
    if (l?.type !== "user" || !uuo(l.turnPosition)) continue;
    if (l.turnPosition.turnIndex !== r) break;
    a = Math.max(a, l.turnPosition.promptIndex);
  }
  return { promptIndex: a, turnIndex: r };
}
function _wt(e) {
  let { content: t } = e.message;
  if (!Array.isArray(t) || t.length !== 1) return false;
  let [o] = t;
  return o?.type === "text" && (o.text === import_chunk_0ha8wex8.WC || o.text === import_chunk_0ha8wex8.ou);
}
function x(e) {
  let t = false;
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r?.type === "assistant" && !(0, import_chunk_xfj2cwfv.ky)(r)) t = true;
    if (r?.type !== "user") continue;
    if (uuo(r.turnPosition)) return lus(e, o);
    if (_wt(r)) continue;
    if (r.isCompactSummary === true) return "unknown";
    if (t && aus(r)) return "unknown";
  }
  return;
}
function T(e) {
  let t = x(e);
  return t === "unknown" ? void 0 : t;
}
function fuo(e, t) {
  let o = t === "human" ? 1 : 0, r = x(e);
  if (r === "unknown") return;
  if (r !== void 0) return r.turnIndex < y ? { promptIndex: r.promptIndex + o, turnIndex: r.turnIndex + 1 } : void 0;
  return e.some((n) => n.type === "assistant" && !(0, import_chunk_xfj2cwfv.ky)(n) || n.type === "user" && n.isCompactSummary === true || n.type === "system" && n.subtype === "compact_boundary") ? void 0 : { promptIndex: o, turnIndex: 1 };
}
function puo(e, t) {
  try {
    let o = T(t);
    return o === void 0 ? e : { ...e, turnPosition: o };
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), e;
  }
}
function huo(e) {
  return `Claude requested permissions to use ${e}, but you haven't granted it yet.`;
}
function S(e, t, o, r) {
  return (0, import_chunk_xfj2cwfv.Jr)(o, r) && (e.isDestructive?.(t) ?? false) && (import_chunk_c203g5kd.s.CLAUDE_CODE_USER_DELEGATED_SESSION_DIRECT_API || (0, import_chunk_865at33z.b)("tengu_cowork_auto_mode_include_allowed_write_mcp", (0, import_chunk_f9x2f6cx.st)()));
}
function bsl() {
  return (0, import_chunk_865at33z.b)("tengu_cowork_auto_mode_include_allowed_write_mcp", false);
}
function w(e, t, o, r) {
  return e.mcpInfo !== void 0 && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && S(e, t, o, r.servedCall === true);
}
function Aon(e, t) {
  return (0, import_chunk_ht27b0vz.wV)(t).some((o) => o.source === "mcpServerPolicy" && (0, import_chunk_ht27b0vz.Gjt)(e, o));
}
function wsl(e, t, o, r, a) {
  let { source: n } = e;
  return (n === "cliArg" || n === "command" || n === "session" || n === "mcpMount") && YAi(t, o, r, a) ? n : void 0;
}
function YAi(e, t, o, r) {
  return w(e, t, o, r) && Aon(e, r);
}
function M(e, t, o, r, a, n) {
  return (e.source === "cliArg" || e.source === "session" || e.source === "mcpMount") && w(t, o, r, a) && (Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_USER_DELEGATED_SESSION_DIRECT_API) || (0, import_chunk_3t7ve0wy.ph)() && n() === "arbiter") && Aon(t, a);
}
function ywt(e, t, o, r, a, n, l) {
  if (e === null) return;
  if (e.source === "mcpServerPolicy" && S(t, o, r, false)) return "serverPolicy";
  if (t.mcpInfo === void 0) return;
  let p = l?.permissionContext ?? (0, import_chunk_bz1f2qnq.Z)(a);
  if (l !== void 0) l.permissionContext = p, l.classifiesMcpCalls ??= (0, import_chunk_839h1d5e.Co)(import_chunk_rmc00en4.sNn);
  if ((0, import_chunk_rmc00en4.NDe)(t, p, l?.classifiesMcpCalls)) return "remoteSession";
  if ((0, import_chunk_rmc00en4.j$t)(t, p) && n() === "arbiter") return "workspaceShell";
  return M(e, t, o, r, p, n) ? "shadowedServerPolicy" : void 0;
}
function BWe(e, t, o) {
  let r = o?.forMcpSkill === true && !o.hostWorded, a = o?.remedy ?? (o?.hostWorded ? "Only the app that hosts this session can show that disclosure, in its own permission prompt." : r ? "The user can approve this load in an interactive Claude Code session, where the permission dialog names the skill." : "The user can run this from an interactive Claude Code session, where the permission dialog renders the full disclosure."), n = o?.hostWorded ? "host-worded ask not forwarded:" : "localDisplayOnly ask not forwarded:";
  return { behavior: "deny", message: r ? `Permission for ${e} is needed before a skill of an MCP server loads: the user must see its server and its version before approving, and ${t} cannot show them. ${a}` : `Permission for ${e} requires the user to read a consent disclosure before approving, and ${t} cannot display it. ${a}`, decisionReason: { type: "other", reason: r ? `MCP skill ask not forwarded: ${t} cannot show the skill's server and version` : `${n} ${t} cannot render the consent disclosure the approval depends on` } };
}
function lAe(e) {
  return e.localDisplayOnly === true || e.hostDisplay !== void 0;
}
function muo(e) {
  return e.startsWith("localDisplayOnly ask not forwarded:") || e.startsWith("host-worded ask not forwarded:") || e.startsWith("MCP skill ask not forwarded:");
}
