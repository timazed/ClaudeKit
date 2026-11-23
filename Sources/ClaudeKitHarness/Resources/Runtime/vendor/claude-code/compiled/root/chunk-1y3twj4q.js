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
var chunk_1y3twj4q_exports = {};
__export(chunk_1y3twj4q_exports, {
  R8o: () => R8o,
  jsi: () => jsi,
  qBa: () => qBa,
  y0t: () => y0t
});
module.exports = __toCommonJS(chunk_1y3twj4q_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_util = require("util");
function jsi() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_OWN_CONNECTION_POOL || (0, import_chunk_865at33z.b)("tengu_reactive_quilt", false);
}
async function y0t(e, n = {}) {
  if (n.proxy !== void 0 || (0, import_chunk_r6r2wdsw.Uy)() !== "hosted_worker" || !jsi()) return (0, import_chunk_865at33z.RNe)(String(e), n, void 0);
  let o = (0, import_chunk_3jjr3wje.lO)(void 0).tls;
  if ((0, import_util.isDeepStrictEqual)(n.tls, o)) return (0, import_chunk_865at33z.RNe)(String(e), n, () => true);
  let r = new Set([o?.ca ?? []].flat()), c = [n.tls?.ca ?? []].flat().filter((f) => r.has(f));
  if (c.length === 0) throw Error("MCP request not sent: its list of trusted CA certificates has nothing in common with the one Claude Code uses now, most likely because Claude Code's TLS settings changed after the server connected. Reconnect the server to use the new settings.");
  return fetch(String(e), { ...n, tls: { ...o, ca: c } });
}
function R8o(e, n) {
  let r = (0, import_chunk_865at33z.b)("tengu_violin_pochette", false) ? (0, import_chunk_865at33z.rPr)("ccr", n, e) : void 0;
  return r ? r(e) : fetch(e, n);
}
function qBa() {
  try {
    let e = (0, import_chunk_3jjr3wje.XVt)("ccr");
    if (e && (0, import_chunk_3jjr3wje.qhn)("ccr", e)) (0, import_chunk_w578pjby.t)("[SessionsV2Client] Closed the idle connections to the session service, which may have died silently; the next request opens a new one");
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
