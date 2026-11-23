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
var chunk_mtdden4a_exports = {};
__export(chunk_mtdden4a_exports, {
  D8s: () => D8s,
  EVo: () => EVo,
  H8s: () => H8s,
  I8s: () => I8s,
  L8s: () => L8s,
  M8s: () => M8s
});
module.exports = __toCommonJS(chunk_mtdden4a_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_8nx7c1dp = require("/$bunfs/root/chunk-8nx7c1dp.js");
var import_chunk_02wf5c4s = require("/$bunfs/root/chunk-02wf5c4s.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var I8s = Object.freeze(["attachment", "hook-context", "compaction"]);
function M8s(r) {
  return r !== void 0 && r.length > 0 && r.every((o) => I8s.includes(o)) ? r.map((o) => `session.append{door=${o}}`) : [];
}
var H8s = Object.freeze(["prompt.section", "prompt.context", "prompt.attachment", "prompt.compose", "skill.prompt", "attribution.text", "session.compact", "settings.read", "telemetry.log", "session.identity"]);
function D8s(r) {
  return r.filter((p) => {
    let o = import_chunk_vfyns8ja.u7e.filter((e) => (0, import_chunk_vfyns8ja.FV)(p, e));
    return o.length > 0 && o.every((e) => e.startsWith("classic.") || H8s.includes(e));
  });
}
var L8s = (r, p) => r.slice(0, Math.max(r.findIndex(import_chunk_5zps0wmn.Lh), 0)).flatMap((o) => {
  let e = (0, import_chunk_8nx7c1dp.aTn)(o.standingFor("session.append").filter((t) => o.args.scan.toUserOn?.includes(t.pattern)).map((t) => t.matcher)), i = p.filter((t) => !t.includes("{") || e === void 0 || e.some((s) => t === `session.append{door=${s}}`)).flatMap((t) => {
    let s = import_chunk_vfyns8ja.u7e.filter((n) => (0, import_chunk_vfyns8ja.FV)((0, import_chunk_7cfjrnwy.nt)(t, "{"), n)), a = s.filter((n) => (0, import_chunk_vfyns8ja.D6i)(o.args.scan, n));
    return a.length === s.length ? [t] : a;
  });
  return i.length > 0 ? [{ plugin: o.name, patterns: i }] : [];
});
function EVo(r) {
  return (r.some(import_chunk_5zps0wmn.Lh) ? r.filter((e) => e.tier === "user") : []).flatMap((e) => {
    let i = e.registrationsFor("session.append"), t = (0, import_chunk_4smdap7r.M)([...D8s(e.patterns), ...i.flatMap((d) => M8s((0, import_chunk_8nx7c1dp.aTn)(e.matcherFor("session.append", i.filter((m) => m !== d)))))]), s = (0, import_chunk_02wf5c4s.Cmr)(e) ? ["http.fetch{origin=engine}"] : [], a = t.length + s.length > 0, n = a ? L8s(r, t) : [];
    return a ? [{ type: "hooks-passed-over", source: e.args.pluginStorageId, patterns: [...t, ...s], ...n.length > 0 && { reopened: n } }] : [];
  });
}
