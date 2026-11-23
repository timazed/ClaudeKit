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
var chunk_0r3gejp7_exports = {};
__export(chunk_0r3gejp7_exports, {
  C3o: () => C3o,
  Knr: () => Knr,
  Lqe: () => Lqe,
  RZs: () => RZs,
  T3o: () => T3o,
  Vnr: () => Vnr,
  Z$e: () => Z$e,
  fXt: () => fXt,
  kgt: () => kgt,
  qnr: () => qnr,
  v3o: () => v3o
});
module.exports = __toCommonJS(chunk_0r3gejp7_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_d3brd7gb = require("/$bunfs/root/chunk-d3brd7gb.js");
var import_chunk_2e866jns = require("/$bunfs/root/chunk-2e866jns.js");
var import_chunk_wragst20 = require("/$bunfs/root/chunk-wragst20.js");
var import_chunk_7gv3ezdz = require("/$bunfs/root/chunk-7gv3ezdz.js");
var import_chunk_nn296t4g = require("/$bunfs/root/chunk-nn296t4g.js");
var import_chunk_81mfwj1w = require("/$bunfs/root/chunk-81mfwj1w.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
function Lqe(n = true, e = false) {
  if (!n) return import_chunk_xcgcdx61.aOe;
  let o = (0, import_chunk_7gv3ezdz.EDt)((0, import_chunk_8m5q5cts.ll)("theme", "dark").value);
  if (e) return import_chunk_d57v19zt.Re.dim((0, import_chunk_nn296t4g.ls)("promptBorder", o)(import_chunk_xcgcdx61.aOe));
  return (0, import_chunk_nn296t4g.ls)("fastMode", o)(import_chunk_xcgcdx61.aOe);
}
function v3o(n) {
  if ((0, import_chunk_zhr7rpv7.c1e)()) return (0, import_chunk_865at33z.jRr)((0, import_chunk_865at33z.mAs)(n));
  let e = (0, import_chunk_865at33z.St)(n);
  return `2x ${(0, import_chunk_865at33z.DA)(e) ?? e} standard price`;
}
var RZs = 8e3, kgt = "Fast mode unchanged (cancelled)";
function Z$e(n) {
  if ((0, import_chunk_865at33z.dS)((0, import_chunk_bzyb60p0.gdr)({ ...n, toolPermissionContext: { mode: "default" } }))) return;
  let e = (0, import_chunk_865at33z.cNe)();
  return (0, import_chunk_865at33z.jt)(e) === (0, import_chunk_865at33z.jt)((0, import_chunk_865at33z.xE)()) ? null : e;
}
async function T3o(n, e, o) {
  let m = Z$e(e());
  if (m === void 0 || (0, import_chunk_t7fzcstv.Zl)() || !(0, import_chunk_bzyb60p0.Sne)(n)) return { vetted: Vnr, messages: [] };
  let u = await (0, import_chunk_d3brd7gb.VD)(n, e, m, "command", { signal: o });
  if (u.decision === "proceed") return { vetted: { target: m }, messages: u.messages };
  return { refusal: (0, import_chunk_d3brd7gb.VJ)(m, u.decision === "ask" ? `${u.reason ?? "confirmation required"} (use /model to switch, then /fast)` : u.reason, u.messages) };
}
var Vnr = { unvetted: true };
function fXt(n, e) {
  let o = e ? "turned on" : "turned off";
  switch (n.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${o} there`;
    case "stale":
      return `Fast mode wasn't ${o}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode wasn't ${o} in the workspace: ${n.reason}`;
  }
}
function Knr(n, e, o, m = true, u, c = Vnr) {
  if (m &&= (0, import_chunk_865at33z.nhe)(), (0, import_chunk_865at33z.ooe)(), e) (0, import_chunk_865at33z.zfn)();
  let w = () => {
    if (m && !(0, import_chunk_f9x2f6cx.Se)()) return;
    (0, import_chunk_f9x2f6cx.oE)({ ...(0, import_chunk_f9x2f6cx.Fd)() ?? {}, fastMode: e });
  }, M = () => {
    if ((0, import_chunk_2e866jns.wtt)({ fastMode: e }, o), e) {
      let i = false, r = null;
      if (o((l) => {
        let s = Z$e(l);
        if (s === void 0) return l;
        if (!("unvetted" in c) && c.target !== s) return l;
        return (0, import_chunk_bzyb60p0.mR)(n, l, s, "command"), i = true, r = s, { ...l, mainLoopModel: s, mainLoopModelForSession: null };
      }), i && (0, import_chunk_865at33z.kzt)()) (0, import_chunk_f9x2f6cx.Ig)(r);
    }
    if (!m) if (!(0, import_chunk_6e68m1dj.jm)() && (0, import_chunk_865at33z.kzt)()) import_chunk_trq47kfh.Ti.notifyChange("flagSettings");
    else (0, import_chunk_r3mm3x33.pr)();
  };
  if ((0, import_chunk_t7fzcstv.Zl)()) {
    w();
    let i = (0, import_chunk_865at33z.dt)(), r = (0, import_chunk_t7fzcstv.br)();
    if (!r) return M(), Promise.resolve(void 0);
    return (0, import_chunk_81mfwj1w.Qnr)(r, { subtype: "apply_flag_settings", settings: { fastMode: e ? true : null, ...e && { model: (0, import_chunk_865at33z.NRr)(i) ? i : (0, import_chunk_865at33z.cNe)() } } }, (s) => ((0, import_chunk_2e866jns.wtt)({ fastMode: !e }, o), fXt({ kind: "refused", reason: (0, import_chunk_d3brd7gb.Vm)(s) }, e))).then(() => {
      M();
      return;
    }, (s) => ((0, import_chunk_w578pjby.t)(`fast mode: workspace did not accept apply_flag_settings: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: "error" }), s instanceof import_chunk_e15pxvhz.nU ? { kind: "timeout" } : { kind: "refused", reason: (0, import_chunk_d3brd7gb.Vm)((0, import_chunk_jv7av99m.d)(s)) }));
  }
  if (e && !("unvetted" in c)) {
    let i = false;
    if (o((r) => {
      let l = Z$e(r);
      return i = l !== void 0 && l !== c.target, r;
    }), i) return Promise.resolve({ kind: "stale" });
  }
  w(), (0, import_chunk_wragst20.J5r)(e, u);
  let g = (0, import_chunk_865at33z.dt)();
  if (o((i) => {
    let r = e ? Z$e(i) : void 0;
    return g = r === void 0 ? g : r, i;
  }), e) (0, import_chunk_865at33z.A7e)(g);
  else (0, import_chunk_865at33z.FRr)();
  if (m) (0, import_chunk_2yx6c1y2.Mr)("userSettings", { fastMode: e ? true : void 0 }, void 0, u).then(import_chunk_8m5q5cts.KP), (0, import_chunk_865at33z.$Rr)(e, u, g);
  return M(), Promise.resolve(void 0);
}
function C3o(n) {
  if (!(0, import_chunk_ge3qft6b.Vjt)(n)) return null;
  let e = (0, import_chunk_865at33z.b)("tengu_sunset_penguin_opus48", "2026-11-30"), o = Date.parse(e);
  if (Number.isNaN(o) || Date.now() >= o) return null;
  return { key: "opus48-fast-mode-deprecation", text: `Opus 4.8 fast mode is deprecated and will be removed on ${new Date(o).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })}`, priority: "immediate", requeueOnPreempt: true, color: "warning" };
}
async function qnr(n, e, o, m, u, c = true, w, M, g, i, r, l) {
  let s = c && (0, import_chunk_865at33z.nhe)(), O = () => (0, import_chunk_bzyb60p0.TT)(n, async () => {
    if (M) await (0, import_chunk_5appeerh.me)(M(), RZs);
    if (g?.aborted) return { kind: "refused", refusal: kgt };
    let h = (0, import_chunk_865at33z.D9)(void 0, { sessionOptIn: !c && !(0, import_chunk_6e68m1dj.jm)() && (0, import_chunk_865at33z.kzt)(), sessionOnly: !c || (0, import_chunk_f9x2f6cx.Se)() });
    if (h && e) return { kind: "refused", refusal: `Fast mode unavailable: ${h}` };
    let y = Vnr, k = [];
    if (e) {
      let F = await T3o(n, o, g);
      if (g?.aborted) return { kind: "refused", refusal: kgt };
      if (F.refusal !== void 0) return { kind: "refused", refusal: F.refusal };
      y = F.vetted, k = F.messages;
    }
    let P = e && Z$e(o()) !== void 0;
    return i?.(), { kind: "applied", remote: await Knr(n, e, m, c, w, y), willPromote: P, hookMessages: k };
  }), S = {}, _ = c && r !== void 0 && !(0, import_chunk_t7fzcstv.Zl)() ? await r(e, async () => {
    if (S.outcome = await O(), S.outcome.kind === "refused") return S.outcome.refusal;
    return S.outcome.remote === void 0 ? void 0 : fXt(S.outcome.remote, e);
  }) : void 0, p = S.outcome ?? (_ === void 0 ? await O() : void 0);
  if (p === void 0) return g?.aborted ? kgt : _ ?? "Fast mode wasn't changed";
  if (p.kind === "refused") return p.refusal;
  if (p.remote !== void 0) return fXt(p.remote, e);
  if ((0, import_chunk_y53wbr8a.a)("tengu_fast_mode_toggled", { enabled: e, source: (0, import_chunk_78g0060s.f)(u), remote: (0, import_chunk_t7fzcstv.Zl)() }), e) {
    let h = Lqe(true), y = p.willPromote ? `${import_chunk_bzyb60p0.LOn}${(0, import_chunk_bzyb60p0.CT)((0, import_chunk_865at33z.Ezt)())}` : "", k = (0, import_chunk_865at33z.dt)(), P = (0, import_chunk_865at33z.dS)(k) ? k : (0, import_chunk_865at33z.jt)((0, import_chunk_865at33z.cNe)()), v = (0, import_chunk_865at33z.St)(P), F = v3o(P), E = C3o(v);
    if (E) l?.({ type: "notification", notification: E });
    let T = s ? "" : " (this session only)", x = p.hookMessages.length > 0 ? `
${p.hookMessages.map(import_chunk_d3brd7gb.Vm).join(`
`)}` : "";
    return `${h} ${import_chunk_bzyb60p0.DOn}${y} \xB7 ${F}${T}${x}`;
  } else return `Fast mode OFF${c ? "" : " (this session only)"}`;
}
