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
var chunk_w71cxznt_exports = {};
__export(chunk_w71cxznt_exports, {
  IEl: () => IEl,
  OEl: () => OEl,
  Rl: () => Rl,
  kLe: () => kLe
});
module.exports = __toCommonJS(chunk_w71cxznt_exports);
class c {
  #r;
  #e = 0;
  #t = [];
  constructor(e) {
    this.#r = e;
  }
  acquire() {
    if (this.#e < this.#r) return this.#e++, Promise.resolve();
    return new Promise((e) => {
      this.#t.push(e);
    });
  }
  release() {
    let e = this.#t.shift();
    if (e) e();
    else this.#e--;
  }
}
function Rl(e, s) {
  let r = new c(e);
  return async (...i) => {
    await r.acquire();
    try {
      return await s(...i);
    } finally {
      r.release();
    }
  };
}
function OEl(e, s, r) {
  let i = Rl(e, r);
  return async (n) => i(n, await s(n));
}
function kLe(e) {
  let s = Rl(e, (r) => new Promise((i) => r(i)));
  return { acquire: () => new Promise((r) => void s(r)) };
}
function IEl(e, s, r, i) {
  let n = /* @__PURE__ */ new Set(), o = [];
  function g({ bytes: t }) {
    let a = [...n].reduce((u, l) => u + l.bytes, 0);
    return n.size === 0 || n.size < e && a + t <= s;
  }
  function d() {
    for (let t = o[0]; t !== void 0 && g(t); t = o[0]) o.shift(), n.add(t), t.start();
  }
  return async (...t) => {
    let a = Math.max(0, r(...t)), u = await new Promise((l) => {
      let m = { bytes: a, start: () => l(m) };
      o.push(m), d();
    });
    try {
      return await i(...t);
    } finally {
      n.delete(u), d();
    }
  };
}
