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
var chunk_fbnv54pa_exports = {};
__export(chunk_fbnv54pa_exports, {
  KJe: () => KJe,
  YJe: () => YJe,
  ena: () => ena,
  qJe: () => qJe,
  t0r: () => t0r,
  tna: () => tna,
  za: () => za
});
module.exports = __toCommonJS(chunk_fbnv54pa_exports);
var import_path = require("path");
var ena = /* @__PURE__ */ new Set([".git", "hooks", ".husky", ".githooks", "node_modules", ".vscode", ".idea", "head", "config", "objects", "refs", ".claude", "skills", "commands", "agents", ".cargo", ".devcontainer", ".yarn", ".mvn"]), t0r = /[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/, KJe = new RegExp(t0r, "g");
function za(e) {
  return i(e, true);
}
function qJe(e) {
  return i(e, false);
}
function i(e, o) {
  let t = e.toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s"), n = t.replace(KJe, "");
  return (o ? n.replace(/:.*$/, "") : n).replace(/[. ]+$/, "") || t;
}
function tna(e) {
  return false;
}
function YJe(e, o, t) {
  let n = e.slice(o.length).split(import_path.sep), a = n.length - 1;
  for (let r = 0; r < n.length; r++) {
    let s = za(n[r]);
    if (ena.has(s) || tna(s)) return true;
    if (r === a && t?.has(s)) return true;
  }
  return false;
}
