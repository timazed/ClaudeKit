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
var chunk_96p3dgap_exports = {};
__export(chunk_96p3dgap_exports, {
  $Ur: () => $Ur,
  FUr: () => FUr,
  Gha: () => Gha,
  KBs: () => KBs,
  Kha: () => Kha,
  Vha: () => Vha,
  X1o: () => X1o,
  Y1o: () => Y1o,
  YBs: () => YBs,
  Yha: () => Yha,
  c8n: () => c8n,
  qBs: () => qBs,
  qha: () => qha,
  zha: () => zha
});
module.exports = __toCommonJS(chunk_96p3dgap_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_6c9p0fd9 = require("/$bunfs/root/chunk-6c9p0fd9.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_4wtfvxk7 = require("/$bunfs/root/chunk-4wtfvxk7.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_path2 = require("path");
(0, import_chunk_bs4h6795.G)();
function FUr() {
  let e = (0, import_chunk_74h6kcya.lo)(), n = (0, import_chunk_6c9p0fd9.Oh)();
  (0, import_chunk_bs4h6795.H)(() => {
    return;
  }, [e, n]);
}
var Gha = { CLAUDE_CODE_TUI_TRIAL: "fullscreen" };
function b(e, n) {
  (0, import_chunk_865at33z.Ke)((r) => (r.fullscreenUpsellSeenCount ?? 0) >= e ? r : { ...r, fullscreenUpsellSeenCount: e }, n);
}
function Y1o(e) {
  b(import_chunk_8c111j67.HDn, e);
}
function KBs(e) {
  let n = (0, import_chunk_8c111j67.Lnn)();
  if (n.upsellImpression !== void 0) return n.upsellImpression;
  let r = Math.min(((0, import_chunk_865at33z.ge)().fullscreenUpsellSeenCount ?? 0) + 1, import_chunk_8c111j67.HDn);
  return n.upsellImpression = r, b(r, e), r;
}
async function zha(e) {
  let n = (0, import_chunk_8c111j67.Lnn)();
  if (n.persisted || (0, import_chunk_8c111j67.MDn)() !== "fullscreen") return false;
  if ((0, import_chunk_2yx6c1y2.vt)().tui !== void 0) return (0, import_chunk_w578pjby.t)("fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting"), false;
  if (!(0, import_chunk_8c111j67.Mf)()) return (0, import_chunk_w578pjby.t)("fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting"), false;
  let r = false, { error: o } = await (0, import_chunk_2yx6c1y2.fl)("userSettings", (s) => (r = s?.tui !== void 0, r ? null : { tui: "fullscreen" }), void 0, e);
  if (o) return (0, import_chunk_k449cc64.i)(o), (0, import_chunk_cqa9hrgx.l)("tui_fullscreen_upsell_trial", "settings_write_failed"), false;
  if (r) return (0, import_chunk_w578pjby.t)("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting"), false;
  return Y1o(e), n.persisted = true, (0, import_chunk_cqa9hrgx.u)("tui_fullscreen_upsell_trial"), (0, import_chunk_y53wbr8a.a)("tengu_fullscreen_upsell_trial_persisted", { session_age_ms: Math.round(process.uptime() * 1e3) }), (0, import_chunk_w578pjby.t)("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"), true;
}
async function Vha(e) {
  let n = (0, import_chunk_wtm85h0y.lT)();
  if (!n?.teamName || !n?.agentName) {
    (0, import_chunk_w578pjby.t)("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return;
  }
  let { teamName: r, agentId: o, agentName: s } = n, p = await (0, import_chunk_jgsh7w3m.$k)(r, e);
  if (!p) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(Error(`[computeInitialTeamContext] Could not read team file for ${r}`), "[computeInitialTeamContext] Could not read team file"));
    return;
  }
  let m = (0, import_chunk_jgsh7w3m.awt)(r), c = !o;
  return (0, import_chunk_w578pjby.t)(`[Reconnection] Computed initial team context for ${c ? "leader" : `teammate ${s}`} in team ${r}`), { teamName: r, teamFilePath: m, leadAgentId: p.leadAgentId, selfAgentId: o, selfAgentName: s, isLeader: c, teammates: {} };
}
async function Kha(e, n, r, o) {
  let s = await (0, import_chunk_jgsh7w3m.$k)(n, o);
  if (!s) {
    (0, import_chunk_w578pjby.t)(`[initializeTeammateContextFromSession] Could not read team file for ${n} (agent: ${r}) \u2014 team may have been disbanded`, { level: "error" });
    return;
  }
  let p = s.members.find((h) => h.name === r);
  if (!p) (0, import_chunk_w578pjby.t)(`[Reconnection] Member ${r} not found in team ${n} - may have been removed`);
  let m = p?.agentId, c = (0, import_chunk_jgsh7w3m.awt)(n);
  e((h) => ({ ...h, teamContext: { teamName: n, teamFilePath: c, leadAgentId: s.leadAgentId, selfAgentId: m, selfAgentName: r, isLeader: false, teammates: {} } })), (0, import_chunk_w578pjby.t)(`[Reconnection] Initialized agent context from session for ${r} in team ${n}`);
}
var C = 6048e5, YBs = 1e3;
function qha(e) {
  let n = [`This session was opened by an external deep link in ${w(e.cwd)}`];
  if (e.repo) {
    let r = e.lastFetch ? (0, import_chunk_f64qna2j.Ty)(e.lastFetch) : "never", o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > C;
    n.push(`Resolved ${e.repo} from local clones \xB7 last fetched ${r}${o ? " \u2014 CLAUDE.md may be stale" : ""}`);
  }
  if (e.prefillLength) n.push(e.prefillLength > YBs ? `The prompt below (${(0, import_chunk_f64qna2j.Ec)(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.");
  return n.join(`
`);
}
async function Yha(e) {
  let n = await (0, import_chunk_w5s307zm.yce)(e);
  if (!n) return;
  let r = await (0, import_chunk_w5s307zm.c2)(n), [o, s] = await Promise.all([y((0, import_path.join)(n, "FETCH_HEAD")), r ? y((0, import_path.join)(r, "FETCH_HEAD")) : Promise.resolve(void 0)]);
  if (o && s) return o > s ? o : s;
  return o ?? s;
}
async function y(e) {
  try {
    let { mtime: n } = await (0, import_promises.stat)(e);
    return n;
  } catch {
    return;
  }
}
function w(e) {
  let n = (0, import_os.homedir)();
  if (e === n) return "~";
  if (e.startsWith(n + import_path.sep)) return "~" + e.slice(n.length);
  return e;
}
function c8n(e, { replacesProcess: n }) {
  return (0, import_chunk_865at33z.lee)() === void 0 && (0, import_chunk_zwfq7wpn._R)() && !(n && (0, import_chunk_f9x2f6cx.lNr)()) ? e.jobId : void 0;
}
async function X1o(e) {
  let n = await E(e);
  return (0, import_chunk_cqa9hrgx.l)("resume_live_background_open", n.reason, { entrypoint: (0, import_chunk_78g0060s.f)(e.entrypoint) }), n;
}
async function E({ holder: e, entrypoint: n, prompt: r, storageV5: o }) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return { reason: "not_openable" };
  let s = c8n(e, { replacesProcess: true });
  if (s === void 0) return { reason: "not_openable" };
  try {
    await (0, import_chunk_4wtfvxk7.qve)();
  } catch (m) {
    return { reason: "open_failed", detail: (0, import_chunk_jv7av99m.d)(m), promptSent: false };
  }
  let p = typeof r === "string" && r.trim() !== "";
  if (p) {
    let m = r.trimStart();
    if (m.startsWith("!") || m.startsWith("/")) return { reason: "prompt_undelivered", detail: `a prompt starting with ${m.startsWith("!") ? "!" : "/"} would run as a command there`, delivery: "failed" };
    let [{ replyToJob: c }, { getJobDir: h, readJobState: T }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-n5v0jgxm.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-98gv4nzd.js")))]);
    if ((await T(h(s), o))?.block !== void 0) return { reason: "prompt_undelivered", detail: "it is waiting on your answer to a question", delivery: "failed" };
    process.stdout.write(import_chunk_d57v19zt.Re.dim(`Sending your prompt to the background session (${s})\u2026
`));
    let g = await c(s, r, void 0, void 0, void 0, o, { nextTurn: true });
    if (g) {
      let S = g.code === "ENOCONN" || g.code === "ETIMEOUT";
      return { reason: "prompt_undelivered", detail: S ? "its background service didn't answer" : g.code === "ENOJOB" ? "it is no longer running" : g.err, delivery: g.queued === true ? "queued" : S ? "unconfirmed" : "failed" };
    }
  }
  try {
    return await qBs(s, n, o, { promptSent: p });
  } catch (m) {
    return { reason: "open_failed", detail: (0, import_chunk_jv7av99m.d)(m), promptSent: p };
  }
}
async function qBs(e, n, r, { promptSent: o = false } = {}) {
  return (0, import_chunk_cqa9hrgx.u)("resume_live_background_open", { entrypoint: (0, import_chunk_78g0060s.f)(n), prompt_sent: o }), (0, import_chunk_4wtfvxk7.EY)({ args: ["attach", e], preSpawn: () => process.stdout.write(import_chunk_d57v19zt.Re.dim(o ? `Sent your prompt to the background session (${e}); opening it\u2026
` : `Opening the background session (${e})\u2026
`)) }, r);
}
async function $Ur(e, n, r = import_chunk_w578pjby.Cv) {
  if (!((0, import_path2.isAbsolute)(e) || import_path2.win32.isAbsolute(e)) || (0, import_chunk_z6pfqf6e.$r)(e) || (0, import_chunk_z6pfqf6e.xv)(e) || (0, import_chunk_z6pfqf6e.xv)(import_path2.win32.normalize(e)) || (0, import_chunk_z6pfqf6e.KS)(e) || (0, import_chunk_z6pfqf6e.KS)((0, import_path2.resolve)(e)) || (0, import_chunk_z6pfqf6e.ad)(e)) return (0, import_chunk_w578pjby.t)(`[${n}] session reported a network-path cwd \u2014 not adopting`, { level: "warn" }), false;
  if (await (0, import_chunk_w578pjby.yQe)(e, (0, import_chunk_f9x2f6cx.mte)(), r)) return (0, import_chunk_w578pjby.t)(`[${n}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`, { level: "warn" }), false;
  return true;
}
