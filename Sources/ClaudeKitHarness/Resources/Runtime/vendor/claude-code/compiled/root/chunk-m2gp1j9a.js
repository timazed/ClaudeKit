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
var chunk_m2gp1j9a_exports = {};
__export(chunk_m2gp1j9a_exports, {
  $5l: () => $5l,
  B5l: () => B5l,
  U5l: () => U5l,
  fSn: () => fSn,
  i1r: () => i1r
});
module.exports = __toCommonJS(chunk_m2gp1j9a_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_chunk_w8ry7jkt = require("/$bunfs/root/chunk-w8ry7jkt.js");
var import_chunk_sg0rp1h5 = require("/$bunfs/root/chunk-sg0rp1h5.js");
var import_chunk_02qcqgas = require("/$bunfs/root/chunk-02qcqgas.js");
var import_chunk_07phnrnk = require("/$bunfs/root/chunk-07phnrnk.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_2hk3sg53 = require("/$bunfs/root/chunk-2hk3sg53.js");
var import_chunk_ye486ddj = require("/$bunfs/root/chunk-ye486ddj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var pe = /* @__PURE__ */ new Set(["canceled", "policy_pending", "egress_blocked", "essential_traffic", "unexpected", "credential_name", import_chunk_2hk3sg53.$1e, ...import_chunk_07phnrnk.iYs]);
var me = /* @__PURE__ */ new Set(["not_uploaded_here", ...import_chunk_07phnrnk.sYs]);
var ke = /* @__PURE__ */ new Set(["canceled", "no_token", "bad_name", "unexpected", ...import_chunk_sg0rp1h5.msr]), y = new import_chunk_pzzqg6s3.ze(() => ({ last: Promise.resolve(), uploaded: /* @__PURE__ */ new Set() })), L = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ path: (0, import_chunk_adx6804h.n)().min(1).max(import_chunk_02qcqgas.Vtt) })), _e = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(true), file_id: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(false), code: (0, import_chunk_adx6804h.n)().max(64) })]));
async function $5l(t, e, o, a, r) {
  let { path: l } = L().parse(t);
  if (r === import_chunk_2hk3sg53.$1e) return { summary: `not uploaded: ${r}`, output: { ok: false, code: r } };
  let d = y.of(o), f = () => z(l, e, o, a, r), u = d.last.then(f, f);
  d.last = u;
  let m = await u;
  if (m.ok) d.uploaded.add(m.file_id);
  return { summary: m.ok ? "uploaded" : `not uploaded: ${m.code}`, output: m };
}
var P = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ file_id: (0, import_chunk_adx6804h.n)().min(1).max(256) })), Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(true) }), (0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(false), code: (0, import_chunk_adx6804h.n)().max(64) })]));
async function U5l(t, e) {
  let { file_id: o } = P().parse(t);
  if (!y.of(e).uploaded.delete(o)) return { summary: "not deleted: not_uploaded_here", output: { ok: false, code: "not_uploaded_here" } };
  let a = await (0, import_chunk_07phnrnk.WVo)([o]);
  return a === void 0 ? { summary: "deleted", output: { ok: true } } : { summary: `not deleted: ${a}`, output: { ok: false, code: a } };
}
var h = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ file_id: (0, import_chunk_adx6804h.n)().regex(import_chunk_w8ry7jkt.kUe), save_as: (0, import_chunk_adx6804h.n)().min(1).max(255), bytes: (0, import_chunk_adx6804h.E)().int().min(0).max(import_chunk_271f5kxt.jDe), session_folder: (0, import_chunk_adx6804h.u1e)() })), Oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(true), path: (0, import_chunk_adx6804h.n)().max(import_chunk_02qcqgas.Vtt), bytes: (0, import_chunk_adx6804h.E)().int().min(0) }), (0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(false), code: (0, import_chunk_adx6804h.n)().max(64), status: (0, import_chunk_adx6804h.E)().int().min(100).max(599).optional() })]));
async function B5l(t, e, o, a) {
  let r = h().parse(t), l = y.of(o), d = () => x(r, e, a), f = l.last.then(d, d);
  l.last = f;
  let u = await f;
  return { summary: u.ok ? "saved" : `not saved: ${u.code}`, output: u };
}
async function x({ file_id: t, save_as: e, bytes: o, session_folder: a }, r, l) {
  if (r.aborted) return { ok: false, code: "canceled" };
  let d = { fileId: t, name: e, sizeBytes: o }, f = false, u;
  try {
    if (await (0, import_chunk_478yxt5w.O7)({ isFilesDial: true, signal: r }), r.aborted) return { ok: false, code: "canceled" };
    let m = (0, import_chunk_sg0rp1h5.LRn)(d, r);
    if (m !== void 0) return { ok: false, code: m.code };
    if (!(0, import_chunk_865at33z.fz)()) return { ok: false, code: "no_token" };
    if (e !== (0, import_chunk_sg0rp1h5.Vgt)(e, t)) return { ok: false, code: "bad_name" };
    f = true;
    let k = import_path.posix.join(import_chunk_6mfepmbb.zze, a), F = import_path.posix.join(k, import_chunk_sg0rp1h5.DRn);
    if (await l.makeFoldersAsWritten([import_chunk_6mfepmbb.zze, k, F]), !await (0, import_chunk_sg0rp1h5.S8o)(F, o)) return { ok: false, code: "no_room" };
    let _ = await (0, import_chunk_sg0rp1h5.y8o)(d, void 0, r);
    if (!_.ok) return _.code === "refused" ? { ok: false, code: "refused", status: _.status } : { ok: false, code: _.code };
    u = _;
    let R = Array.from({ length: import_chunk_sg0rp1h5.psr }, (j, w) => (0, import_chunk_sg0rp1h5.x7r)(e, w + 1)), S = await l.placeStreamedFile(F, R, u.bytes, r);
    return S === void 0 ? { ok: false, code: "name_taken" } : { ok: true, path: S, bytes: u.bytesRead() };
  } catch (m) {
    if (u !== void 0) return { ok: false, code: u.codeOfFailure(m) };
    if ((0, import_chunk_jv7av99m.Fe)(m) || r.aborted) return { ok: false, code: "canceled" };
    return (0, import_chunk_k449cc64.i)(m), { ok: false, code: f ? "write_failed" : "unexpected" };
  } finally {
    u?.close();
  }
}
async function z(t, e, o, a, r) {
  if (e.aborted) return { ok: false, code: "canceled" };
  if (await (0, import_chunk_478yxt5w.O7)({ isFilesDial: true, signal: e }), e.aborted) return { ok: false, code: "canceled" };
  let l = (0, import_chunk_2zeyvjwb.t2)() ? "policy_pending" : (0, import_chunk_ye486ddj.EW)();
  if (l !== void 0) return { ok: false, code: l };
  if (!(0, import_chunk_865at33z.fz)()) return { ok: false, code: "no_token" };
  let d = (0, import_path.normalize)(t), { realDirectory: f } = a;
  try {
    let k = O(d) ? void 0 : await (0, import_chunk_w82axegn.J6)(d, d, { realDirectory: f });
    if (k === "credential_name") return { ok: false, code: "credential_name" };
    if (k === "named_fork") return { ok: false, code: "path_rejected" };
  } catch {
    return { ok: false, code: "path_rejected" };
  }
  let u = await fSn(t, o, a, r);
  if (u === void 0) return { ok: false, code: "path_rejected" };
  let m = await (0, import_chunk_w82axegn.J6)(d, u, { attached: O(d) && O(u), realDirectory: f });
  if (m !== void 0) return { ok: false, code: m === "credential_name" ? m : "path_rejected" };
  try {
    return await (0, import_chunk_07phnrnk.BVo)(u, void 0, e);
  } catch (k) {
    if ((0, import_chunk_jv7av99m.Fe)(k)) return { ok: false, code: "canceled" };
    return (0, import_chunk_k449cc64.i)(k), { ok: false, code: "unexpected" };
  }
}
function O(t) {
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) && T(t, import_chunk_6mfepmbb.yD);
}
async function fSn(t, e, o, a, r = []) {
  let l;
  try {
    l = await o.localFileAt(t);
  } catch {
    return;
  }
  let d = (0, import_path.normalize)(t), f = a !== void 0 && (0, import_chunk_6e68m1dj.hn)() && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" ? r : [];
  return (0, import_chunk_w82axegn.ifs)(l) || I(d, l, a) || !await C(d, l, e, o, f) ? void 0 : l;
}
async function C(t, e, o, { realDirectory: a, home: r }, l) {
  if (await (0, import_chunk_w82axegn.f_r)(e, a)) return false;
  if (i1r(t, e, l)) return true;
  let d = o.project?.originalCwd;
  if (d === void 0 || d === "") return false;
  let f = await a(r);
  if (f === void 0) return false;
  return f !== d && !T(f, d) && T(e, d);
}
function I(t, e, o) {
  if (o === void 0) return false;
  if ((0, import_chunk_ht27b0vz.Tr)(o, import_chunk_p1ewvgeh.Uh, g((0, import_chunk_ht27b0vz.Vs)(o), t, e)) || (0, import_chunk_ht27b0vz.Di)(o, import_chunk_p1ewvgeh.Uh, g((0, import_chunk_ht27b0vz.al)(o), t, e))) return true;
  let a = [(0, import_chunk_w578pjby.ua)(t), (0, import_chunk_w578pjby.ua)(e)];
  if (a.some((r) => r.unresolved)) return true;
  return a.some((r) => r.spellings.some((l) => (0, import_chunk_p1ewvgeh.Ia)(l, o, "read", "deny") !== null || (0, import_chunk_p1ewvgeh.Ia)(l, o, "read", "ask") !== null));
}
function g(t, e, o) {
  return i1r(e, o) ? t.filter(U) : t;
}
function U({ source: t }) {
  return t !== "userSettings" && !import_chunk_xzvhvaa2.WA.some((e) => e === t);
}
function i1r(t, e, o = []) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return false;
  let a = (0, import_chunk_n74jpb9a.Yxi)();
  return [...import_chunk_6mfepmbb.NMs, ...o.map((r) => r.product)].some((r) => T(e, r)) || [...a === void 0 ? [] : [a], ...o].some((r) => (0, import_chunk_n74jpb9a.KDe)(t, e, r));
}
function T(t, e) {
  return t.startsWith(e + import_path.sep);
}
