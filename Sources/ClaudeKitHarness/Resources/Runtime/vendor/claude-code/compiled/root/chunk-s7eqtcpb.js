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
var chunk_s7eqtcpb_exports = {};
__export(chunk_s7eqtcpb_exports, {
  Dsn: () => Dsn,
  EPi: () => EPi,
  Kwt: () => Kwt,
  W9e: () => W9e,
  dps: () => dps,
  eV: () => eV,
  kPi: () => kPi,
  lps: () => lps,
  vPi: () => vPi,
  z_r: () => z_r
});
module.exports = __toCommonJS(chunk_s7eqtcpb_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
var import_path = require("path");
var D = /[\\^$.*+?()[\]{}|]/g, F = RegExp(D.source);
function H(e) {
  return e = (0, import_chunk_04nf05xp.uJ)(e), e && F.test(e) ? e.replace(D, "\\$&") : e;
}
var _ = H;
var kPi = [import_chunk_p1ewvgeh.m2e, import_chunk_xcgcdx61.uOe, import_chunk_xcgcdx61.txt, import_chunk_2nv4wrez.Wks];
function A() {
  return [(0, import_os.homedir)(), (0, import_chunk_2gtmjt3y.Nl)() ?? "", (0, import_chunk_hazyxdac.qde)() ?? "", ...(0, import_chunk_psw95195.rve)() ? ["", ""] : [(0, import_chunk_c203g5kd.C0o)(), (0, import_chunk_c203g5kd.ry)()], import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_CREDS_FILE ?? "", import_chunk_c203g5kd.s.TMPDIR ?? "", ...(0, import_chunk_psw95195.rve)() ? [d("TMPDIR") ?? ""] : [], d("APPDATA") ?? "", d("LOCALAPPDATA") ?? ""].join("\0");
}
var EPi = (0, import_chunk_839h1d5e.Co)(() => {
  let e = (0, import_chunk_p1ewvgeh.fw)(), o = (0, import_chunk_4smdap7r.M)([...(0, import_chunk_psw95195.rve)() ? [] : [(0, import_path.dirname)((0, import_chunk_c203g5kd.C0o)())], (0, import_os.homedir)()]);
  return eV([...(0, import_chunk_p1ewvgeh.jEt)(), ...e.flatMap((t) => [(0, import_path.join)(t, import_chunk_p1ewvgeh.kRe), (0, import_path.join)(t, import_chunk_p1ewvgeh.J0e)]), ...o.flatMap((t) => import_chunk_p1ewvgeh.cdn.map((r) => (0, import_path.join)(t, r))), ...e.map((t) => (0, import_path.join)(t, import_chunk_p1ewvgeh.aYe)), ...import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_CREDS_FILE ? [S(import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_CREDS_FILE)] : []]);
}, A), y = (0, import_chunk_839h1d5e.Co)(() => {
  let e = eV(j()), o = [...EPi(), ...eV([(0, import_path.join)((0, import_os.homedir)(), ".claude", "state", "unattended-serving-consent.json")]), ...eV([(0, import_path.join)((0, import_os.homedir)(), ".claude", "state", "settings-review.json")]), ...eV((0, import_chunk_p1ewvgeh.fw)().flatMap((t) => [(0, import_path.join)(t, "state", "device-mcp-consent.json"), (0, import_path.join)(t, "state", "device-mcp-snapshot.json")])), ...eV((0, import_chunk_p1ewvgeh.fw)().flatMap((t) => kPi.map((r) => (0, import_path.join)(t, r)))), ...eV((0, import_chunk_p1ewvgeh.fw)().flatMap((t) => [(0, import_chunk_d55td748.vpo)(t), (0, import_chunk_d55td748.TPi)(t), (0, import_chunk_d55td748.Gae)(t)]))];
  return (0, import_chunk_pbteexar.Ls)([...o.flatMap((t) => [...lps((0, import_path.basename)(t)).flatMap((r) => [{ literal: (0, import_path.join)((0, import_path.dirname)(t), r), tail: "", place: r === (0, import_path.basename)(t) }, { literal: (0, import_path.join)((0, import_path.dirname)(t), r), tail: ".*", place: false }]), ...dps((0, import_path.basename)(t)).map((r) => ({ literal: (0, import_path.dirname)(t), tail: `/${r}`, place: false }))]), ...eV([...(0, import_chunk_p1ewvgeh.fw)().flatMap((t) => [(0, import_path.join)(t, "backups"), (0, import_chunk_d55td748.Lsn)(t), (0, import_chunk_d55td748.sje)(t), (0, import_path.join)(t, "state"), ...[]]), (0, import_path.join)((0, import_os.homedir)(), ".claude", "state", "served-calls"), ...(0, import_chunk_cg8dqz0a.x)() === "macos" ? [(0, import_path.join)((0, import_os.homedir)(), "Library", "Keychains")] : [], ...(0, import_chunk_cg8dqz0a.x)() === "windows" ? G() : []]).map((t) => ({ literal: t, tail: "/**", place: true })), ...eV((0, import_chunk_p1ewvgeh.fw)().map((t) => (0, import_chunk_v6cdm8tp.H0l)(t))).flatMap((t) => [...lps("*.key").flatMap((r) => [{ literal: t, tail: `/${r}`, place: r === "*.key" }, { literal: t, tail: `/${r}.*`, place: false }]), ...dps("*.key").map((r) => ({ literal: t, tail: `/${r}`, place: false }))]), ...e.map((t) => ({ literal: t, tail: "/claude-resume-*", place: true })), ...(0, import_chunk_cg8dqz0a.x)() === "macos" ? eV(["/var/folders"]).map((t) => ({ literal: t, tail: "/*/*/*/claude-resume-*", place: true })) : [], ...(0, import_chunk_psw95195.rve)() ? e.flatMap((t) => [{ literal: t, tail: `/${C}*/.claude/**`, place: true }, { literal: t, tail: `/${C}*/*/claude-resume-*`, place: true }]) : []], ({ literal: t, tail: r, place: l }) => `${t}\0${r}\0${l}`);
}, A), Kwt = (0, import_chunk_839h1d5e.Co)(() => T(y()), A), z_r = (0, import_chunk_839h1d5e.Co)(() => {
  let e = y().filter((t) => t.place), o = e.filter((t) => t.tail === "/**").map((t) => `${t.literal}${import_path.sep}`);
  return T(e.filter((t) => !o.some((r) => t.literal.startsWith(r))));
}, A);
function T(e) {
  return (0, import_chunk_pbteexar.Ls)(e.map(({ literal: o, tail: t }) => ({ literal: o, tail: t })), ({ literal: o, tail: t }) => `${o}\0${t}`);
}
function G() {
  let { local: e, roaming: o } = k();
  return (0, import_chunk_4smdap7r.M)([...e.flatMap((t) => [(0, import_path.join)(t, "Microsoft", "Credentials"), (0, import_path.join)(t, "Microsoft", "Vault")]), ...o.flatMap((t) => [(0, import_path.join)(t, "Microsoft", "Credentials"), (0, import_path.join)(t, "Microsoft", "Vault"), (0, import_path.join)(t, "Microsoft", "Protect")])]);
}
function k() {
  return { local: (0, import_chunk_4smdap7r.M)([d("LOCALAPPDATA"), (0, import_path.join)((0, import_os.homedir)(), "AppData", "Local")].filter((e) => e !== void 0 && e !== "")), roaming: (0, import_chunk_4smdap7r.M)([d("APPDATA"), (0, import_path.join)((0, import_os.homedir)(), "AppData", "Roaming")].filter((e) => e !== void 0 && e !== "")) };
}
function d(e) {
  let o = (0, import_chunk_5e3gtsn9.Gc)();
  return o !== void 0 ? o[e] : import_chunk_c203g5kd.s[e];
}
function j() {
  let e = (0, import_chunk_4smdap7r.M)([(0, import_os.tmpdir)(), import_chunk_c203g5kd.s.TMPDIR, ...(0, import_chunk_psw95195.rve)() ? [d("TMPDIR")] : [], "/tmp", "/var/tmp"].filter((o) => o !== void 0 && (0, import_path.isAbsolute)(o)).map(S));
  return (0, import_chunk_psw95195.rve)() ? (0, import_chunk_4smdap7r.M)(e.map((o) => (0, import_path.basename)((0, import_path.dirname)(o)).startsWith(C) ? (0, import_path.dirname)((0, import_path.dirname)(o)) : o)) : e;
}
var C = "cc-tenant-";
function lps(e) {
  return [e, `.${e}`, `#${e}#`, `.#${e}`].flatMap((o) => [o, `${o}~`]);
}
function dps(e) {
  let o = e.lastIndexOf("."), t = o === -1 ? e : e.slice(0, o), r = o === -1 ? "" : e.slice(o);
  return [...["", ".", "#", ".#"].flatMap((l) => [`${l}${e}~*`, ...["BACKUP", "BASE", "LOCAL", "REMOTE"].map((g) => `${l}${t}_${g}_*${r === "" ? "" : `${r}*`}`)]), `#${e}#~*`];
}
function eV(e) {
  return (0, import_chunk_4smdap7r.M)(e.flatMap((o) => [o, ...(0, import_chunk_w578pjby.Ei)(o)]));
}
function vPi(e) {
  let o = (0, import_chunk_cg8dqz0a.x)(), t = o === "linux" || o === "wsl", r = /* @__PURE__ */ new Map();
  function l(a) {
    if (!r.has(a)) r.set(a, e.realpathIfExists(a));
    return r.get(a);
  }
  let g = /* @__PURE__ */ new Map();
  function R(a, u) {
    let c = g.get(a);
    if (c === void 0) c = e.namesIn(a) ?? [], g.set(a, c);
    let E = new RegExp(`^${_(u).replaceAll("\\*", "[^/]*")}$`);
    return c.filter((p) => E.test(p)).map((p) => (0, import_path.join)(a, p));
  }
  let h = new Set(eV((0, import_chunk_p1ewvgeh.fw)()).map(S)), O = /* @__PURE__ */ new Set([...h, ...eV([(0, import_os.homedir)()]).map(S)]), N = new Set(Kwt().filter(({ tail: a }) => a === "/**").flatMap(({ literal: a }) => [a, (0, import_path.dirname)(a)]).filter((a) => h.has((0, import_path.dirname)(a))));
  return (0, import_chunk_4smdap7r.M)(Kwt().flatMap(({ literal: a, tail: u }) => {
    let c = (0, import_path.dirname)(a), E = l(c) ?? (N.has(c) ? ((I) => I && (0, import_path.join)(I, (0, import_path.basename)(c)))(l((0, import_path.dirname)(c))) ?? void 0 : void 0);
    if (!E) return [];
    let p = (0, import_path.join)(E, (0, import_path.basename)(a));
    if (u === "") return [l(p) ?? p];
    if (u === "/**") return [`${p}/`];
    let L = `${u.startsWith("/") && O.has(a) ? l(a) ?? p : p}${u}`;
    if (!t) return [L];
    let P = (0, import_path.dirname)(L);
    return R(l(P) ?? P, (0, import_path.basename)(L));
  }));
}
function Dsn(e = Kwt()) {
  return (0, import_chunk_4smdap7r.M)(e.map(({ literal: o, tail: t }) => `${V((0, import_chunk_qebpc5de.QFe)((0, import_chunk_p1ewvgeh.TU)(o), { escapeGlobs: true }))}${t.endsWith("claude-resume-*") ? `${t}/**` : t}`));
}
function W9e(e) {
  if ((0, import_chunk_psw95195.rve)()) return false;
  return (0, import_chunk_4smdap7r.M)([e, (0, import_chunk_z6pfqf6e.tR)((0, import_chunk_n2dbhmj2.xt)(e))]).some(W);
}
function W(e) {
  let o = (0, import_chunk_n2dbhmj2.xt)(e), t = o.includes("\\") ? o.replaceAll("\\", "/") : o;
  if (!B(Kwt()).test(t)) return false;
  return (0, import_chunk_p1ewvgeh.Ia)(e, K(Dsn()), "read", "deny", { asSpelledOnly: true }) !== null;
}
var B = (0, import_chunk_839h1d5e.Co)((e) => new RegExp(`^(?:${(0, import_chunk_4smdap7r.M)(e.map(({ literal: o, tail: t }) => (t === "" || t === ".*" ? (0, import_path.dirname)(o) : o).replaceAll("\\", "/"))).map(_).join("|")})`, "i")), K = (0, import_chunk_839h1d5e.Co)((e) => ({ ...(0, import_chunk_4vsz8a99.Vd)(), alwaysDenyRules: { hostCredential: e.map((o) => (0, import_chunk_qebpc5de.yn)({ toolName: import_chunk_k883m4fq.De, ruleContent: o })) } }), (e) => e.join("\0"));
function V(e) {
  return e === "" || e.startsWith("/") ? `/${e}` : e;
}
function S(e) {
  return e.replace(/[\\/]+$/, "") || e;
}
