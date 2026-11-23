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
var chunk_98wrm4pa_exports = {};
__export(chunk_98wrm4pa_exports, {
  L2r: () => L2r,
  x6s: () => x6s
});
module.exports = __toCommonJS(chunk_98wrm4pa_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_qv6h6wr9 = require("/$bunfs/root/chunk-qv6h6wr9.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_cy6vm0hs = require("/$bunfs/root/chunk-cy6vm0hs.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_path = require("path");
var p = (0, import_chunk_839h1d5e.Co)(() => (0, import_chunk_k449cc64.Noa)(/* @__PURE__ */ new Date()));
function h() {
  return (0, import_path.join)(import_chunk_k449cc64.hyn.errors(), p() + ".jsonl");
}
function L2r(e) {
  return (0, import_path.join)(import_chunk_k449cc64.hyn.mcpLogs(e), p() + ".jsonl");
}
function S(e) {
  let r = (0, import_chunk_w578pjby.fWl)(e);
  return { write(o) {
    r.write((0, import_chunk_w578pjby._)(o) + `
`);
  }, flush: r.flush, dispose: r.dispose };
}
function v() {
}
class m {
  writers = /* @__PURE__ */ new Map();
  pendingWrites = (0, import_chunk_gjzwg6ck.GS)();
  writerFor(e) {
    let r = this.writers.get(e);
    if (!r) {
      let o = (0, import_path.dirname)(e), n = false;
      r = S({ writeFn: (a) => {
        this.pendingWrites.run(e, async () => {
          try {
            await k(o, e, a);
          } catch (g) {
            if (!n) n = true, (0, import_chunk_w578pjby.t)(`Dropping log batch for ${e}: ${g instanceof Error ? g.message : String(g)}`);
          }
        });
      }, flushIntervalMs: 1e3, maxBufferSize: 50 }), this.writers.set(e, r), (0, import_chunk_w578pjby.Ct)(async () => {
        r?.dispose(), await this.pendingWrites.settle();
      }), (0, import_chunk_w578pjby.oA)(this.flushBeforeExit);
    }
    return r;
  }
  async flush() {
    for (let e of this.writers.values()) e.flush();
    await this.pendingWrites.settle();
  }
  flushBeforeExit = () => this.flush();
  async reset() {
    for (let e of this.writers.values()) e.dispose();
    await this.pendingWrites.settle(), this.writers.clear(), this.pendingWrites.clear();
  }
}
async function k(e, r, o) {
  let n = (0, import_chunk_w578pjby.le)();
  try {
    await n.appendFile(r, o);
  } catch {
    await n.mkdir(e).catch(v), await n.appendFile(r, o);
  }
}
function y(e, r, o) {
  return;
}
function M(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let r = e;
    if (typeof r.message === "string") return r.message;
    if (typeof r.error === "object" && r.error && "message" in r.error && typeof r.error.message === "string") return r.error.message;
  }
  return;
}
function b(e, r) {
  (0, import_chunk_xfr8663h.wEl)(r), (0, import_chunk_qv6h6wr9.ZBe)(r);
  let o = (0, import_chunk_jv7av99m.u5n)(r), n = (0, import_chunk_2zeyvjwb.Ree)(), a = "";
  if (import_chunk_3jjr3wje.bn.isAxiosError(r) && r.config?.url) {
    let g = [`url=${r.config.url}`];
    if (r.response?.status !== void 0) g.push(`status=${r.response.status}`);
    let l = M(r.response?.data);
    if (l && !n) g.push(`body=${l}`);
    a = `[${g.join(",")}] `;
  }
  if ((0, import_chunk_w578pjby.t)(`${r.name}: ${a}${o}`, { level: "error" }), !n) y(e, h(), { error: `${a}${o}` });
}
function L(e, r, o) {
  (0, import_chunk_w578pjby.t)(`MCP server "${r}" ${o}`, { level: "error" });
  let n = L2r(r), a = o instanceof Error ? (0, import_chunk_jv7av99m.u5n)(o) : String(o), g = { error: (0, import_chunk_sah8dzn4.As)(a), timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: (0, import_chunk_f9x2f6cx.W)(), cwd: (0, import_chunk_k449cc64.B0o)() };
  e.writerFor(n).write(g);
}
function d() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_MCP_DEBUG_LOG_FILES === true && (0, import_chunk_6e68m1dj.hn)();
}
function I(e, r, o) {
  if ((0, import_chunk_w578pjby.t)(`MCP server "${r}": ${o}`), d()) return;
  let n = L2r(r), a = { debug: (0, import_chunk_sah8dzn4.As)(o), timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: (0, import_chunk_f9x2f6cx.W)(), cwd: (0, import_chunk_k449cc64.B0o)() };
  e.writerFor(n).write(a);
}
var f = "Masking secrets threw, so the text was replaced with a placeholder";
class w {
  running = false;
  report(e) {
    if (this.running) return;
    this.running = true;
    try {
      let r = (0, import_chunk_szvrpg0x.Wa)(), o = `redact_masking_threw:${(0, import_chunk_jv7av99m.D1e)(e)}`;
      if (!r.has(`${o}:on`) && r.claim(`${o}:${F() ? "on" : "off"}`)) (0, import_chunk_k449cc64.i)(P(e));
    } finally {
      this.running = false;
    }
  }
}
function F() {
  try {
    return (0, import_chunk_cy6vm0hs.gEo)();
  } catch {
    return false;
  }
}
function P(e) {
  try {
    if (!(e instanceof Error && import_chunk_jv7av99m.CFr.has(e.name))) return c();
    let r = (0, import_chunk_jv7av99m.Ye)((0, import_chunk_7fsmgfxx.k0s)(e, f), f);
    return r.message === f && (0, import_chunk_jv7av99m.QB)(r) === f ? r : c();
  } catch {
    return c();
  }
}
function c() {
  return (0, import_chunk_jv7av99m.Ye)(Error("Masking secrets threw, so the text was replaced with a placeholder"), f);
}
function x6s() {
  let e = new w();
  (0, import_chunk_sah8dzn4._Wl)((o) => e.report(o)), (0, import_chunk_k449cc64.Foa)(C(new m()));
  let r = import_chunk_k449cc64.rPt.droppedBeforeSink;
  (0, import_chunk_w578pjby.t)(r === 0 ? "Error log sink initialized" : `Error log sink initialized; ${r} events logged before it attached were dropped`);
}
function C(e) {
  return { logError: (r) => b(e, r), logMCPError: (r, o) => L(e, r, o), logMCPDebug: (r, o) => I(e, r, o), keepsMCPDebug: () => !d() || (0, import_chunk_w578pjby.Koa)("debug") };
}
