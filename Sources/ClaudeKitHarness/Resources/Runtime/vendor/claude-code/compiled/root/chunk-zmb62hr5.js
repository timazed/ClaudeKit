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
var chunk_zmb62hr5_exports = {};
__export(chunk_zmb62hr5_exports, {
  D6e: () => D6e,
  Ece: () => Ece,
  H6e: () => H6e,
  Hw: () => Hw,
  Ira: () => Ira,
  M6e: () => M6e,
  Qd: () => Qd,
  Vy: () => Vy,
  Yt: () => Yt,
  Zb: () => Zb,
  _Lr: () => _Lr,
  bBl: () => bBl,
  c4t: () => c4t,
  dP: () => dP,
  gF: () => gF,
  gLr: () => gLr,
  jM: () => jM,
  sse: () => sse,
  tyn: () => tyn,
  u4t: () => u4t,
  ur: () => ur,
  wBl: () => wBl,
  zA: () => zA
});
module.exports = __toCommonJS(chunk_zmb62hr5_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var Vy = ["CLAUDE_CODE_USE_BEDROCK", "CLAUDE_CODE_USE_FOUNDRY", "CLAUDE_CODE_USE_ANTHROPIC_AWS", "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD", "CLAUDE_CODE_USE_MANTLE", "CLAUDE_CODE_USE_VERTEX"];
var M6e = ["claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-fable-5", "claude-fable-5-1", "claude-fable-5-2", "claude-haiku-4-5", "claude-haiku-5-5", "claude-mythos-5", "claude-mythos-5-1", "claude-mythos-5-2", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-opus-5-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-sonnet-5-5"], Ece = ["sonnet", "opus", "haiku", "fable", "best", "sonnet[1m]", "opus[1m]", "fable[1m]", "opusplan"], sse = ["sonnet", "opus", "haiku", "fable"];
var c4t = "claude-mythos-preview";
function Hw(e) {
  return Ece.includes(e);
}
function H6e(e) {
  if (Hw(e)) return true;
  let r = Yt(e);
  return r !== e && Yt(r) === r && Hw(r);
}
function Yt(e) {
  return e.replace(/\[1m\]$/i, "");
}
function dP(e, r) {
  return Yt(e).toLowerCase() === Yt(r).toLowerCase();
}
function ur(e) {
  return e.replace(/\[(1|2)m\]/gi, "");
}
function jM(e) {
  return false;
}
function gF(e) {
  return jM(e) ? "claude-opus-5-5" : e;
}
function Zb(e) {
  return sse.includes(e);
}
function Qd(e) {
  let r = e.trim().toLowerCase();
  if (r === "" || /\s/.test(r)) return null;
  r = r.replace(/\[[12]m\]$/, "");
  let s = r.lastIndexOf("/");
  if (s !== -1) r = r.slice(s + 1);
  let t = /^(?:([a-z-]+)\.)?anthropic\.(claude-.*)$/.exec(r);
  if (t) {
    let [, i, l = ""] = t;
    if (i !== void 0 && !import_chunk_c203g5kd.pJ.includes(i)) return null;
    r = l;
  }
  let n = c(r);
  if (!n) return null;
  let o = r.slice(n.base.length);
  if (o !== "" && !/^[-@]/.test(o)) return null;
  let a = { family: n.family, major: n.major, legacyVersionFirst: n.legacyVersionFirst, base: n.base };
  if (n.minor !== void 0) a.minor = n.minor;
  if (!Ira(o)) a.trailer = o;
  else {
    let i = /(?:-v\d+@|[-@])(\d{8})/.exec(o)?.[1];
    if (i !== void 0) a.date = i;
  }
  return a;
}
function gLr(e) {
  return e.replace(/(claude-(?:[a-z]+-)?\d{1,2})\.(?=\d)/g, "$1-");
}
function Ira(e) {
  return /^(?:-fast|-latest)?(?:-v\d{1,3}@\d{8}|[-@]\d{8})?(?:-v\d{1,3}(?::\d{1,3})?)?$/.test(e);
}
function u(e) {
  return ["experimental", "internal", "prefixlock", "preview", "prod", "snapshot", "test"].includes(e);
}
function bBl(e) {
  return /^[a-z]{1,24}((?:-[a-z0-9]{1,16}){1,6})(?:\[[12]m\])?$/.exec(e)?.[1]?.split("-").some(u) === true;
}
function wBl(e) {
  return /-v\d+(?::\d+)?$/.test(e);
}
function zA(e) {
  return e !== null && e.trailer === void 0;
}
function D6e(e, r) {
  return e.major - r.major || (e.minor ?? 0) - (r.minor ?? 0);
}
function tyn(e, r) {
  return e.family === r.family && e.legacyVersionFirst === r.legacyVersionFirst && D6e(e, r) === 0;
}
function u4t(e) {
  switch (e) {
    case "haiku":
      return 0;
    case "sonnet":
      return 1;
    case "opus":
      return 2;
    case "fable":
    case "mythos":
      return 3;
    default:
      return;
  }
}
function _Lr(e, r) {
  if (typeof e !== "string") return false;
  let s = Qd(e), t = Qd(r);
  if (!zA(s) || !zA(t)) return false;
  let n = u4t(s.family), o = u4t(t.family);
  if (n === void 0 || o === void 0) return false;
  return o >= n && D6e(d(t), s) >= 0;
}
function d(e) {
  return (e.family === "fable" || e.family === "mythos") && e.major === 5 && e.minor === 2 ? { major: 5, minor: 5 } : e;
}
function c(e) {
  let r = /^claude-([a-z]+)-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?/.exec(e);
  if (r) {
    let [t, n = "", o = "", a] = r;
    return { family: n, major: Number(o), minor: a === void 0 ? void 0 : Number(a), legacyVersionFirst: false, base: t };
  }
  let s = /^claude-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?-([a-z]+)/.exec(e);
  if (s) {
    let [t, n = "", o, a = ""] = s;
    return { family: a, major: Number(n), minor: o === void 0 ? void 0 : Number(o), legacyVersionFirst: true, base: t };
  }
  return null;
}
