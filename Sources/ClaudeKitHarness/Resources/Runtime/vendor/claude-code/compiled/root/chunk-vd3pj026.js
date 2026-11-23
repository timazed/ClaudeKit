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
var chunk_vd3pj026_exports = {};
__export(chunk_vd3pj026_exports, {
  uHt: () => uHt
});
module.exports = __toCommonJS(chunk_vd3pj026_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
async function uHt(f, r) {
  let [o, l] = await Promise.allSettled([(0, import_chunk_p3d6wgn7.rV)(void 0, f, r), (0, import_chunk_p3d6wgn7.zpo)(void 0, r)]), s = o.status === "rejected" ? (0, import_chunk_jv7av99m.d)(o.reason) : null, i = o.status === "fulfilled" ? o.value : [], a = l.status === "fulfilled" ? l.value : [], t = [...i, ...a], e = (0, import_chunk_p3d6wgn7.n0e)(), u = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && (0, import_chunk_p3d6wgn7.zae)(e.id) && !t.some((n) => (0, import_chunk_p3d6wgn7.nV)(n) === e.id)) t.push({ kind: "self_hosted_pool", pool_id: e.id, name: e.id, created_at: "", alive_runner_count: 0 });
  if (t.length === 0) return { availableTargets: [], selectedTarget: null, selectedTargetSource: null, environmentsError: s, ignoredUntrustedPool: u };
  let c = (0, import_chunk_p3d6wgn7.G9e)(i, (n) => n.kind !== "bridge") ?? a[0] ?? t[0], g = null;
  if (e.id !== void 0) {
    let n = t.find((m) => (0, import_chunk_p3d6wgn7.nV)(m) === e.id);
    if (n) c = n, g = e.source ?? null;
  }
  return { availableTargets: t, selectedTarget: c, selectedTargetSource: g, environmentsError: s, ignoredUntrustedPool: u };
}
