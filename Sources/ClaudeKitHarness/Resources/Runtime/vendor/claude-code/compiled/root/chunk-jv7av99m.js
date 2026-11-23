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
var chunk_jv7av99m_exports = {};
__export(chunk_jv7av99m_exports, {
  $ca: () => $ca,
  $i: () => $i,
  A: () => A,
  A$: () => A$,
  AFr: () => AFr,
  CF: () => CF,
  CFr: () => CFr,
  CJ: () => CJ,
  Cr: () => Cr,
  Cy: () => Cy,
  D: () => D,
  D1e: () => D1e,
  Dca: () => Dca,
  E3t: () => E3t,
  Fca: () => Fca,
  Fe: () => Fe,
  H3: () => H3,
  HD: () => HD,
  Hca: () => Hca,
  Ie: () => Ie,
  J: () => J,
  JB: () => JB,
  Kz: () => Kz,
  LPt: () => LPt,
  Lca: () => Lca,
  M3: () => M3,
  MD: () => MD,
  M_: () => M_,
  Mo: () => Mo,
  NFs: () => NFs,
  NPt: () => NPt,
  Nca: () => Nca,
  Nt: () => Nt,
  PFr: () => PFr,
  Ppt: () => Ppt,
  QB: () => QB,
  Qu: () => Qu,
  RFr: () => RFr,
  SS: () => SS,
  ST: () => ST,
  TFr: () => TFr,
  Tk: () => Tk,
  Uca: () => Uca,
  VK: () => VK,
  Vz: () => Vz,
  WE: () => WE,
  Wf: () => Wf,
  Ye: () => Ye,
  a5n: () => a5n,
  aE: () => aE,
  c5n: () => c5n,
  d: () => d,
  d5n: () => d5n,
  dA: () => dA,
  dNo: () => dNo,
  em: () => em,
  f5n: () => f5n,
  fn: () => fn,
  gr: () => gr,
  i5n: () => i5n,
  k3t: () => k3t,
  kO: () => kO,
  kn: () => kn,
  l5n: () => l5n,
  n5n: () => n5n,
  nH: () => nH,
  o5n: () => o5n,
  op: () => op,
  p5n: () => p5n,
  pa: () => pa,
  r5n: () => r5n,
  rH: () => rH,
  s5n: () => s5n,
  t5n: () => t5n,
  tH: () => tH,
  u5n: () => u5n,
  w: () => w,
  w3t: () => w3t,
  wp: () => wp,
  wte: () => wte,
  xFr: () => xFr,
  xL: () => xL,
  xpt: () => xpt,
  yVe: () => yVe,
  yu: () => yu
});
module.exports = __toCommonJS(chunk_jv7av99m_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
function xpt(n) {
  return typeof n === "object" && n !== null && ("name" in n && n.name === "AbortError" || "message" in n && String(n.message).includes("FetchRequestCanceledException"));
}
var t5n = (n) => {
  if (n instanceof Error) return n;
  if (typeof n === "object" && n !== null) {
    try {
      let e = Object.prototype.toString.call(n);
      if (e === "[object Error]" || e === "[object DOMException]") {
        let t = Error(n.message, n.cause ? { cause: n.cause } : {});
        if (n.stack) t.stack = n.stack;
        if (n.cause && !t.cause) t.cause = n.cause;
        if (n.name) t.name = n.name;
        return t;
      }
    } catch {
    }
    try {
      return Error(JSON.stringify(n));
    } catch {
    }
  }
  return Error(n);
};
var Mo = /* @__PURE__ */ (() => {
  class n extends Error {
  }
  return n;
})();
class Nt extends Mo {
  constructor(n, e, t, r, o) {
    super(`${Nt.makeMessage(n, e, t)}`);
    this.status = n, this.headers = r, this.requestID = r?.get("request-id"), this.workspaceID = r?.get("anthropic-workspace-id"), this.error = e, this.type = o ?? null;
  }
  static makeMessage(n, e, t) {
    let r = e?.message ? typeof e.message === "string" ? e.message : JSON.stringify(e.message) : e ? JSON.stringify(e) : t;
    if (n && r) return `${n} ${r}`;
    if (n) return `${n} status code (no body)`;
    if (r) return r;
    return "(no status code or body)";
  }
  static generate(n, e, t, r) {
    if (!n || !r) return new em({ message: t, cause: t5n(e) });
    let o = e, i = o?.error?.type;
    if (n === 400) return new n5n(n, o, t, r, i);
    if (n === 401) return new LPt(n, o, t, r, i);
    if (n === 403) return new r5n(n, o, t, r, i);
    if (n === 404) return new NPt(n, o, t, r, i);
    if (n === 409) return new o5n(n, o, t, r, i);
    if (n === 422) return new s5n(n, o, t, r, i);
    if (n === 429) return new i5n(n, o, t, r, i);
    if (n >= 500) return new a5n(n, o, t, r, i);
    return new Nt(n, o, t, r, i);
  }
}
class yu extends Nt {
  constructor({ message: n } = {}) {
    super(void 0, void 0, n || "Request was aborted.", void 0);
  }
}
class em extends Nt {
  constructor({ message: n, cause: e }) {
    super(void 0, void 0, n || "Connection error.", void 0);
    if (e) this.cause = e;
  }
}
class CF extends em {
  constructor({ message: n } = {}) {
    super({ message: n ?? "Request timed out." });
  }
}
class TFr extends Mo {
  constructor(n, { cause: e } = {}) {
    super(n ?? "Retryable error.");
    if (e !== void 0) this.cause = e;
  }
}
class n5n extends Nt {
}
class LPt extends Nt {
}
class r5n extends Nt {
}
class NPt extends Nt {
}
class o5n extends Nt {
}
class s5n extends Nt {
}
class i5n extends Nt {
}
class a5n extends Nt {
}
class Ppt extends Error {
  constructor(n) {
    super(n);
    this.name = this.constructor.name || "Error";
  }
}
class WE extends Error {
}
class aE extends Error {
  name = "CliUserError";
}
class Ie extends Error {
  constructor(n) {
    super(n);
    this.name = "AbortError";
  }
}
class wp extends Ie {
}
class l5n extends Ie {
}
function Fe(n) {
  try {
    return n instanceof Ie || n instanceof yu || n instanceof Error && (n.name === "AbortError" || "__CANCEL__" in n && Boolean(n.__CANCEL__));
  } catch {
    return false;
  }
}
class JB extends Error {
  filePath;
  defaultConfig;
  constructor(n, e, t) {
    super(n);
    this.name = "ConfigParseError", this.filePath = e, this.defaultConfig = t;
  }
}
class ST extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  sandboxViolations;
  sandboxed;
  printedBytes;
  constructor(n) {
    super("Shell command failed");
    this.name = "ShellError", this.stdout = n.stdout, this.stderr = n.stderr, this.code = n.code, this.interrupted = n.interrupted, this.hadSandboxViolation = n.hadSandboxViolation ?? false, this.sandboxViolations = n.sandboxViolations, this.sandboxed = n.sandboxed, this.printedBytes = n.printedBytes;
  }
}
class Wf extends Error {
  formattedMessage;
  constructor(n, e) {
    super(n);
    this.formattedMessage = e;
    this.name = "TeleportOperationError";
  }
}
class A extends Error {
  telemetryMessage;
  errorClass;
  constructor(n, e, t) {
    super(n);
    this.name = "TelemetrySafeError", this.telemetryMessage = e ?? n, this.errorClass = t;
  }
}
class gr extends A {
}
var Ye = (n, e) => {
  try {
    if (n !== null && typeof n === "object" && !("telemetryMessage" in n) && Object.isExtensible(n)) Object.assign(n, { telemetryMessage: e });
  } catch {
  }
  return n;
}, a = ["AggregateError", "Error", "EvalError", "RangeError", "ReferenceError", "SuppressedError", "SyntaxError", "TypeError", "URIError"], CFr = new Set(a);
function D1e(n) {
  try {
    let e = n instanceof Error ? n.name : void 0, t = a.find((r) => r === e);
    if (t !== void 0) return t;
  } catch {
  }
  return "a value that is not a built-in error";
}
var M3 = (n, e) => {
  try {
    if (n !== null && typeof n === "object" && Object.isExtensible(n)) {
      let t = n, r = Object.entries(e).filter(([o, i]) => i !== void 0 && !(o in t));
      Object.assign(t, Object.fromEntries(r));
    }
  } catch {
  }
  return n;
}, s = Symbol("telemetryChildExitStatus"), Hca = (n, e) => {
  try {
    if (e !== void 0 && n !== null && typeof n === "object" && !Object.hasOwn(n, s) && Object.isExtensible(n)) Object.defineProperty(n, s, { value: e, enumerable: false, writable: false, configurable: false });
  } catch {
  }
  return n;
};
function QB(n) {
  try {
    if (n !== null && typeof n === "object" && "telemetryMessage" in n && typeof n.telemetryMessage === "string") return n.telemetryMessage;
  } catch {
  }
  return;
}
function MD(n, e) {
  return n instanceof Error && n.message === e;
}
function D(n) {
  return n instanceof Error ? n : Error(String(n));
}
function d(n) {
  return n instanceof Error ? n.message : String(n);
}
function w(n) {
  if (n && typeof n === "object" && "code" in n && typeof n.code === "string") return n.code;
  return;
}
function Cr(n) {
  return Cy(w(n));
}
function Cy(n) {
  return n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n) ? (0, import_chunk_78g0060s.Fr)(n) : void 0;
}
var l = -2147483648, E = 4294967295;
function Dca(n) {
  try {
    if (n === null || typeof n !== "object") return;
    let e = Object.getOwnPropertyDescriptor(n, s), t = e !== void 0 && Object.hasOwn(e, "value") ? e.value : void 0;
    return typeof t === "number" && Number.isInteger(t) && t >= l && t <= E ? t : void 0;
  } catch {
    return;
  }
}
var w3t = "did not become reachable within", k3t = "exited before it became reachable", AFr = "The socket connection was closed unexpectedly";
function dNo(n) {
  return [...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g)].filter((e) => !"/\\".includes(n[e.index - 1] ?? ".")).map((e) => e[0]);
}
function Qu(n) {
  let e = n?.name;
  return typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e) ? (0, import_chunk_78g0060s.Fr)(e) : void 0;
}
function op(n) {
  return Cr(n) ?? Qu(n);
}
function Vz(n) {
  return (0, import_chunk_78g0060s.Fr)(Cr(n)?.toLowerCase() ?? "other");
}
function A$(n) {
  return Qu(n);
}
function H3(n) {
  return n !== void 0 && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n) ? (0, import_chunk_78g0060s.Fr)(n) : void 0;
}
function d5n(n) {
  let e = H3(n);
  return e === void 0 ? void 0 : (0, import_chunk_78g0060s.Fr)(e.toLowerCase());
}
function tH(n) {
  return typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n) ? (0, import_chunk_78g0060s.Fr)(n) : void 0;
}
function RFr(n) {
  return typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n) ? (0, import_chunk_78g0060s.Fr)(n) : (0, import_chunk_78g0060s.S)("unparseable");
}
function dA(n) {
  return /^[a-z][a-z0-9_]{0,39}$/.test(n) ? (0, import_chunk_78g0060s.Fr)(n) : (0, import_chunk_78g0060s.S)("unparseable");
}
function VK(n) {
  if (typeof n !== "string") return;
  return /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n) ? (0, import_chunk_78g0060s.Fr)(n) : (0, import_chunk_78g0060s.S)("nonconforming");
}
function Lca(n) {
  if (n === void 0) return;
  let e = n.indexOf(":"), t = e === -1 ? n : n.slice(0, e);
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) return (0, import_chunk_78g0060s.S)("unparseable");
  if (e === -1) return (0, import_chunk_78g0060s.Fr)(t);
  let r = n.slice(e + 1), o = Cy(r) ?? tH(r) ?? (r === "string" || r === "non-error" ? r : "Error");
  return (0, import_chunk_78g0060s.Fr)(`${t}:${o}`);
}
function Nca(n) {
  return tH(n);
}
function E3t(n) {
  let e = n?.constructor?.name;
  return typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e) ? (0, import_chunk_78g0060s.Fr)(e) : (0, import_chunk_78g0060s.S)("unparseable");
}
function c5n(n) {
  return p.test(n) ? (0, import_chunk_78g0060s.Fr)(n) : void 0;
}
var p = /^(?:<user-code>|(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2})$/, yVe = /* @__PURE__ */ new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]);
function nH(n) {
  let e = w(n);
  return e === "ENOSPC" || e === "EDQUOT";
}
var Fca = /* @__PURE__ */ new Set(["EACCES", "EPERM", "EROFS"]);
function pa(n) {
  return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number";
}
function xL(n, e, t = 5) {
  let r = n;
  for (let o = 0; o < t; o++) {
    if (!(r instanceof Error)) return;
    if (e(r)) return r;
    r = r.cause;
  }
  return;
}
function J(n) {
  return w(n) === "ENOENT";
}
function kn(n) {
  let e = w(n);
  return e === "ENOENT" || e === "ENOTDIR";
}
function Kz(n) {
  return w(n) === "EISDIR";
}
function $ca(n) {
  return w(n) === "E2BIG";
}
function Uca(n) {
  try {
    if (w(n) !== "ECONNRESET") return false;
    let e = n instanceof Error ? n.stack : void 0;
    if (typeof e !== "string") return false;
    let t = e.split(`
`).find((r) => r.trim().startsWith("at "));
    return t !== void 0 && t.includes("node:_http_server");
  } catch {
    return false;
  }
}
function xFr(n) {
  if (n && typeof n === "object" && "path" in n && typeof n.path === "string") return n.path;
  return;
}
function u5n(n) {
  let e = n.message && n.name !== "" ? `${n.name}: ${n.message}` : n.message || n.name, t = n.stack;
  if (!t) return e;
  if (t.startsWith(e)) return t;
  let r = t.split(`
`), o = r[0] ?? "", i = o === n.name || o.startsWith(`${n.name}:`) ? r.slice(1) : r;
  return [e, ...i].join(`
`);
}
var u = /* @__PURE__ */ new Set(["ENOENT", "EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EROFS"]);
function fn(n) {
  return HD(w(n));
}
function HD(n) {
  return n !== void 0 && u.has(n);
}
function kO(n) {
  let e = n instanceof Error ? n.cause : void 0;
  if (typeof e !== "object" || e === null || !("telemetryCode" in e)) return;
  return typeof e.telemetryCode === "string" ? e.telemetryCode : void 0;
}
var c = /* @__PURE__ */ new Set(["ENOSPC", "EDQUOT", "ENFILE", "EIO"]);
function Tk(n) {
  return NFs(w(n));
}
function NFs(n) {
  return n === "EDEADLK" || n === "EINTR" || n === "ENXIO" || n === "ENODEV" || n === "ECANCELED" || n === "ENEEDAUTH" || n === "ESTALE" || n === "EUNKNOWN" || n === "ENOMEM" || n !== void 0 && f(n);
}
function f(n) {
  return n === "UNKNOWN" || n.startsWith("Unknown system error");
}
function f5n(n, e = "darwin") {
  if (e !== "win32") return false;
  try {
    return pa(n) && n.code === "EBADF" && n.syscall === "read";
  } catch {
    return false;
  }
}
function wte(n) {
  if (typeof n !== "string") return;
  return /^E[A-Z0-9]+$/.test(n) || f(n) ? n : void 0;
}
function PFr(n) {
  let e = w(n);
  return e !== void 0 && c.has(e);
}
function SS(n) {
  return p5n(w(n));
}
function p5n(n) {
  return n !== void 0 && (u.has(n) || n === "EISDIR" || c.has(n));
}
function M_(n, e) {
  if (e?.(n)) return true;
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return false;
  let t = n.response?.status;
  return t === void 0 || t === 401 || t === 403 || t === 429;
}
function rH(n) {
  return n instanceof Error && /maxContentLength size of .* exceeded/.test(n.message);
}
function $i(n) {
  let e = d(n);
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return { kind: "other", message: e };
  let t = n, r = t.response?.status;
  if (r === 401 || r === 403) return { kind: "auth", status: r, message: e };
  if (t.code === "ECONNABORTED") return { kind: "timeout", status: r, message: e };
  if (t.code === "ECONNREFUSED" || t.code === "ENOTFOUND") return { kind: "network", status: r, message: e };
  return { kind: "http", status: r, message: e };
}
function CJ(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429;
}
