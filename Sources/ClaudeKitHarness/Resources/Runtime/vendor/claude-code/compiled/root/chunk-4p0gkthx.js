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
var chunk_4p0gkthx_exports = {};
__export(chunk_4p0gkthx_exports, {
  Ajr: () => Ajr,
  JGs: () => JGs,
  Rjr: () => Rjr,
  SSa: () => SSa,
  XGs: () => XGs,
  YGs: () => YGs,
  _Sa: () => _Sa,
  bSa: () => bSa,
  gSa: () => gSa,
  hSa: () => hSa,
  kkn: () => kkn,
  mSa: () => mSa,
  pSa: () => pSa,
  qGs: () => qGs,
  wSa: () => wSa,
  xjr: () => xjr,
  ySa: () => ySa
});
module.exports = __toCommonJS(chunk_4p0gkthx_exports);
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_yrh4vxq4 = require("/$bunfs/root/chunk-yrh4vxq4.js");
var import_chunk_4crrw52w = require("/$bunfs/root/chunk-4crrw52w.js");
var E = import_chunk_0f2gasyz.Tw + String.fromCharCode(import_chunk_0f2gasyz.Wke.APC), w = `${E}G`, m = 4096, _ = 1109742, qGs = String.fromCodePoint(_), kkn = 256, c = 4294967295, R = 1e4, p = { mask: 255, redShift: 16, greenShift: 8 }, A = m / 4 * 3;
function s(e, t) {
  if (!Number.isInteger(e) || e < 1 || e > t) throw TypeError("kitty graphics: an id, cell count or pixel size must be a positive integer within its range");
}
function P(e) {
  if (typeof e !== "string" || !/^[A-Za-z0-9+/]*={0,2}$/.test(e)) throw TypeError("kitty graphics: payload must be standard base64 (A-Z a-z 0-9 + / =)");
}
function q(e) {
  if (!(typeof e === "string" && e !== "" && !e.includes("\0") && Buffer.byteLength(e, "utf8") <= A)) throw TypeError("kitty graphics: a file path or shared-memory name must be a non-empty string of at most 3072 bytes, no NUL");
}
var x = (e) => Buffer.from(e, "utf8").toString("base64");
function C(e) {
  s(e, c);
  let t = e < kkn, r = e >>> p.redShift & p.mask, n = e >>> p.greenShift & p.mask, i = e & p.mask;
  return (0, import_chunk_0f2gasyz.Jl)(t ? `38;5;${e}m` : `38;2;${r};${n};${i}m`);
}
var b = (e) => import_chunk_4crrw52w.Ume.slice(0, e).map((t) => String.fromCodePoint(t));
function pSa(e, t, r) {
  s(t, import_chunk_4crrw52w.Ume.length), s(r, import_chunk_4crrw52w.Ume.length);
  let n = C(e), i = b(t);
  return b(r).map((l) => n + i.map((d) => qGs + l + d).join("") + import_chunk_yrh4vxq4.IHn).join(`
`);
}
function a(e, t) {
  let r = t === void 0 ? "" : `;${t}`;
  return `${w}${e}${r}${import_chunk_vw137skj.A5e}`;
}
var K = { png: "f=100", rgba: "f=32", rgb: "f=24" }, Q = { file: "t=f", shm: "t=s" };
function mSa(e) {
  let { id: t, source: r, columns: n, rows: i } = e;
  if (s(t, c), s(n, import_chunk_4crrw52w.Ume.length), s(i, import_chunk_4crrw52w.Ume.length), r.format !== "png") s(r.width, R), s(r.height, R);
  let d = r.format !== "png" ? `,s=${r.width},v=${r.height}` : "", y = `${K[r.format]}${d}`, f = `i=${t},c=${n},r=${i}`;
  if ("medium" in r) {
    q(r.name);
    let o = Q[r.medium];
    return a(`a=T,U=1,q=1,${y},${o},${f}`, x(r.name));
  }
  P(r.base64);
  let h = `a=T,U=1,q=2,${y},${f}`, { base64: u } = r;
  if (u.length <= m) return a(h, u);
  let T = [];
  for (let o = 0; o < u.length; o += m) {
    let g = o + m >= u.length ? "m=0" : "m=1", v = o === 0 ? `${h},${g}` : `${g},q=2`;
    T.push(a(v, u.slice(o, o + m)));
  }
  return T.join("");
}
function hSa(e) {
  return s(e, c), a(`a=d,d=I,i=${e},q=2`);
}
function I(e) {
  return s(e, c), a(`i=${e},s=1,v=1,a=q,t=d,f=24`, "AAAA");
}
function gSa(e, t) {
  return s(e, c), q(t), a(`i=${e},s=1,v=1,a=q,t=f,f=32`, x(t));
}
function YGs(e) {
  return { request: (0, import_chunk_0f2gasyz.Jl)(`?${e}$p`), match: (t) => t.type === "decrpm" && t.mode === e };
}
function _Sa() {
  return { request: (0, import_chunk_0f2gasyz.Jl)("?u"), match: (e) => e.type === "kittyKeyboard" };
}
function ySa() {
  return { request: (0, import_chunk_0f2gasyz.Jl)("?6n"), match: (e) => e.type === "cursorPosition" };
}
function Ajr(e, t = "") {
  return { request: e + (0, import_chunk_0f2gasyz.Jl)("6n") + t, match: (r) => r.type === "cursorReport" };
}
var Rjr = Ajr("");
function SSa(e) {
  return { request: (0, import_chunk_vw137skj.PT)(e, "?"), match: (t) => t.type === "osc" && t.code === e };
}
function xjr() {
  return { request: (0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.PROGRAM_STATUS, "?"), match: (e) => e.type === "osc" && e.code === import_chunk_vw137skj.__.PROGRAM_STATUS && e.data.startsWith("?") };
}
function bSa() {
  return { request: (0, import_chunk_0f2gasyz.Jl)(">0q"), match: (e) => e.type === "xtversion" };
}
function XGs() {
  return { request: (0, import_chunk_0f2gasyz.Jl)("16t"), match: (e) => e.type === "cellSize" };
}
var k = 31;
function wSa() {
  return { request: I(k), match: (e) => e.type === "kittyGraphics" && e.id === k };
}
var S = (0, import_chunk_0f2gasyz.Jl)("c");
class JGs {
  stdout;
  queue = [];
  isInputAttached = false;
  isReplyLate = false;
  repliesDueBy = 0;
  quickestReplyMs = Number.POSITIVE_INFINITY;
  flushesAnswered = 0;
  gathered;
  themeChangeSubscribers = /* @__PURE__ */ new Set();
  constructor(e) {
    this.stdout = e;
  }
  setInputAttached(e) {
    if (this.isInputAttached = e, !e) return;
    for (let t of this.queue) if (t.kind !== "barrier" && !t.written) this.write(t);
  }
  owed() {
    let e = this.isReplyLate ? 1 : 0;
    for (let t of this.queue) if (t.kind === "barrier" || t.kind === "sentinel" && t.written) e++;
    return e;
  }
  awaits(e) {
    return this.queue.some((t) => t.kind === "query" && t.match === e.match);
  }
  subscribeThemeChange(e) {
    return this.themeChangeSubscribers.add(e), () => {
      this.themeChangeSubscribers.delete(e);
    };
  }
  send(e) {
    return new Promise((t) => {
      this.enqueue({ kind: "query", request: e.request, written: false, match: e.match, resolve: (r) => t(r) });
    });
  }
  flush() {
    return new Promise((e) => {
      this.enqueue({ kind: "sentinel", request: S, written: false, resolve: e });
    });
  }
  async sendTogether(e, t) {
    if (!this.isInputAttached) return e.map(() => {
      return;
    });
    this.gathered = "";
    let r = Promise.all(e.map((i) => this.send(i)));
    this.flush();
    let n = this.gathered;
    this.gathered = void 0;
    try {
      t(n);
    } catch (i) {
      throw this.resync({ probe: false }), i;
    }
    return r;
  }
  cancel(e) {
    let t = this.queue.findIndex((n) => n.kind === "query" && n.match === e.match);
    if (t === -1) return;
    let [r] = this.queue.splice(t, 1);
    if (r?.kind === "query") r.resolve(void 0);
  }
  resync({ probe: e }) {
    this.isReplyLate = false;
    for (let t of this.queue.splice(0)) if (t.kind === "query") t.resolve(void 0);
    else if (t.kind === "sentinel") t.resolve(false);
    if (e && this.isInputAttached) this.queue.push({ kind: "barrier" }), this.stdout.write(S);
  }
  stopWaiting() {
    this.resync({ probe: false }), this.isReplyLate = true;
  }
  onResponse(e) {
    if (e.type === "themeNotify") {
      for (let n of this.themeChangeSubscribers) n(e.dark);
      return true;
    }
    if (this.isReplyLate &&= e.type !== "da1", this.queue[0]?.kind === "barrier") {
      if (e.type === "da1") this.queue.shift();
      return true;
    }
    let t = this.queue.findIndex((n) => n.kind === "query" && n.match(e));
    if (t !== -1) {
      let [n] = this.queue.splice(t, 1);
      if (n?.kind === "query") n.resolve(e);
      return true;
    }
    if (e.type !== "da1") return false;
    let r = this.queue.findIndex((n) => n.kind === "sentinel");
    if (r === -1) return false;
    for (let n of this.queue.splice(0, r + 1)) if (n.kind === "query") n.resolve(void 0);
    else if (n.kind === "sentinel") this.quickestReplyMs = Math.min(this.quickestReplyMs, performance.now() - (n.writtenAt ?? Number.NEGATIVE_INFINITY)), this.flushesAnswered++, n.resolve(true);
    return true;
  }
  enqueue(e) {
    if (this.queue.push(e), this.isInputAttached) this.write(e);
  }
  write(e) {
    if (e.written = true, e.kind === "sentinel") e.writtenAt = performance.now();
    if (this.gathered === void 0) this.stdout.write(e.request);
    else this.gathered += e.request;
  }
}
