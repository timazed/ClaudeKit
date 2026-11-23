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
var chunk_mndk3x2g_exports = {};
__export(chunk_mndk3x2g_exports, {
  Hal: () => Hal,
  Nh: () => Nh,
  X6: () => X6,
  Y6: () => Y6,
  ape: () => ape,
  b9e: () => b9e,
  ipe: () => ipe,
  nUt: () => nUt,
  tsn: () => tsn,
  xwt: () => xwt
});
module.exports = __toCommonJS(chunk_mndk3x2g_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_path = require("path");
var import_os = require("os");
var import_path2 = require("path");
function tsn(e) {
  let n = /^[\\/]{2}/.test(e);
  return (n ? "\\\\" : "") + (n ? e.replace(/^[\\/]{2,}/, "") : e).replace(/[\\/]+/g, "\\");
}
function d(e, n, r) {
  return (0, import_chunk_w578pjby.t)(`bg-containment: refusing ${n} spelling for containment: ${e}`, { level: "warn" }), r === void 0 ? { lexical: e, canonical: null, skipped: false } : { lexical: e, canonical: null, skipped: false, surfaced: r };
}
function P(e) {
  if (!(0, import_chunk_z6pfqf6e.bO)(e)) return e;
  let n = /^[\\/]{2}\?[\\/]([A-Za-z]:[\\/].*)$/.exec(e);
  if (n) return n[1];
  let r = /^[\\/]{2}\?[\\/]UNC[\\/](.+)$/i.exec(e);
  if (r) return "\\\\" + r[1];
  return null;
}
var b = /[. ](?=[\\/]|$)/;
function O(e, n = "darwin") {
  if ((0, import_chunk_z6pfqf6e.ad)(e)) return d((0, import_chunk_z6pfqf6e.pn)(e), "dot-segment");
  let r = (0, import_chunk_z6pfqf6e.pn)(e);
  if (n === "win32") {
    if (r = r.replace(/^([\\/])[\\/]{2,}/, (g, f) => f + f), (0, import_chunk_z6pfqf6e.bO)(r) || (0, import_chunk_z6pfqf6e.C$)(r)) return d(r, "device-namespace");
    if (r = (0, import_chunk_z6pfqf6e.oNo)(r), b.test(r)) return d(r, "trailing-dot-or-space");
    if ((0, import_chunk_z6pfqf6e.sa)(r)) return { lexical: tsn(r), canonical: null, skipped: true };
    r = tsn(r);
  } else {
    if (r = r.replace(/\/{2,}/g, "/"), n === "darwin") r = (0, import_chunk_z6pfqf6e.tR)(r);
    if ((0, import_chunk_z6pfqf6e.vd)(r)) return { lexical: (0, import_chunk_z6pfqf6e.SFr)(r, n), canonical: null, skipped: true };
  }
  let a = (0, import_chunk_w578pjby.$K)((0, import_chunk_w578pjby.le)(), r, { surfaceDotDotTargets: true });
  if (a === void 0) return { lexical: r, canonical: r, skipped: false };
  let o = n === "win32" ? P(a) : a;
  if (o === null) return d(r, "resolves-to-device-namespace");
  let i = n === "win32" ? o : n === "darwin" ? (0, import_chunk_z6pfqf6e.tR)(o.replace(/^\/{2,}/, "/")) : o.replace(/^\/{2,}/, "/");
  if ((0, import_chunk_z6pfqf6e.sa)(i) || (0, import_chunk_z6pfqf6e.vd)(i) || (0, import_chunk_z6pfqf6e.$w)(i)) return d(r, "resolves-to-network", (0, import_chunk_z6pfqf6e.SFr)((0, import_chunk_z6pfqf6e.pn)(n === "win32" ? tsn(i) : i), n));
  if ((0, import_chunk_z6pfqf6e.ad)(i)) return d(r, "resolves-to-dot-segment");
  if (n === "win32" && b.test(i)) return d(r, "resolves-to-trailing-dot-or-space");
  let c = n === "win32" ? tsn(i) : i.replace(/\/{2,}/g, "/");
  return { lexical: r, canonical: (0, import_chunk_z6pfqf6e.pn)(c), skipped: false };
}
function Nh(e, n = "darwin") {
  let a, o = e;
  try {
    for (let i = 0; i < 8; i++) {
      let c = O(o, n);
      if (a ??= c, c.skipped) return i === 0 ? c : d(a.lexical, "resolves-to-network");
      if (c.canonical === null) return i === 0 ? c : { ...c, lexical: a.lexical };
      if (c.canonical === o) {
        try {
          if ((0, import_chunk_w578pjby.le)().lstatSync(o).isSymbolicLink()) return d(a.lexical, "resolution-not-convergent", o !== e ? o : void 0);
        } catch (g) {
          if (!(0, import_chunk_jv7av99m.J)(g)) throw g;
          if (n === "win32") try {
            (0, import_chunk_w578pjby.le)().realpathSync(import_path.win32.dirname(o));
          } catch (f) {
            if (!(0, import_chunk_jv7av99m.J)(f)) return d(a.lexical, "resolution-not-convergent", o !== e ? o : void 0);
          }
        }
        return { lexical: a.lexical, canonical: o, skipped: false };
      }
      o = c.canonical;
    }
  } catch {
    return d(a?.lexical ?? (0, import_chunk_z6pfqf6e.pn)(e), "resolution-error", o !== e ? o : void 0);
  }
  return d(a.lexical, "resolution-not-convergent", o !== e ? o : void 0);
}
function Y6(e, n) {
  if (X6(e)) return true;
  if (X6(n)) {
    if (e.skipped) return true;
    if (k(e.lexical, n.lexical) || e.canonical !== null && k(e.canonical, n.lexical)) return true;
    if (n.surfaced !== void 0 && (k(e.lexical, n.surfaced) || e.canonical !== null && k(e.canonical, n.surfaced))) return true;
    return false;
  }
  if (e.skipped && !n.skipped) return (0, import_chunk_w578pjby.t)(`bg-containment: denying network-shaped target against a local root: ${e.lexical}`, { level: "warn" }), true;
  if (e.skipped || n.skipped) return k(e.lexical, n.lexical);
  return k(e.lexical, n.lexical) || k(e.canonical, n.canonical) || F(e.canonical, n.canonical);
}
function k(e, n) {
  return (0, import_chunk_p1ewvgeh.BP)(e, n, true);
}
var v = 64;
class R {
  expansionByRootCanonical = /* @__PURE__ */ new Map();
  expand(e) {
    let n = this.expansionByRootCanonical.get(e);
    if (n === void 0) {
      if (n = (0, import_chunk_w578pjby._yn)(e), this.expansionByRootCanonical.size >= v) this.expansionByRootCanonical.clear();
      this.expansionByRootCanonical.set(e, n);
    }
    return n;
  }
  clear() {
    this.expansionByRootCanonical.clear();
  }
}
var A = new import_chunk_2904xtvq.j(() => new R());
function W() {
  return A.of((0, import_chunk_f9x2f6cx.N)().host);
}
function F(e, n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return false;
  let r = (0, import_chunk_w578pjby._yn)(e), a = W().expand(n);
  if (r === e && a === n) return false;
  return T((0, import_chunk_z6pfqf6e.pn)(tsn(r)), (0, import_chunk_z6pfqf6e.pn)(tsn(a)));
}
function T(e, n) {
  return (0, import_chunk_p1ewvgeh.BP)(e, n, true);
}
function ipe(e, n) {
  if (X6(e) || X6(n)) return false;
  if (e.skipped !== n.skipped) return false;
  if (e.skipped) return y(e.lexical, n.lexical);
  return y(e.canonical, n.canonical);
}
function y(e, n) {
  return (0, import_chunk_p1ewvgeh.BP)(e, n, false);
}
function X6(e) {
  return e.canonical === null && !e.skipped;
}
(0, import_chunk_adx6804h.B)();
var z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).min(1));
function nUt(e, n) {
  return ((0, import_chunk_cg8dqz0a.x)() === "linux" ? ipe : Y6)({ lexical: n, canonical: n, skipped: false }, { lexical: e, canonical: e, skipped: false });
}
function D(e) {
  if (typeof e !== "string" || !(0, import_path2.isAbsolute)(e)) return { code: "not_absolute", value: e };
  let { canonical: n, skipped: r } = Nh(e);
  return n === null ? { code: r ? "network_path" : "unresolvable_path", value: e } : { at: n };
}
function L(e, n, r) {
  let a = z().safeParse((0, import_chunk_0jve1fep.et)(n, false));
  if (!a.success) return { problems: [{ code: "bad_fence", value: n }] };
  let o = D(e);
  if ("code" in o) return { problems: [o] };
  let i = D(r);
  if ("code" in i) return { problems: [i] };
  if (!nUt(o.at, i.at)) return { problems: [{ code: "session_outside_worktree", value: r }] };
  let c = Nh((0, import_os.homedir)()), g = c.canonical ?? c.lexical, f = [], w = [];
  for (let S of a.data) {
    let _ = D(S);
    if ("code" in _) w.push(_);
    else if (nUt(_.at, g) && !nUt(g, _.at)) w.push({ code: "fence_too_wide", value: S });
    else f.push(_.at);
  }
  return { answer: f.length > 0 ? { tree: o.at, fence: f } : void 0, problems: w };
}
function E() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_WORKTREE, n = import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_WORKTREE_FENCE;
  return e === void 0 && n === void 0 ? void 0 : { declared: e, declaredFence: n };
}
function Hal() {
  let e = E();
  if (e === void 0) return;
  let { declared: n, declaredFence: r } = e, a = (0, import_chunk_rb36kwbn.ui)()?.preEnterOriginalCwd ?? (0, import_chunk_f9x2f6cx.Te)(), { answer: o, problems: i } = L(n, r, a), c = `CLAUDE_CODE_HOST_WORKTREE=${n ?? "(not set)"} CLAUDE_CODE_HOST_WORKTREE_FENCE=${r ?? "(not set)"}, session folder ${a}: ${o === void 0 ? "ignored, so they block no file write" : `file tools may not write in ${o.fence.join(", ")}, except inside ${o.tree}`}${i.map((f) => `; ${f.code}${typeof f.value === "string" ? ` ${JSON.stringify(f.value)}` : ""}`).join("")}`, g = (0, import_chunk_w5s307zm.Ju)();
  if (g.hostWorktreeReport !== c) if (g.hostWorktreeReport = c, (0, import_chunk_w578pjby.t)(c, { level: i.length > 0 ? "warn" : "debug" }), i.length === 0) (0, import_chunk_cqa9hrgx.u)("worktree_host_declared");
  else if (o === void 0) (0, import_chunk_cqa9hrgx.m)("worktree_host_declared", i[0].code);
  else (0, import_chunk_cqa9hrgx.l)("worktree_host_declared", i[0].code);
  return o;
}
function ape(e) {
  if (e.agentWorktree) return e.agentWorktree;
  if (!xwt()) {
    let n = e.session.project?.isolationRoot;
    if (n && !b9e()) return n;
  }
  return (0, import_chunk_rb36kwbn.ui)()?.worktreePath || void 0;
}
function xwt() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg" || (0, import_chunk_rb36kwbn.pk)() !== null;
}
function b9e() {
  return E() !== void 0;
}
