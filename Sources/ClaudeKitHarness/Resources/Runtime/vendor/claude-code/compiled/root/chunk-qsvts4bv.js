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
var chunk_qsvts4bv_exports = {};
__export(chunk_qsvts4bv_exports, {
  D$n: () => D$n,
  D0e: () => D0e,
  Vpe: () => Vpe,
  cFi: () => cFi,
  dRe: () => dRe,
  oat: () => oat,
  ogl: () => ogl,
  vln: () => vln
});
module.exports = __toCommonJS(chunk_qsvts4bv_exports);
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
function c(t) {
  return typeof t === "object" && t !== null && !Array.isArray(t) ? t : null;
}
function n(t, ...e) {
  let r = { ...t };
  for (let s of e) delete r[s];
  return r;
}
function a(t) {
  return typeof t === "string";
}
function i(t) {
  return a(t.from_url) || Array.isArray(t.asset_ids);
}
var ogl = ["read_file", "read_asset", "describe_type", "list_files", "list_assets", "list_types", "upload_asset", "delete_asset", "copy_from"], Vpe = { comments: "comments", reply: "comments", resolve: "comments", watch: "comments", unwatch: "comments", status: "comments", resume_replies: "comments", read_db: "data", write_db: "data", verify: "check", preview: "check" };
function D$n(t) {
  return Object.hasOwn(Vpe, t);
}
var cFi = ["set", "update", "str_replace", "delete", "batch"], u = new Set(cFi);
function D0e(t) {
  let e = c(t);
  if (e === null) return t;
  let r = e.action;
  if (r === void 0 || r === "publish") {
    if (e.asset === true) return i(e) ? { ...n(e, "asset"), action: "copy_from" } : { ...n(e, "asset"), action: "upload_asset" };
    return "asset" in e ? n(e, "asset") : t;
  }
  if (r === "read") {
    if (a(e.type_url) && e.url === void 0) return { ...e, action: "describe_type" };
    if (a(e.path)) return import_chunk_r8478wtb.ey.test(e.path) ? { ...n(e, "path"), action: "read_asset", asset_id: e.path } : { ...e, action: "read_file" };
    if (Array.isArray(e.paths)) return { ...e, action: "read_file" };
    return t;
  }
  if (r === "list") {
    if (e.scope === "types") return { ...n(e, "scope"), action: "list_types" };
    if (e.scope === "files") return { ...n(e, "scope"), action: "list_files" };
    if (e.scope === "assets") return { ...n(e, "scope"), action: "list_assets" };
    return t;
  }
  if (r === "delete" && a(e.path)) return { ...n(e, "path"), action: "delete_asset", asset_id: e.path };
  return t;
}
function dRe(t) {
  let e = c(t);
  if (e === null) return t;
  switch (e.action) {
    case "upload_asset":
      return a(e.file_path) || Array.isArray(e.file_paths) ? { ...e, action: "publish", asset: true } : t;
    case "copy_from":
      return i(e) ? { ...e, action: "publish", asset: true } : t;
    case "describe_type":
      return a(e.type_url) && e.url === void 0 ? { ...e, action: "read" } : t;
    case "read_file":
      return a(e.path) || Array.isArray(e.paths) ? { ...e, action: "read" } : t;
    case "read_asset":
      return a(e.asset_id) ? { ...n(e, "asset_id"), action: "read", path: e.asset_id } : t;
    case "list_types":
      return { ...e, action: "list", scope: "types" };
    case "list_files":
      return { ...e, action: "list", scope: "files" };
    case "list_assets":
      return { ...e, action: "list", scope: "assets" };
    case "delete_asset":
      return a(e.asset_id) ? { ...n(e, "asset_id"), action: "delete", path: e.asset_id } : t;
    default:
      return t;
  }
}
function oat(t, e) {
  let r = c(e);
  if (r === null) return e;
  let s = r.action;
  if (t === "comments") {
    if (s === "read") return { ...r, action: "comments" };
    if (s === "watch") {
      let o = n(r, "on", "replies");
      if (r.replies === true) return { ...o, action: "resume_replies" };
      if (r.on === false) return { ...o, action: "unwatch" };
      if (r.url === void 0) return { ...o, action: "status" };
      return { ...o, action: "watch" };
    }
    return e;
  }
  if (t === "data") {
    if (s === "get" || s === "list" || s === "query" || s === "profiles") return { ...r, action: "read_db", db_op: s };
    if (u.has(s)) return { ...r, action: "write_db", db_op: s };
    return e;
  }
  return e;
}
function vln(t, e) {
  let r = c(e);
  if (r === null) return e;
  let s = r.action;
  if (t === "comments") switch (s) {
    case "comments":
      return { ...r, action: "read" };
    case "watch":
      return { ...r, action: "watch" };
    case "unwatch":
      return { ...r, action: "watch", on: false };
    case "status":
      return { ...n(r, "url"), action: "watch" };
    case "resume_replies":
      return { ...r, action: "watch", replies: true };
    default:
      return e;
  }
  if (t === "data") {
    if ((s === "read_db" || s === "write_db") && a(r.db_op)) return { ...n(r, "db_op"), action: r.db_op };
    return e;
  }
  return e;
}
