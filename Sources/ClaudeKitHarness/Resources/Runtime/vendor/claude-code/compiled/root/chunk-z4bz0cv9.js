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
var chunk_z4bz0cv9_exports = {};
__export(chunk_z4bz0cv9_exports, {
  E4s: () => E4s,
  HYl: () => HYl,
  ZGo: () => ZGo,
  ezo: () => ezo,
  fAa: () => fAa,
  mAa: () => mAa,
  nzo: () => nzo,
  pAa: () => pAa,
  tzo: () => tzo,
  v4s: () => v4s
});
module.exports = __toCommonJS(chunk_z4bz0cv9_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var ZGo = "Inner tool errors (likely root cause):";
function fAa(t, e) {
  if ((0, import_chunk_r3kja8v6.ue)()) {
    if (/^TypeError: ".*" is not a function/s.test(t) && e.includes("``")) return "Hint: two backticks in a row end one template literal and tag the next, so a string gets called. Text that contains backticks or `${` is safer in a '\u2026' or \"\u2026\" string, or read from a file.";
    let n = /\.(text|json|lines)\(\)\.(\w+) is not a function/.exec(t);
    if (n !== null) {
      let [, o, i] = n;
      return `Hint: \`.${o}()\` returns a promise: \`(await file(p).${o}()).${i}(\u2026)\` \u2014 the await needs its own parentheses before the next method.`;
    }
    if (new RegExp(`^.*${import_chunk_2b1wcpvk.ga} (is not defined|is not a function)`).test(t)) return `Hint: ${import_chunk_2b1wcpvk.ga} is not available in code. Call it directly, as a tool call of its own.`;
    if (/^.*EvalError: Code generation from strings disallowed/.test(t)) return "Hint: `eval` and the `Function` constructors are off in this context by design, so a script cannot run a string as code here. To reload helpers saved in a file, read it, then send its text as the code of its own call: its top-level declarations stay defined for later calls.";
  }
  return "";
}
function ezo(t, e, n) {
  if ((0, import_chunk_r3kja8v6.ue)()) return `[The ${t} stopped this script's code ${e} ${e === 1 ? "time" : "times"}: a turn took more than ${n}. A turn is the code that runs from the script's start, a tool call's result or a timer's firing until the next tool call's result or timer. If nothing awaited the stopped code (a timer's callback, an async function called without await), it ended partway with no error. Give one turn less to do, or split it with an await of a tool call or a timer.]`;
  return "";
}
function pAa(t) {
  if ((0, import_chunk_r3kja8v6.ue)()) return `[A hook deferred this script's ${t} call, so the script was stopped there. That one call has now been attempted, and its outcome is the result or error below. The rest of the script did not run, and its variables may be gone. What it had done before the stop:]`;
  return "";
}
var p = 8;
function mAa(t) {
  if ((0, import_chunk_r3kja8v6.ue)() && t.length > 0) {
    let e = t.length - p;
    return ` Not set by this script: ${t.slice(0, p).join(", ")}${e > 0 ? ` and ${e} more` : ""} (a name that already had a value keeps it, unless this script has it in a \`let\` with no value).`;
  }
  return "";
}
function E4s(t, e = false) {
  if ((0, import_chunk_r3kja8v6.ue)()) {
    let n = /* @__PURE__ */ new Map();
    for (let r of t) if (r.phase === "complete") n.set(r.toolName, (n.get(r.toolName) ?? 0) + 1);
    let o = e ? "The script was stopped partway through: statements before the stop ran." : "The script threw partway through: statements before the failing one ran.";
    if (n.size === 0) return `${o} No tool call had completed.`;
    let i = [...n].map(([r, l]) => `${r} \xD7${l}`).join(", ");
    return `${o} Tool calls that had completed: ${i}.`;
  }
  return "";
}
var tzo = "Cancelled before it started", u = 500, O = /\.? \((?:evaluating|In|near) '/, N = /^[\w$]+(?:\??\.[\w$]+)*$/, w = /^is not (?:a function|a constructor|an object)$/i, _ = / (is not (?:a function|a constructor|an object))\.?(?=\n|$)/i, T = "describeTool: no tool named", b = "describeTool: no tool has that name.";
function v4s(t) {
  return (0, import_chunk_r3kja8v6.ue)() ? m(t) : "";
}
function m(t) {
  let e = t.indexOf(`

${ZGo}
- `), n = e === -1 ? t : t.slice(0, e), o = n.startsWith("TypeError: "), i = o ? n.search(O) : -1, r = t;
  if (i !== -1) {
    let s = n.slice(11, i), a = s.lastIndexOf(" is not "), d = s.slice(a + 1);
    r = a === -1 || !w.test(d) ? "TypeError" : h(s.slice(0, a), d);
  } else if (o) {
    let s = _.exec(n), a = s?.[1];
    if (s !== null && a !== void 0) r = h(n.slice(11, s.index), a);
  }
  let l = g(r), f = l.indexOf(T);
  return (f === -1 ? l : l.slice(0, f) + b) || "Error";
}
function g(t) {
  let e = t.length > u ? `${(0, import_chunk_7cfjrnwy.ee)(t, u)}\u2026` : t;
  return (0, import_chunk_7cfjrnwy.Ir)((0, import_chunk_13h3tw8q.js)(e)).trim();
}
function h(t, e) {
  return N.test(t) ? `TypeError: ${t} ${e}` : `TypeError: a value ${e}`;
}
function nzo(t) {
  return (0, import_chunk_r3kja8v6.ue)() ? y(t) : null;
}
function y(t) {
  let { drawsInterruptedRow: e } = require("/$bunfs/root/chunk-y59hm0bd.js"), { REPL_TOOL_NAME: n } = require("/$bunfs/root/chunk-jxmgahdt.js");
  if (e(n, t)) return "Interrupted";
  if (typeof t === "object" && t !== null && "neverRan" in t && t.neverRan === "other") return tzo;
  let o = t === void 0 ? "Error" : typeof t === "object" && t !== null && "error" in t ? t.error : void 0;
  if (typeof o !== "string" || o === "") return null;
  let i = m(o), r = typeof t === "object" && t !== null && "plainErrorLine" in t ? t.plainErrorLine : void 0;
  return typeof r === "object" && r !== null && "text" in r && typeof r.text === "string" && "replaces" in r && r.replaces === i ? g(r.text) || i : i;
}
function HYl(t) {
  return (0, import_chunk_r3kja8v6.ue)() && typeof t === "object" && t !== null && "shownOnCall" in t && t.shownOnCall === true;
}
