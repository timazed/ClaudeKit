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
var chunk_f889b6rg_exports = {};
__export(chunk_f889b6rg_exports, {
  FUo: () => FUo,
  cWr: () => cWr
});
module.exports = __toCommonJS(chunk_f889b6rg_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_an17w9qc = require("/$bunfs/root/chunk-an17w9qc.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function me() {
  (0, import_chunk_y53wbr8a.a)("tengu_claude_md_includes_dialog_shown", {});
}
function ge(Ce, be) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-middle", children: ["  ", (0, import_chunk_xfj2cwfv.wr)(Ce.path)] }, be);
}
function cWr(m, p, n) {
  (0, import_chunk_865at33z.kw)((s) => ({ ...s, hasClaudeMdExternalIncludesApproved: m, hasClaudeMdExternalIncludesWarningShown: true }), n), (0, import_chunk_y53wbr8a.a)(m ? "tengu_claude_md_external_includes_dialog_accepted" : "tengu_claude_md_external_includes_dialog_declined", { source: (0, import_chunk_78g0060s.f)(p) });
}
function FUo(m) {
  let t = (0, import_chunk_sng02qpc.k)(37), { onDone: p, isStandaloneDialog: n, externalIncludes: s } = m, { storageV5: S } = (0, import_chunk_3jkk3v3z.Ve)(), T;
  if (t[0] === import_chunk_w1d7ygsk.R) T = [], t[0] = T;
  else T = t[0];
  (0, import_chunk_bs4h6795.H)(me, T);
  let d = (0, import_chunk_z8dyhx9v.Ns)(), { refusedWithin: i, noteRefused: c, epoch: we } = (0, import_chunk_z8dyhx9v.po)(), Y;
  if (t[1] !== d || t[2] !== c || t[3] !== i) Y = function g2() {
    if (d() || i()) {
      return c(), true;
    }
    return false;
  }, t[1] = d, t[2] = c, t[3] = i, t[4] = Y;
  else Y = t[4];
  let g = Y, v = (0, import_chunk_z8dyhx9v.Zu)(), A = (0, import_chunk_z8dyhx9v.jf)(we), q;
  if (t[5] !== s) q = s ?? [], t[5] = s, t[6] = q;
  else q = t[6];
  let u = q, z;
  if (t[7] !== u) z = u.length <= import_chunk_an17w9qc.$$ ? u : u.slice(0, import_chunk_an17w9qc.$$ - 2), t[7] = u, t[8] = z;
  else z = t[8];
  let J = z, L = u.slice(J.length), X = (0, import_chunk_bs4h6795.I)(false), Z;
  if (t[9] !== d || t[10] !== c || t[11] !== p || t[12] !== i || t[13] !== S) Z = (ye) => {
    if (d() || i()) {
      c();
      return;
    }
    if (X.current) {
      return;
    }
    X.current = true, cWr(ye === "yes", "dialog", S), p();
  }, t[9] = d, t[10] = c, t[11] = p, t[12] = i, t[13] = S, t[14] = Z;
  else Z = t[14];
  let l = Z, ee;
  if (t[15] !== l) ee = () => {
    l("no");
  }, t[15] = l, t[16] = ee;
  else ee = t[16];
  let j = ee;
  const W = import_chunk_vs99e3g5.Oe, Ie = "Allow external CLAUDE.md file imports?", xe = "warning", M = !n, P = !n;
  let w;
  if (t[17] === import_chunk_w1d7ygsk.R) w = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "This project's CLAUDE.md or .claude/rules imports files outside the current working directory. Never allow this for third-party repositories." }), t[17] = w;
  else w = t[17];
  const U = s && s.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "External imports:" }), J.map(ge), L.length > 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: ["  ", "\u2026 +", L.length, " ", (0, import_chunk_7cfjrnwy.O)(L.length, "import"), " not shown."] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: ["  ", "Yes covers those too, plus any this project adds later."] })] }) : null] });
  let te;
  if (t[18] === import_chunk_w1d7ygsk.R) te = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://code.claude.com/docs/en/security" }), " "] }), t[18] = te;
  else te = t[18];
  let y, x;
  if (t[19] !== l) y = () => l("yes"), x = () => l("no"), t[19] = l, t[20] = y, t[21] = x;
  else y = t[20], x = t[21];
  let C;
  if (t[22] !== A.remountKey || t[23] !== g || t[24] !== v || t[25] !== y || t[26] !== x) C = (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { refuseInput: g, openedAt: v, hideIndexes: true, disablePrintableKeybindings: true, confirmLabel: "Yes, allow external imports", cancelLabel: "No, disable external imports", cancelFirst: true, focus: "cancel", onConfirm: y, onCancel: x }, A.remountKey), t[22] = A.remountKey, t[23] = g, t[24] = v, t[25] = y, t[26] = x, t[27] = C;
  else C = t[27];
  let oe;
  if (t[28] !== W || t[29] !== j || t[30] !== n || t[31] !== P || t[32] !== w || t[33] !== U || t[34] !== C || t[35] !== M) oe = (0, import_chunk_a46xeenj.o)(W, { title: Ie, color: xe, onCancel: j, exitOnCtrlCD: n, hideBorder: M, hideInputGuide: P, children: [w, U, te, C] }), t[28] = W, t[29] = j, t[30] = n, t[31] = P, t[32] = w, t[33] = U, t[34] = C, t[35] = M, t[36] = oe;
  else oe = t[36];
  return oe;
}
