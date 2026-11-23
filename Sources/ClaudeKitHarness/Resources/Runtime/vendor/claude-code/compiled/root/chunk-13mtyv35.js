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
var chunk_13mtyv35_exports = {};
__export(chunk_13mtyv35_exports, {
  Bha: () => Bha,
  POt: () => POt,
  V1o: () => V1o,
  z1o: () => z1o
});
module.exports = __toCommonJS(chunk_13mtyv35_exports);
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_ez1sysdb = require("/$bunfs/root/chunk-ez1sysdb.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_0mpxxjwt = require("/$bunfs/root/chunk-0mpxxjwt.js");
var import_chunk_b7d04a6f = require("/$bunfs/root/chunk-b7d04a6f.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
function K(r) {
  return (0, import_chunk_adx6804h.We)([r, (0, import_chunk_adx6804h.C)(r)]).optional().transform((o) => o === void 0 ? [] : Array.isArray(o) ? o : [o]);
}
var g = (0, import_chunk_2cbgkbm2.p)(() => {
  let r = (0, import_chunk_khxw3ng0.er)(import_chunk_0mpxxjwt.d$e, (o) => K(o.schema()));
  return (0, import_chunk_adx6804h.c)({ $schema: (0, import_chunk_adx6804h.n)().optional(), [import_chunk_ez1sysdb.fXn]: (0, import_chunk_adx6804h.ie)().optional(), ...r });
});
function z1o() {
  return g().parse({});
}
async function POt(r, o) {
  let i;
  if ((0, import_chunk_m15w38ag.ne)() && o !== void 0 && r === (0, import_chunk_b7d04a6f.a6)()) {
    let e = await S(o, r);
    if (!e.ok) return e.result;
    i = e.raw;
  } else try {
    let e = await (0, import_promises.stat)(r).catch((l) => (0, import_chunk_jv7av99m.w)(l) === "ENOENT" ? null : Promise.reject(l));
    if (e && (!e.isFile() || e.size > import_chunk_ez1sysdb.cXn)) return { ok: false, error: `${r} is not a regular file (or exceeds 1MiB)` };
    i = await (0, import_chunk_8j3h6yzg.Vn)().read(r);
  } catch (e) {
    if ((0, import_chunk_jv7av99m.w)(e) === "ENOENT") return { ok: true, config: z1o(), unknownKeys: [] };
    return { ok: false, error: `failed to read ${r}: ${(0, import_chunk_jv7av99m.d)(e)}` };
  }
  let s = (0, import_chunk_0jve1fep.et)(i, false);
  if (s === null) return { ok: false, error: `failed to parse ${r} as JSON` };
  let f = g().safeParse(s);
  if (!f.success) return { ok: false, error: `config validation failed: ${f.error.message}` };
  let a = new Set(Object.keys(g().shape)), u = typeof s === "object" && s !== null ? Object.keys(s).filter((e) => !a.has(e)) : [];
  return { ok: true, config: f.data, unknownKeys: u };
}
async function S(r, o) {
  let i = await (0, import_chunk_ez1sysdb.pWo)(r);
  switch (i.kind) {
    case "text":
      return { ok: true, raw: i.text };
    case "absent":
      return { ok: false, result: { ok: true, config: z1o(), unknownKeys: [] } };
    case "refused":
      return { ok: false, result: { ok: false, error: `${o} is not a regular file (or exceeds 1MiB)` } };
    case "failed":
      return { ok: false, result: { ok: false, error: `failed to read ${o}: ${i.error.code}` } };
    case "threw":
      return { ok: false, result: { ok: false, error: `failed to read ${o}: ${(0, import_chunk_jv7av99m.d)(i.error)}` } };
  }
}
function V1o(r, o) {
  let i = (0, import_path.dirname)(r), s = (0, import_path.normalize)(i), f = (0, import_path.basename)(r), a = import_chunk_dzf5h538.ZO.watch(i, { persistent: true, ignoreInitial: true, depth: 0, usePolling: (0, import_chunk_cg8dqz0a.x)() === "macos", interval: 100, ignored: (u) => {
    let e = (0, import_path.normalize)(u);
    return e !== s && (0, import_path.basename)(e) !== f;
  }, awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 }, atomic: true, ignorePermissionErrors: true });
  return a.on("add", o), a.on("change", o), a.on("unlink", o), a.on("error", (u) => (0, import_chunk_w578pjby.t)(`[daemon-config] watcher error: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "warn" })), () => void a.close().catch(() => {
  });
}
function Bha(r, o) {
  let i = { stop: [], start: [], restart: [] };
  for (let s of Object.keys(import_chunk_0mpxxjwt.d$e)) {
    let f = r[s] ?? [], a = o[s] ?? [], u = Math.max(f.length, a.length);
    for (let e = 0; e < u; e++) {
      let l = `${s}:${e}`, m = f[e], k = a[e];
      if (m !== void 0 && k === void 0) i.stop.push({ id: l, kind: s, previousConfig: m });
      else if (m === void 0 && k !== void 0) i.start.push({ id: l, kind: s, config: k });
      else if (!(0, import_chunk_z688m88d.Zt)(m, k)) i.restart.push({ id: l, kind: s, config: k, previousConfig: m });
    }
  }
  return i;
}
