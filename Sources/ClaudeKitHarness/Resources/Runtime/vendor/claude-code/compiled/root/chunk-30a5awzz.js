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
var chunk_30a5awzz_exports = {};
__export(chunk_30a5awzz_exports, {
  A_l: () => A_l,
  C_l: () => C_l,
  Gln: () => Gln,
  H1i: () => H1i,
  Iys: () => Iys,
  Kln: () => Kln,
  M1i: () => M1i,
  P_l: () => P_l,
  R_l: () => R_l,
  Vln: () => Vln,
  Wk: () => Wk,
  c4: () => c4,
  eo: () => eo,
  qWt: () => qWt,
  x_l: () => x_l,
  zln: () => zln
});
module.exports = __toCommonJS(chunk_30a5awzz_exports);
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_util = require("util");
var import_zlib = require("zlib");
async function Wk(e, t, { concurrency: n = 1 / 0, stopOnError: r = true, signal: s } = {}) {
  if (typeof t !== "function") throw TypeError("Mapper function is required");
  if (n !== 1 / 0 && !(Number.isSafeInteger(n) && n > 0)) throw TypeError("Expected `concurrency` to be an integer from 1 and up or `Infinity`");
  let { promise: i, resolve: o, reject: c } = Promise.withResolvers(), a = { mapper: t, stopOnError: r, results: [], errors: [], pulled: 0, running: 0, isOpen: true, isFilling: true, source: e[Symbol.iterator](), end(l) {
    if (a.isOpen = a.isFilling = false, l === a) o(a.results);
    else c(l);
    s?.removeEventListener("abort", d);
  } };
  function d() {
    a.end(s?.reason);
  }
  if (s?.aborted) d();
  return s?.addEventListener("abort", d, { once: true }), U(a, n), i;
}
async function U(e, t) {
  try {
    for (let n = 0; n < t && e.isFilling; n++) W(e, await e.source.next()), await void 0;
  } catch (n) {
    await void 0, e.end(n);
  }
}
async function W(e, t) {
  for (let n = t; ; ) {
    let r = e.pulled++;
    if (n.done) {
      if (e.isFilling = false, e.running === 0 && e.isOpen) e.end(e.errors.length > 0 ? AggregateError(e.errors) : e);
      return;
    }
    e.running++;
    let s = false;
    try {
      let i = await n.value;
      if (!e.isOpen) return;
      if (e.results[r] = await e.mapper(i, r), e.running--, !e.isOpen) return;
      s = true, n = await e.source.next();
    } catch (i) {
      if (s) await void 0;
      if (e.stopOnError) return e.end(i);
      if (e.errors.push(i), e.running--, !e.isOpen) return;
      try {
        n = await e.source.next();
      } catch (o) {
        return await void 0, e.end(o);
      }
    }
  }
}
var _ = 131072, Y = 32768, V = 64, Z = 4 * _, X = 32, Q = 2, J = import_chunk_r6fna520.XWt, x = 21e4, ee = 256, b = { messages: '"messages":[', system: '],"system":', endOfSystemBlock: '"},{', metadata: ',"metadata":{"user_id":"' }, te = 1024, ne = 4096;
function v(e = J) {
  return { blocks: /* @__PURE__ */ new Map(), storedBytes: 0, maxStoredBytes: e, evictedForSpaceCount: 0, generation: 0, keptBody: void 0, keptSubagentBodies: /* @__PURE__ */ new Map(), cancelIdleDrop: void 0, pooledCompression: Promise.resolve() };
}
function Gln(e) {
  e.cancelIdleDrop?.(), e.cancelIdleDrop = void 0, e.blocks.clear(), e.storedBytes = 0, e.keptBody = void 0, e.keptSubagentBodies.clear(), e.generation++;
}
function zln(e, t) {
  if (e.keptBody?.memory.buffer === t.buffer) return e.keptBody;
  for (let { keptBody: n } of e.keptSubagentBodies.values()) if (n?.memory.buffer === t.buffer) return n;
  return;
}
function M1i({ body: e, level: t, store: n, clock: r, cutNearToolsEnd: s = false }) {
  let i = re(e, s), { keys: o, carriedDigestCount: c } = oe(e, i, t, e.byteOffset === 0 ? zln(n, e) : void 0), a = r.monotonicNow(), d = 0, l = 0, f = i.map((u, S) => {
    let p = P(n, o[S], a);
    if (p !== void 0) d++, l += u.end - u.start;
    return p;
  });
  if (n.blocks.size > 0) Iys(n, r);
  return { body: e, level: t, blocks: i, keys: o, reused: f, reusedBlockCount: d, reusedBytes: l, carriedDigestCount: c, generation: n.generation };
}
function C_l({ keys: e, reused: t }) {
  return e.some((n, r) => n !== void 0 && t[r] === void 0);
}
async function A_l(e, t, n, r) {
  let s = await I(e, t, n, r), i = Buffer.from([31, 139, 8, 0, 0, 0, 0, 0, 0, 255]), o = Buffer.alloc(10);
  return o[0] = 3, o.writeUInt32LE(Bun.hash.crc32(e.body), 2), o.writeUInt32LE(e.body.length % 4294967296, 6), Buffer.concat([i, ...s, o]);
}
async function R_l(e, t, n, r) {
  await I(e, t, n, { inBackground: true, stopIf: r });
}
class Vln extends Error {
  fault;
  constructor(e, t) {
    super("Request body gzip: a newly compressed block failed its check", t);
    this.fault = e;
  }
}
function H1i(e) {
  let t = (0, import_chunk_jv7av99m.w)(e);
  return t === "Z_DATA_ERROR" || t === "Z_BUF_ERROR" ? t : void 0;
}
async function I(e, t, n, { signal: r, stopIf: s, inBackground: i = false } = {}) {
  let { body: o, level: c, blocks: a, keys: d, reused: l, generation: f } = e, u;
  if (!i && o.length - e.reusedBytes <= Z) u = a.map((p, g) => {
    let y = l[g];
    if (y !== void 0) return y;
    let m = o.subarray(p.start, p.end), h = T(o, p, c), k = (0, import_zlib.deflateRawSync)(m, h);
    try {
      A(m, k, (0, import_zlib.inflateRawSync)(k, h));
    } catch (B) {
      throw O(B);
    }
    return k;
  });
  else {
    let g = (i ? Promise.resolve() : t.pooledCompression).then(() => {
      r?.throwIfAborted();
      let y = n.monotonicNow();
      return Wk(a, async (m, h) => {
        if (s?.()) throw Error("Request body gzip: compression stopped");
        if (l[h] !== void 0) return l[h];
        if (i && d[h] === void 0) return Buffer.alloc(0);
        let k = t.generation === f ? P(t, d[h], y) : void 0;
        if (k !== void 0) return e.reusedBlockCount++, e.reusedBytes += m.end - m.start, k;
        let B = o.subarray(m.start, m.end), R = T(o, m, c), C = await se(B, R);
        try {
          A(B, C, await ie(C, R));
        } catch (q) {
          throw O(q);
        }
        return C;
      }, { concurrency: i ? Q : X, signal: r });
    });
    if (!i) t.pooledCompression = g.then(() => {
    }, () => {
    });
    u = await g;
  }
  if (t.generation !== f) return u;
  let S = n.monotonicNow();
  return u.forEach((p, g) => {
    let y = d[g];
    if (y !== void 0 && !t.blocks.has(y)) {
      let m = p.buffer.byteLength === p.length;
      de(t, y, m ? p : Buffer.copyBytesFrom(p), S);
    }
  }), ce(t, S), Iys(t, n), u;
}
function re(e, t) {
  let n = e.indexOf(b.messages), r = e.lastIndexOf(b.system), s = r === -1 ? -1 : e.indexOf(b.endOfSystemBlock, r), i = s !== -1 && s - r <= te ? s + 2 : -1, o = t && n !== -1 && n < r && i !== -1 ? e.lastIndexOf(b.metadata) - ne : -1, c = o > i ? o : -1, a = [n, r, i, c, e.length], d = [], l = 0;
  for (let f of a) {
    if (f <= l) continue;
    for (let u = l; u < f; u += _) d.push({ start: u, end: Math.min(u + _, f), dictionaryStart: Math.max(u - Y, l), endsAtToolsCut: f === c && u + _ >= f });
    l = f;
  }
  return d;
}
function oe(e, t, n, r) {
  let s = 0, i = t.map((o) => {
    if (o.end - o.start !== _ && !o.endsAtToolsCut) return;
    let c = r?.blockDigests.get(o.start);
    if (r !== void 0 && c?.end === o.end && o.end <= r.digestedBytes) return s++, c.digest;
    return Bun.SHA256.hash(e.subarray(o.start, o.end), "base64");
  });
  if (r !== void 0) r.blockDigests = new Map(t.flatMap((o, c) => {
    let a = i[c];
    return a === void 0 || o.end - o.start !== _ ? [] : [[o.start, { end: o.end, digest: a }]];
  })), r.digestedBytes = r.length;
  return { carriedDigestCount: s, keys: t.map((o, c) => {
    let a = i[c], d = o.dictionaryStart < o.start ? i[c - 1] : "none";
    return a === void 0 || d === void 0 ? void 0 : `${n}:${d}:${a}`;
  }) };
}
function se(e, t) {
  return (0, import_util.promisify)(import_zlib.deflateRaw)(e, t);
}
function ie(e, t) {
  return (0, import_util.promisify)(import_zlib.inflateRaw)(e, t);
}
function T(e, t, n) {
  return { level: n, finishFlush: import_zlib.constants.Z_SYNC_FLUSH, chunkSize: t.end - t.start + V, ...t.dictionaryStart < t.start && { dictionary: e.subarray(t.dictionaryStart, t.start) } };
}
function O(e) {
  let t = H1i(e);
  return t === void 0 ? e : new Vln(t, { cause: e });
}
var ae = 65535;
function A(e, t, n) {
  if (!n.equals(e)) throw new Vln("inflates_to_other_bytes");
  if (t.length < 4 || t.readUInt32BE(t.length - 4) !== ae) throw new Vln("no_flush_marker");
}
function P(e, t, n) {
  let r = t === void 0 ? void 0 : e.blocks.get(t);
  if (t === void 0 || r === void 0) return;
  return e.blocks.delete(t), e.blocks.set(t, { compressed: r.compressed, lastUsedAt: n }), r.compressed;
}
function de(e, t, n, r) {
  let s = { compressed: n, lastUsedAt: r };
  e.blocks.set(t, s), e.storedBytes += z(s);
}
function ce(e, t) {
  for (let [n, r] of e.blocks) {
    let s = e.storedBytes > e.maxStoredBytes;
    if (!s && t - r.lastUsedAt < x) return;
    if (e.blocks.delete(n), e.storedBytes -= z(r), s) e.evictedForSpaceCount++;
  }
}
function Iys(e, t) {
  let n = new WeakRef(e);
  e.cancelIdleDrop?.(), e.cancelIdleDrop = t.setTimeout(() => {
    let r = n.deref();
    if (r !== void 0) Gln(r);
  }, x, { unref: true });
}
function z(e) {
  return ee + e.compressed.length;
}
function D() {
  return /* @__PURE__ */ new WeakMap();
}
function x_l(e, t, n) {
  let r = e.get(t);
  if (r?.fired) return { kind: "already_fired" };
  let s = n?.input_tokens ?? 0, i = n?.cache_read_input_tokens ?? 0, o = n?.cache_creation_input_tokens ?? 0, c = (n?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (n?.cache_creation?.ephemeral_1h_input_tokens ?? 0), a = o > 0 ? o : c;
  if (s + i + a <= 0) return { kind: "no_usage" };
  if (s < 2e4 || a >= 0.1 * s) {
    let l = r ?? { consecutive: 0, fired: false, okEmitted: false };
    if (!r) e.set(t, l);
    if (l.consecutive = 0, !l.okEmitted && i + a > 0) return l.okEmitted = true, { kind: "confirm" };
    return { kind: "healthy" };
  }
  let d = r ?? { consecutive: 0, fired: false, okEmitted: false };
  if (!r) e.set(t, d);
  if (d.consecutive++, d.consecutive >= 3) return d.fired = true, { kind: "fire", consecutive: d.consecutive, inputTokens: s, cacheReadTokens: i, cacheCreationTokens: a };
  return { kind: "counted", consecutive: d.consecutive };
}
var qWt = "root";
function c4(e) {
  return e ?? "root";
}
var E = 256;
class G {
  promptCacheBreak = { previousStateBySource: /* @__PURE__ */ new Map(), hydrationAttempted: false, resets: 0, pendingPersist: Promise.resolve(), latestQueuedPersist: null, hashSalt: null, summaryForks: /* @__PURE__ */ new Map(), parkedAgentBaselines: /* @__PURE__ */ new Map(), parkedBy: null, classifierLines: /* @__PURE__ */ new Map(), classifierCompactions: /* @__PURE__ */ new Map() };
  threadDecisionTracker = void 0;
  threadInheritedFields = { storedToolsHashByThread: /* @__PURE__ */ new Map(), breakerTripped: false };
  threadDropRecreate = /* @__PURE__ */ new Map();
  threadRequestEnds = /* @__PURE__ */ new Map();
  threadCarry = void 0;
  threadRoutingHints = { byReplyId: new import_chunk_1frjyv5h.Uf({ max: 1024 }), restsUntil: 0, countedRefusal: void 0 };
  dumpPrompts = { recentRequests: [], stateByAgent: /* @__PURE__ */ new Map(), retiredInitHashes: new import_chunk_1frjyv5h.Uf({ max: 1e3 }), appendQueue: (0, import_chunk_gjzwg6ck.GS)() };
  requestReplay = { chains: /* @__PURE__ */ new Map(), chainClears: 0, hashMemos: /* @__PURE__ */ new WeakMap(), unrecordableShapes: /* @__PURE__ */ new Set() };
  lastIngressUuidBySession = /* @__PURE__ */ new Map();
  requestPrepareByClientRequestId = new import_chunk_1frjyv5h.Uf({ max: E });
  cacheCoverage = D();
  afterSendByClientRequestId = /* @__PURE__ */ new Map();
  onMainRequestSent = void 0;
  ccrTicketSource = void 0;
  ccsSenderAddr = { asking: /* @__PURE__ */ new Map(), tooSoon: /* @__PURE__ */ new Map(), held: /* @__PURE__ */ new Map(), carriedOn: void 0, askedAtMessage: /* @__PURE__ */ new Map(), mainLoopSender: void 0, waits: { firstMs: void 0, unsignedCalls: 0, asks: 0, aheadAsks: 0, asksBeforeTurn: 0, repeatAsks: 0, repeatNones: 0, repeatTimeouts: 0, repeatWaitMs: 0 }, turnStartedAt: 0 };
  cacheWarm = { inFlight: void 0, report: void 0, met: void 0 };
  requestToUploadAheadOf = void 0;
  typingSpell = void 0;
  heldUpload = { held: void 0, watched: void 0, hasEndedEarly: false, restsUntil: 0, missesInARow: 0, switchedOff: false };
  gzipRequestBody = { latchedOff: false, rejectedThisProcess: false, persistedLatchChecked: false, persistedLatchInEffect: false, telemetryByClientRequestId: new import_chunk_1frjyv5h.Uf({ max: E }), dispatchAtByClientRequestId: new import_chunk_1frjyv5h.Uf({ max: E }), ccrWorkerSkipReasonsLogged: /* @__PURE__ */ new Set(), blockStore: v(), selfChecks: { started: 0, passed: 0, failed: 0 }, blocksSwitchedOff: false, bodyBytesSwitchedOff: false, nextBodyFromRuntimeIsCompared: false, reusingBodiesChecked: 0, firstReusingBodiesDraw: void 0, serialisedBodies: /* @__PURE__ */ new WeakMap(), blocksBuildGeneration: void 0, blockGzippedResponses: /* @__PURE__ */ new WeakMap() };
  sentPrefix = { ledger: void 0, mode: void 0, persist: Promise.resolve(), persisted: void 0, pendingSeed: void 0, lastReport: /* @__PURE__ */ new WeakMap(), lastVerdict: /* @__PURE__ */ new WeakMap(), renderEpochs: /* @__PURE__ */ new WeakMap(), memoryEpochs: /* @__PURE__ */ new WeakMap(), toolResultCutEpochs: /* @__PURE__ */ new WeakMap(), timeZoneEpochs: /* @__PURE__ */ new WeakMap(), announced: /* @__PURE__ */ new WeakMap(), excuse: /* @__PURE__ */ new WeakMap(), staged: /* @__PURE__ */ new WeakMap(), boundVerdict: /* @__PURE__ */ new WeakMap() };
  bindingDrops = { seenBlocks: void 0, threadsRead: new import_chunk_1frjyv5h.Uf({ max: 512 }) };
  foreignThinkingKeep = void 0;
  streamFirstByteArmedRequestIds = new import_chunk_1frjyv5h.Uf({ max: 64 });
  skillHealthMap = void 0;
  headerMemberDropsNoted = /* @__PURE__ */ new Set();
  firedOnceKeys = /* @__PURE__ */ new Set();
  hasFired(e) {
    return this.firedOnceKeys.has(e);
  }
  markFired(e) {
    this.firedOnceKeys.add(e);
  }
  once(e) {
    if (this.firedOnceKeys.has(e)) return false;
    return this.firedOnceKeys.add(e), true;
  }
  resetStreamNoEventsWarningLatch() {
    this.firedOnceKeys.delete("stream_no_events_fallback_warning");
  }
}
var le = new import_chunk_pzzqg6s3.ze(() => new G());
function eo() {
  return le.of((0, import_chunk_f9x2f6cx.N)());
}
var Kln = /* @__PURE__ */ new Set(["clear", "resume", "spare_claim", "remote_attach"]);
function P_l() {
  return (0, import_chunk_f9x2f6cx.Bp)((e, t) => {
    if (t === "cd" || t === "hydrate") return;
    let n = eo();
    if (n.resetStreamNoEventsWarningLatch(), Kln.has(t)) {
      if (n.threadDropRecreate.delete(qWt), n.threadRequestEnds.delete(qWt), n.threadCarry !== void 0) n.threadCarry.recorded = void 0, n.threadCarry.held = void 0;
      let r = n.gzipRequestBody;
      if (Gln(r.blockStore), r.reusingBodiesChecked = 0, r.firstReusingBodiesDraw = void 0, r.blocksSwitchedOff === "until_next_conversation") r.blocksSwitchedOff = false;
    }
  });
}
