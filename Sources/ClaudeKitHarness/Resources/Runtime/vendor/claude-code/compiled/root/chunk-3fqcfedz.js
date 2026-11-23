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
var chunk_3fqcfedz_exports = {};
__export(chunk_3fqcfedz_exports, {
  Gor: () => Gor,
  KYr: () => KYr,
  OMe: () => OMe,
  fUa: () => fUa,
  n8o: () => n8o,
  qYr: () => qYr,
  r8o: () => r8o,
  uUa: () => uUa,
  voi: () => voi
});
module.exports = __toCommonJS(chunk_3fqcfedz_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_fkbh0xha = require("/$bunfs/root/chunk-fkbh0xha.js");
var n8o = "This server could not be checked against your organization's connector settings";
function uUa(e) {
  return Gor(e) !== void 0;
}
function Gor(e) {
  return [import_chunk_271xsh6x.Pit, n8o].find((n) => e.includes(n));
}
class w extends import_chunk_jv7av99m.A {
}
function OMe(e) {
  return e instanceof w;
}
function F(e) {
  return (0, import_chunk_271xsh6x.g1n)(String(e))?.replace(/\.(?=$|:\d+$)/, "");
}
function voi(e, n, o = () => false) {
  let t = F(n ?? ""), i;
  return async (r, R) => {
    if (i !== void 0 && !o(r, R)) {
      let c = F(r);
      if (t === void 0 || c === void 0 || c === t) throw i;
      return await e(r, R);
    }
    i = void 0;
    try {
      return await e(r, R);
    } catch (c) {
      if (OMe(c)) i = c;
      throw c;
    }
  };
}
var U = 20, v = ["Content-Encoding", "Content-Language", "Content-Location", "Content-Type", "Content-Length"], D = ["Authorization", "Cookie", "Host", "Proxy-Authorization"];
function M(e) {
  switch (e) {
    case "off":
    case "count_only":
    case "on":
      return e;
    case "fault":
    case "unattributed":
      return "off";
    default:
      return "off";
  }
}
function x(e, n, o) {
  let t = o === "unreadable" ? "check_failed" : "blocked";
  try {
    let i = (0, import_chunk_qdcbcsg7.mt)().connectorBlockHopsCounted, r = `${t} ${n} ${e.entry}`;
    if (t === "blocked" && n === "on") (0, import_chunk_qdcbcsg7.mt)().connectorBlockHopsRefused.add(e.entry);
    if (i.has(r)) return;
    if (i.add(r), o === "unreadable" && n === "on") (0, import_chunk_cqa9hrgx.m)("mcp_plugin_connector_hop", t, { mode: (0, import_chunk_78g0060s.f)(n) });
    else if (o === "unreadable") (0, import_chunk_cqa9hrgx.l)("mcp_plugin_connector_hop", t, { mode: (0, import_chunk_78g0060s.f)(n) });
    else (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_hop", { mode: (0, import_chunk_78g0060s.f)(n), reason: (0, import_chunk_78g0060s.f)(o) }), (0, import_chunk_y53wbr8a.a)("tengu_mcp_plugin_connector_hop", { mode: (0, import_chunk_78g0060s.f)(n), reason: (0, import_chunk_78g0060s.f)(o) });
  } catch {
  }
}
function q(e, n, o) {
  let t;
  try {
    if (t = (0, import_chunk_7625rswd.$Bt)([e]), n === "count_only" && t !== void 0 && t !== "unreadable") {
      let i = (0, import_chunk_7625rswd.$Bt)([o.entry]);
      if (i !== void 0 && i !== "unreadable") return false;
    }
    if ((0, import_chunk_7625rswd.Gho)(t)) t = "unreadable";
  } catch {
    t = "unreadable";
  }
  if (t === void 0) return false;
  if (x(o, n, t), t === "unreadable" && n === "on") O("check_failed");
  return t !== "unreadable";
}
function O(e) {
  if (e === "blocked") throw Object.assign(new w(import_chunk_271xsh6x.Pit, "MCP request refused: connector block"), { code: "POLICY_BLOCKED" });
  if (e === "check_failed") throw new w(n8o, "MCP request refused: connector check failed");
}
function H(e) {
  if (!(0, import_chunk_7625rswd.xbe)(e) || e.type !== "sse" && e.type !== "http") return;
  return { entry: e.url ?? "" };
}
function B(e) {
  try {
    let n = (0, import_chunk_7625rswd.Aje)() ? (0, import_chunk_7625rswd.b0e)() : "off";
    return M(n);
  } catch {
    return x(e, "off", "unreadable"), "off";
  }
}
function b(e, n, o) {
  if (n !== "off" && q(e, n, o) && n === "on") O("blocked");
}
function r8o(e) {
  let n = H(e);
  if (n === void 0) return;
  return (o) => b(o, B(n), n);
}
function KYr(e, n = false) {
  if (!(0, import_chunk_qdcbcsg7.mt)().connectorBlockHopsRefused[n ? "has" : "delete"](e.url ?? "")) return;
  let o = H(e);
  return o !== void 0 && B(o) === "on" ? import_chunk_271xsh6x.Pit : void 0;
}
function qYr(e, n, o, t = () => false, i) {
  let r = H(e);
  if (r === void 0) return;
  let R = URL.parse(r.entry)?.href, c = (h) => {
    try {
      return URL.parse(h)?.href === R ? void 0 : o?.(h);
    } catch {
      return "check_failed";
    }
  };
  return async (h, g) => {
    let C = B(r), P = (s, E) => {
      if (((g?.method ?? "GET").toUpperCase() === "GET" && s.ok || s.headers.get("Content-Type")?.toLowerCase().includes("text/event-stream")) && i !== void 0 && t(h, g)) (0, import_chunk_7625rswd.wpl)(i, r.entry, E);
    };
    if (C !== "on") {
      if (b(String(h), C, r), C === "count_only") c(String(h));
      let s = await n(h, g);
      if (b(s.url, C, r), C === "count_only") c(s.url);
      return P(s, s.url), s;
    }
    let p = new URL(h), _ = { ...g, redirect: g?.redirect === "error" ? "error" : "manual" };
    for (let s = 0; ; s++) {
      b(p.href, C, r);
      let E = c(p.href);
      if (E === "blocked") (0, import_chunk_qdcbcsg7.mt)().connectorBlockHopsRefused.add(r.entry);
      O(E);
      let k;
      try {
        k = await n(p, _);
      } catch (d) {
        if (s === 0 || (0, import_chunk_jv7av99m.Fe)(d) || d instanceof Error && d.name === "TimeoutError") throw d;
        let L = (0, import_chunk_865at33z.rh)(d)?.code;
        throw Object.assign(TypeError("The address that the server redirected to failed"), L === void 0 ? {} : { code: L, ...d instanceof Error && "status" in d && typeof d.status === "number" && { status: d.status }, cause: new import_chunk_jv7av99m.A(L, "The errno of a redirect that failed") });
      }
      let I = [301, 302, 303, 307, 308].includes(k.status) ? k.headers.get("Location") : null;
      if (!I || g?.redirect === "manual") {
        if (s > 0) Object.defineProperty(k, "redirected", { value: true });
        return P(k, p.href), k;
      }
      await k.body?.cancel().catch(() => {
      });
      let y = URL.parse(I, p);
      if (s === U || y === null || y.protocol !== "http:" && y.protocol !== "https:") throw TypeError("The server sent a redirect that cannot be followed");
      let T = new Headers(_.headers), S = _.method?.toUpperCase() ?? "GET";
      if (k.status === 303 ? S !== "GET" && S !== "HEAD" : (k.status === 301 || k.status === 302) && S === "POST") {
        _.method = "GET", _.body = void 0;
        for (let d of v) T.delete(d);
      }
      if (y.origin !== p.origin) for (let d of D) T.delete(d);
      y.username = y.origin === p.origin ? p.username : "", y.password = y.origin === p.origin ? p.password : "", _.headers = T, p = y;
    }
  };
}
function fUa(e, n, o) {
  let t = URL.parse(e.url ?? "")?.href, i = (h, g) => g?.body === void 0 || g.body === null ? String(h) === t : (0, import_chunk_fkbh0xha.Vor)(g), r = { taken: /* @__PURE__ */ new Set() }, R = qYr(e, n, o, i, r);
  if (R === void 0) return;
  let c = voi(R, e.url, i);
  return (0, import_chunk_7625rswd.bpl)(c, r), c;
}
