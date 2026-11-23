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
var chunk_p548ry42_exports = {};
__export(chunk_p548ry42_exports, {
  A1: () => A1,
  CE: () => CE,
  DEs: () => DEs,
  DTl: () => DTl,
  DV: () => DV,
  Eh: () => Eh,
  Elt: () => Elt,
  HEs: () => HEs,
  ICr: () => ICr,
  LTl: () => LTl,
  MCr: () => MCr,
  kGt: () => kGt,
  nTt: () => nTt,
  nzi: () => nzi,
  ovo: () => ovo,
  rzi: () => rzi,
  svo: () => svo,
  tTt: () => tTt,
  tzi: () => tzi,
  vun: () => vun,
  xjn: () => xjn
});
module.exports = __toCommonJS(chunk_p548ry42_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_os = require("os");
var import_path = require("path");
var X = /(^|\/)\.[^/]*$/, k = /(^|\/)\.(?!\.\/)(?!claude[^/]*\/|config\/)[^/]+\//i, Z = ["shell-snapshots", "session-env", "projects", "file-history", "backups", ...[]], Y = new RegExp(String.raw`(^|/)\.claude[^/]*/(?:${Z.join("|")})/`, "i");
function y(e) {
  let t = e.slice(e.lastIndexOf("/") + 1);
  return R.test(t) || t !== "" && !t.includes(".");
}
function b(e, t) {
  return { text: e, quote: t, start: 0, end: e.length };
}
var le = /* @__PURE__ */ new Set(["python3", "python", "bash", "sh", "node"]);
function J(e) {
  return le.has(e);
}
var HEs = /^(?:sh|bash|zsh|dash|ash|ksh\d*|mksh|rbash|fish|csh|tcsh|python(?:\d+(?:\.\d+)?)?|pypy\d*(?:\.\d+)?|node(?:js)?\d*|deno|bun|perl|ruby|irb|erb|php|lua|tclsh[\d.]*|wish[\d.]*|expect|m4|Rscript|R|script|osascript|pwsh|env)$/iu, Q = /^[A-Za-z_][A-Za-z0-9_]*\+?=/, ue = /^(?:~|\$HOME|\$\{HOME\})\//, ce = /^(?:\$HOME|\$\{HOME\})\//, de = /^(?:\$HOME|\$\{HOME\}|\$CLAUDE_PROJECT_DIR|\$\{CLAUDE_PROJECT_DIR\}|\$CLAUDE_PLUGIN_ROOT|\$\{CLAUDE_PLUGIN_ROOT\})$/, U = /^(?:\$CLAUDE_PROJECT_DIR|\$\{CLAUDE_PROJECT_DIR\})\//, q = /^(?:\$CLAUDE_PLUGIN_ROOT|\$\{CLAUDE_PLUGIN_ROOT\})\//, pe = /\$\{?CLAUDE_PLUGIN_ROOT\b/, fe = "${CLAUDE_PLUGIN_ROOT}", T = /[$~*?[\]()\{\}#!|&;<>`\\\p{Cc}\p{Cf}]|[^\S ]/u, K = /[\p{Cc}\p{Cf}]/u;
function he(e) {
  let t = [], n = 0;
  while (n < e.length) {
    if (e[n] === " ") {
      n += 1;
      continue;
    }
    let r = e[n], a = r === '"' || r === "'" ? r : null;
    if (a) {
      let s = e.indexOf(a, n + 1);
      if (s === -1) return null;
      let o = e.slice(n + 1, s), l = e[s + 1];
      if (l !== void 0 && l !== " ") {
        let i = s + 1;
        while (i < e.length && e[i] !== " ") {
          if (e[i] === '"' || e[i] === "'") return null;
          i += 1;
        }
        if (a !== '"' || !de.test(o)) return null;
        t.push({ text: o + e.slice(s + 1, i), quote: a, start: n, end: i }), n = i;
        continue;
      }
      t.push({ text: o, quote: a, start: n, end: s + 1 }), n = s + 1;
    } else {
      let s = n;
      while (s < e.length && e[s] !== " ") {
        if (e[s] === '"' || e[s] === "'") return null;
        s += 1;
      }
      t.push({ text: e.slice(n, s), quote: null, start: n, end: s }), n = s;
    }
  }
  return t;
}
function ge(e) {
  return e.quote === null ? ue : e.quote === '"' ? ce : null;
}
function h(e) {
  let t = ge(e);
  if (t !== null && t.test(e.text)) return { rest: e.text.replace(t, ""), hadPrefix: true, base: "home" };
  if (e.quote !== "'" && U.test(e.text)) return { rest: e.text.replace(U, ""), hadPrefix: true, base: "project" };
  if (e.quote !== "'" && q.test(e.text)) return { rest: e.text.replace(q, ""), hadPrefix: true, base: "plugin" };
  return { rest: e.text, hadPrefix: false, base: null };
}
var me = /[\s*?[\]]/u;
function _e(e, t) {
  return e.quote !== null || e.text.startsWith("~/") || !me.test(t);
}
var R = /\.(?:py|sh|bash|zsh|js|mjs|cjs|ts|rb|pl)$/iu, Ee = /* @__PURE__ */ new Set(["/usr/bin", "/bin", "/usr/local/bin", "/opt/homebrew/bin"]), g = /(^|\/)\.\.(\/|$)/;
function I(e) {
  return g.test(e.replace(/^(?:\.\.?\/)+/, ""));
}
function m(e) {
  if (e.quote === null && Q.test(e.text)) return false;
  let { rest: t, hadPrefix: n } = h(e);
  if (t.startsWith("-") || X.test(t) || k.test(t) || Y.test(t) || t.endsWith("/") || !y(t) && !T.test(t)) return false;
  return n || t.startsWith("/") || t.startsWith("./") || t.startsWith("../") || t.includes("/") && R.test(t);
}
function w(e) {
  let { rest: t } = h(e);
  return m(e) || t.includes("/") || R.test(t);
}
function A(e, t, n, r = { form: "shell", start: t.start, end: t.end }) {
  let { rest: a, base: s } = h(t), o = ee(s, n);
  if (o === null) return { kind: "opaque", reason: "shell_syntax" };
  return { kind: "script", interpreter: e, rawPath: t.text, resolvedPath: import_path.posix.resolve(n.hookCwd, o === "" ? a : `${o}/${a}`), site: r };
}
function ee(e, t) {
  switch (e) {
    case "home":
      return t.home;
    case "project":
      return t.projectDir;
    case "plugin":
      return t.pluginRoot ?? null;
    case null:
      return "";
  }
}
function be(e) {
  let [t, n] = e;
  if (t === void 0) return { interpreter: null, path: void 0, refusal: null };
  if (t.quote === null && t.text === "uv" && n?.text === "run") return { interpreter: null, path: void 0, refusal: "uv_project" };
  let r = t.text.toLowerCase();
  if (t.quote === null && J(r)) {
    let s = n !== void 0 && m(n) && e.slice(2).some(w);
    return { interpreter: r, path: n, refusal: s ? "ambiguous_program" : null };
  }
  let a = e.slice(1).some(w);
  if (m(t)) {
    let s = t.text.slice(t.text.lastIndexOf("/") + 1);
    if (n === void 0 && HEs.test(s)) return { interpreter: null, path: void 0, refusal: null };
    return { interpreter: null, path: t, refusal: a || n !== void 0 && !R.test(s) ? "ambiguous_program" : null };
  }
  return { interpreter: null, path: void 0, refusal: a ? "unsupported_interpreter" : null };
}
function tTt(e, t) {
  if ([e.command, ...e.args ?? []].some((c) => K.test(c))) return { kind: "opaque", reason: "shell_syntax" };
  if (t.pluginRoot === void 0 && [e.command, ...e.args ?? []].some((c) => pe.test(c))) return { kind: "opaque", reason: "shell_syntax" };
  let { pluginRoot: n } = t, r = e.args !== void 0 && n !== void 0 ? { ...e, command: v(e.command, n), args: e.args.map((c) => v(c, n)) } : e;
  if ((r.shell ?? t.defaultShell) !== "bash") return { kind: "opaque", reason: "unsupported_shell" };
  if (t.shellPrefix !== void 0 && t.shellPrefix !== "" && r.args === void 0) return { kind: "opaque", reason: "shell_prefix" };
  if (!t.hookCwd.startsWith("/") || !t.home.startsWith("/") || !t.projectDir.startsWith("/") || t.pluginRoot !== void 0 && (!t.pluginRoot.startsWith("/") || g.test(t.pluginRoot))) return { kind: "opaque", reason: "unsupported_platform" };
  if (r.args !== void 0) {
    let c = r.command.startsWith("/") && !g.test(r.command) ? import_path.posix.normalize(r.command) : r.command, L = c.startsWith("/") ? c.slice(0, c.lastIndexOf("/")) : null, C = L === null ? c.toLowerCase() : Ee.has(L.toLowerCase()) ? c.slice(c.lastIndexOf("/") + 1).toLowerCase() : "";
    if (C === "uv") return { kind: "opaque", reason: r.args[0] === "run" ? "uv_project" : "args_form" };
    if (r.args.some((E) => E.includes("${")) || /\/\.?$/u.test(r.command)) return { kind: "opaque", reason: "args_form" };
    let W = J(C) ? C : null;
    if (W === null) {
      let E = r.command.startsWith("/") || r.command.startsWith("./") || r.command.startsWith("../"), N = r.command.slice(r.command.lastIndexOf("/") + 1), oe = r.args.length === 0 && !HEs.test(N) || r.args.length > 0 && R.test(N) && !r.args.some((ie) => w(b(ie, "'")));
      return E && oe && m(b(r.command, null)) && !T.test(r.command) && !I(r.command) ? A(null, b(r.command, null), t, { form: "exec", slot: "command" }) : { kind: "opaque", reason: "args_form" };
    }
    let _ = r.args[0];
    if (_ === void 0 || r.args.slice(1).some((E) => w(b(E, "'")))) return { kind: "opaque", reason: "args_form" };
    let P = b(_, "'");
    return m(P) && y(_) && !T.test(_) && !I(_) ? A(W, P, t, { form: "exec", slot: "arg0" }) : { kind: "opaque", reason: "args_form" };
  }
  let a = he(r.command);
  if (a === null) return { kind: "opaque", reason: "shell_syntax" };
  let [s] = a;
  if (s !== void 0 && s.quote === null && Q.test(s.text)) return { kind: "opaque", reason: "shell_syntax" };
  let { interpreter: o, path: l, refusal: i } = be(a);
  if (i !== null) return { kind: "opaque", reason: i };
  if (l === void 0 || !m(l)) {
    let c = l ?? s;
    return { kind: "opaque", reason: c !== void 0 && k.test(h(c).rest) ? "private_dotdir" : "no_path" };
  }
  let d = r.command.slice(0, l.start), u = r.command.slice(l.end);
  if ([d, h(l).rest, u].some((c) => T.test(c))) return { kind: "opaque", reason: "shell_syntax" };
  let { rest: p, hadPrefix: D, base: se } = h(l);
  if (D && !_e(l, ee(se, t) ?? "") || (D ? g.test(p) : I(p))) return { kind: "opaque", reason: "shell_syntax" };
  return A(o, l, t);
}
function v(e, t) {
  return e.split(fe).join(t);
}
var DV = "/", Re = /^[A-Za-z]:[\\/]/, xe = /^[\\/]{2}[^\\/]+[\\/]+[^\\/]+/, Te = /^(?:[\\/]{2,}[?.][\\/]+|\\\?\?\\)(?=[A-Za-z]:)/, j = /^(?:[\\/]{2,}[?.][\\/]+|\\\?\?\\)UNC[\\/]+/i, te = /^(?:[\\/]{2}[?.]|[\\/]\?\?)(?:[\\/]|$)/;
function CE(e, t) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? we(e, t) : kGt(e, t);
}
function kGt(e, t) {
  let n = t.length > 1 && t.endsWith("/") ? t.slice(0, -1) : t;
  return e === n || e.startsWith(n === "/" ? "/" : `${n}/`);
}
function we(e, t) {
  let n = z(t).replace(/\\+$/, "");
  if (n === "") return true;
  let r = z(e);
  return r === n || r.startsWith(`${n}\\`);
}
function z(e) {
  return e.replace(/\//g, "\\").replace(/^[a-z](?=:)/, (t) => t.toUpperCase());
}
function DEs(e) {
  return j.test(e) ? `\\\\${e.replace(j, "")}` : e.replace(Te, "");
}
function ICr(e) {
  let t = DEs(e), n = Se.exec(t);
  return n !== null && ne(n[1], false) ? `${n[2]}:\\${t.slice(n[0].length)}` : t;
}
var Se = /^[\\/]{2,}([^\\/]+)[\\/]+([A-Za-z])\$(?:[\\/]+|$)/;
function ne(e, t = true) {
  let n = e.toLowerCase().replace(/\.$/, ""), r = (0, import_chunk_cg8dqz0a.x)() === "windows", a = r && t ? re : (l) => l.toLowerCase(), s = a((0, import_os.hostname)()), o = (0, import_chunk_7cfjrnwy.nt)(s, ".");
  return n === "localhost" || /^127(?:\.\d{1,3}){3}$/.test(n) || n === s || r && (n === o || t && (n === o.slice(0, S) || n === a((0, import_chunk_7cfjrnwy.nt)((0, import_os.hostname)(), ".").slice(0, S)))) || n.startsWith(`${o}.`) || Ce.test(n) && (tzi()?.has(n) ?? t);
}
var Ce = /^\d{1,3}(?:\.\d{1,3}){3}$|\.ipv6-literal\.net$/;
function tzi() {
  let e = $e();
  if (e === null) return null;
  return new Set(Object.values(e).flatMap((t) => (t ?? []).flatMap(({ address: n }) => [n.toLowerCase(), `${n.toLowerCase().replaceAll(":", "-").replaceAll("%", "s")}.ipv6-literal.net`])));
}
function $e() {
  try {
    return (0, import_os.networkInterfaces)();
  } catch {
    return null;
  }
}
function A1(e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return e.startsWith("/");
  let t = DEs(e);
  return !te.test(t) && (Re.test(t) || xe.test(t));
}
function Eh(e) {
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "macos":
      return O(e);
    case "windows":
      return MCr(e);
    default:
      return e;
  }
}
function MCr(e) {
  let t = ICr(e), n = /^[\\/]+/.exec(t)?.[0] ?? "", r = t.slice(n.length).split(/[\\/]+/), a = n === "" && /^[A-Za-z]:$/.test(r[0] ?? ""), s = n === "" && /^[A-Za-z]:./.test(r[0] ?? ""), o = [];
  r.forEach((i, d) => {
    if (d === 0 && a) o.push(i.toLowerCase());
    else if (d === 0 && s) o.push(i.toLowerCase());
    else if (d === 0 && n.length >= 2) o.push(re(i));
    else if (i === "..") {
      if (o.length > (a || s ? 1 : n.length >= 2 ? 2 : 0)) o.pop();
    } else if (/^[. ]+$/.test(i) && i !== ".") o.push("");
    else if (i !== "." && i !== "") o.push((0, import_chunk_fbnv54pa.za)(i.toLowerCase().toUpperCase().toLowerCase()));
  });
  let l = o.filter((i) => i !== "");
  return (n.length >= 2 ? "\\\\" : n.length === 1 ? "\\" : "") + l.join("\\") + (/[\\/]$/.test(t) && l.length > 0 ? "\\" : "");
}
function re(e) {
  if (/^[?.]$/.test(e)) return e;
  let t = e.toLowerCase().toUpperCase().toLowerCase();
  return e.includes(":") ? t.replace(/[. ]+$/, "") : (0, import_chunk_fbnv54pa.za)(t);
}
function O(e) {
  return e.normalize("NFC").toLowerCase().toUpperCase().toLowerCase().normalize("NFC");
}
function nTt(e, t) {
  return Elt(Eh(e), Eh(t));
}
function Elt(e, t) {
  return CE(e, t) || (0, import_chunk_cg8dqz0a.x)() === "windows" && (Ie(e, t) || e.startsWith("\\\\") && t.startsWith("\\\\")) || (0, import_chunk_2fxy1zey.Cun)(e, t);
}
function Ie(e, t) {
  return [e, t].some(Oe) || nzi(e, t);
}
function nzi(e, t) {
  return V.test(e) !== V.test(t);
}
function DTl(e, t) {
  let n = F.exec(e), r = F.exec(t);
  return n !== null && r !== null && n[1] === r[1] && n[2] !== r[2] && (B.test(n[2]) || B.test(r[2]));
}
var F = /^\\\\([^\\]+)\\([^\\]+)/, B = /^[a-z]\$$/;
function rzi(e, t) {
  if (!Ae(e, t)) return e;
  let n = /^\\\\([^\\]+)(?=\\|$)/.exec(t)?.[1];
  return n === void 0 ? e : e.replace(/^\\\\[^\\]+/, () => `\\\\${n}`);
}
function Ae(e, t) {
  let n = (0, import_chunk_7cfjrnwy.nt)((0, import_chunk_7cfjrnwy.nt)(/^\\\\([^\\]+)(?=\\)/.exec(e)?.[1] ?? "", "@"), "."), r = (0, import_chunk_7cfjrnwy.nt)((0, import_chunk_7cfjrnwy.nt)(/^\\\\([^\\]+)(?=\\|$)/.exec(t)?.[1] ?? "", "@"), ".");
  return n !== "" && r !== "" && (n === r || M(n) && r.startsWith(n) || M(r) && n.startsWith(r));
}
var S = 15;
function M(e) {
  let t = (0, import_chunk_cg8dqz0a.x)() === "windows" ? e.match(/ss/g)?.length ?? 0 : 0;
  return e.length >= S && e.length - t <= S;
}
function Oe(e) {
  return vun(e) !== void 0;
}
function vun(e) {
  let t = /^\\\\([^\\]+)\\/.exec(e)?.[1], n = t === void 0 ? void 0 : ke.exec(t)?.[1];
  if (t !== void 0 && ne(n ?? t)) return "own_host";
  if (t !== void 0 && Le.has(t)) return "wsl_host";
  if (e.split("\\").some(ye)) return "short_name";
  if (te.test(e)) return "device_namespace";
  if (De.test(e)) return "drive_relative";
  if (t === void 0) return;
  if (n !== void 0) return G.test(n) ? "numeric_host" : "webdav_host";
  if (We.test(t)) return "odd_host";
  if (G.test(t)) return "numeric_host";
  return;
}
var ke = /^((?=[^@]*[a-z])[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?)(?:@ssl(?:@\d+)?|@\d+)$/i;
function ye(e) {
  return /^[\x20-\x7e]*$/.test(e) ? (0, import_chunk_z6pfqf6e.yFr)(e.replaceAll("ss", "s")) : /~\d+(?:\.[^.]*)?$/.test(e);
}
var V = /^\\[^\\]/, De = /^[a-z]:(?![\\/]|$)/, Le = /* @__PURE__ */ new Set(["wsl.localhost", "wsl$"]), We = /[:@]|[^\x21-\x7e]|^\.+$/, G = /^(?:(?:0x[0-9a-f]*|\d+)(?:\.(?:0x[0-9a-f]*|\d+)){0,3}|.*\.ipv6-literal\.net)$/i;
function Pe(e) {
  return import_path.posix.isAbsolute(e) && !X.test(e) && !k.test(e) && !Y.test(e) && !K.test(e) && y(e);
}
async function LTl(e, t, n) {
  let r;
  try {
    r = await n.realpath(e);
  } catch (o) {
    return { location: "elsewhere", realPath: null, missing: (0, import_chunk_jv7av99m.kn)(o) };
  }
  if (!Pe(r)) return { location: "elsewhere", realPath: null, missing: false };
  if (import_path.posix.isAbsolute(t.configHomeReal) && Z.some((o) => CE(O(r), O(import_path.posix.join(t.configHomeReal, o))))) return { location: "elsewhere", realPath: null, missing: false };
  let s = [["in_checkout", t.launchDirReal], ["in_config_home", t.configHomeReal]].filter(([, o]) => import_path.posix.isAbsolute(o) && CE(r, o)).sort(([, o], [, l]) => l.length - o.length)[0];
  return { location: s ? s[0] : "elsewhere", realPath: r };
}
var Ne = 262144;
async function xjn(e, t, n = Ne) {
  let r;
  try {
    r = await t.open(e);
  } catch {
    return { ok: false, reason: "unreadable" };
  }
  try {
    let a = await r.stat();
    if (!a.isFile()) return { ok: false, reason: "not_regular" };
    if (a.nlink > 1) return { ok: false, reason: "multiply_linked" };
    let s = Buffer.alloc(n + 1), o = 0;
    while (o < s.length) {
      let { bytesRead: i } = await r.read(s, o, s.length - o, o);
      if (i === 0) break;
      o += i;
    }
    if (o > n) return { ok: false, reason: "too_large" };
    let l = Buffer.from(s.subarray(0, o));
    return { ok: true, sha256: (0, import_chunk_ccm69jjy.Je)(l), bytes: l };
  } catch {
    return { ok: false, reason: "unreadable" };
  } finally {
    await r.close().catch(() => {
    });
  }
}
var He = /* @__PURE__ */ new Set(["/usr/bin/env", "/bin/env"]), Ue = [{ names: /^(?:bash|dash|ash|sh|rbash|mksh|ksh[0-9]*)$/, letters: "aefhiklmnprtuvxBCEHPT", long: /* @__PURE__ */ new Set(["login", "posix", "norc", "noprofile", "restricted"]), ends: ["-", "--"] }, { names: /^zsh$/, letters: "aefhiklmnprtuvxBCEHPT", long: /* @__PURE__ */ new Set(["login"]), ends: ["-", "--", "-b"] }, { names: /^node(?:js)?$/, letters: "", long: /* @__PURE__ */ new Set(["enable-source-maps", "no-warnings", "no-deprecation", "throw-deprecation", "trace-warnings", "trace-deprecation", "pending-deprecation", "experimental-strip-types"]) }, { names: /^rscript$/, letters: "", long: /* @__PURE__ */ new Set(["vanilla", "no-save", "no-restore", "no-site-file", "no-init-file", "no-environ"]), inReachNeeds: [["vanilla"], ["no-init-file", "no-environ", "no-site-file"]] }, { names: /^osascript$/, letters: "", valued: "l" }, { names: /^fish$/, letters: "N", long: /* @__PURE__ */ new Set(["no-config"]) }, { names: /^(?:tclsh|wish)[0-9.]*$/, letters: "" }, { names: /^(?:python|pypy)[0-9.]*$/, letters: "bBdEIOPqRsSuvx", ends: ["--"] }, { names: /^perl[0-9.]*$/, letters: "acnpsTtwWX", ends: ["--"] }, { names: /^ruby[0-9.]*$/, letters: "acdlnpsvwy", ends: ["--"] }, { names: /^[gnm]?awk$/, letters: "", nextWord: "fE" }, { names: /^g?sed$/, letters: "nEru", nextWord: "f" }, { names: /^php[0-9.]*$/, letters: "nqeH" }, { names: /^t?csh$/, letters: "efnvx", ends: ["-b"] }, { names: /^expect$/, letters: "", ends: ["--"], nextWord: "f" }, { names: /^(?:g|b|p|gnu)?make$/, letters: "", nextWord: "f", requiresTerminal: true }];
function ovo(e, t, { childStartsInReach: n = true } = {}) {
  let r = Ue.find((u) => u.names.test(t.toLowerCase()));
  if (r === void 0) return !n && e.length === 0;
  if (n && r.inReachNeeds !== void 0 && !r.inReachNeeds.some((u) => u.every((p) => e.includes(`--${p}`)))) return false;
  let a = (u) => u.startsWith("--") ? r.long?.has(u.slice(2)) ?? false : /^-[A-Za-z]{1,3}$/.test(u) && u.slice(1).split("").every((p) => r.letters.includes(p)), s = (u) => (r.ends?.includes(u) ?? false) || r.nextWord !== void 0 && /^-[A-Za-z]{1,3}$/.test(u) && r.nextWord.includes(u.at(-1)) && u.slice(1, -1).split("").every((p) => r.letters.includes(p)), o = (u) => r.valued !== void 0 && new RegExp(`^-[${r.valued}]$`).test(u);
  if (e.length > 0 && o(e.at(-1))) return false;
  let l = e.filter((u, p) => !(p > 0 && o(e[p - 1]))), i = l.at(-1), d = i !== void 0 && !a(i) && s(i);
  if (r.requiresTerminal && !(d && i !== "--" && i !== "-")) return false;
  return l.every((u, p) => a(u) || o(u) || p === l.length - 1 && s(u));
}
function svo(e, { childStartsInReach: t = true } = {}) {
  let n = e.subarray(0, 512).toString("utf8");
  if (!n.startsWith("#!")) return null;
  let r = n.indexOf(`
`), a = n.slice(2, r === -1 ? void 0 : r).replace(/^[ \t]+|[ \t]+$/g, "").split(/[ \t]+/), s = a[0];
  if (s === void 0 || s === "") return null;
  if (a.some((d) => /[^\x21-\x7e]/.test(d))) return "unjudgeable";
  if (!s.startsWith("/") || g.test(s)) return { kind: "cwd" };
  let o = import_path.posix.normalize(s);
  if (!He.has(Eh(o))) {
    if (Eh(import_path.posix.basename(o)) === "env") return "unjudgeable";
    return ovo(a.slice(1), import_path.posix.basename(o), { childStartsInReach: t }) ? { kind: "absolute", path: o } : a.slice(1).some((d) => !d.startsWith("-")) ? { kind: "cwd" } : "unjudgeable";
  }
  let l = a[1] === "-S" ? a.slice(2) : a.slice(1), i = l[0];
  if (i === void 0 || i.startsWith("-") || i.includes("=")) return "unjudgeable";
  if (!ovo(l.slice(1), import_path.posix.basename(i), { childStartsInReach: t })) return l.slice(1).some((d) => !d.startsWith("-")) ? { kind: "cwd" } : "unjudgeable";
  if (i.startsWith("/")) return g.test(i) || /[\\$"'#\s]/.test(i) ? "unjudgeable" : { kind: "absolute", path: import_path.posix.normalize(i) };
  if (i.includes("/")) return { kind: "cwd" };
  return /^[\w.+-]+$/.test(i) ? { kind: "env", program: i } : "unjudgeable";
}
