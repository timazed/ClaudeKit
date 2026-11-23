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
var chunk_jrvfex01_exports = {};
__export(chunk_jrvfex01_exports, {
  $Xr: () => $Xr,
  FXr: () => FXr,
  UXr: () => UXr,
  VJt: () => VJt,
  YWa: () => YWa,
  k4e: () => k4e,
  n_t: () => n_t,
  r_t: () => r_t,
  zJt: () => zJt
});
module.exports = __toCommonJS(chunk_jrvfex01_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_ydqx1fa1 = require("/$bunfs/root/chunk-ydqx1fa1.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_crypto = require("crypto");
var import_path = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path2 = require("path");
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var Q = 4194304, ee = 5, te = ["sso_account_id", "sso_role_name", "sso_session", "sso_start_url", "role_arn", "source_profile", "credential_source", "credential_process", "web_identity_token_file", "region"], re = ["type", "client_email", "audience", "service_account_impersonation_url", "quota_project_id"], ne = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.n)().optional().catch(void 0);
  return (0, import_chunk_adx6804h.c)({ type: e, client_email: e, audience: e, service_account_impersonation_url: e, quota_project_id: e });
});
async function O(e) {
  try {
    let r = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.u2 | import_chunk_jxja0v0z.cr);
    try {
      let i = await r.stat();
      if (!i.isFile() || i.size > Q) {
        (0, import_chunk_w578pjby.t)("[3p-model-memory] an AWS or gcloud identity file is over 4 MB or not a regular file, so start-up model checks will not reuse saved results");
        return;
      }
      let f = Buffer.alloc(i.size), a = 0;
      while (a < i.size) {
        let { bytesRead: o } = await r.read(f, a, i.size - a, a);
        if (o === 0) break;
        a += o;
      }
      return { text: f.subarray(0, a).toString("utf8"), mtimeMs: i.mtimeMs };
    } finally {
      await r.close();
    }
  } catch (r) {
    if ((0, import_chunk_jv7av99m.J)(r)) return { text: "" };
    (0, import_chunk_w578pjby.t)(`[3p-model-memory] identity file unreadable: ${(0, import_chunk_jv7av99m.w)(r) ?? "unknown"}`);
    return;
  }
}
var x = (0, import_chunk_jk26f2gn.q0r)(async () => {
  let { getHomeDir: e, loadSharedConfigFiles: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gh9z80td.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default, 1)), i = e(), f = (0, import_chunk_z6pfqf6e.wFr)(import_chunk_c203g5kd.s.AWS_CONFIG_FILE || (0, import_path2.join)(i, ".aws", "config"), i), a = (0, import_chunk_z6pfqf6e.wFr)(import_chunk_c203g5kd.s.AWS_SHARED_CREDENTIALS_FILE || (0, import_path2.join)(i, ".aws", "credentials"), i);
  if ((await Promise.all([O(f), O(a)])).includes(void 0)) return;
  try {
    let { configFile: u, credentialsFile: g } = await r({ configFilepath: f, filepath: a, ignoreCache: true }), l = [], m = (0, import_chunk_ch6jxpf8.Bee)("AWS_PROFILE") || "default";
    for (let h = 0; m && h <= ee; h++) {
      let b = { ...u[m], ...g[m] };
      l.push(`profile=${m}`);
      for (let A of te) l.push(`${A}=${b[A] ?? ""}`);
      if (b.sso_session) {
        let A = u[`sso-session.${b.sso_session}`];
        l.push(`sso_session_start_url=${A?.sso_start_url ?? ""}`);
      }
      l.push(`aws_access_key_id=${b.aws_access_key_id ?? ""}`), m = b.source_profile && b.source_profile !== m ? b.source_profile : void 0;
    }
    return l.join(`
`);
  } catch (u) {
    (0, import_chunk_w578pjby.t)(`[3p-model-memory] AWS config unreadable: ${(0, import_chunk_jv7av99m.w)(u) ?? "unknown"}`);
    return;
  }
}, () => "aws");
function ie(e) {
  let r = false, i = {};
  for (let f of e.split(/\r?\n/)) {
    let a = f.trim(), o = /^\[(.+)\]$/.exec(a);
    if (o) {
      r = o[1].trim() === "core";
      continue;
    }
    let u = /^(project|account)\s*=\s*(.*)$/.exec(a);
    if (r && u) i[u[1]] = u[2].trim();
  }
  return [`project=${i.project ?? ""}`, `account=${i.account ?? ""}`];
}
var j = (0, import_chunk_jk26f2gn.q0r)(async () => {
  let e = (0, import_chunk_ydqx1fa1.BXr)(), r = await O((0, import_path2.join)(e, "active_config"));
  if (r === void 0) return;
  let i = import_chunk_c203g5kd.s.CLOUDSDK_ACTIVE_CONFIG_NAME || r.text.trim() || "default", f = import_chunk_c203g5kd.s.GOOGLE_APPLICATION_CREDENTIALS || import_chunk_c203g5kd.s.google_application_credentials || (0, import_path2.join)((0, import_chunk_ydqx1fa1.cai)(), "application_default_credentials.json"), [a, o] = await Promise.all([O((0, import_path2.join)(e, "configurations", `config_${i}`)), O(f)]);
  if (a === void 0 || o === void 0) return;
  let u = [`config=${i}`, ...ie(a.text)], g = o.text ? ne().safeParse((0, import_chunk_0jve1fep.et)(o.text, false)) : void 0, l = g?.success ? g.data : {};
  for (let m of re) u.push(`${m}=${l[m] ?? ""}`);
  if (l.type === "authorized_user") u.push(`adc_file=${o.mtimeMs}`);
  return u.join(`
`);
}, () => "gcp");
var ce = 9e5, k4e = 864e5, ae = 6e5, de = 6048e5, ue = "1", M = 1, z = 65536, fe = 16, le = 32, y = "[3p-model-memory]", me = 300, pe = { refused: "the provider refuses this model for the account", denied: "an IAM or SCP policy denies the call", temporary: "nothing learned about the model", failed: "a failure this build cannot interpret" }, _e = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("s", [(0, import_chunk_adx6804h.Ae)({ s: (0, import_chunk_adx6804h.v)("ok"), at: (0, import_chunk_adx6804h.E)() }), (0, import_chunk_adx6804h.Ae)({ s: (0, import_chunk_adx6804h.v)("refused"), at: (0, import_chunk_adx6804h.E)(), rc: (0, import_chunk_adx6804h.E)().optional() })])), ge = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ version: (0, import_chunk_adx6804h.v)(M), entries: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), _e())) })), be = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.E)() })), D = Symbol("newer format");
function FXr() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "cache", "model-access.json");
}
function YWa() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "cache", "provider-probe-verdicts.json");
}
function Ee() {
  return Boolean(import_chunk_c203g5kd.s.AWS_BEARER_TOKEN_BEDROCK) || Boolean(import_chunk_c203g5kd.s.CLOUDSDK_AUTH_ACCESS_TOKEN) || Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_VERTEX_AUTH && import_chunk_c203g5kd.s.ANTHROPIC_API_KEY) || (0, import_chunk_xfj2cwfv.BS)() || (0, import_chunk_xfj2cwfv.Kdt)() !== void 0 || require("/$bunfs/root/chunk-mn0yw68p.js").activeHybridHelper(require("/$bunfs/root/chunk-1h13dc6g.js").getAPIProvider()) !== void 0;
}
function zJt() {
  let e = import_chunk_c203g5kd.s.ANTHROPIC_CUSTOM_HEADERS;
  if (!e) return "";
  let r = [];
  for (let i of e.split(/\n|\r\n/)) {
    let f = i.indexOf(":");
    if (f !== -1) r.push(i.slice(0, f).trim().toLowerCase());
  }
  return r.filter((i) => i !== "").sort().join(",");
}
async function VJt(e, r, i = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  try {
    if ((0, import_chunk_f9x2f6cx.Y)() || import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_MODEL_ACCESS_MEMORY || Ee()) return;
    let f = e === "vertex" ? await j() : await x();
    if (f === void 0) return;
    let a = await r();
    return (0, import_crypto.createHash)("sha256").update([e, ue, i, ...a.map((o) => o ?? ""), f].join("\0")).digest("hex").slice(0, 24);
  } catch (f) {
    (0, import_chunk_w578pjby.t)(`${y} not used this start: ${(0, import_chunk_jv7av99m.w)(f) ?? "unknown"}`);
    return;
  }
}
var P = (0, import_chunk_jk26f2gn.q0r)(async (e) => {
  let r = await K(e);
  return r === D ? {} : r;
}), N = (0, import_chunk_jk26f2gn.q0r)(async (e) => {
});
async function K(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return {};
  let r;
  try {
    let o = (0, import_chunk_8j3h6yzg.Vn)();
    if (import_chunk_09gzjq1e.Fo === 0) {
      let u = await o.lstat(e);
      if (u !== void 0 && !u.isFile) return {};
    }
    r = await o.readTail(e, z + 1, { noFollow: true });
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) (0, import_chunk_w578pjby.t)(`${y} read failed: ${(0, import_chunk_jv7av99m.w)(o) ?? "unknown"}`);
    return {};
  }
  if (r.length > z) return (0, import_chunk_w578pjby.t)(`${y} file over 64 KB; ignoring it`), {};
  let i = (0, import_chunk_0jve1fep.et)(r.toString("utf8"), false), f = be().safeParse(i);
  if (f.success && f.data.version > M) return D;
  let a = ge().safeParse(i);
  if (!a.success) return (0, import_chunk_w578pjby.t)(`${y} file not in this format; ignoring it`), {};
  return a.data.entries;
}
function C(e, r) {
  if (e === void 0 || e.at > r) return;
  if (e.s === "ok") return r - e.at <= ce ? { state: "ok", at: e.at } : void 0;
  if (r - e.at > k4e) return;
  return { state: "refused", at: e.at, ...e.rc !== void 0 && e.rc <= r && { recheckClaimedAt: e.rc } };
}
async function n_t(e, r, i = Date.now()) {
  return C((await P(FXr()))[e]?.[r], i);
}
function V(e, r = Date.now()) {
  return e.state === "refused" && r - Math.max(e.at, e.recheckClaimedAt ?? 0) >= ae;
}
function T(e, r, i, f) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return Promise.resolve(i(void 0));
  let a = FXr(), u = N(a).then(async () => {
    let g = await K(a);
    if (g === D) return i(void 0);
    let l = W(g, e, r, i, f);
    try {
      let m = (0, import_chunk_8j3h6yzg.Vn)();
      await m.mkdir((0, import_path.dirname)(a)), await m.atomicWrite(a, (0, import_chunk_w578pjby._)({ version: M, entries: l }), 384);
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`${y} write failed: ${(0, import_chunk_jv7av99m.w)(m) ?? "unknown"}`);
    }
    return l[e]?.[r];
  }).catch(() => {
    return;
  });
  return N.cache.set(a, u.then(() => {
  })), u;
}
function F(e, r, i, f) {
  let a = FXr(), o = P(a);
  P.cache.set(a, o.then((u) => W(u, e, r, () => i, f), () => ({})));
}
async function r_t(e, r, i, f = Date.now()) {
  let a = { s: i, at: f };
  F(e, r, a, f), await T(e, r, () => a, f);
}
async function ye(e, r, i = Date.now()) {
  F(e, r, void 0, i), await T(e, r, () => {
    return;
  }, i);
}
async function Se(e, r, i = Date.now()) {
  let f = false, a = await T(e, r, (u) => {
    let g = C(u, i);
    if (g !== void 0 && V(g, i)) return f = true, { s: "refused", at: g.at, rc: i };
    return u;
  }, i);
  if (F(e, r, a, i), f) return { claimed: true };
  let o = C(a, i);
  return o === void 0 ? { claimed: false } : { claimed: false, current: o };
}
function W(e, r, i, f, a) {
  let o = {};
  for (let [l, m] of Object.entries(e)) {
    let h = {};
    for (let [b, A] of Object.entries(m)) {
      let R = A.s === "ok" ? de : k4e;
      if (A.at <= a + R && a - A.at <= R) h[b] = A;
    }
    o[l] = h;
  }
  let u = f(o[r]?.[i]), g = { ...o[r] };
  if (delete g[i], u !== void 0) g[i] = u;
  return o[r] = Object.fromEntries(Object.entries(g).sort(([, l], [, m]) => m.at - l.at).slice(0, le)), Object.fromEntries(Object.entries(o).filter(([, l]) => Object.keys(l).length > 0).sort(([, l], [, m]) => I(m) - I(l)).slice(0, fe));
}
function I(e) {
  return Math.max(...Object.values(e).map((r) => r.at));
}
function G(e) {
  if (typeof e !== "object" || e === null || !("status" in e)) return;
  return typeof e.status === "number" ? e.status : void 0;
}
function Oe(e, r) {
  if (e === "refused" || e === "denied") return e;
  let i = G(r);
  return e === "credential" || i === void 0 || i === 408 || i === 429 || i >= 500 ? "temporary" : "failed";
}
async function $Xr(e, r, i, f, a) {
  let o = await we(e, r, i, f, a);
  return a?.onVerdict?.(o.verdict, o.rememberedAt), o.verdict;
}
async function we(e, r, i, f, a) {
  if (r !== void 0 && !a?.live) {
    let o = await n_t(r, i), u = false;
    if (o !== void 0 && a?.isDefault && V(o)) {
      let l = await Se(r, i);
      u = l.claimed, o = l.claimed ? void 0 : l.current;
    }
    if (o !== void 0) return (0, import_chunk_w578pjby.t)(`${y} ${e} ${i}: ${o.state} (remembered)`), { verdict: o.state === "ok" ? "accessible" : "refused", rememberedAt: o.at };
    let g = await k(e, r, i, f, a);
    if (u && g === "denied") return r_t(r, i, "refused"), { verdict: "refused" };
    return { verdict: g };
  }
  return { verdict: await k(e, r, i, f, a) };
}
async function k(e, r, i, f, a) {
  let o = await f(), u = o.accessible ? void 0 : (0, import_chunk_sjqze7qg.obt)(e, o.error);
  if (u === "outdated") {
    let L = a?.versionTooOld === "unavailable", U = L ? "not switching to it" : "keeping it, so the first request shows the update message";
    if ((0, import_chunk_w578pjby.t)(`${y} ${e} ${i}: needs a newer Claude Code than ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}; ${U} (not saved; any earlier answer cleared)`), r !== void 0) ye(r, i);
    return L ? "failed" : "accessible";
  }
  if (r !== void 0 && (o.accessible || u === "refused")) r_t(r, i, o.accessible ? "ok" : "refused");
  if (o.accessible || u === void 0) return "accessible";
  let g = Oe(u, o.error), l = G(o.error), m = l !== void 0 ? null : (0, import_chunk_865at33z.rh)(o.error), h = o.error instanceof import_chunk_jv7av99m.CF ? "timeout" : l !== void 0 ? `HTTP ${l}` : m !== null ? (0, import_chunk_kx2fp6pc.$c)(m.code) : o.error instanceof import_chunk_jv7av99m.em ? "connection error" : "no HTTP status", b = m?.message ?? (0, import_chunk_jv7av99m.d)(o.error), A = l !== void 0 ? `${l} ` : m !== null ? `${m.code}: ` : void 0, R = (0, import_chunk_kx2fp6pc.$c)(A !== void 0 && b.startsWith(A) ? b.slice(A.length) : b);
  return (0, import_chunk_w578pjby.t)(`${y} ${e} ${i}: check failed: ${pe[g]} (${u === "credential" ? "a credential error, " : ""}${h}: ${(0, import_chunk_7cfjrnwy.NB)(R, me)})`, { level: g === "refused" || g === "denied" ? "debug" : "error" }), g;
}
async function UXr(e, r, i, f) {
  let a = [];
  for (let u of e) {
    let g = await Promise.all(u.map(i)), l = await Promise.all(u.map((h) => r(h, false))), m = u.find((h, b) => l[b]);
    if (m !== void 0) return m;
    a.push(...u.filter((h, b) => g[b]));
  }
  if (a.length === 0 || Date.now() > f) return;
  let o = await Promise.all(a.map((u) => r(u, true)));
  return a.find((u, g) => o[g]);
}
