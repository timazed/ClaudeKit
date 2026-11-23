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
var chunk_a9nnd83v_exports = {};
__export(chunk_a9nnd83v_exports, {
  BO: () => BO,
  Jil: () => Jil,
  KRi: () => KRi,
  Q$t: () => Q$t,
  Qil: () => Qil,
  SNn: () => SNn,
  VRi: () => VRi,
  Xil: () => Xil,
  YRi: () => YRi,
  Yil: () => Yil,
  Zil: () => Zil,
  eal: () => eal,
  ej: () => ej,
  ere: () => ere,
  qRi: () => qRi,
  qil: () => qil,
  yfo: () => yfo,
  zRi: () => zRi,
  zon: () => zon
});
module.exports = __toCommonJS(chunk_a9nnd83v_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_ta56chse = require("/$bunfs/root/chunk-ta56chse.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
function SNn(o) {
  return o.length >= 2 && o[0] === 80 && o[1] === 75;
}
var zon = "/mnt/skills", _ = { public: "anthropic", examples: "anthropic-example" }, Q$t = "public", g = 3e3, L = 33554432, N = 6e5, A = /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/;
function zRi(o, e, r) {
  r.set(e.reason, (r.get(e.reason) ?? 0) + 1), (0, import_chunk_42tcgre6.q)("info", "skills_sync_host_mount_miss", { kind: o, ...e });
}
function yfo(o) {
  return Object.fromEntries(Array.from(o, ([e, r]) => [`mount_miss_${e}`, r]));
}
function P(o) {
  if (o.creator_type !== "anthropic" || o.id !== o.name || !(0, import_chunk_xcgcdx61.r6e)(o.name)) return;
  if (o.source === _.public) return "public";
  return o.source === _.examples && o.is_public_provisioned === true ? "examples" : void 0;
}
function qil(o) {
  let { hostMountKinds: e } = (0, import_chunk_wj4me9k5.Dd)();
  e.clear();
  for (let r of o) {
    let s = P(r);
    if (s !== void 0) e.set(r.id, s);
  }
}
function T() {
  return (0, import_chunk_3t7ve0wy.ite)() && (0, import_chunk_6mfepmbb.m3)() !== 0;
}
function Yil(o) {
  let e = F(o);
  return e !== void 0 && T() ? e : void 0;
}
function F(o) {
  let e = (0, import_chunk_wj4me9k5.Dd)().hostMountKinds.get(o.skillId);
  return e !== void 0 && o.name === o.skillId && o.source === _[e] && o.requestedVersion === void 0 ? e : void 0;
}
async function Xil(o, e) {
  if (!T()) return null;
  let r = { deadline: performance.now() + g, spentMs: 0, waitedMs: 0 }, s = await h(r, () => O(o)), a = (0, import_chunk_w71cxznt.Rl)(1, (i, u, l) => h(r, () => W(i, u, l)));
  return { async readZip(i, u) {
    let l = "reason" in s ? s : s.get(i) ?? f, d = "reason" in l ? l : await a((0, import_path.join)(zon, i, `${u.name}.skill`), u.updatedAt, l.device);
    if ("zip" in d) return d.zip;
    zRi(i, d, e);
    return;
  }, spentMs: () => Math.round(r.spentMs), waitedMs: () => Math.round(r.waitedMs) };
}
async function h(o, e) {
  let r = (0, import_chunk_wj4me9k5.Dd)();
  while (r.hostMountWorkOutstanding !== null && r.hostMountWorkIsCatalogs) {
    let u = r.hostMountWorkOutstanding, l = performance.now(), d = Math.min(o.deadline, r.hostMountWorkStartedAt + g) - l;
    if (d > 0) await (0, import_chunk_5appeerh.me)(u.catch(() => {
    }), d), o.waitedMs += performance.now() - l;
    if (r.hostMountWorkOutstanding === u) break;
  }
  let s = performance.now();
  if (r.hostMountWorkOutstanding !== null) return { reason: "earlier_work_outstanding" };
  if (s >= o.deadline) return { reason: "budget_spent" };
  let a = b(r, e, s, false), i = await (0, import_chunk_5appeerh.me)(a, o.deadline - s);
  return o.spentMs += performance.now() - s, i ?? { reason: "timed_out" };
}
async function VRi(o) {
  let e = (0, import_chunk_wj4me9k5.Dd)();
  while (e.hostMountWorkOutstanding !== null) {
    let r = e.hostMountWorkOutstanding;
    if (await r.catch(() => {
    }), e.hostMountWorkOutstanding === r) e.hostMountWorkOutstanding = null;
  }
  return b(e, o, performance.now(), true);
}
function Jil() {
  let o = (0, import_chunk_wj4me9k5.Dd)();
  return o.hostMountWorkOutstanding !== null && performance.now() - o.hostMountWorkStartedAt >= g;
}
function b(o, e, r, s) {
  let a = e();
  o.hostMountWorkOutstanding = a, o.hostMountWorkStartedAt = r, o.hostMountWorkIsCatalogs = s;
  let i = () => {
    if (o.hostMountWorkOutstanding === a) o.hostMountWorkOutstanding = null;
  };
  return a.then(i, i), a;
}
var f = { reason: "not_a_mount" };
async function O(o) {
  let e = await (0, import_promises.lstat)(zon).catch(S), r = "reason" in e || e.isDirectory() ? e : f, s = /* @__PURE__ */ new Map();
  for (let a of o) {
    if ("reason" in r) {
      s.set(a, r);
      continue;
    }
    let i = await (0, import_promises.lstat)((0, import_path.join)(zon, a)).catch(S);
    s.set(a, "reason" in i ? i : i.isDirectory() && i.dev !== r.dev ? { device: i.dev } : f);
  }
  return s;
}
function S(o) {
  let e = (0, import_chunk_jv7av99m.w)(o);
  return e === "ENOENT" ? { reason: "no_mount" } : { reason: "probe_failed", code: e ?? "unknown" };
}
function W(o, e, r) {
  return x(o, r, L, async (s, a) => {
    let i = e !== null && A.test(e) ? Date.parse(e) : Number.NaN;
    if (Number.isNaN(i)) return { reason: "row_date_unreadable" };
    if (a.mtimeMs <= i + N) return { reason: "not_newer_than_row" };
    let u = await s.readFile();
    return SNn(u) ? { zip: u } : { reason: "not_zip" };
  });
}
async function KRi(o) {
  return (await O(/* @__PURE__ */ new Set([o]))).get(o) ?? f;
}
async function Qil() {
  let o = await KRi(Q$t), e = "reason" in o ? o : await (0, import_promises.realpath)((0, import_path.join)(zon, Q$t)).then((r) => ({ device: o.device, root: r }), S);
  if ("reason" in e) (0, import_chunk_42tcgre6.q)("warn", "skill_host_catalog_not_read", e);
  return e;
}
async function Zil(o, e, r) {
  let s = (0, import_path.join)(o, e, "SKILL.md"), a = await H(s) ?? await qRi(s, r, import_chunk_ta56chse.sS);
  return "reason" in a ? a : await H(s) ?? { text: a.text, filePath: s };
}
async function H(o) {
  try {
    return await (0, import_promises.realpath)(o) === o ? void 0 : { reason: "file_is_link" };
  } catch (e) {
    return I(e);
  }
}
function qRi(o, e, r) {
  return x(o, e, r, async (s) => ({ text: await s.readFile({ encoding: "utf-8" }) }));
}
async function x(o, e, r, s) {
  let a;
  try {
    a = await (0, import_promises.open)(o, (0, import_chunk_6mfepmbb.Xu)());
    let i = await a.stat();
    if (i.dev !== e) return { reason: "file_on_other_device" };
    if (!i.isFile()) return { reason: "not_a_file" };
    if (i.size > r) return { reason: "too_large" };
    return await s(a, i);
  } catch (i) {
    return I(i);
  } finally {
    await a?.close().catch(() => {
    });
  }
}
function I(o) {
  let e = (0, import_chunk_jv7av99m.w)(o);
  switch (e) {
    case "ENOENT":
      return { reason: "file_absent" };
    case "ELOOP":
      return { reason: "file_is_link" };
    default:
      return { reason: "read_failed", code: e ?? "unknown" };
  }
}
var E = `${zon}/${Q$t}`;
function v(o) {
  return { dir: E, skills: new Set(o) };
}
function ej(o) {
  return o.type === "prompt" && o.fromHostCatalog === true;
}
function BO(o) {
  return o.loadedFrom === "syncedSkills" && !ej(o);
}
function ere(o) {
  return ej(o) && (0, import_chunk_5nf47kr4.Jre)((0, import_chunk_xcgcdx61.Pw)(o.name));
}
var YRi = 64, R = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ skills: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().refine(import_chunk_xcgcdx61.JRt)).min(1).max(YRi) }));
function eal() {
  let o = (0, import_chunk_3t7ve0wy.D4n)();
  if (o === void 0) return null;
  let e = R().safeParse((0, import_chunk_0jve1fep.et)(o, false));
  if (!e.success) return (0, import_chunk_w578pjby.t)('Ignoring CLAUDE_CODE_HOST_SKILL_CATALOG: expected {"skills": 1 to 64 folder names of ASCII letters, digits, ".", "_" or "-", other than "." and ".."}', { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("skill_host_catalog", "invalid_value"), null;
  return v(e.data.skills);
}
