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
var chunk_gvzh3pxp_exports = {};
__export(chunk_gvzh3pxp_exports, {
  $Ri: () => $Ri,
  Bil: () => Bil,
  Gil: () => Gil,
  Gon: () => Gon,
  Kq: () => Kq,
  Vq: () => Vq,
  Wil: () => Wil,
  _9e: () => _9e,
  jil: () => jil,
  zWe: () => zWe,
  zil: () => zil
});
module.exports = __toCommonJS(chunk_gvzh3pxp_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_nq3exp5d = require("/$bunfs/root/chunk-nq3exp5d.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function R(e) {
  if ((0, import_chunk_3f4m74y6.xn)(e.name) !== import_chunk_2mwshd9r.Cp) return;
  let n = require("/$bunfs/root/chunk-4edw0pz2.js");
  return n.refusesRemoteBrowserCallOutsideChecks(e.name) ? Promise.reject(new import_chunk_jv7av99m.A(n.REMOTE_BROWSER_OUTSIDE_CHECKS_REFUSED, "cloud browser called outside its permission check")) : void 0;
}
function w(e, n, t, u) {
  if ((0, import_chunk_qyhf6bts.g2t)(e.config)) return require("/$bunfs/root/chunk-9kgqeb81.js").refuseRawCallByCopy(e, n, t, { signal: u?.signal, deadline: u?.timeout == null ? void 0 : Date.now() + u.timeout });
  return;
}
function Bil(e, n) {
  if ((0, import_chunk_qyhf6bts.g2t)(e?.config)) {
    let t = require("/$bunfs/root/chunk-9kgqeb81.js");
    return n instanceof t.RawCallRefusedError ? n.refusal : void 0;
  }
  return;
}
var C = Symbol("no time is left of the timeout");
function g(e, n) {
  if (n <= 0 || e?.timeout == null || e.resetTimeoutOnProgress === true || e.maxTotalTimeout !== void 0) return e;
  let t = e.timeout - n;
  return t < 1 ? C : { ...e, timeout: t };
}
function M(e, n) {
  return require("/$bunfs/root/chunk-9kgqeb81.js").noTimeLeftRefusal(e, n);
}
function l(e, n) {
  let t = (0, import_chunk_ze4kt7fs.A7)(e) ?? ((0, import_chunk_r3kja8v6.ue)() ? require("/$bunfs/root/chunk-ftarv1gy.js").inProcessBuiltinRefusal(e, n) : void 0);
  return t && Promise.reject(t);
}
async function Vq(e, n, t, u = false, c = () => false) {
  let { name: d, arguments: o } = n, i = l(e, u ? n.name : void 0) ?? R(e) ?? ((0, import_chunk_bz1f2qnq.Dle)({ name: d, mcpInfo: { serverName: e.name, toolName: d } }) ? Promise.reject(new import_chunk_jv7av99m.A("Nothing was saved or uploaded. This browser tool needs a permission check on each call, and this way of calling it skips that check. Only an ordinary tool call can run it.", "browser pane file tool called outside its permission check")) : void 0), r = i === void 0 ? w(e, d, o, t) : void 0, a = r === void 0 ? n : { ...n, name: d, ..."arguments" in n && { arguments: r.sent ?? o } };
  if (r !== void 0) await r.held;
  let f = r === void 0 ? t : g(t, r.waited());
  if (f === C) throw M(e, d);
  let s = await (i ?? require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule().invokeToolRaw(e.client, a, f));
  if (e.config !== void 0 && (0, import_chunk_5ft9yxne.T7)(e.config, s) && !c(s)) (0, import_chunk_5ft9yxne.Gwt)([s.content, s.structuredContent]), (0, import_chunk_5ft9yxne.Q6)(s);
  if ((0, import_chunk_nq3exp5d.qDe)(s.structuredContent)) throw new import_chunk_yz5b8aaa.EOr(e.name, a.name);
  if (s._meta?.[import_chunk_nq3exp5d.mpo] !== void 0 && !(Array.isArray(s.content) && s.content.some((y) => y.type === "text"))) throw new import_chunk_yz5b8aaa.vOr(e.name, a.name);
  return s;
}
async function _9e(e, n, t, u) {
  let c = await (l(e) ?? require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule().readResourceRaw(e.client, n, t, u));
  if (e.config !== void 0 && (0, import_chunk_5ft9yxne.T7)(e.config, c)) (0, import_chunk_5ft9yxne.Gwt)(c.contents), (0, import_chunk_5ft9yxne.Q6)(c);
  return c;
}
async function Gon(e, n) {
  let t = await (l(e) ?? require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule().listToolsRaw(e.client, n, e.config));
  if (e.config !== void 0 && (0, import_chunk_5ft9yxne.T7)(e.config, t)) (0, import_chunk_5ft9yxne.Q6)(t);
  return t;
}
var T = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({}));
function $Ri(e, n, t) {
  let u = (o, i = t) => (0, import_chunk_qdcbcsg7.Ap)(e.client).request(o, T(), { ...i, cacheMode: "bypass" }), c = () => {
    let { params: o } = n, i = o?.name, r = o?.arguments, a = w(e, typeof i === "string" ? i : "", r, t);
    if (a === void 0) return;
    let f = { ...n, ...o !== void 0 && { params: { ...o, ..."name" in o && { name: i }, ..."arguments" in o && { arguments: a.sent ?? r } } } };
    return a.held.then(() => {
      let s = g(t, a.waited());
      if (s === C) throw M(e, typeof i === "string" ? i : "");
      return u(f, s);
    });
  };
  return (l(e) ?? (n.method === "tools/call" ? R(e) ?? c() : void 0) ?? u(n)).then((o) => {
    let { config: i } = e;
    if (i === void 0 || !(0, import_chunk_5ft9yxne.T7)(i, o)) return o;
    let { method: r } = n;
    if (r === "resources/list" || r === "resources/templates/list") {
      for (let a of [o.resources, o.resourceTemplates]) if (Array.isArray(a)) (0, import_chunk_5ft9yxne.vsn)(i, a);
    } else if (r !== "tools/list" && r !== "prompts/list") (0, import_chunk_5ft9yxne.Gwt)(o);
    return (0, import_chunk_5ft9yxne.Q6)(o), o;
  });
}
function Wil(e) {
  return (0, import_chunk_qdcbcsg7.mt)().clientsBuiltWithTasks.get((0, import_chunk_qdcbcsg7.Ap)(e.client));
}
function Kq(e, n, t) {
  require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule().onMcpNotification(e, n, t);
}
function zWe(e, n) {
  (0, import_chunk_qdcbcsg7.Ap)(e.client).onclose = n;
}
function jil(e, n) {
  let t = (0, import_chunk_qdcbcsg7.Ap)(e.client), u = t.onclose;
  t.onclose = () => {
    u?.(), n();
  };
}
function Gil(e, n) {
  return l(e) ?? (0, import_chunk_qdcbcsg7.Ap)(e.client).notification(n);
}
function zil(e, n) {
  (0, import_chunk_qdcbcsg7.Ap)(e.client)?.transport?.onmessage?.(n);
}
