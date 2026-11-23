const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_q0fr3q7r_exports = {};
__export(chunk_q0fr3q7r_exports, {
  kMe: () => kMe
});
module.exports = __toCommonJS(chunk_q0fr3q7r_exports);
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var g = __toESM(require("path"));
var Me = 1e3, Ne = 500, Oe = 300, je = 2e3, de = 3e4, Z = 6e4, ue = "<skill-watcher-idle-wake>", be = 5e3, We = 6e5, Ge = 4e4, De = 2e3, fe = true;
async function He(l) {
  let h = await (0, import_chunk_bzyb60p0.XHe)((0, import_chunk_f9x2f6cx.Oo)(), l), c = (0, import_chunk_f9x2f6cx.Te)(), I = c !== (0, import_chunk_f9x2f6cx.Oo)() && !(0, import_chunk_rb36kwbn._hn)() ? await (0, import_chunk_bzyb60p0.XHe)(c, l) : [], v = /* @__PURE__ */ new Map();
  for (let C of [...h, ...I]) v.set(C.name, C.type === "prompt" ? C.contentHash ?? "" : "");
  return v;
}
function $e(l) {
  let h = l?.stabilityThreshold ?? Me, c = l?.pollInterval ?? Ne, I = l?.reloadDebounce ?? Oe, v = l?.chokidarInterval ?? je, C, A = l?.getFingerprint ?? (() => He(C)), k = l?.now ?? Date.now, O = l?.lastInteractionTime ?? import_chunk_f9x2f6cx.ug, j = l?.onInteraction ?? import_chunk_f9x2f6cx.jK, T = (0, import_chunk_69qhefwa.Be)(), u = Number.NEGATIVE_INFINITY;
  function _() {
    u = k(), T.emit();
  }
  let V = import_chunk_bzyb60p0.rQ.subscribe(_), y = null, pe = 0, W = false, b = /* @__PURE__ */ new Map(), F, ee = 0, ke = /* @__PURE__ */ new Set(), R = null, E = null, G = null, te = null, L = false, we = /* @__PURE__ */ new Set(), P = [], N = 0, x = /* @__PURE__ */ new Set(), B = null, oe = false, w = false, H = null, z = null, ie;
  async function Re(e, o) {
    if (oe || w || (0, import_chunk_f9x2f6cx.Y)()) return;
    if (oe = true, ie = e, C = o, !H) H = (0, import_chunk_bzyb60p0.B9a)(() => {
      (0, import_chunk_bzyb60p0.JD)(), T.emit();
    });
    let n = ++N, f = await he(o);
    if (w || n !== N) return;
    if (P = f, ee = k(), P.length === 0) {
      se();
      return;
    }
    if (B = await A().catch(() => null), w || n !== N) return;
    (0, import_chunk_w578pjby.t)(`Watching for changes in skill/command directories: ${P.join(", ")}...`), y = K(v);
    let m = y, r = new Promise((p) => m.once("ready", () => p()));
    if (await (0, import_chunk_5appeerh.me)(r, De), w || n !== N) return;
    if (fe) se();
    z = (0, import_chunk_w578pjby.Ct)(Q);
  }
  function K(e) {
    pe = k(), W = false, re();
    let o = (0, import_chunk_bzyb60p0.aFt)("userSettings", "skills"), n = import_chunk_dzf5h538.ZO.watch(P, { persistent: true, ignoreInitial: true, depth: 2, awaitWriteFinish: { stabilityThreshold: h, pollInterval: c }, ignored: (m, r) => {
      if (r && !r.isFile() && !r.isDirectory() && !r.isSymbolicLink()) return true;
      if (m.split(/[/\\]/).some((p) => p === ".git")) return true;
      if (g.relative(o, m).split(g.sep)[0] === import_chunk_mgntjepj.J2n) return true;
      if (r?.isFile()) return !m.endsWith(".md");
      return false;
    }, ignorePermissionErrors: true, usePolling: fe, interval: e, atomic: true });
    n.on("add", X), n.on("change", X), n.on("unlink", X);
    let f = false;
    return n.on("unlinkDir", (m) => {
      let r = P.find((p) => g.resolve(p) === g.resolve(m));
      if (r !== void 0) f = true, W = false, b.set(r, false), re();
    }), n.once("ready", () => {
      let m = n.getWatched();
      if (W = !f && P.every((r) => g.resolve(r) in m), W) {
        for (let r of b.keys()) Se(r);
        clearTimeout(F);
      }
    }), n.on("error", (m) => (0, import_chunk_w578pjby.t)(`[skills] watcher error: ${(0, import_chunk_jv7av99m.d)(m)}`, { level: "warn" })), n;
  }
  function re() {
    if (clearTimeout(F), b.size === 0) return;
    let e = L ? de : v, o = setTimeout(async () => {
      let n = /* @__PURE__ */ new Set();
      for (let r of b.keys()) if (await ge((0, import_chunk_w578pjby.le)(), void 0, r)) n.add(r);
      if (o !== F) return;
      let f = y?.getWatched() ?? {}, m = false;
      for (let [r, p] of b) {
        let ce = n.has(r);
        if (m ||= ce && !(p && g.resolve(r) in f), p && ce) Se(r);
        else b.set(r, ce);
      }
      if (m) J(), y = K(e);
      else re();
    }, e);
    o.unref?.(), F = o;
  }
  async function J() {
    try {
      await y?.close();
    } catch (e) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(e), "skillChangeDetector: could not close a watcher; went on without closing it"));
    }
  }
  async function Ee() {
    try {
      if ((0, import_chunk_rb36kwbn._hn)()) return;
      let e = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? g.join((0, import_chunk_bzyb60p0.aFt)("userSettings", "skills"), import_chunk_mgntjepj.yX) : void 0, o = [];
      for (let n of await he(C)) {
        if (P.includes(n) || n === e) continue;
        let f = await (0, import_chunk_w578pjby.le)().readdir(n).catch(() => []);
        if (w) return;
        if (f.length === 0 || ke.has(n)) continue;
        if (ke.add(n), !await _e(n)) o.push(n);
      }
      if (w || (0, import_chunk_rb36kwbn._hn)()) return;
      for (let n of o) if (!P.includes(n)) b.set(n, true);
      await Pe(o);
    } catch (e) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(e), "skillChangeDetector: look for new folders failed; went on without them"));
    }
  }
  function Se(e) {
    b.delete(e), X(e);
  }
  function se() {
    te ??= j(() => {
      if (Math.abs(k() - ee) >= v) ee = k(), Ee();
      if (L) G ??= setTimeout(() => {
        G = null, ve();
      }, 0);
    }), ae();
  }
  function ve() {
    try {
      ye();
    } catch (e) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(e), "skillChangeDetector: idle check failed; will check again later"));
    }
    ae();
  }
  function ae() {
    if (w || !y || L || E !== null) return;
    let e = Z - (k() - O()) + 1, o = e < be ? be : e <= Z ? e : Z + 1;
    E = setTimeout(() => {
      E = null, ve();
    }, o), E.unref?.();
  }
  function ye() {
    if (w || !y) return;
    let e = k() - O() > Z;
    if (e === L) return;
    L = e;
    let o = e ? de : v;
    (0, import_chunk_w578pjby.t)(`[skills] ${e ? "idle" : "active"} \u2014 switching poll interval to ${o}ms`);
    let n = false;
    if (W && (e || k() - pe <= We)) try {
      y.setPollInterval(o), n = true;
    } catch (f) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(f), "skillChangeDetector: could not change the poll interval in place; built a new watcher instead"));
    }
    if (!n) (0, import_chunk_w578pjby.t)("[skills] building a new watcher for the switch"), J(), y = K(o);
    if (!e) Ce(ue), ae();
  }
  async function Ae() {
    if (!oe || w) return;
    let e = await he(C);
    if (w) return;
    await Pe(e);
  }
  async function Pe(e) {
    let o = (0, import_chunk_4smdap7r.M)([...P, ...e]);
    if (o.length === P.length) return;
    let n = ++N;
    P = o, (0, import_chunk_w578pjby.t)(`[skills] now watching skill/command directories: ${P.join(", ")}`), J(), y = K(L ? de : v);
    let f = y, m = new Promise((r) => f.once("ready", () => r()));
    if (await (0, import_chunk_5appeerh.me)(m, De), w || n !== N) return;
    if (fe) se();
    z ??= (0, import_chunk_w578pjby.Ct)(Q);
  }
  function Q() {
    if (w = true, z) z(), z = null;
    if (H) H(), H = null;
    if (E) clearTimeout(E), E = null;
    if (G) clearTimeout(G), G = null;
    clearTimeout(F), F = void 0, te?.(), te = null;
    let e = J();
    if (y = null, R) clearTimeout(R), R = null;
    return x.clear(), V(), T.clear(), e;
  }
  function X(e) {
    (0, import_chunk_w578pjby.t)(`Detected skill change: ${e}`), (0, import_chunk_y53wbr8a.a)("tengu_skill_file_changed", { source: (0, import_chunk_78g0060s.S)("chokidar") }), Fe(e), Ce(e);
  }
  function Fe(e) {
    let o = e.split(/[/\\]/).some((m, r, p) => m === import_chunk_mgntjepj.yX && p[r - 1] === "skills"), n = k() - u <= Ge, f = `${o}:${n}`;
    if (we.has(f)) return;
    we.add(f), (0, import_chunk_42tcgre6.q)("info", "skill_watch_saw_change", { in_synced_skills_folder: o, within_40s_of_announced_reload: n });
  }
  function Ce(e) {
    if (x.add(e), R) clearTimeout(R);
    R = setTimeout(async () => {
      R = null;
      let o = [...x];
      x.clear();
      let n = o.length === 1 && o[0] === ue;
      if (!n) {
        let r = o.find((p) => p !== ue) ?? o[0];
        if (await _e(r)) {
          (0, import_chunk_w578pjby.t)(`ConfigChange hook blocked skill reload (${o.length} paths)`);
          return;
        }
      }
      (0, import_chunk_bzyb60p0.b5)();
      let f = await A().catch(() => null);
      if (f === null) {
        (0, import_chunk_bzyb60p0.MW)(), (0, import_chunk_bzyb60p0.YTe)(), Ie();
        return;
      }
      if (B !== null && f.size === B.size && [...B].every(([r, p]) => f.get(r) === p) && n) {
        (0, import_chunk_bzyb60p0.YTe)();
        return;
      }
      (0, import_chunk_bzyb60p0.MW)(), (0, import_chunk_bzyb60p0.YTe)(), await (0, import_chunk_bzyb60p0.Soo)().catch((r) => (0, import_chunk_w578pjby.t)(`[skills] re-reading the moved directory's skills failed: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" })), B = f, Ie();
    }, I);
  }
  function _e(e) {
    if (!ie) return (0, import_chunk_k449cc64.i)(Error("skillChangeDetector: ConfigChange hook gate not wired")), Promise.resolve(true);
    return ie("skills", e);
  }
  function Ie() {
    try {
      T.emit();
    } catch (e) {
      for (let o of e instanceof AggregateError ? e.errors : [e]) (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(o), "skillChangeDetector: subscriber threw during reload"));
    }
  }
  function Le() {
    if (w) return;
    V(), V = import_chunk_bzyb60p0.rQ.subscribe(_);
  }
  return { initialize: Re, dispose: Q, rehome: Ae, [Symbol.asyncDispose]: Q, subscribe: T.subscribe, rebridgeSkillsChanged: Le, _checkIdleTransitionForTest: ye };
}
var kMe = $e();
async function he(l) {
  let h = (0, import_chunk_w578pjby.le)(), c = [], I = (0, import_chunk_bzyb60p0.aFt)("userSettings", "skills");
  if (I) try {
    await h.stat(I), c.push(I);
  } catch {
  }
  if (I) {
    let u = g.join(I, import_chunk_mgntjepj.yX);
    try {
      await h.stat(u), c.push(u);
    } catch {
    }
  }
  let v = (0, import_chunk_bzyb60p0.aFt)("userSettings", "commands");
  if (v) try {
    await h.stat(v), c.push(v);
  } catch {
  }
  let C = (0, import_chunk_bzyb60p0.aFt)("projectSettings", "skills");
  if (C) try {
    let u = g.resolve(C);
    if ((0, import_chunk_m15w38ag.ne)() && l !== void 0) {
      if (await U(l, u)) c.push(u);
    } else await h.stat(u), c.push(u);
  } catch {
  }
  let A = (0, import_chunk_w5s307zm.dr)((0, import_chunk_f9x2f6cx.Te)()), k = (0, import_chunk_w5s307zm.Mi)((0, import_chunk_f9x2f6cx.Te)());
  if ((0, import_chunk_f9x2f6cx.us)() === null && A && k && A !== k) {
    let u = g.join(A, ".claude", "skills"), _ = g.join(k, ".claude", "skills");
    if (!c.includes(u) && !await ge(h, l, u) && await ge(h, l, _)) c.push(_);
  }
  let O = (0, import_chunk_bzyb60p0.aFt)("projectSettings", "commands");
  if (O) try {
    let u = g.resolve(O);
    if ((0, import_chunk_m15w38ag.ne)() && l !== void 0) {
      if (await U(l, u)) c.push(u);
    } else await h.stat(u), c.push(u);
  } catch {
  }
  let j = (0, import_chunk_bzyb60p0.aFt)("userSettings", "agents");
  if (j) try {
    await h.stat(j), c.push(j);
  } catch {
  }
  let T = (0, import_chunk_bzyb60p0.aFt)("projectSettings", "agents");
  if (T) try {
    let u = g.resolve(T);
    if ((0, import_chunk_m15w38ag.ne)() && l !== void 0) {
      if (await U(l, u)) c.push(u);
    } else await h.stat(u), c.push(u);
  } catch {
  }
  for (let u of (0, import_chunk_zddv3vvj.WAe)()) {
    let _ = g.join(u, ".claude", "skills");
    try {
      if ((0, import_chunk_m15w38ag.ne)() && l !== void 0) {
        if (await U(l, g.resolve(_))) c.push(_);
      } else await h.stat(_), c.push(_);
    } catch {
    }
  }
  return (0, import_chunk_4smdap7r.M)(c);
}
async function U(l, h) {
  let c = await l.hostFiles.stat(import_chunk_w578pjby.yS.workspace(h));
  return c.ok && c.value.kind !== "absent";
}
async function ge(l, h, c) {
  try {
    if ((0, import_chunk_m15w38ag.ne)() && h !== void 0) return await U(h, c);
    return await l.stat(c), true;
  } catch {
    return false;
  }
}
