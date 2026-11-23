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
var chunk_4rp6k6sw_exports = {};
__export(chunk_4rp6k6sw_exports, {
  Dfl: () => Dfl,
  RSr: () => RSr,
  VAe: () => VAe,
  Yin: () => Yin,
  xSr: () => xSr
});
module.exports = __toCommonJS(chunk_4rp6k6sw_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_6xae35jp = require("/$bunfs/root/chunk-6xae35jp.js");
var import_path = require("path");
function RSr(e) {
  return `pr-${e}`;
}
function Yin(e) {
  return (0, import_chunk_6xae35jp.Pjt)(e);
}
function xSr(e) {
  return [Yin(e)];
}
function VAe(e) {
  let r = (0, import_chunk_z6pfqf6e.Vge)(e);
  return r === null ? null : { checkout: r, home: (0, import_chunk_6xae35jp.Pjt)(r) };
}
function u(e) {
  let r = /\d+$/.exec(e)?.[0];
  return r !== void 0 && e === RSr(Number(r));
}
function n(e, r) {
  for (let o = e; ; o = (0, import_path.dirname)(o)) {
    if (o === r || u((0, import_path.basename)(o)) && (0, import_chunk_z6pfqf6e.Vge)(o) !== null) return true;
    if ((0, import_path.dirname)(o) === o) return false;
  }
}
function Dfl(e) {
  let r = (0, import_chunk_rb36kwbn.ui)(), o = r?.hookBased === true && u(r.worktreeName) ? (0, import_chunk_z6pfqf6e.zh)(r.worktreePath) ?? r.worktreePath : null;
  return n((0, import_chunk_z6pfqf6e.zh)(e) ?? e, o) || n(e, o);
}
