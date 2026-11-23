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
var chunk_qfay3gdw_exports = {};
__export(chunk_qfay3gdw_exports, {
  yVr: () => yVr
});
module.exports = __toCommonJS(chunk_qfay3gdw_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var h = ["note", "lang"], A = `Note: \`label\` was longer than ${import_chunk_r8478wtb.Toe} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`, _ = { key: "prompt", note: "Note: `prompt` was ignored. Only a read of the page itself takes it; a file or asset is not summarized." }, g = { key: "limit", note: "Note: `limit` was ignored. It does not apply to a listing of files or assets, so this listing was not shortened." }, b = { key: "label", note: "Note: `label` was ignored. It names a published version, and an asset upload makes none." }, k = /* @__PURE__ */ new Map([["read_file", _], ["read_asset", _], ["list_files", g], ["list_assets", g], ["upload_asset", b]]);
function yVr(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return null;
  let f = h.filter((n) => n in e), u = (0, import_chunk_qsvts4bv.D0e)(e), l = (0, import_chunk_ma3kja9f.T)(u) ? k.get(u.action) : void 0, i = l !== void 0 && e[l.key] !== void 0 ? l : void 0, s;
  if (i !== b && typeof e.label === "string" && (0, import_chunk_7cfjrnwy.xD)(e.label) > import_chunk_r8478wtb.Toe) {
    let n = e.label.replaceAll(`\r
`, `
`).trim(), m = (0, import_chunk_7cfjrnwy.xD)(n) > import_chunk_r8478wtb.Toe;
    s = { value: m ? (0, import_chunk_7cfjrnwy.Ea)(n, import_chunk_r8478wtb.Toe).trimEnd() : n, cut: m };
  }
  let d, p;
  if (e.action === "call_endpoint" && typeof e.body === "string") {
    let n = (0, import_chunk_xcgcdx61.Nut)((0, import_chunk_0jve1fep.et)(e.body, false)).stripped;
    if (Array.isArray(n)) d = "array";
    else if (n !== null && typeof n === "object") d = "object";
    p = n;
  }
  let a;
  if (e.action === "write_db" && typeof e.data === "string") {
    let n = (0, import_chunk_xcgcdx61.Nut)((0, import_chunk_0jve1fep.et)(e.data, false)).stripped;
    if ((0, import_chunk_ma3kja9f.T)(n)) a = n;
  }
  let r = (e.action === void 0 || e.action === "publish") && Array.isArray(e.files) && e.files.some((n) => typeof n === "string") ? e.files.map((n) => typeof n === "string" ? { path: n } : n) : void 0, c = (e.action === void 0 || e.action === "publish") && Array.isArray(e.edits) && e.edits.length === 0;
  if (f.length === 0 && d === void 0 && a === void 0 && r === void 0 && !c && s === void 0 && i === void 0) return null;
  let t = { ...e }, o = [];
  for (let n of f) delete t[n], o.push(`legacy_${n}`);
  if (d !== void 0) t.body = p, o.push(`body_json_string_to_${d}`);
  if (a !== void 0) t.data = a, o.push("data_json_string_to_object");
  if (r !== void 0) t.files = r, o.push("files_string_list");
  if (c) delete t.edits, o.push("edits_empty");
  if (s !== void 0) t.label = s.value, o.push(s.cut ? "label_clamped" : "label_trimmed");
  if (i !== void 0) delete t[i.key], o.push(`${i.key}_unread`);
  let y = i?.note ?? (s?.cut ? A : void 0);
  return { input: t, shapeClass: o.join("+"), ...y !== void 0 && { resultNote: y } };
}
