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
var chunk_r6fna520_exports = {};
__export(chunk_r6fna520_exports, {
  $_l: () => $_l,
  B7: () => B7,
  Ckr: () => Ckr,
  D1i: () => D1i,
  D_l: () => D_l,
  F_l: () => F_l,
  H_l: () => H_l,
  I_l: () => I_l,
  JWt: () => JWt,
  Jyo: () => Jyo,
  L1i: () => L1i,
  L_l: () => L_l,
  M_l: () => M_l,
  Mys: () => Mys,
  N1i: () => N1i,
  N_l: () => N_l,
  O_l: () => O_l,
  Qpe: () => Qpe,
  Qv: () => Qv,
  Qyo: () => Qyo,
  XWt: () => XWt,
  YWt: () => YWt,
  aUn: () => aUn,
  gle: () => gle,
  iUn: () => iUn,
  lUn: () => lUn
});
module.exports = __toCommonJS(chunk_r6fna520_exports);
var O_l = 10485760, I_l = 2e3, M_l = 2e3, YWt = 3e3, B7 = 512e3;
var I = { imageMaxRawBytes: 307200, wholePdfMaxRawBytes: 0, pdfMaxPagesPerRead: 3 }, a = { imageMaxRawBytes: 512e3, wholePdfMaxRawBytes: 25e5, pdfMaxPagesPerRead: 6 };
function Mys(e) {
  switch (e) {
    case "session":
    case "relay":
      return a;
    case "bridge":
    case "direct":
      return I;
    default: {
      let _ = e;
      return I;
    }
  }
}
var Jyo = 28;
function Qpe(e, _) {
  if (e <= 0 || _ <= 0) return 0;
  return Math.ceil(e / Jyo) * Math.ceil(_ / Jyo);
}
function iUn(e, _, t = 1568, o = 1568) {
  if (e <= t && _ <= t && Qpe(e, _) <= o) return [e, _];
  if (_ > e) {
    let [E, n] = iUn(_, e, t, o);
    return [n, E];
  }
  let M = e / _, r = 1, A = e;
  while (r + 1 < A) {
    let E = Math.floor((r + A) / 2), n = Math.max(s(E / M), 1);
    if (E <= t && Qpe(E, n) <= o) r = E;
    else A = E;
  }
  return [r, Math.max(s(r / M), 1)];
}
function s(e) {
  let _ = Math.floor(e), t = e - _;
  return t > 0.5 || t === 0.5 && _ % 2 === 1 ? _ + 1 : _;
}
var Qv = { maxWidth: 2e3, maxHeight: 2e3, maxBase64Size: 5242880, targetRawSize: 3932160 }, XWt = 33554432, aUn = 20971520, H_l = 100, lUn = 104857600, gle = 20, JWt = 10, D_l = 100, Qyo = 600, D1i = 20, L_l = [510, 255, 127], N_l = 78643200, L1i = XWt - 8388608, F_l = 25165824, N1i = 10485760, Ckr = 64e3, $_l = 65536;
