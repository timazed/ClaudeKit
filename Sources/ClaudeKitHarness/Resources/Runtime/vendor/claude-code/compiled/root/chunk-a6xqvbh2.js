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
var chunk_a6xqvbh2_exports = {};
__export(chunk_a6xqvbh2_exports, {
  Ayr: () => Ayr,
  J9e: () => J9e,
  NH: () => NH,
  Q9e: () => Q9e
});
module.exports = __toCommonJS(chunk_a6xqvbh2_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var u = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ file_uuid: (0, import_chunk_adx6804h.n)(), file_name: (0, import_chunk_adx6804h.n)(), is_image: (0, import_chunk_adx6804h.P)().nullish(), sha256: (0, import_chunk_adx6804h.n)().nullish().catch(null), file_size: (0, import_chunk_adx6804h.E)().nullish().catch(void 0), from_connector: (0, import_chunk_adx6804h.P)().nullish().catch(true), project_folder_name: (0, import_chunk_adx6804h.n)().nullish().catch(void 0), from_connector_marker: (0, import_chunk_adx6804h.n)().nullish().catch(void 0) })), i = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ from_connector: (0, import_chunk_adx6804h.P)().nullish().catch(true) })), l = 256;
function NH(e) {
  if (typeof e !== "object" || e === null || !("file_attachments" in e)) return [];
  return r(e.file_attachments);
}
function r(e) {
  if (!Array.isArray(e)) return [];
  let t = u();
  return e.slice(0, l).flatMap((a) => {
    let o = t.safeParse(a);
    return o.success ? [o.data] : [];
  });
}
function J9e(e) {
  if (typeof e !== "object" || e === null || !("silent_resend_of" in e) || typeof e.silent_resend_of !== "string" || e.silent_resend_of === "" || !("silent_resend_files" in e) || "file_attachments" in e || Ayr(e) === false) return [];
  return r(e.silent_resend_files).filter((t) => t.sha256 === void 0);
}
function Q9e(e) {
  return NH(e).some((t) => t.from_connector === true) || J9e(e).some((t) => t.from_connector === true) || i().safeParse(e).data?.from_connector === true;
}
var s = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ shouldQuery: (0, import_chunk_adx6804h.P)().optional() }));
function Ayr(e) {
  return s().safeParse(e).data?.shouldQuery;
}
