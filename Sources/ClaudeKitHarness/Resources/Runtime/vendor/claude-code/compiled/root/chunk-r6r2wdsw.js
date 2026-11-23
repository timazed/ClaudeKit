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
var chunk_r6r2wdsw_exports = {};
__export(chunk_r6r2wdsw_exports, {
  BX: () => BX,
  By: () => By,
  Ehn: () => Ehn,
  G0l: () => G0l,
  GYi: () => GYi,
  Hs: () => Hs,
  IVt: () => IVt,
  JYi: () => JYi,
  KYi: () => KYi,
  Np: () => Np,
  OVt: () => OVt,
  POo: () => POo,
  PVt: () => PVt,
  QYi: () => QYi,
  TVn: () => TVn,
  Thn: () => Thn,
  Ude: () => Ude,
  Uy: () => Uy,
  V0l: () => V0l,
  VYi: () => VYi,
  W0l: () => W0l,
  XYi: () => XYi,
  YYi: () => YYi,
  Yke: () => Yke,
  ZIr: () => ZIr,
  ZYi: () => ZYi,
  aIs: () => aIs,
  e2: () => e2,
  e7i: () => e7i,
  eIs: () => eIs,
  eJe: () => eJe,
  fnd: () => fnd,
  iIs: () => iIs,
  j0l: () => j0l,
  jYi: () => jYi,
  khn: () => khn,
  n7i: () => n7i,
  nIs: () => nIs,
  oIs: () => oIs,
  oRt: () => oRt,
  qYi: () => qYi,
  rIs: () => rIs,
  sIs: () => sIs,
  sRt: () => sRt,
  t7i: () => t7i,
  tIs: () => tIs,
  und: () => und,
  vhn: () => vhn,
  xOo: () => xOo,
  xVt: () => xVt,
  z0l: () => z0l,
  zYi: () => zYi
});
module.exports = __toCommonJS(chunk_r6r2wdsw_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_y6mqk49g = require("/$bunfs/root/chunk-y6mqk49g.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_os = require("os");
var import_path = require("path");
var import_path2 = require("path");
var jYi = ["shell", "slash", "fleet", "spare", "respawn"];
function W0l(e) {
  return jYi.includes(e);
}
var khn = ["claude-vscode", "claude-desktop", "claude-desktop-3p"];
function GYi(e) {
  return khn.some((r) => r === e);
}
var oRt = "CLAUDE_BG_DISPATCH_ENTRYPOINT";
var Ehn = ["CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE", "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER"];
function j0l(e) {
  return { ...e.subscriptionType && { CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType }, ...e.rateLimitTier && { CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier } };
}
function zYi() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return { subscriptionType: void 0, rateLimitTier: void 0 };
  return { subscriptionType: import_chunk_c203g5kd.s.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0, rateLimitTier: import_chunk_c203g5kd.s.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0 };
}
function Uy() {
  if ((0, import_chunk_j4z7srhg.ec)()) return "tool_container_daemon";
  if ((0, import_chunk_f9x2f6cx.st)()) return "ccs_tenant";
  return ((0, import_chunk_6e68m1dj.hn)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") && Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) ? "hosted_worker" : "none";
}
function xVt() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return null;
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (e) return (0, import_path2.resolve)(e);
  let r = (0, import_chunk_9b4aq7fb.FA)();
  return r === null ? null : (0, import_path2.resolve)(r, "credentials", "federation");
}
var BX = "proxy-injected";
function PVt() {
  return (0, import_chunk_2yx6c1y2.Rp)().map((e) => e.sandbox?.bwrapPath).find((e) => e != null);
}
function G0l() {
  return (0, import_chunk_2yx6c1y2.Rp)().map((e) => e.sandbox?.socatPath).find((e) => e != null);
}
function eIs() {
  let e = PVt();
  if (e) return (0, import_chunk_c203g5kd.p2)(e);
  return (0, import_chunk_c203g5kd.p2)("bwrap");
}
var ct = /[ \t\n\v\f\r'"]/;
function tIs(e) {
  let r = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY, o = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY, i = (0, import_chunk_y6mqk49g.GQi)(e);
  if (!r && !o) return {};
  let d = Q(r), E = Q(o);
  if (!E.host) E = d;
  let l = {}, u = (f, C) => {
    if (C && e[f] === void 0) l[f] = C;
  };
  if (u("YARN_HTTP_PROXY", r), u("YARN_HTTPS_PROXY", o), u("npm_config_proxy", r), u("npm_config_https_proxy", o), u("npm_config_noproxy", i), u("GLOBAL_AGENT_HTTP_PROXY", r), u("GLOBAL_AGENT_HTTPS_PROXY", o), u("GLOBAL_AGENT_NO_PROXY", i), u("ELECTRON_GET_USE_PROXY", "1"), u("DOCKER_HTTP_PROXY", r), u("DOCKER_HTTPS_PROXY", o), E.host) u("CLOUDSDK_PROXY_TYPE", "http"), u("CLOUDSDK_PROXY_ADDRESS", E.host), u("CLOUDSDK_PROXY_PORT", E.port), u("CLOUDSDK_PROXY_USERNAME", E.user), u("CLOUDSDK_PROXY_PASSWORD", E.pass);
  if (u("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), E.host) {
    let f = e.JAVA_TOOL_OPTIONS;
    if (!f?.includes("-Dhttps.proxyHost=")) {
      let C = Ct(d, E, i);
      l.JAVA_TOOL_OPTIONS = f ? `${f} ${C}` : C;
    }
  }
  return l;
}
function Q(e) {
  if (!e) return { host: "", port: "", user: "", pass: "" };
  try {
    let r = new URL(e);
    if (!r.hostname) return { host: "", port: "", user: "", pass: "" };
    return { host: r.hostname.startsWith("[") && r.hostname.endsWith("]") ? r.hostname.slice(1, -1) : r.hostname, port: r.port || (r.protocol === "https:" ? "443" : "80"), user: decodeURIComponent(r.username), pass: decodeURIComponent(r.password) };
  } catch {
    return { host: "", port: "", user: "", pass: "" };
  }
}
function Ct(e, r, o) {
  let i = [], d = (E, l) => {
    if (l && !ct.test(l)) i.push(`-D${E}=${l}`);
  };
  if (d("http.proxyHost", e.host), d("http.proxyPort", e.port), d("https.proxyHost", r.host), d("https.proxyPort", r.port), d("http.proxyUser", e.user), d("http.proxyPassword", e.pass), d("https.proxyUser", r.user), d("https.proxyPassword", r.pass), o) d("http.nonProxyHosts", Ot(o));
  return i.push("-Djdk.http.auth.tunneling.disabledSchemes="), i.push("-Djdk.http.auth.proxying.disabledSchemes="), i.join(" ");
}
function Ot(e) {
  return e.split(/[,\s]+/).map((r) => r.trim()).filter(Boolean).flatMap((r) => {
    if (r.startsWith(".")) return [`*${r}`];
    return mt(r) ?? [r];
  }).join("|");
}
function mt(e) {
  let r = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!r) return;
  let o = [Number(r[1]), Number(r[2]), Number(r[3]), Number(r[4])], i = Number(r[5]);
  if (o.some((C) => C > 255) || i < 8 || i > 24) return [e];
  let d = Math.floor(i / 8), E = i % 8;
  if (E === 0) return [`${o.slice(0, d).join(".")}.*`];
  let l = 2 ** (8 - E);
  if (l > 16) return [e];
  let u = o[d] - o[d] % l, f = [];
  for (let C = u; C < u + l; C++) f.push(`${[...o.slice(0, d), C].join(".")}.*`);
  return f;
}
(0, import_chunk_adx6804h.B)();
var z0l = "anthropic/shellMcpServers", Dt = 16384, At = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/)), St = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.L6e)({ protocol: /^https$/ }).refine((e) => !e.includes("$"))), Z = new import_chunk_2904xtvq.j(() => ({ said: void 0, text: void 0 }));
function V0l(e) {
  let r = (0, import_chunk_f9x2f6cx.kr)(Z);
  if (e === r.said) return;
  let o = typeof e === "string" && e.length <= Dt ? (0, import_chunk_0jve1fep.et)(e, false) : void 0, i = (0, import_chunk_gd77dyw4.Hr)((0, import_chunk_0jve1fep.Le)(o) ? o : {}, (E, l) => At().safeParse(l).success && St().safeParse(E).success), d = (0, import_chunk_khxw3ng0.er)(i, (E) => ({ type: "http", url: E }));
  r.said = e, r.text = Object.keys(d).length === 0 ? void 0 : (0, import_chunk_w578pjby._)({ mcpServers: d });
}
function ee() {
  let { text: e } = (0, import_chunk_f9x2f6cx.kr)(Z);
  return e === void 0 ? {} : { CLAUDE_CODE_SHELL_MCP_SERVERS: e };
}
var OVt = ["CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SOURCE", oRt, "CLAUDE_BG_ISOLATION", "CLAUDE_BG_BACKEND", "CLAUDE_CODE_SESSION_NAME", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS", "CLAUDE_CODE_RESUME_PROMPT", "CLAUDE_CODE_RESUME_SHOWS_CUT_OFF_CALLS", "CLAUDE_CODE_RESUME_REASON", "CLAUDE_CODE_RESUME_SOURCE_ALIVE", "CLAUDE_CODE_SESSION_BEGAN_AS_COPY", "CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME", "CLAUDE_BG_POST_CLEAR_RESPAWN", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_BG_MEMORY_TOGGLED_OFF", "CLAUDE_BG_AUTO_MEMORY_OFF", "CLAUDE_BG_GATEWAY_ROUTED", "CLAUDE_BG_WORKSPACE_TRUSTED", "CLAUDE_BG_CARRIED_PROMPTS_SHA256", "CLAUDE_BG_GATEWAY_WITHHELD", "CLAUDE_BG_SESSION_CREDENTIAL", "CLAUDE_CODE_RELAUNCH_HOME_TRUST", "CLAUDE_CODE_RELAUNCH_SANDBOX_HOLD", "CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH", "CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS", "CLAUDE_CODE_RESUME_HINT_COMMAND", "CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS", "CLAUDE_CODE_CHILD_NOTES_DIR", ...Ehn];
class _e {
  scrubEnabledLatched = void 0;
  scrubSandboxAvailableLatched = void 0;
  scrubPathsLatched = void 0;
  scriptCallCounts = /* @__PURE__ */ new Map();
  scriptCapsLatched = void 0;
  setScrubEnabledLatched(e) {
    this.scrubEnabledLatched = e;
  }
  setScrubSandboxAvailableLatched(e) {
    this.scrubSandboxAvailableLatched = e;
  }
  setScrubPathsLatched(e) {
    this.scrubPathsLatched = e;
  }
  setScriptCapsLatched(e) {
    this.scriptCapsLatched = e;
  }
  reset() {
    this.scrubEnabledLatched = void 0, this.scrubSandboxAvailableLatched = void 0, this.scrubPathsLatched = void 0, this.scriptCallCounts.clear(), this.scriptCapsLatched = void 0;
  }
}
var O = (0, import_chunk_t57w17k7.de)(new _e(), (e) => {
  e.reset(), (0, import_chunk_9zdrdv25.GUl)();
});
class fe {
  getAgentProxyEnv = void 0;
  getGhStandinDir = void 0;
  settingsEnvForChildren = {};
  hybridConnectionForChildren = {};
  gitTokenForChildren = void 0;
  hipaaTierNoticeGiven = false;
}
var m = new import_chunk_2904xtvq.j(() => new fe());
function Np() {
  let e = O.scrubEnabledLatched;
  if (e !== void 0) return e;
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB === true;
  return O.setScrubEnabledLatched(r), r;
}
function xOo() {
  if (Np()) return true;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB === false) return false;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var M = [".env", ".env.local", ".env.development", ".env.development.local", ".env.test", ".env.test.local", ".env.production", ".env.production.local"], Tt = ["bunfig.toml", "package.json", ".npmrc", ".yarnrc", ".yarnrc.yml", ".gitmodules", "package-lock.json", "yarn.lock", "pnpm-lock.yaml", ...M], Ee = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map((e) => `/${e}`), re = ".";
