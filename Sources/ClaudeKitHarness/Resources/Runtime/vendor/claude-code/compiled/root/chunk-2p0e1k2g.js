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
var chunk_2p0e1k2g_exports = {};
__export(chunk_2p0e1k2g_exports, {
  JTa: () => JTa,
  kqs: () => kqs
});
module.exports = __toCommonJS(chunk_2p0e1k2g_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_6xae35jp = require("/$bunfs/root/chunk-6xae35jp.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_02wf5c4s = require("/$bunfs/root/chunk-02wf5c4s.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_ztgy6ctb = require("/$bunfs/root/chunk-ztgy6ctb.js");
var import_chunk_jhy72swy = require("/$bunfs/root/chunk-jhy72swy.js");
var import_chunk_drmc79tc = require("/$bunfs/root/chunk-drmc79tc.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_y2bpkgdh = require("/$bunfs/root/chunk-y2bpkgdh.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var kqs = {};
(0, import_chunk_w1d7ygsk.jr)(kqs, { VCS_HOOKS: () => JTa, default: () => kqs });
var q = '("(?:[^"\\\\]|\\\\.)*"|.+?)', Ae = new RegExp(`^${q} -> ${q}$`), Ve = /^(?:U.|.U|AA|DD)$/;
function H(e) {
  return e.startsWith('"') ? (0, import_chunk_e15pxvhz.lDe)(e.slice(1, -1)) : e;
}
function Oe(e) {
  return e.split(`
`).flatMap((o) => {
    let r = o.slice(0, 2), n = o.slice(3);
    if (n === "") return [];
    let [, i, a] = /[RC]/.test(r) && Ae.exec(n) || [];
    if (i !== void 0 && a !== void 0) {
      let h = { path: H(a), state: "added" };
      return r.includes("R") ? [{ path: H(i), state: "deleted" }, h] : [h];
    }
    let c = H(n);
    if (r === "??") return [{ path: c, state: "untracked" }];
    if (Ve.test(r)) return [{ path: c, state: "conflict" }];
    if (r.includes("D")) return [{ path: c, state: "deleted" }];
    return [{ path: c, state: r.includes("A") ? "added" : "modified" }];
  });
}
function _e(e) {
  let o = String(e.path);
  switch (e.status) {
    case "added":
    case "deleted":
    case "untracked":
      return { path: o, state: e.status };
    case "missing":
      return { path: o, state: "deleted" };
    default:
      return { path: o, state: "modified" };
  }
}
async function R(e) {
  let { worktreePath: o, headCommit: r, baseChangeset: n, hookBased: i, realPath: a } = e;
  if (!(e.copy.madeBy === "core" && (i ? n !== void 0 && a !== void 0 : r !== void 0))) return { answer: { unknown: "Claude Code has no way to read this working copy" }, holdsWork: true };
  return K(o, r, { ...i && { hookBased: i, baseChangeset: n, sessionDir: e.sessionDir, vettedRealPath: a } });
}
async function z(e, o) {
  if (o !== void 0 && !(0, import_chunk_w5s307zm.BM)(o)) return { unknown: "`since` is not a full Git commit id" };
  let { answer: r } = await K(e, o, {});
  if (r.unknown !== void 0) return r;
  let i = o === void 0 ? await (0, import_chunk_bzyb60p0.Nyt)(e, ["--ignore-missing", "HEAD", "--not", "--remotes"], []) : r.unpublished, a = r.revision ?? await (0, import_chunk_w5s307zm.y6e)(e);
  return i === null ? { unknown: "the commits could not be counted" } : { ...r, unpublished: i, ...a !== null && { revision: a } };
}
async function K(e, o, r) {
  let n = [], i = await (0, import_chunk_bzyb60p0.gBe)(e, o, { ...r, onRead: (p) => n.push(p) }), a = i.dirty || i.commitsAhead > 0 || i.checkoutMoved === true, [c] = n;
  if (c === void 0 || i.gitError === true || i.submoduleWork?.kind === "unverifiable") return { answer: { unknown: "the working copy could not be read" }, holdsWork: a };
  let h = "rows" in c ? c.changeset : await (0, import_chunk_w5s307zm.M_n)(e);
  return { answer: { changes: "rows" in c ? c.rows.map(_e) : [...Oe(c.porcelain), ...(i.submoduleWork?.paths ?? []).map((p) => ({ path: p, state: "modified" }))], unpublished: i.commitsAhead, ...h !== null && { revision: h } }, holdsWork: a };
}
class T {
  #r;
  #e;
  #t = false;
  constructor(e) {
    this.#r = e;
  }
  link = { name: "core", isCore: true, budgetMs: 0, run: () => this.#o() };
  #o() {
    if (this.#e === void 0 && this.#t) return Promise.reject(Error("the call was already answered"));
    return this.#e ??= this.#r(), this.#e;
  }
  async settle({ name: e }, o, r) {
    if ((0, import_chunk_9e5mdyfk.$ot)(e)) return { answer: await this.#o(), isCores: true };
    let n = await o().catch((i) => {
      if (r?.aborted === true && this.#e === void 0) throw this.#t = true, new import_chunk_jv7av99m.Ie();
      return (0, import_chunk_w578pjby.t)(`vcs hooks gave no answer: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "warn" }), this.#o();
    });
    return this.#t = true, { answer: n, isCores: (0, import_chunk_z688m88d.Zt)(n, await this.#e) };
  }
}
function V(e, o, r) {
  return (0, import_chunk_5zps0wmn.Qi)(e, o) && !(0, import_chunk_02wf5c4s.WW)(e, r);
}
function Z(e, { origin: o, signal: r, core: n }) {
  let i = new T(n);
  return i.settle(e, () => (0, import_chunk_bzyb60p0.Aa)("vcs.isolate", { origin: o, signal: r, core: { "vcs.isolate": i.link } })(e), r);
}
function F(e, { origin: o, signal: r, core: n }) {
  let i = new T(n);
  return i.settle({}, () => (0, import_chunk_bzyb60p0.Aa)("vcs.list", { origin: o, signal: r, core: { "vcs.list": i.link } })(e), r);
}
function O(e, { origin: o, signal: r, core: n }) {
  let i = new T(n);
  return i.settle(e, () => (0, import_chunk_bzyb60p0.Aa)("vcs.status", { origin: o, signal: r, core: { "vcs.status": i.link } })(e), r);
}
function _(e, { origin: o, signal: r, core: n }) {
  let i = new T(n);
  return i.settle(e, () => (0, import_chunk_bzyb60p0.Aa)("vcs.release", { origin: o, signal: r, core: { "vcs.release": i.link } })(e), r);
}
function E(e, o) {
  return { in_place: e.isInPlace === true, vcs: o && e.copy.madeBy === "core" ? (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Feo)(e)) : (0, import_chunk_78g0060s.S)("mod") };
}
function D(e) {
  return !import_chunk_drmc79tc.$4r.test(e) && !/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}<>]/u.test(e);
}
async function L(e, o, r, n = false) {
  if (!D(e)) throw new import_chunk_bzyb60p0.gd(`Cannot use the ${r} hook's folder: its path holds an angle bracket or a character that does not print.`);
  let i = `Cannot use the ${r} hook's folder: ${e}`;
  if (!(0, import_path.isAbsolute)(e)) throw new import_chunk_bzyb60p0.gd(`${i} is not an absolute path.`);
  await (0, import_chunk_bzyb60p0.HZo)(e, o, r);
  let a = (0, import_chunk_mndk3x2g.Nh)(e), c = (0, import_chunk_rb36kwbn.ui)()?.originalCwd, p = [...n && (0, import_chunk_6h9mds0d.bE)((0, import_chunk_f9x2f6cx.Oo)(), e) === "same" ? [] : [o, (0, import_chunk_f9x2f6cx.Te)()], c].find((w) => w !== void 0 && (0, import_chunk_mndk3x2g.Y6)((0, import_chunk_mndk3x2g.Nh)(w), a));
  if (p !== void 0) throw new import_chunk_bzyb60p0.gd(`${i} is, or holds, ${p}, which the copy was to stand apart from.`);
}
async function He(e, o, { name: r, from: n, for: i, agentId: a }, { make: c, mayStartThere: h, may: p }) {
  if (p !== void 0 && !await p("fs.list", { path: e })) throw new import_chunk_bzyb60p0.gd("this folder may not be read");
  let [w = e, k = n] = [e, n].map((y) => (0, import_chunk_mndk3x2g.Nh)(y)).map(({ canonical: y, lexical: C }) => y ?? C), g = (0, import_path.isAbsolute)(e) && !(0, import_chunk_z6pfqf6e.ad)(e) && (0, import_chunk_2yx6c1y2.bv)(w, k);
  if (i === "agent" && g && c !== void 0) return { isInPlace: true, lineage: new Set(a === void 0 ? [] : [a]), worktreePath: n, hookBased: true, copy: { madeBy: "mod", name: r, ...o }, from: n, realPath: await (0, import_promises.realpath)(n).catch(() => {
    return;
  }), agentId: a };
  await L(e, n, "vcs.isolate", h);
  try {
    let y = await (0, import_promises.realpath)(e);
    return await (0, import_chunk_bzyb60p0.Hui)(y), { worktreePath: e, hookBased: true, copy: { madeBy: "mod", name: r, ...o }, from: n, realPath: y, agentId: a };
  } catch (y) {
    throw new import_chunk_bzyb60p0.gd(`Cannot use the vcs.isolate hook's folder: ${e} could not be pinned down (${(0, import_chunk_jv7av99m.d)(y)}).`);
  }
}
function x(e, o) {
  let { worktreePath: r, realPath: n, copy: i } = e;
  (0, import_chunk_rb36kwbn.DYi)(n), (0, import_chunk_rb36kwbn.HYi)(r, i, o && { input: o, realPath: n });
}
async function I(e, { origin: o, signal: r, make: n, onFolderRefused: i, mayStartThere: a, may: c }) {
  (0, import_chunk_bzyb60p0.pBe)(e.name), (0, import_chunk_bzyb60p0.brt)("agent worktree");
  let h = {}, { answer: p, isCores: w } = await Z(e, { origin: o, signal: r, async core() {
    if (n === void 0) return { deny: "Claude Code makes no working copy on a resume" };
    try {
      let C = await n((0, import_chunk_harsxaq1.Dg)(e.for) ? { isModAsked: true } : {});
      return h.made = C, { path: C.worktreePath, ...(0, import_chunk_bzyb60p0.aen)(C) };
    } catch (C) {
      return h.failure = { error: C }, { deny: (0, import_chunk_jv7av99m.d)(C) };
    }
  } }), { made: k, failure: g } = h, y;
  if (k !== void 0) {
    let C = p.deny === void 0 && p.path === k.worktreePath;
    y = await (0, import_chunk_bzyb60p0.$eo)(k, C ? (0, import_chunk_bzyb60p0.XLt)(p) : (0, import_chunk_bzyb60p0.aen)(k), e);
  } else if (p.deny === void 0) y = await He(p.path, (0, import_chunk_bzyb60p0.XLt)(p), e, { make: n, mayStartThere: a, may: c }).catch((C) => {
    throw (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_vcs_isolate", "vet_refused"), i?.(), C;
  });
  else {
    if (n !== void 0 || !w) (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_vcs_isolate", w ? "core_refused" : "denied");
    throw w && g !== void 0 ? g.error : new import_chunk_bzyb60p0.gd(`A vcs.isolate hook refused to make a copy: ${(0, import_chunk_tp3c5q2s.Qa)(p.deny, { head: 300, tail: 100 })}`);
  }
  if (y.isInPlace) (0, import_chunk_rb36kwbn.UX)().add(y);
  else if (n !== void 0) x(y, k ? void 0 : e);
  return (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_vcs_isolate", E(y, true)), y;
}
async function X(e) {
  if (e.realPath === void 0) return e.isInPlace === true;
  if (e.isInPlace && (0, import_chunk_bzyb60p0.QLt)(e.realPath, (0, import_chunk_18rsj2ts.pe)())) return true;
  let o = e.isInPlace ? e.realPath : e.worktreePath, { outcome: r } = await (0, import_chunk_bzyb60p0.adr)(o, { vettedReal: e.realPath, anchors: [e.gitRoot, ...(0, import_chunk_bzyb60p0.xZo)(e.from)] });
  return r === "clear" || r === "gone";
}
function Fe(e, o) {
  return !e.isInPlace && (0, import_chunk_bzyb60p0.Feo)(e) === "hook" && [...(0, import_chunk_rb36kwbn.UX)()].some(({ from: r, realPath: n }) => (0, import_chunk_mndk3x2g.Y6)((0, import_chunk_mndk3x2g.Nh)(n ?? r), (0, import_chunk_mndk3x2g.Nh)(o)));
}
function ee(e, o) {
  if (Fe(e, o)) return import_chunk_9e5mdyfk.Rao;
  return !e.isInPlace && (0, import_chunk_rb36kwbn.EOo)().has(o) ? import_chunk_9e5mdyfk.Vpr : void 0;
}
async function te(e, o, r) {
  if (!await X(e)) return { ...await R(e), isCores: true };
  let n = { holdsWork: true }, { answer: i, isCores: a } = await O(o, { origin: r, async core() {
    let p = await R(e);
    return n.holdsWork = p.holdsWork, p.answer;
  } }), c = E(e, a);
  if (i.unknown === void 0) (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_vcs_status", c);
  else (0, import_chunk_cqa9hrgx.l)("plugin_function_hooks_vcs_status", "unknown", c);
  if (!a && e.copy.madeBy === "core" && (0, import_chunk_bzyb60p0.Feo)(e) !== "hook") {
    let p = await R(e);
    if (p.holdsWork) return { ...p, isCores: true };
  }
  let h = ee(e, o.path);
  if (h !== void 0) return { isCores: true, answer: { unknown: h }, holdsWork: true };
  return { isCores: a, answer: i, holdsWork: a ? n.holdsWork : i.unknown !== void 0 || i.changes.length > 0 || i.unpublished > 0 || i.revision !== void 0 && i.revision !== o.since || !e.isInPlace && await (0, import_chunk_6mfepmbb.aEe)(o.path) !== 0 };
}
async function G(e) {
  return !(0, import_chunk_bzyb60p0.Gie)(e) && (0, import_promises.lstat)(e).then(async (o) => o.isDirectory() && (await (0, import_promises.readdir)(e)).length === 0).catch(import_chunk_jv7av99m.kn);
}
async function B(e, { answer: o, isCores: r }, n) {
  if (r || n || o.kept !== void 0) return o;
  return await G(e) ? o : { kept: "a vcs.release hook said released, but the folder is not seen to be gone or empty" };
}
async function oe(e, o, { origin: r, storageV5: n, isSyncAsked: i, core: a }) {
  if (!await X(e)) return a();
  let c = i || e.isInPlace ? null : await (0, import_chunk_bzyb60p0.jui)(e.worktreePath, o.isDiscard ? "forced" : "plain", e.gitRoot, n);
  if (c !== null) return { kept: c.said };
  let h = o.isDiscard ? void 0 : ee(e, o.path);
  if (h !== void 0) return { kept: h };
  let p = await _(o, { origin: r, core: () => a().catch((g) => ({ kept: (0, import_chunk_jv7av99m.d)(g) })) }), w = E(e, p.isCores), { kept: k } = await B(o.path, p, w.in_place);
  if (k === void 0) return (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_vcs_release", w), { isReleased: true, note: p.answer.note };
  return (0, import_chunk_w578pjby.t)(`Working copy ${o.path} kept: ${k}`), (0, import_chunk_cqa9hrgx.l)("plugin_function_hooks_vcs_release", "kept", w), { kept: k };
}
async function re(e) {
  let o = (0, import_chunk_e15pxvhz.Ffe)();
  if ((0, import_chunk_ztgy6ctb.rQn)() || !await (0, import_chunk_w5s307zm.l$)() || !(0, import_chunk_e15pxvhz.ODn)() || !(0, import_chunk_865at33z.C6t)(o)) return null;
  let r = (0, import_chunk_w5s307zm.Mi)(o), n = await (0, import_chunk_z6pfqf6e.T$)(e), i = n && (0, import_chunk_w5s307zm.Gy)(n), [a, c] = await Promise.all([r, i].map((h) => h && (0, import_chunk_z6pfqf6e.T$)(h)));
  return a && a === c ? r : null;
}
async function se(e) {
  let o = (0, import_chunk_rb36kwbn.ui)();
  if (e === null || (0, import_chunk_rb36kwbn.dFe)(e)?.madeBy === "mod" || o?.vcsCopy?.madeBy === "mod" && e === (o.realPath ?? o.worktreePath)) return [];
  try {
    return (await (0, import_chunk_bzyb60p0.tCe)(e)).filter(({ prunable: r, bare: n }) => !r && !n).map(({ worktreePath: r, worktreeBranch: n }) => ({ path: r.replaceAll("/", import_path2.sep), ...(0, import_chunk_bzyb60p0.XLt)({ vcs: "git", branch: n }) }));
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`vcs.list: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
    return;
  }
}
function ie(e) {
  return e.filter(({ path: o }) => D(o)).map(({ path: o, vcs: r, branch: n }) => ({ path: o, vcs: r, ...n !== void 0 && (0, import_chunk_9e5mdyfk.LDn)(n) && { branch: n } }));
}
async function U(e) {
  return (0, import_chunk_bzyb60p0.Gie)(e) ? void 0 : (0, import_promises2.realpath)(e).catch(() => {
    return;
  });
}
async function ne(e, o) {
  for (let r of e === void 0 ? [] : o) if (r.path === e || await U(r.path) === e) return r;
  return;
}
async function ae(e, o, r) {
  if ((0, import_chunk_f9x2f6cx.Y)() || import_chunk_c203g5kd.s.CLAUDE_CODE_EVAL_CONFINED) return;
  let n = (0, import_chunk_w5s307zm.Mi)(o.path), i = { copies: [] }, { answer: a, isCores: c } = await F(o, { origin: r?.origin, signal: r?.signal, async core() {
    return i.copies = r?.origin?.length ? void 0 : await se(n), i.copies ?? [];
  } });
  if (c) return;
  let h = { refuse() {
    throw (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_vcs_list", "unlisted"), new import_chunk_bzyb60p0.gd(`Cannot enter worktree: ${e} is not listed as a working copy of the repository at ${o.path}.`);
  } }, p = await U(e), w = await ne(p, ie(a));
  if (w === void 0 || p === void 0) return i.copies === void 0 ? void 0 : h;
  let k = w.path;
  if (await (0, import_chunk_bzyb60p0.ZLt)(e) || await (0, import_chunk_bzyb60p0.ZLt)(p) || (0, import_chunk_w5s307zm.v0r)(p) || n !== null && await U(n) === p || await ne(p, i.copies ?? []) !== void 0) return;
  if (![(0, import_path2.resolve)(k), p].map(import_chunk_z6pfqf6e.pn).includes((0, import_chunk_z6pfqf6e.pn)(e))) return h;
  try {
    for (let A of (0, import_chunk_4smdap7r.M)([k, p])) await L(A, o.path, "vcs.list", r?.mayStartThere);
    let y = (0, import_chunk_rb36kwbn.ui)(), C = await (0, import_chunk_6h9mds0d.FCe)(p, (0, import_chunk_6h9mds0d.o0)(y?.preEnterOriginalCwd ?? y?.originalCwd ?? (0, import_chunk_f9x2f6cx.Te)()), [], { isModsCopy: true });
    if (!C.ok) throw new import_chunk_bzyb60p0.gd(C.message);
  } catch (y) {
    throw (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_vcs_list", "vet_refused"), y;
  }
  let g = { madeBy: "mod", name: (0, import_path2.basename)(p), ...(0, import_chunk_bzyb60p0.XLt)(w) };
  return (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_vcs_list"), { copy: g, realPath: p };
}
async function ce(e, o, { mayList: r, mayRunGit: n }) {
  let { answer: i } = await F(e, { ...o, async core() {
    if (!await r(e.path)) return [];
    let a = await re(e.path);
    if (a === null || !await n()) return [];
    let c = await se(a) ?? [], h = await Promise.all(c.map((p) => r(p.path)));
    return c.filter((p, w) => h[w]);
  } });
  return ie(i);
}
async function Ge(e) {
  let { root: o, mainRoot: r } = (await (0, import_chunk_bzyb60p0.Gue)(e))?.copy ?? {};
  return !!o && !!r && (0, import_chunk_6h9mds0d.bE)(o, e) === "same" && !(0, import_chunk_mndk3x2g.Y6)((0, import_chunk_mndk3x2g.Nh)(r), (0, import_chunk_mndk3x2g.Nh)(e));
}
async function le(e, { from: o, isolated: r, parentAgentId: n, asking: i }) {
  try {
    let a = (0, import_chunk_rb36kwbn.dFe)(e), c = a ? (0, import_chunk_rb36kwbn.O0l)(e) : r && { ...r, from: o }, h = c && c.agentId === r?.agentId;
    if ((0, import_chunk_rb36kwbn.VIr)(e) || a && !(h && await G(e))) return;
    if (c === void 0) {
      let y = await (0, import_chunk_bzyb60p0.ZLt)(e) ? void 0 : await (0, import_chunk_bzyb60p0.TZo)(e, o, i);
      if (!y?.copy || !await Ge(y.realPath)) return;
      return { ...y, worktreePath: y.realPath, land() {
        (0, import_chunk_rb36kwbn.zIr)(y.realPath, y.copy), (0, import_chunk_rb36kwbn.EOo)().add(y.realPath);
      } };
    }
    let { parentAgentId: p, ...w } = c, k = { ...w, ...n !== void 0 && { parentAgentId: n } };
    if (!V("vcs.isolate", k, i.origin)) return;
    let g = await I(k, i);
    if (e === g.worktreePath || e === g.realPath) return { ...g, land() {
      x(g, k), (0, import_chunk_rb36kwbn.EOo)().add(g.realPath);
    } };
    (0, import_chunk_cqa9hrgx.l)("plugin_function_hooks_vcs_isolate", "other_folder");
  } catch (a) {
    (0, import_chunk_w578pjby.t)(`vcs: not answered again on resume: ${(0, import_chunk_jv7av99m.d)(a)}`);
  }
  return;
}
var j = "this mod may not run Git here";
class P extends import_chunk_bzyb60p0.gd {
}
function b(e, o, ...r) {
  return e("process.run", { argv: ["git", ...r], init: { cwd: o } });
}
async function me(e, o, { path: r, name: n }) {
  return await b(e, o, ...(0, import_chunk_bzyb60p0.Mui)(r)) && b(e, o, ...(0, import_chunk_bzyb60p0.LZo)((0, import_chunk_bzyb60p0.mBe)(n)));
}
function he() {
  return (0, import_chunk_865at33z.Yi)() && !(0, import_chunk_2yx6c1y2.QX)();
}
async function ye(e) {
  let o = await (0, import_promises3.realpath)(e).catch(() => null), r = o && (0, import_chunk_w5s307zm.ol)(o);
  if (!o || !r || (0, import_chunk_2yx6c1y2.eF)(o, { uncached: true })) return null;
  let n = he() && (0, import_chunk_w5s307zm.ol)((0, import_chunk_f9x2f6cx.Te)()), i = n ? (0, import_chunk_kypvvv9j.Tg)(n)?.commonDir : void 0, a = i !== void 0 && i === (0, import_chunk_kypvvv9j.Tg)(r)?.commonDir;
  return { real: o, top: r, isSessions: a };
}
async function we(e) {
  let { outcome: o } = await (0, import_chunk_bzyb60p0.adr)(e.tree.worktreePath, { vettedReal: e.realPath, anchors: [e.gitRoot] });
  if (o !== "clear") return o === "gone" ? "gone" : "other";
  let r = await (0, import_promises3.lstat)(e.realPath, { bigint: true });
  return (0, import_chunk_y2bpkgdh.xEl)(r, e.id, e.born) ? "stands" : "other";
}
function ue(e) {
  let o = [e.tree.worktreePath, e.realPath], r = (0, import_chunk_rb36kwbn.ui)()?.worktreePath ?? (0, import_chunk_18rsj2ts.pe)();
  return [(0, import_chunk_18rsj2ts.pe)(), (0, import_chunk_f9x2f6cx.Te)(), r].some((n) => o.some((i) => (0, import_chunk_p1ewvgeh.Sc)(n, i))) || import_chunk_bzyb60p0.qY.get()?.hasTaskIn(o) === true;
}
async function ge(e, o) {
  let { tree: r, gitRoot: n } = e, { worktreePath: i, worktreeBranch: a, headCommit: c } = r, h = await we(e);
  if (h === "other") return { kept: "the folder is not seen to be the one that was made" };
  let p = h === "stands", w = p && ue(e), k = await (0, import_chunk_bzyb60p0.SHe)(i, n);
  if (!await (0, import_chunk_bzyb60p0.hBe)(k)) return { kept: "someone else holds its Git lock" };
  if (p && !o && (await R(r)).holdsWork) return { kept: "it holds work, or could not be read" };
  if (w || p && ue(e)) return { kept: "the session or one of its tasks is working in it" };
  let g = p && o, { outcome: y } = await (0, import_chunk_bzyb60p0.cQ)(i, g ? a : void 0, n, false, g ? "mod_call_discard" : "mod_call", e.realPath);
  if (y !== "removed") return await (0, import_chunk_bzyb60p0.JLt)(i, n, r.copy.name, "agent"), { kept: "the removal failed" };
  if ((0, import_chunk_rb36kwbn.KIr)().byPath.delete(i), (0, import_chunk_rb36kwbn.XOs)(i), e.unlockAtExit[Symbol.dispose](), a !== void 0 && c !== void 0) await (0, import_chunk_bzyb60p0.Wui)(n, a, c);
  return { isReleased: true };
}
async function $e(e, { owner: o, gitRoot: r }, n) {
  let { byPath: i } = (0, import_chunk_rb36kwbn.KIr)(), { name: a, from: c, base: h } = e, p = [...i.values()].find((v) => v.owner === o && v.gitRoot === r && v.tree.copy.name === a), w = p && await we(p);
  if (p && w === "stands") return p.tree;
  if (p && w === "gone" && n) await ge(p, false);
  let { number: k } = await (0, import_chunk_bzyb60p0.RZo)(r, a, { isGiven: false, hasSessionHad: (v) => (0, import_chunk_xcgcdx61.Qgn)(v.toLowerCase()) || v === (0, import_chunk_rb36kwbn.ui)()?.worktreeName });
  if (k !== 1) throw new P(`The name ${a} is another worktree's or branch's, or has the form of an agent's`);
  let g = await (0, import_chunk_bzyb60p0.nCe)(a, { newIn: r, skipsSetup: true, fromCwd: c, fromHead: h === "head" }), y = await (0, import_promises3.realpath)(g.worktreePath), C = await (0, import_promises3.lstat)(y, { bigint: true }), A = await (0, import_chunk_bzyb60p0.$eo)(g, (0, import_chunk_bzyb60p0.aen)(g), e);
  return i.set(g.worktreePath, { owner: o, tree: A, gitRoot: r, realPath: y, id: `${C.dev}:${C.ino}`, born: (0, import_chunk_y2bpkgdh.j2t)(C), unlockAtExit: (0, import_chunk_w578pjby.Ct)(() => (0, import_chunk_bzyb60p0.yq)(g.worktreePath, r)) }), A;
}
async function Be(e, { owner: o, may: r }) {
  let n = await ye(e.from), i = n && (0, import_chunk_w5s307zm.Gy)(n.real);
  if (o === void 0 || n === null || i === null) throw new P("The folder is not in a Git repository");
  if (!n.isSessions && !(he() && (0, import_chunk_865at33z.C6t)(n.real))) throw new P("Workspace trust is not accepted there");
  if (!await b(r, n.real, "worktree", "add", e.name) || !await b(r, n.real, "fetch", "origin")) throw new P(j);
  let a = (0, import_chunk_bzyb60p0.tdr)((0, import_chunk_6xae35jp.Pjt)(i), e.name);
  if (!await r("fs.list", { path: a })) throw new P("this folder may not be read");
  let c = await me(r, i, { ...e, path: a });
  return (0, import_chunk_rb36kwbn.KIr)().turns.run(i, () => $e({ ...e, from: n.real }, { owner: o, gitRoot: i }, c));
}
function ke(e, o) {
  return Be(e, o).catch((r) => {
    throw (0, import_chunk_w578pjby.t)(`$.vcs.isolate made no worktree: ${(0, import_chunk_jv7av99m.d)(r)}`), r instanceof P ? r : new P("The worktree could not be made");
  });
}
function W(e) {
  return [...(0, import_chunk_rb36kwbn.KIr)().byPath.values()].find((o) => o.tree.worktreePath === e || o.realPath === e);
}
async function de(e, o, r) {
  let n = (e.changes ?? []).flatMap(({ path: i }) => i.split("/").map((a, c, h) => (0, import_path3.join)(o, ...h.slice(0, c + 1))));
  for (let i of /* @__PURE__ */ new Set([o, ...n])) if (!await r("fs.list", { path: i })) return { unknown: "it holds a change that may not be read" };
  return e;
}
async function Ce({ path: e, name: o, vcs: r, since: n }, { owner: i, may: a }) {
  if ((0, import_chunk_bzyb60p0.Gie)(e)) return { unknown: "this folder may lead to a network location" };
  if (!await b(a, e, "status")) return { unknown: j };
  let c = await ye(e), h = (0, import_chunk_rb36kwbn.VIr)(e) ?? (0, import_chunk_rb36kwbn.VIr)(c?.top ?? e), p = h && W(h.worktreePath)?.owner;
  if (h && (c?.isSessions || [void 0, i].includes(p))) return (o ?? h.copy.name) === h.copy.name ? de((await R(h)).answer, h.worktreePath, a) : { unknown: "the working copy was made under another name" };
  return c?.isSessions && (r ?? (0, import_chunk_rb36kwbn.dFe)(c.top)?.vcs ?? "git") === "git" ? de(await z(c.top, n), c.top, a) : { unknown: "not a Git folder of this session's trusted repository" };
}
async function Pe({ path: e, name: o, isDiscard: r }, { owner: n, may: i }) {
  let a = W(e)?.gitRoot ?? (0, import_chunk_18rsj2ts.pe)();
  if (!await me(i, a, { path: e, name: o })) return { kept: j };
  return (0, import_chunk_rb36kwbn.KIr)().turns.run(W(e)?.gitRoot ?? e, async () => {
    let c = W(e);
    if (c && c.owner === n && c.tree.copy.name === o) return ge(c, r);
    return !(0, import_chunk_bzyb60p0.Gie)(e) && await (0, import_promises3.lstat)(e).then(() => false, import_chunk_jv7av99m.kn) ? { isReleased: true } : { kept: "it was not made on this mod's own call under that name" };
  });
}
async function Re(e, o) {
  if ((0, import_chunk_bzyb60p0.Gie)(e.from)) return { deny: `${e.from} may lead to a network location` };
  if (/(^|\/)-/.test(e.name)) return { deny: 'no part of the name may begin with "-"' };
  try {
    let { worktreePath: r, copy: n } = await (0, import_chunk_bzyb60p0.YY)(e, { ...o, make: () => ke(e, o) });
    return { path: r, ...(0, import_chunk_bzyb60p0.XLt)(n) };
  } catch (r) {
    return o.signal?.throwIfAborted(), { deny: (0, import_chunk_jv7av99m.d)(r) };
  }
}
async function ve(e, o) {
  let { answer: r } = await O(e, { ...o, core: () => Ce(e, o).catch(() => ({ unknown: "the working copy could not be read" })) });
  return r;
}
async function be(e, o) {
  let r = await _(e, { ...o, core: () => Pe(e, o).catch(() => ({ kept: "the removal failed" })) }), n = [...(0, import_chunk_rb36kwbn.UX)()].filter((a) => a.copy.name === e.name && [a.from, a.realPath ?? a.from].some((c) => (0, import_chunk_2yx6c1y2.bv)(c, e.path))), i = await B(e.path, r, n.length > 0);
  if (i.isReleased && n.length === 0) (0, import_chunk_rb36kwbn.kOo)(e.path, (0, import_chunk_mndk3x2g.Nh)(e.path).canonical);
  else if (i.isReleased) n.forEach((a) => (0, import_chunk_rb36kwbn.UX)().delete(a));
  return i;
}
var JTa = { isHooked: V, isolate: I, listing: ae, reask: le, status: te, release: oe, isolateForCall: Re, listForCall: ce, statusForCall: ve, releaseForCall: be, hasTaskIn: (e) => {
  let o = (0, import_chunk_bzyb60p0.Uc)()?.toolContext(new AbortController()).taskRegistry;
  return o !== void 0 && (0, import_chunk_jhy72swy.Q8t)(o.all(), e, (r) => r.sweptByStop || (0, import_chunk_jhy72swy.oQn)(r, o)) !== void 0;
}, refuseUnavailable: import_chunk_bzyb60p0.brt };
import_chunk_bzyb60p0.qY.set(JTa);
