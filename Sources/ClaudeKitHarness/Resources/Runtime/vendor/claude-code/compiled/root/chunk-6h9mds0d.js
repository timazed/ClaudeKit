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
var chunk_6h9mds0d_exports = {};
__export(chunk_6h9mds0d_exports, {
  E1t: () => E1t,
  Emr: () => Emr,
  FCe: () => FCe,
  Ils: () => Ils,
  O5: () => O5,
  Oy: () => Oy,
  U6: () => U6,
  Xot: () => Xot,
  ZZa: () => ZZa,
  bE: () => bE,
  c0n: () => c0n,
  clo: () => clo,
  dEi: () => dEi,
  eel: () => eel,
  hrn: () => hrn,
  kmr: () => kmr,
  mrn: () => mrn,
  o0: () => o0,
  v1t: () => v1t
});
module.exports = __toCommonJS(chunk_6h9mds0d_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
var import_chunk_59xxesz9 = require("/$bunfs/root/chunk-59xxesz9.js");
var import_chunk_4rp6k6sw = require("/$bunfs/root/chunk-4rp6k6sw.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var import_chunk_rr6cvcc3 = require("/$bunfs/root/chunk-rr6cvcc3.js");
var import_chunk_9p9dsn6j = require("/$bunfs/root/chunk-9p9dsn6j.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path2 = require("path");
function J(e, t) {
  return e !== null && t !== null && (0, import_chunk_p1ewvgeh.BP)(e, t, true);
}
function j(e, t, r) {
  return J(e, t) ? ` (this path differs from the registered spelling only by letter case \u2014 respell it to match ${r} exactly)` : "";
}
var ee = (e) => new Set(((0, import_chunk_2yx6c1y2._e)("policySettings")?.hooks?.[e] ?? []).map((t) => (0, import_chunk_wgyw76w5.di)(t)));
function mrn(e) {
  let t = { isHolding: (0, import_chunk_gftn60qp.oWn)(), isFaulted: false, managedKeys: /* @__PURE__ */ new Set() };
  if (!t.isHolding) return t;
  try {
    t.isHolding = (0, import_chunk_gftn60qp.ok)() || (0, import_chunk_2yx6c1y2._e)("policySettings")?.allowManagedHooksOnly === true;
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r), t.isFaulted = true;
  }
  if (!t.isHolding) return t;
  try {
    t.managedKeys = ee(e);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r), t.isFaulted = true;
  }
  return t;
}
var X = (e) => e.reduce((t, r) => t + r.hooks.length, 0);
var Xot = (e) => (0, import_chunk_9p9dsn6j.gX)(e) || (0, import_chunk_hrmqj4hy.fvt)(e);
var B = (e) => e.pluginRoot === void 0 && e.deviceOwner === void 0 && e.hooks.every((t) => t.type === "callback" || t.type === "function");
function clo(e, t) {
  let r = () => e.deviceOwner === void 0 && t.managedKeys.has((0, import_chunk_wgyw76w5.di)(e));
  return e.pluginId !== void 0 ? Xot(e.pluginId) : B(e) || r();
}
function te(e, t) {
  try {
    return clo(e, t);
  } catch {
    return B(e);
  }
}
function Ils(e) {
  try {
    let t = (0, import_chunk_rr6cvcc3.LTt)(e);
    return t !== void 0 && (0, import_chunk_gbskgz33.tWn)(t);
  } catch {
    return false;
  }
}
function re(e, t, r) {
  if (!(e.pluginId === void 0 && e.hooks.some((c) => (0, import_chunk_rr6cvcc3.LTt)(c) !== void 0))) return te(e, t) === r ? [] : [e];
  let o = e.hooks.filter((c) => Ils(c) !== r), l = o.length === e.hooks.length;
  if (l || o.length === 0) return l ? [e] : [];
  return [{ ...e, hooks: o }];
}
function v1t(e, t, r) {
  if (r === "included") return e;
  let n = r === "only", o = mrn(t);
  if (!o.isHolding) return n ? [] : e;
  let l = e.flatMap((f) => re(f, o, n));
  if (n ? l.length > 0 : X(l) < X(e)) (0, import_chunk_gftn60qp.gcn)();
  return l;
}
function U6() {
  return ne("WorktreeCreate").length > 0;
}
function c0n() {
  return ne("WorktreeRemove").length > 0;
}
function ne(e) {
  return v1t([...(0, import_chunk_hrmqj4hy.zP)(e)], e);
}
async function FCe(e, t, r = [], n) {
  let [o, l] = await Promise.all([oe(e), qe(e)]), c = n?.isModsCopy === true && o.ids === "error" ? ve(e) : null, f = c !== null && (await Promise.all(c.map((v) => Z(v)))).every((v) => v.state === "absent"), h = ke(e, f ? { ...o, ids: "no-repo" } : o), a = new Set(t), g = new Set(r), p = (0, import_chunk_4smdap7r.M)([...t, ...r]), d = n?.requireWitnessForSelfOwningPins === true, y = n?.declineSelfOwningPinUnderLiveRoot === true;
  if (typeof h.ids !== "object") return U(e, h, l, p, a, g, [], d, y);
  let m = await Promise.all(me(p, h.ids).map(async (v) => ({ root: v, ...await oe(v) })));
  return U(e, h, l, p, a, g, m, d, y);
}
function ZZa(e, t, r = [], n) {
  let o = ie(e), l = n?.isModsCopy === true && o.ids === "error" ? ve(e) : null, c = l !== null && l.every((v) => Y(v).state === "absent"), f = ke(e, c ? { ...o, ids: "no-repo" } : o), h = Je(e), a = new Set(t), g = new Set(r), p = (0, import_chunk_4smdap7r.M)([...t, ...r]), d = n?.requireWitnessForSelfOwningPins === true, y = n?.declineSelfOwningPinUnderLiveRoot === true;
  if (typeof f.ids !== "object") return U(e, f, h, p, a, g, [], d, y);
  let m = me(p, f.ids).map((v) => ({ root: v, ...ie(v) }));
  return U(e, f, h, p, a, g, m, d, y);
}
function U(e, t, r, n, o, l, c, f = false, h = false) {
  if (r) return T(e, "it is a symbolic link, so the tree it would isolate into cannot be pinned down");
  if (t.entry === "unverifiable") return T(e, "its .git entry exists but could not be examined");
  let a = t.ids;
  if (a === "error") return T(e, "git could not be run to resolve it");
  if (typeof a === "object" && a.isBare === true) return T(e, "it is a bare repository, not a working tree");
  if (a === "no-repo") {
    if (t.entry !== "absent") return T(e, "a .git entry exists there but git could not resolve it");
    let u = t.hostRegistration, R = u.kind === "none" ? null : u.host;
    if (R === null) {
      if (u.kind === "unknown" && !u.gone) return T(e, "its own path could not be resolved");
    } else {
      let b = S(R, "that checkout");
      return { ok: false, reason: "unverifiable", message: Oy(u.kind === "unknown" ? u.leftLayout ? `Refusing to use ${e} as an isolation worktree: ${(0, import_path2.dirname)((0, import_path2.resolve)(e))} or the directory above it is a symbolic link or junction (or the checkout's own path could not be resolved), so the tree is not really inside the checkout its path names, and it holds no git repository of its own. Claude Code never creates such a link: open the tree by its real path, or treat it as tampered with and recreate the worktree from ${b}.` : `Refusing to use ${e} as an isolation worktree: it holds no git repository and the checkout whose .claude/worktrees its path names gave no answer about it (that checkout's own repository could not be confirmed, or its worktree list could not be read). Fix that checkout first, or recreate the worktree from it.` : `Refusing to use ${e} as an isolation worktree: it holds no git repository of its own, yet it is inside the .claude/worktrees of ${R}, which holds one, and git could not find that repository from it (a .git file or directory between them, under .claude, stops the search). Remove that entry, or recreate the worktree from ${b}.`) };
    }
    for (let b of n) {
      if (!o.has(b)) continue;
      if (G(e, b)) return { ok: false, reason: "pin-is-protected-checkout", message: Oy(`Refusing to use ${e} as an isolation worktree: it contains the protected checkout ${b}, so adopting it would disarm every isolation check for that checkout.`) };
    }
    for (let b of l) if (G(e, b)) return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`This resume was started from inside ${e}, a non-git directory \u2014 nothing can confirm it as a separate isolation tree from there. Run the resume from the project checkout instead.`) };
    return { ok: true, reason: "not-a-git-worktree" };
  }
  if (a.symlinkedRefStore.length > 0) return { ok: false, reason: "invalid-linked-worktree", message: Oy(`Refusing to use ${e} as an isolation worktree: its git metadata has symbolic links in place of ${a.symlinkedRefStore.join(", ")}, which aliases another repository's refs into this tree. Recreate the worktree with git worktree add, then retry.`) };
  if (a.unexaminableRefStore.length > 0) return T(e, `its ref storage could not be fully examined (${a.unexaminableRefStore[0]})`);
  let g = bE(a.topLevel, e);
  if (g === "indeterminate") return T(e, `its working tree resolves to a path that cannot be safely compared (${a.topLevel})`);
  if (g === "distinct") return { ok: false, reason: "work-tree-elsewhere", message: Oy(`Refusing to use ${e} as an isolation worktree: git resolves its working tree to ${a.topLevel} (a core.worktree redirect, or a checkout discovered above it), so commands run there would write outside the worktree. Remove the redirect, restore the worktree's own .git, or recreate the worktree, then retry.`) };
  let p = bE(a.commonDir, a.gitDir) !== "distinct";
  for (let u of c) {
    let R = n.includes(u.root), b = W(u.root, e);
    if (b !== "same" && l.has(u.root) && !o.has(u.root) && G(e, u.root)) {
      if (!p && ue(e, a.commonDir)) continue;
      if (!p) return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`The worktree ${e} contains the directory this resume ran from, and nothing in this session vouches for its worktree registration \u2014 an isolation worktree never contains its own launch position. Run the resume from the project checkout instead.`) };
      return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`This resume was started from inside ${e} (or a directory it contains), which is its own repository \u2014 it cannot be confirmed as a separate isolation worktree from there. Run the resume from the project checkout instead.`) };
    }
    if (b === "same") {
      if (R && o.has(u.root)) return { ok: false, reason: "pin-is-protected-checkout", message: Oy(`Refusing to use ${e} as an isolation worktree: it is the checkout this session launched from. An honest launch-from-inside and a forged record are indistinguishable here, so both are refused \u2014 launch from the parent checkout to enter or resume this worktree.`) };
      if (R && p) return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`This resume was started from inside ${e}, which is its own repository \u2014 it cannot be confirmed as a separate isolation worktree from there. Run the resume from the project checkout instead.`) };
      continue;
    }
    if (u.entry === "unverifiable") return T(e, `the protected checkout ${u.root} has a .git entry that could not be examined`);
    if (typeof u.ids !== "object") {
      if (u.ids === "no-repo") continue;
      return T(e, `the protected checkout ${u.root} has git metadata that could not be resolved`);
    }
    let D = W(a.gitDir, u.ids.gitDir);
    if (D === "indeterminate") return T(e, `its git directory (${a.gitDir}) could not be safely compared with the protected checkout's`);
    if (D === "same") return { ok: false, reason: "shared-git-dir", message: Oy(`Refusing to use ${e} as an isolation worktree: its git directory is the shared checkout's own (${a.gitDir}), so git commands there move the protected checkout's branches and refs. This usually means the worktree's .git file is stale or was rewritten \u2014 recreate the worktree, then retry.`) };
  }
  if (p && o.size === 0) {
    if (f) return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`The worktree ${e} is its own repository and nothing vouches for it from this session \u2014 it cannot be resumed or re-entered. Re-create it (a fresh isolated tree); the existing tree and its work remain on disk at ${e} for manual recovery.`) };
    if (h) {
      for (let u of l) if (W(u, e) !== "same" && G(u, e)) return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`The worktree ${e} sits under the directory this resume ran from, and nothing else vouches for it \u2014 it cannot be resumed or re-entered. Re-create it (a fresh isolated tree); the existing tree and its work remain on disk at ${e} for manual recovery. Where it has a parent checkout, resuming from there also works.`) };
    }
  }
  for (let u of n) {
    if (W(u, e) === "same") continue;
    if (!G(e, u)) continue;
    if (l.has(u) && !o.has(u)) {
      if (!p && ue(e, a.commonDir)) continue;
      if (!p) return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`The worktree ${e} contains the directory this resume ran from, and nothing in this session vouches for its worktree registration \u2014 an isolation worktree never contains its own launch position. Run the resume from the project checkout instead.`) };
      return { ok: false, reason: "pin-is-own-launch-tree", message: Oy(`This resume was started from inside ${e} (or a directory it contains), which is its own repository \u2014 it cannot be confirmed as a separate isolation worktree from there. Run the resume from the project checkout instead.`) };
    }
    return { ok: false, reason: "pin-is-protected-checkout", message: Oy(`Refusing to use ${e} as an isolation worktree: it contains the protected checkout ${u}, so adopting it would disarm every isolation check for that checkout.`) };
  }
  let d = t.hostRegistration, y = (0, import_path2.resolve)((0, import_path2.dirname)(a.topLevel));
  if (d.kind === "unknown") {
    let { host: u, registry: R } = d;
    if (u === null) return T(e, "its own path could not be resolved");
    let b = S(u, "that checkout");
    if (d.leftLayout) {
      let D = (0, import_path2.dirname)((0, import_path2.resolve)(e));
      return { ok: false, reason: "unverifiable", message: Oy(`Refusing to use ${e} as an isolation worktree: ${D} or ${(0, import_path2.dirname)(D)} is a symbolic link or junction (or ${u}'s own path could not be resolved), so the worktree is not really inside ${u} and cannot be checked against ${u}'s own records. Claude Code never creates such a link. If you made it yourself, open the worktree by its real path instead, or replace the link with a real directory and recreate the worktree from ${b}. If you did not, treat the worktree as tampered with: run no git in it, copy out what you need, delete it, and recreate it from ${b}.`) };
    }
    return { ok: false, reason: "unverifiable", message: Oy(R === null ? `Refusing to use ${e} as an isolation worktree: it is under ${y}, so ${u} must list it as a worktree, but ${u}'s own repository could not be confirmed. Usual causes: its .git is a pointer file or symlink whose target does not name it back (a --separate-git-dir clone, for one) or is empty or left over, a stray file named commondir in its git directory (for an ordinary checkout, ${S((0, import_path2.join)(u, ".git", "commondir"), "the commondir file in its .git")} \u2014 deleting that one file is the fix), or ${u} itself sitting in another checkout's .claude/worktrees. Fix that (or remove a left-over .git file) and retry, or create the worktree somewhere that is not inside ${S(y, "that directory")}.` : `Refusing to use ${e} as an isolation worktree: the list of linked worktrees ${u} keeps in ${R} could not be read in full, or something other than a plain directory (a symbolic link, say) stands in its place, so whether it registers this worktree could not be checked. Look at it by hand before any git worktree command in ${b}: if a symbolic link stands there, remove it with unlink \u2014 not rm with a trailing slash, and not git worktree prune, which both follow the link into the directory it points to (code running in a worktree can plant one); if it is a directory that cannot be read or holds more entries than git made for your worktrees, make it readable and delete by hand every entry that is not named by the .git file of a worktree you have; then retry.`) };
  }
  let m = t.entryIsDirectory && (0, import_path2.basename)(a.gitDir) === ".git" && bE((0, import_path2.dirname)(a.gitDir), e) === "same";
  if (d.kind === "registered") {
    let u = d.adminDirs.map((I) => bE(a.gitDir, I)), R = bE(a.commonDir, d.hostCommonDir), b = u.includes("same") && R === "same", D = d.adminDirs[0] ?? "";
    if (!b && R !== "distinct" && !u.every((I) => I === "distinct")) return T(e, `its git metadata could not be safely compared with ${d.host}'s registration of it (${L(D)})`);
    if (!b) {
      let I = S(d.host, "that checkout"), q = ge(I, S((0, import_path2.join)(d.hostCommonDir, "worktrees"), "that checkout's worktree registry (the worktrees directory in its git directory)"));
      return { ok: false, reason: "invalid-linked-worktree", message: Oy(m ? `Refusing to use ${e} as an isolation worktree: ${d.host}'s worktree list has an entry for it (${L(D)}), but a .git directory of its own stands in place of the .git file that registration gave it. If you cloned a repository here yourself, move it outside ${S((0, import_path2.join)(d.host, ".claude", "worktrees"), "that checkout's .claude/worktrees")}; if you did not, run no git in it: copy out what you need and delete it. ${q}` : u.includes("same") ? `Refusing to use ${e} as an isolation worktree: ${d.host} registers it (${L(D)}) and its .git leads to that entry, but the entry's commondir file now names another repository, ${S(a.commonDir, "one whose path is not repeated here")}, not ${d.hostCommonDir}. Unless you edited that file yourself (git wrote ../.. there), treat the worktree as tampered with: run no git in it, copy out what you need and delete it. ${q}` : `Refusing to use ${e} as an isolation worktree: ${d.host} registers it (${L(D)}), but its .git now leads to ${S(a.gitDir, "another directory (its path is not repeated here)")} instead of that entry. Unless you re-pointed it yourself, treat the worktree as tampered with: run no git in it, and do not re-link it with git worktree repair, which points each of that checkout's worktrees, this one included, at whichever entry names it \u2014 code running in a worktree can add such an entry. Copy out what you need and delete it. ${q}`) };
    }
    if (!d.adminDirs.some((I) => _(a.gitDir, I)) || !_(a.commonDir, d.hostCommonDir)) return { ok: false, reason: "unverifiable", message: Oy(`Refusing to use ${e} as an isolation worktree: git located its repository at ${S(a.gitDir, "a path not repeated here")} (common dir ${S(a.commonDir, "not repeated here")}), which is ${d.host}'s registration of it (${L(D)}) reached by a different path, not the registered path itself, so its git identity could not be verified. If that path lies inside the worktree itself, treat the worktree as tampered with: run no git in it. Otherwise the usual causes are a symbolic link or junction inside ${S(d.hostCommonDir, "that checkout's git directory")} or on the way to it, or a git too old to print link-resolved paths: remove the link or update git, then retry; if neither applies, do not trust the worktree or run git in it.`) };
  } else if (d.kind === "unregistered") {
    let u = d.host, R = _((0, import_path2.dirname)(e), y) ? "" : ` (addressed as ${(0, import_path2.dirname)(e)})`;
    return { ok: false, reason: "unverifiable", message: Oy(m ? `Refusing to use ${e} as an isolation worktree: it is a repository of its own (a .git directory, not a worktree's .git file) inside ${y}${R}, where only worktrees that the checkout ${u} itself made are accepted. If you or a WorktreeCreate hook cloned it there, move the clone somewhere that is not inside any checkout's .claude/worktrees directory. If nobody meant a repository to be here, do not trust it or run git in it.` : ze(e, a, u, d.hostCommonDir, y, R)) };
  }
  let v = bE(a.commonDir, a.gitDir);
  if (v === "indeterminate") return T(e, `its git metadata (common dir ${a.commonDir}) could not be safely compared`);
  if (v === "distinct") {
    let u = bE((0, import_path2.dirname)(a.gitDir), (0, import_path2.join)(a.commonDir, "worktrees")), R = a.backPointer !== null && bE((0, import_path2.resolve)(a.gitDir, a.backPointer), (0, import_path2.join)(e, ".git")) === "same";
    if (u !== "same" || !R) return { ok: false, reason: "invalid-linked-worktree", message: Oy(`Refusing to use ${e} as an isolation worktree: it uses another repository's refs (${a.commonDir}) without being a registered worktree of it (its admin directory or back-pointer does not check out). Recreate the worktree with git worktree add, then retry.`) };
  }
  return { ok: true, reason: "verified" };
}
function me(e, t) {
  let r = (0, import_path2.basename)(t.commonDir) === ".git" ? (0, import_path2.dirname)(t.commonDir) : null;
  return (0, import_chunk_4smdap7r.M)([...e, ...r !== null ? [r] : []]);
}
function _(e, t) {
  return K((0, import_path2.resolve)(e)) === K((0, import_path2.resolve)(t));
}
function K(e) {
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "macos":
      return (0, import_chunk_2172r9j8.Ff)(e.normalize("NFC"));
    case "windows":
      return (0, import_chunk_2172r9j8.Ff)(e);
    default:
      return e;
  }
}
function ze(e, t, r, n, o, l) {
  let c = S(r, "that checkout"), f = `it is inside ${o}${l}, where only worktrees that the checkout ${r} itself made (git worktree add, run in that checkout) are accepted`, h = bE(t.commonDir, n);
  if (h === "distinct") return `Refusing to use ${e} as an isolation worktree: ${f}, and its .git leads to a different repository, ${S(t.commonDir, "whose path is not repeated here")}. If you or a WorktreeCreate hook made this worktree, recreate it somewhere that is not inside any checkout's .claude/worktrees directory; if ${c} was never meant to be a repository, its .git is stray \u2014 look at what it holds, then remove it; if nobody meant to put a worktree here, do not trust it or run git in it.`;
  if (!(h === "same" && _((0, import_path2.dirname)(t.gitDir), (0, import_path2.join)(n, "worktrees")))) return `Refusing to use ${e} as an isolation worktree: ${f}, and its .git leads to ${S(t.gitDir, "a directory (its path is not repeated here)")}, which is not one of ${r}'s own worktree entries. If this worktree is yours, copy out what you need and recreate it; otherwise do not trust it or run git in it.`;
  let g = (0, import_path2.basename)(t.gitDir), p = (0, import_path2.basename)((0, import_path2.resolve)(e)), d = K(g) === K(p) ? "" : `${N(g) && N(p) ? ` That entry is named ${g}, not ${p}.` : " That entry's name is not this worktree's."} If that entry is another worktree of yours, it is its own, whatever it names now \u2014 do not re-link it.`, y = N(g) ? `${t.gitDir}, an entry in ${r}'s own worktree list` : `an entry in ${r}'s own worktree list (its name is not repeated here)`, m = t.backPointer !== null && (0, import_path2.basename)(t.backPointer) === ".git" ? (0, import_path2.resolve)(t.gitDir, t.backPointer) : null, v = `If this worktree is yours, copy out what you need and delete it rather than re-link it: git worktree repair could also point other worktrees of that checkout, or this one, at an entry that code in a worktree added. ${ge(c, S((0, import_path2.join)(n, "worktrees"), "that checkout's worktree registry (the worktrees directory in its git directory)"))} If it is not yours, do not trust it or run git in it.`;
  if (m === null) return `Refusing to use ${e} as an isolation worktree: its .git leads to ${y} that no longer names any worktree back (its gitdir file is missing, unreadable or does not name a .git file).${d} ${v}`;
  let u = S(m, "") !== "" ? (0, import_path2.dirname)(m) : `another path (not repeated here; git worktree list, run in ${c}, shows it)`;
  return `Refusing to use ${e} as an isolation worktree: its .git leads to ${y} that names ${u}, not this worktree (git worktree repair run inside any worktree can re-point an entry like that).${d} ${v}`;
}
function ge(e, t) {
  return `Before any git worktree command in ${e}, look through ${t} by hand: git keeps one plain directory there per linked worktree, the one that worktree's .git file names (gitdir: followed by its path). Remove any symbolic link with unlink (never rm with a trailing slash, which follows the link) and delete every entry that is not named by the .git file of a worktree you have, a second entry for the same worktree included \u2014 code running in a worktree can plant any of these, git worktree prune follows a planted link and empties the directory it points to, and of two entries naming one worktree it keeps whichever name sorts first. Then run git worktree prune in ${e}; if git worktree list there still shows this path, run git worktree unlock on it and prune again, until it is no longer listed. Then recreate the worktree (on a new branch if git says the old one is already used by a worktree elsewhere).`;
}
function ye(e) {
  return /^[A-Za-z0-9._/\\:+@=,-]{1,1024}$/.test(e);
}
function N(e) {
  return ye(e) && e.length <= 255 && (e.match(/[._/\\:+@=,-]/g) ?? []).length <= 8;
}
function S(e, t) {
  return ye(e) && e.split(/[\\/]/).every((r) => r === "" || N(r)) ? e : t;
}
function L(e) {
  return N((0, import_path2.basename)(e)) ? e : `an entry under ${(0, import_path2.dirname)(e)} whose name is not repeated here`;
}
function T(e, t) {
  return { ok: false, reason: "unverifiable", message: Oy(`Refusing to use ${e} as an isolation worktree: ${t}, so its git identity could not be verified. Isolation is refused rather than assumed \u2014 recreate the worktree (or remove the corrupt .git entry) and retry.`) };
}
async function oe(e) {
  let [t, r] = await Promise.all([Z((0, import_path2.join)(e, ".git")), Xe(e)]);
  return { entry: t.state, entryIsDirectory: t.isDirectory, ids: r };
}
function ie(e) {
  let t = Y((0, import_path2.join)(e, ".git"));
  return { entry: t.state, entryIsDirectory: t.isDirectory, ids: Ye(e) };
}
function ke(e, t) {
  let r = (0, import_chunk_kypvvv9j.RIr)() ? (0, import_chunk_kypvvv9j.ZDl)(e, typeof t.ids === "object" ? t.ids.gitDir : void 0) : { kind: "none" };
  return { ...t, hostRegistration: r };
}
async function Z(e) {
  try {
    return { state: "present", isDirectory: (await (0, import_promises.lstat)(e)).isDirectory() };
  } catch (t) {
    return { state: E(t), isDirectory: false };
  }
}
function Y(e) {
  try {
    return { state: "present", isDirectory: (0, import_fs.lstatSync)(e).isDirectory() };
  } catch (t) {
    return { state: E(t), isDirectory: false };
  }
}
async function qe(e) {
  try {
    return (await (0, import_promises.lstat)(e)).isSymbolicLink();
  } catch {
    return false;
  }
}
function Je(e) {
  try {
    return (0, import_fs.lstatSync)(e).isSymbolicLink();
  } catch {
    return false;
  }
}
function E(e) {
  let t = (0, import_chunk_jv7av99m.w)(e);
  return t === "ENOENT" || t === "ENOTDIR" ? "absent" : "unverifiable";
}
var V = 2e3, we = [...import_chunk_gd77dyw4.Nn, "rev-parse", "--absolute-git-dir", "--show-toplevel", "--git-common-dir"];
async function Xe(e) {
  let t = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), [...we], { cwd: e, env: (0, import_chunk_gd77dyw4.ms)(), timeout: V, useToolMemoryCgroup: false, preserveOutputOnError: true });
  if (t.code !== 0) {
    if (await tt(e)) return "no-repo";
    if (Ce(t.stderr)) {
      let l = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "rev-parse", "--absolute-git-dir", "--git-common-dir"], { cwd: e, env: (0, import_chunk_gd77dyw4.ms)(), timeout: V, useToolMemoryCgroup: false, preserveOutputOnError: true });
      if (l.code === 0) {
        let c = De(e, l.stdout);
        if (c !== null) {
          let [f, h] = await Promise.all([se(c.gitDir), le(c.gitDir)]);
          return { ...c, backPointer: f, symlinkedRefStore: h.symlinks, unexaminableRefStore: h.unexaminable };
        }
      }
      return "error";
    }
    if (be(t.stderr)) return "no-repo";
    if (typeof t.exitCode === "number" && await Qe(e)) return "no-repo";
    return "error";
  }
  let r = Pe(e, t.stdout);
  if (r === null) return "error";
  let [n, o] = await Promise.all([se(r.gitDir), le(r.gitDir)]);
  return { ...r, backPointer: n, symlinkedRefStore: o.symlinks, unexaminableRefStore: o.unexaminable };
}
function Ye(e) {
  let t;
  try {
    t = (0, import_chunk_9zdrdv25.Xqt)((0, import_chunk_w5s307zm.Ht)(), [...we], { cwd: e, env: (0, import_chunk_gd77dyw4.ms)(void 0, { base: (0, import_chunk_9zdrdv25.d$)() }), extendEnv: false, reject: false, timeout: V, useToolMemoryCgroup: false, stdio: ["ignore", "pipe", "pipe"] });
  } catch {
    return "error";
  }
  if (t.exitCode !== 0) {
    if (rt(e)) return "no-repo";
    if (Ce(t.stderr)) {
      let o;
      try {
        o = (0, import_chunk_9zdrdv25.Xqt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "rev-parse", "--absolute-git-dir", "--git-common-dir"], { cwd: e, env: (0, import_chunk_gd77dyw4.ms)(void 0, { base: (0, import_chunk_9zdrdv25.d$)() }), extendEnv: false, reject: false, timeout: V, useToolMemoryCgroup: false, stdio: ["ignore", "pipe", "pipe"] });
      } catch {
        return "error";
      }
      if (o.exitCode === 0) {
        let l = De(e, o.stdout);
        if (l !== null) {
          let c = ce(l.gitDir);
          return { ...l, backPointer: ae(l.gitDir), symlinkedRefStore: c.symlinks, unexaminableRefStore: c.unexaminable };
        }
      }
      return "error";
    }
    if (be(t.stderr)) return "no-repo";
    if (typeof t.exitCode === "number" && t.timedOut !== true && et(e)) return "no-repo";
    return "error";
  }
  let r = Pe(e, t.stdout);
  if (r === null) return "error";
  let n = ce(r.gitDir);
  return { ...r, backPointer: ae(r.gitDir), symlinkedRefStore: n.symlinks, unexaminableRefStore: n.unexaminable };
}
function Oy(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f]/g, " ");
}
function be(e) {
  return /not a git repository/i.test(e) || /gitfile does not point to a valid repository/i.test(e);
}
async function Qe(e) {
  let t = $e(e);
  if (t === null) return false;
  return (await Promise.all(t.map((n) => Z(n)))).every((n) => n.state === "absent");
}
function et(e) {
  let t = $e(e);
  return t !== null && t.every((r) => Y(r).state === "absent");
}
function ve(e) {
  let t = (0, import_chunk_2gtmjt3y.KOe)("PATH");
  if (t === void 0 || [(0, import_chunk_w5s307zm.Ht)(), "git"].some((n) => (0, import_chunk_c203g5kd.B6e)(n, t) !== null)) return null;
  let r = Re(e);
  return r === null ? null : [r, (0, import_path2.resolve)(e)].flatMap(Se);
}
function $e(e) {
  let t = (0, import_chunk_cg8dqz0a.x)() === "windows" ? null : Re(e);
  return t === null ? null : Se(t);
}
function Re(e) {
  if ((0, import_chunk_mndk3x2g.Nh)(e).canonical === null) return null;
  try {
    let t = import_fs.realpathSync.native(e, { encoding: "buffer" }), r = t.toString("utf8");
    return Buffer.from(r, "utf8").equals(t) ? r : null;
  } catch {
    return null;
  }
}
function Se(e) {
  let t = [];
  for (let r = e; ; ) {
    t.push((0, import_path2.join)(r, ".git"), (0, import_path2.join)(r, "HEAD"));
    let n = (0, import_path2.dirname)(r);
    if (n === r) return t;
    r = n;
  }
}
async function tt(e) {
  try {
    return await (0, import_promises.lstat)(e), false;
  } catch (t) {
    let r = (0, import_chunk_jv7av99m.w)(t);
    return r === "ENOENT" || r === "ENOTDIR";
  }
}
function rt(e) {
  try {
    return (0, import_fs.lstatSync)(e), false;
  } catch (t) {
    let r = (0, import_chunk_jv7av99m.w)(t);
    return r === "ENOENT" || r === "ENOTDIR";
  }
}
function Ce(e) {
  return e.includes("this operation must be run in a work tree");
}
function De(e, t) {
  let r = t.split(`
`).filter((o) => o.length > 0);
  if (r.length !== 2) return null;
  if (r.some((o) => /[\u0000-\u001f\u007f-\u009f]/.test(o))) return null;
  let n = r[1];
  return { gitDir: r[0], topLevel: e, commonDir: (0, import_path2.isAbsolute)(n) ? n : (0, import_path2.join)(e, n), isBare: true };
}
function Pe(e, t) {
  let r = t.split(`
`).filter((o) => o.length > 0);
  if (r.length !== 3) return null;
  if (r.some((o) => /[\u0000-\u001f\u007f-\u009f]/.test(o))) return null;
  let n = r[2];
  return { gitDir: r[0], topLevel: r[1], commonDir: (0, import_path2.isAbsolute)(n) ? n : (0, import_path2.resolve)(e, n) };
}
var F = 65536;
async function se(e) {
  try {
    if (!(await (0, import_promises.lstat)((0, import_path2.join)(e, "gitdir"))).isFile()) return null;
    let r = await (0, import_promises.open)((0, import_path2.join)(e, "gitdir"), "r");
    try {
      if ((await r.stat()).size > F) return null;
      let n = Buffer.alloc(F), { bytesRead: o } = await r.read(n, 0, F, 0);
      return n.toString("utf-8", 0, o).trim();
    } finally {
      await r.close();
    }
  } catch {
    return null;
  }
}
function ae(e) {
  try {
    if (!(0, import_fs.lstatSync)((0, import_path2.join)(e, "gitdir")).isFile()) return null;
    let t = (0, import_fs.openSync)((0, import_path2.join)(e, "gitdir"), "r");
    try {
      if ((0, import_fs.fstatSync)(t).size > F) return null;
      let r = Buffer.alloc(F), n = (0, import_fs.readSync)(t, r, 0, F, 0);
      return r.toString("utf-8", 0, n).trim();
    } finally {
      (0, import_fs.closeSync)(t);
    }
  } catch {
    return null;
  }
}
var Ee = 12, z = 4096;
async function le(e) {
  let t = [], r = [], n;
  try {
    n = await (0, import_promises.readdir)(e);
  } catch (o) {
    if (E(o) !== "absent") r.push("(git dir unreadable)");
    n = [];
  }
  if (n.length > z) r.push("(over-cap top-level entries)"), n = [];
  return await Promise.all(n.map(async (o) => {
    try {
      if ((await (0, import_promises.lstat)((0, import_path2.join)(e, o))).isSymbolicLink()) t.push(o);
    } catch (l) {
      if (E(l) !== "absent") r.push(o);
    }
  })), await Ie((0, import_path2.join)(e, "refs"), "refs", 0, t, r, { entries: z }), { symlinks: t, unexaminable: r };
}
async function Ie(e, t, r, n, o, l) {
  if (r > Ee) {
    o.push(`${t} (too deep to examine)`);
    return;
  }
  if (l.entries <= 0) {
    o.push(`${t} (too many entries to examine)`);
    return;
  }
  let c;
  try {
    c = await (0, import_promises.readdir)(e);
  } catch (f) {
    if (E(f) !== "absent") o.push(`${t} (unreadable)`);
    return;
  }
  for (let f of c) {
    if (--l.entries < 0) {
      o.push(`${t} (too many entries to examine)`);
      return;
    }
    let h = (0, import_path2.join)(e, f), a = `${t}/${f}`;
    try {
      let g = await (0, import_promises.lstat)(h);
      if (g.isSymbolicLink()) n.push(a);
      else if (g.isDirectory()) await Ie(h, a, r + 1, n, o, l);
    } catch (g) {
      if (E(g) !== "absent") o.push(`${a} (unreadable)`);
    }
  }
}
function ce(e) {
  let t = [], r = [], n;
  try {
    n = (0, import_fs.readdirSync)(e);
  } catch (o) {
    if (E(o) !== "absent") r.push("(git dir unreadable)");
    n = [];
  }
  if (n.length > z) r.push("(over-cap top-level entries)"), n = [];
  for (let o of n) try {
    if ((0, import_fs.lstatSync)((0, import_path2.join)(e, o)).isSymbolicLink()) t.push(o);
  } catch (l) {
    if (E(l) !== "absent") r.push(o);
  }
  return Oe((0, import_path2.join)(e, "refs"), "refs", 0, t, r, { entries: z }), { symlinks: t, unexaminable: r };
}
function Oe(e, t, r, n, o, l) {
  if (r > Ee) {
    o.push(`${t} (too deep to examine)`);
    return;
  }
  if (l.entries <= 0) {
    o.push(`${t} (too many entries to examine)`);
    return;
  }
  let c;
  try {
    c = (0, import_fs.readdirSync)(e);
  } catch (f) {
    if (E(f) !== "absent") o.push(`${t} (unreadable)`);
    return;
  }
  for (let f of c) {
    if (--l.entries < 0) {
      o.push(`${t} (too many entries to examine)`);
      return;
    }
    let h = (0, import_path2.join)(e, f), a = `${t}/${f}`;
    try {
      let g = (0, import_fs.lstatSync)(h);
      if (g.isSymbolicLink()) n.push(a);
      else if (g.isDirectory()) Oe(h, a, r + 1, n, o, l);
    } catch (g) {
      if (E(g) !== "absent") o.push(`${a} (unreadable)`);
    }
  }
}
function xe(e, t, r) {
  let n = (0, import_chunk_mndk3x2g.Nh)(e), o = (0, import_chunk_mndk3x2g.Nh)(t);
  if ((0, import_chunk_mndk3x2g.X6)(n) || (0, import_chunk_mndk3x2g.X6)(o)) return "indeterminate";
  if (n.skipped !== o.skipped) return "indeterminate";
  return r(n, o) && r(o, n) ? "same" : "distinct";
}
function G(e, t) {
  let r = (0, import_chunk_mndk3x2g.Nh)(e), n = (0, import_chunk_mndk3x2g.Nh)(t);
  if ((0, import_chunk_mndk3x2g.X6)(r) || (0, import_chunk_mndk3x2g.X6)(n)) return true;
  if (r.skipped !== n.skipped) return true;
  return (0, import_chunk_mndk3x2g.Y6)(n, r);
}
function W(e, t) {
  return xe(e, t, import_chunk_mndk3x2g.Y6);
}
function bE(e, t) {
  return xe(e, t, import_chunk_mndk3x2g.ipe);
}
function ue(e, t) {
  let r = (0, import_chunk_4rp6k6sw.VAe)(e);
  return r !== null && W(r.checkout, (0, import_path2.dirname)(t)) === "same";
}
function eel(e, t) {
  let r = (0, import_chunk_z6pfqf6e.Vge)(e);
  if (r === null) return false;
  let n = (0, import_chunk_w5s307zm.ol)(e);
  if (n === null || bE(n, e) !== "same") return false;
  let o = (0, import_chunk_w5s307zm.Gy)(e);
  if (o === null || bE(r, o) !== "same") return false;
  return t.some((l) => {
    let c = (0, import_chunk_w5s307zm.Mi)(l);
    return c !== null && bE(r, c) === "same";
  });
}
function o0(e, ...t) {
  if ((0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e)) return [];
  return (0, import_chunk_4smdap7r.M)([(0, import_chunk_w5s307zm.dr)(e), (0, import_chunk_w5s307zm.Mi)(e), ...t].filter((r) => r !== null && r !== void 0 && !(0, import_chunk_z6pfqf6e.sa)(r) && !(0, import_chunk_z6pfqf6e.vd)(r)));
}
function dEi(e, t) {
  {
    let r = Emr(e, t);
    if (r.escaped) {
      if ((0, import_chunk_mndk3x2g.X6)(r.dir)) return `This command was blocked because its working directory is spelled in a form that cannot be safely resolved (for example through a symlink storing a raw dot segment, a network-share or device-namespace shape, or an unreadable ancestor directory). If the directory is inside the worktree ${t}, re-run the command from its direct symlink-free path.`;
      if (r.dir.skipped && !r.roots.some((c) => c.skipped || (0, import_chunk_mndk3x2g.X6)(c))) return `This command was blocked because its working directory is network-shaped (a UNC share or /net automount spelling) while the protected checkout is local. If the directory is genuinely inside the worktree ${t}, re-run the command from its local, plainly-spelled path.`;
      let { noun: n, possessive: o } = E1t(t), l = (0, import_chunk_mndk3x2g.b9e)() ? null : Q(r);
      if (l !== null) {
        let c = Oy(t);
        return `${n} is isolated in the worktree ${c}, but this command's working directory (${Oy(e)}) is in a different worktree (${Oy(l)}). Refusing to run it there \u2014 ${o} commands must run inside its own worktree. Re-run the command from ${c}.`;
      }
      return `${n} is isolated in the worktree ${t}, but this command's working directory resolved to the shared checkout (${e}). Refusing to run it there \u2014 ${o} commands must run inside its worktree. Re-run the command from ${t}.${j(r.dir.canonical, r.worktree.canonical, t)}`;
    }
  }
  return null;
}
function Q(e) {
  let t = e.dir.canonical, r = e.worktree.canonical;
  if (t === null || r === null || J(t, r)) return null;
  return (0, import_chunk_w5s307zm.lJ)(t) ? (0, import_chunk_w5s307zm.dr)(t) : null;
}
function E1t(e) {
  return (0, import_chunk_rb36kwbn.ui)()?.worktreePath === e ? { noun: "This session", possessive: "a worktree-isolated session's" } : { noun: "This agent", possessive: "a worktree-isolated agent's" };
}
function kmr(e, t) {
  return Emr(e, t).escaped;
}
function Emr(e, t) {
  let r = (0, import_chunk_mndk3x2g.Nh)(e), n = (0, import_chunk_rb36kwbn.ui)(), o = null, l = (0, import_chunk_4smdap7r.M)((n !== null && n.worktreePath === t ? [n.originalCwd] : [(0, import_chunk_f9x2f6cx.Te)(), n?.originalCwd]).filter((m) => m !== void 0 && m !== "")), c = n?.liveLaunchAnchor !== void 0 && n.liveLaunchAnchor !== "" ? n.liveLaunchAnchor : void 0, f = c !== void 0 && ((0, import_chunk_z6pfqf6e.sa)(c) || (0, import_chunk_z6pfqf6e.vd)(c)), h = () => ot(t), a = c !== void 0 && !f ? [(0, import_chunk_w5s307zm.dr)(c), (0, import_chunk_w5s307zm.Mi)(c)].filter((m) => m !== null && m !== void 0) : [], g = h(), p = a.length > 0, d = [...l.flatMap((m) => (0, import_chunk_z6pfqf6e.sa)(m) || (0, import_chunk_z6pfqf6e.vd)(m) ? [m] : [(0, import_chunk_w5s307zm.dr)(m) ?? m, (0, import_chunk_w5s307zm.Mi)(m)]), ...a, ...c !== void 0 && !p ? [c] : [], g], y = (0, import_chunk_4smdap7r.M)(d.filter((m) => m !== null)).map((m) => (0, import_chunk_mndk3x2g.Nh)(m));
  if (!y.some((m) => (0, import_chunk_mndk3x2g.Y6)(r, m))) return { dir: r, worktree: o, roots: y, escaped: false };
  if (o ??= (0, import_chunk_mndk3x2g.Nh)(t), (0, import_chunk_mndk3x2g.ipe)(r, o)) return { dir: r, worktree: o, roots: y, escaped: false };
  return { dir: r, worktree: o, roots: y, escaped: true };
}
function nt(e) {
  if (!(0, import_chunk_w5s307zm.lJ)(e)) return import_chunk_w5s307zm._Oe;
  let t = (0, import_chunk_mndk3x2g.Nh)(e);
  if (!it((0, import_chunk_w5s307zm.dr)(e), t.lexical)) return import_chunk_w5s307zm._Oe;
  return (0, import_chunk_w5s307zm.Mi)(e) ?? import_chunk_w5s307zm._Oe;
}
function ot(e) {
  let t = (0, import_chunk_w5s307zm.m6e)((0, import_chunk_w5s307zm.Ju)().linkedFromRootByPin, e, nt);
  return t === import_chunk_w5s307zm._Oe ? null : t;
}
function it(e, t, r = "darwin") {
  if (e === null) return false;
  let n = r === "darwin" ? (0, import_chunk_z6pfqf6e.tR)(e) : e;
  if (r !== "win32") n = (0, import_chunk_z6pfqf6e.SFr)(n, r);
  else n = (0, import_chunk_mndk3x2g.tsn)((0, import_chunk_z6pfqf6e.oNo)(n));
  return n === t;
}
function hrn(e = (0, import_chunk_rb36kwbn.pk)()) {
  let t = import_chunk_c203g5kd.s.CLAUDE_BG_ISOLATION;
  if (t === "worktree" || t === "none") return t;
  if (e) return e.bgIsolation;
  return (0, import_chunk_2yx6c1y2.vt)().worktree?.bgIsolation;
}
function O5(e, t) {
  {
    let r = (0, import_chunk_mndk3x2g.ape)(t);
    if (r) {
      let a = Emr(e, r);
      if (!a.escaped) return Fe(e, r);
      let g = He(a.dir, a.roots);
      if (g === "unresolvable") return Ae(r);
      if (g === "network") return Le(r);
      let { noun: p } = E1t(r), d = (0, import_chunk_mndk3x2g.b9e)() ? null : Q(a);
      if (d !== null) {
        let y = Oy(r);
        return `${p} is isolated in the worktree ${y}, so its writes are limited to that folder. This path is in a different worktree (${Oy(d)}). Edit the copy of this file under ${y} instead.`;
      }
      return Ge(p, r, a.dir.canonical, a.worktree.canonical);
    }
    let n = Fe(e);
    if (n !== null) return n;
    if (!(0, import_chunk_mndk3x2g.xwt)()) return null;
    if (hrn() === "none") return null;
    let o = t.agentId ? (0, import_chunk_f9x2f6cx.Te)() : (0, import_chunk_18rsj2ts.pe)(), l = (0, import_chunk_mndk3x2g.Nh)(e), c = (0, import_chunk_mndk3x2g.Nh)(o);
    if (!(0, import_chunk_mndk3x2g.Y6)(l, c)) return null;
    if (!(0, import_chunk_w5s307zm.dr)(o) && (!(U6() || (0, import_chunk_harsxaq1.Dg)("session")) || (0, import_chunk_rb36kwbn.P0l)(o))) return null;
    if ((0, import_chunk_w5s307zm.lJ)(o)) return null;
    if (l.canonical !== null && (0, import_chunk_w5s307zm.v0r)(l.canonical)) return null;
    let f = He(l, c);
    if (f === "unresolvable") return Ae();
    if (f === "network") return Le();
    let h = c.canonical !== null;
    if ([...(0, import_chunk_rb36kwbn.UX)()].some((a) => a.lineage?.has(t.agentId))) return `This subagent's parent bg session hasn't isolated yet, so writes to the shared checkout are blocked. Have the parent call ${import_chunk_59xxesz9.IT} before spawning${h ? ", or make the edit inside a linked git worktree made for this task \u2014 paths inside a worktree are accepted" : ""}. (To disable this guard for this repo, set \`"worktree": {"bgIsolation": "none"}\` in .claude/settings.json.)`;
    if (t.agentId) return `This subagent's parent bg session hasn't isolated yet, so writes to the shared checkout are blocked. Re-spawn this agent with \`isolation: "worktree"\`${h ? `, have the parent call ${import_chunk_59xxesz9.IT} before spawning, or make the edit inside a linked git worktree made for this task \u2014 paths inside a worktree are accepted` : `, or have the parent call ${import_chunk_59xxesz9.IT} before spawning`}. (To disable this guard for this repo, set \`"worktree": {"bgIsolation": "none"}\` in .claude/settings.json.)`;
    return `This background session hasn't isolated its changes yet. Call ${import_chunk_59xxesz9.IT} first so edits land in a worktree instead of the shared checkout, then retry this edit using the worktree path${h ? ` (a path inside a linked git worktree is accepted; enter one that you made yourself with ${import_chunk_59xxesz9.IT} and its \`path\`)` : ""}. (To disable this guard for this repo, set \`"worktree": {"bgIsolation": "none"}\` in .claude/settings.json.)`;
  }
  return null;
}
function Fe(e, t) {
  let r = (0, import_chunk_mndk3x2g.Hal)();
  if (r === void 0) return null;
  let n = (0, import_chunk_mndk3x2g.Nh)(e).canonical, o = t === void 0 ? r.tree : (0, import_chunk_mndk3x2g.Nh)(t).canonical;
  if (n === null || o === null) return null;
  let l = r.fence.filter((h) => (0, import_chunk_mndk3x2g.nUt)(h, n));
  if (l.length === 0 || (0, import_chunk_mndk3x2g.nUt)(r.tree, n) || (0, import_chunk_mndk3x2g.nUt)(o, n)) return null;
  let c = (0, import_path.resolve)((0, import_chunk_2gtmjt3y.Ze)()), f = (0, import_chunk_mndk3x2g.Nh)((0, import_chunk_z6pfqf6e.zh)(c) ?? c).canonical;
  if (f !== null && (0, import_chunk_mndk3x2g.nUt)(f, n) && l.every((h) => (0, import_chunk_mndk3x2g.nUt)(h, f))) return null;
  return Ge(t === void 0 ? "This session" : E1t(t).noun, Oy(t ?? r.tree), n, o);
}
function Ge(e, t, r, n) {
  return `${e} is isolated in the worktree ${t}. Edit the worktree copy of this file instead of the shared-checkout path.${j(r, n, t)}`;
}
function He(e, t) {
  if ((0, import_chunk_mndk3x2g.X6)(e)) return "unresolvable";
  let r = Array.isArray(t) ? t : [t];
  if (e.skipped && !r.some((n) => n.skipped || (0, import_chunk_mndk3x2g.X6)(n))) return "network";
  return "contained";
}
function Ae(e) {
  return `This write was blocked because the path is spelled in a form that cannot be safely resolved (for example through a symlink storing a raw dot segment, a network-share or device-namespace shape, or an unreadable ancestor directory). ${e === void 0 ? "Retry the edit addressing the file by a direct, plainly-spelled path." : `If the file is inside the worktree ${e}, address it by its direct symlink-free path instead.`}`;
}
function Le(e) {
  return `This write was blocked because the path is network-shaped (a UNC share or /net automount spelling) while this session's checkout is local. Isolating cannot unblock it. ${e === void 0 ? "If the file is genuinely local, retry the edit addressing it by its local, plainly-spelled path." : `If the file is genuinely inside the worktree ${e}, address it by its local, plainly-spelled path instead.`}`;
}
