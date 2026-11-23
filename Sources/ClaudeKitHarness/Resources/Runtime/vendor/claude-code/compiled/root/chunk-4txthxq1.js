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
var chunk_4txthxq1_exports = {};
__export(chunk_4txthxq1_exports, {
  Rue: () => Rue,
  Sei: () => Sei,
  ZCn: () => ZCn,
  j3o: () => j3o,
  ozl: () => ozl,
  yei: () => yei
});
module.exports = __toCommonJS(chunk_4txthxq1_exports);
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_0ywkmnxx = require("/$bunfs/root/chunk-0ywkmnxx.js");
function j3o(n, t) {
  return (0, import_chunk_h4t4qfaq.li)(n) && typeof t === "object" && t !== null && "stoppedBy" in t && t.stoppedBy !== void 0;
}
function yei(n, t) {
  return j3o(n, t) || (0, import_chunk_h4t4qfaq.li)(n) && typeof t === "object" && t !== null && "neverRan" in t && t.neverRan === "person";
}
var Rue = { nameChars: 80, inputChars: 200, valueChars: 2e3, valuesChars: 8e3, valueMinChars: 200, entries: 30, namesPerCount: 5, reportChars: 24e3 };
var ozl = "The user doesn't want to proceed with this tool use.", d = "  ", B = new RegExp(`${import_chunk_yesjd46y.vze.source}|\\n`, "g"), v = 100;
function Sei(n, t, e = "") {
  return (0, import_chunk_r3kja8v6.ue)() ? A(n, t, e) : import_chunk_0ywkmnxx.wXt;
}
function A(n, t, e) {
  let r = t.find((s) => s.state === "declined"), o = n === "refusal" && r !== void 0 ? `${ozl} ${import_chunk_0ywkmnxx.wXt} The user declined the permission prompt for ${E(r)}, so the script stopped.` : `The user interrupted this script, so it stopped. ${import_chunk_0ywkmnxx.wXt}`;
  if (t.length === 0) return T(`${o}
The script had not started any tool calls.`, e);
  let i = [o, "Tool calls the script started, in order:"], l = Rue.valuesChars;
  t.slice(0, Rue.entries).forEach((s, b) => {
    let u = `${b + 1}. ${E(s)}`;
    switch (s.state) {
      case "running":
        i.push(`${u} was still running when the script stopped. The script got no result, and the call may have run in part or in full.`);
        return;
      case "waiting":
        i.push(`${u} was waiting to run when the script stopped. The script got no result, and the call may still have run afterwards.`);
        return;
      case "declined":
        i.push(s.ranBefore === true ? `${u} ran once in the sandbox, which reported a violation. The user declined to run it again outside the sandbox.` : s.rerunByHook === true ? `${u} ran, and a plugin's hook then started it again. The user declined that run.` : `${u} did not run. The user declined it.`);
        return;
      case "finished":
      case "failed": {
        let c = (s.text ?? "").replace(import_chunk_yesjd46y.vze, `
`);
        if (c === "") {
          i.push(s.state === "failed" ? `${u} failed with no error message.` : `${u} finished. Its result is empty.`);
          return;
        }
        let M = s.state === "finished" ? "result" : "error", N = s.state === "finished" ? "finished" : "failed";
        if (l < Rue.valueMinChars && g(c).length > l) {
          i.push(`${u} ${N}. Its ${M} (${w(c.length)} characters) is not shown, to keep this report short.`);
          return;
        }
        let y = ZCn(c, Math.min(Rue.valueChars, l));
        l -= y.length, i.push(s.state === "finished" ? `${u} finished. It returned:
${y}` : `${u} failed with this error:
${y}`);
      }
    }
  });
  let a = t.slice(Rue.entries);
  if (a.length === 1) i.push(`1 more tool call is not listed: ${k(a)}.`);
  else if (a.length > 1) i.push(`${a.length} more tool calls are not listed: ${k(a)}.`);
  return i.push("That is every tool call the script started."), T(i.join(`
`), e);
}
function T(n, t) {
  let e = Rue.reportChars;
  if (n.length + t.length <= e) return n + t;
  let r = `
... [this report was cut at ${w(e)} characters, so its list is incomplete] ...`, o = f(t, Math.floor(e / 4));
  if (n.length + o.length <= e) return n + o;
  return f(n, e - r.length - o.length) + r + o;
}
function f(n, t) {
  let e = n.slice(0, t);
  return /[\uD800-\uDBFF]$/.test(e) ? e.slice(0, -1) : e;
}
function O(n, t) {
  let e = t > 0 ? n.slice(-t) : "";
  return /^[\uDC00-\uDFFF]/.test(e) ? e.slice(1) : e;
}
function p(n, t) {
  return n.length > t ? `${f(n, t)}\u2026` : n;
}
function E(n) {
  let t = p(S((0, import_chunk_w578pjby._)(j(n.toolInput)) ?? ""), Rue.inputChars);
  return `${p(S(n.toolName), Rue.nameChars)}(${t})`;
}
var I = 20, C = "(not shown)";
function j(n) {
  if (typeof n !== "object" || n === null) return R(n);
  if (Array.isArray(n)) return [C];
  let t = {}, e = 0;
  for (let r in n) {
    if (e === I) break;
    let o = Object.getOwnPropertyDescriptor(n, r);
    if (o === void 0) continue;
    e++, t[p(r, Rue.inputChars)] = "value" in o ? R(o.value) : C;
  }
  return t;
}
function R(n) {
  if (typeof n === "string") return p(n, Rue.inputChars);
  if (n === void 0 || n === null || typeof n === "number" || typeof n === "boolean") return n;
  return C;
}
function S(n) {
  return n.replace(B, (t) => [...t].map((e) => `\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}`).join(""));
}
function g(n) {
  return d + n.replaceAll(`
`, `
${d}`);
}
function ZCn(n, t) {
  let e = n.replace(import_chunk_yesjd46y.vze, `
`), r = g(e);
  if (r.length <= t) return r;
  let o = Math.max(0, t - v), i = Math.floor(o * 0.6), l = D(e, i), h = L(e, o - i), a = e.length - l.length - h.length;
  return `${g(l)}
${d}... [the middle ${w(a)} of its ${w(e.length)} characters are not shown] ...
${g(h)}`;
}
function m(n) {
  return n === `
` ? 1 + d.length : 1;
}
function D(n, t) {
  let e = d.length, r = 0;
  while (r < n.length && e + m(n[r]) <= t) e += m(n[r]), r++;
  return f(n, r);
}
function L(n, t) {
  let e = d.length, r = n.length;
  while (r > 0 && e + m(n[r - 1]) <= t) e += m(n[r - 1]), r--;
  return O(n, n.length - r);
}
function k(n) {
  let t = [["finished", "finished", "finished"], ["failed", "failed", "failed"], ["running", "was still running", "were still running"], ["waiting", "was waiting to run", "were waiting to run"], ["declined", "was declined", "were declined"]], e = [];
  for (let [r, o, i] of t) {
    let l = /* @__PURE__ */ new Map();
    for (let a of n) if (a.state === r) {
      let s = p(S(a.toolName), Rue.nameChars);
      l.set(s, (l.get(s) ?? 0) + 1);
    }
    let h = [...l.values()].reduce((a, s) => a + s, 0);
    if (h > 0) {
      let a = [...l].slice(0, Rue.namesPerCount), s = l.size - a.length, b = [...a.map(([u, c]) => `${u} \xD7${c}`), ...s === 1 ? ["1 other tool"] : [], ...s > 1 ? [`${s} other tools`] : []].join(", ");
      e.push(`${h} ${h === 1 ? o : i} (${b})`);
    }
  }
  return e.join(", ");
}
function w(n) {
  return n.toLocaleString("en-US");
}
