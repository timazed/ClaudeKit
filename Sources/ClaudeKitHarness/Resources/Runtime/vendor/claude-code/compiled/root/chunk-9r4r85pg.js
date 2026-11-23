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
var chunk_9r4r85pg_exports = {};
__export(chunk_9r4r85pg_exports, {
  EG: () => EG,
  WNn: () => WNn,
  iPi: () => iPi,
  sPi: () => sPi
});
module.exports = __toCommonJS(chunk_9r4r85pg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_51mmywgr = require("/$bunfs/root/chunk-51mmywgr.js");
var import_chunk_mj4h1wdm = require("/$bunfs/root/chunk-mj4h1wdm.js");
var import_chunk_7ca0319p = require("/$bunfs/root/chunk-7ca0319p.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var K = new import_chunk_2904xtvq.j(() => ({}));
function P() {
  return K.of((0, import_chunk_f9x2f6cx.N)().host);
}
function EG() {
  return P().door !== void 0;
}
var q = 1024, Y = 32, WNn = 1024, Q = 262144, V = 256, J = /^[-\d"]/, Z = 65536, ee = 128, F = 16, ne = 1024, re = 65536;
function sPi() {
  let { door: e } = P();
  return e && G(e, false);
}
function iPi() {
  let { door: e } = P();
  return () => {
    if (e === void 0) throw new import_chunk_jv7av99m.A("not sent: no check stands over what a machine would answer");
    return G(e, true);
  };
}
function G(e, l) {
  let s = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map(), E = (t) => typeof t === "string" && t.length <= Y && !s.has(t) && !g.has(t) ? Number(t) : t, S = (t) => {
    s.delete(t), g.delete(t);
  }, R = /* @__PURE__ */ new Map(), M = (t, i) => {
    let d = R.get(t);
    if (d === void 0) return;
    if (R.delete(t), d.unanswered.delete(t), d !== i && d.unanswered.size === 0) d.endFromOutside?.();
  }, O = (t) => {
    for (let i of t.unanswered) if (R.get(i) === t) R.delete(i);
    t.endFromOutside = void 0;
  }, v = (t, i, d, a, f = { any: false, lastMayBeShortError: false, over: false }) => ({ read(n) {
    let u = n.length;
    f.lastMayBeShortError = i && !f.any && u <= ne, f.any = true;
    let p = e.mostMembers(void 0, t);
    if (f.lastMayBeShortError) p = Math.max(p, F);
    let o = B(n, p, Math.min(p, ae)), h, r = n, b;
    if (typeof o === "string") {
      let m = (0, import_chunk_mj4h1wdm.MAe)(n, ue), I = m?.has("method") ? void 0 : m?.get("id"), U = I !== void 0 && I.length <= V && J.test(I) ? C(I) : void 0, L = E(U), x = s.get(L) ?? g.get(L);
      if (x !== void 0) {
        if (h = { id: U, asked: x }, p = e.mostMembers(x, t), o === "members") o = B(n, p);
        if (o === "members" || o === "index_keys") {
          if (r = e.withoutWhatIsDropped?.(n, x, t) ?? n, r !== n) b = o, o = B(r, p);
        }
      }
    }
    let c = typeof o === "string" ? void 0 : C(r);
    if (typeof o !== "string" && c !== void 0) return b === void 0 ? { sent: c, size: { ...o, length: u } } : { sent: c, size: { ...o, length: u, lighter: b }, readInstead: r };
    if (typeof o !== "string" && h === void 0) {
      let m = { ...o, length: u };
      if (f.lastMayBeShortError && m.members <= F) return { sent: void 0, size: m };
      return e.chargeUnasked(t, m.members), e.judge(n, void 0, t, m) === void 0 ? { standIn: void 0 } : { sent: void 0, size: m };
    }
    let y = E(h?.id);
    S(y);
    let k = e.standInForUnparsed(h, t, o === "members" ? { reason: o, most: p } : { reason: typeof o === "string" ? o : "not_json" });
    if (d && !f.over && h !== void 0 && H(k)) M(y, a);
    return { standIn: k };
  }, chargeUnasked({ members: n }) {
    e.chargeUnasked(t, n);
  }, judge(n, u, p) {
    let o = (0, import_chunk_ma3kja9f.T)(n) && n.method === void 0 ? E(n.id) : void 0, h = s.get(o), r = h ?? g.get(o), b = () => {
      if (!p) e.chargeUnasked(t, u.members);
    }, c = l ? de(n, w) : "answer";
    if (c === "aside") return b();
    if (c === "question") {
      b();
      let k = h === void 0 ? s.keys().next().value : o;
      if (k === void 0) return;
      return S(k), M(k, a), { jsonrpc: "2.0", id: k, error: { code: -32603, message: oe } };
    }
    if (f.lastMayBeShortError && u.members <= F && !p && r === void 0 && (0, import_chunk_ma3kja9f.T)(n) && n.method === void 0 && (n.result === void 0 || n.result === null)) return l ? z(n) : n;
    if (c === "answer" && l && r === void 0) return b();
    if (h !== void 0) {
      if (s.delete(o), g.size >= q) g.delete(g.keys().next().value);
      g.set(o, { ...h, answeredBefore: true });
    }
    if ((r === void 0 || r.answeredBefore) && !p) e.chargeUnasked(t, u.members);
    let y = e.judge(l ? z(n) : n, r, t, p ? { ...u, ofAnArray: true } : u);
    if (d && !f.over && r !== void 0 && H(y)) M(o, a);
    if (y !== n) S(o);
    return y;
  }, turnFor(n, u) {
    return n >= re ? e.turnForText?.(u, t) : void 0;
  }, givesIds: !l, endsHere() {
    return a !== void 0 && a.unanswered.size === 0;
  }, onAnsweredElsewhere(n) {
    if (a !== void 0) a.endFromOutside = n;
  }, finished() {
    if (f.over = true, a !== void 0) O(a);
  } });
  return { noteRequests(t, i) {
    let d = [];
    if (typeof t !== "string") return;
    let a = C(t), f = Array.isArray(a) ? a : [a];
    for (let u of f) {
      if (!(0, import_chunk_ma3kja9f.T)(u)) continue;
      let { id: p, method: o, params: h } = u;
      if (p !== void 0 && typeof o === "string") {
        if (s.size >= q) s.delete(s.keys().next().value);
        let r = o === "tools/call" && (0, import_chunk_ma3kja9f.T)(h) ? h.name : void 0;
        if (s.set(p, { method: o, ...typeof r === "string" && { tool: r }, ...(0, import_chunk_ma3kja9f.T)(h) && h.cursor !== void 0 && { hasCursor: true } }), d.push(p), l && (0, import_chunk_ma3kja9f.T)(h) && (0, import_chunk_ma3kja9f.T)(h._meta)) w.add(h._meta.progressToken);
      }
    }
    if (d.length === 0 || e.endsAnsweredStream?.(i) !== true) return;
    let n = { unanswered: new Set(d) };
    for (let u of d) {
      if (R.size >= q) R.delete(R.keys().next().value);
      R.set(u, n);
    }
    return n;
  }, judging({ url: t, isGet: i, ok: d, contentType: a, answering: f }) {
    let n = (a ?? "").toLowerCase(), u = d && !i && n.includes("text/event-stream") ? f : void 0;
    if (f !== void 0 && u === void 0) O(f);
    if (n.includes("text/event-stream") || i && d) return { through: me(v(t, !d && !i, d, u)), contentType: "text/event-stream" };
    let p = v(t, !d && !i, d, void 0);
    return { through: ce(p), contentType: n.includes("application/json") ? "application/json" : void 0 };
  } };
}
var oe = "The server asked for something in the middle of this request, which cannot be answered here. The outcome of the request is unknown.", se = -32042;
function de(e, l) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return "aside";
  let { method: s, id: w, params: g, result: E, error: S } = e;
  if (s === "notifications/progress" && w === void 0 && (0, import_chunk_ma3kja9f.T)(g) && g.progressToken !== void 0 && l.has(g.progressToken)) return "progress";
  if (s !== void 0) return w === void 0 || s === "ping" ? "aside" : "question";
  return (0, import_chunk_ma3kja9f.T)(E) && (E.inputRequests !== void 0 || E.resultType === "input_required" || E.status === "input_required") || (0, import_chunk_ma3kja9f.T)(S) && S.code === se ? "question" : "answer";
}
var ie = /* @__PURE__ */ new Set([-32700, -32600, -32601, -32602, -32603]);
function z(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e) || e.error === void 0) return e;
  let { code: l, message: s } = (0, import_chunk_ma3kja9f.T)(e.error) ? e.error : {};
  return { ...e, error: { code: ie.has(l) ? l : -32603, message: typeof s === "string" ? s : "The server answered with an error." } };
}
var ue = /* @__PURE__ */ new Set(["id", "method"]), ae = 8;
function H(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && e.jsonrpc === "2.0" && e.method === void 0 && (e.result !== void 0 || e.error !== void 0);
}
function W(e) {
  return e.replace(/^\uFEFF+/, "");
}
function B(e, l, s) {
  if (!(0, import_chunk_kx2fp6pc.yyn)(e, WNn)) return "nesting";
  let w = (0, import_chunk_kx2fp6pc.xce)(e, l, s);
  return w === void 0 ? "members" : (0, import_chunk_kx2fp6pc.EWl)(e, Q) ? "index_keys" : w;
}
function C(e) {
  try {
    return (0, import_chunk_w578pjby.te)(e);
  } catch {
    return;
  }
}
function fe(e) {
  try {
    e.terminate();
  } catch {
  }
}
function D(e, l) {
  try {
    return e.enqueue(l), true;
  } catch {
    return false;
  }
}
function X(e, l, s) {
  for (let w of s === void 0 ? l : [new TextEncoder().encode(s)]) D(e, w);
}
function ce({ read: e, chargeUnasked: l, judge: s, turnFor: w }) {
  let g = [], E = 0;
  return new TransformStream({ transform(S) {
    g.push(S), E += S.length;
  }, async flush(S) {
    await w(E, "reading");
    let R = e(W(new TextDecoder().decode(Buffer.concat(g))));
    if ("standIn" in R) {
      D(S, new TextEncoder().encode((0, import_chunk_w578pjby._)(R.standIn ?? null)));
      return;
    }
    let { sent: M, size: O, readInstead: v } = R;
    if (typeof M !== "object" || M === null) {
      await w(E, "handingOn"), X(S, g, v);
      return;
    }
    if (Array.isArray(M)) l(O);
    if (Array.isArray(M) && M.length > ee) {
      D(S, new TextEncoder().encode("null"));
      return;
    }
    let t, i;
    if (Array.isArray(M)) {
      let a = M, f = a.map((n) => s(n, O, true)).filter((n) => n !== void 0);
      t = f, i = f.length === a.length && a.every((n, u) => n === f[u]);
    } else t = s(M, O, false), i = t === M;
    if (i) {
      await w(E, "handingOn"), X(S, g, v);
      return;
    }
    let d = new TextEncoder().encode((0, import_chunk_w578pjby._)(t ?? null));
    await w(d.length, "handingOn"), D(S, d);
  } });
}
function me({ read: e, judge: l, turnFor: s, givesIds: w, endsHere: g, onAnsweredElsewhere: E, finished: S }) {
  let R = new TextDecoder(), M = new TextEncoder(), O = false, v = false, t = false, i, d = () => {
    O = true, S();
  }, a = () => {
    if (i !== void 0) clearTimeout(i.timer), i = void 0;
  }, f = (r) => {
    if (O) return;
    d(), u.reset();
    let b = setTimeout(fe, import_chunk_7ca0319p.VXe, r);
    b.unref?.(), i = { timer: b, bytesLeft: import_chunk_7ca0319p.XDl };
  }, n = [], u = (0, import_chunk_51mmywgr.jNn)({ onRetry(r) {
    n.push(r);
  }, onEvent(r) {
    n.push(r);
  } }), p = ({ id: r, event: b, data: c }) => {
    let y = b, k = c;
    if (c !== "" && (y === void 0 || y === "message")) {
      let m = e(W(c)), I = "standIn" in m ? void 0 : m.sent, U = "standIn" in m ? m.standIn : I === void 0 ? void 0 : l(I, m.size, false);
      if (!("standIn" in m) && I === void 0) k = "!";
      else if (U === void 0) y = "dropped", k = "";
      else if (U !== I) k = (0, import_chunk_w578pjby._)(U);
      else k = (("standIn" in m ? void 0 : m.readInstead) ?? c).replaceAll(`
`, " ");
    } else if (c.length > Z) k = "";
    return (y === void 0 ? "" : `event: ${y}
`) + (r === void 0 || !w ? "" : `id: ${r}
`) + k.split(`
`).map((m) => `data: ${m}
`).join("") + `
`;
  }, o = async (r) => {
    let b = n;
    n = [];
    let c = "";
    v = true;
    try {
      for (let y of b) {
        if (typeof y === "number") {
          c += w ? `retry: ${y}

` : "";
          continue;
        }
        let k = y.event === void 0 || y.event === "message" ? s(y.data.length, "reading") : void 0;
        if (k !== void 0) {
          if (c !== "" && !D(r, M.encode(c))) return;
          if (c = "", await k, t) break;
        }
        let m = p(y);
        c += m;
        let I = s(m.length, "handingOn");
        if (I !== void 0) {
          if (await I, O || !D(r, M.encode(c))) return;
          c = "";
        }
        if (t || g()) {
          t = true;
          break;
        }
      }
      if (c !== "") D(r, M.encode(c));
      if (t) f(r);
    } finally {
      v = false;
    }
  }, h = { start(r) {
    if (E(() => {
      if (O) return;
      if (v) {
        t = true;
        return;
      }
      f(r);
    }), g()) f(r);
  }, async transform(r, b) {
    if (i !== void 0) {
      if (i.bytesLeft -= r.byteLength, i.bytesLeft < 0) a(), b.terminate();
      return;
    }
    u.feed(R.decode(r, { stream: true })), await o(b);
  }, async flush(r) {
    if (i !== void 0) {
      a();
      return;
    }
    u.feed(R.decode()), await o(r), a(), d();
  }, cancel() {
    a(), d();
  } };
  return new TransformStream(h);
}
