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
var chunk_wddxyb00_exports = {};
__export(chunk_wddxyb00_exports, {
  GEi: () => GEi,
  N5e: () => N5e,
  SDe: () => SDe,
  Tel: () => Tel,
  UCe: () => UCe,
  Ubt: () => Ubt,
  Vlo: () => Vlo,
  Yh: () => Yh,
  Ymr: () => Ymr,
  jEi: () => jEi,
  rds: () => rds,
  rm: () => rm,
  vs: () => vs,
  zlo: () => zlo
});
module.exports = __toCommonJS(chunk_wddxyb00_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
class a {
  active = void 0;
  transportPersists = void 0;
  hostedWorker = false;
  transportHasStored = false;
  hostOwnedLocalStdin = false;
  setActive(e) {
    this.active = e, this.transportPersists = e?.persistsOutboundFrames, this.hostedWorker = e?.isHostedWorker === true, this.transportHasStored ||= e?.persistsOutboundFrames === true, this.hostOwnedLocalStdin = false;
  }
  remoteBridgeLive = null;
  bridgeMayBeLive() {
    return this.remoteBridgeLive === null || this.remoteBridgeLive();
  }
  markLocalTransport() {
    this.transportPersists = false;
  }
  markHeadlessStart(e) {
    this.hostOwnedLocalStdin = !e.sdkUrl && e.readsProcessStdin && !(0, import_chunk_3t7ve0wy.k0o)();
  }
}
var Yh = new import_chunk_pzzqg6s3.ze(() => new a());
function rm(e) {
  return (0, import_chunk_6e68m1dj.RMo)({ hostedWorker: Ymr(e), transportPersists: Yh.of(e).transportPersists });
}
function SDe(e) {
  return Ymr(e) || Yh.of(e).transportPersists !== false;
}
function rds(e) {
  let r = Yh.of(e);
  return r.hostOwnedLocalStdin && r.transportPersists === false && !Ymr(e) && !(0, import_chunk_3t7ve0wy.k0o)();
}
function Tel(e) {
  return (0, import_chunk_6e68m1dj.jm)() && Yh.of(e).transportPersists === true;
}
function Ymr(e) {
  return e.host.launchOptions.diskless() || Yh.of(e).hostedWorker;
}
function jEi(e) {
  let r = Yh.of(e);
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true || r.transportHasStored || rm(e) || r.remoteBridgeLive?.() === true;
}
function vs(e) {
  return rm(e) || Yh.of(e).bridgeMayBeLive();
}
function N5e(e) {
  return Yh.of(e).transportPersists !== false;
}
function zlo(e) {
  return SDe(e);
}
function Ubt(e) {
  return e.redactsPersistedLane() || N5e(e.session);
}
function GEi(e, r) {
  return rm(e) ? [] : r;
}
function Vlo(e, r, o, d = "last") {
  try {
    if (!rm(e)) return d === "first" ? [r, ...o] : [...o, r];
    for (let n of o) (0, import_chunk_w578pjby.t)(`error_during_execution detail: ${n}`, { level: "error" });
    return [r];
  } catch (n) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n)), [r];
  }
}
function UCe(e, r, o) {
  return rm(e) ? o : r;
}
