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
var chunk_nhpsytqr_exports = {};
__export(chunk_nhpsytqr_exports, {
  Ni: () => Ni,
  PAe: () => PAe,
  YQ: () => YQ,
  ein: () => ein,
  vdl: () => vdl
});
module.exports = __toCommonJS(chunk_nhpsytqr_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var ein = "next";
function YQ(t, n, o) {
  let s = false, r;
  return n.update(t, (e) => {
    if (r = e, e.notified) return e;
    if (s = true, o?.skipStampIfRunning && e.status === "running") return e;
    return { ...e, notified: true };
  }), { claimed: s, task: r };
}
var PAe = new RegExp(`^<${import_chunk_k449cc64.Ou}>\\n<${import_chunk_k449cc64.qA}>([^<]+)</${import_chunk_k449cc64.qA}>` + [import_chunk_k449cc64.B8, import_chunk_k449cc64.C3, import_chunk_k449cc64.Uft].map((t) => `(?:\\n<${t}>[^<]*</${t}>)?`).join("") + `\\n<${import_chunk_k449cc64.yT}>`), g = "It is being resumed automatically from its saved transcript, which may lack its last steps. It reports back to you in a notification when it is done, so do not start its task again unless the user asks for that.";
function vdl(t) {
  let n = t.indexOf(`</${import_chunk_k449cc64.xg}>`);
  return n >= 0 && t.slice(0, n).endsWith(g);
}
function Ni({ taskId: t, toolUseId: n, taskType: o, outputFile: s, status: r, summary: e, summaryLead: l, body: u, trailing: f }) {
  let m = [[import_chunk_k449cc64.qA, t], [import_chunk_k449cc64.B8, n], [import_chunk_k449cc64.C3, o], [import_chunk_k449cc64.Uft, s], [import_chunk_k449cc64.yT, r], [import_chunk_k449cc64.xg, e]], a = `<${import_chunk_k449cc64.Ou}>`;
  for (let [i, T] of m) if (T) a += `
${i === import_chunk_k449cc64.xg ? l ?? "" : ""}<${i}>${T}</${i}>`;
  let c = (f ?? "").replaceAll(new RegExp(`<(?=\\s*/\\s*${import_chunk_k449cc64.Ou}\\b)`, "gi"), "&lt;"), d = `${a}${u ?? ""}`, p = (0, import_chunk_trwykz8a.Lf)(import_chunk_trwykz8a.Th.filter((i) => d.includes((0, import_chunk_hr2stdq7.sn)(i))), d).trimEnd();
  return `${a}${p && `
${p}`}${u ?? ""}
</${import_chunk_k449cc64.Ou}>${c}`;
}
