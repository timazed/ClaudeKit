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
var chunk_52cad0n6_exports = {};
__export(chunk_52cad0n6_exports, {
  ARn: () => ARn,
  B$: () => B$,
  Fue: () => Fue,
  IMe: () => IMe,
  SJt: () => SJt,
  a8o: () => a8o,
  bUe: () => bUe,
  nsr: () => nsr,
  p7r: () => p7r,
  yJt: () => yJt,
  yTe: () => yTe
});
module.exports = __toCommonJS(chunk_52cad0n6_exports);
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function f(t) {
  return t.replace(/^www\./i, "");
}
function bUe(t) {
  if (t.startsWith("[")) {
    let n = t.indexOf("]");
    return n === -1 ? t : t.slice(0, n + 1);
  }
  let e = t.lastIndexOf(":");
  return e === -1 ? t : t.slice(0, e);
}
function B$(t) {
  let e = (0, import_chunk_ha393e1n.RNn)(t).replace(/\.+(?=$|:)/, "").toLowerCase(), n = bUe(e), r = e.slice(n.length), o = ((0, import_chunk_ha393e1n.xNn)(n) || n).replace(/\.+$/, "");
  return f(o + r);
}
var d = new RegExp(`^${import_chunk_1w26p6p9.g7}\\(([^)]+)\\)$`);
function Fue(t) {
  let e = /* @__PURE__ */ new Set(), n = [], r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  return c(t.alwaysDenyRules, r, o), c(t.alwaysAllowRules, e, o, n, r), { allowed: e, denied: r, allowedRaw: n, sourceOf: o };
}
function p7r(t, e) {
  return t.has(e) || t.has(bUe(e));
}
function yTe(t, e) {
  let n = B$(e);
  if (!p7r(t.denied, n)) return;
  return { behavior: "deny", message: `Claude in Chrome is denied on ${e}.`, decisionReason: { type: "rule", rule: { source: t.sourceOf.get(n) ?? t.sourceOf.get(bUe(n)) ?? "session", ruleBehavior: "deny", ruleValue: { toolName: import_chunk_1w26p6p9.g7, ruleContent: e } } } };
}
function c(t, e, n, r, o) {
  for (let [i, s] of Object.entries(t)) for (let l of s ?? []) {
    let a = d.exec(l);
    if (a?.[1]) {
      let u = B$(a[1]);
      if (o && p7r(o, u)) continue;
      if (!e.has(u)) e.add(u), n.set(u, i), r?.push(a[1]);
    }
  }
}
function yJt(t) {
  return ["back", "forward"].includes(t.trim().toLowerCase());
}
var p = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;
function SJt(t) {
  let e = t.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, ""), n;
  try {
    if (n = new URL(e), n.protocol !== "http:" && n.protocol !== "https:") {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) return;
      n = void 0;
    }
  } catch {
  }
  if (!n) {
    if (/^[^/\\?#]*:(?=$|[/\\?#])/.test(e)) return;
    try {
      n = new URL(`https://${e}`);
    } catch {
      return;
    }
    if (p.test((0, import_chunk_xfj2cwfv.H6t)(e))) return;
  }
  if (!n.host || n.username || n.password) return;
  return { host: n.host, url: n.href };
}
function ARn(t) {
  let e = new URL(t.url);
  return e.protocol === "http:" && e.port === "" ? `${e.host}:80` : e.host;
}
function IMe(t) {
  let e = SJt(t);
  return e && { ...e, host: ARn(e) };
}
function a8o(t) {
  if (!Array.isArray(t.actions)) return [];
  let e = [];
  for (let n of t.actions) {
    if (!(0, import_chunk_ma3kja9f.T)(n)) continue;
    let r = (0, import_chunk_ma3kja9f.T)(n.input) ? n.input : {};
    if (n.name === "browser_batch") {
      let s = a8o(r);
      if (s === "unvettable") return s;
      e.push(...s);
      continue;
    }
    if (n.name !== "navigate" || typeof r.url !== "string") continue;
    let o = r.url.trim().toLowerCase();
    if (o === "back" || o === "forward") continue;
    let i = SJt(r.url);
    if (!i) return "unvettable";
    e.push(i.host, ARn(i));
  }
  return e;
}
function nsr(t) {
  if (!Array.isArray(t.actions)) return;
  for (let e of t.actions) {
    if (!(0, import_chunk_ma3kja9f.T)(e) || typeof e.name !== "string") continue;
    let n = (0, import_chunk_ma3kja9f.T)(e.input) ? e.input : {};
    if (import_chunk_rg2p81t1.tye.has(e.name) && (0, import_chunk_sjqze7qg.ACe)(e.name, n)) continue;
    if (e.name === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) continue;
    if (e.name === "navigate" && typeof n.url === "string" || typeof n.tabId === "number") return { toolName: e.name, input: n };
  }
  return;
}
