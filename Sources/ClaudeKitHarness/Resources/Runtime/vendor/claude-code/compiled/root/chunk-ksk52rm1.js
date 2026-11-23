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
var chunk_ksk52rm1_exports = {};
__export(chunk_ksk52rm1_exports, {
  Csn: () => Csn,
  Jxi: () => Jxi,
  hpo: () => hpo,
  ill: () => ill,
  kUt: () => kUt,
  pN: () => pN,
  wUt: () => wUt
});
module.exports = __toCommonJS(chunk_ksk52rm1_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var t = "tengu_steady_quail";
function pN() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true || (import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND ?? "") !== "" || (0, import_chunk_6e68m1dj.ny)() || (0, import_chunk_3t7ve0wy.ite)() || (0, import_chunk_dw5px5e0.nY)("--sdk-url").some(Boolean);
}
function wUt() {
  return u(true).forSession;
}
function Csn(e) {
  return Jxi(e) !== void 0;
}
function Jxi(e) {
  let { forSession: n, cache: o } = u(e ?? false);
  return n === true || o === true ? "on" : n === "unreadable" || o === "unreadable" ? "unreadable" : void 0;
}
function hpo() {
  return kUt() !== void 0;
}
function kUt() {
  let { forSession: e, cache: n } = u(false);
  if (n !== false) return n === true ? void 0 : "unknown";
  try {
    if (a()) return "off";
    return e !== true || !c() ? "unknown" : void 0;
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(o, "MCP connector file upload: reading whether a kept on stands in for the upload flag failed")), "unknown";
  }
}
function c() {
  let e = (0, import_chunk_n5qd9b6p.Ar)().connectorUploadFlagKeptFor, n = (0, import_chunk_865at33z.Uj)();
  return e?.accountUuid !== void 0 && n.accountUuid === e.accountUuid && n.organizationUuid === e.organizationUuid && (0, import_chunk_865at33z.wde)();
}
function d() {
  (0, import_chunk_n5qd9b6p.Ar)().connectorUploadFlagKeptFor = (0, import_chunk_865at33z.Uj)();
}
function u(e) {
  let n, o = true;
  try {
    n = (0, import_chunk_865at33z.kde)(t);
  } catch {
    o = false;
  }
  let r = "unreadable", l;
  try {
    if (r = (0, import_chunk_865at33z.b)(t, false) === true, n === void 0 && o && (typeof e === "function" ? e() : e)) if (a()) l = (0, import_chunk_865at33z.Lt)(t, false) === true, d();
    else p();
  } catch (f) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(f, "MCP connector file upload: reading the upload flag, or keeping its value, failed"));
  }
  if (n !== void 0) return { forSession: n === true, cache: r };
  return { forSession: l ?? r, cache: r };
}
function a() {
  return (0, import_chunk_865at33z.km)((0, import_chunk_865at33z.gn)(t, false).source);
}
function p() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  if (e.connectorUploadFlagWait !== void 0) return;
  let n = (0, import_chunk_865at33z.ys)(() => {
    try {
      if ((0, import_chunk_n5qd9b6p.Ar)().connectorUploadFlagWait === n && (0, import_chunk_865at33z.kde)(t) === void 0) {
        if (!a()) return;
        (0, import_chunk_865at33z.Lt)(t, false), d();
      }
    } catch (o) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(o, "MCP connector file upload: keeping the upload flag's value at a flag refresh failed"));
    }
    if (e.connectorUploadFlagWait === n) e.connectorUploadFlagWait = void 0;
    n();
  });
  e.connectorUploadFlagWait = n;
}
function ill(e) {
  let n = (0, import_chunk_865at33z.ys)(() => {
    if (a()) n(), e();
  });
}
