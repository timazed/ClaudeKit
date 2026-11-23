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
var chunk_jbxdnn6m_exports = {};
__export(chunk_jbxdnn6m_exports, {
  KVo: () => KVo,
  TYs: () => TYs,
  VVo: () => VVo,
  XOa: () => XOa,
  YOa: () => YOa,
  wHt: () => wHt
});
module.exports = __toCommonJS(chunk_jbxdnn6m_exports);
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var wHt = 1e4;
var TYs = { kind: "cursor_not_valid", text: "(that cursor is not valid: this session did not issue it, or it has expired \u2014 no agents were looked up; call again with no cursor to list them from the start)" }, u = 32;
class VVo {
  #t = /* @__PURE__ */ new Map();
  listedBefore(t) {
    return this.#t.get(t);
  }
  issue(t, i) {
    this.#t.set(t, i);
    for (let n of this.#t.keys()) {
      if (this.#t.size <= u) break;
      this.#t.delete(n);
    }
  }
}
var YOa = new import_chunk_pzzqg6s3.ze(() => new VVo());
function XOa(t) {
  let i = t.blocks.map((s) => ({ ...s, rows: s.rows.filter((d) => !t.listed.has(d.key)).sort(f) })), n = i.flatMap((s) => s.rows).sort(f), l = (0, import_crypto.randomBytes)(4).toString("hex");
  if (n.length === 0 && !t.incomplete) i.push({ kind: "sessions", title: "", total: 0, rows: [], neverListed: 0, notes: [{ kind: "no_more_agents", text: "(nothing more to list: every agent this call found is on an earlier page \u2014 call again with no cursor to list them from the start)" }], text: "(nothing more to list: every agent this call found is on an earlier page \u2014 call again with no cursor to list them from the start)" });
  let o = n.length, g = h(t, i, n, o, l);
  if (g.listing.length > wHt) {
    o = 1, g = h(t, i, n, o, l);
    while (o < n.length) {
      let s = h(t, i, n, o + 1, l);
      if (s.listing.length > wHt) break;
      g = s, o++;
    }
  }
  if (o < n.length || t.incomplete) t.cursors.issue(l, /* @__PURE__ */ new Set([...t.listed, ...n.slice(0, o).map((s) => s.key)]));
  return g;
}
function f(t, i) {
  return t.activeAt === i.activeAt ? 0 : i.activeAt - t.activeAt;
}
function h(t, i, n, l, o) {
  let g = new Set(n.slice(0, l)), s = i.map((e) => ({ ...e, rows: e.rows.filter((a) => g.has(a)) })), d = [...t.head];
  for (let e of s) {
    let a = e.notes.map((r) => `  ${r.text}`);
    if (e.rows.length > 0) {
      if (e.neverListed > 0) a.unshift(KVo(e.neverListed));
      a.unshift(`${e.title} (${e.total}):`, ...e.rows.map((r) => r.line));
    }
    if (a.length > 0) {
      let r = a.join(`
`).trimStart();
      d.push(e.wrap?.(r) ?? r);
    }
  }
  let c = n.slice(l), p = `with ${t.didFocused ? "the same channel, the same q if any, and " : ""}cursor="${o}"`;
  if (c.length > 0) {
    let e = t.callerCanSend ? (0, import_chunk_4smdap7r.U)(c, ({ agent: r }) => r.ref !== void 0 && r.ref !== r.id) : 0, a = e === 0 ? "" : `; ${import_chunk_bne5t4g3.Ln} still finds ${e === c.length ? "all" : e} of them by name, or by a unique prefix of 3+ characters`;
    d.push(`(\u2026 ${c.length} more not shown \u2014 call again ${p} for the next page${a})`);
  } else if (t.incomplete) d.push(`(agents may be missing from this page \u2014 call again later ${p} for any that are)`);
  return { listing: d.join(`

`), blocks: s };
}
function KVo(t) {
  return `  (\u2026 ${t} more not shown)`;
}
