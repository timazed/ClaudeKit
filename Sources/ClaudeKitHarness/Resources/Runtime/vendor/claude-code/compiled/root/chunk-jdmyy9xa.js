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
var chunk_jdmyy9xa_exports = {};
__export(chunk_jdmyy9xa_exports, {
  BOOL: () => H,
  FLASH_SPACING: () => Kt,
  INT: () => C,
  SHADER_LIMITS: () => D,
  checkShader: () => Je,
  compileShader: () => lt,
  costShader: () => et,
  default: () => pt,
  emitShader: () => Ls,
  refusedShaderReport: () => ht,
  shaderModulesOf: () => import_chunk_ek71s4w5.myl,
  shaderReportOf: () => Gs,
  shaderSitesOf: () => import_chunk_ek71s4w5.P$i,
  shortestFloat: () => ne,
  typeOfInput: () => Ze,
  typeOfOp: () => Me
});
module.exports = __toCommonJS(chunk_jdmyy9xa_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_6sjp0rab = require("/$bunfs/root/chunk-6sjp0rab.js");
var import_chunk_f9mxtmjz = require("/$bunfs/root/chunk-f9mxtmjz.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_sps8tde9 = require("/$bunfs/root/chunk-sps8tde9.js");
var import_chunk_ek71s4w5 = require("/$bunfs/root/chunk-ek71s4w5.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var pt = {};
(0, import_chunk_w1d7ygsk.jr)(pt, { BOOL: () => H, FLASH_SPACING: () => Kt, INT: () => C, SHADER_LIMITS: () => D, checkShader: () => Je, compileShader: () => lt, costShader: () => et, default: () => pt, emitShader: () => Ls, refusedShaderReport: () => ht, shaderModulesOf: () => import_chunk_ek71s4w5.myl, shaderReportOf: () => Gs, shaderSitesOf: () => import_chunk_ek71s4w5.P$i, shortestFloat: () => ne, typeOfInput: () => Ze, typeOfOp: () => Me });
var D = { passes: 24, stepsAProgram: 16384, steps: 65536, unrolled: 262144, unrolledInAll: 1048576, handedInAll: 262144, handedAProgram: 4096, turns: 64, depth: 64, carried: 64, vertices: 65536, bytes: 16e7, sourceBytes: 131072, bits: 16384, packedBytes: 65536, jsonChars: 524288, values: 8, pointers: 4, rows: 256, cover: 8, repeat: 24, side: 2048, scale: 2, textures: 16 }, Kt = 12, H = 5, C = 6, j = Math.fround(1e18), z = Math.fround(1e-18), J = Math.fround(1e-30);
var $e = Math.fround(2 * Math.PI);
var Ae = [1512, 945];
var K = [0.5, 2], ke = [{ ops: 15e7, bytes: 2e7 }, { ops: 12e8, bytes: 6e7 }], te = ke[0].ops / ke[0].bytes;
var At = vs(`add sub mul: 2 1
div: 2 4
neg abs sign floor trunc fract: 1 1
sqrt sin cos exp log: 1 4
tanh: 1 12
min max step: 2 1
mod quot: 2 6
rem: 2 8
pow: 2 9
atan: 2 20
mix clamp: 3 1
smoothstep: 3 9
dx dy fwidth: 1 1
lt le eq and or xor shl shr ushr: 2 1
not toInt signed unsigned: 1 1
select: 3 1
dot: 2 1
length normalize: 1 1
input value int pointer swizzle vector at sample size row if loop: 0 0`), [re, _e, ge, Xt, Zt, Qt, Jt, es, ts, ss] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [ns, rs, ft, is, as, os, ls, cs, us, bt, yt, hs] = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], [ps, ds, gt, vt, ms, fs, Fe, de, Ee, me] = [22, 23, 24, 25, 26, 27, 29, 30, 31, 32], [be, ye, Re, je, We, Ie, Ve, ze, kt, Rt] = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42], [ie, It, Ye, Ne] = [43, 44, 45, 46], Ke = new Map(`time 1 pcs: clamp(iTime, 0., 1e8)
dt 1 pcs: clamp(iTimeDelta, 0., 1.)
frame 1 pcs: float(max(iFrame, 0))
fresh 5 pcs: iFresh
turn 1 pcs: float(clamp(iRepeat, 0, TURNS))
still 1 pcs: clamp(iStill, 0., 1.)
size 2 pcs: S
res 2 pcs: R
px 1 pcs: (S.x / R.x)
composer 4 pcs: clamp(iComposer, -4., 5.)
pointerCount 1 pcs: float(clamp(iPointerCount, 0, 4))
pixel 2 cs: P
uv 2 cs: min(P / R, 1.)
point 2 cs: (min(P / R, 1.) * S)
cell 2 cs: floor(P)
vertex 1 p: float(gl_VertexID)
instance 1 p: float(gl_InstanceID)
coord 2 s: clamp(fin(vec2(gl_PointCoord.x, 1. - gl_PointCoord.y)), 0., 1.)
a 4 s: a
b 4 s: b`.split(`
`).map((e) => {
  let [t = "", s, n = "", ...r] = e.split(/:? /);
  return [t, { type: Number(s), stages: n, glsl: r.join(" ") }];
})), bs = ["time", "dt", "frame", "fresh", "pointerCount"], ys = /* @__PURE__ */ new Map([["buffer", "kind scale size float filter wrap repeat once color"], ["table", "kind lanes isInt data"], ["picture", "kind color"], ["shapes", "kind into count instances cover draw blend clear place color"]]), gs = /* @__PURE__ */ new Map([["float", [16, 32]], ["filter", ["linear", "nearest", "mipmap"]], ["wrap", ["clamp", "repeat"]], ["draw", ["triangles", "strip", "points", "lines"]], ["blend", ["over", "add"]], ["once", [true, false]], ["clear", [true, false]], ["isInt", [true, false]]]), Ce = ["", "float", "vec2", "vec3", "vec4", "bool", "int"];
var Mt = `a branch or loop changes more than ${D.carried} values`;
class Xe extends Error {
  at;
  constructor(e, t = {}) {
    super(e);
    this.at = t;
  }
}
function I(e, t, s) {
  if (!e) throw new Xe(t, s);
}
function vs(e) {
  let t = e.split(`
`).flatMap((s) => {
    let [n = "", r = ""] = s.split(": "), [a = 0, i = 0] = r.split(" ").map(Number);
    return n.split(" ").map((l) => ({ name: l, arity: a, ops: i }));
  });
  return new Map(t.map((s, n) => [s.name, { ...s, code: n }]));
}
function oe(e) {
  return e > 4 ? 1 : e;
}
function G(e, t, s) {
  return Number.isInteger(e) && Number(e) >= t && Number(e) <= s;
}
function he(e, t) {
  return Array.isArray(e) && e.length <= t;
}
function Ue(e) {
  return Object.getPrototypeOf(e ?? 0) === Object.prototype;
}
function Ms(e) {
  let t = typeof e === "number" ? Math.fround(e) : NaN;
  return I(Math.abs(t) <= j, "a number is not finite, or is past 1e18"), Math.abs(t) < 11754943508222875e-54 ? 0 : t;
}
function ne(e) {
  for (let t = 1; t < 9; t++) {
    let s = Number(e.toPrecision(t));
    if (Math.fround(s) === e) return s;
  }
  return e;
}
function ws(e) {
  let [t = "", s] = ne(Math.abs(e)).toExponential().split("e"), n = t.replace(".", "").length * Math.log2(10) + 2 * Math.log2(Math.abs(Number(s)) + 1) + 2;
  return Math.min(32, Math.ceil(n));
}
function Be(e) {
  let t = Array.isArray(e) ? e.map(Be) : Ue(e) ? Object.entries(e).flatMap(([s, n]) => n === void 0 ? [] : s.length + 3 + Be(n)) : void 0;
  return t ? t.reduce((s, n) => s + n + 1, t.length > 0 ? 1 : 2) : String(e).length + (typeof e === "string" ? 2 : 0);
}
function Ss(e) {
  let t = new Int32Array(65536).fill(-1), s = 0;
  for (let n = 0; n < e.length; ) {
    let r = 0;
    for (let l = n; l < n + 4; l++) r = Math.imul(r ^ e.charCodeAt(l), 2654435761);
    let a = t[r >>> 16] ?? -1, i = 0;
    t[r >>> 16] = n;
    while (a >= 0 && i < 258 && n + i < e.length && e.charCodeAt(a + i) === e.charCodeAt(n + i)) i++;
    s += i < 4 ? 1 : 3, n += i < 4 ? 1 : i;
  }
  return s;
}
function Me(e, t) {
  let { code: s = 1 / 0, arity: n } = At.get(e) ?? {}, [r = 0, a = r, i = r] = t, l = Math.max(...t), c = t.every((p) => p === r);
  if (s > Ne || t.length !== n) return;
  else if (s === ie) return r === 5 && a === i ? a : void 0;
  else if (s === de || s === Ee || s === me) return c && (r === 1 || r === 6) ? 5 : void 0;
  else if (s === be || s === ye || s === Re || s === Ve) return c && r >= 5 ? r : void 0;
  else if (s === je || s === We || s === Ie) return c && r === 6 ? 6 : void 0;
  else if (s === ze) return r === 1 ? 6 : void 0;
  else if (s === kt || s === Rt) return r === 6 ? 1 : void 0;
  else if (s === It || s === Ye) return c && r <= 4 ? 1 : void 0;
  else if (s <= ge && c && r === 6) return 6;
  return l <= 4 && t.every((p) => p === 1 || p === l) ? l : void 0;
}
function Ze(e) {
  return Ke.get(e)?.type;
}
function se(e, t) {
  return { lo: [e, e, e, e], hi: [t, t, t, t] };
}
function wt(e) {
  let t = e?.float === 32 ? j : 65504;
  return e?.float === void 0 ? se(0, 1) : se(-t, t);
}
class Pt {
  pool;
  values;
  types = [1];
  passes = [];
  text = [];
  ints = /* @__PURE__ */ new Set();
  valuesRead = /* @__PURE__ */ new Set();
  scope = [];
  makers = [];
  bits = 0;
  steps = 0;
  constructor(e, t) {
    this.pool = e;
    this.values = t;
    this.types.push(...Array(e).fill(1));
  }
  number(e) {
    let t = Ms(e);
    return this.bits += ws(t), this.text.push(ne(t)), t;
  }
  pass(e, t) {
    let s = { pass: t }, { kind: n, size: r, data: a = [], isInt: i } = e, l = typeof n === "string" && ys.get(n)?.split(" ") || [], { side: c, vertices: p, repeat: f, scale: u, cover: o, rows: y } = D;
    for (let [x, E] of Object.entries(e)) {
      let k = gs.get(x);
      I(l.includes(x), "this is not a well-formed shader", s), I(k?.includes(E) !== false, `${x} is one of ${k?.join(", ")}`, s), this.text.push(x, k ? String(E) : "");
    }
    let b = (x, E, k) => {
      let A = e[x] ?? k;
      return I(G(A, 1, E), `${x} is a whole number, 1 to ${E}`, s), x in e ? this.number(A) : A;
    }, m = (x, E) => {
      let k = x in e ? this.number(e[x]) : void 0;
      return I(k === void 0 || k > 0 && k <= E, `${x} is above 0 and at most ${E}`, s), k;
    }, [g, v] = he(r, 2) ? r : [], h = b("lanes", 4, n === "table" ? void 0 : 4);
    I(typeof n === "string" && l.length > 0, "this is not a well-formed shader", s), I(r === void 0 || G(g, 1, c) && G(v, 1, c) && !("scale" in e), `size is two whole numbers, 1 to ${c}, and takes no scale beside it`, s), I(he(a, y * h) && a.length % h === 0 && a.length > 0 === (n === "table"), `a table holds 1 to ${y} rows of the same width`, s), I(n !== "shapes" || "cover" in e, `shapes needs a cover: how many windows the draw may cover, up to ${o}`, s), I(n !== "shapes" || l.every((x) => x in e) && G(e.into, -1, D.passes), "this is not a well-formed shader", s);
    let w = Array.from(a, (x) => i === true ? this.int(x) : this.number(x)), S = [0, 1, 2, 3].map((x) => x < h && w.length > 0 ? w.filter((E, k) => k % h === x) : [0]);
    this.bits += i === true ? w.reduce(Tt, 0) : 0, this.passes.push({ kind: n, scale: m("scale", u), size: n === "table" ? [w.length / h, i === true ? 2 : 1] : r === void 0 ? void 0 : [this.number(g), this.number(v)], float: n === "table" || e.float === 32 ? 32 : e.float === 16 ? 16 : void 0, filter: De(e.filter, ["linear", "nearest", "mipmap"]), wrap: De(e.wrap, ["clamp", "repeat"]), repeat: b("repeat", f, 1), once: e.once === true, lanes: h, isInt: i === true, isWhole: w.every(Number.isInteger), data: w, into: n === "shapes" ? this.number(e.into) : t, count: b("count", p, 1), instances: b("instances", p, 1), cover: m("cover", o) ?? 0, draw: De(e.draw, ["strip", "points", "lines"]) ?? "triangles", blend: e.blend === "add" ? "add" : "over", clear: e.clear === true, isDrawnInto: false, held: { lo: S.map((x) => Math.min(...x)), hi: S.map((x) => Math.max(...x)) } });
  }
  int(e) {
    return I(G(e, -2147483648, 2147483647), "an int is past 32 bits"), this.text.push(e), e | 0;
  }
  program(e, t, s) {
    let n = { pass: t, stage: s, body: { nodes: [], out: [], ranAt: 0 }, steps: 0, unrolled: 0, handed: 0, written: 0, inputs: /* @__PURE__ */ new Set(), textures: /* @__PURE__ */ new Set(), bounds: [] };
    this.scope = [], n.body = this.block(e, n, 0, 1);
    let r = n.body.out.map((a) => this.types[a]).join();
    return I(r === (s === "place" ? "5,2,1,4,4" : "4"), s === "place" ? "this is not a well-formed shader" : "a pass gives a vec4", { pass: t }), I(n.textures.size <= D.textures, `a pass reads at most ${D.textures} textures`, { pass: t }), n;
  }
  block(e, t, s, n) {
    let { stepsAProgram: r, carried: a } = D, [i, l] = he(e, 2) ? e : [], c = this.scope.length, p = { ...He(t), step: Math.max(0, t.steps - 1) };
    I(Array.isArray(i) && Array.isArray(l), "this is not a well-formed shader", p), I(s <= D.depth, `branches and loops nest more than ${D.depth} deep`, p), I(l.length <= a, Mt, p), I(i.length <= r, fe(r, "inlined"), p), this.text.push("[");
    let u = { nodes: Array.from(i, (o) => this.step(o, t, s, n)), out: this.operands(l, p), ranAt: 0 };
    return this.scope.length = c, this.text.push("]"), u;
  }
  operands(e, t) {
    return Array.from(e, (s) => {
      let { scope: n, pool: r } = this;
      return I(G(s, 1 - r, n.length), "this is not a well-formed shader", t), this.text.push(s), s > 0 ? n[n.length - s] : 1 - s;
    });
  }
  slots(e, t) {
    let s = this.types.length;
    return I(s + e.length <= D.handedInAll, "branches and loops hand on too many values in all", t), e.forEach((n, r) => {
      this.types.push(n), this.scope.push(s + r);
    }), s;
  }
  copied(e, t, s) {
    let n = /* @__PURE__ */ new Set(), r = (a, i) => {
      let l = [a], c = false;
      for (let p = l.pop(); p !== void 0; p = l.pop()) {
        let [f, u] = [p >> 2, p & 3], o = f < s || n.has(p) ? void 0 : this.makers[f], [y, b] = o?.blocks ?? [];
        if (n.add(p), !o || o.op === "int" || o.op === "size") c ||= p !== i;
        else if (y) {
          let m = f - o.slot, g = b ? [y.out[m], b.out[m]] : [o.args[m]];
          l.push(...g.map((v) => v * 4 + u));
        } else if (o.op === "vector") l.push(o.lanes[u % o.lanes.length]);
        else if (o.op === "swizzle") l.push(o.args[0] * 4 + o.lanes[u]);
      }
      return c;
    };
    return e.out.map((a, i) => [0, 1, 2, 3].slice(0, oe(this.types[a])).reduce((l, c) => l + +r(a * 4 + c, t[i] * 4 + c), 0));
  }
  copiedByArms([e, t], s) {
    let n = this.copied(t, e.out, s);
    return this.copied(e, t.out, s).reduce((r, a, i) => r + Math.min(a, n[i]), 0);
  }
  copiedByTurn({ blocks: [e], args: t, inner: s }) {
    let n = t.map((r, a) => s + 1 + a);
    return this.copied(e, n, s).reduce((r, a) => r + a, 0);
  }
  step(e, t, s, n) {
    let r = { ...He(t), step: t.steps++ }, { stepsAProgram: a, steps: i, unrolled: l, turns: c, carried: p } = D;
    I(he(e, 6), "this is not a well-formed shader", r);
    let [f, ...u] = e, [o, y, b] = u, m = typeof f === "string" ? At.get(f) : void 0, g = this.passes[t.pass], v = G(o, 0, 99) ? this.passes[o] : void 0;
    I(typeof f === "string" && m, "this is not a well-formed shader", r), I(t.steps <= a, fe(a, "inlined"), r), I(++this.steps <= i, fe(i, "in all its passes"), r), this.text.push(f);
    let h = { op: f, code: m.code, type: 0, slot: 0, args: [], input: "", number: 0, lanes: [], blocks: [], count: 1, inner: 0, step: r.step, ops: 0, guards: 0, isExact: true, bound: 0, isEven: true, may: 0 }, w = (A, ...O) => {
      h.args = this.operands(u.slice(A, A + O.length), r), h.number = A > 0 ? Number(o) : 0, this.text.push(h.number), I(`${h.args.map((R) => this.types[R])}` === `${O}`, `${f} is given a value of the wrong width`, r);
    }, S = 1;
    switch (f) {
      case "input": {
        let A = typeof o === "string" ? Ke.get(o) : void 0, O = g.kind === "shapes", R = t.stage === "place" ? "p" : O ? "s" : "c";
        I(typeof o === "string" && A, "this is not a well-formed shader", r), I(A.stages.includes(R), `${o} has no value here`, r), I(o !== "coord" || g.draw === "points", "coord works only with draw: 'points'", r), t.inputs.add(o), this.text.push(o), h.input = o, h.type = A.type, h.ops = oe(A.type) * (A.stages === "s" ? 2 : 1);
        break;
      }
      case "value":
        I(G(o, 0, this.values - 1), "this is not a well-formed shader", r), w(1), this.valuesRead.add(o), t.inputs.add("value"), h.type = h.ops = 1;
        break;
      case "int":
        h.number = this.int(o), h.type = 6, this.ints.add(h.number);
        break;
      case "pointer":
        I(G(o, 0, 1), "this is not a well-formed shader", r), w(1, 1), t.inputs.add("pointer"), [h.type, h.ops, S] = [4, 10, 2];
        break;
      case "swizzle": {
        h.args = this.operands([o], r);
        let A = this.types[h.args[0]];
        h.lanes = u.slice(1).map((O) => (I(A <= 4 && G(O, 0, A - 1), "this is not a well-formed shader", r), O)), I(G(h.lanes.length, 1, 4), "this is not a well-formed shader", r), this.text.push(...h.lanes), [h.type, S] = [h.lanes.length, u.length];
        break;
      }
      case "vector": {
        h.args = this.operands(u.slice(1), r);
        let A = h.args.map((R) => this.types[R]), O = A.reduce((R, T) => R + T, 0);
        I(G(o, 2, 4) && A.every((R) => R <= 4) && (O === o || O === 1), "the parts of a vector do not add up to its width", r), this.text.push(o), h.lanes = h.args.flatMap((R, T) => [0, 1, 2, 3].slice(0, A[T]).map((_) => R * 4 + _)), [h.type, S] = [o, u.length];
        break;
      }
      case "at":
      case "size":
      case "sample":
        I(v?.kind === "buffer" || o === -1 && f === "sample", "this is not a well-formed shader", r), w(1, ...f === "at" ? [2] : f === "size" ? [] : [2, 1]), t.textures.add(h.number), [h.type, S] = [f === "size" ? 2 : 4, h.args.length + 1];
        break;
      case "row":
        I(v?.kind === "table" && (!v.isInt || G(b, 0, v.lanes - 1)), "this is not a well-formed shader", r), w(1, 1), t.textures.add(h.number), h.lanes = v.isInt ? [Number(b)] : [], this.text.push(...h.lanes), [h.type, S] = v.isInt ? [6, 3] : [v.lanes, 2];
        break;
      case "if": {
        let A = this.types.length;
        w(0, 5), h.blocks = [y, b].map((O) => this.block(O, t, s + 1, n)), [h.ops, S] = [1 + this.copiedByArms(h.blocks, A), 3];
        break;
      }
      case "loop": {
        I(G(o, 1, c), `a loop runs at most ${c} turns`, r), I(Array.isArray(y), "this is not a well-formed shader", r), I(y.length <= p, Mt, r), h.args = this.operands(y, r), h.number = o, this.text.push(o);
        let A = this.scope.length;
        h.inner = this.slots([1, ...h.args.map((O) => this.types[O])], r), h.blocks = [this.block(b, t, s + 1, n * o)], this.scope.length = A, t.unrolled += n * o, t.handed += n * o * h.args.length, [h.ops, S] = [(2 + this.copiedByTurn(h)) * o, 3];
        break;
      }
      default: {
        h.args = this.operands(u, r);
        let A = h.args.map((T) => this.types[T]);
        h.type = Me(f, A) ?? 0, I(h.type, `${f} is given values of the wrong width`, r), I(t.stage === "color" || h.code < fs || h.code > Fe, `${f} works on pixels, not vertices`, r);
        let O = Math.max(...[h.type, ...A].map(oe)), R = h.code === ge && h.type === 6;
        h.ops = O * (R ? 4 : h.code === Ne ? 2 : m.ops) + (h.code >= Ye ? 4 : 0), S = u.length;
      }
    }
    let [x, E] = h.blocks.map((A) => A.out.map((O) => this.types[O])), k = f === "loop" ? h.args.map((A) => this.types[A]) : E;
    return I(u.length === S, "this is not a well-formed shader", r), I(`${x}` === `${k}`, "this is not a well-formed shader", r), h.count = x?.length ?? 1, h.slot = this.slots(x ?? [h.type], r), this.makers.length = this.types.length, this.makers.fill(h, h.slot), t.unrolled += n, t.handed += x ? n * h.count : 0, t.written += x?.length ?? +(f === "select"), I(t.written <= D.handedAProgram, `the branches, loops and picks here set more than ${D.handedAProgram} values once every call is inlined: call less, or move repeated work into a for loop`, r), I(t.unrolled <= l, fe(l, "unrolled"), r), h;
  }
}
function Tt(e, t) {
  return e + 33 - Math.clz32(t < 0 ? ~t : t);
}
function De(e, t) {
  return t.find((s) => s === e);
}
function fe(e, t) {
  return `this is over ${e} steps ${t}: call less, or loop fewer turns`;
}
function He({ pass: e, stage: t }) {
  return { pass: e, stage: t };
}
function xs(e, t) {
  let s = (i) => i + Math.ceil((e - i) / $e) * $e <= t, n = 5e-4 + Math.max(-e, t) * 1e-6, [r, a] = [Math.sin(e), Math.sin(t)];
  return [s(-Math.PI / 2) ? -1 : Math.max(-1, Math.min(r, a) - n), s(Math.PI / 2) ? 1 : Math.min(1, Math.max(r, a) + n)];
}
function Z(e, t) {
  return e > 0 ? e : t < 0 ? -t : 0;
}
function xe(e, t, s, n, r) {
  return (r <= 1 ? e : t) * (1 - r) + (r >= 0 ? s : n) * r;
}
function ee(e) {
  return Math.min(Math.max(e, 0), 1);
}
function ae(e, [t, s]) {
  let { size: n, scale: r = 1 } = e ?? {}, a = (i) => Math.max(1, Math.min(4096, Math.round(i * r)));
  return n ? [n[0], n[1], false] : [a(t), a(s), e?.scale === void 0];
}
function pe(e) {
  return (e?.float ?? 8) / 2;
}
class Qe {
  shader;
  lo;
  hi;
  spread;
  whole;
  root;
  rootSpread;
  off0;
  off1;
  marks;
  needs = /* @__PURE__ */ new Map();
  isRerun;
  roots = 0;
  logStep = new Int32Array(0);
  logOps = new Float64Array(0);
  logged = 0;
  scene = { isStart: true, turn: [0, 0], cut: [0, 1, 0, 1] };
  target;
  pass;
  ops = 0;
  bytes = 0;
  waits = 0;
  saving = [0, 0, 0];
  textures = 0;
  again = /* @__PURE__ */ new Map();
  clusters = /* @__PURE__ */ new Map();
  split = 0;
  node;
  here = 0;
  q0 = 0;
  q1 = 0;
  round = 0;
  serial = 0;
  work = 0;
  constructor(e) {
    this.shader = e;
    let t = e.types.length * 4;
    this.lo = new Float64Array(t), this.hi = new Float64Array(t), this.spread = new Float64Array(t), this.whole = new Uint8Array(t), this.root = new Float64Array(t), this.rootSpread = new Float64Array(t), this.off0 = new Float64Array(t), this.off1 = new Float64Array(t), this.marks = new Uint16Array(e.types.length), this.isRerun = e.passes.reduce((s, { place: n }) => s + (n?.unrolled ?? 0), 0) <= D.unrolled, e.pool.forEach((s, n) => this.set(n * 4 + 4, s, s, 0, Number.isInteger(s)));
  }
  run(e, t) {
    let { passes: s } = this.shader;
    if (this.pass = s[e.pass], this.target = this.pass?.kind === "picture" ? void 0 : s[this.pass?.into ?? -1], this.scene = t, this.ops = this.bytes = this.waits = this.textures = this.logged = 0, this.saving = [0, 0, 0], this.again = /* @__PURE__ */ new Map(), this.clusters.clear(), this.serial++, this.work += e.steps / 8, this.logStep.length < e.unrolled * 2) this.logStep = new Int32Array(e.unrolled * 2), this.logOps = new Float64Array(e.unrolled * 2);
    this.body(e.body);
    let n = new Float32Array(this.round > 0 ? 0 : e.steps);
    for (let f = 0; f < this.logged && this.round === 0; f++) n[this.logStep[f]] += this.logOps[f];
    let r = this.ops + this.waits, { ops: a, bytes: i, saving: l, textures: c, again: p } = this;
    return { ops: a, bytes: i, serial: r, saving: l, textures: c, again: p, byStep: n };
  }
  rangeAt(e) {
    return { lo: [...this.lo.subarray(e * 4, e * 4 + 4)], hi: [...this.hi.subarray(e * 4, e * 4 + 4)] };
  }
  showing(e) {
    let [t = 0] = e.body.out, s = /* @__PURE__ */ new Map(), n = (r) => r.nodes.forEach((a) => {
      for (let i = 0; i < a.count; i++) s.set(a.slot + i, a);
      a.blocks.forEach((i) => a.op === "if" && n(i));
    });
    if (this.isRerun && this.lo[t * 4] !== this.hi[t * 4]) n(e.body), this.need(s, t, 1, 1), this.run(e, this.scene), this.needs.clear();
    return this.hi[t * 4] === 1;
  }
  need(e, t, s, n) {
    let r = e.get(t), [a = 0, i = 0, l = 0] = r?.args ?? [], { lo: c, hi: p } = this, f = (b) => c[b * 4] <= n && p[b * 4] >= s;
    if (!r || this.needs.has(t) || this.needs.size > 256) return;
    this.needs.set(t, [s, n]);
    let { code: u, blocks: o } = r, y = this.shader.types[a] === 5;
    if (u === Ve && y) this.need(e, a, 1 - s, 1 - s);
    else if ((u === be || u === ye) && y) {
      let b = s === (u === be ? 1 : 0);
      for (let [m, g] of [r.args, [i, a]]) if (b || !f(g)) this.need(e, m, s, s);
    } else if (u === ie || o.length > 1) {
      let [b, m] = u === ie ? [i, l] : o.map((g) => g.ranAt === this.serial ? g.out[t - r.slot] : -1);
      if (f(b) !== f(m)) this.need(e, a, +f(b), +f(b)), this.need(e, f(b) ? b : m, s, n);
    } else if (u === me && s === 1) this.need(e, a, c[i * 4] - 11754943508222875e-54, p[i * 4] + 11754943508222875e-54), this.need(e, i, c[a * 4] - 11754943508222875e-54, p[a * 4] + 11754943508222875e-54);
    else if (u === de || u === Ee) {
      let [b, m] = s === 1 ? [a, i] : [i, a], [g, v] = [p[m * 4], c[b * 4]], h = (w) => u === de === (s === 1) ? Math.abs(w) * 9094947017729282e-28 + 6842277657836021e-64 : -11754943508222875e-54;
      this.need(e, b, -1 / 0, g - h(g)), this.need(e, m, v + h(v), 1 / 0);
    }
  }
  narrow(e) {
    let [t = -1 / 0, s = 1 / 0] = this.needs.get(e) ?? [], n = e * 4, r = this.whole[n] === 1, a = Math.max(this.lo[n], r ? Math.ceil(t) : t), i = Math.min(this.hi[n], r ? Math.floor(s) : s);
    if (a <= i) this.set(n, a, i, this.spread[n], r);
  }
  set(e, t, s, n, r) {
    if (this.lo[e] = t, this.hi[e] = s, this.spread[e] = n > 0 ? Math.min(n, s - t) : 0, this.whole[e] = r ? 1 : 0, this.root[e] = ++this.roots, this.rootSpread[e] = this.spread[e], this.off0[e] = this.off1[e] = 0, this.round === 2) {
      let { hull: a } = this.shader;
      a.lo[e] = Math.min(a.lo[e], t), a.hi[e] = Math.max(a.hi[e], s);
    }
  }
  guard(e, t = 1) {
    if (e && this.round > 0) this.node.guards |= t;
  }
  spend(e, t, s) {
    this.ops += t, this.bytes += s, this.logStep[this.logged] = e.step, this.logOps[this.logged++] = t + s * te;
  }
  tie(e, t, s, n) {
    let r = this.rootSpread[t];
    this.root[e] = this.root[t], this.rootSpread[e] = r, this.off0[e] = s, this.off1[e] = n, this.spread[e] = Math.min(this.spread[e], r + n - s);
  }
  tieBetween(e, t, s, n) {
    let { root: r, off0: a, off1: i } = this;
    if (r[t] === r[s]) {
      let l = Math.min(a[t], a[s]) - n;
      this.tie(e, t, l, Math.max(i[t], i[s]) + n);
    }
  }
  save(e, t) {
    this.saving[0] += e & 6 ? t : 0, this.saving[1] += e & 2 ? t : 0, this.saving[2] += e & 4 ? t : 0;
  }
  copy(e, t) {
    this.join(e, t, t, false);
  }
  join(e, t, s, n) {
    for (let r = oe(this.shader.types[e]) - 1; r >= 0; r--) {
      let a = t * 4 + r, i = s * 4 + r, { lo: l, hi: c, spread: p, whole: f } = this;
      this.set(e * 4 + r, Math.min(l[a], l[i]), Math.max(c[a], c[i]), n ? 1 / 0 : Math.max(p[a], p[i]), f[a] === 1 && f[i] === 1), this.tieBetween(e * 4 + r, a, i, 0);
    }
    this.marks[e] = this.marks[t] | this.marks[s];
  }
  body(e) {
    e.ranAt = this.serial, this.work += e.nodes.length + e.out.length;
    for (let t of e.nodes) {
      if (t.blocks.length > 0) {
        this.block(t);
        continue;
      }
      let s = 0;
      this.node = t, this.here = t.slot * 4;
      for (let r of t.args) s |= this.marks[r];
      if (this.marks[t.slot] = t.code > ie ? Oe(s) * 585 : s, t.code > Ne) this.other();
      else if (t.code >= ie) this.whole4();
      else if (t.type === 6 || t.type === 5) this.exact();
      else for (let r = 0; r < t.type; r++, this.here++) this.lane(t, r);
      if (this.needs.size > 0) this.narrow(t.slot);
      let n = (t.guards & 1) + (t.guards >> 1);
      this.spend(t, t.ops + n * 2 * oe(t.type), 0);
    }
  }
  block(e) {
    let [t, s] = e.blocks, { slot: n, inner: r, args: a } = e;
    if (this.spend(e, e.ops, 0), t && !s) {
      a.forEach((u, o) => this.copy(n + o, u));
      for (let u = 0; u < e.number; u++) this.set(r * 4, u, u, 0, true), a.forEach((o, y) => this.copy(r + 1 + y, n + y)), this.body(t), t.out.forEach((o, y) => this.copy(n + y, o));
      return;
    }
    let i = a[0], l = (this.hi[i * 4] ? 1 : 0) | (this.lo[i * 4] ? 0 : 2), c = this.round > 0 ? l : l & e.may || e.may, p = this.spread[i * 4] > 0, f = c === 1 ? t : c === 2 ? s : void 0;
    if (e.may |= this.round > 0 ? c : 0, f) this.body(f), f.out.forEach((u, o) => this.copy(n + o, u));
    else if (t && s) {
      let { ops: u, bytes: o, waits: y, logged: b } = this;
      this.split += p ? 1 : 0, this.body(t);
      let [m, g] = [this.ops - u, this.bytes - o], v = this.waits - y, h = this.logged;
      this.body(s), this.split -= p ? 1 : 0;
      let w = this.ops - u - m, S = this.bytes - o - g, x = m + g * te >= w + S * te;
      if (!p) this.ops = u + Math.max(m, w), this.bytes = o + Math.max(g, S), this.waits = Math.max(y + v, this.waits - v), this.logStep.copyWithin(b, x ? b : h, this.logged), this.logOps.copyWithin(b, x ? b : h, this.logged), this.logged = x ? h : b + this.logged - h;
      else this.save(this.marks[i], x ? m + g * te : w + S * te);
      t.out.forEach((E, k) => this.join(n + k, E, s.out[k], p));
    }
    for (let u = 0; u < e.count; u++) if (this.marks[n + u] |= this.marks[i], this.needs.size > 0) this.narrow(n + u);
  }
  put(e, t, s, n = false, r = 0) {
    let a = r === 11920928955078125e-23, i = a && Math.fround(e) === e ? e : e - Math.abs(e) * r, l = a && Math.fround(t) === t ? t : t + Math.abs(t) * r;
    if (i = i > 0 && i < 11754943508222875e-54 ? 0 : n ? Math.ceil(i) : i, l = l < 0 && l > -11754943508222875e-54 ? 0 : n ? Math.floor(l) : l, i < -j || l > j) this.guard(true, 2), i = Math.min(Math.max(i, -j), j), l = Math.min(Math.max(l, -j), j);
    this.set(this.here, i, l, s > 0 ? s + 2 * r * Math.max(-i, l) + 11754943508222875e-54 : 0, n);
  }
  divide(e, t, s, n) {
    let r = s >= z || n <= -z, a = Math.max(s, z), i = Math.min(n, -z), l = Math.min(s, -z), c = n >= -11754943508222875e-54 ? a : l, p = n >= -11754943508222875e-54 ? Math.max(n, z) : i, f = Math.min(e / c, e / p, t / c, t / p), u = Math.max(e / c, e / p, t / c, t / p);
    if (!r && s < 0) f = Math.min(f, e / l, e / i, t / l, t / i), u = Math.max(u, e / l, e / i, t / l, t / i);
    this.q0 = f - Math.abs(f) * 476837158203125e-21, this.q1 = u + Math.abs(u) * 476837158203125e-21;
  }
  at(e, t, s) {
    let n = e.args[t] ?? 0;
    return n * 4 + (this.shader.types[n] === 1 ? 0 : s);
  }
  lane(e, t) {
    let { lo: s, hi: n, spread: r, whole: a, off0: i, off1: l } = this, { code: c } = e, p = this.at(e, 0, t), f = this.at(e, 1, t), u = s[p], o = n[p], y = s[f], b = n[f], m = r[p], g = r[f], v = a[p] === 1 && (a[f] === 1 || e.args.length < 2), h = Math.max(-u, o), w = Math.max(-y, b);
    switch (c) {
      case re:
      case _e: {
        let S = c === re ? y : -b, x = c === re ? b : -y, E = this.here, k = (h + w) * 11920928955078125e-23;
        if (this.put(u + S, o + x, m + g, v, 11920928955078125e-23), (x - S) * 16 <= o - u) this.tie(E, p, i[p] + S - k, l[p] + x + k);
        else if (c === re && (o - u) * 16 <= x - S) this.tie(E, f, i[f] + u - k, l[f] + o + k);
        return;
      }
      case ge:
        return this.put(p === f ? Z(u, o) ** 2 : Math.min(u * y, u * b, o * y, o * b), Math.max(u * y, u * b, o * y, o * b), h * g + w * m + (m + g > 0 ? 11754943508222875e-54 : 0), v, 11920928955078125e-23);
      case Xt: {
        let S = Z(y, b);
        this.guard(S < z), this.divide(u, o, y, b);
        let x = S < z ? 1 / 0 : m / S + h * g / S / S;
        return this.put(this.q0, this.q1, m + g && x);
      }
      case Zt:
        return this.put(-o, -u, m, v);
      case Qt:
        return this.put(Z(u, o), h, m, v);
      case Jt:
        return this.put(Math.sign(u < 11754943508222875e-54 ? Math.min(u, 0) : u), Math.sign(o > -11754943508222875e-54 ? Math.max(o, 0) : o), m && 2, true);
      case es:
        return this.put(Math.floor(u), Math.floor(o < 0 && o > -11754943508222875e-54 ? 0 : o), m && m + 1, true);
      case ts:
        return this.put(Math.trunc(u), Math.trunc(o), m && m + 1, true);
      case ss: {
        let S = Math.floor(u), x = S === Math.floor(o) && (o < -11754943508222875e-54 || u >= 0);
        return v ? this.put(0, 0, 0, true) : x ? this.put(u - S, o - S, m, false, 11920928955078125e-23) : this.put(0, 1, m && 1);
      }
      case ns: {
        let [S, x] = [Math.sqrt(Math.max(u, 0)), Math.sqrt(Math.max(o, 0))];
        return this.guard(u < 0), this.put(u < 11754943508222875e-54 ? 0 : S, x, m && Math.min(Math.sqrt(m), m / (2 * S)), false, 476837158203125e-21);
      }
      case rs:
      case ft: {
        let S = c === ft ? Math.PI / 2 : 0, [x, E] = xs(u + S, o + S);
        return this.guard(h > 1e6), this.put(x, E, m && m + h * 1e-6, false, 476837158203125e-21);
      }
      case is: {
        let S = Math.exp(Math.min(o, 41));
        return this.guard(o > 41), this.put(Math.exp(Math.min(u, 41)), S, m && m * S + 11754943508222875e-54, false, (2 + Math.min(h, 90)) * 476837158203125e-21);
      }
      case as: {
        let S = Math.max(u, J);
        return this.guard(u < J), this.put(Math.log(S) - 1e-6, Math.log(Math.max(o, J)) + 1e-6, m / S, false, 476837158203125e-21);
      }
      case os:
        return this.guard(h > 15), this.put(Math.max(-1, Math.tanh(u) - 1e-4), Math.min(1, Math.tanh(o) + 1e-4), m, false, 476837158203125e-21);
      case ls:
        return this.put(Math.min(u, y), Math.min(o, b), Math.max(m, g), v);
      case cs:
        return this.put(Math.max(u, y), Math.max(o, b), Math.max(m, g), v);
      case us:
        return this.put(y >= o ? 1 : 0, b < u - 11754943508222875e-54 ? 0 : 1, m + g && 1, true);
      case bt:
      case yt:
      case hs:
        return this.remainder(e, p, f);
      case ps: {
        let S = Math.log2(Math.max(u, J)) - 95367431640625e-20, x = Math.log2(Math.max(o, J)) + 95367431640625e-20, E = Math.min(59, S * y, S * b, x * y, x * b), k = Math.max(S * y, S * b, x * y, x * b), A = 2 ** Math.min(k, 59), O = u < J;
        this.guard(u < 0 || O && y <= 0 || k > 59);
        let R = A * (g * Math.max(-S, x) + w * (m / Math.max(u, J) + 19073486328125e-19));
        return this.put(O && b > 0 ? 0 : 2 ** E, A, m + g && R + 11754943508222875e-54, false, (4 + Math.min(130, Math.max(-E, k))) * 476837158203125e-21);
      }
      case ds: {
        let S = Math.max(Z(u, o), Z(y, b)), x = y >= z;
        return this.guard(S < z), this.divide(u, o, y, b), this.put((x ? Math.atan(this.q0) : u >= z ? 0 : -Math.PI) - 1e-3, (x ? Math.atan(this.q1) : o <= -z ? 0 : Math.PI) + 1e-3, m + g && (x || Z(u, o) >= z ? (m + g) / S : 7));
      }
      case gt:
      case vt:
      case ms:
        return this.ofThree(e, t, p, f);
      case kt:
        return this.put(u, o, m, true, 11920928955078125e-23);
      case Rt:
        return u < 0 && o >= 0 ? this.put(0, 4294967296, m && 1 / 0, true) : this.put(u >>> 0, o >>> 0, m, true, 11920928955078125e-23);
      default: {
        let S = Math.min(j, m && (o - u) * (c === Fe ? 2 : 1) * 1.0000004768371582);
        e.bound = this.round === 1 ? Math.max(e.bound, Math.fround(S * 1.0000004768371582)) : e.bound, this.guard(this.split > 0 || S >= j);
        let x = this.split > 0 || (e.guards & 1) > 0, k = this.round === 0 && this.pass?.place !== void 0 && (Oe(this.marks[e.slot]) & 6) > 0 ? this.shader.hull.hi[this.here] : S, A = !x ? k : this.round === 1 ? j : e.bound;
        return this.put(c === Fe ? 0 : -A, A, 2 * A);
      }
    }
  }
  remainder(e, t, s) {
    let n = this.lo[t], r = this.hi[t], a = this.lo[s], i = this.hi[s], l = this.spread[t], c = this.spread[s], p = this.whole[t] === 1 && this.whole[s] === 1, f = Math.max(-n, r), u = Z(a, i), o = e.code === bt, y = p && Math.max(f, -a, i) <= 1048576;
    e.isExact &&= this.round !== 1 || y;
    let b = e.isExact || this.round === 1 ? 0.5 : 0, m = e.isExact && this.round !== 1 ? 1 : 0, g = b * Math.sign(o ? a : n), v = b * Math.sign(o ? i : r);
    this.guard(u < z), this.divide(n + (m ? g : Math.min(g, 0)), r + (m ? v : Math.max(v, 0)), a, i);
    let h = o ? Math.floor(this.q0) : Math.trunc(this.q0), w = o ? Math.floor(this.q1 < 0 && this.q1 > -11754943508222875e-54 ? 0 : this.q1) : Math.trunc(this.q1);
    if (e.code === yt) {
      let O = u < z ? 1 / 0 : l / u + f * c / u / u + 1;
      return this.put(h, w, l + c && O, true);
    }
    let S = Math.max(0, Math.max(-a, i) - m), x = o ? Math.min(0, i < 0 ? a + m : a) : Math.max(Math.min(n, 0), -S), E = o ? Math.max(0, a > 0 ? i - m : i) : Math.min(Math.max(r, 0), S), k = h === w && a === i && u >= z;
    if (k) {
      let O = m ? 0 : (f + Math.abs(h * a)) * 476837158203125e-21;
      x = Math.min(Math.max(x, n - h * a - O), E), E = Math.max(Math.min(E, r - h * a + O), x);
    } else if (o && n >= 0 && a > 0) E = Math.min(E, r);
    let A = k ? l + f * 476837158203125e-21 : 1 / 0;
    this.put(x, E, l + c && A, p);
  }
  ofThree(e, t, s, n) {
    let r = this.at(e, 2, t), a = this.lo[s], i = this.hi[s], l = this.lo[n], c = this.hi[n], p = this.lo[r], f = this.hi[r], u = this.spread[s], o = this.spread[n], y = this.spread[r], b = u + o + y;
    if (e.code === vt) {
      let E = this.whole[s] + this.whole[n] + this.whole[r] === 3;
      return this.put(Math.min(Math.max(a, l), p), Math.min(Math.max(i, c), f), Math.max(u, o, y), E);
    }
    if (e.code === gt) {
      let E = Math.max(-p, f), k = Math.max(-a, i) + Math.max(-l, c), A = k && k * (1 + E) * 476837158203125e-21 + 2350988701644575e-53, O = p >= 0 && f <= 1, R = Math.min(xe(a, i, l, c, p), xe(a, i, l, c, f)) - A, T = Math.max(xe(i, a, c, l, p), xe(i, a, c, l, f)) + A;
      return this.put(O && a >= 0 && l >= 0 ? Math.max(R, 0) : R, O && i <= 0 && c <= 0 ? Math.min(T, 0) : T, b && u * (1 + E) + o * E + y * Math.max(c - a, i - l) + A + 11754943508222875e-54), O ? this.tieBetween(this.here, s, n, A) : void 0;
    }
    let m = l - i - Math.abs(l - i) * 11920928955078125e-23, g = c - a + Math.abs(c - a) * 11920928955078125e-23, v = Z(m, g);
    this.guard(v < z), this.divide(p - i, f - a, m, g);
    let h = ee(this.q0 - Math.abs(this.q0) * 476837158203125e-21), w = ee(this.q1 + Math.abs(this.q1) * 476837158203125e-21), S = Math.max(i - p, f - a), x = (y + u) / v + S * (u + o) / v / v;
    this.put(h === 1 ? 1 : ee(h * h * (3 - 2 * h) - 1e-6), w === 0 ? 0 : ee(w * w * (3 - 2 * w) + 1e-6), b && (v < z ? 1 : 1.5 * x + 1e-6));
  }
  exact() {
    let { node: e } = this, { code: t, type: s } = e, [n, r] = [this.at(e, 0, 0), this.at(e, 1, 0)], [a, i, l, c] = [this.lo[n], this.hi[n], this.lo[r], this.hi[r]], p = this.spread[n] + this.spread[r], f = a === i && l === c, u = l & 31, [o, y, b] = [-1 / 0, 1 / 0, 1 / 0];
    if (t === de || t === Ee || t === me) {
      let m = i < l - 11754943508222875e-54, g = a > c + 11754943508222875e-54;
      o = (t === me ? f && a === l : m || t === Ee && i <= l) ? 1 : 0, y = g || t === me && m || t === de && a >= c ? 0 : 1;
      let v = Oe(this.marks[e.slot]);
      if (e.may |= this.round > 0 ? (y ? 1 : 0) | (o ? 0 : 2) : 0, e.isEven &&= this.round === 0 || p === 0, this.round === 0 && p === 0 && (v === 1 || v & 1 && e.isEven)) [o, y] = [e.may === 1 ? 1 : 0, e.may === 2 ? 0 : 1];
    } else if (t === Ve) [o, y] = s === 5 ? [1 - i, 1 - a] : [~i, ~a], b = p;
    else if (t === ze) this.guard(Math.max(-a, i) >= 2147483520), [o, y, b] = [Math.trunc(a), Math.trunc(i), p + 1];
    else if (t === re || t === _e) [o, y] = t === re ? [a + l, i + c] : [a - c, i - l], b = p;
    else if (t === ge) o = Math.min(a * l, a * c, i * l, i * c), y = Math.max(a * l, a * c, i * l, i * c), b = p * Math.max(-a, i, -l, c);
    else if (t === be && (s === 5 || a >= 0 || l >= 0)) o = s === 5 ? a & l : 0, y = Math.min(a >= 0 ? i : c, l >= 0 ? c : i);
    else if ((t === ye || t === Re) && a >= 0 && l >= 0) o = t === ye ? Math.max(a, l) : 0, y = 2 ** (32 - Math.clz32(i | c)) - 1;
    else if (t === je && l === c) [o, y, b] = [a * 2 ** u, i * 2 ** u, p * 2 ** u];
    else if (t === We || t === Ie && a >= 0) [o, y] = l === c ? [a >> u, i >> u] : [Math.min(a, 0), Math.max(i, 0)];
    else if (t === Ie && l === c && u > 0) [o, y] = [0, -1 >>> u];
    if (f && s === 6 && t !== ze) o = y = Es(t, a, l);
    else if (f && t === Re) o = y = a ^ l;
    else if (o < -2147483648 || y > 2147483647) [o, y, b] = [-2147483648, 2147483647, 1 / 0];
    this.set(e.slot * 4, o, y, p && b, true);
  }
  whole4() {
    let { node: e } = this, [t = 0, s = t, n = 0] = e.args, { lo: r, hi: a, spread: i } = this;
    if (e.code === ie) {
      let b = this.marks[e.slot], m = r[t * 4] ? s : a[t * 4] ? void 0 : n;
      this.join(e.slot, m ?? s, m ?? n, i[t * 4] > 0), this.marks[e.slot] = b;
      return;
    }
    let [l, c, p, f, u] = [0, 0, 0, 0, 0];
    for (let b = this.shader.types[t] - 1; b >= 0; b--) {
      let [m, g] = [t * 4 + b, s * 4 + b], [v, h, w, S] = [r[m], a[m], r[g], a[g]], x = Math.min(v * w, v * S, h * w, h * S), E = Math.max(v * w, v * S, h * w, h * S), k = t === s ? Z(v, h) ** 2 : x;
      l += k > 0 && k < 11754943508222875e-54 ? 0 : k, c += E, p += t === s || x >= 0 ? 0 : Math.max(-x, E), f += Math.max(-v, h) * i[g] + Math.max(-w, S) * i[m], u += i[m] + i[g];
    }
    if (e.code === It) {
      let b = p && (p + Math.abs(c)) * 476837158203125e-21 + 470197740328915e-52;
      return this.put(l - b, c + b, u && f + 11754943508222875e-54, false, 476837158203125e-21);
    }
    let [o, y] = [Math.sqrt(l), Math.sqrt(c)];
    if (e.code === Ye) return this.put(o, y, u / 2, false, 476837158203125e-21);
    this.guard(l < J);
    for (let b = 0; b < e.type; b++, this.here++) {
      let [m, g] = [r[t * 4 + b], a[t * 4 + b]], v = m / Math.max(m < 0 ? o : y, z), h = g / Math.max(g > 0 ? o : y, z);
      this.put(Math.max(v, -1), Math.min(h, 1), u && u / o, false, 19073486328125e-19);
    }
  }
  sides(e) {
    let { window: t } = this.scene, [s, n, r] = ae(e, t ?? Ae), [a, i] = r ? K : [1, 1];
    return !t && !e?.size ? [1, 4096, 1, 4096] : [Math.max(1, Math.floor(s * a)), Math.min(4096, s * i), Math.max(1, Math.floor(n * a)), Math.min(4096, n * i)];
  }
  fill(e, t = 0, s = false, n = 0) {
    let { node: r } = this;
    for (let a = oe(r.type) - 1; a >= 0; a--) {
      let i = a * 2 % e.length, l = typeof t === "number" ? t : t[a];
      this.set(r.slot * 4 + a, e[i], e[i + 1], l, s);
    }
    this.marks[r.slot] = n;
  }
  input() {
    let { node: e } = this, { window: t, isStart: s, turn: n, cut: r, a, b: i } = this.scene, [l, c, p, f] = r, [u, o, y, b] = this.sides(this.target), [m, g, v, h] = t ? [t[0], t[0], t[1], t[1]] : [1, 16384, 1, 16384], w = t ? [8 / u, 8 / y] : [1, 1], S = 585, x = this.target?.size ? 0 : 585, E = this.pass?.place ? 0 : 34, [k, A] = [1.0000004768371582, 0.9999995231628418], [O, R] = [u === o ? 0.5 / u : 0, y === b ? 0.5 / y : 0], T = [(l + O) * A, ee((c - O) * k), (p + R) * A, ee((f - R) * k)], _ = [Math.max(0.5, T[0] * u), Math.max(0.5, Math.min(o - 0.5, T[1] * o)), Math.max(0.5, T[2] * y), Math.max(0.5, Math.min(b - 0.5, T[3] * b))];
    switch (e.input) {
      case "time":
        return this.fill([0, 1e8]);
      case "dt":
      case "still":
        return this.fill([0, 1]);
      case "frame":
        return this.fill([s ? 0 : 1, 2147483648], 0, true);
      case "fresh":
        return this.fill([0, s ? 1 : 0], 0, true);
      case "turn":
        return this.fill(n, 0, true);
      case "size":
        return this.fill([m, g, v, h], 0, false, 585);
      case "res":
        return this.fill([u, o, y, b], 0, true, x);
      case "px":
        return this.fill([m / o * A, g / u * k], 0, false, 585);
      case "composer":
        return this.fill([-4, 5]);
      case "pointerCount":
        return this.fill([0, D.pointers], 0, true);
      case "pixel":
        return this.fill(_, 8, false, E | x);
      case "cell":
        return this.fill(_.map(Math.floor), 8, true, E | x);
      case "uv":
        return this.fill(T, w, false, E);
      case "point":
        return this.fill([T[0] * m * A, T[1] * g * k, T[2] * v * A, T[3] * h * k], [w[0] * g, w[1] * h], false, E | 585);
      case "vertex": {
        let { count: U = 1, draw: N } = this.pass ?? {}, L = Math.min(U, c + (N === "strip" ? 2 : 0)) - 1;
        return this.fill([l, L], 48, true, 1170);
      }
      case "instance":
        return this.fill([p, f - 1], 48, true, 2340);
      case "coord":
        return this.fill([0, 1], 1);
      default: {
        let { lo: U, hi: N } = (e.input === "a" ? a : i) ?? se(0, 0);
        return this.fill(U.flatMap((L, F) => [L, N[F]]), 1 / 0, false, (this.scene.placed ?? 0) * 585);
      }
    }
  }
  other() {
    let { node: e } = this, { lo: t, hi: s, spread: n, whole: r } = this, [a = 0] = e.args, i = this.marks[e.slot];
    switch (e.op) {
      case "input":
        return this.input();
      case "value":
        return this.fill(this.shader.values[e.number]);
      case "int":
        return this.fill([e.number, e.number], 0, true);
      case "pointer":
        return this.fill(e.number ? [0, 1e6, 0, 1, 0, 1, 0, 1e6] : [-4, 5], n[a * 4] && 1 / 0);
      case "size": {
        let l = this.shader.passes[e.number];
        return this.fill(this.sides(l), 0, true, l?.size ? 0 : 585);
      }
      case "swizzle":
      case "vector": {
        let l = e.op === "swizzle" ? a * 4 : 0, c = 0;
        for (let p = 0; p < e.type; p++) {
          let f = l + e.lanes[p % e.lanes.length], u = e.slot * 4 + p;
          this.set(u, t[f], s[f], n[f], r[f] === 1), this.tieBetween(u, f, f, 0), c |= (this.marks[f >> 2] >> (f & 3) * 3 & 7) << p * 3;
        }
        this.marks[e.slot] = e.type > 1 ? c : c * 585;
        return;
      }
      default:
        return this.read(e, a * 4, i);
    }
  }
  cluster(e, t, s, n) {
    let { lo: r, hi: a, node: i } = this, [l, c] = i.op === "sample" ? [t, s] : [1, 1], p = [r[e] * l, a[e] * l, r[e + 1] * c, a[e + 1] * c], f = i.number + n / 2, u = this.clusters.get(f) ?? [], o = (y) => y.every((b, m) => Math.abs(b - p[m]) <= 128);
    if (t * s * pe(this.shader.passes[i.number]) > 524288 && !u.slice(-16).some(o)) {
      let [y, b] = this.again.get(i.number) ?? [0, 0], m = ee((p[1] - p[0]) / t) * ee((p[3] - p[2]) / s), g = u.push(p) > 1 ? n : 0;
      this.again.set(i.number, [y + g, b + g * m]), this.clusters.set(f, u);
    }
  }
  read(e, t, s) {
    let { lo: n, hi: r, spread: a } = this, i = this.shader.passes[e.number], [, l, , c] = this.sides(i), p = e.op === "sample", f = p ? e.args[1] * 4 : 0, u = e.op === "row", o = a[t] + (u ? 0 : a[t + 1]) + a[f], y = i?.filter === "mipmap" && i.float !== 32 ? 2 ** -Math.min(12, Math.max(0, Math.floor(n[f]))) : 1, b = Math.min(l, a[t] * (p ? l : 1) * y + 2) * Math.min(c, a[t + 1] * (p ? c : 1) * y + 2) * pe(i), m = o === 0 ? 4 : u || b < 65536 ? 12 : b < 524288 ? 40 : 0, g = i?.isInt ? 2 : 1, v = Math.min(l, (r[t] - n[t]) * (p ? l : 1) + 2) * Math.min(c, (r[t + 1] - n[t + 1]) * (p ? c : 1) + 2) * pe(i), h = o > 0 || !u && v >= 65536;
    if (this.waits += h ? (300 - m) * g : 0, this.spend(e, m * g, m ? 0 : 64), this.textures |= o ? 1 << e.number + 1 : 0, this.round === 0 && o > 0 && m > 0) this.cluster(t, l * y, c * y, y ** 2);
    if (this.save(s, m > 12 ? m - 12 : m ? 0 : 64 * te - 12), this.guard(p && Math.max(-n[t], r[t], -n[t + 1], r[t + 1]) > 65536), this.guard(i?.isDrawnInto === true && i.float !== void 0, 2), !i || !u) {
      let E = i?.held ?? se(0, 1);
      return this.fill(E.lo.flatMap((k, A) => [k, E.hi[A]]), o && 1 / 0, false, s & 585);
    }
    let w = Math.min(Math.max(Math.floor(n[t]), 0), l - 1), S = Math.min(Math.max(Math.floor(r[t]), 0), l - 1), [x = 0] = e.lanes;
    if (S - w > 8) {
      let E = i.held.lo.flatMap((k, A) => [k, i.held.hi[A]]);
      return this.fill(E.slice(x * 2), o && 1 / 0, i.isWhole, s);
    }
    for (let E = oe(e.type) - 1; E >= 0; E--) {
      let [k, A] = [1 / 0, -1 / 0];
      for (let O = w; O <= S; O++) {
        let R = i.data[O * i.lanes + x + E];
        k = Math.min(k, R), A = Math.max(A, R);
      }
      this.set(e.slot * 4 + E, k, A, o && 1 / 0, i.isWhole);
    }
  }
}
function Oe(e) {
  return (e | e >> 3 | e >> 6 | e >> 9) & 7;
}
function Es(e, t, s) {
  switch (e) {
    case re:
      return t + s | 0;
    case _e:
      return t - s | 0;
    case ge:
      return Math.imul(t, s);
    case be:
      return t & s;
    case ye:
      return t | s;
    case Re:
      return t ^ s;
    case je:
      return t << s;
    case We:
      return t >> s;
    case Ie:
      return t >>> s | 0;
    default:
      return ~t;
  }
}
function Os(e, t) {
  return { lo: e.lo.map((s, n) => Math.min(s, t.lo[n])), hi: e.hi.map((s, n) => Math.max(s, t.hi[n])) };
}
function qe(e, t, s, n) {
  let r = (a, i, l) => {
    let c = Math.fround(a + i * (Math.abs(a) * (t + 476837158203125e-21) + s)), p = a * i <= 0 && c * i > 0 ? 0 : c;
    return Math.min(Math.max(p, n.lo[l]), n.hi[l]);
  };
  return { lo: e.lo.map((a, i) => r(a, -1, i)), hi: e.hi.map((a, i) => r(a, 1, i)) };
}
function Ge(e, t) {
  return t === "place" ? [0, e.count, 0, e.instances] : [0, 1, 0, 1];
}
function Pe(e, t) {
  for (let s of e.nodes) t(s), s.blocks.forEach((n) => Pe(n, t));
}
function ve(e) {
  return e.flatMap((t) => [t.place ?? [], t.color ?? []].flat());
}
function Nt(e, t) {
  let [, , , s = 0, n = 0] = t.body.out, r = se(-j, j), a = (i) => qe(e.rangeAt(i), 1e-5, 0, r);
  return e.showing(t) ? [a(s), a(n)] : void 0;
}
function $s(e) {
  I(Ue(e), "this is not a well-formed shader");
  let { fps: t, pool: s, values: n, passes: r, ...a } = e, i = D, l = `its numbers, ints and tables hold more than ${i.bits} bits: a theme's ground stays vector, so draw it with fewer or rounder numbers`;
  I(Object.keys(a).length === 0, "this is not a well-formed shader"), I(t === 30 || t === 60, "fps is 30 or 60"), I(Array.isArray(s) && Array.isArray(n), "this is not a well-formed shader"), I(s.length <= i.bits, l), I(n.length <= i.values, `values holds at most ${i.values}`), I(he(r, i.passes), `a shader has at most ${i.passes} passes, tables included`);
  let c = new Pt(s.length, n.length), p = Array.from(s, (h) => c.number(h)), f = Array.from(r, (h, w) => {
    I(Ue(h), "this is not a well-formed shader", { pass: w });
    let S = Object.entries(h).filter((x) => x[1] !== void 0);
    return Object.fromEntries(S);
  }), u = Array.from(n, (h) => {
    I(he(h, 2), "this is not a well-formed shader");
    let w = [c.number(h[0]), c.number(h[1])];
    return I(w[0] <= w[1], "a value's range is [low, high]"), w;
  });
  f.forEach((h, w) => c.pass(h, w)), I(c.passes.reduce((h, { kind: w }) => h + +(w === "picture"), 0) === 1, "a shader has exactly one picture");
  let o = 0;
  for (let [h, w] of c.passes.entries()) {
    let S = c.passes[w.into], { place: x, color: E } = f[h];
    if (w.kind === "shapes") o += w.count * w.instances, I(w.into < 0 || S?.kind === "buffer", "this is not a well-formed shader", { pass: h }), I(S?.float !== 32, "shapes cannot draw into a buffer with float: 32; use float: 16", { pass: h }), I(o <= i.vertices, `the shapes have more than ${i.vertices} vertices`, { pass: h }), w.place = c.program(x, h, "place");
    if (S && w.kind === "shapes") S.isDrawnInto = true;
    if (E !== void 0 || w.kind === "picture") w.color = c.program(E, h, "color");
  }
  let y = ve(c.passes);
  for (let h of y) {
    let { kind: w, into: S } = c.passes[h.pass];
    if (w === "shapes" && S >= 0 && !c.passes[S].color) Pe(h.body, ({ op: x, number: E, step: k }) => I(E !== S || !/^(at|sample)$/.test(x), "shapes cannot read the empty buffer they draw into: it would give zeros, so give that buffer a body or read another", { ...He(h), step: k }));
  }
  let b = [...c.ints].reduce(Tt, c.bits), m = Ss(c.text.join());
  I(b <= i.bits, l), I(m <= i.packedBytes, `it packs to more than ${i.packedBytes} bytes: repeat code with functions and loops, or write less`), I(Be(e) <= i.jsonChars, `it is more than ${i.jsonChars} characters as JSON: call less, or move repeated work into a for loop`), I(y.reduce((h, w) => h + w.unrolled + w.handed, 0) <= i.unrolledInAll, fe(i.unrolledInAll, "unrolled in all its passes"));
  for (let { inputs: h, textures: w, pass: S } of y) {
    let x = [...bs, "pointer", "value"].some((E) => h.has(E)) || [...w].some((E) => {
      let k = c.passes[E];
      return k?.isDrawnInto || k?.color && !k.once;
    });
    I(!c.passes[S]?.once || !x, "a once buffer may not depend on time, frame, pointers, values or a buffer that moves", { pass: S });
  }
  let g = c.types.length * 4, v = { fps: t, pool: p, values: u, passes: c.passes, types: c.types, hull: { lo: new Float64Array(g).fill(1 / 0), hi: new Float64Array(g).fill(-1 / 0) }, steps: c.steps, guards: 0, bits: b, packedBytes: m, reads: { pointers: y.some(({ inputs: h }) => h.has("pointer") || h.has("pointerCount")), scene: y.some(({ textures: h }) => h.has(-1)), values: [...c.valuesRead].sort() } };
  return As(v), v;
}
function As(e) {
  let t = new Qe(e);
  for (let s of e.passes) s.held = s.color || s.isDrawnInto ? wt(s) : s.held;
  for (let s of [1, 2]) {
    t.round = s;
    for (let n of e.passes) {
      let { place: r, color: a } = n, i = { isStart: true, turn: [0, n.repeat - 1] }, l = wt(n.kind === "picture" ? void 0 : e.passes[n.into]);
      for (let c of ve([n])) Pe(c.body, (p) => {
        p.guards = p.may = 0;
      });
      if (r) t.run(r, { ...i, cut: Ge(n, "place") }), r.bounds = Nt(t, r) ?? [se(0, 0), se(0, 0)];
      if (a) {
        let [c, p] = r?.bounds ?? [];
        t.run(a, { ...i, cut: Ge(n, "color"), a: c, b: p });
      }
      if (a && s === 1) {
        let c = qe(t.rangeAt(a.body.out[0]), 0, 0, l), p = n.float === 32 ? c : qe(c, n.float ? 1953125e-9 : 0, n.float ? 6103515625e-14 : 0.00392156862745098, l);
        a.bounds = [n.kind === "buffer" ? c : l], n.held = n.isDrawnInto ? l : Os(p, se(0, 0));
      }
    }
  }
  for (let s of ve(e.passes)) Pe(s.body, (n) => {
    e.guards += (n.guards & 1) + (n.guards >> 1);
  });
}
function Je(e) {
  try {
    return $s(e);
  } catch (t) {
    return t instanceof Xe ? { refused: t.message, ...t.at } : { refused: "this shader could not be read" };
  }
}
function ue({ ops: e, bytes: t }) {
  return e + t * te;
}
function Te(e) {
  return e ? 8 / K[0] : 8;
}
function ks({ pass: e, scene: t, spent: s, paint: n }, [r, a, i]) {
  let [l, c, p, f] = t.cut, [u, o] = e.place ? [48, Math.ceil(48 / e.count)] : [Te(i) / r, Te(i) / a], y = Math.ceil((c - l) / u - 1e-6), b = Math.ceil((f - p) / o - 1e-6), [, m, g] = n?.saving[0] ? n.saving : s.saving, v = l + Math.ceil(y / 2) * u, h = p + Math.ceil(b / 2) * o, [w, S] = [y > 1 ? m : 0, b > 1 ? g : 0];
  return w + S === 0 ? void 0 : (w === S ? y > b : w > S) ? [[l, v, p, f], [v, c, p, f]] : [[l, c, p, h], [l, c, h, f]];
}
function Rs(e, t) {
  let s = e.push(t) - 1;
  for (; s > 0 && e[s - 1 >> 1].worth < t.worth; s = s - 1 >> 1) e[s] = e[s - 1 >> 1];
  e[s] = t;
}
function St(e) {
  let [t] = e, s = e.pop(), n = 0;
  for (let r = 1; s && r < e.length; r = n * 2 + 1) {
    if (r += (e[r + 1]?.worth ?? -1) > e[r].worth ? 1 : 0, e[r].worth <= s.worth) break;
    e[n] = e[r], n = r;
  }
  if (s && e.length > 0) e[n] = s;
  return t;
}
function Is(e, t) {
  let [s, n, r] = [0, 0, 0];
  for (let { spent: a, paint: i } of e) {
    let [l, c] = a.again.get(t) ?? [0, 0];
    s = Math.max(s, l), n += c, r = Math.max(r, i?.again.get(t)?.[1] ?? 0);
  }
  return Math.min(s, n) + r;
}
function xt(e, t, s) {
  let n = new Qe(e), r = [], a = [], i = (o) => o.kind === "picture" ? void 0 : e.passes[o.into], l = (o) => {
    let [y, b] = ae(i(o), t), m = Ae[0] * Ae[1] / (t[0] * t[1]);
    return Math.min(D.cover, o.cover * m) * y * b;
  }, c = (o, y, b, m) => {
    let { place: g, color: v } = o, [h, w, S, x] = y.cut, [E, k, A] = ae(i(o), t), { work: O } = n, R = n.run(g ?? v, y), T = g?.body.out.reduce((Y, ce) => Y | Oe(n.marks[ce]), 0), [_, U] = (g && Nt(n, g)) ?? [], N = _ && n.run(v, { ...y, cut: [0, 1, 0, 1], a: _, b: U, placed: T }), L = (Y, ce) => Math.ceil(Y / ce - 1e-6) * ce, F = !g ? L((w - h) * E, Te(A)) * L((x - S) * k, Te(A)) * b : w - h < o.count ? L(w - h, 48) * (x - S) : L(o.count * (x - S), 48), q = [R, N].map((Y, ce) => {
      let mt = ce ? m?.paint : m?.spent;
      return Y && mt ? ue(mt) - ue(Y) : 1;
    }), B = (m?.trust ?? 1) / (q.some(Boolean) ? 1 : 2), W = A ? K[0] ** 2 : 1, Yt = (R.saving[0] * F * (g ? 1 : W) + (N?.saving[0] ? ue(N) * l(o) * W : 0)) * B / (n.work - O), dt = { pass: o, scene: y, repeats: b, runs: F, spent: R, paint: N, trust: B, worth: Yt };
    if ([R, N].some((Y) => Y && Y.saving[0] > ue(Y) / 20)) Rs(r, dt);
    else a.push(dt);
  };
  for (let o of e.passes) {
    let y = Ge(o, o.place ? "place" : "color"), b = o.repeat > 1 && o.color?.inputs.has("turn");
    if (o.color && (s || !o.once)) {
      let m = o.repeat - 1;
      if (c(o, { window: t, isStart: s, cut: y, turn: [0, b ? 0 : m] }, b ? 1 : o.repeat), b) c(o, { window: t, isStart: s, cut: y, turn: [1, m] }, m);
    }
  }
  let p = n.work + 15e5 * (s ? 0.25 : 0.75);
  for (let o = St(r); o; o = St(r)) {
    let { pass: y, scene: b, repeats: m } = o, g = ae(i(y), t), v = n.work < p ? ks(o, g) : void 0;
    if (v?.forEach((h) => c(y, { ...b, cut: h }, m, o)), !v) a.push(o);
  }
  let f = [];
  return { bills: e.passes.map((o, y) => {
    let b = a.filter((N) => N.pass === o), m = i(o), [g, v, h] = ae(m, t), w = pe(m), S = [0, 0];
    for (let { scene: N, repeats: L, spent: F, paint: q } of b) {
      let B = (F.serial + (q?.serial ?? 0)) * L;
      S[N.turn[0]] = Math.max(S[N.turn[0]], B);
    }
    let x = [0, 0, 0, 0, (S[0] + S[1]) / 25e4], E = (N, L, F, q) => {
      x[F ? 2 : 0] += N.ops * L, x[F ? 3 : 1] += N.bytes * L, N.byStep.forEach((B, W) => q[W] += B * L);
    }, k = new Float64Array(o.place?.steps ?? 0), A = new Float64Array(o.color?.steps ?? 0), O = b.flatMap((N) => N.paint ?? []), R = O.reduce((N, L) => N && ue(N) >= ue(L) ? N : L, void 0), T = 0;
    for (let N of b) E(N.spent, N.runs, h && !o.place, o.place ? k : A), T |= N.spent.textures | (N.paint?.textures ?? 0);
    if (R) {
      let N = Math.max(...O.map((L) => L.ops));
      E({ ...R, ops: N, bytes: Math.max(...O.map((L) => L.bytes)) }, l(o), h, A);
    }
    let [, _, , U] = x;
    if (b.length > 0) {
      let N = m?.filter === "mipmap" ? g * v * 5 / 3 : 0, L = o.place ? (R ? l(o) * 2 : 0) + (o.clear ? g * v : 0) : g * v * o.repeat;
      x[h ? 3 : 1] += (L + N) * w;
      let F = o.draw === "strip" ? 480 : 156;
      x[1] += o.place ? o.count * o.instances * F : 0;
    }
    for (let N = -1; N < e.passes.length; N++) {
      let L = e.passes[N], [F, q, B] = ae(L, t), W = (T >>> N + 1 & 1) + Is(b, N);
      x[B ? 3 : 1] += W * F * q * pe(L) * o.repeat;
    }
    return f.push({ at: { pass: y }, ops: (x[1] + x[3] - _ - U) * te }), k.forEach((N, L) => f.push({ at: { pass: y, stage: "place", step: L }, ops: N })), A.forEach((N, L) => f.push({ at: { pass: y, stage: "color", step: L }, ops: N })), x;
  }), places: f };
}
function Et(e, t, s) {
  return t > e ? 0 : Math.min(K[1], Math.sqrt((e - t) / (s || z)));
}
function et(e, t = Ae, s = t[0] * t[1]) {
  let n = xt(e, t, false), a = ve(e.passes).some(({ inputs: O, pass: R }) => O.has("frame") || O.has("fresh") || e.passes[R]?.once) ? xt(e, t, true) : n, i = t[0] * t[1], l = Math.min(36e3, s / 144), c = [l * 40, l * 72, 0, 0, 12e-4], { scene: p } = e.reads, f = [15696e3, i * (p ? 12 : 4)];
  for (let O of e.passes) {
    let [R, T, _] = ae(O, t), U = O.kind === "buffer" ? 2 : O.kind === "table" ? 1 : 0, N = O.filter === "mipmap" && O.float !== 32 ? 1.3333333333333333 : 1;
    f[_ ? 1 : 0] += R * T * pe(O) * U * N;
    let L = O.draw === "strip" ? 168 : 52;
    f[0] += O.place ? O.count * O.instances * L : 0;
  }
  let u = (O, R, T) => O[T] / ke[R].ops + O[T + 1] / ke[R].bytes, o = (O, R, T) => Math.max(O[4], u(O, R, 0) + u(O, R, 2) * T ** 2), y = (O, R, T) => {
    let _ = K[1];
    for (let U = 0; U <= O.length; U++) {
      let [N, L] = [0, 0];
      for (let F of O) {
        let q = o(F, R, _) === F[4];
        N += q ? F[4] : u(F, R, 0), L += q ? 0 : u(F, R, 2);
      }
      _ = Math.min(_, Et(T, N, L));
    }
    return _;
  }, b = 300 / e.fps, m = Et(D.bytes, f[0], f[1]), [g, v] = [0, 1].map((O) => ({ frame: y([...n.bills, c], O, b), start: y([...a.bills, c], O, 150) })), h = [Math.min(g.frame, g.start, m), Math.min(v.frame, v.start, m)], w = h[1] < K[0], S = w ? v : g, x = S.start < S.frame, { places: E } = x ? a : n, k = E.reduce((O, R) => O + R.ops, 0), A = (O) => {
    let [R = 0, T = 0] = [0, 1].map((_) => o(O, _, Math.max(K[0], h[_])));
    return [R, T];
  };
  return { verdict: w ? "refused" : h[0] < K[0] ? "fast" : "any", ...w && { reason: m < K[0] ? "its buffers take more than 160 MB: use a smaller scale, size or float" : x ? "its first frame could take over 150 ms even on a fast GPU" : `a frame could take over ${b} ms even on a fast GPU at half sharpness` }, sharpness: h, sharpestInMemory: m, passes: e.passes.map((O, R) => ({ frameMs: A(n.bills[R]), startMs: A(a.bills[R]) })), bytes: f[0] + f[1] * Math.max(K[0], h[1]) ** 2, dearest: E.filter((O) => O.ops > 0).map(({ at: O, ops: R }) => ({ at: O, share: R / k })).sort((O, R) => R.share - O.share) };
}
function Q(e) {
  let t = String(ne(e)), s = /[.e]/.test(t) ? t : `${t}.`;
  return e < 0 ? `(${s})` : s;
}
function Ot(e) {
  return `vec4(${e.map(Q).join(", ")})`;
}
var Ps = `nz(d): return d < 0. ? min(d, -1e-18) : max(d, 1e-18);
fin(x): return (floatBitsToUint(x) & 2139095040u) == 2139095040u ? 0. : x;
fmod(x, y, d, n): return clamp(x - y * floor((x + n * sign(y)) / d), min(y, 0.), max(y, 0.));
frem(x, y, d, n): return clamp(x - y * trunc((x + n * sign(x)) / d), max(min(x, 0.), -abs(y)), min(max(x, 0.), abs(y)));
turn(x): return abs(x) > ${Q(1e6)} ? fmod(x, ${Q($e)}, ${Q($e)}, 0.) : x;
quot(x, y, d, n): return trunc((x + n * sign(x)) / d);
ease(x, from, d): float t = clamp((x - from) / d, 0., 1.); return min(t * t * (3. - 2. * t), 1.);`.split(`
`).flatMap((e) => {
  let [, t, s = "", n] = /^(\w+)\((.*?)\): (.*)/.exec(e) ?? [], r = s.split(", ");
  return [1, 2, 3, 4].map((a) => {
    let i = Ce[a], l = Array.from("xyzw".slice(0, a), (c) => `${t}(${r.map((p) => `${p}.${c}`).join(", ")})`);
    return `${i} ${t}(${r.map((c) => `${i} ${c}`).join(", ")}) { ${a === 1 ? n : `return ${i}(${l.join(", ")});`} }`;
  });
}), Ts = ["#version 300 es", "precision highp float; precision highp int; precision highp sampler2D;", "uniform vec3 iResolution; uniform vec2 iScreen; uniform vec4 iMouse; uniform vec4 iComposer;", "uniform float iTime; uniform float iTimeDelta; uniform float iStill; uniform bool iFresh;", "uniform int iFrame; uniform int iRepeat; uniform int iPointerCount;", "uniform vec4 iPointer[4]; uniform vec4 iPointerInfo[4]; uniform sampler2D iScene;", ...Ps, `int wrap(float x) { float m = abs(trunc(x)); m = m - floor(m * ${Q(23283064365386963e-26)}) * 4294967296.; return x < 0. ? 0 - int(uint(m)) : int(uint(m)); }`, "vec4 texel(sampler2D s, vec2 c) { ivec2 last = textureSize(s, 0) - 1; return texelFetch(s, clamp(ivec2(clamp(c, vec2(0), vec2(last))), ivec2(0), last), 0); }"], $t = /* @__PURE__ */ new Map([["add", "+"], ["sub", "-"], ["mul", "*"], ["lt", "<"], ["le", "<="], ["eq", "=="]]), Ns = /* @__PURE__ */ new Map([["dx", "dFdx"], ["dy", "dFdy"], ["fwidth", "fwidth"]]);
class Lt {
  shader;
  lines = [];
  samplers = /* @__PURE__ */ new Map([[-1, "iScene"]]);
  head;
  constructor(e) {
    this.shader = e;
    e.passes.forEach((t, s) => {
      if (t.kind === "buffer" || t.kind === "table") this.samplers.set(s, `b${this.samplers.size - 1}`);
    }), this.head = [...Ts, ...[...this.samplers.values()].slice(1).map((t) => `uniform sampler2D ${t};`), ...e.values.map((t, s) => `uniform float v${s};`)].join(`
`);
  }
  name(e) {
    return e <= this.shader.pool.length ? Q(this.shader.pool[e - 1]) : `t${e}`;
  }
  program(e, { stage: t, body: s, bounds: n }) {
    let [r = "", a, i, l, c] = s.out.map((f) => this.name(f)), p = (f, u) => `clamp(${f}, ${Ot(u?.lo ?? [])}, ${Ot(u?.hi ?? [])})`;
    return this.lines = [this.head, t === "place" ? "void mainVertex(out vec4 position, out vec4 a, out vec4 b) {" : e.place ? `void mainImage(out vec4 color, vec4 a, vec4 b) {
a = ${p("fin(a)", e.place.bounds[0])}; b = ${p("fin(b)", e.place.bounds[1])};` : "void mainImage(out vec4 color, in vec2 pixel) {", "vec2 S = clamp(iScreen, 1., 16384.), R = clamp(iResolution.xy, 1., 4096.);", t === "place" ? "" : "vec2 P = clamp(gl_FragCoord.xy, vec2(.5), R - .5);"], this.body(e, s), this.lines.push(t === "place" ? `position = ${r} ? vec4(clamp(${a}, -1e6, 1e6), 0, 1) : vec4(0, 0, 1e6, 1); gl_PointSize = clamp(${i}, 1., 64.); a = ${r} ? ${l} : vec4(0); b = ${r} ? ${c} : vec4(0);` : `color = ${p(r, n[0])};`, "}"), this.lines.join(`
`);
  }
  body(e, t) {
    for (let s of t.nodes) {
      let [n, r] = s.blocks, a = (l) => Ce[this.shader.types[s.slot + l]], i = (l, c) => {
        this.lines.push(c), this.body(e, l), l.out.forEach((p, f) => this.lines.push(`t${s.slot + f} = ${this.name(p)};`)), this.lines.push("}");
      };
      if (!n) {
        let l = this.expression(e, s), c = s.code > Ne, p = !(s.guards & 2) ? l : c ? `clamp(fin(${l}), -65504., 65504.)` : `clamp(${l}, -1e18, 1e18)`;
        this.lines.push(`${a(0)} t${s.slot} = ${p};`);
      } else if (!r) {
        let l = `n${s.inner}`;
        s.args.forEach((c, p) => this.lines.push(`${a(p)} t${s.slot + p} = ${this.name(c)};`)), i(n, [`for (int ${l} = 0; ${l} < ${s.number}; ${l}++) {`, `float t${s.inner} = float(${l});`, ...s.args.map((c, p) => `${a(p)} t${s.inner + 1 + p} = t${s.slot + p};`)].join(`
`));
      } else {
        if (n.out.forEach((l, c) => this.lines.push(`${a(c)} t${s.slot + c};`)), s.may & 1) i(n, s.may & 2 ? `if (${this.name(s.args[0])}) {` : "{");
        if (s.may & 2) i(r, s.may & 1 ? "else {" : "{");
      }
    }
  }
  expression(e, t) {
    let { op: s, type: n } = t, r = Ce[n], a = t.args.map((y) => this.name(y)), [i, l, c] = a.map((y, b) => this.shader.types[t.args[b]] === 1 && n > 1 && n <= 4 && t.code < ie ? `${r}(${y})` : y), p = (t.guards & 1) > 0, f = (y, b) => p ? b : y, u = this.samplers.get(t.number), o = n === 5;
    switch (s) {
      case "input":
        return Ke.get(t.input).glsl.replace("TURNS", String(e.repeat - 1));
      case "value": {
        let [y, b] = this.shader.values[t.number];
        return `clamp(v${t.number}, ${Q(y)}, ${Q(b)})`;
      }
      case "int":
        return `int(${t.number >>> 0}u)`;
      case "pointer": {
        let y = `clamp(int(clamp(${i}, 0., 3.)), 0, 3)`;
        return t.number ? `clamp(iPointerInfo[${y}], vec4(0), vec4(1e6, 1, 1, 1e6))` : `clamp(iPointer[${y}], -4., 5.)`;
      }
      case "swizzle":
        return this.shader.types[t.args[0]] === 1 ? `${r}(${i})` : `${i}.${t.lanes.map((y) => "xyzw"[y]).join("")}`;
      case "vector":
        return `${r}(${a.join(", ")})`;
      case "at":
        return `texel(${u}, ${i})`;
      case "size":
        return `vec2(textureSize(${u}, 0))`;
      case "sample":
        return `textureLod(${u}, ${f(i, `clamp(${i}, -65536., 65536.)`)}, clamp(${l}, 0., 12.))`;
      case "row": {
        let y = "xyzw"[t.lanes[0] ?? 0];
        return n === 6 ? `(int(texel(${u}, vec2(${i}, 0)).${y}) | int(texel(${u}, vec2(${i}, 1)).${y}) << 16)` : `texel(${u}, vec2(${i}, 0)).${"xyzw".slice(0, n)}`;
      }
      case "div":
        return `(${i} / ${f(l, `nz(${l})`)})`;
      case "neg":
        return `(-${i})`;
      case "sqrt":
        return `sqrt(${f(i, `max(${i}, 0.)`)})`;
      case "sin":
      case "cos":
        return `${s}(${f(i, `turn(${i})`)})`;
      case "exp":
        return `exp(${f(i, `min(${i}, 41.)`)})`;
      case "log":
        return `log(${f(i, `max(${i}, 1e-30)`)})`;
      case "tanh":
        return `tanh(${f(i, `clamp(${i}, -15., 15.)`)})`;
      case "mod":
      case "rem":
      case "quot":
        return `${s === "quot" ? s : `f${s}`}(${i}, ${l}, ${f(l, `nz(${l})`)}, ${r}(${t.isExact ? ".5" : "0"}))`;
      case "pow":
        return f(`pow(${i}, ${l})`, `exp2(min(${l} * log2(max(${i}, 1e-30)), 59.))`);
      case "atan":
        return `atan(${i}, ${f(l, `nz(${l})`)})`;
      case "clamp":
        return `min(max(${i}, ${l}), ${c})`;
      case "smoothstep":
        return `ease(${c}, ${i}, ${f(`${l} - ${i}`, `nz(${l} - ${i})`)})`;
      case "dx":
      case "dy":
      case "fwidth": {
        let y = `${Ns.get(s)}(${i})`, b = Q(t.bound);
        return f(y, `clamp(fin(${y}), ${s === "fwidth" ? "0." : `-${b}`}, ${b})`);
      }
      case "normalize":
        return f(`normalize(${i})`, `(${i} * inversesqrt(max(dot(${i}, ${i}), 1e-36)))`);
      case "and":
        return `(${i} ${o ? "&&" : "&"} ${l})`;
      case "or":
        return `(${i} ${o ? "||" : "|"} ${l})`;
      case "xor":
        return `(${i} ${o ? "!=" : "^"} ${l})`;
      case "not":
        return `(${o ? "!" : "~"}${i})`;
      case "shl":
        return `(${i} << (${l} & 31))`;
      case "shr":
        return `(${i} >> (${l} & 31))`;
      case "ushr":
        return `int(uint(${i}) >> uint(${l} & 31))`;
      case "toInt":
        return `${f("int", "wrap")}(${i})`;
      case "signed":
        return `float(${i})`;
      case "unsigned":
        return `float(uint(${i}))`;
      case "select":
        return `(${i} ? ${l} : ${c})`;
      default:
        return $t.has(s) ? `(${i} ${$t.get(s)} ${l})` : `${s}(${[i, l, c].slice(0, a.length).join(", ")})`;
    }
  }
}
function Ls(e) {
  let t = new Lt(e), s = e.passes.map((n, r) => {
    let { kind: a, size: i, scale: l, float: c, filter: p, wrap: f, place: u, color: o } = n, y = t.samplers.get(r), b = o && t.program(n, o), m = new Set(ve([n]).flatMap((v) => [...v.textures])), g = Array.from(m, (v) => t.samplers.get(v));
    if (u) {
      let { draw: v, count: h, instances: w, cover: S, blend: x, clear: E } = n, k = t.program(n, u);
      return { into: n.into < 0 ? "scene" : t.samplers.get(n.into), ...{ draw: v, count: h, instances: w, cover: S, blend: x, clear: E }, vertex: k, glsl: b, samples: g };
    }
    if (a === "table") {
      let v = Array.from({ length: n.data.length / n.lanes * 4 }, (x, E) => E % 4 < n.lanes ? n.data[(E >> 2) * n.lanes + E % 4] : 0), h = n.isInt ? [...v.map((x) => x & 65535), ...v.map((x) => x >>> 16)] : v, { lanes: w, isInt: S } = n;
      return { id: y, size: i, float: c, filter: "nearest", data: h, lanes: w, isInt: S };
    }
    return a === "picture" ? { glsl: b, samples: g } : { id: y, ...i && { size: i }, ...l && { scale: l }, ...c && { float: c }, ...p && { filter: p }, ...f && { wrap: f }, ...b && { glsl: b, samples: g, repeat: n.repeat, once: n.once } };
  });
  return { fps: e.fps, passes: s, values: Object.fromEntries(e.values.map(([n, r], a) => [`v${a}`, Math.min(Math.max(0, n), r)])) };
}
class X extends Error {
  line;
  constructor(e, t) {
    super(e);
    this.line = t;
  }
}
var nt = "claude-code/shader", rt = 200, Ds = 256, tt = `this nests more than ${rt} deep: move some of it into consts or functions`, Se = `a shader imports from "${nt}" alone: write the rest in this file`, Dt = /\/\/.*|\/\*[^]*?(?:\*\/|$)|(['"`])(?:(?!\1)[^\\]|\\[^])*\1?|\.?\d[\w.]*|([\p{ID_Start}$_][\p{ID_Continue}$]*)|[()[\]{}]/gu, we = /\$(\d+)$/, _t = new Set(`abstract accessor as asserts async await break case catch class const continue
debugger declare default delete do else enum export extends false finally for from
function get global if implements import in infer instanceof interface is keyof let
module namespace new null of out override package private protected public readonly
return satisfies set static super switch this throw true try type typeof unique using
var void while with yield`.split(/\s/)), Ft = "loop with for, from a known start to a known end, and break early", st = /* @__PURE__ */ new Map([["WhileStatement", `while is not allowed: ${Ft}`], ["DoWhileStatement", `do is not allowed: ${Ft}`], ["ForInStatement", "for...in is not allowed: use for...of over a list"], ["ClassDeclaration", "classes are not allowed: use records and functions"], ["ClassExpression", "classes are not allowed: use records and functions"], ["NewExpression", "new is not allowed: use vec2, a list or a record"], ["AwaitExpression", "async is not allowed: a shader waits for nothing"], ["YieldExpression", "generators are not allowed: use a list"], ["SpreadElement", "spread is not allowed: write the parts out"], ["RestElement", "spread is not allowed: write the parts out"], ["TemplateLiteral", "a string is not a value here: use numbers"], ["TaggedTemplateExpression", "a string is not a value here: use numbers"], ["SwitchStatement", "switch is not allowed: branch with if"], ["TryStatement", "try is not allowed: nothing in a shader throws"], ["ThrowStatement", "throw is not allowed: return a value"], ["LabeledStatement", "labels are not allowed: return from a function"], ["ThisExpression", "this is not allowed: pass the record as a parameter"], ["ChainExpression", "?. is not allowed: every record has a known shape"], ["ImportExpression", Se], ["MetaProperty", Se], ["ExportAllDeclaration", Se], ["DebuggerStatement", "debugger is not allowed: take it out"]]);
function Vt(e, t) {
  let s = [], [n, r, a, i] = [1, 0, 0, 0];
  if (Buffer.byteLength(t) > D.sourceBytes) throw new X(`a shader's source is at most ${D.sourceBytes} bytes`, 1);
  let l = t.replace(Dt, (m, g, v, h) => {
    for (; r < h; r++) n += t[r] === `
` ? 1 : 0;
    a += "([{".includes(m) ? 1 : ")]}".includes(m) ? -1 : 0;
    let w = g !== void 0 && /^(from|import)$/.test(s.at(-1)?.word ?? "") && t.slice(i, h).trim() === "";
    if (a > rt) throw new X(tt, n);
    else if (w && m.slice(1, -1) !== nt) throw new X(Se, n);
    else if (v === void 0) return m;
    i = h + m.length;
    let S = s.push({ word: m, line: n }) - 1;
    return _t.has(m) ? m : `${m}$${S}`;
  }), c = [], p, f = l;
  try {
    f = (0, import_chunk_p9da7c9y.jlt)(e, l), p = (0, import_chunk_f9mxtmjz.VGt)().parse(f, { sourceType: "module", onToken: ({ start: m, end: g }) => {
      c.push({ start: m, text: f.slice(m, g) });
    } });
  } catch (m) {
    let g = (0, import_chunk_jv7av99m.d)(m), [, v = 1] = /\((?:line )?(\d+)[,:]/.exec(g) ?? [], h = m instanceof RangeError, w = h ? 1 / 0 : f !== l && m instanceof SyntaxError && "pos" in m ? Number(m.pos) : -1, S = c.findLast(({ start: A, text: O }) => A <= w && we.test(O)), [x = ""] = h ? f.slice(c.at(-1)?.start).split(`
`, 1) : [], E = Array.from(x.matchAll(Dt)).find(([, , A]) => we.test(A ?? "")), [, k] = we.exec(E?.[0] ?? S?.text ?? "") ?? [];
    throw new X(/call stack/.test(g) ? tt : `this does not parse: ${g.replace(/\$\d+(?![\p{ID_Continue}$])| \((line [^)]*|\d+:\d+)\)/gu, "")}`, s[Number(k)]?.line ?? Number(v));
  }
  let u = [], o = s.length;
  for (let { start: m, text: g } of c.reverse()) {
    let [, v] = we.exec(g) ?? [], h = v === void 0 ? o - 1 : Number(v);
    while (v === void 0 && _t.has(g) && h >= Math.max(0, o - Ds) && s[h]?.word !== g) h--;
    let w = s[h];
    if (w && (v !== void 0 || w.word === g)) u.push({ start: m, line: w.line }), o = h;
  }
  u.reverse();
  function y(m) {
    let [g, v] = [0, u.length];
    while (g < v) {
      let w = g + v >> 1;
      [g, v] = (u[w]?.start ?? 0) < m.start ? [w + 1, v] : [g, w];
    }
    let h = (u[g]?.start ?? 1 / 0) < m.end;
    return u[h ? g : g - 1]?.line ?? 1;
  }
  let b = /* @__PURE__ */ new Map();
  return (0, import_chunk_sps8tde9.FS)(p, ({ node: m, parent: g }) => {
    let v = (b.get(g) ?? 0) + 1, h = "source" in m && m.source?.type === "Literal" && (m.source.value !== nt || m.type !== "ImportDeclaration"), w = st.get(m.type) ?? (h ? Se : v > rt * 2 ? tt : "async" in m && m.async || "await" in m && m.await ? st.get("AwaitExpression") : "generator" in m && m.generator ? st.get("YieldExpression") : m.type === "VariableDeclaration" && !/^(const|let)$/.test(m.kind) ? `${m.kind} is not allowed: use const or let` : void 0);
    if (w !== void 0) throw new X(w, y(m));
    if (b.set(m, v), m.type === "Identifier") m.name = m.name.replace(we, "");
  }), { program: p, lineOf: y };
}
var zt = 3e6, _s = D.stepsAProgram * 8, Fs = 1500, Ct = 16, Ut = 1024, Vs = 4, Bt = 4096, it = `this is over ${D.stepsAProgram} steps once every call is inlined: call less, or move repeated work into a for loop`, le = "a for loop needs its start, end and step known while reading, as in for (let i = 0; i < 8; i++), or an end of pointerCount: loop to a fixed end and break early", Ht = "a for loop's counter is set by the loop", at = "a string is not a value here: use numbers", zs = /* @__PURE__ */ new Map([["add", (e, t) => e + t], ["sub", (e, t) => e - t], ["mul", (e, t) => e * t], ["div", (e, t) => e / t], ["neg", (e) => -e], ["abs", Math.abs], ["sign", Math.sign], ["floor", Math.floor], ["trunc", Math.trunc], ["fract", (e) => e - Math.floor(e)], ["sqrt", Math.sqrt], ["sin", Math.sin], ["cos", Math.cos], ["exp", Math.exp], ["log", Math.log], ["tanh", Math.tanh], ["min", (e, t) => Math.min(e, t)], ["max", (e, t) => Math.max(e, t)], ["step", (e, t) => t < e ? 0 : 1], ["mod", (e, t) => e - t * Math.floor(e / t)], ["quot", (e, t) => Math.trunc(e / t)], ["rem", (e, t) => e % t], ["pow", (e, t) => e < 0 && !Number.isInteger(t) ? NaN : e ** t], ["atan", (e, t) => Math.atan2(e, t)], ["mix", (e, t, s) => e * (1 - s) + t * s], ["clamp", (e, t, s) => Math.min(Math.max(e, t), s)], ["and", (e, t) => e & t], ["or", (e, t) => e | t], ["xor", (e, t) => e ^ t], ["shl", (e, t) => e << t], ["shr", (e, t) => e >> t], ["ushr", (e, t) => e >>> t]]), Cs = new Map("+ add,- sub,* mul,/ div,% rem,** pow,& and,| or,^ xor,<< shl,>> shr,>>> ushr".split(",").map((e) => e.split(" ")).map(([e, t = ""]) => [e, t])), qt = new Map(["abs sign floor trunc fract sqrt sin cos exp log tanh normalize length dx dy fwidth", "dot min max mod quot pow step atan", "mix clamp smoothstep"].flatMap((e, t) => e.split(" ").map((s) => [s, t + 1]))), Gt = "time dt frame fresh turn still size res px composer pixel vertex instance coord pointerCount".split(" "), Us = /* @__PURE__ */ new Set([...qt.keys(), ...Gt, ..."PI first vec2 vec3 vec4 int signed unsigned pointer pointers values range box table scene buffer picture shapes shader".split(" ")]), Bs = /^(Box|Buffer|Pass|Pixel|Pointer|Scene|Spot)$/, Hs = /* @__PURE__ */ new Map([["buffer", "scale size float filter wrap repeat once"], ["shapes", "count instances cover draw into blend clear"], ["shader", "fps passes"], ["place", "at size a b hide"]]), Le = ["", "number", "vec2", "vec3", "vec4", "boolean", "int"];
function P(e, t) {
  return typeof e === "object" && e.is === t;
}
function V(e) {
  return typeof e === "number" ? 1 : typeof e === "boolean" ? H : P(e, "ref") ? e.type : 0;
}
function ot(e) {
  return typeof e === "number" ? [e] : P(e, "ref") ? e.known : void 0;
}
class jt {
  parsed;
  serial = 1;
  line = 1;
  top = { steps: [], out: [], seen: /* @__PURE__ */ new Map() };
  scene = this.pass("scene", []);
  tables = /* @__PURE__ */ new Map();
  active = /* @__PURE__ */ new Set();
  leaves = /* @__PURE__ */ new Map();
  spans = [];
  valueNames = [];
  pool = /* @__PURE__ */ new Map();
  arm = this.top;
  journal;
  flow = { done: this.cell(false), result: this.cell(void 0) };
  frozen = 0;
  sealed;
  work = 0;
  made = 0;
  deep = 0;
  constructor(e) {
    this.parsed = e;
  }
  refuse(e) {
    throw new X(e, this.line);
  }
  must(e, t) {
    if (!e) this.refuse(t);
  }
  deeper(e) {
    this.must(++this.work <= zt, it), this.must(++this.deep <= Fs, "calls and branches nest too deep here: flatten them");
    let t = e();
    return this.deep--, t;
  }
  alwaysLeaves(e) {
    let t = !!e && (this.leaves.get(e) ?? (e.type === "BlockStatement" ? e.body.some((s) => this.alwaysLeaves(s)) : e.type === "IfStatement" ? this.alwaysLeaves(e.consequent) && this.alwaysLeaves(e.alternate) : /^(Return|Break|Continue)Statement$/.test(e.type)));
    if (e) this.leaves.set(e, t);
    return t;
  }
  cell(e, t) {
    return { value: e, serial: this.serial++, isTop: false, fixed: t };
  }
  pass(e, t) {
    let { line: s } = this;
    return { is: "pass", kind: e, id: this.serial++, line: s, name: "", given: t };
  }
  list(e) {
    return { is: "list", cells: e.map((s) => this.cell(s)), serial: this.serial };
  }
  record(e) {
    let t = Array.from(e, ([s, n]) => [s, this.cell(n)]);
    return { is: "record", cells: new Map(t), serial: this.serial };
  }
  write(e, t) {
    let { journal: s, sealed: n } = this;
    if (this.must(e.serial >= this.frozen && !(e.isTop && this.active.size > 0), "a function cannot set a top-level variable: declare it inside the pass, or pass a box"), n && e.serial < n.since) this.line = n.line, this.refuse("a for loop's step and its end may write nothing but the counter");
    if (s && e.serial < s.since && !s.before.has(e)) s.before.set(e, e.value);
    e.value = t;
  }
  ref(e, t) {
    return { is: "ref", id: this.serial++, type: e, from: t };
  }
  add(e, t, s) {
    let { line: n } = this, r = { op: e, args: t, gives: s, line: n, tail: [], arms: [], inner: [] };
    return this.must(++this.made <= _s, it), this.must(t.every((a) => typeof a !== "number" || Math.abs(a) <= 1e18), "a number is not finite, or is past 1e18"), this.arm.steps.push(r), s.forEach((a) => a.from = r), r;
  }
  step(e, t, s, n, r = []) {
    let a = s.map((c) => P(c, "ref") ? `#${c.id}` : c), i = `${e} ${P(n, "pass") ? n.id : n} ${a} ${r}`;
    for (let c = this.arm; c; c = c.parent) {
      let p = c.seen.get(i);
      if (p) return p;
    }
    let l = this.ref(t);
    return Object.assign(this.add(e, s, [l]), { head: n, tail: r }), this.arm.seen.set(i, l), l;
  }
  input(e) {
    return this.step("input", Ze(e) ?? 1, [], e);
  }
  cast(e, t) {
    let s = V(e);
    if (this.must(typeof e !== "string", at), this.must(s > 0, e === void 0 ? "this has no value here" : "this is not a number, vector or boolean"), typeof e === "boolean") return t === H ? this.step(e ? "le" : "lt", H, [0, 0]) : this.cast(Number(e), t);
    else if (typeof e === "number" && t === C) return this.must(Number.isInteger(e), "an int is whole: write int(x)"), this.step("int", C, [], e | 0);
    else if (typeof e === "number" && t !== H) return t === 1 ? e : this.vector(t, [e]);
    else if (P(e, "ref") && s === H && t === 1) return this.step("select", 1, [e, 1, 0]);
    return this.must(P(e, "ref") && s === t, s === C || t === C ? "an int and a number do not mix: write int(x), signed(i) or unsigned(i)" : `this is a ${Le[s]} where a ${Le[t]} is needed`), e;
  }
  float(e) {
    let t = V(e);
    return this.cast(e, t === H || t === C ? 1 : t);
  }
  vector(e, t) {
    let s = t.map((c) => this.float(c)), n = s.reduce((c, p) => c + V(p), 0), r = s.flatMap((c) => ot(c) ?? []), [a] = s;
    if (this.must(n === e || n === 1, `vec${e} is given ${n} lanes: give it ${e}, or one number`), a !== void 0 && V(a) === e) return a;
    let i = r.length === n, l = this.step("vector", e, i ? r : s, e);
    return l.parts = n === 1 ? Array(e).fill(a) : s, l.known = !i ? void 0 : n === 1 ? Array(e).fill(r[0]) : r, l;
  }
  swizzle(e, t) {
    let { known: s, parts: n = [] } = e, [r = 0] = t;
    if (s) {
      let a = t.map((i) => s[i] ?? 0);
      return t.length > 1 ? this.vector(t.length, a) : a[0];
    }
    for (let a of t.length > 1 ? [] : n) {
      if (r < V(a)) return P(a, "ref") && a.type > 1 ? this.swizzle(a, [r]) : a;
      r -= V(a);
    }
    return t.length === e.type && t.every((a, i) => a === i) ? e : this.step("swizzle", t.length, [e], void 0, t);
  }
  lanesNamed(e, t) {
    let s = "xyzw".includes(t[0] ?? "") ? "xyzw" : "rgba", n = [...t].map((r) => s.indexOf(r));
    return this.must(e.type > 1 && e.type <= 4 && n.length <= 4 && n.every((r) => r >= 0 && r < e.type), `a ${Le[e.type]} has no .${t}`), n;
  }
  math(e, t) {
    let s = /^(and|or|xor|shl|shr|ushr|not)$/.test(e);
    if (t.some((u) => V(u) === C) && (s || /^(add|sub|mul|lt|le|eq)$/.test(e))) {
      let u = t.map((o) => s ? this.int(o) : this.cast(o, C));
      return this.step(e, Me(e, u.map(V)) ?? C, u);
    }
    let r = t.map((u) => this.float(u)), a = s ? 1 : Me(e, r.map(V)), i = r.flatMap((u) => {
      let o = ot(u);
      return o ? [o] : [];
    }), l = i.length === r.length ? zs.get(e) : void 0, [c = 0, p] = r;
    this.must(a, `${e} cannot take ${r.map((u) => Le[V(u)]).join(" and ")}: match the widths, or pick a lane`);
    let f = Array.from({ length: l ? a : 0 }, (u, o) => {
      let [y = 0, b = 0, m = 0] = i.map((S) => S[o % S.length]), g = l?.(y, b, m) ?? NaN, [v, h, w] = Float32Array.of(y, b, m);
      return [y, b, m, g].every(Number.isInteger) ? g : Math.fround(l?.(v, h, w) ?? NaN);
    });
    if (l && f.every((u) => Math.abs(u) <= 1e18)) return a === 1 ? f[0] : this.vector(a, f);
    else if (s) {
      let u = this.step(e, C, r.map((o) => this.int(o)));
      return this.step(e === "ushr" ? "unsigned" : "signed", 1, [u]);
    } else if (e === "pow" && (p === 2 || p === 3 || p === 4)) {
      let u = this.math("mul", [c, c]);
      return p === 2 ? u : this.math("mul", [u, p === 3 ? c : u]);
    } else if (e === "div" && typeof p === "number" && Math.log2(p) % 1 === 0) return this.math("mul", [c, 1 / p]);
    else if (p === (e === "mul" ? 1 : /^(add|sub)$/.test(e) ? 0 : NaN)) return c;
    else if (c === (e === "mul" ? 1 : e === "add" ? 0 : NaN)) return p;
    return this.step(e, a, r);
  }
  int(e) {
    return V(e) === C ? this.cast(e, C) : typeof e === "number" ? this.cast(e | 0, C) : this.step("toInt", C, [this.cast(e, 1)]);
  }
  truth(e) {
    let t = V(e);
    return this.must(typeof e !== "string", at), this.must(t < 2 || t > 4, "a vector is not a test: compare a lane"), !P(e, "ref") ? Boolean(e) : t === H ? e : this.not(this.compare("eq", e, 0));
  }
  not(e) {
    let [t] = P(e, "ref") ? e.from?.args ?? [] : [];
    return typeof e === "boolean" ? !e : e.from?.op === "not" && P(t, "ref") ? t : this.step("not", H, [e]);
  }
  logic(e, t, s) {
    if (typeof t === "boolean" || t === s) return t === (e === "or") ? t : s;
    return typeof s === "boolean" ? this.logic(e, s, t) : this.step(e, H, [t, s]);
  }
  compare(e, t, s) {
    if (this.must(typeof t !== "string" && typeof s !== "string", at), e === "eq" && (V(t) === 0 || V(s) === 0)) return t === s;
    else if (!P(t, "ref") && !P(s, "ref")) {
      let r = [this.number(this.cast(t, 1)), this.number(this.cast(s, 1))], [a = 0, i = 0] = r.every(Number.isInteger) ? r : r.map(Math.fround);
      return e === "eq" ? a === i : e === "lt" ? a < i : a <= i;
    }
    let n = this.math(e, [t, s]);
    return P(n, "ref") ? n : Boolean(n);
  }
  mapped(e, t, s = 0) {
    let n = (r) => this.mapped(r.value, t, s);
    return this.deeper(() => P(e, "list") && e.serial >= s ? this.list(e.cells.map(n)) : P(e, "record") && e.serial >= s ? this.record(Array.from(e.cells, ([r, a]) => [r, n(a)])) : t(e));
  }
  merged(e, t, s, n = []) {
    let r = (...c) => {
      let [p, f] = c.map((u, o) => u && n[o]?.has(u) ? n[o].get(u) : u?.value);
      return this.deeper(() => this.merged(p, f, s, n));
    };
    if (e === t) return e;
    else if (e === void 0 || t === void 0) {
      let c = this.mapped(e ?? t, (p) => V(p) === H ? false : V(p) ? 0 : p);
      return this.merged(e ?? c, t ?? c, s, n);
    } else if (P(e, "list") && P(t, "list")) return this.must(e.cells.length === t.cells.length, "these lists differ in length, which must be known while reading"), this.list(e.cells.map((c, p) => r(c, t.cells[p])));
    else if (P(e, "record") && P(t, "record")) return this.record(Array.from(new Map([...e.cells, ...t.cells]).keys(), (c) => [c, r(e.cells.get(c), t.cells.get(c))]));
    let [a, i] = [V(e), V(t)];
    return this.must(a && i, "which function, pass or shape of value this is must be known while reading"), s(e, t, typeof e === "number" && i !== H ? i : typeof t === "number" && a !== H ? a : a === H ? i : a);
  }
  chosen(e, t, s) {
    return typeof e === "boolean" ? e ? t : s : this.merged(t, s, (n, r, a) => this.select(e, n, r, a));
  }
  select(e, t, s, n) {
    if (n === H && typeof t === "boolean") {
      let r = this.truth(s);
      return t ? this.logic("or", e, r) : this.logic("and", this.not(e), r);
    } else if (n === H && typeof s === "boolean") return s ? this.logic("or", this.not(e), this.truth(t)) : this.logic("and", e, this.truth(t));
    return this.step("select", n, [e, this.cast(t, n), this.cast(s, n)]);
  }
  inside(e) {
    let { arm: t, journal: s } = this, n = { steps: [], out: [], seen: /* @__PURE__ */ new Map(), parent: t }, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
    this.arm = n, this.journal = { since: this.serial, before: r }, this.deeper(e), this.arm = t, this.journal = s;
    for (let [i, l] of r) a.set(i, i.value), i.value = l;
    return { arm: n, wrote: a };
  }
  handed(e, t, s) {
    let n = this.arm;
    this.arm = e, this.must(e.out.push(this.cast(t, s)) <= Bt, `a branch or loop changes more than ${Bt} values, read or not`), this.arm = n;
  }
  branch(e, t, s) {
    if (typeof e === "boolean") return e ? t() : s();
    let { line: n } = this, [r, a] = [this.inside(t), this.inside(s)], i = [...r.arm.steps, ...a.arm.steps], l = [], c = i.length <= Vs && i.every(({ op: y }) => !/^(if|loop|at|sample|row)$/.test(y));
    if (this.line = n, c) this.arm.steps.push(...i);
    let p = (y, b, m) => {
      if (c || typeof y === "boolean" && typeof b === "boolean") return this.select(e, y, b, m);
      return this.handed(r.arm, y, m), this.handed(a.arm, b, m), l[l.push(this.ref(m)) - 1];
    }, f = (0, import_chunk_4smdap7r.M)([...r.wrote.keys(), ...a.wrote.keys()]), u = { is: "list", cells: f, serial: 0 }, o = this.merged(u, { ...u }, p, [r.wrote, a.wrote]);
    if (f.forEach((y, b) => this.write(y, this.entry(o, b))), l.length > 0) this.add("if", [e], l).arms = [r.arm, a.arm];
  }
  loop(e, t) {
    let s = /* @__PURE__ */ new Map(), { line: n, made: r } = this;
    for (; ; ) {
      let a = [this.ref(1)], i = [], l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = this.serial, f = true;
      this.made = r, this.work += 50;
      for (let [b, m] of s) {
        let g = this.merged(b.value, m, (v, h, w) => (i.push(this.cast(v, w)), a[a.push(this.ref(w)) - 1]));
        c.set(b, g);
      }
      let { arm: u, wrote: o } = this.inside(() => {
        for (let [b, m] of c) this.write(b, this.mapped(m, (g) => g, p));
        t(a[0]);
      }), y = new Set(a);
      this.line = n;
      for (let [b, m] of o) {
        let g = c.has(b) ? c.get(b) : b.value, v = (w, S, x) => {
          let E = y.has(w) && V(w) === x;
          return l.set(w, S), f &&= E, E ? w : this.ref(x);
        }, h = this.merged(g, m, v, [/* @__PURE__ */ new Map(), o]);
        if (m !== g) s.set(b, h);
      }
      if (f) {
        let b = /* @__PURE__ */ new Map();
        for (let g of a.slice(1)) this.handed(u, l.has(g) ? l.get(g) : g, g.type), b.set(g, this.ref(g.type));
        let m = this.add("loop", i, [...b.values()]);
        Object.assign(m, { head: e, arms: [u], inner: a }), a.forEach((g) => g.from = m);
        for (let [g, v] of c) this.write(g, this.mapped(v, (h) => b.get(h) ?? h, p));
        return;
      }
    }
  }
  left() {
    let { done: e, stop: t, skip: s } = this.flow;
    return [e, t, s].reduce((n, r) => this.logic("or", n, this.truth(r?.value)), false);
  }
  unlessLeft(e) {
    let { done: t, stop: s, skip: n } = this.flow;
    this.branch(this.left(), () => {
    }, () => {
      for (let r of [t, s, n]) if (r && r.value !== false) this.write(r, false);
      e();
    });
  }
  declare(e, t, s, n) {
    if (this.must(!e.names.has(t), `${t} is declared twice`), P(s, "pass")) s.name ||= t;
    e.names.set(t, { ...this.cell(s, n), isTop: this.active.size === 0 });
  }
  cellOf(e, t) {
    for (let s = e; s; s = s.parent) {
      let n = s.names.get(t);
      if (this.work += 0.0625, n) return n;
    }
    return this.refuse(`${t} is not declared above this use: a shader has no globals, so write it here or import it from "claude-code/shader"`);
  }
  unpack(e, t, s, n) {
    if (e.type === "AssignmentPattern") {
      let r = () => t() ?? this.value(e.right, s);
      this.unpack(e.left, r, s, n);
    } else if (e.type === "ArrayPattern") {
      let r = t();
      e.elements.forEach((a, i) => a && this.unpack(a, () => this.entry(r, i), s, n));
    } else if (e.type === "ObjectPattern") {
      let r = t();
      for (let a of e.properties) if (a.type === "Property") {
        let i = () => this.field(r, this.keyOf(a));
        this.unpack(a.value, i, s, n);
      }
    } else n(e, t);
  }
  bind(e, t, s, n) {
    this.unpack(e, () => t, s, (r, a) => {
      this.must(r.type === "Identifier", "expected a name here"), this.declare(s, r.name, a(), n);
    });
  }
  keyOf({ key: e, computed: t }) {
    let s = e.type === "Identifier" ? e.name : e.type === "Literal" ? String(e.value) : void 0;
    return this.must(!t && s !== void 0, "write this key as a name"), s;
  }
  field(e, t) {
    if (P(e, "ref")) return this.swizzle(e, this.lanesNamed(e, t));
    else if (P(e, "record")) return e.cells.get(t)?.value;
    else if (P(e, "list") && t === "length") return e.cells.length;
    else if (P(e, "list") && /^[xyzw]$/.test(t)) return this.entry(e, "xyzw".indexOf(t));
    else if (P(e, "builtin") && e.name === "pointers") return t === "length" ? this.input("pointerCount") : void 0;
    else if (P(e, "pass")) {
      let { kind: s, table: n } = e;
      if (n && t === "length") return n.data.length / n.lanes;
      else if (s === "buffer" && t === "size") return this.step("size", 2, [], e);
      else if (/^(buffer (at|sample)|scene sample|table at)$/.test(`${s} ${t}`)) return { is: "builtin", name: `.${t}`, of: e };
    }
    return this.refuse(P(e, "list") ? `a list has no .${t}: it has .length, [i] and for...of` : `this has no .${t}`);
  }
  entry(e, t) {
    let s = V(t) === C ? this.called("signed", [t]) : this.cast(t, 1);
    if (P(e, "builtin") && e.name === "pointers") return this.pointer(s);
    else if (P(e, "list") && typeof s === "number") return e.cells[s]?.value;
    else if (P(e, "list")) this.mustBeShort(e.cells.length);
    let n = P(e, "list") ? e.cells.map((r) => r.value) : P(e, "ref") && e.type > 1 && e.type <= 4 ? [0, 1, 2, 3].slice(0, e.type).map((r) => this.swizzle(e, [r])) : this.refuse("only a list or a vector is read with [i]");
    return typeof s === "number" ? n[s] : n.reduce((r, a, i) => this.chosen(this.compare("le", i, s), a, r));
  }
  isAt(e, t) {
    let s = e.type === C ? e : this.math("floor", [e]);
    return this.compare("eq", s, t);
  }
  mustBeShort(e) {
    this.must(e > 0 && e <= Ct, `a list read or written at a run-time index holds 1 to ${Ct} entries, and this has ${e}: use table(rows)`);
  }
  place(e, t) {
    if (e.type === "Identifier") return { get: () => this.value(e, t), set: (i, l) => {
      let c = this.cellOf(t, e.name);
      this.must(l || !c.fixed, c.fixed ?? ""), this.write(c, i);
    } };
    else if (e.type !== "MemberExpression") {
      let i = this.value(e, t);
      return { get: () => i, set: () => this.refuse("this cannot be set") };
    }
    let s = this.place(e.object, t), n = s.get(), r = e.computed ? this.value(e.property, t) : this.keyOf({ key: e.property, computed: false });
    return { get: () => typeof r === "string" && !e.computed ? this.field(n, r) : this.entry(n, r), set: (i) => {
      if (P(n, "list") && P(r, "ref")) this.mustBeShort(n.cells.length), n.cells.forEach((l, c) => this.write(l, this.chosen(this.isAt(r, c), i, l.value)));
      else if (P(n, "list") || P(n, "record")) {
        let l = P(n, "list") ? n.cells[Number(r)] : n.cells.get(String(r));
        this.must(l, "this cannot grow: write all its parts where it is made"), this.write(l, i);
      } else return s.set(this.withLanes(s.get(), r, i), true);
      if (s.isCopy) s.set(n);
    }, isCopy: s.isCopy || P(r, "ref") };
  }
  withLanes(e, t, s) {
    if (this.must(P(e, "ref"), "this cannot be set"), P(t, "ref")) return this.vector(e.type, this.lanesNamed(e, "xyzw".slice(0, e.type)).map((i) => this.chosen(this.isAt(t, i), this.cast(s, 1), this.swizzle(e, [i]))));
    let n = typeof t === "number" ? "xyzw"[t] ?? "?" : String(t), r = this.lanesNamed(e, n), a = this.cast(s, r.length);
    return this.vector(e.type, [0, 1, 2, 3].slice(0, e.type).map((i) => {
      let l = r.lastIndexOf(i);
      return l < 0 ? this.swizzle(e, [i]) : P(a, "ref") && a.type > 1 ? this.swizzle(a, [l]) : a;
    }));
  }
  operated(e, t, s, n = this.line) {
    let r = Cs.get(e);
    if (this.line = n, r !== void 0) return this.math(r, [t, s]);
    switch (e) {
      case "<":
        return this.compare("lt", t, s);
      case "<=":
        return this.compare("le", t, s);
      case ">":
        return this.compare("lt", s, t);
      case ">=":
        return this.compare("le", s, t);
      case "==":
      case "===":
        return this.compare("eq", t, s);
      case "!=":
      case "!==":
        return this.not(this.compare("eq", t, s));
      default:
        return this.refuse(`${e} is not allowed in a shader`);
    }
  }
  either(e, t, s) {
    let n = this.cell(void 0);
    return this.branch(e, () => this.write(n, t()), () => this.write(n, s())), n.value;
  }
  value(e, t) {
    return this.deeper(() => (this.line = this.parsed.lineOf(e), this.evaluated(e, t, this.line)));
  }
  evaluated(e, t, s) {
    switch (e.type) {
      case "Literal": {
        let { value: n } = e;
        return this.must(typeof n === "number" || typeof n === "boolean" || typeof n === "string", "this is not a value a shader holds: use numbers"), n;
      }
      case "Identifier": {
        let n = e.name === "undefined" ? void 0 : this.cellOf(t, e.name).value, r = P(n, "builtin") ? n.name : "";
        return Gt.includes(r) ? this.input(r) : r === "first" ? this.compare("lt", this.input("frame"), 1) : n;
      }
      case "ArrowFunctionExpression":
      case "FunctionExpression":
        return { is: "function", node: e, scope: t };
      case "ArrayExpression":
        return this.list(e.elements.map((n) => n ? this.value(n, t) : void 0));
      case "ObjectExpression":
        return this.record(e.properties.map((n) => (this.must(n.type === "Property" && n.kind === "init", "a record holds plain fields"), [this.keyOf(n), this.value(n.value, t)])));
      case "MemberExpression": {
        let n = this.place(e, t);
        return this.line = s, n.get();
      }
      case "CallExpression": {
        let n = this.value(e.callee, t), r = e.arguments.map((a) => this.value(a, t));
        return this.line = s, P(n, "builtin") ? this.called(n.name, r, n.of) : this.inlined(n, r);
      }
      case "UnaryExpression": {
        let n = this.value(e.argument, t), r = V(n) === C;
        return this.line = s, e.operator === "!" ? this.not(this.truth(n)) : e.operator === "-" ? this.math(r ? "sub" : "neg", r ? [0, n] : [n]) : e.operator === "~" ? this.math("xor", [n, -1]) : e.operator === "+" ? this.math("add", [n, 0]) : this.refuse(`${e.operator} is not allowed in a shader`);
      }
      case "BinaryExpression": {
        let n = this.value(e.left, t);
        return this.operated(e.operator, n, this.value(e.right, t), s);
      }
      case "LogicalExpression": {
        let n = this.value(e.left, t), r = () => this.value(e.right, t);
        if (e.operator === "??") return n ?? r();
        let a = this.truth(n), i = V(n) === H;
        return e.operator === "&&" ? this.either(a, r, () => !i && n) : this.either(a, () => i || n, r);
      }
      case "ConditionalExpression":
        return this.either(this.truth(this.value(e.test, t)), () => this.value(e.consequent, t), () => this.value(e.alternate, t));
      case "SequenceExpression":
        return e.expressions.map((n) => this.value(n, t)).at(-1);
      case "UpdateExpression": {
        let n = this.place(e.argument, t), r = n.get(), a = this.operated(e.operator[0], r, 1);
        return n.set(a), e.prefix ? a : r;
      }
      case "AssignmentExpression": {
        let { left: n, operator: r } = e, a = /Pattern$/.test(n.type) ? void 0 : this.place(n, t), i = r === "=" ? void 0 : a?.get(), l = () => this.value(e.right, t), c = r === "=" ? l() : r === "&&=" ? this.either(this.truth(i), l, () => i) : r === "||=" ? this.either(this.truth(i), () => i, l) : this.operated(r.slice(0, -1), i, l(), s);
        return this.line = s, this.unpack(n, () => c, t, (p, f) => (a ?? this.place(p, t)).set(f())), c;
      }
      default:
        return this.refuse("this is not part of the shader language");
    }
  }
  inlined(e, t, s) {
    this.must(P(e, "function"), "this is not a function");
    let { node: n } = e, { flow: r } = this, a = { names: /* @__PURE__ */ new Map(), parent: e.scope };
    if (this.must(!this.active.has(n), "recursion is not allowed: a function cannot call itself, so loop with for"), this.active.add(n), this.flow = { done: this.cell(false), result: this.cell(void 0), shape: s }, n.params.forEach((l, c) => this.bind(l, t[c], a)), n.body.type === "BlockStatement") this.statements(n.body.body, { names: /* @__PURE__ */ new Map(), parent: a });
    else this.returned(this.value(n.body, a));
    let { value: i } = this.flow.result;
    return this.flow = r, this.active.delete(n), i;
  }
  returned(e) {
    let { done: t, result: s, shape: n } = this.flow;
    this.write(s, n ? n(e) : e), this.write(t, true);
  }
  pointer(e) {
    let t = this.step("pointer", 4, [this.cast(e, 1)], 0), s = this.step("pointer", 4, [this.cast(e, 1)], 1), n = this.input("size");
    return this.record([["where", t], ["info", s], ["at", this.math("mul", [this.swizzle(t, [0, 1]), n])], ["was", this.math("mul", [this.swizzle(t, [2, 3]), n])], ...["age", "down", "over", "gone"].map((r, a) => [r, this.swizzle(s, [a])])]);
  }
  numbers(e) {
    let t = P(e, "list") ? e.cells.map((s) => this.number(s.value)) : ot(e);
    return this.must(t, "these numbers must be known while reading"), t;
  }
  number(e) {
    let s = P(e, "ref") && e.from?.op === "int" ? e.from?.head : e;
    return this.must(typeof s === "number", "this number must be known while reading"), s;
  }
  called(e, t, s) {
    let [n, r] = t, a = qt.get(e);
    if (a !== void 0) {
      let i = e === "atan" && t.length === 1 ? [n, 1] : t;
      return this.must(i.length === a, `${e} takes ${a} arguments`), this.math(e, i);
    } else if (s?.table) {
      let { lanes: i, isInt: l } = s.table, c = [this.cast(n, 1)], p = [0, 1, 2, 3].slice(0, l ? i : 0).map((f) => this.step("row", C, c, s, [f]));
      return !l ? this.step("row", i, c, s) : i > 1 ? this.list(p) : p[0];
    }
    switch (e) {
      case "vec2":
      case "vec3":
      case "vec4":
        return this.vector(Number(e[3]), t);
      case "int":
        return this.int(n);
      case "signed":
      case "unsigned":
        return this.step(e, 1, [this.cast(n, C)]);
      case "pointer":
        return this.pointer(n);
      case "box":
        return this.record([["v", n]]);
      case ".at":
        return this.step("at", 4, [this.cast(n, 2)], s);
      case ".sample": {
        let i = this.cast(r ?? 0, 1);
        return this.step("sample", 4, [this.cast(n, 2), i], s);
      }
      case "range": {
        let i = r === void 0 ? 0 : this.number(n), l = this.number(r ?? n), c = Math.max(0, Math.ceil(l - i));
        return this.must(c <= Ut, `range gives at most ${Ut}`), this.work += c, this.list(Array.from({ length: c }, (p, f) => i + f));
      }
      case "table": {
        this.must(P(n, "list"), "table takes a written list of rows"), this.must(r === void 0 || r === "int", "table's kind is 'int', or left out");
        let i = n.cells.map(({ value: o }) => V(o) === C ? [this.number(o)] : this.numbers(o)), l = i[0]?.length ?? 0, c = r === "int", p = i.flat().map((o) => c ? o | 0 : ne(Math.fround(o))), f = `${l} ${c} ${p}`, u = this.tables.get(f) ?? { ...this.pass(e, []), table: { kind: e, lanes: l, isInt: c, data: p } };
        return this.must(l >= 1 && l <= 4 && i.every((o) => o.length === l), "a table holds rows of 1 to 4 numbers, all the same width"), this.work += p.length, this.tables.set(f, u), u;
      }
    }
    if (this.must(this.frozen === 0 && !this.sealed && this.arm === this.top, `${e} is called at the top level, outside any pass, branch or loop`), e !== "values") return this.must(/^(buffer|picture|shapes|shader)$/.test(e), "this is not a function"), this.pass(e, t);
    return this.must(P(n, "record"), "values takes { name: [low, high] }"), this.record(Array.from(n.cells, ([i, { value: l }]) => {
      let [c = NaN, p = NaN] = this.numbers(l).map((u) => ne(Math.fround(u)));
      this.must(c <= p, `${i}'s range is [low, high]`), this.must(this.valueNames.push(i) <= D.values, `values holds at most ${D.values}`);
      let f = this.spans.push([c, p]) - 1;
      return [i, this.step("value", 1, [], f)];
    }));
  }
  statements(e, t) {
    this.work += e.length;
    for (let s of e) {
      let n = s.type === "ExportNamedDeclaration" ? s.declaration : s;
      if (n?.type === "FunctionDeclaration" && n.id) {
        let r = { is: "function", node: n, scope: t };
        this.line = this.parsed.lineOf(n), this.declare(t, n.id.name, r, "a function is fixed");
      }
    }
    this.rest(e, 0, t);
  }
  rest(e, t, s) {
    for (let n = t; n < e.length; n++) {
      let r = e[n], a = () => this.rest(e, n + 1, s);
      if (this.line = this.parsed.lineOf(r), r.type === "IfStatement" && this.alwaysLeaves(r.consequent) !== this.alwaysLeaves(r.alternate)) {
        let [i, l] = [r.consequent, r.alternate].map((c) => () => {
          if (c) this.statement(c, s);
          if (!this.alwaysLeaves(c)) this.unlessLeft(a);
        });
        return this.branch(this.truth(this.value(r.test, s)), i, l);
      }
      if (this.statement(r, s), this.left() !== false) return this.unlessLeft(a);
    }
  }
  statement(e, t) {
    let s = { names: /* @__PURE__ */ new Map(), parent: t };
    switch (this.line = this.parsed.lineOf(e), this.must(++this.work <= zt, it), e.type) {
      case "EmptyStatement":
      case "FunctionDeclaration":
        return;
      case "ExportNamedDeclaration":
        return e.declaration ? this.statement(e.declaration, t) : void 0;
      case "ImportDeclaration":
        for (let n of e.specifiers) {
          let r = n.type === "ImportSpecifier" ? this.keyOf({ key: n.imported, computed: false }) : "default";
          this.must(Us.has(r) || Bs.test(r), `"claude-code/shader" has no ${r} export: import what it has by name`);
          let a = r === "PI" ? Math.PI : r === "scene" ? this.scene : { is: "builtin", name: r };
          this.declare(t, n.local.name, a, "an import is fixed");
        }
        return;
      case "ExportDefaultDeclaration":
        return this.declare(t, "default", this.value(e.declaration, t));
      case "VariableDeclaration":
        for (let { id: n, init: r } of e.declarations) {
          let a = r ? this.value(r, t) : void 0, i = e.kind === "const";
          this.bind(n, a, t, i ? "a const is fixed: use let" : "");
        }
        return;
      case "ExpressionStatement":
        return void this.value(e.expression, t);
      case "BlockStatement":
        return this.deeper(() => this.statements(e.body, s));
      case "IfStatement": {
        let { consequent: n, alternate: r } = e;
        return this.branch(this.truth(this.value(e.test, t)), () => this.statement(n, s), () => r && this.statement(r, s));
      }
      case "ReturnStatement":
        return this.returned(e.argument ? this.value(e.argument, t) : void 0);
      case "BreakStatement":
      case "ContinueStatement": {
        let { stop: n, skip: r } = this.flow, a = e.type === "BreakStatement" ? n : r;
        return this.must(a, "break and continue belong in a loop"), this.write(a, true);
      }
      case "ForStatement":
        return this.counted(e, s);
      case "ForOfStatement": {
        let { left: n, body: r } = e, a = this.value(e.right, t), [i] = n.type === "VariableDeclaration" ? n.declarations : [];
        this.must(i, "write for (const x of list)");
        let l = (c) => this.turn(r, t, (p) => this.bind(i.id, c, p));
        return this.looping(() => {
          if (P(a, "list")) a.cells.forEach((c) => this.unlessLeft(() => l(c.value)));
          else this.must(P(a, "builtin") && a.name === "pointers", "for...of goes over pointers, range(a, b) or a written list"), this.loop(D.pointers, (c) => this.unlessLeft(() => this.branch(this.compare("lt", c, this.input("pointerCount")), () => l(this.pointer(c)), () => {
          })));
        });
      }
      default:
        return this.refuse("this is not part of the shader language");
    }
  }
  looping(e) {
    let { flow: t } = this;
    this.flow = { ...t, stop: this.cell(false), skip: void 0 }, e(), this.flow = t;
  }
  turn(e, t, s) {
    let { flow: n } = this, r = { names: /* @__PURE__ */ new Map(), parent: t };
    this.flow = { ...n, skip: this.cell(false) }, s(r), this.statement(e, r), this.flow = n;
  }
  sealedIn(e, t) {
    let { sealed: s } = this;
    this.sealed = { since: this.serial, line: this.parsed.lineOf(e) };
    let n = t();
    return this.sealed = s, n;
  }
  counted(e, t) {
    let { init: s, update: n, body: r } = e, a = [], { test: i } = e;
    for (; i?.type === "LogicalExpression" && i.operator === "&&"; ) a.unshift(i.right), i = i.left;
    this.must(s?.type === "VariableDeclaration" && i?.type === "BinaryExpression" && /^([<>]=?|[=!]==?)$/.test(i.operator) && i.left.type === "Identifier" && n, le), this.statement(s, t);
    let { name: l } = i.left, { value: c, fixed: p } = t.names.get(l) ?? {}, f = n.type === "SequenceExpression" ? n.expressions : [n], u = f.find((R) => {
      let T = R.type === "UpdateExpression" ? R.argument : R.type === "AssignmentExpression" ? R.left : void 0;
      return T?.type === "Identifier" && T.name === l;
    });
    this.must(u && typeof c === "number", le);
    let o = i.right, y = (R, T) => {
      let _ = { names: /* @__PURE__ */ new Map(), parent: t };
      return this.declare(_, l, R, T), _;
    }, b = (R) => this.sealedIn(o, () => this.value(o, R)), m = (R) => this.sealedIn(u, () => {
      let T = y(R, p);
      return this.value(u, T), this.cellOf(T, l).value;
    }), g = b(y(c, Ht)), v = P(g, "ref") && g.from?.head === "pointerCount", h = v ? D.pointers : g, w = [], S = c;
    this.must(typeof h === "number", le), this.must(!v || /^<=?$/.test(i.operator), le);
    while (this.operated(i.operator, S, h) === true) this.must(typeof S === "number", le), this.must(w.push(S) <= D.turns, `a loop runs at most ${D.turns} turns: loop fewer, or nest two`), S = m(S);
    this.must(typeof S === "number", le);
    let x = [...w, S], E = (x[1] ?? c) - c, k = u.type === "AssignmentExpression" && !/^(Literal|Identifier)$/.test(u.right.type) ? w : [c], { operator: A } = i;
    this.line = this.parsed.lineOf(e), this.must(w.every((R, T) => Math.abs(R - c - T * E) <= Math.abs(R + E) * 1e-6 * T), "a for loop's step is the same every turn: use i++, i += n or i -= n");
    let O = (R) => this.unlessLeft(() => {
      let T = this.math("add", [this.math("mul", [R, E]), c]), _ = y(T, Ht), { stop: U } = this.flow, N = a.reduce((L, F) => this.either(this.truth(L), () => this.truth(this.value(F, _)), () => false), !v || this.operated(A, T, g));
      this.branch(this.truth(N), () => {
        this.turn(r, _, () => {
        }), this.unlessLeft(() => {
          let L = true;
          for (let q of f) {
            if (q !== u) {
              this.value(q, _);
              continue;
            }
            if (L = k.every((B, W) => m(B) === x[W + 1]), q !== f.at(-1) || typeof T === "number") this.cellOf(_, l).value = this.math("add", [T, E]);
          }
          let F = b(_);
          this.line = this.parsed.lineOf(e), this.must(F === g && L, le);
        });
      }, () => U && a.length > 0 && this.write(U, true));
    });
    this.looping(() => w.length > 1 ? this.loop(w.length, O) : w.forEach(() => O(0)));
  }
  options(e, t) {
    let s = Hs.get(t) ?? "";
    this.must(P(e, "record"), `${t} needs { ${s} }`);
    let n = /* @__PURE__ */ new Map();
    for (let [r, a] of e.cells) if (this.must(s.split(" ").includes(r), `${t} has no ${r}: it has ${s.replaceAll(" ", ", ")}`), a.value !== void 0) n.set(r, a.value);
    return n;
  }
  choice(e, t, s) {
    let n = s.find((r) => r === e.get(t));
    return this.must(n !== void 0 || !e.has(t), `${t} is one of ${s.join(", ")}`), n;
  }
  placed(e) {
    let t = this.options(e, "place"), s = this.float(t.get("at") ?? this.cast(0, 2)), n = this.not(this.truth(t.get("hide"))), [r, a] = ["a", "b"].map((p) => {
      let f = this.float(t.get(p) ?? 0);
      return this.vector(4, [f, ...[0, 0, 0].slice(V(f) - 1)]);
    }), i = this.cast(t.get("size") ?? 1, 1);
    if (this.must(t.has("at") || n === false, "a vertex needs at"), !P(s, "ref") || s.type !== 4) return this.list([n, this.cast(s, 2), i, r, a]);
    let l = this.math("abs", [this.swizzle(s, [2])]), c = this.swizzle(s, [3]);
    return this.list([this.logic("and", n, this.compare("le", l, c)), this.math("div", [this.swizzle(s, [0, 1]), c]), i, r, a]);
  }
  program(e, t, s, n) {
    let r = t.includes("vertex"), { line: a } = this;
    this.made = 0;
    let { arm: i } = this.inside(() => {
      let o = t.map((b) => [b, this.input(b)]), y = r ? this.inlined(e, o.map(([, b]) => b), (b) => this.placed(b)) : this.list([this.inlined(e, [this.record(o)])]);
      this.line = a, this.must(P(y, "list"), "a vertex function returns { at }"), y.cells.forEach(({ value: b }, m) => {
        let g = r ? [H, 2, 1, 4, 4][m] : 4;
        this.must(r || V(b) === 4, "a pass returns a vec4"), this.handed(this.arm, b, g);
      });
    }), l = /* @__PURE__ */ new Set(), c = [...i.out];
    for (let o = c.pop(); o !== void 0; o = c.pop()) {
      if (typeof o === "number" || l.has(o) || !o.from) continue;
      let { op: y, args: b, arms: m, gives: g, inner: v } = o.from, h = Math.max(g.indexOf(o), v.indexOf(o) - 1);
      l.add(o), c.push(...y !== "loop" ? b : h < 0 ? [] : [b[h], g[h], v[h + 1]], ...h < 0 ? [] : m.map((w) => w.out[h]));
    }
    let p = /* @__PURE__ */ new Map(), f = (o, y) => {
      if (typeof o === "number") {
        let m = ne(Math.fround(o)) + 0;
        return this.pool.set(m, this.pool.get(m) ?? this.pool.size), 0 - this.pool.get(m);
      }
      let b = p.get(o);
      return this.must(b !== void 0, "this uses a value made inside a branch or loop it has left"), y - b;
    }, u = (o, y, b, m) => {
      let g = [...b], v = [];
      b.forEach((w, S) => p.set(w, m + S));
      for (let w of o) {
        let { op: S, head: x, args: E, tail: k, arms: A, gives: O, inner: R } = w, T = (B, W) => l.has(O[W]), _ = m + g.length;
        if (!O.some(T)) continue;
        this.line = w.line, n.push(w.line);
        let U = (S === "loop" ? E.filter(T) : E).map((B) => f(B, _)), [N, ...L] = R, [F, q] = A.map((B) => u(B.steps, B.out.filter(T), N ? [N, ...L.filter(T)] : [], _));
        v.push(F && q ? ["if", U[0], F, q] : F ? ["loop", Number(x), U, F] : typeof x === "string" ? ["input", x] : P(x, "pass") ? [S, this.indexOf(x, s), ...U, ...k] : [S, ...[x ?? []].flat(), ...U, ...k]), O.filter(T).forEach((B) => {
          p.set(B, m + g.push(B) - 1);
        });
      }
      let h = y.map((w) => f(w, m + g.length));
      return g.forEach((w) => p.delete(w)), [v, h];
    };
    return u([...this.top.steps, ...i.steps], i.out, [], 0);
  }
  indexOf(e, t) {
    if (this.must(P(e, "pass"), "into is a buffer or scene"), e.table && !t.includes(e)) t.push(e);
    return this.must(e === this.scene || t.includes(e), `${e.name || "this buffer"} is used but is not in passes: list it there`), t.indexOf(e);
  }
  compiled() {
    let e = { names: /* @__PURE__ */ new Map() };
    this.statements(this.parsed.program.body, e);
    let t = e.names.get("default")?.value;
    this.must(P(t, "pass") && t.kind === "shader", "a shader ends with export default shader({ passes })"), this.frozen = this.serial, this.line = t.line;
    let s = this.options(t.given[0], "shader"), n = s.get("passes"), r = this.choice(s, "fps", [30, 60]) ?? 60;
    this.must(P(n, "list"), "passes is a written list");
    let a = n.cells.map(({ value: p }) => (this.must(P(p, "pass") && /^(buffer|picture|shapes)$/.test(p.kind), "passes holds buffers, shapes and one picture"), p));
    this.must(new Set(a).size === a.length, "a pass is listed twice"), this.must(a.length <= D.passes, `a shader has at most ${D.passes} passes`);
    let i = [], l = [], c = ["uv", "point", "cell", "pixel", "px"];
    for (let { kind: p, line: f, given: u, table: o } of a) {
      let y = { place: [], color: [] }, [b, m, g] = u;
      if (i.push(y), this.line = f, o || p === "picture") {
        l.push(o ?? { kind: "picture", color: this.program(b, c, a, y.color) });
        continue;
      }
      let v = this.options(b, p), h = (E) => v.has(E) ? this.number(v.get(E)) : void 0;
      if (p === "shapes") {
        let E = [...c, "coord", "a", "b"], k = ["triangles", "strip", "points", "lines"];
        l.push({ kind: p, into: this.indexOf(v.get("into") ?? this.scene, a), count: h("count") ?? this.refuse("shapes needs a count"), instances: h("instances") ?? 1, cover: h("cover") ?? this.refuse("shapes needs a cover: how many windows the draw may cover, up to 8"), draw: this.choice(v, "draw", k) ?? "triangles", blend: this.choice(v, "blend", ["over", "add"]) ?? "over", clear: this.choice(v, "clear", [true, false]) ?? false, place: this.program(m, ["vertex", "instance"], a, y.place), color: this.program(g, E, a, y.color) });
        continue;
      }
      let [w, S = 0] = this.numbers(v.get("size") ?? this.list([])), x = { kind: "buffer", scale: h("scale"), size: w === void 0 ? void 0 : [w, S], float: this.choice(v, "float", [16, 32]), filter: this.choice(v, "filter", ["linear", "nearest", "mipmap"]), wrap: this.choice(v, "wrap", ["clamp", "repeat"]), repeat: h("repeat"), once: this.choice(v, "once", [true, false]), color: m === void 0 ? void 0 : this.program(m, c, a, y.color) };
      l.push(x);
    }
    return { ir: { fps: r, pool: [...this.pool.keys()], values: this.spans, passes: l }, valueNames: this.valueNames, passNames: a.map((p) => p.name), passLines: a.map((p) => p.line), stepLines: i, line: t.line };
  }
}
function lt(e, t) {
  try {
    return new jt(Vt(e, t)).compiled();
  } catch (s) {
    return s instanceof X ? { refused: s.message, line: s.line } : s instanceof RangeError ? { refused: "this nests too deep to read: flatten it", line: 1 } : { refused: "this shader could not be read", line: 1 };
  }
}
var qs = { any: "runs on any GPU", fast: "needs a fast GPU; weak ones show the Svg", refused: "refused" };
function ct([e, t]) {
  return { weak: e, fast: t };
}
function ut({ weak: e, fast: t }) {
  return `${e.toFixed(2)} weak, ${t.toFixed(2)} fast`;
}
function Wt(e, t) {
  let { module: s, verdict: n, refusal: r, cost: a } = e, i = (o) => `${s}:${o} \`${t.split(`
`)[o - 1]?.trim().slice(0, 120) ?? ""}\``, l = r === null || r.line === null ? r?.message : `${i(r.line)}: ${r.message}`;
  if (a === null) return { shader: e, lines: [], refusal: l };
  let { pointers: c, scene: p, values: f } = a.reads, u = [...c ? ["pointers"] : [], ...p ? ["scene"] : [], ...f.map((o) => `value ${o}`)];
  return { shader: e, lines: [`${qs[n]}; sharpness ${ut(a.sharpness)}, at ${a.fps} fps`, ...a.passes.map(({ kind: o, name: y, line: b, frameMs: m, startMs: g }, v) => `pass ${v + 1} ${o} ${y || `at line ${b}`}: frame ms ${ut(m)}; first frame ms ${ut(g)}`), `reads ${u.join(", ") || "no pointers, scene or values"}`, `${a.steps} steps, ${a.guards} guards, ${(a.bytes / 1e6).toFixed(1)} MB, ${a.bits} bits`, ...a.dearest.map(({ line: o, share: y }) => `${Math.round(y * 100)}% at ${i(o)}`)], refusal: l };
}
function ht(e, t, s = "") {
  return Wt({ module: e, verdict: "refused", refusal: t, cost: null }, s);
}
function Gs(e, t) {
  let s = lt(e, t);
  if ("refused" in s) {
    let { line: v, refused: h } = s;
    return ht(e, { line: v, message: h }, t);
  }
  let { ir: n, valueNames: r, passNames: a, passLines: i, stepLines: l, line: c } = s, p = ({ pass: v = -1, stage: h, step: w = -1 }) => (h && l[v]?.[h][w]) ?? i[v] ?? c, f = Je(n);
  if ("refused" in f) {
    let v = { line: p(f), message: f.refused };
    return ht(e, v, t);
  }
  let u = et(f), o = /* @__PURE__ */ new Map();
  for (let { at: v, share: h } of u.dearest) o.set(p(v), (o.get(p(v)) ?? 0) + h);
  let y = Array.from(o, ([v, h]) => ({ line: v, share: h })).sort((v, h) => h.share - v.share).slice(0, 3), { pointers: b, scene: m, values: g } = f.reads;
  return Wt({ module: e, verdict: u.verdict, refusal: u.reason === void 0 ? null : { line: y[0]?.line ?? c, message: u.reason }, cost: { sharpness: ct(u.sharpness), fps: n.fps, passes: n.passes.map(({ kind: v }, h) => ({ kind: v, name: a[h] ?? "", line: i[h] ?? c, frameMs: ct(u.passes[h]?.frameMs ?? [0, 0]), startMs: ct(u.passes[h]?.startMs ?? [0, 0]) })), reads: { pointers: b, scene: m, values: g.map((v) => r[v] ?? "") }, steps: f.steps, guards: f.guards, bytes: u.bytes, bits: f.bits, dearest: y } }, t);
}
