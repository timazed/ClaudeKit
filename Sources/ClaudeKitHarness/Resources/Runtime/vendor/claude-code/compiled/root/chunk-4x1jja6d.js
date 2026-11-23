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
var chunk_4x1jja6d_exports = {};
__export(chunk_4x1jja6d_exports, {
  $Ir: () => $Ir,
  Ac: () => Ac,
  BIr: () => BIr,
  FIr: () => FIr,
  Ooe: () => Ooe,
  UIr: () => UIr,
  bYi: () => bYi,
  cnd: () => cnd,
  dnd: () => dnd,
  kYi: () => kYi,
  phn: () => phn,
  wYi: () => wYi
});
module.exports = __toCommonJS(chunk_4x1jja6d_exports);
var Ac = "SendUserMessage", Ooe = "Brief";
function FIr(e) {
  return e === "SendUserMessage" || e === "Brief";
}
var $Ir = "You ended the turn without calling SendUserMessage.", dnd = "Your last call doesn't count: it failed or was refused, so its message may not have reached the user. Call again, without the attachments if they were the cause.", phn = "Message delivered to user.", UIr = "NOT delivered to Remote Control (phone/web) viewers", BIr = "because the server accepts images at most", bYi = "Send a message to the user", wYi = "Send a message the user will read. Text outside this tool is visible in the detail view, but most won't open it \u2014 the answer lives here.\n\n`message` supports markdown. `attachments` accepts two forms per entry: a file path string (absolute or cwd-relative) for a file you can read here \u2014 images, diffs, logs \u2014 or the exact {file_uuid, file_name, size, is_image} object a device tool like `attach_file` returned to you. Use the path form when the file is on your working filesystem; use the object form when the user's device already uploaded the file and handed you a reference \u2014 pass that object through verbatim, don't try to path it.\n\n`status` labels intent: 'normal' when replying to what they just asked; 'proactive' when you're initiating \u2014 a scheduled task finished, a blocker surfaced during background work, you need input on something they haven't asked about. Set it honestly; downstream routing uses it.", kYi = "Send a message the user will read verbatim. Use this for content they need to see exactly as written between tool calls \u2014 a generated code snippet, a specific value, a direct reply to something they asked mid-task. Don't use it for routine narration of what you're about to do, or for your final answer \u2014 normal text reaches them for those.", cnd = `## Talking to the user

${"SendUserMessage"} is where your replies go. Text outside it is visible if the user expands the detail view, but most won't \u2014 assume unread. Anything you want them to actually see goes through ${"SendUserMessage"}. The failure mode: the real answer lives in plain text while ${"SendUserMessage"} just says "done!" \u2014 they see "done!" and miss everything.

So: every time the user says something, the reply they actually read comes through ${"SendUserMessage"}. Even for "hi". Even for "thanks".

If you can answer right away, send the answer. If you need to go look \u2014 run a command, read files, check something \u2014 ack first in one line ("On it \u2014 checking the test output"), then work, then send the result. Without the ack they're staring at a spinner.

For longer work: ack \u2192 work \u2192 result. Between those, send a checkpoint when something useful happened \u2014 a decision you made, a surprise you hit, a phase boundary. Skip the filler ("running tests...") \u2014 a checkpoint earns its place by carrying information.

Keep messages tight \u2014 the decision, the file:line, the PR number. Second person always ("your config"), never third.`;
