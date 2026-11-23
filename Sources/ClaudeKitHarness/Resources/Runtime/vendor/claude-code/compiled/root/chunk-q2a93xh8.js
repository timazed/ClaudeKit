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
var chunk_q2a93xh8_exports = {};
__export(chunk_q2a93xh8_exports, {
  DG: () => DG,
  E$i: () => E$i,
  EUn: () => EUn,
  Ele: () => Ele,
  G7: () => G7,
  J_l: () => J_l,
  Kkr: () => Kkr,
  Q_l: () => Q_l,
  Rre: () => Rre,
  S$i: () => S$i,
  T$i: () => T$i,
  TUn: () => TUn,
  UEt: () => UEt,
  X_l: () => X_l,
  Z_l: () => Z_l,
  Zv: () => Zv,
  _$i: () => _$i,
  _So: () => _So,
  a9: () => a9,
  ajt: () => ajt,
  b$i: () => b$i,
  eSs: () => eSs,
  eyl: () => eyl,
  g$i: () => g$i,
  gSo: () => gSo,
  h$i: () => h$i,
  hSo: () => hSo,
  i9: () => i9,
  k$i: () => k$i,
  kUn: () => kUn,
  ljt: () => ljt,
  m$i: () => m$i,
  mSo: () => mSo,
  nSs: () => nSs,
  nme: () => nme,
  nyl: () => nyl,
  oSs: () => oSs,
  odn: () => odn,
  oyl: () => oyl,
  p$i: () => p$i,
  pSo: () => pSo,
  rSs: () => rSs,
  rdn: () => rdn,
  rme: () => rme,
  ryl: () => ryl,
  sSs: () => sSs,
  syl: () => syl,
  tSs: () => tSs,
  tyl: () => tyl,
  v$i: () => v$i,
  vUn: () => vUn,
  w$i: () => w$i,
  xS: () => xS,
  y$i: () => y$i
});
module.exports = __toCommonJS(chunk_q2a93xh8_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_6k9zs54e = require("/$bunfs/root/chunk-6k9zs54e.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
var p$i = 128, m$i = 32, _e = /^[A-Za-z0-9_.-]{1,128}$/, H = 64, Te = "\u2800\u{1D159}\u{13441}\u{13442}\uFFFC", z = `${Te}\\p{Cf}\\p{Default_Ignorable_Code_Point}`, ve = "\u2026\u22EF\uFE19", we = import_chunk_r8478wtb.dK.source.replace(/\{2,\}$/, ""), Ee = `(?!${we})(?:${import_chunk_03kvdj1s.rUl.source})|${import_chunk_03kvdj1s.pDo.source}`, ue = new RegExp(`^(?:[<>\\\\${ve}]|[${z}]|[^ \\P{Z}]|\\p{C})$`, "u");
function le(e) {
  let t = Array.from(e).length - 1, r = "";
  return (s, o) => {
    let i = s === " " && (o === 0 || o === t || r === " ");
    return r = s, i;
  };
}
var Pe = new RegExp(`^(?!"|${import_chunk_r8478wtb.aB.source})(?:${Ee})$`, "u");
function je(e) {
  let t = le(e), r = -1;
  return (s) => (r++, t(s, r) || ue.test(s) || Pe.test(s));
}
var Ie = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u, De = new RegExp(`^(?![${z}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${z}\\p{M}])?\\p{M}*$`, "su"), Ke = new RegExp("\\p{Bidi_Control}", "u"), He = new RegExp(`\\p{M}(?:[${z}]*\\p{M}){8}`, "u"), me = new RegExp(`[ ${z}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"), Y = ":\u02D0\u02D1\u02F8\u0589\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0A03\u0A83\u0B03\u0C03\u0C83\u0D03\u0D83\u0F7F\u1038\u1361\u1365\u1366\u16EC\u17C7\u1803\u1804\u1809\u1B04\u1B82\u205A\u205D\u205E\u2236\u2237\u2806\u2982\u2D42\u2D53\u2D57\uA4FD\uA6F4\uA789\uA881\uA983\uAAF5\uFE13\uFE30\uFE55\uFF1A\u{11002}\u{11082}\u{11182}\u{11303}\u{11445}\u{114C1}\u{115BE}\u{1163E}\u{116AC}\u{11838}\u{119DF}\u{11A39}\u{11A97}\u{11C3E}\u{11D96}\u{11F03}\u{10781}\u{10782}", Ue = new RegExp(`^host[${Y}]`, "iu"), Se = "\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709", We = new RegExp(`^host.*[${Se}]`, "iu"), Ge = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u, Be = new RegExp(`(?:^|[^a-z])host[${Y}]|[${Y}]host(?:$|[^a-z])`, "iu"), Ve = new RegExp(`^[^\\p{L}]*[${Y}]host(?:$|[^a-z])`, "iu"), Ye = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u, qe = new RegExp(`(?![${Se}])[${Y}]`, "gu"), ae = new RegExp(`["<>\\\\\`${z}${ve}]|${import_chunk_r8478wtb.aB.source}|${import_chunk_r8478wtb.dK.source}|${Ee}`, "gu"), Qe = new RegExp(`(?<=${we}|${ae.source})\\p{M}+|${import_chunk_03kvdj1s.bxt.source}|${import_chunk_03kvdj1s.mDo.source}\\p{M}*|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${ae.source}`, "gu");
function Ze(e) {
  let t = e.normalize("NFD"), r = Ge.test(t), s = t.replace(me, "");
  return he(s, r) || he(s.replace(qe, ":").normalize("NFKC").replace(me, ""), r);
}
function he(e, t) {
  return Ue.test(e) || We.test(e) || t && Be.test(e) || Ve.test(e);
}
function q(e) {
  return e === '"' || e === "\\" ? `\\${e}` : e.split("").map((t) => `\\u${t.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
function pSo(e) {
  return Array.from(e).length <= H && !e.startsWith(" ") && !e.endsWith(" ") && Ie.test(e) && De.test(e) && !Ke.test(e) && !Ye.test(e) && !He.test(e) && !Ze(e) && !e.startsWith(import_chunk_3f4m74y6.A8) && !e.startsWith("mcp__") && (0, import_chunk_mzmcvr6c.ht)(e) === null;
}
function xS(e, t) {
  if (typeof e === "string" && pSo(e)) return (0, import_chunk_r8478wtb.qu)(e.replace(ae, q));
  let r = t?.max ?? H, s = e, o = false;
  if (typeof e === "string") ({ text: s, cut: o } = xe(e, je(e), r));
  let i = (0, import_chunk_r8478wtb.qu)((0, import_chunk_r8478wtb.Sz)(Zv(s, { ...t, max: r }).replace(/`/g, "'"))?.replace(new RegExp("^\\p{M}+", "u"), q) ?? "?");
  return o ? `${i}\u2026` : i;
}
function rdn(e, t = H) {
  let r = (0, import_chunk_7cfjrnwy.Ea)(e, t).replace(Qe, q), s = le(r), o = -1;
  return (0, import_chunk_r8478wtb.qu)(Array.from(r).map((i) => s(i, ++o) ? q(i) : i).join(""));
}
function ajt(e) {
  return e.declarable !== false && pSo(e.server);
}
var Je = ["name", "connector", "id", "display_name"];
function G() {
  return { ok: false, unresolved: [], internal: [], malformed: [], oversized: [], serverCount: null };
}
function Rre(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function mSo(e) {
  return Ae(e, "rules");
}
function h$i(e) {
  return Ae(e, "scopes");
}
function g$i(e) {
  return e.every((t) => typeof t === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(t));
}
function _$i(e) {
  if (!Rre(e)) return false;
  let { scopes: t, ...r } = e;
  return Object.keys(r).length === 0 && (t === void 0 || Array.isArray(t) && g$i(t));
}
function Ae(e, t) {
  if (!Rre(e)) return;
  let r = e[t];
  return Array.isArray(r) ? r : void 0;
}
var eSs = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/, tSs = /* @__PURE__ */ new Set(["view", "interact", "admin", "owner", "self"]);
function y$i(e) {
  if (!Rre(e)) return false;
  let { rules: t, wake: r, ...s } = e;
  return Object.keys(s).length === 0 && (t === void 0 || Array.isArray(t) && S$i(t)) && (r === void 0 || Array.isArray(r) && r.every((o) => typeof o === "string" && eSs.test(o)));
}
function S$i(e) {
  return e.every((t) => {
    if (!Rre(t)) return false;
    let { path: r, read: s, write: o, ...i } = t;
    return Object.keys(i).length === 0 && typeof r === "string" && (r === "" || eSs.test(r)) && (s === void 0 || typeof s === "string" && tSs.has(s)) && (o === void 0 || typeof o === "string" && tSs.has(o));
  });
}
function U(e) {
  try {
    return Rre(e) ? e : void 0;
  } catch {
    return null;
  }
}
function ke(e) {
  return Array.isArray(e) && e.every((t) => typeof t === "string");
}
function Xe(e) {
  return ke(e) ? e : null;
}
function ie(e) {
  return [...e].filter((t) => _e.test(t));
}
function X(e) {
  return (0, import_chunk_mzmcvr6c.ht)(e) === null ? e : e.toLowerCase();
}
function b$i(e, t, r, s = {}) {
  let o = e.mcp;
  if (o === void 0) return { ok: true, caps: e, warnings: [], servers: [], renamed: [] };
  let i = Rre(o) ? o.servers : false;
  if (i === false || i != null && !Array.isArray(i)) return { ...G(), malformed: [{ kind: "not_object" }] };
  if (Rre(o) && o.dynamic !== void 0 && typeof o.dynamic !== "boolean") return { ...G(), malformed: [{ kind: "dynamic_not_boolean" }] };
  if (i == null || i.length === 0) {
    if (Rre(o) && TUn(o)) return { ok: true, caps: { ...e, mcp: { ...o, servers: [] } }, warnings: [], servers: [], renamed: [] };
    return { ...G(), malformed: [{ kind: "no_servers" }] };
  }
  let u = new Map(t.map((g) => [X(g.toolPrefix), g])), l = new Map(t.map((g) => [g.server, g])), d = [], m = [], a = [], b = [], y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), R = [], P = [];
  for (let [g, h] of i.entries()) {
    let _ = Q(h), f = _?.startsWith("host:") ? `host:${(0, import_chunk_px0hhsq7.pxt)(_.slice(5))}` : _;
    if (f === void 0) {
      let w = h !== null && typeof h === "object" ? Je.find((T) => T in h) ?? null : null;
      a.push({ kind: "entry_shape", index: g, wrongKey: w });
      continue;
    }
    let E = u.get(X((0, import_chunk_px0hhsq7.pxt)(f))), j = Rre(h) ? h.tools : void 0, N = Xe(j);
    if (j === void 0 || N?.length === 0) {
      let w = E ?? l.get(f);
      a.push({ kind: "no_tools", server: f, display: E !== void 0 && ajt(E) ? E.server : null, available: ie(w?.toolNames ?? []) });
    } else if (N === null) a.push({ kind: "tools_shape", server: f });
    let L = ljt(f), Z = L === void 0 ? void 0 : u.get(X(L)), W = L === void 0 ? null : (0, import_chunk_qdcbcsg7.aMr)(L), x = null, ge = l.get(f);
    if (E !== void 0) {
      if (!ajt(E)) a.push({ kind: "undeclarable_name", server: f, name: E.server });
      else if ((0, import_chunk_mzmcvr6c.ht)(f) !== null) a.push({ kind: "known_id", server: f, display: E.server });
      else if (x = E.server, f !== E.server) y.set(f, E.server);
    } else if (ge !== void 0) if (ajt(ge)) x = f;
    else a.push({ kind: "undeclarable_name", server: f, name: f });
    else if (f.startsWith(import_chunk_3f4m74y6.A8)) d.push(f);
    else if (f.startsWith("mcp__")) {
      let w = u.get(X((0, import_chunk_7cfjrnwy.nt)(f.slice(5), "__")));
      a.push({ kind: "tool_name", server: f, display: w !== void 0 && ajt(w) ? w.server : null });
    } else if ((0, import_chunk_mzmcvr6c.ht)(f) !== null) a.push({ kind: "opaque_id", server: f });
    else if (Z !== void 0) a.push(ajt(Z) ? { kind: "connector_as_host", server: f, display: Z.server } : { kind: "undeclarable_name", server: f, name: Z.server });
    else if (L !== void 0 && (0, import_chunk_mzmcvr6c.ht)(L) !== null) a.push({ kind: "opaque_id", server: f });
    else if (L !== void 0 && s.hostServers === false) a.push({ kind: "host_unavailable", server: f });
    else if (W !== null) {
      let w = (A) => (0, import_chunk_qdcbcsg7.Mhn)(A, W) || (0, import_chunk_qdcbcsg7.Mhn)((0, import_chunk_7cfjrnwy.nt)(`${(0, import_chunk_3f4m74y6.xn)(A)}__`, "__"), W) || (0, import_chunk_qdcbcsg7.Mhn)(Ce(A), W), T = r.find(w) ?? t.find((A) => w(A.server))?.server;
      if (T === void 0) x = `host:${W}`;
      else a.push({ kind: "local_server_as_first_party", server: f, local: T });
    } else if ((0, import_chunk_qdcbcsg7.CLl)(L ?? "")) m.push(f);
    else {
      x = f;
      let w = L === void 0 ? en(f, t) : void 0;
      if (w !== void 0 && !k.has(f)) k.set(f, w);
    }
    if (x !== null && _ !== f && !y.has(f)) y.set(_ ?? f, x);
    if (x !== null && N !== null && N.length > 0 && Rre(h)) {
      let w = new Set(t.flatMap((A) => A.server === x && ajt(A) ? A.toolNames ?? [] : [])), T = N;
      if (w.size > 0) {
        T = N.map((I) => {
          if (w.has(I)) return I;
          let J = [...w].filter((Le) => (0, import_chunk_3f4m74y6.xn)(Le) === I);
          if (J.length !== 1 || !_e.test(J[0])) return I;
          return R.push([I, J[0]]), J[0];
        });
        let A = (0, import_chunk_4smdap7r.M)(T.filter((I) => !w.has(I)));
        if (A.length > 0 && A.length === (0, import_chunk_4smdap7r.M)(T).length) {
          a.push({ kind: "unknown_tools", server: f, display: f === x ? null : x, unknown: A, available: ie(w) });
          continue;
        }
        if (A.length > 0) P.push({ server: x, unknown: A, known: ie(w) });
      }
      b.push({ ...h, server: x, tools: T });
    }
  }
  if (d.length > 0 || m.length > 0 || a.length > 0) return { ...G(), unresolved: d, internal: m, malformed: a };
  let S = [], K = /* @__PURE__ */ new Map();
  for (let g of b) {
    let h = K.get(g.server);
    if (h === void 0) K.set(g.server, { idx: S.length, from: 1 }), S.push(g);
    else {
      h.from++;
      let _ = S[h.idx];
      S[h.idx] = { ..._, tools: (0, import_chunk_4smdap7r.M)([..._.tools, ...g.tools]) };
    }
  }
  let F = [];
  if (y.size > 0) {
    let g = DG([...y], 8, ([h, _]) => `"${Zv(h)}" \u2192 "${xS(_)}"`).join(", ");
    F.push(`resolved ${(0, import_chunk_7cfjrnwy.O)(y.size, "a connector name", "connector names")} to the display ${(0, import_chunk_7cfjrnwy.O)(y.size, "name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  if (k.size > 0) {
    let g = DG([...k], 8, ([h, _]) => `"${xS(h)}" (closest here: "${xS(_)}")`).join(", ");
    F.push(`no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`);
  }
  if (R.length > 0) {
    let g = (0, import_chunk_4smdap7r.M)(R.map(([h, _]) => `"${xS(h)}" \u2192 "${xS(_)}"`));
    F.push(`rewrote mcp tool ${(0, import_chunk_7cfjrnwy.O)(g.length, "name")} to the upstream ${(0, import_chunk_7cfjrnwy.O)(g.length, "spelling")} viewers call \u2014 ${DG(g, 8, (h) => h).join(", ")}; the page must pass exactly ${g.length === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  for (let { server: g, unknown: h, known: _ } of P) {
    let f = DG(h, 8, (N) => `"${xS(N)}"`).join(", "), E = h.length === 1 ? "it" : "them", j = _.length === 0 ? "" : ` (its tools here: ${DG(_, 12, (N) => `"${xS(N)}"`).join(", ")})`;
    F.push(`connector "${xS(g)}" has no ${(0, import_chunk_7cfjrnwy.O)(h.length, "tool")} named ${f} in this session${j}, so the page's calls to ${E} fail for any viewer whose "${xS(g)}" lacks ${E} too \u2014 "tools" takes the connector's own top-level tool names; if ${E === "it" ? "that name is" : "those names are"} wrong, fix "tools" and publish again.`);
  }
  let oe = [];
  for (let [g, h] of K) {
    let _ = S[h.idx].tools.length, f = (0, import_chunk_qdcbcsg7.aMr)(ljt(g) ?? "") !== null;
    if (h.from > 1 && !f) {
      let E = xS(g), j = kUn(g);
      F.push(`${h.from} manifest entries resolve to ${j} "${E}" and were merged into one (${_} ${(0, import_chunk_7cfjrnwy.O)(_, "tool")}). A viewer with more than one ${j} named "${E}" gets server_ambiguous on every call until the duplicates are renamed or removed.`);
    }
    if (_ > p$i) oe.push({ server: g, toolCount: _ });
  }
  let pe = S.length > m$i ? S.length : null;
  if (oe.length > 0 || pe !== null) return { ...G(), oversized: oe, serverCount: pe };
  return { ok: true, caps: { ...e, mcp: { ...o, servers: S } }, warnings: F, servers: S.map((g) => g.server), renamed: [...y] };
}
function w$i(e, t, r = 8) {
  let s = new Set(t), o = /* @__PURE__ */ new Set(), i = [], u = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let l of e) for (let d of l.matchAll(u)) {
    let m = d[1] ?? d[2];
    if (s.has(m) || o.has(m)) continue;
    if (o.add(m), i.push(m), i.length >= r) return i;
  }
  return i;
}
function ee(e) {
  return e.toLowerCase().replace(/[\s\p{Pd}\p{Pc}]+/gu, " ").trim();
}
function en(e, t) {
  let r = t.filter(ajt), s = ee(e);
  if (r.some((a) => ee(a.server) === s)) return;
  let o = (a) => a.replace(/[^\p{L}\p{N}]/gu, ""), i = (a) => a.split(/[^\p{L}\p{N}]+/u).filter((b) => b.length >= 3), u = o(s);
  if (u.length < 3) return;
  let l = r.find((a) => o(ee(a.server)) === u);
  if (l !== void 0) return l.server;
  let d = i(s), m;
  for (let a of r) {
    let b = i(ee(a.server)), [y, k] = b.length <= d.length ? [b, d] : [d, b];
    if (y.length > 0 && y.every((R) => k.includes(R)) && (m === void 0 || y.length > m.shared)) m = { server: a.server, shared: y.length };
  }
  return m?.server;
}
function X_l(e, t) {
  return t.filter(([r]) => e.some((s) => [`'${r}'`, `"${r}"`, `\`${r}\``].some((o) => s.includes(o))));
}
function J_l(e) {
  let t = e.mcp;
  if (!Me(t)) return [];
  return t.servers.map(Q).filter((r) => r !== void 0 && r.startsWith(import_chunk_3f4m74y6.A8));
}
function Q_l(e, t, r) {
  let s = e.mcp, o = TUn(s) ? [fn] : [];
  if (!Me(s)) return o;
  let i = (0, import_chunk_4smdap7r.M)(s.servers.map(Q).filter((l) => l !== void 0)), u = (l) => r.has(l) && !import_chunk_qdcbcsg7.y7i.has(l) && !t.some((d) => d.toolPrefix === l);
  return i.filter((l) => {
    let d = ljt(l);
    if (d !== void 0) {
      let m = (0, import_chunk_qdcbcsg7.aMr)(d);
      return m === null ? !u(d) : ![...r].some((a) => (0, import_chunk_qdcbcsg7.aMr)(a) === m && u(a));
    }
    return !r.has(l) && !u(Ce(l)) && !t.some((m) => m.server === l && r.has(m.toolPrefix));
  }).map((l) => {
    let d = xS(l);
    return `This page declares ${kUn(l)} "${d}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${d}" integration is unverified.`;
  }).concat(o);
}
function Ce(e) {
  return (0, import_chunk_3f4m74y6.xn)(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "");
}
function Q(e) {
  let t = e != null && typeof e === "object" ? e.server : void 0;
  return typeof t === "string" ? t : void 0;
}
function G7(e) {
  return ce(e) && Object.keys(e).length > 0;
}
function ce(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ne(e) {
  let t = tn(e);
  return ce(t) ? t : e;
}
function D(e, t, r) {
  Object.defineProperty(e, t, { value: r, enumerable: true, writable: true, configurable: true });
}
function k$i(e, t) {
  let r = ne(e ?? {}), s = ne(t ?? {}), o = { ...r }, i = false, u = false;
  for (let [l, d] of Object.entries(s)) if (Object.hasOwn(r, l)) u ||= !re(r[l], d);
  else D(o, l, d), i = true;
  return { capabilities: i ? o : e, widened: i, conflict: u };
}
var odn = "0.0.0";
class Re {
  served = void 0;
}
var de = new import_chunk_pzzqg6s3.ze(() => new Re());
function hSo(e, t) {
  de.of(e).served = t;
}
function Z_l(e) {
  return de.peek(e)?.served;
}
function eyl(e) {
  de.of(e).served = void 0;
}
var gSo = "host";
function _So(e, t, r) {
  let s = e.features;
  return s !== void 0 && Object.hasOwn(s, t) && Object.hasOwn(s[t] ?? {}, r);
}
var Oe = /^host:([A-Za-z0-9_-]{1,64})$/;
function ljt(e) {
  return Oe.exec(e)?.[1];
}
function kUn(e) {
  return ljt(e) === void 0 ? "connector" : "local server";
}
var E$i = "CLAUDE_ARTIFACT_HOST_GRANT", nn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1), servers: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ server: (0, import_chunk_adx6804h.n)().regex(Oe), tools: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) })) }));
function EUn(e) {
  if (e === void 0) return { kind: "absent" };
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return { kind: "unreadable" };
  }
  let r = nn().safeParse(t);
  if (!r.success) return { kind: "unreadable" };
  let s = /* @__PURE__ */ new Map();
  for (let o of r.data.servers) {
    let i = s.get(o.server) ?? /* @__PURE__ */ new Set();
    for (let u of o.tools) i.add(u);
    s.set(o.server, i);
  }
  return { kind: "granted", tools: s };
}
function V(e) {
  return e.flatMap((t) => {
    let r = Q(t);
    return r === void 0 ? [] : [r];
  });
}
function nSs(e, t) {
  let r = e.mcp;
  if (!Rre(r) || !Array.isArray(r.servers)) return { ok: true, caps: e, dropped: [], servers: [] };
  let s = r.servers;
  if (t.kind === "absent") return { ok: true, caps: e, dropped: [], servers: V(s) };
  let o = (0, import_chunk_4smdap7r.M)(V(s).filter((l) => ljt(l) !== void 0));
  if (o.length === 0) return { ok: true, caps: e, dropped: [], servers: V(s) };
  if (t.kind === "unreadable") return { ok: false, refused: o };
  let i = [], u = [];
  for (let l of s) {
    let d = Q(l);
    if (d === void 0 || ljt(d) === void 0) {
      u.push(l);
      continue;
    }
    let m = t.tools.get(d);
    if (m === void 0 || !Rre(l)) {
      i.push({ server: d, tool: null });
      continue;
    }
    let a = l.tools;
    if (!ke(a)) {
      i.push({ server: d, tool: null });
      continue;
    }
    let b = a.filter((y) => m.has(y));
    for (let y of a) if (!m.has(y)) i.push({ server: d, tool: y });
    if (b.length > 0) u.push({ ...l, tools: b });
  }
  if (i.length === 0) return { ok: true, caps: e, dropped: i, servers: V(s) };
  if (u.length === 0) {
    let { mcp: l, ...d } = e;
    return { ok: true, caps: d, dropped: i, servers: [] };
  }
  return { ok: true, caps: { ...e, mcp: { ...r, servers: u } }, dropped: i, servers: V(u) };
}
var nme = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;
function tyl(e, t) {
  if (!nme.test(e) || !nme.test(t)) return false;
  let r = e.split(".").map(Number), s = t.split(".").map(Number);
  for (let o = 0; o < 3; o++) if (r[o] !== s[o]) return r[o] > s[o];
  return false;
}
var Ele = /^[a-z][a-z0-9]{0,23}$/;
function i9(e) {
  return typeof e === "string" && e !== odn && nme.test(e) ? e : null;
}
function nyl(e, t) {
  if (t.version === odn) return [];
  let r = new Set(t.capabilities);
  return Object.keys(e).filter((s) => !r.has(s));
}
var a9 = "artifact", rme = "self";
function te(e) {
  let t = (0, import_chunk_6k9zs54e.jk)(e);
  if (t === import_chunk_6k9zs54e.Qm) return;
  if (t !== void 0) {
    let r = t.map((s) => te(s));
    return r.includes(void 0) ? void 0 : `[${r.join(",")}]`;
  }
  if (e !== null && typeof e === "object") {
    let r = e, s = Object.keys(r).sort().map((o) => {
      let i = te(r[o]);
      return i === void 0 ? void 0 : `${JSON.stringify(o)}:${i}`;
    });
    return s.includes(void 0) ? void 0 : `{${s.join(",")}}`;
  }
  return JSON.stringify(e) ?? "null";
}
function re(e, t) {
  let r = te(e);
  return r !== void 0 && r === te(t);
}
function v$i(e) {
  if (!Object.hasOwn(e, a9)) return e;
  if (Object.hasOwn(e, rme)) {
    if (!re(e[a9], e[rme])) return e;
    let r = {};
    for (let [s, o] of Object.entries(e)) if (s !== a9) D(r, s, o);
    return r;
  }
  let t = {};
  for (let [r, s] of Object.entries(e)) D(t, r === a9 ? rme : r, s);
  return t;
}
function tn(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return e;
  let t = e;
  if (!Object.hasOwn(t, rme)) return e;
  if (Object.hasOwn(t, a9) && !re(t[a9], t[rme])) return e;
  let r = {};
  for (let [s, o] of Object.entries(t)) {
    if (s === rme) {
      if (!Object.hasOwn(t, a9)) D(r, a9, o);
      continue;
    }
    D(r, s, o);
  }
  return r;
}
function ryl(e, t) {
  let r = Object.hasOwn(e, a9), s = Object.hasOwn(e, rme);
  if (!r && !s || t.version === odn) return { caps: e };
  let o = new Set(t.capabilities), i = o.has(a9) ? a9 : o.has(rme) ? rme : null;
  if (i === null) return { caps: e };
  if (r && s) {
    if (!re(e[a9], e[rme])) return { errMsg: "capabilities declares both `artifact` and `self` \u2014 two spellings of the same capability \u2014 with different configs. Declare it once (canonically `artifact: {}`)." };
  }
  let u = {};
  for (let [l, d] of Object.entries(e)) {
    if (l === a9 || l === rme) {
      if (!Object.hasOwn(u, i)) D(u, i, d);
      continue;
    }
    D(u, l, d);
  }
  return { caps: u };
}
function UEt(e) {
  return "capabilities" in e ? e.capabilities : void 0;
}
var se = /* @__PURE__ */ new Set([a9, rme, "downloads", "comments", "room", "db", "assets", "user"]);
function rSs(e) {
  return fe(e, se);
}
var rn = /* @__PURE__ */ new Set(["downloads", "room", "db", "assets", "user"]);
function oSs(e) {
  return e !== null && rSs(e) && fe(e, rn) && Object.entries(e).every(([t, r]) => {
    if (r === true) return true;
    if (!Rre(r)) return false;
    switch (t) {
      case "db":
        return !("wake" in r) && y$i(r);
      case "user":
        return _$i(r) && (h$i(r) ?? []).every((s) => s === "profile");
      default:
        return Object.keys(r).length === 0;
    }
  });
}
var $e = /* @__PURE__ */ new Set([...se, "mcp", "flags"]);
function T$i(e) {
  return fe(e, $e);
}
function oyl(e) {
  return e.every((t) => $e.has(t));
}
function fe(e, t) {
  return e == null || ce(e) && Object.keys(e).every((r) => t.has(r));
}
var sn = new RegExp(`^${import_chunk_r8478wtb.aB.source}$`, "u");
function on(e) {
  return import_chunk_r8478wtb.X9i.test(e) && !/^[\p{P}\p{M}]$/u.test(e) && !sn.test(e) && !(0, import_chunk_r8478wtb.nVt)(e.codePointAt(0) ?? 0) && !ue.test(e);
}
function an(e) {
  let t = Array.from(e).slice(0, H + 1), r = t.length, s = t.map(on), o = t.map((a, b) => s[b] || new RegExp("^\\p{M}$", "u").test(a) || (0, import_chunk_r8478wtb.nVt)(a.codePointAt(0) ?? 0)), i = t.map((a, b) => !s[b] && /^[\p{L}\p{N}]$/u.test(a)), u = Array(r).fill(false), l = Array(r).fill(false), d = false;
  for (let a = 0; a < r; a++) u[a] = d, d = i[a] || o[a] && d;
  d = false;
  for (let a = r - 1; a >= 0; a--) l[a] = d, d = i[a] || o[a] && d;
  let m = /* @__PURE__ */ new Set();
  for (let a = 0; a < r; a++) if (s[a] && u[a] && l[a]) m.add(a);
  return m;
}
function un(e) {
  let t = an(e), r = le(e), s = "none", o = -1;
  return (i) => {
    o++;
    let u = i.codePointAt(0) ?? 0;
    if (r(i, o)) return s = "none", true;
    if (t.has(o)) return s = "none", true;
    if ((0, import_chunk_r8478wtb.nVt)(u)) {
      let l = (0, import_chunk_r8478wtb.RPo)(u, s);
      return s = l.after, !l.rides;
    }
    if (ue.test(i)) return s = "none", true;
    return s = (0, import_chunk_r8478wtb.APo)(i), false;
  };
}
function xe(e, t, r) {
  let s = [], o = 0;
  for (let i of e) {
    let u = t(i) ? q(i) : i, l = u === i ? 1 : u.length;
    if (o + l > r) return { text: s.join(""), cut: true };
    s.push(u), o += l;
  }
  return { text: s.join(""), cut: false };
}
function ln(e) {
  let t = e, r = false;
  if (typeof e === "string") ({ text: t, cut: r } = xe(e, un(e), H));
  let s = (0, import_chunk_r8478wtb.iVt)(((0, import_chunk_r8478wtb.Sz)(Zv(t, { max: H })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
  return r ? `${s}\u2026` : s;
}
function sSs(e) {
  if (!e) return "";
  let t = [], r = [], s;
  for (let [a, b] of Object.entries(e)) {
    let y = a === "mcp" ? Fe(b) : void 0, k = a === "mcp" && TUn(b);
    if (y === import_chunk_6k9zs54e.Qm) s = k ? `${vUn} + ${import_chunk_6k9zs54e.LG}` : import_chunk_6k9zs54e.LG, t.unshift("mcp");
    else if (y !== void 0 && y.length > 0) {
      let R = DG(y, 8, (P) => {
        let S = U(P), K = S === null ? import_chunk_6k9zs54e.Qm : (0, import_chunk_6k9zs54e.jk)(S?.tools), F = be(K) ?? 0;
        return `${ln(S?.server)}[${K === import_chunk_6k9zs54e.Qm ? "?" : F} ${(0, import_chunk_7cfjrnwy.O)(F, "tool")}]`;
      }).join(", ");
      s = k ? `${vUn} + ${R}` : R, t.unshift("mcp");
    } else if (k) s = vUn, t.unshift("mcp");
    else if (se.has(a)) {
      let R = U(b), P = R === null ? import_chunk_6k9zs54e.Qm : (0, import_chunk_6k9zs54e.jk)(R?.rules), S = be(P);
      r.push(P === void 0 ? a : `${a}[${P === import_chunk_6k9zs54e.Qm ? "?" : S} ${(0, import_chunk_7cfjrnwy.O)(S ?? 0, "rule")}]`);
    } else t.push(Ele.test(a) ? a : Ne);
  }
  let o = t.length + r.length;
  if (o === 0) return "";
  let i = [...t, ...r.slice(0, Math.max(0, 8 - t.length))], u = o > 8 ? `[${o} total]; ` : "", l = u + i.join("; ");
  if (s !== void 0) {
    let a = i.slice(1).join("; "), b = a === "" ? "" : "; ", y = Math.max(16, 400 - Array.from(u + a + b).length - 6), k = Array.from(s), R = k.length > y ? k.slice(0, y).join("") + "\u2026" : s;
    l = `${u}mcp: ${R}${b}${a}`;
  }
  let d = Array.from(l);
  return ` (${d.length > 400 ? d.slice(0, 400).join("") + "\u2026" : d.join("")})`;
}
function syl(e, t) {
  let r = ne(e ?? {}), s = Object.keys(ne(t ?? {})).filter((u) => !Object.hasOwn(r, u)), o = (u) => u === "mcp" ? 0 : se.has(u) ? 2 : 1, i = s.sort((u, l) => o(u) - o(l)).map((u) => Ele.test(u) ? u : Ne);
  if (!s.includes("mcp")) {
    if (TUn(t?.mcp) && !TUn(e?.mcp)) i.unshift(dn);
    else if (pn(e?.mcp, t?.mcp)) i.unshift(cn);
  }
  return i;
}
var Ne = "invalid-name", cn = "mcp (more servers or tools)", vUn = "any connector the viewer approves", dn = `mcp (${vUn})`, fn = "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";
function TUn(e) {
  return U(e)?.dynamic === true;
}
function pn(e, t) {
  if (t === void 0) return false;
  let r = ye(t);
  if (r === void 0) return true;
  let s = /* @__PURE__ */ new Map();
  for (let o of ye(e) ?? []) {
    let i = U(o), u = i?.server;
    if (typeof u === "string") s.set(u, new Set((0, import_chunk_6k9zs54e.Jbe)(i?.tools) ?? []));
  }
  return r.some((o) => {
    let i = U(o), u = i?.server, l = typeof u === "string" ? s.get(u) : void 0, d = (0, import_chunk_6k9zs54e.Jbe)(i?.tools);
    return l === void 0 || d === void 0 || d.some((m) => !l.has(m));
  });
}
function Fe(e) {
  let t = U(e);
  return t === null ? import_chunk_6k9zs54e.Qm : t === void 0 ? void 0 : (0, import_chunk_6k9zs54e.jk)(t.servers);
}
function ye(e) {
  let t = Fe(e);
  return t === import_chunk_6k9zs54e.Qm ? void 0 : t;
}
function be(e) {
  return e === void 0 || e === import_chunk_6k9zs54e.Qm ? void 0 : e.length;
}
function DG(e, t, r) {
  if (e.length <= t) return e.map(r);
  return [`[${e.length} total]`, ...e.slice(0, t).map(r)];
}
function Me(e) {
  return e != null && typeof e === "object" && "servers" in e && Array.isArray(e.servers) && e.servers.length > 0;
}
function Zv(e, t) {
  if (typeof e !== "string") return "?";
  let r = t?.max ?? 64, s = Array.from(e.slice(0, 2 * r), (o) => (0, import_chunk_r8478wtb.KN)(o.codePointAt(0) ?? 0) ? " " : o).slice(0, r).join("").replace(import_chunk_r8478wtb.yee, " ").replace(/\s+/g, " ");
  return s.trim() === "" ? "?" : s;
}
function Kkr(e, t) {
  let r = Zv(e, { max: t }).replace(import_chunk_r8478wtb.yee, " ").trim();
  return r !== "" && r !== "?" ? r : void 0;
}
