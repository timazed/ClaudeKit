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
var chunk_rnad4hj1_exports = {};
__export(chunk_rnad4hj1_exports, {
  Bdo: () => Bdo,
  EDe: () => EDe,
  K5e: () => K5e,
  drl: () => drl,
  lrl: () => lrl
});
module.exports = __toCommonJS(chunk_rnad4hj1_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var t = "<routine_summary>";
function K5e() {
  return (0, import_chunk_865at33z.b)("tengu_kairos_push_notifications", false);
}
function Bdo() {
  return (0, import_chunk_865at33z.b)("tengu_kairos_input_needed_push", false);
}
function EDe() {
  return K5e() && (0, import_chunk_8m5q5cts.ll)("agentPushNotifEnabled", false).value;
}
var lrl = "Send a notification to the user via their terminal and, when Remote Control is connected, also push to their mobile device", e = `This tool sends a desktop notification in the user's terminal. If Remote Control is connected, it also pushes to their phone. Either way, it pulls their attention from whatever they're doing \u2014 a meeting, another task, dinner \u2014 to this session. That's the cost. The benefit is they learn something now that they'd want to know now: a long task finished while they were away, a build is ready, you've hit something that needs their decision before you can continue.

Because a notification they didn't need is annoying in a way that accumulates, err toward not sending one. Don't notify for routine progress, or to announce you've answered something they asked seconds ago and are clearly still watching, or when a quick task completes. Notify when there's a real chance they've walked away and there's something worth coming back for \u2014 or when they've explicitly asked you to notify them.

Keep the message under 200 characters, one line, no markdown. Lead with what they'd act on \u2014 "build failed: 2 auth tests" tells them more than "task done" and more than a status dump.

When the user is actively at the terminal, your output already reaches them \u2014 a notification on top of it would be a duplicate, so the tool skips it and says so. A "not sent" result is expected and only ever about this one notification: it was redundant, turned off, or had nowhere to go.`, o = `

This is a scheduled routine \u2014 the notification is how the run reaches its owner. Wrap the message in ${t} tags: the first sentence becomes the phone banner, the full text becomes the email body.`;
function drl() {
  return (0, import_chunk_3t7ve0wy.nA)() ? e + o : e;
}
