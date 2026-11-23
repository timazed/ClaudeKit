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
var chunk_pnqybv63_exports = {};
__export(chunk_pnqybv63_exports, {
  Kul: () => Kul,
  PG: () => PG,
  Vul: () => Vul
});
module.exports = __toCommonJS(chunk_pnqybv63_exports);
var import_chunk_pzj67pdt = require("/$bunfs/root/chunk-pzj67pdt.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var PG = "SendFile", Vul = "Send one or more files to another Claude Code session";
function Kul(e, s) {
  return `Send files to another Claude Code session \u2014 a peer session on this machine, or a Remote Control / cloud session on another machine. The receiving Claude gets the files on its own filesystem with @path references, plus your message.

Use this when a file is the thing to hand over \u2014 a doc with figures, a screenshot, a report, a build artifact. For plain text, use ${import_chunk_bne5t4g3.Ln} instead. For agents inside this session (subagents, teammates), also use ${import_chunk_bne5t4g3.Ln} \u2014 they share your filesystem and can read the file at its path directly.

\`to\` accepts a peer session name from ${import_chunk_pzj67pdt.Fu}, or an explicit \`uds:<socket>\` / \`bridge:<session id>\` address.

Each file is capped at ${s} MiB, at most ${e} files per send. Files must exist on the local filesystem \u2014 write content to a file first if needed. The receiver verifies each file against a sha256 digest of what was sent (where the transport carries it) and refuses a mismatch with a visible note.

Example: ${PG}({ to: "devbox", files: ["report.pdf", "figures/plot.png"], message: "Here's the doc with figures." })`;
}
