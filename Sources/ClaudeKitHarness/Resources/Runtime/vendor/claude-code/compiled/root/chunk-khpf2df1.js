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
var chunk_khpf2df1_exports = {};
__export(chunk_khpf2df1_exports, {
  bVo: () => bVo,
  wVo: () => wVo
});
module.exports = __toCommonJS(chunk_khpf2df1_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_va7s0d6d = require("/$bunfs/root/chunk-va7s0d6d.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_promises = require("fs/promises");
var x = 10, O = 10, k = 50, m = 64, h = 262144, A = 8192;
function R(e, s) {
  let r = (0, import_chunk_va7s0d6d.nSn)(s);
  return r === void 0 ? void 0 : { pid: e, ppid: r.ppid, session: r.session, starttime: r.starttime, hasExited: (0, import_chunk_va7s0d6d.AF)((0, import_chunk_va7s0d6d.R2)(s)) };
}
function T(e, s, r) {
  let n = /* @__PURE__ */ new Set([0, s.session, ...r]);
  for (let a of e) if (a.starttime <= s.starttime || !a.hasExited && a.ppid === s.pid && a.pid === a.session) n.add(a.session);
  let o = /* @__PURE__ */ new Set();
  for (let a of e) if (!a.hasExited && !n.has(a.session)) o.add(a.session);
  return o;
}
var N = "0A";
function bVo(e) {
  let s = [];
  for (let r of e.split(`
`)) {
    let [, n, , o, , , , , , a] = r.trim().split(/\s+/);
    if (o !== N || n === void 0 || a === void 0) continue;
    let c = Number.parseInt(n.slice(n.lastIndexOf(":") + 1), 16);
    if (!Number.isNaN(c)) s.push({ port: c, inode: a });
  }
  return s;
}
function L(e, s, r) {
  return new Set(e.filter(({ port: n, inode: o }) => !s.has(n) && !r.has(o)).map(({ port: n }) => n));
}
class d extends Error {
}
function f(e) {
  let s = (0, import_chunk_jv7av99m.w)(e);
  return s === "ENOENT" || s === "ESRCH";
}
async function I(e = 1 / 0, s = "/proc") {
  let r = (await (0, import_promises.readdir)(s)).filter((o) => /^[0-9]+$/.test(o)), n = [];
  for (let o = 0; o < r.length; o += m) {
    if (performance.now() > e) throw new d("the pass over /proc ran out of time");
    let a = await Promise.all(r.slice(o, o + m).map(async (c) => {
      let u;
      try {
        u = await (0, import_promises.readFile)(`${s}/${c}/stat`, "utf8");
      } catch (l) {
        if (f(l)) return [];
        throw l;
      }
      let p = R(Number(c), u);
      if (p === void 0) throw new d("a stat line could not be parsed");
      return [p];
    }));
    n.push(...a.flat());
  }
  return n;
}
async function g(e) {
  let s = await (0, import_promises.open)(e, "r");
  try {
    let r = Buffer.allocUnsafe(A), n = 0;
    for (; ; ) {
      if (n === r.length) {
        let a = Buffer.allocUnsafe(Math.min(4 * r.length, h + 1));
        r.copy(a, 0, 0, n), r = a;
      }
      let { bytesRead: o } = await s.read(r, n, r.length - n, null);
      if (o === 0) return r.toString("latin1", 0, n);
      if (n += o, n > h) throw new d("a socket table is too long to count from");
    }
  } finally {
    await s.close();
  }
}
async function B(e = "/proc") {
  let s = bVo(await g(`${e}/net/tcp`)), r;
  try {
    r = await g(`${e}/net/tcp6`);
  } catch (n) {
    if (f(n)) return s;
    throw n;
  }
  return [...s, ...bVo(r)];
}
async function M(e = "/proc") {
  let s = await Promise.all((await (0, import_promises.readdir)(`${e}/self/fd`)).map(async (n) => {
    try {
      return await (0, import_promises.readlink)(`${e}/self/fd/${n}`);
    } catch (o) {
      if (f(o)) return "";
      throw o;
    }
  })), r = /* @__PURE__ */ new Set();
  for (let n of s) {
    let o = /^socket:\[([0-9]+)\]$/.exec(n)?.[1];
    if (o !== void 0) r.add(o);
  }
  return r;
}
var F = { readOwnStat: () => (0, import_promises.readFile)("/proc/self/stat", "utf8"), readProcessRows: (e) => I(e), readListeningSockets: () => B(), readOwnSocketInodes: () => M() }, P = "an unexpected error";
class b {
  #r;
  #t = /* @__PURE__ */ new Map();
  #e;
  constructor(e = F) {
    this.#e = e;
  }
  enableCounting() {
    this.reset(), this.#r = Promise.all([this.#s("other_process_sessions", async () => {
      let e = await this.#e.readOwnStat();
      if (Number.parseInt(e, 10) !== process.pid) throw new d("/proc/self/stat names another pid");
      let s = R(process.pid, e);
      if (s === void 0) throw new d("a stat line could not be parsed");
      return s;
    }), this.#s("listening_ports", async () => new Set((await this.#e.readListeningSockets()).map(({ port: e }) => e)))]).then(([e, s]) => ({ self: e, ports: s }), () => ({ self: void 0, ports: void 0 }));
  }
  async look() {
    let e = await this.#r;
    if (e === void 0) return;
    let { self: s, ports: r } = e, [n, o] = await Promise.all([s === void 0 ? void 0 : this.#s("other_process_sessions", async () => {
      if (s.pid === 1) throw new d("process 1 cannot tell its own children from orphans");
      let a = await this.#e.readProcessRows(performance.now() + k);
      if (!a.some(({ pid: c }) => c === s.pid)) throw new d("/proc does not list this process");
      return a;
    }), r === void 0 ? void 0 : this.#s("listening_ports", async () => {
      let a = await this.#e.readListeningSockets(), c = await this.#e.readOwnSocketInodes();
      return L(a, r, c).size;
    })]);
    return { ...s !== void 0 && n !== void 0 && { self: s, rows: n }, ...o !== void 0 && { newPorts: o } };
  }
  count(e, s) {
    return { ...e?.self !== void 0 && e.rows !== void 0 && { other_process_sessions: Math.min(T(e.rows, e.self, s).size, x) }, ...e?.newPorts !== void 0 && { listening_ports: Math.min(e.newPorts, O) } };
  }
  reset() {
    this.#r = void 0, this.#t.clear();
  }
  async #s(e, s) {
    let r;
    try {
      return await s();
    } catch (n) {
      if (r = n instanceof d ? n.message : (0, import_chunk_jv7av99m.w)(n) ?? P, r === P && this.#t.get(e) !== r) (0, import_chunk_k449cc64.i)(n);
      return;
    } finally {
      if (this.#t.get(e) !== r) this.#t.set(e, r), (0, import_chunk_w578pjby.t)(r === void 0 ? `mcp serve: ${e} is on the CPU report again` : `mcp serve: ${e} is left off the CPU report: ${r}`, { level: r === void 0 ? "info" : "warn" });
    }
  }
}
var wVo = (0, import_chunk_t57w17k7.de)(new b(), (e) => e.reset());
