const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
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
var chunk_gtxzjvjq_exports = {};
__export(chunk_gtxzjvjq_exports, {
  Asn: () => Asn,
  BNn: () => BNn,
  EUt: () => EUt,
  H_r: () => H_r,
  I_r: () => I_r,
  M_r: () => M_r,
  Qxi: () => Qxi,
  Rsn: () => Rsn,
  Spo: () => Spo,
  UNn: () => UNn,
  Vst: () => Vst,
  Z6: () => Z6,
  Zxi: () => Zxi,
  _po: () => _po,
  all: () => all,
  bpo: () => bpo,
  ePi: () => ePi,
  gpo: () => gpo,
  ips: () => ips,
  lll: () => lll,
  mpe: () => mpe,
  nPi: () => nPi,
  nps: () => nps,
  oPi: () => oPi,
  ops: () => ops,
  rPi: () => rPi,
  rps: () => rps,
  sps: () => sps,
  tPi: () => tPi,
  tps: () => tps,
  wpo: () => wpo,
  xsn: () => xsn,
  ypo: () => ypo,
  zwt: () => zwt
});
module.exports = __toCommonJS(chunk_gtxzjvjq_exports);
var import_chunk_1ag56sne = require("/$bunfs/root/chunk-1ag56sne.js");
var import_net = require("net");
var import_net2 = require("net");
var import_tls = require("tls");
var import_url = require("url");
var import_net3 = require("net");
var Qxi = ["127.0.0.0/8", "::1"];
function E(e) {
  let t = (0, import_net3.isIP)(e);
  return t === 4 ? "ipv4" : t === 6 ? "ipv6" : void 0;
}
function Zxi(e) {
  let t = e.indexOf("/"), r = h(t === -1 ? e : e.slice(0, t)), n = E(r);
  if (!n) return;
  let o = n === "ipv6" ? 128 : 32, i = o;
  if (t !== -1) {
    let s = e.slice(t + 1);
    if (!/^\d{1,3}$/.test(s) || Number(s) > o) return;
    i = Number(s);
  }
  let c = n === "ipv6" ? m(r) : void 0;
  if (c !== void 0) return i < 96 ? void 0 : { address: c, prefix: i - 96, family: "ipv4" };
  return { address: r, prefix: i, family: n };
}
function UNn(e, t) {
  let r = Zxi(t);
  if (!r) return false;
  try {
    e.addSubnet(r.address, r.prefix, r.family);
  } catch {
    return false;
  }
  return true;
}
function S(e) {
  let t = new import_net3.BlockList();
  for (let r of e) if (!UNn(t, r)) throw Error(`Invalid IP address or CIDR range: ${JSON.stringify(r)}`);
  return t;
}
function Asn(e, t) {
  let r = h(t), n = E(r);
  return n !== void 0 && e.check(r, n);
}
function h(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}
function b(e) {
  let t;
  try {
    t = new URL(`http://[${h(e)}]/`).hostname.slice(1, -1);
  } catch {
    return;
  }
  let [r = "", n] = t.split("::"), o = r ? r.split(":") : [], i = n ? n.split(":") : [], c = n === void 0 ? 0 : 8 - o.length - i.length;
  if (c < 0 || o.length + c + i.length !== 8) return;
  return [...o, ...Array(c).fill("0"), ...i].map((s) => parseInt(s, 16));
}
var p = (e, t) => `${e >> 8}.${e & 255}.${t >> 8}.${t & 255}`;
function m(e) {
  if (!/ffff/i.test(e)) return;
  let t = b(e);
  return t && t.slice(0, 5).every((r) => r === 0) && t[5] === 65535 ? p(t[6], t[7]) : void 0;
}
function all(e) {
  if ((0, import_net3.isIP)(e) !== 6) return;
  let t = b(e);
  if (!t) return;
  let r = (o, i) => t.slice(o, i).every((c) => c === 0);
  if (t[0] === 8194) return p(t[1], t[2]);
  let n = p(t[6], t[7]);
  if (t[0] === 100 && t[1] === 65435 && r(2, 6)) return n;
  if (r(0, 5) && (t[5] === 0 || t[5] === 65535)) return n;
  if (r(0, 4) && t[4] === 65535 && t[5] === 0) return n;
  return;
}
var A = S(Qxi);
function tps(e) {
  return Asn(A, e);
}
function lll(e) {
  let t = e.toLowerCase().replace(/\.$/, "");
  return t === "localhost" || t.endsWith(".localhost");
}
var I = 3e4, B = /* @__PURE__ */ new Set(["connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "proxy-connection", "te", "trailer", "transfer-encoding", "upgrade"]);
function ePi(e) {
  let t = e?.http ?? process.env.HTTP_PROXY ?? process.env.http_proxy ?? void 0, r = e?.https ?? process.env.HTTPS_PROXY ?? process.env.https_proxy ?? t, n = e?.noProxy ?? process.env.NO_PROXY ?? process.env.no_proxy ?? "";
  if (!t && !r) return;
  let o = (s) => {
    if (!s) return;
    let f = /^[a-z][a-z0-9+.-]*:\/\//i.test(s) ? s : `http://${s}`;
    try {
      let l = new import_url.URL(f);
      if (l.protocol !== "http:" && l.protocol !== "https:" || !l.hostname) throw Error("unsupported scheme or empty host");
      return l;
    } catch {
      (0, import_chunk_1ag56sne.Jt)(`Invalid parent proxy URL, ignoring: ${R(s)}`, { level: "error" });
      return;
    }
  }, i = o(t), c = o(r);
  if (!i && !c) return;
  return { httpUrl: i, httpsUrl: c, noProxy: _(n) };
}
function _(e) {
  let t = { all: false, suffixes: [], cidr: new import_net2.BlockList() };
  for (let r of e.split(",")) {
    if (r = r.trim(), !r) continue;
    if (r === "*") {
      t.all = true;
      continue;
    }
    if (r.includes("/")) {
      UNn(t.cidr, r);
      continue;
    }
    let n = r.toLowerCase(), o = /^\[([^\]]+)\](?::\d+)?$/.exec(n);
    if (o) n = o[1];
    if (n.startsWith("*.")) n = n.slice(1);
    if (!(0, import_net2.isIP)(n)) {
      let i = n.lastIndexOf(":");
      if (i !== -1 && /^\d+$/.test(n.slice(i + 1))) n = n.slice(0, i);
    } else if (UNn(t.cidr, n)) continue;
    t.suffixes.push(n);
  }
  return t;
}
function gpo(e, t) {
  let r = Vst(t.toLowerCase().replace(/\.$/, ""));
  if (r === "localhost" || tps(r)) return true;
  if (e.noProxy.all) return true;
  if (Asn(e.noProxy.cidr, r)) return true;
  for (let n of e.noProxy.suffixes) if (n.startsWith(".")) {
    if (r === n.slice(1) || r.endsWith(n)) return true;
  } else if (r === n || r.endsWith("." + n)) return true;
  return false;
}
function _po(e, t) {
  if (t.isHttps) return e.httpsUrl ?? e.httpUrl;
  return e.httpUrl;
}
function ypo(e) {
  let { destHost: t, destPort: r } = e, n = Vst(t);
  if (!M_r(n)) return Promise.reject(Error(`Invalid destination host for CONNECT: ${JSON.stringify(t)}`));
  if (!Number.isInteger(r) || r < 1 || r > 65535) return Promise.reject(Error(`Invalid destination port: ${r}`));
  let o = (0, import_net2.isIP)(n) === 6 ? `[${n}]:${r}` : `${n}:${r}`;
  return new Promise((i, c) => {
    let s = e.dial(), a = false, f = (d) => {
      if (a) return;
      a = true, s.destroy(), c(d);
    }, l = () => f(Error("Proxy closed during CONNECT handshake"));
    s.setTimeout(e.timeoutMs ?? I, () => f(Error("CONNECT handshake timed out"))), s.once("error", f), s.once("close", l), s.once(e.readyEvent, () => {
      s.write(`CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
` + (e.authHeader ? `Proxy-Authorization: ${e.authHeader}\r
` : "") + `\r
`);
      let d = "", w = (L) => {
        d += L.toString("latin1");
        let y = d.indexOf(`\r
\r
`);
        if (y === -1) {
          if (d.length > 16384) f(Error("CONNECT response header too large"));
          return;
        }
        s.pause(), s.removeListener("data", w);
        let g = d.slice(0, d.indexOf(`\r
`));
        if (!/^HTTP\/1\.[01] 2\d\d(?:\s|$)/.test(g)) return f(Error(`Proxy refused CONNECT: ${g.trim()}`));
        let C = d.slice(y + 4);
        if (C.length) s.unshift(Buffer.from(C, "latin1"));
        a = true, s.setTimeout(0), s.removeListener("error", f), s.removeListener("close", l), i(s);
      };
      s.on("data", w);
    });
  });
}
function nps(e, t, r) {
  let n = Vst(e.hostname), o = Number(e.port) || (e.protocol === "https:" ? 443 : 80), i = e.protocol === "https:";
  return ypo({ destHost: t, destPort: r, authHeader: tPi(e), readyEvent: i ? "secureConnect" : "connect", dial: () => i ? (0, import_tls.connect)({ host: n, port: o, ...(0, import_net2.isIP)(n) ? {} : { servername: n } }) : (0, import_net2.connect)(o, n) });
}
function tPi(e) {
  if (!e.username && !e.password) return;
  try {
    let t = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  } catch {
    let t = `${e.username}:${e.password}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  }
}
function I_r(e, t, r = EUt(t.headers)) {
  try {
    return e.writeHead(t.statusCode ?? 502, r), true;
  } catch (n) {
    if ((0, import_chunk_1ag56sne.Jt)(`Invalid upstream response head (status ${t.statusCode}): ${n instanceof Error ? n.message : String(n)}`, { level: "error" }), t.destroy(), e.headersSent) return e.destroy(), false;
    for (let o of e.getHeaderNames()) e.removeHeader(o);
    return e.writeHead(502, { "Content-Type": "text/plain" }), e.end("Bad Gateway"), false;
  }
}
function rps(e, t) {
  let r;
  e.once("response", (n) => {
    r = n;
  }), e.on("error", (n) => {
    if (r?.complete) {
      (0, import_chunk_1ag56sne.Jt)(`Upstream connection failed after a whole answer: ${n.message}`);
      return;
    }
    t(n);
  });
}
function EUt(e, { folded: t = false } = {}) {
  let r = (c) => {
    let s = c.trim().toLowerCase();
    return t ? s.replace(/[_.]/g, "-") : s;
  }, n = /* @__PURE__ */ new Set(), o = e.connection;
  if (o) for (let c of String(o).split(",")) n.add(r(c));
  let i = {};
  for (let [c, s] of Object.entries(e)) {
    let a = r(c);
    if (!B.has(a) && !n.has(a)) i[c] = s;
  }
  return i;
}
function Vst(e) {
  return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}
function nPi(e) {
  if (!e) return "-";
  if (!e.username && !e.password) return e.href;
  let t = new import_url.URL(e.href);
  return t.username = "***", t.password = "***", t.href;
}
function R(e) {
  return e.replace(/\/\/[^@/]*@/, "//***:***@");
}
function M_r(e) {
  if (!e || e.length > 255) return false;
  let t = Vst(e);
  if (t.includes("%")) return false;
  if ((0, import_net2.isIP)(t)) return true;
  return /^[A-Za-z0-9._-]+$/.test(t);
}
function Z6(e) {
  try {
    let t = Vst(e), r = (0, import_net2.isIP)(t) === 6 ? `[${t}]` : t, n = Vst(new import_url.URL(`http://${r}/`).hostname);
    return (0, import_net2.isIP)(n) === 6 ? m(n) ?? n : n.replace(/\.$/, "");
  } catch {
    return;
  }
}
function Rsn(e, t, r) {
  let n = (0, import_net2.isIP)(e) === 6 ? `[${e}]` : e;
  return t === r ? n : `${n}:${t}`;
}
async function ops(e, t, r, n) {
  let o = e;
  if (r && !(0, import_net2.isIP)(e)) {
    let i = await Spo(e, t, r);
    if (o = i.remoteAddress ?? "", i.destroy(), !o) throw Error(`connect ${e}:${t}: no peer address`);
  }
  return { host: o, port: t, ...n && !(0, import_net2.isIP)(e) ? { servername: e } : {}, agent: false };
}
function Spo(e, t, r, n = I) {
  return new Promise((o, i) => {
    let c = (0, import_net2.connect)({ port: t, host: e, lookup: r }), s = false, a = (f) => {
      if (s) return;
      if (s = true, c.setTimeout(0), f) c.destroy(), i(f);
      else o(c);
    };
    c.setTimeout(n, () => a(Error("connect timed out"))), c.once("connect", () => a()), c.once("error", a), c.once("close", () => a(Error("socket closed before connect")));
  });
}
function v(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}
function mpe(e) {
  if (e.startsWith("[")) {
    let n = e.indexOf("]");
    if (n === -1) return { hostPattern: e, port: void 0 };
    let o = v(e.slice(1, n)), i = Z6(o) ?? o, c = e.slice(n + 1);
    if (c === "") return { hostPattern: i, port: void 0 };
    let s = T(c.startsWith(":") ? c.slice(1) : "");
    return s === void 0 ? { hostPattern: e, port: void 0 } : { hostPattern: i, port: s };
  }
  let t = e.lastIndexOf(":");
  if (t === -1) return { hostPattern: e, port: void 0 };
  if (e.indexOf(":") !== t) {
    let n = v(e);
    return { hostPattern: Z6(n) ?? n, port: void 0 };
  }
  let r = T(e.slice(t + 1));
  if (r === void 0) return { hostPattern: e, port: void 0 };
  return { hostPattern: e.slice(0, t), port: r };
}
function T(e) {
  if (!/^[1-9][0-9]{0,4}$/.test(e)) return;
  let t = Number(e);
  return t > 65535 ? void 0 : t;
}
function sps(e) {
  if ((0, import_net.isIP)(e) === 6) return true;
  if (e.includes("://") || e.includes("/") || e.includes(":")) return false;
  if (e === "localhost") return true;
  if (e.startsWith("*.")) {
    let t = e.slice(2);
    if (!t.includes(".") || t.startsWith(".") || t.endsWith(".")) return false;
    let r = t.split(".");
    return r.length >= 2 && r.every((n) => n.length > 0);
  }
  if (e.includes("*")) return false;
  return e.includes(".") && !e.startsWith(".") && !e.endsWith(".");
}
var ips = 'Invalid domain pattern. Must be a valid domain (e.g., "example.com"), a wildcard (e.g., "*.example.com"), or a bracketed IPv6 literal (e.g., "[::1]", "[2001:db8::1]:443"). Overly broad patterns like "*.com" or "*" are not allowed for security reasons.';
function rPi(e) {
  let t = e.indexOf(":");
  return !(t !== -1 && e.indexOf(":", t + 1) !== -1) || e.startsWith("[");
}
function xsn(e) {
  return rPi(e) && sps(mpe(e).hostPattern);
}
var bpo = ips + ' An optional ":port" suffix (1-65535) restricts the entry to that port.';
function oPi(e) {
  return e.flatMap((t) => {
    let { hostPattern: r, port: n } = mpe(t);
    return (0, import_net.isIP)(r) ? [{ range: r, port: n }] : [];
  });
}
function H_r(e) {
  return mpe(e).hostPattern;
}
function zwt(e, t) {
  let r = e.toLowerCase();
  if (t === "*") return true;
  if (t.startsWith("*.")) {
    if ((0, import_net.isIP)(Vst(r))) return false;
    let n = t.substring(2).toLowerCase();
    return r.endsWith("." + n);
  }
  return r === t.toLowerCase();
}
function wpo(e, t, r) {
  let { hostPattern: n, port: o } = mpe(r);
  if (o !== void 0 && o !== t) return false;
  return zwt(e, n);
}
function BNn(e, t) {
  let r = t.map(H_r);
  if (!e.startsWith("*.")) return r.some((o) => zwt(e, o));
  let n = e.slice(2).toLowerCase();
  return r.some((o) => {
    if (!o.startsWith("*.")) return false;
    let i = o.slice(2).toLowerCase();
    return n === i || n.endsWith("." + i);
  });
}
