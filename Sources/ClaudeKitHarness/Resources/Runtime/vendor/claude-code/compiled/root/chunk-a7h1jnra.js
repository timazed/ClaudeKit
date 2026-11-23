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
var chunk_a7h1jnra_exports = {};
__export(chunk_a7h1jnra_exports, {
  Hyo: () => Hyo,
  Iyo: () => Iyo,
  J$n: () => J$n,
  Myo: () => Myo,
  Nln: () => Nln,
  Oyo: () => Oyo,
  Y8e: () => Y8e,
  _ys: () => _ys,
  f_l: () => f_l,
  fkr: () => fkr,
  g_l: () => g_l,
  gys: () => gys,
  h_l: () => h_l,
  j0e: () => j0e,
  jbe: () => jbe,
  m1i: () => m1i,
  m_l: () => m_l,
  n9: () => n9,
  p1i: () => p1i,
  p_l: () => p_l,
  ule: () => ule,
  yN: () => yN
});
module.exports = __toCommonJS(chunk_a7h1jnra_exports);
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_5m00y1wc = require("/$bunfs/root/chunk-5m00y1wc.js");
var import_chunk_s12kntv9 = require("/$bunfs/root/chunk-s12kntv9.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var yN = "publish_files", f_l = "publish_version", gys = "edit_version", _ys = "copy_file", p_l = "upload_asset", ule = "create_from_type", Nln = /* @__PURE__ */ new Set(["publish_version", "edit_version", yN, _ys, ule]), p1i = /* @__PURE__ */ new Set(["publish_version", yN, "authorize_upload"]);
function Y8e(t, e) {
  return t === ule || p1i.has(t) && !((0, import_chunk_ma3kja9f.T)(e) && e.slug !== void 0 && e.slug !== null && e.slug !== "");
}
var fkr = "delete_artifact", a = "[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}", p = new RegExp(`^${a.replaceAll("A-F", "")}$`), m = new RegExp(`^https://(?:preview\\.)?(?:claude\\.ai|claude\\.com|claude-ai\\.staging\\.ant\\.dev)/(?:code/(?:artifact|frame)|artifact)/(?:[A-Za-z0-9_-]*-)?(${a}|[1-9A-HJ-NP-Za-km-z]{22})(?:[/?#]|$)`), h = new RegExp(`^https://(${a})\\.frame\\.(?:staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`);
function j0e(t) {
  let e = t.toLowerCase();
  if (p.test(e)) return e;
  let n = t.trim(), r = n.match(/^[^:/?#]+:\/\/[^/?#]*/)?.[0] ?? "", o = r.toLowerCase() + n.slice(r.length), s = o.match(m)?.[1];
  if (s !== void 0) return s.length === 22 ? (0, import_chunk_r8478wtb.Kj)(s) : s.toLowerCase();
  return o.match(h)?.[1]?.toLowerCase() ?? null;
}
function J$n(t) {
  let e = t;
  if ((0, import_chunk_ma3kja9f.T)(t)) for (let [n, r] of Object.entries(t)) {
    let o = typeof r === "string" ? r.trimEnd() : "";
    if (!o.toLowerCase().endsWith("</invoke>")) continue;
    let s = o.slice(0, -9).trimEnd();
    if (s.toLowerCase().endsWith(`</${n.toLowerCase()}>`)) s = s.slice(0, -`</${n}>`.length).trimEnd();
    e = { ...(0, import_chunk_ma3kja9f.T)(e) ? e : t, [n]: s };
  }
  return e;
}
function l(t) {
  let e = Array.isArray(t) ? t.find((o) => (0, import_chunk_ma3kja9f.T)(o) && o.type === "text") : void 0, n = typeof t === "string" ? t : (0, import_chunk_ma3kja9f.T)(e) ? e.text : void 0;
  if (typeof n !== "string") return null;
  let r = (0, import_chunk_0jve1fep.et)(n, false);
  return (0, import_chunk_ma3kja9f.T)(r) ? r : null;
}
function n9(t) {
  let e = l(t);
  if (e === null || typeof e.url !== "string") return null;
  let n = (0, import_chunk_r8478wtb.Dn)(e.url);
  if (n === null || e.slug !== void 0 && e.slug !== n.slug) return null;
  let r = typeof e.title === "string" ? (0, import_chunk_s12kntv9.S_)(e.title) : null, o = typeof e.version === "string" && import_chunk_s12kntv9.t2e.test(e.version) ? e.version : void 0;
  return { slug: n.slug, env: n.env, ...r !== null && r !== "" && { title: r }, ...o !== void 0 && { version: o } };
}
function _(t, e, n) {
  let r = t.author_role === void 0 || t.author_role === null ? void 0 : typeof t.author_role === "string" && import_chunk_5m00y1wc.Dyo.test(t.author_role) ? t.author_role : "degraded", o = (0, import_chunk_5m00y1wc.Lyo)(t.source, r), s = (0, import_chunk_5m00y1wc.X8e)([{ account: typeof t.author_id === "string" ? t.author_id : "unknown", ...r !== void 0 && { role: r }, ...o && { postedByArtifact: true } }], e);
  return s === "unknown" && n && t.by_user === true && !o && r !== "degraded" ? "own" : s;
}
function Oyo(t, e, n) {
  let r = l(t);
  if (r === null) return null;
  let o = (0, import_chunk_ma3kja9f.T)(r.thread) ? [r.thread] : r.threads === null ? [] : Array.isArray(r.threads) ? r.threads : null;
  if (o === null) return null;
  let s = [];
  for (let u of o) {
    if (!(0, import_chunk_ma3kja9f.T)(u) || typeof u.id !== "string") return null;
    let c = Array.isArray(u.comments) ? u.comments : (0, import_chunk_ma3kja9f.T)(u.first_comment) ? [u.first_comment] : null;
    if (c === null) return null;
    for (let i of c) {
      if (!(0, import_chunk_ma3kja9f.T)(i) || typeof i.id !== "string" || typeof i.text !== "string") return null;
      s.push({ threadId: u.id, id: i.id, ...typeof i.to_claude_at === "string" && { toClaudeAt: i.to_claude_at }, text: i.text, authorship: _(i, e, n), ...i.author_guest === true && !i.author_role && { outsideAuthor: true } });
    }
  }
  return s;
}
function Iyo(t) {
  let e = l(t);
  return { read: typeof e?.read === "string" ? e.read : void 0, shared: typeof e?.shared === "string" ? e.shared : void 0 };
}
function Myo(t) {
  let e = l(t)?.content;
  return (0, import_chunk_ma3kja9f.T)(e) && e.kept_in === "files";
}
function m_l(t) {
  return l(t)?.type;
}
function Hyo(t) {
  let e = l(t);
  return e !== null && e.deleted === true && typeof e.slug === "string" && import_chunk_r8478wtb.yo.test(e.slug) ? e.slug : null;
}
class d {
  writers = null;
  loadWriters = null;
  register(t) {
    this.writers = t;
  }
  loaded() {
    if (this.writers === null) this.loadWriters?.();
    return this.writers;
  }
}
var jbe = new d();
function h_l(t) {
  jbe.register(t);
}
class f {
  arm = null;
  register(t) {
    this.arm = t;
  }
}
var m1i = new f();
function g_l(t) {
  m1i.register(t);
}
