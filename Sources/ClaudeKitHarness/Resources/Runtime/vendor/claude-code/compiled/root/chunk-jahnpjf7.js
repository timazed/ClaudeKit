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
var chunk_jahnpjf7_exports = {};
__export(chunk_jahnpjf7_exports, {
  createScriptPromptState: () => P,
  holdAtTurnEnd: () => O,
  keepsTurnEnded: () => g,
  noteScriptPromptsShown: () => q,
  noteStateReported: () => S,
  reportAfterTurnEnded: () => _
});
module.exports = __toCommonJS(chunk_jahnpjf7_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_67f81g6v = require("/$bunfs/root/chunk-67f81g6v.js");
function p(t) {
  let e = t.request;
  return (e.subtype === "can_use_tool" || e.subtype === "request_user_dialog") && typeof e.tool_use_id === "string" && (0, import_chunk_67f81g6v.Ict)(e.tool_use_id);
}
function P() {
  return { holding: false };
}
function S(t, e, n, i) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  if (n === "requires_action") t.reported = { details: i ?? null, open: e.size };
  else if (t.reported = void 0, n === "idle") t.holding = false;
}
function g(t, e) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return false;
  if (!p(e)) return false;
  return t.holding = true, true;
}
function q(t, e) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  for (let n of e.values()) if (p(n.request)) {
    t.holding = true;
    return;
  }
}
function f(t, e) {
  let n;
  for (let [i, r] of t) if (e(i) && p(r.request)) n = r;
  return n;
}
function O(t, e, n, i, r) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return false;
  let o = f(e, n);
  if (o === void 0) return false;
  if (t.holding = true, i !== "requires_action" || t.reported?.details !== (o.details ?? null)) r("requires_action", o.details);
  return true;
}
function _(t, e, n, i, r, o = {}) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  let s = f(e, n);
  if (!t.holding) return;
  if (s === void 0) {
    r("idle");
    return;
  }
  let a = t.reported;
  if (i !== "requires_action" || a?.details !== (s.details ?? null)) r("requires_action", s.details);
  else if (o.metadata !== void 0 && s.details !== void 0 && a !== void 0 && e.size < a.open) {
    let l = s.details;
    o.metadata.transport.reportMetadata({ pending_action: l, pending_actions: o.metadata.buildPendingActionsPlural(l, [...e.values()].flatMap((d) => d.details ? [d.details] : []).reverse().filter((d) => d !== l)) }), t.reported = { details: a.details, open: e.size };
  }
}
