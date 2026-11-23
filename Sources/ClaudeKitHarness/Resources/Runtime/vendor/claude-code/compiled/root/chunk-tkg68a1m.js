const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_tkg68a1m_exports = {};
__export(chunk_tkg68a1m_exports, {
  Bw: () => Bw,
  Bxa: () => Bxa,
  G5s: () => G5s,
  K5s: () => K5s,
  Uxa: () => Uxa,
  V5s: () => V5s,
  Wxa: () => Wxa,
  c6o: () => c6o,
  cZn: () => cZn,
  dZn: () => dZn,
  f6o: () => f6o,
  jve: () => jve,
  jxa: () => jxa,
  u6o: () => u6o,
  z5s: () => z5s
});
module.exports = __toCommonJS(chunk_tkg68a1m_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_0c92mmpr = require("/$bunfs/root/chunk-0c92mmpr.js");
var import_chunk_d4d5q2mn = require("/$bunfs/root/chunk-d4d5q2mn.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var se = (e, t) => ({ kind: e, details: t });
var Bw = (e, t = []) => ({ kind: "refused", refusal: se(e, t) });
var ne = "Publishing from a cloud session isn't offered yet, and the plugin's files are in this cloud session, where the Claude app or a terminal on your computer can't reach them. Nothing was sent.";
var re = () => !(0, import_chunk_f9x2f6cx.Se)() && !import_chunk_c203g5kd.s.DISABLE_LOGIN_COMMAND;
var ae = () => {
  let e = (0, import_chunk_2nv4wrez.ba)(import_chunk_d4d5q2mn.eTn);
  return (e === "cache_miss" || e === "route_missing") && !(0, import_chunk_2nv4wrez.flt)(import_chunk_d4d5q2mn.eTn) && (0, import_chunk_2nv4wrez.cGt)({ restrictions: {}, compliance_taints: [] }, import_chunk_d4d5q2mn.eTn, (0, import_chunk_2zeyvjwb.eL)());
};
var le = "Claude Code couldn't load your organization's policy, so publishing from here is off for now: try again in a moment, or publish this plugin from claude.ai. Nothing was sent.";
var c6o = 52428800;
var G5s = 1e4;
var ue = Object.freeze({ "flag-off": "Publishing plugins isn't available in this session. Nothing was sent.", "third-party": "Publishing goes through claude.ai, and this session uses another provider. Nothing was sent.", bare: "Publishing is off under --bare. Nothing was sent.", "traffic-off": "Publishing is off while nonessential traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC). Nothing was sent.", policy: "Your organization's policy doesn't allow publishing from Claude Code: publish this plugin from claude.ai. Nothing was sent.", "cloud-session": "Publishing from a cloud session isn't offered yet. Publish from the Claude app or from a terminal on your own computer. Nothing was sent.", "signed-out": "Publishing needs a claude.ai sign-in. Sign in with /login, then publish again.", "no-organization": "This session is signed in by the app that started it, which didn't say which organization that is. Publish this plugin from claude.ai, or ask Claude in a terminal session signed in to claude.ai. Nothing was sent.", "nobody-to-ask": "Publishing waits for your answer, and this session has nobody to ask. Ask Claude to publish it in a session of your own. Nothing was sent.", "other-question": "The answer that came back was to another question than the one this session asked, so nothing was sent. Ask Claude to publish again.", "network-path": "That path names a place on the network, which publishing does not open. Nothing was read or sent.", "read-denied": "This session's permissions don't allow reading that folder, or a file in it that would be sent. Nothing was sent.", "write-denied": "This session's permissions don't allow writing the manifest this publish would add to the folder. Nothing was written or sent.", "no-folder": "No folder at that path. Nothing was sent.", "not-a-plugin": "That folder holds no plugin: no manifest, commands, skills, agents or hooks. Nothing was sent.", findings: "The plugin didn't pass validation. Fix these, then publish again. Nothing was sent.", "too-many-files": `The plugin has more than ${G5s} files to send. Name what isn't part of it in .gitignore. Nothing was sent.`, "too-large": `The plugin is larger than ${(0, import_chunk_7e12xj51.dn)(c6o)}, the most publishing sends. Nothing was published.`, unreadable: "Part of the folder couldn't be read, so nothing was sent.", changed: "The folder changed while it was being published, so nothing was sent. Publish again.", unwritten: "The manifest couldn't be written to .claude-plugin/plugin.json, so nothing was sent.", stopped: "Publishing was stopped.", failed: "Publishing ran into an error and stopped.", "not-served": "claude.ai doesn't offer publishing from Claude Code for your organization yet. Nothing was sent.", "sign-in-scope": "This session's sign-in doesn't allow publishing plugins. If the Claude app asks you to sign in again, do that, then publish again. Otherwise publish this plugin from claude.ai, or ask Claude in a terminal session signed in to claude.ai. Nothing was published.", "needs-browser": "For your security, claude.ai needs to confirm it's you in a web browser, which it can't do through this session. So this plugin can only be published from claude.ai. Nothing was published.", "publishing-off": "Your organization doesn't accept member submissions. The upload is on your own shelf on claude.ai (My Uploads), where only you see it and where you can remove it. An administrator chooses a publishing policy in the organization settings.", "creation-off": "Your organization has plugin creation turned off. An administrator turns it on in the organization settings on claude.ai.", exists: "A plugin of this name is already in your uploads on claude.ai, and it was not replaced.", invalid: "claude.ai didn't take the plugin: it failed validation.", "shelf-full": "Your uploads on claude.ai are full. Remove one there, then publish again.", scan: "The plugin didn't pass the security scan on claude.ai, so it wasn't submitted. It is on your own shelf, where only you see it.", "scan-pending": "The security scan of the plugin is still running. Publish again in a few minutes.", "not-current": "The new version is saved to your uploads on claude.ai, but it isn't the plugin's current version there, so nothing was sent to your organization. Open the plugin on claude.ai, make the new version current, and publish it from there.", "already-pending": "Your earlier submission of this plugin is still waiting for review. To send this version instead, withdraw that submission from the plugin's page on claude.ai, then publish again.", "installs-for-members": "A plugin published under this name may be installed automatically for some or all of your organization's members, so it can only be published from claude.ai. Nothing was sent to your organization. Publish it from your uploads on claude.ai.", "nothing-new": "This version is already in your organization's library.", "in-progress": "An earlier submission of this plugin is being published. Publish again once it is in the library.", "needs-admin": "This update needs an administrator: ask one to publish it from claude.ai.", "needs-org-settings": "This update needs a change to the organization's settings on claude.ai first. Ask an administrator.", "name-conflict": "An item with this name is already in your organization's library. Rename yours and publish again.", "library-full": "Your organization's library is full. An administrator makes room on claude.ai.", legal: "Your organization requires an attestation with each submission. Publish this plugin from claude.ai.", busy: "claude.ai was busy with this plugin or did not answer. Publish again in a moment.", other: "claude.ai didn't take the plugin." });
var pe = "Publishing needs a claude.ai sign-in, and this session has none it can publish on. Publish this plugin from claude.ai, or ask Claude to publish it from a session signed in to claude.ai.";
function de(e) {
  if (e === "signed-out" && !re()) return pe;
  if (e === "policy" && ae()) return le;
  if (e === "cloud-session" && (0, import_chunk_3t7ve0wy.Gm)()) return ne;
  return ue[e];
}
function fe(e) {
  return e.kind === "published" ? ["Send colleagues this link to add it: " + (0, import_chunk_tp3c5q2s.Ft)(e.link), "In Claude Code, they can also add the organization library under /plugin \u2192 Marketplaces, then run /plugin install " + (0, import_chunk_tp3c5q2s.Ft)(e.install)] : [];
}
var z5s = (e) => `${(0, import_chunk_ephf358x.cn)().CLAUDE_AI_ORIGIN}/customize/plugins/` + encodeURIComponent(e);
var me = Object.freeze({ published: "published to your organization's library.", "in-review": "uploaded to your shelf and sent to your organization for an administrator's review. It reaches the library once approved.", publishing: "uploaded to your shelf and approved. It is on its way into your organization's library.", "on-shelf": "uploaded to your own shelf on claude.ai, and not submitted yet: its scan was still running when the wait for it ended. Submit it from claude.ai once the scan has passed." });
var he = 40;
var jxa = (e) => [e.verdict ?? ""].filter(Boolean).map((t) => "Security scan on claude.ai: " + (0, import_chunk_tp3c5q2s.Ft)(t, he));
var ce = (e) => [me[e.kind], ...[e].flatMap((t) => "verdict" in t ? [t] : []).flatMap(jxa), ...[e].filter((t) => "isUnscanned" in t && t.isUnscanned).map(() => "claude.ai didn't run a security scan on this plugin."), ...fe(e), ...[e].flatMap((t) => "id" in t ? [t.id] : []).map((t) => `Follow it on claude.ai: ${z5s(t)}`)];
var u6o = (e) => (0, import_chunk_tp3c5q2s.Ft)([e.name, e.version].filter(Boolean).join(" "));
var ge = " (the plugin's own version; the library numbers its copies itself)";
var be = (e) => u6o(e) + (e.version ? ge : "");
function V5s(e) {
  return e.kind === "refused" ? [de(e.refusal.kind), ...e.refusal.details.map((o) => (0, import_chunk_tp3c5q2s.Ft)(o))] : ce(e).map((o, i) => (i === 0 ? `${be(e.manifest)}: ` : "") + o);
}
var ye = (e) => ({ type: "other", reason: e });
var xe = (e) => ({ behavior: "deny", message: e, decisionReason: ye(e) });
var K5s = (e, t = []) => xe(V5s(Bw(e, t)).join(`
`));
(0, import_chunk_adx6804h.B)();
var Uxa = 300;
(0, import_chunk_adx6804h.B)();
var we = 4e3;
var _e = 128;
var dZn = 4096;
var jve = 2 * dZn + _e;
var cZn = 500;
var Bxa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ digest: (0, import_chunk_adx6804h.n)().regex(import_chunk_ccm69jjy.fm).describe("What a yes binds to: the publish is of this, or refused."), title: (0, import_chunk_adx6804h.n)().max(jve), organization: (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().max(jve), name: (0, import_chunk_adx6804h.n)().max(jve).optional() }), plugin: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().max(jve), version: (0, import_chunk_adx6804h.n)().max(jve).optional() }), folder: (0, import_chunk_adx6804h.n)().max(jve), mode: (0, import_chunk_adx6804h.F)(["new", "replace"]).describe("Whether a plugin of this name on the shelf is replaced."), steps: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(jve)).max(cZn).describe("What a yes sets off, a sentence each, in order."), warnings: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(jve)).max(cZn).describe("What the person is warned of, a sentence each: a file sent although its name is one a secret hides under, and that other entries stay behind unnamed."), writes: (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)().max(jve), text: (0, import_chunk_adx6804h.n)().max(we) }).optional().describe("The manifest a yes writes into the folder first, if any."), sends: (0, import_chunk_adx6804h.c)({ files: (0, import_chunk_adx6804h.E)(), bytes: (0, import_chunk_adx6804h.E)() }).describe("The whole count and size of what is sent."), files: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)().max(jve), bytes: (0, import_chunk_adx6804h.E)(), sha256: (0, import_chunk_adx6804h.n)().regex(import_chunk_ccm69jjy.fm), runs: (0, import_chunk_adx6804h.P)().describe("Whether it is sent as runnable.") })).max(cZn).describe("The files sent, in the order of their paths."), staying: (0, import_chunk_adx6804h.E)().describe("How many entries stay on the machine and are counted here."), stays: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)().max(jve), why: (0, import_chunk_adx6804h.F)(["link", "hard-link", "ignored", "secret", "never", "generated", "special", "backslash"]), words: (0, import_chunk_adx6804h.n)().max(jve) })).max(cZn).describe("The entries that stay and are named, each with why."), list: (0, import_chunk_adx6804h.c)({ sha256: (0, import_chunk_adx6804h.n)().regex(import_chunk_ccm69jjy.fm), path: (0, import_chunk_adx6804h.n)().max(jve).optional() }).describe("The list, a line each, of every file sent and every entry that stays and is named, and a last line saying so where entries stay unnamed: its sha256, and the file that holds it."), unnamed: (0, import_chunk_adx6804h.c)({ files: (0, import_chunk_adx6804h.E)(), stays: (0, import_chunk_adx6804h.E)() }).optional().describe("Present only when the lists are over the bound: how many files and entries they do not name. The list file names them.") }));
var Re = 1024;
var Oe = jve;
var ze = 100;
var Ce = 2 * cZn + ze;
var Wxa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ path: (0, import_chunk_adx6804h.n)().min(1).max(Re).describe("The plugin's folder on this machine: the one that holds .claude-plugin/plugin.json, or a mod's hooks/ where there is no manifest yet."), destination: (0, import_chunk_adx6804h.v)("organization").optional().describe("Where to publish. The one destination is the library of the organization the session is signed in to."), description: (0, import_chunk_adx6804h.n)().max(Uxa).optional().describe("What the plugin does, in a sentence: used only for a manifest written for a folder that has none."), replace: (0, import_chunk_adx6804h.P)().optional().describe("True only when the person said to replace the plugin of the same name that is already in their uploads on claude.ai."), shown: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(Oe)).max(Ce).optional().describe("Leave out. The tool fills it for the question the person answers: the organization, the folder, the steps, and the files sent."), question: Bxa().optional().describe("Leave out. The tool fills it with the same question as data, for a surface that draws its own: what a yes binds to, every file sent, and the entries that stay and are named.") }));
var Ne = 4e3;
var Ie = (e) => ({ state: e.kind, refusal: e.kind === "refused" ? e.refusal.kind : void 0, lines: V5s(e) });
(0, import_chunk_adx6804h.B)();
var Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ state: (0, import_chunk_adx6804h.F)(["published", "in-review", "publishing", "on-shelf", "refused"]), refusal: (0, import_chunk_adx6804h.n)().optional(), lines: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) }));
function Ee(e) {
  let o = typeof e === "object" && e !== null && "path" in e ? e.path : void 0;
  return typeof o === "string" ? o : "";
}
var f6o = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "cc896784-8131-5c27-9e47-e8841d71b9b3", name: import_chunk_0c92mmpr.HSe, whenToUse: "When the user asks to share or publish a plugin or a mod with their team or organization, use it and not zipping, uploading or sending the files by other means; it asks the user before anything is sent.", searchHint: "publish or share a plugin or mod with the team or organization library", shouldDefer: true, backgrounding: "never", maxResultSizeChars: Ne, async description() {
  return import_chunk_0c92mmpr.unl;
}, async prompt() {
  return import_chunk_0c92mmpr.fnl;
}, get inputSchema() {
  return Wxa();
}, get outputSchema() {
  return Te();
}, userFacingName() {
  return "Publish plugin";
}, isEnabled() {
  return (0, import_chunk_d4d5q2mn.yKr)();
}, isConcurrencySafe() {
  return false;
}, isReadOnly() {
  return false;
}, requiresUserInteraction() {
  return true;
}, toAutoClassifierInput(e) {
  return (0, import_chunk_w578pjby._)(e);
}, getToolUseSummary() {
  return "Publish a plugin to your organization's library on claude.ai";
}, getPath(e) {
  return Ee(e);
}, renderToolUseMessage(e) {
  return e.path ?? "";
}, create(e) {
  let t = { ...e, tool: f6o };
  return { permissionCheckFailureDecision() {
    return K5s("failed");
  }, async checkPermissions(o, i) {
    let { default: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-zh890aah.js")));
    return r.check(o, i, t);
  }, async call(o, i) {
    let { default: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5s62jzfm.js")));
    return { data: Ie(await r.run(o, i, t)) };
  } };
}, mapToolResultToToolResultBlockParam(e, t) {
  return { type: "tool_result", tool_use_id: t, ...e.state === "refused" && { is_error: true }, content: (0, import_chunk_w578pjby._)(e) };
} });
