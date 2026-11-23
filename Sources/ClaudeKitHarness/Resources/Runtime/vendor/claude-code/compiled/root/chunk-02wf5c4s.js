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
var chunk_02wf5c4s_exports = {};
__export(chunk_02wf5c4s_exports, {
  Amr: () => Amr,
  Cmr: () => Cmr,
  Dls: () => Dls,
  Hls: () => Hls,
  Lls: () => Lls,
  M5e: () => M5e,
  Mls: () => Mls,
  Nls: () => Nls,
  T1t: () => T1t,
  Tmr: () => Tmr,
  WW: () => WW,
  _rn: () => _rn,
  bR: () => bR,
  cEi: () => cEi,
  grn: () => grn,
  mWe: () => mWe,
  nel: () => nel,
  oel: () => oel,
  rel: () => rel,
  tel: () => tel,
  u0n: () => u0n,
  uEi: () => uEi,
  ulo: () => ulo,
  vmr: () => vmr,
  yrn: () => yrn
});
module.exports = __toCommonJS(chunk_02wf5c4s_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_util = require("util");
var x = /* @__PURE__ */ new Set(["agent.offer", "agent.report", "attribution.text", "command.describe", "env.get", "prompt.section", "tool.describe", "tool.offer", "vcs.detect", "vcs.isolate", "vcs.list", "vcs.release", "vcs.status"]);
function WW(o, t, e) {
  if (!x.has(o) || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_LONE_SEC_DEFAULT_SHORTCUT || (0, import_chunk_865at33z.ce)().hooksRespawns.size > 0 || (0, import_chunk_0w2wb7gk.Zle)()) return false;
  let n = (0, import_chunk_yg9g0473.bA)(o, t, { among: e });
  return n.length > 0 && n.every(import_chunk_5zps0wmn.Lh);
}
var tel = "tengu_vast_wave";
function Dls(o, t) {
  try {
    if (!(0, import_chunk_sghy0qej.Pe)(tel, { safe: false }) || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_LONE_SEC_DEFAULT_SHORTCUT || t !== void 0 && t.length > 0 || (0, import_chunk_865at33z.ce)().hooksRespawns.size > 0 || (0, import_chunk_0w2wb7gk.Zle)() || (0, import_chunk_865at33z.ce)().loadedModules.some((l) => l.tier === "user")) return;
    let n = (0, import_chunk_yg9g0473.bA)("tool.check"), a = n.filter((l) => !(0, import_chunk_5zps0wmn.Lh)(l));
    return a.length < n.length && n.every((l) => l.status().kind === "live") && a.every(import_chunk_59mwkeke.yd) && !(0, import_chunk_5zps0wmn.Qi)("tool.check", o, a) ? n : void 0;
  } catch (e) {
    if (!(0, import_chunk_jv7av99m.Fe)(e)) (0, import_chunk_k449cc64.i)(e);
    return;
  }
}
function M5e(o) {
  let t = (0, import_chunk_865at33z.ce)(), e = o === "session.append" && t.appendsInFlight.size > 0;
  return (o === "session.append" || o === "prompt.attachment") && !e && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_LONE_SEC_DEFAULT_SHORTCUT && t.hooksRespawns.size === 0 && !(0, import_chunk_0w2wb7gk.Zle)() ? t.loadedModules.filter((a) => !(0, import_chunk_5zps0wmn.Lh)(a)) : t.loadedModules;
}
var bR = (o) => (0, import_chunk_5zps0wmn.Qi)(`classic.${o}`, void 0, (0, import_chunk_5zps0wmn.Ib)(`classic.${o}`));
function vmr(o) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_EMPTY_CLASSIC_DISPATCH_SKIP || (0, import_chunk_865at33z.ce)().hooksRespawns.size > 0 || (0, import_chunk_0w2wb7gk.Zle)()) return false;
  let t = (0, import_chunk_yg9g0473.bA)(`classic.${o}`);
  return t.length > 0 && t.every(import_chunk_5zps0wmn.Lh);
}
var cEi = Object.freeze(["allowManagedModsOnly"]);
function Mls() {
  let o = (0, import_chunk_2yx6c1y2._e)("policySettings")?.pluginConfigs?.[import_chunk_vcnr02by.RZ]?.options ?? {};
  return (0, import_chunk_wgyw76w5.di)(cEi.map((t) => [t, o[t] ?? null]));
}
var I = /* @__PURE__ */ new Set(["agent.call", "fs.stat", "fs.write", "process.run", "process.spawn", "prompt.submit", "tool.call", "tool.run"]);
function Hls(o) {
  if (!I.has(o)) return false;
  let { hooksRespawns: t, moduleSeats: e } = (0, import_chunk_865at33z.ce)();
  return !(import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_LONE_SEC_DEFAULT_SHORTCUT || t.size > 0 || (0, import_chunk_0w2wb7gk.Zle)() || [...e.values()].includes("user"));
}
var M = { "fs.read": "container", "fs.write": "container", "fs.list": "container", "fs.exists": "container", "fs.stat": "container", "process.run": "container", "process.spawn": "container", "http.fetch": "container", "env.get": "container", "store.get": "container", "store.set": "container", "store.delete": "container", "store.keys": "container", "session.authorize": "container", "env.set": "container", "process.hookEnv": "container", "session.info": "container", "session.machine": "container", "settings.read": "session", "config.list": "session", "config.set": "session", "flag.value": "session", "theme.set": "refused", "ui.copy": "refused", "vcs.detect": "refused", "vcs.diff": "refused", "fs.ancestors": "host", "wasm.compile": "host", "audio.play": "host", "audio.speak": "host", "vcs.isolate": "host", "vcs.list": "host", "vcs.status": "host", "vcs.release": "host", "model.complete": "host", "model.classify": "host", "model.fork": "host", "mcp.call": "host", "mcp.connect": "host", "interface.call": "host", "session.cwd": "host", "session.root": "host", "session.model": "host", "session.turns": "host", "session.id": "host", "session.messages": "host", "session.repo": "host", "session.surface": "host", "session.surfaces": "host", "session.identity": "host", "session.usage": "host", "session.version": "host", "session.compact": "host", "session.send": "host", "session.append": "host", "turn.abort": "host", "decision.ask": "host", "prompt.submit": "host", "prompt.read": "host", "prompt.media": "host", "prompt.fill": "host", "prompt.paint": "host", "prompt.suggest": "host", "prompt.compose": "host", "tool.list": "host", "tool.call": "host", "tool.check": "host", "tool.register": "host", "agent.spawn": "host", "agent.call": "host", ...{}, "agent.list": "host", "agent.limits": "host", "agent.register": "host", "ui.ask": "host", "command.list": "host", "command.register": "host", "command.run": "host", "telemetry.log": "host", "telemetry.mark": "host", "ui.toast": "host", "ui.status": "host", "ui.log": "host", "ui.notice": "host", "ui.notify": "host", "ui.cancelNotify": "host", "ui.invalidate": "host", "ui.open": "host", "ui.close": "host", "ui.panes": "host", "ui.place": "host", "ui.selection": "host", "ui.scroll": "host", "ui.focus": "host", "ui.view": "host", "ui.blit": "host", "theme.clear": "host", "state.get": "host", "state.set": "host", "clock.now": "host", "clock.sleep": "host", "clock.after": "host", "clock.every": "host" }, N = new Map(Object.entries(M)), u0n = (o) => N.get(o) ?? "refused";
function g(o) {
  let t = u0n(o);
  return t === "container" ? !o.startsWith("fs.") && !o.startsWith("store.") : t !== "host";
}
var grn = (o, t) => t.admitted ?? o.knownArgs.get(t.plugin);
function Lls(o) {
  return [...o.callers ?? [], o.environmentId];
}
function _rn(o, t) {
  let e = Lls(o), { loadedModules: n, sandboxedLoads: a } = (0, import_chunk_865at33z.ce)(), d = n.some((r) => e.includes(r.environmentId) && !(0, import_chunk_59mwkeke.hu)(r)), l = import_chunk_59mwkeke.LYe.get() !== void 0 && e.some((r) => {
    let p = r === void 0 ? void 0 : a.get(r);
    return p !== void 0 && (p.hasLeftOff || (0, import_chunk_59mwkeke.Hvt)(p) || p.isUnloaded && r === o.environmentId);
  });
  if (d) return new import_chunk_hcg738hf.je(`${o.plugin}: $.${t} refused: its hooks module was judged under a policy that has since changed, and is off until it is judged under the one in force`);
  return l ? new import_chunk_hcg738hf.je(`${o.plugin}: $.${t} refused: a hooks module behind the call has left this session`) : void 0;
}
var T1t = (o, t) => [grn(o, t), ...(t.callers ?? []).map((e) => o.environmentArgs.get(e)), ...t.origin.map(import_chunk_yg9g0473.RSe).filter((e) => e !== t.plugin).map((e) => e === void 0 ? void 0 : o.knownArgs.get(e))];
var H = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (o) => o.set(void 0));
var mWe = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (o) => o.set(void 0)), y = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (o) => o.set(void 0));
function S(o) {
  return (y.get() ?? {})[o];
}
function m(o) {
  let t = u0n(o);
  if (t !== "session") return t;
  let e = S(o);
  return e === "host" ? "host" : e === void 0 ? "refused" : t;
}
var U = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (o) => o.set(void 0));
function f(o, t, e, n, a = false) {
  try {
    return T1t(o, t).some((d) => d === void 0 || !o.nativeIds.has(d.pluginStorageId)) || n !== void 0 && (a || !(0, import_util.isDeepStrictEqual)(n.sent, e)) && n.hooked().some((d) => d === void 0 || !(0, import_chunk_59mwkeke.yd)(d));
  } catch {
    return true;
  }
}
function nel(o, t, e, n) {
  let d = t.startsWith("fs.") && (0, import_chunk_ma3kja9f.T)(n) && typeof n.path === "string" && H.get()?.(n.path) === true ? grn(o, e) : void 0;
  return d !== void 0 && o.nativeIds.has(d.pluginStorageId);
}
function yrn(o, t, e) {
  return mWe.get() !== void 0 && g(t) && m(t) !== "host" && !f(o, e, void 0, void 0);
}
function ulo(o, t) {
  let e = m(o);
  return mWe.get() !== void 0 && (e === "refused" || e === "session" && !((0, import_chunk_ma3kja9f.T)(t) && t.standsFor === S(o))) && !(0, import_chunk_vfyns8ja.CTt)(o);
}
function Nls(o, t, e) {
  return mWe.get() !== void 0 && m(t) === "refused" && f(o, e, void 0, void 0) ? k(e.plugin, t) : void 0;
}
function k(o, t) {
  return new import_chunk_hcg738hf.je(`${o}: $.${t} refused: an installed mod does not do this in a claude-code-server session`);
}
function rel(o, t, e) {
  let n = y.get()?.[t];
  return n !== void 0 && n !== "host" && m(t) === "session" && f(o, e, void 0, void 0) ? { ...n, standsFor: n, run: (a, d, l) => {
    let r = _rn(d, t);
    return r === void 0 ? n.run(a, d, l) : Promise.reject(r);
  } } : void 0;
}
function uEi(o, t, e) {
  let n = mWe.get();
  if (n === void 0) return e;
  return { ...e, run: (a, d, l) => {
    let r = _rn(d, t);
    if (r !== void 0) return Promise.reject(r);
    let p = u0n(t), u = g(t);
    if (m(t) === "host" || !f(o, d, a, l, u)) return e.run(a, d, l);
    if (p !== "container") return Promise.reject(k(d.plugin, t));
    let { held: O, personsHold: E } = e.judged?.(a, d, l) ?? {};
    return O === void 0 ? n(t, a, d, E) : Promise.resolve(O);
  } };
}
function W(o, t) {
  let e = (r) => !o.nativeIds.has(r.pluginStorageId), n = T1t(o, t).filter((r) => r !== void 0), a = !n.some(e), d = new Map(n.map((r) => [r.pluginStorageId, r.pluginName]));
  function l() {
    let r = a ? [...o.knownArgs.values()].filter(e) : [];
    return r.forEach((p) => d.set(p.pluginStorageId, p.pluginName)), a && r.length === 0 && o.loading.size === 0 || [...d].some(([p, u]) => o.knownArgs.get(u)?.pluginStorageId !== p);
  }
  return l(), l;
}
function oel(o, t, e, n) {
  if (mWe.get() === void 0) return e;
  let a = f(o, n, void 0, void 0), d = W(o, n);
  return { ...e, stream: (l, r) => {
    let p = u0n(t);
    if (p === "host" || !(a || f(o, r, l, void 0))) return e.stream(l, r);
    let u = U.get();
    if (p === "container" && a && u !== void 0) return u(t, l, r, () => d() || _rn(n, t) !== void 0);
    return (async function* () {
      throw k(r.plugin, t);
    })();
  } };
}
function Tmr(o) {
  return o.tier === "builtin" || (0, import_chunk_vcnr02by.kwe)(o.args.pluginStorageId);
}
var Cmr = (o) => o.hooks("http.fetch") && !Tmr(o);
function Amr() {
  let { loadedModules: o } = (0, import_chunk_865at33z.ce)();
  if (mWe.get() !== void 0) return o.filter(import_chunk_59mwkeke.yd);
  return o.some(import_chunk_5zps0wmn.Lh) ? o.filter((t) => !Cmr(t)) : o;
}
