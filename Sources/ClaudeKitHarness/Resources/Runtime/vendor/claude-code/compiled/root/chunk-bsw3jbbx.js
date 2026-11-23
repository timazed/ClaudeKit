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
var chunk_bsw3jbbx_exports = {};
__export(chunk_bsw3jbbx_exports, {
  EUe: () => EUe,
  Esr: () => Esr,
  Fsi: () => Fsi,
  MMe: () => MMe,
  Nsi: () => Nsi,
  W7r: () => W7r,
  ksr: () => ksr,
  lnt: () => lnt,
  xJt: () => xJt
});
module.exports = __toCommonJS(chunk_bsw3jbbx_exports);
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_7rbz81ga = require("/$bunfs/root/chunk-7rbz81ga.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("stream/promises");
var { basename: g, dirname: f, join: m, relative: U, sep: G } = import_path.posix, X = /* @__PURE__ */ new Set(["claude.md", "claude.local.md", "agent.md"]), W = /* @__PURE__ */ new Set(["head", "commondir", "node_modules", "site-packages", "dist-packages", "__pycache__"]), Y = /* @__PURE__ */ new Set(["config", "config.worktree"]), v = /* @__PURE__ */ new Set(["sitecustomize", "usercustomize"]), Nsi = /[^\P{ASCII}\w .()+,=@#%[\]-]/u, B = new RegExp(`^-|\\s-\\S|${Nsi.source}`, "u"), Fsi = new RegExp("[\\p{Cc}\\p{Zl}\\p{Zp}]|(?![\\u200c\\u200d])\\p{Cf}|(?:^|\\p{ASCII})[\\u200c\\u200d]", "u"), W7r = 255;
function ksr(e, t) {
  let n = (0, import_chunk_fbnv54pa.za)(e);
  if (n.startsWith(".")) return "dot_name";
  if (X.has(n) || import_chunk_7rbz81ga.j7r.has(n) || e === "ARCHITECTURE.md") return "instruction_file";
  if (W.has(n) || v.has((0, import_chunk_7cfjrnwy.nt)(n, ".")) || t && (import_chunk_p1ewvgeh.tLe.has(n) || Y.has(n))) return "unsafe_name";
  if ((0, import_chunk_z6pfqf6e.JLo)(e) || import_chunk_z6pfqf6e.y3t.test(e) || B.test(e) || Fsi.test(e)) return "odd_spelling";
  return;
}
function MMe(e) {
  let t = e.split(G);
  for (let [n, o] of t.entries()) {
    let r = ksr(o, n === t.length - 1);
    if (r !== void 0) return r;
  }
  return;
}
async function y(e) {
  try {
    return await (0, import_promises.realpath)(e);
  } catch (t) {
    if ((0, import_chunk_jv7av99m.w)(t) !== "ENOENT" || f(e) === e) throw t;
    return m(await y(f(e)), g(e));
  }
}
function _(e, t, n, o) {
  if (!(0, import_chunk_6mfepmbb.DRt)(e, t)) return "outside_home";
  let r = m(t, g(n));
  return MMe(U(e, r)) ?? ((0, import_chunk_p1ewvgeh.Ore)(n, [n, r]).safe ? void 0 : "write_would_ask") ?? (o === void 0 || o.includes(r) ? void 0 : "not_as_judged");
}
var z = /* @__PURE__ */ new Set(["EEXIST", "ENOTDIR", "ENOENT"]);
async function I(e) {
  try {
    return { outcome: (await (0, import_promises.lstat)(e)).isFile() ? "already_present" : "path_occupied" };
  } catch (t) {
    if ((0, import_chunk_jv7av99m.w)(t) === "ENOENT") return;
    throw t;
  }
}
async function lnt(e, t) {
  let n = m(e, t), o = await (0, import_promises.realpath)(e);
  try {
    let r = MMe(t) ?? _(o, await y(f(n)), n, void 0);
    return r === void 0 ? await I(n) : { outcome: "refused_name", refusal: r };
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) === "ENOTDIR") return { outcome: "path_occupied" };
    throw r;
  }
}
async function Esr(e, t, n, o) {
  try {
    await (0, import_promises.link)(e, n);
  } catch (u) {
    if ((0, import_chunk_jv7av99m.w)(u) === "EEXIST") return;
    if (!(0, import_chunk_2yx6c1y2.QNl)(u) && (0, import_chunk_jv7av99m.w)(u) !== "EXDEV") throw u;
    return await J(t, n, o);
  }
  let [r, a] = await Promise.all([t.stat(), (0, import_promises.lstat)(n)]);
  if (E(a, r)) return r;
  let c = await R((0, import_promises.lstat)(e));
  if (E(c, r)) return;
  for (let u of [c, await R((0, import_promises.stat)(e))]) if (u !== void 0 && await EUe(n, u)) break;
  let s = Error("the source of a home file was exchanged while it was published");
  throw s.code = "HOME_SOURCE_EXCHANGED", s;
}
function E(e, t) {
  return e?.ino === t.ino && e.dev === t.dev;
}
async function R(e) {
  try {
    return await e;
  } catch (t) {
    if ((0, import_chunk_jv7av99m.w)(t) === "ENOENT") return;
    throw t;
  }
}
async function EUe(e, t) {
  try {
    if (!E(await R((0, import_promises.lstat)(e)), t)) return false;
    return await (0, import_promises.unlink)(e), true;
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) !== "ENOENT") (0, import_chunk_k449cc64.i)(n);
    return false;
  }
}
async function J(e, t, n) {
  let o;
  try {
    o = await (0, import_promises.open)(t, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr, n);
  } catch (a) {
    if ((0, import_chunk_jv7av99m.w)(a) === "EEXIST") return;
    throw a;
  }
  let r;
  try {
    r = await o.stat();
    try {
      await o.chmod(n);
    } catch (a) {
      if (!(0, import_chunk_q7qjcthc.qoe)(a)) throw a;
    }
    return await (0, import_promises2.pipeline)(e.createReadStream({ start: 0, autoClose: false }), o.createWriteStream()), E(await (0, import_promises.lstat)(t), r) ? r : void 0;
  } catch (a) {
    throw await o.close().catch(() => {
    }), await (r === void 0 ? (0, import_promises.unlink)(t).catch(() => {
    }) : EUe(t, r)), a;
  }
}
async function Z(e, t) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "linux") return t(e, () => (0, import_promises.realpath)(e));
  let n = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_chunk_jxja0v0z.cr);
  try {
    let o = `/proc/self/fd/${n.fd}`;
    return await t(o, () => (0, import_promises.readlink)(o));
  } finally {
    await n.close();
  }
}
var A = 420;
async function xJt(e, t, n, o) {
  let r = m(t, n), a = await (0, import_promises.realpath)(t), c;
  try {
    let s = MMe(n) ?? _(a, await y(f(r)), r, o);
    if (s !== void 0) return { outcome: "refused_name", refusal: s };
    c = await (0, import_promises.mkdir)(f(r), { recursive: true });
  } catch (s) {
    if (z.has((0, import_chunk_jv7av99m.w)(s))) return { outcome: "path_occupied" };
    throw s;
  }
  return await Z(f(r), async (s, u) => {
    let N = _(a, await u(), r, o);
    if (N !== void 0) return { outcome: "refused_name", refusal: N };
    let p = await (0, import_promises.open)(e, import_chunk_09gzjq1e.Fo | import_chunk_jxja0v0z.cr);
    try {
      if (!(await p.stat()).isFile()) {
        let H = Error("the source of a home file is not a regular file");
        throw H.code = "HOME_SOURCE_NOT_REGULAR", H;
      }
      await p.chmod(A);
      let S = m(s, g(r)), T = await Esr(e, p, S, A);
      if (T === void 0) return await I(S) ?? { outcome: "path_occupied" };
      let F = _(a, await u(), r, o);
      if (F !== void 0) return await EUe(S, T), { outcome: "refused_name", refusal: F };
      return { outcome: "placed", ...c !== void 0 && { madeDirectory: c } };
    } finally {
      await p.close();
    }
  });
}
