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
var chunk_6cm636re_exports = {};
__export(chunk_6cm636re_exports, {
  W5n: () => W5n
});
module.exports = __toCommonJS(chunk_6cm636re_exports);
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
function W5n(o, t, e) {
  switch (t) {
    case "credential_store_failed":
      return (0, import_chunk_zzrn5zap.Dze)() === "keychain" ? `Couldn't remove the saved sign-in for "${o}", so Claude Code may still use it. Claude Code could not read or update its credential store. If the macOS keychain is locked, unlock it, for example with \`security unlock-keychain\`, then ${e}.` : `Couldn't remove the saved sign-in for "${o}", so Claude Code may still use it. Claude Code could not read or update its credential store. ${e.charAt(0).toUpperCase()}${e.slice(1)}.`;
    case "keychain_unreadable":
      return `Couldn't confirm the sign-out from "${o}": Claude Code could not read the macOS keychain, so a saved sign-in may still be there. The keychain may be locked. Unlock it, for example with \`security unlock-keychain\`, then ${e}.`;
  }
}
