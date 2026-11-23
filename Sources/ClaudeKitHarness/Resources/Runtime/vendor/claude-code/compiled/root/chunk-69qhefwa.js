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
var chunk_69qhefwa_exports = {};
__export(chunk_69qhefwa_exports, {
  $ce: () => $ce,
  Be: () => Be,
  Ck: () => Ck,
  Ne: () => Ne,
  Oi: () => Oi,
  wVe: () => wVe
});
module.exports = __toCommonJS(chunk_69qhefwa_exports);
var s = globalThis.process?.getBuiltinModule?.("async_hooks"), $ce = s ? (e) => s.AsyncResource.bind(e) : (e) => e;
function Ne(e) {
  if (!e) return false;
  if (typeof e === "boolean") return e;
  let n = String(e).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(n);
}
function Oi(e) {
  if (e === void 0) return false;
  if (typeof e === "boolean") return !e;
  let n = String(e).toLowerCase().trim();
  return ["0", "false", "no", "off"].includes(n);
}
function Ck(e) {
  if (!e || e.startsWith("-") || e.startsWith("/")) return false;
  if (e.includes("..")) return false;
  if (e.split("/").some((n) => n === "." || n === "")) return false;
  return /^[a-zA-Z0-9/._+@-]+$/.test(e);
}
function Be() {
  let e = /* @__PURE__ */ new Set();
  return { subscribe(n) {
    let r = $ce(n);
    return e.add(r), () => {
      e.delete(r);
    };
  }, emit(...n) {
    let r;
    for (let o of e) try {
      o(...n);
    } catch (i) {
      (r ??= []).push(i);
    }
    if (r) throw r.length === 1 ? r[0] : AggregateError(r, "Signal listener(s) threw");
  }, clear() {
    e.clear();
  } };
}
var a = { english: "en", spanish: "es", espa\u00F1ol: "es", espanol: "es", french: "fr", fran\u00E7ais: "fr", francais: "fr", japanese: "ja", \u65E5\u672C\u8A9E: "ja", german: "de", deutsch: "de", portuguese: "pt", portugu\u00EAs: "pt", portugues: "pt", italian: "it", italiano: "it", korean: "ko", \uD55C\uAD6D\uC5B4: "ko", hindi: "hi", \u0939\u093F\u0928\u094D\u0926\u0940: "hi", \u0939\u093F\u0902\u0926\u0940: "hi", indonesian: "id", "bahasa indonesia": "id", bahasa: "id", russian: "ru", \u0440\u0443\u0441\u0441\u043A\u0438\u0439: "ru", polish: "pl", polski: "pl", turkish: "tr", t\u00FCrk\u00E7e: "tr", turkce: "tr", dutch: "nl", nederlands: "nl", ukrainian: "uk", \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430: "uk", greek: "el", \u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC: "el", czech: "cs", \u010De\u0161tina: "cs", cestina: "cs", danish: "da", dansk: "da", swedish: "sv", svenska: "sv", norwegian: "no", norsk: "no" }, t = /* @__PURE__ */ new Set(["en", "es", "fr", "ja", "de", "pt", "it", "ko", "hi", "id", "ru", "pl", "tr", "nl", "uk", "el", "cs", "da", "sv", "no"]);
function wVe(e) {
  if (!e) return { code: "en" };
  let n = e.toLowerCase().trim();
  if (!n) return { code: "en" };
  if (t.has(n)) return { code: n };
  let r = a[n];
  if (r) return { code: r };
  let o = n.split("-")[0];
  if (o && t.has(o)) return { code: o };
  return { code: "en", fellBackFrom: e };
}
