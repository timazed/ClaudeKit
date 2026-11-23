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
var chunk_ptec3s72_exports = {};
__export(chunk_ptec3s72_exports, {
  vwn: () => vwn
});
module.exports = __toCommonJS(chunk_ptec3s72_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_hn0x7v1y = require("/$bunfs/root/chunk-hn0x7v1y.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_gd8mknr6 = require("/$bunfs/root/chunk-gd8mknr6.js");
var import_chunk_ykad4ek3 = require("/$bunfs/root/chunk-ykad4ek3.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_8n6jzsq4 = require("/$bunfs/root/chunk-8n6jzsq4.js");
var import_chunk_3pqaw3hv = require("/$bunfs/root/chunk-3pqaw3hv.js");
var import_chunk_8z6a79mx = require("/$bunfs/root/chunk-8z6a79mx.js");
var import_chunk_dw56fm8m = require("/$bunfs/root/chunk-dw56fm8m.js");
var import_chunk_7a5j4de6 = require("/$bunfs/root/chunk-7a5j4de6.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_5yhrnn87 = require("/$bunfs/root/chunk-5yhrnn87.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_t6g0rnyw = require("/$bunfs/root/chunk-t6g0rnyw.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function Jt(q) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn.Item, { label: (0, import_chunk_xfj2cwfv.wr)(q.title), meta: Re(q) }, q.draft_id);
}
function zt(Q) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn.Item, { label: (0, import_chunk_xfj2cwfv.wr)(Q.title), meta: Re(Q) }, Q.draft_id);
}
var ve = ["bug", "idea", "missing_capability"], xt = { bug: "bug", idea: "idea", missing_capability: "missing capability" }, Le = [void 0, ...import_chunk_aw5nczax.XJn], Me = [void 0, ...import_chunk_aw5nczax.JJn];
function ot(m) {
  return m === void 0 ? "(none)" : m.replace(/_/g, " ");
}
function at(m) {
  return ["type", "title", "area", "failure_mode", "task_category", "details", ...m.transcriptAvailable ? ["transcript"] : [], "send"];
}
var Ae = 500, lt = 6, dt = 3, ct = 5;
function vwn({ messages: m, onDone: d, abortSignal: c, onWriteNew: l }) {
  let [p, C] = (0, import_chunk_bs4h6795.y)(null), [b, S] = (0, import_chunk_bs4h6795.y)(0), X = (0, import_chunk_8bkqeb5d.Xe)(), [u, E] = (0, import_chunk_bs4h6795.y)("list"), [n, L] = (0, import_chunk_bs4h6795.y)(null), [F, N] = (0, import_chunk_bs4h6795.y)(false), [K, D, B] = (0, import_chunk_hn0x7v1y.fu)(0), [_, w, P] = (0, import_chunk_hn0x7v1y.fu)(null), [Y, J] = (0, import_chunk_bs4h6795.y)(null), oe = (0, import_chunk_bs4h6795.I)(-1 / 0), [te, T] = (0, import_chunk_bs4h6795.y)(null), [ne, le] = (0, import_chunk_bs4h6795.y)(null), z = (0, import_chunk_6n6exvyx.qe)().columns - 6, x = (0, import_chunk_8bkqeb5d.ir)(), ie = (0, import_chunk_bs4h6795.I)(0), q = (0, import_chunk_bs4h6795.I)(false), Q = (0, import_chunk_bs4h6795.I)(0), de = (0, import_chunk_bs4h6795.I)(false), he = (0, import_chunk_bs4h6795.I)(false), { storageV5: j, credentials: Ye } = (0, import_chunk_3jkk3v3z.Ve)(), Ue = (0, import_chunk_ykad4ek3.aa)(), Z = (0, import_chunk_ykad4ek3.Eo)((t) => t.id), ce = l !== void 0, se = (0, import_chunk_bs4h6795.ye)(async () => {
    let { queued: t } = await (0, import_chunk_aw5nczax.T$e)(void 0, j).catch(() => ({ queued: [], expired: [] }));
    (0, import_chunk_aw5nczax.FTa)((0, import_chunk_4smdap7r.U)(t, (s) => s.source_session_id === Z)), C(t);
    let i = t.length - (ce ? 0 : 1);
    return S((s) => Math.min(s, Math.max(0, i))), t;
  }, [Z, ce, j, S]);
  (0, import_chunk_bs4h6795.H)(() => {
    se().then((t) => {
      (0, import_chunk_y53wbr8a.a)("tengu_feedback_queue_opened", { queued_count: (0, import_chunk_78g0060s.Gs)(t.length), this_session_count: (0, import_chunk_78g0060s.Gs)((0, import_chunk_4smdap7r.U)(t, (i) => i.source_session_id === Z)) });
    });
  }, [se, Z]);
  let je = (p ?? []).filter((t) => t.source_session_id === Z), Je = (p ?? []).filter((t) => t.source_session_id !== Z), ee = [...je, ...Je], ze = ce && b === ee.length, Qe = ee.length + (ce ? 1 : 0), Dt = ee[b], Be = n ? (0, import_chunk_aw5nczax.K8t)(n.request_ids).length : 0, ue = (0, import_chunk_bs4h6795.ye)((t) => {
    if (t === void 0) d();
    else d(t, { display: "system" });
  }, [d]), M = (0, import_chunk_bs4h6795.re)(() => n ? at(n) : [], [n]), ge = (0, import_chunk_bs4h6795.ye)((t) => {
    ie.current = x.now(), D(t.length - 1);
  }, [x, D]), f = M[K], fe = f === "title" || f === "area" || f === "details", _t = (0, import_chunk_bs4h6795.ye)((t) => {
    L(t), N(t.transcriptAvailable), T(null), w({ type: t.type, title: (0, import_chunk_xfj2cwfv.wr)(t.title), area: (0, import_chunk_xfj2cwfv.wr)(t.area ?? ""), failureMode: t.failure_mode, taskCategory: t.task_category, details: (0, import_chunk_xfj2cwfv.bmn)(t.details) }), J(null), oe.current = -1 / 0, ge(at(t)), Q.current = x.now(), q.current = false, he.current = false, E("review");
  }, [x, ge, w]), Ze = (0, import_chunk_bs4h6795.ye)(async (t) => {
    let i = x.now(), s = Q.current;
    if (Q.current = Math.max(i, s), i - s < Ae || de.current || q.current) return;
    de.current = true;
    try {
      await (0, import_chunk_t6g0rnyw.LJn)(t, "panel", j).catch(() => {
      }), await se(), E("list"), L(null);
    } finally {
      de.current = false;
    }
  }, [se, x, j]), be = (0, import_chunk_bs4h6795.ye)((t) => {
    L(t), C((h) => h ? h.map((v) => v.draft_id === t.draft_id ? t : v) : h);
    let { transcriptAvailable: i, ...s } = t;
    return (0, import_chunk_aw5nczax.mGo)(s, /* @__PURE__ */ new Date(), j).then((h) => {
      if (!h.success) T(h.reason === "too_large" ? "That draft is too large to save. Trim the details." : "Could not save the draft to disk.");
    });
  }, [j]), we = (0, import_chunk_bs4h6795.ye)(() => {
    let t = P();
    if (!n || !t) return n;
    let i = (0, import_chunk_xfj2cwfv.wr)(n.title), s = (0, import_chunk_xfj2cwfv.wr)(n.area ?? ""), h = (0, import_chunk_xfj2cwfv.bmn)(n.details), v = t.title === i || t.title.trim() === "" ? n.title : t.title.trim(), ke = t.area === s ? n.area ?? "" : t.area.trim(), st = t.details === h ? n.details : t.details.trim() === "" ? "" : t.details;
    if (t.type === n.type && v === n.title && (ke === "" ? void 0 : ke) === n.area && t.failureMode === n.failure_mode && t.taskCategory === n.task_category && st === n.details) return n;
    return { ...n, type: t.type, title: v, area: ke === "" ? void 0 : ke, failure_mode: t.failureMode, task_category: t.taskCategory, details: st };
  }, [n, P]), et = (0, import_chunk_bs4h6795.ye)(() => {
    let t = we();
    if (t && t !== n) {
      if (n && t.details === "" && n.details !== "" && x.now() - oe.current < Ae) t = { ...t, details: n.details };
      be(t);
    }
  }, [we, n, be, x]), W = (0, import_chunk_bs4h6795.ye)((t) => {
    J(null), T((i) => i === Ce ? null : i), D((i) => {
      let s = Math.max(0, Math.min(M.length - 1, i + t));
      if (s !== i && M[s] === "send") ie.current = x.now();
      return s;
    });
  }, [M, x, D]), Rt = (0, import_chunk_bs4h6795.ye)((t, i) => {
    if (t === "type") w((s) => {
      if (!s) return s;
      let h = ve.indexOf(s.type), v = ve[(h + i + ve.length) % ve.length];
      return v ? { ...s, type: v } : s;
    });
    else if (t === "failure_mode") w((s) => {
      if (!s) return s;
      let h = Le.indexOf(s.failureMode), v = Le.length;
      return { ...s, failureMode: Le[(h + i + v) % v] };
    });
    else if (t === "task_category") w((s) => {
      if (!s) return s;
      let h = Me.indexOf(s.taskCategory), v = Me.length;
      return { ...s, taskCategory: Me[(h + i + v) % v] };
    });
    else if (t === "transcript") N((s) => !s);
  }, [w]), Tt = (0, import_chunk_bs4h6795.ye)(async () => {
    if (!n || q.current || de.current) return;
    let t = x.now(), i = ie.current;
    if (ie.current = Math.max(t, i), t - i < Ae) return;
    if (P()?.title.trim() === "") {
      T("Title is blank. Type a title, or press esc on the field to restore it.");
      return;
    }
    let s = we() ?? n;
    if (q.current = true, E("submitting"), T(null), s !== n) await be(s);
    let h;
    try {
      h = await (0, import_chunk_t6g0rnyw.W8t)({ draft: s, includeTranscript: F && s.transcriptAvailable, currentSessionMessages: m, signal: c, storageV5: j, host: Ue, credentials: Ye });
    } catch {
      h = { success: false, error: "Couldn't send feedback. The draft is still queued. Try again later." };
    }
    if (q.current = false, h.success) await se(), le(h.feedbackId), E("receipt");
    else {
      if (T(h.error), h.payloadTooLarge) {
        let v = M.indexOf("transcript");
        if (v >= 0) D(v);
      }
      E("review");
    }
  }, [n, P, F, m, c, se, x, we, be, j, Ye, Ue, M, D]);
  function St(t) {
    if (t.ctrl || t.meta) return;
    if (u === "submitting") {
      t.preventDefault();
      return;
    }
    if (t.key === "escape" && !(u === "review" && fe)) return;
    if (u === "receipt") {
      if (t.preventDefault(), (p?.length ?? 0) > 0) E("list"), L(null);
      else ue(`Feedback sent (receipt ${ne})`);
      return;
    }
    if (u === "list") {
      if (!p) {
        t.preventDefault();
        return;
      }
      if (t.key.toLowerCase() === "w" && l) {
        t.preventDefault(), l();
        return;
      }
      if (Qe === 0) {
        t.preventDefault(), ue();
        return;
      }
      if (ee.length > 0) return;
      if (t.key === "up" || t.key === "down") t.preventDefault();
      else if (t.key === "return" && l) t.preventDefault(), l();
      else if (t.key !== "escape") t.preventDefault(), ue();
      return;
    }
    if (u === "review" && n) {
      if (he.current) {
        t.preventDefault();
        return;
      }
      if (fe) {
        if (t.key === "escape") t.preventDefault(), nt();
        return;
      }
      let i = M[B()];
      if (t.key === "up") t.preventDefault(), W(-1);
      else if (t.key === "down") t.preventDefault(), W(1);
      else if (t.key === "left" || t.key === "right") t.preventDefault(), Rt(i, t.key === "left" ? -1 : 1);
      else if (t.key === " " && i === "transcript") t.preventDefault(), N((s) => !s);
      else if (t.key === "return") if (t.preventDefault(), i === "send") Tt();
      else W(1);
      else if (t.key.toLowerCase() === "d" && i !== "title" && i !== "area" && i !== "details") t.preventDefault(), Ze(n);
    }
  }
  let me = (0, import_chunk_bs4h6795.ye)(() => {
    if (he.current || q.current || de.current) return;
    he.current = true, et(), Q.current = -1 / 0, E("list"), L(null);
  }, [et]), nt = (0, import_chunk_bs4h6795.ye)(() => {
    if (u !== "review") {
      ue();
      return;
    }
    let t = M[B()];
    if (t !== "title" && t !== "area" && t !== "details") {
      me();
      return;
    }
    w((i) => i && n ? { ...i, [t]: t === "details" ? (0, import_chunk_xfj2cwfv.bmn)(n.details) : (0, import_chunk_xfj2cwfv.wr)(n[t] ?? "") } : i), J(null), ge(M), T((i) => i === Ce ? null : i);
  }, [u, n, M, B, me, w, ge, ue]), rt = !(X && ee.length > 0), Bt = u === "list" ? (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [Qe > 0 && rt && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: ze ? "write new feedback" : "review" }), Dt !== void 0 && rt && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "d", action: "discard" }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "esc", action: "close" })] }) : u === "review" ? (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: ["up", "down"], action: "move" }), (f === "type" || f === "failure_mode" || f === "task_category" || f === "transcript") && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: ["left", "right"], action: "change" }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: f === "send" ? "send" : "next" }), f === "details" && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: (0, import_chunk_gd8mknr6.e$e)() ? "shift+enter" : "ctrl+j", action: "new line" }), !fe && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "d", action: "discard" }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "esc", action: fe ? "cancel edit" : "later" })] }) : null;
  return (0, import_chunk_a46xeenj.e)(import_chunk_8z6a79mx.il, { onKeyDown: St, children: (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Feedback drafts", onCancel: nt, isCancelActive: u !== "submitting" && !fe, hideInputGuide: u === "receipt" || u === "submitting", inputGuide: Bt, children: [u === "list" && p === null && (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Loading drafts\u2026" }), u === "list" && p !== null && ee.length === 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [(0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { hint: "When Claude drafts feedback, it appears here for your review", children: "No feedback drafts yet" }), l ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [(0, import_chunk_a46xeenj.e)(vt, { isSelected: ze }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "/bug works anytime. Any other key closes this panel." })] }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Any key closes this panel." })] }), u === "list" && p !== null && ee.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.e)(Ct, { thisSession: je, others: Je, hasWriteNew: ce, defaultFocusIndex: b, onFocus: S, onOpen: _t, onWriteNew: () => l?.(), onDiscard: (t) => void Ze(t) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "wrap", children: "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days." }) })] }), u === "review" && n && _ && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(A, { isFocused: f === "type" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Type: " }), (0, import_chunk_a46xeenj.e)(pe, { value: xt[_.type], isFocused: f === "type" })] }), (0, import_chunk_a46xeenj.e)(Te, { label: "Title:", value: _.title, isFocused: f === "title", bold: true, columns: z, cursorOffset: Y, onChange: (t) => w((i) => i ? { ...i, title: t } : i), onCursorChange: J, onNext: () => W(1), onPrev: () => W(-1), onExit: me }), (0, import_chunk_a46xeenj.e)(Te, { label: "Area:", value: _.area, isFocused: f === "area", dim: true, columns: z, cursorOffset: Y, onChange: (t) => w((i) => i ? { ...i, area: t } : i), onCursorChange: J, onNext: () => W(1), onPrev: () => W(-1), onExit: me }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(A, { isFocused: f === "failure_mode" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Failure mode: " }), (0, import_chunk_a46xeenj.e)(pe, { value: ot(_.failureMode), isFocused: f === "failure_mode" })] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(A, { isFocused: f === "task_category" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Task: " }), (0, import_chunk_a46xeenj.e)(pe, { value: ot(_.taskCategory), isFocused: f === "task_category" })] }), (0, import_chunk_a46xeenj.e)(Te, { label: "Details:", value: _.details, isFocused: f === "details", dim: true, multiline: true, columns: z, cursorOffset: Y, onChange: (t) => {
    let i = Buffer.byteLength(t, "utf8");
    if (i > import_chunk_aw5nczax.iGo && i >= Buffer.byteLength(_.details, "utf8")) {
      T(Ce);
      return;
    }
    w((s) => {
      if (s && s.details.trim() !== "" && t.trim() === "") oe.current = x.now();
      return s ? { ...s, details: t } : s;
    }), T((s) => s === Ce ? null : s);
  }, onCursorChange: J, onNext: () => W(1), onPrev: () => W(-1), onExit: me }), n.transcriptAvailable ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(A, { isFocused: f === "transcript" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Send transcript: " }), (0, import_chunk_a46xeenj.e)(pe, { value: F ? "yes" : "no", isFocused: f === "transcript" }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", F ? "sends this conversation to Anthropic" : "report only"] })] }), n.source_session_id !== Z && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginLeft: 4, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "wrap", children: ["from ", (0, import_chunk_xfj2cwfv.wr)(n.cwd), " \xB7 session", " ", (0, import_chunk_xfj2cwfv.wr)(n.source_session_id)] }) })] }) : (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(A, { isFocused: false }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Send transcript: ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "expired (report only)" })] })] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: [(0, import_chunk_a46xeenj.e)(A, { isFocused: false }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "wrap", children: ["Environment info (", (0, import_chunk_xfj2cwfv.wr)(n.os), ", v", (0, import_chunk_xfj2cwfv.wr)(n.cli_version), ",", " ", (0, import_chunk_xfj2cwfv.wr)(n.model), n.effort !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [", effort", " ", (0, import_chunk_xfj2cwfv.wr)(n.effort)] }), n.thinking_type !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [", thinking ", n.thinking_type, n.thinking_budget !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [" (budget ", n.thinking_budget, ")"] })] }), n.assistant_turn_count !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [", turn ", n.assistant_turn_count, n.message_count !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: ["/", n.message_count] }), n.subagent_count !== void 0 && n.subagent_count > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [" ", "with ", n.subagent_count, " ", (0, import_chunk_7cfjrnwy.O)(n.subagent_count, "subagent")] })] }), ", drafted ", Ft(n.created_at), " ago)", Be > 0 ? ` and ${Be} API request ${(0, import_chunk_7cfjrnwy.O)(Be, "id")} are` : " is", " ", "always attached."] })] }), te && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_dw56fm8m.Ca, { error: te }) }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: [(0, import_chunk_a46xeenj.e)(A, { isFocused: f === "send" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: f === "send", children: "Send feedback" })] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "wrap", children: "We may use these reports to debug related issues and improve Claude Code. Turn off Claude-drafted feedback anytime in /config." }) })] }), u === "submitting" && (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Sending feedback\u2026" }), u === "receipt" && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.o)(import_chunk_zj98tvrk.tt, { status: "success", children: ["Feedback sent (receipt ", ne, "). Thanks!"] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: "Any key to continue" }) })] })] }) });
}
var Ce = `That edit would push Details past the ${Math.floor(import_chunk_aw5nczax.iGo / 1024)}KB limit. Trim the details first.`;
function ut(m, d) {
  return (0, import_chunk_kx2fp6pc.Og)(m.replace(/\r\n|\r/g, `
`)).split(`
`).map((c) => (0, import_chunk_kx2fp6pc.Yn)(c)).join(d ? `
` : " ");
}
function A(m) {
  let p = (0, import_chunk_sng02qpc.k)(3), { isFocused: d } = m;
  const c = d ? "suggestion" : void 0, l = d ? `${import_chunk_7r4ehpnw.xe.pointer} ` : "  ";
  let C;
  if (p[0] !== c || p[1] !== l) C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: c, children: l }), p[0] = c, p[1] = l, p[2] = C;
  else C = p[2];
  return C;
}
function pe(m) {
  let l = (0, import_chunk_sng02qpc.k)(6), { value: d, isFocused: c } = m;
  if (!c) {
    let p2;
    if (l[0] !== d) p2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: d }), l[0] = d, l[1] = p2;
    else p2 = l[1];
    return p2;
  }
  let p;
  if (l[2] === import_chunk_w1d7ygsk.R) p = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [import_chunk_7r4ehpnw.xe.triangleLeft, " "] }), l[2] = p;
  else p = l[2];
  let C;
  if (l[3] === import_chunk_w1d7ygsk.R) C = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" ", import_chunk_7r4ehpnw.xe.triangleRight] }), l[3] = C;
  else C = l[3];
  let b;
  if (l[4] !== d) b = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [p, d, C] }), l[4] = d, l[5] = b;
  else b = l[5];
  return b;
}
function Te(m) {
  let K = (0, import_chunk_sng02qpc.k)(24), { label: d, value: c, isFocused: l, bold: p, dim: C, multiline: b, columns: S, cursorOffset: X, onChange: u, onCursorChange: E, onNext: n, onPrev: L, onExit: F } = m, N = (0, import_chunk_8bkqeb5d.Xe)(), D;
  if (K[0] !== l) D = (0, import_chunk_a46xeenj.e)(A, { isFocused: l }), K[0] = l, K[1] = D;
  else D = K[1];
  let B;
  if (K[2] !== d) B = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: d }), K[2] = d, K[3] = B;
  else B = K[3];
  let _;
  if (K[4] !== D || K[5] !== B) _ = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [D, B] }), K[4] = D, K[5] = B, K[6] = _;
  else _ = K[6];
  let w;
  if (K[7] !== p || K[8] !== S || K[9] !== X || K[10] !== C || K[11] !== l || K[12] !== N || K[13] !== b || K[14] !== u || K[15] !== E || K[16] !== F || K[17] !== n || K[18] !== L || K[19] !== c) w = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginLeft: 4, children: l ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { borderStyle: b && !N ? "single" : void 0, borderLeft: true, borderTop: false, borderBottom: false, borderRight: false, borderDimColor: true, paddingLeft: b && !N ? 1 : 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_gd8mknr6.fA, { value: c, onChange: u, columns: b && !N ? S - 2 : S, onSubmit: n, onExit: F, onHistoryUp: L, onHistoryDown: n, cursorOffset: X ?? c.length, onChangeCursorOffset: E, multiline: b, inputFilter: (P) => ut(P, b), clearOnSubmit: false, disableCtrlCClear: true, disableBackslashReturn: b, disableCursorMovementForUpDownKeys: !b, disableEscapeDoublePress: true, showCursor: true, focus: true }) }) : b ? (0, import_chunk_a46xeenj.e)(import_chunk_3pqaw3hv.e9n, { value: c, bold: p, dim: C, columns: S }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: p, dimColor: C, wrap: "wrap", children: (0, import_chunk_xfj2cwfv.wr)(c) }) }), K[7] = p, K[8] = S, K[9] = X, K[10] = C, K[11] = l, K[12] = N, K[13] = b, K[14] = u, K[15] = E, K[16] = F, K[17] = n, K[18] = L, K[19] = c, K[20] = w;
  else w = K[20];
  let Y;
  if (K[21] !== _ || K[22] !== w) Y = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [_, w] }), K[21] = _, K[22] = w, K[23] = Y;
  else Y = K[23];
  return Y;
}
var Se = "+ Write new feedback";
function vt(m) {
  let p = (0, import_chunk_sng02qpc.k)(3), { isSelected: d } = m;
  const c = d ? "suggestion" : void 0, l = d ? `${import_chunk_7r4ehpnw.xe.pointer} ` : "  ";
  let C;
  if (p[0] !== c || p[1] !== l) C = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: c, children: [l, Se] }), p[0] = c, p[1] = l, p[2] = C;
  else C = p[2];
  return C;
}
function Ct(m) {
  let n = (0, import_chunk_sng02qpc.k)(34), { thisSession: d, others: c, hasWriteNew: l, defaultFocusIndex: p, onFocus: C, onOpen: b, onWriteNew: S, onDiscard: X } = m, { rows: u } = (0, import_chunk_6n6exvyx.Qo)((0, import_chunk_6n6exvyx.qe)()), E = (0, import_chunk_6n6exvyx.rl)(), L;
  if (n[0] !== c || n[1] !== d) L = [...d, ...c], n[0] = c, n[1] = d, n[2] = L;
  else L = n[2];
  let F = L, N = (d.length > 0 ? 1 : 0) + (c.length > 0 ? 1 : 0) + F.length + (l ? 2 : 0), K = Math.max(ct, u - dt - (E ? 0 : lt));
  const D = N > K ? K - 2 : K;
  let B;
  if (n[3] !== b || n[4] !== S || n[5] !== F) B = (_) => {
    let w = F[_];
    if (w) b(w);
    else S();
  }, n[3] = b, n[4] = S, n[5] = F, n[6] = B;
  else B = n[6];
  let P;
  if (n[7] !== X || n[8] !== F) P = (Y, J) => {
    let oe = F[J];
    if (Y.key.toLowerCase() === "d" && oe && !Y.ctrl) Y.preventDefault(), X(oe);
  }, n[7] = X, n[8] = F, n[9] = P;
  else P = n[9];
  let te;
  if (n[10] !== d.length) te = d.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.sc.Heading, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "This session" }) }, "this-session"), n[10] = d.length, n[11] = te;
  else te = n[11];
  let T;
  if (n[12] !== d) T = d.map(Jt), n[12] = d, n[13] = T;
  else T = n[13];
  let ne;
  if (n[14] !== c.length) ne = c.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.sc.Heading, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Other sessions" }) }, "other-sessions"), n[14] = c.length, n[15] = ne;
  else ne = n[15];
  let le;
  if (n[16] !== c) le = c.map(zt), n[16] = c, n[17] = le;
  else le = n[17];
  let z;
  if (n[18] !== l) z = l && (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.sc.Heading, {}, "gap"), n[18] = l, n[19] = z;
  else z = n[19];
  let x;
  if (n[20] !== l) x = l && (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn.Item, { label: Se }, "write-new"), n[20] = l, n[21] = x;
  else x = n[21];
  let ie;
  if (n[22] !== p || n[23] !== C || n[24] !== x || n[25] !== D || n[26] !== B || n[27] !== P || n[28] !== te || n[29] !== T || n[30] !== ne || n[31] !== le || n[32] !== z) ie = (0, import_chunk_a46xeenj.o)(import_chunk_8n6jzsq4.Qn, { wrap: false, visibleCount: D, defaultFocusIndex: p, overflowHint: "count", onFocus: C, onSelect: B, onRowKeyDown: P, children: [te, T, ne, le, z, x] }), n[22] = p, n[23] = C, n[24] = x, n[25] = D, n[26] = B, n[27] = P, n[28] = te, n[29] = T, n[30] = ne, n[31] = le, n[32] = z, n[33] = ie;
  else ie = n[33];
  return ie;
}
function Re(m) {
  return [xt[m.type], Ft(m.created_at), (0, import_chunk_xfj2cwfv.wr)(m.cwd), m.transcriptAvailable ? "transcript available" : "transcript expired (report only)"];
}
function Ft(m) {
  let d = Date.now() - Date.parse(m);
  if (!Number.isFinite(d) || d < 0) return "now";
  let c = Math.floor(d / 6e4);
  if (c < 60) return `${Math.max(1, c)}m`;
  let l = Math.floor(c / 60);
  if (l < 24) return `${l}h`;
  return `${Math.floor(l / 24)}d`;
}
