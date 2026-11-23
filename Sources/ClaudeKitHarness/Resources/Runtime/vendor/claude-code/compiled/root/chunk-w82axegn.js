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
var chunk_w82axegn_exports = {};
__export(chunk_w82axegn_exports, {
  Bst: () => Bst,
  CA: () => CA,
  CNn: () => CNn,
  E9e: () => E9e,
  Hfo: () => Hfo,
  J6: () => J6,
  SAe: () => SAe,
  Sxi: () => Sxi,
  _xi: () => _xi,
  afs: () => afs,
  bxi: () => bxi,
  c0: () => c0,
  c_r: () => c_r,
  cfs: () => cfs,
  d_r: () => d_r,
  dfs: () => dfs,
  dpe: () => dpe,
  f_r: () => f_r,
  fxi: () => fxi,
  gxi: () => gxi,
  hxi: () => hxi,
  ifs: () => ifs,
  k9e: () => k9e,
  lfs: () => lfs,
  lpe: () => lpe,
  mxi: () => mxi,
  nsn: () => nsn,
  oUt: () => oUt,
  osn: () => osn,
  pxi: () => pxi,
  qq: () => qq,
  rUt: () => rUt,
  rsn: () => rsn,
  ssn: () => ssn,
  u_r: () => u_r,
  ufs: () => ufs,
  v9e: () => v9e,
  wG: () => wG,
  yxi: () => yxi
});
module.exports = __toCommonJS(chunk_w82axegn_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_path = require("path");
var import_promises = require("fs/promises");
var import_path2 = require("path");
var import_path3 = require("path");
var z = ["/proc", "/sys", "/dev"], U = /(?:^|[\\/])\.\.namedfork(?:[\\/]|$)/i;
function ifs(e) {
  return z.some((t) => e === t || e.startsWith(t + import_path.sep));
}
function k9e(e) {
  return U.test(e);
}
var E = String.raw`\.sw[a-p]|\.un~|\.rej|\.save\.\d+|\.save|\.tmp|\.temp|\.bak|\.old|\.orig|\.backup|\.~\d+~|~`, X = String.raw`\.part(?:ial)?|\.(?:cr)?download| copy| - copy| \d+| ?\(\d+\)| \((?=[^()/]*(?:conflict|copy))[^()/]*\)|\.sync-conflict-[\w-]+`, d_r = `${E}|${X}`, T = ".~ (";
var fxi = [".ssh", ".aws", ".azure", ".gnupg", ".kube", ".docker"], pxi = [[".config", "git"], [".config", "gh"], [".config", "glab-cli"], [".config", "gcloud"], ["appdata", "roaming", "gcloud"], [".cargo", "credentials"], [".cargo", "credentials.toml"], [".gem", "credentials"], [".m2", "settings.xml"], [".gradle", "gradle.properties"], ["documents", "powershell", "profile.ps1"], ["documents", "windowspowershell", "profile.ps1"], [".config", "powershell", "profile.ps1"], [".claude", "settings.json"], [".claude", "settings.local.json"], [".claude", "state", "unattended-serving-consent.json"], [".claude", "state", "device-mcp-consent.json"], [".claude", "state", "device-mcp-snapshot.json"], [".claude", "state", "served-calls"], [".claude", "state", "settings-review.json"], [".claude", "state"], ["appdata", "roaming", "github cli"], ["appdata", "roaming", "gh"], ["appdata", "roaming", "glab-cli"], ["appdata", "roaming", "gnupg"], ["appdata", "local", "microsoft", "credentials"], ["appdata", "roaming", "microsoft", "credentials"], ["appdata", "local", "microsoft", "vault"], ["appdata", "roaming", "microsoft", "vault"], ["appdata", "roaming", "microsoft", "protect"], ["library", "keychains"]], V = [".netrc", "_netrc", ".git-credentials", ".gitconfig", import_chunk_p1ewvgeh.kRe, import_chunk_p1ewvgeh.J0e, import_chunk_p1ewvgeh.M$i, ".envrc", ".mcp.json", ".npmrc", ".yarnrc", ".yarnrc.yml", ".pypirc", ".pgpass", ".my.cnf", ".mylogin.cnf", ".terraformrc", "terraform.rc", "credentials.tfrc.json", ".boto", ".s3cfg", "kubeconfig", "kubeconfig.yaml", "kubeconfig.yml", "kubeconfig.json", ".bashrc", ".bash_profile", ".bash_login", ".bash_logout", ".bash_aliases", ".profile", ".zshrc", ".zshenv", ".zprofile", ".zlogin", ".zlogout", "config.fish", "microsoft.powershell_profile.ps1", "microsoft.vscode_profile.ps1", "microsoft.powershellise_profile.ps1", ".bash_history", ".zsh_history", "fish_history", "consolehost_history.txt", ".python_history", ".node_repl_history", ".psql_history", ".mysql_history"], A = /(?:\.(?:pem|key|p12|pfx|keystore|jks)|_(?:rsa|dsa|ecdsa|ed25519)(?:_sk(?:_rk(?:_.*)?)?)?|secrets?\.(?:ya?ml|json|toml))$/s, u = ".env", q = import_chunk_p1ewvgeh.M$i, afs = ["example", "sample", "template", "dist"], b = new RegExp(`(?:${d_r})$`, "i"), J = new RegExp(`(?:${E})$`, "i"), Q = new RegExp(`(?:${d_r})((?!(?:${d_r})$)(?!\\.\\d+$)\\.[^./]+)$`, "i"), nsn = 64, qq = 255, Z = [/(?!)/, /:[^:]*$/, /:[^:]*:[^:]*$/, /:.*$/s], ee = /~[^/~.][^/~]*$/, mxi = "(?:BACKUP|BASE|LOCAL|REMOTE)", c_r = `_${mxi}_(?:[LR]CONFL_)?\\d{2,}`, te = new RegExp(`^(.*)${c_r}(\\.[^./]*)?$`, "is"), ne = ".git", I = "config";
function lfs(e, t = d(e)) {
  if (!(0, import_path3.isAbsolute)(e)) return false;
  let r = `/${t.map(import_chunk_fbnv54pa.za).join("/")}`;
  if ((r === e ? [e] : [e, r]).some((i) => (0, import_chunk_s7eqtcpb.W9e)(i) || N(i).some(import_chunk_s7eqtcpb.W9e))) return true;
  let o = `/${t.join("/")}`;
  if ((o === r ? [o] : [o, r]).some(oe)) return true;
  let s = `/${t.map((i, c) => c === t.length - 1 ? i : y(i, m)).join("/")}`;
  if (s !== o && ((0, import_chunk_s7eqtcpb.W9e)(s) || N(s).some(import_chunk_s7eqtcpb.W9e))) return true;
  return false;
}
function rsn(e) {
  return re(e, { exceptFiles: D, withGitConfigBelowGitFolders: true });
}
var D = /* @__PURE__ */ new Set();
function re(e, { exceptFiles: t, withGitConfigBelowGitFolders: n }) {
  let r = d(e);
  if (r.some((l) => l.length > qq)) return true;
  if (lfs(e, r)) return true;
  let { readingsByFold: o, readings: s, present: i } = F(r), c = s.at(-1) ?? [];
  return o.some((l) => l.some((a) => a.length > nsn)) || s.some((l) => l.some((a) => fxi.includes(a))) || pxi.some((l) => CNn(s, l) || CNn(i, l)) || j(i) && O() || cfs(s) || cfs(i) || c.some((l) => Sxi(l, t)) || n && dfs(s);
}
function dfs(e) {
  return (e.at(-1) ?? []).some(Se) && e.slice(0, -1).some((t) => t.some((n) => n.endsWith(ne)));
}
function F(e) {
  let t = e.map((r, o) => g(r, o === e.length - 1)), n = t.map((r) => (0, import_chunk_4smdap7r.M)(r.flat()));
  return { readingsByFold: t, readings: n, present: n.filter((r, o) => o === e.length - 1 || !t[o]?.[0]?.some(rUt)) };
}
function g(e, t) {
  let n = SAe(e, { leadingDot: t });
  return osn(e).map((r) => (0, import_chunk_4smdap7r.M)([...SAe(r(e), { leadingDot: t }), ...n.map(r)]));
}
function E9e(e) {
  return (0, import_chunk_4smdap7r.M)(g(e, false).flat());
}
function hxi(e) {
  return (0, import_chunk_4smdap7r.M)(g(e, true).flat());
}
function y(e, t) {
  if (e.length > qq) return e;
  let n = e;
  for (; ; ) {
    let r = t.reduce((o, s) => o === n ? s(o) : o, n);
    if (r === n || _.has(r)) return n;
    n = r;
  }
}
function Bst(e) {
  let t = e.split("/"), n = t.at(-1) ?? "", r = t.slice(0, -1), o = r.filter((l) => !rUt(l)).map((l) => y(l, L)), s = y(n, m), i = rUt(n) || rUt(s) || n.length <= qq && SAe(n, { leadingDot: true }).some(rUt) ? "" : s, c = (l, a) => [...l, a].join("/");
  return (0, import_chunk_4smdap7r.M)([c(r, i), c(r, R(n)), c(r, f(n)), c(r, f(i)), c(o, n), c(o, i), c(o, f(i))]).filter((l) => l !== e);
}
function N(e) {
  let t = (0, import_chunk_cg8dqz0a.x)() === "windows" ? Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")) : e.lastIndexOf("/");
  if (t === -1) return [];
  let n = e.slice(t + 1);
  return SAe(n, { leadingDot: true }).filter((r) => r !== n).map((r) => `${e.slice(0, t + 1)}${r}`);
}
function oe(e) {
  let t = lpe(e);
  return t === null ? true : t.some((n) => (0, import_path3.isAbsolute)(n) && (0, import_chunk_s7eqtcpb.W9e)(n));
}
function CA(e) {
  return [e, ...Bst(e)].some(rsn);
}
function gxi(e) {
  let t = d(e).at(-1);
  if (t === void 0) return true;
  return osn(t).flatMap((n) => [n(t), u_r(n(u_r(t)))]).some((n) => G(n) || A.test(n));
}
function _xi() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? /[\\/]/ : "/";
}
function d(e) {
  return e.split(_xi()).filter((t) => t !== "");
}
function CNn(e, t) {
  return e.some((n, r) => t.every((o, s) => e[r + s]?.includes(o) === true));
}
function cfs(e) {
  return e.some((t, n) => t.includes(".claude") && e[n + 1]?.some((r) => import_chunk_s7eqtcpb.kPi.some((o) => r === o || r.startsWith(`${o}.`))) === true);
}
var w = [ae, ue, v, R, u_r], L = [le, ...w], m = [ie, ce, ...w], se = [...m, f], _ = /* @__PURE__ */ new Set(["", ".", ".."]);
function SAe(e, { leadingDot: t = true, copyMarks: n = true } = {}) {
  let r = t ? se : n ? m : L;
  if (r.every((s) => s(e) === e)) return [e];
  let o = (s, i) => {
    if (i.length === 0 || s.size > nsn) return s;
    let c = (0, import_chunk_4smdap7r.M)(i.flatMap((l) => r.map((a) => a(l)))).filter((l) => !s.has(l) && !_.has(l));
    return o(/* @__PURE__ */ new Set([...s, ...c]), c);
  };
  return [...o(/* @__PURE__ */ new Set([e]), [e])];
}
function ie(e) {
  let t = b.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index);
}
function le(e) {
  let t = J.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index);
}
function ce(e) {
  let t = Q.exec(e);
  return t === null ? e : e.slice(0, t.index) + (t[1] ?? "");
}
function ae(e) {
  let t = ee.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index);
}
function ue(e) {
  let t = te.exec(e), n = t === null ? "" : `${t[1]}${t[2] ?? ""}`;
  return n === "" ? e : n;
}
function v(e) {
  return e.length > 2 && e.startsWith("#") && e.endsWith("#") ? e.slice(1, -1) : e;
}
function R(e) {
  return e.length > 2 && e.startsWith(".#") ? e.slice(2) : e;
}
function f(e) {
  return e.replace(/^\.(?=.)/s, "");
}
var k = `
\r\u2028\u2029. `;
function u_r(e) {
  let t = e.length;
  while (t > 0 && k.includes(e[t - 1] ?? "")) t -= 1;
  return e.slice(0, t);
}
function rUt(e) {
  if (_.has(e) || !ufs.includes(e[0] ?? "") || e.length > qq) return false;
  let t = e;
  for (; ; ) {
    let n = u_r(t.replace(b, "")), r = v(n), o = r === n ? R(n) : r;
    if (o === "") return true;
    if (o === t) return false;
    t = o;
  }
}
var ufs = `${T}#${k}`;
function lpe(e) {
  if (dpe(e)) return null;
  let t = h(e);
  if (t === null) return null;
  let n = yxi(e);
  if (n.length === 0) return t;
  let r = n.map(h);
  return r.some((o) => o === null) ? null : (0, import_chunk_4smdap7r.M)([...t, ...n, ...r.flatMap((o) => o ?? [])]).filter((o) => o !== e);
}
function dpe(e) {
  let t = e.split("/");
  return e.length > _e || t.length > Ee || t.some((n) => n.length > qq);
}
function h(e) {
  let t = e.split("/"), n = t.map((o, s) => {
    let i = s === t.length - 1, c = SAe(o, { leadingDot: i, copyMarks: i });
    return { readings: c, absentToo: !i && c.some(rUt) };
  });
  if (n.every((o) => o.readings.length === 1 && !o.absentToo)) return [];
  let r = n.reduce((o, { readings: s, absentToo: i }) => {
    if (o === null || s.length > nsn) return null;
    let c = o.flatMap((l) => [...s.map((a) => [...l, a]), ...i ? [l] : []]);
    return c.length > nsn ? null : c;
  }, [[]]);
  return r === null ? null : (0, import_chunk_4smdap7r.M)(r.map((o) => o.join("/"))).filter((o) => o !== e);
}
function yxi(e) {
  if (fe.test(e)) return [];
  let t = e.split("/");
  return (0, import_chunk_4smdap7r.M)(ge.map((n) => t.map((r) => {
    let o = n(r);
    return o !== r && de(o, r) ? o : r;
  }).join("/"))).filter((n) => n !== e);
}
var S = (e) => e.replace(pe, ""), ge = [S, (e) => S(e).normalize("NFKC"), (e) => S(e).normalize("NFKD").toLowerCase().toUpperCase().toLowerCase().replace(/i\u0307/g, "i").replace(/\u03c2/g, "\u03C3").normalize("NFC")];
function de(e, t) {
  return !_.has(e) && !e.includes("/") && e.length <= qq && [...me].every((n) => e.split(n).length - 1 <= t.split(n).length - 1);
}
var fe = /^[\x00-\x7f]*$/, pe = new RegExp("\\p{Default_Ignorable_Code_Point}", "gu"), me = '\\:*?"<>|', _e = 4096, Ee = 256;
function Sxi(e, t = D) {
  return V.includes(e) && !t.has(e) || A.test(e) || G(e) || e.startsWith(`${q}.`) || e.startsWith(".config.json.") || e.startsWith(`${import_chunk_p1ewvgeh.kRe}.`) || e.startsWith(`${import_chunk_p1ewvgeh.J0e}.`) || Oe(e) || he(e);
}
function G(e) {
  return e === u || e.startsWith(`${u}.`) && !afs.includes(e.slice(u.length + 1)) || ye(e);
}
function Se(e) {
  return e === I || e.startsWith(`${I}.`);
}
function ye(e) {
  return e.endsWith(u) && !p(e.slice(0, -u.length));
}
var Re = /^(.*)\.tfvars(?:\.json)?$/s;
function Oe(e) {
  let t = Re.exec(e)?.[1];
  return t !== void 0 && !p(t);
}
var Te = ["deploy_key", "credentials.json", "application_default_credentials.json", "fish_variables", "htpasswd", ".htdigest", ".msmtprc", ".fetchmailrc", ".sentryclirc", ".dev.vars", ".secrets", ".vault-token", ".dockercfg", ".clasprc.json", ".transifexrc", ".databrickscfg", ".ftpconfig", ".remote-sync.json", ".wakatime.cfg"], Ie = /^(?:service[-_]account(?:[-_]?key)?\.json|serviceaccountkey\.json|client_secret_.+\.apps\.googleusercontent\.com\.json|ssh_host_(?:rsa|dsa|ecdsa|ed25519)_key|fishd\.[0-9a-f]{12})$/s, Ne = /^\.(?:dev\.vars\.|vault_pass)/, xe = /^(.*)\.(?:tfstate(?:\.\d+)?|kdbx|ovpn)$/s;
function he(e) {
  return Hfo(e) && O();
}
function O() {
  if ((0, import_chunk_f9x2f6cx.st)()) return true;
  if ((0, import_chunk_j4z7srhg.ec)()) return true;
  return false;
}
var oUt = [["git", "credentials"], ["gh", "hosts.yml"], ["gcloud", "credentials.db"], ["gcloud", "access_tokens.db"]];
function j(e) {
  return oUt.some((t) => CNn(e.slice(-t.length), t));
}
function wG(e) {
  return [e, ...Bst(e)].some((t) => {
    let n = d(t);
    if (n.some((i) => i.length > qq)) return true;
    let r = g(n.at(-1) ?? "", true).flat();
    if (!oUt.some(([, i]) => r.includes(i))) return false;
    let { readingsByFold: o, present: s } = F(n);
    return o.some((i) => i.some((c) => c.length > nsn)) || j(s);
  });
}
function bxi(e) {
  return wG(e) && O();
}
function Hfo(e) {
  let t = xe.exec(e)?.[1];
  return Te.includes(e) || Ie.test(e) || Ne.test(e) && !p(e) || t !== void 0 && !p(t);
}
function c0(e) {
  return [e, ...Bst(e)].some((t) => g(d(t).at(-1) ?? "", true).flat().some(Hfo));
}
function p(e) {
  return afs.includes(e.split(".").at(-1) ?? "");
}
function osn(e) {
  return e.includes(":") ? [import_chunk_fbnv54pa.za, ...Z.map((t) => (n) => (0, import_chunk_fbnv54pa.qJe)(n.replace(t, "")))] : [import_chunk_fbnv54pa.za];
}
var v9e = 4096;
function W(e) {
  return (0, import_promises.realpath)(e).catch(() => {
    return;
  });
}
async function J6(e, t, { attached: n = false, readable: r = false, secretStores: o = false, realDirectory: s = W } = {}) {
  if (ifs(t) || (r ? B(t) : await f_r(t, s))) return "own_or_device";
  if (!n && (CA(e) || t !== e && CA(t) || o && [e, t].some((i) => c0(i) || wG(i)))) return "credential_name";
  return k9e(e) || k9e(t) ? "named_fork" : void 0;
}
async function ssn(e, t) {
  return await J6(e, t) !== void 0;
}
async function f_r(e, t = W) {
  if (B(e)) return true;
  let n = P(e);
  for (let r of [...(0, import_chunk_p1ewvgeh.fw)(), (0, import_path2.dirname)(import_chunk_fzp6hh55.Oee)]) {
    let o = P(await t(r) ?? (0, import_path2.resolve)(r));
    if (n.some((s) => o.some((i) => s === i || s.startsWith(`${i}/`)))) return true;
  }
  return false;
}
function B(e) {
  return (0, import_chunk_s7eqtcpb.W9e)(e) || Fe((0, import_path2.basename)(e));
}
function De(e) {
  return e.normalize("NFC").split(/[\\/]/).map(import_chunk_fbnv54pa.za).join("/");
}
function P(e) {
  return (0, import_chunk_4smdap7r.M)([e, (0, import_chunk_z6pfqf6e.tR)(e)]).map(De);
}
function Fe(e) {
  let t = (0, import_chunk_fbnv54pa.za)(e);
  if (/^\.claude.*\.json/.test(t)) return true;
  return [...import_chunk_p1ewvgeh.kyl, ...import_chunk_fzp6hh55.UXi.map((n) => (0, import_path2.basename)(n))].some((n) => {
    let r = (0, import_chunk_fbnv54pa.za)(n);
    return t === r || t === `${r}~` || t.startsWith(`${r}.`);
  });
}
