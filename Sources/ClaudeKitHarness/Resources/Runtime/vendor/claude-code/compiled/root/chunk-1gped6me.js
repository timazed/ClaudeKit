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
var chunk_1gped6me_exports = {};
__export(chunk_1gped6me_exports, {
  kTa: () => kTa,
  wTa: () => wTa
});
module.exports = __toCommonJS(chunk_1gped6me_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var t = "--inherit-permission-mode";
function d(e) {
  return e === t || e.startsWith(`${t}=`);
}
class f {
  mode;
}
var c = new import_chunk_2904xtvq.j(() => new f());
function p() {
  return c.of((0, import_chunk_f9x2f6cx.N)().host);
}
function wTa({ inheritPermissionModeCli: e, resolvedMode: n, storageV5: r }) {
  if (!e) return;
  p().mode = n, (0, import_chunk_9e5mdyfk.BW)("--permission-mode", [t], n, void 0, r).catch((o) => (0, import_chunk_k449cc64.i)(o));
}
async function kTa(e) {
  let n = p(), r = n.mode;
  if (r === void 0) return;
  let o = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!o || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return;
  }
  let a = await (0, import_chunk_9e5mdyfk.Is)(o, e);
  if (!a?.respawnFlags) return;
  if (!a.respawnFlags.some(d)) {
    n.mode = void 0;
    return;
  }
  await (0, import_chunk_9e5mdyfk.BW)("--permission-mode", [t], r, void 0, e, void 0, (u) => u.some(d)), (0, import_chunk_9e5mdyfk.Qg)(o);
  let m = await (0, import_chunk_9e5mdyfk.Is)(o, e);
  if (m?.respawnFlags && !m.respawnFlags.some(d)) n.mode = void 0;
}
