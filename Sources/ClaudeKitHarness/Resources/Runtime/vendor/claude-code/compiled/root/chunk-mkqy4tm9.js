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
var chunk_mkqy4tm9_exports = {};
__export(chunk_mkqy4tm9_exports, {
  IOa: () => IOa,
  IVo: () => IVo,
  MOa: () => MOa,
  OOa: () => OOa,
  POa: () => POa,
  dTn: () => dTn,
  q8s: () => q8s,
  xOa: () => xOa
});
module.exports = __toCommonJS(chunk_mkqy4tm9_exports);
var IVo = ["send", "tool", "compact", "done", "ask", "error", "click"], xOa = 16, POa = 3, OOa = 20, IOa = 1e4, A = ["sine", "triangle", "square", "saw", "bell"], E = ["white", "pink", "brown", "crackle"], H = ["lowpass", "highpass", "bandpass"];
var M = /^([A-G])([#b]?)(\d)$/, L = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 }, m = { step: [0, 2, 0], attack: [2e-3, 2, 5e-3], release: [0.01, 4, 0.4], gain: [0, 1, 0.5], pan: [-1, 1, 0], glide: [-24, 24, 0], scatter: [0.02, 10, 0], reverb: [0, 1, 0] }, _ = ["wave", "notes", "step", "attack", "release", "gain", "pan", "glide", "filter", "tremolo"], x = ["step", "attack", "release", "glide"], I = ["notes", "step", "glide"];
class c extends Error {
}
function MOa(n) {
  try {
    if (!z(n)) throw new c("sound may hold at most 1500 values, counting every field and list entry");
    let e = b(n, "sound", ["ambience", "cues"]), r = e.cues === void 0 ? {} : b(e.cues, "sound.cues", IVo), o = {};
    for (let t of IVo) if (r[t] !== void 0) o[t] = N(r[t], `sound.cues.${t}`, t);
    if (e.ambience === void 0 && Object.keys(o).length === 0) throw new c("sound needs an ambience or at least one cue");
    return { ambience: e.ambience === void 0 ? null : N(e.ambience, "sound.ambience", "ambience"), cues: o };
  } catch (e) {
    if (e instanceof c) return e.message;
    throw e;
  }
}
function dTn(n) {
  return (n.notes.length - 1) * n.step + n.attack + n.release;
}
function q8s(n) {
  return Math.max(...n.layers.map((e) => e.notes.length));
}
function z(n) {
  let e = [n];
  for (let r of e) if (typeof r === "object" && r !== null) {
    let o = Array.isArray(r) ? r.length : Object.keys(r).length;
    if (e.length + o > 1500) return false;
    e.push(...Object.values(r));
  }
  return true;
}
function b(n, e, r) {
  if (typeof n !== "object" || n === null || Array.isArray(n)) throw new c(`${e} is an object with any of ${r.join(", ")}`);
  let o = Object.keys(n).find((t) => !r.includes(t));
  if (o !== void 0) throw new c(`${e} takes no "${o.slice(0, 32).replace(/[^ -~]/g, "?")}": it takes ${r.join(", ")}`);
  return Object.fromEntries(Object.entries(n));
}
function i(n, e, r) {
  let [o, t, a] = r;
  if (n === void 0 && !Number.isNaN(a)) return a;
  if (typeof n !== "number" || !(n >= o && n <= t)) throw new c(`${e} is a number, ${o} to ${t}`);
  return n;
}
function g(n, e, r) {
  let o = r.find((t) => t === n);
  if (o === void 0) throw new c(`${e} is one of ${r.join(", ")}`);
  return o;
}
function k(n, e, r) {
  if (!Array.isArray(n) || n.length < 1 || n.length > r) throw new c(`${e} is a list of 1 to ${r}`);
  return Array.from(n);
}
function P(n, e) {
  let [, r, o, t] = (typeof n === "string" ? M.exec(n) : null) ?? [], a = (L[r ?? ""] ?? Number.NaN) + Number(o === "#") - Number(o === "b") + (Number(t) - 4) * 12, l = typeof n === "number" ? n : 440 * 2 ** (a / 12);
  if (l !== 0 && !(l >= 20 && l <= 1e4)) throw new c(`${e} is a note name such as "C5" or "F#3", a pitch of 20 to 10000 hertz, or 0 for a rest`);
  return l;
}
function D(n, e, r) {
  let o = r === "ambience", t = b(n, e, o ? [..._, "drone", "scatter"] : _), a = g(t.wave, `${e}.wave`, [...A, ...E]), l = E.includes(a), f = t.drone === true;
  if (o && (f ? t.scatter !== void 0 : t.scatter === void 0)) throw new c(`${e} needs exactly one of drone: true and scatter`);
  if (t.drone !== void 0 && !f) throw new c(`${e}.drone is true, or left out`);
  let d = [[f, "a drone sounds without a break", x], [l, "a noise has no pitch", I], [r === "click", "a click plays one note, chosen by where it lands", ["step"]]];
  for (let [y, w, T] of d) {
    let p = T.find((C) => y && t[C] !== void 0);
    if (p !== void 0) throw new c(`${e} takes no ${p}: ${w}`);
  }
  let S = l ? [1] : k(t.notes, `${e}.notes`, 16).map((y, w) => P(y, `${e}.notes[${w}]`)), s = t.filter === void 0 ? null : b(t.filter, `${e}.filter`, ["type", "hz", "to"]), u = t.tremolo === void 0 ? null : b(t.tremolo, `${e}.tremolo`, ["hz", "depth"]), h = s === null ? 0 : i(s.hz, `${e}.filter.hz`, [20, 1e4, Number.NaN]), O = { wave: a, notes: S, step: i(t.step, `${e}.step`, m.step), attack: i(t.attack, `${e}.attack`, m.attack), release: i(t.release, `${e}.release`, m.release), gain: i(t.gain, `${e}.gain`, m.gain), pan: i(t.pan, `${e}.pan`, m.pan), glide: i(t.glide, `${e}.glide`, m.glide), filter: s && { type: g(s.type, `${e}.filter.type`, H), hz: h, to: i(s.to, `${e}.filter.to`, [20, 1e4, h]) }, tremolo: u && { hz: i(u.hz, `${e}.tremolo.hz`, [0.05, 30, Number.NaN]), depth: i(u.depth, `${e}.tremolo.depth`, [0, 1, Number.NaN]) }, scatter: i(t.scatter, `${e}.scatter`, m.scatter) };
  if (!f && dTn(O) > 4) throw new c(`${e} lasts ${dTn(O).toFixed(1)} seconds, and the most is 4: shorten its notes, step or release`);
  return O;
}
function N(n, e, r) {
  let o = b(n, e, ["layers", "reverb"]), t = { layers: k(o.layers, `${e}.layers`, 8).map((s, u) => D(s, `${e}.layers[${u}]`, r)), reverb: i(o.reverb, `${e}.reverb`, m.reverb) }, a = t.reverb * 3, l = r === "click" ? q8s(t) : 1, f = r === "ambience" ? 256 : 32, d = 0, S = 0;
  for (let s of t.layers) {
    let u = s.attack + s.release, h = a === 0 ? 0 : dTn(s) + a;
    if (r === "click") d += l * u;
    else if (r !== "ambience") d += s.notes.length * u;
    else if (s.scatter === 0) d += s.notes.length * 16;
    else d += s.notes.length * u + (s.step === 0 ? s.notes.length : 1) * h, S += s.scatter * (dTn(s) + a);
  }
  if (a > 0) d += r === "ambience" ? 16 : l * (Math.max(...t.layers.map(dTn)) + a);
  if (d > f) throw new c(`${e} would take ${Math.ceil(d)} seconds of audio to render, and the most is ${f}. Use fewer or shorter notes, or less reverb`);
  if (S > 24) throw new c(`${e} scatters about ${Math.ceil(S)} hits at once, and the most is 24: lower a scatter, a release or the reverb`);
  return t;
}
