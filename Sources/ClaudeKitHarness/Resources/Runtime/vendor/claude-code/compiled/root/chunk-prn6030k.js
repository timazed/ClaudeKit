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
var chunk_prn6030k_exports = {};
__export(chunk_prn6030k_exports, {
  ALl: () => ALl,
  DLl: () => DLl,
  FLl: () => FLl,
  HLl: () => HLl,
  Hhn: () => Hhn,
  ILl: () => ILl,
  JOo: () => JOo,
  LLl: () => LLl,
  MLl: () => MLl,
  NLl: () => NLl,
  OLl: () => OLl,
  PLl: () => PLl,
  QOo: () => QOo,
  RLl: () => RLl,
  S7i: () => S7i,
  XOo: () => XOo,
  Xi: () => Xi,
  YOo: () => YOo,
  ZOo: () => ZOo,
  _b: () => _b,
  aJe: () => aJe,
  eIo: () => eIo,
  hIs: () => hIs,
  iJe: () => iJe,
  mIs: () => mIs,
  nIo: () => nIo,
  tIo: () => tIo,
  xLl: () => xLl
});
module.exports = __toCommonJS(chunk_prn6030k_exports);
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var Xi = "claude-in-chrome", YOo = "javascript_tool", XOo = /^[A-Za-z0-9_-]{1,128}$/;
function _b(t) {
  return (0, import_chunk_3f4m74y6.xn)(t) === Xi;
}
var e = "--claude-in-chrome-mcp";
function S7i(t) {
  if (t.type !== void 0 && t.type !== "stdio") return false;
  return (t.command?.includes(e) ?? false) || (t.args?.some((a) => a.includes(e)) ?? false);
}
var ALl = ["file_upload", "browser_batch"], Hhn = [YOo, "read_page", "find", "form_input", "computer", "browser_batch", "navigate", "resize_window", "gif_creator", "upload_image", "get_page_text", "tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "read_console_messages", "read_network_requests", "shortcuts_list", "shortcuts_execute", "file_upload", "switch_browser", "list_connected_browsers", "select_browser"], iJe = "file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.", RLl = `Nothing was uploaded, and nothing else in this call ran. An upload may not run here unless the chat is in auto mode ("Automatically approve" or "Auto"), and a person can't approve one here yet. Repeating the call won't help while the setting stays as it is. Tell the user why. They can choose the file in their browser themselves or, if the chat is not in auto mode and offers it, change the chat's approval setting. If the chat is already in auto mode, another limit applies and choosing the file is the only way.`, JOo = "Nothing was uploaded, and nothing else in this call ran. Uploads don't run in plan mode. Ask the user to leave plan mode, or to choose the file in their browser themselves.", xLl = "Nothing was uploaded. In auto mode an upload that needs a person's approval can't be approved here. Ask the user to choose the file in their browser themselves, or to leave auto mode.", PLl = "Nothing was uploaded. An upload from a subagent can't be approved here. Upload the file from the main conversation, or ask the user to choose it in their browser themselves.", OLl = "Nothing was uploaded. Call file_upload with only origin, paths and, if needed, ref (an element ref such as ref_1) and tabId (a number).", ILl = "Nothing was uploaded, because a path is longer than 1024 bytes or holds a control or formatting character. Upload a file whose path has neither.", MLl = "Nothing was uploaded. Outside auto mode an upload runs only after the user approves it on its card, and this call has no such approval. Call file_upload again to ask the user.", QOo = "Nothing was uploaded. Pass the page's origin as a browser writes it: https:// or http://, the host name in lower case ASCII (a name with non-ASCII letters in its xn-- (punycode) form; no IP address and no trailing dot), and a port only if it is not the default, with no path and no trailing slash, such as https://jobs.example.com.", HLl = "Nothing was uploaded. fileDigests is written by Claude Code, not by you. Call file_upload again without it.", ZOo = "file_upload cannot run inside browser_batch in this session, and nothing in this call ran. If file_upload is among your tools, call it on its own.", eIo = "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.", DLl = "tengu_sturdy_kettle", mIs = { after_looking: 1, looking_after_acting: 2, after_acting: 3 }, LLl = "Claude in Chrome: this result was withheld, because the tab left the site that this call was checked on. Call tabs_context_mcp to see where the tab is now, then look again if it still fits the page.", tIo = "Claude in Chrome: this call was not sent. It was checked against the page that an earlier call of this reply saw, and it could not go ahead on that check alone. Call tabs_context_mcp to see where the tab is now, and decide afresh whether the call still fits that page.", nIo = "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.", NLl = "browser_batch isn't available right now, and nothing in this call ran. Make each action its own call instead. Don't retry it as a batch.", hIs = "Nothing in this call ran. Outside auto mode a browser_batch runs only if every action is a computer, find, form_input, get_page_text, read_page, read_console_messages, read_network_requests or javascript_tool call with the same tabId, and that tab shows a site that the user has allowed for this chat. If this batch holds another action, such as navigate, make that action its own call, and batch the actions before it and the actions after it separately. You can send these calls together in one reply: they run in order. But a later call still runs if an earlier one fails, so send a click, typing or a script only after you have the result of the navigate. If the actions name no tabId or different ones, correct that. If every action already fits, this batch can't run here: make each action its own call.", FLl = "Nothing in this call ran. Outside auto mode a browser_batch runs only if every action is a computer, find, form_input, get_page_text, read_page, read_console_messages, read_network_requests or javascript_tool call with the same tabId, and that tab shows a site that the user has allowed for this chat. The first action may also be a navigate with that tabId to a page of such a site, if at least one of these actions follows it. The tab may then show any site before the navigate. If this batch holds another action, such as a second navigate or a navigate to a site that the user has not allowed, make that action its own call, and batch the actions before it and the actions after it separately. You can send these calls together in one reply: they run in order. But a later call still runs if an earlier one fails, so after a navigate that is its own call, send a click, typing or a script only when you have its result. If the actions name no tabId or different ones, correct that. If every action already fits, this batch can't run here: make each action its own call.";
function aJe() {
  return { type: "stdio", command: process.execPath, args: [e], scope: "dynamic" };
}
