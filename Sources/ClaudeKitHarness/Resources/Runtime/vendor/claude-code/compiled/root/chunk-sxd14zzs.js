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
var chunk_sxd14zzs_exports = {};
__export(chunk_sxd14zzs_exports, {
  Bdl: () => Bdl,
  FOi: () => FOi,
  IAe: () => IAe,
  Kae: () => Kae,
  X9e: () => X9e,
  amo: () => amo,
  kyr: () => kyr,
  lmo: () => lmo,
  mje: () => mje,
  rit: () => rit,
  sin: () => sin,
  wyr: () => wyr
});
module.exports = __toCommonJS(chunk_sxd14zzs_exports);
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
function IAe({ serverName: e, uri: n, resources: i }) {
  let r = i.map((t) => ({ file: t, bytes: Buffer.from(t.uri, "utf8") })).sort((t, u) => Buffer.compare(t.bytes, u.bytes)).flatMap(({ file: t }) => [t.uri, t.digest]), l = [e, n, ...r];
  return `sha256:${(0, import_chunk_ccm69jjy.Je)(l.map((t) => `${Buffer.byteLength(t, "utf8")}:${t}`).join(""))}`;
}
function mje(e, n) {
  return `${e}@${n}`;
}
function FOi(e) {
  return `${(0, import_chunk_3f4m74y6.xn)(e)}:*`;
}
var o = /@sha256:[0-9a-f]{64}$/;
function rit(e) {
  return o.test(e);
}
function amo(e) {
  return rit(e) || e.endsWith(":*");
}
function lmo(e) {
  return e?.mcpSkill !== void 0 ? { server: e.mcpSkill.server.name, version: e.mcpSkill.version } : void 0;
}
function wyr(e) {
  return `${e.slice(0, 15)}\u2026`;
}
var Bdl = "A saved approval names another version of this skill.", X9e = "Skill changed.";
function kyr(e) {
  let [n, ...i] = e.suggestions ?? [], r = i.length === 0 && n?.type === "addRules" && n.behavior === "allow" && n.rules.length === 1 ? n.rules[0] : void 0;
  return r?.toolName === import_chunk_pmryp5f3.Fn && r.ruleContent !== void 0 && o.test(r.ruleContent) ? r.ruleContent : void 0;
}
var sin = "userSettings";
function Kae(e) {
  if (e.metadata?.mcpSkill === void 0) return;
  let n = kyr(e);
  return { rule: n === void 0 ? void 0 : { toolName: import_chunk_pmryp5f3.Fn, ruleContent: n } };
}
