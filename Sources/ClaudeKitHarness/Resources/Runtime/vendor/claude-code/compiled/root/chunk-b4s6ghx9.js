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
var chunk_b4s6ghx9_exports = {};
__export(chunk_b4s6ghx9_exports, {
  Bya: () => Bya,
  mBo: () => mBo
});
module.exports = __toCommonJS(chunk_b4s6ghx9_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_09y561mv = require("/$bunfs/root/chunk-09y561mv.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
function mBo(o) {
  if (o.type !== "http" || o.headers === void 0) return o;
  return { ...o, headers: Object.fromEntries(Object.keys(o.headers).map((e) => [e, ""])) };
}
function v(o) {
  let e = 0, n = (0, import_chunk_2yx6c1y2._e)(o)?.hooks ?? {};
  for (let s of Object.values(n)) {
    if (!Array.isArray(s)) continue;
    for (let r of s) e += r.hooks?.length ?? 0;
  }
  return e;
}
function E(o) {
  switch (o.type) {
    case "command":
      return "Command";
    case "prompt":
    case "agent":
      return "Prompt";
    case "http":
      return "URL";
    case "mcp_tool":
      return "MCP tool";
    case "script":
      return o.file !== void 0 ? "Script file" : "Script";
    default:
      return "Definition";
  }
}
function R(o) {
  if (o.type === "script") return o.file ?? o.script ?? "";
  return (0, import_chunk_sjqze7qg.AH)(o);
}
function L(o) {
  if (o.source === "sessionHook") return (!(0, import_chunk_6zh1j84y.bme)() || (0, import_chunk_hrmqj4hy.IBi)(o.config)) && (!(0, import_chunk_gftn60qp.ok)() || (0, import_chunk_6h9mds0d.Ils)(o.config));
  let e = (0, import_chunk_0pb268nk.Lr)("hooks");
  if (e && o.source !== "pluginHook") return false;
  if (o.source === "builtinHook") return true;
  if ((0, import_chunk_6zh1j84y.Qh)()) return false;
  if (o.source === "policySettings") return true;
  let n = e || (0, import_chunk_6zh1j84y.ub)() || (0, import_chunk_gftn60qp.ok)();
  if (o.source === "pluginHook") {
    let s = o.pluginName ?? "", r = (0, import_chunk_gftn60qp.ok)() ? (0, import_chunk_6h9mds0d.Xot)(s) : (0, import_chunk_vcnr02by.AN)()?.has(s) === true;
    return !n || r;
  }
  return !n && !(0, import_chunk_57sd0ak5.Dl)("hooks") && !(0, import_chunk_2yx6c1y2.Iee)(o.source);
}
function S(o) {
  let e = o.config, n = o.source === "userSettings" || o.source === "projectSettings" || o.source === "localSettings", s = mBo(e);
  return { event: o.event, matcher: (0, import_chunk_7cfjrnwy.Am)(o.matcher ?? ""), source: o.source, sourceLabel: o.source === "policySettings" ? "Managed settings (set by your organization)" : (0, import_chunk_sjqze7qg.Mpr)(o.source), ...o.pluginName !== void 0 && { pluginName: (0, import_chunk_7cfjrnwy.Am)(o.pluginName) }, type: e.type, displayText: (0, import_chunk_sjqze7qg.CDn)(e), commandText: (0, import_chunk_7cfjrnwy.S$)(R(e)), contentLabel: E(e), ..."if" in e && e.if !== void 0 && { condition: (0, import_chunk_7cfjrnwy.Am)(e.if) }, ..."timeout" in e && typeof e.timeout === "number" && { timeout: e.timeout }, ..."statusMessage" in e && e.statusMessage !== void 0 && e.statusMessage !== "" && { statusMessage: (0, import_chunk_7cfjrnwy.Am)(e.statusMessage) }, ..."once" in e && e.once === true && { runsOnce: true }, ...e.type === "command" && (e.async === true || e.asyncRewake === true) && { runsInBackground: true }, ...!L(o) && { disabled: true }, ...n && { editable: { matcher: o.matcher ?? "", config: s, ...s !== e && { headersRedacted: true } } } };
}
function h(o, e) {
  let n = [];
  for (let s of ["flagSettings", "policySettings"]) {
    let r = (0, import_chunk_2yx6c1y2._e)(s)?.hooks?.[o];
    if (!Array.isArray(r)) continue;
    for (let u of r) {
      if ((u.matcher ?? "") !== e) continue;
      for (let i of u.hooks) n.push(S({ event: o, config: i, matcher: e, source: s }));
    }
  }
  return n;
}
function Bya(o) {
  let e = (0, import_chunk_2yx6c1y2._e)("policySettings"), n = e?.allowManagedHooksOnly === true, s = (0, import_chunk_57sd0ak5.Dl)("hooks"), r = e?.disableAllHooks === true, u = (0, import_chunk_2yx6c1y2.zr)()?.disableAllHooks === true, i = (0, import_chunk_09y561mv.$wn)([]), m = (0, import_chunk_09y561mv.g7n)(o, []), b = (t) => t.source === "sessionHook" || t.source === "pluginHook" || t.source === "builtinHook" || (0, import_chunk_xzvhvaa2.rn)(t.source), p = !n && !s, g = [], d = [];
  for (let t of Object.keys(i)) {
    let M = (0, import_chunk_09y561mv.RIt)(m, t), c = [], y = /* @__PURE__ */ new Set();
    for (let a of M) if (y.add(a), c.push(...(m[t]?.[a] ?? []).filter(b).map(S)), p) c.push(...h(t, a));
    if (p) {
      let a = /* @__PURE__ */ new Set();
      for (let l of ["flagSettings", "policySettings"]) {
        let k = (0, import_chunk_2yx6c1y2._e)(l)?.hooks?.[t];
        if (!Array.isArray(k)) continue;
        for (let C of k) {
          let H = C.matcher ?? "";
          if (!y.has(H)) a.add(H);
        }
      }
      for (let l of [...a].sort()) c.push(...h(t, l));
    }
    if (c.length > 0) g.push({ name: t, summary: i[t].summary, supportsMatcher: i[t].matcherMetadata !== void 0 || c.some((a) => a.matcher !== ""), hookCount: c.length }), d.push(...c);
  }
  let f = (0, import_chunk_2yx6c1y2._p)().errors.filter((t) => t.severity !== "warning").map((t) => ({ file: t.file, path: t.path, message: t.message }));
  return { events: g, hooks: d, eventCatalog: Object.keys(i).map((t) => ({ name: t, summary: i[t].summary, supportsMatcher: i[t].matcherMetadata !== void 0 || t === "FileChanged" })), policy: { disabledByPolicy: r, managedOnly: n, pluginOnly: s, allDisabled: u, policyHookCount: v("policySettings"), ...(0, import_chunk_6zh1j84y.yy)() && { policyUnreadable: true } }, ...(0, import_chunk_2gtmjt3y.as)() && { safeMode: { managedHooksStillApply: (0, import_chunk_vcnr02by.zRe)(), exitHint: (0, import_chunk_2gtmjt3y.vk)() } }, ...(0, import_chunk_2gtmjt3y.Xn)() && (0, import_chunk_0pb268nk.Lr)("hooks") && { bareMode: { exitHint: (0, import_chunk_2gtmjt3y.g3t)() } }, ...f.length > 0 && { errors: f } };
}
