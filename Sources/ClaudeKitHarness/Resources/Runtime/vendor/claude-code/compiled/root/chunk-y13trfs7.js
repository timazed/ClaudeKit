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
var chunk_y13trfs7_exports = {};
__export(chunk_y13trfs7_exports, {
  Gqr: () => Gqr,
  jqr: () => jqr
});
module.exports = __toCommonJS(chunk_y13trfs7_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var A = { announcement: void 0, advisorModel: void 0, advisorDeferred: false, advisorActive: false };
function jqr(e, o, { querySource: l, resumeActive: u, baseModel: r, carrier: n, toolChangesRide: y }) {
  try {
    let a = (0, import_chunk_865at33z.Pr)(l), c = o.getAdvisorSetting(), s = y(), v = e.filter((f) => f.type === "attachment" && f.attachment.type === "advisor_tool"), m = (0, import_chunk_sjqze7qg.BHn)(v);
    if (u || a === "auxiliary") {
      let f = n?.advisorHeld ?? Gqr(m) ?? w(c, r, s), b = f.model === void 0 && s && !f.refused ? { model: (0, import_chunk_sjqze7qg.ECe)(c, r.model), viaToolChange: true } : f;
      return F(B(b, s), m, r);
    }
    let d = n?.advisorHeld;
    if (d === void 0) {
      if (d = Gqr(m) ?? w(c, r, s), n !== void 0) n.advisorHeld = d;
    } else if (d.model === void 0 && s && !d.refused) {
      let f = (0, import_chunk_sjqze7qg.ECe)(c, r.model);
      if (f !== void 0) {
        if (d = { model: f, viaToolChange: true }, n !== void 0) n.advisorHeld = d;
      }
    }
    let p = B(d, s), _ = d.viaToolChange && !s && d.inFallback !== true, g = R(v, c, r, p, _), S = d.model === void 0 || m !== void 0 || h(d.model, r), C = s ? false : d.inFallback === true || S;
    if (n !== void 0 && d.viaToolChange && d.inFallback === true !== C) {
      let { inFallback: f, ...b } = d;
      n.advisorHeld = C ? { ...b, inFallback: true } : b;
    }
    let k = g === void 0 ? m : g.available ? { available: true, model: g.model, toolChange: g.toolChange !== void 0, byBase: false } : { available: false, model: g.model, toolChange: g.toolChange !== void 0, byBase: g.byBase === true };
    return { ...F(p, k, r), announcement: g };
  } catch (a) {
    return (0, import_chunk_k449cc64.i)(a), A;
  }
}
function T(e, o, l) {
  return { announcement: void 0, advisorModel: e, advisorDeferred: e !== void 0 && o, advisorActive: e !== void 0 && l };
}
function F(e, o, l) {
  if (e.model === void 0 || !h(e.model, l)) return A;
  if (e.viaToolChange) return T(e.model, true, o?.available === true);
  if (e.standby && o === void 0) return A;
  if (o !== void 0 && !o.available && o.toolChange && !o.byBase) return A;
  return T(e.model, false, true);
}
function B(e, o) {
  return e.viaToolChange && !o ? { ...e, viaToolChange: false } : e;
}
function Gqr(e) {
  if (e === void 0) return;
  return { model: e.model, viaToolChange: e.toolChange };
}
function w(e, o, l) {
  let u = (0, import_chunk_sjqze7qg.ECe)(e, o.model);
  if (u !== void 0 || !l || e) return { model: u, viaToolChange: l };
  let r = q(o);
  return r === void 0 ? { model: void 0, viaToolChange: true } : { model: r, viaToolChange: true, standby: true };
}
function q(e) {
  if (!(0, import_chunk_zhr7rpv7.Ss)() || !(0, import_chunk_sjqze7qg.TH)() || !(0, import_chunk_sjqze7qg.cae)(e.model)) return;
  let o = (0, import_chunk_sjqze7qg.Dfe)(), l = [...o.filter((u) => !H(u)), ...o.filter((u) => H(u))];
  for (let u of l) {
    let r = (0, import_chunk_sjqze7qg.ECe)(u, e.model);
    if (r === void 0 || !(0, import_chunk_sjqze7qg.n7a)(e.model, r)) continue;
    if ((0, import_chunk_865at33z.pNe)(r)) return r;
    (0, import_chunk_w578pjby.t)(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${r}`);
    return;
  }
  return;
}
function H(e) {
  return (0, import_chunk_865at33z.F9)((0, import_chunk_865at33z.jt)(e));
}
function R(e, o, l, u, r = false) {
  let n = (0, import_chunk_sjqze7qg.BHn)(e), y = u ?? Gqr(n) ?? { model: (0, import_chunk_sjqze7qg.ECe)(o, l.model), viaToolChange: false }, a = y.model, c = (0, import_chunk_sjqze7qg.WHn)(e) === "add";
  if (a === void 0 || !h(a, l)) {
    let d = y.viaToolChange || r, p = (0, import_chunk_sjqze7qg.TH)() && Boolean(o);
    if (n?.available !== true) {
      if (!d || a === void 0 || n === void 0) return;
      if (n.byBase && !p) return { type: "advisor_tool", available: false, model: a, toolChange: "remove" };
      if (n.toolChange && !n.byBase && p) return { type: "advisor_tool", available: false, model: a, toolChange: "remove", byBase: true };
      return;
    }
    if (a === void 0) return { type: "advisor_tool", available: false };
    if (!d) return { type: "advisor_tool", available: false, model: a, byBase: true };
    return p ? { type: "advisor_tool", available: false, model: a, toolChange: "remove", byBase: true } : { type: "advisor_tool", available: false, model: a, toolChange: "remove" };
  }
  let s = (0, import_chunk_sjqze7qg.o7a)(e);
  if (y.viaToolChange) {
    if ((0, import_chunk_sjqze7qg.ECe)(o, l.model) === void 0) return c || n?.available === true ? { type: "advisor_tool", available: false, model: a, toolChange: "remove" } : void 0;
    if (c && n?.available !== false) return s ? void 0 : { type: "advisor_tool", available: true, model: a, toolChange: "add" };
    return s ? { type: "advisor_tool", available: true, model: a, abbreviated: true, toolChange: "add" } : { type: "advisor_tool", available: true, model: a, toolChange: "add" };
  }
  let v = { type: "advisor_tool", available: true, model: a }, m = { ...v, abbreviated: true };
  if (r) {
    if ((0, import_chunk_sjqze7qg.ECe)(o, l.model) === void 0) return n?.available === true || n !== void 0 && n.byBase || n === void 0 && y.standby !== true ? { type: "advisor_tool", available: false, model: a, toolChange: "remove" } : void 0;
    if (n?.available === true) return s ? void 0 : v;
    return s ? m : v;
  }
  if (n === void 0) return y.standby ? void 0 : v;
  if (n.available) return s ? void 0 : v;
  if (n.toolChange && !n.byBase) return;
  return s ? m : v;
}
function h(e, o) {
  return (0, import_chunk_sjqze7qg.UHn)() && (0, import_chunk_sjqze7qg.tWe)(e) && (0, import_chunk_sjqze7qg.cae)(o.model) && (0, import_chunk_sjqze7qg.r5e)(o.model, e);
}
