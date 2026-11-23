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
var chunk_mw5yr9eq_exports = {};
__export(chunk_mw5yr9eq_exports, {
  $Zn: () => $Zn,
  c8s: () => c8s,
  dVo: () => dVo,
  lVo: () => lVo
});
module.exports = __toCommonJS(chunk_mw5yr9eq_exports);
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_g44r9njd = require("/$bunfs/root/chunk-g44r9njd.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_h5jsp3s5 = require("/$bunfs/root/chunk-h5jsp3s5.js");
var import_chunk_speqggn1 = require("/$bunfs/root/chunk-speqggn1.js");
var import_chunk_1hd1ptv0 = require("/$bunfs/root/chunk-1hd1ptv0.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_promises = require("fs/promises");
var import_promises2 = require("fs/promises");
var import_path = require("path");
var import_fs = require("fs");
var import_path2 = require("path");
var import_fs2 = require("fs");
var import_fs3 = require("fs");
var j = {};
(0, import_chunk_w1d7ygsk.jr)(j, { DEV_MODS_PLACEHOLDER: () => pr, default: () => j });
var xo = { explain: "explain", allow: "enable", not_now: "decline" };
var vo = { no_one_to_ask: "no_one_to_ask", host_closed: "closed", no_selection: "unpicked", error: "retry" };
function yo(o) {
  switch (o.kind) {
    case "chose":
      return xo[o.value];
    case "declined":
      return "decline";
    case "aborted":
      return "withdrawn";
    case "unanswered":
      return vo[o.reason];
  }
}
var wo = (o) => o === "now" ? "now" : "when this turn ends";
var Do = (o) => `They'll load ${wo(o)}, and they'll reload whenever they change. A mod is code, and it runs with the same access you have here.`;
var ao = [{ value: "explain", label: "How does this work?" }, { value: "allow", label: "Turn them on" }, { value: "not_now", label: "Not now", description: "New and changed mods load without asking the next time this session starts." }];
function _o(o) {
  let e = o === "now", r = !(0, import_chunk_f9x2f6cx.Se)();
  return ["A mod is a small program that changes how Claude looks or behaves here.", "Claude wrote these mods, and they run with the same access you have.", e ? "If you turn them on, they'll load now and reload whenever they change." : "Once they're on, they load when this turn ends and reload when they change.", "That lasts for the rest of this session, even if it restarts.", "If you choose Not now, nothing new will load until this session next starts.", ...r ? ["You can see what's loaded, and turn it off, with /plugin."] : []].join(`
`);
}
var ko = "Mods";
var A = "Turn on the mods Claude writes in this session?";
var fe = (o) => `${A}

${Do(o)}`;
var lVo = "mod_hot_reload";
var le = (o) => `${A}

${_o(o)}`;
function Mo(o, e) {
  let r = [{ question: A, header: ko, options: ao.filter((p) => p.value !== "explain").map((p) => ({ label: p.label, description: "" })), multiSelect: false }], s = { questions: r, answers: { [A]: e } }, n = (0, import_chunk_bzyb60p0.La)({ content: [{ type: "tool_use", id: o, name: import_chunk_e5q83yb8.so, input: { questions: r } }], isVirtual: true }), a = (0, import_chunk_bzyb60p0.Me)({ content: [import_chunk_g44r9njd.NY.mapToolResultToToolResultBlockParam(s, o)], toolUseResult: s, isVirtual: true });
  return [{ ...n, message: { ...n.message, stop_reason: "tool_use" } }, a];
}
var To = 2e3;
var bo = "Not turned on.";
function fo(o, e) {
  if (So(() => {
    let r = (0, import_chunk_bzyb60p0.Uc)(), s = o.kind === "chose" ? ao.find((a) => a.value === o.value)?.label : void 0, n = o.kind === "declined" ? o.typedAnswer : s;
    if (n !== void 0) r?.sendDisplayRows?.(Mo(e, n));
    if (s !== void 0 && r?.surface === "terminal") (0, import_chunk_yg9g0473.c7)(import_chunk_bzyb60p0.Hrt, `${A} \u2192 ${s}`);
  }), o.kind === "declined") So(() => (0, import_chunk_yg9g0473.c7)(import_chunk_bzyb60p0.Hrt, bo));
}
function So(o) {
  try {
    o();
  } catch (e) {
    (0, import_chunk_cqa9hrgx.l)("plugin_dev_mods", "answer_not_shown"), (0, import_chunk_k449cc64.i)(e);
  }
}
var Eo = 3;
async function lo(o, e) {
  let r = import_chunk_bzyb60p0.Hno.isRunning() ? "turn-end" : "now", n = e === 0 ? fe(r) : le(r), a = { id: "" }, p = await (0, import_chunk_h5jsp3s5.Uue)({ canUseTool: (...h) => (a.id = h[4], o.binding.canUseTool(...h)), toolUseContext: o.binding.toolContext(o.abortController), source: lVo, header: ko, question: n, choices: ao, personOnly: true }), c = yo(p), g = p.kind === "declined" && p.typedAnswer !== void 0 && !/^\[.*\]$/u.test(p.typedAnswer);
  if (c !== "explain" && !g) return fo(p, a.id), c;
  if (c === "explain") (0, import_chunk_cqa9hrgx.u)("plugin_dev_mods", { answer: (0, import_chunk_78g0060s.S)("explain") });
  if (e < Eo) return lo(o, e + 1);
  return fo(g ? p : { kind: "declined" }, a.id), "decline";
}
var Ao = { no_one_to_ask: "no_one_to_ask", closed: "host_closed", unpicked: "no_selection" };
async function Ro(o, e) {
  let r = (0, import_chunk_bzyb60p0.Uc)();
  if (r === void 0) return (0, import_chunk_cqa9hrgx.l)("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let s = new AbortController();
  e?.addEventListener("abort", () => s.abort(), { once: true });
  try {
    let n = await lo({ binding: r, folder: o, abortController: s }, 0), a = Ao[n];
    return a === void 0 ? (0, import_chunk_cqa9hrgx.u)("plugin_dev_mods", { answer: (0, import_chunk_78g0060s.f)(n) }) : (0, import_chunk_cqa9hrgx.l)("plugin_dev_mods", a), n;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`dev mods: the ask failed, asked again later: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" }), "retry";
  }
}
function X() {
  let o = (0, import_chunk_bzyb60p0.Uc)();
  if (o === void 0) return true;
  try {
    return (0, import_chunk_h5jsp3s5.u0t)(o.toolContext(new AbortController()));
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`dev mods: no context to ask in yet: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), true;
  }
}
var Oo = [{ refusal: "diskless", isRefused: import_chunk_f9x2f6cx.Y }, { refusal: "hooks_modules_off", isRefused: () => !(0, import_chunk_m3wvjg0t.SE)() }, { refusal: "all_hooks_disabled", isRefused: import_chunk_6zh1j84y.Qh }, { refusal: "sideload_disabled", isRefused: import_chunk_wj4me9k5.RN }, { refusal: "local_dirs_blocked", isRefused: () => !(0, import_chunk_wj4me9k5.YRe)() }, { refusal: "managed_hooks_only", isRefused: () => (0, import_chunk_2yx6c1y2._e)("policySettings")?.allowManagedHooksOnly === true }, { refusal: "hooks_disabled_in_settings", isRefused: import_chunk_6zh1j84y.Ewe }, { refusal: "safe_mode", isRefused: import_chunk_2gtmjt3y.as }, { refusal: "bare_mode", isRefused: () => (0, import_chunk_0pb268nk.Lr)("hooks") }, { refusal: "dont_ask", isRefused: () => (0, import_chunk_bzyb60p0.Uc)()?.permissionMode() === "dontAsk" }, { refusal: "untrusted", isRefused: () => !(0, import_chunk_865at33z.Yk)() }];
function D() {
  return Oo.find((o) => o.isRefused())?.refusal;
}
function C(o = D) {
  let e = o();
  if (e !== void 0) (0, import_chunk_cqa9hrgx.l)("plugin_dev_mods", e), (0, import_chunk_w578pjby.t)(`dev mods: mod hot-reloading is off here (${e})`);
  return e;
}
var Co = 3;
function Lo(o, e) {
  let r = /* @__PURE__ */ new Set(), s = new Set(e.loaded), n = false, a = false, p = false, c, g = 0, h = Number.NEGATIVE_INFINITY, y = false, B = 0, V = false, Q = false, N = false, ro = false, M = false, q, Xo = e.watchRoot(o, () => {
    n = true, co();
  }), Jo = e.turn.onBegin(() => {
    if (g += 1, V = e.turn.isPersonTurn(), Q && V) B -= 1;
    Q = false;
  }), Zo = e.turn.onEnd((x) => void to(() => oe(x ? "wait" : "wake")));
  function uo() {
    q?.(), q = void 0;
  }
  function co() {
    if (M || a) return;
    if (uo(), e.turn.isRunning()) {
      to(I);
      return;
    }
    q = e.clock.setTimeout(() => void to(I), e.quietMs);
  }
  async function to(x) {
    try {
      await x();
    } catch (v) {
      (0, import_chunk_w578pjby.t)(`dev mods: the watch on ${o} failed: ${(0, import_chunk_jv7av99m.d)(v)}`, { level: "error" });
    }
  }
  async function oe(x) {
    if (p) {
      p = false;
      for (let v of await e.listChildren(o) ?? []) r.add(v);
    }
    if (a) {
      if (e.isYesStanding()) {
        await go(x);
        return;
      }
      a = false, h = g - 1, await I();
      return;
    }
    if (y) y = false, await I();
  }
  async function go(x) {
    if (M) return;
    if (e.refusal()) {
      await O(), e.stopped("refused");
      return;
    }
    let v = x, no = e.turn.onBegin(() => {
      v = "wait";
    }), z = e.turn.onEnd((H) => {
      v = H ? "wait" : "wake";
    });
    try {
      await Promise.all([O(), e.enable(o, () => v)]);
    } finally {
      no(), z();
    }
    e.stopped("enabled");
  }
  async function I() {
    q = void 0;
    let x = e.turn.isRunning() && n && h === Number.NEGATIVE_INFINITY, v = M || a, no = e.turn.isRunning() && !x;
    if (v || ro || no || h === g) {
      y = !v;
      return;
    }
    ro = true;
    let z = false;
    try {
      let H = x ? [] : (await e.listChildren(o) ?? []).filter((F) => !r.has(F)), ee = x || H.length > 0 && (n || H.some((F) => !s.has(F)));
      if (M || !ee) return;
      if (e.turn.isRunning() && !x) {
        y = true;
        return;
      }
      if (e.refusal()) {
        await O(), e.stopped("refused");
        return;
      }
      h = g, V = false, Q = false;
      let ho = new AbortController();
      c = ho;
      let io = await e.ask(o, ho.signal).finally(() => {
        c = void 0;
      });
      if (M) return;
      switch (io) {
        case "enable":
          if (e.turn.isRunning() && !e.refusal()) {
            a = true, e.deferred();
            return;
          }
          await go("wake");
          return;
        case "decline": {
          N = false, B = 0, p = e.turn.isRunning();
          let F = await e.listChildren(o);
          for (let re of [...H, ...F ?? []]) r.add(re);
          return;
        }
        case "withdrawn":
          if (!N) N = true, e.unanswered();
          y = true;
          return;
        case "retry":
          y = true;
          return;
        case "closed":
        case "unpicked":
          if (!N) N = true, e.unanswered();
          if (!V) B += 1, Q = io === "unpicked";
          if (B >= Co) {
            await O(), e.stopped("no_pick");
            return;
          }
          if (io === "unpicked") {
            h = e.turn.isRunning() ? g - 1 : g, y = true;
            return;
          }
          h = g - 1, z = true;
          break;
        case "no_one_to_ask":
          await O(), e.stopped("no_one_to_ask");
          return;
      }
    } finally {
      ro = false;
    }
    if (z) await I();
  }
  async function O() {
    if (M) return;
    M = true, y = false, uo(), c?.abort(), Jo(), Zo(), await Xo.close();
  }
  return co(), { declined: () => [...r], isClosed: () => M, dispose: O };
}
var Po = "They'll load when this turn ends.";
function No(o, e) {
  let r = import_chunk_bzyb60p0.qI.get();
  if (r?.stage !== "watching" || r.folder !== o) return;
  switch (e) {
    case "refused":
      import_chunk_bzyb60p0.qI.set({ stage: "wanted", folder: o, ...r.loaded !== void 0 && { loaded: r.loaded } });
      return;
    case "no_one_to_ask":
    case "no_pick":
      import_chunk_bzyb60p0.qI.set({ stage: "off", folder: o });
      return;
    case "enabled":
      return;
  }
}
async function T(o) {
  let e = /* @__PURE__ */ new Date();
  await (0, import_promises2.utimes)(o, e, e).catch((r) => (0, import_chunk_w578pjby.t)(`dev mods: ${o} keeps its old time: ${(0, import_chunk_jv7av99m.d)(r)}`));
}
function J() {
  if (import_chunk_bzyb60p0.z2a.get() !== void 0) return;
  import_chunk_bzyb60p0.z2a.set(import_chunk_bzyb60p0.Hno.onEnd(() => {
    try {
      for (let o of [...import_chunk_yg9g0473.mDe.get() ?? [], ...import_chunk_yg9g0473.m0n.get() ?? []]) T(o);
    } catch (o) {
      (0, import_chunk_w578pjby.t)(`dev mods: the turn-end refresh failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
    }
  }));
}
function U(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  if (r === "enable_failed") (0, import_chunk_yg9g0473.c7)(import_chunk_bzyb60p0.Hrt, (0, import_chunk_bzyb60p0.G3a)((0, import_chunk_jv7av99m.d)(e)));
  else (0, import_chunk_yg9g0473.NQ)(import_chunk_bzyb60p0.Hrt, (0, import_chunk_bzyb60p0.qZo)((0, import_path.basename)(o), e));
  return (0, import_chunk_cqa9hrgx.m)("plugin_dev_mods", r), (0, import_chunk_w578pjby.t)(`dev mods: ${s} ${o} failed: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), "failed";
}
function Io(o, e, r) {
  return { root: o, before: /* @__PURE__ */ new Map(), after: r.after, present: r.present, unserved: r.unserved, outcome: e };
}
async function Ho(o, e, r) {
  let s = await (0, import_chunk_bzyb60p0.HIn)(o) ?? [], a = e === "reloaded" ? await (0, import_chunk_bzyb60p0.pi)(r.storageV5, r.credentials) : { enabled: [], disabled: [] }, [p] = (0, import_chunk_bzyb60p0.j3a)([...a.enabled, ...a.disabled], [o]);
  for (let c of (0, import_chunk_bzyb60p0.lfi)(Io(o, e, { present: s, after: p?.loaded ?? /* @__PURE__ */ new Map(), unserved: p?.unserved ?? /* @__PURE__ */ new Set() }), import_chunk_bzyb60p0.fns, (g) => import_chunk_bzyb60p0._Qr.get()?.isUnloaded(g) ?? false)) (0, import_chunk_yg9g0473.c7)(c.plugin, c.text);
}
async function Z(o, e) {
  let r = (0, import_chunk_bzyb60p0.Uc)()?.toolContext(new AbortController());
  await Ho(o, e, { storageV5: r?.storageV5, credentials: r?.credentials }).catch((s) => (0, import_chunk_w578pjby.t)(`dev mods: the lines for ${o} were not told: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: "error" }));
}
async function oo(o, e = false) {
  let r = e ? { isUnasked: e } : {};
  try {
    await import_chunk_bzyb60p0.NTe.get()?.joinPluginDir(o);
  } catch (s) {
    let n = import_chunk_bzyb60p0.qI.get();
    if ((n?.stage === "watching" || n?.stage === "consented") && n.folder === o) import_chunk_bzyb60p0.qI.set({ stage: "wanted", folder: o, ...n.stage === "watching" && n.loaded !== void 0 && { loaded: n.loaded } });
    return U(o, s, "enable_failed"), { kind: "off", reason: (0, import_chunk_jv7av99m.d)(s) };
  }
  try {
    if (import_chunk_bzyb60p0.qI.set({ stage: "enabled", folder: o }), import_chunk_yg9g0473.mDe.set((0, import_chunk_speqggn1.L$)(import_chunk_yg9g0473.mDe.get() ?? [], [o])), J(), await T(o), await (0, import_chunk_5appeerh.K)(0), !e) {
      let c = (0, import_chunk_bzyb60p0.Uc)()?.toolContext(new AbortController());
      (0, import_chunk_bzyb60p0.Khi)(o, c?.storageV5);
    }
    let s = await (0, import_chunk_bzyb60p0.vcr)(), n = (0, import_chunk_865at33z.ce)(), p = s === "reloaded" && ((0, import_chunk_bzyb60p0.Yir)(n) || (0, import_chunk_bzyb60p0.oXo)(n)) ? { kind: "enabled", load: "kept-out", cause: (0, import_chunk_2mwkxzk6.mls)(), ...r } : { kind: "enabled", load: s, ...r };
    return await Z(o, s), (0, import_chunk_cqa9hrgx.u)("plugin_dev_mods", { enabled: true }), p;
  } catch (s) {
    return { kind: "enabled", load: U(o, s, "enable_failed"), ...r };
  }
}
function L() {
  let o = (0, import_chunk_bzyb60p0.Uc)()?.permissionMode();
  return o === "bypassPermissions" || o === "auto" && (0, import_chunk_xfj2cwfv.gu)() && !(0, import_chunk_xfj2cwfv.Phe)();
}
function Fo(o, e) {
  let r = e.isUnasked === true ? "The permission mode turned on" : "The person enabled";
  switch (e.load) {
    case "reloaded":
      return `${r} mod hot-reloading for this session and the mods under ${o} loaded: they load and reload by themselves as their files change; the transcript names any mod that failed.`;
    case "held":
      return `${r} mod hot-reloading for this session, but the mods under ${o} wait for /reload-plugins (the load would rewrite the prompt cache): they are NOT loaded yet.`;
    case "kept-out":
      return `${r} mod hot-reloading for this session, but the hooks modules of the mods under ${o} had NOT loaded when this notice was written. They count as a person's hooks modules, not an organization's. The reason: ${e.cause}. You get no further notice about them, so do not say they are running, and /reload-plugins does not load them sooner. A mod with no hooks module did load.`;
    case "unbound":
      return `${r} mod hot-reloading for this session, but the mods under ${o} did not load (this session cannot reload its plugins; only a restart loads them).`;
    case "failed":
      return `${r} mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`;
  }
}
function Uo(o, e) {
  switch (e.kind) {
    case "enabled":
      return Fo(o, e);
    case "declined":
      return `The person declined mod hot-reloading: what this run wrote under ${o} is written but NOT loaded (a mod that loaded when the session started keeps running as it loaded). Do not say the change is running. It loads the next time this session starts (/reload-plugins reloads only a mod that loaded at the start); the person can ask again.`;
    case "unanswered":
      return `The person has not answered the mod hot-reloading question yet; it is asked again once a turn ends. What this run wrote under ${o} is written but NOT loaded yet. Do not say it was declined, and do not suggest --plugin-dir or a restart.`;
    case "off":
      return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`;
  }
}
var po = (o, e) => (0, import_chunk_bzyb60p0.ans)(Uo(o, e));
var eo = { kind: "unanswered" };
function b(o, e, r = "wake") {
  let s = e.kind === "enabled", n = s && r === "wake";
  if (s) (0, import_chunk_bzyb60p0.rS)((a) => a.value === po(o, eo));
  (0, import_chunk_bzyb60p0.Vl)({ agentId: (0, import_chunk_f9x2f6cx.ot)(), value: po(o, e), mode: "task-notification", skipAttachments: true, isMeta: import_chunk_bzyb60p0.ins, ...!n && { passive: true }, priority: "next" });
}
var $Zn = "nobody could be asked";
function P(o) {
  if (import_chunk_bzyb60p0.uli.get() === o) return;
  import_chunk_bzyb60p0.uli.set(o), b(o, { kind: "off", reason: $Zn });
}
var Wo = "the question got no pick three times";
var $o = { hooks_modules_off: "hooks modules are switched off in this process", all_hooks_disabled: "the organization disables all hooks", sideload_disabled: "the organization forbids side-loaded plugins", local_dirs_blocked: "the organization blocks plugins from local folders", managed_hooks_only: "the organization allows only managed hooks", hooks_disabled_in_settings: "hooks are turned off in your settings (disableAllHooks)", safe_mode: "the session runs in safe mode", diskless: "this kind of cloud session has no disk to load mods from", bare_mode: "the session runs in bare mode", dont_ask: "the session is in dontAsk mode", untrusted: "the workspace is not trusted" };
function Ko(o, e) {
  switch (o) {
    case "enabled":
      return;
    case "refused":
      if (e === void 0) return;
      return { kind: "off", reason: $o[e] };
    case "no_one_to_ask":
      return { kind: "off", reason: $Zn };
    case "no_pick":
      return { kind: "off", reason: Wo };
  }
}
function jo(o, e, r = D) {
  let s = Ko(e, r());
  if (e === "no_one_to_ask") P(o);
  else if (s !== void 0) b(o, s);
}
var Bo = "In this permission mode the mods Claude writes turn on without asking.";
function Vo(o, e) {
  let r = import_chunk_dzf5h538.ZO.watch(o, { persistent: true, ignoreInitial: true, followSymlinks: false, ignorePermissionErrors: true, ignored: (0, import_chunk_bzyb60p0.cfi)(o, (0, import_chunk_w578pjby.j8)(), () => false), usePolling: true, interval: import_chunk_bzyb60p0.YZo }), s = () => e();
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), r.on("unlinkDir", s), r.on("error", (n) => (0, import_chunk_w578pjby.t)(`dev mods: the watch on ${o}: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "warn" })), { close: () => r.close() };
}
async function E() {
  try {
    let o = import_chunk_bzyb60p0.qI.get();
    if (o?.stage !== "wanted") return;
    if (D() !== void 0) return;
    if (!X() && !L()) {
      if ((0, import_chunk_cqa9hrgx.l)("plugin_dev_mods", "no_one_to_ask"), import_chunk_bzyb60p0.qI.set({ stage: "off", folder: o.folder }), o.loaded === void 0) P(o.folder);
      return;
    }
    await (0, import_promises.mkdir)(o.folder, { recursive: true });
    let e = import_chunk_bzyb60p0.qI.get();
    if (e?.stage !== "wanted") return;
    let { folder: r, loaded: s } = e, n = {}, a = false, p = Lo(r, { watchRoot: Vo, loaded: s ?? [], listChildren: import_chunk_bzyb60p0.HIn, refusal: C, ask: async (c, g) => {
      if (a = !(import_chunk_bzyb60p0.cli.get() ?? []).includes(r) && L(), a) return (0, import_chunk_cqa9hrgx.u)("plugin_dev_mods", { answer: (0, import_chunk_78g0060s.S)("unasked") }), (0, import_chunk_yg9g0473.c7)(import_chunk_bzyb60p0.Hrt, Bo), "enable";
      let h = await Ro(c, g);
      if (h !== "no_one_to_ask" && h !== "retry") import_chunk_bzyb60p0.uli.set(void 0);
      if (h === "decline") import_chunk_bzyb60p0.cli.set([...import_chunk_bzyb60p0.cli.get() ?? [], r]), b(c, { kind: "declined" });
      return h;
    }, enable: async (c, g) => b(c, await oo(c, a), g()), isYesStanding: () => !a || L(), deferred: () => (0, import_chunk_yg9g0473.c7)(import_chunk_bzyb60p0.Hrt, Po), unanswered: () => b(r, eo), stopped: (c) => {
      n.release?.(), No(r, c), jo(r, c);
    }, clock: import_chunk_bzyb60p0.uns, turn: import_chunk_bzyb60p0.Hno, quietMs: To });
    import_chunk_bzyb60p0.qI.set({ stage: "watching", folder: r, watch: p, ...s !== void 0 && { loaded: s } }), n.release = (0, import_chunk_w578pjby.Ct)(() => p.dispose());
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`dev mods: the watch did not start: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
function Yo(o) {
  try {
    return (0, import_fs2.statSync)(o, { throwIfNoEntry: false })?.isFile() === true;
  } catch (e) {
    if ((0, import_chunk_jv7av99m.fn)(e)) return false;
    throw e;
  }
}
function Qo(o) {
  try {
    return (0, import_fs.readdirSync)(o, { withFileTypes: true }).filter((e) => (e.isDirectory() || e.isSymbolicLink()) && (0, import_chunk_bzyb60p0.WQt)(e.name)).map((e) => e.name).filter((e) => Yo((0, import_path2.join)(o, e, import_chunk_zcpqgt0x.Vp))).toSorted();
  } catch (e) {
    if ((0, import_chunk_jv7av99m.fn)(e)) return;
    throw e;
  }
}
async function qo(o) {
  try {
    let e = Qo(o);
    if (e === void 0 || e.length === 0) {
      let r = e !== void 0 && (X() || L());
      import_chunk_bzyb60p0.qI.set(r ? { stage: "wanted", folder: o, loaded: e } : void 0), await E();
      return;
    }
    import_chunk_bzyb60p0.qI.set({ stage: "wanted", folder: o, loaded: e }), import_chunk_yg9g0473.m0n.set((0, import_chunk_speqggn1.L$)(import_chunk_yg9g0473.m0n.get() ?? [], [o])), await import_chunk_bzyb60p0.NTe.get()?.joinPluginDir(o), J(), await T(o), await (0, import_chunk_5appeerh.K)(0), await Z(o, await (0, import_chunk_bzyb60p0.vcr)()), (0, import_chunk_cqa9hrgx.u)("plugin_dev_mods", { loaded_at_start: true }), await E();
  } catch (e) {
    let r = import_chunk_bzyb60p0.qI.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === o) import_chunk_bzyb60p0.qI.set({ stage: "wanted", folder: o }), E();
    U(o, e, "load_failed");
  }
}
function k() {
  try {
    let o = import_chunk_bzyb60p0.qI.get();
    switch (o?.stage) {
      case "consented":
        if (D() === void 0) oo(o.folder);
        return;
      case "present":
        if ((0, import_chunk_bzyb60p0.Uc)()?.permissionMode() === "dontAsk") import_chunk_bzyb60p0.qI.set({ stage: "wanted", folder: o.folder });
        else if (D() === void 0) qo(o.folder);
        return;
      case "wanted":
        E();
        return;
      case "enabled":
        T(o.folder);
        return;
      case void 0:
      case "watching":
      case "off":
        return;
    }
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`dev mods: the catch-up failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
async function zo() {
  let o = import_chunk_bzyb60p0.qI.get(), e = (0, import_chunk_1hd1ptv0.mHt)((0, import_chunk_f9x2f6cx.W)());
  try {
    if (o?.stage === "watching" && o.folder !== e) await o.watch.dispose();
    let r = import_chunk_bzyb60p0.qI.get(), s = r !== void 0 && r.folder !== e, n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) import_chunk_bzyb60p0.qI.set({ stage: "wanted", folder: e });
    import_chunk_yg9g0473._lo.set(k);
    let a = C(), p = import_chunk_bzyb60p0.qI.get()?.stage;
    if (a === void 0 && p === "consented") k();
    else if (a === void 0) {
      if (p === "present") import_chunk_bzyb60p0.qI.set({ stage: "wanted", folder: e });
      await E();
    } else if (a === "dont_ask") P(e);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`dev mods: handing out ${e} started nothing: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
  }
  return e;
}
var pr = "${CLAUDE_DEV_MODS_DIR}";
async function c8s(o, e) {
  let { DEV_MODS_PLACEHOLDER: r } = j;
  if (!o.includes(r)) return o;
  let s = (0, import_chunk_bzyb60p0.yPn)(), n = s === void 0 ? (0, import_chunk_f9x2f6cx.W)() : (0, import_chunk_kr68f0mb.Nce)(s), a = e.isPreload || s !== void 0 ? (0, import_chunk_1hd1ptv0.mHt)(n) : await zo();
  return o.replaceAll(r, a);
}
function Go() {
  let o = (0, import_chunk_1hd1ptv0.mHt)((0, import_chunk_f9x2f6cx.W)()), e = import_chunk_bzyb60p0.qI.get();
  if (e !== void 0 && e.folder === o && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch((s) => (0, import_chunk_w578pjby.t)(`dev mods: the watch did not close: ${(0, import_chunk_jv7av99m.d)(s)}`));
  import_chunk_bzyb60p0.qI.set({ stage: "present", folder: o }), import_chunk_yg9g0473._lo.set(k), k();
}
function dVo() {
  import_chunk_bzyb60p0.G2a.set(c8s);
  try {
    let o = (0, import_chunk_bzyb60p0.qhi)(), e = import_chunk_bzyb60p0.qI.get();
    if (!(o !== void 0 && (0, import_chunk_bzyb60p0.vxn)(o, (0, import_chunk_f9x2f6cx.W)()) && !(e?.stage === "enabled" && e.folder === o))) {
      Go();
      return;
    }
    if (e?.stage === "watching") e.watch.dispose().catch((s) => (0, import_chunk_w578pjby.t)(`dev mods: the watch did not close: ${(0, import_chunk_jv7av99m.d)(s)}`));
    if (import_chunk_bzyb60p0.qI.set({ stage: "consented", folder: o }), import_chunk_yg9g0473._lo.set(k), C() === void 0) (0, import_fs3.mkdirSync)(o, { recursive: true }), k();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`dev mods: the restore failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
