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
var chunk_wbg8x4na_exports = {};
__export(chunk_wbg8x4na_exports, {
  J$e: () => J$e,
  _W: () => _W,
  die: () => die,
  qte: () => qte,
  uDt: () => uDt
});
module.exports = __toCommonJS(chunk_wbg8x4na_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_child_process = require("child_process");
var import_child_process2 = require("child_process");
var import_path = require("path");
function O(n) {
  return !!(0, import_chunk_c203g5kd.p2)(n);
}
var _ = /* @__PURE__ */ new Set(["start", "cmd", "cmd.exe"]);
function x(n) {
  let e = n.trim().split(/\s+/);
  for (let o of e) {
    if (/^\/[^/]+$/.test(o)) continue;
    if (o.startsWith("-")) continue;
    let r = (0, import_path.basename)(o);
    if (_.has(r.toLowerCase())) continue;
    return r;
  }
  return (0, import_path.basename)(e[0] ?? n);
}
var P = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"], T = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/, F = /* @__PURE__ */ new Set(["code", "cursor", "windsurf", "codium"]);
function E(n) {
  let e = x(n);
  return P.find((o) => e.includes(o));
}
function L(n, e, o) {
  if (!o) return [e];
  if (F.has(n)) return ["-g", `${e}:${o}`];
  if (n === "subl") return [`${e}:${o}`];
  return [e];
}
function b(n, e, o) {
  let r = E(n);
  if (r) return L(r, e, o);
  return o && T.test((0, import_path.basename)((0, import_chunk_7cfjrnwy.nt)(n, " "))) ? [`+${o}`, e] : [e];
}
function uDt(n) {
  let e = _W();
  if (!e) return false;
  let o = e.split(" "), r = o[0] ?? e, d = o.slice(1);
  if (E(e)) {
    let a = { detached: true, stdio: "ignore", windowsHide: true, env: (0, import_chunk_r6r2wdsw.eJe)() }, c;
    return c = (0, import_child_process2.spawn)(r, [...d, n], a), c.on("error", (l) => (0, import_chunk_w578pjby.t)(`editor spawn failed: ${l}`, { level: "error" })), (0, import_chunk_9zdrdv25.AB)(c.pid), c.unref(), true;
  }
  let f = (0, import_chunk_ky5sghtd.va)().get(process.stdout);
  if (!f) return false;
  f.enterAlternateScreen();
  try {
    let a = { stdio: "inherit", env: (0, import_chunk_r6r2wdsw.eJe)() }, c;
    {
      let l = [...d, n], p = (0, import_chunk_9zdrdv25.I0s)();
      if (c = (0, import_child_process2.spawnSync)(r, l, { ...a, ...p }), c.error && p.cgroup !== void 0) c = (0, import_child_process2.spawnSync)(r, l, a);
    }
    if (c.error) return (0, import_chunk_w578pjby.t)(`editor spawn failed: ${c.error}`, { level: "error" }), false;
    return true;
  } finally {
    f.exitAlternateScreen();
  }
}
class v {
  isResolved = false;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (import_chunk_c203g5kd.s.VISUAL) this.editor = import_chunk_c203g5kd.s.VISUAL;
    else if (import_chunk_c203g5kd.s.EDITOR) this.editor = import_chunk_c203g5kd.s.EDITOR;
    else {
      let n = ["code", "vi", "nano"];
      this.editor = n.find((e) => O(e));
    }
    return this.isResolved = true, this.editor;
  }
  reset() {
    this.isResolved = false, this.editor = void 0;
  }
}
var D = new import_chunk_2904xtvq.j(() => new v());
function U() {
  return D.of((0, import_chunk_f9x2f6cx.N)().host);
}
function _W() {
  return (0, import_chunk_f9x2f6cx.pf)()?.editor ?? U().resolve();
}
function die() {
  let n = _W();
  if (!n) return;
  let e = x(n);
  return e && e.length <= 8 ? e : void 0;
}
var k = { code: "code -w", subl: "subl --wait" };
function J$e(n, e) {
  let o = (0, import_chunk_w578pjby.le)(), r = (0, import_chunk_ky5sghtd.va)().get(process.stdout);
  if (!r) throw Error("Ink instance not found - cannot pause rendering");
  let d = _W();
  if (!d) return { content: null };
  try {
    o.statSync(n);
  } catch {
    return { content: null };
  }
  let u = E(d) === void 0;
  if (u) r.enterAlternateScreen();
  else r.prepareTerminalForHandoff();
  try {
    let f = k[d] ?? d, a = f.split(" "), c = a[0] ?? f, l = a.slice(1), p = b(d, n, e), g = (0, import_chunk_r6r2wdsw.eJe)(), i;
    {
      let m = (0, import_chunk_9zdrdv25.I0s)();
      if (i = (0, import_child_process.spawnSync)(c, [...l, ...p], { stdio: "inherit", env: g, ...m }), i.error && m.cgroup !== void 0) i = (0, import_child_process.spawnSync)(c, [...l, ...p], { stdio: "inherit", env: g });
    }
    if (i.error || i.signal || i.status !== null && i.status !== 0) {
      let m = (0, import_chunk_sjqze7qg.yR)(d);
      return { content: null, error: i.error ? `Couldn't open ${m}: ${i.error.message}` : i.signal ? `${m} closed unexpectedly (${i.signal})` : `${m} quit unexpectedly (exit code ${i.status})` };
    }
    return { content: o.readFileSync(n, { encoding: "utf-8" }) };
  } catch {
    return { content: null };
  } finally {
    if (u) r.exitAlternateScreen();
    else r.restoreTerminalAfterHandoff();
  }
}
function W(n, e, o) {
  let r = n;
  for (let [d, u] of Object.entries(o)) if (u.type === "text") {
    let f = parseInt(d), a = u.content;
    if (u.unavailable || a === "") continue;
    if (u.inline) continue;
    let c = r.indexOf(a);
    if (c !== -1) {
      let l = (0, import_chunk_bq31aqv6.f7)(a), p = (0, import_chunk_bq31aqv6.jCe)(f, l);
      r = r.slice(0, c) + p + r.slice(c + a.length);
    }
  }
  return r;
}
var S = "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500", R = 50;
function H(n) {
  let e = (0, import_chunk_p1ewvgeh.b_)(n).split(`
`);
  if (e.length > R) e = e.slice(-R), e.unshift("\u2026 (earlier output truncated)");
  return `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
${e.map((r) => r ? `# ${r}` : "#").join(`
`)}
${S}

`;
}
function V(n) {
  let e = n.indexOf(S);
  if (e === -1) return n;
  return n.slice(e + S.length).replace(/^\r?\n\r?\n?/, "");
}
function qte(n, e, o, r) {
  let d = (0, import_chunk_w578pjby.le)(), u = (0, import_chunk_8nvd6fqx.dJe)();
  try {
    let f = e ? (0, import_chunk_bq31aqv6.OSe)(n, e) : n, a = o ? H(o) : "", c = a + f, l = n.slice(0, r), p = r === void 0 ? void 0 : 1 + (0, import_chunk_7cfjrnwy.Mt)(a, `
`) + (0, import_chunk_7cfjrnwy.Mt)(e ? (0, import_chunk_bq31aqv6.OSe)(l, e) : l, `
`);
    (0, import_chunk_w578pjby.I4t)(u, c, { encoding: "utf-8", flush: true });
    let g = J$e(u, p);
    if (g.content === null) return g;
    let i = g.content;
    if (o) i = V(i);
    let h = i.endsWith(`\r
`) ? `\r
` : `
`;
    if (i.endsWith(h) && !i.endsWith(h + h)) i = i.slice(0, -h.length);
    if (e) i = W(i, n, e);
    return { content: i };
  } finally {
    try {
      d.unlinkSync(u);
    } catch {
    }
  }
}
