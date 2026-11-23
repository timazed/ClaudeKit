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
var chunk_tjja7dsj_exports = {};
__export(chunk_tjja7dsj_exports, {
  GVs: () => GVs,
  MGr: () => MGr,
  R8t: () => R8t,
  YEa: () => YEa,
  kEn: () => kEn,
  wEn: () => wEn,
  wJn: () => wJn
});
module.exports = __toCommonJS(chunk_tjja7dsj_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class x {
  #e = false;
  #o = false;
  get autoModeCheckRan() {
    return this.#e;
  }
  get isLaunchRun() {
    return !this.#o;
  }
  claimAutoModeCheck() {
    if (this.#e) return false;
    return this.#e = true, true;
  }
  rearmAutoModeCheck() {
    this.#e = false, this.#o = true;
  }
  reset() {
    this.#e = false, this.#o = false;
  }
}
var C = new import_chunk_2904xtvq.j(() => new x());
function wEn(e) {
  return { key: "auto-mode-gate-notification", kind: "warning", text: e, color: "warning", priority: "high" };
}
async function kEn(e, n, t, s, a) {
  let d = C.of(e);
  if (!d.claimAutoModeCheck()) return;
  let { updateContext: l, notification: r } = await (0, import_chunk_awvk50qj.wgt)(n, s, d.isLaunchRun);
  if (t((u) => {
    let f = l(u.toolPermissionContext), o = f === u.toolPermissionContext ? u : { ...u, toolPermissionContext: f };
    if (!r || a) return o;
    return { ...o, notifications: { ...o.notifications, queue: [...o.notifications.queue, wEn(r)] } };
  }), r && a) a(wEn(r));
}
function MGr(e) {
  C.of(e).rearmAutoModeCheck();
}
function wJn(e, n) {
  return (e.isAutoModeAvailable === false || Boolean(n) || (0, import_chunk_865at33z.tpn)((0, import_chunk_865at33z.dt)())) && (0, import_chunk_bzyb60p0.JS)();
}
function GVs(e, n, t, s) {
  return M(e, n, t, s, false);
}
function R8t(e, n, t, s) {
  return M(e, n, t, s, true);
}
async function YEa(e, n, t, s) {
  switch (await GVs(e, n, t, s)) {
    case "not-due":
    case "allowed":
      return;
    case "refused":
      return (0, import_chunk_awvk50qj.m3o)((0, import_chunk_bzyb60p0.gH)());
    case "unanswered":
      return { ok: false, error: "Cannot set permission mode to auto: auto mode availability is not known yet \xB7 ask again", code: "auto_mode_unavailable" };
  }
}
async function M(e, n, t, s, a) {
  if (!wJn(e, t) || a && (0, import_chunk_awvk50qj.Hqe)(e)) return "not-due";
  let d = (0, import_chunk_awvk50qj.wgt)(e, t).then(({ updateContext: l, canEnterAuto: r, refusedForSettingsAlone: u }) => {
    let f = false;
    if (!u) n((o) => {
      let c = o.toolPermissionContext;
      if (!r) {
        if (a && (0, import_chunk_awvk50qj.Hqe)(c)) return o;
        let m = l(c);
        return m === c ? o : { ...o, toolPermissionContext: m };
      }
      if (f = Boolean(o.fastMode) && !t, c.isAutoModeAvailable !== false || !(0, import_chunk_bzyb60p0.JS)() || Boolean(o.fastMode) !== Boolean(t)) return o;
      return { ...o, toolPermissionContext: { ...c, isAutoModeAvailable: r, canAutoClassifierRun: r } };
    });
    if (!r) return "refused";
    return f ? "unanswered" : "allowed";
  }).catch((l) => ((0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(l)), "unanswered"));
  return await (s === void 0 ? d : (0, import_chunk_5appeerh.me)(d, s)) ?? "unanswered";
}
