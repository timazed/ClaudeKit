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
var chunk_9x0gppnz_exports = {};
__export(chunk_9x0gppnz_exports, {
  DEl: () => DEl,
  G2t: () => G2t,
  Mji: () => Mji,
  aks: () => aks,
  cks: () => cks,
  dks: () => dks,
  fks: () => fks,
  lks: () => lks,
  tEo: () => tEo,
  uks: () => uks
});
module.exports = __toCommonJS(chunk_9x0gppnz_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_6ch41xk7 = require("/$bunfs/root/chunk-6ch41xk7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_path = require("path");
var import_crypto = require("crypto");
var G2t = "apply-project-settings", DEl = "Review and accept settings changes for cloud sessions that use this computer";
function aks(e = process.argv) {
  return e[2] === "apply-project-settings";
}
function lks(e, r) {
  return `${(0, import_crypto.createHash)("sha256").update(r).digest("hex")}:${e}`;
}
function tEo(e) {
  return (0, import_chunk_w578pjby._)(e).replace(/[\u007f-\u009f]/g, (r) => "\\u" + r.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"));
}
function dks(e) {
  try {
    let r = e.trim(), g = r.startsWith("{") && r.endsWith("}"), c;
    if (g) {
      let o = (0, import_chunk_0jve1fep.et)(r);
      if (!o) return (0, import_chunk_mpk68jst.Bn)("Error: Invalid JSON provided to --settings");
      let i = tEo(o);
      c = (0, import_chunk_8nvd6fqx.dJe)("claude-settings", ".json", { contentHash: i }), (0, import_chunk_f9x2f6cx.Jaa)(i);
    } else {
      let o = e, i = e, f;
      try {
        if ((0, import_chunk_6mfepmbb.qC)(e)) o = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e).resolvedPath, i = o;
        else {
          let n = (0, import_chunk_w578pjby.RD)((0, import_chunk_w578pjby.le)(), e);
          o = n.resolvedPath, i = v(n.linksResolvedPath ?? n.resolvedPath);
        }
        f = (0, import_chunk_73gwqz1r.RB)(o, import_chunk_6mfepmbb.Jp);
      } catch (n) {
        if ((0, import_chunk_w578pjby.HLs)(n)) return (0, import_chunk_mpk68jst.Bn)(`Error: Cannot use settings file ${e}: ${(0, import_chunk_jv7av99m.d)(n)}`);
        if ((0, import_chunk_jv7av99m.J)(n)) return (0, import_chunk_mpk68jst.Bn)(`Error: Settings file not found: ${o}`);
        if ((0, import_chunk_jv7av99m.w)(n) === "ERR_FILE_TOO_LARGE") return (0, import_chunk_mpk68jst.Bn)(`Error: Settings file exceeds the ${import_chunk_6mfepmbb.Jp / 1048576}MiB limit: ${o}`);
        if ((0, import_chunk_73gwqz1r.ese)(n) || (0, import_chunk_jv7av99m.Kz)(n)) return (0, import_chunk_mpk68jst.Bn)(`Error: Cannot use settings file (${(0, import_chunk_jv7av99m.d)(n)}): ${o}`);
        throw n;
      }
      let a = import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_SETTINGS_BINDING, l = a?.slice(a.indexOf(":") + 1) ?? "", u = (0, import_path.basename)(import_chunk_c203g5kd.s.CLAUDE_JOB_DIR ?? ""), p = import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg" && /^[0-9a-f]{8}$/.test(u) ? `Run \`claude respawn ${u}\` in a terminal` : "Restart `claude remote-control`";
      if (a !== void 0 && !(/^[0-9a-f]{64}:/.test(a) && (0, import_path.isAbsolute)(l))) return (0, import_chunk_mpk68jst.Bn)(`Error: The settings file ${e} can't be checked, because what Remote Control recorded of it is damaged, so this session did not start. ${p} to use it as it is now.`);
      if ((e === l || i === l) && lks(i, f) !== a) return (0, import_chunk_mpk68jst.Bn)(`Error: The settings file ${e} has changed since Remote Control started, so this session did not start. ${p} to use it as it is now.`);
      c = i, (0, import_chunk_f9x2f6cx.Qaa)(f);
    }
    (0, import_chunk_f9x2f6cx.qaa)(c), (0, import_chunk_r3mm3x33.pr)();
  } catch (r) {
    if (r instanceof Error) (0, import_chunk_w578pjby.t)(`Error processing --settings: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
    return (0, import_chunk_mpk68jst.Bn)(`Error processing settings: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
}
function cks(e) {
  let r = (0, import_chunk_0jve1fep.et)(e.trim(), false);
  if (!(0, import_chunk_ma3kja9f.T)(r)) {
    (0, import_chunk_w578pjby.t)("--managed-settings ignored: invalid JSON object", { level: "warn" }), (0, import_chunk_f9x2f6cx.FNs)(true);
    return;
  }
  let { document: g, inForce: c, refusal: o } = (0, import_chunk_6mfepmbb.OFl)(r, import_chunk_dw5px5e0.ZOe);
  if (o !== void 0) return (0, import_chunk_mpk68jst.Bn)(o);
  let { tier: i, organization: f, memberLost: a } = (0, import_chunk_6ch41xk7.LEl)(g);
  if (a) (0, import_chunk_f9x2f6cx.FNs)(true);
  (0, import_chunk_f9x2f6cx.Zaa)(i, f, c), (0, import_chunk_r3mm3x33.pr)();
}
function m(e) {
  try {
    let r = (0, import_chunk_xzvhvaa2.CHr)(e);
    (0, import_chunk_f9x2f6cx.jNs)(r), (0, import_chunk_r3mm3x33.pr)();
  } catch (r) {
    if (r instanceof Error) (0, import_chunk_w578pjby.t)(`Invalid --setting-sources flag: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
    return (0, import_chunk_mpk68jst.Bn)(`Error processing --setting-sources: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
}
function Mji() {
  let e = performance.now();
  (0, import_chunk_k5jn5rx9.ts)("eagerLoadSettings_start");
  let r = (0, import_chunk_dw5px5e0.Tb)("--settings");
  if (r) dks(r);
  let g = (0, import_chunk_dw5px5e0.Tb)("--managed-settings");
  if (g) cks(g);
  uks(), P(), (0, import_chunk_k5jn5rx9.ts)("eagerLoadSettings_end"), (0, import_chunk_zjhyjv3y.zo)("settings_load_ms", performance.now() - e, e);
}
function P() {
  let e = (0, import_chunk_dw5px5e0.Tb)("--fast-mode");
  if (e !== "on" && e !== "off") return;
  (0, import_chunk_f9x2f6cx.oE)({ ...(0, import_chunk_f9x2f6cx.Fd)() ?? {}, fastMode: e === "on" }), (0, import_chunk_r3mm3x33.pr)();
}
function uks() {
  let e = (0, import_chunk_dw5px5e0.Tb)("--setting-sources");
  if (e !== void 0) m(e);
  if ((0, import_chunk_dw5px5e0.GE)("--restricted") || (0, import_chunk_2gtmjt3y.YOe)()) m(""), (0, import_chunk_f9x2f6cx.PNr)(true);
  if ((0, import_chunk_6e68m1dj.uL)()) m("");
  if (aks()) fks();
}
function fks() {
  let e = (0, import_chunk_f9x2f6cx.dVe)();
  return (0, import_chunk_f9x2f6cx.jNs)(e.filter((r) => !import_chunk_xzvhvaa2.yp.has(r))), (0, import_chunk_r3mm3x33.pr)(), e.filter((r) => import_chunk_xzvhvaa2.yp.has(r));
}
function v(e) {
  if ((0, import_chunk_z6pfqf6e.ja)(e)) return e;
  try {
    let r = (0, import_chunk_w578pjby.mse)((0, import_chunk_w578pjby.le)(), e);
    return r.toLowerCase() === e.toLowerCase() ? r : e;
  } catch {
    return e;
  }
}
