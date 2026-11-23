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
var chunk_etm3ds6a_exports = {};
__export(chunk_etm3ds6a_exports, {
  $ht: () => $ht,
  cYs: () => cYs,
  dYs: () => dYs,
  fYs: () => fYs,
  lYs: () => lYs,
  pYs: () => pYs,
  uYs: () => uYs
});
module.exports = __toCommonJS(chunk_etm3ds6a_exports);
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_f2cpz56c = require("/$bunfs/root/chunk-f2cpz56c.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_3syjdhqg = require("/$bunfs/root/chunk-3syjdhqg.js");
var import_chunk_7xxwg4th = require("/$bunfs/root/chunk-7xxwg4th.js");
var import_chunk_v6ydqhmr = require("/$bunfs/root/chunk-v6ydqhmr.js");
var import_chunk_3fq6bcrw = require("/$bunfs/root/chunk-3fq6bcrw.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var pYs = {};
(0, import_chunk_w1d7ygsk.jr)(pYs, { default: () => pYs, earlyCredentialsOf: () => lYs, hostProxyAuthConfigured: () => cYs, personProxyAuthHelper: () => dYs, proxyAgentsInstalled: () => uYs, sessionFactsRestored: () => $ht, signInRestored: () => fYs });
function lYs(e) {
  return e?.backend !== void 0 && (0, import_chunk_2gtmjt3y.qOe)(e.configHome) ? (0, import_chunk_f2cpz56c.JH)(e?.backend) : void 0;
}
function dYs() {
  let e = (0, import_chunk_2yx6c1y2._e)("policySettings")?.proxyAuthHelper, t = (0, import_chunk_xzvhvaa2.rn)("userSettings") ? (0, import_chunk_2yx6c1y2._e)("userSettings")?.proxyAuthHelper : void 0;
  return { helper: e ?? t, fromProjectOrLocal: e === void 0 && t !== void 0 && ((0, import_chunk_2yx6c1y2.vl)("projectSettings")?.proxyAuthHelper === t || (0, import_chunk_2yx6c1y2.vl)("localSettings")?.proxyAuthHelper === t), trustAccepted: import_chunk_865at33z.Yi, sources: "personAndPolicy", startHelper: import_chunk_865at33z.F7e, readAsHelperStarts: import_chunk_865at33z.Dzt };
}
var s = `a proxy helper set by this project is not run by this command
`;
function cYs() {
  let e = (0, import_chunk_3t7ve0wy.IB)(), r = e && Boolean(process.stderr.isTTY) && ((0, import_chunk_2yx6c1y2._e)("projectSettings")?.proxyAuthHelper !== void 0 || (0, import_chunk_2yx6c1y2._e)("localSettings")?.proxyAuthHelper !== void 0);
  if (e) (0, import_chunk_3jjr3wje.FMr)(dYs());
  if (r) process.stderr.write(s);
}
var p = "Error: the proxy setting named above is refused.";
function uYs() {
  let e = (0, import_chunk_3jjr3wje.rL)(), r = e !== void 0 && !(0, import_chunk_3jjr3wje.oL)(e.value);
  return (0, import_chunk_3jjr3wje.Cw)(), r ? { reason: p, kind: "lasting" } : null;
}
function fYs(e) {
  let r = Boolean(process.stderr.isTTY) || !(0, import_chunk_f9x2f6cx.Se)();
  return (0, import_chunk_v6ydqhmr.oer)(lYs(e), () => r);
}
async function $ht(e) {
  let r = await Promise.resolve().then(import_chunk_3fq6bcrw.n7t).then(() => Promise.all([(0, import_chunk_3jjr3wje.eEe)(), (0, import_chunk_3jjr3wje.Hoe)()])).then(import_chunk_7xxwg4th.Nlo).then(cYs).then(() => fYs(e)).then(() => null, import_chunk_3syjdhqg.jVo), t = await Promise.resolve().then(uYs).catch(import_chunk_3syjdhqg.jVo);
  return r ?? t;
}
