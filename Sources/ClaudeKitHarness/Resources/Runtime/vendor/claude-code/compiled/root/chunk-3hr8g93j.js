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
var chunk_3hr8g93j_exports = {};
__export(chunk_3hr8g93j_exports, {
  Aqt: () => Aqt,
  Ext: () => Ext,
  O_n: () => O_n,
  P_n: () => P_n,
  R8: () => R8,
  SDo: () => SDo,
  SUl: () => SUl,
  ZJe: () => ZJe,
  _na: () => _na,
  c0r: () => c0r,
  e1e: () => e1e,
  eE: () => eE,
  eQe: () => eQe,
  f0r: () => f0r,
  gT: () => gT,
  gna: () => gna,
  hna: () => hna,
  ift: () => ift,
  kxt: () => kxt,
  m0r: () => m0r,
  mna: () => mna,
  o0s: () => o0s,
  p0r: () => p0r,
  p6e: () => p6e,
  pna: () => pna,
  r0s: () => r0s,
  u0r: () => u0r,
  x8: () => x8,
  yna: () => yna,
  zqn: () => zqn
});
module.exports = __toCommonJS(chunk_3hr8g93j_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_1m0ck3v8 = require("/$bunfs/root/chunk-1m0ck3v8.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var R8 = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`, P_n = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`, pna = `(?:${R8}/)+${R8}/-/merge_requests`, mna = String.raw`[a-z0-9-]+-review\.googlesource\.com`, SDo = new RegExp(String.raw`^https://${mna}/c/(?:${R8}/)*${R8}/\+/\d{1,9}$`), SUl = new RegExp(`^https?://${P_n}(?::\\d{1,5})?/${pna}/\\d+$`), kxt = 2048;
function e1e(e) {
  return /\/-\/merge_requests\/\d/.test(e);
}
var hna = void 0;
function Ext({ file: e, args: r, cwd: n, env: i }, o) {
  return (0, import_chunk_7fsmgfxx.ut)(e, r, { ...o, encoding: o.encoding ?? hna, cwd: n, env: i, extendEnv: false });
}
var E = 21;
function x8(e) {
  return e.owner.includes("/");
}
function c0r() {
  (0, import_chunk_w5s307zm.Ju)().repositoryByCwd.clear(), (0, import_chunk_w5s307zm.Ju)().repositoryDetectionByCwd.clear(), (0, import_chunk_w5s307zm.Ju)().remoteHostByCwd.clear();
}
function ift() {
  let e = (0, import_chunk_18rsj2ts.oa)();
  if (e === null) return;
  if (import_chunk_c203g5kd.s.GIT_DIR || (0, import_chunk_w5s307zm.dr)(e) !== null) gT(e);
}
async function u0r() {
  let e = await gT();
  if (!e) return null;
  if (!(0, import_chunk_43nz5n02.Ro)(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function ZJe() {
  return import_chunk_w5s307zm.l0s.of((0, import_chunk_f9x2f6cx.N)().host);
}
function f0r(e) {
  ZJe().setGuards(e);
}
async function p0r(e, r, n = import_chunk_7fsmgfxx.ut) {
  if (ZJe().blocked()) return null;
  let i = r ?? (0, import_chunk_w5s307zm.Ht)(), o = (...g) => {
    let a = [...import_chunk_gd77dyw4.Nn, ...g], h = { preserveOutputOnError: false };
    return typeof i === "string" ? n(i, a, { ...h, cwd: e }) : Ext(i(a), h);
  }, u = await o("remote", "get-url", "origin");
  if (u.code === 0 && u.stdout.trim()) return { name: "origin", url: u.stdout.trim() };
  let c = await o("remote"), l = c.code === 0 ? (0, import_chunk_7cfjrnwy.nt)(c.stdout.trim(), `
`).trim() : void 0;
  if (!l) return null;
  let d = await o("remote", "get-url", l), f = d.code === 0 ? d.stdout.trim() : "";
  if (!f) return null;
  return { name: (0, import_chunk_7cfjrnwy.I_)(l), url: f };
}
async function Aqt(e, r) {
  return (await p0r(e, void 0, r))?.url ?? null;
}
async function gna(e) {
  return (await x(e)).url;
}
async function x(e, r = import_chunk_7fsmgfxx.ut) {
  if (ZJe().blocked()) return { url: null, answered: false };
  let { stdout: n, code: i, exitCode: o } = await r((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "remote", "get-url", "--push", "origin"], { cwd: e, preserveOutputOnError: false }), u = i === 0 ? n.trim() || null : null;
  return { url: u, answered: u !== null || o === 2 };
}
async function gT(e, r) {
  let n = e ?? (0, import_chunk_18rsj2ts.pe)();
  if (ZJe().blocked()) return R(n, r);
  if (r?.skipCache) return R(n, r);
  let i = (0, import_chunk_w5s307zm.Ju)().repositoryDetectionByCwd, o = i.get(n);
  if (o !== void 0) return o;
  let u = R(n, r);
  i.set(n, u);
  try {
    return await u;
  } finally {
    if (i.get(n) === u) i.delete(n);
  }
}
async function R(e, r) {
  let n = (0, import_chunk_w5s307zm.Ju)().repositoryByCwd;
  if (!r?.skipCache && n.has(e)) {
    let o = n.get(e) ?? null;
    if (!o || !x8(o)) return o;
  }
  let i = () => {
    let o = n.get(e);
    if (o && x8(o)) n.delete(e);
  };
  try {
    let o = await Aqt(e, r?.run);
    if ((0, import_chunk_w578pjby.t)(`Git remote URL: ${(0, import_chunk_w5s307zm.Axt)(o)}`), !o) return (0, import_chunk_w578pjby.t)("No git remote URL found"), (0, import_chunk_w5s307zm.Ju)().remoteHostByCwd.delete(e), i(), null;
    let u = null, l = ((g) => {
      let a = eE(g);
      if (a && x8(a)) return u ??= a, null;
      return a;
    })(o), d = false;
    if (!l) {
      let { stdout: g, code: a, exitCode: h } = await (r?.run ?? import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "config", "--get", "remote.origin.url"], { cwd: e, preserveOutputOnError: false }), m = a === 0 ? g.trim() : null, C = m !== null || h === 1;
      if (m && m !== o) {
        if (l = eE(m), l && x8(l)) u ??= l, l = null;
      }
      if (!l) {
        let G = await x(e, r?.run), y = G.url;
        if (y && y !== o && y !== m) {
          if (l = eE(y), l && x8(l)) u ??= l, l = null;
        }
        d = C && G.answered;
      }
    }
    l ??= u, (0, import_chunk_w578pjby.t)(`Parsed repository: ${l ? `${l.host}/${l.owner}/${l.name}` : null} from URL: ${(0, import_chunk_w5s307zm.Axt)(o)}`);
    let f = l?.host ?? (0, import_chunk_1m0ck3v8.o1e)(o);
    if (f) (0, import_chunk_w5s307zm.Ju)().remoteHostByCwd.set(e, f);
    else (0, import_chunk_w5s307zm.Ju)().remoteHostByCwd.delete(e);
    if (l) n.set(e, l);
    else if (d) n.delete(e);
    return l;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`Error detecting repository: ${o}`), i(), null;
  }
}
function _na() {
  let e = (0, import_chunk_w5s307zm.Ju)().repositoryByCwd.get((0, import_chunk_18rsj2ts.pe)());
  if (!e || !(0, import_chunk_43nz5n02.Ro)(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function O_n() {
  return (0, import_chunk_w5s307zm.Ju)().repositoryByCwd.get((0, import_chunk_18rsj2ts.pe)())?.host ?? null;
}
function yna(e) {
  if (e1e(e) || /^!\d+$/.test(e)) return true;
  if (/^https?:\/\//i.test(e)) return false;
  let r = O_n();
  return r !== null && (0, import_chunk_1m0ck3v8.AI)(r) === "gitlab";
}
function r0s(e) {
  let n = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(n) ? n : "";
}
var _ = new RegExp(`^(https?://${P_n}(?::\\d{1,5})?/(?:${R8}/)+${R8})/-/merge_requests/\\d`);
function o0s(e) {
  return _.exec(e)?.[1] ?? null;
}
function zqn() {
  return (0, import_chunk_w5s307zm.Ju)().remoteHostByCwd.get((0, import_chunk_18rsj2ts.pe)()) ?? null;
}
function m0r() {
  let e = (0, import_chunk_18rsj2ts.pe)(), r = (0, import_chunk_w5s307zm.Ju)().repositoryByCwd;
  if (!r.has(e)) return;
  let n = r.get(e);
  return !!n && (0, import_chunk_43nz5n02.Ro)(n.host);
}
function eE(e) {
  let r = e.trim();
  if ((0, import_chunk_sah8dzn4._J)(r) || (0, import_chunk_73gwqz1r.Age)(r)) return null;
  let n = r.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (n?.[1] && n[2] && n[3]) {
    if (!w(n[1])) return null;
    if (!p(n[2]) || !p(n[3])) return null;
    return { host: n[1], owner: n[2], name: n[3] };
  }
  let i = r.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (i?.[1] && i[2] && i[3] && i[4]) {
    let o = i[1], u = i[2], c = (0, import_chunk_7cfjrnwy.nt)(u, ":");
    if (!w(c)) return null;
    let l = o === "https" || o === "http" ? u : c;
    if (!p(i[3]) || !p(i[4])) return null;
    return { host: l, owner: i[3], name: i[4] };
  }
  return b(r);
}
function b(e) {
  let r, n, i, o = e.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (o?.[1] && o[2]) n = o[1], i = o[2];
  else {
    let l = e.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/);
    if (!l?.[1] || !l[2] || !l[3]) return null;
    r = l[1], n = l[2], i = l[3];
  }
  let u = (0, import_chunk_7cfjrnwy.nt)(n, ":");
  if (!w(u) || (0, import_chunk_1m0ck3v8.AI)(u) !== "gitlab") return null;
  let c = i.split("/");
  if (c.length < 3 || c.length > E + 1 || !c.every(p)) return null;
  return { host: r === "https" || r === "http" ? n : u, owner: c.slice(0, -1).join("/"), name: c.at(-1) };
}
function p6e(e) {
  let r = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!r?.[1] || !r[2]) return null;
  if (!p(r[1]) || !p(r[2])) return null;
  return { owner: r[1], name: r[2] };
}
function eQe(e) {
  let r = e.trim(), n = eE(r);
  if (n) {
    if (!(0, import_chunk_43nz5n02.Ro)(n.host)) return null;
    return `${n.owner}/${n.name}`;
  }
  if (!r.includes("://") && !r.includes("@") && r.includes("/")) {
    let i = r.split("/");
    if (i.length === 2 && i[0] && i[1]) {
      let o = i[1].replace(/\.git$/, "");
      if (!p(i[0]) || !p(o)) return null;
      return `${i[0]}/${o}`;
    }
  }
  return (0, import_chunk_w578pjby.t)(`Could not parse repository from: ${r}`), null;
}
var T = /^[A-Za-z0-9._-]+$/;
function p(e) {
  return T.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function w(e) {
  if (!/^[A-Za-z0-9.-]+$/.test(e) || e.startsWith("-") || !e.includes(".")) return false;
  let r = e.split(".").pop();
  if (!r) return false;
  return /^[a-zA-Z]+$/.test(r);
}
