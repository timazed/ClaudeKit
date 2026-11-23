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
var chunk_wfqr20c3_exports = {};
__export(chunk_wfqr20c3_exports, {
  DOa: () => DOa,
  GL: () => GL,
  ter: () => ter
});
module.exports = __toCommonJS(chunk_wfqr20c3_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_5b6xmq1e = require("/$bunfs/root/chunk-5b6xmq1e.js");
var import_chunk_h54gmnkr = require("/$bunfs/root/chunk-h54gmnkr.js");
var import_chunk_9nypk94f = require("/$bunfs/root/chunk-9nypk94f.js");
var import_chunk_j7dp96he = require("/$bunfs/root/chunk-j7dp96he.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
(0, import_chunk_adx6804h.B)();
var b = "/claudeai-rpc/anthropic.claudeai.firstweek.v1.FirstWeekService", S = 2e3, v = /* @__PURE__ */ new Map([["TASK_READS_NONE", "none"], ["TASK_READS_IN_APP_ON_CLICK", "click"], ["TASK_READS_CLICK_ONLY", "none"], ["TASK_READS_RIGHT_AWAY_OR_CLICK", "none"]]), x = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ organizationEligible: (0, import_chunk_adx6804h.P)().default(false), newToClaudeCode: (0, import_chunk_adx6804h.P)().default(false), taskReads: (0, import_chunk_adx6804h.n)().optional() })), M = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ model: (0, import_chunk_adx6804h.n)().min(1), systemPrompt: (0, import_chunk_adx6804h.n)().min(1), thinkingType: (0, import_chunk_adx6804h.n)().min(1), answerSchema: (0, import_chunk_adx6804h.n)().min(1), maxTokens: (0, import_chunk_adx6804h.E)().int().positive().max(2e3) }));
async function w(e, s, o) {
  try {
    let r = await import_chunk_865at33z.zt.post(`${b}/${e}`, s, { ...o, auth: "teleport-org", headers: { "connect-protocol-version": "1" }, validateStatus: () => true, isBackground: true });
    if (r.ok && r.status === 200) return r.data;
    (0, import_chunk_w578pjby.t)(`firstWeek: ${e} gave no answer (${r.ok ? `HTTP ${r.status}` : r.reason})`);
  } catch {
    (0, import_chunk_w578pjby.t)(`firstWeek: ${e} did not reach the server`);
  }
  return;
}
async function y(e, s) {
  let o = x().safeParse(await w("GetEligibility", { organizationUuid: e }, { ...s, timeout: S })).data;
  return o && { ...o, taskReads: v.get(o.taskReads) };
}
async function DOa(e, s) {
  let o = await w("GetEligibility", { organizationUuid: e, startingInAppRead: true }, { ...s, timeout: S });
  return (0, import_chunk_adx6804h.c)({ inAppRead: M() }).safeParse(o).data?.inAppRead;
}
var G = /* @__PURE__ */ new Set(["turn1_waited", "turn1_edited", "turn1_no_change", "checks_passed", "checks_failed", "checks_ran", "checks_none", "committed", "scan_0", "scan_1", "scan_2", "scan_3", "task_started_waiting", "task_started_half", "task_started_worth", "task_started_found", "task_done_waiting", "task_done_half", "task_done_worth", "task_done_issue", "next_shown", "next_started", "next_dismissed"]);
function I(e, s = false) {
  return s || !G.has(e);
}
var z = 1e4, N = 3;
function ter() {
  return (0, import_chunk_3t7ve0wy.ta)() && !(0, import_chunk_f9x2f6cx.DI)() || (0, import_chunk_3t7ve0wy.Li)() === "cli" && (0, import_chunk_f9x2f6cx.Cl)() && (0, import_chunk_3t7ve0wy.KA)() && !(0, import_chunk_t7fzcstv.bt)();
}
class O {
  #t;
  #i;
  #n;
  #d = 0;
  #o = false;
  #a = false;
  load(e) {
    let s = g();
    if (this.#t !== void 0 && F()) return this.#t;
    if (this.#t === void 0 || this.#i !== s) {
      this.#n = void 0, this.#o = false, this.#i = s;
      let o = this.#u(e).catch((r) => {
        (0, import_chunk_k449cc64.i)(r);
        return;
      }).then((r) => {
        if (this.#t !== o) return;
        if (r === "not-now" || r === "out" && F() || r === void 0 && ++this.#d < N) this.#t = void 0;
        else this.#n = r;
      });
      this.#t = o;
    }
    return this.#t;
  }
  get standing() {
    if (this.#n === void 0 || this.#i !== g()) return "unknown";
    return this.#e === void 0 ? "out" : "in";
  }
  get marks() {
    return this.#e?.marks ?? /* @__PURE__ */ new Set();
  }
  get organizationUuid() {
    return this.#e?.organizationUuid;
  }
  get mayLookAtRepo() {
    return d() === "clean" && this.#e?.taskReads !== void 0;
  }
  get taskReads() {
    return this.mayLookAtRepo && this.#e?.taskReads || "none";
  }
  get checkIns() {
    let e = this.#e;
    if (e === void 0) return null;
    let s = this.#s(e), o = (0, import_chunk_sjqze7qg.wso)(s);
    return e.checkInsGroup === "treatment" && !s.has("off") && o.length > 0 ? o : null;
  }
  get areCheckInsRuledOut() {
    return this.standing === "out" || this.standing === "in" && d() === "clean" && (0, import_chunk_sjqze7qg.tis)() && this.checkIns === null;
  }
  get sixthSessionNotice() {
    return this.checkIns && (0, import_chunk_sjqze7qg.VYa)(this.marks);
  }
  enterQuestions() {
    let e = this.#e;
    if (e === void 0 || (0, import_chunk_sjqze7qg.wSi)(this.#s(e)) || (0, import_chunk_sjqze7qg.xFt)(e.marks) > 0) return false;
    return e.checkInsGroup ??= this.#r(import_chunk_sjqze7qg.nnn.checkIns), e.checkInsGroup === "treatment";
  }
  closeQuestions({ experience: e, pace: s, closedBy: o }) {
    let r = this.#e;
    if (!r?.marks.has("in") || (0, import_chunk_sjqze7qg.wSi)(this.#s(r))) return;
    if (r.checkInsGroup ??= this.#r(import_chunk_sjqze7qg.nnn.checkIns), r.checkInsGroup !== "treatment") return;
    if (this.addMarks(...e ? [`q1-${e}`] : [], s ? `q2-${s}` : "q-skip"), e) this.log(`q1_${e}`);
    if (s) this.log(`q2_${s}`);
    if (o !== "answer") this.log(o === "typing" ? "questions_typed_past" : "questions_dismissed");
  }
  noteSixthSessionNoticeShown() {
    this.#o = true, this.log("notice_shown");
  }
  endCheckInsIfTold() {
    if (this.#o) this.closeSixthSessionNotice("end");
  }
  closeSixthSessionNotice(e) {
    if (this.sixthSessionNotice !== null) this.addMarks(e === "keep" ? "keep" : "off"), this.log(e === "keep" ? "kept" : "ended");
  }
  turnOffCheckIns() {
    if (this.checkIns !== null) this.addMarks("off"), this.log("turned_off");
  }
  enterTasks() {
    this.enterQuestions();
    let e = this.#e;
    if (e?.taskReads === void 0) return null;
    let s = this.#s(e);
    return s.has("ft-started") || (0, import_chunk_sjqze7qg.xFt)(s) === import_chunk_sjqze7qg.n5e.length ? null : this.#r(import_chunk_sjqze7qg.nnn.tasks);
  }
  noteSomethingNew() {
    this.addMarks("no-code"), this.log("something_new");
  }
  hasEntered() {
    let e = this.#e;
    if (e === void 0 || d() !== "clean") return false;
    if (this.#s(e).has("in")) return true;
    if (!this.#a && (e.taskReads !== void 0 || (0, import_chunk_sjqze7qg.nis)(import_chunk_sjqze7qg.nnn.checkIns))) this.#a = true, (0, import_chunk_y53wbr8a.a)("tengu_fw_missed_late", {});
    return false;
  }
  countSession() {
    let e = this.#e;
    if (e === void 0 || !this.hasEntered()) return;
    let s = (0, import_chunk_sjqze7qg.xFt)(e.marks), o = import_chunk_sjqze7qg.n5e[s];
    if (o !== void 0) this.addMarks(o), this.log(C[o]);
    return s + 1;
  }
  addMarks(...e) {
    let s = this.#e;
    if (s === void 0) return;
    let o = e.filter((r) => !s.marks.has(r));
    if (o.length === 0) return;
    for (let r of o) s.marks.add(r);
    (0, import_chunk_h54gmnkr.LOa)(o, s.accountUuid, s.handles.storageV5);
  }
  log(e) {
    if (this.#e?.marks.has("in") && d() === "clean" && I(e)) (0, import_chunk_y53wbr8a.a)(`tengu_fw_${e}`, {});
  }
  get #e() {
    let e = this.#n;
    if (e === void 0 || e === "out") return;
    if (e.marks.has("in") ? !(0, import_chunk_h54gmnkr._Ht)().includes("in") : (0, import_chunk_h54gmnkr.qKr)()) {
      this.#n = "out";
      return;
    }
    return this.#i !== g() || d() === "out" ? void 0 : e;
  }
  async #u(e) {
    let s = (0, import_chunk_865at33z.Sn)();
    if (A(e), !ter() || !s?.organizationUuid || (0, import_chunk_5b6xmq1e.ZYt)()) return "out";
    let { accountUuid: o, organizationUuid: r } = s;
    if ((0, import_chunk_h54gmnkr.qKr)()) return "out";
    let k = await q();
    if (A(e), !k) return "not-now";
    if (!(0, import_chunk_sjqze7qg.mot)() || !(0, import_chunk_865at33z.Rt)() || !(0, import_chunk_865at33z.Vg)()) return "out";
    let l = d();
    if (l !== "clean") return l;
    if (R(o)) return "not-now";
    let f = await y(r, e);
    if (f === void 0) {
      (0, import_chunk_cqa9hrgx.m)("first_week_load", "no_answer");
      return;
    }
    if (R(o)) return "not-now";
    let _ = new Set((0, import_chunk_h54gmnkr._Ht)()), h = _.has("in");
    if ((0, import_chunk_cqa9hrgx.u)("first_week_load"), !h && !f.newToClaudeCode) return (0, import_chunk_h54gmnkr.J8s)({ accountUuid: o, hasEntered: h }, e.storageV5), "out";
    if (!f.organizationEligible || !h && (await (0, import_chunk_9nypk94f.FOa)({ limit: 2 }, e.storageV5)).some((T) => T.sessionId !== (0, import_chunk_f9x2f6cx.W)())) return "out";
    if ((0, import_chunk_sjqze7qg.KYa)(_)) return (0, import_chunk_h54gmnkr.J8s)({ accountUuid: o, hasEntered: h }, e.storageV5), "out";
    return { accountUuid: o, organizationUuid: r, taskReads: f.taskReads, marks: _, handles: e, checkInsGroup: null };
  }
  #r(e) {
    let s = d() === "clean" ? (0, import_chunk_sjqze7qg.bSi)(e) : null;
    if (s !== null && !this.marks.has("in")) this.addMarks("in"), this.log("entered");
    return s;
  }
  #s(e) {
    for (let s of (0, import_chunk_h54gmnkr._Ht)()) e.marks.add(s);
    if (e.checkInsGroup === null && (0, import_chunk_sjqze7qg.wso)(e.marks).length > 0 && d() === "clean") e.checkInsGroup = (0, import_chunk_sjqze7qg.bSi)(import_chunk_sjqze7qg.nnn.checkIns);
    return e.marks;
  }
}
var GL = new import_chunk_2904xtvq.j(() => new O()), C = { s1: "session_1", s2: "session_2", s3: "session_3", s4: "session_4", s5: "session_5" };
function g() {
  let e = (0, import_chunk_865at33z.Sn)();
  return e && `${e.accountUuid}/${e.organizationUuid}`;
}
function R(e) {
  let s = (0, import_chunk_j7dp96he.CS)();
  return s !== void 0 && s.accountUuid !== e;
}
function F() {
  return (0, import_chunk_865at33z.Dc)() === void 0 && (0, import_chunk_h54gmnkr._Ht)().includes("in") && (0, import_chunk_865at33z.wa)() && (0, import_chunk_865at33z.Vg)();
}
function A({ storageV5: e }) {
  if ((0, import_chunk_865at33z.i_)()) (0, import_chunk_h54gmnkr.YKr)(e);
}
function d() {
  if ((0, import_chunk_5b6xmq1e.ZYt)() || !(0, import_chunk_865at33z.W0)()) return "out";
  (0, import_chunk_865at33z.Rt)();
  let e = (0, import_chunk_5b6xmq1e.KKr)({ zeroRetentionOrganizations: "out", consumerPlans: "out" });
  return e.answer === "clean" && e.plan !== "enterprise" ? "out" : e.answer;
}
async function q() {
  let { promise: e, resolve: s } = Promise.withResolvers(), o = () => {
    if ((0, import_chunk_sjqze7qg.tis)() && (!(0, import_chunk_sjqze7qg.mot)() || !(0, import_chunk_865at33z.Rt)() || d() !== "not-now")) s(true);
  }, r = (0, import_chunk_865at33z.ys)(o), k = (0, import_chunk_2nv4wrez.BU)(() => queueMicrotask(o));
  o();
  let l = await (0, import_chunk_5appeerh.me)(Promise.all([e, (0, import_chunk_tvttgr51.SFe)()]), z);
  return r(), k(), l !== void 0;
}
