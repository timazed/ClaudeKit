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
var chunk_f0r815zs_exports = {};
__export(chunk_f0r815zs_exports, {
  QJs: () => QJs,
  ZJs: () => ZJs
});
module.exports = __toCommonJS(chunk_f0r815zs_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_d0bewyh8 = require("/$bunfs/root/chunk-d0bewyh8.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_ptytnj5y = require("/$bunfs/root/chunk-ptytnj5y.js");
var l = "/plugin opens a panel in the terminal, so it can't run in the desktop app. Click + next to the prompt box, then Plugins: Add plugin installs from a marketplace you've added, and Manage plugins turns a plugin on or off or uninstalls it.", p = "For a marketplace you haven't added, Add marketplace in the app takes a GitHub owner/repo or a Git URL. Or, in a terminal with Claude Code installed on the machine this session runs on, run `claude plugin marketplace add <source>` and then `claude plugin install <plugin>@<marketplace>`, using the marketplace name the first command prints. Then send /reload-plugins here.", h = "Your organization limits which marketplaces can be added. For a plugin that isn't in Add plugin, contact your admin.";
function m(e) {
  if (e?.name !== "plugin" || !(0, import_chunk_ptytnj5y.F3r)() || !(0, import_chunk_wj4me9k5.C2t)()) return;
  try {
    let n = (0, import_chunk_wj4me9k5.E4)() === null;
    return `${l} ${n ? p : h}`;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Marketplace policy could not be read: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" }), l;
  }
}
function f() {
  return { teleport: ({ remoteSessionId: e }) => `/teleport pulls a cloud session into a terminal on your own machine, so it can't run from inside this session. To continue this session locally, run claude --teleport ${e} from a checkout of this repository. On claude.ai you can also choose Open in \u2192 Terminal from the session menu, which copies that command.`, session: ({ remoteSessionId: e }) => `This session is already running as a cloud session: ${u(e)}. To continue it in your terminal, run claude --teleport ${e} from a checkout of this repository.`, "remote-control": ({ remoteSessionId: e }) => `Remote Control connects a terminal session to claude.ai, and this session is already running as a cloud session: ${u(e)}.`, permissions: () => {
    if ((0, import_chunk_f9x2f6cx.st)() || !(0, import_chunk_6e68m1dj.hn)() || !(0, import_chunk_xzvhvaa2.rn)("projectSettings")) return;
    return (0, import_chunk_gbskgz33.fp)() ? "Your organization manages the permission rules for this session, so permission rules in your own settings files don't apply. To change a rule, contact your admin." : "This cloud session has no permissions panel. Its rules come from its settings files: in a session with one repository, ask Claude to edit .claude/settings.json, and commit it to the repository to keep it for later sessions. Auto mode rules can't be set that way: a cloud session doesn't read them from that file or from ~/.claude/settings.json on your machine. For what each session reads, see https://code.claude.com/docs/en/settings#settings-in-cloud-sessions";
  }, ...{}, ...{} };
}
var y = { usage: QJs, agents: () => "The /agents wizard has been removed. Where subagents are available, you can ask Claude to hand a task to one.", model: () => "Changing the model by command isn't available here. Use the model picker instead. Not every session shows one.", effort: () => "Changing the effort by command isn't available here. Use the Effort setting in or next to the model picker instead. Some models have no Effort setting.", mcp: ({ remoteSessionId: e }) => `Managing connectors (MCP servers) by command isn't available here. To manage them, open the Connectors page on claude.ai: ${(0, import_chunk_d0bewyh8.zQ)(e, import_chunk_c203g5kd.s.SESSION_INGRESS_URL)}/customize/connectors`, rename: () => "Renaming this conversation by command isn't available here. Use Rename in the menu at the top of the screen instead.", "reload-plugins": () => {
  let e = (0, import_chunk_3t7ve0wy.Dm)() ? "chat" : "session";
  return (0, import_chunk_3t7ve0wy.Lw)() ? `Reloading plugins by command isn't available here. This ${e} usually picks up plugin changes before your next message. If it doesn't, start a new ${e}.` : "Reloading plugins by command isn't available here. To use changed plugins, start a new session.";
} };
function QJs() {
  let e = c();
  return e ? `Plan usage isn't shown in this chat. To see it, open Settings \u2192 Usage on claude.ai: ${(0, import_chunk_d0bewyh8.zQ)(e, import_chunk_c203g5kd.s.SESSION_INGRESS_URL)}/settings/usage` : void 0;
}
function u(e) {
  return (0, import_chunk_d0bewyh8.Vu)(e, import_chunk_c203g5kd.s.SESSION_INGRESS_URL);
}
function c() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!e) return;
  try {
    return (0, import_chunk_t39bs2jr.mm)((0, import_chunk_t39bs2jr.Mw)(e, "CLAUDE_CODE_REMOTE_SESSION_ID"));
  } catch {
    return;
  }
}
function ZJs(e, o) {
  let n = (0, import_chunk_8704k7wd.zs)(e, o), i = c();
  if (!i) return m(n);
  if (!n) return;
  let a = f()[n.name];
  if (a !== void 0 && (0, import_chunk_3t7ve0wy.Dm)()) return "This command isn't available in a chat.";
  let r = a ?? ((0, import_chunk_f9x2f6cx.st)() ? y[n.name] : void 0);
  return r ? r({ remoteSessionId: i }) : void 0;
}
