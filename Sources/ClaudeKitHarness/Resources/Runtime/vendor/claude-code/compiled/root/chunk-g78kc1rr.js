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
var chunk_g78kc1rr_exports = {};
__export(chunk_g78kc1rr_exports, {
  $Fn: () => $Fn,
  AMi: () => AMi,
  QQ: () => QQ
});
module.exports = __toCommonJS(chunk_g78kc1rr_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_5qhr9bm2 = require("/$bunfs/root/chunk-5qhr9bm2.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var a = "claudecode/agentId", f = "claudecode/agentType", c = "claudecode/isObserver", u = 128, d = 64, m = "subagent";
function QQ(t) {
  let { name: e, config: n } = t;
  if (e !== import_chunk_epy4sc29.Ll) return false;
  return (0, import_chunk_qdcbcsg7.Pl)(n) || n.scope === "dynamic" && "url" in n && typeof n.url === "string" && (0, import_chunk_2mwshd9r.MOo)(n.url);
}
function $Fn(t) {
  let { config: e } = t;
  return QQ(t) || e.scope === "dynamic" && "url" in e && typeof e.url === "string" && (0, import_chunk_2mwshd9r.rLl)(e.url);
}
function C(t) {
  let { name: e, config: n } = t;
  return e === import_chunk_qdcbcsg7.mB && n.type === "http" && (0, import_chunk_5qhr9bm2.FLi)(e, n.url) !== void 0 && (0, import_chunk_5qhr9bm2.$Li)(e, n.url) !== void 0 && (0, import_chunk_865at33z._Pr)(new URL(n.url)) && !$Fn(t);
}
function AMi(t, e) {
  let n = (0, import_chunk_865at33z.Kk)(e.agentId, e.agentContext);
  if (n === void 0) return {};
  if (!(QQ(t) || C(t))) {
    if ($Fn(t)) return { [a]: m, ...g(n, e) && { [c]: true } };
    if (t.config.scope === "dynamic" && t.config.type === "http" && (0, import_chunk_2mwshd9r.sLl)(t.config.url)) return g(n, e) ? { [c]: true } : {};
    return (0, import_chunk_865at33z.sPe)(t) ? { [a]: n } : {};
  }
  let r = (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_kx2fp6pc.$c)(e.agentType ?? ""), u);
  return { [a]: n, ...r !== "" && { [f]: r }, ...g(n, e) && { [c]: true } };
}
function g(t, { agentContext: e, taskRegistry: n }) {
  let r = [t], s = /* @__PURE__ */ new Set();
  for (let o = r.pop(); o !== void 0; o = r.pop()) {
    if (s.has(o)) continue;
    if (s.size >= d) return true;
    s.add(o);
    let i = n.get(o);
    if (i !== void 0 && (0, import_chunk_z6hn62tj.Kf)(i)) return true;
    if (i !== void 0 && "parentAgentId" in i && typeof i.parentAgentId === "string") r.push(i.parentAgentId);
    if (!(0, import_chunk_865at33z.mp)(e)) {
      let p = o === e.agentId ? e.parentAgentId : o === t ? e.agentId : void 0;
      if (p !== void 0) r.push(p);
    }
  }
  return false;
}
