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
var chunk_tpt3nzyp_exports = {};
__export(chunk_tpt3nzyp_exports, {
  storeOutputsHere: () => j
});
module.exports = __toCommonJS(chunk_tpt3nzyp_exports);
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_x98x5a0q = require("/$bunfs/root/chunk-x98x5a0q.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var w = "/dev/shm/rclone-vfscache/vfsMeta", y = 65536, h = 26214400, E = 6e3, b = 2e3, A = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ names: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(1024).refine((t) => !t.includes("\0") && import_path.posix.join("/", t) === `/${t}`)).min(1).max(50) })), P = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.F)(["none_waiting", "stored", "still_waiting", "no_records"]) }));
async function j(t, u, e = w) {
  let { names: i } = A().parse(t), o = (await Promise.all((await (0, import_promises.readdir)(e).catch(() => [])).filter((r) => r.endsWith("_outputs")).map((r) => (0, import_promises.realpath)(import_path.posix.join(e, r, "outputs")).catch(() => [])))).flat();
  if (o.length === 0) return { summary: "no_records", output: { status: "no_records" } };
  let a = await O(i, o);
  if (a.length === 0) return { summary: "none_waiting", output: { status: "none_waiting" } };
  let { MOST_FSYNCS_NOT_ENDED: s, settleOnMount: S } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-4734yq73.js"))), l = AbortSignal.any([u, AbortSignal.timeout(E)]), f = await (0, import_promises.realpath)(import_chunk_6mfepmbb.qR).catch(() => {
    return;
  }), _ = f === void 0 ? [] : [...a];
  await Promise.all(Array.from({ length: Math.max(1, s - 1) }, async () => {
    for (let r = _.shift(); r !== void 0 && !l.aborted; r = _.shift()) await S(`${f}/${r}`, h, AbortSignal.any([l, AbortSignal.timeout(b)]));
  }));
  let d = (await O(i, o)).length === 0 ? "stored" : "still_waiting";
  return { summary: d, output: { status: d } };
}
async function O(t, u) {
  let { readValidatedFileWithin: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0c57vp4a.js"))), i = [];
  for (let o of t) for (let a of u) {
    let s = await e(import_path.posix.join(a, o), y);
    if ("buf" in s ? !s.buf.includes('"Dirty": false') : s.refusal !== "not_regular" || (0, import_chunk_x98x5a0q.uYr)(o)) {
      i.push(o);
      break;
    }
  }
  return i;
}
