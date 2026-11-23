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
var chunk_af6qeyd9_exports = {};
__export(chunk_af6qeyd9_exports, {
  bzr: () => bzr,
  vKs: () => vKs
});
module.exports = __toCommonJS(chunk_af6qeyd9_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_tzyvnedf = require("/$bunfs/root/chunk-tzyvnedf.js");
var import_chunk_w0pnqmj8 = require("/$bunfs/root/chunk-w0pnqmj8.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var b = "tengu_woolly_blanket", g = ["zdr", "ldr", "hipaa"];
function m() {
  return g.some(import_chunk_2zeyvjwb.uo) || (0, import_chunk_2zeyvjwb.NVt)() !== null;
}
function f() {
  return (0, import_chunk_7d2qr9z5.FH)() && !(0, import_chunk_k449cc64.wt)() && !(0, import_chunk_7d2qr9z5.CG)() && !m();
}
function h() {
  let e = (0, import_chunk_865at33z.gn)(b, false);
  return e.value === true && (0, import_chunk_865at33z.km)(e.source);
}
async function bzr() {
  return await (0, import_chunk_865at33z.ci)().catch(() => null), h() && await y();
}
async function y() {
  if (!f()) return false;
  if (await (0, import_chunk_7q6ee47s.Zh)(), (0, import_chunk_2nv4wrez.ba)("allow_remote_sessions") === "cache_miss") await (0, import_chunk_7d2qr9z5.Tpe)();
  return !R();
}
var _ = 1e4;
async function l(e) {
  let o = (0, import_path.dirname)(e);
  if (o === e) return;
  return await (0, import_promises.stat)(o).then((t) => t.isDirectory(), () => false) ? o : l(o);
}
async function A(e, o) {
  if (!(0, import_path.isAbsolute)(e) || (0, import_chunk_1z1bgjzv.IBt)(e) || (0, import_chunk_z6pfqf6e.fa)(e, o) || e.split(/[\\/]/).includes("..")) return { verdict: "undetermined", folder: e, doubt: "unreachable" };
  let t = await (0, import_chunk_1z1bgjzv._0e)(e, o);
  if (t.verdict !== "local" || t.spelling !== (0, import_path.resolve)(e)) return { verdict: "undetermined", folder: e, doubt: t.verdict === "unreadable" ? "unreadable" : "unreachable" };
  let i = await (0, import_promises.stat)(e).then((n) => n.isDirectory() ? "folder" : "gone", (n) => ["ENOENT", "ENOTDIR"].includes((0, import_chunk_jv7av99m.w)(n) ?? "") ? "gone" : "unreadable");
  if (i === "unreadable") return { verdict: "undetermined", folder: e, doubt: "unreadable" };
  if (i === "gone") {
    let n = await l(e), s = n === void 0 ? void 0 : u(n);
    return s === void 0 || s.verdict === "elsewhere" ? { verdict: "undetermined", folder: e, doubt: "gone" } : { ...s, folder: e };
  }
  let r = u(e);
  if (r.verdict !== "elsewhere") return r;
  return await (0, import_chunk_tzyvnedf.DJn)(e, { alsoOnMacos: true }) ? { verdict: "monorepo", folder: e } : { verdict: "elsewhere" };
}
function u(e) {
  let o = (0, import_chunk_w5s307zm.Gy)(e), t = (0, import_chunk_w5s307zm.Ju)();
  t.monorepoVerdictByDir.delete(e), (o === null ? a(e) : [o, ...a(e)]).forEach((n) => {
    t.rootByPath.delete(n), t.canonicalRootByRoot.delete(n), t.remoteSlugByRoot.delete(n), t.monorepoRuledOutByRoot.delete(n);
  });
  let r = (0, import_chunk_w0pnqmj8.kEl)(e);
  if (r !== "elsewhere") return r === "monorepo" ? { verdict: r, folder: e } : { verdict: r, folder: e, doubt: "unreadable" };
  return o === null || (0, import_chunk_w0pnqmj8.vEl)(o) && !(0, import_chunk_sjqze7qg.Mbi)([e, o]).some(import_chunk_w0pnqmj8.EEl) ? { verdict: "elsewhere" } : { verdict: "undetermined", folder: e, doubt: "not_ruled_out" };
}
function a(e) {
  let o = (0, import_path.dirname)(e);
  return o === e ? [e] : [e, ...a(o)];
}
async function vKs(e) {
  return await (0, import_chunk_5appeerh.me)(A(e, (0, import_chunk_f9x2f6cx.ns)() ?? e), _) ?? { verdict: "undetermined", folder: e, doubt: "too_slow" };
}
function R() {
  return (0, import_chunk_2nv4wrez.ba)("allow_remote_sessions") !== null || (0, import_chunk_2nv4wrez.hw)() || m();
}
