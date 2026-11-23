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
var chunk_6r3c9gp2_exports = {};
__export(chunk_6r3c9gp2_exports, {
  beginExitWaitingForOAuthRefreshLast: () => import_chunk_r9kxf52b.vVt,
  beginRegisteredOAuthRefreshLockHold: () => import_chunk_r9kxf52b.TYi,
  exitWaitsForOAuthRefreshUntilDeadline: () => import_chunk_r9kxf52b.KOs,
  msSinceOAuthRefreshExitBegan: () => import_chunk_r9kxf52b.EYi,
  registerOAuthRefreshExitWait: () => import_chunk_r9kxf52b.vYi,
  waitForOAuthRefreshBeforeExit: () => import_chunk_r9kxf52b.eRt,
  waitForOAuthRefreshUntilDeadlineAtExit: () => import_chunk_r9kxf52b.Cee
});
module.exports = __toCommonJS(chunk_6r3c9gp2_exports);
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
