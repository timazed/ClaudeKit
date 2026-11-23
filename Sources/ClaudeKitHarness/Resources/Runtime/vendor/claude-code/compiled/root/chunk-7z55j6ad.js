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
var chunk_7z55j6ad_exports = {};
__export(chunk_7z55j6ad_exports, {
  $oi: () => $oi,
  Boi: () => Boi,
  UUa: () => UUa,
  Uoi: () => Uoi,
  i7r: () => i7r,
  s7r: () => s7r
});
module.exports = __toCommonJS(chunk_7z55j6ad_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_ddznn4yb = require("/$bunfs/root/chunk-ddznn4yb.js");
var import_chunk_ca9ws28w = require("/$bunfs/root/chunk-ca9ws28w.js");
var import_chunk_2atp9x7j = require("/$bunfs/root/chunk-2atp9x7j.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var g = "Browser extension is not connected. The user's app may now be showing a card that sets up a browser for Claude. In one or two short sentences, tell them that you need a browser for this, and that they can set up the Claude desktop app or Claude in Chrome in the card below. Give no links or other installation steps, and stop until they reply.", m = `Browser extension is not connected. Continue the task in the built-in browser now, with no Chrome setup steps, unless the user asked for Chrome in this conversation, by name or by description (a saved Preferred browser setting does not count), or the task needs something only their Chrome has, such as an open tab. In that case, tell them briefly that Chrome is not connected and that to connect it they open Chrome with the extension (${import_chunk_sjqze7qg.NW}) signed in to this Claude account, offer the built-in browser unless they refused it or it cannot help, and stop until they reply.`, f = `${import_chunk_w4dc83v7.uhr}chrome-no-browser`, h = /* @__PURE__ */ new Set(["no_extension_selected", "not_connected"]);
function C({ agentId: e, allowGivenBy: o, messages: n, toolUseId: t, options: { messageClientPlatform: r, refreshTools: d, tools: a } }) {
  if (e !== void 0 || !((0, import_chunk_6e68m1dj.hn)() || (0, import_chunk_3t7ve0wy.Lw)()) || !(0, import_chunk_3t7ve0wy.Dm)() || r !== "web_claude_ai" && r !== "desktop_app") return;
  let l = r === "desktop_app" && (0, import_chunk_865at33z.b)("tengu_cheerful_orbit", false), c = ((0, import_chunk_865at33z.vX)(n) || o?.toolUseId === t && o?.approver === "user") && (0, import_chunk_865at33z.b)("tengu_memoized_owl", false);
  if (!l && !c) return;
  let p = (d?.() ?? a).filter((i) => (0, import_chunk_ddznn4yb.MC)(i.name) && !i.name.startsWith(import_chunk_1w26p6p9.d0) || (0, import_chunk_px0hhsq7.Bu)(i, import_chunk_2mwshd9r.Cp));
  if (p.length === 0) return c ? g : void 0;
  return l && p.every((i) => (0, import_chunk_ddznn4yb.Kat)(i.name)) ? m : void 0;
}
function _(e) {
  return (0, import_chunk_cqa9hrgx.u)(e === m ? "chrome_built_in_browser_answer" : "chrome_setup_card_answer"), e;
}
async function $oi(e, o) {
  let [n, ...t] = e.content ?? [], r = n?.type === "text" && t.length === 0 && (0, import_chunk_2atp9x7j.f7r)(n.text) && !(0, import_chunk_929j4hj9.Fi)().bridgeBinding?.context.getPersistedDeviceId?.() ? C(o) : void 0;
  if (r === void 0 || !await (0, import_chunk_ca9ws28w.VUa)()) return e;
  return { content: [{ type: "text", text: _(r) }] };
}
function Uoi(e) {
  return e?.[f] === true || h.has(e?.toolCallFailureCause);
}
function Boi(e, o) {
  if (!Uoi(e)) return;
  let n = (0, import_chunk_2atp9x7j.u7r)();
  if (n !== void 0) return n;
  let t = e?.[f] === true && !(0, import_chunk_929j4hj9.Fi)().browserHints?.preferredDeviceId && !import_chunk_c203g5kd.s.CLAUDE_CHROME_PAIRED_DEVICE_ID ? C(o) : void 0;
  if (t === void 0) return;
  return _(t);
}
function UUa(e, o, n) {
  if ((0, import_chunk_3t7ve0wy.Lw)() && h.has(o?.toolCallFailureCause)) (0, import_chunk_ca9ws28w.l7r)(false);
  let t = Boi(o, n);
  return t === void 0 ? e : [{ type: "text", text: t }];
}
var w = "Claude in Chrome: the session already uses the picked browser";
async function s7r(e, o, n, { mode: t, modeBeforeRewrite: r, mcpAskForTools: d }, a) {
  return e === "select_browser" && typeof o.deviceId === "string" && Object.keys(o).length === 1 && n.toolUseId !== void 0 && n.permissionRound !== void 0 && (t === "default" || t === "acceptEdits") && r === void 0 && d?.[import_chunk_prn6030k.Xi]?.includes(e) !== true && (0, import_chunk_3t7ve0wy.Dm)() && await a() === o.deviceId ? { behavior: "allow", updatedInput: o, decisionReason: { type: "other", reason: w } } : void 0;
}
function i7r(e, o) {
  let n = e?.pipeline?.result;
  if (n?.behavior !== "allow" || n.decisionReason?.type !== "other" || n.decisionReason.reason !== w) return;
  return (0, import_chunk_cqa9hrgx.u)("chrome_unchanged_pick"), { data: `The browser with deviceId ${String(o.deviceId)} is already the one in use, so nothing changed. Call select_browser only to change to another browser.` };
}
