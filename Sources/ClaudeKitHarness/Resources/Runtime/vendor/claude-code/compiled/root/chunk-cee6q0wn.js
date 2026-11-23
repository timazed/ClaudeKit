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
var chunk_cee6q0wn_exports = {};
__export(chunk_cee6q0wn_exports, {
  ROr: () => ROr,
  Yd: () => Yd,
  c9i: () => c9i,
  f9i: () => f9i,
  p9i: () => p9i,
  qx: () => qx,
  u9i: () => u9i
});
module.exports = __toCommonJS(chunk_cee6q0wn_exports);
var qx = "PushNotification";
var Yd = "SendUserFile", c9i = "Send one or more files to the user", u9i = /^ref_[0-9a-hjkmnp-tv-z]{26}$/, ROr = "/on-the-computer/", n = "Set `status` on every call. Use `proactive` when you're initiating \u2014 the user is away and you want this to reach their phone (build artifact ready, report generated). Use `normal` when replying to something the user just said.", s = `Set \`status\` on every call. Use \`proactive\` when you're initiating (build artifact ready, report generated). Use \`normal\` when replying to something the user just said. Neither one sends a notification: the file waits in this session until the user opens it. If this run is meant to notify the user, call ${qx} as well.`;
function e(t) {
  return `Send files to the user. Use this for any file the user would want to see \u2014 a generated diagram, a report, a screenshot, a built artifact \u2014 and you want it surfaced, not just mentioned. Send deliverables as they are produced, not batched at the end of the task: a complete draft or a meaningfully updated version of the thing the user asked for is worth sending mid-task, so they can follow progress and redirect early. Do NOT send routine working files \u2014 scratch files, debug output, partial fragments, or every incremental save of something you're still actively editing; each call renders a file card in the conversation, and a stream of cards for one file is noise. Re-send a file only when it has meaningfully changed since the last send. Paths can be absolute or relative to the current working directory.

Add a \`caption\` when a one-liner of context helps ("the failing case is row 42", "before vs after"). Skip it if the file speaks for itself.

${t}

Set \`display\` to choose how the file is presented. Use \`'render'\` when the user should see the content inline in the side panel right now \u2014 a chart, a rendered HTML page, a diagram, an image. Use \`'attach'\` when the file is something they'll save and open elsewhere \u2014 source code, a spreadsheet, a document for another app \u2014 and an inline preview would just be noise. Leave it unset to let the client decide by file type.

Files must already exist on the local filesystem \u2014 the tool sends files, it doesn't fetch URLs or render content. When unsure of a path, verify with ls first; absolute paths avoid ambiguity about the working directory.

Example: SendUserFile({ files: ["report.md"], caption: "Here's the report.", status: "normal" })`;
}
var f9i = e(n), p9i = e(s);