function le(e) {
  let r = /* @__PURE__ */ new Set();
  for (let o of [import_chunk_2yx6c1y2.CM, import_chunk_w5s307zm.Mi, import_chunk_2yx6c1y2.eF]) try {
    r.add(`${(0, import_chunk_6mfepmbb.bB)(e, o)}/.claude`);
  } catch {
  }
  return [...r];
}
function Ude() {
  if (O.scrubSandboxAvailableLatched !== void 0) return O.scrubSandboxAvailableLatched;
  return false;
}
async function VYi() {
  if ((0, import_chunk_9zdrdv25.R0s)(), !Np()) return;
  let e = (0, import_os.homedir)(), r = (0, import_chunk_f9x2f6cx.Te)(), o = process.env.GITHUB_ENV ? (0, import_path.dirname)(process.env.GITHUB_ENV) : void 0, i = process.env.GITHUB_WORKSPACE;
  O.setScrubSandboxAvailableLatched(false);
  let d = (process.env.PATH ?? "").split(":").map((f) => f ? import_path.posix.normalize(f).replace(/\/+$/, "") : f).filter((f) => f && Ee.some((C) => f.startsWith(`${C}/`)));
  O.setScrubPathsLatched({ home: e, originalCwd: r, claudeConfigDir: process.env.CLAUDE_CONFIG_DIR, federationCacheDir: xVt() ?? void 0, canonicalClaudeDirs: le(r), runnerFileCommandsDir: o, workspace: i, GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH, GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH, pathDirs: d }), pe();
  return;
}
function pe() {
  if (O.scriptCapsLatched !== void 0) return;
  let e = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!e) {
    O.setScriptCapsLatched(null);
    return;
  }
  try {
    let r = (0, import_chunk_w578pjby.te)(e);
    if (r && typeof r === "object" && !Array.isArray(r)) {
      let o = (0, import_chunk_gd77dyw4.Hr)(r, (i, d) => typeof i === "number" && Number.isFinite(i) && d.trim().length > 0);
      O.setScriptCapsLatched(Object.keys(o).length > 0 ? o : null);
    } else O.setScriptCapsLatched(null);
  } catch {
    O.setScriptCapsLatched(null);
  }
}
function KYi(e) {
  if (!Np()) return;
  if (pe(), !O.scriptCapsLatched) return;
  let { scriptCapsLatched: r, scriptCallCounts: o } = O;
  for (let [i, d] of Object.entries(r)) {
    let E = e.split(i).length - 1;
    if (E > 0) {
      let l = (o.get(i) ?? 0) + E;
      if (o.set(i, l), l > d) throw Error(`Script call limit exceeded: ${i} has been called ${l} times (cap: ${d}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`);
    }
  }
}
function und(e) {
  m.of((0, import_chunk_f9x2f6cx.N)().host).getAgentProxyEnv = e;
}
function fnd(e) {
  m.of((0, import_chunk_f9x2f6cx.N)().host).getGhStandinDir = e;
}
function IVt() {
  return m.of((0, import_chunk_f9x2f6cx.N)().host).getAgentProxyEnv?.() ?? {};
}
function qYi() {
  return m.of((0, import_chunk_f9x2f6cx.N)().host).getGhStandinDir?.();
}
function YYi(e) {
  m.of((0, import_chunk_f9x2f6cx.N)().host).settingsEnvForChildren = e;
}
function ZIr(e) {
  m.of((0, import_chunk_f9x2f6cx.N)().host).gitTokenForChildren = e;
}
function XYi(e) {
  m.of((0, import_chunk_f9x2f6cx.N)().host).hybridConnectionForChildren = e;
}
function vhn() {
  if (!(0, import_chunk_ch6jxpf8.a1l)()) return ue().map(([e, { own: r }]) => [e, r]);
  return [];
}
function JYi() {
  {
    let e = [...ue().map(([r]) => r), ...Object.keys((0, import_chunk_ch6jxpf8.AKt)())];
    if (e.length > 0) {
      let r = (0, import_chunk_ch6jxpf8.EHs)(() => (0, import_chunk_ch6jxpf8.Cgn)(() => ({ ...Hs() })));
      return e.map((o) => [o, r[By(r, o)]]);
    }
  }
  return [];
}
function nIs(e, r) {
  if (r.length === 0) return e;
  let o = { ...e };
  for (let [i, d] of r) ce(o, i, d);
  return o;
}
function ue() {
  return Object.entries(m.of((0, import_chunk_f9x2f6cx.N)().host).hybridConnectionForChildren).filter(([e, { held: r }]) => POo(e, r));
}
function POo(e, r) {
  let o = process.env[e];
  return o === r || r === "" && o === void 0 && (0, import_chunk_cg8dqz0a.x)() === "windows";
}
function eJe(e = vhn()) {
  return nIs({ ...process.env }, e);
}
function ce(e, r, o) {
  let i = By(e, r);
  if (o === void 0) delete e[i];
  else e[i] = o;
}
function TVn(e) {
  let { settingsEnvForChildren: r } = m.of((0, import_chunk_f9x2f6cx.N)().host);
  return r[By(r, e)];
}
function QYi() {
  return (0, import_chunk_44yfdc64.Tqt)().get("PATH") ?? TVn("PATH");
}
function Ce() {
  return Object.fromEntries([...vhn(), ...(0, import_chunk_44yfdc64.Tqt)()]);
}
function e2(e) {
  let r = Ce(), o = By(r, e);
  if (Object.hasOwn(r, o)) return r[o];
  let { settingsEnvForChildren: i } = m.of((0, import_chunk_f9x2f6cx.N)().host);
  return i[By(i, e)] ?? process.env[e];
}
var Rt = "3";
function rIs() {
  return import_chunk_c203g5kd.s.CLAUDE_BG_BACKEND === "daemon" && import_chunk_c203g5kd.s.FORCE_COLOR === Rt;
}
function oIs() {
  if (!rIs()) return false;
  let { settingsEnvForChildren: e } = m.of((0, import_chunk_f9x2f6cx.N)().host);
  return !Object.hasOwn(e, By(e, "FORCE_COLOR"));
}
function By(e, r) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows" || Object.hasOwn(e, r)) return r;
  let o = r.toUpperCase();
  return Object.keys(e).find((i) => i.toUpperCase() === o) ?? r;
}
function sIs(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function iIs(e) {
  let r = e.toUpperCase();
  return !(0, import_chunk_9zdrdv25.s4n)(e) && (0, import_chunk_9zdrdv25.v6e)(e) && !import_chunk_9zdrdv25.zUl.has(r) && !(0, import_chunk_9zdrdv25.LDo)(r);
}
var oe = new Set(import_chunk_gd77dyw4.P6e.map((e) => e.toUpperCase()));
function aIs() {
  if (!Thn()) return [];
  let e = m.of((0, import_chunk_f9x2f6cx.N)().host);
  if (!e.hipaaTierNoticeGiven) e.hipaaTierNoticeGiven = true, (0, import_chunk_w578pjby.t)("Withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion: the org is under HIPAA, or its policy verdict has not landed yet");
  return import_chunk_9zdrdv25.qqt;
}
function Thn() {
  return Uy() === "hosted_worker" && (0, import_chunk_2zeyvjwb.aNl)() || (0, import_chunk_2zeyvjwb.uo)("hipaa");
}
var ne = new Set(import_chunk_9zdrdv25.qqt.map((e) => e.toUpperCase()));
function sRt(e) {
  let r = e.startsWith("INPUT_") ? e.slice(6) : e;
  return sIs(r) || (0, import_chunk_gd77dyw4.a1e)(r) || r.startsWith("OTEL_") || r === "CLAUDE_CODE_OTEL_DIAG_STDERR";
}
function P(e, r) {
  return (e === "CLAUDE_CODE_OAUTH_TOKEN" || e === "ANTHROPIC_API_KEY") && r[e] === import_chunk_9zdrdv25.IEe && r.ANTHROPIC_UNIX_SOCKET !== void 0;
}
function Yke() {
  let e = process.env, r = (o) => P(o, e) && !Object.keys(e).some((i) => i !== o && i.toUpperCase() === o);
  return [...import_chunk_gd77dyw4.P6e.filter((o) => !r(o)), ...(0, import_chunk_6e68m1dj.Ru)() || (0, import_chunk_gd77dyw4.bra)(e, { CLAUDE_CODE_OAUTH_TOKEN: r("CLAUDE_CODE_OAUTH_TOKEN") ? e.CLAUDE_CODE_OAUTH_TOKEN : void 0, CLAUDE_CODE_OAUTH_REFRESH_TOKEN: e.CLAUDE_CODE_OAUTH_REFRESH_TOKEN && !xOo() && !Thn() ? e.CLAUDE_CODE_OAUTH_REFRESH_TOKEN : void 0 }) ? ["CLAUDE_CODE_OAUTH_SCOPES"] : [], ...Object.keys(e).filter((o) => sRt(o.toUpperCase())), ...(0, import_chunk_gd77dyw4.l1e)(e), ...(0, import_chunk_2mwshd9r.i7i)(), ...(0, import_chunk_6e68m1dj.qQi)(), ...aIs().filter((o) => !r(o)), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_SKILL_ATTRIBUTION", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_START_DIR", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_MCP_SERVE_SETTINGS", "CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS", "CLAUDE_CODE_MCP_SERVE_MACHINE_PLUGINS", "CLAUDE_CODE_REMOTE_TOOLS_FORWARD", "CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST", "CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT", ...[], ...OVt];
}
(0, import_chunk_y6mqk49g.s1l)(Yke);
var Lt = /* @__PURE__ */ new Set(["BUN_GC_TIMER_INTERVAL", "BUN_GC_TIMER_DISABLE", "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS", "BUN_IDLE_GC_SECONDS"]), ht = /* @__PURE__ */ new Set(["MIMALLOC_PURGE_HOLES_MIN_INTERVAL", "MIMALLOC_PURGE_DELAY", "MIMALLOC_PURGE_HOLES", "MIMALLOC_PURGE_HOLES_LARGE_FLOOR", "MIMALLOC_PURGE_HOLES_LARGE_FLOOR_EPOCHS"]);
function se(e) {
  let r = e.toUpperCase();
  return r.startsWith("BUN_JSC_") || r.startsWith("BUN_AOT_") || Lt.has(r) || ht.has(r) || r === "BUN_FEATURE_FLAG_HOT_CODE_HUGE_PAGES" || r === "CLAUDE_CODE_COUNT_GARBAGE_COLLECTIONS" || r === "CLAUDE_CODE_THREAD_CPU_ONE_IN" || r === "CLAUDE_CODE_STREAM_EVENT_HOLD_MS" || r === "CLAUDE_CODE_STREAM_EVENT_MAX_LINE_BYTES" || r === "CLAUDE_CODE_STREAM_EVENT_NO_SUBSCRIBER_HOLD_MS" || r === "CLAUDE_CODE_INCREMENTAL_REQUEST_BODY" || r === "CLAUDE_CODE_PLAIN_DELTA_FAST_PATH" || r === "CLAUDE_CODE_PLAIN_DELTA_DIRECT_WRITE" || r === "CLAUDE_CODE_UNWATCHED_REPLY_HOLD_MS" || r === "CLAUDE_CODE_MAIN_REPLY_HOLD_MS" || r === "CLAUDE_CODE_FIRST_CALL_THINKING_TITLES" || r === "CLAUDE_CODE_THINKING_RESUMPTION" || r === "CLAUDE_CODE_PROJECTS_FEATURE_FLAGS" || r === "CLAUDE_CODE_REMOTE_STALL_CHECK_INTERVAL_MS" || r === "CLAUDE_CODE_CCR_ONE_PLUGIN_LOAD_PER_RELOAD" || r === "CLAUDE_CODE_CCR_FOLD_FIRST_TURN_RESCAN" || r === "CLAUDE_CODE_CCR_SLOW_SKILLS_WATCH" || r === "CLAUDE_CODE_MCP_SERVE_TUNNEL_BINARY_FRAMES" || r === "CLAUDE_CODE_MCP_SERVE_GARBAGE_COLLECTIONS" || false || r === "CLAUDE_CODE_CCR_REQUESTS_BY_FETCH" || r === "CLAUDE_CODE_STREAM_TIMER_SLACK_MS" || r === "CLAUDE_CODE_PLAIN_DELTA_TAKE_AT_SOURCE" || r === "CLAUDE_CODE_RUNNER_START_NOTES" || r === "CLAUDE_CODE_RETRY_WATCHDOG" && (0, import_chunk_6e68m1dj.ny)();
}
function Oe() {
  let e = m.of((0, import_chunk_f9x2f6cx.N)().host), r = e.gitTokenForChildren === void 0 ? e.settingsEnvForChildren : { ...e.settingsEnvForChildren, CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.gitTokenForChildren };
  return { proxyEnv: e.getAgentProxyEnv?.() ?? {}, settingsEnvForChildren: { ...r, ...ee() }, personsValues: Ce(), ownEnv: process.env };
}
function Hs(e) {
  let { proxyEnv: r, settingsEnvForChildren: o, personsValues: i, ownEnv: d } = Oe(), E = Object.keys(r).length > 0, l = Object.keys(o).length > 0, u = Object.keys(i).length > 0, f = d, C = l || e !== void 0 || u;
  if (C) {
    f = { ...e, ...d };
    for (let [a, A] of Object.entries(o)) f[By(f, a)] = A;
    for (let [a, A] of Object.entries(i)) ce(f, a, A ?? e?.[a]);
  }
  let T = Object.keys(process.env), D = C ? Object.keys(f) : T, b = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true, G = b && E, w = G ? { ...f, ...r } : f, F = b ? tIs(w) : {}, me = Object.keys(F).length > 0, k = xOo(), De = T.some((a) => oe.has(a.toUpperCase())) || T.some((a) => sRt(a.toUpperCase())) || process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 || process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0 || (0, import_chunk_6e68m1dj.Ru)() && process.env.CLAUDE_CODE_OAUTH_SCOPES !== void 0, Ae = (0, import_chunk_gd77dyw4.l1e)(process.env), Se = (0, import_chunk_2mwshd9r.i7i)(), Re = (0, import_chunk_6e68m1dj.qQi)(), K = Thn() && T.some((a) => ne.has((0, import_chunk_9zdrdv25.sP)(a))), W = false;
  W = OVt.some((a) => process.env[a] !== void 0);
  let he = T.some((a) => /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(a)), xe = import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0, Ue = import_chunk_c203g5kd.s.CLAUDE_CODE_QUESTION_EXTENDED || import_chunk_c203g5kd.s.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS, Ie = import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES, ge = import_chunk_c203g5kd.s.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH || import_chunk_c203g5kd.s.CLAUDE_CODE_SDK_HAS_SESSIONS_OAUTH_REFRESH || import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_AUTH_ASK_AT_START, Ne = import_chunk_c203g5kd.s.CLAUDE_CODE_SDK_READS_SESSION_STATE, Pe = import_chunk_c203g5kd.s.CLAUDE_CODE_SDK_READS_STARTUP_MARKS, be = (0, import_chunk_2yx6c1y2.yB)(), He = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED, ve = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES"), ye = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD" || a.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST"), Be = false, Me = import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT || import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT || import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS || import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT || import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT || import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_START_DIR !== void 0, Ge = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_HOST_ALLOW_RESETS_DENIAL_STREAK"), we = import_chunk_c203g5kd.s.CLAUDE_CODE_CONFIG_PROBE, $e = import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0, Fe = import_chunk_c203g5kd.s.CLAUDE_CODE_OVERLOADED_RETRY_MAX_WAIT_MS !== void 0, ke = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_SPARE_DEFER_ALL_MCP"), Ke = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_MCP_CONFIG, We = import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_APPS_HOST || import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_APPS_NO_TOOL_ROUTE, Ye = import_chunk_c203g5kd.s.CLAUDE_CODE_NOTIFICATIONS_HOST, V = false;
  V = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_HOST_SHOWS_CONNECTION_NOTICE");
  let Ve = import_chunk_c203g5kd.s.CLAUDE_CODE_UPFRONT_TOOLS !== void 0, je = import_chunk_c203g5kd.s.CLAUDE_CODE_ATTACHMENTS_BY_PATH, ze = import_chunk_c203g5kd.s.CLAUDE_CODE_PROGRAM_USE_CASE_ID !== void 0, Xe = import_chunk_c203g5kd.s.CLAUDE_CODE_SLEEP_COMPACT || import_chunk_c203g5kd.s.CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS !== void 0, Je = import_chunk_c203g5kd.s.CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS !== void 0, qe = import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_SHARE !== void 0, Qe = import_chunk_c203g5kd.s.CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST !== void 0, Ze = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS"), tt = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP"), rt = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT"), ot = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_HOST_ARTIFACT_TYPE_COMMANDS"), nt = import_chunk_c203g5kd.s.CLAUDE_CODE_WARN_DISK_FREE_GIB !== void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_WARN_MEMORY_FREE_GIB !== void 0 || import_chunk_c203g5kd.s.CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY, at = import_chunk_c203g5kd.s.CLAUDE_CHROME_TAB_GROUP_KEY !== void 0, it = D.some((a) => a.toUpperCase() === "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS"), _t = import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD, ft = import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_SETTINGS !== void 0 || import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS !== void 0 || import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_MACHINE_PLUGINS !== void 0 || import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT !== void 0, Et = import_chunk_c203g5kd.s.CLAUDE_CODE_REPLY_GATE_POLICY !== void 0, H = false;
  H = D.some(ae);
  let z = b && D.some(se), X = import_chunk_c203g5kd.s.CLAUDE_CODE_RUNNER_MODEL_SOCKET !== void 0 && import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET === import_chunk_c203g5kd.s.CLAUDE_CODE_RUNNER_MODEL_SOCKET, dt = false;
  if (e === void 0 && !X && !E && !me && !k && !W && !De && !Ae.length && !Se.length && !Re.length && !K && !he && !l && !u && !xe && !Ue && !Ie && !ge && !Ne && !Pe && !be && !He && !ve && !Ge && !ye && !Be && !Me && !we && !$e && !Fe && !ke && !Ke && !We && !Ye && !V && !Ve && !je && !ze && !Xe && !Je && !qe && !Qe && !nt && !Ze && !tt && !rt && !ot && !at && !it && !_t && !ft && !Et && !H && !z && !dt) return process.env;
  let J = { ...r, ...F }, c = (G || C) && (0, import_chunk_cg8dqz0a.x)() !== "windows" ? w : { ...f };
  for (let a of Object.keys(J)) {
    let A = By(c, a);
    if (A !== a) delete c[A];
  }
  Object.assign(c, J);
  let lt = new Set([...Yke(), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_QUESTION_EXTENDED", "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS", "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_HAS_SESSIONS_OAUTH_REFRESH", "CLAUDE_CODE_HOST_AUTH_ASK_AT_START", "CLAUDE_CODE_SDK_READS_SESSION_STATE", "CLAUDE_CODE_SDK_READS_STARTUP_MARKS", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES", "CLAUDE_CODE_HOST_ALLOW_RESETS_DENIAL_STREAK", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_START_DIR", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_MCP_STARTUP_WAIT_MS", "CLAUDE_CODE_OVERLOADED_RETRY_MAX_WAIT_MS", "CLAUDE_CODE_SPARE_DEFER_ALL_MCP", "CLAUDE_CODE_REMOTE_MCP_CONFIG", "CLAUDE_CODE_REPLY_GATE_POLICY", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_MCP_APPS_NO_TOOL_ROUTE", "CLAUDE_CODE_NOTIFICATIONS_HOST", "CLAUDE_CODE_HOST_SHOWS_CONNECTION_NOTICE", "CLAUDE_CODE_UPFRONT_TOOLS", "CLAUDE_CODE_ATTACHMENTS_BY_PATH", "CLAUDE_CODE_PROGRAM_USE_CASE_ID", "CLAUDE_CODE_SLEEP_COMPACT", "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS", "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS", "CLAUDE_CODE_ARTIFACT_SHARE", "CLAUDE_CODE_ARTIFACT_VERSIONS", "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP", "CLAUDE_CODE_HOST_ARTIFACT_TYPE_COMMANDS", "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST", "CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT", "CLAUDE_CODE_WARN_DISK_FREE_GIB", "CLAUDE_CODE_WARN_MEMORY_FREE_GIB", "CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY", "CLAUDE_CHROME_TAB_GROUP_KEY", "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS"].map((a) => a.toUpperCase())), h = Object.keys(c);
  for (let a of h) if (lt.has(a.toUpperCase()) || sRt(a.toUpperCase()) || oe.has(a.toUpperCase()) && !P(a, c) || K && ne.has((0, import_chunk_9zdrdv25.sP)(a)) && (a.includes("-") || !P(a, c))) delete c[a];
  for (let a of OVt) delete c[a];
  if (oIs()) delete c[By(c, "FORCE_COLOR")];
  for (let a of h) if (a.startsWith("OTEL_")) delete c[a];
  if (delete c.CLAUDE_CODE_OTEL_DIAG_STDERR, delete c.CLAUDE_CODE_PLUGIN_ATTRIBUTION, delete c.CLAUDE_CODE_SKILL_ATTRIBUTION, H) {
    for (let a of h) if (ae(a)) delete c[a];
  }
  if (z) {
    for (let a of h) if (se(a)) delete c[a];
  }
  if (X) {
    if (delete c.ANTHROPIC_UNIX_SOCKET, delete c.CLAUDE_CODE_OAUTH_TOKEN, delete c.CLAUDE_CODE_OAUTH_401_WAIT_MS, delete c.ANTHROPIC_BASE_URL, import_chunk_c203g5kd.s.SESSION_INGRESS_URL !== void 0) c.ANTHROPIC_BASE_URL = import_chunk_c203g5kd.s.SESSION_INGRESS_URL;
  }
  if (!k) return c;
  let pt = xt(), ut = (0, import_chunk_9zdrdv25.U_n)().length > 0;
  for (let [a, A] of Object.entries(c)) {
    if (A === BX && Object.hasOwn(r, a)) continue;
    if (P(a, c)) continue;
    if (pt.has((0, import_chunk_9zdrdv25.sP)(a)) || import_chunk_9zdrdv25.W0r.test(a) || (0, import_chunk_9zdrdv25.j0r)(a) || ut && iIs(a)) {
      delete c[a];
      continue;
    }
    if (A === void 0 || (0, import_chunk_9zdrdv25.s4n)(a)) continue;
    let R = typeof A === "string" ? A : String(A);
    if ((0, import_chunk_9zdrdv25.$_n)(a)) {
      let I = (0, import_chunk_9zdrdv25.$0r)(a, R);
      if (I.value !== R) c[a] = I.value;
      if (I.cut) {
        let g = (0, import_chunk_9zdrdv25.rra)(a, I.value);
        if (g !== void 0 && !(0, import_chunk_9zdrdv25.nra)(c, g.name)) c[g.name] = g.value;
      }
      continue;
    }
    let U = (0, import_chunk_9zdrdv25.B0r)(a, R);
    if (U === void 0) {
      if ((0, import_chunk_9zdrdv25.CB)(R)) delete c[a];
    } else if (U !== R) if (U === "") delete c[a];
    else c[a] = U;
  }
  return c;
}
function ZYi(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return true;
  let r = Object.values(Oe());
  for (let o of e) if (r.some((i) => i[o] !== void 0)) return true;
  return false;
}
function e7i() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (e !== void 0) return e;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function t7i(e) {
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows", o = Object.keys(e).filter((i) => i === "AWS_BEARER_TOKEN_BEDROCK" || r && i.toUpperCase() === "AWS_BEARER_TOKEN_BEDROCK");
  if (o.some((i) => e[i] === "")) for (let i of o) delete e[i];
}
function n7i() {
  let e = O.scrubPathsLatched, r = e?.home ?? (0, import_os.homedir)(), o = e?.originalCwd ?? (0, import_chunk_f9x2f6cx.Te)(), i = e?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH, d = e?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? (0, import_path.dirname)(process.env.GITHUB_ENV) : void 0), E = e?.workspace ?? process.env.GITHUB_WORKSPACE, l = E && import_path.posix.resolve(E) !== import_path.posix.resolve(o) ? [`${E}/.git/hooks`, `${E}/.git/config`, `${E}/.git/config.lock`, `${E}/.git/config.worktree`, `${E}/.git/config.worktree.lock`, `${E}/.git/commondir`, `${E}/.git/worktrees`, `${E}/.git/modules`, `${E}/.git/info/exclude`, `${E}/.git/glab-cli`, `${E}/.gitmodules`, `${E}/.github`, `${E}/.claude`] : [];
  return { filesystem: { allowWrite: Ee, denyRead: ["/run/docker.sock", "/run/containerd/containerd.sock", "/run/podman/podman.sock", "/run/buildkit/buildkitd.sock", "/run/dbus", "/run/user", e?.federationCacheDir ?? xVt()].filter((u) => !!u), denyWrite: [`${r}/.bash_profile`, `${r}/.bashrc`, `${r}/.bash_aliases`, `${r}/.bash_login`, `${r}/.bash_logout`, `${r}/.profile`, `${r}/.zshrc`, `${r}/.zprofile`, `${r}/.zshenv`, `${r}/.zlogin`, `${r}/.zlogout`, `${r}/.claude`, `${r}/.claude.json`, e?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR, `${r}/.gitconfig`, `${r}/.config/git`, `${r}/.bunfig.toml`, `${o}/bunfig.toml`, `${o}/package.json`, ...M.map((u) => `${o}/${u}`), `${r}/.npmrc`, `${o}/.npmrc`, `${r}/.yarnrc`, `${r}/.yarnrc.yml`, `${o}/.yarnrc`, `${o}/.yarnrc.yml`, `${r}/.config/pip`, `${r}/.pip`, `${o}/package-lock.json`, `${o}/yarn.lock`, `${o}/pnpm-lock.yaml`, `${o}/node_modules/.bin`, `${o}/.git/modules`, `${o}/scripts`, `${o}/.claude`, ...e?.canonicalClaudeDirs ?? le(o), `${o}/.github`, `${r}/.local/bin`, `${r}/runners`, `${r}/actions-runner`, "/tmp/inline-comments-buffer.jsonl", ...e?.pathDirs ?? [], d, i, i && i.includes("/_actions/") ? i.slice(0, i.indexOf("/_actions/") + 9) : void 0, e?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH, `${r}/.config/gh`, `${r}/.config/glab-cli`, `${r}/.netrc`, `${r}/.ssh`, `${o}/.git/hooks`, `${o}/.git/config`, `${o}/.git/config.lock`, `${o}/.git/config.worktree`, `${o}/.git/config.worktree.lock`, `${o}/.git/commondir`, `${o}/.git/worktrees`, `${o}/.gitmodules`, `${o}/.git/info/exclude`, `${o}/.git/glab-cli`, ...l].filter((u) => !!u) } };
}
function ae(e) {
  return e.startsWith("CLAUDE_CODE_RELAUNCH_PROACTIVITY_");
}
var v;
function xt() {
  let e = (0, import_chunk_9zdrdv25.U_n)(), r = e.length > 0;
  if (v?.armed !== r) v = { armed: r, names: new Set([...import_chunk_9zdrdv25.Kqt, ...e].map((o) => o.toUpperCase())) };
  return v.names;
}
