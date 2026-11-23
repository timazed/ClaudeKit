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
var chunk_271xsh6x_exports = {};
__export(chunk_271xsh6x_exports, {
  Ahs: () => Ahs,
  BBt: () => BBt,
  Bl: () => Bl,
  Chs: () => Chs,
  Fkt: () => Fkt,
  Ihs: () => Ihs,
  Kho: () => Kho,
  Ohs: () => Ohs,
  Opl: () => Opl,
  Phs: () => Phs,
  Pit: () => Pit,
  Pje: () => Pje,
  Ppl: () => Ppl,
  Rhs: () => Rhs,
  Rpl: () => Rpl,
  UBt: () => UBt,
  Vho: () => Vho,
  WBt: () => WBt,
  X5: () => X5,
  XSr: () => XSr,
  YSr: () => YSr,
  Yho: () => Yho,
  _1n: () => _1n,
  can: () => can,
  dan: () => dan,
  fan: () => fan,
  fre: () => fre,
  g1n: () => g1n,
  han: () => han,
  man: () => man,
  nDi: () => nDi,
  oDi: () => oDi,
  pan: () => pan,
  qho: () => qho,
  r4: () => r4,
  rDi: () => rDi,
  tDi: () => tDi,
  uan: () => uan,
  xR: () => xR,
  xhs: () => xhs,
  xje: () => xje,
  xpl: () => xpl,
  xr: () => xr,
  y1n: () => y1n
});
module.exports = __toCommonJS(chunk_271xsh6x_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_8x650tx8 = require("/$bunfs/root/chunk-8x650tx8.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function g1n(e) {
  try {
    let r = new URL(e);
    if (r.protocol !== "https:" && r.protocol !== "http:") return;
    return r.origin;
  } catch {
    return;
  }
}
function Vho(e) {
  return { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound, authServerMetadataUrl: e.authServerMetadataUrl, ...e.xaaPinned && { xaaPinned: true } };
}
function U(e) {
  return e !== void 0 && e.authorizationServerUrl !== "";
}
function Rpl({ previous: e, discovered: r, servedMetadataUrl: o }) {
  if (U(e) && e.authServerMetadataUrl !== void 0) return { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound, authServerMetadataUrl: e.authServerMetadataUrl, ...e.xaaPinned && { xaaPinned: true } };
  if (!r.oauthMetadataFound || g1n(r.authorizationServerUrl) === void 0) return U(e) ? { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound } : { ...r };
  if (U(e) && e.oauthMetadataFound !== true && o !== void 0) return { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound };
  return { ...r, authServerMetadataUrl: o ?? null };
}
function le(e, { servedMetadataUrl: r, interactiveSignIn: o }) {
  if (!U(e)) return e;
  let a = r ?? null;
  return (o ? e.authServerMetadataUrl === a : e.authServerMetadataUrl !== void 0) ? e : { ...e, authServerMetadataUrl: a };
}
function xpl({ previous: e, signIn: r, servedMetadataUrl: o, interactiveSignIn: a }) {
  if (UBt(e)) return e;
  if (r !== void 0 && g1n(r.authorizationServerUrl) !== void 0 && (a || !U(e))) {
    let { authServerMetadataUrl: s, xaaPinned: l, ...u } = e ?? { authorizationServerUrl: "" };
    return a || r.oauthMetadataFound ? { ...u, authorizationServerUrl: r.authorizationServerUrl, oauthMetadataFound: r.oauthMetadataFound, authServerMetadataUrl: o ?? null } : { ...u, authorizationServerUrl: r.authorizationServerUrl, oauthMetadataFound: r.oauthMetadataFound };
  }
  if (e !== void 0 && !a && e.oauthMetadataFound !== true && e.authServerMetadataUrl === void 0) return r !== void 0 && o === void 0 && r.oauthMetadataFound && g1n(r.authorizationServerUrl) !== void 0 ? { ...e, authorizationServerUrl: r.authorizationServerUrl, oauthMetadataFound: true, authServerMetadataUrl: null } : e;
  return e && le(e, { servedMetadataUrl: o, interactiveSignIn: a });
}
function tDi({ previous: e, issuedBy: r, interactiveSignIn: o }) {
  let a = e?.authServerMetadataUrl;
  return { authorizationServerUrl: UBt(e) ?? r, oauthMetadataFound: true, authServerMetadataUrl: !o && a !== void 0 ? a : null, xaaPinned: true };
}
function UBt(e) {
  return e?.xaaPinned === true && U(e) ? e.authorizationServerUrl : void 0;
}
var _1n = "IDE_SUPERSEDED";
function Ppl(e) {
  return e?.code === 4001 && e.reason === "Another Claude Code session connected to this IDE";
}
function Chs(e) {
  if (typeof e !== "object" || e === null) return false;
  let r = e;
  return typeof r.name === "string" && (r.errorCode === void 0 || typeof r.errorCode === "string") && (r.error === void 0 || typeof r.error === "string");
}
var ce = 200;
function xr(e, r = 64) {
  if (typeof e !== "string") return "";
  return Bl((0, import_chunk_kx2fp6pc.lg)(e).replace(/['`]/g, " "), r, "none");
}
var fe = new RegExp(`[<>";\\u2018\\u2019\\u201A\\u201C\\u201D\\u201E\\u00AB\\u00BB${[...import_chunk_kx2fp6pc.WLr.keys()].join("")}]`, "gu");
function dan(e, r = 1024) {
  return Bl(e, r);
}
function Bl(e, r = ce, o = "all") {
  if (typeof e !== "string") return "";
  let a = (0, import_chunk_kx2fp6pc.L4t)((0, import_chunk_kx2fp6pc.lg)(e)).replaceAll(fe, " ").replaceAll(/\s+/g, " ").trim(), s = Math.max(k, r + ne), l = a.length > s, u = y1n(l ? (0, import_chunk_7cfjrnwy.ee)(a, s) : a, o);
  return l || u.length > r ? `${(0, import_chunk_7cfjrnwy.ee)(u, r)}\u2026` : u;
}
var J = 500;
function xR(e) {
  let r = (0, import_chunk_kx2fp6pc.L4t)(e).replaceAll(/\s+/g, " ").trim(), o = y1n(r.length > k ? (0, import_chunk_7cfjrnwy.ee)(r, k) : r);
  return o.length > J ? `${(0, import_chunk_7cfjrnwy.ee)(o, J)}\u2026` : o;
}
var b = String.raw`(?:access[-_ ]?|refresh[-_ ]?|id[-_ ]?|client[-_ ]?|api[-_ ]?|x[-_]api[-_ ]?|session[-_ ]?|auth[-_ ]?)?(?:token|key|secret|password|authorization|credential)s?`, de = String.raw`\b${b}(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${b}=*(?![A-Za-z0-9._~+/=%-]))(?=[A-Za-z0-9._~+/=%-]{8})[A-Za-z]*[0-9._~+/=%-]`, te = String.raw`(?:[A-Za-z0-9._~+/=%-]+?(?=${de})|[A-Za-z0-9._~+/=%-]{8,})`, pe = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(bearer|basic)(?![\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?${b}=*(?![A-Za-z0-9._~+/=%-]))[\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?(${te})`, "gi"), he = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(${b})(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${b}=*(?![A-Za-z0-9._~+/=%-]))(${te})`, "gi");
function Q(e, r, o, a, s) {
  if (!/[0-9._~+/=%-]/.test(o)) return e;
  return /\w/.test(s[a + e.length] ?? "") ? `${r} [redacted] ` : `${r} [redacted]`;
}
function y1n(e, r = "all") {
  if (r === "none") return e;
  return e.replace(pe, Q).replace(he, Q);
}
var ge = /^(?:bearer|basic|(?:access|refresh|id|client|api|x[-_]api|session|auth)?[-_ ]?(?:token|key|secret|password|authorization|credential)s?)$/i, me = /(?:^|[^A-Za-z0-9_\s])(?:bearer|basic|token|key|secret|password|authorization|credential)s?$/i;
function Se(e) {
  let r = e.split(/[:=\uFF1A\uFF1D]+/).map((a) => a.trim()), o = 0;
  for (let [a, s] of r.entries()) {
    if (s === "") continue;
    let l = a < r.length - 1 || s.startsWith("-");
    if (!ge.test(s) && !(l && me.test(s))) return false;
    o++;
  }
  return o > 0;
}
var k = 2e3, ne = 512, re = k + ne, _e = 32, Ee = 262144, Ce = 131072, Me = 8192, Re = 65536, Ae = new RegExp("^(?:[\\p{Cc}\\p{Cf}\\p{Zl}\\p{Zp}\\p{Default_Ignorable_Code_Point}\\u2800]|(?!\\u0020)\\p{Zs})$", "u");
function Ahs(e) {
  let r = e.errorCode ? ` (${e.errorCode})` : "", o = e.error ? `: "${e.error}"` : "";
  return `${e.name}${r}${o}`;
}
var BBt = "Blocked by enterprise managed policy", WBt = "Disabled by disableClaudeAiConnectors setting", Pit = "This server leads to a connector that is turned off by your organization's connector settings. An organization admin can change this in the claude.ai connector settings", Kho = "Not approved for this project - approve it via /mcp first", YSr = "Refused - Claude Code reserves this address for its own use", can = `Claude in Chrome is ${(0, import_chunk_4jzbgp2v.dVt)([])}.`, Rhs = "The organization's own Claude in Chrome setting can turn it off, and so can a compliance configuration such as Zero Data Retention (ZDR) for Claude Code, which can keep it off in Claude Code even where that setting is on. This note can't tell which one applies, so don't say which one the organization has.", nDi = "Refused by network proxy policy - signing in or retrying will not help", uan = "Account changed while connecting - reconnect to use it", fan = "Disabled in /mcp", rDi = "The plugin that provides this server is not available right now", Opl = "claude.ai rejected the session token \u2014 it may lack connector scopes or be invalid. Run /login.", pan = "Authentication cleared", man = "Authentication could not be cleared", qho = "Its connection was closed while signing in again", ve = /* @__PURE__ */ new Set([BBt, WBt, Pit]);
function xje(e) {
  return e !== void 0 && ve.has(e);
}
var han = "TOOLS_LIST_FAILED";
function Fkt(e) {
  return e === YSr;
}
function Pje(e) {
  return e === can;
}
function XSr(e) {
  return e === nDi;
}
function r4(e) {
  return e.type === "failed" && e.errorCode === "UNCONFIGURED";
}
function xhs(e) {
  let { awaitsNextTurnRedial: r } = (0, import_chunk_qdcbcsg7.mt)();
  return (o) => e?.has(o) === true && !(0, import_chunk_8x650tx8.WH)(o.name) && "on_reach" || r?.(o) === true;
}
function X5(e) {
  return e.type === "failed" && e.errorCode === "404" && e.name === import_chunk_qdcbcsg7.ri && (0, import_chunk_qdcbcsg7.Pl)(e.config);
}
function fre(e) {
  return e.type === "failed" && e.errorCode === "410" && e.name === import_chunk_qdcbcsg7.$n && e.config.scope === "dynamic" && (0, import_chunk_2hdy50wd.Xf)() && !(0, import_chunk_2hdy50wd.O2t)();
}
function oe(e) {
  return false;
}
function oDi(e) {
  return e.type === "failed" && e.errorCode === "424" && e.name === import_chunk_qdcbcsg7.$n && e.config.scope === "dynamic";
}
var ie = "Linked computer removed from the account";
function Phs(e) {
  return e === ie;
}
function Ohs(e, r = () => false) {
  return e.filter((o) => o.type === "failed").filter((o) => !r4(o)).filter((o) => !X5(o)).filter((o) => !fre(o)).filter((o) => o.errorCode !== _1n).filter((o) => o.error !== rDi).filter((o) => !oe(o)).map((o) => {
    if (oDi(o)) return { name: import_chunk_qdcbcsg7.$n, error: ie };
    let a = r(o);
    return { name: Bl(o.name), ...o.errorCode !== void 0 && Bl(o.errorCode) !== han && { errorCode: Bl(o.errorCode) }, ...(o.error !== void 0 || o.displayDetail !== void 0) && { error: [o.error, o.displayDetail].filter((s) => Boolean(s)).map((s) => Bl(s)).join(" ") }, ...a && { willRetry: a } };
  });
}
function Ihs(e, r) {
  let o = new Set(r.flatMap((a) => a.mcpInfo?.serverName ?? []));
  return e.filter((a) => a.type === "connected").filter((a) => a.toolsListError !== void 0 && a.droppedTools === void 0).filter((a) => !a.toolsListUnsupported).filter((a) => !xje(a.toolsListError) && !Pje(a.toolsListError)).filter((a) => !a.discoveryAuthFailure && !a.discoveryBearerRejected).filter((a) => !o.has(a.name) && !(0, import_chunk_8x650tx8.WH)(a.name)).filter((a) => !oe(a)).map((a) => ({ name: Bl(a.name), errorCode: han }));
}
function ye(e, r) {
  if (!e || !r || !e.includes("${")) return [];
  let o = (0, import_chunk_418mqjww.yxt)(e);
  if (o.length < 2) return [];
  if (r.length > 2e3 || o.length > 9) return [];
  let a = o.map(import_chunk_7cfjrnwy.fo), s = [];
  if (o.length === 2) {
    let [l = "", u = ""] = o;
    if (r.length >= l.length + u.length && r.startsWith(l) && r.endsWith(u)) s.push(r.slice(l.length, r.length - u.length));
  } else if (o.length === 3) {
    let [l = "", u = "", d = ""] = o;
    if (r.startsWith(l) && r.endsWith(d)) {
      let g = r.slice(l.length, r.length - d.length);
      if (u === "") s.push(g);
      else {
        let A = [];
        for (let C = g.indexOf(u); C !== -1 && A.length <= 64; C = g.indexOf(u, C + 1)) A.push(C);
        let w = A.length > 64 ? [A[0] ?? 0, g.lastIndexOf(u)] : A;
        for (let C of w) s.push(g.slice(0, C), g.slice(C + u.length));
      }
    }
  } else {
    for (let d = 1; d < o.length - 1; d++) if (o[d] === "") return [];
    let l = "^";
    for (let d = 0; d < a.length; d++) if (l += a[d], d < a.length - 1) {
      let g = o[d + 1] ?? "";
      if (g === "") l += "([\\s\\S]*)";
      else {
        let A = g.charAt(0).replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
        l += `([^${A}]*)`;
      }
    }
    let u = r.match(new RegExp(l + "$"));
    if (u) s.push(...u.slice(1).filter((d) => d !== ""));
  }
  return (0, import_chunk_4smdap7r.M)(s);
}
function De(e, r) {
  if (!e) return [];
  let o = [], a = (s, l) => {
    if (typeof s === "string" && typeof l === "string") o.push(...ye(s, l));
  };
  if ("url" in e && "url" in r) a(e.url, r.url);
  if ("command" in e && "command" in r) {
    a(e.command, r.command);
    let s = Array.isArray(e.args) ? e.args : [], l = Array.isArray(r.args) ? r.args : [];
    for (let u = 0; u < Math.min(s.length, l.length); u++) a(s[u], l[u]);
  }
  for (let s of ["headers", "env"]) {
    let l = s in e ? e[s] : void 0, u = s in r ? r[s] : void 0;
    if (l && u && typeof l === "object" && typeof u === "object") for (let [d, g] of Object.entries(l)) a(g, u[d]);
  }
  return o;
}
function Pe(e, r) {
  for (let o of r) {
    if (o.length <= e.length) return false;
    if (o.startsWith(e)) return true;
  }
  return false;
}
function Yho(e, r, o, a) {
  let s = o ?? "[mcp-endpoint]", l = new TextDecoder("utf-8", { fatal: false }), u = (t) => t.replace(/(?:%[0-9A-Fa-f]{2})+/g, (n) => l.decode(Uint8Array.from(n.match(/[0-9A-Fa-f]{2}/g) ?? [], (i) => parseInt(i, 16)))), d = /* @__PURE__ */ new Map(), g = (t) => {
    if (t === `
` || t === "	") return false;
    if (t.length === 1) {
      let i = t.charCodeAt(0);
      if (i >= 55296 && i <= 57343) return true;
    }
    let n = d.get(t);
    if (n === void 0) n = Ae.test(t), d.set(t, n);
    return n;
  }, A = (t) => {
    let n = "", i = 0;
    while (i < t.length) {
      if (t[i] !== "%") {
        n += t[i], i++;
        continue;
      }
      let c = [], f = i + 1, S = false;
      while (f < t.length && c.length < 2) {
        let m = String.fromCodePoint(t.codePointAt(f) ?? 0);
        if (/^[0-9A-Fa-f]$/.test(m)) c.push(m), f += m.length;
        else if (g(m) && !/[\n\t]/.test(m) || new RegExp("^\\p{M}$", "u").test(m)) S = true, f += m.length;
        else break;
      }
      if (c.length === 2 && S) n += "%" + c.join(""), i = f;
      else n += "%", i++;
    }
    return n;
  }, w = 0, C = (t) => {
    let n = t, i = 0;
    for (let c = 0; c <= _e; c++) {
      if (i += n.length, w += c === 0 ? 0 : n.length, i > Ee || w > Ce) break;
      let f = (0, import_chunk_kx2fp6pc.lg)(u(A(n)));
      if (f === n) return n;
      n = f;
    }
    throw Error("MCP error text or config too long or too deeply encoded");
  }, B = /* @__PURE__ */ new Map(), j = (t) => {
    let n = B.get(t);
    if (n === void 0) n = new RegExp("\\p{M}", "u").test(t.normalize("NFD")) ? [...t.normalize("NFD")].filter((i) => !new RegExp("\\p{M}", "u").test(i)).join("") : t, B.set(t, n);
    return n;
  }, H = /* @__PURE__ */ new Map(), G = (t) => {
    let n = H.get(t);
    if (n === void 0) n = [...C(t)].filter((i) => !g(i)).map(j).join(""), H.set(t, n);
    return n;
  }, T = e.length > re, W = /%[%0-9A-Fa-f]{0,11}$/, Y = T ? C((0, import_chunk_7cfjrnwy.ee)(e, re).replace(W, "")).replace(W, "").replace(/\uFFFD+$/, "") : C(e);
  if (Y.length > Me) throw Error("MCP error text too long once decoded");
  let R = "", D = "", F = [];
  for (let t of Y) {
    if (g(t)) {
      D += " ";
      continue;
    }
    let n = j(t);
    for (let i = 0; i < n.length; i++) F.push(D.length + Math.min(i, t.length - 1));
    R += n, D += t;
  }
  F.push(D.length);
  let P = [], v = (t, n, i) => {
    let c = t === void 0 ? void 0 : G(t);
    if (!c || c.length < 4) return;
    if (n !== "[redacted]" && n.includes(c)) return;
    P.push([c, n, i?.wordBoundary === true]);
  }, O = (t, n = s) => {
    let i = t === void 0 ? void 0 : G(t);
    if (i && (n.includes(i) || Se(i.trim()))) return;
    v(i, "[redacted]");
  }, _ = (t, n = s) => {
    if (!t) return;
    if (O(t, n), t.includes("+")) O(t.replaceAll("+", " "), n);
    if (t.includes(" ")) O(t.replaceAll(" ", "+"), n);
    for (let i of [t, t.replaceAll("+", " ")]) {
      let c = i.split(/\s+/);
      if (c.length > 1) for (let f of c) O(f, n);
    }
  }, Z = (t, n) => {
    v(t, n);
    let i = URL.parse(t);
    if (i === null) return;
    if (v(i.href, n), i.origin !== "null") v(i.origin, n);
    v(i.host, n), v(i.hostname, n);
    let c = i.hostname.replace(/^\[|\]$/g, "");
    if (c !== i.hostname) v(c, n);
    _(i.username, n), _(i.password, n), O(i.pathname !== "/" ? i.pathname : void 0, n);
    for (let f of i.pathname.split("/")) _(f, n);
    O(i.search, n);
    for (let [f, S] of i.searchParams.entries()) _(f, n), _(S, n);
    for (let f of i.search.replace(/^\?/, "").split("&")) {
      let S = f.indexOf("=");
      if (S === -1) _(f, n);
      else _(f.slice(0, S), n), _(f.slice(S + 1), n);
    }
  };
  for (let t of De(a, r)) _(t);
  if ("url" in r && typeof r.url === "string") Z(r.url, s);
  if ("oauth" in r && typeof r.oauth?.authServerMetadataUrl === "string") {
    let t = r.oauth.authServerMetadataUrl;
    Z(t, g1n(t) ?? "[redacted]");
  }
  if ("command" in r && typeof r.command === "string") {
    let t = a && "command" in a && typeof a.command === "string" ? (0, import_chunk_418mqjww.sft)(a.command) : void 0;
    if (v(r.command, t ?? s, { wordBoundary: true }), Array.isArray(r.args)) for (let n of r.args) _(n);
  }
  if ("headers" in r && r.headers) for (let t of Object.values(r.headers)) _(t);
  if ("env" in r && r.env) for (let t of Object.values(r.env)) _(t);
  if ("authToken" in r && typeof r.authToken === "string") _(r.authToken);
  if (P.length === 0) return T ? `${D}\u2026` : e;
  P.sort((t, n) => n[0].length - t[0].length);
  let x = /* @__PURE__ */ new Map();
  for (let [t, n, i] of P) {
    let c = x.get(t);
    if (!c) x.set(t, { replacement: n, wordBoundary: i });
    else if (c.replacement === "[redacted]" && n !== "[redacted]") x.set(t, { replacement: n, wordBoundary: c.wordBoundary && i });
  }
  let z = new Int32Array(R.length), K = [], V = /* @__PURE__ */ new Set(), ae = 0, se = R.toUpperCase();
  for (let [t, n] of x) {
    if (!se.includes(t.toUpperCase())) continue;
    let i = n.wordBoundary && /^[\w-]+$/.test(t), c = `${i}:${t.replace(/[a-z]+/g, (h) => h.toUpperCase())}`;
    if (V.has(c)) continue;
    V.add(c);
    let f = (0, import_chunk_7cfjrnwy.fo)(t), S = i ? `(?<![\\w:.-])${f}(?![\\w:.-])` : f, m = new RegExp(S, "gi");
    for (let h = m.exec(R); h !== null; h = m.exec(R)) {
      if (++ae > Re) throw Error("MCP error text repeats too much of the config");
      let p = h.index + h[0].length;
      if (p > (z[h.index] ?? 0)) z[h.index] = p, K[h.index] = n.replacement;
      m.lastIndex = h.index + 1;
    }
  }
  let I = [];
  for (let [t, n] of z.entries()) {
    if (n === 0) continue;
    let i = I.at(-1);
    if (i && t < i.end) i.end = Math.max(i.end, n);
    else I.push({ start: t, end: n, replacement: K[t] ?? "" });
  }
  let E = R.length;
  if (T) {
    let t = E, n = 12;
    while (t > 0 && E - t < n && /[%0-9A-Fa-f\uFFFD]/.test(R[t - 1] ?? "")) t--;
    if (t < E && /[%\uFFFD]/.test(R.slice(t, E))) {
      let p = R.slice(t, E).search(/[%\uFFFD]/);
      E = t + p;
    }
    let i = P[0]?.[0].length ?? 0, c = Math.max(0, E - (i - 1)), f = (0, import_chunk_4smdap7r.M)(P.map(([p]) => p.toUpperCase())).sort((p, N) => N.length - p.length), S = R.slice(c, E), m = [], h = "";
    for (let p of S) m.push(h.length, ...p.length === 2 ? [-1] : []), h += p.toUpperCase();
    for (let p = 0; p < S.length; p++) {
      let N = m[p] ?? 0, ue = N === -1 ? S.charAt(p) + h.slice(m[p + 1] ?? h.length) : h.slice(N);
      if (Pe(ue, f)) {
        E = c + p;
        break;
      }
    }
  }
  let X = (t) => t === 0 ? 0 : (F[t - 1] ?? 0) + 1, y = "", L = 0;
  for (let t of I) {
    if (t.start >= E) break;
    y += D.slice(X(L), F[t.start]) + t.replacement, L = t.end;
  }
  if (L < E) y += D.slice(X(L), F[E]);
  let q = y.charCodeAt(y.length - 1);
  if (q >= 55296 && q <= 56319) y = y.slice(0, -1);
  return T ? `${y}\u2026` : y;
}
