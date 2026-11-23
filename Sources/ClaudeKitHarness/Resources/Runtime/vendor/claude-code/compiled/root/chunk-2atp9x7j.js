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
var chunk_2atp9x7j_exports = {};
__export(chunk_2atp9x7j_exports, {
  Goi: () => Goi,
  Woi: () => Woi,
  YUa: () => YUa,
  c7r: () => c7r,
  d7r: () => d7r,
  f7r: () => f7r,
  joi: () => joi,
  qUa: () => qUa,
  tsr: () => tsr,
  u7r: () => u7r
});
module.exports = __toCommonJS(chunk_2atp9x7j_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var o = "Browser extension is not connected. The user's last message came from the Claude mobile app, where Claude in Chrome cannot be set up, so give no setup or troubleshooting steps unless they ask. In one or two short sentences, tell them you could not reach Claude in Chrome, then carry on another way if you can (cloud browser or web search, for example), and offer to try again once they are at a computer with Chrome open and the Claude in Chrome extension signed in. Unless they say Chrome is now open, do not call a Claude in Chrome tool again in this reply.", Woi = "If the user prefers, continue with alternatives (cloud browser, web search, or ask them to do the browser step themselves).", joi = " If the user belongs to more than one organization, the extension must also be signed in to the same organization as this conversation. To change the extension's organization, the user logs out in the extension's settings, then logs in and selects this conversation's organization. Logging out erases the shortcuts and scheduled tasks saved in the extension, so suggest it only if the other checks did not help and the user is in more than one organization, and tell the user about that loss first.";
function d7r() {
  let e = `Browser extension is not connected. Chrome on the user's computer could not be reached from this session: that computer may be closed or asleep, Chrome may not be running there, the Claude extension may not be installed there (${import_chunk_sjqze7qg.NW}), or this session may not be able to connect to Chrome. Ask the user to make sure that computer is awake and Chrome is open there with the Claude extension, then retry. If it still fails, ask the user to check that the extension is signed in to the same claude.ai account they use here.${joi}`;
  return (0, import_chunk_3t7ve0wy.Dm)() ? `${e} ${Woi}` : e;
}
var c7r = "tengu_twinkly_moler";
function u7r() {
  if (((0, import_chunk_6e68m1dj.hn)() || (0, import_chunk_3t7ve0wy.Lw)()) && (0, import_chunk_3t7ve0wy.Dm)() && (0, import_chunk_929j4hj9.M8e)((0, import_chunk_929j4hj9.Fi)().lastTurnClientPlatform) && (0, import_chunk_865at33z.b)("tengu_glowing_pancake", false)) return (0, import_chunk_cqa9hrgx.u)("chrome_phone_answer"), o;
  return;
}
function qUa(e) {
  return () => {
    let t = e(), n = (0, import_chunk_929j4hj9.Fi)();
    return n.disconnectedAnswerCount++, n.disconnectedAnswerTexts.add(t), t;
  };
}
function Goi() {
  return (0, import_chunk_929j4hj9.Fi)().disconnectedAnswerCount;
}
function f7r(e) {
  return (0, import_chunk_929j4hj9.Fi)().disconnectedAnswerTexts.has(e);
}
function tsr() {
  let e = (0, import_chunk_929j4hj9.Fi)();
  return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker;
}
function YUa() {
  (0, import_chunk_929j4hj9.Fi)().notConnectedSeenByPriorWorker = true;
}
