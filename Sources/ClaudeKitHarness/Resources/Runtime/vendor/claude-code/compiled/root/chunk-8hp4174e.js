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
var chunk_8hp4174e_exports = {};
__export(chunk_8hp4174e_exports, {
  AUr: () => AUr
});
module.exports = __toCommonJS(chunk_8hp4174e_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_path = require("path");
var n = ["MCP", "symlink", "grep", "regex", "localhost", "codebase", "TypeScript", "JSON", "OAuth", "webhook", "gRPC", "dotfiles", "subagent", "worktree"], i = ["VS Code", "IDE", "webview", "IntelliSense"];
function c(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[-_./\s]+/).map((t) => t.trim()).filter((t) => t.length > 2 && t.length <= 20);
}
var a = 50;
async function AUr() {
  let e = /* @__PURE__ */ new Set([...import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "claude-vscode" ? i : [], ...n]);
  try {
    let t = (0, import_chunk_f9x2f6cx.Oo)();
    if (t) {
      let o = (0, import_path.basename)(t);
      if (o.length > 2 && o.length <= 50) e.add(o);
    }
  } catch {
  }
  try {
    let t = await (0, import_chunk_w5s307zm.pm)();
    if (t) for (let o of c(t)) e.add(o);
  } catch {
  }
  return [...e].slice(0, a);
}
