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
var chunk_w97htnr5_exports = {};
__export(chunk_w97htnr5_exports, {
  D8l: () => D8l,
  L8l: () => L8l,
  N8l: () => N8l,
  TKs: () => TKs
});
module.exports = __toCommonJS(chunk_w97htnr5_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_be4a2jph = require("/$bunfs/root/chunk-be4a2jph.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
function D8l(r) {
  let { inputString: e, context: n, uuid: i, origin: o, verifiedSlackHumanTurn: s } = r, t = b(e, n.options.commands, false);
  if (t === void 0) return { kind: "none" };
  let { folded: d, effectiveCmd: l } = t, c = (0, import_chunk_bzyb60p0.tSt)(l, { origin: o, relayAuthored: s === true });
  if ((0, import_chunk_bzyb60p0.Ien)(l) && c) return { kind: "updated", effectiveSkipSlash: false, effectiveInput: e, effectiveContext: n };
  let u = (0, import_chunk_bzyb60p0.mNt)(l);
  if (u && (0, import_chunk_vhsysgcd.yl)(l)) {
    let g = { ...u, isEnabled: () => (0, import_chunk_vhsysgcd.yl)(l) };
    return { kind: "updated", effectiveSkipSlash: false, effectiveInput: d ? `/${u.name}${d.args ? ` ${d.args}` : ""}` : e.replace(/^\/\S+/, `/${u.name}`), effectiveContext: { ...n, options: { ...n.options, commands: [g, ...n.options.commands] } }, bridgeRewrite: g };
  }
  return { kind: "blocked", result: p({ target: t, inputString: e, uuid: i, origin: o, surface: "bridge" }) };
}
var y = /* @__PURE__ */ new Set([import_chunk_nwk8fexj.Ube, import_chunk_nwk8fexj.U_o, import_chunk_nwk8fexj.aRe, import_chunk_nwk8fexj.Sln, import_chunk_nwk8fexj.mEt, import_chunk_nwk8fexj.yU]), I = "bot_protected_tengu_iridescent_clover";
function _(r, e) {
  let n = e.inboundOrigin === import_chunk_865at33z.Tpn || e.inboundOrigin === import_chunk_865at33z.tPe;
  if (!n && r.type === "prompt" && r.source === "bundled" && y.has(r.name) && (r.name !== import_chunk_nwk8fexj.aRe || (0, import_chunk_sghy0qej.Pe)(I, { safe: true })) && (e.relayAuthored || e.origin?.kind !== "human" && !(0, import_chunk_865at33z.OCt)(e.origin))) return false;
  if (!e.relayAuthored && !e.bridgeCarried) return true;
  if (!(0, import_chunk_bzyb60p0.tSt)(r, { origin: e.origin, relayAuthored: e.relayAuthored })) return false;
  if (r === e.bridgeRewrite) return true;
  return n && !e.bridgeCarried || (0, import_chunk_bzyb60p0.Zes)(r);
}
function L8l(r) {
  let { inputString: e, context: n, uuid: i, origin: o, inboundOrigin: s } = r, t = b(e, n.options.commands, true);
  if (t === void 0 || _(t.effectiveCmd, { origin: o, relayAuthored: true, inboundOrigin: s, bridgeCarried: false, bridgeRewrite: void 0 })) return { kind: "none" };
  return { kind: "blocked", result: p({ target: t, inputString: e, uuid: i, origin: o, surface: "relay" }) };
}
function N8l(r) {
  let { cmd: e, commandName: n, args: i, inputString: o, uuid: s, author: t } = r;
  if (_(e, t)) return;
  let d = (0, import_chunk_be4a2jph.Ww)(o);
  return p({ target: { parsed: { commandName: d?.commandName ?? n, args: i, isMcp: false }, cmd: e, folded: void 0, effectiveCmd: e }, inputString: o, uuid: s, origin: t.origin, surface: t.bridgeCarried ? "bridge" : "relay" });
}
function p({ target: { parsed: r, cmd: e, folded: n, effectiveCmd: i }, inputString: o, uuid: s, origin: t, surface: d }) {
  let { sanitizedName: l, skillNameHash: c } = (0, import_chunk_54j6k3fn.bpe)({ rawName: e.name, canonicalName: e.name, isMcp: e.loadedFrom === "mcp", isBuiltIn: (0, import_chunk_bzyb60p0.Sq)().has(e.name), isBundled: e.type === "prompt" && e.source === "bundled", isOfficial: e.type === "prompt" && (0, import_chunk_54j6k3fn.gbe)(e) });
  (0, import_chunk_y53wbr8a.a)("tengu_slash_command_unavailable", { command_name: l, ...c, surface: d === "bridge" ? (0, import_chunk_78g0060s.S)("bridge") : (0, import_chunk_78g0060s.S)("relay"), reason: d === "bridge" ? (0, import_chunk_78g0060s.S)("unavailable_over_remote_control") : (0, import_chunk_78g0060s.S)("withheld_from_relay_participant") }), (0, import_chunk_cqa9hrgx.m)("cmd_dispatch", "cmd_unavailable_bridge");
  let u = n ? `/${(0, import_chunk_vhsysgcd.Zs)(e)} ${n.consumedToken}` : `/${(0, import_chunk_vhsysgcd.Zs)(i)}`, g = d === "bridge" ? `${u} isn't available over Remote Control.` : `${u} isn't available to a relay participant.`, f = (0, import_chunk_8704k7wd.p9e)(e, r.args) || (0, import_chunk_8704k7wd.p9e)(i, n ? n.args : r.args) ? `/${r.commandName} ***` : o, C = (0, import_chunk_bzyb60p0.Me)({ content: f, uuid: s, origin: t });
  return C.queueSkipSlashCommands = true, { messages: [C, (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${g}</local-command-stdout>`)], shouldQuery: false, resultText: g };
}
function b(r, e, n) {
  let i = (0, import_chunk_be4a2jph.Ww)(r);
  if (i === null) return;
  let o = (0, import_chunk_8704k7wd.zs)(i.commandName, e), s = i.args;
  if (n && (o === void 0 || !(0, import_chunk_vhsysgcd.yl)(o))) {
    let c = s.trimStart(), u = c.search(/\s/), g = u === -1 ? c : c.slice(0, u), f = g ? (0, import_chunk_8704k7wd.zs)(`${i.commandName}:${g}`, e) : void 0;
    if (f) o = f, s = u === -1 ? "" : c.slice(u + 1).trimStart();
  }
  if (!o) return;
  let t = (0, import_chunk_be4a2jph.zet)(o, s), d = t ? (0, import_chunk_8704k7wd.zs)(t.targetName, e) : void 0, l = t && d && (0, import_chunk_vhsysgcd.yl)(d) ? { command: d, consumedToken: t.consumedToken, args: t.remainingArgs } : void 0;
  return { parsed: s === i.args ? i : { ...i, args: s }, cmd: o, folded: l, effectiveCmd: l ? l.command : o };
}
function TKs(r, e) {
  let n = b(r, e, false);
  if (n === void 0) return true;
  let { effectiveCmd: i } = n;
  return i.type === "prompt" && (0, import_chunk_bzyb60p0.Ien)(i);
}
