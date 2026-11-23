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
var chunk_7tdejx4j_exports = {};
__export(chunk_7tdejx4j_exports, {
  Bmt: () => Bmt,
  NIt: () => NIt,
  ljr: () => ljr,
  qBo: () => qBo,
  uE: () => uE,
  vGs: () => vGs
});
module.exports = __toCommonJS(chunk_7tdejx4j_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
(0, import_chunk_bs4h6795.G)();
function h() {
  let u = (0, import_chunk_se72nykz.ps)(v);
  let V = new l();
  return u.subscribe(() => {
    if (u.getState().voiceState !== "recording") V.reset();
  }), { store: u, levelSmoother: V };
}
var v = { voiceState: "idle", voiceError: null, voiceInterimTranscript: "", voiceAudioLevels: [], voiceWarmingUp: false, awaitingVoiceSubmitDoubleTap: false };
class l {
  #e = 0;
  next(o, t) {
    return this.#e = this.#e * t + o * (1 - t), this.#e;
  }
  reset() {
    this.#e = 0;
  }
}
var i = (0, import_chunk_bs4h6795.an)(null);
function qBo(o) {
  let s = (0, import_chunk_sng02qpc.k)(3), { children: t } = o, [n] = (0, import_chunk_bs4h6795.y)(h), c;
  if (s[0] !== t || s[1] !== n) c = (0, import_chunk_a46xeenj.e)(i.Provider, { value: n, children: t }), s[0] = t, s[1] = n, s[2] = c;
  else c = s[2];
  return c;
}
function r() {
  let o = (0, import_chunk_bs4h6795.be)(i);
  if (!o) {
    throw Error("useVoiceState must be used within a VoiceProvider");
  }
  return o;
}
function NIt() {
  return r().store;
}
function vGs() {
  return r().levelSmoother;
}
function uE(o) {
  let n = (0, import_chunk_sng02qpc.k)(3), t = NIt(), s;
  if (n[0] !== o || n[1] !== t) s = () => o(t.getState()), n[0] = o, n[1] = t, n[2] = s;
  else s = n[2];
  let c = s;
  return (0, import_chunk_bs4h6795.Ot)(t.subscribe, c, c);
}
function ljr() {
  return NIt().setState;
}
function Bmt() {
  return NIt().getState;
}
