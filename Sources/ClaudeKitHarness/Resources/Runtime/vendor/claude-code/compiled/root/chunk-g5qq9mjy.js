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
var chunk_g5qq9mjy_exports = {};
__export(chunk_g5qq9mjy_exports, {
  IQn: () => IQn,
  OQn: () => OQn,
  aRa: () => aRa,
  cRa: () => cRa,
  dRa: () => dRa,
  lRa: () => lRa,
  u3s: () => u3s,
  uRa: () => uRa
});
module.exports = __toCommonJS(chunk_g5qq9mjy_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_43cax88x = require("/$bunfs/root/chunk-43cax88x.js");
var import_chunk_saksne64 = require("/$bunfs/root/chunk-saksne64.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var H = `mcp__${(0, import_chunk_3f4m74y6.xn)(import_chunk_bne5t4g3.Xct)}__${(0, import_chunk_3f4m74y6.xn)(import_chunk_bne5t4g3.cJe)}`, O = 1e3;
class c {
  promptIndexSeen = -1;
  forwardsSincePrompt = 0;
}
function g(t) {
  return t.bearsNoUntypedMark === true && t.ownWord === true && t.isMeta !== true && (0, import_chunk_865at33z._a)(t.origin) && t.verifiedSlackHumanTurn !== true && !(0, import_chunk_bzyb60p0.wQ)(((0, import_chunk_bzyb60p0.wu)(t.value) ?? "").trimStart());
}
function aRa(t, e) {
  try {
    if (e.some(g)) t.get(c).forwardsSincePrompt = 0;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.Fe)(o)) (0, import_chunk_k449cc64.i)(o);
  }
}
function lRa(t) {
  let e = (0, import_chunk_saksne64.JMt)(t, import_chunk_bne5t4g3.cJe);
  if (!e) return { kind: "unavailable" };
  let o = t.toolState.get(c), r = (0, import_chunk_f9x2f6cx.Tse)();
  if (r !== o.promptIndexSeen) o.promptIndexSeen = r, o.forwardsSincePrompt = 0;
  if (o.forwardsSincePrompt++, o.forwardsSincePrompt > (0, import_chunk_p51r1nb3.Epe)().maxDesktopForwards) return { kind: "loop-paused", forwards: o.forwardsSincePrompt - 1 };
  return { tool: e };
}
async function dRa({ tool: t, sessionId: e, message: o, toolUseContext: r, canUseTool: h, assistantMessage: w }) {
  let u = { type: "tool_use", id: `${r.toolUseId ?? "sendmessage"}_desktop`, name: t.name, input: { session_id: e, message: o }, caller: { type: "direct" } }, S = 0, P = async (s, n, a, ...x) => {
    let C = Date.now();
    try {
      return await h(s, n, Object.keys(n).length !== 2 || n.session_id !== e || n.message !== o ? { ...a, desktopForwardToolUseId: void 0 } : a, ...x);
    } finally {
      S += Date.now() - C;
    }
  }, p, m = [], d = false;
  for await (let s of (0, import_chunk_bzyb60p0.Y$)(u, w, P, r.autoModeClassified === true && r.toolUseId !== void 0 ? { ...r, desktopForwardToolUseId: u.id } : r, () => (/* @__PURE__ */ new Date()).toISOString())) {
    if ((0, import_chunk_bzyb60p0.IO)(s)) continue;
    if (s.message.type === "attachment") {
      if (s.message.attachment.type === "hook_deferred_tool") d = true;
      else m.push(s.message);
      continue;
    }
    if (s.message.type !== "user") continue;
    let n = s.message.message.content;
    if (!Array.isArray(n)) continue;
    for (let a of n) if (a.type === "tool_result" && a.tool_use_id === u.id) p = a;
  }
  let f = S >= O;
  if (!p) return { kind: "refused", message: d ? "a hook deferred Claude Desktop's messaging tool, so nothing was sent; send it again when you are ready (a forwarded send cannot be resumed later)." : "the send did not run (interrupted).", attachments: m, deferredByHook: d, blockedWait: f };
  let k = b(p);
  return p.is_error ? { kind: "refused", message: k || "Claude Desktop reported an error.", attachments: m, deferredByHook: d, blockedWait: f } : { kind: "sent", detail: k, attachments: m, deferredByHook: d, blockedWait: f };
}
function b(t) {
  let { content: e } = t;
  if (typeof e === "string") return e.trim();
  if (!Array.isArray(e)) return "";
  return e.flatMap((o) => o.type === "text" ? [o.text] : []).join(`
`).trim();
}
class l {
  starter;
  localSends = 0;
  bridgeSends = 0;
}
function u3s(t) {
  let e = t.get(l);
  e.localSends = 0, e.bridgeSends = 0, (0, import_chunk_mvszxaxb.Zo)().receipts.wokeForHold.clear();
}
function cRa(t, e) {
  try {
    if (e.some((o) => t.options.isNonInteractiveSession ? g(o) : o.isMeta !== true && o.foreignWord === void 0 && (0, import_chunk_865at33z.ree)(o))) u3s(t.toolState);
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.Fe)(o)) (0, import_chunk_k449cc64.i)(o);
  }
}
function uRa(t, e) {
  let o = e?.kind === "peer" ? e : void 0;
  if (!(o?.senderTaskId !== void 0 || o?.selfSent === true && o.verifiedLocal !== true || e?.kind === "observer" || (0, import_chunk_xfj2cwfv.rB)(e))) t.get(l).starter = o;
}
function y(t) {
  return { kind: "paused", message: `Not delivered: this session keeps answering other sessions, which looks like an automatic loop. Sending to ${t} is paused until your user's next prompt starts a turn in this session.` };
}
function OQn(t) {
  let e = t.toolState.get(l);
  if (e.starter && (0, import_chunk_p51r1nb3.gmo)(e.starter)) {
    if (e.localSends++, e.localSends > (0, import_chunk_p51r1nb3.Epe)().maxLocalRelays && (0, import_chunk_p51r1nb3.hFn)(e.starter)) return y("sessions on this machine");
  }
  return { kind: "admitted", peer: T(t) };
}
function T(t) {
  return (0, import_chunk_xfj2cwfv.dHl)(t.messages().filter((e) => e.type !== "user" || e.origin !== void 0 || !(0, import_chunk_43cax88x.N6r)({ ...e, content: e.message.content })));
}
function IQn(t) {
  let e = T(t), o = t.toolState.get(l);
  if (o.starter && (0, import_chunk_p51r1nb3.gmo)(o.starter)) {
    if (o.bridgeSends++, (0, import_chunk_p51r1nb3.hFn)(o.starter)) return o.bridgeSends > (0, import_chunk_p51r1nb3.Epe)().maxSelfHops ? y("Remote Control and cloud sessions") : { kind: "admitted", hopChain: e && (e.hopChain ?? []) };
  }
  return { kind: "admitted", hopChain: e && (0, import_chunk_xfj2cwfv.F6n)(e) };
}
