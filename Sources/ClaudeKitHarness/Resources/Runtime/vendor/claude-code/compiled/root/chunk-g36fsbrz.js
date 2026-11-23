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
var chunk_g36fsbrz_exports = {};
__export(chunk_g36fsbrz_exports, {
  B8n: () => B8n,
  Lbn: () => Lbn,
  fBr: () => fBr,
  wga: () => wga
});
module.exports = __toCommonJS(chunk_g36fsbrz_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_jm07ya5t = require("/$bunfs/root/chunk-jm07ya5t.js");
async function fBr() {
  if (!(0, import_chunk_9b4aq7fb.u8)() || !(0, import_chunk_9b4aq7fb.$Vt)()) return false;
  if ((0, import_chunk_865at33z.az)("afterSignIn") !== void 0) return true;
  return !(0, import_chunk_865at33z.pde)({ skipDaemonLoginSnapshot: true, skipTokensThatLoginClears: true }) && !(0, import_chunk_865at33z.qGn)() && (0, import_chunk_9b4aq7fb.gk)() === "profile-explicit" && await (0, import_chunk_jm07ya5t.A0a)();
}
class Lbn extends import_chunk_jv7av99m.A {
  constructor() {
    super("Claude Code didn't start this sign-in, and nothing on this computer changed. This sign-in creates an API key, which Claude Code won't use while ANTHROPIC_PROFILE stays as it is, and it removes any sign-in that Claude Code has saved. To sign in to the named profile, run `ant auth login --profile <name>` with the name in ANTHROPIC_PROFILE, then restart Claude Code. Or correct or unset ANTHROPIC_PROFILE wherever it is set (shell, launcher, or a settings file), restart Claude Code, and sign in again.", "A Console key sign-in was not started: ANTHROPIC_PROFILE would set the key aside");
    this.name = "KeySignInNotStartedError";
  }
}
function wga() {
  let e = (0, import_chunk_865at33z.ORo)();
  if (e === void 0 || !(0, import_chunk_9b4aq7fb.jX)((0, import_chunk_9b4aq7fb.u8)() ?? "")) return e;
  return "ANTHROPIC_PROFILE is set, so Claude Code won't use a Claude account sign-in made here until you unset that variable and restart. If the named profile has no working sign-in, Claude Code will stop sending your prompts once you have signed in. Signing in can also sign the named profile out. To sign in to the named profile, run `ant auth login --profile <name>` with the name in ANTHROPIC_PROFILE, then restart Claude Code.";
}
function B8n() {
  let e = (0, import_chunk_865at33z.KU)();
  return e === void 0 ? void 0 : (0, import_chunk_865at33z.BOl)(e);
}
