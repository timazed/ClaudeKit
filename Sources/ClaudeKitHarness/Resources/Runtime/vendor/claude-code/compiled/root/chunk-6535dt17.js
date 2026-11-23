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
var chunk_6535dt17_exports = {};
__export(chunk_6535dt17_exports, {
  rTa: () => rTa
});
module.exports = __toCommonJS(chunk_6535dt17_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
function rTa() {
  let e = (0, import_chunk_r60bafc1._1i)();
  if (e !== "auto") {
    (0, import_chunk_w578pjby.t)(`[code-session] move-to-cloud names no permission mode: ${e === void 0 ? "the terminal has reported no mode yet" : `the terminal's last reported mode is ${e}`}`);
    return;
  }
  let o = d();
  if (o?.kill_switch) {
    (0, import_chunk_w578pjby.t)("[code-session] move-to-cloud names no permission mode: the kill switch tengu_happy_ocean is served on"), n(o);
    return;
  }
  if (o !== void 0) {
    let i = [o.auto_mode_off && "auto_mode_off", o.settings_unreadable && "settings_unreadable"].filter(Boolean);
    (0, import_chunk_w578pjby.t)(`[code-session] move-to-cloud names no permission mode: withheld for ${i.join("; ")}`), n(o);
    return;
  }
  return (0, import_chunk_w578pjby.t)("[code-session] move-to-cloud names auto mode"), n(), "auto";
}
function d() {
  if ((0, import_chunk_865at33z.b)("tengu_happy_ocean", false)) return { kill_switch: true };
  let e = !(0, import_chunk_k67pwqya.BBn)((0, import_chunk_2yx6c1y2.vt)()) || (0, import_chunk_r6r2wdsw.Np)(), o = (0, import_chunk_k67pwqya.YBi)();
  return e || o ? { kill_switch: false, auto_mode_off: e, settings_unreadable: o } : void 0;
}
function n(e) {
  try {
    (0, import_chunk_y53wbr8a.a)("tengu_teleport_to_cloud", e === void 0 ? { action: (0, import_chunk_78g0060s.S)("auto_mode_asked") } : { action: (0, import_chunk_78g0060s.S)("auto_mode_not_asked"), ...e });
  } catch {
  }
}
