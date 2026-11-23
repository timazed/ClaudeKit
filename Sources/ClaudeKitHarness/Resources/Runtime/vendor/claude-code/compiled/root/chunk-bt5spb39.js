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
var chunk_bt5spb39_exports = {};
__export(chunk_bt5spb39_exports, {
  Koi: () => Koi,
  Qtt: () => Qtt,
  sBa: () => sBa
});
module.exports = __toCommonJS(chunk_bt5spb39_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_gk0jv3qt = require("/$bunfs/root/chunk-gk0jv3qt.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var Koi = "anthropic/workingToken", Qtt = new import_chunk_pzzqg6s3.ze(() => ({ noLongerLive: /* @__PURE__ */ new Set() }));
function sBa(i, s) {
  if (s.name !== import_chunk_qdcbcsg7.ri || !(0, import_chunk_f9x2f6cx.Y)()) return;
  let d = i.call;
  i.call = async (n, e, r, a, l, t) => {
    let f = Qtt.peek(e.session), p = i.mcpInfo?.toolName ?? "";
    await f?.textTakenBack?.(p, n, e.toolUseId, e.agentId);
    let o = (0, import_chunk_gk0jv3qt.wUe)(import_chunk_gk0jv3qt.pq.peek(e.session)?.host, s)?.serverId === import_chunk_qdcbcsg7.aO ? await f?.savesSettled?.(p, n) : void 0;
    if (o === void 0) return d(n, e, r, a, l, t);
    let { signal: m } = e.abortController, u = m.aborted, c = false;
    try {
      let k = await d(n, e, r && (async (...v) => (await o.asking(), r(...v))), a, l, o.token === void 0 ? t : { ...t, mcpCallMeta: { ...t?.mcpCallMeta, [Koi]: o.token } });
      return c = true, k;
    } finally {
      o.release(c || m.aborted && !u);
    }
  };
}
