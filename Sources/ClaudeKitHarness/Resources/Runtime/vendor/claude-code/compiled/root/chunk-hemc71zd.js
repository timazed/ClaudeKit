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
var chunk_hemc71zd_exports = {};
__export(chunk_hemc71zd_exports, {
  OYs: () => OYs,
  PYs: () => PYs,
  THt: () => THt,
  c7t: () => c7t,
  d7t: () => d7t,
  lMe: () => lMe
});
module.exports = __toCommonJS(chunk_hemc71zd_exports);
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
function a(e, n) {
  return Object.entries(e.frameUrls ?? {}).find(([i, r]) => r?.url !== void 0 && !(0, import_chunk_bzyb60p0.lrt)(i) && (0, import_chunk_r8478wtb.Xc)(r.url) === n)?.[0];
}
function d(e, n) {
  return Object.entries(e.frameUrls ?? {}).some(([i, r]) => r?.url !== void 0 && (0, import_chunk_r8478wtb.Xc)(r.url) === n && (i.endsWith(".workshop.html") || i.endsWith(".workshop.md")));
}
var l = Object.freeze({}), c = (0, import_chunk_se72nykz.EVt)("artifactReadConsentSlugs", l), m = (0, import_chunk_se72nykz.EVt)("artifactConsentEpoch", 0);
function PYs(e, n) {
  return { ownPublishes: (0, import_chunk_f2vegtjy.gFi)(e, n), recordedPages: { isWorkshopPage: (i) => d(e(), i), localSourcePath: (i) => a(e(), i) }, sharedReadConsent: c(e, n), consentEpoch: m(e, n) };
}
function d7t() {
  let e = {};
  return PYs(() => e, (n) => {
    e = n(e);
  });
}
var c7t = { assign: () => import_chunk_xfj2cwfv.aT[0], get: () => {
  return;
} };
function THt(e) {
  return { assign(n) {
    let i = e.get(), r = i.assignments.get(n);
    if (r) return r;
    let t = import_chunk_xfj2cwfv.aT[i.index % import_chunk_xfj2cwfv.aT.length];
    return e.set((s) => {
      if (s.assignments.has(n)) return s;
      let o = new Map(s.assignments);
      return o.set(n, t), { assignments: o, index: s.index + 1 };
    }), t;
  }, get(n) {
    return e.get().assignments.get(n);
  } };
}
var lMe = Object.freeze({ bridge: void 0, channel: void 0, holdTerminalOnlyWait() {
  return () => {
  };
} });
class OYs {
  #n = void 0;
  #o = void 0;
  #i = 0;
  #r = void 0;
  #e = void 0;
  get bridge() {
    return this.#n;
  }
  get channel() {
    return this.#o;
  }
  connectBridge(e) {
    this.#t(), this.#n = e, this.#s();
  }
  disconnectBridge() {
    this.#n = void 0, this.#t();
  }
  setChannel(e) {
    this.#o = e;
  }
  holdTerminalOnlyWait() {
    this.#i += 1, this.#s();
    let e = true;
    return () => {
      if (!e) return;
      e = false, this.#i -= 1, this.#s();
    };
  }
  #s() {
    let e = this.#i > 0 && this.#n !== void 0;
    if (e === (this.#r !== void 0)) {
      clearTimeout(this.#e), this.#e = void 0;
      return;
    }
    if (this.#e !== void 0) return;
    let n = setTimeout(() => {
      this.#e = void 0;
      let i = this.#n;
      if (i !== void 0 && this.#i > 0) {
        this.#r ??= i.permission.reportTerminalOnlyAsk();
        return;
      }
      this.#t();
    }, e ? 1e3 : 500);
    n.unref?.(), this.#e = n;
  }
  #t() {
    clearTimeout(this.#e), this.#e = void 0, this.#r?.(), this.#r = void 0;
  }
}
