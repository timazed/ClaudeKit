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
var chunk_rts2v6y0_exports = {};
__export(chunk_rts2v6y0_exports, {
  Pqe: () => Pqe,
  S4o: () => S4o,
  Z7l: () => Z7l,
  b4o: () => b4o,
  dnr: () => dnr,
  utt: () => utt
});
module.exports = __toCommonJS(chunk_rts2v6y0_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var Pqe = "anthropic/devicePassthrough", r = ["get_device_info", "device_bash", "list_devices", "sync_files"], _ = "Claude_Browser__", s = 128, S4o = 1, a = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(S4o), tool: (0, import_chunk_adx6804h.n)().min(1).max(s), target: (0, import_chunk_adx6804h.ie)().optional() }));
function dnr(t) {
  let e = a().safeParse(t);
  if (!e.success) return;
  let o = (0, import_chunk_syr33dp2.iwo)(e.data.target);
  return o === void 0 ? void 0 : { v: e.data.v, tool: (0, import_chunk_syr33dp2.vp)(e.data.tool, s), target: o };
}
var i = r.map(import_chunk_3f4m74y6.mT), l = `${(0, import_chunk_3f4m74y6.mT)(_)}_`;
function E(t) {
  let e = `${(0, import_chunk_3f4m74y6.mT)(t)}_`;
  return i.some((o) => e.startsWith(`${o}_`));
}
var u = /* @__PURE__ */ new Set(["computer_request_access", "computer_request_full_control", "device_request_folder_access", "device_request_delete_permission"]), d = "device_bash";
function b4o(t) {
  let e = t.lastIndexOf("__"), o = e === -1 ? t : t.slice(e + 2);
  return u.has(o) || t === d || `__${t}`.endsWith("__Claude_Browser__request_access");
}
function Z7l(t, e) {
  return e === "desktop_app" || utt(t);
}
function utt(t) {
  return !E(t) && !`${(0, import_chunk_3f4m74y6.mT)(t)}_`.startsWith(l) && !b4o(t);
}
