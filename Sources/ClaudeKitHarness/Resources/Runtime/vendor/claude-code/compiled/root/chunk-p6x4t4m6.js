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
var chunk_p6x4t4m6_exports = {};
__export(chunk_p6x4t4m6_exports, {
  bg: () => bg,
  i0i: () => i0i,
  lWt: () => lWt,
  xgo: () => xgo
});
module.exports = __toCommonJS(chunk_p6x4t4m6_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var h = 1e3;
function lWt(e) {
  if (!(0, import_chunk_z1z1qsrb.QWt)()) return true;
  let r = e === void 0 ? void 0 : (0, import_chunk_qtg8rez4.Bt)(e);
  return r?.outsideAudience === false && r.probeFailed !== true;
}
function i0i(e, r) {
  return r ? lWt(e) : !(0, import_chunk_z1z1qsrb.QWt)() || (0, import_chunk_qtg8rez4.Bt)(e)?.outsideAudience !== true;
}
async function bg(e, r, t, o) {
  if (!!r.toolUseId && (0, import_chunk_qtg8rez4.q0e)((0, import_chunk_qtg8rez4.Bt)(e.slug), r.toolUseId)) return;
  let { signal: n } = r.abortController;
  if (n.aborted) throw new import_chunk_jv7av99m.Ie("artifact permission check aborted");
  let f = (0, import_chunk_z1z1qsrb.ejt)(), l = o?.readBack !== true, p = l && (!f || (0, import_chunk_z1z1qsrb.B1i)(e)), b = f ? (0, import_chunk_z1z1qsrb.dUn)(e, n) : void 0;
  if (p && k(e.slug) !== void 0) {
    if (await b, n.aborted) throw new import_chunk_jv7av99m.Ie("artifact permission check aborted");
    if (S(e.slug, r.toolUseId)) return;
  }
  let d = o?.readBack === true ? `${e.slug}?readback` : e.slug, u = A(d), i = u ?? g(d, e, r, o), [a] = await Promise.all([u !== void 0 ? C(u, n) : i.read, b]);
  if (a === void 0) {
    if (n.aborted) throw new import_chunk_jv7av99m.Ie("artifact permission check aborted");
    let c = A(d);
    if (c !== void 0 && c !== u) i = c, a = await C(c, n);
  }
  if (a === void 0) {
    if (l && S(e.slug, r.toolUseId)) return;
    i = g(d, e, r, o), a = await i.read;
  }
  (0, import_chunk_qtg8rez4.gUn)(e.slug, a, { consumedByCheck: true, toolUseId: r.toolUseId, issuedAt: i.issuedAt, probeId: i.id, debugLabel: t });
}
async function xgo(e, r, t) {
  let o = Date.now(), n = await (0, import_chunk_mha8pjbc.MWt)(e, r.abortController.signal, r.credentials);
  (0, import_chunk_qtg8rez4.gUn)(e.slug, n, { consumedByCheck: false, toolUseId: r.toolUseId, issuedAt: o, debugLabel: t });
}
function P(e) {
  let r = Date.now(), t = Math.min(import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_SHARE_PROBE_REUSE_MS ?? h, h);
  return r >= e && r - e < t && !(0, import_chunk_qtg8rez4.E0)(e);
}
function k(e) {
  let r = (0, import_chunk_qtg8rez4.Bt)(e);
  return r?.lastProbeAt !== void 0 && r.lastProbeIssuedAt !== void 0 && P(r.lastProbeIssuedAt) ? r : void 0;
}
function m(e, r) {
  let { checkProbesInFlight: t } = (0, import_chunk_0rkwgmhx.se)().shareStatus;
  if (t.get(e) === r) t.delete(e);
}
function g(e, r, t, o) {
  let n = { id: Symbol("share probe"), issuedAt: Date.now(), read: (0, import_chunk_mha8pjbc.MWt)(r, t.abortController.signal, t.credentials, o) };
  return n.read.then(() => m(e, n), () => m(e, n)), (0, import_chunk_0rkwgmhx.se)().shareStatus.checkProbesInFlight.set(e, n), n;
}
function S(e, r) {
  let t = k(e);
  if (t === void 0) return false;
  if (r !== void 0) (0, import_chunk_qtg8rez4.Tre)(e, { ...t, ...(0, import_chunk_qtg8rez4.Kys)(t, r, true) });
  return (0, import_chunk_qtg8rez4.dSo)(t, false, true), true;
}
function A(e) {
  let r = (0, import_chunk_0rkwgmhx.se)().shareStatus.checkProbesInFlight.get(e);
  return r !== void 0 && P(r.issuedAt) ? r : void 0;
}
async function C(e, r) {
  try {
    return await (0, import_chunk_5appeerh.Tn)(e.read, r, () => new import_chunk_jv7av99m.Ie("artifact permission check aborted"));
  } catch (t) {
    if (r.aborted) throw t;
    return;
  }
}
