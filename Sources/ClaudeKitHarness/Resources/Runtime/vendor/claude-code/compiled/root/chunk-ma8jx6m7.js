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
var chunk_ma8jx6m7_exports = {};
__export(chunk_ma8jx6m7_exports, {
  Bsr: () => Bsr,
  DMe: () => DMe,
  PXr: () => PXr,
  Qii: () => Qii,
  UWa: () => UWa,
  Wsr: () => Wsr,
  Zii: () => Zii,
  aYo: () => aYo,
  eai: () => eai,
  gE: () => gE,
  iYo: () => iYo,
  jJt: () => jJt,
  jsr: () => jsr,
  nai: () => nai,
  t_t: () => t_t,
  tai: () => tai,
  tne: () => tne
});
module.exports = __toCommonJS(chunk_ma8jx6m7_exports);
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
function p() {
  return (0, import_chunk_se72nykz.ps)({ value: "", active: false, launchWarning: null, linkSuppliedTexts: /* @__PURE__ */ new Set(), submittedLinkPrefill: null, vimMode: "INSERT", stash: null, cameBack: false, isShellMode: false, requestedMode: null });
}
var u = new import_chunk_pzzqg6s3.ze(() => p());
function gE(n) {
  return u.of(n);
}
function tne(n) {
  return gE(n).getState().value;
}
function t_t(n, e) {
  n.setState((t) => {
    if (t.value === e) return t;
    if (t.value !== "" && e === "") {
      let o = t.value.trim(), r = t.launchWarning?.type === "deep-link" && t.launchWarning.text === void 0 ? new Set(t.linkSuppliedTexts).add(o) : t.linkSuppliedTexts;
      return { ...t, value: e, launchWarning: null, linkSuppliedTexts: r, submittedLinkPrefill: r.has(o) ? t.value : null, cameBack: false };
    }
    return { ...t, value: e };
  });
}
function Bsr(n) {
  return gE(n).getState().launchWarning?.type === "continued";
}
function Qii(n) {
  return gE(n).getState().submittedLinkPrefill;
}
function Zii(n, e, t) {
  gE(n).setState((o) => {
    let r = t.trim();
    if (r === "" || o.linkSuppliedTexts.has(r) || !o.linkSuppliedTexts.has(e.trim())) return o;
    return { ...o, linkSuppliedTexts: new Set(o.linkSuppliedTexts).add(r) };
  });
}
function DMe(n, e) {
  t_t(gE(n), e);
}
function jJt(n, e) {
  gE(n).setState((t) => ({ ...t, requestedMode: e }));
}
function eai(n, e) {
  n.setState((t) => t.stash === e ? t : { ...t, stash: e });
}
function tai(n, e) {
  n.setState((t) => t.isShellMode === e ? t : { ...t, isShellMode: e });
}
function Wsr(n) {
  let { isShellMode: e, vimMode: t } = n.getState();
  return !e && t === "INSERT";
}
function PXr(n, e) {
  n.setState((t) => t.active === e ? t : { ...t, active: e });
}
function iYo(n, e) {
  PXr(gE(n), e);
}
function UWa(n, e) {
  n.setState((t) => {
    let o = e && t.value !== "";
    return t.cameBack === o ? t : { ...t, cameBack: o };
  });
}
function jsr(n, e) {
  gE(n).setState((t) => t.vimMode === e ? t : { ...t, vimMode: e });
}
function aYo(n, e) {
  n.setState((t) => {
    let o = e.type === "deep-link" ? e.text?.trim() : void 0, r = o === void 0 || t.linkSuppliedTexts.has(o) ? t.linkSuppliedTexts : new Set(t.linkSuppliedTexts).add(o), i = t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t.launchWarning : e;
    return i === t.launchWarning && r === t.linkSuppliedTexts ? t : { ...t, launchWarning: i, linkSuppliedTexts: r };
  });
}
function nai(n, e) {
  aYo(gE(n), e);
}
