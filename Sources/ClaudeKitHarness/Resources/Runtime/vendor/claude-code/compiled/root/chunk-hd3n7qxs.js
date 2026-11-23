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
var chunk_hd3n7qxs_exports = {};
__export(chunk_hd3n7qxs_exports, {
  zzs: () => zzs
});
module.exports = __toCommonJS(chunk_hd3n7qxs_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_pbbjnb48 = require("/$bunfs/root/chunk-pbbjnb48.js");
var d = 3e3;
function zzs(e = {}) {
  let r = e.firstFlagFetchWaitMs ?? d, o = false, n;
  return { get ready() {
    return o;
  }, whenReady: () => n ??= f(r).then(() => {
    o = true, c();
  }) };
}
async function f(e) {
  let r = performance.now();
  try {
    (0, import_chunk_6zh1j84y.y1)();
  } catch (a) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(a));
  }
  let o = false, [n, m, l, g] = await Promise.all([s("the plugin-hook registration pass", async () => {
    await (0, import_chunk_bzyb60p0.TNt)();
  }), s("the remote managed-settings load", import_chunk_w58msjm6.mq), s("the policy-limits load", import_chunk_7q6ee47s.Zh), s("the first flag fetch", async () => {
    let { timedOut: a } = await (0, import_chunk_pbbjnb48.Ibe)({ initialize: import_chunk_865at33z.ci, budgetMs: e });
    o = !a;
  })]);
  (0, import_chunk_w578pjby.t)(`[remote-tools] ready to judge calls after ${Math.round(performance.now() - r)}ms: waited ${n}ms for plugin hooks, ${m}ms for remote managed settings, ${l}ms for policy limits, ${g}ms for the first flag fetch (${o ? "landed" : "not heard in time"})`);
}
async function s(e, r) {
  let o = performance.now();
  try {
    await r();
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`[remote-tools] waiting for ${e} failed; serving goes on without it`, { level: "error" }), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n));
  }
  return Math.round(performance.now() - o);
}
async function c() {
  try {
    let e = await (0, import_chunk_bzyb60p0.Dno)() ?? await (0, import_chunk_bzyb60p0.Lno)();
    if (e !== void 0) (0, import_chunk_w578pjby.t)(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`, { level: "error" });
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
}
