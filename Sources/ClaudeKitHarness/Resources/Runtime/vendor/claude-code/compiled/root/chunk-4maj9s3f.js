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
var chunk_4maj9s3f_exports = {};
__export(chunk_4maj9s3f_exports, {
  tIe: () => tIe
});
module.exports = __toCommonJS(chunk_4maj9s3f_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var m = 2, g = 2, S = 36, C = 30, h = 4;
function b(t, n) {
  let o = Math.max(n, 1), e = [];
  for (let s of t.split(`
`)) {
    if (/^\s+\S/.test(s)) {
      e.push(s);
      continue;
    }
    let r = s.match(/\s*\S+/g);
    if (!r) {
      e.push("");
      continue;
    }
    let i = "", a = 0, u = false;
    for (let p of r) {
      let c = (0, import_chunk_mgh1y10w.oe)(p);
      if (!u) i = p, a = c, u = true;
      else if (a + c <= o) i += p, a += c;
      else {
        e.push(i);
        let d = p.replace(/^\s+/, "");
        i = d, a = (0, import_chunk_mgh1y10w.oe)(d);
      }
    }
    e.push(i);
  }
  return e.join(`
`);
}
function f(t, n, o, e) {
  let s = " ".repeat(m);
  if (!n) return s + t;
  let r = (0, import_chunk_mgh1y10w.oe)(t);
  if (n.includes(`
`)) {
    let c = r <= o ? (0, import_chunk_7cfjrnwy.xd)(" ", o - r + g) : " ".repeat(g);
    return (s + t + c + n).replace(/\n/g, `
` + s);
  }
  let i = e - m - o - g;
  if (r <= o && i >= C) {
    let c = (0, import_chunk_7cfjrnwy.xd)(" ", o - r + g), d = " ".repeat(m + o + g), D = b(n, i);
    return s + t + c + D.replace(/\n/g, `
` + d);
  }
  let a = " ".repeat(m + h), u = e - m - h, p = b(n, u);
  return s + t + `
` + a + p.replace(/\n/g, `
` + a);
}
function l(t, n, o) {
  if (o.length === 0) return;
  t.push(n, ...o, "");
}
function E(t, n) {
  let o = n.helpWidth || 80, e = Math.min(n.padWidth(t, n), S), s = [`Usage: ${n.commandUsage(t)}`, ""], r = n.commandDescription(t);
  if (r.length > 0) s.push(b(r, o), "");
  return l(s, "Arguments:", n.visibleArguments(t).map((i) => f(n.argumentTerm(i), n.argumentDescription(i), e, o))), l(s, "Options:", n.visibleOptions(t).map((i) => f(n.optionTerm(i), n.optionDescription(i), e, o))), l(s, "Commands:", n.visibleCommands(t).map((i) => f(n.subcommandTerm(i), n.subcommandDescription(i), e, o))), s.join(`
`);
}
function tIe() {
  let t = (n) => n.long?.replace(/^--/, "") ?? n.short?.replace(/^-/, "") ?? "";
  return { sortSubcommands: true, formatHelp: E, compareOptions: (n, o) => t(n).localeCompare(t(o)) };
}
