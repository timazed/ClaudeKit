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
var chunk_z6pfqf6e_exports = {};
__export(chunk_z6pfqf6e_exports, {
  $r: () => $r,
  $w: () => $w,
  A2: () => A2,
  Ah: () => Ah,
  Ajl: () => Ajl,
  Apt: () => Apt,
  BE: () => BE,
  BQe: () => BQe,
  C$: () => C$,
  C2: () => C2,
  Cjl: () => Cjl,
  Cpt: () => Cpt,
  DFs: () => DFs,
  Dce: () => Dce,
  EF: () => EF,
  EFr: () => EFr,
  Ejl: () => Ejl,
  Fl: () => Fl,
  H1e: () => H1e,
  HFs: () => HFs,
  HPt: () => HPt,
  ID: () => ID,
  IFs: () => IFs,
  Ica: () => Ica,
  JLo: () => JLo,
  JOe: () => JOe,
  Jyn: () => Jyn,
  KS: () => KS,
  LFs: () => LFs,
  Lce: () => Lce,
  MFs: () => MFs,
  MPt: () => MPt,
  Mca: () => Mca,
  OFs: () => OFs,
  Oca: () => Oca,
  PFs: () => PFs,
  Pca: () => Pca,
  Pp: () => Pp,
  Q3n: () => Q3n,
  QLo: () => QLo,
  RL: () => RL,
  Rpt: () => Rpt,
  S3t: () => S3t,
  SFr: () => SFr,
  Sjl: () => Sjl,
  T$: () => T$,
  TF: () => TF,
  TJ: () => TJ,
  Tjl: () => Tjl,
  Tpt: () => Tpt,
  Vge: () => Vge,
  WQe: () => WQe,
  XB: () => XB,
  XOe: () => XOe,
  YB: () => YB,
  Ya: () => Ya,
  Z3n: () => Z3n,
  Z8: () => Z8,
  ZLo: () => ZLo,
  _P: () => _P,
  _Ve: () => _Ve,
  _jl: () => _jl,
  aNo: () => aNo,
  ad: () => ad,
  b3t: () => b3t,
  bFr: () => bFr,
  bO: () => bO,
  bjl: () => bjl,
  dx: () => dx,
  e5n: () => e5n,
  eNo: () => eNo,
  eR: () => eR,
  eY: () => eY,
  fa: () => fa,
  gjl: () => gjl,
  iNo: () => iNo,
  ja: () => ja,
  kFr: () => kFr,
  kjl: () => kjl,
  lA: () => lA,
  lNo: () => lNo,
  lx: () => lx,
  mc: () => mc,
  nNo: () => nNo,
  nve: () => nve,
  oNo: () => oNo,
  pg: () => pg,
  pn: () => pn,
  rNo: () => rNo,
  rp: () => rp,
  sNo: () => sNo,
  sa: () => sa,
  tNo: () => tNo,
  tR: () => tR,
  tY: () => tY,
  uC: () => uC,
  vF: () => vF,
  vFr: () => vFr,
  vJ: () => vJ,
  vd: () => vd,
  vjl: () => vjl,
  wFr: () => wFr,
  wO: () => wO,
  wjl: () => wjl,
  xv: () => xv,
  y3t: () => y3t,
  yFr: () => yFr,
  yP: () => yP,
  yjl: () => yjl,
  zh: () => zh,
  zz: () => zz
});
module.exports = __toCommonJS(chunk_z6pfqf6e_exports);
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var nt = __toESM(require("path"));
var Tpt = /[.\s]+$/, Pca = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i, y3t = /~\d/;
function lx(t) {
  let n = t.indexOf("."), e = n === -1 ? t.length : n;
  while (e > 0 && t.charCodeAt(e - 1) === 32) e--;
  return /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/i.test(t.slice(0, e));
}
function gjl(t) {
  let n = t.length;
  for (let r of [".", ":"]) {
    let o = t.indexOf(r);
    if (o !== -1 && o < n) n = o;
  }
  let e = t.slice(0, n);
  return lx(e) || /^con(?:in|out)\$ *$/i.test(e);
}
function JLo(t) {
  return Tpt.test(t) || Pca.test(t);
}
function yFr(t) {
  return /^(?=[^.]{3,8}(?:\.|$))[^.]{1,6}~[0-9]{1,6}(?:\.[^.]{1,3})?$/.test(t);
}
function QLo(t) {
  return yFr(t.replace(/\u0307/g, ""));
}
function S3t(t) {
  return Array.from(t, (n) => {
    let e = n.toUpperCase();
    return [...e].length === 1 ? e : n;
  }).join("").toLowerCase();
}
function Jyn(t) {
  let n = S3t(t);
  return n === "users" || n === "documents and settings" || n === "dokumente und einstellungen" || /^do[ck]ume~[0-9]+$/.test(n);
}
function Pt(t) {
  if (t.length < 3 || !Jyn(t[0])) return;
  let n = Dt.get(t[2]) ?? Ct.find(([e]) => e.test(t[2]))?.[1];
  return n === void 0 ? void 0 : [...t.slice(0, 2), ...n, ...t.slice(3)];
}
function ZLo(t) {
  return S3t(t).split("/").filter(Boolean);
}
function PFs(t) {
  let n = ZLo(t), e = Pt(n);
  return e === void 0 ? [n] : [n, e];
}
function eNo(t, n) {
  let e = PFs(n);
  return PFs(t).flatMap((r) => e.flatMap((o) => r.length <= o.length && r.every((i, s) => It(s, i, o[s])) ? [o.slice(r.length)] : []));
}
var Dt = /* @__PURE__ */ new Map([["my documents", ["documents"]], ["application data", ["appdata", "roaming"]], ["local settings", ["appdata", "local"]]]), Ct = [[/^mydocu~[0-9]+$/, ["documents"]], [/^applic~[0-9]+$/, ["appdata", "roaming"]], [/^locals~[0-9]+$/, ["appdata", "local"]]];
function It(t, n, e) {
  return OFs(n, e) || t === 0 && Jyn(n) && Jyn(e);
}
function OFs(t, n) {
  return t === n || QLo(t) || QLo(n);
}
function tNo(t) {
  let n = t.replace(/(?!^)[\\/]+/g, "\\").replace(/^[\\/]\?\?(?=[\\/])/, "\\\\?").replace(/^[\\/]{2}[?.][\\/]UNC(?=[\\/])/i, "\\");
  return t.startsWith("\\\\?\\") ? n : n.replace(/^([\\/]{2}[?.][\\/][a-z]:)[. ]+(?=[\\/]|$)/i, "$1");
}
var Oca = /^[\\/]{2}(?:wsl\.localhost|wsl\$)[\\/][^\\/]+[\\/]mnt[\\/]([a-z])(?=$|[\\/])/i, $t = /^[\\/]{2}[^\\/]+[\\/]([a-z])\$[. ]*(?=$|[\\/])/i;
function _jl(t) {
  if (!/^[\\/](?:[\\/]|\?\?[\\/])/.test(t)) return t;
  let n = tNo(t), e = $t.exec(n) ?? Oca.exec(n);
  if (e === null) return BQe(n);
  let r = n.slice(e[0].length);
  return `${e[1]}:${r === "" ? "\\" : r}`;
}
var Wt = 32767;
function yjl(t) {
  if (t.length > Wt) return "named";
  if (/^[\\/](?![\\/]|\?\?[\\/])/.test(t)) return "current";
  return /^[\\/]{2}(?:[?.][\\/](?!(?:[a-z]:[. ]*|UNC)(?:[\\/]|$))|;)/i.test(t) || /^(?!\\\\\?\\)[\\/]{2}[?.][\\/].*[\\/]\.\.[. ]*(?:[\\/]|$)/s.test(t) ? "unknown" : "named";
}
function Sjl(t, n, e, r, o) {
  return (o === "unknown" ? [...t.keys()] : [0]).filter((i) => n.every((s, u) => t[u + i] === s || o !== "named" && u === 0 && /^[a-z]$/.test(s) || u < n.length - 1 && OFs(t[u + i] ?? "", s) || s === e && r?.test(t[u + i] ?? "") === true)).map((i) => n.length + i);
}
function BQe(t) {
  let n = /^[\\/]{2}(?:[?.][\\/]([A-Za-z]):|(?:localhost|127\.0\.0\.1)[\\/]([A-Za-z])\$)(?=$|[\\/])/i.exec(t);
  if (n === null) return t;
  let e = t.slice(n[0].length);
  return `${n[1] ?? n[2]}:${e === "" ? "\\" : e}`;
}
function pn(t) {
  return t.normalize("NFC");
}
function $r(t) {
  return /^[\\/]{2}/.test(t) || C$(t);
}
function pg(t) {
  return /(^|[\\/])\.\.([\\/]|$)/.test(t);
}
function rp(t) {
  return t.includes("\\");
}
function nNo() {
  return rp(import_chunk_h3s25p5k.qge ?? "");
}
function xv(t) {
  return /^[\\/]\?\?[\\/]/.test(t);
}
function RL(t) {
  if (/^[\\/]{2}[?.][\\/](?!unc[\\/])/i.test(t)) return null;
  return t.match(/^[\\/]{2}(?:[?.][\\/]unc[\\/])?([^\\/]+)/i)?.[1]?.replace(/[A-Z]/g, (n) => n.toLowerCase()) ?? null;
}
function ad(t) {
  return /(^|[\\/])\.{1,2}[. ]*([\\/]|$)/.test(t);
}
function Cpt(t) {
  return t.split(/[/\\]/).some((n) => /^\.\. [ .]*$/.test(n));
}
function rNo(t, n = "darwin") {
  return n === "win32" ? /(^|[\\/])\.{1,2}([\\/]|$)/.test(t) : /(^|\/)\.{1,2}(\/|$)/.test(t);
}
function YB(t) {
  return rNo(t);
}
function bO(t) {
  return /^[\\/]{2}[?.][\\/]/.test(t);
}
function $w(t) {
  if (!/\/\.(?:vol|file|nofollow|resolve)(?:\/|$)/i.test(t)) return false;
  if (!t.startsWith("/")) return false;
  let n = [];
  for (let e of t.split("/")) {
    if (e === "" || e === ".") continue;
    if (e === "..") {
      n.pop();
      continue;
    }
    if (n.push(e), n.length === 1 && /^\.(?:vol|file|nofollow|resolve)$/i.test(e)) return true;
  }
  return false;
}
function IFs(t) {
  return /^[\\/](GLOBAL\?\?|GLOBALROOT|DosDevices|Device)[\\/]/i.test(t);
}
function Dce(t, n) {
  if (!$r(t)) return false;
  if (bO(t) || C$(t)) return true;
  if (ad(t)) return true;
  let e = RL(t);
  return e === null || e !== RL(n);
}
function O(t) {
  return t.length === 2 && lA(t[0]) === "net" || t.length === 3 && lA(t[0]) === "network" && lA(t[1]) === "servers";
}
function vJ(t) {
  if (!t.startsWith("/")) return null;
  let n = [];
  for (let e of t.split("/")) {
    if (e === "" || e === ".") continue;
    if (e === "..") {
      n.pop();
      continue;
    }
    if (n.push(e), O(n)) return N(e);
  }
  return null;
}
function N(t) {
  return t.replace(/[A-Z]/g, (n) => n.toLowerCase());
}
function lA(t) {
  return t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase();
}
function SFr(t, n = "darwin") {
  let e = t.split("/");
  if (e[0] !== "") return t;
  let r, o;
  if (n === "darwin" ? O(e.slice(1, 3)) : e[1] === "net" && e.length >= 3) r = "/net/", o = 2;
  else if (n === "darwin" && O(e.slice(1, 4))) r = "/Network/Servers/", o = 3;
  else return t;
  let i = e[o];
  if (i === void 0 || i === "") return t;
  let s = e.slice(o + 1);
  return r + N(i).replace(/\.$/, "") + (s.length > 0 ? "/" + s.join("/") : "");
}
function oNo(t) {
  let n = /^([\\/]{2,})([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.(?=[\\/]|$)/.exec(t);
  if (n === null || n[2].toLowerCase() === "wsl.localhost") return t;
  return n[1][0].repeat(2) + n[2] + t.slice(n[1].length + n[2].length + 1);
}
function zz(t, n) {
  if ($w(t)) return true;
  if (Fl(t)) {
    let e = vJ(t);
    if (e === null || e !== vJ(n)) return true;
  }
  return MFs(t, n);
}
function fa(t, n) {
  let e = (0, import_path.resolve)(n, t);
  if (Dce(t, n) || Dce(e, n)) return true;
  let r = vJ(n);
  for (let o of [t, e]) {
    if (Fl(o)) {
      let i = vJ(o);
      if (i === null || i !== r) return true;
    }
    if (EF(o) || dx(o) || $w(o) || MFs(o, n)) return true;
  }
  return false;
}
function MFs(t, n, e = "darwin", r = e === "darwin" && bt()) {
  if (e !== "darwin" || !XB(t, e, r)) return false;
  let o = et(n, e, r).complete[0] ?? null, { complete: i, partial: s } = et(t, e, r);
  if (i.length === 0 && s.length === 0) return true;
  if (o === null) return true;
  return i.some((u) => u !== o) || s.some((u) => !o.startsWith(u));
}
var G = (0, import_chunk_t57w17k7.de)({ value: void 0 }, (t) => {
  t.value = void 0;
});
function bt(t = at) {
  let n = t === at;
  if (n && G.value !== void 0) return G.value;
  let e;
  try {
    let r = false;
    try {
      r = t.readAutoMaster().split(`
`).some((o) => {
        let i = o.replace(/#.*$/, "").trim().split(/\s+/);
        return i.length >= 2 && i[0].toLowerCase() === "/home";
      });
    } catch (o) {
      if (!(0, import_chunk_jv7av99m.J)(o)) throw o;
    }
    e = r || t.homeIsOwnMount();
  } catch {
    return true;
  }
  if (n) G.value = e;
  return e;
}
var at = { readAutoMaster: () => (0, import_fs.readFileSync)("/etc/auto_master", "utf8"), homeIsOwnMount: () => {
  let t;
  try {
    t = (0, import_fs.statSync)("/home");
  } catch (n) {
    if ((0, import_chunk_jv7av99m.J)(n)) return true;
    throw n;
  }
  return t.dev !== (0, import_fs.statSync)("/Users").dev;
} }, Ut = 6;
function et(t, n, e) {
  let r = [], o = [];
  if (!t.startsWith("/")) return { complete: r, partial: o };
  let i = [];
  for (let s of t.split("/")) {
    if (s === "" || s === ".") continue;
    if (s === "..") {
      i.pop();
      continue;
    }
    if (i.push(s), i.length > Ut) continue;
    let u = "/" + i.join("/"), l = (n === "darwin" ? tR(u) : u).split("/").filter((z) => z !== ""), S = l[0]?.toLowerCase();
    if (S === "network") {
      if (l.length === 1) o.push("/network/");
      else if (l.length === 2) o.push(`/network/${N(l[1])}/`);
      else if (l.length === 3) r.push(`/network/${N(l[1])}/${N(l[2])}`);
    } else if (e && S === "home" && l.length === 2) r.push(`/home/${l[1]}`);
  }
  return { complete: r, partial: o };
}
function Fl(t) {
  return vd(t);
}
function bjl() {
  try {
    let t = (0, import_fs.readFileSync)("/proc/self/mountinfo", "utf8").split(`
`).findLast((o) => o.split(" ")[4] === "/net"), [n, e, r] = t?.split(" - ")[1]?.split(" ") ?? [];
    return n === "autofs" && (e === "-hosts" || /(?:^|\/)auto\.(?:net|smb)$/.test(e ?? "")) && r?.split(",").includes("indirect") === true;
  } catch {
    return false;
  }
}
function wjl() {
  try {
    return (0, import_fs.readFileSync)("/proc/self/mountinfo", "utf8").split(`
`).flatMap((t) => {
      let [n, e] = t.split(" - "), r = n?.split(" ")[4];
      return r !== void 0 && e?.startsWith("autofs ") === true ? [r.replace(/\\([0-7]{3})/g, (o, i) => String.fromCharCode(Number.parseInt(i, 8)))] : [];
    });
  } catch {
    return;
  }
}
function kjl() {
  try {
    return (0, import_fs.readFileSync)("/etc/auto_master", "utf8").split(`
`).some((t) => {
      let n = t.replace(/#.*$/, "").trim().split(/\s+/);
      return n[0]?.toLowerCase() === "/net" && n[1] === "-hosts";
    }) && (0, import_fs.statSync)("/net").dev !== (0, import_fs.statSync)("/Users").dev;
  } catch {
    return false;
  }
}
function Ejl() {
  try {
    return (0, import_fs.readFileSync)("/etc/resolv.conf", "utf8").split(`
`).map((t) => t.replace(/[#;].*$/, "").trim().split(/\s+/)).findLast(([t]) => t === "search" || t === "domain")?.slice(1).map((t) => N(t.replace(/\.$/, ""))) ?? [];
  } catch (t) {
    return (0, import_chunk_jv7av99m.J)(t) ? [] : void 0;
  }
}
function Z8(t) {
  if (!t.startsWith("/")) return false;
  t = tR(t);
  let n = t.split("/").filter((r) => r !== "" && r !== ".");
  if (n.length < 1 || n.length > 3 || n.includes("..")) return false;
  if (O(n) && (n.length === 2 || true)) return true;
  let e = n[0].toLowerCase();
  return n.length <= 2 && (e === "net" || (e === "network" || e === "home" && n.length === 1));
}
function ja(t) {
  return $r(t) || Fl(t) || eR(t) || $w(t);
}
function BE(t) {
  return Fl(t) || eR(t) || dx(t) || $w(t);
}
function vd(t) {
  return H1e(t) !== null;
}
var St = 1024, At = 4096, W = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
function H1e(t) {
  if (!t.startsWith("/")) return null;
  if (t.length > At) return ct(t);
  let n = W.get(t);
  if (n === void 0) {
    if (n = ct(t), W.size >= St) W.clear();
    W.set(t, n);
  }
  return n;
}
function ct(t) {
  let n = [];
  for (let e of t.split("/")) {
    if (e === "" || e === ".") continue;
    if (e === "..") {
      n.pop();
      continue;
    }
    if (n.push(e), O(n)) return "/" + n.join("/");
  }
  return null;
}
function vjl(t) {
  let n = H1e(t);
  return n === null ? null : n.slice(n.lastIndexOf("/") + 1);
}
var Ht = /^([\\/]{2}(?:wsl\.localhost|wsl\$)[\\/]+[^\\/]+)((?:[\\/].*)?)$/i;
function Q3n(t) {
  let n = Ht.exec(t);
  return n === null ? void 0 : { prefix: n[1], rest: n[2] ?? "" };
}
function dx(t) {
  if (!t.startsWith("/")) return false;
  let n = [];
  for (let e of t.split("/")) {
    if (e === "" || e === ".") continue;
    if (e === "..") {
      n.pop();
      continue;
    }
    n.push(e);
  }
  return n.length === 1 && n[0].toLowerCase() === "net";
}
function EF(t) {
  if (!t.startsWith("/")) return false;
  if (t.length > At) return ft(t);
  let n = M.get(t);
  if (n === void 0) {
    if (n = ft(t), M.size >= St) M.clear();
    M.set(t, n);
  }
  return n;
}
function ft(t) {
  let n = [];
  for (let e of t.split("/")) {
    if (e === "" || e === ".") continue;
    if (e === "..") {
      n.pop();
      continue;
    }
    if (n.push(e), n.length === 1 && n[0].toLowerCase() === "network") return true;
  }
  return false;
}
function eR(t) {
  return EF(t);
}
function KS(t) {
  return vd(t) || dx(t) || EF(t) || $w(t);
}
function Z3n(t, n, e = null) {
  let r = ID(t), o = ID(n);
  if (!r && !o) return false;
  if (r && !o) return true;
  if (!r && o) {
    let l = e === null || $r(e) ? null : vJ(e), S = $r(n) ? null : Y(n);
    if (l !== null && S !== null && l === S) return false;
    if (e !== null && $r(e) && $r(n) && !Dce(n, e)) return false;
    return true;
  }
  let i = $r(t) ? null : Y(t), s = $r(n) ? null : Y(n);
  if (i !== null || s !== null) return i === null || s === null || i !== s;
  let u = RL(t), a = RL(n);
  if (u !== null || a !== null) return u === null || a === null || u !== a;
  return t !== n;
}
function Y(t) {
  return EF(t) ? null : vJ(t);
}
function XB(t, n = "darwin", e = n === "darwin" && bt()) {
  if (n !== "darwin") return false;
  if (EF(t) || $w(t)) return true;
  if (!t.startsWith("/")) return false;
  let { complete: r, partial: o } = et(t, n, e);
  if (o.length > 0) return true;
  if (r.some((s) => s.startsWith("/network/"))) return true;
  let i = r.filter((s) => s.startsWith("/home/"));
  if (i.length > 0) {
    let s = Ft();
    if (i.some((u) => u !== s)) return true;
  }
  return false;
}
function Ft() {
  let t;
  try {
    t = (0, import_os.homedir)();
  } catch {
    return null;
  }
  let n = /^\/home\/([^/]+)/.exec(tR(t));
  return n ? `/home/${n[1]}` : null;
}
function ID(t) {
  return b3t(t) || EF(t);
}
function b3t(t) {
  return sa(t) || vd(t) || dx(t) || bO(t) || C$(t) || IFs(t) || $w(t);
}
function bFr(t) {
  let n = t.split("/").filter(Boolean);
  if (n.length === 0) return t;
  let e = n.at(-1);
  return "/" + [...n.slice(0, -1).map(lA), N(e)].join("/");
}
function _Ve(t) {
  if (!t.startsWith("/")) return [];
  let n = [], e = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      e.pop();
      continue;
    }
    if (e.push(r), O(e)) n.push(bFr("/" + e.join("/")));
  }
  return n;
}
function mc(t) {
  let n = /^[\\/]{2}wsl(?:\$|\.localhost)[\\/]([^\\/]*)/i.exec(t);
  return n !== null && !/^\.{0,2}[. ]*$/.test(n[1] ?? "");
}
function sa(t) {
  return $r(t) && !mc(t);
}
function Pp(t) {
  if (yt(t)) return (0, import_os.homedir)() + t.slice(1);
  return t;
}
function wFr(t, n) {
  if (yt(t)) return n + t.slice(1);
  return t;
}
function yt(t) {
  return t === "~" || t.startsWith("~/") || false;
}
function _P(t) {
  for (let n = 0; n < t.length; n++) {
    let e = t[n];
    if (e === "*" || e === "?") return n;
    if (e === "[" && t.indexOf("]", n + 1) !== -1) return n;
  }
  return -1;
}
function uC(t) {
  if (t.startsWith("\\\\?\\UNC\\")) return "\\\\" + t.slice(8);
  if (t.startsWith("\\\\?\\") && t.length >= 7 && t[5] === ":") return t.slice(4);
  return t;
}
function vF(t) {
  if (C2(t)) {
    let n = uC(t).replace(/^([\\/])[\\/]+/, "$1");
    for (let e = 0; e < zt && C$(n); e++) {
      n = kt(n).replace(/^([\\/])[\\/]+/, "$1");
      let r = 1;
      while (n[r] === "?" && n[r + 1] === "?" && (r + 2 === n.length || dt(n[r + 2]))) {
        r += 3;
        while (dt(n[r])) r++;
      }
      n = n.slice(0, 1) + n.slice(r);
    }
    return C$(n) ? n.slice(0, 1) : n;
  }
  return t;
}
var zt = 4;
function dt(t) {
  return t === "\\" || t === "/";
}
function C2(t) {
  if (/^\\\\\?\\volume\{/i.test(t)) return gt(t);
  if (C$(t)) return true;
  let n = uC(t);
  if (n !== t && gt(n)) return true;
  return $r(n) && !mc(n);
}
function gt(t) {
  return ad(t) || t.includes("/");
}
function zh(t) {
  try {
    return uC(import_fs.realpathSync.native(t));
  } catch {
    return null;
  }
}
function Tjl(t) {
  try {
    return (0, import_fs.lstatSync)(t), true;
  } catch (n) {
    return !(0, import_chunk_jv7av99m.J)(n);
  }
}
async function T$(t) {
  return new Promise((n) => {
    try {
      import_fs.realpath.native(t, (e, r) => {
        n(e ? null : uC(r));
      });
    } catch {
      n(null);
    }
  });
}
function sNo(t) {
  try {
    return (0, import_fs.realpathSync)(t);
  } catch {
    return null;
  }
}
var Bt = 4, P = 50, HFs = P * (Bt - 1), pt;
function TF(t) {
  return XOe(t).real ?? null;
}
function e5n(t, n, e) {
  if (mt((0, import_path.dirname)((0, import_path.resolve)(t)).toLowerCase(), (0, import_path.resolve)(n).toLowerCase(), "lexical")) return true;
  if (jt(t, e)) return true;
  let r = TF((0, import_path.dirname)((0, import_path.resolve)(t)))?.toLowerCase();
  if (r != null && ID(r) && Mca((0, import_path.parse)((0, import_path.resolve)(t)).root)) return true;
  let o = TF(n)?.toLowerCase();
  if (o == null) return false;
  if (r == null) return true;
  return mt(r, o, "canonical");
}
function jt(t, n) {
  let e = (0, import_path.resolve)(t);
  if (Ica((0, import_path.dirname)(e))) return false;
  let r = false;
  if (n !== void 0) r = n?.isSymbolicLink() === true;
  else {
    let o = R(() => (0, import_fs.lstatSync)(e));
    if (o.value === void 0) return o.code !== "ENOENT" && o.code !== "ENOTDIR";
    r = o.value.isSymbolicLink();
  }
  return r && kFr(e);
}
function Ica(t) {
  return Nt().includes((0, import_path.resolve)(t).toLowerCase());
}
function mt(t, n, e) {
  return t === n || Jt(t, n) || Kt(t, n, e);
}
var Vt = /* @__PURE__ */ new Set(["node_modules", ".venv", "venv", "env", ".env", "virtualenv", ".tox", ".nox", ".direnv", "__pypackages__"]);
function Jt(t, n) {
  if (!t.startsWith(H(n) + import_path.sep)) return false;
  return t.split(import_path.sep).some((e) => Vt.has(e));
}
function H(t) {
  return t.endsWith(import_path.sep) ? t.slice(0, -1) : t;
}
var Z;
function Kt(t, n, e) {
  let { rawHome: r, rawLocal: o } = Tt();
  if (e === "lexical") return X(Nt(), t, n);
  let i = r + "\0" + o;
  if (Z?.key === i) return X(Z.aliasDirs, t, n);
  let s = true, u = vt(r, o, (a) => {
    if (!Gt(a)) return (0, import_path.resolve)(a).toLowerCase();
    let l = TF(a)?.toLowerCase();
    if (l == null) return s = false, (0, import_path.resolve)(a).toLowerCase();
    return l;
  });
  if (s) Z = { key: i, aliasDirs: u };
  return X(u, t, n);
}
function Tt() {
  let t = (process.env.LOCALAPPDATA ?? "").trim();
  return { rawHome: (0, import_os.homedir)(), rawLocal: t };
}
function Nt() {
  let { rawHome: t, rawLocal: n } = Tt();
  return vt(t, n, (e) => (0, import_path.resolve)(e).toLowerCase());
}
function vt(t, n, e) {
  let r = [];
  if (t) r.push(H(e(t)) + import_path.sep + ["appdata", "local", "microsoft", "windowsapps"].join(import_path.sep));
  if (n) {
    let o = H(e(n)) + import_path.sep + ["microsoft", "windowsapps"].join(import_path.sep);
    if (!r.includes(o)) r.push(o);
  }
  return r;
}
function Gt(t) {
  return t.startsWith("/") && !$r(t);
}
function Cjl(t) {
  return /^[A-Za-z]:[\\/](?![\\/])/.test(t);
}
function X(t, n, e) {
  let r = H(e);
  for (let o of t) {
    if (!(o === r || o.startsWith(r + import_path.sep))) continue;
    if (n === o || n.startsWith(o + import_path.sep)) return true;
  }
  return false;
}
var Yt = ["usr/local", "usr/libexec/cups", "usr/share/snmp", "AppleInternal", "Applications", "Library", "Users", "Volumes", "cores", "home", "media", "mnt", "opt", "pkg", "private", "sw"];
function tR(t) {
  let n = t.split("/");
  if (n.length < 5 || n[0] !== "" || _(n[1] ?? "") !== "system" || _(n[2] ?? "") !== "volumes" || _(n[3] ?? "") !== "data") return t;
  let e = n.slice(4);
  for (let r of Yt) {
    let o = r.split("/");
    if (e.length < o.length) continue;
    if (o.every((i, s) => _(e[s] ?? "") === _(i))) return "/" + e.join("/");
  }
  return t;
}
function _(t) {
  return t.toUpperCase().toLowerCase();
}
function Vge(t) {
  return (0, import_path.basename)((0, import_path.dirname)(t)) === "worktrees" && (0, import_path.basename)((0, import_path.dirname)((0, import_path.dirname)(t))) === ".claude" ? (0, import_path.dirname)((0, import_path.dirname)((0, import_path.dirname)(t))) : null;
}
function eY(t, { allowLocalWsl: n = false } = {}) {
  let e = (i) => n && Apt(i);
  if (e(t)) return false;
  if (yP(t)) return true;
  let r = nve(t);
  if (!(0, import_path.isAbsolute)(r)) return true;
  if (tY(r, { allowLocalWsl: n })) return true;
  let o = (0, import_path.resolve)(r);
  for (; ; ) {
    let i = XOe(o);
    if (i.real !== void 0) return yP(i.real) && !e(i.real);
    if (i.code !== "ENOENT" && i.code !== "ENOTDIR") return true;
    let s = (0, import_path.dirname)(o);
    if (s === o) return false;
    o = s;
  }
}
function Apt(t) {
  return false;
}
function WQe(t) {
  return t;
}
var Zt = /^\/mnt\/[a-z](?:\/|$)/i;
function iNo(t, n, e = "") {
  if (!t.startsWith("/") || Zt.test(t) || rNo(t, "linux")) return;
  let r = e === "" ? t : t.startsWith(e + "/") ? t.slice(e.length) : void 0;
  return r === void 0 ? void 0 : n.replace(/[\\/]+$/, "") + r.replace(/\//g, "\\");
}
function aNo(t, { exactDots: n = false } = {}) {
  return;
}
function lNo(t, { exactDots: n = false } = {}) {
  let e = nve(t);
  if (n ? rNo(e, "win32") : ad(e)) return;
  let r = /^([A-Za-z]):[\\/]+(.*)$/.exec(e), o = Q3n(e)?.rest.replace(/^[\\/]+/, ""), i = (r?.[2] ?? o ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (i === "") return;
  let s = r ? `/mnt/${r[1].toLowerCase()}/${i}` : `/${i}`;
  return yP(s) ? void 0 : s;
}
function Ajl(t) {
  return yP(t) && !Apt(t);
}
function yP(t) {
  let n = nve(t);
  return vFr(n) || KS(n) || IFs(n);
}
function DFs(t, { allowLocalWsl: n = false, eisdirIsFolder: e = false, report: r, singleTry: o = false } = {}) {
  let i = nve(t);
  if (!(0, import_path.isAbsolute)(i)) return true;
  if (r !== void 0) r.chain = [], r.metLink = false, r.endedMissing = false;
  let { root: s } = (0, import_path.parse)(i);
  return v(s, TJ(i.slice(s.length)), 0, n, { eisdirIsFolder: e, report: r, singleTry: o });
}
function MPt(t, n) {
  return v(t, TJ(n), 0, false, { trustedStart: true, trustedRoot: t });
}
function kFr(t, n = (0, import_path.dirname)(t)) {
  let e = R(() => (0, import_fs.readlinkSync)(t));
  if (e.value === void 0) return e.code !== "ENOENT" && e.code !== "EINVAL";
  let r = e.value.replace(/^\/{2,}/, "/");
  if (Et(r)) return true;
  let o = false;
  if (o && ad(r)) return true;
  let i = o ? (0, import_path.join)((0, import_path.parse)(n).root, r) : r, s = { trustedStart: true, trustedRoot: n };
  if ((0, import_path.isAbsolute)(i)) {
    let l = (0, import_path.relative)(n, i);
    if (!ad(i) && l !== "" && !ht(l) && !(0, import_path.isAbsolute)(l)) return v(n, TJ(l), 1, false, s);
    return yP(i) || tY(i);
  }
  if (yP(i)) return true;
  let u = (0, import_path.relative)(n, (0, import_path.dirname)(t)), a = !ht(u) && !(0, import_path.isAbsolute)(u);
  return v(a ? n : (0, import_path.dirname)(t), [...a ? TJ(u) : [], ...TJ(i)], 1, false, s);
}
function tY(t, n = {}) {
  return DFs(t, n) || ad(t) && DFs((0, import_path.resolve)(t), n);
}
var Xt = 40;
function Mca(t) {
  let n = TF(t);
  return n !== null && !wO(n);
}
function TJ(t) {
  return t.split(/\/+/).filter(Boolean);
}
var qt = 3;
function L(t, n) {
  return yP(t) && !(n && Apt(t));
}
function ht(t) {
  return t === ".." || /^\.\.[\\/]/.test(t);
}
function Et(t) {
  return false;
}
function v(t, n, e, r, { trustedStart: o = false, trustedRoot: i = t, eisdirIsFolder: s = false, report: u, singleTry: a = false } = {}) {
  let l = (g) => {
    if (u !== void 0) u.unclassifiable = g ?? "UNKNOWN";
    return true;
  }, S = (g, E) => {
    u?.chain?.push({ path: g, dev: E.dev, ino: E.ino });
  }, z = () => {
    if (u !== void 0) u.metLink = true;
  }, lt = i.endsWith(import_path.sep) ? i : i + import_path.sep, A = (g) => o && (g === i || g.startsWith(lt)), b = t;
  if (!A(b) && L(b, r)) return true;
  let tn;
  for (let g = 0; g < n.length; g++) {
    let E = n[g];
    if (E === ".") continue;
    if (E === "..") {
      b = (0, import_path.dirname)(b);
      continue;
    }
    let m = (0, import_path.join)(b, E);
    if (!A(m) && L(m, r)) return true;
    let y = (a ? rt : R)(() => (0, import_fs.lstatSync)(m, { bigint: true }));
    if (y.value === void 0) {
      if (y.code !== "ENOENT" && y.code !== "ENOTDIR") return l(y.code);
      if (u !== void 0) u.endedMissing = true;
      let h = n.slice(g + 1);
      if (!m.includes("??") && !h.some((x) => x.includes("??"))) {
        let { root: x } = (0, import_path.parse)(m), I = TJ(m.slice(x.length));
        for (let V of h) {
          if (V === "..") I.pop();
          else if (V !== ".") I.push(V);
          if (L(x + I.slice(0, qt).join(import_path.sep), r) && !A(x + I.join(import_path.sep))) return true;
        }
        return false;
      }
      let T = m;
      for (let x of h) if (T = x === ".." ? (0, import_path.dirname)(T) : x === "." ? T : (0, import_path.join)(T, x), !A(T) && L(T, r)) return true;
      return false;
    }
    let B;
    if (y.value.isSymbolicLink()) {
      if (z(), e >= Xt) return true;
      let h = (a ? rt : R)(() => (0, import_fs.readlinkSync)(m));
      if (B = h.value, B === void 0) return l(h.code);
    } else {
      if (y.value.isDirectory()) S(m, y.value);
      b = m;
      continue;
    }
    let p = B.replace(/^\/{2,}/, "/");
    if (!(o && (0, import_path.isAbsolute)(p) && !ad(p) && A(p)) && L(p, r)) return true;
    let j = n.slice(g + 1);
    if (Et(p)) return true;
    if ((0, import_path.isAbsolute)(p)) {
      if (o && !ad(p) && A(p)) return v(i, [...TJ(p.slice(lt.length)), ...j], e + 1, r, { trustedStart: true, trustedRoot: i, eisdirIsFolder: s, report: u, singleTry: a });
      let h = (0, import_path.parse)(p).root;
      return v(h, [...TJ(p.slice(h.length)), ...j], e + 1, r, { eisdirIsFolder: s, report: u, singleTry: a });
    }
    return v(b, [...TJ(p), ...j], e + 1, r, { trustedStart: A(b), trustedRoot: i, eisdirIsFolder: s, report: u, singleTry: a });
  }
  return false;
}
function XOe(t) {
  let n = R(() => uC(import_fs.realpathSync.native(t)));
  return { real: n.value, code: n.code };
}
async function HPt(t) {
  let n = await _t(() => new Promise((e, r) => {
    import_fs.realpath.native(t, (o, i) => {
      if (o) r(o);
      else e(uC(i));
    });
  }));
  return { real: n.value, code: n.code };
}
function C(t) {
  return t != null && typeof t === "object" && "code" in t && typeof t.code === "string" ? t.code : void 0;
}
function R(t) {
  try {
    return { value: EFr(t) };
  } catch (n) {
    return { code: C(n) };
  }
}
function rt(t) {
  try {
    return { value: t() };
  } catch (n) {
    return { code: C(n) };
  }
}
function EFr(t) {
  return Ot(t, () => true);
}
function LFs(t) {
  let n = 0;
  return (e) => Ot(e, () => {
    if (n + P > t) return false;
    return n += P, true;
  });
}
function Ot(t, n) {
  for (let e = 0; ; e++) try {
    return t();
  } catch (r) {
    let o = C(r);
    throw r;
  }
}
function Rt(t) {
  let n = C(t);
  return n === "EINVAL" ? { kind: "directory" } : n === "ENOENT" ? { kind: "absent" } : { kind: "error", code: n, error: t };
}
function JOe(t, n = false) {
  let e, r = (n ? rt : R)(() => {
    try {
      return (0, import_fs.readlinkSync)(t);
    } catch (o) {
      throw e = o, o;
    }
  });
  return r.value !== void 0 ? { kind: "junction", target: r.value } : Rt(e);
}
async function A2(t) {
  let n, e = await _t(async () => {
    try {
      return await (0, import_promises.readlink)(t);
    } catch (r) {
      throw n = r, r;
    }
  });
  return e.value !== void 0 ? { kind: "junction", target: e.value } : Rt(n);
}
async function _t(t) {
  for (let n = 0; ; n++) try {
    return { value: await t() };
  } catch (e) {
    let r = C(e);
    return { code: r };
  }
}
function vFr(t) {
  return wO(t) || vd(t);
}
function Lt(t) {
  return ad(t) || /[. :](?=[\\/]|$)/.test(t) || t.split(/[\\/]/).some((n) => lx(n) || lx(n.slice(0, Math.max(0, n.indexOf(":")))));
}
function nve(t) {
  let n = /^(?:\\\\[?.]\\|\\\?\?\\)(?=[A-Za-z]:[\\/])/.exec(t);
  if (!n) return t;
  let e = t.slice(n[0].length), r = e.slice(2);
  return n[0].includes("\\") && r.includes("/") || Lt(r) ? t : e;
}
function Ah(t, { foldCase: n, knownNotSuspect: e = false } = {}) {
  if (n ??= true, t = nve(t), wO(t) || vd(t)) {
    let u = WQe((0, import_path.resolve)(WQe(t))).normalize("NFC");
    return n ? u.toLowerCase() : u;
  }
  if (!e && tY((0, import_path.isAbsolute)(t) ? t : (0, import_path.resolve)(t))) {
    let u = (0, import_path.resolve)(t).normalize("NFC");
    return n ? u.toLowerCase() : u;
  }
  let r = (0, import_path.resolve)(t), o = [], i = zh(r);
  while (i === null && (0, import_path.dirname)(r) !== r) o.unshift((0, import_path.basename)(r)), r = (0, import_path.dirname)(r), i = zh(r);
  i = o.length > 0 ? (0, import_path.resolve)(i ?? r, ...o) : i ?? r;
  let s = WQe(i).normalize("NFC");
  return n ? s.toLowerCase() : s;
}
function Ya(t, n, { alreadyComparable: e = false, foldCase: r } = {}) {
  let o = (0, import_path.relative)(e ? t : Ah(t, { foldCase: r }), e ? n : Ah(n, { foldCase: r }));
  return o === "" || !(0, import_path.isAbsolute)(o) && o !== ".." && !o.startsWith(`..${import_path.sep}`);
}
function Lce(t, n) {
  let e = zh(t), r = zh(n);
  return e !== null && r !== null && F(e) === F(r);
}
function Rpt(t, n) {
  let e = zh(t), r = zh(n);
  return e !== null && r !== null && Qt(F(e), F(r), /\//);
}
function Qt(t, n, e) {
  let r = new RegExp(`(?:${e.source})+$`), o = t.replace(r, "").split(e), i = n.replace(r, "").split(e);
  return o.length <= i.length && o.every((s, u) => s === i[u]);
}
function F(t) {
  return pn(WQe(t));
}
function wO(t) {
  return $r(t);
}
function C$(t) {
  return xt.test(t) || t.includes("??") && xt.test(kt(t));
}
var xt = /^[\\/]\?\?[\\/]/;
function kt(t) {
  return nt.win32 ? nt.win32.normalize(t) : t;
}
