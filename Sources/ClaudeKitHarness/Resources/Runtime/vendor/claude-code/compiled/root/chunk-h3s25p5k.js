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
var chunk_h3s25p5k_exports = {};
__export(chunk_h3s25p5k_exports, {
  BFs: () => BFs,
  Djl: () => Djl,
  GQe: () => GQe,
  Ljl: () => Ljl,
  Njl: () => Njl,
  Vca: () => Vca,
  qge: () => qge,
  x2: () => x2,
  zca: () => zca
});
module.exports = __toCommonJS(chunk_h3s25p5k_exports);
var import_fs = require("fs");
var import_path = require("path");
var import_process = require("process");
function BFs(n) {
  return n.normalize("NFC");
}
function zca(n) {
  if (n === "/") return n;
  return (0, import_fs.realpathSync)(n);
}
function Vca() {
  let n = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof import_fs.realpathSync === "function") try {
    let e = (0, import_process.cwd)();
    try {
      n = BFs(zca(e));
    } catch {
      n = BFs(e);
    }
  } catch {
  }
  return n;
}
var x2 = Vca(), qge = (() => {
  if (typeof process > "u" || typeof process.cwd !== "function") return null;
  try {
    return process.cwd();
  } catch {
    return null;
  }
})();
function GQe() {
  if (qge === null) return null;
  let n = process.env.CLAUDE_CODE_SESSION_KIND;
  return n !== void 0 && String(n).trim() === "bg" ? null : qge;
}
function L(n, e) {
  let { root: o } = (0, import_path.parse)(n), c = [], s = o, r = o;
  for (let i of n.slice(o.length).split(import_path.sep).filter(Boolean)) {
    s = (0, import_path.join)(s, i), r = (0, import_path.join)(r, i);
    let u = e(s);
    if (u !== void 0) {
      let t = (0, import_path.resolve)((0, import_path.dirname)(r), u);
      r = t.startsWith("\\\\?\\UNC\\") ? `\\\\${t.slice(8)}` : /^\\\\\?\\[A-Za-z]:\\/.test(t) ? t.slice(4) : t, c.push(r);
    }
  }
  return c;
}
var p = (() => {
  if (qge === null) return Object.freeze([]);
  try {
    return Object.freeze(L(qge, (n) => {
      try {
        if (!(0, import_fs.lstatSync)(n).isSymbolicLink()) return;
        return (0, import_fs.readlinkSync)(n);
      } catch {
        return;
      }
    }));
  } catch {
    return Object.freeze([]);
  }
})();
function Djl() {
  return qge;
}
function Ljl() {
  return p;
}
function Njl() {
  return GQe() === null ? S : p;
}
var S = Object.freeze([]);
