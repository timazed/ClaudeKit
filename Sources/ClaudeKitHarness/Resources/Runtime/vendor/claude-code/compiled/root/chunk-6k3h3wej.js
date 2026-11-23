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
var chunk_6k3h3wej_exports = {};
__export(chunk_6k3h3wej_exports, {
  Sx: () => Sx,
  TTe: () => TTe
});
module.exports = __toCommonJS(chunk_6k3h3wej_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_esqsx0j3 = require("/$bunfs/root/chunk-esqsx0j3.js");
var import_fs = require("fs");
var import_tty = require("tty");
function p() {
  if (process.stdin.isTTY) return { kind: "stdin" };
  if ((0, import_chunk_69qhefwa.Ne)(false)) return { kind: "unavailable", reason: "ci" };
  if ((0, import_chunk_dw5px5e0.MFr)() === "mcp") return { kind: "unavailable", reason: "mcp" };
  try {
    let n = (0, import_fs.openSync)("/dev/tty", "r"), e = new import_tty.ReadStream(n);
    return (0, import_chunk_ndrgvsn7.q6e)(e), e.on("error", (r) => {
      (0, import_chunk_y53wbr8a.a)("tengu_tty_stream_error", (0, import_chunk_qbrmmydq.T_)(r)), (0, import_chunk_w578pjby.t)(`/dev/tty stream error: ${r}`, { level: "debug" });
    }), e.isTTY = true, { kind: "override", stream: e };
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Could not open /dev/tty for stdin override: ${n}`, { level: "error" }), { kind: "unavailable", reason: "tty_unavailable" };
  }
}
class i {
  input = null;
  get() {
    return this.input ??= p();
  }
  reset() {
    this.input = null;
  }
}
var TTe = new i();
function Sx(n = false) {
  (0, import_chunk_esqsx0j3.BWa)();
  let e = TTe.get(), r = { exitOnCtrlC: n };
  if (e.kind === "override") r.stdin = e.stream;
  return r.isScreenReaderEnabled = (0, import_chunk_qbrmmydq.Hm)(), r;
}
