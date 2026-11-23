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
var chunk_epy4sc29_exports = {};
__export(chunk_epy4sc29_exports, {
  $Ll: () => $Ll,
  A7i: () => A7i,
  BLl: () => BLl,
  C7i: () => C7i,
  DVn: () => DVn,
  Dhn: () => Dhn,
  E7i: () => E7i,
  GLl: () => GLl,
  HVn: () => HVn,
  IVn: () => IVn,
  Jke: () => Jke,
  KLl: () => KLl,
  Kct: () => Kct,
  LPe: () => LPe,
  LVn: () => LVn,
  Lhn: () => Lhn,
  Ll: () => Ll,
  MVn: () => MVn,
  Nhn: () => Nhn,
  OVn: () => OVn,
  T7i: () => T7i,
  ULl: () => ULl,
  VLl: () => VLl,
  WLl: () => WLl,
  a8: () => a8,
  b7i: () => b7i,
  bd: () => bd,
  dMr: () => dMr,
  gIs: () => gIs,
  jLl: () => jLl,
  k7i: () => k7i,
  l8: () => l8,
  lMr: () => lMr,
  oIo: () => oIo,
  qct: () => qct,
  rIo: () => rIo,
  sIo: () => sIo,
  v7i: () => v7i,
  w7i: () => w7i,
  zLl: () => zLl
});
module.exports = __toCommonJS(chunk_epy4sc29_exports);
var Dhn = "/v2/ccr-sessions/-/meta/mcp", Ll = "claude-code-remote", Kct = "send_later", lMr = "delete_trigger", $Ll = "list_triggers", rIo = ["list_triggers", "create_trigger", "update_trigger", "delete_trigger", "fire_trigger", "send_later"], dMr = "send_message", ULl = "list_sessions", b7i = ["add_repo", "check_repo_access", "list_repos"], OVn = [...b7i, "register_repo_root"], oIo = "Claude Code Remote", a8 = "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a", w7i = "X-MCP-Server-ID";
function Lhn(e, s) {
  return { type: "http", url: e, headers: { ["X-MCP-Server-ID"]: "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a", "X-Session-UUID": s, "anthropic-version": "2023-06-01" }, alwaysLoad: true };
}
var bd = "hearthbot", BLl = "post_widget", WLl = "update_project_settings", d = { read_thread: "fetch_thread", read_project_chat: "fetch_project_timeline", read_messages_by_id: "fetch_messages", list_threads: "list_thread_sessions", list_prs: "list_project_prs", edit_message: "update_message", request_decision: "ask_decision", update_progress_checklist: "update_status" }, Nhn = { post_message: "reply", rename_thread: "set_thread_label" }, p = { start_thread: "start_thread_session" };
function l(e, s) {
  return [...e.map((t) => [t, t]), ...Object.entries(s).flatMap(([t, r]) => {
    let n = e.find((a) => a === r);
    return n === void 0 ? [] : [[t, n]];
  })];
}
function Jke(e, s = d) {
  return l(e, s).map(([t]) => t);
}
function _(e) {
  return `mcp__${bd}__${e}`;
}
var k7i = Jke(["fetch_messages", "fetch_thread", "fetch_project_timeline", "list_thread_sessions", "list_project_artifacts", "list_project_prs", "get_project_settings", "get_channel_session_id", "get_project_session_id"]), E7i = Jke(["start_thread_session"], p), gIs = [...Jke(["reply", "post_message", "post_widget", "update_message", "react", "unreact", "no_reply_needed", "update_status", "ask_decision", "close_decision"]), ...k7i, ...E7i], jLl = ["thread_id", "message_ids", "order", "limit", "cursor", "full_bodies", "since", "since_ts", "state", "find", "include_pull_requests"], GLl = ["thread_id", "message_id", "title", "instructions", "ack", "thread_ack", "project_ack", "attachments", "auto_attach", "context_message_ids", "model", "effort", "connectors", "end_turn", "outcome_branch", "project_post_id", "purpose", "task_id", "task_description"], v7i = ["project_id", "project_ids", "claude_project_id", "project_slug", "channel_id"];
function o(e, s = d) {
  let [, t] = Jke([e], s);
  return _(t ?? e);
}
var IVn = _("reply"), MVn = o("reply", Nhn), S = o("set_thread_label", Nhn), O = o("start_thread_session", p), g = _("fetch_messages"), R = _("fetch_thread"), A = _("fetch_project_timeline"), qct = new Set(Jke(["fetch_messages", "fetch_thread", "fetch_project_timeline"]).map(_));
function l8(e, s) {
  return e.some((t) => s.some((r) => t.name === r || t.aliases?.includes(r)));
}
var T7i = Jke(["reply", "no_reply_needed", "post_message", "react", "update_message", "post_widget"]).map(_), c = _("update_status"), HVn = [c, o("update_status")], DVn = [...T7i, ...HVn], LVn = [_("start_thread_session"), O], h = [...LVn, _("start_folder_thread")], sIo = { reply: IVn, postIsAnswer: false, status: c, reads: { messages: g, thread: R, timeline: A } };
function LPe(e) {
  let s = sIo, t = (i) => {
    let E = o(i.slice(_("").length));
    return l8(e, [E]) && !l8(e, [i]) ? E : i;
  }, r = l8(e, [MVn]) && !l8(e, [IVn, c, ...h]), { messages: n, thread: a, timeline: T } = s.reads;
  return { reply: r ? MVn : s.reply, postIsAnswer: r, status: t(s.status), reads: { messages: t(n), thread: t(a), timeline: t(T) } };
}
var C7i = /^[A-Za-z0-9_-]{1,160}$/;
function A7i(e) {
  return `/v2/ccr-sessions/${e}/hearthbot/mcp`;
}
function zLl(e, s) {
  return { type: "http", url: e, headers: { "X-Session-UUID": s, "anthropic-version": "2023-06-01" }, alwaysLoad: true };
}
var VLl = /* @__PURE__ */ new Set([...Object.keys(Nhn), ...Jke(["reply", "update_status", "no_reply_needed", "switch_model", "fetch_thread", "fetch_project_timeline", "fetch_messages", "search_channels", "set_thread_label", "set_thread_reminder", "set_thread_resolved", "list_thread_sessions", "list_project_members", "list_project_artifacts", "list_project_prs", "list_project_files", "read_project_file", "react", "unreact", "update_message", "get_channel_session_id", "get_project_session_id", "suggest_connectors", "post_widget"])]), KLl = new Set(Jke(["update_memory", "update_message", "set_thread_reminder", "set_thread_resolved", "switch_model", "pin_artifact", "unpin_artifact", "report_issue", "set_time_zone", "cookie_sign_in_request", "post_widget", "suggest_connectors"]));
