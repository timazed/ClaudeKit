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
var chunk_a0vjcws7_exports = {};
__export(chunk_a0vjcws7_exports, {
  BACKGROUND_PROTOCOL_MIN_VERSION: () => import_chunk_9e5mdyfk.jpr,
  BACKGROUND_PROTOCOL_VERSION: () => import_chunk_9e5mdyfk.ap,
  BackgroundDispatchSchema: () => import_chunk_9e5mdyfk.vao,
  CLOUD_SESSION_ID_RE: () => import_chunk_9e5mdyfk.Fnn,
  CLOUD_SESSION_LEASE_LABEL: () => import_chunk_9e5mdyfk.i1t,
  ControlRequestSchema: () => import_chunk_9e5mdyfk.yki,
  DAEMON_DETACH_APC: () => import_chunk_9e5mdyfk.ICe,
  DAEMON_HINT_APC: () => import_chunk_9e5mdyfk.Eao,
  DAEMON_LEASE_LABELS: () => import_chunk_9e5mdyfk.Cao,
  FATAL_ATTACH_CODE: () => import_chunk_9e5mdyfk.GDn,
  HOST_DEAD_ATTACH_CODE: () => import_chunk_9e5mdyfk.WDn,
  HOST_DIED_ATTACH_MESSAGE: () => import_chunk_9e5mdyfk.r1t,
  HOST_DIED_DETAIL: () => import_chunk_9e5mdyfk.bbt,
  HOST_DIED_EXEC_ATTACH_MESSAGE: () => import_chunk_9e5mdyfk.o1t,
  HOST_DIED_EXEC_DETAIL: () => import_chunk_9e5mdyfk.jDn,
  KICKED_ATTACH_CODE: () => import_chunk_9e5mdyfk.s1t,
  KICKED_NOTICE: () => import_chunk_9e5mdyfk._ki,
  LeaseAcknowledgementSchema: () => import_chunk_9e5mdyfk.Ski,
  LeaseClientSchema: () => import_chunk_9e5mdyfk.wbt,
  LeaseClosingNoticeSchema: () => import_chunk_9e5mdyfk.bki,
  RACED_SOCKET_GAP: () => import_chunk_9e5mdyfk.UDn,
  RESPAWNING_ATTACH_CODE: () => import_chunk_9e5mdyfk.Bnn,
  RESPAWN_REASON_LEGACY: () => import_chunk_9e5mdyfk.Gpr,
  RESPAWN_REASON_STALL: () => import_chunk_9e5mdyfk.n1t,
  RESPAWN_REASON_UPGRADE: () => import_chunk_9e5mdyfk.BDn,
  RosterSchema: () => import_chunk_9e5mdyfk.rZa,
  SHORT_RE: () => import_chunk_9e5mdyfk.UW,
  SUPERVISOR_DETACH_CODE: () => import_chunk_9e5mdyfk.zDn,
  TABS_KEY_RE: () => import_chunk_9e5mdyfk.nZa,
  TRANSIENT_ATTACH_CODE: () => import_chunk_9e5mdyfk.$Dn,
  boundedMarkCountOrUndefined: () => import_chunk_9e5mdyfk.Unn,
  daemonDetachApc: () => import_chunk_9e5mdyfk.dDe,
  extractInteractiveMarks: () => import_chunk_9e5mdyfk.mki,
  interactiveMarkApc: () => import_chunk_9e5mdyfk.Kas,
  parseDetachMsg: () => import_chunk_9e5mdyfk.gki,
  parseInteractiveMarkRv: () => import_chunk_9e5mdyfk.hki,
  rosterEntryExtras: () => import_chunk_9e5mdyfk.qas,
  streamDetachMessage: () => import_chunk_9e5mdyfk.Tao,
  wrapDaemonHint: () => import_chunk_9e5mdyfk.$nn
});
module.exports = __toCommonJS(chunk_a0vjcws7_exports);
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_bdxa2qdh = require("/$bunfs/root/chunk-bdxa2qdh.js");
var import_chunk_sdks5h78 = require("/$bunfs/root/chunk-sdks5h78.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
