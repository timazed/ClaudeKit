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
var chunk_hsfenxnq_exports = {};
__export(chunk_hsfenxnq_exports, {
  Aan: () => Aan,
  Can: () => Can,
  D1n: () => D1n,
  H1n: () => H1n,
  Ix: () => Ix,
  Khs: () => Khs,
  Nit: () => Nit,
  PDi: () => PDi,
  Ran: () => Ran,
  T8e: () => T8e,
  Vhs: () => Vhs,
  ZBt: () => ZBt,
  _0: () => _0,
  dV: () => dV,
  fgo: () => fgo,
  gbr: () => gbr,
  hbr: () => hbr,
  mbr: () => mbr,
  pbr: () => pbr,
  qhs: () => qhs,
  xDi: () => xDi
});
module.exports = __toCommonJS(chunk_hsfenxnq_exports);
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_r216zqgx = require("/$bunfs/root/chunk-r216zqgx.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var T = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;
function A(n) {
  let e = n.match(T);
  if (!e) return n;
  let t = e[1].toLowerCase();
  if (t === "http") t = "https";
  let o = e[2].toLowerCase().replace(/:(?:443|80)$/, "").replace(/\.(?=$|:\d+$)/, "");
  return `${t}://${o}${e[3] ?? ""}`;
}
function H1n(n, e, t, o = "url") {
  if (n.size === 0) return null;
  let r = (0, import_chunk_r8478wtb.MAt)(e), l = /* @__PURE__ */ new Set([...(0, import_chunk_r8478wtb.qOr)(e), r, `${r}/`]);
  if (typeof t === "string") l.add((0, import_chunk_r8478wtb.t8)(t).trim());
  for (let [s, a] of n) {
    let i = s.indexOf(":");
    if (i <= 0) continue;
    let u = s.slice(0, i).trim(), c = s.slice(i + 1).trim();
    if (u !== o || c === "") continue;
    let d = (0, import_chunk_r8478wtb.oO)(c.replace(/\*$/, ""));
    if (d?.slug === e.slug && d.env === e.env) return a;
    let f = /* @__PURE__ */ new Set([c, A(c)]);
    for (let m of f) for (let g of l) if ((0, import_chunk_qebpc5de.pO)(m, g)) return a;
  }
  return null;
}
function _(n) {
  let e = (0, import_chunk_r8478wtb.Dn)(n), t = (0, import_chunk_r8478wtb.oO)(n);
  return [...e !== null ? [e] : [], ...t !== null && (e === null || e.slug !== t.slug || e.env !== t.env) ? [t] : []];
}
function R(n, e) {
  if (n.size === 0 || typeof e !== "object" || e === null) return null;
  let { url: t, type_url: o, from_url: r, files: l } = e, s = typeof l === "object" && l !== null && !Array.isArray(l) ? Object.values(l).map((i) => typeof i === "object" && i !== null ? i.artifact : void 0) : [], a = [[t, ["url"]], [o, ["url", "type_url"]], [r, ["url", "from_url"]], ...s.map((i) => [i, ["url", "from_url"]])];
  for (let [i, u] of a) {
    if (typeof i !== "string") continue;
    for (let c of _(i)) for (let d of u) {
      let f = H1n(n, c, i, d);
      if (f !== null) return f;
    }
  }
  return null;
}
var pbr = { comments: import_chunk_r8478wtb.sh, data: import_chunk_r8478wtb.Zf, check: import_chunk_r8478wtb.G1 };
function Can(n, e) {
  let t = e?.action, o = typeof t === "string" && Object.hasOwn(import_chunk_qsvts4bv.Vpe, t) ? import_chunk_qsvts4bv.Vpe[t] : void 0;
  return o === void 0 ? void 0 : { tool: { name: pbr[o], ruleContentField: n.ruleContentField }, input: (0, import_chunk_qsvts4bv.vln)(o, e) };
}
function Aan(n, e, t, o) {
  let r = Can(e, t);
  if (r === void 0) return null;
  return (o === "deny" ? (0, import_chunk_ht27b0vz.Tr)(n, r.tool) : (0, import_chunk_ht27b0vz.Di)(n, r.tool)) ?? (0, import_chunk_ht27b0vz.pu)(n, r.tool, r.input, o);
}
function dV(n, e, t) {
  let o = Can({ name: import_chunk_r8478wtb.Vt }, e)?.tool.name;
  for (let r of [import_chunk_r8478wtb.Vt, ...o ? [o] : []]) {
    let l = R((0, import_chunk_ht27b0vz.Gk)(n, r, t), e);
    if (l !== null) return l;
  }
  return null;
}
function mbr(n, e, t, o) {
  let r = Can(e, t);
  return (0, import_chunk_ht27b0vz.pu)(n, e, t, o) ?? (r === void 0 ? null : (0, import_chunk_ht27b0vz.pu)(n, r.tool, r.input, o));
}
var y = { name: import_chunk_ww0784kh.Gn, mcpInfo: void 0, ruleContentField: import_chunk_ww0784kh.Rbo }, Nit = { name: import_chunk_r8478wtb.Vt, mcpInfo: void 0, ruleContentField: import_chunk_r8478wtb.DOr };
function p(n, e, t, o) {
  let r = e ?? import_chunk_r8478wtb.Q6t;
  return { webFetch: { url: n, prompt: r, offset: void 0 }, artifact: { action: "read", url: n, prompt: r, ...t !== void 0 && { page: t }, ...o !== void 0 && { version: o } } };
}
var Vhs = /* @__PURE__ */ new Set(["read", "read_db", "comments", "list_files", "read_file", "list_assets", "read_asset", "get_endpoints", "call_endpoint", "run_script"]);
function ZBt(n, e, t, o, r) {
  let l = r === void 0 ? null : (0, import_chunk_ht27b0vz.pu)(n, y, p(t, r.prompt).webFetch, o);
  if (l !== null) return l;
  let s = (0, import_chunk_ht27b0vz.Gk)(n, import_chunk_ww0784kh.Gn, o);
  if (s.size === 0) return null;
  let a = /* @__PURE__ */ new Set([new URL((0, import_chunk_r8478wtb.sr)(e)).hostname, new URL((0, import_chunk_r8478wtb.MAt)(e)).hostname]);
  if (typeof t === "string") try {
    a.add(new URL(t).hostname);
  } catch {
  }
  for (let i of a) {
    let u = (0, import_chunk_r216zqgx.tEt)(s, `domain:${i}`);
    if (u !== void 0) return u;
  }
  return null;
}
function Ix(n, e, t, o, r = {}) {
  let l = Can({ name: import_chunk_r8478wtb.Vt }, { action: r.action })?.tool.name, s = ZBt(n, e, t, o, r.read);
  if (s !== null) return s;
  for (let a of [import_chunk_r8478wtb.Vt, ...l ? [l] : []]) {
    let i = (0, import_chunk_ht27b0vz.Gk)(n, a, o), u = H1n(i, e, t) ?? (r.copySource === true ? H1n(i, e, t, "from_url") : null);
    if (u !== null) return u;
  }
  return null;
}
function hbr(n) {
  if (!import_chunk_ht27b0vz.Ple.some((t) => (n.alwaysDenyRules[t]?.length ?? 0) > 0)) return n;
  let e = { ...n.alwaysDenyRules };
  for (let t of import_chunk_ht27b0vz.Ple) delete e[t];
  return { ...n, alwaysDenyRules: e };
}
function gbr(n, e, t, o) {
  let { action: r, ...l } = t;
  return (r === void 0 ? null : (0, import_chunk_ht27b0vz.pu)(hbr(n), e, { action: r }, o)) ?? (0, import_chunk_ht27b0vz.pu)(n, e, l, o);
}
function xDi(n, e, t, o, r = {}) {
  let l = hbr(n);
  return (o === "deny" ? (0, import_chunk_ht27b0vz.Tr)(l, Nit) : (0, import_chunk_ht27b0vz.Di)(l, Nit)) ?? gbr(n, Nit, p(t, r.prompt, r.page, r.version).artifact, o) ?? H1n((0, import_chunk_ht27b0vz.Gk)(n, import_chunk_r8478wtb.Vt, o), e, t);
}
function _0(n, e, t, o, r) {
  let l = { ...r.fields, ...r.read !== void 0 ? p(t, r.read.prompt, r.read.page, r.read.version).artifact : { ...typeof r.action === "string" && { action: r.action }, url: (0, import_chunk_r8478wtb.sr)(e) } }, s = Can(Nit, l), a = hbr(n), i = (u) => o === "deny" ? (0, import_chunk_ht27b0vz.Tr)(a, u) : r.wholeToolAskAnswered === true && u.name === import_chunk_r8478wtb.Vt ? null : (0, import_chunk_ht27b0vz.Di)(a, u);
  return i(Nit) ?? gbr(n, Nit, l, o) ?? (s === void 0 ? null : i(s.tool) ?? gbr(n, s.tool, s.input, o)) ?? Ix(n, e, t, o, r);
}
var Khs = [{ action: "list_files" }, { action: "list", fields: { scope: "files" } }];
function qhs(n, e, t, o) {
  for (let r of Khs) {
    let l = _0(n, e, t, o, { ...r, wholeToolAskAnswered: true });
    if (l !== null) return l;
  }
  return null;
}
function T8e(n) {
  return `the ${(0, import_chunk_r8478wtb.qj)((0, import_chunk_qebpc5de.yn)(n.ruleValue))} deny rule from ${(0, import_chunk_xzvhvaa2.bb)(n.source)}`;
}
var Ran = 'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';
function fgo(n, e, t, o = {}) {
  let r = (0, import_chunk_bz1f2qnq.Z)(n), l = { action: "read", read: o };
  return P(n, e) && !((0, import_chunk_qtg8rez4.uw)(e.slug) && !(0, import_chunk_865at33z.qi)(n.agentContext)) && _0(r, e, t, "deny", l) === null && _0(r, e, t, "ask", l) === null;
}
function P(n, e) {
  let { mode: t, modeBeforeRewrite: o } = (0, import_chunk_bz1f2qnq.Z)(n);
  return t !== "plan" && (t !== "auto" && o !== "auto" || (0, import_chunk_z1z1qsrb.VO)(e) || (0, import_chunk_z1z1qsrb.HEt)(e.slug));
}
function PDi(n, e, t, o = {}) {
  return (0, import_chunk_bz1f2qnq.Z)(n).mode !== "dontAsk" && !(0, import_chunk_bz1f2qnq.k_)(n) && fgo(n, e, t, o);
}
function D1n(n, e, t, o = {}) {
  return (0, import_chunk_z1z1qsrb.eSo)(n.artifactRegistries, e.slug) && fgo(n, e, t, o);
}
