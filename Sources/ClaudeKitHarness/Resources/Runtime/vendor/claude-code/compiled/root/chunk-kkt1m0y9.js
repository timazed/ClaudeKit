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
var chunk_kkt1m0y9_exports = {};
__export(chunk_kkt1m0y9_exports, {
  qjr: () => qjr
});
module.exports = __toCommonJS(chunk_kkt1m0y9_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_g8psar90 = require("/$bunfs/root/chunk-g8psar90.js");
var import_chunk_wnt799dt = require("/$bunfs/root/chunk-wnt799dt.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
var I = "tengu_synchronous_bunny";
function A() {
  return (0, import_chunk_sghy0qej.Pe)(I, { safe: true });
}
var B = "served-settings-changed", W = "served-settings-changed-between", L = "served-settings-taken-as-found", j = "served-settings-record-unavailable", G = 5e3;
function H() {
  try {
    (0, import_chunk_865at33z.hPe)();
    let a = (0, import_chunk_c203g5kd.dse)("git", import_chunk_c203g5kd.s.PATH ?? "");
    if (a === null || (0, import_chunk_ds5wjsjg.m2)("git") === null) return false;
    let n = (0, import_chunk_9zdrdv25.Xqt)(a, ["--version"], { reject: false, timeout: G, cwd: (0, import_os.homedir)(), env: (0, import_chunk_9zdrdv25.d$)(), extendEnv: false, stdin: "ignore" });
    if (n.exitCode !== 0 || !String(n.stdout).startsWith("git version")) return false;
    return !(0, import_chunk_865at33z.F1)({ onIndeterminate: "untracked" });
  } catch (a) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(a)), false;
  }
}
var M = { project: "projectSettings", local: "localSettings", legacy: "localSettings" };
function F(a) {
  try {
    (0, import_chunk_r3mm3x33.pr)(), (0, import_chunk_6zh1j84y.KRe)({ userLayer: "retain" });
  } catch (n) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n));
  }
  try {
    (0, import_chunk_865at33z.pz)().reset();
  } catch (n) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n));
  }
  for (let n of a) try {
    import_chunk_trq47kfh.Ti.notifyChange(n);
  } catch (c) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(c));
  }
}
var K = 2e3, C = /* @__PURE__ */ new WeakSet();
function V(a, n, c) {
  let d = c, l = n, t = performance.now(), g = () => {
    queueMicrotask(() => F(["projectSettings", "localSettings"]));
    return;
  };
  return () => {
    let _ = (0, import_chunk_2yx6c1y2.vJi)() !== l;
    if (!_ && performance.now() - t < K) return d;
    t = performance.now();
    try {
      let p = (0, import_chunk_2yx6c1y2.fut)(), h = (0, import_chunk_sjqze7qg.cio)(a, p, import_chunk_2yx6c1y2.sEe, "look", import_chunk_2yx6c1y2.hKn);
      if (h.heldBack.filter((y) => !h.firstSeen.some((T) => T.slot === y)).length === 0) return g();
      l = p.key, d = (0, import_chunk_2yx6c1y2.JIo)(h.seeds);
    } catch (p) {
      if ((0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(p)), _) return g();
    }
    return d;
  };
}
function P(a) {
  return a;
}
function qjr(a, n = (0, import_chunk_g8psar90.CKe)()) {
  if (!A()) return;
  let c = P(n), d = (e) => {
    try {
      (0, import_chunk_cqa9hrgx.u)("remote_served_settings_freeze", e);
    } catch (r) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    }
  }, l = (e, r) => {
    try {
      a?.(e, r);
    } catch (o) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
    }
  }, t, g, _, p = false, h, E = true;
  try {
    E = (0, import_chunk_sjqze7qg.ZXa)();
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
  try {
    let e = (0, import_chunk_2yx6c1y2.fut)();
    h = e.key, t = (0, import_chunk_sjqze7qg.cio)(c, e, import_chunk_2yx6c1y2.sEe, "engage", import_chunk_2yx6c1y2.hKn, (0, import_chunk_7e1w6rv3.ud)(() => (0, import_chunk_nnk8tdzz.Qk)(H)));
    let r = t.matching;
    _ = (0, import_chunk_2yx6c1y2.JIo)(t.sandboxTurnedOn ? (0, import_chunk_sjqze7qg.cio)(c, e, import_chunk_2yx6c1y2.sEe, "look", import_chunk_2yx6c1y2.hKn).seeds : t.seeds), g = (0, import_chunk_2yx6c1y2.JMr)({ files: t.seeds, onOwnWrite: (o, v) => {
      if (!r.has(o)) return;
      try {
        c.recordFile(o, (0, import_chunk_wnt799dt.Mne)(v), "own_write"), p = true;
      } catch (w) {
        throw r.delete(o), (0, import_chunk_cqa9hrgx.m)("remote_served_settings_freeze", "own_write_not_recorded"), w;
      }
    } });
  } catch (e) {
    throw (0, import_chunk_cqa9hrgx.m)("remote_served_settings_freeze", "engage_failed"), l(j, import_chunk_r9ecxfn9._l["served_settings.record_unavailable"]), e;
  }
  if (d({ op: (0, import_chunk_78g0060s.S)("engaged") }), t.firstSeen.length > 0) {
    let e = t.firstSeen.some((r) => r.widening);
    if (d({ op: (0, import_chunk_78g0060s.S)("baseline"), files_present: (0, import_chunk_4smdap7r.U)(t.firstSeen, (r) => r.present), prior_serving: E, widening_keys: e }), E && e) l(L, import_chunk_r9ecxfn9._l["served_settings.taken_as_found"]);
  }
  if (t.heldBack.length > 0) d({ op: (0, import_chunk_78g0060s.S)("held_back"), files: t.heldBack.length, unreadable: t.unreadable, hook_waiting: t.hookWaiting }), l(W, import_chunk_r9ecxfn9._l["served_settings.held_back"]);
  let y = (0, import_chunk_r3mm3x33.Br)(), T = C.has(y);
  if (g.began && (t.heldBack.length > 0 || T)) F(T ? ["projectSettings", "localSettings"] : new Set(t.heldBack.map((e) => M[e])));
  C.add(y);
  let b = (e) => {
    d({ op: (0, import_chunk_78g0060s.S)("held_change"), when: (0, import_chunk_78g0060s.f)(e) }), l(B, import_chunk_r9ecxfn9._l["served_settings.changed_while_attached"]);
  }, k = false, R = (e) => {
    if (k) return;
    try {
      if ((0, import_chunk_2yx6c1y2.CJi)() === "changed") k = true, b(e);
    } catch (r) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), k = true, b(e);
    }
  }, x = (0, import_chunk_r3mm3x33.Br)().onInvalidate(() => R("during_attach")), O = false, N = t.sandboxTurnedOn || !g.began && y.repoTierFreeze.tier("localSettings")?.settings?.sandbox?.enabled === true;
  return { hookWaiting: t.hookWaiting, sandboxTurnedOn: N, end: () => {
    if (O) return;
    O = true, x(), R("at_end");
    let e;
    try {
      let o = (0, import_chunk_2yx6c1y2.fut)(), v = (0, import_chunk_sjqze7qg.cio)(c, o, import_chunk_2yx6c1y2.sEe, "look", import_chunk_2yx6c1y2.hKn);
      e = v.heldBack.length > 0 ? (0, import_chunk_2yx6c1y2.JIo)(v.seeds) : void 0;
      try {
        c.noteServed(o.key, [...v.matching]);
      } catch (w) {
        (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(w));
      }
    } catch (o) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), e = _;
    }
    let r;
    try {
      r = g.release().last;
    } catch (o) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), r = true;
    }
    if (!r) return;
    try {
      if (e !== void 0) (0, import_chunk_2yx6c1y2.TJi)(e, V(c, h, e));
      else if (k || p || t.heldBack.length > 0) F(["projectSettings", "localSettings"]);
    } catch (o) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
    }
  } };
}
