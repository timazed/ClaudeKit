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
var chunk_702cfzzh_exports = {};
__export(chunk_702cfzzh_exports, {
  Fde: () => Fde,
  JN: () => JN,
  Vke: () => Vke,
  WOs: () => WOs,
  XAt: () => XAt,
  d0l: () => d0l,
  eYi: () => eYi,
  gVn: () => gVn,
  l0l: () => l0l,
  nYi: () => nYi,
  tYi: () => tYi,
  zke: () => zke
});
module.exports = __toCommonJS(chunk_702cfzzh_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_chunk_rwa52046 = require("/$bunfs/root/chunk-rwa52046.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var h = /cloudflare/i;
function zke(e) {
  let r = e("request-id");
  if (typeof r === "string" && (0, import_chunk_rwa52046.yO)(r.trim())) return "origin";
  let n = e("cf-ray"), t = e("server");
  if (typeof n === "string" && n !== "" || typeof t === "string" && h.test(t)) return "nonorigin_cf";
  return "nonorigin_other";
}
function XAt(e) {
  return e === "nonorigin_cf" || e === "nonorigin_other";
}
function WOs(e) {
  switch (e) {
    case "nonorigin_cf":
      return "a network edge refused the connection before it reached Anthropic's server (HTTP 403 \u2014 Anthropic's CDN enforcing a region or network policy, or a Cloudflare gateway on this network) rather than this session; this often follows a VPN or network change";
    case "nonorigin_other":
      return "the connection was refused before it reached Anthropic (HTTP 403) \u2014 usually a proxy, VPN or firewall on this network";
  }
}
function Fde() {
  return;
}
var g = new import_chunk_2904xtvq.j(() => ({ listener: void 0 }));
function Vke(e, r, n) {
  try {
    let { listener: t } = g.of((0, import_chunk_f9x2f6cx.N)().host);
    if (t !== void 0 && r !== void 0 && new Headers(r).get("authorization") === t.authorization) t.heard(e, n());
  } catch {
  }
}
var s = (0, import_chunk_t57w17k7.de)({ request: null, response: null, holder: null }, (e) => {
  if (e.request !== null) import_chunk_3jjr3wje.bn.interceptors.request.eject(e.request), e.request = null;
  if (e.response !== null) import_chunk_3jjr3wje.bn.interceptors.response.eject(e.response), e.response = null;
  e.holder = null;
});
function eYi(e, r) {
  if (s.request !== null) return;
  s.holder = { report: e, sendable: r }, s.request = import_chunk_3jjr3wje.bn.interceptors.request.use((n) => {
    let t = d(n.headers.get("Authorization"), r, () => i(n));
    switch (t.send) {
      case "asItCame":
        break;
      case "held":
        n.headers.set("Authorization", t.value);
        break;
      case "none":
        n.headers.delete("Authorization");
        break;
    }
    return n;
  }), s.response = import_chunk_3jjr3wje.bn.interceptors.response.use((n) => (c(n.status, n.config, e), n), (n) => {
    if (import_chunk_3jjr3wje.bn.isAxiosError(n) && n.response) c(n.response.status, n.config, e);
    return Promise.reject(n);
  });
}
function d(e, r, n) {
  for (let t of u(e)) {
    let o = r(t);
    if (o === t) continue;
    return o !== null && typeof e === "string" && !e.includes(",") && n() ? { send: "held", value: `Bearer ${o}` } : { send: "none" };
  }
  return { send: "asItCame" };
}
function tYi(e, r) {
  let n = new Headers(e);
  if (s.holder !== null) {
    let t = d(n.get("Authorization"), s.holder.sendable, () => i({ url: r }));
    switch (t.send) {
      case "asItCame":
        break;
      case "held":
        n.set("Authorization", t.value);
        break;
      case "none":
        n.delete("Authorization");
        break;
    }
  }
  return Vke("event_exporter", n, () => r), n;
}
function nYi(e, r, n) {
  if (s.holder !== null) f(e, () => i({ url: n }), () => r.get("Authorization"), s.holder.report);
}
function gVn(e) {
  return u(e)[0] ?? null;
}
function u(e) {
  if (Array.isArray(e)) return e.flatMap(u);
  if (typeof e !== "string") return [];
  let n = (e.includes(",") ? [e, ...e.split(",")] : [e]).flatMap((t) => {
    let o = /^\s*bearer\s+/i.exec(t);
    if (o === null) return [];
    let a = t.slice(o[0].length).trim();
    return a === "" ? [] : [a];
  });
  return (0, import_chunk_4smdap7r.M)(n);
}
function i(e) {
  try {
    if (e === void 0) return false;
    let r = l(import_chunk_3jjr3wje.bn.getUri(e));
    return r !== null && [(0, import_chunk_ephf358x.cn)().BASE_API_URL, Fde()].some((n) => n !== void 0 && l(n) === r);
  } catch {
    return false;
  }
}
function l(e) {
  try {
    let r = new URL(e);
    return r.protocol === "https:" || r.protocol === "http:" ? r.origin : null;
  } catch {
    return null;
  }
}
function c(e, r, n) {
  f(e, () => !r?.skipSessionsBearerReport && i(r), () => r?.headers?.get?.("Authorization"), n);
}
function f(e, r, n, t) {
  try {
    if (e !== 401 || !r()) return;
    let o = gVn(n());
    if (o !== null) t(o).catch(() => {
    });
  } catch {
  }
}
var m = "tengu_kind_bumblebee", p = new import_chunk_8jsh3ct2.ex();
function l0l(e) {
  return p.register(e);
}
function d0l() {
  return p.read(m, true);
}
function JN(e) {
  let r = e?.headers;
  return r instanceof import_chunk_3jjr3wje.Jhe && !r.has("Authorization");
}
