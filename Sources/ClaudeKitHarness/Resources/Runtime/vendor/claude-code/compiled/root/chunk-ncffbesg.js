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
var chunk_ncffbesg_exports = {};
__export(chunk_ncffbesg_exports, {
  $5t: () => $5t
});
module.exports = __toCommonJS(chunk_ncffbesg_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_3pqaw3hv = require("/$bunfs/root/chunk-3pqaw3hv.js");
var import_chunk_j8vrv0q8 = require("/$bunfs/root/chunk-j8vrv0q8.js");
var import_chunk_7a5j4de6 = require("/$bunfs/root/chunk-7a5j4de6.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_cr2vz9cc = require("/$bunfs/root/chunk-cr2vz9cc.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function te(ne) {
  return ne + 1;
}
function re(se) {
  return se + 1;
}
function h(D) {
  let i = (0, import_chunk_sng02qpc.k)(25), { onDone: C } = D, { credentials: n, storageV5: t } = (0, import_chunk_3jkk3v3z.Ve)(), m = (0, import_chunk_z8dyhx9v.Ns)(import_chunk_2t5dst6n.K3), { refusedWithin: w, noteRefused: O } = (0, import_chunk_z8dyhx9v.po)(), T = (0, import_chunk_bs4h6795.I)(false), V = (0, import_chunk_bs4h6795.I)(false), [s, B] = (0, import_chunk_bs4h6795.y)(0), J;
  if (i[0] !== s) J = [s], i[0] = s, i[1] = J;
  else J = i[1];
  (0, import_chunk_8bkqeb5d.oo)(a, s > 0 ? import_chunk_2t5dst6n.K3 : null, J);
  const x = s > 0;
  let P;
  if (i[2] === import_chunk_w1d7ygsk.R) P = () => B(te), i[2] = P;
  else P = i[2];
  let X;
  if (i[3] !== x) X = { isActive: x, asksNothing: true, onDrop: P }, i[3] = x, i[4] = X;
  else X = i[4];
  let N = (0, import_chunk_j8vrv0q8.P2)(X);
  function a() {
    if (!T.current) T.current = true, C("Browser opened to manage usage credits.");
  }
  let j;
  if (i[5] !== a || i[6] !== n || i[7] !== m || i[8] !== O || i[9] !== w || i[10] !== t) j = function u2() {
    if (m() || w()) {
      O();
      return;
    }
    if ((0, import_chunk_k449cc64.wt)()) {
      a();
      return;
    }
    if (B(re), V.current) {
      return;
    }
    V.current = true, (0, import_chunk_bzyb60p0.Y4e)(n, t).then((W) => W === "unknown" ? void 0 : (0, import_chunk_3pqaw3hv.NFo)(W !== "disabled", t));
  }, i[5] = a, i[6] = n, i[7] = m, i[8] = O, i[9] = w, i[10] = t, i[11] = j;
  else j = i[11];
  let u = j, q = (0, import_chunk_865at33z.Sn)()?.emailAddress;
  const b = s > 0 ? "" : "continue";
  let l;
  if (i[12] !== u || i[13] !== b) l = [{ action: "confirm:yes", hint: b, run: u }], i[12] = u, i[13] = b, i[14] = l;
  else l = i[14];
  let d;
  if (i[15] !== s) d = s > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Checking usage credits\u2026" }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Continue here once you're done in your browser." }), i[15] = s, i[16] = d;
  else d = i[16];
  let z;
  if (i[17] === import_chunk_w1d7ygsk.R) z = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["If your browser didn't open, visit", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: import_chunk_865at33z.Jme, children: import_chunk_865at33z._Rr })] }), i[17] = z;
  else z = i[17];
  let f;
  if (i[18] !== a || i[19] !== l || i[20] !== d) f = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Usage credits", subtitle: q && `logged in as ${q}`, onCancel: a, escapeAction: "close", keys: l, children: [d, z] }), i[18] = a, i[19] = l, i[20] = d, i[21] = f;
  else f = i[21];
  let F;
  if (i[22] !== N || i[23] !== f) F = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", onPaste: N, children: f }), i[22] = N, i[23] = f, i[24] = F;
  else F = i[24];
  return F;
}
async function $5t(D, C) {
  let n = (0, import_chunk_0tkterak.gMe)(D);
  if ((0, import_chunk_cr2vz9cc.zer)()) return (0, import_chunk_a46xeenj.e)(import_chunk_3pqaw3hv.$1r, { onDone: n });
  let t = await (0, import_chunk_cr2vz9cc.U_e)({ openInBrowser: true }, C.credentials);
  if (t.type === "message") return n(t.value), null;
  if (t.type === "confirm-admin-request") {
    if ((0, import_chunk_865at33z.Qt)()) return n(import_chunk_cr2vz9cc.b7t), null;
    return (0, import_chunk_a46xeenj.e)(import_chunk_3pqaw3hv.F1r, { extraUsage: t.extraUsage, wouldTakeAnswer: () => true, onDone: n });
  }
  let m = (0, import_chunk_865at33z.or)();
  if (m === "team" || m === "enterprise") return n(t.opened ? `Opened ${t.url} in your browser to manage usage credits for your organization.` : `Visit ${t.url} to manage usage credits for your organization.`), null;
  if (!t.opened) return n(`Visit ${t.url} to manage usage credits.`), null;
  return (0, import_chunk_a46xeenj.e)(h, { onDone: n });
}
