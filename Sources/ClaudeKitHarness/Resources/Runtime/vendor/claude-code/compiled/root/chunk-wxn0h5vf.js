const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_wxn0h5vf_exports = {};
__export(chunk_wxn0h5vf_exports, {
  $mr: () => $mr,
  Bmr: () => Bmr,
  Ern: () => Ern,
  Fmr: () => Fmr,
  H1t: () => H1t,
  I1t: () => I1t,
  M1t: () => M1t,
  O1t: () => O1t,
  P1t: () => P1t,
  Plo: () => Plo,
  Sel: () => Sel,
  Umr: () => Umr,
  Xls: () => Xls,
  Yls: () => Yls,
  _De: () => _De,
  _We: () => _We,
  b0n: () => b0n,
  bel: () => bel,
  dN: () => dN,
  est: () => est,
  jfe: () => jfe,
  kC: () => kC,
  tst: () => tst,
  x1t: () => x1t,
  xlo: () => xlo,
  yel: () => yel
});
module.exports = __toCommonJS(chunk_wxn0h5vf_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_72w4k1fr = require("/$bunfs/root/chunk-72w4k1fr.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_path = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path2 = require("path");
var U = "https, http, ssh (also written git+ssh or ssh+git), user@host:path, or a local file:// address with no host. git:// isn't supported because it isn't encrypted.", q = /^(?!-)[A-Za-z0-9._-]+@(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\]):(?!\/\/)/, Z = /^(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\])$/, X = /^(?!-)[A-Za-z0-9._-]+$/;
function I(e) {
  if (e === import_chunk_sah8dzn4.YA) return e;
  return (0, import_chunk_tp3c5q2s.Qa)((0, import_chunk_tp3c5q2s.Ft)(e, 200)) || "\u201C\u201D";
}
function Yls(e) {
  if (/[\u0000-\u001f\u007f]/.test(e)) throw new import_chunk_jv7av99m.A(`Invalid git URL: ${I((0, import_chunk_sah8dzn4.zm)(e))} \u2014 control characters are not allowed`, "git URL contains control characters");
  if (e.includes("%00")) throw new import_chunk_jv7av99m.A(`Invalid git URL: ${I((0, import_chunk_sah8dzn4.zm)(e))} \u2014 "%00" in a git address means different things to different versions of git, so it is not allowed. Remove it.`, "git URL contains %00");
  if ((0, import_chunk_sah8dzn4._J)(e)) throw new import_chunk_jv7av99m.A(`Invalid git URL: ${I((0, import_chunk_sah8dzn4.zm)(e))} \u2014 git can read a square bracket (also written %5B or %5D) as marking a server name or where a local path starts, so it could connect to a different server or open a different folder than this address names. In a server address, brackets may only surround an IPv6 address, as in git@[2001:db8::1]:repo.git. Remove them, or rename the folder whose name has them.`, "git URL has a square bracket that git could read as the host");
  if (q.test(e)) {
    if (!e.includes("://")) return e;
    throw new import_chunk_jv7av99m.A(`Invalid git URL: an address written as user@host:path can't contain "://", because git then reads the text before "://" as a protocol name, as in https://. Remove the "://".`, "scp-like git URL contains ://");
  }
  let i;
  try {
    i = new URL(e);
  } catch {
    throw new import_chunk_jv7av99m.A(`Invalid git URL: ${I((0, import_chunk_sah8dzn4.zm)(e))} (it could not be read as a URL). Supported: ${U}`, "Invalid git URL");
  }
  if (!["https:", "http:", "ssh:", "file:", "git+ssh:", "ssh+git:"].includes(i.protocol)) {
    let r = (0, import_chunk_sah8dzn4.zm)(e), o = e.slice(0, e.indexOf(":") + 1).toLowerCase();
    throw new import_chunk_jv7av99m.A(r === e ? `Invalid git URL protocol: ${(0, import_chunk_tp3c5q2s.Qa)((0, import_chunk_tp3c5q2s.Ft)(i.protocol, 40))}. Supported: ${U}` : o !== "" && r.toLowerCase().startsWith(o) ? `Invalid git URL: ${I(r)}. Supported: ${U}` : `Invalid git URL. Supported: ${U}`, "Invalid git URL protocol");
  }
  if ((i.protocol === "https:" || i.protocol === "http:") && (0, import_chunk_43nz5n02.Rge)(e)) throw new import_chunk_jv7av99m.A(`Invalid git URL: ${I((0, import_chunk_sah8dzn4.zm)(e))} \u2014 a backslash before the first "/" can make git connect to a different server than this address names. Remove it, or write it as %5C if it is part of a user name.`, "git URL has a backslash in its authority");
  if (["ssh:", "git+ssh:", "ssh+git:"].includes(i.protocol)) {
    let r = /^[a-z][a-z0-9+.-]*:\/\/([^/]*)/i.exec(e)?.[1] ?? "", o = r.lastIndexOf("@"), s = o === -1 ? void 0 : r.slice(0, o), y = o === -1 ? r : r.slice(o + 1), h = /^(.*?)(?::([0-9]{1,5}))?$/.exec(y)?.[1] ?? y;
    if (/[?#]/.test(e) || !Z.test(h) || s !== void 0 && !X.test(s)) {
      let b = /^[\u0000-\u0020]*[a-z][a-z0-9+.-]*:(?:\/\/)?([^/?#]*)/i.exec(e), k = b?.[1] ?? "", S = (b?.[0].length ?? 0) - k.length, O = k.slice(0, Math.max(0, k.lastIndexOf("@"))), T = O.search(import_chunk_sah8dzn4.$Lr), K = T !== -1 ? e.slice(0, S) + `${O.slice(0, T)}:***` + e.slice(S + O.length) : e, x = b?.[0].includes("//") === true, j = x && k !== "" && !/:(?!\d+$)|%3a/i.test(k), W = e.includes("@") && !k.includes("@") && !j || k.includes("@") && e.includes("@", S + k.length), H = /%40/i.test(e) || (0, import_chunk_sah8dzn4.zm)(e) === import_chunk_sah8dzn4.YA ? import_chunk_sah8dzn4.YA : W || !x ? (0, import_chunk_sah8dzn4.zm)(e) : K.replace(/[?#][\s\S]*$/, (V) => `${V[0]}***`);
      throw new import_chunk_jv7av99m.A(`Invalid ssh git URL: the host must be a hostname or bracketed IPv6 literal (optionally :port), the user a plain name, and the URL may not carry ? or # (${I(H)})`, "ssh git URL host or user has disallowed characters");
    }
  }
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(e)) throw new import_chunk_jv7av99m.A(`Invalid git URL: ${I((0, import_chunk_sah8dzn4.zm)(e))} \u2014 a scheme URL must be spelled scheme://\u2026`, "git URL scheme without //");
  if (i.protocol === "file:" && ((0, import_chunk_z6pfqf6e.YB)(Q(e)) || i.host !== "" || /^file:\/\/[^/\\]/i.test(e) || /^file:[\\/]*[\\]/i.test(e) || (0, import_chunk_z6pfqf6e.yP)(ee(i)))) throw new import_chunk_jv7av99m.A(`Refusing git URL ${I((0, import_chunk_sah8dzn4.zm)(e))}: a file: URL must name a local path (no host, no network-shaped path).${/^file:\/\/[a-z]:/i.test(e) ? " A drive letter such as C: counts as a local path only on Windows." : ""}`, "file git URL names a host or network path");
  return e;
}
function Q(e) {
  try {
    return decodeURIComponent(e.replace(/^file:\/\//i, ""));
  } catch {
    return "/../malformed-percent-encoding";
  }
}
function ee(e) {
  try {
    return decodeURIComponent(e.pathname);
  } catch {
    return "//malformed-percent-encoding/";
  }
}
function x1t(e) {
  try {
    return Yls(e), null;
  } catch (i) {
    return (0, import_chunk_jv7av99m.D)(i);
  }
}
function est(e) {
  return x1t(e) === null;
}
function jfe(e) {
  return (0, import_chunk_54j6k3fn.omo)((0, import_chunk_xcgcdx61.uf)(e).marketplace);
}
function Fmr({ pluginId: e, surface: i, replaced: r }) {
  return { ...i !== void 0 && { surface: (0, import_chunk_78g0060s.f)(i) }, replaced: r, is_directory: jfe(e) };
}
function yel(e) {
  switch ((0, import_chunk_y53wbr8a.a)("tengu_plugin_directory_catalog_load", { outcome: (0, import_chunk_78g0060s.f)(e.outcome), trigger: (0, import_chunk_78g0060s.f)(e.trigger), pages: e.pages, listing_count: e.listingCount, installable_count: e.tally.installable, skipped_unparseable: e.tally.unparseable, skipped_other_surface: e.tally.skipped.other_surface, skipped_no_pin: e.tally.skipped.no_pin, skipped_bad_url: e.tally.skipped.bad_url, skipped_bad_path: e.tally.skipped.bad_path, name_clashes: e.tally.nameClashes, ...e.namesRepaired !== void 0 && { names_repaired: e.namesRepaired }, duration_ms: e.durationMs, ...e.cacheAgeMin !== void 0 && { cache_age_min: e.cacheAgeMin }, ...e.outcome === "stale_failed" && { incomplete_walk: e.incompleteWalk }, ...e.outcome === "refused" && { refusal: (0, import_chunk_78g0060s.f)(e.refusal) } }), e.outcome) {
    case "fresh_cache":
    case "walked":
      (0, import_chunk_cqa9hrgx.u)("plugin_directory_catalog");
      return;
    case "walked_names_only":
    case "walked_not_written":
    case "stale_failed":
    case "stale_empty":
    case "stale_duplicate_id":
    case "backoff":
      (0, import_chunk_cqa9hrgx.l)("plugin_directory_catalog", e.outcome);
      return;
    case "incomplete":
    case "duplicate_id":
    case "backoff_cold":
      (0, import_chunk_cqa9hrgx.m)("plugin_directory_catalog", e.outcome);
      return;
    case "refused":
      switch (e.refusal) {
        case "not-served":
        case "failed":
          (0, import_chunk_cqa9hrgx.m)("plugin_directory_catalog", e.refusal);
          return;
        case "policy":
          if (!e.blockedByOrganization) (0, import_chunk_cqa9hrgx.l)("plugin_directory_catalog", "policy_not_loaded");
          return;
      }
  }
}
function Sel({ directoryRows: e, totalRows: i, foldedRows: r, loadMs: o, entry: s, directoryState: y, knownMarketplaceCount: g }) {
  (0, import_chunk_y53wbr8a.a)("tengu_plugin_discover_shown", { directory_rows: e, total_rows: i, folded_rows: r, load_ms: o, entry: (0, import_chunk_78g0060s.f)(s), directory_state: (0, import_chunk_78g0060s.f)(y), known_marketplace_count: g });
}
function P1t({ fromPluginId: e, toPluginId: i, surface: r, managedNames: o, result: s }) {
  {
    let y = { surface: (0, import_chunk_78g0060s.f)(r), from_is_directory: jfe(e), to_is_directory: jfe(i) };
    if (s.outcome === "bad") {
      (0, import_chunk_cqa9hrgx.m)("plugin_directory_switch", s.code, y);
      return;
    }
    if (s.isPrimary) if (s.outcome === "sad") (0, import_chunk_cqa9hrgx.l)("plugin_directory_switch", s.code, y);
    else (0, import_chunk_cqa9hrgx.u)("plugin_directory_switch", y);
    let g = (0, import_chunk_xcgcdx61.uf)(e), h = (0, import_chunk_54j6k3fn.nin)(g.name, g.marketplace, o);
    (0, import_chunk_y53wbr8a.a)("tengu_plugin_marketplace_switched", { ...y, scope_changed: s.scopeChanged, stayed_disabled: s.stayedDisabled, data_dir_carried: s.dataDirCarried, pin_changed: s.pinChanged, replaced_count: s.replacedCount, is_primary: s.isPrimary, from_plugin_id_hash: h.plugin_id_hash, from_plugin_scope: h.plugin_scope, from_plugin_name_redacted: h.plugin_name_redacted, from_marketplace_name_redacted: h.marketplace_name_redacted, ...(0, import_chunk_54j6k3fn.aj)(i, o) });
  }
}
function tst({ enabled: e, surface: i, failure: r }) {
  {
    let o = { enabled: e, surface: (0, import_chunk_78g0060s.f)(i) };
    if (r !== void 0) {
      (0, import_chunk_cqa9hrgx.m)("plugin_directory_toggle", r, o);
      return;
    }
    (0, import_chunk_cqa9hrgx.u)("plugin_directory_toggle", o), (0, import_chunk_y53wbr8a.a)("tengu_plugin_directory_toggled", o);
  }
}
function O1t(e) {
  {
    let i = (0, import_chunk_54j6k3fn.jO)();
    if (i.blockedLogged.has(e)) return;
    i.blockedLogged.add(e), (0, import_chunk_y53wbr8a.a)("tengu_plugin_directory_blocked", { by: (0, import_chunk_78g0060s.f)(e) });
  }
}
function bel({ pluginId: e, surface: i, resultIndex: r }) {
  {
    if (!jfe(e)) return;
    let { name: o, marketplace: s } = (0, import_chunk_xcgcdx61.uf)(e);
    (0, import_chunk_y53wbr8a.a)("tengu_plugin_directory_listing_viewed", { ...(0, import_chunk_54j6k3fn.nin)(o, s), surface: (0, import_chunk_78g0060s.f)(i), result_index: r });
  }
}
function xlo({ pluginId: e, linkKind: i }) {
  {
    if (!jfe(e)) return;
    let { name: r, marketplace: o } = (0, import_chunk_xcgcdx61.uf)(e);
    (0, import_chunk_y53wbr8a.a)("tengu_plugin_directory_link_opened", { ...(0, import_chunk_54j6k3fn.nin)(r, o), link_kind: (0, import_chunk_78g0060s.f)(i) });
  }
}
function $mr({ reason: e, sourceKind: i, surface: r }) {
  (0, import_chunk_y53wbr8a.a)("tengu_marketplace_add_failed", { reason: (0, import_chunk_78g0060s.f)(e), source_kind: (0, import_chunk_78g0060s.f)(i === "github" || i === "git" || i === "url" ? i : i === "file" || i === "directory" ? "local" : "other"), surface: (0, import_chunk_78g0060s.f)(r) });
}
(0, import_chunk_adx6804h.B)();
async function I1t(e, i, r) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { state: "absent" };
  let o = (0, import_path2.join)((0, import_chunk_wj4me9k5.Mc)(), e), s = r === "plugin catalog cache" ? "Plugin catalog cache" : `Plugin directory ${r}`;
  try {
    var _stack = [];
    try {
      if (import_chunk_09gzjq1e.Fo === 0 && (await (0, import_promises.lstat)(o)).isSymbolicLink()) return (0, import_chunk_w578pjby.t)(`${s} is a symbolic link; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
      const y = __using(_stack, await (0, import_promises.open)(o, import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.Fo | import_chunk_jxja0v0z.cr), true);
      if (!(await y.stat()).isFile()) return (0, import_chunk_w578pjby.t)(`${s} is not a file; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
      let g = await (0, import_chunk_w578pjby.KM)(y, i + 1, "file");
      if (g.length > i) return (0, import_chunk_w578pjby.t)(`${s} is too large; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
      return { state: "read", json: (0, import_chunk_w578pjby.te)(g.toString("utf-8")) };
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (y) {
    if ((0, import_chunk_jv7av99m.J)(y)) return { state: "absent" };
    let g = (0, import_chunk_jv7av99m.w)(y);
    if (g === "ELOOP" || g === "EMLINK") return (0, import_chunk_w578pjby.t)(`${s} is a symbolic link; ignoring it`, { level: "warn" }), { state: "unusable", readFailed: false };
    return (0, import_chunk_w578pjby.t)(`${s} could not be read: ${(0, import_chunk_jv7av99m.d)(y)}`), { state: "unusable", readFailed: !(y instanceof SyntaxError) };
  }
}
var F = "plugin-directory-bindings.json", N = 1, M = 1048576, Umr = 4096, se = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ schemaVersion: (0, import_chunk_adx6804h.v)(N), bindings: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.c)({ repositoryKey: (0, import_chunk_adx6804h.n)().min(1).max(Umr) }).optional().catch(void 0)) }));
function kC(e) {
  let i = e.split("@");
  return i.length === 2 && i[1] === import_chunk_xcgcdx61.qn;
}
function dN(e, i) {
  if (!kC(i)) return [];
  let r = [...e].filter((o) => kC(o) && (0, import_chunk_wj4me9k5.cko)(o, i));
  return [...r.filter((o) => o === i), ...r.filter((o) => o !== i)];
}
var C = /* @__PURE__ */ new WeakSet();
function _We(e) {
  return C.has(e);
}
async function _De() {
  let e = await z();
  if (e.readFailed) C.add(e.bindings);
  return e.bindings;
}
async function Plo(e, i, r) {
  if (!kC(e)) return;
  if (i !== void 0 && !G()) return;
  await E((o) => {
    if (i === void 0) for (let s of dN(o.keys(), e)) o.delete(s);
    else if (!(r?.keepExisting === true && dN(o.keys(), e).length > 0)) o.set(e, i);
  });
}
async function Bmr(e, i) {
  if (!kC(e)) return "none";
  if (!i) {
    let r = await E(() => {
    });
    if (_We(r)) return "unreadable";
    return dN(r.keys(), e).length > 0 ? "held" : "none";
  }
  return await Plo(e, void 0), "none";
}
async function M1t(e, i) {
  return H1t([[e, i ?? []]]);
}
async function H1t(e) {
  {
    let i = false, r = /* @__PURE__ */ new Map();
    for (let [o, s] of e) {
      if (!kC(o)) continue;
      i = true;
      let y = s.find((g) => g.directoryRepositoryKey !== void 0)?.directoryRepositoryKey;
      if (y !== void 0) r.set(o, y);
    }
    if (!i) return /* @__PURE__ */ new Map();
    if (r.size === 0 || !G()) return _De();
    return E((o) => {
      for (let [s, y] of r) if (dN(o.keys(), s).length === 0) o.set(s, y);
    });
  }
  return /* @__PURE__ */ new Map();
}
function b0n(e) {
  return Boolean(e.directoryRepositoryKey);
}
async function Ern(e, i) {
  {
    if (!kC(e)) return "not-directory";
    let r = (i ?? []).find((g) => g.directoryRepositoryKey)?.directoryRepositoryKey, o = (g) => g.has(e) || dN(g.keys(), e).some((h) => g.get(h) === r);
    await E((g) => {
      if (r !== void 0 && !o(g)) g.set(e, r);
    });
    let s = await E(() => {
    }), y = !_We(s);
    if (y && (r === void 0 ? dN(s.keys(), e).length > 0 : o(s))) return "held";
    if (r === void 0) return "no-key";
    return y && e.length > 1024 ? "cannot-hold" : "not-persisted";
  }
  return "not-directory";
}
async function Xls(e, i, r) {
  if (!kC(e)) return true;
  if (!r.some(b0n)) return await Ern(e, i) !== "not-persisted";
  return await M1t(e, i), true;
}
function G() {
  return (0, import_chunk_72w4k1fr.Cx)() && (0, import_chunk_wj4me9k5.uv)() === null;
}
async function z() {
  let e = /* @__PURE__ */ new Map();
  {
    let i = await I1t(F, M, "bindings file"), r = i.state === "read" ? se().safeParse(i.json) : void 0;
    if (r?.success) {
      for (let [o, s] of Object.entries(r.data.bindings)) if (s !== void 0 && o.length <= 1024) e.set(o, s.repositoryKey);
    }
    return { bindings: e, readFailed: i.state === "unusable" || i.state === "read" && r?.success !== true };
  }
  return { bindings: e, readFailed: false };
}
async function E(e) {
  let i = /* @__PURE__ */ new Map();
  {
    let r = (0, import_chunk_54j6k3fn.jO)(), o = r.bindingsWriteTail, { promise: s, resolve: y } = Promise.withResolvers();
    r.bindingsWriteTail = s, await o;
    try {
      let g = await z();
      if (g.readFailed) C.add(i);
      for (let [R, b] of g.bindings) i.set(R, b);
      e(i);
      for (let [R, b] of [...i]) if (R.length > 1024 || b === "") i.delete(R);
      let h = i.size !== g.bindings.size || [...i].some(([R, b]) => g.bindings.get(R) !== b);
      if (h && g.readFailed) (0, import_chunk_w578pjby.t)("Plugin directory bindings file could not be used; leaving it as it is", { level: "warn" });
      else if (h && (0, import_chunk_f9x2f6cx.Y)()) (0, import_chunk_w578pjby.t)("Plugin directory bindings file not written: this session saves nothing to disk");
      else if (h) {
        let R = (0, import_chunk_w578pjby._)({ schemaVersion: N, bindings: Object.fromEntries([...i].map(([b, k]) => [b, { repositoryKey: k }])) });
        if (Buffer.byteLength(R) > M) (0, import_chunk_w578pjby.t)("Plugin directory bindings file would grow past 1 MB, the most that is read back; leaving it as it is", { level: "warn" });
        else await (0, import_chunk_w578pjby.le)().mkdir((0, import_chunk_wj4me9k5.Mc)()), await (0, import_chunk_q7qjcthc.yr)((0, import_path.join)((0, import_chunk_wj4me9k5.Mc)(), F), R, 384);
      }
    } catch (g) {
      (0, import_chunk_w578pjby.t)(`Failed to update plugin directory bindings file: ${(0, import_chunk_jv7av99m.d)(g)}`, { level: "warn" });
    } finally {
      y();
    }
  }
  return i;
}
