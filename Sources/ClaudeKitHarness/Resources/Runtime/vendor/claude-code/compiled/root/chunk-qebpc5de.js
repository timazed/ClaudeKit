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
var chunk_qebpc5de_exports = {};
__export(chunk_qebpc5de_exports, {
  $f: () => $f,
  C8: () => C8,
  E_n: () => E_n,
  Gl: () => Gl,
  JDr: () => JDr,
  Jta: () => Jta,
  K$l: () => K$l,
  MM: () => MM,
  QDr: () => QDr,
  QFe: () => QFe,
  TEe: () => TEe,
  Ur: () => Ur,
  V$l: () => V$l,
  XDr: () => XDr,
  Xta: () => Xta,
  YDr: () => YDr,
  Yta: () => Yta,
  aDo: () => aDo,
  iDo: () => iDo,
  k_n: () => k_n,
  lDo: () => lDo,
  nJ: () => nJ,
  oDo: () => oDo,
  oft: () => oft,
  pO: () => pO,
  qDr: () => qDr,
  qta: () => qta,
  rDo: () => rDo,
  rJ: () => rJ,
  sDo: () => sDo,
  vEe: () => vEe,
  vv: () => vv,
  wqt: () => wqt,
  yn: () => yn
});
module.exports = __toCommonJS(chunk_qebpc5de_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var k_n = ["Agent", "Artifact", "AskUserQuestion", "Bash", "ClaudeDesign", "CronCreate", "CronDelete", "CronList", "Edit", "EndConversation", "EnterPlanMode", "EnterWorktree", "ExitPlanMode", "ExitWorktree", "Glob", "Grep", "ListAgents", "ListMcpResourcesTool", "LSP", "Monitor", "NotebookEdit", "OfferChromeSetup", "PowerShell", "Projects", "propose_skills", "PushNotification", "Read", "ReadMcpResourceDirTool", "ReadMcpResourceTool", "ReadNotifications", "RemoteTrigger", "ReportFindings", "ScheduleWakeup", "SendFeedback", "SendMessage", "SendUserFile", "SendUserMessage", "SetGoal", "ShareOnboardingGuide", "ShowOnboardingRolePicker", "Skill", "SubagentHandback", "TaskCreate", "TaskGet", "TaskList", "TaskStop", "TaskUpdate", "TodoWrite", "ToolSearch", "WaitForMcpServers", "WebFetch", "WebSearch", "Workflow", "Write"], rDo = { Task: "Agent", KillShell: "TaskStop", KillBash: "TaskStop", ListPeers: "ListAgents", Brief: "SendUserMessage", ListMcpResources: "ListMcpResourcesTool", ReadMcpResource: "ReadMcpResourceTool", ReadMcpResourceDir: "ReadMcpResourceDirTool", ProposeGoal: "SetGoal" };
function vv(e) {
  return e.includes("*");
}
function pO(e, t) {
  return new a(e).matches(t);
}
class a {
  #e;
  #t;
  #n;
  #o;
  #r = [];
  constructor(e) {
    let t = e.split("*");
    this.#e = t[0] ?? "", this.#t = t.at(-1) ?? "", this.#n = t;
  }
  matches(e) {
    let t = this.#e;
    if (this.#n.length === 1) return t === e;
    let n = this.#t, r = e.length - n.length;
    if (r < t.length || !e.startsWith(t) || !e.endsWith(n)) return false;
    this.#o ??= this.#n.slice(1, -1).filter((s) => s !== "");
    let o = t.length;
    for (let [s, i] of this.#o.entries()) {
      if (s === this.#r.length) this.#r.push(new u(i));
      let l = this.#r[s].find(e, o, r);
      if (l === -1) return false;
      o = l + i.length;
    }
    return true;
  }
}
function qDr(e, t, n) {
  let r = 0, o = 0;
  for (; ; ) {
    let s = c(e, n, r), i = c(t, n, o);
    if (e.charAt(s) !== t.charAt(i) || !pO(e.slice(r, s), t.slice(o, i))) return false;
    if (s === e.length) return true;
    r = s + 1, o = i + 1;
  }
}
function c(e, t, n) {
  let r = n;
  while (r < e.length && !t.includes(e.charAt(r))) r++;
  return r;
}
function oft(e, t) {
  return pO(e, t);
}
class u {
  #e;
  #t;
  constructor(e) {
    if (this.#e = e, e.includes(e.charAt(0), 1)) {
      let t = new Int32Array(e.length);
      for (let n = 1, r = 0; n < e.length; n++) {
        while (r > 0 && e.charCodeAt(n) !== e.charCodeAt(r)) r = t[r - 1] ?? 0;
        if (e.charCodeAt(n) === e.charCodeAt(r)) r++;
        t[n] = r;
      }
      this.#t = t;
    }
  }
  find(e, t, n) {
    let r = this.#e, o = this.#t;
    if (o === void 0) {
      let s = e.indexOf(r, t);
      return s + r.length > n ? -1 : s;
    }
    for (let s = t, i = 0; s < n; s++) {
      while (i > 0 && e.charCodeAt(s) !== r.charCodeAt(i)) i = o[i - 1] ?? 0;
      if (e.charCodeAt(s) === r.charCodeAt(i)) i++;
      if (i === r.length) return s - r.length + 1;
    }
    return -1;
  }
}
var d = { ...rDo, Eval: "REPL" };
function Gl(e) {
  let t = lDo();
  return Object.hasOwn(t, e) ? t[e] : e;
}
function wqt(e) {
  return (e === "Eval" || e === "REPL") && Object.hasOwn(lDo(), e);
}
function vEe(e) {
  let t = [];
  for (let [n, r] of Object.entries(lDo())) if (r === e) t.push(n);
  return t;
}
var oDo = "workspace", C8 = `mcp__${oDo}__bash`, sDo = `mcp__${oDo}__web_fetch`;
function TEe(e, t) {
  let n = t && Object.hasOwn(t, e) ? t[e] : void 0;
  return n !== void 0 && n !== e ? [e, n] : [e];
}
function nJ(e, t) {
  if (!t) return [];
  let n = [];
  for (let [r, o] of Object.entries(t)) if (o === e) n.push(r);
  return n;
}
function iDo(e) {
  let t = new a(e);
  return (n) => t.matches(n);
}
function g(e) {
  return e.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}
function QFe(e, t) {
  let n = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, (r) => `\\${r}`);
  if (t?.escapeGlobs) n = n.replaceAll("*", "\\*");
  if (n.startsWith("!") || n.startsWith("#")) n = `\\${n}`;
  return n = n.replace(/\s+$/, (r) => Array.from(r, (o) => `\\${o}`).join("")), n;
}
function YDr(e) {
  return e.replace(/\\([^])/g, (t, n) => XDr(n) ? n : t);
}
var h = /^[\\[\]!#()|+^$*?\s]$/;
function XDr(e) {
  return h.test(e);
}
var p = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;
function qta(e) {
  return p.test(e);
}
function Yta(e) {
  return Xta(e).replaceAll("\\\\", "\\");
}
function Xta(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")");
}
function MM(e) {
  if (typeof e === "string" && !e.includes("(") && !e.includes(")")) return { kind: "bare" };
  let t = A(e, "("), n = R(e, ")");
  if (t === -1 && n === -1) return { kind: "bare" };
  let r = e.substring(0, t);
  if (t === -1 || n <= t || n !== e.length - 1 || /[()]/.test(r)) return { kind: "malformed" };
  return { kind: "call", toolName: r, rawContent: e.substring(t + 1, n) };
}
function Ur(e) {
  let t = MM(e);
  if (t.kind !== "call" || !t.toolName) return { toolName: Gl(e) };
  if (t.rawContent === "" || t.rawContent === "*") return { toolName: Gl(t.toolName) };
  let n = Yta(t.rawContent);
  return { toolName: Gl(t.toolName), ruleContent: n };
}
function Jta(e) {
  let t = MM(e);
  return t.kind === "call" && t.toolName ? t.toolName : e;
}
function yn(e) {
  if (!e.ruleContent) return e.toolName;
  let t = g(e.ruleContent);
  return `${e.toolName}(${t})`;
}
var rJ = "!";
function V$l(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r === void 0) continue;
    let o = e[n + 1];
    if (r === rJ && o !== void 0 && !o.startsWith(rJ) && !o.startsWith("(")) {
      t.push(rJ + o), n++;
      continue;
    }
    t.push(r);
  }
  return t;
}
function K$l(e) {
  return e.lastIndexOf("(") > e.lastIndexOf(")");
}
function E_n(e) {
  return `Error: the --disallowed-tools rule "${(0, import_chunk_tp3c5q2s.Qe)(e, 64)}" has an opening parenthesis that is never closed, so a cloud session would drop it. Close the parenthesis and run the command again.`;
}
function $f(e) {
  if (e.length === 0) return [];
  let t = [];
  for (let n of e) {
    if (!n) continue;
    let r = "", o = false;
    for (let s of n) switch (s) {
      case "(":
        o = true, r += s;
        break;
      case ")":
        o = false, r += s;
        break;
      case ",":
        if (o) r += s;
        else {
          if (r.trim()) t.push(r.trim());
          r = "";
        }
        break;
      case " ":
        if (o) r += s;
        else if (r.trim()) t.push(r.trim()), r = "";
        break;
      default:
        if (r || s.trim()) r += s;
    }
    if (r.trim()) t.push(r.trim());
  }
  return t;
}
function JDr(e) {
  let t = new Set($f(e)), r = e.flatMap((o) => o ? m(o) : []).filter((o) => {
    let s = MM(o);
    if (s.kind !== "call" || s.toolName === "" || !/\)[ ,]/.test(s.rawContent) || /^[\s\uFEFF./~\\]*!/.test(s.rawContent)) return false;
    let i = $f([o])[0];
    return t.has(i) && MM(i).kind === "call";
  });
  return (0, import_chunk_4smdap7r.M)(r);
}
function QDr(e) {
  return [...$f(e), ...JDr(e)];
}
function aDo(e, t) {
  let n = QDr([e]);
  return n.includes(e) && n.every((r) => t.has(r));
}
function m(e) {
  let t = [], n = 0, r = 0, o = false;
  for (let s = 0; s <= e.length; s++) {
    let i = e[s];
    if (i === "\\") s++;
    else if (i === "(") r++;
    else if (i === ")") o ||= r === 0, r = Math.max(r - 1, 0);
    else if (s === e.length || r === 0 && (i === "," || i === " ")) {
      if (r === 0 && !o) t.push(e.slice(n, s).trim());
      n = s + 1, o = false;
    }
  }
  return t;
}
function A(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) {
    let r = 0, o = n - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return n;
  }
  return -1;
}
function R(e, t) {
  for (let n = e.length - 1; n >= 0; n--) if (e[n] === t) {
    let r = 0, o = n - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return n;
  }
  return -1;
}
function lDo() {
  return (0, import_chunk_r3kja8v6.ue)() ? d : rDo;
}
