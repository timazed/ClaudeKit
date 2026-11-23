const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_tgyp6t8q_exports = {};
__export(chunk_tgyp6t8q_exports, {
  Kgl: () => Kgl,
  Ygl: () => Ygl,
  ckr: () => ckr,
  dkr: () => dkr,
  lkr: () => lkr,
  qgl: () => qgl
});
module.exports = __toCommonJS(chunk_tgyp6t8q_exports);
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_path = __toESM(require("path"));
function lkr() {
  let r = [process.execPath], o = process.argv[1];
  if (!(0, import_chunk_wzdjp7c0.dg)() && o) r.push(o);
  return r;
}
var a = "--eval-artifacts-server", dkr = ["publish_version", "edit_version", "publish_files", "create_from_type"], Kgl = ["guide", "get_artifact", "read_artifact", "list_artifacts", "list_files", "read_file", "list_types"];
function ckr(r) {
  return r.map((o) => (0, import_chunk_px0hhsq7.lr)(import_chunk_qdcbcsg7.ri, o));
}
var p = /[*?[{]/;
function qgl(r, o) {
  let e = (o.alwaysAllowRules.cliArg ?? []).flatMap((t) => {
    let { toolName: i, ruleContent: s } = (0, import_chunk_qebpc5de.Ur)(t);
    return i === import_chunk_k883m4fq.De && s?.startsWith("//") === true ? [s.slice(1).replace(/\/\*\*$/, "")] : [];
  });
  return [r, ...e.filter((t) => !p.test(t)).map((t) => import_path.default.posix.normalize(t).replace(/\/+$/, "")).filter((t) => t !== "" && t !== ".").map((t) => (0, import_chunk_cg8dqz0a.x)() === "windows" ? (0, import_chunk_n2dbhmj2.rce)(t) : t)];
}
function Ygl(r, o) {
  let [e = process.execPath, ...t] = lkr();
  return { type: "stdio", command: e, args: [...t, a, r, ...o], env: {} };
}
