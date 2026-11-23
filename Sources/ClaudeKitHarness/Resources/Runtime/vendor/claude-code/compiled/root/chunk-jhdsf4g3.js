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
var chunk_jhdsf4g3_exports = {};
__export(chunk_jhdsf4g3_exports, {
  $gr: () => $gr,
  $sl: () => $sl,
  Auo: () => Auo,
  Bsl: () => Bsl,
  Cuo: () => Cuo,
  Eus: () => Eus,
  Fgr: () => Fgr,
  Fsl: () => Fsl,
  Gsl: () => Gsl,
  Ion: () => Ion,
  Lgr: () => Lgr,
  Mon: () => Mon,
  Ngr: () => Ngr,
  Oon: () => Oon,
  Puo: () => Puo,
  Ruo: () => Ruo,
  Sus: () => Sus,
  Usl: () => Usl,
  W$t: () => W$t,
  W5: () => W5,
  Wsl: () => Wsl,
  Zne: () => Zne,
  _us: () => _us,
  aRi: () => aRi,
  bus: () => bus,
  cAe: () => cAe,
  dRi: () => dRi,
  eNn: () => eNn,
  jsl: () => jsl,
  kus: () => kus,
  lRi: () => lRi,
  tNn: () => tNn,
  u9e: () => u9e,
  wus: () => wus,
  xuo: () => xuo,
  y7: () => y7,
  yus: () => yus,
  zsl: () => zsl
});
module.exports = __toCommonJS(chunk_jhdsf4g3_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_path = require("path");
var import_path2 = require("path");
function Lgr(o, e) {
  if (o.type !== e.type) return false;
  let r = (n, l) => (n.if ?? "") === (l.if ?? "");
  switch (o.type) {
    case "command": {
      let n = (0, import_chunk_wwft95x8.K6)();
      return e.type === "command" && o.command === e.command && (0, import_chunk_w578pjby._)(o.args ?? null) === (0, import_chunk_w578pjby._)(e.args ?? null) && (o.shell ?? n) === (e.shell ?? n) && r(o, e);
    }
    case "prompt":
      return e.type === "prompt" && o.prompt === e.prompt && r(o, e) && (0, import_chunk_hrmqj4hy.uvt)(o) === (0, import_chunk_hrmqj4hy.uvt)(e);
    case "agent":
      return e.type === "agent" && o.prompt === e.prompt && r(o, e);
    case "http":
      return e.type === "http" && o.url === e.url && r(o, e);
    case "mcp_tool":
      return e.type === "mcp_tool" && o.server === e.server && o.tool === e.tool && (0, import_chunk_w578pjby._)(o.input ?? {}) === (0, import_chunk_w578pjby._)(e.input ?? {}) && o.onFailure === "block" === (e.onFailure === "block") && r(o, e);
    case "script":
      return e.type === "script" && (o.script ?? null) === (e.script ?? null) && (o.file ?? null) === (e.file ?? null) && r(o, e);
    case "function":
      return false;
  }
}
function K(o) {
  return o.map((e) => ({ matcher: e.matcher, skillRoot: e.skillRoot, ...e.personal === true && { personal: true }, ...e.checkout === true && { checkout: true }, hooks: e.hooks.map((r) => r.hook).filter((r) => r.type !== "function") }));
}
function T(o) {
  return o.map((e) => ({ matcher: e.matcher, hooks: e.hooks.map((r) => r.hook).filter((r) => r.type === "function") })).filter((e) => e.hooks.length > 0);
}
class F {
  sessions = /* @__PURE__ */ new Map();
  draws = /* @__PURE__ */ new Map();
  skillDraws(o) {
    let e = this.draws.get(o) ?? /* @__PURE__ */ new Map();
    return this.draws.set(o, e), e;
  }
  add(o, e, r, n, l) {
    this.addEntry(o, e, r, n, l?.onHookSuccess, l?.skillRoot, l?.personal === true, l?.checkout === true);
  }
  addFunctionHook(o, e, r, n, l, c) {
    let u = c?.id || `function-hook-${Date.now()}-${Math.random()}`, a = { type: "function", id: u, timeout: c?.timeout || 5e3, callback: n, errorMessage: l };
    return this.addEntry(o, e, r, a, void 0, void 0, false, false), u;
  }
  addEntry(o, e, r, n, l, c, u, a) {
    let f = this.sessions.get(o) ?? { hooks: {} }, p = f.hooks[e] || [], m = p.findIndex((g) => g.matcher === r && g.skillRoot === c && g.personal === true === u && g.checkout === true === a), S;
    if (m >= 0) {
      S = [...p];
      let g = S[m], v = g.hooks.findIndex((h) => n.type === "function" ? Boolean(n.id) && h.hook.type === "function" && h.hook.id === n.id : Lgr(h.hook, n)), P = g.hooks[v], R = n.type === "mcp_tool" ? g.hooks.findLastIndex((h) => Lgr(h.hook, { ...n, onFailure: n.onFailure === "block" ? void 0 : "block" })) : -1, E = g.hooks[R], I = P === void 0 ? [...g.hooks, { hook: n, onHookSuccess: l }] : E === void 0 || R < v ? g.hooks.with(v, { ...P, hook: n }) : g.hooks.with(v, E).with(R, { ...P, hook: n });
      S[m] = { ...g, hooks: I };
    } else S = [...p, { matcher: r, skillRoot: c, ...u && { personal: true }, ...a && { checkout: true }, hooks: [{ hook: n, onHookSuccess: l }] }];
    this.sessions.set(o, { hooks: { ...f.hooks, [e]: S } }), U(this.sessions), (0, import_chunk_f9x2f6cx.Gge)(), (0, import_chunk_w578pjby.t)(`Added session hook for event ${e} in session ${o}`);
  }
  remove(o, e, r, n) {
    let l = this.sessions.get(o);
    if (l) {
      let u = (l.hooks[e] || []).map((f) => {
        if (n !== void 0 && f.skillRoot !== n.skillRoot) return f;
        let p = f.hooks.filter((m) => !Lgr(m.hook, r));
        return p.length > 0 ? { ...f, hooks: p } : null;
      }).filter((f) => f !== null), a = u.length > 0 ? { ...l.hooks, [e]: u } : { ...l.hooks };
      if (u.length === 0) delete a[e];
      this.sessions.set(o, { ...l, hooks: a }), (0, import_chunk_f9x2f6cx.Gge)();
    }
    (0, import_chunk_w578pjby.t)(`Removed session hook for event ${e} in session ${o}`);
  }
  clear(o) {
    this.sessions.delete(o), this.draws.delete(o), (0, import_chunk_f9x2f6cx.Gge)(), (0, import_chunk_w578pjby.t)(`Cleared all session hooks for session ${o}`);
  }
  get(o, e) {
    let r = /* @__PURE__ */ new Map(), n = this.sessions.get(o);
    if (!n) return r;
    for (let l of e ? [e] : import_chunk_xcgcdx61.Jd) {
      let c = n.hooks[l];
      if (c) r.set(l, K(c));
    }
    return r;
  }
  getFunctionHooks(o, e) {
    let r = /* @__PURE__ */ new Map(), n = this.sessions.get(o);
    if (!n) return r;
    for (let l of e ? [e] : import_chunk_xcgcdx61.Jd) {
      let c = n.hooks[l];
      if (c) {
        let u = T(c);
        if (u.length > 0) r.set(l, u);
      }
    }
    return r;
  }
  getEntry(o, e, r, n, l) {
    let c = this.sessions.get(o)?.hooks[e];
    if (!c) return;
    for (let u of c) if ((u.matcher === r || r === "") && u.skillRoot === l.skillRoot) {
      let a = u.hooks.find((f) => Lgr(f.hook, n));
      if (a) return a;
    }
    return;
  }
  has(o, e) {
    return this.sessions.get(o)?.hooks[e] !== void 0;
  }
}
var G = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set());
function C() {
  return (0, import_chunk_f9x2f6cx.kr)(G);
}
function U(o) {
  (0, import_chunk_42tcgre6.x0r)(C(), o);
}
function Cuo() {
  let o = [];
  for (let e of (0, import_chunk_42tcgre6.xxt)(C())) for (let r of e.values()) for (let n of import_chunk_xcgcdx61.Jd) for (let l of r.hooks[n] ?? []) for (let { hook: c } of l.hooks) if (c.type !== "function") o.push({ event: n, hook: c, skillRoot: l.skillRoot });
  return o;
}
function M(o) {
  if (o.size === 0) return 0;
  let e = 0;
  for (let r of (0, import_chunk_42tcgre6.xxt)(C())) for (let [n, l] of r) {
    let c = {}, u = e;
    for (let a of import_chunk_xcgcdx61.Jd) {
      let f = [];
      for (let p of l.hooks[a] ?? []) if (p.skillRoot !== void 0 && o.has(p.skillRoot)) e += p.hooks.length;
      else f.push(p);
      if (f.length > 0) c[a] = f;
    }
    if (e > u) r.set(n, { ...l, hooks: c });
  }
  if (e > 0) (0, import_chunk_f9x2f6cx.Gge)();
  return e;
}
function cAe() {
  return new F();
}
var V = { sync_off: (o) => `${o} sync is off (a setting or the organization's policy).`, account_change: () => "A sign-out, or a sign-in not verified as the same account.", skill_gone: () => "Those skills are gone from this account's list or from the disk." };
function Auo(o) {
  let e = o + import_path.sep, r = /* @__PURE__ */ new Set();
  for (let { skillRoot: n } of Cuo()) if (n?.startsWith(e)) r.add(n);
  return r;
}
function Ngr(o, e, r) {
  let n = M(e);
  if (n === 0) return;
  (0, import_chunk_w578pjby.t)(`Hooks of ${o.hooksOf} removed: ${n}. ${V[r](o.sync)}`), (0, import_chunk_42tcgre6.q)("info", o.event, { count: n, reason: r });
}
function O(o) {
  return !(0, import_chunk_2yx6c1y2.xMs)(o.settingKey, { withoutLocalFile: o.isLocalFileAnOptOutHome?.() === false });
}
function _us(o) {
  let e = (n, l) => {
    let c = (0, import_chunk_2yx6c1y2.Sk)(n, l);
    return c.settings === null && (0, import_chunk_2yx6c1y2.QPe)(c.errors).length > 0;
  }, r = ["userSettings", "localSettings", "flagSettings"].some((n) => {
    let l = (0, import_chunk_2yx6c1y2._n)(n);
    if (l === void 0) return false;
    switch (n) {
      case "flagSettings":
        return e(l, (0, import_chunk_f9x2f6cx.Av)() ?? (0, import_chunk_f9x2f6cx.Gz)());
      case "localSettings": {
        if (o.isLocalFileAnOptOutHome?.() === false) return false;
        let c = (0, import_chunk_2yx6c1y2.A_)();
        return e(l) || c !== void 0 && c !== l && e(c);
      }
      case "userSettings":
        return e(l);
    }
  });
  return B(o) || (0, import_chunk_2yx6c1y2.bI)().length > 0 && (0, import_chunk_2yx6c1y2.Kb)() !== "helper" || r || (0, import_chunk_2yx6c1y2.vJe)(o.settingKey) || (0, import_chunk_f9x2f6cx.EJ)() && (0, import_chunk_2yx6c1y2.TJe)() || (0, import_chunk_2zeyvjwb.zR)(o.policyKey) === "unregistered";
}
function yus(o) {
  if (O(o)) return false;
  if (!o.isTierInPlay()) return false;
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return false;
  if (import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET) return false;
  if ((0, import_chunk_f9x2f6cx.Hn)()) return false;
  if ((0, import_chunk_865at33z.xa)().source !== "claude.ai") return false;
  if ((0, import_chunk_k449cc64.wt)()) return false;
  if (!(0, import_chunk_2zeyvjwb.hk)(o.policyKey)) return false;
  return H(o);
}
function W$t() {
  return (0, import_chunk_865at33z.xa)().source === "claude.ai" && !(0, import_chunk_f9x2f6cx.Hn)();
}
function H(o) {
  return (0, import_chunk_865at33z.b)(o.flagName, false) === true;
}
function Sus(o) {
  return !(0, import_chunk_4vsz8a99.lvt)() && Ruo(o);
}
function Ruo(o) {
  let e = (0, import_chunk_2zeyvjwb.zR)(o.policyKey);
  return e === "cache_miss" || e === "route_missing";
}
function B(o) {
  let e = (0, import_chunk_2zeyvjwb.zR)(o.policyKey);
  return O(o) || e === "org_denied" || e === "latched";
}
function bus(o) {
  let e = [...(0, import_chunk_2yx6c1y2.kK)(), (0, import_chunk_2yx6c1y2._e)("userSettings")], r = (0, import_chunk_2zeyvjwb.zR)(o.policyKey);
  return e.some((n) => n?.[o.settingKey] === false) || r === "org_denied" || r === "latched";
}
var D = { sync: "Plugins", hooksOf: "synced plugins' skills", event: "plugins_sync_skill_hooks_removed" }, N = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set());
function L() {
  try {
    let o = (0, import_chunk_2gtmjt3y.Nl)();
    return o === null ? void 0 : (0, import_path2.resolve)((0, import_path2.join)(o, import_chunk_mgntjepj.DN));
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`The synced plugins' folder could not be made absolute (${(0, import_chunk_jv7av99m.w)(o) ?? (0, import_chunk_jv7av99m.d)(o)})`, { level: "error" });
    return;
  }
}
function Fsl() {
  let o = L();
  if (o !== void 0) (0, import_chunk_f9x2f6cx.kr)(N).add(o);
}
function x() {
  let o = new Set((0, import_chunk_f9x2f6cx.kr)(N)), e = L();
  if (e !== void 0) o.add(e);
  return o;
}
function u9e(o) {
  return o !== void 0 && (0, import_chunk_xcgcdx61.is)(o) === import_chunk_xcgcdx61.qs;
}
function aRi(o, e) {
  if (!u9e(o) || e === void 0) return [];
  return [...x()].filter((r) => e.startsWith(r + import_path2.sep));
}
async function lRi() {
  try {
    return await (0, import_chunk_wj4me9k5.LU)() ?? (0, import_chunk_wj4me9k5.vkl)();
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), null;
  }
}
function Fgr(o, e) {
  let [r = ""] = e.slice(o.length + 1).split(import_path2.sep);
  return (0, import_chunk_mgntjepj.Lp)((0, import_chunk_mgntjepj.aNe)(r));
}
function $sl(o, e, r) {
  try {
    let n = (0, import_chunk_f9x2f6cx.a3t)(), l = e.map((u) => u + import_path2.sep + o).find((u) => r.startsWith(u + import_path2.sep));
    if (n === null || n.bucket !== o || l === void 0) return;
    let c = Fgr(l, r);
    return Array.from(n.dirsById.values()).some((u) => u.has(c)) ? void 0 : "not_listed";
  } catch (n) {
    return (0, import_chunk_42tcgre6.q)("warn", "plugins_sync_last_list_unreadable"), (0, import_chunk_k449cc64.i)(n), "list_unreadable";
  }
}
function Usl(o, e, r) {
  if (o === null) return "no_account";
  return e.some((n) => r.startsWith(n + import_path2.sep + o + import_path2.sep)) ? void 0 : "other_account";
}
var A = { sync_off: "plugins sync is turned off in the person's own settings, in an admin's, or by the organization's policy", other_account: "its plugin was synced for another account", no_account: "no account could be resolved for its synced plugin", not_listed: "the account's latest complete list of plugins does not hold its plugin's folder", list_unreadable: "this session's record of the account's plugins could not be read", no_folder: "its plugin's folder could not be found under the synced plugins' folder" };
function Oon(o) {
  return A[o];
}
function Bsl(o, e, r) {
  let n = [...r.hooks ? ["its hooks"] : [], ...r.grant ? ["the tools its allowed-tools grants"] : []].join(" and without ");
  (0, import_chunk_w578pjby.t)(`Plugin skill '${o}' runs without ${n}: ${A[e]}.`, { level: "warn" }), (0, import_chunk_42tcgre6.q)("info", "plugins_sync_skill_hooks_refused", { reason: e });
}
function Wsl(o, e) {
  (0, import_chunk_w578pjby.t)(`Plugin command '${o}' was not run: ${A[e]}.`, { level: "warn" }), (0, import_chunk_42tcgre6.q)("info", "plugins_sync_command_refused", { reason: e });
}
function wus(o) {
  let e = /* @__PURE__ */ new Set();
  for (let r of x()) for (let n of Auo(r)) e.add(n);
  Ngr(D, e, o);
}
function jsl({ bucket: o, delistedDirs: e, listedDirs: r }) {
  try {
    let n = /* @__PURE__ */ new Set();
    for (let l of x()) {
      let c = l + import_path2.sep + o;
      for (let u of Auo(c)) {
        let a = Fgr(c, u);
        if (e.has(a) && !r.has(a)) n.add(u);
      }
    }
    return Ngr(D, n, "skill_gone"), true;
  } catch (n) {
    return (0, import_chunk_42tcgre6.q)("warn", "plugins_sync_skill_hooks_removal_failed"), (0, import_chunk_k449cc64.i)(n), false;
  }
}
var k = { settingKey: "syncClaudeAiPlugins", policyKey: "allow_account_plugins_sync", flagName: "tengu_claudeai_plugins_sync_enabled", isTierInPlay: () => Zne(), isLocalFileAnOptOutHome: () => !(0, import_chunk_hrmqj4hy.MBn)() };
function xuo() {
  y7();
  let o = X() && !(0, import_chunk_f9x2f6cx.X8)();
  return (0, import_chunk_f9x2f6cx.Rla)(o), o;
}
function y7() {
  let o = _us(k);
  if ((0, import_chunk_f9x2f6cx.xla)(o), o && Eus()) wus("sync_off");
}
function W5() {
  return y7(), (0, import_chunk_f9x2f6cx.X8)();
}
function eNn() {
  return Eus();
}
function Gsl() {
  return !eNn() && (W5() || Ruo(k));
}
function Ion() {
  return (0, import_chunk_f9x2f6cx.yte)().length > 0 || $gr();
}
function $gr() {
  return Puo() || kus();
}
function kus() {
  return !Puo() && H(k) && W$t();
}
function dRi() {
  return Puo() || W$t();
}
function tNn() {
  return H(k) && W$t() && Zne() && !W5();
}
function zsl() {
  return H(k);
}
function Puo() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_PLUGINS || import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_SESSION_REFS;
}
function Mon() {
  return Sus(k);
}
function Zne() {
  return !(0, import_chunk_0pb268nk.Lr)("plugins") && (0, import_chunk_xzvhvaa2.rn)("userSettings");
}
function X() {
  return yus(k);
}
function Eus() {
  return bus(k);
}
