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
var chunk_b18a27zs_exports = {};
__export(chunk_b18a27zs_exports, {
  D3: () => D3,
  Q1s: () => Q1s
});
module.exports = __toCommonJS(chunk_b18a27zs_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_qaaqd1gd = require("/$bunfs/root/chunk-qaaqd1gd.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
function D3(o, e, n, s) {
  let r = (0, import_chunk_qaaqd1gd.d0a)(o);
  for (let [i, { source: l }] of r.additionalWorkingDirectories) if (l !== "cliArg") (0, import_chunk_p1ewvgeh.dUi)(i);
  return { ...r, ...Q1s(r, e, n, s, "native") };
}
function Q1s(o, e, n, s, r) {
  let i = (u) => Object.fromEntries(import_chunk_ht27b0vz.IRe.map((m) => [m, [...f(o[u][m] ?? [], m, u === "alwaysDenyRules" ? "deny" : "ask", s), ...(e[u][m] ?? []).filter((a) => {
    if (!import_chunk_8hfdvrr1.hT.test(a)) return true;
    return (0, import_chunk_w578pjby.t)(`Ignoring the launch ${u === "alwaysDenyRules" ? "deny" : "ask"} rule "${a}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`, { level: "warn" }), false;
  }).flatMap((a) => [a, ...d(a, n)])]])), l = { alwaysDenyRules: i("alwaysDenyRules"), alwaysAskRules: i("alwaysAskRules") };
  return s === void 0 ? l : p(l, r);
}
function p(o, e) {
  let { composedRepoRules: n } = (0, import_chunk_a3fb7pa2.gy)(), s = n[e];
  if (s !== void 0 && (0, import_chunk_z688m88d.Zt)(s, o)) return s;
  let r = { alwaysDenyRules: R(o.alwaysDenyRules), alwaysAskRules: R(o.alwaysAskRules) };
  return n[e] = r, r;
}
function R(o) {
  return Object.values(o).forEach((e) => Object.freeze(e)), Object.freeze(o);
}
function f(o, e, n, s) {
  if (s === void 0 || e !== "userSettings" && e !== "projectSettings" && e !== "localSettings") return o;
  return [...s[e][n], ...o.filter((r) => !import_chunk_8hfdvrr1.hT.test(r))];
}
function d(o, e) {
  let { toolName: n, ruleContent: s } = (0, import_chunk_qebpc5de.Ur)(o);
  if (s === void 0 || n !== import_chunk_k883m4fq.De && n !== import_chunk_rb36kwbn.lt) return [];
  let { relativePattern: r, root: i } = (0, import_chunk_p1ewvgeh.mYe)(s, e);
  if (i !== null) return [];
  return [(0, import_chunk_qebpc5de.yn)({ toolName: n, ruleContent: `/${(0, import_chunk_qebpc5de.QFe)(`${(0, import_chunk_p1ewvgeh.TU)(e)}/`, { escapeGlobs: true })}**/${r}` })];
}
