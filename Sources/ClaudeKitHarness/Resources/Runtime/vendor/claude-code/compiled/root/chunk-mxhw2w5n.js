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
var chunk_mxhw2w5n_exports = {};
__export(chunk_mxhw2w5n_exports, {
  $jt: () => $jt,
  C0: () => C0,
  EN: () => EN,
  HUi: () => HUi,
  MUi: () => MUi,
  Mre: () => Mre,
  ORe: () => ORe,
  OSl: () => OSl,
  PSl: () => PSl,
  YEr: () => YEr,
  bV: () => bV,
  cme: () => cme,
  dme: () => dme,
  f1: () => f1,
  fbs: () => fbs
});
module.exports = __toCommonJS(chunk_mxhw2w5n_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_a8ey418s = require("/$bunfs/root/chunk-a8ey418s.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_path = require("path");
var Mre = "tool-results";
function EN(e) {
  return m(e.root.id, e.root.identity.projectDir(), () => (0, import_chunk_f9x2f6cx.Rs)(e.root).originalCwd);
}
function C0() {
  return m((0, import_chunk_f9x2f6cx.W)(), (0, import_chunk_f9x2f6cx._se)(), import_chunk_f9x2f6cx.Te);
}
function bV(e) {
  return (0, import_chunk_f9x2f6cx.Y)() ? null : EN(e);
}
function dme() {
  return (0, import_chunk_f9x2f6cx.Y)() ? null : C0();
}
var d = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Map());
function PSl(e) {
  return [...d.of((0, import_chunk_f9x2f6cx.N)().host)].find(([, r]) => (0, import_path.basename)(r) === e)?.[0];
}
function MUi() {
  return !(0, import_chunk_f9x2f6cx.Y)() && ((0, import_chunk_f9x2f6cx.DI)() || import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_PROMPT_HISTORY);
}
function m(e, r, a) {
  if (!MUi()) return fbs(e, r, a);
  let o = d.of((0, import_chunk_f9x2f6cx.N)().host), n = o.get(e);
  if (n === void 0) {
    if (o.size === 0) (0, import_chunk_w578pjby.oA)(async () => {
      for (let l of o.values()) await (0, import_chunk_c203g5kd.Yxt)(l).catch(import_chunk_k449cc64.i);
    }), process.on("exit", () => {
      for (let l of o.values()) try {
        (0, import_fs.rmSync)(l, { recursive: true, force: true });
      } catch {
      }
    });
    n = (0, import_path.join)((0, import_chunk_q3a5dy2r.BAt)() ?? (0, import_chunk_q3a5dy2r.jC)(a()), (0, import_crypto.randomUUID)()), o.set(e, n);
  }
  return (0, import_path.join)(n, Mre);
}
function OSl(e) {
  return fbs(e.root.id, e.root.identity.projectDir(), () => (0, import_chunk_f9x2f6cx.Rs)(e.root).originalCwd);
}
function fbs(e, r, a) {
  let o = r !== null && (0, import_chunk_q3a5dy2r.fVt)(r, import_chunk_hkvzj051.Ao) !== void 0 ? r : (0, import_chunk_q3a5dy2r.BAt)() ?? (0, import_chunk_q3a5dy2r.jC)(a());
  return (0, import_path.join)(o, e, Mre);
}
function ORe(e, r) {
  if ((0, import_path.basename)(e) !== Mre || !(0, import_chunk_hkvzj051.Ao)(r)) return;
  return (0, import_chunk_a8ey418s.av)((0, import_path.join)(e, r));
}
function v(e) {
  let r = ORe(e, "probe");
  if (r === void 0 || r.namespace !== "sidecar") return;
  return { namespace: "sidecar", projectKey: r.projectKey, sessionId: r.sessionId, relPath: r.relPath.slice(0, -1) };
}
var YEr = "tengu_cozy_balloon";
async function f1(e, r, a) {
  let o = [...d.of((0, import_chunk_f9x2f6cx.N)().host).values()].find((u) => e.startsWith(u + import_path.sep));
  if (o === void 0 && (0, import_chunk_m15w38ag.ne)() && r !== void 0) {
    let u = v(e);
    if (u !== void 0) try {
      if ((await r.ensureScope(u)).ok) return;
    } catch {
    }
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) {
    (0, import_chunk_w578pjby.t)("tool-results folder not made: diskless session");
    return;
  }
  let n = (0, import_chunk_8j3h6yzg.Vn)(), l = false;
  try {
    l = await k(n, e);
  } catch {
  }
  if (!l) return;
  try {
    if (o !== void 0) await n.mkdir((0, import_path.dirname)(o)), await n.mkdir(o, 448);
    await n.mkdir(e, a);
  } catch (u) {
    return u;
  }
}
var D = 3;
async function k(e, r) {
  return await y(e, r) === void 0;
}
async function y(e, r) {
  let a = (0, import_chunk_q3a5dy2r.Em)(), o = (0, import_path.relative)(a, r);
  if (o === "" || o === ".." || o.startsWith(".." + import_path.sep) || (0, import_path.isAbsolute)(o)) return;
  let n = a;
  for (let l of o.split(import_path.sep)) {
    n = (0, import_path.join)(n, l);
    let u = await e.lstat(n);
    if (u === void 0) return;
    if (u.isSymbolicLink || !u.isDirectory) return n;
  }
  return;
}
async function $jt(e, r) {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw new import_chunk_jv7av99m.A("tool-results file refused: this session keeps no files on this machine");
  let a = await y(r, e);
  if (a !== void 0) throw new import_chunk_jv7av99m.A(`tool-results path refused: ${a} is a link or not a directory`, "tool-results path refused: a directory on the way is a link or not a directory");
}
async function cme(e, r, a) {
  let o = (0, import_chunk_8j3h6yzg.Vn)();
  await $jt((0, import_path.dirname)(e), o);
  for (let n = 1; ; n++) {
    if (n > 1) await S(o, e);
    else await HUi(e, o);
    try {
      await o.writeBytesExclusive(e, r, a);
      return;
    } catch (l) {
      if ((0, import_chunk_jv7av99m.w)(l) !== "EEXIST" || n >= D) throw l;
    }
  }
}
async function HUi(e, r) {
  if ((await r.lstat(e))?.isSymbolicLink) await S(r, e);
}
async function S(e, r) {
  try {
    await e.delete(r);
  } catch (a) {
    if ((0, import_chunk_jv7av99m.w)(a) !== "ENOENT") throw a;
  }
}
