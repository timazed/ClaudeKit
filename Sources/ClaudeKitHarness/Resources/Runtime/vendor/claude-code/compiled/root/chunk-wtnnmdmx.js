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
var chunk_wtnnmdmx_exports = {};
__export(chunk_wtnnmdmx_exports, {
  H$e: () => H$e,
  RYs: () => RYs,
  XVo: () => XVo,
  _Tn: () => _Tn,
  gTn: () => gTn,
  ger: () => ger,
  iqr: () => iqr,
  sqr: () => sqr
});
module.exports = __toCommonJS(chunk_wtnnmdmx_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_81mfwj1w = require("/$bunfs/root/chunk-81mfwj1w.js");
var R = { low: "Quick, straightforward implementation", medium: "Balanced approach with standard testing", high: "Comprehensive implementation with extensive testing", xhigh: "Extended reasoning with thorough analysis (on supported models)", max: "Maximum capability with deepest reasoning (on supported models)" }, gTn = "dynamic workflows on every task";
function T() {
  return "- auto: Use the default effort level for your model";
}
function sqr() {
  let e = (0, import_chunk_865at33z.dt)(), t = (0, import_chunk_k67pwqya.jG)(e), n = (0, import_chunk_k67pwqya.hwe)(e);
  return `Usage: /effort [${n.join("|")}|auto${t ? "|ultracode [on|off]" : ""}]

Effort levels:
` + n.map((r) => `- ${r}: ${R[r]}
`).join("") + T() + (t ? `

Ultracode (any effort level, this session only):
- ultracode [on|off]: ${gTn}` : "");
}
function g(e) {
  let t = (0, import_chunk_k67pwqya.hwe)(e), n = (0, import_chunk_k67pwqya.jG)(e) ? ", ultracode [on|off]" : "";
  return `${t.join(", ")}, auto${n}`;
}
function RYs({ effortUpdate: e }) {
  return e !== void 0 && e.ultracode === void 0 && e.value === void 0;
}
function b(e) {
  let t = e.toLowerCase();
  return t === "auto" || t === "unset" || (0, import_chunk_k67pwqya.Rwo)(t);
}
function XVo(e) {
  if (b(e)) return { value: void 0 };
  let t = (0, import_chunk_k67pwqya.IU)(e);
  return t ? { value: t } : null;
}
function O(e) {
  if (!(0, import_chunk_t7fzcstv.br)()) return null;
  if (!(0, import_chunk_t7fzcstv.Zl)()) return " (applied here only \u2014 this connection can\u2019t change the remote session\u2019s settings)";
  return (0, import_chunk_t7fzcstv.br)()?.sendControlRequest({ subtype: "apply_flag_settings", settings: e }).catch(import_chunk_k449cc64.i), null;
}
function iqr() {
  return (0, import_chunk_t7fzcstv.br)() !== null && (0, import_chunk_t7fzcstv.Zl)();
}
function k(e) {
  return iqr() ? e.ultracodeConfirmed ?? false : void 0;
}
function w(e, t) {
  let n = (0, import_chunk_t7fzcstv.br)();
  if (!n) return null;
  if (!(0, import_chunk_t7fzcstv.Zl)()) return O({ effortLevel: e, ultracode: false });
  return (0, import_chunk_81mfwj1w.Qnr)(n, { subtype: "apply_flag_settings", settings: { effortLevel: e, ultracode: false } }).then(() => t === true ? (0, import_chunk_81mfwj1w.Qnr)(n, { subtype: "apply_flag_settings", settings: { ultracode: true } }) : void 0).catch(import_chunk_k449cc64.i), null;
}
async function F(e, t, n, r, u) {
  let l = (0, import_chunk_865at33z.dt)(), o = typeof e === "string" ? (0, import_chunk_k67pwqya.gwe)(e, l) : e, E = o !== e, c = n && !E, d = (0, import_chunk_k67pwqya.AYe)(o);
  if ((0, import_chunk_t7fzcstv.Zl)() && d === void 0) return { message: `${o} can't be set on a remote session. Use low, medium, high, or xhigh instead.` };
  let p = (0, import_chunk_k67pwqya.Swe)(o, l, c, u);
  r?.({ value: o });
  let m = k(t), h = m === false && t.ultracode === true;
  if (m !== void 0 && m !== (t.ultracode === true)) r?.({ ultracode: m });
  let v = w(d ?? null, m), y = await p;
  if (y) return { message: `Couldn't set effort level: ${y.message}` };
  (0, import_chunk_y53wbr8a.a)("tengu_effort_command", { effort: typeof o === "number" ? o : (0, import_chunk_78g0060s.f)(o), from_level: (0, import_chunk_78g0060s.fe)((0, import_chunk_k67pwqya.mw)(l, t.effort)), route: (0, import_chunk_78g0060s.f)(t.route), is_remote: (0, import_chunk_t7fzcstv.br)() !== null });
  let C = (0, import_chunk_t7fzcstv.br)() ? void 0 : (0, import_chunk_k67pwqya.rk)();
  if (C !== void 0 && C !== o) {
    let A = import_chunk_c203g5kd.s.CLAUDE_CODE_EFFORT_LEVEL;
    if (d === void 0) return { message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${A} overrides effort this session, and ${(0, import_chunk_k67pwqya.Fre)(o)} is session-only (nothing saved)`, effortUpdate: { value: o } };
    return { message: `CLAUDE_CODE_EFFORT_LEVEL=${A} overrides this session \u2014 clear it and ${(0, import_chunk_k67pwqya.Fre)(o)} takes over`, effortUpdate: { value: o } };
  }
  let L = (0, import_chunk_k67pwqya.sWi)(o), U = (0, import_chunk_k67pwqya.Mwo)(l), _ = d !== void 0 && c && !(0, import_chunk_t7fzcstv.br)() ? U !== null ? ` (saved, though your organization starts new sessions on ${l} at ${U} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (E) return { message: `Effort '${e}' exceeds the cap for ${l} set by your settings or organization; set to '${o}' instead${_}: ${L}${h ? " \xB7 Ultracode off" : ""}${v ?? ""}`, effortUpdate: { value: o } };
  return { message: `Set effort level to ${(0, import_chunk_k67pwqya.Fre)(o)}${_}: ${L}${h ? " \xB7 Ultracode off" : ""}${v ?? ""}`, effortUpdate: { value: o } };
}
function _Tn({ asDefault: e, levelChanged: t, chosen: n, model: r }) {
  return e && (t || (0, import_chunk_k67pwqya._we)(n) !== void 0 || (0, import_chunk_k67pwqya.ccn)(r) === void 0);
}
function ger(e, t, n) {
  let r = (0, import_chunk_k67pwqya.IC)(n, t) ? " \xB7 Ultracode on" : "", u = (0, import_chunk_k67pwqya._we)(e);
  if (u === void 0) {
    let o = (0, import_chunk_k67pwqya.bvt)(t, e);
    if (o === void 0) return { message: `Effort level: auto${r}` };
    let E = (0, import_chunk_k67pwqya.gvt)(t) !== null && (0, import_chunk_k67pwqya.ccn)(t) === void 0 ? ", set by your organization" : "";
    return { message: `Effort level: auto (currently ${(0, import_chunk_k67pwqya.Fre)(o)}${E})${r}` };
  }
  let l = (0, import_chunk_k67pwqya.sWi)(u);
  return { message: `Current effort level: ${(0, import_chunk_k67pwqya.Fre)(u)} (${l})${r}` };
}
async function D(e, t, n, r) {
  n?.({ value: void 0 });
  let u = k(e), l = u === false && e.ultracode === true;
  if (u !== void 0 && u !== (e.ultracode === true)) n?.({ ultracode: u });
  let o = w(null, u), E = await (0, import_chunk_k67pwqya.Swe)(void 0, (0, import_chunk_865at33z.dt)(), t, r);
  if (E) return { message: `Couldn't set effort level: ${E.message}` };
  (0, import_chunk_y53wbr8a.a)("tengu_effort_command", { effort: (0, import_chunk_78g0060s.S)("auto"), from_level: (0, import_chunk_78g0060s.fe)((0, import_chunk_k67pwqya.mw)((0, import_chunk_865at33z.dt)(), e.effort)), route: (0, import_chunk_78g0060s.f)(e.route), is_remote: (0, import_chunk_t7fzcstv.br)() !== null });
  let c = t ? "" : " (this session only)", d = (0, import_chunk_t7fzcstv.br)() ? void 0 : (0, import_chunk_k67pwqya.rk)();
  if (d !== void 0 && d !== null) {
    let p = import_chunk_c203g5kd.s.CLAUDE_CODE_EFFORT_LEVEL;
    return { message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${p} still controls this session`, effortUpdate: { value: void 0 } };
  }
  return { message: `Effort level set to auto${c}${l ? " \xB7 Ultracode off" : ""}${o ?? ""}`, effortUpdate: { value: void 0 } };
}
function N(e, t, n) {
  let r = (0, import_chunk_865at33z.dt)();
  if (e && !(0, import_chunk_k67pwqya.jG)()) return { message: `Ultracode needs dynamic workflows turned on (see /config). Options: ${g(r)}` };
  if (e && !(0, import_chunk_k67pwqya.jG)(r)) return { message: `Ultracode isn't available on ${r}. Options: ${g(r)}` };
  n?.({ ultracode: e });
  let u = O({ ultracode: e });
  (0, import_chunk_y53wbr8a.a)("tengu_effort_command", { effort: e ? (0, import_chunk_78g0060s.S)("ultracode") : (0, import_chunk_78g0060s.S)("ultracode_off"), from_level: (0, import_chunk_78g0060s.fe)((0, import_chunk_k67pwqya.mw)(r, t.effort)), route: (0, import_chunk_78g0060s.f)(t.route), is_remote: (0, import_chunk_t7fzcstv.br)() !== null });
  let l = (0, import_chunk_k67pwqya.Dvr)(t.effort, r) ?? (0, import_chunk_k67pwqya._we)(t.effort) ?? (0, import_chunk_k67pwqya.bvt)(r, t.effort) ?? "auto";
  return { message: e ? `Ultracode on (this session only): ${gTn}. Effort stays ${l}.${u ?? ""}` : `Ultracode off. Effort stays ${l}.${u ?? ""}`, effortUpdate: { ultracode: e } };
}
function W(e) {
  let [t, n, ...r] = e.split(/\s+/);
  if (t !== "ultracode" || r.length > 0) return;
  if (n === void 0 || n === "on") return true;
  return n === "off" ? false : void 0;
}
async function P(e, t, n = true, r, u) {
  let l = e.toLowerCase();
  if (b(e)) return D(t, n, r, u);
  let o = W(l);
  if (o !== void 0) return N(o, t, r);
  let E = (0, import_chunk_k67pwqya.IU)(e);
  if (!E) return { message: `Unknown option: ${e}. Options: ${g((0, import_chunk_865at33z.dt)())}` };
  return F(E, t, n, r, u);
}
function x(e, t) {
  return (0, import_chunk_k67pwqya.WRe)(e.sessionEffort, t.sessionEffort) && (0, import_chunk_k67pwqya.U2e)(e.sessionEffort) === (0, import_chunk_k67pwqya.U2e)(t.sessionEffort) && (e.ultracode ?? false) === (t.ultracode ?? false);
}
async function H$e(e, t, n, r = true, u) {
  let l = false, o = null, E = await P(e, t, r, (c) => {
    if (l = true, c.ultracode === void 0) (0, import_chunk_k67pwqya.Cwo)();
    n((d) => {
      o ??= { sessionEffort: d.sessionEffort, ultracode: d.ultracode ?? false };
      let p = c.ultracode === void 0 ? (0, import_chunk_k67pwqya.uLe)(c.value, t.steppedFrom) : d.sessionEffort, m = c.ultracode ?? d.ultracode ?? false;
      return x(d, { sessionEffort: p, ultracode: m }) ? d : { ...d, sessionEffort: p, ultracode: m };
    });
  }, u);
  if (l && !E.effortUpdate) n((c) => {
    if (o === null) return c;
    if (x(c, o)) return c;
    return { ...c, sessionEffort: o.sessionEffort, ultracode: o.ultracode };
  });
  return E;
}
