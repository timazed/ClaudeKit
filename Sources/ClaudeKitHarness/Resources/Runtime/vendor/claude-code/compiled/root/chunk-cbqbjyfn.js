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
var chunk_cbqbjyfn_exports = {};
__export(chunk_cbqbjyfn_exports, {
  K1a: () => K1a,
  _ri: () => _ri,
  cYr: () => cYr,
  gri: () => gri
});
module.exports = __toCommonJS(chunk_cbqbjyfn_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_x98x5a0q = require("/$bunfs/root/chunk-x98x5a0q.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
function I() {
  return (0, import_chunk_3t7ve0wy.Li)() === "claude-desktop" && (0, import_chunk_2yx6c1y2.VJi)();
}
function gri(e, r) {
  let o = r?.experimental?.[import_chunk_ts09sys6.fTr];
  return e.type === "sdk" && typeof o === "object" && o !== null && "showsConnectorsOff" in o && o.showsConnectorsOff === true && I();
}
function cYr(e) {
  try {
    return (e.errorCode === import_chunk_xfj2cwfv.Imn ? I() : gri(e.config, e.capabilities)) ? "left_out" : "kept";
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`MCP server "${e.name}": could not read disableClaudeAiConnectors from the managed sources: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" }), "unreadable";
  }
}
var R = "tengu_compiled_harp", O = { key: "claude_outputs_are_stored", askedBy: (e) => e?.["anthropic/readsStoredAhead"] === true }, F = 7e3, L = 3, W = new import_chunk_pzzqg6s3.ze(() => ({}));
function K1a(e, r) {
  if (e.name !== import_chunk_qdcbcsg7.zde && e.name !== import_chunk_qdcbcsg7.f7i) return;
  let o = e.call;
  e.call = async (_, s, ...n) => {
    let a = e.name === import_chunk_qdcbcsg7.zde && O.askedBy(r) && s.permissionPhase?.pipeline?.result.behavior === "allow", p = await _ri(e, _, s, a);
    return o(a ? { ...(0, import_chunk_qwbhh2k3.Pn)(_, O.key), ...p && { [O.key]: true } } : _, s, ...n);
  };
}
async function _ri(e, r, o, _ = false) {
  let { toolUseId: s } = o, n = e.name === import_chunk_qdcbcsg7.f7i, a = false;
  try {
    let p = W.peek(o.session)?.store;
    if (p === void 0 || !n && e.name !== import_chunk_qdcbcsg7.zde || !(0, import_chunk_0jve1fep.Le)(r)) return false;
    let S = n ? r.paths : r.files;
    if (!Array.isArray(S) || n && S.length !== 1) return false;
    let g = (0, import_chunk_4smdap7r.M)(S.flatMap((E) => {
      let T = n ? E : (0, import_chunk_0jve1fep.Le)(E) && E.stagedPath, k = typeof T === "string" ? import_path.posix.normalize(T) : "";
      return k.startsWith(`${import_chunk_6mfepmbb.qR}/`) ? [k.slice(import_chunk_6mfepmbb.qR.length + 1)] : [];
    }));
    if (g.length === 0 || (0, import_chunk_865at33z.b)(R, false) !== true) return false;
    let y = o.abortController.signal, w = AbortSignal.any([y, AbortSignal.timeout(F)]), v = Date.now();
    if (s !== void 0) o.markToolCallRunning?.(s, false);
    let c = await (0, import_chunk_5appeerh.Tn)(p(g, { signal: w, wordIsWanted: n || _ && g.length >= L }), w, () => Error("the wait is over")).catch(() => "no_answer");
    if (y.aborted) return false;
    if (s !== void 0) o.markToolCallRunning?.(s);
    let C = n ? "pane_upload_file_stored_first" : "device_copy_files_stored_first", h = { count: g.length, duration_ms: Date.now() - v };
    if (c === "none_waiting" || c === "stored") return (0, import_chunk_cqa9hrgx.u)(C, { ...h, reason: (0, import_chunk_78g0060s.f)(c) }), true;
    if (a = n && c === "still_waiting" && !g.some(import_chunk_x98x5a0q.uYr), a) (0, import_chunk_cqa9hrgx.m)(C, c, h);
    else (0, import_chunk_cqa9hrgx.l)(C, c, h);
  } catch (p) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(p));
  }
  if (!a) return false;
  throw new import_chunk_jv7av99m.A("Nothing was uploaded: this session's file store may not have the newest version of this file yet. Make sure nothing is still writing the file or holding it open, wait ten seconds, and call file_upload again. If you get this error again, tell the user that the file could not be uploaded yet.", "browser pane file_upload refused before reaching the desktop app: the file store may not have the newest version yet");
}
