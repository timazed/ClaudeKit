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
var chunk_wc4p32em_exports = {};
__export(chunk_wc4p32em_exports, {
  Uje: () => Uje,
  Van: () => Van,
  cj: () => cj
});
module.exports = __toCommonJS(chunk_wc4p32em_exports);
function cj(n, { omitCacheControl: t = false } = {}) {
  let s = [];
  return h(n, s, t), s.join("");
}
function Uje(n, t, { omitCacheControl: s = false, standIns: i } = {}) {
  let o = new a(n, i), e = { cacheControl: false };
  return h(t, o, s, e), o.flush(), { hasCacheControl: e.cacheControl };
}
var c = 65536;
class a {
  hashes;
  standIns;
  pieces = [];
  length = 0;
  constructor(n, t) {
    this.hashes = n;
    this.standIns = t;
  }
  pushStandIn(n) {
    let t = this.standIns?.get(n);
    if (t === void 0) return false;
    this.push('"'), this.flush();
    for (let s of this.hashes) s.update(t);
    return this.push('"'), true;
  }
  push(n) {
    if (this.pieces.push(n), this.length += n.length, this.length >= c) this.flush();
  }
  flush() {
    if (this.length === 0) return;
    let n = this.pieces.join("");
    for (let t of this.hashes) t.update(n);
    this.pieces.length = 0, this.length = 0;
  }
}
function Van(n) {
  if (Array.isArray(n)) return n.map(Van);
  if (n !== null && typeof n === "object") return Object.fromEntries(Object.entries(n).filter(([t, s]) => t !== "cache_control" && s !== void 0).map(([t, s]) => [t, Van(s)]));
  return n;
}
function h(n, t, s, i) {
  if (typeof n === "string" && t.pushStandIn?.(n) === true) return;
  if (typeof n === "string" && n.length > c) {
    t.push('"');
    for (let e = 0; e < n.length; ) {
      let r = Math.min(e + c, n.length), f = n.charCodeAt(r - 1);
      if (r < n.length && f >= 55296 && f <= 56319) r--;
      t.push(JSON.stringify(n.slice(e, r)).slice(1, -1)), e = r;
    }
    t.push('"');
    return;
  }
  if (n === null || typeof n !== "object") {
    t.push(JSON.stringify(n) ?? "null");
    return;
  }
  if (Array.isArray(n)) {
    t.push("["), n.forEach((e, r) => {
      if (r > 0) t.push(",");
      h(e, t, s, i);
    }), t.push("]");
    return;
  }
  t.push("{");
  let o = true;
  for (let e of Object.keys(n).sort()) {
    let r = n[e];
    if (e === "cache_control" && i !== void 0) i.cacheControl = true;
    if (r === void 0 || s && e === "cache_control") continue;
    if (!o) t.push(",");
    o = false, t.push(JSON.stringify(e)), t.push(":"), h(r, t, s, i);
  }
  t.push("}");
}
