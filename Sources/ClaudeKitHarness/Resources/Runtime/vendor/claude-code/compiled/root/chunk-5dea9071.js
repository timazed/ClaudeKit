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
var chunk_5dea9071_exports = {};
__export(chunk_5dea9071_exports, {
  L7t: () => L7t,
  V4r: () => V4r,
  mqo: () => mqo,
  yHa: () => yHa,
  ytr: () => ytr,
  z4r: () => z4r
});
module.exports = __toCommonJS(chunk_5dea9071_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_epgpxkgh = require("/$bunfs/root/chunk-epgpxkgh.js");
var import_chunk_gea9tjyt = require("/$bunfs/root/chunk-gea9tjyt.js");
var import_chunk_a8ey418s = require("/$bunfs/root/chunk-a8ey418s.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var f = 524288;
function L7t(e) {
  return { scoping: e.replace(/\.jsonl$/, ".forked-skill.json"), provenanceMarker: e.replace(/\.jsonl$/, ".forked-skill.marker.json") };
}
function v(e) {
  return L7t((0, import_chunk_hsqa3g9e.$g)(e));
}
function b(e) {
  if (e === void 0) return;
  let r = (0, import_chunk_epgpxkgh.Rtr)(e, ".forked-skill.json"), n = (0, import_chunk_epgpxkgh.Rtr)(e, ".forked-skill.marker.json");
  return r !== void 0 && n !== void 0 ? { scoping: r, provenanceMarker: n } : void 0;
}
function K(e) {
  return (0, import_chunk_w578pjby._)({ forkedSkill: true, ...e !== void 0 && { skillName: e } });
}
function p(e) {
  let r = (0, import_chunk_hsqa3g9e.UUi)();
  if (typeof r !== "string") {
    let u = b((0, import_chunk_hsqa3g9e.ivt)(e));
    return u && M(u);
  }
  if ((0, import_path.dirname)(r) !== (0, import_chunk_hsqa3g9e.bh)()) return;
  let n = (0, import_path.basename)(r), i = (0, import_chunk_f9x2f6cx.W)(), o = (0, import_path.join)(r, i) + import_path.sep, a = (0, import_chunk_hsqa3g9e.$g)(e);
  if (!a.startsWith(o)) return;
  let s = a.slice(o.length).split(import_path.sep), d = s.at(-1);
  if (d === void 0 || !d.endsWith(".jsonl") || ![n, i, ...s].every(import_chunk_hkvzj051.Ao)) return;
  let x = s.slice(0, -1), m = (u) => ({ namespace: "sidecar", projectKey: n, sessionId: i, relPath: [...x, u] }), S = m(d.replace(/\.jsonl$/, ".forked-skill.json")), g = m(d.replace(/\.jsonl$/, ".forked-skill.marker.json"));
  return (0, import_chunk_fp3vnecp.db)(S) === void 0 && (0, import_chunk_fp3vnecp.db)(g) === void 0 ? { scoping: S, provenanceMarker: g } : void 0;
}
function M(e) {
  let r = (0, import_chunk_a8ey418s.XEr)(e.scoping), n = (0, import_chunk_a8ey418s.XEr)(e.provenanceMarker);
  return r && n ? { scoping: r, provenanceMarker: n } : void 0;
}
async function j(e, r) {
  let n = await e.statMeta(r);
  if (!n.ok) return n.error.code === "NotFound" ? { kind: "absent" } : { kind: "unusable", ...l(n.error) };
  if (n.value.size > f) return { kind: "unusable" };
  let i = await e.read([r]);
  if (!i.ok) return { kind: "unusable", ...l(i.error) };
  let o = i.value.items[0];
  return o.found ? { kind: "text", text: Buffer.from(o.value).toString("utf8") } : { kind: "absent" };
}
async function I(e, r) {
  let n = await e.statMeta(r);
  if (n.ok) return { present: true };
  return n.error.code === "NotFound" ? { present: false } : { present: true, ...l(n.error) };
}
function c(e) {
  return e === true ? { transientRead: true } : {};
}
function l(e) {
  return c((0, import_chunk_6mfepmbb.hgn)(e));
}
async function h(e, r, n) {
  let i = await e.write(r, K(n), { mode: 438 & ~process.umask() });
  if (!i.ok) throw (0, import_chunk_w578pjby.t)(`forked-skill provenance marker write: ${i.error.code}`), Error("forked-skill provenance marker write failed");
}
function P() {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("forked-skill sidecar write refused: diskless session with no storage backend or key for the path");
}
async function mqo(e, r, n) {
  let i = (0, import_chunk_m15w38ag.ne)() && n ? (0, import_chunk_a8ey418s.av)(e) : void 0;
  if (n && i) return h(n, i, r);
  P(), await (0, import_chunk_q7qjcthc.yr)(e, K(r));
}
async function yHa(e, r, n) {
  let i = (0, import_chunk_m15w38ag.ne)() && n ? p(e) : void 0;
  if (n && i) {
    await h(n, i.provenanceMarker, r.skillName);
    let a = await n.write(i.scoping, (0, import_chunk_w578pjby._)(r), { mode: 438 & ~process.umask() });
    if (!a.ok) throw (0, import_chunk_w578pjby.t)(`forked-skill scoping write: ${a.error.code}`), Error("forked-skill scoping record write failed");
    return;
  }
  P();
  let o = v(e);
  await (0, import_promises.mkdir)((0, import_path.dirname)(o.scoping), { recursive: true }), await mqo(o.provenanceMarker, r.skillName), await (0, import_chunk_q7qjcthc.yr)(o.scoping, (0, import_chunk_w578pjby._)(r));
}
async function z4r(e, r) {
  let n = (0, import_chunk_m15w38ag.ne)() && r ? p(e) : void 0;
  if (r && n) return A(r, n);
  let i = b((0, import_chunk_hsqa3g9e.ivt)(e));
  return i === void 0 ? { status: "diskless" } : ytr(i);
}
async function ytr(e, r) {
  let n = (0, import_chunk_m15w38ag.ne)() && r ? M(e) : void 0;
  if (r && n) return A(r, n);
  let i = (0, import_chunk_gea9tjyt.cG)(e.scoping), o = (0, import_chunk_gea9tjyt.cG)(e.provenanceMarker);
  if (i === void 0 || o === void 0) return { status: "diskless" };
  let a;
  try {
    let s = await (0, import_promises.lstat)(i);
    if (!s.isFile() || s.size > f) return { status: "malformed" };
    a = await (0, import_promises.readFile)(i, "utf-8");
  } catch (s) {
    if ((0, import_chunk_jv7av99m.J)(s)) return await L(o);
    return { status: "malformed", ...c((0, import_chunk_6mfepmbb.Rz)((0, import_chunk_jv7av99m.w)(s))) };
  }
  return E(a);
}
function E(e) {
  let r;
  try {
    r = (0, import_chunk_w578pjby.te)(e);
  } catch {
    return { status: "malformed" };
  }
  let n = (0, import_chunk_bzyb60p0.uJr)().safeParse(r);
  return n.success ? { status: "valid", scoping: n.data } : { status: "malformed" };
}
async function A(e, r) {
  let n = await j(e, r.scoping);
  switch (n.kind) {
    case "text":
      return E(n.text);
    case "unusable":
      return { status: "malformed", ...c(n.transientRead) };
    case "absent": {
      let i = await I(e, r.provenanceMarker);
      return i.present ? { status: "absent-but-marked", ...c(i.transientRead) } : { status: "absent" };
    }
  }
}
async function L(e) {
  try {
    return await (0, import_promises.lstat)(e), { status: "absent-but-marked" };
  } catch (r) {
    return (0, import_chunk_jv7av99m.J)(r) ? { status: "absent" } : { status: "absent-but-marked", ...c((0, import_chunk_6mfepmbb.Rz)((0, import_chunk_jv7av99m.w)(r))) };
  }
}
async function V4r(e, r) {
  let n, i = (0, import_chunk_m15w38ag.ne)() && r ? p(e) : void 0;
  if (r && i) {
    let s = await j(r, i.provenanceMarker);
    if (s.kind !== "text") return;
    n = s.text;
  } else if ((0, import_chunk_f9x2f6cx.Y)()) return;
  else {
    let { provenanceMarker: s } = v(e);
    try {
      let d = await (0, import_promises.lstat)(s);
      if (!d.isFile() || d.size > f) return;
      n = await (0, import_promises.readFile)(s, "utf-8");
    } catch {
      return;
    }
  }
  let o;
  try {
    o = (0, import_chunk_w578pjby.te)(n);
  } catch {
    return;
  }
  let a = (0, import_chunk_bzyb60p0.Uja)().safeParse(o);
  return a.success ? a.data.skillName : void 0;
}
