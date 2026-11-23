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
var chunk_79wnrn0j_exports = {};
__export(chunk_79wnrn0j_exports, {
  Epa: () => Epa,
  K$s: () => K$s,
  V$s: () => V$s
});
module.exports = __toCommonJS(chunk_79wnrn0j_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_g07j811j = require("/$bunfs/root/chunk-g07j811j.js");
var import_chunk_r3e8vdzv = require("/$bunfs/root/chunk-r3e8vdzv.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var y = 3, g = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("type", [(0, import_chunk_xfj2cwfv.D6n)(), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("control_response"), response: (0, import_chunk_adx6804h.$t)({ request_id: (0, import_chunk_adx6804h.n)() }) })]));
function V$s(a) {
  let f = a.payload;
  if (a.source !== "worker" || f.type !== "control_request") return;
  let r = (0, import_chunk_g07j811j.XUs)(f, "can_use_tool");
  try {
    return r === null ? void 0 : (0, import_chunk_w578pjby.Ka)(r);
  } catch {
    return;
  }
}
function K$s(a, f, r) {
  let s = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set();
  for (let i of a) {
    let e = V$s(i);
    if (e !== void 0 && f(e)) {
      if (!s.has(e.request_id) && !m.has(e.request_id)) s.set(e.request_id, e);
      continue;
    }
    if (i.source === "worker" && i.payload.type === "result") {
      r?.(s.values());
      continue;
    }
    let o = g().safeParse(i.payload).data;
    if (o === void 0) continue;
    let u = o.type === "control_cancel_request" ? i.source === "worker" : !(0, import_chunk_g07j811j.X$r)(o.response, s.get(o.response.request_id)?.request.tool_name), q = o.type === "control_cancel_request" ? o.request_id : o.response.request_id;
    if (u && s.delete(q)) m.add(q);
  }
  return [...s.values()].slice(-import_chunk_g07j811j.p1o);
}
async function Epa(a, f) {
  let r = a.map((e) => (0, import_chunk_0jve1fep.Le)(e) ? (0, import_chunk_r3e8vdzv.oj)(e) : void 0), s = new Set(r);
  s.delete(void 0);
  let m = [];
  try {
    let e;
    for (let o = 0; s.size > 0 && o < y; o += 1) {
      let u = await f(e);
      if (u === null || (u.droppedRows ?? 0) > 0) break;
      m.unshift(...u.events);
      for (let q of u.events) {
        let _ = q.payload;
        if (_.type === "control_request" && q.source === "worker") s.delete(String(_.request_id));
      }
      if (u.firstId === null) break;
      e = u.firstId;
    }
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[openPermissionRequests] stored events not read: ${(0, import_chunk_jv7av99m.d)(e)}`);
  }
  if (s.size > 0) (0, import_chunk_cqa9hrgx.l)("remote_permission_seed_adoption", "requests_not_read");
  let i = K$s(m, (e) => r.includes(e.request_id));
  for (let { request: e } of i) delete e.server_policy_ask_only;
  return { requests: i, isAll: r.length > 0 && r.every((e) => i.some((o) => o.request_id === e)) };
}
