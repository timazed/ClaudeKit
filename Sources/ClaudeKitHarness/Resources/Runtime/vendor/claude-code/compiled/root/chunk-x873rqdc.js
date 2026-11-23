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
var chunk_x873rqdc_exports = {};
__export(chunk_x873rqdc_exports, {
  UGo: () => UGo,
  Xqs: () => Xqs,
  kYl: () => kYl,
  wYl: () => wYl
});
module.exports = __toCommonJS(chunk_x873rqdc_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function Xqs(e) {
  switch (e.kind) {
    case "stdout-reader":
      return { authToken: void 0, tunnel: void 0 };
    case "bearer-minter":
      return { authToken: e.authToken, tunnel: void 0 };
    case "tool-container":
    case "runner":
      return { authToken: void 0, tunnel: e.tunnel };
  }
}
var f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ runner: (0, import_chunk_adx6804h.c)({ pid: (0, import_chunk_adx6804h.E)().int().positive(), proc_start: (0, import_chunk_adx6804h.n)().min(1), token_fd: (0, import_chunk_adx6804h.E)().int().min(3).optional().catch(void 0) }).optional() }));
async function wYl({ transport: e, port: r, line: a }) {
  let { tokenSocket: d } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bs612fn6.js"))), t = await UGo({ transport: e, port: r, line: a });
  if ("refusal" in t || t.named === void 0) return "refusal" in t ? t : { kind: "tool-container", tunnel: t.tunnel };
  let { tunnel: i, named: o } = t, u = { pid: o.pid, procStart: o.proc_start };
  if (import_chunk_c203g5kd.s.CCR_AGENT_PROXY_ENABLED) return { refusal: "--session-tunnel does not serve a runner whose session routes git through the agent proxy: it cannot start that relay" };
  let { isRunnerSeen: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0wt5sj5q.js")));
  if (!await l(u)) return { refusal: `--session-tunnel cannot see the runner that started it (process ${u.pid}), so it could not tell when that runner is gone` };
  return { kind: "runner", tunnel: i, runner: u, tokenFd: d(o.token_fd) };
}
async function UGo({ transport: e, port: r, line: a }) {
  let { parseSessionTunnelEnvelope: d, sessionTunnelRefusal: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bs612fn6.js"))), i = d(a), o = t(e, r, i);
  if (o !== void 0 || i === void 0) return { refusal: `--session-tunnel ${o ?? "needs an envelope on standard input"}` };
  let u = m(a);
  if (u === "unreadable") return { refusal: '--session-tunnel was handed a "runner" that is not a "pid" and its "proc_start"' };
  return { tunnel: i, named: u };
}
function m(e) {
  if (e === void 0) return;
  try {
    let r = f().safeParse((0, import_chunk_w578pjby.te)(e));
    return r.success ? r.data.runner : "unreadable";
  } catch {
    return "unreadable";
  }
}
function kYl(e) {
  let r = import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;
  if (import_chunk_nr0e9cdy.zb.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN"), e !== void 0) return e;
  return r === void 0 ? { kind: "stdout-reader" } : { kind: "bearer-minter", authToken: r };
}
