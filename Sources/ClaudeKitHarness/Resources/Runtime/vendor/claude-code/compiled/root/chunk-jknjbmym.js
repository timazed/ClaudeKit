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
var chunk_jknjbmym_exports = {};
__export(chunk_jknjbmym_exports, {
  V0i: () => V0i,
  f$n: () => f$n,
  z0i: () => z0i
});
module.exports = __toCommonJS(chunk_jknjbmym_exports);
var import_chunk_ejeefcyk = require("/$bunfs/root/chunk-ejeefcyk.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var t = __toESM(require("vm"));
var l = `(() => {
  'use strict'
  Object.defineProperty(globalThis, 'pinned', { value: 0 })
  const isOwn = e => Object.getPrototypeOf(e) === TypeError.prototype
  let first = false
  let second = false
  let third = true
  try {
    Object.defineProperty(globalThis, 'pinned', { value: 1 })
  } catch (e) {
    first = isOwn(e)
  }
  try {
    class Base { constructor() { return globalThis } }
    class Derived extends Base { pinned = 1 }
    new Derived()
  } catch (e) {
    second = isOwn(e)
  }
  try {
    let receiver
    Object.defineProperty(globalThis, 'getter', { get() { receiver = this } })
    void globalThis.getter
    Object.preventExtensions(receiver)
    Object.defineProperty(globalThis, 'fresh', { value: 1 })
  } catch (e) {
    third = isOwn(e)
  }
  return first && second && third
})()`, h = `(pending, report) => {
  void (async () => {
    await pending
    await {
      then(resolve) {
        report(Object.getPrototypeOf(resolve) === Function.prototype)
        resolve()
      },
    }
  })()
}`, n;
function f$n() {
  return n ??= d(), n;
}
function z0i(e) {
  return e !== "passed" && !(0, import_chunk_wzdjp7c0.dg)();
}
function V0i() {
  return n !== void 0;
}
function d() {
  if (!(0, import_chunk_wzdjp7c0.f_)()) return "not_bun";
  try {
    let { drainMicrotasks: e } = (0, import_chunk_w1d7ygsk.ft)("bun:jsc"), o = (0, import_chunk_ejeefcyk.BZ)({ __proto__: null }, { codeGeneration: { strings: false, wasm: false } }), r = t.runInContext(l, o) === true, i, { promise: c, resolve: a } = Promise.withResolvers();
    t.runInContext(h, o)(c, (u) => {
      i = u;
    }), queueMicrotask(a), e();
    let s = i === true;
    if (r && s) return "passed";
    if (!r && !s) return "both";
    return r ? "thenable_after_await" : "rejected_definitions";
  } catch (e) {
    switch (typeof e === "object" && e !== null && "name" in e && e.name) {
      case "TypeError":
        return "threw_type_error";
      case "ReferenceError":
        return "threw_reference_error";
      case "SyntaxError":
        return "threw_syntax_error";
      case "RangeError":
        return "threw_range_error";
      default:
        return "threw_other";
    }
  }
}
