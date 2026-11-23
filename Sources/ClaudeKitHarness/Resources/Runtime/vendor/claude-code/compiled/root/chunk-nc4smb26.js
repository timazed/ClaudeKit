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
var chunk_nc4smb26_exports = {};
__export(chunk_nc4smb26_exports, {
  IXt: () => IXt,
  xf: () => xf
});
module.exports = __toCommonJS(chunk_nc4smb26_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var S = /\x1b(?:\[[0-?]*[ -/]*[@-~]|[ -/]+[0-~])|\x9b[0-?]*[ -/]*[@-~]|[\x00-\x08\x0e-\x1f\x7f-\x9f]/g, L = /[\x00-\x08\x0e-\x1f\x7f-\x9f]/, x = /([\t\n \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+)/, K = /secret|key|token|passw|credential|bearer|basic|digest|sshpass|authorization|:\/\/|-----/i, W = /\x1b[\]PX^_]|[\x90\x98\x9d-\x9f]/, P = /[^\v\f\r][\v\f\r]+[^\v\f\r]/;
function Z(e, s) {
  let t = s(e);
  if (!L.test(e) || t.length > 1048576) return t;
  let n = e.split(x), r = t.split(x), c = n.map((a) => a.replace(S, "")), f = c.filter((a, i) => i % 2 === 0 && a !== ""), E = s(c.join("")).split(x).filter((a, i) => i % 2 === 0 && a !== "");
  if (r.length !== n.length || E.length !== f.length) return t;
  let _ = 0;
  for (let [a, i] of n.entries()) {
    let u = c[a] ?? "";
    if (a % 2 === 1 || u === "") continue;
    let d = E[_++] ?? "", R = r[a] ?? "";
    if (d === u || d === R.replace(S, "") || P.test(u) || W.test(i)) continue;
    let [h, T] = C(u, d);
    if (h === T || K.test(u.slice(h, T + 3))) continue;
    let A = w(i, h), p = w(i, T - 1) + 1;
    while (/[\x1b\x9b]/.test(i[A - 1] ?? "")) A--;
    if (R !== i) {
      let [O, y] = C(i, R);
      A = Math.min(A, O), p = Math.max(p, y);
    }
    r[a] = i.slice(0, A) + i.slice(A, p).replace(/[^\v\f\r]+/g, "[REDACTED]") + i.slice(p);
  }
  return r.join("");
}
function C(e, s) {
  let t = 0;
  while (t < e.length && e[t] === s[t] && (!s.startsWith("[REDACTED", t) || e.startsWith("[REDACTED]", t))) t++;
  let n = e.length, r = s.length;
  while (n > t && r > t && e[n - 1] === s[r - 1] && s[r - 1] !== "]") n--, r--;
  return [t, n];
}
function w(e, s) {
  let t = s;
  for (let n of e.matchAll(S)) {
    if (n.index > t) break;
    t += n[0].length;
  }
  return t;
}
var B = `[${import_chunk_kx2fp6pc.b1e}]*`, l = `[\\s${import_chunk_kx2fp6pc.b1e}]`, o = String.raw`\t\n\v\f\r \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000`, z = `[^=:${o}]`, m = `(?:[${o}]${l}*)?`, g = "[A-Za-z0-9_-]", D = `${g}{8}${g}*`, b = `\\.eyJ${D}\\.${D}`, v = new RegExp(`((?<!${g})(?=${g}+${b})${g}*?)eyJ${D}${b}`, "g"), G = /(?:(?<![A-Za-z0-9](?<!\[[0-9;]{0,12}m))(?:sk-(?=[A-Za-z_-]{0,64}[0-9])[A-Za-z0-9_-]{20,}|ya29\.[A-Za-z0-9._-]{20,})|hv[sbr]\.[A-Za-z0-9_-]{24,}|AT[ACS]TT3[A-Za-z0-9_=-]{24,}|BBDC-[A-Za-z0-9+/=]{44,}|npm_[A-Za-z0-9]{36,}|pypi-AgE[A-Za-z0-9_-]{50,}|whsec_[A-Za-z0-9+/_-]{32,}|AGE-SECRET-KEY-1[0-9A-Z]{58,})(?:[._-](?=[A-Za-z_-]{0,64}[0-9])[A-Za-z0-9_-]{20,})*/g, M = new RegExp(`${G.source}(?=([^=:\\s]{0,64}${l}{0,16}[=:])?)`, "g"), V = /(?:(?:api|access|private|client|account|secret)[_-]?)?(?:secret|key)|token|pass(?:word|wd|code|phrase)?|pwd|credential|bearer|authorization/gi;
function J(e, s = "") {
  let t = e.endsWith("=") ? "=" : "";
  if (t === "" && s === "") return "[REDACTED-PAT]";
  let n = e + (/^[\w.-]+/.exec(s)?.[0] ?? ""), r = /* @__PURE__ */ new Set();
  for (let { 0: f, index: E } of n.matchAll(V)) {
    if (e.startsWith("AGE-SECRET-KEY-1") && E < 16) continue;
    let _ = e.slice(E, E + f.length);
    r.delete(_), r.add(_);
  }
  let c = [...r].join("_") + t;
  return r.size === 0 || c === "" && s.startsWith("-") ? "[REDACTED-PAT]" : `[REDACTED-PAT]-${c}`;
}
var j = { keyValue: new RegExp("((?:^|[\\s=:])(?=[^=:\\s]+\\s*[=:]\\s*\\S)[^=:\\s]*?(?:secret|key|token|password|credential)[^=:\\s]*\\s*[=:]\\s*)\\S+", "gi"), bearer: /(Bearer )\S+/gi, basicAuth: /(Authorization:\s*Basic\s+)\S+/gi }, Y = { keyValue: new RegExp(`((?:^|[=:${o}])(?=[${import_chunk_kx2fp6pc.b1e}\\ufeff]*[^=:\\s${import_chunk_kx2fp6pc.b1e}])(?=${z}+${m}[=:]${l}*[^${o}])${z}*?(?:${(0, import_chunk_kx2fp6pc.Qft)("secret|key|token|password|credential")})${z}*${m}[=:]${l}*)[^${o}]+`, "gi"), bearer: new RegExp(`((?:${(0, import_chunk_kx2fp6pc.Qft)("Bearer")})${import_chunk_kx2fp6pc.r3n} [${import_chunk_kx2fp6pc.b1e}\\ufeff]*)[^${o}]+`, "gi"), basicAuth: new RegExp(`((?:${(0, import_chunk_kx2fp6pc.Qft)("Authorization")})${import_chunk_kx2fp6pc.r3n}:${l}*(?:${(0, import_chunk_kx2fp6pc.Qft)("Basic")})${B}\\s${l}*)[^${o}]+`, "gi") }, F = /[\p{Cf}\p{Default_Ignorable_Code_Point}\p{Cs}\u2800\ufeff]/u;
function xf(e) {
  return Z(U(e), H);
}
function H(e) {
  let s = k(e, j);
  return (F.test(e) ? k(s, Y) : s).replace(M, J);
}
var I = /(-----(?:BEGIN|END)(?:(?!--)[ A-Z0-9-]){0,100}?PRIVATE KEY(?: BLOCK)?-----)/, N = (e) => e.startsWith("-----END");
function IXt() {
  let e = false;
  return (s) => s.split(I).map((t, n) => {
    if (n % 2 === 1) return e = !N(t), t;
    return e ? t.replace(/\S+/g, "[REDACTED]") : t;
  }).join("");
}
function U(e) {
  let s = e.split(I), t = s.findLastIndex((n, r) => r % 2 === 1 && N(n)) + 1;
  return IXt()(s.slice(0, t).join("")) + s.slice(t).join("");
}
function k(e, s) {
  return e.replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/)[^@/\s]+@/gi, "$1***:***@").replace(s.keyValue, "$1[REDACTED]").replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/\*\*\*:\*\*\*@)(?:[^@/?#\s"',;&>|)\]}`]*@)+/gi, "$1").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "[REDACTED]").replace(s.bearer, "$1[REDACTED]").replace(v, "$1[REDACTED-JWT]").replace(/(gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{82,}|gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]{20,}(?:\.[0-9a-z]{9})?|xox[a-z]-[A-Za-z0-9+/=%_-]{10,}|xapp-[A-Za-z0-9_-]{10,}|xwfp-[A-Za-z0-9_-]{10,}|[Hh][Oo][Oo][Kk][Ss]\.[Ss][Ll][Aa][Cc][Kk]\.[Cc][Oo][Mm]\/(?:services|workflows|triggers)\/[A-Za-z0-9+/_-]{20,}|sq0(?:atp|csp)-[A-Za-z0-9_-]{22,}|EAAA[A-Za-z0-9+/=%_-]{56,}|AIza[A-Za-z0-9_-]{35}|GOCSPX-[A-Za-z0-9_-]{28}|[sr]k_(?:live|test|prod)_[A-Za-z0-9]{24,})/g, "[REDACTED-PAT]").replace(s.basicAuth, "$1[REDACTED]").replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/)(?!\*\*\*:\*\*\*%40)(?:\*\*\*:\*\*\*@)?(?![^@/?#\s"',;&>|)\]}`]*@)(?:[^@/?#\s"',;&<>|)\]{}`[]*["'`<>{}[\]][^@/?#\s,;&|{}"'`<>[\]()]*(%40)|[^@/?#\s"',;&<>|)\]}`[]+(%40)|(?=[^@/?#\s"',;&<>|)\]}`[]*?(?:%|:[^@/?#\s"',;&<>|)\]}`[]))[^@/?#\s"',;&<>|)\]}`[]+(?=\[REDACTED[-A-Z]*\]))/gi, (t, n, r, c) => `${n}***:***${r ?? c ?? ""}`);
}
