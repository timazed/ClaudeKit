const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_zemejbd8_exports = {};
__export(chunk_zemejbd8_exports, {
  Bv: () => Bv,
  Eei: () => Eei,
  R9r: () => R9r,
  bMe: () => bMe,
  bei: () => bei,
  fXl: () => fXl,
  kei: () => kei,
  wei: () => wei
});
module.exports = __toCommonJS(chunk_zemejbd8_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_gzt0mgvc = require("/$bunfs/root/chunk-gzt0mgvc.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_nnnbdrqx = require("/$bunfs/root/chunk-nnnbdrqx.js");
var import_chunk_nydsr46r = require("/$bunfs/root/chunk-nydsr46r.js");
var import_chunk_jrvfex01 = require("/$bunfs/root/chunk-jrvfex01.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_81q3wevd = require("/$bunfs/root/chunk-81q3wevd.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_6s9tac84 = require("/$bunfs/root/chunk-6s9tac84.js");
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_chunk_wnt799dt = require("/$bunfs/root/chunk-wnt799dt.js");
var import_chunk_00egnvdb = require("/$bunfs/root/chunk-00egnvdb.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_cpdpk5r1 = require("/$bunfs/root/chunk-cpdpk5r1.js");
var import_chunk_xt12gd7z = require("/$bunfs/root/chunk-xt12gd7z.js");
var import_chunk_feazds52 = require("/$bunfs/root/chunk-feazds52.js");
var import_chunk_sqvd6je2 = require("/$bunfs/root/chunk-sqvd6je2.js");
var import_chunk_q8sdrdma = require("/$bunfs/root/chunk-q8sdrdma.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var L = __toESM(require("fs/promises"));
var import_os = require("os");
var import_path = require("path");
var import_promises = require("fs/promises");
var import_os2 = require("os");
var import_path2 = require("path");
var import_path3 = require("path");
var tt = "bot_protected_tengu_purring_magpie";
async function oe(e) {
  if (!(0, import_chunk_sghy0qej.Pe)(tt, { safe: true })) return false;
  let r = (0, import_path2.dirname)((0, import_path2.resolve)(e)), s = (0, import_chunk_p1ewvgeh.fw)().map((w) => (0, import_path2.resolve)(w));
  if (s.includes(r)) return true;
  let o = (0, import_chunk_cg8dqz0a.x)() !== "windows", l = await pe(r);
  if (l === void 0) return o;
  let u = (0, import_path2.basename)((0, import_path2.resolve)(e));
  if (import_chunk_p1ewvgeh.cdn.includes(u)) {
    let w = await pe((0, import_os2.homedir)());
    if (w === void 0 ? o : w === l) return true;
  }
  let m = (0, import_path2.join)(l, u);
  for (let w of s) {
    let g = await pe(w);
    if (g === void 0 ? o && r.startsWith(w + import_path2.sep) : g === l || (g + import_path2.sep).startsWith(m + import_path2.sep)) return true;
  }
  return false;
}
async function Ae(e) {
  let r = await pe(e);
  if (r === void 0) return (0, import_chunk_cg8dqz0a.x)() !== "windows";
  return (await Promise.all((0, import_chunk_p1ewvgeh.fw)().map(pe))).some((o) => o !== void 0 && (r + import_path2.sep).startsWith(o + import_path2.sep));
}
function pe(e) {
  return (0, import_promises.realpath)(e).catch(() => {
    return;
  });
}
var rt = "image-cache";
async function xe() {
  let e = (0, import_chunk_w578pjby.le)(), r = (0, import_path3.join)((0, import_chunk_2gtmjt3y.Ze)(), rt), s = (0, import_chunk_f9x2f6cx.W)();
  try {
    let o = await oe(r), l;
    try {
      l = await e.readdir(r);
    } catch {
      return;
    }
    for (let u of l) {
      if (u.name === s) continue;
      let m = (0, import_path3.join)(r, u.name);
      if (await oe(m)) continue;
      try {
        if (o && (await e.lstat(r)).isSymbolicLink() && ((0, import_chunk_mzmcvr6c.ht)(u.name) === null || await Ae(r))) continue;
        await e.rm(m, { recursive: true, force: true }), (0, import_chunk_w578pjby.t)(`Cleaned up old image cache: ${m}`);
      } catch {
      }
    }
    if (o) return;
    try {
      if ((await e.lstat(r)).isDirectory()) await e.rmdir(r);
    } catch {
    }
  } catch {
  }
}
(0, import_chunk_adx6804h.B)();
var Rn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ key: (0, import_chunk_adx6804h.n)(), integrity: (0, import_chunk_adx6804h.n)().nullable(), time: (0, import_chunk_adx6804h.E)() }));
async function Ce(e = import_chunk_q8sdrdma.Gme) {
  let r = (0, import_chunk_865at33z.ce)(), s = { end: () => {
  } }, o = new AbortController();
  if (await Promise.race([Promise.resolve(r.hooksLoadAtStartup).catch(() => {
  }).then(() => r.hookRegistrationInFlight?.catch(() => {
  })).then(async () => {
    while (r.hookRegistrationOwed && !o.signal.aborted) await new Promise((g) => {
      s.end = r.hookRegistrationEnded.subscribe(g);
    }), s.end();
    if (o.signal.aborted) return false;
    return await (0, import_chunk_bzyb60p0.FIn)("a retention sweep starts"), true;
  }), (0, import_chunk_5appeerh.K)(e, o.signal).then(() => false)]).finally(() => o.abort())) return r.hooksUnknownCause === void 0 ? "asked" : "load_failed";
  s.end();
  let m = r.hookRegistrationInFlight !== void 0 ? "load_running" : "unanswered", w = r.hookRegistrationOwed ? "load_owed" : m;
  return (0, import_chunk_w578pjby.t)(`Retention cleanup: the settings.read hooks were not asked within ${e} ms (${w}); the sweep begins on the merge as last held.`), w;
}
(0, import_chunk_adx6804h.B)();
var it = 0, ot = ["archived.json", "ccr-tip.json", "custom-title.json", "precompact.json", "sent-prefix.json", import_chunk_bzyb60p0.ali, import_chunk_p3d6wgn7.Opo];
function je(e) {
  let r = (0, import_chunk_hkvzj051.CEe)(e);
  return (0, import_chunk_hkvzj051.Ao)(e) && r.length === 1 && r[0] === e.toLowerCase() && (0, import_chunk_fp3vnecp.HSl)(e);
}
function ct(e) {
  return ot.some((r) => e === r || (0, import_chunk_q7qjcthc.NM)(e, r)) || e.startsWith(import_chunk_p3d6wgn7.Ipo) && (e.endsWith(".json") || e.includes(".json.tmp.")) || e.startsWith(import_chunk_p3d6wgn7.Mpo) && e.endsWith(".md");
}
async function lt() {
  let e = (0, import_chunk_2yx6c1y2._n)("userSettings");
  if (!e || (0, import_chunk_2yx6c1y2.zr)()?.cleanupPeriodDays !== void 0) return false;
  let r = await (0, import_chunk_w578pjby.le)().stat(e).catch(() => null);
  return r?.size === 0 && r.mtimeMs > Number(Ie(import_chunk_ha393e1n.GDe)) && r.mtimeMs <= Date.now();
}
function ut() {
  return ["hklm", "hkcu"].some((e) => {
    let r = (0, import_chunk_2yx6c1y2.VIo)(e);
    return !!r && (0, import_chunk_7n1tpv84.JJi)(r);
  }) || (0, import_chunk_2yx6c1y2.e$)();
}
async function R9r(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return "diskless";
  if (!(0, import_chunk_xzvhvaa2.rn)("userSettings") && (0, import_chunk_2yx6c1y2.zr)()?.cleanupPeriodDays === void 0) return (0, import_chunk_w578pjby.t)("Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays."), "user_source_disabled";
  if ((0, import_chunk_2yx6c1y2._e)("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (((0, import_chunk_6mfepmbb.t$)() || await lt()) && !bei()) return "settings_unknowable";
  if (ut() && !(0, import_chunk_2zeyvjwb.uo)("hipaa") && !(0, import_chunk_2zeyvjwb.uo)("zdr")) return (0, import_chunk_w578pjby.t)("Skipping retention cleanup: this computer's managed settings were not read in full, so cleanupPeriodDays may be set to a value that cannot be seen. A later process that reads it runs the cleanup."), "settings_unknowable";
  if ((0, import_chunk_cpdpk5r1.Bqe)().errors.filter((s) => !s.mcpErrorMetadata && s.severity !== "warning").length > 0) for (let s of import_chunk_6mfepmbb.wKt) {
    let o = await (0, import_chunk_2yx6c1y2.IRt)(s, e, s === "desktopSessionCleanupPeriodDays" ? { presenceSources: ["userSettings", "flagSettings"] } : void 0);
    if (o === "unknowable") return (0, import_chunk_w578pjby.t)(`Skipping cleanup: a settings file could not be read or parsed, so ${s} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`), "settings_unknowable";
    if (o === "present") return (0, import_chunk_w578pjby.t)(`Skipping cleanup: settings have validation errors but ${s} was explicitly set. Fix settings errors to enable cleanup.`), "settings_invalid_key_set";
  }
  if ((0, import_chunk_xcgcdx61._ge)() && (0, import_chunk_xcgcdx61.zee)((0, import_chunk_xcgcdx61.JC)() === true)) return (0, import_chunk_w578pjby.t)("Skipping retention cleanup: this session reads no stored server-managed settings and holds none of its own (its request failed, has not finished, or returned nothing that could be applied), so cleanupPeriodDays may be set to a value that cannot be seen. A later process that is not paused for this reason runs the cleanup."), "remote_settings_unknowable";
  if ((0, import_chunk_865at33z.KU)() !== void 0 || ((0, import_chunk_xcgcdx61.JC)() === void 0 ? (0, import_chunk_865at33z.az)() !== void 0 : (0, import_chunk_xcgcdx61.kea)())) return (0, import_chunk_w578pjby.t)("Skipping retention cleanup: ANTHROPIC_PROFILE names a profile that gives no credential, so the managed settings of the sign-in that /login stored are not read, and they may set a longer cleanupPeriodDays. Correct or unset ANTHROPIC_PROFILE so that a later session can run the cleanup."), "remote_settings_unknowable";
  return null;
}
async function fXl(e, r) {
  return await Ce(r), await R9r(e) === null;
}
function Ie(e) {
  let r = new Date(Date.now() - e * 24 * 60 * 60 * 1e3);
  return Number.isNaN(r.getTime()) ? null : r;
}
function Bv(e) {
  let s = ((0, import_chunk_2yx6c1y2.zr)() || {}).cleanupPeriodDays ?? import_chunk_ha393e1n.GDe;
  if (s === 0) return null;
  if (e !== void 0 && e < s) s = e;
  return Ie(s);
}
var he = ".desktop-released.json", ft = 4096;
function ve(e) {
  return e.slice(0, -6) + he;
}
var dt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ reason: (0, import_chunk_adx6804h.n)().optional() }));
async function Me(e, r, s) {
  let o = await r.readFileFdGated(e, ft);
  if (o === null) return "none";
  let l;
  try {
    let u = dt().safeParse((0, import_chunk_w578pjby.te)(o.content));
    l = u.success ? u.data.reason : void 0;
  } catch {
    return "none";
  }
  if (l === "delete") return "release-now";
  if (l === "archive") return o.stats.mtime < s ? "release-now" : "grace";
  return "none";
}
function mt(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function pt() {
  return fe("desktopSessionCleanupPeriodDays", it);
}
function fe(e, r) {
  let s = (0, import_chunk_2yx6c1y2.vl)("userSettings")?.[e], o = (0, import_chunk_2yx6c1y2.iL)(e)[0] ?? (s !== void 0 && r !== 0 && s > r ? s : r);
  if (o === 0) return null;
  return Ie(o);
}
function wt() {
  if ((0, import_chunk_2yx6c1y2._e)("policySettings")?.cleanupPeriodDays !== void 0) return true;
  if ((0, import_chunk_2yx6c1y2.UJi)()) return true;
  return (0, import_chunk_2yx6c1y2.Rw)().some((e) => e.file !== import_chunk_6mfepmbb.$oe && (import_chunk_6mfepmbb.wKt.some((r) => r === e.path) || e.severity !== "warning"));
}
function bei() {
  return wt() || (0, import_chunk_2zeyvjwb.uo)("hipaa") || (0, import_chunk_2zeyvjwb.uo)("zdr");
}
function _() {
  return { messages: 0, errors: 0, filesRetainedFresh: 0, filesPastCutoff: 0 };
}
function H(e, r) {
  return { messages: e.messages + r.messages, errors: e.errors + r.errors, filesRetainedFresh: e.filesRetainedFresh + r.filesRetainedFresh, filesPastCutoff: e.filesPastCutoff + r.filesPastCutoff };
}
function gt(e) {
  let r = (0, import_chunk_7cfjrnwy.nt)(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(r);
}
function bMe(e) {
  return (0, import_chunk_jv7av99m.fn)(e) || (0, import_chunk_jv7av99m.Tk)(e);
}
async function Le(e, r, s) {
  let o = _();
  try {
    let l = await (0, import_chunk_w578pjby.le)().readdir(e);
    for (let u of l) try {
      if (gt(u.name) < r) if (await (0, import_chunk_w578pjby.le)().unlink((0, import_path.join)(e, u.name)), s) o.messages++;
      else o.errors++;
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`Failed to clean up file ${u.name} in ${e}: ${m}`, { level: "error" });
    }
  } catch (l) {
    if ((0, import_chunk_jv7av99m.J)(l)) ;
    else if (bMe(l)) (0, import_chunk_w578pjby.t)(`cleanup readdir ${e} failed: ${l.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(l);
  }
  return o;
}
async function yt() {
  let e = (0, import_chunk_w578pjby.le)(), r = Bv();
  if (r === null) return _();
  let s = import_chunk_k449cc64.hyn.errors(), o = import_chunk_k449cc64.hyn.baseLogs(), l = await Le(s, r, false);
  try {
    let u;
    try {
      u = await e.readdir(o);
    } catch {
      return l;
    }
    let m = u.filter((w) => w.isDirectory() && w.name.startsWith("mcp-logs-")).map((w) => (0, import_path.join)(o, w.name));
    for (let w of m) l = H(l, await Le(w, r, true)), await T(w, e);
  } catch (u) {
    if ((0, import_chunk_jv7av99m.J)(u)) ;
    else if (bMe(u)) (0, import_chunk_w578pjby.t)(`cleanup mcp-logs scan failed: ${u.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(u);
  }
  return l;
}
async function N(e, r, s, o, l = r, u) {
  let m;
  try {
    m = await s.stat(e);
  } catch (w) {
    if ((0, import_chunk_jv7av99m.J)(w)) return false;
    throw w;
  }
  if (!(m.mtime < r)) return o.filesRetainedFresh++, false;
  if (u !== void 0 && await u(e, m)) return false;
  try {
    await s.unlink(e);
  } catch (w) {
    if ((0, import_chunk_jv7av99m.J)(w)) return false;
    if (l !== null && m.mtime < l) o.filesPastCutoff++;
    throw w;
  }
  return true;
}
async function T(e, r) {
  if (await oe(e)) return;
  if (!await re(e, r)) return;
  try {
    await r.rmdir(e);
  } catch {
  }
}
async function St(e, r, s) {
  let o = (0, import_chunk_2zeyvjwb.d8)();
  if (!(o.includes("hipaa") || o.includes("zdr")) || !(0, import_chunk_2zeyvjwb.$hn)()) return;
  let l = Bv(), u = fe("cleanupPeriodDays", import_chunk_ha393e1n.GDe);
  if (l === null || u === null) return;
  let m = l < u ? l : u, w = await r.readdir(e).catch(() => null);
  if (w === null) return;
  if (w.length === 1 && w[0]?.name === ".gitignore" && w[0].isFile()) try {
    if (await N((0, import_path.join)(e, ".gitignore"), m, r, s)) s.messages++;
  } catch {
    s.errors++;
  }
  if (w.length > 0 || await ge(e, r).catch(() => 1 / 0) < m.getTime()) await T(e, r);
}
var Oe = [import_chunk_fp3vnecp.ISl, import_chunk_fp3vnecp.MSl];
async function Dt(e, r, s, o) {
  try {
    for (let R of Oe) await Fe((0, import_path.join)(e, R), r, s, o);
    let l = false;
    try {
      let { sweepCheckoutSessionTrash: R } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z7aq90j5.js"))), D = await R(e, r.getTime());
      o.messages += D.removed, o.errors += D.errors, l = D.newestKeptMs !== null;
    } catch {
      o.errors++, l = true;
    }
    let u = (await s.readdir(e)).filter((R) => !Oe.includes(R.name)), m = null;
    for (let R of u) {
      let D = (0, import_path.join)(e, R.name), y = await De(R, D, s) === "directory" ? await de(D, s, { requireCompleteWalk: true }) : (await s.lstat(D)).mtimeMs;
      if (y !== null) m = Math.max(m ?? -1 / 0, y);
    }
    if (!((m ?? await ge(e, s)) < r.getTime())) return;
    let g = (await Promise.all(Oe.map((R) => s.lstat((0, import_path.join)(e, R)).then((D) => D.isDirectory(), (D) => {
      if ((0, import_chunk_jv7av99m.J)(D)) return false;
      throw D;
    })))).includes(true), k = u.toSorted((R, D) => Number(R.name === import_chunk_fp3vnecp.LUi) - Number(D.name === import_chunk_fp3vnecp.LUi));
    if (g || l) {
      let R = false;
      for (let D of k) {
        if (l && D.name === import_chunk_fp3vnecp.ubo) {
          R = await kt((0, import_path.join)(e, D.name), s) || R;
          continue;
        }
        await s.rm((0, import_path.join)(e, D.name), { recursive: true, force: true }), R = true;
      }
      if (R) o.messages++;
      return;
    }
    for (let R of k.slice(0, -1)) await s.rm((0, import_path.join)(e, R.name), { recursive: true, force: true });
    await s.rm(e, { recursive: true, force: true }), o.messages++;
  } catch (l) {
    if (!(0, import_chunk_jv7av99m.J)(l)) o.errors++;
  }
}
async function Fe(e, r, s, o, l, u) {
  if (!await re(e, s)) return;
  for (let m of await se(e, s, o)) {
    if (u && !u.test(m.name)) continue;
    let w = await be(m, (0, import_path.join)(e, m.name), s, o);
    if (w === "file") {
      try {
        if (await N((0, import_path.join)(e, m.name), r, s, o)) o.messages++;
      } catch {
        o.errors++;
      }
      continue;
    }
    if (w !== "directory") continue;
    let g = (0, import_path.join)(e, m.name);
    try {
      if ((await de(g, s, { requireCompleteWalk: true }) ?? await ge(g, s)) < r.getTime()) {
        let D = l ? (0, import_path.join)(e, l()) : g;
        if (D !== g) await s.rename(g, D);
        await s.rm(D, { recursive: true, force: true }), o.messages++;
      }
    } catch (k) {
      if (!(0, import_chunk_jv7av99m.J)(k)) o.errors++;
    }
  }
  if (!u) await T(e, s);
}
async function De(e, r, s) {
  if (e.isDirectory()) return "directory";
  if (e.isFile()) return "file";
  if (e.isSymbolicLink() || e.isFIFO() || e.isSocket() || e.isBlockDevice() || e.isCharacterDevice()) return "other";
  let o = await s.lstat(r);
  return o.isDirectory() ? "directory" : o.isFile() ? "file" : "other";
}
async function be(e, r, s, o) {
  try {
    return await De(e, r, s);
  } catch (l) {
    return Re(l, r, o), "other";
  }
}
async function ge(e, r) {
  return (await r.lstat(e)).mtimeMs;
}
async function Rt(e) {
  let r = Bv(), s = _();
  if (r === null) return s;
  let o = (0, import_chunk_hsqa3g9e.bh)(), l = (0, import_chunk_w578pjby.le)();
  for (let u of await l.readdir(o).catch(() => [])) {
    let m = (0, import_path.join)(o, u.name), w = (0, import_path.join)(m, import_chunk_fp3vnecp.hBn);
    if (u.isDirectory() && await re(w, l)) await Dt(w, r, l, s), await T(m, l);
  }
  return s;
}
async function kt(e, r) {
  let s = e, o = false;
  for (let l of ["objects", "info", "alternates"]) {
    if (!(await r.lstat(s)).isDirectory()) return await r.rm(s, { recursive: true, force: true }), true;
    for (let u of await r.readdir(s)) if (u.name !== l) await r.rm((0, import_path.join)(s, u.name), { recursive: true, force: true }), o = true;
    s = (0, import_path.join)(s, l);
  }
  return o;
}
async function re(e, r, s) {
  try {
    return (await r.lstat(e)).isDirectory();
  } catch (o) {
    if (s !== void 0) Re(o, e, s);
    return false;
  }
}
function Re(e, r, s) {
  if ((0, import_chunk_jv7av99m.kn)(e)) return;
  if (s.errors++, bMe(e)) (0, import_chunk_w578pjby.t)(`cleanup could not examine ${r}: ${e.code}`, { level: "error" });
  else (0, import_chunk_k449cc64.i)(e);
}
async function se(e, r, s) {
  try {
    return await r.readdir(e);
  } catch (o) {
    return Re(o, e, s), [];
  }
}
async function ye(e, r, s, o, l = {}) {
  let { entryMatcher: u } = l;
  for (let m of await se(e, s, o)) {
    let w = (0, import_path.join)(e, m.name);
    if (m.isDirectory()) await ye(w, r, s, o, l);
    else if (u !== void 0 && !u(m.name)) ;
    else if (m.isFile()) try {
      if (await N(w, r, s, o)) o.messages++;
    } catch {
      o.errors++;
    }
    else try {
      if ((await s.lstat(w)).mtime < r) await s.unlink(w), o.messages++;
    } catch {
      o.errors++;
    }
  }
  await T(e, s);
}
async function de(e, r, { requireCompleteWalk: s = false } = {}) {
  let o = -1 / 0, l = await r.readdir(e).catch((u) => {
    if (s && !(0, import_chunk_jv7av99m.J)(u)) throw u;
    return [];
  });
  for (let u of l) {
    let m = (0, import_path.join)(e, u.name), w = s ? await De(u, m, r).catch((g) => {
      if ((0, import_chunk_jv7av99m.J)(g)) return "other";
      throw g;
    }) : u.isDirectory() ? "directory" : u.isFile() ? "file" : "other";
    if (w === "directory") {
      let g = await de(m, r, { requireCompleteWalk: s });
      if (g !== null) o = Math.max(o, g);
    } else if (w === "file") try {
      let { mtimeMs: g } = await r.stat(m);
      o = Math.max(o, g);
    } catch (g) {
      if (s && !(0, import_chunk_jv7av99m.J)(g)) throw g;
    }
  }
  return o === -1 / 0 ? null : o;
}
async function Pt(e) {
  let r = Bv(), s = { ..._(), transcripts: 0, transcriptsExemptedDesktop: 0 };
  if (r === null) return s;
  let o = (0, import_chunk_hsqa3g9e.bh)(), l = (0, import_chunk_w578pjby.le)(), u;
  try {
    u = await l.readdir(o);
  } catch (I) {
    if (!(0, import_chunk_jv7av99m.J)(I)) s.errors++;
    return s;
  }
  let m;
  try {
    if (m = (0, import_chunk_8nvd6fqx.ih)(), !(await l.lstat(m)).isDirectory()) m = null;
  } catch {
    m = null;
  }
  let w = /* @__PURE__ */ new Map(), g = true, k = bei(), R = pt(), D = null, y = k ? void 0 : async (I, M) => {
    if ((0, import_chunk_2zeyvjwb.uo)("hipaa") || (0, import_chunk_2zeyvjwb.uo)("zdr")) return false;
    if (R !== null && M.mtime < R) return false;
    let X = await Me(ve(I), l, r);
    if (X === "release-now") return false;
    if (X === "grace") return s.transcriptsExemptedDesktop++, true;
    if (M.size === 0) {
      if (!await l.stat(I.slice(0, -6)).then((v) => v.isDirectory(), () => false)) return s.transcriptsExemptedDesktop++, true;
    }
    D ??= Buffer.allocUnsafe(import_chunk_q3a5dy2r.Gb);
    let { head: Q, tail: ie } = await (0, import_chunk_q3a5dy2r.Jmn)(I, M.size, D);
    if (Q === "" && M.size > 0) throw await l.stat(I), Error("transient read failure while classifying a transcript for the desktop retention exemption");
    let Z = M.size > import_chunk_q3a5dy2r.Gb ? (0, import_chunk_q3a5dy2r.$At)(ie) : ie, P = (0, import_chunk_q3a5dy2r.Dhe)(Q, "entrypoint"), A = (0, import_chunk_q3a5dy2r.JNe)(Z, "entrypoint");
    if (!(P !== void 0 && (0, import_chunk_3t7ve0wy.m4t)(P) || A !== void 0 && (0, import_chunk_3t7ve0wy.m4t)(A))) return false;
    let ae = (0, import_path.basename)(I).startsWith("agent-") ? (0, import_chunk_q3a5dy2r.Dhe)(Q, "sessionId") ?? (0, import_chunk_q3a5dy2r.JNe)(Z, "sessionId") : void 0;
    if (ae !== void 0 && mt(ae)) {
      let q = (0, import_path.join)((0, import_path.dirname)(I), `${ae}${he}`);
      if (q !== ve(I)) {
        if (await Me(q, l, r) === "release-now") return false;
      }
    }
    return s.transcriptsExemptedDesktop++, true;
  };
  for (let I of u) {
    if (!I.isDirectory()) {
      g &&= I.isFile();
      continue;
    }
    let M = (0, import_path.join)(o, I.name), X;
    try {
      X = await l.readdir(M);
    } catch (P) {
      s.errors++, g &&= (0, import_chunk_jv7av99m.J)(P);
      continue;
    }
    X.sort((P, A) => Number(A.isDirectory()) - Number(P.isDirectory()));
    let Q = [], ie = null, Z = new Set(X.filter((P) => P.isFile() && P.name.endsWith(".jsonl")).map((P) => P.name.slice(0, -6)));
    for (let P of X) if (!P.isDirectory() && P.name.endsWith(".jsonl")) {
      let A = P.name.slice(0, -6);
      w.set(A, (w.get(A) ?? 0) + 1);
    }
    for (let P of X) {
      if (ie === null && !P.isDirectory()) ie = s.errors;
      if (P.isFile()) {
        if (P.name.endsWith(he) && Z.has(P.name.slice(0, -he.length))) continue;
        if (!P.name.endsWith(".jsonl") && !P.name.endsWith(".cast") && !P.name.endsWith(".ccr-tip.json") && !P.name.endsWith(".precompact.json") && !P.name.endsWith(he) && !P.name.includes(".desktop-released.json.tmp") && !P.name.endsWith(".dir-sync.json") && !P.name.endsWith(".dir-sync-empty.json") && !P.name.endsWith(".cloud-worktrees.json") && P.name !== "bridge-pointer.json" && !P.name.includes(".ccr-tip.json.tmp.") && !P.name.includes(".precompact.json.tmp.") && !P.name.includes(".dir-sync.json.tmp.") && !P.name.includes(".dir-sync-empty.json.tmp.") && !P.name.includes(".cloud-worktrees.json.tmp.") && !(0, import_chunk_q7qjcthc.NM)(P.name, "bridge-pointer.json") && !P.name.includes(".jsonl.compact.tmp.") && !P.name.includes(".jsonl.superseded-")) continue;
        let A = (0, import_path.join)(M, P.name);
        try {
          if (await N(A, r, l, s, void 0, P.name.endsWith(".jsonl") ? y : void 0)) {
            if (s.messages++, P.name.endsWith(".jsonl")) {
              s.transcripts++;
              let U = P.name.slice(0, -6);
              if (w.set(U, (w.get(U) ?? 1) - 1), je(U)) {
                if (await l.unlink((0, import_path.join)(M, `${U}.ccr-tip.json`)).catch(() => {
                }), await l.unlink((0, import_path.join)(M, `${U}.precompact.json`)).catch(() => {
                }), Q.push(ve(A)), await (0, import_chunk_c203g5kd.Yxt)((0, import_path.join)(M, U)).catch(() => {
                  s.errors++;
                }), m !== null) for (let ae of (0, import_chunk_8nvd6fqx.hMr)(I.name)) {
                  let q = (0, import_path.join)(m, ae), v = await l.lstat(q).catch(() => null);
                  if (v?.isDirectory()) {
                    let G = (0, import_path.join)(q, U);
                    try {
                      if (typeof await (0, import_chunk_00egnvdb.Yos)(G, (0, import_path.dirname)(m)) === "object") await (0, import_chunk_c203g5kd.Yxt)(G);
                    } catch {
                      s.errors++;
                      continue;
                    }
                    if (v.mtime < r) await T(q, l);
                  }
                }
              }
            }
          }
        } catch (U) {
          if (!(0, import_chunk_jv7av99m.J)(U)) s.errors++;
        }
      } else if (P.isDirectory()) {
        let A = (0, import_path.join)(M, P.name);
        if (P.name === "bagel") {
          let v = await de(A, l);
          if (v !== null && v < r.getTime()) try {
            await (0, import_chunk_c203g5kd.Yxt)(A), s.messages++;
          } catch {
            s.errors++;
          }
          continue;
        }
        if (P.name === import_chunk_fp3vnecp.hBn) continue;
        if (P.name === import_chunk_6mfepmbb.dO) {
          let v = await l.readdir(A).catch(() => []);
          for (let G of v) {
            let ee = (0, import_path.join)(A, G.name);
            if (G.isDirectory()) await ye(ee, r, l, s);
            else if (G.isFile() && G.name !== ".gitignore") try {
              if (await N(ee, r, l, s)) s.messages++;
            } catch {
              s.errors++;
            }
          }
          await St(A, l, s);
          continue;
        }
        if (!je(P.name)) {
          let v = await l.lstat(A).catch(() => null);
          if (v !== null && v.mtime < r) await T(A, l);
          continue;
        }
        let U = (0, import_path.join)(A, import_chunk_mxhw2w5n.Mre);
        if (await re(U, l, s)) {
          let v = await se(U, l, s);
          for (let G of v) if (G.isFile()) try {
            if (await N((0, import_path.join)(U, G.name), r, l, s)) s.messages++;
          } catch {
            s.errors++;
          }
          else if (G.isDirectory()) {
            let ee = (0, import_path.join)(U, G.name), ke;
            try {
              ke = await l.readdir(ee);
            } catch (Se) {
              Re(Se, ee, s);
              continue;
            }
            for (let Se of ke) {
              if (!Se.isFile()) continue;
              try {
                if (await N((0, import_path.join)(ee, Se.name), r, l, s)) s.messages++;
              } catch {
                s.errors++;
              }
            }
            if (ke.length > 0 || await ge(ee, l).catch(() => 1 / 0) < r.getTime()) await T(ee, l);
          }
          if (v.length > 0 || await ge(U, l).catch(() => 1 / 0) < r.getTime()) await T(U, l);
        }
        let ae = await se(A, l, s);
        for (let v of ae) {
          if (!v.isFile() || !(ct(v.name) || (0, import_chunk_fp3vnecp.NUi)(v.name) !== void 0)) continue;
          if ((v.name === "custom-title.json" || v.name === "archived.json") && Z.has(P.name)) continue;
          try {
            if (await N((0, import_path.join)(A, v.name), r, l, s)) s.messages++;
          } catch {
            s.errors++;
          }
        }
        let q = (0, import_path.join)(A, "mcp-tasks");
        if (await re(q, l, s)) {
          for (let v of await se(q, l, s)) {
            let G = v.name.endsWith(".json") || v.name.includes(".json.tmp.");
            if (!v.isFile() || !G) continue;
            try {
              if (await N((0, import_path.join)(q, v.name), r, l, s)) s.messages++;
            } catch {
              s.errors++;
            }
          }
          await T(q, l);
        }
        if (!Z.has(P.name)) for (let v of ["subagents", "workflows", "remote-agents"]) {
          let G = (0, import_path.join)(A, v);
          if (await re(G, l, s)) await ye(G, r, l, s);
        }
        await T(A, l);
      }
    }
    if (ie !== null && s.errors > ie) Q.length = 0;
    for (let P of Q) await l.unlink(P).catch(() => {
    });
    await T(M, l);
  }
  let C = /* @__PURE__ */ new Set();
  for (let [I, M] of w) if (M === 0 && (0, import_chunk_mzmcvr6c.ht)(I) !== null) C.add(I);
  if (m === null || !g || C.size === 0) return s;
  let j = await (0, import_chunk_p51r1nb3.Yae)(e, { rejectUnreadable: true }).catch(() => null);
  if (j === null) return s.errors++, s;
  C.delete((0, import_chunk_f9x2f6cx.W)());
  for (let I of j) C.delete(I.sessionId ?? "");
  if (C.size === 0) return s;
  let O = await l.readdir(m).catch((I) => (s.errors += (0, import_chunk_jv7av99m.J)(I) ? 0 : 1, []));
  for (let I of O) {
    if (!I.isDirectory()) continue;
    let M = (0, import_path.join)(m, I.name), Q = (await l.readdir(M).catch((Z) => (s.errors += (0, import_chunk_jv7av99m.J)(Z) ? 0 : 1, []))).filter((Z) => C.has(Z.name));
    if (Q.length === 0) continue;
    if (!(await l.lstat(M).catch(() => null))?.isDirectory()) continue;
    for (let { name: Z } of Q) {
      let P = await (0, import_chunk_00egnvdb.Yos)((0, import_path.join)(M, Z), (0, import_path.dirname)(m)).catch(() => null);
      if (P === null || typeof P === "object") s.errors++;
    }
  }
  return s;
}
async function F(e, r, s = true, o, l, u) {
  let m = l === void 0 ? Bv(o) : l, w = _();
  if (m === null) return w;
  let g = l !== void 0 || o === void 0 ? m : Bv(), k = typeof r === "string" ? (y) => y.endsWith(r) : r, R = (0, import_chunk_w578pjby.le)(), D;
  try {
    D = await R.readdir(e);
  } catch {
    return w;
  }
  for (let y of D) {
    if (!y.isFile() || !k(y.name)) continue;
    try {
      if (await N((0, import_path.join)(e, y.name), m, R, w, g, async (C) => await oe(C) || await u?.() === true)) w.messages++;
    } catch {
      w.errors++;
    }
  }
  if (s) await T(e, R);
  return w;
}
async function _t() {
  let e = _(), r = Bv();
  if (r === null) return e;
  let s = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "hfi-auth.json");
  try {
    if (await N(s, r, (0, import_chunk_w578pjby.le)(), e)) e.messages++;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) (0, import_chunk_w578pjby.t)(`Failed to clean up HFI auth file: ${o}`, { level: "error" }), e.errors++;
  }
  return e;
}
async function Et() {
  let e = _(), r = Bv();
  if (r === null) return e;
  let s = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "cache", "team-discovery.json");
  try {
    if (await N(s, r, (0, import_chunk_w578pjby.le)(), e)) e.messages++;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) if (e.errors++, bMe(o)) (0, import_chunk_w578pjby.t)(`cleanup team-discovery-cache failed: ${o.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
  }
  return e;
}
async function Ct() {
  let e = _(), r = Bv();
  if (r === null) return e;
  for (let s of [(0, import_chunk_jrvfex01.FXr)(), (0, import_chunk_jrvfex01.YWa)()]) try {
    if (await N(s, r, (0, import_chunk_w578pjby.le)(), e)) e.messages++;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) if (e.errors++, bMe(o)) (0, import_chunk_w578pjby.t)(`cleanup model-access memory failed: ${o.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
  }
  return e;
}
async function vt() {
  return F((0, import_chunk_865at33z.j9)(), (e) => e !== import_chunk_865at33z.Qqi && e !== import_chunk_nydsr46r.Iii && (e.endsWith(".json") || e.includes(".json.tmp.")), false);
}
async function Ot() {
  let e = _(), r = Bv();
  if (r === null) return e;
  let s = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "mcp-needs-auth-cache.json");
  try {
    if (await N(s, r, (0, import_chunk_w578pjby.le)(), e)) e.messages++;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) if (e.errors++, bMe(o)) (0, import_chunk_w578pjby.t)(`cleanup mcp-auth-cache failed: ${o.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
  }
  return e;
}
async function bt() {
  let e = _(), r = Bv();
  if (r === null) return e;
  let s = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "state", "device-unbound-creates.json");
  try {
    if (await N(s, r, (0, import_chunk_w578pjby.le)(), e)) e.messages++;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) if (e.errors++, bMe(o)) (0, import_chunk_w578pjby.t)(`cleanup device-unbound-creates failed: ${o.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
  }
  return e;
}
async function It() {
  let e = _(), r = Bv();
  if (r === null) return e;
  let s = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "state", "mcp-discover-verdicts.json");
  try {
    if (await N(s, r, (0, import_chunk_w578pjby.le)(), e)) e.messages++;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) if (e.errors++, bMe(o)) (0, import_chunk_w578pjby.t)(`cleanup mcp-discover-verdicts failed: ${o.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
  }
  return e;
}
async function Ft() {
  let e = _(), r = Bv(), s = (0, import_chunk_2gtmjt3y.Nl)();
  if (r === null || s === null) return e;
  let o = (0, import_path.join)(s, "state", "device-mcp-consent-not-now.json");
  try {
    if (await N(o, r, (0, import_chunk_w578pjby.le)(), e)) e.messages++;
  } catch (l) {
    if (!(0, import_chunk_jv7av99m.J)(l)) if (e.errors++, bMe(l)) (0, import_chunk_w578pjby.t)(`cleanup device-mcp-not-now failed: ${l.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(l);
  }
  return e;
}
async function Tt(e = (0, import_path.join)((0, import_os.homedir)(), ".claude", "state", "served-calls")) {
  return F(e, (r) => r.endsWith(".jsonl") || r.includes(".jsonl.tmp."), true, void 0, fe("cleanupPeriodDays", import_chunk_ha393e1n.GDe));
}
async function At(e = (0, import_path.join)((0, import_os.homedir)(), ".claude", "state", "unattended-serving-runs")) {
  return F(e, (r) => {
    let s = /^([1-9][0-9]{0,9})\.json$/.exec(r)?.[1];
    return s === void 0 ? r.includes(".json.tmp.") : !(0, import_chunk_v6cdm8tp.Rd)(Number(s));
  }, true, void 0, fe("cleanupPeriodDays", import_chunk_ha393e1n.GDe));
}
async function Nt(e) {
  let r = _(), s = Bv();
  if (s === null) return r;
  try {
    r.messages += await (0, import_chunk_wnt799dt.pYa)(s, e);
  } catch (o) {
    if (r.errors++, bMe(o)) (0, import_chunk_w578pjby.t)(`cleanup settings-review store failed: ${o.code}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
  }
  return r;
}
function xt(e) {
  if (!e) return false;
  try {
    let r = (0, import_chunk_w578pjby.Cs)(e);
    if (typeof r !== "object" || r === null) return true;
    if (!("timestamp" in r)) return true;
    let { timestamp: s } = r;
    return typeof s !== "number" || !Number.isFinite(s);
  } catch {
    return true;
  }
}
function jt(e, r) {
  if (!e) return false;
  try {
    let s = (0, import_chunk_w578pjby.Cs)(e);
    if (typeof s !== "object" || s === null || !("timestamp" in s)) return false;
    let { timestamp: o } = s;
    return typeof o === "number" && Number.isFinite(o) && o < r;
  } catch {
    return false;
  }
}
async function Mt(e, r) {
  let s;
  try {
    s = await L.readdir(e);
  } catch {
    return;
  }
  let o = r.getTime();
  await Promise.all(s.filter((l) => (0, import_chunk_q7qjcthc.NM)(l, "history.jsonl") || (0, import_chunk_sjqze7qg.kCe)(l) || (0, import_chunk_q7qjcthc.NM)(l, import_chunk_p1ewvgeh.m2e) || import_chunk_xcgcdx61.QQi.some((u) => l === u || (0, import_chunk_q7qjcthc.NM)(l, u))).map(async (l) => {
    let u = (0, import_path.join)(e, l);
    try {
      let m = await L.lstat(u);
      if (m.isFile() && m.mtimeMs < o) await (import_chunk_xcgcdx61.QQi.includes(l) ? (0, import_chunk_xcgcdx61.ZQi)(u) : L.unlink(u));
    } catch {
    }
  }));
}
async function Lt(e) {
  let r = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "history.jsonl"), s = e.getTime(), o = (g) => jt(g, s) || xt(g), l, u;
  try {
    if (l = await L.lstat(r), !l.isFile()) return (0, import_chunk_w578pjby.t)("History retention prune skipped: history.jsonl is not a regular file", { level: "error" }), { entriesPruned: 0, errors: 1 };
    u = await (0, import_chunk_bq31aqv6.ivi)(r, o, { start: 0, end: l.size, tail: "defer", expect: { ino: l.ino, birthtimeMs: l.birthtimeMs } });
  } catch (g) {
    if ((0, import_chunk_jv7av99m.J)(g)) return { entriesPruned: 0, errors: 0 };
    if (g instanceof import_chunk_bq31aqv6.I0n) return (0, import_chunk_w578pjby.t)("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    return (0, import_chunk_w578pjby.t)(`History retention prune failed: ${g}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  }
  if (u.dropped === 0 && u.consumed === l.size) return { entriesPruned: 0, errors: 0 };
  let m, w = false;
  try {
    m = await (0, import_chunk_2yx6c1y2.Rc)(r, { ...import_chunk_bq31aqv6.U1t, onCompromised: (g) => {
      w = true, (0, import_chunk_w578pjby.t)(`History retention lock compromised: ${g}`, { level: "error" });
    } });
  } catch (g) {
    if ((0, import_chunk_jv7av99m.J)(g)) return { entriesPruned: 0, errors: 0 };
    return (0, import_chunk_w578pjby.t)(`History retention prune failed: ${g}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  }
  try {
    let g = await L.lstat(r);
    if (!g.isFile() || g.size < u.consumed || l.ino !== 0 && g.ino !== l.ino || g.birthtimeMs !== l.birthtimeMs) return (0, import_chunk_w578pjby.t)("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    let k = await (0, import_chunk_bq31aqv6.ivi)(r, o, { start: u.consumed, end: g.size, tail: "judge", expect: { ino: g.ino, birthtimeMs: g.birthtimeMs }, verifiedHead: { bytes: u.consumed, digest: u.digest }, residueBytes: l.size - u.consumed }), R = u.dropped + k.dropped;
    if (w) throw Error("history lock compromised before the rewrite");
    if (R === 0 && k.terminated && !k.split) return { entriesPruned: 0, errors: 0 };
    let D = u.kept.concat(k.kept);
    return await (0, import_chunk_q7qjcthc.FM)(r, D.length ? `${D.join(`
`)}
` : "", { exactMode: g.mode & 511 }), { entriesPruned: R, errors: 0 };
  } catch (g) {
    if (g instanceof import_chunk_bq31aqv6.I0n) return (0, import_chunk_w578pjby.t)("History retention prune deferred: history.jsonl changed under the scan"), { entriesPruned: 0, errors: 0 };
    return (0, import_chunk_w578pjby.t)(`History retention prune failed: ${g}`, { level: "error" }), { entriesPruned: 0, errors: 1 };
  } finally {
    await (0, import_chunk_2yx6c1y2.Kg)(m, "history retention");
  }
}
async function Bt() {
  let e = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "mcp-discovery-cache"), r = await F(e, (u) => u.endsWith(".json") || u.includes(".json.tmp."), false), s = Bv();
  if (s === null) return r;
  let o = (0, import_chunk_w578pjby.le)(), l;
  try {
    l = await o.readdir(e);
  } catch {
    return r;
  }
  for (let u of l) {
    if (!u.isDirectory() || !u.name.endsWith(".json.lock")) continue;
    let m = (0, import_path.join)(e, u.name);
    try {
      if ((await o.stat(m)).mtime < s) await o.rmdir(m), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(e, o), r;
}
async function Ht(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return _();
  let r = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "plans");
  try {
    let s = !(0, import_chunk_xt12gd7z.Cei)();
    if (e !== void 0) return await F(r, (o) => o.endsWith(".md") || o.includes(".md.tmp."), s);
    return await F(r, ".md", s);
  } finally {
    (0, import_chunk_p1ewvgeh.hEr)();
  }
}
async function z(e, { exclude: r, skipIf: s, refuseRedirectedRoot: o = false, removeEmptyBaseDir: l = true, maxAgeDays: u, baseDir: m, storageV5: w } = {}) {
  let g = Bv(u), k = _();
  if (g === null) return k;
  let R = (0, import_chunk_w578pjby.le)(), D = (0, import_chunk_2gtmjt3y.Ze)(), y = m ?? (0, import_path.join)(D, e);
  if (o) {
    if (await (0, import_chunk_bzyb60p0.JJ)(y, D, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: w }) !== "real") return k;
  }
  let C;
  try {
    C = await R.readdir(y);
  } catch {
    return k;
  }
  for (let j of C) {
    if (!j.isDirectory() || r?.has(j.name)) continue;
    let O = (0, import_path.join)(y, j.name);
    try {
      if ((await R.stat(O)).mtime < g) {
        if (await oe(O)) continue;
        if (await s?.(O)) continue;
        await R.rm(O, { recursive: true, force: true }), k.messages++;
      }
    } catch {
      k.errors++;
    }
  }
  if (l) await T(y, R);
  return k;
}
function Wt() {
  return z("file-history", { removeEmptyBaseDir: false });
}
function $t() {
  return z("session-env");
}
function Ut() {
  return z("tasks");
}
function Yt() {
  return z("uploads");
}
function Gt() {
  let e = import_chunk_bzyb60p0.qI.get()?.folder, r = Bv();
  return z("dev-mods", { exclude: /* @__PURE__ */ new Set([(0, import_chunk_f9x2f6cx.W)(), ...e === void 0 ? [] : [(0, import_path.basename)(e)]]), skipIf: (s) => Xe(s, r, zt), removeEmptyBaseDir: false });
}
var zt = 3, Kt = 2;
async function Xt() {
  let e = (0, import_chunk_ha393e1n.Dwt)(), r = await (0, import_chunk_ha393e1n.upe)(e).catch(() => null);
  if (!r) return _();
  return z(import_chunk_ha393e1n.hfs, { removeEmptyBaseDir: false, maxAgeDays: Kt, baseDir: e, skipIf: async (s) => !await (0, import_chunk_ha393e1n.jfo)(s, r) });
}
async function Jt() {
  let e = (0, import_chunk_ha393e1n.lsn)(), r = e === null ? null : await (0, import_chunk_ha393e1n.upe)(e).catch(() => null);
  if (e === null || !r) return _();
  if (!import_chunk_ha393e1n.Ue.isHostedWorkerContainer()) return _();
  return z("rm-guard", { removeEmptyBaseDir: false, baseDir: e, skipIf: async (s) => {
    let o = await (0, import_chunk_ha393e1n.upe)(e);
    return o?.ino !== r.ino || o.dev !== r.dev || await (0, import_chunk_ha393e1n.upe)(s) === null || await L.realpath(s) !== (0, import_path.join)(await L.realpath((0, import_path.dirname)(e)), (0, import_path.basename)(e), (0, import_path.basename)(s));
  } });
}
async function Zt() {
  try {
    return await (0, import_chunk_6s9tac84.Lrl)();
  } catch (e) {
    if (bMe(e)) (0, import_chunk_w578pjby.t)(`[cleanup] the sweep of seed-admin did not run: ${e.code}`, { level: "warn" });
    else (0, import_chunk_k449cc64.i)(e);
    return { removed: 0, errors: 1, held: 0, refused: "no" };
  }
}
async function qt(e) {
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) {
    let o = await Qt(e);
    if (o !== "unaddressed") return o;
  }
  let r = (0, import_chunk_ha393e1n.Lwt)(), s = await (0, import_chunk_ha393e1n.upe)(r).catch(() => null);
  if (!s) return _();
  return z(import_chunk_ha393e1n.vfs, { removeEmptyBaseDir: false, maxAgeDays: import_chunk_ha393e1n.Rxi, baseDir: r, skipIf: async (o) => {
    let l = await (0, import_chunk_ha393e1n.upe)(r);
    return l?.ino !== s.ino || l.dev !== s.dev || await (0, import_chunk_ha393e1n.upe)(o) === null || await L.realpath(o) !== (0, import_path.join)(await L.realpath((0, import_path.dirname)(r)), import_chunk_ha393e1n.vfs, (0, import_path.basename)(o));
  } });
}
async function Qt(e) {
  let r = _(), s = (0, import_chunk_hkvzj051.eUl)(), o = await e.scopeKind(s);
  if (!o.ok) return o.error.code === "InvalidArgument" ? "unaddressed" : r;
  if (o.value.kind !== "directory" || o.value.object === void 0 || o.value.owner === "other") return r;
  let l = Bv(import_chunk_ha393e1n.Rxi);
  if (l === null) return r;
  let u = await e.deleteScope(s, { olderThanMs: Math.max(0, Date.now() - l.getTime()) });
  if (!u.ok) return r;
  return r.messages += u.value.deleted, r.errors += u.value.failed ?? 0, r;
}
function Vt() {
  return F((0, import_chunk_qanr9g0g.ggr)(), "", false, import_chunk_f7aa6t06.ruo);
}
async function er(e) {
  return H(H(await z(import_chunk_mgntjepj.pCo, { refuseRedirectedRoot: true, storageV5: e }), await z(import_chunk_mgntjepj.fAl, { refuseRedirectedRoot: true, storageV5: e })), await Ye(import_chunk_mgntjepj.Ij, e));
}
async function Ye(e, r) {
  let s = _();
  if (Bv() === null) return s;
  let o = (0, import_chunk_2gtmjt3y.Ze)(), l = (0, import_path.join)(o, e);
  if (await (0, import_chunk_bzyb60p0.JJ)(l, o, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: r }) !== "real") return s;
  let m;
  try {
    m = await (0, import_chunk_w578pjby.le)().readdir(l);
  } catch {
    return s;
  }
  for (let w of m) {
    if (!w.isDirectory() || !(0, import_chunk_mgntjepj.$Tt)(w.name)) continue;
    s = H(s, await z((0, import_path.join)(e, "*", import_chunk_mgntjepj.qwe), { baseDir: (0, import_path.join)(l, w.name, import_chunk_mgntjepj.qwe), refuseRedirectedRoot: true, storageV5: r }));
  }
  return s;
}
async function Be(e) {
  let r = _(), s = (0, import_chunk_2gtmjt3y.Ze)();
  for (let o of [import_chunk_mgntjepj.UTt, import_chunk_mgntjepj.lNe]) {
    let l = (0, import_path.join)(s, o);
    if (await (0, import_chunk_bzyb60p0.JJ)(l, s, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: o }, { storageV5: e }) === "real") {
      let m = await (0, import_chunk_bzyb60p0.AYo)(l);
      r = H(r, { ..._(), messages: m.removed, errors: m.errors });
    }
  }
  return r;
}
function tr(e) {
  return z(import_chunk_mgntjepj.UTt, { refuseRedirectedRoot: true, storageV5: e });
}
async function Ge(e, r, s, o) {
  let l = _(), u = Bv();
  if (u === null) return l;
  let m = await (0, import_chunk_wj4me9k5.LU)().catch((C) => {
    (0, import_chunk_k449cc64.i)(C);
    return;
  });
  if (m === void 0) return l;
  let w = m ?? (0, import_chunk_wj4me9k5.gWn)(), g = (0, import_chunk_2gtmjt3y.Ze)(), k = (0, import_path.join)(g, e);
  if (await (0, import_chunk_bzyb60p0.JJ)(k, g, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: o }) !== "real") return l;
  let D = (0, import_chunk_w578pjby.le)(), y;
  try {
    y = await D.readdir(k);
  } catch {
    return l;
  }
  for (let C of y) {
    if (!C.isDirectory() || !(0, import_chunk_mgntjepj.$Tt)(C.name) || C.name === w || await (0, import_chunk_bzyb60p0.c_t)(k, C.name) === "unmarked") continue;
    let j = (0, import_path.join)(k, C.name), O;
    try {
      O = (await D.lstat((0, import_path.join)(j, import_chunk_mgntjepj.BV)).catch(() => D.lstat(j))).mtime;
    } catch {
      continue;
    }
    if (O >= u) {
      l.filesRetainedFresh++;
      continue;
    }
    if (l.filesPastCutoff++, await (0, import_chunk_bzyb60p0.HUe)({ dir: j, trashRoot: (0, import_path.join)(g, r), configHome: g, failureEvent: s, storageV5: o })) await (0, import_chunk_bzyb60p0.ixn)(k, C.name).catch(() => {
    }), l.messages++;
    else l.errors++;
  }
  return l;
}
function rr(e) {
  return Ge(import_chunk_mgntjepj.DN, import_chunk_mgntjepj.lNe, "plugins_sync_trash_move_failed", e);
}
function nr(e) {
  return Ge(import_chunk_mgntjepj.Ij, import_chunk_mgntjepj.UTt, "skills_sync_trash_move_failed", e);
}
function sr(e) {
  return z(import_chunk_mgntjepj.lNe, { refuseRedirectedRoot: true, storageV5: e });
}
async function ir(e) {
  return H(await z(import_chunk_mgntjepj.pAl, { refuseRedirectedRoot: true, storageV5: e }), await Ye(import_chunk_mgntjepj.DN, e));
}
async function or() {
  let e = (0, import_path.join)((0, import_chunk_wj4me9k5.Mc)(), "store"), r = await F(e, (o) => o.endsWith(".json") || o.includes(".json.tmp."), false), s = Bv();
  if (s !== null) await Fe(e, s, (0, import_chunk_w578pjby.le)(), r);
  return r;
}
async function ar() {
  let e = _(), r = Bv(), s = fe("cleanupPeriodDays", import_chunk_ha393e1n.GDe);
  if (r === null || s === null) return e;
  return await Fe((0, import_chunk_sqvd6je2.owe)(), new Date(Math.min(r.getTime(), s.getTime())), (0, import_chunk_w578pjby.le)(), e, import_chunk_sqvd6je2.WEr, /^(?:[0-9a-f]{20}|[0-9a-f]{16}\.metadata\.json(?:\.tmp\..*)?|t-[0-9a-f]{8})$/), e;
}
function cr() {
  return F((0, import_chunk_wj4me9k5.Mc)(), (e) => (0, import_chunk_wj4me9k5.uko)(e) || (0, import_chunk_wj4me9k5.fko)(e), false);
}
async function lr() {
  let e = _(), r = Bv(), s = fe("cleanupPeriodDays", import_chunk_ha393e1n.GDe);
  if (r === null || s === null) return e;
  let o = Math.min(r.getTime(), s.getTime()), l = (0, import_chunk_yg9g0473.Gls)(), u = (0, import_chunk_w578pjby.le)(), m;
  try {
    m = await u.readdir(l);
  } catch {
    return e;
  }
  for (let w of m) {
    let g = (0, import_chunk_yg9g0473.gEi)(w.name), k = (0, import_path.join)(l, w.name);
    if (g === void 0 || !(g < o) || await De(w, k, u).catch(() => "other") !== "directory") continue;
    try {
      await (0, import_chunk_c203g5kd.Za)(k), e.messages++;
    } catch {
      e.errors++;
    }
  }
  return await T(l, u), e;
}
async function ur() {
  return _();
}
async function fr() {
  let e = Bv(), r = _();
  if (e === null) return r;
  let s = (0, import_chunk_w578pjby.le)(), o = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), import_chunk_nnnbdrqx.ZXt), l;
  try {
    l = await s.readdir(o);
  } catch {
    return r;
  }
  for (let u of l) {
    if (!u.isDirectory()) continue;
    let m = (0, import_path.join)(o, u.name);
    if (await oe(m)) continue;
    let w = (await (0, import_chunk_nnnbdrqx.G1a)(m))?.cacheKey ?? null, g;
    try {
      g = await s.readdir(m);
    } catch {
      r.errors++;
      continue;
    }
    for (let k of g) {
      if (!k.isDirectory() || k.name === w) continue;
      let R = (0, import_path.join)(m, k.name);
      try {
        if ((await s.stat(R)).mtime < e) await s.rm(R, { recursive: true, force: true }), r.messages++;
      } catch {
        r.errors++;
      }
    }
    try {
      if ((await s.stat(m)).mtime < e) await s.rm(m, { recursive: true, force: true }), r.messages++;
    } catch {
      r.errors++;
    }
  }
  return await T(o, s), r;
}
async function dr() {
  let e = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "usage-data"), r = await F((0, import_path.join)(e, "facets"), (s) => s.endsWith(".json") || s.includes(".json.tmp."));
  return r = H(r, await F((0, import_path.join)(e, "session-meta"), (s) => s.endsWith(".json") || s.includes(".json.tmp."))), r = H(r, await F(e, (s) => s.endsWith(".html") || (0, import_chunk_hkvzj051.J$l)(s), false)), await T(e, (0, import_chunk_w578pjby.le)()), r;
}
async function mr() {
  let e = Bv(), r = _();
  if (e === null) return r;
  let s = (0, import_chunk_w578pjby.le)(), o;
  try {
    o = (0, import_chunk_8nvd6fqx.ih)();
  } catch {
    return r;
  }
  let l;
  try {
    l = await s.readdir(o);
  } catch {
    return r;
  }
  for (let u of l) {
    let m = u.name.startsWith("cc-transcript-") && u.name.endsWith(".txt"), w = u.name.startsWith(import_chunk_p3d6wgn7.Hpo) && u.name.endsWith(".md"), g = u.name.startsWith(import_chunk_bzyb60p0.EJo) && (u.name.endsWith(".json") || u.name.endsWith(".diff")), k = false;
    if (!u.isFile() || !m && !w && !g && true) continue;
    try {
      if (await N((0, import_path.join)(o, u.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function pr() {
  let e = _(), r = Bv(import_chunk_ha393e1n.$al);
  if (r === null) return e;
  let s = (0, import_chunk_w578pjby.le)(), o;
  try {
    if (o = (0, import_chunk_8nvd6fqx.ih)(), !(await s.lstat(o)).isDirectory()) return e;
  } catch {
    return e;
  }
  let l = (0, import_path.join)(o, "speculation"), u;
  try {
    u = await s.lstat(l);
  } catch {
    return e;
  }
  if (!u.isDirectory()) return e;
  try {
    if ((await de(l, s, { requireCompleteWalk: true }) ?? u.mtimeMs) < r.getTime()) return await s.rm(l, { recursive: true, force: true }), e.messages++, e;
  } catch {
    e.errors++;
  }
  return await T(l, s), e;
}
async function hr() {
  let e = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "shares"), r = await z("shares");
  return r = H(r, await F(e, (s) => s.endsWith(".zip") || s.includes(".zip.tmp.") && (0, import_chunk_q7qjcthc.R_n)(s), false)), await T(e, (0, import_chunk_w578pjby.le)()), r;
}
async function wr() {
  let e = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "telemetry"), r = await F(e, ".json", false), s = Bv();
  if (s === null) return r;
  let o = (0, import_path.join)(e, "runs"), l = (0, import_chunk_w578pjby.le)();
  if (await re(e, l, r) && await re(o, l, r)) await ye(o, s, l, r, { entryMatcher: (u) => u.endsWith(".json") });
  return await T(e, (0, import_chunk_w578pjby.le)()), r;
}
function gr() {
  return F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "dump-prompts"), ".jsonl", true, import_chunk_ha393e1n.Fal);
}
function yr() {
  return F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "shell-snapshots"), ".sh", false);
}
var Sr = /\.deleted-[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;
async function Dr() {
  let e = Bv(), r = _();
  if (e === null) return r;
  let s = (0, import_chunk_w578pjby.le)(), o = (0, import_chunk_2gtmjt3y.IPt)();
  for (let l of await se(o, s, r)) {
    let u = (0, import_path.join)(o, l.name);
    if (await be(l, u, s, r) !== "directory") continue;
    if (Sr.test(l.name)) {
      try {
        await s.rm(u, { recursive: true, force: true }), r.messages++;
      } catch {
        r.errors++;
      }
      continue;
    }
    let m = (0, import_path.join)(u, "inboxes");
    if (await re(m, s, r)) {
      for (let w of await se(m, s, r)) {
        let g = (0, import_path.join)(m, w.name);
        if (!w.name.endsWith(".json") || await be(w, g, s, r) !== "file") continue;
        try {
          if (await N(g, e, s, r)) r.messages++;
        } catch {
          r.errors++;
        }
      }
      await T(m, s);
    }
    await T(u, s);
  }
  return r;
}
async function Rr(e, r = (0, import_os.tmpdir)()) {
  let s = _(), o = (0, import_chunk_w578pjby.le)(), l;
  try {
    l = await o.readdir(r);
  } catch (u) {
    if (!(0, import_chunk_jv7av99m.J)(u)) s.errors++;
    return s;
  }
  for (let u of l) {
    if (!u.name.startsWith("cc-daemon-")) continue;
    let m = u.name.slice(10);
    if (/^\d+$/.test(m) || /^[0-9a-f]{16}$/.test(m)) continue;
    let w = (0, import_path.join)(r, u.name);
    try {
      let g = await (0, import_chunk_ha393e1n.upe)(w);
      if (g === null) continue;
      let k = await o.readdir(w);
      if (k.length !== 1 || k[0].name !== "stderr.log") continue;
      let R = (0, import_path.join)(w, "stderr.log"), D = await o.lstat(R);
      if (!D.isFile()) continue;
      if (!(D.mtime < e)) {
        s.filesRetainedFresh++;
        continue;
      }
      let y = await (0, import_chunk_ha393e1n.upe)(w);
      if (y === null || y.dev !== g.dev || y.ino !== g.ino) continue;
      try {
        await o.unlink(R);
      } catch (C) {
        if ((0, import_chunk_jv7av99m.J)(C)) continue;
        throw s.filesPastCutoff++, C;
      }
      s.messages++, await T(w, o);
    } catch (g) {
      if (!(0, import_chunk_jv7av99m.J)(g)) s.errors++;
    }
  }
  return s;
}
var bi = new RegExp(`^${import_chunk_8nvd6fqx.cMr}[A-Za-z0-9]{6}$`);
var kr = new RegExp(`^${import_chunk_8nvd6fqx.uMr}[A-Za-z0-9]{6}$`);
async function Pr(e = Bv(), r = (0, import_chunk_8nvd6fqx.Fp)()) {
  return Te(e, r, kr);
}
var _r = new RegExp(`^${import_chunk_8nvd6fqx.fMr}(?:[A-Za-z0-9]{6}|\\d+)$`);
async function Er(e = Bv(), r = (0, import_os.tmpdir)()) {
  return Te(e, r, _r);
}
var Cr = new RegExp(`^${import_chunk_8nvd6fqx.pMr}[0-9a-f]{32}$`);
async function vr(e = Bv(), r = (0, import_chunk_8nvd6fqx.Fp)()) {
  return Te(e, r, Cr);
}
async function Te(e, r, s) {
  let o = _();
  if (e === null) return o;
  let l = (0, import_chunk_w578pjby.le)(), u;
  try {
    u = await l.readdir(r);
  } catch (m) {
    if (!(0, import_chunk_jv7av99m.J)(m)) o.errors++;
    return o;
  }
  for (let m of u) {
    if (!s.test(m.name)) continue;
    let w = (0, import_path.join)(r, m.name);
    try {
      let g = await (0, import_chunk_ha393e1n.upe)(w);
      if (g === null) continue;
      if (!((await de(w, l, { requireCompleteWalk: true }) ?? g.mtimeMs) < e.getTime())) {
        o.filesRetainedFresh++;
        continue;
      }
      let R = await (0, import_chunk_ha393e1n.upe)(w);
      if (R === null || R.dev !== g.dev || R.ino !== g.ino) continue;
      await l.rm(w, { recursive: true, force: true }), o.messages++;
    } catch (g) {
      if (!(0, import_chunk_jv7av99m.J)(g)) o.errors++;
    }
  }
  return o;
}
async function Or(e, r) {
  let s = (0, import_chunk_2gtmjt3y.Ze)(), o = await F((0, import_path.join)(s, "jobs", "settled"), ".json");
  o = H(o, await F((0, import_path.join)(s, "daemon", "dispatch", "rejected"), ".json")), o = H(o, await F((0, import_path.join)(s, "daemon", "dispatch"), ".json", false)), o = H(o, await F((0, import_path.join)(s, "daemon", "auth"), ".json"));
  for (let k of ["host-managed", "gateway-routed", "sign-in"]) try {
    let R = (0, import_path.join)(s, "daemon", k), D = (0, import_chunk_w578pjby.le)(), y = Bv();
    if (y) for (let C of await D.readdir(R)) {
      if (!C.isFile()) continue;
      try {
        await D.lstat((0, import_path.join)(s, "jobs", C.name));
      } catch (j) {
        if (!(0, import_chunk_jv7av99m.J)(j)) {
          o.errors++;
          continue;
        }
        try {
          if (await N((0, import_path.join)(R, C.name), y, D, o)) o.messages++;
        } catch (O) {
          if (!(0, import_chunk_jv7av99m.J)(O)) o.errors++;
        }
      }
    }
  } catch (R) {
    if (!(0, import_chunk_jv7av99m.J)(R)) o.errors++;
  }
  let l = bei(), u = Bv(), m = /* @__PURE__ */ new Set();
  if (!l) for (let k of await (0, import_chunk_9e5mdyfk.S5e)(e)) m.add(k);
  let w = false, g = false;
  try {
    let k = (0, import_path.join)(s, "daemon", "roster.json"), R = await (0, import_chunk_w578pjby.le)().lstat(k);
    if (!R.isFile() || R.size > 8388608) throw Error("not a regular file");
    let D = await (0, import_chunk_w578pjby.le)().readFile(k, { encoding: "utf-8" }), y = (0, import_chunk_w578pjby.te)(D);
    if (y !== null && typeof y === "object" && "workers" in y) {
      let C = y.workers;
      if (C !== null && typeof C === "object") {
        w = true;
        for (let [j, O] of Object.entries(C)) if (O !== null && typeof O === "object" && "pid" in O && typeof O.pid === "number" && (0, import_chunk_v6cdm8tp.Rd)(O.pid) && await (0, import_chunk_rb36kwbn.GC)(O.pid, "procStart" in O && typeof O.procStart === "string" ? O.procStart : void 0)) m.add(j), g = true;
      }
    }
  } catch {
  }
  if (o = H(o, await z("jobs", { exclude: m, skipIf: async (k) => {
    let R;
    try {
      R = await (0, import_chunk_9e5mdyfk.Ypr)(k, e);
    } catch (D) {
      throw (0, import_chunk_k449cc64.i)(D), (0, import_chunk_w578pjby.t)(`[cleanup] jobs/${(0, import_path.basename)(k)}: job state read threw \u2014 keeping the folder (${(0, import_chunk_jv7av99m.d)(D)})`, { level: "error" }), D;
    }
    if (!l && (R === null || !(0, import_chunk_9e5mdyfk.Wd)(R))) return true;
    if (R?.worktreePath && (0, import_chunk_9e5mdyfk.Wd)(R) && u) {
      let D = await (0, import_chunk_bzyb60p0.zui)({ worktreePath: R.worktreePath, worktreeBranch: R.worktreeBranch, originCwd: R.originCwd, hookBased: R.worktreeHookBased || R.worktreeCopy?.madeBy === "mod", cutoff: u, ...{} }).catch((y) => ((0, import_chunk_k449cc64.i)(y), false));
    }
    return false;
  } })), u !== null) {
    o = H(o, await Rr(u));
    let k = (0, import_chunk_w578pjby.le)();
    for (let D of [(0, import_path.join)(s, "daemon.log"), (0, import_path.join)(s, "daemon.log.1")]) try {
      if (await N(D, u, k, o)) o.messages++;
    } catch (y) {
      if (!(0, import_chunk_jv7av99m.J)(y)) o.errors++;
    }
    let R = (0, import_path.join)(s, "daemon", "roster.json");
    try {
      if ((await k.lstat(R)).mtime < u && !g && (w || l)) await k.unlink(R), o.messages++;
    } catch (D) {
      if (!(0, import_chunk_jv7av99m.J)(D)) o.errors++;
    }
    for (let D of await se((0, import_path.join)(s, "daemon"), k, o)) {
      if (!D.isFile() || !D.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await N((0, import_path.join)(s, "daemon", D.name), u, k, o)) o.messages++;
      } catch {
        o.errors++;
      }
    }
  }
  return await (0, import_chunk_gzt0mgvc.P9r)(), o;
}
async function br() {
  let e = Bv();
  if (e !== null) await (0, import_chunk_865at33z.A3i)(e);
  return F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "backups"), "", false, void 0, e);
}
async function Ir() {
  let e = Bv(), r = _();
  if (e === null) return r;
  let s = (0, import_chunk_w578pjby.le)(), o = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "debug"), l;
  try {
    l = await s.readdir(o);
  } catch {
    return r;
  }
  for (let u of l) {
    if (u.name === "latest" || !u.isFile()) continue;
    try {
      if (await N((0, import_path.join)(o, u.name), e, s, r)) r.messages++;
    } catch {
      r.errors++;
    }
  }
  return r;
}
async function Fr() {
  let e = (0, import_chunk_ha393e1n.aUt)(), r = await (0, import_chunk_ha393e1n.upe)(e).catch(() => null);
  if (!r) return _();
  return F(e, "", false, void 0, void 0, () => (0, import_chunk_ha393e1n.upe)(e).then((s) => s?.ino !== r.ino || s.dev !== r.dev));
}
async function Tr() {
  return F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "feedback-bundles"), ".zip");
}
async function Ar() {
  return F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "feedback", "drafts"), (e) => e.endsWith(".json") || e.includes(".json.tmp."), true, 30);
}
async function Nr() {
  let e = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "remote-control", "fork-seeds"), r = await F(e, (l) => l.endsWith(".json") || l.includes(".json.tmp."));
  if (Bv() === null) return r;
  let s = /* @__PURE__ */ new Date(), o = (0, import_chunk_w578pjby.le)();
  for (let l of await se(e, o, r)) try {
    let u = (0, import_path.join)(e, l.name);
    if (l.isFile() && (await o.stat(u)).mtime > s) await L.lutimes(u, s, s);
  } catch {
    r.errors++;
  }
  return r;
}
async function xr() {
  let e = await F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "traces"), ".json"), r = await F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "startup-perf"), ".txt"), s = await F((0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "startup-perf"), ".json");
  return H(H(e, r), s);
}
var jr = 864e5, ze = import_chunk_81q3wevd.KAi;
function Mr(e) {
  if (e === void 0) return (0, import_chunk_78g0060s.S)("none");
  if (!ze.has(e)) return (0, import_chunk_78g0060s.S)("other");
  return e === "ELOOP" ? (0, import_chunk_78g0060s.S)("ELOOP") : e === "EISDIR" ? (0, import_chunk_78g0060s.S)("EISDIR") : (0, import_chunk_78g0060s.S)("ENXIO");
}
function Lr(e) {
  return e.code === "Failed" && e.telemetryCode !== void 0 && ze.has(e.telemetryCode);
}
function Br(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) === "EISDIR" ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing" : `could not remove it (${e.error.code})`;
}
async function wei(e) {
  let r = await e.statMeta(import_chunk_hkvzj051.at.state("last-cleanup"));
  if (r.ok || r.error.code === "NotFound" || !Lr(r.error)) return;
  (0, import_chunk_y53wbr8a.a)("tengu_cleanup_throttle_marker", { marker: (0, import_chunk_78g0060s.S)("last-cleanup"), verdict: (0, import_chunk_78g0060s.S)("not_regular_rerun"), code: (0, import_chunk_78g0060s.f)(r.error.code), errno: Mr("telemetryCode" in r.error ? r.error.telemetryCode : void 0) });
  let s = await e.delete(import_chunk_hkvzj051.at.state("last-cleanup"));
  (0, import_chunk_w578pjby.t)(`.last-cleanup: sentinel is not a regular file (${(0, import_chunk_7n1spq36.un)(r.error)}) \u2014 ${Br(s)}; rewriting`, { level: "warn" });
}
var Hr = [".npm-cache-cleanup", ".version-cleanup", ".last-cleanup", ".deep-link-register-failed"];
async function kei(e, r) {
  if (!r.claimStagingFilesRemoval()) return;
  await Ke(e, Hr);
}
async function Wr(e) {
  await Ke(e, [import_chunk_xfj2cwfv.t5i]);
}
async function Ke(e, r) {
  let s;
  try {
    s = await L.readdir(e);
  } catch {
    return;
  }
  let o = Date.now() - jr;
  await Promise.all(s.filter((l) => r.some((u) => (0, import_chunk_q7qjcthc.NM)(l, u))).map(async (l) => {
    let u = (0, import_path.join)(e, l);
    try {
      let m = await L.lstat(u);
      if (m.isFile() && m.mtimeMs < o) await L.unlink(u);
    } catch {
    }
  }));
}
async function $r() {
  let e = Bv(), r = _();
  if (e === null) return r;
  let s = (0, import_chunk_w578pjby.le)();
  for (let o of import_chunk_ha393e1n.Cfs) {
    let l = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), o), u = await s.lstat(l).catch((g) => {
      if (!(0, import_chunk_jv7av99m.J)(g)) r.errors++;
      return null;
    });
    if (u === null || !u.isDirectory()) continue;
    let m;
    try {
      m = await s.readdir(l);
    } catch {
      continue;
    }
    let w = false;
    for (let g of m) {
      let k = (0, import_path.join)(l, g.name);
      try {
        if (!((await s.stat(k)).mtime < e)) continue;
        let D = await s.lstat(l).catch(() => null);
        if (D === null || !D.isDirectory() || D.dev !== u.dev || D.ino !== u.ino) {
          w = true;
          break;
        }
        if (g.isDirectory()) await s.rm(k, { recursive: true, force: true });
        else await s.unlink(k);
        r.messages++;
      } catch {
        r.errors++;
      }
    }
    if (!w) await T(l, s);
  }
  return r;
}
async function Ur() {
  let e = _(), r = Bv();
  if (r === null) return e;
  let s = (0, import_path.join)((0, import_chunk_865at33z.ZCt)(), "projects"), o = (0, import_chunk_w578pjby.le)(), l = await o.lstat(s).catch((m) => {
    if (!(0, import_chunk_jv7av99m.J)(m)) e.errors++;
    return null;
  });
  if (l === null || !l.isDirectory()) return e;
  let u = await o.readdir(s).catch((m) => {
    if (!(0, import_chunk_jv7av99m.J)(m)) e.errors++;
    return [];
  });
  for (let m of u) {
    if (!m.isDirectory()) continue;
    let w = (0, import_path.join)(s, m.name, "tiny_memory"), g = await o.lstat(w).catch((k) => {
      if (!(0, import_chunk_jv7av99m.J)(k)) e.errors++;
      return null;
    });
    if (g === null || !g.isDirectory()) continue;
    await ye(w, r, o, e);
  }
  return e;
}
async function Yr() {
  let r = _(), s = Bv();
  if (s === null) return r;
  let o = (0, import_path.join)((0, import_chunk_865at33z.ZCt)(), "projects"), l = (0, import_chunk_w578pjby.le)(), u = await l.readdir(o).catch(() => []);
  for (let m of u) {
    if (!m.isDirectory()) continue;
    r = H(r, await He((0, import_path.join)(o, m.name, "memory", "proposals"), s, l));
  }
  return H(r, await He((0, import_path.join)((0, import_chunk_865at33z.wc)(), "proposals"), s, l));
}
var Gr = "skill-proposal";
async function He(e, r, s) {
  let o = _();
  try {
    if ((await s.lstat(e)).isSymbolicLink()) return o;
  } catch (u) {
    if (!(0, import_chunk_jv7av99m.fn)(u)) o.errors++;
    return o;
  }
  let l = await s.readdir(e).catch((u) => {
    if (!(0, import_chunk_jv7av99m.J)(u)) o.errors++;
    return [];
  });
  for (let u of l) {
    if (!u.isFile() || !u.name.endsWith(".md")) continue;
    let m = (0, import_path.join)(e, u.name);
    try {
      let { content: w, mtimeMs: g } = await (0, import_chunk_n74jpb9a.L9e)(m, 0, import_chunk_p1ewvgeh.u2e, import_chunk_p1ewvgeh.vle, void 0, { truncateOnByteLimit: true });
      if (!(g < r.getTime())) continue;
      if ((0, import_chunk_p1ewvgeh.zd)(w, m).frontmatter.type !== Gr) continue;
      await s.unlink(m), o.messages++;
    } catch (w) {
      if (!(0, import_chunk_jv7av99m.J)(w)) o.errors++;
    }
  }
  return await T(e, s), o;
}
async function Eei(e) {
  var _stack = [];
  try {
    await xe();
    let r = await Zt(), s = { seedAdminRemoved: r.removed, seedAdminErrors: r.errors, seedAdminHeld: r.held, seedAdminRefused: (0, import_chunk_78g0060s.f)(r.refused) }, o = await Ce(), l = o === "asked" ? {} : { hooksUnasked: (0, import_chunk_78g0060s.f)(o) }, u = await R9r(e), m = (0, import_chunk_2yx6c1y2.zr)()?.cleanupPeriodDays;
    if (u !== null) {
      if ((0, import_chunk_y53wbr8a.a)("tengu_retention_sweep", { skipped: true, skipReason: (0, import_chunk_78g0060s.f)(u), ...s, ...l }), (0, import_chunk_xfr8663h.Cji)({ result: "skipped", skipReason: u, periodDays: m ?? import_chunk_ha393e1n.GDe, usedDefault: m === void 0 }), u !== "diskless") await Be(e);
      return u;
    }
    (0, import_chunk_y53wbr8a.a)("tengu_retention_sweep", { phase: (0, import_chunk_78g0060s.S)("start"), ...s, ...l });
    let w = void 0, g, k = () => g ??= Rt(w);
    const R = __using(_stack, { [Symbol.asyncDispose]: () => k().then(() => {
    }, () => {
    }) }, true);
    await yt();
    let D = await Pt(e), y = [D];
    y.push(await Ht(e)), y.push(await Wt()), y.push(await $t()), y.push(await Ut()), y.push(await Yt()), y.push(await Gt()), y.push(await qt(e)), y.push(await Fr()), y.push(await Xt()), y.push(await Jt()), y.push(await Vt()), y.push(await dr()), y.push(await er(e)), y.push(await ir(e)), y.push(await nr(e)), y.push(await rr(e)), y.push(await tr(e)), y.push(await sr(e)), y.push(await or()), y.push(await ar()), y.push(await cr()), y.push(await lr()), y.push(await ur()), y.push(await fr()), y.push(await mr()), y.push(await Pr()), y.push(await Er()), y.push(await vr()), y.push(await pr()), y.push(await hr()), y.push(await wr()), y.push(await Ir()), y.push(await Tr()), y.push(await Ar()), y.push(await Nr()), y.push(await xr()), y.push(await gr()), y.push(await yr()), y.push(await Dr()), y.push(await Or(e, w)), y.push(await br()), y.push(await _t()), y.push(await Ot()), y.push(await bt()), y.push(await It()), y.push(await Ft()), y.push(await Tt()), y.push(await At()), y.push(await Nt()), y.push(await Bt()), y.push(await Et()), y.push(await Ct()), y.push(await vt()), y.push(await $r()), y.push(await Ur()), y.push(await Yr());
    let C = { entriesPruned: 0, errors: 0 }, j = Bv();
    if (j !== null) {
      await (0, import_chunk_bq31aqv6.$el)(j, e);
      let I = await (0, import_chunk_feazds52._Na)(j);
      y.push({ ..._(), messages: I.removed, errors: I.errors });
      let M = await (0, import_chunk_bzyb60p0.Gui)(j, w, false);
      if (M > 0) (0, import_chunk_y53wbr8a.a)("tengu_worktree_cleanup", { removed: M });
      let X = (0, import_chunk_hazyxdac.qde)();
      if (X !== null) await Wr(X);
      if (await Mt((0, import_chunk_2gtmjt3y.Ze)(), j), (0, import_chunk_2zeyvjwb.uo)("hipaa") && (0, import_chunk_865at33z.b)("tengu_hipaa_history_retention_prune", true)) C = await Lt(j), y.push({ ..._(), errors: C.errors });
    }
    y.push(await Be(e)), y.push(await k());
    let O = y.reduce(H, _());
    (0, import_chunk_y53wbr8a.a)("tengu_retention_sweep", { phase: (0, import_chunk_78g0060s.S)("complete"), skipped: false, transcriptsDeleted: D.transcripts, transcriptsExemptedDesktop: D.transcriptsExemptedDesktop, sessionFilesDeleted: D.messages, artifactsDeleted: O.messages, filesRetainedFresh: O.filesRetainedFresh, filesPastCutoff: O.filesPastCutoff, errors: O.errors, historyEntriesPruned: C.entriesPruned, periodDays: m ?? import_chunk_ha393e1n.GDe, usedDefault: m === void 0 }), (0, import_chunk_xfr8663h.Cji)({ result: "complete", periodDays: m ?? import_chunk_ha393e1n.GDe, usedDefault: m === void 0, transcriptsDeleted: D.transcripts, transcriptsExemptedDesktop: D.transcriptsExemptedDesktop, sessionFilesDeleted: D.messages, artifactsDeleted: O.messages, filesRetainedFresh: O.filesRetainedFresh, filesPastCutoff: O.filesPastCutoff, errorCount: O.errors, historyEntriesPruned: C.entriesPruned });
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function Xe(e, r, s) {
  if (r === null) return true;
  let o = await L.readdir(e, { withFileTypes: true }).catch(() => []);
  for (let l of o) {
    let u = (0, import_path.join)(e, l.name), m = await L.lstat(u).catch(() => null);
    if (m !== null && m.mtime > r) return true;
    if (s > 1 && l.isDirectory() && await Xe(u, r, s - 1)) return true;
  }
  return false;
}
