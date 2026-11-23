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
var chunk_yf5ktj74_exports = {};
__export(chunk_yf5ktj74_exports, {
  GYr: () => GYr,
  J9o: () => J9o,
  Jtt: () => Jtt,
  Q9o: () => Q9o,
  SRn: () => SRn,
  SUe: () => SUe,
  Z9o: () => Z9o,
  _oi: () => _oi,
  bRn: () => bRn,
  goi: () => goi,
  hoi: () => hoi,
  wRn: () => wRn
});
module.exports = __toCommonJS(chunk_yf5ktj74_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_9vbqjvhj = require("/$bunfs/root/chunk-9vbqjvhj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function J9o(e) {
  return !!e?.experimental?.["claude/channel"];
}
var SRn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("notifications/claude/channel"), params: (0, import_chunk_adx6804h.c)({ content: (0, import_chunk_adx6804h.n)(), meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() }) })), Q9o = "notifications/claude/channel/permission", hoi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)(Q9o), params: (0, import_chunk_adx6804h.c)({ request_id: (0, import_chunk_adx6804h.n)(), behavior: (0, import_chunk_adx6804h.F)(["allow", "deny"]) }) })), goi = "notifications/claude/channel/permission_request", f = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function g(e) {
  return (0, import_chunk_px0hhsq7.lr)(e, "channel");
}
function bRn(e, i, r) {
  return { mode: "prompt", agentId: (0, import_chunk_f9x2f6cx.ot)(), value: h(e, i, r), toolsUsed: [g(e)], priority: "next", isMeta: true, origin: { kind: "channel", server: e }, skipSlashCommands: true, skipAttachments: true };
}
function h(e, i, r) {
  (0, import_chunk_1ek4hhs6.LH)(g(e));
  let o = Object.entries(r ?? {}), [d, a] = k(o, ([u]) => f.test(u));
  if (a.length > 0) (0, import_chunk_w578pjby.t)(`[channel] ${e}: dropped ${a.length} meta key(s) that don't match ${f.source}: ${a.map(([u]) => u).join(", ")}`, { level: "warn" });
  let s = d.map(([u, l]) => ` ${u}="${(0, import_chunk_hr2stdq7.lf)(l)}"`).join(""), m = (0, import_chunk_hr2stdq7.wVt)(import_chunk_k449cc64.W8, (0, import_chunk_865at33z.qpn)(i));
  return `<${import_chunk_k449cc64.W8} source="${(0, import_chunk_hr2stdq7.lf)(e)}"${s}>
${m}
</${import_chunk_k449cc64.W8}>`;
}
function k(e, i) {
  let r = [], o = [];
  for (let d of e) (i(d) ? r : o).push(d);
  return [r, o];
}
function GYr(e) {
  if (e) return { entries: e, source: "org" };
  return { entries: (0, import_chunk_9vbqjvhj.e8o)(), source: "ledger" };
}
function _oi(e) {
  return e === "provider" || e === "disabled" || e === "capability" || e === "era";
}
function Jtt(e) {
  if ((0, import_chunk_865at33z.Rt)()) {
    let i = (0, import_chunk_865at33z.or)();
    return (i === "team" || i === "enterprise") && e?.channelsEnabled !== true;
  }
  return e !== null && e.channelsEnabled !== true;
}
function SUe(e, i) {
  let r = e.split(":");
  return i.find((o) => o.kind === "server" ? e === o.name : r[0] === "plugin" && (r[1] === o.name || r[1] === (0, import_chunk_xcgcdx61.kB)(o.name, `${o.name}@${o.marketplace}`)));
}
function Z9o(e, i) {
  let r = e ? (0, import_chunk_xcgcdx61.uf)(e) : void 0, o = (0, import_chunk_xcgcdx61.uf)((0, import_chunk_xcgcdx61.tC)(`${i.name}@${i.marketplace}`)).name;
  return r?.marketplace !== void 0 && r.marketplace === i.marketplace && (i.dev ? r.name === o : (0, import_chunk_xcgcdx61.qb)(r.name, o));
}
function wRn(e, i, r, o) {
  if (!J9o(i)) return { action: "skip", kind: "capability", reason: "server did not declare claude/channel capability" };
  if (o === "modern") return { action: "skip", kind: "era", reason: "connection negotiated a modern protocol revision with no unsolicited notification path" };
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return { action: "skip", kind: "provider", reason: "channels are not available on third-party providers" };
  if ((0, import_chunk_9vbqjvhj.$gt)()) return { action: "skip", kind: "disabled", reason: "channels feature is not currently available" };
  let d = (0, import_chunk_2yx6c1y2._e)("policySettings");
  if (Jtt(d)) return { action: "skip", kind: "policy", reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)" };
  let a = SUe(e, (0, import_chunk_f9x2f6cx.iE)());
  if (!a) return { action: "skip", kind: "session", reason: `server ${e} not in --channels list for this session` };
  if (a.kind === "plugin") {
    let s = r ? (0, import_chunk_xcgcdx61.uf)(r) : void 0;
    if (s?.marketplace === void 0 || !Z9o(r, a)) return { action: "skip", kind: "marketplace", reason: `you asked for plugin:${a.name}@${a.marketplace} but the installed plugin is ${s?.marketplace !== void 0 ? (0, import_chunk_tp3c5q2s.Ft)(`${s.name}@${s.marketplace}`) : "from an unknown source"}` };
    if (!a.dev) {
      let { entries: m, source: u } = GYr(d?.allowedChannelPlugins);
      if (!m.some((l) => l.marketplace === s.marketplace && (l.plugin === s.name || l.marketplace === import_chunk_xcgcdx61.Ds && (0, import_chunk_xcgcdx61.fHo)(l.plugin) === s.name))) {
        let l = (0, import_chunk_tp3c5q2s.Ft)(`${s.name}@${s.marketplace}`);
        return { action: "skip", kind: "allowlist", reason: u === "org" ? `plugin ${l} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${l} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)` };
      }
    }
  } else if (!a.dev) return { action: "skip", kind: "allowlist", reason: `server ${a.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)` };
  return { action: "register" };
}
