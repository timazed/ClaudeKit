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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
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
var chunk_pxzmvybx_exports = {};
__export(chunk_pxzmvybx_exports, {
  Jha: () => Jha,
  Ose: () => Ose,
  Qha: () => Qha,
  VUr: () => VUr,
  Z1o: () => Z1o,
  Zha: () => Zha
});
module.exports = __toCommonJS(chunk_pxzmvybx_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_27rs10ep = require("/$bunfs/root/chunk-27rs10ep.js");
var import_chunk_9xz0nsgn = require("/$bunfs/root/chunk-9xz0nsgn.js");
var import_chunk_enp65fg7 = require("/$bunfs/root/chunk-enp65fg7.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_crypto = require("crypto");
var We = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function V(e) {
  return We.test(e);
}
function R(e, ...n) {
  let t = e;
  for (let o of n) {
    if (typeof t !== "object" || t === null || Array.isArray(t) || !(o in t)) return;
    t = t[o];
  }
  return t ?? void 0;
}
function T(e, ...n) {
  let t = R(e, ...n);
  return typeof t === "string" ? t : "";
}
function z(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var h = { state: ["UNSPECIFIED", "UNDECIDED", "OPTED_IN", "OPTED_OUT"].map((e) => `CONSENT_STATE_${e}`), eligibility: ["UNSPECIFIED", "ELIGIBLE", "OPT_OUT_ONLY", "INELIGIBLE"].map((e) => `CONSENT_ELIGIBILITY_${e}`), prompt: ["UNSPECIFIED", "PROMPT", "DO_NOT_PROMPT"].map((e) => `CONSENT_PROMPT_STATUS_${e}`), reason: ["UNSPECIFIED", "ORGANIZATION_TYPE", "ORGANIZATION_POLICY", "ACCOUNT_POLICY"].map((e) => `CONSENT_INELIGIBILITY_REASON_${e}`), decidedBy: ["UNSPECIFIED", "USER", "ORG_ADMIN", "REGIONAL_DEFAULT", "SYSTEM_POLICY", "STAFF"].map((e) => `CONSENT_DECIDED_BY_${e}`) };
function w(e, n, t) {
  let o = R(n, t);
  return o !== void 0 && !(typeof o === "string" && e.includes(o));
}
function Q(e) {
  return w(h.state, e, "state") || w(h.decidedBy, e, "decided_by");
}
var W = (e) => e ? "UNREADABLE" : null;
function pe(e) {
  return e === "CONSENT_STATE_OPTED_IN" || e === "CONSENT_STATE_OPTED_OUT" || e === "CONSENT_STATE_UNDECIDED" ? e : void 0;
}
function ee(e) {
  if (e === void 0) return { kind: "absent" };
  if (!z(e)) return { kind: "broken" };
  let n = pe(T(e, "state"));
  if (n === void 0) return { kind: "unknown_state" };
  let t = T(e, "record_version");
  if (t === "" ? n !== "CONSENT_STATE_UNDECIDED" : !V(t)) return { kind: "broken" };
  return { kind: "usable", state: n, recordVersion: t, writeId: T(e, "write_id"), decidedByUser: T(e, "decided_by") === "CONSENT_DECIDED_BY_USER" };
}
function fe(e) {
  switch (e) {
    case "CONSENT_ELIGIBILITY_ELIGIBLE":
      return "ELIGIBLE";
    case "CONSENT_ELIGIBILITY_OPT_OUT_ONLY":
      return "OPT_OUT_ONLY";
    case "CONSENT_ELIGIBILITY_INELIGIBLE":
      return "INELIGIBLE";
    default:
      return "UNKNOWN";
  }
}
function Ee(e, n) {
  if (e === "ELIGIBLE") return null;
  if (e === "UNKNOWN") return "GENERIC";
  switch (n) {
    case "CONSENT_INELIGIBILITY_REASON_ORGANIZATION_TYPE":
      return "ORGANIZATION_TYPE";
    case "CONSENT_INELIGIBILITY_REASON_ORGANIZATION_POLICY":
      return "ORGANIZATION_POLICY";
    case "CONSENT_INELIGIBILITY_REASON_ACCOUNT_POLICY":
      return "ACCOUNT_POLICY";
    default:
      return "GENERIC";
  }
}
function Ve(e) {
  switch (e) {
    case "CONSENT_PROMPT_STATUS_PROMPT":
      return "PROMPT";
    case "CONSENT_PROMPT_STATUS_DO_NOT_PROMPT":
      return "DO_NOT_PROMPT";
    default:
      return "UNKNOWN";
  }
}
function _e(e) {
  if (!z(e)) return { kind: "unusable", fault: "BROKEN" };
  let n = R(e, "controlled_read"), t = ee(n);
  if (t.kind === "absent") return { kind: "unusable", fault: null };
  if (t.kind === "broken") return { kind: "unusable", fault: "BROKEN" };
  let o = W(Q(n) || w(h.state, e, "effective_state") || w(h.eligibility, e, "eligibility") || w(h.prompt, e, "prompt") || w(h.reason, e, "ineligibility_reason"));
  if (t.kind !== "usable") return { kind: "unusable", fault: o };
  let r = pe(T(e, "effective_state"));
  if (r === void 0) return { kind: "unusable", fault: o };
  let i = fe(T(e, "eligibility"));
  return { kind: "usable", held: { state: t.state, recordVersion: t.recordVersion, shown: r, eligibility: i, reason: Ee(i, T(e, "ineligibility_reason")), prompt: Ve(T(e, "prompt")), fromWrite: false }, writeId: t.writeId, decidedByUser: t.decidedByUser, fault: o };
}
function Ge(e, n) {
  let t = W(Q(e)), o = ee(e);
  if (o.kind !== "usable") return { kind: "unknown", fault: o.kind !== "unknown_state" ? "BROKEN" : t };
  if (o.state === "CONSENT_STATE_UNDECIDED") return { kind: "unknown", fault: t };
  let r = o.state === n.decision;
  return { kind: "ready", fault: t, state: o.state, recordVersion: o.recordVersion, message: r && o.writeId === n.writeId ? "SAVED" : r && o.decidedByUser ? "ALREADY_SET_ELSEWHERE" : "NOT_SAVED_CHANGED_ELSEWHERE" };
}
function me(e, n, t) {
  if (e === 200) {
    let i = R(n, "consent", "controlled_read"), a = ee(i);
    return a.kind === "usable" && a.writeId === t.writeId && a.state === t.decision ? { kind: "ready", fault: W(Q(i)), state: a.state, recordVersion: a.recordVersion, message: "SAVED" } : { kind: "unknown", fault: "BROKEN" };
  }
  let o = R(n, "error", "details"), r = T(o, "error_code");
  if (e === 409 && r === "record_version_conflict") return Ge(R(o, "version_conflict", "controlled_read"), t);
  if (e === 403 && r === "consent_ineligible") {
    let i = R(o, "ineligible"), a = fe(T(i, "eligibility")), l = a === "ELIGIBLE" ? "UNKNOWN" : a;
    return { kind: "ineligible", fault: W(i !== void 0 && !z(i) || w(h.eligibility, i, "eligibility") || w(h.reason, i, "reason")), eligibility: l, reason: Ee(l, T(i, "reason")) };
  }
  if (e === 400 && r === "subject_erased") return { kind: "erased", fault: null };
  if (e >= 500 && e <= 599) return { kind: "settling", fault: null };
  return { kind: "unknown", fault: e < 400 || e > 599 ? "BROKEN" : null };
}
var G = { kind: "EMPTY", terminal: false };
function ne(e) {
  return { config: e, subject: null, epoch: 0, seq: 0, mode: G, control: "closed", asOf: null, message: null, messageMark: "UNSEEN", read: null, backoffStep: 0, wakeDue: null, unsettled: null, lastWrite: null };
}
function ye(e) {
  let { freshness_ms: n, cache_ms: t } = e;
  if (!Number.isSafeInteger(n) || !Number.isSafeInteger(t) || n < 1 || n > t) throw RangeError("freshness_ms and cache_ms must be integers with 1 <= freshness_ms <= cache_ms");
  return ne(e);
}
function A(e, n) {
  return n - e.tRecv;
}
function k(e, n) {
  let { mode: t } = e;
  switch (t.kind) {
    case "EMPTY":
      return "UNKNOWN";
    case "WRITING":
    case "SETTLING":
      return "PENDING";
    case "HELD":
      return A(t.held, n) > e.config.freshness_ms ? "STALE" : "READY";
  }
}
function je(e) {
  switch (e.shown) {
    case "CONSENT_STATE_OPTED_IN":
      return "ON";
    case "CONSENT_STATE_OPTED_OUT":
      return "OFF";
    case "CONSENT_STATE_UNDECIDED":
      return "UNDECIDED";
  }
}
function He(e, n) {
  let t = e.control === "armed";
  return { phase: "READY", epoch: e.epoch, record_version: n.recordVersion, as_of: e.asOf, control: { visible: n.eligibility !== "INELIGIBLE", value: je(n), can_opt_in: t && n.eligibility === "ELIGIBLE", can_opt_out: t && n.eligibility !== "INELIGIBLE", overridden: n.state === "CONSENT_STATE_OPTED_IN" && n.shown === "CONSENT_STATE_OPTED_OUT" }, reason: n.reason, may_prompt: !n.fromWrite && n.prompt === "PROMPT" && (n.eligibility === "ELIGIBLE" || n.eligibility === "OPT_OUT_ONLY"), prompt_known: n.prompt !== "UNKNOWN" && n.eligibility !== "UNKNOWN", message: e.message, terminal: false };
}
function te(e) {
  return { ...e.control, can_opt_in: false, can_opt_out: false };
}
function j(e, n) {
  let { mode: t } = e;
  if (t.kind === "EMPTY") return { phase: "UNKNOWN", epoch: e.epoch, record_version: "", as_of: e.asOf, control: { visible: e.subject !== null, value: "INDETERMINATE", can_opt_in: false, can_opt_out: false, overridden: false }, reason: null, may_prompt: false, prompt_known: false, message: e.message, terminal: t.terminal };
  let o = He(e, t.held);
  switch (k(e, n)) {
    case "PENDING":
      return { ...o, phase: "PENDING", control: te(o), may_prompt: false, prompt_known: false, message: null };
    case "STALE":
      return A(t.held, n) > e.config.cache_ms ? { ...o, phase: "STALE", control: { ...te(o), visible: true }, reason: null, may_prompt: false, prompt_known: false } : { ...o, phase: "STALE", control: te(o), prompt_known: false };
    default:
      return o;
  }
}
var Te = [2e3, 4e3, 8e3, 16e3, 32e3, 64e3, 128e3, 256e3, 3e5], Fe = { kind: "unusable", fault: null }, Ye = { BROKEN: "READ_ANSWER_BROKEN", UNREADABLE: "READ_VALUE_UNREADABLE" }, qe = { BROKEN: "WRITE_ANSWER_BROKEN", UNREADABLE: "WRITE_VALUE_UNREADABLE" };
function Ce(e, n, t, o) {
  let r = e.seq + 1;
  return { state: { ...e, seq: r, read: { seq: r, scheduled: n > 0, control: t } }, defect: o, request: { type: "read", seq: r, delay_ms: n } };
}
function D(e, n, t) {
  return Ce(e, n, e.control !== "closed", t);
}
function oe(e) {
  return e === "armed" ? "open" : e;
}
function Ne(e) {
  return e === "closed" ? "closed" : "armed";
}
function Ke(e, n) {
  return { state: n === e.subject ? e : { ...ne(e.config), subject: n, seq: e.seq, epoch: e.epoch + 1 } };
}
var L = { message: null, messageMark: "UNSEEN" };
function H(e) {
  return e === "SAVE_FAILED" || e === "NOT_SAVED_CHANGED_ELSEWHERE" || e === "NOT_ELIGIBLE";
}
function b(e, n) {
  return { message: n, messageMark: H(n) && e.control !== "closed" ? "SEEN" : "UNSEEN" };
}
function $e({ message: e, messageMark: n }) {
  return H(e) && n !== "SEEN_AND_CLOSED" ? { message: e, messageMark: "SEEN" } : L;
}
function Xe(e, n) {
  if (e.subject === null) return { state: e, defect: "READ_NO_SUBJECT" };
  let { mode: t, read: o } = e;
  if (t.kind === "EMPTY" && t.terminal) return { state: e };
  let r = n === "control", i = r || o?.control === true;
  if (t.kind === "WRITING" || t.kind === "SETTLING") return { state: { ...e, control: r && e.control === "closed" ? "open" : e.control, read: o && { ...o, control: i } } };
  let a = r ? { ...e, control: "open", ...$e(e) } : e;
  if (o === null || o.scheduled) return Ce(a, 0, i);
  return { state: { ...a, read: { ...o, control: i } } };
}
function Je(e) {
  return { state: e.control === "closed" ? e : { ...e, control: "closed", messageMark: e.messageMark === "SEEN" ? "SEEN_AND_CLOSED" : e.messageMark, read: e.read && { ...e.read, control: false } } };
}
function Oe({ message: e, messageMark: n }) {
  return H(e) ? { message: e, messageMark: n } : L;
}
function Ze(e, { held: n, writeId: t, decidedByUser: o }) {
  let { unsettled: r, lastWrite: i } = e;
  if (r && n.state === r.decision && t === r.writeId) return b(e, "SAVED");
  let a = o && n.state === i?.decision;
  if (a && H(e.message)) return L;
  if (r) return a && t === "" ? L : b(e, "SAVE_FAILED");
  return Oe(e);
}
function ze(e, n) {
  let { read: t, unsettled: o } = e;
  if (t?.seq !== n.seq) return { state: e };
  let r = n.type === "read_answered" && n.status === 200 ? _e(n.body) : Fe, i = r.fault ? Ye[r.fault] : void 0;
  if (n.type === "read_answered" && r.kind === "usable") return { defect: i, state: { ...e, mode: { kind: "HELD", held: { ...r.held, tRecv: n.now_ms } }, asOf: n.wall_ms, control: t.control ? "armed" : e.control, ...Ze(e, r), read: null, backoffStep: 0, unsettled: null } };
  return D({ ...e, mode: G, control: oe(e.control), ...o ? b(e, "SAVE_FAILED") : Oe(e), backoffStep: Math.min(e.backoffStep + 1, Te.length - 1) }, Te[e.backoffStep] ?? 3e5, i);
}
function Qe(e, n) {
  let { mode: t, read: o } = e;
  if (o?.scheduled) return D({ ...e, backoffStep: 0 }, 0);
  let r = t.kind === "HELD" && A(t.held, n) > e.config.cache_ms;
  return o === null && r ? D(e, 0) : { state: e };
}
function en(e) {
  return e === "CONSENT_STATE_OPTED_IN" || e === "CONSENT_STATE_OPTED_OUT";
}
function nn(e, n) {
  let t = (O) => ({ state: e, defect: O, redraw: true }), { config: o, mode: r } = e;
  if (n.epoch !== e.epoch) return t();
  if (r.kind !== "HELD" || k(e, n.now_ms) !== "READY") return t();
  let i = Object.hasOwn(o.entry_points, n.entry_point) ? o.entry_points[n.entry_point] : void 0;
  if (i === void 0) return t("CONFIRM_BAD_ENTRY_POINT");
  let { decision: a, write_id: l, record_version: f } = n;
  if (!en(a)) return t("CONFIRM_BAD_DECISION");
  if (!V(l) || l === e.lastWrite?.writeId) return t("CONFIRM_BAD_WRITE_ID");
  if (f !== "" && !V(f)) return t("CONFIRM_BAD_RECORD_VERSION");
  let { control: E } = j(e, n.now_ms);
  if (!(a === "CONSENT_STATE_OPTED_IN" ? E.can_opt_in : E.can_opt_out)) return t("CONFIRM_NOT_ALLOWED");
  let S = e.seq + 1, C = { writeId: l, decision: a };
  return { state: { ...e, seq: S, mode: { kind: "WRITING", held: r.held, seq: S, write: C }, ...L, read: null, lastWrite: C }, request: { type: "write", seq: S, body: { consent_type: o.consent_type, source: i.source, protocol_version: o.protocol_version, consent_text_id: n.text.id, consent_version_id: n.text.version_id, consent_lang_localization_code: n.text.lang, controlled_write: { expected_record_version: f, write_id: l, decision: a }, client: o.client, shown: { presentation: n.shown.presentation, preselection: n.shown.preselection } } } };
}
function Se(e, n, t) {
  return D({ ...e, mode: { kind: "SETTLING", held: n }, backoffStep: 0, unsettled: t }, 0);
}
function tn(e, n) {
  let { mode: t } = e;
  if (t.kind !== "WRITING" || t.seq !== n.seq) return { state: e };
  let { held: o, write: r } = t;
  if (n.type === "write_failed") return Se(e, o, r);
  let i = me(n.status, n.body, r), a = i.fault ? qe[i.fault] : void 0;
  switch (i.kind) {
    case "ready":
      return { defect: a, state: { ...e, mode: { kind: "HELD", held: { ...o, state: i.state, recordVersion: i.recordVersion, shown: i.state, fromWrite: true, tRecv: n.now_ms } }, asOf: n.wall_ms, control: Ne(e.control), ...b(e, i.message) } };
    case "ineligible":
      return { defect: a, state: { ...e, mode: { kind: "HELD", held: { ...o, eligibility: i.eligibility, reason: i.reason } }, control: Ne(e.control), ...b(e, "NOT_ELIGIBLE") } };
    case "erased":
      return { state: { ...e, mode: { kind: "EMPTY", terminal: true }, control: oe(e.control), ...b(e, "SAVE_FAILED") } };
    case "unknown":
      return D({ ...e, mode: G, control: oe(e.control), ...b(e, "SAVE_FAILED"), backoffStep: 0, unsettled: r }, 0, a);
    case "settling":
      return Se(e, o, r);
  }
}
function on(e, n) {
  switch (n.type) {
    case "subject_changed":
      return Ke(e, n.subject);
    case "read_requested":
      return Xe(e, n.purpose);
    case "control_closed":
      return Je(e);
    case "read_answered":
    case "read_failed":
      return ze(e, n);
    case "confirm":
      return nn(e, n);
    case "write_answered":
    case "write_failed":
      return tn(e, n);
    case "foregrounded":
      return Qe(e, n.now_ms);
    case "woke":
      return { state: { ...e, wakeDue: null } };
  }
}
function rn(e, n) {
  let { state: t } = e;
  return k(t, n) === "STALE" && t.control !== "closed" && t.read === null ? { ...e, ...D(t, 0, e.defect) } : e;
}
function sn(e, n) {
  let { mode: t, config: o } = e;
  if (t.kind !== "HELD") return null;
  if (k(e, n) === "READY" && e.control !== "closed") return t.held.tRecv + o.freshness_ms + 1;
  return A(t.held, n) <= o.cache_ms ? t.held.tRecv + o.cache_ms + 1 : null;
}
function ge(e, n) {
  let t = n.now_ms, o = rn(on(e, n), t), r = sn(o.state, t), i = r !== null && r !== o.state.wakeDue, a = i ? { ...o.state, wakeDue: r } : o.state;
  return { state: a, commands: [...o.defect ? [{ type: "log_defect", code: o.defect }] : [], ...o.request ? [o.request] : [], ...i ? [{ type: "wake", delay_ms: r - t }] : [], ...o.redraw ? [{ type: "redraw" }] : []], view: j(a, t) };
}
function re(e) {
  let n = ye(e), t = j(n, 0);
  return { step(o) {
    let r = ge(n, o);
    return n = r.state, t = r.view, { commands: r.commands, view: t };
  }, view: () => t };
}
var he = "/v1/privacy-consents/check", we = "/v1/privacy-consents";
var an = 0.2, dn = 1e4, ln = 15e3, cn = 1e3, un = 1e4, Ie = 6e4, ie = 2147483647;
function Re(e, n, t) {
  if (!Number.isInteger(n) || n < t || n > Ie) throw RangeError(`${e} must be a whole number from ${t} to ${Ie}`);
  return n;
}
function M(e) {
  try {
    e();
  } catch {
  }
}
function pn(e) {
  if (typeof e !== "object" || e === null) return false;
  let { status: n, headers: t, text: o } = e;
  return Number.isInteger(n) && typeof t === "object" && t !== null && typeof o === "string";
}
function P(e) {
  return Math.abs(e) <= Number.MAX_SAFE_INTEGER;
}
function be(e, n) {
  return P(e) && P(n) && n > e ? n - e : 0;
}
function Ae(e) {
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function fn(e) {
  return Object.fromEntries(Object.entries(e).map(([n, t]) => [n.toLowerCase(), t]));
}
function se(e) {
  let { config: n, schedule: t } = e, o = e.random ?? Math.random, r = re(n);
  if (n.cache_ms > ie) throw RangeError(`cache_ms must be at most ${ie}`);
  let i = Re("readTimeoutMs", e.readTimeoutMs ?? dn, cn), a = Re("writeTimeoutMs", e.writeTimeoutMs ?? ln, un), l = [], f = false, E = false, m = 0, S = e.monotonicNowMs(), C = e.wallNowMs(), O = null, U = null, K = /* @__PURE__ */ new Set(), I = r.view(), de = null;
  function X() {
    let s = e.monotonicNowMs(), d = e.wallNowMs();
    return m += Math.max(be(S, s), be(C, d)), S = P(s) ? s : S, C = P(d) ? d : C, { now_ms: Math.floor(m), wall_ms: P(C) ? Math.floor(C) : 0 };
  }
  function le(s, d, u, c) {
    let _ = false, g = null, p = (B) => {
      if (!_) _ = true, g?.(), K.delete(v), B?.();
    }, v = () => {
      p();
    };
    return K.add(v), g = t(d, () => {
      p(() => {
        c("timeout");
      });
    }), (async () => await e.transport(s))().then((B) => {
      p(() => {
        if (pn(B)) u(B);
        else c("network");
      });
    }, () => {
      p(() => {
        c("network");
      });
    }), v;
  }
  function x() {
    let s = O;
    O = null, s?.();
  }
  function J() {
    U?.(), U = null;
  }
  function ce(s, d) {
    let u = [], c = false, _ = () => {
      c = true;
      for (let p of u) M(p);
    }, g = le({ method: "POST", path: he, subject: d, body: { consent_type: n.consent_type, protocol_version: n.protocol_version }, onCancel: (p) => {
      if (c) M(p);
      else u.push(p);
    } }, i, ({ status: p, text: v }) => {
      O = null, y({ type: "read_answered", seq: s, status: p, body: Ae(v) });
    }, (p) => {
      if (O = null, p === "timeout") _();
      y({ type: "read_failed", seq: s, kind: p });
    });
    O = () => {
      g(), _();
    };
  }
  function Ue({ seq: s, body: d }, u) {
    le({ method: "PUT", path: we, subject: u, body: d }, a, ({ status: c, headers: _, text: g }) => {
      y({ type: "write_answered", seq: s, status: c, headers: fn(_), body: Ae(g) });
    }, (c) => {
      y({ type: "write_failed", seq: s, kind: c });
    });
  }
  function xe(s, d) {
    let u = de;
    switch (s.type) {
      case "log_defect":
        M(() => {
          e.onDefect({ code: s.code, client_id: n.client.client_id, app_version: n.client.app_version });
        });
        return;
      case "read": {
        if (x(), u === null) return;
        let { seq: c, delay_ms: _ } = s;
        if (_ === 0) {
          ce(c, u);
          return;
        }
        O = t(_ + Math.floor(_ * an * o()), () => {
          ue(() => {
            ce(c, u);
          });
        });
        return;
      }
      case "write":
        if (x(), u !== null) Ue(s, u);
        return;
      case "wake": {
        J();
        let c = s.delay_ms - (X().now_ms - d);
        U = t(Math.min(Math.max(c, 0), ie), () => {
          U = null, y({ type: "woke" });
        });
      }
    }
  }
  function Z(s) {
    I = s, M(() => {
      e.onView(s);
    });
  }
  function y(s) {
    if (E) return;
    let { now_ms: d, wall_ms: u } = X();
    ue(() => {
      l.push(s.type === "read_answered" || s.type === "write_answered" ? { ...s, now_ms: d, wall_ms: u } : { ...s, now_ms: d });
    });
  }
  function ue(s) {
    if (f) {
      s();
      return;
    }
    f = true;
    try {
      s();
      for (let d = l.shift(); d; d = l.shift()) Be(d);
    } finally {
      f = false;
    }
  }
  function Be(s) {
    let d = r.step(s);
    if (s.type === "subject_changed") de = s.subject;
    if (d.view.epoch !== I.epoch) x(), J();
    let u = false;
    for (let c of d.commands) {
      if (E) return;
      if (c.type === "redraw") u = true;
      else xe(c, s.now_ms);
    }
    if (E) return;
    if (JSON.stringify(d.view) !== JSON.stringify(I)) Z(d.view);
    else if (u) Z({ ...I });
  }
  return { view: () => I, setSubject(s) {
    y({ type: "subject_changed", subject: s });
  }, requestSessionRead() {
    y({ type: "read_requested", purpose: "session" });
  }, openControl() {
    y({ type: "read_requested", purpose: "control" });
  }, closeControl() {
    y({ type: "control_closed" });
  }, confirm({ entryPoint: s, decision: d, recordVersion: u, epoch: c, shown: _, text: g }) {
    if (E) {
      Z({ ...I });
      return;
    }
    let p = "";
    M(() => {
      p = e.newWriteId();
    }), y({ type: "confirm", entry_point: s, decision: d, write_id: p, record_version: u, epoch: c, text: g, shown: _ });
  }, foregrounded() {
    y({ type: "foregrounded" });
  }, dispose() {
    if (E) return;
    E = true, l.length = 0, x(), J();
    for (let s of K) s();
    ({ view: I } = r.step({ type: "subject_changed", subject: null, now_ms: X().now_ms }));
  } };
}
var Y = 15e3, q = 1e4, Z1o = 6e4, Jha = "358b9c99-f6d1-460a-a110-92777fdb2c7b", Qha = "en-US", Zha = { settings: "CONSENT_PRESENTATION_SETTINGS_CONTROL", notice: "CONSENT_PRESENTATION_BLOCKING_NOTICE", onboarding: "CONSENT_PRESENTATION_ONBOARDING_STEP" };
function F(e) {
  return e.replace(/[^ -~]/g, "").slice(0, 128);
}
function En() {
  return { client_id: "claude_code_cli", platform: F((0, import_chunk_tb84sczh.H_)()), app: "", app_version: F({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION), build: F({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.BUILD_TIME ?? ""), sha: F({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA ?? ""), os_version: "", host_client_id: "" };
}
function ke() {
  return { consent_type: "training.consumer_consent", protocol_version: 2, freshness_ms: Z1o, cache_ms: 36e5, client: En(), entry_points: { settings: { source: "claude_code_training_settings_control" }, notice: { source: "claude_code_training_update_notice" }, onboarding: { source: "claude_code_training_onboarding_notice" } } };
}
function Ose(e) {
  return e === "SAVE_FAILED" || e === "NOT_SAVED_CHANGED_ELSEWHERE" || e === "NOT_ELIGIBLE";
}
function De(e, n) {
  let { control: t, epoch: o, message: r } = n, i = e.epoch === o ? e : { isUp: false, epoch: o }, a = n.may_prompt && n.reason === null;
  if (!i.isUp) return a ? { isUp: true, epoch: o } : i;
  if (n.phase !== "READY") return i;
  let l = t.value === "ON" || t.value === "OFF";
  if (l && !n.may_prompt && (r === "SAVED" || r === "ALREADY_SET_ELSEWHERE")) return { isUp: false, epoch: o };
  if (l && t.visible && n.reason === null && (r === "NOT_SAVED_CHANGED_ELSEWHERE" || r === "SAVE_FAILED") || a || !n.prompt_known) return i;
  return { isUp: false, epoch: o };
}
var _n = 65536;
function ve() {
  return (0, import_chunk_f9x2f6cx.CL)() > 0 && !(0, import_chunk_f9x2f6cx.UNr)();
}
function Le() {
  return (0, import_chunk_f9x2f6cx.P3n)()?.bearerSha256 === (0, import_chunk_865at33z.Xxe)();
}
async function ae(e, { credentials: n, storageV5: t }, o) {
  await (0, import_chunk_865at33z.od)({ credentials: n, storageV5: t });
  let r = o === "PUT", i = (0, import_chunk_27rs10ep.A4o)(), a = o !== null && ((0, import_chunk_865at33z.Sw)() === void 0 ? i.isTokenUnnamed : !Le());
  if (a && (0, import_chunk_865at33z.Sw)() !== void 0) i.isTokenUnnamed = true, (0, import_chunk_f9x2f6cx.i3t)(false);
  if (o !== null && (0, import_chunk_865at33z.Sw)() === void 0 && (r || ve() || a)) await (0, import_chunk_9xz0nsgn.g4e)(t, n, { keepRenderCaches: true });
  let l = await (0, import_chunk_865at33z.uS)(t), f = (0, import_chunk_enp65fg7.uZe)(), E = (0, import_chunk_865at33z.Sw)(), m = o === null || Le() ? E : void 0, S = o !== null && (i.isTokenUnnamed || E !== void 0);
  if (f === null || f.key !== e || !(0, import_chunk_865at33z.uc)(f, l) || (m === void 0 ? r || ve() || S : !(0, import_chunk_865at33z.uc)(f, m))) throw Error("The sign-in changed, or may not use the consent service");
  if (o !== null && m !== void 0) i.isTokenUnnamed = false;
  return f;
}
async function Me(e, n) {
  var _stack = [];
  try {
    let t = mn(e, n);
    const o = __using(_stack, e.method === "PUT" && e.body.controlled_write.decision === "CONSENT_STATE_OPTED_OUT" ? (0, import_chunk_w578pjby.Ct)(() => t) : void 0);
    return await t;
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function mn(e, n) {
  let t = performance.now(), r = { auth: "claude-ai-oauth", headers: { "x-organization-uuid": (await ae(e.subject, n, e.method)).organizationUuid }, maxRedirects: 0, maxContentLength: _n, responseType: "text", validateStatus: () => true, ...n };
  if (e.method === "PUT") {
    let E = Y - (performance.now() - t);
    if (E <= 0) throw Error("The consent request was not sent in time");
    let m = await import_chunk_865at33z.zt.put("/v1/privacy-consents", e.body, { ...r, timeout: E });
    if (!m.ok) throw Error("The consent request was not sent");
    return await ae(e.subject, n, null), { status: m.status, headers: {}, text: m.data };
  }
  let i = new AbortController();
  e.onCancel(() => i.abort());
  let a = (0, import_chunk_865at33z.Xxe)(), l = await import_chunk_865at33z.zt.post("/v1/privacy-consents/check", e.body, { ...r, recoverOAuth401: true, signal: i.signal, timeout: q }).finally(() => {
    if ((0, import_chunk_865at33z.Xxe)() !== a) (0, import_chunk_27rs10ep.A4o)().isTokenUnnamed = true;
  });
  if (!l.ok) throw Error("The consent request was not sent");
  let f = (0, import_chunk_865at33z.Xxe)() === a;
  return await ae(e.subject, n, f ? null : "POST"), { status: l.status, headers: {}, text: l.data };
}
class Pe {
  #e;
  #i = /* @__PURE__ */ new Set();
  #n;
  #a = { credentials: void 0, storageV5: void 0 };
  #t = null;
  #o = 0;
  #r = false;
  #d = 0;
  constructor() {
    this.#e = se({ config: ke(), transport: (e) => this.#f(e), schedule: (e, n) => {
      let t = setTimeout(n, e);
      return t.unref(), () => clearTimeout(t);
    }, monotonicNowMs: () => performance.now(), wallNowMs: () => Date.now(), readTimeoutMs: q, writeTimeoutMs: Y, newWriteId: () => (0, import_crypto.randomUUID)(), onView: (e) => this.#s(e), onDefect: () => {
    } }), this.#n = { view: this.#e.view(), notice: { isUp: false, epoch: 0 }, subject: null, isOpeningReadOut: false };
  }
  getSnapshot = () => this.#n;
  subscribe = (e) => (this.#i.add(e), () => {
    this.#i.delete(e);
  });
  retainControl(e, n) {
    this.#a = n, this.#o++;
    let t = this.#t !== e.key;
    if (t) this.#t = e.key, this.#e.setSubject(e.key);
    if (t || this.#o === 1) this.#l();
    let o = false;
    return () => {
      if (!o) o = true, this.#p();
    };
  }
  tryAgain() {
    if (this.#o > 0) this.#l();
  }
  confirm(e) {
    return this.#e.confirm(e), this.#n.view.phase === "PENDING";
  }
  dropSubject() {
    this.#t = null, this.#r = false, this.#e.setSubject(null);
  }
  #l() {
    let { phase: e, terminal: n } = this.#e.view();
    this.#e.openControl(), this.#r = !n && e !== "PENDING", this.#s(this.#e.view());
  }
  #p() {
    if (this.#o--, this.#o > 0) return;
    this.#e.closeControl(), this.#c();
  }
  #c() {
    let { message: e, phase: n, terminal: t } = this.#n.view;
    if (this.#o === 0 && this.#t !== null && n === "UNKNOWN" && !t && !Ose(e)) this.dropSubject();
  }
  async #f(e) {
    let { epoch: n } = this.#n.view, t = e.method === "POST", o = t ? ++this.#d : 0;
    if (t) e.onCancel(() => this.#u(n, o));
    try {
      return await Me(e, this.#a);
    } catch (r) {
      if (e.subject === this.#t && (0, import_chunk_enp65fg7.uZe)()?.key !== this.#t) this.dropSubject();
      throw r;
    } finally {
      if (t) this.#u(n, o);
    }
  }
  #u(e, n) {
    if (e !== this.#n.view.epoch || n !== this.#d || !this.#r) return;
    this.#r = false, setTimeout(() => this.#s(this.#n.view), 0).unref();
  }
  #s(e) {
    this.#n = { view: e, notice: De(this.#n.notice, e), subject: this.#t, isOpeningReadOut: this.#r };
    for (let n of this.#i) n();
    this.#c();
  }
}
function VUr() {
  let e = import_chunk_27rs10ep.TQs.of((0, import_chunk_f9x2f6cx.N)().host);
  return e.host ??= new Pe(), e.host;
}
