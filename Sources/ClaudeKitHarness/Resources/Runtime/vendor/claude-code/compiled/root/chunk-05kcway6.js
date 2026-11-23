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
var chunk_05kcway6_exports = {};
__export(chunk_05kcway6_exports, {
  F7l: () => F7l,
  iXs: () => iXs
});
module.exports = __toCommonJS(chunk_05kcway6_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_pr9gw20a = require("/$bunfs/root/chunk-pr9gw20a.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_ncwex88j = require("/$bunfs/root/chunk-ncwex88j.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_tc59sryy = require("/$bunfs/root/chunk-tc59sryy.js");
var import_chunk_7ft50mzy = require("/$bunfs/root/chunk-7ft50mzy.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var p = [import_chunk_hn3cwwzt.ke, import_chunk_rb36kwbn.yt, import_chunk_060xwhvh._t, import_chunk_060xwhvh.Df, import_chunk_9xt9z453.Xo], l = 80;
function c(t) {
  if (!p.includes(t.toolName)) return {};
  let e = (0, import_chunk_ma3kja9f.T)(t.toolInput) ? t.toolInput.description : void 0, r = (0, import_chunk_f64qna2j.Tt)((0, import_chunk_7ft50mzy.Jve)(e, l), l);
  return r === "" ? {} : { description: r };
}
var n = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (t) => t.clear());
function iXs(t) {
  if (t === void 0 || !(0, import_chunk_tc59sryy.Wje)() || !(0, import_chunk_ncwex88j.NTn)()) return;
  let e = { state: "holding", held: /* @__PURE__ */ new Map() };
  return { awaitReceipt() {
    n.set(t, e);
  }, tick(r) {
    if (r.type !== "progress" || e.state === "ended") return;
    try {
      let o = (0, import_chunk_pr9gw20a.aXs)({ toolUseID: r.toolUseID, parentToolUseID: r.parentToolUseID ?? t, data: r.data, withheldInput: c(r.data) });
      if (o === void 0) return;
      if (e.state === "released") (0, import_chunk_865at33z.Fs)(o);
      else e.held.set(o.tool_use_id, o);
    } catch (o) {
      (0, import_chunk_k449cc64.i)(o);
    }
  }, ended(r, o) {
    if (e.state === "ended") return;
    let s = e.state === "released";
    if (e.state = "ended", e.held.clear(), !s) return;
    n.delete(t), e.sentEnd = true, a(t, r, o);
  }, lost() {
    if (e.sentEnd === true) e.sentEnd = void 0, a(t, void 0, [], true);
  } };
}
function F7l(t) {
  if (n.size === 0 || t.type !== "user" || !Array.isArray(t.message.content)) return;
  try {
    for (let e of t.message.content) {
      if (e.type !== "tool_result") continue;
      let r = n.get(e.tool_use_id);
      if (r?.state === "ended") {
        n.delete(e.tool_use_id), a(e.tool_use_id, void 0, []);
        continue;
      }
      if (r?.state !== "holding") continue;
      r.state = "released";
      for (let o of r.held.values()) (0, import_chunk_865at33z.Fs)(o);
      r.held.clear();
    }
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function a(t, e, r, o = false) {
  try {
    (0, import_chunk_865at33z.Fs)({ type: "tool_progress", tool_use_id: t, tool_name: import_chunk_h4t4qfaq.vo, parent_tool_use_id: null, elapsed_time_seconds: 0, script_ended: true, ...o && { settle_lost: true }, final_tool_use_ids: (e ?? []).flatMap((s) => s.type === "assistant" && Array.isArray(s.message.content) ? s.message.content.flatMap((d) => d.type === "tool_use" ? [d.id] : []) : []), detached_tool_use_ids: [...r] });
  } catch (s) {
    (0, import_chunk_k449cc64.i)(s);
  }
}
