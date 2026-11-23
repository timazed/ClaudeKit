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
var chunk_z99kppk7_exports = {};
__export(chunk_z99kppk7_exports, {
  J3r: () => J3r,
  Q3r: () => Q3r,
  bQs: () => bQs,
  cDt: () => cDt,
  eXt: () => eXt,
  mnr: () => mnr,
  tXt: () => tXt
});
module.exports = __toCommonJS(chunk_z99kppk7_exports);
var import_chunk_0wh73s24 = require("/$bunfs/root/chunk-0wh73s24.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_3nqvc94p = require("/$bunfs/root/chunk-3nqvc94p.js");
var import_chunk_604g0r96 = require("/$bunfs/root/chunk-604g0r96.js");
function mnr(n) {
  let t = (0, import_chunk_xfj2cwfv.Pi)((0, import_chunk_tp3c5q2s.Ft)(n, 80)).trim();
  return t !== "" ? t : "Untitled project";
}
function J3r(n) {
  switch (n) {
    case "flag":
      return '--project is gone. Put the project first, by its name in double quotes, its id or its link, as in /send-to-project "Billing service".';
    case "quotes":
      return 'Put the project\u2019s name between one pair of double quotes, as in /send-to-project "Billing service". For a name that holds a quote, run /send-to-project alone and pick the project.';
    case "link":
      return "That link is not a Claude Project\u2019s. Use the project\u2019s name in double quotes or its id, or run /send-to-project alone and pick the project.";
  }
}
function Q3r(n, t, e) {
  return t.kind === "ambiguous" ? `More than one of your Claude Projects is named \u201C${(0, import_chunk_tp3c5q2s.Ft)(t.name, 80)}\u201D. ${"Run /send-to-project alone to pick the project."}` : `None of your ${e ? `${import_chunk_0wh73s24.rXt} most recently active ` : ""}personal projects is named \u201C${(0, import_chunk_tp3c5q2s.Ft)(n.trim(), 80)}\u201D. A project that is shared, paused or archived can\u2019t be named here, and a message can\u2019t open with a double quote. ${"Run /send-to-project alone to pick the project."}`;
}
var bQs = /^["\u201C]/;
function cDt(n) {
  let t = n.trimStart(), e = /^\S+/.exec(t)?.[0] ?? "";
  if (e === "--project" || e.startsWith("--project=")) return { kind: "problem", problem: "flag" };
  if (bQs.test(e)) {
    let r = /^["\u201C]([^"\u201C\u201D\n]*)["\u201D](?=[\s,.;:!?]|$)/.exec(t), i = r?.[1]?.trim() ?? "";
    return r === null || i === "" ? { kind: "problem", problem: "quotes" } : { kind: "name", name: i, note: t.slice(r[0].length).replace(/^[,.;:!?]+/, "").trim() };
  }
  let o = import_chunk_3nqvc94p.RY.test(e) ? e : (0, import_chunk_604g0r96.w9r)(e)?.projectId ?? "";
  if (import_chunk_3nqvc94p.RY.test(o)) return { kind: "id", projectId: o, note: t.slice(e.length).trim() };
  return /^[a-z][a-z0-9+.-]*:\/\/\S*(\/project\/|chan_)/i.test(e) ? { kind: "problem", problem: "link" } : { kind: "note", note: n };
}
function eXt(n, t) {
  let e = /* @__PURE__ */ new Map();
  for (let o of n) {
    let r = /* @__PURE__ */ new Set([(0, import_chunk_3nqvc94p.ftt)(o.name), t.get(o.id) ?? ""]);
    r.delete("");
    for (let i of r) e.set(i, [...e.get(i) ?? [], o]);
  }
  return e;
}
function tXt(n, t) {
  let [e, ...o] = t.get((0, import_chunk_3nqvc94p.ftt)(n)) ?? [];
  if (e === void 0) return { kind: "none" };
  return o.length > 0 ? { kind: "ambiguous", name: e.name } : { kind: "match", project: e };
}
