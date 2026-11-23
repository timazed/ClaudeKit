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
var chunk_49rd7rja_exports = {};
__export(chunk_49rd7rja_exports, {
  RCa: () => RCa
});
module.exports = __toCommonJS(chunk_49rd7rja_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_net = __toESM(require("net"));
var import_http = require("http");
var on = /* @__PURE__ */ new Set([204, 205, 304]), _e = /* @__PURE__ */ new Set(["POST", "GET", "DELETE"]), Ae = ["content-length", "transfer-encoding", "connection"];
function Pe(e, o, l) {
  return an("127.0.0.1", e, o, l);
}
async function ke(e, o, l, { method: i, headers: f, body: h, signal: b }) {
  let S = i.toUpperCase();
  if (!_e.has(S)) throw Error("only POST, GET and DELETE are relayed");
  for (let v of Ae) f.delete(v);
  if (/[^\u0021-\u00ff]/.test(l)) throw TypeError("Request path contains unescaped characters");
  if (S !== "POST" && f.has("trailer")) throw Error("Trailers are invalid with this transfer encoding");
  for (let [v, W] of f) if (/[^\t\x20-\x7e\x80-\xff]/.test(W)) throw new import_chunk_jv7av99m.A(`Invalid character in header content ["${v}"]`, "Invalid character in header content");
  let k = S !== "POST" || h === void 0 ? void 0 : h.buffer instanceof ArrayBuffer ? new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : new Uint8Array(h);
  if (await (0, import_chunk_ayyyz8kh.Kd)(), b.aborted) throw Re();
  let I = e(new Request(`http://127.0.0.1:${o}${l}`, { method: S, headers: f, body: k, signal: b }), l);
  try {
    return await (0, import_chunk_5appeerh.Tn)(I, b, Re);
  } catch (v) {
    throw I.then((W) => (W.ended(), W.response.body?.cancel())).catch(() => {
    }), v;
  }
}
function We(e, o, l) {
  return Oe("127.0.0.1", e, o, l, true);
}
function an(e, o, l, i) {
  return Oe(e, o, l, i, false);
}
function Oe(e, o, l, { method: i, headers: f, body: h, signal: b }, S) {
  let k = i.toUpperCase();
  if (!S && !_e.has(k)) return Promise.reject(Error("only POST, GET and DELETE are relayed"));
  if (k === "CONNECT") return Promise.reject(Error("CONNECT is not relayed"));
  for (let v of Ae) f.delete(v);
  let I = S || k === "POST" ? h : void 0;
  if (S && I !== void 0) f.set("content-length", String(I.length));
  return new Promise((v, W) => {
    let C = (0, import_http.request)({ host: e, port: o, path: l, method: k, headers: Object.fromEntries(f), signal: b, agent: false }, (N) => {
      try {
        v(un(N));
      } catch (z) {
        N.destroy(), W(z);
      }
    });
    C.once("error", W), C.once("close", () => W(Error("closed unanswered"))), C.end(I);
  });
}
function un(e) {
  if (e.statusCode === void 0 || e.statusCode < 200) throw Error("no final status");
  let o = new Headers();
  for (let f = 0; f + 1 < e.rawHeaders.length; f += 2) o.append(e.rawHeaders[f], e.rawHeaders[f + 1]);
  let l = on.has(e.statusCode ?? 0), i = new Response(l ? null : ln(e), { status: e.statusCode, statusText: e.statusMessage, headers: o });
  if (l) e.resume();
  return i;
}
function ln(e) {
  let o = e[Symbol.asyncIterator]();
  return new ReadableStream({ async pull(l) {
    let i = await o.next();
    if (i.done) l.close();
    else l.enqueue(i.value);
  }, async cancel() {
    await o.return?.();
  } });
}
function Re() {
  return new import_chunk_jv7av99m.Ie("The operation was aborted");
}
function Ce(e) {
  let o = (0, import_chunk_w578pjby.te)(e);
  if (typeof o !== "object" || o === null) return;
  return { ...o, httpRequest: o.httpRequest && { ...o.httpRequest, port: o.httpRequest.port ?? 0, body: qe(o.httpRequest.body) }, wsOpen: o.wsOpen && { ...o.wsOpen, port: o.wsOpen.port ?? 0 }, wsMessage: o.wsMessage && { ...o.wsMessage, data: qe(o.wsMessage.data) } };
}
function Ne(e) {
  if ("httpChunk" in e) {
    let o = Buffer.from(e.httpChunk.data).toString("base64");
    return (0, import_chunk_w578pjby._)({ httpChunk: { ...e.httpChunk, data: o } });
  }
  if ("wsMessage" in e) {
    let o = Buffer.from(e.wsMessage.data).toString("base64");
    return (0, import_chunk_w578pjby._)({ wsMessage: { ...e.wsMessage, data: o } });
  }
  return (0, import_chunk_w578pjby._)(e);
}
function Me(e) {
  let o, l = {};
  return (0, import_chunk_bzyb60p0.XUe)(e, { onBytes(f, h) {
    if (f === 1) {
      o = (0, import_chunk_bzyb60p0.V4e)(h);
      return;
    }
    let b = dn[f];
    if (b !== void 0 && l !== void 0) l = b(h);
  } }) && l !== void 0 ? { sessionId: o, ...l } : void 0;
}
function Ue(e) {
  if ("httpHeaders" in e) {
    let i = e.httpHeaders;
    return Buffer.concat((0, import_chunk_bzyb60p0.wPn)(1, [...(0, import_chunk_bzyb60p0.Vnt)(1, i.requestId), ...(0, import_chunk_bzyb60p0.aZt)(2, i.statusCode), ...(0, import_chunk_bzyb60p0.Vnt)(3, i.statusText), ...i.headers.flatMap((f) => (0, import_chunk_bzyb60p0.wPn)(4, [...(0, import_chunk_bzyb60p0.Vnt)(1, f.name ?? ""), ...(0, import_chunk_bzyb60p0.Vnt)(2, f.value ?? "")])), ...(0, import_chunk_bzyb60p0.aZt)(5, i.sequenceNumber)]));
  }
  if ("httpChunk" in e) {
    let i = e.httpChunk;
    return Buffer.concat((0, import_chunk_bzyb60p0.wPn)(2, [...(0, import_chunk_bzyb60p0.Vnt)(1, i.requestId), ...(0, import_chunk_bzyb60p0.SJo)(2, i.data), ...(0, import_chunk_bzyb60p0.aZt)(3, i.isFinal ? 1 : 0), ...(0, import_chunk_bzyb60p0.aZt)(4, i.sequenceNumber)]));
  }
  if ("wsMessage" in e) {
    let i = e.wsMessage;
    return Buffer.concat((0, import_chunk_bzyb60p0.wPn)(5, [...(0, import_chunk_bzyb60p0.Vnt)(1, i.tunnelId), ...(0, import_chunk_bzyb60p0.SJo)(2, i.data), ...(0, import_chunk_bzyb60p0.aZt)(3, i.isBinary ? 1 : 0), ...(0, import_chunk_bzyb60p0.aZt)(4, i.sequenceNumber)]));
  }
  if ("wsClose" in e) {
    let i = e.wsClose;
    return Buffer.concat((0, import_chunk_bzyb60p0.wPn)(6, [...(0, import_chunk_bzyb60p0.Vnt)(1, i.tunnelId), ...(0, import_chunk_bzyb60p0.aZt)(2, i.code), ...(0, import_chunk_bzyb60p0.Vnt)(3, i.reason)]));
  }
  if ("httpError" in e) {
    let { requestId: i, errorMessage: f } = e.httpError;
    return re(3, i, f);
  }
  if ("wsOpened" in e) {
    let { tunnelId: i, protocol: f } = e.wsOpened;
    return re(4, i, f);
  }
  if ("wsError" in e) {
    let { tunnelId: i, errorMessage: f } = e.wsError;
    return re(7, i, f);
  }
  let { tunnelId: o, errorMessage: l } = e.ptyError;
  return re(11, o, l);
}
var dn = { 2: cn, 3: fn, 4: pn, 5: gn, 6: mn, 7: hn };
function cn(e) {
  let o = [], l = { port: 0 }, i = (0, import_chunk_bzyb60p0.XUe)(e, { onVarint(f, h) {
    if (f === 2) l.port = h;
  }, onBytes(f, h) {
    switch (f) {
      case 1:
        l.requestId = (0, import_chunk_bzyb60p0.V4e)(h);
        break;
      case 3:
        l.method = (0, import_chunk_bzyb60p0.V4e)(h);
        break;
      case 4:
        l.path = (0, import_chunk_bzyb60p0.V4e)(h);
        break;
      case 5:
        o.push(h);
        break;
      case 6:
        l.body = h;
        break;
    }
  } });
  return l.headers = De(o), i && l.headers !== void 0 ? { httpRequest: l } : void 0;
}
function fn(e) {
  return (0, import_chunk_bzyb60p0.XUe)(e, {}) ? { httpCancel: { requestId: (0, import_chunk_bzyb60p0.bPn)(e, 1) } } : void 0;
}
function pn(e) {
  let o = [], l = [], i = { port: 0, protocols: l }, f = (0, import_chunk_bzyb60p0.XUe)(e, { onVarint(h, b) {
    if (h === 2) i.port = b;
  }, onBytes(h, b) {
    switch (h) {
      case 1:
        i.tunnelId = (0, import_chunk_bzyb60p0.V4e)(b);
        break;
      case 3:
        i.path = (0, import_chunk_bzyb60p0.V4e)(b);
        break;
      case 4:
        o.push(b);
        break;
      case 5:
        l.push((0, import_chunk_bzyb60p0.V4e)(b));
        break;
    }
  } });
  return i.headers = De(o), f && i.headers !== void 0 ? { wsOpen: i } : void 0;
}
function gn(e) {
  let o = {};
  return (0, import_chunk_bzyb60p0.XUe)(e, { onVarint(i, f) {
    if (i === 3) o.isBinary = f !== 0;
    else if (i === 4) o.sequenceNumber = f;
  }, onBytes(i, f) {
    if (i === 1) o.tunnelId = (0, import_chunk_bzyb60p0.V4e)(f);
    else if (i === 2) o.data = f;
  } }) ? { wsMessage: o } : void 0;
}
function mn(e) {
  let o = {};
  return (0, import_chunk_bzyb60p0.XUe)(e, { onVarint(i, f) {
    if (i === 2) o.code = f;
  }, onBytes(i, f) {
    if (i === 1) o.tunnelId = (0, import_chunk_bzyb60p0.V4e)(f);
    else if (i === 3) o.reason = (0, import_chunk_bzyb60p0.V4e)(f);
  } }) ? { wsClose: o } : void 0;
}
function hn(e) {
  return (0, import_chunk_bzyb60p0.XUe)(e, {}) ? { ptyOpen: { tunnelId: (0, import_chunk_bzyb60p0.bPn)(e, 1) } } : void 0;
}
function De(e) {
  return e.every((o) => (0, import_chunk_bzyb60p0.XUe)(o, {})) ? e.map((o) => ({ name: (0, import_chunk_bzyb60p0.bPn)(o, 1), value: (0, import_chunk_bzyb60p0.bPn)(o, 2) })) : void 0;
}
function re(e, o, l) {
  return Buffer.concat((0, import_chunk_bzyb60p0.wPn)(e, [...(0, import_chunk_bzyb60p0.Vnt)(1, o), ...(0, import_chunk_bzyb60p0.Vnt)(2, l)]));
}
function qe(e) {
  if (e !== void 0 && typeof e !== "string") throw TypeError("its body or data field is not a string");
  return e === void 0 ? void 0 : Buffer.from(e, "base64");
}
var bn = "/anthropic.ccr.api.v1alpha2.tunnel.TunnelService/TunnelProxy", He = 1e3, Le = 3e4, wn = 10, Be = 5e3, Sn = 2, vn = "application/proto; fallback=json", En = 1e4, se = 3e4, Rn = 75e3, _n = 7168 * (se / 1e3);
function In(e) {
  let o = e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : "";
  return /^\d{1,15}$/.test(o) ? Number(o) : -1;
}
var An = "preview_tunnel_liveness_would_have_fired", xe = 32768, Pn = 4194304, kn = 1048576, $e = 50, Fe = 1e3, Wn = 3e4, On = "/__control/status", qn = 2e3, Cn = /* @__PURE__ */ new Set(["cookie", "authorization", "proxy-authorization", "referer"]);
function Ge(e, o) {
  return Cn.has(e) && !(o && e === "cookie");
}
var Nn = 1e4, Ve = 8, Mn = 64;
function Un(e) {
  return e.replace(/^http/, "ws").replace(/\/+$/, "") + bn;
}
var ge = "tunnel request does not name this session", me = "the newest token names another session than the one this tunnel was started for";
function Dn(e, o) {
  if (!Array.isArray(e)) return false;
  let l = e.filter((i) => typeof i?.name === "string" && i.name.toLowerCase() === "host");
  return l.length === 1 && l[0].value === `127.0.0.1:${o}`;
}
function je(e, o) {
  let l = (i) => i.slice(i.lastIndexOf("_") + 1);
  return l(e) !== "" && l(e) === l(o);
}
function Ye(e, o, l) {
  if (typeof e !== "number" || !Number.isInteger(e) || e < 1024 || e > 65535) return `invalid port: ${e}`;
  if (!l.has(e)) return `port ${e} is not one this tunnel may reach`;
  if (typeof o !== "string" || !o.startsWith("/")) return "invalid path: must start with /";
  return null;
}
var Hn = /* @__PURE__ */ new Set([1004, 1005, 1006, 1015]);
function Ln(e) {
  return $n(e ?? "").trim();
}
function Bn(e) {
  return e.includes("does not have live preview enabled") || e.includes(xn);
}
var xn = "tunnel:preview";
function $n(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f\u200e\u200f\u2028\u2029\u202a-\u202e\u2066-\u2069]+/g, " ");
}
function ze(e) {
  if (typeof e !== "number" || e < 1e3 || e > 4999 || Hn.has(e)) return 1e3;
  return e;
}
function Ke(e) {
  if (!e) return "";
  return Buffer.byteLength(e, "utf8") <= 123 ? e : "";
}
function Fn(e) {
  return new Promise((o) => {
    let l = false, i = (h) => {
      if (l) return;
      l = true, f.destroy(), o(h);
    }, f = import_net.default.createConnection({ host: "127.0.0.1", port: e });
    f.setTimeout(qn), f.once("connect", () => i(true)), f.once("error", () => i(false)), f.once("timeout", () => i(false));
  });
}
function Je(e) {
  return typeof e === "string" ? Buffer.byteLength(e, "utf8") : e.byteLength;
}
function RCa(e) {
  let o = e.forwardsAppCookies === true && e.toolServer === void 0, l = Un(e.apiBaseUrl), { accessToken: i, sessionId: f } = e, h = false, b = false, S = null, k = null, I = null, v = null, W = He, C = 0, N = 0, z = false, x = 0, K = 0, oe = 0, Z = 0, ee = false, F = 0, G = false, V = false, ie = false, M, he = false, L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), w = (n, r = "info") => (0, import_chunk_w578pjby.t)(`[bridge:preview-tunnel] ${n}`, { level: r });
  function q(n) {
    let r = S;
    if (!r || r.readyState !== WebSocket.OPEN || V === void 0) return;
    try {
      let s = V ? Ue(n) : Ne(n);
      r.send(s), K += s.length;
    } catch (s) {
      w(`send failed: ${(0, import_chunk_jv7av99m.d)(s)}`, "error");
    }
  }
  function J(n, r) {
    q({ httpError: { requestId: n, errorMessage: r } });
  }
  function ae(n) {
    let r = S;
    if (!r || r.readyState !== WebSocket.OPEN || r.bufferedAmount <= Pn) return Promise.resolve();
    return new Promise((s) => {
      let c = setInterval(() => {
        if (b || n.aborted || S !== r || r.readyState !== WebSocket.OPEN || r.bufferedAmount <= kn) clearInterval(c), s();
      }, $e);
    });
  }
  async function Xe(n, r, s) {
    let c = 0;
    try {
      let p = r.body !== void 0 && r.body.length > 0 ? Buffer.from(r.body).toString("utf8") : "{}", D = (0, import_chunk_w578pjby.te)(p);
      if (D !== null && typeof D.port === "number") c = D.port;
    } catch (p) {
      w(`control/status: bad body: ${(0, import_chunk_jv7av99m.d)(p)}`, "error");
    }
    let u = Number.isInteger(c) && c >= 1024 && c <= 65535 && e.allowedPorts.has(c), g = u ? await Fn(c) : false;
    w(`control/status port=${c} permitted=${u} listening=${g}`), q({ httpHeaders: { requestId: n, statusCode: 200, statusText: "OK", headers: [{ name: "Content-Type", value: "application/x-ndjson" }], sequenceNumber: 0 } });
    let E = (0, import_chunk_w578pjby._)({ type: "result", status: 200, data: { listening: g, port: c } }) + `
`;
    if (q({ httpChunk: { requestId: n, data: Buffer.from(E, "utf8"), isFinal: true, sequenceNumber: 1 } }), !u && s && Number.isInteger(c) && c >= 1024 && c <= 65535) Promise.resolve().then(() => b ? void 0 : e.onUnlistedPortProbed?.(c)).catch((p) => w(`control/status: onUnlistedPortProbed failed: ${(0, import_chunk_jv7av99m.d)(p)}`, "error"));
  }
  async function Qe(n, r) {
    let s = n.requestId;
    if (!s) return;
    if (e.toolServer === void 0 && n.port === 0 && n.path === On && (n.method ?? "").toUpperCase() === "POST") {
      await Xe(s, n, r);
      return;
    }
    let c = Ye(n.port, n.path, e.allowedPorts);
    if (c) {
      J(s, c);
      return;
    }
    let { port: u, path: g } = n, E = n.method ?? "GET";
    if (u === e.toolServer?.port && !Dn(n.headers, u)) {
      J(s, `Host is not 127.0.0.1:${u}, which CCR's route to the tool server sends`);
      return;
    }
    let p = new AbortController();
    L.set(s, p);
    let D = setTimeout((y) => y.abort(), Wn, p), R, Q, m;
    try {
      let y = new Headers();
      for (let H of n.headers ?? []) {
        if (!H.name || Ge(H.name.toLowerCase(), o && r)) continue;
        y.append(H.name, H.value ?? "");
      }
      let U = e.hostMatchesAppOrigin === true && u !== e.toolServer?.port && y.get("origin") === `http://localhost:${u}` && y.get("sec-fetch-site") === "same-origin";
      if (y.set("Host", `${U ? "localhost" : "127.0.0.1"}:${u}`), u === e.toolServer?.port) y.set("Authorization", `Bearer ${e.toolServer.authToken}`);
      let B = n.body !== void 0 && n.body.length > 0 ? n.body : void 0;
      if (u === e.toolServer?.port) R = e.toolServer.answerInProcess?.();
      if (R !== void 0) {
        let H = await ke(R, u, g, { method: E, headers: y, body: B, signal: p.signal });
        m = H.response, Q = H.ended;
      } else if (u === e.toolServer?.port) m = await Pe(u, g, { method: E, headers: y, body: B, signal: p.signal });
      else {
        let H = new URL(`http://127.0.0.1:${u}${g}`);
        m = await We(u, H.pathname + H.search, { method: E, headers: y, body: B, signal: p.signal });
      }
    } catch (y) {
      clearTimeout(D), L.delete(s), J(s, (0, import_chunk_jv7av99m.d)(y));
      return;
    }
    clearTimeout(D);
    let T = [];
    m.headers.forEach((y, U) => {
      T.push({ name: U, value: y });
    });
    let O = 0;
    q({ httpHeaders: { requestId: s, statusCode: m.status, statusText: m.statusText || String(m.status), headers: T, sequenceNumber: O } }), O++;
    try {
      if (m.body) {
        let y = m.body.getReader();
        if (R !== void 0) p.signal.addEventListener("abort", () => void y.cancel().catch(() => {
        }), { once: true });
        for (; ; ) {
          if (await ae(p.signal), p.signal.aborted) {
            await y.cancel();
            break;
          }
          let U = await y.read();
          if (U.value && U.value.length > 0) for (let B = 0; B < U.value.length; B += xe) {
            if (R !== void 0 && B > 0) {
              if (await ae(p.signal), p.signal.aborted) break;
            }
            q({ httpChunk: { requestId: s, data: U.value.subarray(B, B + xe), isFinal: false, sequenceNumber: O } }), O++;
          }
          if (U.done) break;
          if (p.signal.aborted) {
            await y.cancel();
            break;
          }
        }
      }
      q({ httpChunk: { requestId: s, data: new Uint8Array(0), isFinal: true, sequenceNumber: O } });
    } catch (y) {
      J(s, `error reading response body: ${(0, import_chunk_jv7av99m.d)(y)}`);
    } finally {
      L.delete(s), Q?.();
    }
  }
  function Y(n, r) {
    q({ wsError: { tunnelId: n, errorMessage: r } });
  }
  function j(n, r) {
    let s = P.get(n);
    if (!s) return;
    if (P.delete(n), s.dialTimer) clearTimeout(s.dialTimer), s.dialTimer = null;
    if (s.abort.abort(), s.pending.length = 0, !s.terminated && r) if (s.terminated = true, "error" in r) Y(n, r.error);
    else q({ wsClose: { tunnelId: n, ...r.close } });
    try {
      s.sock.close();
    } catch {
    }
  }
  async function Ze(n) {
    let r = P.get(n);
    if (!r || r.flushing) return;
    r.flushing = true;
    try {
      while (r.pending.length > 0 && P.get(n) === r) {
        if (await ae(r.abort.signal), r.abort.signal.aborted || P.get(n) !== r) return;
        let s = r.pending.shift();
        if (s) q(s);
      }
    } finally {
      r.flushing = false;
    }
  }
  function en(n, r) {
    let s = n.tunnelId;
    if (!s) return;
    if (!e.isHmrEnabled?.()) {
      Y(s, "WebSocket tunnel is not enabled for this session");
      return;
    }
    if (j(s), P.size >= Ve) {
      Y(s, `too many concurrent WebSocket tunnels (max ${Ve})`);
      return;
    }
    let c = Ye(n.port, n.path, e.allowedPorts);
    if (c) {
      Y(s, c);
      return;
    }
    let { port: u, path: g } = n, E = /* @__PURE__ */ new Set(["host", "connection", "upgrade", "sec-websocket-key", "sec-websocket-version", "sec-websocket-protocol", "sec-websocket-extensions"]), p = {};
    for (let T of n.headers ?? []) {
      if (!T.name) continue;
      let O = T.value ?? "";
      if (/[\r\n\0]/.test(T.name) || /[\r\n\0]/.test(O)) continue;
      let y = T.name.toLowerCase();
      if (Ge(y, o && r) || E.has(y)) continue;
      p[T.name] = O;
    }
    let D = (n.protocols ?? []).filter((T) => !/[\r\n\0]/.test(T)), R;
    try {
      R = new globalThis.WebSocket(`ws://127.0.0.1:${u}${g}`, { headers: p, protocols: D });
    } catch (T) {
      Y(s, `WebSocket dial failed: ${(0, import_chunk_jv7av99m.d)(T)}`);
      return;
    }
    R.binaryType = "arraybuffer";
    let Q = new AbortController(), m = { sock: R, abort: Q, dialTimer: null, nextSeq: 0, pending: [], flushing: false, terminated: false };
    P.set(s, m), m.dialTimer = setTimeout((T) => {
      T.abort.abort();
      try {
        T.sock.close();
      } catch {
      }
    }, Nn, m), Q.signal.addEventListener("abort", () => {
      if (P.get(s) !== m) return;
      R.onopen = R.onmessage = R.onerror = R.onclose = null, j(s, { error: `WebSocket dial to 127.0.0.1:${u} timed out` });
    }, { once: true }), R.onopen = () => {
      if (m.dialTimer) clearTimeout(m.dialTimer), m.dialTimer = null;
      if (P.get(s) !== m) return;
      q({ wsOpened: { tunnelId: s, protocol: R.protocol ?? "" } }), w(`ws tunnel opened id=${s} port=${u}`);
    }, R.onmessage = (T) => {
      if (P.get(s) !== m || m.terminated) return;
      let O, y;
      if (typeof T.data === "string") O = Buffer.from(T.data, "utf8"), y = false;
      else if (T.data instanceof ArrayBuffer) O = new Uint8Array(T.data), y = true;
      else {
        w(`ws tunnel ${s}: dropping unsupported message type`, "error");
        return;
      }
      if (m.nextSeq++, m.pending.push({ wsMessage: { tunnelId: s, data: O, isBinary: y, sequenceNumber: m.nextSeq } }), m.pending.length > Mn) {
        j(s, { error: "backpressure queue overflow; closing WebSocket tunnel" });
        return;
      }
      Ze(s).catch((U) => w(`ws flush failed: ${(0, import_chunk_jv7av99m.d)(U)}`, "error"));
    }, R.onerror = () => {
    }, R.onclose = (T) => {
      let O = m.dialTimer != null;
      if (m.dialTimer) clearTimeout(m.dialTimer), m.dialTimer = null;
      if (P.get(s) !== m) return;
      if (O) {
        j(s, { error: `WebSocket dial to 127.0.0.1:${u} failed (close code ${T.code})` });
        return;
      }
      j(s, { close: { code: ze(T.code), reason: Ke(T.reason) } });
    };
  }
  function nn(n) {
    let r = n.tunnelId;
    if (!r) return;
    let s = P.get(r);
    if (!s || s.sock.readyState !== WebSocket.OPEN) return;
    try {
      let c = Buffer.from(n.data ?? new Uint8Array(0));
      if (n.isBinary) s.sock.send(c);
      else s.sock.send(c.toString("utf8"));
    } catch (c) {
      j(r, { error: `write to local WebSocket failed: ${(0, import_chunk_jv7av99m.d)(c)}` });
    }
  }
  function tn(n) {
    let r = n.tunnelId;
    if (!r) return;
    let s = P.get(r);
    if (!s) return;
    if (s.terminated = true, P.delete(r), s.dialTimer) clearTimeout(s.dialTimer), s.dialTimer = null;
    s.abort.abort(), s.pending.length = 0;
    try {
      s.sock.close(ze(n.code), Ke(n.reason));
    } catch {
      try {
        s.sock.close();
      } catch {
      }
    }
  }
  function ye() {
    for (let n of [...P.keys()]) j(n);
  }
  function be(n) {
    let r;
    try {
      r = typeof n === "string" ? Ce(n) : Me(n);
    } catch (s) {
      w(`failed to parse tunnel request: ${(0, import_chunk_jv7av99m.d)(s)}`, "error");
      return;
    }
    if (r === void 0) w(typeof n === "string" ? "tunnel request is not an object" : "dropped a tunnel request: its protobuf is malformed", "error");
    return r;
  }
  function ue(n) {
    return typeof n.sessionId === "string" && je(n.sessionId, f);
  }
  function we(n) {
    let r = e.toolServer !== void 0 || e.refusesOtherSessions === true;
    if (ue(n)) return false;
    if (!h) h = true, w(`${ge}; ${r ? "refused" : "served all the same"}`, "error"), (0, import_chunk_y53wbr8a.a)("tengu_preview_tunnel_other_session", { enforce: r });
    if (!r) return false;
    if (n.httpRequest?.requestId) J(n.httpRequest.requestId, ge);
    else if (n.wsOpen?.tunnelId) Y(n.wsOpen.tunnelId, ge);
    return true;
  }
  function Te(n) {
    let r = be(n);
    if (r === void 0) return;
    if (we(r)) return;
    if (r.httpRequest) Qe(r.httpRequest, ue(r)).catch((s) => w(`handleHttpRequest failed: ${(0, import_chunk_jv7av99m.d)(s)}`, "error"));
    else if (r.httpCancel) {
      let s = r.httpCancel.requestId;
      if (s) L.get(s)?.abort(), L.delete(s);
    } else if (r.wsOpen) en(r.wsOpen, ue(r));
    else if (r.wsMessage) nn(r.wsMessage);
    else if (r.wsClose) tn(r.wsClose);
    else if (r.ptyOpen) q({ ptyError: { tunnelId: r.ptyOpen.tunnelId ?? "", errorMessage: "PTY tunnel not supported by bridge worker" } });
  }
  function rn(n) {
    let r = M, s = be(n);
    if (r === void 0 || s === void 0 || we(s)) return;
    let c = s.httpRequest?.requestId;
    if (r.closed !== void 0) {
      if (c) le(c, r.options);
      return;
    }
    let u = s.httpCancel?.requestId;
    if (u) {
      let E = r.frames.filter((p) => p.requestId !== u);
      r.frames = E, r.bytes = E.reduce((p, D) => p + Je(D.raw), 0);
      return;
    }
    let g = Je(n);
    if (r.frames.length >= r.options.maxFrames || r.bytes + g > r.options.maxBytes) {
      if (c) le(c, r.options);
      return;
    }
    r.frames.push({ raw: n, requestId: c }), r.bytes += g;
  }
  function le(n, r) {
    let { statusCode: s, contentType: c, body: u } = r.answer;
    q({ httpHeaders: { requestId: n, statusCode: s, statusText: String(s), headers: [{ name: "Content-Type", value: c }], sequenceNumber: 0 } }), q({ httpChunk: { requestId: n, data: Buffer.from(u, "utf8"), isFinal: true, sequenceNumber: 1 } });
  }
  function Se() {
    let n = M;
    if (n === void 0 || n.closed !== void 0) return;
    clearTimeout(n.deadline);
    let r = () => {
    }, s = new Promise((p) => {
      r = p;
    });
    n.closed = { done: s, finish: r };
    for (let { requestId: p } of n.frames) if (p) le(p, n.options);
    n.frames = [], n.bytes = 0, n.options.onClosing?.();
    let c = S;
    if (c === null || c.readyState !== WebSocket.OPEN) {
      if (c !== null) pe(c);
      X();
      return;
    }
    let u = Date.now(), g = false, E = setInterval(() => {
      if (M !== n) {
        clearInterval(E);
        return;
      }
      let p = Date.now() - u;
      if (c.readyState === WebSocket.OPEN && !g) {
        if (c.bufferedAmount > 0 && p < Fe) return;
        g = true;
        try {
          c.close(n.options.closeCode);
        } catch {
        }
        return;
      }
      if (p >= Fe) clearInterval(E), pe(c), X();
    }, $e);
  }
  function X() {
    let n = M;
    if (n === void 0) return;
    clearTimeout(n.deadline), M = void 0, he = true, b = true, w("the connection to the relay, opened before the tool server was ready, has ended: no request waiting on it was served, and this tunnel has stopped"), n.closed?.finish();
  }
  function de(n, r) {
    if (b) return;
    if (M !== void 0) {
      X();
      return;
    }
    if (b = true, I) clearTimeout(I), I = null;
    w(`permanent failure (${r}): ${n}`, "error"), (0, import_chunk_y53wbr8a.a)("tengu_preview_tunnel_permanent_failure", { consecutive_failures: F, policy_refusal: r === "policy" && n !== me, own_refusal: n === me }), e.onPermanentFailure?.(n, r);
  }
  function ce() {
    if (F++, e.onPermanentFailure && F >= wn) return de(`${F} consecutive failed or short-lived connections \u2014 relay unreachable or refusing`, "exhausted"), true;
    return false;
  }
  function ne() {
    if (b) return;
    if (M !== void 0) {
      X();
      return;
    }
    if (C > 0 && Date.now() - C > Le) W = He;
    C = 0, G = false;
    let n = W + Math.floor(Math.random() * (W / 2));
    w(`reconnecting in ${n}ms`), I = setTimeout(Ee, n), W = Math.min(W * 2, Le);
  }
  function ve(n) {
    if (v) clearTimeout(v), v = null;
    if (k) clearInterval(k), k = null;
    for (let r of L.values()) r.abort();
    if (L.clear(), ye(), S === n) S = null;
  }
  function fe(n, r) {
    if (w(`${r}; forcing reconnect`, "error"), G || C > 0 && Date.now() - C >= Be) e.onEstablishedClose?.();
    pe(n), ne();
  }
  function pe(n) {
    n.onopen = n.onmessage = n.onerror = n.onclose = null, ve(n);
    try {
      let r = n.terminate;
      if (typeof r === "function") r.call(n);
      else n.close();
    } catch {
    }
  }
  function Ee() {
    if (b) return;
    I = null;
    let n = (0, import_chunk_np189awg.bhn)(i) ?? "";
    if (e.refusesOtherSessions === true && !je(n, e.sessionId)) {
      de(me, "policy");
      return;
    }
    f = n || e.sessionId;
    let r = e.toolServer?.asksForBinaryFrames === true && F < Sn;
    if (e.toolServer?.asksForBinaryFrames === true && !r) w(`not asking for binary frames on this dial, after ${F} failed dials in a row`);
    let s = { Authorization: `Bearer ${i}`, "x-session-id": f, ...e.toolServer && { "x-tunnel-peer": "tool-server" }, ...r && { "Content-Type": vn } }, c;
    try {
      c = new globalThis.WebSocket(l, { headers: s, proxy: (0, import_chunk_3jjr3wje.Z1)(l), tls: e.toolServer || e.refusesOtherSessions === true ? { ...(0, import_chunk_3jjr3wje.QN)(void 0), rejectUnauthorized: true } : (0, import_chunk_3jjr3wje.QN)(void 0) || void 0 });
    } catch (u) {
      if (w(`WebSocket construct failed: ${(0, import_chunk_jv7av99m.d)(u)}`, "error"), ce()) return;
      ne();
      return;
    }
    S = c, V = r ? void 0 : false, v = setTimeout((u) => {
      w("open timeout; retrying", "error"), u.onopen = u.onmessage = u.onerror = u.onclose = null;
      try {
        u.close();
      } catch {
      }
      if (S === u) S = null;
      if (ce()) return;
      ne();
    }, En, c), c.onopen = () => {
      if (v) clearTimeout(v), v = null;
      w(`connected session=${e.sessionId}`), C = Date.now(), N = Date.now(), z = false, x = 0, K = 0, oe = 0, Z = 0, ee = false, G = false, e.toolServer?.onOpen?.();
      let u = c;
      u.addEventListener?.("ping", () => {
        N = Date.now(), G = true;
      }), u.addEventListener?.("pong", (g) => {
        N = Date.now(), G = true, z = true, x = 0;
        let E = In(g?.data);
        if (E > Z && E <= K) Z = E;
      }), k = setInterval(() => {
        if (c.readyState !== WebSocket.OPEN) return;
        if (e.livenessEnforce && e.quietLivenessPings !== void 0 && (z || e.toolServer !== void 0) && x >= Math.max(e.quietLivenessPings, e.toolServer === void 0 || Date.now() - N < se ? (oe - Z) / _n : 0)) {
          (0, import_chunk_y53wbr8a.a)("tengu_preview_tunnel_liveness_enforced_reconnect", { idle_ms: x * se, quiet: true }), fe(c, `${x} pings in a row unanswered (liveness deadline exceeded)`);
          return;
        }
        if (Date.now() - N > (e.livenessDeadlineMs ?? Rn)) {
          if (e.livenessEnforce) {
            let g = Date.now() - N;
            (0, import_chunk_y53wbr8a.a)("tengu_preview_tunnel_liveness_enforced_reconnect", { idle_ms: g }), fe(c, `no peer activity for ${g}ms (liveness deadline exceeded)`);
            return;
          }
          if (!ee) {
            let g = Date.now() - N;
            w(`${An}: no peer activity for ${g}ms (liveness deadline exceeded; observe-only, not reconnecting)`, "error"), (0, import_chunk_y53wbr8a.a)("tengu_preview_tunnel_liveness_would_have_fired", { idle_ms: g, enforce: false }), ee = true;
          }
        } else ee = false;
        if (e.quietLivenessPings === void 0) {
          u.ping?.();
          return;
        }
        if (x === 0) oe = K;
        x++, u.ping?.(String(K));
      }, se);
    }, c.onmessage = (u) => {
      if (N = Date.now(), G = true, V === void 0) V = typeof u.data !== "string", w(V ? "the relay is using binary frames, as asked" : "the relay answered in JSON, so this connection speaks JSON: it did not grant binary frames, or a proxy dropped the Content-Type header");
      let g = typeof u.data === "string" ? u.data : V ? u.data instanceof Uint8Array ? u.data : new Uint8Array(u.data) : Buffer.from(u.data).toString("utf8");
      if (M !== void 0) rn(g);
      else Te(g);
    }, c.onerror = (u) => {
      w(`error: ${"message" in u && typeof u.message === "string" ? u.message : "unknown"}`, "error");
    }, c.onclose = (u) => {
      let g = Ln(u.reason);
      w(`closed code=${u.code} reason=${g || "(none)"}`), ve(c);
      let E = G || C > 0 && Date.now() - C >= Be;
      if (E) F = 0, ie = false, e.onEstablishedClose?.();
      if (u.code === 1008 && Bn(g)) {
        if (e.policyStopEnforce) {
          de(`relay refused with close code 1008 (policy violation): ${g || "(no reason)"} \u2014 not retrying`, "policy");
          return;
        }
        if (!ie) ie = true, w(`POLICY_STOP_WOULD_HAVE_FIRED: capability-refusal 1008 (${g || "(no reason)"}); observe-only, retrying`, "error"), (0, import_chunk_y53wbr8a.a)("tengu_preview_tunnel_policy_stop_would_have_fired", { enforce: false });
      }
      if (!E && ce()) return;
      ne();
    };
  }
  if (w(`starting session=${e.sessionId} url=${l}`), e.hold !== void 0) M = { options: e.hold, frames: [], bytes: 0, dialedAt: Date.now(), deadline: setTimeout(Se, e.hold.deadlineMs) };
  return Ee(), { updateAccessToken(n) {
    i = n;
  }, forceReconnect() {
    if (b || S === null) return;
    fe(S, "caller requested");
  }, async endHold() {
    let n = M;
    if (n !== void 0 && n.closed === void 0) {
      if (Date.now() - n.dialedAt < n.options.deadlineMs) {
        clearTimeout(n.deadline), M = void 0;
        for (let { raw: r } of n.frames) Te(r);
        return "serving";
      }
      Se();
    }
    return await n?.closed?.done, he ? "gone" : "serving";
  }, stop() {
    if (b) return;
    if (X(), b = true, I) clearTimeout(I), I = null;
    if (v) clearTimeout(v), v = null;
    if (k) clearInterval(k), k = null;
    for (let n of L.values()) n.abort();
    L.clear(), ye();
    try {
      S?.close();
    } catch {
    }
    S = null, w(`stopped session=${e.sessionId}`);
  } };
}
