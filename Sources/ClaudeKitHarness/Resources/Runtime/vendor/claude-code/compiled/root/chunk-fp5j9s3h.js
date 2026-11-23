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
var chunk_fp5j9s3h_exports = {};
__export(chunk_fp5j9s3h_exports, {
  INa: () => INa,
  J3o: () => J3o,
  MNa: () => MNa,
  ONa: () => ONa,
  PNa: () => PNa,
  X3o: () => X3o
});
module.exports = __toCommonJS(chunk_fp5j9s3h_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var r = "tengu_purring_breeze", a = 6e4, d = 256, u = 1024;
class X3o {
  host = void 0;
}
function J3o() {
  return (0, import_chunk_3t7ve0wy._S)() && (0, import_chunk_3t7ve0wy.Sa)() && (0, import_chunk_865at33z.Lt)(r, false) === true;
}
function PNa({ agentId: n, messages: t, onPhone: e, slot: o }) {
  return n === void 0 && o.host !== void 0 && !e && (0, import_chunk_pyt5z6an.F7)() && (0, import_chunk_865at33z.vX)(t) && J3o();
}
function ONa(n) {
  if (Buffer.byteLength((0, import_chunk_w578pjby._)(n)) > a || n.plugins.some(({ pluginName: t, description: e }) => t.length > d || e.length > u)) return;
  return { behavior: "ask", message: "Show the plugin that Claude suggests?", personOnly: true, askRequiresUserInteraction: true, suppressAlwaysAllowRule: true, updatedInput: n };
}
function INa(n, t) {
  let { outcome: e } = n;
  return t.host !== void 0 && J3o() && (e === "added" || e === "not_now") ? e : void 0;
}
async function MNa(n, t, e) {
  if (n === "not_now") return { answer: "not_now", note: p, plugins: [] };
  await e.host?.listAgain();
  let o = e.host?.idsOnAccount(), i = t.filter((s) => o?.has(s.pluginId)).map((s) => s.pluginName);
  return i.length > 0 ? { answer: "added", added: i, note: l } : { answer: "not_added", note: g };
}
var l = "The user answered this card with Add. The plugins in `added` are on their account now, and their tools and skills join this conversation with your next step: in your lists, or found by tool search.", g = "The user answered that they added a plugin, but claude.ai's list of their plugins does not show it yet, so its tools are not available now. They may join your lists later.", p = "The card was closed, and no plugin was added. Any earlier reminder to call this tool for a plugin of this card has served its purpose, including what it said about how to do the work. A message from the user may follow.";
