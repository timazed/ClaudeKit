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
var chunk_2m7pv65a_exports = {};
__export(chunk_2m7pv65a_exports, {
  J2e: () => J2e,
  olt: () => olt
});
module.exports = __toCommonJS(chunk_2m7pv65a_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_path = require("path");
var p = 5;
class J2e extends Error {
  constructor() {
    super("OAuth refresh lock contention: another process is holding the refresh lock");
    this.name = "OauthSlotLockContendedError";
  }
}
async function olt(o, n) {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw (0, import_chunk_cqa9hrgx.m)("oauth_token_refresh", "oauth_slot_refresh_diskless"), Error("This hosted session (claude-code-server) cannot refresh an OAuth token");
  let s = (0, import_chunk_hazyxdac.KX)();
  await (0, import_chunk_w578pjby.le)().mkdir(s);
  let i = (0, import_path.join)(s, o), a = false, r, l = 0;
  while (!r) {
    l++;
    try {
      r = await (0, import_chunk_2yx6c1y2.Rc)(i, { lockfilePath: i, realpath: false, stale: 6e4, update: 5e3, onCompromised: (e) => {
        a = true, (0, import_chunk_w578pjby.t)(`OAuth refresh lock ${o} compromised: ${e.message}`, { level: "error" });
      } });
    } catch (e) {
      if (e.code === "ELOCKED") {
        if (l < p) {
          await (0, import_chunk_5appeerh.K)(1e3 + Math.random() * 1e3);
          continue;
        }
        throw new J2e();
      }
      throw e;
    }
  }
  let c = { isCompromised: () => a }, h = (0, import_chunk_865at33z.VAo)();
  try {
    return await n(c);
  } finally {
    try {
      try {
        await r();
      } catch (e) {
        (0, import_chunk_w578pjby.t)(`OAuth refresh lock ${o} release failed: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
      }
    } finally {
      h();
    }
  }
}
