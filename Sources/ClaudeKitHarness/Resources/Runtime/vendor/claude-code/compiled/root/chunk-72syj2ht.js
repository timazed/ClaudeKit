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
var chunk_72syj2ht_exports = {};
__export(chunk_72syj2ht_exports, {
  VYl: () => VYl,
  q5s: () => q5s
});
module.exports = __toCommonJS(chunk_72syj2ht_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_7ft50mzy = require("/$bunfs/root/chunk-7ft50mzy.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var l = 200, c = "started by Claude";
function q5s(e, { description: r, toolUseId: a, abortController: s, shownToHost: t = false }) {
  let o = (0, import_chunk_7ft50mzy.Jve)(r, l) || c, i = (0, import_chunk_7cfjrnwy.ee)(o, l), n = (0, import_chunk_ed372ykp.OT)("local_script"), p = { ...(0, import_chunk_ed372ykp.tb)(n, "local_script", i.length < o.length ? `${i}\u2026` : o, a), type: "local_script", status: "running", outputFile: "", abortController: s, ...t && { shownToHost: t } };
  return e.register(p), n;
}
var VYl = { async kill(e, r, a, s) {
  let t = r.get(e);
  if (t?.type !== "local_script" || t.status !== "running") return;
  t.abortController?.abort(s);
} };
