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
var chunk_ejeefcyk_exports = {};
__export(chunk_ejeefcyk_exports, {
  $Ar: () => $Ar,
  $Ts: () => $Ts,
  BZ: () => BZ,
  Blt: () => Blt,
  DTo: () => DTo,
  FAr: () => FAr,
  FTs: () => FTs,
  I2n: () => I2n,
  LTo: () => LTo,
  M2n: () => M2n,
  NAr: () => NAr,
  NTo: () => NTo,
  NTs: () => NTs,
  O2n: () => O2n,
  OTt: () => OTt,
  PTt: () => PTt,
  Txe: () => Txe,
  UTs: () => UTs,
  XCl: () => XCl,
  XGt: () => XGt,
  bGe: () => bGe,
  f7e: () => f7e
});
module.exports = __toCommonJS(chunk_ejeefcyk_exports);
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_k886eq88 = require("/$bunfs/root/chunk-k886eq88.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var o = __toESM(require("vm"));
var p = `(() => {
    Object.defineProperty(Error, 'prepareStackTrace', {
      value: (err) => { const s = err.stack; return typeof s === 'string' ? s : '' },
      writable: false, configurable: false,
    });
    for (const g of ['ShadowRealm', 'WebAssembly', 'FinalizationRegistry',
                     'WeakRef', 'Atomics', 'SharedArrayBuffer',
                     'queueMicrotask',
                     // JSC debug/shell globals \u2014 present only if
                     // JSC_useDollarVM=1 or similar, but $vm is a full
                     // escape (createGlobalObject, addressOf, runScript).
                     '$vm', 'gc', 'edenGC', 'fullGC', 'print', 'readFile',
                     'Loader']) {
      delete globalThis[g];
    }
    // SES-style enable-property-override: convert common shadowed data props
    // to accessors whose setter defineProperty's onto the receiver. Otherwise
    // freezing makes them non-writable, and [[Set]] on an instance (e.g.
    // "this.name='X'" in an Error subclass ctor) throws in strict / no-ops in
    // sloppy \u2014 the TC39 "override mistake".
    function enableOverride(proto, key) {
      const d = Object.getOwnPropertyDescriptor(proto, key);
      if (!d || 'get' in d) return;
      const v = d.value;
      Object.defineProperty(proto, key, {
        get() { return v },
        set(nv) {
          if (this === proto) return;
          Object.defineProperty(this, key, { value: nv, writable: true, enumerable: true, configurable: true });
        },
        enumerable: d.enumerable, configurable: true,
      });
    }
    const errorCtors = [Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError, globalThis.SuppressedError].filter(Boolean);
    const errorProtos = errorCtors.map(C => C.prototype);
    for (const [proto, keys] of [
      // All Object.prototype data props \u2014 Object.assign({}, {propertyIsEnumerable:x})
      // and friends would otherwise throw post-freeze. Accessor props (__proto__,
      // __define/lookupGetter__) are skipped by the 'get' in d guard above.
      [Object.prototype, Object.getOwnPropertyNames(Object.prototype)],
      [Function.prototype, ['toString', 'constructor', 'name', 'length']],
      [Array.prototype, ['toString', 'constructor']],
      [Date.prototype, ['toString', 'toLocaleString', 'valueOf', 'constructor']],
      ...errorProtos.map(p => [p, ['name', 'message', 'toString', 'constructor']]),
    ]) for (const k of keys) enableOverride(proto, k);
    // Error subclasses each have their own .prototype; freezing only Error
    // leaves TypeError.prototype.then etc. writable. SuppressedError is
    // from the explicit-resource-management proposal (bun/JSC ship it).
    for (const C of [Promise, Object, Array, Function, globalThis.Iterator,
                     Map, Set, WeakMap, WeakSet,
                     String, Number, Boolean, Symbol, BigInt,
                     Date, RegExp, ArrayBuffer, DataView,
                     ...errorCtors,
                     typeof URL !== 'undefined' ? URL : undefined,
                    ].filter(Boolean)) {
      Object.freeze(C);
      Object.freeze(C.prototype);
    }
    // %TypedArray% (shared prototype of all typed arrays) + each concrete.
    for (const C of [Object.getPrototypeOf(Int8Array),
                     Int8Array, Uint8Array, Uint8ClampedArray,
                     Int16Array, Uint16Array, Int32Array, Uint32Array,
                     globalThis.Float16Array, Float32Array, Float64Array,
                     BigInt64Array, BigUint64Array].filter(Boolean)) {
      Object.freeze(C);
      Object.freeze(C.prototype);
    }
    // %AsyncFunction%, %GeneratorFunction%, %AsyncGeneratorFunction% and
    // their .prototype are not reachable as globals \u2014 walk from instances.
    for (const f of [async()=>{}, function*(){}, async function*(){}]) {
      Object.freeze(f.constructor);
      Object.freeze(f.constructor.prototype);
    }
    for (const C of [globalThis.DisposableStack, globalThis.AsyncDisposableStack,
                     globalThis.Intl].filter(Boolean)) {
      Object.freeze(C);
      if (C.prototype) Object.freeze(C.prototype);
    }
    // Namespace objects (no .prototype) \u2014 VM code could otherwise set
    // JSON.then/Math.then/Reflect.then and any host await on the namespace
    // object (or on a VM value that aliases it) becomes a thenable escape.
    // Proxy has no .prototype but freeze closes Proxy.revocable tampering.
    for (const ns of [JSON, Math, Reflect, Proxy]) Object.freeze(ns);
    Object.defineProperty(globalThis, 'then', {
      value: undefined, writable: false, configurable: false,
    });
    Object.defineProperty(globalThis, 'Error', {
      value: Error, writable: false, enumerable: false, configurable: false,
    });
    // Intl.* sub-constructors each have their own .prototype \u2014 freezing the
    // Intl namespace above does NOT freeze Intl.Collator.prototype etc.
    // Same own-property-.then escape shape as Promise.prototype.then if any
    // host code ever awaits an Intl.* instance.
    if (typeof Intl !== 'undefined') {
      for (const k of Object.getOwnPropertyNames(Intl)) {
        const C = Intl[k];
        if (typeof C === 'function') {
          Object.freeze(C);
          if (C.prototype) Object.freeze(C.prototype);
        }
      }
    }
    for (const it of [
      [][Symbol.iterator](),
      ''[Symbol.iterator](),
      new Map()[Symbol.iterator](),
      new Set()[Symbol.iterator](),
      'a'.matchAll(/a/g),
      // Iterator helpers (map/from) are stage-4 but guard for older runtimes.
      ...(typeof Iterator !== 'undefined' && Iterator.from ? [
        [].values().map(x=>x),
        // %WrapForValidIteratorPrototype% \u2014 Iterator.from(non-Iterator) wraps
        // via a distinct intrinsic prototype not reachable from any other path.
        Iterator.from({next:()=>({done:true})}),
      ] : []),
      (function*(){})(),
      (async function*(){})(),
      // %SegmentsPrototype% + %SegmentIteratorPrototype% \u2014 host for..of on a
      // VM Segments object would otherwise see a writable .then on the chain.
      ...(typeof Intl !== 'undefined' && Intl.Segmenter ? (s => [s, s[Symbol.iterator]()])(new Intl.Segmenter().segment('a')) : []),
    ]) {
      for (let p = Object.getPrototypeOf(it); p; p = Object.getPrototypeOf(p)) {
        Object.freeze(p);
      }
    }
    })()`, f = `(e => {
      let name = 'Error', message = '', stack = ''
      try { const v = e?.name; if (typeof v === 'string') name = v } catch {}
      try {
        const v = e?.message
        if (typeof v === 'string') message = v
        else if (typeof e === 'string') message = e
        else if (typeof e === 'number' || typeof e === 'boolean' || typeof e === 'bigint') {
          const s = \`\${e}\`
          if (typeof s === 'string') message = s
        }
      } catch {}
      try { const v = e?.stack; if (typeof v === 'string') stack = v } catch {}
      return { __proto__: null, name, message, stack }
    })`, y = `(e) => {
  let name = 'Error', message = '', stack
  try { const v = e?.name; if (typeof v === 'string') name = v } catch {}
  try {
    const v = e?.message
    if (typeof v === 'string') message = v
    else if (typeof e === 'string') message = e
  } catch {}
  try { const v = e?.stack; if (typeof v === 'string') stack = v } catch {}
  const toStr = () => name + ': ' + message
  _setProto(toStr, null)
  _freeze(toStr)
  return _freeze({
    __proto__: null,
    name,
    message,
    stack: stack === undefined ? name + ': ' + message : stack,
    toString: toStr,
  })
}`, m = `(() => {
      const _freeze = Object.freeze
      const _setProto = Object.setPrototypeOf
      const _getProto = Object.getPrototypeOf
      const _ObjectProto = Object.prototype
      const reseal = (e) => {
  let name = 'Error', message = '', stack
  try { const v = e?.name; if (typeof v === 'string') name = v } catch {}
  try {
    const v = e?.message
    if (typeof v === 'string') message = v
    else if (typeof e === 'string') message = e
  } catch {}
  try { const v = e?.stack; if (typeof v === 'string') stack = v } catch {}
  const toStr = () => name + ': ' + message
  _setProto(toStr, null)
  _freeze(toStr)
  return _freeze({
    __proto__: null,
    name,
    message,
    stack: stack === undefined ? name + ': ' + message : stack,
    toString: toStr,
  })
}
      // Prebuilt at build time (full stack headroom): the last-resort reason
      // when laundering itself throws at the stack ceiling. Throwing it
      // allocates nothing and calls nothing.
      const SENTINEL = reseal({
        name: 'Error',
        message: 'host call failed at the VM boundary (details unavailable)',
      })
      // true only for an object whose prototype chain reaches this realm's
      // Object.prototype within 64 hops (far beyond any real chain; the cap
      // stops a Proxy whose getPrototypeOf trap returns a fresh object each
      // hop from spinning this microtask forever). A null-terminated, foreign,
      // throwing or over-long chain is not this realm's.
      const ownRealm = e => {
        let p = e
        for (let i = 0; i < 64; i++) {
          p = _getProto(p)
          if (p === _ObjectProto) return true
          if (p === null) return false
        }
        return false
      }
      const launder = e => {
        if (e === null || (typeof e !== 'object' && typeof e !== 'function')) return e
        try { if (ownRealm(e)) return e } catch {}
        return reseal(e)
      }
      return (hostFn) => async (...a) => {
        try {
          return await hostFn(...a)
        } catch (e) {
          // No call or allocation between a failed launder and the throw.
          let reason = SENTINEL
          try { reason = launder(e) } catch {}
          throw reason
        }
      }
    })()`;
var h = o.runInContext, w = EvalError;
function BZ(e, t) {
  let n = o.createContext(e, t), r;
  try {
    r = h("this", n);
  } catch (a) {
    if (!(a instanceof w)) throw a;
    r = void 0;
  }
  return (0, import_chunk_kbr9bg9m.JCl)(n, r), n;
}
var d = Symbol("compile with no import() hook"), f7e = Object.freeze({ importModuleDynamically: d });
function g(e) {
  let t = e?.importModuleDynamically;
  if (t === d) return;
  if (typeof t !== "function") throw TypeError("The options argument of hardenVMIntrinsics and createVMIntakeWalkers must be either { importModuleDynamically: <function> } or COMPILE_WITHOUT_IMPORT_HOOK, which src/utils/vmHardening.ts exports");
  return { importModuleDynamically: t };
}
function O2n(e, t) {
  if (t != null) return { timeout: t };
  return { timeout: e };
}
function Txe(e, t) {
  o.runInContext(p, e, g(t));
}
function DTo(e) {
  o.runInContext("'use strict'; delete Error.captureStackTrace", e);
}
function NAr(e) {
  return o.runInContext("(async v => ({__proto__: null, v: await v}))", e);
}
function LTo(e) {
  return o.runInContext("((fn, ...args) => fn(...args))", e);
}
function PTt(e) {
  return o.runInContext(f, e);
}
function I2n(e, { arrayLengthCap: t, protoKey: n } = { arrayLengthCap: import_chunk_k886eq88.NS, protoKey: "left-out" }) {
  return o.runInContext(`(() => {
      'use strict';
      ${l({ arrayLengthCap: t, isLeaving: false, isListSeenFirst: false, protoKey: n })}
      return copy
    })()`, e);
}
function NTs(e) {
  return o.runInContext(`(() => {
      const _freeze = Object.freeze
      const _setProto = Object.setPrototypeOf
      const reseal = ${y}
      return (hostFn) => (...args) => {
        try {
          return hostFn(...args)
        } catch (e) {
          throw reseal(e)
        }
      }
    })()`, e);
}
function NTo(e) {
  return o.runInContext(m, e);
}
function XCl(e, t) {
  return o.runInContext(`((onRejection) => {
      const _apply = Reflect.apply
      const _then = Promise.prototype.then
      const rejected = (e) => { try { onRejection(e) } catch {} }
      return (fn) => (...a) => {
        const p = _apply(fn, undefined, a)
        try { _apply(_then, p, [undefined, rejected]) } catch {}
        return p
      }
    })`, e)(bGe(t));
}
function FAr(e, t = "Error", n) {
  let r = () => `${t}: ${e}`;
  return Object.setPrototypeOf(r, null), Object.freeze(r), Object.freeze({ __proto__: null, name: t, message: e, stack: n ?? `${t}: ${e}`, toString: r });
}
var c;
function k() {
  if (!c) {
    let e = BZ({ __proto__: null }, { codeGeneration: { strings: false, wasm: false } });
    DTo(e), Txe(e, f7e), c = o.runInContext(`(e => {
        // Independent try blocks \u2014 a throwing .name getter must not discard
        // an already-validated .message (and vice versa).
        let msg, name = 'Error', stack
        try {
          const m = e?.message
          msg = typeof m === 'string' ? m : typeof e === 'string' ? e : '<non-string error>'
        } catch { msg = '<unprintable thrown value>' }
        try {
          const n = e?.name
          if (typeof n === 'string') name = n
        } catch {}
        try {
          const s = e?.stack
          if (typeof s === 'string') stack = s
        } catch {}
        return { __proto__: null, msg, name, stack }
      })`, e);
  }
  return c;
}
function Blt(e) {
  try {
    let t = k()(e);
    return { msg: typeof t.msg === "string" ? t.msg : "<unprintable thrown value>", name: typeof t.name === "string" ? t.name : "Error", stack: typeof t.stack === "string" ? t.stack : void 0 };
  } catch {
    return { msg: "<unprintable thrown value>", name: "Error" };
  }
}
function OTt(e) {
  if (e == null || typeof e !== "object" && typeof e !== "function") return String(e);
  return `[${typeof e}]`;
}
function bGe(e) {
  let t = (...n) => {
    try {
      return e(...n);
    } catch (r) {
      let { msg: a, name: s, stack: i } = Blt(r);
      throw FAr(a, s, i);
    }
  };
  return Object.setPrototypeOf(t, null), t;
}
function FTs(e) {
  let t = async (...n) => {
    try {
      return await e(...n);
    } catch (r) {
      let { msg: a, name: s, stack: i } = Blt(r);
      throw FAr(a, s, i);
    }
  };
  return Object.setPrototypeOf(t, null), t;
}
function b(e) {
  let t;
  try {
    t = e.length;
  } catch (n) {
    throw u().lost(n), Error("unable to read array length across the workflow VM boundary");
  }
  if (typeof t !== "number" || !Number.isSafeInteger(t)) throw Error("array length is not a safe integer across the workflow VM boundary");
  if (t > import_chunk_k886eq88.NS) throw Error(`array length ${t} exceeds the maximum of ${import_chunk_k886eq88.NS} supported across the workflow VM boundary`);
  return t;
}
function XGt(e) {
  return u().copy(e);
}
var u = (0, import_chunk_839h1d5e.Co)(() => o.runInThisContext(`(() => {
        'use strict';
        ${l({ arrayLengthCap: import_chunk_k886eq88.NS, isLeaving: true, isListSeenFirst: true, protoKey: "left-out" })}
        return { __proto__: null, copy, lost }
      })()`, { filename: "primitivizeDeep" }));
function $Ts(e) {
  if (e === null || typeof e !== "object") return [];
  let t = b(e), n = [];
  for (let r = 0; r < t; r++) try {
    n[r] = e[r];
  } catch (a) {
    u().lost(a), n[r] = void 0;
  }
  return n;
}
function UTs(e) {
  return o.runInContext(`((S, JS) => ({
      vmToStr: v => { try { return S(v) } catch { return '<unprintable>' } },
      vmStringify: v => JS(v),
      vmOwnString: (o, k) => {
        try { const v = o == null ? undefined : o[k]; return typeof v === 'string' ? v : undefined }
        catch { return undefined }
      },
    }))(String, JSON.stringify)`, e);
}
function M2n(e, t) {
  return o.runInContext(S(), e, g(t));
}
function $Ar(e) {
  if (typeof e === "string") return e;
  if (e === null || typeof e !== "object" && typeof e !== "function") return String(e);
  return typeof e === "function" ? "[function]" : "[object]";
}
var v = `
      const _capSet = new _WeakSet()
      function capErr(msg) {
        const e = new _Error(msg)
        _capSet.add(e)
        return e
      }
      function isCap(e) {
        try { return _capSet.has(e) } catch { return false }
      }`, _ = `
      function isStackEnd(e) {
        if (_isError === null || !_isError(e)) return false
        const said = _ownDescriptor(e, 'message')
        return said !== undefined && (said.value === '${import_chunk_k886eq88.JGt[0]}' || said.value === '${import_chunk_k886eq88.JGt[1]}')
      }
      function lost(e) {
        if (isCap(e)) throw e
        if (isStackEnd(e)) throw capErr('${import_chunk_k886eq88.FTo}')
      }`;
function l({ arrayLengthCap: e, isLeaving: t, isListSeenFirst: n, protoKey: r }) {
  let a = e === void 0 ? "" : `if (len > ${e}) {
          throw capErr('array length ' + len + ' exceeds the maximum of ${e} supported across the workflow VM boundary')
        }`, s = "const out = []; seen.set(v, out)";
  return `
      const _WeakMap = WeakMap, _WeakSet = WeakSet, _isArray = Array.isArray,
            _keys = Object.keys, _defineProperty = Object.defineProperty,
            _Error = Error, _isSafeInteger = Number.isSafeInteger,
            _isError = typeof Error.isError === 'function' ? Error.isError : null,
            _ownDescriptor = Object.getOwnPropertyDescriptor
      ${v}
      ${_}
      function checkedLength(v) {
        let len
        try { len = v.length } catch (e) {
          lost(e)
          throw new _Error('unable to read array length across the workflow VM boundary')
        }
        if (typeof len !== 'number' || !_isSafeInteger(len)) {
          throw capErr('array length is not a safe integer across the workflow VM boundary')
        }
        ${a}
        return len
      }
      const copy = (rootVal) => {
        if (typeof rootVal === 'function') return undefined
        if (rootVal === null || typeof rootVal !== 'object') return rootVal
        const seen = new _WeakMap()
        let childKeys = null, childLength = 0
        function make(v, depth) {
          if (depth > ${t ? import_chunk_k886eq88.UAr : import_chunk_k886eq88.wGe}) {
            throw capErr('${t ? import_chunk_k886eq88.H2n : import_chunk_k886eq88.Wlt}')
          }
          if (_isArray(v)) {
            ${n ? "const out = []; seen.set(v, out)" : ""}
            const len = checkedLength(v)
            ${n ? "" : "const out = []; seen.set(v, out)"}
            childKeys = null; childLength = len
            return out
          }
          const out = {}; seen.set(v, out)
          childLength = 0
          let ks; try { ks = _keys(v) } catch (e) { lost(e); return out }
          childKeys = ks; childLength = ks.length
          return out
        }
        const root = make(rootVal, 1)
        let src = rootVal, out = root, keys = childKeys, len = childLength, i = 0, depth = 1
        let own = null, below = null
        for (;;) {
          if (i >= len) {
            if (below === null) return root
            own = below; below = own.below
            src = own.src; out = own.out; keys = own.keys; len = own.len; i = own.i; depth = own.depth
            continue
          }
          const at = i++
          let down = null, made
          if (keys === null) {
            try {
              const vi = src[at]
              if (vi === null || typeof vi !== 'object') { out[at] = typeof vi === 'function' ? undefined : vi; continue }
              const hit = seen.get(vi)
              if (hit !== undefined) { out[at] = hit; continue }
              made = out[at] = make(vi, depth + 1)
              down = vi
            } catch (e) { lost(e); out[at] = undefined; continue }
          } else {
            const k = keys[at]
            ${r === "carried" ? "" : "if (k === '__proto__') continue"}
            try {
              const vk = src[k]
              if (typeof vk === 'function') continue
              made = vk
              if (vk !== null && typeof vk === 'object') {
                const hit = seen.get(vk)
                if (hit !== undefined) made = hit
                else { made = make(vk, depth + 1); down = vk }
              }
              _defineProperty(out, k, { value: made, writable: true, enumerable: true, configurable: true })
            } catch (e) { lost(e); continue }
          }
          if (down === null || childLength === 0) continue
          if (own === null) own = { src, out, keys, len, i, depth, below }
          else own.i = i
          below = own; own = null
          src = down; out = made; keys = childKeys; len = childLength; i = 0; depth = depth + 1
        }
      }`;
}
function S() {
  return `(() => {
      'use strict';
      ${l({ arrayLengthCap: import_chunk_k886eq88.NS, isLeaving: true, isListSeenFirst: true, protoKey: "left-out" })}
      return { __proto__: null,
        sanitize: copy,
        snapshot: (v) => {
          if (v === null || typeof v !== 'object') return []
          const len = checkedLength(v)
          const out = []
          for (let i = 0; i < len; i++) {
            try { out[i] = v[i] } catch (e) { lost(e); out[i] = undefined }
          }
          return out
        },
        getProp: (o, k) => {
          try { return o === null || o === undefined ? undefined : o[k] } catch (e) { lost(e); return undefined }
        },
      }
    })()`;
}
