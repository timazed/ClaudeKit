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
var chunk_0qm95573_exports = {};
__export(chunk_0qm95573_exports, {
  D2l: () => D2l,
  E8l: () => E8l,
  Kkn: () => Kkn,
  L2l: () => L2l,
  N2l: () => N2l,
  S8l: () => S8l,
  Swa: () => Swa,
  T8l: () => T8l,
  b8l: () => b8l,
  d6s: () => d6s,
  k8l: () => k8l,
  v8l: () => v8l,
  w8l: () => w8l,
  y8l: () => y8l,
  ywa: () => ywa
});
module.exports = __toCommonJS(chunk_0qm95573_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_cq1312e8 = require("/$bunfs/root/chunk-cq1312e8.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var h = 50, d6s = 144e5, b = 2592e6, I = 6048e5;
function T(e, r, i) {
  return (0, import_chunk_7d2qr9z5.$yr)() && Boolean(e?.length) && r !== void 0 && N2l(r, i, I);
}
function D2l(e, r) {
  return T(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r) ? e.projectThreadSessionIds : void 0;
}
function L2l(e, r) {
  return T(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r) ? e.parkedProjectThreadSessionIds ?? [] : [];
}
var y = 4096;
function k(e, r) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows" && (e + r).includes("\\")) return (0, import_chunk_z6pfqf6e.pn)(e) === (0, import_chunk_z6pfqf6e.pn)(r);
  let i = (0, import_chunk_q3a5dy2r.Nke)();
  return (0, import_chunk_q3a5dy2r.Fhe)((0, import_chunk_z6pfqf6e.pn)(e), i) === (0, import_chunk_q3a5dy2r.Fhe)((0, import_chunk_z6pfqf6e.pn)(r), i);
}
function y8l(e, r, i) {
  return (0, import_chunk_7d2qr9z5.akt)() && (e.dir !== void 0 && !k(e.dir, r) || e.machineId !== void 0 && i.machineId !== null && e.machineId !== i.machineId);
}
function S8l(e, r, i, a, o) {
  if (i === a) return o?.environmentId === i ? { dir: o.dir, machineId: o.machineId, accountUuid: o.accountUuid, organizationUuid: o.organizationUuid } : {};
  let { machineId: d, accountUuid: g, organizationUuid: u } = r;
  if (d === null || g === void 0 || !(0, import_chunk_t39bs2jr.TI)(g) || u && !(0, import_chunk_t39bs2jr.TI)(u) || e.length > y) return {};
  return { dir: e, machineId: d, accountUuid: g, organizationUuid: u || void 0 };
}
function A(e, r, i, a) {
  let o = i?.environmentReuse;
  if (o && e.source === "standalone" && e.dir !== void 0 && k(e.dir, r) && e.machineId === o.machineId && e.accountUuid !== void 0 && e.accountUuid === o.accountUuid && e.organizationUuid === (o.organizationUuid || void 0) && e.procStart !== void 0 && (0, import_chunk_7d2qr9z5.akt)()) return b;
  if (i?.projectThreadResume && (D2l(e, a) !== void 0 || L2l(e, a).length > 0)) return I;
  return d6s;
}
var b8l = 9e5, O = 12e4;
function N2l(e, r, i) {
  return r - e <= i && e - r <= O;
}
var Kkn = 64, f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().max(256).refine(import_chunk_t39bs2jr.TI)), N = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ sessionId: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.v)(""), f()]), environmentId: f(), source: (0, import_chunk_adx6804h.F)(["standalone", "repl"]), pid: (0, import_chunk_adx6804h.E)().optional(), procStart: (0, import_chunk_adx6804h.n)().optional(), dir: (0, import_chunk_adx6804h.n)().max(y).optional(), machineId: f().optional(), accountUuid: f().optional(), organizationUuid: f().optional(), environmentRevivedAt: (0, import_chunk_adx6804h.E)().int().min(0).max(864e13).optional(), activeSessionIds: (0, import_chunk_adx6804h.C)(f()).max(Kkn).optional(), activeSessionIdsPersistedAt: (0, import_chunk_adx6804h.E)().int().min(0).max(864e13).optional(), projectThreadSessionIds: (0, import_chunk_adx6804h.C)(f()).max(Kkn).optional(), parkedProjectThreadSessionIds: (0, import_chunk_adx6804h.C)(f()).max(Kkn).optional(), parkedProjectThreadSessionIdsPersistedAt: (0, import_chunk_adx6804h.E)().int().min(0).max(864e13).optional(), projectThreadSessionIdsPersistedAt: (0, import_chunk_adx6804h.E)().int().min(0).max(864e13).optional() }));
function P(e) {
  return (0, import_path.join)((0, import_chunk_q3a5dy2r.Em)(), (0, import_chunk_q3a5dy2r.sO)(e), "bridge-pointer.json");
}
function S(e) {
  let r = (0, import_chunk_q3a5dy2r.sO)(e);
  return (0, import_chunk_hkvzj051.Ao)(r) ? import_chunk_hkvzj051.at.bridgePointer(r) : null;
}
async function w8l(e, r, i) {
  let a = P(e), o = (0, import_chunk_m15w38ag.ne)() && i !== void 0 ? S(e) : null;
  if ((0, import_chunk_m15w38ag.ne)() && i !== void 0 && o) {
    let d = await i.write(o, (0, import_chunk_w578pjby._)(r), { mode: 438 & ~process.umask() });
    if (!d.ok) return (0, import_chunk_w578pjby.t)(`[bridge:pointer] write failed: ${(0, import_chunk_7n1spq36.un)(d.error)}`, { level: "warn" }), false;
    return (0, import_chunk_w578pjby.t)(`[bridge:pointer] wrote ${a}`), true;
  }
  try {
    return await (0, import_promises.mkdir)((0, import_path.dirname)(a), { recursive: true }), await (0, import_chunk_q7qjcthc.yr)(a, (0, import_chunk_w578pjby._)(r)), (0, import_chunk_w578pjby.t)(`[bridge:pointer] wrote ${a}`), true;
  } catch (d) {
    return (0, import_chunk_w578pjby.t)(`[bridge:pointer] write failed: ${d}`, { level: "warn" }), false;
  }
}
function k8l() {
  let e = Promise.resolve();
  return (r) => (e = e.then(r, r), e);
}
async function ywa(e, r, i) {
  let a = P(e), o, d, g = i ? S(e) : null;
  if (i && g) {
    let m = await i.read([g]);
    if (!m.ok || !m.value.items[0].found) return null;
    d = m.value.items[0].mtimeMs, o = Buffer.from(m.value.items[0].value).toString("utf8");
  } else try {
    d = (await (0, import_promises.stat)(a)).mtimeMs, o = await (0, import_promises.readFile)(a, "utf8");
  } catch {
    return null;
  }
  let u = N().safeParse(D(o));
  if (!u.success) {
    if (!r?.noClear) (0, import_chunk_w578pjby.t)(`[bridge:pointer] invalid schema, clearing: ${a}`), await Swa(e, i);
    return null;
  }
  let l = Date.now(), s = Math.max(0, l - d);
  if (!r?.ignoreTtl && s > A(u.data, e, r, l)) {
    let m = u.data.source === "standalone" && s <= b;
    if (!r?.noClear && !m) (0, import_chunk_w578pjby.t)(`[bridge:pointer] stale mtime, clearing: ${a}`), await Swa(e, i);
    return null;
  }
  return { ...u.data, ageMs: s };
}
function E8l(e, r) {
  return e.ageMs > d6s ? r : e.environmentRevivedAt;
}
async function v8l(e) {
  if (e.pid === void 0 || e.pid === process.pid) return false;
  if (e.ageMs <= d6s || e.procStart === void 0) return (0, import_chunk_v6cdm8tp.Rd)(e.pid) && await (0, import_chunk_rb36kwbn.GC)(e.pid, e.procStart);
  let r = await (0, import_chunk_rb36kwbn.mS)(e.pid, e.procStart);
  return r === void 0 ? (0, import_chunk_v6cdm8tp.Rd)(e.pid) : r && !(0, import_chunk_rb36kwbn.Wm)(e.pid) && !await (0, import_chunk_rb36kwbn.XXe)(e.pid);
}
async function T8l(e, r, i) {
  let a = await ywa(e, i, r);
  if (a) return { pointer: a, dir: e };
  let o = await (0, import_chunk_cq1312e8.AGt)(e);
  if (o.length <= 1) return null;
  if (o.length > h) return (0, import_chunk_w578pjby.t)(`[bridge:pointer] ${o.length} worktrees exceeds fanout cap ${h}, skipping`), null;
  let d = (0, import_chunk_q3a5dy2r.sO)(e), g = o.filter((s) => (0, import_chunk_q3a5dy2r.sO)(s) !== d), u = await Promise.all(g.map(async (s) => {
    let m = await ywa(s, void 0, r);
    return m ? { pointer: m, dir: s } : null;
  })), l = null;
  for (let s of u) if (s && (!l || s.pointer.ageMs < l.pointer.ageMs)) l = s;
  if (l) (0, import_chunk_w578pjby.t)(`[bridge:pointer] fanout found pointer in worktree ${l.dir} (ageMs=${l.pointer.ageMs})`);
  return l;
}
async function Swa(e, r) {
  let i = P(e), a = r ? S(e) : null;
  if (r && a) {
    let o = await r.delete(a);
    if (o.ok || o.error.code === "NotFound") (0, import_chunk_w578pjby.t)(`[bridge:pointer] cleared ${i}`);
    else (0, import_chunk_w578pjby.t)(`[bridge:pointer] clear failed: ${(0, import_chunk_7n1spq36.un)(o.error)}`, { level: "warn" });
    return;
  }
  try {
    await (0, import_promises.unlink)(i), (0, import_chunk_w578pjby.t)(`[bridge:pointer] cleared ${i}`);
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) (0, import_chunk_w578pjby.t)(`[bridge:pointer] clear failed: ${o}`, { level: "warn" });
  }
}
function D(e) {
  try {
    return (0, import_chunk_w578pjby.te)(e);
  } catch {
    return null;
  }
}
