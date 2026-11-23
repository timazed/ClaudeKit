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
      } catch (e2) {
        return Promise.reject(e2);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e2, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e2, _2.suppressed = s2, _2;
  };
  var fail = (e2) => error = hasError ? new E(e2, error, "An error was suppressed during disposal") : (hasError = true, e2);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e2) => (fail(e2), next()));
      } catch (e2) {
        fail(e2);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_3pe3q4ea_exports = {};
__export(chunk_3pe3q4ea_exports, {
  Rha: () => Rha,
  kBs: () => kBs,
  v9l: () => v9l
});
module.exports = __toCommonJS(chunk_3pe3q4ea_exports);
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_7azstk6m = require("/$bunfs/root/chunk-7azstk6m.js");
var import_chunk_ddk99w14 = require("/$bunfs/root/chunk-ddk99w14.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_3dxkbe9d = require("/$bunfs/root/chunk-3dxkbe9d.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_v9dxspne = require("/$bunfs/root/chunk-v9dxspne.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_2kg8bxyd = require("/$bunfs/root/chunk-2kg8bxyd.js");
var import_chunk_jnjxe5w9 = require("/$bunfs/root/chunk-jnjxe5w9.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_vfw28y4s = require("/$bunfs/root/chunk-vfw28y4s.js");
var import_chunk_r3wrey46 = require("/$bunfs/root/chunk-r3wrey46.js");
var import_chunk_f0sbddj1 = require("/$bunfs/root/chunk-f0sbddj1.js");
var import_chunk_7tdejx4j = require("/$bunfs/root/chunk-7tdejx4j.js");
var import_chunk_wsm915mg = require("/$bunfs/root/chunk-wsm915mg.js");
var import_chunk_c2gvx2m9 = require("/$bunfs/root/chunk-c2gvx2m9.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_6n3q0gvw = require("/$bunfs/root/chunk-6n3q0gvw.js");
var import_chunk_4we2aqs8 = require("/$bunfs/root/chunk-4we2aqs8.js");
var import_chunk_s7te3n3c = require("/$bunfs/root/chunk-s7te3n3c.js");
var import_chunk_95amtstn = require("/$bunfs/root/chunk-95amtstn.js");
var import_chunk_q4jxz8c5 = require("/$bunfs/root/chunk-q4jxz8c5.js");
var import_chunk_4wtfvxk7 = require("/$bunfs/root/chunk-4wtfvxk7.js");
var import_chunk_gzt0mgvc = require("/$bunfs/root/chunk-gzt0mgvc.js");
var import_chunk_xb56zerw = require("/$bunfs/root/chunk-xb56zerw.js");
var import_chunk_424x9gf0 = require("/$bunfs/root/chunk-424x9gf0.js");
var import_chunk_gpach6z0 = require("/$bunfs/root/chunk-gpach6z0.js");
var import_chunk_6k3h3wej = require("/$bunfs/root/chunk-6k3h3wej.js");
var import_chunk_kt20mjaj = require("/$bunfs/root/chunk-kt20mjaj.js");
var import_chunk_amwj5gqt = require("/$bunfs/root/chunk-amwj5gqt.js");
var import_chunk_vtbeed6p = require("/$bunfs/root/chunk-vtbeed6p.js");
var import_chunk_tvwsywt0 = require("/$bunfs/root/chunk-tvwsywt0.js");
var import_chunk_gdmb039p = require("/$bunfs/root/chunk-gdmb039p.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_6qkpxgbg = require("/$bunfs/root/chunk-6qkpxgbg.js");
var import_chunk_8zg5scwx = require("/$bunfs/root/chunk-8zg5scwx.js");
var import_chunk_snett3g5 = require("/$bunfs/root/chunk-snett3g5.js");
var import_chunk_er4k5wmh = require("/$bunfs/root/chunk-er4k5wmh.js");
var import_chunk_gd8mknr6 = require("/$bunfs/root/chunk-gd8mknr6.js");
var import_chunk_dwa7jc2e = require("/$bunfs/root/chunk-dwa7jc2e.js");
var import_chunk_69vbx4w6 = require("/$bunfs/root/chunk-69vbx4w6.js");
var import_chunk_ggqyvxbh = require("/$bunfs/root/chunk-ggqyvxbh.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_a824gc5p = require("/$bunfs/root/chunk-a824gc5p.js");
var import_chunk_wbg8x4na = require("/$bunfs/root/chunk-wbg8x4na.js");
var import_chunk_pdxaa9x8 = require("/$bunfs/root/chunk-pdxaa9x8.js");
var import_chunk_87sep695 = require("/$bunfs/root/chunk-87sep695.js");
var import_chunk_t4r5tv0m = require("/$bunfs/root/chunk-t4r5tv0m.js");
var import_chunk_hxcebha8 = require("/$bunfs/root/chunk-hxcebha8.js");
var import_chunk_ra3kqnyn = require("/$bunfs/root/chunk-ra3kqnyn.js");
var import_chunk_pw8jgay2 = require("/$bunfs/root/chunk-pw8jgay2.js");
var import_chunk_0pkh1evw = require("/$bunfs/root/chunk-0pkh1evw.js");
var import_chunk_1tbk901f = require("/$bunfs/root/chunk-1tbk901f.js");
var import_chunk_fcw9a1xz = require("/$bunfs/root/chunk-fcw9a1xz.js");
var import_chunk_vx3fbgjb = require("/$bunfs/root/chunk-vx3fbgjb.js");
var import_chunk_mj0kpnar = require("/$bunfs/root/chunk-mj0kpnar.js");
var import_chunk_cetpdee2 = require("/$bunfs/root/chunk-cetpdee2.js");
var import_chunk_7a5j4de6 = require("/$bunfs/root/chunk-7a5j4de6.js");
var import_chunk_8dkwjpxx = require("/$bunfs/root/chunk-8dkwjpxx.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_fv4zcby7 = require("/$bunfs/root/chunk-fv4zcby7.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_5yhrnn87 = require("/$bunfs/root/chunk-5yhrnn87.js");
var import_chunk_0t7st4dz = require("/$bunfs/root/chunk-0t7st4dz.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_84d4qt5z = require("/$bunfs/root/chunk-84d4qt5z.js");
var import_chunk_8cykvqs9 = require("/$bunfs/root/chunk-8cykvqs9.js");
var import_chunk_rkksytw2 = require("/$bunfs/root/chunk-rkksytw2.js");
var import_chunk_yanpyg3f = require("/$bunfs/root/chunk-yanpyg3f.js");
var import_chunk_axqdjrej = require("/$bunfs/root/chunk-axqdjrej.js");
var import_chunk_r5rtrbxq = require("/$bunfs/root/chunk-r5rtrbxq.js");
var import_chunk_r59sj93t = require("/$bunfs/root/chunk-r59sj93t.js");
var import_chunk_5h9h52az = require("/$bunfs/root/chunk-5h9h52az.js");
var import_chunk_zyws26f3 = require("/$bunfs/root/chunk-zyws26f3.js");
var import_chunk_4p6z73jq = require("/$bunfs/root/chunk-4p6z73jq.js");
var import_chunk_zdtzd1bp = require("/$bunfs/root/chunk-zdtzd1bp.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_q4y63y6c = require("/$bunfs/root/chunk-q4y63y6c.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_crypto = require("crypto");
var import_path = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_crypto2 = require("crypto");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var import_crypto3 = require("crypto");
var import_path4 = require("path");
var import_path5 = require("path");
var import_path6 = require("path");
var import_path7 = require("path");
var import_util = require("util");
var Vh = 200;
function Fs() {
  return { notified: /* @__PURE__ */ new Map() };
}
function Tc(h, b, w) {
  return { attach_kind: !b ? (0, import_chunk_78g0060s.S)("no_origin") : h === b ? (0, import_chunk_78g0060s.S)("origin_return") : (0, import_chunk_78g0060s.S)("other"), is_first_attach_of_visit: w === 0 };
}
function Oc(h, b, w, E) {
  let v = h.notified.get(b);
  if (v?.kind === w) return false;
  if (!v && h.notified.size >= Vh) {
    let C = h.notified.keys().next().value;
    if (C !== void 0) h.notified.delete(C);
  }
  return h.notified.set(b, { kind: w, at: E }), true;
}
function Ls(h, b, w) {
  let E = h.notified.get(b);
  if (!E) return;
  return h.notified.delete(b), { ms_since_notification: Math.max(0, w - E.at), notified_kind: (0, import_chunk_78g0060s.f)(E.kind) };
}
function Oi(h) {
  return { model: h.sessionModel, effort: h.sessionEffort, fastMode: h.sessionFastMode };
}
function xc(h, b) {
  if (b.model === void 0 && b.effort === void 0 && b.fastMode === void 0) return h;
  return { ...h, ...b.model !== void 0 && { model: b.model }, ...b.effort !== void 0 && { effort: b.effort }, ...b.fastMode !== void 0 && { fastMode: b.fastMode } };
}
function Gn({ launch: h, window: b }) {
  let E = Jh(b.model ?? h?.model ?? (import_chunk_c203g5kd.s.ANTHROPIC_MODEL || (0, import_chunk_2yx6c1y2.vt)().model || (0, import_chunk_865at33z.nke)() || void 0)) ?? b.model ?? (h?.model === void 0 ? (0, import_chunk_4p6z73jq.A5r)() : (0, import_chunk_4p6z73jq.tZs)(h.model, "explicit") ?? (0, import_chunk_865at33z.qd)()), v = (0, import_chunk_865at33z.jt)(E), C = b.effort ?? h?.effort, T = C === void 0 ? (0, import_chunk_k67pwqya.uws)((0, import_chunk_k67pwqya.yvt)(), v) : (0, import_chunk_k67pwqya._vt)(C) ?? (0, import_chunk_k67pwqya.IU)(C), F = (0, import_chunk_k67pwqya.zk)(v) ? (0, import_chunk_k67pwqya.CN)((0, import_chunk_k67pwqya.G_)(v, T, { carriedEffort: null }) ?? "high") : void 0;
  return { model: (0, import_chunk_865at33z.UN)(E), effort: F, effortOverridden: (0, import_chunk_k67pwqya.rk)() !== void 0, ultracode: (0, import_chunk_k67pwqya.IC)((0, import_chunk_k67pwqya.ocn)(C), v), ...Bh(v, b.fastMode) };
}
function Pc(h, b, w) {
  try {
    let { model: E, effort: v, fast: C } = Gn({ launch: b, window: { model: void 0, effort: void 0, fastMode: void 0 } }), T = (0, import_chunk_w578pjby._)({ model: E, effort: v, fast: C });
    if (h !== void 0 && h !== T) (0, import_chunk_95amtstn.C_a)(w);
    return T;
  } catch (E) {
    return (0, import_chunk_w578pjby.t)(`Agent view spare check skipped: ${(0, import_chunk_jv7av99m.d)(E)}`, { level: "error" }), h;
  }
}
function Jh(h) {
  return;
}
function Bh(h, b) {
  let w = jh(h, b);
  return { fast: w, fastBlockedReason: b === void 0 || b !== void 0 && w === (b ? "on" : "off") || w === void 0 ? void 0 : b ? (0, import_chunk_865at33z.dS)(h) ? (0, import_chunk_865at33z.D9)(h, Fc(b)) ?? void 0 : `${(0, import_chunk_865at33z.UN)(h)} doesn't have fast mode` : "Your organization's managed settings turn it on" };
}
function jh(h, b) {
  if (!(0, import_chunk_865at33z.na)()) return;
  let w = (0, import_chunk_2yx6c1y2.vt)();
  return (b === void 0 ? (0, import_chunk_865at33z.C7e)(w) : (0, import_chunk_865at33z.C7e)({ ...w, fastMode: (0, import_chunk_2yx6c1y2._e)("policySettings")?.fastMode ?? b }, { flagFastMode: b })) && (0, import_chunk_865at33z.dS)(h) && (0, import_chunk_865at33z.$N)(h, Fc(b)) === null ? "on" : "off";
}
function Fc(h) {
  return { orgStatus: (0, import_chunk_865at33z.pAs)(), sessionOptIn: h === true };
}
function Lc() {
  try {
    return (0, import_chunk_8nvd6fqx.ih)(), { ok: true };
  } catch (h) {
    return { ok: false, error: h };
  }
}
async function Mc(h) {
  process.exitCode = 1;
  let b = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s4dyym4n.js"))).catch(() => {
    return;
  });
  b?.cleanupTerminalModes();
  try {
    (0, import_fs.writeSync)(2, import_chunk_d57v19zt.Re.red((0, import_chunk_13h3tw8q.js)((0, import_chunk_jv7av99m.d)(h))) + `
`);
  } catch {
  }
  try {
    let { initSinks: w } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s33f06f5.js")));
    w();
  } catch {
  }
  if ((0, import_chunk_k449cc64.i)(h), b === void 0) return (0, import_chunk_mpk68jst.Bn)();
  await b.gracefulShutdown(1, "other", { suppressResumeHint: true });
}
function Ms(h) {
  if (!h.permissionModeInherited || !h.permissionMode) return h.permissionMode;
  let b = Ac(h.permissionMode), w = (0, import_chunk_2yx6c1y2.vt)().permissions?.defaultMode;
  if (w === void 0 || (0, import_chunk_k67pwqya.u2t)(w) === void 0 || w === "bypassPermissions" && (0, import_chunk_3b9jqhjk.OC)() || w === "auto" && !(0, import_chunk_bzyb60p0.JS)() || ((0, import_chunk_zyws26f3.GYt)() ?? "default") !== "default") return b;
  let E = Ac(w);
  return (0, import_chunk_xcgcdx61.nP)(E, b) === void 0 ? E : b;
}
function Ac(h) {
  return h === "bypassPermissions" && !(0, import_chunk_87sep695.f5t)() ? "default" : h;
}
function Vc(h) {
  let b = h?.agent ?? (0, import_chunk_2yx6c1y2.vt)().agent;
  if (!h && !b) return;
  let w = h?.permissionMode ? (0, import_chunk_xcgcdx61.s$)(h.permissionMode) : void 0, E = (0, import_chunk_3b9jqhjk.OC)(), v = !E && (0, import_chunk_87sep695.f5t)(), C = !E && (0, import_chunk_2yx6c1y2.nce)(), T = h?.permissionModeInherited ? w : "default", A = w === "bypassPermissions" && !v ? C ? T : void 0 : w, L = h?.allowBypass && v ? true : void 0, J = h?.effort ? (0, import_chunk_k67pwqya.rcn)(h.effort).level : void 0;
  if (!A && !h?.model && !J && !b && !L) return;
  return { permissionMode: A, permissionModeInherited: A ? h?.permissionModeInherited : void 0, model: h?.model, effort: J, agent: b, allowBypass: L };
}
function Ds(h) {
  return !(0, import_chunk_xcgcdx61.qMo)(Ms(h)) || !!h.model || !!h.effort || !!h.agent || !!h.allowBypass;
}
function Fi(h) {
  let T = (0, import_chunk_sng02qpc.k)(24), { defaults: b } = h, { model: w, effort: E, agent: v, allowBypass: C } = b, F, A, L, J;
  if (T[0] !== v || T[1] !== C || T[2] !== b || T[3] !== E || T[4] !== w) {
    J = import_chunk_w1d7ygsk.Mn;
    D: {
      let V = Ms(b);
      let W = !!V && V !== "default";
      A = C && !W;
      if (!W && !w && !E && !v && !A) {
        J = null;
        break D;
      }
      F = import_chunk_wvchre07.it;
      L = W && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: (0, import_chunk_xcgcdx61.Oz)(V), children: [(0, import_chunk_xcgcdx61.Uut)(V), " ", (0, import_chunk_xcgcdx61.YC)(V)] });
    }
    T[0] = v, T[1] = C, T[2] = b, T[3] = E, T[4] = w, T[5] = F, T[6] = A, T[7] = L, T[8] = J;
  } else F = T[5], A = T[6], L = T[7], J = T[8];
  if (J !== import_chunk_w1d7ygsk.Mn) return J;
  let j;
  if (T[9] !== A) j = A && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: (0, import_chunk_xcgcdx61.Oz)("bypassPermissions"), children: [(0, import_chunk_xcgcdx61.Uut)("bypassPermissions"), " bypass available"] }), T[9] = A, T[10] = j;
  else j = T[10];
  let q;
  if (T[11] !== v) q = v && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["@", v] }), T[11] = v, T[12] = q;
  else q = T[12];
  let se;
  if (T[13] !== w) se = w && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: w }), T[13] = w, T[14] = se;
  else se = T[14];
  let ee;
  if (T[15] !== E) ee = E && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: E }), T[15] = E, T[16] = ee;
  else ee = T[16];
  let ce;
  if (T[17] !== F || T[18] !== L || T[19] !== j || T[20] !== q || T[21] !== se || T[22] !== ee) ce = (0, import_chunk_a46xeenj.o)(F, { children: [L, j, q, se, ee] }), T[17] = F, T[18] = L, T[19] = j, T[20] = q, T[21] = se, T[22] = ee, T[23] = ce;
  else ce = T[23];
  return ce;
}
function Jc(h, b) {
  return (0, import_chunk_9e5mdyfk.l1t)(h.state) && h.id !== b;
}
function Bc(h, b) {
  let w = b ?? "unknown";
  h.entryChannel = (0, import_chunk_78g0060s.f)(w), h.openFinished = null;
}
function jc(h, b, w = import_chunk_y53wbr8a.a) {
  let E = b.now ?? Date.now();
  if (h.openFinished === null) h.openFinished = new Set(b.allFinished.map((C) => C.id));
  let v = h.openFinished;
  for (let C of b.visibleFinished) {
    if (h.emitted.has(C.id)) continue;
    h.emitted.add(C.id);
    let T = Lr(C.state.firstTerminalAt), F = T ?? Lr(C.state.updatedAt) ?? E;
    w("tengu_bg_result_seen", { trigger: v.has(C.id) ? (0, import_chunk_78g0060s.S)("list_open") : (0, import_chunk_78g0060s.S)("render"), outcome: (0, import_chunk_78g0060s.fe)((0, import_chunk_9e5mdyfk.Hk)(C.state.state)), overlap: Uh(C, b.allCandidates, E), entry_channel: h.entryChannel, seen_latency_ms: Math.max(0, E - F), terminal_at_missing: T === null, jobSessionId: (0, import_chunk_49zxha55.Ce)(C.state.sessionId) });
  }
}
function Lr(h) {
  if (!h) return null;
  let b = Date.parse(h);
  return Number.isNaN(b) ? null : b;
}
function Uh(h, b, w) {
  let E = Lr(h.state.createdAt);
  if (E === null) return false;
  let v = Lr(h.state.firstTerminalAt) ?? w;
  return b.some((C) => {
    if (C.id === h.id) return false;
    let T = Lr(C.state.createdAt);
    if (T === null) return false;
    let F = Lr(C.state.firstTerminalAt) ?? w;
    return E < F && T < v;
  });
}
function Hc(h, b) {
  if (h) {
    if (b < 3e4) return 15e3;
    if (b < 3e5) return 6e4;
    return 18e4;
  }
  if (b < 3e4) return 6e4;
  if (b < 6e5) return 3e5;
  if (b < 36e5) return 9e5;
  return 18e5;
}
async function Ns(h, b) {
  let w = (0, import_chunk_nbyg4q5d.B_)(h, b);
  if (w !== void 0) {
    let v = await w.backend.statMeta(w.key);
    if (v.ok) return { kind: "present", mtimeMs: v.value.mtimeMs };
    let C = v.error;
    if (C.code === "NotFound") return { kind: "absent" };
    let T = "telemetryCode" in C ? C.telemetryCode : void 0;
    return T === "ELOOP" || T === "ENXIO" ? { kind: "refused" } : { kind: "unreadable", code: C.code };
  }
  return { kind: "present", mtimeMs: (await (0, import_promises.stat)(h)).mtimeMs };
}
async function Wc(h, b, w) {
  let E = (0, import_chunk_nbyg4q5d.B_)(h, w);
  if (E !== void 0) {
    let v = await E.backend.read([{ key: E.key, tail: b }]);
    if (!v.ok) throw Error("fleet view transcript tail read failed", { cause: v.error });
    let C = v.value.items[0];
    if (!C.found) throw Error("fleet view transcript tail: stream not found");
    return { content: Buffer.from(C.value).toString("utf8"), bytesRead: C.value.byteLength, bytesTotal: C.totalBytes };
  }
  return (0, import_chunk_w578pjby.LB)(h, b);
}
var Yh = 7, zh = 1048576, Bd = 16, Qh = '"subtype":"scheduled_task_fire"', Xh = /"timestamp":"([^"]+)"/;
function Gc() {
  return { scanStates: /* @__PURE__ */ new Map(), inFlightScans: /* @__PURE__ */ new Set() };
}
async function Kc(h, b) {
  let { scanStates: w, inFlightScans: E } = h;
  if (E.has(b)) return null;
  E.add(b);
  try {
    let v = await (0, import_promises2.open)(b, "r");
    try {
      let { size: C, ino: T } = await v.stat(), F = w.get(b);
      if (F && (F.ino !== T || F.offset > C)) F = void 0;
      if (F && F.tail.length > 0) {
        let D = Buffer.alloc(F.tail.length), { bytesRead: j } = await v.read(D, 0, D.length, F.offset - D.length);
        if (j !== D.length || !D.equals(F.tail)) F = void 0;
      }
      if (!F) F = { ino: T, offset: 0, tail: Buffer.alloc(0), count: 0, recent: [] }, w.set(b, F);
      if (C > F.offset) {
        let D = F.count, j = F.recent.slice(), q = Buffer.alloc(Math.min(zh, C - F.offset)), se = null, ee = F.offset, ce = F.offset, Z = F.tail;
        while (ee < C) {
          let { bytesRead: Y } = await v.read(q, 0, Math.min(q.length, C - ee), ee);
          if (Y <= 0) break;
          let de = q.subarray(0, Y), Fe = se ? se.length : 0, Se = se ? Buffer.concat([se, de]) : de, we = 0, le = Se.indexOf(10, Fe);
          while (le !== -1) {
            let ie = Se.toString("utf-8", we, le);
            if (ie.includes(Qh)) {
              let Oe = ie.match(Xh), Ae = Oe ? Date.parse(Oe[1]) : NaN;
              if (Number.isFinite(Ae)) {
                if (D++, j.push(Ae), j.length > Yh) j.shift();
              }
            }
            we = le + 1, le = Se.indexOf(10, we);
          }
          if (ce += we, ee += Y, we >= Bd) Z = Buffer.from(Se.subarray(we - Bd, we));
          else if (we > 0) {
            let ie = Buffer.concat([Z, Se.subarray(0, we)]);
            Z = ie.subarray(Math.max(0, ie.length - Bd));
          }
          se = we < Se.length ? Buffer.from(Se.subarray(we)) : null;
        }
        if (ce > F.offset) F.offset = ce, F.count = D, F.recent = j, F.tail = Z;
      }
      let { count: A, recent: L } = F;
      if (L.length < 2) return { count: A, nextAt: null };
      let J = [];
      for (let D = 1; D < L.length; D++) J.push(L[D] - L[D - 1]);
      J.sort((D, j) => D - j);
      let V = J[Math.floor(J.length / 2)], W = L.at(-1) + V;
      return { count: A, nextAt: W > Date.now() ? W : null };
    } finally {
      await v.close();
    }
  } finally {
    E.delete(b);
  }
}
function Uc(h, b) {
  for (let w of h.scanStates.keys()) if (!b.has(w)) h.scanStates.delete(w);
}
var $c = 2;
function jd(h) {
  if (h instanceof import_chunk_bzyb60p0.oto) return jd(h.cause);
  if (h instanceof import_chunk_bzyb60p0.ifi) return { cause: "exhausted" };
  if (h instanceof import_chunk_bzyb60p0.afi) return { cause: "login_ended", gatedOff: h.gatedOff };
  if (h instanceof Error && h.name === "CloudSessionAccessError") return { cause: "no_sign_in" };
  let { kind: b, status: w } = (0, import_chunk_jv7av99m.$i)(h);
  return w !== void 0 ? { cause: "status", status: w } : { cause: b === "other" ? "unknown" : "no_answer" };
}
function qc(h, b) {
  if (h === null || b === null) return h === b;
  return h.cause === b.cause && (h.cause !== "status" || b.cause !== "status" || h.status === b.status) && (h.cause !== "login_ended" || b.cause !== "login_ended" || h.gatedOff === b.gatedOff);
}
function Yc({ onCloudTab: h, remoteJobs: b, remoteListLoaded: w, remoteListFailure: E }) {
  if (false) switch (E.cause) {
    case "exhausted":
    case "login_ended":
    case "no_sign_in":
    case "no_answer":
    case "unknown":
    case "status":
  }
  return null;
}
(0, import_chunk_adx6804h.B)();
var Zh = /^remote-[\w-]{1,8}$/;
function Hd(h) {
  return Zh.test(h);
}
function In(h) {
  if (Hd(h.id)) return h.id;
  return import_chunk_vfw28y4s.Z9e.test(h.state.sessionId) ? (0, import_chunk_t39bs2jr.D_n)(h.state.sessionId) : void 0;
}
var Tv = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.c)({ group: (0, import_chunk_adx6804h.n)().optional().catch(void 0), pinned: (0, import_chunk_adx6804h.P)().optional().catch(void 0) }).catch({})));
function _o(h) {
  return "remove";
}
var zc = "project_session", Qc = "project_unknown";
class Vs extends Error {
  burst;
  constructor(h) {
    super("archive rejected");
    this.burst = h;
  }
}
function Hs(h, b) {
  let w;
  for (let E of h.keys()) if (!b.has(E)) (w ??= new Map(h)).delete(E);
  return w ?? h;
}
function Tn(h) {
  return h?.filter((b) => !import_chunk_7cfjrnwy.Wz.test(b.href)) ?? [];
}
var Gd = 18e4;
function On(h, b) {
  let w = (0, import_chunk_9e5mdyfk.Hk)(h.state);
  if (w && h.tempo !== "active" && !(w === "success" && (0, import_chunk_9e5mdyfk.wSe)(h))) return w;
  let E = Tn(h.children).filter((T) => T.kind !== "frame");
  if (b && h.tempo !== "active" && h.template === import_chunk_95amtstn.AIe.name && E.length && E.every((T) => b.get(T.href)?.state === "MERGED")) return "success";
  let v = h.tempo === "active" ? 1 : 5, C = Date.now() - Date.parse(h.updatedAt);
  if (C < v * Gd) return "flowing";
  if (C < v * 15 * 6e4) return "slowing";
  return "stuck";
}
function jo(h, b) {
  if (b === "busy") return "active";
  if ((0, import_chunk_9e5mdyfk.Wd)(h) && !((0, import_chunk_9e5mdyfk.Hk)(h.state) === "success" && (0, import_chunk_9e5mdyfk.wSe)(h))) return "completed";
  if (h.tempo === "blocked" || b === "waiting") return "blocked";
  return "active";
}
function Xc(h, b) {
  return { id: h.id, sessionId: h.state.sessionId, band: jo(h.state), label: b, state: h.state.state, needs: h.state.needs, askId: (0, import_chunk_9e5mdyfk.qDn)(h.state), outcome: (0, import_chunk_9e5mdyfk.Hk)(h.state.state), selfDriving: (0, import_chunk_9e5mdyfk.wSe)(h.state) };
}
var rr = ["review", "blocked", "working", "done"], Ho = { review: "Ready for review", blocked: "Needs input", working: "Working", done: "Completed" }, Kd = { review: "", blocked: "Sessions that have a question or need your decision land here", working: "Sessions at work, even after you exit. New ones default to a git worktree", done: "Finished sessions wait here for you to review" };
function Zc(h) {
  return h > 0 ? `${h} awaiting input \xB7 claude agents` : "claude agents";
}
function Ws(h, b, w) {
  if (w === "busy") return "working";
  if (h.activity === "failure") return "done";
  if (h.activity === "stopped") return "done";
  if (w === "waiting") return "blocked";
  if (!(0, import_chunk_9e5mdyfk.wSe)(h.state) && Tn(h.state.children).some((v) => {
    let C = b?.get(v.href);
    if (C?.state !== "OPEN") return false;
    let T = (0, import_chunk_sjqze7qg.hio)(C);
    return T === "error" || T === "warning" && C.review !== "APPROVED";
  })) return "review";
  if (h.activity === "success") return "done";
  if (h.state.tempo === "blocked") return "blocked";
  return "working";
}
function vo(h) {
  return false;
}
function Gs(h) {
  let b = (0, import_chunk_9e5mdyfk.Hk)(h.state);
  return (b === "failure" || b === "stopped") && (0, import_chunk_9e5mdyfk.Wd)(h) && !(0, import_chunk_9e5mdyfk.rv)(h);
}
function Li(h) {
  return (0, import_chunk_9e5mdyfk.l1t)(h.state) && !(0, import_chunk_9e5mdyfk.Wd)(h.state) && (0, import_chunk_bzyb60p0.rto)(h.state);
}
function Ai(h) {
  return `job:${h}`;
}
function ep(h, b) {
  return h.get(b.state.resumeSessionId ?? b.state.sessionId) ?? h.get(Ai(b.id));
}
var sr = 8;
function ob(h) {
  try {
    let b = (0, import_chunk_w578pjby.te)(h);
    if (b.type === "assistant") {
      let E = (b.message?.content ?? []).find((v) => v.type === "text")?.text;
      if (E) return E;
    }
    if (b.type === "user") {
      let w = b.message?.content, E = typeof w === "string" ? w : w?.find((C) => C.type === "text")?.text, v = E ? op(E).split(`
`).find((C) => C.trim())?.trim() : void 0;
      if (v) return `> ${v}`;
      if (Array.isArray(w)) {
        let C = w.find((T) => T.type === "tool_result" && T.is_error);
        if (C) {
          let T = typeof C.content === "string" ? C.content : C.content?.find((F) => F.type === "text")?.text;
          if (T) return `\u2717 ${(0, import_chunk_7cfjrnwy.Ir)(T)}`;
        }
      }
    }
  } catch {
  }
  return null;
}
function op(h) {
  return h.replace(/<(system-reminder|task-notification)>[\s\S]*?(<\/\1>|$)/g, " ");
}
function Di(h) {
  return h === import_chunk_9e5mdyfk.uWe || h === import_chunk_9e5mdyfk.a1t;
}
function cn(h) {
  return op((0, import_chunk_wbk1hf21.Tl)(h)).replace(/<\/?[\w-]+>/g, " ").replace(import_chunk_7cfjrnwy.q8, "").replace(/\s+/g, " ").trim();
}
var rb = /^(exit \d+)( before init| \u00D7\d+)? \u2014 (?:Error creating worktree: |Error: (?=Can only use --worktree ))(.+)$/, ib = /^Failed to create worktree: Preparing worktree \([^)]*\) (?:fatal: )?/, tp = "; respawning";
function Yd(h) {
  let b = vo(h) || (0, import_chunk_9e5mdyfk.rv)(h) ? null : rb.exec(h.detail);
  if (!b) return h.detail;
  let [, w, E = "", v = ""] = b, C = h.state === "crashed" && !E && v.endsWith(tp), T = C ? v.slice(0, -tp.length) : v, F = T.replace(ib, "") || T;
  return `${C ? "retrying: " : ""}${F} (${w}${E})`;
}
function Io(h, b) {
  return vo(h) || b === h.needs && (0, import_chunk_bzyb60p0.nto)(b) ? (0, import_chunk_sjqze7qg.i7)(b) : cn(b);
}
function Ks(h) {
  let b = `${h.resumeSessionId ?? h.sessionId}.jsonl`, w = h.worktreePath ? [h.cwd, h.worktreePath] : [h.cwd];
  return (0, import_chunk_4smdap7r.M)(w.map((E) => (0, import_path2.join)((0, import_chunk_q3a5dy2r.jC)(E), b)));
}
async function np(h, b) {
  for (let w of Ks(h.state)) try {
    let { content: E } = await Wc(w, 16384, b), v = E.split(`
`).map(ob).filter((T) => T !== null);
    return (v.filter((T, F) => T !== v[F - 1]).at(-1) ?? "").trim();
  } catch {
  }
  return "";
}
function rp(h, b, w) {
  let { byState: E, byGroup: v, launcherGroup: C, scopedFallbackOrigin: T, doneFoldAt: F, emptyBucketHint: A, earlier: L = [] } = w, J = [];
  if (E && A) {
    let ce = 0, Z = 0, Y = E ? L : [];
    for (let Fe of rr) {
      let Se = h.filter((we) => b.get(we.id) === Fe);
      if (Fe === "review" && Se.length === 0) continue;
      J.push({ kind: "header", origin: T, group: Fe });
      for (let we of Se) {
        if (Fe === "done") {
          while (Z < Y.length && Y[Z].modified.getTime() > zd(we.state)) {
            if (ce++ < F) J.push({ kind: "earlier", entry: Y[Z], origin: T, group: "done" });
            Z++;
          }
          if (ce++ >= F) continue;
        }
        J.push({ kind: "job", job: we, origin: (0, import_chunk_9e5mdyfk.fDe)(we.state), group: Fe });
      }
      if (Fe === "done") while (Z < Y.length) {
        if (ce++ < F) J.push({ kind: "earlier", entry: Y[Z], origin: T, group: "done" });
        Z++;
      }
    }
    let de = Math.max(0, ce - F);
    if (de > 0) J.push({ kind: "fold", origin: T, group: "done", hidden: de });
    return { rows: J, doneCount: ce, doneFoldHidden: de };
  }
  let V = !E && !v && !h.some((ce) => b.get(ce.id) === C), W = 0, D = E ? L : [], j = 0, q = (ce) => {
    if (W++ >= F) return;
    J.push(ce);
  };
  for (let ce = 0; ce < h.length; ce++) {
    let Z = h[ce], Y = b.get(Z.id), de = (0, import_chunk_9e5mdyfk.fDe)(Z.state);
    if (ce === 0 || Y !== b.get(h[ce - 1].id)) {
      if (V && Y !== "pinned") J.push({ kind: "header", origin: T, group: C }), V = false;
      let Fe = !(E || v || Y === "pinned" || Y === C);
      J.push({ kind: "header", origin: Fe ? de : T, group: Y, ...Fe && Z.state.backend === "remote" && { cloud: true } });
    }
    if (Y === "done") {
      while (j < D.length && D[j].modified.getTime() > zd(Z.state)) q({ kind: "earlier", entry: D[j], origin: T, group: "done" }), j++;
      q({ kind: "job", job: Z, origin: de, group: Y });
      continue;
    }
    J.push({ kind: "job", job: Z, origin: de, group: Y });
  }
  if (j < D.length) {
    if (W === 0) J.push({ kind: "header", origin: T, group: "done" });
    while (j < D.length) q({ kind: "earlier", entry: D[j], origin: T, group: "done" }), j++;
  }
  if (V && h.length > 0) J.push({ kind: "header", origin: T, group: C });
  let se = !E ? L : [];
  if (se.length > 0) {
    J.push({ kind: "header", origin: T, group: import_chunk_9e5mdyfk.rU });
    let ce = Math.max(0, Math.min(F, se.length));
    for (let Y of se.slice(0, ce)) J.push({ kind: "earlier", entry: Y, origin: T, group: import_chunk_9e5mdyfk.rU });
    let Z = se.length - ce;
    if (Z > 0) J.push({ kind: "fold", origin: T, group: import_chunk_9e5mdyfk.rU, hidden: Z });
    return { rows: J, doneCount: se.length, doneFoldHidden: Z };
  }
  let ee = W > F ? W - F : 0;
  if (ee > 0) J.push({ kind: "fold", origin: T, group: "done", hidden: ee });
  return { rows: J, doneCount: W, doneFoldHidden: ee };
}
function ip(h, b, w) {
  let E = h.findIndex($s);
  if (E !== -1 && (w || !h.some((A) => A.kind === "earlier" || A.kind === "job" && !$s(A)))) return E;
  let v = new Set(h.filter((A) => A.kind !== "header" && !$s(A)).map((A) => A.group)), C = E === -1 ? h : h.filter((A) => A.kind === "header" ? v.has(A.group) : !$s(A)), T = C[1];
  if (T?.kind === "job" && T.origin === b || T?.kind === "earlier") return h.indexOf(T);
  let F = h.findIndex((A) => A.kind === "earlier");
  return F !== -1 && !C.some((A) => A.kind === "job") ? F : 0;
}
function ap(h, b) {
  let w = 0, E = -1;
  for (let [v, C] of h.entries()) {
    if (C.kind !== "job" && C.kind !== "earlier") continue;
    let T = b ? (0, import_chunk_95amtstn.vYn)(C.kind === "job" ? C.job.state : { name: C.entry.title, intent: "" }, b) : 0;
    if (T > E) E = T, w = v;
  }
  return w;
}
var Qd = 3, qs = 3, sb = 6e4, ab = 8, Xd = 4, db = 2;
function Qs(h, b) {
  let w = (v) => h - ab - v - b, E = w(Xd);
  if (E >= Qd) return { doneCap: E, compactHeader: false };
  return { doneCap: Math.max(0, w(db)), compactHeader: true };
}
function Xs(h) {
  if (h.backend === "remote") return (0, import_chunk_9e5mdyfk.fDe)(h);
  let b = (0, import_chunk_9e5mdyfk.fDe)(h);
  return (0, import_chunk_w5s307zm.Mi)(b) ?? b;
}
function Ni(h) {
  return (0, import_chunk_n2dbhmj2.os)(h);
}
function Ys(h) {
  return h.sortOrder ?? Date.parse(h.createdAt);
}
function Mr(h, b) {
  return h.stateSortOrder ?? Date.parse(b === "done" ? h.lastTerminalAt ?? h.firstTerminalAt ?? h.updatedAt : h.updatedAt);
}
function zd(h) {
  for (let b of [h.lastTerminalAt, h.firstTerminalAt, h.updatedAt, h.createdAt]) if (b) {
    let w = Date.parse(b);
    if (Number.isFinite(w)) return w;
  }
  return 0;
}
function dp({ done: h, earlier: b, doneCap: w, initialJobId: E, linkMatchId: v }) {
  let C = h.length + b.length;
  if (C < w + qs) return 1 / 0;
  let T = (j) => Mr(j.state, "done"), F = Math.min(w, h.length);
  if (F > 0) {
    let j = T(h[F - 1]);
    while (F < h.length && j - T(h[F]) < sb) F++;
  }
  let A = h.map((j) => zd(j.state)), L = b.map((j) => {
    let q = j.modified.getTime();
    return A.findIndex((se) => q > se);
  }), J = (j) => (0, import_chunk_4smdap7r.U)(L, (q) => q !== -1 && q <= j), V = Math.max(F, w), W = Math.max(h.findIndex((j) => j.id === E), h.findIndex((j) => j.id === v)), D = W < 0 ? -1 : W + J(W);
  if (C - V < qs || D >= V) return 1 / 0;
  return V;
}
function ar(h) {
  return [...h].sort((b, w) => Ys(b.state) - Ys(w.state));
}
function $s(h) {
  return h.kind === "job" && h.job.state.backend === "remote";
}
var lp = 12e4;
var up = 2e3, lb = 500, ub = 3e4;
var cp = 3e4, cb = 15;
function pb() {
  return { listJobs: import_chunk_f0sbddj1.skn, listAliveDaemonJobs: (h) => (0, import_chunk_4we2aqs8.xYn)(h), adoptRosterOrphans: (h, b, w) => (0, import_chunk_9e5mdyfk.Rki)(h, b, w), listAllLiveSessions: (h) => (0, import_chunk_p51r1nb3.Yae)(h), listRemoteSessions: (h) => (0, import_chunk_bzyb60p0.fqa)(h), interruptRemoteSession: (h) => Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-agwg021c.js"))).then((b) => b.interruptRemoteSession(h)), removeRemoteSession: (h, b) => Promise.resolve({ failure: "gate_off", pausedRoutines: 0, mayStillRun: null }), updateRemoteSessionTitle: async (h, b) => false, readCloudRowMarks: () => pp, saveCloudRowMarks: (h, b, w) => Promise.resolve(false), readLogTail: (h, b) => np(h, b), probeFleetTranscript: (h, b) => Ns(h, b), scanLoopTranscript: (h, b) => Kc(h, b), fetchPrStatusBatch: (h) => (0, import_chunk_sjqze7qg.aJa)(h), fetchPrStatusByUrl: (h) => (0, import_chunk_sjqze7qg.iJa)(h), loadPrStatusCache: (h) => (0, import_chunk_sjqze7qg.dJa)(h), persistPrStatusCache: (h, b) => (0, import_chunk_sjqze7qg.lJa)(h, b), clearFleetViewHeartbeat: (h) => (0, import_chunk_865at33z.$4i)(h), watchJobDirOnce: (h, b) => (0, import_chunk_9e5mdyfk.kki)(h, b) };
}
var fb = {}, pp = /* @__PURE__ */ new Map();
function mb() {
  return { jobs: null, remoteJobs: [], remoteListLoaded: false, remoteListFailure: null, remoteListHasOlder: false, pendings: [], statuses: /* @__PURE__ */ new Map(), terminalHolders: /* @__PURE__ */ new Map(), prStatuses: /* @__PURE__ */ new Map(), loopKicks: /* @__PURE__ */ new Map(), logTails: {}, deleteRefusals: /* @__PURE__ */ new Map(), overlaidLoadLanded: false };
}
class fp {
  #n;
  #e;
  #d = (0, import_chunk_69qhefwa.Be)();
  #t = mb();
  #r = null;
  #a = 0;
  #i = false;
  #s = [];
  #l = null;
  #o = 0;
  #m = 0;
  #b = 0;
  #u = /* @__PURE__ */ new Set();
  #c = /* @__PURE__ */ new Map();
  #p = /* @__PURE__ */ new Set();
  #k = /* @__PURE__ */ new Set();
  #h = /* @__PURE__ */ new Map();
  #y = 0;
  #T = 0;
  #E = 0;
  #R = 0;
  #v = /* @__PURE__ */ new Map();
  #w = /* @__PURE__ */ new Map();
  #f = /* @__PURE__ */ new Map();
  #x = /* @__PURE__ */ new Set();
  #S = /* @__PURE__ */ new Map();
  #_ = null;
  #I = /* @__PURE__ */ new Set();
  #C = /* @__PURE__ */ new Map();
  #L = Gc();
  #O = null;
  constructor(h) {
    this.#n = h?.storageV5, this.#e = { ...pb(), ...h?.client };
  }
  getSnapshot = () => this.#t;
  usesStorage(h) {
    return this.#n === h;
  }
  subscribe = (h) => this.#d.subscribe(h);
  #g(h, b) {
    let w = this.#t[h], E = b(w);
    if (Object.is(E, w)) return;
    this.#t = { ...this.#t, [h]: E }, this.#d.emit();
  }
  #M(h, b) {
    return (this.#r?.setTimeout ?? import_chunk_ddk99w14.U2)(h, b);
  }
  attachView(h) {
    if (this.#a++, this.#a === 1) this.#J(h);
    let b = false;
    return () => {
      if (b) return;
      if (b = true, this.#a--, this.#a === 0) this.#B();
    };
  }
  setRemoteWanted(h) {
    if (h === this.#i) return;
    if (this.#i = h, this.#a === 0) return;
    if (h) this.#A();
    else this.#l?.(), this.#l = null;
  }
  #J(h) {
    if (this.#r = h, this.#y = 0, this.#t.prStatuses.size === 0) this.#e.loadPrStatusCache(this.#n).then((b) => {
      if (b.size) this.#P((w) => w.size ? new Map([...b, ...w]) : b);
    });
    if (this.load(), this.#s.push((0, import_chunk_8bkqeb5d.qZe)(h, () => void this.load(), up), (0, import_chunk_8bkqeb5d.qZe)(h, this.#j, lb), (0, import_chunk_8bkqeb5d.qZe)(h, () => {
      this.#i;
    }, up)), this.#i) this.#A();
  }
  #A() {
    if (!this.#r) return;
    this.#g("remoteJobs", (h) => {
      let b = h.map((w) => {
        let E = On(w.state);
        return E === w.activity ? w : { ...w, activity: E };
      });
      return b.every((w, E) => w === h[E]) ? h : b;
    }), this.loadRemote(), this.#l?.(), this.#l = (0, import_chunk_8bkqeb5d.qZe)(this.#r, this.loadRemote, ub);
  }
  #B() {
    for (let w of this.#s) w();
    this.#s = [], this.#l?.(), this.#l = null, this.#O?.(), this.#O = null, this.#e.clearFleetViewHeartbeat(this.#n), this.#r = null, this.#I.clear(), this.#C.clear(), this.#R = this.#E;
    let h = this.#t, b = h.remoteJobs.some((w) => w.id.startsWith("remote-pending-")) ? h.remoteJobs.filter((w) => !w.id.startsWith("remote-pending-")) : h.remoteJobs;
    if (h.pendings.length > 0 || b !== h.remoteJobs || h.remoteListLoaded || h.remoteListFailure !== null || h.overlaidLoadLanded) this.#t = { ...h, pendings: h.pendings.length > 0 ? [] : h.pendings, remoteJobs: b, remoteListLoaded: false, remoteListFailure: null, overlaidLoadLanded: false }, this.#d.emit();
  }
  get jobs() {
    return this.#t.jobs;
  }
  isDeleting(h) {
    return this.#u.has(h);
  }
  deleteRefusalOf = (h) => this.#t.deleteRefusals.get(h);
  isDeletingSession(h) {
    return this.#p.has(h);
  }
  isHolding(h) {
    return this.#h.has(h);
  }
  isArchiving(h) {
    return this.#v.has(h);
  }
  isRetitling(h) {
    return this.#x.has(h);
  }
  liveStatus(h) {
    let { sessionId: b, resumeSessionId: w } = h.state;
    if ((0, import_chunk_9e5mdyfk.rv)(h.state)) return h.state.tempo === "active" ? "busy" : void 0;
    if (h.state.backend === "remote") return h.state.tempo === "active" ? "busy" : h.state.tempo === "blocked" ? "waiting" : void 0;
    if (this.#C.has(w ?? b)) return "busy";
    if (this.#t.pendings.some((v) => v.state.sessionId === b)) return "busy";
    let E = this.terminalHolderOf(h) !== void 0 ? this.#t.statuses.get(Ai(h.id)) : ep(this.#t.statuses, h);
    if (E) return E;
    if (this.#I.has(b)) return "busy";
    return;
  }
  terminalHolderOf(h) {
    if (h.state.backend === "remote") return;
    return this.#t.terminalHolders.get(h.state.resumeSessionId ?? h.state.sessionId);
  }
  bumpGen() {
    this.#m = ++this.#o;
  }
  resetPrFetchGate() {
    this.#y = 0;
  }
  holdJob = (h) => (this.#m = ++this.#o, this.#h.set(h, (this.#h.get(h) ?? 0) + 1), () => {
    this.#m = ++this.#o;
    let b = (this.#h.get(h) ?? 1) - 1;
    if (b <= 0) this.#h.delete(h);
    else this.#h.set(h, b);
  });
  optimistic = (h, b, w) => {
    if (this.#m = ++this.#o, b) {
      this.#u.add(b);
      let v = this.#t.jobs?.find((C) => C.id === b);
      if (v) {
        let C = [v.state.sessionId, v.state.resumeSessionId].filter((T) => Boolean(T));
        this.#c.set(b, C);
        for (let T of C) this.#p.add(T);
      }
    }
    let E = w ? this.holdJob(w) : void 0;
    return this.updateJobs((v) => v ? h(v) : v), b || E ? () => {
      if (b) {
        this.#m = ++this.#o, this.#u.delete(b);
        for (let v of this.#c.get(b) ?? []) this.#p.delete(v);
        this.#c.delete(b);
      }
      E?.();
    } : void 0;
  };
  noteDeleteRefusal = (h, b) => {
    this.#k.delete(h), this.#g("deleteRefusals", (w) => {
      if (b === null && !w.has(h)) return w;
      let E = new Map(w);
      if (b === null) E.delete(h);
      else E.set(h, b);
      return E;
    });
  };
  updateJobs(h) {
    this.#g("jobs", h);
  }
  updateRemoteJobs(h) {
    this.#g("remoteJobs", h);
  }
  #D(h) {
    return h;
  }
  dropRemoteJobs() {
    this.#R = this.#E, this.#S.clear(), this.#_ = null, this.#g("remoteJobs", (h) => h.length > 0 ? [] : h), this.#g("remoteListHasOlder", () => false);
  }
  updatePendings(h) {
    this.#g("pendings", h);
  }
  #P(h) {
    let b = this.#t.prStatuses;
    if (this.#g("prStatuses", h), this.#t.prStatuses !== b) this.#e.persistPrStatusCache(this.#t.prStatuses, this.#n);
  }
  seedJobs(h) {
    this.updateJobs((b) => {
      let w = h.filter((v) => !this.#u.has(v.id)).map((v) => ({ ...v, activity: On(v.state) })), E = b && this.#h.size > 0 ? new Map(b.filter((v) => this.#h.has(v.id)).map((v) => [v.id, v])) : null;
      return ar(E ? w.map((v) => E.get(v.id) ?? v) : w);
    });
  }
  settleLandedPendings(h) {
    let b = new Set(h.map((w) => w.id));
    for (let w of h) {
      let E = w.state.sessionId;
      this.#I.add(E), this.#M(() => this.#I.delete(E), cp);
    }
    this.updatePendings((w) => w.filter((E) => !b.has(E.id)));
  }
  kick(h, b) {
    let w = { kickedAt: Date.now(), jobId: b };
    return this.#C.set(h, w), this.#M(() => {
      if (this.#C.get(h) === w) this.#C.delete(h), this.#g("statuses", (E) => new Map(E));
    }, cp), () => {
      if (this.#C.get(h) === w) this.#C.delete(h);
    };
  }
  watchPendingJobDir(h) {
    this.#O?.(), this.#O = this.#e.watchJobDirOnce(h, () => void this.load());
  }
  reload = () => {
    this.load();
  };
  load = async () => {
    let h = ++this.#o, [b, w] = await Promise.all([this.#e.listJobs(this.#n), this.#e.listAliveDaemonJobs(this.#n)]);
    if (b !== null) this.#b = 0;
    else if (this.#t.jobs?.length && ++this.#b <= cb) {
      if (this.#b === 1) (0, import_chunk_w578pjby.t)("[fleet] listing sessions failed for a reason that may pass; keeping the listed sessions", { level: "warn" });
      return;
    }
    let E = (0, import_chunk_9e5mdyfk.Vnn)(await this.#e.adoptRosterOrphans(b ?? [], w.records, this.#n), w.shorts).filter((V) => !this.#u.has(V.id)).map((V) => ({ ...V, activity: On(V.state, this.#t.prStatuses) }));
    if (h <= this.#m) return;
    if (this.#m = h, this.#a > 0) this.#g("overlaidLoadLanded", () => true);
    this.updateJobs((V) => {
      let W = V && this.#h.size > 0 ? new Map(V.filter((j) => this.#h.has(j.id)).map((j) => [j.id, j])) : null, D = ar(W ? E.map((j) => W.get(j.id) ?? j) : E);
      if (V && V.length === D.length && V.every((j, q) => j.id === D[q].id && j.state.updatedAt === D[q].state.updatedAt && j.state.state === D[q].state.state && j.state.pinned === D[q].state.pinned && j.state.group === D[q].state.group && j.state.stateSortOrder === D[q].state.stateSortOrder && j.activity === D[q].activity)) return V;
      return D;
    });
    let v = E.filter((V) => jo(V.state) !== "completed"), C = await Promise.all(v.map(async (V) => [V.id, await this.#e.readLogTail(V, this.#n)]));
    this.#g("logTails", (V) => {
      let W = Object.fromEntries(C), D = Object.keys(V);
      if (D.length === C.length && D.every((j) => V[j] === W[j])) return V;
      return W;
    });
    let T = E.filter((V) => (0, import_chunk_9e5mdyfk.Ynn)(V.state));
    if (T.length > 0) {
      let W = (await Promise.all(T.map(async (D) => {
        for (let j of Ks(D.state)) try {
          let q = await this.#e.probeFleetTranscript(j, this.#n);
          if (q.kind === "present") return [D.state.sessionId, q.mtimeMs, j];
          if (q.kind !== "absent") return null;
        } catch (q) {
          if (!(0, import_chunk_jv7av99m.kn)(q)) return null;
        }
        return null;
      }))).filter((D) => D !== null).filter(([D, j]) => {
        let q = this.#t.loopKicks.get(D);
        return !q || q.mtimeMs !== j;
      });
      if (W.length > 0) {
        let D = await Promise.all(W.map(async ([j, q, se]) => {
          try {
            let ee = await this.#e.scanLoopTranscript(this.#L, se);
            return ee ? [j, { mtimeMs: q, ...ee }] : null;
          } catch {
            return null;
          }
        }));
        this.#g("loopKicks", (j) => {
          let q = false, se = new Map(j);
          for (let ee of D) if (ee) se.set(ee[0], ee[1]), q = true;
          return q ? se : j;
        });
      }
    }
    let F = (0, import_chunk_4smdap7r.M)(E.flatMap((V) => Tn(V.state.children).filter((W) => W.kind !== "frame").map((W) => W.href))), A = F.filter((V) => {
      let W = this.#t.prStatuses.get(V)?.state;
      return W !== "MERGED" && W !== "CLOSED";
    }), L = Date.now(), J = L - this.#y >= Hc((0, import_chunk_rkksytw2.zIe)(), L - (0, import_chunk_f9x2f6cx.ug)());
    if (A.length > 0 && J) this.#y = L, (async () => {
      let { statuses: V, unbatched: W } = await this.#e.fetchPrStatusBatch(A);
      await Promise.all(W.map(async (D) => V.set(D, await this.#e.fetchPrStatusByUrl(D)))), this.#P((D) => {
        let j = false;
        for (let [se, ee] of V) {
          let ce = D.get(se);
          if (ce?.state !== ee?.state || ce?.title !== ee?.title || ce?.review !== ee?.review || ce?.checks.passed !== ee?.checks.passed || ce?.checks.failed !== ee?.checks.failed || ce?.checks.pending !== ee?.checks.pending || ce?.additions !== ee?.additions || ce?.deletions !== ee?.deletions) {
            j = true;
            break;
          }
        }
        if (!j) return D;
        let q = new Map(D);
        for (let [se, ee] of V) if (ee !== null || !D.has(se)) q.set(se, ee);
        return q;
      });
    })().catch(import_chunk_k449cc64.i);
    if (this.#m === h) {
      let V = new Set(E.map((D) => D.state.sessionId)), W = new Set(F);
      if (this.#g("loopKicks", (D) => Hs(D, V)), this.#P((D) => Hs(D, W)), E.length > 0) {
        let D = this.#t.deleteRefusals, j = new Set(this.#u);
        for (let q of E) {
          if (!D.has(q.id)) continue;
          if ((0, import_chunk_9e5mdyfk.Wd)(q.state)) this.#k.add(q.id), j.add(q.id);
          else if (!this.#k.has(q.id)) j.add(q.id);
        }
        this.#g("deleteRefusals", (q) => Hs(q, j));
        for (let q of this.#k) if (!j.has(q)) this.#k.delete(q);
      }
      Uc(this.#L, new Set(E.flatMap((D) => Ks(D.state))));
    }
  };
  #j = () => {
    this.#e.listAllLiveSessions(this.#n).then((h) => {
      let b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
      for (let C of h) {
        if (C.kind === "interactive" && C.pid !== process.pid && C.sessionId && C.parkedJobId === void 0) w.set(C.sessionId, C.pid);
        if (!C.status) continue;
        if (C.sessionId) b.set(C.sessionId, C.status);
        if (C.jobId) b.set(Ai(C.jobId), C.status);
      }
      for (let C of b.keys()) this.#I.delete(C);
      let E = (0, import_chunk_95amtstn.rUo)();
      if (E && h.some((C) => C.sessionId === E.sessionId)) (0, import_chunk_95amtstn.v_a)(E.sessionId);
      let v = false;
      for (let [C, T] of this.#C) {
        let F = h.find((A) => A.sessionId === C || A.jobId === T.jobId);
        if (b.get(C) === "busy" || b.get(Ai(T.jobId)) === "busy" || F !== void 0 && (F.statusUpdatedAt ?? 0) > T.kickedAt && F.startedAt <= T.kickedAt) this.#C.delete(C), v = true;
      }
      this.#g("statuses", (C) => !v && C.size === b.size && [...b].every(([T, F]) => C.get(T) === F) ? C : b), this.#g("terminalHolders", (C) => C.size === w.size && [...w].every(([T, F]) => C.get(T) === F) ? C : w);
    }).catch(() => {
    });
  };
  refreshRemote() {
    if (!(this.#E > this.#R) && Date.now() - this.#T > 1e3) this.loadRemote();
  }
  loadRemote = () => {
    let h = Date.now();
    this.#T = h;
    let b = ++this.#E, w = { moreRemain: false };
    this.#e.listRemoteSessions(w).then((E) => this.#F(b, h, E, null, w.moreRemain), (E) => {
      let v = E instanceof import_chunk_bzyb60p0.oto ? E : null;
      (0, import_chunk_w578pjby.t)(`[fleet:remote] list failed after ${v?.rows.length ?? 0} rows: ${(0, import_chunk_jv7av99m.d)(v?.cause ?? E)}`), this.#F(b, h, v?.rows ?? [], jd(E), false);
    }).catch((E) => {
      (0, import_chunk_w578pjby.t)(`[fleet:remote] poll mapper threw: ${(0, import_chunk_jv7av99m.d)(E)}`), this.#F(b, h, [], { cause: "unknown" }, false);
    });
  };
  #F(h, b, w, E, v) {
    if (h <= this.#R) return;
    let C = null;
    for (let [L, J] of this.#f) if (b >= J.answeredAt) this.#f.delete(L);
    let T = w.map((L) => {
      let J = (0, import_chunk_t39bs2jr.D_n)(L.id), V = this.#f.get(J), W = (0, import_chunk_bzyb60p0.pqa)(V ? { ...L, title: V.title } : L), D = C?.get(J);
      if (D) W = { ...W, group: D.group, pinned: D.pinned };
      let j = this.#w.get(J);
      if (j !== void 0) if ((0, import_chunk_9e5mdyfk.Wd)(W) || L.worker_status === "idle" && h > j.lastPoll || b > j.expiry) this.#w.delete(J);
      else W = { ...W, state: "stopped", tempo: "idle", needs: void 0, detail: W.detail };
      return { id: J, state: W, activity: On(W) };
    }).filter((L) => {
      let J = this.#v.get(L.id);
      if (J === void 0) return true;
      if (b > J && !this.#S.has(L.id)) return this.#v.delete(L.id), true;
      if (this.#S.has(L.id)) this.#S.set(L.id, L);
      return false;
    });
    this.#R = h;
    let F = E !== null && E.cause !== "exhausted" && !(E.cause === "login_ended" && E.gatedOff), A = new Set(T.map((L) => L.id));
    if (this.updateRemoteJobs((L) => (0, import_chunk_bzyb60p0.mqa)(L, F ? [...T, ...L.filter((J) => !A.has(J.id) && !J.id.startsWith("remote-pending-"))] : T)), this.#g("remoteListHasOlder", (L) => F ? L : v), this.#a > 0) this.#g("remoteListFailure", (L) => qc(L, E) ? L : E), this.#g("remoteListLoaded", () => true);
  }
  markRemoteRow(h, b) {
    return this.#N((w) => {
      let E = w.get(h) ?? fb, v = b(E);
      return v.group === E.group && v.pinned === E.pinned ? pp : /* @__PURE__ */ new Map([[h, v]]);
    });
  }
  regroupRemoteRows(h, b) {
    return this.#N((w) => {
      let E = /* @__PURE__ */ new Map();
      for (let [v, C] of w) if (C.group === h) E.set(v, { ...C, group: b });
      return E;
    });
  }
  #N(h) {
    let b = h(this.#e.readCloudRowMarks());
    if (b.size === 0) return Promise.resolve(true);
    let w = this.#t.remoteJobs, E = this.#e.saveCloudRowMarks(h, new Set(w.map((v) => In(v) ?? v.id)), this.#n);
    if (w.some((v) => b.has(In(v) ?? v.id))) this.updateRemoteJobs((v) => v.map((C) => {
      let T = b.get(In(C) ?? C.id);
      return T ? { ...C, state: { ...C.state, group: T.group, pinned: T.pinned ?? false } } : C;
    }));
    return E;
  }
  async stopRemote(h) {
    let b = h.state.sessionId, w = { expiry: Date.now() + lp, lastPoll: this.#E };
    this.#w.set(h.id, w), this.updateRemoteJobs((E) => E.map((v) => v.id === h.id && !(0, import_chunk_9e5mdyfk.Wd)(v.state) ? { ...v, state: { ...v.state, state: "stopped", tempo: "idle", needs: void 0, detail: v.state.detail }, activity: "stopped" } : v));
    try {
      if (!await this.#e.interruptRemoteSession(b)) throw Error("interrupt rejected");
      (0, import_chunk_cqa9hrgx.u)("fleet_view_stop_session"), (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.S)("stop"), source: (0, import_chunk_78g0060s.S)("fleet"), jobSessionId: (0, import_chunk_49zxha55.Ce)(b) });
    } catch (E) {
      if ((0, import_chunk_cqa9hrgx.m)("fleet_view_stop_session", "interrupt_failed"), (0, import_chunk_w578pjby.t)(`[fleet:remote] interrupt ${b} failed: ${(0, import_chunk_jv7av99m.d)(E)}`), this.#w.get(h.id) === w) {
        if (this.#w.delete(h.id), this.#S.has(h.id)) this.#S.set(h.id, h);
        this.updateRemoteJobs((v) => v.some((C) => C.id === h.id) ? v.map((C) => C.id === h.id ? this.#D(h) : C) : v);
      }
      throw this.loadRemote(), E;
    }
  }
  remoteReplyLanded(h) {
    this.#w.delete(h), this.loadRemote();
  }
  remoteSessionOpened(h) {
    let b = this.#w.get(h);
    if (b !== void 0) b.expiry = 0;
  }
  async archiveRemote(h) {
    let b = h.state.sessionId;
    this.#v.set(h.id, Date.now() + lp), this.#S.set(h.id, h), this.updateRemoteJobs((C) => C.filter((T) => T.id !== h.id));
    let w = this.#_ ??= { left: 0, archived: 0, failed: /* @__PURE__ */ new Map(), pausedRoutines: 0, mayStillRun: false };
    w.left++;
    let E = "archive_failed";
    try {
      let C = await this.#e.removeRemoteSession(b, this.#n);
      if (w.pausedRoutines += C.pausedRoutines, w.mayStillRun ||= C.mayStillRun !== null, C.failure !== null) throw E = C.failure, Error("archive rejected");
      if (C.mayStillRun !== null) (0, import_chunk_cqa9hrgx.l)("fleet_view_archive_session", C.mayStillRun);
      else (0, import_chunk_cqa9hrgx.u)("fleet_view_archive_session");
      (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.S)("archive"), source: (0, import_chunk_78g0060s.S)("fleet"), jobSessionId: (0, import_chunk_49zxha55.Ce)(b) }), w.archived++, w.failed.delete(h.id);
    } catch (C) {
      w.failed.set(h.id, E);
      let T = this.#V(w);
      (0, import_chunk_cqa9hrgx.m)("fleet_view_archive_session", E), (0, import_chunk_w578pjby.t)(`[fleet:remote] archive ${b} failed (${E}): ${(0, import_chunk_jv7av99m.d)(C)}`);
      let F = this.#S.get(h.id);
      if (this.#v.delete(h.id) && F !== void 0) this.updateRemoteJobs((A) => h.id.startsWith("remote-pending-") || A.some((L) => L.id === h.id) ? A : [...A, this.#D(F)]);
      throw this.loadRemote(), new Vs(T);
    } finally {
      this.#S.delete(h.id);
    }
    return this.#V(w);
  }
  #V(h) {
    if (--h.left > 0 || this.#_ !== h) return null;
    this.#_ = null;
    let { left: b, failed: w, ...E } = h, v = [...w.values()];
    return { ...E, failed: w.size, ofProject: (0, import_chunk_4smdap7r.U)(v, (C) => C === zc), maybeOfProject: (0, import_chunk_4smdap7r.U)(v, (C) => C === Qc) };
  }
  async renameRemote(h, b, w) {
  }
}
function Vi(h, b) {
  if (h.roster) {
    if (!h.roster.usesStorage(b)) (0, import_chunk_k449cc64.i)(Error("[fleet:roster] ensureFleetRoster called with a different storageV5 than the visit was created with; keeping the original"));
    return h.roster;
  }
  return h.roster = new fp({ storageV5: b });
}
var gb = 100, gp = /* @__PURE__ */ new Set();
function mp(h) {
  return { focusedIdx: 0, hoverFocusIdx: null, collapsed: h, capExpanded: gp, draftPick: false, followOrigin: null };
}
function hb(h) {
  let b = rr;
  return new Set(h.map((w) => w === "pinned" || /^(state|directory|group):/.test(w) ? w : `${b.includes(w) ? "state" : "directory"}:${w}`));
}
class hp {
  #n;
  #e;
  #d = (0, import_chunk_69qhefwa.Be)();
  #t;
  #r = 0;
  #a = null;
  #i = null;
  #s = null;
  #l = [];
  #o = false;
  #m = /* @__PURE__ */ new Map();
  #b = /* @__PURE__ */ new Map();
  #u = null;
  #c = [];
  #p = 0;
  #k = null;
  #h = null;
  #y = null;
  #T = null;
  #E = /* @__PURE__ */ new Map();
  #R = null;
  #v = false;
  #w = null;
  constructor(h) {
    this.#n = h.roster, this.#e = h.storageV5, this.#t = mp(h.collapsed && h.collapsed.length > 0 ? hb(h.collapsed) : gp);
  }
  getSnapshot = () => this.#t;
  subscribe = (h) => this.#d.subscribe(h);
  #f(h) {
    let b = this.#t, w = { ...b, ...h };
    if (w.focusedIdx === b.focusedIdx && w.hoverFocusIdx === b.hoverFocusIdx && w.collapsed === b.collapsed && w.capExpanded === b.capExpanded && w.draftPick === b.draftPick && w.followOrigin === b.followOrigin) return;
    this.#t = w, this.#d.emit();
  }
  attachView(h) {
    this.#r++, this.#a = h.clock, this.#i = h.onError;
    let b = false;
    return () => {
      if (b) return;
      if (b = true, this.#r--, this.#r === 0) this.#x();
    };
  }
  #x() {
    this.#u?.(), this.#u = null;
    let h = this.#c;
    this.#c = [], this.#I().finally(() => {
      for (let b of h) b();
    }), this.#a = null, this.#i = null, this.followId = null, this.followOrigin = null, this.#l = [], this.#o = false, this.#p = 0, this.#k = null, this.#h = null, this.#R = null, this.#v = false, this.#w = null, this.#t = mp(this.#t.collapsed);
  }
  focus(h) {
    this.#f({ focusedIdx: h });
  }
  navigateTo(h, b) {
    this.#S(h, b), this.#f({ focusedIdx: h, hoverFocusIdx: null });
  }
  jumpToHeader(h, b) {
    this.#w = h, this.navigateTo(h, b);
  }
  takeRevealAtTop(h) {
    let b = this.#w === h;
    return this.#w = null, b;
  }
  hoverTo(h, b) {
    this.#S(h, b), this.#f({ focusedIdx: h, hoverFocusIdx: h });
  }
  followPick(h, b) {
    this.#s = b?.kind === "job" ? b.job.id : b?.kind === "earlier" ? b.entry.sessionId : null, this.#f({ focusedIdx: h, hoverFocusIdx: null, draftPick: true, followOrigin: null });
  }
  returnPickTo(h) {
    this.#y = h, this.#T = null;
  }
  releasePick(h, b, w) {
    let E = this.#y, v = this.#T, C = h.findIndex((A) => v ? A.kind === "header" && A.group === v : A.kind === "job" && A.job.id === E || A.kind === "earlier" && A.entry.sessionId === E), T = C >= 0 ? C : b, F = h[T];
    if (w && this.#s && F?.kind === "header" && F.group !== this.#R) {
      this.followId = this.#s;
      return;
    }
    this.followId = C >= 0 ? E : null, this.followOrigin = C >= 0 ? v : null, this.#f({ focusedIdx: T, hoverFocusIdx: null });
  }
  sessionListedAs(h, b) {
    this.#E.set(h, b);
  }
  #S(h, b) {
    if (this.followId = b?.kind === "job" ? b.job.id : null, this.followOrigin = b?.kind === "header" ? b.group : null, h !== this.#t.focusedIdx) this.#R = this.followOrigin;
  }
  get followId() {
    return this.#s;
  }
  set followId(h) {
    if (this.#s = h, this.#y = h, this.#T = this.followOrigin, h) this.#R = null;
    this.#f({ draftPick: false });
  }
  get followOrigin() {
    return this.#t.followOrigin;
  }
  set followOrigin(h) {
    this.#T = h, this.#f({ followOrigin: h });
  }
  clearFollow() {
    this.#s = null, this.#f({ draftPick: false, followOrigin: null });
  }
  setHoverFocusIdx(h) {
    this.#f({ hoverFocusIdx: h });
  }
  clampFocus(h) {
    this.#f({ focusedIdx: (0, import_chunk_8bkqeb5d.Du)(this.#t.focusedIdx, 0, Math.max(0, h - 1)) });
  }
  syncRows(h) {
    this.#l = h, this.#o = false;
    for (let [C, T] of this.#E) if (h.some((F) => F.kind === "job" && F.job.id === T)) {
      if (this.#s === C) this.#s = T;
      if (this.#y === C) this.#y = T;
      if (this.#h === C) this.#h = T;
      this.#E.delete(C);
    } else if (!this.#n.getSnapshot().remoteJobs.some((F) => F.id === C || F.id === T)) this.#E.delete(C);
    let { focusedIdx: b, followOrigin: w } = this.#t;
    if (w) {
      let C = h.findIndex((T) => T.kind === "header" && T.group === w);
      if (C >= 0 && C !== b) this.#_(C);
      if (C < 0) this.#f({ followOrigin: null });
      return;
    }
    if (!this.#s) return;
    let E = this.#s, v = h.findIndex((C) => C.kind === "job" && C.job.id === E || C.kind === "earlier" && C.entry.sessionId === E);
    if (v < 0) {
      this.#s = null;
      return;
    }
    if (v !== b) (0, import_chunk_w578pjby.t)(`[FV-poll] follow re-pin moved focus: was=${b} now=${v} followId=${E}`), this.#_(v);
  }
  #_(h) {
    let { focusedIdx: b, hoverFocusIdx: w } = this.#t;
    this.#f({ focusedIdx: h, hoverFocusIdx: w === b ? h : w });
  }
  focusedRow() {
    return this.#l[this.#t.focusedIdx];
  }
  get reorderIssued() {
    return this.#o;
  }
  beginReorder(h, b) {
    this.followId = h, this.#o = true, this.#_(b);
  }
  queueOrderWrites(h, b) {
    let w = b === "state" ? this.#b : this.#m;
    for (let [v, C] of h) w.set(v, C), this.#c.push(this.#n.holdJob(v));
    this.#u?.();
    let E = this.#a?.setTimeout ?? import_chunk_ddk99w14.U2;
    this.#u = E(() => {
      this.#u = null, this.#n.bumpGen();
      let v = this.#c;
      this.#c = [], this.#I().finally(() => {
        for (let C of v) C();
        if (this.#r > 0) this.#n.reload();
      });
    }, gb);
  }
  #I() {
    let h = Array.from(this.#m), b = Array.from(this.#b);
    if (this.#m.clear(), this.#b.clear(), h.length === 0 && b.length === 0) return Promise.resolve();
    let w = this.#e;
    return (0, import_chunk_9e5mdyfk.Aki)(() => Promise.all([...h.map(([E, v]) => (0, import_chunk_9e5mdyfk.Tki)((0, import_chunk_9e5mdyfk.Bs)(E), v, w)), ...b.map(([E, v]) => (0, import_chunk_9e5mdyfk.Cki)((0, import_chunk_9e5mdyfk.Bs)(E), v, w))])).then(() => {
      (0, import_chunk_cqa9hrgx.u)("fleet_view_reorder_job");
    }).catch((E) => {
      (0, import_chunk_k449cc64.i)(E), this.#i?.(`Couldn't save order: ${(0, import_chunk_jv7av99m.d)(E)}`), (0, import_chunk_cqa9hrgx.m)("fleet_view_reorder_job", "write_sort_order_failed");
    });
  }
  toggleCollapsed(h, b) {
    let w = new Set(this.#t.collapsed);
    if (w.has(h)) {
      w.delete(h), this.#f({ collapsed: w });
      return;
    }
    w.add(h);
    let E = this.#t.capExpanded;
    this.#f({ collapsed: w, capExpanded: b !== null && E.has(b) ? new Set([...E].filter((v) => v !== b)) : E });
  }
  uncollapse(...h) {
    let b = this.#t.collapsed;
    if (!h.some((E) => b.has(E))) return;
    let w = new Set(b);
    for (let E of h) w.delete(E);
    this.#f({ collapsed: w });
  }
  renameCollapsedKey(h, b) {
    let w = this.#t.collapsed;
    if (!w.has(h)) return;
    let E = new Set(w);
    E.delete(h), E.add(b), this.#f({ collapsed: E });
  }
  expandCap(h) {
    if (this.#t.capExpanded.has(h)) return;
    this.#f({ capExpanded: new Set(this.#t.capExpanded).add(h) });
  }
  get restoreAttempts() {
    return this.#p;
  }
  set restoreAttempts(h) {
    this.#p = h;
  }
  get restoreCountedJobs() {
    return this.#k;
  }
  set restoreCountedJobs(h) {
    this.#k = h;
  }
  get savedFocusJobId() {
    return this.#h;
  }
  set savedFocusJobId(h) {
    this.#h = h;
  }
  isFirstQueryOfLook() {
    if (this.#v) return false;
    return this.#v = true, true;
  }
}
function Zs(h, b, w, E) {
  return h.selection ??= new hp({ roster: b, storageV5: w, collapsed: E });
}
var bp = /* @__PURE__ */ new Set();
function wp() {
  return { attachingJobId: null, newSessionOpening: false, autoOpened: false };
}
class Sp {
  #n = (0, import_chunk_69qhefwa.Be)();
  #e = { ...wp(), warmingJobIds: bp };
  #d = 0;
  #t = /* @__PURE__ */ new Map();
  #r = null;
  #a = 0;
  #i = 0;
  #s = null;
  #l = null;
  #o = null;
  #m = 0;
  #b = null;
  #u = /* @__PURE__ */ new Set();
  getSnapshot = () => this.#e;
  subscribe = (h) => this.#n.subscribe(h);
  #c(h) {
    let b = this.#e, w = { ...b, ...h };
    if (w.attachingJobId === b.attachingJobId && w.newSessionOpening === b.newSessionOpening && w.warmingJobIds === b.warmingJobIds && w.autoOpened === b.autoOpened) return;
    this.#e = w, this.#n.emit();
  }
  attachView() {
    this.#d++;
    let h = false;
    return () => {
      if (h) return;
      if (h = true, this.#d--, this.#d === 0) this.#r = null, this.#a++, this.#i++, this.#s = null, this.#l = null, this.#o = null, this.#b = null, this.#u.clear(), this.#e = { ...this.#e, ...wp() };
    };
  }
  arm(h, b) {
    this.#r = b, this.#c({ attachingJobId: h });
  }
  disarm() {
    let h = this.#r;
    return this.#r = null, this.#c({ attachingJobId: null }), h;
  }
  nextRespawnAttempt() {
    return ++this.#a;
  }
  isCurrentRespawnAttempt(h) {
    return this.#a === h;
  }
  abandonRespawnAttempt() {
    this.#a++;
  }
  getWarming(h) {
    return this.#t.get(h);
  }
  trackWarming(h, b) {
    this.#t.set(h, b), this.#p(), b.then(() => {
      if (this.#t.get(h) === b) this.#t.delete(h), this.#p();
    });
  }
  dropWarming(h) {
    if (this.#t.delete(h)) this.#p();
  }
  #p() {
    this.#c({ warmingJobIds: this.#t.size === 0 ? bp : new Set(this.#t.keys()) });
  }
  get forkRefusedJobId() {
    return this.#s;
  }
  set forkRefusedJobId(h) {
    this.#s = h;
  }
  get restartOfferedJobId() {
    return this.#l;
  }
  set restartOfferedJobId(h) {
    this.#l = h;
  }
  get deadEpochOfferedJobId() {
    return this.#o;
  }
  set deadEpochOfferedJobId(h) {
    this.#o = h, this.#m = h === null ? 0 : Date.now();
  }
  deadEpochOfferAgeMs() {
    return this.#o === null ? 1 / 0 : Date.now() - this.#m;
  }
  get deadEpochGoneJobId() {
    return this.#b;
  }
  set deadEpochGoneJobId(h) {
    this.#b = h;
  }
  isPromoting(h) {
    return this.#u.has(h);
  }
  beginPromote(h) {
    this.#u.add(h);
  }
  endPromote(h) {
    this.#u.delete(h);
  }
  releasePromoted(h) {
    for (let b of this.#u) if (h.has(b)) this.#u.delete(b);
  }
  beginNewSession() {
    return this.#c({ newSessionOpening: true }), ++this.#i;
  }
  isCurrentNewSessionAttempt(h) {
    return this.#i === h;
  }
  endNewSession() {
    this.#c({ newSessionOpening: false });
  }
  abandonNewSession() {
    this.#i++, this.#c({ newSessionOpening: false });
  }
  markAutoOpened() {
    this.#c({ autoOpened: true });
  }
}
function ta(h) {
  return h.attach ??= new Sp();
}
function yp(h, b, { pruneTextPastes: w = false } = {}) {
  let E = Object.values(h);
  function v(T) {
    return w || T.type === "image";
  }
  if (!E.some(v)) return;
  let C = /* @__PURE__ */ new Set();
  for (let T of b) for (let F of (0, import_chunk_bq31aqv6.Nu)(T)) C.add(F.id);
  for (let T of E) if (v(T) && !C.has(T.id)) delete h[T.id];
}
function oa(h, b, { onMinted: w } = {}) {
  return (E, v) => {
    let C = h(), T = (0, import_chunk_bzyb60p0.eN)(void 0, C);
    w?.(T), C[T] = { id: T, type: "image", content: E, mediaType: v?.mediaType ?? "image/png", filename: v?.filename, dimensions: v?.dimensions, sourcePath: v?.sourcePath }, b(new import_chunk_8bkqeb5d.s$e(`${(0, import_chunk_bq31aqv6.bae)(T)} `));
  };
}
var bb = 9e4, wb = 45e3;
function Ep({ drafts: h, observedAbsenceMs: b, isGuarded: w, now: E, lastSweepAt: v }) {
  let C = E - v, T = C < 0 || C > wb ? 0 : C, F = false;
  for (let A of h.keys()) {
    if (w(A)) {
      b.delete(A);
      continue;
    }
    let L = b.get(A);
    if (L === void 0) b.set(A, 0);
    else if (L + T >= bb) h.delete(A), b.delete(A), F = true;
    else b.set(A, L + T);
  }
  for (let A of b.keys()) if (!h.has(A)) b.delete(A);
  return F;
}
function Rp(h, b, { jobs: w, pendings: E, remoteJobs: v, remoteListLoaded: C }) {
  if (!w || !h.hasReplyDrafts()) {
    h.sweepReplyDrafts({ now: Date.now(), isGuarded: null });
    return;
  }
  let T = /* @__PURE__ */ new Set();
  for (let L of [w, E, v]) for (let J of L) T.add(J.id);
  let F = (0, import_chunk_4smdap7r.U)(v, (L) => !L.id.startsWith("remote-pending-")), A = !C || b.getSnapshot().remoteListFailure !== null || F === 0 || F >= import_chunk_vfw28y4s.Bps;
  h.sweepReplyDrafts({ now: Date.now(), isGuarded: (L) => T.has(L) || b.isDeleting(L) || b.isHolding(L) || b.isArchiving(L) || (L.startsWith("remote-") ? A : w.length === 0) });
}
var Sb = 3e4, Ar = "Cleared \xB7 ctrl+y to restore", yb = ["query", "cursorOffset", "mode", "sessionModel", "sessionEffort", "sessionFastMode", "error", "hint", "replyError", "expandHintPasteId"];
function Eb(h, b) {
  return Math.max(0, Math.min(h.length, b));
}
class vp {
  #n = (0, import_chunk_69qhefwa.Be)();
  #e;
  #d = 0;
  #t = null;
  #r = false;
  #a = "";
  #i = {};
  #s = null;
  #l = null;
  #o = /* @__PURE__ */ new Map();
  #m = /* @__PURE__ */ new Map();
  #b = Date.now();
  #u = /* @__PURE__ */ new Map();
  #c = null;
  constructor(h = {}) {
    let b = h.query ?? "", w = (0, import_chunk_95amtstn.t9t)() && b.startsWith("!"), E = w ? b.slice(1) : b;
    this.#e = { query: E, cursorOffset: E.length, mode: w ? "bash" : "prompt", sessionModel: h.sessionModel, sessionEffort: void 0, sessionFastMode: void 0, error: null, hint: null, replyError: null, expandHintPasteId: null };
  }
  getSnapshot = () => this.#e;
  subscribe = (h) => this.#n.subscribe(h);
  #p(h) {
    let b = this.#e, w = { ...b, ...h };
    if (yb.every((E) => Object.is(w[E], b[E]))) return;
    this.#e = w, this.#n.emit();
  }
  attachView() {
    if (this.#d++ === 0) this.#t = (0, import_chunk_bzyb60p0.Fye)(() => [this.#e.query, this.#a, ...this.#o.values()]), this.#r = false, this.#b = Date.now(), this.#m.clear();
    let h = false;
    return () => {
      if (h) return;
      if (h = true, this.#d--, this.#d === 0) this.#t?.(), this.#t = null, this.#r = false, this.#l = null, this.#u.clear(), this.#c = null, this.#e = { ...this.#e, cursorOffset: this.#e.query.length, error: null, hint: null, replyError: null, expandHintPasteId: null };
    };
  }
  setQuery(h) {
    this.#p({ query: h, cursorOffset: h.length });
  }
  setQueryAndCursor(h, b) {
    this.#p({ query: h, cursorOffset: Eb(h, b) });
  }
  insertText(h) {
    let { query: b, cursorOffset: w } = this.#e;
    this.#p({ query: b.slice(0, w) + h + b.slice(w), cursorOffset: w + h.length });
  }
  setMode(h) {
    this.#p({ mode: h });
  }
  dropDraft() {
    this.setQuery(""), this.setMode("prompt"), this.pruneOrphanedPastes({ pruneTextPastes: true });
  }
  clearForRestore() {
    let h = this.draftForDisk();
    if ((0, import_chunk_bq31aqv6.Nu)(h).length > 0) this.#a = h;
    return this.setQuery(""), this.setMode("prompt"), h;
  }
  draftForDisk() {
    let { query: h, mode: b } = this.#e;
    return b === "bash" ? `!${h}` : h;
  }
  beginProgrammaticChange() {
    this.#r = true;
  }
  takeProgrammaticChange() {
    let h = this.#r;
    return this.#r = false, h;
  }
  setSessionModel(h) {
    this.#p({ sessionModel: h });
  }
  setSessionEffort(h) {
    this.#p({ sessionEffort: h });
  }
  setSessionFastMode(h) {
    this.#p({ sessionFastMode: h });
  }
  setError = (h) => {
    this.#p({ error: h });
  };
  setHint = (h) => {
    this.#p({ hint: h });
  };
  setArchiveLine(h) {
    if (this.clearArchiveLine(), "error" in h) this.setError(h.error), this.#c = h.error;
    else this.setHint(h.hint), this.#c = h.hint;
  }
  clearArchiveLine() {
    let h = this.#c;
    if (this.#c = null, h !== null && this.#e.error === h) this.setError(null);
    if (h !== null && this.#e.hint === h) this.setHint(null);
  }
  setReplyError(h, b, w = "send") {
    this.#p({ replyError: b === null ? null : { jobId: h, error: b, kind: w } });
  }
  setExpandHintPasteId(h) {
    this.#p({ expandHintPasteId: h });
  }
  get pastes() {
    return this.#i;
  }
  replacePastes(h) {
    this.#i = h;
  }
  mergeRestoredPastes(h) {
    this.#i = { ...h, ...this.#i };
  }
  get lastMintedPasteId() {
    return this.#s;
  }
  noteMintedPaste = (h) => {
    this.#s = h;
  };
  mintTextPaste(h) {
    let b = (0, import_chunk_bzyb60p0.eN)(this.#e.query, this.#i);
    return this.#s = b, this.#i[b] = { id: b, type: "text", content: h }, b;
  }
  registerLivePeekQuery(h) {
    return this.#l = h, () => {
      if (this.#l === h) this.#l = null;
    };
  }
  pruneOrphanedPastes = (h) => {
    yp(this.#i, [this.#e.query, this.#a, this.#l?.() ?? "", ...this.#o.values()], h);
  };
  replyDraft(h) {
    return this.#o.get(h);
  }
  saveReplyDraft(h, b) {
    if (b) this.#o.set(h, b);
    else this.#o.delete(h);
  }
  deleteReplyDraft(h) {
    this.#o.delete(h);
  }
  releaseReplyDraft(h) {
    if (this.#o.delete(h)) this.pruneOrphanedPastes();
  }
  hasReplyDrafts() {
    return this.#o.size > 0;
  }
  sweepReplyDrafts({ now: h, isGuarded: b }) {
    let w = this.#b;
    if (this.#b = h, b === null || this.#o.size === 0) {
      this.#m.clear();
      return;
    }
    if (Ep({ drafts: this.#o, observedAbsenceMs: this.#m, now: h, lastSweepAt: w, isGuarded: b })) this.pruneOrphanedPastes();
  }
  isRetryOfRecentReplyFailure(h, b) {
    let w = this.#u.get(h);
    return w !== void 0 && b - w < Sb;
  }
  noteReplyFailure(h, b) {
    this.#u.set(h, b);
  }
  clearReplyFailure(h) {
    this.#u.delete(h);
  }
}
function ra(h, b) {
  return h.editor ??= new vp(b);
}
var ia = 36e5, Cp = 216e5, Zd = "CLAUDE_AGENTS_AUTO_RELAUNCHED_AT";
function _p(h, { cwdFilter: b, dispatchDefaults: w, typedAgent: E, activeTab: v, handOverDraft: C, onError: T }) {
  if ((0, import_chunk_f9x2f6cx.us)() !== null) {
    if (h === "manual") T("Couldn't switch to the latest build because --project-config-root wouldn't carry over. To update, exit and start the agent view again.");
    return;
  }
  if ((0, import_chunk_zddv3vvj.Tbe)()) {
    if (h === "manual") T("Couldn't switch to the latest build. The app that launched this agent view chose where an added directory's skills and plugins are read from, and a relaunched one could not read them from the same place. To update, have that app start the agent view again.");
    return;
  }
  (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.f)(`fleetview_update_${h}`) }), (0, import_chunk_tvwsywt0.rKo)().then((F) => {
    if (h === "auto" && Date.now() - (0, import_chunk_f9x2f6cx.ug)() < ia) return;
    return (0, import_chunk_4wtfvxk7.EY)({ launcher: F, args: ["agents", ...b ? ["--cwd", b] : [], ...(0, import_chunk_95amtstn.nUo)(), ...(0, import_chunk_95amtstn.e9t)(w?.permissionModeInherited && w.permissionMode === "default" ? { ...w, permissionMode: void 0, permissionModeInherited: void 0 } : w), ...(0, import_chunk_dw5px5e0.Pv)("--agent", E)], env: { [import_chunk_zwfq7wpn.bso]: "1", ...h === "auto" && { [Zd]: String(Date.now()) }, ...{}, ...(0, import_chunk_qbrmmydq.Z9)() }, onShutdownClaimed: C, preSpawn: () => process.stdout.write(import_chunk_d57v19zt.Re.dim(`
Switching from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} to latest\u2026

`)) });
  }).catch((F) => {
    if ((0, import_chunk_k449cc64.i)(F), h === "manual") T(`Couldn't switch to the latest build: ${(0, import_chunk_jv7av99m.d)(F)}`);
  });
}
async function Ip(h) {
  if ((0, import_chunk_zhr7rpv7.vr)().catalogDecision === void 0) {
    let { awaitPolicyLimitsColdStart: b, composePolicyLimitsClient: w } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7bg0909g.js")));
    if ((0, import_chunk_m15w38ag.ne)() && h?.storageV5 !== void 0) try {
      w(h);
    } catch (E) {
      (0, import_chunk_w578pjby.t)(`Policy limits: start-up composition in the agents view failed: ${E instanceof Error ? E.message : String(E)}`, { level: "warn" });
    }
    await b();
  }
  await (0, import_chunk_8cykvqs9.V2r)({ headless: (0, import_chunk_3t7ve0wy.kb)() });
}
var Rb = 200;
function aa() {
  return el() && (0, import_chunk_zwfq7wpn.AFt)();
}
function el() {
  return !(0, import_chunk_2gtmjt3y.as)() && !(0, import_chunk_f9x2f6cx.lNr)();
}
async function da(h, b, w) {
  try {
    let E = (0, import_chunk_f9x2f6cx.Te)(), v = await (0, import_chunk_bzyb60p0.Xue)(E);
    return (await (0, import_chunk_bzyb60p0.bur)(v, void 0, b ? Rb : void 0, w)).flatMap((F) => {
      if (!F.sessionId || !F.fullPath) return [];
      if (h.has(F.sessionId)) return [];
      if (F.archived || F.nothingSaid) return [];
      if (!b && F.sessionKind === "bg") return [];
      return [{ sessionId: F.sessionId, fullPath: F.fullPath, title: (0, import_chunk_7cfjrnwy.Wr)((0, import_chunk_wbk1hf21.Tl)((0, import_chunk_k449cc64.Fge)(F))) || F.sessionId.slice(0, 8), modified: F.modified, cwd: F.relocatedCwd ?? F.projectPath ?? E }];
    });
  } catch (E) {
    if ((0, import_chunk_jv7av99m.fn)(E)) (0, import_chunk_w578pjby.t)(`[fleetview] past-session enumeration failed: ${(0, import_chunk_jv7av99m.d)(E)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(E);
    return null;
  }
}
var tl = /(?:^|\s)(?:[aso]:|n:(?!\\))/gi;
function Dr(h) {
  return h.trimStart().search(tl) === 0;
}
function Ji(h) {
  let b = h.trimStart();
  if (Dr(b)) return b[0]?.toLowerCase() === "n" ? b.slice(2) : null;
  if ((0, import_chunk_95amtstn.t9t)() && b.startsWith("!")) return null;
  return Dr(`n:${b}`) ? `n:${b}` : null;
}
function Tp(h) {
  let b, w, E, v, C, T, F, A = [];
  for (let L of h.trim().split(/\s+/)) {
    let J = L.toLowerCase(), V = Dr(L) ? J[0] : void 0, W = J.slice(2);
    if (V === "a") b = W || void 0;
    else if (V === "s") w = W || void 0;
    else if (V === "n") E = W || void 0;
    else if (V === "g") v = W || void 0;
    else if (V === "o") C = W;
    else if (Nr(L)) T = Nr(L);
    else if (la(L)) F = la(L);
    else A.push(L);
  }
  return { template: b, state: w, name: E, group: v, output: C, pr: T, url: F, text: A.join(" ").toLowerCase() };
}
function Nr(h) {
  let b = h.trim();
  if (/\s/.test(b)) return null;
  return (/^#(\d+)$/.exec(b) ?? /\/pull\/(\d+)(?!\d)/.exec(b) ?? /\/-\/merge_requests\/(\d+)(?!\d)/.exec(b))?.[1] ?? null;
}
function ua(h) {
  return new RegExp(`\\/(?:pull|-\\/merge_requests)\\/${h}(?!\\d)`);
}
function ol(h, b, w = ua(b)) {
  return Tn(h.children).some((E) => E.id === b || w.test(E.href)) || Object.values(h.output ?? {}).some((E) => w.test(E));
}
function la(h) {
  let b = h.trim();
  return !/\s/.test(b) && /^https?:\/\//i.test(b) ? b : null;
}
function nl(h, b) {
  return h.intent.includes(b) || !!h.initialPrompt?.includes(b);
}
function ca(h, b, w = {}, E = []) {
  let v = h.trim();
  if ((0, import_chunk_95amtstn.t9t)() && v.startsWith("!")) {
    let D = v.slice(1).trim();
    return { template: import_chunk_95amtstn.AIe, intent: "", matched: !!D, exec: D };
  }
  if (Dr(v)) return null;
  let C, T, F, A = Object.keys(w), L = v.replace(/(?:^|\s)@(\S+)/g, (D, j) => {
    let q = j.toLowerCase(), se = b.find((Z) => Z.name.toLowerCase() === q);
    if (se) return C ??= se, "";
    let ee = E.find((Z) => Z.name.toLowerCase() === q);
    if (ee) return F ??= ee.name, "";
    let ce = A.find((Z) => Z.toLowerCase() === q);
    if (ce) return T ??= w[ce], "";
    return D;
  }).trim(), J = L.search(/\s/), V = (J < 0 ? L : L.slice(0, J)).toLowerCase(), W = C ? void 0 : b.find((D) => D.name.toLowerCase() === V);
  if (W) return { template: W, intent: J < 0 ? "" : L.slice(J + 1).trim(), matched: true, cwd: T, routine: F };
  if (C) return { template: C, intent: L, matched: true, cwd: T, routine: F };
  return { template: import_chunk_95amtstn.AIe, intent: L, matched: false, cwd: T, routine: F };
}
function il(h) {
  let b = h.trim();
  if (/\s/.test(b)) return null;
  if (/^https?:\/\//.test(b)) return import_chunk_7cfjrnwy.Wz.test(b) ? null : b;
  let w = (0, import_chunk_z6pfqf6e.Pp)(b);
  return (0, import_path5.isAbsolute)(w) ? (0, import_chunk_zdtzd1bp.I6)(w) : null;
}
function Lp(h) {
  if (!Dr(h)) return [];
  let b = [];
  for (let w of h.matchAll(tl)) {
    let E = w.index + w[0].length;
    b.push([E - 2, E]);
  }
  return b;
}
function Mp(h, b) {
  let w = [];
  for (let E of h.matchAll(/(?:^|\s)@(\S+)/g)) {
    if (!b.has(E[1].toLowerCase())) continue;
    let v = E.index + E[0].length;
    w.push([v - E[1].length - 1, v]);
  }
  return w;
}
function Ap(h, b, w) {
  return h.replace(/[@/]\S*$/, () => `${b}${w} `);
}
function sl(h, b, w = [], E = []) {
  let v = new Set([...w, ...E].map((T) => T.name.toLowerCase())), C = Object.keys(b);
  for (let T of h.matchAll(/(?:^|\s)@(\S+)/g)) {
    let F = T[1].toLowerCase();
    if (v.has(F)) continue;
    let A = C.find((L) => L.toLowerCase() === F);
    if (A) return b[A];
  }
  return;
}
var Dp = { agent: "background", repo: "repo", worktree: "worktree", skill: "skill", command: "command", workflow: "workflow", routine: "routine", model: "model" }, al = { agent: "@", repo: "@", worktree: "@", routine: "@", skill: "/", command: "/", workflow: "/", model: "/" }, Cb = { kind: "model", name: "model", description: "Set model for new sessions from this window (not saved)" }, Np = /* @__PURE__ */ new Map([["effort", "Set effort for new sessions from this window (not saved)"], ["fast", "Turn fast mode on or off for new sessions from this window (not saved)"], ["resume", "Resume a past session"]]);
function Vp() {
  return [...(0, import_chunk_gq1dr8pm.wbe)().filter((h) => h.value).map((h) => ({ kind: "model", name: String(h.value), description: (0, import_chunk_7cfjrnwy.Ir)(h.description) })), { kind: "model", name: "default", description: "Reset to configured default" }];
}
var dl = [], pa = [];
function rl(h) {
  return { kind: "agent", name: h.name, description: (0, import_chunk_7cfjrnwy.Ir)(h.description) };
}
function Jp(h, b) {
  if (h === b || b.length === 0) return h;
  let w = new Set(h.map((E) => E.name.toLowerCase()));
  return [...h, ...b.filter((E) => !w.has(E.name.toLowerCase()))];
}
function xp(h) {
  let b = (0, import_chunk_865at33z.ge)().agentLastUsed ?? {};
  return h.slice().sort((w, E) => {
    let v = b[w.name] ?? 0, C = b[E.name] ?? 0;
    if (v !== C) return C - v;
    return w.name.localeCompare(E.name);
  });
}
function Fp(h, b, w) {
  let E = w[h];
  return E === void 0 ? { kind: "repo", name: h, description: b[h] } : { kind: "worktree", name: h, description: E || b[h] };
}
function Bp(h, { templates: b = [], routines: w = [], repos: E = {}, worktreeBranches: v = {}, skills: C = [], models: T = [], dispatch: F, showAllAgents: A = false }) {
  let L = (0, import_chunk_7cfjrnwy.nt)(h, " ").toLowerCase(), J = L.startsWith("/"), V = h.match(/(?:^|\s)@(\S*)$/), W = V?.[1]?.toLowerCase(), D = V && sl(h.slice(0, -V[0].length), E, b, w) !== void 0, j = new Set(b.map((ie) => ie.name.toLowerCase())), q = /* @__PURE__ */ new Set([...j, ...w.map((ie) => ie.name.toLowerCase())]), se = Object.keys(E).filter((ie) => !q.has(ie.toLowerCase()) && !/\s/.test(ie)), ee = W === void 0 ? [] : [...xp(b).filter((ie) => ie.name.toLowerCase().startsWith(W)).map(rl), ...w.filter((ie) => ie.name.toLowerCase().startsWith(W)).sort((ie, Oe) => ie.name.localeCompare(Oe.name)), ...D ? [] : se.filter((ie) => ie.toLowerCase().startsWith(W)).sort((ie, Oe) => ie.localeCompare(Oe)).map((ie) => Fp(ie, E, v))], ce = h.match(/(?:^|\s)\/(\S*)$/), Z = ce?.[1]?.toLowerCase(), Y = Z === void 0 ? [] : [...J ? [Cb] : [], ...C].filter((ie) => ie.name.toLowerCase().includes(Z)).sort((ie, Oe) => {
    let Ae = ie.name.toLowerCase().startsWith(Z), _t = Oe.name.toLowerCase().startsWith(Z);
    return Ae !== _t ? Ae ? -1 : 1 : ie.name.localeCompare(Oe.name);
  }), de = h.match(/^\s*\/model\s+(\S*)$/i), Fe = de?.[1]?.toLowerCase(), Se = Fe === void 0 ? [] : T.filter((ie) => ie.name.toLowerCase().startsWith(Fe)), we = J ? [] : [...b.filter((ie) => ie.name.toLowerCase().startsWith(L)).sort((ie, Oe) => ie.name.localeCompare(Oe.name)).map(rl), ...w.filter((ie) => ie.name.toLowerCase().startsWith(L)).sort((ie, Oe) => ie.name.localeCompare(Oe.name)), ...se.filter((ie) => ie.toLowerCase().startsWith(L)).sort((ie, Oe) => ie.localeCompare(Oe)).map((ie) => Fp(ie, E, v)), ...C.filter((ie) => ie.name.toLowerCase().startsWith(L)).sort((ie, Oe) => ie.name.localeCompare(Oe.name))], le = !F || F.exec !== void 0 ? [] : de ? Se : V ? ee : ce ? Y : A && !h ? xp(b).map(rl) : !F.matched && L && !h.includes(" ") ? we : [];
  return { firstWord: L, isSlashQuery: J, atMatch: V !== null, slashMatch: ce !== null, modelArgMatch: de !== null, templateNames: j, repoNames: se, suggestions: le };
}
function fa(h) {
  if (h.shortcutKey !== "v") return false;
  let b = (0, import_chunk_cg8dqz0a.x)();
  if (h.ctrl && !h.meta) return b !== "windows";
  if (h.meta && !h.ctrl) return b === "windows" || b === "wsl";
  return false;
}
function ma(h, b) {
  (0, import_chunk_s7te3n3c.x$e)((0, import_chunk_yvba4101.ac)((0, import_chunk_865at33z.dt)())).then((w) => {
    if (w) h(w);
    else (0, import_chunk_cqa9hrgx.m)("input_image_paste", "not_found"), b("No image found in clipboard");
  }).catch((w) => {
    (0, import_chunk_cqa9hrgx.m)("input_image_paste", "clipboard_read_failed"), (0, import_chunk_k449cc64.i)(w), b("Couldn't read an image from the clipboard");
  });
}
async function jp(h) {
  let b = await (0, import_chunk_9e5mdyfk.qF)(void 0, h).catch(() => []), w = false;
  return (0, import_chunk_865at33z.Ke)((E) => {
    let v = E.agentLastUsed ?? {}, C = { ...v };
    for (let T of b) {
      if (T.state.template === import_chunk_95amtstn.AIe.name) continue;
      if (v[T.state.template] !== void 0) continue;
      let F = Date.parse(T.state.createdAt);
      if (Number.isNaN(F)) continue;
      if (F > (C[T.state.template] ?? 0)) C[T.state.template] = F, w = true;
    }
    if (!w) return E;
    return { ...E, agentLastUsed: C };
  }, h), w;
}
var Ob = 4, en = "Still starting \u2014 try again in a moment", xb = /* @__PURE__ */ new Set(["EPIPE", "ECONNRESET", "ECONNREFUSED", "ENOTCONN"]);
function dr(...h) {
  return (0, import_chunk_95amtstn.n9t)(...h).catch((b) => ({ ok: false, error: `Couldn't restart \u2014 ${(0, import_chunk_jv7av99m.d)(b)}`, alive: false }));
}
var Pb = 150, Hp = /* @__PURE__ */ new WeakMap();
function Fb(h) {
  let b = { sameChunk: true, at: performance.now() };
  Hp.set(h, b), queueMicrotask(() => {
    b.sameChunk = false;
  });
}
function Lb(h) {
  let b = Hp.get(h);
  return b !== void 0 && (b.sameChunk || performance.now() - b.at < Pb);
}
function Vr(h, b, w, E, v) {
  let C = () => Gn({ launch: b, window: Oi(h.getSnapshot()) }), T = E === "default";
  if (w === "model") h.setSessionModel(T ? void 0 : E), h.setHint(T ? `Model for new sessions reset to ${C().model}` : `Model set to ${E} for new sessions from this window (not saved)`);
  else if (w === "effort") {
    let F = T ? void 0 : (0, import_chunk_k67pwqya.IU)(E);
    h.setSessionEffort(F);
    let { model: A, effort: L, effortOverridden: J } = C();
    if (F === void 0) h.setHint(L === void 0 ? "Effort for new sessions reset to the default" : `Effort for new sessions reset to ${L}`);
    else {
      let V = L === void 0 ? ` \xB7 ${A} doesn't use an effort setting` : L === F ? "" : J ? ` \xB7 CLAUDE_CODE_EFFORT_LEVEL sets it to ${L}` : ` \xB7 ${A} runs at ${L}`;
      h.setHint(`Effort set to ${F} for new sessions from this window (not saved)${V}`);
    }
  } else {
    h.setSessionFastMode(T ? void 0 : E === "on");
    let { fast: F, fastBlockedReason: A } = C();
    h.setHint(T ? `Fast mode for new sessions reset to ${F ?? "off"}` : `Fast mode ${E} for new sessions from this window (not saved)${v ? ". Cloud sessions don't get it" : ""}${A ? `. Not applied here: ${A}` : E === "on" ? ". It draws from usage credits at a higher rate." : ""}`);
  }
  (0, import_chunk_cqa9hrgx.u)("fleet_view_new_session_settings", { setting: (0, import_chunk_78g0060s.f)(w) });
}
function ll(h, b) {
  let { editor: w, view: E, dispatchDefaults: v, modelSuggestions: C } = h, T = Oi(w.getSnapshot()), F = Gn({ launch: v, window: T }), A = { value: "default", description: "Reset to configured default" }, L = b === "model" ? C.map((V) => ({ value: V.name, description: V.description })) : b === "effort" ? [...import_chunk_8hfdvrr1.ea.map((V) => ({ value: V })), A] : [{ value: "on" }, { value: "off" }, A], J = b === "model" ? T.model : b === "effort" ? F.effort : F.fast ?? "off";
  w.setError(null), w.setHint(null), E.openSettingPicker({ setting: b, options: L }, Math.max(0, L.findIndex((V) => V.value === J)));
}
function Wp(h, b) {
  let { editor: w, roster: E, selection: v, view: C, attach: T, storageV5: F, credentials: A, onAction: L, quit: J, relaunchForUpdate: V, searchKeyDown: W, willInsertNewline: D, canonicalLauncherCwd: j, launcherCwd: q, effectiveCwd: se, scopedFallbackOrigin: ee, cwdFilter: ce, dispatchDefaults: Z, query: Y, dispatch: de, templates: Fe, allRepos: Se, routines: we, templateCache: le, suggestions: ie, skills: Oe, modelArgMatch: Ae, modelSuggestions: _t, pickSuggestion: De, applySuggestion: mt, closeAgentBrowse: to, jobSessionIds: Ot, builtRows: Ht, bumpSuggGen: ke, mountAt: Wt, focusedRow: rt, focused: Ue, isOnboarding: wt, toggleCollapse: qt, openEarlier: Qe, openNewSessionRow: Yt, openOrRespawn: ct } = h, je = () => {
    b.preventDefault(), b.stopImmediatePropagation();
  }, Kt = (St) => {
    w.beginProgrammaticChange(), w.setQuery(St), C.setHelpOpen(false);
  }, Zt = b.ctrl;
  if (!Zt && D(b)) {
    W(b);
    return;
  }
  if (je(), Lb(w)) return;
  let kt = w.getSnapshot().query, Ut = (0, import_chunk_bzyb60p0.U_t)(kt, w.pastes);
  if (Ut.removed.removedTotal > 0) {
    (0, import_chunk_bzyb60p0.Yxn)(Ut.removed, "fleet_dispatch"), Fb(w);
    let St = Ut.input.trim() === "";
    if (Ut.input !== kt) w.beginProgrammaticChange(), w.setQuery(Ut.input);
    if (Ut.pastedContents !== w.pastes) w.replacePastes(Ut.pastedContents);
    w.setError(null), w.setHint((0, import_chunk_xfj2cwfv.mAt)(Ut.removed.removedTotal, St ? "empty" : "review")), (0, import_chunk_bzyb60p0.PXo)();
    return;
  }
  let Ie = w.getSnapshot().mode === "bash" ? "!" : w.getSnapshot().query.trim().toLowerCase(), yt = () => {
    w.beginProgrammaticChange(), w.setQuery(""), (0, import_chunk_gzt0mgvc.x9r)(j, { q: "", collapsed: [...v.getSnapshot().collapsed] }, F);
  };
  if (import_chunk_bq31aqv6.iU.includes(Ie)) {
    yt(), J();
    return;
  }
  if (Ie.startsWith("/")) {
    let [St = "", pt = ""] = w.getSnapshot().query.trim().slice(1).split(/\s+(.*)/, 2), at = (0, import_chunk_8704k7wd.zs)(St.toLowerCase(), (0, import_chunk_bzyb60p0.u5)());
    if (at && (0, import_chunk_vhsysgcd.yl)(at) && (0, import_chunk_tfs0ssqe.Qne)(at)) {
      if (at.fleetHostCall) {
        yt(), at.fleetHostCall({ exit: J, relaunch: () => V("manual"), login: () => L({ type: "login" }), setError: w.setError, setInfo: w.setHint, storageV5: F }, pt).catch((Le) => {
          (0, import_chunk_k449cc64.i)(Le), w.setError((0, import_chunk_jv7av99m.d)(Le));
        });
        return;
      }
      if (at.type !== "prompt" && at.name !== "model") {
        let Le = St.toLowerCase(), $t = De();
        if (!Oe.some((Rt) => Rt.kind !== "command" && (Rt.name === Le || Rt.aliases?.includes(Le))) && (!$t || $t.name === at.name || at.isHidden)) {
          if (at.name === "effort") {
            let ft = pt.trim(), ot = (0, import_chunk_k67pwqya.IU)(ft);
            if (/^(default|auto)$/i.test(ft) || (0, import_chunk_k67pwqya.Rwo)(ft)) yt(), Vr(w, Z, "effort", "default", C.getSnapshot().activeTab === "remote");
            else if (ot) yt(), Vr(w, Z, "effort", ot, C.getSnapshot().activeTab === "remote");
            else if (!ft) yt(), ll(h, "effort");
            else {
              let [Ft, Ge] = ft.split(/\s+/), We = (0, import_chunk_k67pwqya.$2e)(Ft) !== void 0 && Ge?.toLowerCase() === "off";
              w.setError(null), w.setHint(We ? !Gn({ launch: Z, window: Oi(w.getSnapshot()) }).ultracode ? "New sessions from this window don't start in ultracode" : (0, import_chunk_2yx6c1y2.vt)().ultracode === true ? "New sessions start in ultracode because ultracode is on in your settings" : "Ultracode is on from --effort ultracode; /effort <level> turns it off" : (0, import_chunk_k67pwqya.$2e)(Ft) !== void 0 ? "Ultracode can't be set for new sessions here. Start agent view with claude agents --effort ultracode, or run /effort ultracode in a session" : `Unknown effort '${ft}'. Use ${import_chunk_8hfdvrr1.ea.join(", ")}, or default`);
            }
            return;
          }
          if (at.name === "fast") {
            let ft = pt.trim().toLowerCase();
            if (!(0, import_chunk_865at33z.na)()) w.setError(null), w.setHint((0, import_chunk_865at33z.D9)() ?? "Fast mode is not available");
            else if (ft === "default" || ft === "on" || ft === "off") yt(), Vr(w, Z, "fast", ft, C.getSnapshot().activeTab === "remote");
            else if (!ft) yt(), ll(h, "fast");
            else w.setError(null), w.setHint(`Unknown /fast option '${ft}'. Use on, off, or default`);
            return;
          }
          if (at.name === "resume" && !pt.trim() && !ce && el()) {
            yt(), w.setError(null), w.setHint(null);
            let ft = C.openResumePicker(), ot = new Set(Ot);
            if (aa()) {
              for (let Ge of Ht) if (Ge.kind === "earlier") ot.add(Ge.entry.sessionId);
            }
            da(ot, true, F).then((Ge) => {
              if (ft !== C.resumePickerGen) return;
              if (Ge === null) {
                (0, import_chunk_cqa9hrgx.m)("fleet_view_resume_picker", "load_failed"), C.setResumePicker({ entries: [], failed: true });
                return;
              }
              let We = Ge.filter((Lt) => !E.isDeleting(Lt.sessionId.slice(0, 8)) && !E.isDeletingSession(Lt.sessionId));
              (0, import_chunk_cqa9hrgx.u)("fleet_view_resume_picker", { count: We.length }), C.setResumePicker({ entries: We, failed: false });
            });
            return;
          }
          w.setError(null);
          let { sanitizedName: Rt, skillNameHash: He } = (0, import_chunk_54j6k3fn.bpe)({ rawName: at.name, canonicalName: at.name, isMcp: false, isBuiltIn: (0, import_chunk_bzyb60p0.Sq)().has(at.name), isBundled: false, isOfficial: false });
          (0, import_chunk_y53wbr8a.a)("tengu_slash_command_unavailable", { command_name: Rt, ...He, surface: C.getSnapshot().activeTab === "remote" ? (0, import_chunk_78g0060s.S)("fleet-cloud") : (0, import_chunk_78g0060s.S)("fleet-local"), reason: (0, import_chunk_78g0060s.S)("unavailable_in_agent_view") }), w.setHint(at.name === "config" && (0, import_chunk_865at33z.ge)().defaultToAgentsView === true ? "Run /config in a session. /config defaultToAgentsView=false stops opening here" : `/${at.name} isn't available in agent view. Open a session and run it there`);
          return;
        }
      }
    }
  }
  if (Ie === "/model" || Ie.startsWith("/model ")) {
    let St = De();
    if (!Ae && St && St.kind !== "model") ;
    else {
      let pt = w.getSnapshot().query.trim().slice(6).trim(), at = pt.toLowerCase(), Le = _t.map((ft) => ft.name), $t = Le.find((ft) => ft.toLowerCase() === at), Gt = Le.filter((ft) => ft.toLowerCase().startsWith(at)), Rt = Ae ? St?.name : void 0, He = $t ?? (Gt.length === 1 ? Gt[0] : void 0) ?? Rt;
      if (He) yt(), Vr(w, Z, "model", He, C.getSnapshot().activeTab === "remote");
      else if (!pt) yt(), ll(h, "model");
      else w.setHint(`Unknown model '${pt}'. Type /model  to see options`);
      return;
    }
  }
  if (ie.length > 0) {
    mt(De()), to();
    return;
  }
  let Ye = kt, st = w.getSnapshot().mode === "bash", Ze = Ye === Y && !st ? de : ca(st ? `!${Ye}` : Ye, Fe, Se, we);
  if (Ze?.intent || Ze?.routine || Ze?.matched) {
    let St = (0, import_chunk_bq31aqv6.OSe)(Ze.intent, w.pastes);
    if (!Ze.routine && !Ze.matched && St.trim().length < Ob) {
      w.setError(null), w.setHint("Too short. Describe the task");
      return;
    }
    let pt = Ze.cwd ?? se, at = le.get(pt);
    if (Ze.matched && !Ze.exec && !(Ze.template.name.includes(":") && pt !== se)) {
      if (at && !at.some((Jt) => Jt.name === Ze.template.name || Jt.name.endsWith(`:${Ze.template.name}`))) {
        w.setError(`@${Ze.template.name} isn't available in ${(0, import_path4.basename)(pt)}`);
        return;
      }
    }
    let Le = xc(Z, Oi(w.getSnapshot())), $t = (0, import_chunk_95amtstn.rUo)(), Rt = !(0, import_chunk_bq31aqv6.Nu)(St).some((Jt) => w.pastes[Jt.id]?.type === "image") && St.length <= import_chunk_s7te3n3c.jL && !St.includes(`
`), He = !!$t && $t.ready && !Ze.matched && !Ze.routine && pt === $t.cwd && (0, import_chunk_95amtstn.xjs)($t.defaults, Le) && Rt, ft = He ? $t.sessionId : (0, import_crypto3.randomUUID)(), ot = ft.slice(0, 8);
    v.followId = ot, w.beginProgrammaticChange();
    let Ft = Ze.matched && !Ze.exec ? Ze.template.name : null, Ge = Ze.matched ? Ze.template : (0, import_chunk_95amtstn.kYn)(Z, at), We = w.pastes, Lt = Ze.exec ? (0, import_chunk_bq31aqv6.OSe)(Ze.exec, We) : void 0, Ne = { id: ot, state: (0, import_chunk_9e5mdyfk.w5e)({ template: Lt ? { name: "exec", description: "" } : Ze.routine ? { name: Ze.routine, description: "" } : Ge, intent: Lt ?? St, sessionId: ft, cwd: pt, originCwd: pt }), activity: "flowing" };
    E.updatePendings((Jt) => [...Jt, Ne]);
    let lo = Ye, At = w.getSnapshot().mode, { savedFocusJobId: Je, followOrigin: io } = v;
    v.savedFocusJobId = null, v.followOrigin = null, w.setQuery(""), w.setMode("prompt"), (0, import_chunk_gzt0mgvc.x9r)(j, { q: "", collapsed: [...v.getSnapshot().collapsed] }, F), w.replacePastes({ ...w.pastes }), w.pruneOrphanedPastes({ pruneTextPastes: true });
    let uo = (Jt) => {
      E.updatePendings((xt) => {
        let et = xt.filter((co) => co.id !== ot);
        if (!w.getSnapshot().query && et.length === 0) w.mergeRestoredPastes(We), v.savedFocusJobId = Je, v.followOrigin = io, w.setMode(At), Kt(lo);
        return et;
      }), w.setError(Jt);
    };
    (async () => {
      let Jt = Lt || Ze.matched || at || !Z?.agent ? Ge : (0, import_chunk_95amtstn.kYn)(Z, await (0, import_chunk_95amtstn.EYn)(pt, F).catch(() => []));
      return Lt ? (0, import_chunk_95amtstn.E_a)(Lt, ft, pt, F) : He ? (0, import_chunk_95amtstn.T_a)(St, Jt, F) : (0, import_chunk_95amtstn.tUo)(St, We, ot, F).then((xt) => (0, import_chunk_95amtstn.Rjs)(Jt, xt, { sessionId: ft, targetCwd: pt, routine: Ze.routine, defaults: Le, displayIntent: xt !== St ? St : void 0 }, F));
    })().then((Jt) => {
      if (He) (0, import_chunk_95amtstn.KBr)(ee, false, Z, le.get(ee), F);
      if (!Jt.ok) return uo(Jt.error);
      if (He && Jt.jobId !== ot) v.followId = Jt.jobId, Ne = { ...Ne, id: Jt.jobId, state: { ...Ne.state, sessionId: Jt.sessionId } }, E.updatePendings((xt) => xt.map((et) => et.id === ot ? Ne : et));
      if (He) E.kick(Jt.sessionId, Jt.jobId);
      if (Ft) {
        let xt = false;
        if ((0, import_chunk_865at33z.Ke)((et) => {
          let co = Date.now(), Eo = et.agentLastUsed?.[Ft];
          if (Eo !== void 0 && co - Eo < 6e4) return et;
          return xt = true, { ...et, agentLastUsed: { ...et.agentLastUsed ?? {}, [Ft]: co } };
        }, F), xt) ke();
      }
      if (Zt) T.arm(Ne.id, null), L({ type: "open", job: Ne, freshDispatch: true });
      else if (E.reload(), !He) E.watchPendingJobDir(ot);
    }, (Jt) => {
      if (He) (0, import_chunk_95amtstn.KBr)(ee, false, Z, le.get(ee), F);
      uo((0, import_chunk_jv7av99m.d)(Jt));
    });
  } else if (!Ze?.cwd && Ze?.exec === void 0) {
    if (Ze === null && Ye !== Y) return;
    if (rt?.kind === "fold") v.followOrigin = null, v.followId = null, v.expandCap(rt.group), (0, import_chunk_y53wbr8a.a)("tengu_fleetview_fold_expand", { hidden_count: rt.hidden, ms_since_mount: Date.now() - Wt });
    else if (rt?.kind === "header") {
      if (wt || Ze === null) return;
      v.followOrigin = rt.group, v.followId = null, qt(rt.group);
    } else if (rt?.kind === "earlier") Qe(rt.entry, "section");
    else if (rt?.kind === "newsession") Yt(rt.origin);
    else ct(Ue);
  }
}
function Gp(h, b) {
  let { editor: w, dispatchInputActive: E, insertAtCursor: v } = h, C = b.replace(/\r\n|\r/g, `
`), T = w.lastMintedPasteId ?? -1, F = w.pastes[T];
  if (E && F?.type === "text" && F.content === C) {
    let L = (0, import_chunk_bq31aqv6.rhr)(w.getSnapshot().query, w.pastes);
    if (L?.id === T) {
      delete w.pastes[T], w.setQueryAndCursor(L.expanded, L.cursorOffset), w.setExpandHintPasteId(null);
      return;
    }
  }
  let A = (0, import_chunk_bq31aqv6.f7)(C);
  if (E && (C.length > import_chunk_s7te3n3c.jL || A > 2)) {
    let L = w.mintTextPaste(C);
    if (v((0, import_chunk_bq31aqv6.jCe)(L, A)), C.length <= import_chunk_bq31aqv6.z1t) w.setExpandHintPasteId(L);
    return;
  }
  v(C);
}
async function cl(h, b, w) {
  let { editor: E, roster: v, attach: C, awayLoop: T, storageV5: F } = h;
  if (b.id.startsWith("remote-pending-")) return en;
  if (w.trim() === "/stop" && !(0, import_chunk_r5rtrbxq.fht)(w) && (0, import_chunk_9e5mdyfk.l1t)(b.state) && !(0, import_chunk_9e5mdyfk.Wd)(b.state)) {
    if (v.getSnapshot().pendings.some((ee) => ee.id === b.id)) return en;
    try {
      return await h.stop(b), null;
    } catch (ee) {
      return (0, import_chunk_w578pjby.t)(`[fleetview] /stop from the peek failed: ${(0, import_chunk_jv7av99m.d)(ee)}`, { level: "warn" }), `Couldn't stop \u2014 ${(0, import_chunk_jv7av99m.d)(ee)}`;
    }
  }
  let A = v.holdJob(b.id), L = b.state.resumeSessionId ?? b.state.sessionId, J = v.kick(L, b.id);
  v.updateJobs((ee) => {
    if (!ee?.some((ce) => ce.id === b.id)) return ee;
    return ee.map((ce) => {
      if (ce.id !== b.id) return ce;
      let Z = (0, import_chunk_4we2aqs8.r9t)(ce.state, w);
      return { ...ce, state: Z, activity: On(Z) };
    });
  });
  let V, W, D = false, j = false, q = false, se = false;
  try {
    let ee = () => Ls(T, b.state.sessionId, Date.now()), ce = await (0, import_chunk_4we2aqs8.o9t)(b.id, w, b.state, void 0, ee, F);
    if (V = ce?.err ?? null, W = ce?.code, V === import_chunk_4we2aqs8.wmt) {
      let Z = C.getWarming(b.id);
      if (Z) {
        await Z;
        let Y = await (0, import_chunk_4we2aqs8.o9t)(b.id, w, b.state, void 0, ee, F);
        V = Y?.err ?? null, W = Y?.code;
      }
    }
    if (V === import_chunk_4we2aqs8.wmt && (0, import_chunk_5h9h52az.Rk)(w) === "prompt" && !(0, import_chunk_r5rtrbxq.fht)(w)) {
      let Z = await dr(b.id, { knownState: b.state, initialPrompt: w }, F);
      if (!Z.ok && Z.alive) {
        let Y = await (0, import_chunk_4we2aqs8.o9t)(b.id, w, b.state, void 0, ee, F);
        V = Y?.err ?? null, W = Y?.code;
      } else D = !Z.ok, j = !Z.ok && Z.queued === true, q = !Z.ok && "errorCode" in Z && Z.errorCode === "dead_epoch_transcript_gone", se = !Z.ok && "errorCode" in Z && Z.errorCode === "job_removed", V = Z.ok ? null : j ? "Reply queued until this session restarts" : Z.error;
      if (Z.ok) ee();
    }
    if (V) J();
  } finally {
    A();
  }
  if (V === null) (0, import_chunk_cqa9hrgx.u)("fleet_view_reply"), E.clearReplyFailure(L);
  else {
    if (D) (0, import_chunk_w578pjby.t)(`[fleetview] peek-reply respawn failed: ${V}`);
    let ee = Date.now();
    if (E.isRetryOfRecentReplyFailure(L, ee)) (0, import_chunk_cqa9hrgx.l)("fleet_view_reply", "retry_of_recent_failure");
    else if (V === import_chunk_4we2aqs8.wmt) (0, import_chunk_cqa9hrgx.l)("fleet_view_reply", "not_running_no_respawn");
    else if (D && j) (0, import_chunk_cqa9hrgx.l)("fleet_view_reply", "queued_for_later");
    else if (q) (0, import_chunk_cqa9hrgx.l)("fleet_view_reply", "dead_epoch_transcript_gone");
    else if (se) (0, import_chunk_cqa9hrgx.l)("fleet_view_reply", "job_removed");
    else if (D) (0, import_chunk_cqa9hrgx.m)("fleet_view_reply", "respawn_failed");
    else if ((0, import_chunk_4we2aqs8.Njs)(V)) (0, import_chunk_cqa9hrgx.l)("fleet_view_reply", "daemon_restarting");
    else {
      let ce = V, Z = [...ce.matchAll(/\bE[A-Z]{2,14}\b/g)].find((Fe) => !"/\\".includes(ce[Fe.index - 1] ?? "."))?.[0];
      (0, import_chunk_w578pjby.t)(`[fleetview] peek-reply send failed: ${ce}`);
      let Y = !W && Z !== void 0 && xb.has(Z) && await (0, import_chunk_r59sj93t.O_e)((0, import_chunk_9e5mdyfk.Bs)(b.id), b.state, w, F), de = { errno: (0, import_chunk_jv7av99m.Cy)(W ?? Z) ?? (0, import_chunk_78g0060s.S)("unknown") };
      if (Y) V = "Reply queued until this session restarts", (0, import_chunk_cqa9hrgx.l)("fleet_view_reply", "queued_for_later", de);
      else (0, import_chunk_cqa9hrgx.m)("fleet_view_reply", "send_failed", de);
    }
    E.noteReplyFailure(L, ee);
  }
  return v.reload(), V;
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var Mb = 3, Sa = 1e4;
function Ab(h, b) {
  let w = h.state;
  if (vo(w)) {
    let v = Date.parse(w.updatedAt) || Date.parse(w.createdAt);
    if (!Number.isFinite(v)) return "";
    let C = Math.max(0, b - v);
    return w.tempo === "active" && w.detail !== import_chunk_9e5mdyfk.uWe && C < Gd ? "" : (0, import_chunk_f64qna2j.Cn)(C, { mostSignificantOnly: true });
  }
  let E = (0, import_chunk_9e5mdyfk.Wd)(w) && !((0, import_chunk_9e5mdyfk.Hk)(w.state) === "success" && (0, import_chunk_9e5mdyfk.wSe)(w)) ? Date.parse(w.firstTerminalAt ?? w.updatedAt) : b;
  return (0, import_chunk_f64qna2j.Cn)(Math.max(0, E - Date.parse(w.createdAt)), { mostSignificantOnly: true });
}
function Hr(h, b, w = Date.now()) {
  if (b != null && b > w) return `in ${(0, import_chunk_f64qna2j.Cn)(b - w, { mostSignificantOnly: true })}`;
  return Ab(h, w);
}
function tn(h, b = false, w = false) {
  let E = (L) => (0, import_chunk_7cfjrnwy.Wr)(vo(h) ? (0, import_chunk_sjqze7qg.i7)(L) : L);
  if (h.name) return (0, import_chunk_sah8dzn4.As)(E(h.name));
  let v = 25, C = (0, import_chunk_sah8dzn4.As)(E(h.displayIntent ?? h.intent)).split(" ").filter(Boolean);
  if (C.length === 0) {
    if (b) return w ? "session you came from" : "current session";
    if ((h.template === "bg" || h.template === import_chunk_95amtstn.AIe.name) && h.state === "working") return w ? "untitled session" : "new session";
    if (w && (h.template === "bg" || h.template === import_chunk_95amtstn.AIe.name)) return "untitled session";
    return (0, import_chunk_7cfjrnwy.Wr)(h.template);
  }
  let T = C.length > 3 ? `${C.slice(0, 3).join(" ")}\u2026` : C.join(" ");
  if ((0, import_chunk_mgh1y10w.oe)(T) <= v) return T;
  let F = "", A = 0;
  for (let L of (0, import_chunk_em52jhgp.Bke)(T)) {
    let J = (0, import_chunk_mgh1y10w.oe)(L);
    if (A + J > v - 1) break;
    F += L, A += J;
  }
  return `${F}\u2026`;
}
function ya(h, b) {
  let E = (0, import_chunk_sng02qpc.k)(12), w = (0, import_chunk_8bkqeb5d.ir)(), v;
  if (E[0] !== h || E[1] !== b) v = { label: h, hasName: b, fired: false }, E[0] = h, E[1] = b, E[2] = v;
  else v = E[2];
  let C = (0, import_chunk_bs4h6795.I)(v), [T, F] = (0, import_chunk_bs4h6795.y)(null), A, L;
  if (E[3] !== w || E[4] !== h || E[5] !== b) A = () => {
    if (C.current.fired || C.current.hasName || !b) {
      C.current = { label: h, hasName: b, fired: C.current.fired };
      return;
    }
    let J = C.current.label;
    C.current = { label: h, hasName: true, fired: true };
    let V = Math.max((0, import_chunk_em52jhgp.Uke)(J), (0, import_chunk_em52jhgp.Uke)(h));
    if (V === 0) {
      return;
    }
    F({ old: J, n: 1 });
    let W = 1;
    let D = Math.max(16, Math.floor(360 / V));
    let j = null;
    let q = () => {
      if (W = W + 1, W >= V) F(null), j = null;
      else F({ old: J, n: W }), j = w.setTimeout(q, D);
    };
    return j = w.setTimeout(q, D), () => {
      j?.(), F(null);
    };
  }, L = [w, h, b], E[3] = w, E[4] = h, E[5] = b, E[6] = A, E[7] = L;
  else A = E[6], L = E[7];
  if ((0, import_chunk_bs4h6795.It)(A, L), !T) {
    return null;
  }
  let se;
  if (E[8] !== T.n || E[9] !== T.old || E[10] !== h) se = $p(T.old, h, T.n), E[8] = T.n, E[9] = T.old, E[10] = h, E[11] = se;
  else se = E[11];
  return se;
}
function $p(h, b, w) {
  let E = (0, import_chunk_em52jhgp.Bke)(h), v = (0, import_chunk_em52jhgp.Bke)(b), C = v.slice(0, Math.min(w, v.length)).join(""), T = Math.max((0, import_chunk_mgh1y10w.oe)(h), (0, import_chunk_mgh1y10w.oe)(b)), F = (0, import_chunk_mgh1y10w.oe)(C), A = "";
  for (let L of E.slice(w)) {
    let J = (0, import_chunk_mgh1y10w.oe)(L);
    if (F + J > T) break;
    A += L, F += J;
  }
  return { display: C + A + (0, import_chunk_7cfjrnwy.xd)(" ", T - F), newLen: C.length };
}
function Db(h) {
  let b = Tn(h.children);
  if (!b.length) return 0;
  let w = b.filter((E) => E.kind !== "frame");
  if (w.length > 1) return (0, import_chunk_mgh1y10w.oe)(`${w.length} PRs`);
  if (w.length === 1) {
    let E = df(w[0]);
    return (0, import_chunk_mgh1y10w.oe)(E !== void 0 ? `#${E}` : "PR");
  }
  return (0, import_chunk_mgh1y10w.oe)(b.length > 1 ? `${b.length} ${import_chunk_xcgcdx61.Wh}` : import_chunk_xcgcdx61.Wh);
}
function rf(h) {
  return h.includes("--safe-mode");
}
function sf(h, b, w, E, v) {
  let C = Math.max(Mb, ...h.map((J) => (0, import_chunk_mgh1y10w.oe)(Hr(J, b(J), v)))), T = Math.min(Math.max(40, Math.floor(E / 3)), Math.max(12, ...h.map((J) => (0, import_chunk_mgh1y10w.oe)(tn(J.state, J.id === w))))), F = Math.max(0, ...h.map((J) => Db(J.state))), A = h.some((J) => vo(J.state)) ? (0, import_chunk_mgh1y10w.oe)(lr(true)) : 0, L = Math.max(8, E - (T + 2) - 2 - (F + 2) - (A > 0 ? A + 2 : 0) - (C + 2) - 2);
  return { age: C, label: T, artifact: F, kind: A, detail: L };
}
function lr(h) {
  return h ? "cloud" : "local";
}
function Nb() {
  return (0, import_chunk_gdmb039p.T7n)()[4];
}
function Vb() {
  return (0, import_chunk_gdmb039p.T7n)()[1];
}
function ur(h, b, w, E) {
  if (h === "success" && E) return { word: "Done", color: "success", dim: false };
  if (h === "failure" && E) return { word: "Failed", color: "error", dim: false };
  if (h === "stopped" && E) return { word: "Stopped", color: "inactive", dim: false };
  if (w === "busy" || w === "shell") return { word: Ho.working, color: void 0, dim: false };
  if (b === "blocked" || w === "waiting") return { word: Ho.blocked, color: "warning", dim: false };
  return { word: "Idle", color: void 0, dim: true };
}
function af(h, b, w) {
  let { color: E, dim: v } = ur(b, h.tempo, w, (0, import_chunk_9e5mdyfk.Hk)(h.state));
  return { color: E, dim: v };
}
var qp = { error: 2, warning: 1 };
function Sl(h, b) {
  let w = h, E = h ? qp[h] ?? 0 : 0;
  for (let v of b) {
    if (v.color === void 0 || xn(v)) continue;
    let C = qp[v.color] ?? 0;
    if (C > E) w = v.color, E = C;
  }
  return w;
}
function xn(h) {
  return h.row.kind === "frame";
}
function Bi(h) {
  return (0, import_chunk_3hr8g93j.e1e)(h.href) ? "mr" : "pr";
}
function df(h) {
  let b = Nr(h.href);
  if (b !== null) return Number(b);
  return /^\d+$/.test(h.id) ? Number(h.id) : void 0;
}
function lf(h) {
  let b = (0, import_chunk_sjqze7qg.hio)(h);
  return b === "error" ? "warning" : b;
}
var Jb = { error: 3, warning: 2, success: 1 };
function Bb(h) {
  return [...h].sort((b, w) => w.sortRank - b.sortRank);
}
function jb(h) {
  if (h.state === "MERGED") return [{ text: "merged", color: "merged" }];
  if (h.state === "CLOSED") return [{ text: "closed", color: "inactive" }];
  let b = [], { failed: w, pending: E, passed: v } = h.checks, C = w + E + v;
  if (w > 0) b.push({ text: `${import_chunk_7r4ehpnw.xe.cross} ${w}/${C}`, color: "error" });
  else if (E > 0) b.push({ text: `${v}/${C}`, color: "warning" });
  else if (C > 0) b.push({ text: import_chunk_7r4ehpnw.xe.tick, color: "success" });
  switch (h.review) {
    case "APPROVED":
      b.push({ text: "approved", color: "success" });
      break;
    case "CHANGES_REQUESTED":
      b.push({ text: import_chunk_7r4ehpnw.xe.cross, color: "error" });
      break;
    case "REVIEW_REQUIRED":
      b.push({ text: "needs review", color: void 0 });
      break;
    case null:
      break;
  }
  if (b.length === 0 && h.state !== "DRAFT") b.push({ text: h.state.toLowerCase(), color: lf(h) });
  return b;
}
function Gr(h, b) {
  return Bb(Tn(h).map((w) => {
    if (w.kind === "frame") return { row: w, prNumber: void 0, label: (0, import_chunk_7cfjrnwy.Wr)(w.title ?? "") || (0, import_chunk_7cfjrnwy.Wr)(w.id), status: [], diffStat: void 0, isDraft: false, color: "claude", sortRank: 0 };
    let E = b.get(w.href), v = E ? (0, import_chunk_sjqze7qg.hio)(E) : void 0;
    return { row: w, prNumber: E?.number ?? df(w), label: E?.title ? (0, import_chunk_7cfjrnwy.Wr)(E.title) : "", status: E ? jb(E) : [], diffStat: E && E.state !== "MERGED" && E.state !== "CLOSED" ? { additions: E.additions, deletions: E.deletions } : void 0, isDraft: E?.state === "DRAFT", color: E ? lf(E) : void 0, sortRank: E?.state === "OPEN" && v ? Jb[v] ?? 0 : 0 };
  }));
}
var Yp = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/, bl = /(\*\*.+?\*\*|\+\+.+?\+\+|`[^`]+`|https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+)/, wl = /^(?:\*\*|\+\+|`)(.+?)(?:\*\*|\+\+|`)$/;
function uf(h) {
  return h.split(bl).map((b) => wl.exec(b)?.[1] ?? b).join("");
}
function Ea(h) {
  let E = (0, import_chunk_sng02qpc.k)(11), { value: b, linkHref: w } = h, v, C, T;
  if (E[0] !== w || E[1] !== b) {
    let F = b.split(bl);
    v = import_chunk_8bkqeb5d.r;
    C = true;
    let A2;
    if (E[5] !== w) A2 = (L, J) => {
      let V = L.match(wl);
      if (V) {
        return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: V[1] }, J);
      }
      if (Yp.test(L)) {
        let W = (0, import_chunk_9b4aq7fb.FPe)(L);
        let D = w === void 0 ? W : w(W);
        if (D === void 0) {
          return L;
        }
        return (0, import_chunk_a46xeenj.o)(import_chunk_bs4h6795.nf, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: D, children: W }), L.slice(W.length)] }, J);
      }
      return L;
    }, E[5] = w, E[6] = A2;
    else A2 = E[6];
    T = F.map(A2);
    E[0] = w, E[1] = b, E[2] = v, E[3] = C, E[4] = T;
  } else v = E[2], C = E[3], T = E[4];
  let A;
  if (E[7] !== v || E[8] !== C || E[9] !== T) A = (0, import_chunk_a46xeenj.e)(v, { dimColor: C, children: T }), E[7] = v, E[8] = C, E[9] = T, E[10] = A;
  else A = E[10];
  return A;
}
function Kr(h, b, w, E, v, C = false) {
  let T = v ? "selected, " : "", F = C ? "pinned, " : "", { word: A } = ur(h, b, w, E);
  return `${T}${F}${A.toLowerCase()}:`;
}
function Ur(h, b, w) {
  if (b && h.tempo !== "active" && w === void 0) return import_chunk_xcgcdx61.FMo;
  if (w === "busy" || w === "shell") return null;
  if ((0, import_chunk_9e5mdyfk.Ynn)(h)) return Vb();
  return Nb();
}
function cr() {
  let v = (0, import_chunk_sng02qpc.k)(1), h = (0, import_chunk_0t7st4dz.Kh)(), b = (0, import_chunk_8bkqeb5d.Xe)(), w = h || b, [, E] = (0, import_chunk_8bkqeb5d.gc)(w ? null : 120);
  if (w) {
    return import_chunk_a824gc5p.CWr;
  }
  let C;
  if (v[0] === import_chunk_w1d7ygsk.R) C = (0, import_chunk_gdmb039p.BZe)(), v[0] = C;
  else C = v[0];
  let T = C;
  return T[Math.floor(E / 120) % T.length];
}
var $b = 1728e5, qb = 3, Yb = 3, zb = 2, Qb = 2, Xb = 4, Zb = 1, ew = "simple:new-session", qr = "simple:pinned", fr = "simple:finished", $r = { needs: "simple:needs", live: "simple:live", done: "simple:done" };
function Yr(h, b) {
  if (b === "busy") return "live";
  if ((0, import_chunk_9e5mdyfk.Wd)(h) && !((0, import_chunk_9e5mdyfk.Hk)(h.state) === "success" && (0, import_chunk_9e5mdyfk.wSe)(h))) return "done";
  if (b === "waiting") return "needs";
  if (h.tempo === "blocked" && h.needs && h.needs !== import_chunk_9e5mdyfk.jv) return "needs";
  return "live";
}
function El(h) {
  for (let b of [h.lastTerminalAt, h.firstTerminalAt, h.updatedAt, h.createdAt]) if (b) {
    let w = Date.parse(b);
    if (Number.isFinite(w)) return w;
  }
  return 0;
}
function ji(h, b) {
  if (h === void 0) return false;
  return !(cf(h) === $r.done && cf(b) === $r.done);
}
function cf(h) {
  return h.group === fr ? $r.done : h.group;
}
function tw(h, b) {
  return Math.max(0, h - qb - Xd - b);
}
function pf(h, { statusFor: b, now: w, fallbackOrigin: E, showFinishedEarlier: v, terminalRows: C }) {
  let T = [], F = [], A = [], L = [], J = 0, V = 0, W = 0;
  for (let Se of h) {
    let we = b(Se), le = Yr(Se.state, we);
    if (le === "needs") J++;
    else if (le === "live") {
      if (V++, we === "busy" || we === "shell") W++;
    }
    if (Se.state.pinned) {
      T.push(Se);
      continue;
    }
    switch (le) {
      case "needs":
        F.push(Se);
        break;
      case "live":
        A.push(Se);
        break;
      case "done":
        L.push(Se);
        break;
    }
  }
  L.sort((Se, we) => El(we.state) - El(Se.state));
  let D = [{ kind: "newsession", origin: E, group: ew }], j = (Se, we) => {
    for (let le of we) D.push({ kind: "job", job: le, origin: (0, import_chunk_9e5mdyfk.fDe)(le.state), group: Se });
  };
  j(qr, T), j($r.needs, F), j($r.live, A);
  let se = 1 + (A.length * zb + (T.length + F.length) * Yb) + (J + V === 0 ? Xb : 0) + (L.length > 0 ? 1 + Zb : 0), ee = tw(C, se), ce = (0, import_chunk_4smdap7r.U)(L, (Se) => w - El(Se.state) > $b), Z = Math.max(0, L.length - ce - ee), Y = v ? 0 : ce + Z, de = Y >= Qb ? Y : 0, Fe = (0, import_chunk_4smdap7r.U)(L.slice(L.length - de), (Se) => (0, import_chunk_9e5mdyfk.Hk)(Se.state.state) === "failure");
  if (j($r.done, L.slice(0, L.length - de)), de > 0) D.push({ kind: "fold", origin: E, group: fr, hidden: de });
  return { rows: D, doneCount: L.length, doneFoldHidden: de, doneFoldHiddenFailed: Fe, doneCap: ee, runningCount: J + V, needsCount: J, workingCount: W, liveCount: V };
}
function ow(h) {
  let b = h.fan ?? [], w = b.filter((v) => v.kind === "todo");
  if (w.length > 0) return `${(0, import_chunk_4smdap7r.U)(w, (v) => v.doneAt !== void 0)}/${w.length}`;
  let E = b.filter((v) => v.kind === "agent" || v.kind === "workflow");
  if (E.length > 0) return `${(0, import_chunk_4smdap7r.U)(E, (v) => v.doneAt !== void 0)}/${E.length} agents`;
  return;
}
function nw(h, b) {
  if (h === void 0 || h <= 0) return;
  let w = `${(0, import_chunk_f64qna2j.go)(h)} tokens`;
  return b ? `${import_chunk_7r4ehpnw.xe.arrowDown} ${w}` : w;
}
function Rl(h, b) {
  let w = b(h), E = ur(h.activity, h.state.tempo, w, (0, import_chunk_9e5mdyfk.Hk)(h.state.state));
  if (E.word === Ho.working) return { ...E, color: void 0, dim: true };
  if (E.word !== Ho.blocked) return E;
  return Yr(h.state, w) === "needs" ? { ...E, word: "Needs you" } : { word: "Idle", color: void 0, dim: true };
}
function kl(h, b, w, E) {
  return Hr(h, b.has(h.id) ? w.get(h.state.sessionId)?.nextAt : void 0, E);
}
function vl(h, b) {
  return nw(h.state.tokens, b.word === Ho.working);
}
function Cl(h, b, w, E) {
  let v = (0, import_chunk_qbrmmydq.Hm)() ? 1 / 0 : Math.max(24, Math.min(72, Math.floor(E * 0.55))), C = (J) => v === 1 / 0 ? J : (0, import_chunk_f64qna2j.Tt)(J, v);
  if (Yr(h.state, w) === "done") return;
  let F = h.state.needs && h.state.needs !== import_chunk_9e5mdyfk.jv ? h.state.needs : void 0;
  if (F) return C(Io(h.state, F));
  if (!h.state.pinned && b.word !== Ho.working) return;
  let A = ow(h.state);
  if (A) return A;
  let L = h.state.detail;
  return L && !Di(L) ? C(Io(h.state, L)) : void 0;
}
function Pn(h, b) {
  return b === "pinned" ? "pinned" : `${h}:${b}`;
}
function Ra(h, b, w, E) {
  let v = b === "bash" ? null : Nr(h), C = v ? ua(v) : void 0, T = b === "bash" || v ? null : la(h), F = (L) => !E || (0, import_chunk_9e5mdyfk.Zpr)(L.state, E), A = v ? (L) => ol(L, v, C) : T ? (L) => nl(L, T) : null;
  return A ? (w ?? []).find((L) => F(L) && A(L.state))?.id : void 0;
}
function ka(h, b, w, E) {
  return w ? null : ca(b === "bash" ? `!${h}` : h, E.templates, E.allRepos, E.routines);
}
function rw(h) {
  return !!(h?.intent || h?.routine || h?.matched);
}
function iw(h) {
  return !!(h && (h.intent || h.routine || h.matched || h.cwd !== void 0 || h.exec !== void 0));
}
function ff({ jobs: h, remoteJobs: b, pendings: w, prStatuses: E, liveStatus: v, heldInTerminal: C, loopJobIds: T, loopKicks: F, focusedIdx: A, hoverFocusIdx: L, followOrigin: J, collapsed: V, capExpanded: W, groupMode: D, activeTab: j, query: q, mode: se, dispatch: ee, linkMatchId: ce, dispatchRepoCwd: Z, pendingDelete: Y, earlierEntries: de, cwdFilter: Fe, initialJobId: Se, originNotKeptId: we, simpleView: le, simpleWantsRemote: ie, launcherCwd: Oe, launcherGroup: Ae, scopedFallbackOrigin: _t, termRows: De, columns: mt, now: to, ageNow: Ot }) {
  let Ht = (me) => Pn(D, me), ke = se === "bash" || ee?.exec !== void 0, Wt = rw(ee), rt = iw(ee), Ue = ee === null, wt = Ue ? /* @__PURE__ */ new Set() : V, { template: qt, state: Qe, name: Yt, group: ct, output: je, pr: Kt, url: Zt, text: kt } = Tp(ee ? "" : q), Ut = Kt ? ua(Kt) : void 0, Ie = h ?? [], yt = Fe ? Ie.filter((me) => (0, import_chunk_9e5mdyfk.Zpr)(me.state, Fe)) : Ie, Ye = [...yt, ...b], st = Ye.filter((me) => {
    if (qt && !me.state.template.toLowerCase().startsWith(qt)) return false;
    if (Yt && (0, import_chunk_95amtstn.vYn)(me.state, Yt) === 0) return false;
    if (ct && !me.state.group?.toLowerCase().startsWith(ct) && !(me.state.pinned && "pinned".startsWith(ct))) return false;
    if (Kt && !ol(me.state, Kt, Ut)) return false;
    if (Zt && !nl(me.state, Zt)) return false;
    if (je !== void 0 && !Object.values(me.state.output ?? {}).some((ue) => ue.toLowerCase().includes(je))) return false;
    if (Qe && !me.state.state.toLowerCase().startsWith(Qe) && !jo(me.state).startsWith(Qe) && !Ho[Ws(me, E, v(me))].toLowerCase().startsWith(Qe)) return false;
    if (kt) {
      if (![me.state.name, me.state.intent, me.state.detail, ...Object.values(me.state.output ?? {})].join(" ").toLowerCase().includes(kt)) return false;
    }
    return true;
  }), Ze = w.filter((me) => !st.some((ue) => ue.id === me.id)), St = Ze.length > 0 ? ar([...Ze, ...st]) : st, pt = D === "state", at = D === "group", Le = new Map(St.map((me) => [me.id, me.state.pinned ? "pinned" : Y?.id === me.id && Y.group ? Y.group : pt ? Ws(me, E, v(me)) : at ? me.state.group ?? import_chunk_9e5mdyfk.L6 : Xs(me.state)])), $t = (me) => me === "pinned" ? -1 : me === import_chunk_9e5mdyfk.L6 ? 1 : 0, Gt = [...St].sort((me, ue) => {
    let ze = Le.get(me.id), Xt = Le.get(ue.id);
    if (ze === "pinned" || Xt === "pinned") return (ze === "pinned" ? 0 : 1) - (Xt === "pinned" ? 0 : 1);
    if (at) {
      let fo = (To) => Y?.id === To.id && Y.sortKey !== void 0 ? Y.sortKey : Date.parse(To.state.updatedAt);
      return $t(ze) - $t(Xt) || ze.localeCompare(Xt) || fo(ue) - fo(me);
    }
    if (pt) {
      let fo = rr.indexOf(ze) - rr.indexOf(Xt), To = (xo) => Y?.id === xo.id && Y.sortKey !== void 0 ? Y.sortKey : Mr(xo.state, ze);
      return fo !== 0 ? fo : To(ue) - To(me) || ue.state.createdAt.localeCompare(me.state.createdAt);
    }
    if (ze === Ae && Xt !== Ae) return -1;
    if (Xt === Ae && ze !== Ae) return 1;
    return ze.localeCompare(Xt);
  }), Rt = 1 / 0, He = Qd, ft = false, ot = /* @__PURE__ */ new Set();
  for (let me of [...h ?? [], ...w]) {
    if (me.state.sessionId) ot.add(me.state.sessionId);
    if (me.state.resumeSessionId) ot.add(me.state.resumeSessionId);
  }
  let Ge = Boolean(qt || Kt || Zt || Qe || ct) || je !== void 0 || de.length === 0 || Boolean(Fe) ? [] : de.filter((me) => !ot.has(me.sessionId) && (!kt || me.title.toLowerCase().includes(kt)) && (!Yt || me.title.toLowerCase().includes(Yt)));
  if (pt && !le) {
    let me = Gt.filter((fo) => Le.get(fo.id) === "done"), ue = new Set(Gt.map((fo) => Le.get(fo.id))).size, ze = Gt.reduce((fo, To) => {
      let xo = Le.get(To.id);
      return xo !== "done" && !wt.has(Ht(xo)) ? fo + 1 : fo;
    }, 0), Xt = Qs(De, ze + Math.max(0, ue * 2 - 1));
    if (He = Xt.doneCap, ft = Xt.compactHeader, !W.has("done")) Rt = dp({ done: me, earlier: Ge, doneCap: He, initialJobId: Se, linkMatchId: ce });
  } else if (!le && Ge.length > 0) {
    let me = new Set(Gt.map((ze) => Le.get(ze.id))).size, ue = Qs(De, Gt.length + Math.max(0, me * 2 - 1));
    if (He = ue.doneCap, ft = ue.compactHeader, !W.has(import_chunk_9e5mdyfk.rU)) Rt = Ge.length >= He + qs ? He : 1 / 0;
  }
  let We = { blocked: (0, import_chunk_4smdap7r.U)(Ye, (me) => jo(me.state, v(me)) === "blocked"), active: (0, import_chunk_4smdap7r.U)(Ye, (me) => jo(me.state, v(me)) === "active"), completed: (0, import_chunk_4smdap7r.U)(Ye, (me) => jo(me.state, v(me)) === "completed") }, Lt = Gt.every((me) => me.id === Se), Ne = !le && pt && !q && Lt && !Gt[0]?.state.pinned, lo = le ? pf(St, { statusFor: v, now: to, fallbackOrigin: _t, showFinishedEarlier: W.has(fr), terminalRows: De }) : null;
  if (lo !== null) {
    let me = 1 + lo.needsCount + lo.liveCount;
    ft = Qs(De, me).compactHeader;
  }
  let At = lo ?? rp(Gt, Le, { byState: pt, byGroup: at, launcherGroup: Ae, scopedFallbackOrigin: _t, doneFoldAt: Rt, emptyBucketHint: Ne, earlier: Ge }), Je = At.rows, io = /* @__PURE__ */ new Map();
  for (let me of Gt) {
    let ue = Le.get(me.id);
    io.set(ue, (io.get(ue) ?? 0) + 1);
  }
  if (Ge.length > 0) {
    let me = pt ? "done" : import_chunk_9e5mdyfk.rU;
    io.set(me, (io.get(me) ?? 0) + Ge.length);
  }
  if (wt.size > 0) Je = Je.filter((me) => me.kind === "header" || !wt.has(Ht(me.group)));
  let uo = le ? 0 : Ue ? ap(Je, Yt) : ip(Je, Oe, j === "remote"), Jt = new Set(Je.filter((me) => me.kind === "header").map((me) => me.group)).size > 1, xt = Je[A], et = xt?.kind === "job" ? xt.job : void 0, co = xt?.kind === "job" ? xt.job.state.backend === "remote" : xt?.kind === "header" && xt.cloud === true, Eo = xt?.kind === "job" && xt.job.state.backend !== "daemon" && !co, Pe = j === "remote" || co || Eo ? _t : xt?.origin ?? _t, lt = Eo || le && co ? _t : xt?.origin ?? _t, gt = xt?.group ?? Ae, Dt = pt && !le ? _t : Pe, eo = A === L, So = sf(Gt, (me) => T.has(me.id) ? F.get(me.state.sessionId)?.nextAt : null, Se, mt, Ot), ao = (() => {
    if (!rt || ce) return null;
    if (pt) return "working";
    if (j === "remote" || co) return null;
    if (Z) return Je.find((ze) => ze.kind === "header" && ze.origin === Z && ze.group !== "pinned")?.group ?? null;
    let me = Je[A];
    if (me?.kind === "job") {
      if (me.group === "pinned") return Je.find((ze) => ze.kind === "header" && ze.origin === me.origin && ze.group !== "pinned")?.group ?? null;
      return me.group;
    }
    if (me?.kind === "header") return me.group === "pinned" ? null : me.group;
    return null;
  })(), wo = !Wt && ee?.cwd !== void 0, no = !!et && w.some((me) => me.id === et.id), ko = !!et && et.id === Se, an = (0, import_chunk_4smdap7r.U)(ie ? [...Ie, ...b] : Ie, (me) => {
    let ue = Ws(me, E, v(me));
    return me.id !== we && (ue === "blocked" || ue === "working");
  }), $o = Wt ? "create" : ko ? "return" : et && Gs(et.state) && !C(et) ? "resume" : "open", qo = xt?.kind === "header" && xt.group === J ? Gt.filter((me) => Le.get(me.id) === xt.group) : [], Bo = qo.filter((me) => me.state.backend === "remote" === (j === "remote")), Yo = Bo.length < qo.length;
  return { byState: pt, byGroup: at, hasDispatch: Wt, hasComposedDispatch: rt, isBashDispatch: ke, enterIsNoop: wo, queryIsFilter: Ue, hasNameFilter: Yt !== void 0, loopJobIds: T, scopedLocalJobs: yt, scopedJobs: Ye, filtered: Gt, groupOf: Le, jobSessionIds: ot, earlierVisible: Ge, doneCap: He, compactHeader: ft, simpleBuilt: lo, built: At, collapsed: wt, rows: Je, homeIdx: uo, hasMultipleOrigins: Jt, groupCounts: io, bandCounts: We, onlyOrigin: Lt, isOnboarding: Ne, focusedRow: xt, focused: et, altOpenOrigin: lt, focusedGroup: gt, dispatchOrigin: Dt, focusIsFromHover: eo, cols: So, ageNow: Ot, dispatchTargetGroup: ao, headerJobs: Bo, headerLeavesRows: Yo, runningCount: an, enterLabel: $o, focusedIsPending: no };
}
function lw(h) {
  return (0, import_path3.isAbsolute)(h) && !(0, import_chunk_z6pfqf6e.pg)(h) && !(0, import_chunk_z6pfqf6e.sa)(h) && !(0, import_chunk_z6pfqf6e.KS)(h);
}
var _l = "Press Enter again to restart this session fresh. It stopped before its first response, so nothing was saved. Any session it came from is untouched.", xl = "Press Enter again to restart this session. It isn't responding. It picks up where it left off.", Il = "Press Enter to try the restart again. Couldn't stop the session yet. The background service may be restarting.", Ol = "Press Enter again to resume this session (it ended while the background service was off), or ctrl+x to remove it.", uw = 700, mf = "This session's file is no longer on disk. Press ctrl+x to remove the row. Old files are cleaned up, so there's nothing to resume.", bf = "This command isn't responding. Press ctrl+x to stop it. It won't be run again for you", cw = 5e3;
function Hi(h, b) {
  h.forkRefusedJobId = null, h.restartOfferedJobId = null, h.deadEpochOfferedJobId = null;
  let w = b.getSnapshot().error;
  if (w === _l || w === xl || w === Il || w === Ol) b.setError(null);
}
function wf(h, b, w) {
  h.forkRefusedJobId = null, h.deadEpochOfferedJobId = null, h.restartOfferedJobId = w, b.setError(xl);
}
function Ca(h, b, w, E) {
  let v = b.getSnapshot();
  return h.getSnapshot().error === E && !v.previewOpen && !v.helpOpen && !v.debugOpen && !v.exitPending && v.renaming === null && v.groupEdit === null && w.pending === null;
}
function gf(h) {
  let { query: b, mode: w } = h.editor.getSnapshot();
  return ka(b, w, Ra(b, w, h.roster.jobs, h.cwdFilter), h.parseScope) !== null;
}
async function Sf(h, b, w) {
  let { editor: E, roster: v, selection: C, view: T, attach: F, storageV5: A, mountAt: L, canonicalLauncherCwd: J } = h, V = E.setError;
  if (F.getSnapshot().attachingJobId !== null || F.isPromoting(b.sessionId)) return;
  let W = T.resumePromoteSessionId;
  if (W !== null && b.sessionId !== W && F.isPromoting(W)) return;
  F.beginPromote(b.sessionId), T.closeResumePicker(), (0, import_chunk_y53wbr8a.a)("tengu_fleetview_earlier_open", { ms_since_mount: Date.now() - L, via: (0, import_chunk_78g0060s.f)(w) });
  let D = b.sessionId.slice(0, 8), j = (ee, ce, Z) => {
    if (F.endPromote(b.sessionId), T.resumePromoteSessionId === b.sessionId) T.resumePromoteSessionId = null;
    if (w === "resume_picker") if (ee === "bad") (0, import_chunk_cqa9hrgx.m)("fleet_view_resume_picker", ce);
    else (0, import_chunk_cqa9hrgx.l)("fleet_view_resume_picker", ce);
    V(Z);
  }, q;
  try {
    if (await (0, import_chunk_95amtstn.pwn)() !== void 0) {
      j("sad", "credential_unavailable", `Run claude --resume ${(0, import_chunk_mzmcvr6c.ht)(b.sessionId) ?? "<session id>"} \u2014 the background service lacks this terminal's key or token`);
      return;
    }
    if ((await (0, import_chunk_p51r1nb3.Yae)(A)).some((de) => de.sessionId === b.sessionId)) {
      j("sad", "session_live_elsewhere", import_chunk_yanpyg3f.HJn);
      return;
    }
    if (v.isDeleting(D) || v.isDeletingSession(b.sessionId)) {
      j("sad", "deleting_in_flight", "This session is being removed. Reopen /resume once it finishes");
      return;
    }
    if (await (0, import_chunk_9e5mdyfk.Is)((0, import_chunk_9e5mdyfk.Bs)(D), A) !== null) {
      j("sad", "already_in_list", "This session is already in the list. Press Enter on its row");
      return;
    }
    if ((await (0, import_chunk_9e5mdyfk.qF)(void 0, A)).some((de) => de.state.sessionId === b.sessionId || de.state.resumeSessionId === b.sessionId)) {
      j("sad", "already_in_list", "This session is already in the list. Press Enter on its row");
      return;
    }
    let Z;
    try {
      Z = await Ns(b.fullPath, A);
    } catch {
      Z = { kind: "absent" };
    }
    if (Z.kind === "absent") {
      j("bad", "transcript_gone", "This session's file is no longer on disk. It may have been cleaned up");
      return;
    }
    if (Z.kind === "refused") {
      j("bad", "transcript_refused", "This conversation's file is a symbolic link or not a regular file, so it can't be opened from here \u2014 if it's a link, resume from the directory that holds the real file");
      return;
    }
    if (Z.kind === "unreadable") {
      j("sad", "transcript_unverified", "Couldn't read this session's file. Try again");
      return;
    }
    let Y = b.cwd;
    if (!lw(b.cwd) || await (0, import_chunk_w578pjby._$)(import_chunk_w578pjby.Cv, b.cwd, (0, import_chunk_w578pjby.sy)()) !== void 0) Y = J;
    else try {
      if (!(await (0, import_promises3.stat)(b.cwd)).isDirectory()) Y = J;
    } catch {
      Y = J;
    }
    if (Y !== b.cwd && w === "resume_picker") (0, import_chunk_cqa9hrgx.l)("fleet_view_resume_picker", "cwd_fallback");
    ({ state: q } = await (0, import_chunk_95amtstn.CYn)(b.sessionId, { intent: b.title, name: b.title, cwd: Y, inFlight: { tasks: 0, queued: 0, kinds: [] }, linkScanPath: b.fullPath }, A));
  } catch (ee) {
    if ((0, import_chunk_jv7av99m.fn)(ee)) (0, import_chunk_w578pjby.t)(`[fleetview] past-session seed write failed: ${(0, import_chunk_jv7av99m.d)(ee)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(ee);
    j("bad", "promote_failed", `Couldn't open ${b.title}: ${(0, import_chunk_jv7av99m.d)(ee)}`);
    return;
  }
  let se = { id: D, state: q, activity: On(q) };
  C.followId = D, v.updatePendings((ee) => [...ee, se]), _a(h, se);
}
function _a(h, b, w) {
  let { editor: E, roster: v, view: C, attach: T, deleteConfirm: F, storageV5: A, onAction: L, pendings: J } = h, V = E.setError, W = performance.now();
  if (!b || T.getSnapshot().attachingJobId !== null) return;
  let D = C.resumePromoteSessionId;
  if (D !== null && b.state.sessionId !== D && T.isPromoting(D)) return;
  if (C.closeResumePicker(), J.some((Y) => Y.id === b.id)) return;
  if (b.state.backend === "remote") {
    if (b.id.startsWith("remote-pending-")) {
      V(en), (0, import_chunk_cqa9hrgx.u)("fleet_view_open");
      return;
    }
    L({ type: "open", job: b, ...gf(h) && { keepQuery: true }, respawnResult: { ok: true, short: b.id, state: b.state }, gestureT0: W });
    return;
  }
  if (v.terminalHolderOf(b) !== void 0) {
    V(import_chunk_yanpyg3f.HJn), (0, import_chunk_cqa9hrgx.u)("fleet_view_open");
    return;
  }
  if (b.state.deadEpochReapedAt !== void 0 && (0, import_chunk_9e5mdyfk.Wd)(b.state) && !(0, import_chunk_9e5mdyfk.rv)(b.state) && T.forkRefusedJobId !== b.id) {
    if (T.deadEpochGoneJobId === b.id) {
      V(mf), (0, import_chunk_cqa9hrgx.u)("fleet_view_open");
      return;
    }
    let Y = T.deadEpochOfferedJobId === b.id && Ca(E, C, F, Ol);
    if (Y && T.deadEpochOfferAgeMs() < uw) {
      T.deadEpochOfferedJobId = b.id;
      return;
    }
    if (!Y) {
      T.forkRefusedJobId = null, T.restartOfferedJobId = null, T.deadEpochOfferedJobId = b.id, V(Ol), (0, import_chunk_y53wbr8a.a)("tengu_fleetview_dead_epoch_offer", {}), (0, import_chunk_cqa9hrgx.u)("fleet_view_open");
      return;
    }
    T.deadEpochOfferedJobId = null;
  } else if (T.deadEpochOfferedJobId === b.id) T.deadEpochOfferedJobId = null;
  let j = w !== "esc" && Ca(E, C, F, _l) && T.forkRefusedJobId === b.id;
  if (j) T.forkRefusedJobId = null;
  let q = w !== "esc" && (Ca(E, C, F, xl) || Ca(E, C, F, Il)) && T.restartOfferedJobId === b.id && !(0, import_chunk_9e5mdyfk.rv)(b.state), se = T.restartOfferedJobId === b.id;
  if (se) T.restartOfferedJobId = null;
  let ee = (0, import_crypto2.randomUUID)();
  (0, import_chunk_4we2aqs8.dIt)(ee, "fleet", A).catch(() => {
  }), T.arm(b.id, ee), V(null);
  let ce = T.nextRespawnAttempt(), Z = T.getWarming(b.id);
  if (!Z) Z = dr(b.id, { knownState: b.state, ...j && { forceRefusalRetry: true }, ...q && { forceUnresponsive: true, replyOnResume: b.state.tempo === "active" } }, A), T.trackWarming(b.id, Z);
  Z.then((Y) => {
    if (!T.isCurrentRespawnAttempt(ce)) {
      (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
      });
      return;
    }
    if (T.disarm(), !Y.ok && Y.errorCode === "kill_unconfirmed") {
      (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "restart_stop_unconfirmed"), (0, import_chunk_w578pjby.t)(`[FV-attach] confirmed restart of ${b.id} could not stop the worker: ${Y.error}`, { level: "warn" }), (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
      }), T.restartOfferedJobId = b.id, V(Il);
      return;
    }
    if (Y.ok || Y.alive) L({ type: "open", job: b, ...gf(h) && { keepQuery: true }, ...se && { afterNoResponse: true }, respawnResult: Y, gestureT0: W, gestureId: ee });
    else if (Y.errorCode === "fork_transcript_never_materialized") (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
    }), (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "fork_transcript_never_materialized"), T.forkRefusedJobId = b.id, V(_l);
    else if (Y.errorCode === "resume_session_live_elsewhere") (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
    }), (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "resume_session_live_elsewhere"), V(Y.error);
    else if (Y.errorCode === "sign_in_unknown") (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
    }), (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "sign_in_unknown"), V(Y.error);
    else if (Y.errorCode === "dead_epoch_transcript_gone") (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
    }), (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "dead_epoch_transcript_gone"), T.deadEpochGoneJobId = b.id, V(mf);
    else if (Y.errorCode === "job_removed") (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
    }), (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "job_removed"), V(Y.error);
    else if (Y.errorCode === "gateway_lost") (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
    }), (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "gateway_lost"), V(Y.error);
    else (0, import_chunk_cqa9hrgx.m)("fleet_view_open", "respawn_failed"), V(Y.error), (0, import_chunk_4we2aqs8.D2)(ee, A).catch(() => {
    });
  });
}
function yf(h, b) {
  let { editor: w, roster: E, attach: v, storageV5: C } = h, T = w.setError, F = v.getSnapshot();
  if (F.newSessionOpening || F.attachingJobId !== null) return;
  let A = v.beginNewSession();
  T(null);
  let L = () => v.isCurrentNewSessionAttempt(A);
  (0, import_chunk_95amtstn.mve)([...(0, import_chunk_95amtstn.nUo)()], void 0, "shell", b, void 0, void 0, void 0, C).then(async (J) => {
    try {
      if (!J.ok) {
        if (!L()) return;
        v.endNewSession(), (0, import_chunk_cqa9hrgx.m)("fleet_view_new_session", J.reason ?? "spawn_failed"), T(J.error);
        return;
      }
      E.reload();
      let V = Date.now() + cw, W = E.jobs?.find((D) => D.id === J.short);
      while (!W && Date.now() < V && L()) await (0, import_chunk_5appeerh.K)(100), W = E.jobs?.find((D) => D.id === J.short);
      if (!L()) return;
      if (v.endNewSession(), !W) {
        (0, import_chunk_cqa9hrgx.l)("fleet_view_new_session", "row_pending"), T("Still starting. Open the new session once it appears");
        return;
      }
      (0, import_chunk_cqa9hrgx.u)("fleet_view_new_session"), _a(h, W);
    } catch (V) {
      if (!L()) return;
      v.endNewSession(), (0, import_chunk_k449cc64.i)(V), (0, import_chunk_cqa9hrgx.m)("fleet_view_new_session", "threw"), T(`Couldn't start a new session: ${(0, import_chunk_jv7av99m.d)(V)}`);
    }
  }, (J) => {
    if (!L()) return;
    v.endNewSession(), (0, import_chunk_k449cc64.i)(J), (0, import_chunk_cqa9hrgx.m)("fleet_view_new_session", "threw"), T(`Couldn't start a new session: ${(0, import_chunk_jv7av99m.d)(J)}`);
  });
}
function Gi(h, b, w) {
  (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.f)(h), source: (0, import_chunk_78g0060s.S)("fleet"), jobSessionId: (0, import_chunk_49zxha55.Ce)(b.sessionId), jobState: (0, import_chunk_axqdjrej.Qse)(b.state), tempo: (0, import_chunk_78g0060s.f)(b.tempo), ...w });
}
class Wi extends Error {
  constructor(h) {
    super(h);
    this.name = "FleetActionUnconfirmedError";
  }
}
function Ef(h, b, w, E, v, C) {
  return [{ key: "x", label: "stop", bands: ["active", "blocked"], run: async (T) => {
    b(T.id);
    let F = (/* @__PURE__ */ new Date()).toISOString(), A = w((L) => L.map((J) => J.id === T.id && !(0, import_chunk_9e5mdyfk.Wd)(J.state) ? { ...J, state: { ...J.state, state: "stopped", detail: "stopped", tempo: "idle", updatedAt: F, firstTerminalAt: J.state.firstTerminalAt ?? F, lastTerminalAt: F }, activity: "stopped" } : J), void 0, T.id);
    try {
      let L = await (0, import_chunk_4we2aqs8.kZe)(T.id, T.state, void 0, C);
      if (!L.confirmed) throw (0, import_chunk_cqa9hrgx.m)("fleet_view_stop_job", "kill_unconfirmed"), new Wi(L.error ?? "session may still be running");
      (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.S)("stop"), source: (0, import_chunk_78g0060s.S)("fleet"), jobSessionId: (0, import_chunk_49zxha55.Ce)(T.state.sessionId) }), (0, import_chunk_cqa9hrgx.u)("fleet_view_stop_job");
      let J = (0, import_chunk_9e5mdyfk.Bs)(T.id);
      await (0, import_chunk_q4jxz8c5.hwn)(J, void 0);
      let V = await (0, import_chunk_9e5mdyfk.Is)(J, C);
      if (V && !(0, import_chunk_9e5mdyfk.Wd)(V)) await (0, import_chunk_9e5mdyfk.Hf)(J, { ...V, state: "stopped", detail: "stopped", tempo: "idle", updatedAt: F, firstTerminalAt: V.firstTerminalAt ?? F }, C);
    } finally {
      A?.(), h();
    }
  } }, { key: "x", label: "remove", bands: ["completed"], run: async (T, { bulk: F }) => {
    let A = v(T.id), L = { ...A?.discardOffer !== void 0 && { discardOffer: A.discardOffer }, ...A?.forceRemoveOffer !== void 0 && { forceRemoveOffer: A.forceRemoveOffer } }, J = F ? void 0 : A?.discardOffer, V = F ? void 0 : A?.forceRemoveOffer;
    if (!F) E(T.id, null);
    let W = w((j) => j.filter((q) => q.id !== T.id), T.id), D;
    try {
      if (D = await (0, import_chunk_4we2aqs8.hve)(T.id, { force: true, ...J !== void 0 && { discardUnpushed: J.pin }, ...V !== void 0 && { forceRemoveWorktree: V.worktreeDigest } }, C), !D.removed && !D.keptWorktree) throw (0, import_chunk_cqa9hrgx.m)("fleet_view_delete_job", D.errorCode ?? "delete_unconfirmed"), E(T.id, { notice: D.error ?? "session may still be running", ...L }), new Wi(D.error ?? "session may still be running");
    } finally {
      W?.(), h();
    }
    if (!D.removed) {
      let { keptErrorSummary: j, keptUnpushed: q, discardUnpushed: se, forceRemoveWorktree: ee, forceRemoveWithheld: ce, submoduleWork: Z, connectorDownloads: Y } = D, de = D.keptWorktree ?? "", Fe = D.keptReason ?? "remove_failed";
      (0, import_chunk_cqa9hrgx.l)("fleet_view_delete_job", `worktree_kept_${Fe}`);
      let Se = (0, import_chunk_95amtstn.sUo)({ reason: Fe, errorSummary: j, unpushed: q, discardUnpushed: se, forceRemove: ee, forceRemoveWithheld: ce, submoduleWork: Z, connectorDownloads: Y }, { worktree: de, jobId: T.id });
      return E(T.id, { notice: Se.row, ...F && L, ...se !== void 0 && { discardOffer: { pin: se, worktree: de } }, ...ee !== void 0 && { forceRemoveOffer: { worktreeDigest: ee.worktreeDigest } } }), Se.footer;
    }
    if (D.leftWorktreeDir) (0, import_chunk_cqa9hrgx.l)("fleet_view_delete_job", "worktree_left_in_place");
    else if (D.forcedWorktreeRemoval) (0, import_chunk_cqa9hrgx.l)("fleet_view_delete_job", "worktree_force_removed");
    else (0, import_chunk_cqa9hrgx.u)("fleet_view_delete_job");
    if (T.state.pinned) (0, import_chunk_9e5mdyfk.Oao)(T.id, false, C).catch(() => {
    });
    if ((0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.S)("delete"), source: (0, import_chunk_78g0060s.S)("fleet"), jobSessionId: (0, import_chunk_49zxha55.Ce)(T.state.sessionId) }), D.leftWorktreeDir) return D.isLeftForMod ? `Worktree directory left at ${D.leftWorktreeDir}. ${import_chunk_bzyb60p0.len} The session was removed.` : `Worktree directory left at ${D.leftWorktreeDir} \u2014 git no longer recognized it; the session was removed`;
    if (D.forcedWorktreeRemoval) {
      let { worktree: j, keptBranch: q } = D.forcedWorktreeRemoval;
      return `Session removed and its worktree directory deleted by force: ${j}${q ? ` (branch ${q} was left in the repository)` : ""}`;
    }
    if (J !== void 0 || V !== void 0) return D.discardConfirmed && J !== void 0 ? `Session removed and its worktree deleted: ${J.worktree}` : "Session removed";
  } }];
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function Rf(h) {
  let [b, w] = (0, import_chunk_bs4h6795.y)([]);
  (0, import_chunk_bs4h6795.H)(() => {
    if ((0, import_chunk_t7fzcstv.bt)() || (0, import_chunk_865at33z.Qt)()) return;
    if (!(0, import_chunk_bzyb60p0.yNt)()) return;
    let E = false;
    return (0, import_chunk_bzyb60p0.Rts)().then(async (v) => {
      if (E || !v) return;
      let C = { type: v.url.startsWith("ws:") ? "ws-ide" : "sse-ide", url: v.url, ideName: v.name, authToken: v.authToken, ideRunningInWindows: v.ideRunningInWindows, scope: "dynamic" };
      if (await (0, import_chunk_bzyb60p0.hA)(), E || (0, import_chunk_bzyb60p0.MO)("ide", C)) return;
      let { clearServerCache: T, connectToServer: F } = require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule(), A = await F("ide", C);
      if (E) return;
      if (A.type !== "connected") T("ide", C).catch(() => {
      });
      w([A]);
    }), () => {
      E = true, (0, import_chunk_bzyb60p0.ccr)();
    };
  }, []), (0, import_chunk_snett3g5.o8n)(b, h);
}
(0, import_chunk_bs4h6795.G)();
function Ow(j) {
  return j.sessionModel;
}
function xw(q) {
  return q.sessionEffort;
}
function Pw(se) {
  return se.sessionFastMode;
}
function Nl(h) {
  let Fe = (0, import_chunk_sng02qpc.k)(35), { editor: b, layout: w, simpleView: E, dispatchDefaults: v, targetCwd: C, launcherCwd: T, canonicalLauncherCwd: F, originJobId: A, originFate: L } = h, { columns: J } = (0, import_chunk_6n6exvyx.qe)(), { compactHeader: V, simpleBuilt: W, bandCounts: D, earlierVisible: j } = w, { version: q, cwd: se } = (0, import_chunk_t4r5tv0m.KOt)(), { newSession: ee, width: ce, pathOwnRow: Z } = Ki(b, v), Y = !!se && C !== T && C !== F, de = Y ? (0, import_chunk_n2dbhmj2.os)(C) : se, Se, we;
  if (Fe[0] !== ee || Fe[1] !== Z || Fe[2] !== ce) Se = Bf(ee, ce), we = Z ? ce : ce - 3 - (0, import_chunk_mgh1y10w.oe)(Se), Fe[0] = ee, Fe[1] = Z, Fe[2] = ce, Fe[3] = Se, Fe[4] = we;
  else Se = Fe[3], we = Fe[4];
  let le = we, ie = (0, import_chunk_t4r5tv0m.lmt)(de, Math.min((0, import_chunk_mgh1y10w.oe)(de), Math.max(le, 1))), Oe = D.completed + j.length, Ae = E && Y, _t;
  if (Fe[5] !== Ae || Fe[6] !== ie) _t = ie && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: Ae ? "suggestion" : void 0, dimColor: !Ae, children: ie }), Fe[5] = Ae, Fe[6] = ie, Fe[7] = _t;
  else _t = Fe[7];
  let De = _t, mt;
  if (Fe[8] !== J || Fe[9] !== V) mt = !V && J >= 70 && (0, import_chunk_a46xeenj.e)(import_chunk_ra3kqnyn.l_e, {}), Fe[8] = J, Fe[9] = V, Fe[10] = mt;
  else mt = Fe[10];
  let to;
  if (Fe[11] !== V || Fe[12] !== De || Fe[13] !== Se || Fe[14] !== Z || Fe[15] !== E || Fe[16] !== q) to = !V && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: E ? "truncate" : "wrap", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Claude Code" }), " ", (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["v", q] })] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: [Se, !Z && De && " \xB7 ", !Z && De] }), Z && De && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: De })] }), Fe[11] = V, Fe[12] = De, Fe[13] = Se, Fe[14] = Z, Fe[15] = E, Fe[16] = q, Fe[17] = to;
  else to = Fe[17];
  let Ot;
  if (Fe[18] !== D.active || Fe[19] !== D.blocked || Fe[20] !== Oe || Fe[21] !== W) Ot = W ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [W.needsCount > 0 && `${W.needsCount} needs you`, W.workingCount > 0 && `${W.workingCount} working`, W.liveCount - W.workingCount > 0 && `${W.liveCount - W.workingCount} idle`, W.runningCount === 0 && "nothing running"] }) }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [D.blocked > 0 && `${D.blocked} awaiting input`, D.active > 0 && `${D.active} working`, Oe > 0 && `${Oe} completed`, D.blocked + D.active + Oe === 0 && "nothing running"] }) }), Fe[18] = D.active, Fe[19] = D.blocked, Fe[20] = Oe, Fe[21] = W, Fe[22] = Ot;
  else Ot = Fe[22];
  let Ht;
  if (Fe[23] !== to || Fe[24] !== Ot) Ht = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [to, Ot] }), Fe[23] = to, Fe[24] = Ot, Fe[25] = Ht;
  else Ht = Fe[25];
  let ke;
  if (Fe[26] !== mt || Fe[27] !== Ht) ke = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { gap: 2, marginBottom: 1, children: [mt, Ht] }), Fe[26] = mt, Fe[27] = Ht, Fe[28] = ke;
  else ke = Fe[28];
  let Wt;
  if (Fe[29] !== L || Fe[30] !== A) Wt = A !== void 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginBottom: 1, paddingX: 2, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Your session moved to the background \xB7 enter opens it \xB7 esc returns to it \xB7 ctrl+c twice exits", L === "ends" && " and ends it", L === "stays" && " and it keeps running"] }) }), Fe[29] = L, Fe[30] = A, Fe[31] = Wt;
  else Wt = Fe[31];
  let rt;
  if (Fe[32] !== ke || Fe[33] !== Wt) rt = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [ke, Wt] }), Fe[32] = ke, Fe[33] = Wt, Fe[34] = rt;
  else rt = Fe[34];
  return rt;
}
function Ki(h, b) {
  let T = (0, import_chunk_sng02qpc.k)(12), { columns: w } = (0, import_chunk_6n6exvyx.qe)(), E = (0, import_chunk_3dxkbe9d.$e)(h, Ow), v = (0, import_chunk_3dxkbe9d.$e)(h, xw), C = (0, import_chunk_3dxkbe9d.$e)(h, Pw), F;
  if (T[0] !== b || T[1] !== v || T[2] !== C || T[3] !== E) F = Gn({ launch: b, window: { model: E, effort: v, fastMode: C } }), T[0] = b, T[1] = v, T[2] = C, T[3] = E, T[4] = F;
  else F = T[4];
  let A = F, L = w - (w >= 70 ? 11 : 0), J;
  if (T[5] !== A || T[6] !== L) {
    let V = (0, import_chunk_t4r5tv0m.KOt)().cwd;
    J = !!V && (0, import_chunk_mgh1y10w.oe)(Dl(A)) + 3 + (0, import_chunk_mgh1y10w.oe)(V) > L;
    T[5] = A, T[6] = L, T[7] = J;
  } else J = T[7];
  let W = J, D;
  if (T[8] !== A || T[9] !== W || T[10] !== L) D = { newSession: A, width: L, pathOwnRow: W }, T[8] = A, T[9] = W, T[10] = L, T[11] = D;
  else D = T[11];
  return D;
}
function Dl(h) {
  let b = h.effort ? ` \xB7 ${h.effort} effort` : "";
  return `New sessions: ${h.model}${b}${h.ultracode ? " \xB7 ultracode" : ""}`;
}
function Bf(h, b) {
  let w = h.effort ? ` \xB7 ${h.effort} effort` : "", E = h.ultracode ? " \xB7 ultracode" : "";
  return [Dl(h), h.model + w + E, h.model + E].find((C) => (0, import_chunk_mgh1y10w.oe)(C) <= b) ?? (0, import_chunk_f64qna2j.Tt)(h.model, Math.max(b, 1));
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function Gw(Lt) {
  return !xn(Lt);
}
function Kw(Ne) {
  return Ne.color !== void 0;
}
var Oa = (0, import_chunk_mgh1y10w.oe)(" (reserved name)");
function gn(h, b, w, E = false) {
  if (E && h) {
    let L = (0, import_chunk_f64qna2j.Y1)(h, Math.max(w - 1, 1));
    return (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { inverse: true, dangerouslyAllowHiddenCharacters: true, children: L }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { inverse: true, children: " " })] });
  }
  let { length: v, length: C } = h;
  for (let { segment: L, index: J } of (0, import_chunk_em52jhgp.ul)().segment(h)) if (J + L.length > b) {
    v = J, C = J + L.length;
    break;
  }
  let T = h.slice(v, C) || " ", F = h.slice(C), A = (0, import_chunk_f64qna2j.Y1)(h.slice(0, v), w - (0, import_chunk_mgh1y10w.oe)(T) - (F ? 1 : 0));
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dangerouslyAllowHiddenCharacters: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: A }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { inverse: true, children: T }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: F })] });
}
function Da(h) {
  let Ae = (0, import_chunk_sng02qpc.k)(73), { job: b, isFocused: w, focusFg: E, isOrigin: v, logTail: C, status: T, cols: F, showVerb: A, loopKickCount: L, age: J, childRows: V, renaming: W, groupEditing: D, deleteArmed: j, deleteRefused: q, attaching: se, heldInTerminal: ee } = h, ce = (0, import_chunk_9e5mdyfk.Hk)(b.state.state), Z = ce && b.state.tempo !== "active" ? q : void 0, Y = F.detail - (0, import_chunk_mgh1y10w.oe)("group: ") - Oa >= 24, de = ur(b.activity, b.state.tempo, T, ce), { color: Fe, dim: Se } = de, we = T === "busy" ? Fe : Sl(Fe, V), le = we === Fe && Se, ie = se === "armed" ? void 0 : j?.justKilled ? import_chunk_xcgcdx61.FMo : se ? void 0 : Ur(b.state, ce, T), Oe = b.state.output?.result, _t;
  if (Ae[0] !== Oe || Ae[1] !== b.state) _t = Oe && !vo(b.state) ? il(Oe) : null, Ae[0] = Oe, Ae[1] = b.state, Ae[2] = _t;
  else _t = Ae[2];
  let De = _t, mt = De ? void 0 : Oe, to = ce !== "success" ? C || void 0 : void 0, Ot = v && w ? b.state.tempo === "blocked" ? b.state.needs : ce === "failure" ? b.state.detail : void 0 : void 0, Ht;
  if (Ae[3] !== b.state.detail) Ht = Di(b.state.detail), Ae[3] = b.state.detail, Ae[4] = Ht;
  else Ht = Ae[4];
  let ke = Ht, Wt = v && b.state.tempo === "blocked" && b.state.needs === import_chunk_9e5mdyfk.jv && b.state.detail && !ke ? b.state.detail : void 0, rt = v && w ? Ot ? Ot === import_chunk_9e5mdyfk.jv ? Wt ? Io(b.state, Wt) : (0, import_path7.basename)(b.state.cwd) || b.state.cwd : Io(b.state, Ot) : Io(b.state, b.state.detail ?? "") : ce === "success" ? Io(b.state, mt || b.state.detail) : Io(b.state, Wt || !v && w && b.state.tempo === "blocked" && b.state.needs === import_chunk_9e5mdyfk.jv && "space to send it a prompt" || b.state.tempo === "blocked" && b.state.needs || !ke && Yd(b.state) || "") || b.state.tempo === "active" && cn(to ?? "") || cn(b.state.detail), Ue;
  if (Ae[5] !== v || Ae[6] !== b.state) Ue = tn(b.state, v), Ae[5] = v, Ae[6] = b.state, Ae[7] = Ue;
  else Ue = Ae[7];
  let wt = Ue, qt = (0, import_chunk_xfj2cwfv.zj)(b.state.color) ? import_chunk_xfj2cwfv.q0[b.state.color] : void 0, Qe = ya(wt, !!b.state.name), Yt = V.filter(xn), ct = V.filter(Gw), je = ct.find(Kw) ?? ct.at(-1) ?? Yt.at(-1), Kt = w ? "selected, " : "", Zt = se ? `${Kt}opening:` : j?.justKilled ? `${Kt}stopped:` : we !== Fe ? `${Kt}needs attention:` : Kr(b.activity, b.state.tempo, T, ce, w);
  const kt = import_chunk_8bkqeb5d.g, Ut = 1, Ie = F.label + 2, yt = !w && !v, Ye = le || we === void 0 && !w;
  let st;
  if (Ae[8] !== ie) st = ie ?? (0, import_chunk_a46xeenj.e)(cr, {}), Ae[8] = ie, Ae[9] = st;
  else st = Ae[9];
  let Ze;
  if (Ae[10] !== we || Ae[11] !== Zt || Ae[12] !== Ye || Ae[13] !== st) Ze = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": Zt, color: we, dimColor: Ye, children: st }), Ae[10] = we, Ae[11] = Zt, Ae[12] = Ye, Ae[13] = st, Ae[14] = Ze;
  else Ze = Ae[14];
  let St;
  if (Ae[15] !== F.label || Ae[16] !== De || Ae[17] !== w || Ae[18] !== v || Ae[19] !== wt || Ae[20] !== W || Ae[21] !== Qe || Ae[22] !== qt) St = qt && !W ? (0, import_chunk_a46xeenj.e)(import_chunk_1tbk901f.cE, { color: qt, bold: w, children: De ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: De, children: wt }) : wt }) : W ? gn(W.draft, W.cursor, F.label) : Qe ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: !w && !v, children: Qe.display.slice(0, Qe.newLen) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Qe.display.slice(Qe.newLen) })] }) : De ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: De, children: wt }) : wt, Ae[15] = F.label, Ae[16] = De, Ae[17] = w, Ae[18] = v, Ae[19] = wt, Ae[20] = W, Ae[21] = Qe, Ae[22] = qt, Ae[23] = St;
  else St = Ae[23];
  let pt;
  if (Ae[24] !== v || Ae[25] !== St) pt = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: v, children: St }), Ae[24] = v, Ae[25] = St, Ae[26] = pt;
  else pt = Ae[26];
  let at;
  if (Ae[27] !== E || Ae[28] !== pt || Ae[29] !== yt || Ae[30] !== Ze) at = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: E, dimColor: yt, wrap: "truncate", children: [Ze, " ", pt] }), Ae[27] = E, Ae[28] = pt, Ae[29] = yt, Ae[30] = Ze, Ae[31] = at;
  else at = Ae[31];
  let Le;
  if (Ae[32] !== at || Ae[33] !== Ie) Le = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: Ie, flexShrink: 0, children: at }), Ae[32] = at, Ae[33] = Ie, Ae[34] = Le;
  else Le = Ae[34];
  let $t;
  if (Ae[35] !== se || Ae[36] !== F.detail || Ae[37] !== j || Ae[38] !== Z || Ae[39] !== D || Ae[40] !== Y || Ae[41] !== ee || Ae[42] !== b.state.backend || Ae[43] !== rt || Ae[44] !== A || Ae[45] !== de) $t = D ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "group: " }), gn(D.draft, D.cursor, Math.max(F.detail - (0, import_chunk_mgh1y10w.oe)("group: ") - (Y ? Oa : 0), 8), D.selected), D.reserved ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: " (reserved name)" }) : !Y ? null : D.isNew ? (0, import_chunk_a46xeenj.e)(import_chunk_fv4zcby7.hs, { children: "new group" }) : D.ungroup ? (0, import_chunk_a46xeenj.e)(import_chunk_fv4zcby7.hs, { children: "ungroup" }) : D.addTo ? (0, import_chunk_a46xeenj.o)(import_chunk_fv4zcby7.hs, { children: ["add to ", D.addTo] }) : null] }) : se === "armed" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: "opening\u2026 \xB7 esc to cancel" }) : j ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: j.ungroup ? "warning" : "error", wrap: "truncate", children: j.ungroup ? "ctrl+x again to ungroup" : j.justKilled ? `stopped \xB7 ctrl+x again to ${_o(b.state.backend)}` : `ctrl+x again to ${_o(b.state.backend)}` }) : Z ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: "not removed" }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", Z] })] }) : se ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: "opening\u2026" }) : ee ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "suggestion", children: "Open in a terminal" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "continue it there" })] }) }) : A ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: de.color, dimColor: de.dim, children: de.word }), rt && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: rt })] }) }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: rt }), Ae[35] = se, Ae[36] = F.detail, Ae[37] = j, Ae[38] = Z, Ae[39] = D, Ae[40] = Y, Ae[41] = ee, Ae[42] = b.state.backend, Ae[43] = rt, Ae[44] = A, Ae[45] = de, Ae[46] = $t;
  else $t = Ae[46];
  let Gt;
  if (Ae[47] !== se || Ae[48] !== j || Ae[49] !== Z || Ae[50] !== D || Ae[51] !== ee || Ae[52] !== L) Gt = L && !D && !j && !Z && !se && !ee ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, paddingLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["\xD7", L] }) }) : null, Ae[47] = se, Ae[48] = j, Ae[49] = Z, Ae[50] = D, Ae[51] = ee, Ae[52] = L, Ae[53] = Gt;
  else Gt = Ae[53];
  let Rt;
  if (Ae[54] !== $t || Ae[55] !== Gt) Rt = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexGrow: 1, width: 0, paddingLeft: 2, children: [$t, Gt] }), Ae[54] = $t, Ae[55] = Gt, Ae[56] = Rt;
  else Rt = Ae[56];
  const He = F.artifact > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: F.artifact + 2, flexShrink: 0, paddingLeft: 2, justifyContent: "flex-end", children: ct.length > 1 ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: je?.color, dimColor: !w || !je?.color, children: [ct.length, " PRs"] }) : ct.length === 1 ? je?.prNumber !== void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_ggqyvxbh.yIe, { number: je.prNumber, url: je.row.href, kind: Bi(je.row), color: je.color, dimColor: !w, underline: false, hidePrefix: true }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: E, dimColor: !w, children: "PR" }) : je ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: je.row.href, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "claude", children: [Yt.length > 1 && `${Yt.length} `, import_chunk_xcgcdx61.Wh] }) }) : null }) : null;
  let ft;
  if (Ae[57] !== F.kind || Ae[58] !== w || Ae[59] !== b.state) ft = F.kind > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: F.kind + 2, flexShrink: 0, paddingLeft: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: !w, children: lr(vo(b.state)) }) }) : null, Ae[57] = F.kind, Ae[58] = w, Ae[59] = b.state, Ae[60] = ft;
  else ft = Ae[60];
  const ot = F.age + 2;
  let Ft;
  if (Ae[61] !== J) Ft = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: J }), Ae[61] = J, Ae[62] = Ft;
  else Ft = Ae[62];
  let Ge;
  if (Ae[63] !== ot || Ae[64] !== Ft) Ge = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: ot, flexShrink: 0, paddingLeft: 2, justifyContent: "flex-end", children: Ft }), Ae[63] = ot, Ae[64] = Ft, Ae[65] = Ge;
  else Ge = Ae[65];
  let We;
  if (Ae[66] !== kt || Ae[67] !== Le || Ae[68] !== Rt || Ae[69] !== He || Ae[70] !== ft || Ae[71] !== Ge) We = (0, import_chunk_a46xeenj.o)(kt, { flexGrow: Ut, children: [Le, Rt, He, ft, Ge] }), Ae[66] = kt, Ae[67] = Le, Ae[68] = Rt, Ae[69] = He, Ae[70] = ft, Ae[71] = Ge, Ae[72] = We;
  else We = Ae[72];
  return We;
}
var br = 4;
function Na(h) {
  let Z = (0, import_chunk_sng02qpc.k)(29), { icon: b, iconColor: w, iconDim: E, label: v, isOrigin: C, isFocused: T, declareCursor: F, focusFg: A, age: L, tokens: J, state: V, extra: W, expanded: D, refusal: j, renaming: q, renameWidth: se, srLabel: ee } = h;
  const ce = E || w === void 0 && !T;
  let Y;
  if (Z[0] !== b || Z[1] !== w || Z[2] !== ee || Z[3] !== ce) Y = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { "aria-label": ee, color: w, dimColor: ce, children: [b, " "] }), Z[0] = b, Z[1] = w, Z[2] = ee, Z[3] = ce, Z[4] = Y;
  else Y = Z[4];
  let de;
  if (Z[5] !== A || Z[6] !== T || Z[7] !== C || Z[8] !== v || Z[9] !== se || Z[10] !== q) de = q ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: gn(q.draft, q.cursor, se) }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: A, dimColor: !T && !C, bold: C, wrap: "truncate", children: v }), Z[5] = A, Z[6] = T, Z[7] = C, Z[8] = v, Z[9] = se, Z[10] = q, Z[11] = de;
  else de = Z[11];
  let Fe;
  if (Z[12] !== Y || Z[13] !== de) Fe = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [Y, de] }), Z[12] = Y, Z[13] = de, Z[14] = Fe;
  else Fe = Z[14];
  let Se;
  if (Z[15] !== F || Z[16] !== T || Z[17] !== Fe) Se = (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { isFocused: T, styled: false, declareCursor: F, children: Fe }), Z[15] = F, Z[16] = T, Z[17] = Fe, Z[18] = Se;
  else Se = Z[18];
  let we;
  if (Z[19] !== L || Z[20] !== D || Z[21] !== W || Z[22] !== j || Z[23] !== V || Z[24] !== J) we = (D || j) && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: br, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [L, J, j ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", wrap: "truncate", children: j }) : W && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: V.color, dimColor: V.dim, wrap: "truncate", children: W })] }) }) }), Z[19] = L, Z[20] = D, Z[21] = W, Z[22] = j, Z[23] = V, Z[24] = J, Z[25] = we;
  else we = Z[25];
  let le;
  if (Z[26] !== Se || Z[27] !== we) le = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [Se, we] }), Z[26] = Se, Z[27] = we, Z[28] = le;
  else le = Z[28];
  return le;
}
function iy($u) {
  return $u.query;
}
function ay(qu) {
  return qu.loading;
}
function dy() {
  return false;
}
function ly() {
}
function uy(Yu) {
  return Yu.kind === "job";
}
function iu(h) {
  let et = (0, import_chunk_sng02qpc.k)(118), { owners: b, layout: w, scrollRef: E, header: v, renameInput: C, groupInput: T, initialJobId: F, cwdFilter: A, simpleView: L, endsWithOlderSessionsLine: J, hasCredentials: V, mountAt: W, actions: D } = h, { roster: j, selection: q, view: se, attach: ee, editor: ce, deleteConfirm: Z, earlier: Y } = b, { columns: de, rows: Fe } = (0, import_chunk_6n6exvyx.qe)(), { focusedIdx: Se, hoverFocusIdx: we } = (0, import_chunk_3dxkbe9d.$e)(q), { groupMode: le, groupEdit: ie, groupPickIdx: Oe, groupPristine: Ae, renaming: _t, previewOpen: De, helpOpen: mt, resumePicker: to, settingPicker: Ot } = (0, import_chunk_3dxkbe9d.$e)(se), { attachingJobId: Ht, warmingJobIds: ke, newSessionOpening: Wt } = (0, import_chunk_3dxkbe9d.$e)(ee), { prStatuses: rt, loopKicks: Ue, logTails: wt, deleteRefusals: qt } = (0, import_chunk_3dxkbe9d.$e)(j), Qe = (0, import_chunk_3dxkbe9d.$e)(ce, iy), { pending: Yt } = (0, import_chunk_3dxkbe9d.$e)(Z), ct = (0, import_chunk_3dxkbe9d.$e)(Y, ay), { rows: je, collapsed: Kt, filtered: Zt, byState: kt, byGroup: Ut, isOnboarding: Ie, hasComposedDispatch: yt, dispatchTargetGroup: Ye, hasMultipleOrigins: st, focusedGroup: Ze, groupCounts: St, earlierVisible: pt, simpleBuilt: at, cols: Le, ageNow: $t, loopJobIds: Gt, focusIsFromHover: Rt, queryIsFilter: He } = w, { draft: ft, cursor: ot } = C, { draft: Ft, cursor: Ge, suggestions: We, reserved: Lt, isNew: Ne, matchesExisting: lo, panelOpen: At } = T, { toggleCollapse: Je, openOrRespawn: io, openEarlier: uo, openNewSessionRow: Jt } = D, xt = _t?.jobId ?? null, co;
  if (et[0] !== j) co = (Eo) => j.liveStatus(Eo), et[0] = j, et[1] = co;
  else co = et[1];
  let Pe = co, lt = ce.setError, gt;
  if (et[2] !== le) gt = (Dt) => Pn(le, Dt), et[2] = le, et[3] = gt;
  else gt = et[3];
  let eo = gt, So;
  if (et[4] !== le) So = (ao) => `header:${le}:${ao}`, et[4] = le, et[5] = So;
  else So = et[5];
  let wo = So, no = (0, import_chunk_bs4h6795.I)(null), ko = At || to !== null || Ot !== null, an = Zt.length === 0 && !!Qe && He && (L || pt.length === 0), $o;
  if (et[6] !== de || et[7] !== Qe) $o = (0, import_chunk_f64qna2j.Us)((0, import_chunk_7cfjrnwy.Wr)(Qe).replace(/^n:/i, ""), Math.max(de - 24, 8)), et[6] = de, et[7] = Qe, et[8] = $o;
  else $o = et[8];
  let qo = $o;
  (0, import_chunk_bs4h6795.I)(null);
  let Bo = dy, Yo = (0, import_chunk_bs4h6795.I)(null), me;
  if (et[9] !== We) me = We.join(`
`), et[9] = We, et[10] = me;
  else me = et[10];
  let ue = me, ze;
  if (et[11] !== Rt || et[12] !== Se || et[13] !== je || et[14] !== E || et[15] !== q) ze = () => {
    let Xt = q.takeRevealAtTop(Se);
    if (!no.current || Rt) {
      return;
    }
    if (Se === 0) {
      E.current?.scrollTo(0);
      return;
    }
    if (Bo()) {
      return;
    }
    let fo = je[Se]?.kind === "header" ? -1 : 0;
    E.current?.scrollToElement(no.current, fo, { block: Xt ? "start" : "nearest" });
  }, et[11] = Rt, et[12] = Se, et[13] = je, et[14] = E, et[15] = q, et[16] = ze;
  else ze = et[16];
  let To;
  if (et[17] !== Rt || et[18] !== Se || et[19] !== Fe) To = [Se, Rt, Fe], et[17] = Rt, et[18] = Se, et[19] = Fe, et[20] = To;
  else To = et[20];
  (0, import_chunk_bs4h6795.It)(ze, To);
  let xo;
  if (et[21] !== J) xo = [J], et[21] = J, et[22] = xo;
  else xo = et[22];
  (0, import_chunk_bs4h6795.It)(ly, xo);
  let Do = (0, import_chunk_bs4h6795.I)(0), zo;
  if (et[23] !== mt || et[24] !== E) zo = () => {
    if (!mt) Do.current = E.current?.getViewportHeight() ?? 0;
  }, et[23] = mt, et[24] = E, et[25] = zo;
  else zo = et[25];
  (0, import_chunk_bs4h6795.It)(zo);
  let bo;
  if (et[26] !== mt || et[27] !== E) bo = () => {
    let Fo = E.current;
    let ms = no.current?.yogaNode?.getComputedTop();
    if (!mt || !Fo || !no.current || ms === void 0) {
      return;
    }
    let Rn = ms - Fo.getScrollTop();
    if (Rn >= 0 && Rn < Do.current) Fo.scrollToElement(no.current, 0, { block: "nearest" });
  }, et[26] = mt, et[27] = E, et[28] = bo;
  else bo = et[28];
  let kr;
  if (et[29] !== mt) kr = [mt], et[29] = mt, et[30] = kr;
  else kr = et[30];
  (0, import_chunk_bs4h6795.It)(bo, kr);
  let gi;
  if (et[31] !== At || et[32] !== E) gi = () => {
    if (At && Yo.current) E.current?.scrollToElement(Yo.current, 0, { block: "nearest" });
  }, et[31] = At, et[32] = E, et[33] = gi;
  else gi = et[33];
  let ud;
  if (et[34] !== At || et[35] !== Oe || et[36] !== ue) ud = [At, ue, Oe], et[34] = At, et[35] = Oe, et[36] = ue, et[37] = ud;
  else ud = et[37];
  (0, import_chunk_bs4h6795.It)(gi, ud);
  let gs;
  if (et[38] !== Le || et[39] !== At || et[40] !== Oe || et[41] !== We) gs = At ? (() => {
    let Zn = Math.max(0, Math.min(Oe - 1, We.length - 4));
    let bs = We.slice(Zn, Zn + 4);
    let er = We.length - Zn - bs.length;
    let Ro = Le.label + 4 + 7;
    return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: Yo, flexDirection: "column", paddingLeft: Ro, children: [(0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "above", count: Zn }), bs.map((ws, Cr) => (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { isFocused: Zn + Cr === Oe, declareCursor: false, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": Zn + Cr === Oe ? `selected, ${ws}` : void 0, children: ws }) }, ws)), (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "below", count: er })] });
  })() : null, et[38] = Le, et[39] = At, et[40] = Oe, et[41] = We, et[42] = gs;
  else gs = et[42];
  let Ss = gs, hi;
  if (et[43] !== $t || et[44] !== Ht || et[45] !== Ut || et[46] !== kt || et[47] !== eo || et[48] !== Kt || et[49] !== Le || et[50] !== de || et[51] !== A || et[52] !== qt || et[53] !== Ye || et[54] !== ct || et[55] !== pt || et[56] !== Ze || et[57] !== Se || et[58] !== St || et[59] !== Ge || et[60] !== Ft || et[61] !== Ne || et[62] !== lo || et[63] !== Lt || et[64] !== ie || et[65] !== Oe || et[66] !== Ae || et[67] !== Ss || et[68] !== We || et[69] !== yt || et[70] !== V || et[71] !== st || et[72] !== wo || et[73] !== we || et[74] !== F || et[75] !== Ie || et[76] !== ko || et[77] !== Pe || et[78] !== wt || et[79] !== Gt || et[80] !== Ue || et[81] !== W || et[82] !== Wt || et[83] !== uo || et[84] !== Jt || et[85] !== io || et[86] !== Yt || et[87] !== rt || et[88] !== De || et[89] !== Qe || et[90] !== He || et[91] !== ot || et[92] !== ft || et[93] !== xt || et[94] !== j || et[95] !== je || et[96] !== q || et[97] !== lt || et[98] !== at || et[99] !== L || et[100] !== Je || et[101] !== ke) hi = je.map((Pt, dn) => {
    let No = dn === Se;
    let cd = Ie && Pt.kind === "header";
    let Vn = Pt.kind === "header" ? yt ? Pt.group === Ye : No && !cd : !yt && No;
    let bi = !yt && Vn;
    let Vo = bi && !ko ? "suggestion" : void 0;
    let vn = bi && dn === we ? import_chunk_6qkpxgbg.XS : void 0;
    let tr = { isFocused: bi, idle: ko, styled: false, declareCursor: L && !ko && !De };
    let fd = (pd) => {
      if (De && Pt.kind !== "job") {
        return;
      }
      if (dn === Se) {
        if (!pd) q.setHoverFocusIdx(null);
        return;
      }
      if (lt(null), pd) q.hoverTo(dn, Pt);
      else q.navigateTo(dn, Pt);
    };
    let jn = () => fd(true);
    let Hn = () => fd(false);
    if (Pt.kind === "header") {
      let wi = yt ? Vn : kt || !st || Pt.group === Ze;
      let Gu = St.get(Pt.group) ?? 0;
      let Ku = Kt.has(eo(Pt.group));
      let ys = Pt.group === "pinned" ? "Pinned" : Pt.group === import_chunk_9e5mdyfk.rU ? "Past" : kt ? Ho[Pt.group] : Ut ? Pt.group === import_chunk_9e5mdyfk.L6 ? "Ungrouped" : (0, import_chunk_f64qna2j.Us)(Pt.group, Math.max(de - 10, 10)) : (0, import_chunk_t4r5tv0m.lmt)(Pt.cloud ? (0, import_chunk_sjqze7qg.i7)(Ni(Pt.group)) : Ni(Pt.group), Math.max(de - 10, 10));
      return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: No ? no : void 0, marginTop: dn > 0 ? 1 : 0, flexDirection: "column", backgroundColor: vn, onMouseEnter: Qe || De || Ie ? void 0 : jn, onClick: Ie ? void 0 : () => {
        if (Hn(), q.followOrigin = Pt.group, q.followId = null, !He) Je(Pt.group);
      }, children: [(0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { ...tr, children: ie?.kind === "rename" && ie.from === Pt.group ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: [gn(Ft, Ge, Math.max(de - 4, 10), Ae), Ae ? null : Lt ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: " (reserved name)" }) : lo ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: " (name taken)" }) : Ne ? (0, import_chunk_a46xeenj.e)(import_chunk_fv4zcby7.hs, { children: "rename group" }) : null] }) : (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: !yt || wi, color: Vo, dimColor: !wi, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": Vn && !ko && !cd ? `selected, ${ys}` : void 0, children: ys }), Ku && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [" ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Gu })] }), (kt ? Pt.group === "done" : Pt.group === import_chunk_9e5mdyfk.rU) && ct && !A && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [" ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\xB7 looking for past sessions\u2026" })] })] }) }), Ie && !(Pt.group === "done" && pt.length > 0) && (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: Kd[Pt.group] }) })] }, `h:${Pt.group}`);
    }
    if (Pt.kind === "fold") {
      return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: No ? no : void 0, marginTop: L && ji(je[dn - 1], Pt) ? 1 : 0, flexDirection: "column", backgroundColor: vn, onMouseEnter: Qe || De ? void 0 : jn, onClick: () => {
        Hn(), q.expandCap(Pt.group), (0, import_chunk_y53wbr8a.a)("tengu_fleetview_fold_expand", { hidden_count: Pt.hidden, ms_since_mount: Date.now() - W, via_click: true });
      }, children: (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { ...tr, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: Vo, dimColor: !Vn, "aria-label": `${Vo ? "selected, " : ""}${Pt.hidden} more finished sessions folded:`, children: [L && "  ", Pt.group === fr ? `\u2026 show all (${Pt.hidden} more${at !== null && at.doneFoldHiddenFailed > 0 ? ` \xB7 ${at.doneFoldHiddenFailed} failed` : ""})` : `\u2026 ${Pt.hidden} more`] }) }) }, `f:${Pt.group}`);
    }
    if (Pt.kind === "newsession") {
      return (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: No ? no : void 0, backgroundColor: vn, onMouseEnter: Qe || De ? void 0 : jn, onClick: () => {
        Hn(), Jt(Pt.origin);
      }, children: [(0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { ...tr, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: Vo, "aria-label": Vo ? "selected, new session:" : void 0, children: ["+ ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { underline: No, children: "new session" })] }) }), Wt && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: ["  ", "opening\u2026 \xB7 esc to cancel"] })] }), at !== null && !at.rows.some(uy) && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { paddingLeft: br, marginTop: 1, flexDirection: "column", children: [(0, import_chunk_a46xeenj.e)(import_chunk_vx3fbgjb.Es, { subtitle: "Hand off a task and it keeps working while you do something else \u2014 even if you close this terminal.", children: "Nothing running in the background." }), !V && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "warning", wrap: "truncate", children: ["Not signed in. Press ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "l" }), " to sign in, or run ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "claude /login" }), "."] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { marginTop: 1, flexDirection: "column", children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Start one with", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "suggestion", children: "+ new session" }), " above,"] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["or run", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "suggestion", children: 'claude --bg "task"' }), " from any terminal,"] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["or ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "suggestion", children: "/fork" }), " a session you're already in."] })] })] })] }, "newsession");
    }
    if (Pt.kind === "earlier") {
      let Si = Pt.entry;
      return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: No ? no : void 0, width: "100%", flexDirection: "column", backgroundColor: vn, onMouseEnter: Qe || De ? void 0 : jn, onClick: () => {
        Hn(), uo(Si, "section");
      }, children: (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { ...tr, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexGrow: 1, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, flexShrink: 1, overflow: "hidden", children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: Vo, dimColor: !Vn, wrap: "truncate", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": Vo ? "selected," : void 0, children: "\xB7" }), " ", Si.title] }) }), Le.kind > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: Le.kind + 2, flexShrink: 0, paddingLeft: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: !Vn, children: lr(false) }) }) : null, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, marginLeft: 1, minWidth: Le.kind > 0 ? Le.age + 1 : void 0, justifyContent: "flex-end", children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_f64qna2j.Cn)(Math.max(0, ($t ?? Date.now()) - Si.modified.getTime()), { mostSignificantOnly: true }) }) })] }) }) }, `e:${Si.sessionId}`);
    }
    let Vt = Pt.job;
    if (L) {
      let yi = (0, import_chunk_9e5mdyfk.Hk)(Vt.state.state);
      let _r = Pe(Vt);
      let ln = Rl(Vt, Pe);
      let Uu = (yi === "stopped" ? "\u23F9" : yi === "failure" ? "\u2717" : null) ?? Ur(Vt.state, yi, _r);
      let Ei = Vt.id === F;
      return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: No ? no : void 0, flexDirection: "column", width: "100%", marginTop: ji(je[dn - 1], Pt) ? 1 : 0, backgroundColor: vn, onMouseEnter: Qe || De ? void 0 : jn, onClick: (Ri) => {
        if (Ri.hyperlinkUrl && !vo(Vt.state)) {
          return Ri.allowDefault();
        }
        if (Ri.isWindowActivation) {
          return Ri.dropAsStray();
        }
        Hn(), io(Vt);
      }, children: (0, import_chunk_a46xeenj.e)(Na, { icon: Uu ?? (0, import_chunk_a46xeenj.e)(cr, {}), iconColor: ln.color, iconDim: ln.dim, label: tn(Vt.state, Ei, true), renameWidth: Math.max(12, de - br), renaming: xt === Vt.id ? { draft: ft, cursor: ot } : void 0, isOrigin: Ei, isFocused: No, declareCursor: tr.declareCursor, focusFg: Vo, age: kl(Vt, Gt, Ue, $t), tokens: vl(Vt, ln), state: ln, extra: Cl(Vt, ln, _r, de), expanded: Boolean(Vt.state.pinned) || Yr(Vt.state, _r) === "needs", refusal: qt.get(Vt.id)?.notice, srLabel: Kr(Vt.activity, Vt.state.tempo, _r, yi, No, Vt.state.pinned === true) }) }, Vt.id);
    }
    let md = ie?.kind === "assign" && ie.jobId === Vt.id;
    let vs = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: No ? no : void 0, width: "100%", flexDirection: "column", backgroundColor: vn, onMouseEnter: Qe || De ? void 0 : jn, onClick: (ki) => {
      if (ki.hyperlinkUrl && !vo(Vt.state)) {
        return ki.allowDefault();
      }
      if (ki.isWindowActivation) {
        return ki.dropAsStray();
      }
      Hn(), io(Vt);
    }, children: (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.kp, { ...tr, children: (0, import_chunk_a46xeenj.e)(Da, { job: Vt, isFocused: No, focusFg: Vo, isOrigin: Vt.id === F, logTail: wt[Vt.id], cols: Le, status: Pe(Vt), heldInTerminal: j.terminalHolderOf(Vt) !== void 0, showVerb: !kt, loopKickCount: Gt.has(Vt.id) ? Ue.get(Vt.state.sessionId)?.count : void 0, age: Hr(Vt, Gt.has(Vt.id) ? Ue.get(Vt.state.sessionId)?.nextAt : void 0, $t), childRows: Vt.state.children ? Gr(Vt.state.children, rt) : [], renaming: xt === Vt.id ? { draft: ft, cursor: ot } : void 0, groupEditing: md ? { draft: Ft, cursor: Ge, selected: Ae, reserved: !Ae && Lt, isNew: !Ae && Ne && Oe < 0, ungroup: !Ae && Ft.trim() === "" && Oe < 0 && !!Vt.state.group, addTo: Ae ? void 0 : Oe >= 0 ? We[Oe] : lo ? Ft.trim() : void 0 } : void 0, deleteArmed: Yt && (Yt.id === Vt.id || Yt.id === wo(Pt.group) && (Yt.memberIds?.has(Vt.id) ?? true)) ? { justKilled: Yt.justKilled, ungroup: Ut && Yt.id === wo(Pt.group) && Pt.group !== "pinned" && Pt.group !== import_chunk_9e5mdyfk.L6 && Pt.group !== import_chunk_9e5mdyfk.rU } : void 0, deleteRefused: qt.get(Vt.id)?.notice, attaching: Ht === Vt.id ? "armed" : ke.has(Vt.id) ? "warming" : false }) }) }, Vt.id);
    return (0, import_chunk_a46xeenj.o)(import_chunk_bs4h6795.nf, { children: [vs, md && Ss] }, Vt.id);
  }), et[43] = $t, et[44] = Ht, et[45] = Ut, et[46] = kt, et[47] = eo, et[48] = Kt, et[49] = Le, et[50] = de, et[51] = A, et[52] = qt, et[53] = Ye, et[54] = ct, et[55] = pt, et[56] = Ze, et[57] = Se, et[58] = St, et[59] = Ge, et[60] = Ft, et[61] = Ne, et[62] = lo, et[63] = Lt, et[64] = ie, et[65] = Oe, et[66] = Ae, et[67] = Ss, et[68] = We, et[69] = yt, et[70] = V, et[71] = st, et[72] = wo, et[73] = we, et[74] = F, et[75] = Ie, et[76] = ko, et[77] = Pe, et[78] = wt, et[79] = Gt, et[80] = Ue, et[81] = W, et[82] = Wt, et[83] = uo, et[84] = Jt, et[85] = io, et[86] = Yt, et[87] = rt, et[88] = De, et[89] = Qe, et[90] = He, et[91] = ot, et[92] = ft, et[93] = xt, et[94] = j, et[95] = je, et[96] = q, et[97] = lt, et[98] = at, et[99] = L, et[100] = Je, et[101] = ke, et[102] = hi;
  else hi = et[102];
  let Qo;
  if (et[103] !== qo || et[104] !== an) Qo = an && true && (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: `No sessions match "${qo}"` }) }), et[103] = qo, et[104] = an, et[105] = Qo;
  else Qo = et[105];
  let Lo;
  if (et[106] !== kt || et[107] !== A || et[108] !== ct || et[109] !== je || et[110] !== L) Lo = ct && !L && !A && !je.some((Cs) => Cs.kind === "header" && Cs.group === (kt ? "done" : import_chunk_9e5mdyfk.rU)) && (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\xB7 looking for past sessions\u2026" }) }), et[106] = kt, et[107] = A, et[108] = ct, et[109] = je, et[110] = L, et[111] = Lo;
  else Lo = et[111];
  let gd;
  if (et[112] !== v || et[113] !== E || et[114] !== hi || et[115] !== Qo || et[116] !== Lo) gd = (0, import_chunk_a46xeenj.o)(import_chunk_69vbx4w6.lH, { ref: E, flexGrow: 1, flexDirection: "column", paddingTop: 1, stickyScroll: false, children: [v, hi, Qo, false, Lo] }), et[112] = v, et[113] = E, et[114] = hi, et[115] = Qo, et[116] = Lo, et[117] = gd;
  else gd = et[117];
  return gd;
}
(0, import_chunk_bs4h6795.G)();
function gF(de) {
  return de.sessionModel;
}
function hF(Fe) {
  return Fe.sessionEffort;
}
function bF() {
  let Se = false;
  return () => {
    Se = true;
  };
}
var cy = ["agents:switchView", "agents:togglePin", "agents:find", "agents:nextGroup", "agents:previousGroup", "agents:rename", "agents:setGroup", "chat:externalEditor"], Mm = /* @__PURE__ */ new Set(["agents:switchView", "agents:togglePin", "agents:rename"]);
function Go() {
  return (0, import_chunk_9js1xpg4.$d)()?.bindings ?? (0, import_chunk_y8kqnbqt.Vfe)(import_chunk_q4pszsad.NV);
}
var py = ["Agents"], fy = ["Chat", "Global"];
function Lm(h) {
  return cy.find((b) => b === h) ?? null;
}
function rs(h, b) {
  if (!h) return null;
  let w = (0, import_chunk_y8kqnbqt.cdo)(h, py, b);
  if (w !== void 0) return Lm(w);
  return Lm((0, import_chunk_y8kqnbqt.cdo)(h, fy, b));
}
function po(h, b) {
  for (let w = b.length - 1; w >= 0; w--) {
    let E = b[w];
    if (!E || E.action !== h || E.chord.length !== 1) continue;
    let v = E.chord[0];
    if (v && rs(v, b) === h) return (0, import_chunk_y8kqnbqt.M5)(E.chord, (0, import_chunk_y8kqnbqt.JF)());
  }
  return "";
}
function Gy(Ge) {
  return Ge.collapsed;
}
function Ky(We) {
  return We.settings.voice?.mode ?? "hold";
}
function Uy(Lt) {
  return Lt.voiceState;
}
function $y(Ne) {
  return Ne.voiceWarmingUp;
}
var Am = { "Ctrl-C": "press ctrl+c or q again to exit", "Ctrl-D": "press ctrl+d again to exit" };
function mu(h) {
  let q = (0, import_chunk_sng02qpc.k)(6), { owners: b, layout: w, simpleView: E, dispatchDefaults: v, groupInput: C, suggestionsOpen: T, dispatchVimMode: F } = h, { selection: A, view: L, editor: J, deleteConfirm: V } = b, { columns: W } = (0, import_chunk_6n6exvyx.qe)(), D = Go(), j = po("agents:find", D), se;
  if (q[0] !== D) se = po("agents:setGroup", D), q[0] = D, q[1] = se;
  else se = q[1];
  let ee = se, ce = (0, import_chunk_3dxkbe9d.$e)(A, Gy), { groupMode: Z, groupEdit: Y, groupPickIdx: de, renaming: Fe, previewOpen: Se, exitPending: we } = (0, import_chunk_3dxkbe9d.$e)(L), { query: le, error: ie, hint: Oe, expandHintPasteId: Ae } = (0, import_chunk_3dxkbe9d.$e)(J), { pending: _t } = (0, import_chunk_3dxkbe9d.$e)(V), De = (0, import_chunk_snett3g5.qz)(), mt = (0, import_chunk_74h6kcya.X)(Ky), to = (0, import_chunk_7tdejx4j.uE)(Uy), Ot = (0, import_chunk_7tdejx4j.uE)($y), { focusedRow: Ht, focused: ke, focusedIsPending: Wt, runningCount: rt, hasDispatch: Ue, hasComposedDispatch: wt, queryIsFilter: qt, isBashDispatch: Qe, enterIsNoop: Yt, enterLabel: ct, isOnboarding: je, byGroup: Kt, headerJobs: Zt, headerLeavesRows: kt } = w, { draft: Ut, suggestions: Ie } = C, yt = ct, Ye = (0, import_chunk_mgh1y10w.oe)(yt) - (0, import_chunk_mgh1y10w.oe)(ct), st = Fe?.jobId ?? null, St = (Ze) => Pn(Z, Ze), pt = _t?.memberIds, Le = pt ? (0, import_chunk_4smdap7r.U)(Zt, (at) => pt.has(at.id)) : 0, $t = Le > 0 ? Le : Zt.length;
  const Gt = import_chunk_8bkqeb5d.g, Rt = 0, He = E ? 1 : 2, ft = 1, ot = we !== null ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [E ? Am[we] : `Press ${we} again to exit`, rt > 0 && ` \xB7 ${rt} ${(0, import_chunk_7cfjrnwy.O)(rt, "agent")} will keep running`] }) : st !== null || Y !== null ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "save", format: { keyCase: "lower" } }), Y?.kind === "assign" && Ut.trim() !== "" && Ut.trim() !== Y.cur && Ie.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "tab", action: "complete", format: { keyCase: "lower" } }), Y?.kind === "assign" && de >= 0 && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: import_chunk_7r4ehpnw.xe.arrowLeft, action: "deselect", format: { keyCase: "lower" } }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel", format: { keyCase: "lower" } })] }) }) : _t ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: E && _t.backend !== null ? `${_t.justKilled ? "stopped \xB7 " : ""}ctrl+x again to ${_o(_t.backend)} \xB7 esc to keep` : (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "ctrl+x", action: kt && $t > 0 && _t.memberIds ? "remove all" : "confirm" }) }) : ie ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", wrap: "truncate-end", children: ie }) : De && Ot ? (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.tmt, {}) : De && to !== "idle" ? (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.emt, { voiceState: to }) : Oe ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: Oe }) : E && !T && le === "" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: Ht?.kind === "newsession" ? `${import_chunk_7r4ehpnw.xe.arrowRight} or enter to start` : `${import_chunk_7r4ehpnw.xe.arrowRight} or enter to open` }), ke && !Wt && (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: (0, import_chunk_9e5mdyfk.Wd)(ke.state) ? `ctrl+x to ${_o(ke.state.backend)}` : "ctrl+x to stop" }), (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: "? for shortcuts" }), null] }) }) : !Se && !T ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: [null, (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [v && Ds(v) && (0, import_chunk_a46xeenj.e)(Fi, { defaults: v }), (ke && !Wt || Ue) && !Yt && !Qe && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: yt, format: { keyCase: "lower" } }), Ae !== null && le !== "" && W >= 90 + Ye && "paste again to expand", Ht?.kind === "header" && le === "" && !je && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: ce.has(St(Ht.group)) ? "expand" : "collapse", format: { keyCase: "lower" } }), Ht?.kind === "fold" && le === "" && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "show all", format: { keyCase: "lower" } }), ke && le === "" && !Qe && W >= 55 && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: " ", action: Li(ke) ? "see more" : "reply", format: { keyCase: "lower" } }), De && mt !== "tap" && le === "" && !Qe && W >= 55 ? "hold space to speak" : null, W >= 80 && (ke && !Wt && le === "" ? (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "ctrl+x", action: _o(ke.state.backend) }) : !wt && Kt && Ht?.kind === "header" ? Ht.group !== "pinned" && Ht.group !== import_chunk_9e5mdyfk.L6 && Ht.group !== import_chunk_9e5mdyfk.rU ? (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "ctrl+x", action: "ungroup" }) : null : !wt && Zt.length > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "ctrl+x", action: "remove all" }) : null), Qe ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "bashBorder", children: "! for shell mode" }) : le !== "" ? F !== void 0 && F !== "NORMAL" ? `-- ${F} --` : qt || E ? (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "clear", format: { keyCase: "lower" } }) : "esc\xD72 to clear" : "? for shortcuts", wt && !Qe && j !== "" && Ji(le) !== null && Ae === null && W >= 45 + Ye + (0, import_chunk_mgh1y10w.oe)(j) && `${j} to find`, null, Kt && le === "" && !!ke && !Wt && ke.state.backend === "daemon" && ee !== "" && W >= 111 && `${ee} to group`] })] }) : null;
  let Ft;
  if (q[2] !== Gt || q[3] !== He || q[4] !== ot) Ft = (0, import_chunk_a46xeenj.e)(Gt, { flexShrink: Rt, paddingLeft: He, height: ft, children: ot }), q[2] = Gt, q[3] = He, q[4] = ot, q[5] = Ft;
  else Ft = q[5];
  return Ft;
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function sE() {
  return Date.now();
}
function Xa(h) {
  let D = (0, import_chunk_sng02qpc.k)(33), { focusedPinned: b, canReorder: w, canRename: E, canGroup: v, canPin: C, canMention: T, canSwitchViews: F, canDispatchAndOpen: A, altOpenCount: L, canDelete: J, canGoBack: V } = h, W = Go(), j;
  if (D[0] !== W) j = po("agents:switchView", W), D[0] = W, D[1] = j;
  else j = D[1];
  let q = j, se;
  if (D[2] !== W) se = po("agents:togglePin", W), D[2] = W, D[3] = se;
  else se = D[3];
  let ee = se, ce;
  if (D[4] !== W) ce = po("agents:find", W), D[4] = W, D[5] = ce;
  else ce = D[5];
  let Z = ce, Y;
  if (D[6] !== W) Y = po("agents:rename", W), D[6] = W, D[7] = Y;
  else Y = D[7];
  let de = Y, Fe;
  if (D[8] !== W) Fe = po("agents:setGroup", W), D[8] = W, D[9] = Fe;
  else Fe = D[9];
  let Se = Fe, we;
  if (D[10] !== W) {
    let le = po("agents:previousGroup", W);
    let ie = po("agents:nextGroup", W);
    let Oe = le.slice(0, le.lastIndexOf("+") + 1);
    we = le && ie && ie.startsWith(Oe) ? `${le}/${ie.slice(Oe.length)}` : [le, ie].filter(Boolean).join(" and ");
    D[10] = W, D[11] = we;
  } else we = D[11];
  let Ae = we, _t;
  if (D[12] !== L || D[13] !== J || D[14] !== A || D[15] !== V || D[16] !== v || D[17] !== T || D[18] !== C || D[19] !== E || D[20] !== w || D[21] !== F || D[22] !== Z || D[23] !== b || D[24] !== Ae || D[25] !== ee || D[26] !== de || D[27] !== Se || D[28] !== q) {
    let De = [];
    if (w) {
      let mt;
      if (D[30] === import_chunk_w1d7ygsk.R) mt = (0, import_chunk_paah1wya.ym)({ chord: ["shift+up", "shift+down"], action: "reorder" }), D[30] = mt;
      else mt = D[30];
      De.push(mt);
    }
    if (E && de) De.push(`${de} to rename`);
    if (v && Se) De.push(`${Se} to set group`);
    if (F) {
      if (Z) De.push(`${Z} to find`);
      if (Ae) De.push(`${Ae} to jump groups`);
      if (q) De.push(`${q} to switch views`);
      if (De.push("ctrl+j for newline"), A) De.push("ctrl+enter to start and open");
    }
    if (T) De.push("@ to mention");
    if (C && ee) De.push(`${ee} to ${b ? "unpin" : "pin to top"}`);
    if (L > 0) {
      const mt = `alt+1${L > 1 ? `-${L}` : ""}`;
      let to;
      if (D[31] !== mt) to = (0, import_chunk_paah1wya.ym)({ chord: mt, action: "open" }), D[31] = mt, D[32] = to;
      else to = D[32];
      De.push(to);
    }
    if (J) De.push(`ctrl+x to ${J}`);
    if (V) De.push(`${import_chunk_7r4ehpnw.xe.arrowLeft} to go back`);
    De.push(F ? "esc to quit" : "esc to close \xB7 esc again to quit");
    De.push("? to close");
    _t = (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.g5t, { hints: De });
    D[12] = L, D[13] = J, D[14] = A, D[15] = V, D[16] = v, D[17] = T, D[18] = C, D[19] = E, D[20] = w, D[21] = F, D[22] = Z, D[23] = b, D[24] = Ae, D[25] = ee, D[26] = de, D[27] = Se, D[28] = q, D[29] = _t;
  } else _t = D[29];
  return _t;
}
function Za(h) {
  let w = (0, import_chunk_sng02qpc.k)(37), { job: b } = h, E;
  if (w[0] !== b) E = b ? Date.parse(b.state.updatedAt) : 0, w[0] = b, w[1] = E;
  else E = w[1];
  let v = E, [C, T] = (0, import_chunk_bs4h6795.y)(sE), F;
  if (w[2] === import_chunk_w1d7ygsk.R) F = () => T(Date.now()), w[2] = F;
  else F = w[2];
  if ((0, import_chunk_8bkqeb5d.Al)(F, !b ? null : C - v < 6e4 ? 1e3 : 3e4), !b) {
    let A2;
    if (w[3] === import_chunk_w1d7ygsk.R) A2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, paddingX: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: "no session selected" }) }), w[3] = A2;
    else A2 = w[3];
    return A2;
  }
  let L = b.state;
  const A = Math.max(0, C - v);
  let J;
  if (w[4] !== A) J = (0, import_chunk_f64qna2j.Cn)(A, { mostSignificantOnly: true }), w[4] = A, w[5] = J;
  else J = w[5];
  let V = J, W;
  if (w[6] !== L.backend) W = (0, import_chunk_a46xeenj.e)(Mo, { label: "backend", children: L.backend }), w[6] = L.backend, w[7] = W;
  else W = w[7];
  let D;
  if (w[8] !== b.id) D = (0, import_chunk_9e5mdyfk.Bs)(b.id), w[8] = b.id, w[9] = D;
  else D = w[9];
  let j;
  if (w[10] !== D) j = (0, import_chunk_a46xeenj.e)(Mo, { label: "dir", children: D }), w[10] = D, w[11] = j;
  else j = w[11];
  const q = L.worktreePath ?? L.cwd;
  let se;
  if (w[12] !== q) se = (0, import_chunk_a46xeenj.e)(Mo, { label: "cwd", children: q }), w[12] = q, w[13] = se;
  else se = w[13];
  let ee;
  if (w[14] !== W || w[15] !== j || w[16] !== se) ee = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [W, j, se] }), w[14] = W, w[15] = j, w[16] = se, w[17] = ee;
  else ee = w[17];
  let ce;
  if (w[18] !== b.id || w[19] !== L.backend) ce = L.backend === "daemon" ? (0, import_chunk_a46xeenj.e)(Mo, { label: "shell", children: `claude attach ${b.id}` }) : null, w[18] = b.id, w[19] = L.backend, w[20] = ce;
  else ce = w[20];
  const Z = L.resumeSessionId ?? L.sessionId;
  let Y;
  if (w[21] !== Z) Y = (0, import_chunk_a46xeenj.e)(Mo, { label: "session", children: Z }), w[21] = Z, w[22] = Y;
  else Y = w[22];
  let de;
  if (w[23] !== L.cliVersion) de = L.cliVersion === void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\u2014" }) : L.cliVersion === { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION ? L.cliVersion : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: L.cliVersion }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 current ", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION] })] }), w[23] = L.cliVersion, w[24] = de;
  else de = w[24];
  let Fe;
  if (w[25] !== de) Fe = (0, import_chunk_a46xeenj.e)(Mo, { label: "version", children: de }), w[25] = de, w[26] = Fe;
  else Fe = w[26];
  const Se = `${V} ago`;
  let we;
  if (w[27] !== Se) we = (0, import_chunk_a46xeenj.e)(Mo, { label: "updated", children: Se }), w[27] = Se, w[28] = we;
  else we = w[28];
  let le;
  if (w[29] !== ce || w[30] !== Y || w[31] !== Fe || w[32] !== we) le = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [ce, Y, Fe, we] }), w[29] = ce, w[30] = Y, w[31] = Fe, w[32] = we, w[33] = le;
  else le = w[33];
  let ie;
  if (w[34] !== ee || w[35] !== le) ie = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexShrink: 0, paddingX: 2, flexDirection: "row", gap: 4, children: [ee, le] }), w[34] = ee, w[35] = le, w[36] = ie;
  else ie = w[36];
  return ie;
}
function Mo(h) {
  let E = (0, import_chunk_sng02qpc.k)(5), { label: b, children: w } = h, v;
  if (E[0] !== b) v = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [b, " "] }), E[0] = b, E[1] = v;
  else v = E[1];
  let C;
  if (E[2] !== w || E[3] !== v) C = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [v, w] }), E[2] = w, E[3] = v, E[4] = C;
  else C = E[4];
  return C;
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function dE(J, V) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: 3, flexShrink: 0, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [V + 1, "."] }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, width: 0, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: [(0, import_chunk_7cfjrnwy.Wr)(J.label), J.description && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", (0, import_chunk_7cfjrnwy.Wr)(J.description)] })] }) })] }, J.label);
}
function wu(h) {
  let E = (0, import_chunk_sng02qpc.k)(14), { questions: b } = h, w = b[0];
  if (!w) {
    return null;
  }
  let v;
  if (E[0] !== w.question) v = (0, import_chunk_7cfjrnwy.Wr)(w.question), E[0] = w.question, E[1] = v;
  else v = E[1];
  let C;
  if (E[2] !== v) C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, width: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, wrap: "truncate", children: v }) }), E[2] = v, E[3] = C;
  else C = E[3];
  let T;
  if (E[4] !== b.length) T = b.length > 1 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, paddingLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["+", b.length - 1, " more \xB7 enter to open"] }) }), E[4] = b.length, E[5] = T;
  else T = E[5];
  let F;
  if (E[6] !== C || E[7] !== T) F = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [C, T] }), E[6] = C, E[7] = T, E[8] = F;
  else F = E[8];
  let A;
  if (E[9] !== w.options) A = w.options.map(dE), E[9] = w.options, E[10] = A;
  else A = E[10];
  let L;
  if (E[11] !== F || E[12] !== A) L = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [F, A] }), E[11] = F, E[12] = A, E[13] = L;
  else L = E[13];
  return L;
}
function dg(h, b) {
  let w = b?.[0];
  if (!w || h < "1" || h > "9") return null;
  let E = Number(h) - 1;
  return w.options[E]?.label.replace(import_chunk_7cfjrnwy.q8, "") ?? null;
}
var lg = 8, cg = 5, Su = 500, lE = 150;
function fg(h, b, w, E) {
  return w === "prompt" && !b && E !== "remote" && (0, import_chunk_5h9h52az.Rk)(h) === "bash" && (0, import_chunk_r5rtrbxq.PMt)();
}
function yu({ job: h, status: b, isPending: w, deleteArmed: E, onBack: v, onAttach: C, onReply: T, onRefreshCloudRows: F, isTerminalFocused: A, childRows: L, editor: J, replyError: V, renaming: W, heldInTerminal: D }) {
  let j = (ue) => J.setReplyError(h.id, ue);
  (0, import_chunk_bs4h6795.H)(() => Gi("peek", h.state), []);
  let q = Date.parse(h.state.updatedAt), { storageV5: se } = (0, import_chunk_3jkk3v3z.Ve)(), [ee, ce] = (0, import_chunk_bs4h6795.y)(() => Date.now()), Z = (0, import_chunk_9e5mdyfk.Hk)(h.state.state) === null ? Io(h.state, h.state.needs ?? "") || void 0 : void 0, Y = vo(h.state) || (0, import_chunk_bzyb60p0.nto)(Z), de = h.state.needs?.startsWith(import_chunk_r3wrey46.cki) ? import_chunk_865at33z.ZTt : void 0, Fe = h.state.tempo === "blocked" ? h.state.block?.questions : void 0, Se = Fe?.length ? Fe : void 0, we = L.map((ue) => ue.row.href), le = (ue) => we.some((ze) => {
    let Xt = ue.indexOf(ze);
    return Xt >= 0 && !/\w/.test(ue[Xt + ze.length] ?? "") && ue.length - ze.length < 16;
  }), ie = Z ? [] : Object.entries(h.state.output ?? {}).filter(([, ue]) => !le(ue)), Oe = Se ? "questions" : Z ? "needs" : ie.length > 0 ? "output" : "detail", Ae = Oe === "questions" || Oe === "needs", _t = (0, import_chunk_8bkqeb5d.Xe)(), De = _t ? Sa : 1e3;
  (0, import_chunk_8bkqeb5d.Al)(() => ce(Date.now()), Ae ? ee - q < 6e4 ? De : 3e4 : null);
  let mt = Ae ? (0, import_chunk_f64qna2j.Cn)(Math.max(0, ee - q), { mostSignificantOnly: true }) : "", to = (0, import_chunk_bs4h6795.I)(false), Ot = (0, import_chunk_bs4h6795.I)(null);
  (0, import_chunk_dwa7jc2e.Dv)(Ot, true);
  let Ht = J.replyDraft(h.id) ?? "", [ke, Wt] = (0, import_chunk_bs4h6795.y)((0, import_chunk_5h9h52az.Rk)(Ht) === "bash" ? "bash" : "prompt"), rt = (0, import_chunk_bs4h6795.I)(ke), Ue = (ue) => {
    rt.current = ue, Wt(ue);
  }, wt = ke === "bash", qt = (0, import_chunk_7cfjrnwy.Wr)(h.state.suggestedReply ?? ""), Qe = h.state.tempo === "blocked" && !h.state.block?.questions && qt && (0, import_chunk_r5rtrbxq.VJn)(qt) ? qt : void 0, Yt = false, ct = Li(h), je = false, Kt = (0, import_chunk_snett3g5.qz)(), Zt = (0, import_chunk_74h6kcya.X)((ue) => ue.settings.voice?.mode ?? "hold"), kt = (0, import_chunk_8bkqeb5d.ir)(), Ut = (0, import_chunk_bs4h6795.I)(null), Ie = (0, import_chunk_bs4h6795.I)(null), yt = (0, import_chunk_7tdejx4j.Bmt)();
  (0, import_chunk_bs4h6795.H)(() => () => {
    Ut.current?.(), Ut.current = null;
  }, []);
  let { query: Ye, queryRef: st, setQuery: Ze, cursorOffset: St, cursorOffsetRef: pt, setCursorOffset: at, handleKeyDown: Le, handlePaste: $t } = (0, import_chunk_snett3g5.Iv)({ isActive: true, multiline: true, honorEditorMode: true, backspaceExitsOnEmpty: false, initialQuery: (0, import_chunk_5h9h52az.WL)(Ht), onExit: () => {
    if (to.current) return;
    let ue = Ie.current;
    if (ue !== null && (ue.sameChunk || performance.now() - ue.at < lE)) return;
    if (ct && st.current.trim() && !(rt.current === "prompt" && st.current.trim() === "/stop" && !(0, import_chunk_r5rtrbxq.fht)(st.current))) return;
    let ze = (0, import_chunk_bzyb60p0.kQr)(st.current, "fleet_reply");
    if (ze.removedTotal > 0) {
      let bo = { sameChunk: true, at: performance.now() };
      Ie.current = bo, queueMicrotask(() => {
        bo.sameChunk = false;
      });
      let Fo = ze.text.trim() === "";
      Ze(ze.text), j((0, import_chunk_xfj2cwfv.mAt)(ze.removedTotal, Fo ? "empty" : "review")), (0, import_chunk_bzyb60p0.PXo)();
      return;
    }
    let Xt = st.current.trim();
    if (!Xt && rt.current === "prompt") {
      to.current = true, C();
      return;
    }
    if (!Xt) return;
    let fo = (0, import_chunk_r5rtrbxq.eqs)(rt.current === "prompt" && (0, import_chunk_r5rtrbxq.fht)(st.current) ? ` ${Xt}` : Xt, rt.current), To = rt.current;
    to.current = true, Ze(""), Ue("prompt"), j(null), J.deleteReplyDraft(h.id);
    let xo = (0, import_chunk_bq31aqv6.Nu)(fo), Do = {};
    for (let bo of xo) {
      let Fo = J.pastes[bo.id];
      if (Fo) Do[bo.id] = Fo;
    }
    let zo = () => {
      if (st.current === "" && (0, import_chunk_5h9h52az.WL)(J.replyDraft(h.id) ?? "") === "") {
        J.saveReplyDraft(h.id, fo), Ze(To === "bash" ? Xt : fo), Ue(To);
        for (let bo of xo) {
          let Fo = Do[bo.id];
          if (Fo) J.pastes[bo.id] = Fo;
        }
      }
    };
    if (h.state.backend === "remote" && To === "bash") {
      to.current = false, zo(), j("'!' commands can't be sent to a cloud session from here. Open the session to run them");
      return;
    }
    if (h.state.backend === "remote" && xo.some((bo) => Do[bo.id]?.type === "image")) {
      to.current = false, zo(), j("Can't send images to cloud sessions from here. Open the session to send them");
      return;
    }
    (0, import_chunk_95amtstn.tUo)(fo, Do, h.id, se, (0, import_chunk_r59sj93t.cue)(fo, null) && !/^\s/.test(fo) || (0, import_chunk_9e5mdyfk.rv)(h.state) ? "path" : "note", "mustExist").catch((bo) => ((0, import_chunk_k449cc64.i)(bo), fo)).then((bo) => T(bo)).then((bo) => {
      if (bo) zo(), j(bo);
      else J.pruneOrphanedPastes({ pruneTextPastes: true });
    }, (bo) => {
      zo(), j((0, import_chunk_jv7av99m.d)(bo));
    }).finally(() => {
      to.current = false;
    });
  }, onCancel: v, onSpaceOnEmpty: wt ? void 0 : Kt && Zt !== "tap" ? () => {
    Ut.current?.(), Ut.current = kt.setTimeout(() => {
      Ut.current = null;
      let ue = yt();
      if (ue.voiceState !== "idle" || ue.voiceWarmingUp) return;
      if (st.current.trim() !== "") return;
      v();
    }, Su);
  } : v, onTabOnEmpty: Qe && !wt ? () => {
    if (rt.current === "bash" && (0, import_chunk_r5rtrbxq.PMt)()) return;
    Ze(Qe), (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion", { outcome: (0, import_chunk_78g0060s.S)("accepted"), source: (0, import_chunk_78g0060s.S)("fleetview_peek") }), (0, import_chunk_wsm915mg.Dnr)(true, se);
  } : void 0 }), Gt = ke === "prompt" && Ye.trim() === "/stop" && !(0, import_chunk_r5rtrbxq.fht)(Ye), Rt = ct && !Gt ? Ye.trim() ? "esc then enter to open and answer" : V?.kind === "paste" ? V.error : null : V?.error ?? null;
  (0, import_chunk_bs4h6795.H)(() => {
    J.saveReplyDraft(h.id, (0, import_chunk_r5rtrbxq.eqs)(Ye, ke));
  }, [Ye, ke, h.id, J]), (0, import_chunk_bs4h6795.H)(() => {
    let ue = J.registerLivePeekQuery(() => st.current);
    return () => {
      ue(), J.pruneOrphanedPastes();
    };
  }, [J, st]), (0, import_chunk_bs4h6795.H)(() => (0, import_chunk_bzyb60p0.Fye)(() => [st.current]), [st]);
  let He = oa(() => J.pastes, $t, { onMinted: J.noteMintedPaste }), { handleKeyDown: ft, handlePaste: ot } = (0, import_chunk_gd8mknr6.zwn)({ handleKeyDown: Le, onPaste: (ue) => {
    let ze = ue.replace(/\r\n|\r/g, `
`), Xt = fg(ze, st.current, rt.current, h.state.backend);
    if (Xt) Ue("bash");
    $t(new import_chunk_8bkqeb5d.s$e(Xt ? (0, import_chunk_5h9h52az.WL)(ze) : ze));
  }, onImagePaste: He }), [Ft] = (0, import_chunk_bs4h6795.y)(() => ({ get value() {
    return st.current;
  }, get cursorOffset() {
    return pt.current;
  }, setValueWithCursor: (ue, ze) => {
    Ze(ue), at(ze);
  } })), Ge = (0, import_chunk_snett3g5.m5t)({ composer: Ft }), We = (0, import_chunk_7tdejx4j.uE)((ue) => ue.voiceState), Lt = (0, import_chunk_7tdejx4j.uE)((ue) => ue.voiceWarmingUp);
  (0, import_chunk_bs4h6795.H)(() => {
    if (We !== "idle" && Ut.current) Ut.current(), Ut.current = null;
  }, [We]);
  let Ne = (0, import_chunk_74h6kcya.X)((ue) => (0, import_chunk_0t7st4dz.Lv)(ue.settings.prefersReducedMotion)), lo = (0, import_chunk_74h6kcya.X)((ue) => ue.settings?.prUrlTemplate), At = We === "recording" && !Ne, { handleKeyDown: Je } = (0, import_chunk_snett3g5.COt)({ voiceHandleKeyEvent: Ge.handleKeyEvent, voiceCancelRecording: Ge.cancelRecording, stripTrailing: Ge.stripTrailing, resetAnchor: Ge.resetAnchor, isActive: (Zt !== "tap" || Ye.trim().length > 0) && !wt && !W, composer: Ft }), io = Se ? 2 + (Se[0]?.options.length ?? 0) : 0, uo = !D && rf(h.state.respawnFlags), Jt = Ae || uo ? 1 : 0, { rows: xt, columns: et } = (0, import_chunk_6n6exvyx.qe)(), co = Go(), Eo = 8, Pe = Ye ? (0, import_chunk_7cfjrnwy.Mt)(Ye, `
`) : 0, lt = Math.max(0, ...ie.map(([ue]) => (0, import_chunk_mgh1y10w.oe)(ue))), gt = Math.max(1, et - 4 - (Oe === "output" && ie.length > 1 ? lt + 2 : 0)), Dt = Oe === "needs" ? [Y ? Z ?? "" : cn(Z ?? "")] : Oe === "output" ? ie.map(([, ue]) => Y ? Io(h.state, ue) : cn(ue)) : Oe === "detail" ? [Y ? Io(h.state, h.state.detail) : cn(h.state.detail)] : [], eo = (Y || Oe === "detail" ? Dt : Dt.map(uf)).map((ue) => (0, import_chunk_8bkqeb5d.o$e)(ue)), So = eo.map((ue) => (0, import_chunk_7cfjrnwy.Mt)((0, import_chunk_8bkqeb5d.Ud)(ue, gt, "wrap"), `
`) + 1), ao = Math.max(1, ...So), wo = (0, import_chunk_8c111j67.gbt)() ? Math.min(ao, Math.max(cg, xt - Eo - Math.min(L.length, lg) - io - Jt - Pe - (Rt ? 1 : 0) - 1)) : cg, ko = (Oe === "questions" ? io : Oe === "output" ? ie.length * wo : wo) + Jt + Pe + (Rt ? 1 : 0) + 1, an = Math.max(lg, xt - Eo - ko), $o = L.slice(0, an), qo = L.length - $o.length, Bo = So.map((ue) => !_t && ue > wo), Yo = 5, { color: me } = af(h.state, h.activity, b);
  return (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: Ot, flexDirection: "column", borderStyle: "round", borderColor: wt ? "bashBorder" : void 0, borderDimColor: !wt, paddingX: 1, minHeight: Yo, width: "100%", tabIndex: 0, autoFocus: true, onKeyDownCapture: Je, onKeyDown: (ue) => {
    if (ue.key !== " " && Ut.current) Ut.current(), Ut.current = null;
    if (W) return;
    if (Mm.has(rs((0, import_chunk_y8kqnbqt.VCe)(ue), co))) return;
    if (fa(ue)) {
      ue.preventDefault(), ue.stopImmediatePropagation(), ma((ze) => He(ze.base64, { mediaType: ze.mediaType, dimensions: ze.dimensions }), (ze) => J.setReplyError(h.id, ze, "paste"));
      return;
    }
    if (rt.current === "prompt") {
      if (ue.name === "right" && !ue.shift && !st.current) {
        if (ue.preventDefault(), to.current) return;
        to.current = true, C();
        return;
      }
      if ((0, import_chunk_5h9h52az.WEn)(ue.key) && !st.current) {
        ue.preventDefault(), Ue("bash");
        return;
      }
      if (ue.key.length <= import_chunk_s7te3n3c.jL && fg(ue.key, st.current, rt.current, h.state.backend)) {
        ue.preventDefault(), Ue("bash"), Ze((0, import_chunk_5h9h52az.WL)(ue.key));
        return;
      }
      if (!st.current) {
        let ze = dg(ue.key, Se);
        if (ze) {
          ue.preventDefault();
          let Xt = (0, import_chunk_r5rtrbxq.ETa)(ze);
          Ze(Xt), at(Xt.length);
          return;
        }
      }
    } else if (ue.name === "backspace" && !st.current) {
      ue.preventDefault(), Ue("prompt");
      return;
    }
    ft(ue);
  }, onPaste: W ? void 0 : ot, children: [Oe === "questions" && Se ? (0, import_chunk_a46xeenj.e)(wu, { questions: Se }) : Oe === "needs" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { maxHeight: wo, overflowY: "hidden", children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "wrap", children: Bo[0] ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_f64qna2j.$ke)(eo[0] ?? "", gt, wo) }) : Y ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Dt[0] ?? "" }) : (0, import_chunk_a46xeenj.e)(Ea, { value: Dt[0] ?? "", linkHref: de }) }) }) : Oe === "output" ? (0, import_chunk_a46xeenj.e)(import_chunk_ee10yhqw.Q, { compact: true, children: ie.map(([ue], ze) => (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [ie.length > 1 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: lt + 2, flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ue }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, width: 0, maxHeight: wo, overflowY: "hidden", children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "wrap", children: Bo[ze] ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_f64qna2j.$ke)(eo[ze] ?? "", gt, wo) }) : Y ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Dt[ze] ?? "" }) : (0, import_chunk_a46xeenj.e)(Ea, { value: Dt[ze] ?? "" }) }) })] }, ue)) }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { maxHeight: wo, overflowY: "hidden", children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "wrap", children: Bo[0] ? (0, import_chunk_f64qna2j.$ke)(eo[0] ?? "", gt, wo) : Y ? Dt[0] : (0, import_chunk_a46xeenj.e)(import_chunk_8dkwjpxx.I$, { children: Dt[0] ?? "" }) }) }), $o.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [$o.map((ue) => (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, width: 0, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: [ue.prNumber !== void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_ggqyvxbh.yIe, { number: ue.prNumber, url: ue.row.href, kind: Bi(ue.row), color: ue.color, underline: false, hidePrefix: true }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: ue.color, dimColor: !xn(ue), children: xn(ue) ? import_chunk_xcgcdx61.Wh : "PR" }), ue.label ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [" ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: (0, import_chunk_sjqze7qg.SSe)(ue.row.href, lo), children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: ue.isDraft ? "inactive" : void 0, children: [ue.label, ue.isDraft ? " (draft)" : ""] }) })] }) : null] }) }), ue.diffStat && ue.diffStat.additions + ue.diffStat.deletions > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, paddingLeft: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: `${ue.row.href}/files`, children: (0, import_chunk_a46xeenj.e)(import_chunk_0pkh1evw.fx, { added: ue.diffStat.additions, removed: ue.diffStat.deletions }) }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, paddingLeft: 1, children: ue.status.map((ze, Xt) => (0, import_chunk_a46xeenj.o)(import_chunk_bs4h6795.nf, { children: [Xt > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: " " }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: ze.color, dimColor: !ze.color, children: ze.text })] }, Xt)) })] }, ue.row.href)), qo > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["\u2026 ", qo, " more"] }) })] }), Jt > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate", children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [Ae && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: me, children: ["waiting ", mt] }), uo && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "safe mode" }), uo && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "customizations are off" })] }) }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1 }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.cA, { query: Ye, cursorOffset: St, onCursorOffsetChange: at, placeholder: Kt && (We !== "idle" || Lt) ? "" : Se ? `press 1-${Se[0]?.options.length ?? 2} or type your answer` : Qe && !wt ? Qe : (Yt || ct) && !wt ? "enter to open and answer" : "reply", prefix: wt ? "!" : import_chunk_7r4ehpnw.xe.pointer, prefixColor: wt ? "bashBorder" : void 0, prefixDim: !Ye.trim(), dimRange: Ge.interimRange ? [Ge.interimRange.start, Ge.interimRange.end] : void 0, cursorChar: At ? (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.i8n, {}) : void 0, isFocused: !W, isTerminalFocused: A, width: "100%", borderless: true, wrapColumns: et - 4 }) }), Rt && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", dimColor: true, wrap: "truncate", children: Rt })] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, children: Kt && Lt && !W ? (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.tmt, {}) : Kt && We !== "idle" && !W ? (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.emt, { voiceState: We }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: W ? (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "save", format: { keyCase: "lower" } }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel", format: { keyCase: "lower" } })] }) : (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [wt && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "bashBorder", children: "! for shell mode" }), (ct && Ye.trim() && !Gt ? false : Ye.trim() || !wt && !w) && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: Ye.trim() ? "send" : Gs(h.state) ? "resume" : "open", format: { keyCase: "lower" } }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: Ye.trim() || wt ? "escape" : " ", action: "close", format: { keyCase: "lower" } }), Kt && Zt !== "tap" && !wt && !Ye.trim() ? "hold space to speak" : null, (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "ctrl+x", action: E ? "confirm" : _o(h.state.backend) })] }) }) })] });
}
function ZE(co) {
  return co.replyError;
}
function eR(Eo) {
  return Eo.prStatuses;
}
function tR(Pe) {
  return Pe.kind === "job" && Pe.group === qr;
}
function oR(lt) {
  lt.allowDefault();
}
function xu(h) {
  let ct = (0, import_chunk_sng02qpc.k)(57), { owners: b, layout: w, footer: E, simpleView: v, groupsEnabled: C, showRemoteTabs: T, canMention: F, isTerminalFocused: A, awayLoop: L, storageV5: J, onOpen: V, onStop: W } = h, { roster: D, view: j, attach: q, editor: se, deleteConfirm: ee } = b, { helpOpen: ce, debugOpen: Z, previewOpen: Y, groupEdit: de, renaming: Fe, resumePicker: Se, resumePickerIdx: we, settingPicker: le, settingPickerIdx: ie, activeTab: Oe } = (0, import_chunk_3dxkbe9d.$e)(j), Ae = (0, import_chunk_3dxkbe9d.$e)(se, ZE), _t = (0, import_chunk_3dxkbe9d.$e)(D, eR), { pending: De } = (0, import_chunk_3dxkbe9d.$e)(ee), [mt, to] = (0, import_chunk_bs4h6795.y)(false), Ot = (0, import_chunk_snett3g5.gbn)(), { rows: Ht, byState: ke, byGroup: Wt, focusedRow: rt, focused: Ue, focusedIsPending: wt, altOpenOrigin: qt, ageNow: Qe } = w, Yt = Fe?.jobId ?? null, je;
  if (ct[0] !== D) je = (Kt) => D.liveStatus(Kt), ct[0] = D, ct[1] = je;
  else je = ct[1];
  let Zt = je, kt = V, Ut;
  if (ct[2] !== Ue || ct[3] !== _t) Ut = Ue?.state.children ? Gr(Ue.state.children, _t) : [], ct[2] = Ue, ct[3] = _t, ct[4] = Ut;
  else Ut = ct[4];
  let Ie = Ut, yt;
  if (ct[5] !== Qe || ct[6] !== Se || ct[7] !== we) yt = Se !== null ? (() => {
    let Ye;
    if (Se.entries === null) Ye = (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Looking for past sessions\u2026" });
    else if (Se.failed) Ye = (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "error", detail: "Close this and run /resume again", children: "Couldn't load past sessions" });
    else if (Se.entries.length === 0) Ye = (0, import_chunk_a46xeenj.e)(import_chunk_5yhrnn87.Jn, { children: "No past sessions to resume" });
    else {
      let st = Se.entries;
      let { start: Ze, end: St } = id(we, st.length);
      let pt = st.slice(Ze, St);
      let at = st.length - St;
      Ye = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "above", count: Ze }), pt.map((Le, $t) => {
        let Gt = Ze + $t === we;
        return (0, import_chunk_a46xeenj.o)(import_chunk_6qkpxgbg.kp, { isFocused: Gt, styled: false, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, flexShrink: 1, overflow: "hidden", children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: Gt ? "suggestion" : void 0, wrap: "truncate", children: Le.title }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_f64qna2j.Cn)(Math.max(0, (Qe ?? Date.now()) - Le.modified.getTime()), { mostSignificantOnly: true }) }) })] }, Le.sessionId);
      }), (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "below", count: at })] });
    }
    return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", bottom: 0, left: 0, right: 0, flexDirection: "column", opaque: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_pw8jgay2.Mv, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_vx3fbgjb.Es, { children: "Resume a past session" }), Ye, (0, import_chunk_a46xeenj.e)(ps, { enterAction: !Se.failed && Se.entries?.length ? "resume in the background" : void 0 })] }) });
  })() : null, ct[5] = Qe, ct[6] = Se, ct[7] = we, ct[8] = yt;
  else yt = ct[8];
  let Rt = yt, He;
  if (ct[9] !== le || ct[10] !== ie) He = le !== null ? (() => {
    let { setting: ft, options: ot } = le;
    let { start: Ft, end: Ge } = id(ie, ot.length);
    let We = ot.slice(Ft, Ge);
    let Lt = ot.length - Ge;
    return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", bottom: 0, left: 0, right: 0, flexDirection: "column", opaque: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_pw8jgay2.Mv, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_vx3fbgjb.Es, { subtitle: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: ["for new sessions from this window", "not saved"] }), children: ft === "model" ? "Model" : ft === "effort" ? "Effort" : "Fast mode" }), (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "above", count: Ft }), We.map((Ne, lo) => (0, import_chunk_a46xeenj.o)(import_chunk_6qkpxgbg.kp, { isFocused: Ft + lo === ie, children: [Ne.value, Ne.description && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", Ne.description] })] }, Ne.value)), (0, import_chunk_a46xeenj.e)(import_chunk_6qkpxgbg.hf, { direction: "below", count: Lt }), (0, import_chunk_a46xeenj.e)(ps, { enterAction: "select" })] }) });
  })() : null, ct[9] = le, ct[10] = ie, ct[11] = He;
  else He = ct[11];
  let At = He, Je;
  if (ct[12] !== Oe || ct[13] !== qt || ct[14] !== Wt || ct[15] !== ke || ct[16] !== F || ct[17] !== Z || ct[18] !== Ue || ct[19] !== wt || ct[20] !== rt || ct[21] !== E || ct[22] !== C || ct[23] !== ce || ct[24] !== Y || ct[25] !== Ht || ct[26] !== T || ct[27] !== v) Je = ce && !Y ? (0, import_chunk_a46xeenj.e)(Xa, { focusedPinned: Ue?.state.pinned ?? false, canReorder: !!Ue && (v ? (Ue.state.pinned ?? false) && (0, import_chunk_4smdap7r.U)(Ht, tR) > 1 : !ke && !Wt || (Ue.state.pinned ?? false)), canRename: Wt && rt?.kind === "header" && rt.group !== "pinned" && rt.group !== import_chunk_9e5mdyfk.L6 && rt.group !== import_chunk_9e5mdyfk.rU || !!Ue && !wt && Ue.state.backend === "daemon", canGroup: C && !!Ue && !wt && Ue.state.backend === "daemon", canPin: !!Ue && !wt, canMention: !v && F, canSwitchViews: !v, canSwitchTabs: T && !v, canDispatchAndOpen: Oe === "local" && (0, import_chunk_2kg8bxyd.oXn)(), altOpenCount: Math.min(9, (0, import_chunk_4smdap7r.U)(Ht, (io) => io.kind === "job" && io.origin === qt)), canDelete: Ue && !wt ? (0, import_chunk_9e5mdyfk.Wd)(Ue.state) ? _o(Ue.state.backend) : "stop" : void 0, canGoBack: false }) : Z && !Y ? (0, import_chunk_a46xeenj.e)(Za, { job: Ue }) : E, ct[12] = Oe, ct[13] = qt, ct[14] = Wt, ct[15] = ke, ct[16] = F, ct[17] = Z, ct[18] = Ue, ct[19] = wt, ct[20] = rt, ct[21] = E, ct[22] = C, ct[23] = ce, ct[24] = Y, ct[25] = Ht, ct[26] = T, ct[27] = v, ct[28] = Je;
  else Je = ct[28];
  let uo;
  if (ct[29] !== mt || ct[30] !== Ot) uo = (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.h5t, { isUpdating: mt, onChangeIsUpdating: to, showSuccessMessage: Ot, verbose: false }), ct[29] = mt, ct[30] = Ot, ct[31] = uo;
  else uo = ct[31];
  let Jt;
  if (ct[32] !== q || ct[33] !== L || ct[34] !== se || ct[35] !== Ue || ct[36] !== Ie || ct[37] !== wt || ct[38] !== de || ct[39] !== A || ct[40] !== Zt || ct[41] !== W || ct[42] !== kt || ct[43] !== De || ct[44] !== Y || ct[45] !== Yt || ct[46] !== Ae || ct[47] !== D || ct[48] !== J || ct[49] !== j) Jt = Y && Ue && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", bottom: 0, left: 0, right: 0, flexDirection: "column", opaque: true, onClick: oR, children: (0, import_chunk_a46xeenj.e)(yu, { job: Ue, renaming: Yt !== null || de !== null, editor: se, replyError: Ae?.jobId === Ue.id ? Ae : null, status: Zt(Ue), heldInTerminal: D.terminalHolderOf(Ue) !== void 0, isPending: wt, deleteArmed: De?.id === Ue.id ? { justKilled: De.justKilled } : void 0, onBack: () => j.setPreviewOpen(false), onAttach: () => {
    kt(Ue), j.setPreviewOpen(false);
  }, childRows: Ie, onReply: (xt) => cl({ editor: se, roster: D, attach: q, awayLoop: L, storageV5: J, stop: W }, Ue, xt), onRefreshCloudRows: void 0, isTerminalFocused: A }, Ue.id) }), ct[32] = q, ct[33] = L, ct[34] = se, ct[35] = Ue, ct[36] = Ie, ct[37] = wt, ct[38] = de, ct[39] = A, ct[40] = Zt, ct[41] = W, ct[42] = kt, ct[43] = De, ct[44] = Y, ct[45] = Yt, ct[46] = Ae, ct[47] = D, ct[48] = J, ct[49] = j, ct[50] = Jt;
  else Jt = ct[50];
  let et;
  if (ct[51] !== Rt || ct[52] !== At || ct[53] !== Je || ct[54] !== uo || ct[55] !== Jt) et = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [Je, uo, Rt, At, Jt] }), ct[51] = Rt, ct[52] = At, ct[53] = Je, ct[54] = uo, ct[55] = Jt, ct[56] = et;
  else et = ct[56];
  return et;
}
function id(h, b) {
  if (b <= sr) return { start: 0, end: b };
  let w = h - 3;
  if (w <= 0) return { start: 0, end: sr - 1 };
  let E = w + sr - 2;
  return E >= b - 1 ? { start: b - sr + 1, end: b } : { start: w, end: E };
}
function ps(h) {
  let w = (0, import_chunk_sng02qpc.k)(8), { enterAction: b } = h, E;
  if (w[0] !== b) E = b && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: ["up", "down"], action: "navigate" }), w[0] = b, w[1] = E;
  else E = w[1];
  let v;
  if (w[2] !== b) v = b && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: b }), w[2] = b, w[3] = v;
  else v = w[3];
  let C;
  if (w[4] === import_chunk_w1d7ygsk.R) C = (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "close" }), w[4] = C;
  else C = w[4];
  let T;
  if (w[5] !== E || w[6] !== v) T = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [E, v, C] }) }) }), w[5] = E, w[6] = v, w[7] = T;
  else T = w[7];
  return T;
}
(0, import_chunk_bs4h6795.G)();
function WR(kt) {
  return kt.voiceState;
}
function GR(Ut) {
  return Ut.voiceWarmingUp;
}
function Lu(h) {
  let Ot = (0, import_chunk_sng02qpc.k)(47), { owners: b, layout: w, onCursorOffsetChange: E, highlights: v, voice: C, isTerminalFocused: T, simpleView: F, hasGroups: A, suggestionList: L, cloudListNotice: J } = h, { view: V, editor: W } = b, { columns: D } = (0, import_chunk_6n6exvyx.qe)(), { query: j, cursorOffset: q, mode: se } = (0, import_chunk_3dxkbe9d.$e)(W), { activeTab: ee, groupEdit: ce, renaming: Z, previewOpen: Y, resumePicker: de, settingPicker: Fe } = (0, import_chunk_3dxkbe9d.$e)(V), Se = (0, import_chunk_snett3g5.qz)(), we = (0, import_chunk_7tdejx4j.uE)(WR), le = (0, import_chunk_7tdejx4j.uE)(GR), { onlyOrigin: ie, byGroup: Oe, filtered: Ae, isBashDispatch: _t, hasDispatch: De, queryIsFilter: mt } = w, to = Z?.jobId ?? null, Ht;
  if (Ot[0] === import_chunk_w1d7ygsk.R) Ht = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "A different way to work with Claude: hand off a bigger task than you would chat through, and Claude organizes it in the sections above so you know when it needs you." }), Ot[0] = Ht;
  else Ht = Ot[0];
  let ke = Ht;
  const Wt = Go();
  let rt;
  if (Ot[1] !== Wt) rt = po("agents:setGroup", Wt), Ot[1] = Wt, Ot[2] = rt;
  else rt = Ot[2];
  let Ue = rt, wt;
  if (Ot[3] !== Oe || Ot[4] !== Ae || Ot[5] !== A || Ot[6] !== j || Ot[7] !== Ue || Ot[8] !== F) wt = !F && Oe && !A && Ae.length > 0 && !j && Ue !== "" ? (0, import_chunk_a46xeenj.o)(import_chunk_5yhrnn87.Jn, { children: ["No groups yet. Press ", Ue, " on a session to tag it."] }) : null, Ot[3] = Oe, Ot[4] = Ae, Ot[5] = A, Ot[6] = j, Ot[7] = Ue, Ot[8] = F, Ot[9] = wt;
  else wt = Ot[9];
  let qt = wt, Qe;
  if (Ot[10] === import_chunk_w1d7ygsk.R) Qe = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", marginTop: -1, height: 1, width: "100%", paddingLeft: 2, paddingRight: 1, flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", overflow: "hidden", children: (0, import_chunk_a46xeenj.e)(import_chunk_8zg5scwx.oKe, {}) }), Ot[10] = Qe;
  else Qe = Ot[10];
  let Yt;
  if (Ot[11] !== J) Yt = J && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, marginBottom: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: J.failed ? "warning" : void 0, dimColor: !J.failed, children: J.text }), J.hint !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", J.hint] })] }) }), Ot[11] = J, Ot[12] = Yt;
  else Yt = Ot[12];
  let ct;
  if (Ot[13] !== ee || Ot[14] !== ie || Ot[15] !== j || Ot[16] !== F) ct = ie && ee !== "remote" && !j && !F && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, marginBottom: 1, children: ke }), Ot[13] = ee, Ot[14] = ie, Ot[15] = j, Ot[16] = F, Ot[17] = ct;
  else ct = Ot[17];
  let je;
  if (Ot[18] !== qt) je = qt && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, marginBottom: 1, children: qt }), Ot[18] = qt, Ot[19] = je;
  else je = Ot[19];
  let Kt;
  if (Ot[20] !== D || Ot[21] !== q || Ot[22] !== se || Ot[23] !== ce || Ot[24] !== De || Ot[25] !== v || Ot[26] !== _t || Ot[27] !== T || Ot[28] !== E || Ot[29] !== Y || Ot[30] !== j || Ot[31] !== mt || Ot[32] !== to || Ot[33] !== de || Ot[34] !== Fe || Ot[35] !== F || Ot[36] !== C || Ot[37] !== Se || Ot[38] !== we || Ot[39] !== le) Kt = F ? null : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", borderStyle: "round", borderLeft: false, borderRight: false, borderColor: _t ? "bashBorder" : void 0, borderDimColor: !_t, children: (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.cA, { query: j, cursorOffset: q, onCursorOffsetChange: E, placeholder: _t || Se && (we !== "idle" || le) ? "" : "describe a task for a new session", prefix: se === "bash" ? "!" : !mt ? import_chunk_7r4ehpnw.xe.pointer : void 0, prefixDim: !De && !_t, prefixColor: _t ? "bashBorder" : void 0, highlights: v, dimRange: C.interimRange ? [C.interimRange.start, C.interimRange.end] : void 0, cursorChar: C.showCursor ? (0, import_chunk_a46xeenj.e)(import_chunk_snett3g5.i8n, {}) : void 0, isFocused: !Y && to === null && ce === null && de === null && Fe === null, isTerminalFocused: T, width: "100%", borderless: true, wrapColumns: D }) }), Ot[20] = D, Ot[21] = q, Ot[22] = se, Ot[23] = ce, Ot[24] = De, Ot[25] = v, Ot[26] = _t, Ot[27] = T, Ot[28] = E, Ot[29] = Y, Ot[30] = j, Ot[31] = mt, Ot[32] = to, Ot[33] = de, Ot[34] = Fe, Ot[35] = F, Ot[36] = C, Ot[37] = Se, Ot[38] = we, Ot[39] = le, Ot[40] = Kt;
  else Kt = Ot[40];
  let Zt;
  if (Ot[41] !== L || Ot[42] !== Yt || Ot[43] !== ct || Ot[44] !== je || Ot[45] !== Kt) Zt = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexShrink: 0, flexDirection: "column", marginTop: 1, children: [Qe, Yt, ct, je, L, null, Kt] }), Ot[41] = L, Ot[42] = Yt, Ot[43] = ct, Ot[44] = je, Ot[45] = Kt, Ot[46] = Zt;
  else Zt = Ot[46];
  return Zt;
}
function Mu(h) {
  let L = (0, import_chunk_sng02qpc.k)(43), { editor: b, selection: w, query: E, dispatchMode: v, collapsed: C, canonicalLauncherCwd: T, storageV5: F } = h, A = (0, import_chunk_bs4h6795.I)(true), J;
  if (L[0] === import_chunk_w1d7ygsk.R) J = () => {
    A.current = true;
  }, L[0] = J;
  else J = L[0];
  let V;
  if (L[1] !== T || L[2] !== F) V = [T, F], L[1] = T, L[2] = F, L[3] = V;
  else V = L[3];
  (0, import_chunk_bs4h6795.H)(J, V);
  let W, D;
  if (L[4] !== b || L[5] !== w) W = () => {
    let j = { text: b.draftForDisk(), sections: w.getSnapshot().collapsed };
    let q = b.subscribe(() => ad(b, w, j, A));
    let se = w.subscribe(() => ad(b, w, j, A));
    return () => {
      q(), se();
    };
  }, D = [b, w], L[4] = b, L[5] = w, L[6] = W, L[7] = D;
  else W = L[6], D = L[7];
  (0, import_chunk_bs4h6795.H)(W, D);
  let ee;
  if (L[8] !== T || L[9] !== b || L[10] !== w || L[11] !== F) ee = () => {
    A.current = false, mi(b, w, T, F);
  }, L[8] = T, L[9] = b, L[10] = w, L[11] = F, L[12] = ee;
  else ee = L[12];
  let ce;
  if (L[13] !== T || L[14] !== C || L[15] !== v || L[16] !== E || L[17] !== F) ce = [E, v, C, T, F], L[13] = T, L[14] = C, L[15] = v, L[16] = E, L[17] = F, L[18] = ce;
  else ce = L[18];
  (0, import_chunk_8bkqeb5d.oo)(ee, 300, ce);
  let Z;
  if (L[19] !== T || L[20] !== b || L[21] !== w || L[22] !== F) Z = () => {
    if (A.current) mi(b, w, T, F);
  }, L[19] = T, L[20] = b, L[21] = w, L[22] = F, L[23] = Z;
  else Z = L[23];
  let Y = (0, import_chunk_bs4h6795.mo)(Z), de;
  if (L[24] !== Y) de = () => () => Y(), L[24] = Y, L[25] = de;
  else de = L[25];
  let Fe;
  if (L[26] === import_chunk_w1d7ygsk.R) Fe = [], L[26] = Fe;
  else Fe = L[26];
  (0, import_chunk_bs4h6795.H)(de, Fe);
  let Se = (0, import_chunk_bs4h6795.I)(false), we, le;
  if (L[27] !== T || L[28] !== b || L[29] !== w || L[30] !== F) we = () => (0, import_chunk_m15w38ag.ne)() && F !== void 0 ? (0, import_chunk_w578pjby.oA)(async () => {
    let ie = b.draftForDisk();
    let Oe = [...w.getSnapshot().collapsed];
    Se.current = ie || Oe.length ? await (0, import_chunk_gzt0mgvc.G3o)(T, { q: ie, collapsed: Oe }, F) : true;
  }) : void 0, le = [T, b, w, F], L[27] = T, L[28] = b, L[29] = w, L[30] = F, L[31] = we, L[32] = le;
  else we = L[31], le = L[32];
  (0, import_chunk_bs4h6795.H)(we, le);
  let Ae, _t;
  if (L[33] !== T || L[34] !== b || L[35] !== w) Ae = () => (0, import_chunk_9zdrdv25.Fz)(() => {
    if (Se.current) {
      return;
    }
    let De = b.draftForDisk();
    let mt = [...w.getSnapshot().collapsed];
    if (De || mt.length) (0, import_chunk_gzt0mgvc.vei)(T, { q: De, collapsed: mt });
  }), _t = [T, b, w], L[33] = T, L[34] = b, L[35] = w, L[36] = Ae, L[37] = _t;
  else Ae = L[36], _t = L[37];
  (0, import_chunk_bs4h6795.H)(Ae, _t);
  let to;
  if (L[38] !== T || L[39] !== b || L[40] !== w || L[41] !== F) to = () => {
    ;
    try {
      let Ht = A.current;
      if (A.current = false, Ht || b.getSnapshot().query) {
        let ke = mi(b, w, T, F);
        (0, import_chunk_w578pjby.oA)(() => ke);
      }
    } catch (Ot) {
      let Wt = Ot;
      (0, import_chunk_k449cc64.i)(Wt);
    }
  }, L[38] = T, L[39] = b, L[40] = w, L[41] = F, L[42] = to;
  else to = L[42];
  return to;
}
function ad(h, b, w, E) {
  let v = h.draftForDisk(), { collapsed: C } = b.getSnapshot();
  if (v !== w.text || C !== w.sections) w.text = v, w.sections = C, E.current = true;
}
function mi(h, b, w, E) {
  let v = h.draftForDisk(), C = [...b.getSnapshot().collapsed];
  return v || C.length ? (0, import_chunk_gzt0mgvc.x9r)(w, { q: v, collapsed: C }, E) : (0, import_chunk_gzt0mgvc.mNa)(w, E);
}
var Au = { pending: null };
class Ng {
  #n = (0, import_chunk_69qhefwa.Be)();
  #e = Au;
  #d = 0;
  #t = 0;
  #r = /* @__PURE__ */ new Set();
  #a;
  constructor(h) {
    this.#a = h.onArm;
  }
  getSnapshot = () => this.#e;
  subscribe = (h) => this.#n.subscribe(h);
  attachView() {
    this.#d++;
    let h = false;
    return () => {
      if (h) return;
      if (h = true, this.#d--, this.#d === 0) this.#r.clear(), this.#t++, this.#e = Au;
    };
  }
  get pending() {
    return this.#e.pending;
  }
  get generation() {
    return this.#t;
  }
  arm(h, b, w = false, E, v) {
    this.#i({ id: h, justKilled: w, group: E, sortKey: v, backend: b });
  }
  armSection(h, b) {
    this.#i({ id: h, justKilled: false, backend: null, memberIds: b });
  }
  armHeader(h) {
    this.#i({ id: h, justKilled: false, backend: null });
  }
  #i(h) {
    this.#a(), this.#r.delete(h.id), this.#e = { pending: h }, this.#n.emit();
  }
  disarm() {
    if (this.#e.pending === null) return;
    this.#e = Au, this.#n.emit();
  }
  dismiss() {
    let h = this.#e.pending;
    if (h === null) return;
    this.#r.add(h.id), this.disarm();
  }
  isDismissed(h) {
    return this.#r.has(h);
  }
}
function Vg(h, b) {
  return h.deleteConfirm ??= new Ng(b);
}
var KR = ["groupMode", "activeTab", "groupEdit", "groupPickIdx", "groupPristine", "resumePicker", "resumePickerIdx", "settingPicker", "settingPickerIdx", "renaming", "previewOpen", "helpOpen", "debugOpen", "exitPending"];
function Jg() {
  return { groupEdit: null, groupPickIdx: -1, groupPristine: false, resumePicker: null, resumePickerIdx: 0, settingPicker: null, settingPickerIdx: 0, renaming: null, previewOpen: false, helpOpen: false, debugOpen: false, exitPending: null };
}
class Bg {
  #n = (0, import_chunk_69qhefwa.Be)();
  #e;
  #d = 0;
  #t = 0;
  #r = null;
  #a = null;
  #i = 0;
  #s = null;
  #l = /* @__PURE__ */ new Set();
  constructor(h) {
    this.#e = { groupMode: h.groupMode, activeTab: h.activeTab ?? "local", ...Jg() };
  }
  getSnapshot = () => this.#e;
  subscribe = (h) => this.#n.subscribe(h);
  #o(h) {
    let b = this.#e, w = { ...b, ...h };
    if (KR.every((E) => Object.is(w[E], b[E]))) return;
    this.#e = w, this.#n.emit();
  }
  attachView(h) {
    this.#d++, this.restrictGroupMode(h.groupsEnabled);
    let b = false;
    return () => {
      if (b) return;
      if (b = true, this.#d--, this.#d === 0) this.#t++, this.#a = null, this.#i = 0, this.#r = null, this.cancelPeekTap(), this.#l.clear(), this.#e = { ...this.#e, ...Jg() };
    };
  }
  setGroupMode(h) {
    this.#o({ groupMode: h });
  }
  restrictGroupMode(h) {
    if (!h && this.#e.groupMode === "group") this.#o({ groupMode: "state" });
  }
  vouchForLink(h) {
    this.#r = h;
  }
  takeVouchedLink(h) {
    let b = this.#r === h;
    return this.#r = null, b;
  }
  setActiveTab(h) {
    this.#t++, this.#r = null, this.#o({ activeTab: h, resumePicker: null, settingPicker: null });
  }
  openGroupEdit(h, b) {
    this.#o({ groupEdit: h, groupPristine: b });
  }
  closeGroupEdit() {
    this.#o({ groupEdit: null, groupPickIdx: -1, groupPristine: false });
  }
  setGroupPickIdx(h) {
    this.#o({ groupPickIdx: h });
  }
  setGroupPristine(h) {
    this.#o({ groupPristine: h });
  }
  openResumePicker() {
    let h = ++this.#t;
    return this.#o({ resumePicker: { entries: null, failed: false }, resumePickerIdx: 0 }), h;
  }
  get resumePickerGen() {
    return this.#t;
  }
  setResumePicker(h) {
    this.#o({ resumePicker: h });
  }
  closeResumePicker() {
    this.#t++, this.#o({ resumePicker: null });
  }
  setResumePickerIdx(h) {
    this.#o({ resumePickerIdx: h });
  }
  get resumePromoteSessionId() {
    return this.#a;
  }
  set resumePromoteSessionId(h) {
    this.#a = h;
  }
  refuseResumePick(h) {
    this.#i = h, this.closeResumePicker();
  }
  get resumePickerRefusedAt() {
    return this.#i;
  }
  clearResumePickerRefusal() {
    this.#i = 0;
  }
  openSettingPicker(h, b) {
    this.#o({ settingPicker: h, settingPickerIdx: b });
  }
  closeSettingPicker() {
    this.#o({ settingPicker: null });
  }
  setSettingPickerIdx(h) {
    this.#o({ settingPickerIdx: h });
  }
  startRename(h, b) {
    this.#o({ renaming: { jobId: h, cloud: b } });
  }
  clearRename() {
    this.#o({ renaming: null });
  }
  setPreviewOpen(h) {
    this.#o({ previewOpen: h });
  }
  schedulePeekTap(h, b) {
    this.cancelPeekTap(), this.#s = h(() => {
      this.#s = null, b();
    });
  }
  cancelPeekTap() {
    if (this.#s === null) return;
    let h = this.#s;
    this.#s = null, h();
  }
  setHelpOpen(h) {
    this.#o({ helpOpen: h });
  }
  setDebugOpen(h) {
    this.#o({ debugOpen: h });
  }
  setExitPending = (h) => {
    this.#o({ exitPending: h });
  };
  firstImpression(h) {
    if (this.#l.has(h)) return false;
    return this.#l.add(h), true;
  }
}
function jg(h, b, w) {
  if (h.view) return h.view;
  let E = (0, import_chunk_865at33z.ge)().fleetViewGroupMode ?? "state";
  return h.view = new Bg({ groupMode: E === "group" && !b ? "state" : E, activeTab: w });
}
function Hg(h, b) {
  if (!h || !b || (0, import_chunk_9e5mdyfk.Wd)(b) || h.settled && !h.ok) return "unknown";
  if (!(!b.intent && !b.name && !b.worktreePath && !b.pinned && b.template === "bg" && b.state === "working" && b.tempo === "blocked" && !((b.inFlight?.tasks ?? 0) > 0) && !(0, import_chunk_q4y63y6c.oV)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) || h.openedThisVisit) return "stays";
  return h.endsOnQuit && b.needs === import_chunk_9e5mdyfk.jv && !b.bridgeSessionId && !b.queuedPrompt && b.inFlight?.tasks === 0 && b.inFlight.queued === 0 ? "ends" : "lapses";
}
function Wg(h) {
  h.quitRequested = true;
}
function Gg(h) {
  if (h.originJobId === void 0) return { kind: "exit" };
  if (h.originSpawn !== void 0 && !h.originSpawn.settled) return { kind: "wait-starting" };
  if (h.originSpawn !== void 0 && !h.originSpawn.ok) return { kind: "exit-with-hint" };
  return h.originRowPresent ? { kind: "attach-origin" } : { kind: "exit-with-hint" };
}
var UR = 300, $R = "Still saving the last rename. Try again in a moment.";
function $g(h) {
  let { roster: b, editor: w, view: E, storageV5: v } = h.submit, { simpleView: C, readRenameDraft: T, clearRename: F } = h, { setError: A, setHint: L } = w, V = E.getSnapshot().renaming?.jobId, W = T().trim();
  if (F(), !V || !W) return;
  if (C && b.jobs?.some((D) => D.id !== V && D.state.name !== void 0 && D.state.name === W)) L(`Another session is already named "${W}"`);
  b.bumpGen(), b.updateJobs((D) => D ? D.map((j) => j.id === V ? { ...j, state: { ...j.state, name: W } } : j) : D), (0, import_chunk_9e5mdyfk.DCe)(V, W, "user", v).then((D) => {
    if (D) {
      (0, import_chunk_cqa9hrgx.u)("fleet_view_rename_job");
      return;
    }
    A("Couldn't rename. The session may have been removed, or its file can't be written."), (0, import_chunk_cqa9hrgx.m)("fleet_view_rename_job", "sync_name_failed"), b.updateJobs((j) => j ? j.map((q) => q.id === V && q.state.name === W ? { ...q, state: { ...q.state, name: void 0 } } : q) : j);
  });
}
function qg(h) {
  let { roster: b, selection: w, editor: E, view: v, storageV5: C } = h.submit, { groupSuggestions: T, readGroupDraft: F, clearGroupEdit: A, ck: L } = h, J = E.setError, { groupEdit: V, groupPickIdx: W } = v.getSnapshot();
  if (!V) {
    A();
    return;
  }
  let D = V.kind === "assign" && W >= 0 ? T[W] : void 0, j = (0, import_chunk_9e5mdyfk.Jas)(D ?? F()) || void 0;
  if (j && (0, import_chunk_9e5mdyfk.Kpr)(j)) return;
  if (V.kind === "assign") {
    let de = Ju(b).find((Se) => Se.id === V.jobId), Fe = de?.state.group;
    if (A(), j !== Fe) qR(h, V.jobId, j, false);
    return;
  }
  let q = V.from;
  if (!j || j === q) {
    A();
    return;
  }
  if (Ju(b).some((Y) => Y.state.group === j)) return;
  A();
  let se = (b.jobs ?? []).filter((Y) => Y.state.group === q && Y.state.backend === "daemon").map((Y) => Y.id);
  w.followOrigin = j, w.followId = null, b.bumpGen(), w.renameCollapsedKey(L(q, "group"), L(j, "group")), b.updateJobs((Y) => Y ? Y.map((de) => de.state.group === q ? { ...de, state: { ...de.state, group: j } } : de) : Y);
  let ee = false, ce = ee ? b.regroupRemoteRows(q, j) : Promise.resolve(true), Z = se.map(b.holdJob);
  Promise.all([ce, ...se.map((Y) => (0, import_chunk_9e5mdyfk.Pao)((0, import_chunk_9e5mdyfk.Bs)(Y), j, C))]).then(([Y]) => {
    if (Y) (0, import_chunk_cqa9hrgx.u)("fleet_view_group_rename");
    else ld(J, "fleet_view_group_rename");
  }).catch((Y) => {
    if ((0, import_chunk_k449cc64.i)(Y), J(`Couldn't rename group: ${(0, import_chunk_jv7av99m.d)(Y)}`), (0, import_chunk_cqa9hrgx.m)("fleet_view_group_rename", "write_group_failed"), b.reload(), ee) b.regroupRemoteRows(j, q);
  }).finally(() => {
    for (let Y of Z) Y();
  });
}
function Vu(h, b, w, E = false) {
  let { roster: v, editor: C } = h.submit, { deleteConfirm: T, actions: F, groupOf: A, simpleView: L } = h, J = C.setError;
  if (!w) return;
  if (w.state.backend !== "daemon") return;
  let V = jo(w.state), W = F.find((q) => q.key === b && q.bands.includes(V));
  if (!W) return;
  let D = (q, se) => {
    if (se instanceof Wi) (0, import_chunk_w578pjby.t)(`[FleetView] action '${q}' unconfirmed: ${(0, import_chunk_jv7av99m.d)(se)}`, { level: "warn" });
    else if ((0, import_chunk_jv7av99m.fn)(se)) (0, import_chunk_w578pjby.t)(`[FleetView] action '${q}' fs failure (${se.code}): ${(0, import_chunk_jv7av99m.d)(se)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(se);
    J(`Couldn't ${q} \u2014 ${(0, import_chunk_jv7av99m.d)(se)}`);
  };
  if (b === "x" && !E && T.pending?.id !== w.id) {
    let q = F.find((Y) => Y.label === "stop"), se = A.get(w.id), ee = Mr(w.state, se), ce = T.generation;
    T.arm(w.id, w.state.backend, W.label === "stop", se, ee);
    let Z = !(L && (0, import_chunk_9e5mdyfk.Wd)(w.state));
    if (q && Z) Promise.resolve(q.run(w, { bulk: E })).catch((Y) => {
      if (T.generation === ce && !v.isDeleting(w.id) && v.jobs?.some((de) => de.id === w.id) && (T.pending === null || T.pending.id === w.id) && !T.isDismissed(w.id)) T.arm(w.id, w.state.backend, false, se, ee);
      D(q.label, Y);
    });
    return;
  }
  T.disarm();
  let j = b === "x" ? F.find((q) => q.label === "remove") ?? W : W;
  Promise.resolve(j.run(w, { bulk: E })).then((q) => {
    if (q) J(q);
  }, (q) => D(j.label, q));
}
function dd(h, b, w) {
  let { rows: E, hasComposedDispatch: v, byState: C, dispatchRepoCwd: T, previewOpen: F } = h, A = E.length;
  if (A === 0) return 0;
  if (v && (C || T)) return b;
  let L = v ? (V) => V?.kind !== "header" || V.group === "pinned" : F ? (V) => V?.kind !== "job" : h.submit.isOnboarding ? (V) => V?.kind === "header" : null, J = (b + w + A) % A;
  if (L) while (J !== b && L(E[J])) J = (J + w + A) % A;
  return J;
}
function Kg(h, b, w) {
  let E = Math.max(0, w - 1);
  if (h.name === "down" || h.ctrl && h.key === "n") return Math.min(E, b + 1);
  if (h.name === "up" || h.ctrl && h.key === "p") return Math.max(0, b - 1);
  let v = sr - 2;
  switch (h.name) {
    case "home":
      return 0;
    case "end":
      return E;
    case "pageup":
      return Math.max(0, b - v);
    case "pagedown":
      return Math.min(E, b + v);
    default:
      return null;
  }
}
function Ug(h, b, w) {
  if (b !== "agents:nextGroup" && b !== "agents:previousGroup") return null;
  let { rows: E, hasComposedDispatch: v, previewOpen: C } = h;
  if (h.submit.suggestions.length > 0 || C || v || !E.some((A) => A.kind === "header")) return null;
  let T = b === "agents:nextGroup" ? 1 : -1, F = w + T;
  while (E[F] && E[F]?.kind !== "header") F += T;
  return E[F] ? F : w;
}
function qR(h, b, w, E) {
  let { roster: v, selection: C, editor: T, storageV5: F } = h.submit, { ck: A } = h, L = T.setError, J = w !== void 0 && !Ju(v).some((D) => D.id !== b && D.state.group === w), V = w === void 0 ? "fleet_view_group_ungroup" : J ? "fleet_view_group_create" : "fleet_view_group_assign";
  if (C.followId = E ? v.getSnapshot().remoteJobs.find((D) => In(D) === b)?.id ?? b : b, E) {
    C.uncollapse(A(w ?? import_chunk_9e5mdyfk.L6, "group")), v.markRemoteRow(b, (D) => ({ ...D, group: w })).then((D) => {
      if (D) (0, import_chunk_cqa9hrgx.u)(V);
      else ld(L, V);
    });
    return;
  }
  v.bumpGen(), v.updateJobs((D) => D ? D.map((j) => j.id === b ? { ...j, state: { ...j.state, group: w } } : j) : D), C.uncollapse(A(w ?? import_chunk_9e5mdyfk.L6, "group"));
  let W = v.holdJob(b);
  (0, import_chunk_9e5mdyfk.Pao)((0, import_chunk_9e5mdyfk.Bs)(b), w, F).then(() => {
    (0, import_chunk_cqa9hrgx.u)(V);
  }).catch((D) => {
    (0, import_chunk_k449cc64.i)(D), L(`Couldn't set group: ${(0, import_chunk_jv7av99m.d)(D)}`), (0, import_chunk_cqa9hrgx.m)(V, "write_group_failed"), v.reload();
  }).finally(W);
}
function YR(h, b) {
  let { roster: w, selection: E, editor: v, storageV5: C } = h.submit, { ck: T } = h, F = v.setError, A = (w.jobs ?? []).filter((V) => V.state.group === b && V.state.backend === "daemon").map((V) => V.id);
  E.followOrigin = import_chunk_9e5mdyfk.L6, E.followId = null, w.bumpGen(), E.uncollapse(T(b, "group"), T(import_chunk_9e5mdyfk.L6, "group")), w.updateJobs((V) => V ? V.map((W) => W.state.group === b ? { ...W, state: { ...W.state, group: void 0 } } : W) : V);
  let L = Promise.resolve(true), J = A.map(w.holdJob);
  Promise.all([L, ...A.map((V) => (0, import_chunk_9e5mdyfk.Pao)((0, import_chunk_9e5mdyfk.Bs)(V), void 0, C))]).then(([V]) => {
    if (V) (0, import_chunk_cqa9hrgx.u)("fleet_view_group_delete");
    else ld(F, "fleet_view_group_delete");
  }).catch((V) => {
    (0, import_chunk_k449cc64.i)(V), F(`Couldn't remove group: ${(0, import_chunk_jv7av99m.d)(V)}`), (0, import_chunk_cqa9hrgx.m)("fleet_view_group_delete", "write_group_failed"), w.reload();
  }).finally(() => {
    for (let V of J) V();
  });
}
function ld(h, b) {
}
function Ju(h) {
  return h.jobs ?? [];
}
function zR(h, b) {
  let { roster: w, selection: E, editor: v } = h.submit, { rows: C, pendings: T, byGroup: F, byState: A, simpleView: L } = h, J = v.setError;
  if (E.reorderIssued) return;
  let V = E.getSnapshot().focusedIdx, W = C[V];
  if (W?.kind !== "job") return;
  let D = V + b;
  for (; ; ) {
    let we = C[D];
    if (we?.kind !== "earlier" && !(we?.kind === "job" && we.job.state.backend === "remote")) break;
    D += b;
  }
  let j = C[D];
  if (j?.kind !== "job" || W.group !== j.group) return;
  let q = W.job, se = j.job;
  if (T.some((we) => we.id === q.id || we.id === se.id)) return;
  if (q.state.backend !== "daemon" || se.state.backend !== "daemon") return;
  J(null);
  let ee = W.group === "pinned" || W.group === qr;
  if ((F || L) && !ee) return;
  let ce = A && !ee, Z = ce ? (we) => Mr(we, W.group) : Ys, Y = Z(q.state), de = Z(se.state), Fe = /* @__PURE__ */ new Map();
  if (Y === de) {
    let we = new Set(T.map((Oe) => Oe.id)), le = 0;
    for (let Oe of C) if (Oe.kind === "job" && Oe.group === W.group && Oe.job.state.backend !== "remote" && !we.has(Oe.job.id)) Fe.set(Oe.job.id, le++);
    let ie = Fe.get(q.id);
    Fe.set(q.id, Fe.get(se.id)), Fe.set(se.id, ie);
  } else Fe.set(q.id, de), Fe.set(se.id, Y);
  E.beginReorder(q.id, D), w.bumpGen();
  let Se = ce ? "stateSortOrder" : "sortOrder";
  w.updateJobs((we) => we ? ar(we.map((le) => {
    let ie = Fe.get(le.id);
    return ie === void 0 ? le : { ...le, state: { ...le.state, [Se]: ie } };
  })) : we), E.queueOrderWrites(Fe, ce ? "state" : "directory");
}
function Yg(h, b) {
  let { editor: w, roster: E, selection: v, view: C, attach: T, storageV5: F, onAction: A, exit: L, searchKeyDown: J, vimMode: V, dispatchInputActive: W, clearDraft: D, escapeDraft: j, templates: q, suggestions: se, pickSuggestion: ee, applySuggestion: ce, jobSessionIds: Z, focusedRow: Y, focused: de, openEarlier: Fe, openNewSessionRow: Se, openOrRespawn: we } = h.submit, { deleteConfirm: le, rows: ie, focusedIdx: Oe, altOpenOrigin: Ae, byGroup: _t, hasComposedDispatch: De, headerJobs: mt, groupSuggestions: to, previewOpen: Ot, helpOpen: Ht, debugOpen: ke, groupEdit: Wt, renamingJobId: rt, attachingJobId: Ue, showAllAgents: wt, jobs: qt, pendings: Qe, keybindings: Yt, simpleView: ct, groupsEnabled: je, hasCredentials: Kt, termRows: Zt, canGoBack: kt, originJobId: Ut, originSpawn: Ie, renameKeyDown: yt, groupKeyDown: Ye, setQuery: st, enterInsertMode: Ze, setRenameDraft: St, setGroupDraft: pt, readGroupDraft: at, pressExitKey: Le, switchTab: $t, clearRename: Gt, clearGroupEdit: Rt, headerArmId: He, ck: ft, setShowAllAgents: ot, setSelectedSuggestion: Ft, setHoveredSuggestionId: Ge, attachPastedImage: We } = h, Lt = (Pe) => w.setMode(Pe), { setError: Ne, setHint: lo } = w, At = () => Hi(T, w);
  if (b.key !== " ") C.cancelPeekTap();
  if (/^(up|down|left|right|home|end|pageup|pagedown)$/.test(b.name) || b.ctrl && (b.key === "n" || b.key === "p")) le.dismiss();
  if (ct && le.pending !== null && !(b.ctrl && b.key === "x") && b.name !== "escape") le.disarm();
  let Je = () => {
    b.preventDefault(), b.stopImmediatePropagation();
  };
  if (rt !== null || C.getSnapshot().renaming !== null) {
    if (Je(), b.ctrl && b.key === "c") {
      Gt();
      return;
    }
    if (b.name === "up" || b.name === "down") return;
    yt(b);
    return;
  }
  if (Wt !== null) {
    if (Je(), b.ctrl && b.key === "c") {
      Rt();
      return;
    }
    if (C.getSnapshot().groupPristine) {
      if (b.name === "backspace" || b.name === "delete" || b.ctrl && (b.key === "u" || b.key === "w" || b.key === "k")) {
        pt(""), C.setGroupPristine(false);
        return;
      }
      switch (b.name) {
        case "return":
        case "escape":
        case "up":
        case "down":
        case "tab":
          break;
        case "left":
        case "right":
        case "home":
        case "end":
        case "pageup":
        case "pagedown":
        case "insert":
        case "wheelup":
        case "wheeldown":
          C.setGroupPristine(false);
          return;
        default:
          if (b.name.startsWith("f") && /^f\d+$/.test(b.name)) return;
          if (!b.ctrl && !b.meta) {
            pt(""), C.setGroupPristine(false), Ye(b);
            return;
          }
          return;
      }
    }
    if (Wt.kind === "rename") {
      if (b.name === "up" || b.name === "down") return;
      Ye(b);
      return;
    }
    let Pe = to, lt = at().trim(), gt = lt === "" || lt === Wt.cur, Dt = C.getSnapshot().groupPickIdx;
    if (b.name === "down") {
      if (Pe.length > 0 && !gt) C.setGroupPickIdx(Math.min(Dt + 1, Pe.length - 1));
      return;
    }
    if (b.name === "up") {
      C.setGroupPickIdx(Math.max(Dt - 1, -1));
      return;
    }
    if (b.name === "left" && Dt >= 0) {
      C.setGroupPickIdx(-1);
      return;
    }
    if (b.name === "tab") {
      if (gt) return;
      let eo = Pe[Math.max(Dt, 0)];
      if (eo !== void 0) pt(eo), C.setGroupPickIdx(-1);
      return;
    }
    if (b.name !== "return") C.setGroupPickIdx(-1);
    Ye(b);
    return;
  }
  let io = C.getSnapshot().resumePicker;
  if (io !== null) {
    if (Je(), b.ctrl && b.key === "c" || b.name === "escape" || b.meta) {
      C.closeResumePicker();
      return;
    }
    let Pe = io.entries, lt = Pe?.length ?? 0, gt = C.getSnapshot().resumePickerIdx, Dt = Kg(b, gt, lt);
    if (Dt !== null) {
      C.setResumePickerIdx(Dt);
      return;
    }
    if (b.name === "return") {
      let eo = Pe?.[gt];
      if (eo !== void 0) {
        let So = E.isDeleting(eo.sessionId.slice(0, 8)) || E.isDeletingSession(eo.sessionId);
        if (Z.has(eo.sessionId) || So) {
          (0, import_chunk_cqa9hrgx.l)("fleet_view_resume_picker", So ? "deleting_in_flight" : "already_in_list"), C.refuseResumePick(Date.now()), Ne(So ? "This session is being removed. Reopen /resume once it finishes" : "This session is already in the list. Press Enter on its row");
          return;
        }
        C.resumePromoteSessionId = eo.sessionId, C.closeResumePicker(), Fe(eo, "resume_picker");
      }
      return;
    }
    return;
  }
  let uo = C.getSnapshot().settingPicker;
  if (uo !== null) {
    if (Je(), b.ctrl && b.key === "c" || b.name === "escape" || b.meta) {
      C.closeSettingPicker();
      return;
    }
    let Pe = C.getSnapshot().settingPickerIdx, lt = Kg(b, Pe, uo.options.length);
    if (lt !== null) {
      C.setSettingPickerIdx(lt);
      return;
    }
    if (b.name === "return") {
      let gt = uo.options[Pe];
      if (C.closeSettingPicker(), gt !== void 0) Vr(w, h.submit.dispatchDefaults, uo.setting, gt.value, C.getSnapshot().activeTab === "remote");
    }
    return;
  }
  if (C.resumePickerRefusedAt !== 0) {
    let Pe = Date.now() - C.resumePickerRefusedAt;
    if (Pe >= 0 && Pe < UR && b.name === "return") {
      Je();
      return;
    }
    C.clearResumePickerRefusal();
  }
  let Jt = C.resumePromoteSessionId;
  if (Jt !== null && Ue === null && T.isPromoting(Jt)) {
    if (Je(), b.ctrl && b.key === "c" || b.name === "escape") C.resumePromoteSessionId = null;
    return;
  }
  if (C.resumePromoteSessionId = null, T.getSnapshot().newSessionOpening) {
    if (Je(), b.ctrl && b.key === "c" || b.name === "escape") T.abandonNewSession();
    return;
  }
  let xt = rs((0, import_chunk_y8kqnbqt.VCe)(b), Yt);
  if (Ue !== null) {
    if (Je(), b.ctrl && b.key === "c" || b.name === "escape") {
      T.abandonRespawnAttempt();
      let Pe = T.disarm();
      if (Pe !== null) (0, import_chunk_4we2aqs8.D2)(Pe, F).catch(() => {
      });
      T.dropWarming(Ue);
      return;
    }
    if (!b.shift && (b.name === "up" || b.name === "down" || b.ctrl && (b.key === "p" || b.key === "n"))) {
      if (se.length > 0 || (b.name === "up" || b.name === "down") && !Ot && w.getSnapshot().query.includes(`
`) || (Ug(h, xt, Oe) ?? dd(h, Oe, b.name === "down" || b.key === "n" ? 1 : -1)) === Oe) return;
      T.abandonRespawnAttempt();
      let Pe = T.disarm();
      if (Pe !== null) (0, import_chunk_4we2aqs8.D2)(Pe, F).catch(() => {
      });
    } else return;
  }
  if (b.ctrl && b.key === "c") {
    if (Je(), Ht || ke) {
      C.setHelpOpen(false), C.setDebugOpen(false);
      return;
    }
    if (w.getSnapshot().query) D();
    if (w.getSnapshot().mode === "bash") Lt("prompt");
    Le("Ctrl-C");
    return;
  }
  if (b.name === "escape") {
    if (Je(), Ot) C.setPreviewOpen(false);
    else if (Ht) C.setHelpOpen(false);
    else if (ke) C.setDebugOpen(false);
    else if (wt) ot(false);
    else if (V !== void 0 && W && (V !== "NORMAL" || w.getSnapshot().query !== "")) {
      if (le.pending) le.dismiss();
      J(b);
    } else if (w.getSnapshot().query) {
      if (le.pending && h.hasComposedDispatch) le.dismiss();
      j();
    } else if (w.getSnapshot().mode === "bash") Lt("prompt");
    else if (le.pending) le.dismiss();
    else if (w.getSnapshot().hint === Ar) lo(null);
    else switch (Gg({ originJobId: Ut, originRowPresent: Ut !== void 0 && (qt?.some((lt) => lt.id === Ut) ?? false), originSpawn: Ie }).kind) {
      case "attach-origin":
        we(qt?.find((lt) => lt.id === Ut), "esc");
        break;
      case "wait-starting":
        Ne(en);
        break;
      case "exit-with-hint":
        if (Ie) Ie.resumeHintRequested = true;
        L();
        break;
      case "exit":
        L();
        break;
    }
    return;
  }
  if (Ht && b.key !== "?" && b.name !== "up" && b.name !== "down" && !(b.ctrl && (b.key === "p" || b.key === "n"))) C.setHelpOpen(false);
  if (b.shift && (b.name === "up" || b.name === "down") && se.length === 0 && !Ot) {
    Je(), zR(h, b.name === "up" ? -1 : 1);
    return;
  }
  if (xt === "agents:switchView") {
    if (Je(), ct) return;
    if (!v.getSnapshot().draftPick) v.followId = de?.id ?? null, v.followOrigin = null;
    le.disarm();
    let Pe = je ? ["state", "directory", "group"] : ["state", "directory"], lt = Pe.indexOf(C.getSnapshot().groupMode), gt = Pe[(lt + 1) % Pe.length];
    if (gt === "group") (0, import_chunk_cqa9hrgx.u)("fleet_view_group_mode");
    C.setGroupMode(gt), (0, import_chunk_865at33z.Ke)((Dt) => Dt.fleetViewGroupMode === gt ? Dt : { ...Dt, fleetViewGroupMode: gt }, F);
    return;
  }
  if (xt === "chat:externalEditor" && !Ot && !ct) {
    Je();
    let Pe = (0, import_chunk_wbg8x4na.qte)(w.getSnapshot().query);
    if (Pe.content !== null && Pe.content !== w.getSnapshot().query) st(Pe.content);
    if (Pe.error) Ne(Pe.error);
    return;
  }
  if (xt === "agents:togglePin") {
    Je();
    let Pe = ie[v.getSnapshot().focusedIdx], lt = Pe?.kind === "job" ? Pe.job : void 0;
    if (!lt || Qe.some((no) => no.id === lt.id)) return;
    let gt = false, Dt = gt ? In(lt) : void 0;
    if (gt && Dt === void 0) {
      Ne(en);
      return;
    }
    let eo = lt.id, ao = !((gt ? E.getSnapshot().remoteJobs : E.jobs)?.find((no) => no.id === eo)?.state.pinned ?? lt.state.pinned);
    if (v.followId = eo, ao) v.uncollapse(ft("pinned"));
    if (gt && Dt !== void 0) {
      if (w.getSnapshot().error === en) Ne(null);
      E.markRemoteRow(Dt, (no) => ({ ...no, pinned: ao ? true : void 0 })).then((no) => {
        if (no) (0, import_chunk_cqa9hrgx.u)("fleet_view_pin_toggle");
        else ld(Ne, "fleet_view_pin_toggle");
      });
      return;
    }
    E.bumpGen(), E.updateJobs((no) => no?.map((ko) => ko.id === eo ? { ...ko, state: { ...ko.state, pinned: ao } } : ko) ?? no);
    let wo = E.holdJob(eo);
    (0, import_chunk_9e5mdyfk.Oao)(eo, ao, F).then(() => {
      (0, import_chunk_cqa9hrgx.u)("fleet_view_pin_toggle");
    }).catch((no) => {
      (0, import_chunk_k449cc64.i)(no), Ne(`Couldn't ${ao ? "pin" : "unpin"} \u2014 ${(0, import_chunk_jv7av99m.d)(no)}`), (0, import_chunk_cqa9hrgx.m)("fleet_view_pin_toggle", "pin_write_failed"), E.reload();
    }).finally(wo);
    return;
  }
  let et = xt === "agents:find" && !Ot && !ct && w.getSnapshot().mode === "prompt" ? Ji(w.getSnapshot().query) : null;
  if (et !== null) {
    Je();
    let { query: Pe, cursorOffset: lt } = w.getSnapshot(), gt = Pe.trimStart(), Dt = Math.max(0, lt - (Pe.length - gt.length));
    if (w.setQueryAndCursor(et, V === void 0 ? Math.max(0, Dt + et.length - gt.length) : et.length), Ze(), et.length > gt.length && C.firstImpression("find")) (0, import_chunk_cqa9hrgx.u)("fleet_view_find");
    return;
  }
  let co = v.getSnapshot().focusedIdx, Eo = Ug(h, xt, co);
  if (Eo !== null) {
    if (Je(), Ne(null), le.disarm(), Eo !== co) {
      if (v.jumpToHeader(Eo, ie[Eo]), C.firstImpression("groupJump")) (0, import_chunk_cqa9hrgx.u)("fleet_view_group_jump");
    }
    return;
  }
  if (xt === "agents:rename") {
    if (Je(), _t && Y?.kind === "header" && Y.group !== import_chunk_9e5mdyfk.L6 && Y.group !== "pinned" && Y.group !== import_chunk_9e5mdyfk.rU) {
      pt(Y.group), At(), C.openGroupEdit({ kind: "rename", from: Y.group }, true);
      return;
    }
    if (!de || Qe.some((gt) => gt.id === de.id)) return;
    let Pe = false;
    if (Pe && !Hd(de.id)) {
      Ne(en);
      return;
    }
    if (Pe && E.isRetitling(de.id)) {
      Ne($R);
      return;
    }
    let lt = (0, import_chunk_7cfjrnwy.Wr)(de.state.name ?? "");
    if (Pe && w.getSnapshot().error === en) Ne(null);
    St(lt), At(), C.startRename(de.id, Pe ? { sessionId: de.state.sessionId, prefill: lt } : null);
    return;
  }
  if (je && xt === "agents:setGroup" && !Ot && w.getSnapshot().query === "") {
    let gt = !!de && (Qe.some((Dt) => Dt.id === de.id) || false);
    if (!de || gt) {
      Je();
      let Dt = po("agents:rename", Yt);
      Ne(!de ? Y?.kind === "header" ? `${po("agents:setGroup", Yt)} groups a session. Focus a session row${Dt && ` (${Dt} renames this group)`}` : null : en);
      return;
    }
    Je(), pt(de.state.group ?? ""), At(), C.openGroupEdit({ kind: "assign", jobId: de.id, cur: de.state.group }, !!de.state.group);
    return;
  }
  if (b.name === "up" || b.ctrl && b.key === "p") {
    if (Je(), se.length > 0) {
      Ge(null), Ft((lt) => Math.max(0, lt - 1));
      return;
    }
    if (b.name === "up" && !Ot && w.getSnapshot().query.includes(`
`)) {
      J(b);
      return;
    }
    Ne(null);
    let Pe = dd(h, v.getSnapshot().focusedIdx, -1);
    v.navigateTo(Pe, ie[Pe]);
    return;
  }
  if ((b.name === "home" || b.name === "end" || b.name === "pageup" || b.name === "pagedown") && se.length === 0 && !De) {
    Je(), Ne(null);
    let Pe = Math.max(1, Zt - 6), lt = ie.length;
    if (lt === 0) {
      v.setHoverFocusIdx(null), v.focus(0);
      return;
    }
    let gt = v.getSnapshot().focusedIdx, Dt = b.name === "home" ? 0 : b.name === "end" ? lt - 1 : b.name === "pageup" ? gt - Pe : gt + Pe, eo = Math.max(0, Math.min(lt - 1, Dt)), So = h.submit.isOnboarding && ie[eo]?.kind === "header" ? dd(h, eo, Dt < gt || b.name === "home" ? 1 : -1) : eo;
    v.navigateTo(So, ie[So]);
    return;
  }
  if (b.name === "down" || b.ctrl && b.key === "n") {
    if (Je(), se.length > 0) {
      Ge(null), Ft((lt) => Math.min(se.length - 1, lt + 1));
      return;
    }
    if (b.name === "down" && !Ot && w.getSnapshot().query.includes(`
`)) {
      J(b);
      return;
    }
    Ne(null);
    let Pe = dd(h, v.getSnapshot().focusedIdx, 1);
    v.navigateTo(Pe, ie[Pe]);
    return;
  }
  if (Ot && b.ctrl && b.key === "x") {
    if (Je(), de && Qe.some((gt) => gt.id === de.id)) return;
    let Pe = ie[v.getSnapshot().focusedIdx], lt = Pe?.kind === "job" ? Pe.job : void 0;
    if (le.pending !== null && lt !== void 0 && le.pending.id !== lt.id) le.disarm();
    Vu(h, "x", lt);
    return;
  }
  if (Ot) return;
  if (b.name === "tab") {
    if (Je(), ct) return;
    if (!w.getSnapshot().query && w.getSnapshot().mode === "prompt" && q.length > 0) ot((Pe) => !Pe);
    else if (se.length > 0) ce(ee());
    return;
  }
  if (b.name === "right" && !b.shift && !w.getSnapshot().query && w.getSnapshot().mode === "prompt" && !Ot) {
    if (Je(), Y?.kind === "earlier") Fe(Y.entry, "section");
    else if (Y?.kind === "newsession") Se(Y.origin);
    else we(de);
    return;
  }
  if ((b.meta || b.superKey) && /^[1-9]$/.test(b.shortcutKey)) {
    Je();
    let Pe = Number(b.shortcutKey), lt = ie.find((gt) => gt.kind === "job" && gt.origin === Ae && --Pe === 0);
    if (lt?.kind === "job") we(lt.job);
    return;
  }
  if (b.name === "return") {
    Wp(h.submit, b);
    return;
  }
  if (b.ctrl && b.key === "x") {
    if (Je(), se.length > 0) return;
    let Pe = ie[v.getSnapshot().focusedIdx], lt = Pe?.kind === "header" && Pe.group === Y?.group;
    if (!De && _t && Y?.kind === "header" && lt) {
      if (Y.group === "pinned" || Y.group === import_chunk_9e5mdyfk.L6 || Y.group === import_chunk_9e5mdyfk.rU) {
        Ne(`${Y.group === "pinned" ? "Pinned" : Y.group === import_chunk_9e5mdyfk.L6 ? "Ungrouped" : "Past"} is reserved and can't be ungrouped`);
        return;
      }
      if (v.followOrigin = Y.group, v.followId = null, le.pending?.id !== He(Y.group)) {
        le.armHeader(He(Y.group));
        return;
      }
      le.disarm(), YR(h, Y.group);
      return;
    }
    if (!De && Y?.kind === "header" && lt && mt.length > 0) {
      v.followOrigin = Y.group, v.followId = null;
      let Dt = He(Y.group), eo = le.pending?.id === Dt ? le.pending.memberIds : void 0, So = eo ? mt.filter((ao) => eo.has(ao.id) && !Qe.some((wo) => wo.id === ao.id)) : [];
      if (So.length === 0) {
        le.armSection(Dt, new Set(mt.map((ao) => ao.id)));
        return;
      }
      le.disarm();
      for (let ao of So) Vu(h, "x", ao, true);
      return;
    }
    let gt = Pe?.kind === "job" ? Pe.job : void 0;
    if (le.pending !== null && le.pending.id !== gt?.id) le.disarm();
    if (gt && Qe.some((Dt) => Dt.id === gt.id)) return;
    Vu(h, "x", gt);
    return;
  }
  if (b.ctrl && b.key === "d" && (ct || w.getSnapshot().query === "")) {
    if (Je(), Ht || C.getSnapshot().debugOpen) {
      C.setDebugOpen(false);
      return;
    }
    let Pe = w.getSnapshot();
    if (Pe.mode === "bash" && Pe.query === "") Lt("prompt");
    Le("Ctrl-D");
    return;
  }
  if (b.ctrl && b.key, b.key === "?" && w.getSnapshot().query === "" && w.getSnapshot().mode === "prompt") {
    Je();
    let Pe = C.getSnapshot().helpOpen;
    if (!Pe) At();
    C.setHelpOpen(!Pe), (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.S)("help_toggled") });
    return;
  }
  if (fa(b) && !ct) {
    Je(), ma((Pe) => We(Pe.base64, { mediaType: Pe.mediaType, dimensions: Pe.dimensions }), lo);
    return;
  }
  if ((0, import_chunk_95amtstn.t9t)() && !ct && (0, import_chunk_5h9h52az.WEn)(b.key) && !w.getSnapshot().query && w.getSnapshot().mode === "prompt") {
    Je(), Lt("bash");
    return;
  }
  if (b.name === "backspace" && !w.getSnapshot().query && w.getSnapshot().mode === "bash") {
    Je(), Lt("prompt");
    return;
  }
  if (ct && !Ot && rt === null) {
    if (b.key === "q" && !b.ctrl) Je(), Le("Ctrl-C");
    if (b.key === "l" && !b.ctrl && !Kt) Je(), A({ type: "login" });
    return;
  }
  J(b);
}
var Bu = {}, ju = {};
class Qg {
  #n = (0, import_chunk_69qhefwa.Be)();
  #e = { templates: /* @__PURE__ */ new Map(), skills: /* @__PURE__ */ new Map(), routines: /* @__PURE__ */ new Map(), childRepos: /* @__PURE__ */ new Map(), repoWorktrees: /* @__PURE__ */ new Map() };
  #d = /* @__PURE__ */ new Set();
  getSnapshot = () => this.#e;
  subscribe = (h) => this.#n.subscribe(h);
  #t(h) {
    this.#e = { ...this.#e, ...h }, this.#n.emit();
  }
  loadLauncher(h) {
    this.#r(h, { rescanKnown: false });
  }
  refreshLauncher(h) {
    this.#r(h, { rescanKnown: true });
  }
  #r(h, { rescanKnown: b }) {
    if (this.#d.has(h)) return;
    let w = [];
    if (b || !this.#e.childRepos.has(h)) w.push((0, import_chunk_95amtstn.w_a)(h).then((E) => {
      let v = zg(this.#e.childRepos, h, E, Bu);
      if (v) this.#t({ childRepos: v });
    }));
    if (b || !this.#e.repoWorktrees.has(h)) w.push((0, import_chunk_bzyb60p0.Fui)(h).then((E) => {
      if (E === null) return;
      let v = zg(this.#e.repoWorktrees, h, E, ju);
      if (v) this.#t({ repoWorktrees: v });
    }).catch(() => {
    }));
    if (w.length === 0) return;
    this.#d.add(h), Promise.all(w).finally(() => {
      this.#d.delete(h);
    });
  }
  loadTarget(h, b) {
    let w = false;
    if (!this.#e.templates.has(h)) (0, import_chunk_95amtstn.EYn)(h, b).catch(() => []).then((E) => {
      if (!w && !this.#e.templates.has(h)) this.#t({ templates: new Map(this.#e.templates).set(h, E) });
    });
    if (!this.#e.skills.has(h)) (0, import_chunk_bzyb60p0.Fm)(h, b).catch(() => []).then((E) => {
      if (w || this.#e.skills.has(h)) return;
      let v = E.filter((C) => !C.isHidden && !(0, import_chunk_tfs0ssqe.vA)(C)).map((C) => ({ kind: C.type !== "prompt" ? "command" : C.kind === "workflow" ? "workflow" : "skill", name: C.name, aliases: C.aliases, description: C.type !== "prompt" && Np.get(C.name) || (0, import_chunk_7cfjrnwy.Ir)((0, import_chunk_bzyb60p0.Rrt)(C) ?? "") }));
      this.#t({ skills: new Map(this.#e.skills).set(h, v) });
    });
    return () => {
      w = true;
    };
  }
}
function Xg(h) {
  return h.scope ??= new Qg();
}
function zg(h, b, w, E) {
  let v = Object.keys(w).length > 0 ? w : E;
  if ((0, import_util.isDeepStrictEqual)(h.get(b), v)) return null;
  return new Map(h).set(b, v);
}
(0, import_chunk_bs4h6795.G)();
var XR = 120, Zg = "idle-seed";
function ZR(h, b, w) {
  let E = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), C = [], T = [];
  for (let F of b) {
    let A = h.get(F.id), L = F.band === "blocked" && F.needs === import_chunk_9e5mdyfk.jv;
    E.set(F.id, L ? A ?? Zg : F.band);
    let J = F.state === "blocked" ? w.get(F.id) : void 0;
    if (J !== void 0) v.set(F.id, J);
    if (A === void 0 || A === F.band || L) continue;
    switch (F.band) {
      case "blocked": {
        let V = F.state === "blocked" ? F.askId : void 0;
        if (V !== void 0 && V === J) break;
        if (V !== void 0) v.set(F.id, V);
        C.push({ message: F.needs ? `${F.label} needs your input: ${(0, import_chunk_r3wrey46.Sh)(F.needs, XR)}` : `${F.label} needs your input`, notificationType: "agent_needs_input" }), T.push({ sessionId: F.sessionId, kind: "needs_input" });
        break;
      }
      case "completed":
        if (F.outcome !== "stopped" && !F.selfDriving && !(A === Zg && F.outcome === "success")) C.push({ message: `${F.label} ${F.outcome === "failure" ? "failed" : "finished"}`, notificationType: "agent_completed" }), T.push({ sessionId: F.sessionId, kind: "completed" });
        break;
      case "active":
        break;
    }
  }
  return { next: E, asked: v, notifications: C, notified: T };
}
function eh(h, b) {
  let w = (0, import_chunk_3jkk3v3z.e6)(), { storageV5: E, credentials: v } = (0, import_chunk_3jkk3v3z.Ve)(), C = (0, import_chunk_bs4h6795.I)(/* @__PURE__ */ new Map()), T = (0, import_chunk_bs4h6795.I)(/* @__PURE__ */ new Map());
  (0, import_chunk_bs4h6795.H)(() => {
    let { next: F, asked: A, notifications: L, notified: J } = ZR(C.current, h, T.current);
    C.current = F, T.current = A;
    for (let W of L) (0, import_chunk_hxcebha8.j3)(W, w, { storageV5: E, credentials: v });
    let V = Date.now();
    for (let W of J) if (Oc(b, W.sessionId, W.kind, V)) (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_notification", { kind: (0, import_chunk_78g0060s.f)(W.kind), jobSessionId: (0, import_chunk_49zxha55.Ce)(W.sessionId) });
  });
}
var tk = [], Hu = "esc again to clear";
function th({ onAction: h, initialJobId: b, originJobId: w, originSpawn: E, cwdFilter: v, dispatchDefaults: C, typedAgent: T, canGoBack: F, autoOpenJobId: A, entryChannel: L, relaunchTab: J, typedAhead: V, fromLauncher: W, awayLoop: D, host: j, storageV5: q }) {
  let se = (0, import_chunk_8bkqeb5d.ir)(), { stdin: ee, isRawModeSupported: ce } = (0, import_chunk_3jkk3v3z.BI)(), { credentials: Z } = (0, import_chunk_3jkk3v3z.Ve)(), Y = Go(), de = (0, import_chunk_zwfq7wpn.pSi)(), Fe = !de || !!b?.startsWith("remote-");
  (0, import_chunk_8bkqeb5d.oo)(() => {
    if (!ce) return;
    let z = ee.listenerCount("readable");
    if (z > 1) (0, import_chunk_y53wbr8a.a)("tengu_fleetview_stdin_contention", { listeners: z });
  }, 1500, []);
  let [Se] = (0, import_chunk_bs4h6795.y)(() => D ?? Fs()), [we] = (0, import_chunk_bs4h6795.y)(() => j ?? (0, import_chunk_amwj5gqt._5t)()), [le] = (0, import_chunk_bs4h6795.y)(() => Vi(we, q)), { jobs: ie, remoteJobs: Oe, remoteListLoaded: Ae, remoteListFailure: _t, remoteListHasOlder: De, pendings: mt, prStatuses: to, loopKicks: Ot, overlaidLoadLanded: Ht } = (0, import_chunk_3dxkbe9d.$e)(le), [ke] = (0, import_chunk_bs4h6795.y)(() => Zs(we, le, q)), { focusedIdx: Wt, hoverFocusIdx: rt, collapsed: Ue, capExpanded: wt, draftPick: qt, followOrigin: Qe } = (0, import_chunk_3dxkbe9d.$e)(ke), Yt = false, ct = (0, import_chunk_bs4h6795.I)(false), [je] = (0, import_chunk_bs4h6795.y)(() => jg(we, Yt, "local")), { groupMode: Kt, activeTab: Zt, groupEdit: kt, resumePicker: Ut, settingPicker: Ie, renaming: yt, previewOpen: Ye, helpOpen: st, debugOpen: Ze } = (0, import_chunk_3dxkbe9d.$e)(je), [St] = (0, import_chunk_bs4h6795.y)(() => ta(we)), { attachingJobId: pt, autoOpened: at } = (0, import_chunk_3dxkbe9d.$e)(St), [Le] = (0, import_chunk_bs4h6795.y)(() => ra(we)), { mode: $t, expandHintPasteId: Gt, hint: Rt } = (0, import_chunk_3dxkbe9d.$e)(Le), [He] = (0, import_chunk_bs4h6795.y)(() => Vg(we, { onArm: () => Hi(St, Le) })), { pending: ft } = (0, import_chunk_3dxkbe9d.$e)(He);
  (0, import_chunk_8bkqeb5d.oo)(() => He.disarm(), ft ? 2e3 : null, [ft]);
  let [ot] = (0, import_chunk_bs4h6795.y)(() => ({ roster: le, selection: ke, view: je, attach: St, editor: Le, deleteConfirm: He, earlier: we.earlier })), { setError: Ft, setHint: Ge } = Le, We = yt?.jobId ?? null, Lt = Fe ? Oe : tk;
  (0, import_chunk_bs4h6795.H)(() => {
    le.setRemoteWanted(Fe);
  }, [le, Fe]), (0, import_chunk_bs4h6795.H)(() => le.attachView(se), [le, se]);
  let Ne = we.launcherCwd ?? (0, import_chunk_18rsj2ts.pe)(), lo = Xs({ cwd: Ne }), [At, Je] = (0, import_chunk_bs4h6795.y)(Ne);
  (0, import_chunk_bs4h6795.H)(() => {
    let z = false;
    return (0, import_chunk_q3a5dy2r.vw)(Ne, (0, import_chunk_nbyg4q5d.kR)(q)).then((Me) => {
      if (!z && Me !== Ne) Je(Me);
    }), () => {
      z = true;
    };
  }, [Ne, q]);
  let io = v && !(0, import_chunk_9e5mdyfk.Zpr)({ cwd: At }, v) ? v : At, [uo, Jt] = (0, import_chunk_bs4h6795.y)(Ne), xt = Zt === "remote" ? io : uo, [et] = (0, import_chunk_bs4h6795.y)(() => Xg(we)), { templates: co, skills: Eo, routines: Pe, childRepos: lt, repoWorktrees: gt } = (0, import_chunk_3dxkbe9d.$e)(et);
  (0, import_chunk_bs4h6795.H)(() => {
    et.loadLauncher(Ne);
  }, [et, Ne]);
  let Dt = lt.get(Ne) ?? Bu, eo = gt.get(Ne) ?? ju, So = (0, import_chunk_4smdap7r.M)((ie ?? []).map((z) => (0, import_chunk_9e5mdyfk.fDe)(z.state))).sort().join("\0"), { allRepos: ao, worktreeBranches: wo } = (0, import_chunk_bs4h6795.re)(() => {
    let z = { ...Dt };
    for (let ut of So ? So.split("\0") : []) {
      let ro = (0, import_path6.basename)(ut);
      if (ro && !/\s/.test(ro) && z[ro] === void 0) z[ro] = ut;
    }
    let Me = {};
    for (let [ut, ro] of Object.entries(eo)) {
      if (z[ut] === void 0) z[ut] = ro.path;
      if (z[ut] === ro.path) Me[ut] = ro.branch;
    }
    return { allRepos: z, worktreeBranches: Me };
  }, [Dt, So, eo]), no = () => h({ type: "done" }), ko = Hg(E, ie?.find((z) => z.id === w)?.state), an = () => {
    if (E && ko === "ends") Wg(E);
    no();
  }, $o = (0, import_chunk_bs4h6795.I)("Ctrl-C"), qo = (0, import_chunk_er4k5wmh.nue)((z) => {
    if (z) Hn();
    je.setExitPending(z ? $o.current : null);
  }, an), Bo = (z) => {
    $o.current = z, qo();
  }, Yo = (0, import_chunk_jnjxe5w9.yKe)(), me = () => {
    Yo.dispatch({ type: "interrupt" }), Yo.dispatch({ type: "kill", text: Le.clearForRestore(), direction: "append" }), Yo.dispatch({ type: "interrupt" });
  }, ue = () => {
    if (me(), !de) Ge(Ar);
  };
  (0, import_chunk_8bkqeb5d.oo)(() => Ge(null), Rt === Hu ? import_chunk_er4k5wmh.v7n : Rt === Ar ? 5e3 : null, [Rt]);
  let ze = () => {
    je.clearRename(), ys("");
  }, Xt = (z, Me) => Pn(Me ?? je.getSnapshot().groupMode, z), fo = (z) => `header:${je.getSnapshot().groupMode}:${z}`, To = (0, import_chunk_3dxkbe9d.$e)(we.earlier, (z) => z.entries);
  (0, import_chunk_bs4h6795.H)(() => {
    if (v || !aa()) {
      if (!v) we.earlier.clear();
      return;
    }
    let z = false, Me = we.earlier.beginLoad();
    return da(/* @__PURE__ */ new Set(), false, q).finally(() => {
      we.earlier.endLoad(Me);
    }).then((ut) => {
      if (ut === null) (0, import_chunk_cqa9hrgx.m)("fleet_view_earlier_load", "load_failed");
      else (0, import_chunk_cqa9hrgx.u)("fleet_view_earlier_load");
      if (!z && (ut === null || ut.length === 0) && !b && ke.restoreAttempts === 1) ke.restoreAttempts = 2;
      if (ut === null) return;
      if (we.earlier.setEntries(ut), !z && ut.length > 0) (0, import_chunk_y53wbr8a.a)("tengu_fleetview_earlier_loaded", { count: ut.length });
    }), () => {
      z = true;
    };
  }, []);
  let xo = (z) => ke.toggleCollapsed(Xt(z), je.getSnapshot().groupMode === "state" ? z : null), Do = (0, import_chunk_ddk99w14.Op)();
  (0, import_chunk_bs4h6795.H)(() => {
    if (Do) le.resetPrFetchGate();
  }, [le, Do]);
  let zo = (0, import_chunk_74h6kcya.X)((z) => z.autoUpdaterResult?.status === "success"), { columns: bo, rows: Fo } = (0, import_chunk_6n6exvyx.qe)(), { pathOwnRow: ms } = Ki(Le, C), [Rn] = (0, import_chunk_bs4h6795.y)(() => Date.now()), kr = (0, import_chunk_bs4h6795.I)(null), gi = (0, import_chunk_bs4h6795.I)(null);
  (0, import_chunk_dwa7jc2e.Dv)(gi, ie !== null && !Ye);
  let ud = (0, import_chunk_snett3g5.qz)(), gs = (0, import_chunk_74h6kcya.X)((z) => z.settings.voice?.mode ?? "hold"), Zn = (0, import_chunk_7tdejx4j.Bmt)(), bs = () => {
    let z = ke.focusedRow(), Me = z?.kind === "job" ? z.job : void 0;
    if (!Me) return;
    vi(false);
    let ut = je.getSnapshot().previewOpen;
    if (!ut) ke.followId = Me.id, Hn();
    je.setPreviewOpen(!ut);
  }, er = !de && !Ye && We === null && kt === null && pt === null && Ut === null && Ie === null, { query: Ro, queryRef: ws, setQuery: Cr, willInsertNewline: Ss, setCursorOffset: hi, handleKeyDown: Pt, handlePaste: dn, vimMode: No, enterInsertMode: cd } = (0, import_chunk_snett3g5.Iv)({ buffer: Le, isActive: er, multiline: true, honorEditorMode: true, onExit: () => {
  }, onCancel: ie === null ? () => Bo("Ctrl-C") : void 0, onEscapeClear: () => yc(), onSpaceOnEmpty: () => {
    if (Le.getSnapshot().mode === "bash") return;
    if (ud && gs !== "tap") je.schedulePeekTap((z) => se.setTimeout(z, Su), () => {
      let z = Zn();
      if (z.voiceState !== "idle" || z.voiceWarmingUp) return;
      if (ws.current.trim() !== "") return;
      bs();
    });
    else bs();
  } });
  Rf((z) => {
    let { query: Me, cursorOffset: ut } = Le.getSnapshot();
    Le.insertText((0, import_chunk_snett3g5.s8n)(z, Me[ut - 1]));
  });
  let Vn = oa(() => Le.pastes, dn, { onMinted: Le.noteMintedPaste });
  (0, import_chunk_bs4h6795.H)(() => {
    Le.pruneOrphanedPastes();
  }, [Le, Ro]), (0, import_chunk_8bkqeb5d.oo)(() => Le.setExpandHintPasteId(null), Gt === null ? null : 8e3, [Gt]);
  let [bi] = (0, import_chunk_bs4h6795.y)(() => ({ get value() {
    return Le.getSnapshot().query;
  }, get cursorOffset() {
    return Le.getSnapshot().cursorOffset;
  }, setValueWithCursor: (z, Me) => Le.setQueryAndCursor(z, Me) })), Vo = (0, import_chunk_snett3g5.m5t)({ composer: bi, isActive: er }), vn = (0, import_chunk_7tdejx4j.uE)((z) => z.voiceState);
  (0, import_chunk_bs4h6795.H)(() => {
    if (vn !== "idle") je.cancelPeekTap();
  }, [je, vn]);
  let { handleKeyDown: tr } = (0, import_chunk_snett3g5.COt)({ voiceHandleKeyEvent: Vo.handleKeyEvent, voiceCancelRecording: Vo.cancelRecording, stripTrailing: Vo.stripTrailing, resetAnchor: Vo.resetAnchor, isActive: (gs !== "tap" || Ro.trim().length > 0) && $t !== "bash" && er, composer: bi }), pd = (0, import_chunk_74h6kcya.X)((z) => (0, import_chunk_0t7st4dz.Lv)(z.settings.prefersReducedMotion)), fd = vn === "recording" && !pd, jn = Mu({ editor: Le, selection: ke, query: Ro, dispatchMode: $t, collapsed: Ue, canonicalLauncherCwd: At, storageV5: q });
  (0, import_chunk_amwj5gqt.TBs)(ot, { clock: se, groupsEnabled: Yt });
  let Hn = () => Hi(St, Le), wi = (0, import_chunk_bs4h6795.re)(Vp, []), { query: Gu, queryRef: Ku, setQuery: ys, cursorOffset: Si, handleKeyDown: Vt, handlePaste: yi } = (0, import_chunk_snett3g5.Iv)({ isActive: We !== null, honorEditorMode: true, backspaceExitsOnEmpty: false, onExit: () => $g(Md()), onCancel: ze }), _r = () => {
    je.closeGroupEdit(), Ei("");
  }, { query: ln, queryRef: Uu, setQuery: Ei, cursorOffset: Ri, handleKeyDown: md, handlePaste: ki } = (0, import_chunk_snett3g5.Iv)({ isActive: kt !== null, backspaceExitsOnEmpty: false, onExit: () => qg(Md()), onCancel: _r }), vs = (0, import_chunk_bs4h6795.re)(() => {
    let z = /* @__PURE__ */ new Set();
    for (let Me of ie ?? []) if (Me.state.group) z.add(Me.state.group);
    for (let Me of Oe) if (Me.state.group) z.add(Me.state.group);
    return z;
  }, [ie, Oe]), Qo = (0, import_chunk_bs4h6795.re)(() => {
    if (!kt) return [];
    let z = /* @__PURE__ */ new Set();
    if (kt.kind === "assign") {
      let ro = (ie?.find((Oo) => Oo.id === kt.jobId) ?? Oe.find((Oo) => In(Oo) === kt.jobId))?.state.group;
      if (ro) z.add(ro);
    } else z.add(kt.from);
    let Me = ln.trim(), ut = Me.toLowerCase();
    return [...vs].filter((ro) => !z.has(ro) && ro.toLowerCase().startsWith(ut)).sort((ro, Oo) => {
      let so = ro.startsWith(Me), Xo = Oo.startsWith(Me);
      return so !== Xo ? so ? -1 : 1 : ro.localeCompare(Oo);
    });
  }, [kt, vs, ie, Oe, ln]), Lo = ln.trim(), Cs = Lo !== "" && (0, import_chunk_9e5mdyfk.Kpr)(Lo), gd = kt !== null && Lo !== "" && !Cs && !vs.has(Lo) && !(kt.kind === "rename" && kt.from === Lo), $u = Qo.includes(Lo), qu = Qo.join(`
`);
  (0, import_chunk_bs4h6795.H)(() => {
    je.setGroupPickIdx(kt?.kind === "assign" && Lo !== "" && Lo !== kt.cur && Qo.length > 0 ? 0 : -1);
  }, [qu, Lo]);
  let Yu = kt?.kind === "assign" && Lo !== "" && Lo !== kt.cur && Qo.length > 0, hd = co.get(Ne) ?? dl, oh = Pe.get(Ne) ?? pa, Tr = sl(Ro, ao, hd, oh), or = Tr ?? xt, zu = co.get(or) ?? dl, nr = (0, import_chunk_bs4h6795.re)(() => Jp(zu, hd), [zu, hd]), bd = Eo.get(or) ?? Eo.get(Ne) ?? pa, Wn = Pe.get(or) ?? Pe.get(Ne) ?? pa, Or = Ra(Ro, $t, ie, v), xr = (0, import_chunk_bs4h6795.re)(() => ka(Ro, $t, Or, { templates: nr, allRepos: ao, routines: Wn }), [$t, Or, Ro, nr, ao, Wn]), Qu = (0, import_chunk_bs4h6795.ye)((z) => _p(z, { cwdFilter: v, dispatchDefaults: C, typedAgent: T, activeTab: Zt, handOverDraft: jn, onError: Ft }), [v, C, T, Zt, jn]);
  (0, import_chunk_8bkqeb5d.Al)(() => {
    let z = Number(process.env[Zd]) || 0;
    if (Date.now() - z < Cp) return;
    if (Date.now() - (0, import_chunk_f9x2f6cx.ug)() < ia) return;
    Qu("auto");
  }, zo && !Do ? ia : null);
  let [Pr, vi] = (0, import_chunk_bs4h6795.y)(false), [wd, Xu] = (0, import_chunk_bs4h6795.y)(0), [Sd, yd] = (0, import_chunk_bs4h6795.y)(null);
  (0, import_chunk_bs4h6795.H)(() => {
    if (Ro && Pr) vi(false);
  }, [Ro, Pr]), (0, import_chunk_bs4h6795.H)(() => {
    if (wd !== 0) Xu(0);
  }, [Ro, Pr, or]);
  let [nh, Zu] = (0, import_chunk_bs4h6795.nb)((z) => z + 1, 0), rh = (0, import_chunk_bs4h6795.re)(() => Bp(Ro, { templates: nr, routines: Wn, repos: ao, worktreeBranches: wo, skills: bd, models: wi, dispatch: xr, showAllAgents: Pr }), [Ro, nr, Wn, ao, wo, bd, wi, xr, Pr, nh]), { firstWord: Ed, isSlashQuery: sh, atMatch: Rd, slashMatch: ah, modelArgMatch: kd, templateNames: dh, repoNames: lh, suggestions: _n } = rh;
  (0, import_chunk_bs4h6795.H)(() => {
    if (Rd) et.refreshLauncher(Ne);
  }, [Rd, et, Ne]);
  let ec = (z) => {
    if (yd(null), z.kind === "model" && kd) {
      Cr(`/model ${z.name}`);
      return;
    }
    let Me = al[z.kind];
    Cr(Rd || ah ? Ap(Ro, Me, z.name) : `${Me}${z.name} `);
  }, uh = () => (Sd ? _n.find((z) => `${z.kind}:${z.name}` === Sd) : void 0) ?? _n[Math.min(wd, _n.length - 1)], vd = (0, import_chunk_bs4h6795.re)(() => Ef(le.reload, (z) => {
    ke.followId = z;
  }, le.optimistic, le.noteDeleteRefusal, le.deleteRefusalOf, q), [le, ke, q]), ch = (0, import_chunk_bs4h6795.ye)(async (z) => {
    let Me = vd.find((ut) => ut.label === "stop");
    if (!Me) throw Error("the stop action is missing");
    await Me.run(z, { bulk: false });
  }, [vd]);
  (0, import_chunk_bs4h6795.H)(() => {
    (0, import_chunk_w578pjby.t)("[PERF:bg-remount-end]"), (0, import_chunk_cqa9hrgx.u)("screen_fleet_view");
  }, []);
  let Cd = (0, import_chunk_bs4h6795.ye)(() => Rp(Le, le, { jobs: ie, pendings: mt, remoteJobs: Lt, remoteListLoaded: Ae }), [Le, le, ie, mt, Lt, Ae]);
  (0, import_chunk_bs4h6795.H)(() => {
    Cd();
  }, [Cd]), (0, import_chunk_8bkqeb5d.Al)(() => {
    if (Le.hasReplyDrafts()) Cd();
  }, 15e3);
  let tc = (0, import_chunk_bs4h6795.I)(null), _d = (0, import_chunk_bs4h6795.ye)(() => {
    let z = tc.current;
    tc.current = null;
  }, [q]), nk = (0, import_chunk_8bkqeb5d.dY)(_d, 300);
  (0, import_chunk_bs4h6795.H)(() => _d, [_d]);
  let oc = (z) => {
    if (z === je.getSnapshot().activeTab) return;
    if (z === "remote" && !(0, import_chunk_bzyb60p0.uqa)()) return;
    je.setActiveTab(z), Ge(null), Ft(null), ke.followOrigin = null, He.disarm();
  }, nc = (z) => le.liveStatus(z), [ph, fh] = (0, import_chunk_bs4h6795.y)(() => Date.now()), rc = (0, import_chunk_8bkqeb5d.Xe)(), mh = rc ? ph : void 0, Id = Date.now(), ic = (0, import_chunk_bs4h6795.re)(() => new Set((ie ?? []).filter((z) => (0, import_chunk_9e5mdyfk.Ynn)(z.state)).map((z) => z.id)), [ie]), gh = (ie ?? []).some((z) => {
    if (!ic.has(z.id)) return false;
    let Me = Ot.get(z.state.sessionId)?.nextAt;
    return Me != null && Me > Id && Me - Id < 6e4;
  });
  (0, import_chunk_8bkqeb5d.Al)(() => fh(Date.now()), rc ? Sa : gh ? 1e3 : ie?.length || Lt.length ? 3e4 : null), (0, import_chunk_bs4h6795.H)(() => {
    (0, import_chunk_95amtstn.KBr)(io, true, C, co.get(io), q);
  }, [io, C, co, q]), (0, import_chunk_bs4h6795.H)(() => {
    if (we.agentLastUsedMigrationDone) return;
    we.agentLastUsedMigrationDone = true, jp(q).then((z) => {
      if (z) Zu();
    });
  }, [we, q]), (0, import_chunk_bs4h6795.H)(() => et.loadTarget(or, q), [et, or, q]);
  let { addNotification: hh } = (0, import_chunk_v9dxspne.Js)(), _s = (0, import_chunk_8bkqeb5d.UD)(), sc = (z) => {
    hh((0, import_chunk_snett3g5.CUr)(z));
  }, bh = (0, import_chunk_snett3g5.EOt)(_s, true, sc);
  (0, import_chunk_snett3g5.vOt)(_s);
  let dc = (0, import_chunk_snett3g5.xha)(_s, bh, sc);
  (0, import_chunk_snett3g5.kOt)(_s);
  let wh = (0, import_chunk_bs4h6795.I)(false);
  if (Lt.length > 0) wh.current = true;
  (0, import_chunk_bs4h6795.It)(() => {
    let z = (0, import_chunk_ky5sghtd.va)().get(process.stdout);
    if (!z) return;
    return z.onHyperlinkClick = (Me) => {
      let ut = false, { previewOpen: ro } = je.getSnapshot(), { error: Oo } = Le.getSnapshot();
      (0, import_chunk_h3t3td58.bTr)(Me);
    }, () => {
      z.onHyperlinkClick = void 0;
    };
  }, [je, Le, le, Fe]);
  let Td = false, lc = (0, import_chunk_bs4h6795.re)(() => (0, import_chunk_865at33z.xa)().hasToken, []), uc = de || Ye ? null : Yc({ onCloudTab: Zt === "remote", remoteJobs: Lt, remoteListLoaded: Ae, remoteListFailure: _t }), cc = false, Fr = ff({ jobs: ie, remoteJobs: Lt, pendings: mt, prStatuses: to, liveStatus: nc, heldInTerminal: (z) => le.terminalHolderOf(z) !== void 0, loopJobIds: ic, loopKicks: Ot, focusedIdx: Wt, hoverFocusIdx: rt, followOrigin: Qe, collapsed: Ue, capExpanded: wt, groupMode: Kt, activeTab: Zt, query: Ro, mode: $t, dispatch: xr, linkMatchId: Or, dispatchRepoCwd: Tr, pendingDelete: ft, earlierEntries: To, cwdFilter: v, initialJobId: b, originNotKeptId: ko === "ends" || ko === "lapses" ? w : void 0, simpleView: de, simpleWantsRemote: Fe, launcherCwd: Ne, launcherGroup: lo, scopedFallbackOrigin: io, termRows: Fo - (uc !== null ? $c : 0) - (ms ? 1 : 0) - (cc ? 1 : 0), columns: bo, now: Id, ageNow: mh }), { byState: Ci, byGroup: pc, hasComposedDispatch: Ts, scopedLocalJobs: yh, scopedJobs: Eh, filtered: fc, groupOf: mc, jobSessionIds: hc, doneCap: Rh, simpleBuilt: kh, built: Os, rows: Co, homeIdx: un, onlyOrigin: vh, isOnboarding: Od, focusedRow: _i, focused: bc, altOpenOrigin: Ch, dispatchOrigin: Pd, focusIsFromHover: wc, headerJobs: _h, isBashDispatch: Sc, queryIsFilter: xs, hasNameFilter: Ii } = Fr, yc = () => {
    if (de) Cr("");
    else if (xs) me();
    else if (Le.getSnapshot().hint === Hu) ue();
    else Ge(Hu);
  }, Ti = (z) => Co.findIndex((Me) => Me.kind === "job" && Me.job.id === z);
  if (St.releasePromoted(hc), de && je.firstImpression("simple")) (0, import_chunk_cqa9hrgx.u)("fleet_view_simple");
  if (Ii && je.firstImpression("nameFilter")) (0, import_chunk_cqa9hrgx.u)("fleet_view_name_filter");
  if (Os.doneFoldHidden > 0 && je.firstImpression("fold")) (0, import_chunk_y53wbr8a.a)("tengu_fleetview_fold_shown", { done_count: Os.doneCount, hidden_count: Os.doneFoldHidden, k: kh?.doneCap ?? Rh, terminal_rows: Fo });
  (0, import_chunk_bs4h6795.H)(() => {
    if (ie === null || !Ht) return;
    let z = (ut) => Jc(ut, w) && !le.isHolding(ut.id), Me = (ut) => jo(ut.state) === "completed";
    jc(we.resultSeen, { visibleFinished: Co.filter((ut) => ut.kind === "job").map((ut) => ut.job).filter((ut) => z(ut) && Me(ut)), allFinished: ie.filter((ut) => z(ut) && Me(ut)), allCandidates: ie.filter(z) });
  }, [we, le, Co, ie, w, Ht]);
  let Ih = (0, import_chunk_bs4h6795.re)(() => import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_TERMINAL_TITLE, []);
  (0, import_chunk_snett3g5.AOt)(Ih ? null : Zc((0, import_chunk_4smdap7r.U)(Eh, (z) => jo(z.state, nc(z)) === "blocked"))), eh(yh.filter((z) => (0, import_chunk_9e5mdyfk.l1t)(z.state)).map((z) => Xc(z, tn(z.state, z.id === b))), Se);
  let Th = ke.followId ?? bc?.id ?? _i?.group;
  (0, import_chunk_bs4h6795.H)(() => {
    if (He.pending !== null && He.pending.id === ke.followId) return;
    He.disarm();
  }, [Th]), (0, import_chunk_bs4h6795.It)(() => {
    if (ke.syncRows(Co), !ke.getSnapshot().draftPick) return;
    if (!xs) ke.releasePick(Co, un, !Ts && !pc);
    else if (Ii && !ke.followId) ke.followPick(un, Co[un]);
  }), (0, import_chunk_bs4h6795.H)(() => {
    if (mt.length === 0 || !ie) return;
    let z = mt.filter((ut) => ie.some((ro) => ro.id === ut.id));
    if (z.length === 0) return;
    le.settleLandedPendings(z);
    let Me = ke.followId;
    if (Me && z.some((ut) => ut.id === Me)) {
      let ut = Ti(Me);
      if (ut >= 0) ke.focus(ut);
    }
  }, [le, ke, mt, ie]), (0, import_chunk_bs4h6795.H)(() => {
    if (ke.isFirstQueryOfLook()) return;
    if (Le.takeProgrammaticChange()) return;
    if (Ft(null), Ro !== "" || Le.getSnapshot().hint !== Ar) Ge(null);
    if (!xs) return;
    if (Or) {
      let z = Ti(Or);
      if (z >= 0) ke.followPick(z, Co[z]);
      else ke.clearFollow();
      return;
    }
    if (Ii) {
      ke.followPick(un, Co[un]);
      return;
    }
    ke.clearFollow(), ke.focus(un);
  }, [Ro]), (0, import_chunk_bs4h6795.H)(() => {
    if (wc || !Ci && (qt || ke.getSnapshot().draftPick)) return;
    if (uo !== Pd) Jt(Pd);
  }, [Pd, wc, qt, Ci, uo]), (0, import_chunk_bs4h6795.H)(() => {
    ke.clampFocus(Co.length);
  }, [ke, Co.length]), (0, import_chunk_bs4h6795.H)(() => {
    if (Or) {
      ke.savedFocusJobId = null;
      return;
    }
    if (!Ts) {
      let so = ke.savedFocusJobId;
      if (ke.savedFocusJobId = null, so && Ii) ke.returnPickTo(so);
      else if (so) {
        ke.followOrigin = null, ke.followId = so;
        let Xo = Ti(so);
        if (Xo >= 0) ke.focus(Xo);
      }
      return;
    }
    let z = ke.getSnapshot().focusedIdx, Me = Co[z];
    if (Me?.kind === "job" && ke.savedFocusJobId === null) ke.savedFocusJobId = Me.job.id;
    let ut = (so) => Co.findIndex((Xo) => Xo.kind === "header" && so(Xo)), ro = -1, Oo = null;
    if (Ci) Oo = "working";
    else if (Tr) {
      if (ro = ut((so) => so.origin === Tr && so.group !== "pinned"), ro >= 0) Oo = Co[ro].group;
    } else if (Me?.kind === "job") if (Me.group === "pinned") Oo = Co.find((Xo) => Xo.kind === "header" && Xo.origin === Me.origin && Xo.group !== "pinned")?.group ?? null;
    else Oo = Me.group;
    else if (Me?.kind === "header") {
      if (Me.group !== "pinned") Oo = Me.group, ro = z;
    }
    if (ro < 0) return;
    if (ke.followId = null, ke.followOrigin = Oo, ro !== z) ke.focus(ro);
  }, [Ts, Ci, Tr]);
  let Ec = Ye && (fc.length === 0 || _i !== void 0 && _i.kind !== "job" || _i === void 0 && (ke.followId === null || Ti(ke.followId) < 0));
  (0, import_chunk_bs4h6795.H)(() => {
    if (Ec) je.setPreviewOpen(false);
  }, [Ec]);
  let Rc = (0, import_chunk_bs4h6795.I)(false);
  (0, import_chunk_bs4h6795.H)(() => {
    if (ke.restoreAttempts >= 2 || ie === null) return;
    let z = !!b?.startsWith("remote-"), Me = z && Lt.some((so) => so.id === b);
    if (z && !Ae && !Me) return;
    let ut = Co.some((so) => so.kind === "job" || so.kind === "earlier");
    if (!b && (Zt === "remote" ? !Ae || !ut : Td && !Ae && !ut)) {
      Rc.current = Lt.length > 0;
      return;
    }
    if (!b && Zt === "remote" && (Rc.current && ke.followOrigin !== null || ke.followId !== null)) {
      ke.restoreAttempts = 2;
      return;
    }
    if (!z && b && ie === ke.restoreCountedJobs) return;
    ke.restoreCountedJobs = ie, ke.restoreAttempts++;
    let ro = () => {
      let so = Co[un];
      if (Ii) {
        ke.followPick(un, so);
        return;
      }
      if (ke.focus(un), so?.kind === "job") ke.followId = so.job.id, ke.followOrigin = null;
      else if (so?.kind === "earlier") ke.followId = so.entry.sessionId, ke.followOrigin = null;
      else if (so?.kind === "header") ke.followId = null, ke.followOrigin = so.group;
    };
    if (!b) {
      ke.restoreAttempts = Co.some((so) => so.kind === "job" || so.kind === "earlier") || !we.earlier.pending ? 2 : 1, ro();
      return;
    }
    let Oo = Ti(b);
    if (Oo >= 0) ke.restoreAttempts = 2, ke.focus(Oo), ke.followId = b;
    else if (ke.restoreAttempts >= 2) ro();
  }, [ie, Lt, Ae, Zt, b, un]);
  let Fd = { editor: Le, roster: le, selection: ke, view: je, attach: St, deleteConfirm: He, storageV5: q, onAction: h, pendings: mt, mountAt: Rn, canonicalLauncherCwd: At, cwdFilter: v, parseScope: { templates: nr, allRepos: ao, routines: Wn } }, kc = (z, Me) => Sf(Fd, z, Me), Ps = (z, Me) => {
    let ut = xs && z ? mc.get(z.id) : void 0;
    if (ut !== void 0) ke.uncollapse(Xt(ut));
    _a(Fd, z, Me);
  }, vc = (z) => yf(Fd, z), Ld = A !== void 0 && (!at || pt !== null);
  (0, import_chunk_bs4h6795.H)(() => {
    if (St.getSnapshot().autoOpened || !A || ie === null) return;
    St.markAutoOpened(), Ps(ie.find((z) => z.id === A));
  }, [A, ie]);
  let Cc = ie !== null && !Ld && vh && Zt !== "remote" && !Ro && !de, _c = fc.some((z) => z.id === b);
  (0, import_chunk_bs4h6795.H)(() => {
    if (!Cc || !je.firstImpression("empty")) return;
    (0, import_chunk_y53wbr8a.a)("tengu_fleetview_empty_state_shown", { skeleton: Od, has_origin: _c });
  }, [Cc, Od, _c]);
  let Md = () => ({ submit: { editor: Le, roster: le, selection: ke, view: je, attach: St, storageV5: q, credentials: Z, onAction: h, exit: no, quit: an, relaunchForUpdate: Qu, searchKeyDown: Pt, willInsertNewline: Ss, vimMode: No, dispatchInputActive: er, clearDraft: ue, escapeDraft: yc, canonicalLauncherCwd: At, launcherCwd: Ne, effectiveCwd: xt, scopedFallbackOrigin: io, cwdFilter: v, dispatchDefaults: C, query: Ro, dispatch: xr, templates: nr, allRepos: ao, routines: Wn, templateCache: co, suggestions: _n, skills: bd, modelArgMatch: kd, modelSuggestions: wi, pickSuggestion: uh, applySuggestion: ec, closeAgentBrowse: () => vi(false), jobSessionIds: hc, builtRows: Os.rows, bumpSuggGen: Zu, mountAt: Rn, focusedRow: _i, focused: bc, isOnboarding: Od, toggleCollapse: xo, openEarlier: kc, openNewSessionRow: vc, openOrRespawn: Ps }, deleteConfirm: He, actions: vd, rows: Co, focusedIdx: Wt, altOpenOrigin: Ch, byGroup: pc, byState: Ci, hasComposedDispatch: Ts, dispatchRepoCwd: Tr, headerJobs: _h, groupOf: mc, groupSuggestions: Qo, previewOpen: Ye, helpOpen: st, debugOpen: Ze, groupEdit: kt, renamingJobId: We, attachingJobId: pt, showAllAgents: Pr, jobs: ie, pendings: mt, keybindings: Y, simpleView: de, groupsEnabled: Yt, hasCredentials: lc, termRows: Fo, canGoBack: F, originJobId: w, originSpawn: E, renameKeyDown: Vt, groupKeyDown: md, setQuery: Cr, enterInsertMode: cd, setRenameDraft: ys, setGroupDraft: Ei, readRenameDraft: () => Ku.current, readGroupDraft: () => Uu.current, pressExitKey: Bo, switchTab: oc, clearRename: ze, clearGroupEdit: _r, headerArmId: fo, ck: Xt, setShowAllAgents: vi, setSelectedSuggestion: Xu, setHoveredSuggestionId: yd, attachPastedImage: Vn }), Oh = (z) => Yg(Md(), z), { handleKeyDown: xh, handlePaste: Ph } = (0, import_chunk_gd8mknr6.zwn)({ handleKeyDown: Oh, onPaste: (z) => Gp({ editor: Le, dispatchInputActive: er, insertAtCursor: (Me) => dn(new import_chunk_8bkqeb5d.s$e(Me)) }, z), onImagePaste: Vn }), Ic = (z) => {
    let Me = je.getSnapshot();
    if (Me.resumePicker !== null || Me.settingPicker !== null) return;
    if (We !== null || Me.renaming !== null) {
      yi(z);
      return;
    }
    if (kt !== null) {
      if (je.setGroupPickIdx(-1), Me.groupPristine) Ei(""), je.setGroupPristine(false);
      ki(z);
      return;
    }
    if (st) je.setHelpOpen(false);
    Ph(z);
  }, Fh = ie !== null && !Ld, ik = (0, import_chunk_bs4h6795.I)(null), sk = (0, import_chunk_8bkqeb5d.si)(), { subscribeFrames: Lh } = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp);
  (0, import_chunk_bs4h6795.It)(() => {
    return;
  }, [Fh, Lh]);
  let Mh = (z) => false;
  if (ie === null || Ld) return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { tabIndex: 0, autoFocus: true, onKeyDownCapture: dc, onKeyDown: (Me) => {
    if (Me.ctrl && Me.key === "d" && (de || ie === null && Le.getSnapshot().query === "")) {
      Me.stopImmediatePropagation(), Bo("Ctrl-D");
      return;
    }
    if (de && (Me.name === "escape" || Me.ctrl && Me.key === "c")) {
      Me.stopImmediatePropagation(), Bo("Ctrl-C");
      return;
    }
    Pt(Me);
  }, onPaste: Ic });
  let Ah = _n.length > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, marginBottom: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8zg5scwx.xZe, { suggestions: _n.map((z) => ({ id: `${z.kind}:${z.name}`, displayText: kd ? z.name : `${al[z.kind]}${z.name}`, description: `${Dp[z.kind]} \xB7 ${z.description}` })), selectedSuggestion: Math.min(wd, _n.length - 1), maxColumnWidth: 35, noPad: true, hoveredId: Sd, onHoverChange: yd, onSelect: (z) => {
    let Me = _n[z];
    if (Me) ec(Me), vi(false);
  } }) }) : null, Dh = /* @__PURE__ */ new Set([...dh, ...Wn.map((z) => z.name.toLowerCase()), ...lh.map((z) => z.toLowerCase())]), Ad = Sc ? [] : Mp(Ro, Dh), Nh = Sc ? [] : xr?.matched && Ed === xr.template.name.toLowerCase() ? [[0, Ed.length], ...Ad] : sh ? [[0, Ed.length], ...Ad] : [...Lp(Ro), ...Ad];
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: gi, flexDirection: "column", flexGrow: 1, tabIndex: 0, autoFocus: true, onKeyDownCapture: (z) => {
    if (Mh(z)) return;
    dc(z), tr(z);
  }, onKeyDown: xh, onPaste: Ic, onWheel: (z) => {
    if (Ye) return;
    z.preventDefault(), kr.current?.scrollBy(z.deltaY > 0 ? 3 : -3);
  }, children: [(0, import_chunk_a46xeenj.e)(iu, { owners: ot, layout: Fr, scrollRef: kr, header: (0, import_chunk_a46xeenj.e)(Nl, { editor: Le, layout: Fr, simpleView: de, dispatchDefaults: C, targetCwd: or, launcherCwd: Ne, canonicalLauncherCwd: At, originJobId: w, originFate: ko }), renameInput: { draft: Gu, cursor: Si }, groupInput: { draft: ln, cursor: Ri, suggestions: Qo, reserved: Cs, isNew: gd, matchesExisting: $u, panelOpen: Yu }, initialJobId: b, cwdFilter: v, simpleView: de, endsWithOlderSessionsLine: cc, hasCredentials: lc, mountAt: Rn, actions: { toggleCollapse: xo, openOrRespawn: Ps, openEarlier: kc, openNewSessionRow: vc } }), (0, import_chunk_a46xeenj.e)(Lu, { owners: ot, layout: Fr, onCursorOffsetChange: hi, highlights: Nh, voice: { interimRange: Vo.interimRange, showCursor: fd }, isTerminalFocused: Do, simpleView: de, showRemoteTabs: Td, switchTab: oc, hasGroups: [...ie ?? [], ...Lt].some((z) => !!z.state.group), suggestionList: Ah, cloudListNotice: uc }), (0, import_chunk_a46xeenj.e)(xu, { owners: ot, layout: Fr, footer: (0, import_chunk_a46xeenj.e)(mu, { owners: ot, layout: Fr, simpleView: de, canGoBack: F, dispatchDefaults: C, launcherCwd: Ne, storageV5: q, groupInput: { draft: ln, suggestions: Qo }, suggestionsOpen: _n.length > 0, dispatchVimMode: er ? No : void 0 }), simpleView: de, groupsEnabled: Yt, showRemoteTabs: Td, canGoBack: F, canMention: nr.length + Wn.length + Object.keys(ao).length > 0, isTerminalFocused: Do, awayLoop: Se, storageV5: q, onOpen: Ps, onStop: ch })] });
}
var yo = null;
function v9l(h, b, w) {
  Vi(h, w).seedJobs(b);
}
function Rha(h, b, w) {
  if (h) return (0, import_chunk_2kg8bxyd.wkn)();
  let E = (0, import_chunk_8bkqeb5d.Q7n)(process.stdout, null).rows;
  if (E !== process.stdout.rows) return "";
  return b && !w ? (0, import_chunk_2kg8bxyd.SKe)(E) : "";
}
async function kBs(h, b) {
  var _stack = [];
  try {
    let w = false;
    function E() {
      w = true;
    }
    process.stdout.on("resize", E);
    const v = __using(_stack, { [Symbol.dispose]: () => {
      process.stdout.removeListener("resize", E);
    } });
    let C = "inline", T = Lc();
    if (!T.ok) {
      await Mc(T.error);
      return;
    }
    if ((await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gkd271n6.js")))).registerToolHosts(), (0, import_chunk_xb56zerw.L_e)(), (0, import_chunk_424x9gf0.Det)(), (0, import_chunk_yvad17bv.xi)() && !(0, import_chunk_kt20mjaj.j0i)()) (0, import_chunk_kt20mjaj.jgs)();
    (0, import_chunk_95amtstn.k_a)(b?.dispatchExtraArgs ?? []), (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.S)("list_open"), mode: (0, import_chunk_78g0060s.f)((0, import_chunk_865at33z.ge)().fleetViewGroupMode ?? "state") });
    let F = b?.host ?? (0, import_chunk_amwj5gqt._5t)(), A = (0, import_chunk_f9x2f6cx.N)(), L = A.host, J = (0, import_chunk_f9x2f6cx.Rs)(A);
    if (Bc(F.resultSeen, b?.entryChannel), !(0, import_chunk_865at33z.ge)().hasOpenedAgentsView) await (0, import_chunk_865at33z.Ke)((Ie) => ({ ...Ie, hasOpenedAgentsView: true }), b?.storageV5);
    let V = [];
    function W() {
      let Ie;
      while ((Ie = process.stdin.read()) !== null) {
        if ((typeof Ie === "string" ? Buffer.from(Ie, "utf8") : Ie).includes(3)) {
          process.emit("SIGINT");
          return;
        }
        V.push(Ie);
      }
    }
    process.stdin.on("readable", W), await Ip({ storageV5: b?.storageV5, credentials: b?.credentials });
    let D = b?.cwdFilter ? await (0, import_chunk_q3a5dy2r.vw)((0, import_path.resolve)(b.cwdFilter), (0, import_chunk_nbyg4q5d.kR)(b?.storageV5)) : void 0, j = Vc(b?.dispatchDefaults), q = (0, import_chunk_m15w38ag.ne)() ? b?.storageV5 : void 0;
    (0, import_chunk_w578pjby.Ct)(q ? () => (0, import_chunk_95amtstn.oUo)(q) : import_chunk_95amtstn.oUo), (0, import_chunk_w578pjby.Ct)((0, import_chunk_c2gvx2m9.jYn)("claude agents"));
    let se = h, ee = b?.screen, ce = (Ie) => {
      if (ee) ee.update(Ie);
      else ee = (0, import_chunk_6n3q0gvw.DL)(se, Ie);
    }, Z = import_chunk_c203g5kd.s.CLAUDE_AGENTS_SELECT, Y = (0, import_chunk_bzyb60p0.hqa)(), de = b?.autoOpenJobId ?? Y?.short, Fe = Y?.left, Se = de !== void 0 && b?.canGoBack && Y === void 0, we = [], le = /* @__PURE__ */ new Set(), ie = false, Oe = false, Ae = /* @__PURE__ */ new Set(), _t = () => yo !== null && !Oe && (0, import_chunk_mj0kpnar.b2s)({ presentation: C, rows: (0, import_chunk_8bkqeb5d.Q7n)(process.stdout, null).rows, embedded: false }), De = (Ie, yt) => {
      if (se.unmount(), yt && process.stdin.isTTY) (0, import_chunk_84d4qt5z.Fv)(process.stdin, false);
      if (yt && (0, import_chunk_8c111j67.gbt)()) process.stdout.write((0, import_chunk_2kg8bxyd.NIe)());
      if (Ie !== void 0) process.stderr.write(`${Ie}
`);
    }, mt = false, to = Z, Ot = Fs(), Ht = 0, ke = (Ie) => {
      let yt = { ...Tc(Ie.id, to, Ht), ...Ls(Ot, Ie.state.sessionId, Date.now()) };
      return Ht++, yt;
    }, Wt = b?.originJobId, rt = b?.originSpawn;
    import_chunk_c203g5kd.s.unset("CLAUDE_AGENTS_SELECT");
    let Ue, wt = await (0, import_chunk_gzt0mgvc.hNa)(await (0, import_chunk_q3a5dy2r.vw)((0, import_chunk_18rsj2ts.pe)(), (0, import_chunk_nbyg4q5d.kR)(b?.storageV5)), b?.storageV5), qt = Vi(F, b?.storageV5);
    Zs(F, qt, b?.storageV5, wt?.collapsed);
    let Qe = ra(F, { query: wt?.q || void 0 }), Yt = ta(F);
    (0, import_chunk_gzt0mgvc.P9r)();
    let ct;
    process.stdin.off("readable", W);
    let je = false;
    while (V.length) process.stdin.unshift(V.pop());
    let Kt;
    if (de !== void 0) {
      if (qt.jobs === null) qt.seedJobs(await (0, import_chunk_9e5mdyfk.qF)(void 0, b?.storageV5));
      let Ie = qt.jobs?.find((yt) => yt.id === de);
      if (Ie) {
        let yt = performance.now(), Ye = (0, import_crypto.randomUUID)();
        (0, import_chunk_4we2aqs8.dIt)(Ye, "fleet", b?.storageV5).catch(() => {
        });
        let st = await dr(Ie.id, { knownState: Ie.state }, b?.storageV5);
        if (yo && Y !== void 0) {
          if (!st.ok && !st.alive) await yo.backToCloudSession(Y.left, false, b?.storageV5), Fe = void 0;
          if ((0, import_chunk_8c111j67.gbt)()) process.stdout.write((0, import_chunk_2kg8bxyd.wkn)());
        }
        Kt = { type: "open", job: Ie, respawnResult: st, gestureT0: yt, gestureId: Ye };
      } else if (yo && Y !== void 0) await yo.backToCloudSession(Y.left, false, b?.storageV5);
      else if (yo && Wt !== void 0 && (_t() || (0, import_chunk_cetpdee2.t7n)(de).kind === "cloud")) {
        let yt = await yo.sessionTabsNext({ ending: { kind: "asked", intent: (0, import_chunk_cetpdee2.t7n)(de) }, leftJobId: Wt, visited: [], ended: le, landed: void 0, storageV5: b?.storageV5 }), Ye = yt.kind === "cloud" ? await yo.stayAfterCloudTab(yt, b?.dispatchExtraArgs ?? [], false, () => rt?.settled === true && !rt.ok, b?.storageV5) : yt;
        if (Ye.kind === "open") {
          if (Ye.jobs) qt.seedJobs(Ye.jobs);
          let st = await yo.jobToOpen(Ye.jobId, qt.jobs, b?.storageV5);
          if (st) Kt = { type: "open", job: st }, ie = !Ye.asked, mt = Ye.booting;
        }
        if (Kt === void 0) {
          if (rt) rt.resumeHintRequested = true;
          De(yo.NO_SESSION_QUIT_LINE, false);
          return;
        }
      }
    }
    let Zt = false, kt, Ut = Kt !== void 0 && Wt !== void 0;
    if (Kt === void 0 && (0, import_chunk_xfj2cwfv.nn)()) return (0, import_chunk_xfj2cwfv.Ga)();
    for (; ; ) {
      if (Kt === void 0 && Ut && _t()) {
        De(yo?.NO_SESSION_QUIT_LINE, true);
        break;
      }
      if (Oe ||= Kt === void 0, Zt) (0, import_chunk_r3mm3x33.pr)();
      kt = Pc(kt, j, b?.storageV5), Zt = true;
      let Ie = Kt ?? await new Promise((ot) => {
        ce((0, import_chunk_a46xeenj.e)(import_chunk_vtbeed6p.W1o, { killRing: F.killRing, children: (0, import_chunk_a46xeenj.e)(import_chunk_7azstk6m.Nv, { host: L, project: J, storageV5: b?.storageV5, initialState: ct && { ...ct, notifications: { current: null, queue: [], pinned: [] } }, onChangeAppState: ({ newState: Ft }) => {
          ct = Ft;
        }, children: (0, import_chunk_a46xeenj.e)(th, { onAction: ot, host: F, initialJobId: Z, awayLoop: Ot, originJobId: Wt, originSpawn: rt, cwdFilter: D, dispatchDefaults: j, typedAgent: b?.dispatchDefaults?.agent, canGoBack: b?.canGoBack, autoOpenJobId: de, entryChannel: b?.entryChannel, relaunchTab: Ue, typedAhead: je, fromLauncher: b?.fromLauncher, storageV5: b?.storageV5 }) }, "agents-list") })), (0, import_chunk_gpach6z0.n7e)();
      });
      Kt = void 0;
      let yt = ie;
      ie = false;
      let Ye = mt;
      mt = false;
      let st = (0, import_chunk_8c111j67.gbt)();
      if (Ie.type === "back") {
        se.unmount();
        break;
      }
      if (Ie.type === "open" && Ie.job.id !== de) Se = false;
      if (de = void 0, Ie.type === "login") {
        let { getLoginStartingMessage: ot, Login: Ft, organizationGatewaySignedIn: Ge } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kx6b00a7.js"))), We = false, Lt, Ne = await Promise.race([new Promise((At) => {
          ee = void 0, (0, import_chunk_6n3q0gvw.DL)(se, (0, import_chunk_a46xeenj.e)(import_chunk_7azstk6m.Nv, { storageV5: b?.storageV5, initialState: ct && { ...ct, notifications: { current: null, queue: [], pinned: [] } }, onChangeAppState: ({ newState: Je }) => {
            ct = Je;
          }, children: (0, import_chunk_a46xeenj.e)(Ft, { onDone: At, offersOrganizationGateway: true, onOrganizationGatewaySignIn: (Je) => {
            Qe.setHint(Ge(Je)), At(false);
          }, onHybridSignIn: (Je) => {
            Lt = Je, At(false);
          }, onOrgDocumentsReload: (Je) => {
            if (Je === "previous") We = true;
          }, startingMessage: ot() }) }));
        }), se.waitUntilExit().then(() => "exited")]);
        if (Ne === "exited") break;
        let lo;
        if (Lt !== void 0) {
          let { finishHybridSignIn: At, SIGNED_IN_TO_ORGANIZATION: Je } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-9jny758j.js")));
          lo = await At(Lt).catch((io) => ((0, import_chunk_k449cc64.i)(io), { outcome: "applied", sentence: Je }));
        }
        if ((0, import_chunk_6n3q0gvw.DL)(se, null), process.stdout.isTTY) process.stdout.write((0, import_chunk_2kg8bxyd.GGs)());
        if (lo !== void 0) {
          De(`${lo.sentence} ${lo.outcome === "gateway_in_use" ? "The agents view closed because Claude Code needs to restart after this sign-in." : "The agents view closed, because only a new start of Claude Code uses this sign-in."} To open the view again, start Claude Code the same way, for example with \`claude agents\`.`, false);
          break;
        }
        if (Ne) {
          let { runOrgMemoryAuthBoundary: At } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kx6b00a7.js")));
          if (At(), await (0, import_chunk_95amtstn.oUo)(b?.storageV5), (0, import_chunk_zhr7rpv7.ve)() === "gateway") {
            se.unmount();
            break;
          }
          Qe.setHint("Login successful");
        }
        if (Ne || We) {
          let [{ refreshRemoteManagedSettings: At }, { refreshPolicyLimits: Je }, { declareNoConsentSurface: io }, { HoldForSettingsReload: uo, enforceOrgConfigGateAfterStepSignIn: Jt }, { holdToolMarksThrough: xt }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ntzt3wk5.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7bg0909g.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-6a387btq.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-f5gp1bgh.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-hq7wvcvv.js")))]);
          io();
          let et = Je();
          xt(et);
          let co = Promise.all([At(void 0, b?.storageV5, b?.credentials), et.catch(() => {
          })]);
          await new Promise((Eo) => {
            (0, import_chunk_6n3q0gvw.DL)(se, (0, import_chunk_a46xeenj.e)(import_chunk_7azstk6m.Nv, { storageV5: b?.storageV5, children: (0, import_chunk_a46xeenj.e)(uo, { reload: co, onDone: Eo }) }));
          }), (0, import_chunk_6n3q0gvw.DL)(se, null), await Jt(se);
        }
        continue;
      }
      let Ze = (0, import_chunk_ky5sghtd.va)().get(process.stdout);
      if (st && Ie.type === "open") Ze?.handoffAltScreen();
      if ((0, import_chunk_cg8dqz0a.x)() === "windows" && Ie.type === "open") Ze?.handoffRawMode();
      let St = Ze?.lastFrameFillsCurrentViewport ?? false;
      if (!st) ce(null);
      if (se.unmount(), Ie.type === "done") break;
      if ((0, import_chunk_cg8dqz0a.x)() === "windows" && process.stdin.isTTY) (0, import_chunk_84d4qt5z.Fv)(process.stdin, true), process.stdin.ref();
      let pt = "", at = st ? (0, import_chunk_9zdrdv25.Fz)(() => void process.stdout.write((0, import_chunk_2kg8bxyd.NIe)() + pt)) : () => {
      };
      if (Z !== void 0 && Z !== Ie.job.id) {
        let ot = Z;
        we.splice(0, we.length, ot, ...we.filter((Ft) => Ft !== ot));
      }
      if (Z = Ie.job.id, rt && Ie.job.id === Wt) rt.openedThisVisit = true;
      if (!Ie.keepQuery) Qe.dropDraft();
      F.agentLastUsedMigrationDone = true;
      let Le = Date.now(), $t;
      if (Ie.respawnResult === void 0 && Ie.gestureId === void 0) $t = (0, import_crypto.randomUUID)(), (0, import_chunk_4we2aqs8.dIt)($t, "fleet", b?.storageV5).catch(() => {
      });
      let Gt = yo !== null && (0, import_chunk_mj0kpnar.b2s)({ presentation: C, rows: import_chunk_pdxaa9x8.n7n, embedded: false }) && !Oe && !(Se && b?.screen !== void 0) && !(0, import_chunk_9e5mdyfk.rv)(Ie.job.state);
      if (Gt) Se = false;
      let Rt = { kind: "failed" }, He = Ie.respawnResult ?? await dr(Ie.job.id, Ie.freshDispatch ? void 0 : { knownState: Ie.job.state }, b?.storageV5);
      if ((0, import_chunk_w578pjby.t)(`[FV-attach] respawnJob ${Ie.job.id}: ok=${He.ok} alive=${!He.ok && He.alive} err=${He.ok ? "" : He.error}`), He.ok || He.alive) {
        Gi("attach", Ie.job.state, { jobId: (0, import_chunk_49zxha55.Ce)(Ie.job.id), attachShort: (0, import_chunk_49zxha55.Ce)(He.short ?? Ie.job.id), ...ke(Ie.job) }), process.stdout.write((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.SET_TITLE_AND_ICON, tn(Ie.job.state, true)));
        let ot = Date.now(), Ft = { gestureId: Ie.gestureId ?? $t ?? (0, import_crypto.randomUUID)(), attempt: 0, t0: Ie.gestureT0, surface: "fleet", interactive: {} };
        if (Ie.gestureId === void 0 && $t === void 0) (0, import_chunk_4we2aqs8.dIt)(Ft.gestureId, "fleet", b?.storageV5).catch(() => {
        });
        let Ge = (Ne, lo) => (0, import_chunk_4we2aqs8.Fjs)(Ne, { alreadyInAlt: st, onExitNotice: (At) => {
          pt = At;
        }, gateStdinUntilFirstFrame: lo, gesture: Ft, sessionTabs: Gt, cloudTabs: yo?.hostRestartsForCloudTabs(b?.dispatchExtraArgs ?? []) ?? false, tabsLanding: Ie.landing, storageV5: b?.storageV5 }).catch((At) => ((0, import_chunk_k449cc64.i)(At), (0, import_chunk_cqa9hrgx.m)("job_attach", "threw"), { kind: "error", msg: `Couldn't attach \u2014 ${(0, import_chunk_jv7av99m.d)(At)}` })), We = await Ge(He.short ?? Ie.job.id, He.ok || Ie.afterNoResponse === true || yt || Ye), Lt = false;
        if (We.kind === "error" && We.orphaned && !(0, import_chunk_9e5mdyfk.rv)(Ie.job.state) && !(0, import_chunk_xfj2cwfv.nn)()) {
          let Ne = await dr(Ie.job.id, { force: true, knownState: Ie.job.state }, b?.storageV5);
          if (Ne.ok || Ne.alive) Lt = true, We = await Ge(Ne.short ?? Ie.job.id, Ne.ok);
          else We = { kind: "error", msg: Ne.error };
        }
        if ((0, import_chunk_4we2aqs8.D2)(Ft.gestureId, b?.storageV5).catch(() => {
        }), (0, import_chunk_xfj2cwfv.nn)()) return (0, import_chunk_xfj2cwfv.Ga)();
        if (yo) Rt = yo.attachEndingOf(We, !yt);
        if (We.kind === "error" && !We.ended) {
          if (We.notResponding) if ((0, import_chunk_9e5mdyfk.rv)(Ie.job.state)) Qe.setError(bf);
          else wf(Yt, Qe, Ie.job.id);
          else Qe.setError(We.msg);
          if (Lt && We.orphaned) (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "recovered_then_crashed");
          else (0, import_chunk_cqa9hrgx.m)("fleet_view_open", Lt ? "orphan_recovery_failed" : "attach_failed");
        } else {
          if (We.msg) Qe.setError(We.msg);
          (0, import_chunk_cqa9hrgx.u)("fleet_view_open");
        }
        Gi("detach", Ie.job.state, { attachDurationMs: Date.now() - ot }), (0, import_chunk_w578pjby.t)(`[FV-attach] attachJob returned after ${Date.now() - Le}ms \u2014 remounting list`);
      } else {
        Qe.setError(He.error);
        let ot = Ie.gestureId ?? $t;
        if (ot !== void 0) (0, import_chunk_4we2aqs8.D2)(ot, b?.storageV5).catch(() => {
        });
        if (He.errorCode === "fork_transcript_never_materialized") (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "fork_transcript_never_materialized");
        else if (He.errorCode === "job_removed") (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "job_removed");
        else if (He.errorCode === "sign_in_unknown") (0, import_chunk_cqa9hrgx.l)("fleet_view_open", "sign_in_unknown");
        else (0, import_chunk_cqa9hrgx.m)("fleet_view_open", "respawn_failed");
      }
      (0, import_chunk_f9x2f6cx.iia)();
      let ft = false;
      if (yo && !Se && _t()) {
        if (se = await (0, import_chunk_8bkqeb5d.i$e)((0, import_chunk_6k3h3wej.Sx)(false)), ee = void 0, ft = true, st && (Rt.kind === "ended" || Rt.kind === "failed")) process.stdout.write((0, import_chunk_2kg8bxyd.wkn)());
        if (Rt.kind === "failed" || Rt.kind === "back" && Rt.why === "taken") Ae.add(Ie.job.id);
        else Ae.delete(Ie.job.id), Fe = void 0;
        let ot = process.stdin.isTTY === true && process.stdin.isRaw !== true;
        if (ot) (0, import_chunk_84d4qt5z.Fv)(process.stdin, true);
        if (Rt.kind === "ended" || Rt.kind === "asked" && Rt.intent.kind === "leave" && !Rt.intent.running) le.add(Ie.job.id);
        else le.delete(Ie.job.id);
        let { stayAfterCloudTab: Ft } = yo, Ge = await yo.sessionTabsNext({ ending: Rt, leftJobId: Ie.job.id, visited: we.filter((We) => !Ae.has(We)), ended: le, landed: He.ok || He.alive ? void 0 : Ie.landing, storageV5: b?.storageV5 }).then((We) => We.kind === "cloud" ? Ft(We, b?.dispatchExtraArgs ?? [], true, () => false, b?.storageV5) : We).finally(() => {
          if (ot) (0, import_chunk_84d4qt5z.Fv)(process.stdin, false);
        });
        if (Ge.kind === "quit") {
          await yo.backToCloudSession(Fe, true, b?.storageV5), De(Ge.say, true), at();
          break;
        }
        if (Ge.kind === "open") {
          if (Ge.jobs) qt.seedJobs(Ge.jobs);
          let We = await yo.jobToOpen(Ge.jobId, qt.jobs, b?.storageV5);
          if (!We) {
            await yo.backToCloudSession(Fe, true, b?.storageV5), De(yo.NO_SESSION_QUIT_LINE, true), at();
            break;
          }
          Kt = { type: "open", job: We, ...Ge.landing && { landing: Ge.landing } }, ie = !Ge.asked, mt = Ge.booting, Se = false, Qe.setError(null), at();
          continue;
        }
      }
      if (!ft) se = await (0, import_chunk_8bkqeb5d.i$e)((0, import_chunk_6k3h3wej.Sx)(false)), ee = void 0;
      if (Se) {
        if (!st) process.stdout.write(Rha(st, St, w));
        return Se = false, at(), ee ??= (0, import_chunk_6n3q0gvw.DL)(se, null), { back: true, root: se, screen: ee };
      }
      process.stdout.write(Rha(st, St, w)), (0, import_chunk_w578pjby.t)("[PERF:bg-remount-start]"), at();
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
