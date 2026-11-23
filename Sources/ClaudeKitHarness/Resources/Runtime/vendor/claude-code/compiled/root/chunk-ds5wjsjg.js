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
var chunk_ds5wjsjg_exports = {};
__export(chunk_ds5wjsjg_exports, {
  ALs: () => ALs,
  U4n: () => U4n,
  Zxt: () => Zxt,
  m2: () => m2,
  roa: () => roa,
  xnd: () => xnd
});
module.exports = __toCommonJS(chunk_ds5wjsjg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_path = require("path");
function se() {
  return false;
}
class T {
  resolved = /* @__PURE__ */ new Map();
  envKey = void 0;
  cwdKey = void 0;
  skippedFolders;
  foldersReadFailed;
  namesMaybeMissed = /* @__PURE__ */ new Set();
  vettedFolders = /* @__PURE__ */ new Map();
  constructor(e) {
    this.skippedFolders = e?.skippedFolders ?? /* @__PURE__ */ new Map(), this.foldersReadFailed = e?.foldersReadFailed ?? /* @__PURE__ */ new Map();
  }
  lookup(e) {
    return this.resolved.get(e);
  }
  remember(e, n) {
    this.resolved.set(e, n);
  }
  forget(e) {
    this.resolved.delete(e);
  }
}
var D = new import_chunk_2904xtvq.j(() => new T()), S = [".com", ".exe", ".bat", ".cmd"], R = 5e3;
function k(e) {
  return v(e, process.hrtime.bigint());
}
function v(e, n) {
  return Number(n - e) / 1e6;
}
var A = /* @__PURE__ */ new Set(["EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EINVAL"]), H = 6e5, re = 250;
function Zxt(e, n = "darwin") {
  return n === "win32" ? e.replaceAll('"', "") : e;
}
function U4n(e) {
  if (!(0, import_path.isAbsolute)(e)) return false;
  return true;
}
function V(e) {
  let n = Zxt(e, "win32").trim();
  if (!U4n(n) || (0, import_chunk_z6pfqf6e.ID)(n)) return null;
  let t = (0, import_path.resolve)(n);
  return (0, import_chunk_z6pfqf6e.ID)(t) ? null : t;
}
function K(e) {
  return e.split(import_path.delimiter).flatMap((n) => {
    let t = V(n);
    return t === null ? [] : [t];
  });
}
function ie(e) {
  let n = false;
  for (let t of e) if (t === '"') n = !n;
  else if (t === import_path.delimiter && n) return true;
  return false;
}
function oe(e, n, t) {
  return { eisdirIsFolder: "onAnyDrive", allowLocalWsl: (0, import_chunk_z6pfqf6e.Apt)(e), report: n, singleTry: t };
}
var de = 512;
function ae(e, n, t) {
  let r = n.get(e);
  if (r === void 0) return false;
  for (let s of r) {
    if (t.has(s.path)) continue;
    let i;
    try {
      i = (0, import_fs.lstatSync)(s.path, { bigint: true, throwIfNoEntry: false });
    } catch {
    }
    if (!i?.isDirectory() || i.dev !== s.dev || i.ino !== s.ino) return n.delete(e), false;
    t.add(s.path);
  }
  return true;
}
function le(e, n) {
  let t = n.chain;
  return t !== void 0 && !n.metLink && t.length > 0 && t.at(-1)?.path === e && t.every((r) => r.ino !== 0n) ? t : void 0;
}
function B(e, n, t, r) {
  let s = process.hrtime.bigint(), i = n.get(e), o = v(t, s), c = (i?.spentMs ?? 0) + (o > re ? o : 0), l = r || i !== void 0 && i.stands && v(i.lastAt, s) <= H;
  return n.set(e, { lastAt: s, spentMs: c, stands: l }), c > R ? { verdict: "stalled", missing: false, settled: true } : { verdict: "unreadable" };
}
function U(e, n, t, r) {
  let s = process.hrtime.bigint(), i = () => k(s) > R;
  if (ae(e, n, t)) return r.delete(e), { verdict: "pass", plainDir: true };
  let o = r.get(e), c = o !== void 0 && o.stands && k(o.lastAt) <= H, l = {};
  if ((0, import_chunk_z6pfqf6e.tY)(e, oe(e, l, c))) {
    let u = l.unclassifiable;
    if (u === void 0) return { verdict: "refused" };
    if (i()) return { verdict: "stalled", missing: false, settled: A.has(u) };
    if (A.has(u)) return B(e, r, s, !c && (u === "EACCES" || u === "EPERM"));
    return { verdict: "unsure", code: u };
  }
  if (l.endedMissing === true && i()) return { verdict: "stalled", missing: true, settled: false };
  let g = l.chain?.at(-1)?.path === e;
  if (g) r.delete(e);
  let a = le(e, l);
  if (a !== void 0) {
    if (n.size >= de) n.clear();
    n.set(e, a);
    for (let u of a) t.add(u.path);
  }
  return { verdict: "pass", plainDir: g };
}
function xnd(e) {
  let n = D.of((0, import_chunk_f9x2f6cx.N)().host), t = (0, import_chunk_2gtmjt3y.KOe)("PATH");
  return n.namesMaybeMissed.has(e) || t === void 0 || K(t).length === 0 || ie(t) || t.split(import_path.delimiter).some((r) => {
    let s = Zxt(r, "win32").trim();
    return V(r) === null && ((0, import_chunk_z6pfqf6e.ID)(s) || /^(?:[\\/]|[a-zA-Z]:)|(?:^|[\\/])\.\.(?:[\\/]|$)/.test(s));
  });
}
function X(e, n, t, r) {
  let s = `${n ?? ""}\0${t ?? ""}`;
  if (e.envKey !== s) e.envKey = s, e.resolved.clear(), e.skippedFolders.clear(), e.foldersReadFailed.clear(), e.namesMaybeMissed.clear();
  if (e.cwdKey !== r) e.cwdKey = r, e.resolved.clear(), e.namesMaybeMissed.clear();
}
function ALs(e, n = false) {
  let t = D.of((0, import_chunk_f9x2f6cx.N)().host), r = (0, import_chunk_2gtmjt3y.KOe)("PATH"), s = (0, import_chunk_2gtmjt3y.KOe)("PATHEXT"), i;
  try {
    i = process.cwd();
  } catch {
    return t.namesMaybeMissed.add(e), null;
  }
  X(t, r, s, i);
  let o = t.lookup(e);
  if (o !== void 0) if (o !== null) {
    let c = (0, import_path.dirname)(o), l = t.skippedFolders.get(c) === "denied" ? { verdict: "refused" } : U(c, t.vettedFolders, /* @__PURE__ */ new Set(), /* @__PURE__ */ new Map());
    switch (l.verdict) {
      case "stalled":
        if (t.skippedFolders.set(c, "unreachable"), l.missing) return o;
        if (l.settled) t.forget(e);
        break;
      case "pass": {
        let p;
        try {
          p = (0, import_fs.lstatSync)(o, { throwIfNoEntry: false });
        } catch (g) {
          let a = (0, import_chunk_jv7av99m.w)(g), u = (a === "EACCES" || a === "EPERM") && !(0, import_chunk_z6pfqf6e.Ica)(c);
          if (!(0, import_chunk_jv7av99m.kn)(g) && !u) return o;
        }
        if (l.plainDir) {
          if (t.foldersReadFailed.delete(c), t.skippedFolders.get(c) === "unreachable") t.skippedFolders.delete(c);
        }
        if (p !== void 0 && (p.isFile() || p.isSymbolicLink()) && !(0, import_chunk_z6pfqf6e.e5n)(o, i, p)) return o;
        t.forget(e);
        break;
      }
      case "refused":
      case "unreadable":
      case "unsure":
        t.forget(e);
        break;
      default:
    }
  } else {
    if (!n) return o;
    t.forget(e);
  }
  if (n) t.skippedFolders.clear(), t.foldersReadFailed.clear();
  return q(e, r, s, i, t, t.vettedFolders, ue);
}
function roa(e, n) {
  let t;
  try {
    t = process.cwd();
  } catch {
    return null;
  }
  let r = D.of((0, import_chunk_f9x2f6cx.N)().host), s = (0, import_chunk_2gtmjt3y.KOe)("PATH"), i = (0, import_chunk_2gtmjt3y.KOe)("PATHEXT"), o = n === s;
  if (o) X(r, s, i, t);
  return q(e, n, i, t, new T(o ? r : void 0), r.vettedFolders, ce);
}
var ue = { searchCwdFirst: true }, ce = { searchCwdFirst: false };
function q(e, n, t, r, s, i, o) {
  if (s.namesMaybeMissed.delete(e), e === "" || /[*?"<>|:\\/]/.test(e)) return s.remember(e, null), null;
  try {
    let c = [...o.searchCwdFirst ? [r] : [], ...K(n ?? "")], l = t?.split(";").map((d) => d.trim().toLowerCase()), p = l === void 0 ? S : (0, import_chunk_4smdap7r.M)(l).filter((d) => S.includes(d)), g = [...S.includes((0, import_path.extname)(e).toLowerCase()) ? [e] : [], ...p.map((d) => e + d)], a = false, u = p.length < S.length || n === void 0, f = false, z = /* @__PURE__ */ new Set();
    for (let d of c) {
      if (s.skippedFolders.has(d)) {
        if (s.skippedFolders.get(d) === "denied") u = true;
        else a = f = true;
        continue;
      }
      let h = U(d, i, z, s.foldersReadFailed);
      switch (h.verdict) {
        case "pass":
          break;
        case "stalled":
          s.skippedFolders.set(d, "unreachable"), a = f = true;
          continue;
        case "refused":
          s.skippedFolders.set(d, "denied"), u = true;
          continue;
        case "unreadable":
          u = true;
          continue;
        case "unsure":
          a = f = true;
          continue;
        default:
      }
      let O, E, W = process.hrtime.bigint();
      if (!h.plainDir) try {
        O = (0, import_fs.statSync)(d, { throwIfNoEntry: false });
      } catch (F) {
        E = (0, import_chunk_jv7av99m.w)(F) ?? "UNKNOWN";
      }
      if (!h.plainDir && !O?.isDirectory()) {
        if (k(W) > R) s.skippedFolders.set(d, "unreachable"), a = f = true;
        else if (E !== void 0) if (A.has(E)) if (B(d, s.foldersReadFailed, W, false).verdict === "stalled") s.skippedFolders.set(d, "unreachable"), a = f = true;
        else u = true;
        else a = f = true;
        continue;
      }
      if (!h.plainDir) s.foldersReadFailed.delete(d);
      let _ = d.toLowerCase().split(/[\\/]+/).filter(Boolean), Z = _.at(-1) === "windowsapps" && _.at(-2) === "microsoft";
      for (let F of g) {
        let y = (0, import_path.join)(d, F), m, b = false, G = process.hrtime.bigint();
        try {
          m = (0, import_fs.lstatSync)(y, { throwIfNoEntry: false });
        } catch (J) {
          let C = (0, import_chunk_jv7av99m.w)(J), I = (C === "EACCES" || C === "EPERM") && Z;
          if (!I) a = f = true;
          b = I;
        }
        if (!b && m === void 0) {
          if (k(G) > R) {
            s.skippedFolders.set(d, "unreachable"), a = f = true;
            break;
          }
          continue;
        }
        if (!b && !(m?.isFile() || m?.isSymbolicLink())) continue;
        if ((0, import_chunk_z6pfqf6e.e5n)(y, r, m ?? null)) {
          a = true;
          continue;
        }
        if (!f) s.remember(e, y);
        return y;
      }
    }
    if (a || u) s.namesMaybeMissed.add(e);
    if (!a) s.remember(e, null);
    return null;
  } catch {
    return s.namesMaybeMissed.add(e), null;
  }
}
function m2(e, n = false) {
  if (!se()) return e;
  if (e.includes("/") || e.includes("\\")) return e;
  return ALs(e, n);
}
