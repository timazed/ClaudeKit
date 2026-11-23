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
var chunk_cc0rj9gh_exports = {};
__export(chunk_cc0rj9gh_exports, {
  LUt: () => LUt,
  Vsn: () => Vsn,
  ayr: () => ayr,
  dje: () => dje,
  ndl: () => ndl,
  oOi: () => oOi,
  qpo: () => qpo,
  sOi: () => sOi
});
module.exports = __toCommonJS(chunk_cc0rj9gh_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_path = require("path");
var oOi = 1024, p = "";
function dje(n) {
  return (0, import_chunk_rb36kwbn.QXe)() ? void 0 : n;
}
function sOi(n) {
  let e = (0, import_chunk_18rsj2ts.rQe)(), r = n === void 0 ? void 0 : s(n, (0, import_chunk_18rsj2ts.jqt)(n).physical), o = e === void 0 ? void 0 : s(e, (0, import_chunk_18rsj2ts.BUl)());
  if (r === void 0 || o === void 0) return;
  let d = (0, import_path.relative)(r, o).split(import_path.sep).join("/") || ".";
  return d !== "." && (r.startsWith(import_chunk_18rsj2ts.Bqt) || o.startsWith(import_chunk_18rsj2ts.Bqt)) ? ".." : d;
}
function qpo(n) {
  let e = n?.shell ?? n?.shellNotNamed;
  return typeof e === "string" && n?.directory !== void 0 ? import_path.posix.relative(n.directory.path, e) || "." : void 0;
}
function LUt(n) {
  if (n === void 0) return;
  return typeof n === "string" && n.length <= oOi ? n : p;
}
function ayr(n, e) {
  if (e === ".") return n;
  let r = e.split("/");
  return r.every((o) => o !== "" && o !== "." && o !== ".." && !o.includes("\\") && !g(o)) ? (0, import_path.join)(n, ...r) : void 0;
}
function Vsn(n, e) {
  let r = (0, import_chunk_18rsj2ts.rQe)();
  if (r === void 0 || sOi(n) !== e) return false;
  try {
    if (e === ".") return (0, import_chunk_w578pjby.le)().statSync(r).isDirectory();
    let o = r;
    for (let d = (0, import_chunk_7cfjrnwy.Mt)(e, "/") + 1; d > 0; d--) {
      if (!(0, import_chunk_w578pjby.le)().lstatSync(o).isDirectory()) return false;
      o = (0, import_path.dirname)(o);
    }
    return true;
  } catch (o) {
    let d = (0, import_chunk_jv7av99m.w)(o);
    if (d === void 0) (0, import_chunk_k449cc64.i)(o);
    else (0, import_chunk_w578pjby.t)(`Late-approved call not run: could not examine its directory ${r} (${d}), so a symbolic link in it cannot be ruled out`, { level: "warn" });
    return false;
  }
}
async function ndl(n, e) {
  let r = n === void 0 ? void 0 : ayr(n, e);
  return r !== void 0 && await (0, import_chunk_18rsj2ts.uh)(r, () => (0, import_chunk_18rsj2ts.w6e)(async () => Vsn(n, e))) ? r : void 0;
}
function s(n, e) {
  if (e === void 0) return n;
  return e ? (0, import_chunk_z6pfqf6e.pn)(e) : void 0;
}
function g(n) {
  for (let e = 0; e < n.length; e++) {
    let r = n.charCodeAt(e);
    if (r < 32 || r === 127) return true;
  }
  return false;
}
