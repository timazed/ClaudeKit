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
var chunk_mr7rdebp_exports = {};
__export(chunk_mr7rdebp_exports, {
  w7s: () => w7s,
  w7t: () => w7t
});
module.exports = __toCommonJS(chunk_mr7rdebp_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_t6svp924 = require("/$bunfs/root/chunk-t6svp924.js");
var import_chunk_y13trfs7 = require("/$bunfs/root/chunk-y13trfs7.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
function w7s(t, n = false) {
  return `${(0, import_chunk_sjqze7qg.rnn)(t)} Run ${(0, import_chunk_sjqze7qg.onn)(t)}${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function w7t(t, n, s, u, o, f = true, d = false, m = []) {
  let l = (0, import_chunk_t7fzcstv.Zl)(), e = n === "off" ? void 0 : (0, import_chunk_zmb62hr5.ur)(n), c = e === void 0 || (0, import_chunk_sjqze7qg.eWe)(e);
  if ((0, import_chunk_y53wbr8a.a)("tengu_advisor_command", { advisor: e === void 0 ? (0, import_chunk_78g0060s.S)("off") : c ? (0, import_chunk_865at33z.Xt)(n) : (0, import_chunk_sjqze7qg.gSe)(e) ? (0, import_chunk_78g0060s.S)("consent_pending") : (0, import_chunk_78g0060s.S)("invalid"), remote: l }), !l && (0, import_chunk_t7fzcstv.br)()) return "The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";
  let v = l ? " (this session only)" : f ? "" : " for this session \u2014 run /advisor in the terminal to change your default";
  if (e === void 0) {
    if (u((r) => r.advisorModel === void 0 ? r : { ...r, advisorModel: void 0 }), l) (0, import_chunk_t7fzcstv.br)()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: null } }).catch(import_chunk_k449cc64.i);
    else if (A(t, ""), f) (0, import_chunk_2yx6c1y2.Mr)("userSettings", { advisorModel: void 0 }, void 0, o).then(import_chunk_8m5q5cts.KP);
    return `Advisor disabled${v}${y(m, void 0, s)}`;
  }
  if (!c) {
    if ((0, import_chunk_sjqze7qg.gSe)(e)) return w7s(e, d);
    let r = [...(0, import_chunk_sjqze7qg.Dfe)(), "off"].join(", ");
    return `${(0, import_chunk_wbk1hf21.Dr)((0, import_chunk_865at33z.oke)(e))} can't be used as an advisor. Options: ${r}`;
  }
  if (u((r) => r.advisorModel === e ? r : { ...r, advisorModel: e }), l) (0, import_chunk_t7fzcstv.br)()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: e } }).catch(import_chunk_k449cc64.i);
  else if (A(t, e), f) (0, import_chunk_2yx6c1y2.Mr)("userSettings", { advisorModel: e }, void 0, o).then(import_chunk_8m5q5cts.KP);
  let g = (0, import_chunk_wbk1hf21.Dr)((0, import_chunk_865at33z.oke)(e)), h = (0, import_chunk_wbk1hf21.Dr)((0, import_chunk_865at33z.oke)(s)), p = `Advisor set to ${g}${v}`;
  if (!(0, import_chunk_sjqze7qg.cae)(s)) p += `
Note: the current main model (${h}) doesn't support the advisor. It turns on when you switch to a supported main model.`;
  else if (!(0, import_chunk_sjqze7qg.r5e)(s, e)) p += `
Note: ${g} is less capable than the current main model (${h}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return p + y(m, e, s);
}
function y(t, n, s) {
  let u = (0, import_chunk_f9x2f6cx.ao)(), o = u.advisorHeld ?? (0, import_chunk_y13trfs7.Gqr)((0, import_chunk_sjqze7qg.BHn)(t));
  if (o === void 0) return "";
  if (o.refused) return n === void 0 ? "" : `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let f = (0, import_chunk_b83x8d52.Uq)(u, s);
  if (o.model === void 0 && f) return "";
  if (o.viaToolChange && (f || o.inFallback !== true && o.model !== void 0)) return o.model !== void 0 && n !== void 0 && !(0, import_chunk_k67pwqya.b4)(n, o.model) ? `
The current conversation keeps ${(0, import_chunk_wbk1hf21.Dr)((0, import_chunk_865at33z.oke)(o.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.` : "";
  let d = (0, import_chunk_sjqze7qg.BHn)(t), m = d !== void 0 && !d.available && d.toolChange && !d.byBase, l = o.standby === true && d === void 0, e = m || l ? void 0 : o.model;
  if (e === n || e !== void 0 && n !== void 0 && (0, import_chunk_k67pwqya.b4)(n, e)) return "";
  return `
The current conversation ${e === void 0 ? "runs without the advisor" : `keeps ${(0, import_chunk_wbk1hf21.Dr)((0, import_chunk_865at33z.oke)(e))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}
function A(t, n) {
  (0, import_chunk_f9x2f6cx.oE)({ ...(0, import_chunk_f9x2f6cx.Fd)() ?? {}, advisorModel: n }), (0, import_chunk_t6svp924.Wqr)(t, n);
}
