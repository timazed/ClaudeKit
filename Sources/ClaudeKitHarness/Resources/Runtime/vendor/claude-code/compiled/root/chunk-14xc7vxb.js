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
var chunk_14xc7vxb_exports = {};
__export(chunk_14xc7vxb_exports, {
  H1s: () => H1s,
  M1s: () => M1s,
  nfa: () => nfa,
  ofa: () => ofa,
  rfa: () => rfa
});
module.exports = __toCommonJS(chunk_14xc7vxb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_mmh7d122 = require("/$bunfs/root/chunk-mmh7d122.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var a = 64, c = 16384, M1s = 2e3, H1s = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_mmh7d122.lDt)()).max(a)), m = new import_chunk_2904xtvq.j(() => ({ file: void 0, runs: [], settled: Promise.resolve() }));
function nfa(r, o, e) {
  if (o !== "tool-container" || !(0, import_chunk_6e68m1dj.hn)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") return;
  let n = m.of(r);
  n.settled = (async () => {
    let i = e ?? (0, import_path.join)((0, import_chunk_8nvd6fqx.SIs)(), "tool-container-runs.json"), f = await (0, import_chunk_q7qjcthc.Dz)(i, c);
    n.runs = H1s().safeParse((0, import_chunk_0jve1fep.et)(f, false)).data ?? [], n.file = i;
  })().catch((i) => {
    (0, import_chunk_w578pjby.t)(`mcp serve: could not read the list of runs on disk, so none is kept: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "error" });
  });
}
function rfa(r, o) {
  let e = m.of(r);
  return e.settled = e.settled.then(async () => {
    if (e.file === void 0) return;
    e.runs = [...e.runs, o].slice(-a);
    try {
      await (0, import_chunk_q7qjcthc.FM)(e.file, (0, import_chunk_w578pjby._)(e.runs), { mode: 384 });
    } catch (n) {
      (0, import_chunk_w578pjby.t)(`mcp serve: could not write the list of runs on disk: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" }), await (0, import_promises.unlink)(e.file).catch(() => {
      });
    }
  }), e.settled;
}
async function ofa(r) {
  let o = m.of(r);
  return await (0, import_chunk_5appeerh.me)(o.settled.then(() => true), M1s) && o.file !== void 0 ? o.runs : void 0;
}
