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
var chunk_sr33d2zd_exports = {};
__export(chunk_sr33d2zd_exports, {
  PLe: () => PLe,
  dEs: () => dEs,
  fjn: () => fjn,
  gCr: () => gCr,
  hCr: () => hCr,
  lGe: () => lGe,
  mCr: () => mCr,
  mjn: () => mjn,
  mlt: () => mlt,
  pCr: () => pCr,
  pGt: () => pGt,
  pjn: () => pjn,
  qvt: () => qvt,
  uGi: () => uGi,
  ujn: () => ujn,
  xLe: () => xLe
});
module.exports = __toCommonJS(chunk_sr33d2zd_exports);
var lGe = "Remote Control is only available with claude.ai subscriptions. Please use `/login` to sign in with your claude.ai account.", ujn = "Error: You must be logged in to use Remote Control.\n\nRemote Control is only available with claude.ai subscriptions. Run `claude auth login` to sign in with your claude.ai account.", pCr = "To sandbox sessions, set sandbox.enabled to true in settings.", fjn = "bridge_folder_already_served", mlt = "Remote Control disconnected.", xLe = "/login", pjn = "Remote Control got an unexpected server response \u2014 try again after updating Claude Code", qvt = "session can't use Remote Control. Start a new one.", PLe = "the session refused a request that only the computer it is bound to can sign, so signing in again won't fix it", mCr = "Remote Control could not verify the signed-in account \u2014 run /remote-control to reconnect", dEs = "signed-in claude.ai account or organization changed on this machine \u2014 run /remote-control to start a session for the current account, or /login to switch back, then /remote-control", hCr = "Remote Control stopped \u2014 the app running this session is signed out of Claude. Sign in there, then turn Remote Control back on", gCr = "Remote Control stopped \u2014 the app running this session is now signed in to a different Claude account", pGt = "Previous session is unavailable \u2014 run /remote-control to start a new one", mjn = "Trusted devices now required \u2014 run /remote-control to start a new session", uGi = "queued";
