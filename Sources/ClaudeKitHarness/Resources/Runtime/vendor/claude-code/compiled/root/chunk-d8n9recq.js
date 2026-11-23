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
var chunk_d8n9recq_exports = {};
__export(chunk_d8n9recq_exports, {
  G9l: () => G9l,
  K9l: () => K9l,
  V9l: () => V9l,
  Y$o: () => Y$o,
  Y9l: () => Y9l,
  _Yn: () => _Yn,
  gYn: () => gYn,
  q9l: () => q9l,
  z9l: () => z9l
});
module.exports = __toCommonJS(chunk_d8n9recq_exports);
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_09dxdt5c = require("/$bunfs/root/chunk-09dxdt5c.js");
var import_chunk_t7wkkwx8 = require("/$bunfs/root/chunk-t7wkkwx8.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_tc00d7dn = require("/$bunfs/root/chunk-tc00d7dn.js");
var import_chunk_9nb5h4mq = require("/$bunfs/root/chunk-9nb5h4mq.js");
var import_chunk_wb4bmq3s = require("/$bunfs/root/chunk-wb4bmq3s.js");
var import_chunk_jannkkyp = require("/$bunfs/root/chunk-jannkkyp.js");
var import_chunk_r8cgv6h8 = require("/$bunfs/root/chunk-r8cgv6h8.js");
var import_chunk_s64r734v = require("/$bunfs/root/chunk-s64r734v.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_hghmr3e2 = require("/$bunfs/root/chunk-hghmr3e2.js");
var import_chunk_6geanr2a = require("/$bunfs/root/chunk-6geanr2a.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var h = {};
(0, import_chunk_w1d7ygsk.jr)(h, { PILL_INDENT_COLUMNS: () => y, ToolProgressHint: () => M, default: () => h });
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var gYn = (0, import_chunk_bs4h6795.an)(false);
(0, import_chunk_bs4h6795.G)();
var f = "ctrl+b", _ = "ctrl+x ctrl+b", C = new Set([f, _].map((s) => (0, import_chunk_y8kqnbqt.i0)((0, import_chunk_y8kqnbqt.GCe)(s))));
function D(s) {
  for (let t of s) {
    if (t.context !== "Task") continue;
    let i = (0, import_chunk_y8kqnbqt.i0)(t.chord);
    if (t.action === "task:background") {
      if (!C.has(i)) return true;
    } else if (t.action === null && C.has(i)) return true;
  }
  return false;
}
function _Yn({ handler: s, isActive: t }) {
  let i = (0, import_chunk_s64r734v.aW)(), c = (0, import_chunk_09dxdt5c.cu)("task:background", "Task", f), m = (0, import_chunk_9js1xpg4.$d)(), a = m?.bindings, n = (0, import_chunk_bs4h6795.re)(() => a ? D(a) : false, [a]), l = (0, import_chunk_bs4h6795.mo)(s), u = !(i && !n);
  (0, import_chunk_bs4h6795.H)(() => {
    if (!m || !t) return;
    return m.registerHandler({ action: "task:background", context: "Task", handler: () => l(), singleKey: u });
  }, [m, t, u]);
  let d = n ? c : _, b = c === "" ? "" : (0, import_chunk_hghmr3e2.yDt)() ? d.split(" ").map((p) => p === f ? `${f} ${f}` : p).join(" ") : d;
  return { cohesionFixes: i, gateOnShortcut: b, resolvedShortcut: c };
}
var y = 5;
function w(n) {
  return n.props.hint === "" ? null : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: y, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: n.props.hint }) });
}
var M = (s) => {
  let c = (0, import_chunk_sng02qpc.k)(4), { toolUseId: t, hint: i } = s, m, a;
  if (c[0] !== i || c[1] !== t) m = () => ({ requestId: t, props: { tool_use_id: t, kind: "background_hint", hint: i } }), a = [t, i], c[0] = i, c[1] = t, c[2] = m, c[3] = a;
  else m = c[2], a = c[3];
  return import_chunk_t7wkkwx8.uu.useRenderHook(import_chunk_t7wkkwx8.uu.useRenderInput("ToolProgress", m, a), w);
};
var E = 2, T = 160;
function Y$o(s) {
  let a = (0, import_chunk_sng02qpc.k)(13), { toolUseId: t, keyOnly: i } = s, c = i === void 0 ? false : i, m = (0, import_chunk_tc00d7dn.dE)(), n;
  if (a[0] !== m) n = () => {
    (0, import_chunk_bzyb60p0.GBe)(m);
  }, a[0] = m, a[1] = n;
  else n = a[1];
  let l = n, u;
  if (a[2] !== l) u = { handler: l, isActive: true }, a[2] = l, a[3] = u;
  else u = a[3];
  let { cohesionFixes: d, gateOnShortcut: b } = _Yn(u), p = (0, import_chunk_09dxdt5c.cu)("task:background", "Task", "ctrl+b"), S = (0, import_chunk_bs4h6795.be)(gYn) || d, v;
  if (a[4] !== p || a[5] !== b || a[6] !== S) v = S ? b : (0, import_chunk_hghmr3e2.yDt)() && p === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : p, a[4] = p, a[5] = b, a[6] = S, a[7] = v;
  else v = a[7];
  let x = v;
  if (c) {
    return null;
  }
  if ((0, import_chunk_jg3mepas.th)() || d && x === "") {
    return null;
  }
  let F;
  if (a[8] !== x) F = (0, import_chunk_paah1wya.ym)({ chord: x, action: "run in background", parens: true, format: { keyCase: "lower" } }), a[8] = x, a[9] = F;
  else F = a[9];
  let R = F;
  if (R === "") {
    return null;
  }
  let A;
  if (a[10] !== R || a[11] !== t) A = (0, import_chunk_a46xeenj.e)(h.ToolProgressHint, { toolUseId: t, hint: R }), a[10] = R, a[11] = t, a[12] = A;
  else A = a[12];
  return A;
}
function G9l(s, { verbose: t, theme: i }) {
  let { command: c } = s;
  if (!c) return null;
  if (!t) {
    let m = c.split(`
`);
    if ((0, import_chunk_8c111j67.Mf)()) {
      let l = (0, import_chunk_bzyb60p0.tZo)(c);
      if (l) return l.length > T ? l.slice(0, T) + "\u2026" : l;
    }
    let a = m.length > E, n = c.length > T;
    if (a || n) {
      let l = c;
      if (a) l = m.slice(0, E).join(`
`);
      if (l.length > T) l = l.slice(0, T);
      return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [l.trim(), "\u2026"] });
    }
  }
  return c;
}
function z9l(s, { verbose: t, tools: i, terminalSize: c, inProgressToolCallCount: m }) {
  let a = s.at(-1);
  if (!a || !a.data) return (0, import_chunk_wb4bmq3s.Q5t)();
  let n = a.data;
  return (0, import_chunk_a46xeenj.e)(import_chunk_jannkkyp.CIe, { fullOutput: n.fullOutput, output: n.output, elapsedTimeSeconds: n.elapsedTimeSeconds, totalLines: n.totalLines, totalBytes: n.totalBytes, timeoutMs: n.timeoutMs, verbose: t });
}
function V9l() {
  return (0, import_chunk_wb4bmq3s.J5t)();
}
function K9l(s, t, { verbose: i, theme: c, tools: m, style: a, input: n }) {
  let u = t.at(-1)?.data?.timeoutMs, d = typeof n === "object" && n !== null && "command" in n && typeof n.command === "string" ? n.command : void 0;
  return (0, import_chunk_a46xeenj.e)(import_chunk_9nb5h4mq.X5t, { content: s, verbose: i, timeoutMs: u, style: a, command: d });
}
function q9l(s, { verbose: t, progressMessagesForMessage: i, tools: c }) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_r8cgv6h8.Cb, { result: s, verbose: t });
}
function Y9l(s, { columns: t }) {
  if (s.isImage) return false;
  return (0, import_chunk_6geanr2a.Cq)(s.stdout, t) || (0, import_chunk_6geanr2a.Cq)(typeof s.stderr === "string" ? (0, import_chunk_r8cgv6h8.Z5t)(s.stderr).trim().replace(import_chunk_bzyb60p0.Our, "") : s.stderr, t);
}
