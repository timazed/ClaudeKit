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
var chunk_0vw1gz5c_exports = {};
__export(chunk_0vw1gz5c_exports, {
  $1i: () => $1i,
  Wt: () => Wt,
  qln: () => qln
});
module.exports = __toCommonJS(chunk_0vw1gz5c_exports);
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var g = [40, 181, 47, 253];
function s(r) {
  return r.length >= 4 && g.every((t, e) => r[e] === t);
}
function o(r, t) {
  return (0, import_path.isAbsolute)(r) ? r : (0, import_path.join)(t, r);
}
async function qln(r, t) {
  let e = await (0, import_promises.readFile)(o(r, t));
  return (s(e) ? await Bun.zstdDecompress(e) : e).toString("utf8");
}
function Wt(r, t) {
  return $1i(r, t).toString("utf8");
}
function $1i(r, t) {
  let e = o(r, t);
  try {
    let n = (0, import_fs.readFileSync)(e);
    return s(n) ? Bun.zstdDecompressSync(n) : n;
  } catch (n) {
    throw Object.assign(Error("embedded asset is missing or corrupt", { cause: n }), { path: e });
  }
}
