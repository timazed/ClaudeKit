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
var chunk_x6p49xr0_exports = {};
__export(chunk_x6p49xr0_exports, {
  $Vo: () => $Vo,
  WOa: () => WOa,
  Z8s: () => Z8s,
  e7t: () => e7t,
  eYs: () => eYs,
  jOa: () => jOa,
  nYs: () => nYs,
  ner: () => ner,
  t7t: () => t7t,
  tYs: () => tYs
});
module.exports = __toCommonJS(chunk_x6p49xr0_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ps79f44q = require("/$bunfs/root/chunk-ps79f44q.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_m4k4ejs3 = require("/$bunfs/root/chunk-m4k4ejs3.js");
var import_chunk_jc9v3hv0 = require("/$bunfs/root/chunk-jc9v3hv0.js");
var import_chunk_przefx11 = require("/$bunfs/root/chunk-przefx11.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var X = /^(?:SKILL\.md|artifact-type\/reference\/[A-Za-z0-9][A-Za-z0-9._-]{0,63}\.md)$/, B = 1048576, C = 8388608, N = 100, R = 12, Y = 1500, e7t = 32, K = 8, $Vo = ["README.md", "tokens.json", "components/index.d.ts", "manifest.json", "tokens.css", "api/tokens.md"];
function t7t(e, r) {
  return e.find((o) => o.path === `project/${r}`) ?? e.find((o) => o.path === r);
}
var U = /^[A-Za-z0-9_@][A-Za-z0-9._@+-]{0,63}$/, V = 160, q = /\.(?:woff2?|ttf|otf|eot)$/i, J = /\.(?:png|jpe?g|gif|webp|avif|ico)$/i;
function Q(e) {
  return e.reduce((r, o) => r + o.sizeBytes > C ? r : r + o.sizeBytes, 0);
}
function k(e) {
  return (0, import_chunk_p1ewvgeh.Yo)(e.normalize("NFC").toUpperCase().toLowerCase());
}
function ee(e) {
  let r = k(e).replace(/^project\//, "");
  return $Vo.some((o) => k(o) === r);
}
function Z8s(e) {
  return q.test(e);
}
function ner(e) {
  return Z8s(e.path) || e.contentType.toLowerCase().startsWith("font/");
}
function eYs(e, r) {
  let o = e.contentType.toLowerCase();
  return e.path.length > V || !e.path.split("/").every((i) => U.test(i)) ? "unusual name" : ner(e) && (!r || ee(e.path)) ? "font file" : J.test(e.path) || o.startsWith("image/") && !o.startsWith("image/svg") ? "image file" : /^(?:audio|video)\//.test(o) || o === "application/zip" || o === "application/pdf" ? "binary file" : e.live === true ? "live file" : e.sizeBytes > B ? "over 1 MB" : void 0;
}
async function WOa(e, r, o, i, F, c, f = import_chunk_m4k4ejs3.Krr) {
  let u = await (0, import_chunk_p1ewvgeh.q7)().catch(() => null);
  if (u === null) return null;
  let a = [], g = (0, import_chunk_ps79f44q.uTn)(), m = $Vo.flatMap((n) => t7t(r, n) ?? []), p = m.concat(r.filter((n) => !m.includes(n))).flatMap((n) => {
    let h = eYs(n, g), y = h === void 0 ? z(e, n.path, F) : null;
    if (y === null) return a.push({ path: n.path, reason: h ?? "no allowed place in the scratchpad" }), [];
    return [{ path: n.path, sizeBytes: n.sizeBytes, font: ner(n), ...y }];
  }), A = p.filter((n) => !n.font), O = p.filter((n) => n.font);
  for (let n of O.splice(R)) a.push({ path: n.path, reason: `more than ${R} fonts` });
  let b = [];
  for (let n of O) {
    let h = C - Q(A.slice(0, N - b.length - 1)) - b.reduce((y, L) => y + L.sizeBytes, 0);
    if (n.sizeBytes <= h) b.push(n);
    else a.push({ path: n.path, reason: "over the 8 MB total" });
  }
  for (let n of A.splice(N - b.length)) a.push({ path: n.path, reason: `more than ${N} files` });
  let P = A.concat(b), v = 0, s = P.filter((n) => {
    if (v + n.sizeBytes > C) return a.push({ path: n.path, reason: "over the 8 MB total" }), false;
    return v += n.sizeBytes, true;
  }), S = (n) => s.filter((h) => h.font === n).map((h) => h.path), w = [...await T(e, S(false), o, i, f), ...await T(e, S(true), o, i, f)];
  if (s.length === 0 || !c()) return null;
  let _ = 0, E = /* @__PURE__ */ new Set(), H = s.flatMap((n, h) => {
    let y = w[h];
    if (y == null || y === "late" || y.kind !== "ok") return a.push({ path: n.path, reason: y === "late" ? "not fetched in time" : "not read" }), [];
    let L = y.bytes.length > B ? "over 1 MB" : _ + y.bytes.length > C ? "over the 8 MB total" : void 0;
    if (L !== void 0) return a.push({ path: n.path, reason: L }), [];
    if (E.has(k(n.dest))) return a.push({ path: n.path, reason: "same name as another file except for letter case" }), [];
    return E.add(k(n.dest)), _ += y.bytes.length, [{ ...n, bytes: y.bytes }];
  }), I = await j(e, u, H, a);
  if (I === null) return null;
  let x = (n) => m.some((h) => h.path === n) ? 0 : P.some((h) => h.font && h.path === n) ? 1 : 2;
  return { ...I, files: I.files.toSorted((n, h) => x(n.path) - x(h.path)) };
}
async function T(e, r, o, i, F) {
  let c = [], f = 0;
  return await Promise.all(Array.from({ length: Math.min(K, r.length) }, async () => {
    while (f < r.length) {
      let u = f++, a = r[u];
      if (a === void 0 || o.aborted) {
        c[u] = "late";
        continue;
      }
      let g = await F(e, a, o, i).catch(() => null);
      c[u] = g?.kind === "ok" ? g : o.aborted ? "late" : null;
    }
  })), c;
}
async function jOa(e, r, o, i, F, c, f, u = import_chunk_m4k4ejs3.Krr) {
  let a = (s) => ((0, import_chunk_w578pjby.t)(`[artifactOpeningPrefetch] type files of ${e.slug} not saved: ${s}`), null), g = await (0, import_chunk_p1ewvgeh.q7)().catch(() => null);
  if (g === null) return a("no scratchpad");
  if (o.length > e7t) return a(`${o.length} reference pages, over ${e7t}`);
  let m = ["SKILL.md"].concat(o), l = m.map((s) => ({ path: s, place: X.test(s) ? z(e, s, c) : null })), p = l.filter((s) => s.place === null).map((s) => s.path);
  if (p.length > 0) return a(`no allowed scratchpad destination for ${p.join(", ")}`);
  let A = await T(e, o, i, F, u), O = o.filter((s, S) => {
    let w = A[S];
    return w == null || w === "late" || w.kind !== "ok";
  });
  if (O.length > 0) return a(`not read${i.aborted ? " within the budget" : ""}: ${O.join(", ")}`);
  let b = l.flatMap(({ path: s, place: S }, w) => {
    let _ = w === 0 ? void 0 : A[w - 1], E = w === 0 ? Buffer.from(r, "utf8") : _ != null && _ !== "late" && _.kind === "ok" ? _.bytes : null;
    return S === null || E === null ? [] : [{ path: s, ...S, bytes: E }];
  }), P = b.reduce((s, S) => s + S.bytes.length, 0);
  if (P > C || b.some((s) => s.bytes.length > B)) return a(`over a byte cap (${P} bytes in all)`);
  if (o.length > 0 && !f()) return a("the files consent no longer stands after the reads");
  let v = await j(e, g, b, []);
  return v !== null && v.files.length === m.length ? v : a("a file did not land (see the line above)");
}
function tYs(e, r, o, i) {
  let F = e.options.tools ?? [], c = (0, import_chunk_4vsz8a99.tn)(F, import_chunk_r8478wtb.Vt), f = { action: "read_file", url: (0, import_chunk_r8478wtb.sr)(r), path: o };
  try {
    let u = (0, import_chunk_w578pjby.ua)(i);
    return c !== void 0 && (0, import_chunk_4vsz8a99.tn)(F, import_chunk_hn3cwwzt.ke) !== void 0 && c.getPath?.(f) === i && (0, import_chunk_przefx11.yue)([u.spellings]) && (0, import_chunk_p1ewvgeh.jP)(c, f, (0, import_chunk_bz1f2qnq.Z)(e), u).behavior === "allow";
  } catch {
    return false;
  }
}
function z(e, r, o) {
  let i = (0, import_chunk_przefx11.M$e)({ action: "read_file", url: (0, import_chunk_r8478wtb.sr)(e), path: r });
  return "reason" in i || i.defaultDir !== true || !o(r, i.dest) ? null : { dest: i.dest, dir: i.base };
}
async function j(e, r, o, i) {
  let F = performance.now() + Y, c = [], f = i.slice(), u = [], a = (0, import_chunk_qtg8rez4.Bt)(e.slug), g = (0, import_chunk_jc9v3hv0.Jet)((0, import_chunk_k449cc64.Up)((0, import_chunk_qtg8rez4.tme)(a), (0, import_chunk_k449cc64.lte)((0, import_chunk_qtg8rez4.kle)(a))) || (0, import_chunk_qtg8rez4.W7)(e.slug));
  for (let l of o) {
    if (performance.now() > F) {
      f.push({ path: l.path, reason: "not saved in time" });
      continue;
    }
    await (0, import_chunk_jc9v3hv0.B_e)(l.dest, g);
    try {
      await nYs(r, l.dest, l.bytes, g), await (0, import_chunk_jc9v3hv0.iq)(l.dest, g), c.push({ path: l.path, bytes: l.bytes.length });
    } catch (p) {
      f.push({ path: l.path, reason: "could not be written" }), u.push(`${l.path}: ${(0, import_chunk_jv7av99m.d)(p)}`);
    }
  }
  if (f.length > 0) (0, import_chunk_w578pjby.t)(`[artifactOpeningPrefetch] files of ${e.slug} not saved: ${f.map((l) => `${l.path} (${l.reason})`).join(", ")}${u.length > 0 ? `; ${u.join("; ")}` : ""}`);
  let m = o[0]?.dir;
  return m === void 0 || c.length === 0 ? null : { dir: m, files: c, skipped: f };
}
async function nYs(e, r, o, i, F = 384) {
  let c = r.slice(e.length + 1), u = ((0, import_chunk_p1ewvgeh.$Ss)() ? [e] : (0, import_chunk_w578pjby.Ei)(e)).map((p) => (0, import_path.join)(p, c)), a = await (0, import_chunk_865at33z.NC)(r, u, { createParents: true, leaf: "replace" }).catch(async (p) => {
    throw await (0, import_chunk_jc9v3hv0.Qve)(r, i), p;
  }), g = (0, import_chunk_q7qjcthc.LM)(a.ioPath), m = true, l = false;
  try {
    await (0, import_chunk_przefx11.Bet)(a, g, o, { mode: F }).catch((p) => {
      throw m = (0, import_chunk_przefx11.Fht)(p), p;
    }), await a.recheckBeforeWrite(), await (0, import_chunk_przefx11.bHt)(g, a.ioPath, ...(0, import_chunk_przefx11.sMe)(a)), l = true, await (0, import_chunk_jc9v3hv0.cMe)(r, i), m = false;
  } catch (p) {
    if (!l) await (0, import_chunk_jc9v3hv0.Qve)(r, i);
    throw p;
  } finally {
    if (m) {
      let [, p = import_promises.unlink] = (0, import_chunk_przefx11.sMe)(a);
      await p(g).catch(() => (0, import_chunk_jc9v3hv0.iq)((0, import_path.join)((0, import_path.dirname)(r), (0, import_path.basename)(g)), i)).catch(() => {
      });
    }
    await a.close();
  }
}
