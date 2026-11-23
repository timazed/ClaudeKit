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
var chunk_k59mf0h7_exports = {};
__export(chunk_k59mf0h7_exports, {
  $2t: () => $2t,
  $Ye: () => $Ye,
  F2t: () => F2t,
  Gws: () => Gws,
  IWn: () => IWn,
  L2t: () => L2t,
  Lvt: () => Lvt,
  MWn: () => MWn,
  N2t: () => N2t,
  OWn: () => OWn,
  PZ: () => PZ,
  S9: () => S9,
  U2t: () => U2t,
  UT: () => UT,
  Ucn: () => Ucn,
  Vko: () => Vko,
  Y2e: () => Y2e,
  YZl: () => YZl,
  _ji: () => _ji,
  cji: () => cji,
  dji: () => dji,
  fji: () => fji,
  gji: () => gji,
  hji: () => hji,
  kj: () => kj,
  mji: () => mji,
  pji: () => pji,
  uji: () => uji
});
module.exports = __toCommonJS(chunk_k59mf0h7_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var l = 1500;
class a {
  buffer = "";
  seeded = "";
  leadingText = null;
  capturing = false;
  readableHandler = null;
  hasField = false;
  fieldKeyAt = 0;
  fieldKeys = 0;
  fieldClosedAt = null;
  isFieldQueued = false;
  queuedPrompt = null;
  endsInReturn = false;
  isPromptFromField = false;
  hasLaunchWarning = false;
}
var d = new import_chunk_2904xtvq.j(() => new a());
function r() {
  return d.of((0, import_chunk_f9x2f6cx.N)().host);
}
function YZl() {
  let e = r();
  if (!process.stdin.isTTY || e.capturing || (0, import_chunk_dw5px5e0.GE)("-p") || (0, import_chunk_dw5px5e0.GE)("--print")) return;
  let t = (0, import_chunk_dw5px5e0.L1e)((n) => n === "-h" || n === "--help");
  if (t !== -1 && !(0, import_chunk_dw5px5e0.QOe)(process.argv[t - 1] ?? "") && !process.stdout.isTTY) return;
  e.capturing = true, e.buffer = "", e.seeded = "", e.hasField = false, e.fieldKeyAt = 0, e.fieldKeys = 0, e.isFieldQueued = false, e.endsInReturn = false, e.queuedPrompt = null, e.hasLaunchWarning = false;
  try {
    process.stdin.setEncoding("utf8"), process.stdin.setRawMode(true), process.stdin.ref(), e.readableHandler = () => {
      let n = process.stdin.read();
      while (n !== null) {
        if (typeof n === "string") f(n);
        n = process.stdin.read();
      }
    }, process.stdin.on("readable", e.readableHandler);
  } catch {
    e.capturing = false;
  }
}
function f(e) {
  let t = r();
  t.endsInReturn = /^\r+$/.test(e);
  let n = 0;
  while (n < e.length) {
    let u = e[n], o = u.charCodeAt(0);
    if (o === 3) {
      UT(), process.exit(130);
      return;
    }
    if (o === 4) {
      UT();
      return;
    }
    if (o === 127 || o === 8) {
      if (t.fieldKeys++, t.buffer.length > 0) {
        let i = (0, import_chunk_em52jhgp.wz)(t.buffer);
        t.buffer = t.buffer.slice(0, -(i.length || 1));
      }
      n++;
      continue;
    }
    if (o === 27) {
      n++;
      let i = n < e.length ? e.charCodeAt(n) : -1;
      if (i === 91) {
        n++;
        while (n < e.length && e.charCodeAt(n) < 64) n++;
        if (n < e.length) n++;
      } else if (i === 93 || i === 80 || i === 88 || i === 94 || i === 95) {
        n++;
        while (n < e.length) {
          let s = e.charCodeAt(n);
          if (s === 7) {
            n++;
            break;
          }
          if (s === 27 && n + 1 < e.length && e.charCodeAt(n + 1) === 92) {
            n += 2;
            break;
          }
          n++;
        }
      } else if (i === 79) n += 2;
      else if (i !== -1 && i !== 27) n++;
      continue;
    }
    if (o < 32 && o !== 9 && o !== 10 && o !== 13) {
      n++;
      continue;
    }
    if (o === 13) {
      t.buffer += `
`, n++;
      continue;
    }
    t.buffer += u, n++;
  }
}
function UT() {
  let e = r();
  if (!e.capturing) return;
  if (e.capturing = false, e.readableHandler) process.stdin.removeListener("readable", e.readableHandler), e.readableHandler = null;
}
function L2t() {
  UT();
  let e = r(), t = e.buffer.trim(), n = e.hasField && !e.isFieldQueued && /\S +$/.test(e.buffer), u = [e.leadingText, n ? `${t} ` : t].filter(Boolean).join(`
`);
  if (e.buffer = "", e.seeded = "", e.leadingText &&= "", e.hasField) e.fieldClosedAt = Date.now();
  if (e.isFieldQueued) e.queuedPrompt = u;
  return e.isPromptFromField = e.hasField, e.hasField = false, e.fieldKeyAt = 0, e.isFieldQueued = false, u;
}
function N2t() {
  return r().buffer.trim().length > 0;
}
function F2t(e) {
  let t = r();
  t.buffer = e, t.seeded = e;
}
function Ucn() {
  return Boolean(r().leadingText);
}
function dji() {
  return r().seeded !== "";
}
function kj() {
  let { buffer: e, seeded: t } = r();
  return e !== t;
}
function OWn() {
  let e = r();
  if (!e.capturing) e.endsInReturn = false;
  if (UT(), !e.hasField && kj()) Y2e();
  return e.hasField = true, e.buffer;
}
function IWn() {
  let e = r(), t = e.buffer.trim(), n = t !== "" && !t.includes(`
`), u = e.endsInReturn && n && !t.endsWith("\\");
  return e.endsInReturn = false, u;
}
function PZ(e) {
  let t = r();
  t.buffer = e, t.isFieldQueued = false, Y2e();
}
function S9() {
  return r().buffer;
}
function cji() {
  r().isFieldQueued = true;
}
function uji() {
  r().hasLaunchWarning = true;
}
function fji() {
  let e = r(), t = e.hasLaunchWarning;
  return e.hasLaunchWarning = false, t;
}
function Vko() {
  return r().isFieldQueued;
}
function pji() {
  return r().isPromptFromField;
}
function mji() {
  return r().queuedPrompt !== null;
}
function hji() {
  let e = r(), t = e.queuedPrompt;
  return e.queuedPrompt = null, t;
}
function Y2e() {
  r().fieldKeyAt = Date.now(), r().fieldKeys++;
}
function Gws() {
  return r().fieldKeys;
}
function $Ye() {
  let e = r();
  if (!e.hasField || !kj()) return "";
  let t = e.buffer.trim();
  return e.buffer = "", e.seeded = "", e.isFieldQueued = false, t;
}
function Lvt() {
  return r().hasField;
}
function $2t() {
  let { hasField: e, fieldClosedAt: t, leadingText: n } = r();
  return e || t !== null || n !== null;
}
function gji() {
  let { fieldClosedAt: e } = r();
  return e === null ? 1 / 0 : Date.now() - e;
}
function MWn() {
  let e = Date.now() - r().fieldKeyAt;
  return e < 0 ? 0 : Math.max(0, l - e);
}
async function U2t(e) {
  for (; ; ) {
    let t = MWn();
    if (t === 0 || e.aborted) return;
    await (0, import_chunk_5appeerh.K)(t, e);
  }
}
async function _ji() {
  for (; ; ) {
    (0, import_chunk_f9x2f6cx.VEe)();
    let e = Date.now() - (0, import_chunk_f9x2f6cx.ug)();
    if (e >= l) return;
    if (e < 0) {
      await (0, import_chunk_5appeerh.K)(l);
      return;
    }
    await (0, import_chunk_5appeerh.K)(l - e);
  }
}
