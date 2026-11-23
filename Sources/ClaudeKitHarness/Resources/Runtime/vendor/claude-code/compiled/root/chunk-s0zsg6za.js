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
var chunk_s0zsg6za_exports = {};
__export(chunk_s0zsg6za_exports, {
  Cbo: () => Cbo,
  avr: () => avr,
  bbl: () => bbl,
  kbl: () => kbl,
  kbs: () => kbs,
  oBi: () => oBi,
  sBi: () => sBi,
  wbl: () => wbl
});
module.exports = __toCommonJS(chunk_s0zsg6za_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
class d {
  #e;
  #t = false;
  get() {
    return this.#e;
  }
  isAssumed() {
    return this.#t;
  }
  replace(e, t = false) {
    this.#e = e, this.#t = t;
  }
}
var a = new import_chunk_pzzqg6s3.ze(() => new d());
function kbs() {
  return a.peek((0, import_chunk_f9x2f6cx.N)())?.get();
}
function Cbo() {
  return ((0, import_chunk_42tcgre6.M8)() && !(0, import_chunk_42tcgre6.Tge)() ? void 0 : kbs()) ?? ((0, import_chunk_f9x2f6cx.Pd)() ? "UTC" : void 0);
}
function o() {
  return (0, import_chunk_k67pwqya.cLe)()?.currentDate ?? void 0;
}
function oBi() {
  let e = o();
  if (e !== void 0) return e;
  let t = /* @__PURE__ */ new Date(), n = kbs();
  if (n !== void 0) {
    let r = new Map((0, import_chunk_em52jhgp.Eee)("en-US", { timeZone: n, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(t).map((s) => [s.type, s.value]));
    return `${r.get("year")}-${r.get("month")}-${r.get("day")}`;
  }
  let i = t.getFullYear(), c = String(t.getMonth() + 1).padStart(2, "0"), f = String(t.getDate()).padStart(2, "0");
  return `${i}-${c}-${f}`;
}
var m = process.env.TZ;
function g(e, t) {
  let n = e;
  return n === "UTC" || n === "Etc/UTC";
}
function bbl() {
  if (o() !== void 0) return false;
  let e = a.peek((0, import_chunk_f9x2f6cx.N)());
  return e?.get() !== void 0 ? e.isAssumed() : (0, import_chunk_6e68m1dj.hn)() && (/* @__PURE__ */ new Date()).getTimezoneOffset() === 0 && (g(process.env.TZ, m) || Intl.DateTimeFormat().resolvedOptions().timeZone === "UTC");
}
class u {
  #e;
  get() {
    return this.#e ??= oBi(), this.#e;
  }
  clear() {
    this.#e = void 0;
  }
  get captured() {
    return this.#e !== void 0;
  }
}
var avr = new import_chunk_pzzqg6s3.ze(() => new u());
function sBi(e) {
  return avr.of(e).get();
}
function wbl() {
  return sBi((0, import_chunk_f9x2f6cx.N)());
}
function kbl() {
  let e = o();
  return (e === void 0 ? /* @__PURE__ */ new Date() : new Date(e)).toLocaleString("en-US", { month: "long", year: "numeric" });
}
