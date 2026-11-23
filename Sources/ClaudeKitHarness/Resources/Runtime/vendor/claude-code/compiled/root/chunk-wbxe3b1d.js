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
var chunk_wbxe3b1d_exports = {};
__export(chunk_wbxe3b1d_exports, {
  KYs: () => KYs
});
module.exports = __toCommonJS(chunk_wbxe3b1d_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_d3brd7gb = require("/$bunfs/root/chunk-d3brd7gb.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var c = `Usage: /model <name>. Available: ${import_chunk_zmb62hr5.Ece.join(", ")}, default, or a full model ID.`;
async function KYs(f, t) {
  let n = f.trim();
  if (!n || import_chunk_k449cc64.Nge.includes(n)) {
    let e = t.getAppState();
    return { type: "text", value: `${(0, import_chunk_d3brd7gb.Znr)(e)}
${c}` };
  }
  if (import_chunk_k449cc64.bF.includes(n)) return { type: "text", value: c };
  (0, import_chunk_y53wbr8a.a)("tengu_model_command_inline", { args_hash: (0, import_chunk_myvyhcm0.Zn)(n), args_length: n.length });
  let m = async () => {
    let e = await (0, import_chunk_5appeerh.me)((0, import_chunk_d3brd7gb.Ett)(n, t.storageV5, t.credentials), import_chunk_d3brd7gb.Z5r);
    if (e === void 0) return { type: "text", value: `Couldn't confirm model '${(0, import_chunk_865at33z.Mm)(n)}' is available (the check timed out) \xB7 try again` };
    if (!e.ok) return { type: "text", value: e.message };
    if (e.model !== null && (0, import_chunk_d3brd7gb.hMe)(e.model)) {
      (0, import_chunk_cqa9hrgx.l)("model_fable_consent", "noninteractive_set_blocked");
      let o = (0, import_chunk_865at33z.yw)((0, import_chunk_865at33z.jt)(e.model));
      return { type: "text", value: `${o} uses usage credits and needs a one-time consent \xB7 pick ${(0, import_chunk_865at33z.dde)(o)} from /model in an interactive session to set it up` };
    }
    return { validation: e };
  }, u = async (e) => {
    let o = await (0, import_chunk_d3brd7gb.VD)(t.session, t.getAppState, e.model, "command");
    if (o.decision === "block" || o.decision === "ask") return (0, import_chunk_cqa9hrgx.l)("model_switch", "blocked_by_hook"), { type: "text", value: (0, import_chunk_d3brd7gb.VJ)(e.model, o.decision === "ask" ? `${o.reason ?? "confirmation required"} (run /model interactively to confirm)` : o.reason, o.messages) };
    let i = false, s = (0, import_chunk_d3brd7gb.TDt)(t.session, e.model, t.getAppState, t.setAppState, !t.options.isNonInteractiveSession, "command", e.substitutedFrom, t.storageV5, (r) => {
      i = r?.kind === "failed";
    }), p = e.substitutedFrom !== void 0 && e.model !== null ? `${(0, import_chunk_865at33z.QP)(e.substitutedFrom, e.model)}
` : "", g = o.messages.length > 0 ? `
${o.messages.map(import_chunk_d3brd7gb.Vm).join(`
`)}` : "";
    return { notice: s.then((r) => `${p}${r}${g}`), hasDefaultSaveFailed: () => i };
  };
  if (!t.options.isNonInteractiveSession && t.rowCommit.isHooked()) {
    let e = await (0, import_chunk_bzyb60p0.TT)(t.session, m);
    if (!("validation" in e)) return e;
    return { type: "text", value: (await t.rowCommit.savedModelPickReply(e.validation.model, t, async () => {
      let i = await (0, import_chunk_bzyb60p0.TT)(t.session, () => u(e.validation));
      if ("notice" in i) {
        let s = await i.notice;
        return i.hasDefaultSaveFailed() ? { unsaved: s } : s;
      }
      return { refused: i.type === "text" ? i.value : "The model was not changed" };
    }, { persistsOffBox: () => (0, import_chunk_wddxyb00.vs)(t.session) })).text };
  }
  let d = await (0, import_chunk_bzyb60p0.TT)(t.session, async () => {
    let e = await m();
    return "validation" in e ? u(e.validation) : e;
  });
  if ("notice" in d) return { type: "text", value: await d.notice };
  return d;
}
