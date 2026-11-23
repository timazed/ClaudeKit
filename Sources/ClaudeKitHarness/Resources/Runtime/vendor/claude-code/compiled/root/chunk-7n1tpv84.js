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
var chunk_7n1tpv84_exports = {};
__export(chunk_7n1tpv84_exports, {
  JJi: () => JJi,
  QJi: () => QJi,
  XJi: () => XJi,
  ZJi: () => ZJi,
  tMo: () => tMo
});
module.exports = __toCommonJS(chunk_7n1tpv84_exports);
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_child_process = require("child_process");
var import_fs = require("fs");
var R = /* @__PURE__ */ new Set(["EAGAIN", "EMFILE", "ENFILE", "ENOMEM"]);
function XJi(e) {
  return e.status === "timeout" || e.status === "killed" || e.status === "spawn_error" && e.errno !== null && R.has(e.errno);
}
class E {
  promise = null;
  start() {
    if (this.promise) return;
    this.promise = tMo();
  }
  reset() {
    this.promise = null;
  }
}
var S = new E();
function C(e) {
  if (!e) return { status: "ok", exitCode: 0, errno: null, signal: null };
  let t = e, n = typeof t.signal === "string" && t.signal ? t.signal : null;
  if (typeof t.code === "string") return { status: "spawn_error", exitCode: null, errno: t.code, signal: null };
  if (t.killed === true) return { status: "timeout", exitCode: null, errno: null, signal: n };
  if (n) return { status: "killed", exitCode: null, errno: null, signal: n };
  return { status: "exited", exitCode: typeof t.code === "number" ? t.code : null, errno: null, signal: null };
}
function m(e, t, n, r) {
  let u = Date.now();
  return new Promise((s) => {
    try {
      (0, import_child_process.execFile)(e, t, { encoding: "utf-8", timeout: import_chunk_dqanqm2x.RHr, windowsHide: true, ...n !== void 0 && { maxBuffer: n }, ...r }, (o, a, c) => {
        s({ stdout: a ?? "", stderr: c ?? "", ...C(o), durationMs: Date.now() - u });
      });
    } catch (o) {
      let a = o.code;
      s({ stdout: "", stderr: "", status: "spawn_error", exitCode: null, errno: typeof a === "string" ? a : null, signal: null, durationMs: Date.now() - u });
    }
  });
}
function f(e) {
  return { status: e.status, exitCode: e.exitCode, errno: e.errno, signal: e.signal, durationMs: e.durationMs, answered: e.status === "ok" || e.status === "exited" && e.exitCode === 1 && e.stderr.includes(import_chunk_dqanqm2x.qFl) };
}
function JJi(e) {
  return !e.answered && !(e.status === "exited" && e.exitCode === 1) && !(e.status === "spawn_error" && (e.errno === null || !R.has(e.errno)));
}
function p(e) {
  return e.status === "ok" || e.status === "exited" && e.exitCode !== null;
}
function g(e) {
  return e.status === "spawn_error" && e.errno === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER";
}
function w(e) {
  if (g(e)) return { unreadReason: "plutil's output exceeded the size limit", unreadCause: "oversize" };
  switch (e.status) {
    case "timeout":
      return { unreadReason: `plutil timed out after ${import_chunk_dqanqm2x.RHr / 1e3} seconds`, unreadCause: "timeout" };
    case "killed":
      return { unreadReason: "plutil was stopped by a signal", unreadCause: "killed" };
    case "spawn_error":
      return { unreadReason: "plutil could not be run", unreadCause: e.errno !== null && R.has(e.errno) ? "spawn_busy" : "spawn_error" };
    case "ok":
    case "exited":
      return { unreadReason: "plutil did not finish" };
  }
}
function v(e) {
  let t;
  try {
    return t = (0, import_fs.openSync)(e, "r"), (0, import_fs.readSync)(t, Buffer.alloc(1), 0, 1, 0), null;
  } catch (n) {
    return { code: n && typeof n === "object" && "code" in n ? n.code : void 0, message: n instanceof Error ? n.message : String(n) };
  } finally {
    if (t !== void 0) try {
      (0, import_fs.closeSync)(t);
    } catch {
    }
  }
}
function tMo(e = false) {
  return (async () => {
    {
      let t = (0, import_chunk_dqanqm2x.XFl)(), r = (await Promise.all(t.map(async ({ path: s, ...o }) => {
        try {
          (0, import_fs.accessSync)(s, import_fs.constants.R_OK);
        } catch (i) {
          let l = i && typeof i === "object" && "code" in i ? i.code : void 0;
          if (l === "ENOENT" || l === "ENOTDIR") return null;
          return { stdout: null, unreadReason: i instanceof Error ? i.message : String(i), ...typeof l === "string" && { unreadErrno: l }, ...o };
        }
        let a = await m(import_chunk_dqanqm2x.jQi, [...import_chunk_dqanqm2x.VFl, s], import_chunk_dqanqm2x.pHs);
        if (!p(a)) return { stdout: null, ...w(a), ...o };
        if (a.status === "ok") return { stdout: a.stdout, ...o };
        let c = await m(import_chunk_dqanqm2x.jQi, [...import_chunk_dqanqm2x.KFl, s]);
        if (!p(c)) {
          let { unreadReason: i, unreadCause: l } = w(c), _ = l === "timeout" || l === "killed" || l === "spawn_busy" ? "lint_unfinished" : l;
          return { stdout: null, unreadReason: `plutil rejected the conversion, and in the check that follows ${i}`, unreadCause: _, ...o };
        }
        if (c.status === "ok") return { stdout: null, unreadReason: "it holds a value plutil cannot convert to JSON (a date or data value)", unreadCause: "unconvertible", ...o };
        let d = v(s);
        if (d !== null) {
          if (d.code === "ENOENT" || d.code === "ENOTDIR") return null;
          return { stdout: null, unreadReason: d.message, ...typeof d.code === "string" && { unreadErrno: d.code }, ...o };
        }
        return { stdout: "", ...o };
      }))).filter((s) => s !== null), u = r.findIndex((s) => s.stdout !== null);
      return { plistStdouts: u === -1 ? r : r.slice(0, u + 1), hklmStdout: null, hkcuStdout: null, outcomes: { hklm: null, hkcu: null } };
    }
    if ((0, import_chunk_dqanqm2x.FKn)()) return N((t) => m(import_chunk_dqanqm2x.URt, t, import_chunk_dqanqm2x.pHs), e);
    return { plistStdouts: null, hklmStdout: null, hkcuStdout: null, outcomes: { hklm: null, hkcu: null } };
  })();
}
async function N(e, t) {
  let n = (o) => e(["query", o, "/v", import_chunk_dqanqm2x.LKn]), [r, u] = await Promise.all([n(import_chunk_dqanqm2x.TKt), n(import_chunk_dqanqm2x.EMo)]), s = f(r);
  if (r.status === "ok" && !k(r.stdout)) s.answered = false;
  if (t && !s.answered && r.status === "exited" && r.stderr.trim() !== "") s.answered = await b(e);
  return { plistStdouts: null, hklmStdout: r.status === "ok" ? r.stdout : null, ...g(r) && { hklmUnreadReason: `the value exceeds ${import_chunk_dqanqm2x.pHs / 1048576} MiB` }, hkcuStdout: u.status === "ok" ? u.stdout : null, outcomes: { hklm: s, hkcu: f(u) } };
}
function k(e) {
  return new RegExp(`^[ \\t]+${import_chunk_dqanqm2x.LKn}[ \\t]+REG_`, "im").test(e);
}
async function b(e) {
  let t = await e(["query", import_chunk_dqanqm2x.TKt]);
  if (t.status === "ok" && t.stdout !== "") return !k(t.stdout);
  let n = import_chunk_dqanqm2x.TKt.lastIndexOf("\\"), r = await e(["query", import_chunk_dqanqm2x.TKt.slice(0, n)]), u = import_chunk_dqanqm2x.TKt.slice(n).toLowerCase(), s = r.stdout.split(/\r?\n/).filter((o) => o.startsWith("HKEY_"));
  return r.status === "ok" && s.length > 0 && !s.some((o) => o.trimEnd().toLowerCase().endsWith(u));
}
function QJi() {
  S.start();
}
function ZJi() {
  return S.promise;
}
