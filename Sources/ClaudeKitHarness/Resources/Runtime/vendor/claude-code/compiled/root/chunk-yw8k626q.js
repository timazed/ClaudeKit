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
var chunk_yw8k626q_exports = {};
__export(chunk_yw8k626q_exports, {
  DEn: () => DEn,
  HEn: () => HEn,
  IJn: () => IJn,
  Jse: () => Jse,
  MJn: () => MJn,
  OJn: () => OJn,
  Zva: () => Zva,
  eTa: () => eTa
});
module.exports = __toCommonJS(chunk_yw8k626q_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
function HEn(e, o) {
  {
    let r = (0, import_chunk_r3kja8v6.ue)() || e.replMode === true;
    if (!r && e.sdkUrlWorker === true && e.replMode === void 0) try {
      r = e.messages.some((t) => t.type === "assistant" && Array.isArray(t.message?.content) && t.message.content.some((d) => d.type === "tool_use" && (0, import_chunk_h4t4qfaq.li)(d.name)));
    } catch {
      r = true;
    }
    if (r) {
      let t = require("/$bunfs/root/chunk-kkgqp50y.js");
      return t.planCodeModeFromSession(e, o);
    }
  }
  return { pin: void 0, switched: false };
}
function DEn(e) {
  return (o, r) => {
    if (!(0, import_chunk_r3kja8v6.ue)() && o.replMode === true) (0, import_chunk_p1ewvgeh.uYe)(HEn({ replMode: true, messages: [], source: e, sessionId: r }, () => {
    }));
  };
}
function OJn(e) {
  if ((0, import_chunk_p1ewvgeh.uYe)(e), (0, import_chunk_r3kja8v6.ue)()) {
    let o = require("/$bunfs/root/chunk-kkgqp50y.js");
    o.applyCodeModePlan(e);
  }
}
function IJn(e, o) {
  let r = HEn(e, o);
  return OJn(r), r;
}
function Jse(e = false) {
  if ((0, import_chunk_r3kja8v6.ue)()) {
    let o = require("/$bunfs/root/chunk-kkgqp50y.js");
    o.recordCodeMode(e);
  }
}
function Zva() {
  {
    let e = require("/$bunfs/root/chunk-kkgqp50y.js");
    e.recordCodeMode(true);
  }
}
function eTa() {
  if ((0, import_chunk_r3kja8v6.vi)()) {
    let e = require("/$bunfs/root/chunk-kkgqp50y.js");
    return e.cloudMoveRefusal();
  }
  return;
}
function MJn(e) {
  if ((0, import_chunk_r3kja8v6.ue)()) return (0, import_chunk_bzyb60p0.Pir)(e);
  return "file";
}
