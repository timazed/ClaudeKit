const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_4zhm4v7d_exports = {};
__export(chunk_4zhm4v7d_exports, {
  GUs: () => GUs,
  Rma: () => Rma,
  o2l: () => o2l,
  r1o: () => r1o,
  r2l: () => r2l
});
module.exports = __toCommonJS(chunk_4zhm4v7d_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_sgar51s8 = require("/$bunfs/root/chunk-sgar51s8.js");
var import_chunk_ez1sysdb = require("/$bunfs/root/chunk-ez1sysdb.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_ar6xc1fx = require("/$bunfs/root/chunk-ar6xc1fx.js");
var import_chunk_7kf5v011 = require("/$bunfs/root/chunk-7kf5v011.js");
var import_chunk_gqy9qzxq = require("/$bunfs/root/chunk-gqy9qzxq.js");
var import_chunk_zemejbd8 = require("/$bunfs/root/chunk-zemejbd8.js");
var import_chunk_h31qgf9a = require("/$bunfs/root/chunk-h31qgf9a.js");
var import_chunk_txxyydb4 = require("/$bunfs/root/chunk-txxyydb4.js");
var import_chunk_78wqjv8b = require("/$bunfs/root/chunk-78wqjv8b.js");
var import_chunk_h54gmnkr = require("/$bunfs/root/chunk-h54gmnkr.js");
var import_chunk_d2azvnb2 = require("/$bunfs/root/chunk-d2azvnb2.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var N = (0, import_path2.join)(import_path2.sep, "ClaudeCode.app", "Contents", "MacOS", "claude");
async function T() {
  let r = (0, import_chunk_sgar51s8.sye)(process.execPath) !== void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BG_STABLE_PATH && (0, import_chunk_5e3gtsn9.QH)("CLAUDE_CODE_DISABLE_BG_STABLE_PATH", (0, import_chunk_d2azvnb2.eTt)("CLAUDE_CODE_DISABLE_BG_STABLE_PATH") ?? "");
  if ((0, import_chunk_cg8dqz0a.x)() !== "macos" || !r || process.getuid?.() === 0) return;
  let e = (0, import_chunk_78wqjv8b.tzs)(), c = (0, import_path2.join)(e, "Contents"), f = (0, import_path2.join)(c, "MacOS");
  try {
    await (0, import_promises2.lstat)(e);
    let o = await (0, import_chunk_7fsmgfxx.kt)("/bin/ps", ["-xww", "-o", "comm="], { timeout: 5e3, useCwd: false });
    if (o.code !== 0 || o.stdout.trim() === "") {
      (0, import_chunk_w578pjby.t)(`Keeping ${e}: ps could not list your processes`), (0, import_chunk_cqa9hrgx.l)("bg_stable_bundle_cleanup", "ps_failed");
      return;
    }
    if (o.stdout.split(`
`).some((n) => n.trimEnd().endsWith(N))) {
      (0, import_chunk_w578pjby.t)(`Keeping ${e}: a process still runs from it`);
      return;
    }
    for (let n of [(0, import_path2.dirname)(e), e, c, f]) {
      let a = await (0, import_promises2.lstat)(n);
      if (!a.isDirectory() || !(0, import_chunk_sgar51s8.I0t)(a)) {
        (0, import_chunk_w578pjby.t)(`Not removing ${e}: ${n} must be a real folder that you own and only you can write`), (0, import_chunk_cqa9hrgx.l)("bg_stable_bundle_cleanup", "refused");
        return;
      }
    }
    for (let n of await (0, import_promises2.readdir)(f, { withFileTypes: true })) {
      let { name: a } = n;
      if (!n.isDirectory() && (a === "claude" || a.startsWith("claude."))) await (0, import_promises2.rm)((0, import_path2.join)(f, a), { force: true });
    }
    await (0, import_promises2.rm)((0, import_path2.join)(c, "Info.plist"), { force: true });
    for (let n of [f, c, e]) await (0, import_promises2.rmdir)(n);
    (0, import_chunk_w578pjby.t)(`Removed ${e}, which this client does not use`), (0, import_chunk_cqa9hrgx.u)("bg_stable_bundle_cleanup");
  } catch (o) {
    if ((0, import_chunk_jv7av99m.kn)(o)) return;
    if ((0, import_chunk_jv7av99m.pa)(o)) (0, import_chunk_w578pjby.t)(`Could not remove ${e}: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
    (0, import_chunk_cqa9hrgx.l)("bg_stable_bundle_cleanup", (0, import_chunk_jv7av99m.w)(o) === "ENOTEMPTY" ? "not_empty" : "other");
  }
}
var b = "claude-test@builtin", C = "cc-plugin-claude-test@builtin";
async function O(r) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return "absent";
  let e, c;
  try {
    e = S(b), c = S(C);
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`Old claude-test plugin data folder: could not find it (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" }), "failed";
  }
  let f = await A(e, b, "whole", r);
  return await A(c, C, "if_empty", r), f;
}
function S(r) {
  return (0, import_path3.resolve)((0, import_chunk_f9x2f6cx.Te)(), (0, import_chunk_wj4me9k5.aS)(r));
}
async function A(r, e, c, f) {
  try {
    let o = await H(r, e, c, f);
    if (o !== "absent") (0, import_chunk_w578pjby.t)(`Old claude-test plugin data folder ${r}: ${V(o)}`);
    return o;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`Old claude-test plugin data folder ${r}: could not remove it (${(0, import_chunk_jv7av99m.d)(o)}); the next session tries again`, { level: "warn" }), "failed";
  }
}
async function H(r, e, c, f) {
  let o;
  try {
    o = await (0, import_promises3.lstat)(r);
  } catch (_) {
    return G(_) ? "absent" : "failed";
  }
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_CACHE_DIR) return "left_relocated";
  let n = await (0, import_promises3.lstat)((0, import_path3.dirname)(r));
  if (!o.isDirectory() || !n.isDirectory()) return "left_not_directory";
  if (process.getuid?.() === void 0) return "left_owner_unknown";
  if (!E(o) || !E(n)) return "left_shared";
  let a = await (0, import_chunk_bzyb60p0.Sf)(f);
  if ((0, import_chunk_bzyb60p0.rtn)(e, a)) return "left_in_use";
  if (S(e) !== r) return "left_moved";
  let [m, p] = await Promise.all([(0, import_promises3.lstat)(r), (0, import_promises3.lstat)((0, import_path3.dirname)(r))]);
  if (!m.isDirectory() || !p.isDirectory() || m.dev !== o.dev || m.ino !== o.ino || p.dev !== n.dev || p.ino !== n.ino || !E(m) || !E(p)) return "left_changed";
  if (c === "if_empty") {
    try {
      await (0, import_promises3.rmdir)(r);
    } catch (_) {
      let v = (0, import_chunk_jv7av99m.w)(_);
      if (v === "ENOTEMPTY" || v === "EEXIST") return "left_not_empty";
      throw _;
    }
    return "removed";
  }
  return await (0, import_chunk_c203g5kd.Za)(r), "removed";
}
function E(r) {
  let e = process.getuid?.();
  if (e === void 0) return false;
  if (r.uid !== e || (r.mode & 514) !== 0) return false;
  return (r.mode & 16) === 0 || r.gid === e && r.gid === process.getgid?.();
}
function G(r) {
  let e = (0, import_chunk_jv7av99m.w)(r);
  return e === "ENOENT" || e === "ENOTDIR";
}
function V(r) {
  switch (r) {
    case "removed":
      return "removed";
    case "left_not_directory":
      return "left in place, it or the folder above it is a link or not a folder";
    case "left_shared":
      return "left in place, it or the folder above it is not yours alone (owner, group or mode)";
    case "left_owner_unknown":
      return "left in place, the user id could not be read";
    case "left_changed":
      return "left in place, it or the folder above it changed while it was checked; the next session tries again";
    case "left_in_use":
      return "left in place, an installed plugin uses it or the install list could not be read";
    case "left_moved":
      return "left in place, the plugins folder moved while it was checked; the next session tries again";
    case "left_relocated":
      return "left in place, because it is in the plugins folder that CLAUDE_CODE_PLUGIN_CACHE_DIR names, and Claude Code does not remove it from there; delete it yourself if you no longer need it";
    case "left_not_empty":
      return "left in place, it is not empty";
    case "failed":
      return "could not read it; the next session tries again";
    case "absent":
      return "nothing to remove";
  }
}
var L = 864e5, r1o = 6e5, r2l = 5e3, Rma = 36e5;
async function o2l(r) {
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0) {
    let e = await r.statMeta(import_chunk_hkvzj051.at.state("last-cleanup"));
    return e.ok && Date.now() - e.value.mtimeMs < L;
  }
  try {
    let e = await (0, import_promises.stat)((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), ".last-cleanup"));
    return Date.now() - e.mtimeMs < L;
  } catch {
    return false;
  }
}
async function K(r) {
  try {
    if ((await (0, import_chunk_ez1sysdb.Ijr)(r)).length > 0) {
      let { sweepScheduledDeletes: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kgtta5gt.js")));
      await e(r);
    }
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[housekeeping] removed scheduled tasks not cleaned up, will try again: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
  }
}
async function GUs(r, e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  if (!r.backgroundHousekeeping.claim()) return;
  if ((0, import_chunk_ar6xc1fx.$Ks)(r), (0, import_chunk_7kf5v011.lva)(r), (0, import_chunk_k449cc64.ox)()) (0, import_chunk_h54gmnkr.YKr)(e);
  if ((0, import_chunk_865at33z.wy)() && (0, import_chunk_2yx6c1y2._e)("localSettings") !== null && !(0, import_chunk_865at33z.T6t)()) (0, import_chunk_2yx6c1y2.bKn)();
  if ((0, import_chunk_txxyydb4.pga)(e), O(e).catch(() => {
  }), (0, import_chunk_f9x2f6cx.Cl)()) (0, import_chunk_h31qgf9a.xma)(e), (0, import_chunk_bzyb60p0.ars)(e), setInterval(import_chunk_bzyb60p0.ars, Rma, e).unref();
  setInterval(import_chunk_yg9g0473.iel, Rma).unref();
  let c = "sentinel-unchecked";
  async function f() {
    if ((0, import_chunk_f9x2f6cx.hP)()) {
      setTimeout(o, r1o).unref();
      return;
    }
    if ((0, import_chunk_f9x2f6cx.Cl)() && (0, import_chunk_f9x2f6cx.ug)() > Date.now() - 6e4) {
      setTimeout(o, r1o).unref();
      return;
    }
    if (c !== "done") {
      if (c === "sentinel-unchecked") {
        if (c = "sweep-due", await o2l(e)) {
          setTimeout(o, r1o).unref();
          return;
        }
      }
      c = "done";
      let n = await (0, import_chunk_zemejbd8.Eei)(e) === void 0;
      if (await K(e), (0, import_chunk_m15w38ag.ne)() && e !== void 0) await (0, import_chunk_zemejbd8.kei)((0, import_chunk_2gtmjt3y.Ze)(), r.backgroundHousekeeping);
      if (n && (0, import_chunk_m15w38ag.ne)() && e !== void 0) {
        await (0, import_chunk_zemejbd8.wei)(e);
        let a = await e.write(import_chunk_hkvzj051.at.state("last-cleanup"), (/* @__PURE__ */ new Date()).toISOString(), { publishDiscipline: "inPlace" });
        if (!a.ok) (0, import_chunk_w578pjby.t)(`.last-cleanup write failed: ${a.error.code}`, { level: "error" });
      } else if (n) await (0, import_promises.writeFile)((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), ".last-cleanup"), (/* @__PURE__ */ new Date()).toISOString()).catch((a) => (0, import_chunk_jv7av99m.pa)(a) ? (0, import_chunk_w578pjby.t)(`.last-cleanup write failed: ${a.code} ${a.message}`, { level: "error" }) : (0, import_chunk_k449cc64.i)(a));
    }
    if ((0, import_chunk_f9x2f6cx.Cl)() && (0, import_chunk_f9x2f6cx.ug)() > Date.now() - 6e4) {
      setTimeout(o, r1o).unref();
      return;
    }
    await (0, import_chunk_gqy9qzxq.hYo)(), await T();
  }
  function o() {
    return f().catch((n) => (0, import_chunk_zemejbd8.bMe)(n) ? (0, import_chunk_w578pjby.t)(`background housekeeping failed: ${n.message}`, { level: "error" }) : (0, import_chunk_k449cc64.i)(n));
  }
  setTimeout(o, r2l).unref();
}
