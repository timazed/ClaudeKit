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
var chunk_agr674q5_exports = {};
__export(chunk_agr674q5_exports, {
  S5t: () => S5t
});
module.exports = __toCommonJS(chunk_agr674q5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_dfcadv0m = require("/$bunfs/root/chunk-dfcadv0m.js");
var import_chunk_j3zwemps = require("/$bunfs/root/chunk-j3zwemps.js");
var import_chunk_7a5j4de6 = require("/$bunfs/root/chunk-7a5j4de6.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_5yhrnn87 = require("/$bunfs/root/chunk-5yhrnn87.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function q(h, n) {
  let m = (0, import_chunk_sng02qpc.k)(8), [l, T] = (0, import_chunk_bs4h6795.y)(false), [S, I] = (0, import_chunk_bs4h6795.y)(null), [L, E] = (0, import_chunk_bs4h6795.y)(null), B;
  if (m[0] !== n || m[1] !== h) B = async (c) => {
    T(true), I(null), E(c), (0, import_chunk_y53wbr8a.a)("tengu_teleport_resume_session", { source: (0, import_chunk_78g0060s.f)(h), session_id: (0, import_chunk_49zxha55.Ce)(c.id) });
    ;
    try {
      let i = await (0, import_chunk_cqa9hrgx.qo)("teleport_resume", () => (0, import_chunk_bzyb60p0.vyt)(c.id));
      if (h === "localCommand") await (0, import_chunk_r60bafc1.eUn)(void 0);
      return await n?.(i), (0, import_chunk_f9x2f6cx.B3n)({ sessionId: c.id }), T(false), i;
    } catch (C2) {
      let A = C2;
      let v = { message: (0, import_chunk_jv7av99m.d)(A).split(`
`).map(import_chunk_7cfjrnwy.lC).join(`
`), isOperationError: A instanceof import_chunk_jv7av99m.Wf };
      return I(v), T(false), null;
    }
  }, m[0] = n, m[1] = h, m[2] = B;
  else B = m[2];
  let x = B, C;
  if (m[3] !== S || m[4] !== l || m[5] !== x || m[6] !== L) C = { resumeSession: x, isResuming: l, error: S, selectedSession: L }, m[3] = S, m[4] = l, m[5] = x, m[6] = L, m[7] = C;
  else C = m[7];
  return C;
}
(0, import_chunk_bs4h6795.G)();
var pe = "Updated", ue = "Origin", fe = "Remote Control", oe = Math.max(ue.length, fe.length), O = "  ";
function te({ notice: h, onSelect: n, onCancel: l, isEmbedded: T = false, onSettingsReload: S }) {
  let { rows: I, columns: L } = (0, import_chunk_6n6exvyx.Qo)((0, import_chunk_6n6exvyx.qe)()), E = (0, import_chunk_6n6exvyx.rl)() ? import_chunk_dfcadv0m.IF : import_chunk_dfcadv0m.wS, [m, B] = (0, import_chunk_bs4h6795.y)([]), [c, C] = (0, import_chunk_bs4h6795.y)(null), [i, A] = (0, import_chunk_bs4h6795.y)(true), [v, x] = (0, import_chunk_bs4h6795.y)(null), [ie, F] = (0, import_chunk_bs4h6795.y)(false), [W, j] = (0, import_chunk_bs4h6795.y)(false), b = (0, import_chunk_bs4h6795.ye)(async () => {
    try {
      A(true), x(null);
      let s = await (0, import_chunk_3hr8g93j.u0r)();
      C(s), (0, import_chunk_w578pjby.t)(`Current repository: ${s || "not detected"}`);
      let p = await (0, import_chunk_865at33z.u4i)(), N = p;
      if (s) N = p.filter((D) => {
        if (!D.repo) return false;
        return `${D.repo.owner.login}/${D.repo.name}` === s;
      }), (0, import_chunk_w578pjby.t)(`Filtered ${N.length} sessions for repo ${s} from ${p.length} total`);
      let Y = [...N].sort((D, Z) => {
        let Re = new Date(D.updated_at);
        return new Date(Z.updated_at).getTime() - Re.getTime();
      });
      B(Y);
    } catch (s) {
      let p = s instanceof Error ? s.message : String(s);
      (0, import_chunk_w578pjby.t)(`Error loading code sessions: ${p}`), x(s instanceof Error && s.name === "CloudSessionAccessError" ? s.message : Ne(p));
    } finally {
      A(false), F(false);
    }
  }, []);
  (0, import_chunk_6fvsq616.In)("confirm:no", l, { context: "Confirmation" });
  let z = (0, import_chunk_bs4h6795.ye)(() => {
    j(true), b();
  }, [j, b]);
  if (!W) return (0, import_chunk_a46xeenj.e)(import_chunk_j3zwemps.NUr, { onComplete: z, onCancel: T ? l : void 0, onSettingsReload: S });
  let U = m.map((s) => ({ ...s, timeString: (0, import_chunk_f64qna2j.xoe)(new Date(s.updated_at)) })), P = Math.max(pe.length, ...U.map((s) => s.timeString.length)), M = m.some((s) => s.environment_kind === "bridge"), w = M ? oe + O.length : 0, u = String(m.length).length + 2, _ = L - 2 * E - 2 - u - P - O.length - w, V = U.map(({ timeString: s, title: p, id: N, environment_kind: Y }) => {
    let D = s.padEnd(P, " ");
    return { label: (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [D, O, M && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (Y === "bridge" ? fe : "").padEnd(oe, " ") }), O] }), (0, import_chunk_f64qna2j.Tt)((0, import_chunk_xfj2cwfv.Ba)(p).replace(/\s+/g, " ").trim(), _)] }), value: N };
  });
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", onKeyDown: (s) => {
    if (s.ctrl && s.key === "r" && v !== null) s.preventDefault(), F(true), b();
  }, children: (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Teleport", subtitle: c, onCancel: l, escapeAction: "cancel", enterAction: m.length > 0 ? "resume" : void 0, isCancelActive: false, keys: [{ action: "confirm:no", hint: "cancel", run: l }, { action: "app:interrupt", hint: "", run: l }, ...v !== null ? [{ on: "ctrl+r", hint: "retry", run: () => false }] : []], children: [h, i ? (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Loading cloud sessions\u2026", subtitle: ie && "Retrying\u2026" }) : v !== null ? (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "error", detail: v, children: "Couldn't load cloud sessions" }) : m.length === 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { hint: "Start one with claude --cloud", children: "No cloud sessions yet" }) : (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [T && (0, import_chunk_a46xeenj.e)(import_chunk_j3zwemps.LUr, {}), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginLeft: 2 + u, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, children: [pe.padEnd(P, " "), O, M && ue.padEnd(oe, " ") + O, "Session title"] }) }), (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { overflowHint: "count", visibleOptionCount: T ? 5 : Math.max(1, I - 11), options: V, onChange: (s) => {
    let p = m.find((N) => N.id === s);
    if (p) n(p);
  } })] })] }) });
}
function Ne(h) {
  let n = h.toLowerCase();
  if (n.includes("fetch") || n.includes("network") || n.includes("timeout")) return "Check your internet connection.";
  if (n.includes("auth") || n.includes("token") || n.includes("permission") || n.includes("oauth") || n.includes("not authenticated") || n.includes("/login") || n.includes("console account") || n.includes("403")) return 'Teleport requires a Claude account. Run /login and select "Claude account with subscription".';
  if (n.includes("api") || n.includes("rate limit") || n.includes("500") || n.includes("529")) return "The server ran into a problem.";
  return "Claude Code ran into a problem.";
}
function S5t(h) {
  let i = (0, import_chunk_sng02qpc.k)(27), { onComplete: n, onCancel: l, isEmbedded: T, source: S, onSettingsReload: I, beforeComplete: L } = h, E = T === void 0 ? false : T, { resumeSession: m, isResuming: B, error: c, selectedSession: C } = q(S, L), A, v;
  if (i[0] !== S) A = () => {
    (0, import_chunk_y53wbr8a.a)("tengu_teleport_started", { source: (0, import_chunk_78g0060s.f)(S) });
  }, v = [S], i[0] = S, i[1] = A, i[2] = v;
  else A = i[1], v = i[2];
  (0, import_chunk_bs4h6795.H)(A, v);
  let x;
  if (i[3] !== n || i[4] !== m) x = async (ie) => {
    let F = await m(ie);
    if (F) n(F);
  }, i[3] = n, i[4] = m, i[5] = x;
  else x = i[5];
  let W = x, j;
  if (i[6] !== l) j = () => {
    (0, import_chunk_y53wbr8a.a)("tengu_teleport_cancelled", {}), l();
  }, i[6] = l, i[7] = j;
  else j = i[7];
  let b = j;
  const z = !!c && !E;
  let U;
  if (i[8] !== z) U = { context: "Global", isActive: z }, i[8] = z, i[9] = U;
  else U = i[9];
  (0, import_chunk_6fvsq616.In)("app:interrupt", b, U);
  const P = !!c && !E;
  let M;
  if (i[10] !== P) M = { context: "Confirmation", isActive: P }, i[10] = P, i[11] = M;
  else M = i[11];
  if ((0, import_chunk_6fvsq616.In)("confirm:no", b, M), B && C) {
    let w2;
    if (i[12] !== C.title) w2 = (0, import_chunk_xfj2cwfv.Ba)(C.title), i[12] = C.title, i[13] = w2;
    else w2 = i[13];
    let u2;
    if (i[14] !== w2) u2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", padding: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Resuming session\u2026", subtitle: w2 }) }), i[14] = w2, i[15] = u2;
    else u2 = i[15];
    return u2;
  }
  let w;
  if (i[16] !== c) w = c && (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "error", detail: c.message, children: "Couldn't resume the session" }), i[16] = c, i[17] = w;
  else w = i[17];
  let _ = w;
  if (_ && !E) {
    let u2;
    if (i[18] === import_chunk_w1d7ygsk.R) u2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel" }) }), i[18] = u2;
    else u2 = i[18];
    let V;
    if (i[19] !== _) V = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, padding: 1, children: [_, u2] }), i[19] = _, i[20] = V;
    else V = i[20];
    return V;
  }
  let u;
  if (i[21] !== _ || i[22] !== b || i[23] !== W || i[24] !== E || i[25] !== I) u = (0, import_chunk_a46xeenj.e)(te, { notice: _, onSelect: W, onCancel: b, isEmbedded: E, onSettingsReload: I }), i[21] = _, i[22] = b, i[23] = W, i[24] = E, i[25] = I, i[26] = u;
  else u = i[26];
  return u;
}
