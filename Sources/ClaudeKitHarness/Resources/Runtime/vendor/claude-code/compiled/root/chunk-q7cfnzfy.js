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
var chunk_q7cfnzfy_exports = {};
__export(chunk_q7cfnzfy_exports, {
  BAi: () => BAi,
  Jne: () => Jne,
  U5: () => U5,
  UAi: () => UAi,
  Zcs: () => Zcs,
  i9e: () => i9e,
  iAe: () => iAe,
  qol: () => qol
});
module.exports = __toCommonJS(chunk_q7cfnzfy_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var t = new import_chunk_2904xtvq.j(() => ({ clears: 0, isReported: false })), c = /^([0-9a-f-]{36})\.(0|[1-9][0-9]{0,8})$/, p = "";
function qol(o, e) {
  if (e === void 0) return;
  let n = t.of(o), [, r, d] = typeof e === "string" && c.exec(e) || [];
  if (r === void 0 || (0, import_chunk_mzmcvr6c.ht)(r) === null) {
    if (UAi(o), e !== p) (0, import_chunk_cqa9hrgx.l)("mcp_serve_child_session_id", "malformed");
    return;
  }
  let s = Number(d);
  if (s < n.clears) {
    (0, import_chunk_cqa9hrgx.l)("mcp_serve_child_session_id", "stale");
    return;
  }
  if (n.id = r, n.clears = s, !n.isReported) n.isReported = true, (0, import_chunk_cqa9hrgx.u)("mcp_serve_child_session_id");
}
function UAi(o) {
  t.of(o).id = void 0;
}
function Jne() {
  return t.of((0, import_chunk_f9x2f6cx.N)().host).id ?? (0, import_chunk_f9x2f6cx.W)();
}
function i9e(o) {
  if (o.scope !== void 0 && (0, import_chunk_xcgcdx61.Pz)(o.scope)) return true;
  return o.pluginSource !== void 0 && ((0, import_chunk_vcnr02by.IYe)(o.pluginSource) || Zcs(o));
}
function U5(o, e) {
  if (!i9e(o)) return e();
  let { pluginSource: n } = o;
  return (0, import_chunk_ch6jxpf8.cL)(e, n === void 0 ? {} : { keepsWrite: (r) => (0, import_chunk_xcgcdx61.Kt)(r) === (0, import_chunk_xcgcdx61.Kt)(n), withoutConnectionValues: !(0, import_chunk_vcnr02by.IYe)(n) && Zcs(o) });
}
function Zcs(o) {
  if (o.pluginSource === void 0) return o.scope !== void 0 && (0, import_chunk_xcgcdx61.Pz)(o.scope);
  let e = (0, import_chunk_xcgcdx61.Kt)(o.pluginSource);
  return BAi().some((n) => (0, import_chunk_xcgcdx61.Kt)(n) === e);
}
function BAi() {
  return [...(0, import_chunk_vcnr02by.dWn)() ?? [], ...(0, import_chunk_865at33z.ce)().namedByOrganization.listedPluginIds];
}
function iAe(o, e) {
  (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(o), e));
}
