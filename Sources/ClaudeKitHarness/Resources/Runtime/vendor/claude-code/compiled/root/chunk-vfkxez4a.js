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
var chunk_vfkxez4a_exports = {};
__export(chunk_vfkxez4a_exports, {
  VSa: () => VSa,
  kKe: () => kKe
});
module.exports = __toCommonJS(chunk_vfkxez4a_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_os = require("os");
var s = 16;
async function kKe(e, r) {
  if (!(0, import_chunk_7d2qr9z5.wIi)()) return e;
  let n = null;
  try {
    n = await (0, import_chunk_865at33z.O3i)(r);
  } catch {
    (0, import_chunk_k449cc64.i)(Error("[bridge] Could not read or create the machine id for the machine-id session tag; going on without it"));
  }
  if (n === null) return (0, import_chunk_cqa9hrgx.l)("bridge_session_machine_tags", "no_machine_id"), e;
  (0, import_chunk_cqa9hrgx.u)("bridge_session_machine_tags");
  let t = e ?? [];
  return t.length >= s || t.some((o) => o.startsWith(import_chunk_865at33z.I4i)) ? e : [...t, import_chunk_865at33z.I4i + n];
}
var d = 128;
function VSa() {
  if (!(0, import_chunk_7d2qr9z5.kIi)()) return;
  try {
    let e = (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_7cfjrnwy.lC)((0, import_os.hostname)()), d).trim();
    return (0, import_chunk_cqa9hrgx.u)("bridge_session_machine_name"), { machine_name: e || null };
  } catch {
    return (0, import_chunk_k449cc64.i)(Error("[bridge] Could not read the host name to report it")), (0, import_chunk_cqa9hrgx.m)("bridge_session_machine_name", "build_failed"), { machine_name: null };
  }
}
