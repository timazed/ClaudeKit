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
var chunk_539hrhrd_exports = {};
__export(chunk_539hrhrd_exports, {
  T_e: () => T_e,
  WIe: () => WIe,
  h8t: () => h8t,
  ika: () => ika,
  nka: () => nka,
  oka: () => oka,
  rka: () => rka,
  ska: () => ska,
  z2r: () => z2r
});
module.exports = __toCommonJS(chunk_539hrhrd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_tvq790h1 = require("/$bunfs/root/chunk-tvq790h1.js");
var import_chunk_4b5275ey = require("/$bunfs/root/chunk-4b5275ey.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_vhpt9t1j = require("/$bunfs/root/chunk-vhpt9t1j.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_6xkqp5pj = require("/$bunfs/root/chunk-6xkqp5pj.js");
var import_chunk_4dn6vqbv = require("/$bunfs/root/chunk-4dn6vqbv.js");
var import_chunk_58apc8rx = require("/$bunfs/root/chunk-58apc8rx.js");
var import_chunk_ta56chse = require("/$bunfs/root/chunk-ta56chse.js");
var import_chunk_sqvd6je2 = require("/$bunfs/root/chunk-sqvd6je2.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
async function et(e, t, r) {
  let d = (0, import_chunk_f9x2f6cx.a3t)()?.bucket === r, c = new Set(t.map((S) => S.skillId)), h = e.filter((S) => S.backingPluginId !== void 0 && S.updatedAt !== import_chunk_58apc8rx.USe && !c.has(S.skillId) && (0, import_chunk_tfs0ssqe.sRi)(r, S.backingPluginId));
  if (h.length === 0) return { kept: [], undecided: false };
  let M = h, g = "another_session", v = false;
  try {
    if (await (0, import_chunk_p51r1nb3.Myr)((L) => L.pid !== process.pid && L.kind !== "daemon" && L.asksForConvertedSkills !== true && L.asksForConvertedSkills !== null) === void 0) {
      let L = await (0, import_chunk_bzyb60p0.lGa)(r, new Set(h.flatMap((y) => y.backingPluginId ?? [])));
      if (L === null) g = "plugins_bucket_unread", v = true;
      else g = "no_plugin_folder", M = h.filter((y) => y.backingPluginId !== void 0 && !L.has(y.backingPluginId)), v = M.length > 0 && !d;
    }
  } catch (S) {
    if (g = "registry_unreadable", v = true, !(S instanceof import_chunk_p51r1nb3.eBt)) g = "read_failed", (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(S));
  }
  if (M.length > 0) (0, import_chunk_42tcgre6.q)("info", "skills_sync_converted_copies_kept", { count: M.length, reason: g });
  return { kept: M, undecided: v };
}
async function kn(e) {
  let t = (0, import_chunk_tfs0ssqe.Mst)(), r = ((0, import_chunk_f9x2f6cx.fVe)() ?? []).filter(({ pluginId: y }) => y !== void 0 && t.get(y)?.heldBack === false), d = await Promise.all(r.map(({ folder: y }) => (0, import_promises2.lstat)(y).then(() => true, (R) => !(0, import_chunk_jv7av99m.J)(R)))), c = r.filter((y, R) => !d[R]), h = (0, import_chunk_wj4me9k5.Dd)(), M = c.filter(({ folder: y }) => h.hidingFoldersGone.has(y)), g = c.filter(({ folder: y }) => !h.hidingFoldersGone.has(y)), v = g.length > 0 ? await e() : [], S = new Set(v.flatMap((y) => y.updatedAt === import_chunk_58apc8rx.USe ? [] : y.backingPluginId ?? [])), L = g.filter(({ pluginId: y }) => y !== void 0 && S.has(y));
  if (h.hidingFoldersGone = new Set([...M, ...L].map(({ folder: y }) => y)), L.length === 0) return false;
  return (0, import_chunk_42tcgre6.q)("info", "skills_sync_hiding_plugin_folder_gone", { count: L.length }), true;
}
var st = 10, Xt = st * 6e4, qt = 4, Zt = "tengu_claudeai_skills_sync_interval_minutes", Qt = 5, Jt = 1440, Vt = "tengu_claudeai_skills_sync_idle_intervals", nt = 4, ei = 4, ni = 36e5, ti = 3e4, ii = 6e4, tt = 18e4, We = 45e3;
function ue() {
  let e = (0, import_chunk_865at33z.b)(Zt, st);
  if (typeof e !== "number" || Number.isNaN(e) || e <= 0) return Xt;
  return Math.min(Math.max(e, Qt), Jt) * 6e4;
}
function ot() {
  let e = ue();
  return Ge() > e && (0, import_chunk_7q6ee47s.l2i)(e) && !(0, import_chunk_wx7ffn80.Vre)();
}
function Ge() {
  let e = (0, import_chunk_865at33z.b)(Vt, nt), t = typeof e === "number" && !Number.isNaN(e) ? Math.min(Math.max(e, 1), ei) : nt, r = ue();
  return Math.max(r, Math.min(r * t, ni));
}
function rt() {
  return ti + Math.floor(Math.random() * ii);
}
function Ye(e) {
  let t = ue();
  return Math.min(t * 2 ** Math.max(0, e - 1), t * qt);
}
function lt(e) {
  let t = (0, import_chunk_wj4me9k5.Dd)();
  if (t.resyncTimer) return;
  t.resyncRunRound = e, Ae(t, e, Ye(t.consecutiveFailedRounds), "resync", false);
}
function _n(e) {
  let t = (0, import_chunk_wj4me9k5.Dd)();
  if (!t.resyncTimer || !t.resyncRunRound) return;
  clearTimeout(t.resyncTimer), Ae(t, t.resyncRunRound, e, "resync", false);
}
function dt() {
  let e = (0, import_chunk_wj4me9k5.Dd)();
  if (e.stopAwaitingActivity) return;
  let t = [import_chunk_f9x2f6cx.jK, import_chunk_wx7ffn80.Zcn].map((r) => r(() => {
    if (e.stopAwaitingActivity?.(), e.syncPromise) e.syncPromise.catch(() => {
    }).then(() => it(e));
    else it(e);
  }));
  e.stopAwaitingActivity = () => {
    e.stopAwaitingActivity = null;
    for (let r of t) r();
  };
}
function ct() {
  return (0, import_chunk_wj4me9k5.Dd)().stopAwaitingActivity !== null;
}
function pn() {
  (0, import_chunk_wj4me9k5.Dd)().stopAwaitingActivity?.();
}
function it(e) {
  try {
    let t = e.resyncArmed;
    if (!e.resyncTimer || !e.resyncRunRound || !t || t.trigger === "wake_settle") return;
    let r = Math.round(Date.now() - t.wallMs - (performance.now() - t.monotonicMs));
    if (r > We && e.consecutiveFailedRounds === 0) {
      clearTimeout(e.resyncTimer), ft(e, e.resyncRunRound, t.trigger, r, true);
      return;
    }
    let d = e.consecutiveFailedRounds > 0 ? Ye(e.consecutiveFailedRounds) : 0;
    if (t.wallMs + t.delayMs - Date.now() > d) clearTimeout(e.resyncTimer), Ae(e, e.resyncRunRound, d, "resync", true);
  } catch (t) {
    (0, import_chunk_k449cc64.i)(t);
  }
}
function ut() {
  _n(Ye((0, import_chunk_wj4me9k5.Dd)().consecutiveFailedRounds));
}
function Ae(e, t, r, d, c) {
  let h = Date.now() + r;
  e.resyncArmed = { trigger: d, delayMs: r, wallMs: Date.now(), monotonicMs: performance.now() }, e.resyncTimer = setTimeout(si, r, e, t, h, d, c), e.resyncTimer.unref?.();
}
function si(e, t, r, d, c) {
  let h = e.resyncTimer, M = Math.max(0, Date.now() - r);
  if (M > We) {
    ft(e, t, d, M, false);
    return;
  }
  t({ trigger: d, tickLateMs: M, ...c && { woken: c } }).catch(() => {
  }).then(() => {
    if (e.resyncTimer !== h) return;
    Ae(e, t, Ye(e.consecutiveFailedRounds), "resync", false);
  });
}
function ft(e, t, r, d, c) {
  (0, import_chunk_42tcgre6.q)("info", "skills_sync_resync_skipped_after_sleep", { late_ms: d, woken: c }), Ae(e, t, tt, "wake_settle", c);
  try {
    if (!(0, import_chunk_f9x2f6cx.Y)() && (c || (0, import_chunk_4dn6vqbv.fXr)())) (0, import_chunk_y53wbr8a.a)("tengu_skills_sync_resync_skipped", { trigger: (0, import_chunk_78g0060s.f)(r), tick_late_ms: d, settle_ms: tt, woken: c });
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
  }
}
var oi = 6e4;
function Re(e) {
  let t = (0, import_chunk_3t7ve0wy.fh)() ?? "none";
  return e ? `${t}${gn}` : t;
}
var gn = ".converted-skills";
function mt(e) {
  return { ...e, listedFor: e.listedFor.filter((t) => t.endsWith(gn)) };
}
async function kt({ syncedRoot: e, bucket: t, root: r, trigger: d, pinned: c, lastGeneration: h, holdsPlaceholders: M, idle: g, convertedSkillsAsPlugins: v }) {
  let S = !c && t === (0, import_chunk_wj4me9k5.gWn)(), L = c ? void 0 : ri(d, S, g);
  if (L === void 0) return { list: true, shared: S };
  if (S && g) dt();
  let y = await (0, import_chunk_bzyb60p0.z7o)(r, L);
  if (!y.reuse || !await (0, import_chunk_bzyb60p0.d_t)(e, t)) return pn(), { list: true, shared: S };
  let R = await (0, import_chunk_bzyb60p0.Fir)(r), O = false;
  if (S) {
    if (R === null || M || !R.listedFor.includes(Re(v))) return pn(), { list: true, shared: S };
    let W = g && ct();
    if (g && !W && y.ageMs >= ue()) return { list: true, shared: S };
    O = R.token !== h && d !== "startup";
    let ee = W ? Ge() : ue();
    if (y.ageMs < ee) _n(ee - y.ageMs + rt());
  } else {
    let W = R?.listedFor ?? [];
    if (!(v ? W.includes(Re(true)) : W.includes(Re(false)) || !W.some((j) => j.endsWith(gn)))) return { list: true, shared: S };
  }
  return (0, import_chunk_42tcgre6.q)("info", "skills_sync_round_reused", { age_ms: y.ageMs, within_ms: y.withinMs }), { list: false, generation: R?.token ?? null, reload: O };
}
function ri(e, t, r) {
  let d = e === "startup" ? (0, import_chunk_bzyb60p0.G7o)() : void 0;
  if (!t || e === "reload") return d;
  if (r) return Ge();
  let c = e === "startup" && (!(0, import_chunk_3t7ve0wy.kb)() || (0, import_chunk_3t7ve0wy.xft)() && (0, import_chunk_3t7ve0wy.KA)()) ? Math.min(oi, ue()) : ue();
  return Math.max(c, d ?? 0);
}
(0, import_chunk_adx6804h.B)();
var ai = "tengu_placid_noether", li = 216e5, _t = 36e5;
function pt(e) {
  return (0, import_chunk_w578pjby._)([e.updatedAt, e.requestedVersion, e.name]);
}
function gt(e, t) {
  let r = pt(t), d = e.get(t.skillId);
  e.set(t.skillId, { version: r, failures: d?.version === r ? d.failures + 1 : 1, failedAtMs: Date.now() });
}
async function yt(e, t, r) {
  let d = new Map(t.map(({ item: g }) => [g.skillId, pt(g)]));
  for (let [g, { version: v }] of e) if (d.get(g) !== v) e.delete(g);
  let c = (0, import_chunk_865at33z.b)(ai, true) !== false, h = [], M = [];
  for (let g of t) {
    let v = e.get(g.item.skillId);
    if (!c || v === void 0) {
      h.push(g);
      continue;
    }
    let S = ue() * 2 ** (v.failures - 1);
    if (S > _t) S = await r(g) ? Math.min(S, li) : _t;
    if ((0, import_chunk_sqvd6je2.yj)(v.failedAtMs, S)) M.push(g);
    else h.push(g);
  }
  return { due: h, heldBack: M };
}
var di = "tengu_jaunty_alpaca";
function St() {
  return (0, import_chunk_865at33z.Lt)(di, true) !== false;
}
var ci = "tengu_quizzical_wirth";
function je() {
  return (0, import_chunk_865at33z.b)(ci, true) !== false;
}
var yn = 15, yi = import_chunk_6xkqp5pj.Jei + 6e4;
function Si() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return e && e > 0 ? e : 5e3;
}
function nka() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return e && e > 0 ? e : 3e4;
}
function Rn() {
  let e = (0, import_chunk_wj4me9k5.Dd)();
  if (!e.firstListDeferred) {
    let t, r = new Promise((d) => {
      t = d;
    });
    e.firstListDeferred = { promise: r, resolve: t };
  }
  return e.firstListDeferred;
}
function WIe(e, t, r) {
  (0, import_chunk_wj4me9k5.Dd)().firstSyncPromise ??= Dt(e, t, r), lt((d) => In(e, t, r, d));
}
function rka(e, t, r, d) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC || e.host.launchOptions.isInteractive() || !(0, import_chunk_bzyb60p0.JJr)(e) || d()) return false;
  if ((0, import_chunk_tfs0ssqe.ZF)(), !(0, import_chunk_bzyb60p0.QJr)(e) || !(0, import_chunk_tfs0ssqe.Ist)() || (0, import_chunk_tfs0ssqe.Csl)()) return false;
  return WIe(e, t, r), true;
}
function oka(e) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_SKILLS && e.host.launchOptions.isInteractive() && !import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET && !(0, import_chunk_f9x2f6cx.Hn)() && (0, import_chunk_bzyb60p0.KMe)(e) && (0, import_chunk_tfs0ssqe.Ist)();
}
function ska(e, t, r) {
  let d = Rn();
  return (0, import_chunk_wj4me9k5.Dd)().firstSyncPromise ??= Dt(e, t, r), d.promise;
}
async function ika(e, t) {
  let r = Si() - (performance.now() - t), d = await Promise.race([e.then(() => "listed"), (0, import_chunk_5appeerh.K)(Math.max(0, r)).then(() => "timed_out")]);
  if (d === "timed_out") (0, import_chunk_y53wbr8a.a)("tengu_skills_sync_wait_timeout", {});
  return d;
}
async function h8t(e, t, r, { keepLandingWaits: d = false } = {}) {
  if (import_chunk_r9ecxfn9.iwt.of(e).discardInflight(), await (0, import_chunk_wj4me9k5.Dd)().syncPromise?.catch(() => {
  }), !d) (0, import_chunk_wj4me9k5.Dd)().failedLandings.clear();
  return In(e, t, r, { trigger: "reload" });
}
function Dt(e, t, r) {
  let d = (0, import_chunk_wj4me9k5.Dd)();
  return In(e, t, r, { trigger: "startup" }).finally(() => {
    d.firstRoundSettled = true;
  });
}
function vn() {
  let e = (0, import_chunk_wj4me9k5.Dd)();
  if (!e.firstRoundSettled) e.firstRoundEmitted = true;
}
function T_e() {
  vn(), (0, import_chunk_bzyb60p0.b5)(), import_chunk_bzyb60p0.rQ.emit();
}
function wt(e, t) {
  if (e === null) return;
  if (t !== null && e.token !== t.token) {
    T_e();
    return;
  }
  (0, import_chunk_wj4me9k5.Dd)().bucketGeneration = e.token;
}
function fe() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), import_chunk_mgntjepj.Ij);
}
function It(e) {
  return (0, import_path.join)(fe(), e);
}
function Et(e) {
  return import_chunk_hkvzj051.at.userConfigDir("skills", (0, import_path.relative)((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "skills"), e).split(import_path.sep));
}
async function Ct(e) {
  let t = fe();
  if (await (0, import_chunk_bzyb60p0.JJ)(t, (0, import_chunk_2gtmjt3y.Ze)(), { event: "skills_sync_root_refused", phase: "prune", rootLabel: import_chunk_mgntjepj.Ij }, { storageV5: e }).catch(() => null) !== "real") return null;
  let d;
  try {
    d = await (0, import_promises.readdir)(t, { withFileTypes: true });
  } catch {
    return null;
  }
  let c = [], h = [], M = [];
  for (let g of d) {
    let v = g.isDirectory() && (0, import_chunk_mgntjepj.$Tt)(g.name) ? await (0, import_chunk_bzyb60p0.c_t)(t, g.name) : "unmarked";
    if (v === "marked") c.push(g.name);
    else if (typeof v === "object") M.push(g.name), (0, import_chunk_42tcgre6.q)("warn", "skills_sync_bucket_marker_unreadable", { code: v.unreadable });
    else if (!(0, import_chunk_mgntjepj.Vme)(g.name)) h.push(g.name);
  }
  return { buckets: c, strays: h, unreadable: M };
}
async function At(e, t) {
  let r = 0;
  for (let d of e) if (await Dn((0, import_path.join)(fe(), d), t)) r++;
  if (r > 0) (0, import_chunk_42tcgre6.q)("info", "skills_sync_stray_entry_trashed", { count: r });
  return r;
}
async function wi(e) {
  let t = await Ct(e);
  if (t === null || t.strays.length === 0) return false;
  return await At(t.strays, e) > 0;
}
function Dn(e, t) {
  return (0, import_chunk_bzyb60p0.HUe)(Tt(e, t));
}
function Tt(e, t) {
  return { dir: e, trashRoot: Je(), configHome: (0, import_chunk_2gtmjt3y.Ze)(), failureEvent: "skills_sync_trash_move_failed", storageV5: t };
}
async function z2r(e) {
  if (!(0, import_chunk_tfs0ssqe.rRi)()) return false;
  let t = await (0, import_chunk_bzyb60p0.JJ)(fe(), (0, import_chunk_2gtmjt3y.Ze)(), { event: "skills_sync_root_refused", phase: "prune", rootLabel: import_chunk_mgntjepj.Ij }, { storageV5: e });
  if (t !== "real" && t !== "absent") return false;
  let r = null, d = t === "real" ? await Ct(e) : null;
  if (d !== null) {
    r = 0;
    for (let h of d.buckets) {
      let M = It(h);
      await (0, import_promises.rm)((0, import_chunk_bzyb60p0.NQt)(M), { force: true }).catch(() => {
      });
      let g = await Oi(M, e).catch(() => null);
      if (g !== null) r += g, await (0, import_promises.rmdir)(M).then(() => (0, import_chunk_bzyb60p0.ixn)(fe(), h), () => {
      });
    }
    r += await At([...d.strays, ...d.unreadable], e), await (0, import_promises.rmdir)(fe()).catch(() => {
    });
  }
  (0, import_chunk_42tcgre6.q)("info", "skills_sync_pruned_for_closed_gate", { moved: r ?? 0 });
  let c = r !== null && r > 0;
  if (c) (0, import_chunk_bzyb60p0.JD)(), (0, import_chunk_bzyb60p0.b5)(), import_chunk_bzyb60p0.rQ.emit();
  return c;
}
function Je() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), import_chunk_mgntjepj.UTt);
}
function Ve(e) {
  return (0, import_path.join)(e, import_chunk_mgntjepj.BV);
}
var ht = /* @__PURE__ */ new Set(), Mt = [], hi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ lastUpdated: (0, import_chunk_adx6804h.E)().catch(0), skills: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()), staleDirs: (0, import_chunk_adx6804h.ie)().optional(), pendingClaims: (0, import_chunk_adx6804h.ie)().optional() })), Mi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ name: (0, import_chunk_adx6804h.n)(), skillId: (0, import_chunk_adx6804h.n)().catch(""), description: (0, import_chunk_adx6804h.n)().catch(""), source: (0, import_chunk_adx6804h.n)().catch(""), updatedAt: (0, import_chunk_adx6804h.n)().nullable().catch(null), userInvocable: (0, import_chunk_adx6804h.VA)().catch(void 0), disableModelInvocation: (0, import_chunk_adx6804h.VA)().catch(void 0) }));
function Ft(e) {
  return Et(Ve(e));
}
async function _e(e, t) {
  let r = !t.manifestRead;
  t.manifestRead = true;
  let d;
  if (e) try {
    let S = await e.read([{ key: Ft(t.root), offset: 0, length: import_chunk_bzyb60p0.N0t + 1 }]);
    if (!S.ok) {
      if (r) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_manifest_unreadable", { code: "backend_read_failed" });
      return null;
    }
    let L = S.value.items[0];
    if (!L.found) return null;
    if (L.totalBytes > import_chunk_bzyb60p0.N0t || L.value.byteLength > import_chunk_bzyb60p0.N0t) {
      if (r) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_manifest_unreadable", { code: "parse_or_size" });
      return null;
    }
    d = Buffer.from(L.value).toString("utf8");
  } catch (S) {
    if (r) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_manifest_unreadable", { code: (0, import_chunk_jv7av99m.w)(S) ?? "backend_read_failed" });
    return null;
  }
  else if (d = await (0, import_chunk_bzyb60p0.IUe)(Ve(t.root), r ? "skills_sync_manifest_unreadable" : null), d === null) return null;
  let c = (0, import_chunk_bzyb60p0.MUe)(d, (0, import_chunk_bzyb60p0.oxn)(), r ? "skills_sync_manifest_unreadable" : null);
  if (c === null) return null;
  let { skills: h, staleDirs: M, pendingClaims: g, ...v } = c;
  return { ...v, skills: (0, import_chunk_bzyb60p0.Wue)((0, import_chunk_bzyb60p0.$0t)(), h), staleDirs: (0, import_chunk_bzyb60p0.F0t)(M), pendingClaims: (0, import_chunk_bzyb60p0.F0t)(g) };
}
async function Sn(e, t, r, d) {
  let c = d.guard.refusedReason();
  if (c !== null) throw (0, import_chunk_bzyb60p0.xYo)(c);
  await Ot(r, d.root);
  let h = await _e(r, d);
  if (h === null && t.onlyOverReadable) return;
  let M = (0, import_chunk_bzyb60p0.vYo)((0, import_chunk_bzyb60p0.Wue)((0, import_chunk_bzyb60p0.$0t)(), e.skills), h?.skills, (v) => v.skillId, t.removedSkillIds, (0, import_chunk_bzyb60p0.Wue)((0, import_chunk_bzyb60p0.$0t)(), t.deferredRows)), g = (0, import_chunk_w578pjby._)({ ...(0, import_chunk_bzyb60p0.CYo)(h, ["lastUpdated", "skills", "staleDirs", "pendingClaims"]), ...e, skills: M, staleDirs: (0, import_chunk_bzyb60p0.XXr)(e.staleDirs, h?.staleDirs, t.staleDirs), pendingClaims: (0, import_chunk_bzyb60p0.XXr)(e.pendingClaims, h?.pendingClaims, t.pendingClaims) }, null, 2);
  if (r) {
    let v = await r.write(Ft(d.root), g, { mode: 438 & ~process.umask(), publishDiscipline: "atomic" });
    if (!v.ok) throw (0, import_chunk_42tcgre6.q)("error", "skills_sync_manifest_write_failed", { code: v.error.code }), Error("skillsSync: manifest write failed");
    return;
  }
  await (0, import_chunk_q7qjcthc.yr)(Ve(d.root), g);
}
function Te(e) {
  return (0, import_path.join)(e, import_chunk_mgntjepj.qwe, String(process.pid));
}
function ne(e, t) {
  return (0, import_chunk_mgntjepj.Kme)(t, e);
}
async function Ri(e, t, r) {
  try {
    let d = ne(e, t);
    if (r) {
      let M = await r.read([{ key: Ln(d), offset: 0, length: import_chunk_ta56chse.sS + 1 }]), g = M.ok ? M.value.items[0] : void 0;
      if (!g?.found || g.totalBytes > import_chunk_ta56chse.sS || g.value.byteLength > import_chunk_ta56chse.sS) return null;
      return Buffer.from(g.value).toString("utf8");
    }
    let c = (0, import_path.join)(d, "SKILL.md"), h = await (0, import_promises.stat)(c);
    if (!h.isFile() || h.size > import_chunk_ta56chse.sS) return null;
    return await (0, import_promises.readFile)(c, "utf8");
  } catch {
    return null;
  }
}
function Ln(e) {
  return Et((0, import_path.join)(e, "SKILL.md"));
}
async function wn(e, t, r) {
  try {
    let d = ne(e, t);
    if (r) return (await r.statMeta(Ln(d))).ok;
    return (await (0, import_promises.stat)((0, import_path.join)(d, "SKILL.md"))).isFile();
  } catch {
    return false;
  }
}
async function vi(e, t) {
  try {
    if (t) {
      let r = await t.statMeta(Ln(e));
      return !r.ok && r.error.code === "NotFound";
    }
    return await (0, import_promises.stat)((0, import_path.join)(e, "SKILL.md")), false;
  } catch (r) {
    return (0, import_chunk_jv7av99m.J)(r) || (0, import_chunk_jv7av99m.w)(r) === "ENOTDIR";
  }
}
function bi(e) {
  return { skillId: e.id, name: e.directory || e.name || e.id, description: e.description, source: "session-refs", updatedAt: null, requestedVersion: e.version || void 0 };
}
function Pt(e, t) {
  return { ...e, backingPluginId: t.backingPluginId };
}
var Di = { idOf: (e) => e.skillId, invalidNameTag: "skills_sync_invalid_name", collisionTag: "skills_sync_name_collision" };
function Li(e, t, r) {
  return (0, import_chunk_bzyb60p0.K7o)(t, r, { ...Di, dirFor: (d) => ne(e, d), carry: Pt, ...St() && { markCollisionLoser: Ii } });
}
function Ii(e) {
  return { ...e, updatedAt: import_chunk_58apc8rx.USe };
}
function Ei(e, t, r) {
  let d = (0, import_chunk_bzyb60p0.Zur)({ skillName: e, displayName: void 0, description: (0, import_chunk_4vsz8a99.mme)(t.description), hasUserSpecifiedDescription: true, markdownContent: "", allowedTools: [], argumentHint: void 0, argumentNames: [], whenToUse: void 0, version: void 0, model: void 0, disableModelInvocation: t.disableModelInvocation ?? false, userInvocable: t.userInvocable ?? true, source: "userSettings", baseDir: r, serverAttribution: (0, import_chunk_tvq790h1.iin)(t.skillId, t.backingPluginId), loadedFrom: "syncedSkills", hooks: void 0, executionContext: void 0, agent: void 0, paths: void 0, effort: void 0, shell: void 0, skillFile: (0, import_chunk_vhpt9t1j.Dil)("was not read: this command was listed before its file was downloaded") });
  if (d?.type === "prompt") d.getPromptForCommand = async (c, h) => {
    let M = await (0, import_chunk_5appeerh.Tn)((0, import_chunk_bzyb60p0.L4e)(e), h.abortController.signal, () => new import_chunk_jv7av99m.Ie());
    if (M.ok) {
      let S = (await (0, import_chunk_bzyb60p0.Fm)((0, import_chunk_f9x2f6cx.Ed)(), h.storageV5)).find((y) => y.loadedFrom === "syncedSkills" && (0, import_chunk_a9nnd83v.ej)(y) === (0, import_chunk_a9nnd83v.ej)(d) && y.name === d.name && y.type === "prompt" && y.getPromptForCommand !== d.getPromptForCommand), L = S && (0, import_chunk_tfs0ssqe.wwt)(S);
      if (L !== void 0) return [{ type: "text", text: L }];
      if (S && S.type === "prompt") return d.source = S.source, d.skillRoot = S.skillRoot, d.skillFile = S.skillFile, d.contentLength = S.contentLength, d.progressMessage = S.progressMessage, d.userInvocable = S.userInvocable, S.getPromptForCommand(c, h);
    }
    let g = M.ok ? "skill not found after download" : M.reason;
    return [{ type: "text", text: !M.ok && M.withheld ? `${(0, import_chunk_bzyb60p0.ZJr)(d.name)} Proceed without it.` : `Skill ${e} could not be downloaded (${g}). Proceed without it.` }];
  };
  return d;
}
var Ci = { landed: "landed", anotherSkills: "another_skills", claimLapsed: "claim_lapsed", unattributed: "unattributed" };
function Ai(e, t) {
  return (0, import_chunk_bzyb60p0.PYo)({ root: () => t, configHome: import_chunk_2gtmjt3y.Ze, rootLabel: import_chunk_mgntjepj.Ij, event: "skills_sync_root_refused", storageV5: e });
}
var Nt = (0, import_chunk_bzyb60p0.OYo)("zip fetch failed"), hn = (0, import_chunk_bzyb60p0.rir)("skill archive holds no usable skill", "validate"), Ti = (0, import_chunk_bzyb60p0.rir)("skill archive could not be unpacked", "unpack"), Rt = /* @__PURE__ */ new Set(["ENOSPC", "EDQUOT", "EIO", "EROFS", "EACCES", "EPERM"]);
function Xe(e, t) {
  let r = (0, import_chunk_jv7av99m.w)(t) ?? "unknown";
  return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_local_disk_failed", { step: e, code: r }), { ok: false, cause: "local", reason: "the skill could not be saved or unpacked", step: e, code: r };
}
async function $e(e, t) {
  try {
    return await (0, import_promises.rename)(e, t), null;
  } catch (r) {
    return (0, import_chunk_jv7av99m.w)(r) ?? "unknown";
  }
}
async function bn(e, { round: t, credentials: r, storageV5: d, replacesAttributedCopy: c, targetHeldSkillFile: h, classifyOccupant: M, markTargetDestroyed: g, noteDownloadedBytes: v }, S) {
  let L = t.root, y = ne(L, e.name), R = (0, import_path.join)(Te(L), (0, import_path.relative)(L, y)), O = (0, import_path.join)((0, import_chunk_8nvd6fqx.Fp)(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (t.guard.refused()) return import_chunk_bzyb60p0.sxn;
    if (S !== void 0) await (0, import_promises.writeFile)(O, S);
    else {
      if (!c && h && await M((0, import_path.basename)(y)) === "inFlight") return (0, import_chunk_42tcgre6.q)("info", "skills_sync_target_in_flight_elsewhere"), import_chunk_bzyb60p0.bai;
      let { relay: I } = (0, import_chunk_wj4me9k5.Dd)(), F;
      try {
        F = await (0, import_chunk_6xkqp5pj.xNa)(e.skillId, O, e.requestedVersion, { isBackground: true, credentials: r, ...I && { relay: I } });
      } catch (X) {
        return Xe("save_zip", X);
      }
      if (!F) return Nt;
      v((await (0, import_promises.lstat)(O).catch(() => null))?.size ?? 0);
    }
    if (!await t.guard.verify()) return import_chunk_bzyb60p0.sxn;
    try {
      await (0, import_promises.rm)(R, { recursive: true, force: true }), await (0, import_promises.mkdir)(Te(L), { recursive: true });
    } catch (I) {
      return Xe("staging", I);
    }
    let W;
    try {
      await (0, import_chunk_4b5275ey.Nmr)(O, R, { skipEntry: (I) => I.split(/[\\/]/).some((F) => (0, import_chunk_mgntjepj.Vme)(F)) }), W = await (0, import_promises.readdir)(R, { withFileTypes: true });
    } catch (I) {
      if (!Rt.has((0, import_chunk_jv7av99m.w)(I) ?? "")) throw I;
      return Xe("unpack", I);
    }
    let ee = R;
    if (!W.some((I) => I.name === "SKILL.md") && W.length === 1 && W[0].isDirectory()) ee = (0, import_path.join)(R, W[0].name);
    try {
      if (!(await (0, import_promises.stat)((0, import_path.join)(ee, "SKILL.md"))).isFile()) return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_extracted_zip_unusable"), hn;
    } catch (I) {
      if (Rt.has((0, import_chunk_jv7av99m.w)(I) ?? "")) return Xe("unpack", I);
      return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_extracted_zip_unusable"), hn;
    }
    if (await (0, import_chunk_bzyb60p0.W7o)(ee)) return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_extracted_zip_unusable"), hn;
    if (!await t.guard.verify()) return import_chunk_bzyb60p0.sxn;
    let j = c ? "own" : void 0, T = null;
    if (!c) {
      if (T = await $e(ee, y), T !== null && (0, import_chunk_bzyb60p0.JXr)(T)) {
        let I = await M((0, import_path.basename)(y));
        if (I === "inFlight") return (0, import_chunk_42tcgre6.q)("info", "skills_sync_target_in_flight_elsewhere"), import_chunk_bzyb60p0.bai;
        j = Ci[I];
      }
    }
    let Z = null, pe = false, be = j === "claim_lapsed" || j === "unattributed";
    if (j !== void 0) {
      let I;
      if (be) {
        let F = await (0, import_chunk_bzyb60p0.Sai)(Tt(y, d));
        I = F.moved ? null : F.code, Z = F.moved ? F.to : null;
      } else {
        let F = (0, import_path.join)(Te(L), `.replaced-${process.pid}-${Math.random().toString(36).slice(2)}`);
        I = await $e(y, F);
        let X = I === "EXDEV" ? await Promise.all([(0, import_promises.stat)(L), (0, import_promises.stat)(Te(L))]).then(([N, Fe]) => N.dev === Fe.dev, () => false) : (0, import_chunk_cg8dqz0a.x)() === "windows" && I !== null && import_chunk_q7qjcthc.Lz.has(I);
        if (I === null) Z = F;
        else if (I === "ENOENT") I = null;
        else if (X) pe = true, g(), I = await (0, import_promises.rm)(y, { recursive: true, force: true }).then(() => null, (N) => (0, import_chunk_jv7av99m.w)(N) ?? "unknown");
        if (I !== null) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_occupant_displace_failed", { code: I });
      }
      if (I !== null) return { ...import_chunk_bzyb60p0.oir, code: I, occupant: j };
      T = await $e(ee, y);
    }
    if (T !== null) {
      let I = Z !== null && j !== "another_skills" && await $e(Z, y) === null;
      if (I) (0, import_chunk_bzyb60p0.b5)(), (0, import_chunk_bzyb60p0.JD)();
      else if (Z !== null) g();
      if (I && be && Z !== null) await (0, import_promises.rmdir)((0, import_path.dirname)(Z)).catch(() => {
      });
      let F = Z !== null || pe;
      return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_promotion_failed", { code: T, ...F && { restored: I } }), { ...(0, import_chunk_bzyb60p0.sir)(T), occupant: F ? j : void 0 };
    }
    return import_chunk_bzyb60p0.tja;
  } finally {
    if (await (0, import_promises.rm)(O, { force: true }).catch(() => {
    }), !t.guard.refused() && await (0, import_chunk_bzyb60p0.JJ)(L, (0, import_chunk_2gtmjt3y.Ze)(), { event: "skills_sync_root_refused", phase: "sweep", rootLabel: import_chunk_mgntjepj.Ij }, { checkStagingLeaf: true, storageV5: d }).catch(() => null) === "real") await (0, import_promises.rm)(R, { recursive: true, force: true }).catch(() => {
    });
  }
}
var Fi = 500;
async function Pi(e, t) {
  try {
    return await bn(e, t, void 0);
  } catch {
    return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_extract_retry"), await (0, import_chunk_5appeerh.K)(Fi), bn(e, t, void 0);
  }
}
async function Ni(e, t) {
  let { fromHostMount: r } = t;
  if (r !== void 0) {
    let d = await bn(e, t, r.zip).catch(() => null);
    if (d?.ok) t.markLandedFromHostMount();
    if (d !== null && (d.ok || d.cause !== "extract")) return d;
    (0, import_chunk_a9nnd83v.zRi)(r.kind, { reason: d === null ? "landing_threw" : "zip_unusable" }, t.hostMountMissCounts);
  }
  return Pi(e, t);
}
async function In(e, t, r, d) {
  let c = (0, import_chunk_wj4me9k5.Dd)();
  if (c.syncPromise) return c.syncPromise;
  return c.syncPromise = xi(e, t, r, d).finally(() => {
    c.syncPromise = null;
  }), c.syncPromise;
}
async function Oi(e, t) {
  let r = (0, import_path.join)(e, import_chunk_mgntjepj.BV), d, c, h;
  try {
    c = (await (0, import_chunk_73gwqz1r.wk)(r, import_chunk_bzyb60p0.N0t)).content, h = (0, import_chunk_w578pjby.te)(c);
  } catch {
    return null;
  }
  let M = hi().safeParse(h);
  if (M.success) {
    let { lastUpdated: R, skills: O, staleDirs: W, pendingClaims: ee, ...j } = M.data;
    d = { ...j, lastUpdated: R, skills: (0, import_chunk_bzyb60p0.Wue)(Mi(), O), staleDirs: (0, import_chunk_bzyb60p0.F0t)(W), pendingClaims: (0, import_chunk_bzyb60p0.F0t)(ee) };
  } else return null;
  let g = [...d.skills.map((R) => ({ row: R, syntheticListName: null })), ...["staleDirs", "pendingClaims"].flatMap((R) => (d[R] ?? []).map((O) => ({ row: { name: R === "pendingClaims" ? (0, import_chunk_mgntjepj.bfn)(O).name : O }, syntheticListName: R, entry: O })))], v = 0, S = [], L = [], y = [];
  for (let R of g) {
    let O = R.row;
    if (R.syntheticListName === "pendingClaims" && await En(R.entry)) {
      y.push(R.entry);
      continue;
    }
    try {
      let W = (0, import_chunk_mgntjepj.wfn)(O.name, e);
      if (await (0, import_chunk_bzyb60p0.J0t)(W, fe())) {
        (0, import_chunk_42tcgre6.q)("info", "skills_sync_sibling_root_row_skipped");
        continue;
      }
      if (await (0, import_chunk_bzyb60p0.J0t)(W, Je())) {
        (0, import_chunk_42tcgre6.q)("info", "skills_sync_trash_root_row_skipped");
        continue;
      }
      if (await Dn(W, t)) v++;
      else if (R.syntheticListName === "staleDirs") L.push(R.entry);
      else if (R.syntheticListName === "pendingClaims") y.push(R.entry);
      else S.push(R.row);
    } catch (W) {
      if (W instanceof import_chunk_mgntjepj.rzt) {
        if (R.syntheticListName === "staleDirs") L.push(R.entry);
        else if (R.syntheticListName === "pendingClaims") y.push(R.entry);
        else S.push(R.row);
        continue;
      }
    }
  }
  if (S.length > 0 || L.length > 0 || y.length > 0) {
    let R = (0, import_chunk_w578pjby._)({ ...d, skills: S, staleDirs: L.length > 0 ? L : void 0, pendingClaims: y.length > 0 ? y : void 0 }, null, 2);
    if (R !== c) await (0, import_chunk_q7qjcthc.yr)(r, R).catch(() => {
    });
  } else await (0, import_promises.rm)(r, { force: true }).catch(() => {
  });
  return v;
}
async function xi(e, t, r, d) {
  let c = Date.now(), h = performance.now(), M = false, g = false, v = false, S = false, L = 0, y = 0, R = 0, O = () => {
    let F = Date.now() - c;
    return { account_opt_in: v, idle: S, woken: "woken" in d, trigger: (0, import_chunk_78g0060s.f)(d.trigger), ..."tickLateMs" in d && { tick_late_ms: d.tickLateMs }, ...L > 0 && { kept: L }, ...R > 0 && { held_back: R }, ...y > 0 && { approx_downloaded_bytes: Number(y.toPrecision(2)) }, duration_ms: F, suspended_ms: Math.max(0, Math.round(F - (performance.now() - h))) };
  }, W = /* @__PURE__ */ new Map(), ee = false, j = null, T = (0, import_chunk_wj4me9k5.Dd)();
  T.lastRoundNoChanges = void 0;
  let Z = false, pe = null, be = /* @__PURE__ */ new Set(), I = false;
  try {
    if (v = (0, import_chunk_f9x2f6cx.zNr)(), (0, import_chunk_tfs0ssqe.JLn)()) v = true;
    if (!(0, import_chunk_bzyb60p0.KMe)(e) || !(0, import_chunk_tfs0ssqe.Ist)()) {
      (0, import_chunk_42tcgre6.q)("info", "skills_sync_gate_closed");
      let { placeholders: o, listedOwnerships: k, failedLandings: P } = (0, import_chunk_wj4me9k5.Dd)();
      if (k.clear(), P.clear(), o.size > 0) o.clear(), T_e();
      (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "gate_closed", O());
      return;
    }
    if ((0, import_chunk_tfs0ssqe.Tsl)()) {
      (0, import_chunk_42tcgre6.q)("info", "skills_sync_policy_verdict_pending"), (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "policy_verdict_pending", O());
      return;
    }
    let F = await (0, import_chunk_wj4me9k5.LU)(r);
    if (F === null) {
      (0, import_chunk_42tcgre6.q)("info", "skills_sync_bucket_unresolved"), (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "bucket_unresolved", O());
      return;
    }
    let X = Ai(t, It(F));
    j = X;
    let N = X.root;
    S = d.trigger === "resync" && !("woken" in d) && T.consecutiveFailedRounds === 0 && !(0, import_chunk_bzyb60p0.JJr)(e) && ot();
    let Fe = (0, import_chunk_bzyb60p0.rGa)(e);
    if (Fe !== void 0) await Fe;
    let me = (0, import_chunk_bzyb60p0.tGa)(e);
    (0, import_chunk_865at33z.W4i)(me, t);
    let De = await kt({ syncedRoot: fe(), bucket: F, root: N, trigger: d.trigger, pinned: (0, import_chunk_t9fn978c.h0)(e), lastGeneration: T.bucketGeneration, holdsPlaceholders: T.placeholders.size > 0, idle: S, convertedSkillsAsPlugins: me });
    if (!De.list) {
      T.bucketGeneration = De.generation;
      let o = await kn(async () => (await _e(t, X))?.skills ?? []);
      if (De.reload) {
        let k = await _e(t, X);
        if (k) {
          let P = /* @__PURE__ */ new Set();
          for (let z of k.skills) try {
            P.add((0, import_path.basename)(ne(N, z.name)));
          } catch {
          }
          (0, import_chunk_bzyb60p0.T_i)(P);
        }
        pe = /* @__PURE__ */ new Set(), T_e();
      } else if (o) T_e();
      (0, import_chunk_cqa9hrgx.u)("skills_sync_round", { ...O(), reused: true, reloaded: De.reload || o });
      return;
    }
    I = true, (0, import_chunk_42tcgre6.q)("info", "skills_sync_starting");
    let V, Pe = [], xt = performance.now();
    if ((0, import_chunk_t9fn978c.h0)(e)) {
      let [o, k] = await Promise.all([import_chunk_r9ecxfn9.iwt.of(e).listEntries("skills", { startup: d.trigger === "startup" }), import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_SKILLS ? (0, import_chunk_6xkqp5pj.Crr)({ isBackground: true, credentials: r, ...me && { convertedSkillsAsPlugins: true } }) : null]);
      if (!o.success) V = o;
      else if (Pe = o.entries.map(bi), k === null) V = { success: true, skills: Pe };
      else if (!k.success) V = k;
      else V = { success: true, skills: (0, import_chunk_bzyb60p0.V7o)(Pe, k.skills, (P) => P.skillId, (P, z) => ({ ...Pt(P, z), userInvocable: z.userInvocable, disableModelInvocation: z.disableModelInvocation })) };
    } else V = await (0, import_chunk_6xkqp5pj.Crr)({ isBackground: true, credentials: r, ...T.relay && { relay: T.relay }, ...me && { convertedSkillsAsPlugins: true } });
    let Cn = Math.round(performance.now() - xt);
    if (Z = !V.success && (0, import_chunk_r9ecxfn9.$Se)(V), Z) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_list_refused"), T.listedOwnerships.clear(), V = { success: true, skills: Pe };
    if (!V.success) {
      T.consecutiveFailedRounds++;
      let o = (0, import_chunk_r9ecxfn9.swt)(V), k = { ...O(), ...o };
      if ((0, import_chunk_42tcgre6.q)("warn", "skills_sync_list_failed", k), (0, import_chunk_y53wbr8a.a)("tengu_skills_sync_list_failed", k), (V.kind === "timeout" || V.kind === "network" || V.kind === "http") && k.suspended_ms > We) (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "suspended", k);
      else (0, import_chunk_cqa9hrgx.m)("skills_sync_round", "list_failed", k);
      return;
    }
    T.consecutiveFailedRounds = Z ? T.consecutiveFailedRounds + 1 : 0;
    let Ne = await (0, import_chunk_bzyb60p0.c_t)(fe(), F);
    if (Ne === "unmarked" && await (0, import_promises.lstat)(N).then((o) => o.isDirectory(), () => false) && await (0, import_chunk_bzyb60p0.HUe)({ dir: N, trashRoot: Je(), configHome: (0, import_chunk_2gtmjt3y.Ze)(), failureEvent: "skills_sync_trash_move_failed", storageV5: t }).catch(() => false)) (0, import_chunk_42tcgre6.q)("info", "skills_sync_unmarked_bucket_quarantined");
    if (await Ot(t, N), typeof Ne === "object") throw (0, import_chunk_42tcgre6.q)("warn", "skills_sync_root_refused", { phase: "round_head", root: (0, import_chunk_bzyb60p0.Snt)((0, import_path.join)(import_chunk_mgntjepj.Ij, F)), component: "marker", reason: "unverified", code: Ne.unreadable }), new import_chunk_bzyb60p0.jue("unverified", { code: Ne.unreadable });
    await (0, import_chunk_bzyb60p0.IYo)(fe(), F), ee = true;
    let Le = await (0, import_chunk_bzyb60p0.XJr)(N);
    if (!Z && await kn(async () => (await _e(t, X))?.skills ?? []) || De.shared && Le !== null && T.bucketGeneration !== null && Le.token !== T.bucketGeneration) T_e();
    await wi(t);
    let ae = await _e(t, X), { kept: An, undecided: Fn } = me && !Z ? await et(ae?.skills ?? [], V.skills, F) : { kept: [], undecided: false };
    L = An.length;
    let Pn = Le !== null && me ? mt(Le) : Le, { toDownload: Oe, toRemove: Ee, carryover: he, liveDirs: en, carryoverOwningLiveDir: Nn } = Li(N, [...V.skills, ...An], ae?.skills ?? []), Bt = (0, import_chunk_bzyb60p0.Nir)(en), Ut = new Map([...Oe.map(({ item: o }) => o), ...he.filter((o) => Nn.has(o.skillId))].map((o) => [(0, import_chunk_mgntjepj.Lp)(ne(N, o.name)), o])), On = /* @__PURE__ */ new Set(), nn = /* @__PURE__ */ new Set(), tn = /* @__PURE__ */ new Map(), xe = async (o) => {
      let k;
      try {
        k = (0, import_chunk_mgntjepj.wfn)(o, N);
      } catch (A) {
        if (A instanceof import_chunk_mgntjepj.rzt) return false;
        return true;
      }
      let P = await Bt(k);
      if (P === "live") {
        let A = Ut.get((0, import_chunk_mgntjepj.Lp)(k));
        if (A !== void 0) {
          if (On.has(A.skillId)) return true;
          let oe = (await _e(t, X))?.skills.find(({ skillId: ce }) => ce === A.skillId);
          if (oe !== void 0 && oe.updatedAt !== import_chunk_58apc8rx.USe && await qe(N, oe.name, A.name)) return true;
        }
        return nn.add(o), false;
      }
      if (P === "indeterminate") return false;
      be.add(k);
      let z = tn.get(k);
      if (z !== void 0) return z;
      let H = Dn(k, t).finally(() => tn.delete(k));
      return tn.set(k, H), H;
    }, sn = new Set(Array.from(en, (o) => (0, import_path.basename)(o))), zt = (0, import_chunk_bzyb60p0.T_i)(sn);
    if ((0, import_chunk_bzyb60p0.eGa)(sn) + zt > 0) (0, import_chunk_bzyb60p0.JD)(), vn(), import_chunk_bzyb60p0.rQ.emit();
    pe = en;
    let Ht = await Promise.all(he.map((o) => Nn.has(o.skillId) ? wn(N, o.name, t) : null)), on = /* @__PURE__ */ new Set();
    for (let [o, k] of he.entries()) {
      let P = Ht[o];
      if (P === null) continue;
      if (!P) {
        let H = V.skills.find((A) => A.skillId === k.skillId);
        if (H) on.add(k.skillId), Oe.push({ item: H });
        continue;
      }
      let z = (0, import_path.basename)(ne(N, k.name));
      if (T.placeholders.delete(z)) T.pendingDownloads.get(z)?.resolve({ ok: true }), T.pendingDownloads.delete(z), (0, import_chunk_bzyb60p0.b5)(), (0, import_chunk_bzyb60p0.JD)(), g = true, (0, import_chunk_42tcgre6.q)("info", "skills_sync_materialized_elsewhere");
    }
    let Kt = he.filter((o) => !on.has(o.skillId)), Be = new Map(he.filter((o) => on.has(o.skillId)).map((o) => [o.skillId, o])), se = new Set(ae?.staleDirs ?? []), ke = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Set(), rn = { pid: process.pid, procStart: await (0, import_chunk_rb36kwbn.Ef)(process.pid) }, an = [];
    if (ae?.pendingClaims) {
      let o = ae.pendingClaims, k = /* @__PURE__ */ new Set();
      for (let P of o) if (await En(P)) k.add((0, import_chunk_mgntjepj.bfn)(P).name);
      else an.push(P);
      for (let P of an) {
        let { name: z } = (0, import_chunk_mgntjepj.bfn)(P);
        if (k.has(z) || sn.has(z)) continue;
        se.add(z), le.add(P);
      }
    }
    for (let o of se) if (await xe(o)) se.delete(o), ke.add(o);
    if (ke.size > 0 || le.size > 0) g = true;
    let Ue = (0, import_chunk_bzyb60p0.TYo)(ae?.skills ?? [], [...he, ...Oe.flatMap(({ prev: o }) => o ?? [])], (o) => o.skillId, (o, k) => o.backingPluginId === k.backingPluginId && o.updatedAt === import_chunk_58apc8rx.USe === (k.updatedAt === import_chunk_58apc8rx.USe)), { due: ge, heldBack: ye } = await yt(T.failedLandings, Oe, async ({ prev: o }) => o !== void 0 && await wn(N, o.name, t));
    if (R = ye.length, ge.length === 0 && Ee.length === 0) {
      if (g) T_e();
      if ((ke.size > 0 || le.size > 0 || Ue.attributionMoved) && ae) await Sn({ lastUpdated: ae.lastUpdated, skills: Ue.rows, staleDirs: se.size > 0 ? Array.from(se) : void 0, pendingClaims: void 0 }, { staleDirs: ke, pendingClaims: le, removedSkillIds: ht, deferredRows: Mt }, t, X);
      if (ae) {
        let P = /* @__PURE__ */ new Date();
        await (0, import_promises.lutimes)(Ve(N), P, P).catch(() => {
        });
      }
      let o = g ? null : Pn;
      wt(await (0, import_chunk_bzyb60p0.$ir)(N, "skills", se.size === 0 && ye.length === 0 && !Fn && !Z && !(0, import_chunk_t9fn978c.h0)(e), o, Re(me)), o), T.lastRoundNoChanges = true, (0, import_chunk_42tcgre6.q)("info", "skills_sync_no_changes", { duration_ms: Date.now() - c, list_ms: Cn, held_back: ye.length, ...d.trigger === "startup" && { first_message_gate_open_ms: Math.round(performance.now() - h) } });
      let k = { ...O(), no_changes: true };
      if (Z) (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "not_entitled", k);
      else if (ye.length > 0) (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "landing_held_back", k);
      else (0, import_chunk_cqa9hrgx.u)("skills_sync_round", k);
      return;
    }
    T.lastRoundNoChanges = false;
    let xn = 0;
    for (let { item: o, prev: k } of ge) if (!k) {
      let P = ne(N, o.name), z = (0, import_chunk_bzyb60p0.tir)(P), H = T.idsAwaitingARow.get(z);
      if (H?.skillId === o.skillId && (0, import_chunk_ht27b0vz.RU)() && await wn(N, o.name, t)) {
        let G = (0, import_chunk_tvq790h1.iin)(o.skillId, o.backingPluginId);
        if (G !== void 0 && G.pluginId !== H.pluginId) T.idsAwaitingARow.set(z, G), (0, import_chunk_bzyb60p0.JD)(), T_e();
        continue;
      }
      let A = Ei((0, import_path.basename)(P), o, P);
      if (A === void 0) continue;
      (0, import_chunk_bzyb60p0.Q2a)(A), xn++, W.set(o.skillId, (0, import_chunk_bzyb60p0.Y2a)((0, import_path.basename)(ne(N, o.name))));
    }
    if (xn > 0) (0, import_chunk_bzyb60p0.JD)(), vn(), import_chunk_bzyb60p0.rQ.emit();
    let Bn = true;
    try {
      let o = [];
      for (let { item: k } of ge) try {
        o.push((0, import_chunk_mgntjepj.mCs)((0, import_path.basename)(ne(N, k.name)), rn));
      } catch {
      }
      if (o.length > 0) await Sn({ lastUpdated: ae?.lastUpdated ?? 0, skills: Ue.rows, staleDirs: se.size > 0 ? Array.from(se) : void 0, pendingClaims: o }, { staleDirs: ke, pendingClaims: le, removedSkillIds: ht, deferredRows: Mt }, t, X);
    } catch (o) {
      if (o instanceof import_chunk_bzyb60p0.jue) throw o;
      Bn = false, (0, import_chunk_42tcgre6.q)("warn", "skills_sync_pending_claims_write_failed");
    }
    Rn().resolve();
    let Wt = Math.round(performance.now() - h);
    if (!Bn) {
      if ((0, import_chunk_cqa9hrgx.m)("skills_sync_round", "pending_claims_write_failed", O()), g) T_e();
      return;
    }
    let de = [], Un = ye.flatMap(({ item: o, prev: k }) => k ?? Be.get(o.skillId) ?? []), ln = [], ze = 0, zn = 0, Me = {}, Kn = ({ item: o, prev: k }) => k === void 0 && !Be.has(o.skillId) ? (0, import_chunk_a9nnd83v.Yil)(o) : void 0, Wn = ge.flatMap((o) => Kn(o) ?? []), Gn = new Set(Wn), dn = /* @__PURE__ */ new Map(), Yn = (o) => ((0, import_chunk_42tcgre6.q)("warn", "skills_sync_host_mount_threw"), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), null), jn = Gn.size > 0 ? (0, import_chunk_a9nnd83v.Xil)(Gn, dn).catch(Yn) : null, He = /* @__PURE__ */ new Set(), Xn = /* @__PURE__ */ new Map();
    await Promise.all(ge.map((0, import_chunk_w71cxznt.Rl)(yn, async ({ item: o }) => {
      Xn.set(o, await Ri(N, o.name, t));
    }))), await Promise.all(ge.map((0, import_chunk_w71cxznt.OEl)(yn, async (o) => {
      let k = Kn(o);
      if (k === void 0) return;
      let z = await (await jn)?.readZip(k, o.item).catch(Yn);
      return z ? { kind: k, zip: z } : void 0;
    }, async ({ item: o, prev: k }, P) => {
      let z = Xn.get(o) ?? null, H = Nt;
      try {
        H = await Ni(o, { round: X, credentials: r, storageV5: t, classifyOccupant: (A) => Bi(A, t, X, o.skillId), markTargetDestroyed: () => {
          M = true;
        }, replacesAttributedCopy: k !== void 0 && k.updatedAt !== import_chunk_58apc8rx.USe && await qe(N, k.name, o.name) || Be.has(o.skillId), targetHeldSkillFile: je() && z !== null, fromHostMount: P, markLandedFromHostMount: () => {
          He.add(o.skillId);
        }, hostMountMissCounts: dn, noteDownloadedBytes: (A) => {
          y += A;
        } });
      } catch {
        H = Ti, (0, import_chunk_42tcgre6.q)("warn", "skills_sync_extract_failed");
      }
      if (H.ok) {
        let A = (0, import_chunk_bzyb60p0.tir)(ne(N, o.name)), G = (0, import_chunk_ht27b0vz.RU)() ? (0, import_chunk_tvq790h1.iin)(o.skillId, o.backingPluginId) : void 0;
        if (G === void 0) T.idsAwaitingARow.delete(A);
        else T.idsAwaitingARow.set(A, G);
        if (de.push(o), On.add(o.skillId), T.failedLandings.delete(o.skillId), k && k.name !== o.name) {
          if (!await xe(k.name)) se.add(k.name);
        }
        (0, import_chunk_bzyb60p0.Z2a)((0, import_path.basename)(ne(N, o.name))), (0, import_chunk_bzyb60p0.b5)(), (0, import_chunk_bzyb60p0.JD)(), (0, import_chunk_cqa9hrgx.u)("skills_sync_download", { landed_from_mount: He.has(o.skillId) });
      } else {
        let A = (0, import_chunk_bzyb60p0.nja)(H.cause);
        if (A === null) ze++, (0, import_chunk_42tcgre6.q)("info", "skills_sync_landing_deferred");
        else {
          Me[A] = (Me[A] ?? 0) + 1;
          let oe = (0, import_chunk_jv7av99m.Cy)(H.code);
          (0, import_chunk_cqa9hrgx.m)("skills_sync_download", A, { ...H.step !== void 0 && { step: (0, import_chunk_78g0060s.f)(H.step) }, ...oe !== void 0 && { errno: oe }, ...H.occupant !== void 0 && { occupant: (0, import_chunk_78g0060s.f)(H.occupant) } });
        }
        if (H.cause === "extract" || H.cause === "local") gt(T.failedLandings, o);
        let G = k ?? Be.get(o.skillId);
        if (G && H.cause === "deferred") {
          if (ln.push(G), k && k.name !== o.name) se.add(k.name), zn++;
        } else if (G) Un.push(G);
        else try {
          let oe = ne(N, o.name);
          if (await (0, import_promises.lstat)(oe).then(() => false, (Yt) => (0, import_chunk_jv7av99m.J)(Yt))) le.add((0, import_chunk_mgntjepj.mCs)((0, import_path.basename)(oe), rn));
        } catch {
        }
      }
      W.get(o.skillId)?.(H.ok ? { ok: true } : { ok: false, reason: (0, import_chunk_bzyb60p0.rja)(H.cause) });
    })));
    for (let o of nn) if (se.has(o) && await xe(o)) se.delete(o), ke.add(o);
    let Se = [];
    await Promise.all(Ee.map((0, import_chunk_w71cxznt.Rl)(yn, async (o) => {
      if (!await xe(o.name)) Se.push(o);
    })));
    let cn = new Set(Ee.map((o) => o.skillId));
    for (let o of Se) cn.delete(o.skillId);
    let $n = M || Se.length < Ee.length || ke.size > 0 || le.size > 0, qn = de.length > 0 || $n, Gt = qn || zn > 0 || Ue.attributionMoved;
    if (cn.size > 0) (0, import_chunk_bzyb60p0.JD)();
    if ($n || g) T_e();
    let Ke = false;
    if (Gt) {
      let o = [...Kt, ...de, ...Un, ...Se], k = /* @__PURE__ */ new Set();
      for (let A of [...o, ...ln]) try {
        k.add((0, import_path.basename)(ne(N, A.name)));
      } catch {
      }
      for (let A of k) le.add((0, import_chunk_mgntjepj.mCs)(A, rn));
      for (let A of an) if (k.has((0, import_chunk_mgntjepj.bfn)(A).name)) le.add(A);
      let P = (A, G) => Sn({ lastUpdated: Date.now(), skills: A, staleDirs: se.size > 0 ? Array.from(se) : void 0 }, { staleDirs: ke, pendingClaims: le, removedSkillIds: cn, deferredRows: ln, onlyOverReadable: G }, t, X);
      try {
        await P(o, false);
      } finally {
        if (de.length > 0) (0, import_chunk_bzyb60p0.JD)(), T_e();
      }
      let z = de.length > 0 && je() ? 2 : 0, H = null;
      for (let A = 0; A < z; A++) {
        await (0, import_chunk_5appeerh.K)(T.lostRowsRecheckMs * (1 + Math.random()));
        let G = await _e(t, X);
        H = G;
        let oe = new Set(G?.skills.map((ce) => ce.skillId));
        if (Ke = !de.every((ce) => oe.has(ce.skillId)), !Ke) break;
        if (G === null) continue;
        (0, import_chunk_42tcgre6.q)("info", "skills_sync_manifest_rows_lost");
        try {
          await P(de, true);
        } catch (ce) {
          if (ce instanceof import_chunk_bzyb60p0.jue) throw ce;
          (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(ce));
          break;
        }
      }
      if (Ke) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_manifest_rows_unconfirmed");
      else for (let A of de) {
        let G = H?.skills.find(({ skillId: oe }) => oe === A.skillId);
        if (G === void 0 || await qe(N, G.name, A.name)) T.idsAwaitingARow.delete((0, import_chunk_bzyb60p0.tir)(ne(N, A.name)));
      }
    }
    let un = ge.length - de.length - ze, Zn = await jn, fn = { downloaded: de.length - He.size, from_mount: He.size, mount_eligible: Wn.length, mount_read_ms: Zn?.spentMs() ?? 0, mount_wait_ms: Zn?.waitedMs() ?? 0, ...(0, import_chunk_a9nnd83v.yfo)(dn) }, mn = Ee.length - Se.length;
    (0, import_chunk_42tcgre6.q)("info", "skills_sync_complete", { ...fn, removed: mn, duration_ms: Date.now() - c, list_ms: Cn, ...d.trigger === "startup" && { first_message_gate_open_ms: Wt } });
    let Qn = O();
    (0, import_chunk_y53wbr8a.a)("tengu_skills_sync_success", { ...Qn, ...fn, removed: mn, total: V.skills.length });
    let Jn = qn || g ? null : Pn;
    wt(await (0, import_chunk_bzyb60p0.$ir)(N, "skills", !Z && un === 0 && ye.length === 0 && ze === 0 && !Ke && Se.length === 0 && !Fn && se.size === 0 && !(0, import_chunk_t9fn978c.h0)(e), Jn, Re(me)), Jn);
    let Vn = (0, import_chunk_4smdap7r.U)(Se, (o) => !nn.has(o.name)), Ce = { ...Qn, ...fn, deferred: ze, removed: mn, total: V.skills.length };
    if (un > 0) (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "download_failed", { ...Ce, failed: un, download_failed: Me.download_failed ?? 0, extract_failed: Me.extract_failed ?? 0, root_refused: Me.root_refused ?? 0, local_failed: Me.local_failed ?? 0 });
    else if (Z) (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "not_entitled", Ce);
    else if (ye.length > 0) (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "landing_held_back", Ce);
    else if (Vn > 0) (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "remove_failed", { ...Ce, count: Vn });
    else (0, import_chunk_cqa9hrgx.u)("skills_sync_round", Ce);
  } catch (F) {
    if (g || M) T_e();
    if (F instanceof import_chunk_bzyb60p0.jue && ee) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_late_root_refusal", { reason: F.reason, duration_ms: Date.now() - c }), (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "root_refused", O()), ee = false;
    else if (F instanceof import_chunk_bzyb60p0.jue) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_root_refused_round", { reason: F.reason, duration_ms: Date.now() - c }), (0, import_chunk_cqa9hrgx.l)("skills_sync_round", "root_refused", O());
    else {
      if (!Z) T.consecutiveFailedRounds++;
      (0, import_chunk_42tcgre6.q)("error", "skills_sync_unexpected_error", { duration_ms: Date.now() - c });
      let X = O();
      (0, import_chunk_y53wbr8a.a)("tengu_skills_sync_error", X), (0, import_chunk_cqa9hrgx.m)("skills_sync_round", "unexpected_error", X);
    }
  } finally {
    if (I) ut();
    for (let F of W.values()) F({ ok: false, reason: "skills sync failed" });
    if (Rn().resolve(), pe !== null && j !== null) await (0, import_chunk_tfs0ssqe.vsl)({ bucketRoot: j.root, listedDirs: pe, removalTriedDirs: be, isSkillFileGone: (F) => vi(F, t) }).catch(() => {
      (0, import_chunk_42tcgre6.q)("warn", "skills_sync_hooks_removal_failed");
    });
    if (j === null || j.guard.refused()) ee = false;
    if (ee && j !== null) {
      if (await (0, import_chunk_bzyb60p0.JJ)(j.root, (0, import_chunk_2gtmjt3y.Ze)(), { event: "skills_sync_root_refused", phase: "sweep", rootLabel: import_chunk_mgntjepj.Ij }, { checkStagingLeaf: true, storageV5: t }).catch(() => null) === "real") await (0, import_promises.rm)(Te(j.root), { recursive: true, force: true }).catch(() => {
      });
    }
  }
}
async function En(e) {
  let { ownerPid: t, ownerProcStart: r } = (0, import_chunk_mgntjepj.bfn)(e);
  return t !== void 0 && t !== process.pid && (0, import_chunk_v6cdm8tp.Rd)(t) && await (0, import_chunk_rb36kwbn.GC)(t, r);
}
async function Bi(e, t, r, d) {
  let c = await _e(t, r);
  if (!c) return "unattributed";
  let h = false;
  for (let M of c.skills) if (await qe(r.root, M.name, e)) {
    if (d === void 0 || M.skillId === d && M.updatedAt !== import_chunk_58apc8rx.USe) return "landed";
    h = true;
  }
  if (h) return "anotherSkills";
  for (let M of c.pendingClaims ?? []) if ((0, import_chunk_mgntjepj.bfn)(M).name === e && await En(M)) {
    if (!je()) return "inFlight";
    let g = await (0, import_promises.lstat)((0, import_path.join)(r.root, e)).then((v) => Math.floor(v.ctimeMs), (v) => {
      if ((0, import_chunk_jv7av99m.J)(v)) return -1 / 0;
      return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_occupant_unreadable", { code: (0, import_chunk_jv7av99m.w)(v) ?? "unknown" }), 1 / 0;
    });
    if (!(Date.now() - g >= yi)) return "inFlight";
    return (0, import_chunk_42tcgre6.q)("info", "skills_sync_live_claim_timed_out"), "claimLapsed";
  }
  return "unattributed";
}
async function qe(e, t, r) {
  try {
    let d = ne(e, t), c = ne(e, r);
    return (0, import_path.basename)(d) === (0, import_path.basename)(c) || await (0, import_chunk_bzyb60p0.J0t)(d, c);
  } catch {
    return false;
  }
}
function Ot(e, t) {
  return (0, import_chunk_bzyb60p0.RYo)({ root: t, trashRoot: Je(), configHome: (0, import_chunk_2gtmjt3y.Ze)(), events: { refused: "skills_sync_root_refused" }, storageV5: e });
}
