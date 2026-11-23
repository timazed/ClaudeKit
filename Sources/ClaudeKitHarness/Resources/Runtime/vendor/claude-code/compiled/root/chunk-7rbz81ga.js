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
var chunk_7rbz81ga_exports = {};
__export(chunk_7rbz81ga_exports, {
  $si: () => $si,
  FRn: () => FRn,
  _0t: () => _0t,
  j7r: () => j7r
});
module.exports = __toCommonJS(chunk_7rbz81ga_exports);
var j7r = /* @__PURE__ */ new Set(["agents.md", "agents.override.md", "gemini.md", ".cursorrules"]), n = { instructions: 0, setting: 1, subagent: 2, command: 3, mcp: 4, skill: 5 };
function FRn(e) {
  return e.scope === "user" && !e.warning && e.kind !== "skill";
}
function _0t(e) {
  if (e.scope === "project") return "project";
  if (e.warning || e.kind === "skill") return "warned";
  return null;
}
function $si(e, t) {
  let r = n[e.kind] - n[t.kind];
  if (r !== 0) return r;
  if (e.scope !== t.scope) return e.scope === "project" ? -1 : 1;
  return e.label.localeCompare(t.label);
}
