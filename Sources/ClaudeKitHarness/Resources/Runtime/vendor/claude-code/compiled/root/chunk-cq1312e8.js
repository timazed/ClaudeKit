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
var chunk_cq1312e8_exports = {};
__export(chunk_cq1312e8_exports, {
  AGt: () => AGt
});
module.exports = __toCommonJS(chunk_cq1312e8_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_6tyx83ga = require("/$bunfs/root/chunk-6tyx83ga.js");
var import_child_process = require("child_process");
var import_util = require("util");
var s = (0, import_util.promisify)(import_child_process.execFile);
async function AGt(o) {
  let t = (0, import_chunk_ds5wjsjg.m2)("git");
  if (t === null || (0, import_chunk_6tyx83ga.Fft)(t, process.env)) return [];
  try {
    let { stdout: r } = await s(t, ["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor=", "worktree", "list", "--porcelain"], { cwd: o, timeout: 5e3, windowsHide: true });
    if (!r) return [];
    return r.split(`
`).filter((e) => e.startsWith("worktree ")).map((e) => (0, import_chunk_z6pfqf6e.pn)(e.slice(9)));
  } catch {
    return [];
  }
}
