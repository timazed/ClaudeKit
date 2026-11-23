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
var chunk_g6s9cndm_exports = {};
__export(chunk_g6s9cndm_exports, {
  K2s: () => K2s,
  O7n: () => O7n,
  P7n: () => P7n,
  X2s: () => X2s,
  Y2s: () => Y2s,
  q2s: () => q2s,
  x7n: () => x7n
});
module.exports = __toCommonJS(chunk_g6s9cndm_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_z2dejs1w = require("/$bunfs/root/chunk-z2dejs1w.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_path = require("path");
var K2s = new import_chunk_pzzqg6s3.ze(() => (0, import_chunk_69qhefwa.Be)()), q2s = new import_chunk_pzzqg6s3.ze(() => (0, import_chunk_69qhefwa.Be)());
function B() {
  let e = (0, import_chunk_2yx6c1y2._e)("policySettings")?.permissions?.defaultMode;
  if (e !== void 0 && e !== "auto" && e !== "bypassPermissions" && (0, import_chunk_2yx6c1y2.Loe)().some((n) => n.permissions?.defaultMode === e)) return e;
  return (0, import_chunk_xcgcdx61.oxt)() && ((0, import_chunk_2zeyvjwb.WS)() || (0, import_chunk_2zeyvjwb.uo)("hipaa")) ? "default" : void 0;
}
function M() {
  return (0, import_chunk_f9x2f6cx.Hn)() && (0, import_chunk_f9x2f6cx.sNr)() === void 0;
}
function R() {
  let e = (0, import_chunk_xcgcdx61.Tm)()?.state;
  return e !== void 0 && e !== "ineligible";
}
function x7n(e, n, r, h, p) {
  let f = (0, import_chunk_2yx6c1y2.vt)();
  (0, import_chunk_w578pjby.t)(`Settings changed from ${n}, updating app state`), (0, import_chunk_865at33z.hPe)();
  let g = (0, import_chunk_gbskgz33.eI)();
  (0, import_chunk_6zh1j84y.KRe)({ userLayer: "retain" }), (0, import_chunk_bzyb60p0.JD)();
  let S = false, D = false, l = false;
  if (r((d) => {
    let i = (0, import_chunk_bzyb60p0.vlr)(d.toolPermissionContext, g);
    i = X2s(i, d.settings.permissions?.additionalDirectories, (0, import_chunk_gbskgz33.Tvt)(), n, p?.trustFlip === true, p?.prevCwd, h);
    let k = Y2s(i, g);
    if (i = k.context, S = k.exitedAutoMode, l = k.exitedBypassPermissions, n === "policySettings" && !M() && (i.mode !== "default" || p?.isSessionStore === true && (0, import_chunk_xfj2cwfv.bAt)() === "default") && (0, import_chunk_xfj2cwfv.aOr)() && R()) {
      (0, import_chunk_xfj2cwfv.bXe)(false);
      let u = import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT ? void 0 : B(), y = i.mode, m = (0, import_chunk_xfj2cwfv.bAt)();
      if (u !== void 0 && u !== y && (m === void 0 ? y === "auto" : y === m && u !== "acceptEdits" && !(u === "plan" && i.isBypassPermissionsModeAvailable))) (0, import_chunk_w578pjby.t)(`[auto-mode] the start in ${y} gave way to ${u}; served settings failed: ${(0, import_chunk_xcgcdx61.oxt)()}`), i = { ...(0, import_chunk_awvk50qj.zD)(y, u, i, "startup_reresolve"), mode: u, ...u === "plan" && { prePlanMode: "default" } }, (0, import_chunk_xfj2cwfv.S6n)(false), S = y === "auto", D = !S;
    }
    if (i.blockReadsOutsideWorkingDirectories !== true && (0, import_chunk_trq47kfh.xYe)()) i = { ...i, blockReadsOutsideWorkingDirectories: true }, (0, import_chunk_trq47kfh.Ywo)();
    if (n === "flagSettings" && !(0, import_chunk_2yx6c1y2.kJe)() && (0, import_chunk_2yx6c1y2._e)("flagSettings")?.permissions?.blockFileToolReadsOutsideWorkingDirectories === true) (0, import_chunk_w578pjby.t)("permissions.blockFileToolReadsOutsideWorkingDirectories is ignored in settings sent to a running session: it counts only in --settings at the launch", { level: "warn" });
    if ((0, import_chunk_trq47kfh.pcn)()) i = (0, import_chunk_awvk50qj.y3o)(i);
    i = (0, import_chunk_pyt5z6an.Ayo)(i);
    let v = (0, import_chunk_trq47kfh.qwo)();
    if (!(0, import_chunk_z688m88d.Zt)(i.readBlockExemptPaths ?? [], v)) i = { ...i, readBlockExemptPaths: v };
    (0, import_chunk_p1ewvgeh.PEr)(), (0, import_chunk_p1ewvgeh.OEr)(i);
    let E = (0, import_chunk_z2dejs1w.s7t)();
    return { ...d, settings: f, toolPermissionContext: i, ...d.awaySummaryEnabled !== E && { awaySummaryEnabled: E } };
  }), (S || D) && e !== void 0) K2s.of(e).emit(D);
  if (l && e !== void 0) q2s.of(e).emit();
}
function P7n(e) {
  let n = (0, import_chunk_r3mm3x33.Br)();
  if (n.hasStateSubscriber = true, (0, import_chunk_xcgcdx61.gea)()) e();
  if (n.isChangeNoticeWithheld && n.takeMisread(import_chunk_2yx6c1y2._p)) (0, import_chunk_w578pjby.t)("Settings: after the remote settings load, one read of a settings file found settings and another found none, so the settings are applied again"), n.isChangeNoticeWithheld = false, (0, import_chunk_xcgcdx61.pge)(), import_chunk_trq47kfh.Ti.notifyChange("policySettings");
}
function Y2s(e, n) {
  let r = e, h = (0, import_chunk_3b9jqhjk.OC)(), p = h && (r.mode === "bypassPermissions" || r.mode === "plan" && r.prePlanMode === "bypassPermissions");
  if (h) r = (0, import_chunk_awvk50qj.wZs)(r);
  if (r.strippedDangerousRules !== void 0) {
    let g = new Set(import_chunk_xzvhvaa2.Ts), S = !(0, import_chunk_gbskgz33.fp)(), D = {};
    for (let [l, d] of Object.entries(r.strippedDangerousRules)) if (d && (S || l === "command") && !g.has(l)) D[l] = [...d];
    r = { ...r, strippedDangerousRules: D };
  }
  let f = (0, import_chunk_awvk50qj.Hqe)(r) && (0, import_chunk_awvk50qj.btt)();
  if (f) r = (0, import_chunk_awvk50qj.w3o)(r);
  return { context: (0, import_chunk_awvk50qj.Dqe)(r), exitedAutoMode: f, exitedBypassPermissions: p };
}
function X2s(e, n, r, h, p = false, f, g) {
  let S = new Set((n ?? []).flatMap((o) => b(o, f))), D = new Set((r ?? []).flatMap((o) => b(o))), l = e.additionalWorkingDirectories, d = [...S].filter((o) => !D.has(o) && !w(l.get(o)?.source)), i = [...D].filter((o) => (!S.has(o) || p && !l.has(o)) && !w(l.get(o)?.source)), k = (0, import_chunk_f9x2f6cx.ns)(), { declared: v, repoOnly: E } = (0, import_chunk_gbskgz33.Wvr)((o) => [...k === null ? [] : b(o, k), ...b(o)], g), u = (o) => E.has(o) ? "projectSettings" : "localSettings", y = [...l.entries()].filter(([o, a]) => !w(a.source) && !d.includes(o) && v.has(o) && a.source !== u(o));
  if (d.length === 0 && i.length === 0 && y.length === 0 && h !== "flagSettings") return e;
  let m = e;
  if (y.length > 0) {
    let o = new Map(l);
    for (let [a, P] of y) o.set(a, { ...P, source: u(a) });
    m = { ...m, additionalWorkingDirectories: o };
  }
  if (h === "flagSettings") {
    let o = new Set(((0, import_chunk_2yx6c1y2._e)("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap((c) => b(c))), a = new Map(m.trustedNetworkDirectories ?? []), P = false;
    for (let c of [...a.keys()]) if (!o.has(c) && l.get(c)?.source !== "cliArg") {
      for (let C of a.get(c) ?? []) if (C !== c) d.push(C);
      a.delete(c), P = true;
    }
    if ((0, import_chunk_awvk50qj.g3o)()) {
      for (let c of o) if (!a.has(c)) {
        if ((0, import_chunk_w578pjby.M4t)(c)) continue;
        let C = (0, import_chunk_6e68m1dj.jKn)(c);
        if (C.length > 0) {
          a.set(c, C);
          for (let x of C) if (x !== c) i.push(x);
          P = true;
        }
      }
    }
    if (P) m = { ...m, trustedNetworkDirectories: a };
  }
  if (d.length > 0) m = (0, import_chunk_p1ewvgeh.Jh)(m, { type: "removeDirectories", directories: d, destination: "localSettings" });
  if (i.length > 0) for (let o of ["projectSettings", "localSettings"]) {
    let a = i.filter((P) => u(P) === o);
    if (a.length > 0) m = (0, import_chunk_p1ewvgeh.Jh)(m, { type: "addDirectories", directories: a, destination: o });
  }
  return m;
}
function O7n(e, n) {
  let r = new Set((0, import_chunk_gbskgz33.Tvt)().flatMap((f) => b(f))), h = e.additionalWorkingDirectories, p = n.filter((f) => {
    let g = h.get(f);
    return g !== void 0 && !r.has(f) && !w(g.source);
  });
  if (p.length === 0) return e;
  return (0, import_chunk_p1ewvgeh.Jh)(e, { type: "removeDirectories", directories: p, destination: "localSettings" });
}
function w(e) {
  return e === "cliArg" || e === "command" || e === "session";
}
function T(e, n) {
  return (0, import_path.resolve)((0, import_chunk_n2dbhmj2.xt)(e, n));
}
function b(e, n) {
  try {
    return [T(e, n)];
  } catch {
    return [];
  }
}
