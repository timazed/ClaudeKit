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
var chunk_efg106fm_exports = {};
__export(chunk_efg106fm_exports, {
  JNo: () => JNo,
  QNo: () => QNo,
  VPt: () => VPt,
  X5l: () => X5l,
  Z1s: () => Z1s,
  e$s: () => e$s
});
module.exports = __toCommonJS(chunk_efg106fm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_a152y2zc = require("/$bunfs/root/chunk-a152y2zc.js");
var import_chunk_06pt2b41 = require("/$bunfs/root/chunk-06pt2b41.js");
var import_chunk_jf04cjm6 = require("/$bunfs/root/chunk-jf04cjm6.js");
var import_path = require("path");
var import_promises = require("fs/promises");
async function VPt(e) {
  try {
    return (0, import_chunk_z6pfqf6e.pn)(await (0, import_promises.realpath)(`${e}/`)) === e ? e : void 0;
  } catch {
    return;
  }
}
function X5l(e, n) {
  let { shell: r } = import_chunk_06pt2b41.EO.of(n), { cwd: t, originalCwd: i } = (0, import_chunk_f9x2f6cx.Rs)(n);
  if (!r.isWatched) r.isWatched = true, r.hasMoved = t !== i, n.subscribe(() => {
    if (r.hasMoved ||= n.project?.cwd !== i, n.project?.cwd !== r.taken) r.taken = void 0, r.unseen = void 0;
  });
  if (e === void 0 || e === t || r.hasMoved) return;
  if (typeof e !== "string" || !(0, import_chunk_jf04cjm6.Bfa)(i, e)) {
    (0, import_chunk_cqa9hrgx.m)("mcp_serve_shell_directory_held", "outside_launch_directory");
    return;
  }
  r.taken = e, r.unseen = e, n.setCwd(e), (0, import_chunk_a152y2zc.TQ)(), (0, import_chunk_cqa9hrgx.u)("mcp_serve_shell_directory_held");
}
function JNo(e, n) {
  return import_chunk_06pt2b41.EO.peek(e)?.shell.taken === n;
}
async function Z1s(e, n, r) {
  let { shell: t } = import_chunk_06pt2b41.EO.of(e);
  if (r && t.unseen === n) t.unseen = void 0, t.isMadeAgainUntold = true, t.making = { path: n, made: h(n, (0, import_chunk_f9x2f6cx.Rs)(e).originalCwd).catch(() => "unknown").then(async (i) => {
    if (await VPt(n) !== void 0) return (0, import_chunk_cqa9hrgx.u)("mcp_serve_shell_directory_made_again"), true;
    return t.isMadeAgainUntold = i === void 0, (0, import_chunk_cqa9hrgx.l)("mcp_serve_shell_directory_made_again", i ?? "not_intact"), false;
  }) };
  return t.making?.path === n && await t.making.made && await VPt(n) !== void 0;
}
async function e$s(e, n, r) {
  let { shell: t } = import_chunk_06pt2b41.EO.of(e);
  if (!t.makesLaunchDirectory) return false;
  let i = new Map(t.launchMadeToldBy);
  for (let a of [o, r ?? o]) t.launchMadeToldBy.set(a, void 0);
  return t.makingLaunch ??= f(n).then((a) => {
    if (t.makingLaunch = void 0, !a) t.launchMadeToldBy = i;
    return a;
  }), t.makingLaunch;
}
var o = "";
function QNo(e, n, r, t) {
  let { launchMadeToldBy: i } = import_chunk_06pt2b41.EO.of(e).shell, a = r ?? o;
  if (!i.has(a) || n !== (0, import_chunk_f9x2f6cx.Rs)(e).originalCwd) return false;
  let s = i.get(a);
  if (s === void 0) return i.set(a, t ?? null), true;
  return s === t;
}
async function f(e) {
  let n = await g(e).catch(() => "unknown");
  if (await VPt(e) !== void 0) return (0, import_chunk_cqa9hrgx.u)("mcp_serve_launch_directory_made_again"), true;
  return (0, import_chunk_cqa9hrgx.l)("mcp_serve_launch_directory_made_again", n ?? "not_intact"), false;
}
async function g(e) {
  let n = await (0, import_chunk_w2hrk3t1.QF)((0, import_path.dirname)(e), 0);
  if (n === "absent") n = await (0, import_chunk_w2hrk3t1.QF)((0, import_path.dirname)(e), 1);
  if (typeof n === "string") return n;
  let r = await (0, import_chunk_w2hrk3t1.PDe)(n);
  if (await n.release(), r !== true) return r;
  let t = await (0, import_chunk_w2hrk3t1.QF)(e, 1);
  if (typeof t === "string") return t;
  await t.release();
  return;
}
async function h(e, n) {
  let r = e.slice(n.length);
  if (r.includes("/.")) return "dot_part";
  if (!(0, import_chunk_kx2fp6pc.z6e)(e)) return "not_a_plain_directory";
  let t = await (0, import_chunk_w2hrk3t1.QF)(`${n}/${r.split("/")[1]}`, 1);
  if (typeof t === "string") return t;
  let i = await (0, import_chunk_w2hrk3t1.PDe)(t);
  if (await t.release(), i !== true) return i;
  let a = await (0, import_chunk_w2hrk3t1.QF)(e, (0, import_chunk_7cfjrnwy.Mt)(r, "/"));
  if (typeof a === "string") return a;
  await a.release();
  return;
}
