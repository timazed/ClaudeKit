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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
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
var chunk_tjr3fy8z_exports = {};
__export(chunk_tjr3fy8z_exports, {
  Frr: () => Frr,
  LXt: () => LXt,
  Mtt: () => Mtt,
  PXl: () => PXl,
  Pgt: () => Pgt,
  S5o: () => S5o,
  _5o: () => _5o,
  _An: () => _An,
  _ti: () => _ti,
  b5o: () => b5o,
  g5o: () => g5o,
  gti: () => gti,
  hti: () => hti,
  mti: () => mti,
  pti: () => pti,
  y5o: () => y5o,
  yAn: () => yAn
});
module.exports = __toCommonJS(chunk_tjr3fy8z_exports);
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_a6xqvbh2 = require("/$bunfs/root/chunk-a6xqvbh2.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_wm6xsfs2 = require("/$bunfs/root/chunk-wm6xsfs2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_mzajx23m = require("/$bunfs/root/chunk-mzajx23m.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_7ca0319p = require("/$bunfs/root/chunk-7ca0319p.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var gt = { min: 300, max: 5e3 };
function In() {
  if (!(0, import_chunk_f9x2f6cx.st)()) return 0;
  let e = (0, import_chunk_865at33z.b)("tengu_tranquil_locket", 0), o = typeof e === "number" ? Math.round(e) : 0;
  return o >= gt.min ? Math.min(o, gt.max) : 0;
}
function Nn() {
  return In() > 0 && (0, import_chunk_865at33z.b)("tengu_reflective_goblet", false) === true;
}
function bt(e, o) {
  if (e.readHasEventsPool === true || e.eventsPoolGaveServerError === true || !Nn() || (0, import_chunk_3jjr3wje.Yde)(o) !== void 0) return;
  let r = (0, import_chunk_3jjr3wje.wl)({ url: o });
  if (r.proxy !== void 0 || r.keepalive !== void 0) return;
  let n = (0, import_chunk_3jjr3wje.XVt)("analytics");
  if (n !== void 0) e.readHasEventsPool = true;
  return n;
}
var co = 600, mo = 50;
function _o(e) {
  e.abort();
}
function ho(e, o) {
  try {
    let r = (0, import_chunk_865at33z.b)("tengu_jolly_bee", 0), n = typeof r === "number" ? Math.round(r) : 0;
    if (!(n > 0)) return true;
    let s = Math.min(n, co) * 1e3, _ = performance.now(), a = e.secondRequestAt?.[o];
    if (a !== void 0 && _ - a < s) return nn(e).held++, false;
    return e.secondRequestAt = { ...e.secondRequestAt, [o]: _ }, true;
  } catch {
    return false;
  }
}
function nn(e) {
  return e.secondAsksSinceRow ??= { reads: 0, throughEventsPool: 0, eventsPoolThrew: 0, eventsPoolAborted: 0, sentAgain: 0, served: 0, held: 0 };
}
function yt(e, o) {
  let r = false;
  return o.addEventListener("abort", () => {
    if (!r) r = true, nn(e).eventsPoolAborted++, e.eventsPoolAbortedAt = performance.now();
  }, { once: true }), () => {
    r = true;
  };
}
function Ct(e, o, r, n, s) {
  let { promise: _, resolve: a, reject: y } = Promise.withResolvers(), c = [new AbortController(), new AbortController()], A = [void 0, void 0], M = 0, d = false, p = false, g = 0, T = (B) => {
    p = true, clearTimeout(x);
    let X = B === 0 ? 1 : 0, P = A[X];
    if (P !== void 0 && "response" in P) (0, import_chunk_7ca0319p.Yj)(P.response, { timeoutMs: import_chunk_7ca0319p.VXe });
    else {
      let O = X === 1 ? g + mo - performance.now() : 0;
      if (d && !r.aborted && O > 0) setTimeout(_o, O, c[X]);
      else c[X].abort();
    }
    let h = A[B];
    if (h !== void 0 && "response" in h) {
      if (B === 1 && h.response.status === 200) nn(n).served++;
      a(h.response);
    } else y(h?.thrown);
  }, I = (B) => {
    M++;
    let X = (P) => {
      if (s && B === 0 && "response" in P && (0, import_chunk_3jjr3wje.nut)(P.response.status)) n.eventsPoolGaveServerError = true;
      if (p) return;
      if (M--, A[B] = P, "response" in P && (B === 0 || P.response.status === 200)) T(B);
      else if (s && !d && !r.aborted) clearTimeout(x), nn(n).eventsPoolThrew++, v();
      else if (M === 0) T(!r.aborted && A[1] !== void 0 && "response" in A[1] ? 1 : 0);
    };
    (async () => e(AbortSignal.any([r, c[B].signal]), B === 1))().then((P) => X({ response: P }), (P) => X({ thrown: P }));
  }, v = () => {
    d = true, g = performance.now(), nn(n).sentAgain++, I(1);
  }, x = setTimeout(() => {
    if (!r.aborted && (s || ho(n, "headers"))) v();
  }, o);
  if (nn(n).reads++, s) nn(n).throughEventsPool++;
  return I(0), _;
}
function g5o(e, o) {
  return (0, import_chunk_7fsmgfxx.ut)("/bin/sh", ["-c", e], { cwd: "/", env: { PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin", USER_TYPE: "external", NODE_ENV: "production" }, extendEnv: false, abortSignal: o, stdin: "ignore", stdout: "ignore", stderr: "ignore" }).then((r) => r.exitCode);
}
var wo = /^[\p{L}\p{N}_-]+(?:\.[\p{L}\p{N}_-]*)?$/u;
async function _5o(e) {
  if (e.length === 0) return;
  let o = (0, import_chunk_f9x2f6cx.qEe)();
  if (o === null) return;
  let r = await (0, import_chunk_w2hrk3t1.QF)((0, import_chunk_6mfepmbb.Sut)(), 1).catch(() => "unknown");
  if (typeof r === "string") {
    (0, import_chunk_cqa9hrgx.l)("bridge_attachment_project_folder_link", r);
    return;
  }
  let n = e.filter(({ name: a, path: y }) => wo.test(a) && y.startsWith(o + import_path2.sep)), s = await Mt(n, r.at);
  if (s.includes("EROFS") && await At("rw")) {
    if (s = await Mt(n, r.at), !await At("ro")) s.push("left_writable");
  }
  let _ = n.length < e.length ? "refused" : s[0];
  if (await r.release().catch(() => {
  }), _ === void 0) (0, import_chunk_cqa9hrgx.u)("bridge_attachment_project_folder_link");
  else (0, import_chunk_cqa9hrgx.l)("bridge_attachment_project_folder_link", _);
}
function At(e) {
  let o = (0, import_chunk_vh92d4r0.No)([(0, import_chunk_6mfepmbb.Sut)()]);
  return g5o(`[ "$(findmnt -n -o FSTYPE -M ${o} | tail -n 1)" = tmpfs ] && mount -o remount,${e} ${o}`).then((r) => r === 0);
}
async function Mt(e, o) {
  let r = [];
  for (let { name: n, path: s } of e) await (0, import_promises2.symlink)(s, (0, import_path2.join)(o, n)).catch((_) => {
    if ((0, import_chunk_jv7av99m.w)(_) !== "EEXIST") r.push((0, import_chunk_jv7av99m.Cr)(_) ?? "unknown");
  });
  return r;
}
function kt(e) {
  return e !== void 0 && "takeFetchedAhead" in e;
}
function vt(e) {
  return e !== void 0 && "fetchUpload" in e;
}
function Wn(e) {
  return e !== void 0 && "keepsNoPictures" in e;
}
var Kt = 3e4, pti = 36700160, mti = { startsTurn: 3, noTurn: 2 }, xn = 1e4, Pn = 250, So = 1e3, Fo = 8e3, qt = 25e3, To = 45e3, Eo = 15e3, Io = 1e5;
function Xn(e) {
  if (!(0, import_chunk_f9x2f6cx.st)() && !(0, import_chunk_6e68m1dj.Qp)()) return;
  let o = (0, import_chunk_865at33z.b)(import_chunk_865at33z.Fxl, 0);
  return typeof o === "number" && o > 0 ? e + Math.min(o, 3600) * 1e3 : void 0;
}
function Zn(e) {
  return e !== void 0 && e - performance.now() < 50;
}
var Jn = 16, Po = 3e5, Bo = 20, Oo = 64, Ro = 16;
function kn() {
  return ((0, import_chunk_f9x2f6cx.st)() ? 16 : 64) * 1024 * 1024;
}
var Vt = 3e5, Do = 6e4, St = { min: 15e3, max: Vt }, xo = 3, Lo = "x-served-file-page-count", Wo = "x-served-file-uploaded-by-caller", Uo = "x-served-file-from-connector", $o = "x-served-file-original", Ft = { name: "x-claudeai-chats-answered-by", value: "go" }, Ho = "x-anthropic-attachment-prefetch", Tt = { name: "x-anthropic-attachment-prefetch-seen", value: "1" }, jo = 409, zo = 64, Yo = 3e5, Zt = 32, Go = Zt / 2, Xo = 6e4, Jo = { no_token: "failed_no_token_count", http_status: "failed_http_status_count", too_large: "failed_too_large_count", held_limit: "failed_held_limit_count", stalled: "failed_stalled_count", stopped: "failed_stopped_count", error: "failed_error_count" }, Ko = { override: true, payload: true, disk: true, disabled: false, fallback: false }, qo = { no_token: 1, http_status: 2, too_large: 3, held_limit: 4, stalled: 5, stopped: 6, error: 7 }, Vo = 8, Zo = 9, Qn = 3e3, Qo = 262144, ei = 1568, Et = { png: 150, other: 50 }, ni = { copy_late: 1, copy_not_stored: 2, copy_failed: 3, copy_too_small: 4, copy_unusable: 5, copy_is_original: 6, copy_cut_short: 8 };
function R(e) {
  (0, import_chunk_w578pjby.t)(`[bridge:inbound-attach] ${e}`);
}
async function Ke(e, o, r = false) {
  try {
    let n = await (0, import_promises.lstat)(e);
    if (n.isDirectory()) return "directory";
    if (!n.isFile()) return "other";
    if (!Buffer.isBuffer(o)) {
      if (n.size !== o.size) return "changed";
      if (!r) return "same";
    } else if (n.size !== o.length) return "changed";
  } catch (n) {
    let s = (0, import_chunk_jv7av99m.w)(n);
    if (s === "ENOENT" || s === "ENOTDIR") return "absent";
    return R(`could not look at ${e}: ${n}`), "unknown";
  }
  if (!Buffer.isBuffer(o)) return await (0, import_chunk_wm6xsfs2.Htt)(e, o.size) === o.sha256 ? "same" : "changed";
  return (await (0, import_chunk_qanr9g0g.rAe)(e, o.length))?.equals(o) ? "same" : "changed";
}
var It = 3, Pt = 64;
async function Un(e, o, r, n, s, _) {
  let a = (0, import_path.join)(o, r), y, c = 0, A = "; an entry moved from this path earlier is in a .kept- folder beside it";
  try {
    for (let M = 1; ; M++) {
      let d;
      try {
        d = await e();
      } catch (I) {
        throw await Bn(y, o, r, s, _), I;
      }
      if (d === "published") return d;
      if (d === "failed") return await Bn(y, o, r, s, _), d;
      let p = d === "taken" ? await Ke(a, n, true) : d;
      if (p === "same") {
        let I = /* @__PURE__ */ new Date();
        return await (0, import_promises.lutimes)(a, I, I).catch((v) => R(`could not update the modification time of ${r}: ${v}`)), await (0, import_promises.utimes)(o, I, I).catch((v) => R(`could not update the modification time of the uploads folder: ${v}`)), "same";
      }
      if (p === "directory") return { code: (0, import_chunk_78g0060s.S)("EISDIR"), why: `not saved: a folder is at this path, and it was left there${c === 0 ? "" : A}` };
      if (p === "unknown") return c -= await Bn(y, o, r, s, _) ? 1 : 0, { code: (0, import_chunk_78g0060s.S)("look_failed"), why: `not saved: what is at this path could not be looked at, so it was left there${c === 0 ? "" : A}` };
      if (M === It) return c -= await Bn(y, o, r, s, _) ? 1 : 0, { code: (0, import_chunk_78g0060s.S)("EEXIST"), why: `not saved: the path was taken on each of ${It} tries; anything there now was left there${c === 0 ? "" : A}` };
      if (p === "absent") continue;
      let g = `.kept-${(/* @__PURE__ */ new Date()).toISOString().replace(/[-:.]/g, "")}-${(0, import_crypto.randomUUID)().slice(0, 8)}`, T;
      try {
        let I = await (0, import_promises.readdir)(o);
        if ((0, import_chunk_4smdap7r.U)(I, (v) => v.startsWith(".kept-")) >= Pt) return s.moveAsideFailedCount++, { code: (0, import_chunk_78g0060s.S)("kept_cap"), why: `not saved: the uploads folder holds at least ${Pt} folders of kept copies (named .kept-...), so what was at this path was left there; removing old ones makes room${c === 0 ? "" : A}`, leavesADifferentFile: true };
        T = await (0, import_chunk_w2hrk3t1.Nol)(o, g), await (0, import_chunk_q7qjcthc.ra)(a, (0, import_path.join)(T.at, r)), await y?.held.release().catch(() => {
        }), y = { held: T, name: g }, T = void 0, c++, _.push(g), s.movedAsideFileCount++;
      } catch (I) {
        await T?.release().catch(() => {
        }), await (0, import_promises.rmdir)((0, import_path.join)(o, g)).catch(() => {
        });
        let v = (0, import_chunk_jv7av99m.w)(I) === "ENOENT" ? await Ke(a, n, true) : void 0;
        if (v !== "absent" && v !== "same") return s.moveAsideFailedCount++, { code: (0, import_chunk_jv7av99m.Cr)(I) ?? (0, import_chunk_78g0060s.S)("unknown"), why: `not saved: what was at this path could not be moved into a folder of kept copies (${I}), and was left there${c === 0 ? "" : A}`, ...(v === void 0 || v === "changed" || v === "other") && { leavesADifferentFile: true } };
      }
    }
  } finally {
    await y?.held.release().catch(() => {
    });
  }
}
async function Bn(e, o, r, n, s) {
  if (e === void 0) return false;
  let _ = (0, import_path.join)(o, r), a = (0, import_path.join)(e.held.at, r);
  try {
    let c = false;
    try {
      await (0, import_promises.link)(a, _), c = true;
    } catch (A) {
      if ((0, import_chunk_jv7av99m.w)(A) === "EEXIST") throw A;
    }
    if (c) await (0, import_promises.unlink)(a).catch((A) => R(`${r} is back at its path, but a second name for it stays in its .kept- folder: ${A}`));
    else {
      if (!await (0, import_promises.lstat)(_).then(() => false, (M) => (0, import_chunk_jv7av99m.w)(M) === "ENOENT")) throw Error("the path is taken again, or could not be checked");
      await (0, import_chunk_q7qjcthc.ra)(a, _);
    }
  } catch (c) {
    return R(`could not move ${r} back out of its .kept- folder, where it stays: ${c}`), false;
  }
  n.movedAsideFileCount--;
  let y = s.indexOf(e.name);
  if (y !== -1) s.splice(y, 1);
  return await (0, import_promises.rmdir)((0, import_path.join)(o, e.name)).catch(() => {
  }), true;
}
async function Bt(e, o, r, n, s, _) {
  if (!_.renamesAfterALook) try {
    return await (0, import_promises.link)(e, o), s.linkedFileCount++, "published";
  } catch (y) {
    if ((0, import_chunk_jv7av99m.w)(y) === "EEXIST") return "taken";
    R(`link(2) failed for ${r} (${y}); looking at the name, to rename into it only if it is free`), _.renamesAfterALook = true;
  }
  let a = await Ke(o, n, true);
  if (a !== "absent") return a;
  return await (0, import_chunk_q7qjcthc.ra)(e, o), s.renamedAfterLinkRefusedCount++, "published";
}
async function Ot(e, o, r) {
  let n = performance.now(), s = await Ke(e, o, true);
  if (r.slowestWouldMoveLookMs = Math.max(r.slowestWouldMoveLookMs, performance.now() - n), s === "changed" || s === "other") r.wouldMoveAsideFileCount++;
  else if (s === "same") r.wouldLeaveSameFileCount++;
}
function Qt() {
  return (0, import_chunk_6e68m1dj.hn)() && (0, import_chunk_f9x2f6cx.HI)() === null && !(0, import_chunk_f9x2f6cx.Y)();
}
var ti = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
function cn(e, o, r) {
  e.idsBySavedName.set(o, [...e.idsBySavedName.get(o) ?? [], r.file_uuid.toLowerCase()]);
}
function eo(e, o) {
  return typeof o === "boolean" ? o : o.has(e.file_uuid);
}
function $n(e, o, r) {
  return (0, import_chunk_fwgyarbe.Mwt)(eo(e, o) ? (0, import_chunk_fwgyarbe.Hwt)(e.file_uuid) : (e.file_uuid.slice(0, 8) || (0, import_crypto.randomUUID)().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"), r ? (0, import_chunk_fwgyarbe.h_r)(e.file_name) : (0, import_chunk_qanr9g0g.dwt)(e.file_name));
}
function Kn(e) {
  let o = e.httpStatus ?? 0;
  return e.failure === "stalled" || e.failure === "error" && e.final !== true || e.failure === "http_status" && (o >= 500 || o === 408 || o === 429);
}
function On() {
  return !(0, import_chunk_fbqj9ad4.won)() && (0, import_chunk_zhr7rpv7.jn)() && !(0, import_chunk_k449cc64.wt)();
}
var oi = { no_token: true, http_status: false, too_large: false, held_limit: true, stalled: true, stopped: true, error: true }, ii = /* @__PURE__ */ new Set([404, 409]);
function et(e) {
  return e > import_chunk_r6fna520.Qv.targetRawSize || e > import_chunk_r6fna520.B7 && (0, import_chunk_865at33z.b)("tengu_lucky_widget", false) === true;
}
function Hn(e, o) {
  return { mediaType: (0, import_chunk_kzzkh06w.cy)(e), sides: (0, import_chunk_kzzkh06w.DT)(e), wholeLength: o };
}
function no(e, o) {
  return e.sides !== void 0 && Math.max(e.sides.width, e.sides.height) > o;
}
function Rt(e) {
  return e.mediaType !== null && (no(e, import_chunk_r6fna520.YWt) || et(e.wholeLength));
}
function Dt(e, o) {
  if (o.wholeLength > import_chunk_r6fna520.Qv.targetRawSize) return;
  if ((0, import_chunk_kzzkh06w.BOi)(e, import_chunk_r6fna520.YWt)) return "jpeg_side_too_long";
  if (no(o, import_chunk_r6fna520.YWt)) return;
  if (e.length >= o.wholeLength) return "jpeg_no_fewer_bytes";
  let r = o.sides, n = (0, import_chunk_kzzkh06w.DT)(e);
  return r !== void 0 && n !== void 0 && Math.max(n.width, n.height) <= ei && (Math.max(n.width, n.height) < Math.max(r.width, r.height) || Math.min(n.width, n.height) < Math.min(r.width, r.height)) ? "jpeg_shrinks_photo" : void 0;
}
function xt(e, o, r, n) {
  if (o !== "image/png") return;
  if (e.inlinedPngSourceCount++, r === void 0 || (0, import_chunk_kzzkh06w.Tyr)(r)) e.inlinedPngSourceMaybeTransparentCount++;
  if (n.source.type === "base64" && n.source.media_type === "image/jpeg") e.inlinedPngSourceSentAsJpegCount++;
}
function Lt(e, o) {
  return (0, import_chunk_fwgyarbe.Mwt)((0, import_chunk_fwgyarbe.Hwt)(e.file_uuid), `image.${import_chunk_kzzkh06w.kpe[o]}`);
}
function zn() {
  return (0, import_chunk_f9x2f6cx.gse)().backgroundOriginalsSinceRow ??= { failed: 0, mostAtOnce: 0, mostBytesAtOnce: 0, longestMs: 0 };
}
function Nt(e, o, r, n, s, _) {
  return Sn({ fileUuid: e, baseUrl: o, modelCopy: true, forPrefetch: false, maxBytes: import_chunk_r6fna520.Qv.targetRawSize, spillTo: void 0, token: () => r, abort: n, quietLimitMs: Qn, endsAt: _, totals: s, admitBytes: () => true });
}
async function ri(e, o, r, n, s, _, a, y, c, A, M, d, p = false, g, T = false, I = "off", v, J = false, x = false, B) {
  var _stack = [];
  try {
    if (x && (e.sha256 !== void 0 || (0, import_chunk_f9x2f6cx.HI)() !== null || (0, import_chunk_f9x2f6cx.Y)())) return n.failedWriteCount++, n.lastFailedWrite = { code: (0, import_chunk_78g0060s.S)("resend"), step: (0, import_chunk_78g0060s.S)("refused") }, { failure: "write" };
    let X = (0, import_chunk_865at33z.ydt)(An().recoveries);
    if ((0, import_chunk_mw2v4wks.NUt)()) await (0, import_chunk_478yxt5w.O7)();
    let P = M?.accessToken ?? ((0, import_chunk_m15w38ag.ne)() && A !== void 0 ? await (0, import_chunk_mw2v4wks.t1)(A) : (0, import_chunk_mw2v4wks.V5)());
    if (!P) return R("skip: no oauth token"), Pe(n, "no_token", 0);
    let h = P, O = r && e.is_image === true && e.sha256 === void 0, H, Q, j = "message_sent_no_jpeg", L = new AbortController();
    const _e = __using(_stack, { [Symbol.dispose]: () => {
      if (L.abort(), Q !== void 0) qe(void 0, Q, j);
    } });
    let he = [], F, Be, V = false, Ce, Ye, Ge = false, Ue = 0, Ae = s, Me = O ? v?.start : void 0, G;
    try {
      let E = e.sha256 === void 0 ? pti : import_chunk_f7aa6t06.epe, D = e.sha256 === void 0 && Qt() ? (0, import_path.join)(d ?? (0, import_chunk_fwgyarbe.ov)(), $n(e, T, J)) : void 0, Z = e.sha256 === void 0 && vt(c) ? c : void 0;
      if (typeof e.file_size === "number" && e.file_size > (D === void 0 && Z === void 0 ? E : import_chunk_f7aa6t06.kgr)) return Pe(n, "too_large", 0);
      let se = O && On() && a ? (0, import_chunk_f9x2f6cx.gse)().byFileUuid.get(xe(e.file_uuid)) : void 0, ue = se?.modelCopy;
      if (se !== void 0 && ue !== void 0 && (ue.bearer === void 0 || ue.bearer === (0, import_chunk_ccm69jjy.Je)(P))) se.modelCopy = void 0, Q = ue, H = ue.outcome;
      else if (O && On() && (typeof e.file_size !== "number" || et(e.file_size))) H = Nt(e.file_uuid, M?.baseUrl, P, L, n, y);
      let be = nt(M), z = LXt(e.file_uuid, M);
      if (be !== void 0 && z !== void 0 && z.bearer === (0, import_chunk_ccm69jjy.Je)(P) && (z.size <= E || z.path === D) && (e.sha256 === void 0 || e.sha256 === z.sha256)) {
        let oe = z.size > E;
        if (oe && await (0, import_chunk_wm6xsfs2.Htt)(z.path, z.size) === z.sha256) return cn(n, (0, import_path.basename)(z.path), e), n.reusedFileCount++, { path: z.path, sha256: z.sha256, size: z.size };
        let ze = oe ? null : await (0, import_chunk_qanr9g0g.rAe)(z.path, z.size);
        if (ze !== null && (0, import_chunk_ccm69jjy.Je)(ze) === z.sha256) F = ze, Ce = z.sha256, Ye = z.path, n.reusedFileCount++;
        else if (be.get(xe(e.file_uuid)) === z) be.delete(xe(e.file_uuid));
      }
      if (p && D !== void 0) {
        let oe = await (0, import_promises.lstat)(D).catch(() => {
          return;
        });
        if (oe?.isFile() && oe.size > E) return cn(n, (0, import_path.basename)(D), e), n.reusedFileCount++, { path: D };
      }
      let rn = F === void 0 && M === void 0 && g === void 0 && e.sha256 === void 0 && kt(c) ? c.takeFetchedAhead(e.file_uuid, (0, import_chunk_ccm69jjy.Je)(P)) : void 0;
      if (rn !== void 0) {
        let oe = await rn;
        if (oe !== null && oe.data.length <= E) F = oe.data, Be = oe.servedPageCount;
      }
      let sn = (0, import_chunk_f9x2f6cx.gse)(), an = xe(e.file_uuid);
      sn.refusedEarly?.delete(an);
      let te = F === void 0 && a ? sn.byFileUuid.get(an) : void 0;
      while (te !== void 0) {
        let oe = performance.now(), ze = pi(te, oe, (0, import_chunk_ccm69jjy.Je)(P));
        if (te.modelCopy !== void 0) qe(te, te.modelCopy, te.modelCopy.bearer === void 0 || te.modelCopy.bearer === (0, import_chunk_ccm69jjy.Je)(P) ? "message_took_file_only" : "bearer_changed");
        let ve = te.settledAt === void 0, Qe = te.startedBy === "prefetch";
        if (ve) G ??= Me?.(() => h);
        let Ne = await te.bytes, We = performance.now() - oe;
        if (Ue += We, Qe && ve) {
          if (n.joinedInFlightCount++, n.slowestJoinWaitMs = Math.max(n.slowestJoinWaitMs, We), te.headersTimedOut) Ae = Math.max(1, s - 1);
        }
        let ae = te.bearer === (0, import_chunk_ccm69jjy.Je)(P), dn = Ne !== null && ae && Ne.length <= E && (typeof e.sha256 !== "string" || (0, import_chunk_qanr9g0g.qco)(Ne, { sha256: e.sha256, file_size: e.file_size }));
        if (dn) {
          if (M === void 0) (0, import_chunk_865at33z.zGe)(An(), X);
          F = Ne, Be = te.servedPageCount, V = te.servedAsPersonsOwn, Ge = true;
        } else if (Ne === null && ve && ae && ao(te, oe) && !(te.failure === "too_large" && Z !== void 0)) return "writeFailed" in te ? jt(n, te.writeFailed) : Pe(n, te.failure ?? "error", te.receivedBytes);
        if (Qe && Ne !== null) {
          if (dn) n.prefetchedFileCount++, n.shortestSincePrefetchMs = Math.min(n.shortestSincePrefetchMs ?? 1 / 0, oe - te.startedAt);
          if (ze) gi(te, Ne, { inFlight: ve, passes: dn, sameBearer: ae, waitedMs: We });
        }
        let en = F === void 0 ? sn.byFileUuid.get(an) : void 0;
        te = en !== te && en?.startedBy === "message" && en.bearer === (0, import_chunk_ccm69jjy.Je)(P) ? en : void 0;
      }
      if (F === void 0) {
        G ??= Me?.(() => h);
        let oe = new AbortController(), ze = () => oe.abort();
        if (g?.addEventListener("abort", ze, { once: true }), g?.aborted) ze();
        let ve, Qe = 0, Ne, We = H !== void 0 && Q === void 0 && !p && M === void 0 && g === void 0 && Wn(c) && (0, import_chunk_865at33z.b)("tengu_whimsical_trinket", false) === true ? Promise.withResolvers() : void 0, ae = We !== void 0 && typeof e.file_size === "number" && e.file_size > E ? "original_too_large" : void 0, dn = false, en = false, wn = We === void 0 ? n : new Proxy(n, { set: (k, ie, ye) => en || Reflect.set(k, ie, ye) }), rt = { fileUuid: e.file_uuid, baseUrl: M?.baseUrl, modelCopy: false, forPrefetch: false, endsAt: y, maxBytes: Z !== void 0 && typeof e.file_size === "number" && e.file_size > E ? 0 : E, spillTo: D === void 0 ? void 0 : async () => (0, import_chunk_wm6xsfs2.yti)(await (0, import_chunk_w2hrk3t1.oAe)((0, import_path.dirname)(D)), D, void 0, !x), token: () => h, onPart: We && ((k, ie) => {
          if (ie === void 0) ae = "no_stated_length";
          else if (ie > E) ae = "original_too_large";
          else if ((0, import_chunk_kzzkh06w.DT)(k) !== void 0) We.resolve({ bytes: k, statedLength: ie });
          else if (k.length < Qo) return true;
          else ae = "no_dimensions_in_first_256_kib";
          return false;
        }), admitBytes: (k) => {
          if (Qe = k, ve !== void 0) ve.receivedBytes = k;
          return Ne?.(k), true;
        } }, lo = performance.now(), En = _ti(Ae, Ue, oe, wn, rt, o && !p, B).then(async (k) => {
          if (M !== void 0 || !("failure" in k) || k.httpStatus !== 401 || (0, import_chunk_mw2v4wks.CR)() !== void 0) return k;
          dn = true;
          let ie = await bi(h, A, c, oe.signal, _, wn);
          if (ie === void 0 || Zn(y)) return k;
          if (h = ie.bearer, X = ie.stamp, ve !== void 0) ve.bearer = (0, import_chunk_ccm69jjy.Je)(ie.bearer);
          wn.retriedAfter401Count++;
          let ye = await _ti(1, 0, oe, wn, rt);
          if (!("failure" in ye) && !("writeFailed" in ye)) wn.recoveredFileCount++;
          return ye;
        }).catch((k) => ((0, import_chunk_k449cc64.i)(k), { failure: "error" }));
        if (a && io().value) ve = so("message", oe, En, (0, import_chunk_ccm69jjy.Je)(P)), sn.byFileUuid.set(an, ve);
        if (We !== void 0 && H !== void 0) {
          let k = false, ie = En.then(() => {
            k = true;
            return;
          }), ye = Promise.withResolvers();
          if ((0, import_chunk_865at33z.b)("tengu_eager_fiddle", false) === true) H.then((de) => {
            if ("data" in de && de.originalFacts !== void 0) ye.resolve(de.originalFacts);
          });
          let re = await Promise.race([We.promise.then(({ bytes: de, statedLength: De }) => ({ photo: Hn(de, De), start: de })), ye.promise.then((de) => ({ photo: de, start: void 0 })), ie]), Xe = null, Re = 0;
          if (re === void 0) ae ??= "original_ended_first";
          else if (re.photo.wholeLength > E) ae = "original_too_large";
          else if (!Rt(re.photo)) ae = "jpeg_not_needed";
          else {
            let de = await Promise.race([H, ie]);
            if (de === void 0) ae = "original_ended_first";
            else if (dn) ae = "token_replaced_after_401";
            else if (!("data" in de)) ae = "jpeg_read_failed";
            else if (Dt(de.data, re.photo) !== void 0) ae = "jpeg_no_better";
            else Re = performance.now(), Xe = await (0, import_chunk_fbqj9ad4.bgr)(de.data, import_chunk_r6fna520.Qv).catch(() => null), ae = Xe === null ? "image_build_failed" : k || Qe >= re.photo.wholeLength ? "original_ended_first" : void 0;
          }
          let Ie = (0, import_chunk_f9x2f6cx.gse)().originalsStillDownloading ??= /* @__PURE__ */ new Map();
          if (ae === void 0 && Ie.size >= Jn) ae = "too_many_originals_downloading";
          if (re !== void 0 && re.photo.mediaType !== null && Xe !== null && ae === void 0) {
            if (ve !== void 0 && sn.byFileUuid.get(an) === ve) sn.byFileUuid.delete(an);
            let de = Wn(c) ? c.awaitsPicture(e.file_uuid) : void 0;
            en = true;
            let De = performance.now(), ln = { receivedBytes: Qe };
            Ie.set(oe, ln);
            let lt = zn();
            lt.mostAtOnce = Math.max(lt.mostAtOnce, Ie.size);
            let ft = () => (0, import_chunk_f9x2f6cx.gse)().originalsStillDownloading === Ie, ct = () => {
              if (!ft()) return;
              let Se = 0;
              for (let fo of Ie.values()) Se += fo.receivedBytes;
              let fn = zn();
              fn.mostBytesAtOnce = Math.max(fn.mostBytesAtOnce, Se);
            };
            Ne = (Se) => {
              if (ln.receivedBytes = Se, Se > 0) ct();
            }, ct();
            let mt = false, _t = setTimeout(() => {
              mt = true, oe.abort();
            }, Po);
            if (_t.unref(), En.then((Se) => {
              if (clearTimeout(_t), "failure" in Se) R(`the original of ${e.file_uuid}, whose stored JPEG has gone to Claude, did not arrive: ${mt ? "ended at its time limit" : Se.failure}, status ${Se.httpStatus ?? "none"}`);
              if (Ie.delete(oe), ft()) {
                let fn = zn();
                if (fn.longestMs = Math.max(fn.longestMs, performance.now() - De), "failure" in Se) fn.failed++;
              }
              if ("data" in Se) de?.({ bytes: Se.data, bearer: (0, import_chunk_ccm69jjy.Je)(h), servedPageCount: Se.servedPageCount });
            }).catch(import_chunk_k449cc64.i), (0, import_chunk_865at33z.zGe)(An(), X), (0, import_chunk_865at33z.Uzt)(), n.downloadedBytes += re.photo.wholeLength, n.slowestDownloadMs = Math.max(n.slowestDownloadMs, Re - lo), n.slowestInlineImageBuildMs = Math.max(n.slowestInlineImageBuildMs, performance.now() - Re), n.modelCopyCount++, n.modelCopyAheadOfOriginalCount++, re.start === void 0) n.modelCopyDecidedByHeaderCount++;
            xt(n, re.photo.mediaType, re.start, Xe);
            let pt = Lt(e, re.photo.mediaType);
            return cn(n, pt, e), R(`inlined ${e.file_uuid} as its stored JPEG before its original (${re.photo.wholeLength} bytes, stated by ${re.start === void 0 ? "the JPEG's answer" : "the original's answer"}) had arrived`), { imageBlock: Xe, path: (0, import_path.join)(d ?? (0, import_chunk_fwgyarbe.ov)(), pt), size: re.photo.wholeLength };
          }
        }
        if (ae !== void 0) n.lastWaitedForOriginalCause = ae;
        let we = await En;
        if (g?.removeEventListener("abort", ze), "failure" in we && we.failure === "too_large" && Z !== void 0 && !g?.aborted) {
          let k = $n(e, T, J), ie = await Z.fetchUpload(k, e.file_uuid);
          if (ie.ok) return cn(n, k, e), n.overMemoryLimitFileCount++, { path: (0, import_path.join)(d ?? (0, import_chunk_fwgyarbe.ov)(), k) };
          if (!ie.tooLarge) return R(`the machine with the uploads folder could not download ${e.file_uuid}: ${ie.error}`), n.failedWriteCount++, n.lastFailedWrite = { code: (0, import_chunk_78g0060s.S)("unknown"), step: (0, import_chunk_78g0060s.S)("fetched_by_container") }, { failure: "write" };
        }
        if ("failure" in we) {
          if (we.failure === "stalled" && we.outOfTime === true) n.outOfTimeFileCount++;
          return Pe(n, we.failure, Qe, we.httpStatus, Kn(we));
        }
        if (M === void 0) (0, import_chunk_865at33z.zGe)(An(), X), (0, import_chunk_865at33z.Uzt)();
        if ("writeFailed" in we) return jt(n, we.writeFailed);
        if ("file" in we) {
          let { file: k } = we, ie = (0, import_chunk_78g0060s.S)("link"), ye = "off", re, Xe = false;
          try {
            if (g?.aborted) return Pe(n, "stopped", 0);
            if (cn(n, (0, import_path.basename)(k.placeAt), e), ye === "count") {
              if (await Ot(k.placeAt, k, n), g?.aborted) return Pe(n, "stopped", 0);
            }
            let Re = !p && !yn(ye);
            if (yn(ye)) {
              ie = (0, import_chunk_78g0060s.S)("write");
              let Ie = false, de = { renamesAfterALook: false }, De = (0, import_path.basename)(k.placeAt), ln = await Un(async () => {
                if (g?.aborted) return Ie = true, "failed";
                return Bt(k.path, k.placeAt, De, k, n, de);
              }, (0, import_path.dirname)(k.placeAt), De, k, n, he);
              if (Ie) return Pe(n, "stopped", 0);
              if (ln === "same") n.unchangedOnDiskCount++;
              else if (typeof ln === "object") re = ln;
            } else if (p) try {
              await (0, import_promises.link)(k.path, k.placeAt), n.linkedFileCount++;
            } catch (Ie) {
              let de = (0, import_chunk_jv7av99m.w)(Ie) === "EEXIST", De = await Ke(k.placeAt, k);
              if (De === "same") n.unchangedOnDiskCount++;
              else if (De === "changed" || De === "unknown" && de) n.keptChangedFileCount++, Xe = true;
              else if (De === "absent" && !de && !x) Re = true;
              else throw Ie;
            }
            if (Re) {
              if (ie = (0, import_chunk_78g0060s.S)("rename"), await (0, import_chunk_q7qjcthc.ra)(k.path, k.placeAt), p) n.renamedAfterLinkRefusedCount++;
            }
          } catch (Re) {
            return R(`write ${k.target} failed: ${Re}`), n.failedWriteCount++, n.lastFailedWrite = { code: (0, import_chunk_jv7av99m.Cr)(Re) ?? (0, import_chunk_78g0060s.S)("unknown"), step: ie }, { failure: "write", ...Cn(ye, he, k.target, false) };
          } finally {
            await (0, import_promises.rm)(k.path, { force: true }).catch((Re) => {
              R(`the staged name of ${k.target} could not be removed (${k.path}): ${Re}`), n.stagedNameLeftCount++;
            }), await k.release();
          }
          if (re !== void 0) return R(`write ${k.target} failed: ${re.why}`), n.failedWriteCount++, n.lastFailedWrite = { code: re.code, step: (0, import_chunk_78g0060s.S)("move_aside") }, { failure: "write", ...Cn(ye, he, k.target, false, re) };
          return n.overMemoryLimitFileCount++, Wt(e, { path: k.target, size: k.size, sha256: k.sha256, bearer: (0, import_chunk_ccm69jjy.Je)(h) }, M), { path: k.target, sha256: k.sha256, size: k.size, ...Cn(ye, he, k.target, true), ...x && Xe ? qn(k.target) : void 0 };
        }
        F = we.data, Be = we.servedPageCount, V = we.servedAsPersonsOwn === true;
      }
    } catch (E) {
      return R(`fetch ${e.file_uuid} threw: ${E}`), Pe(n, "error", 0);
    }
    if (typeof e.sha256 === "string" && !Ge && !(0, import_chunk_qanr9g0g.qco)(F, { sha256: e.sha256, file_size: e.file_size })) return R(`fetch ${e.file_uuid} failed integrity verification`), { failure: "digest_mismatch" };
    let le = { resizeMs: 0, pngPaletteMs: 0, byteBudgetMs: 0 }, ce = O && On() && Rt(Hn(F, F.length)), Te, Ee = "image_build_failed", Oe, tn = false;
    if (ce) {
      let E = h === P ? await H : void 0;
      if (Q !== void 0) {
        let D = Q.bearer;
        if (E === void 0 || D !== (0, import_chunk_ccm69jjy.Je)(P) && (D !== void 0 || "data" in E)) j = "bearer_changed", E = void 0;
        else if ("failure" in E) {
          if (j = E.failure, oi[E.failure] || ii.has(E.httpStatus)) E = void 0;
        }
      }
      if (E === void 0 || "failure" in E && Kn(E)) E = await Nt(e.file_uuid, M?.baseUrl, h, new AbortController(), n, y);
      if ("data" in E) {
        let D = Dt(E.data, Hn(F, F.length));
        if (D === void 0) Te = E.data, tn = E === Q?.settled;
        else if (Ee = D, E === Q?.settled) j = "jpeg_no_better";
      } else if ("failure" in E) Ee = E.failure, Oe = E.httpStatus;
      else Ee = "error";
    } else L.abort();
    let $e;
    if (G !== void 0 && v !== void 0) {
      if ((0, import_chunk_kzzkh06w.cy)(F) === null || !(0, import_chunk_kzzkh06w.BOi)(F, import_chunk_r6fna520.Qv.maxWidth)) n.modelCopyBesideUnneededCount++;
      else {
        let E = performance.now(), D = new AbortController(), Z = await Promise.race([G.outcome, (0, import_chunk_5appeerh.K)((0, import_chunk_kzzkh06w.cy)(F) === "image/png" ? Et.png : Et.other, D.signal).then(() => {
          return;
        })]);
        D.abort(), n.slowestModelCopyBesideWaitMs = Math.max(n.slowestModelCopyBesideWaitMs, performance.now() - E);
        let se;
        if (Z === void 0) se = "copy_late";
        else if ("data" in Z) {
          let be = (0, import_chunk_fbqj9ad4.$ol)(Z.data, F, v.limits, Z.statedLength);
          if (typeof be === "string") se = be;
          else {
            $e = be, n.modelCopyBesidePassedCount++;
            let z = (0, import_chunk_kzzkh06w.DT)(Z.data), rn = (0, import_chunk_kzzkh06w.DT)(F);
            if (z !== void 0 && rn !== void 0) n.modelCopyBesideExtraImageTokens += (0, import_chunk_r6fna520.Qpe)(z.width, z.height) - (0, import_chunk_r6fna520.Qpe)(...(0, import_chunk_fbqj9ad4.ygr)(rn.width, rn.height, { ...import_chunk_r6fna520.Qv, maxImageTokens: v.limits.maxImageTokens }));
          }
        } else se = "failure" in Z && Z.httpStatus === 409 ? "copy_not_stored" : "copy_failed";
        if (se !== void 0) n.modelCopyBesideMissedCount++, n.lastModelCopyBesideMiss = se;
        let { timing: ue } = G;
        if (n.slowestModelCopyBesideTimeToHeadersMs = Math.max(n.slowestModelCopyBesideTimeToHeadersMs, ue.slowestTimeToHeadersMs), Z !== void 0) n.slowestModelCopyBesideDownloadMs = Math.max(n.slowestModelCopyBesideDownloadMs, ue.slowestDownloadMs), n.modelCopyBesideBytes += ue.downloadedBytes;
      }
      G.end();
    }
    let pn = performance.now(), bn = (E) => (0, import_chunk_fbqj9ad4.bgr)(E, import_chunk_r6fna520.Qv, { timings: le }).catch((D) => (R(`inline ${e.file_uuid} threw: ${D}`), null)), Fn = Te ? await bn(Te) : null, ke = $e ?? Fn ?? (O ? await bn(F) : null);
    if (n.slowestInlineImageBuildMs = Math.max(n.slowestInlineImageBuildMs, performance.now() - pn), n.slowestInlineImageResizeMs = Math.max(n.slowestInlineImageResizeMs, le.resizeMs), n.slowestInlineImagePngPaletteMs = Math.max(n.slowestInlineImagePngPaletteMs, le.pngPaletteMs), n.slowestInlineImageByteBudgetMs = Math.max(n.slowestInlineImageByteBudgetMs, le.byteBudgetMs), Fn) {
      if (n.modelCopyCount++, tn && Q !== void 0) qe(void 0, Q, "used");
    } else if (ce) {
      if (tn) j = "image_build_failed";
      if (n.modelCopyMissedCount++, n.lastModelCopyMissedCause = Ee, n.lastModelCopyMissedHttpStatus = Oe, ke) n.modelCopyMissedSentAsIsCount++;
    }
    if (ke && $e === void 0) xt(n, (0, import_chunk_kzzkh06w.qae)(F), F, ke);
    let me = ke ? Lt(e, (0, import_chunk_kzzkh06w.qae)(F)) : $n(e, T, J);
    cn(n, me, e);
    let Ve = d ?? (0, import_chunk_fwgyarbe.ov)(), ee = (0, import_path.join)(Ve, me), pe = (0, import_chunk_f9x2f6cx.W)(), Tn = (0, import_chunk_f9x2f6cx.HI)() === null && !(0, import_chunk_f9x2f6cx.Y)(), He = p && e.sha256 === void 0 && Tn, je = "off";
    if (je === "count") await Ot(ee, F, n);
    let C = !p || e.sha256 !== void 0 ? "absent" : Ye === ee ? "same" : He ? await Ke(ee, F) : "absent";
    if (g?.aborted) return Pe(n, "stopped", 0);
    let fe = performance.now(), N, ge, Le, Ze, on = false, ot = false, Ln = false;
    if (C === "same") n.unchangedOnDiskCount++;
    else if (C === "changed" || C === "unknown") n.keptChangedFileCount++, Ln = true;
    else if (!x && (0, import_chunk_m15w38ag.ne)() && c !== void 0 && (0, import_chunk_hkvzj051.Ao)(pe) && (0, import_chunk_hkvzj051.Ao)(me) && (d === void 0 || d === (0, import_chunk_fwgyarbe.ov)()) && ((0, import_chunk_f9x2f6cx.HI)() !== null || (0, import_chunk_f9x2f6cx.qEe)() === null)) {
      let E = import_chunk_hkvzj051.at.userConfigDir("uploads", [pe, me]), D, Z = yn(je) ? await Un(async () => {
        if (g?.aborted) return on = true, "failed";
        if (D = await Yt(c, me, { servedPageCount: Be, isServedAsPersonsOwn: V, fileUuid: e.file_uuid, bearer: (0, import_chunk_ccm69jjy.Je)(h) }, E, F, { mode: 384, precondition: { type: "ifAbsent" } }), D.ok) return "published";
        let ue = (0, import_chunk_7n1spq36.Xg)(D.error);
        return D.error.code === "AlreadyExists" || ue === "ELOOP" || ue === "ENXIO" || ue === "EISDIR" ? "taken" : "failed";
      }, (0, import_path.dirname)(ee), me, F, n, he) : void 0;
      if (on) return Pe(n, "stopped", 0);
      let se = D ?? await Yt(c, me, { servedPageCount: Be, isServedAsPersonsOwn: V, fileUuid: e.file_uuid, bearer: (0, import_chunk_ccm69jjy.Je)(h) }, E, F, He ? { mode: 384, precondition: { type: "ifAbsent" } } : { mode: 384 });
      if (Z === "same") n.unchangedOnDiskCount++;
      else if (typeof Z === "object") Ze = Z;
      else if (He && !se.ok && se.error.code === "AlreadyExists") ge = (0, import_chunk_78g0060s.S)("storage_backend");
      else if (!se.ok) N = (0, import_chunk_7n1spq36.un)(se.error), n.lastFailedWrite = { code: (0, import_chunk_jv7av99m.Cy)((0, import_chunk_7n1spq36.Xg)(se.error)) ?? (0, import_chunk_78g0060s.f)(se.error.code), step: (0, import_chunk_78g0060s.S)("storage_backend") };
    } else if ((0, import_chunk_f9x2f6cx.Y)()) (0, import_chunk_2yx6c1y2.ZN)("inbound_attachment", ee), N = "refused: this session is diskless and writes no files to this machine's disk", n.lastFailedWrite = { code: (0, import_chunk_78g0060s.S)("diskless"), step: (0, import_chunk_78g0060s.S)("refused") };
    else {
      let E = (0, import_chunk_78g0060s.S)("mkdir");
      try {
        let D = await (0, import_chunk_w2hrk3t1.oAe)(Ve);
        try {
          if (g?.aborted) return Pe(n, "stopped", 0);
          E = (0, import_chunk_78g0060s.S)("write");
          let Z = (0, import_path.join)(D.at, me), se = !He && !yn(je);
          if (yn(je)) {
            let ue = await (0, import_chunk_q7qjcthc.gL)(Z, F, 384), be = { renamesAfterALook: false };
            try {
              let z = await Un(async () => {
                if (g?.aborted) return on = true, "failed";
                return Bt(ue, Z, me, F, n, be);
              }, D.at, me, F, n, he);
              if (on) return Pe(n, "stopped", 0);
              if (ot = z === "published", z === "same") n.unchangedOnDiskCount++;
              else if (typeof z === "object") Ze = z;
            } finally {
              await (0, import_chunk_q7qjcthc.ZR)(() => (0, import_promises.unlink)(ue)).catch((z) => {
                if ((0, import_chunk_jv7av99m.w)(z) !== "ENOENT") R(`the staged name of ${me} could not be removed: ${z}`), n.stagedNameLeftCount++;
              });
            }
          } else if (He) {
            let ue = await (0, import_chunk_q7qjcthc.gL)(Z, F, 384);
            try {
              await (0, import_promises.link)(ue, Z), n.linkedFileCount++;
            } catch (be) {
              if ((0, import_chunk_jv7av99m.w)(be) === "EEXIST") ge = (0, import_chunk_78g0060s.S)("link");
              else {
                if (R(`link(2) failed for ${me} (${be}); looking at the name again${x ? "" : ", to rename into it only if it is free"}`), Le = await Ke(Z, F), Le === "unknown" || Le === "absent" && x) throw E = (0, import_chunk_78g0060s.S)("look_after_link"), be;
                se = Le === "absent", ge = se ? void 0 : (0, import_chunk_78g0060s.S)("link");
              }
            } finally {
              await (0, import_chunk_q7qjcthc.ZR)(() => (0, import_promises.unlink)(ue)).catch((be) => {
                R(`the staged name of ${me} could not be removed: ${be}`), n.stagedNameLeftCount++;
              });
            }
          }
          if (se) {
            if (await (0, import_chunk_q7qjcthc.yr)(Z, F, 384), He) n.renamedAfterLinkRefusedCount++;
          }
        } finally {
          await D.release();
        }
      } catch (D) {
        N = `${D}`, n.lastFailedWrite = { code: (0, import_chunk_jv7av99m.Cr)(D) ?? (0, import_chunk_78g0060s.S)("unknown"), step: E };
      }
    }
    if (Ze !== void 0 && N === void 0) N = Ze.why, n.lastFailedWrite = { code: Ze.code, step: (0, import_chunk_78g0060s.S)("move_aside") };
    if (ge !== void 0 && N === void 0) if (Le ??= await Ke(ee, F), Le === "same") n.unchangedOnDiskCount++;
    else if (Le === "changed" || Le === "unknown") n.keptChangedFileCount++, Ln = true;
    else N = "not saved: something that is not a regular file (a link, a pipe or a folder) has this name and was left as it is, or what had the name was gone when checked again", n.lastFailedWrite = { code: (0, import_chunk_78g0060s.S)("EEXIST"), step: ge };
    if (n.slowestWriteMs = Math.max(n.slowestWriteMs, performance.now() - fe), N !== void 0) {
      if (R(`write ${ee} failed: ${N}`), n.failedWriteCount++, ke) return n.inlinedImageNotSavedCount++, { imageBlock: ke };
      return { failure: "write", ...ot ? void 0 : Cn(je, he, ee, false, Ze) };
    }
    let uo = performance.now();
    if (Ce ??= (0, import_chunk_ccm69jjy.Je)(F), n.slowestHashAfterWriteMs = Math.max(n.slowestHashAfterWriteMs, performance.now() - uo), o && e.sha256 === void 0 && (0, import_chunk_f9x2f6cx.HI)() === null) try {
      (0, import_chunk_fwgyarbe.$fo)(await (0, import_promises.realpath)(ee), Ce);
    } catch {
      R(`registration skipped for ${ee}`);
    }
    if (Wt(e, { path: ee, size: F.length, sha256: Ce, bearer: (0, import_chunk_ccm69jjy.Je)(h) }, M), R(`resolved ${e.file_uuid} \u2192 ${ee} (${F.length} bytes)`), ke) return R(`inlined ${e.file_uuid} (${F.length} bytes)`), { imageBlock: ke, path: ee, sha256: Ce, size: F.length };
    let it = x && Ln ? qn(ee) : Cn(je, he, ee, true);
    if (O) return R(`inline ${e.file_uuid} fell back to @path ref`), { path: ee, sha256: Ce, size: F.length, inlineFellBack: true, ...it };
    return { path: ee, sha256: Ce, size: F.length, ...it };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function Wt(e, o, r) {
  let n = nt(r);
  if (n !== void 0) {
    if (n.delete(xe(e.file_uuid)), n.size >= Oo) {
      let s = n.keys().next().value;
      if (s !== void 0) n.delete(s);
    }
    n.set(xe(e.file_uuid), o);
  }
}
var si = { download: "it could not be downloaded", digest_mismatch: "it failed integrity verification", write: "it could not be written to the uploads directory" };
async function y5o(e, o, r, n, s, _, a, y, c, A, M = true, d = false, p = false, g = false, T = true, I = false) {
  if (e.length === 0) return { prefix: "", imageBlocks: [], inlinedImagePaths: [], deliveredCount: 0 };
  R(`resolving ${e.length} attachment(s)`);
  let v = (0, import_chunk_f9x2f6cx.gse)().refusedEarly;
  if (v !== void 0 && v.size > 0) for (let C of e) v.delete(xe(C.file_uuid));
  let J = performance.now(), x = a !== false && !I && (0, import_chunk_f9x2f6cx.HI)() === null && !(0, import_chunk_f9x2f6cx.Y)() && false, B = !x ? void 0 : (0, import_chunk_3t7ve0wy._F)() ? "tell" : (0, import_chunk_865at33z.b)("tengu_tidy_shelf", "tell"), X = !x ? void 0 : B === "tell" ? _ === void 0 ? "tell" : "on" : B === "on" || B === "count" ? B : "off", P = (0, import_chunk_3t7ve0wy._F)() && a !== false && o && r && _ === void 0 && A === void 0 && y === void 0 && e.some((C) => C.is_image === true && C.sha256 === void 0) && (0, import_chunk_fbqj9ad4.won)() && (0, import_chunk_zhr7rpv7.jn)() && (0, import_chunk_zhr7rpv7.Ss)() && !(0, import_chunk_k449cc64.wt)() ? (0, import_chunk_yvba4101.Fol)((0, import_chunk_865at33z.dt)()) : void 0, h = { slowestTimeToHeadersMs: 0, slowestDownloadMs: 0, slowestJoinWaitMs: 0, slowestInlineImageBuildMs: 0, slowestInlineImageResizeMs: 0, slowestInlineImagePngPaletteMs: 0, slowestInlineImageByteBudgetMs: 0, slowestWriteMs: 0, slowestHashAfterWriteMs: 0, downloadedBytes: 0, downloadTryCount: 0, answeredByGoCount: 0, recoveredFileCount: 0, recoveredLateFileCount: 0, lateTryCount: 0, failedDownloadCount: 0, outOfTimeFileCount: 0, slowestRetryAfterWaitMs: 0, retriedAfter401Count: 0, slowest401RefreshWaitMs: 0, failedWriteCount: 0, inlinedImageNotSavedCount: 0, unchangedOnDiskCount: 0, keptChangedFileCount: 0, linkedFileCount: 0, renamedAfterLinkRefusedCount: 0, stagedNameLeftCount: 0, overMemoryLimitFileCount: 0, idsBySavedName: /* @__PURE__ */ new Map(), movedAsideFileCount: 0, wouldMoveAsideFileCount: 0, wouldLeaveSameFileCount: 0, slowestWouldMoveLookMs: 0, moveAsideFailedCount: 0, whatStandsAside: X, uploadsRootCode: (0, import_chunk_f9x2f6cx.HI)() !== null ? 2 : (0, import_path.dirname)(y ?? (0, import_chunk_fwgyarbe.ov)()) === (0, import_chunk_f9x2f6cx.qEe)() ? 1 : 0, reusedFileCount: 0, prefetchedFileCount: 0, shortestSincePrefetchMs: void 0, joinedInFlightCount: 0, inlinedPngSourceCount: 0, inlinedPngSourceMaybeTransparentCount: 0, inlinedPngSourceSentAsJpegCount: 0, modelCopyCount: 0, modelCopyAheadOfOriginalCount: 0, modelCopyDecidedByHeaderCount: 0, lastWaitedForOriginalCause: void 0, modelCopyMissedCount: 0, modelCopyMissedSentAsIsCount: 0, lastModelCopyMissedCause: void 0, lastModelCopyMissedHttpStatus: void 0, modelCopyBesidePassedCount: 0, modelCopyBesideMissedCount: 0, lastModelCopyBesideMiss: void 0, modelCopyBesideUnneededCount: 0, slowestModelCopyBesideTimeToHeadersMs: 0, slowestModelCopyBesideDownloadMs: 0, modelCopyBesideBytes: 0, slowestModelCopyBesideWaitMs: 0, modelCopyBesideExtraImageTokens: 0, failedDownloads: {} }, O = e.filter((C) => typeof C.sha256 === "string"), H = oo(e);
  if ((0, import_chunk_mw2v4wks.NUt)()) await (0, import_chunk_478yxt5w.O7)();
  if (!(_?.accessToken ?? ((0, import_chunk_m15w38ag.ne)() && s !== void 0 ? await (0, import_chunk_mw2v4wks.t1)(s) : (0, import_chunk_mw2v4wks.V5)()))) {
    R("skip: no oauth token");
    let C = { ...Ht(e.slice(0, H), 0, 0, h, J), ...$t(c, y) };
    (0, import_chunk_cqa9hrgx.l)("bridge_attachment_resolve", "no_token", C), (0, import_chunk_42tcgre6.q)("warn", "bridge_attachment_download_timing", { outcome: "no_token", should_query: a, ...I && { resends_a_prompt: 1 }, ...C });
    let fe = Pgt(e.filter((N) => typeof N.sha256 !== "string"), "no_token");
    if (O.length > 0) {
      let N = O.length - import_chunk_f7aa6t06.sAe, ge = N > 0 ? O.slice(0, import_chunk_f7aa6t06.sAe) : O;
      (0, import_chunk_qanr9g0g.jcs)("bridge", ge.length, 0);
      let Le = N > 0 ? " " + (0, import_chunk_qanr9g0g.Kco)(N) : "";
      return { prefix: ge.map((on) => (0, import_chunk_qanr9g0g.Vco)(on.file_name, "it could not be downloaded (not signed in)")).join(" ") + Le + (fe.length > 0 ? " " + Yn(fe.length, fe.length) : "") + " ", imageBlocks: [], inlinedImagePaths: [], deliveredCount: 0, ...fe.length > 0 && { missingFiles: fe } };
    }
    return { prefix: Yn(fe.length, fe.length) + " ", imageBlocks: [], inlinedImagePaths: [], deliveredCount: 0, missingFiles: fe };
  }
  let j = [], L = e, _e = L.length > H;
  if (_e) {
    if (R(`dropping ${L.length - H} attachment(s) over the ${H} cap`), O.length > 0) j.push((0, import_chunk_qanr9g0g.Kco)(L.length - H));
    L = L.slice(0, H);
  }
  let he = o && r, F = _ === void 0 && A === void 0 && T, Be = F && L.length > Jn, V = o && a !== false && !I && F && !Be && y === void 0 ? () => {
    let C = (0, import_chunk_f9x2f6cx.gse)().lateTries;
    return L.every((fe) => C?.fileUuids.has(fe.file_uuid)) ? C : void 0;
  } : void 0, Ce = Xn(J), Ye = (0, import_chunk_w71cxznt.Rl)(Jn, (C) => {
    let fe = new AbortController();
    return ri(C, o, he, h, a === false ? mti.noTurn : mti.startsTurn, M, F, Ce, n, s, _, y, a === false || I, A, d, X, P !== void 0 ? { limits: P, start: (N) => {
      let ge = { slowestTimeToHeadersMs: 0, slowestDownloadMs: 0, downloadedBytes: 0, answeredByGoCount: 0 };
      return { timing: ge, end: () => fe.abort(), outcome: Sn({ fileUuid: C.file_uuid, baseUrl: void 0, modelCopy: true, forPrefetch: false, maxBytes: import_chunk_fbqj9ad4.OAi, spillTo: void 0, token: N, abort: fe, quietLimitMs: Qn, endsAt: Ce, totals: ge, admitBytes: () => true }) };
    } } : void 0, g, I, V).then(async (N) => {
      if ("path" in N) await (0, import_chunk_mzajx23m.$rr)(C.file_uuid, N);
      return N;
    }).finally(() => {
      if (fe.abort(), Be) Ut(C);
    });
  }), Ge;
  try {
    Ge = await Promise.all(L.map((C) => Ye(C)));
  } finally {
    for (let C of F ? L : []) Ut(C);
  }
  let Ue = [], Ae = [], Me = [], G = [], le = 0, ce = 0, Te = 0, Ee = false, Oe = [], tn = 0, $e = [], pn = [], bn = [], Fn = p && Ge.some((C) => "imageBlock" in C) && (0, import_chunk_865at33z.b)("tengu_plain_locket", true) !== false;
  Ge.forEach((C, fe) => {
    let N = L[fe], ge = typeof N.sha256 === "string";
    if (ge) ce++;
    if ("path" in C) {
      if (pn.push({ file_uuid: N.file_uuid, path: C.path, inlined: "imageBlock" in C, ..."imageBlock" in C && Fn && (0, import_path.basename)(N.file_name) !== "" && { name: (0, import_chunk_qanr9g0g.dwt)(N.file_name) } }), he && N.sha256 === void 0 && N.project_folder_name) bn.push({ name: N.project_folder_name, path: C.path });
    }
    if ("imageBlock" in C) {
      if (Ae.push(C.imageBlock), G.push(N.file_uuid), "path" in C) Me.push(C.path);
    } else if ("path" in C) {
      if (Ue.push(`@"${C.path}"`), C.inlineFellBack) le++;
      if (ge) Te++;
      if (C.aside !== void 0) $e.push(C.aside), j.push(yAn(C.aside));
    } else {
      if (C.failure === "digest_mismatch") Ee = true;
      if (ge) {
        if (j.push((0, import_chunk_qanr9g0g.Vco)(N.file_name, si[C.failure])), C.aside !== void 0) $e.push(C.aside), j.push(yAn(C.aside));
      } else if (Oe.push({ file_uuid: N.file_uuid, reason: C.failure === "write" ? "write" : C.cause ?? "download", ...C.tokenRefused && { tokenRefused: true }, ...C.mayPass && { mayPass: true } }), C.aside !== void 0) tn++, $e.push(C.aside), j.push(yAn(C.aside));
    }
  }), await _5o(bn);
  let ke = O.length === 0 ? e.slice(H) : [];
  if (Oe.length > 0 || ke.length > 0) {
    Oe.push(...Pgt(ke, "count_cap"));
    let C = Oe.length - tn;
    if (C > 0) j.push(Yn(C, L.length - ce + ke.length));
  }
  if (ke.length > 0) j.push(`[a message takes at most ${H} attachments]`);
  let me = h.lastFailedWrite?.code === "ENOSPC" && Oe.some((C) => C.reason === "write");
  if (me) j.push(`[${b5o}]`), S5o(Oe);
  if (ce > 0) (0, import_chunk_qanr9g0g.jcs)("bridge", ce, Te);
  let Ve = Ue.length + Ae.length, ee = { ...Ht(L, Ve, Ae.length, h, J), ...$t(c, y) }, pe;
  if (Ve === 0) pe = Ee ? "digest_mismatch" : "all_failed", (0, import_chunk_cqa9hrgx.m)("bridge_attachment_resolve", pe, ee);
  else if (Ve < L.length) pe = Ee ? "digest_mismatch" : "partial_failed", (0, import_chunk_cqa9hrgx.l)("bridge_attachment_resolve", pe, ee);
  else if (_e) pe = "over_count_cap", (0, import_chunk_cqa9hrgx.l)("bridge_attachment_resolve", pe, ee);
  else if (h.inlinedImageNotSavedCount > 0) pe = "inlined_image_not_saved", (0, import_chunk_cqa9hrgx.l)("bridge_attachment_resolve", pe, ee);
  else pe = "ok", (0, import_chunk_cqa9hrgx.u)("bridge_attachment_resolve", ee);
  let Tn = pe !== "ok" && pe !== "over_count_cap" || h.failedWriteCount > 0;
  if ((0, import_chunk_42tcgre6.q)(Tn ? "warn" : "info", "bridge_attachment_download_timing", { outcome: pe, should_query: a, ...I && { resends_a_prompt: 1 }, ...ee }), le > 0) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_inline_image", "fallback_path_ref");
  else if (Ae.length > 0) (0, import_chunk_cqa9hrgx.u)("bridge_attachment_inline_image");
  if (h.modelCopyMissedCount > 0) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_model_copy", h.modelCopyMissedSentAsIsCount < h.modelCopyMissedCount ? "fallback_path_ref" : "fallback_original");
  else if (h.modelCopyCount > 0) (0, import_chunk_cqa9hrgx.u)("bridge_attachment_model_copy");
  let He = { model_copy_beside_passed_count: h.modelCopyBesidePassedCount, model_copy_beside_missed_count: h.modelCopyBesideMissedCount, model_copy_beside_extra_image_tokens: h.modelCopyBesideExtraImageTokens, slowest_model_copy_beside_time_to_headers_ms: Math.round(h.slowestModelCopyBesideTimeToHeadersMs), slowest_model_copy_beside_download_ms: Math.round(h.slowestModelCopyBesideDownloadMs), approx_model_copy_beside_bytes: Number(h.modelCopyBesideBytes.toPrecision(2)), slowest_model_copy_beside_wait_ms: Math.round(h.slowestModelCopyBesideWaitMs) };
  if (h.lastModelCopyBesideMiss !== void 0) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_model_copy_beside", h.lastModelCopyBesideMiss, He);
  else if (h.modelCopyBesidePassedCount > 0) (0, import_chunk_cqa9hrgx.u)("bridge_attachment_model_copy_beside", He);
  let je = [...Ue, ...j];
  return { prefix: je.length > 0 ? je.join(" ") + " " : "", imageBlocks: Ae, inlinedImagePaths: h.inlinedImageNotSavedCount > 0 ? [] : Me, ...G.length > 0 && { imageFileUuids: G }, deliveredCount: Ve, ...Oe.length > 0 && { missingFiles: Oe }, ...$e.length > 0 && { asideOutcomes: $e }, ...me && { noSpace: me }, ...pn.length > 0 && { writtenFiles: pn }, timing: { timeToHeadersMs: Math.round(h.slowestTimeToHeadersMs), downloadMs: Math.round(h.slowestDownloadMs), joinWaitMs: Math.round(h.slowestJoinWaitMs), imageBuildMs: Math.round(h.slowestInlineImageBuildMs), approxDownloadedBytes: Number(h.downloadedBytes.toPrecision(2)), prefetchedFileCount: h.prefetchedFileCount, modelCopyCount: h.modelCopyCount, modelCopyAheadOfOriginalCount: h.modelCopyAheadOfOriginalCount, modelCopyDecidedByHeaderCount: h.modelCopyDecidedByHeaderCount, ...h.lastWaitedForOriginalCause !== void 0 && { lastWaitedForOriginalCause: h.lastWaitedForOriginalCause }, modelCopyMissedCount: h.modelCopyMissedCount, modelCopyMissedSentAsIsCount: h.modelCopyMissedSentAsIsCount, ...h.lastModelCopyMissedCause !== void 0 && { lastModelCopyMissedCause: h.lastModelCopyMissedCause }, ...h.lastModelCopyMissedHttpStatus !== void 0 && { lastModelCopyMissedHttpStatus: h.lastModelCopyMissedHttpStatus }, downloadTryCount: h.downloadTryCount, answeredByGoCount: h.answeredByGoCount, recoveredFileCount: h.recoveredFileCount, recoveredLateFileCount: h.recoveredLateFileCount, lateTryCount: h.lateTryCount, failedDownloadCount: h.failedDownloadCount, outOfTimeFileCount: h.outOfTimeFileCount, ...h.failedDownloads.last_failed_http_status !== void 0 && { lastFailedHttpStatus: h.failedDownloads.last_failed_http_status }, retryAfterWaitMs: Math.round(h.slowestRetryAfterWaitMs), secondAskFlagMs: In(), usesEventsPool: Nn(), ...h.shortestSincePrefetchMs !== void 0 && { sincePrefetchMs: Math.round(h.shortestSincePrefetchMs) } } };
}
function to(e, o) {
  if (!o) return e;
  if (typeof e === "string") return (0, import_chunk_qanr9g0g.Gcs)(e, o);
  let r = e.findLastIndex((n) => n.type === "text");
  if (r !== -1) {
    let n = e[r];
    if (n.type === "text") return [...e.slice(0, r), { ...n, text: (0, import_chunk_qanr9g0g.Gcs)(n.text, o) }, ...e.slice(r + 1)];
  }
  return [...e, { type: "text", text: o.trimEnd() }];
}
function ai(e, o) {
  if (o.length === 0) return e;
  let r = typeof e === "string" ? e.trim() === "" ? [] : [{ type: "text", text: e }] : (0, import_chunk_npsm5tcc.hOi)(e);
  return [...o, ...r];
}
function Pgt(e, o) {
  return e.map((r) => ({ file_uuid: r.file_uuid, reason: o }));
}
function S5o(e) {
  for (let o of e) if (o.reason === "write") o.noSpace = true;
}
function _An(e, o, r, n = false, s = false) {
  let _ = (0, import_chunk_a6xqvbh2.NH)(e);
  if (_.length === 0 || _.length > oo(_)) return;
  let a = [];
  for (let c of _) {
    let A = eo(c, n) ? (0, import_chunk_fwgyarbe.Hwt)(c.file_uuid) : c.file_uuid.slice(0, 8).replace(/[^a-zA-Z0-9_-]/g, "_");
    if (A === "") return;
    let M = (0, import_chunk_fwgyarbe.Mwt)(A, s ? (0, import_chunk_fwgyarbe.h_r)(c.file_name) : (0, import_chunk_qanr9g0g.dwt)(c.file_name));
    a.push((0, import_path.join)(r, M));
  }
  let y = a.map((c) => `@"${c}"`);
  return { content: to(o ?? "", y.join(" ") + " "), refs: y, paths: a };
}
async function Frr(e, o, r, n, s, _, a, y = true, c = false, A = false, M = true) {
  let d = o ?? "", p = (0, import_chunk_a6xqvbh2.NH)(e), g = typeof e === "object" && e !== null && "inbound_origin" in e ? e.inbound_origin : void 0, T = p.length === 0 && r && (g === void 0 || g === null) ? (0, import_chunk_a6xqvbh2.J9e)(e) : [], I = p.length > 0 ? p : T;
  if (I.length === 0) return { content: d, inlinedImagePaths: [] };
  let v = r && !(typeof d === "string" && (0, import_chunk_865at33z.poe)(d)), { prefix: J, imageBlocks: x, deliveredCount: B, ...X } = await y5o(I, r, v, n, s, void 0, (0, import_chunk_a6xqvbh2.Ayr)(e), _, a, void 0, y, c, g === void 0 || g === null || typeof g === "string" && !(0, import_chunk_qanr9g0g.cwt)(g), A, M, T.length > 0);
  if (B === 0 && typeof d === "string" && d.trim() === "") return { content: J.trimEnd(), ...X };
  return { content: ai(to(d, J), x), ...X };
}
function Ut(e) {
  let o = (0, import_chunk_f9x2f6cx.gse)(), r = xe(e.file_uuid), n = o.byFileUuid.get(r);
  if (n?.taken !== void 0 && n.settledAt !== void 0) o.byFileUuid.delete(r);
}
function oo(e) {
  return e.every((o) => o.sha256 === void 0) ? Bo : import_chunk_f7aa6t06.sAe;
}
var di = { off: 0, count: 1, on: 2, tell: 3 };
function yn(e) {
  return e === "on" || e === "tell";
}
function Cn(e, o, r, n, s) {
  if (e !== "tell") return;
  let [_, ...a] = o.map((y) => (0, import_path.join)((0, import_path.dirname)(r), y, (0, import_path.basename)(r)));
  if (_ !== void 0) return { aside: { path: r, saved: n, keptAt: [_, ...a] } };
  return s?.leavesADifferentFile === true && !n ? qn(r) : void 0;
}
function qn(e) {
  return { aside: { path: e, saved: false, keptAt: [] } };
}
function yAn({ path: e, saved: o, keptAt: [r, n] }, s = false) {
  if (r === void 0) {
    let c = `: "${e}" holds something else (possibly a copy changed during this session), which was left in place`;
    return s ? `A file attached to a user message was not saved${c}` : `[attachment not saved${c}]`;
  }
  let a = `(possibly a copy changed during this session) was moved to "${r}"${n === void 0 ? "" : `, and what then stood there was moved to "${n}"`}`;
  if (o) {
    let c = ` "${e}"; what was at that path ${a}`;
    return s ? `A file attached to a user message was saved to${c}` : `[saved the attached file to${c}]`;
  }
  let y = `, so what was just sent is not available; what was at "${e}" until now ${a}`;
  return s ? `A file attached to a user message was not saved${y}` : `[attachment not saved${y}]`;
}
function hti(e) {
  if (!e || (0, import_chunk_865at33z.b)("tengu_amber_ferry", false) !== true) return "off";
  return (0, import_chunk_865at33z.b)("tengu_slate_marten", false) === true ? "on_with_pdfs" : "on";
}
function $t(e, o) {
  return e === void 0 ? {} : { ahead_of_files_flag_on: e === "off" ? 0 : 1, ahead_of_files_on_with_pdfs: e === "on_with_pdfs" ? 1 : 0, queued_ahead_of_files: o === void 0 ? 0 : 1 };
}
function Ht(e, o, r, n, s) {
  let _ = 0, a = 0, y = 0;
  for (let c of n.idsBySavedName.values()) if (y += (0, import_chunk_4smdap7r.U)(c, (A) => ti.test(A)), c.length > 1) _ += c.length, a += (0, import_chunk_4smdap7r.U)(c, (A) => (0, import_chunk_4smdap7r.U)(c, (M) => M === A) > 1);
  return { file_count: e.length, resolved_count: o, download_try_count: n.downloadTryCount, recovered_file_count: n.recoveredFileCount, recovered_late_file_count: n.recoveredLateFileCount, late_try_count: n.lateTryCount, out_of_time_file_count: n.outOfTimeFileCount, slowest_retry_after_wait_ms: Math.round(n.slowestRetryAfterWaitMs), reused_file_count: n.reusedFileCount, prefetched_file_count: n.prefetchedFileCount, joined_in_flight_count: n.joinedInFlightCount, inlined_image_count: r, ...(0, import_chunk_qanr9g0g.bon)(e), inlined_png_source_count: n.inlinedPngSourceCount, inlined_png_source_maybe_transparent_count: n.inlinedPngSourceMaybeTransparentCount, inlined_png_source_sent_as_jpeg_count: n.inlinedPngSourceSentAsJpegCount, approx_downloaded_bytes: Number(n.downloadedBytes.toPrecision(2)), duration_ms: Math.round(performance.now() - s), slowest_time_to_headers_ms: Math.round(n.slowestTimeToHeadersMs), slowest_download_ms: Math.round(n.slowestDownloadMs), slowest_join_wait_ms: Math.round(n.slowestJoinWaitMs), slowest_inline_image_build_ms: Math.round(n.slowestInlineImageBuildMs), slowest_inline_image_resize_ms: Math.round(n.slowestInlineImageResizeMs), slowest_inline_image_png_palette_ms: Math.round(n.slowestInlineImagePngPaletteMs), slowest_inline_image_byte_budget_ms: Math.round(n.slowestInlineImageByteBudgetMs), slowest_write_ms: Math.round(n.slowestWriteMs), slowest_hash_after_write_ms: Math.round(n.slowestHashAfterWriteMs), ...n.failedDownloads, ...n.retriedAfter401Count > 0 && { retried_after_401_count: n.retriedAfter401Count }, ...n.slowest401RefreshWaitMs > 0 && { slowest_401_refresh_wait_ms: Math.round(n.slowest401RefreshWaitMs) }, ...n.failedWriteCount > 0 && { failed_write_count: n.failedWriteCount }, ...n.inlinedImageNotSavedCount > 0 && { inlined_image_not_saved_count: n.inlinedImageNotSavedCount }, ...n.lastFailedWrite !== void 0 && { last_failed_write_code: n.lastFailedWrite.code, last_failed_write_step: n.lastFailedWrite.step }, ...n.unchangedOnDiskCount > 0 && { unchanged_on_disk_count: n.unchangedOnDiskCount }, ...n.keptChangedFileCount > 0 && { kept_changed_file_count: n.keptChangedFileCount }, ...n.linkedFileCount > 0 && { linked_file_count: n.linkedFileCount }, ...n.renamedAfterLinkRefusedCount > 0 && { renamed_after_link_refused_count: n.renamedAfterLinkRefusedCount }, ...n.stagedNameLeftCount > 0 && { staged_name_left_count: n.stagedNameLeftCount }, ...n.overMemoryLimitFileCount > 0 && { over_memory_limit_file_count: n.overMemoryLimitFileCount }, ...n.movedAsideFileCount > 0 && { moved_aside_file_count: n.movedAsideFileCount }, ...n.wouldMoveAsideFileCount > 0 && { would_move_aside_file_count: n.wouldMoveAsideFileCount }, ...n.wouldLeaveSameFileCount > 0 && { would_leave_same_file_count: n.wouldLeaveSameFileCount }, ...n.slowestWouldMoveLookMs > 0 && { slowest_would_move_look_ms: Math.round(n.slowestWouldMoveLookMs) }, ...n.moveAsideFailedCount > 0 && { move_aside_failed_count: n.moveAsideFailedCount }, ..._ > 0 && { shared_saved_name_file_count: _, shared_saved_name_same_id_file_count: a }, ...y > 0 && { time_ordered_id_file_count: y }, uploads_root_code: n.uploadsRootCode, ...n.whatStandsAside !== void 0 && { move_aside_mode_code: di[n.whatStandsAside] }, ...n.modelCopyBesidePassedCount > 0 && { model_copy_beside_passed_count: n.modelCopyBesidePassedCount }, ...n.modelCopyBesideMissedCount > 0 && { model_copy_beside_missed_count: n.modelCopyBesideMissedCount }, ...n.lastModelCopyBesideMiss !== void 0 && { last_model_copy_beside_miss_code: ni[n.lastModelCopyBesideMiss] }, ...n.modelCopyBesideUnneededCount > 0 && { model_copy_beside_unneeded_count: n.modelCopyBesideUnneededCount } };
}
function jt(e, o) {
  return e.failedWriteCount++, e.lastFailedWrite = { code: (0, import_chunk_jv7av99m.Cr)(o) ?? (0, import_chunk_78g0060s.S)("unknown"), step: (0, import_chunk_78g0060s.S)("write_during_download") }, { failure: "write" };
}
var ui = /* @__PURE__ */ new Set([404, 410]);
function Pe(e, o, r, n, s = false) {
  e.failedDownloadCount++;
  let _ = e.failedDownloads, a = Jo[o];
  if (_[a] = (_[a] ?? 0) + 1, r > 0) _.partway_failed_count = (_.partway_failed_count ?? 0) + 1;
  if (n !== void 0) _.last_failed_http_status = n;
  if (o === "too_large" || o === "no_token") return { failure: "download", cause: o };
  return { failure: "download", ...o === "http_status" && ui.has(n) && { cause: "not_found" }, ...o === "http_status" && n === 401 && { tokenRefused: true }, ...s && { mayPass: true } };
}
function nt(e) {
  return e === void 0 && (0, import_chunk_f9x2f6cx.HI)() === null ? (0, import_chunk_f9x2f6cx.Dsa)() : void 0;
}
function LXt(e, o) {
  let r = nt(o)?.get(xe(e));
  return r !== void 0 && (0, import_path.dirname)(r.path) === (0, import_chunk_fwgyarbe.ov)() ? r : void 0;
}
function xe(e) {
  return (0, import_chunk_mzmcvr6c.ht)(e) === null ? e : e.toLowerCase();
}
function io() {
  return (0, import_chunk_865at33z.gn)("tengu_dapper_brooks", false);
}
function ro() {
  return (0, import_chunk_865at33z.b)("tengu_twinkling_hoare", false) === true;
}
function zt(e, o) {
  let r = !o && ro();
  if (r) e.earlyReadsStopped = true;
  return r;
}
function li() {
  let e = (0, import_chunk_865at33z.b)("tengu_hazel_lantern", 0), o = (0, import_chunk_f9x2f6cx.st)(), r = o ? Do : St.max;
  if (typeof e !== "number" || !(e > 0)) return { ms: r, repeatRenews: false };
  return { ms: Math.min(r, Math.max(St.min, Math.round(e * 1e3))), repeatRenews: !o };
}
function gti(e, { issuedAt: o, credentials: r, onlyThese: n = false, isUnstoredFrame: s = false }) {
  if ((0, import_chunk_k449cc64.wt)()) return 0;
  let _ = io();
  if (!_.value) return Mtt("bridge_attachment_prefetch_flag_off", { file_count: e.length, flag_served: Ko[_.source] }), 0;
  let a = (0, import_chunk_f9x2f6cx.gse)(), y = li(), c = { file_count: e.length, started_count: 0, already_present_count: 0, held_limit_count: 0, start_budget_count: 0, skipped_count: 0 }, A = 0, M = 0, d = 0, p = 0;
  if (a.earlyReadsStopped === true && !ro()) a.earlyReadsStopped = void 0, a.earlyReadsStopReported = void 0;
  let g = a.earlyReadsStopped === true, T = /* @__PURE__ */ new Set(), I = Date.now() - o, v = I > Math.max(xo * y.ms, Vt), J = v ? [] : e.slice(0, import_chunk_f7aa6t06.sAe);
  if (c.skipped_count = e.length - J.length, n && !v) {
    let h = new Set(e.map((O) => xe(O.file_uuid)));
    for (let [O, H] of a.byFileUuid) if (!h.has(O) && H.release !== void 0 && !H.taken) H.release("dropped_unused"), M++;
  }
  for (let h of J) {
    let O = xe(h.file_uuid);
    if ((0, import_chunk_mzmcvr6c.ht)(h.file_uuid) === null || h.file_size !== void 0 && h.file_size > pti) {
      c.skipped_count++;
      continue;
    }
    let H = a.refusedEarly?.get(O);
    if (H !== void 0) {
      if (performance.now() - H < Yo) {
        d++;
        continue;
      }
      a.refusedEarly?.delete(O);
    }
    let Q = a.byFileUuid.get(O);
    if (Q !== void 0 || LXt(h.file_uuid, void 0) !== void 0) {
      if (c.already_present_count++, y.repeatRenews && Q?.release !== void 0 && !Q.taken && !T.has(O)) Rn(Q, y.ms), T.add(O), A++;
      continue;
    }
    if (g) {
      p++;
      continue;
    }
    let j = fi(h.file_size), L = ci(a, j);
    if (L === "held_limit") c.held_limit_count++;
    else if (L === "start_budget") c.start_budget_count++;
    else hi(a, O, h.file_uuid, j, h.is_image === true, r, y.ms, y.repeatRenews), T.add(O), c.started_count++;
  }
  let x = vn(a), B = { ...c, age_ms: Math.round(I), held_file_count: x.count, approx_held_bytes: Number(x.bytes.toPrecision(2)), ...y.repeatRenews && { hold_ms: y.ms, refreshed_count: A, renewed_since_last_report: a.renewalsNotYetReported ?? 0 }, ...n && { only_these: true, dropped_count: M }, ...d > 0 && { refused_before_count: d }, ...p > 0 && { early_reads_stopped_count: p } }, X = a.earlyReadsStopReported === true ? p : 0;
  if (A + d + X > 0 && A === c.already_present_count && c.file_count === A + d + X && M === 0) return a.renewalsNotYetReported = (a.renewalsNotYetReported ?? 0) + A, 0;
  if (a.renewalsNotYetReported = 0, p > 0) a.earlyReadsStopReported = true;
  let P = s ? { ...B, lane: (0, import_chunk_78g0060s.S)("stream") } : B;
  if (v) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch", "stale", P);
  else if (p > 0) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch", "mark_unseen_stop", P);
  else if (c.held_limit_count > 0) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch", "held_limit", P);
  else if (c.start_budget_count > 0) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch", "start_budget", P);
  else (0, import_chunk_cqa9hrgx.u)("bridge_attachment_prefetch", P);
  return Mtt(c.started_count > 0 ? "bridge_attachment_prefetch_started" : "bridge_attachment_prefetch_not_started", { ...B, stale: v }), c.started_count;
}
function Mtt(e, o) {
  (0, import_chunk_42tcgre6.q)("info", e, o);
}
function fi(e) {
  return e !== void 0 && e > 0 ? e : 0;
}
function ci(e, o) {
  let r = performance.now(), n = e.recentPrefetchStarts;
  while (n.length > 0 && r - n[0] >= Xo) n.shift();
  let s = vn(e);
  if (s.count >= Ro || s.bytes + o > kn()) return "held_limit";
  return n.length < Zt ? "ok" : "start_budget";
}
function vn(e) {
  let o = 0, r = 0, n = 0;
  for (let s of e.byFileUuid.values()) if (s.startedBy === "prefetch" && !s.taken) o++, r += s.settledAt === void 0 ? Math.max(s.receivedBytes, s.statedBytes) : s.receivedBytes, n += s.receivedBytes + (s.modelCopy?.receivedBytes ?? 0);
  return { count: o, bytes: r, inMemory: n };
}
function mi(e) {
  let o = [...e.byFileUuid.values()].filter((r) => (r.modelCopy?.receivedBytes ?? 0) > 0).sort((r, n) => (n.modelCopy?.startedAt ?? 0) - (r.modelCopy?.startedAt ?? 0));
  for (let r of o) {
    if (vn(e).inMemory <= kn()) return;
    if (r.modelCopy !== void 0) qe(r, r.modelCopy, "held_limit");
  }
}
function qe(e, o, r) {
  if (o.reported) return;
  if (o.reported = true, e?.modelCopy === o) e.modelCopy = void 0;
  o.abort.abort();
  let n = o.settled;
  o.settled = void 0, o.outcome = Promise.resolve({ failure: "stopped" });
  let s = n !== void 0 && "failure" in n ? n : null, _ = { duration_ms: Math.round((o.settledAt ?? performance.now()) - o.startedAt), ...s?.httpStatus !== void 0 && { http_status: s.httpStatus }, ...o.markSeen !== void 0 && { mark_seen: o.markSeen } };
  if (r === "used") {
    (0, import_chunk_cqa9hrgx.u)("bridge_attachment_prefetch_model_copy", _);
    return;
  }
  (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch_model_copy", s?.failure === r && tt(s) ? "no_answer" : r, _);
}
function _i(e) {
  e.release?.("expired_unused");
}
function Rn(e, o) {
  clearTimeout(e.expiry), e.expiry = setTimeout(_i.bind(void 0, e), o), e.expiry.unref();
}
function hi(e, o, r, n, s, _, a, y) {
  let c = new AbortController(), A = false, M = Sn({ fileUuid: r, baseUrl: void 0, modelCopy: false, forPrefetch: true, maxBytes: pti, spillTo: void 0, quietLimitMs: xn, endsAt: Xn(performance.now()), token: async () => {
    let p = await (0, import_chunk_mw2v4wks.t1)(_);
    if (p) d.bearer = (0, import_chunk_ccm69jjy.Je)(p);
    return p;
  }, abort: c, totals: void 0, onServed: (p) => {
    let g = zt(e, p);
    Mtt("bridge_attachment_prefetch_served", { mark_seen: p, ...!p && { stops_early_reads: g } });
  }, admitBytes: (p) => {
    if (d.receivedBytes = p, d.taken) return true;
    let g = vn(e);
    if (g.bytes <= kn()) {
      if (g.inMemory > kn()) mi(e);
      return true;
    }
    return d.receivedBytes = 0, d.statedBytes = 0, false;
  } }), d = so("prefetch", c, M, void 0);
  if (d.statedBytes = n, d.release = (p) => {
    if (e.byFileUuid.get(o) !== d || d.taken) return;
    if (p === "expired_unused" && y && d.settledAt === void 0) {
      Rn(d, a);
      return;
    }
    if (A = true, clearTimeout(d.expiry), e.byFileUuid.delete(o), c.abort(), d.modelCopy !== void 0) qe(d, d.modelCopy, p);
    let g = { download_finished: d.settledAt !== void 0, approx_bytes: Number(d.receivedBytes.toPrecision(2)), ...p === "dropped_unused" && { held_for_ms: Math.round(performance.now() - d.startedAt) } };
    (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch_download", p, g), Mtt(`bridge_attachment_prefetch_${p}`, g);
  }, Rn(d, a), e.recentPrefetchStarts.push(d.startedAt), e.byFileUuid.set(o, d), M.then((p) => {
    if (!("failure" in p)) {
      if (y && e.byFileUuid.get(o) === d && !d.taken) Rn(d, a);
      return;
    }
    if (e.byFileUuid.get(o) === d && !d.taken) {
      if (e.byFileUuid.delete(o), clearTimeout(d.expiry), d.modelCopy !== void 0) qe(d, d.modelCopy, "original_failed");
    }
    let g = p.failure === "http_status" && p.httpStatus === jo;
    if (g && !d.taken) {
      let B = e.refusedEarly ??= /* @__PURE__ */ new Map();
      if (B.delete(o), B.size >= zo) B.delete(B.keys().next().value ?? o);
      B.set(o, performance.now());
    }
    if (A) return;
    let T = { duration_ms: Math.round(performance.now() - d.startedAt), ...p.httpStatus !== void 0 && { http_status: p.httpStatus } }, I = tt(p), v = I ? "no_answer" : p.failure;
    if (g) {
      (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch_download", "refused_early", T), Mtt("bridge_attachment_prefetch_failed", { ...T, failure_code: Vo });
      return;
    }
    let J = d.taken, x = J?.by === "joiner" && J.bearer === d.bearer && ao(d, J.at);
    if (x) (0, import_chunk_cqa9hrgx.m)("bridge_attachment_prefetch_download", v, T);
    else (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch_download", v, T);
    Mtt(x ? "bridge_attachment_prefetch_failed_file_lost" : "bridge_attachment_prefetch_failed", { ...T, failure_code: I ? Zo : qo[p.failure] });
  }).catch(import_chunk_k449cc64.i), On() && s && et(n) && e.recentPrefetchStarts.length <= Go) {
    let p = new AbortController(), g = { outcome: Sn({ fileUuid: r, baseUrl: void 0, modelCopy: true, forPrefetch: true, maxBytes: import_chunk_r6fna520.Qv.targetRawSize, spillTo: void 0, quietLimitMs: Qn, endsAt: Xn(performance.now()), token: async () => {
      let T = await (0, import_chunk_mw2v4wks.t1)(_);
      if (T) g.bearer = (0, import_chunk_ccm69jjy.Je)(T);
      return T;
    }, abort: p, totals: void 0, onServed: (T) => {
      g.markSeen = T, zt(e, T);
    }, admitBytes: (T) => {
      if (d.modelCopy !== g) return true;
      if (g.receivedBytes = T, vn(e).inMemory <= kn()) return true;
      return qe(d, g, "held_limit"), false;
    } }), settled: void 0, settledAt: void 0, abort: p, bearer: void 0, markSeen: void 0, receivedBytes: 0, startedAt: performance.now(), reported: false };
    d.modelCopy = g, g.outcome.then((T) => {
      if (g.settledAt = performance.now(), g.reported) return;
      if (g.settled = T, "failure" in T && d.modelCopy === g) qe(d, g, T.failure);
    }).catch(import_chunk_k449cc64.i);
  }
}
function so(e, o, r, n) {
  let s = { startedBy: e, bytes: r.then((_) => {
    if (s.settledAt = performance.now(), "failure" in _) return s.failure = _.failure, s.headersTimedOut = tt(_), null;
    if ("writeFailed" in _) return s.failure = "error", s.writeFailed = _.writeFailed, null;
    if (!("data" in _)) return null;
    return s.servedPageCount = _.servedPageCount, s.servedAsPersonsOwn = _.servedAsPersonsOwn === true, _.data;
  }), startedAt: performance.now(), settledAt: void 0, failure: void 0, headersTimedOut: false, receivedBytes: 0, statedBytes: 0, servedPageCount: void 0, servedAsPersonsOwn: false, abort: o, taken: e === "message" ? { by: "starter" } : void 0, expiry: void 0, bearer: n };
  return s;
}
function ao(e, o) {
  let r = (e.settledAt ?? performance.now()) - o;
  if (e.failure === void 0) return false;
  if (e.startedBy === "prefetch" && e.failure === "too_large") return !Qt();
  return e.startedBy !== "prefetch" || e.receivedBytes > 0 && e.failure !== "stalled" && r > qt;
}
function pi(e, o, r) {
  if (e.taken) return false;
  return e.taken = { by: "joiner", at: o, bearer: r }, clearTimeout(e.expiry), true;
}
function gi(e, o, { inFlight: r, passes: n, sameBearer: s, waitedMs: _ }) {
  let a = { in_flight: r, waited_ms: Math.round(_), download_ms: Math.round((e.settledAt ?? performance.now()) - e.startedAt), approx_bytes: Number(o.length.toPrecision(2)) };
  if (n) (0, import_chunk_cqa9hrgx.u)("bridge_attachment_prefetch_download", a), Mtt(r ? "bridge_attachment_prefetch_used_joined" : "bridge_attachment_prefetch_used_ready", a);
  else (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch_download", s ? "attestation_mismatch" : "bearer_changed", a), Mtt(s ? "bridge_attachment_prefetch_attestation_mismatch" : "bridge_attachment_prefetch_bearer_changed", a);
}
async function _ti(e, o, r, n, s, _ = false, a) {
  let y = performance.now() - o + qt, c = 0, A = e, M;
  for (let d = 0; ; d++) {
    if (Zn(s.endsAt)) return Mn(false, true);
    let p = new AbortController(), g = () => p.abort(), T = M?.ends ?? r.signal;
    if (T.addEventListener("abort", g, { once: true }), T.aborted) p.abort();
    if (n !== void 0) {
      if (n.downloadTryCount++, M !== void 0) n.lateTryCount++;
    }
    s.admitBytes(0);
    let I = d + 1 < A && performance.now() + xn + Pn <= y, v = await Sn({ ...s, totals: n, abort: p, quietLimitMs: I || M !== void 0 ? xn : Kt });
    if (T.removeEventListener("abort", g), !("failure" in v)) {
      if (n !== void 0 && d > 0 && !("writeFailed" in v)) {
        if (n.recoveredFileCount++, M !== void 0) n.recoveredLateFileCount++;
      }
      return v;
    }
    let J = Kn(v), x = performance.now(), B = y - x, X = (0, import_chunk_5appeerh.LI)({ baseMs: So, attempt: d, floorMs: Pn }), P = _ ? Math.min(v.retryAfterMs ?? 0, Fo) : 0, h = d === 0 && P > 0;
    if (h) A++;
    let O = Math.min(Math.max(X, h ? 0 : P), Math.max(Pn, B)), H = I && v.failure === "stalled";
    if (J && d + 1 < A && (H || B >= Pn) && (s.endsAt === void 0 || x + O < s.endsAt)) {
      if (n !== void 0 && O > X) c += O - X, n.slowestRetryAfterWaitMs = Math.max(n.slowestRetryAfterWaitMs, c);
      if (await (0, import_chunk_5appeerh.K)(O, r.signal), !r.signal.aborted) continue;
    }
    if (!J || v.asksForNoRetry === true) return v;
    if (M === void 0) {
      let j = a?.();
      if (j === void 0 || j.isTurnUnderWay()) return v;
      let L = (0, import_chunk_865at33z.b)("tengu_starry_breeze", 0);
      if (typeof L !== "number" || !(L > 0)) return v;
      let _e = j.startedAt + Math.min(L * 1e3, Io);
      M = { times: [_e - To, _e].map((he) => he - Math.random() * Eo), ends: AbortSignal.any([r.signal, j.stop]) };
    }
    let Q = M.times.find((j) => j >= x + (v.retryAfterMs ?? 0) && (s.endsAt === void 0 || j < s.endsAt));
    if (Q === void 0) return v;
    if (M.times = M.times.filter((j) => j > Q), await (0, import_chunk_5appeerh.K)(Q - x, M.ends), M.ends.aborted) return v;
  }
}
async function PXl(e, o, r, n, s) {
  if (!(0, import_chunk_zhr7rpv7.jn)()) return { failure: "no_token" };
  let _ = new AbortController(), a = () => _.abort();
  if (r.addEventListener("abort", a, { once: true }), r.aborted) a();
  try {
    return await _ti(mti.startsTurn, 0, _, void 0, { fileUuid: e, baseUrl: void 0, modelCopy: false, pageTexts: s, forPrefetch: false, maxBytes: o, spillTo: void 0, token: () => (0, import_chunk_mw2v4wks.t1)(n), admitBytes: () => true });
  } finally {
    r.removeEventListener("abort", a);
  }
}
function An() {
  let e = (0, import_chunk_f9x2f6cx.gse)();
  return e.signInRefresh ??= { attempted: false, recoveries: { begun: 0, running: 0 } }, e.signInRefresh;
}
async function bi(e, o, r, n, s, _) {
  let a = An(), y = new AbortController(), c = (0, import_chunk_5appeerh.K)(xn, AbortSignal.any([n, y.signal])).then(() => {
    return;
  });
  try {
    let A = await Promise.race([(0, import_chunk_mw2v4wks.t1)(o).catch(() => {
      return;
    }), c]);
    if (A === e) {
      let M = a.attempted && a.recoveries.running === 0;
      if (!a.attempted) {
        a.attempted = true;
        let p = false;
        a.run = (0, import_chunk_865at33z.azn)(a, () => (0, import_chunk_865at33z.UR)(e, o, r, { refusedCall: "other", onForcedRefreshOutcome: (g) => {
          if (import_chunk_865at33z.Dxr.has(g)) a.attempted = false;
          else p = true;
        } })).then(async () => {
          if (!p && await (0, import_chunk_mw2v4wks.t1)(o) !== e) a.attempted = false;
        }).catch(import_chunk_k449cc64.i);
      }
      if (!s) {
        if (!(await Promise.race([(0, import_chunk_865at33z.pp)(o).catch(() => null), c]))?.refreshToken) return;
      }
      let d = performance.now();
      A = await Promise.race([(a.run ?? Promise.resolve()).then(() => M ? (0, import_chunk_865at33z.ECt)(o) : void 0).then(() => (0, import_chunk_mw2v4wks.t1)(o)).catch(() => {
        return;
      }), c]), _.slowest401RefreshWaitMs = Math.max(_.slowest401RefreshWaitMs, performance.now() - d);
    }
    return A && A !== e && !n.aborted ? { bearer: A, stamp: (0, import_chunk_865at33z.ydt)(a.recoveries) } : void 0;
  } finally {
    y.abort();
  }
}
async function Sn({ fileUuid: e, baseUrl: o, modelCopy: r, pageTexts: n, forPrefetch: s, maxBytes: _, spillTo: a, token: y, abort: c, quietLimitMs: A, endsAt: M, totals: d, onServed: p, onPart: g, admitBytes: T }) {
  if (Zn(M)) return Mn(false, true);
  let I = s ? "of a prefetched file" : e, v = false, J = false, x = () => {
    v = true, c.abort();
  }, B = setTimeout(x, A), X = performance.now(), P = false, O = M !== void 0 ? setTimeout(() => {
    P = true, x();
  }, M - X) : void 0, H, Q, j;
  try {
    if ((0, import_chunk_mw2v4wks.NUt)()) await Promise.race([(0, import_chunk_478yxt5w.O7)(), Gt(c.signal)]);
    let L = await Promise.race([y(), Gt(c.signal)]);
    if (c.signal.aborted) return v ? Mn(J, P) : { failure: "stopped" };
    if (!L) return { failure: "no_token" };
    let _e;
    try {
      let G = `/api/oauth/files/${encodeURIComponent(e)}/content`;
      if (_e = `${o ?? (0, import_chunk_mw2v4wks.sj)()}${G}${r ? "?model_copy=inference_highres" : n ? "?model_copy=page_texts" : ""}`, e === "" || !new URL(_e).pathname.endsWith(G)) return R(`fetch ${I} refused: the id does not stay one segment of the files route`), { failure: "error", final: true };
    } catch (G) {
      return R(`fetch ${I} has no URL: ${s ? G instanceof Error ? G.name : "a non-Error" : G}`), { failure: "error", final: true };
    }
    if ((0, import_chunk_mw2v4wks.NUt)(_e, L)) return R(`fetch ${I} refused: the stored login may not go there`), { failure: "error", final: true };
    let he = { Authorization: `Bearer ${L}`, "User-Agent": (0, import_chunk_tb84sczh.Ri)(), "anthropic-client-version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, ...s && { [Ho]: "1" } }, F = (G, le) => {
      (0, import_chunk_702cfzzh.Vke)("file_read", he, () => _e);
      let ce = { headers: he, ...s && { cache: "no-store" }, signal: G, ...(0, import_chunk_f9x2f6cx.st)() && { redirect: "manual" } };
      if (le !== void 0) {
        (0, import_chunk_np189awg.TOo)(le, "GET", _e);
        let Te = yt((0, import_chunk_f9x2f6cx.gse)(), G);
        j = Te;
        try {
          return le.fetch(_e, ce).catch((Ee) => {
            throw Te(), Ee;
          });
        } catch (Ee) {
          throw Te(), Ee;
        }
      }
      return fetch(_e, { ...ce, ...(0, import_chunk_3jjr3wje.wl)({ url: _e }), ...(0, import_chunk_f9x2f6cx.st)() && { keepalive: false } });
    }, Be = In(), V;
    if (Be === 0) V = await F(c.signal);
    else {
      let G = (0, import_chunk_f9x2f6cx.gse)(), le = bt(G, _e);
      if (le !== void 0) Q = G;
      V = await Ct((ce, Te) => F(ce, Te ? void 0 : le), Be, c.signal, G, le !== void 0);
    }
    if (J = true, clearTimeout(B), B = setTimeout(x, A), d !== void 0) {
      if (d.slowestTimeToHeadersMs = Math.max(d.slowestTimeToHeadersMs, performance.now() - X), !r && V.headers.get(Ft.name)?.trim() === Ft.value) d.answeredByGoCount++;
    }
    if (V.status !== 200) return R(`fetch ${I} failed: status=${V.status}`), await (0, import_chunk_7ca0319p.Yj)(V), v ? Mn(J, P) : { failure: "http_status", httpStatus: V.status, ...(V.status === 429 || V.status === 503) && { retryAfterMs: (0, import_chunk_p1ewvgeh.N$i)({ "retry-after": V.headers.get("retry-after") }) }, ...V.headers.get("x-should-retry") === "false" && { asksForNoRetry: true } };
    p?.(V.headers.get(Tt.name)?.trim() === Tt.value);
    let Ce = V.headers.get("content-encoding") === null ? V.headers.get("content-length") : null, Ye = Ce !== null && /^\d+$/.test(Ce) ? Number(Ce) : void 0, Ge = g !== void 0, Ue = V.body?.getReader(), Ae = [], Me = 0;
    while (Ue !== void 0) {
      let { done: G, value: le } = await Ue.read();
      if (G) break;
      if (B.refresh(), Me += le.byteLength, Me > (a === void 0 ? _ : import_chunk_f7aa6t06.kgr)) return R(`fetch ${I} over size cap (${Me} bytes so far)`), c.abort(), { failure: "too_large" };
      if (!T(Me)) return R(`fetch ${I} stopped: unused prefetched files would exceed their limit in memory`), c.abort(), { failure: "held_limit" };
      if (Ae.push(le), Ge &&= g?.(Buffer.concat(Ae, Me), Ye) === true, a !== void 0 && Me > _) {
        clearTimeout(B);
        try {
          H ??= await a();
          for (let ce of Ae) await H.write(ce);
        } catch (ce) {
          return R(`download of ${I} stopped, no retry: write to disk failed: ${ce}`), c.abort(), { writeFailed: ce };
        }
        B = setTimeout(x, Kt), Ae = [];
      }
    }
    if (d !== void 0) d.downloadedBytes += Me;
    if (H !== void 0) return await H.finish().then((G) => ({ file: G }), (G) => ({ writeFailed: G }));
    return { data: Buffer.concat(Ae, Me), servedPageCount: yi(V.headers.get(Lo)), servedAsPersonsOwn: wi(V.headers), ...Ye !== void 0 && { statedLength: Ye }, ...r && { originalFacts: Ci(V.headers.get($o)) } };
  } catch (L) {
    return R(`fetch ${I} threw: ${s ? L instanceof Error ? L.name : "a non-Error" : L}`), v ? Mn(J, P) : { failure: c.signal.aborted ? "stopped" : "error" };
  } finally {
    if (clearTimeout(B), j?.(), clearTimeout(O), Q !== void 0) Q.readHasEventsPool = void 0;
    if (await H?.discard(), d !== void 0) d.slowestDownloadMs = Math.max(d.slowestDownloadMs, performance.now() - X);
  }
}
function wi(e) {
  return e.get(Wo) === "true" && e.get(Uo) === "false" && e.get("content-type") === "text/plain; charset=utf-8";
}
function yi(e) {
  return e !== null && /^[1-9][0-9]{0,2}$/.test(e) ? Number(e) : void 0;
}
function Ci(e) {
  let [, o, r, n, s] = e?.match(/^(image\/[a-z]+); bytes=([1-9]\d{0,14}); width=([1-9]\d{0,8}); height=([1-9]\d{0,8})$/) ?? [];
  return o !== void 0 && (0, import_chunk_kzzkh06w.Wdl)(o) ? { mediaType: o, sides: { width: Number(n), height: Number(s) }, wholeLength: Number(r) } : void 0;
}
async function Yt(e, o, r, ...n) {
  let s = (0, import_chunk_f9x2f6cx.gse)().pageCountsOfWrites ??= /* @__PURE__ */ new Map();
  s.set(o, r);
  try {
    return await e.write(...n);
  } finally {
    if (s.get(o) === r) s.delete(o);
  }
}
function tt(e) {
  return "failure" in e && e.failure === "stalled" && e.beforeHeaders;
}
function Mn(e, o) {
  return { failure: "stalled", beforeHeaders: !e, ...o && { outOfTime: true } };
}
function Gt(e) {
  return new Promise((o) => {
    if (e.aborted) {
      o(void 0);
      return;
    }
    e.addEventListener("abort", () => o(void 0), { once: true });
  });
}
var b5o = "A file could not be saved: no space left on device";
function Yn(e, o) {
  return o === 1 ? "[attachment did not arrive]" : e === o ? `[${o} attachments did not arrive]` : `[${e} of ${o} attachments did not arrive]`;
}
