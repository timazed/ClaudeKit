const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ybxa8kcj_exports = {};
__export(chunk_ybxa8kcj_exports, {
  BGo: () => BGo,
  GGo: () => GGo,
  NMt: () => NMt,
  OCa: () => OCa,
  PCa: () => PCa,
  WGo: () => WGo,
  _Qn: () => _Qn,
  c6r: () => c6r,
  d6r: () => d6r,
  gQn: () => gQn,
  hQn: () => hQn,
  jGo: () => jGo,
  l6r: () => l6r,
  mQn: () => mQn,
  n4s: () => n4s,
  o4s: () => o4s,
  ovn: () => ovn,
  r4s: () => r4s,
  s4s: () => s4s,
  t4s: () => t4s,
  xCa: () => xCa,
  xYl: () => xYl
});
module.exports = __toCommonJS(chunk_ybxa8kcj_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_nc4smb26 = require("/$bunfs/root/chunk-nc4smb26.js");
var import_chunk_xynazqe9 = require("/$bunfs/root/chunk-xynazqe9.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_net = require("net");
var import_tls = require("tls");
var ce = ["https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY"], mQn = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND", hQn = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE", Ye = "claude-self-hosted-runner";
class B extends Error {
  constructor(e) {
    super(e);
    this.name = "ProxyAuthorizationMintError";
  }
}
var Xe = 3e4, de = 16384, ze = 3e4, Me = 3e4, ie = 6e4, Fe = 2e3, Ee = 8, Ge = 8192, ae = 16384, qe = 256, Ve = 65536, ne = /[\x00-\x08\x0a-\x1f\x7f-\x9f]/, je = 4096, We = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+:/;
function X(e, n = 200) {
  return (0, import_chunk_7cfjrnwy.ee)(e.replace(/[\p{Cc}\p{Cs}]/gu, ""), n);
}
function Ze(e) {
  if (e === void 0 || e === "") return;
  if (Buffer.byteLength(e, "latin1") > je) return;
  return ne.test(e) ? void 0 : e;
}
function xe(e) {
  let n = e.trim();
  if (!n) throw new B("proxy authorization source returned an empty value");
  if (Buffer.byteLength(n) > de) throw new B(`proxy authorization value exceeds ${de} bytes`);
  if (ne.test(n)) throw new B("proxy authorization value must be a single header line (control characters such as CR/LF are not allowed)");
  return n;
}
function Ke(e) {
  let { source: n } = e, i = e.commandTimeoutMs ?? Xe, o;
  try {
    o = new URL(e.upstreamProxyUrl).hostname;
  } catch {
    o = void 0;
  }
  let l, c = async (E) => {
    if (n.kind === "file") {
      if (l) throw new B("proxy authorization file could not be read: an earlier read has not returned yet (stalled mount?); not issuing another");
      let R, O = false, Y = (async () => {
        let D = await (0, import_promises.open)(n.path, "r");
        try {
          let F = Buffer.alloc(de + 1), { bytesRead: q } = await D.read(F, 0, F.length, 0);
          return F.subarray(0, q).toString("utf8");
        } finally {
          await D.close();
        }
      })(), U = () => {
        if (O = true, l === Y) l = void 0;
      };
      Y.then(U, U);
      try {
        R = await (0, import_chunk_xynazqe9.Hi)(Y, i, "read");
      } catch (D) {
        if (!O) l = Y;
        throw new B(`proxy authorization file could not be read: ${(0, import_chunk_nc4smb26.xf)((0, import_chunk_jv7av99m.d)(D))}`);
      }
      return xe(R);
    }
    let P = { ...typeof e.commandEnv === "function" ? e.commandEnv() : e.commandEnv ?? process.env, CLAUDE_CODE_PROXY_URL: e.upstreamProxyUrl, ...o && { CLAUDE_CODE_PROXY_HOST: o }, ...E && { CLAUDE_CODE_PROXY_AUTHENTICATE: E } }, y = await (0, import_chunk_9zdrdv25.c$)(n.command, { timeout: i, reject: false, stdin: "ignore", useToolMemoryCgroup: false, extendEnv: false, env: P });
    if (y.failed) {
      let R = y.timedOut ? `timed out after ${i}ms` : `exited ${y.exitCode ?? y.signal ?? "abnormally"}`, O = y.stderr?.trim();
      throw new B(`proxy authorization command ${R}${O ? `: ${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_nc4smb26.xf)(O), 500)}` : ""}`);
    }
    return xe(y.stdout ?? "");
  }, f = /* @__PURE__ */ new Map();
  return { source: n.kind, mint(E) {
    let P = E === void 0 ? "plain" : `remint:${E.challenge ?? ""}`, y = f.get(P);
    if (!y) y = c(E?.challenge).finally(() => {
      f.delete(P);
    }), f.set(P, y);
    return y;
  } };
}
function W(e, n) {
  let i = n.toLowerCase();
  for (let o of e) {
    let l = o.indexOf(":");
    if (l > 0 && o.slice(0, l).trim().toLowerCase() === i) return o.slice(l + 1).trim();
  }
  return;
}
function Pe(e, n) {
  let i = new Set(n.map((o) => o.toLowerCase()));
  return e.filter((o) => {
    let l = o.indexOf(":");
    return l > 0 && i.has(o.slice(0, l).trim().toLowerCase());
  });
}
function K(e, n) {
  let i = new Set(n.map((o) => o.toLowerCase()));
  return e.filter((o) => {
    let l = o.indexOf(":");
    return !(l > 0 && i.has(o.slice(0, l).trim().toLowerCase()));
  });
}
var Je = 16;
function ue(e, n) {
  let i = Buffer.from(n, "utf8").toString("latin1"), o = [i], l = i.search(/[ \t]/);
  if (l > 0) {
    let c = i.slice(l).trim();
    if (c.length >= Je) o.push(c);
  }
  return [e.startLine, ...e.headerLines].some((c) => o.some((f) => c.includes(f)));
}
var J = ["proxy-authenticate", "proxy-authentication-info"];
function Re(e, n, i, o, l) {
  let c = i, f = false, E = (P) => {
    if (n.destroyed || !n.writable) return;
    if (P.length > c && !f) f = true, l();
    if (c === 0 || P.length === 0) return;
    let y = P.length <= c ? P : P.subarray(0, c);
    if (c -= y.length, !n.write(y) && c > 0) e.pause(), n.once("drain", () => e.resume());
  };
  return E(o), e.on("data", E), e.resume(), () => {
    e.removeListener("data", E);
  };
}
function Q(e, n, i, o = Buffer.alloc(0)) {
  return new Promise((l, c) => {
    let f = o, E = false, P = (U, D) => {
    }, y = setTimeout((U) => U(Error("timed out waiting for the request/response head")), i, (U) => P(U)), R = (U) => {
      f = Buffer.concat([f, U]);
      let D = f.indexOf(`\r
\r
`);
      if (D === -1) {
        if (f.length > n) P(Error("request/response head exceeded the size limit"));
        return;
      }
      if (D > n) {
        P(Error("request/response head exceeded the size limit"));
        return;
      }
      let F = f.subarray(0, D).toString("latin1"), [q = "", ...V] = F.split(`\r
`);
      P(null, { startLine: q, headerLines: V, rest: f.subarray(D + 4) });
    }, O = () => P(Error("connection closed before the head was complete")), Y = (U) => P(U);
    if (P = (U, D) => {
      if (E = true, clearTimeout(y), e.removeListener("data", R), e.removeListener("close", O), e.removeListener("error", Y), e.pause(), U) c(U);
      else l(D);
    }, e.on("data", R), e.once("close", O), e.once("error", Y), f.length > 0) R(Buffer.alloc(0));
    if (!E) e.resume();
  });
}
function S(e, n) {
  if (e.destroyed) return;
  if (e.resume(), e.writable) e.end(n);
  setTimeout((i) => i.destroy(), Fe, e).unref();
}
function z(e) {
  return Buffer.from(e, "latin1");
}
function Qe() {
  return `HTTP/1.1 407 Proxy Authentication Required\r
Proxy-Authenticate: Basic realm="${Ye}"\r
Content-Length: 0\r
Connection: close\r
\r
`;
}
function I(e, n, i) {
  return `HTTP/1.1 ${e} ${n}\r
Content-Type: text/plain\r
Content-Length: ${Buffer.byteLength(i)}\r
Connection: close\r
\r
` + i;
}
function en(e) {
  let n = e.startLine.match(/^([A-Z]+)\s+http:\/\/([^/?#\s]+)(\S*)\s+(HTTP\/1\.[01])$/i);
  if (!n) return;
  let [, i, o, l, c] = n, f = o.match(/^(\[[0-9A-Fa-f:.]+\]|[^:@[\]]+)(?::(\d{1,5}))?$/);
  if (!f || f[2] !== void 0 && Number(f[2]) > 65535) return;
  let E = `${f[1]}:${f[2] ?? "80"}`, P = l.startsWith("/") ? l : `/${l}`, y = e.headerLines.filter((R) => {
    let O = R.slice(0, R.indexOf(":")).trim().toLowerCase();
    return !O.startsWith("proxy-") && O !== "connection" && O !== "keep-alive";
  });
  if (W(y, "host") === void 0) y.push(`Host: ${o}`);
  return { target: E, head: z(`${i} ${P} ${c}\r
` + y.map((R) => R + `\r
`).join("") + `Connection: close\r
\r
`) };
}
class Z extends Error {
  constructor() {
    super("client closed before the upstream connection was ready");
    this.name = "ClientGoneError";
  }
}
function Te(e, n) {
  let i = false, o = n.length > 0 ? [n] : [], l = n.length, c = (E) => {
    if (o.push(E), l += E.length, l > Ve) e.pause();
  }, f = () => {
    i = true;
  };
  return e.on("data", c), e.once("end", f), e.once("close", f), e.resume(), { gone: () => i || e.destroyed, release: () => {
    e.removeListener("data", c);
    let E = o.length === 1 ? o[0] : Buffer.concat(o);
    return o = [], l = 0, E;
  } };
}
async function le(e) {
  let n = new URL(e.upstreamProxyUrl), i = n.protocol === "https:";
  if (n.protocol !== "http:" && !i) throw Error("the upstream proxy URL must be http:// or https://");
  let o = n.hostname.replace(/^\[(.*)\]$/, "$1"), l = n.port ? Number(n.port) : i ? 443 : 80, c = e.logLabel ?? "runner:egress-proxy";
  if (n.username || n.password) e.onStatus(`[${c}] note: the upstream proxy URL carries user:password credentials; they are replaced by the minted Proxy-Authorization value on every request to the upstream proxy`);
  let f = (0, import_crypto.randomBytes)(24).toString("base64url"), E = Buffer.from("Basic " + Buffer.from(`runner:${f}`).toString("base64")), P = (r) => {
    let a = W(r, "proxy-authorization");
    if (a === void 0) return false;
    let g = Buffer.from(a);
    return g.length === E.length && (0, import_crypto.timingSafeEqual)(g, E);
  }, y = (r) => e.onDebug?.(`[${c}] ${r}`), R = (r) => e.onStatus(`[${c}] ${r}`), O = /* @__PURE__ */ new Set(), Y = (r) => {
    O.add(r), r.on("error", (a) => y(`socket: ${(0, import_chunk_jv7av99m.d)(a)}`)), r.once("close", () => O.delete(r));
  }, U = () => {
    e.onUpstreamFailure?.().catch((r) => y(`reload after a failed upstream connection: ${(0, import_chunk_jv7av99m.d)(r)}`));
  }, D = () => new Promise((r, a) => {
    let g = i ? (0, import_tls.connect)({ host: o, port: l, servername: nn(o) ? void 0 : o, ...typeof e.upstreamTls === "function" ? e.upstreamTls() : e.upstreamTls }) : (0, import_net.connect)({ host: o, port: l });
    Y(g);
    let T = i ? "secureConnect" : "connect", v = (p) => {
    }, h = setTimeout((p) => p(Error("timed out connecting to the upstream proxy")), Me, (p) => v(p)), L = () => v(null), C = (p) => v(p), k = () => v(Error("upstream proxy closed the connection during connect"));
    v = (p) => {
      if (clearTimeout(h), g.removeListener(T, L), g.removeListener("error", C), g.removeListener("close", k), p) g.destroy(), U(), a(p);
      else r(g);
    }, g.once(T, L), g.once("error", C), g.once("close", k);
  }), F = (r, a) => {
    r.pipe(a), a.pipe(r);
    let g = () => {
      r.destroy(), a.destroy();
    };
    r.on("error", g), a.on("error", g), r.on("close", () => S(a, "")), a.on("close", () => S(r, "")), r.resume(), a.resume();
  }, q = async (r, a, g, T) => {
    let v = await e.minter.mint(g);
    if (T()) throw new Z();
    let h = await D();
    if (T()) throw h.destroy(), new Z();
    try {
      h.write(Buffer.concat([z(`CONNECT ${r} HTTP/1.1\r
Host: ${r}\r
`), Buffer.from(`Proxy-Authorization: ${v}\r
`), z(a.map((C) => C + `\r
`).join("") + `\r
`)]));
      let L = await Q(h, ae, ie);
      if (T()) throw new Z();
      return { up: h, head: L, value: v };
    } catch (L) {
      if (h.destroy(), !(L instanceof Z)) U();
      throw L;
    }
  }, V = (r) => {
    let a = r.startLine.match(/^HTTP\/1\.[01]\s+(\d{3})(?=\s|$)/);
    return a ? Number(a[1]) : 0;
  }, me = (r, a, g) => {
    if (a instanceof Z || r.destroyed) {
      r.destroy();
      return;
    }
    let T = a instanceof B ? a.message : `upstream proxy connection failed: ${(0, import_chunk_nc4smb26.xf)((0, import_chunk_jv7av99m.d)(a))}`;
    R(`${T} (${X(g)} answered 502)`), S(r, I(502, "Bad Gateway", a instanceof B ? `proxy authorization could not be obtained (see the runner log)
` : `upstream proxy connection failed (see the runner log)
`));
  }, Oe = (r, a, g, T) => {
    a.destroy(), R(`upstream proxy rejected the minted Proxy-Authorization for ${X(g)} (${X(T)}); answering the client 502`), S(r, I(502, "Bad Gateway", `upstream proxy rejected the runner-minted Proxy-Authorization (407); see the runner log
`));
  }, re = (r, a, g, T) => {
    a.destroy(), R(`upstream response to ${X(g)} (status ${T}) reflected the minted Proxy-Authorization in its head; withheld, answering the client 502`), S(r, I(502, "Bad Gateway", `upstream proxy response withheld: its head reflected the runner-minted Proxy-Authorization (see the runner log)
`));
  }, ge = async (r, a, g, T, v) => {
    let h = Pe(g.headerLines, ["user-agent"]), L = () => T.gone();
    try {
      let C = await q(a, h, void 0, L), k = V(C.head);
      if (k === 407) {
        let H = Ze(W(C.head.headerLines, "proxy-authenticate"));
        C.up.destroy(), y(`upstream answered 407 for CONNECT ${a}; re-minting once`), C = await q(a, h, { challenge: H }, L), k = V(C.head);
      }
      let { up: p, head: b, value: se } = C;
      if (k !== 200 && ue(b, se)) {
        re(r, p, `CONNECT ${a}`, k);
        return;
      }
      if (k === 407) {
        Oe(r, p, `CONNECT ${a}`, b.startLine);
        return;
      }
      if (k < 100) {
        p.destroy(), R(`upstream proxy sent an unparseable reply to CONNECT ${X(a)}; answering the client 502`), S(r, I(502, "Bad Gateway", `unparseable reply from upstream proxy
`));
        return;
      }
      if (k === 200) {
        if (y(`tunnel established: CONNECT ${a}`), v === void 0) r.write(`HTTP/1.1 200 Connection Established\r
\r
`);
        if (b.rest.length > 0) r.write(b.rest);
        if (v !== void 0) {
          p.write(v.head);
          let _e = Re(r, p, v.bodyLength, T.release(), () => y("client sent bytes past its declared Content-Length on a plain HTTP request; not forwarded"));
          p.pipe(r), p.once("close", () => {
            _e(), S(r, "");
          }), r.once("close", () => {
            _e(), p.destroy();
          });
          return;
        }
        let H = T.release();
        if (H.length > 0) p.write(H);
        F(r, p);
        return;
      }
      p.destroy(), R(`upstream proxy refused CONNECT ${X(a)}: ${X(b.startLine)}`);
      let M = K(b.headerLines, ["connection", "proxy-connection", "keep-alive", "transfer-encoding", "content-length", ...J]);
      S(r, z(b.startLine + `\r
` + M.map((H) => H + `\r
`).join("") + `Content-Length: 0\r
Connection: close\r
\r
`));
    } catch (C) {
      me(r, C, `CONNECT ${a}`);
    }
  }, Ne = async (r, a, g) => {
    let T = K(a.headerLines, ["proxy-authorization", "proxy-connection", "connection", "keep-alive", "upgrade", "te", "trailer", "max-forwards"]), v = Number(W(a.headerLines, "content-length") ?? "0"), h, L = () => {
    }, C = () => {
      L(), h?.destroy(), r.destroy();
    };
    try {
      {
        let k = await e.minter.mint();
        if (g.gone()) {
          C();
          return;
        }
        if (h = await D(), g.gone()) {
          C();
          return;
        }
        if (h.write(Buffer.concat([z(a.startLine + `\r
` + T.map((H) => H + `\r
`).join("")), Buffer.from(`Proxy-Authorization: ${k}\r
`), z(`Connection: close\r
\r
`)])), v > 0) L = Re(r, h, v, g.release(), () => y("client sent bytes past its declared Content-Length on a plain HTTP request; not forwarded"));
        let p = await Q(h, ae, ie), b = V(p), se = 0;
        while (b >= 100 && b < 200 && b !== 101) {
          if (g.gone()) {
            C();
            return;
          }
          if (ue(p, k)) {
            L(), re(r, h, "a plain HTTP request", b);
            return;
          }
          if (++se > Ee) {
            h.destroy(), L(), R(`upstream sent more than ${Ee} interim responses to a plain HTTP request; answering the client 502`), S(r, I(502, "Bad Gateway", `too many interim responses from upstream
`));
            return;
          }
          r.write(z(p.startLine + `\r
` + K(p.headerLines, J).map((H) => H + `\r
`).join("") + `\r
`)), p = await Q(h, ae, ie, p.rest), b = V(p);
        }
        if (g.gone()) {
          C();
          return;
        }
        if (ue(p, k)) {
          L(), re(r, h, "a plain HTTP request", b);
          return;
        }
        if (b === 407) {
          L(), h.destroy(), R(`upstream answered 407 to a plain HTTP request (${X(p.startLine)}); it may have come from the destination site rather than the proxy, and re-mint is only attempted for CONNECT tunnels; answering the client 502`), S(r, I(502, "Bad Gateway", `upstream answered 407 (Proxy Authentication Required) to a plain HTTP request; it may have come from the destination site rather than the proxy; see the runner log
`));
          return;
        }
        if (b < 100) {
          h.destroy(), L(), R("upstream proxy sent an unparseable reply to a plain HTTP request; answering the client 502"), S(r, I(502, "Bad Gateway", `unparseable reply from upstream proxy
`));
          return;
        }
        if (b >= 400) {
          h.destroy(), L(), R(`upstream answered ${X(p.startLine)} to a plain HTTP request; error body withheld from the client`), S(r, z(p.startLine + `\r
` + K(p.headerLines, ["connection", "proxy-connection", "keep-alive", "transfer-encoding", "content-length", ...J]).map((H) => H + `\r
`).join("") + `Content-Length: 0\r
Connection: close\r
\r
`));
          return;
        }
        if (r.write(z(p.startLine + `\r
` + K(p.headerLines, ["connection", "proxy-connection", "keep-alive", ...J]).map((H) => H + `\r
`).join("") + `Connection: close\r
\r
`)), p.rest.length > 0) r.write(p.rest);
        let M = h;
        M.pipe(r), M.on("error", () => r.destroy()), r.on("error", () => M.destroy()), M.on("close", () => S(r, "")), r.on("close", () => M.destroy()), M.resume(), r.resume();
      }
    } catch (k) {
      L(), h?.destroy(), me(r, k, "plain HTTP request");
    }
  }, oe = 0, Ue = e.maxPendingClients ?? qe, G = (0, import_net.createServer)({ pauseOnConnect: true }, (r) => {
    if (Y(r), r.on("error", () => r.destroy()), oe >= Ue) {
      y("too many connections still sending a request head; refusing one"), r.destroy();
      return;
    }
    oe++, (async () => {
      let a;
      try {
        a = await Q(r, Ge, ze);
      } catch (h) {
        if (y(`client: ${(0, import_chunk_jv7av99m.d)(h)}`), !r.destroyed && r.writable && r.bytesRead > 0) S(r, I(400, "Bad Request", `malformed proxy request
`));
        else r.destroy();
        return;
      } finally {
        oe--;
      }
      if (ne.test(a.startLine) || a.headerLines.some((h) => ne.test(h) || !We.test(h))) {
        S(r, I(400, "Bad Request", `malformed header line
`));
        return;
      }
      let g = a.startLine.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i), T = !g && /^[A-Z]+\s+http:\/\/\S+\s+HTTP\/1\.[01]$/i.test(a.startLine);
      if (!g && !T) {
        S(r, I(400, "Bad Request", `this is a forward proxy: expected CONNECT host:port or an absolute-form http:// request
`));
        return;
      }
      if (!P(a.headerLines)) {
        y(`client ${g ? "CONNECT" : "request"} without valid loopback credentials \u2192 407 challenge`), S(r, Qe());
        return;
      }
      if (T && /^TRACE\s/i.test(a.startLine)) {
        S(r, I(405, "Method Not Allowed", `TRACE is not forwarded by this proxy
`));
        return;
      }
      if (T) {
        let h = Pe(a.headerLines, ["content-length"]);
        if (W(a.headerLines, "transfer-encoding") !== void 0) {
          S(r, I(501, "Not Implemented", `request bodies with Transfer-Encoding are not forwarded by this proxy; send a Content-Length
`));
          return;
        }
        if (h.length > 1 || h.length === 1 && !/^content-length:[ \t]*\d{1,15}[ \t]*$/i.test(h[0])) {
          S(r, I(400, "Bad Request", `a forwarded request may carry at most one numeric Content-Length
`));
          return;
        }
      }
      if (T && e.connectOnly) {
        let h = en(a);
        if (h === void 0) {
          S(r, I(400, "Bad Request", `expected an absolute-form http://host[:port]/path request with no user info
`));
          return;
        }
        await ge(r, h.target, a, Te(r, a.rest), { head: h.head, bodyLength: Number(W(a.headerLines, "content-length") ?? "0") });
        return;
      }
      let v = Te(r, a.rest);
      if (g) await ge(r, g[1], a, v);
      else await Ne(r, a, v);
    })().catch((a) => {
      R(`internal error handling a proxied connection: ${(0, import_chunk_nc4smb26.xf)((0, import_chunk_jv7av99m.d)(a))}`), r.destroy();
    });
  });
  if (await new Promise((r, a) => {
    G.once("error", a), G.listen({ host: "127.0.0.1", port: 0 }, () => {
      G.removeListener("error", a), r();
    });
  }), G.on("error", (r) => R(`listener error: ${(0, import_chunk_jv7av99m.d)(r)}`)), e.unrefListener) G.unref();
  let ye = G.address().port;
  return { url: `http://runner:${f}@127.0.0.1:${ye}`, port: ye, openConnections: () => O.size, close: () => new Promise((r) => {
    for (let a of O) a.destroy();
    G.close(() => r());
  }) };
}
function nn(e) {
  return /^[\d.]+$/.test(e) || e.includes(":");
}
class we {
  active;
  handle;
}
var tn = new import_chunk_2904xtvq.j(() => new we());
function te() {
  return tn.of((0, import_chunk_f9x2f6cx.N)().host);
}
function t4s() {
  return te().active;
}
function rn(e, n) {
  let i = ce.map((c) => [c, n[c]]), o = {}, l = [];
  for (let [c, f] of i) {
    if (f !== void 0) o[c] = f;
    if (f) n[c] = e, l.push(c);
  }
  return { url: e, rewritten: l, original: o };
}
function on(e = process.env) {
  let n = te().active;
  if (!n) return { ...e };
  let i = { ...e };
  for (let o of ce) if (o in n.original) i[o] = n.original[o];
  return i;
}
function n4s(e = process.env) {
  let n = te().active;
  if (!n) return {};
  let i = { [mQn]: void 0, [hQn]: void 0, NO_PROXY: e.NO_PROXY, no_proxy: e.no_proxy, CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER: void 0, ALL_PROXY: void 0, all_proxy: void 0 };
  for (let o of ce) i[o] = n.rewritten.includes(o) ? n.url : void 0;
  return i;
}
function sn(e, n = process.env) {
  if (e.command !== void 0 && e.command.trim() === "" || e.file !== void 0 && e.file.trim() === "") throw Error("--proxy-authorization-command / --proxy-authorization-file must not be empty");
  let i = (e.command ?? n[mQn])?.trim(), o = (e.file ?? n[hQn])?.trim(), l = o ? (0, import_path.resolve)(o) : o, c = i !== void 0 && i !== "", f = l !== void 0 && l !== "";
  if (c && f) throw Error("set only one of --proxy-authorization-command (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND) and --proxy-authorization-file (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE)");
  if (c) return { kind: "command", command: i };
  if (f) return { kind: "file", path: l };
  return;
}
function xCa(e, n = process.env) {
  let i = sn(e, n);
  if (!i) return;
  let o = (0, import_chunk_3jjr3wje.DE)(n), l = o ? (0, import_chunk_3jjr3wje.oL)(o) : void 0;
  if (!o || !l) throw Error("--proxy-authorization-command / --proxy-authorization-file require HTTPS_PROXY (or HTTP_PROXY) to be set to the upstream proxy URL that the Proxy-Authorization value is for (ALL_PROXY alone is not consulted)");
  if (l.protocol !== "http:" && l.protocol !== "https:") throw Error("--proxy-authorization-command / --proxy-authorization-file support http:// and https:// upstream proxies only (check the scheme of HTTPS_PROXY / HTTP_PROXY)");
  return { source: i, upstreamProxyUrl: o };
}
async function PCa(e, n) {
  let i = te(), o = (0, import_chunk_3jjr3wje.kFe)((0, import_chunk_3jjr3wje.yv)()), l = Ke({ source: e.source, upstreamProxyUrl: e.upstreamProxyUrl, commandEnv: () => ({ ...on(), SELF_HOSTED_RUNNER_POOL_SECRET: void 0, SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0 }) }), c = await le({ upstreamProxyUrl: e.upstreamProxyUrl, minter: l, upstreamTls: o, onStatus: n.onStatus, onDebug: n.onDebug }), f = rn(c.url, process.env);
  if (i.active = f, new Set(f.rewritten.map((P) => f.original[P])).size > 1) n.onStatus(`[runner:egress-proxy] note: ${f.rewritten.join("/")} named different proxies; all of them now go through the listener to ${(0, import_chunk_nc4smb26.xf)(e.upstreamProxyUrl)} (the one this runner resolves for its own traffic)`);
  if ((0, import_chunk_3jjr3wje.Cw)(), process.env.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER) n.onStatus("[runner:egress-proxy] note: CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER is set on the runner; it is cleared for sessions while --proxy-authorization-* is active (the runner now mints Proxy-Authorization for all proxied traffic, and a session-side proxyAuthHelper header would be refused by the loopback listener)");
  return n.onStatus(`[runner:egress-proxy] enabled: minting Proxy-Authorization from the configured ${e.source.kind} for every CONNECT to the upstream proxy ${(0, import_chunk_nc4smb26.xf)(e.upstreamProxyUrl)}; this runner and its sessions now use the loopback listener 127.0.0.1:${c.port} (rewrote ${f.rewritten.join(", ")})`), i.handle = { ...c, close: async () => {
    await c.close(), i.active = void 0, i.handle = void 0;
  } }, i.handle;
}
function OCa(e, n = process.env) {
  let i = e.find((o) => o === "--proxy-authorization-command" || o === "--proxy-authorization-file") ?? [mQn, hQn].find((o) => n[o]?.trim());
  if (i !== void 0) throw new import_chunk_jv7av99m.A(`${i} is not yet supported with the orchestrator subcommand (only worker runners mint Proxy-Authorization for their egress proxy today). Unset it for the orchestrator process; the runners it spawns can still use it.`, "proxy-authorization knob given to the orchestrator subcommand");
}
var ovn = "agent_proxy_standalone", gQn = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "host.docker.internal"].join(",");
class Le {
  forwarder = void 0;
}
var an = new import_chunk_2904xtvq.j(() => new Le());
function pe() {
  return an.of((0, import_chunk_f9x2f6cx.N)().host);
}
function l6r() {
  return pe().forwarder !== void 0;
}
function r4s() {
  return pe().forwarder?.url;
}
async function xYl() {
  if (import_chunk_c203g5kd.s.CCR_AGENT_PROXY_RELAY_MODE !== ovn) return { kind: "off" };
  let e = import_chunk_c203g5kd.s.SELF_HOSTED_RUNNER_AGENT_PROXY_URL;
  if (import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_RELAY_MODE"), import_chunk_c203g5kd.s.unset("SELF_HOSTED_RUNNER_AGENT_PROXY_URL"), import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_ENABLED"), import_chunk_c203g5kd.s.unset("AGENT_PROXY_URL"), import_chunk_c203g5kd.s.unset("AGENT_PROXY_AUTH_TOKEN"), import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_CA_CERT_B64"), import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND !== "byoc") return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "not_byoc"), { kind: "failed", cause: "environment", message: "This session was asked to send its traffic through your self-hosted agent proxy, which only a self-hosted runner's session can do. Claude Code does not start rather than connect directly." };
  let n = c6r(e);
  if (!n.ok) return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", `url_${n.code}`), { kind: "failed", cause: "url", message: n.message };
  let i = await fn(), o = i?.sessionId;
  if (!i || !o || o.includes(":")) return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "no_session_id"), { kind: "failed", cause: "session", message: `${Ae}: this session has no usable session id.` };
  if (!i.token()) return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "no_token"), { kind: "failed", cause: "session", message: `${Ae}: this session has no session token.` };
  await Ce();
  let l;
  try {
    l = await BGo({ proxyUrl: n.url.href, sessionId: o, token: i.token, onStatus: (c) => (0, import_chunk_w578pjby.t)(c, { level: "warn" }), onDebug: (c) => (0, import_chunk_w578pjby.t)(c) });
  } catch (c) {
    let f = (0, import_chunk_jv7av99m.w)(c);
    return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "listener_failed"), (0, import_chunk_w578pjby.t)(`[agent-proxy-standalone] forwarder failed to start: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "error" }), { kind: "failed", cause: "listener", message: `Claude Code could not start its local forwarder to the proxy named by SELF_HOSTED_RUNNER_AGENT_PROXY_URL${f ? ` (${f})` : ""}, and does not start without it. Start a new session; if this keeps happening, check that the runner container allows listening on 127.0.0.1.` };
  }
  pe().forwarder = l;
  for (let c of GGo) import_chunk_c203g5kd.s.set(c, l.url);
  import_chunk_c203g5kd.s.set("NO_PROXY", gQn), import_chunk_c203g5kd.s.set("no_proxy", gQn);
  for (let [c, f] of Object.entries((0, import_chunk_r6r2wdsw.tIs)(process.env))) if (c !== "CLOUDSDK_PROXY_PASSWORD") process.env[c] = f;
  return import_chunk_c203g5kd.s.set("CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER", false), (0, import_chunk_w578pjby.t)(`[agent-proxy-standalone] routing through ${n.url.protocol}//${n.url.host} via 127.0.0.1:${l.port}`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_standalone"), { kind: "on", port: l.port };
}
function BGo(e) {
  let n = Se(), i = (0, import_chunk_3jjr3wje.yv)(), o = he(fe), l = (0, import_chunk_3jjr3wje.vM)(), c;
  return le({ upstreamProxyUrl: e.proxyUrl, minter: { async mint() {
    let f = e.token();
    if (!f) throw new B("the session token is not available");
    return `Basic ${Buffer.from(`${e.sessionId}:${f}`).toString("base64")}`;
  } }, upstreamTls: () => {
    let f = Se() === n ? (0, import_chunk_3jjr3wje.yv)() : i, E = he(fe) === o ? (0, import_chunk_3jjr3wje.vM)() : l;
    return { ...E && { cert: E.cert, key: E.key, passphrase: E.passphrase }, ...f && { ca: f }, rejectUnauthorized: true };
  }, onUpstreamFailure: () => (c ??= _Qn().finally(() => {
    c = void 0;
  }), c), logLabel: "agent-proxy-standalone", unrefListener: true, connectOnly: true, onStatus: e.onStatus, onDebug: e.onDebug });
}
function un(e) {
  return e?.trim() === ovn;
}
var WGo = "--agent-proxy-url / SELF_HOSTED_RUNNER_AGENT_PROXY_URL";
function d6r(e, n) {
  return un(e) || n !== void 0;
}
var dn = ["CCR_AGENT_PROXY_ENABLED", "CCR_EGRESS_GATEWAY_ENABLED", "CCR_UPSTREAM_PROXY_ENABLED"];
function cn(e) {
  if (e === void 0) return "no_server_config";
  let n = e.CCR_AGENT_PROXY_RELAY_MODE?.trim();
  if (n === "selective" || n === "all") return "hosted_relay";
  if (n && n !== "off" && n !== ovn) return "unknown_relay_mode";
  if (dn.some((o) => {
    let l = e[o]?.trim();
    return !!l && !(0, import_chunk_69qhefwa.Oi)(l);
  })) return "hosted_relay";
  return;
}
function jGo(e) {
  let n = e.runnerProxyUrl !== void 0;
  if (!d6r(e.serverEnv?.CCR_AGENT_PROXY_RELAY_MODE, e.runnerProxyUrl)) return;
  let i = n ? cn(e.serverEnv) : void 0;
  if (i !== void 0) {
    (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", i);
    let o = i === "hosted_relay" ? "This environment sends sessions through Anthropic's relay" : i === "unknown_relay_mode" ? "This environment names a relay mode this runner does not recognize" : "The server sent no session config to check the relay mode against";
    return new import_chunk_jv7av99m.A(`Session ${e.sessionId}: ${o}, so a runner started with ${e.runnerProxySetting} can't run it. Remove ${e.runnerProxySetting} from this runner, or change the environment's relay mode`, "runner started with an agent proxy URL refuses a session on the hosted relay, with an unknown relay mode, or without a config");
  }
  switch (e.governedGit) {
    case "off":
      break;
    case "legacy":
      return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "governed_git"), new import_chunk_jv7av99m.A(n ? `Session ${e.sessionId} uses Anthropic-managed git (governed git), which this runner refuses: it routes every session through the proxy that ${e.runnerProxySetting} names, and only the self-hosted runner can send governed git through that proxy. Run this pool's Anthropic-managed git sessions on a self-hosted runner, or on a runner started without a proxy URL` : `Session ${e.sessionId} asks for Anthropic-managed git (governed git) and for routing through your self-hosted agent proxy, which this runner cannot combine: only the self-hosted runner can send governed git through that proxy. Run this pool's sessions on a self-hosted runner, or turn off one of the two for the pool`, "session pairs governed git with the agent_proxy_standalone relay mode on a runner that cannot route it");
    case "on": {
      if (e.gitConfigArmed !== true) return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "governed_git_no_git_config"), new import_chunk_jv7av99m.A(`Session ${e.sessionId} uses Anthropic-managed git (governed git) through your self-hosted agent proxy without its git setup, which this runner refuses: without it, git would not trust the proxy's route to GitHub`, "runner refuses a governed-git block without its git config arm in the agent_proxy_standalone relay mode");
      if ((0, import_chunk_cg8dqz0a.x)() === "windows") return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "governed_git_windows"), new import_chunk_jv7av99m.A(`Session ${e.sessionId} uses Anthropic-managed git (governed git) through your self-hosted agent proxy, which this runner refuses on Windows: the session's git config would hold the credential for the proxy's local forwarder, and Windows does not keep that file private to the runner's user. Run this pool's Anthropic-managed git sessions on a Linux or macOS runner`, "runner refuses governed git in the agent_proxy_standalone relay mode on Windows");
      break;
    }
    default:
      e.governedGit;
  }
  if (e.egressListener) return (0, import_chunk_cqa9hrgx.m)("agent_proxy_standalone", "runner_egress_listener"), new import_chunk_jv7av99m.A(n ? `Session ${e.sessionId} routes through the proxy that ${e.runnerProxySetting} names, which this runner cannot combine with its --proxy-authorization-command / --proxy-authorization-file egress listener: the session would reach that proxy without the listener. Start this runner with only one of ${e.runnerProxySetting} and --proxy-authorization-command / --proxy-authorization-file` : `Session ${e.sessionId} routes through your self-hosted agent proxy, as the pool's relay mode asks, which this runner cannot combine with its --proxy-authorization-command / --proxy-authorization-file egress listener: the session would reach that proxy without the listener. Run this pool's sessions on a runner started with ${e.runnerProxySetting} and without --proxy-authorization-command / --proxy-authorization-file, or change the pool's relay mode`, "session uses the agent_proxy_standalone relay mode on a runner with a --proxy-authorization-* egress listener");
  return;
}
function o4s(e, n) {
  return n !== void 0 ? ovn : e?.trim();
}
function NMt(e, n) {
  if (e === void 0) return;
  let i = c6r(e, { name: n, failureSuffix: `Set ${n} to your proxy's https:// URL (for example https://proxy.internal:3128) and restart the runner.` });
  if (!i.ok) throw new import_chunk_jv7av99m.A(i.message, "runner agent proxy URL is unusable");
  return i.url;
}
function s4s(e) {
  return { AGENT_PROXY_URL: void 0, AGENT_PROXY_AUTH_TOKEN: void 0, CCR_AGENT_PROXY_CA_CERT_B64: void 0, CCR_AGENT_PROXY_ENABLED: void 0, ...Object.fromEntries(ln.map((n) => [n, e[n]])) };
}
var ve = ["NODE_EXTRA_CA_CERTS", "CLAUDE_CODE_CERT_STORE", "CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP", "CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP", "SSL_CERT_FILE", "SSL_CERT_DIR"], fe = ["CLAUDE_CODE_CLIENT_CERT", "CLAUDE_CODE_CLIENT_KEY", "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE"], ln = [...ve, ...fe];
async function fn() {
  if ((0, import_chunk_j4z7srhg.ec)()) {
    let [{ heldLines: e, peekSessionTunnelInput: n }, { parseSessionTunnelEnvelope: i }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-q2nhm3xt.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bs612fn6.js")))]), o = i(n());
    if (o === void 0) return;
    let l = o.session_token;
    return { sessionId: o.session_id, token: () => (0, import_chunk_f9x2f6cx.kr)(e).renewedToken ?? l };
  }
  return { sessionId: import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID, token: import_chunk_5rd4zsth.Nc };
}
function he(e) {
  return (0, import_chunk_w578pjby._)(e.map((n) => import_chunk_c203g5kd.s[n]));
}
function Se() {
  return `${he(ve)}${Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_CLIENT_CERT)}`;
}
async function Ce() {
  let [e, n] = await Promise.all([(0, import_chunk_3jjr3wje.eEe)(), (0, import_chunk_3jjr3wje.Hoe)()]);
  return e || n.changed;
}
async function _Qn() {
  if (await Ce()) (0, import_chunk_3jjr3wje.Cw)();
}
var GGo = ["HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "ALL_PROXY", "all_proxy"], Ae = "Claude Code cannot authenticate to the proxy named by SELF_HOSTED_RUNNER_AGENT_PROXY_URL, and does not start without it", hn = "Start the runner with --agent-proxy-url set to your proxy's https:// URL (for example https://proxy.internal:3128), or set SELF_HOSTED_RUNNER_AGENT_PROXY_URL in its environment, and start a new session. Claude Code does not start without it rather than connect directly.";
function c6r(e, n = { name: "SELF_HOSTED_RUNNER_AGENT_PROXY_URL", failureSuffix: hn }) {
  let { name: i, failureSuffix: o } = n, l = e?.trim();
  if (!l) return { ok: false, code: "missing", message: `This session's runner pool sends its traffic through your own proxy, but ${i} is not set. ${o}` };
  let c;
  try {
    c = new URL(l);
  } catch {
    return { ok: false, code: "unparsable", message: `${i} cannot be parsed as a URL. ${o}` };
  }
  if (c.protocol !== "http:" && c.protocol !== "https:" || !c.host) return { ok: false, code: "scheme", message: `${i} must be an https:// URL with a host. ${o}` };
  if (c.protocol === "http:") return { ok: false, code: "plaintext", message: `${i} must use https://, also for a proxy on this machine: Claude Code sends this session's credentials to it and checks the proxy's certificate against the CAs the runner container trusts. ${o}` };
  if (c.username || c.password) return { ok: false, code: "credentials", message: `${i} must not include a user name or password, because Claude Code signs in to the proxy with this session's own credentials. ${o}` };
  return { ok: true, url: c };
}
