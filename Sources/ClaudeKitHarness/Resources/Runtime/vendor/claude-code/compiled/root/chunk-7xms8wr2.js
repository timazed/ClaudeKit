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
var chunk_7xms8wr2_exports = {};
__export(chunk_7xms8wr2_exports, {
  $Xl: () => $Xl,
  DXl: () => DXl,
  FXl: () => FXl,
  Jti: () => Jti,
  LXl: () => LXl,
  NXl: () => NXl,
  Szl: () => Szl,
  Xti: () => Xti,
  _zl: () => _zl,
  h8r: () => h8r,
  yzl: () => yzl
});
module.exports = __toCommonJS(chunk_7xms8wr2_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var _zl = 1500, yzl = 864e5, Szl = 144e5;
function DXl() {
  return (0, import_chunk_f2vegtjy.$wr)() !== void 0;
}
function h8r() {
  let r = (0, import_chunk_f2vegtjy.H_s)();
  if (r !== void 0) return { capabilities: r.roster.capabilities, source: r.source };
  return { capabilities: void 0, source: (0, import_chunk_f2vegtjy.$wr)() === void 0 ? "cold_no_identity" : "cold" };
}
function Xti() {
  return h8r().capabilities === void 0;
}
function LXl(r = _zl) {
  let e = (0, import_chunk_0rkwgmhx.se)();
  if (e.frozenAssets !== void 0 || e.rosterHeard === void 0 || e.rosterWaitOver || !Xti()) return;
  if (e.rosterWait !== void 0) return e.rosterWait;
  let o = Date.now(), n = e.accountEpoch;
  return e.rosterWait = (0, import_chunk_5appeerh.qt)(e.rosterHeard, r, "artifact-roster").then((a) => {
    (0, import_chunk_cqa9hrgx.u)("artifact_roster_wait", { wait_ms: Date.now() - o, heard: a, cold: Xti() });
  }, () => {
    (0, import_chunk_cqa9hrgx.l)("artifact_roster_wait", "timeout", { wait_ms: Date.now() - o, cold: Xti() });
  }).catch((a) => {
    (0, import_chunk_w578pjby.t)(`Artifact roster wait: recording its outcome failed: ${(0, import_chunk_jv7av99m.d)(a)}`);
  }).finally(() => {
    if (e.accountEpoch === n) e.rosterWaitOver = true;
  }), e.rosterWait;
}
async function NXl(r) {
  let e = Date.now() + r;
  for (; ; ) {
    let o = (0, import_chunk_0rkwgmhx.se)(), n = o.rosterHeard;
    if (o.frozenAssets !== void 0 || n === void 0 || o.rosterWaitOver) return true;
    let a = new AbortController(), i = await Promise.race([n.then(() => true, () => true), (0, import_chunk_5appeerh.K)(Math.max(0, e - Date.now()), a.signal, { unref: true }).then(() => false)]);
    if (a.abort(), !i) return false;
    if ((0, import_chunk_0rkwgmhx.se)().rosterHeard === n) return true;
  }
}
function FXl(r = Date.now()) {
  let e = (0, import_chunk_f2vegtjy.mFi)();
  if (e === void 0) return false;
  let o = r - e.fetchedAt;
  return o >= 0 && o < yzl;
}
function $Xl(r = Date.now()) {
  let e = (0, import_chunk_f2vegtjy.mgl)();
  if (e === void 0) return false;
  let o = r - e.deniedAt;
  return o >= 0 && o < Szl && (0, import_chunk_865at33z.Y7e)() === e.tokenExpiresAt && !(0, import_chunk_865at33z.NR)(e.tokenExpiresAt, r);
}
function Jti(r) {
  let e = (0, import_chunk_0rkwgmhx.se)(), o;
  return e.rosterHeard = new Promise((n) => {
    o = n;
  }), w(e, r, o);
}
async function w(r, e, o) {
  try {
    let n = r.accountEpoch, a = (0, import_chunk_865at33z.Y7e)(), i = Date.now(), s = await (0, import_chunk_f2vegtjy.L0e)({ ...e, recoverOAuth401: true }), p = Date.now() - i;
    if ("err" in s) {
      (0, import_chunk_cqa9hrgx.l)("artifact_roster_refresh", s.cause, { duration_ms: p, ...s.status !== void 0 && { status: s.status } }), (0, import_chunk_w578pjby.t)(`Artifact roster refresh failed (${s.cause}): ${s.err}`);
      let c = (0, import_chunk_865at33z.Y7e)(), { cause: h, status: f } = s;
      if (o(false), h === "http_4xx" && (f === 403 || f === 401 && c !== a) && c !== null && (0, import_chunk_0rkwgmhx.se)() === r) await (0, import_chunk_f2vegtjy.hFi)(r, n, e.storageV5, (R) => ({ artifactRosterDenied: { ...R, status: f, deniedAt: Date.now(), tokenExpiresAt: c } }));
      return false;
    }
    (0, import_chunk_cqa9hrgx.u)("artifact_roster_refresh", { duration_ms: p, schema_frozen: r.frozenAssets !== void 0 });
    let { adopted: m, persisted: A } = (0, import_chunk_f2vegtjy.z8e)({ session: r, epoch: n, roster: s, storageV5: e.storageV5 });
    if (m) o(true), await A;
    return true;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Artifact roster refresh: ${(0, import_chunk_jv7av99m.d)(n)}`), false;
  } finally {
    o(false);
  }
}
