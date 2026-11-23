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
var chunk_a152y2zc_exports = {};
__export(chunk_a152y2zc_exports, {
  K9a: () => K9a,
  TQ: () => TQ,
  V9a: () => V9a,
  nHn: () => nHn,
  q9a: () => q9a,
  woo: () => woo
});
module.exports = __toCommonJS(chunk_a152y2zc_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
class I {
  script = void 0;
  owner = void 0;
  store(a, e) {
    this.script = a, this.owner = e;
  }
  reset() {
    this.script = void 0, this.owner = void 0;
  }
}
var O = new import_chunk_2904xtvq.j(() => new I());
function P() {
  return O.of((0, import_chunk_f9x2f6cx.N)().host);
}
async function woo(a = (0, import_chunk_f9x2f6cx.W)()) {
  let e = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "session-env", a);
  return await (0, import_chunk_w578pjby.le)().mkdir(e), e;
}
function C(a, e) {
  return import_chunk_hkvzj051.at.userConfigDir("session-env", [a, e]);
}
async function _(a, e) {
  let o = [], n;
  do {
    let c = await a.listEntries({ namespace: "userConfigDir", dir: "session-env", relPath: [e] }, n === void 0 ? void 0 : { cursor: n });
    if (!c.ok) return { error: c.error };
    for (let r of c.value.items) {
      if (r.kind !== "key" || r.key.namespace !== "userConfigDir") continue;
      let i = r.key.relPath.at(-1);
      if (i !== void 0) o.push(i);
    }
    n = c.value.cursor;
  } while (n !== void 0);
  return o;
}
async function V9a(a, e, o) {
  let n = a.toLowerCase();
  return (0, import_path.join)(await woo(o), `${n}-hook-${e}.sh`);
}
async function K9a(a) {
  if ((0, import_chunk_m15w38ag.ne)() && a !== void 0) {
    let e = (0, import_chunk_f9x2f6cx.W)(), o = await _(a, e);
    if (!Array.isArray(o)) {
      (0, import_chunk_w578pjby.t)(`Failed to clear cwd env files: ${(0, import_chunk_7n1spq36.un)(o.error)}`);
      return;
    }
    let n = o.filter((r) => (r.startsWith("filechanged-hook-") || r.startsWith("cwdchanged-hook-")) && p.test(r)), c = await Promise.all(n.map((r) => a.write(C(e, r), "", { publishDiscipline: "inPlace" })));
    for (let r of c) if (!r.ok) (0, import_chunk_w578pjby.t)(`Failed to clear cwd env files: ${(0, import_chunk_7n1spq36.un)(r.error)}`);
    return;
  }
  try {
    let e = await woo(), o = await (0, import_promises.readdir)(e);
    await Promise.all(o.filter((n) => (n.startsWith("filechanged-hook-") || n.startsWith("cwdchanged-hook-")) && p.test(n)).map((n) => (0, import_promises.writeFile)((0, import_path.join)(e, n), "")));
  } catch (e) {
    if ((0, import_chunk_jv7av99m.w)(e) !== "ENOENT") (0, import_chunk_w578pjby.t)(`Failed to clear cwd env files: ${(0, import_chunk_jv7av99m.d)(e)}`);
  }
}
function TQ() {
  (0, import_chunk_w578pjby.t)("Invalidating session environment cache"), P().reset();
}
async function nHn(a) {
  let e = (0, import_chunk_f9x2f6cx.W)(), o = P();
  if (o.script !== void 0 && o.owner === e) return o.script;
  let n = [], c = import_chunk_c203g5kd.s.CLAUDE_ENV_FILE;
  if (c) try {
    let i = (await (0, import_promises.readFile)(c, "utf8")).trim();
    if (i) n.push(i), (0, import_chunk_w578pjby.t)(`Session environment loaded from CLAUDE_ENV_FILE: ${c} (${i.length} chars)`);
  } catch (i) {
    if ((0, import_chunk_jv7av99m.w)(i) !== "ENOENT") (0, import_chunk_w578pjby.t)(`Failed to read CLAUDE_ENV_FILE: ${(0, import_chunk_jv7av99m.d)(i)}`);
  }
  if ((0, import_chunk_m15w38ag.ne)() && a !== void 0) {
    let i = await _(a, e);
    if (!Array.isArray(i)) (0, import_chunk_w578pjby.t)(`Failed to load session environment from hooks: ${(0, import_chunk_7n1spq36.un)(i.error)}`);
    else {
      let u = i.filter((m) => p.test(m)).sort(y);
      if (u.length > 0) {
        let m = await Promise.all(u.map((f) => a.read([C(e, f)])));
        for (let f = 0; f < u.length; f++) {
          let h = m[f];
          if (!h.ok) {
            (0, import_chunk_w578pjby.t)(`Failed to read hook file ${u[f]}: ${(0, import_chunk_7n1spq36.un)(h.error)}`);
            continue;
          }
          let v = h.value.items[0];
          if (!v?.found) continue;
          let E = Buffer.from(v.value).toString("utf-8").trim();
          if (E) n.push(E);
        }
        (0, import_chunk_w578pjby.t)(`Session environment loaded from ${u.length} hook file(s)`);
      }
    }
    if (n.length === 0) return (0, import_chunk_w578pjby.t)("No session environment scripts found"), o.store(null, e), null;
    let l = n.join(`
`);
    return o.store(l, e), (0, import_chunk_w578pjby.t)(`Session environment script ready (${l.length} chars total)`), l;
  }
  try {
    let i = await woo(), u = (await (0, import_promises.readdir)(i)).filter((m) => p.test(m)).sort(y);
    for (let m of u) {
      let f = (0, import_path.join)(i, m);
      try {
        let h = (await (0, import_promises.readFile)(f, "utf8")).trim();
        if (h) n.push(h);
      } catch (h) {
        if ((0, import_chunk_jv7av99m.w)(h) !== "ENOENT") (0, import_chunk_w578pjby.t)(`Failed to read hook file ${f}: ${(0, import_chunk_jv7av99m.d)(h)}`);
      }
    }
    if (u.length > 0) (0, import_chunk_w578pjby.t)(`Session environment loaded from ${u.length} hook file(s)`);
  } catch (i) {
    if ((0, import_chunk_jv7av99m.w)(i) !== "ENOENT") (0, import_chunk_w578pjby.t)(`Failed to load session environment from hooks: ${(0, import_chunk_jv7av99m.d)(i)}`);
  }
  if (n.length === 0) return (0, import_chunk_w578pjby.t)("No session environment scripts found"), o.store(null, e), null;
  let r = n.join(`
`);
  return o.store(r, e), (0, import_chunk_w578pjby.t)(`Session environment script ready (${r.length} chars total)`), r;
}
var A = /^(?:\s*(?:#.*)?|(?:export +|declare -x +)?([A-Za-z_]\w*)=((?:[\w@%+=:,./-]|'[^'\0]*'|"(?:[^"\\$`\0]|\\[^\0])*")*))$/, H = /'([^']*)'|"((?:[^"\\]|\\.)*)"/g, L = /[/\\]/;
async function q9a(a) {
  let e = await nHn(a), o = /* @__PURE__ */ new Map();
  for (let n of e?.split(`
`) ?? []) {
    let c = A.exec(n.trimEnd());
    if (c === null) return (0, import_chunk_w578pjby.t)("Session environment is not all plain assignments"), /* @__PURE__ */ new Map();
    let [, r, i] = c;
    if (r === void 0 || i === void 0) continue;
    let l = i.replace(H, (u, m, f) => m ?? f?.replace(/\\([$`"\\])/g, "$1") ?? "");
    if ((0, import_chunk_cg8dqz0a.x)() === "windows" && L.test(l)) o.delete(r);
    else o.set(r, l);
  }
  return o;
}
var k = { setup: 0, sessionstart: 1, cwdchanged: 2, filechanged: 3 }, p = /^(setup|sessionstart|cwdchanged|filechanged)-hook-(\d+)\.sh$/;
function y(a, e) {
  let o = a.match(p), n = e.match(p), c = o?.[1] || "", r = n?.[1] || "";
  if (c !== r) return (k[c] ?? 99) - (k[r] ?? 99);
  let i = parseInt(o?.[2] || "0", 10), l = parseInt(n?.[2] || "0", 10);
  return i - l;
}
