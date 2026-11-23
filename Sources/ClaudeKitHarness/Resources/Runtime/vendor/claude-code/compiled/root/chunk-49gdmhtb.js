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
var chunk_49gdmhtb_exports = {};
__export(chunk_49gdmhtb_exports, {
  Aba: () => Aba,
  Cba: () => Cba,
  Fkn: () => Fkn,
  Kzs: () => Kzs,
  MXn: () => MXn,
  Pba: () => Pba,
  QWo: () => QWo,
  Rba: () => Rba,
  Vzs: () => Vzs,
  d8t: () => d8t,
  p$e: () => p$e,
  qzs: () => qzs,
  xba: () => xba
});
module.exports = __toCommonJS(chunk_49gdmhtb_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_ara52wcx = require("/$bunfs/root/chunk-ara52wcx.js");
var import_chunk_5nbqcb4c = require("/$bunfs/root/chunk-5nbqcb4c.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
function a() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_table", false) === true;
  } catch {
    return false;
  }
}
var u = "tengu_temporal_raven";
function Cba(e) {
  return e.outcome === "needs_approval" ? e.suggestions ?? [] : [];
}
function Vzs(e, o) {
  let [n, ...r] = e;
  if (n === void 0 || r.length > 0 || !(0, import_chunk_5nbqcb4c.PKe)(o)) return;
  let { toolName: t, ruleContent: s } = (0, import_chunk_qebpc5de.Ur)(n);
  return t === o && s !== void 0 && (0, import_chunk_qebpc5de.yn)({ toolName: o, ruleContent: s }) === n && (0, import_chunk_xcgcdx61.Gut)(s).type !== "exact" ? { toolName: o, ruleContent: s } : void 0;
}
function QWo() {
  return a() && !d();
}
function Kzs() {
  return (0, import_chunk_sghy0qej.Pe)(u, { safe: true });
}
function Aba() {
  try {
    return d() && ((0, import_chunk_2yx6c1y2._p)().errors.length > 0 || import_chunk_ha393e1n.Ue.isAutoAllowBashIfSandboxedEnabled());
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), true;
  }
}
function qzs(e, o) {
  try {
    return (0, import_chunk_bzyb60p0.qm)({ command: typeof o.command === "string" ? o.command : void 0, dangerouslyDisableSandbox: false, shellType: e === import_chunk_rb36kwbn.yt ? "powershell" : void 0 });
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
    return;
  }
}
function d() {
  try {
    return (0, import_chunk_2yx6c1y2._p)().errors.length > 0 || import_chunk_ha393e1n.Ue.isSandboxEnabledInSettings() || import_chunk_ha393e1n.Ue.isSandboxingEnabled();
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), true;
  }
}
function Rba(e, o) {
  let n = Vzs(o.offered, o.toolName);
  return QWo() && n !== void 0 && e.toolName === n.toolName && e.ruleContent === n.ruleContent;
}
function xba(e, o, n) {
  let r = e.offeredStandingUpdates.length > 0 && QWo() ? [...e.sessionPermissionUpdates, ...e.offeredStandingUpdates] : e.sessionPermissionUpdates, t = m(e.sandboxedStandingUpdates, o, n);
  return t.length === 0 ? r : [...r, ...t];
}
function m(e, o, n) {
  if (e.length === 0) return [];
  if (!Kzs()) return e.map((t) => t.update);
  let r = qzs(o.name, n);
  if (r === void 0 || (0, import_chunk_bzyb60p0.a3e)(o, n)) return [];
  return e.filter((t) => r || !t.givenForSandboxedRun).map((t) => t.update);
}
var p = 5e4, c = import_chunk_syr33dp2.Gdn, f = 4, S = 45e3, l = { sandbox: "tool_default", background: "forbidden", pinCwd: true, scrubCredentialEnv: true, maxTimeoutMs: S, get additionalDenyRead() {
  return (0, import_chunk_bzyb60p0.Krt)();
}, get additionalDenyWrite() {
  return (0, import_chunk_bzyb60p0.Krt)();
} }, g = "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.", MXn = /* @__PURE__ */ new Set(["dangerouslyDisableSandbox", ...[]]);
function Pba(e = {}) {
  return { name: "interim_floor", kind: "personal_machine", requireEnvelope: true, admission: "device_binding", stance: { mode: "session", honorLocalRules: true, onAsk: "session", askOnDestructive: e.askOnDestructive ?? false, unattended: "own_record" }, limits: { max_call_ms: p, max_command_ms: l.maxTimeoutMs, max_request_bytes: c, max_in_flight: f }, serves: (n) => import_chunk_ze4kt7fs.UAe.has(n.name) && (0, import_chunk_4vsz8a99.MA)(n).supported, constraints: (n, r) => {
    let t = (0, import_chunk_4vsz8a99.MA)(n);
    return (0, import_chunk_ara52wcx.s2r)(l, t.supported ? t.tighten : void 0);
  }, refusedInputFields: (n) => {
    let r = (0, import_chunk_4vsz8a99.MA)(n);
    return (r.supported ? r.refusedInputFields ?? [] : []).filter((s) => !MXn.has(s));
  }, notes: () => g };
}
var d8t = 8, Fkn = 512;
function p$e() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_fhole", false) === true;
  } catch {
    return false;
  }
}
