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
var chunk_rfgw2dcy_exports = {};
__export(chunk_rfgw2dcy_exports, {
  P4: () => P4,
  U2n: () => U2n,
  Zre: () => Zre,
  gfn: () => gfn,
  jme: () => jme,
  sVi: () => sVi,
  vGe: () => vGe
});
module.exports = __toCommonJS(chunk_rfgw2dcy_exports);
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var P4 = ["userSettings", "flagSettings", "policySettings"];
function vGe(e) {
  let r = new Set((0, import_chunk_xzvhvaa2.Ko)()), n = jme(e), t, s;
  for (let i of P4) {
    if (!r.has(i)) continue;
    let u = (0, import_chunk_2yx6c1y2._e)(i)?.pluginConfigs;
    for (let c of n) {
      let o = u?.[c];
      if (o?.options) t = { ...t, ...o.options };
      if (o?.mcpServers) {
        s = s ?? {};
        for (let [g, f] of Object.entries(o.mcpServers)) s[g] = { ...s[g], ...f };
      }
    }
  }
  return { options: t, mcpServers: s };
}
function jme(e) {
  let r = l.get(e);
  if (r !== void 0) return [r, e];
  let n = (0, import_chunk_xcgcdx61.EB)(e);
  if (n.length > 0) return [...n.toReversed(), e];
  let t = `@${import_chunk_xcgcdx61.$p}`, s = e.endsWith(t) ? e.slice(0, -t.length) : "";
  return s !== "" && !s.includes("@") ? [s, e] : [e];
}
var l = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => {
  e.clear();
});
function sVi(e) {
  l.clear();
  for (let [r, n] of e) l.set(r, n);
}
function gfn(e) {
  let r = new Set((0, import_chunk_xzvhvaa2.Ko)()), n;
  for (let t of P4) {
    if (!r.has(t)) continue;
    let s = Zre((0, import_chunk_2yx6c1y2._e)(t)?.enabledPlugins, e);
    if (s !== void 0) n = s;
  }
  return n;
}
function U2n(e, r) {
  let n = (0, import_chunk_xcgcdx61.tC)(r), t = (0, import_chunk_xcgcdx61.EB)(n);
  if (t.length === 0) return { deciding: r, written: r, replaced: [] };
  let s = t.filter((i) => e?.[i] !== void 0);
  return { deciding: e?.[n] === void 0 ? s[0] ?? n : n, written: n, replaced: s };
}
function Zre(e, r) {
  let n = (0, import_chunk_xcgcdx61.tC)(r);
  return [n, ...(0, import_chunk_xcgcdx61.EB)(n), r].map((t) => e?.[t]).find((t) => t !== void 0);
}
