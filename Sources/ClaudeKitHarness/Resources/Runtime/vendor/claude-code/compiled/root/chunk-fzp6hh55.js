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
var chunk_fzp6hh55_exports = {};
__export(chunk_fzp6hh55_exports, {
  BXi: () => BXi,
  FIo: () => FIo,
  GNl: () => GNl,
  KPe: () => KPe,
  Oee: () => Oee,
  UXi: () => UXi,
  VNl: () => VNl,
  WXi: () => WXi,
  ZVt: () => ZVt,
  Zx: () => Zx,
  aMs: () => aMs,
  bK: () => bK,
  gJe: () => gJe,
  iMs: () => iMs,
  out: () => out,
  rut: () => rut,
  sKn: () => sKn,
  sMs: () => sMs,
  sut: () => sut,
  wK: () => wK,
  wRt: () => wRt,
  zNl: () => zNl
});
module.exports = __toCommonJS(chunk_fzp6hh55_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xrtwe9rg = require("/$bunfs/root/chunk-xrtwe9rg.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var A = "/home/claude/.claude/remote", Oee = `${A}/.oauth_token`, rut = `${A}/.api_key`, KPe = `${A}/.session_ingress_token`, UXi = [Oee, rut, KPe], out = import_chunk_xrtwe9rg.BMr;
function S(e, n, r, { skipInReviewOrigin: o = false } = {}) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return;
  if ((0, import_chunk_f9x2f6cx.Y)()) {
    (0, import_chunk_w578pjby.t)(`Skipping ${r} disk persistence in a session with no disk`);
    return;
  }
  if ((0, import_chunk_j4z7srhg.ec)()) {
    (0, import_chunk_w578pjby.t)(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (o && (0, import_chunk_6e68m1dj.h3)()) {
    (0, import_chunk_w578pjby.t)(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    (0, import_fs.mkdirSync)(A, { recursive: true, mode: 448 }), (0, import_fs.writeFileSync)(e, n, { encoding: "utf8", mode: 384 }), (0, import_chunk_w578pjby.t)(`Persisted ${r} to ${e} for subprocess access`);
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`Failed to persist ${r} to disk (non-fatal): ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "error" });
  }
}
async function GNl() {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (0, import_chunk_f9x2f6cx.Y)()) return;
  for (let e of UXi) try {
    await (0, import_promises.unlink)(e), (0, import_chunk_w578pjby.t)(`Removed the credential file at ${e}`);
  } catch (n) {
    if (!(0, import_chunk_jv7av99m.J)(n)) (0, import_chunk_w578pjby.t)(`Failed to remove the credential file at ${e} (non-fatal): ${(0, import_chunk_jv7av99m.w)(n) ?? "unknown error"}`, { level: "error" });
  }
}
function R(e) {
  return import_chunk_c203g5kd.s.platform !== "linux" && e.startsWith(`${A}/`);
}
function v(e) {
  return !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && e.startsWith(`${A}/`) && (0, import_chunk_aka192fb.w3)("/home");
}
function gJe(e, n) {
  return sKn(e, n).token;
}
function sKn(e, n) {
  if ((0, import_chunk_j4z7srhg.ec)()) return { token: null, miss: "enoent" };
  if ((0, import_chunk_6e68m1dj.uL)()) return { token: null, miss: "enoent" };
  if ((0, import_chunk_f9x2f6cx.Y)() || R(e) || v(e)) return { token: null, miss: "enoent" };
  try {
    let r = (0, import_chunk_xytxbeb6.Jze)(e, { maxBytes: out, regularFileOnly: true }).trim();
    if (!r) return { token: null, miss: "empty" };
    return (0, import_chunk_w578pjby.t)(`Read ${n} from well-known file ${e}`), { token: r };
  } catch (r) {
    if ((0, import_chunk_jv7av99m.J)(r)) return { token: null, miss: "enoent" };
    return (0, import_chunk_w578pjby.t)(`Failed to read ${n} from ${e}: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "debug" }), { token: null, miss: (0, import_chunk_jv7av99m.w)(r) === "EACCES" ? "eacces" : "other" };
  }
}
async function D(e, n, r, o, { skipInReviewOrigin: i = false } = {}) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return;
  if ((0, import_chunk_f9x2f6cx.Y)()) {
    (0, import_chunk_w578pjby.t)(`Skipping ${r} disk persistence in a session with no disk`);
    return;
  }
  if ((0, import_chunk_j4z7srhg.ec)()) {
    (0, import_chunk_w578pjby.t)(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (i && (0, import_chunk_6e68m1dj.h3)()) {
    (0, import_chunk_w578pjby.t)(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let m = await o.writeHandoffCredential(e, n);
  if (m.state === "written") {
    (0, import_chunk_w578pjby.t)(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  (0, import_chunk_w578pjby.t)(`Failed to persist ${r} to disk (non-fatal): ${m.code ?? "unknown error"}`, { level: "error" });
}
async function O(e, n, r) {
  if ((0, import_chunk_j4z7srhg.ec)() || (0, import_chunk_6e68m1dj.uL)() || (0, import_chunk_f9x2f6cx.Y)() || R(e) || v(e)) return null;
  let o = await r.readHandoffCredential(e, { symlinkAtPath: "follow" });
  switch (o.state) {
    case "present": {
      let i = o.contents.trim();
      if (!i) return null;
      return (0, import_chunk_w578pjby.t)(`Read ${n} from well-known file ${e}`), i;
    }
    case "absent":
      return null;
    case "read-failed":
      return (0, import_chunk_w578pjby.t)(`Failed to read ${n} from ${e}: ${o.code ?? "unknown error"}`, { level: "debug" }), null;
  }
}
function sMs({ envVar: e, wellKnownPath: n, readPath: r = n, label: o, fileLabel: i = o, getCached: m, setCached: a, skipInReviewOrigin: _ = false }) {
  let g = m();
  if (g !== void 0) return g;
  let E = process.env[e];
  if (!E) {
    let u = gJe(r, i);
    return (0, import_chunk_f9x2f6cx.lVe)(e, "file", u), a(u), u;
  }
  let p = parseInt(E, 10);
  if (Number.isNaN(p)) return (0, import_chunk_w578pjby.t)(`${e} must be a valid file descriptor number, got: ${E}`, { level: "error" }), a(null), null;
  if ((0, import_chunk_xytxbeb6.vHs)(p)) {
    let u = F(), c = u ? wRt(p, o) : gJe(r, i);
    if (u) delete process.env[e], (0, import_chunk_f9x2f6cx.aVe)(e);
    if ((0, import_chunk_f9x2f6cx.lVe)(e, u ? "descriptor_direct" : "file_after_socket", c), a(c), c && u) S(n, c, i, { skipInReviewOrigin: _ });
    return c;
  }
  try {
    let u = `/dev/fd/${p}`, c = (0, import_chunk_xytxbeb6.Jze)(u, { maxBytes: out }).trim();
    if (!c) return (0, import_chunk_w578pjby.t)(`File descriptor contained empty ${o}`, { level: "error" }), a(null), null;
    return (0, import_chunk_w578pjby.t)(`Successfully read ${o} from file descriptor ${p}`), (0, import_chunk_f9x2f6cx.lVe)(e, "descriptor_by_path", c), a(c), S(n, c, i, { skipInReviewOrigin: _ }), c;
  } catch (u) {
    (0, import_chunk_w578pjby.t)(`Failed to read ${o} from file descriptor ${p}: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "error" });
    let c = gJe(r, i);
    if (c) return (0, import_chunk_f9x2f6cx.lVe)(e, "file_after_failed_read", c), a(c), c;
    let T = (0, import_chunk_jv7av99m.w)(u);
    if ((T === "EACCES" || T === "EPERM") && F()) {
      let l = wRt(p, o);
      if (delete process.env[e], (0, import_chunk_f9x2f6cx.aVe)(e), l) return (0, import_chunk_f9x2f6cx.lVe)(e, "descriptor_direct", l), a(l), S(n, l, i, { skipInReviewOrigin: _ }), l;
    }
    return a(null), null;
  }
}
function F() {
  return (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (0, import_chunk_6e68m1dj.uL)()) && typeof process.send !== "function";
}
function wRt(e, n) {
  try {
    (0, import_chunk_w578pjby.t)(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = (0, import_chunk_xytxbeb6._1l)(e, { maxBytes: out }).trim();
    if (!r) return (0, import_chunk_w578pjby.t)(`File descriptor ${e} contained empty ${n}`, { level: "error" }), null;
    return (0, import_chunk_w578pjby.t)(`Successfully read ${n} directly from inherited descriptor ${e}`), r;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`Failed to read ${n} directly from descriptor ${e}: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" }), null;
  }
}
async function iMs({ envVar: e, wellKnownPath: n, readPath: r = n, label: o, fileLabel: i = o, getCached: m, setCached: a, credentials: _, skipInReviewOrigin: g = false }) {
  let E = m();
  if (E !== void 0) return E;
  let p = process.env[e];
  if (!p) {
    let l = await O(r, i, _);
    return (0, import_chunk_f9x2f6cx.lVe)(e, "file", l), C(m, a, l);
  }
  let u = parseInt(p, 10);
  if (Number.isNaN(u)) return (0, import_chunk_w578pjby.t)(`${e} must be a valid file descriptor number, got: ${p}`, { level: "error" }), a(null), null;
  let c = F(), T = () => {
    delete process.env[e], (0, import_chunk_f9x2f6cx.aVe)(e);
  };
  if ((0, import_chunk_xytxbeb6.vHs)(u)) {
    if (!c) {
      let f = await O(r, i, _);
      return (0, import_chunk_f9x2f6cx.lVe)(e, "file_after_socket", f), C(m, a, f);
    }
    let l = wRt(u, o);
    if (T(), (0, import_chunk_f9x2f6cx.lVe)(e, "descriptor_direct", l), a(l), l) await D(n, l, i, _, { skipInReviewOrigin: g });
    return l;
  }
  try {
    let l = `/dev/fd/${u}`, f = (0, import_chunk_xytxbeb6.Jze)(l, { maxBytes: out }).trim();
    if (!f) return (0, import_chunk_w578pjby.t)(`File descriptor contained empty ${o}`, { level: "error" }), a(null), null;
    return (0, import_chunk_w578pjby.t)(`Successfully read ${o} from file descriptor ${u}`), (0, import_chunk_f9x2f6cx.lVe)(e, "descriptor_by_path", f), a(f), await D(n, f, i, _, { skipInReviewOrigin: g }), f;
  } catch (l) {
    (0, import_chunk_w578pjby.t)(`Failed to read ${o} from file descriptor ${u}: ${(0, import_chunk_jv7av99m.d)(l)}`, { level: "error" });
    let f = await O(r, i, _);
    if (f) return (0, import_chunk_f9x2f6cx.lVe)(e, "file_after_failed_read", f), C(m, a, f);
    let h = (0, import_chunk_jv7av99m.w)(l);
    if ((h === "EACCES" || h === "EPERM") && c) {
      let y = wRt(u, o);
      if (T(), y) return (0, import_chunk_f9x2f6cx.lVe)(e, "descriptor_direct", y), a(y), await D(n, y, i, _, { skipInReviewOrigin: g }), y;
    }
    return C(m, a, null);
  }
}
function C(e, n, r) {
  let o = e();
  if (o !== void 0) return o;
  return n(r), r;
}
function sut() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) && !(0, import_chunk_f9x2f6cx.Y)();
}
async function zNl({ attempts: e = 10, delayMs: n = 100 } = {}) {
  for (let r = 0; r < e && sut(); r++) await (0, import_chunk_5appeerh.K)(n), FIo();
  return !sut();
}
function k() {
  import_chunk_c203g5kd.s.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"), (0, import_chunk_f9x2f6cx.aVe)("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
}
function FIo() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e || (0, import_chunk_f9x2f6cx.Y)()) return;
  let n;
  try {
    n = L(e);
  } catch (r) {
    if (H(r)) return (0, import_chunk_w578pjby.t)(`bg auth snapshot busy, will retry on the next read: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" }), (0, import_chunk_jv7av99m.w)(r);
    if (!(0, import_chunk_jv7av99m.J)(r)) (0, import_chunk_w578pjby.t)(`Failed to consume bg auth snapshot: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
  }
  if (k(), n === void 0) return;
  try {
    (0, import_promises.unlink)(e).catch(() => {
    });
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      (0, import_chunk_f9x2f6cx.OLo)(r.gatewayToken), (0, import_chunk_w578pjby.t)("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      (0, import_chunk_w578pjby.t)("bg auth snapshot missing accessToken", { level: "warn" });
      return;
    }
    if ((0, import_chunk_f9x2f6cx.w2)(r.accessToken), (0, import_chunk_f9x2f6cx.C3n)(true), (0, import_chunk_f9x2f6cx.$Ns)(typeof r.organizationUuid === "string" ? r.organizationUuid : null), Array.isArray(r.scopes) && r.scopes.length > 0) (0, import_chunk_f9x2f6cx.A3n)(r.scopes);
    if (r.subscriptionType) import_chunk_c203g5kd.s.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(r.subscriptionType));
    if (r.rateLimitTier) import_chunk_c203g5kd.s.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(r.rateLimitTier));
    (0, import_chunk_w578pjby.t)("Consumed bg auth snapshot from sockDir");
  } catch (r) {
    if (!(0, import_chunk_jv7av99m.J)(r)) (0, import_chunk_w578pjby.t)(`Failed to consume bg auth snapshot: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
  }
}
async function BXi(e) {
  let n = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!n || (0, import_chunk_f9x2f6cx.Y)()) return;
  let r = await e.readHandoffCredential(n, { symlinkAtPath: import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse" });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== n) return;
  switch (r.state) {
    case "absent":
      k();
      return;
    case "read-failed":
      if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && (0, import_chunk_cg8dqz0a.x)() === "windows")) k();
      (0, import_chunk_w578pjby.t)(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, { level: "warn" });
      return;
    case "present":
      break;
  }
  k(), e.discardSpentCredentialFile(n).catch(() => {
  });
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      (0, import_chunk_f9x2f6cx.OLo)(o.gatewayToken), (0, import_chunk_w578pjby.t)("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      (0, import_chunk_w578pjby.t)("bg auth snapshot missing accessToken", { level: "warn" });
      return;
    }
    if ((0, import_chunk_f9x2f6cx.w2)(o.accessToken), (0, import_chunk_f9x2f6cx.C3n)(true), (0, import_chunk_f9x2f6cx.$Ns)(typeof o.organizationUuid === "string" ? o.organizationUuid : null), Array.isArray(o.scopes) && o.scopes.length > 0) (0, import_chunk_f9x2f6cx.A3n)(o.scopes);
    if (o.subscriptionType) import_chunk_c203g5kd.s.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) import_chunk_c203g5kd.s.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    (0, import_chunk_w578pjby.t)("Consumed bg auth snapshot from sockDir");
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Failed to consume bg auth snapshot: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
  }
}
function bK(e) {
  return (process.env[e]?.trim() ?? "") !== "" || (0, import_chunk_f9x2f6cx.NNr)(e);
}
function Zx() {
  return FIo(), sMs({ envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR", wellKnownPath: Oee, label: "OAuth token", getCached: import_chunk_f9x2f6cx.wse, setCached: import_chunk_f9x2f6cx.w2, skipInReviewOrigin: true });
}
async function aMs(e) {
  return await BXi(e), WXi(e);
}
async function WXi(e) {
  return iMs({ envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR", wellKnownPath: Oee, label: "OAuth token", getCached: import_chunk_f9x2f6cx.wse, setCached: import_chunk_f9x2f6cx.w2, credentials: e, skipInReviewOrigin: true });
}
function ZVt() {
  let e = (0, import_chunk_f9x2f6cx.BNs)();
  if (e !== void 0) return e;
  FIo();
  let n = (0, import_chunk_f9x2f6cx.BNs)();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, o = r ? parseInt(r, 10) : Number.NaN, i = Number.isNaN(o) || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !(0, import_chunk_xytxbeb6.vHs)(o) ? null : wRt(o, "gateway token");
  if ((0, import_chunk_f9x2f6cx.OLo)(i), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR"), r?.trim()) (0, import_chunk_f9x2f6cx.aVe)("CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR");
  return i;
}
function wK() {
  let e = (0, import_chunk_f9x2f6cx.$yn)();
  if (e !== void 0) return e;
  return sMs({ envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR", wellKnownPath: rut, label: "API key", getCached: import_chunk_f9x2f6cx.$yn, setCached: import_chunk_f9x2f6cx.UNs });
}
async function VNl(e) {
  return iMs({ envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR", wellKnownPath: rut, label: "API key", getCached: import_chunk_f9x2f6cx.$yn, setCached: import_chunk_f9x2f6cx.UNs, credentials: e });
}
function H(e) {
  let n = (0, import_chunk_jv7av99m.w)(e);
  return n === "EBUSY" || n === "EPERM" || n === "EACCES" && (0, import_chunk_cg8dqz0a.x)() === "windows";
}
function L(e) {
  let n = () => (0, import_chunk_xytxbeb6.Jze)(e, { maxBytes: out, symlinkAtPath: import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse", regularFileOnly: true });
  try {
    return n();
  } catch (r) {
    if (H(r)) return n();
    throw r;
  }
}
