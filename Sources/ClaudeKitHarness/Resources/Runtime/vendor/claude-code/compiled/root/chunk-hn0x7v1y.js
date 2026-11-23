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
var chunk_hn0x7v1y_exports = {};
__export(chunk_hn0x7v1y_exports, {
  fu: () => fu
});
module.exports = __toCommonJS(chunk_hn0x7v1y_exports);
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function fu(t, o) {
  let [e] = (0, import_chunk_bs4h6795.y)(() => ({ value: r(t) ? t() : t, sets: 0 })), [S, i] = (0, import_chunk_bs4h6795.y)(() => ({ ...e })), s = o ? o(S.value) : S.value;
  if (!Object.is(s, S.value)) i({ ...S, value: s });
  (0, import_chunk_bs4h6795.It)(() => {
    if (S.sets === e.sets) e.value = s;
  });
  let v = (0, import_chunk_bs4h6795.ye)((u) => {
    let a = l(u) ? u(e.value) : u;
    if (Object.is(a, e.value)) return;
    e.value = a, e.sets++, i({ ...e });
  }, [e]), n = (0, import_chunk_bs4h6795.ye)(() => e.value, [e]);
  return [s, v, n];
}
function r(t) {
  return typeof t === "function";
}
function l(t) {
  return typeof t === "function";
}
