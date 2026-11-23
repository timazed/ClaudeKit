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
var chunk_5sjwf92x_exports = {};
__export(chunk_5sjwf92x_exports, {
  AU: () => AU,
  Ale: () => Ale,
  Fjt: () => Fjt,
  IR: () => IR,
  JO: () => JO,
  Ljt: () => Ljt,
  Njt: () => Njt,
  c9: () => c9,
  cbo: () => cbo,
  cbs: () => cbs,
  dbo: () => dbo,
  eT: () => eT,
  iv: () => iv,
  mBn: () => mBn,
  sLe: () => sLe,
  ubs: () => ubs,
  xSl: () => xSl,
  yYe: () => yYe
});
module.exports = __toCommonJS(chunk_5sjwf92x_exports);
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_path = require("path");
var import_crypto = require("crypto");
function s(e) {
  return { sha256: (0, import_crypto.createHash)("sha256").update(e, "utf8").digest("hex"), bytes: Buffer.byteLength(e, "utf8") };
}
function Ljt(e, t) {
  return Buffer.byteLength(t, "utf8") === e.bytes && s(t).sha256 === e.sha256;
}
var g = "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.";
function mBn(e) {
  return e === void 0 ? g : `File has been modified on ${e} since this session read it. Read it again there (Read with "_host": "${e}") before attempting to write it.`;
}
function cbs(e) {
  return e === void 0 ? import_chunk_rb36kwbn.SVn : `File content on ${e} has changed since this session read it. Read it again there (Read with "_host": "${e}"), then retry.`;
}
var JO = 5e3, S = 26214400, C = 4096;
function ubs(e) {
  return Bun.hash(e).toString(36);
}
function AU(e) {
  if ((e.offset ?? 1) > 1 || e.isPartialView) return false;
  if (e.limit === void 0) return true;
  return e.content !== "" && (0, import_chunk_7cfjrnwy.Mt)(e.content, `
`) + 1 < e.limit;
}
function Ale(e) {
  return e !== void 0 && AU(e) && !e.contentNotInModelContext;
}
function c9(e, t) {
  if (e.contentHash !== void 0) return e.contentHash === ubs(t);
  return e.content === t;
}
function Njt(e, t) {
  return d(e, t) || e.contentFromTranscript === true && t.endsWith(`
`) && d(e, t.slice(0, -1));
}
function d(e, t) {
  return e.readBaseline !== void 0 ? Ljt(e.readBaseline, t) : c9(e, t);
}
function IR(e) {
  return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
}
function eT(e) {
  return IR(e).replaceAll(`\r
`, `
`);
}
function dbo(e, t) {
  return c9(e, eT(t));
}
class h {
  keepsReadBaselines;
  cache;
  readsBeforeCompaction;
  everHeld = /* @__PURE__ */ new Set();
  startOnly = /* @__PURE__ */ new Set();
  constructor(e, t, n = false) {
    this.keepsReadBaselines = n;
    this.cache = new import_chunk_1frjyv5h.Uf({ max: e, maxSize: t, sizeCalculation: (i) => Math.max(1, Buffer.byteLength(i.content)) });
  }
  get(e) {
    return this.cache.get((0, import_path.normalize)(e));
  }
  markStartOnly(e) {
    this.startOnly.add((0, import_path.normalize)(e));
  }
  noteWholeTextShown(e, t) {
  }
  startOnlyPaths() {
    return [...this.startOnly];
  }
  holdsOnlyStartOf(e) {
    let t = (0, import_path.normalize)(e);
    return this.startOnly.has(t) && !Ale(this.cache.get(t));
  }
  set(e, t) {
    let n = (0, import_path.normalize)(e), i = this.cache.get(n), r = t.keepContent ?? i?.keepContent, a = t.contentHash ?? ubs(t.content), l = t.contentLength ?? t.content.length, f = t.content !== "" || t.contentHash === void 0, m = !(this.keepsReadBaselines || (0, import_chunk_2hdy50wd.wj)()) ? void 0 : f && !t.contentFromTranscript && AU(t) ? s(t.content) : t.readBaseline ?? (a === i?.contentHash ? i?.readBaseline : void 0), c = r && t.content === "" && a === i?.contentHash && i.content ? i.content : t.content, u = r || Buffer.byteLength(c) <= C ? c : "";
    if (this.cache.set(n, { ...t, keepContent: r, contentHash: a, contentLength: l, content: u, readBaseline: m }), AU(t)) this.readsBeforeCompaction?.delete(n);
    return this.remember(n), this;
  }
  remember(e) {
    if (this.everHeld.delete(e), this.everHeld.add(e), this.everHeld.size > this.cache.max) for (let t of this.everHeld) {
      this.everHeld.delete(t);
      break;
    }
  }
  has(e) {
    return this.cache.has((0, import_path.normalize)(e));
  }
  delete(e) {
    let t = (0, import_path.normalize)(e);
    return this.readsBeforeCompaction?.delete(t), this.cache.delete(t);
  }
  clear() {
    this.cache.clear(), this.readsBeforeCompaction = void 0;
  }
  clearForCompaction() {
    let e = this.readsBeforeCompaction ?? new import_chunk_1frjyv5h.Uf({ max: this.cache.max });
    for (let [t, { value: n }] of this.cache.dump()) if (!n.isPartialView && !n.refreshedBehindModel && !e.has(t)) e.set(t, { ...n, content: "" });
    this.clear(), this.readsBeforeCompaction = e;
  }
  readBeforeCompaction(e) {
    return this.readsBeforeCompaction?.peek((0, import_path.normalize)(e));
  }
  renewReadBeforeCompaction(e) {
    let t = (0, import_path.normalize)(e), n = this.cache.peek(t);
    if (n !== void 0) this.readsBeforeCompaction?.set(t, { ...n, content: "" });
  }
  forgetReadsBeforeCompaction() {
    this.readsBeforeCompaction = void 0;
  }
  copyReadsBeforeCompactionFrom(e) {
    if (e.readsBeforeCompaction !== void 0) this.readsBeforeCompaction = new import_chunk_1frjyv5h.Uf({ max: this.cache.max }), this.readsBeforeCompaction.load(e.readsBeforeCompaction.dump());
  }
  get size() {
    return this.cache.size;
  }
  get max() {
    return this.cache.max;
  }
  get maxSize() {
    return this.cache.maxSize;
  }
  get calculatedSize() {
    return this.cache.calculatedSize;
  }
  keys() {
    return this.cache.keys();
  }
  everHeldPaths() {
    return /* @__PURE__ */ new Set([...this.everHeld, ...this.cache.keys()]);
  }
  entries() {
    return this.cache.entries();
  }
  dump() {
    return this.cache.dump();
  }
  load(e) {
    this.cache.load(e);
    for (let t of this.cache.rkeys()) this.remember(t);
  }
}
function iv(e, t = S, n = false) {
  return new h(e, t, n);
}
function cbo(e) {
  return Object.fromEntries(e.entries());
}
function Fjt(e) {
  return Array.from(e.keys());
}
function sLe(e, t) {
  let n = iv(e.max, e.maxSize), i = e.dump();
  if (t?.stripSeededFromContext) {
    for (let r of i) if (r[1].value?.seededFromContext) r[1].value = { ...r[1].value, seededFromContext: false };
  }
  n.load(i), n.copyReadsBeforeCompactionFrom(e);
  for (let r of e.startOnlyPaths()) n.markStartOnly(r);
  return n;
}
function yYe(e) {
  let t = [];
  for (let [n, i] of e.entries()) if (i.startupMemorySeed) t.push([n, i]);
  e.clear();
  for (let [n, i] of t) e.set(n, i);
}
function xSl(e, t) {
  let n = sLe(e);
  for (let [i, r] of t.entries()) {
    let a = n.get(i);
    if (!a || r.timestamp > a.timestamp) n.set(i, r);
  }
  return n;
}
