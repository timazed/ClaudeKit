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
var chunk_4jzbgp2v_exports = {};
__export(chunk_4jzbgp2v_exports, {
  DPo: () => DPo,
  FXe: () => FXe,
  JHl: () => JHl,
  LPo: () => LPo,
  QHl: () => QHl,
  ZHl: () => ZHl,
  _ct: () => _ct,
  dVt: () => dVt,
  lVt: () => lVt,
  qNe: () => qNe,
  t8i: () => t8i,
  wee: () => wee
});
module.exports = __toCommonJS(chunk_4jzbgp2v_exports);
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var wee = "/api/claude_code/policy_limits", a = "disabled by your organization's policy", s = "disabled for the rest of this session because an organization with a restricted policy was signed in earlier";
function _ct(o, t, i, e) {
  if ((0, import_chunk_hz25f5zd.RPe)(i).length > 0) return `${o} ${t} ${a}.`;
  if (e !== void 0) return e;
  return `${o} ${t} ${a}. Contact your organization admin to enable ${t === "are" ? "them" : "it"}.`;
}
function FXe(o, t) {
  return `${o} ${t} ${s}. Restart Claude Code to re-evaluate.`;
}
function qNe(o) {
  return `Couldn't verify your organization's policy for ${o.toLowerCase()}. Check your network connection and try again.`;
}
function lVt(o) {
  return `Couldn't load your organization's policy, which governs ${o.toLowerCase()}. The request for ${wee} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path. Ask your network admin to allow it; \`claude doctor\` (or /status in a session) shows which host was asked.`;
}
function DPo(o, t, i) {
  let e = `${o} ${t === "are" ? "aren't" : "isn't"} available`, { host: r, httpStatus: n } = i;
  switch (i.errorCode) {
    case "parse_failed":
      return `${e}: Claude Code couldn't read the reply when it asked ${r} for your organization's policy, which usually means a network proxy or web filter answered instead.`;
    case "network_error":
    case "timeout":
      return `${e}: couldn't reach ${r} to load your organization's policy. Check your network or proxy.`;
    case "auth_failed":
      if (n === 403) return `${e}: ${r}, or a proxy in front of it, refused the request for your organization's policy (HTTP 403).`;
      return n === 401 ? `${e}: ${r} didn't accept this session's credentials when Claude Code asked for your organization's policy.` : `${e}: no credentials could be attached to the request for your organization's policy.`;
    case "spurious_304":
      return `${e}: the saved copy of your organization's policy belongs to a previous sign-in, and a fresh one hasn't loaded yet.`;
    case "stale_tunnel_credential":
      return `${e}: the machine running claude ssh changed credentials while your organization's policy was loading, and a fresh copy hasn't loaded yet.`;
    case "request_failed":
      if (n === 404) return `${e}: the request for your organization's policy got a 404 from ${r}, which usually means a proxy or gateway isn't forwarding ${wee}.`;
      if (n === 304) return `${e}: a caching proxy answered in place of ${r} when Claude Code asked for your organization's policy.`;
      if (n === 407) return `${e}: your proxy asked for authentication before it would forward the request for your organization's policy to ${r}.`;
      if (n !== null && (n >= 500 || n === 429)) return `${e}: your organization's policy couldn't be loaded from ${r} (HTTP ${n}). Try again later.`;
      return n !== null ? `${e}: your organization's policy couldn't be loaded from ${r} (HTTP ${n}). Check your proxy settings.` : `${e}: the request to ${r} for your organization's policy didn't complete. If you use a proxy, check that it lets ${r} through.`;
  }
}
function LPo(o) {
  return `Couldn't verify your organization's policy for ${o.toLowerCase()}. Check your network connection, then restart Claude Code and try again.`;
}
function JHl(o) {
  return `/${o} is available for your organization but wasn't when this session started. Restart Claude Code to use it.`;
}
function dVt(o, t) {
  if ((0, import_chunk_hz25f5zd.RPe)(o).length > 0) return a;
  return t ?? a;
}
function QHl() {
  return `${s} \u2014 restart Claude Code to re-evaluate`;
}
function ZHl() {
  return "couldn't verify your organization's policy \u2014 check your network connection and try again";
}
function t8i() {
  return `your organization's policy couldn't be loaded: the request for ${wee} got a 404, which usually means a proxy or gateway isn't forwarding that path. Ask your network admin to allow it`;
}
