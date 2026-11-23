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
var chunk_ara52wcx_exports = {};
__export(chunk_ara52wcx_exports, {
  $ba: () => $ba,
  $kn: () => $kn,
  Bba: () => Bba,
  DXn: () => DXn,
  Fba: () => Fba,
  Gba: () => Gba,
  Jzs: () => Jzs,
  LXn: () => LXn,
  Lba: () => Lba,
  Nba: () => Nba,
  Qzs: () => Qzs,
  Uba: () => Uba,
  Ukn: () => Ukn,
  Wba: () => Wba,
  Xzs: () => Xzs,
  ZWo: () => ZWo,
  ejo: () => ejo,
  i2r: () => i2r,
  jba: () => jba,
  s2r: () => s2r,
  tjo: () => tjo,
  xKe: () => xKe
});
module.exports = __toCommonJS(chunk_ara52wcx_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ecxdb48a = require("/$bunfs/root/chunk-ecxdb48a.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var import_util = require("util");
var import_path2 = __toESM(require("path"));
var $kn = /* @__PURE__ */ new Set([import_chunk_hn3cwwzt.ke, import_chunk_rb36kwbn.yt, import_chunk_k883m4fq.De, import_chunk_rb36kwbn.Dt, import_chunk_rb36kwbn.lt]);
var xKe = { approvalAttested: false, modeDecidedByHost: false };
function s2r(n, e) {
  if (!e) return n;
  return { ...n, sandbox: n.sandbox === "required" || e.sandbox === "required" ? "required" : "tool_default", background: n.background === "forbidden" || e.background === "forbidden" ? "forbidden" : "tool_default", pinCwd: n.pinCwd || e.pinCwd === true, scrubCredentialEnv: n.scrubCredentialEnv || e.scrubCredentialEnv === true, maxTimeoutMs: H(n.maxTimeoutMs, e.maxTimeoutMs) };
}
function H(n, e) {
  if (e === void 0 || e <= 0) return n;
  return n === void 0 ? e : Math.min(n, e);
}
var I = "nested remote execution is not supported: a served call cannot name another machine.", ejo = "_simulatedSedEdit", N = /* @__PURE__ */ new Map();
function DXn() {
  return N;
}
function tjo(n, e) {
  if (e.size === 0) return n;
  let r = new Set(e.values());
  return Object.fromEntries(Object.entries(n).filter(([t]) => !r.has(t)).map(([t, i]) => [e.get(t) ?? t, i]));
}
function Wba(n, e) {
  if (e.size === 0) return n;
  let r = new Map([...e].map(([t, i]) => [i, t]));
  return (0, import_chunk_9zdrdv25.iP)(n, (t, i) => r.get(i) ?? i);
}
function jba(n, e) {
  if (n === void 0) return;
  let r = n[import_chunk_syr33dp2.io] === e ? (0, import_chunk_qwbhh2k3.Pn)(n, [import_chunk_syr33dp2.io]) : n;
  return Object.keys(r).length === 0 ? void 0 : r;
}
function LXn(n, e, r) {
  if (import_chunk_syr33dp2.io in n) return I;
  let t = e.find((i) => Boolean(n[i]));
  return t === void 0 ? void 0 : (0, import_chunk_ecxdb48a.a2r)({ field: t, targetName: r });
}
function Ukn(n, e) {
  return (0, import_chunk_qwbhh2k3.Pn)(n, [ejo, ...e]);
}
function Gba(n, e) {
  return Object.fromEntries(Object.keys(e).filter((r) => Object.hasOwn(n, r)).map((r) => [r, e[r]]));
}
function Lba(n) {
  if (n.tool.name !== import_chunk_rb36kwbn.Dt && n.tool.name !== import_chunk_rb36kwbn.lt) return;
  let e = n.input.file_path;
  if (typeof e !== "string" || (0, import_chunk_n2dbhmj2.nF)(e)) return;
  let r = W(e, n.description, n.sessionDir());
  if (r === void 0) return;
  let t = n.readFileState.get(r);
  return t !== void 0 && !t.isPartialView && (t.offset ?? 1) <= 1 ? t.readBaseline : void 0;
}
function W(n, e, r, t = import_path2.default) {
  if (e === void 0 || e.project_sync !== "two_way" && e.project_sync !== "upload_only") return;
  let i = e.platform === "win32" ? import_path2.win32 : import_path2.posix, a = e.home_dir !== void 0 && (n === "~" || n.startsWith("~/")) ? i.join(e.home_dir, n.slice(2)) : n, c = w(e, i);
  if (!i.isAbsolute(a) || !i.isAbsolute(c)) return;
  let d = i.relative(c, a);
  if (!y(i, d)) return;
  let s = import_path2.posix.join(r, ...d.split(i.sep));
  return y(t, t.relative(r, s)) ? s : void 0;
}
function w(n, e) {
  return n.sync_root !== void 0 && e.isAbsolute(n.sync_root) && z(e, n.sync_root, n.working_dir) ? n.sync_root : n.working_dir;
}
function y(n, e) {
  return e !== "" && e.split(n.sep)[0] !== ".." && !n.isAbsolute(e);
}
function z(n, e, r) {
  let t = n.relative(e, r);
  return t === "" || y(n, t);
}
function Xzs(n, e, r) {
  return D(n).every(([t, i]) => (0, import_util.isDeepStrictEqual)(h(t, i, r), h(t, e[t], r))) && D(e).every(([t, i]) => n[t] !== void 0 || i === false);
}
function Nba(n, e, r) {
  return (0, import_util.isDeepStrictEqual)(O(n, r), O(e, r));
}
function O(n, e) {
  return Object.fromEntries(D(n).map(([r, t]) => [r, h(r, t, e)]));
}
function h(n, e, r) {
  return n === "file_path" && typeof e === "string" && r === "darwin" ? e.normalize("NFC") : e;
}
function D(n) {
  return Object.entries(n).filter(([, e]) => e !== void 0);
}
function f(n) {
  return n === "win32" ? import_path.win32 : import_path.posix;
}
function Jzs(n) {
  let e = f(n.platform), r = n.copy_of;
  return e.isAbsolute(n.working_dir) ? { workingDir: n.working_dir, homeDir: n.home_dir !== void 0 && e.isAbsolute(n.home_dir) ? n.home_dir : void 0, mirroredDir: w(n, e), platform: n.platform, ...r !== void 0 && f(r.platform).isAbsolute(r.dir) && { copyOf: { workingDir: r.dir, homeDir: r.home_dir !== void 0 && f(r.platform).isAbsolute(r.home_dir) ? r.home_dir : void 0, mirroredDir: r.dir, platform: r.platform } } } : void 0;
}
function ZWo(n) {
  let e = n === void 0 ? void 0 : Jzs(n);
  if (e === void 0) return { kind: "no_announced_dir" };
  if (e.platform === "win32") return { kind: "windows_machine" };
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? { kind: "windows_session" } : { kind: "in_announced_dir", dir: e.workingDir };
}
function i2r(n, e) {
  let r = n.file_path;
  if (typeof r !== "string") return n;
  let t = v(r, e);
  return t === void 0 ? n : { ...n, file_path: t };
}
function v(n, e) {
  let r = f(e.platform), t = n.trim();
  if (t === "~" || t.startsWith("~/")) return e.homeDir === void 0 ? void 0 : r.join(e.homeDir, t.slice(2));
  if (t === "") return r.normalize(e.workingDir);
  let i = p(t, r);
  if (r.isAbsolute(i)) return r.normalize(i);
  let a = r === import_path.win32 ? g(i) : void 0;
  return a !== void 0 && a !== g(e.workingDir) ? void 0 : r.resolve(e.workingDir, i);
}
function g(n) {
  let e = /^[a-z]:/i.exec(n);
  return e === null ? void 0 : (0, import_chunk_p1ewvgeh.Yo)(e[0]);
}
function U(n, e) {
  let r = n.replace(/^\\\\[?.]\\UNC\\/i, "\\\\").replace(/^\\\\[?.]\\(?=[a-z]:)/i, "");
  return /^\\(?!\\)/.test(r) ? import_path.win32.resolve(e, r) : r;
}
function b(n, e) {
  let r = (0, import_chunk_z6pfqf6e.tR)(n).split("/");
  if ((0, import_chunk_z6pfqf6e.lA)(r[1] ?? "") === "volumes" && (0, import_chunk_z6pfqf6e.lA)(r[2] ?? "") === e) return b(["", ...r.slice(3)].join("/") || "/", e);
  return ["tmp", "var", "etc"].includes((0, import_chunk_z6pfqf6e.lA)(r[1] ?? "")) ? ["", "private", ...r.slice(1)].join("/") : r.join("/");
}
function B(n) {
  let e = b(n, "macintosh hd"), [r, t = ""] = e.split("/").slice(1, 3).map(import_chunk_z6pfqf6e.lA);
  return r === "volumes" && t !== "" ? [e, b(e, t)] : [e];
}
function C(n) {
  let e = /^\/proc\/(?:self|thread-self)\/root(?=\/|$)/.exec(n);
  return e === null ? n : C(n.slice(e[0].length) || "/");
}
function p(n, e) {
  return e === import_path.win32 && /^\/[a-z]\//i.test(n) ? (0, import_chunk_n2dbhmj2.rce)(n) : n;
}
var q = 4096;
function L(n, e) {
  return e === import_path.posix && n.length >= q;
}
function _(n, e, r) {
  let t = r.normalize(n);
  if (L(t, r)) return [t];
  return r === import_path.win32 ? [U(t, e.workingDir)] : e.platform === "darwin" ? (0, import_chunk_4smdap7r.M)([t, S("darwin")(t)].flatMap(B)) : [C(t)];
}
function k(n, e, r) {
  let t = n.split(r.sep), i = S(e.platform), a = r === import_path.win32 ? /\\+$/ : /\/+$/, c = (d) => _(d, e, r)[0].replace(a, "").split(r.sep);
  return [[e.mirroredDir, "./"], [e.homeDir, "~/"]].flatMap(([d, s]) => d === void 0 ? [] : [[c(d), s]]).filter(([d]) => t.length > d.length && d.every((s, o) => i(s) === i(t[o]))).map(([d, s]) => [s, t.slice(d.length).join("/")]).filter(([, d]) => d !== "").map(([d, s]) => `${d}${s}`);
}
function Fba(n, e) {
  let r = f(e.platform), t = p(n, r);
  return r.isAbsolute(t) ? k(_(t, e, r)[0], e, r)[0] : void 0;
}
var K = [["/bin", "/usr/bin"], ["/sbin", "/usr/sbin"], ["/lib", "/usr/lib"], ["/lib32", "/usr/lib32"], ["/lib64", "/usr/lib64"], ["/libx32", "/usr/libx32"], ["/var/run", "/run"], ["/var/lock", "/run/lock"]];
function R(n, e, r) {
  return n === e || n.startsWith(`${e}/`) ? [`${r}${n.slice(e.length)}`] : [];
}
function T(n) {
  return K.flatMap(([e, r]) => [...R(n, e, r), ...R(n, r, e)]);
}
function X(n, e) {
  return e === "darwin" ? [n.replace(/^\/private(?=\/(?:tmp|var|etc)(?:\/|$))/i, "")].filter((r) => r !== n) : e === "linux" ? (0, import_chunk_4smdap7r.M)(T(n).flatMap((r) => [r, ...T(r)])) : [];
}
function Qzs(n, e) {
  let r = f(e.platform), t = v(n, e);
  if (t === void 0 || !r.isAbsolute(t)) return [];
  let i = _(t, e, r).flatMap((o) => [o, ...X(o, e.platform)]), a = S(e.platform), c = r.normalize(p(n.trim(), r)), d = i.flatMap((o) => k(o, e, r)), s = e.copyOf;
  return (0, import_chunk_4smdap7r.M)([...[...d, ...r === import_path.win32 ? [] : i].flatMap((o) => [o, a(o)].flatMap((l) => e.platform === "darwin" ? [l, l.normalize("NFC"), l.normalize("NFD")] : [l])).filter((o) => o !== c), ...s === void 0 ? [] : i.flatMap((o) => k(o, { ...e, mirroredDir: e.workingDir, homeDir: void 0 }, r)).map((o) => f(s.platform).join(s.workingDir, o.slice(2))).flatMap((o) => [o, ...Qzs(o, s)])]);
}
function $ba(n, e) {
  let r = f(e.platform), t = p(n.trim(), r);
  if (!r.isAbsolute(t)) return;
  let i = r === import_path.win32 ? t.replace(/^[\\/]{2}[?.][\\/]UNC[\\/]/i, "\\\\").replace(/^[\\/]{2}[?.][\\/](?=[a-z]:)/i, "") : t, a = i.split(r === import_path.win32 ? /[\\/]/ : "/"), c = r === import_path.win32 && /^[\\/]{2}[?.][\\/]/.test(i) ? 3 : 0, d = a.slice(c).findIndex((P) => /[*?[{]/.test(P)), s = d === -1 ? -1 : d + c, l = (s === -1 ? a : a.slice(0, s)).join(r.sep) || r.sep;
  return { root: r === import_path.win32 && /^[a-z]:$/i.test(l) ? `${l}${r.sep}` : l, rest: s === -1 ? "" : a.slice(s).join("/") };
}
function S(n) {
  return n === "win32" ? (e) => e.toUpperCase().toLowerCase() : n === "darwin" ? (e) => (0, import_chunk_z6pfqf6e.lA)(e.normalize("NFC")) : (e) => e;
}
var G = /^\/dev\/(?:fd|stdin|stdout|stderr)(?=\/|$)/, V = /^\/proc\/(?:self|thread-self|\d+)\/(?:task\/\d+\/)?(?:cwd|root|fd|exe|map_files)(?=\/|$)/;
function Uba(n, e) {
  let r = v(n, e);
  if (e.platform !== "win32") {
    if (r === void 0) return "home_unknown";
    if (L(r, import_path.posix)) return "too_long";
    return _(r, e, import_path.posix).some((l) => G.test(l) || e.platform !== "darwin" && V.test(l)) ? "magic_link" : void 0;
  }
  let t = p(n.trim(), import_path.win32), i = g(t);
  if (!import_path.win32.isAbsolute(t) && i !== void 0 && i !== g(e.workingDir)) return "other_drive_relative";
  if (r === void 0) return "home_unknown";
  let a = import_path.win32.normalize(t);
  if (/^\\\\[?.]\\(?![a-z]:\\|UNC\\)/i.test(a) || (0, import_chunk_z6pfqf6e.C$)(a)) return "nt_device_namespace";
  let c = a.replace(/^\\\\[?.]\\UNC\\/i, "\\\\").replace(/^\\\\[?.]\\(?=[a-z]:)/i, ""), d = /^\\\\[^\\]+\\[^\\]+\$(?=\\|$)/.exec(c)?.[0];
  if (d !== void 0 && ![e.workingDir, e.homeDir].some((l) => l !== void 0 && (0, import_chunk_p1ewvgeh.Yo)(import_path.win32.normalize(l)).startsWith(`${(0, import_chunk_p1ewvgeh.Yo)(d)}\\`))) return "administrative_share";
  let s = c.replace(/^\\\\/, "");
  if (s.includes(":", /^[a-z]:/i.test(s) ? 2 : 0)) return "colon_past_drive_position";
  if (s.split("\\").some((l) => (0, import_chunk_z6pfqf6e.lx)(l) && !/^[^. ]+\./.test(l))) return "dos_device_name";
  let o = (0, import_chunk_p1ewvgeh.QUn)(s.replace(/~(?=\d)/g, "-"));
  return o === void 0 || o === "device_path_prefix" || o === "unc_or_webdav_form" || o === "tilde_digit" || o === "dos_device_suffix" ? void 0 : o;
}
var Bba = { nt_device_namespace: "an NT device-namespace path", colon_past_drive_position: "a name with an alternate-data-stream colon", trailing_dot_or_whitespace: "a name ending in a dot or whitespace", dot_run_segment: "a path with a segment of three or more dots", other_drive_relative: "a path relative to another drive's current directory", administrative_share: "a path through a hidden or administrative share", dos_device_name: "a path that names a DOS device", magic_link: "a path through an open file descriptor or a process's /proc link", too_long: "a path too long for a Mac or Linux machine to open", home_unknown: "a path from the machine's home folder, which this session does not know" };
