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
var chunk_3vy81xdp_exports = {};
__export(chunk_3vy81xdp_exports, {
  KNa: () => KNa,
  MXt: () => MXt,
  VNa: () => VNa,
  xgt: () => xgt,
  zNa: () => zNa
});
module.exports = __toCommonJS(chunk_3vy81xdp_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var MXt = (0, import_chunk_pzzqg6s3.qB)(() => a().rowStaged);
function m() {
  return a().attestationEnforcement;
}
function zNa() {
  return m() === "not_enforced";
}
var v = /^[A-Za-z_$][\w$.]{0,63}$/;
function xgt(e) {
  try {
    let t = e instanceof Error ? e.name : typeof e;
    return typeof t === "string" && v.test(t) ? t : "unnamed";
  } catch {
    return "unnamed";
  }
}
function b(e, t) {
  if (e === void 0) return "deliver";
  if (t === e) return "repeat";
  return e === "served" && t === "refused" ? "deliver" : "out_of_order";
}
function g(e) {
  return typeof e === "object" && e !== null && "then" in e && typeof e.then === "function";
}
function y(e, t) {
  if (!g(e)) return;
  Promise.resolve(e).catch((s) => {
    try {
      t?.(xgt(s));
    } catch {
    }
  });
}
function w() {
  let e, t = [], s = false, c = [], f = (r) => () => {
    t = t.filter((n) => n !== r);
  }, h = (r, n, o) => {
    try {
      return y(r.listener(n, f(r)), o), null;
    } catch (i) {
      return xgt(i);
    }
  }, l = ({ verdict: r, onRejected: n }) => {
    e = r;
    let o = t, i = 0, d = [];
    for (let u of o) {
      if (!t.includes(u)) continue;
      i++;
      let S = h(u, r, n);
      if (S !== null) d.push(S);
    }
    if (r !== "served") t = [];
    return { listeners: i, threw: d };
  }, p = () => {
    let r = [];
    while (c.length > 0) r.push(...l(c.shift()).threw);
    return r;
  };
  return { current: () => e, subscribe: (r) => {
    let n = { listener: r }, o = f(n);
    if (e === void 0) return t = [...t, n], o;
    let i = e;
    if (i === "served") t = [...t, n];
    let d = s;
    s = true;
    try {
      let u = r(i, o);
      if (g(u)) Promise.resolve(u).catch(() => {
      });
    } catch (u) {
      throw o(), u;
    } finally {
      if (!d) p(), s = false;
    }
    return o;
  }, publish: (r, n) => {
    let o = c.at(-1)?.verdict ?? e, i = b(o, r);
    if (i === "repeat") return { kind: "repeat" };
    if (i === "out_of_order") return { kind: "out_of_order", basis: o };
    if (c.push({ verdict: r, onRejected: n }), s) return { kind: "queued" };
    s = true;
    try {
      let d = l(c.shift());
      return { kind: "delivered", listeners: d.listeners, threw: [...d.threw, ...p()] };
    } finally {
      c.length = 0, s = false;
    }
  }, reset: () => {
    e = void 0, t = [], s = false, c.length = 0;
  } };
}
var V = new import_chunk_2904xtvq.j(() => ({ rowStaged: (0, import_chunk_69qhefwa.Be)(), streamReconnected: (0, import_chunk_69qhefwa.Be)(), attestationEnforcement: "unknown", verdict: w() }));
function a() {
  return V.of((0, import_chunk_f9x2f6cx.N)().host);
}
var VNa = Object.freeze({ current: () => a().verdict.current(), subscribe: (e) => a().verdict.subscribe(e) }), KNa = (e, t) => a().verdict.publish(e, t);
