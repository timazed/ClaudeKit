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
var chunk_j7ensb3k_exports = {};
__export(chunk_j7ensb3k_exports, {
  B7t: () => B7t,
  RHa: () => RHa,
  U7t: () => U7t
});
module.exports = __toCommonJS(chunk_j7ensb3k_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_rr6cvcc3 = require("/$bunfs/root/chunk-rr6cvcc3.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
function U7t(e) {
  if (!e || Object.keys(e).length === 0) return false;
  for (let n of import_chunk_xcgcdx61.Jd) {
    let o = e[n];
    if (!o || o.length === 0) continue;
    for (let r of o) if ((r.hooks?.length ?? 0) > 0) return true;
  }
  return false;
}
function RHa(e, n, o, r, l = false, u = false, p = false, k, s) {
  if (!o || Object.keys(o).length === 0) return;
  (0, import_chunk_rr6cvcc3.Ylt)(o, k);
  let i = 0;
  for (let f of import_chunk_xcgcdx61.Jd) {
    let g = o[f];
    if (!g || g.length === 0) continue;
    let c = f;
    if (l && f === "Stop") c = "SubagentStop", (0, import_chunk_w578pjby.t)(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);
    for (let m of g) {
      let S = m.matcher ?? "", a = m.hooks;
      if (!a || a.length === 0) continue;
      for (let h of a) e.add(n, c, S, h, { personal: u, checkout: p, skillRoot: s }), i++;
    }
  }
  if (i > 0) {
    if (s !== void 0) (0, import_chunk_f9x2f6cx.mf)()?.skillHooksRegistered(s, o);
    (0, import_chunk_w578pjby.t)(`Registered ${i} frontmatter hook(s) from ${r} for session ${n}`);
  }
}
function B7t(e) {
  return (0, import_chunk_wx2mpa0f.fb)() && e !== void 0 && import_chunk_xzvhvaa2.yp.has(e);
}
