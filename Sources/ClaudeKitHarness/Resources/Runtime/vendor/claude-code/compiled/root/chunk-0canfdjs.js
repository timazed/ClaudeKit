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
var chunk_0canfdjs_exports = {};
__export(chunk_0canfdjs_exports, {
  Bin: () => Bin,
  EBt: () => EBt,
  FMi: () => FMi,
  ehs: () => ehs,
  m8e: () => m8e,
  p8e: () => p8e,
  ths: () => ths
});
module.exports = __toCommonJS(chunk_0canfdjs_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
function ehs(o, e) {
  if (o.type !== "pending") return false;
  let n = (0, import_chunk_px0hhsq7.Rr)(o.name);
  return !e.some((t) => (0, import_chunk_px0hhsq7.Bu)(t, o.name, n));
}
async function ths(o, e, n) {
  let { maxWaitMs: t, until: s } = n, i = (r) => r.clients.some((p) => e(p, r));
  if (!i(o())) return;
  let c = Date.now() + t;
  while (Date.now() < c) {
    await (0, import_chunk_5appeerh.K)(50);
    let r = o();
    if (s?.(r) || !i(r)) return;
  }
}
function FMi(o) {
  return o.some(p8e);
}
function p8e(o) {
  return "role" in o.config && o.config.role === "comms";
}
function Bin(o) {
  return o.mcpInfo?.role === "comms";
}
function m8e(o) {
  if ((0, import_chunk_c4zg4pwc.dl)()) return o.filter((e) => !Bin(e));
  return o;
}
async function EBt(o) {
  if (!(0, import_chunk_c4zg4pwc.dl)()) return;
  await ths(o, (e, n) => ehs(e, n.tools) && !p8e(e), { maxWaitMs: import_chunk_98tkmkvx.Ame });
}
