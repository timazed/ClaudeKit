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
var chunk_zcpqgt0x_exports = {};
__export(chunk_zcpqgt0x_exports, {
  ASr: () => ASr,
  Akt: () => Akt,
  Hfl: () => Hfl,
  OBt: () => OBt,
  QFn: () => QFn,
  Vp: () => Vp,
  fhs: () => fhs,
  kit: () => kit,
  qin: () => qin,
  zAe: () => zAe
});
module.exports = __toCommonJS(chunk_zcpqgt0x_exports);
var import_promises = require("fs/promises");
var import_path = require("path");
var Akt = ".claude-plugin", Vp = (0, import_path.join)(Akt, "plugin.json"), zAe = "plugin.json", kit = (0, import_path.join)(Akt, "marketplace.json"), QFn = ["commands", "skills", "agents", "hooks", "themes", "output-styles", "monitors", "workflows"], a = ["SKILL.md", ".mcp.json", ".lsp.json"], OBt = [Akt, ...QFn, ...a];
async function qin(n) {
  return (await (0, import_promises.readdir)(n)).filter((t) => !r(t)).some(fhs);
}
async function ASr(n) {
  let o = (await (0, import_promises.readdir)(n, { withFileTypes: true })).filter((t) => !r(t.name));
  if (o.some((t) => t.name === ".claude-plugin")) return n;
  if (o.length === 1 && o[0].isDirectory()) {
    let t = (0, import_path.join)(n, o[0].name);
    if (await u((0, import_path.join)(t, ".claude-plugin"))) return t;
    if (!fhs(o[0].name) && await qin(t)) return t;
  }
  return n;
}
function fhs(n) {
  return OBt.includes(n);
}
function Hfl(n) {
  return QFn.includes(n);
}
async function u(n) {
  try {
    return await (0, import_promises.stat)(n), true;
  } catch {
    return false;
  }
}
function r(n) {
  return n === "__MACOSX" || n === ".DS_Store";
}
