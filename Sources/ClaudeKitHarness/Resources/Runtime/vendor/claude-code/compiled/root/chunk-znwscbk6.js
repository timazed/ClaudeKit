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
var chunk_znwscbk6_exports = {};
__export(chunk_znwscbk6_exports, {
  TWo: () => TWo,
  ZIt: () => ZIt,
  xkn: () => xkn
});
module.exports = __toCommonJS(chunk_znwscbk6_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var p = import_chunk_bzyb60p0.Uno.filter((e) => e !== "userSettings"), i = { projectSettings: ".claude/settings.json", localSettings: ".claude/settings.local.json" };
function ZIt(e) {
  if ((0, import_chunk_gbskgz33.yws)()) return false;
  if ((0, import_chunk_gbskgz33.rWn)()) return true;
  let o = import_chunk_xzvhvaa2.WA.filter((r) => !(0, import_chunk_xzvhvaa2.rn)(r)).map((r) => i[r]);
  return (e ?? xkn()).some((r) => !o.includes(r));
}
function xkn(e = TWo()) {
  let o = [...e];
  if (l("project")) o.push(".mcp.json");
  if (l("local")) o.push(`${(0, import_chunk_c203g5kd.ry)()} (local-scope MCP servers for this project)`);
  return o;
}
function c(e, o) {
  if ((0, import_chunk_wj4me9k5.bj)()) return false;
  let r = o?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, a]) => {
    if (Object.hasOwn(r, t)) return false;
    let s = a.source;
    if (s.source === "url") return !!s.headersHelper && /^https:\/\//i.test(s.url) && (0, import_chunk_wj4me9k5.wm)(s) && !u(t, s.url);
    if (s.source === "settings") return (0, import_chunk_wj4me9k5.wm)(s) && !f(t) && s.plugins.some((n) => !!n.headersHelper && typeof n.source === "object" && n.source.source === "archive" && !(0, import_chunk_wj4me9k5.lS)(`${n.name}@${t}`));
    return false;
  });
}
function u(e, o) {
  let r = (0, import_chunk_xzvhvaa2.Ko)();
  if (p.some((t) => r.includes(t) && Object.hasOwn((0, import_chunk_2yx6c1y2._e)(t)?.extraKnownMarketplaces ?? {}, e))) return true;
  return (0, import_chunk_bzyb60p0.rmi)({ source: "url", url: o }, e) !== void 0;
}
function f(e) {
  return Object.hasOwn((0, import_chunk_bzyb60p0._A)(), e);
}
function l(e) {
  if ((0, import_chunk_f9x2f6cx.rE)() || (0, import_chunk_bzyb60p0.yh)()) return false;
  let { servers: o } = (0, import_chunk_bzyb60p0.F_)(e, { expandVars: false });
  return Object.entries(o).some(([r, t]) => "headersHelper" in t && !!t.headersHelper && !(e === "project" && (0, import_chunk_bzyb60p0.Fnt)(r) === "rejected") && ((0, import_chunk_418mqjww.zoe)(t.url) || (0, import_chunk_bzyb60p0.gC)(r, t)));
}
function TWo() {
  if ((0, import_chunk_f9x2f6cx.XM)()) return [];
  let e = [];
  if (!(0, import_chunk_2yx6c1y2.vm)() && c((0, import_chunk_2yx6c1y2.vl)("projectSettings"), (0, import_chunk_2yx6c1y2._e)("localSettings"))) e.push(i.projectSettings);
  if (c((0, import_chunk_2yx6c1y2.vl)("localSettings"))) e.push(i.localSettings);
  return e;
}
