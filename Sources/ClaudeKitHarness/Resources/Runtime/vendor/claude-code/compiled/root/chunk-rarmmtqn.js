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
var chunk_rarmmtqn_exports = {};
__export(chunk_rarmmtqn_exports, {
  A$s: () => A$s,
  f9l: () => f9l,
  u9l: () => u9l
});
module.exports = __toCommonJS(chunk_rarmmtqn_exports);
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_76h5zn4x = require("/$bunfs/root/chunk-76h5zn4x.js");
var u9l = "hearth_binding_changed";
function A$s(e, n) {
  if (e === null || typeof e !== "object" || !("hearth" in e)) return { binding: null, reason: "not_joined" };
  let s = e.hearth;
  if (s === null || typeof s !== "object") return { binding: null, reason: "not_joined" };
  let i = s, l = typeof i.channel_id === "string" ? i.channel_id : "", u = typeof i.thread_id === "string" ? i.thread_id : "";
  if (!import_chunk_epy4sc29.C7i.test(l) || !import_chunk_epy4sc29.C7i.test(u)) return (0, import_chunk_w578pjby.t)("[bridge:projects] binding ids are malformed \u2014 no mount", { level: "warn" }), { binding: null, reason: "bad_ids" };
  let a = i.mcp_server;
  if (a === null || typeof a !== "object") return { binding: null, reason: "bad_server_name" };
  let o = a;
  if (o.name !== import_chunk_epy4sc29.bd) return (0, import_chunk_w578pjby.t)("[bridge:projects] binding names an unexpected MCP server \u2014 no mount", { level: "warn" }), { binding: null, reason: "bad_server_name" };
  if (o.type !== "http" || typeof o.url !== "string") return { binding: null, reason: "not_http" };
  let d = (0, import_chunk_2mwshd9r.xhn)(n.apiBaseUrl);
  if (d === null) return (0, import_chunk_w578pjby.t)("[bridge:projects] api base is not an approved ingress origin \u2014 no mount", { level: "warn" }), { binding: null, reason: "untrusted_origin" };
  let c = `${d}${(0, import_chunk_epy4sc29.A7i)(n.sessionId)}`, r;
  try {
    r = new URL(o.url);
  } catch {
    return { binding: null, reason: "url_mismatch" };
  }
  if ((0, import_chunk_2mwshd9r.MVt)(r) !== d || r.pathname !== (0, import_chunk_epy4sc29.A7i)(n.sessionId) || r.search !== "" || r.hash !== "" || r.username !== "" || r.password !== "") return (0, import_chunk_w578pjby.t)("[bridge:projects] binding url is not this session\u2019s hearthbot mount on our own api base \u2014 no mount", { level: "warn" }), { binding: null, reason: "url_mismatch" };
  let g = (0, import_chunk_76h5zn4x.Hjr)(o, import_chunk_epy4sc29.bd);
  if (!g) return { binding: null, reason: "bad_tools" };
  let h = g.filter((_) => import_chunk_epy4sc29.VLl.has(_));
  return { binding: { channelId: l, threadId: u, mountUrl: c, autoAllowTools: h } };
}
var p = /^(.*)\/v1\/code\/sessions\/([^/?#]+)$/;
function f9l(e) {
  if (!e) return null;
  let n = p.exec(e);
  if (!n?.[1] || !n[2]) return null;
  try {
    (0, import_chunk_t39bs2jr.Mw)(n[2], "sessionId");
  } catch {
    return null;
  }
  return { apiBaseUrl: n[1], sessionId: n[2] };
}
