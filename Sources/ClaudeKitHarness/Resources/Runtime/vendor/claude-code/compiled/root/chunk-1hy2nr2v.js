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
var chunk_1hy2nr2v_exports = {};
__export(chunk_1hy2nr2v_exports, {
  xbn: () => xbn
});
module.exports = __toCommonJS(chunk_1hy2nr2v_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_y149sphk = require("/$bunfs/root/chunk-y149sphk.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function b(d) {
  let t = (0, import_chunk_sng02qpc.k)(7), { title: n, status: a } = d, s;
  if (t[0] !== n) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: n }), t[0] = n, t[1] = s;
  else s = t[1];
  let c;
  if (t[2] !== a) c = (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: a }), t[2] = a, t[3] = c;
  else c = t[3];
  let i;
  if (t[4] !== s || t[5] !== c) i = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [s, " ", c] }), t[4] = s, t[5] = c, t[6] = i;
  else i = t[6];
  return i;
}
function yr(Lr) {
  return Lr.file;
}
function Fr(p) {
  return !(0, import_chunk_xcgcdx61.Pz)(p.scope);
}
function Rr(S) {
  return { scope: S.scope, servers: S.config.servers, displayServers: (0, import_chunk_bzyb60p0.F_)(S.scope, { expandVars: false }).servers };
}
function Wr(V) {
  return (0, import_chunk_bzyb60p0.$Te)(V) === "approved";
}
function xr(n) {
  let { config: T } = n;
  return N(T.errors, "fatal").length > 0;
}
function $r(n) {
  let { config: L } = n;
  return N(L.errors, "warning").length > 0;
}
function kr(n) {
  let { scope: A, config: y } = n;
  return (0, import_chunk_a46xeenj.e)(Q, { scope: A, parsingErrors: N(y.errors, "fatal"), warnings: N(y.errors, "warning") }, A);
}
function Tr(D, U) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_y149sphk.ET.Group, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_y149sphk.ET.Node, { color: "warning", children: (0, import_chunk_kx2fp6pc.Yn)(D.message) }), D.suggestion && (0, import_chunk_a46xeenj.e)(import_chunk_y149sphk.ET.Node, { dimColor: true, children: (0, import_chunk_kx2fp6pc.Yn)(D.suggestion) })] }, `conflict-${U}`);
}
function Q(d) {
  let i = (0, import_chunk_sng02qpc.k)(56), { scope: n, parsingErrors: a, warnings: t } = d, s = a.length > 0, c = t.length > 0;
  if (!s && !c) {
    return null;
  }
  let P, f, m, p, S, V, T, L, A, y;
  if (i[0] !== s || i[1] !== c || i[2] !== a || i[3] !== n || i[4] !== t) {
    let D = (0, import_chunk_bzyb60p0.j$)(n);
    let U = new Set([...a, ...t].map(yr).filter(Boolean));
    p = U.size === 1 ? [...U][0] : D;
    m = import_chunk_8bkqeb5d.g;
    L = "column";
    A = 1;
    let u2;
    if (i[15] !== s || i[16] !== c) u2 = (s || c) && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: s ? "error" : "warning", children: ["[", s ? "Has errors" : "Has warnings", "]", " "] }), i[15] = s, i[16] = c, i[17] = u2;
    else u2 = i[17];
    let h2;
    if (i[18] !== n) h2 = (0, import_chunk_bzyb60p0.dPn)(n), i[18] = n, i[19] = h2;
    else h2 = i[19];
    let v2;
    if (i[20] !== h2) v2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: h2 }), i[20] = h2, i[21] = v2;
    else v2 = i[21];
    if (i[22] !== u2 || i[23] !== v2) y = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [u2, v2] }), i[22] = u2, i[23] = v2, i[24] = y;
    else y = i[24];
    f = import_chunk_8bkqeb5d.g;
    if (i[25] === import_chunk_w1d7ygsk.R) T = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Location: " }), i[25] = T;
    else T = i[25];
    P = import_chunk_8bkqeb5d.r;
    S = true;
    V = (0, import_chunk_kx2fp6pc.Yn)(p);
    i[0] = s, i[1] = c, i[2] = a, i[3] = n, i[4] = t, i[5] = P, i[6] = f, i[7] = m, i[8] = p, i[9] = S, i[10] = V, i[11] = T, i[12] = L, i[13] = A, i[14] = y;
  } else P = i[5], f = i[6], m = i[7], p = i[8], S = i[9], V = i[10], T = i[11], L = i[12], A = i[13], y = i[14];
  let u;
  if (i[26] !== P || i[27] !== S || i[28] !== V) u = (0, import_chunk_a46xeenj.e)(P, { dimColor: S, children: V }), i[26] = P, i[27] = S, i[28] = V, i[29] = u;
  else u = i[29];
  let h;
  if (i[30] !== f || i[31] !== T || i[32] !== u) h = (0, import_chunk_a46xeenj.o)(f, { children: [T, u] }), i[30] = f, i[31] = T, i[32] = u, i[33] = h;
  else h = i[33];
  let v;
  if (i[34] !== p || i[35] !== a || i[36] !== n) {
    let F2;
    if (i[38] !== p || i[39] !== n) F2 = (w, Ar) => {
      let ir = w.mcpErrorMetadata?.serverName;
      let tr = w.file !== p ? w.file : void 0;
      return (0, import_chunk_a46xeenj.o)(import_chunk_y149sphk.ET.Group, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_y149sphk.ET.Node, { children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: "[Error]" }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" ", tr && `(${(0, import_chunk_kx2fp6pc.Yn)(tr)}) `, ir && `[${(0, import_chunk_kx2fp6pc.Yn)(ir)}] `, w.path && w.path !== "" ? `${(0, import_chunk_kx2fp6pc.Yn)(w.path)}: ` : "", (0, import_chunk_kx2fp6pc.Yn)((0, import_chunk_6mfepmbb.RKn)(w))] })] }) }), n === "enterprise" && w.suggestion && (0, import_chunk_a46xeenj.e)(import_chunk_y149sphk.ET.Node, { dimColor: true, children: (0, import_chunk_kx2fp6pc.Yn)(w.suggestion) })] }, `error-${Ar}`);
    }, i[38] = p, i[39] = n, i[40] = F2;
    else F2 = i[40];
    v = a.map(F2);
    i[34] = p, i[35] = a, i[36] = n, i[37] = v;
  } else v = i[37];
  let F;
  if (i[41] !== p || i[42] !== t) {
    let W2;
    if (i[44] !== p) W2 = (x, Vr) => {
      let ar = x.mcpErrorMetadata?.serverName;
      let cr = x.file !== p ? x.file : void 0;
      return (0, import_chunk_a46xeenj.e)(import_chunk_y149sphk.ET.Node, { children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: "[Warning]" }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" ", cr && `(${(0, import_chunk_kx2fp6pc.Yn)(cr)}) `, ar && `[${(0, import_chunk_kx2fp6pc.Yn)(ar)}] `, x.path && x.path !== "" ? `${(0, import_chunk_kx2fp6pc.Yn)(x.path)}: ` : "", (0, import_chunk_kx2fp6pc.Yn)(x.message)] })] }) }, `warning-${Vr}`);
    }, i[44] = p, i[45] = W2;
    else W2 = i[45];
    F = t.map(W2);
    i[41] = p, i[42] = t, i[43] = F;
  } else F = i[43];
  let W;
  if (i[46] !== F || i[47] !== v) W = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_y149sphk.ET, { children: [v, F] }) }), i[46] = F, i[47] = v, i[48] = W;
  else W = i[48];
  let pr;
  if (i[49] !== m || i[50] !== W || i[51] !== L || i[52] !== A || i[53] !== y || i[54] !== h) pr = (0, import_chunk_a46xeenj.o)(m, { flexDirection: L, marginTop: A, children: [y, h, W] }), i[49] = m, i[50] = W, i[51] = L, i[52] = A, i[53] = y, i[54] = h, i[55] = pr;
  else pr = i[55];
  return pr;
}
function xbn() {
  let d = (0, import_chunk_sng02qpc.k)(3), n;
  if (d[0] === import_chunk_w1d7ygsk.R) {
    let a = [{ scope: "user", config: (0, import_chunk_bzyb60p0.F_)("user") }, { scope: "project", config: (0, import_chunk_bzyb60p0.F_)("project") }, { scope: "local", config: (0, import_chunk_bzyb60p0.F_)("local") }, { scope: "managed", config: (0, import_chunk_bzyb60p0.F_)("managed") }, { scope: "enterprise", config: (0, import_chunk_bzyb60p0.F_)("enterprise") }];
    let t = (0, import_chunk_bzyb60p0.$ns)(a.filter(Fr).map(Rr));
    n = { scopes: sr(a, { enterpriseActive: (0, import_chunk_bzyb60p0.yh)(), mcpLocked: (0, import_chunk_57sd0ak5.Dl)("mcp"), isProjectServerApproved: Wr }), conflicts: t };
    d[0] = n;
  } else n = d[0];
  let { scopes: s, conflicts: c } = n, i = s.some(xr), P = c.length > 0 || s.some($r);
  if (!i && !P) {
    return null;
  }
  let f;
  if (d[1] === import_chunk_w1d7ygsk.R) f = (0, import_chunk_a46xeenj.e)(b, { title: "MCP config diagnostics", status: i ? "error" : "warning" }), d[1] = f;
  else f = d[1];
  let m;
  if (d[2] === import_chunk_w1d7ygsk.R) m = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: 1, marginBottom: 1, children: [f, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["For help configuring MCP servers, see:", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://code.claude.com/docs/en/mcp", children: "https://code.claude.com/docs/en/mcp" })] }) }), s.map(kr), c.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: 1, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: "[Conflicting scopes]" }), (0, import_chunk_a46xeenj.e)(import_chunk_y149sphk.ET, { children: c.map(Tr) })] })] }), d[2] = m;
  else m = d[2];
  return m;
}
function N(d, n) {
  return d.filter((a) => a.mcpErrorMetadata?.severity === n);
}
function sr(d, n) {
  let a = (t, s) => {
    if (!(s in t.config.servers)) return false;
    if (t.scope === "project") return n.isProjectServerApproved(s);
    return true;
  };
  return d.map((t, s) => {
    let c = !(0, import_chunk_xcgcdx61.Pz)(t.scope) && (n.enterpriseActive || n.mcpLocked), i = d.slice(s + 1), P = (f) => i.some((m) => a(m, f));
    return { ...t, config: { ...t.config, errors: t.config.errors.filter((f) => {
      if (f.mcpErrorMetadata?.severity !== "warning") return true;
      if (c) return false;
      let m = f.mcpErrorMetadata.serverName;
      return !m || !P(m);
    }) } };
  });
}
