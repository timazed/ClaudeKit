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
var chunk_7rpgr62h_exports = {};
__export(chunk_7rpgr62h_exports, {
  $Dt: () => $Dt,
  Drr: () => Drr,
  GNa: () => GNa,
  Hrr: () => Hrr,
  c5o: () => c5o,
  d5o: () => d5o,
  iti: () => iti,
  q9r: () => q9r,
  sUe: () => sUe,
  u5o: () => u5o
});
module.exports = __toCommonJS(chunk_7rpgr62h_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var D = __toESM(require("fs/promises"));
var import_os = require("os");
var import_path = require("path");
var import_path2 = require("path");
function Hrr(t) {
  if (t.length > 2048) return "(unparseable remote URL redacted)";
  if (P(t)) return "(unparseable remote URL redacted)";
  if (t.startsWith("//") && t.includes("@")) {
    let e = Hrr(`redacted:${t}`);
    return e.startsWith("redacted:") ? e.slice(9) : e;
  }
  if (!t.includes("://")) {
    let e = t.indexOf("@");
    if (e !== -1) {
      let r = t.slice(e + 1);
      if (r.includes("@")) return "(unparseable remote URL redacted)";
      t = r;
    }
    return /^[\w.~/][\w.:/~-]*$/.test(t) && !/[:/@]-/.test(t) ? t : "(unparseable remote URL redacted)";
  }
  try {
    let e = new URL(t), r = e.pathname.split("/").filter((i) => i.length > 0 && /^[\w.][\w.-]*$/.test(i)).slice(-2).join("/");
    if (!/^[\w.[][\w.:[\]-]*$/.test(e.host)) return "(unparseable remote URL redacted)";
    return `${e.protocol}//${e.host}${r ? `/${r}` : ""}`;
  } catch {
    return "(unparseable remote URL redacted)";
  }
}
function P(t) {
  for (let e of t) if (e <= " " || e > "~" || e === "\\" || e === "%") return true;
  return false;
}
function $Dt(t, e, r, i, n = (0, import_chunk_cg8dqz0a.x)()) {
  if (i(t)) return true;
  if (e === r) return false;
  for (let [u, o] of [[e, r], [r, e]]) {
    let l = M(t, u, o, n);
    if (l !== null && i(l)) return true;
  }
  return false;
}
function M(t, e, r, i) {
  let n = (a) => i === "windows" ? a.toLowerCase() : a, u = n(t), o = n(e);
  if (u === o) return r;
  let l = o.endsWith(import_path2.sep) ? o : o + import_path2.sep;
  if (!u.startsWith(l)) return null;
  return r + t.slice(e.length);
}
var k = 2, q = 4e3, z = 20, j = 5, Y = 8e3, N = 4096, B = 128e3, W = /* @__PURE__ */ new Set([import_chunk_43nz5n02.Vr, "gitlab.com", "bitbucket.org"]), Q = /* @__PURE__ */ new Set([".git", "node_modules", ".oh-my-zsh", ".vim", ".tmux", ".nvm", ".rustup", ".cargo", ".local", ".cache", ".npm", ".gem", ".claude"]), Z = ["onedrive", "dropbox", "google drive"], tt = /* @__PURE__ */ new Set(["appdata", "application data"]), et = /* @__PURE__ */ new Set(["library"]);
async function GNa(t) {
  let e = t?.platform ?? (0, import_chunk_cg8dqz0a.x)(), r = t?.home ?? Drr();
  if (r === null) return { repos: [], limit: "home-unreadable" };
  let i = t?.isReadDenied ?? (() => false), n = t?.thisRepoHost ?? null, u = t?.maxDirsVisited ?? q, o = t?.maxRepos ?? z, l = t?.maxRepoDepth ?? k, a = t?.timeoutMs ?? Y;
  if (sUe(r)) return { repos: [], limit: "network-home" };
  let c = [], s = "none", m = false, d = new AbortController(), w = async () => {
    let f = await D.realpath(r).catch((p) => (0, import_chunk_w5s307zm.g6e)(p) ? r : null);
    if (f === null) {
      s = "home-unreadable";
      return;
    }
    if (sUe(f)) {
      s = "network-home";
      return;
    }
    let h = (p) => $Dt(p, f, r, i, e), L = /* @__PURE__ */ new Set([d5o(f, e)]), b = [{ dir: f, depth: 0 }], v = 0;
    while (b.length > 0) {
      if (m) return;
      if (v >= u) {
        s = "visit-budget";
        return;
      }
      let { dir: p, depth: U } = b.pop();
      v++;
      let C;
      try {
        C = await D.readdir(p, { withFileTypes: true });
      } catch {
        if (p === f) {
          s = "home-unreadable";
          return;
        }
        continue;
      }
      for (let g of C) {
        if (g.isSymbolicLink()) continue;
        if (g.name === ".git") {
          if ((g.isDirectory() || g.isFile()) && !h(p)) {
            let O = await rt((0, import_path.join)(p, ".git"), g.isFile(), f, e, h, n);
            if (m) return;
            if (O !== null) {
              if (c.push({ path: it(p, f, e), ...O }), c.length >= o) {
                s = "repo-cap";
                return;
              }
            }
          }
          continue;
        }
        if (!g.isDirectory() || iti(g.name, e)) continue;
        if (U + 1 > l) continue;
        let y = (0, import_path.join)(p, g.name);
        if (h(y)) continue;
        let I = d5o(y, e);
        if (L.has(I)) continue;
        L.add(I), b.push({ dir: y, depth: U + 1 });
      }
    }
  };
  try {
    await Promise.race([w(), (0, import_chunk_5appeerh.K)(a, d.signal).then(() => {
      if (!d.signal.aborted) m = true, s = "timeout";
    })]);
  } finally {
    d.abort();
  }
  return { repos: c, limit: s };
}
async function rt(t, e, r, i, n, u = null) {
  let o = t;
  if (e) {
    if (n(t)) return { remotes: [] };
    let s = await (0, import_chunk_w5s307zm.$M)(t, N, { noFollow: true, requireNlink1: true }), m = s === null ? null : ot(s);
    if (m === null || T(m, (0, import_path.dirname)(t))) return null;
    if (o = (0, import_path.resolve)((0, import_path.dirname)(t), m), !_(o, r, i)) return { remotes: [], note: "gitdir-outside-home" };
    if (n(o)) return { remotes: [] };
    let d = await H(o, r, i, n);
    if (d === "missing") return null;
    if (d === "refused") return { remotes: [] };
    let w = await (0, import_chunk_w5s307zm.$M)((0, import_path.join)(o, "commondir"), N, { noFollow: true, requireNlink1: true });
    if (w === "") return null;
    let f = w === null ? "" : w.replace(/[\r\n]+$/, "");
    if (f !== "") {
      if (T(f, o)) return null;
      if (o = (0, import_path.resolve)(o, f), !_(o, r, i)) return { remotes: [], note: "gitdir-outside-home" };
      if (n(o)) return { remotes: [] };
      let h = await H(o, r, i, n);
      if (h === "missing") return null;
      if (h === "refused") return { remotes: [] };
    }
  }
  let l = (0, import_path.join)(o, "config");
  if (n(o) || n(l)) return { remotes: [] };
  let a = await (0, import_chunk_w5s307zm.$M)(l, B, { noFollow: true, requireNlink1: true });
  if (a === null) return e ? null : { remotes: [] };
  let c = nt(a, u);
  if (c.length === 0 && (0, import_chunk_kypvvv9j.J8i)(a).length === 0) return { remotes: c, note: "no-remote" };
  return { remotes: c };
}
function nt(t, e = null) {
  let r = [];
  for (let i of (0, import_chunk_kypvvv9j.J8i)(t)) {
    let n = q9r(i, e);
    if (n !== null && !r.includes(n)) {
      if (r.push(n), r.length >= j) break;
    }
  }
  return r;
}
function it(t, e, r) {
  let i = r === "windows", n = (c) => i ? c.toLowerCase() : c;
  if (n(t) === n(e)) return "~";
  let u = i ? "\\" : "/", o = e.endsWith(u) ? e : e + u, l = n(t).startsWith(n(o)) ? t.slice(o.length) : t, a = i ? l.replaceAll("\\", "/") : l;
  return l === t ? a : `~/${a}`;
}
function Drr() {
  try {
    let t = (0, import_os.homedir)();
    return t === "" ? null : t;
  } catch {
    return null;
  }
}
function sUe(t) {
  return (0, import_chunk_z6pfqf6e.$r)(t) && !(0, import_chunk_z6pfqf6e.mc)(t) || (0, import_chunk_z6pfqf6e.vd)(t);
}
function T(t, e) {
  return (0, import_chunk_z6pfqf6e.vd)(t) || (0, import_chunk_z6pfqf6e.vd)((0, import_path.resolve)(e, t)) || (0, import_chunk_z6pfqf6e.fa)(t, e) || (0, import_chunk_w5s307zm.Rg)(t, e);
}
function _(t, e, r) {
  let i = (0, import_path.relative)(e, t), n = r === "windows" ? i.toLowerCase() : i;
  return n !== "" && n !== ".." && !n.startsWith(".." + import_path.sep) && !(0, import_path.isAbsolute)(n);
}
async function H(t, e, r, i) {
  try {
    let n = await D.realpath(t);
    if (!_(n, e, r) || i(n) || i((0, import_path.join)(n, "config"))) return "refused";
    return "allowed";
  } catch (n) {
    return (0, import_chunk_jv7av99m.J)(n) ? "missing" : "refused";
  }
}
function iti(t, e) {
  if (Q.has(t)) return true;
  let r = t.toLowerCase();
  if (Z.some((i) => r === i || r.startsWith(i + " "))) return true;
  if (e === "windows" && tt.has(r)) return true;
  return e === "macos" && et.has(r);
}
function d5o(t, e) {
  return e === "windows" ? t.toLowerCase() : t;
}
function ot(t) {
  if (!t.startsWith("gitdir: ")) return null;
  let e = t.slice(8).replace(/[\r\n]+$/, "");
  return e === "" ? null : e;
}
function c5o(t) {
  return t.length > 0 && t.length <= 100 && /^[\w.][\w.-]*$/.test(t) && /\w/.test(t);
}
function q9r(t, e) {
  if (P(t)) return null;
  let r = e !== null && c5o(e) ? /* @__PURE__ */ new Set([...W, e.toLowerCase()]) : W, i, n;
  if (t.includes("://")) {
    let s;
    try {
      s = new URL(t);
    } catch {
      return null;
    }
    if (s.password !== "") return null;
    if (s.protocol === "https:") {
      if (s.username !== "") return null;
    } else if (s.protocol === "ssh:" || s.protocol === "git:") {
      if (s.username !== "" && s.username !== "git") return null;
    } else return null;
    if (s.port !== "") return null;
    i = s.hostname, n = s.pathname;
  } else {
    let s = t.indexOf(":");
    if (s <= 0) return null;
    let m = t.slice(0, s);
    if (!m.startsWith("git@")) return null;
    i = m.slice(4);
    let d = t.slice(s + 1);
    n = d.startsWith("/") ? d : `/${d}`;
  }
  if (!r.has(i.toLowerCase())) return null;
  let u = n.replace(/\.git\/?$/i, ""), o = (u.endsWith("/") ? u.slice(0, -1) : u).split("/");
  if (o.length !== 3 || o[0] !== "") return null;
  let l = o.slice(1);
  if (!l.every(c5o)) return null;
  let [a, c] = l;
  return `${i.toLowerCase()}/${a}/${c}`;
}
function u5o(t) {
  return t.replace(/\n$/, "");
}
