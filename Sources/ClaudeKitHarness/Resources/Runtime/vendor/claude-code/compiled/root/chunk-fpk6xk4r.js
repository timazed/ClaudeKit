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
var chunk_fpk6xk4r_exports = {};
__export(chunk_fpk6xk4r_exports, {
  aNa: () => aNa,
  dNa: () => dNa,
  lNa: () => lNa
});
module.exports = __toCommonJS(chunk_fpk6xk4r_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_mj4h1wdm = require("/$bunfs/root/chunk-mj4h1wdm.js");
var import_chunk_4xgvg9z4 = require("/$bunfs/root/chunk-4xgvg9z4.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_fs = require("fs");
var import_path = require("path");
var l = /* @__PURE__ */ new Set(["model", "system", "tools", "max_tokens", "thinking", "output_config", "context_management", "metadata"]), R = /* @__PURE__ */ new Set([...l, "thread"]), D = / cc_(?:prev_req|prompt_id|turn_origin|prompt_index|turn_index|workload|prev_msg|prev_prompt_index|prev_turn_index)=[^;"\\]*;/g, k = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g, w = /"(?:trigger|keep)":\{"type":"tool_uses","value":\d+\}/g, A = /* @__PURE__ */ new Map([["metadata", k], ["context_management", w]]), E = 5;
class h {
  recording = true;
}
var H = new import_chunk_2904xtvq.j(() => new h());
function P() {
  return H.of((0, import_chunk_f9x2f6cx.N)().host).recording;
}
function aNa(t) {
  let { stateByAgent: n, retiredInitHashes: e } = (0, import_chunk_30a5awzz.eo)().dumpPrompts, o = n.get(t)?.writtenInitDataHash;
  if (n.delete(t), o !== void 0) e.set(t, o);
}
function lNa() {
  (0, import_chunk_30a5awzz.eo)().dumpPrompts.stateByAgent.clear(), (0, import_chunk_30a5awzz.eo)().dumpPrompts.retiredInitHashes.clear();
}
function v(t) {
  return;
}
function x(t) {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "dump-prompts", `${t ?? (0, import_chunk_f9x2f6cx.W)()}.jsonl`);
}
function I(t, n, e, o) {
  (0, import_chunk_30a5awzz.eo)().dumpPrompts.appendQueue.run(t, async () => {
    if (e) {
      if ((await e.storageV5.append(e.key, [{ data: n + `
` }])).ok) o();
      return;
    }
    if ((0, import_chunk_f9x2f6cx.Y)()) return;
    await import_fs.promises.mkdir((0, import_path.dirname)(t), { recursive: true }), await import_fs.promises.appendFile(t, n + `
`), o();
  }).catch(() => {
  });
}
function T(t, n, e, o, a) {
  try {
    return;
  } catch {
  } finally {
    e.dumpInFlight = false;
  }
}
function dNa(t, n) {
  if (!P()) return import_chunk_gq1dr8pm.ire;
  let e = x(t), o = (0, import_chunk_m15w38ag.ne)() && n !== void 0 ? { storageV5: n, key: import_chunk_hkvzj051.at.log(t, "apiDump") } : void 0, a = async (c, i) => {
    let { stateByAgent: m, retiredInitHashes: d } = (0, import_chunk_30a5awzz.eo)().dumpPrompts, s = d.get(t), u = m.get(t) ?? { initialized: s !== void 0, lastInitDataHash: s ?? "", writtenInitDataHash: s, dumpInFlight: false };
    if (m.set(t, u), i?.method === "POST" && i.body && !u.dumpInFlight) {
      u.dumpInFlight = true;
      let r = (/* @__PURE__ */ new Date()).toISOString();
      setImmediate(T, Buffer.isBuffer(i.body) ? i.body.toString() : i.body, r, u, e, o);
    }
    return (0, import_chunk_gq1dr8pm.ire)(c, i);
  };
  return (0, import_chunk_bzyb60p0.qeo)(a), a;
}
function F(t) {
  let n = t.get("thread");
  if (n === void 0) return false;
  let e = (0, import_chunk_w578pjby.Cs)(n);
  if (typeof e !== "object" || e === null || !("type" in e) || e.type !== "continue") return false;
  if (!t.has("tools")) return true;
  let o = (0, import_chunk_w578pjby.Cs)(t.get("system") ?? "null");
  return Array.isArray(o) && o.length > 0 && o.every((a) => (0, import_chunk_4xgvg9z4.I7)(a));
}
