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
var chunk_6k6fxncy_exports = {};
__export(chunk_6k6fxncy_exports, {
  $_a: () => $_a,
  AUo: () => AUo,
  B_a: () => B_a,
  C2l: () => C2l,
  PUo: () => PUo,
  RUo: () => RUo,
  U_a: () => U_a,
  WYn: () => WYn,
  W_a: () => W_a,
  Zjs: () => Zjs,
  e2s: () => e2s,
  o8l: () => o8l,
  sWr: () => sWr,
  xUo: () => xUo
});
module.exports = __toCommonJS(chunk_6k6fxncy_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_2atp9x7j = require("/$bunfs/root/chunk-2atp9x7j.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var d = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ deviceId: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)().default("Browser"), osPlatform: (0, import_chunk_adx6804h.n)().optional() })), AUo = "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.", C2l = "Chrome can't be reached right now. Make sure Chrome is open with the Claude extension and signed in to the same claude.ai account, then try again.", $_a = "That browser isn't connected right now. Make sure Chrome is open with the Claude extension on that computer, then try again.";
class RUo extends import_chunk_jv7av99m.A {
  listEmpty;
  namedABrowser;
  constructor(e, o) {
    if (o) super($_a, "claude-in-chrome browser not listed");
    else super($_a, "claude-in-chrome switch request named no browser");
    this.listEmpty = e, this.namedABrowser = o;
  }
}
class Zjs extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(e, "claude-in-chrome tool call failed");
  }
}
function U_a(e) {
  return e instanceof RUo;
}
function xUo(e) {
  if (WYn(e)) (0, import_chunk_cqa9hrgx.l)("chrome_browser_picker", "bridge_unreachable");
  else if (U_a(e) && e.namedABrowser) (0, import_chunk_cqa9hrgx.l)("chrome_browser_picker", "browser_not_listed", { list_empty: e.listEmpty });
  else if (U_a(e)) (0, import_chunk_cqa9hrgx.m)("chrome_browser_picker", "invalid_request");
  else (0, import_chunk_cqa9hrgx.m)("chrome_browser_picker", "select_failed");
}
class e2s extends import_chunk_jv7av99m.A {
  constructor() {
    super(C2l, "claude-in-chrome bridge not reachable");
  }
}
function WYn(e) {
  return e instanceof e2s;
}
function o8l(e) {
  if (WYn(e)) return [];
  throw e;
}
async function sWr(e) {
  let o = await W_a(e, "list_connected_browsers", {});
  if (!o) return [];
  let s = (0, import_chunk_adx6804h.C)(d()).safeParse((0, import_chunk_w578pjby.te)(o));
  if (!s.success) throw new B_a();
  return s.data;
}
class B_a extends import_chunk_jv7av99m.A {
  constructor() {
    super("Claude Code couldn't read the browser list it got back. This is a bug on our side, not a problem with your setup.", "claude-in-chrome browser list in an unknown shape");
  }
}
async function PUo(e, o, s = (r) => r) {
  if (typeof o !== "string" || o === "") throw new RUo(false, false);
  try {
    await s(W_a(e, "select_browser", { deviceId: o }));
  } catch (r) {
    if (!(r instanceof Zjs)) throw r;
    (0, import_chunk_w578pjby.t)(`claude-in-chrome select_browser refused: ${r.message}`);
    let a = await s(sWr(e));
    if (a.some((i) => i.deviceId === o)) throw r;
    throw new RUo(a.length === 0, true);
  }
}
async function W_a(e, o, s) {
  let r = (0, import_chunk_2atp9x7j.Goi)(), a = await (0, import_chunk_gvzh3pxp.Vq)(e, { name: o, arguments: s }, void 0, true), i = Array.isArray(a.content) ? a.content[0] : void 0, u = i && typeof i === "object" && "text" in i && typeof i.text === "string" ? i.text : void 0;
  if ((0, import_chunk_2atp9x7j.Goi)() !== r && u !== void 0 && (0, import_chunk_2atp9x7j.f7r)(u)) throw (0, import_chunk_w578pjby.t)(`claude-in-chrome bridge not reachable: ${u}`, { level: "error" }), new e2s();
  if (a.isError) throw new Zjs(u || `${o} failed`);
  return u;
}
