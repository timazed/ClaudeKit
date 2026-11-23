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
var chunk_cpdpk5r1_exports = {};
__export(chunk_cpdpk5r1_exports, {
  Bqe: () => Bqe,
  Tei: () => Tei,
  _rr: () => _rr,
  kXt: () => kXt
});
module.exports = __toCommonJS(chunk_cpdpk5r1_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_3jaw45cy = require("/$bunfs/root/chunk-3jaw45cy.js");
var _ = ["metrics", "logs", "traces"];
function O() {
  if (!(0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) || false || import_chunk_c203g5kd.s.ENABLE_BETA_TRACING_DETAILED || (0, import_chunk_f9x2f6cx.iA)((0, import_chunk_f9x2f6cx.Io)())) return [];
  let t = _.filter((o) => (o !== "traces" || (0, import_chunk_z2xw6net.pSr)()) && (import_chunk_c203g5kd.s[`OTEL_${import_chunk_xfr8663h.jre[o]}_EXPORTER`] ?? "").split(",").some((i) => i.trim() === "otlp")), r = import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_ENDPOINT ? [] : t.filter((o) => !h(o)), n = import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_PROTOCOL ? [] : r.filter((o) => !import_chunk_c203g5kd.s[`OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[o]}_PROTOCOL`]);
  if (n.length > 0) {
    let o = n[0] === "traces" ? "metrics and traces aren't sent" : "telemetry can't start";
    return [`OpenTelemetry: No endpoint or protocol is set for ${u(n)}, so ${o}. ${T(n)}`];
  }
  if (r.length > 0 && t.some(h)) return [`OpenTelemetry: No endpoint is set for ${u(r)}, so they go to localhost, where they're lost unless a collector is running. ${T(r)}`];
  return [];
}
function h(t) {
  return !!import_chunk_c203g5kd.s[`OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[t]}_ENDPOINT`];
}
function T(t) {
  return `Set OTEL_EXPORTER_OTLP_ENDPOINT or ${u(t.map((r) => `OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[r]}_ENDPOINT`))}, or take otlp out of ${u(t.map((r) => `OTEL_${import_chunk_xfr8663h.jre[r]}_EXPORTER`))}. Then restart Claude Code.`;
}
function u(t) {
  return new Intl.ListFormat("en").format(t);
}
function Bqe() {
  let t = (0, import_chunk_2yx6c1y2._p)(), r = import_chunk_bzyb60p0.vfe.flatMap((e) => (0, import_chunk_bzyb60p0.F_)(e).errors.map((E) => E.file ? E : { ...E, file: (0, import_chunk_bzyb60p0.j$)(e) })), n = (0, import_chunk_865at33z.ge)(), o = import_chunk_8m5q5cts.HYe.filter((e) => t.settings[e] === void 0 && n[e] !== import_chunk_865at33z.QU[e] && (0, import_chunk_865at33z.fMl)(e, n[e])).map((e) => ({ file: (0, import_chunk_c203g5kd.DB)(), path: e, message: (0, import_chunk_865at33z.WPr)(e) ? "Not a valid value for this setting, so it is ignored and the setting counts as off" : "Not a valid value for this setting, so it is ignored and the setting counts as unset", severity: "warning", suggestion: "Set it with /config, or delete the key from this file" })), i = (0, import_chunk_xzvhvaa2.Ko)(), g = i.flatMap((e) => {
    if (e === "flagSettings" || e === "projectSettings" && i.includes("userSettings") && (0, import_chunk_2yx6c1y2.vm)()) return [];
    let E = (0, import_chunk_2yx6c1y2._e)(e)?.permissions, f = S.filter((m) => E?.[m] !== void 0);
    if (f.length === 0) return [];
    let p = (0, import_chunk_2yx6c1y2._n)(e);
    return [{ file: p, path: "permissions", message: `Claude Code ignores ${f.map((m) => `permissions.${m}`).join(", ")} in ${e === "policySettings" ? "managed settings" : p ?? e}: only the program that starts Claude Code can set ${f.length > 1 ? "these" : "this"}, in --settings.${f.includes("blockFileToolReadsOutsideWorkingDirectories") ? " In a settings file or managed settings, use permissions.blockReadsOutsideWorkingDirectories, which also covers shell commands." : ""}`, severity: "warning", statusOnly: true }];
  }), l = (0, import_chunk_trq47kfh.nkl)(), d = l.length === 0 ? [] : [{ path: "env", message: `This session was started with permissions.blockFileToolReadsOutsideWorkingDirectories, and something other than the program that started it (managed settings or a plugin, say) changed ${l.join(", ")}. For the rest of this session the file tools refuse Claude Code's own files (plans, memory, stored tool results) and every added folder. To avoid this, start Claude Code with that value already in its environment or in --settings.`, severity: "warning", statusOnly: true }], c = Tei(), a = [...(0, import_chunk_3jaw45cy.eAn)().notices, ...O()].map((e) => ({ path: "env", message: e, severity: "warning", statusOnly: true }));
  return { settings: t.settings, errors: [...t.errors, ...r, ...o, ...g, ...d, ...c.ignored, ...c.turnedOff, ...a] };
}
var S = ["blockFileToolReadsOutsideWorkingDirectories", "blockReadsExemptPaths", "workingDirectoriesAsGiven", "workingDirectoriesExclude"], y = new Set(import_chunk_gd77dyw4.oLr);
function Tei() {
  let t = [], r = [], n = (0, import_chunk_xzvhvaa2.Ko)();
  for (let o of n) {
    if (!(0, import_chunk_gd77dyw4.Qee)(o)) continue;
    if (o === "projectSettings" && n.includes("userSettings") && (0, import_chunk_2yx6c1y2.vm)()) continue;
    let i = (0, import_chunk_2yx6c1y2._e)(o)?.env ?? {}, g = [], l = [];
    for (let a of Object.keys(i)) {
      let e = a.toUpperCase();
      if (!y.has(e)) continue;
      if ((0, import_chunk_gd77dyw4.VDo)(a, i[a], import_chunk_5e3gtsn9.$ji)) l.push(a);
      else g.push(a);
    }
    let d = (0, import_chunk_2yx6c1y2._n)(o), c = (0, import_chunk_6mfepmbb.BA)(o);
    if (g.length > 0) t.push({ file: d, path: "env", message: `Claude Code ignores these telemetry variables in ${c}: ${g.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`, severity: "warning", statusOnly: true });
    if (l.length > 0) r.push({ file: d, path: "env", message: `${c} turns telemetry off with these variables: ${l.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`, severity: "warning", statusOnly: true });
  }
  return { ignored: t, turnedOff: r };
}
function _rr() {
  return (0, import_chunk_2yx6c1y2.aKt)().filter((t) => !t.preserveOnWrite);
}
function kXt() {
  let t = (0, import_chunk_2yx6c1y2._n)("localSettings");
  return [...Bqe().errors.filter((n) => !n.mcpErrorMetadata && n.severity !== "warning" && n.file !== t && !(0, import_chunk_6mfepmbb.EKt)(n)), ..._rr()];
}
