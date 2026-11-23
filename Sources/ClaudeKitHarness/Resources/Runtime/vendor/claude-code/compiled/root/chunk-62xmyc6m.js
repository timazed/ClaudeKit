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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
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
var chunk_62xmyc6m_exports = {};
__export(chunk_62xmyc6m_exports, {
  A8l: () => A8l,
  E6s: () => E6s,
  H2r: () => H2r,
  Ry: () => Ry,
  Ykn: () => Ykn,
  _x: () => _x,
  ajo: () => ajo,
  jXn: () => jXn,
  k6s: () => k6s,
  ljo: () => ljo,
  tet: () => tet,
  w6s: () => w6s
});
module.exports = __toCommonJS(chunk_62xmyc6m_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_dhf55fzk = require("/$bunfs/root/chunk-dhf55fzk.js");
var import_chunk_a5v5cv8j = require("/$bunfs/root/chunk-a5v5cv8j.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_path = __toESM(require("path"));
var import_promises = require("fs/promises");
var import_path2 = __toESM(require("path"));
var import_path3 = __toESM(require("path"));
var import_net = require("net");
(0, import_chunk_adx6804h.B)();
var T = 120;
function U(e) {
  return e.length > T ? `${(0, import_chunk_7cfjrnwy.ee)(e, T)}...` : e;
}
function Ry(e) {
  return (0, import_chunk_kx2fp6pc.F4t)((0, import_chunk_w578pjby._)(U(e)));
}
function w6s(e) {
  if (typeof e === "string") return Ry(e);
  let t = (0, import_chunk_w578pjby._)(e) ?? String(e);
  return t.length <= T ? (0, import_chunk_kx2fp6pc.F4t)(t) : (0, import_chunk_kx2fp6pc.F4t)((0, import_chunk_w578pjby._)(U(t)));
}
async function _x(e, t, r, s = []) {
  let o = import_path2.default.resolve(e, t), i = Ry(t), a = [e, ...s];
  if ((0, import_chunk_z6pfqf6e.KS)(t) && !(0, import_chunk_z6pfqf6e.vd)(t) || (0, import_chunk_z6pfqf6e.KS)(o) && !(0, import_chunk_z6pfqf6e.vd)(o)) throw new import_chunk_jv7av99m.A(`${r}: ${i} is an automounter path (macOS /Network, or the bare /net root) \u2014 refusing it (a lookup there is a network request)`, "plugin eval: a repo-authored path is an automounter path \u2014 refusing it");
  let u = (0, import_chunk_z6pfqf6e.mc)(o) || (0, import_chunk_z6pfqf6e.mc)(t) && !(0, import_chunk_z6pfqf6e.fa)(o, e);
  if ((0, import_chunk_z6pfqf6e.fa)(t, e) && s.every((h) => (0, import_chunk_z6pfqf6e.fa)(o, h)) && !u) throw new import_chunk_jv7av99m.A(`${r}: ${i} is a network-reaching path (UNC / automount) \u2014 refusing it`, "plugin eval: a repo-authored path is network-reaching \u2014 refusing it");
  let m, y = await (0, import_chunk_w578pjby._$)(import_chunk_w578pjby.Cv, o, { anchors: a, ...(0, import_chunk_w578pjby.sy)(), onOutcome: (h) => {
    if (h.kind === "resolved") m = h.path;
  } });
  if (y === import_chunk_w578pjby.II) throw new import_chunk_jv7av99m.A(`${r}: ${i} passes through a link whose target the operating system may resolve to a different folder than the one Claude Code checked (for example, a target that is not valid UTF-8, or on Windows one with ".." after a folder name or too many links in a row) \u2014 refusing it. Point each link on the way straight at its folder with a plain full path`, "plugin eval: a repo-authored path has a link the OS may resolve elsewhere \u2014 refusing it");
  if (y === import_chunk_w578pjby.Pg) throw new import_chunk_jv7av99m.A(`${r}: ${i} passes through a component that cannot be examined (unreadable, a link or junction whose target does not exist, or a symlink chain too long to follow) \u2014 refusing it (it could not be vetted)`, "plugin eval: a repo-authored path has an unexaminable component \u2014 refusing it");
  if (y !== void 0) throw new import_chunk_jv7av99m.A(`${r}: ${i} passes through a symlink to a network-reaching path (or a dotted one that cannot be vetted) \u2014 refusing it`, "plugin eval: a repo-authored path links to a network-reaching path \u2014 refusing it");
  if (m !== void 0 && (0, import_chunk_z6pfqf6e.Z8)(m)) throw new import_chunk_jv7av99m.A(`${r}: ${i} leads to an automounter map directory (/net, /net/<host>; macOS /Network, /home) \u2014 refusing it (naming anything in it asks the automounter or a host)`, "plugin eval: a repo-authored path lands on an automounter map directory \u2014 refusing it");
}
var re = 8192, H = 5e7, ne = /^[is]*$/;
function G(e) {
  let r = 0, s = 1, o = 0, i = false, a = false, u = false;
  for (let l = 0; l < e.length; l++) {
    let f = e[l];
    if (f === "(" || f === ")" || f === "|") return { problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
    if (f === "^") {
      if (l !== 0) return { problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
      i = true, a = false, u = false;
      continue;
    }
    if (f === "$") {
      if (l !== e.length - 1) return { problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
      continue;
    }
    let b = null;
    if (f === "*") b = { lo: 0, hi: 1 / 0 };
    else if (f === "+") b = { lo: 1, hi: 1 / 0 };
    else if (f === "?") {
      if (u) {
        u = false;
        continue;
      }
      b = { lo: 0, hi: 1 };
    } else if (f === "{") {
      let g = /^\{(\d+)(?:,(\d*))?\}/.exec(e.slice(l));
      if (g) {
        let k = Number(g[1]), S = g[2] === void 0 ? k : g[2] === "" ? 1 / 0 : Number(g[2]);
        if (S < k) return { problem: `quantifier ${g[0]} has max < min` };
        b = { lo: k, hi: S }, l += g[0].length - 1;
      }
    }
    if (b !== null) {
      if (!a) return { problem: "a quantifier must follow a single character, escape, or class" };
      if (o += (b.hi === 1 / 0 ? b.lo : b.hi) - 1, b.hi === 1 / 0) r++;
      else s *= b.hi - b.lo + 1;
      a = false, u = true;
      continue;
    }
    if (u = false, f === "\\") {
      let g = e[l + 1];
      if (g === void 0) return { problem: "pattern ends with a lone backslash" };
      if (/[1-9]/.test(g) || g === "k") return { problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead' };
      if (a = g !== "b" && g !== "B", a) o++;
      l++;
      continue;
    }
    if (f === "[") {
      l++;
      while (l < e.length && e[l] !== "]") {
        if (e[l] === "\\") l++;
        l++;
      }
      if (l >= e.length) return { problem: "unterminated character class" };
      a = true, o++;
      continue;
    }
    a = true, o++;
  }
  if (s > H) return { problem: "too many optional/bounded repeats for an expect: guard" };
  let m = (l) => {
    let f = 1;
    for (let b = 1; b <= r; b++) f = f * (l + b) / b;
    return (i ? 1 : Math.max(1, l)) * f * s * (l + o);
  }, y = 0, h = re;
  while (y < h) {
    let l = Math.ceil((y + h) / 2);
    if (m(l) <= H) y = l;
    else h = l - 1;
  }
  if (y < 16) return { problem: "this combination of repeats leaves no useful subject length under the matching budget \u2014 use fewer quantifiers" };
  return { maxSubject: y, problem: null };
}
var oe = /* @__PURE__ */ new Set(["string", "number", "bool", "boolean", "object", "array"]);
function O(e, t) {
  let r = e;
  for (let s of t.split(".")) {
    if (r === null || typeof r !== "object") return;
    if (Array.isArray(r)) {
      if (!/^\d+$/.test(s)) return;
      r = r[Number(s)];
      continue;
    }
    r = Object.hasOwn(r, s) ? r[s] : void 0;
  }
  return r;
}
function Ykn(e, t, r = "") {
  for (let [s, o] of Object.entries(t)) {
    let i = r ? `${r}.${s}` : s, a = O(e, i), u = se(a, o, i, e);
    if (u !== null) return u;
  }
  return null;
}
function se(e, t, r, s) {
  if (Array.isArray(t)) return t.some((i) => D(e, i)) ? null : `${r} = ${z(e)} is not one of [${t.join(", ")}]`;
  if (typeof t === "object" && t !== null) return Ykn(s, t, r);
  let o = X(t);
  if (o !== null) {
    let i = typeof e === "string" ? e : typeof e === "number" || typeof e === "boolean" ? String(e) : null, a = G(o.source);
    if (!("maxSubject" in a)) return `${r}: ${t} is not a usable guard (${a.problem})`;
    let u = a.maxSubject;
    if (i !== null && i.length > u) return `${r} is ${i.length} characters, more than this /regex/ guard checks (${u})`;
    return i !== null && o.test(i) ? null : `${r} = ${z(e)} does not match ${t}`;
  }
  if (oe.has(t)) {
    let i = t === "boolean" ? "bool" : t;
    return ae(e) === i ? null : `${r} = ${z(e)} is not a ${t}`;
  }
  return D(e, t) ? null : `${r} = ${z(e)} is not "${t}"`;
}
function D(e, t) {
  if (typeof e === "string") return e === t;
  if (typeof e === "number" || typeof e === "boolean") return String(e) === t;
  return false;
}
function X(e) {
  let t = /^\/(.+)\/([a-z]*)$/s.exec(e);
  if (!t) return null;
  return new RegExp(t[1] ?? "", t[2] ?? "");
}
function ae(e) {
  if (Array.isArray(e)) return "array";
  if (e === null || e === void 0) return "missing";
  if (typeof e === "boolean") return "bool";
  return typeof e;
}
function z(e) {
  if (e === void 0) return "(missing)";
  let t = (0, import_chunk_w578pjby._)(e);
  return t.length > 80 ? `${(0, import_chunk_7cfjrnwy.ee)(t, 77)}...` : t;
}
var j = 32;
function k6s(e, t = "") {
  let r = [];
  if (t === "") {
    let s = q(e);
    if (s > j) return r.push(`expect: ${s} guards is more than the ${j} one responder may carry \u2014 every call checks each of them; keep the ones that catch a wrong call`), r;
  }
  for (let [s, o] of Object.entries(e)) {
    let i = t ? `${t}.${s}` : s;
    if (Array.isArray(o)) {
      if (o.length === 0) r.push(`expect.${i}: an empty list of allowed values can never be satisfied \u2014 list at least one`);
      continue;
    }
    if (typeof o === "object" && o !== null) {
      r.push(...k6s(o, i));
      continue;
    }
    if (/^\/.*\/[a-z]*$/s.test(o)) try {
      let a = X(o), u = a ? G(a.source) : null;
      if (a && !ne.test(a.flags)) r.push(`expect.${i}: ${o} \u2014 only the i and s flags are supported in expect: guards`);
      else if (u && u.problem !== null) r.push(`expect.${i}: ${o} \u2014 ${u.problem}`);
    } catch (a) {
      r.push(`expect.${i}: invalid regular expression ${o} (${a instanceof Error ? a.message : String(a)}) \u2014 a value written /like this/ is read as a regex; for a literal that starts and ends with a slash, write a one-element list: ["${o}"]`);
    }
  }
  return r;
}
var le = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/;
async function ajo(e, t, r, s, o = Number.POSITIVE_INFINITY) {
  let i = null, a = [], u = 0;
  for (let y of e.matchAll(/\{\{\s*(input\.[A-Za-z0-9_.-]+|file:(?:[^{}]|\{input\.[A-Za-z0-9_.-]+\})+?)\s*\}\}/g)) {
    a.push(e.slice(u, y.index)), u = y.index + y[0].length;
    let h = y[1] ?? "";
    if (h.startsWith("input.")) {
      let g = O(t, h.slice(6)), k = g === void 0 ? "" : typeof g === "string" ? g : (0, import_chunk_w578pjby._)(g);
      a.push(k.length > o ? `${(0, import_chunk_7cfjrnwy.ee)(k, o)}\u2026 [${k.length - o} more characters omitted]` : k);
      continue;
    }
    let l = h.slice(5).trim(), f = null;
    if (l = l.replace(/\{input\.([A-Za-z0-9_.-]+)\}/g, (g, k) => {
      let S = O(t, k), M = S === void 0 || S === null ? "" : String(S);
      if (!le.test(M)) f = `{input.${k}} = ${z(S)} is not a plain file-name segment`;
      return M;
    }), f !== null) {
      i ??= f;
      continue;
    }
    let b = import_path3.default.resolve(r, l);
    if (!ce(r, b)) {
      i ??= `{{file:${l}}} names a path outside the mock's directory`;
      continue;
    }
    a.push(s(b).then((g) => {
      if (typeof g !== "string") return i ??= `{{file:${l}}}: ${g.problem}`, "";
      return g;
    }));
  }
  a.push(e.slice(u));
  let m = await Promise.all(a);
  if (i !== null) return { ok: false, reason: i };
  return { ok: true, text: m.join("") };
}
function ce(e, t) {
  let r = import_path3.default.relative(e, t);
  return r !== "" && !r.startsWith("..") && !import_path3.default.isAbsolute(r);
}
function q(e) {
  let t = 0;
  for (let r of Object.values(e)) if (t += typeof r === "object" && r !== null && !Array.isArray(r) ? q(r) : 1, t > j) break;
  return t;
}
(0, import_chunk_adx6804h.B)();
var jXn = "eval aborted by mock", tet = "mock agent responder failed";
var fe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ verdict: (0, import_chunk_adx6804h.F)(["ok", "tool_error", "abort"]), text: (0, import_chunk_adx6804h.n)(), replay: (0, import_chunk_adx6804h.F)(["hit", "miss"]).optional() })), ge = 4194304;
async function W(e, t, r) {
  try {
    let s = await me(e.socketPath, `${(0, import_chunk_w578pjby._)({ token: e.token, ...t })}
`, r);
    return fe().parse((0, import_chunk_w578pjby.te)(s));
  } catch (s) {
    return process.stderr.write(`eval mock stand-in: agent relay failed: ${(0, import_chunk_jv7av99m.d)(s)}
`), { verdict: "abort", text: `${tet} (harness_unreachable) \u2014 see the eval debug log` };
  }
}
function me(e, t, r) {
  return new Promise((s, o) => {
    if (r.aborted) {
      o(Error("aborted"));
      return;
    }
    let i = (0, import_net.createConnection)({ path: e }), a = Buffer.alloc(0), u = false, m = (h, l) => {
      if (u) return;
      if (u = true, r.removeEventListener("abort", y), i.destroy(), h !== null) o(h);
      else s(l ?? "");
    }, y = () => m(Error("aborted"));
    r.addEventListener("abort", y, { once: true }), i.once("connect", () => i.write(t)), i.on("data", (h) => {
      if (a = Buffer.concat([a, h]), a.length > ge) {
        m(Error("relay response too large"));
        return;
      }
      let l = a.indexOf(10);
      if (l !== -1) m(null, a.subarray(0, l).toString("utf8"));
    }), i.once("error", (h) => m(h)), i.once("close", () => m(Error("harness closed the relay without answering")));
  });
}
var be = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.xI)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e)])), t = (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e).nullable(), r = (0, import_chunk_adx6804h.zn)("kind", [(0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.v)("fixed"), body: (0, import_chunk_adx6804h.n)(), isError: (0, import_chunk_adx6804h.P)(), expect: t, baseDir: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.v)("agent"), prompt: (0, import_chunk_adx6804h.n)(), abortWhen: (0, import_chunk_adx6804h.n)().nullable(), expect: t, baseDir: (0, import_chunk_adx6804h.n)(), replay: (0, import_chunk_adx6804h.c)({ mockHash: (0, import_chunk_adx6804h.n)(), replayDir: (0, import_chunk_adx6804h.n)(), pinned: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()) }).default({ mockHash: "", replayDir: "", pinned: {} }) })]);
  return (0, import_chunk_adx6804h.c)({ registeredName: (0, import_chunk_adx6804h.n)(), server: (0, import_chunk_adx6804h.n)(), nonce: (0, import_chunk_adx6804h.n)(), callLogPath: (0, import_chunk_adx6804h.n)(), tools: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)(), inputSchema: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()) })), responders: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), r), agent: (0, import_chunk_adx6804h.c)({ socketPath: (0, import_chunk_adx6804h.n)(), token: (0, import_chunk_adx6804h.n)() }).nullable() });
}), V = 1048576;
async function A8l(e, t) {
  if (!e) throw Error("missing spec path");
  let r = await $e(e);
  if (t !== void 0 && (0, import_crypto.createHash)("sha256").update(r).digest("hex") !== t) throw Error("spec file does not match the hash the harness launched this stand-in with \u2014 refusing to serve it");
  let s = Se(r), o = ye(s), i = new import_chunk_a5v5cv8j.Bht(import_chunk_w578pjby.Cs, import_chunk_w578pjby.fP);
  if (!await K(s.callLogPath, (0, import_chunk_w578pjby._)({ ready: s.nonce, server: s.server }))) throw Error("could not write the identity line to the run call log \u2014 refusing to serve unidentified");
  await o.connect(i), process.stdin.on("end", () => void o.close()), process.stdin.on("error", () => void o.close());
}
function ye(e) {
  let t = 0, r = new AbortController(), s = { spec: e, signal: r.signal }, o = new import_chunk_dhf55fzk.Lht({ name: `eval-mock/${e.server}`, version: "1" }, { capabilities: { tools: {} } });
  o.onclose = () => r.abort(), o.setRequestHandler("tools/list", async () => ({ tools: e.tools.map((u) => ({ name: u.name, description: u.description, inputSchema: { type: "object", ...u.inputSchema } })) }));
  let i = Promise.resolve();
  o.setRequestHandler("tools/call", (u) => {
    let m = i.then(() => a(u.params));
    return i = m.catch(() => {
    }), m;
  });
  async function a(u) {
    let m = u.name, y = u.arguments ?? {}, h = Date.now(), l = Object.hasOwn(e.responders, m) ? e.responders[m] : void 0, f = l === void 0 ? { verdict: "tool_error", text: `no mock for ${e.server}/${m}` } : await we(l, y, s, m), b = { nonce: e.nonce, seq: t++, server: e.server, tool: m, responder: l?.kind ?? "fixed", input: ke(y), verdict: f.verdict, output: Y(f.text), ms: Date.now() - h, ...f.replay && { replay: f.replay } };
    if (!await K(e.callLogPath, (0, import_chunk_w578pjby._)(b)) && f.verdict === "abort") process.stderr.write(`eval mock stand-in: could not write the abort record to the call log
`);
    switch (f.verdict) {
      case "ok":
        return { content: [{ type: "text", text: H2r(f.text) }] };
      case "tool_error":
        return { content: [{ type: "text", text: H2r(f.text) }], isError: true };
      case "abort":
        return { content: [{ type: "text", text: `${jXn} ${e.nonce}: ${e.server}/${m} \u2014 ${f.text}` }], isError: true };
    }
  }
  return o;
}
async function we(e, t, r, s = "") {
  if (e.expect !== null) {
    let o = Ykn(t, e.expect);
    if (o !== null) return { verdict: "abort", text: `input violates expect: ${o}` };
  }
  switch (e.kind) {
    case "agent": {
      if (!r || r.spec.agent === null) return { verdict: "tool_error", text: "agent mock responder called without a harness relay" };
      return W(r.spec.agent, { registeredName: r.spec.registeredName, tool: s, input: t }, r.signal);
    }
    case "fixed": {
      let o = await ajo(e.body, t, e.baseDir, ljo);
      if (!o.ok) return { verdict: "tool_error", text: o.reason };
      return { verdict: e.isError ? "tool_error" : "ok", text: o.text };
    }
  }
}
async function ljo(e) {
  try {
    await _x(import_path.default.dirname(e), import_path.default.basename(e), "mock fixture");
    let t = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | ((0, import_chunk_cg8dqz0a.x)() === "windows" ? 0 : import_fs.constants.O_NONBLOCK));
    try {
      let r = await t.stat();
      if (!r.isFile()) return { problem: "is not a regular file" };
      if (r.size > V) return { problem: `is ${r.size} bytes, over the ${V}-byte fixture limit` };
      return (await Z(t, r.size)).toString("utf8");
    } finally {
      await t.close();
    }
  } catch (t) {
    return { problem: (0, import_chunk_jv7av99m.J)(t) ? "no such fixture" : `could not be read (${(0, import_chunk_jv7av99m.w)(t) ?? (0, import_chunk_jv7av99m.d)(t)})` };
  }
}
var E6s = 16384, L = 16384;
function Y(e) {
  return e.length > L ? `${(0, import_chunk_7cfjrnwy.ee)(e, L)}\u2026[truncated]` : e;
}
function ke(e) {
  let t = (0, import_chunk_w578pjby._)(e) ?? "";
  return t.length > L ? Y(t) : e;
}
async function K(e, t) {
  try {
    let r = import_fs.constants.O_WRONLY | import_fs.constants.O_APPEND | import_fs.constants.O_CREAT | ((0, import_chunk_cg8dqz0a.x)() === "windows" ? 0 : import_fs.constants.O_NONBLOCK), s = await (0, import_promises.open)(e, r, 384);
    try {
      if (!(await s.stat()).isFile()) return false;
      let o = Buffer.from(`${t}
`, "utf8"), i = 0;
      while (i < o.length) {
        let { bytesWritten: a } = await s.write(o, i);
        if (a <= 0) return false;
        i += a;
      }
      return true;
    } finally {
      await s.close();
    }
  } catch {
    return false;
  }
}
async function Z(e, t) {
  let r = Buffer.alloc(t), s = 0;
  while (s < t) {
    let { bytesRead: o } = await e.read({ buffer: r, offset: s, position: s });
    if (o <= 0) break;
    s += o;
  }
  return r.subarray(0, s);
}
function H2r(e) {
  return Ee.test(e.trimStart()) ? `${xe}${e.trimStart()}` : e;
}
var xe = "| ", Ee = new RegExp(`^(?:${jXn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|MCP server "|MCP error -32000: Connection closed)`);
function Se(e) {
  return be().parse((0, import_chunk_w578pjby.te)(e));
}
var ve = 4194304;
async function $e(e) {
  await _x(import_path.default.dirname(e), import_path.default.basename(e), "mock spec");
  let t = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | ((0, import_chunk_cg8dqz0a.x)() === "windows" ? 0 : import_fs.constants.O_NONBLOCK));
  try {
    let r = await t.stat();
    if (!r.isFile()) throw Error("spec path is not a regular file \u2014 refusing to read it");
    if (r.size > ve) throw Error("spec file is over the size limit the harness writes \u2014 refusing to read it");
    return (await Z(t, r.size)).toString("utf8");
  } finally {
    await t.close();
  }
}
