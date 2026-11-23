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
var chunk_axt253bq_exports = {};
__export(chunk_axt253bq_exports, {
  default: () => chunk_axt253bq_default
});
module.exports = __toCommonJS(chunk_axt253bq_exports);
var import_chunk_10dpa5sx = require("/$bunfs/root/chunk-10dpa5sx.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var J = (0, import_chunk_w1d7ygsk.V)(function(x) {
  Object.defineProperty(x, "__esModule", { value: true });
  x.DEFAULT_HELPER_TIMEOUT_SEC = void 0;
  x.parseHelperOutput = I;
  x.describeHelperParseFailure = te;
  x.mergeHeaders = ne;
  x.runCredentialHelper = oe;
  x.DEFAULT_HELPER_TIMEOUT_SEC = 60;
  var T = /[\r\n\0]/;
  function I(r, e, t) {
    let n = r.trim(), o = null, i = false;
    if (n.startsWith("{")) o = B(n, e, t), i = true;
    else {
      let u = n.search(/^[ \t]*\{/m), l = u > 0 ? B(n.slice(u), e, t) : null;
      if (l) {
        let s = Buffer.byteLength(n.slice(0, u));
        e.warn(`[${t}] credential helper stdout had ${s} bytes before JSON; recovered. Redirect other output to stderr.`), o = { ...l, parseWarnings: [`Recovered credential after ${s} bytes of leading output on stdout; print only the credential to stdout`, ...l.parseWarnings] }, i = true;
      } else if (n.includes("{")) e.error(`[${t}] credential helper stdout looks like JSON but didn't parse`);
      else if (!n.includes(`
`)) o = { token: n };
      else e.error(`[${t}] credential helper stdout has multiple lines; emit only the token or JSON to stdout (redirect other output to stderr)`);
    }
    if (!(o === null || o === void 0 ? void 0 : o.token)) return null;
    if (T.test(o.token)) return e.error(`[${t}] credential helper token contains control characters`), null;
    return { ...o, isJson: i };
  }
  function B(r, e, t) {
    let n = [];
    try {
      let o = JSON.parse(r), i = typeof o.token === "string" ? o.token.trim() : void 0;
      if (!i) return e.error(`[${t}] credential helper JSON missing 'token' string field`), null;
      let u;
      if (o.headers !== void 0 && o.headers !== null) {
        if (typeof o.headers !== "object" || Array.isArray(o.headers)) return e.error(`[${t}] credential helper JSON 'headers' must be an object`), null;
        u = {};
        for (let [l, s] of Object.entries(o.headers)) {
          let p = typeof s === "string" ? s.trim() : void 0;
          if (!p) {
            n.push(`Dropped header ${JSON.stringify(l)}: non-string or empty value`);
            continue;
          }
          if (T.test(l) || T.test(p)) {
            e.error(`[${t}] credential helper header contains control characters; dropped`), n.push(`Dropped header ${JSON.stringify(l)}: contains control characters`);
            continue;
          }
          u[l] = p;
        }
      }
      return { token: i, headers: u, parseWarnings: n };
    } catch (o) {
      return e.error(`[${t}] credential helper output starts with '{' but is not valid JSON`), null;
    }
  }
  function te(r) {
    let e = r.trim();
    if (e.startsWith("{")) return "Output starts with '{' but isn't valid JSON with a 'token' string.";
    if (e.includes("{")) return "Output looks like JSON but isn't; print only a bare token or a JSON object with a 'token' field.";
    if (e.includes(`
`)) return "Output has multiple lines; print only the token or a JSON object to stdout.";
    return "Token contains control characters.";
  }
  function ne(r, e) {
    let t = { ...r, ...e };
    return Object.keys(t).length > 0 ? t : void 0;
  }
  async function oe(r, e, t, n, o) {
    let i = await o.run(r, { logTag: o.logTag, timeoutMs: t * 1e3, env: n, args: e });
    if (!i.ok) return o.log.warn(`[${o.logTag}] credential helper failed (reason=${i.reason})`), { outcome: i, parsed: null };
    return { outcome: i, parsed: I(i.stdout, o.log, o.logTag) };
  }
});
var G = (0, import_chunk_w1d7ygsk.V)(function(w) {
  var le = w && w.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(w, "__esModule", { value: true });
  w.helperEnvFromBedrock = ce;
  var W = le((0, import_chunk_w1d7ygsk.ft)("path"));
  function ce(r, e = process.env) {
    let t = { ...e };
    if (r.profile) t.AWS_PROFILE = r.profile;
    if (r.region) t.AWS_REGION = r.region;
    if (r.awsDir) t.AWS_CONFIG_FILE = W.default.join(r.awsDir, "config"), t.AWS_SHARED_CREDENTIALS_FILE = W.default.join(r.awsDir, "credentials");
    return t;
  }
});
var q = (0, import_chunk_w1d7ygsk.V)(function(f) {
  var de = f && f.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(f, "__esModule", { value: true });
  f.NT_NAMESPACE_RE = void 0;
  f.isUncPath = fe;
  var N = de((0, import_chunk_w1d7ygsk.ft)("path"));
  f.NT_NAMESPACE_RE = /^[\\/]\?\?[\\/]/;
  function fe(r, { windows: e } = {}) {
    if (f.NT_NAMESPACE_RE.test(r)) return true;
    let n = (e === void 0 ? N.default : e ? N.default.win32 : N.default.posix).normalize(r);
    return n.startsWith("\\\\") || n.startsWith("//") || f.NT_NAMESPACE_RE.test(n);
  }
});
var Q = (0, import_chunk_w1d7ygsk.V)(function(m) {
  var pe = m && m.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(m, "__esModule", { value: true });
  m._test = void 0;
  m.isValidHelperPath = X;
  m.runHelperExecutable = ge;
  var _ = pe((0, import_chunk_w1d7ygsk.ft)("path")), E = (0, import_chunk_10dpa5sx.OCr)(), K = q(), me = 2e3, he = 536870912;
  function X(r, { windows: e = false } = {}) {
    let t = e ? _.default.win32 : _.default.posix;
    return E.hasNoHelperBreakoutChars(r) && !/[. ]$/.test(r) && !(e && r.includes(":", 2)) && t.isAbsolute(r) && !K.isUncPath(r, { windows: e });
  }
  var _e = "PowerShell is required to run .ps1 helpers; use a .cmd or .exe helper if PowerShell is restricted on this machine.";
  function Y(r, e, t = "darwin") {
    var n;
    if (t !== "win32") return { cmd: r, args: [...e] };
    let o = _.default.win32.join((n = process.env.SYSTEMROOT) !== null && n !== void 0 ? n : "C:\\Windows", "System32"), i = _.default.win32.extname(r).toLowerCase();
    if (i === ".ps1") return { cmd: _.default.win32.join(o, "WindowsPowerShell", "v1.0", "powershell.exe"), args: ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", r, ...e], interpreter: "powershell" };
    if (i === ".cmd" || i === ".bat") {
      let u = e.map((s) => ` "${s}"`).join(""), l = e.length > 0 ? ["/d", "/s", "/v:off", "/c"] : ["/d", "/s", "/c"];
      return { cmd: _.default.win32.join(o, "cmd.exe"), args: [...l, `""${r}"${u}"`], windowsVerbatimArguments: true, interpreter: "cmd" };
    }
    return { cmd: r, args: [...e] };
  }
  async function Ee(r, e, t) {
    let n;
    try {
      return await Promise.race([r, new Promise((o, i) => {
        n = setTimeout(() => i(Error(t)), e), n.unref();
      })]);
    } finally {
      clearTimeout(n);
    }
  }
  var z = (r) => r.replace(/[\r\n]+/g, " \u23CE ");
  async function ge(r, e, t) {
    var n;
    let o = be(t.log);
    try {
      return await we(r, e, { ...t, log: o });
    } catch (i) {
      if ((n = e.signal) === null || n === void 0 ? void 0 : n.aborted) return { ok: false, reason: "aborted" };
      let u = i instanceof Error ? i.name : typeof i;
      return o.error(`[${e.logTag}] helper runner failed (${u})`), { ok: false, reason: "spawn-failed", spawnError: `The helper runner failed (${u}).` };
    }
  }
  function be(r) {
    let e = (t) => (...n) => {
      try {
        r[t](...n);
      } catch (o) {
      }
    };
    return { info: e("info"), warn: e("warn"), error: e("error") };
  }
  async function we(r, e, t) {
    var n, o, i, u, l;
    let { log: s } = t, p = (n = t.platform) !== null && n !== void 0 ? n : "darwin";
    if (!X(r, { windows: p === "win32" })) return s.error(`[${e.logTag}] helper must be a local absolute path, ignoring`, { helperPath: r }), { ok: false, reason: "bad-path" };
    let S = (o = e.args) !== null && o !== void 0 ? o : [], C = S.findIndex((a) => !E.hasNoHelperBreakoutChars(a));
    if (C !== -1) {
      let a = `Argument ${C + 1} of ${S.length} ${E.HELPER_ARG_UNSAFE_MESSAGE}. Remove it, or move that value into the script.`;
      return s.error(`[${e.logTag}] ${a} Not running the helper.`, { helperPath: r }), { ok: false, reason: "bad-args", spawnError: a };
    }
    let y = Y(r, S, p), M = y.interpreter === "powershell";
    s.info(`[${e.logTag}] running helper`, { helperPath: r, args: S.map((a) => t.redactArg(a)) });
    let O = { ...(i = e.env) !== null && i !== void 0 ? i : process.env };
    if (t.resolvePath) O.PATH = await t.resolvePath(O.PATH);
    let R = Date.now(), L, h, g;
    try {
      ({ stdout: L, stderr: h, code: g } = await Ee(t.spawn(y.cmd, y.args, { timeout: e.timeoutMs, killSignal: "SIGKILL", maxBuffer: (u = e.maxBuffer) !== null && u !== void 0 ? u : he, ignoreExitCode: true, env: O, signal: e.signal, detached: e.signal !== void 0 && p !== "win32", windowsVerbatimArguments: y.windowsVerbatimArguments, windowsHide: true }), e.timeoutMs + me, `helper did not settle within ${e.timeoutMs}ms`));
    } catch (a) {
      let d = Date.now() - R;
      if (((l = e.signal) === null || l === void 0 ? void 0 : l.aborted) && (a === e.signal.reason || a instanceof Error && a.name === "AbortError")) return s.info(`[${e.logTag}] helper aborted (elapsed=${d}ms)`), { ok: false, reason: "aborted", elapsedMs: d };
      let F = z(t.redactStderr(a instanceof Error ? a.message : String(a))), D = M && (a === null || a === void 0 ? void 0 : a.spawnError) === true ? `${_e} (${F})` : F;
      return s.error(`[${e.logTag}] helper spawn failed (elapsed=${d}ms): ${D}`), { ok: false, reason: "spawn-failed", elapsedMs: d, spawnError: D };
    }
    let H = Date.now() - R, P = L.trim(), k = Buffer.byteLength(P, "utf8"), b = { elapsedMs: H, exitCode: g, stderr: h, stdoutBytes: k }, j = z(t.redactStderr(h).slice(-2e3)), A = `(elapsed=${H}ms stdoutBytes=${k}) stderr="${j}"`;
    if (g !== 0) {
      if (H >= e.timeoutMs) {
        let d = M && k === 0 && !h ? `Timed out after ${Math.round(e.timeoutMs / 1e3)}s with no output. If PowerShell is restricted on this machine, use a .cmd or .exe helper; otherwise the script may be slow.` : void 0;
        return s.error(`[${e.logTag}] helper timed out after ${e.timeoutMs}ms ${A}${d ? ` \u2014 ${d}` : ""}`), { ok: false, reason: "timed-out", ...b, ...d ? { spawnError: d } : {} };
      }
      if (p === "darwin" && g === 126 && h.includes("Operation not permitted")) return s.error(`[${e.logTag}] helper blocked by macOS TCC ${A}`), { ok: false, reason: "tcc-denied", ...b };
      return s.error(`[${e.logTag}] helper exited code=${g} ${A}`), { ok: false, reason: "non-zero-exit", ...b };
    }
    if (!P) return s.error(`[${e.logTag}] helper produced no output ${A}`), { ok: false, reason: "empty", ...b };
    let re = h.trim() ? ` stderr="${j}"` : "";
    return s.info(`[${e.logTag}] helper ok (elapsed=${H}ms stdoutBytes=${k})${re}`), { ok: true, stdout: P, ...b };
  }
  m._test = { resolveWindowsInvocation: Y };
});
var $e = (0, import_chunk_w1d7ygsk.V)(function(c) {
  Object.defineProperty(c, "__esModule", { value: true });
  c.runHelperExecutable = c.isValidHelperPath = c.helperEnvFromBedrock = c.runCredentialHelper = c.parseHelperOutput = c.mergeHeaders = c.describeHelperParseFailure = c.DEFAULT_HELPER_TIMEOUT_SEC = c.HELPER_ARG_UNSAFE_MESSAGE = c.hasNoHelperBreakoutChars = void 0;
  var Z = (0, import_chunk_10dpa5sx.OCr)();
  Object.defineProperty(c, "hasNoHelperBreakoutChars", { enumerable: true, get: function() {
    return Z.hasNoHelperBreakoutChars;
  } });
  Object.defineProperty(c, "HELPER_ARG_UNSAFE_MESSAGE", { enumerable: true, get: function() {
    return Z.HELPER_ARG_UNSAFE_MESSAGE;
  } });
  var v = J();
  Object.defineProperty(c, "DEFAULT_HELPER_TIMEOUT_SEC", { enumerable: true, get: function() {
    return v.DEFAULT_HELPER_TIMEOUT_SEC;
  } });
  Object.defineProperty(c, "describeHelperParseFailure", { enumerable: true, get: function() {
    return v.describeHelperParseFailure;
  } });
  Object.defineProperty(c, "mergeHeaders", { enumerable: true, get: function() {
    return v.mergeHeaders;
  } });
  Object.defineProperty(c, "parseHelperOutput", { enumerable: true, get: function() {
    return v.parseHelperOutput;
  } });
  Object.defineProperty(c, "runCredentialHelper", { enumerable: true, get: function() {
    return v.runCredentialHelper;
  } });
  var ve = G();
  Object.defineProperty(c, "helperEnvFromBedrock", { enumerable: true, get: function() {
    return ve.helperEnvFromBedrock;
  } });
  var ee = Q();
  Object.defineProperty(c, "isValidHelperPath", { enumerable: true, get: function() {
    return ee.isValidHelperPath;
  } });
  Object.defineProperty(c, "runHelperExecutable", { enumerable: true, get: function() {
    return ee.runHelperExecutable;
  } });
});
var chunk_axt253bq_default = $e();
