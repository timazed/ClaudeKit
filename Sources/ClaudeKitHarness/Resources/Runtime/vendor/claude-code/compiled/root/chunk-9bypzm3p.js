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
var chunk_9bypzm3p_exports = {};
__export(chunk_9bypzm3p_exports, {
  $8s: () => $8s,
  $Kr: () => $Kr,
  AVo: () => AVo,
  B8s: () => B8s,
  BKr: () => BKr,
  CVo: () => CVo,
  EOa: () => EOa,
  F8s: () => F8s,
  JYt: () => JYt,
  KYt: () => KYt,
  KZn: () => KZn,
  N8s: () => N8s,
  TOa: () => TOa,
  TVo: () => TVo,
  U8s: () => U8s,
  UKr: () => UKr,
  VYt: () => VYt,
  VZn: () => VZn,
  W8s: () => W8s,
  XYt: () => XYt,
  YYt: () => YYt,
  dqe: () => dqe,
  kOa: () => kOa,
  lTn: () => lTn,
  qYt: () => qYt,
  vOa: () => vOa,
  vVo: () => vVo,
  wOa: () => wOa
});
module.exports = __toCommonJS(chunk_9bypzm3p_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var N8s = true;
var F8s = () => (0, import_chunk_865at33z.Lt)("tengu_agents_md_mod", N8s);
var VYt = "cc-plugin-agents-md";
function $Kr(t, o) {
  let e = /* @__PURE__ */ new Set([t.path]), { path: n, parent: r } = t;
  while (r !== void 0 && !e.has(r)) e.add(r), n = r, r = o.get(r)?.parent;
  return n;
}
var vVo = ["project", "local", "user"];
var KYt = (t) => t.flatMap((o) => o.parts.map((e, n) => ({ path: e.path, kind: "project", content: e.content, ...n > 0 && { parent: o.parts[0]?.path ?? e.path } })));
function wOa(t, o, e) {
  if ((t === "~" || t.startsWith("~/")) && e !== void 0) {
    let r = e.replace(/(?<=.)[\\/]+$/, "");
    return t === "~" ? r : `${r}${c(r)}${t.slice(2)}`;
  }
  return /^(?:[A-Za-z]:)?[\\/]/.test(t) ? t : `${o}${c(o)}${t}`;
}
var c = (t) => t.includes("\\") ? "\\" : "/";
var dqe = (t) => t.replaceAll("\\", "/").replace(/(?<=.)\/+$/, "");
var UKr = (t, o) => dqe(t).startsWith(`${dqe(o)}/`);
var $8s = (t, o) => dqe(t.path) === dqe(o);
var U8s = (t) => `Contents of ${t.path}:

${t.content}`;
function TVo(t, o) {
  let e = new Set(o.map((n) => n.dir));
  return t.filter((n) => !e.has(n.dir));
}
var B8s = (t, o) => [...t ?? [], ...o.map(U8s)];
var qYt = (t) => t.kind === "project" || t.kind === "local";
function lTn(t) {
  let o = dqe(t), e = o.lastIndexOf("/.claude/"), n = e === -1 ? o.lastIndexOf("/") : e;
  return n <= 0 ? "/" : o.slice(0, n);
}
function W8s(t, o) {
  let e = new Map(t.map((s) => [s.path, s])), n = t.findIndex((s) => qYt(s) && UKr(lTn($Kr(s, e)), o));
  if (n !== -1) return n;
  let r = t.findLastIndex(qYt);
  if (r !== -1) return r + 1;
  let i = t.findIndex((s) => s.kind === "memory");
  return i === -1 ? t.length : i;
}
var VZn = ["AGENTS.md", ".claude/AGENTS.md"];
var YYt = ["CLAUDE.md", ".claude/CLAUDE.md", "CLAUDE.local.md"];
var XYt = "main";
var kOa = ["clear", "compact", "resume"];
function CVo(t, o) {
  if (!(qYt(t) && t.parent === void 0 && YYt.some((i) => dqe(t.path).endsWith(`/${i}`)))) return false;
  let n = lTn(t.path), r = dqe(o);
  return n === r || UKr(r, n);
}
var EOa = (t) => !vVo.includes(t.kind);
function KZn(t, o) {
  let e = new Set(o.map((i) => dqe(i.path))), n = new Set(o.filter(qYt).map((i) => i.content.trim())), r = [];
  for (let i of t) {
    let s = dqe(i.path), m = i.content.trim();
    if (!(e.has(s) || m !== "" && n.has(m))) e.add(s), r.push(i);
  }
  return r;
}
function AVo(t, o) {
  if (o.length === 0) return t;
  let e = [...t], n = new Map(o.map((i) => [i.path, i])), r = /* @__PURE__ */ new Map();
  for (let i of o) {
    let s = lTn($Kr(i, n));
    r.set(s, [...r.get(s) ?? [], i]);
  }
  for (let [i, s] of r) e.splice(W8s(e, i), 0, ...s);
  return e;
}
var JYt = "claude-md-or-agents-md";
var x = { none: "managed-only", claude: "claude-md", "agents-fallback": "claude-md-or-agents-md", both: "claude-md-and-agents-md" };
function vOa(t) {
  if (t === void 0) return;
  return (typeof t === "string" ? x[t] : void 0) ?? "claude-md";
}
var BKr = ["claude-md", "claude-md-or-agents-md", "claude-md-and-agents-md", "managed-only"];
var TOa = (t) => BKr.find((o) => o === t) ?? JYt;
