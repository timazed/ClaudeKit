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
var chunk_2kdn1n73_exports = {};
__export(chunk_2kdn1n73_exports, {
  K2r: () => K2r,
  QXn: () => QXn,
  iMt: () => iMt,
  lka: () => lka
});
module.exports = __toCommonJS(chunk_2kdn1n73_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var a = "tengu_harp_voatavo";
function QXn(n) {
  let o = (0, import_chunk_qebpc5de.$f)([...n]), t = o.find(import_chunk_qebpc5de.K$l);
  if (t !== void 0) return { kind: "unclosed", rule: t };
  return (0, import_chunk_865at33z.b)(a, true) === false ? { kind: "rules", rules: o, blocksNothing: [] } : { kind: "rules", rules: (0, import_chunk_4smdap7r.M)([...o, ...o.flatMap(r)]), blocksNothing: (0, import_chunk_4smdap7r.M)(o.filter(i)) };
}
function K2r(n) {
  let o = n.slice(0, 8).map((t) => `"${(0, import_chunk_tp3c5q2s.Qe)(t, 64)}"`).join(", ");
  return n.length > 8 ? `${o} and ${n.length - 8} more` : o;
}
function lka(n) {
  if (n.length === 0) return [];
  return [{ kind: "lost", name: "--disallowed-tools", why: `any other rules apply, but not ${K2r(n)}: a * in a claude.ai connector's name blocks no connector in a cloud session; start a new session with one rule for each connector, such as mcp__claude_ai_Slack or mcp__claude_ai_Slack__<tool>` }];
}
function l(n) {
  let o = (0, import_chunk_qebpc5de.MM)(n);
  if (o.kind === "malformed") return null;
  let t = o.kind === "call" ? o.toolName : n, e = (0, import_chunk_px0hhsq7.mr)(t);
  return e === null ? null : { ...e, name: t };
}
function c(n) {
  return (0, import_chunk_3f4m74y6.xn)(import_chunk_3f4m74y6.oJ + n) === import_chunk_3f4m74y6.A8 + n;
}
function r(n) {
  let o = l(n);
  if (!o?.serverName.startsWith(import_chunk_3f4m74y6.A8)) return [];
  let t = o.serverName.slice(import_chunk_3f4m74y6.A8.length);
  return c(t) ? [`${import_chunk_px0hhsq7.ch}${t}__${o.toolName ?? "*"}${n.slice(o.name.length)}`] : [];
}
function i(n) {
  let o = l(n)?.serverName ?? "";
  return o.includes("*") && (o.startsWith(import_chunk_3f4m74y6.A8) || o.startsWith(`${import_chunk_3f4m74y6.A8.slice(0, -1)}*`));
}
function iMt(n = []) {
  let o = new Set(n), t = new Set(n.flatMap(r));
  return { disallowed_tools_connector_both_names_count: (0, import_chunk_4smdap7r.U)(n, (e) => r(e).some((s) => o.has(s))), disallowed_tools_connector_local_name_only_count: (0, import_chunk_4smdap7r.U)(n, (e) => !t.has(e) && r(e).some((s) => !o.has(s))), disallowed_tools_connector_wildcard_count: (0, import_chunk_4smdap7r.U)(n, i) };
}
