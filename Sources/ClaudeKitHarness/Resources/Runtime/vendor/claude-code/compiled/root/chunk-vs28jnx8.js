const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_vs28jnx8_exports = {};
__export(chunk_vs28jnx8_exports, {
  J7l: () => J7l,
  WGl: () => WGl,
  jGl: () => jGl,
  u4o: () => u4o
});
module.exports = __toCommonJS(chunk_vs28jnx8_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_qg858gb7 = require("/$bunfs/root/chunk-qg858gb7.js");
var import_chunk_j7dp96he = require("/$bunfs/root/chunk-j7dp96he.js");
var import_chunk_01eypw0a = require("/$bunfs/root/chunk-01eypw0a.js");
var import_chunk_0h9rvfx7 = require("/$bunfs/root/chunk-0h9rvfx7.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_events = require("events");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_promises2 = require("stream/promises");
function ee(e, u, r) {
  if (!r.isOn) return [];
  let n = [];
  if (r.lossCodes.length > 0) n.push({ type: "data-flow-incomplete", v: 1, sessionId: e, codes: r.lossCodes });
  return n.push({ type: "data-flow-records", v: 1, sessionId: e, records: [...r.records], snapshot: true }), n.push({ type: "derived-from", v: 1, sessionId: e, sessions: (0, import_chunk_01eypw0a.Npe)([...r.derivedFrom, (0, import_chunk_01eypw0a._U)(u, "branch")]) }), n;
}
function Q() {
  return (0, import_chunk_4smdap7r.M)([...(0, import_chunk_bzyb60p0.DBe)().hybridOrganizationUuids ?? [], ...(0, import_chunk_42nfpkzm.zle)()]);
}
function q(e, u, r) {
  {
    let n = (0, import_chunk_0h9rvfx7.Pdn)(void 0, r);
    if (n !== void 0 && !e.has(n)) return e.add(n), { type: "hybrid-organization", sessionId: u, organizationUuid: n };
  }
  return;
}
var fe = 4194304, ue = 1e5;
function WGl(e) {
  let u = { commandFallback: "" }, r;
  for (let n of e) if (r = (0, import_chunk_q3a5dy2r.FAt)(n, u, "shown"), r !== void 0) break;
  return r ??= u.commandFallback, r.replace(/\s+/g, " ").trim().slice(0, 100).trimEnd() || "Branched session";
}
async function jGl(e, u, r, n, h) {
  var _stack = [];
  try {
    let d = (0, import_crypto.randomUUID)(), S = (0, import_chunk_f9x2f6cx.W)(), R = (0, import_chunk_bzyb60p0.eSe)() || (0, import_chunk_bzyb60p0.$3e)((0, import_chunk_bzyb60p0.Ja)(S)), B = (0, import_chunk_f9x2f6cx.QEe)(), C = (0, import_chunk_f9x2f6cx.en)().names(), j = { isOn: (0, import_chunk_865at33z.Sy)(), records: (0, import_chunk_f9x2f6cx.en)().records(void 0), lossCodes: (0, import_chunk_f9x2f6cx.en)().lossCodes(void 0), derivedFrom: (0, import_chunk_f9x2f6cx.en)().derivedFrom() }, G = (0, import_chunk_bzyb60p0.DBe)().replMode, x = Q(), V = void 0, m = (0, import_chunk_hsqa3g9e.Dy)((0, import_chunk_f9x2f6cx.Te)()), k = (0, import_chunk_bzyb60p0.Mh)(d), p = (0, import_chunk_bzyb60p0.Bc)() ?? (0, import_chunk_hsqa3g9e.wh)(), A = (0, import_chunk_nbyg4q5d.B_)(p, n);
    if (A !== void 0) return le({ sourceV5: A, forkKey: import_chunk_hkvzj051.at.transcript((0, import_chunk_q3a5dy2r.sO)((0, import_chunk_f9x2f6cx.Te)()), d), forkSessionId: d, originalSessionId: S, sourceTaintAtEntry: R, atisLatchAtEntry: B, toolsUsedAtEntry: C, dataFlowAtEntry: j, currentMessages: e, customTitle: u, extraMessages: r, forkSessionPath: k, owner: h });
    if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("nothing to branch yet");
    await (0, import_promises.mkdir)(m, { recursive: true, mode: 448 });
    let U = await (0, import_promises.open)(p, "r").catch((s) => {
      if ((0, import_chunk_jv7av99m.J)(s)) throw Error("nothing to branch yet. Send a message first");
      throw (0, import_chunk_k449cc64.i)(s), s;
    });
    const b = __using(_stack, (0, import_chunk_bq31aqv6.F5e)(U), true);
    let E = (0, import_fs.createWriteStream)(k, { encoding: "utf8", mode: 384 }), v = null;
    E.on("error", (s) => {
      v = (0, import_chunk_jv7av99m.D)(s);
    });
    let L = new Set(e.map((s) => s.uuid)), I = /* @__PURE__ */ new Map(), g = [], O = [], P, o = async () => {
      E.destroy(), await (0, import_promises2.finished)(E).catch(() => {
      }), await (0, import_promises.unlink)(k).catch(() => {
      });
    }, t = async (s) => {
      if (v) throw await o(), v;
      if (!E.write(s)) await (0, import_events.once)(E, "drain").catch(() => {
      });
    }, y = R, N = () => t((0, import_chunk_w578pjby._)((0, import_chunk_q3a5dy2r.mVt)(d, "fork_inherit")) + `
`), H = /* @__PURE__ */ new Set();
    try {
      if (y) await N();
      for (let s of x) {
        let l = q(H, d, s);
        if (l !== void 0) await t((0, import_chunk_w578pjby._)(l) + `
`);
      }
      for await (let s of (0, import_chunk_qg858gb7.ist)(U)) {
        if (s.length === 0) continue;
        let l;
        try {
          l = (0, import_chunk_w578pjby.te)(s);
        } catch {
          continue;
        }
        if (!(0, import_chunk_ma3kja9f.T)(l)) continue;
        let f = l;
        if (f.type === "content-replacement" && f.sessionId === S && Array.isArray(f.replacements)) {
          g.push(...f.replacements.filter(import_chunk_ma3kja9f.T));
          continue;
        }
        if (f.type === "relocated" && f.sessionId === S && typeof f.relocatedCwd === "string" && f.relocatedCwd !== "") {
          P = f.relocatedCwd;
          continue;
        }
        if (f.type === "memory-mode" && f.sessionId === S) {
          O.push(f);
          continue;
        }
        if (f.type === "history-suppression") {
          if (!y) y = true, await N();
          continue;
        }
        if (f.type === "hybrid-organization") {
          let K = q(H, d, f.organizationUuid);
          if (K !== void 0) await t((0, import_chunk_w578pjby._)(K) + `
`);
          continue;
        }
        if (!(0, import_chunk_bzyb60p0.nN)(f) || f.isSidechain || !L.has(f.uuid)) continue;
        I.set(f.uuid, f);
      }
    } catch (s) {
      throw await o(), s;
    } finally {
      await U.close().catch(() => {
      });
    }
    (0, import_chunk_bzyb60p0.Zcr)(I.size);
    let c = null, z = null, X = [];
    try {
      if (h) await t((0, import_chunk_w578pjby._)(ne(d, h)) + `
`);
      for (let s of e) {
        let l = I.get(s.uuid);
        if (!l) continue;
        let f = l.type === "system" && l.subtype === "model_refusal_fallback" ? { neutralizedByFork: true } : void 0, K = { ...l, ...f, sessionId: d, parentUuid: c, isSidechain: false, sessionKind: void 0, requestSessionId: (0, import_chunk_zsqk76p8.CFt)(l), forkedFrom: { sessionId: S, messageUuid: l.uuid } }, oe = { ...(0, import_chunk_bzyb60p0.Yns)(l), ...f, sessionId: d };
        if (X.push(oe), z = l, await t((0, import_chunk_w578pjby._)(K) + `
`), l.type !== "progress") c = l.uuid;
      }
    } catch (s) {
      throw await o(), s;
    }
    if (z === null) throw await o(), Error("No messages to branch");
    if (r?.length) for (let s of r) {
      let l = { ...s, cwd: z.cwd, userType: z.userType, entrypoint: z.entrypoint, version: z.version, gitBranch: z.gitBranch, sessionId: d, timestamp: (/* @__PURE__ */ new Date()).toISOString() }, f = { ...l, parentUuid: c, isSidechain: false };
      if (X.push(l), await t((0, import_chunk_w578pjby._)((0, import_chunk_q3a5dy2r.uIr)(f)) + `
`), s.type !== "progress") c = s.uuid;
    }
    if (g.length > 0) await t((0, import_chunk_w578pjby._)({ type: "content-replacement", sessionId: d, replacements: g }) + `
`);
    for (let s of O) {
      let l = { ...s, sessionId: d };
      await t((0, import_chunk_w578pjby._)(l) + `
`);
    }
    if (P) await t((0, import_chunk_w578pjby._)({ type: "relocated", sessionId: d, relocatedCwd: P }) + `
`);
    if (B !== void 0) await t((0, import_chunk_w578pjby._)({ type: "atis-latch", sessionId: d, atis: B }) + `
`);
    if (C.length > 0) await t((0, import_chunk_w578pjby._)({ type: "tools-used", sessionId: d, tools: C }) + `
`);
    for (let s of ee(d, S, j)) await t((0, import_chunk_w578pjby._)(s) + `
`);
    if (G !== void 0) await t((0, import_chunk_w578pjby._)({ type: "repl-mode", sessionId: d, replMode: G }) + `
`);
    if (E.end(), await (0, import_promises2.finished)(E).catch(() => {
    }), v) throw await o(), v;
    return { sessionId: d, title: u, forkPath: k, serializedMessages: X, contentReplacementRecords: g, sessionHistorySuppressed: y, wroteDataFlow: j.isOn };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
function ne(e, u) {
  return { type: "session-owner", ...u, sessionId: e };
}
function w(e) {
  return { data: (0, import_chunk_w578pjby._)(e) + `
` };
}
async function le(e) {
  let { sourceV5: u, forkKey: r, forkSessionId: n, originalSessionId: h, currentMessages: d, customTitle: S, extraMessages: R, forkSessionPath: B } = e, C = (0, import_chunk_bzyb60p0.DBe)().replMode, j = Q(), G = void 0, { backend: x, key: V } = u, m = [], k = new Set(d.map((o) => o.uuid)), p = /* @__PURE__ */ new Map(), A = [], U = [], b, E = e.sourceTaintAtEntry;
  if (E) m.push(w((0, import_chunk_q3a5dy2r.mVt)(n, "fork_inherit")));
  let v = /* @__PURE__ */ new Set();
  for (let o of j) {
    let t = q(v, n, o);
    if (t !== void 0) m.push(w(t));
  }
  let L;
  for (let o = 0; ; o++) {
    if (o >= ue) throw Error("Conversation too long to branch through storage");
    let t = await x.readRecords(V, { order: "forward", maxBytes: fe, ...L !== void 0 && { fromSeq: L } });
    if (!t.ok) {
      if (t.error.code === "NotFound") throw Error("nothing to branch yet. Send a message first");
      let y = Error("Conversation unreadable through storage", { cause: t.error });
      throw (0, import_chunk_k449cc64.i)(y), y;
    }
    for (let y of t.value.items) {
      let N = Buffer.from(y.data.buffer, y.data.byteOffset, y.data.byteLength).toString("utf8").trimEnd();
      if (N.length === 0) continue;
      let H;
      try {
        H = (0, import_chunk_w578pjby.te)(N);
      } catch {
        continue;
      }
      if (!(0, import_chunk_ma3kja9f.T)(H)) continue;
      let c = H;
      if (c.type === "content-replacement" && c.sessionId === h && Array.isArray(c.replacements)) {
        A.push(...c.replacements.filter(import_chunk_ma3kja9f.T));
        continue;
      }
      if (c.type === "relocated" && c.sessionId === h && typeof c.relocatedCwd === "string" && c.relocatedCwd !== "") {
        b = c.relocatedCwd;
        continue;
      }
      if (c.type === "memory-mode" && c.sessionId === h) {
        U.push(c);
        continue;
      }
      if (c.type === "history-suppression") {
        if (!E) E = true, m.push(w((0, import_chunk_q3a5dy2r.mVt)(n, "fork_inherit")));
        continue;
      }
      if (c.type === "hybrid-organization") {
        let z = q(v, n, c.organizationUuid);
        if (z !== void 0) m.push(w(z));
        continue;
      }
      if (!(0, import_chunk_bzyb60p0.nN)(c) || c.isSidechain || !k.has(c.uuid)) continue;
      p.set(c.uuid, c);
    }
    if (L = t.value.nextSeq, L === void 0) break;
  }
  let I = null, g = null, O = [];
  if (e.owner) m.push(w(ne(n, e.owner)));
  for (let o of d) {
    let t = p.get(o.uuid);
    if (!t) continue;
    let y = t.type === "system" && t.subtype === "model_refusal_fallback" ? { neutralizedByFork: true } : void 0, N = { ...t, ...y, sessionId: n, parentUuid: I, isSidechain: false, sessionKind: void 0, requestSessionId: (0, import_chunk_zsqk76p8.CFt)(t), forkedFrom: { sessionId: h, messageUuid: t.uuid } };
    if (O.push({ ...(0, import_chunk_bzyb60p0.Yns)(t), ...y, sessionId: n }), g = t, m.push(w(N)), t.type !== "progress") I = t.uuid;
  }
  if (g === null) throw Error("No messages to branch");
  if (R?.length) for (let o of R) {
    let t = { ...o, cwd: g.cwd, userType: g.userType, entrypoint: g.entrypoint, version: g.version, gitBranch: g.gitBranch, sessionId: n, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
    if (O.push(t), m.push(w((0, import_chunk_q3a5dy2r.uIr)({ ...t, parentUuid: I, isSidechain: false }))), o.type !== "progress") I = o.uuid;
  }
  if (A.length > 0) {
    let o = { type: "content-replacement", sessionId: n, replacements: A };
    m.push(w(o));
  }
  for (let o of U) {
    let t = { ...o, sessionId: n };
    m.push(w(t));
  }
  if (b) {
    let o = { type: "relocated", sessionId: n, relocatedCwd: b };
    m.push(w(o));
  }
  if (e.atisLatchAtEntry !== void 0) {
    let o = { type: "atis-latch", sessionId: n, atis: e.atisLatchAtEntry };
    m.push(w(o));
  }
  if (e.toolsUsedAtEntry.length > 0) {
    let o = { type: "tools-used", sessionId: n, tools: [...e.toolsUsedAtEntry] };
    m.push(w(o));
  }
  for (let o of ee(n, h, e.dataFlowAtEntry)) m.push(w(o));
  if (C !== void 0) {
    let o = { type: "repl-mode", sessionId: n, replMode: C };
    m.push(w(o));
  }
  let P = await x.append(r, m);
  if (!P.ok) throw await x.delete(r).catch(() => {
    return;
  }), Error("Branch could not be written through storage", { cause: P.error });
  return { sessionId: n, title: S, forkPath: B, serializedMessages: O, contentReplacementRecords: A, sessionHistorySuppressed: E, wroteDataFlow: e.dataFlowAtEntry.isOn };
}
async function me(e, u) {
  let r = `${e} (Branch)`;
  if ((await (0, import_chunk_bzyb60p0.oSe)(r, { exact: true }, u)).length === 0) return r;
  let h = await (0, import_chunk_bzyb60p0.oSe)(`${e} (Branch`, void 0, u), d = /* @__PURE__ */ new Set([1]), S = new RegExp(`^${(0, import_chunk_7cfjrnwy.fo)(e)} \\(Branch(?: (\\d+))?\\)$`);
  for (let B of h) {
    let C = B.customTitle?.match(S);
    if (C?.[1]) d.add(parseInt(C[1], 10));
  }
  let R = 2;
  while (d.has(R)) R++;
  return `${e} (Branch ${R})`;
}
async function u4o(e, u, r = {}) {
  (0, import_chunk_cy0ck7w2.rHn)();
  let n = (0, import_chunk_f9x2f6cx.W)(), h = (0, import_chunk_bzyb60p0.eS)(n), d = (0, import_chunk_bzyb60p0.eSe)() || (0, import_chunk_bzyb60p0.$3e)((0, import_chunk_bzyb60p0.Ja)(n)), S = (0, import_chunk_f9x2f6cx.QEe)(), R = (0, import_chunk_f9x2f6cx.en)().names(), B = (0, import_chunk_f9x2f6cx.en)().records(void 0), C = (0, import_chunk_f9x2f6cx.en)().lossCodes(void 0), j = (0, import_chunk_f9x2f6cx.en)().derivedFrom(), G = (0, import_chunk_bzyb60p0.DBe)().replMode, x = Q(), V = void 0, m = (0, import_chunk_bzyb60p0.yur)().map(({ inFlight: k, ...p }) => p);
  try {
    let k = r.owner ?? (0, import_chunk_bzyb60p0.LBe)() ?? (0, import_chunk_j7dp96he.CS)(), { sessionId: p, title: A, forkPath: U, serializedMessages: b, contentReplacementRecords: E, sessionHistorySuppressed: v, wroteDataFlow: L } = await jGl(e.messages, r.customTitle, r.extraMessages, e.storageV5, k);
    (0, import_chunk_bzyb60p0.Mro)(p, b.map((H) => H.uuid));
    let I = /* @__PURE__ */ new Date(), g = WGl(b), O = A?.replace(/\s+/g, " ").trim() ?? await me(g, e.storageV5), P = A ? "user" : "auto";
    await (0, import_chunk_bzyb60p0.tae)(p, O, U, P, e.storageV5), await (0, import_chunk_bzyb60p0.Wrt)(p, O, U, P, e.storageV5), (0, import_chunk_y53wbr8a.a)("tengu_conversation_forked", { message_count: b.length, has_custom_title: !!A });
    let o = { date: (0, import_chunk_7cfjrnwy.nt)(I.toISOString(), "T"), messages: b, fullPath: U, value: I.getTime(), created: I, modified: I, firstPrompt: g, messageCount: b.length, isSidechain: false, sessionId: p, customTitle: O, agentName: O, contentReplacements: E, sessionHistorySuppressed: v || d ? true : void 0, atisLatch: S, toolsUsed: R, ...L && { dataFlowRecords: B, ...C.length > 0 && { dataFlowIncomplete: C }, dataFlowDerivedFrom: j }, memoryModeStamps: m, precautionarySuppressionHeld: (0, import_chunk_bzyb60p0.WHe)((0, import_chunk_bzyb60p0.Ja)(n)) ? true : void 0, forkedFromSessionId: n };
    o.replMode = G, o.hybridOrganizationUuids = x, o.sessionOwner = k;
    let t = A ? ` "${O}"` : "", y = h ? ` ("${h}")` : "", N = `Branched session${t}. You're now in the new one (${p}). Back to the original: /resume ${n}${y}, or \`claude -r ${n}\` in a new terminal.`;
    if (e.resume) await e.resume(p, o, "fork"), (0, import_chunk_9e5mdyfk.DCe)((0, import_chunk_9e5mdyfk.TS)(), O, "user", e.storageV5), u(N, { display: "system" });
    else u(`Branched session${t}. Resume with: /resume ${p}`);
    return true;
  } catch (k) {
    let p = k instanceof Error ? k.message : "Unknown error occurred";
    return u(`Couldn't branch the session: ${p}`), false;
  }
}
async function J7l(e, u, r) {
  return await u4o(u, e, { customTitle: r?.trim() || void 0 }), null;
}
