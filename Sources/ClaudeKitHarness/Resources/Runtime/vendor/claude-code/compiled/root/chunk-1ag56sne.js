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
var chunk_1ag56sne_exports = {};
__export(chunk_1ag56sne_exports, {
  $Hi: () => $Hi,
  $Sr: () => $Sr,
  $ho: () => $ho,
  AS: () => AS,
  Abe: () => Abe,
  Ait: () => Ait,
  BH: () => BH,
  BSr: () => BSr,
  DHi: () => DHi,
  Dkt: () => Dkt,
  FHi: () => FHi,
  FSr: () => FSr,
  Fho: () => Fho,
  HHi: () => HHi,
  Hkt: () => Hkt,
  Ikt: () => Ikt,
  Jt: () => Jt,
  Jv: () => Jv,
  Ku: () => Ku,
  LHi: () => LHi,
  Mkt: () => Mkt,
  NBt: () => NBt,
  NHi: () => NHi,
  Okt: () => Okt,
  UHi: () => UHi,
  USr: () => USr,
  WSr: () => WSr,
  Xv: () => Xv,
  Zin: () => Zin,
  a1n: () => a1n,
  bhs: () => bhs,
  ean: () => ean,
  epl: () => epl,
  g0: () => g0,
  i1n: () => i1n,
  jSr: () => jSr,
  n1n: () => n1n,
  nan: () => nan,
  o1n: () => o1n,
  r1n: () => r1n,
  ran: () => ran,
  s1n: () => s1n,
  t1n: () => t1n,
  tan: () => tan,
  tpl: () => tpl,
  ure: () => ure,
  vC: () => vC,
  vje: () => vje,
  whs: () => whs
});
module.exports = __toCommonJS(chunk_1ag56sne_exports);
var J = __toESM(require("fs"));
var import_os = require("os");
var h = __toESM(require("path"));
var G = __toESM(require("fs"));
var L = __toESM(require("fs"));
var U = __toESM(require("path"));
function epl() {
  return;
}
function vC() {
  switch ("darwin") {
    case "darwin":
      return "macos";
    case "linux":
      return "linux";
    case "win32":
      return "windows";
    default:
      return "unknown";
  }
}
function Jt(e, t) {
  if (!process.env.SRT_DEBUG) return;
  let r = t?.level || "info", n = "[SandboxDebug]";
  switch (r) {
    case "error":
      console.error(`${n} ${e}`);
      break;
    case "warn":
      console.warn(`${n} ${e}`);
      break;
    default:
      console.error(`${n} ${e}`);
  }
}
var re = 40;
function P(e, t) {
  let r = e(t);
  if (r.includes("\uFFFD") && !e(t, "buffer").equals(Buffer.from(r))) throw Object.assign(Error(`EILSEQ: illegal byte sequence, '${t}'`), { code: "EILSEQ" });
  return r;
}
function vje(e) {
  let t = U.isAbsolute(e) ? "" : process.cwd(), r = U.resolve(t, e);
  if (!(t + e).includes("\\")) return P(L.realpathSync.native, r);
  let { real: n, notThere: c } = HHi(r);
  if (c !== void 0) throw c;
  return n || "/";
}
function HHi(e) {
  let t = "", r = 0, n = e.split("/");
  for (let c = n.shift(); c !== void 0; c = n.shift()) {
    if (c === "" || c === "." || c === "..") {
      try {
        L.lstatSync(`${t}/.`);
      } catch (i) {
        if (i.code !== "EACCES") throw i;
        return { real: t, rest: [c, ...n], notThere: i };
      }
      if (c === "..") t = t.slice(0, t.lastIndexOf("/"));
      continue;
    }
    let f = `${t}/${c}`, a;
    try {
      a = L.lstatSync(f).isSymbolicLink();
    } catch (i) {
      let { code: s } = i;
      if (s !== "ENOENT" && s !== "ENOTDIR" && s !== "EACCES") throw i;
      return { real: t, rest: [c, ...n], notThere: i };
    }
    if (!a) {
      t = f;
      continue;
    }
    if (++r > re) throw Object.assign(Error(`ELOOP: too many symbolic links encountered, realpath '${e}'`), { code: "ELOOP", syscall: "realpath", path: e });
    let o = P(L.readlinkSync, f);
    if (o.startsWith("/")) t = "";
    n.unshift(...o.split("/"));
  }
  return { real: t, rest: n };
}
var O;
(function(e) {
  e.Text = "text", e.Separator = "separator", e.AnyChar = "anyChar", e.Star = "star", e.Globstar = "globstar", e.GlobstarSlash = "globstarSlash", e.Set = "set";
})(O || (O = {}));
function se(e) {
  if (e === "") return;
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r + 1] === "-" && r + 2 < e.length, c = e.charCodeAt(r);
    if (n) r += 2;
    let f = e.charCodeAt(r);
    if (f < c) return;
    t.push([c, f]);
  }
  return t;
}
var ee = 47;
function W(e) {
  let t = [], r = 0, n = (i) => {
    if (r < i) {
      let s = e.slice(r, i);
      t.push({ kind: O.Text, text: s });
    }
  }, c = (i) => {
    let { Star: s, Globstar: C, GlobstarSlash: w } = O, S = (I) => t[t.length - I]?.kind;
    if (S(1) === C || S(1) === i) return;
    if (!(i === C || S(2) === i && (S(1) === s || S(1) === w))) {
      t.push({ kind: i });
      return;
    }
    while (S(1) === s || S(1) === w) t.pop();
    t.push({ kind: C });
  }, f = 0, a = [], o = 0;
  while (o < e.length) switch (e[o]) {
    case "/":
      n(o), t.push({ kind: O.Separator }), r = ++o;
      break;
    case "?":
      n(o), t.push({ kind: O.AnyChar }), r = ++o;
      break;
    case "*": {
      n(o);
      let i = o;
      while (e[o] === "*") o++;
      let s = o - i >= 2 && e[o] === "/", C = o - i - (s ? 2 : 0);
      if (C >= 2) c(O.Globstar);
      if (C === 1) c(O.Star);
      if (s) c(O.GlobstarSlash);
      r = s ? ++o : o;
      break;
    }
    case "[": {
      if (o < f) {
        o++;
        break;
      }
      let i = e.indexOf("]", o + 1);
      if (i === -1) {
        a.push(e.slice(o)), f = e.length, o++;
        break;
      }
      let s = e.slice(o + 1, i), C = se(s);
      if (C === void 0) {
        a.push(`[${s}]`), f = i + 1, o++;
        break;
      }
      n(o), t.push({ kind: O.Set, members: s, matchesSeparator: C.some(([w, S]) => w <= ee && ee <= S) }), r = o = i + 1;
      break;
    }
    default:
      o++;
  }
  if (n(o), a.length > 0) Jt(`[Sandbox] The brackets in ${a.join(", ")} spell no set of characters, so they are read as text: ${e}`, { level: "warn" });
  return t;
}
function t1n(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function X(e) {
  switch (e.kind) {
    case O.Text:
      return t1n(e.text);
    case O.Separator:
      return "/";
    case O.AnyChar:
      return "[^/]";
    case O.Star:
      return "[^/]*";
    case O.Globstar:
      return ".*";
    case O.GlobstarSlash:
      return "(.*/)?";
    case O.Set:
      return `[${e.members.replace(/[.^$+{}()|\\]/g, "\\$&")}]`;
  }
}
function Zin(e) {
  return `^${W(e).map(X).join("")}$`;
}
function FSr(e) {
  return Zin(e).slice(0, -1) + "(/.*)?$";
}
var ean = [".gitconfig", ".gitmodules", ".bashrc", ".bash_profile", ".zshrc", ".zprofile", ".profile", ".ripgreprc", ".mcp.json"], oe = [".git", ".vscode", ".idea"];
function tan() {
  return [...oe.filter((e) => e !== ".git"), ".claude/commands", ".claude/agents"];
}
function n1n(e) {
  return e.toLowerCase();
}
function Xv(e, t) {
  return e === t || e.startsWith(t === "/" ? "/" : t + "/");
}
function nan(e, t) {
  return e !== t && Xv(e, t);
}
function* $Sr(e) {
  for (let t = e.lastIndexOf("/"); t > 0; t = e.lastIndexOf("/", t - 1)) yield e.slice(0, t);
  if (e !== "/") yield "/";
}
function r1n(e) {
  try {
    let t = vje(e);
    if (t !== e) return [e, t];
  } catch {
  }
  return [e];
}
function bhs(e, t) {
  if (e === "/") return e;
  let r = t(h.dirname(e));
  return `${r === "/" ? "" : r}/${h.basename(e)}`;
}
function USr() {
  try {
    return process.cwd();
  } catch {
    return;
  }
}
function Okt(e) {
  let t = e?.code;
  return t === "ENOENT" || t === "ENOTDIR" || t === "ELOOP" || t === "ENAMETOOLONG";
}
function Ku(e) {
  return e.includes("*") || e.includes("?") || e.includes("[") || e.includes("]");
}
function Abe(e) {
  return e.includes("*") || e.includes("?");
}
function ran(e) {
  return vC() === "windows" ? Abe(e) : Ku(e);
}
function o1n(e) {
  let t = e;
  if (t === null || typeof t !== "object" || typeof t.path !== "string" || t.path === "" || t.literal !== true) throw TypeError(`A filesystem path entry must be a path, or { path, literal: true }; got ${JSON.stringify(e) ?? String(e)}`);
  return t.path;
}
function g0(e) {
  if (/^\\\\\?\\unc\\/i.test(e)) return "\\\\" + e.slice(8);
  if (e.startsWith("\\\\?\\")) return e.slice(4);
  return e;
}
function NBt(e) {
  let t = h.win32.toNamespacedPath(e);
  return /^[\\/]{2}[?.][\\/]unc[\\/]/i.test(t);
}
function AS(e) {
  return e.replace(/\/\*\*$/, "") || "/";
}
function s1n(e, t) {
  let r = h.normalize(e), n = h.normalize(t);
  if (n === r) return false;
  if (r.startsWith("/tmp/") && n === "/private" + r) return false;
  if (r.startsWith("/var/") && n === "/private" + r) return false;
  if (n === "/") return true;
  if (n.split("/").filter(Boolean).length <= 1) return true;
  if (r.startsWith(n + "/")) return true;
  let f = r;
  if (r.startsWith("/tmp/")) f = "/private" + r;
  else if (r.startsWith("/var/")) f = "/private" + r;
  if (f !== r && f.startsWith(n + "/")) return true;
  let a = n.startsWith(r + "/"), o = f !== r && n.startsWith(f + "/");
  if (!(f !== r && n === f) && !a && !o) return true;
  return false;
}
function i1n(e) {
  if (e === "~") return (0, import_os.homedir)();
  if (e.startsWith("~/")) return (0, import_os.homedir)() + e.slice(1);
  return e;
}
function Ikt(e) {
  let t = (0, import_os.homedir)(), r = /^[A-Za-z]:/.test(t) ? t.slice(0, 2) : "", n = r ? t.slice(2) : t;
  return e.replace(/%USERPROFILE%/gi, t).replace(/%HOMEDRIVE%/gi, r).replace(/%HOMEPATH%/gi, n);
}
function DHi(e) {
  return e.replace(/\/{2,}/g, "/").replace(/\/\.(?=\/)/g, "");
}
function z(e) {
  if (vC() !== "windows" && /(?:^|\/)\.\.(?:\/|$)/.test(e)) Jt(`[Sandbox] "${e}" could not be resolved and still contains a ".." component, so a rule spelled this way may not match.`, { level: "warn" });
  return e;
}
function Jv(e, t) {
  let r = (c) => !t?.literal && ran(c);
  if (vC() === "windows") {
    if (e = g0(Ikt(e)), /^[a-z]:/.test(e)) e = e[0].toUpperCase() + e.slice(1);
    if (NBt(e) && !r(e)) return h.win32.normalize(e);
  }
  if (vC() !== "windows" && e.endsWith("/") && !r(e)) e = e.replace(/\/+$/, "") || "/";
  let n = i1n(e);
  if (n === e && !h.isAbsolute(e)) n = h.resolve(process.cwd(), e);
  if (vC() !== "windows") n = DHi(n);
  if (r(n)) {
    let c = vC() === "windows" ? /[*?]/ : /[*?[\]]/, f = n.split(c)[0];
    if (f && f !== "/") {
      let a = f.endsWith("/") ? f.slice(0, -1) : h.dirname(f);
      try {
        let o = vje(a);
        if (!s1n(a, o)) {
          let i = n.slice(a.length);
          return z(o + i);
        }
      } catch {
      }
    }
    return z(n);
  }
  if (vC() !== "windows" && n !== "") n = n.replace(/\/\.$/, "").replace(/\/+$/, "") || "/";
  try {
    let c = vje(n);
    if (!s1n(n, c)) n = c;
  } catch {
  }
  return z(n);
}
var ie = ["/dev/stdout", "/dev/stderr", "/dev/null", "/dev/tty", "/dev/dtracehelper", "/dev/autofs_nowait", "/tmp/claude", "/private/tmp/claude"], te = [".npm/_logs", ".claude/debug"];
function BH(e) {
  let t = (0, import_os.homedir)(), r = !e || e.denyRead.length === 0 ? te : ce(t, e.denyRead, e.allowRead);
  return [...ie, ...r.map((n) => h.join(t, n))];
}
function ce(e, t, r = []) {
  let n = [.../* @__PURE__ */ new Set([e, Jv(e, { literal: true })])], c = t.map((a) => ae(a)), f = r.flatMap((a) => {
    if (typeof a !== "string") return [o1n(a)];
    let o = AS(a);
    return ran(o) ? [] : [o];
  }).map((a) => Jv(a, { literal: true }));
  return te.filter((a) => {
    let o = n.map((i) => h.join(i, a));
    return !c.some((i) => o.some(i) && !f.some((s) => i(s) && o.some((C) => Xv(C, s))));
  });
}
function ae(e) {
  if (typeof e !== "string") {
    let n = Jv(o1n(e), { literal: true });
    return (c) => Xv(c, n);
  }
  let t = AS(e);
  if (ran(t)) {
    let n = le(Jv(t));
    return n === null ? () => true : (c) => n.test(c);
  }
  let r = Jv(t, { literal: true });
  return (n) => Xv(n, r);
}
function le(e) {
  let t = K.get(e);
  if (t === void 0) {
    try {
      t = new RegExp(FSr(e)), t.test("");
    } catch {
      t = null;
    }
    if (Z += e.length, Z > fe) K.clear(), Z = e.length;
    K.set(e, t);
  }
  return t;
}
var K = /* @__PURE__ */ new Map(), Z = 0, fe = 1048576, ue = ["NODE_EXTRA_CA_CERTS", "SSL_CERT_FILE", "CURL_CA_BUNDLE", "REQUESTS_CA_BUNDLE", "PIP_CERT", "GIT_SSL_CAINFO", "AWS_CA_BUNDLE", "CARGO_HTTP_CAINFO", "DENO_CERT", "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE", "NIX_SSL_CERT_FILE"];
function Ait(e, t, r, n, c, f) {
  let a = FHi(f), o = a === Dkt ? a : encodeURIComponent(a), i = n ? `${o}:${n}@` : "", s = ["SANDBOX_RUNTIME=1"];
  if (!c) {
    let I = process.env.CLAUDE_CODE_TMPDIR || process.env.CLAUDE_TMPDIR || "/tmp/claude";
    s.push(`TMPDIR=${I}`);
  }
  if (r) for (let I of ue) s.push(`${I}=${r}`);
  if (!e && !t) return s;
  let C = ["localhost", "127.0.0.1", "::1", "169.254.0.0/16", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"].join(",");
  s.push(`NO_PROXY=${C}`), s.push(`no_proxy=${C}`);
  let w = n ? "127.0.0.1" : "localhost", S = n && e === t ? "127.0.0.1" : "localhost";
  if (e) {
    if (s.push(`HTTP_PROXY=http://${i}${w}:${e}`), s.push(`HTTPS_PROXY=http://${i}${w}:${e}`), s.push(`http_proxy=http://${i}${w}:${e}`), s.push(`https_proxy=http://${i}${w}:${e}`), n) s.push("GIT_CONFIG_PARAMETERS='http.proxyAuthMethod=basic'");
  }
  let A = e ? `http://${i}${w}:${e}` : `socks5h://${i}${S}:${t}`;
  if (s.push(`ALL_PROXY=${A}`), s.push(`all_proxy=${A}`), s.push(`GRPC_PROXY=${A}`), s.push(`grpc_proxy=${A}`), t) {
    let p = vC();
    if (p === "macos" && n && e === t) {
      let E = Buffer.from(`${a}:${n}`);
      s.push(`SRT_SSH_PROXY_COMMAND=${de(t, E.toString("base64"))}`, `GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand="/bin/sh -c 'eval \\"\\\${SRT_SSH_PROXY_COMMAND:?unset, but GIT_SSH_COMMAND needs it}\\"' sh '%h' %p"`);
    } else if (p === "macos") s.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='nc -X 5 -x localhost:${t} %h %p'`);
    else if (p === "linux" && e) {
      let E = n ? `,proxyauth=${a}:${n}` : "";
      s.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='socat - PROXY:${w}:%h:%p,proxyport=${e}${E}'`);
    }
    if (s.push(`FTP_PROXY=socks5h://${i}${S}:${t}`), s.push(`ftp_proxy=socks5h://${i}${S}:${t}`), s.push(`RSYNC_PROXY=${S}:${t}`), s.push(`DOCKER_HTTP_PROXY=http://${i}${e ? w : S}:${e || t}`), s.push(`DOCKER_HTTPS_PROXY=http://${i}${e ? w : S}:${e || t}`), e) {
      if (s.push("CLOUDSDK_PROXY_TYPE=http"), s.push(`CLOUDSDK_PROXY_ADDRESS=${w}`), s.push(`CLOUDSDK_PROXY_PORT=${e}`), n) s.push(`CLOUDSDK_PROXY_USERNAME=${a}`), s.push(`CLOUDSDK_PROXY_PASSWORD=${n}`);
    }
  }
  return s;
}
function de(e, t, r = "/usr/bin/nc") {
  return `LC_ALL=C; no() { printf "sandbox proxy: %s\\n" "$*" >&2; exit 1; }; case $1 in ""|*[!A-Za-z0-9._:-]*) no bad host;; *:*) set -- "[$1]" "$2";; esac; case $2 in ""|*[!0-9]*) no bad port;; esac; exec 3<&0; { printf "CONNECT %s HTTP/1.1\\r\\nHost: %s\\r\\nProxy-Authorization: Basic ${t}\\r\\n\\r\\n" "$1:$2" "$1:$2"; exec /bin/cat <&3; } | ${r} 127.0.0.1 ${e} | { read -r v why; while read -r v; do case $v in ""|?) break;; esac; done; case $why in "200 "*) exec /bin/cat;; esac; why=\${why%?}; no "$1:$2: \${why:-no answer}"; } & exec >&-; wait $!`;
}
var pe = 8;
function BSr(e) {
  if (e.baseEnv?.GIT_CONFIG_COUNT === "0") return {};
  let t = Number.parseInt(e.baseEnv?.GIT_CONFIG_COUNT ?? "", 10), r = Number.isFinite(t) && t >= 0 ? t : 0, n = r, c = {}, f = (o, i) => {
    c[`GIT_CONFIG_KEY_${n}`] = o, c[`GIT_CONFIG_VALUE_${n}`] = i, n++;
  }, a = [...new Set(e.safeDirs.filter((o) => !!o).map((o) => {
    let s = o.replace(/\\/g, "/").replace(/\/+$/, "");
    if (s === "" || /^[A-Za-z]:$/.test(s)) return `${s}/`;
    return s;
  }))];
  if (a.length > pe) f("safe.directory", "*");
  else for (let o of a) f("safe.directory", o), f("safe.directory", o.endsWith("/") ? `${o}*` : `${o}/*`);
  if (e.schannelCa) f("http.schannelUseSSLCAInfo", "true"), f("http.schannelCheckRevoke", "false");
  if (e.opensslBackend) f("http.sslBackend", "openssl");
  if (n === r) return {};
  return c.GIT_CONFIG_COUNT = String(n), c;
}
function whs(e) {
  let t = { GIT_CONFIG_COUNT: process.env.GIT_CONFIG_COUNT };
  for (let r of e.unsetEnvVars ?? []) delete t[r];
  return Object.assign(t, e.setEnvVars ?? {}), BSr({ safeDirs: e.safeDirs, baseEnv: t });
}
var LHi = 100;
function Mkt(e, t) {
  return !t ? e : t;
}
function ure(e) {
  let t = e.slice(0, LHi);
  return Buffer.from(t).toString("base64");
}
function Hkt(e) {
  return Buffer.from(e, "base64").toString("utf8");
}
var Dkt = "srt", ne = 255, NHi = ne - Buffer.byteLength(`${Dkt}.`);
function FHi(e) {
  if (!e) return Dkt;
  let t = `${Dkt}.${e}`;
  return Buffer.byteLength(t) <= ne ? t : Dkt;
}
function WSr(e) {
  if (!e || !e.startsWith(`${Dkt}.`)) return;
  let t = e.slice(Dkt.length + 1);
  if (!t || Buffer.byteLength(t) > NHi) return;
  return t;
}
function jSr(e) {
  for (; ; ) {
    let t = e.next();
    if (t.done) return t.value;
  }
}
var he = 10;
async function tpl(e, t) {
  t?.throwIfAborted();
  let r = performance.now();
  for (; ; ) {
    let n = e.next();
    if (!n.done && performance.now() - r < he) continue;
    if (!n.done) await new Promise((c) => setImmediate(c));
    if (t?.throwIfAborted(), n.done) return n.value;
    r = performance.now();
  }
}
function Fho(e, t = {}) {
  return Se(e, t).matches;
}
function me(e, t) {
  let r = new RegExp(Zin(e), t), n = AS(e), c = n !== e ? new RegExp(Zin(n), t) : void 0, f = { splits: false, start: [0], next: () => [0], matches: (p, E, _) => r.test(_), matchesDirectoryForm: (p, E, _) => c?.test(_) === true }, a = [], o = X({ kind: O.Star }), i = (p) => {
    let E = p.map(X), _ = /* @__PURE__ */ new Map(), T = (d) => a.push({ then: d }) - 1, R = (d, y) => {
      let m = `${d}${y ? "*" : ""}`, b = _.get(m);
      if (b !== void 0) return b;
      if (!y && p[d]?.kind === O.GlobstarSlash) {
        let u = T(void 0);
        return _.set(m, u), a[u].then = R(d + 1, false), u;
      }
      if (!y && p[d]?.kind === O.Globstar && d === p.length - 1) {
        let u = T(void 0);
        return _.set(m, u), u;
      }
      let x = { edges: [] }, D = a.push(x) - 1;
      _.set(m, D);
      let g = (u, v) => {
        x.edges.push({ regex: new RegExp(`^${u}$`, t), to: v });
      }, l = y ? o : "";
      for (let u = d; ; u++) {
        let v = p[u];
        if (v === void 0) {
          g(l, void 0);
          break;
        }
        if (v.kind === O.Separator) {
          g(l, R(u + 1, false));
          break;
        }
        if (v.kind === O.Globstar) g(l + o, T(R(u + 1, true))), l += o;
        else if (v.kind === O.GlobstarSlash) g(l + o, T(R(u + 1, false)));
        else if (v.kind === O.Set && v.matchesSeparator) g(l, R(u + 1, false)), l += `(?!/)${E[u]}`;
        else l += E[u];
      }
      return D;
    };
    return R(0, false);
  }, s, C;
  try {
    if (s = [i(W(e))], C = a.length, c) s.push(i(W(n)));
  } catch {
    return f;
  }
  let w = (p, E) => {
    for (let _ = E; _ !== void 0 && !p.has(_); ) {
      p.add(_);
      let T = a[_];
      _ = "then" in T ? T.then : void 0;
    }
  }, S = (p) => [...p].sort((E, _) => E - _), A = (p, E, _) => p.some((T) => {
    if (T >= C !== _) return false;
    let R = a[T];
    return "then" in R ? R.then === void 0 : R.edges.some((d) => d.to === void 0 && d.regex.test(E));
  }), I = /* @__PURE__ */ new Set();
  for (let p of s) w(I, p);
  return { splits: true, start: S(I), next: (p, E) => {
    let _ = /* @__PURE__ */ new Set();
    for (let T of p) {
      let R = a[T];
      if ("then" in R) w(_, T);
      else for (let d of R.edges) if (d.to !== void 0 && d.regex.test(E)) w(_, d.to);
    }
    return S(_);
  }, matches: (p, E) => A(p, E, false), matchesDirectoryForm: (p, E) => A(p, E, true) };
}
function $Hi(e) {
  let t = e.split(/[*?[\]]/)[0];
  if (!t) return "";
  return t.endsWith("/") ? t.slice(0, -1) : h.posix.dirname(t);
}
function UHi(e) {
  return e === "" || e === "/";
}
function a1n(e) {
  return e;
}
function Se(e, t = {}) {
  return jSr($ho(e, t));
}
function* $ho(e, t = {}) {
  let r = { baseLocation: "", matches: [], directoryMatches: [], symlinks: /* @__PURE__ */ new Set(), uninspectableLinks: /* @__PURE__ */ new Set(), unlisted: [], realOf: /* @__PURE__ */ new Map() }, n = t.anchor === void 0 ? void 0 : a1n(t.anchor), c = n === void 0 ? a1n(Jv(e)) : a1n(e).slice(n.length);
  if (n !== void 0 && (!/[^/]/.test(n) || !a1n(e).startsWith(n) || !(n.endsWith("/") || /^(\/|$)/.test(c)))) throw TypeError(`Glob pattern ${e} does not lie beneath the anchor ${t.anchor}`);
  let f = $Hi(c), a = f === "/" ? "" : f, o = n === void 0 ? f : n + a;
  if (UHi(o)) return Jt(`[Sandbox] Glob pattern has no literal directory below the root to start from, skipping: ${e}`, { level: "warn" }), r;
  let i = t.caseInsensitive ? "is" : "s", s = me(c, i);
  if (t.followSymlinkedDirectories && !s.splits) Jt(`[Sandbox] Glob pattern ${e} cannot be followed one path component at a time, so it is matched against real paths only and not through symlinked directories`, { level: "warn" });
  let C = /* @__PURE__ */ new Map(), w = t.listings ?? /* @__PURE__ */ new Map(), S = [], A = (d) => d?.code, I = (d, y, m, b, x) => {
    try {
      return m(d);
    } catch (D) {
      if (y === d) throw D;
      let g;
      try {
        g = m(y);
      } catch (l) {
        throw b(D) && !b(l) ? l : D;
      }
      if (!b(D) && A(D) !== "ENAMETOOLONG") Jt(`[Sandbox] ${d} could not be read for glob pattern ${e}, so it is covered whole, whatever ${y} leads to: ${D}`, { level: "warn" }), x();
      return g;
    }
  }, p = /* @__PURE__ */ new Map(), E = (d, y) => {
    let m = p.get(y);
    if (m !== void 0) return m;
    let b;
    try {
      let x = false;
      b = { ...I(y, d, (g) => ({ isDirectory: G.statSync(g).isDirectory(), real: vje(g) }), Okt, () => x = true), unread: x };
    } catch (x) {
      b = Okt(x) ? "absent" : "uninspectable";
    }
    return p.set(y, b), b;
  }, _ = (d, y, m) => {
    if (d.isFile() || d.isDirectory() || d.isSymbolicLink() || d.isFIFO() || d.isSocket() || d.isCharacterDevice() || d.isBlockDevice()) return d;
    let { name: b } = d, x = h.join(y, b), D = "other";
    try {
      let g = G.lstatSync(x);
      if (g.isDirectory()) D = "directory";
      else if (g.isSymbolicLink()) D = "link";
    } catch {
      try {
        let g = G.statSync(x).isDirectory();
        if (vje(x) !== h.join(m, b)) D = "link";
        else if (g) D = "directory";
      } catch (g) {
        let l = g?.code;
        if (l === "ELOOP") D = "link";
        else if (l !== "ENOENT") D = "directory", w.set(h.join(m, b), g instanceof Error ? g : Error(String(g)));
      }
    }
    return { name: b, isDirectory: () => D === "directory", isSymbolicLink: () => D === "link" };
  }, T = /^[A-Za-z]:$/.test(o) ? `${o}/` : o, R = T;
  try {
    R = vje(T);
  } catch {
  }
  r.baseLocation = R, S.push({ dir: T, real: R, short: T.length < R.length ? T : R, positions: (n === void 0 ? o : a).split("/").reduce(s.next, s.start) });
  for (let d = S.pop(); d !== void 0; d = S.pop()) {
    let { dir: y, real: m } = d, b = C.get(m) ?? { listedFor: /* @__PURE__ */ new Set() };
    C.set(m, b);
    let x = d.positions.filter((l) => !b.listedFor.has(l));
    if (x.length === 0) continue;
    yield;
    let D = () => {
      if (b.unlisted) return;
      if (b.unlisted = true, r.unlisted.push(y), m !== y) r.realOf.set(y, m);
    }, g;
    try {
      let l = w.get(m);
      if (l instanceof Error) throw l;
      g = l ?? I(m, d.short, (u) => G.readdirSync(u, { withFileTypes: true }).map((v) => _(v, u, m)), (u) => A(u) === "ENOENT", D), w.set(m, g);
    } catch (l) {
      let u = A(l);
      if (Jt(`[Sandbox] Error listing ${y} for glob pattern ${e}: ${l}`, { level: u === "ENOENT" ? "info" : "warn" }), u !== "ENOENT") {
        if (t.listings !== void 0) w.set(m, l instanceof Error ? l : Error(String(l)));
        D();
      }
      continue;
    }
    for (let l of x) b.listedFor.add(l);
    for (let l of g) {
      if (s.splits && !l.isDirectory() && !l.isSymbolicLink() && !s.matches(x, l.name, "")) continue;
      let u = h.join(y, l.name), v = h.join(m, l.name), Y = a1n(u), H = n !== void 0 && Y.startsWith(n) ? Y.slice(n.length) : Y, M = s.matches(x, l.name, H);
      if (M) r.matches.push(u);
      if (l.isDirectory()) {
        let Q = s.next(x, l.name), q = t.withDirectoryForm === true && s.matchesDirectoryForm(x, l.name, H);
        if (q) r.directoryMatches.push(u);
        if ((M || q) && v !== u) r.realOf.set(u, v);
        if (Q.length > 0) S.push({ dir: u, real: v, short: h.join(d.short, l.name), positions: Q });
        continue;
      }
      if (!l.isSymbolicLink()) {
        if (M && v !== u) r.realOf.set(u, v);
        continue;
      }
      if (r.symlinks.add(u), !t.followSymlinkedDirectories) continue;
      let F = t.withDirectoryForm === true && s.matchesDirectoryForm(x, l.name, H), j = s.splits ? s.next(x, l.name) : [];
      if (!M && !F && j.length === 0) continue;
      let V = h.join(d.short, l.name), N = E(V, v);
      if (N === "absent") continue;
      let k = N === "uninspectable" || N.unread;
      if (k) {
        if (r.uninspectableLinks.add(u), F) r.directoryMatches.push(u);
      }
      if (N === "uninspectable") continue;
      if (k && (M || F && N.isDirectory)) r.matches.push(N.real === "/" ? m : N.real);
      if (M && !k) r.realOf.set(u, N.real);
      if (!N.isDirectory) continue;
      if (F && !k) r.directoryMatches.push(u), r.realOf.set(u, N.real);
      if (j.length === 0) continue;
      if (Xv(m, N.real) || Xv(R, N.real)) {
        Jt(`[Sandbox] Not following symlink ${u} -> ${N.real} for glob pattern ${e}: it leads back up the tree`);
        continue;
      }
      Jt(`[Sandbox] Following symlink ${u} -> ${N.real} for glob pattern ${e}`), S.push({ dir: N.real, real: N.real, short: V.length < N.real.length ? V : N.real, positions: j });
    }
  }
  return r;
}
