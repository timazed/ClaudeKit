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
var chunk_pmbp6kxp_exports = {};
__export(chunk_pmbp6kxp_exports, {
  Djr: () => Djr
});
module.exports = __toCommonJS(chunk_pmbp6kxp_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
function Djr(i) {
  let n = { entries: /* @__PURE__ */ new Map(), burst: i?.burst ?? 3, refillMs: i?.refillMs ?? 1e4, retryMs: i?.retryMs ?? 6e4, isOwnTitle: i?.isOwnTitle ?? (() => false), onRemoteTitleAdopted: i?.onRemoteTitleAdopted ?? (() => {
  }) };
  return { update: (e, r, s) => h(n, e, r, s), noteRemoteTitle: (e, r) => S(n, e, r), forget: (e) => R(n, e), hasSent: (e, r) => n.entries.get(e)?.sentTitles.has(r) ?? false, isKnownTitle: (e, r) => n.entries.get(e)?.knownTitles.has(r) ?? false };
}
function c(i, n) {
  let e = i.entries.get(n);
  if (!e) e = { lastSentTitle: void 0, lastSentOk: false, sentTitles: /* @__PURE__ */ new Set(), knownTitles: /* @__PURE__ */ new Set(), tokens: i.burst, refilledAt: Date.now(), pending: void 0, inFlight: false, timer: void 0, retryTimer: void 0, sendingRetry: false, suppressed: 0 }, i.entries.set(n, e);
  return e;
}
function h(i, n, e, r) {
  let s = c(i, n);
  if (y(s, e, r)) return p(s), Promise.resolve();
  return new Promise((o) => {
    let f = [o];
    if (u(s), s.pending || s.inFlight) {
      if (s.suppressed === 0) (0, import_chunk_cqa9hrgx.l)("bridge_session_patch", "title_write_coalesced");
      s.suppressed += 1;
    }
    g(s.pending?.waiters), s.pending = { title: e, opts: r, waiters: f }, s.sendingRetry = false, T(i, n);
  });
}
function k(i, n, e) {
  let r = Math.floor((e - n.refilledAt) / i.refillMs);
  if (r > 0) n.tokens = Math.min(i.burst, n.tokens + r), n.refilledAt += r * i.refillMs;
  if (n.tokens === i.burst) n.refilledAt = e;
}
function T(i, n) {
  let e = i.entries.get(n);
  if (!e || e.inFlight || !e.pending) return;
  let r = Date.now();
  if (k(i, e, r), e.tokens <= 0 && !e.pending.opts?.userInitiated) {
    if (!e.timer) {
      let a = Math.max(0, e.refilledAt + i.refillMs - r);
      e.timer = setTimeout(W, a, i, n), e.timer.unref?.();
    }
    return;
  }
  let { title: s, opts: o, waiters: f } = e.pending;
  if (e.pending = void 0, y(e, s, o) || o?.shouldSend !== void 0 && !o.shouldSend()) {
    u(e), e.sendingRetry = false, e.suppressed = 0, g(f);
    return;
  }
  e.tokens = Math.max(0, e.tokens - 1), e.inFlight = true, e.lastSentTitle = s, e.lastSentOk = false, e.sentTitles.add(s), e.knownTitles.add(s), u(e);
  let b = e.sendingRetry;
  if (e.sendingRetry = false, e.suppressed > 0) (0, import_chunk_w578pjby.t)(`[bridge] title write: sending latest after coalescing ${e.suppressed} update(s)`), e.suppressed = 0;
  (0, import_chunk_p3d6wgn7.QPi)(n, s, o).then((a) => {
    if (a === "landed") e.lastSentTitle = s, e.lastSentOk = true;
    else if (e.lastSentTitle === s) e.lastSentOk = false;
    if (i.entries.get(n) !== e) return;
    if (a === "failed" && !b && !e.retryTimer && !e.pending) e.retryTimer = setTimeout(v, i.retryMs, i, n, s, o), e.retryTimer.unref?.();
  }, (a) => {
    (0, import_chunk_w578pjby.t)(`[bridge] title write failed: ${(0, import_chunk_jv7av99m.d)(a)}`);
  }).finally(() => {
    e.inFlight = false, g(f), T(i, n);
  });
}
function W(i, n) {
  let e = i.entries.get(n);
  if (e) e.timer = void 0, T(i, n);
}
function v(i, n, e, r) {
  let s = i.entries.get(n);
  if (!s) return;
  if (s.retryTimer = void 0, !m(i, s, n, e)) return;
  if (r?.shouldSend !== void 0 && !r.shouldSend()) {
    (0, import_chunk_w578pjby.t)("[bridge] title write retry dropped: sending is now barred");
    return;
  }
  (0, import_chunk_p3d6wgn7.jsn)(n, { baseUrl: r?.baseUrl, getAccessToken: r?.getAccessToken, credentials: r?.credentials }).then((o) => {
    if (!m(i, s, n, e)) return;
    if (o === null) {
      (0, import_chunk_w578pjby.t)("[bridge] title write retry skipped: server state unreadable");
      return;
    }
    if (o.title && !s.knownTitles.has(o.title) && !i.isOwnTitle(n, o.title)) {
      (0, import_chunk_w578pjby.t)("[bridge] title write retry dropped: the session was renamed elsewhere"), S(i, n, o.title), i.onRemoteTitleAdopted(n, o.title);
      return;
    }
    s.pending = { title: e, opts: r, waiters: [] }, s.sendingRetry = true, T(i, n);
  }, (o) => {
    (0, import_chunk_w578pjby.t)(`[bridge] title write retry skipped: ${(0, import_chunk_jv7av99m.d)(o)}`);
  });
}
function m(i, n, e, r) {
  return i.entries.get(e) === n && n.lastSentTitle === r && !n.lastSentOk && !n.inFlight && !n.pending && !n.retryTimer;
}
function S(i, n, e) {
  let r = c(i, n);
  r.lastSentTitle = e, r.lastSentOk = true, r.knownTitles.add(e), u(r), p(r);
}
function R(i, n) {
  let e = i.entries.get(n);
  if (!e) return;
  if (e.timer) clearTimeout(e.timer);
  u(e), p(e), i.entries.delete(n);
}
function p(i) {
  g(i.pending?.waiters), i.pending = void 0, i.sendingRetry = false, i.suppressed = 0;
}
function u(i) {
  if (i.retryTimer) clearTimeout(i.retryTimer), i.retryTimer = void 0;
}
function g(i) {
  for (let n of i ?? []) n();
}
function y(i, n, e) {
  if (i.lastSentTitle !== n) return false;
  if (i.inFlight || i.retryTimer !== void 0) return true;
  return i.lastSentOk && !e?.userInitiated;
}
