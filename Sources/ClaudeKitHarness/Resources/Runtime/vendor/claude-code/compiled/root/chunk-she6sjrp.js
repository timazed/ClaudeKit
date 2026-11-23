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
var chunk_she6sjrp_exports = {};
__export(chunk_she6sjrp_exports, {
  createDeviceHookRegistry: () => H,
  productionRegistryTimer: () => k
});
module.exports = __toCommonJS(chunk_she6sjrp_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_2567t09g = require("/$bunfs/root/chunk-2567t09g.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var y = 2;
function H(i) {
  let e = null, l = null, a = 0, r = false, s = null, d = 0, p = [], m = () => {
    l?.clear(), l = null;
  }, v = () => {
    if (m(), e === null) return;
    let n = e;
    l = i.setTimer(() => {
      if (l = null, e !== n) return;
      if (i.now() < n.leaseExpiresAt) {
        v();
        return;
      }
      let o = { ...n, entries: [] };
      e = o.templates.length === 0 ? null : o;
      for (let u of [...i.onLeaseExpired ? [i.onLeaseExpired] : [], ...p]) try {
        u(o);
      } catch (c) {
        (0, import_chunk_w578pjby.t)(`[deviceHooks] lease-expiry listener threw: ${(0, import_chunk_jv7av99m.D)(c).stack ?? String(c)}`, { level: "error" });
      }
    }, Math.min(import_chunk_2567t09g.au, Math.max(0, n.leaseExpiresAt - i.now())));
  };
  return { current: () => e, generation: () => d, recordMiss(n, o) {
    if (e === null || e.instanceId !== n || o !== d) return false;
    if (a += 1, !r && a >= y) r = true, s = i.now();
    return r;
  }, recordHit(n) {
    if (e !== null && e.instanceId === n) a = 0;
  }, isAway: (n) => e !== null && e.instanceId === n && r, awaySince: (n) => e !== null && e.instanceId === n && r ? s : null, replaceOwner(n) {
    let o = e !== null && e.instanceId !== n.instanceId ? e.instanceId : void 0, u = e !== null && o === void 0, c = u && r ? s : null;
    if (e = n, !u || c !== null) a = 0, r = false, s = null;
    return d += 1, v(), { ...o !== void 0 && { replaced: o }, ...c !== null && { awaySince: c } };
  }, removeOwner(n) {
    if (e === null || e.instanceId !== n) return false;
    return e = null, a = 0, r = false, s = null, m(), true;
  }, clear() {
    e = null, a = 0, r = false, s = null, m();
  }, onLeaseExpired(n) {
    p.push(n);
  } };
}
function k(i, e) {
  let l = setTimeout(i, e);
  return l.unref(), { clear: () => clearTimeout(l) };
}
