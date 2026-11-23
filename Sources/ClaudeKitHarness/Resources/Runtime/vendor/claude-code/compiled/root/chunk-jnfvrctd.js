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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_jnfvrctd_exports = {};
__export(chunk_jnfvrctd_exports, {
  J2l: () => J2l,
  MGo: () => MGo,
  Q2l: () => Q2l,
  Qzr: () => Qzr,
  SYl: () => SYl,
  X2l: () => X2l,
  Y2l: () => Y2l,
  Z2l: () => Z2l,
  _Yl: () => _Yl,
  cCa: () => cCa,
  dCa: () => dCa,
  eGl: () => eGl,
  gYl: () => gYl,
  hYl: () => hYl,
  nGl: () => nGl,
  tGl: () => tGl,
  uCa: () => uCa,
  yYl: () => yYl
});
module.exports = __toCommonJS(chunk_jnfvrctd_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_kmbc34js = require("/$bunfs/root/chunk-kmbc34js.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_4apy9zxp = require("/$bunfs/root/chunk-4apy9zxp.js");
var import_chunk_ybxa8kcj = require("/$bunfs/root/chunk-ybxa8kcj.js");
var import_chunk_1d0hhqv8 = require("/$bunfs/root/chunk-1d0hhqv8.js");
var import_chunk_wsjqx1vt = require("/$bunfs/root/chunk-wsjqx1vt.js");
var import_chunk_37r5t3h3 = require("/$bunfs/root/chunk-37r5t3h3.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_v684xj67 = require("/$bunfs/root/chunk-v684xj67.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_3d2897vr = require("/$bunfs/root/chunk-3d2897vr.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_chunk_qct54h38 = require("/$bunfs/root/chunk-qct54h38.js");
var import_crypto = require("crypto");
var import_child_process = require("child_process");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_crypto2 = require("crypto");
var import_promises2 = require("fs/promises");
var import_crypto3 = require("crypto");
var import_promises3 = require("fs/promises");
var import_net = require("net");
var import_promises4 = require("fs/promises");
var import_fs2 = require("fs");
var import_promises5 = require("fs/promises");
var import_path2 = require("path");
var import_crypto4 = require("crypto");
var import_fs3 = require("fs");
var import_promises6 = require("fs/promises");
var import_path3 = require("path");
var import_crypto5 = require("crypto");
var import_promises7 = require("fs/promises");
var import_os2 = require("os");
var import_path4 = require("path");
var import_os3 = require("os");
var import_path5 = require("path");
var Rn = ["registry.npmjs.org", "jsr.io", "npm.jsr.io", "pypi.org", "files.pythonhosted.org", "index.crates.io", "proxy.golang.org"];
var jo = 65536;
function Ge(e) {
  let n = e.match(import_chunk_3jjr3wje.yI);
  if (!n) return { ok: false, reason: "no certificate block" };
  if (!e.split(import_chunk_3jjr3wje.yI).every((i, c) => c === n.length ? /^[ \t\r\n]*$/.test(i) : c === 0 && i === "" || /^[ \t\r\n]*\n$/.test(i))) return { ok: false, reason: "something other than certificate blocks that each start a line" };
  let o = [];
  for (let i of n) {
    let c = i.replace(/^-----BEGIN CERTIFICATE-----/, "").replace(/-----END CERTIFICATE-----$/, "");
    if (!/^[A-Za-z0-9+/= \t\r\n]*$/.test(c)) return { ok: false, reason: "a certificate block holds more than base64" };
    try {
      o.push(new import_crypto2.X509Certificate(i).raw.toString("base64"));
    } catch {
      return { ok: false, reason: "a certificate block does not parse" };
    }
  }
  return { ok: true, blocks: n, ders: o };
}
function be(e, n) {
  if (e === n) return "same";
  let r = Ge(e), o = Ge(n);
  if (!r.ok || !o.ok || r.ders.length !== o.ders.length) return "different";
  if (r.ders.every((i, c) => i === o.ders[c])) return "same";
  return r.ders.length === 2 && r.ders[0] === o.ders[1] && r.ders[1] === o.ders[0] ? "swapped" : "different";
}
async function ge(e) {
  let n;
  try {
    n = await (0, import_promises2.open)(e, (0, import_chunk_6mfepmbb.Xu)());
    let r = await n.stat();
    if (!r.isFile() || r.size > jo) return { state: "unreadable" };
    let o = Buffer.alloc(r.size + 1), { bytesRead: i } = await n.read(o, 0, o.length, 0);
    if (i !== r.size) return { state: "failed" };
    return { state: "read", text: new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(o.subarray(0, i)) };
  } catch (r) {
    if ((0, import_chunk_jv7av99m.J)(r)) return { state: "missing" };
    return { state: (0, import_chunk_jv7av99m.fn)(r) || r instanceof TypeError ? "unreadable" : "failed" };
  } finally {
    await n?.close().catch(() => {
    });
  }
}
async function He(e, n) {
  let r = await ge(e);
  return r.state === "read" ? be(r.text, n) : "different";
}
var St = "<non-linux>", Xo = "<pending>", xt = "<lookup-failed>", Jo = "<proc-net-unreadable>", Ko = "<inode-not-found>", Vo = "<pid-not-found>", Qo = "<comm-unreadable>", Zo = { procReadsPerPass: 8192, freePassMs: 10, burstMs: 50, restFactor: 4, maxRestMs: 1e3 };
function $n(e = {}, n = import_chunk_5appeerh.Gi) {
  return Mn(ri, xt, e, n);
}
function Ln(e = {}, n = import_chunk_5appeerh.Gi) {
  return Mn(ni, false, e, n);
}
function Mn(e, n, r, o) {
  return { limits: { ...Zo, ...r }, clock: o, pass: e, failed: n, recentPids: [], waiting: [], passing: false, resting: false, stopped: new AbortController(), owedMs: 0, paidAt: 0 };
}
async function Gn(e, n, r, o, i) {
  return St;
}
async function Hn(e, n, r, o) {
  return false;
}
function Pt(e) {
  e.stopped.abort();
  for (let n of e.waiting.splice(0)) n.answer(e.failed);
}
function ei(e) {
  return e.replace(/[^\x20-\x7e]|</g, "").slice(0, 64);
}
function Fn(e, n, r, o, i) {
  if (!e || !n) return o.failed;
  let c = `${kn(e, n)} ${kn("127.0.0.1", r)}`, { promise: y, resolve: h } = Promise.withResolvers();
  if (o.waiting.push({ row: c, answer: h, onRest: i }), !o.passing) o.passing = true, ti(o).catch(() => {
  });
  return y;
}
async function ti(e) {
  let { clock: n, limits: r } = e;
  try {
    await (0, import_chunk_ayyyz8kh.Kd)();
    while (e.waiting.length > 0) {
      let o = e.waiting.splice(0), i = n.monotonicNow();
      await e.pass(o, e).catch(() => {
      });
      for (let h of o) h.answer(e.failed);
      let c = n.monotonicNow();
      e.owedMs = Math.min(Math.max(0, e.owedMs - (c - e.paidAt) / r.restFactor) + Math.max(0, c - i - r.freePassMs), r.burstMs + r.maxRestMs / r.restFactor), e.paidAt = c;
      let y = (e.owedMs - r.burstMs) * r.restFactor;
      if (y > 0) {
        e.resting = true;
        for (let h of e.waiting) h.onRest?.();
        await (0, import_chunk_5appeerh.K)(y, e.stopped.signal, { unref: true, clock: n }), e.resting = false;
      }
    }
  } finally {
    e.passing = false;
  }
}
async function ni(e) {
  let n = await Un(e), r = /* @__PURE__ */ new Map();
  if (n !== void 0 && n.size > 0) {
    let o = Array.from(n.values(), (i) => `socket:[${i}]`);
    await Wn(["self"], 1 / 0, new Set(o), r);
  }
  for (let o of e) {
    let i = n?.get(o.row);
    o.answer(i !== void 0 && r.has(`socket:[${i}]`));
  }
}
async function ri(e, n) {
  let r = await Un(e), o = /* @__PURE__ */ new Map();
  for (let c of e) {
    let y = r?.get(c.row);
    if (y === void 0) {
      c.answer(r ? Ko : Jo);
      continue;
    }
    let h = `socket:[${y}]`, g = o.get(h);
    if (g) g.push(c);
    else o.set(h, [c]);
  }
  let i = await ai(o, n);
  for (let c of Array.from(o.values()).flat()) c.answer(i ? Vo : Xo);
}
var oi = "0000000000000000FFFF0000";
async function Un(e) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (let { row: c } of e) n.add(c), r.add(c.slice(c.indexOf(" ") + 1));
  let o = /* @__PURE__ */ new Map(), i = false;
  for (let [c, y] of [["/proc/net/tcp", ""], ["/proc/net/tcp6", oi]]) {
    if (n.size === 0) break;
    let h = await (0, import_promises4.readFile)(c, "utf8").catch(() => {
      return;
    });
    if (h === void 0) continue;
    i = true;
    for (let g of r) {
      let p = ` ${y}${g} `;
      for (let b = h.indexOf(p); b !== -1; b = h.indexOf(p, b + 1)) {
        let T = h.slice(b - g.length - y.length, b), C = `${T.slice(y.length)} ${g}`;
        if (!T.startsWith(y) || !n.has(C)) continue;
        let v = h.slice(b + p.length, b + p.length + 120).split(/\s+/, 7)[6];
        if (v !== void 0 && v !== "0") o.set(C, v), n.delete(C);
      }
    }
  }
  return i ? o : void 0;
}
function kn(e, n) {
  return `${e.split(".").reverse().map((o) => Bn(Number(o), 2)).join("")}:${Bn(n, 4)}`;
}
function Bn(e, n) {
  return e.toString(16).toUpperCase().padStart(n, "0");
}
var ii = 8, On = 4, In = 32;
async function ai(e, n) {
  if (e.size === 0) return true;
  let r = new Set(await (0, import_promises4.readdir)("/proc").catch(() => [])), o = n.recentPids.filter((g) => r.has(g)), i = Array.from(r).filter((g) => /^\d+$/.test(g) && !o.includes(g)).sort((g, p) => Number(p) - Number(g)), c = [i.slice(0, On), ...o.map((g) => [g])];
  for (let g = On; g < i.length; g += In) c.push(i.slice(g, g + In));
  let y = n.limits.procReadsPerPass, h = [];
  for (let g of c) {
    if (e.size === 0 || y <= 0) break;
    let p = /* @__PURE__ */ new Map();
    y -= await Wn(g, y, e, p);
    let b = /* @__PURE__ */ new Map();
    await Promise.all((0, import_chunk_4smdap7r.M)(p.values()).map(async (T) => {
      let C = await (0, import_promises4.readFile)(`/proc/${T}/comm`, "utf8").catch(() => "");
      b.set(T, ei(C) || Qo);
    }));
    for (let [T, C] of p) {
      for (let v of e.get(T)) v.answer(b.get(C));
      e.delete(T);
    }
    h.push(...p.values());
  }
  return n.recentPids = (0, import_chunk_4smdap7r.M)([...h.reverse(), ...o]).slice(0, ii), y > 0;
}
async function Wn(e, n, r, o) {
  let i = await Promise.all(e.map((h) => (0, import_promises4.readdir)(`/proc/${h}/fd`).catch(() => []))), c = [];
  for (let h = 0; h < e.length; h++) {
    let g = Math.max(0, n - e.length - c.length);
    for (let p of i[h].slice(0, g)) c.push({ pid: e[h], fd: p });
  }
  let y = await Promise.all(c.map((h) => (0, import_promises4.readlink)(`/proc/${h.pid}/fd/${h.fd}`).catch(() => "")));
  for (let [h, g] of y.entries()) if (r.has(g) && !o.has(g)) o.set(g, c[h].pid);
  return e.length + c.length;
}
var Yn = { maxBusyTunnels: 1 / 0, tunnelIdleAfterMs: 5e3, clientGoneIdleAfterMs: 1e3, tunnelStalledMaxMs: 66e4, idleTunnelFactor: 4, ownBusyTunnels: 16, tunnelWaitTimeoutMs: 6e4, waitingClientBufferBytes: 16384, abandonedNoteAfterMs: 1e3, tunnelQueueMax: 4096, tunnelGateTickMs: 100, dialRefusedBackoffBaseMs: 250, dialRefusedBackoffMaxMs: 5e3, dialRefusedMemoryMs: 3e4, openTunnelsReportAt: 64, openTunnelsReportIntervalMs: 6e4 };
function Xn(e, n, r) {
  return { admit: e, refuse: n, isStalled: r, state: "new", own: false, askedAt: 0, turn: 0, opened: false, counted: false, clientGone: false, lastByteAt: 0, waitingSince: 0, hasWaited: false };
}
function qn(e, n) {
  return { max_busy_tunnels: Number.isFinite(e) ? e : 0, open_peak: n, busy_peak: 0, waited: 0, waiting_peak: 0, max_wait_ms: 0, total_wait_ms: 0, wait_timeouts: 0, left_while_waiting: 0, queue_overflows: 0, upgrades_refused_429: 0, upgrades_refused_503: 0, idle_uncounted: 0, took_kept_place: 0 };
}
var si = ["busy_peak", "waited", "waiting_peak", "idle_uncounted", "took_kept_place", "wait_timeouts", "left_while_waiting", "queue_overflows"];
function Jn(e, n) {
  let r = { generation: n, limit: e.max_busy_tunnels }, o = [{ ...r, reason: (0, import_chunk_78g0060s.S)("open_peak"), count: e.open_peak, wait_ms: e.max_wait_ms, total_wait_ms: e.total_wait_ms }];
  for (let i of si) if (e[i] > 0) o.push({ ...r, reason: (0, import_chunk_78g0060s.f)(i), count: e[i] });
  for (let i of [429, 503]) {
    let c = e[`upgrades_refused_${i}`];
    if (c > 0) o.push({ ...r, reason: (0, import_chunk_78g0060s.S)("upgrades_refused"), count: c, http_status: i });
  }
  return o;
}
function Kn(e, n) {
  return Math.max(e + 1, Math.floor(n / 1e3));
}
class At {
  limits;
  pooled;
  sendReport;
  now;
  enabled;
  holders = /* @__PURE__ */ new Set();
  opened = 0;
  shared;
  kept;
  queue = [];
  turns = 0;
  ceiling = 1 / 0;
  probeAt = 0;
  probing = false;
  probeStep = 1;
  refusedAt = 0;
  refusedStatus = 429;
  failedTrials = 0;
  pumping = false;
  stopped = false;
  ticker;
  reportTimer;
  window;
  openPeak = 0;
  busySampledAt = -1 / 0;
  busySampledOpen = 0;
  constructor(e, n, r, o = () => performance.now()) {
    this.limits = e;
    this.pooled = n;
    this.sendReport = r;
    this.now = o;
    this.enabled = Number.isFinite(e.maxBusyTunnels), this.window = qn(e.maxBusyTunnels, 0), this.shared = { maxBusy: e.maxBusyTunnels, held: 0, counted: 0 }, this.kept = { maxBusy: e.ownBusyTunnels, held: 0, counted: 0 };
  }
  foundOwn(e) {
    e.own = true, this.pump();
  }
  request(e) {
    if (e.askedAt = this.now(), e.turn = this.turns++, !this.enabled) {
      this.admit(e, this.shared);
      return;
    }
    if (this.queue.length >= this.limits.tunnelQueueMax) {
      e.state = "done", this.window.queue_overflows++, this.startReport(), e.refuse({ why: "queue_full", refusedStatus: this.refusing() });
      return;
    }
    if (e.state = "waiting", e.waitingSince = e.askedAt, this.queue.push(e), this.pump(), e.state === "waiting") this.noteWaiting(e);
  }
  release(e) {
    if (e?.state === "waiting") return e.state = "done", this.queue.splice(this.queue.indexOf(e), 1), this.window.left_while_waiting++, this.stopTickerIfIdle(), { waitedMs: this.noteWaitOver(e), refusedStatus: this.refusing() };
    if (e?.state !== "holding") return;
    this.drop(e), e.state = "done", this.pump();
    return;
  }
  clientLeft(e) {
    if (e?.state === "holding") e.clientGone = true, e.lastByteAt = this.now();
  }
  dialing(e) {
    if (e?.opened) e.opened = false, this.opened--, this.touch(e);
  }
  tookPooled(e) {
    if (e?.state === "holding" && !e.opened) e.opened = true, this.opened++;
  }
  dialOpened(e) {
    if (e?.state !== "holding" || e.opened) return;
    if (e.opened = true, this.opened++, e.lastByteAt = this.now(), this.probing) {
      if (this.failedTrials = 0, this.refusedStatus === 503) this.probeStep++;
      this.ceiling = this.opened + this.pooled() + this.probeStep;
    }
    this.pump();
  }
  noteUpgradeRefused(e) {
    if (e === 429) this.window.upgrades_refused_429++;
    else this.window.upgrades_refused_503++;
    this.startReport();
  }
  dialRefused(e, n) {
    if (e.state !== "holding") return;
    let r = this.now();
    if (this.drop(e), this.ceiling = n === 429 ? this.opened + this.pooled() : 0, this.probing = false, this.refusedAt = r, this.refusedStatus = n, r >= this.probeAt) {
      let i = Math.min(this.limits.dialRefusedBackoffBaseMs * 2 ** this.failedTrials, this.limits.dialRefusedBackoffMaxMs);
      this.failedTrials++, this.probeAt = r + i * (0.5 + Math.random() / 2);
    }
    e.state = "waiting", e.waitingSince = r;
    let o = 0;
    while (o < this.queue.length && this.queue[o].turn < e.turn) o++;
    this.queue.splice(o, 0, e), this.noteWaiting(e);
  }
  touch(e) {
    if (e?.state !== "holding") return;
    if (e.lastByteAt = this.now(), !e.counted && e.places) e.counted = true, e.places.counted++;
  }
  tick() {
    let e = this.now();
    while (this.queue.length > 0 && e - this.queue[0].askedAt >= this.limits.tunnelWaitTimeoutMs) {
      let n = this.queue.shift();
      n.state = "done", this.window.wait_timeouts++;
      let r = this.noteWaitOver(n), o = this.refusing();
      n.refuse(o ? { why: "dial_refused", status: o, waitedMs: r } : { why: "wait_timeout", waitedMs: r });
    }
    if (this.queue.length > 0 && this.holders.size >= this.ceiling && e >= this.probeAt && this.holders.size === this.opened) this.ceiling = this.holders.size + 1, this.probing = true, this.probeStep = 1;
    this.pump();
  }
  stop() {
    if (this.stopped) return;
    this.stopped = true, clearInterval(this.ticker), this.ticker = void 0, this.flushReport();
  }
  snapshot() {
    let { maxBusyTunnels: e, idleTunnelFactor: n } = this.limits;
    return { maxBusyTunnels: this.enabled ? e : null, maxOpenTunnels: this.enabled ? e * n : null, busyTunnels: this.enabled ? this.shared.counted : null, busyTunnelsKeptForClaudeCode: this.enabled ? this.kept.counted : null, openTunnels: this.open(), openTunnelsPeak: this.openPeak, connectsWaitingForTunnel: this.queue.length };
  }
  flushReport() {
    clearTimeout(this.reportTimer), this.reportTimer = void 0;
    let e = this.window;
    if (this.window = qn(this.limits.maxBusyTunnels, this.open()), this.window.waiting_peak = this.queue.length, this.isWorthReporting(e)) this.sendReport(e);
    if (this.isWorthReporting(this.window)) this.startReport();
  }
  open() {
    return this.holders.size + this.pooled();
  }
  admit(e, n) {
    e.state = "holding", e.places = n, e.counted = true, e.lastByteAt = this.now(), this.holders.add(e), n.held++, n.counted++, e.admit();
    let r = this.open();
    if (r > this.openPeak) this.openPeak = r;
    if (r > this.window.open_peak) {
      if (this.window.open_peak = r, r >= this.limits.openTunnelsReportAt) this.startReport();
    }
    let o = e.lastByteAt;
    if (r >= this.limits.openTunnelsReportAt && (o - this.busySampledAt >= 1e3 || r * 4 >= this.busySampledOpen * 5)) {
      this.busySampledAt = o, this.busySampledOpen = r;
      let i = 0;
      for (let c of this.holders) if (!this.isIdle(c, o)) i++;
      if (i > this.window.busy_peak) this.window.busy_peak = i;
    }
  }
  isIdle(e, n) {
    let r = n - e.lastByteAt;
    if (e.clientGone) return r >= this.limits.clientGoneIdleAfterMs;
    return e.opened && r >= this.limits.tunnelIdleAfterMs && (r >= this.limits.tunnelStalledMaxMs || !e.isStalled());
  }
  refusing() {
    return this.holders.size >= this.ceiling ? this.refusedStatus : void 0;
  }
  drop(e) {
    if (this.holders.delete(e), e.places) e.places.held--, e.places.counted -= e.counted ? 1 : 0;
    if (e.places = void 0, e.counted = false, e.opened) e.opened = false, this.opened--;
  }
  findRoom(e) {
    let n = this.now();
    if (n - this.refusedAt > this.limits.dialRefusedMemoryMs) this.ceiling = 1 / 0, this.probing = false, this.failedTrials = 0;
    if (this.pooled() === 0 && (this.holders.size >= this.ceiling || e.held >= e.maxBusy * this.limits.idleTunnelFactor)) return false;
    if (e.counted < e.maxBusy) return true;
    for (let r of this.holders) if (r.places === e && r.counted && this.isIdle(r, n)) r.counted = false, e.counted--, this.window.idle_uncounted++;
    return e.counted < e.maxBusy;
  }
  pump() {
    if (this.pumping || this.stopped) return;
    this.pumping = true;
    try {
      for (; ; ) {
        let e = this.queue.findIndex((r) => r.own);
        if (e === -1 || !this.findRoom(this.kept)) break;
        let n = this.queue.splice(e, 1)[0];
        this.noteWaitOver(n), this.window.took_kept_place++, this.admit(n, this.kept);
      }
      while (this.queue.length > 0 && this.findRoom(this.shared)) {
        let e = this.queue.shift();
        this.noteWaitOver(e), this.admit(e, this.shared);
      }
    } finally {
      this.pumping = false;
    }
    this.stopTickerIfIdle();
  }
  noteWaiting(e) {
    if (!e.hasWaited) e.hasWaited = true, this.window.waited++;
    if (this.queue.length > this.window.waiting_peak) this.window.waiting_peak = this.queue.length;
    if (this.startReport(), !this.stopped) this.ticker ??= setInterval(li, this.limits.tunnelGateTickMs, this);
  }
  noteWaitOver(e) {
    let n = this.now();
    this.window.total_wait_ms += Math.round(n - e.waitingSince);
    let r = Math.round(n - e.askedAt);
    if (r > this.window.max_wait_ms) this.window.max_wait_ms = r;
    return r;
  }
  stopTickerIfIdle() {
    if (this.queue.length === 0) clearInterval(this.ticker), this.ticker = void 0;
  }
  isWorthReporting(e) {
    return e.open_peak >= this.limits.openTunnelsReportAt || e.waiting_peak > 0 || e.queue_overflows > 0 || e.left_while_waiting > 0 || e.upgrades_refused_429 > 0 || e.upgrades_refused_503 > 0;
  }
  startReport() {
    if (!this.stopped) this.reportTimer ??= setTimeout(di, this.limits.openTunnelsReportIntervalMs, this);
  }
}
function li(e) {
  e.tick();
}
function di(e) {
  e.flushReport();
}
var Vn = 524288, fi = 3e4, tr = 0, pi = 1, gi = 2, hi = 3, zn = 4, Et = 2, mi = { openTimeoutMs: 1e4, openMaxAttempts: 3, openBackoffBaseMs: 100, sendHighWater: 4194304, sendLowWater: 1048576, drainPollMs: 50, sendPauseAfterPendingBytes: 0, pendingBytesCap: 33554432, sendStallTimeoutMs: 18e4, receiveHighWater: 4194304, receiveLowWater: 1048576, downloadQueuedReportBytes: 16777216, uploadQueuedReportBytes: 16777216, poolMax: 4, poolIdleTtlMs: 1e4, poolMaxAgeMs: 27e5, finGraceMs: 1e4, peerLookupWaitMs: 10, finGraceDiscardBytes: 1048576, unprovenCallerMs: 1e4, unprovenCallersMax: 256, maxClientConnections: 8192, requestHeadTimeoutMs: 3e4 };
function $t(e) {
  let n = e.length, r = [], o = n;
  while (o > 127) r.push(o & 127 | 128), o >>>= 7;
  r.push(o);
  let i = new Uint8Array(1 + r.length + n);
  return i[0] = 10, i.set(r, 1), i.set(e, 1 + r.length), i;
}
function Rt(e, n = 0) {
  let r = [16, e];
  if (n !== 0) r.push(24, n);
  return new Uint8Array(r);
}
function yi(e) {
  let n = { data: e.subarray(0, 0), control: tr, version: 0 };
  return (0, import_chunk_bzyb60p0.XUe)(e, { onVarint(o, i) {
    if (o === 2) n.control = i;
    else if (o === 3) n.version = i;
  }, onBytes(o, i) {
    if (o === 1) n.data = i;
  } }) ? n : null;
}
function Se(e) {
  let n = (0, import_chunk_ha393e1n.RNn)(e);
  if (n.startsWith("*.")) return "*." + Se(n.slice(2));
  let r = n.replace(/\.+$/, "").toLowerCase(), o = (0, import_chunk_ha393e1n.xNn)(r).replace(/\.+$/, "");
  return o !== "" ? o : r;
}
function _i(e) {
  let n = (0, import_chunk_dvkg7v5x.REe)(e);
  return n === "private" || n === "carrier_nat";
}
var wi = "this proxy carries only a fixed list of hosts and ports for this session; the one requested is not on it, and nothing was sent.";
function bi(e, n) {
  let r = Se(n);
  if (e.carriesOnly !== void 0 && !e.carriesOnly.hosts.includes(r)) return "refuse";
  if (or.test(r) || (0, import_net.isIP)(r) === 4 && !_i(r) || Lt(e.selective, r)) return "tunnel";
  return "direct";
}
function Lt(e, n) {
  return e === void 0 || Ti(n, e.includeHosts);
}
function Ti(e, n) {
  let r = Se(e);
  for (let o of n) {
    let i = Se(o);
    if (i === "") continue;
    if (i === "*") return true;
    if (i.startsWith("*.")) {
      let y = i.slice(1);
      if (r.endsWith(y)) return true;
      continue;
    }
    if (!i.includes("*")) {
      if (r === i) return true;
      continue;
    }
    if (new RegExp("^" + i.split("*").map((y) => y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("[^.]+") + "$").test(r)) return true;
  }
  return false;
}
function Si(e) {
  let n = Se(e);
  if (n === "") return "empty_host";
  if (n === "localhost" || n === "ip6-localhost" || n === "ip6-loopback" || n === "metadata.google.internal" || n === "instance-data" || n === "instance-data.ec2.internal" || n.endsWith(".localhost")) return "blocked_hostname";
  let r = n.normalize("NFKC");
  if (r.includes("[") || r.includes(":")) return "ipv6_literal";
  if ((0, import_chunk_dvkg7v5x.qee)(n) === void 0) return (0, import_chunk_ha393e1n.Bal)(n) !== null || (0, import_chunk_ha393e1n.Ual)(n) ? "noncanonical_ipv4" : null;
  return Mt(n);
}
function Ci(e) {
  if (!e) return "peer_unreadable";
  if (e.includes(":")) return xi(e);
  return (0, import_chunk_dvkg7v5x.qee)(e) ? Mt(e) : "peer_unreadable";
}
function Mt(e) {
  let n = (0, import_chunk_dvkg7v5x.REe)(e);
  if (n === "this_network") return "unspecified";
  if (n === "loopback" || n === "link_local") return n;
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}
function xi(e) {
  let n = (0, import_chunk_dvkg7v5x.qee)((0, import_chunk_7cfjrnwy.nt)(e, "%"));
  if (n?.length !== 16) return "peer_unreadable";
  let r = n.slice(0, 12), o = r.every((h, g) => h === (g === 10 || g === 11 ? 255 : 0)), i = r.every((h) => h === 0), c = n[0] === 0 && n[1] === 100 && n[2] === 255 && n[3] === 155 && r.slice(4).every((h) => h === 0);
  if (o || i || c) {
    let h = n.slice(12).join(".");
    return i && h === "0.0.0.1" ? "loopback" : Mt(h);
  }
  if (((n[0] ?? 0) & 224) === 32) return null;
  return (0, import_chunk_dvkg7v5x.REe)((0, import_chunk_7cfjrnwy.nt)(e, "%")) ?? "v6_non_global";
}
function nr(e, n, r) {
  let o = n.directUpstream;
  if (!o) return;
  if (o.writeBuf.length > 0) o.writeBuf.push(r), o.writeBufBytes += r.length;
  else {
    let i = o.write(r);
    if (i < r.length) o.writeBuf.push(r.subarray(i)), o.writeBufBytes += r.length - i;
  }
  if (o.writeBufBytes > n.limits.pendingBytesCap) {
    H(n.ctx, "direct_writebuf_cap", `direct-upstream write buffer exceeded ${n.limits.pendingBytesCap} bytes`, V(n)), n.closed = true;
    try {
      o.end();
    } catch {
    }
    e.end();
  }
}
var rr = "[\\u0000-\\u001f\\u007f-\\u009f]", or = new RegExp(rr, "u"), Bt = new RegExp(rr, "gu");
function q(e, n, r) {
  let o = e.badEventBudgets.get(n);
  if (!o) o = { bucket: (0, import_chunk_1d0hhqv8.Aqe)(import_chunk_1d0hhqv8.Tqe, import_chunk_1d0hhqv8.Cqe), suppressed: 0 }, e.badEventBudgets.set(n, o);
  if (!o.bucket.tryConsume()) return o.suppressed++, false;
  return (0, import_chunk_cqa9hrgx.m)("agent_proxy_request", n, o.suppressed > 0 ? { ...r, suppressed_since_last: o.suppressed } : r), o.suppressed = 0, true;
}
function H(e, n, r, o, i) {
  let c = { ts: (/* @__PURE__ */ new Date()).toISOString(), kind: n, detail: Ot(r).replace(Bt, "?"), host: o === void 0 ? void 0 : Ot(o).replace(Bt, "?"), ...i !== void 0 && { httpStatus: i } };
  if (e.failures.push(c), e.failures.length > import_chunk_bzyb60p0.Tai) e.failures.shift();
  e.onFailure?.(c);
}
function ve(e, n, r, o = "") {
  if (e.callerSecret === void 0) H(e, n, r + o);
  else if (!e.failures.some((i) => i.kind === n)) H(e, n, r);
}
function Ot(e) {
  return e.replace(/\S+/g, (n) => n.slice(n.lastIndexOf("@") + 1));
}
function Fe(e) {
  return e instanceof Error ? e.name : `thrown ${typeof e}`;
}
function V(e) {
  return e.connectAuthority || void 0;
}
function ir(e, n, r, o, i, c) {
  e.write(`HTTP/1.1 ${n} ${r}\r
Content-Type: ${o}\r
Content-Length: ${Buffer.byteLength(i)}\r
` + (c === void 0 ? "" : `Retry-After: ${c}\r
`) + `Connection: close\r
\r
` + i);
}
function Z(e, n, r, o, i) {
  ir(e, n, r, "text/plain; charset=utf-8", `agent-proxy relay: ${o}
`, i);
}
function Qe(e, n) {
  n.closed = true, Z(e, 403, "Forbidden", wi), e.end(), q(n.ctx, "agent_proxy_request_host_not_carried"), H(n.ctx, "host_not_carried", "not a host and port that this proxy carries for this session", V(n));
}
function ar(e, n) {
  if (n.closed) return;
  n.closed = true, Z(e, 403, "Forbidden", "this session may send nothing through this proxy now: its model provider is not Anthropic's own API, its nonessential traffic is disabled, or its settings restrict Claude's GitHub tools. Nothing was sent."), e.end(), q(n.ctx, "agent_proxy_request_session_may_not_send"), H(n.ctx, "session_may_not_send", "another model provider, nonessential traffic disabled, or GitHub tools restricted", V(n)), gr(n.pool), ne(n);
}
function sr(e, n) {
  n.closed = true, Z(e, 400, "Bad Request", "invalid CONNECT port"), e.end(), q(n.ctx, "agent_proxy_request_bad_connect_port"), H(n.ctx, "bad_connect_port", "invalid CONNECT port", V(n));
}
function Pi(e, n, r) {
  return { connectBuf: Buffer.alloc(0), pending: [], pendingBytes: 0, startedAt: Date.now(), uploadBytes: 0, downloadBytes: 0, pendingPeakBytes: 0, uploadPauses: 0, uploadAborted: false, connectRejected: false, wsOpen: false, established: false, closed: false, connectLine: "", connectAuthority: "", directDialInFlight: false, holdsPlace: false, clientGone: false, clientProcess: St, wsAttempt: 0, paused: false, sendStallBuffered: 0, sendStallSince: 0, readPaused: false, limits: e, pool: n, finSeen: false, localClosed: false, discardedBytes: 0, ctx: r };
}
function Ai(e, n, r, o) {
  let i = () => new Promise((c, y) => {
    let h = false, g = _r(e, n), p = setTimeout(() => {
      if (h) return;
      h = true;
      try {
        g.close();
      } catch {
      }
      y(Error("handshake timeout"));
    }, r);
    g.onopen = () => {
      if (h) return;
      h = true, clearTimeout(p);
      try {
        g.close();
      } catch {
      }
      c();
    }, g.onerror = (b) => {
      if (h) return;
      h = true, clearTimeout(p), y(Error(b?.message ?? "WebSocket error"));
    };
  });
  return (async () => {
    let c;
    for (let y = 0; y < o; y++) try {
      await i();
      return;
    } catch (h) {
      if (c = h, y + 1 < o) await (0, import_chunk_5appeerh.K)(Math.min(200 * 2 ** y, 2e3));
    }
    throw c;
  })();
}
var vi = 1048576, Ei = 33554432;
function Ri(e) {
  return new Promise((n, r) => {
    let o = false, i = Buffer.alloc(0), c = Bun.listen({ hostname: "127.0.0.1", port: 0, socket: { data(b, T) {
      if (o) return;
      i = Buffer.concat([i, T]);
      let C = i.indexOf(`\r
\r
`);
      if (C < 0) return;
      let v = /sec-websocket-key: *(\S+)/i.exec(i.subarray(0, C).toString("latin1"))?.[1] ?? "", A = (0, import_crypto3.createHash)("sha1").update(v + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
      if (b.write(`HTTP/1.1 101 Switching Protocols\r
Upgrade: websocket\r
Connection: Upgrade\r
Sec-WebSocket-Accept: ${A}\r
\r
`), o = true, typeof b.pause === "function") b.pause();
    } } }), y = false, h = (b) => {
      if (y) return;
      y = true, clearTimeout(g);
      try {
        p.close();
      } catch {
      }
      if (c.stop(true), b instanceof Error) r(b);
      else n(b);
    }, g = setTimeout((b) => b(Error("handshake timeout")), e, h), p = new globalThis.WebSocket(`ws://127.0.0.1:${c.port}/`);
    p.binaryType = "arraybuffer", p.onerror = () => h(Error("WebSocket error")), p.onclose = () => h(Error("closed before the check completed")), p.onopen = () => {
      let b = new Uint8Array(vi);
      try {
        for (let T = 0; T < Ei; T += b.length) if (p.send(b), p.bufferedAmount > 0) {
          h(true);
          return;
        }
      } catch {
        h(Error("send failed"));
        return;
      }
      h(false);
    };
  });
}
async function lr(e) {
  let n = e.getToken ?? (() => e.token), r = { connectHeader: () => "Basic " + Buffer.from(`${e.sessionId}:${n()}`).toString("base64"), wsHeader: () => `Bearer ${n()}` }, o = { ...mi, ...e.limits };
  if (e.limits?.maxClientConnections === void 0) {
    let p = await (0, import_promises3.readFile)("/proc/self/limits", "utf8").catch(() => ""), b = Number(/^Max open files\s+(\d+)/m.exec(p)?.[1] ?? 1 / 0);
    o.maxClientConnections = Math.min(o.maxClientConnections, Math.floor(b * 3 / 8));
  }
  let i = [], c = 0, y = { statusProvider: e.statusProvider, failures: [], onFailure: e.onFailure, onConnectAnswer: e.onConnectAnswer, callerSecret: e.callerSecret, unprovenCallers: 0, maySend: e.maySend, downloadQueuedBytes: 0, downloadQueuedPeakBytes: 0, uploadPausedClients: 0, uploadPauses: 0, clientConnections: 0, clientConnectionsPeak: 0, clientConnectionsRefused: 0, requestHeadTimeouts: 0, selective: e.selective, carriesOnly: e.carriesOnly && { ...e.carriesOnly, hosts: e.carriesOnly.hosts.map(Se).filter((p) => p !== "") }, upstreamOpened: false, badEventBudgets: /* @__PURE__ */ new Map(), gate: new At({ ...Yn, ...e.tunnelGateLimits }, () => i.length, (p) => {
    c = Kn(c, Date.now());
    for (let b of Jn(p, c)) (0, import_chunk_y53wbr8a.a)("tengu_agent_proxy_open_tunnels", b);
  }) }, h = Bi(e.wsUrl, r, o, y, i);
  function g() {
    (e.maySend?.() === false ? void 0 : Ai(e.wsUrl, r, o.openTimeoutMs, o.openMaxAttempts))?.then(() => {
      (0, import_chunk_w578pjby.t)("[agent-proxy] startup reachability probe: ok");
    }).catch((T) => {
      if (y.upstreamOpened) {
        (0, import_chunk_w578pjby.t)(`[agent-proxy] startup reachability probe failed (${T?.message ?? String(T)}) after a tunnel already opened; ignoring`, { level: "warn" });
        return;
      }
      y.startupError = `hosted agent-proxy unreachable at startup: ${T?.message ?? String(T)}. Tunneled CONNECTs get one dial attempt and return 502 if that fails, until one reaches upstream (which clears this). A dial refused as busy may wait, then return 429 or 503. Inference is force-tunneled, so a session without the hosted proxy is non-functional regardless. Check network egress to the CCR base URL.`.replace(Bt, "?"), (0, import_chunk_w578pjby.t)(`[agent-proxy] ${y.startupError}`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_init", "agent_proxy_startup_probe_failed");
    });
    let b;
    if (y.checkBufferedAmount = () => b ??= Ri(o.openTimeoutMs).then((T) => {
      if (y.bufferedAmountTrusted = T, !T) (0, import_chunk_w578pjby.t)("[agent-proxy] WebSocket.bufferedAmount stays 0 with bytes queued: the upload gate cannot engage on this runtime", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_init", "agent_proxy_buffered_amount_untrusted");
    }).catch((T) => {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] bufferedAmount self-check did not run: ${T?.message ?? String(T)}`, { level: "warn" });
    }), y.upstreamOpened) y.checkBufferedAmount();
  }
  return (0, import_chunk_w578pjby.t)(`[agent-proxy] relay listening on 127.0.0.1:${h.port}`), { ...h, runStartupChecks: g };
}
function dr(e, n) {
  let r = e.old;
  e.old = e.young, e.young = /* @__PURE__ */ new Set(), e.timer = e.old.size > 0 ? setTimeout(dr, n, e, n) : void 0;
  let o = Math.round(n / 1e3);
  for (let i of r) {
    let c = i.data;
    if (c.closed = true, c.ctx.requestHeadTimeouts++, q(c.ctx, "agent_proxy_request_head_timeout")) (0, import_chunk_w578pjby.t)(`[agent-proxy] closed a client connection that sent no complete request within ${o} s`, { level: "warn" });
    Z(i, 408, "Request Timeout", `no complete CONNECT request arrived within ${o} s after this connection opened, so the proxy closed it. Open a new connection to retry.`), i.end(), H(c.ctx, "request_head_timeout", `no complete request within ${o} s (${c.connectBuf.length} bytes received)`);
  }
}
function Qn(e) {
  if (e.clientGone = true, e.ctx.downloadQueuedBytes -= e.writeBufBytes, e.writeBufBytes = 0, e.writeBuf = [], tt(e), he(e), e.writeBufPeakBytes > e.limits.receiveHighWater || e.writeBufPeakBytes >= e.limits.downloadQueuedReportBytes) (0, import_chunk_y53wbr8a.a)("tengu_agent_proxy_download_queue", { download_queued_peak_bytes: e.writeBufPeakBytes });
  if (e.writeBufPeakBytes = 0, e.uploadPauses > 0 || e.pendingPeakBytes >= e.limits.uploadQueuedReportBytes) (0, import_chunk_y53wbr8a.a)("tengu_agent_proxy_upload_queue", { upload_queued_peak_bytes: e.pendingPeakBytes, upload_pauses: e.uploadPauses, upload_aborted: e.uploadAborted });
  e.pendingPeakBytes = 0, e.uploadPauses = 0;
}
function ki() {
  return "pause" in globalThis.WebSocket.prototype;
}
function Bi(e, n, r, o, i) {
  let c = $n(), y = Ln(), h = { young: /* @__PURE__ */ new Set(), old: /* @__PURE__ */ new Set() }, g = Bun.listen({ hostname: "127.0.0.1", port: 0, socket: { open(p) {
    if ((0, import_chunk_bzyb60p0.Ptn)("relay_connections"), p.data = { ...Pi(r, i, o), writeBuf: [], writeBufBytes: 0, writeBufPeakBytes: 0, endAfterDrain: false, destroyAfterDrain: false, awaitingHead: true }, o.clientConnections >= r.maxClientConnections) {
      p.data.closed = true, o.clientConnectionsRefused++;
      let b = `this proxy already has ${o.clientConnections} connections open, the most it allows, so it refused this one. Run fewer downloads or requests at once, or stop a program that leaves connections open, then retry.`;
      if (q(o, "agent_proxy_request_too_many_connections", { ...!(0, import_chunk_f9x2f6cx.Pd)() && !(0, import_chunk_f9x2f6cx.Y)() && { limit: r.maxClientConnections } })) (0, import_chunk_w578pjby.t)(`[agent-proxy] refused a client connection: ${o.clientConnections} already open, the most allowed (maxClientConnections)`, { level: "warn" });
      Z(p, 429, "Too Many Requests", b, 5), p.end(), H(o, "too_many_connections", b);
      return;
    }
    if (p.data.holdsPlace = true, o.clientConnections++, o.clientConnections > o.clientConnectionsPeak) o.clientConnectionsPeak = o.clientConnections;
    if (r.requestHeadTimeoutMs < 2147483648) h.young.add(p), h.timer ??= setTimeout(dr, r.requestHeadTimeoutMs, h, r.requestHeadTimeoutMs);
    if (typeof p.pause === "function") p.data.clientRead = p;
    if (o.gate.enabled && o.gate.limits.ownBusyTunnels > 0) p.data.isOwnClient = () => Hn(p.remoteAddress, p.remotePort, p.localPort, y);
    if (o.callerSecret !== void 0) {
      if (o.unprovenCallers >= r.unprovenCallersMax) {
        p.data.closed = true, p.terminate(), ve(o, "unproven_callers_full", "too many connected callers had not presented the secret");
        return;
      }
      o.unprovenCallers++, p.data.unproven = { sock: p, peerLookups: c, deadline: setTimeout(Ki, r.unprovenCallerMs, p) };
      return;
    }
    wr(p, c);
  }, data(p, b) {
    let T = p.data;
    if (T.closed) return;
    let C = { write: (v) => {
      let A = typeof v === "string" ? Buffer.from(v, "utf8") : v, P = T.writeBuf.length > 0 ? 0 : p.write(A);
      if (P < 0 || P === A.length) return;
      let R = A.subarray(P);
      if (T.writeBuf.push(R), T.writeBufBytes += R.length, T.ctx.downloadQueuedBytes += R.length, T.writeBufBytes > T.writeBufPeakBytes) T.writeBufPeakBytes = T.writeBufBytes;
      if (T.ctx.downloadQueuedBytes > T.ctx.downloadQueuedPeakBytes) T.ctx.downloadQueuedPeakBytes = T.ctx.downloadQueuedBytes;
      if (T.writeBufBytes > T.limits.receiveHighWater) Mi(T);
    }, queuedBytes: () => T.writeBufBytes, end: () => {
      if (he(T), T.writeBuf.length > 0) {
        T.endAfterDrain = true;
        return;
      }
      p.end();
    }, destroy: () => {
      if (he(T), T.writeBuf.length > 0) {
        T.destroyAfterDrain = true;
        return;
      }
      p.terminate();
    } };
    if (T.client = C, Di(C, T, b, e, n), T.awaitingHead && (T.connectLine !== "" || T.closed)) T.awaitingHead = false, h.young.delete(p), h.old.delete(p);
  }, drain(p) {
    let b = p.data;
    while (b.writeBuf.length > 0) {
      let T = b.writeBuf[0], C = p.write(T);
      if (C < 0) break;
      if (b.writeBufBytes -= C, b.ctx.downloadQueuedBytes -= C, C < T.length) {
        b.writeBuf[0] = T.subarray(C);
        break;
      }
      b.writeBuf.shift();
    }
    if (b.writeBufBytes <= b.limits.receiveLowWater) tt(b);
    if (b.writeBuf.length > 0) return;
    if (b.destroyAfterDrain) {
      b.destroyAfterDrain = false, p.terminate();
      return;
    }
    if (b.endAfterDrain) b.endAfterDrain = false, p.end();
  }, close(p) {
    let b = p.data;
    if (Nt(b), h.young.delete(p), h.old.delete(p), Qn(b), pr(b)) return;
    if (b.localClosed && b.finCloseTimer) return;
    if (!b.closed && br(b)) return;
    ne(b);
  }, error(p, b) {
    let T = p.data;
    if (p.readyState > 0) T.closed = true, p.terminate(), q(T.ctx, "agent_proxy_request_handler_error"), H(T.ctx, "handler_error", Fe(b), V(T));
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] client socket error: ${String(b)}`), Nt(T), Qn(T), T.localClosed && T.finCloseTimer) return;
    ne(T);
  } } });
  return { port: g.port, stop: () => {
    o.gate.stop(), clearTimeout(h.timer), gr(i), Pt(c), Pt(y), g.stop(true);
  } };
}
async function Oi(e, n) {
  let [r] = await Promise.all([(async () => n.ctx.statusProvider?.())().catch((o) => {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] GET /__agentproxy/status: could not read the session's proxy state (${o instanceof Error ? o.message : String(o)}); answered with the relay's own fields only`, { level: "warn" });
    return;
  }), n.ctx.checkBufferedAmount?.()]);
  try {
    ir(e, 200, "OK", "application/json", (0, import_chunk_w578pjby._)(Ii(n, r), null, 2) + `
`), n.clientRead?.resume(), e.end();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] GET /__agentproxy/status: could not send the answer (${o instanceof Error ? o.message : String(o)}); closing the connection`, { level: "warn" }), e.destroy();
  }
}
function Ii(e, n) {
  return { ...n, startupError: e.ctx.startupError, recentRelayFailures: e.ctx.failures, downloadQueuedBytes: e.ctx.downloadQueuedBytes, downloadQueuedPeakBytes: e.ctx.downloadQueuedPeakBytes, downloadReceivePauseSupported: ki(), downloadReceiveGateEnabled: Number.isFinite(e.limits.receiveHighWater), uploadPausedClients: e.ctx.uploadPausedClients, uploadPauses: e.ctx.uploadPauses, uploadPauseSupported: e.clientRead !== void 0, uploadGateEnabled: Number.isFinite(e.limits.sendPauseAfterPendingBytes), maxClientConnections: Number.isFinite(e.limits.maxClientConnections) ? e.limits.maxClientConnections : null, clientConnections: e.ctx.clientConnections, clientConnectionsPeak: e.ctx.clientConnectionsPeak, clientConnectionsRefused: e.ctx.clientConnectionsRefused, requestHeadTimeoutMs: Number.isFinite(e.limits.requestHeadTimeoutMs) ? e.limits.requestHeadTimeoutMs : null, requestHeadTimeouts: e.ctx.requestHeadTimeouts, bufferedAmountTrusted: e.ctx.bufferedAmountTrusted ?? null, ...e.ctx.gate.snapshot() };
}
function Ni(e, n) {
  n.closed = true;
  let r = `agent-proxy relay: this port serves only the session that started it, and this request did not present that session's secret.
`;
  e.write(`HTTP/1.1 407 Proxy Authentication Required\r
Proxy-Authenticate: Basic realm="${import_chunk_v684xj67.Bko}"\r
Content-Type: text/plain; charset=utf-8\r
Content-Length: ${Buffer.byteLength(r)}\r
Connection: close\r
\r
` + r), e.end(), q(n.ctx, "agent_proxy_request_caller_secret_missing"), ve(n.ctx, "caller_secret_missing", "a CONNECT did not present this session's secret");
}
function Di(e, n, r, o, i) {
  if (!n.ws && !n.tunnel && !n.directUpstream && !n.directDialing) {
    if (n.connectBuf = Buffer.concat([n.connectBuf, r]), n.connectBuf[0] === 22) {
      if (q(n.ctx, "agent_proxy_request_tls_to_relay")) (0, import_chunk_w578pjby.t)("[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)", { level: "warn" });
      ve(n.ctx, "tls_to_relay", "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port"), n.closed = true, e.end();
      return;
    }
    let c = n.connectBuf.indexOf(`\r
\r
`);
    if ((c === -1 ? n.connectBuf.length : c) > 8192) {
      n.closed = true, Z(e, 400, "Bad Request", "request headers exceeded 8 KiB before the end of the CONNECT request"), e.end(), q(n.ctx, "agent_proxy_request_header_too_long"), ve(n.ctx, "header_too_long", "headers exceeded 8 KiB");
      return;
    }
    if (c === -1) return;
    let y = n.connectBuf.subarray(0, c).toString("utf8"), h = (0, import_chunk_7cfjrnwy.nt)(y, `\r
`), g = h.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!g) {
      if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(h)) {
        n.closed = true, n.clientRead?.pause(), Oi(e, n);
        return;
      }
      n.closed = true, Z(e, 405, "Method Not Allowed", "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported \u2014 common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay."), e.end(), q(n.ctx, "agent_proxy_request_not_connect");
      let [v = "", A = ""] = h.split(/\s+/), P = v;
      try {
        let R = new URL(A);
        P = `${v} ${R.protocol}//${R.host}`;
      } catch {
      }
      ve(n.ctx, "not_connect", "non-CONNECT request", `: ${Ot(P).slice(0, 120)}`);
      return;
    }
    if (n.ctx.callerSecret !== void 0 && !(0, import_chunk_v684xj67.iEl)(y, n.ctx.callerSecret)) {
      Ni(e, n);
      return;
    }
    let p = Nt(n);
    if (p !== void 0) wr(p.sock, p.peerLookups);
    n.connectLine = h, n.connectAuthority = g[1] ?? "";
    let b = n.connectBuf.subarray(c + 4);
    if (b.length > 0) {
      if (vt(e, n, Buffer.from(b)), n.closed) return;
    }
    n.connectBuf = Buffer.alloc(0);
    let T = { selective: n.ctx.selective, carriesOnly: n.ctx.carriesOnly }, C = n.connectAuthority;
    if (C && (T.carriesOnly || T.selective)) {
      let v = C.lastIndexOf(":"), A = v > 0 ? C.slice(0, v) : C, P = Se(A.replace(/^\[|\]$/g, "")), R = v > 0 ? C.slice(v + 1) : "443", k = Number(R);
      if (T.carriesOnly !== void 0) {
        if (!(/^[0-9]{1,5}$/.test(R) && k >= 1 && k <= 65535)) {
          sr(e, n);
          return;
        }
        if (T.carriesOnly.ports?.includes(k) === false) {
          Qe(e, n);
          return;
        }
      }
      switch (bi(T, P)) {
        case "refuse":
          Qe(e, n);
          return;
        case "direct":
          Ui(e, n, P, k);
          return;
        case "tunnel":
          if (or.test(P)) H(n.ctx, "selective_invalid_host", "control byte in CONNECT host", P);
          if (T.carriesOnly !== void 0) {
            let E = T.carriesOnly.hosts.find((B) => B === P);
            if (E === void 0) {
              Qe(e, n);
              return;
            }
            n.connectLine = `CONNECT ${(0, import_net.isIP)(E) === 6 ? `[${E}]` : E}:${k} HTTP/1.1`;
          }
          break;
      }
    } else if (T.carriesOnly) {
      Qe(e, n);
      return;
    }
    n.tunnel = Xn(() => {
      try {
        Fi(e, n, o, i);
      } catch (v) {
        n.closed = true, e.destroy(), q(n.ctx, "agent_proxy_request_handler_error"), H(n.ctx, "handler_error", Fe(v), V(n)), (0, import_chunk_w578pjby.t)(`[agent-proxy] could not open a tunnel, so closed its client connection: ${Fe(v)}`, { level: "error" }), ne(n);
      }
    }, (v) => Hi(e, n, v), () => n.paused || n.pendingBytes > 0 || e.queuedBytes() > 0 || n.ws?.isPaused === true || (n.ws?.bufferedAmount ?? 0) > 0), n.ctx.gate.request(n.tunnel), fr(n);
    return;
  }
  if (n.directUpstream) {
    nr(e, n, r);
    return;
  }
  if (n.directDialing) {
    vt(e, n, Buffer.from(r));
    return;
  }
  if (!n.wsOpen || n.paused) {
    vt(e, n, Buffer.from(r));
    let c = n.tunnel?.state === "waiting" ? Math.max(n.limits.sendPauseAfterPendingBytes, n.ctx.gate.limits.waitingClientBufferBytes) : n.limits.sendPauseAfterPendingBytes;
    if (!n.closed && n.pendingBytes > c) Li(n);
    return;
  }
  if (n.redialEligible = false, n.ws) Ht(n, n.ws, r), cr(n);
}
function vt(e, n, r) {
  if (n.pending.push(r), n.pendingBytes += r.length, n.pendingBytes > n.pendingPeakBytes) n.pendingPeakBytes = n.pendingBytes;
  if (n.pendingBytes > n.limits.pendingBytesCap) (0, import_chunk_w578pjby.t)(`[agent-proxy] pending buffer cap (${n.limits.pendingBytesCap}) exceeded; aborting request`, { level: "warn" }), ur(e, n, "pending_overflow", n.established ? `upload aborted: more than ${n.limits.pendingBytesCap} request bytes buffered while the tunnel was not draining` : "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)");
}
function ur(e, n, r, o) {
  if (q(n.ctx, `agent_proxy_request_${r}`), H(n.ctx, r, o, V(n)), n.closed = true, n.uploadAborted = true, !n.established) Z(e, 502, "Bad Gateway", o), e.end();
  else {
    n.pending = [], n.pendingBytes = 0;
    let i = br(n);
    if (e.destroy(), i) return;
  }
  ne(n);
}
function cr(e) {
  if (e.paused || !e.ws) return;
  if (e.ws.bufferedAmount > e.limits.sendHighWater) e.paused = true, e.sendStallBuffered = e.ws.bufferedAmount, e.sendStallSince = Date.now(), e.drainTimer = setInterval($i, e.limits.drainPollMs, e);
}
function $i(e) {
  let n = e.ws;
  if (!n || n.readyState !== WebSocket.OPEN || e.closed) {
    Te(e);
    return;
  }
  let r = Date.now();
  if (n.bufferedAmount < e.sendStallBuffered) e.sendStallBuffered = n.bufferedAmount, e.sendStallSince = r;
  else if (e.readPaused && e.client && r - e.sendStallSince > e.limits.sendStallTimeoutMs) {
    Te(e);
    let o = Math.round((r - e.sendStallSince) / 1e3);
    (0, import_chunk_w578pjby.t)(`[agent-proxy] tunnel accepted no request bytes for ${o}s; aborting request`, { level: "warn" }), ur(e.client, e, "upload_stalled", `upload aborted: the tunnel accepted no request bytes for ${o}s`);
    return;
  }
  if (n.bufferedAmount > e.limits.sendLowWater) return;
  while (e.pending.length > 0 && n.bufferedAmount <= e.limits.sendHighWater) {
    let o = e.pending.shift();
    e.pendingBytes -= o.length, e.redialEligible = false, Ht(e, n, o);
  }
  if (e.sendStallBuffered = n.bufferedAmount, e.sendStallSince = r, e.pending.length === 0) e.paused = false, Te(e), he(e);
}
function Te(e) {
  if (e.drainTimer) clearInterval(e.drainTimer), e.drainTimer = void 0;
}
function Li(e) {
  if (e.readPaused || !e.clientRead) return;
  e.readPaused = true, e.uploadPauses++, e.ctx.uploadPausedClients++, e.ctx.uploadPauses++, e.clientRead.pause();
}
function he(e) {
  if (!e.readPaused || !e.clientRead) return;
  e.readPaused = false, e.ctx.uploadPausedClients--, e.clientRead.resume();
}
function Mi(e) {
  let n = e.ws;
  if (!n?.pause || n.readyState !== WebSocket.OPEN || n.isPaused === true) return;
  n.pause();
}
function tt(e) {
  let n = e.ws;
  if (!n?.resume || n.readyState !== WebSocket.OPEN || n.isPaused === false) return;
  n.resume();
}
var et = "Run fewer downloads or requests at once, or close idle connections, then retry.";
function fr(e) {
  let n = e.tunnel;
  if (n?.state !== "waiting" || e.isOwnClient === void 0) return;
  e.isOwnClient().then((r) => {
    if (r) e.ctx.gate.foundOwn(n);
  }).catch((r) => (0, import_chunk_w578pjby.t)(`[agent-proxy] could not give a waiting connection a tunnel kept for Claude Code, so it waits like any other: ${Fe(r)}`, { level: "error" })), e.isOwnClient = void 0;
}
function Hi(e, n, r) {
  if (n.closed) return;
  n.closed = true;
  let { maxBusyTunnels: o, idleTunnelFactor: i, tunnelQueueMax: c } = n.ctx.gate.limits, y = `too many connections are open through this proxy (new ones wait once ${o} are busy or ${o * i} are open)`, h = 429, g, p, b;
  switch (r.why) {
    case "wait_timeout":
      g = "tunnel_wait_timeout", p = `${y}. This connection waited ${Math.round(r.waitedMs / 1e3)} s for a tunnel. ${et}`;
      break;
    case "queue_full":
      g = "tunnel_queue_full", b = r.refusedStatus, h = b ?? 429, p = b ? `the egress proxy recently refused new tunnels with HTTP ${h}, and ${c} connections are already waiting. ${h === 429 ? et : "Retry in a few seconds."}` : `${y}, and ${c} more are already waiting. ${et}`;
      break;
    case "dial_refused":
      b = r.status, h = b, g = "ws_open_refused", p = `this connection waited ${Math.round(r.waitedMs / 1e3)} s for a tunnel, and the egress proxy recently refused new ones with HTTP ${h === 429 ? `429 (too many connections or requests). ${et}` : "503 (busy or unavailable). Retry in a few seconds."}`;
      break;
  }
  if (q(n.ctx, `agent_proxy_request_${g}`)) (0, import_chunk_w578pjby.t)(`[agent-proxy] CONNECT refused: ${g}`, { level: "warn" });
  Z(e, h, h === 429 ? "Too Many Requests" : "Service Unavailable", p, 5), e.end(), H(n.ctx, g, p, V(n), b), ne(n);
}
function Fi(e, n, r, o) {
  if (n.ctx.maySend?.() === false) {
    ar(e, n);
    return;
  }
  let i = Wi(n);
  if (i) {
    n.ws = i.ws, n.wsOpen = true, n.pinger = i.pinger, n.wsMeta = i.meta, n.ctx.gate.tookPooled(n.tunnel);
    let c = n.pending.slice();
    n.redialEligible = true;
    let y = false, h = (g) => {
      if (y || n.closed) return;
      if (y = true, n.redialEligible = false, (0, import_chunk_w578pjby.t)(`[agent-proxy] pooled ws failed before response (${g}); falling through to fresh dial`), n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
      if (n.pooledDeadline = void 0, n.pinger) clearInterval(n.pinger), n.pinger = void 0;
      i.ws.onopen = i.ws.onmessage = i.ws.onerror = i.ws.onclose = null;
      try {
        i.ws.close();
      } catch {
      }
      if (n.ws = void 0, n.wsOpen = false, n.wsMeta = void 0, Te(n), n.paused = false, n.pending = [...c, ...n.pending], n.pendingBytes = n.pending.reduce((p, b) => p + b.length, 0), n.pendingBytes > n.pendingPeakBytes) n.pendingPeakBytes = n.pendingBytes;
      n.uploadBytes = 0, It(e, n, r, o);
    };
    n.pooledDeadline = () => {
      if (n.openTimer = void 0, n.closed || n.established) return;
      if (n.redialEligible) {
        h("pooled ws unresponsive");
        return;
      }
      n.closed = true, q(n.ctx, "agent_proxy_request_ws_error"), Z(e, 502, "Bad Gateway", "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received"), e.end(), H(n.ctx, "ws_error", "pooled tunnel unresponsive before first response", V(n)), ne(n);
    }, n.openTimer = setTimeout(Vi, n.limits.openTimeoutMs, n), hr(e, n, i.ws, h), mr(n, i.ws, o.connectHeader());
    return;
  }
  It(e, n, r, o);
}
function Ui(e, n, r, o) {
  let i = Si(r);
  if (i) {
    n.closed = true, Z(e, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${r} (${i})`), e.end(), q(n.ctx, "agent_proxy_direct_blocked_" + i), H(n.ctx, "direct_blocked", i, V(n));
    return;
  }
  if (!Number.isInteger(o) || o < 1 || o > 65535) {
    sr(e, n);
    return;
  }
  n.directDialing = true;
  let c = false, y = setTimeout(() => {
    if (n.closed) return;
    c = true, n.closed = true, n.directDialing = false, Z(e, 504, "Gateway Timeout", `agent-proxy selective relay: direct dial to ${r}:${o} timed out after ${n.limits.openTimeoutMs}ms`), e.end(), H(n.ctx, "direct_dial_timeout", `${r}:${o}`, V(n));
  }, n.limits.openTimeoutMs), h = Bun.connect({ hostname: r, port: o, socket: { open(g) {
    if (clearTimeout(y), n.closed || c) {
      g.end();
      return;
    }
    let p = Ci(g.remoteAddress);
    if (p) {
      g.end(), n.closed = true, n.directDialing = false, Z(e, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${r} \u2014 resolved to a blocked address (${p})`), e.end(), q(n.ctx, "agent_proxy_direct_peer_blocked_" + p), H(n.ctx, "direct_peer_blocked", p, V(n));
      return;
    }
    n.directUpstream = { write: (b) => g.write(b), end: () => g.end(), writeBuf: [], writeBufBytes: 0 }, n.directDialing = false, e.write(`HTTP/1.1 200 Connection Established\r
\r
`), n.established = true;
    for (let b of n.pending) nr(e, n, b);
    n.pending = [], n.pendingBytes = 0;
  }, data(g, p) {
    if (n.closed) return;
    e.write(p);
  }, drain() {
    let g = n.directUpstream;
    if (!g) return;
    while (g.writeBuf.length > 0) {
      let p = g.writeBuf[0];
      if (!p) {
        g.writeBuf.shift();
        continue;
      }
      let b = g.write(p);
      if (g.writeBufBytes -= b, b < p.length) {
        g.writeBuf[0] = p.subarray(b);
        return;
      }
      g.writeBuf.shift();
    }
  }, close() {
    if (!n.closed) n.closed = true, e.end();
  }, error(g, p) {
    clearTimeout(y);
    let b = n.closed;
    n.closed = true;
    let T = g.readyState > 0;
    if (T) g.terminate(), q(n.ctx, "agent_proxy_request_handler_error");
    if (b) return;
    let C = T ? Fe(p) : p?.message ?? String(p);
    if (!n.established) Z(e, 502, "Bad Gateway", `normal-networking dial failed: ${C}`), e.end();
    else e.destroy();
    H(n.ctx, T ? "handler_error" : n.established ? "direct_upstream_error" : "direct_dial_failed", C, V(n));
  } } });
  n.directDialInFlight = true, h.catch((g) => {
    if (clearTimeout(y), n.directDialing = false, n.closed) return;
    n.closed = true, Z(e, 502, "Bad Gateway", `normal-networking dial failed: ${g?.message ?? String(g)}`), e.end(), H(n.ctx, "direct_dial_failed", g?.message ?? String(g), V(n));
  }).finally(() => {
    n.directDialInFlight = false, Ft(n);
  });
}
function Wi(e) {
  let { pool: n, limits: r } = e;
  while (n.length > 0) {
    let o = n.pop();
    if (o.ws.readyState !== WebSocket.OPEN) {
      clearInterval(o.pinger);
      continue;
    }
    if (Date.now() - o.idleSince > r.poolIdleTtlMs || Date.now() - o.meta.openedAt > r.poolMaxAgeMs) {
      clearInterval(o.pinger);
      try {
        o.ws.close();
      } catch {
      }
      continue;
    }
    return o;
  }
  return;
}
function pr(e) {
  let { ws: n, wsMeta: r } = e;
  if (!n || !r?.v2 || !e.finSeen || n.readyState !== WebSocket.OPEN || !e.established || e.closed || !e.pinger || e.pool.length >= e.limits.poolMax || Date.now() - r.openedAt > e.limits.poolMaxAgeMs) return false;
  Te(e), tt(e), he(e), n.onmessage = null, n.onerror = null;
  let o = e.pool;
  return n.onclose = () => qi(o, n), o.push({ ws: n, pinger: e.pinger, idleSince: Date.now(), meta: r }), e.ws = void 0, e.pinger = void 0, e.wsMeta = void 0, Ft(e), e.ctx.gate.release(e.tunnel), true;
}
function qi(e, n) {
  let r = e.findIndex((o) => o.ws === n);
  if (r >= 0) clearInterval(e[r].pinger), e.splice(r, 1);
}
function gr(e) {
  for (let n of e) {
    clearInterval(n.pinger), n.ws.onclose = null;
    try {
      n.ws.close();
    } catch {
    }
  }
  e.length = 0;
}
function hr(e, n, r, o) {
  r.onmessage = (i) => {
    let c = i.data instanceof ArrayBuffer ? new Uint8Array(i.data) : new Uint8Array(Buffer.from(i.data)), y = yi(c);
    if (!y) return;
    if (y.control !== tr) {
      ji(e, n, r, y);
      return;
    }
    if (y.data.length > 0) {
      if (!n.wsMeta?.v2) {
        Gt(e, n, "server sent data before HELLO_ACK");
        return;
      }
      if (n.localClosed) {
        if (n.ctx.gate.touch(n.tunnel), n.discardedBytes += y.data.length, n.finCloseTimer && n.discardedBytes > n.limits.finGraceDiscardBytes) Tr(n);
        return;
      }
      if (!n.established) {
        n.established = true;
        let h = Buffer.from(y.data.subarray(0, 16)).toString("utf8").match(/^HTTP\/1\.[01] ([45]\d\d)/);
        if (h) {
          n.connectRejected = true;
          let g = h[1] === "502";
          H(n.ctx, g ? "connect_unreachable" : "connect_rejected", `gateway answered ${h[1]} to CONNECT (${g ? "host allowed, but the gateway could not connect to it" : "policy denial or other refusal"})`, V(n), Number(h[1]));
        }
        if (n.ctx.onConnectAnswer?.(n.connectAuthority, y.data), n.redialEligible = false, n.pooledDeadline) {
          if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
          n.pooledDeadline = void 0;
        }
        (0, import_chunk_cqa9hrgx.u)("agent_proxy_request");
      }
      n.downloadBytes += y.data.length, (0, import_chunk_bzyb60p0.Ptn)("relay_bytes", y.data.length), n.ctx.gate.touch(n.tunnel), e.write(y.data);
    }
  }, r.onerror = (i) => {
    let c = "message" in i ? String(i.message) : "websocket error";
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] ws error: ${c}`), n.closed) return;
    if (o && n.redialEligible && !n.established) {
      o(`ws error: ${c}`);
      return;
    }
    if (n.closed = true, n.localClosed) {
      ne(n);
      return;
    }
    if (!n.established) q(n.ctx, "agent_proxy_request_ws_error"), Z(e, 502, "Bad Gateway", `the WebSocket tunnel to the CCR agent-proxy reported an error (${c.slice(0, 120)})`), e.end(), H(n.ctx, "ws_error", `tunnel error before response: ${c.slice(0, 120)}`, V(n));
    else Zn(e, n, `tunnel error: ${(0, import_chunk_7cfjrnwy.ee)(c, 120)}`);
    ne(n);
  }, r.onclose = (i) => {
    if (n.closed) return;
    if (o && n.redialEligible && !n.established) {
      o("closed before response");
      return;
    }
    if (n.closed = true, n.localClosed) {
      ne(n);
      return;
    }
    if (!n.established) q(n.ctx, "agent_proxy_request_ws_error"), Z(e, 502, "Bad Gateway", "the WebSocket tunnel to the CCR agent-proxy closed before a response was received"), e.end(), H(n.ctx, "ws_error", "tunnel closed before response", V(n));
    else Zn(e, n, `tunnel closed (code ${i.code}${i.reason ? `, ${(0, import_chunk_7cfjrnwy.ee)(i.reason, 120)}` : ""})`, i.code);
    ne(n);
  };
}
function Zn(e, n, r, o) {
  if (n.connectRejected) {
    e.destroy();
    return;
  }
  let i = Date.now() - n.startedAt;
  q(n.ctx, "agent_proxy_request_ws_closed_mid_exchange", { elapsed_ms: i, upload_bytes: n.uploadBytes, download_bytes: n.downloadBytes, upload_paused: n.readPaused, pending_bytes: n.pendingBytes, ...o !== void 0 && { close_code: o } }), H(n.ctx, "ws_closed_mid_exchange", `${r} after ${Math.round(i / 1e3)}s; ${n.uploadBytes} B sent, ${n.downloadBytes} B received, client ${n.readPaused ? "paused" : "reading"}, ${n.pendingBytes} B still queued in the relay`, V(n)), e.destroy();
}
function ji(e, n, r, o) {
  if (o.control === gi) {
    if (n.wsMeta && !n.wsMeta.v2) {
      if (o.version !== Et) {
        Gt(e, n, `server acknowledged protocol version ${o.version}, expected ${Et}`);
        return;
      }
      if (n.wsMeta.v2 = true, n.helloAckDeadline) {
        if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
        n.helloAckDeadline = void 0;
      }
      (0, import_chunk_w578pjby.t)("[agent-proxy] tunnel protocol v2 negotiated");
    }
    return;
  }
  if (!n.wsMeta?.v2) return;
  if (o.control === hi) {
    Yi(e, n, r);
    return;
  }
}
function Yi(e, n, r) {
  if (n.finSeen) return;
  if (n.closed) {
    if (n.finCloseTimer && r.readyState === WebSocket.OPEN) n.finSeen = true, r.send(Rt(zn)), ne(n);
    return;
  }
  if (n.finSeen = true, r.send(Rt(zn)), n.finCloseTimer) clearTimeout(n.finCloseTimer), n.finCloseTimer = void 0;
  if (!n.localClosed) e.end();
  if (Te(n), n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
  n.pooledDeadline = void 0, n.paused = false, n.pending = [], n.pendingBytes = 0;
  let o = pr(n);
  if (n.closed = true, !o) ne(n);
}
function mr(e, n, r) {
  let o = `${e.connectLine}\r
Proxy-Authorization: ${r}\r
X-Agent-Proxy-Client-Process: ${e.clientProcess}\r
\r
`;
  n.send($t(Buffer.from(o, "utf8")));
  for (let i of e.pending) Ht(e, n, i);
  e.pending = [], e.pendingBytes = 0, he(e), cr(e);
}
function _r(e, n) {
  let r = { "Content-Type": "application/proto", Authorization: n.wsHeader() };
  (0, import_chunk_bzyb60p0.Ptn)("relay_dials");
  let o = new globalThis.WebSocket(e, { headers: r, proxy: (0, import_chunk_3jjr3wje.Z1)(e), tls: (0, import_chunk_3jjr3wje.QN)(void 0) || void 0 });
  return o.binaryType = "arraybuffer", o;
}
function It(e, n, r, o) {
  if (n.ctx.maySend?.() === false) {
    ar(e, n);
    return;
  }
  if (n.wsAttempt === 0) n.probeErrorAtDial = n.ctx.startupError;
  n.ctx.gate.dialing(n.tunnel);
  let i = _r(r, o);
  n.ws = i, n.wsOpen = false, n.wsMeta = void 0;
  let c = () => {
    i.onopen = i.onmessage = i.onerror = i.onclose = null;
    try {
      i.close();
    } catch {
    }
  }, y = (h) => {
    if (n.closed) return;
    if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
    c();
    let g = n.probeErrorAtDial, p = h.match(/(?:Expected 101 status code|Proxy connection failed): (\d{3})\b/)?.[1], b = p === "429" ? 429 : p === "503" ? 503 : void 0;
    if (b !== void 0) {
      if (n.ctx.gate.noteUpgradeRefused(b), n.ctx.gate.enabled && n.tunnel) {
        if ((0, import_chunk_w578pjby.t)(`[agent-proxy] ws open refused with ${b}; waiting to dial again`), n.ws = void 0, n.failOrRetry = void 0, n.ctx.gate.dialRefused(n.tunnel, b), fr(n), n.pendingBytes <= n.ctx.gate.limits.waitingClientBufferBytes) he(n);
        return;
      }
    }
    n.wsAttempt++;
    let T = g ? 1 : n.limits.openMaxAttempts;
    if (n.wsAttempt < T) {
      let v = n.limits.openBackoffBaseMs * 2 ** (n.wsAttempt - 1);
      (0, import_chunk_w578pjby.t)(`[agent-proxy] ws open failed (${h}); retry ${n.wsAttempt}/${T - 1} in ${v}ms`), n.openTimer = setTimeout(It, v, e, n, r, o);
      return;
    }
    (0, import_chunk_w578pjby.t)(`[agent-proxy] ws open failed (${h}); attempts exhausted`), n.closed = true, q(n.ctx, "agent_proxy_request_ws_error");
    let C = `could not open the WebSocket tunnel to the CCR agent-proxy (${h.slice(0, 120)}) after ${n.wsAttempt} ${(0, import_chunk_7cfjrnwy.O)(n.wsAttempt, "attempt")}`;
    Z(e, 502, "Bad Gateway", g ? `${C}. Also: ${g}` : C), e.end(), H(n.ctx, "ws_open_failed", `tunnel open failed after ${n.wsAttempt} ${(0, import_chunk_7cfjrnwy.O)(n.wsAttempt, "attempt")}: ${h.slice(0, 120)}`, V(n), p === void 0 ? void 0 : Number(p)), ne(n);
  };
  n.failOrRetry = y, n.openTimer = setTimeout(Ji, n.limits.openTimeoutMs, n), i.onopen = () => {
    if (n.closed) return;
    if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
    n.failOrRetry = void 0, n.wsOpen = true, n.wsMeta = { v2: false, openedAt: Date.now() }, n.ctx.startupError = void 0, n.ctx.upstreamOpened = true, hr(e, n, i), i.send(Rt(pi, Et)), mr(n, i, o.connectHeader()), n.ctx.checkBufferedAmount?.(), n.pinger = setInterval(Xi, fi, i), n.helloAckDeadline = () => {
      n.openTimer = void 0, n.helloAckDeadline = void 0, Gt(e, n, `no HELLO_ACK within ${n.limits.openTimeoutMs}ms`);
    }, n.openTimer = setTimeout(zi, n.limits.openTimeoutMs, n), n.ctx.gate.dialOpened(n.tunnel);
  }, i.onerror = (h) => {
    let g = "message" in h ? String(h.message) : "websocket error";
    (0, import_chunk_w578pjby.t)(`[agent-proxy] ws error: ${g}`), y(g);
  }, i.onclose = () => y("closed before open");
}
function Xi(e) {
  if (e.readyState === WebSocket.OPEN) e.send($t(new Uint8Array(0)));
}
function Ji(e) {
  if (e.ws && e.ws.readyState === WebSocket.CONNECTING) (0, import_chunk_w578pjby.t)("[agent-proxy] ws open timeout"), e.failOrRetry?.("handshake timeout");
}
function Nt(e) {
  let { unproven: n } = e;
  if (n !== void 0) clearTimeout(n.deadline), e.unproven = void 0, e.ctx.unprovenCallers--;
  return n;
}
function Ki(e) {
  e.data.closed = true, e.terminate(), ve(e.data.ctx, "unproven_caller_late", "a connected caller did not present the secret in time");
}
function wr(e, n) {
  return;
}
function Dt(e) {
  if (e.clientProcessWait === void 0) return;
  clearTimeout(e.clientProcessWait), e.clientProcessWait = void 0, e.clientRead?.resume();
}
function Vi(e) {
  e.pooledDeadline?.();
}
function zi(e) {
  e.helloAckDeadline?.();
}
function Gt(e, n, r) {
  if (n.closed) return;
  n.closed = true, (0, import_chunk_w578pjby.t)(`[agent-proxy] tunnel protocol v2 negotiation failed: ${r}`, { level: "warn" }), q(n.ctx, "agent_proxy_request_v2_not_acked"), Z(e, 502, "Bad Gateway", `requires tunnel protocol v2; the server did not acknowledge the negotiation (${r}) \u2014 server too old or connection broken`), e.end(), H(n.ctx, "v2_not_acked", `tunnel protocol v2 not acknowledged: ${r}`, V(n)), ne(n);
}
function br(e) {
  if (!e.wsMeta?.v2 || e.finSeen || e.localClosed || e.ws?.readyState !== WebSocket.OPEN) return false;
  if (e.localClosed = true, e.redialEligible = false, e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
  return e.pooledDeadline = void 0, e.finCloseTimer = setTimeout(Qi, e.limits.finGraceMs, e), e.ctx.gate.clientLeft(e.tunnel), true;
}
function Qi(e) {
  if (e.finCloseTimer = void 0, e.finSeen) return;
  if (e.discardedBytes > 0) {
    Tr(e);
    return;
  }
  ne(e);
}
function Tr(e) {
  let n = e.ws;
  ne(e), n?.terminate?.();
}
function Ht(e, n, r) {
  if (n.readyState !== WebSocket.OPEN) return;
  e.uploadBytes += r.length, (0, import_chunk_bzyb60p0.Ptn)("relay_bytes", r.length), e.ctx.gate.touch(e.tunnel);
  for (let o = 0; o < r.length; o += Vn) {
    let i = r.subarray(o, o + Vn);
    n.send($t(i));
  }
}
function Ft(e) {
  if (e.holdsPlace && e.clientGone && !e.directDialInFlight) e.holdsPlace = false, e.ctx.clientConnections--;
}
function ne(e) {
  if (!e) return;
  if (e.directUpstream) {
    try {
      e.directUpstream.end();
    } catch {
    }
    e.directUpstream = void 0;
  }
  if (e.closed = true, e.pinger) clearInterval(e.pinger);
  if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
  if (e.finCloseTimer) clearTimeout(e.finCloseTimer), e.finCloseTimer = void 0;
  if (Te(e), tt(e), he(e), Dt(e), e.pending = [], e.pendingBytes = 0, e.failOrRetry = void 0, e.redialEligible = false, e.pooledDeadline = void 0, e.helloAckDeadline = void 0, e.ws && e.ws.readyState <= WebSocket.OPEN) try {
    e.ws.close();
  } catch {
  }
  e.ws = void 0, Ft(e);
  let n = e.ctx.gate.release(e.tunnel);
  if (n && n.waitedMs >= e.ctx.gate.limits.abandonedNoteAfterMs && !e.uploadAborted) {
    let r = `the client closed after waiting ${Math.round(n.waitedMs / 1e3)} s for a tunnel`;
    H(e.ctx, n.refusedStatus ? "ws_open_refused" : "tunnel_wait_abandoned", n.refusedStatus ? `${r}, after the egress proxy refused new ones with HTTP ${n.refusedStatus}` : `${r}, with too many connections busy`, V(e), n.refusedStatus);
  }
}
var Ar = { hook: "/etc/ca-certificates/update.d/jks-keystore", postinst: "/var/lib/dpkg/info/ca-certificates-java.postinst", jar: "/usr/share/ca-certificates-java/ca-certificates-java.jar", knownSha256: [{ hook: "254a87ea1f9fe37751e3ed90a79013f3424c7a5fe26bfe59fac312abff82dbda", postinst: "4d76cba4f4a8583c70bb4632e9c2c00a669396500b686c1f32cd2046a9e1e110", jar: "42a384eebe60fbe91a40d295fe5f1ff85e3a0db0d3a91016cd83994105d6b5c0" }, { hook: "254a87ea1f9fe37751e3ed90a79013f3424c7a5fe26bfe59fac312abff82dbda", postinst: "66f8ca6900145d16f88822272f85694780c426d681ecc53ca24428e3b3e94b6b", jar: "c8457183a6380b1614b5cce54c621ee8f7df32db9ec8fcfe53b036ad7ad7c5df" }, { hook: "254a87ea1f9fe37751e3ed90a79013f3424c7a5fe26bfe59fac312abff82dbda", postinst: "76318d4455bf2a2a0417b49a2c4b362d78d125908a3da6ff513376b7fdfd5a0f", jar: "a871f600e1436f774eb5f989ce471d1c40ff63764061d3b19342c991d051e8b2" }], defaults: "/etc/default/cacerts", stateDir: "/var/lib/ca-certificates-java", dpkgStatus: "/var/lib/dpkg/status", dpkgUpdates: "/var/lib/dpkg/updates", dpkgUnincorporatedTriggers: "/var/lib/dpkg/triggers/Unincorp", dpkgTriggerInterest: "/var/lib/dpkg/triggers/update-ca-certificates-java", cacerts: "/etc/ssl/certs/java/cacerts" }, ia = "changeit", aa = ["pending", "fresh", "convert_pkcs12_keystore_to_jks"], sa = ["dev", "ino", "size", "mtimeMs", "ctimeMs"], xr = 262144, la = 33554432, da = 4194304, ua = 4277010157, ca = 2, vr = 2, rt = "X.509", Er = 20, fa = /^-----(?:BEGIN ([^-\n]*)-----[\s\S]*?^-----END \1-----)?/m;
async function Rr(e, n, r) {
  try {
    if (import_chunk_c203g5kd.s.CCR_AGENT_PROXY_JAVA_STORE_DIRECT_DISABLED) return "disabled";
    let o = r.knownSha256;
    for (let P of ["hook", "postinst", "jar"]) {
      let R = await Ue(r[P], xr), k = R && (0, import_crypto4.createHash)("sha256").update(R.bytes).digest("hex");
      if (o = o.filter((E) => E[P] === k), o.length === 0) return "package";
    }
    if ((await Ue(r.dpkgTriggerInterest, 1024))?.bytes.toString("latin1") !== `ca-certificates-java
`) return "package";
    let c = await Ue(r.defaults, xr);
    if (c === void 0 || import_chunk_c203g5kd.s.CACERT_UPDATES === "disabled" || (import_chunk_c203g5kd.s.DPKG_MAINTSCRIPT_PACKAGE ?? "") !== "" || import_chunk_c203g5kd.s.DPKG_ADMINDIR !== void 0 || import_chunk_c203g5kd.s.DPKG_ROOT !== void 0 || c.bytes.toString("latin1").split(`
`).filter((P) => !/^[ \t]*(#.*)?$/.test(P)).join(`
`) !== "cacerts_updates=yes") return "settings";
    let y = await (0, import_promises6.readdir)(r.stateDir);
    if (aa.some((P) => y.includes(P))) return "unfinished";
    let h = await Ue(r.dpkgStatus, la), g = await (0, import_promises6.lstat)(r.dpkgUnincorporatedTriggers);
    if (h === void 0 || h.bytes.includes(`
Triggers-Pending:`) || h.bytes.includes(`
Triggers-Awaited:`) || !g.isFile() || g.size !== 0 || (await (0, import_promises6.readdir)(r.dpkgUpdates)).length !== 0) return "unfinished";
    if (await (0, import_chunk_c203g5kd.Bf)("java") === null) return "no_java";
    let p = e.startsWith("0") ? null : fa.exec(e), b;
    try {
      b = new import_crypto4.X509Certificate(p?.[1] === "CERTIFICATE" ? p[0] : "").raw;
    } catch {
      return "certificate";
    }
    let T = `debian:${(0, import_path3.basename)(n)}`;
    if (!/^[\x21-\x40\x5b-\x7e]+$/.test(T)) return "alias";
    let C = await Ue(r.cacerts, da), v = C && pa(C.bytes);
    if (C === void 0 || v === void 0 || C.info.nlink !== 1) return "store";
    if (v.includes(T)) return "alias";
    let A = ga(C.bytes, T, b);
    try {
      let P = C.info.mode & 511, R = await (0, import_chunk_q7qjcthc.gL)(r.cacerts, A, P);
      try {
        let k = await (0, import_promises6.lstat)(R);
        if (k.uid !== C.info.uid || k.gid !== C.info.gid) return await (0, import_promises6.unlink)(R), "store";
        await (0, import_promises6.chmod)(R, P);
        let E = await (0, import_promises6.lstat)(r.cacerts).catch(() => {
          return;
        });
        if (!E || sa.some((B) => E[B] !== C.info[B])) return await (0, import_promises6.unlink)(R), "stale";
        await (0, import_promises6.rename)(R, r.cacerts);
      } catch (k) {
        throw await (0, import_promises6.unlink)(R).catch(() => {
        }), k;
      }
    } catch {
      return "write";
    }
    return "added";
  } catch {
    return "error";
  }
}
function pa(e) {
  let n = [], r = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
  try {
    if (e.readUInt32BE(0) !== ua || e.readUInt32BE(4) !== ca) return;
    let o = 12;
    for (let i = e.readUInt32BE(8); i > 0; i--) {
      if (e.readUInt32BE(o) !== vr) return;
      o += 4;
      let c = o + 2 + e.readUInt16BE(o), y = e.subarray(o + 2, c);
      if (y.some((g) => g === 0 || g >= 240)) return;
      n.push(r.decode(y)), o = c + 8;
      let h = o + 2 + e.readUInt16BE(o);
      if (e.toString("utf8", o + 2, h) !== rt) return;
      o = h + 4 + e.readUInt32BE(h);
    }
    if (o + Er !== e.length || !kr(e.subarray(0, o)).equals(e.subarray(o))) return;
  } catch {
    return;
  }
  return n;
}
function ga(e, n, r) {
  let o = Buffer.alloc(6 + n.length + 8 + 2 + rt.length + 4), i = o.writeUInt32BE(vr, 0);
  i = o.writeUInt16BE(n.length, i), i += o.write(n, i, "latin1"), i = o.writeBigUInt64BE(BigInt(Date.now()), i), i = o.writeUInt16BE(rt.length, i), i += o.write(rt, i, "latin1"), o.writeUInt32BE(r.length, i);
  let c = Buffer.concat([e.subarray(0, e.length - Er), o, r]);
  return c.writeUInt32BE(e.readUInt32BE(8) + 1, 8), Buffer.concat([c, kr(c)]);
}
function kr(e) {
  return (0, import_crypto4.createHash)("sha1").update(Buffer.from(ia, "utf16le").swap16()).update("Mighty Aphrodite", "utf8").update(e).digest();
}
async function Ue(e, n) {
  let r;
  try {
    r = await (0, import_promises6.open)(e, import_fs3.constants.O_RDONLY | (0, import_chunk_6mfepmbb.m3)());
    let o = await r.stat();
    if (!o.isFile() || o.size > n) return;
    let i = await r.readFile();
    if (i.length !== o.size) return;
    return { bytes: i, info: o };
  } catch {
    return;
  } finally {
    await r?.close().catch(() => {
    });
  }
}
var Dr = { script: "update-ca-certificates", conf: "/etc/ca-certificates.conf", distCertsDir: "/usr/share/ca-certificates", localCertsDir: "/usr/local/share/ca-certificates", certsDir: "/etc/ssl/certs", bundle: "/etc/ssl/certs/ca-certificates.crt", hooksDir: "/etc/ca-certificates/update.d", restorecon: "/sbin/restorecon", rehash: ["openssl", "rehash", "."], listHooks: ["run-parts", "--test", "--", "/etc/ca-certificates/update.d"], javaHook: Ar }, Ta = ["CERTSCONF=/etc/ca-certificates.conf", "CERTSDIR=/usr/share/ca-certificates", "LOCALCERTSDIR=/usr/local/share/ca-certificates", "ETCCERTSDIR=/etc/ssl/certs", "HOOKSDIR=/etc/ca-certificates/update.d"], Sa = 65536, Ca = 262144, xa = 1048576, Pa = 4194304, Aa = 1048576, Br = 2048;
async function Jt(e, n) {
  let { anchorPath: r, link: o, layout: i, recordPath: c, timeoutMs: y } = n, h = Buffer.from(e, "utf8"), g;
  try {
    g = await va(r, o, h, i);
  } catch (E) {
    g = { reason: "layout", detail: (0, import_chunk_jv7av99m.d)(E) };
  }
  if ("reason" in g) return (0, import_chunk_w578pjby.t)(`[agent-proxy] direct CA install not attempted (${g.reason}: ${g.detail}); using ${i.script}`), { outcome: "not_attempted", reason: g.reason };
  await (0, import_promises5.unlink)(c).catch(() => {
  });
  let p;
  try {
    p = await (0, import_promises5.open)(r, import_fs2.constants.O_WRONLY | import_fs2.constants.O_CREAT | import_fs2.constants.O_EXCL, 420), await p.writeFile(h), await p.chmod(420), await p.close();
  } catch (E) {
    if (p) await p.close().catch(() => {
    }), await (0, import_promises5.unlink)(r).catch(() => {
    });
    return (0, import_chunk_w578pjby.t)(`[agent-proxy] direct CA install not attempted (anchor: ${(0, import_chunk_jv7av99m.d)(E)}); using ${i.script}`), { outcome: "not_attempted", reason: "anchor_create" };
  }
  let b = false, T = async (E, B) => {
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] direct CA install abandoned at ${E} (${B}); running ${i.script} instead`, { level: "warn" }), b) await (0, import_promises5.unlink)(o).catch(() => {
    });
    return { outcome: "abandoned", step: E };
  };
  try {
    let E = await (0, import_chunk_q7qjcthc.gL)((0, import_path2.join)((0, import_path2.dirname)(i.certsDir), (0, import_path2.basename)(i.bundle)), g.bundle, 420);
    try {
      await (0, import_promises5.chmod)(E, 420), await (0, import_promises5.rename)(E, i.bundle);
    } catch (B) {
      throw await (0, import_promises5.unlink)(E).catch(() => {
      }), B;
    }
  } catch (E) {
    return await T("bundle", (0, import_chunk_jv7av99m.d)(E));
  }
  try {
    await (0, import_promises5.symlink)(r, o), b = true;
  } catch (E) {
    return await T("link", (0, import_chunk_jv7av99m.d)(E));
  }
  let C = Date.now() + y, v = (E, B) => (0, import_chunk_7fsmgfxx.kt)(E[0], E.slice(1), { timeout: Math.max(1, C - Date.now()), cwd: i.certsDir, ...B === void 0 ? { stdin: "ignore" } : { input: B }, maxBuffer: Aa, preserveOutputOnError: true }), A = await v(i.rehash);
  if (Yt("openssl rehash", A), A.exitCode !== 0) return await T("rehash", jt(A));
  let P = [];
  if ((await (0, import_promises5.stat)(i.hooksDir).catch(() => {
    return;
  }))?.isDirectory()) {
    let E = await v(i.listHooks);
    if (E.exitCode !== 0) return Yt("run-parts", E), await T("hooks", jt(E));
    P = E.stdout.split(`
`).filter((B) => B.length > 0);
  }
  let k;
  for (let E of P) {
    if (E === i.javaHook?.hook) {
      if (k = await Rr(e, o, i.javaHook), (0, import_chunk_w578pjby.t)(k === "added" ? `[agent-proxy] direct CA install: CA added to ${i.javaHook.cacerts} without running ${E}` : `[agent-proxy] direct CA install: running ${E}, not adding to the Java store directly (${k})`), k === "added") continue;
    }
    let B = await v([E], `+${o}
`);
    if (Yt(E, B), B.exitCode === void 0) return (0, import_chunk_w578pjby.t)(`[agent-proxy] direct CA install: hook ${E} gave no exit status (${jt(B)}); not recording the install, so the next start redoes it`, { level: "warn" }), { outcome: "hook_incomplete" };
    if (B.exitCode !== 0) (0, import_chunk_w578pjby.t)(`[agent-proxy] direct CA install: hook ${E} exit status ${B.exitCode} ignored, as ${i.script} ignores it`);
  }
  return { outcome: "installed", ...k && { javaStore: k } };
}
async function va(e, n, r, o) {
  let i = o.script.includes("/") ? o.script : await (0, import_chunk_c203g5kd.Bf)(o.script), c = i ? await st(i, Sa) : void 0;
  if (c === void 0 || !c.subarray(0, 9).equals(Buffer.from("#!/bin/sh")) || !Ta.every((A) => c.includes(A))) return { reason: "script", detail: i ?? o.script };
  let y = await st(o.conf, Ca);
  if (y === void 0 || y.length === 0) return { reason: "conf", detail: o.conf };
  for (let A of [o.certsDir, o.localCertsDir, o.distCertsDir]) if (!(await (0, import_promises5.lstat)(A).catch(() => {
    return;
  }))?.isDirectory()) return { reason: "layout", detail: A };
  if (!(await (0, import_promises5.lstat)(o.bundle).catch(() => {
    return;
  }))?.isFile()) return { reason: "layout", detail: o.bundle };
  if (await Ir(o.restorecon)) return { reason: "layout", detail: o.restorecon };
  for (let A of [e, n]) if (await Ir(A)) return { reason: "anchor_present", detail: `${A} exists` };
  let h = [], g = (A) => ({ reason: "unsynced", detail: A });
  for (let A of y.toString("utf8").split(`
`)) {
    if (A === "" || A.startsWith("#")) continue;
    if (A.startsWith("!")) {
      let k = (0, import_path2.join)(o.certsDir, `${(0, import_path2.basename)(A.slice(1), ".crt")}.pem`);
      if ((await (0, import_promises5.lstat)(k).catch(() => {
        return;
      }))?.isSymbolicLink()) return g(`${k} still linked`);
      continue;
    }
    let P = (0, import_path2.join)(o.distCertsDir, A);
    if (!(await (0, import_promises5.stat)(P).catch(() => {
      return;
    }))?.isFile()) continue;
    let R = await Or(P, o);
    if (R === void 0) return g(P);
    h.push(R);
  }
  let p = (0, import_path2.basename)(e), b = [p];
  for (let A of await (0, import_promises5.readdir)(o.localCertsDir, { withFileTypes: true })) {
    let P = await (0, import_promises5.stat)((0, import_path2.join)(o.localCertsDir, A.name));
    if (P.isDirectory()) return g(`${A.name} is a directory`);
    if (P.isFile() && A.name.endsWith(".crt")) b.push(A.name);
  }
  b.sort();
  let T = $r(r);
  for (let A of b) {
    if (A === p) {
      h.push(T);
      continue;
    }
    let P = (0, import_path2.join)(o.localCertsDir, A), R = await Or(P, o);
    if (R === void 0) return g(P);
    h.push(R);
  }
  let C = await st(o.bundle, Pa), v = Buffer.concat(h.filter((A) => A !== T));
  if (C === void 0 || !C.equals(v)) return g("bundle differs from what the script would build");
  return { bundle: Buffer.concat(h) };
}
async function Or(e, n) {
  let r = (0, import_path2.basename)(e, ".crt").replace(/ /g, "_").replace(/[()]/g, "=").replace(/,/g, "_") + ".pem";
  if (await (0, import_promises5.readlink)((0, import_path2.join)(n.certsDir, r)).catch(() => {
    return;
  }) !== e) return;
  let i = await st(e, xa);
  return i && $r(i);
}
function $r(e) {
  return e.length === 0 || e.at(-1) === 10 ? e : Buffer.concat([e, Buffer.from(`
`)]);
}
async function Ir(e) {
  return (0, import_promises5.lstat)(e).then(() => true, (n) => {
    if ((0, import_chunk_jv7av99m.J)(n)) return false;
    throw n;
  });
}
async function st(e, n) {
  let r;
  try {
    r = await (0, import_promises5.open)(e, import_fs2.constants.O_RDONLY | (0, import_chunk_6mfepmbb.m3)());
    let o = await r.stat();
    if (!o.isFile() || o.size > n) return;
    return await r.readFile();
  } catch {
    return;
  } finally {
    await r?.close().catch(() => {
    });
  }
}
function jt(e) {
  if (e.exitCode !== void 0) return `exit status ${e.exitCode}`;
  if (e.timedOut) return "still running at the deadline";
  if (e.maxBufferExceeded) return "output over the cap";
  return `did not run (${e.error ?? "unknown"})`;
}
function Yt(e, n) {
  let r = `${n.stdout}
${n.stderr}`.trim();
  if (!r) return;
  if (r.length > Br) r = `${r.slice(0, Br)}\u2026 (${r.length} chars)`;
  (0, import_chunk_w578pjby.t)(`[agent-proxy] ${e}: ${r}`);
}
var Re = "changeit", Oa = /[\s'"]/, Jr = "# >>> ccr-agent-proxy (managed by Claude Code) >>>", dt = "# <<< ccr-agent-proxy <<<", Kr = ".ca-v2", Ia = 4277010157, Na = 33554432, Da = 2, $a = 2, La = 20, Ma = /^Your keystore contains 0 entries\s*$/m, Ga = 3e3, zr = 16, Qr = 16777216, Ha = ".checked-v2";
function en(e, n = [...import_chunk_3jjr3wje.KIs, ...import_chunk_3jjr3wje.IIo, ...import_chunk_3jjr3wje.qIs]) {
  let r = (0, import_crypto5.createHash)("sha256").update([...n].sort().join(`
`)).digest("hex").slice(0, 16);
  return `${e}${Kr}-${r}.pem`;
}
function eo(e, n, r) {
  let o = r?.trim();
  if (o?.includes("javax.net.ssl.trustStore=")) return o;
  let i = to(e, n).join(" ");
  return o ? `${i} ${o}` : i;
}
function to(e, n) {
  return n === "JKS" ? [`-Djavax.net.ssl.trustStore=${e}`, "-Djavax.net.ssl.trustStoreType=JKS"] : [`-Djavax.net.ssl.trustStore=${e}`, `-Djavax.net.ssl.trustStorePassword=${Re}`, "-Djavax.net.ssl.trustStoreType=PKCS12"];
}
async function gt(e) {
  let n = [], r = { failureCodes: n }, o = { used: false }, i = (0, import_path4.join)(e.stateDir, "agent-proxy-ca.crt");
  try {
    await (0, import_promises7.mkdir)(e.stateDir, { recursive: true }), await (0, import_promises7.writeFile)(i, e.ccrCa, "utf8");
  } catch (T) {
    return (0, import_chunk_w578pjby.t)(`[agent-proxy] tool trust setup skipped: cannot write CA file: ${(0, import_chunk_jv7av99m.d)(T)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("agent_proxy_tool_trust", "ca_file_write_failed"), r;
  }
  let c = await Mr(e.keytoolBin, Fa), y = await Mr(e.certutilBin, () => (0, import_chunk_c203g5kd.Bf)("certutil")), h = e.nssRecords ?? !import_chunk_c203g5kd.s.CCR_AGENT_PROXY_NSS_RECORDS_DISABLED ? e.stateDir : void 0, [g, p] = await Promise.all([(async () => {
    if (!c) {
      (0, import_chunk_w578pjby.t)("[agent-proxy] no keytool found; skipping JVM truststore");
      return;
    }
    let T = (0, import_path4.join)(e.stateDir, "java-truststore.p12"), C = e.bazelrcPath ?? "/etc/bazel.bazelrc", v, A = [], P = e.ccrCa.match(import_chunk_3jjr3wje.yI), R = async () => {
      let { cacerts: re, store: D } = await Gr(c, A), F = D !== void 0 && P !== null && P.every((W) => {
        let U = pt(W);
        return U.length >= 64 && U[0] === 48 && D.includes(U);
      }) && Hr(D) === "clean";
      return { cacerts: re, usable: F };
    }, k = await R(), E = await ro(T), B = E.state === "file" && await He(en(T), e.ccrCa) === "same";
    if (!k.usable && !B) await e.systemTrust?.then(() => {
    }, () => {
    }), k = await R();
    if (k.cacerts && k.usable) (0, import_chunk_w578pjby.t)(`[agent-proxy] JDK truststore at ${k.cacerts} already holds the CA; using it`), v = { path: k.cacerts, type: "JKS", source: "system" };
    else if (B) (0, import_chunk_w578pjby.t)(`[agent-proxy] reusing JVM truststore at ${T}`), v = { path: T, type: "PKCS12", source: "reused" };
    else {
      let re = (W) => Ua(c, k.cacerts, e.ccrCa, i, T, W), D = [], F = await re(D);
      if (D[0] === "java_truststore_seed_failed") o.used = true, (0, import_chunk_w578pjby.t)("[agent-proxy] keytool seed failed; trying once more after a pause"), await (e.seedRetryPause?.() ?? (0, import_chunk_5appeerh.K)(Ga)), F = await re(n);
      else n.push(...D);
      if (!F) {
        await Gr(c, A);
        for (let { cacerts: W, store: U } of A) {
          let G = Hr(U);
          if (G !== "part_written") {
            r.rejectedJdkStorePath = G === "failed_filter" ? W : void 0;
            break;
          }
        }
        if (await qa(c, T, E, r.rejectedJdkStorePath, C, n)) r.retiredJavaTrustStorePath = T;
        return;
      }
      v = { path: F, type: "PKCS12", source: "built" };
    }
    if (Oa.test(v.path)) {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${v.path}`, { level: "warn" }), n.push("jvm_unsafe_truststore_path");
      return;
    }
    return r.javaTrustStorePath = v.path, r.javaTrustStoreType = v.type, await ja(v.path, v.type, C, n), v.source;
  })(), (async () => {
    if (!y) {
      (0, import_chunk_w578pjby.t)("[agent-proxy] certutil not found; skipping NSS trust for browsers");
      return;
    }
    return Ya(i, e.ccrCa, e.nssDbDirs ?? [(0, import_path4.join)((0, import_os2.homedir)(), ".pki", "nssdb"), (0, import_path4.join)((0, import_chunk_thchq5z2.Bvt)(), "pki", "nssdb")], y, h, n);
  })(), Ka(e.caBundlePath, e.botoConfigPath ?? (0, import_path4.join)((0, import_os2.homedir)(), ".boto"), n), Va(e, e.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", n).then((T) => {
    r.profileDPath = T;
  })]), b = p === void 0 ? void 0 : { nss_dbs_unchanged: p.unchanged, ...h !== void 0 && { nss_dbs_certutil_skipped: p.byRecord } };
  if (n.length === 0) (0, import_chunk_cqa9hrgx.u)("agent_proxy_tool_trust", { reused: g === "reused", ...g && { store: (0, import_chunk_78g0060s.f)(g) }, ...o.used && { java_seed_retried: true }, ...b });
  else {
    let T = n[0];
    if (o.used || b) (0, import_chunk_cqa9hrgx.l)("agent_proxy_tool_trust", T, { ...o.used && { java_seed_retried: true }, ...b });
    else (0, import_chunk_cqa9hrgx.l)("agent_proxy_tool_trust", T);
  }
  return r;
}
async function Mr(e, n) {
  if (e) return (0, import_promises7.realpath)(e).catch(() => {
    return;
  });
  return await n() ?? void 0;
}
async function Fa() {
  let e = [await (0, import_chunk_c203g5kd.Bf)("keytool"), import_chunk_c203g5kd.s.JAVA_HOME ? (0, import_path4.join)(import_chunk_c203g5kd.s.JAVA_HOME, "bin", "keytool") : void 0], n;
  for (let r of e) {
    if (!r) continue;
    let o = await (0, import_promises7.realpath)(r).catch(() => {
      return;
    });
    if (!o) continue;
    if (n ??= o, await no(o)) return o;
  }
  return n;
}
async function no(e) {
  let n = (0, import_path4.dirname)((0, import_path4.dirname)(e));
  for (let r of [(0, import_path4.join)(n, "lib", "security", "cacerts"), (0, import_path4.join)(n, "jre", "lib", "security", "cacerts")]) {
    let o = await (0, import_promises7.realpath)(r).catch(() => {
      return;
    });
    if (o) return o;
  }
  return;
}
async function ro(e) {
  let n;
  try {
    n = await (0, import_promises7.open)(e, (0, import_chunk_6mfepmbb.Xu)());
    let r = await n.stat();
    return r.isFile() ? { state: "file", identity: `${r.ino}:${r.size}:${r.mtimeMs}` } : { state: "unusable" };
  } catch (r) {
    return { state: (0, import_chunk_jv7av99m.fn)(r) ? "unusable" : "unknown" };
  } finally {
    await n?.close().catch(() => {
    });
  }
}
function oo(e) {
  let n = /* @__PURE__ */ new Set();
  try {
    return { kept: (0, import_chunk_3jjr3wje.hJe)(e.join(`
`), "agent proxy trust", n), checkedByKey: n };
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] the deny-list filter threw while checking a JVM truststore, so that store is not used (${r instanceof Error ? r.name : typeof r})`, { level: "error" });
    return;
  }
}
function io(e, n) {
  return import_chunk_3jjr3wje.IIo.size === 0 || n.has(e);
}
async function ao(e, n) {
  let r;
  try {
    r = await (0, import_promises7.open)(e, (0, import_chunk_6mfepmbb.Xu)());
    let o = await r.stat();
    if (!o.isFile() || o.size > n) return;
    let i = Buffer.alloc(o.size + 1), { bytesRead: c } = await r.read(i, 0, i.length, 0);
    return c === o.size ? i.subarray(0, c) : void 0;
  } catch {
    return;
  } finally {
    await r?.close().catch(() => {
    });
  }
}
async function Gr(e, n) {
  let r = await no(e), o = r === void 0 ? void 0 : await ao(r, Na);
  if (r !== void 0 && o !== void 0) n.unshift({ cacerts: r, store: o });
  return { cacerts: r, store: o };
}
function Hr(e) {
  let n = [], r;
  try {
    if (e.readUInt32BE(0) !== Ia || e.readUInt32BE(4) !== Da) return "failed_filter";
    let i = 12;
    for (let y = e.readUInt32BE(8); y > 0; y--) {
      if (e.readUInt32BE(i) !== $a) return "failed_filter";
      i += 4, i += 2 + e.readUInt16BE(i), i += 8, i += 2 + e.readUInt16BE(i);
      let h = e.readUInt32BE(i);
      if (i += 4, i + h > e.length) return "part_written";
      let g = e.toString("base64", i, i + h).replace(/.{64}(?=.)/g, `$&
`);
      n.push(`-----BEGIN CERTIFICATE-----
${g}
-----END CERTIFICATE-----`), i += h;
    }
    let c = i + La;
    if (c < e.length) return "failed_filter";
    r = c === e.length;
  } catch {
    return "part_written";
  }
  let o = oo(n);
  if (o === void 0 || (o.kept?.match(import_chunk_3jjr3wje.yI)?.length ?? 0) !== n.length || !n.every((i) => io(i, o.checkedByKey))) return "failed_filter";
  return r ? "clean" : "part_written";
}
async function Ua(e, n, r, o, i, c) {
  if (!n) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] no JDK cacerts found near ${e}; skipping JVM truststore`), c.push("jdk_cacerts_not_found");
    return;
  }
  let y = `${i}.${process.pid}.tmp`;
  await (0, import_promises7.unlink)(y).catch(() => {
  });
  let h = await ae(e, ["-importkeystore", "-noprompt", "-srckeystore", n, "-srcstorepass", Re, "-destkeystore", y, "-deststoretype", "PKCS12", "-deststorepass", Re]);
  if (!h.ok) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] keytool importkeystore failed: ${h.detail}`, { level: "warn" }), c.push("java_truststore_seed_failed"), await (0, import_promises7.unlink)(y).catch(() => {
    });
    return;
  }
  let g = await Wa(e, y);
  if (!g.ok) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not filter the JVM truststore: ${g.detail}`, { level: "warn" }), c.push("java_truststore_filter_failed"), await (0, import_promises7.unlink)(y).catch(() => {
    });
    return;
  }
  let p = await Fr(e, y, "ccr-agent-proxy", o);
  if (!p.ok) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] keytool importcert failed: ${p.detail}`, { level: "warn" }), c.push("java_truststore_import_failed"), await (0, import_promises7.unlink)(y).catch(() => {
    });
    return;
  }
  let b = We(r), T = true;
  if (b !== void 0) {
    let P = `${y}.second.crt`, R = await (0, import_promises7.writeFile)(P, `${b}
