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
var chunk_zzrn5zap_exports = {};
__export(chunk_zzrn5zap_exports, {
  Dze: () => Dze,
  Er: () => Er,
  LNl: () => LNl,
  NNl: () => NNl,
  WIs: () => WIs,
  aXi: () => aXi,
  bs: () => bs,
  cXi: () => cXi,
  dXi: () => dXi,
  eut: () => eut,
  fXi: () => fXi,
  jIs: () => jIs,
  lXi: () => lXi,
  mRt: () => mRt,
  uXi: () => uXi
});
module.exports = __toCommonJS(chunk_zzrn5zap_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_9m1fff32 = require("/$bunfs/root/chunk-9m1fff32.js");
var import_chunk_0bfd61k9 = require("/$bunfs/root/chunk-0bfd61k9.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");
var import_async_hooks = require("async_hooks");
var import_path2 = require("path");
var import_promises = require("fs/promises");
var import_path3 = require("path");
var bs = Symbol("secureStorage.READ_FAILED");
var H = ".storage-write", aXi = ".storage-write.lock";
var b = new import_async_hooks.AsyncLocalStorage(), K = Promise.resolve();
async function mRt(e) {
  if (b.getStore()) return e();
  let r = K, n;
  K = new Promise((s) => {
    n = s;
  });
  try {
    if (await r, (0, import_chunk_f9x2f6cx.Y)()) return await b.run(true, e);
    let s = (0, import_chunk_hazyxdac.KX)();
    await (0, import_chunk_w578pjby.le)().mkdir(s);
    let i = (0, import_path2.join)(s, H), a = await (0, import_chunk_2yx6c1y2.Rc)(i, { realpath: false, retries: { retries: 10, minTimeout: 100, maxTimeout: 1e3 }, stale: 15e3, onCompromised: (o) => (0, import_chunk_w578pjby.t)(`[secureStorage] write lock compromised: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" }) });
    try {
      return await b.run(true, e);
    } finally {
      await a().catch((o) => (0, import_chunk_w578pjby.t)(`[secureStorage] write lock release failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" }));
    }
  } finally {
    n();
  }
}
async function LNl(e) {
  return b.run(true, e);
}
function h(e, r, n) {
  return mRt(async () => {
    e.invalidateCache?.({ keepForFailedRead: true });
    let s = await (e.readAsyncStrict?.(n, { inaccessibleAs: "failureIfTransient" }) ?? e.readAsync(n));
    if (s === bs) return (0, import_chunk_cqa9hrgx.l)("secure_storage_credentials_write", "read_failed_skip_write"), { success: false, transient: true };
    let i = s ?? {}, a = r(i);
    return a === i ? { success: true } : await e.update(a, n);
  });
}
var W = (0, import_chunk_t57w17k7.de)({ tried: false }, (e) => {
  e.tried = false;
}), fe = 13e3;
function E(e) {
  return Date.now() - e > fe;
}
function G(e) {
  return e.readAsyncStrict?.(void 0, { inaccessibleAs: "failureIfTransient" }) ?? e.readAsync();
}
function X(e) {
  if (e.success || e.transient) return e;
  return e.exitCode === void 0 ? { ...e, transient: true } : void 0;
}
var z = Symbol("secureStorage.fallbackLegs");
function V(e, r, { proveWrites: n = false } = {}) {
  let s = r.osGuarded === true ? (a) => a : dXi, i = { name: `${e.name}-with-${r.name}-fallback`, [z]: [e, r], osGuarded: e.osGuarded === true, read(a) {
    let o = e.read(a);
    if (o !== null && o !== void 0) return o;
    return s(r.read(a)) || {};
  }, async readAsync(a) {
    let o = await e.readAsync();
    if (o !== null && o !== void 0) return o;
    return s(await r.readAsync(a)) || {};
  }, async readAsyncStrict(a, o) {
    let g = await (e.readAsyncStrict?.(void 0, o) ?? e.readAsync());
    if (g === bs) return bs;
    if (g !== null || o?.inaccessibleAs === "failure") return g;
    let c = await (r.readAsyncStrict?.(a, o) ?? r.readAsync(a));
    return c === bs ? c : s(c) || {};
  }, invalidateCache(a) {
    e.invalidateCache?.(a), r.invalidateCache?.(a);
  }, mutate(a, o) {
    return h(i, a, o);
  }, async update(a, o) {
    let g = await e.readAsync(), c = await e.update(a);
    if (c.success) {
      if (g === null) await r.delete(o);
      return (0, import_chunk_cqa9hrgx.u)("secure_storage_credentials_write"), c;
    }
    if (c.transient) return (0, import_chunk_cqa9hrgx.l)("secure_storage_credentials_write", c.keychainLocked ? "keychain_locked_skip_fallback" : "primary_transient_skip_fallback"), c;
    let p = await r.update(a, o);
    if (p.success) {
      if (g !== null && !await e.delete()) return (0, import_chunk_cqa9hrgx.m)("secure_storage_credentials_write", "plaintext_fallback_primary_not_cleared", c.exitCode === void 0 ? void 0 : { primary_write_exit_code: c.exitCode }), { success: false, transient: true, fallbackWritten: true };
      return e.invalidateCache?.(), (0, import_chunk_cqa9hrgx.l)("secure_storage_credentials_write", "plaintext_fallback_used"), { success: true, warning: p.warning };
    }
    return (0, import_chunk_cqa9hrgx.m)("secure_storage_credentials_write", "primary_and_fallback_failed"), { success: false };
  }, async delete(a) {
    let o = await r.readAsync(a) !== null, [g, c] = await Promise.all([e.delete(), r.delete(a)]);
    return g || o && c;
  }, ...n && { proveWrites(a) {
    return mRt(async () => {
      let o = Date.now(), g = await G(e);
      if (g === bs) return { success: false, transient: true };
      if (g === null) return { success: true };
      let c = await e.probeWrite?.(), p = c && X(c);
      if (p) return p;
      let D = await G(e);
      if (D === bs || E(o)) return { success: false, transient: true };
      if (D === null) return { success: true };
      let S = await e.update(D);
      if (S.success) (0, import_chunk_cqa9hrgx.l)("secure_storage_credentials_write", "write_probe_refused_alone", c?.exitCode === void 0 ? void 0 : { primary_write_exit_code: c.exitCode });
      let U = X(S);
      if (U) return U;
      if (W.tried) return S;
      let F = await (r.readAsyncStrict?.(a, { unreadableFileAs: "failure" }) ?? r.readAsync(a));
      if (E(o)) return { ...S, transient: true };
      if (F === bs || !(await r.update(D, a)).success) return S;
      if (E(o)) return { ...S, transient: true };
      let B = await (e.tryDelete?.() ?? "cut_short");
      if (B === "gone") return e.invalidateCache?.(), (0, import_chunk_cqa9hrgx.l)("secure_storage_credentials_write", "plaintext_fallback_used"), { success: true };
      if (W.tried = true, B === "cut_short" || E(o)) return { ...S, transient: true };
      if (!(F === null ? await r.delete(a) : (await r.update(F, a)).success)) (0, import_chunk_cqa9hrgx.m)("secure_storage_credentials_write", "plaintext_proof_undo_failed");
      return S;
    });
  } } };
  return i;
}
function lXi(e) {
  return e[z];
}
function dXi(e) {
  let r = e?.slackTag;
  if (typeof r !== "object" || r === null || !("lastBinding" in r)) return e;
  let { lastBinding: n, ...s } = r;
  return { ...e, slackTag: s };
}
var f = 2e3, Se = 4032, I = 44, Q = 36, pe = "Claude Code-write-check", me = Buffer.from("not a secret", "utf-8").toString("hex"), he = /^keychain: "(\/[^"\\\n]+)"(?:\n|$)/, P = { name: "keychain", osGuarded: true, read() {
  let e = (0, import_chunk_hazyxdac.h8)(), r = e.cache;
  if (Date.now() - r.cachedAt < import_chunk_hazyxdac.zhn) return r.data;
  let n = e.lastReadFailure;
  if (Date.now() < e.blockingReadRetryAt || n !== null && Date.now() - n < import_chunk_hazyxdac.hXi) return r.data;
  let s, i = null;
  try {
    let g = (0, import_chunk_hazyxdac.m8)(import_chunk_hazyxdac.Lze), c = (0, import_chunk_hazyxdac.J1)();
    i = (0, import_chunk_7fsmgfxx.pft)(`security find-generic-password -a "${c}" -w -s "${g}"`, { timeout: f, onExit: (p) => {
      s = p;
    } });
  } catch (g) {
  }
  if (i) e.keychainHoldsItem = true;
  let a = Z(s, i);
  if (a.said === "no such item") e.keychainHoldsItem = false;
  let o = L(e, a, r);
  if (e.cache = o, a.said !== "item" && o.data !== null) return (0, import_chunk_w578pjby.t)("[keychain] read failed; serving stale cache", { level: "warn" }), o.data;
  if (a.said === "nothing") return (0, import_chunk_w578pjby.t)(`[keychain] read failed (exit code ${s ?? "none"}); not caching a null`, { level: "warn" }), e.lastReadFailure = Date.now(), e.blockingReadRetryAt = Date.now() + import_chunk_hazyxdac.zhn, null;
  return e.lastReadFailure = null, o.data;
}, async readAsync() {
  let e = (0, import_chunk_hazyxdac.h8)(), r = e.cache;
  if (Date.now() - r.cachedAt < import_chunk_hazyxdac.zhn) return r.data;
  if (e.readInFlight) return e.readInFlight;
  let n = e.lastReadFailure;
  if (n !== null && Date.now() - n < import_chunk_hazyxdac.hXi) return null;
  let s = e.generation, i = q(e).then((a) => {
    let o = L(e, a, e.cache);
    if (s !== e.generation) return o.data;
    if (e.readInFlight = null, e.cache = o, a.said === "nothing") (0, import_chunk_w578pjby.t)("[keychain] readAsync failed; not caching a null", { level: "warn" }), e.lastReadFailure = Date.now();
    else e.lastReadFailure = null;
    return o.data;
  });
  return e.readInFlight = i, i;
}, async readAsyncStrict(e, r) {
  let n = (0, import_chunk_hazyxdac.h8)(), s = n.generation, i = await q(n), a = null;
  switch (i.said) {
    case "item":
      a = i.data;
      break;
    case "nothing":
      a = bs;
      break;
    case "unparsable":
      if (r?.unparsableEntryAs === "failure") a = bs;
      break;
    case "locked":
      if (r?.inaccessibleAs === "failure" || r?.inaccessibleAs === "failureIfTransient" && n.keychainHoldsItem) a = bs;
      break;
    case "no such item":
    case "empty":
      break;
  }
  if (a !== bs && s === n.generation) n.cache = L(n, i, n.cache), n.lastReadFailure = null;
  return a;
}, invalidateCache(e) {
  if (e?.keepForFailedRead) (0, import_chunk_hazyxdac.wFe)();
  else (0, import_chunk_hazyxdac.GPe)();
}, mutate(e) {
  return h(P, e);
}, async update(e) {
  let r = (0, import_chunk_hazyxdac.h8)();
  (0, import_chunk_hazyxdac.wFe)();
  try {
    let n = (0, import_chunk_hazyxdac.m8)(import_chunk_hazyxdac.Lze), s = (0, import_chunk_hazyxdac.J1)(), i = (0, import_chunk_w578pjby._)(e), a = Buffer.from(i, "utf-8").toString("hex"), o = `add-generic-password -U -a "${s}" -s "${n}" -X "${a}"
`, g;
    if (o.length <= Se) g = await (0, import_chunk_9zdrdv25.gS)("security", ["-i"], { input: o, stdio: ["pipe", "pipe", "pipe"], reject: false, timeout: f });
    else (0, import_chunk_w578pjby.t)(`Keychain payload (${i.length}B JSON) exceeds security -i stdin limit; using argv`, { level: "warn" }), g = await (0, import_chunk_9zdrdv25.gS)("security", ["add-generic-password", "-U", "-a", s, "-s", n, "-X", a], { stdio: ["ignore", "pipe", "pipe"], reject: false, timeout: f });
    if (g.exitCode !== 0) {
      if (g.timedOut || g.signal !== void 0) {
        let c = r.cache.data === null;
        (0, import_chunk_hazyxdac.wFe)(c ? null : e);
      }
      return J(r, g);
    }
    return r.keychainHoldsItem = true, r.cache = { data: e, cachedAt: Date.now() }, r.generation++, r.readInFlight = null, { success: true };
  } catch (n) {
    return { success: false };
  }
}, async probeWrite() {
  try {
    let e = (0, import_chunk_hazyxdac.J1)(), { stdout: r, exitCode: n } = await (0, import_chunk_7fsmgfxx.kt)("security", ["find-generic-password", "-a", e, "-s", (0, import_chunk_hazyxdac.m8)(import_chunk_hazyxdac.Lze)], { useCwd: false, timeout: f }), s = he.exec(r)?.[1];
    if (n !== 0 || s === void 0) return { success: false, transient: n === I, exitCode: n };
    let i = await (0, import_chunk_9zdrdv25.gS)("security", ["-i"], { input: `add-generic-password -U -a "${e}" -s "${pe}" -X "${me}" "${s}"
`, stdio: ["pipe", "pipe", "pipe"], reject: false, timeout: f });
    return i.exitCode === 0 ? { success: true } : J((0, import_chunk_hazyxdac.h8)(), i);
  } catch (e) {
    return { success: false };
  }
}, async delete() {
  return await P.tryDelete() === "gone";
}, async tryDelete() {
  let e = (0, import_chunk_hazyxdac.h8)();
  (0, import_chunk_hazyxdac.GPe)();
  try {
    let r = (0, import_chunk_hazyxdac.m8)(import_chunk_hazyxdac.Lze), n = (0, import_chunk_hazyxdac.J1)(), { code: s, exitCode: i } = await (0, import_chunk_7fsmgfxx.kt)("security", ["delete-generic-password", "-a", n, "-s", r], { timeout: f, useCwd: false }), a = s === 0 || s === I;
    if (a) e.keychainHoldsItem = false;
    if (e.generation++, e.readInFlight = null, a) return "gone";
    return i === void 0 ? "cut_short" : "refused";
  } catch (r) {
    return "refused";
  }
} };
function J({ keychainHoldsItem: e }, { exitCode: r, timedOut: n }) {
  if (r === Q && e) return { success: false, transient: true, keychainLocked: true, exitCode: r };
  return { success: false, transient: n, exitCode: r };
}
function Z(e, r) {
  if (r && (e === 0 || e === void 0)) {
    try {
      let n = (0, import_chunk_w578pjby.te)(r.trim());
      if (n !== null) return { said: "item", data: n };
    } catch {
    }
    return { said: e === 0 ? "unparsable" : "nothing" };
  }
  switch (e) {
    case 0:
      return { said: "empty" };
    case I:
      return { said: "no such item" };
    case Q:
      return { said: "locked" };
    default:
      return { said: "nothing" };
  }
}
function L({ keychainHoldsItem: e }, r, n) {
  if (r.said === "item") return { data: r.data, cachedAt: Date.now() };
  let s = r.said === "nothing" || r.said === "locked" && e;
  if (n.data !== null && (!n.expired || s)) return { ...n, cachedAt: Date.now() };
  return r.said === "nothing" ? n : { data: null, cachedAt: Date.now() };
}
async function q(e) {
  let r = e.generation;
  try {
    let n = (0, import_chunk_hazyxdac.m8)(import_chunk_hazyxdac.Lze), s = (0, import_chunk_hazyxdac.J1)(), { stdout: i, code: a } = await (0, import_chunk_7fsmgfxx.kt)("security", ["find-generic-password", "-a", s, "-w", "-s", n], { useCwd: false, preserveOutputOnError: false, timeout: f }), o = Z(a, i);
    if (o.said === "item" || o.said === "unparsable") (0, import_chunk_hazyxdac.IMr)(e, true, r);
    else if (o.said === "no such item") (0, import_chunk_hazyxdac.IMr)(e, false, r);
    return o;
  } catch (n) {
    return { said: "unparsable" };
  }
}
async function NNl() {
  try {
    let { code: e } = await (0, import_chunk_7fsmgfxx.kt)("security", ["find-generic-password", "-a", (0, import_chunk_hazyxdac.J1)(), "-w", "-s", (0, import_chunk_hazyxdac.m8)()], { useCwd: false, preserveOutputOnError: false, timeout: f });
    return e === I;
  } catch {
    return false;
  }
}
var R;
function cXi() {
  if (R !== void 0) return R;
  return R = (0, import_chunk_9zdrdv25.gS)("security", ["show-keychain-info"], { reject: false, stdio: ["ignore", "pipe", "pipe"], timeout: f }).then((e) => e.exitCode === 36).catch(() => false), R;
}
function C() {
  let e = (0, import_chunk_hazyxdac.KX)(), r = ".credentials.json";
  return { storageDir: e, storagePath: (0, import_path3.join)(e, ".credentials.json") };
}
function k() {
  return (0, import_chunk_f9x2f6cx.Y)() ? null : C().storagePath;
}
var WIs = "Warning: Storing credentials in plaintext.";
function _e(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return null;
  return bs;
}
function Ae(e, r) {
  return e === "ENOENT" ? null : bs;
}
var Ce = { async read() {
  let { storagePath: e } = C();
  try {
    let r = await (0, import_chunk_w578pjby.le)().readFile(e, { encoding: "utf8" });
    return (0, import_chunk_w578pjby.te)(r);
  } catch {
    return null;
  }
}, async readStrict(e) {
  let { storagePath: r } = C(), n;
  try {
    n = await (0, import_chunk_w578pjby.le)().readFile(r, { encoding: "utf8" });
  } catch (s) {
    return (e ? Ae : _e)((0, import_chunk_jv7av99m.w)(s), "darwin");
  }
  try {
    return (0, import_chunk_w578pjby.te)(n);
  } catch {
    if (e) return bs;
    return null;
  }
}, async write(e) {
  try {
    let { storageDir: r, storagePath: n } = C();
    return await (0, import_chunk_w578pjby.le)().mkdir(r), await (0, import_chunk_q7qjcthc.FM)(n, (0, import_chunk_w578pjby._)(e), { mode: 384, flush: true, flushForgivesEbadf: true }), await (0, import_promises.chmod)(n, 384), { success: true, warning: WIs };
  } catch (r) {
    return await (0, import_chunk_0bfd61k9.xIo)(r), { success: false };
  } finally {
    if ((0, import_chunk_m15w38ag.ne)()) eut();
  }
}, async remove() {
  let { storagePath: e } = C();
  try {
    return await (0, import_chunk_w578pjby.le)().unlink(e), true;
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) === "ENOENT") return true;
    return false;
  } finally {
    if ((0, import_chunk_m15w38ag.ne)()) eut();
  }
} }, ke = { read: async () => null, readStrict: async () => null, write: async () => ({ success: false }), remove: async () => true };
function De(e) {
  switch (e.state) {
    case "present":
      return e.data;
    case "absent":
    case "corrupt":
      return null;
    case "refused-symlink":
    case "read-failed":
      return bs;
    default: {
      let r = e;
      return bs;
    }
  }
}
function be(e) {
  return { async read() {
    let r = k(), n = A(), s = n.generation, i = await T(e.readCredentials(), n);
    return ee(n, i, r, s), i.state === "present" ? i.data : null;
  }, async readStrict(r) {
    let n = k(), s = A(), i = s.generation, a = await T(r ? e.readCredentials() : e.readCredentialsStrict(), s);
    if (ee(s, a, n, i), r) return a.state === "present" ? a.data : a.state === "absent" ? null : bs;
    return De(a);
  }, async write(r) {
    let n = k(), s = A(), i = s.generation, a = await T(e.writeCredentials(r), s);
    if (a.state === "written" && i === s.generation) O(s, n, (0, import_chunk_w578pjby._)(r));
    else y(s);
    return a.state === "written" ? { success: true, warning: WIs } : { success: false };
  }, async remove() {
    let r = k(), n = A(), s = n.generation, i = await T(e.deleteCredentials(), n);
    if (i.state === "deleted" && s === n.generation) O(n, r, null);
    else y(n);
    return i.state === "deleted";
  } };
}
async function T(e, r) {
  try {
    return await e;
  } catch (n) {
    throw y(r), n;
  }
}
class re {
  copy = void 0;
  generation = 0;
}
var Ee = new import_chunk_2904xtvq.j(() => new re());
function A() {
  return Ee.of((0, import_chunk_f9x2f6cx.N)().host);
}
function O(e, r, n) {
  e.copy = { storagePath: r, text: n }, e.generation++;
}
function ee(e, r, n, s) {
  if (s !== e.generation) {
    y(e);
    return;
  }
  switch (r.state) {
    case "present":
      O(e, n, (0, import_chunk_w578pjby._)(r.data));
      return;
    case "absent":
    case "corrupt":
    case "refused-symlink":
      O(e, n, null);
      return;
    case "read-failed":
      y(e);
      return;
    default: {
      let i = r;
      y(e);
    }
  }
}
function y(e) {
  e.copy = void 0, e.generation++;
}
function eut() {
  y(A());
}
function v(e) {
  return (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? be(e) : (0, import_chunk_f9x2f6cx.Y)() ? ke : Ce;
}
var x = { name: "plaintext", osGuarded: false, read(e) {
  let r = k();
  try {
    let n = (0, import_chunk_m15w38ag.ne)() && e?.fromStoreCopy === true ? A().copy : void 0;
    if (n !== void 0 && n.storagePath === r) {
      if (n.text === null) return null;
      return JSON.parse(n.text);
    }
    if (r === null) return null;
    let s = (0, import_chunk_w578pjby.le)().readFileSync(r, { encoding: "utf8" });
    return (0, import_chunk_w578pjby.te)(s);
  } catch {
    return null;
  }
}, invalidateCache() {
  eut();
}, readAsync(e) {
  return v(e).read();
}, readAsyncStrict(e, r) {
  return v(e).readStrict(r?.unreadableFileAs === "failure");
}, mutate(e, r) {
  return h(x, e, r);
}, update(e, r) {
  return v(r).write(e);
}, delete(e) {
  return v(e).remove();
} };
class ie {
  memo;
  handedIn;
  prime(e, r) {
    if (this.memo !== void 0) return;
    this.handedIn = { enabled: e, ...r() };
  }
  resolve(e, r) {
    if (this.memo !== void 0) return this.memo;
    try {
      let n = e(), s = this.handedIn;
      if (s !== void 0 && s.legacyPath === n.legacyPath && s.configPath === n.configPath) this.memo = s.enabled;
      else this.memo = r(n);
    } catch {
      this.memo = false;
    }
    return this.memo;
  }
  reset() {
    this.memo = void 0, this.handedIn = void 0;
  }
}
var Ie = new import_chunk_2904xtvq.j(() => new ie());
function oe() {
  return Ie.of((0, import_chunk_f9x2f6cx.N)().host);
}
function ce() {
  return { legacyPath: (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), ".config.json"), configPath: (0, import_path.join)(process.env.CLAUDE_CONFIG_DIR || (0, import_os.homedir)(), `.claude${(0, import_chunk_ephf358x.PI)()}.json`) };
}
function uXi() {
  if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") return true;
  return oe().resolve(ce, Pe);
}
function Pe({ legacyPath: e, configPath: r }) {
  let n = "";
  try {
    n = (0, import_fs.readFileSync)(e, "utf8");
  } catch (i) {
    let a = (0, import_chunk_jv7av99m.w)(i);
    if (a !== "ENOENT" && a !== "ENOTDIR" && a !== "EISDIR" && a !== "ELOOP") throw i;
  }
  if (n === "") n = (0, import_fs.readFileSync)(r, "utf8");
  let s = JSON.parse(n);
  return (0, import_chunk_9m1fff32.vz)(s)?.tengu_windows_credman === true;
}
function fXi(e) {
  oe().prime(e, ce);
}
var M;
function Dze() {
  return "keychain";
}
function Er() {
  if (M) return M;
  return V(P, x, { proveWrites: true });
}
function jIs() {
  if (M) return [];
  return [];
}
