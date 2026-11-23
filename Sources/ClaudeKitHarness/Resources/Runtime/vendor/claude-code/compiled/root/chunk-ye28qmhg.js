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
var chunk_ye28qmhg_exports = {};
__export(chunk_ye28qmhg_exports, {
  $xa: () => $xa,
  FVr: () => FVr,
  Fxa: () => Fxa,
  Nxa: () => Nxa,
  aZn: () => aZn,
  iZn: () => iZn,
  lZn: () => lZn,
  nqe: () => nqe
});
module.exports = __toCommonJS(chunk_ye28qmhg_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_crypto = require("crypto");
var c = Symbol("isolationDispatchGate.mintedReentry");
async function iZn({ tool: e, input: n, ask: o, permissionPhase: s, alreadyApproved: i, recipientLabel: r, resolution: p, askUnconditionally: l = false, parse: m }) {
  if (!((l || (0, import_chunk_2yx6c1y2.Wze)()) && !i)) return { proceed: true, input: n, asked: false };
  let u = { ...s, ...p !== void 0 && { dispatchResolution: { input: n, note: p } } };
  Object.defineProperty(u, c, { value: true, configurable: true });
  let h = (0, import_crypto.randomUUID)(), f = (0, import_chunk_wx7ffn80.MV)(), t;
  try {
    t = await o(n, { toolUseId: h, reentry: u });
  } finally {
    f(), Reflect.deleteProperty(u, c);
  }
  if (t.behavior !== "allow") return { proceed: false, asked: true, reason: "denied", message: t.behavior === "deny" && t.message ? t.message : l ? `Sending to ${r} needs your approval \u2014 nothing was sent.` : `isolatePeerMachines is enabled: sending to ${r} needs your approval \u2014 nothing was sent.`, ...t.behavior === "deny" && t.decisionReason && { decisionReason: t.decisionReason } };
  if (t.updatedInput === void 0 || (0, import_chunk_865at33z.vke)(t.updatedInput)) return { proceed: true, input: n, asked: true, ...t.decisionReason && { decisionReason: t.decisionReason } };
  let d = P(m, t.updatedInput);
  if (!d.success) return { proceed: false, asked: true, reason: "bad_shape", message: `The permission handler narrowed the input to a shape ${e.name} does not accept \u2014 nothing was sent.` };
  if (d.data.to !== n.to) return { proceed: false, asked: true, reason: "recipient_changed", message: `The permission handler changed the recipient (from ${r}) after this send was resolved \u2014 nothing was sent. Send again to the recipient you intend.` };
  if (d.data.message !== void 0 && typeof d.data.message !== "string") return { proceed: false, asked: true, reason: "non_text_message", message: "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session \u2014 nothing was sent." };
  return { proceed: true, input: d.data, asked: true, ...t.decisionReason && { decisionReason: t.decisionReason } };
}
function aZn(e, n, o, s) {
  let i = e.permissionPhase?.pipeline;
  if (i === void 0) return false;
  let r = i.result.behavior === "ask" ? i.result : i.answered;
  if (r === void 0 || r.behavior !== "ask" || !s(r)) return false;
  return a(o(i.input), o(n));
}
function Nxa(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.result : void 0;
}
function FVr(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0 || !("note" in s)) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}
function Fxa(e, n, o, s) {
  if (e === void 0) return;
  let i = s(n), r = { ...e };
  if (e.checked !== void 0 && a(s(e.checked.input), i)) r.checked = { ...e.checked, input: o };
  if (e.pipeline !== void 0 && a(s(e.pipeline.input), i)) r.pipeline = { ...e.pipeline, input: o };
  return r;
}
function $xa(e, n, o) {
  let s = e.permissionPhase?.dispatchResolution;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}
function nqe(e) {
  let n = e.permissionPhase;
  return n !== void 0 && Object.hasOwn(n, c);
}
function lZn(e) {
  return e.behavior === "ask" && e.decisionReason?.type === "safetyCheck" && e.decisionReason.circuitBreaker === "isolatePeerMachines";
}
function a(e, n) {
  return (0, import_chunk_w578pjby._)(e) === (0, import_chunk_w578pjby._)(n);
}
function P(e, n) {
  let o = e(n);
  if (o.success || o.error === void 0) return o;
  let s = /* @__PURE__ */ new Set();
  for (let i of o.error.issues) {
    if (i.code !== "unrecognized_keys" || i.path.length > 0) return o;
    for (let r of i.keys) s.add(r);
  }
  if (s.size === 0 || typeof n !== "object" || n === null) return o;
  return e((0, import_chunk_xcgcdx61.mi)(n, (i, r) => s.has(r)));
}
