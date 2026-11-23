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
var chunk_820nfw0h_exports = {};
__export(chunk_820nfw0h_exports, {
  BRIDGE_ACCOUNT_UNVERIFIED_HINT: () => import_chunk_sr33d2zd.mCr,
  BRIDGE_HOST_ACCOUNT_CHANGED_HINT: () => import_chunk_sr33d2zd.gCr,
  BRIDGE_HOST_SIGNED_OUT_HINT: () => import_chunk_sr33d2zd.hCr,
  BRIDGE_LOGIN_ERROR: () => import_chunk_sr33d2zd.ujn,
  BRIDGE_LOGIN_HINT: () => import_chunk_sr33d2zd.xLe,
  BRIDGE_LOGIN_INSTRUCTION: () => import_chunk_sr33d2zd.lGe,
  BRIDGE_MALFORMED_RESPONSE_HINT: () => import_chunk_sr33d2zd.pjn,
  BRIDGE_OWNER_CHANGED_HINT: () => import_chunk_sr33d2zd.dEs,
  BRIDGE_REATTACH_UNAVAILABLE_HINT: () => import_chunk_sr33d2zd.pGt,
  BRIDGE_SESSION_BELOW_DEVICE_POLICY_HINT: () => import_chunk_sr33d2zd.mjn,
  BRIDGE_SESSION_NOT_BRIDGE_HINT: () => import_chunk_sr33d2zd.qvt,
  BRIDGE_SIGNATURE_WANTED_HINT: () => import_chunk_sr33d2zd.PLe,
  FOLDER_ALREADY_SERVED_ERROR_TYPE: () => import_chunk_sr33d2zd.fjn,
  REMOTE_CONTROL_DISCONNECTED_MSG: () => import_chunk_sr33d2zd.mlt,
  SANDBOX_SETTING_HINT: () => import_chunk_sr33d2zd.pCr,
  WORK_STATE_QUEUED: () => import_chunk_sr33d2zd.uGi
});
module.exports = __toCommonJS(chunk_820nfw0h_exports);
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
