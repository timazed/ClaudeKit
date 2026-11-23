const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_p771w8k0_exports = {};
__export(chunk_p771w8k0_exports, {
  FWn: () => FWn,
  OTr: () => OTr,
  PTr: () => PTr,
  eEo: () => eEo
});
module.exports = __toCommonJS(chunk_p771w8k0_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_kbsax5x5 = require("/$bunfs/root/chunk-kbsax5x5.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_9x0gppnz = require("/$bunfs/root/chunk-9x0gppnz.js");
var import_chunk_amkshz08 = require("/$bunfs/root/chunk-amkshz08.js");
var import_chunk_9m1fff32 = require("/$bunfs/root/chunk-9m1fff32.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
class l {
  settingsLoaded = false;
  helperResult = null;
  claimSettingsLoad() {
    if (this.settingsLoaded) return false;
    return this.settingsLoaded = true, true;
  }
  beginHelperRun() {
    return this.helperResult = { error: null }, this.helperResult;
  }
}
var p = new import_chunk_2904xtvq.j(() => new l());
function n() {
  return p.of((0, import_chunk_f9x2f6cx.N)().host);
}
async function FWn(t) {
  if (!n().claimSettingsLoad()) return;
  (0, import_chunk_9x0gppnz.uks)();
  let e = (0, import_chunk_m15w38ag.ne)() ? t?.backend : void 0;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) {
    let [{ seedUserSettings: o }, { primeWindowsCredManBackendEnabled: i }, { primeRemoteManagedSettingsCache: a }, { primeWorkspaceRoots: r }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-9wejjx59.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7cs3xtzd.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7xj0ydrx.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-27qns8bd.js")))]);
    await r(e), await Promise.all([(0, import_chunk_865at33z.cmn)(e), o(e, (0, import_chunk_r3mm3x33.Br)())]), i((0, import_chunk_9m1fff32.vz)((0, import_chunk_865at33z.ge)())?.tengu_windows_credman === true), await a(e);
  } else await (0, import_chunk_865at33z.cmn)();
  if (await (0, import_chunk_2yx6c1y2.lut)(), await (0, import_chunk_tvttgr51.pJe)("startup"), await (0, import_chunk_kbsax5x5.OMr)(import_chunk_kbsax5x5.pXi), (0, import_chunk_m15w38ag.ne)() && e !== void 0) {
    let [{ credentialsStoreFor: o }, { primeFileDescriptorCredentials: i }, { primeStoredLoginCopy: a }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-jzzag22w.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-h3h0a6r5.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3n4jnb8b.js")))]), r = o(e);
    if (r !== void 0) await i(r, { backgroundAuthSnapshot: "leave" }), await a(r);
  }
  if ((0, import_chunk_f9x2f6cx.s3t)(import_chunk_tp0b74sz.tut), (0, import_chunk_5e3gtsn9.w9)(), await (0, import_chunk_865at33z.ioe)()) (0, import_chunk_5e3gtsn9.w9)();
  let s = (0, import_chunk_amkshz08.HEl)();
  if (s) process.stderr.write(`${s}
`), process.exit(1);
}
function PTr() {
  return n().helperResult?.error ?? null;
}
async function eEo() {
  let t = n();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (e.error = await (0, import_chunk_2yx6c1y2.uKn)((0, import_chunk_2yx6c1y2.Cz)(), (0, import_chunk_2yx6c1y2.Dee)(), (0, import_chunk_2yx6c1y2.tce)()), (0, import_chunk_2yx6c1y2.Qde)()) (0, import_chunk_5e3gtsn9.w9)();
  return e.error;
}
async function OTr(t) {
  return await FWn(t), eEo();
}
