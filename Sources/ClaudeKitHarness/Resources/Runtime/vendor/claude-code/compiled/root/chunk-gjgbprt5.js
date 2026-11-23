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
var chunk_gjgbprt5_exports = {};
__export(chunk_gjgbprt5_exports, {
  AIa: () => AIa,
  CIa: () => CIa,
  Cer: () => Cer,
  D$e: () => D$e,
  L$e: () => L$e,
  TIa: () => TIa,
  Ter: () => Ter,
  WYs: () => WYs,
  g7t: () => g7t,
  jYs: () => jYs,
  sie: () => sie,
  vIa: () => vIa,
  ver: () => ver,
  yqr: () => yqr
});
module.exports = __toCommonJS(chunk_gjgbprt5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_6gx82r3c = require("/$bunfs/root/chunk-6gx82r3c.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_mmvajxhx = require("/$bunfs/root/chunk-mmvajxhx.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
function ver() {
  let e = (0, import_chunk_f9x2f6cx.ju)();
  if (e === void 0 || (0, import_chunk_zhr7rpv7.ve)() === "mantle") return;
  if (e === null) {
    let o = (0, import_chunk_865at33z.qd)();
    return (0, import_chunk_865at33z.nke)() !== void 0 && (0, import_chunk_dw5px5e0.kte)(o) ? o : "default";
  }
  if (!e) return;
  if ((0, import_chunk_865at33z.GU)((0, import_chunk_865at33z.jt)(e))) return;
  if ((0, import_chunk_f9x2f6cx.hte)()?.fallbackModel === e) return;
  if (!(0, import_chunk_dw5px5e0.kte)(e)) return;
  return e;
}
function A(e) {
  let o = e.trim().toLowerCase();
  return o === "default" || (0, import_chunk_zmb62hr5.H6e)(o);
}
function vIa() {
  return (0, import_chunk_f9x2f6cx.b2)().includes("--restricted");
}
function D$e(e, o, { carryModel: n = true } = {}) {
  let r = a(e.additionalWorkingDirectories, ["cliArg"]), t = [], l = (0, import_chunk_f9x2f6cx.b2)();
  for (let i = 0; i < l.length; i++) {
    let s = l[i];
    if (s === "--add-dir") i++;
    else if (!n && s === "--fallback-model") {
      let y = (l[i + 1] ?? "").split(",").map((f) => f.trim()).filter((f) => A(f));
      if (i++, y.length > 0) t.push("--fallback-model", y.join(","));
    } else if (s !== void 0) t.push(s);
  }
  let u = (0, import_chunk_k67pwqya.fLe)(o), g = M(), d = ver(), p = d !== void 0 && (n || A(d)) ? d : void 0, R = e.isBypassPermissionsModeAvailable && !t.includes("--allow-dangerously-skip-permissions"), S = (0, import_chunk_f9x2f6cx.Oaa)(), m = (0, import_chunk_f9x2f6cx.O1e)(), c = false;
  return [...[], ...[], ...[], ...[], ...t, ...m === void 0 ? [] : [m ? "--chrome" : "--no-chrome"], ...R ? ["--allow-dangerously-skip-permissions"] : [], ...r.flatMap((i) => ["--add-dir", i]), ...p !== void 0 && !c ? ["--model", p] : [], ...u !== void 0 ? ["--effort", u] : [], ...g !== void 0 && !c ? ["--fast-mode", g] : [], ...c ? [] : ["--permission-mode", e.mode]];
}
function M() {
  let e = (0, import_chunk_dw5px5e0.Tb)("--fast-mode");
  if (e !== "on" && e !== "off") return;
  let o = (0, import_chunk_f9x2f6cx.Fd)()?.fastMode;
  return typeof o === "boolean" ? o ? "on" : "off" : e;
}
function WYs(e) {
  let o = (0, import_chunk_qebpc5de.$f)([e]);
  return o.length === 1 && o[0] === e && (0, import_chunk_dw5px5e0.kte)(e);
}
function TIa(e, o) {
  let n = o.find((r) => r.agentType === e);
  return n?.source === "built-in" && n.tools?.includes("*") === true;
}
function sie(e, o) {
  let n = new Set(e.alwaysDenyRules.cliArg);
  return [...o ? [`launch flags: ${import_chunk_6gx82r3c.Aer}`] : [], ...(e.alwaysDenyRules.session ?? []).length > 0 || (e.alwaysAskRules.session ?? []).length > 0 ? ["permission rules set for this session only"] : [], ...(e.alwaysAskRules.cliArg ?? []).length > 0 ? ["ask-before-running rules with no command-line form"] : [], ...(e.alwaysAllowRules.cliArg ?? []).some((r) => !WYs(r)) || (e.alwaysDenyRules.cliArg ?? []).some((r) => !(0, import_chunk_qebpc5de.aDo)(r, n) || !(0, import_chunk_dw5px5e0.kte)(r)) ? ["permission rules a command line cannot carry intact"] : [], ...a(e.additionalWorkingDirectories, ["cliArg"]).some((r) => !(0, import_chunk_dw5px5e0.kte)(r)) ? ["added directories a command line cannot carry intact"] : [], ...(0, import_chunk_zddv3vvj.Tbe)() ? ["where an added directory's skills and plugins are read from, as the app that launched this session chose it"] : []];
}
function L$e(e, o) {
  return [...(e.alwaysAllowRules.cliArg ?? []).flatMap((n) => ["--allowed-tools", n]), ...(e.alwaysDenyRules.cliArg ?? []).flatMap((n) => ["--disallowed-tools", n]), ...(0, import_chunk_dw5px5e0.Pv)("--agent", o.agent), ...(0, import_chunk_dw5px5e0.Pv)("--agents", o.agents), ...(0, import_chunk_dw5px5e0.Pv)("--append-system-prompt", o.appendSystemPrompt), ...(0, import_chunk_dw5px5e0.Pv)("--system-prompt-snapshot", Ter(o.systemPromptSnapshot))];
}
function Ter(e) {
  return e === void 0 ? void 0 : e ? "on" : "off";
}
function a(e, o) {
  return Array.from(e.values()).filter((n) => o.includes(n.source)).filter((n) => n.source !== "cliArg" || (0, import_chunk_trq47kfh.S2t)(n.path) || !(0, import_chunk_trq47kfh.m9)() && (!(0, import_chunk_3t7ve0wy.Nw)() || (0, import_chunk_trq47kfh.ZBn)())).filter((n) => !(0, import_chunk_z6pfqf6e.sa)(n.path)).map((n) => n.path);
}
function Cer(e) {
  return (0, import_chunk_mmvajxhx.GLe)({ ...(0, import_chunk_mmvajxhx.Oun)((0, import_chunk_f9x2f6cx.b2)()).config, addDir: h(e), settingSources: (0, import_chunk_xzvhvaa2.Yze)() });
}
function CIa(e, o) {
  return [...D(e), ...h(o).flatMap((n) => ["--add-dir", n])];
}
function D(e) {
  let o = [], n = false;
  for (let r of e) if (n) n = false;
  else if (r === "--add-dir") n = true;
  else o.push(r);
  return o;
}
function h(e) {
  return a(e, ["cliArg"]).filter(import_chunk_dw5px5e0.kte);
}
function yqr(e) {
  return a(e, ["session"]).filter(import_chunk_dw5px5e0.kte);
}
var jYs = "CLAUDE_RELAUNCH_SESSION_ADD_DIRS";
function g7t(e) {
  let o = yqr(e);
  return o.length > 0 ? { [jYs]: (0, import_chunk_w578pjby._)(o) } : {};
}
function AIa(e) {
  let o = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r === "--channels") {
      n++;
      continue;
    }
    if (r.startsWith("--channels=")) continue;
    o.push(r);
  }
  return o;
}
