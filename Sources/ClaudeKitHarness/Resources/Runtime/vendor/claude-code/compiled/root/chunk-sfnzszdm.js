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
var chunk_sfnzszdm_exports = {};
__export(chunk_sfnzszdm_exports, {
  m8n: () => m8n
});
module.exports = __toCommonJS(chunk_sfnzszdm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_4wtfvxk7 = require("/$bunfs/root/chunk-4wtfvxk7.js");
var import_chunk_xm0vb5jq = require("/$bunfs/root/chunk-xm0vb5jq.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_hn8k40x7 = require("/$bunfs/root/chunk-hn8k40x7.js");
var import_chunk_gjgbprt5 = require("/$bunfs/root/chunk-gjgbprt5.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function T() {
  return { provider: (0, import_chunk_zhr7rpv7.ve)(), awsRegion: (0, import_chunk_xfj2cwfv.iAt)(), vertexRegion: (0, import_chunk_2gtmjt3y.X3n)(), vertexProjectId: import_chunk_c203g5kd.s.ANTHROPIC_VERTEX_PROJECT_ID ?? "", accountDigest: (0, import_chunk_myvyhcm0.Zn)([(0, import_chunk_ch6jxpf8.Bee)("AWS_PROFILE"), import_chunk_c203g5kd.s.AWS_BEARER_TOKEN_BEDROCK, import_chunk_c203g5kd.s.AWS_ACCESS_KEY_ID, import_chunk_c203g5kd.s.GOOGLE_APPLICATION_CREDENTIALS].map((n) => n ?? "").join(`
`)) };
}
function O(n, m) {
  let c = T(), p = n.provider === m && c.provider === n.provider && c.awsRegion === n.awsRegion && c.vertexRegion === n.vertexRegion && c.vertexProjectId === n.vertexProjectId && c.accountDigest === n.accountDigest;
  return (0, import_chunk_w578pjby.t)(`Provider-setup restart: ${p ? "carrying" : "dropping"} the model pick (launched on ${n.provider} ${n.awsRegion}/${n.vertexRegion}/${n.vertexProjectId || "no-project"}, now ${c.provider} ${c.awsRegion}/${c.vertexRegion}/${c.vertexProjectId || "no-project"}${c.accountDigest === n.accountDigest ? "" : ", credentials changed"}, target ${m})`), p;
}
var S = "Your settings are saved. Restart Claude Code to apply them.";
async function b(n, m, c) {
  try {
    if ((0, import_chunk_865at33z.Qt)()) return `A background session can't restart itself. ${S}`;
    if ((0, import_chunk_rb36kwbn.pk)() !== null) return `Claude can't restart itself from inside the agents view. ${S}`;
    let p = L(n);
    if (p !== void 0) return p;
    if ((0, import_chunk_xfj2cwfv.nn)()) return;
    if (await (0, import_chunk_4wtfvxk7.qve)(), await (0, import_chunk_4wtfvxk7.oq)((0, import_chunk_vhsysgcd.WO)(n), n.storageV5), (0, import_chunk_xfj2cwfv.nn)()) return;
    let f = L(n);
    if (f !== void 0) return f;
    let v = (0, import_chunk_bz1f2qnq.Z)(n), C = await (0, import_chunk_4wtfvxk7.Wte)((0, import_chunk_vhsysgcd.WO)(n), "relaunch", { responseStreaming: (0, import_chunk_vhsysgcd.Lae)(n) }, n.storageV5);
    await (0, import_chunk_4wtfvxk7.Get)(C, { freshIfNoTranscript: true, extraArgs: [...(0, import_chunk_gjgbprt5.D$e)(v, (0, import_chunk_bz1f2qnq.URe)(n), { carryModel: O(c, m) }), ...(0, import_chunk_gjgbprt5.L$e)(v, (0, import_chunk_f9x2f6cx.zEe)())], proactivity: { proactivityLevel: n.getProactivityLevel(), toolPermissionContext: v }, env: (0, import_chunk_qbrmmydq.Z9)() }, n.storageV5);
    return;
  } catch (p) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(p)), `Couldn't restart Claude Code (${(0, import_chunk_jv7av99m.d)(p)}). ${S}`;
  }
}
function L(n) {
  let m = (0, import_chunk_gjgbprt5.sie)((0, import_chunk_bz1f2qnq.Z)(n), (0, import_chunk_f9x2f6cx.S2)());
  if (m.length > 0) return `This session has restrictions a restart can't carry over (${m.join("; ")}). ${S}`;
  if ((0, import_chunk_hn8k40x7.$_e)(n.taskRegistry.all())) return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${S}`;
  return;
}
function m8n(n) {
  let u = (0, import_chunk_sng02qpc.k)(21), { Wizard: m, cancelledEvent: c, targetProvider: p, onDone: f, context: v } = n, [C, ee] = (0, import_chunk_bs4h6795.y)(null), [_] = (0, import_chunk_bs4h6795.y)(T), A = (0, import_chunk_bs4h6795.I)(false), [w, F] = (0, import_chunk_bs4h6795.y)(false), N;
  if (u[0] !== v || u[1] !== _ || u[2] !== f || u[3] !== p) N = () => {
    if (A.current) {
      return;
    }
    A.current = true, F(true), b(v, p, _).then((V) => {
      if (V !== void 0) A.current = false, F(false), f(V, { display: "system" });
    });
  }, u[0] = v, u[1] = _, u[2] = f, u[3] = p, u[4] = N;
  else N = u[4];
  const W = C !== null;
  let z;
  if (u[5] !== W) z = { context: "Confirmation", isActive: W }, u[5] = W, u[6] = z;
  else z = u[6];
  if ((0, import_chunk_6fvsq616.In)("confirm:yes", N, z), C !== null) {
    let P2;
    if (u[7] !== C) P2 = (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "success", children: C }), u[7] = C, u[8] = P2;
    else P2 = u[8];
    let l2;
    if (u[9] !== w) l2 = w ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Restarting Claude Code\u2026" }) : (0, import_chunk_a46xeenj.e)(import_chunk_xm0vb5jq.SP, { action: "restart Claude Code" }), u[9] = w, u[10] = l2;
    else l2 = u[10];
    let E2;
    if (u[11] !== P2 || u[12] !== l2) E2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, marginTop: 1, children: [P2, l2] }), u[11] = P2, u[12] = l2, u[13] = E2;
    else E2 = u[13];
    return E2;
  }
  let P;
  if (u[14] === import_chunk_w1d7ygsk.R) P = (re) => ee(re), u[14] = P;
  else P = u[14];
  let l;
  if (u[15] !== c || u[16] !== f) l = () => {
    (0, import_chunk_y53wbr8a.a)(c, {}), f();
  }, u[15] = c, u[16] = f, u[17] = l;
  else l = u[17];
  let E;
  if (u[18] !== m || u[19] !== l) E = (0, import_chunk_a46xeenj.e)(m, { onComplete: P, onCancel: l }), u[18] = m, u[19] = l, u[20] = E;
  else E = u[20];
  return E;
}
