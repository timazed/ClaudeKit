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
var chunk_zwfq7wpn_exports = {};
__export(chunk_zwfq7wpn_exports, {
  AFt: () => AFt,
  FHn: () => FHn,
  JSt: () => JSt,
  Jss: () => Jss,
  Mk: () => Mk,
  NHn: () => NHn,
  QBe: () => QBe,
  QSt: () => QSt,
  Qss: () => Qss,
  RFt: () => RFt,
  Ufr: () => Ufr,
  _R: () => _R,
  bso: () => bso,
  gSi: () => gSi,
  hSi: () => hSi,
  mSe: () => mSe,
  mSi: () => mSi,
  pSi: () => pSi,
  tnn: () => tnn
});
module.exports = __toCommonJS(chunk_zwfq7wpn_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
function NHn() {
  return r() !== null;
}
function r() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if ((0, import_chunk_r3mm3x33.vB)()?.settings.disableAgentView === true) return "is disabled by the 'disableAgentView' setting";
  return null;
}
function _R() {
  return !NHn();
}
var i = "tengu_fleetview_simple";
function pSi() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_FLEETVIEW_SIMPLE || (0, import_chunk_865at33z.b)(i, false);
}
async function FHn(e = {}) {
  if ((0, import_chunk_r3mm3x33.vB)() === null) {
    let { getSettingsWithErrors: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mr049m72.js")));
    t();
  }
  if (e.kickGrowthBook !== false) (0, import_chunk_865at33z.ci)().catch(() => {
  });
}
function AFt() {
  return import_chunk_c203g5kd.So.CLAUDE_CODE_FLEET_PAST_SESSIONS === true || (0, import_chunk_865at33z.b)("tengu_fleet_past_sessions", false);
}
function JSt() {
  return _R();
}
function mSe() {
  return false;
}
function QSt() {
  return (0, import_chunk_865at33z.b)("tengu_amber_anchor", false);
}
function mSi() {
  return (0, import_chunk_865at33z.b)("tengu_copper_lantern", false);
}
function Jss() {
  let e = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (e === "transient" || e === "ask") return e;
  let t = (0, import_chunk_r3mm3x33.vB)()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return "transient";
}
function Mk() {
  return QSt() ? "daemon" : "background service";
}
function QBe() {
  return (0, import_chunk_7cfjrnwy.wi)(Mk());
}
function tnn(e) {
  return JSt() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function Ufr() {
  let e = `${Mk()} did not respond \u2014 it may be stalled`;
  if (!JSt()) return e;
  return QSt() ? `${e}${tnn("restart")}` : `${e}${tnn("stop --any")} (ends background sessions)`;
}
function RFt(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.
`), process.exit(1);
}
var bso = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function Qss() {
  return false;
}
function hSi() {
  return !!import_chunk_c203g5kd.s.CLAUDE_AGENTS_SELECT;
}
function gSi() {
  let e = (0, import_chunk_69qhefwa.Ne)(process.env[bso]);
  return delete process.env[bso], e;
}
