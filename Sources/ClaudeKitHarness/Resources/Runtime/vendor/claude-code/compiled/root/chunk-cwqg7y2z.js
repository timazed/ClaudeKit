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
var chunk_cwqg7y2z_exports = {};
__export(chunk_cwqg7y2z_exports, {
  IXn: () => IXn,
  Lkn: () => Lkn,
  OXn: () => OXn,
  PXn: () => PXn,
  QZe: () => QZe,
  Tba: () => Tba,
  YWo: () => YWo,
  jzs: () => jzs,
  qWo: () => qWo,
  sue: () => sue,
  xXn: () => xXn
});
module.exports = __toCommonJS(chunk_cwqg7y2z_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_ay36ksef = require("/$bunfs/root/chunk-ay36ksef.js");
var import_chunk_b9qnxh4s = require("/$bunfs/root/chunk-b9qnxh4s.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_wnt799dt = require("/$bunfs/root/chunk-wnt799dt.js");
var import_chunk_x0nfhv1g = require("/$bunfs/root/chunk-x0nfhv1g.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
var import_path = require("path");
var he = "tengu_violin_lining";
function QZe() {
  return (0, import_chunk_sghy0qej.Pe)(he, { safe: true });
}
async function xXn(e) {
  return (0, import_chunk_ay36ksef.thn)(() => (0, import_chunk_49rkmh8j.tFe)(() => (0, import_chunk_49rkmh8j.SVt)(e, async () => {
    if (!QZe()) return (0, import_chunk_b9qnxh4s.PS)(e);
    let n = await (0, import_chunk_b9qnxh4s.CU)(e);
    if (n === import_chunk_b9qnxh4s.ek && e.trim() !== "") return { kind: "too-complex", reason: "the parser gave up on the command" };
    return n === null ? { kind: "simple", commands: [], bareAssignmentNames: [] } : (0, import_chunk_b9qnxh4s.UG)(e, n);
  })));
}
async function PXn(e) {
  let n = await (0, import_chunk_b9qnxh4s.CU)(e);
  return n !== null && n !== import_chunk_b9qnxh4s.ek && ((0, import_chunk_49rkmh8j.ohn)(n) !== void 0 || (0, import_chunk_b9qnxh4s.dBn)(e, n) || (0, import_chunk_49rkmh8j.rOo)(e) !== void 0 && (0, import_chunk_b9qnxh4s.UG)(e, n).kind !== "simple");
}
var Ee = 16, ne = 64, ye = "tengu_nifty_pine";
function w(e) {
  return (0, import_chunk_b9qnxh4s.qEr)(e) || e === "PWD" || e === "OLDPWD" || Ce.test(e) && N();
}
function F(e, n) {
  if (!k.test(e)) return w(e);
  if (!N()) return false;
  return n === void 0 || !(e.toUpperCase() === "LANGUAGE" ? Ne.test(n) : Re.test(n));
}
var Le = "tengu_pure_tide";
function N() {
  return (0, import_chunk_sghy0qej.Pe)(Le, { safe: true });
}
var k = /^(?:LANG|LANGUAGE|LC_[A-Z]+)$/i, Ce = /^(?:LOCPATH|MUSL_LOCPATH|GCONV_PATH|LOCALE_ARCHIVE(?:_\d+_\d+)?|GUIX_LOCPATH|PATH_LOCALE|NLSPATH|TEXTDOMAIN(?:DIR)?)$/, Re = /^(?:(?:C|POSIX)(?:\.(?:UTF-?8|utf-?8))?|UTF-?8|utf-?8|[a-z]{2,3}(?:_[A-Z]{2})?\.(?:UTF-?8|utf-?8)(?:@[a-z]+)?)$/, Ne = /^[A-Za-z]{2,3}(?:_[A-Za-z]{2})?(?::[A-Za-z]{2,3}(?:_[A-Za-z]{2})?)*$/, Oe = /(?:^|[^A-Za-z0-9_$])(?:LANG|LANGUAGE|LC_[A-Z]+)\+?=(?:[^\s;&|<>()\\]|\\[\s\S])*?[$`]/i;
function we(e) {
  return N() && Oe.test(e.replace(/['"]/g, ""));
}
function ve(e, n) {
  return e.envVars.some((t) => k.test(t.name)) || n.some((t) => k.test(t.split(/\+?=/, 1)[0] ?? ""));
}
function Te(e) {
  let n = /^([A-Za-z_][A-Za-z0-9_]*)(\+?)=(.*)$/s.exec(e);
  return n === null ? F("") : F(n[1], n[2] === "+" ? void 0 : n[3]);
}
var ie = /* @__PURE__ */ new Set(["export", "declare", "typeset", "readonly", "local", "unset"]), be = /* @__PURE__ */ new Set([...import_chunk_b9qnxh4s.x2e, ...import_chunk_b9qnxh4s.svt, ...import_chunk_b9qnxh4s.Y7, ...import_chunk_b9qnxh4s.P2e, ...import_chunk_b9qnxh4s.lme, "xargs", "parallel"]), U = [import_chunk_p1ewvgeh.aYe, import_chunk_p1ewvgeh.kRe, import_chunk_p1ewvgeh.J0e], Ie = "tengu_toasty_hammock", xe = "bot_protected_tengu_fuzzy_coral", De = 256, We = 256;
function te(e) {
  return e === "[" || e === "[[" || /^[A-Za-z0-9_.+:~/-]+$/.test(e);
}
async function OXn(e, n, t, s) {
  let o = t.behavior === "ask" && (0, import_chunk_bzyb60p0.ha)(t.decisionReason, import_chunk_pbteexar.HK) !== void 0;
  if (e.name === import_chunk_hn3cwwzt.ke) {
    if (typeof n.command !== "string") return "uncertain";
    let l = await ue(n.command, s, o);
    return l === "none" && t.behavior === "ask" && (0, import_chunk_bzyb60p0.ha)(t.decisionReason, import_chunk_pbteexar.xDr) !== void 0 ? "uncertain" : l;
  }
  if (e.name !== import_chunk_rb36kwbn.yt) return "none";
  if (o) return "settings";
  return t.behavior === "ask" && G(t) ? "uncertain" : "none";
}
async function Lkn(e, n, t, s = false) {
  if (e.name !== import_chunk_hn3cwwzt.ke && e.name !== import_chunk_rb36kwbn.yt || !sue(n, "file") || !await qWo(e, n, t)) return false;
  let o = n.command;
  return !(s && e.name === import_chunk_hn3cwwzt.ke && typeof o === "string" && await jzs(o));
}
async function qWo(e, n, t) {
  try {
    let s = n.command;
    return e.name === import_chunk_rb36kwbn.yt && typeof s === "string" ? !(0, import_chunk_x0nfhv1g.bXt)(s, await (0, import_chunk_bzyb60p0.knt)(s)) : !e.isReadOnly(n, t);
  } catch (s) {
    return (0, import_chunk_k449cc64.i)(Error("a served shell line's read-only check threw; the line counts as not read-only", { cause: s })), true;
  }
}
function YWo() {
  return { paths: [...(0, import_chunk_p1ewvgeh.jEt)(), ...(0, import_chunk_p1ewvgeh.fw)().flatMap((e) => U.map((n) => (0, import_path.join)(e, n)))], globalConfigNames: import_chunk_ephf358x.cse.map((e) => `.claude${e}.json`) };
}
var b = { simctl: ["launch", "terminate", "uninstall", "get_app_container", "appinfo", "privacy"], open: ["-b"], defaults: ["read", "read-type", "write", "delete"] }, ae = String.raw`(?:[a-z][a-z0-9_-]*\.){2,}claude`, Fe = new RegExp(`^${ae}$`, "i"), Ge = /[|`\\(]|\$[{_]|\$BASH|<<|\bfunction\b/;
async function jzs(e) {
  if (Ge.test(e)) return false;
  try {
    let n = await xXn(e);
    if (n.kind !== "simple" || n.bareAssignmentNames.some(w) || (0, import_chunk_49rkmh8j.eFe)(e)) return false;
    let t = [], s = e.replace(new RegExp(String.raw`(^|\s)(${ae})(?=$|[\s;&])`, "gi"), (r, u, d) => (t.push(d), `${u}APPID`)), o = [], l = 0;
    for (let { argv: r, envVars: u, redirects: d } of n.commands) {
      if (u.some((m) => w(m.name)) || d.some(({ op: m, target: E }) => E !== "/dev/null" && !(m === ">&" && (E === "1" || E === "2")))) return false;
      let c = r[0], f = c === "simctl" ? 0 : (c === "xcrun" || c === "/usr/bin/xcrun") && r[1] === "simctl" ? 1 : void 0, g = f === void 0 ? void 0 : r[f + 1], S = f !== void 0 && g !== void 0 && b.simctl.includes(g) ? f + 1 : void 0, h = (c === "defaults" || c === "/usr/bin/defaults") && r[1] !== void 0 && b.defaults.includes(r[1]), A = c === "open" || c === "/usr/bin/open";
      if (f === void 0 && !h && !A && c !== void 0 && c !== "sleep") return false;
      for (let [m, E] of r.entries()) {
        if (!Fe.test(E)) continue;
        o.push(E);
        let y = r[m - 1];
        if (S !== void 0 && m > S || h && m === 2 || A && y !== void 0 && b.open.includes(y)) l += 1;
      }
    }
    return t.length > 0 && l === o.length && t.toSorted().join(" ") === o.toSorted().join(" ") && !sue({ command: s }, "file");
  } catch (n) {
    return (0, import_chunk_k449cc64.i)(Error("reading a served shell line's app identifiers threw; the line counts as naming settings", { cause: n })), false;
  }
}
function sue(e, n) {
  let t = e.command;
  if (typeof t !== "string") return true;
  let { files: s, dirs: o } = (0, import_chunk_p1ewvgeh.JEt)(), l = n !== "file_or_folder", r = n === "own_file", u = o.flatMap((m) => [m, (0, import_chunk_n2dbhmj2.os)(m)]), d = YWo(), c = l ? d.paths : [], f = [...r ? [] : [...(0, import_chunk_p1ewvgeh.iUi)(), "managed-settings"], ...l ? d.globalConfigNames : [...import_chunk_p1ewvgeh.XEt, ...u], ...[...r ? [] : s, ...c].flatMap((m) => [m, (0, import_chunk_n2dbhmj2.os)(m)])], g = (0, import_chunk_p1ewvgeh.FSs)(), S = l ? [...r ? [] : import_chunk_p1ewvgeh.XEt, ...U] : s.map((m) => (0, import_path.basename)(m)).filter((m) => m.includes(".")), h = ["", "/"], A = le(t);
  return h.some((m) => {
    let E = A.replaceAll("\\", m);
    if (f.some((p) => E.includes(O(p, m)))) return true;
    let y = g.some((p) => new RegExp(`${(0, import_chunk_7cfjrnwy.fo)(O(p, m))}(?![a-z0-9_])`).test(E)), L = S.some((p) => new RegExp(`(?<![a-z0-9_])${(0, import_chunk_7cfjrnwy.fo)(O(p, m))}(?![a-z0-9_])`).test(E));
    if (!l) return y || L;
    return L && (y || u.some((p) => E.includes(O(p, m)))) || (r ? [] : [...g, ...u]).some((p) => new RegExp(`${(0, import_chunk_7cfjrnwy.fo)(O(p, m))}(?![a-z0-9_-])(?=((?:/+(?:\\.(?![a-z0-9_.-]))?)*))\\1(?!\\.?[a-z0-9_-])`).test(E));
  });
}
function O(e, n) {
  return le(e).replaceAll("\\", n);
}
function le(e) {
  return (0, import_chunk_p1ewvgeh.Yo)((0, import_chunk_kx2fp6pc.lg)(e)).replace(/['"`]/g, "");
}
function G(e) {
  let n = e.decisionReason;
  if (n?.type === "subcommandResults") {
    for (let t of n.reasons.values()) if (t.behavior === "ask" && G(t)) return true;
    return false;
  }
  if (n === void 0) return e.blockedPath === void 0;
  if (n.type === "sandboxOverride") return n.replaces !== void 0 && G(n.replaces);
  if (n.type === "safetyCheck" && !(0, import_chunk_pbteexar.HK)(n)) return (0, import_chunk_pbteexar.xDr)(n) || e.blockedPath === void 0;
  return n.type === "other";
}
async function ue(e, n, t = false) {
  let s = (0, import_chunk_49rkmh8j.yVt)(), { result: o, fired: l } = await (0, import_chunk_49rkmh8j.nhn)(s, () => xXn(e));
  if (o.kind !== "simple") return l && !s && await (0, import_chunk_49rkmh8j._Vt)(() => ue(e, n, t)) === "settings" ? "settings" : "uncertain";
  let r = o.bareAssignmentNames.some(w) || o.laterLoopPassesDiffer === true || (0, import_chunk_bzyb60p0.eIn)(o.commands) || (0, import_chunk_49rkmh8j.eFe)(e) || await PXn(e), u = [n], d = true, c = false, f = false, g = true, S = 0, h = o.hasLoop !== false && (0, import_chunk_sghy0qej.Pe)(Ie, { safe: true }), A = we(e), m = (0, import_chunk_sghy0qej.Pe)(xe, { safe: true }), E = false, y = 0;
  for (let L of o.commands) {
    let { simple: p, wrapperWords: z, pathSpelled: pe, doubt: ge } = fe(L);
    if (ge || Be(p) || A && ve(p, z) || c) r = true;
    let C = ce(p, u);
    if (C !== void 0 && h) r = true;
    if (C === "unknown") d = false;
    else if (C !== void 0) {
      if (u = C, p.argv.slice(1).some(me)) d = false;
    }
    if (C !== void 0 && !de(p)) d = false, c = true;
    let R = (0, import_chunk_bzyb60p0.mQo)(p);
    if (R.writesUnseen) r = true;
    if (!R.known && C === void 0 && p.argv.length > 0) g = false;
    let P = (a) => (0, import_path.isAbsolute)(a) || a.startsWith("~") ? [n] : u, { argv: V, argvUnquotedGlob: Z } = L, X = Z?.length === V.length && L.carveOutMayDesyncQuoteScan !== true ? /* @__PURE__ */ new Set([...V.filter((a, _) => Z[_] === true).flatMap((a) => B(a)), ...R.landings]) : void 0, K = L.hasUnquotedGlob || (0, import_chunk_b9qnxh4s.R2e)(L), j = (a, _) => {
      if (!m || r || p.argv[0] === "[[" || !(X?.has(a) ?? K) || !/[*?[]/.test(a)) return false;
      return y++, y > We || re(a, _);
    }, q = (a, _) => IXn(a, _) || j(a, _);
    if (C !== void 0 && p.argv.slice(1).some((a) => u.some((_) => j(a, _)))) E = true;
    let Y = p.argv.indexOf("--");
    if (m && p.argv[0] === "set" && p.argv.slice(1, Y === -1 ? void 0 : Y).some((a) => /dot|4|glob|brace|ccl/i.test(a.replaceAll("_", "")) || (0, import_chunk_b9qnxh4s.ei)(a) || (X?.has(a) ?? K) && /[*?[]/.test(a))) r = true;
    let J = [...z, ...R.known && !pe ? [] : p.argv.slice(1), ...p.envVars.map((a) => a.value)].flatMap((a) => B(a));
    if (!R.known && C === void 0 && p.argv.length > 0 && (E || u.some((a) => IXn(".", a)))) r = true;
    if (!d && J.some((a) => a !== "" && !(0, import_path.isAbsolute)(a) && !a.startsWith("~") && q(a, (0, import_path.resolve)(n, ".claude")))) r = true;
    for (let a of [...J, ...R.landings]) if (a !== "" && P(a).some((_) => q(a, _))) r = true;
    for (let a of R.written) {
      if (S++, S > ne) return "uncertain";
      if ((0, import_chunk_b9qnxh4s.ei)(a) || P(a) === u && !d) r = true;
      for (let _ of P(a)) {
        let Q = H(a, _);
        if (Q === "settings") return "settings";
        if (Q === "uncertain" || m && re(a, _)) r = true;
      }
    }
    for (let a of R.copySources) {
      if (S++, S > ne) return "uncertain";
      if (P(a).some((_) => H(a, _) === "settings")) f = true;
      else if (P(a).some((_) => Ue(a, _))) r = true;
    }
  }
  if (r || t && !(f && g)) return "uncertain";
  return "none";
}
var I = /* @__PURE__ */ new Set(["HOME", "CDPATH", "PWD", "OLDPWD"]), Me = /^-[^-]*[CD]|^--chd/;
async function Tba(e, n) {
  let t = await xXn(e);
  if (t.kind !== "simple" || t.hasLoop !== false) return "unparsed";
  let s = t.bareAssignmentNames.some((u) => I.has(u)), o = [n], l = false, r = [];
  for (let u of t.commands) {
    if (u.envVars.some((h) => I.has(h.name)) || u.argv.some((h) => h.includes("=") && I.has(h.split(/\+?=/, 1)[0] ?? ""))) s = true;
    let { simple: d, wrapperWords: c } = fe(u), f = l, g = ce(d, o);
    if (g === "unknown" || g !== void 0 && (s || d.argv.slice(1).some(me))) l = true;
    if (g !== void 0 && !de(d)) l = true;
    if (g !== void 0 && g !== "unknown") o = g;
    let S = c.some((h) => Me.test(h));
    for (let h of [{ list: u.argv, directories: S ? [] : o, mayBeElsewhere: f || S }, { list: [...u.envVars.map((A) => A.value), ...u.redirects.filter((A) => A.op !== "<<" && A.op !== "<<<").map((A) => A.target)], directories: o, mayBeElsewhere: f }]) for (let A of h.list) for (let m of B(A)) r.push({ word: m, directories: h.directories, mayBeElsewhere: h.mayBeElsewhere });
  }
  return r;
}
function B(e) {
  return [e, ...e.includes("=") ? [e.slice(e.indexOf("=") + 1)] : [], .../^-[^-]./.test(e) ? Array.from({ length: e.length - 2 }, (n, t) => e.slice(t + 2)) : []];
}
function fe(e) {
  let [n, ...t] = e.argv;
  if (n === void 0) return { simple: e, wrapperWords: [], pathSpelled: false, doubt: false };
  let s = [(0, import_chunk_b9qnxh4s.XO)(n), ...t], o = (0, import_chunk_bzyb60p0.G$)((0, import_chunk_bzyb60p0.urt)(s)), l = s.length - o.length, r = l >= 0 && o.every((f, g) => f === s[l + g]), u = r ? s.slice(0, l) : s, d = r && l === 0 ? n : o[0], c = d === void 0 ? void 0 : (0, import_chunk_b9qnxh4s.XO)(d);
  return { simple: r && l === 0 && n === s[0] ? e : { ...e, argv: o, text: (0, import_chunk_vh92d4r0.No)(o) }, wrapperWords: u, pathSpelled: n !== s[0] || d !== void 0 && d !== c || u.some((f) => f !== (0, import_chunk_b9qnxh4s.XO)(f)), doubt: !r || !te(n) || [...u, ...d === void 0 ? [] : [d]].some(import_chunk_b9qnxh4s.ei) || u.some((f) => f.startsWith("-") && f !== "-" && f !== "--" || Te(f)) || d !== void 0 && c !== void 0 && (!te(d) || c.startsWith("-") || be.has(c)) };
}
function Be(e) {
  let [n, ...t] = e.argv;
  return e.envVars.some((s) => F(s.name, s.isAppend ? void 0 : s.value)) || n !== void 0 && se.has(n) && e.envVars.length > 0 && N() || n !== void 0 && (ie.has(n) || se.has(n) && N()) && t.some((s) => {
    let o = s.split(/\+?=/, 1)[0] ?? "";
    return (0, import_chunk_b9qnxh4s.ei)(o) || w(o) || /[*?[]/.test(o) && N() || He.has(n) && /^[-+].*n/.test(s) && N();
  });
}
var se = /* @__PURE__ */ new Set([...ie, "integer", "float", "private"]), He = /* @__PURE__ */ new Set(["declare", "typeset", "local"]);
function H(e, n) {
  let t = (0, import_chunk_pqb914sj.nj)(e, n, (0, import_chunk_4vsz8a99.Vd)(), "write");
  if (t.allowed) return "none";
  if (t.decisionReason?.type === "safetyCheck") {
    if ((0, import_chunk_pbteexar.HK)(t.decisionReason)) return "settings";
    return (0, import_chunk_pbteexar.xDr)(t.decisionReason) ? "uncertain" : "none";
  }
  if (t.decisionReason?.type !== "other") return "none";
  return IXn(e, n) ? "settings" : "uncertain";
}
function Ue(e, n) {
  let t = (0, import_chunk_pqb914sj.nj)(e, n, (0, import_chunk_4vsz8a99.Vd)(), "write");
  return !t.allowed && t.decisionReason?.type === "safetyCheck" && (0, import_chunk_pbteexar.xDr)(t.decisionReason);
}
function IXn(e, n) {
  let t = (0, import_path.resolve)(n, (0, import_chunk_z6pfqf6e.Pp)((0, import_chunk_cg8dqz0a.x)() === "windows" ? e.replaceAll("\\", "/") : e)), s = (0, import_chunk_p1ewvgeh.Ore)(t, [t]);
  return !s.safe && (0, import_chunk_pbteexar.HK)(s);
}
function re(e, n) {
  if (e.length > De) return /[*?[]/.test(e);
  if ((0, import_chunk_z6pfqf6e._P)(e) === -1) return false;
  let t = e.split(/[\\/]/), s = t.at(-1) ?? "", o = (0, import_chunk_p1ewvgeh.FSs)();
  if ((0, import_chunk_b9qnxh4s.ei)(e) || (0, import_chunk_z6pfqf6e.Pp)(e).startsWith("~") || /[[\]]/.test(e.replaceAll(/\[\[\.\.\.[\w-]+\]\]|\[[!^]?[\w.-]*\]/g, "")) || t.some((f) => v(f, f.startsWith(".") && (!f.includes("[") || /\[(?:[!^]|[^\]]*\.)/.test(f)) ? [...o, ".."] : o)) || s.startsWith(".") && v(s, YWo().globalConfigNames) || v(s, [...import_chunk_p1ewvgeh.XEt, ...U]) && IXn((0, import_path.dirname)(e), n)) return true;
  let l = (0, import_chunk_p1ewvgeh.Yo)((0, import_path.resolve)(n, (0, import_chunk_z6pfqf6e.Pp)(e))).split(/[\\/]/), r = l.slice(0, -1).findIndex((f) => /^\*\*+$/.test(f)), { files: u, dirs: d } = (0, import_chunk_p1ewvgeh.JEt)(), c = (0, import_chunk_p1ewvgeh.MSo)((0, import_chunk_p1ewvgeh.fw)());
  return [...u, ...d, ...c.bodies, ...c.vouchers, (0, import_chunk_wnt799dt.Joo)()].some((f) => {
    let g = (0, import_chunk_p1ewvgeh.Yo)(f).split(/[\\/]/);
    if (r === -1) return D(l, g) && g.some((h, A) => l[A] !== h);
    let S = g.slice(r);
    return D(l.slice(0, r), g.slice(0, r)) && S.some((h, A) => !S.slice(0, A).some((m) => m.startsWith(".")) && D(l.slice(r + 1), S.slice(A)));
  });
}
function D(e, n) {
  return n.every((t, s) => e[s] === t || v(e[s] ?? "", [t]));
}
function v(e, n) {
  let t = (0, import_chunk_p1ewvgeh.Yo)(e);
  if ((0, import_chunk_z6pfqf6e._P)(t) === -1) return false;
  let s = t.replaceAll(/\[[!^]?[\w.-]*\]/g, "?"), o = (0, import_chunk_7cfjrnwy.Mt)(t, "]") > 1, l = s.slice(0, (0, import_chunk_z6pfqf6e._P)(s)), r = s.lastIndexOf("*"), u = s.slice(r + 1), d = new RegExp(`^${(0, import_chunk_7cfjrnwy.fo)(r === -1 ? s : `${s.slice(0, s.indexOf("*"))}*${u}`).replaceAll("\\*", ".*").replaceAll("\\?", ".")}$`, "s");
  return n.some((c) => {
    let f = (0, import_chunk_p1ewvgeh.Yo)(c);
    return (o ? f.startsWith(l) : d.test(f)) && (t.startsWith(".") || !o && /[^?]/.test(u) || !f.startsWith("."));
  });
}
function ce(e, n) {
  let [t, ...s] = e.argv;
  if (t === "popd") return "unknown";
  if (t !== "cd" && t !== "chdir" && t !== "pushd") return;
  let o = [], l = false;
  for (let c of s) {
    if (!l) {
      if (c === "--") {
        l = true;
        continue;
      }
      if (c.startsWith("-") && c !== "-") continue;
      l = true;
    }
    o.push(c);
  }
  let r = o[0];
  if (r === void 0) return t === "pushd" ? "unknown" : oe(n, [(0, import_os.homedir)()]);
  if (o.length > 1 || r === "-" || t === "pushd" && /^[+-]\d+$/.test(r) || (0, import_chunk_b9qnxh4s.ei)(r) || H(r, n[0] ?? (0, import_os.homedir)()) === "uncertain") return "unknown";
  let u = (0, import_chunk_z6pfqf6e.Pp)(r), d = (0, import_path.isAbsolute)(u) ? [u] : n.map((c) => (0, import_path.resolve)(c, u));
  return oe(n, [...d, ...d.flatMap($e)]);
}
function de(e) {
  let [n, ...t] = e.argv;
  if (n !== "cd" && n !== "chdir" && n !== "pushd") return true;
  if (!(0, import_chunk_sghy0qej.Pe)(ye, { safe: true })) return true;
  let s = [], o = false;
  for (let l of t) {
    if (!o) {
      if (l === "--") {
        o = true;
        continue;
      }
      if (l.startsWith("-") && l !== "-") {
        if (!/^-[qsLP]+$/.test(l)) return false;
        continue;
      }
      o = true;
    }
    s.push(l);
  }
  return s.length < 2 && (s[0] === void 0 || !/^[+-]\d+$/.test(s[0]));
}
function me(e) {
  let n = false;
  for (let t of e.split(/[\\/]/)) if (t === "..") {
    if (n) return true;
  } else if (t !== "" && t !== ".") n = true;
  return false;
}
function $e(e) {
  try {
    return (0, import_chunk_w578pjby.Ei)(e).filter((n) => n !== e);
  } catch {
    return [];
  }
}
function oe(e, n) {
  let t = (0, import_chunk_4smdap7r.M)([...e, ...n]);
  return t.length > Ee ? "unknown" : t;
}