`, "utf8").then(() => Fr(e, y, "ccr-agent-proxy-2", P), (k) => ({ ok: false, detail: (0, import_chunk_jv7av99m.d)(k) }));
    if (await (0, import_promises7.unlink)(P).catch(() => {
    }), !R.ok) (0, import_chunk_w578pjby.t)(`[agent-proxy] could not import the second certificate: ${R.detail}; the store holds the first only and is rebuilt on the next start`, { level: "warn" }), c.push("java_truststore_second_import_failed"), T = false;
  }
  let C = en(i);
  await (0, import_promises7.unlink)(C).catch(() => {
  });
  let v = (0, import_path4.dirname)(i), A = `${(0, import_path4.basename)(i)}${Kr}-`;
  for (let P of await (0, import_promises7.readdir)(v).catch(() => [])) if (P.startsWith(A)) await (0, import_promises7.unlink)((0, import_path4.join)(v, P)).catch(() => {
  });
  try {
    await (0, import_promises7.rename)(y, i).catch(async () => {
      await (0, import_promises7.writeFile)(i, await (0, import_promises7.readFile)(y)), await (0, import_promises7.unlink)(y).catch(() => {
      });
    });
  } catch (P) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not move JVM truststore into place: ${(0, import_chunk_jv7av99m.d)(P)}`, { level: "warn" }), c.push("java_truststore_publish_failed"), await (0, import_promises7.unlink)(y).catch(() => {
    });
    return;
  }
  if (T) await (0, import_promises7.writeFile)(C, r, "utf8").catch((P) => {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not record the truststore's CA: ${(0, import_chunk_jv7av99m.d)(P)}`);
  });
  return (0, import_chunk_w578pjby.t)(`[agent-proxy] JVM truststore built at ${i}`), i;
}
function so() {
  return { ...(0, import_chunk_r6r2wdsw.Hs)(), _JAVA_OPTIONS: void 0, JAVA_TOOL_OPTIONS: void 0 };
}
async function Kt(e, n) {
  let r = await ae(e, ["-list", "-rfc", "-keystore", n, "-storetype", "PKCS12", "-storepass", Re, "-J-Duser.language=en"], so());
  if (!r.ok) return { ok: false, detail: r.detail, aliases: [] };
  let o = r.stdout.split(/^Alias name: /m).slice(1), i = oo([r.stdout]);
  if (i === void 0) return { ok: false, detail: "the deny-list filter threw", aliases: [] };
  let { kept: c, checkedByKey: y } = i;
  if (c === void 0 || o.length === 0 && !Ma.test(r.stdout) || o.some((g) => !g.match(import_chunk_3jjr3wje.yI))) return { ok: false, detail: `no usable listing (${o.length} entries read)`, aliases: [] };
  return { ok: true, detail: "", aliases: o.filter((g) => g.match(import_chunk_3jjr3wje.yI)?.some((p) => !c.includes(p) || !io(p, y))).map((g) => g.slice(0, g.indexOf(`
`)).trimEnd()) };
}
async function Wa(e, n) {
  let r = await Kt(e, n);
  if (!r.ok || r.aliases.length === 0) return r;
  if (r.aliases.some((i) => i.startsWith("-"))) return { ok: false, detail: "an entry to remove has an unsafe alias" };
  (0, import_chunk_w578pjby.t)(`[agent-proxy] removing ${r.aliases.length} denied or unreadable entries from the JVM truststore`);
  for (let i of r.aliases) {
    let c = await ae(e, ["-delete", "-alias", i, "-keystore", n, "-storetype", "PKCS12", "-storepass", Re], so());
    if (!c.ok) return c;
  }
  let o = await Kt(e, n);
  return o.ok && o.aliases.length > 0 ? { ok: false, detail: `${o.aliases.length} entries remain` } : o;
}
function Fr(e, n, r, o) {
  return ae(e, ["-importcert", "-noprompt", "-alias", r, "-file", o, "-keystore", n, "-storetype", "PKCS12", "-storepass", Re]);
}
async function qa(e, n, r, o, i, c) {
  let y = await ge(en(n)), h = r.state !== "unknown" && y.state !== "failed" && !(r.state === "file" && y.state === "read");
  if (h && r.state === "file") {
    let T = await Kt(e, n);
    h = !T.ok || T.aliases.length > 0;
  }
  let g = await ro(n), p = g.state === "file" && r.state === "file" && g.identity === r.identity, b = h && (p || g.state === "unusable");
  try {
    let T = await (0, import_promises7.readFile)(i, "utf8").catch((A) => {
      if ((0, import_chunk_jv7av99m.J)(A)) return "";
      throw A;
    }), { block: C, rest: v } = lo(T);
    if (b && C.includes(n) || o !== void 0 && C.includes(o)) await (0, import_promises7.writeFile)(i, v, "utf8"), (0, import_chunk_w578pjby.t)(`[agent-proxy] removed Bazel trust block from ${i}`);
  } catch (T) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not update ${i}: ${(0, import_chunk_jv7av99m.d)(T)}`), c.push("bazelrc_write_failed");
  }
  if (b && p) await (0, import_promises7.unlink)(n).catch(() => {
  });
  return b;
}
function lo(e) {
  let n = e.indexOf(Jr), r = e.indexOf(dt);
  return n >= 0 && r > n ? { block: e.slice(n, r + dt.length), rest: e.slice(0, n) + e.slice(r + dt.length).replace(/^\n/, "") } : { block: "", rest: e };
}
async function ja(e, n, r, o) {
  let i = to(e, n).map((p) => `--host_jvm_args=${p}`).join(" "), c = `${Jr}
# Bazel's repository downloader runs on its embedded JDK and ignores
# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.
startup ${i}
${dt}
`, y;
  try {
    y = await (0, import_promises7.readFile)(r, "utf8");
  } catch (p) {
    if (!(0, import_chunk_jv7av99m.J)(p)) {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] could not read ${r}: ${(0, import_chunk_jv7av99m.d)(p)}`), o.push("bazelrc_write_failed");
      return;
    }
    y = "";
  }
  let h = lo(y).rest.trimEnd(), g = h ? `${h}

${c}` : c;
  if (g === y) return;
  try {
    await (0, import_promises7.writeFile)(r, g, "utf8"), (0, import_chunk_w578pjby.t)(`[agent-proxy] wrote Bazel trust block to ${r}`);
  } catch (p) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not write ${r}: ${(0, import_chunk_jv7av99m.d)(p)}`), o.push("bazelrc_write_failed");
  }
}
async function Ya(e, n, r, o, i, c) {
  let y = 0, h = 0, g = n.match(import_chunk_3jjr3wje.yI)?.[0], p = We(n), b = `${e}.${process.pid}.second`, T = g === void 0 ? void 0 : p === void 0 ? [g] : [g, p];
  if (p !== void 0) await (0, import_promises7.writeFile)(b, `${p}
