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
var chunk_hnh569cb_exports = {};
__export(chunk_hnh569cb_exports, {
  EMe: () => EMe,
  iAn: () => iAn,
  rUe: () => rUe,
  wXl: () => wXl
});
module.exports = __toCommonJS(chunk_hnh569cb_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_263v0sz3 = require("/$bunfs/root/chunk-263v0sz3.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_path = require("path");
async function EMe(r, t) {
  if (!r) return { resultType: "emptyPath" };
  if ((0, import_chunk_f9x2f6cx.ns)() === null) return { resultType: "invalidPath", directoryPath: r, containsNullByte: false };
  let e;
  try {
    e = (0, import_path.resolve)((0, import_chunk_n2dbhmj2.xt)(r));
  } catch (a) {
    let s = a instanceof import_chunk_n2dbhmj2.f3;
    if (!s) (0, import_chunk_k449cc64.i)(Error("validateDirectoryForWorkspace: expandPath threw"));
    return { resultType: "invalidPath", directoryPath: r, containsNullByte: s };
  }
  if ((0, import_chunk_z6pfqf6e.sa)(r) || await (0, import_chunk_w578pjby.yQe)(e, (0, import_chunk_f9x2f6cx.mte)())) return { resultType: "networkPath", directoryPath: r, absolutePath: e };
  try {
    if (!(await (0, import_promises.stat)(e)).isDirectory()) return { resultType: "notADirectory", directoryPath: r, absolutePath: e };
  } catch (a) {
    if (!(0, import_chunk_jv7av99m.fn)(a)) (0, import_chunk_k449cc64.i)(Object.assign(Error("validateDirectoryForWorkspace: unexpected stat errno"), { code: (0, import_chunk_jv7av99m.w)(a) }));
    return { resultType: "pathNotFound", directoryPath: r, absolutePath: e };
  }
  let o = (0, import_chunk_pbteexar.jS)(t) || t.blockWritesOutsideWorkingDirectories ? (0, import_chunk_p1ewvgeh.eBn)(t) : (0, import_chunk_p1ewvgeh.sv)(t), c = (0, import_chunk_f9x2f6cx.Te)();
  for (let a of o) if ((0, import_chunk_p1ewvgeh.Sc)(e, a, { caseFold: false })) return { resultType: "alreadyInWorkingDirectory", directoryPath: r, absolutePath: e, workingDir: a, isExactMatch: (0, import_path.resolve)(a) === e, isOriginalCwd: a === c };
  return { resultType: "success", absolutePath: e };
}
function iAn(r) {
  return r.resultType === "success" || r.resultType === "alreadyInWorkingDirectory" && r.isOriginalCwd && !(0, import_chunk_f9x2f6cx.tu)().includes(r.absolutePath) ? (0, import_chunk_263v0sz3.Q3o)(r.absolutePath) : void 0;
}
async function wXl(r, t = import_chunk_263v0sz3.Q3o) {
  return (await Promise.all((0, import_chunk_4smdap7r.M)([(0, import_path.resolve)(import_chunk_h3s25p5k.x2, (0, import_chunk_n2dbhmj2.Fa)(r, import_chunk_h3s25p5k.x2) ?? r), (0, import_path.resolve)(import_chunk_h3s25p5k.x2, r)]).map((o) => EMe(o.endsWith(import_path.sep) ? o : o + import_path.sep, (0, import_chunk_4vsz8a99.Vd)())))).flatMap((o) => o.resultType === "success" || o.resultType === "alreadyInWorkingDirectory" || o.resultType === "networkPath" ? t(o.absolutePath, o.resultType !== "networkPath") ?? [] : []);
}
function rUe(r) {
  switch (r.resultType) {
    case "emptyPath":
      return "Give a directory path.";
    case "invalidPath": {
      let t = import_chunk_d57v19zt.Re.bold((0, import_chunk_w578pjby._)(r.directoryPath));
      return r.containsNullByte ? `Path ${t} contains a null character, so it can't be used as a working directory. Remove the null character from the path or from the settings entry that lists it.` : `Path ${t} couldn't be resolved, so it can't be used as a working directory. Check the path or the settings entry that lists it.`;
    }
    case "pathNotFound":
      return `Path ${import_chunk_d57v19zt.Re.bold(r.absolutePath)} was not found.`;
    case "networkPath":
      return `${import_chunk_d57v19zt.Re.bold(r.directoryPath)} is a network path, which cannot be added as a working directory. On Windows, map the share to a drive letter and pass it at launch with --add-dir (a drive letter added mid-session does not yet carry remote-read trust).`;
    case "notADirectory": {
      let t = (0, import_path.dirname)(r.absolutePath);
      return `${import_chunk_d57v19zt.Re.bold(r.directoryPath)} is not a directory. Did you mean to add the parent directory ${import_chunk_d57v19zt.Re.bold(t)}?`;
    }
    case "alreadyInWorkingDirectory": {
      let t = import_chunk_d57v19zt.Re.bold(r.directoryPath);
      if (r.isExactMatch) return r.isOriginalCwd ? `${t} is already the current working directory.` : `${t} is already added as a working directory.`;
      let e = r.isOriginalCwd ? "the current working directory" : "the additional working directory";
      return `${t} is already accessible within ${e} ${import_chunk_d57v19zt.Re.bold(r.workingDir)}.`;
    }
    case "success":
      return `Added ${import_chunk_d57v19zt.Re.bold(r.absolutePath)} as a working directory.`;
  }
}
