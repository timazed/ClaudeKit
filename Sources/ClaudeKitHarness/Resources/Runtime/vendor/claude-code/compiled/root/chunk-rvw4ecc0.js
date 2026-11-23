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
var chunk_rvw4ecc0_exports = {};
__export(chunk_rvw4ecc0_exports, {
  G7r: () => G7r,
  Gsi: () => Gsi,
  Tsr: () => Tsr
});
module.exports = __toCommonJS(chunk_rvw4ecc0_exports);
var import_chunk_kvvabk01 = require("/$bunfs/root/chunk-kvvabk01.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_promises = require("fs/promises");
function Gsi(r) {
  let e = (0, import_chunk_kvvabk01.ZUt)(), o = e?.serves?.(r) ? e.answers : void 0;
  return o && ((n, i) => o(new Request(n, i)));
}
async function G7r(r, e) {
  let o = await Tsr(r);
  return e && o.tls ? { ...o, tls: (0, import_chunk_6mfepmbb.cf)(o.tls, "ca") } : o;
}
async function Tsr(r) {
  if ((0, import_chunk_kvvabk01.ZUt)()?.serves?.(r)) return { ...(0, import_chunk_3jjr3wje.wl)({ url: r }), proxy: false, redirect: "error" };
  if (!(0, import_chunk_3jjr3wje.DE)()) {
    let e = (0, import_chunk_r6r2wdsw.IVt)();
    if (e.HTTPS_PROXY && URL.parse(r)?.protocol === "https:") {
      let o = { url: e.HTTPS_PROXY, noProxy: e.NO_PROXY }, n = (0, import_chunk_3jjr3wje.wl)({ url: r, fallbackProxy: o });
      if (n.proxy === void 0 || !e.SSL_CERT_FILE) return n;
      let i;
      try {
        i = await (0, import_promises.readFile)(e.SSL_CERT_FILE, "utf8");
      } catch (s) {
        (0, import_chunk_w578pjby.t)(`MCP agent-proxy fallback: failed to read CA bundle: ${s instanceof Error ? s.message : String(s)}`, { level: "warn" });
      }
      return (0, import_chunk_3jjr3wje.wl)({ url: r, fallbackProxy: { ...o, ca: i } });
    }
  }
  return (0, import_chunk_3jjr3wje.wl)({ url: r });
}
