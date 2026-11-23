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
var chunk_0zqda2sj_exports = {};
__export(chunk_0zqda2sj_exports, {
  $pl: () => $pl,
  Dpl: () => Dpl,
  Fpl: () => Fpl,
  Hhs: () => Hhs,
  Hpl: () => Hpl,
  Jho: () => Jho,
  Lpl: () => Lpl,
  Mpl: () => Mpl,
  Npl: () => Npl,
  S1n: () => S1n,
  Upl: () => Upl,
  Xho: () => Xho,
  aDi: () => aDi,
  gan: () => gan,
  iDi: () => iDi,
  lDi: () => lDi,
  sDi: () => sDi
});
module.exports = __toCommonJS(chunk_0zqda2sj_exports);
function k(e) {
  return e.replace(/%(3f|23).*$/i, "").replace(/\/+/g, "/").replace(/\/$/, "").toLowerCase();
}
function A(e) {
  try {
    let t = new URL(e), n = t.hostname, o = n.length;
    while (n[o - 1] === ".") o--;
    let r = n.slice(0, o), s = /^\[([0-9a-f:]+)\]$/.exec(r)?.[1];
    if (s !== void 0) {
      let [c = [], h = []] = s.split("::").map((p) => p.split(":").filter((y) => y !== "")), b = Array(8 - c.length - h.length).fill("0"), g = [...c, ...b, ...h], R = g.slice(0, 6).join(":");
      if (R.startsWith("64:ff9b:1:") || R === "0:0:0:0:0:0" && g[6] !== "0") return;
      if (R === "0:0:0:0:0:ffff" || R === "64:ff9b:0:0:0:0") r = g.slice(6).map((p) => parseInt(p, 16)).flatMap((p) => [p >> 8, p & 255]).join(".");
    }
    if (r === "" || r.length > 253) return;
    let i = `${r}:${t.port === "80" || t.port === "443" ? "" : t.port}`, l = `${t.protocol === "wss:" ? "https:" : t.protocol}//${t.host}`, f = i + k(t.pathname), d = /* @__PURE__ */ new Set([f]), a = t.pathname, u = false;
    for (let c = 0; c < 8 && !u; c++) {
      let h = a.replace(/%(?!3f|23)[0-7][0-9a-f]/gi, (g) => String.fromCharCode(parseInt(g.slice(1), 16))).replace(/;[^/]*/g, ""), b = new URL(`http://host${h}`).pathname;
      u = b === a, a = b, d.add(i + k(a));
    }
    return { host: i, origin: l, sent: l + t.pathname + t.search, address: f, readings: [...d], opaque: !u || d.size > 1 || i + t.pathname.replace(/%[0-9A-F]{2}/g, (c) => c.toLowerCase()).replace(/\/$/, "") !== f || f.length > 2048 || l.length > 2048 || /%(u|3f|23|[01][0-9a-f]|7f|[89a-f][0-9a-f])/i.test(t.pathname) || /(\.|%20)(\/|$)/.test(t.pathname) || t.pathname.includes("+") };
  } catch {
    return;
  }
}
function Mpl(e) {
  if (A(e) !== void 0) return false;
  try {
    return new URL(e), true;
  } catch {
    return false;
  }
}
function m(e) {
  return e.replace(/\/(mcp|sse)$/, "");
}
function Hpl(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), f = false;
  for (let d of e) {
    let a = A(d.url);
    if (!d.blocked) {
      if (a !== void 0) {
        if (n.add(a.sent), l.add(a.host), !a.opaque) r.add(a.origin + m(a.address).slice(a.host.length));
      }
      continue;
    }
    if (a === void 0) {
      f = true;
      continue;
    }
    for (let u of a.readings) for (let c of [u, u.replaceAll("+", "%20")]) t.add(c), o.add(m(c));
    if (s.add(a.host), a.readings.includes(a.host)) i.add(a.host);
  }
  for (let d of s) if (!l.has(d)) i.add(d);
  return { blockedUrls: t, unblockedUrls: n, blockedRoots: o, unblockedRoots: r, hostsWithABlock: s, blockedHosts: i, blockedRowUnread: f };
}
function Dpl(e) {
  return e.hostsWithABlock.size > 0 || e.blockedRowUnread;
}
function Lpl(e, t) {
  return e.blockedRowUnread || t.some((n) => e.hostsWithABlock.has(A(n)?.host ?? ""));
}
var Npl = ["address", "host", "opaque", "service"];
function Fpl(e, t) {
  let n = false;
  for (let o of t) {
    let r = A(o);
    if (r === void 0) continue;
    if (n = true, r.readings.some((i) => e.blockedUrls.has(i))) return "address";
    if (r.readings.length === 1 && e.unblockedUrls.has(r.sent)) continue;
    if (e.blockedHosts.has(r.host)) return "host";
    if (!e.hostsWithABlock.has(r.host)) continue;
    if (r.opaque) return "opaque";
    let s = r.address;
    while (s !== r.host && !e.blockedRoots.has(s) && !e.blockedUrls.has(s) && !e.unblockedRoots.has(r.origin + s.slice(r.host.length))) s = s.slice(0, s.lastIndexOf("/"));
    if (e.blockedRoots.has(s) || e.blockedUrls.has(s)) return "service";
  }
  return n ? void 0 : "unreadable";
}
var Hhs = ["host", "x-forwarded-host", "forwarded", "x-forwarded-server", "x-host", "x-http-host-override", "x-original-host"], x = ["authority", "backend", "destination", "domain", "endpoint", "forward", "gateway", "host", "original", "overrid", "path", "prefix", "proxy", "redirect", "rerout", "rewrit", "rout", "script", "server", "subrequest", "target", "upstream", "uri", "url"], E = ["api-key", "authorization", "x-api-key"], gan = { name: "X-MCP-Features", value: "mcp_apps_disable_form_deferral", host: "api.githubcopilot.com" }, _ = ["x-forwarded-for", "x-forwarded-proto"], Xho = ",";
function C(e) {
  let t = 0, n = e.length;
  while (t < n && " 	".includes(e.charAt(t))) t++;
  while (n > t && " 	".includes(e.charAt(n - 1))) n--;
  return e.slice(t, n);
}
var N = /^([!#$%&'*+.^_`|~0-9a-z-]+)=(?:"([^\s;,="\\]*)"|([^\s;,="\\]*))$/i;
function sDi(e, t) {
  let n = t.split(e === "forwarded" ? /[;,]/ : ",").map(C).filter((o) => o !== "");
  if (e !== "forwarded") return n.length === 0 && e === "host" ? [""] : n;
  return n.flatMap((o) => {
    let [, r, s, i] = N.exec(o) ?? [];
    return r?.toLowerCase() === "host" ? [s ?? i ?? ""].filter((l) => l !== "") : /^(by|for|proto)$/i.test(r ?? "") ? [Xho] : [""];
  });
}
function S1n(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "-");
}
function iDi(e, t) {
  return Object.entries(t).filter(([n]) => S1n(n) === e).map(([, n]) => n);
}
function U(e) {
  return S1n(e).split("-").some((t) => x.some((n) => t.startsWith(n) || t.endsWith(n)));
}
function S(e, t) {
  return e.includes(t.replace(/[A-Z]/g, (n) => n.toLowerCase()));
}
function w(e) {
  return U(e) && !S(_, e);
}
function aDi(e, t) {
  let n = Object.keys(e).filter((o) => o !== t && !S(Hhs, o) && !S(E, o));
  return [...n.some(w) ? [""] : [], ...n.every(w) ? [] : [Xho]];
}
function O(e, t, n, o) {
  return n.length === 1 && e[n[0] ?? ""] === gan.value && (o || t !== void 0 && URL.parse(t)?.hostname === gan.host);
}
function Jho(e, t, n = false) {
  let o = Object.keys(e).filter((r) => S([gan.name.toLowerCase()], r));
  return Hhs.flatMap((r) => {
    let s = iDi(r, e);
    return s.length === 0 ? [] : sDi(r, s.join(", "));
  }).concat(aDi(e, O(e, t, o, n) ? o[0] : void 0));
}
var I = /^(?:[a-z0-9_-]+(?:\.[a-z0-9_-]+)*\.*|\[[0-9a-f:.]+\])(?::\d*)?$/i, lDi = 32;
function $pl(e) {
  let t = new Set(e);
  if (t.delete(Xho), t.size - (t.has("") ? 1 : 0) > lDi) throw Error("Too many named hosts");
  let n = [...t].filter((o) => I.test(o)).map((o) => {
    let r = o.replace(/:\d*$/, "");
    return r === o ? [o] : [o, r];
  });
  return n.length === t.size ? n : [...n, []];
}
function Upl(e, t) {
  try {
    let n = new URL(e);
    return t.flatMap((o) => n.port && !/:\d*$/.test(o) ? [o, `${o}:${n.port}`] : [o]).map((o) => `${n.protocol}//${o}${n.pathname}${n.search}`);
  } catch {
    return [];
  }
}
