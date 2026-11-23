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
var chunk_31kym834_exports = {};
__export(chunk_31kym834_exports, {
  D7n: () => D7n,
  L9t: () => L9t,
  yGs: () => yGs
});
module.exports = __toCommonJS(chunk_31kym834_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_promises = require("fs/promises");
class o {
  firedSites = /* @__PURE__ */ new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), (0, import_chunk_y53wbr8a.a)("tengu_dead_probe_adopt_ticks_token", { site: (0, import_chunk_78g0060s.f)(e) });
  }
  reset() {
    this.firedSites.clear();
  }
}
var l = new import_chunk_2904xtvq.j(() => new o());
function u() {
  return l.of((0, import_chunk_f9x2f6cx.N)().host);
}
function yGs(e) {
  u().fire(e);
}
async function D7n(e) {
  return null;
}
async function L9t(e, t, r) {
  if (r !== void 0) {
    if (await (0, import_chunk_rb36kwbn.Ef)(e, { skipCache: true }) !== r) return;
  } else if (t !== void 0) {
    if (yGs("kill_gate"), await D7n(e) !== t) return;
  } else return;
  await (0, import_chunk_865at33z.lk)(e, "SIGTERM", { groupMembersByPidToo: true }).catch(() => {
  });
}
