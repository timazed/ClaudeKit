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
var chunk_1frjyv5h_exports = {};
__export(chunk_1frjyv5h_exports, {
  Uf: () => Uf
});
module.exports = __toCommonJS(chunk_1frjyv5h_exports);
var d = new Uint16Array(2);
class Uf {
  max;
  maxSize;
  ttl;
  #r = 0;
  #f;
  #e = /* @__PURE__ */ new Map();
  #i = [];
  #s = [];
  #n = [];
  #o = [];
  #t = d;
  #d = 0;
  constructor({ max: t = 0, maxSize: e = 0, ttl: i = 0, sizeCalculation: s }) {
    this.max = t, this.maxSize = e, this.ttl = i, this.#f = s;
  }
  get size() {
    return this.#e.size;
  }
  get calculatedSize() {
    return this.#r;
  }
  get(t) {
    let e = this.#e.get(t);
    if (e === void 0) return;
    if (this.#h(e)) {
      this.#u(e);
      return;
    }
    return this.#a(e), this.#l(e), this.#s[e];
  }
  peek(t) {
    let e = this.#e.get(t);
    return e === void 0 || this.#h(e) ? void 0 : this.#s[e];
  }
  has(t) {
    return this.peek(t) !== void 0;
  }
  set(t, e, i) {
    let s = 0;
    if (e !== void 0 && this.maxSize > 0) {
      if (s = i?.size || (this.#f?.(e, t) ?? 0), !(s >= 1)) throw TypeError("An entry needs a size of 1 or more");
    }
    if (e === void 0 || s > this.maxSize) return this.delete(t), this;
    let n = this.#e.get(t), o = n !== void 0 && this.#s[n] === e;
    if (n !== void 0) this.#a(n);
    else {
      if (this.max > 0 && this.#e.size === this.max) this.#u(this.#t[1]);
      if (n = this.#d || this.#e.size + 1, n * 2 === this.#t.length) this.#m();
      this.#d = this.#t[n * 2 + 1], this.#e.set(t, n), this.#i[n] = t;
    }
    if (this.#l(n), this.ttl > 0) {
      let h = performance.now(), r = i?.ttl ?? this.ttl;
      this.#o[n] = h && r && h + r;
    }
    if (!o) {
      if (this.#s[n] = e, this.maxSize > 0) {
        this.#r += s - (this.#n[n] ?? 0), this.#n[n] = s;
        while (this.#r > this.maxSize) this.#u(this.#t[1]);
      }
    }
    return this;
  }
  delete(t) {
    let e = this.#e.get(t);
    if (e !== void 0) this.#u(e);
    return e !== void 0;
  }
  clear() {
    this.#e.clear(), this.#i = [], this.#s = [], this.#n = [], this.#o = [], this.#t = d, this.#d = this.#r = 0;
  }
  purgeStale() {
    for (let t of this.#e.values()) if (this.#h(t)) this.#u(t);
  }
  *keys() {
    for (let t = this.#t[0]; t; t = this.#t[t * 2]) {
      let e = this.#i[t];
      if (e === void 0) return;
      if (!this.#h(t)) yield e;
    }
  }
  *entries() {
    for (let t = this.#t[0]; t; t = this.#t[t * 2]) {
      let e = this.#i[t];
      if (e === void 0) return;
      if (!this.#h(t)) yield [e, this.#s[t]];
    }
  }
  *rkeys() {
    for (let t = this.#t[1]; t; t = this.#t[t * 2 + 1]) {
      let e = this.#i[t];
      if (e === void 0) return;
      if (!this.#h(t)) yield e;
    }
  }
  dump() {
    let t = [];
    for (let e = this.#t[1]; e; e = this.#t[e * 2 + 1]) {
      let i = this.#s[e];
      t.push([this.#i[e], this.maxSize === 0 ? { value: i } : { value: i, size: this.#n[e] }]);
    }
    return t;
  }
  load(t) {
    this.clear();
    for (let [e, i] of t) this.set(e, i.value, i);
  }
  #h(t) {
    if (this.ttl === 0) return false;
    let e = this.#o[t];
    return e !== 0 && performance.now() > e;
  }
  #u(t) {
    if (this.#e.delete(this.#i[t]), this.#i[t] = this.#s[t] = void 0, this.maxSize > 0) this.#r -= this.#n[t], this.#n[t] = 0;
    this.#a(t), this.#t[t * 2 + 1] = this.#d, this.#d = t;
  }
  #a(t) {
    let e = this.#t, i = e[t * 2], s = e[t * 2 + 1];
    e[i * 2 + 1] = s, e[s * 2] = i;
  }
  #l(t) {
    let e = this.#t, i = e[0];
    e[t * 2] = i, e[t * 2 + 1] = 0, e[i * 2 + 1] = e[0] = t;
  }
  #m() {
    let t = this.#t, e = Math.min(t.length * 2 + 60, (this.max || 1 / 0) + 1);
    this.#t = new (e > 65536 ? Uint32Array : Uint16Array)(e * 2), this.#t.set(t), this.#i = u(this.#i, e), this.#s = u(this.#s, e);
  }
}
function u(t, e) {
  let i = Array(e);
  for (let s = 1; s < t.length; s++) i[s] = t[s];
  return i;
}
