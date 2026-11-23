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
var chunk_zr4j0m9s_exports = {};
__export(chunk_zr4j0m9s_exports, {
  Cya: () => Cya,
  JYn: () => JYn,
  s8l: () => s8l,
  xwn: () => xwn
});
module.exports = __toCommonJS(chunk_zr4j0m9s_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_tdn7rsbd = require("/$bunfs/root/chunk-tdn7rsbd.js");
var import_chunk_b7hj8816 = require("/$bunfs/root/chunk-b7hj8816.js");
var import_chunk_v65a0pbg = require("/$bunfs/root/chunk-v65a0pbg.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_cpdpk5r1 = require("/$bunfs/root/chunk-cpdpk5r1.js");
var import_chunk_bqf1zbmm = require("/$bunfs/root/chunk-bqf1zbmm.js");
var import_chunk_yvvpnc06 = require("/$bunfs/root/chunk-yvvpnc06.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_mspgntr4 = require("/$bunfs/root/chunk-mspgntr4.js");
var import_chunk_kvavrh0f = require("/$bunfs/root/chunk-kvavrh0f.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_path = require("path");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var Qe = 30;
function JYn() {
  let C = (0, import_chunk_bs4h6795.I)(null), { rows: n, columns: c } = (0, import_chunk_6n6exvyx.Qo)((0, import_chunk_6n6exvyx.qe)()), a = (0, import_chunk_8bkqeb5d.Xe)(), d = (0, import_chunk_8bkqeb5d.Wo)(() => (C.current?.yogaNode?.getComputedHeight() ?? 0) > n) && !a, i = `${n}x${c}`, [p, l] = (0, import_chunk_bs4h6795.y)(), f = !a && (n < Qe || p === i);
  if (d && !f) l(i);
  return { frame: C, isShort: f, isCutOff: d && f };
}
function $o() {
}
function xo() {
  ;
  try {
    return (0, import_chunk_mspgntr4.vzs)();
  } catch (C) {
    let L = C;
    (0, import_chunk_w578pjby.t)(`/cd: reading the project settings for the backstop prompt failed: ${L}`, { level: "error" });
    return;
  }
}
function Go(H) {
  (0, import_chunk_w578pjby.t)(`/cd: persisting trust failed: ${H}`, { level: "error" });
}
function F(C) {
  let d = (0, import_chunk_sng02qpc.k)(7), { message: n, args: c, onDone: a } = C;
  (0, import_chunk_8bkqeb5d.oo)(a, 0);
  let i;
  if (d[0] !== c) i = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [import_chunk_7r4ehpnw.xe.pointer, " /cd ", c] }), d[0] = c, d[1] = i;
  else i = d[1];
  let p;
  if (d[2] !== n) p = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: n }) }), d[2] = n, d[3] = p;
  else p = d[3];
  let l;
  if (d[4] !== i || d[5] !== p) l = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [i, p] }), d[4] = i, d[5] = p, d[6] = l;
  else l = d[6];
  return l;
}
function xwn(C) {
  let S = (0, import_chunk_sng02qpc.k)(55), { directory: n, trustRoot: c, disclosures: a, backstop: d, adding: i, isShort: p, takes: l, hint: f, onConfirm: h, onCancel: v } = C, s = d === void 0 ? false : d, w = p === void 0 ? false : p, b = (0, import_chunk_bs4h6795.I)(false), D = (0, import_chunk_8bkqeb5d.si)(), M = (0, import_chunk_z8dyhx9v.Zu)(), P = w ? 0 : 1, j;
  if (S[0] !== D || S[1] !== h || S[2] !== M || S[3] !== l) j = (we) => {
    if (b.current || (0, import_chunk_2t5dst6n.Ha)(D, M(), import_chunk_2t5dst6n._s) || l?.(we === h) === false) {
      return;
    }
    b.current = true, we();
  }, S[0] = D, S[1] = h, S[2] = M, S[3] = l, S[4] = j;
  else j = S[4];
  let T = j;
  const W = s ? "Now in a new directory:" : i ? "Adding a new directory:" : "Moving to a new directory:";
  let L;
  if (S[5] !== n) L = (0, import_chunk_xfj2cwfv.Ake)(n), S[5] = n, S[6] = L;
  else L = S[6];
  let H;
  if (S[7] !== L) H = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: L }), S[7] = L, S[8] = H;
  else H = S[8];
  let ee;
  if (S[9] !== c) ee = c != null && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["This directory is part of the repository at", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: (0, import_chunk_xfj2cwfv.Ake)(c) }), ". Trusting it trusts that whole repository, including its other worktrees and subdirectories."] }), S[9] = c, S[10] = ee;
  else ee = S[10];
  let oe;
  if (S[11] !== i || S[12] !== s || S[13] !== w) oe = s ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Its settings declare project permission rules and/or additional directories. They apply only if you trust this directory explicitly (it is trusted through a parent directory so far)." }) : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["This session hasn", "'", "t worked here before. Is this a directory you created or one you trust?"] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Claude Code", "'", "ll be able to read, edit, and execute files here.", i && " Its skills, commands, and agents load and can run commands, and so can the git settings of its repository. Your answer holds for this session.", i && !w && " Starting Claude Code in this directory and trusting it there lasts, and covers its whole repository or everything below it."] })] }), S[11] = i, S[12] = s, S[13] = w, S[14] = oe;
  else oe = S[14];
  let te;
  if (S[15] !== s || S[16] !== a) te = a !== void 0 && (0, import_chunk_mspgntr4.Ezs)(a, { backstop: s }) && (0, import_chunk_a46xeenj.e)(Ce, { disclosures: a, backstop: s }), S[15] = s, S[16] = a, S[17] = te;
  else te = S[17];
  let re;
  if (S[18] !== a?.settingsFiles) re = a?.settingsFiles ?? [], S[18] = a?.settingsFiles, S[19] = re;
  else re = S[19];
  let se;
  if (S[20] !== re) se = (0, import_chunk_a46xeenj.e)(import_chunk_yvvpnc06.h9t, { place: "directory", files: re }), S[20] = re, S[21] = se;
  else se = S[21];
  let Ie;
  if (S[22] === import_chunk_w1d7ygsk.R) Ie = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://code.claude.com/docs/en/security", children: "Security guide" }) }), S[22] = Ie;
  else Ie = S[22];
  let ne;
  if (S[23] !== se) ne = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [se, Ie] }), S[23] = se, S[24] = ne;
  else ne = S[24];
  const be = s ? $o : void 0, Se = s ? "Yes, trust it and apply them" : i ? "Yes, add it" : "Yes, move here", ke = s ? "No, keep them off" : i === void 0 ? "No, stay put" : i === "later" ? "No, leave it out" : "No, exit";
  let ie;
  if (S[25] !== T || S[26] !== h) ie = () => T(h), S[25] = T, S[26] = h, S[27] = ie;
  else ie = S[27];
  let de;
  if (S[28] !== T || S[29] !== v) de = () => T(v), S[28] = T, S[29] = v, S[30] = de;
  else de = S[30];
  const Me = i ? import_chunk_65494s25.qK : void 0;
  let ce;
  if (S[31] !== be || S[32] !== Se || S[33] !== ke || S[34] !== ie || S[35] !== de || S[36] !== Me) ce = (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { hideIndexes: true, disablePrintableKeybindings: true, cancelFirst: true, onUpFromFirstItem: be, focus: "cancel", confirmLabel: Se, cancelLabel: ke, onConfirm: ie, onCancel: de, windowMs: import_chunk_2t5dst6n._s, armAfterMs: Me }), S[31] = be, S[32] = Se, S[33] = ke, S[34] = ie, S[35] = de, S[36] = Me, S[37] = ce;
  else ce = S[37];
  const Pe = f === void 0;
  let le;
  if (S[38] !== f) le = f ?? (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "confirm" }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel" })] }), S[38] = f, S[39] = le;
  else le = S[39];
  let me;
  if (S[40] !== Pe || S[41] !== le) me = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: Pe, children: le }), S[40] = Pe, S[41] = le, S[42] = me;
  else me = S[42];
  let ue;
  if (S[43] !== P || S[44] !== ne || S[45] !== ce || S[46] !== me || S[47] !== H || S[48] !== ee || S[49] !== oe || S[50] !== te) ue = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: P, paddingTop: P, children: [H, ee, oe, te, ne, ce, me] }), S[43] = P, S[44] = ne, S[45] = ce, S[46] = me, S[47] = H, S[48] = ee, S[49] = oe, S[50] = te, S[51] = ue;
  else ue = S[51];
  let Je;
  if (S[52] !== ue || S[53] !== W) Je = (0, import_chunk_a46xeenj.e)(import_chunk_v65a0pbg.tl, { color: "warning", titleColor: "warning", title: W, children: ue }), S[52] = ue, S[53] = W, S[54] = Je;
  else Je = S[54];
  return Je;
}
var U = "To trust this folder, first make the window taller";
function A(C) {
  let i = (0, import_chunk_sng02qpc.k)(15), { frame: n, isShort: c, isCutOff: a } = JYn(), d = (0, import_chunk_6n6exvyx.rl)() && a, p;
  if (i[0] !== d) p = d && (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "warning", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [U, (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel" })] }) }), i[0] = d, i[1] = p;
  else p = i[1];
  let l;
  if (i[2] !== d) l = (f) => !f || !d, i[2] = d, i[3] = l;
  else l = i[3];
  const h = d ? U : void 0;
  let v;
  if (i[4] !== c || i[5] !== C || i[6] !== l || i[7] !== h) v = (0, import_chunk_a46xeenj.e)(xwn, { ...C, isShort: c, takes: l, hint: h }), i[4] = c, i[5] = C, i[6] = l, i[7] = h, i[8] = v;
  else v = i[8];
  let s;
  if (i[9] !== n || i[10] !== v) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: n, flexDirection: "column", flexShrink: 0, children: v }), i[9] = n, i[10] = v, i[11] = s;
  else s = i[11];
  let w;
  if (i[12] !== p || i[13] !== s) w = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [p, s] }), i[12] = p, i[13] = s, i[14] = w;
  else w = i[14];
  return w;
}
function Ce(C) {
  let l = (0, import_chunk_sng02qpc.k)(22), { disclosures: n, backstop: c } = C, { allowRules: a, additionalDirectories: d, hookSources: i, commandHelperSources: p } = n, f;
  if (l[0] !== a.rawCount || l[1] !== a.rules || l[2] !== a.sources) f = a.sources.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, color: "warning", children: [(0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "warning", withSpace: true }), "This directory pre-approves ", a.rawCount, " ", (0, import_chunk_7cfjrnwy.O)(a.rawCount, "tool permission", "tool permissions"), " ", "in ", (0, import_chunk_kvavrh0f.ow)(a.sources), ":", " ", (0, import_chunk_kvavrh0f.ow)(a.rules, 8)] }), l[0] = a.rawCount, l[1] = a.rules, l[2] = a.sources, l[3] = f;
  else f = l[3];
  let h;
  if (l[4] !== d.dirs || l[5] !== d.rawCount || l[6] !== d.sources) h = d.sources.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, color: "warning", children: [(0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "warning", withSpace: true }), "This directory grants access to ", d.rawCount, " ", "additional", " ", (0, import_chunk_7cfjrnwy.O)(d.rawCount, "directory", "directories"), " ", "in ", (0, import_chunk_kvavrh0f.ow)(d.sources), ":", " ", (0, import_chunk_kvavrh0f.ow)(d.dirs, 6)] }), l[4] = d.dirs, l[5] = d.rawCount, l[6] = d.sources, l[7] = h;
  else h = l[7];
  let v;
  if (l[8] !== c || l[9] !== i) v = !c && i.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, color: "warning", children: [(0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "warning", withSpace: true }), "This directory configures hooks that run commands, declared in", " ", (0, import_chunk_kvavrh0f.ow)(i)] }), l[8] = c, l[9] = i, l[10] = v;
  else v = l[10];
  let s;
  if (l[11] !== c || l[12] !== p) s = !c && p.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, color: "warning", children: [(0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "warning", withSpace: true }), "This directory runs commands on the session", "'", "s behalf (auth / header helpers), declared in ", (0, import_chunk_kvavrh0f.ow)(p)] }), l[11] = c, l[12] = p, l[13] = s;
  else s = l[13];
  const w = c ? "These apply to this session only if you trust it. Only proceed if you trust this configuration." : "These will apply to this session as soon as you move. Only proceed if you trust this configuration.";
  let b;
  if (l[14] !== w) b = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: w }), l[14] = w, l[15] = b;
  else b = l[15];
  let D;
  if (l[16] !== f || l[17] !== h || l[18] !== v || l[19] !== s || l[20] !== b) D = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [f, h, v, s, b] }), l[16] = f, l[17] = h, l[18] = v, l[19] = s, l[20] = b, l[21] = D;
  else D = l[21];
  return D;
}
async function s8l(C, n, c) {
  let a = (c ?? "").trim();
  if (!a) return (0, import_chunk_a46xeenj.e)(F, { message: "Usage: /cd <path>", args: "", onDone: () => C("Usage: /cd <path>") });
  let d = await (0, import_chunk_bqf1zbmm.CWo)(a, (0, import_chunk_bz1f2qnq.Z)(n));
  switch (d.result) {
    case "not_found": {
      let s = `Couldn't find a directory at ${import_chunk_d57v19zt.Re.bold(d.path)}.`;
      return (0, import_chunk_a46xeenj.e)(F, { message: s, args: a, onDone: () => C(s) });
    }
    case "not_a_directory": {
      let s = `${import_chunk_d57v19zt.Re.bold(d.path)} isn't a directory. Did you mean ${import_chunk_d57v19zt.Re.bold(d.parent)}?`;
      return (0, import_chunk_a46xeenj.e)(F, { message: s, args: a, onDone: () => C(s) });
    }
    case "same": {
      let s = `Already in ${import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)(d.directory))}.`;
      return (0, import_chunk_a46xeenj.e)(F, { message: s, args: a, onDone: () => C(s) });
    }
    case "blocked_by_rule": {
      let s = (0, import_chunk_bqf1zbmm.AWo)(d.directory, d.check, import_chunk_d57v19zt.Re.bold, { display: import_chunk_xfj2cwfv.wr });
      return (0, import_chunk_a46xeenj.e)(F, { message: s, args: a, onDone: () => C(s) });
    }
    case "ok":
      break;
  }
  let i = d.directory, p = false, l = async () => {
    let s;
    try {
      s = await (0, import_chunk_bqf1zbmm.Pkn)(n.session, i, "cd_command", { storageV5: n.storageV5 });
    } catch (b) {
      return (0, import_chunk_w578pjby.t)(`/cd relocate failed: ${b}`, { level: "error" }), C(`Couldn't move to ${import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)(i))}. The directory may no longer exist, or the session couldn't be moved. Staying in ${import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)((0, import_chunk_18rsj2ts.pe)()))}.`), null;
    }
    try {
      n.retireDepartedAdditionalDirectories?.(s.departedAdditionalDirectories);
    } catch (b) {
      (0, import_chunk_w578pjby.t)(`/cd: retiring the previous project's additional directories failed (continuing): ${b}`, { level: "error" });
    }
    let w = await uo(n);
    return p = (0, import_chunk_xfj2cwfv.qc)().bypassAutoSwitch.wasHeld === true && w.pendingServers.length > 0, { modelMessage: s.modelMessage, pending: p ? { ...w, pendingServers: [] } : w, projectGrantsGated: s.projectGrantsGated, gatedNotice: s.gatedNotice };
  }, f = async (s, w) => {
    if (await po(n), w?.persistFailed) (0, import_chunk_cqa9hrgx.m)("mcp_project_approval_dialog", "mcp_approval_persist_failed");
    else if (w) (0, import_chunk_cqa9hrgx.u)("mcp_project_approval_dialog");
    let D = [w?.persistFailed ? `Moved to ${import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)(i))}. One or more MCP server choices couldn't be saved (check permissions on .claude/settings.local.json), so you'll be asked again next time.` : `Moved to ${import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)(i))}`, p ? "MCP servers here that aren't approved yet stayed off \xB7 run claude here without bypass permissions to approve them" : void 0, import_chunk_ha393e1n.Ue.configLeftBehindRefusal()];
    C(D.filter((M) => M !== void 0).join(`
`), { display: "system", metaMessages: [s] });
  };
  if ((0, import_chunk_865at33z.Xk)(i)) {
    let s = await l();
    if (s === null) return null;
    if (s.projectGrantsGated) return (0, import_chunk_a46xeenj.e)(K, { outcome: s, onComplete: f });
    if (s.pending.pendingServers.length === 0) return await f(s.modelMessage), null;
    return (0, import_chunk_a46xeenj.e)(B, { pending: s.pending, onComplete: (w) => void f(s.modelMessage, w) });
  }
  let h = (0, import_chunk_2yx6c1y2.wv)((0, import_path.resolve)(i)), v;
  try {
    v = (0, import_chunk_mspgntr4.Vjr)(i);
  } catch (s) {
    (0, import_chunk_w578pjby.t)(`/cd: reading the target's project settings for the trust prompt failed: ${s}`, { level: "error" });
  }
  return (0, import_chunk_a46xeenj.e)(Cya, { directory: i, trustRoot: h != null && h !== (0, import_path.resolve)(i) ? h : void 0, disclosures: v, onConfirm: async () => (await (0, import_chunk_bqf1zbmm.TKe)(i, n.storageV5).catch((s) => {
    (0, import_chunk_w578pjby.t)(`/cd: persisting trust failed: ${s}`, { level: "error" });
  }), l()), onComplete: f, onCancel: () => {
    C(`Staying in ${import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)((0, import_chunk_18rsj2ts.pe)()))}`);
  } });
}
async function uo(C) {
  let n = { pendingServers: [], pluginServerNames: /* @__PURE__ */ new Set() };
  try {
    let c = await (0, import_chunk_tdn7rsbd.EWr)(C.storageV5);
    if (c.pendingServers.length > 0 && (0, import_chunk_cpdpk5r1.kXt)().length > 0) return (0, import_chunk_w578pjby.t)("/cd: project MCP servers await approval but a settings file has errors; leaving them pending", { level: "warn" }), n;
    return c;
  } catch (c) {
    return (0, import_chunk_w578pjby.t)(`/cd: collecting the new directory's project MCP servers failed (continuing without approvals): ${c}`, { level: "error" }), n;
  }
}
async function po(C) {
  try {
    await C.reloadPlugins?.();
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`/cd: refreshing plugins/MCP for the new directory failed (continuing): ${n}`, { level: "error" });
  }
}
function B(C) {
  let i = (0, import_chunk_sng02qpc.k)(11), { pending: n, onComplete: c } = C, [a, ...d] = n.pendingServers;
  if (a !== void 0 && d.length === 0) {
    let p2;
    if (i[0] !== a || i[1] !== n.pluginServerNames) p2 = n.pluginServerNames.has(a), i[0] = a, i[1] = n.pluginServerNames, i[2] = p2;
    else p2 = i[2];
    let l;
    if (i[3] !== c || i[4] !== a || i[5] !== p2) l = (0, import_chunk_a46xeenj.e)(import_chunk_tdn7rsbd.wWr, { serverName: a, isPluginServer: p2, onDone: c }), i[3] = c, i[4] = a, i[5] = p2, i[6] = l;
    else l = i[6];
    return l;
  }
  let p;
  if (i[7] !== c || i[8] !== n.pendingServers || i[9] !== n.pluginServerNames) p = (0, import_chunk_a46xeenj.e)(import_chunk_tdn7rsbd.kWr, { serverNames: n.pendingServers, pluginServerNames: n.pluginServerNames, onDone: c }), i[7] = c, i[8] = n.pendingServers, i[9] = n.pluginServerNames, i[10] = p;
  else p = i[10];
  return p;
}
function Cya(C) {
  let h = (0, import_chunk_sng02qpc.k)(18), { directory: n, trustRoot: c, disclosures: a, onConfirm: d, onComplete: i, onCancel: p } = C, [l, f] = (0, import_chunk_bs4h6795.y)(null);
  if (l !== null) {
    if (l.projectGrantsGated) {
      let v3;
      if (h[0] !== l || h[1] !== i) v3 = (0, import_chunk_a46xeenj.e)(K, { outcome: l, onComplete: i }), h[0] = l, h[1] = i, h[2] = v3;
      else v3 = h[2];
      return v3;
    }
    let v2;
    if (h[3] !== l.modelMessage || h[4] !== i) v2 = (s) => void i(l.modelMessage, s), h[3] = l.modelMessage, h[4] = i, h[5] = v2;
    else v2 = h[5];
    let w2;
    if (h[6] !== l.pending || h[7] !== v2) w2 = (0, import_chunk_a46xeenj.e)(B, { pending: l.pending, onComplete: v2 }), h[6] = l.pending, h[7] = v2, h[8] = w2;
    else w2 = h[8];
    return w2;
  }
  let v;
  if (h[9] !== i || h[10] !== d) v = () => {
    d().then((b) => {
      if (b === null) {
        return;
      }
      if (!b.projectGrantsGated && b.pending.pendingServers.length === 0) {
        return i(b.modelMessage);
      }
      f(b);
    });
  }, h[9] = i, h[10] = d, h[11] = v;
  else v = h[11];
  let w;
  if (h[12] !== n || h[13] !== a || h[14] !== p || h[15] !== v || h[16] !== c) w = (0, import_chunk_a46xeenj.e)(A, { directory: n, trustRoot: c, disclosures: a, onConfirm: v, onCancel: p }), h[12] = n, h[13] = a, h[14] = p, h[15] = v, h[16] = c, h[17] = w;
  else w = h[17];
  return w;
}
function K(C) {
  let h = (0, import_chunk_sng02qpc.k)(25), { outcome: n, onComplete: c } = C, { storageV5: a } = (0, import_chunk_3jkk3v3z.Ve)(), [d, i] = (0, import_chunk_bs4h6795.y)(n.modelMessage), [p, l] = (0, import_chunk_bs4h6795.y)(false), [f] = (0, import_chunk_bs4h6795.y)(import_chunk_18rsj2ts.pe), v;
  if (h[0] !== f) v = () => (0, import_chunk_2yx6c1y2.wv)(f), h[0] = f, h[1] = v;
  else v = h[1];
  let [s] = (0, import_chunk_bs4h6795.y)(v), [w] = (0, import_chunk_bs4h6795.y)(xo);
  if (!p) {
    let b2;
    if (h[2] !== c || h[3] !== n.pending.pendingServers.length) b2 = (D) => {
      if (i(D), l(true), n.pending.pendingServers.length === 0) c(D);
    }, h[2] = c, h[3] = n.pending.pendingServers.length, h[4] = b2;
    else b2 = h[4];
    let M = b2;
    const P2 = s != null && s !== f ? s : void 0;
    let S;
    if (h[5] !== f || h[6] !== M || h[7] !== n || h[8] !== a) S = () => {
      (0, import_chunk_bqf1zbmm.TKe)(f, a).catch(Go).then(() => {
        ;
        try {
          (0, import_chunk_bqf1zbmm.RWo)();
        } catch (j2) {
          let we = j2;
          (0, import_chunk_w578pjby.t)(`/cd: re-applying the project settings after the trust change failed: ${we}`, { level: "error" });
        }
        M((0, import_chunk_bqf1zbmm.xWo)(n));
      });
    }, h[5] = f, h[6] = M, h[7] = n, h[8] = a, h[9] = S;
    else S = h[9];
    let j;
    if (h[10] !== M || h[11] !== n.modelMessage) j = () => M(n.modelMessage), h[10] = M, h[11] = n.modelMessage, h[12] = j;
    else j = h[12];
    let T;
    if (h[13] !== f || h[14] !== w || h[15] !== P2 || h[16] !== S || h[17] !== j) T = (0, import_chunk_a46xeenj.e)(A, { backstop: true, directory: f, trustRoot: P2, disclosures: w, onConfirm: S, onCancel: j }), h[13] = f, h[14] = w, h[15] = P2, h[16] = S, h[17] = j, h[18] = T;
    else T = h[18];
    return T;
  }
  if (n.pending.pendingServers.length === 0) {
    return null;
  }
  let b;
  if (h[19] !== d || h[20] !== c) b = (W) => void c(d, W), h[19] = d, h[20] = c, h[21] = b;
  else b = h[21];
  let P;
  if (h[22] !== n.pending || h[23] !== b) P = (0, import_chunk_a46xeenj.e)(B, { pending: n.pending, onComplete: b }), h[22] = n.pending, h[23] = b, h[24] = P;
  else P = h[24];
  return P;
}
