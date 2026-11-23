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
var chunk_d775ds6c_exports = {};
__export(chunk_d775ds6c_exports, {
  $_r: () => $_r,
  B9e: () => B9e,
  B_r: () => B_r,
  CUt: () => CUt,
  Epo: () => Epo,
  G_r: () => G_r,
  Hsn: () => Hsn,
  Isn: () => Isn,
  KNn: () => KNn,
  MT: () => MT,
  Msn: () => Msn,
  SPi: () => SPi,
  Sll: () => Sll,
  TAe: () => TAe,
  U_r: () => U_r,
  VNn: () => VNn,
  Vwt: () => Vwt,
  W_r: () => W_r,
  _Pi: () => _Pi,
  _ll: () => _ll,
  bPi: () => bPi,
  cPi: () => cPi,
  e1: () => e1,
  eZl: () => eZl,
  fPi: () => fPi,
  gPi: () => gPi,
  gll: () => gll,
  gpe: () => gpe,
  hPi: () => hPi,
  hll: () => hll,
  j_r: () => j_r,
  jae: () => jae,
  kpo: () => kpo,
  mPi: () => mPi,
  nje: () => nje,
  oje: () => oje,
  pPi: () => pPi,
  qNn: () => qNn,
  rje: () => rje,
  uPi: () => uPi,
  vAe: () => vAe,
  wPi: () => wPi,
  yPi: () => yPi,
  yll: () => yll,
  z5: () => z5,
  zNn: () => zNn
});
module.exports = __toCommonJS(chunk_d775ds6c_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_x7h6xhh4 = require("/$bunfs/root/chunk-x7h6xhh4.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");
var import_promises = require("fs/promises");
var import_os2 = require("os");
var import_path2 = require("path");
var import_promises2 = require("fs/promises");
var import_path3 = require("path");
function Ue(e) {
  let n = e.toLowerCase().split(/[\\/]+/).filter(Boolean);
  return n.at(-2) === "windowsapps" && n.at(-3) === "microsoft";
}
async function O(e) {
  try {
    return (await (0, import_promises2.stat)(e)).isFile() ? e : null;
  } catch {
    return null;
  }
}
async function ne(e) {
  let n;
  try {
    n = await (0, import_promises2.readlink)(e);
  } catch {
    return null;
  }
  if (!(0, import_chunk_z6pfqf6e.Cjl)(n)) return null;
  return O(n);
}
async function oe(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return null;
  let n = (0, import_chunk_cg8dqz0a.x)() === "windows" ? e ?? $_r() : void 0, o = await te("pwsh", e);
  if (o && (0, import_chunk_cg8dqz0a.x)() === "windows" && Ue(o)) {
    let a = await ne(o);
    if (a) return (0, import_chunk_cqa9hrgx.l)("shell_powershell_detect", "store_alias_on_path"), a;
    o = null;
  }
  if (o) {
    if ((0, import_chunk_cg8dqz0a.x)() === "linux") {
      let a = await (0, import_promises2.realpath)(o).catch(() => o);
      if (o.startsWith("/snap/") || a.startsWith("/snap/")) {
        let c = await O("/opt/microsoft/powershell/7/pwsh") ?? await O("/usr/bin/pwsh");
        if (c) {
          let f = await (0, import_promises2.realpath)(c).catch(() => c);
          if (!c.startsWith("/snap/") && !f.startsWith("/snap/")) return (0, import_chunk_cqa9hrgx.l)("shell_powershell_detect", "snap_workaround"), c;
        }
      }
    }
    return (0, import_chunk_cqa9hrgx.u)("shell_powershell_detect"), o;
  }
  if (n) {
    let { programFiles: a, localAppData: c, userProfile: f } = n, d = (0, import_chunk_x7h6xhh4.tOe)(n.systemRoot), [p, h, P, F] = await Promise.all([(0, import_chunk_x7h6xhh4.kKn)(a) ? O((0, import_path3.join)(a, "PowerShell", "7", "pwsh.exe")) : null, (0, import_chunk_x7h6xhh4.kKn)(c) ? ne((0, import_path3.join)(c, "Microsoft", "WindowsApps", "pwsh.exe")) : null, (0, import_chunk_x7h6xhh4.kKn)(f) ? O((0, import_path3.join)(f, ".dotnet", "tools", "pwsh.exe")) : null, O((0, import_path3.join)(d, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"))]), T = p ?? h ?? P;
    if (T) return (0, import_chunk_cqa9hrgx.l)("shell_powershell_detect", "windows_fallback_path"), T;
    if (F) return (0, import_chunk_cqa9hrgx.l)("shell_powershell_detect", "fell_back_to_powershell_5"), F;
  }
  let r = await te("powershell", e);
  if (r) return (0, import_chunk_cqa9hrgx.l)("shell_powershell_detect", "fell_back_to_powershell_5"), r;
  return null;
}
async function te(e, n) {
  return n === void 0 ? (0, import_chunk_c203g5kd.Bf)(e) : (0, import_chunk_c203g5kd.B6e)(e, n.path ?? "");
}
function $_r() {
  return { path: import_chunk_c203g5kd.s.PATH, programFiles: import_chunk_c203g5kd.s.ProgramFiles, localAppData: import_chunk_c203g5kd.s.LOCALAPPDATA, userProfile: import_chunk_c203g5kd.s.USERPROFILE, systemRoot: import_chunk_c203g5kd.s.SYSTEMROOT };
}
function kpo(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return Promise.resolve(null);
  let n = (0, import_chunk_n2dbhmj2.u3)();
  return n.organizationsPowerShellPath ??= oe(e), n.organizationsPowerShellPath;
}
function e1() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return Promise.resolve(null);
  let e = (0, import_chunk_n2dbhmj2.u3)();
  if (!e.powerShellPath) {
    e.resolvedPowerShellPath = void 0;
    let n = oe().then((o) => {
      if (e.powerShellPath === n) e.resolvedPowerShellPath = o;
      return o;
    });
    e.powerShellPath = n;
  }
  return e.powerShellPath;
}
function cPi() {
  return (0, import_chunk_n2dbhmj2.u3)().resolvedPowerShellPath;
}
async function U_r() {
  let e = await e1();
  return e ? re(e) : null;
}
function hll() {
  let e = cPi();
  return typeof e === "string" ? re(e) : e;
}
function re(e) {
  return e.split(/[/\\]/).pop().toLowerCase().replace(/\.exe$/, "") === "pwsh" ? "core" : "desktop";
}
function gll() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return [];
  let { result: e } = m, n = [e.settled ? e.documents : null, ...e.settled && !e.failed ? e.kept : [], ...ue()].filter((o) => o !== null);
  return (0, import_chunk_4smdap7r.M)(n.flatMap((o) => [o, m.resolved.get(o) ?? o]).flatMap((o) => [import_path2.win32.join(o, "PowerShell"), import_path2.win32.join(o, "WindowsPowerShell")]));
}
function _ll() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return [];
  let { result: e } = m, n = (0, import_chunk_4smdap7r.M)([...ae(), We(), ...e.settled && !e.failed ? v(e.autoRun) : []]);
  return (0, import_chunk_4smdap7r.M)(n.flatMap((o) => [o, m.resolved.get(o) ?? o]));
}
function ae() {
  return ["APPDATA", "LOCALAPPDATA"].flatMap((e) => {
    let n = y(_(e));
    return n === null ? [] : [n];
  });
}
function We() {
  let e = y(_("ProgramData") || _("PROGRAMDATA") || _("ALLUSERSPROFILE")) ?? ze;
  return import_path2.win32.join(e, "Microsoft", "Windows", "Start Menu");
}
function ue() {
  return [_("OneDrive"), _("OneDriveConsumer"), _("OneDriveCommercial")].filter((e) => e !== void 0 && (0, import_chunk_p548ry42.A1)(e)).map((e) => import_path2.win32.join(e, "Documents"));
}
function _(e) {
  let n = (0, import_chunk_5e3gtsn9.Gc)();
  return n !== void 0 ? n[e] : import_chunk_c203g5kd.s[e];
}
function yll() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" && !m.result.settled;
}
function Sll() {
  let { result: e } = m;
  return (0, import_chunk_cg8dqz0a.x)() === "windows" && e.settled && e.failed ? e.why : void 0;
}
var uPi = "served-profile-dirs-unreadable";
async function nje() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows" || ce()) return;
  if (fe() && m.unresolved.length > 0) {
    m.inFlight ??= j(m.unresolved).then(async ({ resolved: e, unresolved: n, missing: o }) => {
      let { result: r } = m, a;
      try {
        a = r.settled && !r.failed ? await qe(r, o) : void 0;
      } catch (c) {
        (0, import_chunk_k449cc64.i)(c), a = G(E(`checking a missing profile folder against PowerShell threw (${c instanceof Error ? c.message : String(c)})`));
      }
      if (m.resolved = new Map([...m.resolved, ...e, ...a?.its?.resolved ?? []]), m.unresolved = [...n, ...a?.its?.unresolved ?? []], m.unresolvedAskedAt = Date.now(), a !== void 0) m.result = a.result;
      if (m.inFlight = void 0, e.size > 0 || a !== void 0) V();
    }).catch((e) => {
      m.inFlight = void 0, m.unresolvedAskedAt = Date.now(), (0, import_chunk_k449cc64.i)(e), (0, import_chunk_w578pjby.t)(`[toolHosts] Re-asking the unresolved folders threw (${e instanceof Error ? e.message : String(e)}); they are asked again the next time serving or a bind starts.`);
    }), await m.inFlight;
    return;
  }
  m.inFlight ??= Ke().catch((e) => ({ settled: true, documents: null, failed: true, retry: true, why: e instanceof Error ? e.message : "the read threw" })).then(async (e) => {
    let { resolved: n, unresolved: o } = await j([...e.failed || e.documents === null ? [] : [e.documents], ...e.failed ? [] : e.kept, ...ue(), ...e.failed ? [] : v(e.autoRun), ...ae()]);
    if (m.resolved = n, m.unresolved = o, m.unresolvedAskedAt = Date.now(), m.result = e, m.inFlight = void 0, e.failed) (0, import_chunk_w578pjby.t)(`[toolHosts] Could not read where this machine keeps its profile folders (${e.why}); its tools are not offered to cloud sessions until the next start reads them.`);
    V();
  }).catch((e) => {
    m.result = { settled: true, documents: null, failed: true, retry: true, why: e instanceof Error ? e.message : "settling the read threw" }, m.inFlight = void 0, (0, import_chunk_k449cc64.i)(e), (0, import_chunk_w578pjby.t)(`[toolHosts] Settling the profile-folder read threw (${e instanceof Error ? e.message : String(e)}); serving stays off until the next start reads again.`), V();
  }), await m.inFlight;
}
function V() {
  try {
    m.settled.emit();
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[toolHosts] A profile-directory listener threw: ${e instanceof Error ? e.message : String(e)}`);
  }
}
function fPi() {
  return (0, import_chunk_cg8dqz0a.x)() !== "windows" || ce() ? void 0 : nje();
}
function B_r(e) {
  return m.settled.subscribe(e);
}
var m = (0, import_chunk_t57w17k7.de)({ result: { settled: false }, resolved: /* @__PURE__ */ new Map(), unresolved: [], unresolvedAskedAt: 0, inFlight: void 0, settled: (0, import_chunk_69qhefwa.Be)(), volumeAnswers: /* @__PURE__ */ new Map(), powershellAnswer: void 0 }, (e) => {
  e.result = { settled: false }, e.resolved = /* @__PURE__ */ new Map(), e.unresolved = [], e.unresolvedAskedAt = 0, e.inFlight = void 0, e.settled.clear(), e.volumeAnswers.clear(), e.powershellAnswer = void 0;
});
function ce() {
  return fe() && (m.unresolved.length === 0 || Date.now() - m.unresolvedAskedAt < Ve);
}
var Ve = 6e4;
function fe() {
  let { result: e } = m;
  return e.settled && (!e.failed || !e.retry);
}
function Ge(e, n, o) {
  let r = pe(n).exec(e)?.[1]?.replace(/%([^%]+)%/g, (a, c) => o[c.toUpperCase()] ?? a);
  return y(r);
}
function pe(e, n = "REG_(?:EXPAND_)?SZ") {
  return new RegExp("^[ \\t]+" + e.replace(/ /g, "[ ]") + "[ \\t]+" + n + "[ \\t]+(.+?)[ \\t]*\\r?$", "im");
}
function je(e) {
  let n = e.trim().split(/\r?\n/).pop()?.trim() ?? "", o = y(/^\d{1,5}(,\d{1,5})*$/.test(n) ? String.fromCharCode(...n.split(",").map(Number)) : n);
  return o !== null && /\.ps1$/i.test(o) ? import_path2.win32.dirname(import_path2.win32.dirname(o)) : null;
}
function y(e) {
  return e === void 0 || /[%?\uFFFD]/.test(e) || !(0, import_chunk_p548ry42.A1)(e) ? null : e;
}
async function ge() {
  let e = import_path2.win32.join(Ye, "System32", "reg.exe");
  if (await (0, import_chunk_2yx6c1y2.ep)(e)) return e;
  let n = _("SystemRoot") || _("SYSTEMROOT");
  return (0, import_chunk_x7h6xhh4.kKn)(n) ? import_path2.win32.join(n, "System32", "reg.exe") : void 0;
}
var Ye = "C:\\Windows", ze = "C:\\ProgramData", he = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders";
async function Ke() {
  let e = await Xe();
  if (!e.failed && e.documents !== "unplaceable" && e.autoRun.every(([, o]) => o !== "unplaceable")) return se(e.autoRun, e.documents);
  let n = await Re();
  if (n.failed) return E(`${e.failed ? e.why : `reg.exe could not place the key's ${B(e.autoRun, e.documents).join(" and ")}`}; ${n.why}`, (e.failed ? e.retry : true) || n.retry);
  if (e.failed && n.autoRun === "unreadable") return E(`${e.why}; PowerShell could not read the User Shell Folders key`);
  return se(z(...e.failed ? [] : [e.autoRun], ...n.autoRun === "unreadable" ? [] : [n.autoRun]), e.failed || e.documents === "unplaceable" ? { placed: [n.documents] } : e.documents);
}
async function se(e, n) {
  let o = typeof n === "object" ? n.placed[0] ?? null : null, r = [...o === null ? [] : [o], ...v(e)], a = (await Promise.all(r.map(async (P) => "missing" in await Ee(P) ? [P] : []))).flat(), c = a.length > 0 ? await we(o !== null && a.includes(o) ? o : null, a) : void 0;
  if (c !== void 0 && c.failed) return c;
  let f = c?.autoRun, d = f === void 0 ? e : z(e, f), p = B(d, n);
  if (p.length > 0) return _e(p);
  let h = c?.documents ?? null;
  return { settled: true, documents: h ?? o, kept: h !== null && o !== null && h !== o ? [o] : [], autoRun: d, failed: false };
}
async function qe(e, n) {
  let o = [...e.documents === null ? [] : [e.documents], ...v(e.autoRun)].filter((h) => n.includes(h));
  if (o.length === 0) return;
  let r = e.documents !== null && o.includes(e.documents), a = await we(r ? e.documents : null, o);
  if (a.failed) return G(a);
  let c = a.autoRun === void 0 ? e.autoRun : z(e.autoRun, a.autoRun), f = B(c, "absent");
  if (f.length > 0) return G(_e(f));
  let d = a.documents !== null && a.documents !== e.documents ? a.documents : null, p = v(c).filter((h) => !v(e.autoRun).includes(h));
  if (d === null && p.length === 0) return;
  return { result: { ...e, documents: d ?? e.documents, kept: (0, import_chunk_4smdap7r.M)([...e.kept, ...d === null || e.documents === null ? [] : [e.documents]]), autoRun: c }, its: await j([...d === null ? [] : [d], ...p]) };
}
function G(e) {
  return Se(), (0, import_chunk_w578pjby.t)(`[toolHosts] Asked again where this machine keeps its profile folders and could not settle it \u2014 ${e.why}; its tools are not offered to cloud sessions until the next start reads again.`), { result: e };
}
async function we(e, n) {
  let o = await Re();
  if (o.failed) return le(n, o.why);
  let r = n.filter((a) => a !== e);
  if (o.autoRun === "unreadable" && r.length > 0) return le(r, "its registry provider could not read the User Shell Folders key");
  return { failed: false, documents: e === null ? null : o.documents, autoRun: o.autoRun === "unreadable" ? void 0 : o.autoRun };
}
function le(e, n) {
  return E(`${e.join(" and ")} ${e.length === 1 ? "does not exist on its volume" : "do not exist on their volumes"} as read, and PowerShell could not say where ${e.length === 1 ? "the folder is" : "they are"} (${n})`);
}
function B(e, n) {
  return [...n === "unplaceable" ? ["Personal"] : [], ...e.flatMap(([o, r]) => r === "unplaceable" ? [o] : [])];
}
function z(...e) {
  return I.map((n) => {
    let o = Qe(e.map((r) => Je(r, n)));
    return [n, o];
  });
}
function v(e) {
  return (0, import_chunk_4smdap7r.M)(e.flatMap(([, n]) => typeof n === "object" ? n.placed : []));
}
function _e(e) {
  return E(`the User Shell Folders key's ${e.join(" and ")} could not be placed by any source that read ${e.length === 1 ? "it" : "them"}`);
}
function Qe(e) {
  let n = (0, import_chunk_4smdap7r.M)(e.flatMap((o) => typeof o === "object" ? o.placed : []));
  if (n.length > 0) return { placed: n };
  return e.includes("unplaceable") ? "unplaceable" : "absent";
}
function Je(e, n) {
  return e.find(([o]) => o === n)?.[1] ?? "absent";
}
async function Xe() {
  let e = await ge();
  if (e === void 0) return E("no reg.exe under a local Windows directory", false);
  let { stdout: n, stderr: o, exitCode: r, timedOut: a } = await (0, import_chunk_7fsmgfxx.kt)(e, ["query", he], { cwd: import_path2.win32.dirname(e), timeout: 5e3, stdin: "ignore" });
  if (a || r === void 0) return E(a ? "reg.exe took over five seconds" : "reg.exe did not run");
  if (r !== 0) return /unable to find/i.test(`${o}${n}`) ? { failed: false, documents: "absent", autoRun: [] } : E(`reg.exe exited ${r}`);
  let c = { USERPROFILE: (0, import_os2.homedir)(), USERNAME: _("USERNAME"), HOMESHARE: _("HOMESHARE"), HOMEDRIVE: _("HOMEDRIVE"), HOMEPATH: _("HOMEPATH"), APPDATA: _("APPDATA"), LOCALAPPDATA: _("LOCALAPPDATA") }, f = (d) => {
    let p = pe(d, "REG_\\w+").exec(n)?.[1]?.trim();
    if (p === void 0 || p === "") return "absent";
    let h = Ge(n, d, c);
    return h === null ? "unplaceable" : { placed: [h] };
  };
  return { failed: false, documents: f("Personal"), autoRun: I.map((d) => [d, f(d)]) };
}
var I = ["AppData", "Local AppData", "Start Menu", "Programs", "Startup"], en = [`$k='HKCU:\\${he.slice(5)}'`, "$p=$null;$x='!';try{$p=Get-ItemProperty -LiteralPath $k -ErrorAction Stop;$x=''}catch{if($_.FullyQualifiedErrorId -like 'PathNotFound,*'){$x=''}}", `foreach($n in ${I.map((e) => `'${e}'`).join(",")}){$v=$x;if($null -ne $p -and $null -ne $p.$n){$v=([int[]][char[]][string]$p.$n) -join ','};$n+'='+$v}`, "([int[]][char[]]$PROFILE.CurrentUserAllHosts) -join ','"].join(";");
function Re() {
  return m.powershellAnswer ??= nn();
}
async function nn() {
  let e = await e1();
  if (e === null || !import_path2.win32.isAbsolute(e)) return E("no PowerShell was found to ask for $PROFILE");
  let n = (0, import_chunk_5e3gtsn9.Gc)(), { stdout: o, exitCode: r, timedOut: a } = await (0, import_chunk_7fsmgfxx.kt)(e, ["-NoProfile", "-NonInteractive", "-Command", en], { cwd: import_path2.win32.dirname(e), timeout: 5e3, stdin: "ignore", ...n === void 0 ? {} : { env: n, extendEnv: false } });
  if (a || r !== 0) return E(a ? "PowerShell took over five seconds to name $PROFILE" : "PowerShell did not name $PROFILE");
  let c = je(o);
  if (c === null) return E("PowerShell's $PROFILE could not be placed");
  let f = I.map((d) => [d, new RegExp(`^${d.replace(/ /g, "[ ]")}=(.*?)\\r?$`, "m").exec(o)?.[1]]);
  return { failed: false, documents: c, autoRun: f.some(([, d]) => d === void 0 || d === "!") ? "unreadable" : f.flatMap(([d, p]) => p === void 0 ? [] : [[d, tn(p)]]) };
}
function tn(e) {
  let n = /^\d{1,5}(,\d{1,5})*$/.test(e) ? String.fromCharCode(...e.split(",").map(Number)) : e;
  if (n.trim() === "") return "absent";
  let o = y(n === e ? void 0 : n);
  return o === null ? "unplaceable" : { placed: [o] };
}
function E(e, n = true) {
  return { settled: true, documents: null, failed: true, retry: n, why: e };
}
async function j(e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return { resolved: /* @__PURE__ */ new Map(), unresolved: [], missing: [] };
  let n = await Promise.all(e.map(async (o) => {
    let r = await Ee(o);
    return { folder: o, outcome: "unresolved" in r ? await sn(o) : r };
  })).finally(Se);
  return { resolved: new Map(n.flatMap(({ folder: o, outcome: r }) => "resolved" in r && r.resolved !== o ? [[o, r.resolved]] : [])), unresolved: n.flatMap(({ folder: o, outcome: r }) => "unresolved" in r ? [o] : []), missing: n.flatMap(({ folder: o, outcome: r }) => "missing" in r ? [o] : []) };
}
var on = 5e3;
function Se() {
  m.volumeAnswers.clear(), m.powershellAnswer = void 0;
}
function Ee(e) {
  let n = m.volumeAnswers.get(e);
  if (n !== void 0) return n;
  let o = (0, import_chunk_5appeerh.me)(rn(e), on).then((r) => r ?? { unresolved: true });
  return m.volumeAnswers.set(e, o), o;
}
async function rn(e) {
  try {
    return { resolved: await (0, import_promises.realpath)(e) };
  } catch (n) {
    let o = (0, import_chunk_jv7av99m.w)(n);
    if (o !== "ENOENT" && o !== "ENOTDIR") return { unresolved: true };
    let r = import_path2.win32.parse(e).root;
    if (r === "" || r === e) return { unresolved: true };
    return (0, import_promises.realpath)(r).then((a) => ({ resolved: import_path2.win32.join(a, e.slice(r.length)), missing: true }), () => ({ unresolved: true }));
  }
}
async function sn(e) {
  let n = /^([A-Za-z]):[\\/]/.exec(e)?.[1]?.toUpperCase();
  if (n === void 0) return { unresolved: true };
  let o = e.slice(2), r = Ae(_("HOMESHARE"));
  if (r !== null && _("HOMEDRIVE")?.toUpperCase() === `${n}:`) return { resolved: import_path2.win32.join(r, o) };
  let a = await ge();
  if (a === void 0) return { unresolved: true };
  let { stdout: c, exitCode: f, timedOut: d } = await (0, import_chunk_7fsmgfxx.kt)(a, ["query", `HKCU\\Network\\${n}`, "/v", "RemotePath"], { cwd: import_path2.win32.dirname(a), timeout: 5e3, stdin: "ignore" }), p = !d && f === 0 ? ln(c) : null;
  return p === null ? { unresolved: true } : { resolved: import_path2.win32.join(p, o) };
}
function ln(e) {
  return Ae(/^[ \t]+RemotePath[ \t]+REG_SZ[ \t]+(.+?)[ \t]*\r?$/im.exec(e)?.[1]);
}
function Ae(e) {
  return e !== void 0 && /^\\\\(?![?.][\\/])[^\\/]+[\\/]+[^\\/]+/.test(e) ? y(e) : null;
}
async function vAe() {
  return MT() && ((0, import_chunk_2hdy50wd.Xf)() || await (0, import_chunk_t9k2xeez.ON)());
}
function gpe() {
  return MT() && ((0, import_chunk_2hdy50wd.Xf)() || (0, import_chunk_t9k2xeez.Ny)());
}
function MT() {
  return (0, import_chunk_2hdy50wd.Twe)();
}
var cn = "tengu_violin_tailpiece";
function zNn() {
  try {
    return (0, import_chunk_865at33z.b)(cn, true) !== false;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), false;
  }
}
function VNn() {
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID);
}
function W_r() {
  if (!VNn()) return;
  if (!MT()) return "disabled_switch_off";
  return (0, import_chunk_t9k2xeez.Jvt)() ? "disabled_flag_off" : "not_ready";
}
function B9e() {
  return false;
}
function z5() {
  return import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_SESSION_CHANNEL === false;
}
function pPi() {
  try {
    return import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_JUMP_QUEUE ?? (0, import_chunk_865at33z.b)("tengu_valiant_rain", false) === true;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), false;
  }
}
function rje() {
  let e = (0, import_chunk_f9x2f6cx.ns)();
  return e !== null && jae(e) === void 0;
}
function CUt() {
  return (0, import_chunk_t9k2xeez.Ny)() && rje();
}
function Vwt(e) {
  return e === "launched_from_home";
}
var fn = "tengu_violin_mute", Isn = "served-tools-muted", KNn = "served-tools-unmuted", mn = "tengu_violin_plan_classifier";
function mPi() {
  try {
    return (0, import_chunk_865at33z.b)(mn, true) !== false;
  } catch {
    return false;
  }
}
var pn = "tengu_unified_waterfall";
function hPi() {
  let e = import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_ASK_SEATS;
  if (e !== void 0) return e;
  try {
    return (0, import_chunk_865at33z.b)(pn, true) !== false;
  } catch (n) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n)), false;
  }
}
var gn = "tengu_eventual_haven";
function j_r() {
  try {
    return (0, import_chunk_865at33z.b)(gn, true) !== false;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), false;
  }
}
var hn = "tengu_proud_glade";
function gPi(e) {
  try {
    let n = (0, import_chunk_865at33z.b)(hn, e);
    return typeof n === "number" && Number.isFinite(n) && n >= 0 ? n : e;
  } catch (n) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n)), 0;
  }
}
var wn = "tengu_violin_bassbar";
function _Pi() {
  try {
    return (0, import_chunk_865at33z.b)(wn, true) !== false;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), false;
  }
}
var _n = "bot_protected_tengu_moonlit_anchor";
function G_r() {
  return (0, import_chunk_sghy0qej.Pe)(_n, { safe: true });
}
var Rn = "tengu_violin_speculative_classifier";
function yPi(e) {
  try {
    if (!(import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_SPECULATIVE_CLASSIFIER ?? (0, import_chunk_865at33z.b)(Rn, false) === true)) return false;
    return false;
  } catch (n) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n)), false;
  }
}
function oje() {
  try {
    return (0, import_chunk_865at33z.b)(fn, false) === true;
  } catch {
    return false;
  }
}
var Sn = 3e5;
function En(e) {
  try {
    e();
  } catch (n) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n));
  }
}
function TAe(e) {
  let n = (0, import_chunk_865at33z.ys)(e), o = setInterval(En, Math.round(Sn * (0.8 + Math.random() * 0.4)), e);
  return o.unref(), () => {
    clearInterval(o), n();
  };
}
function jae(e = (0, import_chunk_f9x2f6cx.Te)(), n = {}) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return "windows";
  if (!n.ignoringMute && oje()) return "muted";
  if (!Pn()) return "switch_off";
  let o = (0, import_chunk_2fxy1zey.Ojn)();
  if (Msn(e)) return "launched_from_home";
  if (o || (0, import_chunk_2fxy1zey.Ojn)()) return "mount_table_unreadable";
  if (yll()) return "profile_dirs_unread";
  if (Sll() !== void 0) return "profile_dirs_unreadable";
  return;
}
function eZl() {
  let e = import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_ADOPT_MCP;
  return e === void 0 || (0, import_chunk_69qhefwa.Ne)(e);
}
function Pn() {
  let e = import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_SERVE;
  return e === void 0 || (0, import_chunk_69qhefwa.Ne)(e);
}
function Msn(e = (0, import_chunk_f9x2f6cx.Te)()) {
  return Q(e, "all");
}
function SPi(e = (0, import_chunk_f9x2f6cx.Te)()) {
  return (0, import_chunk_cg8dqz0a.x)() === "wsl" && Q(e, "all") && !Q(e, "drives_only");
}
function be(e) {
  let n = L(e), o = e === n ? [e] : [e, n], r = o.map((d) => (0, import_chunk_w5s307zm.ol)(d)).filter((d) => d !== null);
  if (r.some((d) => {
    try {
      return (0, import_fs.lstatSync)((0, import_path.join)(d, ".git")).isSymbolicLink();
    } catch {
      return false;
    }
  })) return "refused_outright";
  let a = r.flatMap((d) => [d, (0, import_chunk_w5s307zm.Gy)(d)]).filter((d) => d !== null), c = a.map((d) => L(d)), f = [...a, ...c];
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && [n, ...c].some((d) => An((0, import_chunk_p548ry42.Eh)(d)))) return "refused_outright";
  return (0, import_chunk_4smdap7r.M)([...o, ...f]);
}
function Fe(e) {
  let n = (0, import_chunk_cg8dqz0a.x)() === "wsl" ? be(e) : void 0;
  if (n === void 0 || n === "refused_outright") return;
  return { bases: n.map((o) => import_path.posix.normalize(o)), mountPoints: [...[...n, ...(0, import_chunk_s7eqtcpb.eV)((0, import_chunk_p1ewvgeh.fw)())].flatMap((o) => (0, import_chunk_2fxy1zey.Aun)(o).slice(1)), ...De([(0, import_os.homedir)(), L((0, import_os.homedir)())], "all"), ...Le("all").map(({ mountPoint: o }) => o)] };
}
function bPi(e = (0, import_chunk_f9x2f6cx.Te)()) {
  let n = Fe(e);
  return n !== void 0 && (n.bases.some((o) => (0, import_chunk_2fxy1zey.szi)(o, "except_two_drive_mounts")) || n.mountPoints.some((o) => (0, import_chunk_2fxy1zey.szi)(o, "all")));
}
function wPi(e = (0, import_chunk_f9x2f6cx.Te)()) {
  let n = Fe(e);
  return n !== void 0 && [...n.bases, ...n.mountPoints].some(import_chunk_2fxy1zey.$Tl);
}
function Q(e, n) {
  let o = (0, import_os.homedir)(), r = (0, import_chunk_2gtmjt3y.Ze)(), a = (0, import_chunk_hazyxdac.KX)();
  if (!(0, import_chunk_p548ry42.A1)(o) || !(0, import_chunk_p548ry42.A1)(r) || !(0, import_chunk_p548ry42.A1)(a)) return true;
  let c = be(e);
  if (c === "refused_outright") return true;
  if (yn(c, n) || bn(c, n)) return true;
  let f = vn(c), d = L(o), p = [o, d], h = [...p, ...f], P = xe(p), F = (0, import_chunk_s7eqtcpb.eV)((0, import_chunk_p1ewvgeh.fw)()), T = (0, import_chunk_cg8dqz0a.x)() === "windows" ? F.map((g) => L(g)) : [], W = (0, import_chunk_4smdap7r.M)([...F, ...T]);
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && ([...h, ...W].some((g) => {
    let R = (0, import_chunk_p548ry42.vun)((0, import_chunk_p548ry42.Eh)(g));
    return R === "own_host" || R === "wsl_host";
  }) || [d, ...T].some((g) => (0, import_chunk_p548ry42.vun)((0, import_chunk_p548ry42.Eh)(g)) === "short_name"))) return true;
  let Ce = p.map((g) => (0, import_chunk_p548ry42.Eh)(g)), C = (0, import_chunk_4smdap7r.M)(c.flatMap(import_chunk_2fxy1zey.Aun));
  return [...h, ...W.flatMap(import_chunk_2fxy1zey.Aun)].some((g) => c.some((R) => H(g, R))) || C.some((g) => W.some((R) => H(g, R))) || C.some((g) => [g, (0, import_chunk_p548ry42.ICr)(g)].some((R) => Z(R, p, P)) || Ce.some((R) => Z((0, import_chunk_p548ry42.rzi)((0, import_chunk_p548ry42.Eh)(g), R), [R]))) || De(p, n).some((g) => C.some((R) => (0, import_chunk_2fxy1zey.Cun)(R, g) || (0, import_chunk_2fxy1zey.Cun)(g, R))) || Le(n).some(({ mountPoint: g, place: R }) => C.some((X) => (0, import_chunk_2fxy1zey.Cun)(g, X) || (0, import_chunk_2fxy1zey.HCr)(X, g).some((ke) => Me(import_path.posix.join(R, ...ke))))) || xn([...gll(), ..._ll()], c);
}
function xe(e) {
  return (0, import_chunk_cg8dqz0a.x)() === "wsl" ? e.filter((n) => {
    let o = import_path.posix.normalize(n);
    return (0, import_chunk_2fxy1zey.vlt)(o).length > 0 || (0, import_chunk_2fxy1zey.ivo)(o).length > 0;
  }) : [];
}
function De(e, n) {
  let o = xe(e);
  return (0, import_chunk_4smdap7r.M)([...e.flatMap((r) => (0, import_chunk_2fxy1zey.Aun)(r).slice(1)).filter((r) => Z(r, e, o)), ...(0, import_chunk_2fxy1zey.Aun)("/").slice(1).filter((r) => J(r, n).some((a) => import_path.posix.normalize(a) !== "/" && (0, import_chunk_p1ewvgeh.GUn)(a, ["/"], "windows_on_wsl")))]);
}
function Le(e) {
  return (0, import_chunk_2fxy1zey.Aun)("/").slice(1).flatMap((n) => J(n, e).filter((o) => o === "/" || (0, import_chunk_p1ewvgeh.mEr)(o, ["/"], "windows_on_wsl")).map((o) => ({ mountPoint: n, place: o })));
}
function Z(e, n, o = []) {
  return (0, import_chunk_p1ewvgeh.GUn)(e, n) || (0, import_chunk_cg8dqz0a.x)() === "windows" && (0, import_chunk_p1ewvgeh.mEr)(e, n) || o.length > 0 && (0, import_chunk_p1ewvgeh.GUn)(e, o, "windows_on_wsl");
}
function H(e, n) {
  let o = (0, import_chunk_p548ry42.Eh)(n), r = (0, import_chunk_p548ry42.rzi)((0, import_chunk_p548ry42.Eh)(e), o);
  return (0, import_chunk_p548ry42.CE)(r, o) || (0, import_chunk_cg8dqz0a.x)() === "windows" && ((0, import_chunk_p548ry42.nzi)(r, o) || (0, import_chunk_p548ry42.DTl)(r, o)) || (0, import_chunk_2fxy1zey.Cun)(e, n);
}
function An(e) {
  switch ((0, import_chunk_p548ry42.vun)(e)) {
    case void 0:
    case "webdav_host":
      return false;
    case "numeric_host":
      return !On.test(/^\\\\([^\\@]+)/.exec(e)?.[1] ?? "");
    default:
      return true;
  }
}
var On = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d?)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
function vn(e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return [];
  return (0, import_chunk_4smdap7r.M)(e.flatMap((n) => (0, import_chunk_2fxy1zey.vlt)(import_path.posix.normalize(n)).flatMap((o) => {
    let r = o.beneath.split("/").filter(Boolean), a = (0, import_chunk_4smdap7r.U)(o.within.split("/"), Boolean);
    return r.length >= 2 && a <= 2 && (0, import_chunk_z6pfqf6e.Jyn)((0, import_chunk_z6pfqf6e.S3t)(r[0])) ? [[o.mountPoint, ...r.slice(a, 2)].join("/").replace(/^\/\//, "/")] : [];
  })));
}
function yn(e, n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return false;
  return e.some((o) => J(o, n).some(Me));
}
function Me(e) {
  return e === "/" || (0, import_chunk_p1ewvgeh.GUn)(e, ["/"], "windows_on_wsl") || (0, import_chunk_p1ewvgeh.mEr)(e, ["/"], "windows_on_wsl");
}
function J(e, n) {
  let o = import_path.posix.normalize(e);
  return (n === "all" ? [...(0, import_chunk_2fxy1zey.vlt)(o), ...(0, import_chunk_2fxy1zey.ivo)(o)] : (0, import_chunk_2fxy1zey.vlt)(o)).flatMap((a) => (0, import_chunk_z6pfqf6e.PFs)(a.beneath).flatMap((c) => c.length >= 2 && (0, import_chunk_z6pfqf6e.Jyn)(c[0]) ? [`/${c.slice(2).join("/")}`] : []));
}
function bn(e, n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return false;
  return e.some((o) => {
    let r = import_path.posix.normalize(o), a = (0, import_chunk_2fxy1zey.vlt)(r), c = n === "all" ? (0, import_chunk_2fxy1zey.ivo)(r).filter((f) => !a.some((d) => d.within === "" && d.mountPoint === f.mountPoint && d.beneath === f.beneath)) : [];
    return Fn.has((0, import_chunk_2172r9j8.Ff)(r.length > 1 ? r.replace(/\/+$/, "") : r)) || [...a, ...c].some((f) => {
      let d = (0, import_chunk_z6pfqf6e.ZLo)(f.beneath);
      return d.length === 1 && (0, import_chunk_z6pfqf6e.Jyn)(d[0]);
    }) || (0, import_chunk_2fxy1zey.Tun)(r).some((f) => Oe(f.within)) || n === "all" && (0, import_chunk_2fxy1zey.LEs)(r).some((f) => Oe(f.within)) || (0, import_chunk_2fxy1zey.Tun)(r).some((f) => K(f.within) && N(f.mountPoint)) || a.some((f) => K(f.beneath) && N(f.mountPoint)) || c.some((f) => {
      if (!K(f.beneath)) return false;
      let d = (0, import_chunk_2fxy1zey.UTl)(f.mountPoint);
      if (d === void 0) return N(f.mountPoint);
      let p = `${f.mountPoint}
${d}`, h = ve.get(p);
      if (h !== void 0) return h;
      let P = N(f.mountPoint);
      return ve.set(p, P), P;
    });
  });
}
function K(e) {
  return (0, import_chunk_z6pfqf6e.ZLo)(e).length === 0;
}
function Oe(e) {
  let n = (0, import_chunk_z6pfqf6e.ZLo)(e);
  return n.length > 0 && (0, import_chunk_z6pfqf6e.Jyn)(n[0]);
}
var ve = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear()), Fn = /* @__PURE__ */ new Set(["/", "/mnt"]);
function N(e) {
  return Tn.some((n) => {
    try {
      return (0, import_fs.statSync)(`${e}/${n}`).isDirectory();
    } catch (o) {
      let r = (0, import_chunk_jv7av99m.w)(o);
      return r !== "ENOENT" && r !== "ENOTDIR";
    }
  });
}
var Tn = ["Users", "Documents and Settings", "Dokumente und Einstellungen"];
function xn(e, n) {
  return e.some((o) => n.some((r) => H(r, o) || H(o, r)));
}
function Hsn(e) {
  try {
    return (0, import_fs.realpathSync)(e);
  } catch {
    return e;
  }
}
function L(e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return Hsn(e);
  try {
    return import_fs.realpathSync.native(e);
  } catch {
    return Hsn(e);
  }
}
function qNn() {
  let e = import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_POLICY;
  return e === void 0 || e === "parity" ? "parity" : "interim";
}
function Epo() {
  return import_chunk_c203g5kd.So.CLAUDE_CODE_REMOTE_TOOLS_CALLER_SESSIONS_MAX;
}
