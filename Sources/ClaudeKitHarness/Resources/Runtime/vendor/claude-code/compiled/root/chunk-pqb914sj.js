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
var chunk_pqb914sj_exports = {};
__export(chunk_pqb914sj_exports, {
  A9e: () => A9e,
  C9e: () => C9e,
  Ffo: () => Ffo,
  Iwt: () => Iwt,
  Lfo: () => Lfo,
  Nfo: () => Nfo,
  R9e: () => R9e,
  cpe: () => cpe,
  ffs: () => ffs,
  m_r: () => m_r,
  mfs: () => mfs,
  nj: () => nj,
  p_r: () => p_r,
  pfs: () => pfs,
  rql: () => rql,
  x9e: () => x9e
});
module.exports = __toCommonJS(chunk_pqb914sj_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_b9qnxh4s = require("/$bunfs/root/chunk-b9qnxh4s.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_os = require("os");
var import_path = require("path");
var C = 5, F = /[{}]/;
function Lfo(e) {
  let n = e.length;
  if (n <= C) return e.map((s) => `'${s}'`).join(", ");
  return `${e.slice(0, C).map((s) => `'${s}'`).join(", ")}, and ${n - C} more`;
}
function rql(e) {
  let n = (0, import_chunk_z6pfqf6e._P)(e);
  if (n === -1) return e;
  let r = e.substring(0, n), s = (0, import_chunk_cg8dqz0a.x)() === "windows" ? Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\")) : r.lastIndexOf("/");
  if (s === -1) return ".";
  return r.substring(0, s) || "/";
}
function ffs(e) {
  return !(0, import_chunk_j4z7srhg.ec)() && e.servedCall !== true && !import_chunk_ha393e1n.Ue.isOnButNotRunning();
}
function C9e(e, n) {
  if (!import_chunk_ha393e1n.Ue.isSandboxingEnabled() || import_chunk_ha393e1n.Ue.storedDenyListsMayBeShort()) return false;
  let { allowOnly: r, denyWithinAllow: s } = import_chunk_ha393e1n.Ue.getFsWriteConfig(), t = n ?? (0, import_chunk_w578pjby.Ei)(e), o = (0, import_chunk_a3fb7pa2.gy)(), u = r.flatMap((a) => E(o.resolvedSandboxConfigPaths, import_chunk_w578pjby.Rce, a)), l = s.flatMap((a) => E(o.resolvedSandboxDenyPaths, import_chunk_w578pjby.Ei, a));
  return t.every((a) => {
    for (let d of l) if ((0, import_chunk_p1ewvgeh.Sc)(a, d)) return false;
    return u.some((d) => (0, import_chunk_p1ewvgeh.Sc)(a, d, { caseFold: true, uncShapeParity: true }));
  });
}
function E(e, n, r) {
  let s = e.get(r);
  if (s !== void 0) return s;
  let t = n(r);
  return e.set(r, t), t;
}
function Nfo(e) {
  return e?.type === "safetyCheck" || e?.type === "other" ? e.reason : void 0;
}
function Ffo(e) {
  return e?.type === "safetyCheck" && e.circuitBreaker !== void 0 && (0, import_chunk_pbteexar.HK)(e) ? e.circuitBreaker : void 0;
}
function pfs(e, n, r) {
  let s = Nfo(e.decisionReason) ?? e.message, t = Ffo(e.decisionReason);
  return { type: "safetyCheck", reason: r === void 0 ? s : `${s.endsWith(".") ? s : `${s}.`} ${r.sentence}.`, ...n ? { classifierApprovable: false, circuitBreaker: "restrictedMode", also: ["internalHardDeny", ...t !== void 0 ? [t] : []] } : t !== void 0 ? { classifierApprovable: false, circuitBreaker: t, also: ["internalHardDeny"] } : { classifierApprovable: r?.personOnly !== true, circuitBreaker: "internalHardDeny" } };
}
function A9e(e) {
  return !e.allowed && e.refusedByDefault === true && e.decisionReason === void 0 && e.isInWorkingDir === false;
}
function cpe(e, n, r, s, t, o) {
  let u = s ?? (0, import_chunk_w578pjby.ua)(e), l = t ? /* @__PURE__ */ new Set([...u.spellings, ...t]) : u.spellings, a = H(e, n, r, u, l, o);
  if (o?.forShellTool || !a.allowed && a.decisionReason !== void 0) return a;
  let d = (0, import_chunk_p1ewvgeh.GSo)(l);
  return d === void 0 ? a : { allowed: false, decisionReason: { type: "safetyCheck", reason: d, classifierApprovable: false } };
}
function H(e, n, r, s, t, o) {
  let u = r === "read" ? "read" : "edit", l = s.spellings;
  for (let i of t) {
    let c = (0, import_chunk_p1ewvgeh.Ia)(i, n, u, "deny");
    if (c !== null) return { allowed: false, decisionReason: { type: "rule", rule: c } };
  }
  if (s.unresolved) {
    let i = (0, import_chunk_xfj2cwfv.Smn)(e);
    if (r === "read" && !n.restricted) return n.blockReadsOutsideWorkingDirectories === true ? { allowed: false, decisionReason: { type: "safetyCheck", reason: i, classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" } } : { allowed: false, decisionReason: { type: "other", reason: i } };
    return { allowed: false, decisionReason: { type: "safetyCheck", reason: i, classifierApprovable: false, ...n.restricted && { circuitBreaker: "restrictedMode" } } };
  }
  if (r === "read" && (0, import_chunk_p1ewvgeh.sme)(e, n, l, true)) return { allowed: false, decisionReason: { type: "safetyCheck", reason: n.blockReadsOutsideWorkingDirectories ? import_chunk_pbteexar.Hz : import_chunk_pbteexar.SEe, classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" } };
  let a;
  if (r !== "read") {
    let i = (0, import_chunk_p1ewvgeh.tvt)(e, {}, l, { restricted: n.restricted });
    if (i.behavior === "deny") a = i;
    if (i.behavior === "allow" && (0, import_chunk_p1ewvgeh.$Er)(i, n)) return { allowed: true, decisionReason: i.decisionReason };
  }
  if (r !== "read") {
    let i = (0, import_chunk_p1ewvgeh.Ore)(e, l, void 0, (0, import_chunk_p1ewvgeh.pYe)(n), n.trustedNetworkDirectories);
    if (!i.safe) {
      let c = (0, import_chunk_p1ewvgeh.GSs)(s.requested, s, n), h = Nfo(a?.decisionReason) ?? i.message, p = Ffo(a?.decisionReason), k = a !== void 0 && c !== null && !(0, import_chunk_p1ewvgeh.oBn)(s.requested, n), R = n.restricted ? "restrictedMode" : i.circuitBreaker ?? p, g = [...i.circuitBreaker !== void 0 ? [i.circuitBreaker] : [], ...i.also ?? [], ...a !== void 0 ? ["internalHardDeny"] : [], ...p !== void 0 ? [p] : []].filter((D, v, T) => D !== R && T.indexOf(D) === v);
      return { allowed: false, decisionReason: { type: "safetyCheck", reason: c === null ? h : `${h.endsWith(".") ? h : `${h}.`} ${c.sentence}.`, ...n.restricted ? { classifierApprovable: false, circuitBreaker: "restrictedMode" } : { classifierApprovable: i.classifierApprovable && !c?.personOnly && !k && p === void 0, ...R !== void 0 && { circuitBreaker: R } }, ...g.length > 0 && { also: g } } };
    }
  }
  if (a !== void 0) {
    let i = (0, import_chunk_p1ewvgeh.gYe)(s, n);
    return { allowed: false, decisionReason: pfs(a, n.restricted, i === null ? void 0 : { sentence: (0, import_chunk_p1ewvgeh.kat)(s.requested, i), personOnly: i.carriedOut || !(0, import_chunk_p1ewvgeh.oBn)(s.requested, n) }) };
  }
  let d = (0, import_chunk_p1ewvgeh.w_)(e, n, l);
  if (d) {
    if (r === "read" || n.mode === "acceptEdits") return { allowed: true };
  }
  if (r === "read") {
    let i = (0, import_chunk_p1ewvgeh.E2e)(e, {}, l, { restricted: n.restricted, transcriptsJudged: true, forTheModelHere: !o?.toSend && !(0, import_chunk_p1ewvgeh.rwe)(n) && ![...t].some((c) => (0, import_chunk_p1ewvgeh.Ia)(c, n, "read", "ask") !== null) });
    if (i.behavior === "deny") return { allowed: false, decisionReason: (0, import_chunk_p1ewvgeh.kUi)(i.decisionReason) };
    if (i.behavior === "allow" && (0, import_chunk_p1ewvgeh.$Er)(i, n)) return { allowed: true, decisionReason: i.decisionReason };
  }
  if (r !== "read" && !d && ffs(n) && C9e(e, l)) return { allowed: true, decisionReason: { type: "other", reason: "Path is in sandbox write allowlist" } };
  let f = (0, import_chunk_p1ewvgeh.Rjt)(l, n, u);
  if (f !== null) return { allowed: true, decisionReason: { type: "rule", rule: f } };
  if (r !== "read") {
    let i = (0, import_chunk_p1ewvgeh.gYe)(s, n);
    if (i?.carriedOut) return { allowed: false, isInWorkingDir: d, decisionReason: { type: "safetyCheck", reason: (0, import_chunk_p1ewvgeh.kat)(s.requested, i), classifierApprovable: false } };
  }
  return { allowed: false, isInWorkingDir: d, refusedByDefault: true };
}
function m(e, n, r, s, t) {
  return cpe(e, n.blockFileToolReadsOutsideWorkingDirectories === true ? { ...n, blockFileToolReadsOutsideWorkingDirectories: false } : n, r, s, t, { forShellTool: true });
}
function I(e) {
  return [e.alwaysDenyRules, ...(0, import_chunk_f9x2f6cx.z4t)().length > 0 ? [e.alwaysAskRules] : []].some((n) => Object.values(n).some((r) => (r?.length ?? 0) > 0));
}
function R9e(e, n) {
  return cpe(e, n, "read", void 0, void 0, { toSend: true });
}
function N(e, n, r, s) {
  let t = (0, import_chunk_w578pjby.le)(), o = rql(e), u = (0, import_path.isAbsolute)(o) ? o : (0, import_path.resolve)(n, o), l = (0, import_path.isAbsolute)(e) ? e : (0, import_path.resolve)(n, e);
  for (; ; ) {
    let { resolvedPath: a, isSymlink: d, isCanonical: f } = (0, import_chunk_w578pjby.no)(t, l), i = (0, import_path.dirname)(l);
    if (f || l === u || i === l) return { ...m(a, r, s, f ? (0, import_chunk_w578pjby.Yft)(a) : void 0, f && d && I(r) ? (0, import_chunk_w578pjby.Ei)(l) : void 0), resolvedPath: a };
    l = i;
  }
}
var L = /^[A-Za-z]:\/?$/, G = /^[A-Za-z]:\/[^/]+$/, q = /^[A-Za-z]:\//, W = /^\\\\([^\\]+)\\([a-z])\$(?=$|\\)/, z = /^\/\.(?:vol|file)(?:\/|$)/i, X = /^(?:[A-Za-z]:[\\/]|[\\/]{2}|[\\/]\?\?[\\/])/, U = /^[\\/]{2}(?:[?.][\\/]|;|[^\\/]+[\\/]admin\$(?=$|[\\/]))/i;
function Iwt(e) {
  return j(e).some((n) => {
    let r = O(n);
    if (U.test(r) || V(r)) return true;
    let s = r.replace(/[\\/]+/g, "/");
    if ((0, import_chunk_cg8dqz0a.x)() === "macos" && z.test(s)) return true;
    return K(s);
  });
}
function j(e) {
  let n = [e, e.split("/").filter((r, s) => r !== "." || s === 0).join("/") || (e.startsWith("/") ? "/" : "")];
  if (X.test(e) || (0, import_chunk_cg8dqz0a.x)() === "windows") for (let r of (0, import_chunk_4smdap7r.M)([e, (0, import_chunk_z6pfqf6e.tNo)(e)])) n.push(...A((0, import_chunk_p548ry42.MCr)(r)), ...A((0, import_chunk_p548ry42.MCr)(r.replace(/[^\\/]+/g, (s) => {
    let t = (0, import_chunk_2fxy1zey.x9)(s);
    return t === "." || t === ".." ? t : s;
  }))));
  return (0, import_chunk_4smdap7r.M)(n);
}
function A(e) {
  let n = W.exec(e);
  return n !== null && _(n[1]) === "own_host" ? [e, `${n[2]}:${e.slice(n[0].length) || "\\"}`] : [e];
}
function _(e) {
  return (0, import_chunk_p548ry42.vun)(`\\\\${e}\\`);
}
function V(e) {
  if (!/^[\\/]{2}/.test(e)) return false;
  let n = W.exec((0, import_chunk_p548ry42.MCr)(e)), r = n === null ? void 0 : _(n[1]);
  return r === "numeric_host" || r === "odd_host";
}
function K(e) {
  if (e === "*" || e.endsWith("/*")) return true;
  let n = (0, import_chunk_cg8dqz0a.x)() === "macos", r = (d) => n ? d.replace(/^\/private\/(etc|var|tmp|home)(\/|$)/i, "/$1$2") : d, s = r(e), t = s === "/" ? s : s.replace(/\/$/, "");
  if (t === "/") return true;
  if (L.test(t)) return true;
  let o = r(O((0, import_os.homedir)()).replace(/[\\/]+/g, "/")).replace(/\/$/, "");
  if ((0, import_chunk_p1ewvgeh.Yo)(t) === (0, import_chunk_p1ewvgeh.Yo)(o)) return true;
  let u = Y((0, import_os.homedir)()), l = (0, import_chunk_4smdap7r.M)([o, u, .../^[\\/]{2}/.test((0, import_os.homedir)()) ? A((0, import_chunk_p548ry42.MCr)((0, import_chunk_z6pfqf6e.tNo)((0, import_os.homedir)()))).map((d) => d.replace(/[\\/]+/g, "/").replace(/\/$/, "")) : []]);
  if (l.some((d) => d !== o && (0, import_chunk_p1ewvgeh.Yo)(t) === (0, import_chunk_p1ewvgeh.Yo)(d))) return true;
  for (let d of l) {
    let f = q.exec(d)?.[0];
    if (f !== void 0 && (0, import_chunk_p1ewvgeh.Yo)(t.slice(0, f.length)) === (0, import_chunk_p1ewvgeh.Yo)(f) && (0, import_chunk_z6pfqf6e.eNo)(d.slice(f.length), t.slice(f.length)).some((i) => i.length === 0)) return true;
  }
  if ((0, import_path.dirname)(t) === "/") return true;
  if (G.test(t)) return true;
  return false;
}
function O(e) {
  return (0, import_chunk_z6pfqf6e.BQe)((0, import_chunk_p548ry42.ICr)((0, import_chunk_z6pfqf6e.tNo)(e).replace(import_chunk_z6pfqf6e.Oca, "$1:")));
}
function Y(e) {
  let { canonicalHomedirByHome: n } = (0, import_chunk_a3fb7pa2.gy)(), r = n.get(e);
  if (r !== void 0) return r;
  let s = O((0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e).resolvedPath).replace(/[\\/]+/g, "/").replace(/\/$/, "");
  return n.set(e, s), s;
}
function p_r(e) {
  let n = e.split(/\/+/);
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? [...e.split(/[\\/]+/), ...n] : n;
}
function x9e(e) {
  let n = e.split((0, import_chunk_cg8dqz0a.x)() === "windows" ? /[\\/]/ : "/"), r = false;
  for (let s of n) {
    if (s === "" || s === ".") continue;
    if (s === "..") {
      if (r) return true;
    } else r = true;
  }
  return false;
}
function m_r(e) {
  let n = e.split(/[\\/]+/);
  return n.some((r, s) => {
    if (r !== "..") return false;
    let t = n.slice(0, s).join("/");
    return (0, import_chunk_z6pfqf6e._P)(t) !== -1 || t.includes("[") && n.slice(s + 1).join("/").includes("]");
  });
}
function Z(e) {
  return Object.values(e.alwaysDenyRules).some((n) => n?.some((r) => r === import_chunk_k883m4fq.De || r.startsWith(`${import_chunk_k883m4fq.De}(`)));
}
function J(e, n, r, s) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return;
  let t = Q(e, n, r, s);
  if (s === "read" && t?.decisionReason?.type !== "rule" && m_r(e) && (r.blockReadsOutsideWorkingDirectories === true || Z(r))) return { allowed: false, resolvedPath: e, decisionReason: { type: "safetyCheck", reason: `A glob before the '..' in '${e}' is expanded by the shell before the path is opened, so the target cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories) or the Read deny rules. Spell the path without the glob.`, classifierApprovable: false, circuitBreaker: "outsideReadsBlocked" } };
  return t;
}
function Q(e, n, r, s) {
  let t = (0, import_chunk_w578pjby.le)(), o = (0, import_path.isAbsolute)(e) ? e : `${n}/${e}`, u = "/", l = [];
  for (let c of o.split("/")) {
    if (c === "" || c === ".") continue;
    if (c !== "..") {
      l.push(c);
      continue;
    }
    if (l.length > 0) {
      let h = (0, import_chunk_w578pjby.no)(t, (0, import_path.resolve)(u, ...l));
      if (!h.isCanonical) return;
      u = h.resolvedPath, l = [];
    }
    u = (0, import_path.dirname)(u);
  }
  let a = (0, import_path.resolve)(u, ...l);
  if (s !== "read") {
    let c = { ...(0, import_chunk_w578pjby.ua)(a), requested: o }, h = m(c.unresolved ? a : c.landing, r, s, c);
    if (h.allowed || h.isInWorkingDir === true && h.decisionReason === void 0) return;
    let p = (0, import_chunk_p1ewvgeh.gYe)(c, r);
    return { ...h, resolvedPath: p?.carriedOut ? p.landing : a };
  }
  let { resolvedPath: d, isCanonical: f } = (0, import_chunk_w578pjby.no)(t, a), i = m(d, r, s, f ? (0, import_chunk_w578pjby.Yft)(d) : void 0);
  if (i.allowed || i.isInWorkingDir === true && i.decisionReason === void 0) return;
  return { ...i, resolvedPath: d };
}
function nj(e, n, r, s, t = false) {
  (0, import_chunk_b9qnxh4s.CUi)(e.length);
  let o = (0, import_chunk_z6pfqf6e.Pp)(e);
  if ((0, import_chunk_p1ewvgeh.dM)(o, true)) return { allowed: false, resolvedPath: o, decisionReason: { type: "other", reason: "UNC network paths require manual approval" } };
  if (o.startsWith("~")) return { allowed: false, resolvedPath: o, decisionReason: { type: "other", reason: "Tilde expansion variants (~user, ~+, ~-) in paths require manual approval" } };
  if (o.includes("$") || (0, import_chunk_cg8dqz0a.x)() === "windows" && o.includes("%") || o.includes("`") || o.startsWith("=")) return { allowed: false, resolvedPath: o, decisionReason: { type: "other", reason: "Shell expansion syntax in paths requires manual approval" } };
  if (x9e(o)) return J(o, n, r, s) ?? { allowed: false, resolvedPath: o, decisionReason: { type: "other", reason: "Path contains '..' traversal after a directory segment, which may follow a symlink outside the working directory" } };
  if ((s === "write" || s === "create") && F.test(o)) return { allowed: false, resolvedPath: o, decisionReason: { type: "other", reason: "Brace characters in write target require manual approval \u2014 bash may brace-expand to paths outside the working directory" } };
  if ((0, import_chunk_z6pfqf6e._P)(o) !== -1) {
    if (s === "write" || s === "create") return { allowed: false, resolvedPath: o, decisionReason: { type: "other", reason: "Glob patterns are not allowed in write operations. Please specify an exact file path." } };
    return N(o, n, r, s);
  }
  let u = (0, import_path.isAbsolute)(o) ? o : (0, import_path.resolve)(n, o);
  return mfs(u, r, s, t && (0, import_chunk_cg8dqz0a.x)() !== "windows" && !/(?:^|\/)\.{0,2}$/.test(o));
}
function mfs(e, n, r, s = false) {
  if (r !== "read") {
    let a = (0, import_chunk_w578pjby.ua)(e), d = a.unresolved ? e : a.landing, f = m(d, n, r, a), i = f.decisionReason, c = s && a.leafIsSymlink && !n.restricted && (f.allowed || i === void 0 || i.type === "safetyCheck" && i.circuitBreaker === void 0 && i.also === void 0) ? (0, import_chunk_w578pjby.ua)((0, import_path.dirname)(e)) : void 0;
    if (c?.unresolved === false && c.endsUnexamined !== true) {
      let p = (0, import_path.basename)(e), k = (0, import_path.join)(c.landing, p), R = m(k, n, r, { unresolved: false, requested: (0, import_path.join)(c.requested, p), spellings: c.spellings.map((v) => (0, import_path.join)(v, p)), landing: k, leafIsSymlink: true }), g = R.decisionReason, D = (0, import_chunk_xfj2cwfv.hv)(e);
      return { ...R, ...!f.allowed && (R.allowed || i !== void 0 && g === void 0) && { allowed: false, decisionReason: { type: "safetyCheck", reason: `${D} is a symbolic link; rm removes the link, not what it points to`, classifierApprovable: true } }, ...a.unresolved && g?.type === "safetyCheck" && g.classifierApprovable && g.circuitBreaker === void 0 && { decisionReason: { ...g, reason: `${g.reason} It is a symbolic link that could not be followed.` } }, resolvedPath: c.landing };
    }
    let h = f.allowed ? null : (0, import_chunk_p1ewvgeh.gYe)(a, n);
    return { ...f, resolvedPath: h?.carriedOut ? h.landing : e };
  }
  let { resolvedPath: t, isSymlink: o, isCanonical: u } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e);
  return { ...m(t, n, r, u ? (0, import_chunk_w578pjby.Yft)(t) : void 0, u && o && I(n) ? (0, import_chunk_w578pjby.Ei)(e) : void 0), resolvedPath: t };
}
