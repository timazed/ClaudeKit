const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_szpzqs89_exports = {};
__export(chunk_szpzqs89_exports, {
  A8o: () => A8o,
  Bsi: () => Bsi,
  C8o: () => C8o,
  T8o: () => T8o,
  Usi: () => Usi,
  Wsi: () => Wsi,
  xJl: () => xJl
});
module.exports = __toCommonJS(chunk_szpzqs89_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_rwc528c4 = require("/$bunfs/root/chunk-rwc528c4.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_pyawkp3j = require("/$bunfs/root/chunk-pyawkp3j.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_qt3kq0hf = require("/$bunfs/root/chunk-qt3kq0hf.js");
var import_chunk_1y3twj4q = require("/$bunfs/root/chunk-1y3twj4q.js");
var import_chunk_rvw4ecc0 = require("/$bunfs/root/chunk-rvw4ecc0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_y2bpkgdh = require("/$bunfs/root/chunk-y2bpkgdh.js");
var import_chunk_jqm7sxzd = require("/$bunfs/root/chunk-jqm7sxzd.js");
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_stream = require("stream");
var import_https = require("https");
var import_net = require("net");
var import_stream2 = require("stream");
var import_zlib = require("zlib");
var import_path2 = require("path");
class M extends Error {
  name = "AddressNotAllowed";
}
var mn = 6e4, wn = /* @__PURE__ */ new Map([["gzip", () => (0, import_zlib.createGunzip)()], ["x-gzip", () => (0, import_zlib.createGunzip)()], ["deflate", () => (0, import_zlib.createInflate)()]]), gn = { accept: false, "user-agent": false };
async function Le(e, n, o, { underServer: r, withCredential: i }) {
  if ((0, import_chunk_3jjr3wje.nL)(e)) throw new M("one of Anthropic's own hosts");
  let d = r ? yn(e, n, i) : hn(e);
  try {
    let { status: a, headers: l, data: u } = await import_chunk_np189awg.Xd.get(e, { headers: { ...gn, "accept-encoding": "identity", ...(0, import_chunk_9zdrdv25.iP)(n, (m, p) => p.toLowerCase()) }, responseType: "stream", decompress: false, maxRedirects: 0, validateStatus: () => true, timeout: mn, signal: o, ...d }), _ = String(l["content-encoding"]).trim().toLowerCase();
    if (_ === "identity") return { status: a, headers: (0, import_chunk_qwbhh2k3.Pn)({ ...l }, "content-encoding"), body: u };
    let c = wn.get(_)?.();
    if (c === void 0) return { status: a, headers: { ...l }, body: u };
    return { status: a, headers: (0, import_chunk_qwbhh2k3.Pn)({ ...l }, ["content-encoding", "content-length"]), body: (0, import_stream2.pipeline)(u, c, () => {
    }) };
  } catch (a) {
    throw (0, import_chunk_3jjr3wje.fd)(a) && a.code === "ERR_HTTP_HOOK_BLOCKED_ADDRESS" ? new M("the name does not resolve to a global address") : Error("no answer from the address of the file");
  }
}
function hn(e) {
  let n = URL.canParse(e) ? new URL(e) : void 0;
  if (n?.protocol !== "https:" || n.username || n.password) throw new M("not an https address without a user");
  if ((0, import_chunk_3jjr3wje.YX)(e) !== void 0 || (import_chunk_c203g5kd.s.ALL_PROXY || import_chunk_c203g5kd.s.all_proxy) && !(0, import_chunk_3jjr3wje.yk)(e)) throw new M("a forward proxy would look the name up");
  let o = (0, import_chunk_sjqze7qg.hnn)(n.hostname);
  if ((0, import_net.isIP)(o) !== 0 && !pe(o)) throw new M("not a global address");
  return { proxy: false, lookup: bn, httpsAgent: Ne() };
}
function yn(e, n, o) {
  let r;
  try {
    r = (0, import_chunk_3jjr3wje.XX)(e, n);
  } catch {
    throw new M("no tunnel can go through the proxy");
  }
  if (o) return { ...r, proxy: false };
  if (r.httpsAgent !== void 0 || (0, import_chunk_3jjr3wje.YX)(e) !== void 0) {
    if ((0, import_chunk_3jjr3wje.vM)() !== void 0) throw new M("the tunnel would show a client certificate");
    return { ...r, proxy: false };
  }
  return { proxy: false, httpsAgent: Ne() };
}
function Ne() {
  let e = (0, import_chunk_3jjr3wje.yv)();
  return new import_https.Agent({ ...e && { ca: e }, keepAlive: false });
}
function bn(e, n, o) {
  (0, import_chunk_sjqze7qg.Kso)(e, n, o, (r) => r.find((i) => !pe(i)));
}
var Ie = (0, import_chunk_839h1d5e.Co)(() => {
  let e = new import_net.BlockList();
  e.addSubnet("127.0.0.0", 8, "ipv4"), e.addSubnet("192.0.0.0", 24, "ipv4"), e.addSubnet("192.0.2.0", 24, "ipv4"), e.addSubnet("198.18.0.0", 15, "ipv4"), e.addSubnet("198.51.100.0", 24, "ipv4"), e.addSubnet("203.0.113.0", 24, "ipv4"), e.addSubnet("224.0.0.0", 3, "ipv4");
  let n = new import_net.BlockList();
  n.addSubnet("::", 3, "ipv6"), n.addSubnet("4000::", 2, "ipv6"), n.addSubnet("8000::", 1, "ipv6"), n.addSubnet("2001::", 23, "ipv6"), n.addSubnet("2001:db8::", 32, "ipv6"), n.addSubnet("3fff::", 20, "ipv6");
  let o = new import_net.BlockList();
  return o.addSubnet("64:ff9b::", 96, "ipv6"), { v4: e, v6: n, translated: o };
});
function pe(e) {
  let n = (0, import_net.isIP)(e);
  if (n === 0 || e.includes("%") || (0, import_chunk_sjqze7qg.bot)(e) || (0, import_chunk_sjqze7qg.ZHn)(e) !== void 0) return false;
  if (n === 4) return !Ie().v4.check(e, "ipv4");
  let { v6: o, translated: r } = Ie();
  return (r.check(e, "ipv6") || !o.check(e, "ipv6")) && ((0, import_chunk_akwvpp7y.s0r)(e)?.addresses ?? []).every(pe);
}
var vn = [100, 500, 2e3, 5e3];
async function we(e, n, o, r) {
  let i = await e.look(n);
  if (i !== "download") return { name: void 0, refusal: void 0, left: i === "unknown" ? { maybeAt: n } : "gone" };
  let d;
  for (let a of o) {
    if (Be(a) === d?.form) continue;
    try {
      await e.take(a);
    } catch (u) {
      if ((0, import_chunk_jv7av99m.w)(u) !== "EEXIST") d = { form: Be(a), error: u };
      continue;
    }
    let l;
    try {
      await Sn(() => e.rename(n, a), r);
    } catch (u) {
      l = u;
      let _ = await e.look(n);
      if (["download", "other", "empty"].includes(_) && await e.look(a) === "empty") await e.unlink(a).then(() => _ === "download" && !r.aborted ? e.rename(n, a) : void 0).catch(() => {
      });
    }
    return Me(e, n, a, l);
  }
  return Me(e, n, void 0, d?.error);
}
function Be(e) {
  let { name: n, ext: o } = (0, import_path2.parse)(e);
  return `${n.replace(/-\d{1,2}$/, "")}${o}`;
}
async function Me(e, n, o, r) {
  let i = o === void 0 ? "nothing" : await e.look(o);
  if (o !== void 0 && i === "download") return { name: o };
  let d = await e.look(n);
  return { name: void 0, refusal: r, left: d === "download" ? "at_part" : d === "unknown" ? { maybeAt: n } : o === void 0 || i === "nothing" ? "gone" : { maybeAt: o } };
}
async function Sn(e, n) {
  for (let o = 0; ; o++) try {
    await e();
    return;
  } catch (r) {
    let i = (0, import_chunk_jv7av99m.w)(r) ?? "", d = vn[o];
    if (d === void 0 || (0, import_chunk_cg8dqz0a.x)() !== "windows" || !(import_chunk_q7qjcthc.Lz.has(i) || i === "WORKING_FILE_HELD")) throw r;
    if (await (0, import_chunk_5appeerh.K)(d, n), n.aborted) throw r;
  }
}
class N extends Error {
  reason;
  facts;
  constructor(e, n) {
    super("the rest of the file did not come");
    this.reason = e;
    this.facts = n;
  }
}
var En = 5;
async function* He({ first: e, size: n, isDigestStated: o, signal: r, askFrom: i }) {
  let d = 0, a = 0, l = e;
  for (; ; ) {
    let u = d, _ = false;
    if (l !== void 0) {
      if (l.etag !== e.etag) throw l.body.destroy(), new N("changed_meanwhile");
      let c = d - l.start, m = l.length ?? 1 / 0;
      try {
        for await (let p of l.body) {
          let g = Buffer.isBuffer(p) ? p : Buffer.from(p);
          if (m -= g.length, m < 0) throw new N("contents_mismatch");
          let f = g.subarray(Math.min(c, g.length));
          if (c -= g.length - f.length, f.length > 0) d += f.length, yield f;
        }
      } catch (p) {
        if (p instanceof N) throw p;
        _ = true;
      }
    }
    if (d >= n) return;
    if (a = d > u ? 0 : a + 1, a === En || !o && e.etag === void 0) throw new N("cut_off");
    if (_ || a > 0) await (0, import_chunk_5appeerh.K)((0, import_chunk_5appeerh.LI)({ baseMs: 1e3, attempt: a }), r);
    if (r.aborted) throw new N("cut_off");
    l = await i(d, e.etag);
  }
}
var Re = 3e5, T8o = 20971520, Ge = 65536, Cn = 100, Ln = ".part";
function C8o() {
  let e = (0, import_chunk_5rd4zsth.Nc)();
  return e === null || e.startsWith("sk-ant-sid") || (0, import_chunk_np189awg.hD)(e) === null ? void 0 : e;
}
async function Nn(e, n, o, r, i, d, a) {
  if (e.refusal === void 0 && e.direct !== void 0) return await zn(e, e.direct, d, o);
  if (e.refusal !== void 0 || e.token === void 0) return R({ via: e.sessionAddress === void 0 ? "terminal" : "cloud_session" }, "failed");
  if (e.sessionAddress !== void 0) {
    let b = ce(o);
    if (!(0, import_chunk_865at33z.W0)()) return R({ via: "cloud_session" }, "not_allowed_here");
    let S = C8o();
    if (S === void 0) return R({ via: "cloud_session" }, "no_session_token");
    let h = e.sessionAddress, y;
    for (let v = 1; ; v++) {
      try {
        let { proxy: E, ...z } = await (0, import_chunk_rvw4ecc0.Tsr)(h);
        (0, import_chunk_rwc528c4.KD)().record(S), y = await (0, import_chunk_1y3twj4q.y0t)(h, { ...z, ...E !== false && E !== void 0 && { proxy: E }, method: "GET", redirect: "manual", signal: b, headers: { authorization: `Bearer ${S}`, ...(0, import_chunk_5rd4zsth.UMr)(), [import_chunk_pyawkp3j.b8e]: e.token.reveal(), "accept-encoding": "identity" } });
      } catch (E) {
        return R({ via: "cloud_session" }, V(o, b), E);
      }
      if (y.status !== 503 || v === Wn) break;
      if (await y.body?.cancel().catch(O), await (0, import_chunk_5appeerh.K)(jn * v, b), b.aborted) return R({ via: "cloud_session", httpStatus: 503 }, V(o, b));
    }
    if (y.status !== 200) return await y.body?.cancel().catch(O), R({ via: "cloud_session", httpStatus: y.status, requestId: (0, import_chunk_jqm7sxzd.VWn)(e.token, y.headers.get("request-id")) }, Xn.get(y.status) ?? "failed");
    return ve("cloud_session", e, e.token, Object.fromEntries(y.headers), import_stream.Readable.from(y.body ?? []), b);
  }
  let { token: l, size: u } = e, _ = n === void 0 ? void 0 : (0, import_chunk_pyawkp3j.bHi)(n), c = a !== void 0 ? $n(a) : _ !== void 0 ? Hn(_, r) : void 0;
  if (c === void 0) return R({ via: "terminal" }, "failed");
  let m = u !== void 0 && u > Bn, p = { relay: c, token: l, signal: o, stopped: i }, g = { ...p, notAfter: e.expiresAt }, f = await he(m ? { ...g, from: 0 } : g);
  if (f.kind === "answered" && f.isPart && Ve(f) === void 0 && e.sha256Hex === void 0) {
    if (f.body.destroy(), f = await he(g), f.kind === "failed" && f.reason === "relay_too_large" && u !== void 0 && u > import_chunk_pyawkp3j.HBt) f = { ...f, reason: "storage_without_ranges" };
  }
  if (f.kind === "failed") {
    let { reason: b, facts: S } = f;
    return { kind: "failed", reason: b, facts: S };
  }
  let k = We(f, 0, u);
  if (k === void 0) return f.body.destroy(), R(f.facts, "contents_mismatch");
  let P = ve(c.via, e, l, f.isPart ? { ...f.headers, "content-length": String(u) } : f.headers, f.body, f.deadline);
  if (P.kind === "failed" || !m) return P;
  let D = AbortSignal.any([o, AbortSignal.timeout(Re + Math.ceil(u / Mn * 1e3))]), L = f.deadline, H = Object.assign(He({ first: k, size: u, isDigestStated: e.sha256Hex !== void 0, signal: D, askFrom: async (b, S) => {
    if (i?.() === true) throw new N("relay_busy");
    let h = await he({ ...p, signal: D, from: b, etag: S });
    if (h.kind === "failed") {
      if (h.mayWorkLater) return;
      let E = h.reason === "address_used_or_gone" || h.reason === "link_expired" || h.reason === "storage_without_ranges" && u <= import_chunk_pyawkp3j.HBt;
      throw new N(!E ? h.reason : k.length === void 0 && L.aborted ? "ran_out_of_time" : "cut_off", h.facts);
    }
    let y = We(h, b, u), v = h.headers["content-encoding"] !== void 0;
    if (y === void 0 || v) throw h.body.destroy(), new N(v ? "compressed" : "contents_mismatch", h.facts);
    return y;
  } }), { destroy: () => k.body.destroy() });
  return { ...P, facts: { ...P.facts, httpStatus: f.facts.httpStatus }, body: H, deadline: D };
}
var Bn = 16777216, Mn = 2097152;
function Hn(e, n) {
  return { via: "terminal", get: async ({ token: o, from: r, etag: i }, d) => {
    let a = await import_chunk_865at33z.zt.get(e, { host: "mcp-proxy", auth: import_chunk_pyawkp3j.Bfl, refreshOAuth: true, credentials: n?.credentials, storageV5: n?.storageV5, responseType: "stream", maxRedirects: 0, validateStatus: () => true, timeout: Re, signal: d, headers: { [import_chunk_pyawkp3j.b8e]: o.reveal(), "accept-encoding": "identity", ...r !== void 0 && { range: `bytes=${r}-` }, ...i !== void 0 && { "if-range": i } } });
    return a.ok ? { ok: true, status: a.status, headers: a.response.headers, body: a.data } : { ok: false, reason: a.reason === "no-auth" ? "no_sign_in" : "not_allowed_here" };
  } };
}
function $n(e) {
  return { via: "desktop", get: async ({ token: n, from: o, etag: r }, i) => {
    let d = await (0, import_chunk_qt3kq0hf.KBa)(e, { token: n.reveal(), ...o !== void 0 && { from: o }, ...r !== void 0 && { ifRange: r } }, i);
    if ("notFetched" in d) switch (d.notFetched) {
      case "sign_in":
        return { ok: false, reason: "app_sign_in" };
      case "busy":
        return { ok: true, status: 429, headers: { "x-should-retry": "true" }, body: import_stream.Readable.from([]) };
      case "no_connection":
        throw Error("the desktop app had no connection");
      default:
        return { ok: false, reason: "app_refused" };
    }
    return { ok: true, ...d };
  } };
}
function Ve(e) {
  let { etag: n } = e.headers;
  return typeof n === "string" && /^"[\x21\x23-\x7e\x80-\xff]*"$/.test(n) ? n : void 0;
}
function We(e, n, o) {
  let { body: r, headers: i, isPart: d } = e, a = Ve(e);
  if (!d) return { body: r, start: 0, length: void 0, etag: a };
  let l = i["content-range"], [, u, _, c] = typeof l === "string" && /^bytes (\d+)-(\d+)\/(\d+|\*)$/.exec(l) || [], m = Number(_) - n + 1;
  return Number(u) === n && m > 0 && (c === "*" || Number(c) === o) ? { body: r, start: n, length: m, etag: a } : void 0;
}
async function he({ relay: e, token: n, from: o, etag: r, notAfter: i, signal: d, stopped: a }) {
  let { via: l } = e, u = ce(d), _ = Date.now() + Un, c;
  for (; ; ) {
    try {
      c = await e.get({ token: n, from: o, etag: r }, u);
    } catch (P) {
      return { ...R({ via: l }, V(d, u), P), mayWorkLater: true };
    }
    let k = c.ok ? ot(c.status, c.headers) : void 0;
    if (!c.ok || k === void 0 || Date.now() + k > Math.min(_, i ?? 1 / 0)) break;
    if (c.body.destroy(), await (0, import_chunk_5appeerh.K)(k, d), d.aborted) return { ...R({ via: l, httpStatus: 429 }, V(d, u)), mayWorkLater: false };
    if (a?.() === true) return { ...R({ via: l, httpStatus: 429 }, "relay_busy"), mayWorkLater: false };
    u = ce(d);
  }
  if (!c.ok) return { ...R({ via: l }, c.reason), mayWorkLater: false };
  let { body: m, headers: p } = c, g = { via: l, httpStatus: c.status, requestId: (0, import_chunk_jqm7sxzd.VWn)(n, p["request-id"]) };
  if (!(c.status === 200 || c.status === 206 && o !== void 0)) {
    let k = [], P = 0;
    try {
      for await (let h of m) {
        let y = Buffer.isBuffer(h) ? h : Buffer.from(h);
        if (k.push(y), P += y.length, P >= Ge) break;
      }
    } catch {
    }
    m.destroy();
    let D, L, H;
    try {
      let h = (0, import_chunk_w578pjby.te)(Buffer.concat(k).subarray(0, Ge).toString("utf8")), y = (0, import_chunk_ma3kja9f.T)(h) ? h.error : void 0, v = (0, import_chunk_ma3kja9f.T)(y) ? y.details : void 0;
      D = (0, import_chunk_ma3kja9f.T)(v) ? ke(v.error_code) : void 0, L = (0, import_chunk_ma3kja9f.T)(v) ? ke(v.reason) : void 0, H = (0, import_chunk_ma3kja9f.T)(v) && typeof v.partner_status === "number" ? v.partner_status : void 0;
    } catch {
    }
    let b = on(p["x-should-retry"]), S = at(c.status, D ?? ke(p["x-mcp-error-code"]), L, b, H);
    return { ...R(g, l === "desktop" && S === "sign_in_refused" ? "app_sign_in" : S), mayWorkLater: c.status >= 500 && b === true };
  }
  return m.on("error", O), { kind: "answered", isPart: c.status === 206, headers: p, body: m, deadline: u, facts: g };
}
async function zn(e, n, o, r) {
  let i = ce(r), { url: d, headers: a } = n.reveal(), l;
  try {
    let u = n.withCredential ? await o?.() : void 0;
    l = await Le(d, { ...a, "accept-encoding": "identity", ...u !== void 0 && { authorization: u } }, i, { underServer: n.underServer, withCredential: n.withCredential });
  } catch (u) {
    return R({ via: "direct" }, u instanceof M ? "address_not_allowed" : V(r, i), u);
  }
  if (l.status !== 200) return l.body.destroy(), R({ via: "direct", httpStatus: l.status }, Gn(l.status));
  return ve("direct", e, { isIn: () => true }, l.headers, l.body, i);
}
function Gn(e) {
  if (e >= 300 && e < 400) return "redirect_not_followed";
  switch (e) {
    case 404:
      return "storage_not_found";
    case 410:
      return "link_expired";
    case 429:
      return "storage_error";
    default:
      return e >= 500 ? "storage_error" : e >= 400 ? "storage_refused" : "partner_failed";
  }
}
function R(e, n, o) {
  let r = o === void 0 ? "" : `, error ${o instanceof Error ? o.name : typeof o}`;
  return (0, import_chunk_w578pjby.t)(`Connector downloads: no file (${n}): ${Ke(e)}${r}`), { kind: "failed", reason: n, facts: e };
}
function Ke(e) {
  return [`via ${e.via}`, e.httpStatus === void 0 ? "" : `status ${e.httpStatus}`, e.bytesExpected === void 0 ? "" : `${e.bytesExpected} bytes expected`, e.bytesReceived === void 0 ? "" : `${e.bytesReceived} received`, e.requestId === void 0 ? "" : `Request-ID ${e.requestId}`].filter(Boolean).join(", ");
}
var Wn = 3, jn = 1e3, Un = 24e4, Xn = /* @__PURE__ */ new Map([[404, "address_used_or_gone"], [502, "failed"], [400, "service_fault"], [401, "failed"], [403, "not_allowed_in_this_chat"], [409, "refused"], [429, "relay_busy"], [503, "relay_busy"], [504, "partner_too_slow"]]);
function ve(e, n, o, r, i, d) {
  let a = (0, import_chunk_5ft9yxne.Tsn)(e === "direct" ? n.mimeType : r["content-type"]) || "application/octet-stream", l = r["content-length"], u = typeof l === "string" && /^\d+$/.test(l) ? Number(l) : l === void 0 && n.size !== void 0 ? n.size : NaN, _ = { via: e, httpStatus: 200, ...Number.isSafeInteger(u) && { bytesExpected: u }, requestId: (0, import_chunk_jqm7sxzd.VWn)(o, r["request-id"]) }, c;
  if (r["content-encoding"] !== void 0) c = "compressed";
  else if (!Number.isSafeInteger(u) || u < 0) c = "no_usable_length";
  else if (n.size !== void 0 && u !== n.size) c = "contents_mismatch";
  else if (u > import_chunk_pyawkp3j.xkt) c = "over_download_limit";
  if (c !== void 0) return i.destroy(), R(_, c);
  return { kind: "ready", body: i, length: u, mimeType: a, deadline: d, facts: _ };
}
var Se = `*
`, Yn = 1e4, Je = 3, qn = ["set -C", '[ "$(pwd -P)" = "$1" ] || exit 4', '[ -z "$2" ] || ! command -v ls >/dev/null || ls -di . | { read -r id _; [ "$id" = "$2" ]; } || exit 4', `if [ -e .gitignore ] || [ -h .gitignore ]; then exit ${Je}; fi`, "printf '*\\n' > .gitignore || exit 5"].join(`
`);
async function Qe(e, n, o, r) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return r === null ? Zn(e, n, o) : Qn(r);
  let i = await (0, import_promises.realpath)(e).catch(() => {
    return;
  }), d = i === void 0 ? void 0 : await (0, import_promises.lstat)(i, { bigint: true }).catch(() => {
    return;
  });
  if (i === void 0 || d === void 0 || !d.isDirectory() || d.dev !== o.dev || ((0, import_chunk_kpby9tcv.ia)(o.ino) ? i !== (0, import_path.join)(await (0, import_promises.realpath)((0, import_path.dirname)(e)).catch(() => {
    return;
  }) ?? "", (0, import_path.basename)(e)) : d.ino !== o.ino)) return;
  let { code: a } = await (0, import_chunk_7fsmgfxx.ut)("/bin/sh", ["-c", qn, "sh", i, (0, import_chunk_kpby9tcv.ia)(o.ino) ? "" : o.ino.toString()], { cwd: i, env: { PATH: "/usr/bin:/bin:/run/current-system/sw/bin:/run/current-system/profile/bin", USER_TYPE: "external", NODE_ENV: "production" }, extendEnv: false, timeout: Yn, preserveOutputOnError: false });
  return a === 0 ? true : a === Je ? false : void 0;
}
var je = false;
function Kn(e) {
  if (!je) je = true, (0, import_chunk_w578pjby.t)(`Connector downloads: can't hold the downloads folder open on this machine (${e}); saving files by path instead, which guards less well against the folder being swapped for a link`);
}
var Jn = (0, import_chunk_7e1w6rv3.ud)(async () => {
  let [e, n] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s69qvmrf.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0xmafpjw.js")))]);
  return { anchored: e, host: n.createDeviceTreeHost() };
});
async function Ze(e, n) {
  let o;
  try {
    let r = await (0, import_promises.realpath)((0, import_path.dirname)(e)), { anchored: i, host: d } = await Jn(), a = await i.openTreeAnchor(d, { gitRoot: r, realRoot: r });
    if ("unavailable" in a) return Kn(a.unavailable), a;
    o = a;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`Connector downloads: the downloads folder's parent could not be opened (${(0, import_chunk_jv7av99m.w)(r) ?? "unknown error"}), so nothing is downloaded`), "moved";
  }
  try {
    let r = await o.anchorBeneath((0, import_path.basename)(e)), i = await r.lstat("").catch(() => {
      return;
    });
    if (i === void 0 || i.dev !== n.dev || !(0, import_chunk_kpby9tcv.ia)(i.ino) && !(0, import_chunk_kpby9tcv.ia)(n.ino) && !(0, import_chunk_y2bpkgdh.$vt)(i.ino, n.ino)) return await r.close().catch(O), (0, import_chunk_w578pjby.t)("Connector downloads: the folder held open is not the downloads folder that was checked, so nothing is downloaded"), "moved";
    let d = await o.lstat("").catch(() => {
      return;
    });
    return { anchor: r, idsLast: d?.dev === i.dev, [Symbol.asyncDispose]: () => r.close().catch(O) };
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`Connector downloads: the downloads folder could not be reached from its parent (${(0, import_chunk_jv7av99m.w)(r) ?? "unknown error"}), so nothing is downloaded`), "moved";
  } finally {
    await o.close().catch(O);
  }
}
async function Qn(e) {
  try {
    return await e.anchor.create(".gitignore", Buffer.from(Se), 420), true;
  } catch (n) {
    return (0, import_chunk_jv7av99m.w)(n) === "EEXIST" ? false : void 0;
  }
}
async function Zn(e, n, o) {
  let r = await (0, import_promises.open)(n, "wx", 420).catch((i) => (0, import_chunk_jv7av99m.w)(i) === "EEXIST" ? null : void 0);
  if (r === null || r === void 0) return r === null ? false : void 0;
  try {
    let i = await r.stat({ bigint: true });
    if (!await (0, import_chunk_pyawkp3j.Mpe)(e, o)) return;
    let d = await (0, import_promises.lstat)(n, { bigint: true }).catch(() => {
      return;
    });
    if (d === void 0 || !d.isFile() || (0, import_chunk_kpby9tcv.RF)(d, i) || i.nlink !== 1n || d.nlink !== 1n || !await (0, import_chunk_pyawkp3j.Mpe)(e, o)) return;
    let { bytesWritten: a } = await r.write(Se);
    return a === Se.length ? true : void 0;
  } catch {
    return;
  } finally {
    await r.close().catch(O);
  }
}
var Ue = 47;
async function Xe(e, n) {
  let o = (0, import_chunk_cg8dqz0a.x)();
  if (o !== "linux" && o !== "wsl") return false;
  let r;
  try {
    r = await (0, import_promises.readlink)(`/proc/self/fd/${e.fd}`, { encoding: "buffer" });
  } catch (a) {
    let l = (0, import_chunk_jv7av99m.w)(a);
    return l !== "ENOENT" && l !== "EACCES" && l !== "EPERM";
  }
  let i = r.lastIndexOf(Ue);
  if (r[0] !== Ue || i < 0) return true;
  let d = await (0, import_promises.lstat)(r.subarray(0, Math.max(i, 1)), { bigint: true }).catch(() => {
    return;
  });
  return d === void 0 || !d.isDirectory() || d.dev !== n.dev || !(0, import_chunk_kpby9tcv.ia)(n.ino) && d.ino !== n.ino;
}
async function de(e) {
  try {
    return await e, true;
  } catch (n) {
    return (0, import_chunk_jv7av99m.w)(n) === "ENOENT";
  }
}
async function en(e, n, { size: o, sha256Hex: r, pinned: i, idsLast: d }) {
  let a;
  try {
    a = await e();
  } catch (u) {
    return (0, import_chunk_jv7av99m.w)(u) === "ENOENT" ? "nothing" : "unknown";
  }
  if (!a.isFile() || a.size !== BigInt(o)) return a.isFile() && a.size === 0n ? "empty" : "other";
  if (o === 0 || d && !(0, import_chunk_kpby9tcv.ia)(a.ino) && a.ino === i?.ino && a.dev === i.dev) return "download";
  let l = await n().catch(() => {
    return;
  });
  if (l === void 0) return "unknown";
  try {
    let u = await l.stat({ bigint: true });
    if (!u.isFile() || d && (0, import_chunk_kpby9tcv.RF)(a, u)) return "other";
    let _ = (0, import_crypto.createHash)("sha256"), c = 0;
    for await (let p of l.createReadStream({ autoClose: false })) {
      if (c += p.length, c > o) return "other";
      _.update(p);
    }
    let m = await e();
    return _.digest("hex") === r && m.isFile() && m.size === a.size && m.dev === a.dev && !(0, import_chunk_kpby9tcv.RF)(m, a) ? "download" : "other";
  } catch {
    return "unknown";
  } finally {
    await l.close().catch(O);
  }
}
async function nn(e, n) {
  try {
    await n();
  } catch (o) {
    await e.close(), await n().catch(() => {
      throw o;
    });
  }
}
async function et(e, n, o) {
  let r = await (0, import_promises.open)(e, "wx", 420), i, d = 0, a = true, l = { path: e, write: async (u) => {
    for (let _ = 0; _ < u.length; ) {
      let { bytesWritten: c } = await r.write(u, _, u.length - _);
      if (c <= 0) throw Error("the write made no progress");
      _ += c, d += c;
    }
  }, isElsewhere: () => Xe(r, n), place: async (u, _, c) => {
    let m = await r.stat({ bigint: true }).catch(() => {
      return;
    });
    i = (g) => {
      let f = U(e, g);
      return en(() => (0, import_promises.lstat)(f, { bigint: true }), () => (0, import_promises.open)(f, (0, import_chunk_6mfepmbb.Xu)()), { size: d, sha256Hex: c, pinned: a ? m : void 0, idsLast: o });
    };
    let p = await we({ take: async (g) => {
      await (await (0, import_promises.open)(U(e, g), "wx", 420)).close().catch(O);
    }, rename: (g, f) => nn(l, () => (0, import_promises.rename)(U(e, g), U(e, f))), unlink: (g) => (0, import_promises.unlink)(U(e, g)), look: i }, (0, import_path.basename)(e), u, _);
    if (a && await Xe(r, n)) return { name: void 0, refusal: void 0, left: "moved" };
    if (p.name !== void 0) l.path = U(e, p.name);
    return p;
  }, close: () => (a = false, r.close().catch(O)), remove: () => de((0, import_promises.unlink)(l.path)), removeAt: async (u) => await i?.(u) === "download" && await de((0, import_promises.unlink)(U(e, u))) };
  return l;
}
async function nt(e, n, o) {
  let r = await e.anchor.createAndOpen(n, 420), i, d = 0, a = true, l = n, u = { path: o, write: async (_) => {
    if (r.write === void 0) throw Error("this file cannot be written in parts");
    for (let c = 0; c < _.length; ) {
      let { bytesWritten: m } = await r.write(_, c, _.length - c, d);
      if (m <= 0) throw Error("the write made no progress");
      c += m, d += m;
    }
  }, isElsewhere: async () => {
    let _ = await r.stat({ bigint: true }).catch(() => {
      return;
    }), c = await e.anchor.lstat(l).catch(() => {
      return;
    });
    return _ === void 0 || c === void 0 || !c.isFile() || (0, import_chunk_kpby9tcv.RF)(c, _);
  }, place: async (_, c, m) => {
    let p = await r.stat({ bigint: true }).catch(() => {
      return;
    });
    i = (f) => en(() => e.anchor.lstat(f), () => e.anchor.open(f, import_fs.constants.O_RDONLY | import_fs.constants.O_NONBLOCK), { size: d, sha256Hex: m, pinned: a ? p : void 0, idsLast: e.idsLast });
    let g = await we({ take: async (f) => {
      await (await e.anchor.createAndOpen(f, 420)).close().catch(O);
    }, rename: (f, k) => nn(u, () => e.anchor.rename(f, k)), unlink: (f) => e.anchor.unlink(f), look: i }, n, _, c);
    if (g.name !== void 0) l = g.name, u.path = U(o, l);
    return g;
  }, close: () => (a = false, r.close().catch(O)), remove: () => de(e.anchor.unlink(l)), removeAt: async (_) => await i?.(_) === "download" && await de(e.anchor.unlink(_)) };
  return u;
}
async function Usi(e, n) {
  for (let o of /* @__PURE__ */ new Set([await (0, import_chunk_pyawkp3j.hhs)(e), (0, import_chunk_p1ewvgeh.hjt)(e)])) await tn((0, import_path.join)(o, import_chunk_6mfepmbb.dO), n);
}
async function xJl(e, n) {
  await (0, import_promises.mkdir)(e, { recursive: true, mode: 448 }), await tn(e, n);
}
async function tn(e, n) {
  try {
    var _stack = [];
    try {
      await (0, import_promises.mkdir)(e).catch((d) => {
        if ((0, import_chunk_jv7av99m.w)(d) !== "EEXIST") throw d;
      });
      let o = await (0, import_promises.lstat)(e, { bigint: true });
      if (!o.isDirectory() || (await (0, import_promises.readdir)(e)).length > 0 || (await Fe(e, n, false)).found !== "none" || !await (0, import_chunk_pyawkp3j.Mpe)(e, o)) return;
      let r = await Ze(e, o);
      if (r === "moved") return;
      const i = __using(_stack, "unavailable" in r ? null : r, true);
      if (await Qe(e, (0, import_path.join)(e, ".gitignore"), o, i) === true) (0, import_chunk_6mfepmbb.jMs)();
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch {
  }
}
async function Bsi({ offer: e, connectorId: n, folder: o, signal: r, toolUseContext: i, progress: d, stopped: a, ownName: l, authorization: u, carrier: _, onFolderReady: c }) {
  var _stack = [];
  try {
    try {
      await (0, import_chunk_mxhw2w5n.$jt)((0, import_path.dirname)(o), (0, import_chunk_8j3h6yzg.Vn)()), await (0, import_promises.mkdir)((0, import_path.dirname)(o), { recursive: true, mode: 448 }), await (0, import_promises.mkdir)(o);
    } catch (A) {
      if ((0, import_chunk_jv7av99m.w)(A) !== "EEXIST") return { kind: "failed", reason: Ee(A) };
    }
    let m = await (0, import_promises.lstat)(o, { bigint: true }).catch(() => {
      return;
    });
    if (m === void 0 || !m.isDirectory() || m.isSymbolicLink()) return { kind: "failed", reason: "could_not_save" };
    let p = await Fe(o, r, true);
    if (p.found !== "none") return { kind: "failed", reason: ie[p.found] };
    if (p.missing.some((A) => (0, import_path.basename)(A).toLowerCase() === ".gitignore")) return { kind: "failed", reason: ie.tracked };
    if (!await (0, import_chunk_pyawkp3j.Mpe)(o, m)) return { kind: "failed", reason: "could_not_save" };
    let g = await Ze(o, m);
    if (g === "moved") return { kind: "failed", reason: "could_not_save" };
    let f = "unavailable" in g, k = f && g.unavailable === "no_procfs" && (await (0, import_promises.stat)((0, import_path.dirname)(o), { bigint: true }).catch(() => {
      return;
    }))?.dev === m.dev;
    const P = __using(_stack, f ? null : g, true);
    let D = (0, import_path.join)(o, ".gitignore"), L = await Qe(o, D, m, P);
    if (L === true) (0, import_chunk_6mfepmbb.jMs)();
    if (L === void 0 || !await (0, import_chunk_pyawkp3j.Mpe)(o, m)) return { kind: "failed", reason: "could_not_save" };
    let H = await (0, import_promises.lstat)(D, { bigint: true }).catch(() => {
      return;
    }), b = H?.isFile() === true ? await (0, import_promises.open)(D, (0, import_chunk_6mfepmbb.Xu)()).catch(() => {
      return;
    }) : void 0, S = await b?.stat({ bigint: true }).catch(() => {
      return;
    }), h = H !== void 0 && S !== void 0 && S.isFile() && !(0, import_chunk_kpby9tcv.RF)(H, S) && S.size <= 3n && ["*", `*
`, `*\r
`].includes(await b?.readFile({ encoding: "utf8" }).catch(() => "") ?? "");
    if (await b?.close().catch(O), !h) return { kind: "failed", reason: L ? "could_not_save" : "folder_not_kept_out_of_git" };
    if (!await (0, import_chunk_pyawkp3j.Mpe)(o, m)) return { kind: "failed", reason: "could_not_save" };
    c?.();
    let y = await Nn(e, n, r, i, a, u, _);
    if (y.kind === "failed") return y;
    let { body: v, length: E, mimeType: z, deadline: J } = y, F, Te = "could_not_save", ue = st(z), Pe = l ? await ft().catch(O) : void 0, cn = [...Pe === void 0 ? [] : be(_t(e.name, z, (A) => Pe.taskFileDiskName(A, (0, import_path.parse)(ue).name))), ...be(ue)];
    if (await (0, import_chunk_pyawkp3j.Mpe)(o, m)) for (let A of be(ue)) {
      let j = `.${A}${Ln}`;
      try {
        F = P === null ? await et((0, import_path.join)(o, j), m, k) : await nt(P, j, (0, import_path.join)(o, j));
        break;
      } catch (oe) {
        if ((0, import_chunk_jv7av99m.w)(oe) !== "EEXIST") {
          Te = Ee(oe);
          break;
        }
      }
    }
    if (F !== void 0 && (!await (0, import_chunk_pyawkp3j.Mpe)(o, m) || await F.isElsewhere())) return await F.close(), v.destroy(), { kind: "failed", reason: "could_not_save" };
    if (F === void 0) return v.destroy(), { kind: "failed", reason: Te };
    await (0, import_chunk_d3vfy4gs.Zfs)(F.path);
    let un = Object.hasOwn(import_chunk_kzzkh06w.kpe, z) && E <= T8o, G = await tt(v, E, e.sha256Hex, r, J, un, d === void 0 ? F.write : d.counting(F.write, E));
    if (G.kind === "failed") {
      await F.close();
      let A = { ...y.facts, ...G.facts, bytesReceived: G.received };
      (0, import_chunk_w578pjby.t)(`Connector downloads: the file's body was not kept (${G.reason}): ${Ke(A)}`);
      let j = await (0, import_chunk_pyawkp3j.Mpe)(o, m), oe = j && await F.remove();
      return { kind: "failed", reason: G.reason, facts: A, ...!oe && G.received > 0 && { leftBehind: { path: j ? F.path : void 0, whole: false } } };
    }
    let X = await (0, import_chunk_pyawkp3j.Mpe)(o, m) ? await F.place(cn, r, G.sha256Hex) : { name: void 0, refusal: void 0, left: "moved" };
    await F.close();
    let ne = { ...y.facts, bytesReceived: E };
    if (X.name === void 0) ne.errno = (0, import_chunk_jv7av99m.Cr)(X.refusal), (0, import_chunk_w578pjby.t)(`Connector downloads: a finished file was not given its saved name (${typeof X.left === "string" ? X.left : "maybe at a name"}, ${(0, import_chunk_jv7av99m.w)(X.refusal) ?? "no error code"})`);
    let W = X.name === void 0 ? X.left : void 0;
    if (W === "moved" || !await (0, import_chunk_pyawkp3j.Mpe)(o, m)) return ye("could_not_save", r, ne, { path: void 0 });
    if (W === "gone" || W === "at_part" && r.aborted && await F.remove()) return ye("could_not_save", r, ne);
    let le = typeof W === "object" ? (0, import_path.join)(o, W.maybeAt) : F.path, Y = await Fe(o, r, false), fe = Y.found === "none" && p.index !== Y.index, De = Y.found !== "none" || fe ? false : await (0, import_chunk_5appeerh.me)(Promise.all(p.missing.map((A) => (0, import_promises.lstat)(A).then(() => true, () => false))).then((A) => A.includes(true)), Ae);
    if (Y.found !== "none" || fe || De !== false) {
      let A = await (0, import_chunk_pyawkp3j.Mpe)(o, m), j = A && (typeof W === "object" ? await F.removeAt(W.maybeAt) : await F.remove());
      return { kind: "failed", reason: Y.found !== "none" ? ie[Y.found] : fe ? "saved_path_tracked" : De === true ? "saved_path_already_tracked" : ie.unknown, ...!j && E > 0 && { leftBehind: { path: A ? le : void 0, whole: true } } };
    }
    if (W !== void 0) return ye(W === "at_part" ? "could_not_name" : "could_not_save", r, ne, { path: le });
    return { kind: "saved", path: le, bytes: G.bytes, mimeType: z, size: E, sha256Hex: G.sha256Hex, folder: m };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
function Ee(e) {
  switch ((0, import_chunk_jv7av99m.w)(e)) {
    case "ENOSPC":
    case "EDQUOT":
      return "disk_full";
    case "EACCES":
    case "EPERM":
    case "EROFS":
      return "write_refused";
    default:
      return "could_not_save";
  }
}
function ye(e, n, o, r) {
  return { kind: "failed", reason: n.aborted ? "aborted" : e, facts: o, ...r !== void 0 && o.bytesReceived !== 0 && { leftBehind: { ...r, whole: true } } };
}
function U(e, n) {
  return (0, import_path.join)((0, import_path.dirname)(e), n);
}
async function tt(e, n, o, r, i, d, a) {
  let l = (0, import_crypto.createHash)("sha256"), u = d ? Buffer.alloc(n) : void 0, _ = 0, c, m;
  try {
    for await (let g of e) {
      let f = Buffer.isBuffer(g) ? g : Buffer.from(g);
      if (_ += f.length, _ > n) {
        c = "contents_mismatch";
        break;
      }
      l.update(f), u?.set(f, _ - f.length);
      try {
        await a(f);
      } catch (k) {
        c = Ee(k);
        break;
      }
    }
  } catch (g) {
    let f = g instanceof N ? g : void 0;
    m = f?.facts, c = i.aborted ? V(r, i) : f?.reason ?? "cut_off";
  }
  if (e.destroy(), c === void 0 && _ !== n) c = "cut_off";
  if (c === "cut_off" && o !== void 0 && n > Ye && _ >= n - Ye) c = "ended_unchecked";
  let p = l.digest("hex");
  if (c === void 0 && o !== void 0 && p !== o) c = "contents_mismatch";
  return c === void 0 ? { kind: "read", bytes: u, sha256Hex: p } : { kind: "failed", reason: c, received: _, facts: m };
}
var Ye = 65536;
function ce(e) {
  return AbortSignal.any([e, AbortSignal.timeout(Re)]);
}
function ot(e, n) {
  if (e !== 429 || on(n["x-should-retry"]) !== true) return;
  let o = (0, import_chunk_865at33z.Ixe)((0, import_chunk_865at33z.qp)(n["retry-after"]) ?? 5e3, 1e3, 3e4), r = (0, import_chunk_865at33z.Zme)() ? 0 : Math.random() * import_chunk_865at33z.YTt;
  return Math.round(o * (1 + r));
}
function on(e) {
  switch (e) {
    case "true":
      return true;
    case "false":
      return false;
  }
  return;
}
var rt = /* @__PURE__ */ new Set(["sign_in_not_checked", "organization_not_checked", "request_token_expired", "availability_not_checked", "connector_not_checked", "connector_read_failed", "listing_read_failed", "connector_read_refused", "store_error", "key_not_available"]), it = /* @__PURE__ */ new Set(["request_token_missing", "availability_unknown", "connector_not_readable", "listing_not_readable", "listing_unusable", "listing_address_unusable", "address_check_too_long", "address_not_compared", "key_refused", "not_ready"]);
function at(e, n, o, r, i) {
  switch (n) {
    case "not_found":
      return "address_used_or_gone";
    case "link_expired":
      return "link_expired";
    case "partner_too_slow":
      return "partner_too_slow";
    case "too_large":
      return "relay_too_large";
    case "check_failed":
      switch (o) {
        case "web_page_not_file":
          return "web_page_not_file";
        case "type_mismatch":
          return "type_mismatch";
        default:
          return "contents_mismatch";
      }
    case "downloads_not_available":
      switch (o) {
        case "organization_setting":
          return "downloads_blocked_by_admin";
        case "sign_in_not_accepted":
          return "sign_in_not_accepted";
        default:
          return "downloads_not_available";
      }
    case "partner_refused":
      switch (o) {
        case "redirect":
          return "storage_redirected";
        case "content_encoded":
          return "compressed";
        case void 0:
          if (i === 404) return "storage_not_found";
          return i !== void 0 && i >= 400 ? "storage_refused" : "partner_failed";
        default:
          return "partner_failed";
      }
    case "range_not_supported":
      return "storage_without_ranges";
    case "file_changed":
      return "changed_meanwhile";
    case "partner_error":
      return "storage_error";
    case "partner_unreachable":
      return "storage_unreachable";
    case "link_unreadable":
    case "link_address_blocked":
    case "header_not_allowed":
      return "link_refused";
    case "connector_not_listed":
    case "connector_not_verified":
    case "connector_not_eligible":
      return "connector_not_allowed";
    case "connector_locked":
      return "connector_locked";
    case "connector_not_visible":
    case "connector_not_found":
      return "connector_no_access";
    case "ip_not_in_allowed_range":
      return "network_not_allowed";
    case "busy":
      return "relay_busy";
    case "caller_not_allowed":
    case "bad_request":
    case "method_not_allowed":
      return "service_fault";
    case "internal_error":
      switch (o) {
        case "route_not_set_up":
        case "no_size_cap":
        case "server_host_not_set_up":
          return "service_fault";
        default:
          return "failed";
      }
    case "unavailable":
      switch (o) {
        case "connector_changed":
          return "connector_changed";
        case "listing_changed":
          return "directory_changed";
        default:
          break;
      }
      if (o !== void 0 && rt.has(o)) return "service_unavailable";
      if (o !== void 0 && it.has(o)) return "service_fault";
      if (r !== void 0) return r ? "service_unavailable" : "service_fault";
      return "failed";
    case void 0:
      break;
  }
  switch (e) {
    case 401:
      return "sign_in_refused";
    case 429:
    case 503:
      return "relay_busy";
    case 504:
      return "partner_too_slow";
  }
  return r === false ? "refused" : "failed";
}
function st(e) {
  return `download-${A8o.next()}${sn(e)}`;
}
var dt = 80, re = 200, ct = { ".jpeg": ".jpg", ".tif": ".tiff" }, lt = /\.json$|^(cmakecache|cmakelists|conanfile|constraints|requirements|test.*)\.txt$|^download-[\da-f]{8}(-\d+)?\.\w+$/i, ft = () => Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-d1kv1xq6.js")));
function _t(e, n, o) {
  let r = e.split(/[/\\]/).at(-1) ?? "", { name: i, ext: d } = (0, import_path.parse)(r), a = o(Buffer.byteLength(r) <= re - 20 || d.length > 16 ? (0, import_chunk_7cfjrnwy.FB)(r, re - 20) : `${(0, import_chunk_7cfjrnwy.FB)(i, re - 20 - d.length)}${d}`).replace(/[\u200c\u200d\ufe0e\ufe0f]/g, "").replace(import_chunk_03kvdj1s.Sxt, "_").replace(import_chunk_03kvdj1s.bxt, "_").replace(new RegExp("(\\p{M}{8})\\p{M}+", "gu"), "$1_"), l = (0, import_path.parse)(a), u = sn(n), _ = l.ext.toLowerCase(), c = ct[_] ?? _, m = c === u || u === ".txt" && pt.has(c.slice(1)) || u === ".bin" && !wt.has(c) && (rn.has(c.slice(1)) || [...an.values()].includes(c)), p = m ? l.ext : u, f = (0, import_chunk_7cfjrnwy.FB)([...m ? l.name : a].slice(0, dt).join(""), re - p.length).replace(/[. ]+$/, "").replace(mt, "_").replace(/(?<=[^._])[._]+$/, ""), k = o(`${f}${p}`);
  return lt.test((0, import_chunk_fbnv54pa.za)(k)) && (0, import_path.parse)(k).name !== o("") ? `connector-${k}` : k;
}
var mt = new RegExp(`(?:_|(?!${import_chunk_6mfepmbb.Gze})[^])+`, "gu");
function be(e) {
  let { name: n, ext: o } = (0, import_path.parse)(e);
  return Array.from({ length: Cn }, (r, i) => i === 0 ? e : `${n}-${i}${o}`);
}
var A8o = { next() {
  return (0, import_crypto.randomBytes)(4).toString("hex");
} }, rn = /* @__PURE__ */ new Set(["pdf", "csv", "txt", "md", "json", "zip", "docx", "xlsx", "pptx", "png", "jpg", "gif", "webp", "ico", "mp3", "wav", "ogg", "mp4", "webm", "woff2", "woff", "ttf", "otf", "tsv", "log", "rtf", "doc", "xls", "ppt", "odt", "ods", "odp", "epub", "ics", "vcf", "eml", "srt", "vtt", "gz", "tar", "tgz", "bz2", "xz", "7z", "rar", "bmp", "avif", "m4a", "aac", "flac", "aiff", "opus", "m4v", "avi", "mkv", "parquet", "psd", "pages", "numbers", "ndjson", "geojson", "gpx", "mbox", "sqlite", "sqlite3", "db", "arrow", "feather", "zst", "mpg", "mpeg", "3gp", "aif"]), pt = /* @__PURE__ */ new Set(["csv", "tsv", "md", "json", "log", "srt", "vtt", "ics", "vcf", "eml", "ndjson", "geojson", "gpx", "mbox"]), wt = /* @__PURE__ */ new Set([".doc", ".xls", ".ppt", ".rtf"]), an = /* @__PURE__ */ new Map([["image/heic", ".heic"], ["image/heif", ".heif"], ["image/tiff", ".tiff"], ["video/quicktime", ".mov"], ["application/vnd.ms-powerpoint", ".ppt"], ["application/rtf", ".rtf"]]);
function sn(e) {
  let n = an.get(e);
  if (n !== void 0) return n;
  let o = (0, import_chunk_d3vfy4gs.N9e)(e === "application/csv" ? "text/csv" : e);
  if (rn.has(o)) return `.${o}`;
  return /^text\/|[/+](json|xml|javascript)$/.test(e) ? ".txt" : ".bin";
}
async function Wsi(e) {
  try {
    let n = await (0, import_promises.lstat)(e);
    return n.isDirectory() && !n.isSymbolicLink();
  } catch (n) {
    return (0, import_chunk_jv7av99m.w)(n) === "ENOENT";
  }
}
var ie = { tracked: "folder_tracked_by_git", own_repository: "folder_is_repository", not_checkable: "repository_not_checkable", unknown: "git_check_failed", aborted: "aborted" }, Ae = 1e4;
async function Fe(e, n, o) {
  let r = [], i = await dn(e);
  if (i !== "no") return { found: i === "yes" ? "own_repository" : "unknown", missing: r };
  let d = await ht((0, import_path.dirname)(e));
  if (d === null) return { found: "none", missing: r };
  if (d === "unknown") return { found: "unknown", missing: r };
  let a = (0, import_chunk_w5s307zm.ol)((0, import_path.dirname)(e));
  if (a === null || (0, import_chunk_z6pfqf6e.pn)(a) !== (0, import_chunk_z6pfqf6e.pn)(d) || (0, import_chunk_kypvvv9j.Tg)(a) === null) return { found: "not_checkable", missing: r };
  let [l, u] = await Promise.all([(0, import_promises.realpath)(a).catch(() => {
    return;
  }), (0, import_promises.realpath)((0, import_path.dirname)(e)).catch(() => {
    return;
  })]);
  if (l === void 0 || u === void 0) return { found: "not_checkable", missing: r };
  let _ = (0, import_path.relative)(l, (0, import_path.join)(u, (0, import_path.basename)(e)));
  if (_ === "" || _ === ".." || _.startsWith(`..${import_path.sep}`) || (0, import_path.isAbsolute)(_)) return { found: "not_checkable", missing: r };
  let c = _.split(import_path.sep).join("/"), m = gt(c), p = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.TD, import_chunk_gd77dyw4.e4t, "ls-files", "-z", "--", `:(glob,icase)${m}`, `:(glob,icase)${m}/**`], { cwd: l, preserveOutputOnError: false, abortSignal: n, timeout: Ae, encoding: "utf8-keep-bom", env: (0, import_chunk_kypvvv9j.su)(a, { GIT_LITERAL_PATHSPECS: "0", GIT_GLOB_PATHSPECS: "0", GIT_NOGLOB_PATHSPECS: "0", GIT_ICASE_PATHSPECS: "0" }) });
  if (n.aborted) return { found: "aborted", missing: r };
  if (p.code !== 0) return { found: "unknown", missing: r };
  if (p.stdout.split("\0").some((b) => b !== "")) return { found: "tracked", missing: r };
  let g = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.TD, import_chunk_gd77dyw4.e4t, "ls-files", "-z"], { cwd: l, preserveOutputOnError: false, abortSignal: n, timeout: Ae, encoding: "utf8-keep-bom", env: (0, import_chunk_kypvvv9j.su)(a, { GIT_LITERAL_PATHSPECS: "0", GIT_GLOB_PATHSPECS: "0", GIT_NOGLOB_PATHSPECS: "0", GIT_ICASE_PATHSPECS: "0" }) });
  if (n.aborted) return { found: "aborted", missing: r };
  if (g.code !== 0) return { found: "unknown", missing: r };
  let f = (0, import_crypto.createHash)("sha256").update(g.stdout).digest("hex");
  if (!o) return { found: "none", missing: r, index: f };
  let k = await (0, import_promises.lstat)((0, import_path.join)(u, (0, import_path.basename)(e)), { bigint: true }).catch(() => {
    return;
  });
  if (k === void 0) return { found: "unknown", missing: r };
  let P = ae((0, import_path.dirname)(c)), D = /* @__PURE__ */ new Map();
  for (let b of g.stdout.split("\0")) {
    let S = b.lastIndexOf("/"), h = S === -1 ? "" : b.slice(0, S), y = h.lastIndexOf("/"), v = h.slice(y + 1), E = b.slice(S + 1);
    if (h === "" || [v, E].some((J) => J === "." || J === ".." || J.includes("\\")) || ae(h) === ae(c) || ae(y === -1 ? "." : h.slice(0, y)) !== P) continue;
    let z = D.get(v);
    if (z === void 0) D.set(v, [E]);
    else z.push(E);
  }
  let L = (await Promise.all([...D].map(async ([b, S]) => {
    let h = await (0, import_promises.lstat)((0, import_path.join)(u, b), { bigint: true }).catch(() => {
      return;
    });
    return h !== void 0 && h.isDirectory() && !h.isSymbolicLink() && !(0, import_chunk_kpby9tcv.ia)(h.ino) && h.dev === k.dev && h.ino === k.ino ? S.map((y) => (0, import_path.join)(u, b, y)) : [];
  }))).flat();
  if ((await Promise.all(L.map((b) => (0, import_promises.lstat)(b).then(() => true, () => false)))).includes(true)) return { found: "tracked", missing: r };
  return { found: "none", missing: L, index: f };
}
function gt(e) {
  return e.split("/").map((n) => /[^\u0000-\u007f]/u.test(n) ? "*" : n.replace(/[*?[\\\]]/g, "?")).join("/");
}
function ae(e) {
  return e.normalize("NFC").toLowerCase();
}
async function dn(e) {
  return (0, import_promises.lstat)((0, import_path.join)(e, ".git")).then(() => "yes", (n) => {
    let o = (0, import_chunk_jv7av99m.w)(n);
    return o === "ENOENT" || o === "ENOTDIR" ? "no" : "unknown";
  });
}
async function ht(e) {
  let n = (0, import_path.resolve)(e);
  for (; ; ) {
    let o = await dn(n);
    if (o === "yes") return n;
    if (o === "unknown") return "unknown";
    let r = (0, import_path.dirname)(n);
    if (r === n) return null;
    n = r;
  }
}
function ke(e) {
  return typeof e === "string" && /^[a-z0-9_]{1,64}$/.test(e) ? e : void 0;
}
function V(e, n) {
  if (e.aborted) return "aborted";
  return n.aborted ? "ran_out_of_time" : "failed";
}
function O() {
}
