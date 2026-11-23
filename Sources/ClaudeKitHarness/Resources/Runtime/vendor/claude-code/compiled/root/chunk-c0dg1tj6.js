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
var chunk_c0dg1tj6_exports = {};
__export(chunk_c0dg1tj6_exports, {
  GBs: () => GBs,
  K1o: () => K1o,
  Wha: () => Wha,
  zBs: () => zBs
});
module.exports = __toCommonJS(chunk_c0dg1tj6_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_x4gxxgd2 = require("/$bunfs/root/chunk-x4gxxgd2.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_g7bgdraj = require("/$bunfs/root/chunk-g7bgdraj.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_9yrg7phs = require("/$bunfs/root/chunk-9yrg7phs.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_path = require("path");
(0, import_chunk_bs4h6795.G)();
function Ot() {
  return "Sent to Claude on each run. Commands work.";
}
function jt(dt) {
  return dt.trim() === "" ? null : (0, import_chunk_0kyr8hth.Vbt)(dt).error ?? null;
}
function Lt(at) {
  if (at.trim() === "") {
    return;
  }
  let Be = (0, import_chunk_0kyr8hth.Vbt)(at);
  return Be.error ? void 0 : `${Be.human} \xB7 ${Be.cron}`;
}
function Ft(lt) {
  return { label: (0, import_chunk_xcgcdx61.wB)(lt), value: lt };
}
async function Wha(u) {
  return (0, import_chunk_9yrg7phs.Ekn)(void 0, u).catch((n) => ((0, import_chunk_k449cc64.i)(n), []));
}
function GBs(u) {
  let s = (0, import_chunk_sng02qpc.k)(75), { task: n, onBack: v, onEdit: a, onDone: f, refresh: T, storageV5: x } = u, [g, Z] = (0, import_chunk_bs4h6795.y)(false), [p, _] = (0, import_chunk_bs4h6795.y)(false), q = (0, import_chunk_8bkqeb5d.Xe)(), fe;
  if (s[0] !== g || s[1] !== f || s[2] !== T || s[3] !== x || s[4] !== n) fe = async function A2() {
    if (g) {
      return;
    }
    Z(true);
    ;
    try {
      if (!await (0, import_chunk_9yrg7phs.Z9t)(_e({ ...n, enabled: !n.enabled }), void 0, x, { existingId: n.id })) {
        f(pe(n.id), { display: "system" });
        return;
      }
      await T(), f(`${n.enabled ? "Disabled" : "Enabled"} scheduled task '${n.id}'.`, { display: "system" });
    } catch (ee2) {
      let te = ee2;
      (0, import_chunk_k449cc64.i)(te), f(`Couldn't change the task: ${(0, import_chunk_jv7av99m.d)(te)}`, { display: "system" });
    }
  }, s[0] = g, s[1] = f, s[2] = T, s[3] = x, s[4] = n, s[5] = fe;
  else fe = s[5];
  let A = fe, ee;
  if (s[6] !== g || s[7] !== f || s[8] !== T || s[9] !== x || s[10] !== n.id) ee = async function I2() {
    if (g) {
      return;
    }
    Z(true);
    ;
    try {
      await (0, import_chunk_9yrg7phs.dXn)(n.id, void 0, x), await T(), f(`Removed scheduled task '${n.id}'.`, { display: "system" });
    } catch (h2) {
      let oe = h2;
      (0, import_chunk_w578pjby.t)(`Failed to remove scheduled task '${n.id}' from daemon.json: ${(0, import_chunk_jv7av99m.d)(oe)}`, { level: "error" }), f(`Couldn't remove the task: ${(0, import_chunk_jv7av99m.d)(oe)}`, { display: "system" });
    }
  }, s[6] = g, s[7] = f, s[8] = T, s[9] = x, s[10] = n.id, s[11] = ee;
  else ee = s[11];
  let I = ee;
  if (p) {
    const h2 = `'${n.id}' in daemon.json`;
    let D2;
    if (s[12] === import_chunk_w1d7ygsk.R) D2 = () => _(false), s[12] = D2;
    else D2 = s[12];
    const V2 = q ? void 0 : "select";
    let O2;
    if (s[13] === import_chunk_w1d7ygsk.R) O2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Once the background service reloads its config, this task won't be scheduled again. ", import_chunk_9yrg7phs.lXn] }), s[13] = O2;
    else O2 = s[13];
    let m2;
    if (s[14] !== I) m2 = () => void I(), s[14] = I, s[15] = m2;
    else m2 = s[15];
    let ie2;
    if (s[16] === import_chunk_w1d7ygsk.R) ie2 = () => _(false), s[16] = ie2;
    else ie2 = s[16];
    let b2;
    if (s[17] !== m2) b2 = (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { hideIndexes: true, disablePrintableKeybindings: true, cancelFirst: true, focus: "cancel", confirmLabel: "Yes, remove", cancelLabel: "No, cancel", onConfirm: m2, onCancel: ie2 }), s[17] = m2, s[18] = b2;
    else b2 = s[18];
    let J2;
    if (s[19] !== h2 || s[20] !== V2 || s[21] !== b2) J2 = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Remove task?", subtitle: h2, onCancel: D2, enterAction: V2, children: [O2, b2] }), s[19] = h2, s[20] = V2, s[21] = b2, s[22] = J2;
    else J2 = s[22];
    return J2;
  }
  const h = n.enabled ? "Disable" : "Enable";
  let D;
  if (s[23] !== h) D = { label: h, value: "toggle" }, s[23] = h, s[24] = D;
  else D = s[24];
  let V, O;
  if (s[25] === import_chunk_w1d7ygsk.R) V = { label: "Edit", value: "edit" }, O = { label: "Remove", value: "remove" }, s[25] = V, s[26] = O;
  else V = s[25], O = s[26];
  let m;
  if (s[27] !== D) m = [D, V, O], s[27] = D, s[28] = m;
  else m = s[28];
  let X = m;
  const { id: ie, cron: b } = n;
  let J;
  if (s[29] !== n.cron) J = (0, import_chunk_0kyr8hth.j6)(n.cron), s[29] = n.cron, s[30] = J;
  else J = s[30];
  const ne = `${b} (${J})`;
  let K;
  if (s[31] !== ne) K = { label: "Cron", value: ne }, s[31] = ne, s[32] = K;
  else K = s[32];
  let S;
  if (s[33] !== n.directory) S = { label: "Directory", value: n.directory }, s[33] = n.directory, s[34] = S;
  else S = s[34];
  let z;
  if (s[35] !== n.prompt) z = { label: "Prompt", value: n.prompt }, s[35] = n.prompt, s[36] = z;
  else z = s[36];
  const U = n.enabled ? "on" : "off";
  let M;
  if (s[37] !== U) M = (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: U, withSpace: true }), s[37] = U, s[38] = M;
  else M = s[38];
  const j = n.enabled ? "enabled" : "disabled";
  let W;
  if (s[39] !== M || s[40] !== j) W = { label: "Status", value: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [M, j] }) }, s[39] = M, s[40] = j, s[41] = W;
  else W = s[41];
  let se;
  if (s[42] !== n.permissionMode) se = (0, import_chunk_xcgcdx61.wB)(n.permissionMode), s[42] = n.permissionMode, s[43] = se;
  else se = s[43];
  let C;
  if (s[44] !== se) C = { label: "Mode", value: se }, s[44] = se, s[45] = C;
  else C = s[45];
  let Y;
  if (s[46] !== n.model) Y = n.model && { label: "Model", value: n.model }, s[46] = n.model, s[47] = Y;
  else Y = s[47];
  const re = `${n.runTimeoutMinutes}m`;
  let w;
  if (s[48] !== re) w = { label: "Timeout", value: re }, s[48] = re, s[49] = w;
  else w = s[49];
  let E;
  if (s[50] !== n.maxQueued) E = { label: "Max queue", value: n.maxQueued }, s[50] = n.maxQueued, s[51] = E;
  else E = s[51];
  let de;
  if (s[52] !== K || s[53] !== S || s[54] !== z || s[55] !== W || s[56] !== C || s[57] !== Y || s[58] !== w || s[59] !== E) de = (0, import_chunk_a46xeenj.e)(import_chunk_x4gxxgd2.ma, { rows: [K, S, z, W, C, Y, w, E] }), s[52] = K, s[53] = S, s[54] = z, s[55] = W, s[56] = C, s[57] = Y, s[58] = w, s[59] = E, s[60] = de;
  else de = s[60];
  let L;
  if (s[61] !== a || s[62] !== n || s[63] !== A) L = (F) => {
    if (F === "edit") {
      return a(n);
    }
    if (F === "remove") {
      return _(true);
    }
    if (F === "toggle") {
      return void A();
    }
  }, s[61] = a, s[62] = n, s[63] = A, s[64] = L;
  else L = s[64];
  let P;
  if (s[65] !== g || s[66] !== v || s[67] !== X || s[68] !== L) P = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { hideIndexes: true, disablePrintableKeybindings: true, refuseStrayText: true, options: X, isDisabled: g, onChange: L, onCancel: v }), s[65] = g, s[66] = v, s[67] = X, s[68] = L, s[69] = P;
  else P = s[69];
  let ve;
  if (s[70] !== v || s[71] !== de || s[72] !== P || s[73] !== n.id) ve = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: ie, onCancel: v, enterAction: "select", escapeAction: "go back", children: [de, P] }), s[70] = v, s[71] = de, s[72] = P, s[73] = n.id, s[74] = ve;
  else ve = s[74];
  return ve;
}
function zBs(u) {
  let p = (0, import_chunk_sng02qpc.k)(59), { defaultDir: n, existingIds: v, prefill: a, modelOptions: f, onCancel: T, onDone: x, onSaved: g, storageV5: Z } = u, _;
  if (p[0] !== f) _ = f === void 0 ? [{ label: "default", value: "" }] : f, p[0] = f, p[1] = _;
  else _ = p[1];
  let q = _, s = a !== void 0, fe;
  if (p[2] !== v || p[3] !== s || p[4] !== a) fe = s ? v.filter((ee) => ee !== a.id) : v, p[2] = v, p[3] = s, p[4] = a, p[5] = fe;
  else fe = p[5];
  let te = fe;
  const A = a?.prompt ?? "", h = a?.cron ?? "", oe = a?.directory ?? n, I = a?.id ?? "", D = a?.permissionMode ?? "dontAsk", V = a?.model ?? "";
  let O;
  if (p[6] !== A || p[7] !== h || p[8] !== oe || p[9] !== I || p[10] !== D || p[11] !== V) O = { prompt: A, schedule: h, dir: oe, id: I, permissionMode: D, model: V }, p[6] = A, p[7] = h, p[8] = oe, p[9] = I, p[10] = D, p[11] = V, p[12] = O;
  else O = p[12];
  let [m, ie] = (0, import_chunk_bs4h6795.y)(O), [b, J] = (0, import_chunk_bs4h6795.y)(s), [X, ne] = (0, import_chunk_bs4h6795.y)(false), K;
  if (p[13] !== n || p[14] !== b) K = function j2(S, z) {
    if (S === "id") J(true);
    ie((U) => {
      if (U[S] === z) {
        return U;
      }
      let M = { ...U, [S]: z };
      if (S !== "id" && !b && (S === "prompt" || S === "dir")) M.id = ce((0, import_path.resolve)((0, import_chunk_z6pfqf6e.Pp)(M.dir?.trim() || n)), M.prompt ?? "");
      return M;
    });
  }, p[13] = n, p[14] = b, p[15] = K;
  else K = p[15];
  let j = K, W;
  if (p[16] !== q || p[17] !== a) W = a?.model && !q.some((se) => se.value === a.model) ? [...q, { label: a.model, value: a.model }] : q, p[16] = q, p[17] = a, p[18] = W;
  else W = p[18];
  let C = W, Y, re;
  if (p[19] === import_chunk_w1d7ygsk.R) Y = { type: "text", key: "prompt", label: "Prompt", placeholder: "/babysit-prs", required: true, hint: Ot }, re = { type: "text", key: "schedule", label: "Schedule", placeholder: "5m, 2h, 1d  or  */15 * * * *", required: true, validate: jt, hint: Lt }, p[19] = Y, p[20] = re;
  else Y = p[19], re = p[20];
  let w;
  if (p[21] !== n) w = { type: "text", key: "dir", label: "Directory", placeholder: n }, p[21] = n, p[22] = w;
  else w = p[22];
  let E;
  if (p[23] !== te) E = (de) => {
    let L = de.trim();
    if (L !== "" && te.includes(L)) {
      return `id '${L}' is already in use`;
    }
    return null;
  }, p[23] = te, p[24] = E;
  else E = p[24];
  let F;
  if (p[25] !== b) F = () => b ? void 0 : "Auto-generated from prompt and directory.", p[25] = b, p[26] = F;
  else F = p[26];
  let P;
  if (p[27] !== E || p[28] !== F) P = { type: "text", key: "id", label: "ID", validate: E, hint: F }, p[27] = E, p[28] = F, p[29] = P;
  else P = p[29];
  let ve;
  if (p[30] === import_chunk_w1d7ygsk.R) ve = { type: "select", key: "permissionMode", label: "Permission mode", options: import_chunk_9yrg7phs.J9t.map(Ft) }, p[30] = ve;
  else ve = p[30];
  let ye;
  if (p[31] !== C) ye = (Ge) => C.find((Qt) => Qt.value === Ge)?.description ?? (Ge === "" ? "Uses your configured default model." : void 0), p[31] = C, p[32] = ye;
  else ye = p[32];
  let ke;
  if (p[33] !== C || p[34] !== ye) ke = { type: "select", key: "model", label: "Model", options: C, hint: ye }, p[33] = C, p[34] = ye, p[35] = ke;
  else ke = p[35];
  let et;
  if (p[36] !== w || p[37] !== P || p[38] !== ke) et = [Y, re, w, P, ve, ke], p[36] = w, p[37] = P, p[38] = ke, p[39] = et;
  else et = p[39];
  let $e = et, tt;
  if (p[40] !== X || p[41] !== n || p[42] !== s || p[43] !== x || p[44] !== g || p[45] !== a || p[46] !== Z || p[47] !== m) tt = async function ge2() {
    if (X) {
      return;
    }
    ne(true);
    let ot = (0, import_path.resolve)((0, import_chunk_z6pfqf6e.Pp)(m.dir?.trim() || n));
    let it = (0, import_chunk_0kyr8hth.Vbt)(m.schedule ?? "");
    if (it.cron === void 0) {
      ne(false);
      return;
    }
    let Nt = m.id?.trim() || ce(ot, m.prompt?.trim() ?? "");
    let qt = m.permissionMode ?? "dontAsk";
    let nt = m.model?.trim() || void 0;
    let Jt = { id: Nt, cron: it.cron, prompt: m.prompt.trim(), directory: ot, enabled: a?.enabled ?? true, permissionMode: qt, runTimeoutMinutes: a?.runTimeoutMinutes ?? 30, maxQueued: a?.maxQueued ?? 1, ...nt && { model: nt } };
    ;
    try {
      let Xt = await (0, import_chunk_9yrg7phs.Z9t)(Jt, void 0, Z, s ? { existingId: a.id } : void 0);
      if (s && !Xt) {
        x(pe(a.id), { display: "system" });
        return;
      }
      await g();
    } catch (ae2) {
      let st = ae2;
      (0, import_chunk_k449cc64.i)(st), x(`Couldn't save the task: ${(0, import_chunk_jv7av99m.d)(st)}`, { display: "system" });
    }
  }, p[40] = X, p[41] = n, p[42] = s, p[43] = x, p[44] = g, p[45] = a, p[46] = Z, p[47] = m, p[48] = tt;
  else tt = p[48];
  let ge = tt;
  const ae = s ? `Edit '${a.id}'` : "New scheduled task";
  let he;
  if (p[49] !== ge) he = () => void ge(), p[49] = ge, p[50] = he;
  else he = p[50];
  const Ve = s ? "Save changes" : "Create task";
  let rt;
  if (p[51] !== $e || p[52] !== T || p[53] !== j || p[54] !== ae || p[55] !== he || p[56] !== Ve || p[57] !== m) rt = (0, import_chunk_a46xeenj.e)(import_chunk_g7bgdraj.Ite, { title: ae, subtitle: "Run a prompt on a schedule", fields: $e, values: m, onChange: j, onSubmit: he, onCancel: T, submitLabel: Ve }), p[51] = $e, p[52] = T, p[53] = j, p[54] = ae, p[55] = he, p[56] = Ve, p[57] = m, p[58] = rt;
  else rt = p[58];
  return rt;
}
function K1o(u) {
  return u.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
}
function ce(u, n) {
  let v = K1o((0, import_path.basename)(u)), a = K1o(n.split(/\s+/).slice(0, 4).join(" "));
  return [v, a].filter(Boolean).join("-") || "task";
}
function pe(u) {
  return `Scheduled task '${u}' no longer exists, so nothing was saved. Add it again if you still need it.`;
}
function _e(u) {
  return { id: u.id, cron: u.cron, prompt: u.prompt, directory: u.directory, enabled: u.enabled, permissionMode: u.permissionMode, runTimeoutMinutes: u.runTimeoutMinutes, maxQueued: u.maxQueued, ...u.model && { model: u.model } };
}
