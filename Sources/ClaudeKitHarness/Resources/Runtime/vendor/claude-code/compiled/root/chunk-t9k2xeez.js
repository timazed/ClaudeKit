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
var chunk_t9k2xeez_exports = {};
__export(chunk_t9k2xeez_exports, {
  CEs: () => CEs,
  ECr: () => ECr,
  Fy: () => Fy,
  Jvt: () => Jvt,
  LZ: () => LZ,
  Ny: () => Ny,
  ON: () => ON,
  R9: () => R9,
  Vql: () => Vql,
  bjn: () => bjn,
  dGe: () => dGe,
  kGi: () => kGi,
  kjn: () => kjn,
  lX: () => lX,
  vCr: () => vCr,
  wjn: () => wjn,
  zql: () => zql
});
module.exports = __toCommonJS(chunk_t9k2xeez_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
async function t() {
  try {
    return await (0, import_chunk_865at33z.FC)("tengu_violin_strad");
  } catch {
    return false;
  }
}
function r() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_strad", false);
  } catch {
    return false;
  }
}
async function ON() {
  try {
    return await (0, import_chunk_865at33z.FC)("tengu_violin_wood");
  } catch {
    return false;
  }
}
function Ny() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_wood", false);
  } catch {
    return false;
  }
}
var n = "tengu_violin_maple";
async function bjn() {
  try {
    return await ON() || await (0, import_chunk_865at33z.w6t)(n);
  } catch {
    return false;
  }
}
function Fy() {
  try {
    return Ny() || (0, import_chunk_865at33z.b)(n, false);
  } catch {
    return false;
  }
}
async function R9() {
  return await ON() && await t();
}
function lX() {
  return Ny() && r();
}
function dGe(e) {
  return e && !(0, import_chunk_2zeyvjwb.uo)("ldr") ? null : "flag_off";
}
function LZ(e) {
  return dGe(e) === null;
}
function Jvt() {
  try {
    let { value: e, source: o } = (0, import_chunk_865at33z.gn)("tengu_violin_wood", false);
    return e === false && (0, import_chunk_865at33z.km)(o);
  } catch {
    return false;
  }
}
function kGi() {
  return Jvt() && i(n);
}
function ECr() {
  return Ny() && zql("tengu_violin_wood");
}
async function wjn() {
  let e = performance.now();
  return await (0, import_chunk_865at33z.ci)().catch(() => null), Math.round(performance.now() - e);
}
function i(e) {
  try {
    let { value: o, source: a } = (0, import_chunk_865at33z.gn)(e, false);
    return o === false && (0, import_chunk_865at33z.km)(a);
  } catch {
    return false;
  }
}
function zql(e) {
  try {
    return (0, import_chunk_865at33z.km)((0, import_chunk_865at33z.gn)(e, false).source);
  } catch {
    return false;
  }
}
async function Vql() {
  try {
    return await (0, import_chunk_865at33z.FC)("tengu_violin_amati");
  } catch {
    return false;
  }
}
function CEs() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_amati", false);
  } catch {
    return false;
  }
}
function vCr() {
  return Ny() && CEs();
}
async function kjn() {
  let [e, o] = await Promise.all([ON(), Vql()]);
  return e && o;
}
