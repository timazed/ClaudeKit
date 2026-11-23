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
var chunk_1z1bgjzv_exports = {};
__export(chunk_1z1bgjzv_exports, {
  $fl: () => $fl,
  Cbe: () => Cbe,
  Eit: () => Eit,
  Ffl: () => Ffl,
  HSr: () => HSr,
  Hb: () => Hb,
  IBt: () => IBt,
  ISr: () => ISr,
  Iho: () => Iho,
  Jin: () => Jin,
  Lfl: () => Lfl,
  MBt: () => MBt,
  MSr: () => MSr,
  Nfl: () => Nfl,
  OSr: () => OSr,
  Oho: () => Oho,
  PSr: () => PSr,
  Pho: () => Pho,
  Rkt: () => Rkt,
  S8e: () => S8e,
  Tit: () => Tit,
  Xin: () => Xin,
  ZFn: () => ZFn,
  _0e: () => _0e,
  _Hi: () => _Hi,
  cHi: () => cHi,
  fHi: () => fHi,
  gHi: () => gHi,
  hHi: () => hHi,
  mHi: () => mHi,
  mhs: () => mhs,
  pHi: () => pHi,
  phs: () => phs,
  uHi: () => uHi,
  vit: () => vit,
  y0e: () => y0e
});
module.exports = __toCommonJS(chunk_1z1bgjzv_exports);
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_1ag56sne = require("/$bunfs/root/chunk-1ag56sne.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_path = require("path");
var import_fs2 = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path2 = require("path");
var Xin = ["GIT_EXEC_PATH", "DEVELOPER_DIR", "GIT_TEXTDOMAINDIR", "LD_PRELOAD", "LD_LIBRARY_PATH", "LD_AUDIT", "GCONV_PATH", "NLSPATH", "LOCPATH", "PSMODULEPATH", "DYLD_INSERT_LIBRARIES", "DYLD_LIBRARY_PATH", "DYLD_FRAMEWORK_PATH", "DYLD_FALLBACK_LIBRARY_PATH", "DYLD_FALLBACK_FRAMEWORK_PATH", "DYLD_VERSIONED_LIBRARY_PATH", "DYLD_VERSIONED_FRAMEWORK_PATH", "OPENSSL_CONF", "OPENSSL_CONF_INCLUDE", "OPENSSL_MODULES", "OPENSSL_ENGINES"];
function cHi(n, e, o, r = process.env) {
  let i = (0, import_chunk_khxw3ng0.Zi)(r, "GIT_CONFIG_GLOBAL"), s = (0, import_chunk_khxw3ng0.Zi)(r, "XDG_CONFIG_HOME");
  return [...n.filter((u) => u !== ""), ...sn(o, r), ...i ? [i] : [], ...phs(r).flatMap((u) => [`${s || `${u}${import_path2.sep}.config`}${import_path2.sep}git${import_path2.sep}config`, `${u}${import_path2.sep}.gitconfig`])].map((u) => S8e(e, u));
}
function Lfl(n, e, o, r) {
  return [...n.filter((i) => i !== ""), ...sn(o, r)].map((i) => S8e(e, i));
}
function sn(n, e) {
  if (PSr((0, import_chunk_khxw3ng0.Zi)(e, "GIT_CONFIG_NOSYSTEM"))) return [];
  let o = (0, import_chunk_khxw3ng0.Zi)(e, "GIT_CONFIG_SYSTEM"), r = (0, import_chunk_khxw3ng0.Zi)(e, "PROGRAMDATA"), i = (0, import_chunk_cg8dqz0a.x)() === "windows";
  return [...o ? [o] : [], ...i ? [] : ["/etc/gitconfig"], ...n === null ? [] : [`${n}${import_path2.sep}etc${import_path2.sep}gitconfig`], ...i && r ? [`${r}${import_path2.sep}Git${import_path2.sep}config`] : []];
}
function PSr(n) {
  let e = n?.trim().toLowerCase();
  if (e === void 0 || ["", "false", "no", "off"].includes(e)) return false;
  if (["true", "yes", "on"].includes(e)) return true;
  return /^[-+]?\d+$/.test(e) && Number(e) !== 0;
}
function un() {
  return (0, import_chunk_4smdap7r.M)([(0, import_chunk_8nvd6fqx.ih)(), (0, import_chunk_8nvd6fqx.lJe)(), ...(0, import_chunk_1ag56sne.BH)().map((n) => n === "~" || n.startsWith("~/") ? (0, import_path2.join)((0, import_os.homedir)(), n.slice(1)) : n)]);
}
function an(n, e, o) {
  return o.find((r) => !cn(r) && ZFn(r, e).verdict === "foreign" && Hb(r, n));
}
function Pho(n, e, o, { pattern: r = false } = {}) {
  if (n.verdict !== "foreign") return n;
  let i = an(n.spelling, e, o);
  return i === void 0 ? n : j(n.spelling, i, (0, import_chunk_cg8dqz0a.x)() === "windows", r);
}
async function Eit(n, e, o) {
  if (n.verdict !== "foreign") return n;
  let r = an(n.spelling, e, o);
  return r === void 0 ? n : dn(n.spelling, r, (0, import_chunk_cg8dqz0a.x)() === "windows");
}
function phs(n = process.env) {
  let e = (0, import_chunk_khxw3ng0.Zi)(n, "HOME"), o = (0, import_chunk_khxw3ng0.Zi)(n, "HOMEDRIVE"), r = (0, import_chunk_khxw3ng0.Zi)(n, "HOMEPATH");
  return (0, import_chunk_4smdap7r.M)([e, (0, import_chunk_cg8dqz0a.x)() === "windows" && o && r ? `${o}${r}` : void 0, (0, import_os.homedir)()].filter((i) => Boolean(i)));
}
async function Nfl(n, e, o, r = [], i = []) {
  let s = e.GIT_DIR ?? (0, import_path2.join)(o, ".git"), u = e.GIT_COMMON_DIR ?? s, l = async (a) => (0, import_chunk_z6pfqf6e.rp)(a) ? null : (0, import_promises.realpath)(a).catch((g) => (0, import_chunk_jv7av99m.w)(g) === "ENOENT" ? a : null), c = await Promise.all([[o, (0, import_path2.resolve)(n)], [s], [u]].map(async (a) => [...a, ...await Promise.all(a.map(l))]));
  if (c.some((a) => a.includes(null))) return null;
  let [y, R, m] = c.map((a) => (0, import_chunk_4smdap7r.M)(a.filter((g) => g !== null))), T = async (a) => {
    if (bn(a)) return { derived: [a] };
    let g = await Eit(await _0e(a, o), o, i);
    if (g.verdict === "foreign") return { unexamined: a, detail: "it names another host than this checkout\u2019s or the owner\u2019s home and temp server" };
    if (g.verdict !== "local") return { unexamined: a, detail: `its route cannot be vouched for (${g.verdict})` };
    return b(g.spelling);
  }, b = (a) => (0, import_promises.realpath)(a).then((g) => ({ resolved: g }), async (g) => {
    let S = (0, import_chunk_jv7av99m.w)(g);
    if (S === "ENOENT" || S === "ENOTDIR") return en(a, o);
    let E = await (0, import_promises.lstat)(a).catch(() => null);
    if (E === null || E.isDirectory()) return { unexamined: a, detail: S ?? (0, import_chunk_jv7av99m.d)(g) };
    return E.isSymbolicLink() ? en(a, o) : { derived: [a] };
  }), N = await Promise.all(r.map(T)), f = N.find((a) => "unexamined" in a);
  if (f !== void 0) return f;
  let v = N.flatMap((a) => "resolved" in a ? [a.resolved] : []).filter((a) => (0, import_path2.isAbsolute)(a)), O = N.flatMap((a) => "derived" in a ? a.derived : []).filter((a) => (0, import_path2.isAbsolute)(a)), I = (0, import_chunk_4smdap7r.M)([...r, ...v, ...O]), A = (0, import_chunk_4smdap7r.M)([...y, ...R, ...m, ...I]), L = (0, import_chunk_cg8dqz0a.x)() === "windows" ? [] : await Promise.all((0, import_chunk_4smdap7r.M)([...y, ...R, ...m]).map(l));
  if (L.includes(null)) return null;
  let Z = (a, g) => (0, import_promises.stat)(a, { bigint: true }).then((S) => {
    let E = mn(S);
    return E === void 0 ? [] : [[E, a]];
  }, async (S) => {
    let E = (0, import_chunk_jv7av99m.w)(S);
    if (E === "ENOENT" || E === "ENOTDIR" && !g) return [];
    if (g) return null;
    let nn = await (0, import_promises.lstat)(a).catch(() => null);
    return nn !== null && !nn.isDirectory() ? [] : { unexamined: a, detail: E ?? (0, import_chunk_jv7av99m.d)(S) };
  }), H = await Promise.all([...(0, import_chunk_4smdap7r.M)(L.filter((a) => a !== null)).map((a) => Z(a, true)), ...(0, import_chunk_cg8dqz0a.x)() === "windows" ? [] : (0, import_chunk_4smdap7r.M)(v).map((a) => Z(a, false))]);
  if (H.includes(null)) return null;
  let Q = H.find((a) => a !== null && !Array.isArray(a));
  if (Q !== void 0) return Q;
  return { ids: new Map(H.filter((a) => Array.isArray(a)).flat()), roots: A, trees: y, fixed: (0, import_chunk_4smdap7r.M)([...R.flatMap((a) => [a, (0, import_path2.join)(a, "config"), (0, import_path2.join)(a, "config.worktree"), (0, import_path2.join)(a, "commondir")]), ...m.flatMap((a) => [a, (0, import_path2.join)(a, "config"), (0, import_path2.join)(a, "worktrees")])]) };
}
async function en(n, e) {
  let o = await V(n, e);
  return o === null ? { unexamined: n, detail: "it is too deep or too long to resolve" } : { derived: [n, o] };
}
var Dn = 8;
async function V(n, e, o = Dn, r = 0) {
  if (OSr(n, r)) return null;
  let i = await (0, import_promises.realpath)(n).catch(() => null);
  if (i !== null) return i;
  let s = o > 0 ? await (0, import_promises.readlink)(n).catch(() => null) : null;
  if (s !== null) {
    let c = await (0, import_promises.realpath)((0, import_path2.dirname)(n)).catch(() => (0, import_path2.dirname)(n)), { spelling: y, verdict: R } = await In(s, c, e);
    return R === "local" ? V(y, e, o - 1, r) : n;
  }
  let u = (0, import_path2.dirname)(n);
  if (u === n) return n;
  let l = await V(u, e, o, r + 1);
  return l === null ? null : (0, import_path2.join)(l, (0, import_path2.basename)(n));
}
var uHi = 256;
function OSr(n, e) {
  return e > uHi || n.length > 32767;
}
function bn(n) {
  return (0, import_chunk_cg8dqz0a.x)() === "macos" && Hb("/dev/fd", n);
}
async function fHi(n, e) {
  let o = await Promise.all((0, import_chunk_4smdap7r.M)(e.filter((i) => i !== null)).map(async (i) => ({ path: i, reachable: await W(i, n) }))), r = o.find(({ reachable: i }) => i === true);
  if (r !== void 0) return r.path;
  return o.some(({ reachable: i }) => i === null) ? null : void 0;
}
function vn(n) {
  return /^[A-Za-z]:[\\/][^:]*$/.test(n);
}
function IBt(n) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" && !vn(n);
}
function ZFn(n, e, { pattern: o = false } = {}) {
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows";
  return j(ln(n, r), e, r, o);
}
function ln(n, e) {
  return e ? (0, import_chunk_1ag56sne.i1n)(X((0, import_chunk_1ag56sne.g0)((0, import_chunk_1ag56sne.Ikt)(n)))) : (0, import_chunk_1ag56sne.i1n)(n).replace(/^\/\/+/, "/");
}
function pHi(n, e, o) {
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows";
  if ((0, import_chunk_w578pjby.X0o)(n, r)) return { spelling: n, verdict: "opaque" };
  let { isAbsolute: i, join: s } = r ? import_path2.win32 : import_path2.posix, u = i(n) ? n : s(e, n);
  return j(r ? X((0, import_chunk_1ag56sne.g0)(u)) : u, o, r);
}
async function In(n, e, o) {
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows";
  if ((0, import_chunk_w578pjby.X0o)(n, r)) return { spelling: n, verdict: "opaque" };
  let { isAbsolute: i, join: s } = r ? import_path2.win32 : import_path2.posix, u = i(n) ? n : s(e, n);
  return dn(r ? X((0, import_chunk_1ag56sne.g0)(u)) : u, o, r);
}
async function dn(n, e, o) {
  let r = J(n, e, o);
  return "verdict" in r ? r : K(r.spelling, await (0, import_chunk_w578pjby._$)(import_chunk_w578pjby.Cv, r.spelling, { anchor: e, ...Y }), e);
}
function j(n, e, o, r = false) {
  let i = J(n, e, o, r);
  return "verdict" in i ? i : K(i.spelling, (0, import_chunk_w578pjby.ig)(import_chunk_w578pjby.Cv, i.spelling, { anchor: e, ...Y }), e);
}
async function _0e(n, e) {
  let o = (0, import_chunk_cg8dqz0a.x)() === "windows", r = J(ln(n, o), e, o);
  return "verdict" in r ? r : K(r.spelling, await (0, import_chunk_w578pjby._$)(import_chunk_w578pjby.Cv, r.spelling, { anchor: e, ...Y }), e);
}
var Y = { unreadableAncestry: "unverified", literalLinkText: "opaque" };
function J(n, e, o, r = false) {
  if (o) {
    let c = import_path2.win32.normalize(n);
    if (/^[\\/]{2}[.?](?:[\\/]|$)/.test(c)) return { spelling: c, verdict: "opaque" };
    if ((0, import_chunk_z6pfqf6e.sa)(c) && (0, import_chunk_z6pfqf6e.Dce)(c, e)) return { spelling: c, verdict: "foreign" };
  }
  let i = (o ? import_path2.win32 : import_path2.posix).resolve(n);
  if (!o && (0, import_chunk_z6pfqf6e.$w)(i)) return { spelling: i, verdict: "opaque" };
  if (Jin(i, e)) return { spelling: i, verdict: "foreign" };
  let s = i.split("/"), u = r ? s.findIndex((c) => (0, import_chunk_1ag56sne.Ku)(c)) : -1, l = u === -1 ? i : s.slice(0, u).join("/");
  return !o && l.includes("\\") ? { spelling: i, verdict: "opaque" } : { spelling: i };
}
function Jin(n, e, o = false) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return (0, import_chunk_z6pfqf6e.sa)(n) && (0, import_chunk_z6pfqf6e.Dce)(n, e);
  let r = n.replace(/^\/{2,}/, "/"), i = (0, import_chunk_z6pfqf6e._Ve)(e);
  return (0, import_chunk_z6pfqf6e.$r)(r) || (0, import_chunk_z6pfqf6e._Ve)(r).some((s) => !i.includes(s)) || An(r) && (o && cn(r) || !Hb(r, e) && !Hb(e, r)) || (0, import_chunk_z6pfqf6e.MFs)(r, e);
}
function K(n, e, o) {
  if (e === void 0) return { spelling: n, verdict: "local" };
  if (e === n) return Jin(n, o) ? { spelling: n, verdict: "foreign" } : { spelling: n, verdict: "unreadable" };
  if (e === import_chunk_w578pjby.Pg) return { spelling: n, verdict: "unreadable" };
  if (e === import_chunk_w578pjby.II) return { spelling: n, verdict: "opaque" };
  return { spelling: n, verdict: "linked", via: e };
}
function vit({ spelling: n, verdict: e, via: o }, r) {
  if (e === "foreign") return [n];
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? (0, import_chunk_4smdap7r.M)([...xn, ...[n, r, o ?? ""].filter(import_chunk_z6pfqf6e.$r).map((i) => import_path2.win32.parse(i).root)]) : ["/"];
}
function cn(n) {
  return (0, import_chunk_z6pfqf6e.dx)(n) || /^\/network(?:\/servers)?$/i.test(import_path2.posix.resolve("/", n));
}
function An(n) {
  return (0, import_chunk_z6pfqf6e.KS)(n) && !(0, import_chunk_z6pfqf6e.vd)(n);
}
var xn = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ", (n) => `${n}:\\`);
function X(n) {
  let e = /^[\\/]{2}\.(?:[\\/](.*))?$/s.exec(n);
  if (e === null) return n;
  let o = (e[1] ?? "").split(/[\\/]+/).reduce((s, u) => {
    if (u === "..") s.pop();
    else if (u !== "" && u !== ".") s.push(u);
    return s;
  }, []), [r = "", ...i] = o;
  if (/^[A-Za-z]:$/.test(r)) return `${r}\\${i.join("\\")}`;
  if (r.toUpperCase() === "UNC" && i.length >= 2) return `\\\\${i.join("\\")}`;
  return `\\\\.\\${o.join("\\")}`;
}
function fn(n) {
  return process.getuid === void 0 || n === process.getuid();
}
async function gn(n) {
  return (0, import_promises.access)(n, import_fs2.constants.W_OK).then(() => true, (e) => !["EACCES", "EROFS", "EPERM"].includes((0, import_chunk_jv7av99m.w)(e) ?? ""));
}
async function Ffl(n, e) {
  return !e.isDirectory() && e.nlink > 1 && (fn(e.uid) || await gn(n));
}
function mn(n) {
  return n.isDirectory() && n.ino !== 0n ? `${n.dev}:${n.ino}` : void 0;
}
var Ln = 40;
async function W(n, e, o = Ln, r = { secondNames: true }) {
  let { nestedRoot: i, replaceable: s, lands: u, asksForAnotherHost: l } = hn(e);
  if (Cn(n, e)) return true;
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && n !== (0, import_path2.resolve)(n)) return W((0, import_path2.resolve)(n), e, o, r);
  let { root: y } = (0, import_path2.parse)(n), R = kn(n, y), m = y, T = false;
  for (let [b, N] of R.entries()) {
    if (N === "..") {
      if (T) return true;
      m = (0, import_path2.dirname)(m);
      continue;
    }
    let f = (0, import_path2.join)(m, N);
    if (s(f) || l(f)) return true;
    let { entry: v, alias: O } = await Mn(f, e, r.secondNames);
    switch (v) {
      case null:
        return null;
      case "device":
        return i(f);
      case "shared":
        return true;
      case "shared_if_writable":
        if (await gn(f)) return true;
        T = O !== void 0 && O !== f, m = O ?? f;
        break;
      case "sealed":
        T = false, m = f;
        break;
      case "absent":
        return u((0, import_path2.resolve)(f, ...R.slice(b + 1)));
      case "link": {
        if (i(f)) return true;
        let I = await (0, import_promises.readlink)(f).catch(() => null);
        if (I === null || o === 0) return null;
        let A = Fn(f, I);
        if (A === null) return true;
        let L = [S8e(m, A), ...R.slice(b + 1)];
        return W(L.join(import_path2.sep), e, o - 1, r);
      }
      case "entry":
        T = O !== void 0 && O !== f, m = O ?? f;
    }
  }
  return u(m);
}
function kn(n, e) {
  return n.slice(e.length).split(import_path2.sep === "/" ? /\/+/ : /[\\/]+/).filter((o) => o !== "" && o !== ".");
}
function hn(n) {
  let e = (i) => n.roots.some((s) => Hb(s, i)), o = (i) => n.roots.some((s) => Hb(s, i) && Hb(i, s)), r = (i) => n.fixed.includes(i);
  return { inside: e, kept: r, nestedRoot: (i) => o(i) && !r(i) && n.roots.some((s) => Hb(s, i) && !Hb(i, s)), replaceable: (i) => e(i) && !o(i) && !r(i), lands: (i) => e(i) && !r(i), asksForAnotherHost: (i) => n.roots.every((s) => Jin(i, s)) };
}
function Cn(n, e) {
  return !(0, import_path2.isAbsolute)(n) || IBt(n) || e.roots.every((o) => Jin(n, o, true)) || n.includes("\uFFFD");
}
async function Mn(n, e, o) {
  let r;
  return { entry: await (0, import_promises.lstat)(n, { bigint: true }).then((s) => {
    let u = mn(s);
    return r = u === void 0 ? void 0 : e.ids.get(u), s.isSymbolicLink() ? "link" : s.isCharacterDevice() ? "device" : o && !s.isDirectory() && s.nlink > 1n ? fn(Number(s.uid)) ? "shared" : "shared_if_writable" : "entry";
  }, (s) => {
    let u = (0, import_chunk_jv7av99m.w)(s);
    return u === "ENOENT" || u === "ENOTDIR" ? "absent" : ["EACCES", "EPERM"].includes(u ?? "") ? "sealed" : null;
  }), alias: r };
}
function Fn(n, e) {
  let o = (0, import_chunk_cg8dqz0a.x)() === "windows", r = o ? /^[A-Za-z]:/.exec(n)?.[0] : void 0;
  if (o && /^[A-Za-z]:(?![\\/])/.test(e)) return null;
  let i = r !== void 0 && /^[\\/](?![\\/])/.test(e) ? `${r}${e}` : e;
  return i.includes("\uFFFD") ? null : i;
}
function ISr(n) {
  let e = Oho(n);
  return e === null ? void 0 : /^gitdir: (.+)$/s.exec(e)?.[1];
}
function Oho(n) {
  if (n === void 0) return null;
  let e = n.replace(/[\r\n]+$/, "");
  return e === "" || /[\r\n\0\uFFFD]/.test(e) ? null : e;
}
function S8e(n, e) {
  return (0, import_path2.isAbsolute)(e) ? e : `${n}${import_path2.sep}${e}`;
}
function Hb(n, e) {
  if (!(0, import_path2.isAbsolute)(e)) return false;
  let o = (0, import_chunk_cg8dqz0a.x)(), r = o === "macos" || o === "windows", i = (l) => r ? l.normalize("NFC").toLowerCase() : l, s = (0, import_path2.relative)(i(n), i(e)), u = s === ".." || s.startsWith(`..${import_path2.sep}`) || s.startsWith("../");
  return s === "" || !u && !(0, import_path2.isAbsolute)(s);
}
var z = ["projectSettings", "localSettings"], Hn = ["CLAUDE_CODE_TMPDIR", "TMPDIR", "TEMP", "TMP"], Rkt = ["CLAUDE_CONFIG_DIR", "HOME", "USERPROFILE", "HOMEDRIVE", "HOMEPATH", "CLAUDE_CODE_USE_COWORK_PLUGINS"], mHi = ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"], hHi = [...mHi, ...Rkt, ...Hn, "XDG_CONFIG_HOME", "PATH", ...Xin];
function mhs() {
  return (0, import_chunk_f9x2f6cx.Av)() === void 0 && (0, import_chunk_f9x2f6cx.wF)() !== void 0 ? [...z, "flagSettings"] : z;
}
function Bn() {
  let n = mhs();
  return import_chunk_xzvhvaa2.Ts.filter((e) => !n.includes(e) && (0, import_chunk_xzvhvaa2.rn)(e));
}
function $fl(n, e = "unknown") {
  let o = mhs().includes("flagSettings") ? (0, import_chunk_f9x2f6cx.wF)() : void 0, r = o === void 0 ? [] : [q(o, (0, import_chunk_f9x2f6cx.Gz)())], i = [...z.map((l) => ({ tier: l, file: (0, import_chunk_2yx6c1y2._n)(l) })), { tier: "localSettings", file: (0, import_chunk_2yx6c1y2.A_)() }].flatMap(({ tier: l, file: c }) => c === void 0 ? [] : [{ tier: l, file: c, names: q(c, void 0, e) }]), s = [(0, import_path.join)(n.workTree, ".claude", "settings.json"), (0, import_path.join)(n.workTree, ".claude", "settings.local.json")].filter((l) => !i.some(({ file: c }) => c === l)).map((l) => q(l, void 0, e)), u = i.map(({ names: l }) => l);
  if ([...r, ...u, ...s].includes(null)) return null;
  return [...r, ...i.filter(({ tier: l }) => !(0, import_chunk_f9x2f6cx.JA)() && !(0, import_chunk_2yx6c1y2.EJe)(l)).map(({ names: l }) => l)].flatMap((l) => l ?? []);
}
function q(n, e, o = "unknown") {
  let { settings: r, errors: i, textRead: s } = e === void 0 ? (0, import_chunk_6mfepmbb.Kze)(n, /* @__PURE__ */ new Map()) : { ...(0, import_chunk_6mfepmbb.cO)(n, e), textRead: void 0 };
  if (r === null && i.length === 0) return [];
  return r === null || i.some((u) => u.severity !== "warning") ? null : Object.keys(r.env ?? {});
}
function $n(n) {
  let e = {};
  for (let o of n) try {
    let r = (0, import_chunk_2yx6c1y2._e)(o)?.env;
    if (r) {
      let i = (0, import_chunk_gd77dyw4.Hr)(r, (s) => typeof s === "string");
      Object.assign(e, (0, import_chunk_5e3gtsn9.Gle)(i, o));
    }
  } catch {
  }
  return e;
}
function MSr() {
  let n = (0, import_chunk_5e3gtsn9.Gc)(), e = n === void 0 || Rkt.every((o) => (0, import_chunk_khxw3ng0.Zi)(process.env, o) === (0, import_chunk_khxw3ng0.Zi)(n, o));
  return { ...(0, import_chunk_5e3gtsn9.b9)(), ...e ? $n(Bn()) : {} };
}
function Iho(n) {
  let e = (0, import_chunk_5e3gtsn9.Gc)();
  if (e === void 0) return;
  let o = MSr(), r = Rkt;
  return n.find((i) => {
    let s = (0, import_chunk_khxw3ng0.Zi)(process.env, i);
    return s !== (0, import_chunk_khxw3ng0.Zi)(e, i) && (r.includes(i) || s !== (0, import_chunk_khxw3ng0.Zi)(o, i));
  });
}
function Tit(n) {
  let e = (0, import_chunk_5e3gtsn9.Gc)();
  if (e === void 0) return n;
  let o = MSr(), r = Rkt, i = new Set(Object.keys(n).filter((s) => {
    let u = n[s];
    return u !== void 0 && u !== (0, import_chunk_khxw3ng0.Zi)(e, s) && (r.includes(s.toUpperCase()) || u !== (0, import_chunk_khxw3ng0.Zi)(o, s)) && (0, import_chunk_5e3gtsn9.QH)(s, u);
  }));
  if (i.size === 0) return n;
  return { ...(0, import_chunk_gd77dyw4.Hr)(n, (s, u) => !i.has(u)), ...Object.fromEntries([...i].flatMap((s) => {
    let u = (0, import_chunk_khxw3ng0.Zi)(e, s);
    return u === void 0 ? [] : [[s, u]];
  })) };
}
function gHi() {
  let n = un(), e = (0, import_chunk_5e3gtsn9.Gc)();
  if (e === void 0) return n;
  let o = pn(e);
  if (o === void 0) return n;
  let r = (0, import_path.basename)((0, import_chunk_8nvd6fqx.ih)()), i = (0, import_path.join)(o, r), s = Buffer.byteLength(i) <= import_chunk_8nvd6fqx.iIo ? i : (0, import_path.join)(yn(e) ?? o, r);
  return (0, import_chunk_4smdap7r.M)([...n, i, s]);
}
function y0e() {
  let n = (0, import_chunk_5e3gtsn9.Gc)();
  if (n !== void 0 && G.snapshot === n) return G.roots;
  let e = n ?? process.env, i = [(0, import_chunk_khxw3ng0.Zi)(e, "HOME") || ((0, import_chunk_cg8dqz0a.x)() === "windows" ? (0, import_chunk_khxw3ng0.Zi)(e, "USERPROFILE") || ((0, import_chunk_khxw3ng0.Zi)(e, "HOMEDRIVE") && (0, import_chunk_khxw3ng0.Zi)(e, "HOMEPATH") ? `${(0, import_chunk_khxw3ng0.Zi)(e, "HOMEDRIVE")}${(0, import_chunk_khxw3ng0.Zi)(e, "HOMEPATH")}` : void 0) : void 0), pn(e)].filter((u) => u !== void 0 && u !== "").map((u) => {
    let l = ZFn(u, u);
    if (l.verdict !== "local") return (0, import_chunk_w578pjby.t)(`[repositorySettings] start root ${u} cannot be vouched for (${l.verdict}): it exempts nothing`, { level: "warn" }), { roots: [], transient: l.verdict === "unreadable" };
    try {
      let c = (0, import_fs.realpathSync)(l.spelling);
      return { roots: (0, import_chunk_4smdap7r.M)([u, l.spelling, c]), transient: false };
    } catch {
      return { roots: [u, l.spelling], transient: false };
    }
  }), s = (0, import_chunk_4smdap7r.M)(i.flatMap(({ roots: u }) => u));
  if (n !== void 0 && !i.some(({ transient: u }) => u)) G.snapshot = n, G.roots = s;
  return s;
}
var G = (0, import_chunk_t57w17k7.de)({ snapshot: void 0, roots: [] }, (n) => {
  n.snapshot = void 0, n.roots = [];
});
function pn(n) {
  return En((0, import_chunk_khxw3ng0.Zi)(n, "CLAUDE_CODE_TMPDIR") || void 0) ?? yn(n);
}
function yn(n) {
  let e = (r) => (0, import_chunk_khxw3ng0.Zi)(n, r) || void 0, o = "/tmp";
  return En("/tmp");
}
function En(n) {
  return n !== void 0 && n.length > 1 ? n.replace(/[\\/]+$/, "") : n;
}
function HSr(n) {
  return n !== void 0 && (0, import_chunk_xcgcdx61.Zgn)(n);
}
function MBt(n, e) {
  if (HSr(n)) {
    if ((0, import_chunk_44yfdc64.JJe)().some((y) => y.toUpperCase() === "BUN_OPTIONS")) return "--install=disable";
    let o = (0, import_chunk_r6r2wdsw.By)(e, "BUN_OPTIONS"), r = e[o], i = (0, import_chunk_khxw3ng0.Zi)(MSr(), "BUN_OPTIONS"), s = (0, import_chunk_khxw3ng0.Zi)((0, import_chunk_5e3gtsn9.Gc)() ?? {}, "BUN_OPTIONS"), u = r === void 0 || r === i || i === void 0 && (r === s || !(0, import_chunk_5e3gtsn9.QH)(o, r)) && r !== (0, import_chunk_r6r2wdsw.TVn)("BUN_OPTIONS"), l = i ?? s, c = u ? r : l !== void 0 && !(0, import_chunk_9zdrdv25.U0r)("BUN_OPTIONS", l) ? l : void 0;
    return c ? `--install=disable ${c}` : "--install=disable";
  }
  return;
}
function _Hi(n, e) {
  for (let o of Object.keys(n)) if (o.toUpperCase() === "BUN_OPTIONS") delete n[o];
  n.BUN_OPTIONS = e;
}
function Cbe(n, e, o) {
  {
    let r = MBt(n, o);
    if (r === void 0) return;
    if (e[(0, import_chunk_r6r2wdsw.By)(e, "BUN_OPTIONS")] !== o[(0, import_chunk_r6r2wdsw.By)(o, "BUN_OPTIONS")]) (0, import_chunk_w578pjby.t)(`Plugin ${n} set BUN_OPTIONS for a program it starts; Claude Code replaced it, because programs of Anthropic Directory plugins run with Bun's automatic install off and must ship the packages they import`);
    _Hi(e, r);
  }
}
