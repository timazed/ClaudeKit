const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_a0mfj0s8_exports = {};
__export(chunk_a0mfj0s8_exports, {
  C6o: () => C6o,
  E6o: () => E6o,
  Gf: () => Gf,
  SZn: () => SZn,
  T6o: () => T6o,
  aHt: () => aHt,
  bZn: () => bZn,
  c9s: () => c9s,
  ePa: () => ePa,
  f9s: () => f9s,
  k6o: () => k6o,
  p9s: () => p9s,
  u9s: () => u9s,
  v6o: () => v6o,
  w6o: () => w6o,
  yZn: () => yZn
});
module.exports = __toCommonJS(chunk_a0mfj0s8_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_xb56zerw = require("/$bunfs/root/chunk-xb56zerw.js");
var import_chunk_424x9gf0 = require("/$bunfs/root/chunk-424x9gf0.js");
var import_chunk_dy7yfx4p = require("/$bunfs/root/chunk-dy7yfx4p.js");
var import_chunk_nb21njpa = require("/$bunfs/root/chunk-nb21njpa.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var v = __toESM(require("path"));
var import_path = require("path");
var import_crypto = require("crypto");
var import_path2 = require("path");
var import_path3 = require("path");
var import_path4 = require("path");
var import_promises2 = require("fs/promises");
var import_promises3 = require("fs/promises");
var import_path5 = require("path");
var import_promises4 = require("fs/promises");
var import_path6 = require("path");
(0, import_chunk_adx6804h.B)();
function ze(e) {
  let s = /@ts-/i.test(e), o = /\u2500\u2500 from plugin |\/\/\s*Skipped:/.test(e);
  return s ? "@ts-" : o ? "framing" : void 0;
}
var W = (e, s, ...o) => e?.kind === s && o.includes(e.text);
function Ct(e) {
  let s = W(e, "punct", "{", "(", "["), o = W(e, "punct", "}", ")", "]");
  return s ? 1 : o ? -1 : 0;
}
var Q = (e, s, o) => ({ kind: e, text: s, line: o });
var Dn = (e, s, o) => {
  let r = e.indexOf("*/", s + 2), a = r !== -1, p = a ? r + 2 : e.length, f = e.slice(s, p), y = f.match(/\r\n|[\n\r\u2028\u2029]/g), g = o + (y?.length ?? 0), h = a ? ze(f) : "/*", S = { end: p, line: g };
  return h ? { ...S, token: Q("stray", h, o) } : S;
};
var Vn = (e, s, o) => {
  let r = e.slice(s).search(/[\n\r\u2028\u2029]/), a = r === -1 ? e.length : s + r, p = e.slice(s, a).trim(), f = ze(p), g = p.startsWith("///") ? Q("reference", p, o) : f ? Q("stray", f, o) : void 0;
  return g ? { end: a, line: o, token: g } : { end: a, line: o };
};
var Rt = (e, s, o) => {
  let r = e[s] ?? "", a = "", p = s + 1;
  while (p < e.length) {
    let y = e[p] ?? "", g = y === "\\" && p + 1 < e.length;
    if (y === r || y === `
` || y === "\r") break;
    a += g ? e[p + 1] ?? "" : y, p += g ? 2 : 1;
  }
  return e[p] === r ? { end: p + 1, line: o, token: Q("string", a, o) } : { end: p, line: o, token: Q("stray", r, o) };
};
var Hn = (e, s, o) => {
  let r = s + 1;
  while (r < e.length && /[\w$]/.test(e[r] ?? "")) r += 1;
  return { end: r, line: o, token: Q("word", e.slice(s, r), o) };
};
function At(e, s) {
  let o = e[s] ?? "", r = e.slice(s, s + 2), a = { "//": Vn, "/*": Dn }, p = { "'": Rt, '"': Rt }, f = /[\w$]/.test(o);
  return a[r] ?? p[o] ?? (f ? Hn : void 0);
}
function _t(e) {
  let s = [], o = [], r = 0, a = 0, p = 1, f = false, y = 1;
  while (a < e.length) {
    let g = e[a] ?? "", h = g === `
` || g === "\u2028" || g === "\u2029" || g === "\r" && e[a + 1] !== `
`;
    if (f) {
      let P = g === "\\", N = g === "$" && e[a + 1] === "{", j = g === "`";
      if (N) o.push(r);
      f = !N && !j, p += h ? 1 : 0, a += P || N ? 2 : 1;
      continue;
    }
    let S = At(e, a), k = g === "`", x = g === "}" && o.length > 0 && r === o.at(-1), E = /[\t\n\v\f\r \u2028\u2029]/.test(g), A = g === "/" || g === "\\", _ = /[!-~]/.test(g) && !A, R = !E && !_, b = A ? g : "other";
    if (S) {
      let P = S(e, a, p);
      if (P.token) s.push(P.token);
      a = P.end, p = P.line;
      continue;
    }
    if (k) s.push(Q("string", "`", p)), y = p;
    if (R) s.push(Q("stray", b, p));
    if (x) o.pop();
    if (!k && !x && !R && !E) s.push(Q("punct", g, p)), r += g === "{" ? 1 : g === "}" ? -1 : 0;
    f = k || x, p += h ? 1 : 0, a += 1;
  }
  if (f || o.length > 0) s.push(Q("stray", "`", y));
  return s;
}
var Ae = (e, s) => [e[s], e[s + 1], e[s + 2]];
function Nt(e, s) {
  let [o, r, a] = Ae(e, s), p = W(o, "word", "global") && W(r, "punct", "{"), f = W(o, "word", "module", "namespace") && r?.kind === "string", y = W(o, "word", "as") && W(r, "word", "namespace"), g = W(o, "word", "interface") && r?.kind === "word" && r.line !== o?.line, h = W(o, "word", "interface") && W(r, "word", "EngineInterface") && !W(a, "punct", "{");
  return p ? "`global { \u2026 }` augments the global scope" : f ? `a nested \`module '${r.text}'\` augments another module` : y ? "`as namespace` declares a global" : g ? "`interface` without its name on the same line" : h ? "`EngineInterface` takes members only, no `extends` or type parameters" : void 0;
}
function Mt(e) {
  let s = [], o = 0;
  for (let [r, a] of e.entries()) {
    let f = o === 0 && W(e[r - 1], "word", "declare") && W(a, "word", "module") ? void 0 : Nt(e, r);
    if (o += Ct(a), f !== void 0) s.push(`line ${a.line}: ${f}; the contract may only augment 'claude-code', at its top level`);
  }
  return s;
}
function We(e, s, o) {
  let [r, a, p] = Ae(e, s);
  return r?.kind === "word" && r.text === "interface" && a?.kind === "word" && a.text === o && a.line === r.line && p?.kind === "punct" && p.text === "{";
}
function xe(e, s) {
  let o = 0;
  for (let r = s; r < e.length; r += 1) {
    let a = e[r];
    if (!(a?.kind === "punct" && (a.text === "{" || a.text === "}"))) continue;
    if (o += a.text === "{" ? 1 : -1, o === 0) return r;
  }
  return e.length;
}
function _e(e, s) {
  let o = [], r = xe(e, s), a = (y, ...g) => e[y]?.kind === "punct" && g.includes(e[y].text), p = 0, f = true;
  for (let y = s + 1; y < r; y += 1) {
    let g = a(y, "{", "(", "["), h = a(y, "}", ")", "]"), S = p === 0 && a(y, ";", ","), k = (e[y - 1]?.line ?? 0) < (e[y]?.line ?? 0), E = e[y]?.text === "readonly" && e[y + 1]?.kind !== "punct" ? y + 1 : y, A = e[E], _ = p === 0 && (f || k) && A !== void 0 && A.kind !== "punct" && a(E + 1, ":", "?", "(", "<");
    if (p += g ? 1 : h ? -1 : 0, f = S, _) o.push(A.text);
  }
  return o;
}
function Ot(e, s) {
  let o = /* @__PURE__ */ new Set();
  for (let { start: r, end: a } of s) for (let p = r; p < a; p += 1) {
    if (!We(e, p, "EngineInterface")) continue;
    let f = p + 2;
    for (let y of _e(e, f)) o.add(y);
  }
  return [...o];
}
var Lt = (e) => e.split(/\r\n|[\n\r\u2028\u2029]/).flatMap((s, o) => /^\s*(?:\*\s*)?\/\/\s*(?:\u2500\u2500 from plugin |Skipped:)/.test(s) || /^\s*(?:\/\/\/?|\/?\*)\s*@ts-/i.test(s) ? [`line ${o + 1}: a line that would read as the roll-up's framing or a compiler pragma once copied; a contract carries neither`] : []);
function jt(e) {
  let s = [], o = "reaches outside the file; the contract must be self-contained (no import, export \u2026 from, require or reference)", r = 0;
  for (let [a, p] of e.entries()) {
    let f = e[a + 1], y = e[a + 2], g = (b) => p.kind === "word" && p.text === b, h = f?.kind === "punct" && f.text === "(" && y?.kind === "string", S = f?.kind === "string" || f?.kind === "word" || f?.kind === "punct" && (f.text === "{" || f.text === "*") || h, k = p.line !== r, x = p.kind === "reference", E = g("import") && S, A = g("from") && k && f?.kind === "string", _ = g("require") && k && h, R = x ? "a triple-slash reference" : E ? "`import`" : A ? `\`from '${f.text}'\`` : _ ? `\`require('${y.text}')\`` : void 0;
    if (R === void 0) continue;
    r = p.line, s.push(`line ${p.line}: ${R} ${o}`);
  }
  return s;
}
var Ft = /[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;
var It = (e) => e.split(`
`).flatMap((s, o) => Ft.test(s.replace(/[\t\r]/g, "")) ? [`line ${o + 1}: an invisible or reordering character (control, bidi, zero-width, line separator); a contract holds none`] : []);
function Vt(e) {
  try {
    (0, import_chunk_p9da7c9y.jlt)("contract.d.ts", e);
    return;
  } catch (s) {
    return `does not parse as TypeScript: ${(0, import_chunk_jv7av99m.d)(s)}`;
  }
}
function Ht(e, s) {
  let o = /* @__PURE__ */ new Map(), r = (a, p) => e[a]?.kind === "punct" && e[a].text === p;
  for (let { start: a, end: p } of s) for (let f = a; f < p; f += 1) {
    if (!We(e, f, "PluginState")) continue;
    let y = f + 2, g = xe(e, y), h = new Set(_e(e, y)), S = 0;
    for (let k = y + 1; k < g; k += 1) {
      let x = e[k];
      if (S === 0 && x !== void 0 && x.kind !== "punct" && h.has(x.text) && r(k + 1, ":") && r(k + 2, "{")) {
        let R = o.get(x.text) ?? /* @__PURE__ */ new Set();
        for (let b of _e(e, k + 2)) R.add(b);
        o.set(x.text, R);
      }
      let A = r(k, "{") || r(k, "(") || r(k, "["), _ = r(k, "}") || r(k, ")") || r(k, "]");
      S += Number(A) - Number(_);
    }
  }
  return [...o].map(([a, p]) => ({ plugin: a, keys: [...p] }));
}
function zt(e) {
  let s = (0, import_chunk_p9da7c9y.jlt)("contract.ts", e).replace(/^\s*export\s*\{\s*\};?\s*$/m, "").trim(), o = (0, import_chunk_7cfjrnwy.Ir)(s);
  return s === "" ? [] : [`the contract holds code that would run (\`${o}\`); a contract is types only`];
}
var Wt = (e) => e.flatMap((s, o) => {
  let r = e[o - 1], a = W(s, "word", "class", "const", "enum", "function", "let", "var"), p = r === void 0 || r.line < s.line || W(r, "punct", ";", "{", "}") || W(r, "word", "abstract", "async", "declare", "default", "export"), f = W(e[o + 1], "punct", ":", "?", "(", "<");
  return a && p && !f ? [`line ${s.line}: \`${s.text}\` declares something that runs; a contract holds types only`] : [];
});
var Bt = { "/": "a `/` outside a comment or string (a regular expression or arithmetic)", "\\": "a `\\` outside a string", "`": "a template literal that never closes", "'": "a string that never closes on its line", '"': "a string that never closes on its line", "/*": "a comment that never closes", "@ts-": "a `@ts-` compiler pragma in a comment", framing: "a comment that imitates the roll-up's banner or trailer", other: "a character outside plain ASCII (or a control character) in code" };
var Ut = (e) => e.filter((s) => s.kind === "stray").map((s) => `line ${s.line}: ` + (Bt[s.text] ?? `\`${s.text}\``) + ": a type contract never holds one, so the check refuses it rather than read past it");
var Ne = "claude-code";
function Kt(e, s) {
  let [o, r, a] = Ae(e, s), [, , p] = Ae(e, s + 1), f = W(o, "word", "declare") && W(r, "word", "module") && a?.kind === "string" && o?.line === r?.line && r?.line === a.line && W(p, "punct", "{"), y = f && a.text !== Ne, g = W(o, "word", "declare") && !f, h = W(o, "word", "export") && !W(r, "word", "type", "interface"), S = W(o, "word", "abstract", "async", "default", "module", "namespace"), k = W(o, "word", "type", "interface") && !W(e[s - 1], "word", "export", "import");
  return y ? `augments module '${a.text}'; the contract may only augment '${Ne}'` : g ? `\`declare\` at the top level opens only \`declare module '${Ne}' { \u2026 }\`, its three words on one line` : h ? "`export` at the top level is followed by `type` or `interface`: a contract exports types and nothing else" : S ? `\`${o?.text}\` at the top level: a contract holds type exports and \`declare module '${Ne}'\` blocks only` : k ? `a top-level \`${o?.text}\` without \`export\` would be global in a dependent's program; export it` : void 0;
}
function Gt(e) {
  let s = [], o = [], r = 0, a = 0;
  while (a < e.length) {
    let [p, f, y] = Ae(e, a), h = r === 0 && p?.kind === "word" ? Kt(e, a) : void 0, S = h === void 0 || h.startsWith("augments"), k = r === 0 && S && W(p, "word", "declare") && W(f, "word", "module") && y?.kind === "string", x = a + 2;
    if (r += Ct(p), h !== void 0) s.push(`line ${p?.line}: ${h}`);
    if (!k) {
      a += 1;
      continue;
    }
    let E = xe(e, x + 1);
    if (E === e.length) s.push(`line ${p?.line}: \`declare module\` never closes: the text does not lex as a type contract, so the check refuses it`);
    o.push({ start: x + 2, end: E }), a = E + 1;
  }
  return { problems: s, blocks: o };
}
function Yt(e) {
  let s = Vt(e);
  if (s !== void 0) return { problems: [s], nouns: [], state: [] };
  let o = _t(e), r = o.filter((f) => f.kind !== "reference"), { problems: a, blocks: p } = Gt(r);
  return { problems: [...It(e), ...Ut(o), ...Lt(e), ...jt(o), ...a, ...Wt(r), ...zt(e), ...Mt(r)], nouns: Ot(r, p), state: Ht(r, p) };
}
var Me = (...e) => ({ kind: "refused", problems: e.map(import_chunk_7cfjrnwy.Wr) });
async function Be(e, s, o) {
  let r = e ?? import_chunk_bzyb60p0.DIn, a = (0, import_path.resolve)(s, r), p = (0, import_path.relative)(s, a);
  if (p.startsWith("..") || (0, import_path.isAbsolute)(p)) return Me(`${r} leaves the plugin's folder`);
  let y = (R) => Me(`${r}: ${(0, import_chunk_bzyb60p0.mns)(o, a, R)}`), g = await (0, import_chunk_p9da7c9y.eNe)(a, s, o).then((R) => R, (R) => e === void 0 && (0, import_chunk_bzyb60p0.pns)(R) ? void 0 : y(R));
  if (g === void 0 || "kind" in g) return g;
  if (g.size > import_chunk_bzyb60p0.LIn) return Me(`${r} is over ${import_chunk_bzyb60p0.LIn} bytes and was not read`);
  let k = await (0, import_chunk_bzyb60p0.hns)(g.real).then((R) => R, y);
  if (typeof k !== "string") return k;
  let { problems: x, nouns: E, state: A } = Yt(k);
  return x.length === 0 ? { kind: "read", text: k, nouns: E, state: A } : Me(...x);
}
function vs({ names: e, owner: s, declared: o, others: r, contract: a, refusal: p }) {
  let f = /* @__PURE__ */ new Map();
  for (let { plugin: h, keys: S } of [...o, ...r ?? []]) {
    let k = f.get(h) ?? /* @__PURE__ */ new Set();
    S.forEach((x) => k.add(x)), f.set(h, k);
  }
  let y = [], g = /* @__PURE__ */ new Set();
  for (let { plugin: h, key: S } of e.writes) if (h !== s) y.push(`$.state.set refers to ${(0, import_chunk_vfyns8ja.dfn)({ plugin: h, key: S })}, which ${h} owns: only a value's owner writes it (to change what is written, hook ${h}'s state.set and rewrite e.value)`);
  for (let { plugin: h, key: S } of [...e.reads, ...e.writes]) {
    let k = h === s, x = k || r !== void 0, E = (0, import_chunk_vfyns8ja.dfn)({ plugin: h, key: S });
    if (!x) {
      g.add(E);
      continue;
    }
    let A = f.get(h)?.has(S) === true, _ = k ? a ?? "the manifest's types contract" : "no enabled plugin's contract", R = p ?? `${_} must name it in interface PluginState { ${h}: { ${S}: ... } }`, b = k ? `${E} is not declared: ${R}` : `${E} is not declared: ${_} names it in PluginState`;
    if (!A && !y.includes(b)) y.push(b);
  }
  return { problems: y, unchecked: [...g] };
}
async function Xt(e, s, o) {
  {
    let r = await (0, import_chunk_p9da7c9y.Vlt)(e, s, o), a;
    try {
      a = await (0, import_chunk_0w2wb7gk.S2n)(o, r, (p) => WebAssembly.compile(p));
    } catch (p) {
      throw new import_chunk_hcg738hf.je(`${e}: ${(0, import_chunk_jv7av99m.d)(p)}`);
    }
    return { path: e, size: r.length, sha256: (0, import_crypto.createHash)("sha256").update(r).digest("hex"), imports: WebAssembly.Module.imports(a).map((p) => ({ module: p.module, name: p.name, kind: p.kind })), exports: WebAssembly.Module.exports(a).map((p) => ({ name: p.name, kind: p.kind })) };
  }
}
var at = ["monitors", "themes"], Ps = [{ key: "commands", recordPathProperty: "source" }, { key: "hooks", bareStringIndexed: true, jsonFile: true }, { key: "agents", bareStringIndexed: true }, { key: "skills", bareStringIndexed: true }, { key: "outputStyles" }, { key: "themes" }, { key: "monitors", jsonFile: true }, { key: "lspServers", jsonFile: true }, { key: "workflows", bareStringIndexed: true }, { key: "types", bareStringOnly: true }, { key: "mcpServers", jsonFile: true, acceptsUrl: true, missingConsequence: (e) => e.endsWith(".json") ? "The plugin loader skips a missing MCP servers file without reporting it, so none of its servers will load." : void 0 }];
function Zt(e) {
  let s = (0, import_chunk_ma3kja9f.T)(e.experimental) ? e.experimental : void 0, o = [];
  for (let r of Ps) {
    let a = e[r.key], p = r.key, f = s !== void 0 && at.includes(r.key) && Object.hasOwn(s, r.key) ? s[r.key] : void 0;
    if (f != null) a = f, p = `experimental.${r.key}`;
    let y = [];
    if (r.bareStringOnly) y.push([p, a]);
    else if (Array.isArray(a)) for (let [g, h] of a.entries()) y.push([`${p}[${g}]`, h]);
    else if (!(0, import_chunk_ma3kja9f.T)(a)) y.push([r.bareStringIndexed ? `${p}[0]` : p, a]);
    else if (r.recordPathProperty !== void 0) {
      for (let [g, h] of Object.entries(a)) if ((0, import_chunk_ma3kja9f.T)(h)) y.push([`${p}.${g}.${r.recordPathProperty}`, h[r.recordPathProperty]]);
    }
    for (let [g, h] of y) if (typeof h === "string" && !(r.acceptsUrl && /^[a-z][a-z0-9+.-]*:\/\//i.test(h))) o.push({ spec: r, field: g, relPath: h });
  }
  return o;
}
var w6o = ["privacyPolicyUrl", "privacy_policy", "privacyPolicy"], c9s = ["supportUrl", "support", "bugs"], u9s = ["termsOfServiceUrl", "terms_of_service"], f9s = ["documentationUrl", "docs"], Jt = /* @__PURE__ */ new Set(["icon", "screenshots", "classification", ...w6o, ...c9s, ...u9s, ...f9s]);
var As = ["CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA", "CLAUDE_PROJECT_DIR"];
function Qt(e) {
  let s = [];
  for (let [o, r] of Object.entries(e)) for (let a of r ?? []) for (let p of a.hooks) {
    if (p.type !== "command" || p.args !== void 0 || p.shell === "powershell") continue;
    let f = _s(p.command);
    if (f.length > 0) s.push({ event: o, command: p.command, placeholders: f });
  }
  return s;
}
function _s(e) {
  let s = /* @__PURE__ */ new Set(), o = false, r = false;
  for (let a = 0; a < e.length; a++) {
    let p = e[a];
    if (!o && p === "\\") {
      a++;
      continue;
    }
    if (p === "'" && !r) {
      o = !o;
      continue;
    }
    if (p === '"' && !o) {
      r = !r;
      continue;
    }
    if (p !== "$" || o || r) continue;
    for (let f of As) {
      let y = e.startsWith(`{${f}}`, a + 1), g = e.startsWith(f, a + 1) && !/[A-Za-z0-9_]/.test(e.charAt(a + 1 + f.length));
      if (y || g) {
        s.add(`\${${f}}`);
        break;
      }
    }
  }
  return [...s];
}
var it = (e) => e.endsWith(import_path4.sep) ? e.slice(0, -import_path4.sep.length) : e;
var yZn = (e, s) => it((0, import_path3.resolve)(e)) === it((0, import_path3.resolve)(s));
function Ue(e, s, o) {
  let { source: r } = e;
  return typeof r === "string" && yZn((0, import_path2.resolve)(s, r), o);
}
function k6o(e, s, o) {
  return typeof e.source === "string" ? Ue(e, s, o.root) : e.name === o.name;
}
async function E6o(e) {
  try {
    let s = (0, import_chunk_xcgcdx61.eDr)().safeParse((0, import_chunk_w578pjby.te)((0, import_chunk_0jve1fep.Ys)(await (0, import_promises2.readFile)(e, { encoding: "utf-8" }))));
    return s.success ? s.data : void 0;
  } catch {
    return;
  }
}
var Xs = 32, Zs = 4096;
async function oe({ root: e, listed: s }, o, r) {
  let a = await (0, import_promises3.realpath)(e).catch(() => (0, import_path5.resolve)(e)), p = { files: [], folders: [] }, f = [{ dir: a, ahead: (0, import_chunk_z6pfqf6e.TJ)((0, import_path5.relative)(e, o)) }], y = 0, g, h = /* @__PURE__ */ new Set();
  for (let S = f.pop(); S !== void 0; S = f.pop()) {
    let { dir: k } = S, x = `${y}:${S.ahead.length}:${k}`;
    if (h.has(x)) continue;
    if (h.add(x).size > Zs) {
      p.unsure ??= { at: g ?? "", why: "link" };
      break;
    }
    let [E, ...A] = S.ahead;
    if (E === "..") {
      if (k !== a) f.push({ dir: (0, import_path5.dirname)(k), ahead: A });
      else if (g !== void 0) p.unsure ??= { at: g, why: "link" };
      continue;
    }
    if (!s.has(k)) s.set(k, await (0, import_promises3.readdir)(k, { withFileTypes: true }).then((j) => Map.groupBy(j, (I) => ue(I.name)), (j) => (0, import_chunk_jv7av99m.kn)(j) ? null : void 0));
    let _ = s.get(k), R = (0, import_path5.relative)(a, k);
    if (_ === void 0 && (E !== void 0 || p.clash)) {
      p.unsure ??= { at: R, why: "unlisted" };
      continue;
    }
    if (E === void 0) {
      p[_ === null ? "files" : "folders"].push(k);
      continue;
    }
    let b = (0, import_path5.join)(R, E), P = _?.get(ue(E)) ?? [], N = P.map((j) => j.name).filter((j) => j !== E).toSorted();
    if (N.length > 0) p.clash ??= { at: b, others: N };
    for (let j of P) {
      let I = (0, import_path5.join)(k, j.name), D = await (0, import_promises3.readlink)(I).catch(() => {
        return;
      });
      if (D === void 0 && !j.isSymbolicLink()) f.push({ dir: I, ahead: A });
      else if (D === void 0 || p.clash !== void 0 || r === "follow" && ((0, import_path5.isAbsolute)(D) || ++y > Xs)) p.unsure ??= { at: b, why: "link" };
      else if (r === "follow") {
        g = b;
        let H = (0, import_chunk_z6pfqf6e.TJ)(D).filter((V) => V !== ".");
        f.push({ dir: k, ahead: [...H, ...A] });
      }
    }
  }
  return p;
}
async function lt(e, s) {
  let o = /* @__PURE__ */ new Set([e]), r = [], a = (0, import_path5.basename)(s), p = (0, import_chunk_vfyns8ja.kTs)(s, a);
  try {
    let { real: f, source: y } = await (0, import_chunk_p9da7c9y.Glt)(e, s, a);
    await (0, import_chunk_vfyns8ja.sfn)({ file: e, source: y, root: s, real: f }, a, async (g, h, S) => {
      r.push(g);
      let k = (0, import_chunk_p9da7c9y.jAr)((0, import_chunk_p9da7c9y.GAr)(g, h)), x = k.length;
      try {
        let E = await p(g, h, S);
        return x = k.indexOf(E.file) + 1 || x, E;
      } finally {
        for (let E of k.slice(0, x)) o.add(E);
      }
    });
  } catch {
  }
  return { tried: [...o], specifiers: r };
}
function ue(e) {
  return (0, import_chunk_mgntjepj.Lp)((0, import_chunk_kx2fp6pc.BLr)(e));
}
var ct = 1e5, Ke = 50;
async function on(e, s = ct) {
  let o = [], r = [e], a = 0;
  for (let p = r.pop(); p !== void 0; p = r.pop()) {
    if (o.length >= Ke) return o.push({ kind: "stopped", path: p }), o;
    let f;
    try {
      f = await (0, import_promises4.readdir)(p, { withFileTypes: true });
    } catch (g) {
      if (p !== e || !(0, import_chunk_jv7av99m.J)(g)) o.push({ kind: "unreadable", path: p });
      continue;
    }
    let y = p === e ? f.filter((g) => (0, import_chunk_paa8n07f.WTt)(g.name)) : f;
    for (let g of y) {
      if (a >= s || o.length >= Ke) return o.push({ kind: "stopped", path: p }), o;
      a++;
      let h = (0, import_path6.join)(p, g.name);
      try {
        let S = (0, import_chunk_c203g5kd.Xxt)(g) ? await (0, import_promises4.lstat)(h) : g;
        if (S.isDirectory() && !await (0, import_chunk_c203g5kd.HB)(h)) r.push(h);
        else if (S.isDirectory() || S.isSymbolicLink()) o.push({ kind: "link", path: h });
        else if (!S.isFile()) o.push({ kind: "not-a-file-or-folder", path: h });
      } catch {
        o.push({ kind: "unreadable", path: h });
      }
    }
  }
  return o;
}
var ro = /* @__PURE__ */ new Set(["category", "source", "tags", "strict", "id", "relevance", "headers", "headersHelper"]), un = /* @__PURE__ */ new Map([["publisher", "a VS Code/Cursor extension manifest"], ["categories", "a VS Code/Cursor extension manifest"], ["icon", "a VS Code/Cursor extension manifest"], ["contributes", "a VS Code/Cursor extension manifest"], ["activationEvents", "a VS Code/Cursor extension manifest"], ["preview", "a VS Code/Cursor extension manifest"], ["main", "an npm package.json"], ["type", "an npm package.json"], ["files", "an npm package.json"], ["bin", "an npm package.json"], ["scripts", "an npm package.json"], ["private", "an npm package.json"], ["bugs", "an npm package.json"], ["contributors", "an npm package.json"], ["dxt_version", "an MCPB/DXT manifest"], ["mcpb_version", "an MCPB/DXT manifest"], ["user_config", "an MCPB/DXT manifest"], ["compatibility", "an MCPB/DXT manifest"], ["server", "an MCP server manifest"], ["tools", "an MCP server manifest"], ["prompts", "an MCP server manifest"], ["resources", "an MCP server manifest"], ["logo", "manifests across many tools"], ["readme", "manifests across many tools"], ["changelog", "manifests across many tools"], ["support", "manifests across many tools"], ["privacy_policy", "manifests across many tools"], ["privacy_policies", "manifests across many tools"], ["terms_of_service", "manifests across many tools"], ["_comment", "manifests across many tools"], ["$id", "a JSON Schema document"], ["$comment", "a JSON Schema document"]]), ao = /* @__PURE__ */ new Map([["user_config", "userConfig"]]), fn = /* @__PURE__ */ new Set(["themes", "monitors", "outputStyles", "evals", "syntaxHighlighting"]), io = new Set(import_chunk_bzyb60p0.hZr.map(import_chunk_mgntjepj.vg));
function ePa(e, s) {
  let o = e.every((a) => a.success), r = e.some((a) => a.warnings.length > 0);
  return { noErrors: o, hasWarnings: r, allSuccess: s.strict ? o && !r : o };
}
function ae(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Ve(e) {
  return ue(v.basename(e)) === import_chunk_zcpqgt0x.Akt;
}
function lo(e) {
  let s = v.basename(e);
  if (s === "plugin.json") return "plugin";
  if (s === "marketplace.json") return "marketplace";
  if (Ve(v.dirname(e))) return "plugin";
  return "unknown";
}
function Fe(e) {
  return e.issues.map((s) => ({ path: s.path.join(".") || "root", message: s.message, code: s.code }));
}
function co(e, s) {
  if (un.has(e)) return;
  let o = e.length <= 3 ? 1 : 2, r = e.toLowerCase(), a, p = o + 1;
  for (let f of s) {
    if (Math.abs(f.length - e.length) > o) continue;
    if (f.toLowerCase() === r) return f;
    let y = (0, import_chunk_xcgcdx61.CK)(e, f, o);
    if (y < p) p = y, a = f;
  }
  return a;
}
function po(e, s, o) {
  if (o?.has(e)) return `Field '${e}' belongs in the marketplace entry (marketplace.json), not plugin.json. It's harmless here but unused \u2014 Claude Code ignores it at load time.`;
  let r = co(e, s);
  if (r) return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let a = ao.get(e);
  if (a && s.has(a)) return `Field '${e}' is the cross-tool spelling of Claude Code's '${a}'. Rename it to '${a}' for Claude Code to read it (the option shapes differ slightly \u2014 re-run validate after renaming to check). As-is, Claude Code ignores it at load time.`;
  let p = un.get(e);
  if (p) return `Unknown field '${e}' (commonly seen in ${p}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function fe(e, s, o, r, a, p) {
  for (let f of Object.keys(e)) {
    if (s.has(f) || p?.has(f)) continue;
    r.push({ path: o ? `${o}.${f}` : f, message: po(f, s, a) });
  }
}
function mn(e, s, o, r) {
  if (e !== void 0 && !(0, import_chunk_ma3kja9f.T)(e)) {
    r.push({ path: s, message: `'engines' must be an object such as { "claude-code": ">=2.1.0" }; got ${ae(e)}. It will be ignored at load time.` });
    return;
  }
  let a = (0, import_chunk_bzyb60p0.HTe)(e);
  if (a !== void 0 && !(0, import_chunk_bzyb60p0.vli)(a)) o.push({ path: `${s}.claude-code`, message: `Must be a version range such as ">=2.1.0"; got ${typeof a === "string" ? `"${Gf(a, 100)}"` : ae(a)}. It will be ignored at load time.` });
}
function qe(e, s, o, r) {
  if (e === void 0) return;
  if (Ze(r)) {
    o.push({ path: s, message: "'network' is read on stdio servers only; a remote server's host is read from its url. It will be ignored at load time." });
    return;
  }
  if (!(0, import_chunk_ma3kja9f.T)(e) || !Array.isArray(e.hosts)) {
    o.push({ path: s, message: `'network' must be an object with a list of hosts, such as { "hosts": ["api.example.com"] }. It will be ignored at load time.` });
    return;
  }
  if (fe(e, /* @__PURE__ */ new Set(["hosts"]), s, o), e.hosts.slice(0, import_chunk_xcgcdx61.JMo).forEach((a, p) => {
    if ((0, import_chunk_bzyb60p0.fli)(a) === void 0) o.push({ path: `${s}.hosts[${p}]`, message: 'Must be a host as sandbox.network.allowedDomains takes it, in plain ASCII and its usual spelling, with no scheme or path: "api.example.com", "*.example.com", "10.0.0.1", "[::1]" or "localhost", each with an optional ":port". It will be ignored at load time.' });
  }), e.hosts.length > import_chunk_xcgcdx61.JMo) o.push({ path: `${s}.hosts`, message: `Only the first ${import_chunk_xcgcdx61.JMo} entries are read. The rest will be ignored at load time.` });
}
function He(e) {
  let s = e.replace(/^[a-zA-Z]:/, "");
  return (0, import_chunk_z6pfqf6e.pg)(s) || (0, import_chunk_z6pfqf6e.Cpt)(s);
}
function ft(e, s, o, r) {
  if (He(e)) o.push({ path: s, message: r ? `Path contains "..": ${e}. ${r}` : `Path contains ".." which could be a path traversal attempt: ${e}` });
}
function uo(e) {
  let s = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${s !== e ? `./${s}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function SZn(e, s = { kind: "alone" }) {
  return ke(await fo(e, s));
}
async function fo(e, s) {
  let o = v.resolve(e), r;
  try {
    r = await (0, import_promises.readFile)(o, { encoding: "utf-8" });
  } catch (a) {
    let p = (0, import_chunk_jv7av99m.w)(a), f;
    if (p === "ENOENT") f = `File not found: ${o}`;
    else if (p === "EISDIR") f = `Path is not a file: ${o}`;
    else f = `Failed to read file: ${(0, import_chunk_jv7av99m.d)(a)}`;
    return { success: false, errors: [{ path: "file", message: f, code: p }], warnings: [], filePath: o, fileType: "plugin" };
  }
  return hn(o, r, s);
}
async function hn(e, s, o) {
  let r = [], a = [], p = [], f;
  try {
    f = (0, import_chunk_w578pjby.te)((0, import_chunk_0jve1fep.Ys)(s));
  } catch (h) {
    return { success: false, errors: [{ path: "json", message: `Invalid JSON syntax: ${(0, import_chunk_jv7av99m.d)(h)}` }], warnings: [], filePath: e, fileType: "plugin" };
  }
  let y = (0, import_chunk_bzyb60p0.LMe)(f, "plugin-json", { pluginName: v.basename(v.dirname(v.dirname(e))), manifestPath: e });
  if (!y.ok) r.push(...y.errors.map((h) => ({ ...h, path: h.path || "root" })));
  else r.push(...y.displayNotes), a.push(...y.hookNotes.map((h) => ({ path: "hooks", message: `${h} at runtime` })));
  if (f && typeof f === "object") {
    let h = y.rawCandidate ?? f, S = v.dirname(e), k = Ve(S) ? v.dirname(S) : S, x = async (E, A, _ = "The runtime loader will report this as a load failure.") => {
      if (ft(E, A, r), He(E) || v.isAbsolute(E) || /^[a-zA-Z]:/.test(E)) return;
      try {
        return await (0, import_promises.stat)(v.resolve(k, E));
      } catch (R) {
        let b = (0, import_chunk_jv7av99m.w)(R);
        r.push({ path: A, message: `Path not found: ${E}${b && b !== "ENOENT" ? ` (${b})` : ""}. ${_}` });
        return;
      }
    };
    for (let { spec: E, field: A, relPath: _ } of Zt(h)) {
      if ((0, import_chunk_paa8n07f.g7e)(k, v.resolve(k, _))) {
        r.push({ path: A, message: `Path not loaded: ${_}: ${import_chunk_paa8n07f.SX}` });
        continue;
      }
      let R = await x(_, A, E.missingConsequence?.(_));
      if (R === void 0) continue;
      if (E.key === "skills" && !R.isDirectory()) {
        let b = v.dirname(_), P = v.basename(_).toLowerCase() === "skill.md" ? b === "." ? " \u2014 point to the plugin root '.' instead" : ` \u2014 point to the parent directory '${b}' instead` : "";
        r.push({ path: A, message: `Path is a file; skills entries must be directories containing SKILL.md${P}: ${_}` });
      }
      if (E.jsonFile && _.endsWith(".json") && R.isDirectory()) r.push({ path: A, message: `Path is a directory; ${E.key} must point to a JSON file: ${_}` });
      if (E.key === "types") {
        let b = an(await Be(_, k, v.basename(k)), { relPath: _, field: A });
        r.push(...b.errors), p.push(...b.notes);
      }
    }
    if (h.types === void 0) {
      let E = await Be(void 0, k, v.basename(k));
      if (E?.kind === "read") p.push(...an(E, { relPath: import_chunk_bzyb60p0.DIn, field: "types" }).notes);
    }
    if (h.mcpServers !== void 0) {
      let E = Array.isArray(h.mcpServers) ? h.mcpServers : [h.mcpServers], A;
      for (let [_, R] of E.entries()) {
        let b = Array.isArray(h.mcpServers) ? `mcpServers[${_}]` : "mcpServers";
        if ((0, import_chunk_ma3kja9f.T)(R)) {
          A ??= await Io(h, e);
          for (let [P, N] of Object.entries(R)) {
            let j = Tn(`${b}.${Gf(P, 64)}`, N, A(P));
            r.push(...j.errors), a.push(...j.warnings);
          }
        }
      }
    }
  }
  if ((0, import_chunk_ma3kja9f.T)(f)) {
    let h = f, S = y.rawCandidate ?? h;
    if (fe(S, new Set(Object.keys((0, import_chunk_xcgcdx61.t6e)().shape)), "", a, ro, Jt), "capabilities" in S) {
      let k = a.findIndex((E) => E.path === "capabilities"), x = { path: "capabilities", message: "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field." };
      if (k === -1) a.push(x);
      else a[k] = x;
    }
    for (let k of at) if (k in h) a.push({ path: k, message: `'${k}' is an experimental component; declare it under 'experimental.${k}' instead of at the top level. Top-level still loads for now but will be removed in a future release.` });
    if ("experimental" in h) if ((0, import_chunk_ma3kja9f.T)(h.experimental)) {
      let k = h.experimental;
      fe(k, fn, "experimental", a);
    } else a.push({ path: "experimental", message: `'experimental' must be an object containing component declarations; got ${ae(h.experimental)}. It will be ignored at load time.` });
    if ("metadata" in S && !(0, import_chunk_ma3kja9f.T)(S.metadata)) a.push({ path: "metadata", message: `'metadata' must be a free-form object; got ${ae(S.metadata)}. It will be ignored at load time.` });
    if (mn(S.engines, "engines", r, a), qe(S.network, "network", a), "binaries" in h) if ((0, import_chunk_ma3kja9f.T)(h.binaries)) {
      let k = (0, import_chunk_xcgcdx61.oqn)(h.binaries) ?? {}, x = 0;
      for (let [A, _] of Object.entries(h.binaries)) {
        if (import_chunk_xcgcdx61.Wgn.test(A) && typeof _ === "object" && _ !== null && typeof _.sha256 === "string" && import_chunk_xcgcdx61.xZi.test(_.sha256)) {
          x++;
          continue;
        }
        if (!Object.hasOwn(k, A)) a.push({ path: `binaries.${A}`, message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String(import_chunk_xcgcdx61.Wgn)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.` });
      }
      if (x > import_chunk_xcgcdx61.KHs) a.push({ path: "binaries", message: `${x} valid binaries entries declared, but the install hook processes at most ${import_chunk_xcgcdx61.KHs}; the rest are dropped entirely.` });
      let E = Object.keys(k).length;
      if (E > import_chunk_xcgcdx61.rqn) a.push({ path: "binaries", message: `${E} valid binaries entries declared, but only the first ${import_chunk_xcgcdx61.rqn} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.` });
    } else a.push({ path: "binaries", message: `'binaries' must be an object mapping basenames to { sha256 }; got ${ae(h.binaries)}. It will be ignored at install time.` });
  }
  let g = y.ok && y.displayNotes.length > 0 ? void 0 : y.manifest;
  if (g) {
    let h = g;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(h.name)) {
      let x = "Claude Code accepts it, but the";
      if (import_chunk_xcgcdx61.iqn.test(h.name)) x = "Claude Code refuses a plugin with this name when it is loaded by path (such as --plugin-dir), and cannot install it from a marketplace that lists it under this name. The";
      else if (!(0, import_chunk_xcgcdx61._3)(h.name)) x = "Claude Code cannot install it from a marketplace that lists it under this name, and the";
      a.push({ path: "name", message: `Plugin name "${h.name}" is not kebab-case. ${x} Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").` + Le(h.name) });
    }
    let k = o.kind === "alone" || o.kind === "entry" && o.entryName !== h.name ? (0, import_chunk_dy7yfx4p.lHt)(h.name) : void 0;
    if (k) (k.severity === "error" ? r : a).push({ path: "name", message: o.kind === "alone" ? `${k.message} ${import_chunk_dy7yfx4p.tPa}` : k.message });
    if (!h.version) a.push({ path: "version", message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")' });
    if (p.push(...gn(h.settings).map((x) => `settings.${x}`)), !h.description) a.push({ path: "description", message: "No description provided. Adding a description helps users understand what your plugin does" });
    if (!h.author) a.push({ path: "author", message: "No author information provided. Consider adding author details for plugin attribution" });
  }
  return { success: r.length === 0, errors: r, warnings: a, filePath: e, fileType: "plugin", ...p.length > 0 && { notes: p } };
}
var rn = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/, mo = /* @__PURE__ */ new Set(["org", "org-provisioned", "unknown"]);
function gn(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return [];
  return [...e.agent === void 0 ? [] : [`agent: ${import_chunk_mgntjepj.lCs} Tell people to set \`agent\` in their own settings or pass --agent.`], ...e.subagentStatusLine === void 0 ? [] : [`${import_chunk_mgntjepj.G2n}.`]];
}
var Xe = "UNRECORDABLE_NAME", v6o = 'Each part of a plugin id (plugin@marketplace) may use only the letters a-z and A-Z, digits, ".", "_" and "-", and must start with a letter or digit.';
function Le(e) {
  return Gf(e, e.length) === e ? "" : " The name holds a character that is not shown here.";
}
async function dt(e) {
  return ke(await ho(e));
}
async function ho(e) {
  let s = [], o = [], r = v.resolve(e), a;
  try {
    a = await (0, import_promises.readFile)(r, { encoding: "utf-8" });
  } catch (b) {
    let P = (0, import_chunk_jv7av99m.w)(b), N;
    if (P === "ENOENT") N = `File not found: ${r}`;
    else if (P === "EISDIR") N = `Path is not a file: ${r}`;
    else N = `Failed to read file: ${(0, import_chunk_jv7av99m.d)(b)}`;
    return { success: false, errors: [{ path: "file", message: N, code: P }], warnings: [], filePath: r, fileType: "marketplace" };
  }
  let p;
  try {
    p = (0, import_chunk_w578pjby.te)((0, import_chunk_0jve1fep.Ys)(a));
  } catch (b) {
    return { success: false, errors: [{ path: "json", message: `Invalid JSON syntax: ${(0, import_chunk_jv7av99m.d)(b)}` }], warnings: [], filePath: r, fileType: "marketplace" };
  }
  let f = [], y = (0, import_chunk_ma3kja9f.T)(p) && (0, import_chunk_ma3kja9f.T)(p.metadata) ? p.metadata.pluginRoot : void 0, g = (0, import_chunk_xcgcdx61.MZi)(y), h = (0, import_chunk_ma3kja9f.T)(p) && typeof p.name === "string" && (0, import_chunk_xcgcdx61.YHr)(p.name);
  if (p && typeof p === "object") {
    let b = p;
    if (Array.isArray(b.plugins)) f = b.plugins, b.plugins.forEach((P, N) => {
      if (P && typeof P === "object" && "source" in P) {
        let j = P.source;
        if (typeof j === "string") ft(j, `plugins[${N}].source`, s, uo(j));
        if ((0, import_chunk_xcgcdx61.rDs)(j) && g === void 0) s.push({ path: `plugins[${N}].source`, message: y === void 0 ? `Bare source name "${j}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.` : typeof y === "string" ? `Bare source name "${j}" cannot resolve: metadata.pluginRoot ("${y}") must be a relative path inside the marketplace (e.g. "./plugins").` : `Bare source name "${j}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").` });
        if (j && typeof j === "object" && "path" in j && typeof j.path === "string") ft(j.path, `plugins[${N}].source.path`, s);
      }
    });
  }
  let S = (0, import_chunk_xcgcdx61.tDs)().extend({ topic: (0, import_chunk_adx6804h.n)().min(1).max(64).optional(), signals: (0, import_chunk_xcgcdx61.eDs)().extend({ cli: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(64)).max(10).optional(), hosts: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(128).refine((b) => /^[a-z0-9.-]+$/.test(b), "must be a lowercase bare hostname (no scheme, port, or path)")).max(20).optional(), filesRead: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(256).refine((b) => !b.includes("\\"), 'must use forward slashes (e.g. "**/*.tf"), not backslashes')).max(10).optional(), manifestDeps: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ file: (0, import_chunk_adx6804h.n)().min(1).max(256).refine(import_chunk_xcgcdx61.ZMo, "must be a valid regular expression"), pattern: (0, import_chunk_adx6804h.n)().min(1).max(256).refine(import_chunk_xcgcdx61.ZMo, "must be a valid regular expression") })).min(1).max(10).optional(), cwd: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(256).refine((b) => !b.includes("\\"), 'must use forward slashes (e.g. "Engine/Source/**"), not backslashes')).max(10).optional() }).refine((b) => (b.cli?.length ?? 0) > 0 || (b.hosts?.length ?? 0) > 0 || (b.filesRead?.length ?? 0) > 0 || (b.manifestDeps?.length ?? 0) > 0 || (b.cwd?.length ?? 0) > 0, "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)") }).optional(), k = (0, import_chunk_xcgcdx61.rHo)().extend({ relevance: (0, import_chunk_adx6804h.bi)((b) => (0, import_chunk_ma3kja9f.T)(b) ? b : void 0, S) }).refine((b) => typeof b.source === "string" || b.source.source !== "unsupported", { message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored" }), E = (0, import_chunk_xcgcdx61.Wut)().extend({ plugins: (0, import_chunk_adx6804h.C)(k), renames: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)().nullable()).optional() }).safeParse((0, import_chunk_xcgcdx61.sqn)(p));
  if (!E.success) s.push(...Fe(E.error));
  if (E.success && E.data.renames) {
    let b = new Set(E.data.plugins.map((P) => P.name));
    for (let P of Object.keys(E.data.renames)) {
      let N = (0, import_chunk_bzyb60p0.ySt)(P, E.data.renames, b);
      if (N?.kind === "unresolved") s.push({ path: `renames.${P}`, message: `chain does not resolve (${N.reason}) \u2014 target must be a name in plugins[], a key in renames, or null` });
      else if (N?.kind === "renamed" && !(0, import_chunk_xcgcdx61.pL)().safeParse(`${N.to}@placeholder`).success) s.push({ path: `renames.${P}`, message: `target "${N.to}" is not a valid plugin name (PluginIdSchema)` });
    }
  }
  if ((0, import_chunk_ma3kja9f.T)(p)) {
    let b = p;
    if (fe(b, new Set(Object.keys((0, import_chunk_xcgcdx61.Wut)().shape)), "", o), typeof b.name === "string" && b.name) {
      let N = (0, import_chunk_xcgcdx61._3)(b.name);
      if (!N) s.push({ path: "name", code: Xe, message: `Claude Code cannot install plugins from marketplace "${Gf(b.name, 64)}". ${v6o} Change the marketplace's "name".` + Le(b.name) });
      if (mo.has(b.name.toLowerCase())) o.push({ path: "name", message: `Marketplace name "${b.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.` });
      else if (!rn.test(b.name)) o.push({ path: "name", message: `Marketplace name "${b.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (N ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace." + Le(b.name) });
    }
    let P = b.metadata;
    if ((0, import_chunk_ma3kja9f.T)(P)) fe(P, new Set(Object.keys((0, import_chunk_xcgcdx61.Wut)().shape.metadata.unwrap().shape)), "metadata", o);
    if (Array.isArray(b.plugins)) {
      let N = new Set(Object.keys((0, import_chunk_xcgcdx61.rHo)().shape)), j = new Set(Object.keys((0, import_chunk_xcgcdx61.tDs)().shape)), I = new Set(Object.keys((0, import_chunk_xcgcdx61.eDs)().shape));
      b.plugins.forEach((D, H) => {
        if (!(0, import_chunk_ma3kja9f.T)(D)) return;
        let V = D;
        if (fe(V, N, `plugins[${H}]`, o), typeof V.name === "string" && V.name) {
          let L = (0, import_chunk_xcgcdx61._3)(V.name);
          if (!L) s.push({ path: `plugins[${H}].name`, code: Xe, message: `Claude Code cannot install plugin "${Gf(V.name, 64)}". ${v6o} Change this entry's "name".` + Le(V.name) });
          if (!rn.test(V.name)) o.push({ path: `plugins[${H}].name`, message: `Plugin name "${V.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (L ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry." + Le(V.name) });
          let q = h ? void 0 : (0, import_chunk_dy7yfx4p.lHt)(V.name);
          if (q) (q.severity === "error" ? s : o).push({ path: `plugins[${H}].name`, message: q.message });
        }
        let K = V.experimental;
        if ((0, import_chunk_ma3kja9f.T)(K)) fe(K, fn, `plugins[${H}].experimental`, o);
        else if (K !== void 0) o.push({ path: `plugins[${H}].experimental`, message: `'experimental' must be an object containing component declarations; got ${ae(K)}. It will be ignored at load time.` });
        let Y = V.relevance;
        if ((0, import_chunk_ma3kja9f.T)(Y)) {
          fe(Y, j, `plugins[${H}].relevance`, o);
          let L = Y.signals;
          if ((0, import_chunk_ma3kja9f.T)(L)) fe(L, I, `plugins[${H}].relevance.signals`, o);
        } else if (Y !== void 0) o.push({ path: `plugins[${H}].relevance`, message: `'relevance' must be an object containing topic and signals; got ${ae(Y)}. It will be ignored at load time.` });
        let ee = V.metadata;
        if (ee !== void 0 && !(0, import_chunk_ma3kja9f.T)(ee)) o.push({ path: `plugins[${H}].metadata`, message: `'metadata' must be a free-form object; got ${ae(ee)}. It will be ignored at load time.` });
        mn(V.engines, `plugins[${H}].engines`, s, o), qe(V.network, `plugins[${H}].network`, o);
        for (let [L, q] of [V.mcpServers].flat().entries()) {
          let G = Array.isArray(V.mcpServers) ? `mcpServers[${L}]` : "mcpServers";
          for (let [ne, me] of Object.entries((0, import_chunk_ma3kja9f.T)(q) ? q : {})) if ((0, import_chunk_ma3kja9f.T)(me)) qe(me.network, `plugins[${H}].${G}.${Gf(ne, 64)}.network`, o, me.type);
        }
      });
    }
  }
  if (E.success) {
    let b = E.data;
    if (!b.plugins || b.plugins.length === 0) o.push({ path: "plugins", message: "Marketplace has no plugins defined" });
    if (b.plugins) b.plugins.forEach((P, N) => {
      if (b.plugins.filter((D) => D.name === P.name).length > 1) s.push({ path: `plugins[${N}].name`, message: `Duplicate plugin name "${P.name}" found in marketplace` });
      let I = typeof P.source === "object" && P.source.source === "archive";
      if (I && (0, import_chunk_zddv3vvj.wit)(P) && P.strict !== false) s.push({ path: `plugins[${N}].headersHelper`, message: `Plugin "${(0, import_chunk_xcgcdx61.dh)(P.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.` });
      if ((P.headers !== void 0 || (0, import_chunk_zddv3vvj.wit)(P)) && !I) o.push({ path: `plugins[${N}].${(0, import_chunk_zddv3vvj.wit)(P) ? "headersHelper" : "headers"}`, message: `Plugin "${(0, import_chunk_xcgcdx61.dh)(P.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.` });
      else if ((0, import_chunk_zddv3vvj.wit)(P) && typeof P.source === "object" && P.source.source === "archive" && !P.source.sha256) o.push({ path: `plugins[${N}].source.sha256`, message: `Plugin "${(0, import_chunk_xcgcdx61.dh)(P.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).` });
      for (let D of I ? Object.keys(P.headers ?? {}) : []) if ((0, import_chunk_zddv3vvj.oHi)(D)) o.push({ path: `plugins[${N}].headers.${(0, import_chunk_xcgcdx61.dh)(D)}`, message: `Header "${(0, import_chunk_xcgcdx61.dh)(D)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.` });
    });
    if (!b.description && !b.metadata?.description) o.push({ path: "description", message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers" });
  }
  let A = (0, import_chunk_xcgcdx61.rHo)(), _ = v.dirname(r), R = Ve(_) ? v.dirname(_) : _;
  for (let [b, P] of f.entries()) {
    let N = A.safeParse((0, import_chunk_xcgcdx61.HZi)(P, g));
    if (!N.success) continue;
    let j = N.data, I = j.source;
    if (!(0, import_chunk_xcgcdx61.qRt)(I) || He(I)) continue;
    let D = v.join(R, I), H = v.join(D, ".claude-plugin", "plugin.json");
    if (await (0, import_chunk_nb21njpa.DP)(R, D) === "ok") s.push(...await yn(D, R, `plugins[${b}].source`));
    let V = v.relative(R, H), K = await (0, import_chunk_nb21njpa.DP)(R, v.join(D, ".claude-plugin"));
    if (K === "not-a-directory") {
      s.push({ path: `plugins[${b}] plugin.json \u2192 file`, code: "ENOTDIR", message: `A path component of ${V} is not a directory, so the file cannot be read. The entry will fail to load at install time.` });
      continue;
    }
    if (K === "refused") {
      o.push({ path: `plugins[${b}].source`, message: `Local source "${I}" is or traverses a symlink, so ${V} was not read \u2014 validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately.` });
      continue;
    }
    if (K !== "ok") continue;
    let Y;
    try {
      Y = await (0, import_chunk_nb21njpa.$5)(H);
    } catch (G) {
      s.push({ path: `plugins[${b}] plugin.json \u2192 file`, message: `Failed to read ${V}: ${(0, import_chunk_jv7av99m.d)(G)}` });
      continue;
    }
    if (Y.kind === "refused" || Y.kind === "too-large") {
      o.push({ path: `plugins[${b}].source`, message: `${V} ${Y.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${import_chunk_xcgcdx61.aF} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.` });
      continue;
    }
    if (Y.kind === "absent") continue;
    let ee = Y.content;
    if (j.version) {
      let G;
      try {
        let ne = (0, import_chunk_w578pjby.te)((0, import_chunk_0jve1fep.Ys)(ee));
        if (typeof ne.version === "string") G = ne.version;
      } catch (ne) {
        o.push({ path: `plugins[${b}].source`, message: `Could not parse ${v.relative(R, H)} for version cross-check: ${(0, import_chunk_jv7av99m.d)(ne)}` });
      }
      if (G && G !== j.version) {
        let ne = v.relative(R, H);
        o.push({ path: `plugins[${b}].version`, message: `Entry declares version "${j.version}" but ${ne} says "${G}". At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. Update this entry to "${G}" to match.` });
      }
    }
    let L = ke(await hn(H, ee, h ? { kind: "anthropic" } : { kind: "entry", entryName: j.name })), q = `plugins[${b}] plugin.json \u2192 `;
    for (let G of L.errors) s.push({ ...G, path: q + G.path });
    for (let G of L.warnings) o.push({ ...G, path: q + G.path });
  }
  return { success: s.length === 0, errors: s, warnings: o, filePath: r, fileType: "marketplace" };
}
async function yn(e, s, o) {
  return (await on(e)).map((f) => {
    let y = Gf(v.relative(s, f.path) || ".", 200);
    switch (f.kind) {
      case "link":
        return { path: o, message: `${y} is a link. Claude Code may unpack the plugin's MCP bundles through it and write outside the plugin. Delete it.` };
      case "not-a-file-or-folder":
        return { path: o, message: `${y} is neither a regular file nor a folder. Claude Code may unpack the plugin's MCP bundles through it and write outside the plugin. Delete it.` };
      case "unreadable":
        return { path: o, message: `${y} could not be read, so it was not checked for a link at ${import_chunk_paa8n07f.h7e} or inside it. Claude Code may unpack the plugin's MCP bundles through a link there and write outside the plugin. Make it readable, or delete ${import_chunk_paa8n07f.h7e}.` };
      case "stopped":
        return { path: o, message: `The check of ${import_chunk_paa8n07f.h7e} stopped at ${y}: it looks at ${ct} entries and lists ${Ke} problems at most, so the rest was not checked. Claude Code may unpack the plugin's MCP bundles through a link there and write outside the plugin. Delete ${import_chunk_paa8n07f.h7e}; Claude Code unpacks what it needs again.` };
    }
  });
}
async function mt(e) {
  let s = await yn(e, e, import_chunk_paa8n07f.h7e);
  return s.length === 0 ? [] : [{ success: false, errors: s, warnings: [], filePath: v.join(e, import_chunk_paa8n07f.h7e), fileType: "plugin" }];
}
var bZn = 200;
function Gf(e, s) {
  return (0, import_chunk_7cfjrnwy.Wr)((0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Og)(e), s));
}
function ke(e) {
  return { ...e, errors: e.errors.map((s) => ({ ...s, path: Gf(s.path, 200), message: Gf(s.message, 1e3) })), warnings: e.warnings.map((s) => ({ path: Gf(s.path, 200), message: Gf(s.message, 1e3) })), ...e.notes !== void 0 && { notes: e.notes.map((s) => Gf(s, 1e3)) }, ...e.gatingHooks !== void 0 && { gatingHooks: e.gatingHooks.map((s) => ({ ...s, hook: Gf(s.hook, 1e3) })) } };
}
function go(e, s, o, r) {
  let a = [], p = [], f = r === "project" && o === "agent", y = (0, import_chunk_0jve1fep.Ys)(s).match(import_chunk_p1ewvgeh.VH);
  if (!y) {
    if (!f) p.push({ path: "frontmatter", message: "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata." });
    return { success: true, errors: a, warnings: p, filePath: e, fileType: o };
  }
  let g = (0, import_chunk_p1ewvgeh.sEr)(y[1] || "");
  if (!g.ok) {
    let x = o !== "agent" ? `At runtime this ${o} loads with empty metadata (all frontmatter fields silently dropped).` : r === "project" ? "At runtime this agent does not load at all \u2014 with no frontmatter name it is treated as a co-located reference document and skipped." : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
    return a.push({ path: "frontmatter", message: `YAML frontmatter failed to parse: ${Gf(g.error, 200)}. ` + x }), { success: false, errors: a, warnings: p, filePath: e, fileType: o };
  }
  let h = g.value;
  if (h !== null && !(0, import_chunk_ma3kja9f.T)(h)) return a.push({ path: "frontmatter", message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(h) ? "an array" : typeof h}.` }), { success: false, errors: a, warnings: p, filePath: e, fileType: o };
  let S = h ?? {};
  if (S.description !== void 0) {
    let x = S.description;
    if (typeof x !== "string" && typeof x !== "number" && typeof x !== "boolean" && x !== null) a.push({ path: "description", message: `description must be a string, got ${Array.isArray(x) ? "array" : typeof x}. At runtime this value is dropped.` });
  } else if (!f || typeof S.name === "string") p.push({ path: "description", message: `No description in frontmatter. A description helps users and Claude understand when to use this ${o}.` });
  if (S.name !== void 0 && S.name !== null && typeof S.name !== "string") a.push({ path: "name", message: `name must be a string, got ${typeof S.name}.` });
  let k = S["allowed-tools"];
  if (k !== void 0 && k !== null) {
    if (typeof k !== "string" && !Array.isArray(k)) a.push({ path: "allowed-tools", message: `allowed-tools must be a string or array of strings, got ${typeof k}.` });
    else if (Array.isArray(k) && k.some((x) => typeof x !== "string")) a.push({ path: "allowed-tools", message: "allowed-tools array must contain only strings." });
  }
  if (o === "skill" || o === "command") {
    let x = false;
    ((A) => {
      if (A == null || (0, import_chunk_ma3kja9f.T)(A)) return;
      x = true, p.push({ path: "metadata", message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(A) ? "array" : typeof A}. It is dropped at load time.` });
    })(S.metadata);
  }
  if (o === "skill" || o === "command") {
    let x = S.shell;
    if (x !== void 0 && x !== null) if (typeof x !== "string") a.push({ path: "shell", message: `shell must be a string, got ${typeof x}.` });
    else {
      let E = x.trim().toLowerCase();
      if (E !== "bash" && E !== "powershell") a.push({ path: "shell", message: `shell must be 'bash' or 'powershell', got '${Gf(x, 64)}'.` });
    }
  }
  return { success: a.length === 0, errors: a, warnings: p, filePath: e, fileType: o };
}
var yo = 200;
function re(e, s) {
  return s.map((o) => `${Gf(e, 200)} ${o}`);
}
function ko(e) {
  let s = `wasm ${Gf(e.path, 200)}`, o = e.imports.map((a) => `${Gf(`${a.module}.${a.name}`, 200)} (${a.kind})`), r = e.exports.map((a) => `${Gf(a.name, 200)} (${a.kind})`);
  return [`${s}: ${e.size} bytes, sha256 ${e.sha256}`, ...(0, import_chunk_bzyb60p0.Que)(`${s} imports`, o.length === 0 ? ["nothing"] : o), ...(0, import_chunk_bzyb60p0.Que)(`${s} exports`, r.length === 0 ? ["nothing"] : r)];
}
function wo({ file: e, line: s, excerpt: o, part: r }, a) {
  let p = Gf(v.relative(a, e) || e, 300), f = s === void 0 ? "" : o === void 0 ? `:${s}` : `, compiled line ${s} \`${Gf(o, 300)}\``;
  return `${p}${f}: this engine.create hook is outside its form: ${Gf(r, 300)}. Spell it one way: on('engine.create', async ($, e, next) => { const { fs, process, ...beneath } = await next(e); /* any statements that don't return */ return { ...beneath, voice: voiceOf() } }). Validate lists what a hook in this form does if it registers and doesn't throw. It can't say what this module adds to or withholds from $.`;
}
async function bo(e, s, o, r, a) {
  let p = { result: { success: true, errors: [], warnings: [], filePath: e, fileType: "hooks" }, modules: [] }, f = (L) => ({ result: { ...pe(e, "hooks", `${L} \u2014 hooks are read without following symlinks and are capped at ${import_chunk_xcgcdx61.aF} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`), modules: null }, modules: [] }), y = v.dirname(e), g = await (0, import_chunk_nb21njpa.DP)(s, y);
  if (g === "refused") return f("The hooks directory is a link (a symlink or a Windows junction) and was not read");
  if (g !== "ok") return p;
  let h;
  try {
    h = await (0, import_chunk_nb21njpa.$5)(e);
  } catch (L) {
    return { result: { success: false, errors: [{ path: "file", message: `Failed to read file: ${(0, import_chunk_jv7av99m.d)(L)}` }], warnings: [], filePath: e, fileType: "hooks", modules: null }, modules: [] };
  }
  if (h.kind === "refused") return f("hooks.json is not a regular file (a symlink, a FIFO, a directory)");
  if (h.kind === "too-large") return f("hooks.json is past the size cap and was not read");
  if (h.kind === "absent") return p;
  let S = h.content, k;
  try {
    k = (0, import_chunk_w578pjby.te)(S);
  } catch (L) {
    return { result: { success: false, errors: [{ path: "json", message: `Invalid JSON syntax: ${(0, import_chunk_jv7av99m.d)(L)}. At runtime this breaks the entire plugin load.` }], warnings: [], filePath: e, fileType: "hooks", modules: null }, modules: [] };
  }
  if ((0, import_chunk_xcgcdx61.dge)(k, import_chunk_xcgcdx61.YMo) || (0, import_chunk_xcgcdx61.NFe)(k)) return { result: { success: false, errors: [{ path: "hooks", message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${import_chunk_xcgcdx61.JR}` }], warnings: [], filePath: e, fileType: "hooks", modules: null }, modules: [] };
  let x = k && typeof k === "object" && "hooks" in k ? (0, import_chunk_xcgcdx61.e6e)(k.hooks) : { notes: [], unloadableGuards: [] }, E = x.notes.map((L) => ({ path: "hooks", message: `${L} at runtime` }));
  if (x.unloadableGuards.length > 0) return { result: { success: false, errors: x.unloadableGuards.map((L) => ({ path: "hooks", message: `${L} \u2014 ${import_chunk_xcgcdx61.JR}` })), warnings: E, filePath: e, fileType: "hooks", modules: null }, modules: [] };
  let A = (0, import_chunk_xcgcdx61.QMo)().safeParse(k);
  if (!A.success) return { result: { success: false, errors: Fe(A.error), warnings: E, filePath: e, fileType: "hooks", modules: null }, modules: [] };
  let _ = [];
  for (let L of Qt(A.data.hooks ?? {})) _.push({ path: `hooks.${L.event}`, message: `Shell command uses ${L.placeholders.join(", ")} without quotes: ${Gf(L.command, 200)}. If the expanded path contains a space the command can split into several words and fail. Wrap the placeholder in double quotes, or use exec form: {"command": "<executable>", "args": ["\${CLAUDE_PLUGIN_ROOT}/..."]}.` });
  let R = [], b = [], P = [], N = [], j = [], I = A.data.modules ?? [], D = I.length > 0 && r !== "unread" ? await $o(s) : $e, H = D.nouns, V = [], K = [], Y = false;
  for (let L of I) {
    let q = (0, import_chunk_bzyb60p0.X0t)(s, e, L), G = v.relative(s, q);
    if (G === ".." || G.startsWith(`..${v.sep}`) || v.resolve(G) === G || (0, import_chunk_z6pfqf6e.Cpt)(L)) {
      R.push({ path: `modules.${L}`, message: "The module path leaves the plugin directory" });
      continue;
    }
    let ne = L.length > yo ? v.relative(y, q).split(v.sep).join("/") : L;
    try {
      let me = await lt(q, s);
      V.push(...me.tried), K.push(L, ...me.specifiers);
      let { graph: En, scan: se, registrations: wt, renderMatchers: Cn, helperCalls: Rn, catchReads: Qe, engineForm: et } = await (0, import_chunk_bzyb60p0.qzl)(q, s, v.basename(s), o), tt = Qe.filter((F) => F.isOwnCommand), nt = [];
      if (tt.length > 0) {
        let F = (0, import_chunk_865at33z.to)();
        try {
          if (!F.shippedTablesFillFailed) {
            (0, import_chunk_xb56zerw.L_e)(), (0, import_chunk_424x9gf0.Det)();
            let z = (0, import_chunk_bzyb60p0.gIn)(), Z = (X) => z(X) || io.has((0, import_chunk_mgntjepj.vg)(X));
            nt.push(...tt.filter((X) => !X.commands.some(Z))), E.push(...(0, import_chunk_4smdap7r.M)(tt.flatMap((X) => X.commands)).filter(Z).map((X) => ({ path: `modules.${L}`, message: `"/${Gf(X, 200)}" is a name Claude Code ships: $.command.register refuses it and the hook that calls it is skipped` })));
          }
        } catch (z) {
          F.shippedTablesFillFailed = true, (0, import_chunk_w578pjby.t)(`plugin validate: shipped command names unread, every command.run hook is listed as a gate: ${(0, import_chunk_jv7av99m.d)(z)}`, { level: "error" });
        }
      }
      let st = Qe.filter((F) => !nt.includes(F) && (0, import_chunk_0w2wb7gk.Wvs)(F.pattern)), Pn = new Set(st), ot = { reads: [], writes: [] }, { events: rt, calls: bt, env: Ce = ot, state: we = ot, hosts: An = { named: [], unread: [] } } = (0, import_chunk_bzyb60p0.Ino)(se), ie = { module: L, uses: { events: rt, calls: bt, env: Ce, state: we, hosts: An }, hooks: Qe.map((F) => ({ pattern: F.pattern, matcher: F.matcher, defaultKeys: F.defaultKeys, isGate: Pn.has(F), hasCatch: F.hasCatch })), nextTo: se.nextTo ?? [], telemetry: se.telemetry ?? [], clients: se.clients ?? [], breaksPromptCache: se.breaksPromptCache === true, nouns: (0, import_chunk_bzyb60p0.Xzl)(et, Object.keys((0, import_chunk_0w2wb7gk.yTo)())), shaders: se.namesShader === true ? null : [] };
      j.push(ie);
      let $t = rt.includes("engine.create"), _n = wt.length === 0 ? ["nothing"] : wt, Tt = [...bt.map((F) => {
        let z = Rn.get(F);
        return z === void 0 ? `$.${F}` : `$.${F} (via ${z.join(", ")})`;
      }), ...ie.nextTo.map((F) => `next.to:${F}`)], Nn = Tt.length === 0 ? ["nothing on $"] : Tt;
      if (b.push(...re(L, [...(0, import_chunk_bzyb60p0.Que)("hooks", _n), ...nt.map((F) => `answers its own command: ${F.registration}`), ...st.map(({ registration: F, hasCatch: z }) => `gating hook ${z ? "with" : "without"} .catch: ` + F), ...(0, import_chunk_bzyb60p0.Que)("calls", Nn), ...ie.breaksPromptCache ? ["uses breakPromptCache"] : [], ...$t && ie.nouns !== null ? (0, import_chunk_bzyb60p0.Yzl)(ie.nouns) : []])), se.namesShader === true) b.push(...re(L, ["may draw a Shader: a checked file that runs on the GPU"]));
      if (et?.isInForm === false) R.push({ path: `modules.${L}`, message: wo(et, s) });
      P.push(...st.map(({ registration: F, pattern: z, hasCatch: Z }) => ({ module: ne, pattern: z, hook: F, hasCatch: Z })));
      for (let { registration: F, matcher: z, isHookReachingNext: Z } of Cn) {
        let X = (0, import_chunk_0w2wb7gk.Kvs)(z);
        if (X !== void 0) E.push({ path: `modules.${L}`, message: `${X} (on ${F})` });
        let ge = Z ? void 0 : (0, import_chunk_0w2wb7gk.pCl)(z);
        if (ge !== void 0) b.push(...re(L, [`advice: ${ge} (on ${F})`]));
      }
      if (H.length > 0 && !$t) E.push({ path: `modules.${L}`, message: `the manifest's types contract declares ${H.map((F) => `$.${F}`).join(", ")} on EngineInterface, but ${L} registers no hook on engine.create by name, so the plugin never adds ${(0, import_chunk_7cfjrnwy.O)(H.length, "it", "them")} to $` });
      if ([Ce.writes, Ce.reads].some((F) => F.length > 0)) {
        let F = (z) => z.length === 0 ? ["nothing"] : z;
        b.push(...re(L, [...(0, import_chunk_bzyb60p0.Que)("env writes", F(Ce.writes)), ...(0, import_chunk_bzyb60p0.Que)("env reads", F(Ce.reads))]));
      }
      let St = rt.some(import_chunk_vfyns8ja.CTo) ? (0, import_chunk_bzyb60p0.kGa)(ie) : void 0;
      if (St !== void 0) b.push(...re(L, [`hooks telemetry for: ${St}`]));
      let vt = (0, import_chunk_bzyb60p0.wGa)(se, { isBuiltin: false });
      if (vt !== void 0) R.push({ path: `modules.${L}`, message: vt });
      if ([we.writes, we.reads].some((F) => F.length > 0)) {
        let F = (le) => le.length === 0 ? ["nothing"] : le.map((de) => (0, import_chunk_vfyns8ja.dfn)(de));
        b.push(...re(L, [...(0, import_chunk_bzyb60p0.Que)("state writes", F(we.writes)), ...(0, import_chunk_bzyb60p0.Que)("state reads", F(we.reads))]));
        let z = D.name ?? v.basename(s), Z = (le) => le.plugin !== z, { reads: X, writes: ge } = we, Re = vs({ names: r === "unread" ? ot : D.isRefused ? { reads: X.filter(Z), writes: ge.filter(Z) } : we, owner: z, declared: D.state, contract: D.conventional, refusal: D.refusal, others: await To(s) });
        if (R.push(...Re.problems.map((le) => ({ path: `modules.${L}`, message: le }))), Re.unchecked.length > 0) b.push(...re(L, (0, import_chunk_bzyb60p0.Que)("state of other plugins, not checked (run validate in a session with them enabled)", Re.unchecked)));
      }
      for (let F of se.wasm?.files ?? []) {
        V.push(v.join(s, F.path)), K.push(...F.spellings);
        try {
          let z = await Xt(F.path, s, v.basename(s));
          N.push({ module: ne, file: z }), b.push(...re(L, ko(z)));
        } catch (z) {
          R.push({ path: `modules.${L}`, message: Gf((0, import_chunk_jv7av99m.d)(z), 400) });
        }
      }
      if (se.wasm?.isMadeAtRunTime) N.push({ module: ne, file: null }), b.push(...re(L, ["wasm: bytes made at run time"]));
      if (se.namesShader === true) {
        let { refusedShaderReport: F, shaderModulesOf: z, shaderReportOf: Z } = require("/$bunfs/root/chunk-jdmyy9xa.js"), { modules: X, problems: ge } = z(En), Re = ge.length === 0, le = [];
        for (let de of X) {
          V.push(v.join(s, de)), K.push(de);
          let { shader: xt, lines: Mn, refusal: Et } = await (0, import_chunk_p9da7c9y.Glt)(v.join(s, de), s, v.basename(s)).then(({ source: Pe }) => Z(de, Pe)).catch((Pe) => F(de, { line: null, message: (0, import_chunk_jv7av99m.d)(Pe) }));
          if (o.bytes -= Buffer.byteLength((0, import_chunk_w578pjby.cs)(xt)), o.bytes >= 0) le.push(xt);
          let On = `shader ${Gf(de, 200)}`;
          b.push(...Mn.map((Pe) => `${On}: ${Gf(Pe, 400)}`)), ge.push(...Et === void 0 ? [] : [Et]);
        }
        ie.shaders = Re && le.length === X.length ? le : null, R.push(...ge.map((de) => ({ path: `modules.${L}`, message: `shader ${Gf(de, 600)}` })));
      }
      for (let F of ie.clients) {
        let z = v.join(s, F), Z = await lt(z, s);
        V.push(...Z.tried), K.push(F, ...Z.specifiers);
      }
      await (0, import_chunk_bzyb60p0.xli)(ie.clients, s, v.basename(s)), b.push(...re(L, (0, import_chunk_bzyb60p0.Que)("surface modules", ie.clients)));
    } catch (me) {
      R.push({ path: `modules.${L}`, message: Gf((0, import_chunk_jv7av99m.d)(me), 400) });
    }
  }
  let ee = K.flatMap((L) => wn(e, "modules", L));
  for (let L of (0, import_chunk_4smdap7r.M)(V).toSorted()) ee.push(...Te(a, await oe(a, L, "follow")));
  for (let L of ye(ee)) R.unshift(...L.errors), _.push(...L.warnings.map((q) => ({ ...q, path: "modules" })));
  return { result: { success: R.length === 0, errors: R, warnings: [...E, ..._], filePath: e, fileType: "hooks", ...b.length > 0 && { notes: b }, ...P.length > 0 && { gatingHooks: P }, ...N.length > 0 && { wasm: N }, modules: j.length === I.length && ee.length === 0 ? j : null }, modules: I };
}
function an(e, { relPath: s, field: o }) {
  if (e === void 0) return { errors: [], notes: [] };
  if (e.kind === "refused") return { errors: e.problems.map((f) => ({ path: o, message: f })), notes: [] };
  let r = Gf(s, 200), a = (0, import_chunk_bzyb60p0.Que)(`types ${r} declares on $`, e.nouns.length > 0 ? e.nouns.map((f) => `$.${f}`) : ["nothing (no EngineInterface member)"]), p = e.state.flatMap(({ plugin: f, keys: y }) => y.map((g) => (0, import_chunk_vfyns8ja.dfn)({ plugin: f, key: g })));
  return { errors: [], notes: [...a, ...(0, import_chunk_bzyb60p0.Que)(`types ${r} declares state`, p)] };
}
var $e = { name: void 0, nouns: [], state: [], isRefused: false, conventional: void 0, refusal: void 0 };
async function $o(e) {
  let s = await Se(v.join(e, ".claude-plugin", "plugin.json")), o = s === void 0 ? void 0 : ve((0, import_chunk_0jve1fep.Ys)(s)), r = typeof o?.name === "string" ? o.name : void 0, a = o?.types;
  if (o === void 0 || a !== void 0 && typeof a !== "string") return { ...$e, name: r };
  let p = await Be(a, e, v.basename(e));
  if (p === void 0) return { ...$e, name: r };
  if (a !== void 0) return p.kind === "read" ? { ...$e, name: r, nouns: p.nouns, state: p.state } : { ...$e, name: r, isRefused: true };
  let f = `the types contract at ${import_chunk_bzyb60p0.DIn}`;
  if (p.kind === "read") return { ...$e, name: r, state: p.state, conventional: f };
  let y = p.problems.length - 1;
  return { ...$e, name: r, conventional: f, refusal: Gf(`the file at ${import_chunk_bzyb60p0.DIn} could not be taken as the types contract (${p.problems[0] ?? "refused"}${y > 0 ? `, and ${y} more` : ""})`, 1e3) };
}
async function To(e) {
  let s = (0, import_chunk_865at33z.ce)(), o = s.pluginLoadCacheOnly ?? s.pluginLoad;
  if (o === void 0) return;
  let r;
  try {
    r = (await o).enabled;
  } catch {
    return;
  }
  let a = [];
  for (let p of r) {
    let f = p.manifest.types;
    if (!((f !== void 0 || p.isBuiltin !== true) && v.resolve(p.path) !== v.resolve(e))) continue;
    let g = await Be(f, p.path, p.name);
    if (g?.kind === "read") a.push(...g.state);
  }
  return a;
}
function Je(e, s) {
  return { ...pe(e, "hooks", s), modules: null };
}
function Te({ root: e }, { clash: s, unsure: o, files: r }, a = r.length > 0 || o !== void 0) {
  let p = s !== void 0 && a ? s : o;
  if (p === void 0) return [];
  let f = Gf((0, import_chunk_bzyb60p0.pH)(p.at), 200) || ".", y = v.join(e, Gf(p.at, 200));
  if ("why" in p) {
    let k = p.why === "link" ? `${f} is a link that was not followed to its end` : `The directory ${f} could not be listed`;
    return [Je(y, `${k}, so names on the way were not compared by letter case. On macOS or Windows hooks code there can load without being listed here.`)];
  }
  let [g, ...h] = [v.basename(p.at), ...p.others].map((k) => `"${Gf((0, import_chunk_5e3gtsn9.eGe)(k), 100)}"`), S = `${h.join(", ")} and ${g} differ only by letter case or Unicode form. macOS or Windows can open one for the other and Linux does not, so hooks can load that are not listed here. Rename so that ${g} is the one spelling, or the names are unalike.`;
  return [{ success: false, errors: [{ path: f, message: S }], warnings: [], filePath: y, fileType: "hooks", modules: null }];
}
function ye(e) {
  return (0, import_chunk_pbteexar.Ls)(e, (s) => {
    let o = (0, import_chunk_w578pjby.cs)(s);
    return s.modules === null ? ue(o) : o;
  });
}
function wn(e, s, o) {
  if (!/[\\:]|~\d|(^|\/)(?!\.\.?(\/|$))[^/]*[. ](\/|$)/.test(o)) return [];
  let r = "Windows can open this path as another file, so hooks can load that are not listed here. Spell it without a backslash, a colon, a name ending in a dot or a space, or a short name such as NAME~1.", a = [{ path: `${s}.${Gf(o, 200)}`, message: r }];
  return [{ ...Je(e, ""), success: false, errors: a, warnings: [] }];
}
function So(e) {
  return Je(e, `${v.basename(e)} was not read for the hooks files it names: it is a link (a symlink or a Windows junction) or in a linked directory, is not a regular file, could not be opened, or is over ${import_chunk_xcgcdx61.aF} bytes. The plugin loader can still read it, so a hooks module named through it loads without being listed here. Validate a copy of the plugin that holds the real file.`);
}
async function vo(e, s) {
  let o = [v.join(e, "hooks", "hooks.json")], r = v.join(e, ".claude-plugin"), a = v.join(r, "plugin.json"), p = await oe(s, a, "stop"), f = p.clash?.at ?? "", y = Te(s, p, [f, v.dirname(f)].some(Ve) || p.unsure !== void 0);
  if (y[0]?.success === false) return { files: o, unread: y };
  let g = await (0, import_chunk_nb21njpa.DP)(e, r) === "refused", h;
  for (let k of [a, ...p.clash ? p.files : []]) {
    let x = g ? void 0 : await (0, import_chunk_nb21njpa.$5)(k).catch(() => {
      return;
    });
    if (x?.kind === "absent") continue;
    if (x?.kind !== "ok") return { files: o, unread: [...y, So(a)] };
    if (h = (0, import_chunk_bzyb60p0.LMe)(ve((0, import_chunk_0jve1fep.Ys)(x.content)), "plugin-json", { pluginName: v.basename(e), manifestPath: a }).rawCandidate?.hooks, p.clash && (h !== void 0 || !k.endsWith(import_chunk_zcpqgt0x.Vp))) return { files: o, unread: Te(s, p, true) };
  }
  let S = Array.isArray(h) ? h : [h];
  for (let k of S) {
    if (typeof k !== "string") continue;
    let x = v.join(e, Gf(k, 128)), E = wn(x, "hooks", k);
    if (E.length > 0) {
      y.push(...E);
      continue;
    }
    let A = v.resolve(e, k), _ = v.resolve(e) + v.sep;
    if (!A.startsWith(_) && ue(A).startsWith(ue(_))) {
      let b = _.split(v.sep), P = A.split(v.sep), N = b.findIndex((D, H) => D !== P[H]), j = b.slice(0, N).join(v.sep) + v.sep, I = { at: b[N] ?? "", others: P.slice(N, N + 1) };
      y.push(...Te({ ...s, root: j }, { ...p, clash: I }, true));
      continue;
    }
    let R = v.relative(e, A);
    if (R === ".." || R.startsWith(`..${v.sep}`) || v.resolve(R) === R) continue;
    if (!o.includes(A)) o.push(A);
  }
  return { files: o, unread: y };
}
async function bn(e, s, o, r) {
  let { files: a, unread: p } = await vo(e, r), f = [], y, g = { bytes: import_chunk_p9da7c9y.p7e };
  for (let A of a) {
    let _ = Te(r, await oe(r, A, "stop"));
    if (p.push(..._), _[0]?.success === false) continue;
    let { result: R, modules: b } = await bo(A, e, g, o, r);
    if (b.length > 0) f.push(A);
    if (R.success) for (let P of b) {
      let N = (0, import_chunk_p9da7c9y.D2n)((0, import_chunk_bzyb60p0.X0t)(e, A, P));
      if (N === "ts" || N === "tsx") y = { hooksFile: A, spec: P };
    }
    if (R.errors.length > 0 || R.warnings.length > 0 || R.notes !== void 0) p.push(R);
  }
  let [, h] = f;
  if (h !== void 0) {
    let A = f.map((_) => v.relative(e, _));
    p.push({ success: false, errors: [{ path: "modules", message: `The plugin names one hooks module per plugin, but ${A.join(" and ")} each name one; the loader refuses both` }], warnings: [], filePath: h, fileType: "hooks" });
  }
  if (o !== "checked" || f.length !== 1 || y === void 0) return p;
  let S = await xo(e, y, s);
  if (S.notes.length === 0 && S.warnings.length === 0) return [...p, ...S.files];
  let k = p.findIndex((A) => A.filePath === y.hooksFile), x = p[k] ?? { success: true, errors: [], warnings: [], filePath: y.hooksFile, fileType: "hooks" }, E = { ...x, warnings: [...x.warnings, ...S.warnings], notes: [...x.notes ?? [], ...S.notes] };
  return [...k === -1 ? [...p, E] : p.with(k, E), ...S.files];
}
async function xo(e, { hooksFile: s, spec: o }, r) {
  let a = await Se(v.join(e, ".claude-plugin", "plugin.json")), p = a === void 0 ? void 0 : ve((0, import_chunk_0jve1fep.Ys)(a))?.dependencies, f = Array.isArray(p);
  if (!(p === void 0 || f && p.length === 0)) return { files: [], warnings: [], notes: re(o, [f ? "types: not checked (the mod names dependencies, whose contracts are laid as links out of the mod's folder; validate reads nothing outside it)" : "types: not checked (the manifest's dependencies are not a list of plugins, so the contracts the mod is typed against are not known)"]) };
  try {
    let g = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-hy4y4hgb.js"))), h = g.checkLimits(), S = await g.typeCheckInChild({ root: e, entry: (0, import_chunk_bzyb60p0.X0t)(e, s, o) }, h, (A) => g.startChild(A, r));
    if (S.kind !== "findings") {
      if (r?.aborted !== true) switch (S.kind) {
        case "past-limit":
          (0, import_chunk_cqa9hrgx.l)("plugin_validate_type_check", "past_limit");
          break;
        case "refused":
          (0, import_chunk_cqa9hrgx.l)("plugin_validate_type_check", "refused");
          break;
        case "no-runtime":
          (0, import_chunk_cqa9hrgx.l)("plugin_validate_type_check", "no_runtime");
          break;
        case "threw":
        case "no-answer":
          (0, import_chunk_cqa9hrgx.m)("plugin_validate_type_check", "check_threw");
          break;
      }
      return ln(o, Gf(g.uncheckedMessageOf(S, h), 420));
    }
    let k = /* @__PURE__ */ new Map(), x = [];
    for (let { at: A, message: _ } of S.findings) {
      if (A === void 0) {
        x.push({ path: `modules.${o}`, message: _ });
        continue;
      }
      let R = k.get(A.file) ?? [];
      R.push({ path: `line ${A.line}, column ${A.column}`, message: _ }), k.set(A.file, R);
    }
    let E = [...k].map(([A, _]) => ({ success: true, errors: [], warnings: _, filePath: v.join(e, Gf(A, 256)), fileType: "hooks" }));
    if (S.leftOut.length === 0) return (0, import_chunk_cqa9hrgx.u)("plugin_validate_type_check"), { files: E, warnings: x, notes: [] };
    return (0, import_chunk_cqa9hrgx.l)("plugin_validate_type_check", "left_out"), { files: E, warnings: x, notes: [Gf(g.leftOutNoteOf(S.leftOut), 420)] };
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.m)("plugin_validate_type_check", "check_threw"), ln(o, `not type-checked: ${Gf((0, import_chunk_jv7av99m.d)(g), 400)}`);
  }
}
function ln(e, s) {
  return { files: [], warnings: [{ path: `modules.${e}`, message: s }], notes: [] };
}
var Eo = /* @__PURE__ */ new Set(["stdio", "http", "streamable-http", "sse", "ws", "sdk", "sse-ide", "ws-ide", "claudeai-proxy"]), Co = /\$\{user_config\.([^}$]+)\}/g, $n = /\$\{[^}$]+\}/, ht = 16, Ro = 8192, Po = [/\bsk-[A-Za-z0-9_-]{16,}/, /\bgh[opsur]_[A-Za-z0-9]{30,}/, /\bgithub_pat_[A-Za-z0-9_]{30,}/, /\bxox[abeprs]-[A-Za-z0-9-]{10,}/, /\bAKIA[0-9A-Z]{16}\b/, /\bglpat-[A-Za-z0-9_-]{20,}/, /\bAIza[0-9A-Za-z_-]{35}\b/, /(?:^|[^A-Za-z0-9_-])eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+/], Ao = /authorization|api[-_]?key|token|secret|password|credential/i, _o = /your[-_ ]|replace|example|changeme|placeholder|dummy|redacted|xxx|[<>]|\*\*\*/i;
function No(e) {
  let s = /* @__PURE__ */ new Map();
  for (let r of e) s.set(r, (s.get(r) ?? 0) + 1);
  let o = 0;
  for (let r of s.values()) {
    let a = r / e.length;
    o -= a * Math.log2(a);
  }
  return o;
}
function Mo(e, s) {
  if (s.length > Ro || $n.test(s) || _o.test(s)) return false;
  let o = s.trim();
  if (Po.some((a) => a.test(o))) return true;
  if (!Ao.test(e)) return false;
  let r = o.match(/^(?:Bearer|Basic|Token|Bot)\s+(\S+)$/i)?.[1] ?? o;
  return r.length >= 20 && !/\s/.test(r) && No(r) >= 3;
}
var Oo = /\$\{[^}$]+\}/g;
function Ge(e, s) {
  return URL.parse(e.replace(Oo, s)) ?? void 0;
}
function Lo(e) {
  let s = Ge(e, "probe-a.invalid") ?? Ge(e, "1"), o = Ge(e, "probe-b.invalid") ?? Ge(e, "2");
  if (!s || !o || s.hostname !== o.hostname) return;
  let r = s.protocol === "http:" ? "http" : s.protocol === "ws:" ? "ws" : void 0;
  if (r === void 0) return;
  let a = s.hostname;
  if ((0, import_chunk_dvkg7v5x.DM)(a) || a.endsWith(".localhost")) return;
  let p = r === "http" ? "https" : "wss";
  return `url uses ${r}:// to a non-loopback host \u2014 requests, headers and any credentials travel in cleartext. Use ${p}://; plugin directories may reject insecure remote server urls.`;
}
function jo(e) {
  let s = [], o = [], r;
  if (e.type === void 0 || e.type === "stdio") {
    if (o.push("command"), r = "env", Array.isArray(e.args)) {
      for (let [p, f] of e.args.entries()) if (typeof f === "string") s.push({ field: `args[${p}]`, value: f });
    }
  } else if (Ze(e.type)) o.push("url", "headersHelper"), r = "headers";
  for (let p of o) {
    let f = e[p];
    if (typeof f === "string") s.push({ field: p, value: f });
  }
  let a = r === void 0 ? void 0 : e[r];
  if (r !== void 0 && (0, import_chunk_ma3kja9f.T)(a)) {
    for (let [p, f] of Object.entries(a)) if (typeof f === "string") s.push({ field: `${r}.${p}`, value: f });
  }
  return s;
}
function Ze(e) {
  return e === "http" || e === "streamable-http" || e === "sse" || e === "ws";
}
function Tn(e, s, o) {
  let r = [], a = [];
  if (!(0, import_chunk_ma3kja9f.T)(s)) return { errors: r, warnings: a };
  qe(s.network, `${e}.network`, a, s.type);
  for (let { field: p, value: f } of jo(s)) {
    let y = new Set([...f.matchAll(Co)].map((h) => h[1]));
    if (y.size === 0) continue;
    let g = `${e}.${Gf(p, 64)}`;
    if (p === "headersHelper") {
      r.push({ path: g, message: 'headersHelper references ${user_config.*}. Options are never substituted into headersHelper: the plugin loader refuses the server when the plugin declares any options (the value would be spliced into a shell command), and otherwise the literal text reaches the shell. Read the value inside the helper script instead (for example from a variable set in the server\'s "env" block).' });
      continue;
    }
    if (o === null) continue;
    for (let h of y) if (h !== void 0 && !o.has(h)) r.push({ path: g, message: `references \${user_config.${Gf(h, 64)}}, which plugin.json does not declare under "userConfig" (or in this server's "channels" entry), so on a fresh install it cannot resolve: the loader drops the server or passes the literal text through. Declare the option or fix the key.` });
  }
  if (Ze(s.type) && typeof s.url === "string") if (s.url.trim() === "") {
    if (typeof s.directory === "string" && s.directory !== "") a.push({ path: `${e}.directory`, message: `"directory" is set but url is empty. The key names a directory entry and counts only when this server's url is that entry's url, so plugin directories may reject this plugin. Set url to that entry's url, or remove the "directory" key.` });
  } else if (!$n.test(s.url) && !URL.canParse(s.url)) r.push({ path: `${e}.url`, message: 'url is not a valid absolute URL (for example "https://host/path"). The plugin loader marks this server as invalid config and it never connects.' });
  else {
    let p = Lo(s.url);
    if (p) a.push({ path: `${e}.url`, message: p });
  }
  if (Ze(s.type) && (0, import_chunk_ma3kja9f.T)(s.headers)) {
    for (let [p, f] of Object.entries(s.headers)) if (typeof f === "string" && Mo(p, f)) a.push({ path: `${e}.headers.${Gf(p, 64)}`, message: "header value looks like a literal credential. Everything shipped in a plugin is readable by everyone who installs it; reference a sensitive userConfig option (${user_config.KEY}) or an environment variable (${VAR}) instead of committing the value." });
  }
  return { errors: r, warnings: a };
}
function Fo(e, s, o) {
  if (!(0, import_chunk_ma3kja9f.T)(s)) return [{ path: e, message: `server config must be an object (got ${ae(s)}). The plugin loader silently drops this server at load.` }];
  let a = s.type;
  if (a === void 0 && !("command" in s) && "url" in s) return [{ path: `${e}.type`, message: 'server has a "url" but no "type". Remote servers must set "type" to "http" (or "sse" / "ws"); without it the entry is parsed as a stdio server, fails for lacking "command", and is silently dropped at load.' }];
  if (a !== void 0 && (typeof a !== "string" || !Eo.has(a))) {
    let g = typeof a === "string" ? `"${Gf(a, 32)}"` : ae(a);
    return [{ path: `${e}.type`, message: `unknown server type ${g} \u2014 expected "stdio" (or no type) for a local command, or "http", "sse", "ws" for a remote server. The plugin loader silently drops this server at load.` }];
  }
  let f = (a === void 0 || a === "stdio" ? (0, import_chunk_xcgcdx61.PKt)() : a === "http" || a === "streamable-http" ? (0, import_chunk_xcgcdx61.Mgn)() : a === "sse" ? (0, import_chunk_xcgcdx61.XKn)() : a === "ws" ? (0, import_chunk_xcgcdx61.WHr)() : void 0)?.safeParse(s);
  if (!f) return [{ path: e, message: `is not a valid "${String(a)}" server config (${Fe(o)[0]?.message ?? "invalid"}). The plugin loader silently drops this server at load.` }];
  return (f.success ? Fe(o) : Fe(f.error)).map((g) => ({ ...g, path: g.path === "root" ? e : `${e}.${g.path}`, message: `${g.message}. The plugin loader silently drops this server at load.` }));
}
async function cn(e, s, o) {
  let a = (E) => pe(s, "mcp", `${E} \u2014 MCP server files are read without following symlinks and are capped at ${import_chunk_xcgcdx61.aF} bytes. The plugin loader has neither limit, so validate the real file separately.`), p;
  try {
    p = await (0, import_chunk_nb21njpa.$5)(e);
  } catch (E) {
    return { success: false, errors: [{ path: "file", message: `Failed to read file: ${(0, import_chunk_jv7av99m.d)(E)}` }], warnings: [], filePath: s, fileType: "mcp" };
  }
  if (p.kind === "absent") return null;
  if (p.kind === "refused") return a("The file is not a regular file (a symlink, a FIFO, a directory) and was not read");
  if (p.kind === "too-large") return a("The file is past the size cap and was not read");
  let f;
  try {
    f = (0, import_chunk_w578pjby.te)(p.content);
  } catch (E) {
    return { success: false, errors: [{ path: "json", message: `Invalid JSON syntax: ${p.content.startsWith("\uFEFF") ? "the file starts with a UTF-8 byte-order mark (BOM), which this file (unlike plugin.json) must not have \u2014 re-save it as UTF-8 without BOM" : (0, import_chunk_jv7av99m.d)(E)}. The plugin loader logs this at debug level and loads no servers from the file.` }], warnings: [], filePath: s, fileType: "mcp" };
  }
  let y = [], g = [], h = (0, import_chunk_ma3kja9f.T)(f) && Boolean(f.mcpServers), S = h && (0, import_chunk_ma3kja9f.T)(f) ? f.mcpServers : f, k = h ? "mcpServers" : "root", x;
  if ((0, import_chunk_ma3kja9f.T)(S)) x = Object.entries(S);
  else if (Array.isArray(S)) {
    if (x = S.map((E, A) => [String(A), E]), S.length > 0) g.push({ path: k, message: `is an array; the plugin loader keys its servers by array index ("0", "1", ...), and review tooling has misread this shape as 'no servers'. Use an object keyed by server name.` });
  } else return { success: false, errors: [{ path: k, message: `must be an object mapping server names to server configs (got ${ae(S)}). No servers load from this file.` }], warnings: [], filePath: s, fileType: "mcp" };
  for (let [E, A] of x) {
    let _ = Gf(E, 64), R = h ? `mcpServers.${_}` : _, b = (0, import_chunk_xcgcdx61.HFe)().safeParse(A);
    if (!b.success) {
      y.push(...Fo(R, A, b.error));
      continue;
    }
    let P = (0, import_chunk_bzyb60p0.OTe)(b.data.type);
    if (P !== null) {
      y.push({ path: `${R}.type`, message: P === "host-only" ? `type "${b.data.type}" servers are registered by the host application at runtime and cannot be declared by a plugin. The plugin loader drops this server at load.` : 'type "claudeai-proxy" is used only by claude.ai connectors and cannot be declared by a plugin \u2014 declare the server with type "http" instead. The plugin loader drops this server at load.' });
      continue;
    }
    let N = Tn(R, A, o(E));
    y.push(...N.errors), g.push(...N.warnings);
  }
  return { success: y.length === 0, errors: y, warnings: g, filePath: s, fileType: "mcp" };
}
function Sn(e) {
  let s = new Set((0, import_chunk_ma3kja9f.T)(e.userConfig) ? Object.keys(e.userConfig) : []), o = /* @__PURE__ */ new Map();
  if (Array.isArray(e.channels)) {
    for (let r of e.channels) if ((0, import_chunk_ma3kja9f.T)(r) && typeof r.server === "string" && !o.has(r.server)) o.set(r.server, new Set((0, import_chunk_ma3kja9f.T)(r.userConfig) ? Object.keys(r.userConfig) : []));
  }
  return (r) => {
    let a = o.get(r);
    return a === void 0 ? s : { has: (p) => s.has(p) || a.has(p) };
  };
}
async function Io(e, s) {
  return Sn(e);
}
async function Do(e, s) {
  let o, r = v.join(e, ".claude-plugin", "plugin.json");
  if (await (0, import_chunk_nb21njpa._G)(v.dirname(r))) {
    let _ = await Se(r), R = _ === void 0 ? void 0 : ve((0, import_chunk_0jve1fep.Ys)(_));
    if (R) o = (0, import_chunk_bzyb60p0.LMe)(R, "plugin-json", { pluginName: v.basename(e), manifestPath: r }).rawCandidate ?? R;
  }
  let p = o ? Sn(o) : void 0, f = (_) => p ? p(_) : null, y = [], g = v.join(e, ".mcp.json"), h = await cn(g, g, f);
  if (h) y.push(h);
  let S = /* @__PURE__ */ new Set([v.resolve(g)]), k = o?.mcpServers, x = k === void 0 ? [] : Array.isArray(k) ? k : [k], E = ht, A = 0;
  for (let _ of x) {
    if (typeof _ !== "string") continue;
    if (!_.startsWith("./") || !_.endsWith(".json") || _.includes("..")) continue;
    let R = v.join(e, _), b = v.resolve(R);
    if (S.has(b)) continue;
    if (S.add(b), E <= 0) {
      A++;
      continue;
    }
    E--;
    let P = v.join(e, Gf(_, 128)), N = await (0, import_chunk_nb21njpa.DP)(e, v.dirname(R));
    if (N === "refused") {
      y.push(pe(P, "mcp", "A directory on the way to this MCP servers file is a link (a symlink or a Windows junction) or escapes the plugin, and the file was not read \u2014 the plugin loader follows it, so validate the real file separately."));
      continue;
    }
    if (N !== "ok") continue;
    let j = await cn(R, P, f);
    if (j) y.push(j);
  }
  if (A > 0) y.push(pe(r, "mcp", `plugin.json names more than ${ht} MCP server files; ${A} ${(0, import_chunk_7cfjrnwy.O)(A, "file")} past that limit were not examined. The plugin loader reads them all, so validate those files separately.`));
  return y.filter((_) => _.errors.length > 0 || _.warnings.length > 0);
}
async function kt(e, s) {
  let o;
  try {
    o = await (0, import_promises.readdir)(e, { withFileTypes: true });
  } catch (p) {
    let f = (0, import_chunk_jv7av99m.w)(p);
    if (f === "ENOENT" || f === "ENOTDIR") return { files: [], skippedSymlinks: 0 };
    throw p;
  }
  let r = (0, import_chunk_4smdap7r.U)(o, (p) => p.isSymbolicLink());
  if (s) {
    let p = [];
    for (let f of o.filter((y) => y.isDirectory())) if (await (0, import_chunk_c203g5kd.HB)(v.join(e, f.name))) r++;
    else p.push(v.join(e, f.name, "SKILL.md"));
    return { files: p, skippedSymlinks: r };
  }
  let a = [];
  for (let p of o) {
    let f = v.join(e, p.name);
    if (p.isDirectory()) {
      if (await (0, import_chunk_c203g5kd.HB)(f)) {
        r++;
        continue;
      }
      let y = await kt(f, false);
      a.push(...y.files), r += y.skippedSymlinks;
    } else if (p.isFile() && p.name.toLowerCase().endsWith(".md")) a.push(f);
  }
  return { files: a, skippedSymlinks: r };
}
var T6o = "NO_MANIFEST", vn = "LINKED_TARGET", xn = /* @__PURE__ */ new Map([["skills", "skill"], ["agents", "agent"], ["commands", "command"]]);
function dn(e, s) {
  return e === "project" || s === "skill";
}
async function gt(e) {
  let s = [...xn].map(([r, a]) => [a, v.join(e, r)]), o = await Promise.all(s.map(([, r]) => (0, import_chunk_nb21njpa.DP)(e, r)));
  return { dirs: s.filter((r, a) => o[a] === "ok"), refused: s.filter((r, a) => o[a] === "refused") };
}
async function Vo(e) {
  if (await (0, import_chunk_nb21njpa.DP)(e, v.join(e, ".claude-plugin")) === "ok") return true;
  let s = v.join(e, "skills"), o = await (0, import_chunk_nb21njpa.DP)(e, s);
  if (o === "refused") return true;
  if (o !== "ok") return false;
  let { files: r } = await kt(s, true);
  for (let a of r) if (await (0, import_promises.lstat)(a).then(() => true, (f) => {
    let y = (0, import_chunk_jv7av99m.w)(f);
    return y !== "ENOENT" && y !== "ENOTDIR";
  })) return true;
  return false;
}
function pe(e, s, o) {
  return { success: true, errors: [], warnings: [{ path: "directory", message: o }], filePath: e, fileType: s };
}
async function Ye(e, s, o) {
  let r = [], a = 0, p = s.length;
  for (let [f, y] of s) r.push(pe(y, f, o === "plugin" ? "This directory is a symlink, so the validator read nothing in it. An installed plugin loads it only if it points inside the plugin's installed folder, or, for a plugin read in place from a local marketplace folder, inside that folder; a project's .claude/skills plugin, only if it points inside the folder holding that .claude. Otherwise replace the link with a copy of the folder. To check its files, validate the folder it points to." : "This directory is a symlink and nothing in it was read \u2014 component directories are read without following symlinks. A session loading this project does follow it, so validate the real directory separately."));
  for (let [f, y] of e) {
    let { files: g, skippedSymlinks: h } = await kt(y, f === "skill"), S = dn(o, f) ? h : 0, k = 0, x = 0;
    for (let A of g) {
      let _ = Gf(A, 256), R;
      try {
        R = await (0, import_chunk_nb21njpa.$5)(A);
      } catch (P) {
        r.push({ success: false, errors: [{ path: "file", message: `Failed to read: ${Gf((0, import_chunk_jv7av99m.d)(P), 200)}` }], warnings: [], filePath: _, fileType: f });
        continue;
      }
      if (R.kind !== "ok") {
        if (R.kind === "refused" && dn(o, f)) k++;
        else if (R.kind === "too-large") x++;
        continue;
      }
      a++;
      let b = go(_, R.content, f, o);
      if (b.errors.length > 0 || b.warnings.length > 0) r.push(b);
    }
    p += S + k + x;
    let E = o === "plugin" ? "A session started with --plugin-dir on this plugin follows a symlink here. An installed plugin follows one only if it points inside the plugin's installed folder, or, for a plugin read in place from a local marketplace folder, inside that folder; a project's .claude/skills plugin, only if it points inside the folder holding that .claude. To check what a symlink points to, validate that path." : "A session loading this directory does follow them, so validate the real paths separately.";
    if (S > 0) r.push(pe(y, f, `${S} ${(0, import_chunk_7cfjrnwy.O)(S, "entry", "entries")} here ${(0, import_chunk_7cfjrnwy.O)(S, "is", "are")} ${(0, import_chunk_7cfjrnwy.O)(S, "a symlink", "symlinks")} and ${(0, import_chunk_7cfjrnwy.O)(S, "was", "were")} not read \u2014 components are read without following symlinks. ${E}`));
    if (k > 0) r.push(pe(y, f, `${k} ${(0, import_chunk_7cfjrnwy.O)(k, "component")} here ${(0, import_chunk_7cfjrnwy.O)(k, "was", "were")} not read \u2014 the path is not a regular file (a symlink, a FIFO, a directory). ${o === "plugin" ? "A FIFO or a directory is never read. " : ""}${E}`));
    if (x > 0) r.push(pe(y, f, `${x} ${(0, import_chunk_7cfjrnwy.O)(x, "file")} here ${(0, import_chunk_7cfjrnwy.O)(x, "is", "are")} larger than ${import_chunk_xcgcdx61.aF} bytes and ${(0, import_chunk_7cfjrnwy.O)(x, "was", "were")} not validated.`));
  }
  return { results: r, scanned: a, skipped: p };
}
async function Ho(e) {
  return (await zo(e))?.map(ke) ?? null;
}
async function zo(e) {
  let s = xn.get(v.basename(e));
  if (s) {
    let A = v.dirname(e), _;
    if (v.basename(A) === ".claude" && !await (0, import_chunk_nb21njpa._G)(A)) _ = "The enclosing .claude directory is a link (a symlink or a Windows junction).";
    else if (!await (0, import_chunk_nb21njpa._G)(e)) _ = "This path is a link (a symlink or a Windows junction).";
    if (_) return [{ success: false, errors: [{ path: "directory", code: vn, message: `${_} Component directories are read without following links, so nothing here was validated. Pass the real directory instead.` }], warnings: [], filePath: e, fileType: s }];
    return [...(await Ye([[s, e]], [], "project")).results, ...await mt(e)];
  }
  let o = v.join(e, ".claude"), r = v.basename(e) === ".claude", [a, p] = await Promise.all([(0, import_chunk_nb21njpa.DP)(e, o), r ? Promise.resolve(false) : Vo(e)]), f = r || p ? await gt(e) : { dirs: [], refused: [] }, y = a === "ok" ? await gt(o) : { dirs: [], refused: [] }, g = r ? "project" : "plugin", [h, S] = await Promise.all([Ye(f.dirs, f.refused, g), Ye(y.dirs, y.refused, "project")]), k = [...h.results, ...S.results, ...await mt(e)], x = h.scanned + S.scanned, E = h.skipped + S.skipped;
  if (a === "refused") k.push(pe(o, "plugin", "This directory is a link (a symlink or a Windows junction) and nothing in it was read \u2014 .claude is read without following links. A session loading this project does follow it, so validate the real directory separately."));
  return x > 0 || E > 0 || k.length > 0 ? k : null;
}
async function C6o(e, s, o = "checked") {
  let r = await mt(e), a = /* @__PURE__ */ new Set(["claude.md", "claude.local.md"]), p = [];
  try {
    p = await (0, import_promises.readdir)(e, { withFileTypes: true });
  } catch {
  }
  for (let g of p) {
    if (!g.isFile() || !a.has(g.name.toLowerCase())) continue;
    let S = g.name.toLowerCase() === "claude.local.md" ? "Remove it from the plugin root." : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
    r.push({ success: true, errors: [], warnings: [{ path: "root", message: `${g.name} at the plugin root is not loaded as project context. ${S}` }], filePath: v.join(e, Gf(g.name, 64)), fileType: "plugin" });
  }
  r.push(...await Uo(e));
  let f = await gt(e);
  r.push(...(await Ye(f.dirs, f.refused, "plugin")).results);
  let y = { root: e, listed: /* @__PURE__ */ new Map() };
  return r.push(...ye(await bn(e, s, o, y))), r.push(...await Wo(e)), r.push(...await Do(e, p)), r.map(ke);
}
async function Wo(e) {
  let s = await Se(v.join(e, "settings.json"));
  if (s === void 0) return [];
  let o;
  try {
    o = (0, import_chunk_w578pjby.te)((0, import_chunk_0jve1fep.Ys)(s));
  } catch {
    return [];
  }
  let r = gn(o);
  if (r.length === 0) return [];
  return [{ success: true, errors: [], warnings: [], notes: r, filePath: "settings.json", fileType: "plugin" }];
}
async function p9s(e, s) {
  let o = ke(await Bo(e));
  if (s?.unrecordableNames !== "warn") return o;
  let r = o.errors.filter((p) => p.code !== Xe), a = o.errors.filter((p) => p.code === Xe).map(({ path: p, message: f }) => ({ path: p, message: f }));
  return { ...o, success: r.length === 0, errors: r, warnings: [...a, ...o.warnings] };
}
async function Bo(e) {
  let s = v.resolve(e), o = null;
  try {
    o = await (0, import_promises.stat)(s);
  } catch (a) {
    if (!(0, import_chunk_jv7av99m.J)(a)) throw a;
  }
  if (o?.isDirectory()) {
    let a = v.join(s, ".claude-plugin", "marketplace.json"), p = await dt(a), f = p.errors[0];
    if (!(f?.path === "file" && (f.code === "ENOENT" || f.code === "ENOTDIR"))) return p;
    let g = v.join(s, ".claude-plugin", "plugin.json"), h = await SZn(g), S = h.errors[0]?.code;
    if (S !== "ENOENT" && S !== "ENOTDIR") return h;
    return { success: false, errors: [{ path: "directory", code: T6o, message: "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json" }], warnings: [], filePath: s, fileType: "plugin" };
  }
  switch (lo(s)) {
    case "plugin":
      return SZn(e);
    case "marketplace":
      return dt(e);
    case "unknown": {
      try {
        let a = await (0, import_promises.readFile)(s, { encoding: "utf-8" }), p = (0, import_chunk_w578pjby.te)((0, import_chunk_0jve1fep.Ys)(a));
        if ((0, import_chunk_ma3kja9f.T)(p)) {
          let f = Object.keys(p), y = (0, import_chunk_xcgcdx61.Wut)().shape, g = f.some((S) => Object.hasOwn(y, S) && !(0, import_chunk_xcgcdx61.JHr)(S)), h = f.some((S) => (0, import_chunk_xcgcdx61.JHr)(S) && !Object.hasOwn(y, S));
          if (Array.isArray(p.plugins) || Object.hasOwn(p, "plugins") && Object.hasOwn(p, "owner") || g && !h) return dt(e);
        }
      } catch (a) {
        if ((0, import_chunk_jv7av99m.w)(a) === "ENOENT") return { success: false, errors: [{ path: "file", message: `File not found: ${s}` }], warnings: [], filePath: s, fileType: "plugin" };
      }
      return SZn(e);
    }
  }
}
async function Oe(e, s) {
  let o = [], r = { root: e, listed: /* @__PURE__ */ new Map() };
  for (let a of (0, import_chunk_4smdap7r.M)(s)) {
    let p = await oe(r, a, "stop"), f = await (0, import_chunk_nb21njpa.DP)(e, a);
    if (o.push(...Te(r, p, false)), f === "ok" || p.clash && !p.unsure && f !== "refused") o.push(...await bn(a, void 0, "unread", r));
    else if (f === "refused") o.push(Je(a, "This path was not read for hooks files: it is or goes through a link (a symlink or a Windows junction), or could not be opened. The plugin loader can still take it as a plugin, so a hooks module there loads without being listed here. Validate the real directory separately."));
  }
  return ye(o).map((a) => ke({ ...a, filePath: Gf(a.filePath, 256) }));
}
async function pt(e) {
  let s = (await (0, import_promises.readdir)(e).catch(() => [])).filter(import_chunk_bzyb60p0.WQt), r = [import_chunk_zcpqgt0x.Vp, import_chunk_zcpqgt0x.kit, ...s.map((h) => v.join(h, import_chunk_zcpqgt0x.Vp))].some((h) => (0, import_chunk_z6pfqf6e.MPt)(e, h)) ? void 0 : await (0, import_chunk_bzyb60p0.Bir)(e);
  if (r === void 0) return [e, ...s.map((h) => v.join(e, h))];
  let a = { root: e, listed: /* @__PURE__ */ new Map() }, p = r.kind === "collection";
  if (r.kind === "plugin") {
    let h = v.join(e, r.marker, import_chunk_zcpqgt0x.Vp), S = await oe(a, h, "follow");
    p = (S.clash ?? S.unsure) !== void 0;
  }
  let f = r.kind === "collection" ? [...r.children] : [], y = await (0, import_promises.realpath)(e).catch(() => v.resolve(e)), g = v.join(y, v.sep);
  for (let h of p ? s : []) {
    let S = v.join(e, h), k = v.join(S, import_chunk_zcpqgt0x.Vp), x = await oe({ ...a, root: S }, k, "follow"), E = await (0, import_promises.readlink)(S).catch(() => h), A = v.resolve(y, E);
    if ([ue(A).startsWith(ue(g)) ? await oe(a, v.join(e, ...A.split(v.sep).slice(g.split(v.sep).length - 1), import_chunk_zcpqgt0x.Vp), "follow") : x, x].some((R) => R.files.length > 0 || R.unsure) || (0, import_chunk_z6pfqf6e.TJ)(E).some((R, b, P) => R === ".." && (P[b - 1] ?? "..") !== "..")) f.push(h);
  }
  return [e, ...f.map((h) => v.join(e, h))];
}
async function aHt(e, s, o = "checked") {
  let r = await p9s(e), a = r.filePath, p = r.errors.some((P) => P.code === T6o), f = v.dirname(a), y = Ve(f), g = y ? v.dirname(f) : f, h = p ? a : g, S = { root: h, listed: /* @__PURE__ */ new Map() }, k = await oe(S, v.join(h, import_chunk_zcpqgt0x.kit), "follow"), x = Te(S, k, true).filter((P) => !P.success || k.unsure?.at !== import_chunk_zcpqgt0x.Akt).map(ke);
  if (p) {
    let P = await Ho(a);
    if (P?.[0]?.errors[0]?.code === vn) return { manifest: null, contents: P, resolvedPath: a, pluginRoot: null };
    let N = await pt(a);
    for (let I of [v.join(a, ".claude", "skills"), v.join(a, "skills"), ...v.basename(a) === "skills" ? [a] : []]) {
      let D = await oe(S, I, "stop"), H = [...await (0, import_chunk_nb21njpa.DP)(a, I) === "ok" ? [I] : [], ...D.clash ? D.folders : []], V = await Promise.all(H.map((K) => (0, import_promises.readdir)(K, { withFileTypes: true }).catch(() => {
        return;
      })));
      if (D.unsure || H.length === 0 || V.includes(void 0)) N.push(I);
      for (let K of V.flatMap((Y) => Y ?? [])) {
        if (K.isFile()) continue;
        let Y = v.join(I, K.name);
        {
          let ee = v.join(Y, ".claude-plugin"), L = await oe(S, ee, "stop");
          if (L.unsure || L.files.length + L.folders.length > 0 || await (0, import_chunk_nb21njpa.DP)(I, ee) !== "absent") N.push(Y);
        }
      }
    }
    let j = [...x, ...P ?? []];
    for (let I of await Oe(a, N)) {
      let { filePath: D } = I, H = v.basename(D) === "SKILL.md" ? v.dirname(D) : D, V = I.warnings[0]?.path === "directory" && N.includes(H) ? P?.find((K) => [D, H, v.dirname(H)].includes(K.filePath)) : void 0;
      if (V === void 0) j.push(I);
      else V.modules = null;
    }
    return { manifest: P === null ? r : null, contents: ye(j), resolvedPath: a, pluginRoot: null };
  }
  if (r.fileType === "plugin") {
    if (y) {
      let N = ye([...x, ...await C6o(g, s, o)]);
      return { manifest: r, contents: N, resolvedPath: a, pluginRoot: g };
    }
    let P = r.errors.some((N) => N.path === "file") ? [] : ye([...x, ...await Oe(g, await pt(g))]);
    return { manifest: r, contents: P, resolvedPath: a, pluginRoot: null };
  }
  if (y && v.resolve(e) !== g) return { manifest: r, contents: x, resolvedPath: a, pluginRoot: null };
  let E = await E6o(a), A = (E?.plugins ?? []).flatMap(({ source: P }) => (0, import_chunk_xcgcdx61.qRt)(P) && !He(P) ? [v.resolve(g, P)] : []);
  if (!y) {
    let P = await Oe(g, A);
    return { manifest: r, contents: P, resolvedPath: a, pluginRoot: null };
  }
  let _ = E !== void 0 && (0, import_chunk_xcgcdx61.YHr)(E.name) && E.plugins.some((P) => Ue(P, g, g)), R = await SZn(v.join(f, "plugin.json"), { kind: _ ? "anthropic" : "alone" });
  if (R.errors[0]?.code === "ENOENT") {
    let P = ye([...x, ...await Oe(g, [...await pt(g), ...A])]);
    return { manifest: r, contents: P, resolvedPath: a, pluginRoot: null };
  }
  let b = R.errors.length > 0 || R.warnings.length > 0 || (R.notes?.length ?? 0) > 0;
  return { manifest: r, contents: ye([...x, ...b ? [R] : [], ...await C6o(g, s, o), ...await Oe(g, A.filter((P) => P !== g))]), resolvedPath: a, pluginRoot: g };
}
async function Se(e) {
  return (0, import_chunk_nb21njpa.QW)(e).catch(() => {
    return;
  });
}
function Ie(e) {
  return (0, import_chunk_ma3kja9f.T)(e) ? e : void 0;
}
function ve(e) {
  try {
    return Ie((0, import_chunk_w578pjby.te)(e));
  } catch {
    return;
  }
}
function ut(e, s, o) {
  let r = [];
  for (let [a, p] of Object.entries(e)) {
    let f = Ie(p);
    if (!f || typeof f.command !== "string") continue;
    let g = f.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
    if (g === void 0 || s.has(g) || o.has(g)) continue;
    let h = Gf(a, 64), S = Gf(g, 64);
    r.push({ path: `mcpServers.${h}`, message: `bin/${S} is not a shipped file, a declared binaries entry, or a name derivable from the declared entries \u2014 the server will fail to start. Check for a typo against the "binaries" map in plugin.json.` });
  }
  return r;
}
async function Uo(e) {
  if (!await (0, import_chunk_nb21njpa._G)(v.join(e, ".claude-plugin"))) return [];
  let s = v.join(e, ".claude-plugin", "plugin.json"), o = await Se(s);
  if (o === void 0) return [];
  let r = ve((0, import_chunk_0jve1fep.Ys)(o)), a = (0, import_chunk_xcgcdx61.oqn)(r?.binaries);
  if (!r || !a) return [];
  let p = new Set(Object.keys(a));
  for (let R of import_chunk_6mfepmbb.DFl) {
    let b = /* @__PURE__ */ new Map();
    for (let P of Object.keys(a)) {
      let N = (0, import_chunk_6mfepmbb._gn)(P, R);
      if (N !== void 0) b.set(N, (b.get(N) ?? 0) + 1);
    }
    for (let [P, N] of b) if (N === 1) p.add(P);
  }
  let f = v.join(e, "bin"), y = /* @__PURE__ */ new Set();
  if (await (0, import_chunk_nb21njpa._G)(f)) y = await (0, import_promises.readdir)(f).then((R) => new Set(R)).catch(() => /* @__PURE__ */ new Set());
  let g = [];
  function h(R, b) {
    if (b.length > 0) g.push({ success: true, errors: [], warnings: b, filePath: R, fileType: "plugin" });
  }
  let S = v.join(e, ".mcp.json"), k = await Se(S);
  if (k !== void 0) {
    let R = ve(k);
    if (R) {
      let b = Ie(R.mcpServers || R);
      if (b) h(S, ut(b, y, p));
    }
  }
  let x = r.mcpServers, E = x === void 0 ? [] : Array.isArray(x) ? x : [x], A = [], _ = ht;
  for (let R of E) {
    if (typeof R === "string" && _ <= 0) continue;
    if (typeof R === "string") {
      if (_--, !R.startsWith("./") || He(R)) continue;
      let P = v.join(e, R);
      if (await (0, import_chunk_nb21njpa.DP)(e, v.dirname(P)) !== "ok") continue;
      let N = await Se(P);
      if (N === void 0) continue;
      let j = ve(N);
      if (!j) continue;
      let I = Ie(j.mcpServers || j);
      if (I) h(v.join(e, Gf(R, 128)), ut(I, y, p));
      continue;
    }
    let b = Ie(R);
    if (b) A.push(...ut(b, y, p));
  }
  return h(s, A), g;
}
