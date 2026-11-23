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
var chunk_2phtyfb4_exports = {};
__export(chunk_2phtyfb4_exports, {
  E$s: () => E$s,
  T$s: () => T$s,
  v$s: () => v$s
});
module.exports = __toCommonJS(chunk_2phtyfb4_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_b0t73t01 = require("/$bunfs/root/chunk-b0t73t01.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_s3qtr6en = require("/$bunfs/root/chunk-s3qtr6en.js");
var import_chunk_f8jgtdc8 = require("/$bunfs/root/chunk-f8jgtdc8.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function P(e, r) {
  let a = /* @__PURE__ */ new Map();
  for (let t of r) if (t !== import_chunk_khxw3ng0.Sp) a.set(t, (a.get(t) ?? 0) + 1);
  let g = r[0] === import_chunk_khxw3ng0.Sp, f = [];
  for (let t = e.length - 1; t >= 0; t--) {
    let c = e[t];
    if (c === void 0) continue;
    let p = a.get(c) ?? 0;
    if (p > 0) {
      a.set(c, p - 1);
      continue;
    }
    if (g && c === import_chunk_khxw3ng0.Sp && e[t + 1] === r[1]) {
      g = false;
      continue;
    }
    f.push(c);
  }
  return f.reverse();
}
function U(e, r, a) {
  let g = (0, import_chunk_f9x2f6cx.Fd)() ?? {}, { autoMode: f, ...t } = g, c = (0, import_chunk_ma3kja9f.T)(f) ? f : {}, { environment: p, ..._ } = c, h = (0, import_chunk_4smdap7r.Nr)(p), d = P(h, r), m = [];
  if (e.length > 0) {
    let S = (0, import_chunk_2yx6c1y2.aL)()?.environment ?? [], M = new Set(r), A = new Set(h), n = S.some((v) => !M.has(v)), o = S.some((v) => !A.has(v)), C = r[0] === import_chunk_khxw3ng0.Sp;
    m = !d.includes(import_chunk_khxw3ng0.Sp) && (C ? !o : !n) ? [import_chunk_khxw3ng0.Sp, ...e] : [...e];
  }
  let y = [...d, ...m];
  if ((0, import_chunk_4smdap7r.Xy)(y, h)) {
    a(m);
    return;
  }
  let b = y.length > 0 ? { ..._, environment: y } : _, E = Object.keys(b).length > 0 ? { ...t, autoMode: b } : t;
  (0, import_chunk_f9x2f6cx.oE)(Object.keys(E).length > 0 ? E : null), a(m), (0, import_chunk_r3mm3x33.pr)();
}
function E$s() {
  switch ((0, import_chunk_865at33z.$R)()) {
    case "env":
    case "fd": {
      let e = (0, import_chunk_mzmcvr6c.ht)(import_chunk_c203g5kd.s.CLAUDE_CODE_ACCOUNT_UUID);
      return e ? { accountUuid: e, organizationUuid: (0, import_chunk_mzmcvr6c.ht)(import_chunk_c203g5kd.s.CLAUDE_CODE_ORGANIZATION_UUID) ?? void 0 } : void 0;
    }
    case "store":
    case "none":
      return;
  }
}
function v$s(e, r) {
  if (!e || !r) return false;
  return (0, import_chunk_865at33z.uc)({ accountUuid: r.accountUuid.toLowerCase(), organizationUuid: r.organizationUuid?.toLowerCase() }, { accountUuid: e.accountUuid.toLowerCase(), organizationUuid: e.organizationUuid?.toLowerCase() });
}
var w = { undo: () => null, granted: { autoMode: false, facts: 0, artifact: false, autoCompact: false, projectsEntrypoint: false } };
async function T$s(e) {
  let r = (0, import_chunk_b0t73t01.Gjr)("attach"), a = e.autoModeEnvironment.length > 0, g = false;
  g = a;
  let f = r || g || (0, import_chunk_865at33z.Sy)() ? await (0, import_chunk_f8jgtdc8.XIt)(e.sessionId, { baseUrl: (0, import_chunk_mw2v4wks.sj)(), credentials: e.credentials }) : null, t = (0, import_chunk_b0t73t01.s8t)(f);
  if ((0, import_chunk_b0t73t01.jjr)(t)) (0, import_chunk_s3qtr6en.t1o)();
  if (!r && !a) return w;
  if (await e.applyAfter, !e.stillWanted()) return w;
  if (t.projectThreadChild && (0, import_chunk_b0t73t01.vKe)()?.reason === "floor_unreachable") return (0, import_chunk_cqa9hrgx.l)("bridge_rc_child_grants", "floor_unreachable"), w;
  let c = null;
  if (a && !t.projectThreadChild) c = f === null ? "session_tags_unread" : "session_untagged";
  let p = (0, import_chunk_2yx6c1y2._e)("policySettings")?.permissions?.defaultMode !== void 0, _ = (0, import_chunk_b0t73t01.zjr)({ roles: t, modePinned: p, settings: import_chunk_2yx6c1y2.vt });
  if (r && t.rcChild && p) (0, import_chunk_cqa9hrgx.l)("bridge_rc_child_grants", "auto_policy_pinned");
  let h = false, d = null;
  if (_.autoOverSettings) {
    let n = e.permission.get().mode, o = e.inheritLiftedFrom ?? null, C = n === "default" || n === "acceptEdits", O = n === "plan" && o !== null && e.permission.get().prePlanMode === o;
    if ((C || O) && e.keepChosenMode()) (0, import_chunk_cqa9hrgx.l)("bridge_rc_child_grants", "auto_withheld_mode_chosen");
    else if ((C || O) && e.permission.get().isAutoModeAvailable === false) (0, import_chunk_cqa9hrgx.l)("bridge_rc_child_grants", "auto_unavailable");
    else if (O) e.permission.set((I) => ({ ...I, prePlanMode: "auto" })), h = true, d = o, (0, import_chunk_cqa9hrgx.u)("bridge_rc_child_grants");
    else if (!C) (0, import_chunk_cqa9hrgx.l)("bridge_rc_child_grants", "auto_host_mode_kept");
    else if ((0, import_chunk_awvk50qj.iR)("auto", e.permission.get(), e.permission.set, "remote_control_attach").ok) h = true, d = n, (0, import_chunk_cqa9hrgx.u)("bridge_rc_child_grants");
    else (0, import_chunk_cqa9hrgx.l)("bridge_rc_child_grants", "auto_refused");
  }
  let m = [], y = null, b = (n) => {
    try {
      U(n, m, (o) => {
        m = o;
      });
    } catch (o) {
      (0, import_chunk_k449cc64.i)(o);
    }
  };
  if (c !== null) (0, import_chunk_cqa9hrgx.l)("bridge_rc_child_grants", `facts_${c}`);
  else if (a) {
    b(e.autoModeEnvironment);
    let n = () => b(e.autoModeEnvironment), o = import_chunk_trq47kfh.Ti.subscribe(n), C = (0, import_chunk_865at33z.ys)(n);
    y = () => {
      o(), C();
    };
  }
  let E = false;
  if (_.artifact && (0, import_chunk_z1z1qsrb.Lys)()) E = true, import_chunk_c203g5kd.s.set("CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", true);
  let S = false;
  if (_.autoCompact && (0, import_chunk_2yx6c1y2._e)("flagSettings")?.autoCompactEnabled === void 0) (0, import_chunk_f9x2f6cx.oE)({ ...(0, import_chunk_f9x2f6cx.Fd)(), autoCompactEnabled: true }), import_chunk_trq47kfh.Ti.notifyChange("flagSettings"), S = true;
  let M = false;
  if (_.projectsEntrypoint) if (M = (0, import_chunk_865at33z.FRo)(), M) (0, import_chunk_cqa9hrgx.u)("bridge_projects_entrypoint_name");
  else (0, import_chunk_cqa9hrgx.l)("bridge_projects_entrypoint_name", "host_name_kept");
  let A = false;
  return { granted: { autoMode: h, facts: m.length, artifact: E, autoCompact: S, projectsEntrypoint: M }, undo() {
    if (A) return null;
    if (A = true, y?.(), b([]), E) import_chunk_c203g5kd.s.unset("CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT");
    if (M) (0, import_chunk_865at33z.KOl)();
    if (S) {
      let { autoCompactEnabled: n, ...o } = (0, import_chunk_f9x2f6cx.Fd)() ?? {};
      if (n === true) (0, import_chunk_f9x2f6cx.oE)(Object.keys(o).length > 0 ? o : null), import_chunk_trq47kfh.Ti.notifyChange("flagSettings");
    }
    if (d !== null && e.permission.get().mode === "auto") (0, import_chunk_awvk50qj.iR)(d, e.permission.get(), e.permission.set, "remote_control_detach");
    else if (d !== null && e.permission.get().mode === "plan" && e.permission.get().prePlanMode === "auto") {
      let n = d;
      return e.permission.set((o) => ({ ...o, prePlanMode: n })), n;
    }
    return null;
  } };
}
