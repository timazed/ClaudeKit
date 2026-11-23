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
var chunk_2e866jns_exports = {};
__export(chunk_2e866jns_exports, {
  wtt: () => wtt
});
module.exports = __toCommonJS(chunk_2e866jns_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_util = require("util");
function wtt(n, i) {
  i((r) => {
    let o = r;
    if ("cacheBreakerPhrase" in n) {
      let e = n.cacheBreakerPhrase, a = e == null ? void 0 : String(e);
      if (o.cacheBreakerPhrase !== a) o = { ...o, cacheBreakerPhrase: a };
    }
    if ("autoCompactWindow" in n) {
      let e = n.autoCompactWindow, a = e == null ? (0, import_chunk_bzyb60p0.TPn)() : Number(e);
      if (!(0, import_util.isDeepStrictEqual)(o.autoCompactWindow, a)) o = { ...o, autoCompactWindow: a };
    }
    if ("briefTranscript" in n) {
      let e = Boolean(n.briefTranscript);
      if (o.briefTranscript !== e) o = { ...o, briefTranscript: e };
    }
    if ("isBriefOnly" in n) {
      let e = Boolean(n.isBriefOnly);
      if (o.isBriefOnly !== e) o = { ...o, isBriefOnly: e };
    }
    if ("slackTagConnected" in n) {
      let e = Boolean(n.slackTagConnected);
      if (o.slackTagConnected !== e) o = { ...o, slackTagConnected: e };
    }
    if ("fastMode" in n) {
      let e = Boolean(n.fastMode);
      if (o.fastMode !== e) o = { ...o, fastMode: e };
    }
    if ("model" in n) {
      let e = n.model, a = e == null ? null : String(e);
      if (o.mainLoopModelForSession !== a) o = { ...o, mainLoopModelForSession: a };
      if (o.mainLoopModel !== a) o = { ...o, mainLoopModel: a };
    }
    return o;
  });
}
