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
var chunk_zs6b24vw_exports = {};
__export(chunk_zs6b24vw_exports, {
  Gii: () => Gii,
  Jii: () => Jii,
  Kii: () => Kii,
  RXr: () => RXr,
  Usr: () => Usr,
  Vii: () => Vii,
  WJt: () => WJt,
  Wii: () => Wii,
  Xii: () => Xii,
  Yii: () => Yii,
  ZRn: () => ZRn,
  e_t: () => e_t,
  gnt: () => gnt,
  jii: () => jii,
  oYo: () => oYo,
  qii: () => qii,
  rYo: () => rYo,
  sYo: () => sYo,
  xXr: () => xXr,
  zii: () => zii
});
module.exports = __toCommonJS(chunk_zs6b24vw_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_ma8jx6m7 = require("/$bunfs/root/chunk-ma8jx6m7.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_6k3h3wej = require("/$bunfs/root/chunk-6k3h3wej.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var v = 5e3;
function y(e, t) {
  return t !== void 0 && !e.hasOpenReview() && e_t() === null && t();
}
class R {
  updates = new import_chunk_zsqk76p8.vH();
  owner;
  constructor(e) {
    this.owner = e;
  }
  supersede(e, t, o) {
    let s = this.owner;
    this.owner = o, this.updates.enqueue({ settings: e, baseline: t }), s("superseded");
  }
  settle(e) {
    this.updates.done(), this.owner(e);
  }
}
class w {
  replRequester = null;
  requesterWaiters = [];
  noConsentSurface = false;
  stopsWhenApprovalCannotBeAsked = false;
  standaloneDialogUnanswered = null;
  rootDrawnDialog = null;
  approvalAsks = 0;
  isApprovalWithheld = false;
  approvalFinished = (0, import_chunk_69qhefwa.Be)();
  pendingReview = null;
  registerRequester(e) {
    if (this.replRequester = e, e && this.requesterWaiters.length > 0) {
      let t = this.requesterWaiters;
      this.requesterWaiters = [];
      for (let o of t) o(e);
    }
  }
  addWaiter(e) {
    this.requesterWaiters.push(e);
  }
  dropWaiter(e) {
    this.requesterWaiters = this.requesterWaiters.filter((t) => t !== e);
  }
  review(e, t, o, s) {
    return new Promise((n) => {
      if (this.pendingReview) {
        this.pendingReview.supersede(t, o, n);
        return;
      }
      if (y(this, s)) {
        n("first_party_silent");
        return;
      }
      let i = new R(n);
      this.pendingReview = i, (0, import_chunk_y53wbr8a.a)("tengu_managed_settings_security_dialog_shown", {});
      let d;
      try {
        d = e(t, o, i.updates);
      } catch {
        d = Promise.resolve("deferred_no_consent_surface");
      }
      d.then((c) => this.close(i, c), () => this.close(i, "deferred_no_consent_surface"));
    });
  }
  hasOpenReview() {
    return this.pendingReview !== null;
  }
  close(e, t) {
    if (this.pendingReview = null, t === "approved") (0, import_chunk_y53wbr8a.a)("tengu_managed_settings_security_dialog_accepted", {}), (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_security_check");
    else if (t === "rejected") (0, import_chunk_y53wbr8a.a)("tengu_managed_settings_security_dialog_rejected", {});
    e.settle(t);
  }
  startupConsentRelease = null;
  fireStartupConsentRelease() {
    let e = this.startupConsentRelease;
    if (e) this.startupConsentRelease = null, e();
  }
  consentNeededRelease = null;
  async fireConsentNeededRelease() {
    let e = this.consentNeededRelease;
    if (e) this.consentNeededRelease = null, await e();
  }
  consentHandoffHolds = /* @__PURE__ */ new Set();
  consentHandoffSignal = (0, import_chunk_69qhefwa.Be)();
  consentHandoffRevealActive = false;
}
var C = new import_chunk_2904xtvq.j(() => new w());
function r() {
  return C.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Wii() {
  return (0, import_chunk_ky5sghtd.va)().pendingStandaloneRender !== null;
}
function Usr() {
  return r().standaloneDialogUnanswered;
}
function rYo() {
  let e = r();
  if (e.approvalAsks > 0) return "asking";
  return e.isApprovalWithheld ? "withheld" : "settled";
}
function jii(e) {
  return r().approvalFinished.subscribe(e);
}
function D() {
  return r().rootDrawnDialog;
}
function e_t() {
  let e = (0, import_chunk_ky5sghtd.va)().pendingStandaloneRender;
  if (e !== null) return e.then(() => {
  }, () => {
  });
  return D();
}
function WJt(e) {
  r().registerRequester(e);
}
function Gii(e) {
  let t = r();
  return t.startupConsentRelease = e, () => {
    if (t.startupConsentRelease === e) t.startupConsentRelease = null;
  };
}
function RXr() {
  let e = r(), t = Symbol("consent-handoff-hold");
  if (e.consentHandoffHolds.add(t), e.consentHandoffHolds.size === 1) e.consentHandoffSignal.emit();
  return () => {
    if (e.consentHandoffHolds.delete(t) && e.consentHandoffHolds.size === 0) e.consentHandoffSignal.emit();
  };
}
function ZRn() {
  return r().consentHandoffHolds.size > 0;
}
function oYo() {
  return r().consentHandoffRevealActive;
}
function zii(e) {
  return r().consentHandoffSignal.subscribe(e);
}
function Vii(e) {
  let t = r();
  return t.consentNeededRelease = e, () => {
    if (t.consentNeededRelease === e) t.consentNeededRelease = null;
  };
}
function gnt() {
  r().noConsentSurface = true, (0, import_chunk_xcgcdx61.uea)();
}
function Kii() {
  r().stopsWhenApprovalCannotBeAsked = true;
}
function qii() {
  return r().noConsentSurface;
}
async function g() {
  let e = r(), t, o = new Promise((n) => {
    t = n, e.addWaiter(n);
  }), s = await (0, import_chunk_5appeerh.qt)(o, v, "managed-settings security dialog requester wait timed out").catch(() => null);
  if (s === null) e.dropWaiter(t);
  return s;
}
async function S(e, t, o) {
  let s = r(), n = RXr();
  try {
    for (; ; ) {
      if (await (0, import_chunk_k59mf0h7._ji)(), s.replRequester) return await s.review(s.replRequester, e, t, o);
      if (!(0, import_chunk_ky5sghtd.va)().has(process.stdout) || await g() === null) return "deferred_no_consent_surface";
    }
  } finally {
    n();
  }
}
async function Yii(e, t, o, s) {
  let n = r();
  if (n.approvalAsks === 0) n.isApprovalWithheld = false;
  if (!t || !(0, import_chunk_xcgcdx61.uce)((0, import_chunk_xcgcdx61.Iz)(t))) return "no_check_needed";
  if (!(0, import_chunk_xcgcdx61.kHo)(e, t)) return "no_check_needed";
  if (!(0, import_chunk_xcgcdx61.zKn)()) return n.noConsentSurface ? "deferred_no_consent_surface" : "deferred_non_interactive";
  n.approvalAsks += 1;
  let i = true;
  try {
    let d = await H(n, e, t, o, s);
    return i = k(d), d;
  } finally {
    n.isApprovalWithheld = i, n.approvalAsks -= 1, n.approvalFinished.emit();
  }
}
function k(e) {
  switch (e) {
    case "approved":
    case "first_party_silent":
    case "superseded":
    case "no_check_needed":
      return false;
    case "rejected":
    case "deferred_no_consent_surface":
    case "deferred_non_interactive":
      return true;
  }
}
async function H(e, t, o, s, n) {
  let i = t.source === "consented_payload" ? t.settings : t.consentedPayload;
  if (e.replRequester) if (e.consentNeededRelease) {
    let l = null;
    try {
      l = RXr(), await e.fireConsentNeededRelease();
      let h = e.replRequester;
      if (h) return e.consentHandoffRevealActive = true, await e.review(h, o, i, n);
      if ((0, import_chunk_ky5sghtd.va)().has(process.stdout)) {
        let _ = await g();
        if (_) return e.consentHandoffRevealActive = true, await e.review(_, o, i, n);
      }
      return "deferred_no_consent_surface";
    } finally {
      e.consentHandoffRevealActive = false, l?.();
    }
  } else if ((0, import_chunk_k59mf0h7.$2t)()) return S(o, i, n);
  else return e.review(e.replRequester, o, i, n);
  if (e.noConsentSurface) return "deferred_no_consent_surface";
  let d = (0, import_chunk_ky5sghtd.va)();
  if (d.has(process.stdout)) {
    e.fireStartupConsentRelease();
    let l;
    do
      l = await g();
    while (l === null && ((0, import_chunk_k59mf0h7.Lvt)() || (0, import_chunk_k59mf0h7.gji)() < v));
    if (l) return (0, import_chunk_k59mf0h7.$2t)() ? S(o, i, n) : e.review(l, o, i, n);
    if ((0, import_chunk_k59mf0h7.$2t)()) return "deferred_no_consent_surface";
  }
  if (s === void 0 || e.noConsentSurface || e.stopsWhenApprovalCannotBeAsked && import_chunk_6k3h3wej.TTe.get().kind === "unavailable") {
    if (!e.noConsentSurface) e.standaloneDialogUnanswered = "not_asked";
    return "deferred_no_consent_surface";
  }
  if (y(e, n)) return e.standaloneDialogUnanswered = null, "first_party_silent";
  (0, import_chunk_y53wbr8a.a)("tengu_managed_settings_security_dialog_shown", {});
  let c = d.has(process.stdout), f = s(o, c, i);
  if (!c) d.claimForStandaloneRender(f);
  else {
    let l = f.then(() => {
    }, () => {
    });
    e.rootDrawnDialog = l, l.then(() => {
      if (e.rootDrawnDialog === l) e.rootDrawnDialog = null;
    });
  }
  let p;
  try {
    p = await f, e.standaloneDialogUnanswered = null;
  } catch (l) {
    throw e.standaloneDialogUnanswered = "closed_unanswered", (0, import_chunk_cqa9hrgx.m)("remote_managed_settings_security_check", "dialog_unavailable"), l;
  }
  if ((0, import_chunk_y53wbr8a.a)(p === "approved" ? "tengu_managed_settings_security_dialog_accepted" : "tengu_managed_settings_security_dialog_rejected", {}), p === "approved") (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_security_check");
  return p;
}
var xXr = "Managed settings were not approved; exiting without applying them.", Xii = "Your organization's managed settings need your approval, which couldn't be asked for here. Run `claude` in a terminal and approve them, then run this command again.", sYo = (0, import_chunk_69qhefwa.Be)();
function Jii(e) {
  switch (e) {
    case "rejected":
      if (process.stderr.isTTY && !(0, import_chunk_bzyb60p0.Zr)()) {
        (0, import_chunk_xfj2cwfv.Soe)();
        let t = (0, import_chunk_k59mf0h7.$2t)() ? (0, import_chunk_k59mf0h7.$Ye)() || (0, import_chunk_ma8jx6m7.tne)((0, import_chunk_f9x2f6cx.N)()).trim() : "";
        (0, import_chunk_bzyb60p0.Q2)(t === "" ? xXr : `${xXr}

Your message was not sent:
${t}`);
      }
      if (!(0, import_chunk_bzyb60p0.Zr)()) sYo.emit();
      return (0, import_chunk_bzyb60p0.Da)(1), false;
    case "deferred_no_consent_surface":
      return false;
    case "superseded":
      return false;
    case "approved":
    case "first_party_silent":
    case "no_check_needed":
    case "deferred_non_interactive":
      return true;
  }
}
