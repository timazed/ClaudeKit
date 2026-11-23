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
var chunk_k1bhehpr_exports = {};
__export(chunk_k1bhehpr_exports, {
  B2o: () => B2o,
  F8l: () => F8l,
  NEn: () => NEn,
  NJn: () => NJn,
  U2o: () => U2o,
  W2o: () => W2o
});
module.exports = __toCommonJS(chunk_k1bhehpr_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_8jyyffk1 = require("/$bunfs/root/chunk-8jyyffk1.js");
var import_crypto = require("crypto");
function NEn(e, r) {
  if (!(0, import_chunk_wddxyb00.vs)(r)) return (0, import_chunk_jv7av99m.d)(e);
  return (0, import_chunk_w578pjby.t)(`bash spawn failure detail: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), "shell command failed (detail withheld on this connection)";
}
var H = 262144, NJn = "Not run: this command was sent for a different folder than the one the session is in now. Ask Claude to run it instead.";
async function U2o(e) {
  if (!(0, import_chunk_sjqze7qg.qFt)()) return;
  let r = await (0, import_chunk_sjqze7qg.hDn)({ signal: e, caller: import_chunk_sjqze7qg.Bbi, batch: (0, import_crypto.randomUUID)() });
  if (r === "go") return;
  return r === "stopped" ? "Not run: this command was stopped before it started. Send it again if you still want it." : r.refused;
}
var b = 6e5, B2o = "[interrupted]", y = "[timed out after 10 minutes]", U = "[stopped: the command printed more than 100 MB]";
async function F8l(e) {
  let r = e.cwd ?? (0, import_chunk_18rsj2ts.pe)(), s = await U2o(e.abortSignal);
  if (s !== void 0) return { outputText: `<${import_chunk_k449cc64.VM}>${(0, import_chunk_hr2stdq7.sn)(s)}</${import_chunk_k449cc64.VM}>`, exitCode: 1 };
  let { command: o } = e, a = e.maxOutputChars ?? H, { file: c, args: n } = (0, import_chunk_8jyyffk1.met)() === "powershell" ? { file: "pwsh", args: ["-NoProfile", "-Command", o] } : { file: "/bin/sh", args: ["-c", o] }, i = new AbortController(), p = setTimeout((M) => M.abort(), b + 2e3, i), f = AbortSignal.any(e.abortSignal === void 0 ? [i.signal] : [e.abortSignal, i.signal]), { stdout: g, stderr: O, code: _, exitCode: F, timedOut: A, maxBufferExceeded: R, error: h } = await (0, import_chunk_7fsmgfxx.ut)(c, n, { abortSignal: f, timeout: b, cwd: r, env: await (0, import_chunk_sjqze7qg.uQa)(e.session.host, (0, import_chunk_r6r2wdsw.Hs)()), extendEnv: false, preserveOutputOnError: true, withoutControllingTerminal: true, abortEndsProcessGroup: true, waitForExitAfterKill: true }).finally(() => clearTimeout(p)), l = A || i.signal.aborted ? "timeout" : e.abortSignal?.aborted === true ? "interrupt" : R ? "output_limit" : void 0, S = h && l === void 0 && !h.startsWith(`Command failed with exit code ${_}`) ? h : "";
  if (S) (0, import_chunk_cqa9hrgx.m)("input_remote_bash", "spawn_failed");
  else if (l === "timeout") (0, import_chunk_cqa9hrgx.m)("input_remote_bash", "timed_out");
  else if (l === "output_limit") (0, import_chunk_cqa9hrgx.m)("input_remote_bash", "output_limit");
  else (0, import_chunk_cqa9hrgx.u)("input_remote_bash", { interrupted: l === "interrupt" });
  let B = S ? NEn(S, e.session) : "", D = l === "timeout" ? y : l === "interrupt" ? B2o : l === "output_limit" ? U : "", w = F ?? (l === "interrupt" ? 130 : l === "timeout" ? 124 : _);
  return { outputText: `<${import_chunk_k449cc64.NK}>${T(g, a, "")}</${import_chunk_k449cc64.NK}><${import_chunk_k449cc64.VM}>${T(O || B, a, D)}</${import_chunk_k449cc64.VM}><${import_chunk_k449cc64.fyn}>${w}</${import_chunk_k449cc64.fyn}>`, exitCode: w };
}
function T(e, r, s) {
  let o = s === "" ? "" : `
${s}`, a = r - o.length, c = (0, import_chunk_7cfjrnwy.ee)(e, Math.max(a, 0)), n = e.length - c.length, i = W2o(c), p = (0, import_chunk_hr2stdq7.sn)(i), f = n === 0 && p.length <= a ? p : (0, import_chunk_hr2stdq7.sn)((0, import_chunk_hr2stdq7.fVn)(i, a, (g) => P(g + n)));
  return `${f}${f === "" ? s : o}`;
}
function P(e) {
  return `
[output truncated: ${e.toLocaleString("en-US")} more characters not shown]`;
}
var C = /\x1b\[[0-9;:]*m/g;
function I(e) {
  let r = [], s = e.slice(2, -1).split(";");
  for (let o = 0; o < s.length; o++) {
    let a = s[o], c = (0, import_chunk_7cfjrnwy.nt)(a, ":"), n = c === "" ? 0 : Number(c);
    if (n === 38 || n === 48 || n === 58) {
      let i = a.includes(":") ? a.split(":") : s[o + 1] === "5" ? s.slice(o, o + 3) : s[o + 1] === "2" ? s.slice(o, o + 5) : [a];
      if (!a.includes(":")) o += i.length - 1;
      if (n !== 38) continue;
      if (i[1] === "5" && i.length === 3 && x(i[2])) r.push("38", "5", i[2]);
      else if (i[1] === "2") {
        let p = i.slice(-3);
        if ((i.length === 5 || i.length === 6) && p.every(x)) r.push("38", "2", ...p);
      }
      continue;
    }
    if (n === 0 || n === 1 || n === 2 || n === 3 || n === 4 || n === 9 || n >= 21 && n <= 24 || n === 29 || n >= 30 && n <= 37 || n === 39 || n >= 90 && n <= 97) r.push(String(n));
  }
  return r.length === 0 ? "" : `\x1B[${r.join(";")}m`;
}
function W2o(e, r = {}) {
  if (r.keepColors !== true) return E(e);
  let s = e.match(C) ?? [];
  return e.split(C).map((o, a) => E(o) + (s[a] === void 0 ? "" : I(s[a]))).join("");
}
function E(e) {
  return (0, import_chunk_tp3c5q2s.XJe)((0, import_chunk_7cfjrnwy.qy)(e)).replace(/\r\n?/g, `
`).replace(/(?![\t\n])[\p{Cc}\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\u206A-\u206F\u061C\u034F\u180E\u115F\u1160\u3164\uFFA0\uFEFF\uFFF9-\uFFFB\u{E0000}-\u{E007F}]/gu, "");
}
function x(e) {
  return e !== void 0 && /^\d{1,3}$/.test(e);
}
