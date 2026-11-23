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
var chunk_twt3b6g7_exports = {};
__export(chunk_twt3b6g7_exports, {
  MXl: () => MXl,
  oFa: () => oFa,
  t8r: () => t8r
});
module.exports = __toCommonJS(chunk_twt3b6g7_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0f977ndx = require("/$bunfs/root/chunk-0f977ndx.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_wvxk15ee = require("/$bunfs/root/chunk-wvxk15ee.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function O() {
  return (0, import_chunk_865at33z.b)("tengu_breezy_acorn", true);
}
var y = () => require("/$bunfs/root/chunk-17bg5ykc.js"), t8r = { arm: null }, S = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ created: (0, import_chunk_adx6804h.c)({ verdict: (0, import_chunk_adx6804h.v)("allow"), minted: (0, import_chunk_adx6804h.n)() }), frame: (0, import_chunk_adx6804h.c)({ slug: (0, import_chunk_adx6804h.n)().regex(import_chunk_r8478wtb.yo) }) }));
function oFa(r) {
  let d = [...(0, import_chunk_wvxk15ee.Tgr)(r)].at(-1);
  if (d === void 0 || !(0, import_chunk_wvxk15ee.HAi)(d)) return null;
  let e = S().safeParse((0, import_chunk_0jve1fep.et)((0, import_chunk_7cfjrnwy.Ir)(d), false));
  if (!e.success) return null;
  let { created: t, frame: _ } = e.data;
  return _.slug === t.minted.slice(t.minted.lastIndexOf("/") + 1) ? _.slug : null;
}
function MXl(r) {
  if (r.mcpInfo !== void 0) r.mcpInfo = { ...r.mcpInfo, docsConnector: true };
  if (r.mcpInfo?.toolName !== import_chunk_qdcbcsg7.oJe) return;
  let d = r.call;
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) {
    if ((0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_3t7ve0wy.ta)() || r.mcpInfo.scope !== "claudeai") return;
    r.call = async (e, t, _, g, k, E) => {
      let { accountEpoch: h, conversationEpoch: w } = (0, import_chunk_0rkwgmhx.se)(), f = await d.call(r, e, t, _, g, k, E);
      try {
        if (!(0, import_chunk_ma3kja9f.T)(e.container) || !(0, import_chunk_ma3kja9f.T)(e.container.create)) return f;
        let a = (0, import_chunk_0rkwgmhx.se)(), o = oFa(f.data);
        if (o === null) (0, import_chunk_cqa9hrgx.l)("artifact_docs_create_open", "no_doc_in_answer");
        else if (a.accountEpoch === h && a.conversationEpoch === w) y()?.openCreatedDoc(t, o);
        else (0, import_chunk_cqa9hrgx.l)("artifact_docs_create_open", "scope_changed");
      } catch (a) {
        (0, import_chunk_cqa9hrgx.m)("artifact_docs_create_open", "threw"), (0, import_chunk_k449cc64.i)(a);
      }
      return f;
    };
    return;
  }
  r.call = async (e, t, _, g, k, E) => {
    let { accountEpoch: h, conversationEpoch: w } = (0, import_chunk_0rkwgmhx.se)(), f = (0, import_chunk_wvxk15ee.vgr)(r, e, t) && !(0, import_chunk_bz1f2qnq.TN)(t) && (0, import_chunk_bz1f2qnq.Z)(t).mode === "plan" && (0, import_chunk_ma3kja9f.T)(e.container) && (0, import_chunk_ma3kja9f.T)(e.container.create) && typeof e.container.create.name === "string" ? { id: void 0, title: e.container.create.name } : void 0;
    if (f !== void 0) t.setToolPermissionContext((o) => o.mode === "plan" && o.planDoc === void 0 ? { ...o, planDoc: f } : o);
    let a = await d.call(r, e, t, _, g, k, E).catch((o) => {
      if (f !== void 0) (0, import_chunk_cqa9hrgx.l)("plan_doc", "not_created");
      throw o;
    });
    try {
      if (!(0, import_chunk_ma3kja9f.T)(e.container) || !("create" in e.container)) return a;
      let o = (0, import_chunk_0rkwgmhx.se)(), C = oFa(a.data);
      if (f !== void 0 && C === null) (0, import_chunk_cqa9hrgx.l)("plan_doc", "not_created");
      if (C === null || o.accountEpoch !== h || o.conversationEpoch !== w) return a;
      if (f !== void 0) t.setToolPermissionContext((A) => A.planDoc === f ? { ...A, planDoc: { ...f, id: C } } : A), (0, import_chunk_cqa9hrgx.u)("plan_doc");
      if (!O()) return (0, import_chunk_cqa9hrgx.l)("artifact_docs_create_wake", "flag_off"), a;
      if (!(0, import_chunk_z1z1qsrb.z1i)()) return (0, import_chunk_cqa9hrgx.l)("artifact_docs_create_wake", "artifact_tool_off"), a;
      if (t8r.arm === null) import_chunk_a7h1jnra.jbe.loadWriters?.();
      if (!(0, import_chunk_0f977ndx.mA)()) return (0, import_chunk_cqa9hrgx.l)("artifact_docs_create_wake", "comments_off"), a;
      let D = t8r.arm?.(t, C);
      if (D) (0, import_chunk_cqa9hrgx.u)("artifact_docs_create_wake");
      else (0, import_chunk_cqa9hrgx.l)("artifact_docs_create_wake", D === void 0 ? "no_wake_arm" : "not_armed");
    } catch (o) {
      (0, import_chunk_cqa9hrgx.m)("artifact_docs_create_wake", "threw"), (0, import_chunk_k449cc64.i)(o);
    }
    return a;
  };
}
