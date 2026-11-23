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
var chunk_be4a2jph_exports = {};
__export(chunk_be4a2jph_exports, {
  IHt: () => IHt,
  Ww: () => Ww,
  Xqr: () => Xqr,
  zet: () => zet
});
module.exports = __toCommonJS(chunk_be4a2jph_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
function Xqr(t, e) {
  (0, import_chunk_xfr8663h.ql)("user_prompt", { prompt_length: String(e?.length ?? 0), ...(0, import_chunk_xfr8663h.yEl)(e, t.origin), ...t.attributes });
}
function Ww(t) {
  let e = t.trim();
  if (!e.startsWith("/")) return null;
  let { name: r, args: n } = (0, import_chunk_tjdnrbvx.fM)(e);
  if (!r) return null;
  let o = "(MCP)";
  if (n === o) return { commandName: `${r} ${o}`, args: "", isMcp: true };
  if (n.startsWith(o) && /\s/.test(n.charAt(o.length))) return { commandName: `${r} ${o}`, args: n.slice(o.length).trimStart(), isMcp: true };
  return { commandName: r, args: n, isMcp: false };
}
function zet(t, e) {
  if (!t.subcommands) return;
  let r = e.trimStart(), n = r.search(/\s/), o = n === -1 ? r : r.slice(0, n), s = o ? t.subcommands[o.toLowerCase()] : void 0;
  if (s === void 0) return;
  let m = n === -1 ? "" : r.slice(n + 1).trim();
  if (t.subcommandsBareOnly && m !== "") return;
  return { targetName: s, consumedToken: o, remainingArgs: m };
}
function IHt(t, e) {
  let r = (0, import_chunk_f9x2f6cx.QA)();
  if (e === void 0) {
    Xqr(t, t.text);
    return;
  }
  e({ text: t.text, attributes: { ...r && { "prompt.id": r }, ...t.attributes }, origin: t.origin });
}
