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
var chunk_5b3b93kt_exports = {};
__export(chunk_5b3b93kt_exports, {
  JWo: () => JWo,
  _8l: () => _8l
});
module.exports = __toCommonJS(chunk_5b3b93kt_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_06wfh5v6 = require("/$bunfs/root/chunk-06wfh5v6.js");
var import_chunk_35rmjae5 = require("/$bunfs/root/chunk-35rmjae5.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var g = ["gcloud", "aws", "az", "gh", "brew", "apt", "sqlite3", "ffmpeg", "rg", "jq"], a = 2e3, f = 2n ** 30n;
function JWo() {
  try {
    return (0, import_chunk_35rmjae5.u8t)() && (0, import_chunk_06wfh5v6.f2r)("basic") !== "off";
  } catch (t) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(t)), false;
  }
}
async function _8l(t) {
  try {
    if (!JWo()) return;
    let [e, r] = await Promise.all([(0, import_chunk_06wfh5v6.s6s)({ includeMcpServers: false, signal: AbortSignal.timeout(a), alsoLookFor: g, maxTools: import_chunk_syr33dp2.Ibs }), (0, import_chunk_5appeerh.me)((0, import_promises.statfs)(t, { bigint: true }), a).catch(() => {
      return;
    })]);
    if (e === void 0) {
      (0, import_chunk_cqa9hrgx.m)("remote_tools_host_inventory", "unsupported_platform");
      return;
    }
    let n = r === void 0 ? -1n : r.bavail * r.bsize;
    if (!e.complete) (0, import_chunk_cqa9hrgx.l)("remote_tools_host_inventory", "deadline");
    else if (n < 0n) (0, import_chunk_cqa9hrgx.l)("remote_tools_host_inventory", "disk_unread");
    else (0, import_chunk_cqa9hrgx.u)("remote_tools_host_inventory");
    let s = { ...!e.complete && { incomplete: true }, cpus: (0, import_os.availableParallelism)(), memory_gb: Math.round((0, import_os.totalmem)() / Number(f)), ...n >= 0n && { disk_free_gb: Math.min(Number(n / f), import_chunk_syr33dp2.Mbs) } }, o = e.profile.tools;
    while (o.length > 0 && (0, import_chunk_w578pjby._)({ tools: o, ...s }).length > import_chunk_syr33dp2.Hbs) o = o.slice(0, -1);
    return { tools: o, ...s };
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), (0, import_chunk_cqa9hrgx.m)("remote_tools_host_inventory", "error");
    return;
  }
}
