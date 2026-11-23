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
var chunk_b3st3v6r_exports = {};
__export(chunk_b3st3v6r_exports, {
  IYt: () => IYt,
  W5s: () => W5s,
  d6o: () => d6o,
  j5s: () => j5s
});
module.exports = __toCommonJS(chunk_b3st3v6r_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ndx89hd3 = require("/$bunfs/root/chunk-ndx89hd3.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
function d6o(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (n) => ({ ...n, messages: (0, import_chunk_z6hn62tj.yBt)(n.messages, a) }));
}
function IYt(e, a, s, n) {
  let o = s.get(e);
  if (!o || (0, import_chunk_ed372ykp.$o)(o.status)) {
    (0, import_chunk_w578pjby.t)(`Dropping message for teammate task ${e}: task status is "${o?.status}"`);
    return;
  }
  let i = (0, import_chunk_bzyb60p0.Me)({ content: a, origin: n });
  s.update(e, (r) => ({ ...r, pendingUserMessages: [...r.pendingUserMessages, { text: a, origin: n, shownAs: i.uuid }] })), s.updateTranscript(e, (r) => ({ ...r, messages: (0, import_chunk_z6hn62tj.yBt)(r.messages, i) }));
}
function W5s(e, a) {
  let s = a.get(e);
  if (!(0, import_chunk_z6hn62tj.Xm)(s) || !s.awaitingPlanApproval) return;
  a.update(e, (n) => ({ ...n, awaitingPlanApproval: false, pendingPlanApproval: void 0 })), IYt(e, "The person moved you out of plan mode. Continue your work.", a, { kind: "task-notification" });
}
function j5s(e, a, s) {
  let n = (0, import_chunk_ndx89hd3.tMe)((0, import_chunk_865at33z.aee)(a, s), e);
  if (n?.status === "running") n.retryWake?.emit();
}
