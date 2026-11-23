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
var chunk_v3ek5a4a_exports = {};
__export(chunk_v3ek5a4a_exports, {
  I$a: () => I$a,
  O$a: () => O$a,
  P$a: () => P$a
});
module.exports = __toCommonJS(chunk_v3ek5a4a_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var p = { marker: "", run: 0 }, w = 6, h = ["User:", "Human:"], a = "user", C = 100, L = 8;
function M(r) {
  let t = p;
  for (let e = 0; ; ) {
    let n = O(r, e, t);
    if (n !== void 0) t = n;
    else if (t.marker === "") {
      if (h.some((u) => r.startsWith(u, e))) return { family: "speaker_label_line", after_word: "", paragraph_initial: false };
      let s = r.startsWith(a, e) ? b(r, e + a.length) : void 0;
      if (s !== void 0) return { family: "role_word_line", after_word: s, paragraph_initial: e === 1 || e >= 2 && r[e - 2] === `
` };
    }
    let o = r.indexOf(`
`, e);
    if (o < 0) return;
    e = o + 1;
  }
}
function m(r) {
  for (let t of r) {
    let e = M(t);
    if (e !== void 0) return e;
  }
  return;
}
function x(r, t) {
  if (r !== void 0) return { position: "same_round", ...r };
  let e = t.findLastIndex((n) => n.role === "own_user");
  if (e < 0) return;
  for (let n = t.length - 1; n > e; n--) {
    let o = d(t[n]);
    if (o !== void 0) return { position: "same_turn", ...o };
  }
  for (let n = e - 1; n >= 0 && t[n].role !== "own_user"; n--) {
    let o = t[n], s = d(o);
    if (s !== void 0) return { position: "prior_reply", ...s };
    if (o.role === "assistant" && o.texts.some((u) => u !== "")) break;
  }
  return;
}
function E(r) {
  let t = 0;
  for (let e = r.length - 1; e >= 0 && t < C; e--) {
    let n = r[e];
    if (n.role === "own_user") {
      t++;
      continue;
    }
    let o = d(n);
    if (o !== void 0) return { position: "review_window", exchanges_back: t, ...o };
  }
  return;
}
function g(r) {
  let t = [], e;
  for (let n of r) {
    if ((0, import_chunk_f9x2f6cx.Gh)(n)) continue;
    if (n.type === "assistant") {
      if (n.isApiErrorMessage || n.message.model === import_chunk_bp9b0hd8.xs) continue;
      if (e === void 0 || n.message.id === void 0 || e.id !== n.message.id) e = { id: n.message.id, texts: [] }, t.push({ role: "assistant", texts: e.texts });
      e.texts.push(...y(n));
    } else if (t.at(-1)?.role !== "own_user" && (0, import_chunk_865at33z.WN)(n) && !(0, import_chunk_0ha8wex8.rg)(n) && !(Array.isArray(n.message.content) && n.message.content.some((o) => o.type === "tool_result"))) t.push({ role: "own_user", texts: [] }), e = void 0;
  }
  return t;
}
function P$a(r) {
  try {
    return E(g(r));
  } catch (t) {
    c("role_line_pass_scan_failed", t);
    return;
  }
}
class f {
  byMessageId = /* @__PURE__ */ new Map();
}
function O$a(r, t) {
  try {
    if (!(0, import_chunk_865at33z.wke)((0, import_chunk_865at33z.QCt)(r.options.mcpClients))) return;
    let e = r.toolState.get(f).byMessageId, n = e.has(t.message.id) ? void 0 : m(y(t));
    if (n === void 0) return;
    e.set(t.message.id, n);
    for (let o of e.keys()) {
      if (e.size <= L) break;
      e.delete(o);
    }
  } catch (e) {
    c("role_line_stream_scan_failed", e);
  }
}
function I$a(r, t, e, n, o) {
  try {
    if (t && (0, import_chunk_sjqze7qg.lis)(n)) return;
    let s = t && !(0, import_chunk_sjqze7qg.xSi)(n) && !import_chunk_865at33z.rmn.has(e) ? x(n.toolState.get(f).byMessageId.get(o), g(n.messages)) : void 0;
    if (s === void 0) delete r[import_chunk_865at33z.UPr];
    else r[import_chunk_865at33z.UPr] = (0, import_chunk_w578pjby._)(s);
  } catch (s) {
    delete r[import_chunk_865at33z.UPr], c("role_line_call_scan_failed", s);
  }
}
function O(r, t, e) {
  let n = t;
  while (r[n] === " ") n++;
  let o = r[n];
  if (n - t > 3 || o !== "`" && o !== "~" || r[n + 1] !== o || r[n + 2] !== o) return;
  let s = 3;
  while (s < w && r[n + s] === o) s++;
  if (e.marker === "") return { marker: o, run: s };
  return e.marker === o && s >= e.run ? p : e;
}
function b(r, t) {
  if (r.startsWith(a, t)) return "doubled";
  if (r.length - t < a.length && a.startsWith(r.slice(t))) return;
  let e = r[t];
  if (e.charCodeAt(0) >= 128) return "nonascii";
  if (e >= "a" && e <= "z" || e >= "0" && e <= "9" || e === "_") return;
  if (e >= "A" && e <= "Z") return "upper";
  switch (e) {
    case `
`:
    case "\r":
      return "eol";
    case " ":
    case "	":
      return "space";
    case ":":
      return "colon";
    case "<":
      return "lt";
    default:
      return "other";
  }
}
function c(r, t) {
  try {
    (0, import_chunk_cqa9hrgx.l)("ccr_memory_extract", r), (0, import_chunk_k449cc64.i)(t);
  } catch {
  }
}
function d(r) {
  return r.role === "assistant" ? m(r.texts) : void 0;
}
function y(r) {
  return r.message.content.flatMap((t) => t.type === "text" ? [t.text] : []);
}
