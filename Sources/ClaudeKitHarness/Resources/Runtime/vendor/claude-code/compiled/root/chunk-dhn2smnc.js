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
var chunk_dhn2smnc_exports = {};
__export(chunk_dhn2smnc_exports, {
  Bkn: () => Bkn,
  Wkn: () => Wkn,
  r6s: () => r6s
});
module.exports = __toCommonJS(chunk_dhn2smnc_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_ag2pf657 = require("/$bunfs/root/chunk-ag2pf657.js");
function Bkn() {
  return (0, import_chunk_awvk50qj.LCn)() || (0, import_chunk_sjqze7qg.lbt)("auto_mode_off") || (0, import_chunk_ag2pf657.OCn)() || (0, import_chunk_sjqze7qg.lbt)("unattended_serving_off");
}
function Wkn(n) {
  try {
    if ((0, import_chunk_awvk50qj.LCn)()) return (0, import_chunk_bzyb60p0.gH)() === "settings" ? "settings" : "breaker";
    if ((0, import_chunk_sjqze7qg.lbt)("auto_mode_off")) return "settings";
    let e = (0, import_chunk_sjqze7qg.lbt)("unattended_serving_off");
    if (!(0, import_chunk_ag2pf657.OCn)(n) && !e) return "none";
    if ((0, import_chunk_ag2pf657.fie)() || e) return "consent_forced_off";
    let t = (0, import_chunk_ag2pf657.K_e)();
    if (t === "declined") return "consent_declined";
    if (t === "accepted" || (0, import_chunk_ag2pf657.iZs)()) return "consent_unknown";
    return (0, import_chunk_ag2pf657.aZs)() ? "sandbox_off" : "consent_unset";
  } catch {
    return "consent_unknown";
  }
}
function r6s(n) {
  let e = Wkn();
  if (e === "none") return;
  return { key: `served-auto-off-${e === "consent_unset" || e === "consent_declined" ? "consent" : e}`, text: import_chunk_r9ecxfn9._l.auto_off_notice(n, import_chunk_r9ecxfn9._l[`auto_off.reason.${e}`]) };
}
