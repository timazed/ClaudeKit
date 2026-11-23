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
var chunk_w2bvnfzw_exports = {};
__export(chunk_w2bvnfzw_exports, {
  NON_REPL_SUBCOMMANDS: () => r,
  isAgentsJsonInvocation: () => a,
  isMcpServeInvocation: () => i,
  isPluginEvalInvocation: () => c,
  isProjectVerbInvocation: () => s,
  isRemoteControlInvocation: () => l
});
module.exports = __toCommonJS(chunk_w2bvnfzw_exports);
var r = /* @__PURE__ */ new Set(["update", "upgrade", "doctor", "forward-home-settings", ...[]]);
function s(e) {
  return false;
}
function i(e) {
  let n = e.indexOf("mcp");
  return n !== -1 && e[n + 1] === "serve";
}
function a(e) {
  let n = e.indexOf("agents");
  return n !== -1 && e.includes("--json", n + 1);
}
function c(e) {
  return e.some((n, o) => (n === "plugin" || n === "plugins") && e[o + 1] === "eval");
}
function l(e) {
  return e.some((n) => n === "remote-control" || n === "rc");
}
