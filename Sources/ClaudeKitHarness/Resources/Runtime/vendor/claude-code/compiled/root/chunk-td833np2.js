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
var chunk_td833np2_exports = {};
__export(chunk_td833np2_exports, {
  z2s: () => z2s
});
module.exports = __toCommonJS(chunk_td833np2_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_os = require("os");
var import_path = require("path");
function a() {
  let e = import_chunk_c203g5kd.s.SHELL || "", i = (0, import_os.homedir)(), r = (0, import_path.join)(i, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let o = (0, import_path.join)(r, "completion.zsh");
    return { name: "zsh", rcFile: (0, import_path.join)(i, ".zshrc"), cacheFile: o, completionLine: `[[ -f "${o}" ]] && source "${o}"`, shellFlag: "zsh" };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let o = (0, import_path.join)(r, "completion.bash");
    return { name: "bash", rcFile: (0, import_path.join)(i, ".bashrc"), cacheFile: o, completionLine: `[ -f "${o}" ] && source "${o}"`, shellFlag: "bash" };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let o = import_chunk_c203g5kd.s.XDG_CONFIG_HOME || (0, import_path.join)(i, ".config"), l = (0, import_path.join)(r, "completion.fish");
    return { name: "fish", rcFile: (0, import_path.join)(o, "fish", "config.fish"), cacheFile: l, completionLine: `[ -f "${l}" ] && source "${l}"`, shellFlag: "fish" };
  }
  return null;
}
async function z2s() {
  return;
}
function m(e) {
  let { cmd: i, prefixArgs: r } = (0, import_chunk_66srb2mf.Vf)();
  return (0, import_chunk_7fsmgfxx.kt)(i, [...r, "completion", e.shellFlag, "--output", e.cacheFile]);
}
