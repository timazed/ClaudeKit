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
var chunk_25jvqwgs_exports = {};
__export(chunk_25jvqwgs_exports, {
  A2r: () => A2r,
  C2r: () => C2r,
  E2r: () => E2r,
  I2r: () => I2r,
  O2r: () => O2r,
  P2r: () => P2r,
  R2r: () => R2r,
  T2r: () => T2r,
  _6s: () => _6s,
  g6s: () => g6s,
  h6s: () => h6s,
  k2r: () => k2r,
  v2r: () => v2r,
  w2r: () => w2r,
  x2r: () => x2r,
  y6s: () => y6s
});
module.exports = __toCommonJS(chunk_25jvqwgs_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_etm3ds6a = require("/$bunfs/root/chunk-etm3ds6a.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_pbbjnb48 = require("/$bunfs/root/chunk-pbbjnb48.js");
var import_chunk_9m1fff32 = require("/$bunfs/root/chunk-9m1fff32.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var y6s = {};
(0, import_chunk_w1d7ygsk.jr)(y6s, { IS_WORKTREE_LAUNCH: () => w2r, SAVE_FAILURE: () => P2r, SIGN_IN_MARGIN_MS: () => v2r, default: () => y6s, earlyFetchVetoed: () => E2r, fetchRefreshesSignIn: () => C2r, flagClientQuieted: () => A2r, isSavedSwitchOf: () => x2r, pluginTestFormOf: () => h6s, pluginTestGatesOf: () => g6s, pluginTestRefusal: () => _6s, savedFlags: () => R2r, sessionHoldsEarlyFetch: () => k2r, signInNearsExpiry: () => T2r, switchFetched: () => I2r, switchSaveSettled: () => O2r });
function h6s(o) {
  let e = o[0] === "--file", r = o.some((s) => s.startsWith("-"));
  return e ? "file" : r ? "other" : "run";
}
var w2r = false;
async function k2r() {
  let o = (0, import_chunk_2yx6c1y2.Cz)();
  return (0, import_chunk_2yx6c1y2.Qde)() || o?.policyHelpers != null || o?.policyHelper != null || Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-6x8dxh29.js"))).then((e) => e.pendingSettingsEnvBlocksEarlyFlagFetch(w2r));
}
var E2r = () => Promise.resolve().then(k2r).catch(() => true);
var v2r = 6e4;
async function T2r() {
  let o = await (0, import_chunk_865at33z.pp)();
  return o !== null && (0, import_chunk_865at33z.NR)(o.expiresAt, Date.now() + v2r);
}
var C2r = () => Promise.resolve().then(() => (0, import_chunk_865at33z.cl)() || T2r()).catch(() => true);
function A2r() {
  if ((0, import_chunk_865at33z.Wdt)()) (0, import_chunk_865at33z.ci)().then(import_chunk_865at33z.qzn, import_chunk_865at33z.qzn);
}
(0, import_chunk_adx6804h.B)();
var R2r = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ cachedFeatureFlags: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), cachedGrowthBookFeatures: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() }));
function x2r(o) {
  let e = R2r().safeParse(o), r = e.success ? (0, import_chunk_9m1fff32.vz)(e.data)?.[import_chunk_865at33z.uk] : void 0;
  return typeof r === "boolean" ? r : import_chunk_m3wvjg0t.YF;
}
var P2r = "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";
async function O2r() {
  return await (0, import_chunk_5appeerh.me)((0, import_chunk_865at33z.Gdt)(), import_chunk_pbbjnb48.gU), (0, import_chunk_2mwkxzk6.dmr)() && (0, import_chunk_m3wvjg0t.SE)() && !(0, import_chunk_2mwkxzk6.hls)() && !x2r(await (0, import_chunk_865at33z.Cke)(void 0)) ? P2r : null;
}
var I2r = () => (0, import_chunk_2mwkxzk6.KVl)().finally(A2r).then(O2r).catch((o) => ((0, import_chunk_w578pjby.t)("claude plugin test: the hold for the rollout flag failed: " + (0, import_chunk_jv7av99m.d)(o), { level: "error" }), null));
async function g6s({ helperError: o, form: e, envPin: r }) {
  if (e === "file") (0, import_chunk_2mwkxzk6.zVl)();
  let s = o === null && e === "run", i = s ? (await (0, import_chunk_etm3ds6a.$ht)(r))?.reason ?? null : o, a = s && i === null && !(0, import_chunk_2mwkxzk6.dmr)() && !await E2r() && !await C2r() ? await I2r() : null;
  return await (0, import_chunk_m3wvjg0t.y1t)(), { helperError: i ?? a, isRolloutOn: (0, import_chunk_m3wvjg0t.SE)(), isSwitchSaved: (0, import_chunk_2mwkxzk6.Got)(), canLoadUserModules: (0, import_chunk_m3wvjg0t.i0n)() };
}
function _6s({ helperError: o, isRolloutOn: e, isSwitchSaved: r, canLoadUserModules: s }) {
  if (o !== null) return o;
  if (!e) return r ? `hooks modules are turned off in this process: ${import_chunk_2mwkxzk6._1t.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely` : `hooks modules are turned off in this process: ${import_chunk_2mwkxzk6._1t.served}, and a plugin's tests run only while it is on`;
  return s ? void 0 : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}
