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
var chunk_g44r9njd_exports = {};
__export(chunk_g44r9njd_exports, {
  IRn: () => IRn,
  NY: () => NY,
  dsr: () => dsr
});
module.exports = __toCommonJS(chunk_g44r9njd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
function IRn(e) {
  return e.map((t) => t.includes(", ") || t.includes('"') ? (0, import_chunk_w578pjby._)(t) : t).join(", ");
}
function H(e) {
  let t = [], o = e;
  for (; ; ) {
    if (o.startsWith('"')) {
      let s = -1, i = false;
      for (let r = 1; r < o.length; r++) {
        let d = o[r];
        if (i) {
          i = false;
          continue;
        }
        if (d === "\\") {
          i = true;
          continue;
        }
        if (d === '"') {
          s = r;
          break;
        }
      }
      if (s === -1) return null;
      try {
        let r = JSON.parse(o.slice(0, s + 1));
        if (typeof r !== "string") return null;
        t.push(r);
      } catch {
        return null;
      }
      o = o.slice(s + 1);
    } else {
      let s = o.indexOf(", "), i = s === -1 ? o : o.slice(0, s);
      if (i.includes('"')) return null;
      t.push(i), o = s === -1 ? "" : o.slice(s);
    }
    if (o === "") break;
    if (!o.startsWith(", ")) return null;
    if (o = o.slice(2), o === "") return null;
  }
  return t;
}
var D = 32768, se = 8192, ie = 32768, re = 2e3, ae = import_chunk_tt4yhkc0.ME - re, ue = 2e3, M = ["skipped", "replied_in_chat", "dismissed"], le = /* @__PURE__ */ new Set(["answers", "annotations", "response", "followUp"]), ce = "afkTimeoutMs";
function V(e, t) {
  try {
    return de(e, t);
  } catch {
    return k("threw");
  }
}
function de(e, t) {
  if (!I(t)) return k("not_an_object");
  for (let h of Object.keys(t)) {
    if (h === ce) return k("host_field");
    if (le.has(h)) {
      if (Object.hasOwn(e, h)) return k("changed_shown_field");
      continue;
    }
    if (!Object.hasOwn(e, h)) return k("unknown_field");
    if (!(0, import_chunk_r9ecxfn9.KW)(t[h], e[h]) && !(h === "questions" && !Object.hasOwn(e, "title") && fe(t[h], e[h]))) return k("changed_shown_field");
  }
  let { questions: o, extended: s } = pe(q(e, "questions")), i = 0, r = 0, d = /* @__PURE__ */ new Set(), l = { ...e }, m = /* @__PURE__ */ Object.create(null), u = q(t, "answers");
  if (u !== void 0) {
    if (!I(u)) return k("answers");
    for (let h of Object.keys(u)) {
      let R = o.get(h);
      if (R === void 0) return k("answers");
      d.add(h);
      let T = u[h];
      if (typeof T === "string") {
        if (T.length > D) return k("answers");
        i += T.length, m[h] = T;
        continue;
      }
      if (!R.multiSelect || !Array.isArray(T) || T.length > R.optionCount + 1) return k("answers");
      let S = [];
      for (let O = 0; O < T.length; O++) {
        let g = T[O];
        if (typeof g !== "string" || g.length > D) return k("answers");
        S.push(g);
      }
      let y = IRn(S);
      i += y.length, m[h] = y;
    }
  }
  if (!Object.hasOwn(e, "answers")) l.answers = m;
  let w = q(t, "annotations");
  if (w !== void 0) {
    if (!I(w)) return k("annotations");
    let h = /* @__PURE__ */ Object.create(null);
    for (let R of Object.keys(w)) {
      let T = o.get(R), S = w[R];
      if (T === void 0 || !I(S)) return k("annotations");
      d.add(R);
      let y = {};
      for (let O of Object.keys(S)) {
        let g = S[O];
        switch (O) {
          case "preview":
            if (typeof g !== "string" || !me(T, g)) return k("annotations");
            r += g.length, y.preview = g;
            break;
          case "notes":
            if (typeof g !== "string" || g.length > se) return k("annotations");
            i += g.length, y.notes = g;
            break;
          case "unanswered": {
            let x = M.find((N) => N === g);
            if (x === void 0) return k("annotations");
            y.unanswered = x;
            break;
          }
          default:
            return k("annotations");
        }
      }
      h[R] = y;
    }
    l.annotations = h;
  }
  let A = q(t, "response");
  if (A !== void 0) {
    if (typeof A !== "string" || A.length > D) return k("response");
    i += A.length, l.response = A;
  }
  let v = q(t, "followUp");
  if (v !== void 0) {
    if (typeof v !== "boolean" || !s) return k("follow_up");
    l.followUp = v;
  }
  for (let h of d) r += h.length;
  if (i > ie || i + r > ae) return k("too_large");
  return { kind: "admitted", input: l };
}
function pe(e) {
  let t = /* @__PURE__ */ new Map();
  if (!Array.isArray(e)) return { questions: t, extended: false };
  let o = e.length > 0;
  for (let s of e) {
    if (!I(s)) {
      o = false;
      continue;
    }
    if (typeof q(s, "kind") !== "string") o = false;
    let i = q(s, "question");
    if (typeof i !== "string") continue;
    let r = q(s, "options"), d = Array.isArray(r) ? r : [], l = /* @__PURE__ */ new Set();
    for (let m of d) {
      let u = I(m) ? q(m, "preview") : void 0;
      if (typeof u === "string") l.add(u);
    }
    t.set(i, { multiSelect: q(s, "multiSelect") === true, optionCount: d.length, previews: l });
  }
  return { questions: t, extended: o };
}
function fe(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return false;
  let o = t.map((s, i) => {
    let r = e[i];
    if (!I(s) || !I(r)) return s;
    let d = { ...s };
    if (q(s, "kind") === "choice" && !Object.hasOwn(r, "kind")) delete d.kind;
    if (q(s, "multiSelect") === false && !Object.hasOwn(r, "multiSelect")) delete d.multiSelect;
    let l = q(s, "options"), m = q(r, "options");
    if (Array.isArray(l) && Array.isArray(m)) d.options = l.map((u, w) => {
      let A = m[w];
      if (!I(u) || !I(A) || Object.hasOwn(A, "preview")) return u;
      let { preview: v, ...h } = u;
      return h;
    });
    return d;
  });
  return (0, import_chunk_r9ecxfn9.KW)(e, o);
}
function me(e, t) {
  if (e.previews.has(t)) return true;
  for (let o of e.previews) if (o.length <= ue && (0, import_chunk_mh32mevx.cun)(o) === t && !(0, import_chunk_mh32mevx.T9)(o)) return true;
  return false;
}
function I(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return false;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
function q(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
function k(e) {
  return { kind: "refused", rule: e };
}
var Y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ label: (0, import_chunk_adx6804h.n)().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."), description: (0, import_chunk_adx6804h.n)().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."), preview: (0, import_chunk_adx6804h.n)().optional().describe("Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.") })), G = (0, import_chunk_2cbgkbm2.p)(() => Y().extend({ description: (0, import_chunk_adx6804h.n)().optional().describe("Optional: add only when the label alone would be ambiguous. One short line on what choosing it leads to.") }));
function J(e) {
  return (0, import_chunk_adx6804h.c)({ question: (0, import_chunk_adx6804h.n)().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'), header: (0, import_chunk_adx6804h.n)().describe(`Very short label displayed as a chip/tag (max ${import_chunk_e5q83yb8.r_l} chars). Examples: "Auth method", "Library", "Approach".`), options: (0, import_chunk_adx6804h.C)(e).min(2).max(4).describe((0, import_chunk_865at33z.S3i)() ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically." : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."), multiSelect: (0, import_chunk_adx6804h.P)().default(false).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.") });
}
var j = (0, import_chunk_2cbgkbm2.p)(() => J(Y())), we = (0, import_chunk_2cbgkbm2.p)(() => J(G())), ye = ["choice", "text", "number"], Z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ question: j().shape.question, header: j().shape.header, kind: (0, import_chunk_adx6804h.F)(ye).optional().describe('How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options \u2014 for open-ended input. "number": a slider/stepper between min and max \u2014 for quantities.'), description: (0, import_chunk_adx6804h.n)().optional().describe("Optional single helper line shown under the question."), options: (0, import_chunk_adx6804h.C)(G()).max(4).default(() => []).describe(`Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`), multiSelect: j().shape.multiSelect, placeholder: (0, import_chunk_adx6804h.n)().optional().describe('"text" questions only: placeholder for the empty text box.'), min: (0, import_chunk_adx6804h.E)().optional().describe('"number" questions only (required there): lowest value.'), max: (0, import_chunk_adx6804h.E)().optional().describe('"number" questions only (required there): highest value.'), step: (0, import_chunk_adx6804h.E)().positive().optional().describe('"number" questions only: increment between values.'), defaultValue: (0, import_chunk_adx6804h.E)().optional().describe('"number" questions only: the value the control starts at (within min..max).'), unit: (0, import_chunk_adx6804h.n)().optional().describe('"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".') })), be = (0, import_chunk_2cbgkbm2.p)(() => Z().superRefine((e, t) => {
  let o = e.kind ?? "choice";
  for (let [d, l] of [["placeholder", "text"], ["min", "number"], ["max", "number"], ["step", "number"], ["defaultValue", "number"], ["unit", "number"]]) if (o !== l && e[d] !== void 0) t.addIssue({ code: "custom", path: [d], message: `${d} applies only to "${l}" questions.` });
  if (o === "choice") {
    if (e.options.length < 2) t.addIssue({ code: "custom", path: ["options"], message: 'A choice question needs 2-4 options; use kind "text" for an open-ended question.' });
    return;
  }
  if (e.options.length > 0) t.addIssue({ code: "custom", path: ["options"], message: `A "${o}" question takes no options; remove them or omit kind to ask a choice question.` });
  if (e.multiSelect) t.addIssue({ code: "custom", path: ["multiSelect"], message: `multiSelect applies only to choice questions, not "${o}".` });
  if (o !== "number") return;
  let { min: s, max: i } = e;
  if (s === void 0 || i === void 0 || !(s < i)) {
    t.addIssue({ code: "custom", path: ["min"], message: "A number question needs numeric min and max with min < max." });
    return;
  }
  let { defaultValue: r } = e;
  if (r !== void 0 && (r < s || r > i)) t.addIssue({ code: "custom", path: ["defaultValue"], message: "defaultValue must lie within min..max." });
})), ee = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ preview: (0, import_chunk_adx6804h.n)().optional().describe("The preview content of the selected option, if the question used previews."), notes: (0, import_chunk_adx6804h.n)().optional().describe("Free-text notes the user added to their selection.") })), te = "Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.", ge = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), ee()).optional().describe(te)), Se = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), ee().extend({ unanswered: (0, import_chunk_adx6804h.F)(M).optional().catch(void 0).describe("How the question went unanswered: 'skipped' (the user skipped it), 'replied_in_chat' (the user sent a chat message instead), or 'dismissed' (the user closed the card). The model does not see this field; put the text it should read in `answers`. Absent when the question was answered, and also when the answering client did not report it (in a session that does not advertise ask_user_question_unanswered_v1, from an older client, or in an older transcript): then only the text in `answers` says how it ended. Treat any other value as absent.") })).optional().describe(te)), Q = { check: (e) => {
  let t = e.questions.map((o) => o.question);
  if (t.length !== new Set(t).size) return false;
  for (let o of e.questions) {
    let s = o.options.map((i) => i.label);
    if (s.length !== new Set(s).size) return false;
  }
  return true;
}, message: "Question texts must be unique, option labels must be unique within each question" }, W = 4294967295, L = 256, ke = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.bi)((e) => {
  if (!Array.isArray(e)) return e;
  let t = e.length;
  if (!Number.isInteger(t) || t < 0 || t > W) return e;
  let o = "";
  for (let s = 0; s < t; s++) {
    let i = e[s];
    if (typeof i !== "string") return e;
    o = s === 0 ? i : o + ", " + i;
  }
  return o;
}, (0, import_chunk_adx6804h.n)())), ne = (0, import_chunk_2cbgkbm2.p)(() => ({ answers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), ke()).optional().describe("User answers collected by the permission component"), annotations: ge(), metadata: (0, import_chunk_adx6804h.c)({ source: (0, import_chunk_adx6804h.n)().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.') }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.") }));
function oe(e) {
  return (0, import_chunk_adx6804h.Ae)({ questions: (0, import_chunk_adx6804h.C)(e).min(1).max(4).describe((0, import_chunk_865at33z.S3i)() ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead." : "Questions to ask the user (1-4 questions)"), ...ne() }).refine(Q.check, { message: Q.message });
}
var Oe = (0, import_chunk_2cbgkbm2.p)(() => oe(j())), _e = (0, import_chunk_2cbgkbm2.p)(() => oe(we())), Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ title: (0, import_chunk_adx6804h.n)().optional().describe('Optional single-line heading shown above the questions, e.g. "Before I build your deck".'), questions: (0, import_chunk_adx6804h.C)(be()).min(1).max(4).describe("Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."), ...ne() }).refine(Q.check, { message: Q.message })), xe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ questions: (0, import_chunk_adx6804h.C)(j()).describe("The questions that were asked"), answers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"), response: (0, import_chunk_adx6804h.n)().optional().describe("Freeform text the user typed instead of selecting a structured option"), annotations: Se(), afkTimeoutMs: (0, import_chunk_adx6804h.E)().int().positive().optional().describe("Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.") })), qe = (0, import_chunk_2cbgkbm2.p)(() => xe().extend({ questions: (0, import_chunk_adx6804h.C)(Z()).describe("The questions that were asked"), followUp: (0, import_chunk_adx6804h.P)().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.") }));
var dsr = "(notes only)";
function K(e) {
  return `No response after ${Math.round(e / 1e3)}s \u2014 the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`;
}
function X(e) {
  return { ..."title" in e && e.title && { title: e.title }, questions: (0, import_chunk_f9x2f6cx.RQe)() ? e.questions.map((t) => ({ ...t, kind: "kind" in t && t.kind ? t.kind : "choice" })) : e.questions, ...e.metadata && { metadata: e.metadata } };
}
var NY = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "810fcb79-96f9-5afa-9205-9e3527937991", name: import_chunk_e5q83yb8.so, searchHint: "prompt the user with a multiple-choice question", whenToUse: "When you are about to stop and wait for the user's answer, use it and not a plain-text question.", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return import_chunk_e5q83yb8.s_l;
}, async prompt({ model: e, leanPrompt: t }) {
  let o = (0, import_chunk_ge3qft6b.R0)({ model: e, leanPrompt: t }), s = (0, import_chunk_bzyb60p0.vza)() ? import_chunk_e5q83yb8.c1i : import_chunk_e5q83yb8.a_l, i = "";
  if (o) {
    let m = (0, import_chunk_865at33z.b)("tengu_cinder_plover", "").trim();
    i = m ? `
${m}
` : import_chunk_e5q83yb8.d_l;
  }
  let r = (0, import_chunk_f9x2f6cx.RQe)() ? import_chunk_e5q83yb8.l_l : "", d = s + i + import_chunk_e5q83yb8.c_l + r, l = (0, import_chunk_f9x2f6cx.T3n)();
  if (l === void 0) return d;
  return d + import_chunk_e5q83yb8.i_l[l];
}, get inputSchema() {
  if ((0, import_chunk_f9x2f6cx.RQe)()) return Te();
  return (0, import_chunk_f9x2f6cx.Vaa)() ? _e() : Oe();
}, get outputSchema() {
  return qe();
}, userFacingName() {
  return "";
}, validationErrorSteer(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let t = e.questions;
  if (!Array.isArray(t)) return null;
  let o = false, s = t.length;
  if (!Number.isInteger(s) || s < 0 || s > W) return null;
  for (let i = 0; i < s && i < L; i++) {
    let r = t[i];
    if (typeof r !== "object" || r === null || Array.isArray(r)) continue;
    if ((0, import_chunk_f9x2f6cx.RQe)()) {
      let l = r.kind;
      if (l === "text" || l === "number") continue;
    }
    let d = r.options;
    if (Array.isArray(d) && d.length < 2) {
      o = true;
      break;
    }
  }
  if (!o) return null;
  if ((0, import_chunk_f9x2f6cx.RQe)()) return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
  return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
}, isEnabled() {
  return (0, import_chunk_pyt5z6an.F7)();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  let t = import_chunk_e5q83yb8.d1i, o = (0, import_chunk_f9x2f6cx.RQe)();
  try {
    let s = typeof e === "object" && e !== null ? e.questions : void 0;
    if (!Array.isArray(s)) return "[malformed AskUserQuestion input]";
    let i = [], r = s.length;
    if (!Number.isInteger(r) || r < 0 || r > W) return "[malformed AskUserQuestion input]";
    for (let l = 0; l < r; l++) {
      if (i.length >= L) {
        i.push(`[\u2026 further question entries elided: reported length ${r}]`);
        break;
      }
      let m = s[l];
      if (typeof m !== "object" || m === null) {
        let S = t(m);
        i.push(S ? `[malformed question entry] ${S}` : "[malformed question entry]");
        continue;
      }
      let u = m.options, w = [];
      if (Array.isArray(u)) {
        let S = u.length;
        for (let y = 0; y < S; y++) {
          if (w.length >= L) {
            w.push("[\u2026 further option entries elided]");
            break;
          }
          let O = u[y];
          if (typeof O !== "object" || O === null) {
            w.push(`(${y + 1}) "${t(O)}"`);
            continue;
          }
          let g = O, x = [`(${y + 1}) "${t(g.label)}"`], N = t(g.description);
          if (N) x.push(`\u2014 ${N}`);
          let z = t(g.preview);
          if (z) x.push(`[preview: ${z}]`);
          w.push(x.join(" "));
        }
      }
      let A = w.join(" "), v = m.multiSelect === true ? " [multiSelect]" : "", h = t(m.header), R = h ? ` [header: ${h}]` : "", T = "";
      if (o) {
        let S = m;
        for (let [y, O] of [["kind", t(S.kind)], ["description", t(S.description)], ["placeholder", t(S.placeholder)], ["min", (0, import_chunk_e5q83yb8.Pyo)(S.min)], ["max", (0, import_chunk_e5q83yb8.Pyo)(S.max)], ["step", (0, import_chunk_e5q83yb8.Pyo)(S.step)], ["default", (0, import_chunk_e5q83yb8.Pyo)(S.defaultValue)], ["unit", t(S.unit)]]) if (O) T += ` [${y}: ${O}]`;
      }
      i.push(`"${t(m.question)}"${R}${T}${v} options: ${A}`);
    }
    if (i.length === 0) return "[malformed AskUserQuestion input]";
    let d = o ? t(e.title) : "";
    return (d ? `[title: ${d}] ` : "") + i.join(" | ");
  } catch {
    return "[malformed AskUserQuestion input]";
  }
}, admitCardAnswer: V, shownCardInput: X, requiresUserInteraction() {
  return true;
}, renderToolUseMessage() {
  return null;
}, create() {
  return { async validateInput({ questions: e }) {
    if ((0, import_chunk_f9x2f6cx.T3n)() !== "html") return { result: true };
    for (let t of e) for (let o of t.options) {
      let s = Ee(o.preview);
      if (s) return { result: false, message: `Option "${o.label}" in question "${t.question}": ${s}`, errorCode: 1 };
    }
    return { result: true };
  }, async checkPermissions(e) {
    return { behavior: "ask", message: "Answer questions?", updatedInput: X(e) };
  }, async call(e) {
    let { answers: t = {}, annotations: o } = e, i = e.questions.map((u) => Array.isArray(u.options) ? u : { ...u, options: [] }), { response: r, afkTimeoutMs: d, followUp: l } = e, m = (0, import_chunk_4smdap7r.U)(i, ({ question: u }) => {
      let w = t[u];
      return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== dsr;
    });
    return (0, import_chunk_y53wbr8a.a)("tengu_ask_user_question_completed", { extended: (0, import_chunk_f9x2f6cx.RQe)(), questionCount: i.length, choiceCount: (0, import_chunk_4smdap7r.U)(i, (u) => (u.kind ?? "choice") === "choice" && !u.multiSelect), multiSelectCount: (0, import_chunk_4smdap7r.U)(i, (u) => (u.kind ?? "choice") === "choice" && u.multiSelect), textCount: (0, import_chunk_4smdap7r.U)(i, (u) => u.kind === "text"), numberCount: (0, import_chunk_4smdap7r.U)(i, (u) => u.kind === "number"), answerCount: m, followUp: l === true, outcome: (0, import_chunk_78g0060s.f)(d ? "afk_timeout" : l ? "follow_up" : r?.trim() ? "responded" : m > 0 ? "answered" : "unanswered") }), { data: { questions: i, answers: t, ...r?.trim() && { response: r }, ...o && { annotations: o }, ...d && { afkTimeoutMs: d }, ...l === true && { followUp: true } } };
  } };
}, mapToolResultToToolResultBlockParam({ questions: e, answers: t, response: o, annotations: s, afkTimeoutMs: i, followUp: r }, d) {
  let l = e.map(({ question: u }) => {
    let w = (0, import_chunk_xcgcdx61.ko)(t, u), A = s && (0, import_chunk_xcgcdx61.ko)(s, u), v = w && w !== dsr;
    if (!v && !A?.notes) return null;
    let h = [v ? `"${u}"="${w}"` : `"${u}"=(no option selected)`];
    if (A?.preview) h.push(`selected preview:
${A.preview}`);
    if (A?.notes) h.push(`notes: ${A.notes}`);
    return h.join(" ");
  }).filter((u) => u !== null).join(", "), m;
  if (i) m = l ? `${K(i)}

Before going idle the user had selected: ${l}.` : K(i);
  else if (r) {
    let u = o?.trim() ? ` They also wrote: "${o}".` : "";
    m = l ? `${import_chunk_e5q83yb8.X$n} before you proceed. So far they answered: ${l}.${u} Call ${import_chunk_e5q83yb8.so} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` : `${import_chunk_e5q83yb8.X$n} before answering.${u} Call ${import_chunk_e5q83yb8.so} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`;
  } else if (o?.trim()) m = `The user responded: ${o}`;
  else if (l) m = e.every(({ question: w, options: A, multiSelect: v, kind: h, min: R, max: T }) => {
    if ((s && (0, import_chunk_xcgcdx61.ko)(s, w))?.notes) return false;
    if (h === "text" || h === "number") {
      let x = (0, import_chunk_xcgcdx61.ko)(t, w);
      if (x === void 0 || x === "") return true;
      if (h === "text" || typeof x !== "string") return false;
      let N = x.trim(), z = Number(N);
      return /^-?\d+(\.\d+)?$/.test(N) && Number.isFinite(z) && (R === void 0 || z >= R) && (T === void 0 || z <= T);
    }
    let y = (0, import_chunk_xcgcdx61.ko)(t, w), O = new Set(A.map((x) => x.label));
    if (Array.isArray(y)) return v && y.length > 0 && y.every((x) => O.has(x));
    if (!y || y === dsr) return true;
    if (O.has(y)) return true;
    if (!v) return false;
    let g = H(y);
    return g !== null && g.length >= 1 && IRn(g) === y && g.every((x) => O.has(x));
  }) ? `Your questions have been answered: ${l}. You can now continue with these answers in mind.` : `The user answered: ${l}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`;
  else m = "The user did not answer the questions.";
  return { type: "tool_result", content: m, tool_use_id: d };
} });
function Ee(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e)) return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e)) return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e)) return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null;
}
