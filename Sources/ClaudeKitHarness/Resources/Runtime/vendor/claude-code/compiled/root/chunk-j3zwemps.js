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
var chunk_j3zwemps_exports = {};
__export(chunk_j3zwemps_exports, {
  LUr: () => LUr,
  NUr: () => NUr,
  R9l: () => R9l,
  d8n: () => d8n,
  jha: () => jha,
  s2l: () => s2l
});
module.exports = __toCommonJS(chunk_j3zwemps_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_0dep9bd9 = require("/$bunfs/root/chunk-0dep9bd9.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_6n3q0gvw = require("/$bunfs/root/chunk-6n3q0gvw.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_bxvzmae8 = require("/$bunfs/root/chunk-bxvzmae8.js");
var import_chunk_v7fhe4dc = require("/$bunfs/root/chunk-v7fhe4dc.js");
var import_chunk_9j9ynkjd = require("/$bunfs/root/chunk-9j9ynkjd.js");
var import_chunk_fcw9a1xz = require("/$bunfs/root/chunk-fcw9a1xz.js");
var import_chunk_7a5j4de6 = require("/$bunfs/root/chunk-7a5j4de6.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_5yhrnn87 = require("/$bunfs/root/chunk-5yhrnn87.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var Ye = "tengu_mellow_prism";
function X(a) {
  return a.type === "assistant" || (0, import_chunk_865at33z.On)(a);
}
function J() {
  return !(0, import_chunk_bzyb60p0.El)() && (0, import_chunk_bzyb60p0.Zmi)();
}
function Z() {
  return (0, import_chunk_865at33z.b)(Ye, true) !== false;
}
var be = "Claude is still working in this terminal. Wait for it to finish, then pick the session again.";
async function d8n(a, c) {
  let n = (0, import_chunk_vhsysgcd.WO)(a).findLast(X);
  if (n === void 0 || !J() || c.log.some((i) => i.uuid === n.uuid) || !Z()) return;
  if ((0, import_chunk_vhsysgcd.Lae)(a)) throw (0, import_chunk_cqa9hrgx.l)("teleport_pull_new_session", "turn_running"), new import_chunk_jv7av99m.Wf(be, be);
  let s = (0, import_chunk_f9x2f6cx.en)(), u = s.namesOfConversation(), C = s.connectorDataFromEarlierDownload();
  await (0, import_chunk_cqa9hrgx.qo)("teleport_pull_new_session", async () => {
    let { clearConversation: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-zwwcjptr.js")));
    try {
      for await (let S of i({ ...a, clearedSessionTitle: (0, import_chunk_bzyb60p0.eS)((0, import_chunk_f9x2f6cx.W)()), isolationLatch: void 0, keepsCwd: true })) a.onQueryEvent?.(S);
    } finally {
      if (s.record(u), C) s.noteConnectorDataFromEarlierDownload();
    }
    if (a.isolationLatch?.current) (0, import_chunk_bzyb60p0.mCe)(a.isolationLatch.current, a.storageV5);
  });
}
function gn(ke, wn) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: ke }, wn);
}
function un(A) {
  return A.transcripts[(0, import_chunk_f9x2f6cx.ot)()]?.messages.some(X);
}
var ee = "Working directory has changes";
function se(a) {
  let i = (0, import_chunk_sng02qpc.k)(38), { onStashAndContinue: c, onCancel: n, cancelQuits: s } = a, [u, C] = (0, import_chunk_bs4h6795.y)(null), S;
  if (i[0] !== u) S = u !== null ? [...u.tracked, ...u.untracked] : [], i[0] = u, i[1] = S;
  else S = i[1];
  let m = S, [ce, A] = (0, import_chunk_bs4h6795.y)(true), [w, O] = (0, import_chunk_bs4h6795.y)(false), [v, p] = (0, import_chunk_bs4h6795.y)(null), de, U;
  if (i[2] === import_chunk_w1d7ygsk.R) de = () => {
    (async () => {
      ;
      try {
        let { cwd: ge } = (0, import_chunk_bzyb60p0.JZt)();
        let Ie = await (0, import_chunk_w5s307zm.Rxt)(ge, (0, import_chunk_kypvvv9j.su)(ge, void 0, { userLocale: true }));
        C(Ie);
      } catch (f2) {
        let d = f2;
        let I = d instanceof Error ? d.message : String(d);
        (0, import_chunk_w578pjby.t)(`Error getting changed files: ${I}`, { level: "error" }), p(d instanceof import_chunk_jv7av99m.Wf ? d.message : "Couldn't list changed files");
      }
      A(false);
    })();
  }, U = [], i[2] = de, i[3] = U;
  else de = i[2], U = i[3];
  (0, import_chunk_bs4h6795.H)(de, U);
  let f;
  if (i[4] !== c) f = async () => {
    O(true);
    ;
    try {
      if ((0, import_chunk_w578pjby.t)("Stashing changes before teleport..."), !await (0, import_chunk_bzyb60p0.WQo)("Teleport auto-stash", (0, import_chunk_bzyb60p0.JZt)())) {
        p("Couldn't stash changes"), O(false);
        return;
      }
      (0, import_chunk_w578pjby.t)("Successfully stashed changes");
    } catch (h2) {
      let L = h2;
      let Fe = L instanceof Error ? L.message : String(L);
      (0, import_chunk_w578pjby.t)(`Error stashing changes: ${Fe}`, { level: "error" }), p(L instanceof import_chunk_jv7av99m.Wf ? L.message : "Couldn't stash changes"), O(false);
      return;
    }
    await c().finally(() => O(false));
  }, i[4] = c, i[5] = f;
  else f = i[5];
  let ue = f;
  if (ce || v) {
    let h2;
    if (i[6] !== n) h2 = [{ action: "confirm:no", hint: "cancel", run: n }], i[6] = n, i[7] = h2;
    else h2 = i[7];
    let E2;
    if (i[8] !== v) E2 = v ? (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "error", children: v }) : (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Checking git status\u2026" }), i[8] = v, i[9] = E2;
    else E2 = i[9];
    let F2;
    if (i[10] !== s || i[11] !== n || i[12] !== h2 || i[13] !== E2) F2 = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: ee, onCancel: n, escapeAction: "cancel", exitOnCtrlCD: s, isCancelActive: s, keys: h2, children: E2 }), i[10] = s, i[11] = n, i[12] = h2, i[13] = E2, i[14] = F2;
    else F2 = i[14];
    return F2;
  }
  let me = m.length > 8, B = w && !s;
  const h = B ? "stashing" : "asking", E = B ? Qe : n, F = s || B, V = B ? "Teleport continues when the stash finishes\u2026" : void 0;
  let _;
  if (i[15] !== s || i[16] !== w) _ = !s && !w && (0, import_chunk_a46xeenj.e)(LUr, {}), i[15] = s, i[16] = w, i[17] = _;
  else _ = i[17];
  let D;
  if (i[18] === import_chunk_w1d7ygsk.R) D = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Teleport switches git branches, and these files have changes:" }), i[18] = D;
  else D = i[18];
  let T;
  if (i[19] !== m || i[20] !== me) T = m.length > 0 ? me ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [m.length, " files changed"] }) : m.map(gn) : (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: "No changes detected" }), i[19] = m, i[20] = me, i[21] = T;
  else T = i[21];
  let P;
  if (i[22] !== T) P = (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: T }), i[22] = T, i[23] = P;
  else P = i[23];
  let Y;
  if (i[24] === import_chunk_w1d7ygsk.R) Y = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Stash these changes and continue?" }), i[24] = Y;
  else Y = i[24];
  let x;
  if (i[25] !== s || i[26] !== ue || i[27] !== n || i[28] !== w) x = w ? (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Stashing changes\u2026" }) : (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { confirmLabel: "Stash changes and continue", cancelLabel: s ? "Exit" : "Cancel", onConfirm: () => void ue(), onCancel: n }), i[25] = s, i[26] = ue, i[27] = n, i[28] = w, i[29] = x;
  else x = i[29];
  let j;
  if (i[30] !== P || i[31] !== x || i[32] !== h || i[33] !== E || i[34] !== F || i[35] !== V || i[36] !== _) j = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: ee, onCancel: E, exitOnCtrlCD: F, inputGuide: V, children: [_, D, P, Y, x] }, h), i[30] = P, i[31] = x, i[32] = h, i[33] = E, i[34] = F, i[35] = V, i[36] = _, i[37] = j;
  else j = i[37];
  return j;
}
function LUr() {
  let c = (0, import_chunk_sng02qpc.k)(8), a = (0, import_chunk_74h6kcya.Ps)(un), n;
  if (c[0] !== a) n = a && J(), c[0] = a, c[1] = n;
  else n = c[1];
  let s = n, u;
  if (c[2] !== s) u = s && Z(), c[2] = s, c[3] = u;
  else u = c[3];
  let C = u;
  const i = a && !C ? " and replaces the session you're in, which /resume won't bring back." : ".", S = C && " The session you're in is kept, and /resume brings it back.", m = s && !C && " To keep this session resumable, cancel, run /clear, then run /teleport again.";
  let ce;
  if (c[4] !== i || c[5] !== S || c[6] !== m) ce = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["The cloud session you pick comes to this computer", i, S, m] }), c[4] = i, c[5] = S, c[6] = m, c[7] = ce;
  else ce = c[7];
  return ce;
}
function Qe() {
}
function En() {
  return (0, import_chunk_bzyb60p0.Da)(0);
}
var Ae = /* @__PURE__ */ new Set();
function NUr(a) {
  let p = (0, import_chunk_sng02qpc.k)(40), { onComplete: c, onCancel: n, errorsToIgnore: s, onSettingsReload: u } = a, C = s === void 0 ? Ae : s, [i, S] = (0, import_chunk_bs4h6795.y)(null), [m, ce] = (0, import_chunk_bs4h6795.y)(false), [A, w] = (0, import_chunk_bs4h6795.y)(false), { storageV5: O, credentials: v } = (0, import_chunk_3jkk3v3z.Ve)(), de;
  if (p[0] !== v || p[1] !== C || p[2] !== c) de = async () => {
    let U = await (0, import_chunk_sjqze7qg.dpr)(v, C);
    if (U.size === 0) {
      c();
      return;
    }
    if (U.has("needsLogin")) S("needsLogin");
    else if (U.has("needsGitStash")) S("needsGitStash");
  }, p[0] = v, p[1] = C, p[2] = c, p[3] = de;
  else de = p[3];
  let f = de, ge, Ie;
  if (p[4] !== f) ge = () => {
    f();
  }, Ie = [f], p[4] = f, p[5] = ge, p[6] = Ie;
  else ge = p[5], Ie = p[6];
  (0, import_chunk_bs4h6795.H)(ge, Ie);
  let d = n === void 0, I = n ?? En, h;
  if (p[7] !== f) h = () => {
    w(false), f();
  }, p[7] = f, p[8] = h;
  else h = p[8];
  let L = h, Fe;
  if (p[9] !== d || p[10] !== v || p[11] !== u || p[12] !== O) Fe = () => {
    let ue = (0, import_chunk_bxvzmae8.LOt)({ showSecurityDialog: d ? void 0 : import_chunk_v7fhe4dc.BVe, storageV5: O, credentials: v });
    u?.(ue);
  }, p[9] = d, p[10] = v, p[11] = u, p[12] = O, p[13] = Fe;
  else Fe = p[13];
  let E = Fe, F;
  if (p[14] === import_chunk_w1d7ygsk.R) F = () => {
    w(true);
  }, p[14] = F;
  else F = p[14];
  let me = F, B;
  if (p[15] !== f) B = () => f(), p[15] = f, p[16] = B;
  else B = p[16];
  let V = B, { entries: _, exitState: D } = (0, import_chunk_vs99e3g5.sW)(n, void 0, n !== void 0 && A);
  if (!i) {
    return null;
  }
  switch (i) {
    case "needsGitStash": {
      let T;
      if (p[17] !== d || p[18] !== V || p[19] !== I) T = (0, import_chunk_a46xeenj.e)(se, { onStashAndContinue: V, onCancel: I, cancelQuits: d }), p[17] = d, p[18] = V, p[19] = I, p[20] = T;
      else T = p[20];
      return T;
    }
    case "needsLogin": {
      let T;
      if (p[21] !== L || p[22] !== E) T = (0, import_chunk_a46xeenj.e)(import_chunk_bxvzmae8.mZe, { onDone: L, onOrgDocumentsReload: E, onSavingChange: ce, mode: "login", forceLoginMethod: "claudeai" }), p[21] = L, p[22] = E, p[23] = T;
      else T = p[23];
      let P = T;
      const Y = A ? L : I;
      let x;
      if (p[24] !== d || p[25] !== m || p[26] !== D.keyName || p[27] !== D.pending) x = D.pending ? `Press ${D.keyName} again to ${m ? "close" : "cancel"}` : m ? (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "ctrl+c ctrl+c", action: d ? "exit" : "close" }) : void 0, p[24] = d, p[25] = m, p[26] = D.keyName, p[27] = D.pending, p[28] = x;
      else x = p[28];
      let j;
      if (p[29] !== d || p[30] !== A || p[31] !== _ || p[32] !== I || p[33] !== P) j = A ? d ? P : (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.zi, { claimFocus: true, flexDirection: "column", bindings: _, children: P }) : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Teleport needs a claude.ai account." }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Your Claude subscription will be used by Claude Code." })] }), (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { confirmLabel: "Sign in with Claude account", cancelLabel: d ? "Exit" : "Cancel", onConfirm: me, onCancel: I })] }), p[29] = d, p[30] = A, p[31] = _, p[32] = I, p[33] = P, p[34] = j;
      else j = p[34];
      let ke;
      if (p[35] !== d || p[36] !== Y || p[37] !== x || p[38] !== j) ke = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: "Sign in to Claude", onCancel: Y, exitOnCtrlCD: d, inputGuide: x, children: j }), p[35] = d, p[36] = Y, p[37] = x, p[38] = j, p[39] = ke;
      else ke = p[39];
      return ke;
    }
  }
}
var je = 5e3;
function jha(a) {
  let s = (0, import_chunk_sng02qpc.k)(5), { reload: c, onDone: n } = a;
  (0, import_chunk_8bkqeb5d.oo)(n, je);
  let u, C;
  if (s[0] !== n || s[1] !== c) u = () => {
    let i = true;
    let S = () => {
      if (i) n();
    };
    return c.then(S, S), () => {
      i = false;
    };
  }, C = [c, n], s[0] = n, s[1] = c, s[2] = u, s[3] = C;
  else u = s[2], C = s[3];
  (0, import_chunk_bs4h6795.H)(u, C);
  let m;
  if (s[4] === import_chunk_w1d7ygsk.R) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingX: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Loading your organization's managed settings\u2026" }) }), s[4] = m;
  else m = s[4];
  return m;
}
function s2l(a) {
  return (0, import_chunk_0dep9bd9.g8t)({ interactive: true, afterSignIn: true, showBlockedScreen: () => Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bddm1jfb.js"))).then((c) => c.showOrgConfigBlockedScreen, () => {
    return;
  }), printMessage: async (c) => {
    let { endInkWithError: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-m6kff2db.js")));
    await n(a, c);
  } });
}
async function R9l(a, c) {
  let n;
  if (await (0, import_chunk_6n3q0gvw.i9t)(a, [(s) => (0, import_chunk_a46xeenj.e)(import_chunk_9j9ynkjd.Ebn, { children: (0, import_chunk_a46xeenj.e)(NUr, { errorsToIgnore: c, onComplete: () => s(), onSettingsReload: (u) => {
    n = u;
  } }) }), (s) => n === void 0 ? null : (0, import_chunk_a46xeenj.e)(import_chunk_9j9ynkjd.Ebn, { children: (0, import_chunk_a46xeenj.e)(jha, { reload: n, onDone: () => s() }) })], { session: (0, import_chunk_f9x2f6cx.N)() }), n !== void 0) await s2l(a);
}
