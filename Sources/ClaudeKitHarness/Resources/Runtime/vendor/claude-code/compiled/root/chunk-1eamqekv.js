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
var chunk_1eamqekv_exports = {};
__export(chunk_1eamqekv_exports, {
  WJs: () => WJs,
  x3r: () => x3r
});
module.exports = __toCommonJS(chunk_1eamqekv_exports);
var import_chunk_0wh73s24 = require("/$bunfs/root/chunk-0wh73s24.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_3nqvc94p = require("/$bunfs/root/chunk-3nqvc94p.js");
async function WJs(t) {
  try {
    let e = await (t.listProjects ?? import_chunk_3nqvc94p.nXt)(t.signal, t.credentials);
    return (0, import_chunk_cqa9hrgx.u)("continue_in_projects_list"), { kind: "listed", listing: e };
  } catch (e) {
    if ((0, import_chunk_jv7av99m.Fe)(e)) throw e;
    (0, import_chunk_cqa9hrgx.m)("continue_in_projects_list", e instanceof import_chunk_3nqvc94p._f ? e.telemetryCode : "request_failed");
    let n = (0, import_chunk_tp3c5q2s.Ft)(e instanceof import_chunk_3nqvc94p._f ? e.detail : (0, import_chunk_jv7av99m.d)(e), 120).replace(/\.+$/, "");
    return e instanceof import_chunk_3nqvc94p._f && !(0, import_chunk_3nqvc94p.p6)(e) ? { kind: "refused", detail: n } : { kind: "failed", detail: n };
  }
}
async function x3r(t) {
  let e = await WJs(t);
  if (e.kind === "refused") return { kind: "refused", message: e.detail };
  let n = e.kind === "listed" ? e.listing.createRefusal : void 0, i = n?.reason === import_chunk_3nqvc94p.X$e ? n.message : void 0;
  if (i !== void 0 && e.kind === "listed" && e.listing.projects.length === 0 && !e.listing.truncated) return { kind: "refused", message: i };
  let r = e.kind === "listed" ? { sends: t.sends, newProjectName: t.newProjectName, projects: e.listing.projects, truncated: e.listing.truncated } : { sends: t.sends, newProjectName: t.newProjectName, projects: [], truncated: false, listError: e.detail }, s = await t.requestDialog(import_chunk_0wh73s24.kQs, r, { signal: t.signal });
  switch (t.signal.throwIfAborted(), (0, import_chunk_y53wbr8a.a)("tengu_continue_in_projects_target", { choice: (0, import_chunk_78g0060s.f)(s.choice), projects_listed: r.projects.length, list_failed: r.listError !== void 0 }), s.choice) {
    case "new":
      return i === void 0 ? { kind: "new" } : { kind: "new_refused", message: i };
    case "cancel":
      return { kind: "cancelled" };
    case "existing": {
      let o = r.projects.find((l) => l.id === s.projectId);
      return o === void 0 ? { kind: "cancelled" } : { kind: "existing", project: { id: o.id, name: o.name } };
    }
  }
}
