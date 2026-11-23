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
var chunk_535479ev_exports = {};
__export(chunk_535479ev_exports, {
  Uqs: () => Uqs,
  bet: () => bet,
  tvn: () => tvn,
  yet: () => yet
});
module.exports = __toCommonJS(chunk_535479ev_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_chstxdde = require("/$bunfs/root/chunk-chstxdde.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_nnsc6a48 = require("/$bunfs/root/chunk-nnsc6a48.js");
var import_chunk_80c601hv = require("/$bunfs/root/chunk-80c601hv.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var g = 1e3, y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("user"), initiator: (0, import_chunk_adx6804h.n)().optional(), origin: (0, import_chunk_adx6804h.ie)().optional(), isSynthetic: (0, import_chunk_adx6804h.P)().optional(), is_meta: (0, import_chunk_adx6804h.P)().optional(), seeded_summon: (0, import_chunk_adx6804h.P)().optional(), shouldQuery: (0, import_chunk_adx6804h.P)().optional() }));
function S(e) {
  try {
    let r = y().safeParse((0, import_chunk_w578pjby.Cs)(e));
    return r.success && (0, import_chunk_bzyb60p0.Rie)(r.data.initiator) === void 0 && !(0, import_chunk_865at33z.ANe)(r.data.origin, r.data.isSynthetic) && !r.data.is_meta && !r.data.seeded_summon && r.data.shouldQuery !== false;
  } catch {
    return false;
  }
}
async function w(e, r) {
  let o = (async () => {
    let i = "";
    for (; ; ) {
      let { done: d, value: a } = await e.next();
      if (d) return false;
      if (i += a, !a.includes(`
`)) continue;
      let l = i.split(`
`);
      if (i = l.pop() ?? "", l.some(S)) return true;
    }
  })().catch(() => false);
  return await (0, import_chunk_5appeerh.me)(o, r) ?? false;
}
async function m(e, r = g) {
  if ((0, import_chunk_f9x2f6cx.Io)()?.hostVerdict === void 0 || !(0, import_chunk_3t7ve0wy.Dw)() || (0, import_chunk_chstxdde.pGe)() || (0, import_chunk_3t7ve0wy.nx)() || (0, import_chunk_dw5px5e0.Tb)("--input-format") !== "stream-json" || (0, import_chunk_dw5px5e0.GE)("--no-session-persistence") || import_chunk_c203g5kd.s.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0 || !await w((0, import_chunk_nnsc6a48.FGo)() ?? (0, import_chunk_nnsc6a48.nvn)(), r)) return false;
  let o = (0, import_chunk_chstxdde.jjn)((0, import_chunk_f9x2f6cx.W)()), i = `Claude Code didn't start. ${e.replace(/\s+/g, " ").replace(/(?:[a-z][a-z\d+.-]*:\/\/|www\.|[\w.+-]+@)[^\s<`]*[^\s<`.,;:)]|[\\`*_[\]<]/gi, (l) => l.length > 1 ? `\`${l}\`` : l === "<" ? "&lt;" : `\\${l}`)}`, { errors: d, ...a } = (0, import_chunk_hym6yzrf.LV)(o, []);
  return (0, import_chunk_chstxdde.TGt)([{ type: "assistant", message: (0, import_chunk_bzyb60p0.La)({ content: i }).message, parent_tool_use_id: null, session_id: o, uuid: (0, import_crypto.randomUUID)() }, { ...a, subtype: "success", is_error: false, result: i, terminal_reason: "turn_setup_failed" }]);
}
var f = 2e3;
async function yet(e) {
  try {
    if ((0, import_chunk_nnsc6a48.Vqs)(e), (0, import_chunk_80c601hv.cQn)() || (0, import_chunk_80c601hv.e6r)()) await u();
  } catch {
    (0, import_chunk_w578pjby.t)("[3P telemetry] managed-settings refusal send failed", { level: "error" });
  }
}
async function bet(e) {
  if (e.policyUnreadable) await yet("policy_invalid");
  else if (e.reason === "provider_not_allowed") await yet("provider_not_allowed");
}
function tvn(e) {
  if ((0, import_chunk_nnsc6a48.Vqs)(e), (0, import_chunk_f9x2f6cx.fpt)() === null && ((0, import_chunk_80c601hv.cQn)() || (0, import_chunk_80c601hv.e6r)())) (0, import_chunk_w578pjby.Ct)(u);
}
async function u() {
  try {
    if ((0, import_chunk_f9x2f6cx.fpt)() === null) {
      if (!(0, import_chunk_865at33z.Yi)() && ((0, import_chunk_f9x2f6cx.AQe)() ? !(0, import_chunk_f9x2f6cx.Se)() : !(0, import_chunk_dw5px5e0.ZOe)())) return;
      (0, import_chunk_5e3gtsn9.w9)(), await Promise.race([(0, import_chunk_80c601hv.dQn)(), (0, import_chunk_5appeerh.K)(f)]);
    }
    let e = (0, import_chunk_f9x2f6cx.upt)();
    if (e) await Promise.race([import_chunk_xfr8663h.vme.settledWithin(f / 2).then(() => e.forceFlush()), (0, import_chunk_5appeerh.K)(f)]);
  } catch {
    (0, import_chunk_w578pjby.t)("[3P telemetry] managed-settings refusal export failed", { level: "error" });
  }
}
async function Uqs({ message: e, reason: r, errorType: o, print: i, beforeExit: d }) {
  if (i === void 0) (0, import_chunk_mpk68jst.Hp)(e);
  else await i(e);
  if (o !== void 0) await yet(o);
  let a = await m(e);
  if (!a) await (0, import_chunk_chstxdde.xj)({ sessionId: (0, import_chunk_f9x2f6cx.W)(), message: e, reason: r });
  return await d?.(), await (0, import_chunk_7q6ee47s.YWn)(), await (0, import_chunk_mpk68jst.IV)(), a ? (0, import_chunk_mpk68jst.GWn)(0) : (0, import_chunk_mpk68jst.Bn)(void 0, i === void 0 ? "cli_error" : "exit_with_message", r);
}