`, "utf8").catch(() => {
  });
  for (let C of r) {
    let v = await (0, import_promises7.mkdir)(C, { recursive: true }).then((B) => B === void 0 ? "was_there" : "new", (B) => {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] could not create NSS dir ${C}: ${(0, import_chunk_jv7av99m.d)(B)}`);
      return;
    });
    if (v === void 0) {
      c.push("nss_add_failed");
      continue;
    }
    let A = `sql:${(0, import_path4.resolve)(C)}`, P = i === void 0 ? void 0 : Xa(i, C), R = P === void 0 || T === void 0 ? void 0 : await Ur(C, T, o);
    if (P !== void 0 && R !== void 0) {
      let B = await ge(P);
      if (B.state === "read" && B.text === R) {
        (0, import_chunk_w578pjby.t)(`[agent-proxy] NSS DB at ${C} matches the record of an earlier start that found the served certificates trusted; left as is without running certutil`), y++, h++;
        continue;
      }
    }
    if (v === "was_there" && T !== void 0 && await Ja(o, A, T, R !== void 0).catch((B) => ((0, import_chunk_w578pjby.t)(`[agent-proxy] NSS check of ${C} threw, taken as a difference: ${(0, import_chunk_jv7av99m.d)(B)}`), false))) {
      if ((0, import_chunk_w578pjby.t)(`[agent-proxy] NSS DB at ${C} already holds the served certificates, trusted; left as is`), y++, P !== void 0 && R !== void 0 && await Ur(C, T, o) === R) await (0, import_chunk_q7qjcthc.yr)(P, R).catch((B) => {
        (0, import_chunk_w578pjby.t)(`[agent-proxy] could not record the NSS check of ${C}: ${(0, import_chunk_jv7av99m.d)(B)}; the next start will run certutil again`);
      });
      else if (P !== void 0) (0, import_chunk_w578pjby.t)(`[agent-proxy] NSS check of ${C} not recorded: the directory ${R === void 0 ? `has an entry that is not a regular file, more than ${zr} entries or ${Qr / 1024 / 1024} MiB, or it or certutil could not be read` : "changed or became unreadable during the check"}; the next start will run certutil again`);
      continue;
    }
    if (v === "was_there") await ae(o, ["-D", "-d", A, "-n", "ccr-agent-proxy"]), await ae(o, ["-D", "-d", A, "-n", "ccr-agent-proxy-2"]);
    let k = Wr(A, "ccr-agent-proxy", e), E = await ae(o, k);
    if (!E.ok) await ae(o, ["-N", "--empty-password", "-d", A]), E = await ae(o, k);
    if (E.ok) {
      if ((0, import_chunk_w578pjby.t)(`[agent-proxy] MITM CA added to NSS DB at ${C}`), p !== void 0) {
        let B = await ae(o, Wr(A, "ccr-agent-proxy-2", b));
        if (!B.ok) (0, import_chunk_w578pjby.t)(`[agent-proxy] could not add the second certificate to the NSS DB at ${C}: ${B.detail}; it holds the first only`), c.push("nss_second_add_failed");
      }
    } else (0, import_chunk_w578pjby.t)(`[agent-proxy] certutil -A failed for ${C}: ${E.detail}`), c.push("nss_add_failed");
  }
  return await (0, import_promises7.unlink)(b).catch(() => {
  }), { unchanged: y, byRecord: h };
}
function Xa(e, n) {
  let r = (0, import_crypto5.createHash)("sha256").update(n).digest("hex").slice(0, 16);
  return (0, import_path4.join)(e, `nssdb-${r}${Ha}`);
}
async function Ur(e, n, r) {
  let o = (0, import_crypto5.createHash)("sha256");
  o.update(`${n.length}\0`);
  for (let i of n.map((c) => pt(c).toString("base64")).sort()) o.update(`${i}\0`);
  try {
    let i = await (0, import_promises7.stat)(r);
    o.update(`${r}\0${i.size}\0${i.mtimeMs}\0`);
    let c = (await (0, import_promises7.readdir)(e)).sort();
    if (c.length > zr) return;
    let y = Qr;
    for (let h of c) {
      let g = await ao((0, import_path4.join)(e, h), y);
      if (g === void 0) return;
      y -= g.length, o.update(`${h}\0${g.length}\0`), o.update(g);
    }
  } catch {
    return;
  }
  return o.digest("hex");
}
function Wr(e, n, r) {
  return ["-A", "-d", e, "-t", "C,,", "-n", n, "-i", r];
}
async function Ja(e, n, r, o) {
  let i = await ae(e, ["-L", "-d", n]);
  if (!i.ok) return false;
  let c = i.stdout.split(`
`).map((b) => b.trim().split(/\s+/)), y = ["ccr-agent-proxy", "ccr-agent-proxy-2"];
  for (let [b, T] of y.entries()) {
    let C = c.filter((A) => A.length === 2 && A[0] === T).map((A) => A[1]), v = b < r.length ? 1 : 0;
    if (C.length !== v || C.some((A) => A !== "C,,")) return false;
  }
  let h = /* @__PURE__ */ new Set();
  for (let b of y.slice(0, r.length)) {
    let T = await qr(e, n, b);
    if (!T.ok) return false;
    for (let C of T.stdout.match(import_chunk_3jjr3wje.yI) ?? []) h.add(pt(C).toString("base64"));
  }
  let g = new Set(r.map((b) => pt(b).toString("base64")));
  if (h.size !== g.size || ![...g].every((b) => h.has(b))) return false;
  if (r.length === y.length || !o) return true;
  let p = await qr(e, n, "ccr-agent-proxy-2");
  return !p.ok && p.exited;
}
function qr(e, n, r) {
  return ae(e, ["-L", "-d", n, "-n", r, "-a"], void 0, "/");
}
async function Ka(e, n, r) {
  let o = `[Boto]
ca_certificates_file = ${e}
`;
  try {
    await (0, import_promises7.writeFile)(n, o, { flag: "wx", mode: 420 }), (0, import_chunk_w578pjby.t)(`[agent-proxy] wrote ${n} for gsutil trust`);
  } catch (i) {
    if ((0, import_chunk_jv7av99m.w)(i) === "EEXIST") return;
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not write ${n}: ${(0, import_chunk_jv7av99m.d)(i)}`), r.push("boto_write_failed");
  }
}
async function Va(e, n, r) {
  if (!e.hasSystemCa) {
    await (0, import_promises7.unlink)(n).catch(() => {
    });
    return;
  }
  let o = ["# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env", "# vars for login shells that start from a scrubbed environment. Each", "# export is set-if-absent so an explicit value in the shell wins.", "# HTTPS_PROXY is intentionally NOT set here: the relay port is", "# ephemeral and persisting it would break all HTTPS in login shells", "# once the relay process exits. Scrubbed login shells dial direct.", `if [ -r ${uo(e.caBundlePath)} ]; then`];
  for (let c of [...import_chunk_gd77dyw4.WDo, ...import_chunk_gd77dyw4.jDo]) o.push("  " + jr(c, e.caBundlePath));
  for (let [c, y] of Object.entries(import_chunk_gd77dyw4.R6e)) o.push("  " + jr(c, y));
  o.push("fi");
  let i = o.join(`
`) + `
`;
  try {
    return await (0, import_promises7.mkdir)((0, import_path4.dirname)(n), { recursive: true }), await (0, import_promises7.writeFile)(n, i, { mode: 420 }), (0, import_chunk_w578pjby.t)(`[agent-proxy] wrote ${n} for login-shell trust`), n;
  } catch (c) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not write ${n}: ${(0, import_chunk_jv7av99m.d)(c)}`), r.push("profile_d_write_failed");
    return;
  }
}
function jr(e, n) {
  return `if [ -z "\${${e}:-}" ]; then ${e}=${uo(n)}; fi; export ${e}`;
}
function uo(e) {
  return `'${e.replace(/'/g, "'\\''")}'`;
}
function We(e) {
  let n = e.match(import_chunk_3jjr3wje.yI) ?? [];
  return n.length === 2 && n[1] !== n[0] ? n[1] : void 0;
}
function pt(e) {
  return Buffer.from(e.replace(/-----(?:BEGIN|END) CERTIFICATE-----/g, ""), "base64");
}
async function ae(e, n, r, o) {
  let i = await (0, import_chunk_7fsmgfxx.kt)(e, n, { timeout: 2e4, preserveOutputOnError: true, useCwd: false, cwd: o, env: r });
  if (i.code === 0) return { ok: true, exited: true, stdout: i.stdout, detail: "" };
  return { ok: false, exited: i.exitCode !== void 0, stdout: i.stdout, detail: `${i.error ?? `exit ${i.code}`} ${i.stderr.slice(0, 200)}`.trim() };
}
var co = 4194304, es = 1048576, ts = 8, ns = /^https:\/\/([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)(?::443)?(?:\/[A-Za-z0-9._~!$&'()*+,;=:%/-]*)?$/;
async function fo(e) {
  let n = await Promise.all([...(0, import_chunk_1z1bgjzv.PSr)(import_chunk_c203g5kd.s.GIT_CONFIG_NOSYSTEM) ? [] : ["--system"], ...import_chunk_c203g5kd.s.GIT_CONFIG_GLOBAL ? ["--global"] : []].map((h) => (0, import_chunk_7fsmgfxx.ut)("git", ["config", h, "--includes", "-z", "--get-regexp", "^http\\.(.+\\.)?sslcainfo$"], { timeout: 5e3, cwd: e.gitCwd, maxBuffer: 262144 }))), r = [];
  for (let h of n.flatMap((g) => g.code === 0 ? g.stdout.split("\0") : [])) {
    let g = h.indexOf(`
`), p = g === -1 ? "" : h.slice(g + 1), b = p.startsWith("~/") ? (0, import_path5.join)((0, import_os3.homedir)(), p.slice(2)) : p, T = g === -1 ? "" : h.slice(5, g - 10), C = ns.exec(T)?.[1]?.toLowerCase();
    if ((T === "" || C !== void 0 && e.governedHosts.includes(C)) && (0, import_path5.isAbsolute)(b) && b !== e.caBundlePath && !e.skipPaths.has(b) && !r.includes(b) && r.length < ts) r.push(b);
  }
  let o = [], i = 0;
  for (let h of r) {
    let g = await (0, import_chunk_wsjqx1vt.DGo)(h, es);
    if (g.kind === "text" && i + g.text.length <= co) i += g.text.length, o.push({ source: "git_config", text: g.text });
  }
  let c = "", y = (0, import_chunk_cg8dqz0a.x)();
  if (y === "linux" || y === "wsl") try {
    let h = (0, import_chunk_w1d7ygsk.ft)("tls");
    c = h.getCACertificates?.("system").join(`
`) ?? "";
  } catch (h) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not list the system CA store: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "warn" });
  }
  if (c !== "" && i + c.length <= co) o.push({ source: "system_store", text: c });
  return o;
}
var Y2l = "/run/ccr/session_token", Bo = ["/etc/ssl/certs/ca-certificates.crt", "/etc/pki/tls/certs/ca-bundle.crt", "/etc/ssl/cert.pem"], X2l = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "169.254.0.0/16", "api.anthropic.com", "api-staging.anthropic.com", "api-pr-preview.anthropic.com", "mcp-proxy.anthropic.com", "mcp-proxy-staging.anthropic.com", ...Rn, "host.docker.internal"], MGo = [...X2l, "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local"].join(","), J2l = ["127.0.0.1", "localhost", "::1", "127.0.0.0/8", "0.0.0.0/8", "169.254.0.0/16", "host.docker.internal", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local"].join(","), Q2l = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "host.docker.internal", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10"].join(","), hYl = ["169.254.0.0/16", ".svc.cluster.local", "*.svc.cluster.local"].join(",");
class Oo {
  state = { enabled: false, noProxy: MGo };
  relay = void 0;
  generation = 0;
  callerSecretRemoval = Promise.resolve();
  toldOfBuiltInGh = false;
  activate(e, n) {
    this.state = e, this.relay = n, (0, import_chunk_bzyb60p0.Cai)(true);
  }
  reset() {
    this.generation++, this.state = { enabled: false, noProxy: MGo }, (0, import_chunk_bzyb60p0.oQt)(void 0), (0, import_chunk_bzyb60p0.rJr)(void 0), (0, import_chunk_kmbc34js.Kyo)(void 0), (0, import_chunk_bzyb60p0.Cai)(false), this.relay?.stop(), this.relay = void 0;
  }
}
var Z2l = new import_chunk_2904xtvq.j(() => new Oo());
function xe() {
  return Z2l.of((0, import_chunk_f9x2f6cx.N)().host);
}
async function gYl(e) {
  let n = xe();
  n.toldOfBuiltInGh = false;
  try {
    return await fs(e);
  } catch (r) {
    throw Oe(Ce(), "init_threw"), r;
  } finally {
    if ((0, import_chunk_6e68m1dj.KQi)() && !n.toldOfBuiltInGh) Be(true, "offer_set_aside");
  }
}
async function fs(e) {
  let n = xe();
  import_chunk_c203g5kd.s.unset("AGENT_PROXY_URL"), import_chunk_c203g5kd.s.unset("AGENT_PROXY_AUTH_TOKEN");
  let r = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_RELAY_MODE, o = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_INCLUDE_HOSTS, i = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED, c = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED, y = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_MAX_BUSY_TUNNELS, h = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_CONNECTION_LIMITS_DISABLED, g = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY, p = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_CA_WATCH_ENABLED, b = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_CA_CERT_B64;
  if (import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_RELAY_MODE"), import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_INCLUDE_HOSTS"), import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED"), import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED"), import_chunk_c203g5kd.s.unset("CCR_AGENT_PROXY_CA_CERT_B64"), !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return n.state;
  if (Lo()) {
    if ((0, import_chunk_w578pjby.t)("[agent-proxy] not the session's own claude: the session's relay carries its git, and none is started here"), import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROXY_GH_SHIM) await gs(n, e?.caBundlePath ?? rn(), e?.pathProbeBudgetMs ?? nn);
    return n.state;
  }
  let T = performance.now(), C;
  if (r === import_chunk_ybxa8kcj.ovn || (0, import_chunk_ybxa8kcj.l6r)()) {
    let te = (0, import_chunk_ybxa8kcj.r4s)();
    if (te === void 0 || !gn()) return (0, import_chunk_w578pjby.t)("[agent-proxy] the agent proxy standalone relay mode is set; hosted relay not started"), n.state;
    (0, import_chunk_w578pjby.t)("[agent-proxy] the agent proxy standalone relay mode is set; governed git goes through its forwarder, and no relay is started"), C = { kind: "standalone", proxyUrl: te };
  } else {
    if (!import_chunk_c203g5kd.s.CCR_AGENT_PROXY_ENABLED && !Ce()) return n.state;
    if (Ce() && !await _s(e?.caBundlePath ?? rn(), yo(r, o), e?.pathProbeBudgetMs ?? nn)) return (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_only", "withheld"), n.state;
    let te = (0, import_chunk_j4z7srhg.ec)(), ue, oe = process.env.CLAUDE_CODE_REMOTE_SESSION_ID, Q = "sessionIngressAuth";
    if (te) {
      if (ue = e?.toolContainerToken, ue === void 0) return (0, import_chunk_w578pjby.t)("[agent-proxy] a tool container's daemon was handed no token (CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR, or agent_proxy_token with --session-tunnel); proxy disabled"), n.state;
      oe = "tool-container", Q = "the launcher";
    }
    if (!oe) return (0, import_chunk_w578pjby.t)("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("agent_proxy_init", "agent_proxy_init_no_session_id"), Oe(Ce(), "no_session_id"), n.state;
    let ce = e?.tokenPath ?? Y2l, Ye = te ? { existed: false, token: ue ?? null } : await As(ce), { existed: Xe, token: we } = Ye;
    if (!we && !te) we = (0, import_chunk_5rd4zsth.Nc)();
    if (!we) return (0, import_chunk_w578pjby.t)("[agent-proxy] no session token; proxy disabled"), (0, import_chunk_cqa9hrgx.m)("agent_proxy_init", "agent_proxy_init_no_token"), Oe(Ce(), "no_token"), n.state;
    (0, import_chunk_w578pjby.t)(`[agent-proxy] token via ${Xe ? ce : Q}`), (0, import_chunk_qct54h38.Ete)((bt) => (0, import_chunk_w578pjby.t)(`[agent-proxy] ${bt}`, { level: "warn" })), C = { kind: "relay", sessionId: oe, token: we, tokenIsHandedOver: te, unlinkTokenPath: Xe ? ce : void 0 };
  }
  let v = e?.ccrBaseUrl ?? (0, import_chunk_t9fn978c.wkt)() ?? "https://api.anthropic.com", A = e?.caBundlePath ?? (mo() ? rn() : (0, import_path.join)((0, import_os.homedir)(), ".ccr", "ca-bundle.crt")), P = e?.systemCaPath ? await (0, import_promises.readFile)(e.systemCaPath, "utf8").catch(() => "") : await cCa(), R = /* @__PURE__ */ new Set(), k = (0, import_chunk_3jjr3wje.hJe)(P, "agent proxy trust", void 0, R) ?? "", E = await Es(k, A, R, C.kind === "standalone"), B = E ? `${k}
${E}` : k, re = k === P ? 0 : (P.match(import_chunk_3jjr3wje.yI)?.length ?? 0) - (k.match(import_chunk_3jjr3wje.yI)?.length ?? 0);
  if (R.size > 0) (0, import_chunk_w578pjby.t)(`[agent-proxy] Kept ${R.size} certificate block(s) in the proxy's CA bundle without checking their keys against the deny list, because this runtime could not parse them or read their keys`);
  for (let [te, ue] of [[(0, import_chunk_78g0060s.S)("unjudged"), R.size], [(0, import_chunk_78g0060s.S)("cut"), re]]) if (ue > 0) (0, import_chunk_y53wbr8a.a)("tengu_agent_proxy_ca_filter", { reason: te, count: ue });
  let D;
  if (b !== void 0 && (0, import_chunk_k449cc64.wt)()) (0, import_chunk_w578pjby.t)("[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: essential traffic only; fetching the CA as before");
  else if (b !== void 0) {
    let te = nGl(b);
    if (te.ok) D = te.pem;
    else (0, import_chunk_w578pjby.t)(`[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: ${te.reason}; fetching the CA instead`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_init", "agent_proxy_init_ca_env_invalid");
  }
  let F = mo(), W = D !== void 0 ? "env" : "fetch", U = { budgetMs: e?.pathProbeBudgetMs ?? nn, caSource: W }, G = F ? void 0 : Ss(U), L = yo(r, o);
  if (r === "selective") if (L) (0, import_chunk_w578pjby.t)(`[agent-proxy] selective relay: ${L.includeHosts.length} include hosts; unlisted use normal networking`);
  else (0, import_chunk_w578pjby.t)("[agent-proxy] CCR_AGENT_PROXY_RELAY_MODE=selective but include-host list is empty/unparsable \u2014 FAIL-CLOSED to tunnel-all", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_init", "agent_proxy_selective_empty_include");
  let pe = C.kind === "relay" && Ce(), de = Q2l, Pe = { runtime: n, generation: n.generation, route: C, baseUrl: v, caBundlePath: A, systemCa: P, localCa: B, hasSystemCa: k !== "", governedGitTools: F, ghOnly: pe, selective: L, noProxy: g ? de : L ? J2l : MGo, bundleCoversEveryHost: k !== "", receiveGateDisabled: Boolean(i), uploadGateDisabled: Boolean(c), maxBusyTunnels: y, connectionLimitsDisabled: Boolean(h), caWatchEnabled: Boolean(p), pathProbes: U, installedClisScan: G, envCa: D, caSource: W, opts: e && { ...e, toolContainerToken: void 0 } };
  (0, import_chunk_zjhyjv3y.zo)("agent_proxy_inputs_ms", performance.now() - T, T);
  let Ae = await Do(Pe, 1);
  if (Mo(Pe, Ae, "first"), C.kind === "standalone" && Ae.outcome === "fatal") (0, import_chunk_bzyb60p0.oQt)(Io);
  if (Ae.outcome === "retry") (0, import_chunk_cqa9hrgx.l)("agent_proxy_init", "agent_proxy_init_ca_exhausted_retrying", { ca_source: (0, import_chunk_78g0060s.f)(W) }), ps(Pe, Ae).catch((te) => {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] retry loop crashed: ${(0, import_chunk_jv7av99m.d)(te)}; proxy stays disabled`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("agent_proxy_init", "agent_proxy_init_retry_loop_crashed"), Oe(pe, "retry_loop_crashed");
  });
  return n.state;
}
var Io = "Anthropic-managed GitHub access through this session's proxy could not be set up: git and gh may fail TLS verification against github.com. Never disable TLS verification or edit the git config file named by $GIT_CONFIG_GLOBAL to get past it; tell the user that GitHub access is not available in this session.", tn = 3e5, No = 36e5;
function an(e, n) {
  if (e.generation !== n || e.state.enabled || (0, import_chunk_w578pjby.c_)()) return "exit";
  return (0, import_chunk_bzyb60p0.Zr)() ? "defer" : null;
}
function dCa(e, n) {
  return (0, import_chunk_865at33z.NN)(e - 1, ((0, import_chunk_865at33z.AGe)(n) ?? 0) > tn ? String(tn / 1e3) : n, tn);
}
async function ps(e, n) {
  let { runtime: r, generation: o, caSource: i, opts: c } = e, y = Date.now(), h = c?.retryBadAfterMs ?? No, g = false;
  for (let p = 2; ; p++) {
    let b = c?.retryDelayMs?.(p) ?? dCa(p, n.retryAfter);
    (0, import_chunk_w578pjby.t)(`[agent-proxy] ${n.detail}; attempt ${p} in ${(b / 1e3).toFixed(1)}s`, { level: "warn" }), await (0, import_chunk_5appeerh.K)(b, void 0, { unref: true });
    let T = an(r, o);
    if (T === "exit") return;
    if (T === "defer") continue;
    let C = await Do(e, p);
    if (Mo(e, C, "later"), C.outcome !== "retry") return;
    if (n = C, !g && Date.now() - y >= h) g = true, (0, import_chunk_w578pjby.t)(`[agent-proxy] ${n.detail}; still failing after ${p} attempts over ${Math.round((Date.now() - y) / 6e4)} min \u2014 counting as exhausted, retrying anyway`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("agent_proxy_init", "agent_proxy_init_ca_exhausted", { ca_source: (0, import_chunk_78g0060s.f)(i) });
  }
}
async function go(e, n) {
  if (n !== void 0) await (0, import_chunk_v684xj67.Wws)(e, n).catch(() => {
  });
}
async function Do(e, n) {
  let { runtime: r, route: o, baseUrl: i, caBundlePath: c, systemCa: y, localCa: h, hasSystemCa: g, governedGitTools: p, ghOnly: b, selective: T, noProxy: C, bundleCoversEveryHost: v, receiveGateDisabled: A, uploadGateDisabled: P, maxBusyTunnels: R, connectionLimitsDisabled: k, caWatchEnabled: E, pathProbes: B, installedClisScan: re, envCa: D, caSource: F, opts: W } = e, U = (oe, Q) => {
    if (n === 1) (0, import_chunk_zjhyjv3y.zo)(oe, performance.now() - Q, Q);
  }, G = b ? mt() : void 0;
  if (G !== void 0) return { outcome: "fatal", builtInGh: G };
  let L;
  if (D !== void 0) L = D;
  else {
    let oe = performance.now(), Q = await bn(i, { budgetMs: W?.caFetchBudgetMs ?? (n === 1 ? 5e3 : 15e3), tries: n === 1 ? 3 : 1, viaStandaloneProxy: o.kind === "standalone" });
    if (U("agent_proxy_ca_fetch_ms", oe), Q.outcome !== "ok") return Po(Q, F);
    L = Q.ccrCa;
  }
  let pe = performance.now(), de = await Tn(h, L, c);
  if (de.outcome !== "ok") return U("agent_proxy_trust_write_ms", pe), Po(de, F);
  if (!p) await Fs(W?.awsConfigPath ?? (0, import_path.join)((0, import_os.homedir)(), ".aws", "config"));
  if (U("agent_proxy_trust_write_ms", pe), o.kind === "standalone") {
    let oe = an(r, e.generation);
    if (oe) return oe === "exit" ? { outcome: "stale" } : { outcome: "retry", detail: "shutdown claimed during bring-up", retryAfter: null };
    let Q = { enabled: true, caBundlePath: c, hasSystemCa: g, bundleCoversEveryHost: v, noProxy: C, selective: false, governedGitTools: true };
    r.state = Q, r.relay = void 0;
    let ce = await ho(Q, c, o, T, B);
    if (r.state !== Q) return { outcome: "stale" };
    return (0, import_chunk_bzyb60p0.rJr)(sn(Q)), (0, import_chunk_w578pjby.t)(`[agent-proxy] governed git routed through the agent proxy standalone forwarder (CA from ${F})`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_init", { attempts: n, ca_source: (0, import_chunk_78g0060s.f)(F), standalone: true }), (0, import_chunk_bzyb60p0.oQt)(import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG && !ce ? Io : ht(c, void 0)), { outcome: "ok" };
  }
  let { sessionId: Pe, token: Ae, tokenIsHandedOver: te, unlinkTokenPath: ue } = o;
  try {
    let oe = i.replace(/^http/, "ws") + import_chunk_865at33z.aAs + "/ws", Q = (0, import_chunk_bzyb60p0.Oai)(c), ce = Ae ?? "", Ye = performance.now(), Xe = await re, we, bt = () => we ??= xs().catch(() => []).finally(() => {
      we = void 0;
    }), Ne = b ? (0, import_chunk_v684xj67.nEl)() : void 0, $e = await lr({ wsUrl: oe, sessionId: Pe, token: ce, getToken: te ? () => ce : () => (0, import_chunk_5rd4zsth.Nc)() || ce, selective: T, carriesOnly: b ? ln : void 0, limits: { ...A && { receiveHighWater: 1 / 0 }, ...P && { sendPauseAfterPendingBytes: 1 / 0, sendStallTimeoutMs: 1 / 0 }, ...k && { maxClientConnections: 1 / 0, requestHeadTimeoutMs: 1 / 0 } }, tunnelGateLimits: { ...R !== void 0 && { maxBusyTunnels: R } }, statusProvider: async () => {
      if (b) return hs(r.state);
      let I = await bt();
      if (I.length > 0) (0, import_chunk_w578pjby.t)(`[agent-proxy] git config may defeat proxy routing: ${I.join(", ")}`, { level: "warn" });
      return { ...r.state, ...I.length > 0 && { gitConfigConflicts: I }, readmePath: Q, gitConfigInjection: un(), gitSshRewrite: un() && mn() };
    }, onFailure: import_chunk_bzyb60p0.lja, onConnectAnswer: import_chunk_bzyb60p0.dja, callerSecret: Ne, maySend: b ? () => mt() === void 0 : void 0 });
    if (Ne !== void 0) {
      if (await r.callerSecretRemoval, !await (0, import_chunk_v684xj67.rEl)(c, $e.port, Ne)) return $e.stop(), { outcome: "fatal", builtInGh: "secret_not_written" };
    }
    let se = { ...$e, stop: () => {
      $e.stop(), r.callerSecretRemoval = go(c, Ne);
    } }, Sn = (0, import_chunk_w578pjby.Ct)(async () => {
      $e.stop(), await go(c, Ne);
    }), z = { enabled: true, port: se.port, caBundlePath: c, hasSystemCa: g, bundleCoversEveryHost: v, noProxy: C, selective: Boolean(T), governedGitTools: p, ...b && { ghOnly: b }, installedProxyPreconfiguredClis: Xe };
    U("agent_proxy_relay_up_ms", Ye);
    let Cn = an(r, e.generation);
    if (Cn) return se.stop(), Sn(), Cn === "exit" ? { outcome: "stale" } : { outcome: "retry", detail: "shutdown claimed during bring-up", retryAfter: null };
    if (r.activate(z, se), !T && !p) (0, import_chunk_kmbc34js.Kyo)({ proxyUrl: _e(se.port), gatewayCa: L });
    if (p) await ho(z, c, { kind: "relay", port: se.port }, T, B, b);
    else {
      let I = await hn({ kind: "relay", port: se.port }, c, Pe, T, B).catch((Me) => {
        (0, import_chunk_w578pjby.t)(`[agent-proxy] gh stand-in shim write failed: ${(0, import_chunk_jv7av99m.d)(Me)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", "arm_failed");
        return;
      });
      if (I) z.ghShimDir = I.shimDir, z.ghStandin = I.standin, z.ghStandinEnterprise = I.enterprise, z.ghStandinAnyHost = I.anyHost, z.ghStandinNoJq = I.noJq;
    }
    if (r.state !== z) return { outcome: "stale" };
    if (b && !z.ghStandin) {
      Sn(), r.reset();
      let I = await je("gh PATH probe", () => _t("gh", (0, import_path.join)(c, "..", "bin")), B);
      return { outcome: "fatal", builtInGh: "failure" in I || I.value === void 0 ? "not_written" : "gh_installed" };
    }
    if (se.runStartupChecks(), (0, import_chunk_bzyb60p0.rJr)(sn(z)), (0, import_chunk_w578pjby.t)(`[agent-proxy] enabled on 127.0.0.1:${se.port} (CA from ${F})`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_init", { attempts: n, ca_source: (0, import_chunk_78g0060s.f)(F) }), b) (0, import_chunk_cqa9hrgx.u)("agent_proxy_gh_only"), (0, import_chunk_bzyb60p0.oQt)(import_chunk_bzyb60p0.Eja);
    else (0, import_chunk_bzyb60p0.oQt)(ht(c, void 0)), (0, import_promises.writeFile)(Q, Ps(se.port, c), "utf8").then(() => {
      if (r.state !== z) return;
      if ((0, import_chunk_bzyb60p0.oQt)(ht(c, Q)), !p) (0, import_chunk_bzyb60p0.aja)(Q);
    }).catch((I) => {
      if ((0, import_chunk_w578pjby.t)(`[agent-proxy] README write failed: ${I instanceof Error ? I.message : String(I)}`), r.state !== z) return;
      (0, import_chunk_bzyb60p0.oQt)(ht(c, void 0));
    });
    let xn = _n(c), Le = false;
    if (!p && F === "env") {
      let I = await ge(xn);
      Le = I.state === "read" && be(I.text, L) !== "same" && uCa(y, I.text);
    }
    let Ke = p || Le ? void 0 : wn(e, L, xn), Tt = Le ? Promise.withResolvers() : void 0, Ve, Pn = false;
    if (W?.toolTrust !== false && !p) Ve = gt({ ccrCa: L, caBundlePath: c, hasSystemCa: z.hasSystemCa ?? false, stateDir: (0, import_path.join)(c, ".."), systemTrust: Ke ?? Tt?.promise, ...W?.toolTrust ?? {} }).then((I) => {
      if (r.state !== z) return;
      if (yn(z, I), I.profileDPath) {
        let Me = I.profileDPath;
        (0, import_chunk_w578pjby.Ct)(() => (0, import_promises.unlink)(Me).catch(() => {
        }));
      }
      if (I.failureCodes.length > 0) z.toolTrustFailureCodes = I.failureCodes;
    }).catch((I) => {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] tool trust setup failed: ${I instanceof Error ? I.message : String(I)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_tool_trust", "setup_threw"), Pn = true;
    });
    let ze = { ccrCa: L, systemTrust: Ke, toolTrust: Ve, installIncomplete: false, installRetries: 0 };
    if (E && !p) Promise.all([Ke, Ve]).then(async ([I]) => {
      let Me = W?.toolTrust === false || await Fo(c, L);
      if (r.state === z && ze.ccrCa === L) ze.installIncomplete = Le || Pn || !Me || Uo(I, z.toolTrustFailureCodes ?? []);
    }).catch(() => {
    });
    let An = !T && !p, vn;
    if (F === "env") vn = Ms(e, z, L, { systemTrust: Ke, toolTrust: Ve, installDeferred: Le, onInstallSettled: () => Tt?.resolve(), embeddedEndpoint: An, relayPort: se.port, ...E && { trust: ze } }).catch((I) => {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] CA reconcile crashed: ${(0, import_chunk_jv7av99m.d)(I)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_reconcile", "reconcile_threw");
    }).finally(() => Tt?.resolve());
    let En = W?.caWatchIntervalMs ?? $s;
    if (E && !p && En > 0) Gs(e, z, ze, { intervalMs: En, afterStart: vn, embeddedEndpoint: An, relayPort: se.port }).catch((I) => {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] CA watch crashed: ${(0, import_chunk_jv7av99m.d)(I)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_watch", "watch_threw");
    });
    if (ue) await (0, import_promises.unlink)(ue).catch(() => {
      (0, import_chunk_w578pjby.t)("[agent-proxy] token file unlink failed", { level: "warn" });
    });
    return { outcome: "ok" };
  } catch (oe) {
    return (0, import_chunk_w578pjby.t)(`[agent-proxy] relay start failed: ${oe instanceof Error ? oe.message : String(oe)}; proxy disabled`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("agent_proxy_init", "agent_proxy_init_relay_start_failed"), { outcome: "fatal" };
  }
}
async function gs(e, n, r) {
  let { generation: o } = e, i = await hn(void 0, n, void 0, void 0, { budgetMs: r, caSource: "env" }).catch((c) => {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] the session's gh shim is not used: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "warn" });
    return;
  });
  if (!i || e.generation !== o) return;
  e.state = { enabled: true, caBundlePath: n, noProxy: MGo, governedGitTools: true, ghShimDir: i.shimDir, ghStandin: i.standin, ghStandinEnterprise: i.enterprise, ghStandinAnyHost: i.anyHost, ghStandinNoJq: i.noJq }, (0, import_chunk_bzyb60p0.rJr)(sn(e.state));
}
function sn(e) {
  return e.ghStandin ? (0, import_chunk_bzyb60p0.vja)({ enterprise: e.ghStandinEnterprise === true, anyHost: e.ghStandinAnyHost === true, noJq: e.ghStandinNoJq === true, runner: e.governedGitTools === true, ghOnly: e.ghOnly === true }) : void 0;
}
async function ho(e, n, r, o, i, c = false) {
  let y = false, [h, g] = await Promise.all([import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG && !c ? bs(r, n).catch((p) => ((0, import_chunk_w578pjby.t)(`[agent-proxy] governed git config append failed: ${(0, import_chunk_jv7av99m.d)(p)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_tool_scoped", "git_config_append_failed"), y = true, false)) : false, import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROXY_GH_SHIM || c ? hn(r, n, void 0, o, i, c).catch((p) => {
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] gh shim write failed: ${(0, import_chunk_jv7av99m.d)(p)}`, { level: "warn" }), !c) (0, import_chunk_cqa9hrgx.l)("agent_proxy_tool_scoped", "gh_shim_write_failed");
    (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", "arm_failed"), y = true;
    return;
  }) : void 0]);
  if (g) e.ghShimDir = g.shimDir, e.ghStandin = g.standin, e.ghStandinEnterprise = g.enterprise, e.ghStandinAnyHost = g.anyHost, e.ghStandinNoJq = g.noJq;
  if (!y && !c) (0, import_chunk_cqa9hrgx.u)("agent_proxy_tool_scoped", { git_config: h, gh_shim: Boolean(g) });
  return h;
}
var $o = [{ clis: ["gh"], realCredentialEnv: ["GH_TOKEN", "GITHUB_TOKEN"], placeholders: { GH_TOKEN: import_chunk_r6r2wdsw.BX, GITHUB_TOKEN: import_chunk_r6r2wdsw.BX } }, { clis: ["aws"], realCredentialEnv: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_PROFILE", "AWS_SHARED_CREDENTIALS_FILE", "AWS_CONFIG_FILE", "AWS_WEB_IDENTITY_TOKEN_FILE", "AWS_ROLE_ARN", "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "AWS_CONTAINER_CREDENTIALS_FULL_URI"], placeholders: { AWS_ACCESS_KEY_ID: import_chunk_r6r2wdsw.BX, AWS_SECRET_ACCESS_KEY: import_chunk_r6r2wdsw.BX } }, { clis: ["gcloud", "bq", "gsutil"], realCredentialEnv: ["CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_APPLICATION_CREDENTIALS"], placeholders: { CLOUDSDK_AUTH_ACCESS_TOKEN: import_chunk_r6r2wdsw.BX } }], Qzr = $o.flatMap((e) => Object.keys(e.placeholders)), nn = 1e3;
function me(e) {
  return (0, import_chunk_r6r2wdsw.e2)(e)?.trim() || void 0;
}
function _Yl() {
  let e = xe().state;
  if (!e.enabled || !e.port || !e.caBundlePath || e.governedGitTools || !e.bundleCoversEveryHost) return null;
  return { proxyUrl: _e(e.port), noProxy: e.noProxy, caBundlePath: e.caBundlePath };
}
function yYl() {
  let e = xe().state;
  if (e.enabled && e.governedGitTools) {
    let o = {};
    if (e.ghShimDir) {
      let i = (0, import_chunk_r6r2wdsw.e2)("PATH") ?? "";
      if (o.PATH = i ? `${e.ghShimDir}${import_path.delimiter}${i}` : e.ghShimDir, e.ghStandin && i) o.PATH = `${i}${import_path.delimiter}${e.ghShimDir}`;
    }
    return o;
  }
  if (!e.enabled || !e.port || !e.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE && !Lo()) {
      let o = {};
      for (let i of ["HTTPS_PROXY", "https_proxy", "NO_PROXY", "no_proxy", ...import_chunk_gd77dyw4.vOe]) if (process.env[i]) o[i] = process.env[i];
      for (let i of [...Object.keys(import_chunk_gd77dyw4.R6e), ...Qzr]) {
        let c = (0, import_chunk_r6r2wdsw.e2)(i);
        if (c) o[i] = c;
      }
      return o;
    }
    return {};
  }
  let n = _e(e.port), r = { HTTPS_PROXY: n, https_proxy: n, NO_PROXY: e.noProxy, no_proxy: e.noProxy };
  for (let o of import_chunk_gd77dyw4.WDo) r[o] = e.caBundlePath;
  if (e.bundleCoversEveryHost) {
    for (let o of import_chunk_gd77dyw4.jDo) r[o] = e.caBundlePath;
    for (let [o, i] of Object.entries(import_chunk_gd77dyw4.R6e)) if ((0, import_chunk_r6r2wdsw.e2)(o) === void 0) r[o] = i;
  }
  if (e.javaTrustStorePath && e.javaTrustStoreType) r.JAVA_TOOL_OPTIONS = eo(e.javaTrustStorePath, e.javaTrustStoreType, me("JAVA_TOOL_OPTIONS"));
  if (me("GIT_TERMINAL_PROMPT") === void 0) r.GIT_TERMINAL_PROMPT = import_chunk_7fsmgfxx.OEe.GIT_TERMINAL_PROMPT;
  if (me("GIT_ASKPASS") === void 0) r.GIT_ASKPASS = import_chunk_7fsmgfxx.OEe.GIT_ASKPASS;
  if (me("GCM_INTERACTIVE") === void 0) r.GCM_INTERACTIVE = import_chunk_7fsmgfxx.OEe.GCM_INTERACTIVE;
  if (un()) {
    let o = [["credential.interactive", "false"]];
    if (mn()) o.push(...import_chunk_43nz5n02.yra.map((i) => [`url.https://${import_chunk_43nz5n02.Vr}/.insteadOf`, i]));
    Object.assign(r, (0, import_chunk_7fsmgfxx.TB)(void 0, o));
  }
  for (let o of $o) if (!o.realCredentialEnv.some((c) => (0, import_chunk_r6r2wdsw.e2)(c))) Object.assign(r, o.placeholders);
  if (e.ghShimDir) r.PATH = [me("PATH"), e.ghShimDir].filter(Boolean).join(import_path.delimiter);
  return r;
}
function SYl() {
  let e = xe().state;
  return e.enabled && e.ghStandin ? e.ghShimDir : void 0;
}
function mo() {
  return gn() || Ce();
}
function gn() {
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG || import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROXY_GH_SHIM);
}
function Lo() {
  return gn() && (import_chunk_c203g5kd.s.CCR_AGENT_PROXY_ENABLED !== void 0 || (0, import_chunk_ybxa8kcj.l6r)()) && (0, import_chunk_2mwshd9r.mK)().status !== "ok" && !(0, import_chunk_j4z7srhg.ec)();
}
function Ce() {
  return (0, import_chunk_6e68m1dj.p1l)() && !import_chunk_c203g5kd.s.CCR_AGENT_PROXY_ENABLED;
}
function Be(e, n) {
  if (e) xe().toldOfBuiltInGh = true, process.stderr.write(`${(0, import_chunk_wsjqx1vt.fCa)(n)}
`);
}
function Oe(e, n) {
  if (e) (0, import_chunk_cqa9hrgx.m)("agent_proxy_gh_only", n), Be(true, "failed");
}
function hs({ enabled: e, port: n, noProxy: r, hasSystemCa: o, ghOnly: i, ghStandin: c, ghStandinNoJq: y }) {
  return { enabled: e, port: n, noProxy: r, hasSystemCa: o, ghOnly: i, ghStandin: c, ghStandinNoJq: y, carriesOnlyHosts: ln.hosts, carriesOnlyPorts: ln.ports };
}
function Mo(e, n, r) {
  switch (n.outcome) {
    case "ok":
      Be(e.ghOnly, "set_up");
      return;
    case "fatal":
      if (n.builtInGh === "gh_installed" || n.builtInGh === "essential_traffic_only" || n.builtInGh === "third_party_provider" || n.builtInGh === "github_tools_denied") {
        if (e.ghOnly) (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_only", "withheld");
        Be(e.ghOnly, n.builtInGh);
      } else Oe(e.ghOnly, n.builtInGh ?? "bring_up_failed");
      return;
    case "stale":
      if (r === "first") Oe(e.ghOnly, "stale_first_try");
      return;
    case "retry":
      if (r === "first") Be(e.ghOnly, "still_trying");
      return;
    default:
  }
}
var ln = { hosts: [new URL((0, import_chunk_43nz5n02.HEe)(import_chunk_43nz5n02.Vr)).hostname], ports: [443] };
function rn() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "ccr", "ca-bundle.crt");
}
function yo(e, n) {
  if (e !== "selective") return;
  let r = (n ?? "").split(",").map((o) => o.trim()).filter((o) => o.length > 0);
  return r.length > 0 ? { includeHosts: r } : void 0;
}
function mt() {
  if ((0, import_chunk_k449cc64.wt)()) return "essential_traffic_only";
  if (!(0, import_chunk_zhr7rpv7.jn)()) return "third_party_provider";
  return (0, import_chunk_6e68m1dj.m1l)() && ys() ? "github_tools_denied" : void 0;
}
var ms = { essential_traffic_only: "nonessential traffic is disabled", third_party_provider: "the session's model provider is not Anthropic's own API", github_tools_denied: "the session's settings restrict Claude's GitHub tools" };
function ys() {
  let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID ?? "";
  if ((0, import_fs.existsSync)((0, import_path.join)((0, import_chunk_6mfepmbb.Sb)(), "managed-mcp.json"))) return true;
  return (0, import_chunk_rmc00en4.Jsl)([...import_chunk_xzvhvaa2.Ts.map((n) => (0, import_chunk_2yx6c1y2.vl)(n)), ...(0, import_chunk_2yx6c1y2.kK)()], [process.env.ANTHROPIC_BASE_URL ?? "", "https://api.anthropic.com"].filter((n) => URL.canParse(n)).flatMap((n) => ["v2/ccr-sessions", "v1/code/sessions"].map((r) => new URL(`/${r}/${e}/github/mcp`, n).href)));
}
async function _s(e, n, r) {
  let o = (y, h) => ((0, import_chunk_w578pjby.t)(`[agent-proxy] the built-in gh is not offered: ${y}`), Be(true, h), false), i = mt();
  if (i !== void 0) return o(ms[i], i);
  if (!dn(n, import_chunk_43nz5n02.Vr)) return o("this pool's selective relay does not carry GitHub's API host", "relay_leaves_github_out");
  let c = await je("gh PATH probe", () => _t("gh", (0, import_path.join)(e, "..", "bin")), { budgetMs: r, caSource: "fetch" });
  if ("failure" in c) return o(c.failure.detail, "path_search_failed");
  return c.value === void 0 ? true : o("a gh is installed, and is left alone", "gh_installed");
}
var _o = "# >>> claude agent-proxy governed-git (auto-generated; do not edit) >>>", on = "# <<< claude agent-proxy governed-git <<<", ws = '"!f() { case $1 in get) echo quit=true ;; esac; }; f"';
function yt() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS;
  if (!e || e.trim() === "") return [import_chunk_43nz5n02.Vr];
  let n = [], r = 0;
  for (let o of e.split(",")) {
    let i = o.trim();
    if (i === "") continue;
    let c = (0, import_chunk_43nz5n02.yL)(i);
    if (c === "" || c.length > 255 || !import_chunk_43nz5n02.Xee.test(c)) {
      r++;
      continue;
    }
    let y = (0, import_chunk_43nz5n02.Ro)(c) ? import_chunk_43nz5n02.Vr : c;
    if (!n.includes(y)) n.push(y);
  }
  if (r > 0) (0, import_chunk_w578pjby.t)(`[agent-proxy] governed git: ignored ${r} governed-host ${(0, import_chunk_7cfjrnwy.O)(r, "entry", "entries")} that ${(0, import_chunk_7cfjrnwy.O)(r, "is", "are")} not a bare hostname`, { level: "warn" });
  return n;
}
async function bs(e, n) {
  let r;
  switch (e.kind) {
    case "relay":
      r = _e(e.port);
      break;
    case "standalone":
      r = e.proxyUrl;
      break;
  }
  let o = process.env.GIT_CONFIG_GLOBAL;
  if (!o) return (0, import_chunk_w578pjby.t)("[agent-proxy] governed git config arm set but GIT_CONFIG_GLOBAL is unset; skipping (refusing to write a shared global config)", { level: "warn" }), false;
  if ([n, r].some((p) => /[\n\r"]/.test(p))) return (0, import_chunk_w578pjby.t)("[agent-proxy] governed git: the CA bundle path or the proxy URL contains a newline or quote; skipping git config arm", { level: "warn" }), false;
  let i = yt();
  if (i.length === 0) return (0, import_chunk_w578pjby.t)("[agent-proxy] governed git: the governed-host list carried no usable host; skipping git config arm", { level: "warn" }), false;
  let c = [_o];
  for (let p of i) if (c.push(`[http "https://${p}/"]`, `	proxy = ${r}`, `	sslCAInfo = ${n}`, "	proactiveAuth = none", ...p === import_chunk_43nz5n02.Vr ? [] : ["	extraHeader =", "	cookieFile ="], `[credential "https://${p}/"]`, ...p === import_chunk_43nz5n02.Vr ? [] : ["	helper =", `	helper = ${ws}`], "	interactive = false"), p === import_chunk_43nz5n02.Vr && mn()) c.push(`[url "https://${import_chunk_43nz5n02.Vr}/"]`, ...import_chunk_43nz5n02.yra.map((b) => `	insteadOf = ${b}`));
  c.push(on);
  let y = "";
  try {
    y = await (0, import_promises.readFile)(o, "utf8");
  } catch (p) {
    if (!(0, import_chunk_jv7av99m.J)(p)) throw p;
  }
  let h = y.indexOf(_o);
  if (h !== -1) {
    let p = y.indexOf(on, h);
    y = p !== -1 ? y.slice(0, h) + y.slice(p + on.length).replace(/^\n/, "") : y.slice(0, h);
  }
  let g = y.length > 0 && !y.endsWith(`
`) ? y + `
` : y;
  return await (0, import_chunk_q7qjcthc.yr)(o, g + c.join(`
`) + `
`, 384), (0, import_chunk_w578pjby.t)(`[agent-proxy] governed git: relay routing for ${i.length} governed ${(0, import_chunk_7cfjrnwy.O)(i.length, "host")} appended to ${o}`), true;
}
async function _t(e, n) {
  let r = (import_chunk_c203g5kd.s.PATH ?? "").split(import_path.delimiter);
  for (let o of r) {
    if (!o || o === n) continue;
    let i = (0, import_path.join)(o, e);
    try {
      if (await (0, import_promises.access)(i, import_fs.constants.X_OK), (await (0, import_promises.stat)(i)).isFile()) return i;
    } catch {
    }
  }
  return;
}
async function je(e, n, { budgetMs: r, caSource: o }) {
  let i = `${e} timed out`, c = performance.now(), y = (0, import_chunk_f9x2f6cx.Y)(), h = y ? null : (0, import_chunk_4apy9zxp.lQn)(), g = y ? void 0 : (0, import_chunk_37r5t3h3.evn)(import_chunk_37r5t3h3.Zzr);
  try {
    return { value: await (0, import_chunk_5appeerh.qt)(n(), r, i) };
  } catch (p) {
    let b = h && (0, import_chunk_4apy9zxp.lQn)(), T = (0, import_chunk_jv7av99m.d)(p) === i, C = (0, import_chunk_jv7av99m.Cr)(p);
    return { failure: { timedOut: T, detail: T ? i : `${e} failed (${(0, import_chunk_jv7av99m.d)(p)})`, fields: { ca_source: (0, import_chunk_78g0060s.f)(o), ...C !== void 0 && { errno: C }, elapsed_ms: Math.round(performance.now() - c), ...g && { loop_lag_max_ms: Math.round(g.stop()) }, ...h && b && { cpu_delta_ms: Math.round(b.cpuTimeMs - h.cpuTimeMs), major_fault_delta: b.majorPageFaults - h.majorPageFaults } } } };
  } finally {
    g?.stop();
  }
}
async function Ss(e) {
  let n = /* @__PURE__ */ new Set(), r = await je("installed-CLI PATH sweep", () => (0, import_chunk_c203g5kd.vLr)(import_chunk_bzyb60p0.WYo, n), e);
  if ("failure" in r) (0, import_chunk_w578pjby.t)(`[agent-proxy] ${r.failure.detail}; naming only the CLIs resolved so far`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_init", r.failure.timedOut ? "agent_proxy_path_probe_timeout" : "agent_proxy_path_probe_failed", r.failure.fields);
  return import_chunk_bzyb60p0.WYo.filter((o) => n.has(o));
}
var wo = 65536, bo = `#!/bin/sh
# claude agent-proxy governed-git gh shim (auto-generated; per-session).
`;
async function Go(e) {
  try {
    var _stack = [];
    try {
      const n = __using(_stack, await (0, import_promises.open)(e, (0, import_chunk_6mfepmbb.Xu)()), true);
      let r = await (0, import_chunk_w578pjby.KM)(n, wo + 1);
      return r.length > wo ? "" : r.toString("utf8");
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (n) {
    if (!(0, import_chunk_jv7av99m.fn)(n)) (0, import_chunk_w578pjby.t)(`[agent-proxy] gh shim at ${e} could not be read (${(0, import_chunk_jv7av99m.w)(n) ?? "no error code"}); treated as not a shim`, { level: "warn" });
    return "";
  }
}
function dn(e, n) {
  let r = URL.parse((0, import_chunk_43nz5n02.HEe)(n))?.hostname;
  return r !== void 0 && Lt(e, r);
}
async function To(e, n) {
  let r = await je("jq PATH probe", () => _t("jq", e), n);
  if ("failure" in r) return (0, import_chunk_w578pjby.t)(`[agent-proxy] ${r.failure.detail}; taking jq as installed`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", r.failure.timedOut ? "jq_path_probe_timeout" : "jq_path_probe_failed", r.failure.fields), false;
  return r.value === void 0;
}
function So(e, n, r) {
  (0, import_chunk_w578pjby.Ct)(async () => {
    if (await Go(e) !== n) return;
    if (await (0, import_promises.unlink)(e).catch(() => {
    }), r) {
      let o = (0, import_path.join)(e, "..");
      await (0, import_promises.rmdir)(o).then(() => (0, import_promises.rmdir)((0, import_path.join)(o, ".."))).catch(() => {
      });
    }
  });
}
async function hn(e, n, r, o, i, c = false) {
  let y = r !== void 0, h = r !== void 0 ? (0, import_path.join)(n, "..", "sessions", (0, import_chunk_ccm69jjy.Je)(r).slice(0, 32), "bin") : (0, import_path.join)(n, "..", "bin"), g = (0, import_path.join)(h, "gh"), p = await je("gh PATH probe", () => _t("gh", h), i);
  if ("failure" in p) {
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] ${p.failure.detail}; skipping gh shim`, { level: "warn" }), !y) throw Error("gh PATH probe failed");
    (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", p.failure.timedOut ? "gh_path_probe_timeout" : "gh_path_probe_failed", p.failure.fields);
    return;
  }
  let b = p.value;
  if (b && y) {
    (0, import_chunk_cqa9hrgx.u)("agent_proxy_gh_shim", { standin: false, hosted: true });
    return;
  }
  if (b && c) return;
  if (!b && (0, import_chunk_k449cc64.wt)()) {
    (0, import_chunk_w578pjby.t)("[agent-proxy] no gh on PATH and nonessential traffic is disabled; skipping gh shim"), (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", "standin_essential_traffic_only");
    return;
  }
  if (!b && !dn(o, import_chunk_43nz5n02.Vr)) {
    (0, import_chunk_w578pjby.t)("[agent-proxy] no gh on PATH and this relay does not send GitHub API requests to the session proxy (selective mode); skipping gh shim"), (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", "selective_relay");
    return;
  }
  if (!e || (import_chunk_c203g5kd.s.PATH ?? "").split(import_path.delimiter).includes(h)) {
    let P = await Go(g), R = P.includes(` '${import_chunk_3d2897vr.VTl}' `), k = P.startsWith(bo), E = !b;
    if (E ? R : k) return (0, import_chunk_w578pjby.t)(`[agent-proxy] gh shim at ${g} is the enclosing session's; left as it is`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_gh_shim", { standin: E, ...y && { hosted: true }, inherited: true }), { shimDir: h, standin: E, enterprise: E && P.includes(" '--hosts="), anyHost: E && P.includes(` '${import_chunk_3d2897vr.KTl}' `), noJq: E && await To(h, i) };
    if (R || k) {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] gh shim at ${g} is the enclosing session's, of another kind; no gh shim for this process`), (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", "enclosing_shim_other_kind");
      return;
    }
    if (!e) return;
  }
  let T;
  if (b) T = [b];
  else {
    let P = (0, import_chunk_66srb2mf.Vf)({ pinToCurrentBinary: true });
    T = [P.cmd, ...P.prefixArgs];
  }
  if ([n, ...T].some((P) => /['\n\r]/.test(P))) {
    (0, import_chunk_w578pjby.t)("[agent-proxy] governed git: a path or argument the gh shim would quote holds a quote or a line break; skipping gh shim", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_gh_shim", "unquotable_path");
    return;
  }
  if (await (0, import_promises.mkdir)(h, { recursive: true, mode: 448 }), !b) {
    let P = y && o === void 0, R = y ? [] : yt().filter((B) => B !== import_chunk_43nz5n02.Vr && !B.endsWith(import_chunk_3d2897vr.oTt) && dn(o, B)), k;
    switch (e.kind) {
      case "relay":
        k = e.port;
        break;
      case "standalone":
        k = import_chunk_3d2897vr.BCr;
        break;
    }
    let E = (0, import_chunk_3d2897vr.QTl)({ command: T, port: k, caBundlePath: n, ghesHosts: P ? import_chunk_3d2897vr.$Z : R });
    return await (0, import_chunk_q7qjcthc.yr)(g, E, 493), So(g, E, y), (0, import_chunk_w578pjby.t)(`[agent-proxy] no gh on PATH; gh stand-in shim at ${g}`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_gh_shim", { standin: true, ...y && { hosted: true } }), { shimDir: h, standin: true, enterprise: R.length > 0, anyHost: P, noJq: await To(h, i) };
  }
  let C, v;
  switch (e.kind) {
    case "relay":
      C = "", v = `HTTPS_PROXY='${_e(e.port)}' https_proxy='${_e(e.port)}' \\
`;
      break;
    case "standalone":
      C = (0, import_chunk_3d2897vr.XTl)(), v = "";
      break;
  }
  let A = bo + `# Routes gh-to-github.com through the session relay ONLY when the
# invocation carries no customer credential. GHE targets (GH_HOST,
# --hostname, a -R/--repo/GH_REPO naming a non-github.com host, or a
# non-github.com origin remote in the cwd checkout) and
# real-customer-token invocations exec directly on the
# customer's own egress, so customer credentials never transit the
# relay tunnel and gh-to-GHE keeps working.
# Real customer tokens decide alone, checked first (costs nothing):
# gh sends GH_TOKEN/GITHUB_TOKEN proactively, and the GHE-scoped
# enterprise pair means gh may target a GHE host in ways the checks
# below cannot see (e.g. a URL positional arg) \u2014 never route any of
# them through the tunnel.
` + (0, import_chunk_wsjqx1vt.mCa)(b) + C + `# NO_PROXY cleared: an ambient runner-host NO_PROXY covering
# github.com would make gh skip the relay and send the literal dummy
# token to the real GitHub API (hard 401).
` + v + `NO_PROXY='' no_proxy='' \\
SSL_CERT_FILE='${n}' \\
GH_TOKEN='${import_chunk_r6r2wdsw.BX}' GITHUB_TOKEN='${import_chunk_r6r2wdsw.BX}' \\
exec '${b}' "$@"
`;
  return await (0, import_chunk_q7qjcthc.yr)(g, A, 493), So(g, A, y), (0, import_chunk_w578pjby.t)(`[agent-proxy] governed git: gh shim at ${g} -> ${b}`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_gh_shim", { standin: false }), { shimDir: h, standin: false, enterprise: false, anyHost: false, noJq: false };
}
function un() {
  return me("GIT_CONFIG_COUNT") === void 0;
}
function mn() {
  return me("SSH_AUTH_SOCK") === void 0 && me("GIT_SSH_COMMAND") === void 0;
}
function ht(e, n) {
  let r = xe().state;
  if (r.governedGitTools) {
    let i = n ? `use the ${import_chunk_k883m4fq.De} tool on ${n} and ` : "", c = r.ghStandin === true, y = (0, import_chunk_ybxa8kcj.l6r)(), h = y ? `other network traffic goes through the same proxy. For the governed GitHub hosts (${yt().join(", ")}), use only git${c ? " and gh" : ""}; other tools may be refused there.` : "other network traffic uses this machine's own egress.";
    return `GitHub access for git${c ? " and gh" : ""} goes through a pre-configured session proxy (CA bundle: ${e}) via per-session git config${c ? " and a gh PATH shim" : ""}; ${h} If ${c ? "git or gh fail" : "git fails"} against github.com (TLS or HTTP errors, or a transfer cut off with connection reset / unexpected disconnect), ${i}check the git config file named by $GIT_CONFIG_GLOBAL; never disable TLS verification or remove the proxy/sslCAInfo entries there.` + (r.ghShimDir && !c ? y ? " `gh` in a Bash command is this machine's own GitHub CLI, with its own sign-in; its traffic goes through the same proxy." : " `gh` in a Bash command is this machine's own GitHub CLI, with its own sign-in and network path." : "");
  }
  let o = (r.installedProxyPreconfiguredClis ?? []).filter((i) => !(r.ghStandin === true && i === "gh"));
  return { caBundlePath: e, hasReadme: n !== void 0, installedClis: o };
}
var Cs = [["git_http_proxy_configured", /^http\.(.+\.)?proxy$/m], ["git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m], ["git_https_to_ssh_insteadof_configured", /^url\.(git@|ssh:\/\/).*\.insteadof$/m]];
function Ho() {
  let e = (0, import_path.parse)((0, import_os.tmpdir)()).root;
  try {
    let n = (0, import_os.homedir)();
    if (n && (0, import_fs.statSync)(n).isDirectory()) return n;
    return e;
  } catch {
    return e;
  }
}
async function xs() {
  let e = /* @__PURE__ */ new Set(), n = await Promise.all(["--global", "--system"].map((r) => (0, import_chunk_7fsmgfxx.ut)("git", ["config", r, "--list", "--name-only"], { timeout: 5e3, preserveOutputOnError: true, cwd: Ho() })));
  for (let r of n) {
    if (r.code !== 0) continue;
    for (let [o, i] of Cs) if (i.test(r.stdout)) e.add(o);
  }
  return [...e];
}
function Ps(e, n) {
  let r = (0, import_path.join)(n, "..");
  return `# Claude Code agent proxy

Outbound HTTPS from this session goes through a local proxy at ${`http://127.0.0.1:${e}`}
(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is
re-terminated there, so every tool must trust the CA bundle at
${n}. The standard CA environment variables, the system trust
store (where possible), a JVM truststore, the Bazel system bazelrc, the
browser NSS store, and gsutil's boto config are already set up.

## Quick diagnosis

1. Read the end of the failed command's output. When the proxy refused or lost
   a connection while a ${import_chunk_hn3cwwzt.ke} command ran, Claude Code adds [agent-proxy] lines
   there with the host and the reason. A command that ran in the background,
   or whose exit status hides the failure (piped into another command, or
   followed by "|| true"), gets none.
2. Find the failure class below and apply the matching fix.
3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry
   policy denials (403/407) \u2014 report them instead.

## Failure classes and fixes

### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors

The failing tool is not reading the pre-set CA configuration. In order:

- If the tool has a CA flag or env var, point it at ${n}
  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,
  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,
  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).
- Tool config files override environment variables. If one of these sets its
  own CA or disables verification, point it at the bundle instead:
  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",
  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",
  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".
- JVM tools (Maven, Gradle, plain Java): when a JDK is present,
  JAVA_TOOL_OPTIONS points JVMs at a truststore that holds the proxy CA: the
  JDK's own store if the system trust install already added the CA there,
  otherwise ${r}/java-truststore.p12 (password "changeit"). Confirm
  that JAVA_TOOL_OPTIONS sets a trustStore before pointing a build at either:
  where it sets none, set-up was skipped, has not finished or has failed. If
  the image or the build sets its own trustStore, that one wins \u2014 import the
  proxy CA into it with
  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${r}/agent-proxy-ca.crt -keystore <their store>
  or point the build at the ready-made one. Bazel reads the managed block in
  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.

### "405 Method Not Allowed" from the proxy

The tool sent a plain-HTTP (non-CONNECT) request: usually axios older than
1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for
that tool \u2014 only HTTPS_PROXY is supported).

### 403 / 407 from the proxy

Most often the destination host is not allowed for this session. Do not retry
or route around it \u2014 report the blocked host.
Note: curl hides response bodies on failed CONNECTs; the [agent-proxy] lines
give the host and, where the egress proxy answered one, the HTTP status.

### 429 / 503 from the proxy

Too many connections or requests went through the proxy, or the egress proxy
was busy. The proxy can hold a connection for about a minute before it refuses
it, so a tool with a short timeout of its own may report only a timeout. Run
fewer downloads or requests at once, then retry.

The proxy also answers 429 immediately when too many connections to it are open,
idle ones included (too_many_connections in the [agent-proxy] lines under a
failed command). Look for a program that opens connections and never closes
them. New connections work again once some have closed.

### 408 from the proxy

The tool opened a connection to the proxy and sent no complete request within 30
seconds, so the proxy closed it. Retry once. If it happens again, the tool opens
connections before it has a request to send, it is paused or short of CPU, or its
request never ends with an empty line in CRLF form (bare LF line ends, or another
protocol such as SOCKS).

### "connection reset" / "unexpected disconnect" / "RPC failed" mid-transfer

Once a tunnel is up the proxy cannot send an error response, so a connection
it aborts (tunnel to the egress proxy lost, or an upload the tunnel stopped
accepting) reaches the tool as a bare reset. The [agent-proxy] lines name the
host and reason; look for them before concluding the remote service refused the
operation.

### Tool ignores the proxy entirely (timeouts with no proxy error)

Some clients do not read HTTPS_PROXY: Node's built-in fetch (run that command
with NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),
Ruby bundler (reads only HTTP_PROXY, which this proxy does not serve),
hand-rolled Go dialers. Prefer the tool's own proxy option where one exists.

### git

SSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS
automatically unless this session has its own SSH setup or supplies its own
GIT_CONFIG_*. A gitconfig that sets http.proxy / http.<url>.proxy (even empty),
its own http.sslCAInfo, or an https-to-ssh insteadOf makes git bypass the proxy
or fail verification; adjust those keys for this session if git times out.

### docker build / docker run

Processes inside containers cannot reach 127.0.0.1:${e} and do not trust
the CA. Workarounds: run builds with --network host, copy ${n}
into the build context and install it in an early layer, and pass proxy/CA
settings explicitly to the build.

### Not supported through the proxy (report, do not work around)

gRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned
clients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.

If a tool still cannot work through the proxy, report it so the policy or
tooling can be fixed.
`;
}
async function As(e) {
  try {
    return { existed: true, token: (await (0, import_promises.readFile)(e, "utf8")).trim() || null };
  } catch (n) {
    if ((0, import_chunk_jv7av99m.J)(n)) return { existed: false, token: null };
    return (0, import_chunk_w578pjby.t)(`[agent-proxy] token read failed: ${n instanceof Error ? n.message : String(n)}`, { level: "warn" }), { existed: false, token: null };
  }
}
async function cCa(e = Bo) {
  for (let n of e) try {
    return await (0, import_promises.readFile)(n, "utf8");
  } catch {
  }
  return "";
}
var vs = 1048576;
async function Es(e, n, r, o) {
  let i = /* @__PURE__ */ new Set(), c = [], y = [], h = [], g = new Set((e.match(import_chunk_3jjr3wje.yI) ?? []).map((T) => o ? T.replace(/\s/g, "") : T));
  for (let T of import_chunk_gd77dyw4.vOe) {
    let C = process.env[T]?.trim();
    if (!C || C === n || i.has(C) || !o && Bo.includes(C)) continue;
    i.add(C);
    let v;
    try {
      let A = await (0, import_promises.stat)(C);
      if (!A.isFile() || A.size > vs) continue;
      v = await (0, import_promises.readFile)(C, "utf8");
    } catch (A) {
      if (!(0, import_chunk_jv7av99m.J)(A)) (0, import_chunk_w578pjby.t)(`[agent-proxy] could not read customer CA bundle from ${T}: ${A instanceof Error ? A.message : String(A)}`, { level: "warn" });
      continue;
    }
    c.push({ name: T, text: v, strict: false });
  }
  if (o) for (let { source: T, text: C } of await fo({ caBundlePath: n, skipPaths: i, gitCwd: Ho(), governedHosts: yt() })) c.push({ name: T === "git_config" ? "git config" : "the system CA store", text: C, strict: true });
  for (let { name: T, text: C, strict: v } of c) {
    let A = 0;
    for (let P of C.match(import_chunk_3jjr3wje.yI) ?? []) {
      let R = o ? P.replace(/\s/g, "") : P;
      if (g.has(R)) continue;
      (v ? h : y).push(P), g.add(R), A++;
    }
    if (A > 0) (0, import_chunk_w578pjby.t)(`[agent-proxy] folded ${A} customer CA cert(s) from ${T} into the relay bundle`);
  }
  let p = /* @__PURE__ */ new Set(), b = [];
  if (h.length > 0) try {
    b = ((0, import_chunk_3jjr3wje.hJe)(h.join(`
`), "agent proxy trust", p)?.match(import_chunk_3jjr3wje.yI) ?? []).filter((T) => p.has(T));
  } catch (T) {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] the deny-list filter threw on the git config and system store CAs, so they are left out (${T instanceof Error ? T.name : typeof T})`, { level: "warn" });
  }
  if (y.length === 0) return b.join(`
`);
  return [(0, import_chunk_3jjr3wje.hJe)(y.join(`
`), "agent proxy trust", void 0, r) ?? y.flatMap((T) => (0, import_chunk_3jjr3wje.hJe)(T, "agent proxy trust", void 0, r) ?? []).join(`
`), ...b].join(`
`);
}
var Rs = [{ dir: "/usr/local/share/ca-certificates", name: "ccr-agent-proxy.crt", refresh: ["update-ca-certificates"], link: "/etc/ssl/certs/ccr-agent-proxy.pem", direct: Dr }, { dir: "/etc/pki/ca-trust/source/anchors", name: "ccr-agent-proxy.crt", refresh: ["update-ca-trust", "extract"] }], ks = 1e4;
function yn(e, n) {
  if (n.javaTrustStorePath && n.javaTrustStoreType) e.javaTrustStorePath = n.javaTrustStorePath, e.javaTrustStoreType = n.javaTrustStoreType;
  else if (e.javaTrustStorePath === n.retiredJavaTrustStorePath || e.javaTrustStorePath === n.rejectedJdkStorePath) e.javaTrustStorePath = void 0, e.javaTrustStoreType = void 0;
}
async function eGl(e, n, { systemCa: r, recordPath: o, timeoutMs: i = ks }) {
  let c = await He(o, e), y = uCa(r, e) && c !== "different", h = () => (0, import_chunk_q7qjcthc.yr)(o, e).catch((C) => {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] could not record the system trust install: ${(0, import_chunk_jv7av99m.d)(C)}`);
  }), g = {}, p = We(e), b = xo(e), T = false;
  for (let { dir: C, name: v, refresh: A, link: P, direct: R } of n) try {
    let k = (0, import_path.join)(C, v), E = P ? { path: (0, import_path.join)(C, v.replace(/\.crt$/, "-2.crt")), link: P.replace(/\.pem$/, "-2.pem") } : void 0, B = E === void 0 ? void 0 : await ge(E.path), re = B === void 0 || B.state === "missing", D = E !== void 0 && p !== void 0 && re, F = y ? await ge(k) : void 0;
    if (F?.state === "read") {
      let U = be(F.text, e);
      if (re ? U === "same" && c === "same" : U !== "different" && B?.state === "read" && be(B.text, xo(F.text)) === "same") {
        if ((0, import_chunk_w578pjby.t)(`[agent-proxy] CA already in the system trust store${U === "swapped" ? ", its two certificates in the other order" : ""}; install skipped`), c === "swapped") await h();
        return (0, import_chunk_cqa9hrgx.u)("agent_proxy_system_trust", { reused: true, ...D && { old_layout: true }, ...c === "swapped" && { swapped: true } }), T ? "failed" : "reused";
      }
    }
    if (R && P && re) {
      let U = Date.now() + i, G = false, L = await Jt(e, { anchorPath: k, link: P, layout: R, recordPath: o, timeoutMs: i }), pe = L.outcome === "installed" ? L.javaStore : void 0;
      if (L.outcome === "installed" && p !== void 0 && E) G = true, L = await Jt(b, { anchorPath: E.path, link: E.link, layout: R, recordPath: o, timeoutMs: Math.max(1, U - Date.now()) });
      switch (L.outcome) {
        case "installed":
          return await h(), (0, import_chunk_w578pjby.t)("[agent-proxy] CA installed to system trust directly"), (0, import_chunk_cqa9hrgx.u)("agent_proxy_system_trust", { reused: false, method: (0, import_chunk_78g0060s.f)("direct"), ...pe && { java_store: (0, import_chunk_78g0060s.f)(pe) }, ...G && L.javaStore && { second_anchor_java_store: (0, import_chunk_78g0060s.f)(L.javaStore) } }), T ? "failed" : "installed";
        case "hook_incomplete":
          return (0, import_chunk_cqa9hrgx.l)("agent_proxy_system_trust", "hook_incomplete"), "failed";
        case "abandoned": {
          let de = L.step;
          g = { direct_failed_step: (0, import_chunk_78g0060s.f)(de) };
          break;
        }
        case "not_attempted": {
          let de = (0, import_chunk_78g0060s.f)(L.reason);
          g = G ? { second_anchor_direct_skipped: de } : { direct_skipped: de };
          break;
        }
      }
    } else if (R && P) g = { direct_skipped: (0, import_chunk_78g0060s.f)("anchor_present") };
    if (await Co(k, e), await (0, import_promises.unlink)(o).catch(() => {
    }), E && (p !== void 0 || !re)) await Co(E.path, b), await (0, import_promises.unlink)(E.link).catch(() => {
    });
    if (P) await (0, import_promises.unlink)(P).catch(() => {
    });
    let W = await new Promise((U) => {
      (0, import_child_process.execFile)(A[0], A.slice(1), { timeout: i, cwd: "/", windowsHide: true, ...(0, import_chunk_9zdrdv25.hm)("helper") }, (G) => U(G ? (0, import_chunk_jv7av99m.J)(G) ? 127 : 1 : 0));
    });
    if (W === 0) return await h(), (0, import_chunk_w578pjby.t)(`[agent-proxy] CA installed to system trust via ${A[0]}`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_system_trust", { reused: false, method: (0, import_chunk_78g0060s.f)("refresh"), ...g }), T ? "failed" : "installed";
    T = true, (0, import_chunk_w578pjby.t)(`[agent-proxy] ${A[0]} exited ${W}; falling back to env-var trust`, { level: "warn" });
  } catch (k) {
    if ((0, import_chunk_jv7av99m.J)(k)) continue;
    T = true, (0, import_chunk_w578pjby.t)(`[agent-proxy] system trust install via ${C} failed: ${k instanceof Error ? k.message : String(k)}`, { level: "warn" });
  }
  if (n.length > 0) (0, import_chunk_cqa9hrgx.l)("agent_proxy_system_trust", "unavailable", g);
  return T ? "failed" : "no_store";
}
async function Co(e, n) {
  await (0, import_chunk_c203g5kd.Oft)(e, n).catch(async (r) => {
    if ((0, import_chunk_jv7av99m.w)(r) !== "ELOOP") throw r;
    await (0, import_promises.unlink)(e), await (0, import_chunk_c203g5kd.Oft)(e, n);
  });
}
function xo(e) {
  return `${We(e) ?? e.match(import_chunk_3jjr3wje.yI)?.[0] ?? e.trimEnd()}
`;
}
function Bs(e) {
  try {
    return new import_crypto.X509Certificate(e), true;
  } catch {
    return false;
  }
}
var Os = 65536, Is = { oversized: "ca-cert response is larger than any certificate bundle", no_certificate: "ca-cert response contains no certificate", unparseable_certificate: "ca-cert response contains a certificate that does not parse", stray_marker: "ca-cert response has PEM framing outside its certificates (truncated, or not a certificate bundle)" };
function tGl(e) {
  if (e.length > Os) return { ok: false, problem: "oversized" };
  let n = e.match(import_chunk_3jjr3wje.yI);
  if (!n) return { ok: false, problem: "no_certificate" };
  if (!n.every(Bs)) return { ok: false, problem: "unparseable_certificate" };
  if (e.replace(import_chunk_3jjr3wje.yI, "").includes("-----BEGIN")) return { ok: false, problem: "stray_marker" };
  return { ok: true, bundle: e };
}
function uCa(e, n) {
  let r = n.match(import_chunk_3jjr3wje.yI);
  return r !== null && r.every((o) => e.includes(o));
}
function Po(e, n) {
  if (e.outcome === "retry") return e;
  return (0, import_chunk_w578pjby.t)(`[agent-proxy] ${e.detail}; proxy disabled`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("agent_proxy_init", `agent_proxy_init_ca_${e.code}`, { ca_source: (0, import_chunk_78g0060s.f)(n) }), e;
}
var Ns = 65536;
function nGl(e) {
  let n = e.trim();
  if (n === "") return { ok: false, reason: "empty" };
  if (!/^[A-Za-z0-9+/=]+$/.test(n)) return { ok: false, reason: "not base64" };
  let r = Buffer.from(n, "base64");
  if (r.length === 0 || r.length > Ns) return { ok: false, reason: `decoded to ${r.length} bytes` };
  let o = Ge(r.toString("utf8"));
  return o.ok ? { ok: true, pem: o.blocks.join(`
`) + `
` } : o;
}
var Ds = 3, $s = 36e5, Ao = 3;
function _n(e) {
  return (0, import_path.join)(e, "..", "system-trust.ca.pem");
}
var Ls = /^(nss_|java_truststore_)/;
async function Fo(e, n) {
  return await He((0, import_path.join)(e, "..", "agent-proxy-ca.crt"), n) !== "different";
}
function Uo(e, n) {
  return e === "failed" || n.some((r) => Ls.test(r));
}
function wn(e, n, r, o, i = e.systemCa) {
  return eGl(n, e.opts?.systemTrustTargets ?? Rs, { systemCa: i, recordPath: r }).catch(() => "failed").then((c) => (o?.(), c));
}
async function Ms(e, n, r, { systemTrust: o, toolTrust: i, installDeferred: c, onInstallSettled: y, embeddedEndpoint: h, relayPort: g, trust: p }) {
  let { runtime: b, baseUrl: T, localCa: C, caBundlePath: v, governedGitTools: A, opts: P } = e, R = _n(v), k = c, E = (G) => {
    k = false;
    let L = wn(e, G, R, y);
    if (p) p.systemTrust = L;
    return L;
  }, B = Date.now(), re = false, D;
  for (let G = 1; ; G++) {
    if (G > 1) {
      let L = D?.outcome === "retry" ? D : void 0;
      await (0, import_chunk_5appeerh.K)(P?.retryDelayMs?.(G) ?? dCa(G, L?.retryAfter ?? null), void 0, { unref: true });
    }
    if (b.state !== n) return;
    if ((0, import_chunk_k449cc64.wt)() || e.ghOnly && mt() !== void 0) {
      if (k) await E(r);
      return;
    }
    if (D = await bn(T, { budgetMs: P?.caFetchBudgetMs ?? 15e3, tries: 1 }), D.outcome !== "retry") break;
    if (y(), k && G >= Ds) {
      if (b.state !== n) return;
      await E(r);
    }
    if (!re && Date.now() - B >= (P?.retryBadAfterMs ?? No)) re = true, (0, import_chunk_w578pjby.t)(`[agent-proxy] CA reconcile: ${D.detail}; still failing after ${G} attempts, retrying anyway`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_reconcile", "fetch_still_failing");
  }
  if (b.state !== n || D === void 0) return;
  if (D.outcome !== "ok") {
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] CA reconcile: ${D.detail}; the bundle keeps the environment's CA`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_reconcile", "fetch_http_error"), k) await E(r);
    return;
  }
  let F = be(D.ccrCa, r);
  if (F === "same") {
    if ((0, import_chunk_cqa9hrgx.u)("agent_proxy_ca_reconcile", { changed: false }), k) await E(r);
    return;
  }
  let W = await Tn(C, D.ccrCa, v);
  if (W.outcome !== "ok") {
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] CA reconcile: ${W.detail}; the bundle keeps the environment's CA`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_reconcile", "write_failed"), k && b.state === n) await E(D.ccrCa);
    return;
  }
  if (p) p.ccrCa = D.ccrCa, p.systemTrust = void 0, p.installIncomplete = true;
  if (b.state !== n) return;
  if ((0, import_chunk_w578pjby.t)(`[agent-proxy] CA reconcile: the served CA differs from the environment${F === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_ca_reconcile", { changed: true, ...F === "swapped" && { swapped: true } }), h) (0, import_chunk_kmbc34js.Kyo)({ proxyUrl: _e(g), gatewayCa: D.ccrCa });
  if (A) return;
  if (await o, b.state !== n) return;
  let U = E(D.ccrCa);
  if (await U, P?.toolTrust === false || b.state !== n) return;
  if (await i, b.state !== n) return;
  await gt({ ccrCa: D.ccrCa, caBundlePath: v, hasSystemCa: n.hasSystemCa ?? false, stateDir: (0, import_path.join)(v, ".."), systemTrust: U, ...P?.toolTrust ?? {} }).then((G) => {
    if (b.state !== n) return;
    yn(n, G), n.toolTrustFailureCodes = G.failureCodes.length > 0 ? G.failureCodes : void 0;
  }).catch((G) => {
    (0, import_chunk_w578pjby.t)(`[agent-proxy] CA reconcile: tool trust rebuild failed: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_reconcile", "tool_trust_rebuild_threw");
  });
}
function vo(e, n, r, o) {
  let { runtime: i, caBundlePath: c, opts: y } = e, h = _n(c), { systemTrust: g, toolTrust: p } = r, b = [], T = false, C = (async () => {
    if (await g, i.state !== n) return;
    let P = y?.systemCaPath ? await (0, import_promises.readFile)(y.systemCaPath, "utf8").catch(() => "") : await cCa(), R = await g;
    if (R === "failed" || R === void 0) await (0, import_promises.unlink)(h).catch(() => {
    });
    return wn(e, o, h, void 0, P);
  })(), A = (async () => {
    if (await C, y?.toolTrust === false || i.state !== n) return;
    if (await p, i.state !== n) return;
    await gt({ ccrCa: o, caBundlePath: c, hasSystemCa: n.hasSystemCa ?? false, stateDir: (0, import_path.join)(c, ".."), systemTrust: C, ...y?.toolTrust ?? {} }).then((P) => {
      if (i.state !== n) return;
      yn(n, P), n.toolTrustFailureCodes = P.failureCodes.length > 0 ? P.failureCodes : void 0, b = P.failureCodes;
    }).catch((P) => {
      (0, import_chunk_w578pjby.t)(`[agent-proxy] CA watch: tool trust rebuild failed: ${(0, import_chunk_jv7av99m.d)(P)}`, { level: "warn" }), T = true;
    });
  })().then(async () => {
    if (i.state !== n) return;
    let P = y?.toolTrust === false || await Fo(c, o), R = T || !P || Uo(await C, b);
    if (i.state === n) r.installIncomplete = R;
  });
  return r.ccrCa = o, r.systemTrust = C, r.toolTrust = A, A;
}
async function Gs(e, n, r, { intervalMs: o, afterStart: i, embeddedEndpoint: c, relayPort: y }) {
  let { runtime: h, baseUrl: g, localCa: p, caBundlePath: b, opts: T } = e;
  await i;
  let C = false, v = (A, P) => {
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] CA watch: ${A}; checking again later`), !C) C = true, (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_watch", P);
  };
  for (; ; ) {
    if (await (0, import_chunk_5appeerh.K)(o, void 0, { unref: true }), h.state !== n || (0, import_chunk_w578pjby.c_)() || (0, import_chunk_k449cc64.wt)()) return;
    let A = await bn(g, { budgetMs: T?.caFetchBudgetMs ?? 15e3, tries: 1 });
    if (h.state !== n) return;
    if (A.outcome !== "ok") {
      v(A.detail, A.outcome === "retry" ? "fetch_failed" : "fetch_http_error");
      continue;
    }
    if (!Ge(A.ccrCa).ok) {
      v("the served CA does not parse", "unparsable");
      continue;
    }
    let P = be(A.ccrCa, r.ccrCa);
    if (P === "same") {
      if (C = false, !r.installIncomplete) continue;
      if (r.installRetries >= Ao) {
        (0, import_chunk_w578pjby.t)(`[agent-proxy] CA watch: a trust store did not take the CA after ${Ao} more tries; leaving it until the CA changes`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("agent_proxy_ca_watch", "install_incomplete"), r.installIncomplete = false;
        continue;
      }
      r.installRetries++, (0, import_chunk_w578pjby.t)("[agent-proxy] CA watch: trust stores refreshing again for the CA the bundle holds"), await vo(e, n, r, A.ccrCa);
      continue;
    }
    let R = await Tn(p, A.ccrCa, b);
    if (R.outcome !== "ok") {
      v(R.detail, "write_failed");
      continue;
    }
    if (C = false, r.installRetries = 0, h.state !== n) return;
    if ((0, import_chunk_w578pjby.t)(`[agent-proxy] CA watch: the served CA changed${P === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten, trust stores refreshing`), (0, import_chunk_cqa9hrgx.u)("agent_proxy_ca_watch", { changed: true, ...P === "swapped" && { swapped: true } }), c) (0, import_chunk_kmbc34js.Kyo)({ proxyUrl: _e(y), gatewayCa: A.ccrCa });
    await vo(e, n, r, A.ccrCa);
  }
}
async function bn(e, { budgetMs: n, tries: r, viaStandaloneProxy: o = false }) {
  let i = AbortSignal.timeout(n), c = "", y = null;
  for (let g = 0; g < r; g++) {
    y = null;
    try {
      let p = `${e}${import_chunk_865at33z.aAs}/ca-cert`, b = await fetch(p, { signal: i, ...o && (0, import_chunk_3jjr3wje.wl)({ url: p }), ...(0, import_chunk_3jjr3wje.lO)(void 0) });
      if (b.status >= 500 || b.status === 408 || b.status === 429) {
        c = `status ${b.status}`, y = b.headers.get("retry-after");
        continue;
      }
      if (!b.ok) return { outcome: "fatal", code: "http_error", detail: `ca-cert fetch ${b.status}` };
      let T = tGl(await b.text());
      if (!T.ok) {
        c = Is[T.problem];
        continue;
      }
      return { outcome: "ok", ccrCa: T.bundle };
    } catch (p) {
      c = p instanceof Error ? p.message : String(p);
    }
  }
  return { outcome: "retry", detail: `ca-cert fetch exhausted (${c})`, retryAfter: y };
}
async function Tn(e, n, r) {
  try {
    await (0, import_promises.mkdir)((0, import_path.join)(r, ".."), { recursive: true }), await (0, import_chunk_q7qjcthc.yr)(r, Us(e, n));
  } catch (o) {
    let i = `ca-bundle write failed (${(0, import_chunk_jv7av99m.d)(o)})`;
    if ((0, import_chunk_2yx6c1y2.Jhn)(o)) return { outcome: "retry", detail: i, retryAfter: null };
    return { outcome: "fatal", code: "write_failed", detail: i };
  }
  return { outcome: "ok" };
}
async function Fs(e) {
  try {
    await (0, import_promises.mkdir)((0, import_path.join)(e, ".."), { recursive: true, mode: 448 }), await (0, import_promises.writeFile)(e, `[default]
s3 =
  payload_signing_enabled = false
`, { flag: "wx", mode: 384 });
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) === "EEXIST") return;
    (0, import_chunk_w578pjby.t)(`[agent-proxy] aws config write failed: ${n instanceof Error ? n.message : String(n)}`, { level: "warn" });
  }
}
function _e(e) {
  return `http://127.0.0.1:${e}`;
}
function Us(e, n) {
  return e + `
` + n;
}
