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
var chunk_jk26f2gn_exports = {};
__export(chunk_jk26f2gn_exports, {
  c4n: () => c4n,
  f$: () => f$,
  kOe: () => kOe,
  q0r: () => q0r,
  u$: () => u$
});
module.exports = __toCommonJS(chunk_jk26f2gn_exports);
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
function kOe(i, u = 3e5, l) {
  let o = (c) => typeof u === "function" ? u(c) : u, e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = async (...c) => {
    let s = (0, import_chunk_w578pjby._)(c), r = e.get(s);
    if (r && l && !l(r.value, r.timestamp)) {
      if (r.refreshPromise) return r.refreshPromise;
      e.delete(s), r = void 0;
    }
    let h = Date.now();
    if (!r) {
      let f = n.get(s);
      if (f) return f;
      let g = i(...c);
      n.set(s, g);
      try {
        let m = await g;
        if (n.get(s) === g) e.set(s, { value: m, timestamp: Date.now(), refreshing: false, lifetimeMs: o(m) });
        return m;
      } finally {
        if (n.get(s) === g) n.delete(s);
      }
    }
    if (r && h - r.timestamp > r.lifetimeMs && !r.refreshing) {
      r.refreshing = true;
      let f = r, g = i(...c);
      return f.refreshPromise = g, g.then((m) => {
        if (e.get(s) === f) e.set(s, { value: m, timestamp: Date.now(), refreshing: false, lifetimeMs: o(m) });
      }).catch((m) => {
        if ((0, import_chunk_w578pjby.t)(String(m), { level: "error" }), e.get(s) === f) e.delete(s);
      }), r.value;
    }
    return e.get(s).value;
  };
  return a.cache = { clear: () => {
    e.clear(), n.clear();
  } }, a;
}
function u$(i, u, l = 100) {
  let o = new import_chunk_1frjyv5h.Uf({ max: l }), e = (...n) => {
    let a = u(...n), c = o.get(a);
    if (c !== void 0) return c;
    let s = i(...n);
    return o.set(a, s), s;
  };
  return e.cache = { clear: () => o.clear(), size: () => o.size, delete: (n) => o.delete(n), get: (n) => o.peek(n), has: (n) => o.has(n), set: (n, a) => void o.set(n, a) }, e;
}
var d = /* @__PURE__ */ new Set();
function f$(i) {
  return d.add(i), i;
}
function c4n(i, u) {
  let l = [];
  for (let o of u) {
    let e = i.get(o);
    if (e !== void 0) l.push([o, e]);
  }
  i.clear();
  for (let [o, e] of l) i.set(o, e);
}
var R = 128;
function q0r(i, u, l) {
  let o = l?.maxSize ?? R, e = /* @__PURE__ */ new Map();
  d.add(e);
  function n(...a) {
    let c = u ? u(...a) : a[0], s = e.get(c);
    if (s) return s;
    let r = i(...a);
    if (e.size >= o) e.delete(e.keys().next().value);
    return e.set(c, r), r.catch(() => {
      if (e.get(c) === r) e.delete(c);
    }), r;
  }
  return n.cache = e, n;
}
