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
var chunk_k46cdxhb_exports = {};
__export(chunk_k46cdxhb_exports, {
  Aoi: () => Aoi,
  Bgt: () => Bgt,
  JYr: () => JYr,
  Kor: () => Kor,
  Nue: () => Nue,
  QYr: () => QYr,
  Roi: () => Roi,
  SUa: () => SUa,
  TRn: () => TRn,
  Wgt: () => Wgt,
  XYr: () => XYr,
  Xor: () => Xor,
  YYr: () => YYr,
  Yor: () => Yor,
  ZYr: () => ZYr,
  _Te: () => _Te,
  _Ua: () => _Ua,
  a0t: () => a0t,
  bUa: () => bUa,
  e7r: () => e7r,
  gUa: () => gUa,
  hUa: () => hUa,
  i0t: () => i0t,
  mUa: () => mUa,
  pUa: () => pUa,
  qor: () => qor,
  r4e: () => r4e,
  wUa: () => wUa,
  wie: () => wie,
  yUa: () => yUa
});
module.exports = __toCommonJS(chunk_k46cdxhb_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
class Nue {
  cachedSessionId = null;
  initialized = false;
  initializeInFlight = null;
  discoverInFlight = null;
  servedCatalogHashes = /* @__PURE__ */ new Map();
  approvedPlans = /* @__PURE__ */ new Map();
  verifiedProjectGrants = /* @__PURE__ */ new Set();
  recardAllProjects = false;
  recardProjects = /* @__PURE__ */ new Set();
  grantIneligibleProjects = /* @__PURE__ */ new Set();
  planStore = /* @__PURE__ */ new Map();
  planUploads = /* @__PURE__ */ new WeakMap();
  consentCache = null;
  consentFetch = null;
  consentCacheGeneration = 0;
  grantsFetch = null;
}
(0, import_chunk_adx6804h.B)();
var v = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ projectId: (0, import_chunk_adx6804h.n)(), writes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), deletes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), localDir: (0, import_chunk_adx6804h.n)().optional() })), b = /^plan_[a-z0-9]{1,16}_[a-f0-9]{12}$/;
function k(e) {
  let t = e.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16) || "anon", r = (0, import_crypto.randomBytes)(6).toString("hex");
  return `plan_${t}_${r}`;
}
function wie(e) {
  return e.replace(/\\/g, "/").split("/").filter((t) => t !== "" && t !== ".").join("/");
}
var f = "\\u200B-\\u200F\\u2028\\u2029\\u00AD\\uFEFF#?", E = [[/[\u2018\u2019\u201A\u201B\u2039\u203A]/g, "'"], [/[\u201C\u201D\u201E\u201F\u00AB\u00BB]/g, '"'], [/[\u2013\u2014]/g, "-"], [/\u2026/g, "..."], [/[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, " "], [new RegExp(`[${f}]`, "g"), ""]];
function _Te(e) {
  let t = wie((0, import_chunk_7cfjrnwy.vc)(e)).split("/"), r = E.reduce((s, [o, i]) => s.replace(o, i), t.pop() ?? "");
  return r === "" || r === "." || r === ".." ? "" : [...t, r].join("/");
}
function YYr(e) {
  return h(wie(e)) || h(_Te(e));
}
function h(e) {
  let t = e.toLowerCase();
  return t === "claude.md" || t.startsWith("claude.md/") || t === "claude.local.md" || t.startsWith("claude.local.md/") || t === ".claude" || t.startsWith(".claude/");
}
function Bgt(e) {
  return /[*?]/.test(e);
}
function i0t(e) {
  let t = wie(e);
  return Bgt(t) ? t : _Te(t);
}
var P = 3, a0t = 256;
function y(e) {
  let t = "", r = 0, s = 0, o = () => {
    if (++s > P) throw Error(`glob "${e}" exceeds ${P} '*'/'**' wildcards`);
  };
  while (r < e.length) {
    let i = e.charAt(r);
    if (i === "*" && e.charAt(r + 1) === "*") if (o(), e.charAt(r + 2) === "/") t += "(?:.*/)?", r += 3;
    else t += ".*", r += 2;
    else if (i === "*") o(), t += "[^/]*", r += 1;
    else if (i === "?") t += "[^/]", r += 1;
    else if (/[.+^$|()[\]{}\\]/.test(i)) t += "\\" + i, r += 1;
    else t += i, r += 1;
  }
  return new RegExp(`^${t}$`);
}
function XYr(e, t) {
  let r = _Te(e);
  if (!r) return false;
  if (r.length > a0t) return false;
  if (r.split("/").includes("..") || r.includes("\0")) return false;
  for (let s of t) {
    let o = i0t(s);
    if (Bgt(o)) try {
      if (y(o).test(r)) return true;
    } catch {
    }
    else if (o === r) return true;
  }
  return false;
}
function pUa(e, t) {
  let r = { projectId: t.projectId, writes: t.writes.map(i0t), deletes: t.deletes.map(i0t), ...t.localDir !== void 0 && { localDir: t.localDir } }, s = v().safeParse(r);
  if (!s.success) throw Error("registerPlan: plan failed shape validation");
  for (let i of [...s.data.writes, ...s.data.deletes]) if (Bgt(i)) y(i);
  let o = k(t.projectId);
  return e.planStore.set(o, s.data), o;
}
function Aoi(e, t) {
  let r = e.planUploads.get(t) ?? /* @__PURE__ */ new Map();
  return e.planUploads.set(t, r), r;
}
function JYr(e, t) {
  if (!b.test(t)) return null;
  return e.planStore.get(t) ?? null;
}
function a(e) {
  return e.toLowerCase().replace(/^urn:uuid:/, "").replace(/[{}-]/g, "");
}
function mUa(e) {
  e.planStore.clear();
}
function QYr(e, t) {
  let r = a(t);
  for (let [s, o] of e.planStore) if (a(o.projectId) === r) e.planStore.delete(s);
}
var x = 9e5, g = 20, Kor = 80, S = 2e3, D = 256, F = new RegExp(`[\\x00-\\x1f\\x7f-\\x9f,:[\\]\\u061C\\u2026\\u202A-\\u202E\\u2066-\\u2069\\uFF0C\\uFF1A\\uFF3B\\uFF3D${f}]`);
function d(e) {
  return F.test(e);
}
function I(e, t) {
  if (e.length > g || t.length > g) return false;
  for (let o of [...e, ...t]) if (o.length > Kor || d(o)) return false;
  let r = (o) => o.length === 0 ? 0 : 32 + o.reduce((i, l) => i + l.length, 0) + 2 * Math.max(0, o.length - 1);
  return 240 + r(e) + r(t) <= S;
}
function Roi(e) {
  if (e === void 0 || e.length === 0 || e.length > g) return false;
  for (let o of e) if (((0, import_chunk_w578pjby._)(o)?.length ?? 1 / 0) > Kor || d(o)) return false;
  let t = Math.max(0, Math.min(200, Math.floor(1800 / e.length) - 95)), r = 44 + (t > 0 ? t + 3 : 0);
  return 272 + e.reduce((o, i) => o + i.length + r, 0) + 2 * Math.max(0, e.length - 1) <= S;
}
function M(e) {
  return e.length > 0 && (0, import_chunk_w578pjby._)(e).length <= Kor && !d(e);
}
var qor = /* @__PURE__ */ new Set(["update_sharing", "add_member", "update_member_role"]);
function TRn(e, t) {
  let r = a(t);
  for (let [s, o] of e.approvedPlans) if (a(o.projectId) === r) e.approvedPlans.delete(s);
}
function hUa(e) {
  e.approvedPlans.clear();
}
function Wgt(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.verifiedProjectGrants.add(t);
}
function ZYr(e, t) {
  return e.verifiedProjectGrants.has(t);
}
function Yor(e, t) {
  let r = a(t);
  for (let s of e.verifiedProjectGrants) if (a(s) === r) e.verifiedProjectGrants.delete(s);
}
function r4e(e, t) {
  return e.recardAllProjects || e.recardProjects.has(a(t));
}
function e7r(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.recardProjects.add(a(t));
}
function gUa(e) {
  e.verifiedProjectGrants.clear(), e.recardAllProjects = true;
}
function _Ua(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.grantIneligibleProjects.add(a(t));
}
function yUa(e, t) {
  return e.grantIneligibleProjects.has(a(t));
}
function SUa(e, t, r, s = Date.now()) {
  if (typeof t !== "string" || t.length === 0) return false;
  if (TRn(e, r.projectId), !M(r.projectId) || !I(r.writes, r.deletes)) return false;
  let o = r.serverExpiresAtMs;
  if (typeof o === "number" && !Number.isFinite(o)) return false;
  if (typeof o === "number" && Number.isFinite(o) && o <= s) return false;
  return e.approvedPlans.set(t, { projectId: r.projectId, writes: new Set(r.writes.map(wie)), deletes: new Set(r.deletes.map(wie)), expiresAt: typeof o === "number" && Number.isFinite(o) ? Math.min(o, s + x) : s + x }), true;
}
var w = { write_files: (e) => {
  let t = e.files;
  if (!Array.isArray(t)) return null;
  let r = [];
  for (let s of t) {
    let o = s?.path;
    if (typeof o !== "string") return null;
    r.push(o);
  }
  return { targets: r, set: "writes" };
}, delete_files: (e) => {
  if (e.paths !== void 0 && e.files !== void 0) return null;
  let t = [];
  if (Array.isArray(e.paths)) {
    for (let r of e.paths) {
      if (typeof r !== "string") return null;
      t.push(r);
    }
    return { targets: t, set: "deletes" };
  }
  if (Array.isArray(e.files)) {
    for (let r of e.files) {
      let s = r?.path;
      if (typeof s !== "string") return null;
      t.push(s);
    }
    return { targets: t, set: "deletes" };
  }
  return null;
}, create_support_js: (e) => {
  let t = e.path;
  if (t === void 0 || t === "") return { targets: ["support.js"], set: "writes" };
  if (typeof t !== "string") return null;
  return { targets: [t], set: "writes" };
} };
function A(e) {
  return Object.hasOwn(w, e);
}
function T(e) {
  if (d(e)) return `rejected character in path: ${e}`;
  if (YYr(e)) return `reserved path: ${e}`;
  if (wie(e).toLowerCase().split("/").some((r) => {
    let s = r.replace(/[\s.]+$/, "").replace(/^\s+/, "");
    return s === "claude.md" || s === "claude.local.md" || s === ".claude" || /~\d/.test(s);
  })) return `reserved segment: ${e}`;
  let t = wie(e);
  if (!t || t.split("/").some((r) => /^\s*\.\.[\s.]*$/.test(r)) || t.includes("\0")) return `path does not normalize: ${e}`;
  return null;
}
function Xor(e, t) {
  let r = A(e) ? w[e] : void 0;
  if (!r || !t) return { outcome: "ask", reason: "not a plan-gated operation" };
  let s = r(t);
  if (!s) return { outcome: "ask", reason: "target paths unenumerable" };
  let { targets: o, set: i } = s;
  if (o.length === 0) return { outcome: "ask", reason: "no target paths", targets: o };
  if (o.length > D) return { outcome: "ask", reason: `more than ${D} target paths`, targets: o };
  for (let l of o) {
    let u = T(l);
    if (u !== null) return { outcome: "ask", reason: u, targets: o };
  }
  return { outcome: "pass", targets: o, set: i };
}
function bUa(e, t, r, s = Date.now()) {
  if (!A(t) || !r) return { outcome: "ask", reason: "not a plan-gated operation" };
  let { plan_token: o, project_id: i } = r;
  if (typeof o !== "string" || typeof i !== "string") return { outcome: "ask", reason: "missing plan_token or project_id" };
  let l = e.approvedPlans.get(o);
  if (!l) return { outcome: "ask", reason: "plan_token not approved in this process" };
  if (s >= l.expiresAt) return e.approvedPlans.delete(o), { outcome: "ask", reason: "approved plan expired" };
  if (l.projectId !== i) return { outcome: "ask", reason: "plan_token is for a different project" };
  let u = Xor(t, r);
  if (u.outcome !== "pass") return { outcome: "ask", reason: u.reason };
  let j = u.set === "writes" ? l.writes : l.deletes;
  for (let m of u.targets) if (!j.has(wie(m))) return { outcome: "ask", reason: `path not in approved plan: ${m}` };
  return { outcome: "allow" };
}
function wUa(e) {
  for (let t of e) if (t?.type === "text" && typeof t.text === "string") try {
    let r = (0, import_chunk_w578pjby.te)(t.text), s = r.plan_token;
    if (typeof s !== "string" || s.length === 0) return null;
    let o = r.expires_at, i = typeof o === "number" && Number.isFinite(o * 1e3) ? o * 1e3 : null;
    return { token: s, expiresAtMs: i };
  } catch {
    return null;
  }
  return null;
}
