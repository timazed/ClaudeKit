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
var chunk_yd3aejbx_exports = {};
__export(chunk_yd3aejbx_exports, {
  A3t: () => A3t,
  Iua: () => Iua,
  Mpt: () => Mpt,
  Mua: () => Mua
});
module.exports = __toCommonJS(chunk_yd3aejbx_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_fz3c96rq = require("/$bunfs/root/chunk-fz3c96rq.js");
var import_chunk_4gzm04h3 = require("/$bunfs/root/chunk-4gzm04h3.js");
var import_chunk_qaaqd1gd = require("/$bunfs/root/chunk-qaaqd1gd.js");
var import_chunk_am74sq47 = require("/$bunfs/root/chunk-am74sq47.js");
var import_chunk_b18a27zs = require("/$bunfs/root/chunk-b18a27zs.js");
var import_chunk_9ph0ypyy = require("/$bunfs/root/chunk-9ph0ypyy.js");
var import_chunk_nynf6rf6 = require("/$bunfs/root/chunk-nynf6rf6.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var Iua = "ReadFileForRemote", Mpt = 4194304, g = 3e6, S = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_xfj2cwfv.Gxo)().pick({ max_bytes: true, encoding: true, anchor: true, offset: true }).extend({ path: (0, import_chunk_adx6804h.n)().max(import_chunk_qaaqd1gd.z_e) })), h = (0, import_chunk_2cbgkbm2.p)(() => S().extend({ permission_context: (0, import_chunk_qaaqd1gd.AY)() }).strict()), W = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ file: (0, import_chunk_xfj2cwfv.$5i)().pick({ truncated: true, encoding: true, lossy: true, anchor: true, offset: true, read_bytes: true, total_bytes: true }).extend({ contents: (0, import_chunk_adx6804h.n)().refine(f), etag: (0, import_chunk_adx6804h.n)().max(64).optional() }).optional(), error_code: (0, import_chunk_adx6804h.v)("stale_root_id").optional().catch(void 0) }));
async function Mua(t, u, r) {
  if ((0, import_chunk_0jve1fep.Le)(t) && (0, import_chunk_qaaqd1gd.J3)(t.permission_context)) throw Error("permission_context is too large");
  let { permission_context: m, path: l, max_bytes: o, ...a } = h().parse(t), i = r.launchPermissionContext && A3t(r.launchPermissionContext), s, e = i && await (0, import_chunk_fz3c96rq.nht)(l, o && Math.min(o, g), { ...(0, import_chunk_b18a27zs.D3)(m, i, (0, import_chunk_f9x2f6cx.Rs)(r.session).originalCwd), ...i.blockReadsOutsideWorkingDirectories && { blockReadsOutsideWorkingDirectories: true } }, { ...a, telemetrySource: "headless_stream" }).catch((d) => {
    if (d instanceof import_chunk_nynf6rf6.rI && d.errorCode === "stale_root_id") s = d.errorCode;
    return;
  });
  if (e && !f(e.contents)) throw Error("the file is too large to send back as text");
  return { summary: e ? `${e.contents.length} characters` : "read denied", output: { file: e, ...s && { error_code: s } } };
}
function A3t(t) {
  let u = [...(0, import_chunk_2yx6c1y2.Rw)()], r = (0, import_chunk_gbskgz33.PYe)("policySettings"), m = [(0, import_chunk_2yx6c1y2._e)("policySettings")];
  for (let [o, a] of [["userSettings", "userSettings"], ["projectSettings", "projectSettings"], ["localSettings", "localSettings"], ["localSettings", "legacyLocal"]]) {
    let i = a === "legacyLocal" ? (0, import_chunk_2yx6c1y2.A_)() : (0, import_chunk_2yx6c1y2._n)(a), s = (0, import_chunk_4gzm04h3.m1r)(a), e = s !== void 0 ? s : i === void 0 ? null : (0, import_chunk_6mfepmbb.cO)(i);
    if (e !== null) u.push(...e.errors), r.push(...(0, import_chunk_gbskgz33.k4)(e.settings, o)), m.push(e.settings);
  }
  if ((0, import_chunk_9ph0ypyy.S8t)((0, import_chunk_9ph0ypyy.ret)(u).slice(0, 10)), (0, import_chunk_am74sq47.GNo)()) return;
  let l = (0, import_chunk_bzyb60p0.OW)(t, r.filter((o) => o.ruleBehavior !== "allow"), { announce: false });
  return (0, import_chunk_ht27b0vz.Tr)(l, import_chunk_p1ewvgeh.Uh) || (0, import_chunk_ht27b0vz.Di)(l, import_chunk_p1ewvgeh.Uh) ? void 0 : { ...l, blockReadsOutsideWorkingDirectories: m.some((o) => o?.permissions?.blockReadsOutsideWorkingDirectories) };
}
function f(t) {
  return t.length <= Mpt && Buffer.byteLength((0, import_chunk_w578pjby._)(t)) <= Mpt;
}
