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
var chunk_20qmy0pf_exports = {};
__export(chunk_20qmy0pf_exports, {
  Mzs: () => Mzs,
  aba: () => aba
});
module.exports = __toCommonJS(chunk_20qmy0pf_exports);
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
function aba({ answer: e, bytes: d, status: u, tooLarge: r }) {
  let o = r ? `is too large for the session service to carry back (${d} bytes)` : `was refused by the session service (HTTP ${u})`, n = (0, import_chunk_syr33dp2.Q7)(typeof e === "object" && e !== null ? Reflect.get(e, "result") : void 0), t = n.envelope.status === "present" ? n.envelope.envelope : void 0;
  if (t === void 0) return { content: [{ type: "text", text: `(this machine's answer ${o}, so it was not returned)` }], isError: true };
  let s = t.target.name, a = r ? " Run a narrower command instead: read part of the file (offset and limit), filter the output (head, tail, grep), or for an image or screenshot save a smaller copy on the machine and read that." : "", l = t.outcome === "completed" ? `The command ran to completion on ${s}, but its result ${o}, so it was not returned. Its effects stand \u2014 do not re-run it just to see the output.${a}` : `${s} answered this call, but the answer ${o}, so it was not returned.${a}`;
  return (0, import_chunk_syr33dp2.y4)({ envelope: { v: import_chunk_syr33dp2.Zm, outcome: "failed", ...t.call_id !== void 0 && { call_id: t.call_id }, target: t.target, code: "tool_error", message: l, ...Mzs(t) }, content: [{ type: "text", text: l }] });
}
function Mzs(e) {
  return "replayed" in e && e.replayed === true ? { replayed: true, ..."served_at" in e && e.served_at !== void 0 && { served_at: e.served_at } } : {};
}
