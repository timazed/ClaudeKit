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
var chunk_drtv8e2x_exports = {};
__export(chunk_drtv8e2x_exports, {
  Wal: () => Wal,
  hsn: () => hsn,
  ipo: () => ipo,
  pUt: () => pUt
});
module.exports = __toCommonJS(chunk_drtv8e2x_exports);
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var ipo = (t, r) => !(0, import_chunk_kpby9tcv.ia)(t.ino) && t.dev === r.dev && t.ino === r.ino;
function hsn(t) {
  let r = t.match(/^([A-Z]):(.*)$/i);
  if (!r) return null;
  return `/mnt/${r[1].toLowerCase()}${r[2].replaceAll("\\", "/")}`;
}
class pUt {
  wslDistroName;
  constructor(t) {
    this.wslDistroName = t;
  }
  async toLocalPath(t) {
    if (!t) return t;
    if (this.wslDistroName) {
      let o = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
      if (o && o[1] !== this.wslDistroName) return t;
    }
    let { stdout: r, code: e } = await (0, import_chunk_7fsmgfxx.kt)("wslpath", ["-u", t], { useCwd: false }), n = r.trim();
    if (e === 0 && n) return n;
    return hsn(t) ?? t.replaceAll("\\", "/");
  }
  async toIDEPath(t) {
    if (!t) return t;
    let { stdout: r, code: e } = await (0, import_chunk_7fsmgfxx.kt)("wslpath", ["-w", t], { useCwd: false }), n = r.trim();
    if (e === 0 && n) return n;
    return t;
  }
}
function Wal(t, r) {
  let e = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
  if (e) return e[1] === r;
  return true;
}
