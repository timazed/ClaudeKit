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
var chunk_tna0a1ft_exports = {};
__export(chunk_tna0a1ft_exports, {
  A6s: () => A6s,
  C6s: () => C6s,
  Ewa: () => Ewa,
  T6s: () => T6s,
  Xkn: () => Xkn,
  rMt: () => rMt,
  v6s: () => v6s
});
module.exports = __toCommonJS(chunk_tna0a1ft_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_brncaawc = require("/$bunfs/root/chunk-brncaawc.js");
var import_chunk_zh47ka3v = require("/$bunfs/root/chunk-zh47ka3v.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var _ = "tengu_reflective_bee", h = ["off", "survey"], g = 3, P = 864e5, i = "tengu_web_setup_push_offer", v6s = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?", T6s = 1e3, Xkn = new import_chunk_2904xtvq.j(() => (0, import_chunk_se72nykz.ps)({ status: "none" }));
function Ewa({ trigger: t, host: o, storageV5: s }) {
  let r = Xkn.of(o);
  if (r.getState().status !== "none") return;
  if ((0, import_chunk_865at33z.Na)()) return;
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || !(0, import_chunk_865at33z.Rt)() || !(0, import_chunk_zh47ka3v.ost)()) return;
  if ((0, import_chunk_t7fzcstv.bt)()) return;
  if (p()) return;
  if (import_chunk_brncaawc.V_e.of(o).peek(void 0, s) !== "not_connected") return;
  (0, import_chunk_y53wbr8a.a)(i, { event: (0, import_chunk_78g0060s.S)("eligible"), trigger: (0, import_chunk_78g0060s.f)(t) });
  let n = (0, import_chunk_865at33z.b)(_, "off"), e = h.find((d) => d === n);
  r.setState(() => e === void 0 || e === "off" ? { status: "resolved" } : { status: "pending", variant: e, trigger: t });
}
function p() {
  let t = (0, import_chunk_865at33z.ge)().webSetupPushOffer;
  if (t?.dismissedForever) return true;
  if ((0, import_chunk_865at33z.Cc)().webSetupPushOfferShown) return true;
  if (t?.lastShownAt !== void 0 && Date.now() - t.lastShownAt < P) return true;
  return (t?.shownCount ?? 0) >= g;
}
function C6s(t, o) {
  let s = Xkn.of(t);
  if (s.getState().status !== "pending") return false;
  if (!p() && import_chunk_brncaawc.V_e.of(t).peek(void 0, o) === "not_connected") return false;
  return s.setState(() => ({ status: "resolved" })), true;
}
function A6s(t, o) {
  let s = Xkn.of(t), r = s.getState();
  if (r.status !== "pending") return;
  s.setState(() => ({ ...r, status: "shown" })), (0, import_chunk_y53wbr8a.a)(i, { event: (0, import_chunk_78g0060s.S)("shown"), variant: (0, import_chunk_78g0060s.f)(r.variant), trigger: (0, import_chunk_78g0060s.f)(r.trigger) }), (0, import_chunk_cqa9hrgx.u)("remote_setup_push_offer");
  let n = Date.now();
  (0, import_chunk_865at33z.Ke)((e) => e.webSetupPushOffer?.lastShownAt === n ? e : { ...e, webSetupPushOffer: { ...e.webSetupPushOffer, lastShownAt: n, shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1 } }, o), (0, import_chunk_865at33z.kw)((e) => e.webSetupPushOfferShown ? e : { ...e, webSetupPushOfferShown: true }, o);
}
function rMt(t, o, s) {
  let r = Xkn.of(t), n = r.getState();
  if (n.status !== "shown") return;
  if (r.setState(() => ({ status: "resolved" })), (0, import_chunk_y53wbr8a.a)(i, { event: (0, import_chunk_78g0060s.f)(o), variant: (0, import_chunk_78g0060s.f)(n.variant), trigger: (0, import_chunk_78g0060s.f)(n.trigger) }), o === "dont_ask_again") (0, import_chunk_865at33z.Ke)((e) => e.webSetupPushOffer?.dismissedForever ? e : { ...e, webSetupPushOffer: { ...e.webSetupPushOffer, dismissedForever: true } }, s);
}
