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
var chunk_40s2w0s9_exports = {};
__export(chunk_40s2w0s9_exports, {
  Ghs: () => Ghs,
  Hje: () => Hje,
  I1n: () => I1n,
  J5: () => J5,
  M1n: () => M1n,
  SZl: () => SZl,
  dgo: () => dgo,
  iql: () => iql,
  lbr: () => lbr,
  yZl: () => yZl
});
module.exports = __toCommonJS(chunk_40s2w0s9_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_1yn47zgk = require("/$bunfs/root/chunk-1yn47zgk.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_6k9zs54e = require("/$bunfs/root/chunk-6k9zs54e.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_bsnb5bky = require("/$bunfs/root/chunk-bsnb5bky.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_5m00y1wc = require("/$bunfs/root/chunk-5m00y1wc.js");
var import_chunk_m9439hrw = require("/$bunfs/root/chunk-m9439hrw.js");
var import_chunk_9hnj2g25 = require("/$bunfs/root/chunk-9hnj2g25.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_hsfenxnq = require("/$bunfs/root/chunk-hsfenxnq.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_67g14a1x = require("/$bunfs/root/chunk-67g14a1x.js");
var import_chunk_p6x4t4m6 = require("/$bunfs/root/chunk-p6x4t4m6.js");
var import_chunk_tb4dhgzn = require("/$bunfs/root/chunk-tb4dhgzn.js");
var import_chunk_k4bfa4wx = require("/$bunfs/root/chunk-k4bfa4wx.js");
var import_chunk_1s8tg9aq = require("/$bunfs/root/chunk-1s8tg9aq.js");
var import_chunk_zkwftgft = require("/$bunfs/root/chunk-zkwftgft.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_chunk_vfxmw1me = require("/$bunfs/root/chunk-vfxmw1me.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var j = /* @__PURE__ */ new Set(["db_op", "writes", "collection", "doc_id", "field", "old_str", "new_str", "replace_all", "if_version", "as_level", "query", "data"]), xe = /* @__PURE__ */ new Set(["method", "path", "body", "body_file", "mode", "script"]), en = ["read_db", "write_db", "call_endpoint", "run_script"], Ee = { name: import_chunk_r8478wtb.Zf, mcpInfo: void 0, ruleContentField: void 0 };
function q(n) {
  if ((n.alwaysDenyRules.toolsNarrowing?.length ?? 0) === 0) return n;
  let { toolsNarrowing: e, ...r } = n.alwaysDenyRules;
  return { ...n, alwaysDenyRules: r };
}
function re(n) {
  let e = n.indexOf(":");
  if (e <= 0) return null;
  let r = n.slice(0, e).trim();
  return r === "" ? null : r;
}
function Ie(n, e) {
  let r = e === "deny" ? q(n) : n;
  for (let [u, d] of (0, import_chunk_ht27b0vz.Gk)(r, import_chunk_r8478wtb.Vt, e)) {
    let c = re(u);
    if (c === null) continue;
    if (j.has(c) || xe.has(c)) return d;
    if (c !== "action") continue;
    let m = (0, import_chunk_ht27b0vz.iwe)(u)?.expected;
    if (m === void 0 || en.some((f) => (0, import_chunk_qebpc5de.pO)(m, f))) return d;
  }
  let o = e === "deny" ? (0, import_chunk_ht27b0vz.Tr)(r, Ee) : (0, import_chunk_ht27b0vz.Di)(r, Ee);
  if (o !== null) return o;
  for (let [u, d] of (0, import_chunk_ht27b0vz.Gk)(r, import_chunk_r8478wtb.Zf, e)) {
    let c = re(u);
    if (c !== null && (j.has(c) || c === "action")) return d;
  }
  return;
}
var nn = () => require("/$bunfs/root/chunk-d3fwxng5.js"), W = { name: import_chunk_r8478wtb.Vt, mcpInfo: void 0, ruleContentField: void 0 }, tn = {}, J5 = { publish_version: { action: "publish", target: "slug" }, edit_version: { action: "publish", target: "slug" }, publish_files: { action: "publish", target: "slug" }, copy_file: { action: "publish", target: "slug", source: "from_slug" }, create_from_type: { action: "publish", type: "slug", givesStoredText: true }, declare_capabilities: { action: "publish", target: "slug" }, get_artifact: { action: "read", target: "slug" }, read_artifact: { action: "read", target: "slug" }, read_shared_artifact: { action: "read", target: "slug" }, list_artifacts: { action: "list" }, list_types: { action: "list_types" }, describe_type: { action: "describe_type", type: "slug" }, guide: { givesStoredText: true }, pin_artifact: { action: "pin", target: "slug" }, unpin_artifact: { action: "unpin", target: "slug" }, read_comments: { action: "comments", target: "slug" }, reply_comment: { action: "reply", target: "slug" }, reply_shared_comment: { action: "reply", target: "slug" }, resolve_comment: { action: "resolve", target: "slug" }, watch: { action: "watch", target: "slug" }, unwatch: { action: "unwatch", target: "slug" }, upload_asset: { action: "upload_asset", target: "slug" }, list_assets: { action: "list_assets", target: "slug" }, read_asset: { action: "read_asset", target: "slug" }, copy_asset: { action: "copy_from", target: "slug", source: "from" }, delete_asset: { action: "delete_asset", target: "slug" }, list_files: { action: "list_files", target: "slug" }, read_file: { action: "read_file", target: "slug" }, read_declaration: { action: "read", target: "slug" }, describe_capabilities: { noOthersWriting: true }, authorize_upload: { action: "publish", target: "slug" }, delete_artifact: { action: "delete", target: "slug" }, db_write: { action: "write_db", target: "slug" }, db_get: { action: "read_db", target: "slug" }, db_list: { action: "read_db", target: "slug" }, db_query: { action: "read_db", target: "slug" }, db_usage: { action: "read_db", target: "slug" }, db_whoami: { action: "read_db", target: "slug" }, db_profiles: { action: "read_db", target: "slug" }, db_rules_get: { action: "read_db", target: "slug" }, db_str_replace: { action: "write_db", target: "slug", readsBack: true }, ...tn }, sn = /* @__PURE__ */ new Set(["publish", "list_assets", "pin", "unpin", "reply", "resolve", "watch", "unwatch", "upload_asset", "copy_from", "delete_asset", "delete", "write_db"]), rn = { db_get: "get", db_list: "list", db_query: "query", db_profiles: "profiles", db_str_replace: "str_replace" }, on = /* @__PURE__ */ new Set(["slug", "shared_live", "owned_by", "asLevel"]), an = { db_get: { names: "document", takes: /* @__PURE__ */ new Set(["path"]) }, db_list: { names: "collection", takes: /* @__PURE__ */ new Set(["collection", "limit", "cursor"]) }, db_query: { names: "collection", takes: /* @__PURE__ */ new Set(["collection", "where", "orderBy", "limit", "cursor"]) }, db_write: { names: "operations", takes: /* @__PURE__ */ new Set(["ops", "idempotencyKey"]) }, db_str_replace: { names: "document", takes: /* @__PURE__ */ new Set(["path", "field", "old_str", "new_str", "replace_all", "ifVersion", "idempotencyKey"]) }, db_profiles: { takes: /* @__PURE__ */ new Set(["ids"]) }, db_usage: { takes: /* @__PURE__ */ new Set() }, db_whoami: { takes: /* @__PURE__ */ new Set() }, db_rules_get: { takes: /* @__PURE__ */ new Set() } }, ln = /* @__PURE__ */ new Set(["op", "path", "data", "ifVersion"]), un = /* @__PURE__ */ new Set(["set", "merge", "update", "delete"]);
function Oe(n) {
  if (typeof n !== "string") return false;
  let e = n.lastIndexOf("/");
  return import_chunk_bsnb5bky.lle.test(n.slice(0, Math.max(e, 0))) && import_chunk_bsnb5bky.wre.test(n.slice(e + 1));
}
function I1n(n, e, r) {
  let o = Object.hasOwn(J5, n), u = o ? J5[n] : { target: "slug" }, d = (0, import_chunk_ma3kja9f.T)(e) ? e : {}, c = {}, m = !o, f = false, A = false, y = u?.target === void 0 ? void 0 : d[u.target], p = u?.source === void 0 ? void 0 : d[u.source];
  for (let [g, k] of [["url", u?.target], ["from_url", u?.source], ["type_url", u?.type]]) {
    let C = k === void 0 ? void 0 : d[k];
    if (typeof C !== "string") {
      if (C !== void 0 && C !== null) m = true, f ||= g === "from_url";
      continue;
    }
    let U = (0, import_chunk_a7h1jnra.j0e)(C);
    if (U === null) m = true, f ||= g === "from_url";
    else c[g] = (0, import_chunk_r8478wtb.sr)({ slug: U, env: (0, import_chunk_r8478wtb.Ws)() });
  }
  if (u?.action !== void 0) c.action = u.action;
  if (typeof d.title === "string") c.title = d.title;
  let h = u?.action === "read_db" || u?.action === "write_db", w = (0, import_chunk_6k9zs54e.jk)(d.ops);
  if (!h && typeof d.path === "string") c.path = d.path;
  if (Array.isArray(d.paths)) c.paths = d.paths;
  if (h) {
    let g = r?.op ?? rn[n] ?? (w !== void 0 ? "batch" : void 0);
    if (g !== void 0) c.db_op = g;
    let k = r?.path ?? (typeof d.path === "string" ? d.path : void 0), C = an[n];
    if (A = C === void 0 || Object.keys(d).some((E) => !on.has(E) && !C.takes.has(E)) || d.asLevel !== void 0 && !import_chunk_bsnb5bky.NWt.some((E) => E === d.asLevel) || C.names === "document" && !Oe(d.path) || C.names === "collection" && !(typeof d.collection === "string" && import_chunk_bsnb5bky.lle.test(d.collection)) || C.names === "operations" && !(w !== void 0 && w !== import_chunk_6k9zs54e.Qm && w.length > 0 && w.every((E) => (0, import_chunk_ma3kja9f.T)(E) && Object.keys(E).every((l) => ln.has(l)) && un.has(E.op) && Oe(E.path))), typeof d.asLevel === "string") c.as_level = d.asLevel;
    for (let E of ["field", "old_str", "new_str", "replace_all"]) if (d[E] !== void 0) c[E] = d[E];
    let U = r?.ifVersion ?? d.ifVersion;
    if (U !== void 0) c.if_version = U;
    let L = k === void 0 ? -1 : k.lastIndexOf("/");
    if (k !== void 0 && L > 0) c.collection = k.slice(0, L), c.doc_id = k.slice(L + 1);
    else if (typeof d.collection === "string") c.collection = d.collection;
  }
  if (typeof d.id === "string" && u?.action?.endsWith("_asset")) c.asset_id = d.id;
  if (u?.action === "upload_asset" || n === "publish_files") {
    let g = ((0, import_chunk_6k9zs54e.Jbe)(d.files) ?? []).flatMap((k) => (0, import_chunk_ma3kja9f.T)(k) && typeof k.path === "string" ? [k.path] : []);
    if (c.file_paths = g, g.length === 1) c.file_path = g[0];
  }
  return { input: c, unread: m, known: o, ...typeof y === "string" && { rawUrl: y }, ...typeof p === "string" && { rawSourceUrl: p }, ...f && { copies: true }, ...A && { dbUnread: true }, ...(u?.readsBack === true || d.ifVersion !== void 0 || w === import_chunk_6k9zs54e.Qm || (w ?? []).some((g) => (0, import_chunk_ma3kja9f.T)(g) && g.ifVersion !== void 0)) && { readsBack: true } };
}
function dn(n, e) {
  for (let [r, o] of n) if (e(r)) return o;
  return null;
}
function ve(n, e) {
  for (let [r, o] of n) {
    let u = re(r);
    if (u !== null && e.includes(u)) return o;
  }
  return null;
}
var Ve = "00000000-0000-4000-8000-000000000000";
function dgo(n, e, r) {
  let { action: o, ...u } = e.input, d = o === "read" ? { prompt: import_chunk_r8478wtb.Q6t } : void 0, c = e.input.url, m = typeof c === "string" ? (0, import_chunk_a7h1jnra.j0e)(c) : null, f = e.input.from_url, A = typeof f === "string" ? (0, import_chunk_a7h1jnra.j0e)(f) : null, y = (r === "deny" ? (0, import_chunk_ht27b0vz.Tr)(q(n), W) : (0, import_chunk_ht27b0vz.Di)(n, W)) ?? (0, import_chunk_hsfenxnq.dV)(n, e.input, r) ?? (0, import_chunk_hsfenxnq.mbr)(n, W, e.input, r) ?? (0, import_chunk_ht27b0vz.pu)(n, W, { ...u, ...d }, r) ?? (0, import_chunk_hsfenxnq.Aan)(r === "deny" ? q(n) : n, W, e.input, r) ?? ((!e.known || import_chunk_hsfenxnq.Vhs.has(String(e.input.action)) || e.readsBack === true) && m !== null ? (0, import_chunk_hsfenxnq.ZBt)(n, { slug: m, env: (0, import_chunk_r8478wtb.Ws)() }, e.rawUrl ?? c, r, d) : null) ?? (A !== null && typeof f === "string" ? (0, import_chunk_hsfenxnq.ZBt)(n, { slug: A, env: (0, import_chunk_r8478wtb.Ws)() }, e.rawSourceUrl ?? f, r) : null);
  if (y !== null) return { rule: y, why: "named" };
  if (e.input.action === "run_script" || e.input.action === "call_endpoint") {
    let h = Ie(n, r);
    if (h !== void 0) return { rule: h, why: "named" };
  }
  let p = (0, import_chunk_qsvts4bv.dRe)(e.input);
  if ((0, import_chunk_ma3kja9f.T)(p) && p !== e.input) {
    let { action: h, ...w } = p, g = (0, import_chunk_ht27b0vz.pu)(n, W, (0, import_chunk_ht78eyc4.Fg)() ? p : w, r);
    if (g !== null) return { rule: g, why: "named" };
  }
  if (e.dbUnread === true) for (let h of [import_chunk_r8478wtb.Vt, import_chunk_hsfenxnq.pbr.data]) {
    let w = ve((0, import_chunk_ht27b0vz.Gk)(n, h, r), h === import_chunk_r8478wtb.Vt ? [...j] : [...j, "action"]);
    if (w !== null) return { rule: w, why: "unread" };
  }
  for (let h of [import_chunk_r8478wtb.Vt, ...Object.values(import_chunk_hsfenxnq.pbr)]) {
    let w = (0, import_chunk_ht27b0vz.Gk)(n, h, r), g = e.unread ? ve(w, ["url", "from_url", "type_url"]) : null;
    if (g !== null) return { rule: g, why: "unread" };
    let k = { name: h, mcpInfo: void 0, ruleContentField: void 0 }, C = e.known ? null : [...w.values()][0] ?? (h === import_chunk_r8478wtb.Vt ? null : r === "deny" ? (0, import_chunk_ht27b0vz.Tr)(q(n), k) : (0, import_chunk_ht27b0vz.Di)(n, k));
    if (C !== null) return { rule: C, why: "unknown" };
  }
  if (e.unread && (!e.known || import_chunk_hsfenxnq.Vhs.has(String(e.input.action)) || e.readsBack === true || e.copies === true)) {
    let h = { slug: Ve, env: (0, import_chunk_r8478wtb.Ws)() };
    for (let g of [e.rawUrl, e.rawSourceUrl, (0, import_chunk_r8478wtb.sr)(h)]) {
      let k = g === void 0 ? null : (0, import_chunk_hsfenxnq.ZBt)(n, h, g, r, d);
      if (k !== null) return { rule: k, why: "unread" };
    }
    let w = dn((0, import_chunk_ht27b0vz.Gk)(n, import_chunk_ww0784kh.Gn, r), (g) => /^domain:(?:.*[.*])?claudeusercontent\.com$/i.test(g.trim()));
    if (w !== null) return { rule: w, why: "unread" };
  }
  return null;
}
function H(n, e, r, o) {
  let u = (0, import_chunk_a7h1jnra.J$n)(r), d = (0, import_chunk_ma3kja9f.T)(r) && Array.isArray(r.files) && r.files.length > 1 ? r.files : [], c = [r, ...u === r ? [] : [u], ...d.map((f) => ({ ...(0, import_chunk_ma3kja9f.T)(r) ? r : {}, files: [f] }))].map((f) => [f, void 0]), m = !(0, import_chunk_ma3kja9f.T)(r) ? [] : e === "db_str_replace" ? [{ op: "update", path: r.path, ifVersion: void 0 }] : e === "db_write" && Array.isArray(r.ops) ? r.ops.filter(import_chunk_ma3kja9f.T).flatMap((f) => (f.op === "merge" ? ["set", "update"] : [f.op]).map((A) => ({ op: A, path: f.path, ifVersion: f.ifVersion }))) : [];
  for (let [f, A] of [...c, ...m.flatMap(({ op: y, path: p, ifVersion: h }) => typeof y === "string" && typeof p === "string" ? [[r, { op: y, path: p, ifVersion: h }]] : [])]) {
    let y = dgo(n, I1n(e, f, A), o);
    if (y !== null) return y;
  }
  return null;
}
function cn() {
  let n = Object.values(import_chunk_hsfenxnq.pbr);
  return n.length < 2 ? n.join("") : `${n.slice(0, -1).join(", ")}, or ${n.at(-1)}`;
}
function He(n) {
  return n === "unread" ? " Claude Code couldn't tell what this call names or does, so the rule applies to it." : n === "unknown" ? ` Claude Code doesn't know what this tool does, so every ${import_chunk_r8478wtb.Vt} rule that names something in parentheses, and every rule on ${cn()}, applies to it.` : "";
}
var Ke = /* @__PURE__ */ new Set(["slug", "artifacts", "from_slug", "from", "shared_live", "contract", "title", "path", "paths", "files", "id", "collection", "op", "ops", "ifVersion", "asLevel", "field", "old_str", "new_str", "replace_all"]), fn = new Set([...Ke].map(lbr));
function lbr(n) {
  return (0, import_chunk_kx2fp6pc.tLo)(n).replace(new RegExp("[^\\p{L}\\p{N}]|\\p{Default_Ignorable_Code_Point}", "gu"), "").toLowerCase().toUpperCase();
}
function Ye(n) {
  if (!(0, import_chunk_ma3kja9f.T)(n)) return;
  return [n, ...[n.files, n.ops].flat().filter(import_chunk_ma3kja9f.T)].flatMap(Object.keys).find((e) => !Ke.has(e) && fn.has(lbr(e)));
}
var pn = /* @__PURE__ */ new Set(["publish_files", "declare_capabilities", "authorize_upload", ...[]]), qe = /* @__PURE__ */ new Set(["read", "comments", "read_db", "list_assets", "read_asset", "list_files", "read_file", "get_endpoints"]);
function mn(n, e) {
  let r = I1n("publish_files", n).input.file_paths;
  return Array.isArray(r) && r.every((o) => typeof o === "string" && (0, import_chunk_p1ewvgeh.w2e)(o, e));
}
function Ge(n) {
  return (n !== "laptop" || (0, import_chunk_r8478wtb.kf)() === null ? (0, import_chunk_2nv4wrez.Dp)("allow_cobalt_plinth", "Artifacts", "are") : null) ?? ((0, import_chunk_z1z1qsrb.FT)() ? null : `The Artifact tool isn't available in this session, so the Artifacts MCP tools aren't available either.${n === "laptop" ? " Check /login and /config." : ""}`);
}
function Q(n, e, r, o, u, d = false) {
  let c = Ge(n);
  if (c !== null) return { behavior: "deny", message: c, decisionReason: { type: "other", reason: c } };
  let m = Ye(o);
  if (m !== void 0) {
    let p = `${r} takes no argument spelled ${(0, import_chunk_r8478wtb.qj)(m)}. Spell argument names exactly as the tool lists them.`;
    return { behavior: "deny", message: p, decisionReason: { type: "other", reason: p } };
  }
  let f = J5[e];
  if ((0, import_chunk_z1z1qsrb.OR)() && (0, import_chunk_bz1f2qnq.k_)(u) && !d && (f === void 0 || f.action === "publish" || f.target !== void 0 || he.has(f.action)) && !((qe.has(f?.action) ? je(e, o) : we(e, o)) && (0, import_chunk_ma3kja9f.T)(o) && (o.shared_live ?? "") === "" && o.contract === void 0 && f?.source === void 0 && f?.action !== "upload_asset" && f?.action !== "call_endpoint" && f?.action !== "run_script" && !pn.has(e) && K(e, o) === null)) {
    let p = `In Cowork ${r} doesn't run here, where no one can answer an approval card. ${K(e, o) === null ? "Do not retry this call in this session." : "Tell the user in chat; do not retry it on this turn."}`;
    return { behavior: "deny", message: p, decisionReason: { type: "safetyCheck", reason: p, classifierApprovable: false } };
  }
  let A = H((0, import_chunk_bz1f2qnq.Z)(u), e, o, "deny");
  if (A !== null) return Je(A, r);
  if (n === "laptop" && e === "publish_files" && (0, import_chunk_r8478wtb.kf)() !== null && !mn(o, (0, import_chunk_bz1f2qnq.Z)(u))) {
    let p = `A Read rule refuses a file sent to ${r}, so nothing was read.`;
    return { behavior: "deny", message: p, decisionReason: { type: "other", reason: p } };
  }
  let y = J5[e]?.action;
  if ((0, import_chunk_bz1f2qnq.VP)(u) && (X(e, o) || !Qe.has(y) || y === "resolve" || he.has(y))) return { behavior: "deny", message: `${r} doesn't run in plan mode in this session, where no one can answer a prompt. Keep planning, and make this call once the plan is approved.`, decisionReason: { type: "safetyCheck", reason: "This session cannot show prompts in plan mode, so this Artifacts call can run only after the plan is approved", classifierApprovable: false } };
  return;
}
function Pe(n) {
  let e = `Claude Code doesn't know what ${n} does yet, so each call needs your approval.`;
  return { behavior: "ask", message: e, suppressAlwaysAllowRule: true, decisionReason: { type: "safetyCheck", reason: e, classifierApprovable: false } };
}
function Fe(n, e, r) {
  let o = n.mcpInfo?.toolName, u = (0, import_chunk_bz1f2qnq.Z)(r);
  if (o === void 0 || u.mode === "plan" || (0, import_chunk_xcgcdx61.da)(n, u) === "bypassPermissions" || !X(o, e)) return;
  let d = K(o, e), c = d === null ? null : ie(e), m = c === null ? null : `the database of ${(0, import_chunk_r8478wtb.sr)(c)} \u2014 prompted by the new-comments notification; rows there are written by artifact viewers`, f = m !== null && d === "rows" ? `Claude wants to read ${m}.` : m !== null && d === "edit" ? `Claude wants to edit a document in ${m}, so only a person can approve this edit.` : `Each call of the Artifacts tool ${o} like this one is approved by itself.`;
  return { behavior: "ask", message: f, suppressAlwaysAllowRule: true, decisionReason: { type: "safetyCheck", reason: f, classifierApprovable: d !== "edit" } };
}
function ce(n, e, r, o) {
  return n === "laptop" && e === "publish_version" && (0, import_chunk_ma3kja9f.T)(r) && (r.slug ?? "") === "" && (r.shared_live ?? "") === "" && r.contract === void 0 && o.agentId === void 0 && (0, import_chunk_865at33z.mzn)() && (0, import_chunk_9hnj2g25.A8e)(o) && (0, import_chunk_9hnj2g25.xan)() && ![...(0, import_chunk_ht27b0vz.al)((0, import_chunk_bz1f2qnq.Z)(o)), ...(0, import_chunk_ht27b0vz.Vs)((0, import_chunk_bz1f2qnq.Z)(o))].some((u) => (0, import_chunk_ht27b0vz.jc)((0, import_chunk_bz1f2qnq.Z)(o), W, u) || Object.values(import_chunk_hsfenxnq.pbr).includes(u.ruleValue.toolName));
}
function gn(n, e, r, o) {
  let u = e.mcpInfo?.toolName ?? "", d = Hje(u, r), c = (0, import_chunk_bz1f2qnq.Z)(o);
  return n === "laptop" && (0, import_chunk_ma3kja9f.T)(r) && (r.shared_live ?? "") === "" && d !== null && !I1n(u, r).unread && o.agentId === void 0 && o.toolUseId !== void 0 && o.hookAskFloor !== true && c.mode !== "plan" && H(c, u, r, "ask") === null && (0, import_chunk_ht27b0vz.Di)(c, e) === null && (0, import_chunk_865at33z.mzn)() && (0, import_chunk_9hnj2g25.A8e)(o) ? { slug: d, env: (0, import_chunk_r8478wtb.Ws)() } : null;
}
var hn = /* @__PURE__ */ new Set(["set", "merge", "update"]);
function oe(n, e, r, o, u = true) {
  let d = e.mcpInfo?.toolName ?? "", c = J5[d]?.action === "write_db" ? gn(n, e, r, o) : null;
  if (c === null || !(0, import_chunk_ma3kja9f.T)(r)) return null;
  let { dbUnread: m, readsBack: f } = I1n(d, r), A = ((0, import_chunk_6k9zs54e.Jbe)(r.ops) ?? []).map((p) => (0, import_chunk_ma3kja9f.T)(p) ? p.op : void 0);
  if (m === true || !A.every((p) => hn.has(p)) || r.owned_by !== void 0 || K(d, r) !== null) return null;
  let y = u ? (0, import_chunk_9hnj2g25.GO)("write", c, o) : void 0;
  return y === void 0 || (y.owned === true || f !== true) && !(0, import_chunk_z1z1qsrb.vE)({ ...y, routineWrite: true }).ask ? { ...c, op: d === "db_str_replace" ? "str_replace" : A.length > 1 ? "batch" : A[0] === "update" ? "update" : "set" } : null;
}
function pe(n, e) {
  return `The ${(0, import_chunk_r8478wtb.qj)((0, import_chunk_qebpc5de.yn)(n.rule.ruleValue))} ask rule from ${(0, import_chunk_xzvhvaa2.bb)(n.rule.source)} covers ${e}, so this call needs your approval.${He(n.why)}`;
}
function Je(n, e) {
  return { behavior: "deny", message: `Permission to use ${e} has been denied: ${(0, import_chunk_hsfenxnq.T8e)(n.rule)} covers it.${He(n.why)}`, decisionReason: { type: "rule", rule: n.rule } };
}
function yZl(n, e, r) {
  if (!(0, import_chunk_zkwftgft.f1i)()) return null;
  let o = `the Artifacts tool ${e}`, u = (m, f) => {
    try {
      return H(m, e, r, f);
    } catch (A) {
      (0, import_chunk_k449cc64.i)(A);
      let y = (f === "deny" ? (0, import_chunk_ht27b0vz.Vs)(q(m)) : (0, import_chunk_ht27b0vz.al)(m)).find(({ ruleValue: { toolName: p, ruleContent: h } }) => p === import_chunk_ww0784kh.Gn ? h !== void 0 : import_chunk_r8478wtb.e8.some((w) => w === p));
      return y === void 0 ? null : { rule: y, why: "unread" };
    }
  }, d = u((0, import_chunk_f9x2f6cx.st)() ? { ...n, alwaysDenyRules: { ...n.alwaysDenyRules, cliArg: [] } } : n, "deny");
  if (d !== null) return { rule: d.rule, inItsPlace: Je(d, o) };
  let c = u(n, "ask");
  return c && { rule: c.rule, inItsPlace: { behavior: "ask", message: pe(c, o), decisionReason: { type: "rule", rule: c.rule }, suppressAlwaysAllowRule: true } };
}
function ie(n) {
  let e = (0, import_chunk_ma3kja9f.T)(n) && typeof n.slug === "string" ? (0, import_chunk_a7h1jnra.j0e)(n.slug) : null;
  return e === null ? null : { slug: e, env: (0, import_chunk_r8478wtb.Ws)() };
}
function G(n) {
  let e = ie(n);
  return e === null ? (0, import_chunk_qtg8rez4.l$i)() : (0, import_chunk_qtg8rez4.uw)(e.slug);
}
function De(n) {
  return G(n) ? import_chunk_67g14a1x.zhs.loaded() : import_chunk_67g14a1x.zhs.read;
}
var me = "Nothing was read: while a new-comments notification is pending, reading an artifact's comments needs the user's approval first,", fe = `${me} and Claude Code couldn't tell which artifact this call names. Pass the artifact's full id (a UUID) or its link.`, _n = /* @__PURE__ */ new Set(["upload_asset", "copy_from", "pin", "write_db", "call_endpoint", "run_script"]), ye = /* @__PURE__ */ new Set([void 0, null, "", "users", "org", "others", "agent_scoped"]);
function K(n, e) {
  let r = wn(n);
  return r !== null && G(e) ? r : null;
}
function wn(n) {
  let { action: e, readsBack: r } = J5[n] ?? {};
  return r === true ? "edit" : e === "read_db" ? "rows" : e === "comments" ? "comments" : null;
}
function X(n, e) {
  return _n.has(J5[n]?.action) || n === "declare_capabilities" || J5[n]?.source !== void 0 || J5[n]?.action === "publish" && (0, import_chunk_z1z1qsrb.OR)() && !we(n, e) || !(0, import_chunk_ma3kja9f.T)(e) || !ye.has(e.shared_live) || K(n, e) !== null;
}
var Ue = /* @__PURE__ */ new Set(["users", "org", "others", "agent_scoped", "public"]), x = "(unrecognized address)", An = ", anyone may be a viewer, not only the user's colleagues: internal code and infrastructure detail count as sensitive";
function Rn(n) {
  let e = typeof n === "string" ? (0, import_chunk_a7h1jnra.j0e)(n) : null, r = e === null ? void 0 : (0, import_chunk_0rkwgmhx.se)().ownCreatedSlugs.get(e);
  return r?.wrotePage === true && r.env === (0, import_chunk_r8478wtb.Ws)();
}
function ze(n) {
  return n === null ? "" : ` [requested after a new-comments notification${n === "rows" ? ": rows are written by artifact viewers" : n === "comments" ? ": the comment text it ingests is written by artifact viewers" : ""}]`;
}
function iql(n, e, r, o) {
  let { input: u, unread: d, copies: c } = I1n(n, e), m = (0, import_chunk_a7h1jnra.Y8e)(n, e), f = !m && (typeof u.url === "string" || d), A = f ? We(u.url) : "", y = ze(K(n, e)), p = o.statesAudience && (0, import_chunk_ma3kja9f.T)(e) ? e.shared_live : void 0, h = p === void 0 || p === null || p === "", w = (m || f) && !o.readOnly && h && (0, import_chunk_pkzhb7kv.yZ)(), g = p !== void 0 && p !== null && p !== "" ? Ue.has(p) ? String(p) : "unknown" : f && !o.statesAudience && !o.readOnly ? "unknown" : w ? "agent_scoped" : void 0, k = g === void 0 ? "" : ` [${p === void 0 && !w ? "shared" : "shared-live"}: ${g}${p === void 0 && !w ? "" : g === "agent_scoped" || !ye.has(g) ? An : ""}]`, { shared_live: C, ...U } = (0, import_chunk_ma3kja9f.T)(e) ? e : {}, L = r(o.statesAudience && Ue.has(C) ? U : e), E = typeof u.from_url === "string" || c === true ? ` [copies from: ${(0, import_chunk_r8478wtb.NA)(u.from_url, x)}]${We(u.from_url).replace("[ownership:", "[copy source:").replace("[artifact created", "[copy source: created")}` : "", l = m ? ` \u2192 a new ${g === void 0 ? "private " : ""}artifact${n === "create_from_type" ? ` from the Artifact type ${(0, import_chunk_r8478wtb.NA)(u.type_url, x)}` : ""}` : f ? ` \u2192 ${(0, import_chunk_r8478wtb.NA)(u.url, x)}` : "";
  return `${import_chunk_r8478wtb.Vt} ${typeof u.action === "string" ? u.action : "tool"}${o.readOnly ? " [read-only]" : ""}${A}${k}${y}${E}${l}, as Claude wrote it: ${(0, import_chunk_r8478wtb.n8)((0, import_chunk_r8478wtb.Dke)((0, import_chunk_kx2fp6pc.lg)(typeof L === "string" ? L : (0, import_chunk_w578pjby._)(L)).replace((0, import_chunk_hr2stdq7.Gke)(), "?")).replace(import_chunk_r8478wtb.BC, " "))}`;
}
function Ghs(n, e) {
  let r = (0, import_chunk_ma3kja9f.T)(e) ? e.slug : void 0, o = typeof r === "string" ? (0, import_chunk_a7h1jnra.j0e)(r) : null;
  return n === "create_from_type" || import_chunk_a7h1jnra.p1i.has(n) && (o === null || (0, import_chunk_0rkwgmhx.se)().reservedMints.has(o));
}
function ge(n, e) {
  return Ghs(n, e) ? (0, import_chunk_2nv4wrez.aun)() : null;
}
function M1n(n, e, r) {
  let o = ge(n, e);
  if (o === null) return;
  let u = `Claude wants to create a new artifact on claude.ai. ${o}`, { slug: d, base_version: c } = (0, import_chunk_ma3kja9f.T)(e) ? e : {};
  return (0, import_chunk_67g14a1x.cbr)(r, n === "create_from_type" || typeof d === "string" && (0, import_chunk_a7h1jnra.j0e)(d) !== null || (0, import_chunk_a7h1jnra.Y8e)(n, e) && (c === void 0 || c === null || c === "")) ?? { behavior: "ask", message: u, ...import_chunk_67g14a1x.dbr, decisionReason: { type: "safetyCheck", reason: u, classifierApprovable: false } };
}
function Hje(n, e) {
  let r = J5[n]?.target, o = (0, import_chunk_a7h1jnra.J$n)(e), u = r !== void 0 && (0, import_chunk_ma3kja9f.T)(o) ? o[r] : void 0;
  return typeof u === "string" ? (0, import_chunk_a7h1jnra.j0e)(u) : null;
}
function ae(n, e) {
  let r = J5[n]?.target, o = r !== void 0 && (0, import_chunk_ma3kja9f.T)(e) ? e[r] : void 0, u = typeof o === "string" ? (0, import_chunk_a7h1jnra.j0e)(o) : null, d = u === null ? void 0 : (0, import_chunk_0rkwgmhx.se)().ownPublishedSlugs.get(u);
  return u !== null && d?.byPerson === true ? { slug: u, env: d.env } : null;
}
function je(n, e) {
  let r = ae(n, e);
  if (r !== null && (0, import_chunk_r8478wtb.kf)() !== null) return true;
  let o = r === null ? void 0 : (0, import_chunk_qtg8rez4.Bt)(r.slug);
  return o?.mode === "owner" && o.probeFailed !== true;
}
function we(n, e) {
  let r = ae(n, e);
  return r !== null && je(n, e) && !(0, import_chunk_qtg8rez4.FEt)(r.slug);
}
var he = /* @__PURE__ */ new Set([]), Qe = /* @__PURE__ */ new Set([...he, "list", "list_types", "describe_type", "resolve", "unpin", "unwatch", void 0]), le = /* @__PURE__ */ new Set(["publish_version", "edit_version", import_chunk_a7h1jnra.yN]);
function Ne(n, e, r) {
  let o = n === "laptop" && le.has(e) && (0, import_chunk_r8478wtb.kf)() === null ? Hje(e, r) : null;
  return o !== null && (0, import_chunk_qtg8rez4.Gkr)(o, [], (0, import_chunk_9hnj2g25.mgo)(o)) !== void 0 ? o : null;
}
function Me(n, e, r, o) {
  let u = e.mcpInfo?.toolName, d = (0, import_chunk_a7h1jnra.J$n)(r), c = (0, import_chunk_bz1f2qnq.Z)(o);
  if (n !== "laptop" || u === void 0 || !le.has(u) && u !== import_chunk_pkzhb7kv.Ybe || !(0, import_chunk_ma3kja9f.T)(d) || (d.slug ?? "") === "" && u !== import_chunk_pkzhb7kv.Ybe || !ye.has(d.shared_live) || (0, import_chunk_r8478wtb.kf)() !== null || c.mode === "plan" || (0, import_chunk_xcgcdx61.da)(e, c) === "bypassPermissions" || !((0, import_chunk_865at33z.bw)(o.messages) || (0, import_chunk_9hnj2g25.C8e)(o))) return;
  let m = Hje(u, r), { reservedMints: f, mcpTriedMints: A } = (0, import_chunk_0rkwgmhx.se)();
  return m !== null && f.has(m) && !A.has(m) ? void 0 : m;
}
function Le(n, e, r, o) {
  let u = e.mcpInfo?.toolName ?? "", d = J5[u], c = (0, import_chunk_bz1f2qnq.Z)(o), { unread: m, dbUnread: f } = I1n(u, r);
  return n === "laptop" && qe.has(d?.action) && !m && f !== true && d?.givesStoredText !== true && !G(r) && c.mode !== "plan" && (0, import_chunk_xcgcdx61.da)(e, c) !== "bypassPermissions" ? Hje(u, r) : null;
}
var bn = /* @__PURE__ */ new Set([...le, import_chunk_pkzhb7kv.rYe]);
function SZl(n, e) {
  let r = (0, import_chunk_865at33z.yhe)(n) ? "runner" : nn()?.isArtifactsMcpLaptopEntry(n) === true ? "laptop" : null;
  if (r === null || e.mcpInfo === void 0) return;
  if (r === "runner") {
    e.mcpInfo = { ...e.mcpInfo, standsInForBuiltIn: true };
    let l = e.call;
    e.call = async (...a) => {
      let R = (0, import_chunk_vfxmw1me.nYe)();
      try {
        return await l.apply(e, a);
      } catch (b) {
        if ((0, import_chunk_vfxmw1me.q_l)(b)) (0, import_chunk_0rkwgmhx.se)().mcpEntryRowNotServed = R ?? null;
        throw b;
      }
    };
  }
  let o = e.mcpInfo.toolName;
  if (!Object.hasOwn(J5, o)) e.requiresUserInteraction = () => true, e.suppressesAlwaysAllowRule = () => true;
  let u = e.suppressesAlwaysAllowRule;
  e.suppressesAlwaysAllowRule = (l, a) => o === import_chunk_pkzhb7kv.Ybe || X(o, l) || ge(o, l) !== null || u?.call(e, l, a) === true;
  let d = e.ignoresWholeToolAllowRule;
  e.ignoresWholeToolAllowRule = (l) => X(o, l) || ge(o, l) !== null || d?.call(e, l) === true;
  let c = `the Artifacts tool ${o}`, { checkPermissions: m, permissionCheckFailureDecision: f, toAutoClassifierInput: A } = e;
  e.toAutoClassifierInput = (l) => {
    try {
      let a = (0, import_chunk_ma3kja9f.T)(l) ? { ...l } : {};
      return iql(o, a, (R) => A.call(e, (0, import_chunk_ma3kja9f.T)(R) ? R : {}), { statesAudience: e.inputJSONSchema?.properties?.shared_live !== void 0, readOnly: e.isReadOnly(a) });
    } catch {
      return (0, import_chunk_w578pjby.t)(`[artifacts-mcp] the classifier's line for ${o} could not be built`, { level: "warn" }), `${import_chunk_r8478wtb.Vt} ${J5[o]?.action ?? "tool"}${(0, import_chunk_qtg8rez4.aM)({ role: void 0 })} [shared: unknown]${ze(K(o, {}))} \u2192 ${x}, as Claude wrote it: (unreadable arguments)`;
    }
  };
  let y = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  e.hookMatcherFamilyNames = () => (0, import_chunk_zkwftgft.u1i)(o), e.checkPermissions = async (l, a) => {
    if ((0, import_chunk_9hnj2g25.Sbr)(a.toolUseId), a.toolUseId !== void 0) w.delete(a.toolUseId);
    let R = r === "laptop" ? ae(o, l) : null, b = Me(r, e, l, a) ?? Le(r, e, l, a) ?? Ne(r, o, l), S = R ?? oe(r, e, l, a, false) ?? (typeof b === "string" && a.toolUseId !== void 0 ? { slug: b, env: (0, import_chunk_r8478wtb.Ws)() } : null);
    if (S !== null && (0, import_chunk_r8478wtb.kf)() === null && Ge(r) === null && Ye(l) === void 0 && H((0, import_chunk_bz1f2qnq.Z)(a), o, l, "deny") === null) await (0, import_chunk_p6x4t4m6.bg)(S, a, "artifacts-mcp");
    let O = Q(r, o, c, l, a, ce(r, o, l, a) || oe(r, e, l, a) !== null);
    if (O !== void 0) return O;
    if (o === import_chunk_pkzhb7kv.ble) {
      let M = ie(l);
      if (M === null && G(l)) return { behavior: "deny", message: fe, decisionReason: { type: "other", reason: fe } };
      let de = M === null ? null : await De(l)?.decide(a, M, { replyGrant: null, threadId: () => (0, import_chunk_ma3kja9f.T)(l) && typeof l.thread === "string" ? l.thread : void 0, lateDeny: () => Q(r, o, c, l, a) ?? null, askRule: (Se) => H(Se, o, l, "ask")?.rule ?? (0, import_chunk_ht27b0vz.Di)(Se, e), updatedInput: () => {
        return;
      } });
      if (de !== null && de !== void 0) return de;
    }
    let P = Object.hasOwn(J5, o) ? await m.call(e, l, a) : Pe(c), F = Q(r, o, c, l, a, ce(r, o, l, a) || oe(r, e, l, a) !== null);
    if (F !== void 0) return F;
    let D = H((0, import_chunk_bz1f2qnq.Z)(a), o, l, "ask"), I = await (0, import_chunk_tb4dhgzn.cgo)(P, D?.rule ?? null, async () => D === null ? "" : pe(D, c)), N = I.behavior === "deny" ? void 0 : M1n(o, l, a);
    if (N !== void 0) {
      if (N.behavior === "ask" && a.toolUseId !== void 0) Be(y, a.toolUseId);
      return N;
    }
    if (D !== null && I.behavior === "ask") return { ...I, suppressAlwaysAllowRule: true };
    if (I.behavior !== "passthrough") return I;
    let v = (0, import_chunk_bz1f2qnq.Z)(a);
    if (v.mode === "plan") return I;
    if (ce(r, o, l, a)) {
      if (a.toolUseId !== void 0) p.add(a.toolUseId);
      else if (!(0, import_chunk_bz1f2qnq.vvr)(a)) (0, import_chunk_0rkwgmhx.se)().routineRunTainted = true;
      return { behavior: "allow", updatedInput: l, decisionReason: { type: "other", reason: "A scheduled task's new artifact, private to the person" } };
    }
    let V = oe(r, e, l, a);
    if (V !== null) return (0, import_chunk_9hnj2g25.ybr)(V.op, V.slug), { behavior: "allow", updatedInput: l, decisionReason: { type: "other", reason: "A scheduled task's save to an artifact the person can edit" } };
    let ee = Q(r, o, c, l, a);
    if (ee !== void 0) return ee;
    let J = le.has(o) ? Hje(o, l) : null, Ae = Ne(r, o, l), Re = Ae === null ? void 0 : (0, import_chunk_9hnj2g25.F1n)({ slug: Ae, env: (0, import_chunk_r8478wtb.Ws)() }, [], a), Y = Re ?? (J === null ? void 0 : (0, import_chunk_qtg8rez4.$Et)(J)), B = J !== null && Y !== void 0 && a.toolUseId !== void 0 && (0, import_chunk_bz1f2qnq.OS)(a) && !(0, import_chunk_xfj2cwfv.Jr)(v.mode) && !(0, import_chunk_865at33z.qi)(a.agentContext) ? { toolUseId: a.toolUseId, sighting: { slug: J, seq: Y, askedIn: (0, import_chunk_z1z1qsrb.bRe)() }, reason: `A comment or page text that may not be the person's own is pending on this artifact, so ${c} needs their answer.` } : void 0, ne = Me(r, e, l, a), z = { slug: ne ?? Ve, env: (0, import_chunk_r8478wtb.Ws)() }, Xe = o === import_chunk_pkzhb7kv.Ybe ? import_chunk_z1z1qsrb.Zyo : import_chunk_z1z1qsrb.vE, ue = ne === void 0 ? void 0 : (0, import_chunk_9hnj2g25.GO)("write", z, a), te = ue === void 0 ? void 0 : Xe(ue), be = false;
    if (te?.ask === true && te.basis !== "unattended") {
      let M = (0, import_chunk_9hnj2g25.cV)({ ruling: te, slug: z.slug, display: { url: ne === null ? x : (0, import_chunk_r8478wtb.sr)(z), title: (0, import_chunk_r8478wtb.cK)((0, import_chunk_qtg8rez4.Bt)(z.slug)?.title) }, action: "write", input: l, context: a, userOnly: Y !== void 0 && !(0, import_chunk_xfj2cwfv.Jr)(v.mode), ...B !== void 0 && { note: B.reason } });
      if (M.behavior !== "allow") {
        if (M.behavior === "ask" && a.toolUseId !== void 0 && !h.has(a.toolUseId)) h.set(a.toolUseId, B?.sighting);
        if (ne !== null && Y === void 0 && ue?.outsideCommentRead !== true && o !== import_chunk_a7h1jnra.yN && o !== import_chunk_pkzhb7kv.Ybe && (0, import_chunk_ma3kja9f.T)(l) && l.files === void 0 && l.contract === void 0 && a.toolUseId !== void 0) (0, import_chunk_1yn47zgk.sle)(w, a.toolUseId, (0, import_chunk_1yn47zgk.x8e)(l));
        return M.behavior === "ask" ? { ...M, updatedInput: l } : M;
      }
      be = (0, import_chunk_z1z1qsrb.OEt)((0, import_chunk_z1z1qsrb.SRe)(te), z.slug);
    }
    if (B !== void 0) {
      if (!h.has(B.toolUseId)) h.set(B.toolUseId, B.sighting);
      return { behavior: "ask", message: B.reason, suppressAlwaysAllowRule: true, decisionReason: { type: "safetyCheck", reason: B.reason, classifierApprovable: false } };
    }
    if (Re !== void 0 && (0, import_chunk_xfj2cwfv.Jr)(v.mode)) return { behavior: "ask", message: "Someone else may have commented on or edited this artifact, and Claude may be doing what they asked.", suppressAlwaysAllowRule: true, decisionReason: { type: "safetyCheck", reason: "Someone else may have commented on or edited this artifact, and Claude may be doing what they asked.", classifierApprovable: true } };
    let ke = Fe(e, l, a);
    if (ke !== void 0) return ke;
    if (!Object.hasOwn(J5, o) || X(o, l)) return I;
    if (r === "laptop" && (o === "publish_version" || o === "edit_version") && we(o, l) && ((0, import_chunk_r8478wtb.kf)() !== null || (0, import_chunk_p6x4t4m6.lWt)(ae(o, l)?.slug)) && (0, import_chunk_ma3kja9f.T)(l) && (l.shared_live ?? "") === "" && l.contract === void 0 && !(0, import_chunk_865at33z.qi)(a.agentContext) && (0, import_chunk_865at33z.bw)(a.messages)) return { behavior: "allow", updatedInput: l, decisionReason: { type: "other", reason: "Redeploy of an artifact already published this session" } };
    if (be && o !== import_chunk_a7h1jnra.yN && (0, import_chunk_ma3kja9f.T)(l) && l.files === void 0 && l.contract === void 0 && Y === void 0 && a.hookAskFloor !== true && !(0, import_chunk_865at33z.qi)(a.agentContext) && !(0, import_chunk_9hnj2g25.Fit)(a)) return { behavior: "allow", updatedInput: l, decisionReason: { type: "other", reason: "A person already allowed changes to this artifact" } };
    let Ze = J5[o]?.action, Ce = Le(r, e, l, a);
    if (Qe.has(Ze) || Ce !== null && (0, import_chunk_9hnj2g25.L1n)(Ce, a).owned === true && a.hookAskFloor !== true) return { behavior: "allow", updatedInput: l, decisionReason: { type: "other", reason: "Nobody is asked about this Artifacts action" } };
    let Te = bn.has(o) && (0, import_chunk_ma3kja9f.T)(l) && (l.shared_live ?? "") === "" && Y === void 0 && !(0, import_chunk_xfj2cwfv.Jr)(v.mode) && (v.modeBeforeRewrite === void 0 || !(0, import_chunk_xfj2cwfv.Jr)(v.modeBeforeRewrite)) ? (0, import_chunk_ht27b0vz.m1)(v, W) : null;
    return Te === null ? I : { behavior: "allow", updatedInput: l, decisionReason: { type: "rule", rule: Te } };
  }, e.permissionCheckFailureDecision = (l, a) => {
    let R = Q(r, o, c, l, a);
    if (R !== void 0) return R;
    if (o === import_chunk_pkzhb7kv.ble && G(l)) {
      let P = `${me} and the permission check for this call couldn't finish. Try once more; if it fails again, tell the user the comments couldn't be read.`;
      return { behavior: "deny", message: P, decisionReason: { type: "other", reason: P } };
    }
    let b = Object.hasOwn(J5, o) ? f?.call(e, l, a) ?? Fe(e, l, a) : Pe(c), S = b?.behavior === "deny" ? void 0 : M1n(o, l, a);
    if (S !== void 0) {
      if (S.behavior === "ask" && a.toolUseId !== void 0) Be(y, a.toolUseId);
      return S;
    }
    let O = H((0, import_chunk_bz1f2qnq.Z)(a), o, l, "ask");
    if (O === null || b?.behavior === "deny") return b;
    return b?.behavior === "ask" ? { ...b, matchedAskRule: b.matchedAskRule ?? O.rule } : { behavior: "ask", message: `${pe(O, c)} This tool's permission check couldn't finish, so approving covers this call only.`, suppressAlwaysAllowRule: true, decisionReason: { type: "rule", rule: O.rule } };
  };
  let g = e.call;
  e.call = async (l, a, R, b, S, O) => {
    let P = a.toolUseId !== void 0 && p.delete(a.toolUseId), F = a.toolUseId === void 0 ? void 0 : h.get(a.toolUseId);
    if (a.toolUseId !== void 0) h.delete(a.toolUseId);
    (0, import_chunk_9hnj2g25._br)(a);
    let D = J5[o]?.action === "publish" ? Hje(o, l) : null;
    if (D !== null && (0, import_chunk_0rkwgmhx.se)().reservedMints.has(D)) (0, import_chunk_0rkwgmhx.se)().mcpTriedMints.add(D);
    try {
      let I = await g.call(e, l, a, R, b, S, Tn(Cn(O, a, y), a, r));
      if (F !== void 0 && F.slug === Hje(o, l) && !(0, import_chunk_bz1f2qnq.TN)(a) && (0, import_chunk_bz1f2qnq.OS)(a) && !(0, import_chunk_xfj2cwfv.Jr)((0, import_chunk_bz1f2qnq.Z)(a).mode)) {
        if ((0, import_chunk_qtg8rez4.Vkr)(F.slug, F.seq), F.askedIn === (0, import_chunk_z1z1qsrb.bRe)() && !(0, import_chunk_bz1f2qnq.k_)(a) && !(0, import_chunk_m9439hrw.Dpe)(a)) (0, import_chunk_qtg8rez4.zkr)(F.slug, F.seq, []);
      }
      if (P) {
        let { read: N, shared: v } = (0, import_chunk_a7h1jnra.Iyo)(I.data);
        (0, import_chunk_9hnj2g25.Uit)((0, import_chunk_a7h1jnra.n9)(I.data)?.slug, N === void 0 ? "unknown_outcome" : N === "" ? "empty" : (0, import_chunk_qtg8rez4.wle)(N, v).mode);
      }
      return I;
    } catch (I) {
      if (P) (0, import_chunk_9hnj2g25.Uit)(void 0, "unknown_outcome");
      throw I;
    }
  }, e.permissionCard = (l, a, R) => {
    let b = (0, import_chunk_0rkwgmhx.se)().askClassCards.get(a), S = w.get(a), [O, ...P] = b?.reason === R && S !== void 0 && S === (0, import_chunk_1yn47zgk.x8e)(l) ? b.parts : [];
    return O === void 0 ? void 0 : { question: O, lines: P, values: [] };
  };
  let k = e.checkPermissions;
  e.checkPermissions = async (l, a) => {
    try {
      return await (0, import_chunk_1yn47zgk._gs)(a.toolUseId, () => k.call(e, l, a));
    } finally {
      if (a.toolUseId !== void 0 && !h.has(a.toolUseId)) h.set(a.toolUseId, void 0);
    }
  };
  let C = J5[o]?.action;
  if (C === "delete_asset" || C === "delete") {
    let { checkPermissions: l, permissionCheckFailureDecision: a } = e;
    e.checkPermissions = async (R, b) => $e(e, await l.call(e, R, b)), e.permissionCheckFailureDecision = (R, b) => {
      let S = $e(e, a?.call(e, R, b) ?? { behavior: "passthrough", message: `The permission check for ${c} couldn't finish.`, checkIncomplete: true });
      return S.behavior === "passthrough" ? void 0 : S;
    };
  }
  if (o === import_chunk_pkzhb7kv.ble) {
    let l = e.call;
    e.call = async (a, R, ...b) => {
      let S = ie(a);
      if (S === null && G(a)) throw new import_chunk_r8478wtb.pt(fe, "mcp_comments_slug_unread");
      let O = S === null ? void 0 : De(a)?.consume(R, S.slug);
      if (O?.noticeStood === true && !O.judged) throw new import_chunk_r8478wtb.pt(`${me} and this call's permission check did not ask for it. Call read_comments again for this artifact so the user can be asked.`, "mcp_comments_notice_unchecked");
      let P = r === "laptop" ? await (0, import_chunk_5m00y1wc.Zje)(R.credentials) : null, F = await l.call(e, a, R, ...b), D = Hje(o, a);
      if (D !== null) {
        let I = (0, import_chunk_865at33z.qi)(R.agentContext), N = P === null ? { account: void 0, tokens: (0, import_chunk_5m00y1wc.EEt)() } : await (0, import_chunk_5m00y1wc.Zje)(R.credentials), v = (0, import_chunk_a7h1jnra.Oyo)(F.data, N, P === null || P.account !== void 0 && P.account === N.account);
        if (!I) if (v === null) (0, import_chunk_qtg8rez4.i2e)(D, "fromRead");
        else (0, import_chunk_qtg8rez4.ojt)(D, v);
        if (v === null || v.some((V) => V.outsideAuthor === true)) {
          let { outsideCommentReads: V, outsideCommentsHanded: ee } = (0, import_chunk_0rkwgmhx.se)().shareStatus;
          (I ? ee : V).add(D);
        }
      }
      return F;
    };
  }
  let U = Object.hasOwn(J5, o) ? J5[o] : void 0, L = U === void 0 || U.type !== void 0 || o === "edit_version" || U.givesStoredText === true || (C === void 0 ? U.noOthersWriting !== true : !sn.has(C)), E = e.call;
  e.call = async (...l) => {
    let a = L || I1n(o, l[0]).readsBack === true;
    try {
      return await E.apply(e, l);
    } finally {
      if (a) (0, import_chunk_k4bfa4wx.Ox)();
    }
  };
}
function $e(n, e) {
  if (e.behavior === "ask") return { ...e, defaultToNo: true };
  if (e.behavior !== "passthrough" || !(0, import_chunk_1s8tg9aq.zO)(n, e)) return e;
  return { behavior: "ask", message: e.message, suppressAlwaysAllowRule: true, defaultToNo: true, ...e.checkIncomplete === true && { checkIncomplete: true } };
}
var kn = 64;
function Be(n, e) {
  n.add(e);
  let r = n.values().next().value;
  if (n.size > kn && r !== void 0) n.delete(r);
}
function Cn(n, e, r) {
  return e.toolUseId !== void 0 && r.delete(e.toolUseId) && (0, import_chunk_67g14a1x.ugo)({ ...e, lateAnswerFor: void 0 }) ? { ...n, mcpCallMeta: { ...n?.mcpCallMeta, [import_chunk_ddfyyyy7.S_l]: true } } : n;
}
function Tn(n, e, r) {
  try {
    return r === "laptop" && (0, import_chunk_pkzhb7kv.Gys)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_WEB_FETCH && (0, import_chunk_2nv4wrez.ba)(import_chunk_ww0784kh.DRe) === null && (0, import_chunk_ht27b0vz.Tr)((0, import_chunk_bz1f2qnq.Z)(e), { name: import_chunk_ww0784kh.Gn }) === null ? { ...n, mcpCallMeta: { ...n?.mcpCallMeta, "anthropic/publicFetch": true } } : n;
  } catch {
    return n;
  }
}
function We(n) {
  let e = typeof n === "string" ? (0, import_chunk_a7h1jnra.j0e)(n) : null, r = e === null ? void 0 : (0, import_chunk_qtg8rez4.Bt)(e);
  return `${Rn(n) ? import_chunk_r8478wtb.eIr : (0, import_chunk_qtg8rez4.aM)((0, import_chunk_qtg8rez4.kU)(r) ? r : { role: void 0 })}${(0, import_chunk_qtg8rez4.Cre)(r)}`;
}
