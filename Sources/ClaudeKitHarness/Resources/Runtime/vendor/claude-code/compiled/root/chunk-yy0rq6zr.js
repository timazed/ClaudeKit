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
var chunk_yy0rq6zr_exports = {};
__export(chunk_yy0rq6zr_exports, {
  A8s: () => A8s,
  DKr: () => DKr,
  FKr: () => FKr,
  GZn: () => GZn,
  HKr: () => HKr,
  IKr: () => IKr,
  LKr: () => LKr,
  MKr: () => MKr,
  NKr: () => NKr,
  O8s: () => O8s,
  OKr: () => OKr,
  P8s: () => P8s,
  PKr: () => PKr,
  R8s: () => R8s,
  gHt: () => gHt,
  iTn: () => iTn,
  kVo: () => kVo,
  sTn: () => sTn,
  x8s: () => x8s,
  zYt: () => zYt
});
module.exports = __toCommonJS(chunk_yy0rq6zr_exports);
var HKr = (e) => e.managedMcpServersUnreadable === true;
var sTn = (e) => e.normalize("NFC").toLowerCase();
var R8s = (e) => {
  let r = e.normalize("NFC"), t = e.normalize("NFD");
  return r === t ? [r] : [r, t];
};
var IKr = (e) => e === true || Array.isArray(e);
function x8s(e) {
  let r = e.lastIndexOf("@");
  return r > 0 ? e.slice(0, r) : e;
}
function MKr(e, r) {
  let t = Object.entries(e.enabledPlugins ?? {}).flatMap(([s, o]) => IKr(o) && !s.endsWith("@builtin") ? [s] : []), a = (s) => typeof r === "string" && sTn(s) === sTn(r), i = t.some(a);
  return [e.prependPlugins, e.appendPlugins, t].flatMap((s) => (Array.isArray(s) ? s : []).flatMap((o) => {
    let m = typeof o === "string" ? x8s(o) : "", l = typeof o === "string" && i && a(o);
    return m !== "" && !l ? R8s(m) : [];
  }));
}
function DKr(e) {
  let { allowedMcpServers: r, managedMcpServers: t } = e, a = typeof t === "object" && !Array.isArray(t);
  return [...(Array.isArray(r) ? r : []).flatMap((i) => {
    let o = typeof i === "object" && i !== null && "serverName" in i ? i.serverName : void 0;
    return typeof o === "string" && o !== "" ? [o] : [];
  }), ...Object.keys(a ? t ?? {} : {})];
}
function P8s(e) {
  let r = e.replace(/[^a-zA-Z0-9_-]/g, "_"), t = r.replace(/_+/g, "_").replace(/^_|_$/g, "");
  return [.../* @__PURE__ */ new Set([r, t])].filter((a) => a !== "");
}
var f = (e) => e.replace(/[^a-zA-Z0-9_-]/g, "_").toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
var GZn = (e) => `mcp_${f(e)}_`;
var LKr = (e, r) => HKr(e) && r.startsWith("mcp__") || DKr(e).flatMap(P8s).some((t) => r.startsWith(`mcp__${t}__`)) || MKr(e).filter((t) => f(t) !== "").flatMap((t) => [t, `plugin_${t}`]).some((t) => `${f(r)}_`.startsWith(GZn(t)));
var O8s = (e, r) => [...DKr(e), ...MKr(e, r).flatMap((t) => [t, `plugin_${t}`])];
var kVo = (e) => Array.isArray(e.allowedMcpServers);
function p(e) {
  return f(e).replaceAll("_", "");
}
function d(e, r) {
  return !e.startsWith("mcp__") && p(e).startsWith(p(r));
}
function NKr(e, r, t) {
  let a = `${f(r)}_`;
  return HKr(e) || O8s(e, t).some((i) => f(i) === "" || a.startsWith(GZn(i)) || d(r, GZn(i)));
}
var PKr = (e) => e.personWritablePolicy === true;
function OKr(e, r) {
  return typeof e === "object" && e !== null ? new Map(Object.entries(e)).get(r) : void 0;
}
var A8s = ["pluginConfigs", "cc-plugin-sec-default@builtin", "options"];
var gHt = (e, r) => [...A8s, r].reduce(OKr, e);
var zYt = (e) => PKr(e) || gHt(e, "allowModsToOverrideDenyRules") !== true;
function iTn(e, r) {
  let t = e === void 0 ? void 0 : ["permissions", "deny"].reduce(OKr, e), a = Array.isArray(t) ? t.filter((o) => typeof o === "string") : [], i = a.filter((o) => !o.includes("(")).map(p), s = a.map((o) => o.endsWith("__*") ? o.slice(0, -3) : o).filter((o) => o.startsWith("mcp__") && !o.slice(5).includes("__")).map((o) => `${o}__`);
  return e === void 0 || a.length === 0 || !zYt(e) || !Array.isArray(r.value) ? r : { value: r.value.filter((o) => {
    let m = o?.name;
    return typeof m !== "string" || !(m.startsWith("mcp__") ? a.includes(m) || s.some((l) => m.startsWith(l)) : i.includes(p(m)) || s.some((l) => d(m, l)));
  }) };
}
function FKr(e, r, t, a, i) {
  let s = r.value, o = t.value, m = a.value;
  if (!Array.isArray(s) || !Array.isArray(o) || !Array.isArray(m)) return iTn(e, r);
  let l = [...s, ...o, ...m].every((n) => typeof n?.name === "string");
  if (e === void 0 || !l) return iTn(e, r);
  let u = new Map(s.map((n) => [n.name, n])), c = new Set(m.map((n) => n.name)), g = new Set(s.map((n) => n.name).filter((n) => LKr(e, n) || !c.has(n))), x = new Set(s.map((n) => p(n.name))), _ = kVo(e);
  return iTn(e, { value: [...s.filter((n) => g.has(n.name)), ...o.filter((n) => !g.has(n.name) && !LKr(e, n.name) && (c.has(n.name) ? u.has(n.name) : !_ && !NKr(e, n.name) && !x.has(p(n.name)))).map((n) => i ? u.get(n.name) ?? n : n)] });
}
