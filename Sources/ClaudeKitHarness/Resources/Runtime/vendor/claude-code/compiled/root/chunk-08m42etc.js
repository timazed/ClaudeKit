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
var chunk_08m42etc_exports = {};
__export(chunk_08m42etc_exports, {
  Kya: () => Kya,
  M9t: () => M9t,
  MIt: () => MIt,
  V3: () => V3,
  Yya: () => Yya,
  qya: () => qya,
  uKe: () => uKe
});
module.exports = __toCommonJS(chunk_08m42etc_exports);
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_1jfwdjvf = require("/$bunfs/root/chunk-1jfwdjvf.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_vyaqbqge = require("/$bunfs/root/chunk-vyaqbqge.js");
var import_chunk_v6yexwhb = require("/$bunfs/root/chunk-v6yexwhb.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
function g(e, t) {
  var o = [];
  return (0, import_chunk_6mfepmbb.EKn)(e, function(s, c, n) {
    if (t(s, c, n)) o.push(s);
  }), o;
}
var S = g;
function h(e, t) {
  var o = (0, import_chunk_04nf05xp.tE)(e) ? import_chunk_v6yexwhb.U0s : S;
  return o(e, (0, import_chunk_xcgcdx61.CHs)((0, import_chunk_vyaqbqge.aP)(t, 3)));
}
var V3 = h;
function Kya(e, t) {
  let o = e.clients.findIndex((n) => n.name === t);
  if (o === -1) return e;
  let s = e.clients[o];
  if (!s || !(0, import_chunk_xcgcdx61.ji)(s) && s.type !== "needs-auth") return e;
  let c = [...e.clients];
  return c[o] = s.type === "needs-auth" ? { ...s } : { name: t, type: "needs-auth", config: s.config }, { ...e, clients: c };
}
function uKe(e, t, o, s) {
  let c = e.mcp.clients.some((l) => l.name === t);
  if (!c && s?.appendIfAbsent === false) return e;
  let n = (0, import_chunk_px0hhsq7.Rr)(t);
  return { ...e, mcp: { ...e.mcp, clients: c ? e.mcp.clients.map((l) => l.name === t ? o.client : l) : [...e.mcp.clients, o.client], tools: [...e.mcp.tools.filter((l) => !(0, import_chunk_px0hhsq7.Bu)(l, t, n)), ...o.tools], commands: [...e.mcp.commands.filter((l) => !(0, import_chunk_bzyb60p0.ZE)(l, t)), ...o.commands], resources: o.resources ? { ...e.mcp.resources, [t]: o.resources } : e.mcp.resources, resourceTemplates: o.resourceTemplates ? { ...e.mcp.resourceTemplates, [t]: o.resourceTemplates } : e.mcp.resourceTemplates } };
}
function qya(e, t, o) {
  if (!e.clients.some((c) => c.name === t && c.type === "connected")) return e;
  let s = (0, import_chunk_px0hhsq7.Rr)(t);
  return { ...e, tools: [...e.tools.filter((c) => !(0, import_chunk_px0hhsq7.Bu)(c, t, s)), ...o] };
}
function M9t(e, t, o) {
  if (!e.mcp.clients.some((c) => c.name === t && c.type === "connected")) return e;
  let s = (0, import_chunk_px0hhsq7.Rr)(t);
  return { ...e, mcp: { ...e.mcp, tools: [...e.mcp.tools.filter((c) => !(0, import_chunk_px0hhsq7.Bu)(c, t, s)), ...o] } };
}
function Yya(e, t, o) {
  let s = new Set(e.clients), c = new Map(t.clients.map((i) => [i.name, i])), n = o;
  for (let i of o.clients) {
    if (!s.has(i)) continue;
    let m = c.get(i.name), a = (0, import_chunk_px0hhsq7.Rr)(i.name), p = (r) => (0, import_chunk_px0hhsq7.Bu)(r, i.name, a);
    if (m === void 0) {
      n = { ...n, clients: n.clients.filter((r) => r !== i), tools: n.tools.filter((r) => !p(r)) };
      continue;
    }
    if (m !== i) n = { ...n, clients: n.clients.map((r) => r === i ? m : r) };
    let u = t.tools.filter(p), d = n.tools.filter(p);
    if (u.length === d.length && u.every((r, y) => r === d[y])) continue;
    n = { ...n, tools: [...n.tools.filter((r) => !p(r)), ...u] };
  }
  let l = new Set(e.clients.map((i) => i.name)), T = new Set(o.clients.map((i) => i.name)), f = t.clients.filter((i) => !l.has(i.name) && !T.has(i.name));
  if (f.length > 0) {
    let i = f.map((m) => [m.name, (0, import_chunk_px0hhsq7.Rr)(m.name)]);
    n = { ...n, clients: [...n.clients, ...f], tools: [...n.tools, ...t.tools.filter((m) => i.some(([a, p]) => (0, import_chunk_px0hhsq7.Bu)(m, a, p)))] };
  }
  return n;
}
function MIt(e, t, o) {
  if (e === void 0) return t;
  return (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config) !== (0, import_chunk_3bjtjsgp.Uo)(e.name, o) ? void 0 : (0, import_chunk_1jfwdjvf.eye)({ name: e.name, config: e.config }, t);
}
