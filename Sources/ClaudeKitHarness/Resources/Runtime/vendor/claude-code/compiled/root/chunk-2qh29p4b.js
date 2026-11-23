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
var chunk_2qh29p4b_exports = {};
__export(chunk_2qh29p4b_exports, {
  l0t: () => l0t
});
module.exports = __toCommonJS(chunk_2qh29p4b_exports);
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var i = (0, import_chunk_t57w17k7.de)({ noted: /* @__PURE__ */ new WeakMap() }, (t) => {
  t.noted = /* @__PURE__ */ new WeakMap();
});
function l0t(t) {
  let e = [];
  for (let r of t) {
    if (!(0, import_chunk_xcgcdx61.ji)(r)) continue;
    let { config: n } = r, o = n && typeof n === "object" && "url" in n && typeof n.url === "string" ? n.url : null;
    if (o !== null && (0, import_chunk_2mwshd9r.oLl)(o)) s(n);
    if (o !== null && (0, import_chunk_2mwshd9r.MOo)(o)) e.push(r);
  }
  return e.length === 1 ? e[0] : null;
}
function s(t) {
  let e = (0, import_chunk_2mwshd9r.OOo)();
  if (i.noted.get(t) === e) return;
  i.noted.set(t, e), (0, import_chunk_y53wbr8a.a)("tengu_mcp_meta_name_hash_unfit", { lifted: e });
}
