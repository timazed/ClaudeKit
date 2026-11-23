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
var chunk_hf9rvn87_exports = {};
__export(chunk_hf9rvn87_exports, {
  $Na: () => $Na,
  BNa: () => BNa,
  FNa: () => FNa,
  G9r: () => G9r,
  Irr: () => Irr,
  K9r: () => K9r,
  MY: () => MY,
  Mrr: () => Mrr,
  NNa: () => NNa,
  OXt: () => OXt,
  Orr: () => Orr,
  PXt: () => PXt,
  Prr: () => Prr,
  Ptt: () => Ptt,
  UNa: () => UNa,
  V9r: () => V9r,
  WNa: () => WNa,
  Wqe: () => Wqe,
  a5o: () => a5o,
  cAn: () => cAn,
  dAn: () => dAn,
  fAn: () => fAn,
  i5o: () => i5o,
  j9r: () => j9r,
  jNa: () => jNa,
  l5o: () => l5o,
  n5o: () => n5o,
  o5o: () => o5o,
  oUe: () => oUe,
  oti: () => oti,
  pAn: () => pAn,
  r5o: () => r5o,
  rti: () => rti,
  s5o: () => s5o,
  sti: () => sti,
  uAn: () => uAn,
  z9r: () => z9r,
  zw: () => zw
});
module.exports = __toCommonJS(chunk_hf9rvn87_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_nc4smb26 = require("/$bunfs/root/chunk-nc4smb26.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_00egnvdb = require("/$bunfs/root/chunk-00egnvdb.js");
var import_chunk_xynazqe9 = require("/$bunfs/root/chunk-xynazqe9.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_m417dzmj = require("/$bunfs/root/chunk-m417dzmj.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_child_process = require("child_process");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
function Ptt(e, t) {
  return Object.assign(e, { ownWords: t });
}
function cAn(e) {
  return e instanceof Error && "ownWords" in e && typeof e.ownWords === "string" ? e.ownWords : "";
}
var Se = 50;
function NNa(e, t) {
  return { certificateFile: ze(e, "GIT_SSL_CAINFO", t), skipVerification: ze(e, "GIT_SSL_NO_VERIFY", t) };
}
function ze(e, t, n) {
  let r = [];
  for (let [o, i] of Object.entries(e)) {
    if (i === void 0) continue;
    if (o === t) r.unshift({ name: o, value: i });
    else if (n && o.toUpperCase() === t) r.push({ name: o, value: i });
  }
  return r;
}
function dAn(e) {
  return e.flatMap(([t, n]) => ["-c", `${t}=${n}`]);
}
var Ae = { envOverrides: {}, commandScopeEntries: [], fileSeedLines: "" };
function Prr(e) {
  let t = e.operator.certificateFile.length > 0, n = e.operator.skipVerification.length > 0 || e.role === "child" && e.serverSetsSkipVerification;
  if (!e.routing) return { ...Ae, decision: { role: e.role, certificateFile: t ? "left_no_routing" : "left_unset", skipVerification: n ? "left" : "unset", mountEntries: false, mountVerificationPinned: false } };
  switch (e.role) {
    case "prep":
    case "resume":
    case "outcome":
      return Dt(e, t, n);
    case "child":
      return Ft(e, e.routing, n);
    case "hook":
      return Ot(e, e.routing, t, n);
  }
}
function Ot(e, t, n, r) {
  let o = n ? "left_operators_hook" : "left_unset";
  if (!e.reachesGitMount) return { ...Ae, decision: { role: "hook", certificateFile: o, skipVerification: r ? "left" : "unset", mountEntries: false, mountVerificationPinned: false } };
  let i = URL.canParse(t.mountBaseUrl) ? Xe(t) : [], a = qe(i, []), d = r && i.length > 0;
  return { ...Ae, envOverrides: r ? fe(e.operator.skipVerification) : {}, commandScopeEntries: d ? [["http.sslVerify", "false"], ...a] : a, decision: { role: "hook", certificateFile: o, skipVerification: !r ? "unset" : d ? "moved" : "pinned_off", mountEntries: false, mountVerificationPinned: i.length > 0 } };
}
function Lt(e, t) {
  return ["", `${new URL(e).origin}.`, `${e}.`].map((r) => [`http.${r}sslCAInfo`, t]);
}
function fe(e) {
  let t = {};
  for (let { name: n } of e) t[n] = void 0;
  return t;
}
function Dt(e, t, n) {
  if (!e.target.mountRouted) return { ...Ae, decision: { role: e.role, certificateFile: t ? "left_direct_target" : "left_unset", skipVerification: n ? "left" : "unset", mountEntries: false, mountVerificationPinned: false } };
  let r = fe(e.operator.skipVerification), o = n ? "pinned_off" : "unset";
  if (!t) return { envOverrides: r, commandScopeEntries: [], fileSeedLines: "", decision: { role: e.role, certificateFile: "left_unset", skipVerification: o, mountEntries: false, mountVerificationPinned: false } };
  if (e.trustBundle.status !== "built" || !URL.canParse(e.target.url)) return { envOverrides: r, commandScopeEntries: [], fileSeedLines: "", decision: { role: e.role, certificateFile: e.trustBundle.status !== "built" ? "left_no_trust_bundle" : "left_unparseable_target", skipVerification: o, mountEntries: false, mountVerificationPinned: false } };
  return { envOverrides: { ...fe(e.operator.certificateFile), ...r }, commandScopeEntries: Lt(e.target.url, e.trustBundle.path), fileSeedLines: "", decision: { role: e.role, certificateFile: "moved", skipVerification: o, mountEntries: true, mountVerificationPinned: false } };
}
function It(e) {
  let n = (e.serverCertificateFile ?? e.operator.certificateFile[0]?.value)?.trim();
  if (!n || /[\n\r\0]/.test(n)) return;
  return n;
}
function Pe(e) {
  return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function Xe(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of [e.mountBaseUrl, e.pushBaseUrl]) if (n && URL.canParse(n)) {
    for (let r of [new URL(n).origin, n]) if (!r.includes("=")) t.add(r);
  }
  return [...t];
}
function qe(e, t) {
  return [...e, ...t.map((n) => `https://${n}/`)].map((n) => [`http.${n}.sslVerify`, "true"]);
}
function Nt(e) {
  return e.map(([t, n]) => {
    let r = t.slice(5, t.length - 10);
    return `[http ${Pe(r)}]
	sslVerify = ${n}
`;
  }).join("");
}
function Ft(e, t, n) {
  let r = e.serverCertificateFile !== void 0 || e.operator.certificateFile.length > 0, o = It(e), i = !r ? "left_unset" : !e.gitConfigArm ? "left_git_config_arm_off" : o === void 0 ? "left_unusable_value" : !e.gitReadsEnvironmentConfig ? "left_old_git" : "moved", a = Xe(t), d = !n ? "unset" : e.gitConfigArm && e.gitReadsEnvironmentConfig && a.length > 0 ? "moved" : "left", l = [], c = "", f = {};
  if (i === "moved" && o !== void 0) {
    if (l.push(["http.sslCAInfo", o]), c += `
[http]
	sslCAInfo = ${Pe(o)}
`, e.trustBundle.status === "built") for (let b of a) l.push([`http.${b}.sslCAInfo`, e.trustBundle.path]), c += `[http ${Pe(b)}]
	sslCAInfo = ${Pe(e.trustBundle.path)}
`;
    f = { GIT_SSL_CAINFO: void 0, ...fe(e.operator.certificateFile) };
  }
  if (d === "moved") l.push(["http.sslVerify", "false"]), c += `${c === "" ? `
` : ""}[http]
	sslVerify = false
`, f = { ...f, GIT_SSL_NO_VERIFY: void 0, ...fe(e.operator.skipVerification) };
  let T = qe(a, e.gitConfigArm ? t.governedHosts : []);
  if (l.push(...T), T.length > 0) c += `${c === "" ? `
` : ""}${Nt(T)}`;
  return { envOverrides: f, commandScopeEntries: l, fileSeedLines: c, decision: { role: "child", certificateFile: i, skipVerification: d, mountEntries: i === "moved" && e.trustBundle.status === "built" && a.length > 0, mountVerificationPinned: a.length > 0 } };
}
var j9r = "+refs/heads/*:refs/remotes/origin/*";
function n5o(e) {
  return e.upstreamUrl;
}
function ct(e) {
  if (e) return [];
  let { depth: t } = Fe();
  return t === void 0 ? [] : ["--depth", String(t)];
}
function Fe() {
  let e = import_chunk_c203g5kd.s.CLAUDE_RUNNER_FETCH_DEPTH;
  if (e === void 0) return { depth: Se, invalid: void 0 };
  if (e === "full" || e === "0") return { depth: void 0, invalid: void 0 };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) return { depth: t, invalid: void 0 };
  return { depth: Se, invalid: e };
}
var lt = 12e4, Me = 6e5, et = 3e5;
var Vt = 3e5, Ee = 18e5;
function ut() {
  return Ee;
}
function ft() {
  let e = import_chunk_c203g5kd.s.CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS;
  if (e === void 0) return { capMs: Me, invalid: void 0, clamped: void 0 };
  if (e === "0" || e.toLowerCase() === "off") return { capMs: 0, invalid: void 0, clamped: void 0 };
  let t = Number(e);
  if (Number.isInteger(t) && t > 0) {
    let n = Math.min(Math.max(t, lt), Ee);
    return { capMs: n, invalid: void 0, clamped: n === t ? void 0 : e };
  }
  return { capMs: Me, invalid: e, clamped: void 0 };
}
function Bt() {
  return Math.round(ft().capMs * ut() / Ee);
}
var De = 5e3, gt = /^(Counting objects|Compressing objects|Receiving objects|Resolving deltas|Updating files|Checking out files|Filtering content):\s+(\d+)%(?:\s+\((\d+)\/(\d+)\))?(?:, ([\d.]+) (KiB|MiB|GiB))?/, pt = /^(Enumerating objects): (\d{1,15})\b/, Yt = /^[\d:.]+ \S+ +packet: +sideband< \\1$/, jt = "Receiving objects", Kt = { KiB: 1024, MiB: 1048576, GiB: 1073741824 }, zt = 5e3, Jt = 500, G9r = 6e5, Xt = /* @__PURE__ */ new Set(["worktree"]);
function qt(e, t = false) {
  let n, r, o, i = 0, a, d = e.split(/\r|\n/);
  if (t) d = d.slice(1);
  for (let l of d) {
    if (l.length === 0) continue;
    let c = l.startsWith("remote: ");
    if (c) i++;
    else if (Yt.test(l)) a = true;
    let f = c ? l.slice(8) : l, T = gt.exec(f);
    if (T === null) {
      if (c) {
        let h = pt.exec(f);
        if (h !== null) {
          let C = Number(h[2]);
          o = { sideband: c, label: h[1], pct: 0, done: C, raw: `remote: ${h[1]}: ${C}` };
        }
      }
      continue;
    }
    let [, b, G, E, S, g, k] = T, R = { sideband: c, label: b, pct: Math.min(100, Number(G)), done: E !== void 0 ? Number(E) : void 0, total: S !== void 0 ? Number(S) : void 0, bytes: g !== void 0 && k !== void 0 ? Math.round(Number(g) * Kt[k]) : void 0, raw: `${c ? "remote: " : ""}${b}: ${G}%${E !== void 0 ? ` (${E}/${S})` : ""}` };
    if (n = R, c) o = R;
    else r = R;
  }
  return { display: n, client: r, server: o, remoteLines: i, keepAlive: a };
}
var Zt = 1e3;
function Qt(e, t, n) {
  if (e.active) return;
  if (t.display?.sideband) {
    e.active = true;
    return;
  }
  if (t.remoteLines === 0) return;
  if (e.firstRemoteLineAt === void 0) e.firstRemoteLineAt = n;
  else if (n - e.firstRemoteLineAt >= Zt) e.active = true;
}
function en(e, t) {
  if (e === void 0) return true;
  if (t.label !== e.label) return true;
  if (t.done !== void 0 && e.done !== void 0) return t.done > e.done || (t.bytes ?? 0) > (e.bytes ?? 0);
  return t.pct > e.pct;
}
function tn(e, t, n) {
  if (e === void 0 || n.label !== e.label) return !t.has(n.label);
  if (n.done !== void 0 && e.done !== void 0) return n.done > e.done;
  if (n.done === void 0 !== (e.done === void 0)) return false;
  return n.pct > e.pct;
}
function nn(e) {
  return e.label === "Resolving deltas" && e.pct === 100;
}
function rn(e) {
  let t = e.startsWith("remote: "), n = t ? e.slice(8) : e;
  return gt.test(n) || t && pt.test(n);
}
var _e = 2e3;
function on(e, t, n, r) {
  let o = t ? e.replace(/^[^\r\n]*[\r\n]?/, "") : e, i = l5o(o, n, r).split(/\r|\n/).filter((d) => d.length > 0 && !rn(d)).join(`
`), a = Ct(i);
  return kt.test(a) ? a.slice(0, _e) : a.slice(-_e);
}
var Z = 1e4, sn = 3e4, Ue = 3, an = 6, ge = 5, tt = 300, nt = 150, He = 2, pe = 3, dn = 1e3, cn = 15;
function ln() {
  return Boolean(import_chunk_c203g5kd.So.CLAUDE_RUNNER_FAIL_FAST_FETCH);
}
function un() {
  return Boolean(import_chunk_c203g5kd.So.CLAUDE_RUNNER_STALL_GIVEUP);
}
function fn(e) {
  return e.split(`
`).some((t) => {
    let n = t.indexOf("Operation too slow");
    if (n === -1) return false;
    let r = t.slice(0, n);
    return !/\bremote(?: error)?: /.test(r) && /curl 28\b|unable to access '[^']*': $/.test(r);
  });
}
function gn() {
  return Boolean(import_chunk_c203g5kd.So.CCR_DELTA_RESET);
}
var ht = ["couldn't find remote ref"];
function Orr(e) {
  let t = e.toLowerCase();
  return ht.some((n) => t.includes(n));
}
var pn = new RegExp(ht[0].replaceAll("i", "[i\\u0130]"), "gi");
function Irr(e) {
  return e.replace(pn, (t) => `could not${t.slice(8)}`);
}
class PXt extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(`git fetch failed (permanent): ${e}`, "git fetch failed (permanent): ref not found on the remote");
    this.name = "FetchRefNotFoundError";
  }
}
var Ie = /* @__PURE__ */ new Set();
class z9r extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(e, "a left-over checkout of another clone could not be moved aside");
    this.name = "CheckoutNotMovedError";
  }
}
var FNa = { refused_by_git_wrapper: "a wrapper installed as git exited with 75", http_429: "the host answered HTTP 429" }, hn = /^fatal: unable to access '.*': the requested url returned error: 429$/;
function Be(e, t, n) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  if (t === import_chunk_m417dzmj.CFe) return "refused_by_git_wrapper";
  if (!/^https?:/i.test(n)) return;
  let r = e.replace(/^git \S+ failed: /, "");
  if (r.length >= _e) return;
  let o = r.toLowerCase().split(/\r|\n/).map((i) => i.trim()).filter((i) => i !== "" && !i.startsWith("remote:"));
  return o.length > 0 && o.every((i) => hn.test(i)) ? "http_429" : void 0;
}
class r5o extends import_chunk_jv7av99m.A {
  throttle;
  constructor(e, t) {
    super(e, "git fetch failed: throttled on its last attempt");
    this.name = "FetchThrottledError", this.throttle = t;
  }
}
var MY = ["-c", `core.hooksPath=${(0, import_chunk_7fsmgfxx.M0r)()}`, "-c", "core.fsmonitor=", "-c", "core.askPass=", "-c", "gc.auto=0", "-c", "maintenance.auto=false"], Wqe = { SELF_HOSTED_RUNNER_POOL_SECRET: void 0, SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0, GIT_ALLOW_PROTOCOL: "https:http:ssh" }, oUe = { GIT_NO_LAZY_FETCH: "1", GIT_ALLOW_PROTOCOL: "none", GIT_SSH_COMMAND: "false", GIT_NO_REPLACE_OBJECTS: "1", GIT_TERMINAL_PROMPT: "0", CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0 }, rti = ["-c", "alias.remote-none=", "-c", "fetch.bundleURI="];
async function $Na(e) {
  let { baseDir: t, sources: n, repositoryPath: r, outcomes: o, skipValidation: i, alwaysFetch: a, skipReset: d, initWithoutTemplate: l, onDebug: c, onPhase: f, onProgress: T, signal: b } = e, G = Hn(o ?? []);
  for (let E of n) {
    if (!uAn(E.type)) {
      c(`[byoc:git] Skipping unsupported source type: ${E.type}`);
      continue;
    }
    await mn({ baseDir: t, source: E, repositoryPath: r, targetBranch: G.get(E.repo), skipValidation: i ?? false, alwaysFetch: a ?? false, skipReset: d ?? true, initWithoutTemplate: l ?? false, onDebug: c, onPhase: f, onProgress: T, signal: b });
  }
}
function uAn(e) {
  return e === "github" || e === "github-ssh" || e === "test-file";
}
async function mn(e) {
  let t = Date.now();
  try {
    let { repoExisted: n } = await _n(e);
    (0, import_chunk_cqa9hrgx.u)("byoc_git_prepare_repo", { repo_existed: n, duration_ms: Date.now() - t });
  } catch (n) {
    throw (0, import_chunk_cqa9hrgx.m)("byoc_git_prepare_repo", "error", { duration_ms: Date.now() - t }), n;
  }
}
async function _n(e) {
  let { baseDir: t, source: n, repositoryPath: r, targetBranch: o, skipValidation: i, alwaysFetch: a, skipReset: d, initWithoutTemplate: l, onDebug: c, onPhase: f, onProgress: T, signal: b } = e, G = St(n), E = n.getAuthToken ? G : i5o(G, n.token), S = r ?? OXt(t, n);
  if (!S) throw Error(`Could not determine repository directory for: ${n.repo}`);
  if (n.ref && !(0, import_chunk_69qhefwa.Ck)(n.ref)) throw Error(`Invalid ref: ${n.ref}`);
  if (o && !(0, import_chunk_69qhefwa.Ck)(o)) throw Error(`Invalid target branch: ${o}`);
  let g = Date.now();
  c(`[byoc:git] Preparing ${n.repo} at ${S} (ref=${n.ref ?? "HEAD"}, auth=${n.getAuthToken ? "git-proxy" : E !== G})`);
  let { invalid: k } = Fe();
  if (k !== void 0) c(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_DEPTH='${k}' \u2014 expected 'full', '0', or a positive integer; using default ${Se}`);
  let R = ft();
  if (R.invalid !== void 0) c(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${R.invalid}' \u2014 expected a positive integer (milliseconds), '0' or 'off'; using default ${Me}`);
  else if (R.clamped !== void 0) c(`[byoc:git] CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${R.clamped}' is ${R.capMs === Ee ? "above the thirty-minute ceiling" : "below the two-minute floor"}; using ${R.capMs} ms`);
  let h = { repoPath: S, gitURL: G, authURL: E, originURL: n5o(n) ?? E, token: n.token, getAuthToken: n.getAuthToken, governedMount: n.governedMount, gitEnvironment: n.gitEnvironment, sanitized: n.sanitized, initWithoutTemplate: l, onDebug: c, onPhase: f, onProgress: T, signal: b }, C = void 0;
  if (n.staleGitLocks) await st(h);
  else if (n.staleGitDirLocks) await st(h, true);
  if (!i) await xe(h, "validateAccess", () => mt(h, n.repo, n.skippedIfThrottled === true));
  let y = await xe(h, "ensureRepository", () => Sn(h, t, C !== void 0)), L = await n.claim?.();
  if (a) {
    if (await Ne(h, n.ref, d, y, C).catch(async (p) => {
      if (p instanceof PXt) await L?.();
      throw p;
    }), h.isEmpty) n.onEmpty?.();
    else if (!y) {
      let { depth: p } = Fe();
      if (p !== void 0) n.onShallow?.(p);
    }
  } else if (y && !n.ref) c("[byoc:git] Using prefetched repo as-is (no ref requested)");
  else if (y && n.ref) {
    if (o && await yt(h, o)) return c(`[byoc:git] Task branch ${o} exists on remote, fetching it`), await Tt(h, o, y), c(`[byoc:git] Ready: ${n.repo} (${Date.now() - g}ms)`), { repoExisted: y };
    if (await Ln(h, n.ref)) c(`[byoc:git] Ref ${n.ref} resolves locally, skipping fetch`), await zw(h, h.repoPath, ["checkout", "--progress", "--force", n.ref]);
    else await Ne(h, n.ref, false, y);
  } else await Ne(h, n.ref, false, y);
  if (o) await On(h, o, y);
  return c(`[byoc:git] Ready: ${n.repo} (${Date.now() - g}ms)`), { repoExisted: y };
}
function ie(e, t, n, r) {
  e.onDebug(`[byoc:git] phase ${t} ${n}ms${r ? " " + (0, import_chunk_w578pjby._)(r) : ""}`);
  try {
    e.onPhase?.(t, n, r);
  } catch (o) {
    e.onDebug(`[byoc:git] onPhase callback threw: ${O(o)}`);
  }
}
async function xe(e, t, n, r) {
  let o = Date.now(), i = await n();
  return ie(e, t, Date.now() - o, r), i;
}
var UNa = { repo_not_found_or_no_permission: "repository not found or no permission", no_credentials: "no credentials for the repository's git host", authentication_failed: "authentication failed", blocked_by_git_proxy: "blocked by the git proxy" }, En = [[/^fatal: repository '.*' not found$/, "repo_not_found_or_no_permission"], [/^fatal: unable to access '.*': the requested url returned error: 404$/, "repo_not_found_or_no_permission"], [/^error: repository not found\.?$/, "repo_not_found_or_no_permission"], [/^fatal: could not read (username|password) for /, "no_credentials"], [/^fatal: authentication failed for /, "authentication_failed"], [/^fatal: unable to access '.*': the requested url returned error: 401$/, "authentication_failed"], [/^\S+@\S+: permission denied \(publickey(,[a-z0-9,-]+)?\)\.?$/, "authentication_failed"]], bn = /^fatal: unable to access '.*': the requested url returned error: (?!40[14]$)\d+$/;
function wn(e, t) {
  if (/^git \S+ failed \(watchdog:/.test(e)) return;
  let n = e.replace(/^git \S+ failed: /, "");
  if (n.length >= _e) return;
  let r = n.toLowerCase().split(`
`).map((o) => o.trim());
  if (t) return r.some((o) => o.startsWith("remote: access denied by the git proxy")) ? "blocked_by_git_proxy" : void 0;
  if (r.some((o) => bn.test(o))) return;
  for (let [o, i] of En) if (r.some((a) => o.test(a))) return i;
  return;
}
class fAn extends import_chunk_jv7av99m.A {
  denial;
  throttle;
  throughAgentProxy;
  repository;
  constructor(e, t, n) {
    let r = `Repository access validation failed after ${Ue} attempts: `;
    super(r + O(e), "Repository access validation failed");
    Ptt(this, r + cAn(e)), this.name = "RepositoryAccessError", this.throughAgentProxy = n.throughAgentProxy;
    let o = URL.canParse(n.gitURL) ? new URL(n.gitURL) : void 0;
    this.repository = { repo: n.repo, address: o !== void 0 && (o.protocol === "https:" || o.protocol === "http:") && o.hostname !== "" ? { scheme: o.protocol.slice(0, -1), host: o.hostname, port: o.port || void 0 } : void 0 }, this.denial = wn(O(e), t), this.throttle = this.denial === void 0 ? Be(O(e), n.lastAttemptExitCode, n.gitURL) : void 0;
  }
}
async function mt(e, t, n, r = ["--heads", e.authURL, "HEAD"]) {
  let o = 2e3 + Math.random() * 2e3, i, a = {};
  for (let d = 0; d < Ue; d++) {
    if (d > 0) {
      let l = n && Be(O(i), a.exitCode, e.gitURL) !== void 0, c = o * (1 << d - 1) * (l ? an : 1);
      e.onDebug(`[byoc:git] Validation retry ${d + 1}/${Ue}, backing off ${Math.round(c)}ms`), await (0, import_chunk_5appeerh.K)(c, e.signal, { throwOnAbort: true });
    }
    a = {};
    try {
      let l = await zw(e, "", ["ls-remote", ...r], void 0, void 0, a);
      if (d > 0) e.onDebug(`[byoc:git] Validation succeeded on attempt ${d + 1}`);
      return l;
    } catch (l) {
      i = l;
    }
  }
  throw new fAn(i, e.getAuthToken !== void 0, { repo: t, gitURL: e.gitURL, lastAttemptExitCode: a.exitCode, throughAgentProxy: e.gitEnvironment?.throughStandaloneAgentProxy === true });
}
function Tn(e) {
  let t = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.pushinsteadof) (\S+)$/i);
  if (!t) return;
  let [, n, r, o] = t, i = o.match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1], a;
  try {
    a = new URL(r).pathname;
  } catch {
    return;
  }
  if (i === void 0 || !a.endsWith(`/${i}`)) return;
  return n;
}
var yn = "CLAUDE_CODE_SESSION_ACCESS_TOKEN";
function Rn(e) {
  let t = e.trim().match(/^(credential\.(https?:\/\/[^\s@]+)\.helper) (.+)$/i);
  if (!t) return;
  let [, n, r, o] = t;
  return o === K9r(yn) ? { key: n, base: r.replace(/\/+$/, "") } : void 0;
}
function vn(e, t) {
  let n = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.insteadof) (\S+)$/i);
  if (!n) return;
  let [, r, o, i] = n, a = i.replace(/\.git$/i, "").match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1];
  if (a === void 0) return;
  return t.some((d) => o === `${d}/${a}`) ? r : void 0;
}
async function Sn(e, t, n) {
  let r = {};
  if (e.originURL === e.authURL ? await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "remote", "set-url", "origin", e.authURL], void 0, void 0, r).then(() => true, () => false) : await Gn(e)) {
    await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--unset-all", "remote.origin.pushurl"]).catch(() => {
    });
    let i = await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.pushinsteadof$"]).catch(() => "");
    for (let c of i.split(`
`)) {
      let f = Tn(c);
      if (f === void 0) continue;
      await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--local", "--unset-all", f]).catch(() => {
      }), e.onDebug(`[byoc:git] Dropped a stale git-mount push rewrite (${ae(f)}) from ${e.repoPath}`);
    }
    let a = await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^credential\\..*\\.helper$"]).catch(() => ""), d = /* @__PURE__ */ new Set(), l = [];
    for (let c of a.split(`
`)) {
      let f = Rn(c);
      if (f !== void 0 && !d.has(f.key)) d.add(f.key), l.push(f.base);
    }
    if (l.length > 0) {
      let c = await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--local", "--get-regexp", "^url\\..*\\.insteadof$"]).catch(() => ""), f = /* @__PURE__ */ new Set();
      for (let T of c.split(`
`)) {
        let b = vn(T, l);
        if (b === void 0 || f.has(b)) continue;
        f.add(b), await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--local", "--unset-all", b]).catch(() => {
        }), e.onDebug(`[byoc:git] Dropped a stale git-mount fetch rewrite (${ae(b)}) from ${e.repoPath}`);
      }
    }
    for (let c of d) await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--local", "--unset-all", c]).catch(() => {
    }), e.onDebug(`[byoc:git] Dropped a stale git-mount credential helper (${ae(c)}) from ${e.repoPath}`);
    return await it(e), e.onDebug(`[byoc:git] Prefetched repo found at ${e.repoPath}`), true;
  }
  return e.onDebug(`[byoc:git] No prefetched repo, fresh init at ${e.repoPath}`), await (0, import_chunk_xynazqe9.Hi)((0, import_promises.mkdir)(t, { recursive: true }), Z, `[runner:stuck] mkdir ${t} (check NFS/CSI mount health)`), await zw(e, "", ["init", ...e.initWithoutTemplate ? ["--template="] : [], e.repoPath]), await zw(e, e.repoPath, ["config", "gc.auto", "0"]).catch(() => {
  }), await zw(e, e.repoPath, ["remote", "add", "origin", e.originURL]).catch(() => zw(e, e.repoPath, ["remote", "set-url", "origin", e.originURL])), await it(e), false;
}
var rt = 7, Pn = 100, _t = { GIT_CONFIG_NOSYSTEM: "1", GIT_CONFIG_GLOBAL: "/dev/null", GIT_CONFIG_COUNT: "0", GIT_CONFIG_PARAMETERS: "" }, pAn = { GIT_CONFIG_GLOBAL: "/dev/null", HOME: (0, import_chunk_7fsmgfxx.M0r)(), XDG_CONFIG_HOME: (0, import_chunk_7fsmgfxx.M0r)() }, An = { ..._t, ...pAn };
async function ot(e, t, n, r) {
  let o = {};
  return zw(e, "", ["--git-dir", t, "config", ...n], r, void 0, o).catch((i) => {
    if (o.exitCode === 1) return;
    if (e.signal?.aborted) throw i;
    throw new import_chunk_jv7av99m.A(`Could not read remote.origin.url from ${t}/config (${O(i)}). The clone was left as it is: repair that file, or remove the clone when no session is using it; the next session will clone it again.`, "Could not read remote.origin.url of the repository's clone");
  });
}
async function Gn(e) {
  let t = (0, import_path.join)(e.repoPath, ".git"), n = await ot(e, t, ["--get-all", "remote.origin.url"]);
  if (n === void 0) {
    if (await ot(e, t, ["--get-regexp", "^remote\\.origin\\."], _t) === void 0) return false;
    let i = {};
    if (!await zw(e, "", ["--git-dir", t, "config", "--get-regexp", "^remote\\.origin\\."], An, void 0, i).then(() => true, (d) => {
      if (e.signal?.aborted) throw d;
      return i.exitCode !== 1 || i.wroteStderr !== false;
    })) return false;
  }
  let r = (n ?? "").split(`
`).filter((o) => o.length > 0);
  if (r.length === 1 && r[0] === e.originURL) return true;
  for (let o = 1; ; o++) {
    let i = await zw(e, e.repoPath, ["--git-dir", t, "config", "--replace-all", "remote.origin.url", e.originURL]).then(() => {
      return;
    }, (a) => a ?? Error("git config failed"));
    if (i === void 0) return e.onDebug(`[byoc:git] remote.origin.url in ${e.repoPath} did not hold the upstream address; corrected`), true;
    if (e.signal?.aborted) throw i;
    if (o === rt) throw new import_chunk_jv7av99m.A(`Could not correct remote.origin.url in ${t}/config after ${rt} tries over about six seconds (${O(i)}). The clone was left as it is; if that error says "could not lock config file" and "File exists", and no git is running there, remove ${t}/config.lock.`, "Could not write remote.origin.url of the repository's clone");
    await (0, import_chunk_5appeerh.K)(Pn * 2 ** (o - 1), e.signal, { throwOnAbort: true });
  }
}
async function it(e) {
  if (e.originURL !== e.authURL) {
    let t = (await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--get-all", "remote.origin.fetch"]).catch(() => "")).split(`
`).filter((n) => /^\+?refs\/heads\//.test(n));
    if (t.length > 0 && t.every((n) => n === j9r)) return;
  }
  await zw(e, e.repoPath, ["--git-dir", (0, import_path.join)(e.repoPath, ".git"), "config", "--replace-all", "remote.origin.fetch", j9r, "^\\+?refs/heads/"]).catch((t) => e.onDebug(`[byoc:git] Could not normalize remote.origin.fetch: ${O(t)}`));
}
function Et(e) {
  if (e.originURL === e.authURL) return { configArgs: [], remote: "origin" };
  let t = `claude-runner-prep-${(0, import_crypto.randomUUID)()}`, n = vt();
  return { configArgs: ["-c", `remote.${t}.url=${e.authURL}`, "-c", `remote.${t}.fetch=${j9r}`, ...n ? ["-c", `remote.${t}.proxy=${n}`] : []], remote: t };
}
async function bt(e, t, n, r) {
  let o = [], i, a = new AbortController();
  try {
    return await $n(e, n, r, t && ln(), wt, i);
  } finally {
    if (a.abort(), i !== void 0) await (0, import_promises.unlink)(i).catch(() => {
    });
  }
}
async function Ne(e, t, n, r, o) {
  let i = t || "HEAD", a = () => {
    let E = Et(e);
    return [...E.configArgs, "fetch", ...ct(r), "--progress", "--no-tags", ...[], E.remote, i];
  }, d = !n && gn(), l = false, c = d && !l && await zw(e, e.repoPath, ["rev-parse", "--verify", "--quiet", "HEAD^{commit}"], { ...oUe }).then(() => true, () => false), f = false, T = await bt(e, r, a, async () => (f = await Dn(e), !f));
  if (f) {
    if (e.isEmpty = true, e.onDebug("[byoc:git] Repository is empty, skipping checkout"), e.sanitized) {
      let E = (0, import_path.join)(e.repoPath, ".git"), S = {};
      await zw(e, e.repoPath, ["--git-dir", E, "read-tree", "HEAD"], { ...oUe }, sn, S).then(e.sanitized.onIndexFromHead, async (g) => {
        if (e.signal?.throwIfAborted(), e.onDebug(`[byoc:git] Could not read HEAD into the index: ${O(g)}`), typeof S.exitCode !== "number" || S.exitCode > 128) await (0, import_promises.unlink)((0, import_path.join)(E, "index.lock")).catch(() => {
        });
      });
    }
    return;
  }
  if (!T) throw Error(`git fetch failed for ${e.gitURL}`);
  if (await zw(e, e.repoPath, ["update-ref", "refs/remotes/origin/HEAD", "FETCH_HEAD^{commit}"], { ...oUe }).catch((E) => e.onDebug(`[byoc:git] Could not set origin/HEAD: ${O(E)}`)), n) {
    e.onDebug("[byoc:git] Fetched to FETCH_HEAD, skipping reset-hard (worktree mode)");
    return;
  }
  let b = () => zw(e, e.repoPath, ["update-ref", "--no-deref", "HEAD", "HEAD"], { ...oUe }).catch(() => {
  }), G = () => zw(e, e.repoPath, ["-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "reset", "--hard", "FETCH_HEAD^{commit}"]);
  if (!c) await b();
  await xe(e, "reset", async () => {
    if (c) try {
      await zw(e, e.repoPath, ["-c", "core.checkStat=minimal", "-c", "core.trustctime=false", "checkout", "-q", "--progress", "--detach", "FETCH_HEAD^{commit}"]);
      return;
    } catch (E) {
      if (e.signal?.aborted) throw E;
      e.onDebug(`[byoc:git] Delta reset failed, falling back to reset --hard: ${O(E)}`), await b();
    }
    await G();
  }, l ? { delta_reset: "withheld" } : void 0);
}
async function st(e, t = false) {
  try {
    let n = (0, import_path.join)(e.repoPath, ".git"), r = [n];
    for (let o = r.pop(); o !== void 0; o = r.pop()) {
      e.signal?.throwIfAborted();
      let i = await (0, import_promises.readdir)(o, { withFileTypes: true }).catch((a) => {
        if ((0, import_chunk_jv7av99m.w)(a) !== "ENOENT") e.onDebug(`[byoc:git] Could not look for stale git lock files in ${(0, import_path.relative)(n, o) || ".git"}: ${O(a)}`);
        return [];
      });
      for (let a of i) {
        let d = (0, import_path.join)(o, a.name);
        if (a.isDirectory()) {
          if (!t && (o !== n || ["refs", "logs", "worktrees", "reftable"].includes(a.name))) r.push(d);
          continue;
        }
        if (!a.name.endsWith(".lock") || !a.isFile()) continue;
        let l = (0, import_path.relative)(n, d);
        try {
          await (0, import_promises.unlink)(d), e.onDebug(`[byoc:git] Removed stale ${l} left by a git that was cut short`);
        } catch (c) {
          if ((0, import_chunk_jv7av99m.w)(c) !== "ENOENT") e.onDebug(`[byoc:git] Could not remove a stale ${l}: ${O(c)}`);
        }
      }
    }
  } catch (n) {
    e.onDebug(`[byoc:git] Could not look for stale git lock files: ${O(n)}`);
  }
}
function Cn(e, t) {
  let n = [];
  if (t && e < He) n.push("-c", `http.lowSpeedLimit=${dn}`, "-c", `http.lowSpeedTime=${cn}`);
  if (e >= 3) n.push("-c", "http.version=HTTP/1.1");
  return n;
}
function wt(e, t, n, r, o) {
  return zw(e, e.repoPath, t, n, r, o);
}
async function $n(e, t, n, r = false, o = wt, i) {
  let a = Date.now(), d = ut(), l = 4e3 + Math.random() * 4e3, c = r && un(), f = 0, T, b, G = [], E = (p) => p.length <= tt ? p : (0, import_chunk_7cfjrnwy.ee)(p, nt) + "\u2026" + (0, import_chunk_7cfjrnwy.qa)(p, tt - nt - 1), S = () => G.length > 0 ? { attempt_errors: (0, import_chunk_w578pjby._)(G) } : {}, g = 0, k = 0, R = 0, h = (p) => ({ failfast_aborts: String(g), client_aborts: String(k), ...p?.transferBytes !== void 0 && { pack_bytes: String(p.transferBytes) }, ...p?.sawServerProgress === true && { server_progress: "true" }, ...false });
  for (let p = 0; p < ge; p++) {
    if (p > 0) {
      let H = l * (1 << p - 1);
      e.onDebug(`[byoc:git] Fetch retry ${p + 1}/${ge}, backing off ${Math.round(H)}ms`), await (0, import_chunk_5appeerh.K)(H, e.signal, { throwOnAbort: true });
    }
    let V = [...Cn(p, r), ...typeof t === "function" ? t() : t], de = p === ge - 1 || c && p === pe - 1 && f === pe - 1 ? { GIT_TRACE_PACKET: "1" } : i === void 0 || p >= He ? void 0 : { GIT_SHALLOW_FILE: i };
    if (de?.GIT_SHALLOW_FILE !== void 0) R++;
    let M = {};
    try {
      let H = d - (Date.now() - a);
      if (await o(e, V, de, Math.max(1, H), M), p > 0) e.onDebug(`[byoc:git] Fetch succeeded on attempt ${p + 1}`);
      return ie(e, "fetch", Date.now() - a, { attempts: String(p + 1), ...h(M), ...S() }), true;
    } catch (H) {
      T = H, b = M.exitCode;
      let D = O(H);
      e.onDebug(`[byoc:git] Fetch attempt ${p + 1} failed: ${D}`), G.push(E((0, import_chunk_nc4smb26.xf)(D)));
      let ce = r && p < He && fn(D);
      if (M.killReason !== void 0) k++;
      else if (ce) g++;
      if (f = (ce || M.killReason === "silence" || M.killReason === "escalated") && !M.sawClientProgress && !M.sawRemoteActivity ? f + 1 : 0, Date.now() - a >= d) {
        if (e.onDebug(`[byoc:git] Fetch cumulative wall-clock ${Date.now() - a}ms \u2265 hard cap \u2014 not retrying`), ie(e, "fetch", Date.now() - a, { attempts: String(p + 1), hard_cap: "true", ...h(), ...S() }), Orr(D)) throw new PXt(D);
        let x = `git fetch failed (cumulative hard cap after ${p + 1} attempts): `;
        throw Ptt(Error(x + D), x + cAn(H));
      }
      if (n && Orr(D) && !await n()) return false;
      if (Orr(D)) throw e.onDebug("[byoc:git] Fetch error is permanent (ref not found on a non-empty remote) \u2014 skipping remaining retries"), ie(e, "fetch", Date.now() - a, { attempts: String(p + 1), permanent: "true", ...h(), ...S() }), new PXt(D);
      if (c && p === pe - 1 && f === pe) {
        e.onDebug(`[byoc:git] Fetch remote mute on all ${pe} attempts (no progress, no remote activity) \u2014 giving up so the session can be reassigned`), ie(e, "fetch", Date.now() - a, { attempts: String(p + 1), exhausted: "true", giveup: "mute", ...h(), ...S() });
        let x = `git fetch failed after ${p + 1} mute attempts (no progress, no remote activity; giving up early for reassignment): `;
        throw Ptt(Error(x + D), x + cAn(H));
      }
    }
  }
  ie(e, "fetch", Date.now() - a, { attempts: String(ge), exhausted: "true", ...h(), ...S() });
  let C = `git fetch failed after ${ge} attempts: `, y = C + O(T), L = Be(O(T), b, e.gitURL);
  throw Ptt(L !== void 0 ? new r5o(y, L) : Error(y), C + cAn(T));
}
async function On(e, t, n) {
  if ((await zw(e, e.repoPath, ["branch", "--show-current"]).catch(() => "")).trim() === t) {
    e.onDebug(`[byoc:git] Already on target branch ${t}`);
    return;
  }
  if (await yt(e, t)) e.onDebug("[byoc:git] Target branch exists on remote, fetching"), await Tt(e, t, n);
  else e.onDebug(`[byoc:git] Creating local branch ${t} from HEAD`), await zw(e, e.repoPath, ["checkout", "-B", t]), await zw(e, e.repoPath, ["update-ref", `refs/remotes/origin/${t}`, "HEAD"], { ...oUe }).catch(() => {
  });
}
async function Tt(e, t, n) {
  await bt(e, n, () => {
    let r = Et(e);
    return [...r.configArgs, "fetch", ...ct(n), "--progress", r.remote, t];
  }), await zw(e, e.repoPath, ["checkout", "--progress", "--force", "-B", t, "FETCH_HEAD"]);
}
async function yt(e, t) {
  try {
    return (await zw(e, e.repoPath, ["ls-remote", "--heads", e.authURL, `refs/heads/${t}`])).trim().length > 0;
  } catch {
    return false;
  }
}
async function Ln(e, t) {
  try {
    return await zw(e, e.repoPath, ["rev-parse", "--verify", "--quiet", t], { ...oUe }), true;
  } catch {
    return false;
  }
}
async function BNa(e, t, n) {
  let r = St(e), o = e.getAuthToken ? r : i5o(r, e.token), i = { repoPath: "", gitURL: r, authURL: o, originURL: o, token: e.token, getAuthToken: e.getAuthToken, governedMount: e.governedMount, gitEnvironment: e.gitEnvironment, onDebug: t, signal: n };
  if (e.ref && !(0, import_chunk_69qhefwa.Ck)(e.ref)) return;
  let a = e.ref && !/^(?:@|tag|\+.*|[\da-fA-F]{40}|[\da-fA-F]{64})$|(?:^|\/)\.|\.lock(?:\/|$)|\.$/.test(e.ref) ? e.ref : void 0, d = (T) => T.split(`
`).some((b) => [`${a}`, `refs/${a}`, `refs/tags/${a}`, `refs/heads/${a}`, `refs/remotes/${a}`, `refs/remotes/${a}/HEAD`].includes(b.split("	")[1] ?? "")), l = await mt(i, e.repo, e.skippedIfThrottled === true, a === void 0 ? void 0 : ["--heads", o, a]);
  if (a === void 0 || d(l)) return;
  let c = {}, f = await zw(i, "", ["ls-remote", o, "HEAD", a], void 0, void 0, c).catch(() => {
    return;
  });
  if (n?.throwIfAborted(), f !== void 0 && !c.stdoutTruncated && !d(f) && /[\t/]HEAD$/m.test(f)) throw new PXt(`couldn't find remote ref ${a}`);
}
async function Dn(e) {
  try {
    return (await zw(e, e.repoPath, ["ls-remote", "--symref", e.authURL, "HEAD"])).trim() === "";
  } catch {
    return false;
  }
}
var V9r = "SHR_GIT_PROXY_TOKEN", oti = ["-c", "lfs.locksverify=false"];
function sti(e) {
  return Rt("unused", e);
}
function Rt(e, t) {
  return `!f() { if test "$1" = get; then printf 'username=${e}\\npassword=%s\\n' "$${t}"; fi; }; f`;
}
function K9r(e) {
  return Rt("x-access-token", e);
}
function o5o(e) {
  let t = new URL(e).origin;
  return ["-c", "credential.helper=", "-c", `credential.${t}.helper=`, "-c", `credential.${t}.helper=${sti(V9r)}`];
}
function vt() {
  return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.ALL_PROXY || process.env.all_proxy || "";
}
function s5o(e) {
  let n = ["", `${new URL(e).origin}.`, `${e}.`], r = vt(), o = r ? ["-c", `remote.origin.proxy=${r}`] : [];
  for (let i of n) {
    if (r) o.push("-c", `http.${i}proxy=${r}`);
    o.push("-c", `http.${i}sslVerify=true`);
  }
  return o;
}
var In = /* @__PURE__ */ new Set(["fetch", "ls-remote"]);
function Nn(e) {
  for (let t = 0; t < e.length; t++) {
    if (e[t] === "-c" || e[t] === "--git-dir" || e[t] === "-C") {
      t++;
      continue;
    }
    return e[t];
  }
  return;
}
async function zw(e, t, n, r, o = Ee, i) {
  let a = e.getAuthToken !== void 0, d = Nn(n), l = d !== void 0 && In.has(d), c = a && l ? e.getAuthToken() : void 0, f = r?.GIT_ALLOW_PROTOCOL === "none", T = [...MY, ...dAn(e.gitEnvironment?.commandScopeEntries ?? []), ...f ? rti : [], "-c", "http.proxyAuthMethod=basic", ...a && l ? s5o(e.gitURL) : [], ...c ? o5o(e.gitURL) : [], ...e.governedMount && l ? oti : [], ...n], b = c ?? e.token, G = T.map((z) => xn(z, e.authURL, e.gitURL, b));
  e.onDebug(`[byoc:git] git ${G.join(" ")} (dir=${t || "."})`);
  let E = !l || a || Boolean(e.token), S = { ...process.env, ...e.gitEnvironment?.envOverrides, ...r, ...c ? { [V9r]: c } : void 0, CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0, ...a ? { GIT_CONFIG_GLOBAL: "/dev/null" } : void 0, ...E ? { GIT_CONFIG: void 0 } : void 0, GIT_TERMINAL_PROMPT: "0", GCM_INTERACTIVE: import_chunk_7fsmgfxx.OEe.GCM_INTERACTIVE, LC_ALL: "C", GIT_PROGRESS_DELAY: "0", ...Wqe, ...e.authURL.startsWith("file://") && { GIT_ALLOW_PROTOCOL: `file:${Wqe.GIT_ALLOW_PROTOCOL}` }, GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`, ...f && { GIT_ALLOW_PROTOCOL: "none", GIT_SSH_COMMAND: "false" } };
  if (E) {
    for (let z of Object.keys(S)) if (z.toUpperCase() === "GIT_CONFIG") S[z] = void 0;
  }
  let { signal: g, dispose: k } = Fn(e.signal, o), R = d !== void 0 && Xt.has(d) ? G9r : e.watchdog?.silenceMs ?? lt, h = R, C = h, y, L, p = Date.now(), V = e.watchdog?.preTransferCapMs ?? Bt(), Q, de = /* @__PURE__ */ new Set(), M, H = Math.min(V, Vt), D, ce = false, ke = { active: false }, x = Date.now();
  try {
    return await new Promise((J, X) => {
      let W = (0, import_child_process.spawn)("git", T, { cwd: t || void 0, windowsHide: true, ...(0, import_chunk_9zdrdv25.hm)("helper"), env: S, stdio: ["ignore", "pipe", "pipe"] }), Ce = 10485760, be = 8192, B = 0, te = [], I = "", ne = false, we = 0, N = -1, Te, ye = (v) => {
        if (typeof v === "object" && "unref" in v) v.unref();
        return v;
      }, re = false, $e, Ye = (v) => {
        if (y === void 0) y = v;
        W.kill("SIGTERM"), $e ??= ye(setTimeout(() => {
          if (re) return;
          W.kill("SIGKILL"), y = "escalated", re = true, X(Object.assign(Error("git did not exit after SIGTERM"), { stdout: Buffer.concat(te).toString("utf8"), stderr: I }));
        }, De));
      }, $t = 0, Re = (v = R) => ($t = Date.now() + v, ye(setTimeout((F) => F("silence"), v, Ye))), q = Re(h);
      W.stdout.on("data", (v) => {
        if (B < 10485760) te.push(v), B += v.length;
        else if (i) i.stdoutTruncated = true;
      }), W.stderr.on("data", (v) => {
        let F = v.toString("utf8"), Y = I + F;
        if (Y.length > 8192) ce = true;
        I = Y.slice(-8192);
        let oe = qt(F, ne), { display: U, client: j, server: ve } = oe;
        if (F.length > 0) ne = !/[\r\n]$/.test(F);
        if (i !== void 0) {
          if (Qt(ke, oe, Date.now()), ke.active) i.sawRemoteActivity = true;
        }
        if (j) {
          if (i !== void 0) i.sawClientProgress = true;
          if (R < et && nn(j)) R = et, C = R, clearTimeout(q), q = Re();
          if (en(L, j)) p = Date.now(), clearTimeout(q), C = R, q = Re();
          if (L = j, i !== void 0 && j.bytes !== void 0 && j.label === jt && j.bytes > (i.transferBytes ?? -1)) i.transferBytes = j.bytes;
        } else if (ve !== void 0 && L === void 0) {
          if (tn(Q, de, ve)) {
            Q = ve;
            let le = x + V - Date.now();
            if (V > 0 && le > 0) {
              M = Date.now(), clearTimeout(q);
              let ue = Math.min(R, le), Ke = x + h - Date.now();
              if (C = ue > Ke ? R : h, q = Re(Math.max(ue, Ke)), i !== void 0) i.sawServerProgress = true;
            }
          }
          de.add(ve.label);
        }
        if (U) {
          if (U.label !== Te) Te = U.label, N = -1;
          let le = Math.floor(U.pct / 10), ue = Date.now() - we;
          if (ue >= Jt && (ue >= zt || le > Math.floor(N / 10))) {
            we = Date.now(), N = U.pct;
            try {
              e.onDebug(`[byoc:git] ${d ?? "git"}: ${U.raw}`), e.onProgress?.(d ?? "git", U);
            } catch {
            }
          }
        }
      });
      let Oe = () => {
        if (e.signal?.aborted) W.kill("SIGTERM"), $e ??= ye(setTimeout(() => {
          if (re) return;
          W.kill("SIGKILL"), re = true;
          let v = Error("The operation was aborted");
          v.name = "AbortError", X(Object.assign(v, { stderr: I }));
        }, De));
        else Ye("hard-cap");
      };
      if (g.aborted) Oe();
      else g.addEventListener("abort", Oe, { once: true });
      let Le;
      W.on("error", (v) => {
        Le = v;
      });
      let je = (v, F) => {
        if (re) return;
        if (re = true, clearTimeout(q), clearTimeout($e), g.removeEventListener("abort", Oe), i !== void 0) i.exitCode = v, i.wroteStderr = I.length > 0;
        let Y = Buffer.concat(te).toString("utf8");
        if (e.signal?.aborted && y === void 0) {
          let U = Error("The operation was aborted");
          return U.name = "AbortError", X(Object.assign(U, { stdout: Y, stderr: I, code: v, signal: F }));
        }
        if (Le) return X(Object.assign(Le, { stdout: Y, stderr: I }));
        if (v === 0) return J(Y);
        let oe = Error(F !== null ? `git exited on signal ${F}` : `git exited with code ${v}`);
        X(Object.assign(oe, { stdout: Y, stderr: I, code: v, signal: F }));
      };
      W.on("close", je), W.on("exit", (v, F) => {
        if (e.endsAtExit && l) ye(setTimeout((Y, oe, U) => Y(oe, U), 200, je, v, F));
      });
    });
  } catch (z) {
    let J = z;
    if (y !== void 0) {
      let be = L ? ` at ${L.label} ${L.pct}%${L.total ? ` (${L.done}/${L.total})` : ""}` : "", B = Date.now(), te = B - p, I = "", ne = `no forward progress for ${te}ms (budget ${C}ms)${be}`;
      if (L === void 0 && Q !== void 0 && M !== void 0) {
        let N = Q, Te = N.done !== void 0 ? N.pct > 0 ? ` ${N.pct}% (${N.done}${N.total !== void 0 ? `/${N.total}` : ""})` : ` ${N.done}` : ` ${N.pct}%`;
        I = ` \u2014 no pack data received; server-side progress last advanced ${B - M}ms ago at ${N.label}${Te}`, ne = V >= h && B - x >= V ? `pre-transfer cap ${V}ms reached with no client-side progress${I}` : `no client-side progress for ${B - x}ms and server-side progress stopped advancing (budget ${C}ms)${I}`;
      }
      if (L === void 0 && D !== void 0) ne += ` \u2014 the server's last keep-alive came ${B - D}ms ago (keep-alives can hold an attempt open for ${H}ms at most)`;
      let we = y === "silence" ? ne : y === "hard-cap" ? `hard cap ${o}ms after ${B - x}ms${be}${I}` : `did not exit within ${De}ms of SIGTERM (D-state? \u2014 last forward ${te}ms ago)${be}`;
      e.onDebug(`[runner:stuck] git ${G.join(" ")} (dir=${t || "."}) \u2014 ${we} \u2014 killing subprocess`);
    }
    let X = J.stderr !== void 0 && J.stderr.length > 0 ? on(J.stderr, ce, e.authURL, b) : Ct(l5o(J.stdout || J.message || "", e.authURL, b)).slice(0, _e), W = y !== void 0 ? ` (watchdog: ${y})` : "", Ce = `git ${d ?? "?"} failed${W}: `;
    throw Ptt(Error(Ce + X), Ce);
  } finally {
    if (i !== void 0 && y !== void 0) i.killReason = y;
    k();
  }
}
function Mrr(e) {
  return e.startsWith("https://") || e.startsWith("http://") || e.startsWith("ssh://") || !e.includes("://") && /^[A-Za-z0-9][A-Za-z0-9._-]*@[^:]+:/.test(e);
}
function Fn(e, t) {
  let n = new AbortController(), r = setTimeout((a) => a.abort(), t, n);
  if (typeof r === "object" && "unref" in r) r.unref();
  let o;
  if (e) {
    if (e.aborted) {
      clearTimeout(r), n.abort();
      let a = () => {
      };
      return { signal: n.signal, dispose: a, [Symbol.dispose]: a };
    }
    o = () => {
      clearTimeout(r), n.abort();
    }, e.addEventListener("abort", o, { once: true });
  }
  n.signal.addEventListener("abort", () => clearTimeout(r));
  let i = () => {
    if (clearTimeout(r), e && o) e.removeEventListener("abort", o);
  };
  return { signal: n.signal, dispose: i, [Symbol.dispose]: i };
}
function St(e) {
  if (e.url) {
    if (!Mrr(e.url)) throw Error("Unsupported git URL protocol (only https/http/ssh/user@host:path allowed)");
    return e.url;
  }
  switch (e.type) {
    case "github":
      return `https://github.com/${e.repo}`;
    case "github-ssh":
      throw Error(`github-ssh source for '${e.repo}' is missing url \u2014 SSH URLs are not synthesizable from slug alone`);
    case "test-file":
      return `file://${e.repo}`;
    default:
      throw Error(`Unsupported git source type: ${e.type}`);
  }
}
function i5o(e, t) {
  if (!t) return e;
  if (e.startsWith("git@") || e.startsWith("ssh://")) return e;
  let n;
  try {
    n = new URL(e);
  } catch {
    return e;
  }
  if (n.protocol !== "https:") return e;
  if (t.startsWith("sk-ant-ccsr-")) n.username = "unused", n.password = t;
  else n.username = t;
  return n.toString();
}
function OXt(e, t) {
  if (t.type === "test-file") {
    let r = (0, import_path.basename)(t.repo);
    if (!r || r === "." || r === "..") return "";
    return (0, import_path.join)(e, r);
  }
  let n = t.repo.split("/").filter((r) => r.length > 0);
  if (n.length === 0) return "";
  for (let r of n) if (r === "." || r === "..") return "";
  return (0, import_path.join)(e, ...Pt(n));
}
function a5o(e) {
  let t = e.repo.split("/").filter((n) => n.length > 0);
  for (let n of t) if (n === "." || n === "..") return "";
  return Pt(t).join("-");
}
var at = /[:*?[\\]|^address-[0-9a-f]{16}$/iu;
function Pt(e) {
  let t = e.findIndex((o) => at.test(o));
  if (t === -1) return e;
  let n = e.findLastIndex((o) => o.includes("@") || at.test(o)), r = (0, import_chunk_ccm69jjy.Je)(e.slice(t, n + 1).join("/")).slice(0, 16);
  return [...e.slice(0, t), `address-${r}`, ...e.slice(n + 1)];
}
function At(e, t) {
  let n = (0, import_path.dirname)((0, import_path.dirname)((0, import_path.resolve)(t)));
  return (0, import_path.basename)(n) === "_sessions" && (0, import_path.resolve)(e).startsWith((0, import_path.dirname)(n) + import_path.sep) ? n : Mn(e, t);
}
function Mn(e, t) {
  let n = (0, import_path.resolve)(e).split(import_path.sep), r = (0, import_path.resolve)(t).split(import_path.sep), o = 0;
  while (o < n.length && o < r.length && n[o] === r[o]) o++;
  return o >= 2 ? n.slice(0, o).join(import_path.sep) : void 0;
}
async function WNa(e) {
  let { canonicalRepoPath: t, secondClones: n, worktreePath: r, ref: o, onDebug: i, signal: a, gitEnvironment: d } = e;
  if (r === t) throw Error("addSessionWorktree: worktreePath must not equal canonicalRepoPath");
  if (Ie.has(r)) throw new z9r(`The session did not start: an earlier start on this runner has not finished moving ${r} aside. Ask whoever runs this runner to check that disk and, once it answers, to restart the runner.`);
  let l = { repoPath: t, gitURL: "", authURL: "", originURL: "", gitEnvironment: d, onDebug: i, signal: a }, c = (await zw(l, t, ["rev-parse", "--verify", "FETCH_HEAD^{commit}"], { ...oUe })).trim(), f;
  try {
    f = (await zw(l, r, ["--git-dir", (0, import_path.join)(r, ".git"), "rev-parse", "HEAD"], { ...oUe })).trim();
  } catch (g) {
    if (a?.aborted) throw g;
  }
  let T = (g) => (0, import_chunk_xynazqe9.Hi)((0, import_promises.realpath)(g), Z, `[runner:stuck] realpath ${g} (check NFS/CSI mount health)`), b = async (g) => T((0, import_path.resolve)(g, (await zw(l, g, ["rev-parse", "--git-common-dir"])).trim())), G = async (g) => {
    if (!await T(g).then(() => true, (C) => t.startsWith(g + import_path.sep) || ((0, import_chunk_jv7av99m.kn)(C) ? false : Promise.reject(C)))) return;
    let R = await b(r);
    return [(0, import_path.join)(await T((0, import_path.dirname)(r)), (0, import_path.basename)(r), ".git"), await b(t)].includes(R) ? void 0 : R;
  };
  if (f === c && n !== void 0) {
    let g = await G(n.folder).catch((k) => {
      a?.throwIfAborted(), i(`[byoc:git] look at ${r} failed: ${(0, import_chunk_kx2fp6pc.K8)((0, import_chunk_w578pjby._)(O(k)))}`), n.onWarning(`could not tell which clone ${r} belongs to, so it is used as it is. If its .git file names a clone other than ${t}, its git push and fetch can go to another git server: copy its changes, then stop the session and start it again.`);
      return;
    });
    if (g !== void 0) {
      let k = `${r}.left-${(0, import_crypto.randomUUID)().slice(0, 8)}`, R = (0, import_chunk_kx2fp6pc.K8)((0, import_chunk_w578pjby._)(g)), h = (y) => (0, import_chunk_xynazqe9.Hi)(y, Z, `[runner:stuck] move ${r} aside (check NFS/CSI mount health)`), C = false;
      Ie.add(r), await h((0, import_promises.rename)(r, k).finally(() => Ie.delete(r)).then(() => n.onWarning(C ? `the move of ${r} to ${k} ended after the start had failed. Its .git is not renamed, so do not run git there. If another runner has started the session on this disk since, these are its live files: stop the session before you touch them.` : `the checkout that an earlier start left at ${r} belongs to another clone (${R}), which may be another git server's. It is now at ${k}, and the session starts in a new checkout without its uncommitted changes. Copy the files that you need (do not run git there), then delete it: until then a server-supplied idle limit does not release the session. With --remove-session-state it is deleted when this session stops.`))).catch((y) => {
        throw C = true, new z9r(`The session did not start: the checkout that an earlier start left at ${r} belongs to another clone (${R}), which may be another git server's, and could not be renamed to ${k} (${(0, import_chunk_jv7av99m.w)(y) ?? "the disk gave no answer, so it may be there by now"}). With --remove-session-state its uncommitted changes are deleted now. Otherwise ask whoever runs this runner to copy them out of ${(0, import_path.dirname)(r)}, close what holds that folder or move it away (once the disk answers), and restart the runner.`);
      }), f = void 0, await h((0, import_chunk_00egnvdb.z9a)(k, ".git", ".git.left")).catch(() => n.onWarning(`could not rename the .git in ${k}, so a git push from there can still go to another git server. Do not run git there.`));
    }
  }
  if (f === c) {
    let g = (await zw(l, r, ["rev-parse", "--absolute-git-dir"])).trim();
    await (0, import_promises.writeFile)((0, import_path.join)(g, "FETCH_HEAD"), `${c}
`).catch(() => {
    }), i(`[byoc:git] Worktree ${r} already at ${c.slice(0, 12)} \u2014 keeping`);
    return;
  }
  i(f ? `[byoc:git] Worktree ${r} at wrong commit ${f.slice(0, 12)}, clearing before re-add` : `[byoc:git] Clearing ${r} before worktree add`), await (0, import_chunk_xynazqe9.Hi)((0, import_chunk_00egnvdb.G9a)(r, At(t, r)), G9r, `[runner:stuck] rm ${r} (check NFS/CSI mount health)`).catch((g) => {
    i(`[byoc:git] rm ${r} failed (continuing): ${g}`);
  });
  let E = await (0, import_chunk_xynazqe9.Hi)(Gt(r).then((g) => (0, import_chunk_00egnvdb.uFt)(t, g)), Z, `[runner:stuck] worktree deregister ${t} (check NFS/CSI mount health)`).then((g) => {
    if (g.outcome === "kept") i(`[byoc:git] left the worktree registration of ${r} in place: ${g.reason}`);
    return true;
  }, (g) => (i(`[byoc:git] worktree deregister did not finish: ${g}`), false));
  await Un(l, t, r, c, E);
  let S = (await zw(l, r, ["rev-parse", "--absolute-git-dir"])).trim();
  await (0, import_promises.writeFile)((0, import_path.join)(S, "FETCH_HEAD"), `${c}
`), i(`[byoc:git] Added worktree ${r} at ${c.slice(0, 12)} (detached)`);
}
async function Un(e, t, n, r, o) {
  let i = () => zw(e, t, ["worktree", "add", "--detach", n, r]);
  try {
    await i();
    return;
  } catch (a) {
    if (!o || !O(a).includes("is a missing but already registered worktree")) throw a;
    let d = await (0, import_chunk_xynazqe9.Hi)(Promise.all([(0, import_promises.realpath)(t), Gt(n)]).then(([l, c]) => (0, import_chunk_00egnvdb.V3e)((0, import_path.join)(l, ".git"), { worktreePath: c, repoSpelled: t }, { locked: "keep" })), Z, `[runner:stuck] worktree deregister ${t} (check NFS/CSI mount health)`).catch((l) => ({ outcome: "kept", reason: O(l) }));
    if (d.outcome !== "dropped") throw e.onDebug(`[byoc:git] git still registers ${n} with its folder gone, and the registration could not be dropped${d.outcome === "kept" ? `: ${d.reason}` : ""}; not retrying`), a;
    e.onDebug(`[byoc:git] dropped the registration git still had for ${n} with its folder gone; retrying worktree add`);
  }
  await i();
}
async function Gt(e) {
  let t = await (0, import_promises.realpath)((0, import_path.dirname)(e)).catch(() => null), n = t === null ? null : (0, import_path.join)(t, (0, import_path.basename)(e));
  return n === null || n === e ? [e] : [e, n];
}
async function jNa(e) {
  let { worktrees: t, onDebug: n } = e;
  for (let { canonicalRepoPath: r, worktreePath: o } of t) {
    let i = { repoPath: r, gitURL: "", authURL: "", originURL: "", onDebug: n };
    if (await (0, import_chunk_xynazqe9.Hi)((0, import_promises.lstat)(o).then(() => false, (d) => (0, import_chunk_jv7av99m.kn)(d)), Z, `[runner:stuck] worktree probe ${o} (check NFS/CSI mount health)`).catch(() => false)) continue;
    try {
      if (!await (0, import_chunk_2172r9j8.pRt)(o)) {
        n(`[byoc:git] kept worktree ${o} \u2014 unremovable reparse point`);
        continue;
      }
      let d = await (0, import_chunk_xynazqe9.Hi)((0, import_chunk_00egnvdb.Itn)(r, o, { trustedRoot: At(r, o), deregisterIfStopped: true, pointerFirst: true }), G9r, `[runner:stuck] remove ${o} (check NFS/CSI mount health)`);
      if (d.outcome === "unanchored") await zw(i, r, ["worktree", "remove", "--force", o]);
      else if (d.outcome !== "removed") {
        n(`[byoc:git] worktree remove ${o} failed: ${(0, import_chunk_00egnvdb.rot)(d)}`);
        continue;
      }
      n(`[byoc:git] Removed worktree ${o}`);
    } catch (d) {
      n(`[byoc:git] worktree remove ${o} failed: ${d}`);
    }
  }
  for (let { canonicalRepoPath: r, worktreePath: o } of t) await (0, import_chunk_xynazqe9.Hi)((0, import_chunk_00egnvdb.uFt)(r, o), Z, `[runner:stuck] worktree deregister ${r} (check NFS/CSI mount health)`).then((i) => {
    if (i.outcome === "kept") n(`[byoc:git] left the worktree registration of ${o} in place: ${i.reason}`);
  }, (i) => {
    n(`[byoc:git] worktree deregister did not finish: ${i}`);
  });
}
function Hn(e) {
  let t = /* @__PURE__ */ new Map();
  for (let n of e) {
    let r = n.branches ?? [], [o, ...i] = r;
    if (i.length > 0) throw Error(`Outcome for ${n.repo} has ${r.length} branches, expected 0 or 1`);
    if (o) t.set(n.repo, o);
  }
  return t;
}
function xn(e, t, n, r) {
  if (e === t && e !== n) return ae(e);
  if (e.includes("://") && e.includes("@")) return ae(e);
  if (r && e.includes(r)) return e.split(r).join("<token>");
  return e;
}
function l5o(e, t, n) {
  if (t && /:\/\/[^/]*@/.test(t)) e = e.split(t).join(ae(t));
  if (n) e = e.split(n).join("<token>");
  return e.replace(/sk-ant-ccsr-[A-Za-z0-9_.-]+/g, "<token>").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "<token>").replace(/github_pat_[A-Za-z0-9_]+/g, "<token>").replace(/gh[psour]_[A-Za-z0-9]+/g, "<token>").replace(/gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]+(?:\.[0-9a-z]{9})?/g, "<token>");
}
function ae(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
  }
  if (t && (t.username || t.password)) {
    let o = t.search || "", i = t.hash || "";
    return `${t.protocol}//<token>@${t.host}${t.pathname}${o}${i}`;
  }
  if (t) return e;
  let n = e.indexOf("@"), r = e.indexOf("://");
  if (r >= 0 && n > r) return e.slice(0, r + 3) + "<token>" + e.slice(n);
  return e;
}
function O(e) {
  return e instanceof Error ? e.message : String(e);
}
var kt = /^(remote:\s+)?(fatal|error):/i;
function Ct(e) {
  if (!e) return "";
  let t = [];
  for (let r of e.split(`
`)) if (kt.test(r)) t.push(r);
  if (t.length === 0) return e;
  let n = t.join(`
`);
  if (e.startsWith(n)) return e;
  return n + `
` + e;
}
