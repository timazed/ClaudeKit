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
var chunk_hj4mak61_exports = {};
__export(chunk_hj4mak61_exports, {
  Con: () => Con,
  UWe: () => UWe,
  fsl: () => fsl,
  gsl: () => gsl,
  hsl: () => hsl,
  luo: () => luo,
  msl: () => msl,
  ous: () => ous,
  psl: () => psl,
  qAi: () => qAi,
  sus: () => sus
});
module.exports = __toCommonJS(chunk_hj4mak61_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ denied: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), allowed: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }));
function g() {
  try {
    return (0, import_chunk_2zeyvjwb.rNl)();
  } catch {
    return;
  }
}
function UWe() {
  let e = (0, import_chunk_52ckkfmm.Fh)(), r = g();
  if (r === void 0) return { readable: false, denied: e.orgAppListsRead?.lists.denied ?? [], allowed: e.orgAppListsRead?.lists.allowed };
  let { served: o } = r;
  if (o === void 0) return e.orgAppListsRead = void 0, { readable: true, denied: [], allowed: void 0 };
  if (e.orgAppListsRead?.served === o) return e.orgAppListsRead.lists;
  let i = f().safeParse(o), u = i.success ? { readable: true, denied: i.data.denied, allowed: i.data.allowed } : { readable: false, denied: [], allowed: [] };
  return e.orgAppListsRead = { served: o, lists: u }, u;
}
var d = { enabled: false, pixelValidation: false, clipboardPasteMultiline: true, mouseAnimation: true, hideBeforeAction: true, autoTargetDisplay: true, clipboardGuard: true, maskFailClosed: true, adaptiveResolution: false, coordinateMode: "pixels", organizationDecides: false };
function a() {
  return { ...d, ...(0, import_chunk_865at33z.sD)("tengu_malort_pedway", d) };
}
var s = "allow_computer_use";
function _() {
  let e = (0, import_chunk_52ckkfmm.Fh)();
  try {
    e.holdsOrganizationNo = (0, import_chunk_2zeyvjwb.zR)(s) === "org_denied";
  } catch {
    (0, import_chunk_w578pjby.t)("Computer use: could not read whether the organization refused it, keeping the last answer");
  }
  return e.holdsOrganizationNo;
}
function l() {
  let e = (0, import_chunk_865at33z.or)();
  return e === "team" || e === "enterprise" || a().organizationDecides || _();
}
function E() {
  if (l()) return (0, import_chunk_2zeyvjwb.Oze)(s) === true && !(0, import_chunk_2zeyvjwb.pFe)() && UWe().readable;
  let e = (0, import_chunk_865at33z.or)();
  return e === "max" || e === "pro";
}
function luo() {
  if ((0, import_chunk_2zeyvjwb.uo)("hipaa")) return false;
  return E() && a().enabled;
}
function fsl() {
  if (!l()) return;
  let e = (0, import_chunk_2zeyvjwb.lIo)();
  if (e && (0, import_chunk_2zeyvjwb.Oze)(s) === true) {
    if (UWe().readable) return;
    throw (0, import_chunk_cqa9hrgx.m)("computeruse_org_app_lists", "list_unreadable"), new import_chunk_jv7av99m.A("Computer use is off because Claude Code couldn\u2019t read your organization\u2019s app list for computer use. Update Claude Code and restart it. If it keeps happening, ask your admin.", "Computer use call refused for the organization");
  }
  throw new import_chunk_jv7av99m.A(e ? (0, import_chunk_4jzbgp2v._ct)("Computer use", "is", (0, import_chunk_2zeyvjwb.d8)()) : (0, import_chunk_4jzbgp2v.LPo)("Computer use"), "Computer use call refused for the organization");
}
function psl() {
  return (0, import_chunk_xcgcdx61.Fut)() && !(0, import_chunk_snmsx2fv.ZH)() && !(0, import_chunk_2zeyvjwb.uo)("hipaa") && !((0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_w50zedgp.pV)()) && (0, import_chunk_865at33z.b)("tengu_dapper_acorn", false);
}
function msl() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_clever_yeti", { safe: true });
}
function hsl() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_foamy_whistle", { safe: true });
}
function ous() {
  try {
    let { value: e, source: r } = (0, import_chunk_865at33z.gn)("tengu_malort_pedway", null), o = { value: e?.menuBarNeedsFullTier !== false, source: r, defaultHost: !(0, import_chunk_865at33z.wf)() };
    return (0, import_chunk_8jsh3ct2.Y0r)(o, true);
  } catch {
    return true;
  }
}
function qAi() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_graceful_fiddle", { safe: true });
}
function gsl() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_keen_teacup", { safe: true });
}
function sus() {
  let { enabled: e, coordinateMode: r, organizationDecides: o, ...i } = a();
  return { ...i, menuBarNeedsFullTier: ous() };
}
function Con() {
  let e = (0, import_chunk_52ckkfmm.Fh)();
  return e.frozenCoordinateMode ??= a().coordinateMode, e.frozenCoordinateMode;
}
