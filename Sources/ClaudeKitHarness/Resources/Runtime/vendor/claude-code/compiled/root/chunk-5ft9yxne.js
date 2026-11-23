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
var chunk_5ft9yxne_exports = {};
__export(chunk_5ft9yxne_exports, {
  Esn: () => Esn,
  Gwt: () => Gwt,
  Q6: () => Q6,
  T7: () => T7,
  Tsn: () => Tsn,
  Wwt: () => Wwt,
  Xxi: () => Xxi,
  jwt: () => jwt,
  ksn: () => ksn,
  nll: () => nll,
  oll: () => oll,
  ppe: () => ppe,
  ppo: () => ppo,
  rll: () => rll,
  tll: () => tll,
  vsn: () => vsn
});
module.exports = __toCommonJS(chunk_5ft9yxne_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_pyawkp3j = require("/$bunfs/root/chunk-pyawkp3j.js");
var import_chunk_nq3exp5d = require("/$bunfs/root/chunk-nq3exp5d.js");
var import_chunk_ksk52rm1 = require("/$bunfs/root/chunk-ksk52rm1.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_util = require("util");
var import_util2 = require("util");
var M = "tengu_rustling_juggling_acorn";
function ksn() {
  return (0, import_chunk_sghy0qej.Pe)(M, { safe: false });
}
function ppo(e) {
  if (e.type !== "http" || (0, import_chunk_xcgcdx61.jl)(e) || (0, import_chunk_ksk52rm1.pN)() || !(e.scope === "local" || e.scope === "user") || !URL.canParse(e.url)) return;
  let n = new URL(e.url);
  return (n.protocol === "https:" || n.protocol === "http:" && (0, import_chunk_dvkg7v5x.P_)(n.hostname)) && n.username === "" && n.password === "" && !(0, import_chunk_3jjr3wje.nL)(n.href) ? n : void 0;
}
function tll(e, n) {
  let t = ppo(n)?.href;
  if (t === void 0) return e;
  return async (r, o) => {
    let i = await (e ?? fetch)(r, o);
    if (o?.method === "POST" && String(r) === t && ksn()) {
      let { redirectedMcpAddresses: s } = (0, import_chunk_qdcbcsg7.mt)();
      if (i.redirected) s.set(t, i.url);
      else s.delete(t);
    }
    return i;
  };
}
class E {
  withCredential;
  underServer;
  #e;
  #n;
  constructor(e, n, t, r) {
    this.withCredential = t;
    this.underServer = r;
    this.#e = e, this.#n = n;
  }
  reveal() {
    return { url: this.#e, headers: this.#n };
  }
  isIn(e) {
    return [this.#e, ...Object.values(this.#n)].some((n) => n !== "" && e.includes(n));
  }
  toString() {
    return "[file link hidden]";
  }
  toJSON() {
    return "[file link hidden]";
  }
  [import_util2.inspect.custom]() {
    return "[file link hidden]";
  }
}
var j = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, I = /^(?:[\x21-\x7e\x80-\xff](?:[\t\x20-\x7e\x80-\xff]*[\x21-\x7e\x80-\xff])?)?$/, G = /^(?:\/(?!\.{1,2}(?:\/|$))[A-Za-z0-9._~-]+)+$/, W = /^https:\/\/[^\s\\/?#@]+(?:[/?#][^\s\\]*)?$/i, B = /* @__PURE__ */ new Set(["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "access-control-request-private-network", "authorization", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "set-cookie", "te", "trailer", "transfer-encoding", "upgrade", "via"]), P = /^x-(?:http-)?method(?:-override)?$/, X = /\b(?:connect|trace|track)\b/i, z = /^(?:forwarded|x-original-url|x-rewrite-url|x-http-method|x-http-method-override|x-method-override|x-forwarded-.*)$/;
function y(e, n, t = n) {
  let r = URL.parse(n)?.origin, o = URL.parse(t);
  if (r === void 0 || o === null) return;
  let i, s = typeof e.path === "string";
  if (typeof e.path === "string") {
    if (!G.test(e.path) || o.username !== "" || o.password !== "" || o.protocol !== "https:" && !(0, import_chunk_dvkg7v5x.P_)(o.hostname)) return;
    let d = `${o.pathname.replace(/\/+$/, "")}${e.path}`;
    if (i = new URL(o.href), i.pathname = d, i.hash = "", i.pathname !== d) return;
  } else if (i = typeof e.url === "string" && W.test(e.url) ? URL.parse(e.url) : null, i === null) return;
  let a = i.origin === r;
  if (e.credentials === "include" && !s && !a) return;
  let f = e.credentials === "include" && a;
  if (e.headers !== void 0 && !(0, import_chunk_ma3kja9f.T)(e.headers)) return;
  let p = {};
  for (let [d, u] of Object.entries(e.headers ?? {})) {
    if (u === null) continue;
    let c = d.toLowerCase();
    if (typeof u !== "string" || P.test(c) && X.test(u) || !j.test(d) || !I.test(u) || B.has(c) || c.startsWith("proxy-") || c.startsWith("sec-") || (s || f) && z.test(c) || Object.hasOwn(p, c)) return;
    p[c] = u;
  }
  return new E(i.href, p, f, s && a);
}
class k {
  #e;
  constructor(e) {
    this.#e = e;
  }
  reveal() {
    return this.#e;
  }
  isIn(e) {
    return e.includes(this.#e);
  }
  toString() {
    return "[download token hidden]";
  }
  toJSON() {
    return "[download token hidden]";
  }
  [import_util.inspect.custom]() {
    return "[download token hidden]";
  }
}
function nll(e, n) {
  let t = (0, import_chunk_ma3kja9f.T)(e) ? e[import_chunk_pyawkp3j.Cit] : void 0, r = (0, import_chunk_ma3kja9f.T)(t) ? t.downloads : void 0;
  if (!Array.isArray(r)) return [];
  let o = n.via === "cloud-session" ? (0, import_chunk_pyawkp3j.wHi)(n.mcpUrl) : void 0, i = n.via === "cloud-session" ? o !== void 0 : n.via === "direct" || n.via === "ccr-save" || (0, import_chunk_pyawkp3j.Wfl)(n.connectorId) !== void 0, s = n.via === "cloud-session" || n.via === "ccr-save" ? import_chunk_pyawkp3j.SHi : import_chunk_pyawkp3j.Mho, a = [];
  for (let [f, p] of r.entries()) {
    if (a.length > s) break;
    if (!(0, import_chunk_ma3kja9f.T)(p)) continue;
    let d = w(p), u = d.size, c = { position: a.length + 1, name: typeof d.name !== "string" ? "" : r.length > import_chunk_pyawkp3j.SHi + 1 ? d.name.slice(-Q).replace(/^[\uDC00-\uDFFF]/, "") : d.name, title: void 0, mimeType: typeof d.mimeType === "string" ? d.mimeType : void 0, size: typeof u === "number" ? u : void 0, refusal: void 0, token: void 0, sha256Hex: void 0, ...n.via === "ccr-save" && { saveRoute: n.mcpUrl } }, l = (0, import_chunk_ma3kja9f.T)(d.digest) ? w(d.digest) : d.digest, O = (0, import_chunk_ma3kja9f.T)(l) && l.algorithm === "sha-256" && typeof l.value === "string" && /^[A-Za-z0-9_-]{43}$/.test(l.value) ? Buffer.from(l.value, "base64url").toString("hex") : void 0, h = typeof d.expiresAt === "string" ? (0, import_chunk_m0xr8k74.NSr)(d.expiresAt) : void 0, b = (0, import_chunk_ma3kja9f.T)(d.headers) ? Object.entries(w(d.headers)) : [], [F, m] = b.length === 1 ? b[0] : ["", void 0], g = F.toLowerCase() === import_chunk_pyawkp3j.b8e && typeof m === "string" && import_chunk_pyawkp3j.Ufl.test(m) ? m : void 0, _ = n.via === "direct" ? y(d, n.mcpUrl, n.redirectedTo) : void 0;
    if (c.position > s) c.refusal = "over_result_cap", c.standsFor = (0, import_chunk_4smdap7r.U)(r.slice(f), import_chunk_ma3kja9f.T);
    else if (q(d, l) || d.mimeType !== void 0 && typeof d.mimeType !== "string" || d.name !== void 0 && typeof d.name !== "string" || d.url === void 0 === (d.path === void 0) || d.url !== void 0 && typeof d.url !== "string" || d.path !== void 0 && typeof d.path !== "string" || d.credentials !== "omit" && d.credentials !== "include" || typeof u !== "number" || !Number.isSafeInteger(u) || u < 0 || l !== void 0 && O === void 0 || d.expiresAt !== void 0 && typeof d.expiresAt !== "string") c.refusal = "target_unreadable";
    else if (u > (n.via === "claude-ai" || n.via === "desktop" ? import_chunk_pyawkp3j.xkt : import_chunk_pyawkp3j.HBt)) c.refusal = "too_large";
    else if (h !== void 0 && h <= Date.now()) c.refusal = "expired";
    else if (n.via === "direct" ? _ === void 0 : !i || d.path !== import_chunk_pyawkp3j.yHi || d.url !== void 0 || d.credentials !== "include" || g === void 0) c.refusal = n.via === "direct" ? "link_not_usable" : "not_the_relay_address";
    else if (d.mimeType === void 0) c.refusal = "no_file_type";
    else {
      if (_ !== void 0) c.direct = _;
      else if (g !== void 0) c.token = new k(g);
      if (c.sha256Hex = O, o !== void 0) c.sessionAddress = o;
      if (h !== void 0) c.expiresAt = h;
    }
    a.push(c);
  }
  return a;
}
var V = /* @__PURE__ */ new Set(["name", "mimeType", "size", "digest", "url", "path", "headers", "credentials", "expiresAt", "_meta"]), Z = /* @__PURE__ */ new Set(["algorithm", "value", "_meta"]);
function q(e, n) {
  return Object.keys(e).some((t) => !V.has(t)) || (0, import_chunk_ma3kja9f.T)(n) && Object.keys(n).some((t) => !Z.has(t));
}
function w(e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let t of Object.keys(e)) if (e[t] !== null) n[t] = e[t];
  return n;
}
var Wwt = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\p{Cs}]/gu, S = 80, A = 4096;
function rll(e) {
  return e.replace(/\[([^[\]]*)\](?!\()|[[\]]/g, (n, t) => t === void 0 ? "_" : n);
}
function ppe(e) {
  let n = e;
  if (e.length > A) {
    let o = e.charCodeAt(A - 1), i = o >= 55296 && o <= 56319;
    n = e.slice(0, A - (i ? 1 : 0));
  }
  let t = n.replace(Wwt, "").trim(), r = Array.from(t);
  return r.length > S || n.length < e.length ? `${r.slice(0, S).join("")}\u2026` : t;
}
var x = "/\\\\\u2215\u2216\u2571\u29F5\u29F8\u29F9\uFE68\uFF0F\uFF3C", J = new RegExp(`[${x}\u2044]`), Y = new RegExp(`[${x}]`), jwt = 4096, Q = 256, ee = 128 * jwt, ne = 64 * jwt, te = new RegExp(Wwt.source, "u");
function Esn(e) {
  let n = e.length > jwt ? e.slice(-jwt).replace(/^[\uDC00-\uDFFF]/, "") : e, t = (0, import_chunk_kx2fp6pc.lg)(n.replace(Wwt, "").split(J).at(-1) ?? "").split(Y).at(-1) ?? "";
  return ppe(t.replace(/^(?:[A-Za-z]:|[\s.\p{M}\u2800])+/u, ""));
}
function Gwt(e) {
  let n = ee, t = [e], r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (typeof i !== "object" || i === null || r.has(i)) continue;
    r.add(i);
    let s = i;
    if (!Array.isArray(i) && (0, import_chunk_ma3kja9f.T)(s._meta) && import_chunk_pyawkp3j.Cit in s._meta) {
      if (typeof s.name === "string") n -= Math.min(s.name.length, jwt), s.name = n < 0 ? "(name not read)" : Esn(s.name) || "(no name)";
      if (typeof s.title === "string") {
        n -= Math.min(s.title.length, jwt);
        let a = n < 0 ? "" : Esn(s.title);
        if (a) s.title = a;
        else delete s.title;
      }
    }
    for (let a of Array.isArray(i) ? i : Object.values(i)) t.push(a);
  }
}
function oll(e) {
  if (e === void 0 || !(import_chunk_pyawkp3j.Cit in e)) return e;
  let n = {};
  for (let [t, r] of Object.entries(e)) if (t !== import_chunk_pyawkp3j.Cit) n[t] = r;
  return Object.keys(n).length === 0 ? void 0 : n;
}
function D(e) {
  let n = [e], t = /* @__PURE__ */ new Set();
  while (n.length > 0) {
    let r = n.pop();
    if (typeof r !== "object" || r === null || t.has(r)) continue;
    if (t.add(r), (0, import_chunk_nq3exp5d.qDe)(r)) {
      if (C((0, import_chunk_nq3exp5d.bUt)(r) ?? "").length > 0) return true;
      continue;
    }
    if (!Array.isArray(r) && Object.hasOwn(r, import_chunk_pyawkp3j.Cit)) {
      let o = (0, import_chunk_ma3kja9f.T)(r) ? r[import_chunk_pyawkp3j.Cit] : void 0;
      if ([o, ...(0, import_chunk_ma3kja9f.T)(o) && Array.isArray(o.downloads) ? o.downloads : []].some((s) => (0, import_chunk_ma3kja9f.T)(s) && (0, import_chunk_ma3kja9f.T)(s.headers) && Object.keys(s.headers).some((a) => a.toLowerCase() === import_chunk_pyawkp3j.b8e))) return true;
    }
    for (let o of Array.isArray(r) ? r : Object.values(r)) n.push(o);
  }
  return false;
}
function Xxi(e) {
  return (0, import_chunk_pyawkp3j.DBt)() || D(e);
}
function T7(e, n) {
  return (0, import_chunk_pyawkp3j.Gfl)(e) || e.type === "claudeai-proxy" && Xxi(n) || e.type === "sdk" && (0, import_chunk_3t7ve0wy.Wu)() && D(n) || ppo(e) !== void 0 && ksn();
}
function vsn(e, n) {
  if (T7(e, n)) {
    let t = ne;
    for (let r of n) if ((0, import_chunk_ma3kja9f.T)(r) && (0, import_chunk_ma3kja9f.T)(r._meta) && import_chunk_pyawkp3j.Cit in r._meta) for (let o of ["name", "title"]) {
      let i = r[o];
      if (typeof i !== "string" || !te.test(i)) continue;
      let s = new RegExp(Wwt), a = 0;
      while (a <= t && s.exec(i) !== null) a++;
      t -= a;
      let f = t >= 0 ? i.replace(Wwt, "") : void 0;
      if (f !== void 0 && f !== "") r[o] = f;
      else if (o === "name") r[o] = f === void 0 ? "(name not read)" : "(no name)";
      else delete r[o];
    }
    Q6(n);
  }
}
function Q6(e) {
  let n = [e], t = /* @__PURE__ */ new Set();
  while (n.length > 0) {
    let r = n.pop();
    if (typeof r !== "object" || r === null || t.has(r)) continue;
    if (t.add(r), Array.isArray(r)) {
      for (let s of r) n.push(s);
      continue;
    }
    let o = r;
    delete o[import_chunk_pyawkp3j.Cit];
    let i = o._meta;
    if ((0, import_chunk_ma3kja9f.T)(i)) {
      let s = Object.keys(i);
      if (s.length === 1 && s[0] === import_chunk_pyawkp3j.Cit) delete i[import_chunk_pyawkp3j.Cit], delete o._meta;
    }
    if ((0, import_chunk_nq3exp5d.qDe)(r)) {
      let s = (0, import_chunk_nq3exp5d.bUt)(r), a = s === void 0 ? void 0 : ce(s);
      if (a !== void 0) Object.assign(r, (0, import_chunk_nq3exp5d.sll)(a));
      continue;
    }
    for (let s of Object.values(o)) n.push(s);
  }
}
function Tsn(e) {
  return typeof e === "string" ? (0, import_chunk_7cfjrnwy.nt)(e, ";").trim().toLowerCase() : "";
}
var L = '"[download token hidden]"', re = 34, oe = 92, ie = 58;
function v(e, n) {
  let t = e.charCodeAt(n);
  return t === 32 || t >= 9 && t <= 13 || t === 160 || t === 5760 || t >= 8192 && t <= 8202 || t === 8232 || t === 8233 || t === 8239 || t === 8287 || t === 12288 || t === 65279;
}
function R(e, n) {
  while (n < e.length && v(e, n)) n++;
  return n;
}
function N(e, n) {
  let t = e.indexOf('"', n + 1);
  while (t !== -1) {
    let r = 0;
    while (e.charCodeAt(t - 1 - r) === oe) r++;
    if (r % 2 === 0) return t + 1;
    t = e.indexOf('"', t + 1);
  }
  return e.length;
}
var se = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function de(e, n, t) {
  if (t - n < import_chunk_pyawkp3j.b8e.length) return false;
  if (t - n === import_chunk_pyawkp3j.b8e.length) return e.slice(n, t).toLowerCase() === import_chunk_pyawkp3j.b8e;
  let r = "";
  for (let o = n; o < t; o++) {
    if (r.length > import_chunk_pyawkp3j.b8e.length) return false;
    let i = e[o];
    if (i !== "\\") r += i;
    else if (e[o + 1] === "u" && /^[0-9A-Fa-f]{4}$/.test(e.slice(o + 2, o + 6))) r += String.fromCharCode(parseInt(e.slice(o + 2, o + 6), 16)), o += 5;
    else r += se[e[o + 1] ?? ""] ?? e[o + 1] ?? "", o += 1;
  }
  return r.toLowerCase() === import_chunk_pyawkp3j.b8e;
}
function ae(e, n) {
  let t = 0, r = n;
  while (r < e.length) {
    let o = e[r];
    if (o === '"') {
      r = N(e, r);
      continue;
    }
    if (o === "{" || o === "[") t++;
    else if (o === "}" || o === "]") {
      if (t === 0) break;
      t--;
    } else if (o === "," && t === 0) break;
    r++;
  }
  while (r > n && v(e, r - 1)) r--;
  return r;
}
function C(e) {
  let n = [], t = e.indexOf('"');
  while (t !== -1) {
    let r = N(e, t), o = r, i = R(e, r);
    if (e.charCodeAt(i) === ie && e.charCodeAt(r - 1) === re && r - 1 > t && de(e, t + 1, r - 1)) {
      let s = R(e, i + 1);
      if (o = ae(e, s), o > s && e.slice(s, o) !== L) n.push([s, o]);
    }
    t = o < e.length ? e.indexOf('"', o) : -1;
  }
  return n;
}
function ce(e) {
  let n = C(e);
  if (n.length === 0) return;
  let t = [], r = 0;
  for (let [o, i] of n) t.push(e.slice(r, o), L), r = i;
  return t.push(e.slice(r)), t.join("");
}
