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
var chunk_0f2gasyz_exports = {};
__export(chunk_0f2gasyz_exports, {
  $Dl: () => $Dl,
  AIr: () => AIr,
  APe: () => APe,
  BDl: () => BDl,
  DOs: () => DOs,
  FDl: () => FDl,
  GDl: () => GDl,
  HOs: () => HOs,
  Jl: () => Jl,
  K8i: () => K8i,
  KDl: () => KDl,
  LOs: () => LOs,
  NOs: () => NOs,
  Tw: () => Tw,
  UDl: () => UDl,
  VDl: () => VDl,
  WDl: () => WDl,
  Wke: () => Wke,
  X1: () => X1,
  X8i: () => X8i,
  Xx: () => Xx,
  Y8i: () => Y8i,
  YDl: () => YDl,
  YN: () => YN,
  bVt: () => bVt,
  cVn: () => cVn,
  dVn: () => dVn,
  jDl: () => jDl,
  jke: () => jke,
  lVn: () => lVn,
  nFe: () => nFe,
  o8: () => o8,
  pD: () => pD,
  q8i: () => q8i,
  qDl: () => qDl,
  r3: () => r3,
  rFe: () => rFe,
  shn: () => shn,
  uVn: () => uVn,
  zDl: () => zDl
});
module.exports = __toCommonJS(chunk_0f2gasyz_exports);
var r3 = { NUL: 0, SOH: 1, STX: 2, ETX: 3, EOT: 4, ENQ: 5, ACK: 6, BEL: 7, BS: 8, HT: 9, LF: 10, VT: 11, FF: 12, CR: 13, SO: 14, SI: 15, DLE: 16, DC1: 17, DC2: 18, DC3: 19, DC4: 20, NAK: 21, SYN: 22, ETB: 23, CAN: 24, EM: 25, SUB: 26, ESC: 27, FS: 28, GS: 29, RS: 30, US: 31, DEL: 127 }, Tw = "\x1B", X1 = "\x07", lVn = ";", HOs = "\x1B(B", Wke = { CSI: 91, OSC: 93, DCS: 80, APC: 95, PM: 94, SOS: 88, ST: 92 };
function K8i(t) {
  return t >= 48 && t <= 126;
}
var APe = Tw + String.fromCharCode(Wke.CSI), o = { PARAM_START: 48, PARAM_END: 63, INTERMEDIATE_START: 32, INTERMEDIATE_END: 47, FINAL_START: 64, FINAL_END: 126 };
function FDl(t) {
  return t >= o.PARAM_START && t <= o.PARAM_END;
}
function AIr(t) {
  return t >= o.INTERMEDIATE_START && t <= o.INTERMEDIATE_END;
}
function $Dl(t) {
  return t >= o.FINAL_START && t <= o.FINAL_END;
}
function Jl(...t) {
  if (t.length === 0) return APe;
  if (t.length === 1) return `${APe}${t[0]}`;
  let r = t.slice(0, -1), n = t.at(-1);
  return `${APe}${r.join(lVn)}${n}`;
}
var pD = { CUU: 65, CUD: 66, CUF: 67, CUB: 68, CNL: 69, CPL: 70, CHA: 71, CUP: 72, CHT: 73, HPA: 96, HPR: 97, VPA: 100, VPR: 101, HVP: 102, ED: 74, EL: 75, ECH: 88, IL: 76, DL: 77, ICH: 64, DCH: 80, SU: 83, SD: 84, SM: 104, RM: 108, SGR: 109, DSR: 110, DECSCUSR: 113, DECSTBM: 114, SCOSC: 115, SCORC: 117, CBT: 90 }, UDl = ["toEnd", "toStart", "all", "scrollback"], BDl = ["toEnd", "toStart", "all"], q8i = [{ style: "block", blinking: true }, { style: "block", blinking: true }, { style: "block", blinking: false }, { style: "underline", blinking: true }, { style: "underline", blinking: false }, { style: "bar", blinking: true }, { style: "bar", blinking: false }];
function e(t = 1) {
  return t === 0 ? "" : Jl(t, "A");
}
function DOs(t = 1) {
  return t === 0 ? "" : Jl(t, "B");
}
function x(t = 1) {
  return t === 0 ? "" : Jl(t, "C");
}
function s(t = 1) {
  return t === 0 ? "" : Jl(t, "D");
}
function nFe(t) {
  return Jl(t, "G");
}
var Y8i = Jl("G");
function jke(t, r) {
  return Jl(t, r, "H");
}
var Xx = Jl("H");
function o8(t, r) {
  let n = "";
  if (t < 0) n += s(-t);
  else if (t > 0) n += x(t);
  if (r < 0) n += e(-r);
  else if (r > 0) n += DOs(r);
  return n;
}
function dVn() {
  return Jl("K");
}
var rFe = Jl(2, "K"), YN = Jl(2, "J"), WDl = Jl(3, "J");
function shn(t) {
  if (t <= 0) return "";
  let r = "";
  for (let n = 0; n < t; n++) if (r += rFe, n < t - 1) r += e(1);
  return r += Y8i, r;
}
function jDl(t = 1) {
  return t === 0 ? "" : Jl(t, "S");
}
function GDl(t = 1) {
  return t === 0 ? "" : Jl(t, "T");
}
function zDl(t, r) {
  return Jl(t, r, "r");
}
var bVt = Jl("r"), LOs = Jl("200~"), NOs = Jl("201~"), cVn = Jl("I"), uVn = Jl("O"), VDl = Jl(">5u"), KDl = Jl(">1u"), X8i = Jl("<u"), qDl = Jl(">4;2m"), YDl = Jl(">4m");
