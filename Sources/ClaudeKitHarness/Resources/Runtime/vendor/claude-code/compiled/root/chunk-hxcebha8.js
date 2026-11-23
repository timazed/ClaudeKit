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
var chunk_hxcebha8_exports = {};
__export(chunk_hxcebha8_exports, {
  bjs: () => bjs,
  j3: () => j3
});
module.exports = __toCommonJS(chunk_hxcebha8_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_8j4mv1cb = require("/$bunfs/root/chunk-8j4mv1cb.js");
var import_chunk_hq807efw = require("/$bunfs/root/chunk-hq807efw.js");
async function j3(e, i, o = {}) {
  await bjs(e, i, o);
}
async function bjs(e, i, { storageV5: o, credentials: r, hookOrigin: n } = {}) {
  let l = (0, import_chunk_8m5q5cts.ll)("preferredNotifChannel", "auto").value;
  await (0, import_chunk_bzyb60p0.oae)((0, import_chunk_bzyb60p0.GMe)(), e, { storageV5: o, credentials: r, hookOrigin: n });
  let c = await y(l, e, i);
  if (c === "error") (0, import_chunk_cqa9hrgx.m)("notification_show", "send_failed");
  else (0, import_chunk_cqa9hrgx.u)("notification_show");
  return (0, import_chunk_y53wbr8a.a)("tengu_notification_method_used", { configured_channel: (0, import_chunk_78g0060s.f)(import_chunk_h4xqg980.EEe.includes(l) ? l : "invalid"), notification_type: (0, import_chunk_78g0060s.f)(e.notificationType), method_used: (0, import_chunk_78g0060s.f)(c), term: (0, import_chunk_8bkqeb5d.pkn)(import_chunk_c203g5kd.s.terminal), attacher_term: (0, import_chunk_8bkqeb5d.pkn)((0, import_chunk_f9x2f6cx.pf)()?.terminal) }), c;
}
var d = "Claude Code";
async function y(e, i, o) {
  if (e === "auto") {
    let n = await h();
    return p(n, i, o), n;
  }
  let r;
  switch (e) {
    case "iterm2":
    case "iterm2_with_bell":
    case "kitty":
    case "ghostty":
    case "terminal_bell":
      r = e;
      break;
    case "notifications_disabled":
      r = "disabled";
      break;
    default:
      r = "none";
  }
  try {
    return p(r, i, o), r;
  } catch {
    return "error";
  }
}
async function h() {
  if ((0, import_chunk_3t7ve0wy.GM)() !== null) return "terminal_bell";
  switch ((0, import_chunk_f9x2f6cx.pf)()?.terminal ?? import_chunk_c203g5kd.s.terminal) {
    case "Apple_Terminal":
      return await T() ? "terminal_bell" : "no_method_available";
    case "iTerm.app":
      return "iterm2";
    case "kitty":
      return "kitty";
    case "ghostty":
      return "ghostty";
    default:
      return g() ?? "no_method_available";
  }
}
function g() {
  if ((0, import_chunk_865at33z.Qt)() && !(0, import_chunk_f9x2f6cx.pf)()) return;
  if ((0, import_chunk_ky5sghtd.yc)().tmuxPane?.passthrough === "off") return;
  if ((0, import_chunk_hq807efw.lXt)()) return "ghostty";
  let e = (0, import_chunk_hq807efw.bDt)()?.toLowerCase();
  if (e?.startsWith("iterm2")) return "iterm2";
  return e?.startsWith("kitty") ? "kitty" : void 0;
}
function p(e, i, o) {
  switch (e) {
    case "iterm2":
      o.notifyITerm2(i);
      return;
    case "iterm2_with_bell":
      o.notifyITerm2(i), o.notifyBell();
      return;
    case "kitty":
      o.notifyKitty({ ...i, title: i.title || d, id: N() });
      return;
    case "ghostty":
      o.notifyGhostty({ ...i, title: i.title || d });
      return;
    case "terminal_bell":
      o.notifyBell();
      return;
    case "disabled":
    case "none":
    case "no_method_available":
      return;
  }
}
function N() {
  return Math.floor(Math.random() * 1e4);
}
async function T() {
  try {
    let i = (await (0, import_chunk_7fsmgfxx.kt)("osascript", ["-e", 'tell application "Terminal" to name of current settings of front window'])).stdout.trim();
    if (!i) return false;
    let o = await (0, import_chunk_7fsmgfxx.kt)("defaults", ["export", "com.apple.Terminal", "-"]);
    if (o.code !== 0) return false;
    let r = (0, import_chunk_8j4mv1cb.p2r)(o.stdout);
    if (!(0, import_chunk_8j4mv1cb.jkn)(r)) return (0, import_chunk_w578pjby.t)("Failed to read Apple Terminal bell setting: defaults export is not a plist dict"), false;
    let n = r["Window Settings"], l = (0, import_chunk_8j4mv1cb.jkn)(n) ? n[i] : void 0;
    if (!(0, import_chunk_8j4mv1cb.jkn)(l)) return (0, import_chunk_w578pjby.t)("Failed to read Apple Terminal bell setting: no settings dict for the current profile"), false;
    return l.Bell === false;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Failed to read Apple Terminal bell setting: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), false;
  }
}
