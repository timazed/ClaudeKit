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
var chunk_tgt4xm18_exports = {};
__export(chunk_tgt4xm18_exports, {
  $ti: () => $ti,
  Bti: () => Bti,
  CFa: () => CFa,
  EAn: () => EAn,
  EFa: () => EFa,
  Fti: () => Fti,
  Nti: () => Nti,
  SFa: () => SFa,
  TFa: () => TFa,
  Uti: () => Uti,
  Wti: () => Wti,
  _ie: () => _ie,
  bFa: () => bFa,
  kFa: () => kFa,
  vFa: () => vFa,
  wFa: () => wFa,
  zqe: () => zqe
});
module.exports = __toCommonJS(chunk_tgt4xm18_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_m4k4ejs3 = require("/$bunfs/root/chunk-m4k4ejs3.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_chunk_s12kntv9 = require("/$bunfs/root/chunk-s12kntv9.js");
var k = "Nothing was published or removed: this publish touches files whose published content is not what you last saw", T = "Changed since you last saw them:", R = "Already published, and not read as published or listed by you in this session:", V = "Already published, and not shown to you:";
function SFa(e) {
  if (!e.startsWith("Nothing was published or removed: this publish touches files whose published content is not what you last saw")) return;
  let i = e.indexOf(`
Changed since you last saw them:`), n = e.indexOf(`
Already published, and not read as published or listed by you in this session:`), r = e.indexOf(`
Already published, and not shown to you:`), a = S(e, i, [n, r]), o = S(e, n, [r]), h = S(e, r, []), f = (p) => [...p.matchAll(/^- ("(?:[^"\\]|\\.)*")/gm)].map((B) => B[1]), d = (p) => Number(/^- (?:and )?(\d+) (?:more|paths?, not named here):/m.exec(p)?.[1] ?? 0), g = f(a), c = f(o), w = g.length + d(a), m = c.length + d(o), v = f(h), P = [...a.matchAll(/^- "(?:[^"\\]|\\.)*": [^\n]*it has since been removed/gm)].length;
  if (v.length > 0) {
    if (w > 0 || m > 0) return "Not published: some files on the artifact changed or haven't been read by Claude, and others Claude can't see. Claude needs to read the ones it can, and won't replace the others unless you ask.";
    return v.length === 1 ? `Not published: ${v[0]} is already on the artifact and Claude can't see it. Claude won't replace or remove it unless you ask.` : `Not published: ${v.length} files are already on the artifact and Claude can't see them. Claude won't replace or remove them unless you ask.`;
  }
  if (w > 0 && m > 0) return "Not published: some files on the artifact changed since Claude last saw them, and others Claude has not read yet. Claude needs to read the latest versions before publishing again.";
  if (w === 1) return P === 1 ? `Not published: ${g[0]} was removed from the artifact since Claude last saw it. Publishing again creates it afresh.` : `Not published: ${g[0]} changed on the artifact since Claude last saw it. Claude needs to read the latest version before publishing again.`;
  if (w > 1) return `Not published: ${w} files changed on the artifact since Claude last saw them. Claude needs to read the latest versions before publishing again.`;
  if (m === 1) return `Not published: ${c[0]} is already on the artifact and Claude has not read it. Claude needs to read it before replacing or removing it.`;
  return `Not published: ${m} files are already on the artifact and Claude has not read them. Claude needs to read them before replacing or removing them.`;
}
function S(e, i, n) {
  return i === -1 ? "" : e.slice(i, n.filter((r) => r > i).sort((r, a) => r - a)[0]);
}
var A = 20, Nti = 32e3;
function EAn() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PATH_PIN ?? true;
}
function Fti() {
  return EAn() && !(0, import_chunk_3t7ve0wy.MB)();
}
function _ie() {
  return (0, import_chunk_0rkwgmhx.se)().frozenPathPin ?? EAn();
}
function N() {
  return (0, import_chunk_0rkwgmhx.se)().frozenPathPinAck ?? Fti();
}
function y(e) {
  let { pathPins: i } = (0, import_chunk_0rkwgmhx.se)(), n = i.get(e);
  if (n === void 0) n = /* @__PURE__ */ new Map(), i.set(e, n);
  return n;
}
function zqe() {
  return ++(0, import_chunk_0rkwgmhx.se)().pathPinSeq;
}
function b(e, i, n, r) {
  let a = e.get(i);
  if (a !== void 0 && a.seq > r) return;
  e.set(i, { ...n, seq: r });
}
function $ti(e, i, n, r, a = zqe()) {
  if (!_ie()) return;
  b(y(e), i, { sha256: n, ver: r, via: "read" }, a);
}
function Uti(e, i, n, r, a = zqe()) {
  if (!_ie()) return;
  b(y(e), i, { sha256: n, ver: r, via: "list" }, a);
}
function Bti(e, i, n = zqe()) {
  if (!_ie()) return;
  let r = (0, import_chunk_0rkwgmhx.se)().pathPins.get(e), a = r?.get(i);
  if (a !== void 0 && a.seq < n) r.delete(i);
}
function bFa(e, i, n, r = zqe()) {
  if (!_ie()) return;
  let a = y(e);
  for (let o of n) {
    let h = a.get(o.path);
    if (h === void 0 || h.via === "list" && h.sha256 !== null) b(a, o.path, { sha256: o.sha256, ver: i, via: "list" }, r);
  }
  E(a, i, r, n, false);
}
function E(e, i, n, r, a) {
  let o = new Map(r.map((h) => [h.path, h]));
  for (let [h, f] of e) {
    let d = o.get(h);
    if (f.seq > n || d === void 0 && !a) continue;
    let g = d?.sha256 ?? null;
    if (d?.live === true || g === f.sha256) {
      if (f.behind !== void 0) e.set(h, { sha256: f.sha256, ver: f.ver, via: f.via, seq: f.seq });
    } else e.set(h, { ...f, behind: { sha256: g, sizeBytes: d?.sizeBytes, ver: i } });
  }
}
function wFa(e, i, n) {
  if (!_ie()) return;
  let r = y(e), a = zqe();
  for (let o of n.written) if (o.sha256 === void 0) r.delete(o.path);
  else b(r, o.path, { sha256: o.sha256, ver: i, via: "publish" }, a);
  for (let o of n.removed) b(r, o, { sha256: null, ver: i, via: "publish" }, a);
}
function kFa(e) {
  if (!_ie()) return false;
  let i = (0, import_chunk_0rkwgmhx.se)().pathPins.get(e);
  if (i === void 0) return false;
  for (let n of i.values()) if (n.via !== "list") return true;
  return false;
}
function EFa(e) {
  if (e === void 0) return {};
  let i = e.written.flatMap((n) => n.sha256 === void 0 ? [] : [{ path: n.path, sha256: n.sha256 }]);
  return { ...i.length > 0 && { files_written: i }, ...e.removed.length > 0 && { files_removed: [...e.removed] } };
}
function Wti(e, i, n, r) {
  if (!_ie()) return;
  let a = y(e);
  for (let o of n) b(a, o, { sha256: null, ver: i, via: "list" }, r);
}
function vFa(e, i, n, r) {
  if (!_ie() || n.length === 0) return;
  E(y(e), i, r, n, false);
}
function x(e, i, n) {
  let r = n.filter((o) => o.liveSha256 === null).map((o) => o.path);
  if (r.length === 0) return;
  let a = zqe();
  return () => Wti(e, i, r, a);
}
function C(e) {
  let i = e.filter((n) => n.kind === "changed");
  return [...i.filter((n) => n.liveSha256 === null), ...i.filter((n) => n.liveSha256 !== null)];
}
function D(e) {
  let i = [], n = [...e.writes.map((r) => ({ ...r, operation: "write" })), ...e.removes.map((r) => ({ path: r, operation: "remove", sha256: void 0 }))];
  for (let { path: r, operation: a, sha256: o } of n) {
    if (e.liveDocs?.has(r)) continue;
    let h = e.pins?.get(r), f = e.live.get(r) ?? null;
    if (h === void 0) {
      if (f === null || e.acknowledged.has(r)) continue;
      if (a === "write" && o === f) continue;
      i.push({ kind: "unread", path: r, operation: a });
      continue;
    }
    if (h.sha256 === f) continue;
    if (a === "write" && o !== void 0 && o === f) continue;
    if (a === "remove" && f === null) continue;
    i.push({ kind: "changed", path: r, operation: a, readSha256: h.sha256, readVer: h.ver, readVia: h.via, liveSha256: f });
  }
  return i;
}
function z(e, i) {
  return (0, import_chunk_w578pjby._)(e.core ? (0, import_chunk_qsvts4bv.dRe)(i) : i);
}
function L(e) {
  return e.core ? 'action "read" with its `path`' : 'action "read_file"';
}
function F(e, i) {
  let n = i.files.get(e);
  if (n === void 0) return "  now: deleted; publishing this path again creates it afresh, so do that only if the user wants it back";
  let r = n.sizeBytes === void 0 ? "" : `, ${n.sizeBytes} ${(0, import_chunk_7cfjrnwy.O)(n.sizeBytes, "byte")}`;
  return `  now: sha256 ${n.sha256}${r}; read it with ${z(i, { action: "read_file", url: i.url, path: e })}`;
}
function I(e, i, n) {
  let r = e.readSha256 !== null ? `you last saw it at version ${e.readVer}` : e.readVia === "publish" ? `you removed it at version ${e.readVer}` : `it was gone when you last checked (version ${e.readVer})`, a = e.liveSha256 === null ? `it has since been removed (version ${i})` : e.readSha256 === null ? `someone has since published a file there (version ${i})` : `someone has since replaced it (version ${i})`;
  return `- ${(0, import_chunk_w578pjby._)(e.path)}: ${r}; ${a}
${F(e.path, n)}`;
}
function M(e, i, n) {
  if (e.length <= i) return e.join(`
`);
  let r = `- ${i > 0 ? `and ${e.length - i} more` : `${e.length} ${(0, import_chunk_7cfjrnwy.O)(e.length, "path")}, not named here`}: ${z(n, { action: "list_files", url: n.url })} lists every file with its size`;
  return i > 0 ? `${e.slice(0, i).join(`
`)}
${r}` : r;
}
function H(e, i, n, r = []) {
  let a = C(e), o = e.filter((d) => d.kind === "unread"), h = [a.length > 0 ? `${k}, and sending your copy would replace a newer edit.` : `${k}, and sending your copy could discard content you have not read.`], f = Math.min(a.length, A);
  if (a.length > 0) {
    let d = a.some((g) => g.liveSha256 === null);
    h.push(`${T}
${M(a.map((g) => I(g, i, n)), f, n)}
Read each one${d ? " that still exists" : ""} again (${L(n)}), re-apply your change to what it holds now, and publish again${d ? "; a deleted one needs no read" : ""}. Never resend your earlier copy.${n.forced ? " `force` does not override this." : ""}${n.remembered ? ' The live file list could not be read for this publish, so each "now" line and its version are from an earlier listing or publish result in this session; the reads will show what is there now.' : ""}`);
  }
  if (o.length > 0) h.push(`${R}
${M(o.map((d) => `- ${(0, import_chunk_w578pjby._)(d.path)}
${F(d.path, n)}`), A - f, n)}
Read each one first (${L(n)}) and build on it.${n.ackOffered === false ? " Do so even when the user wants the file replaced outright." : " Only when the user asked for the file to be replaced without looking, name it in `overwrite_unread`."}`);
  if (r.length > 0) h.push(`${V}
${r.map((d) => `- ${(0, import_chunk_w578pjby._)(d)}`).join(`
`)}
${(0, import_chunk_f2vegtjy.D_s)(r.length)}`);
  return h.join(`

`);
}
async function TFa(e) {
  if (e.writes.length === 0 && e.removes.length === 0) return { kind: "pass", liveVer: void 0 };
  let i = zqe(), n = await (0, import_chunk_m4k4ejs3.Oue)(e.target, e.signal, e.credentials);
  if (n.kind === "error") {
    if ((0, import_chunk_w578pjby.t)(`[artifact] path pins: no listing (${n.reason}) slug=${e.target.slug}`), n.reason === "single_page") return { kind: "pass", liveVer: void 0 };
    let d = (0, import_chunk_0rkwgmhx.se)().pathPins.get(e.target.slug), g = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), m = "";
    for (let P of [...e.writes.map((p) => p.path), ...e.removes]) {
      let p = d?.get(P)?.behind;
      if (p === void 0) continue;
      if (g.add(P), p.sha256 !== null) c.set(P, p.sha256), w.set(P, { sha256: p.sha256, ...p.sizeBytes !== void 0 && { sizeBytes: p.sizeBytes } });
      if (m === "" || ((0, import_chunk_s12kntv9.d4)(p.ver, m) ?? 1) > 0) m = p.ver;
    }
    let v = D({ pins: d, live: c, writes: e.writes.filter((P) => g.has(P.path)), removes: e.removes.filter((P) => g.has(P)), acknowledged: new Set(e.acknowledged) });
    if ((0, import_chunk_cqa9hrgx.l)("artifact_path_pin", v.length === 0 ? `skipped_${n.reason}` : `refused_without_listing_${n.reason}`), v.length === 0) return { kind: "pass", liveVer: void 0 };
    return { kind: "refuse", reasonCode: "path_pin_changed", message: H(v, m, { url: e.url ?? (0, import_chunk_r8478wtb.sr)(e.target), files: w, core: (0, import_chunk_ht78eyc4.Fg)(), forced: e.force === true, ackOffered: N(), remembered: true }), onCommitted: x(e.target.slug, m, C(v).slice(0, A)) };
  }
  let r = (0, import_chunk_0rkwgmhx.se)().pathPins.get(e.target.slug);
  if (r !== void 0) E(r, n.ver, i, n.files, !n.narrowed);
  let a = new Map(n.files.map((d) => [d.path, d.sha256])), o = new Set(n.files.filter((d) => d.live).map((d) => d.path)), h = D({ pins: r, live: a, liveDocs: o, writes: e.writes, removes: e.removes, acknowledged: new Set(e.acknowledged) }), f = 0;
  for (let d of e.writes) {
    let g = r?.get(d.path);
    if (g?.via === "list" && g.sha256 !== null && g.sha256 === a.get(d.path) && d.sha256 !== void 0 && d.sha256 !== g.sha256 && !o.has(d.path) && !e.acknowledged.includes(d.path)) f++;
  }
  if (h.length === 0 && f > 0) (0, import_chunk_cqa9hrgx.l)("artifact_path_pin", `passed_on_list_pin${n.cowritten ? "_cowritten" : n.foreign ? "_foreign" : ""}`, { checked: e.writes.length + e.removes.length, count: f });
  else (0, import_chunk_cqa9hrgx.u)("artifact_path_pin", { checked: e.writes.length + e.removes.length, refused: h.length });
  if (h.length === 0) {
    let d = n.publishPreconditions === true ? U(a, o, e.writes, e.removes) : void 0, g = e.writes.filter((c) => c.sha256 !== void 0 && !o.has(c.path) && a.get(c.path) === c.sha256).map((c) => c.path);
    return { kind: "pass", liveVer: n.ver, ...g.length > 0 && { unchanged: g }, ...!n.narrowed && { liveOwnPaths: n.files.map((c) => c.path).filter((c) => n.typePaths?.includes(c) !== true) }, ...n.title !== void 0 && { liveTitle: n.title }, ...n.favicon !== void 0 && { liveFavicon: n.favicon }, ...d !== void 0 && { preconditions: d } };
  }
  return { kind: "refuse", reasonCode: h.some((d) => d.kind === "changed") ? "path_pin_changed" : "path_pin_unread", message: H(h, n.ver, { url: e.url ?? (0, import_chunk_r8478wtb.sr)(e.target), files: new Map(n.files.map((d) => [d.path, { sha256: d.sha256, sizeBytes: d.sizeBytes }])), core: (0, import_chunk_ht78eyc4.Fg)(), forced: e.force === true, ackOffered: N() }), onCommitted: x(e.target.slug, n.ver, C(h).slice(0, A)) };
}
function U(e, i, n, r) {
  let a = /* @__PURE__ */ new Map();
  for (let { path: o } of n) {
    if (i.has(o)) return;
    a.set(o, e.get(o) ?? null);
  }
  for (let o of r) {
    let h = e.get(o);
    if (h === void 0 || i.has(o)) return;
    a.set(o, h);
  }
  return a;
}
function CFa(e) {
  let i = (0, import_chunk_0rkwgmhx.se)().pathPins.get(e.target.slug), n = e.paths.map((a) => {
    let o = i?.get(a.path), h = e.removes.includes(a.path) ? "remove" : "write";
    return o !== void 0 && o.sha256 === a.expected ? { kind: "changed", path: a.path, operation: h, readSha256: a.expected, readVer: o.ver, readVia: o.via, liveSha256: a.actual } : { kind: "unread", path: a.path, operation: h };
  }), r = /* @__PURE__ */ new Map();
  for (let a of e.paths) if (a.actual !== null) r.set(a.path, { sha256: a.actual });
  return { message: H(n, e.liveVer, { url: e.url ?? (0, import_chunk_r8478wtb.sr)(e.target), files: r, core: (0, import_chunk_ht78eyc4.Fg)(), ackOffered: N() }, e.notShown), onCommitted: x(e.target.slug, e.liveVer, C(n).slice(0, A)) };
}
