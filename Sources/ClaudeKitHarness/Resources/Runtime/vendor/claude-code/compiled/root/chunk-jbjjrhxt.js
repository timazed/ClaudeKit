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
var chunk_jbjjrhxt_exports = {};
__export(chunk_jbjjrhxt_exports, {
  Qte: () => Qte,
  STe: () => STe,
  Ztt: () => Ztt,
  aBa: () => aBa,
  bu: () => bu,
  ent: () => ent,
  gl: () => gl,
  iBa: () => iBa,
  rsr: () => rsr,
  y7r: () => y7r
});
module.exports = __toCommonJS(chunk_jbjjrhxt_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var O = 8;
var F = /^v?\d+(?:[._-]\d+)*$/i;
var S = new RegExp("^[A-Za-z0-9._~+/=%-]+$"), x = new RegExp("[^A-Za-z0-9._~+/=%-]+"), K = /^(?=.{1,32}$)(?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+)(?:[-_](?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+))*$/;
function p(t) {
  return /[a-z]/i.test(t) && (/\d/.test(t) || /[a-z]/.test(t) && /[A-Z]/.test(t));
}
function h(t) {
  return t.length >= 24 && S.test(t) && !F.test(t) && !K.test(t) && p(t);
}
function E(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    return t.replace(/%[0-9A-Fa-f]{2}/g, (e) => String.fromCharCode(parseInt(e.slice(1), 16)));
  }
}
var Z = /^(?:\*|application|audio|font|example|haptics|image|message|model|multipart|text|video)\/(?:\*|[a-z0-9](?:[a-z0-9!#$&^_.+-])*)(?:\s*;\s*[a-z0-9!#$&^_.-]+=[\w!#$&^_.+-]*)*$/i, q = /^(?:gzip|x-gzip|deflate|br|zstd|compress|identity|\*)(?:\s*;\s*q=[\d.]+)?$/i, G = /^charset=[\w.:-]+$/i, v = /(?<![;,\s])[;,\s]+$/;
function L(t) {
  let e = t.replace(v, "").split(",").map((n) => n.trim()).filter(Boolean);
  if (e.length === 0) return false;
  return e.every((n) => Z.test(n) || q.test(n) || G.test(n));
}
var V = /* @__PURE__ */ new Set(["accept", "accept-encoding", "content-length", "content-type", "user-agent"]), W = /^\d+$/, Q = /(?:^|[^A-Za-z0-9_-])[A-Za-z][A-Za-z0-9_-]{1,31}\s+[A-Za-z0-9._~+/=%-]{8,}(?![A-Za-z0-9._~+/=%-])/, Y = /([;,&\s]+)/, J = /[a-z0-9+.-]+/gi, X = /^(?:https?|wss?|ftp)$/i, tt = /[;,&=]/, et = /[\t\n\r]/g;
function w(t) {
  return t.length >= O && p(t) && !L(t);
}
function b(t) {
  return w(t) || t.includes("+") && t.split("+").some(w);
}
function nt(t) {
  return t.split(/\s+/).some((e) => e.includes("+") && e.split("+").some(w)) || t.split(/[;,&\s]+/).some((e) => {
    let n = e.indexOf("=");
    return n === -1 ? b(e) : b(e.slice(0, n)) || b(e.slice(n + 1));
  });
}
function rt(t, e) {
  if (t === "user-agent") return !Q.test(e);
  return W.test(e) || L(e) && !nt(e);
}
function rsr(t) {
  let e = {};
  for (let [n, o] of Object.entries(t)) {
    let r = n.toLowerCase();
    e[n] = V.has(r) && rt(r, o) ? o : "[REDACTED]";
  }
  return e;
}
function N(t, e = false) {
  let n = t.replace(et, "");
  if (!n.includes(":")) return false;
  let o = e ? -1 : n.lastIndexOf("?");
  for (let r of n.matchAll(J)) {
    let c = r.index + r[0].length;
    if (n[c] !== ":" || !/[a-z]/i.test(r[0])) continue;
    if (/[/\\]/.test(n[c + 1] ?? "") || !e && X.test(r[0]) || o > c) return true;
  }
  return false;
}
function m(t) {
  let e = t;
  for (let n = 0; ; n++) {
    if (N(e)) return true;
    let o = n < 3 ? E(e) : e;
    if (o === e) return false;
    e = o;
  }
}
function _(t) {
  let e = t.length < 2 ? -1 : t.lastIndexOf("@", t.length - 2), n = t.indexOf(":");
  return n !== -1 && e > n + 1 ? e : -1;
}
function l(t, e = true) {
  for (let n of (0, import_chunk_4smdap7r.M)([t, t.replaceAll(" ", "+")])) {
    let o = n;
    for (let r = 0; ; r++) {
      if (h(o) || N(o) || _(o) !== -1 || e && T(o)) return true;
      let c = r < 3 ? E(o) : o;
      if (c === o) break;
      o = c;
    }
  }
  return false;
}
function y(t, e) {
  return !e || l(t) ? "REDACTED" : t;
}
function R(t) {
  return h(t) || h(E(t));
}
function T(t) {
  return t.replace(/\s+/g, "+").split(x).some(R);
}
var ot = /* @__PURE__ */ new Map([["state", "sensitive"], ["nonce", "sensitive"], ["code_challenge", "sensitive"], ["code_verifier", "sensitive"], ["code", "sensitive"], ["redirect_uri", "url"], ["resource", "url"], ["audience", "url"], ["scope", "judged"], ["client_id", "judged"], ["response_type", "judged"], ["response_mode", "judged"], ["code_challenge_method", "judged"], ["prompt", "judged"], ["access_type", "judged"], ["display", "judged"]]);
function iBa(t) {
  let e = new URLSearchParams();
  for (let [o, r] of t.searchParams) {
    let c = y(o, r !== "");
    e.append(c, c === "REDACTED" ? "REDACTED" : STe(o, r));
  }
  let n = e.toString();
  return n === "" ? "" : `?${n}`;
}
function STe(t, e) {
  let n = ot.get(t);
  if (n === void 0) return "REDACTED";
  switch (n) {
    case "sensitive":
      return "[REDACTED]";
    case "url":
      return m(e) || m(e.replaceAll(" ", "+")) ? bu(e) : "REDACTED";
    case "judged":
      return st(e);
  }
}
function st(t) {
  let e = [], n = [], o = () => {
    if (n.length > 0) e.push(...it(n)), n = [];
  };
  for (let r of t.split(" ")) if (m(r)) o(), e.push(bu(r));
  else n.push(r);
  return o(), e.join(" ");
}
function it(t) {
  if (l(t.join(" "), false)) return ["REDACTED"];
  let e = [], n = [], o = () => {
    if (n.length > 0) e.push(...l(n.join("+")) ? ["REDACTED"] : n.map((r) => l(r) ? "REDACTED" : r)), n = [];
  };
  for (let r of t) if (r === "" || S.test(r)) n.push(r);
  else o(), e.push(l(r) || T(r) ? "REDACTED" : r);
  return o(), e;
}
function bu(t) {
  let e;
  try {
    e = new URL(t);
  } catch {
    return "[unparseable url]";
  }
  let n = e.host === "" && !e.href.startsWith(`${e.protocol}//`);
  if (e.username !== "") e.username = "REDACTED";
  if (e.password !== "") e.password = "REDACTED";
  let o = (s) => {
    let i = s.indexOf("=");
    if (i === -1 || /^=*$/.test(s.slice(i + 1))) return R(s) ? "REDACTED" : s;
    let a = s.slice(0, i);
    return `${R(a) || R(s) && p(a) ? "REDACTED" : a}=REDACTED`;
  }, r = (s) => s.split(Y).map((i, a) => a % 2 === 1 ? i : o(i)).join(""), c = (s) => {
    let i = r(s);
    if (m(i) || T(i)) return "REDACTED";
    let a = i;
    for (let g = 0; g < 3; g++) {
      let u = E(a);
      if (u === a) break;
      if (r(u) !== u || _(u) !== -1 || T(u)) return "REDACTED";
      a = u;
    }
    return i;
  }, C = `${n ? e.protocol : ""}${e.pathname}`, P = _(C), f;
  if (N(e.pathname, true)) {
    let s = e.pathname.indexOf("/"), i = `${e.protocol}${s === -1 ? e.pathname : e.pathname.slice(0, s)}`;
    f = n && _(i) !== -1 ? "REDACTED" : `${n ? e.protocol : ""}${e.pathname.startsWith("/") ? "/" : ""}REDACTED`;
  } else {
    let s = e.pathname.split("/").map(c);
    if (n) s[0] = `${e.protocol}${s[0] ?? ""}`;
    if (P !== -1) {
      let i = (B) => (0, import_chunk_7cfjrnwy.Mt)(C.slice(0, B), "/"), a = i(C.indexOf(":")), g = i(P), u = s[g] ?? "", U = u.includes("@") ? u.slice(u.lastIndexOf("@")) : "";
      s.splice(a, g - a + 1, `REDACTED${U}`);
    }
    f = s.join("/");
  }
  if (!n) {
    if (e.pathname = f, tt.test(e.hostname)) e.hostname = "REDACTED";
  }
  let z = (0, import_chunk_4smdap7r.M)(e.searchParams.keys()), j = new Set([...e.searchParams.entries()].filter(([, s]) => s === "").map(([s]) => s)), I = new URLSearchParams();
  for (let s of z) I.append(y(s, !j.has(s)), "REDACTED");
  return e.search = I.toString(), e.hash = "", n ? `${f}${e.search}` : e.href;
}
function k(t) {
  try {
    let e = new URL(t);
    return e.username !== "" || e.password !== "";
  } catch {
    return true;
  }
}
function D(t) {
  return (0, import_chunk_jv7av99m.Fe)(t) || t instanceof Error && (t.name === "TimeoutError" || t.name === "AuthenticationCancelledError") || t instanceof import_chunk_jv7av99m.A;
}
function at(t, e) {
  let n = String(e);
  return k(n) && !D(t) ? `${t instanceof Error ? t.name : typeof t} fetching ${bu(n)}` : (0, import_chunk_jv7av99m.d)(t);
}
function ct(t) {
  try {
    return bu(t) === new URL(t).href;
  } catch {
    return false;
  }
}
function Ztt(t, e) {
  return H(t, String(e), "from the MCP SDK for");
}
function H(t, e, n) {
  if (D(t) || ct(e)) return (0, import_chunk_jv7av99m.d)(t);
  let o = t instanceof Error ? /\bHTTP (\d{3})\b/.exec(t.message)?.[1] : void 0, r = (0, import_chunk_865at33z.rh)(t)?.code;
  return `${o ? `HTTP ${o}` : t instanceof Error ? t.name : typeof t} ${n} ${bu(e)}${r ? ` (${r})` : ""}`;
}
function Qte(t) {
  if (D(t)) return (0, import_chunk_jv7av99m.d)(t);
  let e = (0, import_chunk_865at33z.rh)(t)?.code;
  return `${t instanceof Error ? t.name : typeof t}${e ? ` (${e})` : ""}`;
}
function gl(t, e) {
  switch (e.type) {
    case "ws":
    case "ws-ide":
    case "sse":
    case "sse-ide":
    case "http":
    case "claudeai-proxy":
      return H(t, e.url, "dialing");
    case void 0:
    case "stdio":
    case "sdk":
      return (0, import_chunk_jv7av99m.d)(t);
    default:
      return e;
  }
}
function y7r(t, e) {
  let n = gl(t, e);
  return n === (0, import_chunk_jv7av99m.d)(t) ? t : n;
}
var ut = /(Received a response for an unknown message ID: )[^]+/;
function aBa(t, e) {
  return `Connection error: ${gl(t, e).replace(ut, "$1[REDACTED]")}`;
}
function ent(t, e) {
  if (D(t)) throw t;
  if (k(String(e))) {
    let n = (0, import_chunk_865at33z.rh)(t)?.code;
    throw Object.assign(TypeError(at(t, e)), n === void 0 ? {} : { code: n });
  }
  throw t;
}
