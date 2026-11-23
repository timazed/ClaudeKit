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
var chunk_twqew0sr_exports = {};
__export(chunk_twqew0sr_exports, {
  A3s: () => A3s,
  ARa: () => ARa,
  C3s: () => C3s,
  J6r: () => J6r,
  R3s: () => R3s,
  RRa: () => RRa
});
module.exports = __toCommonJS(chunk_twqew0sr_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ta56chse = require("/$bunfs/root/chunk-ta56chse.js");
var import_chunk_5qqp06t1 = require("/$bunfs/root/chunk-5qqp06t1.js");
var import_path = require("path");
var J6r = 1024, C3s = 64, A3s = ["claude", "anthropic"], o = 200, h = /[^A-Za-z0-9_ .\-/(),\u0080-\uFFFF]/, f = /(?:^|\/)(?:__MACOSX\/|(?:\.DS_Store|Thumbs\.db|desktop\.ini)$)/, p = /[<\uFE64\uFF1C]/, m = /[>\uFE65\uFF1E]/;
function R3s(t) {
  let e = t.search(p);
  return e !== -1 && m.test(t.slice(e + 2));
}
function ARa(t) {
  let e = (0, import_path.basename)(t);
  return e === "SKILL.md" || e.toLowerCase().endsWith(".skill");
}
function RRa(t, e) {
  if ((0, import_path.basename)(t) === "SKILL.md") return d(e);
  let n = [], a = 0, s;
  try {
    [s] = Object.values((0, import_chunk_5qqp06t1.SUt)(e, ({ name: r, originalSize: c, bytesToInflate: u }) => {
      if (r.endsWith("/") || f.test(r)) return false;
      if (n.push(r), !/^(?:[^/]+\/)?SKILL\.md$/.test(r)) return false;
      return a++, a === 1 && Math.max(c, u) <= import_chunk_ta56chse.sS;
    }));
  } catch {
    return;
  }
  if (n.length > o) return { rule: "too_many_files", why: `it holds ${n.length} files, and a saved skill can hold ${o}` };
  let i = n.flatMap((r) => h.exec(r) ?? []);
  if (i[0] !== void 0) return { rule: "path_character", why: `${i.length} of its file ${(0, import_chunk_7cfjrnwy.O)(i.length, "paths has", "paths have")} a character that a saved skill's paths cannot hold, such as ${(0, import_chunk_w578pjby._)(i[0])}; they can hold letters, digits, spaces, _ . - / ( ) and the comma` };
  return s !== void 0 && a === 1 ? d(s) : void 0;
}
function d(t) {
  let [, e] = import_chunk_p1ewvgeh.K7.exec(Buffer.from(t.subarray(0, import_chunk_p1ewvgeh.vle)).toString("utf8")) ?? [];
  if (e === void 0 || e.includes("---")) return;
  let { frontmatter: n } = (0, import_chunk_p1ewvgeh.zd)(`---
${e}
---
`, void 0, { untrusted: true }), a = typeof n.name === "string" ? n.name.toLowerCase() : "";
  if (A3s.some((r) => a.includes(r))) return { rule: "reserved_word_in_name", why: `the name in its SKILL.md header contains "claude" or "anthropic", which a saved skill's name cannot include` };
  if (typeof n.description !== "string") return;
  let s = n.description.trim(), i = (0, import_chunk_7cfjrnwy.xD)(s);
  if (i > J6r) return { rule: "description_too_long", why: `the description in its SKILL.md header has ${i} characters, and a saved skill's description can hold ${J6r}` };
  return R3s(s) ? { rule: "description_has_xml_tag", why: "the description in its SKILL.md header contains angle brackets, which a saved skill's description cannot include" } : void 0;
}
