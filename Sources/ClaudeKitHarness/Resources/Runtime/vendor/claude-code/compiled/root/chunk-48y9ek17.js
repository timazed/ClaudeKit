const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_48y9ek17_exports = {};
__export(chunk_48y9ek17_exports, {
  GGi: () => GGi,
  IEs: () => IEs
});
module.exports = __toCommonJS(chunk_48y9ek17_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function IEs(n, e, i) {
  return typeof n === "object" && n !== null && "$schemaVersion" in n && n.$schemaVersion === i && "deploymentOrganizationUuid" in n && n.deploymentOrganizationUuid === e;
}
async function GGi(n, e) {
  let { CLAUDE_CODE_SERVED_SCHEMA_VERSION: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-n94c768z.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default, 1));
  if (!IEs(n, e, i)) return;
  return "claudeCode" in n && typeof n.claudeCode === "object" && n.claudeCode !== null && "signInEnabled" in n.claudeCode && n.claudeCode.signInEnabled === true;
}
