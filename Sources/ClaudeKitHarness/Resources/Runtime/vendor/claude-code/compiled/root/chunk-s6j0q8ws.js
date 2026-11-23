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
var chunk_s6j0q8ws_exports = {};
__export(chunk_s6j0q8ws_exports, {
  $ei: () => $ei,
  D9r: () => D9r,
  Fei: () => Fei,
  H9r: () => H9r,
  K3o: () => K3o,
  M9r: () => M9r,
  Nei: () => Nei,
  Uei: () => Uei,
  V3o: () => V3o,
  q3o: () => q3o
});
module.exports = __toCommonJS(chunk_s6j0q8ws_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_47st811y = require("/$bunfs/root/chunk-47st811y.js");
var import_chunk_cnrfn5fr = require("/$bunfs/root/chunk-cnrfn5fr.js");
var import_chunk_x80n00ss = require("/$bunfs/root/chunk-x80n00ss.js");
var import_chunk_dgdc791t = require("/$bunfs/root/chunk-dgdc791t.js");
var import_chunk_jafhv8vw = require("/$bunfs/root/chunk-jafhv8vw.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_path3 = require("path");
var import_promises3 = require("fs/promises");
var import_path4 = require("path");
function et(e, n = import_chunk_47st811y.Xte) {
  if (e.isSymbolicLink()) return "symlink";
  if (!e.isFile()) return "not_regular_file";
  if (e.nlink > 1) return "hard_link";
  if (e.size > n) return "too_large";
  return null;
}
function un(e) {
  return e === "" || e === ".." || e.startsWith(`..${import_path2.sep}`) || (0, import_path2.isAbsolute)(e);
}
async function cn(e, n) {
  let r = Buffer.allocUnsafe(n), o = 0;
  while (o < n) {
    let { bytesRead: s } = await e.read(r, o, n - o, o);
    if (s === 0) break;
    o += s;
  }
  return r.subarray(0, o);
}
async function tt(e, n, r) {
  let o = await cn(e, Number(n.size));
  if (BigInt(o.length) < n.size) return (0, import_chunk_w578pjby.t)(`working file ${r}: ${o.length} of the ${n.size} bytes that its stat promised came, with no error; skipped as changed`), { kind: "skip", skipped: { path: r, reason: "changed" } };
  return { kind: "read", content: o, mode: Number(n.mode) & 511, dev: n.dev, ino: n.ino, mtimeMs: Number(n.mtimeNs) / 1e6, ctimeMs: Number(n.ctimeNs) / 1e6 };
}
async function rt(e, n, r, o = null, s = import_chunk_47st811y.Xte) {
  try {
    if (o !== null) return await fn(o, r, s);
    let l = (0, import_path2.join)(e, r), u = await (0, import_promises2.lstat)(l, { bigint: true }), d = et(u, s);
    if (d !== null) return { kind: "skip", skipped: { path: r, reason: d } };
    if ((0, import_chunk_z6pfqf6e.rp)(l)) return { kind: "skip", skipped: { path: r, reason: "unreadable" } };
    if (un((0, import_path2.relative)(n, await (0, import_promises2.realpath)(l)))) return { kind: "skip", skipped: { path: r, reason: "outside_root" } };
    let c = await (0, import_promises2.open)(l, (0, import_chunk_6mfepmbb.Xu)());
    try {
      let m = await c.stat({ bigint: true });
      if (m.dev !== u.dev || m.ino !== u.ino) return { kind: "skip", skipped: { path: r, reason: "changed" } };
      if (m.size > s) return { kind: "skip", skipped: { path: r, reason: "too_large" } };
      return await tt(c, m, r);
    } finally {
      await c.close();
    }
  } catch (l) {
    let u = (0, import_chunk_jv7av99m.w)(l), d = u === "ELOOP" || u === "EMLINK" || u === "WORKING_PARENT_NOT_DIRECTORY" ? "symlink" : "unreadable";
    return { kind: "skip", skipped: { path: r, reason: d }, ...d === "unreadable" && u !== void 0 && { errnoCode: u } };
  }
}
async function fn(e, n, r) {
  let o = await e.open(n, (0, import_chunk_6mfepmbb.Xu)());
  try {
    let s = await o.stat({ bigint: true }), l = et(s, r);
    if (l !== null) return { kind: "skip", skipped: { path: n, reason: l } };
    return await tt(o, s, n);
  } finally {
    await o.close();
  }
}
var ve = /(^|[\s\][])@(?=((?:[^\s\\]|\\ )+))/g;
function He(e, n = oe, r) {
  let o = e.replace(/\r\n?/g, `
`), s = r === void 0 ? n : (u) => {
    let d = n(u);
    if (!d) r.push(u);
    return d;
  }, l = at(o, (0, import_chunk_bzyb60p0.L_t)(o), lt, s);
  return Ee(l, n) ? te(l) : l;
}
var oe = () => false;
function mn(e, n) {
  if (e.type === "code" || e.type === "codespan" || e.type === "escape") return e.raw;
  if (e.type === "html") return pn(e.raw, n);
  let r = [...e.tokens ?? [], ...e.items ?? []];
  if (r.length === 0) return e.type === "text" ? ot(e.raw, n) : e.raw;
  let o = at(e.raw, r, (s) => s, n);
  return e.type === "text" ? ot(o, n) : o;
}
function at(e, n, r, o) {
  let s = "", l = 0;
  for (let u of n) {
    let d = e.indexOf(u.raw, l);
    if (d === -1) return s + lt(e.slice(l));
    s += r(e.slice(l, d)) + mn(u, o), l = d + u.raw.length;
  }
  return s + r(e.slice(l));
}
function ot(e, n) {
  return e.replace(ve, (r, o, s) => n(me(s)) ? r : `${o}\\@`);
}
function me(e) {
  return (0, import_chunk_7cfjrnwy.nt)(e, "#").replaceAll("\\ ", " ");
}
function pn(e, n) {
  let r = e.trimStart();
  if (!(r.startsWith("<!--") && r.includes("-->"))) return e;
  let o = [], s = "", l = 0;
  for (let d of e.matchAll(/<!--[\s\S]*?-->/g)) o.push({ rawStart: l, residueStart: s.length }), s += e.slice(l, d.index), l = d.index + d[0].length;
  return o.push({ rawStart: l, residueStart: s.length }), s += e.slice(l), [...s.matchAll(ve)].filter((d) => !n(me(d[2] ?? ""))).map((d) => {
    let c = d.index + (d[1] ?? "").length, { rawStart: m, residueStart: p } = o.findLast((y) => y.residueStart <= c) ?? { rawStart: 0, residueStart: 0 };
    return m + (c - p);
  }).reduceRight((d, c) => `${d.slice(0, c)}\\${d.slice(c)}`, e);
}
function lt(e) {
  let n = null;
  return e.split(`
`).map((r) => {
    let o = /^[\s>]*(`{3,}|~{3,})/.exec(r)?.[1] ?? null;
    if (n === null) {
      if (o === null) return gn(r);
      return n = o, r;
    }
    if (o !== null && o[0] === n[0] && o.length >= n.length && /^[\s>]*[`~]+\s*$/.test(r)) n = null;
    return r;
  }).join(`
`);
}
function gn(e) {
  return e.replace(/@/g, (n, r) => Pe(e, r) || /[\p{L}\p{N}]/u.test(e[r - 1] ?? "") ? n : "\\@");
}
function ut(e) {
  return Object.keys((0, import_chunk_bzyb60p0.L_t)(e).links).length > 0;
}
function te(e) {
  return e.replace(/@/g, (n, r) => Pe(e, r) ? n : "\\@");
}
function Pe(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r % 2 === 1;
}
var we = { vettable: false };
function Le(e, n) {
  let r = (0, import_chunk_bzyb60p0.L_t)(n), s = [...(0, import_chunk_4smdap7r.M)((0, import_chunk_4smdap7r.M)([n, e]).flatMap((u) => [u, u.replace(/\\([[\]])/g, "$1")])).map((u) => it(u, "as_loader")), ...hn(r).map((u) => it(u, "every_at"))], l = (0, import_chunk_4smdap7r.M)([...ct(r), ...s.flatMap((u) => u.vettable ? u.spellings : [])]);
  return s.every((u) => u.vettable) && l.length <= Sn ? { vettable: true, spellings: l } : we;
}
function hn(e) {
  let n = (r) => r.flatMap((o) => {
    if (o.type === "code" || o.type === "codespan") return [];
    if (o.type === "html") {
      let s = o.raw.trimStart();
      return s.startsWith("<!--") && s.includes("-->") ? [o.raw.replace(/<!--[\s\S]*?-->/g, "")] : [];
    }
    return n([...o.tokens ?? [], ...o.items ?? []]);
  });
  return n(e);
}
var dt = 4096, yn = 64, Sn = 4096, kn = 1048576, bn = /@(?!@)(?=[^\s\\]|\\ )/g, wn = new RegExp(String.raw`(?:[^\s\\]|\\ ){1,${dt + 1}}`, "y"), Re = /[\p{L}\p{N}]/u, Rn = /[*_[\]!<`]/g;
function it(e, n) {
  let r = [], o = 0, s = new RegExp(wn);
  for (let l of e.matchAll(bn)) {
    if (n === "as_loader" && (Re.test(e[l.index - 1] ?? "") || Pe(e, l.index))) continue;
    s.lastIndex = l.index + 1;
    let u = s.exec(e)?.[0] ?? "";
    if (o += u.length, u.length > dt || o > kn) return we;
    let d = vn(u);
    if (d.length > yn) return we;
    r.push({ run: u, closers: d });
  }
  return { vettable: true, spellings: r.flatMap(({ run: l, closers: u }) => (0, import_chunk_4smdap7r.M)([l, ...u.map((d) => l.slice(0, d))]).flatMap((d) => {
    let c = me(d);
    return c === "" || c.startsWith("@") ? [] : [c];
  })) };
}
function vn(e) {
  return [...e.matchAll(Rn)].filter((n) => n.index > 0 && !Hn(e, n)).map((n) => n.index);
}
function Hn(e, n) {
  return n[0] === "_" && Re.test(e[n.index - 1] ?? "") && Re.test(e[n.index + 1] ?? "");
}
function Ee(e, n = oe) {
  return Ie(e).some((r) => !n(r));
}
function Ie(e) {
  return ct((0, import_chunk_bzyb60p0.L_t)(e));
}
function ct(e) {
  let n = (r) => r.flatMap((o) => {
    if (o.type === "code" || o.type === "codespan") return [];
    if (o.type === "html") {
      let s = o.raw.trimStart();
      return s.startsWith("<!--") && s.includes("-->") ? st(o.raw.replace(/<!--[\s\S]*?-->/g, "")) : [];
    }
    return [...o.type === "text" ? st(o.text ?? o.raw) : [], ...n([...o.tokens ?? [], ...o.items ?? []])];
  });
  return n(e);
}
function st(e) {
  return [...e.matchAll(ve)].flatMap((n) => {
    let r = me(n[2] ?? "");
    return r.startsWith("./") || r.startsWith("~/") || r.startsWith("/") && r !== "/" || !r.startsWith("@") && !/^[#%^&*()]+/.test(r) && /^[a-zA-Z0-9._-]/.test(r) ? [r] : [];
  });
}
function xe(e) {
  let o = (0, import_chunk_bzyb60p0.L_t)(`${e}

<!-- ccr-home-probe -->
`).findLast((s) => s.type !== "space");
  return !(o?.type === "html" && o.raw.trim() === "<!-- ccr-home-probe -->");
}
function ft(e) {
  return `

<!-- inlined import: ${encodeURI(e)} -->

`;
}
var pt = 4096, pe = true;
async function gt(e, n) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return (0, import_chunk_w578pjby.t)("home inventory: memory files not read in a diskless session; nothing is sent"), null;
  let r = { reads: 0 }, o = await Pn(e, r, n);
  if (o === null) return null;
  let s = /* @__PURE__ */ new Map();
  for (let l = o.pop(); l !== void 0; l = o.pop()) {
    let u = `${l.type}\0${(0, import_chunk_2yx6c1y2.ah)(l.path)}`;
    if (s.has(u)) continue;
    if (n?.aborted) return null;
    s.set(u, l);
    let d = await (0, import_chunk_bzyb60p0.Iie)(l.path, l.type, /* @__PURE__ */ new Set(), pe, import_chunk_bzyb60p0.hXo - 2);
    if (r.reads += d.length, r.reads > pt) return null;
    o.push(...d.filter((c) => c.path !== l.path));
  }
  return [...s.values()];
}
async function Pn(e, n, r) {
  let o = (d, c) => () => (0, import_chunk_bzyb60p0.Iie)(d, c, /* @__PURE__ */ new Set(), pe, c === "User" ? 0 : import_chunk_bzyb60p0.hXo - 1), s = (d, c) => async () => [...await (0, import_chunk_bzyb60p0.zUe)({ rulesDir: d, type: c, processedPaths: /* @__PURE__ */ new Set(), includeExternal: pe, conditionalRule: false }), ...await (0, import_chunk_bzyb60p0.zUe)({ rulesDir: d, type: c, processedPaths: /* @__PURE__ */ new Set(), includeExternal: pe, conditionalRule: true })], l = [o((0, import_chunk_865at33z.Ehe)("Managed"), "Managed"), s((0, import_chunk_865at33z.oAt)(), "Managed"), o((0, import_path3.join)(e, import_chunk_cnrfn5fr.dTe), "User"), s((0, import_path3.join)(e, import_chunk_cnrfn5fr.Att), "User")], u = [];
  for (let d of l) {
    if (r?.aborted) return null;
    let c = await d();
    if (n.reads += c.length, n.reads > pt) return null;
    u.push(...c);
  }
  return u;
}
var ie = ".md", Tn = 5e4, vt = import_path.sep === import_path.win32.sep ? import_path.win32 : import_path.posix, In = import_path.sep === import_path.win32.sep ? /[\\/]+/ : /\/+/;
function ce(e, n) {
  return (n === "/" ? e : e.split(n).join("/")).normalize("NFC");
}
function j(e, n = vt) {
  return e === ".." || e.startsWith(`..${n.sep}`) || n.isAbsolute(e);
}
function xn(e, n, r = vt) {
  let o = r.relative(e, n);
  if (r.isAbsolute(o)) return null;
  let s = r.resolve(e, o), l = r.resolve(n);
  return (r === import_path.win32 ? s.toLowerCase() === l.toLowerCase() : s === l) ? o : null;
}
async function G(e) {
  if ((0, import_chunk_z6pfqf6e.rp)(e)) throw Error("realpath would misread a backslash in the path");
  return (0, import_promises.realpath)(e);
}
function ht(e) {
  return (0, import_chunk_z6pfqf6e.rp)(e) ? { resolvedPath: e, isSymlink: false, isCanonical: false } : (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e);
}
var An = 4096;
async function $e(e, n, r, o) {
  let s;
  try {
    s = await G(n);
  } catch {
    return "unresolvable";
  }
  let l = (0, import_path.relative)(e.realConfigHome, s);
  if (l === "" || j(l)) return "outside";
  let u = ce(l, import_path.sep);
  return { realPath: s, nativeRel: l, rel: u, lexicalRel: r ?? u, rawRels: (0, import_chunk_4smdap7r.M)([Ht(l), ...o === null ? [] : [o]]) };
}
async function Mn(e, n) {
  try {
    let r = await G(n);
    return ye(e, r) || !j((0, import_path.relative)(e.realConfigHome, r));
  } catch {
    return true;
  }
}
function ye(e, n) {
  return !j((0, import_path.relative)(n, e.realConfigHome));
}
function Ht(e) {
  return import_path.sep === "/" ? e : e.split(import_path.sep).join("/");
}
function Pt(e, n) {
  let r = [e.configHome, e.realConfigHome].map((o) => (0, import_path.relative)(o, n)).find((o) => o !== "" && !j(o));
  return r === void 0 ? null : { rel: ce(r, import_path.sep), raw: Ht(r) };
}
function Ke(e) {
  let n = (0, import_chunk_fbnv54pa.za)((0, import_chunk_7cfjrnwy.nt)(e, "/"));
  return (0, import_chunk_7cfjrnwy.Cf)(e) && e.includes("/") && (0, import_path.extname)(e).toLowerCase() === ie && !(0, import_chunk_47st811y.aUe)(e) && !Un.test(e) && !import_chunk_bzyb60p0.NZr.has(n) && !n.startsWith("agent-memory") && !Cn(e) && !Lt(e);
}
function Lt(e) {
  let n = (0, import_chunk_fbnv54pa.za)((0, import_chunk_7cfjrnwy.nt)(e, "/"));
  return n === (0, import_chunk_fbnv54pa.za)(import_chunk_cnrfn5fr.Att) || n === (0, import_chunk_fbnv54pa.za)(import_chunk_cnrfn5fr.DDt);
}
function Cn(e) {
  let [n, r] = e.split("/");
  return (0, import_chunk_fbnv54pa.za)(n ?? "") === "skills" && (0, import_chunk_fbnv54pa.za)(r ?? "") === import_chunk_mgntjepj.yX;
}
var Un = /~\d/, Bn = 32;
async function On(e) {
  let n = e, r = /* @__PURE__ */ new Set();
  for (let o = 0; o < Bn; o += 1) {
    if (r.has(n)) return false;
    r.add(n);
    let s;
    try {
      s = await (0, import_promises.readlink)(n);
    } catch (u) {
      return yt(u);
    }
    if (s.includes("\uFFFD")) throw Error("link body is not valid UTF-8");
    let l;
    try {
      l = (0, import_path.resolve)(await G((0, import_path.dirname)(n)), s);
    } catch (u) {
      if ((0, import_chunk_jv7av99m.w)(u) === "ENAMETOOLONG") throw u;
      return yt(u);
    }
    if ($n(s)) throw Error("link body climbs out of a directory it entered");
    if ((0, import_chunk_z6pfqf6e.sa)(s) || (0, import_chunk_w578pjby.g$)(l, { opaqueLinkText: "throw" })) return true;
    try {
      if (!(await (0, import_promises.lstat)(l)).isSymbolicLink()) return false;
    } catch (u) {
      if (!D(u) || (0, import_chunk_jv7av99m.w)(u) === "ENAMETOOLONG" && !Dn(s)) throw u;
      return false;
    }
    n = l;
  }
  throw Error("link chain too long to vet");
}
function yt(e) {
  if (D(e) || (0, import_chunk_jv7av99m.w)(e) === "EINVAL") return true;
  throw e;
}
function D(e) {
  let n = (0, import_chunk_jv7av99m.w)(e);
  return n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "ENAMETOOLONG";
}
function Dn(e) {
  return e.split(/[\\/]/).some((n) => [...n].length > 255);
}
async function Et(e) {
  try {
    return await (0, import_promises.stat)(e), false;
  } catch (n) {
    return D(n);
  }
}
async function Nn(e) {
  try {
    return !(await (0, import_promises.stat)(e)).isDirectory();
  } catch (n) {
    return D(n);
  }
}
function $n(e) {
  let n = false;
  for (let r of e.split(In)) if (r === "..") {
    if (n) return true;
  } else if (r !== "" && r !== ".") n = true;
  return false;
}
var ue = { ok: false, reason: "aborted" };
async function Ft({ configHome: e, isUserSettingsFileSendable: n, readRules: r, createFilter: o, signal: s, aliasDirectories: l = An, settingsToCloud: u = import_chunk_t9k2xeez.R9 }) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { ok: false, reason: "diskless" };
  if (!await u().catch(() => false)) return { ok: false, reason: "flag_off" };
  try {
    if (!n || !r.complete) return Ae({ rulesUnreadable: true });
    if (!(0, import_chunk_xzvhvaa2.rn)("userSettings")) return Ae({ rulesUnreadable: false });
    let d;
    try {
      d = await G(e);
    } catch (v) {
      if (D(v) && await Et(e)) return Ae({ rulesUnreadable: false });
      return { ok: false, reason: "alias_unreadable" };
    }
    let c = { configHome: e, realConfigHome: d, aliasBudget: { left: l }, giveUp: null, topLevelLinks: [] };
    c.topLevelLinks = await jn(c);
    let m = o(e, { realRoot: d, readRules: r }), p = { held: /* @__PURE__ */ new Map() }, y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), L = (0, import_chunk_0pb268nk.xN)() ? { files: [], leftBehind: [] } : await Wn(c);
    if (c.giveUp === null) {
      let v = await gt(e, s);
      if ((0, import_chunk_jafhv8vw.g6)(s)) return ue;
      if (v === null) return { ok: false, reason: "too_many_links" };
      for (let E of v) {
        if ((0, import_chunk_jafhv8vw.g6)(s)) return ue;
        await Ge(c, m, E, P);
      }
    }
    let I = await Vn(c, m, L.files, p, y, k, H, P, s);
    if (I === null) return ue;
    let F = (0, import_chunk_0pb268nk.Lr)("outputStyles") ? { files: [], leftBehind: [] } : await It(c, import_chunk_cnrfn5fr.DDt), h = await Jn(c, m, F.files, p, y, k, P);
    if (c.giveUp !== null) return { ok: false, reason: c.giveUp };
    let g = [...p.held.values()], C = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
    for (let v of [...g.filter((E) => E.kind === "output_style"), ...g.filter((E) => E.kind !== "output_style")]) {
      if ((0, import_chunk_jafhv8vw.g6)(s)) return ue;
      let E = await Zn(c, m, v, P, C, k);
      if (E.entry === null) C.add(v.location.realPath);
      b.set(v, E);
    }
    let R = g.flatMap((v) => b.get(v) ?? []), { kept: A, droppedOverCap: B } = (0, import_chunk_x80n00ss.TNa)(R.flatMap(({ entry: v, foldedIncludes: E }) => v === null ? [] : [{ content: v.content, entry: v, foldedIncludes: E }]).toSorted((v, E) => Kn(v.entry, E.entry))), N = [...H].filter(([v]) => !y.has(v) && !k.has(v)).map(([v, E]) => P.get(v) ?? E), X = [...L.leftBehind, ...I, ...N, ...F.leftBehind, ...h, ...R.flatMap((v) => v.leftBehind), ...B.flatMap(({ entry: v, foldedIncludes: E }) => [{ path: v.path, reason: "over_cap" }, ...E.map((ae) => ({ path: ae, reason: "include_not_sent" }))])], x = A.map(({ entry: v }) => v);
    return { ok: true, inventory: { entries: x, summary: Tt(x, X), leftBehind: X } };
  } catch (d) {
    if ((0, import_chunk_jafhv8vw.g6)(s)) return ue;
    return (0, import_chunk_w578pjby.t)(`home inventory: gave the run up \u2014 ${d instanceof Error ? d.message : String(d)}`), { ok: false, reason: "alias_unreadable" };
  }
}
function Ae({ rulesUnreadable: e }) {
  return { ok: true, inventory: { entries: [], summary: { ...Tt([], []), rulesUnreadable: e }, leftBehind: [] } };
}
function Tt(e, n) {
  return { withheldSensitive: q(n, "sensitive"), withheldReadDenied: q(n, "read_denied"), rulesUnreadable: false, includesNotSent: q(n, "include_not_sent"), symlinksNotSent: q(n, "symlink_not_sent"), notDestinations: q(n, "not_destination"), unreadable: q(n, "unreadable"), overCap: q(n, "over_cap"), undefusable: q(n, "undefusable"), inlinedImports: e.reduce((r, o) => r + o.folded.length, 0), defusedImports: e.reduce((r, o) => r + o.defused, 0) };
}
function q(e, n) {
  return (0, import_chunk_4smdap7r.U)(e, (r) => r.reason === n);
}
var St = { claude_md: 0, rule: 1, output_style: 2 };
function Kn(e, n) {
  return St[e.kind] - St[n.kind] || e.content.length - n.content.length || (e.path < n.path ? -1 : e.path > n.path ? 1 : 0);
}
async function Wn(e) {
  let n = (0, import_path.join)(e.configHome, import_chunk_cnrfn5fr.dTe), r = await At(e, n), o = await It(e, import_chunk_cnrfn5fr.Att);
  if (r === null) return o;
  let s = r.isSymlink ? await fe(e, n) : void 0;
  if (s?.isDirectory() === true && await Mn(e, n)) e.giveUp ??= "alias_unreadable";
  if (s === null || s !== void 0 && !s.isFile()) return { files: o.files, leftBehind: [{ path: import_chunk_cnrfn5fr.dTe, reason: "symlink_not_sent" }, ...o.leftBehind] };
  return { files: [{ path: n, lexicalRel: import_chunk_cnrfn5fr.dTe, rawLexicalRel: import_chunk_cnrfn5fr.dTe, viaSymlink: r.isSymlink, aliasOnly: false }, ...o.files], leftBehind: o.leftBehind };
}
async function It(e, n) {
  let r = (0, import_path.join)(e.configHome, n), o = await At(e, r);
  if (o === null) return { files: [], leftBehind: [] };
  if (o.isSymlink) {
    let s = await fe(e, r);
    if (s === null || !s.isDirectory()) return { files: s !== null && s.isFile() ? [{ path: r, lexicalRel: n, rawLexicalRel: n, viaSymlink: true, aliasOnly: true }] : [], leftBehind: [{ path: n, reason: "symlink_not_sent" }] };
  }
  return Ct(e, r, [n], o.isSymlink, /* @__PURE__ */ new Set());
}
async function jn(e) {
  let n;
  try {
    n = await (0, import_promises.readdir)(e.configHome, { withFileTypes: true });
  } catch (o) {
    if (!D(o)) e.giveUp ??= "alias_unreadable";
    return [];
  }
  let r = [];
  for (let o of n) {
    let s = (0, import_path.join)(e.configHome, o.name), l = await We(e, s, o);
    if (l === null || !l.isSymbolicLink()) continue;
    if (await fe(e, s) === null) continue;
    let u;
    try {
      u = await G(s);
    } catch {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (ye(e, u)) {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    let d = (0, import_path.relative)(e.realConfigHome, u);
    if (!j(d)) r.push({ name: o.name.normalize("NFC"), targetRel: ce(d, import_path.sep) });
  }
  return r;
}
function Gn(e, n) {
  return e.topLevelLinks.flatMap(({ name: r, targetRel: o }) => n === o ? [r] : n.startsWith(`${o}/`) ? [`${r}/${n.slice(o.length + 1)}`] : []);
}
async function At(e, n) {
  try {
    return { isSymlink: (await (0, import_promises.lstat)(n)).isSymbolicLink() };
  } catch (r) {
    if (!D(r)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
async function Ct(e, n, r, o, s) {
  let l = r.join("/").normalize("NFC"), u = { files: [], leftBehind: [{ path: l, reason: "symlink_not_sent" }] }, d;
  try {
    let p = await G(n);
    if (s.has(p)) return { files: await Ue(e, n, r, /* @__PURE__ */ new Set([p])), leftBehind: [] };
    let y = (0, import_path.relative)(e.realConfigHome, p);
    if (ye(e, p)) return e.giveUp ??= "alias_unreadable", u;
    if (j(y)) return u;
    let k = `${ce(y, import_path.sep)}/x.md`;
    if (o && (0, import_chunk_cnrfn5fr.Rtt)(k) === null) return { files: Ke(k) ? await Ue(e, n, r, /* @__PURE__ */ new Set([p])) : [], leftBehind: u.leftBehind };
    s.add(p), d = await (0, import_promises.readdir)(n, { withFileTypes: true });
  } catch (p) {
    if (o || !D(p) || !await Nn(n)) e.giveUp ??= "alias_unreadable";
    return { files: [], leftBehind: [] };
  }
  let c = [], m = [];
  for (let p of d.toSorted(Ut)) {
    let y = (0, import_path.join)(n, p.name), k = [...r, p.name].join("/"), H = k.normalize("NFC"), P = await We(e, y, p);
    if (P === null) continue;
    let L = P.isSymbolicLink(), I = p.name.endsWith(ie), F = L ? await fe(e, y) : P;
    if (F === null) {
      if ((0, import_path.extname)(p.name).toLowerCase() === ie) m.push({ path: H, reason: "symlink_not_sent" });
    } else if (F.isDirectory()) {
      let h = await Ct(e, y, [...r, p.name], o || L, s);
      c.push(...h.files), m.push(...h.leftBehind);
    } else if (F.isFile() && (I || L || o && (0, import_path.extname)(p.name).toLowerCase() === ie)) c.push({ path: y, lexicalRel: H, rawLexicalRel: k, viaSymlink: o || L, aliasOnly: !I });
  }
  return { files: c, leftBehind: m };
}
async function Ue(e, n, r, o) {
  let s;
  try {
    s = await (0, import_promises.readdir)(n, { withFileTypes: true });
  } catch {
    return e.giveUp ??= "alias_unreadable", [];
  }
  let l = [];
  for (let u of s.toSorted(Ut)) {
    let d = (0, import_path.join)(n, u.name), c = [...r, u.name].join("/"), m = await We(e, d, u);
    if (m === null) continue;
    let p = m.isSymbolicLink(), y = p ? await fe(e, d) : m;
    if (y === null) continue;
    if (y.isDirectory()) {
      let k = await zn(e, d, o);
      if (k !== null) l.push(...await Ue(e, d, [...r, u.name], /* @__PURE__ */ new Set([...o, k])));
    } else if (y.isFile() && (p || (0, import_path.extname)(u.name).toLowerCase() === ie)) l.push({ path: d, lexicalRel: c.normalize("NFC"), rawLexicalRel: c, viaSymlink: p, aliasOnly: true });
  }
  return l;
}
async function zn(e, n, r) {
  let o;
  try {
    o = await G(n);
  } catch {
    return e.giveUp ??= "alias_unreadable", null;
  }
  let s = (0, import_path.relative)(e.realConfigHome, o);
  if (ye(e, o)) return e.giveUp ??= "alias_unreadable", null;
  if (r.has(o) || j(s)) return null;
  let l = `${ce(s, import_path.sep)}/x.md`;
  if ((0, import_chunk_cnrfn5fr.Rtt)(l) === null && !Ke(l)) return null;
  if (e.aliasBudget.left <= 0) return e.giveUp ??= "too_many_links", null;
  return e.aliasBudget.left -= 1, o;
}
async function We(e, n, r) {
  if (r.isSymbolicLink() || r.isFile() || r.isDirectory() || r.isFIFO() || r.isSocket() || r.isCharacterDevice() || r.isBlockDevice()) return r;
  try {
    return await (0, import_promises.lstat)(n);
  } catch (o) {
    if (!D(o)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
async function fe(e, n) {
  let r;
  try {
    r = await On(n);
  } catch {
    return e.giveUp ??= "alias_unreadable", null;
  }
  if (r) return null;
  try {
    return await (0, import_promises.stat)(n);
  } catch (o) {
    if (!D(o)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
function Ut(e, n) {
  return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
}
function Z(e, n, r) {
  if (r !== null || !e.has(n)) e.set(n, r);
}
async function Bt(e, n, r, o, s, l) {
  let u = await $e(e, r.path, r.lexicalRel, r.rawLexicalRel);
  if (r.aliasOnly) {
    if (u === "unresolvable") e.giveUp ??= "alias_unreadable";
    else if (u !== "outside") {
      let m = Q(e, n, u, r.lexicalRel);
      if (m !== null) Z(l, u.realPath, m);
    }
    return { kind: "attributed" };
  }
  if (u === "unresolvable") {
    if (r.viaSymlink) e.giveUp ??= "alias_unreadable";
    return Me(r, r.viaSymlink ? "symlink_not_sent" : "unreadable");
  }
  if (u === "outside") return Me(r, "symlink_not_sent");
  let d = r.viaSymlink ? u.rel : r.lexicalRel, c = (0, import_chunk_cnrfn5fr.vXt)(d);
  if (c === null) {
    let m = r.viaSymlink ? Q(e, n, u, r.lexicalRel) : null;
    if (!r.viaSymlink || m !== null) Z(l, u.realPath, m);
    if (s.has(u.realPath)) return { kind: "attributed" };
    return s.add(u.realPath), m === null ? Me(r, r.viaSymlink ? "symlink_not_sent" : "not_destination") : { kind: "refused", left: m };
  }
  if (o.has(u.realPath)) {
    let m = Q(e, n, u, r.lexicalRel);
    if (m !== null) Z(l, u.realPath, m);
    return { kind: "attributed" };
  }
  return { kind: "candidate", candidate: { ...c, location: u, imports: [], styleVia: /* @__PURE__ */ new Map() } };
}
function Me(e, n) {
  return { kind: "refused", left: { path: e.lexicalRel, reason: n } };
}
function je(e, n) {
  let r = (0, import_chunk_cnrfn5fr.Err)(n.destination);
  if (e.held.has(r)) return null;
  return e.held.set(r, n), n;
}
async function Vn(e, n, r, o, s, l, u, d, c) {
  let m = [];
  for (let p of r) {
    if ((0, import_chunk_jafhv8vw.g6)(c)) return null;
    let y = await Bt(e, n, p, s, l, d);
    if (y.kind === "refused") m.push(y.left);
    if (y.kind !== "candidate") continue;
    let { candidate: k } = y, H = p.lexicalRel === import_chunk_cnrfn5fr.dTe ? p.path : k.location.realPath, P = await (0, import_chunk_bzyb60p0.Iie)(H, "User", /* @__PURE__ */ new Set(), true);
    if (P.length === 0) {
      let L = await Be(e, k.location);
      if (L.kind === "read" && L.content.includes(0)) m.push({ path: p.lexicalRel, reason: "unreadable" });
      continue;
    }
    if (je(o, k) === null) {
      for (let L of P) await Ge(e, n, L, d);
      m.push({ path: p.lexicalRel, reason: "not_destination" });
      continue;
    }
    s.add(k.location.realPath), m.push(...await Xn(e, n, k, P, o, s, l, u, d));
  }
  return m;
}
function Ce(e) {
  return e.globs === void 0 ? "" : (0, import_chunk_w578pjby._)(e.globs.toSorted());
}
async function Xn(e, n, r, o, s, l, u, d, c) {
  let m = [], p = o.find((h) => h.parent === void 0), y = o.filter((h) => h !== p), k = /* @__PURE__ */ new Map(), H = (h, g) => ({ candidate: h, isStyle: h.kind === "output_style", withheld: _t(e, n, h.location) !== null || c.get(h.location.realPath) != null, scope: Ce(g) }), P = new Map(p === void 0 ? [] : [[p.path, H(r, p)]]), L = /* @__PURE__ */ new Map(), I = (h, g) => {
    if (!u.has(h)) u.add(h), L.set(h, m.push(g) - 1);
  }, F = (h, g) => {
    let C = L.get(h);
    if (C === void 0) I(h, g);
    else m[C] = g;
  };
  for (let h of o) await Ge(e, n, h, c);
  for (let h of y) {
    let g = P.get(h.parent ?? "");
    if (g === void 0) continue;
    let C = Pt(e, h.path), b = await $e(e, h.path, C?.rel ?? null, C?.raw ?? null);
    if (b === "outside" || b === "unresolvable") {
      I(h.path, { path: C?.rel ?? h.path, reason: "include_not_sent" });
      continue;
    }
    if (l.has(b.realPath) || c.has(b.realPath)) {
      let x = c.get(b.realPath) ?? Q(e, n, b, b.lexicalRel);
      if (x !== null) Z(c, b.realPath, x), F(b.realPath, x);
      continue;
    }
    let R = (0, import_chunk_cnrfn5fr.vXt)(b.rel);
    if (R !== null) {
      let x = je(s, { ...R, location: b, imports: [], styleVia: /* @__PURE__ */ new Map() });
      if (x === null) {
        I(b.realPath, { path: b.lexicalRel, reason: "not_destination" });
        continue;
      }
      if (l.add(b.realPath), x.kind === "output_style") {
        k.set(h.path, b.realPath);
        let v = h.parent === void 0 ? void 0 : k.get(h.parent);
        if (v !== void 0) g.candidate.styleVia.set(b.realPath, v);
        if (!g.withheld && !g.isStyle && g.scope === Ce(h)) g.candidate.imports.push({ location: b, via: v ?? null, asStyle: true });
      }
      P.set(h.path, x.kind === "output_style" ? { ...g, withheld: g.withheld || _t(e, n, x.location) !== null } : H(x, h));
      continue;
    }
    if (g.withheld) continue;
    let A = (0, import_chunk_4smdap7r.M)([b.rel, b.lexicalRel, ...b.rawRels]).every(Ke), B = A ? Q(e, n, b, b.lexicalRel) : null, N = B?.reason ?? null, X = Lt(b.rel) && (0, import_path.extname)(b.rel).toLowerCase() === ie;
    if (B !== null || X) Z(c, b.realPath, B);
    if (!A || N !== null) {
      I(b.realPath, { path: b.lexicalRel, reason: N ?? (X ? "not_destination" : "include_not_sent") });
      continue;
    }
    if (g.isStyle || g.scope !== Ce(h)) {
      d.set(b.realPath, { path: b.lexicalRel, reason: "include_not_sent" });
      continue;
    }
    g.candidate.imports.push({ location: b, via: h.parent === void 0 ? null : k.get(h.parent) ?? null }), k.set(h.path, b.realPath), l.add(b.realPath), P.set(h.path, g);
  }
  return m;
}
async function Ge(e, n, r, o) {
  if ((0, import_chunk_z6pfqf6e.rp)(r.path)) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  let s = (0, import_path.dirname)(ht(r.path).resolvedPath), l = Le(r.content, ee(r.rawContent ?? r.content).body);
  if (!l.vettable) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  for (let u of l.spellings) {
    if (u.includes("\0")) continue;
    let d = (0, import_chunk_n2dbhmj2.xt)(u, s);
    if (((0, import_chunk_z6pfqf6e.$r)(u) || (0, import_chunk_z6pfqf6e.$r)(d)) && j((0, import_path.relative)(e.configHome, d))) continue;
    let c = ht(d);
    if (!c.isCanonical) {
      if (!c.isSymlink && !await qn(d)) e.giveUp ??= "alias_unreadable";
      continue;
    }
    let m = Pt(e, d);
    if (m === null) {
      let k = c.resolvedPath;
      if (o.get(k) != null || j((0, import_path.relative)(e.realConfigHome, k))) continue;
      let H = xn(e.configHome, d);
      if (H === null) {
        e.giveUp ??= "alias_unreadable";
        continue;
      }
      switch ((0, import_chunk_w82axegn.rsn)(d) || (0, import_chunk_w82axegn.rsn)(k) ? "sensitive" : n(H, true)) {
        case "sensitive":
        case "sensitive_tracked":
        case "host_config":
          Z(o, k, { path: u, reason: "sensitive" });
          break;
        case "read_denied":
        case "rules_unreadable":
          Z(o, k, { path: u, reason: "read_denied" });
          break;
        case "content_filter":
        case null:
          break;
      }
      continue;
    }
    let p = await $e(e, d, m.rel, m.raw);
    if (p === "unresolvable") {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (p === "outside" || o.get(p.realPath) != null) continue;
    let y = Q(e, n, p, p.lexicalRel);
    if (y !== null) Z(o, p.realPath, y);
  }
}
async function qn(e) {
  if ((0, import_chunk_z6pfqf6e.$r)(e) && !(0, import_chunk_z6pfqf6e.mc)(e) || (0, import_chunk_z6pfqf6e.Fl)(e)) return true;
  try {
    return await G(e), false;
  } catch (n) {
    return D(n) && await Et(e);
  }
}
async function Jn(e, n, r, o, s, l, u) {
  let d = [];
  for (let c of r) {
    let m = await Bt(e, n, c, s, l, u);
    if (m.kind === "refused") d.push(m.left);
    else if (m.kind === "candidate") if (m.candidate.kind !== "output_style") d.push({ path: c.lexicalRel, reason: "symlink_not_sent" });
    else if (je(o, m.candidate) === null) d.push({ path: c.lexicalRel, reason: "not_destination" });
    else s.add(m.candidate.location.realPath);
  }
  return d;
}
function _t(e, n, r) {
  return Ot(e, n, r)?.reason ?? null;
}
function Q(e, n, r, o) {
  let s = Ot(e, n, r);
  return s === null ? null : { path: s.alias ?? o, reason: s.reason };
}
function Ot(e, n, r) {
  let o = (0, import_chunk_4smdap7r.M)([r.lexicalRel, r.rel, ...r.rawRels]), s = (0, import_chunk_4smdap7r.M)(o.flatMap((d) => Gn(e, d))).filter((d) => !o.includes(d)), l = [...o, ...s];
  if ([...l, ...l.map((d) => (0, import_path.join)(e.configHome, ...d.split("/"))), r.realPath].some((d) => (0, import_chunk_w82axegn.rsn)(d))) return { reason: "sensitive", alias: null };
  for (let d of l) {
    let c = s.includes(d) ? d : null;
    switch (n(d, false)) {
      case "sensitive":
      case "sensitive_tracked":
      case "host_config":
        return { reason: "sensitive", alias: c };
      case "read_denied":
      case "rules_unreadable":
        return { reason: "read_denied", alias: c };
      case "content_filter":
      case null:
        break;
    }
  }
  return null;
}
async function Zn(e, n, r, o, s, l) {
  let u = Q(e, n, r.location, r.destination), d = o.get(r.location.realPath) ?? null;
  if (u !== null) return J(r, u.reason, l, u.path);
  if (d !== null) return J(r, d.reason, l, d.path);
  if (!await bt(e, r.location)) return J(r, "unreadable", l);
  let c = await Be(e, r.location);
  if (c.kind === "skip") return J(r, rr(c.skipped.reason), l);
  if (c.content.length > import_chunk_cnrfn5fr.wMe) return J(r, "over_cap", l);
  let m = c.content.toString("utf8");
  if ((0, import_chunk_p1ewvgeh.xre)(m)) {
    let R = J(r, "credential", l);
    return { ...R, leftBehind: R.leftBehind.map((A) => A.reason === "credential" ? { ...A, ...wt(m, 0) } : A) };
  }
  let p = r.kind === "output_style" ? { content: c.content, defusedPaths: [] } : Qn(r.destination, c.content, r.imports.length > 0), y = [p.content], k = [], H = [], P = p.content.length, L = [], I = r.imports.length > 0 && xe(ee(p.content.toString("utf8")).body), F = new Set(s);
  for (let { location: R, via: A, asStyle: B } of r.imports) {
    let N = (Qt) => {
      if (!B) L.push(Qt);
    }, X = Q(e, n, R, R.lexicalRel);
    if (X !== null || o.has(R.realPath) || F.has(R.realPath) || A !== null && nr(A, F, r.styleVia) || I) {
      if (F.add(R.realPath), !l.has(R.realPath)) l.add(R.realPath), N(X ?? o.get(R.realPath) ?? { path: R.lexicalRel, reason: "include_not_sent" });
      continue;
    }
    let x = await bt(e, R) ? await Be(e, R) : null;
    if (x === null || x.kind === "skip") {
      F.add(R.realPath), N({ path: R.lexicalRel, reason: "include_not_sent" });
      continue;
    }
    let { head: v, body: E } = ee(x.content.toString("utf8"));
    if (xe(E) || ut(E)) {
      F.add(R.realPath), N({ path: R.lexicalRel, reason: "include_not_sent" });
      continue;
    }
    let ae = Buffer.from(ft(R.rel) + He(E));
    if (P + ae.length > import_chunk_cnrfn5fr.wMe) {
      F.add(R.realPath), N({ path: R.lexicalRel, reason: "over_cap" });
      continue;
    }
    if ((0, import_chunk_p1ewvgeh.xre)(E)) {
      F.add(R.realPath), N({ path: R.lexicalRel, reason: "credential", ...wt(E, (0, import_chunk_7cfjrnwy.Mt)(v, `
`)) });
      continue;
    }
    if (y.push(ae), k.push(R.lexicalRel), !B) H.push(R.lexicalRel);
    P += ae.length;
  }
  let h = Buffer.concat(y), g = r.kind !== "output_style" && y.length > 1 && er(p.content, h, r.destination) ? tr(h) : h;
  if (r.kind !== "output_style" && g !== h && he(g, oe)) return J(r, "undefusable", l);
  if (!g.equals(c.content) && (0, import_chunk_p1ewvgeh.xre)(g.toString("utf8"))) {
    let R = J(r, "credential", l), A = new Set(L.map((B) => B.path));
    return { ...R, leftBehind: [...R.leftBehind.filter((B) => !A.has(B.path)), ...L] };
  }
  let C = new Set(k), b = (0, import_chunk_4smdap7r.U)(p.defusedPaths, (R) => !C.has(import_path.posix.normalize(import_path.posix.join(import_path.posix.dirname(r.destination), R)).normalize("NFC")));
  return { entry: { path: r.destination, kind: r.kind, content: g, sha256: (0, import_chunk_ccm69jjy.Je)(g), folded: k, defused: b }, foldedIncludes: H, leftBehind: L };
}
function Qn(e, n, r) {
  let o = (I) => Dt(e, I), s = n.toString("utf8").replace(/\r\n?/g, `
`), l = ee(s), u = l.head, d = u !== "" && s.startsWith("\uFEFF") ? "\uFEFF" : "", c = r && u === "" && /^\uFEFF?---\s*\n/.test(s) ? `
` : "", m = c + d + u, p = l.body, y = [], k = He(p, o, y), H = k === p && c === "" ? { content: n, defusedPaths: [] } : { content: Buffer.from(m + k), defusedPaths: y };
  if (H.content !== n && ee(n.toString("utf8")).head === "" !== (u === "")) return { content: Buffer.from(te(s)), defusedPaths: kt(p, o) };
  if (!he(H.content, o)) return H;
  let P = kt(p, o), L = Buffer.from(m + te(p));
  return he(L, oe) ? { content: Buffer.from(c + te(s)), defusedPaths: P } : { content: L, defusedPaths: P };
}
function kt(e, n) {
  let r = Le(e, e);
  return r.vettable ? r.spellings.filter((o) => !n(o)) : [];
}
function er(e, n, r) {
  let o = (u) => Dt(r, u), s = (u) => Ie(ee(u.toString("utf8")).body), l = s(n);
  return l.some((u) => !o(u)) || (0, import_chunk_4smdap7r.U)(l, o) > (0, import_chunk_4smdap7r.U)(s(e), o);
}
function tr(e) {
  let n = e.toString("utf8"), { head: r, body: o } = ee(n), s = r !== "" && n.startsWith("\uFEFF") ? "\uFEFF" : "", l = Buffer.from(s + r + te(o));
  return he(l, oe) ? Buffer.from(te(n)) : l;
}
function he(e, n) {
  return Ee(ee(e.toString("utf8")).body, n);
}
function ee(e) {
  let n = e.startsWith("\uFEFF") ? e.slice(1) : e, r = import_chunk_p1ewvgeh.VH.exec(n)?.[0];
  return r === void 0 ? { head: "", body: e } : { head: r, body: n.slice(r.length) };
}
function Dt(e, n) {
  if (n.startsWith("/") || n.startsWith("~")) return false;
  let r = import_path.posix.normalize(import_path.posix.join(import_path.posix.dirname(e), n)), o = r.startsWith("../") ? null : (0, import_chunk_cnrfn5fr.Rtt)(r);
  return o === "claude_md" || o === "rule";
}
function nr(e, n, r) {
  let o = /* @__PURE__ */ new Set();
  for (let s = e; s !== void 0 && !o.has(s); s = r.get(s)) {
    if (n.has(s)) return true;
    o.add(s);
  }
  return false;
}
async function bt(e, n) {
  try {
    return await G((0, import_path.join)(e.realConfigHome, n.nativeRel)) === n.realPath;
  } catch {
    return false;
  }
}
function wt(e, n) {
  let r = e.split(`
`), o = r.length > Tn ? -1 : r.findIndex((s) => (0, import_chunk_p1ewvgeh.xre)(s));
  return o === -1 ? {} : { line: n + o + 1 };
}
function J(e, n, r, o = e.destination) {
  let s = [{ realPath: e.location.realPath, row: { path: o, reason: n } }, ...e.imports.filter((u) => !u.asStyle).map(({ location: u }) => ({ realPath: u.realPath, row: { path: u.lexicalRel, reason: "include_not_sent" } }))], l = [];
  for (let { realPath: u, row: d } of s) if (!r.has(u)) r.add(u), l.push(d);
  return { entry: null, foldedIncludes: [], leftBehind: l };
}
function Be(e, n) {
  return rt(e.realConfigHome, e.realConfigHome, n.nativeRel);
}
function rr(e) {
  switch (e) {
    case "symlink":
    case "hard_link":
      return "symlink_not_sent";
    case "too_large":
      return "over_cap";
    case "sensitive":
    case "sensitive_tracked":
    case "host_config":
      return "sensitive";
    case "read_denied":
    case "rules_unreadable":
      return "read_denied";
    case "content_filter":
    case "filtered":
    case "dependency_dir":
    case "outside_root":
    case "changed":
    case "not_regular_file":
    case "lane_path":
    case "over_budget":
    case "left_behind":
    case "unreadable":
    case "upload_failed":
    case "unpushed_only":
    case "ignored":
      return "unreadable";
  }
}
var z = { covers: "all" };
function Se(e) {
  if (!(0, import_chunk_x80n00ss.Gei)(e)) return { covers: "matchers", matchers: [] };
  let n = jt(e);
  if (!Array.isArray(n)) return z;
  let r = [];
  for (let o of n) {
    let s = (0, import_chunk_ma3kja9f.T)(o) ? o.matcher : void 0;
    if (typeof s !== "string") return z;
    if (s.trim() === "" || s === "*" || s === ".*") return z;
    r.push(s);
  }
  return { covers: "matchers", matchers: r };
}
function Wt(e) {
  if (e.covers === "all") return true;
  let n = e.matchers;
  if (n.length === 0) return false;
  return (r) => (0, import_chunk_qebpc5de.vv)(r) ? n.some((o) => {
    let s = (0, import_chunk_rmc00en4.Pus)(o);
    return s === void 0 || s.some((l) => (0, import_chunk_qebpc5de.oft)(r, l));
  }) : n.some((o) => (0, import_chunk_rmc00en4.Ysl)(o, r));
}
function lr(e) {
  let n = e.filter(import_chunk_x80n00ss.Gei);
  if (n.length === 0) return;
  let r = n.map(jt);
  return n.find((s, l) => !Array.isArray(r[l])) ?? { PreToolUse: r.flatMap((s) => Array.isArray(s) ? s : []) };
}
function jt(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && Object.hasOwn(e, "PreToolUse") ? e.PreToolUse : void 0;
}
function Gt(e, n) {
  return e.covers === "all" || n.covers === "all" ? z : { covers: "matchers", matchers: (0, import_chunk_4smdap7r.M)([...e.matchers, ...n.matchers]) };
}
function ur({ sources: e, sourcesIncomplete: n, processGuard: r, plugins: o, repoEnabledPluginKeys: s }) {
  if (n || e.some((d) => !d.read) || o === null || o.errors.length > 0 || o.warnings.some((d) => d.type === "project-scope-suppressed-untrusted") || o.warnings.some((d) => d.type === "plugin-renamed" && (s === void 0 || s.has((0, import_chunk_xcgcdx61.Kt)(d.source)))) || o === null) return z;
  let u = o.enabled.filter((d) => d.scope === "project" || (0, import_chunk_xcgcdx61.is)(d.source) === import_chunk_xcgcdx61.qs || d.scope !== "user" && (s === void 0 || s.has((0, import_chunk_xcgcdx61.Kt)(d.source))));
  if (u.some((d) => d.hooksConfig === void 0 && d.manifest.hooks !== void 0)) return z;
  return [r, ...e.map((d) => d.read ? Se(d.hooks) : z), ...u.map((d) => Se(d.hooksConfig))].reduce(Gt, { covers: "matchers", matchers: [] });
}
function ze(e) {
  return e.some((n) => n.severity !== "warning" || n.path === "hooks" || n.path.startsWith("hooks."));
}
function zt(e, n, r = import_chunk_t9k2xeez.R9) {
  return { sources: import_chunk_xzvhvaa2.Ts, hooksOf: (o) => {
    if (o === "userSettings" || o === "flagSettings") return;
    if (o === "policySettings") return (0, import_chunk_2yx6c1y2._e)(o)?.hooks;
    let s = Xe(o).map(be);
    return lr([...s.map((l) => l?.hooks), (0, import_chunk_2yx6c1y2.vl)(o)?.hooks]);
  }, sourcesIncomplete: () => ze((0, import_chunk_2yx6c1y2._p)().errors) || Ye().some((o) => ze(Yt(o).errors)) || ke.some((o) => !(0, import_chunk_xzvhvaa2.rn)(o)) && cr(), processGuard: () => {
    let o = fr(), s = (n() ?? []).filter((l) => l.hooks.length > 0 && !mr(l.skillRoot, o));
    return Gt(Se((0, import_chunk_f9x2f6cx.I3)()), Se({ PreToolUse: s }));
  }, loadPlugins: async () => {
    if ((await Promise.all(Ye().map(import_chunk_w578pjby.qft))).some(Boolean)) throw Error("an --add-dir settings file names another host");
    let [o, s] = await Promise.all([(0, import_chunk_bzyb60p0.Q$)(e), (0, import_chunk_xzvhvaa2.rn)("projectSettings") ? 0 : dr()]), l = s === 0 ? o : { ...o, warnings: [...o.warnings, { type: "project-scope-suppressed-untrusted", source: `(unlisted)@${import_chunk_xcgcdx61.lh}`, count: s, warning: "project skill directories on disk were not loaded: the project settings source is off for this process" }] }, u = new Set(Ve({ enabledPlugins: { ...(0, import_chunk_zddv3vvj.tZ)(), ...(0, import_chunk_2yx6c1y2._p)().settings?.enabledPlugins ?? {} } })), d = $t().filter((m) => !u.has(m)), c = ke.some((m) => !(0, import_chunk_xzvhvaa2.rn)(m)) ? l.enabled.filter((m) => m.settings?.agent !== void 0) : [];
    return d.length === 0 && c.length === 0 ? l : { ...l, errors: [...l.errors, ...d.map((m) => ({ type: "generic-error", source: m, error: "enabled in a settings file this process did not load" })), ...c.map((m) => ({ type: "generic-error", source: m.source, error: "names a main-thread agent this process did not resolve" }))] };
  }, repoEnabledPluginKeys: () => new Set([...$t(), ...Ve((0, import_chunk_2yx6c1y2._e)("policySettings"))].map(import_chunk_xcgcdx61.Kt)), settingsToCloud: r };
}
async function dr() {
  let e = (0, import_path4.join)((0, import_chunk_f9x2f6cx.us)() ?? (0, import_chunk_f9x2f6cx.Te)(), ".claude", "skills");
  if (e === (0, import_path4.join)((0, import_chunk_2gtmjt3y.Ze)(), "skills")) return 0;
  if (await (0, import_chunk_w578pjby.qft)(e)) return 1;
  return (0, import_promises3.readdir)(e, { withFileTypes: true }).then((n) => (0, import_chunk_4smdap7r.U)(n, (r) => r.isDirectory() || r.isSymbolicLink()), (n) => ["ENOENT", "ENOTDIR"].includes((0, import_chunk_jv7av99m.w)(n) ?? "") ? 0 : 1);
}
function cr() {
  return (0, import_chunk_2yx6c1y2._p)().settings?.agent !== void 0 || ke.flatMap((e) => Xe(e).map(be)).some((e) => e?.agent !== void 0);
}
var ke = import_chunk_xzvhvaa2.Ts.filter((e) => e !== "policySettings" && import_chunk_xzvhvaa2.yp.has(e));
function fr() {
  let e = (0, import_path4.join)((0, import_chunk_2gtmjt3y.Ze)(), "skills");
  return { own: [e, (0, import_path4.join)((0, import_chunk_2gtmjt3y.Ze)(), "commands"), (0, import_chunk_p1ewvgeh.XUn)()], synced: (0, import_path4.join)(e, import_chunk_mgntjepj.yX) };
}
function mr(e, n) {
  return e !== void 0 && !Nt(n.synced, e) && n.own.some((r) => Nt(r, e));
}
function Nt(e, n) {
  let r = (0, import_path4.relative)(e, n);
  return r !== "" && r.split(import_path4.sep)[0] !== ".." && !(0, import_path4.isAbsolute)(r);
}
function Xe(e) {
  return [(0, import_chunk_2yx6c1y2._n)(e), e === "localSettings" ? (0, import_chunk_2yx6c1y2.A_)() : void 0].filter((n) => n !== void 0);
}
function Ye() {
  return (0, import_chunk_zddv3vvj.h0e)().flatMap((e) => ["settings.json", "settings.local.json"].map((n) => (0, import_path4.join)(e, ".claude", n)));
}
function be(e) {
  let { settings: n, errors: r } = Yt(e);
  if (ze(r)) throw Error("a settings file could not be read");
  return n;
}
function Yt(e) {
  if ((0, import_chunk_w578pjby.g$)(e)) throw Error("a settings file names another host");
  return (0, import_chunk_6mfepmbb.cO)(e);
}
function $t() {
  return [...ke.flatMap((n) => Xe(n).map(be)), ...Ye().map(be)].flatMap(Ve);
}
function Ve(e) {
  return Object.entries(e?.enabledPlugins ?? {}).filter(([, n]) => n !== false).map(([n]) => n);
}
async function Vt(e) {
  if (!await Promise.resolve().then(e.settingsToCloud).catch(() => false)) return z;
  let n = e.sources.map((u) => {
    try {
      return { read: true, hooks: e.hooksOf(u) };
    } catch {
      return { read: false };
    }
  }), r;
  try {
    r = e.sourcesIncomplete();
  } catch {
    r = true;
  }
  let o;
  try {
    o = e.processGuard();
  } catch {
    o = z;
  }
  let s;
  try {
    s = await e.loadPlugins();
  } catch {
    s = null;
  }
  let l;
  try {
    l = e.repoEnabledPluginKeys?.();
  } catch {
    l = void 0;
  }
  return ur({ sources: n, sourcesIncomplete: r, processGuard: o, plugins: s, repoEnabledPluginKeys: l });
}
async function Xt() {
  (0, import_chunk_r3mm3x33.pr)();
  let e = (0, import_chunk_2yx6c1y2.QT)("userSettings"), n = (0, import_chunk_2yx6c1y2._e)("userSettings");
  return e.some(gr) || n === null && await hr((0, import_chunk_2yx6c1y2._n)("userSettings")) ? { kind: "broken" } : { kind: "sendable", settings: n ?? {}, hasLostAnAllowEntry: e.some(qt) };
}
function gr(e) {
  return e.severity !== "warning" || e.path === "permissions" || e.path.startsWith("permissions.") && !qt(e);
}
function qt({ path: e }) {
  return e.startsWith("permissions.allow");
}
async function hr(e) {
  try {
    return e !== void 0 && (await (0, import_chunk_w578pjby.le)().lstat(e)).isSymbolicLink();
  } catch {
    return false;
  }
}
var yr = 3, Sr = 0;
async function Nei({ signal: e, storageV5: n, sessionPreToolUse: r = () => {
  return;
}, launchConsent: o, now: s = Date.now, hookGuardHere: l = () => Vt(zt(n, r, (0, import_chunk_bzyb60p0.YZt)(o).enabled)), withRunnerPack: u = false } = {}) {
  let d = (0, import_chunk_bzyb60p0.YZt)(o);
  if (!(0, import_chunk_t9k2xeez.LZ)(d.enabledNow())) return { kind: "none", reason: "flag_off" };
  let c = s(), m = await _r(e, l, o, d, u).catch((p) => {
    if ((0, import_chunk_jv7av99m.Fe)(p) || (0, import_chunk_jafhv8vw.g6)(e)) return { kind: "none", reason: "aborted" };
    return (0, import_chunk_k449cc64.i)(p), { kind: "none", reason: "failed" };
  });
  return Jt(m, s() - c), m;
}
async function _r(e, n, r, o, s) {
  if (!(0, import_chunk_bzyb60p0.grt)(r)) return { kind: "none", reason: "no_consent" };
  if (!(0, import_chunk_xzvhvaa2.Ko)().includes("userSettings")) return { kind: "none", reason: "user_settings_disabled" };
  let l = (0, import_chunk_2gtmjt3y.Ze)(), u = await Xt(), d = u.kind === "sendable" ? u : null, c = (0, import_chunk_bzyb60p0.Tlr)(), [m, p] = await Promise.all([Ft({ configHome: l, isUserSettingsFileSendable: d !== null, readRules: c, createFilter: import_chunk_bzyb60p0.FQo, signal: e, settingsToCloud: o.enabled }), n().catch(() => ({ covers: "all" }))]);
  if ((0, import_chunk_y53wbr8a.a)("tengu_home_seed_hook_guard", { kind: (0, import_chunk_78g0060s.S)(p.covers === "all" ? "all" : p.matchers.length > 0 ? "matchers" : "none"), matcher_count: p.covers === "all" ? 0 : p.matchers.length, allow_entry_lost_at_parse: d?.hasLostAnAllowEntry ?? false }), (0, import_chunk_jafhv8vw.g6)(e) || !m.ok && m.reason === "aborted") return { kind: "none", reason: "aborted" };
  if (!m.ok) return m.reason === "flag_off" ? { kind: "none", reason: "flag_off" } : { kind: "none", reason: "home_unvettable", cause: m.reason === "too_many_links" ? m.reason : "alias_unreadable", configHome: l };
  let y = (0, import_chunk_x80n00ss.N9r)(d?.settings ?? null, { preToolUseHookActiveHere: Wt(p), hasLostAnAllowEntryAtParse: d?.hasLostAnAllowEntry ?? false, settingsToCloud: o.enabledNow });
  return kr({ inventory: m.inventory, settings: y, configHome: l, unreadableSettingsFiles: (c.unreadableSettingsFiles ?? []).map(import_chunk_dgdc791t.TXt), writtenAtMs: Sr, withRunnerPack: s });
}
function kr({ inventory: e, settings: n, configHome: r, unreadableSettingsFiles: o, writtenAtMs: s, withRunnerPack: l = false }) {
  let u = n.document, d = Rr(e, n), c = { summary: d, leftBehind: e.leftBehind, unreadable: e.summary.unreadable, settings: u === null ? n.reason : "sent", configHome: r };
  if (e.summary.rulesUnreadable) return { kind: "empty", reason: "rules_unreadable", unreadableSettingsFiles: o, ...c, settings: u === null ? n.reason : "nothing_to_send" };
  if (e.entries.length === 0 && u === null) return { kind: "empty", reason: "nothing_to_send", ...c };
  let p = { kind: "ready", pack: (0, import_chunk_x80n00ss.EXt)({ generation: 1, writtenAtMs: s, files: e.entries.map((H) => (0, import_chunk_x80n00ss.Bei)(H.path, H.content)), settings: u, summary: d }), description: br(e, u), ...c }, y = l ? e.entries.find((H) => H.kind === "claude_md") : void 0;
  return p;
}
function br(e, n) {
  return { claudeMd: e.entries.some((r) => r.kind === "claude_md"), rules: (0, import_chunk_4smdap7r.U)(e.entries, (r) => r.kind === "rule"), outputStyles: (0, import_chunk_4smdap7r.U)(e.entries, (r) => r.kind === "output_style"), inlinedImports: e.summary.inlinedImports, settingsKeys: n === null ? [] : wr(n), permissionRules: (n?.permissions?.allow?.length ?? 0) + (n?.permissions?.deny?.length ?? 0) + (n?.permissions?.ask?.length ?? 0) };
}
function wr(e) {
  return Object.keys(Zt).filter((n) => e[n] !== void 0);
}
function Rr(e, n) {
  let { counts: r } = n;
  return { withheldSensitive: e.summary.withheldSensitive, withheldReadDenied: e.summary.withheldReadDenied, rulesUnreadable: e.summary.rulesUnreadable, includesNotSent: e.summary.includesNotSent, symlinksNotSent: e.summary.symlinksNotSent, notDestinations: e.summary.notDestinations, overCap: e.summary.overCap, unreadable: e.summary.unreadable, settingsKeysWithheld: r.withheldKeys, credentialTextsWithheld: r.withheldCredentialTexts, rulesCoveringDeviceTools: r.rules.coveringDeviceTools, droppedRules: { rooted: r.rules.droppedRooted, device: r.rules.droppedDevice, invalid: r.rules.droppedInvalid, guarded: r.rules.droppedGuarded, overCap: r.rules.droppedOverCap, credential: r.rules.droppedCredential, credentialRestrictions: r.rules.droppedCredentialRestrictions } };
}
var V3o = { kind: "none", reason: "self_hosted_runner" };
function Fei() {
  Jt(V3o, 0);
}
function Jt(e, n) {
  if (e.kind === "none") {
    (0, import_chunk_y53wbr8a.a)("tengu_home_seed_plan", { outcome: (0, import_chunk_78g0060s.f)(e.reason), cause: e.reason === "home_unvettable" ? (0, import_chunk_78g0060s.f)(e.cause) : void 0, duration_ms: n });
    return;
  }
  let { summary: r } = e, o = q3o(e.leftBehind), s = { settings_keys_withheld: r.settingsKeysWithheld, credential_texts_withheld: r.credentialTextsWithheld, rules_dropped_rooted: r.droppedRules.rooted, rules_dropped_device: r.droppedRules.device, rules_dropped_invalid: r.droppedRules.invalid, rules_dropped_over_cap: r.droppedRules.overCap, rules_dropped_credential: r.droppedRules.credential, restrictions_dropped_credential: r.droppedRules.credentialRestrictions, rules_dropped_guarded: r.droppedRules.guarded, rules_covering_device_tools: r.rulesCoveringDeviceTools, withheld_sensitive: r.withheldSensitive, withheld_read_denied: r.withheldReadDenied, withheld_credential: o.others + (o.claudeMd ? 1 : 0), claude_md_withheld_credential: o.claudeMd, includes_not_sent: r.includesNotSent, symlinks_not_sent: r.symlinksNotSent, claude_md_link_not_sent: e.leftBehind.some((u) => u.reason === "symlink_not_sent" && u.path === import_chunk_cnrfn5fr.dTe), not_destinations: r.notDestinations, over_cap: r.overCap, unreadable: e.unreadable, duration_ms: n };
  if (e.kind === "empty") {
    (0, import_chunk_y53wbr8a.a)("tengu_home_seed_plan", { outcome: (0, import_chunk_78g0060s.f)(e.reason), settings: (0, import_chunk_78g0060s.f)(e.settings), settings_files_in_error: e.reason === "rules_unreadable" ? e.unreadableSettingsFiles.length : void 0, ...s });
    return;
  }
  let { description: l } = e;
  (0, import_chunk_y53wbr8a.a)("tengu_home_seed_plan", { outcome: (0, import_chunk_78g0060s.S)("ready"), settings: (0, import_chunk_78g0060s.f)(e.settings), files: l.rules + l.outputStyles + (l.claudeMd ? 1 : 0), pack_bytes: e.pack.length, settings_keys: l.settingsKeys.length, rules_kept: l.permissionRules, includes_inlined: l.inlinedImports, ...s });
}
var Zt = { language: "language", outputStyle: "output style", attribution: "attribution", includeCoAuthoredBy: "co-author preference", includeGitInstructions: "git-instructions preference", alwaysThinkingEnabled: "thinking preference", showThinkingSummaries: "thinking-summary preference", permissions: "permission rules" };
function $ei(e) {
  let n = [...e.claudeMd ? ["CLAUDE.md"] : [], ...qe(e.rules, "rules file"), ...qe(e.outputStyles, "output-style file"), ...qe(e.permissionRules, "permission rule"), ...e.settingsKeys.flatMap((r) => r === "permissions" ? [] : [Zt[r]]), ...e.inlinedImports > 0 ? [`${e.inlinedImports} @${(0, import_chunk_7cfjrnwy.O)(e.inlinedImports, "import")} folded in`] : []];
  return n.length === 0 ? "Sent settings from this machine to the cloud session: only the narrowed permission allow list" : `Sent settings from this machine to the cloud session: ${n.join(", ")}`;
}
function qe(e, n) {
  return e > 0 ? [`${e} ${(0, import_chunk_7cfjrnwy.O)(e, n)}`] : [];
}
var M9r = "Your deny and ask rules are not in force in the cloud session", H9r = "The cloud session's settings stay as they were", D9r = "Your deny and ask rules may not be in force in the cloud session";
function K3o({ summary: e, leftBehind: n, unreadable: r, settings: o, configHome: s }, { launch: l, settingsFile: u }) {
  let d = (0, import_chunk_n2dbhmj2.os)(s), c = [V(n, "symlink_not_sent", e.symlinksNotSent, (g) => `${g} linked ${(0, import_chunk_7cfjrnwy.O)(g, "file")} (links are not followed)`), V(n, "include_not_sent", e.includesNotSent, (g) => `${g} @${(0, import_chunk_7cfjrnwy.O)(g, "import")} outside ${d} or not markdown`), V(n, "sensitive", e.withheldSensitive, (g) => `${g} ${(0, import_chunk_7cfjrnwy.O)(g, "file")} named like credentials`), V(n, "read_denied", e.withheldReadDenied, (g) => `${g} ${(0, import_chunk_7cfjrnwy.O)(g, "file")} your Read rules or sandbox settings cover`), V(n, "not_destination", e.notDestinations, (g) => `${g} ${(0, import_chunk_7cfjrnwy.O)(g, "file")} with ${(0, import_chunk_7cfjrnwy.O)(g, "a name", "names")} the cloud session cannot create`), V(n, "over_cap", e.overCap, (g) => `${g} ${(0, import_chunk_7cfjrnwy.O)(g, "file")} over a limit of ${import_chunk_cnrfn5fr.HDt} files, ${(0, import_chunk_7e12xj51.dn)(import_chunk_cnrfn5fr.wMe)} per file or ${(0, import_chunk_7e12xj51.dn)(import_chunk_cnrfn5fr.krr)} in total`), V(n, "unreadable", r, (g) => `${g} ${(0, import_chunk_7cfjrnwy.O)(g, "file")} that changed while being read`), V(n, "undefusable", (0, import_chunk_4smdap7r.U)(n, (g) => g.reason === "undefusable"), (g) => `${g} ${(0, import_chunk_7cfjrnwy.O)(g, "file")} whose @imports could not be made safe`), V(n, "credential", (0, import_chunk_4smdap7r.U)(n, (g) => g.reason === "credential"), (g) => `${g} ${(0, import_chunk_7cfjrnwy.O)(g, "file")} ${Qe(g)}`)].flatMap((g) => g === null ? [] : [g]), m = e.droppedRules.rooted + e.droppedRules.device + e.droppedRules.invalid + e.droppedRules.overCap, p = e.droppedRules.credentialRestrictions, y = e.droppedRules.credential - p, k = e.credentialTextsWithheld, H = e.droppedRules.guarded, P = o === "schema_rejected" ? "failed validation" : o === "settings_too_large" ? "is over the size limit" : o === "settings_unreadable" ? "could not be read" : null, L = [...e.settingsKeysWithheld > 0 ? [`${e.settingsKeysWithheld} ${(0, import_chunk_7cfjrnwy.O)(e.settingsKeysWithheld, "key")} (hooks, env and the like are never sent)`] : [], ...m > 0 ? [`${m} permission ${(0, import_chunk_7cfjrnwy.O)(m, "rule")} that ${(0, import_chunk_7cfjrnwy.O)(m, "names", "name")} a path or device tool on this machine or could not be read`] : [], ...y > 0 ? [`${y} allow ${(0, import_chunk_7cfjrnwy.O)(y, "rule")} ${Qe(y)}`] : [], ...k > 0 ? [`${k} ${(0, import_chunk_7cfjrnwy.O)(k, "text")} (attribution, language, output style) ${Qe(k)}`] : [], ...H > 0 ? [`${H} allow ${(0, import_chunk_7cfjrnwy.O)(H, "rule")} that stayed because a hook, a plugin or a rule that was not sent may guard ${(0, import_chunk_7cfjrnwy.O)(H, "it", "them")}`] : []], I = c.length > 0 ? [`Not sent from ${d}: ${c.join("; ")}`] : [];
  if (P !== null) return [l === "reopen_sent_nothing" ? `${H9r}: ${u} ${P}` : `${M9r}: ${u} ${P}; ${o === "settings_too_large" ? "make it smaller" : "fix it"} and ${l === "reopen_sent" ? "re-open the session" : "start a new cloud session"}`, ...I].join(". ");
  let F = L.length > 0 ? [`Settings kept on this machine: ${L.join("; ")}`] : [], h = p > 0 ? [`${p} deny or ask ${(0, import_chunk_7cfjrnwy.O)(p, "rule is", "rules are")} not in force in the cloud session: ${(0, import_chunk_7cfjrnwy.O)(p, "it looks like it holds", "they look like they hold")} a credential (reword ${(0, import_chunk_7cfjrnwy.O)(p, "it", "them")} in ${u})`, ...F, ...I] : [...I, ...F];
  return h.length === 0 ? null : h.join(". ");
}
function q3o(e) {
  let n = e.filter((r) => r.reason === "credential").map((r) => r.path);
  return { claudeMd: n.includes(import_chunk_cnrfn5fr.dTe), others: (0, import_chunk_4smdap7r.U)(n, (r) => r !== import_chunk_cnrfn5fr.dTe) };
}
function Uei(e) {
  let n = e.filter((o) => o.reason === "symlink_not_sent").map((o) => o.path), r = [...n.filter((o) => o === import_chunk_cnrfn5fr.dTe), ...n.filter((o) => o !== import_chunk_cnrfn5fr.dTe)].slice(0, 2).map((o) => o === import_chunk_cnrfn5fr.Att || o === import_chunk_cnrfn5fr.DDt ? `${o}/` : (0, import_chunk_kx2fp6pc.Yn)(o));
  return { names: r, more: n.length - r.length };
}
function Qe(e) {
  return `that ${(0, import_chunk_7cfjrnwy.O)(e, "looks", "look")} like ${(0, import_chunk_7cfjrnwy.O)(e, "it holds", "they hold")} a credential`;
}
function V(e, n, r, o) {
  if (r === 0) return null;
  let s = e.filter((c) => c.reason === n).map((c) => (0, import_chunk_kx2fp6pc.Yn)(c.path) + (c.line === void 0 ? "" : `:${c.line}`)), l = s.slice(0, yr), u = s.length - l.length, d = l.length === 0 ? "" : ` (${l.join(", ")}${u > 0 ? ` and ${u} more` : ""})`;
  return o(r) + d;
}
