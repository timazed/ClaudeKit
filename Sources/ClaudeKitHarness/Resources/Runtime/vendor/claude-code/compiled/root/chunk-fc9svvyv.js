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
var chunk_fc9svvyv_exports = {};
__export(chunk_fc9svvyv_exports, {
  $2s: () => $2s,
  Cd: () => Cd,
  U2s: () => U2s,
  Use: () => Use,
  Zz: () => Zz,
  _Bo: () => _Bo,
  lKe: () => lKe,
  zWr: () => zWr
});
module.exports = __toCommonJS(chunk_fc9svvyv_exports);
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function T() {
  return (0, import_chunk_ky5sghtd.va)().get(process.stdout)?.invalidatePrevFrame();
}
function g(e) {
  return e.activeOverlays.size > 0;
}
function C(e) {
  return d(e.activeOverlays);
}
function M(e) {
  return lKe(e.activeOverlays);
}
function V(e) {
  for (const r of e.activeOverlays) {
    if (l.has(r)) {
      return true;
    }
  }
  return false;
}
var _Bo = "prompt-help", m = /* @__PURE__ */ new Set(["autocomplete", _Bo]), h = /* @__PURE__ */ new Set(["above-prompt-input", "above-prompt-select"]), l = /* @__PURE__ */ new Set(["history-search"]), Use = 2;
function Cd(e, r) {
  let O = (0, import_chunk_sng02qpc.k)(8), t = r === void 0 ? true : r, n = (0, import_chunk_bs4h6795.be)(import_chunk_74h6kcya.uW)?.setState, x, S;
  if (O[0] !== t || O[1] !== e || O[2] !== n) x = () => {
    if (!t || !n) {
      return;
    }
    return n((v) => {
      if (v.activeOverlays.has(e)) {
        return v;
      }
      let b = new Set(v.activeOverlays);
      return b.add(e), { ...v, activeOverlays: b };
    }), () => {
      n((c) => {
        if (!c.activeOverlays.has(e)) {
          return c;
        }
        let y = new Set(c.activeOverlays);
        return y.delete(e), { ...c, activeOverlays: y };
      });
    };
  }, S = [e, t, n], O[0] = t, O[1] = e, O[2] = n, O[3] = x, O[4] = S;
  else x = O[3], S = O[4];
  (0, import_chunk_bs4h6795.H)(x, S);
  let A, R;
  if (O[5] !== t) A = () => {
    if (!t) {
      return;
    }
    return T;
  }, R = [t], O[5] = t, O[6] = A, O[7] = R;
  else A = O[6], R = O[7];
  (0, import_chunk_bs4h6795.It)(A, R);
}
function $2s() {
  return (0, import_chunk_74h6kcya.X)(g);
}
function d(e) {
  for (let r of e) if (!h.has(r)) return true;
  return false;
}
function zWr() {
  return (0, import_chunk_74h6kcya.X)(C);
}
function lKe(e) {
  for (let r of e) if (!m.has(r)) return true;
  return false;
}
function Zz() {
  return (0, import_chunk_74h6kcya.X)(M);
}
function U2s() {
  return (0, import_chunk_74h6kcya.Ps)(V) ?? false;
}
