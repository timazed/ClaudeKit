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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_0rtj0bmp_exports = {};
__export(chunk_0rtj0bmp_exports, {
  $2r: () => $2r,
  $6s: () => $6s,
  $wa: () => $wa,
  Awa: () => Awa,
  B2r: () => B2r,
  B6s: () => B6s,
  BIe: () => BIe,
  Bwa: () => Bwa,
  Cjo: () => Cjo,
  Cwa: () => Cwa,
  D6s: () => D6s,
  Dwa: () => Dwa,
  Ejo: () => Ejo,
  F2l: () => F2l,
  F2r: () => F2r,
  F6s: () => F6s,
  Fwa: () => Fwa,
  G2r: () => G2r,
  G6s: () => G6s,
  Gwa: () => Gwa,
  H6s: () => H6s,
  Hwa: () => Hwa,
  I6s: () => I6s,
  Ive: () => Ive,
  Iwa: () => Iwa,
  JXn: () => JXn,
  Jkn: () => Jkn,
  Jmt: () => Jmt,
  Jwa: () => Jwa,
  KXn: () => KXn,
  Kwa: () => Kwa,
  L6s: () => L6s,
  LKe: () => LKe,
  Lte: () => Lte,
  Lwa: () => Lwa,
  M6s: () => M6s,
  Mwa: () => Mwa,
  N2r: () => N2r,
  N6s: () => N6s,
  NJ: () => NJ,
  NKe: () => NKe,
  Nwa: () => Nwa,
  O6s: () => O6s,
  Owa: () => Owa,
  P6s: () => P6s,
  Pwa: () => Pwa,
  Qkn: () => Qkn,
  Qwa: () => Qwa,
  Rwa: () => Rwa,
  Sjo: () => Sjo,
  Tjo: () => Tjo,
  Twa: () => Twa,
  U2r: () => U2r,
  U6s: () => U6s,
  Uwa: () => Uwa,
  V6s: () => V6s,
  VXn: () => VXn,
  Vwa: () => Vwa,
  W2r: () => W2r,
  W6s: () => W6s,
  Wwa: () => Wwa,
  XXn: () => XXn,
  Xmt: () => Xmt,
  Xwa: () => Xwa,
  YXn: () => YXn,
  Yse: () => Yse,
  Ywa: () => Ywa,
  Zkn: () => Zkn,
  Zwa: () => Zwa,
  _jo: () => _jo,
  bjo: () => bjo,
  cjo: () => cjo,
  eEn: () => eEn,
  eka: () => eka,
  fjo: () => fjo,
  g$e: () => g$e,
  gjo: () => gjo,
  h$e: () => h$e,
  hjo: () => hjo,
  j2r: () => j2r,
  j6s: () => j6s,
  jwa: () => jwa,
  kjo: () => kjo,
  m8t: () => m8t,
  mjo: () => mjo,
  net: () => net,
  oMt: () => oMt,
  p8t: () => p8t,
  pjo: () => pjo,
  qE: () => qE,
  qXn: () => qXn,
  qse: () => qse,
  qwa: () => qwa,
  sMt: () => sMt,
  tEn: () => tEn,
  tka: () => tka,
  ujo: () => ujo,
  vjo: () => vjo,
  wjo: () => wjo,
  xwa: () => xwa,
  yjo: () => yjo,
  z6s: () => z6s,
  zwa: () => zwa
});
module.exports = __toCommonJS(chunk_0rtj0bmp_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_gt0vfa7p = require("/$bunfs/root/chunk-gt0vfa7p.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_w0pnqmj8 = require("/$bunfs/root/chunk-w0pnqmj8.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_5qhr9bm2 = require("/$bunfs/root/chunk-5qhr9bm2.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_0a69wnzr = require("/$bunfs/root/chunk-0a69wnzr.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_q5veqmrm = require("/$bunfs/root/chunk-q5veqmrm.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_89bjmq9y = require("/$bunfs/root/chunk-89bjmq9y.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_qwcebyxc = require("/$bunfs/root/chunk-qwcebyxc.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_1n9wdcmg = require("/$bunfs/root/chunk-1n9wdcmg.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_hj4mak61 = require("/$bunfs/root/chunk-hj4mak61.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_jmm1stqj = require("/$bunfs/root/chunk-jmm1stqj.js");
var import_chunk_zh47ka3v = require("/$bunfs/root/chunk-zh47ka3v.js");
var import_chunk_21y9ek9j = require("/$bunfs/root/chunk-21y9ek9j.js");
var import_chunk_539hrhrd = require("/$bunfs/root/chunk-539hrhrd.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_1n8b5n1q = require("/$bunfs/root/chunk-1n8b5n1q.js");
var import_chunk_1gped6me = require("/$bunfs/root/chunk-1gped6me.js");
var import_chunk_nnsc6a48 = require("/$bunfs/root/chunk-nnsc6a48.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_6gx82r3c = require("/$bunfs/root/chunk-6gx82r3c.js");
var import_chunk_chstxdde = require("/$bunfs/root/chunk-chstxdde.js");
var import_chunk_6k3h3wej = require("/$bunfs/root/chunk-6k3h3wej.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_0dep9bd9 = require("/$bunfs/root/chunk-0dep9bd9.js");
var import_chunk_xb56zerw = require("/$bunfs/root/chunk-xb56zerw.js");
var import_chunk_n69k58aw = require("/$bunfs/root/chunk-n69k58aw.js");
var import_chunk_9xz0nsgn = require("/$bunfs/root/chunk-9xz0nsgn.js");
var import_chunk_eg7q2c7h = require("/$bunfs/root/chunk-eg7q2c7h.js");
var import_chunk_9vbqjvhj = require("/$bunfs/root/chunk-9vbqjvhj.js");
var import_chunk_424x9gf0 = require("/$bunfs/root/chunk-424x9gf0.js");
var import_chunk_gttxc09k = require("/$bunfs/root/chunk-gttxc09k.js");
var import_chunk_vkg6ng3t = require("/$bunfs/root/chunk-vkg6ng3t.js");
var import_chunk_h8v51dgb = require("/$bunfs/root/chunk-h8v51dgb.js");
var import_chunk_y6h5d62w = require("/$bunfs/root/chunk-y6h5d62w.js");
var import_chunk_mj79rpqa = require("/$bunfs/root/chunk-mj79rpqa.js");
var import_chunk_fvd4qp68 = require("/$bunfs/root/chunk-fvd4qp68.js");
var import_chunk_cktd05v4 = require("/$bunfs/root/chunk-cktd05v4.js");
var import_chunk_em330z26 = require("/$bunfs/root/chunk-em330z26.js");
var import_chunk_aeefyj9w = require("/$bunfs/root/chunk-aeefyj9w.js");
var import_chunk_q0fr3q7r = require("/$bunfs/root/chunk-q0fr3q7r.js");
var import_chunk_awaxe5q7 = require("/$bunfs/root/chunk-awaxe5q7.js");
var import_chunk_8cykvqs9 = require("/$bunfs/root/chunk-8cykvqs9.js");
var import_chunk_2kdn1n73 = require("/$bunfs/root/chunk-2kdn1n73.js");
var import_chunk_e7pc50e8 = require("/$bunfs/root/chunk-e7pc50e8.js");
var import_chunk_ap8jm2m5 = require("/$bunfs/root/chunk-ap8jm2m5.js");
var import_chunk_9ph0ypyy = require("/$bunfs/root/chunk-9ph0ypyy.js");
var import_chunk_9nabvees = require("/$bunfs/root/chunk-9nabvees.js");
var import_chunk_7bgv8haz = require("/$bunfs/root/chunk-7bgv8haz.js");
var import_chunk_eh2gjex9 = require("/$bunfs/root/chunk-eh2gjex9.js");
var import_chunk_hgqhjaz5 = require("/$bunfs/root/chunk-hgqhjaz5.js");
var import_chunk_8dns2jbk = require("/$bunfs/root/chunk-8dns2jbk.js");
var import_chunk_e99zzz48 = require("/$bunfs/root/chunk-e99zzz48.js");
var import_chunk_qqb44g89 = require("/$bunfs/root/chunk-qqb44g89.js");
var import_chunk_zyws26f3 = require("/$bunfs/root/chunk-zyws26f3.js");
var import_chunk_1zphp81a = require("/$bunfs/root/chunk-1zphp81a.js");
var import_chunk_7kv2gx33 = require("/$bunfs/root/chunk-7kv2gx33.js");
var import_chunk_hh28vxtr = require("/$bunfs/root/chunk-hh28vxtr.js");
var import_chunk_hh0zpd1p = require("/$bunfs/root/chunk-hh0zpd1p.js");
var import_chunk_e7j4wgse = require("/$bunfs/root/chunk-e7j4wgse.js");
var import_chunk_hghmr3e2 = require("/$bunfs/root/chunk-hghmr3e2.js");
var import_chunk_hjheyj7y = require("/$bunfs/root/chunk-hjheyj7y.js");
var import_chunk_n02njw1s = require("/$bunfs/root/chunk-n02njw1s.js");
var import_chunk_xt12gd7z = require("/$bunfs/root/chunk-xt12gd7z.js");
var import_chunk_1wqrkb4a = require("/$bunfs/root/chunk-1wqrkb4a.js");
var import_chunk_7x4ga2ke = require("/$bunfs/root/chunk-7x4ga2ke.js");
var import_chunk_pkz4wjtb = require("/$bunfs/root/chunk-pkz4wjtb.js");
var import_chunk_5m9vge4h = require("/$bunfs/root/chunk-5m9vge4h.js");
var import_chunk_8kp03twd = require("/$bunfs/root/chunk-8kp03twd.js");
var import_chunk_h70wj3wp = require("/$bunfs/root/chunk-h70wj3wp.js");
var import_chunk_pbbjnb48 = require("/$bunfs/root/chunk-pbbjnb48.js");
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
var import_chunk_63s07fe6 = require("/$bunfs/root/chunk-63s07fe6.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_mmvajxhx = require("/$bunfs/root/chunk-mmvajxhx.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_m417dzmj = require("/$bunfs/root/chunk-m417dzmj.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_chunk_jwwzbnen = require("/$bunfs/root/chunk-jwwzbnen.js");
var import_path = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path2 = require("path");
var import_crypto = require("crypto");
var Hm = __toESM(require("path"));
var import_crypto2 = require("crypto");
var import_promises2 = require("fs/promises");
var import_path3 = require("path");
var import_path4 = require("path");
var import_promises3 = require("fs/promises");
var import_path5 = require("path");
var import_path6 = require("path");
function N2r(e) {
  let o = (0, import_chunk_2mwkxzk6.orn)(e), n = (0, import_chunk_2mwkxzk6.m1t)(o);
  if (o.hasHeld ||= n, o.isOver = true, o.over.resolve(), n) (0, import_chunk_865at33z.ci)().catch((r) => (0, import_chunk_w578pjby.t)(`flag fetch after the hold did not begin (${(0, import_chunk_jv7av99m.d)(r)})`, { level: "error" }));
}
var wn = (e) => (0, import_chunk_2mwkxzk6.orn)(e).hasHeld;
var np = { before: "before_held_growthbook_init", after: "after_held_growthbook_init" };
function za(e, o) {
  try {
    return e(o);
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`flag fetch held: the rule for pending settings environment threw (${(0, import_chunk_jv7av99m.d)(n)})`, { level: "error" }), true;
  }
}
var ap = (e, o, n) => {
  (0, import_chunk_2mwkxzk6.orn)(e.host).isPending ??= za(o, n);
};
var F2l = (e, o) => !o.hasCompletedOnboarding && wn(e);
var Rs = (e) => e || import_chunk_xzvhvaa2.WA.some((o) => (0, import_chunk_xzvhvaa2.rn)(o) && Object.keys((0, import_chunk_5e3gtsn9.Gle)((0, import_chunk_2yx6c1y2._e)(o)?.env, o, { comparesNoValue: true })).length > 0);
var up = (e, o) => !o && !(0, import_chunk_f9x2f6cx.Se)() && wn(e.host) && (0, import_chunk_865at33z.ni)();
function gp(e, o, n) {
  return (0, import_chunk_tfs0ssqe.JLn)() ? (0, import_chunk_539hrhrd.WIe)(e, o, n) : void 0;
}
var gr = 1e3, Os = 9;
function Xa(e, o) {
  try {
    e(o);
  } catch (n) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n));
  }
}
class Ja {
  #r = false;
  #n = false;
  #c;
  #u = gr;
  #s = 0;
  #o = [];
  #t;
  #i;
  #a;
  #l;
  #e;
  get isArmed() {
    return this.#r;
  }
  get isOpen() {
    return this.#n;
  }
  get openReason() {
    return this.#a;
  }
  arm(e = gr) {
    if (this.#r || this.#n) return;
    this.#r = true, this.#c = performance.now(), this.#u = e, this.#i = (0, import_chunk_w578pjby.Ct)(() => this.release("shutdown"));
  }
  expectHandshake() {
    if (!this.#r || this.#n || this.#t !== void 0) return;
    this.#d();
  }
  #d() {
    if (this.#t !== void 0) clearTimeout(this.#t);
    this.#t = setTimeout(() => {
      if (this.#t = void 0, this.#o.length > 0 && this.#s < Os && this.#l?.()) {
        this.#s++, this.#d();
        return;
      }
      this.release("fallback_timeout");
    }, this.#u), this.#t.unref?.();
  }
  hold(e, o) {
    if (!this.#r || this.#n) {
      o(this.#a ?? "not_armed");
      return;
    }
    this.#o.push({ name: e, task: o });
  }
  yieldToTurnWhen(e) {
    this.#l = e;
  }
  release(e) {
    let o = e === "shutdown" || e === "input_closed" || e === "not_applicable", n = this.#e ? this.#e.held.slice(this.#e.next) : [], r = o || e === "turn_started" && this.#e?.reason === "host_initialized";
    if (this.#n && this.#o.length === 0 && !(r && n.length > 0)) return;
    let g = !this.#n;
    if (g) this.#n = true, this.#a = e;
    if (this.#t !== void 0) clearTimeout(this.#t), this.#t = void 0;
    let h = [...n, ...this.#o];
    if (this.#o = [], this.#e) this.#e.next = this.#e.held.length, this.#e = void 0;
    if (this.#r) (0, import_chunk_w578pjby.t)(`[startupWorkGate] ${g ? "open" : "draining remainder"} (${e}) after ${Math.round(performance.now() - (this.#c ?? 0))}ms; running ${h.length} held task(s): ${h.map((v) => v.name).join(", ")}`);
    if (o) {
      for (let { task: v } of h) Xa(v, e);
      this.#p(e);
      return;
    }
    let C = { reason: e, held: h, next: 0 };
    this.#e = C;
    let y = () => {
      if (this.#e !== C) return;
      let v = C.held[C.next];
      if (v === void 0) {
        this.#e = void 0, this.#p(e);
        return;
      }
      if (e === "host_initialized" && this.#l?.()) {
        this.#o = [...C.held.slice(C.next), ...this.#o], this.#e = void 0, this.#s = 0, this.#d(), (0, import_chunk_w578pjby.t)(`[startupWorkGate] a turn started during the idle release; ${this.#o.length} task(s) wait for it`);
        return;
      }
      C.next++, Xa(v.task, e), setImmediate(y);
    };
    setImmediate(y);
  }
  #p(e) {
    if (e !== "shutdown") this.#i?.();
    this.#i = void 0;
  }
}
var An = new import_chunk_2904xtvq.j(() => new Ja());
function Qa(e, o) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_STARTUP_WORK_GATE) return;
  An.of(e).arm(o);
}
function Jkn(e, o, n) {
  An.of(e).hold(o, n);
}
function Za(e, o) {
  return new Promise((n) => Jkn(e, o, n));
}
function Twa(e) {
  An.of(e).expectHandshake();
}
function Cwa(e, o) {
  An.of(e).yieldToTurnWhen(o);
}
function LKe(e, o) {
  An.of(e).release(o);
}
function hr() {
  let e = import_chunk_c203g5kd.s.CLAUDE_BG_SESSION_PERMISSION_RULES;
  if (!e || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  try {
    let o = JSON.parse(e);
    if (!Array.isArray(o.allow) || !Array.isArray(o.deny)) return;
    let n = Array.isArray(o.addDirs) ? o.addDirs.filter((r) => typeof r === "string") : void 0;
    return { allow: o.allow, deny: o.deny, ...n !== void 0 && n.length > 0 && { addDirs: n }, ...o.holdsBypass === true && { holdsBypass: true } };
  } catch {
    return;
  }
}
function yp() {
  let e = import_chunk_c203g5kd.s.CLAUDE_RELAUNCH_SESSION_ADD_DIRS;
  if (e === void 0) return;
  import_chunk_c203g5kd.s.unset("CLAUDE_RELAUNCH_SESSION_ADD_DIRS");
  try {
    let o = (0, import_chunk_w578pjby.te)(e);
    if (!Array.isArray(o)) return;
    let n = o.filter((r) => typeof r === "string");
    return n.length > 0 ? n : void 0;
  } catch {
    return;
  }
}
async function tl(e) {
  if (import_chunk_c203g5kd.s.CLAUDE_BG_MEMORY_TOGGLED_OFF === "1" && import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg") (0, import_chunk_f9x2f6cx.WOe)(true);
  if (e.baseTools && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") {
    if ((0, import_chunk_e99zzz48.SVr)(e.baseTools)) (0, import_chunk_aw5nczax.$Ta)();
  }
  let o = await (0, import_chunk_awvk50qj._Zs)({ allowedToolsCli: e.allowedTools, disallowedToolsCli: e.disallowedTools, baseToolsCli: e.baseTools, getAllBaseTools: import_chunk_aw5nczax.$v, restricted: e.restricted, permissionMode: e.permissionMode, allowDangerouslySkipPermissions: e.allowDangerouslySkipPermissions, addDirs: e.addDirs, backgroundSessionPermissionRules: hr(), relaunchSessionAddDirs: yp(), storageV5: e.storageV5 }), n = o.toolPermissionContext, { warnings: r, securityWarnings: g, overlyBroadBashPermissions: h, bypassCapabilityNotification: C } = o;
  (0, import_chunk_p1ewvgeh.cSl)(n), (0, import_chunk_bzyb60p0.ceo)(void 0);
  let y = (0, import_chunk_p1ewvgeh.DSs)(n);
  if (y !== void 0) g.push({ text: y });
  let v = new Set((0, import_chunk_bzyb60p0.iQ)());
  if ((0, import_chunk_ze4kt7fs.Lul)(n, o.inheritedSessionDirectories, { disallowedTools: (0, import_chunk_qebpc5de.QDr)(e.disallowedTools).filter((R) => !v.has(R)), tools: e.baseTools ?? [] }), o.inheritedSessionDirectories.length > 0) {
    let R = (0, import_chunk_f9x2f6cx.tu)(), A = new Set(R.map((H) => (0, import_chunk_z6pfqf6e.pn)((0, import_path.resolve)(H)))), I = o.inheritedSessionDirectories.filter((H) => !A.has((0, import_chunk_z6pfqf6e.pn)((0, import_path.resolve)(H))));
    if (I.length > 0) (0, import_chunk_f9x2f6cx.AL)([...R, ...I]);
  }
  if ((0, import_chunk_awvk50qj.k3o)(), e.permissionMode === "auto") n = (0, import_chunk_awvk50qj.pie)(n);
  if (e.permissionMode === "plan") {
    let R = (0, import_chunk_awvk50qj.K5r)(n, { chosenByHost: e.modeChosenByHost === true });
    if (R) n = { ...R, prePlanMode: "default" };
  }
  return (0, import_chunk_0a69wnzr.sho)(n), { toolPermissionContext: n, warnings: r, securityWarnings: g, overlyBroadBashPermissions: h, ...C !== void 0 && { bypassCapabilityNotification: C } };
}
function F2r(e) {
  return e && (0, import_chunk_pbbjnb48.E1n)();
}
function cjo(e) {
  if (!e || (0, import_chunk_f9x2f6cx.Yy)() || !(0, import_chunk_bzyb60p0.sar)()) return false;
  let o = (0, import_chunk_18rsj2ts.oa)();
  return o !== null && (0, import_chunk_w5s307zm.dr)(o) !== null && (0, import_chunk_865at33z.b)("tengu_crispy_flame", false);
}
function Awa(e, o, n, r) {
  if (F2r(o)) (0, import_chunk_bzyb60p0.$F)(e, n, r).catch(() => {
  });
}
function ol(e) {
  return e && (0, import_chunk_865at33z.b)("tengu_amber_sluice", false);
}
function nl(e, o) {
  return e.catch(() => {
  }).then(() => (0, import_chunk_cqa9hrgx.qo)("startup_command_scan_after_mcp_config", o));
}
function rl({ sdkUrl: e, isNonInteractiveSession: o }) {
  if (o && !e && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && import_chunk_c203g5kd.s.CLAUDE_CODE_TRANSCRIPT_LOCAL_GC === true) (0, import_chunk_bzyb60p0.Jcr)(true);
}
function sl({ sdkUrl: e, isNonInteractiveSession: o }) {
  if (o && e && (0, import_chunk_6e68m1dj.hn)()) (0, import_chunk_bzyb60p0.qmi)(import_chunk_c203g5kd.s.CLAUDE_CODE_TRANSCRIPT_SLIM_TOOL_RESULTS ? "slim" : "counted");
}
function il() {
  (0, import_chunk_bzyb60p0.Ymi)(import_chunk_c203g5kd.s.CLAUDE_CODE_TRANSCRIPT_TAIL_LOAD, () => (0, import_chunk_865at33z.b)(import_chunk_865at33z.Nxl, false));
}
var Cp = "tengu_gleaming_pumpkin";
function al() {
  (0, import_chunk_bzyb60p0.Xmi)(() => (0, import_chunk_865at33z.b)(Cp, true));
}
function VXn(e) {
  return e.kind === "unavailable" && e.reason !== "mcp" ? e.reason : void 0;
}
function cl(e, o) {
  return o.explicitCloudLaunch ? void 0 : VXn(e);
}
var Is = "Claude Code can't read the keyboard here: stdin is not a terminal (it is piped, redirected, or supplied by the program that launched claude)", ul = { windows: { lines: [`${Is}, and on Windows it can't fall back to the console for input yet.`, "Run claude directly in Windows Terminal, PowerShell, or Command Prompt, without piping or redirecting its input."], reader: "type" }, ci: { lines: [`${Is}, and the CI environment variable is set, so it doesn't fall back to the terminal for input.`, "Unset the CI environment variable to work interactively."], reader: "cat" }, tty_unavailable: { lines: [`${Is}, and the terminal device (/dev/tty) couldn't be opened to read the keyboard instead.`, "Start claude directly from a terminal."], reader: "cat" } };
function $2r(e) {
  return ul[e].lines.join(`
`);
}
async function P6s(e) {
  try {
    await (0, import_chunk_cqa9hrgx.oi)("startup_interactive_input", e, { stdin_kind: (0, import_chunk_78g0060s.f)(await Ep()) });
  } catch {
  }
}
async function pl(e) {
  let { lines: o, reader: n } = ul[e];
  return (0, import_chunk_mpk68jst.Hp)([...o, bp(n)].join(`
`)), await P6s(e), (0, import_chunk_mpk68jst.ho)();
}
function bp(e) {
  return `To send text as a prompt and print the reply instead, add -p; it also works with --continue and --resume <session-id> (for example: ${e} notes.md | claude -p --continue).`;
}
async function Ep() {
  let e = await new Promise((o) => {
    (0, import_fs.fstat)(0, (n, r) => o(n ? void 0 : r));
  });
  if (e === void 0) return "unknown";
  if (e.isFIFO()) return "pipe";
  if (e.isFile()) return "file";
  if (e.isSocket()) return "socket";
  if (e.isCharacterDevice()) return "character_device";
  return "other";
}
async function ml({ cwd: e, toolPermissionContext: o, applyCoordinatorFilter: n, agentsJson: r, agentSetting: g, commandsPromise: h, agentDefsPromise: C, deferCommands: y, onToolsLoaded: v, storageV5: R }) {
  let A = (0, import_chunk_aw5nczax.n6)(o);
  if (n && (0, import_chunk_c4zg4pwc.dl)()) {
    let { applyCoordinatorToolFilter: ie } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-nzkf76bt.js")));
    A = ie(A);
  }
  v?.(), h?.catch(() => {
  }), C?.catch(() => {
  });
  let I = h ?? (0, import_chunk_bzyb60p0.Fm)(e, R);
  if (y) I.catch(() => {
  });
  let [H, G] = await Promise.all([y ? Promise.resolve([]) : I, C ?? (0, import_chunk_bzyb60p0.XD)(e, R)]), K = [];
  if (r && !(0, import_chunk_0pb268nk.Lr)("agents", { explicitlyRequested: true })) try {
    let ie = (0, import_chunk_0jve1fep.et)(r);
    if (ie) K = (0, import_chunk_bzyb60p0.iyt)(ie, "flagSettings");
  } catch (ie) {
    (0, import_chunk_k449cc64.i)(ie);
  }
  else if (r) (0, import_chunk_w578pjby.t)("--agents: ignored in safe mode (user-supplied custom agents are disabled)", { level: "warn" });
  let z = (0, import_chunk_bzyb60p0.nQ)(G, [...G.allAgents, ...K]), oe = KXn(z.activeAgents, g);
  return (0, import_chunk_f9x2f6cx.VOe)(oe?.agentType), { tools: A, commands: H, agentDefinitions: z, mainThreadAgentDefinition: oe, cliAgents: K, deferredCommandsPromise: y ? I : void 0 };
}
function xs(e) {
  return e && import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL;
}
function KXn(e, o) {
  if (!o) return;
  let n = (0, import_chunk_tc5xmewh.tlo)(e), r = n.find((g) => g.agentType === o) ?? n.find((g) => g.agentType.endsWith(`:${o}`));
  if (!r) (0, import_chunk_w578pjby.t)(`Warning: agent "${o}" not found. Available agents: ${e.map((g) => g.agentType).join(", ")}. Using default behavior.`);
  return r;
}
function fl(e, o = process.env) {
  if (e) o.CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT = "1";
}
async function gl(e) {
  if (!e.appendSubagentSystemPromptFile) return { ok: true, prompt: e.appendSubagentSystemPrompt };
  if (e.appendSubagentSystemPrompt) return { ok: false, error: "Error: Cannot use both --append-subagent-system-prompt and --append-subagent-system-prompt-file. Please use only one." };
  let o = (0, import_path2.resolve)(e.appendSubagentSystemPromptFile);
  try {
    return { ok: true, prompt: await (0, import_promises.readFile)(o, "utf8") };
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) === "ENOENT") return { ok: false, error: `Error: Append subagent system prompt file not found: ${o}` };
    return { ok: false, error: `Error reading append subagent system prompt file: ${(0, import_chunk_jv7av99m.d)(n)}` };
  }
}
function oMt() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_CONFIG_PROBE;
}
var Ap = /* @__PURE__ */ new Set(["remote", "remote_desktop", "remote_mobile"]);
function hl(e) {
  (0, import_chunk_f9x2f6cx.Wla)(e.cloudOrigin === "remote_mobile"), (0, import_chunk_f9x2f6cx.Ula)(!(0, import_chunk_q5veqmrm.ZW)() && (import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_WRAP_UP ?? (e.promptSuggestions === true && e.cloudOrigin !== void 0 && Ap.has(e.cloudOrigin))) && (0, import_chunk_8dns2jbk.I8t)());
}
function ujo(e) {
  if ((0, import_chunk_n25gt70y.Jj)() === null) {
    if (!(0, import_chunk_n25gt70y.yVn)()) return e;
    return (0, import_chunk_865at33z.ck)(), (0, import_chunk_865at33z.JU)(), e.valid && (0, import_chunk_n25gt70y.JAt)() === "login_method_pin" ? Sr() ?? e : e;
  }
  let o = e.valid ? Sr() : e;
  if (o === null) return e;
  return (0, import_chunk_n25gt70y.YXe)(), (0, import_chunk_865at33z.ck)(), o;
}
function Sl(e) {
  if ((e.remote !== null || e.teleport !== null || e.poolId !== null || e.environmentQuery !== null || e.projectFlag !== null || e.projectBrowse !== null) && (0, import_chunk_n25gt70y.YXe)() && (0, import_chunk_n25gt70y.yVn)()) (0, import_chunk_w578pjby.t)("[launcher-host-login] the desktop app's sign-in is over for this process (session_elsewhere)", { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("auth_launcher_host_login", "session_elsewhere"), (0, import_chunk_865at33z.ck)(), (0, import_chunk_865at33z.JU)();
}
async function fjo(e) {
  let o = await (0, import_chunk_865at33z.E7e)(e), n = o?.organization_uuid, r = o?.account_uuid;
  return typeof n === "string" && n !== "" && typeof r === "string" && r !== "" ? { organizationUuid: n, accountUuid: r } : null;
}
async function Rwa(e, o) {
  let n = Sr(), r = null;
  if (n !== null) r = { verdict: "refused", why: n.reason };
  else {
    let [g, h] = await Promise.all([(0, import_chunk_n25gt70y.uhn)(fjo), fjo(o)]), C = await (0, import_chunk_865at33z.SM)(e, void 0, { accessToken: o, organizationUuid: h?.organizationUuid }), y = Sr();
    if (y !== null) r = { verdict: "refused", why: y.reason };
    else if (!C.valid) r = { verdict: C.reason === "org_verify_failed" ? "unverified" : "refused", why: C.reason };
    else if (h === null) r = { verdict: "unverified", why: "identity_not_learned" };
    else if (g === null) r = { verdict: "held_unknown", why: "identity_not_learned" };
    else if (g.organizationUuid !== h.organizationUuid || g.accountUuid !== h.accountUuid) r = { verdict: "refused", why: "not_the_startup_identity" };
  }
  if (r === null) return "allowed";
  return (0, import_chunk_w578pjby.t)(`[launcher-host-login] the desktop app's replacement sign-in is not taken (${r.why})`, { level: "warn" }), r.verdict;
}
function Sr() {
  let e = (0, import_chunk_865at33z.izn)();
  return e === null ? null : { valid: false, reason: "managed_settings_invalid", message: `The sign-in the desktop app provided is a claude.ai sign-in, which the settings in force do not allow.

${e}` };
}
async function BIe(e, o) {
  switch (o.kind) {
    case "session-start": {
      let n = await (0, import_chunk_bzyb60p0.lCe)(e, o.source, { sessionId: o.sessionId, agentType: o.agentType, model: o.model, forceSyncExecution: o.forceSyncExecution, orphaned: o.orphaned, newPluginsOnly: o.newPluginsOnly, storageV5: o.storageV5, credentials: o.credentials });
      if (o.orphaned?.aborted) return n;
      let r = (0, import_chunk_bzyb60p0.yIn)();
      if (r) (0, import_chunk_bzyb60p0.wMn)(r);
      return n;
    }
    case "setup":
      return (0, import_chunk_bzyb60p0.R4a)(e, o.trigger, { forceSyncExecution: o.forceSyncExecution, storageV5: o.storageV5, credentials: o.credentials });
  }
}
function Ns(e, o) {
  if (!o) return e;
  if (!e) return o;
  return `${e.replace(/\r?\n$/, "")}

${o}`;
}
function pjo(e) {
  return e !== void 0 && e !== null && !(Array.isArray(e) && e.length === 0);
}
var Ho = "is not supported in a cloud-hosted session", yl = "names a path on this machine; the agent's files are in the cloud container", Tp = "is not available while this process drives a cloud-hosted session";
function Rp(e) {
  return `these options cannot apply to a cloud-hosted session, where the agent runs in the cloud container; remove: ${e.join(", ")}`;
}
var Op = "bypassPermissions is not available in a cloud-hosted session", Ip = "file rewinding is not available in a cloud-hosted session: the cloud agent keeps no file checkpoints", Fp = "MCP server changes are not available in a cloud-hosted session yet; this machine's MCP servers reach cloud sessions through the device link", xwa = /* @__PURE__ */ new Set(["mcp_read_resource_v1", "sdk_mcp_tools_list_changed", "sdk_mcp_manifests", "register_repo_root_v1", "interrupt_requeue_taken_v1", "start_shell_task_v1", "voice_call_talk_line_v1", "withdrawn_files_note_v2", "withdrawn_tools_v1", "silent_resend_files_v1", "update_queued_message_v1"]), O6s = /* @__PURE__ */ new Set(["model", "advisorModel", "effortLevel", "ultracode", "fastMode", "viewMode", "alwaysThinkingEnabled"]);
function I6s(e) {
  return typeof e === "object" && e !== null && "subtype" in e ? e.subtype : void 0;
}
function Pwa(e, o) {
  let n = Lp(e, o);
  return n === null ? { route: { kind: "reject", error: `${xp(I6s(e))} ${Ho}` }, telemetrySubtype: "unknown" } : { route: n, telemetrySubtype: e.subtype };
}
var Bs = 8;
function mjo(e) {
  let o = e.slice(0, Bs).map((n) => (0, import_chunk_7cfjrnwy.ee)(qE(n), 64));
  return e.length > Bs ? `${o.join(", ")} (and ${e.length - Bs} more)` : o.join(", ");
}
function xp(e) {
  return typeof e === "string" ? (0, import_chunk_7cfjrnwy.ee)(qE(e), 64) : "a request without a string subtype";
}
function Lp(e, o) {
  let n = { kind: "forward", holdsLaterSends: false }, r = { kind: "forward", holdsLaterSends: true };
  if (e.subtype === "set_proactivity_level") return { kind: "reject", error: "set_proactivity_level is not available in a cloud-hosted session yet" };
  switch (e.subtype) {
    case "initialize":
    case "interrupt":
    case "end_session":
    case "cancel_async_message":
      return { kind: "local", handler: e.subtype };
    case "set_permission_mode":
      return o.strict && e.mode === "bypassPermissions" ? { kind: "reject", error: Op } : r;
    case "set_model":
    case "set_max_thinking_tokens":
    case "mcp_toggle":
    case "mcp_reconnect":
    case "reload_skills":
    case "reload_output_styles":
    case "set_mcp_permission_mode_override":
    case "set_chrome_browser_hints":
    case "set_prompt_suggestions_paused":
      return r;
    case "reload_plugins":
      return pjo(e.add_plugins) ? { kind: "reject", error: `reload_plugins add_plugins ${yl}` } : r;
    case "apply_flag_settings": {
      let g = Up(e.settings);
      return g === null ? { kind: "reject", error: "apply_flag_settings requires settings to be an object" } : g.length > 0 ? { kind: "reject", error: `apply_flag_settings keys not available in a cloud-hosted session: ${mjo(g)}` } : r;
    }
    case "update_settings":
      return { kind: "reject", error: "update_settings is not available in a cloud-hosted session yet" };
    case "get_memory_dialog":
      return { kind: "reject", error: "get_memory_dialog is not available in a cloud-hosted session" };
    case "get_skills_dialog":
      return { kind: "reject", error: "get_skills_dialog is not available in a cloud-hosted session" };
    case "get_status":
      return { kind: "reject", error: "get_status is not available in a cloud-hosted session" };
    case "export_conversation":
      return { kind: "reject", error: "export_conversation is not available in a cloud-hosted session" };
    case "list_cloud_sessions":
    case "get_cloud_session":
    case "get_cloud_session_transcript":
    case "update_cloud_session":
    case "log_host_events":
    case "reload_connectors":
      return { kind: "reject", error: `${e.subtype} is not available in a cloud-hosted session` };
    case "get_chrome_dialog":
      return { kind: "reject", error: "get_chrome_dialog is not available in a cloud-hosted session" };
    case "get_chrome_browsers":
      return { kind: "reject", error: "get_chrome_browsers is not available in a cloud-hosted session" };
    case "select_chrome_browser":
      return { kind: "reject", error: "select_chrome_browser is not available in a cloud-hosted session" };
    case "get_sandbox_dialog":
      return { kind: "reject", error: "get_sandbox_dialog is not available in a cloud-hosted session" };
    case "update_queued_message":
      return { kind: "reject", error: "update_queued_message is not available in a cloud-hosted session" };
    case "rewind_conversation":
      return r;
    case "fork_conversation":
      return { kind: "reject", error: "fork_conversation is not available in a cloud-hosted session" };
    case "seed_read_state":
      return r;
    case "rewind_files":
      return { kind: "reject", error: Ip };
    case "get_context_usage":
    case "get_session_cost":
    case "mcp_status":
    case "list_models":
    case "get_usage":
    case "get_binary_version":
    case "file_suggestions":
    case "read_file":
    case "list_directory":
    case "get_workspace_diff":
    case "get_plan":
    case "stop_task":
    case "background_tasks":
    case "get_task_output":
    case "send_task_message":
    case "get_settings":
    case "get_hooks_listing":
    case "list_permission_rules":
    case "submit_feedback":
    case "submit_survey_feedback":
    case "message_rated":
    case "generate_session_title":
    case "side_question":
    case "mcp_call":
      return n;
    case "prefetch_attachments":
      return n;
    case "rename_session":
      return e.names_chrome_tab_group === void 0 ? n : { kind: "reject", error: "names_chrome_tab_group is set by the service, not by a host" };
    case "mcp_set_servers":
      return { kind: "reject", error: Fp };
    case "set_cwd":
    case "claim_session":
    case "add_directory":
    case "register_repo_root":
      return { kind: "reject", error: `${e.subtype} ${yl}` };
    case "remote_control":
    case "channel_enable":
    case "ultrareview_launch":
    case "claude_authenticate":
    case "claude_oauth_callback":
    case "claude_oauth_wait_for_completion":
    case "mcp_authenticate":
    case "mcp_clear_auth":
    case "mcp_oauth_callback_url":
    case "set_color":
      return { kind: "reject", error: `${e.subtype} ${Tp}` };
    case "mcp_message":
      return { kind: "reject", error: "SDK MCP servers are not available in a cloud-hosted session" };
    case "mcp_read_resource":
      return { kind: "reject", error: "mcp_read_resource is not available in a cloud-hosted session yet" };
    case "launch_fork":
      return { kind: "reject", error: "Only the chat's own page can send launch_fork" };
    case "poll_event":
      return { kind: "reject", error: "poll_event is not available in a cloud-hosted session yet" };
    case "start_shell_task":
      return { kind: "reject", error: `start_shell_task ${Ho}` };
    case "set_has_subscribers":
      return { kind: "reject", error: `set_has_subscribers ${Ho}` };
    case "set_message_waiting":
      return { kind: "reject", error: `set_message_waiting ${Ho}` };
    case "prompt_draft_activity":
      return { kind: "reject", error: `prompt_draft_activity ${Ho}` };
    case "stage_file":
    case "turn_handoff":
    case "comparison_fork":
    case "mcp_tasks_changed":
    case "set_attached_project":
      return { kind: "reject", error: `${e.subtype} is sent to a cloud agent by the service, not by a host` };
    case "register_device_hooks":
    case "upload_device_hook_template":
    case "remote_tools_announce":
      return { kind: "reject", error: `${e.subtype} is sent to a cloud agent by the attached client, not by a host` };
    case "dictate":
      return { kind: "reject", error: `dictate ${Ho}` };
    case "can_use_tool":
    case "hook_callback":
    case "elicitation":
    case "request_user_dialog":
    case "oauth_token_refresh":
    case "host_auth_token_refresh":
    case "remote_tool_call":
    case "remote_plumbing_call":
    case "remote_tools_probe":
    case "remote_tools_reannounce":
    case "remote_control_work_secret":
      return { kind: "reject", error: `${e.subtype} is agent-originated and cannot be sent by a host` };
    default:
      return null;
  }
}
function Up(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  return Object.keys(e).filter((o) => !O6s.has(o));
}
var _l = { systemPrompt: "lost", appendSystemPrompt: "lost", agents: "lost", jsonSchema: "lost", skills: "lost", title: "preference", planModeInstructions: "lost", systemPromptSnapshot: "lost", toolAliases: "lost", codeRunningMcpTools: "lost", excludeDynamicSections: "preference", appendSubagentSystemPrompt: "lost", promptSuggestions: "preference", agentProgressSummaries: "preference", forwardSubagentText: "lost", forwardNestedSubagentToolCalls: "lost", webSearchIsolationExemptMcpServers: "lost", supportedDialogKinds: "preference", perTaskStopAffordance: "lost", rapidFollowupPreempt: "preference", cloudEchoBeforeInit: "preference", cloudStatusBeforeInit: "preference", rendersChromeSetupOffer: "lost", offersBypassSwitchBack: "preference", keepsBypassHeld: "preference", plugins: "lost", managedSettings: "lost", settings: "lost", disallowedTools: "lost", mcpServers: "lost", workspaceTrust: "preference", proactivity: "preference", attachServeRequest: "preference" }, jp = Object.keys(_l);
function Owa(e) {
  return _l[e] ?? "lost";
}
var $p = /* @__PURE__ */ new Set();
function _r(e) {
  return typeof e === "object" && e !== null && Object.values(e).some((o) => Array.isArray(o) && o.length > 0);
}
function $o(e) {
  if (typeof e !== "object" || e === null) return false;
  let o = "tools" in e ? e.tools : void 0, n = "disallowedTools" in e ? e.disallowedTools : void 0, r = "hooks" in e ? e.hooks : void 0, g = "permissionMode" in e ? e.permissionMode : void 0, h = (y) => Array.isArray(y) && y.length === 1 && y[0] === "*", C = (y) => Array.isArray(y) && y.length > 0;
  return o !== void 0 && !h(o) || C(n) && !h(n) || _r(r) || g === "plan" || g === "dontAsk";
}
function Wp(e) {
  if (e === void 0) return [];
  if (typeof e !== "object" || e === null || Array.isArray(e)) return ["(unreadable)"];
  return Object.entries(e).filter(([, o]) => $o(o)).map(([o]) => o);
}
var Gp = "agent definitions that list tools or hooks, or set a permission mode, are not enforced by a cloud session", Hs = "structured output is not delivered to a cloud session yet", hjo = ["supportedDialogKinds", "cloudEchoBeforeInit", "cloudStatusBeforeInit"];
function gjo(e, o, n = $p) {
  let r = _r(e.hooks), g = e.sdkMcpServers, h = Array.isArray(g) && g.length > 0, C = e.jsonSchema !== void 0, y = Wp(e.agents), v = [...r ? ["hooks"] : [], ...h ? ["sdkMcpServers"] : [], ...y.length > 0 ? ["agents"] : [], ...C ? ["jsonSchema"] : []], R = jp.filter((A) => e[A] !== void 0 && !n.has(A) && !v.includes(A) && !Vp(A, e[A]));
  if (v.length > 0 && o === "strict") return { outcome: "reject", error: Rp(v.map((A) => A === "jsonSchema" ? `jsonSchema (${Hs})` : A === "agents" ? `agents (${mjo(y)}: ${Gp})` : A)), ignored: R };
  return { outcome: "accept", ignored: [...v, ...R] };
}
function Vp(e, o) {
  return e === "systemPrompt" && Array.isArray(o) && o.length === 1 && o[0] === "";
}
function Iwa(e) {
  return { commands: [], agents: [], output_style: "default", available_output_styles: [], models: [], account: e, pid: process.pid };
}
function Qkn(e, o, n) {
  return { type: "user", uuid: o, session_id: e, isReplay: true, parent_tool_use_id: null, message: { role: "user", content: n } };
}
function qse(e, o, n, r) {
  return { type: "system", subtype: "informational", level: o, content: n, ...r !== void 0 && { tag: r }, uuid: (0, import_crypto.randomUUID)(), session_id: e };
}
var Kp = 512, _jo = 200, yjo = 8;
function Lte(e) {
  return qE(e, _jo);
}
var zp = 2048, Cl = "[\\u200C\\u200D\\uFE00-\\uFE0F\\u{E0100}-\\u{E01EF}]", qp = new RegExp(Cl, "gu"), Xp = new RegExp(`(?:(?!${Cl})[\\p{Cc}\\p{Cf}\\p{Default_Ignorable_Code_Point}\\u2028\\u2029])+`, "gu"), Jp = 8;
function NKe(e) {
  return qE(e, zp);
}
function qE(e, o = Kp) {
  let n = 0;
  return (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_wbk1hf21.w1e)(e).replace(Xp, " ").replace(qp, (r) => n++ < Jp ? r : "").trim(), o);
}
var Us = 400;
function Mwa(e, o) {
  let n = (0, import_chunk_mmvajxhx.wvo)(e.claude_code_version) ?? "unknown", r = e.startup_timing, g = typeof r === "object" && r !== null && "warm_spare_claimed" in r ? r.warm_spare_claimed : void 0, h = typeof g === "boolean" ? String(g) : "unknown", C = `[headlessCloudClient] worker init: claude_code_version=${n} warm_spare=${h}`;
  if (!Array.isArray(e.tools)) return `${C} tools=unknown`;
  let y = e.tools.filter((G) => typeof G === "string").map(import_chunk_qebpc5de.Gl), v = y.filter((G) => o.has(G)), R = y.filter((G) => !o.has(G)).map(import_chunk_bzyb60p0.ces), A = import_chunk_bzyb60p0.Fqa.flatMap((G) => {
    let K = (0, import_chunk_4smdap7r.U)(R, (z) => z === G);
    return K > 0 ? [`${G} x${K}`] : [];
  }), I = [...v.slice(0, Us), ...A].join(","), H = v.length > Us ? ` (+${v.length - Us} more not shown)` : "";
  return `${C} tools(${y.length})=${I}${H}`;
}
var yr = "Cloud session disconnected";
function Sjo(e) {
  switch (e) {
    case "untrusted_device":
    case "session_stale_relogin":
      return e;
    case "invalid_session_id":
    case "session_security_tier_below_org_policy":
    case "request_rejected":
    case "malformed_response":
    case void 0:
      return "stream_closed";
  }
}
function bjo(e) {
  switch (e) {
    case "stream_closed":
      return `${yr} (stream_closed): this machine is no longer attached. If the session still exists it keeps running in the cloud; open it again to re-attach.`;
    case "untrusted_device":
      return `${yr} (untrusted_device): the server no longer accepts this machine's device proof. Sign in again on this machine, then open the session again.`;
    case "session_stale_relogin":
      return `${yr} (session_stale_relogin): the sign-in on this machine has expired. Sign in again on this machine, then open the session again.`;
    case "attach_rejected":
      return `${yr} (attach_rejected): this cloud session can no longer be attached to (it may have been archived). Start a new cloud session instead.`;
  }
}
var Hwa = { bypass: "rejected_argv", attach_restriction: "rejected_tool_restriction", tool_restriction: "rejected_tool_restriction", auto_mode_rules: "rejected_tool_restriction", deny_rule_unclosed: "deny_rule_unclosed", sdk_mcp: "rejected_argv", unsupported: "rejected_unsupported" }, Dwa = { kind: "lost", name: "--max-turns", why: "the service did not confirm the turn limit, so assume none is enforced" };
function Lwa(e, o) {
  return { mcpConfigFlagServers: e.mcpConfigFlagServers, flagSettings: o, systemPrompt: e.systemPromptCli, appendSystemPrompt: e.appendSystemPromptCli, selectedAgentDefinition: e.mainThreadAgentDefinition ?? null };
}
function Nwa(e, o) {
  return { ...e, maxTurns: o, ...false };
}
var bt = { treat: "client" }, Ge = { treat: "create" }, Xe = { treat: "ignore", kind: "lost" };
function Et(e) {
  return { treat: "ignore", kind: "lost", why: e };
}
var Mn = { treat: "ignore", kind: "preference" }, Zp = { treat: "ignore", kind: "kept" }, be = { treat: "moot" };
function Oe(e, o) {
  return { treat: "refuse", group: e, naming: o };
}
var Cr = Oe("bypass", "bypass"), bl = { debug: bt, debugFile: bt, debugToStderr: bt, verbose: bt, inputFormat: bt, awaitInitialize: be, managedSettingsInInitialize: be, initializeFields: be, outputFormat: bt, includePartialMessages: bt, replayUserMessages: bt, hostAuthIsOrgSignIn: bt, settingSources: ({ settingSources: e }) => um(e) ? bt : Et("the cloud session loads the repository's settings regardless"), ignorePersistedTrust: Et("the cloud session loads the repository's settings regardless"), projectConfigRoot: Et("the cloud session reads project config from its own checkout"), permissionPromptTool: ({ permissionPromptTool: e }) => e === "stdio" ? bt : Oe("unsupported", "--permission-prompt-tool (permission prompts reach the host over stdio; an MCP tool cannot answer them here)"), permissionPrompts: ({ permissionPrompts: e }) => (0, import_chunk_63s07fe6.Qje)(e) ? Oe("unsupported", "--permission-prompts none (turning permission prompts off is not supported for a cloud session yet; they reach the host over stdio)") : be, model: Ge, name: Ge, effort: Ge, fastMode: Et("a cloud session's fast mode follows its own settings"), fallbackModel: Ge, maxTurns: ({ maxTurns: e }, { entry: o }) => o === "attach" ? Et("an existing session keeps the turn limit it was created with, if any; none from this invocation is enforced") : (0, import_chunk_bzyb60p0.Bci)(e) === void 0 ? Et("a cloud session takes only a whole number from 1 to 2147483647") : Ge, maxBudgetUsd: (e, { entry: o }) => o === "attach" ? Et("an existing session keeps the budget it was created with, if any; none from this invocation is enforced") : Ge, allowedTools: Ge, disallowedTools: ({ disallowedTools: e }, { entry: o }) => {
  if (o === "attach") return Oe("attach_restriction", "--disallowed-tools");
  let n = (0, import_chunk_2kdn1n73.QXn)(e ?? []);
  return n.kind === "rules" ? Ge : Oe("deny_rule_unclosed", (0, import_chunk_tp3c5q2s.Ft)(n.rule, 64));
}, systemPrompt: Ge, systemPromptFile: Ge, appendSystemPrompt: Ge, appendSystemPromptFile: Ge, appendSubagentSystemPrompt: Ge, appendSubagentSystemPromptFile: Ge, thinking: Ge, thinkingDisplay: Ge, maxThinkingTokens: Ge, permissionMode: ({ permissionMode: e }, { entry: o }) => e === "bypassPermissions" ? Cr : o === "attach" ? bt : Ge, proactivity: Ge, inheritPermissionMode: ({ inheritPermissionMode: e }) => e === "bypassPermissions" ? Cr : Et("a cloud session does not inherit a permission mode; --permission-mode sets it"), dangerouslySkipPermissions: Cr, tools: ({ tools: e }, { entry: o }) => {
  let n = Al(e ?? []);
  if (n.kind === "default") return be;
  if (o === "attach") return Oe("attach_restriction", "--tools");
  return n.kind === "refused" ? Oe("tool_restriction", n.naming) : Ge;
}, agent: ({ agents: e, agent: o }, { selectedAgentDefinition: n }) => Em(e, o, n), agents: ({ agents: e }) => km(e), settings: ({ settings: e, permissionMode: o }, { flagSettings: n }) => wl("settings", Cm(e, n, Ive(o) !== void 0)), managedSettings: ({ managedSettings: e, permissionMode: o }) => wl("managed-settings", bm(e, Ive(o) !== void 0)), mcpConfig: (e, { mcpConfigFlagServers: o }) => Am(o), jsonSchema: Oe("unsupported", `--json-schema (${Hs})`), bare: (e, { isDeviceLess: o }) => Oe("unsupported", "--bare (a cloud session signs in with this machine's claude.ai login, which --bare turns off)"), awaitClaim: Oe("unsupported", "--await-claim (a pre-warmed spare is a local SDK-host process; a cloud session is created per request)"), holdRepositoryWhileParked: be, addDir: Xe, betas: Xe, chrome: Xe, clientDataUrl: Oe("unsupported", "--client-data-url (a cloud session loads its own configuration, so the document could not be used there)"), allowOtherModels: be, disableSlashCommands: Oe("tool_restriction", "--disable-slash-commands"), enableAuthStatus: Mn, excludeDynamicSystemPromptSections: Mn, file: Xe, forwardSubagentText: Xe, ide: Mn, includeHookEvents: Xe, includeUnsupportedModels: Xe, init: Xe, maintenance: Xe, planModeInstructions: Xe, systemPromptSnapshot: Xe, pluginDir: Xe, pluginDirNoMcp: Xe, pluginUrl: Xe, promptSuggestions: Mn, restricted: Oe("tool_restriction", "--restricted"), safeMode: () => Oe("tool_restriction", "--safe-mode"), sessionId: Et("frames carry the cloud worker's session id"), sessionMirror: Xe, strictMcpConfig: Oe("tool_restriction", "--strict-mcp-config"), taskBudget: Et("no task budget is enforced in a cloud session yet"), watchArtifact: Xe, workload: Mn, print: be, initOnly: be, desktop: be, continue: be, resume: be, forkSession: be, fromPr: be, resumeSessionAt: be, resumeDropsTurn: be, sessionBeganAsCopy: be, replyOnResume: be, rewindFiles: be, sessionPersistence: be, prefill: be, prefillB64: be, deepLinkOrigin: be, deepLinkRepo: be, deepLinkLastFetch: be, deepLinkCwdB64: be, watchArtifactNoAutoreact: be, allowDangerouslySkipPermissions: be, routine: Et("a cloud session does not activate the routine") }, Ys = "Error: a cloud session cannot bypass permissions; drop --dangerously-skip-permissions / --permission-mode bypassPermissions / a settings defaultMode of bypassPermissions.", em = "Error: in-process SDK MCP servers cannot apply to a cloud-hosted session, where the agent runs in the cloud container; remove them from --mcp-config: ", tm = "Error: a cloud session cannot apply these tool restrictions, so they are refused rather than silently dropped; start it without ", nm = "Error: a cloud session takes no auto mode rules from --settings or a repository's .claude/settings.json, so the autoMode block is refused rather than silently dropped; start it without that block. For what a cloud session reads, see https://code.claude.com/docs/en/settings#settings-in-cloud-sessions", rm = "Error: a cloud session cannot honor these options yet, so they are refused rather than silently dropped; start it without ", sm = ["bypass", "attach_restriction", "tool_restriction", "auto_mode_rules", "deny_rule_unclosed", "sdk_mcp", "unsupported"], im = { "--disallowed-tools": "the deny list", "--tools": "the tools" };
function am(e) {
  let o = e.map((n) => im[n] ?? n).join(" and ");
  return e.length === 1 ? `Error: ${e[0]} cannot change an existing cloud session, which keeps ${o} it was created with. Drop the flag to continue this session, or start a new session with the flag to apply the list.` : `Error: ${e.join(" and ")} cannot change an existing cloud session, which keeps ${o} it was created with. Drop the flags to continue this session, or start a new session with them to apply the lists.`;
}
function dm(e, o) {
  switch (e) {
    case "bypass":
      return Ys;
    case "sdk_mcp":
      return em + o.join(", ");
    case "attach_restriction":
      return am(o);
    case "tool_restriction":
      return `${tm}${o.join(", ")}.`;
    case "auto_mode_rules":
      return nm;
    case "deny_rule_unclosed":
      return (0, import_chunk_qebpc5de.E_n)(o[0] ?? "");
    case "unsupported":
      return `${rm}${o.join(", ")}.`;
  }
}
function um(e) {
  let o = new Set((e ?? "").split(",").map((n) => n.trim()));
  return ["user", "project", "local"].every((n) => o.has(n));
}
var pm = /^[A-Za-z][A-Za-z0-9_-]{0,63}$/, El = 128;
function Al(e) {
  if (e.length === 0 || e.join(" ").trim().toLowerCase() === "default") return { kind: "default" };
  let o = (0, import_chunk_4smdap7r.M)((0, import_chunk_qebpc5de.V$l)((0, import_chunk_qebpc5de.$f)([...e])));
  if (o.length === 1 && o[0]?.toLowerCase() === "default") return { kind: "refused", naming: `--tools "${(0, import_chunk_tp3c5q2s.Qe)(e.join(" "), 64)}" (that names a tool called default; write --tools default alone for the default tools, or list the tools to keep)` };
  if (o.length === 0) return { kind: "refused", naming: `--tools "${(0, import_chunk_tp3c5q2s.Qe)(e.join(" "), 64)}" (a cloud session cannot run with no built-in tools yet)` };
  let n = o.filter((r) => !pm.test(r) || (0, import_chunk_e99zzz48.rZn)(r) || r.startsWith(import_chunk_px0hhsq7.ch));
  if (n.length > 0) return { kind: "refused", naming: mm(n) };
  return o.length > El ? { kind: "refused", naming: `--tools (a cloud session takes at most ${El} tool names; this list has ${o.length})` } : { kind: "list", names: o };
}
var kl = 3;
function mm(e) {
  let o = e.slice(0, kl).map(fm).join(", "), n = e.length - kl;
  return n > 0 ? `${o}, and ${n} more --tools ${n === 1 ? "entry" : "entries"}` : o;
}
function fm(e) {
  let o = (0, import_chunk_tp3c5q2s.Ft)(e, 64);
  if (e.startsWith(import_chunk_qebpc5de.rJ)) return `--tools ${o} (a cloud session cannot leave out a tool this way; list the tools to keep, or name it in --disallowed-tools)`;
  if (e.toLowerCase().startsWith("preset:")) return `--tools ${o} (a cloud session takes no preset: name the tools to keep, or leave --tools out for the default set)`;
  if ((0, import_chunk_e99zzz48.rZn)(e)) return `--tools ${o} (a cloud session cannot use the self-hosted runner's operator tools)`;
  if (e.startsWith(import_chunk_px0hhsq7.ch)) return `--tools ${o} (--tools limits built-in tools only; an MCP tool stays in the session unless --disallowed-tools names it)`;
  if (e.includes("(")) return `--tools ${o} (a rule is not a tool name: list the tool by name, and put the rule in --allowed-tools or --disallowed-tools)`;
  return `--tools ${o} (a tool name is a letter followed by up to 63 letters, digits, _ or -)`;
}
var gm = /* @__PURE__ */ new Set(["allowedMcpServers", "allowedHttpHookUrls", "httpHookAllowedEnvVars", "availableModels", "strictKnownMarketplaces", "allowedProviders"]), hm = /* @__PURE__ */ new Set(["deniedMcpServers", "deniedModels", "disabledMcpjsonServers", "blockedMarketplaces", "autoMode"]), Sm = /* @__PURE__ */ new Set(["disableAllHooks", "disableClaudeAiConnectors", "strictPluginOnlyCustomization", "disableCommandPluginSources", "disableSideloadFlags", "disableSkillShellExecution", "disableBundledSkills", "enforceAvailableModels"]);
function ym(e, o) {
  if (gm.has(e)) return Array.isArray(o);
  if (hm.has(e)) return Tn(o);
  if (Sm.has(e) || /^allowManaged\w*Only$/.test(e)) return o === true || Array.isArray(o) && o.length > 0;
  if (e === "syncClaudeAiSkills" || e === "syncClaudeAiPlugins") return o === false;
  if (e === "disablePluginDirectory") return (0, import_chunk_8hfdvrr1.Cqt)(o) === true;
  if (e === "disableDirectMcpSkills") return o != null && o !== false && o !== "false";
  if (e === "availableModelsMatch") return o === "exact";
  return e === "disableAutoMode" && o === "disable";
}
function _m(e) {
  if (typeof e !== "object" || e === null) return ["permissions"];
  return Object.entries(e).flatMap(([o, n]) => (o === "deny" || o === "ask") && Tn(n) ? [`permissions.${o}`] : o === "disableAutoMode" && n === "disable" ? ["permissions.disableAutoMode"] : (o === "blockReadsOutsideWorkingDirectories" || o === "blockFileToolReadsOutsideWorkingDirectories" || o === "blockWritesOutsideWorkingDirectories" || o === "denyInsteadOfPrompting") && n === true ? [`permissions.${o}`] : []);
}
function Ws(e, o) {
  let n = e, g = n.permissions?.defaultMode;
  if (g === "bypassPermissions") return { kind: "bypass" };
  let h = !o && (g === "plan" || g === "dontAsk") ? g : void 0, C = Object.keys(n);
  if (C.length === 0) return;
  let y = C.flatMap((v) => v === "permissions" ? [..._m(n.permissions), ...h ? ["permissions.defaultMode"] : []] : v === "hooks" ? _r(n.hooks) ? ["hooks"] : [] : ym(v, n[v]) ? [v] : []);
  return y.length > 0 ? { kind: "restricts", keys: y, narrowingDefaultMode: h, onlyAutoModeRules: y.length === 1 && y[0] === "autoMode" && (0, import_chunk_ma3kja9f.T)(n.autoMode) && Object.entries(n.autoMode).every(([v, R]) => v === "allow" || v === "environment" || !Tn(R)) } : { kind: "benign", keys: C };
}
function Cm(e, o, n) {
  let r = e?.trim();
  if (!r) return;
  if (o) return Ws(o, n);
  if (!(r.startsWith("{") && r.endsWith("}"))) return { kind: "unloadable" };
  let g = (0, import_chunk_0jve1fep.et)(r, false);
  return typeof g === "object" && g !== null ? Ws(g, n) : { kind: "unreadable" };
}
function bm(e, o) {
  let n = e?.trim();
  if (!n) return;
  let r = (0, import_chunk_0jve1fep.et)(n, false);
  if (!(0, import_chunk_ma3kja9f.T)(r)) return { kind: "unreadable" };
  let g = Ws(r, o), h = (0, import_chunk_xcgcdx61.Iut)(r) === void 0 ? [] : ["pluginConfigs"];
  {
    let C = r[import_chunk_xzvhvaa2.xFe];
    if (C !== void 0 && C !== null && !((0, import_chunk_ma3kja9f.T)(C) && Object.keys(C).length === 0)) h.push(import_chunk_xzvhvaa2.xFe);
  }
  if (g?.kind === "bypass" || h.length === 0) return g;
  return g?.kind === "restricts" ? { ...g, keys: [...g.keys, ...h] } : { kind: "restricts", keys: h };
}
function wl(e, o) {
  switch (o?.kind) {
    case "bypass":
      return Cr;
    case "restricts":
      return e === "managed-settings" ? Et(`its ${Vs(o.keys)} are not enforced in the cloud session`) : o.onlyAutoModeRules ? Oe("auto_mode_rules", `--${e}`) : Oe("tool_restriction", `--${e} (its ${Vs(o.keys)}${o.narrowingDefaultMode ? `; --permission-mode ${o.narrowingDefaultMode} asks for that mode` : ""})`);
    case "unreadable":
      return Oe("tool_restriction", `--${e} (its JSON could not be read to check it for tool restrictions)`);
    case "unloadable":
      return Oe("tool_restriction", `--${e} (it could not be loaded as settings, so it cannot be checked for tool restrictions)`);
    case "benign":
      return { treat: "ignore", kind: "preference", settingsKeys: o.keys.map((n) => `${e}.${n}`) };
    case void 0:
      return be;
  }
}
function Em(e, o, n) {
  let r = wm(e, o), g = r === "unreadable" || n === void 0 ? r : n === null ? void 0 : $o(n) ? "restricts_resolved" : void 0;
  if (g === void 0) return Xe;
  let h = (0, import_chunk_tp3c5q2s.Ft)(o ?? "", 64);
  return Oe("tool_restriction", g === "unreadable" ? `--agent ${h} (its --agents value could not be read to check it for tool restrictions)` : g === "invisible" ? `--agent ${h} (its definition is not in --agents, so its tool lists and hooks cannot be checked here)` : g === "restricts_resolved" ? `--agent ${h} (its definition lists tools or hooks, or sets a permission mode)` : `--agent ${h} (its tool lists, hooks or permission mode in --agents)`);
}
function km(e) {
  let o = e?.trim();
  if (!o) return be;
  let n = (0, import_chunk_0jve1fep.et)(o, false);
  if (typeof n !== "object" || n === null || Array.isArray(n)) return Oe("tool_restriction", "--agents (its value could not be read to check it for tool restrictions)");
  let r = Object.entries(n).filter(([, g]) => $o(g)).map(([g]) => (0, import_chunk_tp3c5q2s.Ft)(g, 64));
  return r.length > 0 ? Oe("tool_restriction", `--agents (tool lists, hooks or a permission mode in: ${Vs(r)})`) : Xe;
}
function wm(e, o) {
  if (!o) return;
  if (!e) return "invisible";
  let n = (0, import_chunk_0jve1fep.et)(e, false);
  if (typeof n !== "object" || n === null) return "unreadable";
  let r = n, g = Object.hasOwn(r, o) ? [o] : Object.keys(r).filter((h) => h.endsWith(`:${o}`));
  if (g.length === 0) return "invisible";
  return g.some((h) => $o(r[h])) ? "restricts" : void 0;
}
function Am(e) {
  let o = Object.entries(e ?? {}), n = o.filter(([, r]) => r.type === "sdk").map(([r]) => r);
  if (n.length > 0) return Oe("sdk_mcp", Tl(n));
  return o.length > 0 ? Xe : be;
}
function Mm(e, o) {
  return Object.keys(bl).flatMap((n) => {
    if (!(Tn(e[n]) || n === "mcpConfig" && Tn(o.mcpConfigFlagServers) || n === "settingSources" && e.settingSources !== void 0)) return [];
    let g = bl[n], h = typeof g === "function" ? g(e, o) : g;
    return [{ key: n, treatment: h.treat === "create" && o.entry === "attach" ? Zp : h }];
  });
}
function Fwa(e, o = {}) {
  let n = Mm(e, o), r = [...n.flatMap(({ treatment: H }) => H.treat === "refuse" ? [H] : []), ...Pm(e, o)], g = sm.find((H) => r.some((G) => G.group === H));
  if (g !== void 0) {
    let H = r.filter((G) => G.group === g).map((G) => G.naming);
    return { kind: "rejected", message: dm(g, H), reason: g };
  }
  let h = n.flatMap(({ key: H, treatment: G }) => G.treat === "ignore" ? [{ key: H, treatment: G }] : []), C = h.map(({ key: H }) => H), y = (0, import_chunk_2kdn1n73.QXn)(e.disallowedTools ?? []), { rules: v, blocksNothing: R } = y.kind === "rules" ? y : { rules: (0, import_chunk_qebpc5de.$f)(e.disallowedTools ?? []), blocksNothing: [] }, A = [...(0, import_chunk_2kdn1n73.lka)(R), ...h.flatMap(({ key: H, treatment: G }) => Dm(H, G))], I = Object.keys(o.mcpConfigFlagServers ?? {});
  return { kind: "accepted", ignored: C, notApplied: A, notices: [...["settings", "managedSettings"].filter((H) => C.includes(H)).map((H) => `${Ml(H)} applies to this machine's client only; it is not applied to the cloud session, which runs with the cloud container's own settings.`), ...C.includes("mcpConfig") ? [`MCP ${I.length === 1 ? "server" : "servers"} from --mcp-config ignored \u2014 MCP servers for this session run in the cloud container: ${Tl(I)}`] : []], forwarded: o.entry === "attach" ? {} : Rm(e, o, v) };
}
function Pm(e, o) {
  let n = o.selectedAgentDefinition;
  if (!n || e.agent || !$o(n)) return [];
  return [{ treat: "refuse", group: "tool_restriction", naming: `the selected main-thread agent ${(0, import_chunk_tp3c5q2s.Ft)(typeof n.agentType === "string" ? n.agentType : "agent", 64)} (its definition lists tools or hooks, or sets a permission mode)` }];
}
function Vs(e) {
  let o = e.slice(0, 8).map((n) => (0, import_chunk_tp3c5q2s.Ft)(n, 64)).join(", ");
  return e.length > 8 ? `${o} (and ${e.length - 8} more)` : o;
}
function Rm(e, o, n) {
  let r = o.appendSystemPrompt ?? e.appendSystemPrompt, g = o.systemPrompt ?? e.systemPrompt, h = (0, import_chunk_bzyb60p0.Bci)(e.maxTurns), C = (0, import_chunk_qebpc5de.$f)(e.allowedTools ?? []), y = Al(e.tools ?? []), v = y.kind === "list" ? y.names : [], R = e.thinking === "disabled" ? 0 : e.thinking === void 0 && Number.isInteger(e.maxThinkingTokens) && (e.maxThinkingTokens ?? -1) >= 0 ? e.maxThinkingTokens : void 0, A = e.thinkingDisplay === "summarized" || e.thinkingDisplay === "omitted" ? e.thinkingDisplay : void 0, I = { ...R !== void 0 && { maxThinkingTokens: R }, ...A !== void 0 && { display: A } };
  return { ...r && { appendSystemPrompt: r }, ...g && { customSystemPrompt: g }, ...e.appendSubagentSystemPrompt && { appendSubagentSystemPrompt: e.appendSubagentSystemPrompt }, ...typeof e.effort === "string" && (0, import_chunk_k67pwqya.nk)(e.effort) && { effort: e.effort }, ...e.fallbackModel && { fallbackModel: e.fallbackModel }, ...h !== void 0 && { maxTurns: h }, ...e.maxBudgetUsd !== void 0 && e.maxBudgetUsd > 0 && { maxBudgetUsd: e.maxBudgetUsd }, ...C.length > 0 && { allowedTools: C }, ...n.length > 0 && { disallowedTools: n }, ...v.length > 0 && { builtinTools: v }, ...Object.keys(I).length > 0 && { thinking: I }, ...e.proactivity !== void 0 && { proactivityLevel: e.proactivity }, ...e.bare && { environmentVariables: { CLAUDE_CODE_SIMPLE: "1" } } };
}
function Dm(e, o) {
  let n = Ml(e);
  switch (o.kind) {
    case "lost":
      return [{ kind: "lost", name: n, ...o.why !== void 0 && { why: o.why } }];
    case "kept":
      return [{ kind: "kept", name: n }];
    case "preference":
      return o.settingsKeys === void 0 ? [{ kind: "preference", name: n }] : o.settingsKeys.map((r) => ({ kind: "preference", name: (0, import_chunk_tp3c5q2s.Ft)(r, 64) }));
  }
}
function Ml(e) {
  return `--${e.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`)}`;
}
var $s = 8;
function Tl(e) {
  let o = e.slice(0, $s).map((n) => (0, import_chunk_tp3c5q2s.Ft)(n, 64));
  return e.length > $s ? `${o.join(", ")} (and ${e.length - $s} more)` : o.join(", ");
}
function Tn(e) {
  if (Array.isArray(e)) return e.length > 0;
  return typeof e === "object" && e !== null ? Object.keys(e).length > 0 : Boolean(e);
}
function Ive(e) {
  let o = e ? (0, import_chunk_xcgcdx61.s$)(e) : void 0;
  return o && (0, import_chunk_xcgcdx61.LFe)(o) && o !== "bypassPermissions" ? o : void 0;
}
function Rl(e) {
  return e ? (0, import_chunk_sjqze7qg.vot)(e) : "the binding outcome was never reported";
}
function h$e(e) {
  let o = e.startsWith("cse_") ? `session_${(0, import_chunk_t39bs2jr.Un)(e)}` : e;
  return (0, import_chunk_tp3c5q2s.Ft)(o, 128);
}
function $wa(e, o, n, r) {
  return `Error: cloud session ${h$e(e)} was created but this machine could not be bound to it: ${Rl(o)}. ${Ol(r, n)}`;
}
function Uwa(e, o, n, r) {
  return `Error: cloud session ${h$e(e)} was created and bound to this machine, but this machine could not be set up to serve it (${(0, import_chunk_tp3c5q2s.Ft)(o)}). ${Ol(r, n)}`;
}
function Ol(e, o) {
  let n = (0, import_chunk_tp3c5q2s.Ft)(o, 200);
  return e ? `It was archived (nothing was left running); it is listed under Archived at ${n}.` : `It was left running and could not be archived from here; open or archive it at ${n}.`;
}
function M6s(e, o) {
  return `Error: cloud session ${h$e(e)} is archived and cannot accept new messages. View it at ${(0, import_chunk_tp3c5q2s.Ft)(o, 200)}`;
}
function Bwa(e, o = Rl(e)) {
  return `Error: a cloud session started from here could not be bound to this machine: ${o}. Nothing was created.`;
}
function qXn({ sessionId: e, viewUrl: o, device: n, directorySync: r, repositoryTrust: g }) {
  return { id: h$e(e), view_url: (0, import_chunk_tp3c5q2s.Ft)(o, 200), device: n, directory_sync: r, client_version: 1, ...g !== void 0 && { repository_trust: g } };
}
var H6s = ["systemPrompt", "appendSystemPrompt", "appendSubagentSystemPrompt"];
function Wwa(e, o) {
  let n = (o?.systemPrompt !== void 0 ? Im(o.systemPrompt) : void 0) ?? e.customSystemPrompt, r = o?.appendSystemPrompt !== void 0 ? o.appendSystemPrompt : e.appendSystemPrompt, g = o?.appendSubagentSystemPrompt !== void 0 ? o.appendSubagentSystemPrompt : e.appendSubagentSystemPrompt, { customSystemPrompt: h, appendSystemPrompt: C, appendSubagentSystemPrompt: y, ...v } = e;
  return { ...v, ...n && { customSystemPrompt: n }, ...r && { appendSystemPrompt: r }, ...g && { appendSubagentSystemPrompt: g } };
}
function Im(e) {
  let o = e.filter((n) => n !== "" && n !== import_chunk_xcgcdx61.bD).join(`

`).trim();
  return o === "" ? void 0 : o;
}
var jwa = ["cloud", "remote", "teleport", "attachServe", "project", "environment", "pool", "monorepo", "noMonorepo"];
function xm(e) {
  switch (e) {
    case void 0:
      return null;
    case "true":
    case "1":
      return true;
    case "false":
    case "0":
      return false;
    default:
      return "invalid";
  }
}
function Dl(e) {
  let { model: o, effort: n, permissionMode: r } = e;
  return { ...e, model: typeof o === "string" && !(0, import_chunk_865at33z.oz)((0, import_chunk_zmb62hr5.Yt)(o.trim().toLowerCase())) && !(0, import_chunk_865at33z.rxr)(o) ? void 0 : o, effort: typeof n === "string" && (0, import_chunk_k67pwqya.IU)(n) !== void 0 ? void 0 : n, permissionMode: typeof r === "string" && Ive(r) !== void 0 ? void 0 : r };
}
function Fl(e, o) {
  return o.cloudSessionsByDefault && e.resume !== void 0 && !(0, import_chunk_6gx82r3c.N$e)(Dl(e)) && o.suppliedOptionKeys().every((n) => n === "resume");
}
async function xl(e, o) {
  let n = e.unsandboxed === true || false, r = e.teleport ?? null, g = e.cloud ?? e.remote, h = null, C = h === "named" && typeof e.resume === "string" ? e.resume : g, y = C === true || o.localSessionMove !== void 0 ? "" : C ?? null, v = false;
  if (e.attachServe !== void 0) {
    if (C !== void 0) return { ok: false, error: "Error: --attach-serve cannot be combined with --cloud/--remote" };
    if ((0, import_chunk_jwwzbnen.sve)(e.attachServe) === null) return { ok: false, error: `Error: --attach-serve expects a session id (cse_...), got ${(0, import_chunk_9e5mdyfk.Qnn)(e.attachServe)}` };
    y = e.attachServe, v = true;
  }
  let R = typeof C === "string" ? (0, import_chunk_jwwzbnen.sve)(C) : v ? (0, import_chunk_jwwzbnen.sve)(e.attachServe ?? "") : null, A = typeof C === "string" && o.localSessionMove === void 0 && R === null && !e.initOnly && /^\s*\S+\s*$/.test(C) ? C : void 0, I = null, H = null, G = false, K = null, z = null, oe = e.noMonorepo === true ? (0, import_chunk_w0pnqmj8.TEl)() : void 0, ie = false, je = false;
  if (je) y = "";
  let tt = e.environment ?? e.pool ?? oe;
  if (tt !== void 0) {
    let { prefix: Ee, flag: Te } = (0, import_chunk_9e5mdyfk.c1t)(oe !== void 0), qe = `Error: --environment expects a self-hosted environment id (ccpool_...), got ${(0, import_chunk_9e5mdyfk.Qnn)(tt)}`;
    if ((e.environment === void 0 || true) && !(0, import_chunk_p3d6wgn7.zae)(tt)) return { ok: false, error: qe };
    let at = (0, import_chunk_bzyb60p0.KVa)(tt);
    if (at === null) return { ok: false, error: qe };
    if (e.resume || e.continue || r) return { ok: false, error: `${Ee}${Te} cannot be combined with --resume, --continue, or --teleport` };
    if (e.initOnly || o.sessionId) return { ok: false, error: `${Ee}${Te} cannot be combined with ${e.initOnly ? "--init-only" : "--session-id"}` };
    if (R !== null) return { ok: false, error: "Error: --environment creates a new session; it cannot be combined with --cloud <session_id|url>" };
    if (at.kind === "pool" && (e.print || o.nonInteractive) && typeof C === "string" && C.length > 0) return { ok: false, error: `${Ee}non-interactive ${Te} reads the prompt from the positional or stdin; drop --cloud/--remote <description>.` };
    if ((e.print || o.nonInteractive) && o.outputFormat === "stream-json") return { ok: false, error: `${Ee}${Te} does not support --output-format stream-json` };
    if (typeof C === "string" && C.length > 0 && typeof o.prompt === "string" && o.prompt.length > 0) return { ok: false, error: `${Ee}${Te} with --cloud <description> cannot also take a positional prompt. Pass the task as the description, or drop --cloud.` };
    if (at.kind === "pool") I = at.poolId;
    else H = at;
    if (y === null || y === "") {
      let lt = typeof o.prompt === "string" ? o.prompt : "";
      if (!(e.print || o.nonInteractive) && (0, import_chunk_jwwzbnen.sve)(lt) !== null) return { ok: false, error: `${Ee}${Te} creates a new session; it cannot be combined with a session id or url` };
      y = I === null ? "" : lt, G = I !== null;
    }
  }
  let nt = e.ref;
  if (nt !== void 0) {
    if (I === null && y === null) return { ok: false, error: `Error: --ref sets the base branch for a cloud session; pass --cloud or --environment${e.project !== void 0 ? " \u2014 --project no longer starts cloud sessions" : ""}` };
    if (R !== null) return { ok: false, error: "Error: --ref sets the base for a new cloud session; it cannot be combined with --cloud <session_id|url>" };
    if (nt === "") return { ok: false, error: "Error: --ref requires a non-empty branch, tag, or SHA" };
    K = nt;
  }
  let rt = e.onBranch;
  if (rt !== void 0) {
    if (I === null && y === null) return { ok: false, error: `Error: --on-branch resumes work on a branch in a cloud session; pass --cloud or --environment${e.project !== void 0 ? " \u2014 --project no longer starts cloud sessions" : ""}` };
    if (R !== null) return { ok: false, error: "Error: --on-branch resumes a branch in a new cloud session; it cannot be combined with --cloud <session_id|url>" };
    if (K !== null) return { ok: false, error: "Error: --on-branch and --ref both set the cloud session's base branch; pass one or the other" };
    if (rt === "") return { ok: false, error: "Error: --on-branch requires a non-empty branch name" };
    z = rt;
  }
  let Ve = false, It = null, kt = null, _t = /* @__PURE__ */ new Map(), io = e.correlationId !== void 0 ? "--correlation-id" : e.metadata && "--metadata";
  if (io !== void 0) {
    if (I === null) return { ok: false, error: `Error: ${io} requires --environment` };
  }
  if (e.correlationId !== void 0) {
    if (!/^[\x21-\x2C\x2E-\x7E][\x21-\x7E]{0,511}$/.test(e.correlationId)) return { ok: false, error: 'Error: --correlation-id must be 1-512 printable ASCII characters with no spaces and no leading "-"' };
    _t.set("correlation_id", e.correlationId);
  }
  for (let Ee of e.metadata ?? []) {
    let [, Te, qe] = /^([a-z][a-z0-9]*(?:_[a-z0-9]+)*)=(.+)$/s.exec(Ee) ?? [];
    if (Te === void 0 || qe === void 0) return { ok: false, error: 'Error: --metadata takes key=value, as in --metadata size=large. A key is lower-case letters and digits with single "_" between them, and starts with a letter' };
    if (_t.has(Te)) return { ok: false, error: `Error: the label ${Te} is given twice` };
    _t.set(Te, qe);
  }
  if (e.forkSession && (R !== null || g !== void 0 && !(0, import_chunk_9e5mdyfk.Xnn)(A ?? "") && (e.continue || e.resume === true || [e.resume, o.prompt].some((Ee) => typeof Ee === "string" && (0, import_chunk_jwwzbnen.sve)(Ee) !== null)))) return await (0, import_chunk_cqa9hrgx.Gt)("cloud_launch_fork", "not_supported"), { ok: false, flushAnalytics: true, error: "Error: --fork-session can't fork a cloud session, so nothing was opened or sent.\nTo continue a cloud session, use `--cloud <session-id>` without --fork-session, or open it at claude.ai/code." };
  let So = y !== null && I === null && It === null && (0, import_chunk_9e5mdyfk.iZa)({ print: Boolean(e.print), initOnly: Boolean(e.initOnly), nonInteractive: o.nonInteractive, inputFormat: o.inputFormat, outputFormat: o.outputFormat, hasSdkUrl: o.hasSdkUrl }) && await (v ? o.isViolinWoodEnabled : o.isConnectedSessionsEnabled)().catch(() => false), xt = oe !== void 0, Je = o.cloudPrintEnabled && y !== null && (typeof C !== "string" || C.trim() !== "" || xt) && (I === null || xt) && It === null && R === null && A === void 0 && (0, import_chunk_9e5mdyfk.aZa)({ print: Boolean(e.print), initOnly: Boolean(e.initOnly), hasSdkUrl: o.hasSdkUrl, outputFormat: o.outputFormat });
  if (Je && xt) y = "", G = false;
  if (Je && typeof C === "string" && C.trim() !== "" && typeof o.prompt === "string" && o.prompt.trim() !== "") return { ok: false, error: `Error: the task was given twice: as --cloud's value (${(0, import_chunk_9e5mdyfk.Qnn)(C)}) and as the prompt. With --print, give it in one place; to name the session, use -n/--name.` };
  if (Je && (Boolean(e.dangerouslySkipPermissions) || e.permissionMode === "bypassPermissions" || e.inheritPermissionMode === "bypassPermissions")) return { ok: false, error: Ys };
  if (v && !So) return { ok: false, error: "Error: --attach-serve requires the serve-only headless launch (non-interactive, --input-format stream-json and --output-format stream-json) and an enabled headless cloud client; it never falls back to a plain attach" };
  let Wt = xm(e.forwardHomeSettings);
  if (Wt === "invalid") return { ok: false, error: `Error: --forward-home-settings takes true or false, not ${(0, import_chunk_9e5mdyfk.Qnn)(String(e.forwardHomeSettings))}.` };
  let Vt = Wt !== false, zt = Wt === true ? "forward" : null;
  if (Wt !== null && I === null && y === null && R === null) return { ok: false, error: "Error: --forward-home-settings says whether this machine's settings go into a cloud session; pass --cloud (a new session, or one to attach to) or --environment" };
  let yo = false, Jt = null, ao = false, it = [], _o = false;
  if (y !== null) {
    let Ee = (0, import_chunk_9e5mdyfk.Iki)({ print: e.print, nonInteractive: o.nonInteractive, continue: e.continue, resume: h === null ? e.resume : void 0, fromPr: e.fromPr, hasTeleport: r !== null, hasConnect: o.hasConnect, hasSSH: o.hasSSH, hasPool: I !== null, hasEnvironmentQuery: H !== null, isChosenByNoMonorepo: oe !== void 0, isImpliedByMonorepo: je, isCloudAttach: R !== null, headlessCloud: So, headlessCloudPrint: Je, loneWordValue: A });
    if (Ee) return { ok: false, error: Ee };
  }
  let Co = y === null && (0, import_chunk_9e5mdyfk.Iki)({ print: e.print, nonInteractive: o.nonInteractive || Boolean(e.initOnly), resume: e.resume, fromPr: e.fromPr, hasTeleport: r !== null, hasConnect: o.hasConnect, hasSSH: o.hasSSH }) === null && !o.sessionId && kt === null && !Ve && e.remoteControl === void 0 && e.rc === void 0 && !(0, import_chunk_6gx82r3c.N$e)(Dl(e)) && e.watchArtifact === void 0 && e.watchArtifactNoAutoreact === void 0 && e.worktree === void 0 && !e.deepLinkOrigin && !e.continue, ot = !(o.cloudSessionsByDefault && Co) ? "none" : e.local || n ? "declined" : await o.cloudSessionsDeniedByOrgPolicy() ? "not_allowed" : "applied";
  if (ot === "applied") y = "";
  let Lt = null;
  if (Lt !== null) y = Lt, h = "continued";
  let He = !(o.sandboxVmByDefault && Co && y === null) ? "none" : n ? "declined" : "applied", Z = false, J = h !== null ? "resume" : R !== null ? "attach" : null;
  return { ok: true, value: { teleport: r, remote: y, cloudAttachId: Lt ?? R, resumeInCloud: h, poolId: I, environmentQuery: H, poolPromotedRemote: G, poolRef: K, poolOnBranch: z, forwardHomeSettings: Vt, homeSettingsConsent: zt, projectFlag: It, projectBrowse: kt, projectForRemoteControl: Ve, sessionMetadata: _t.size > 0 ? Object.fromEntries(_t) : null, headlessCloud: So, headlessCloudPrint: Je, serveOnly: v, cloudDefault: ot, sandboxVmDefault: He, persistentVolume: yo, persistentVolumeFromSessionId: Jt, monorepo: ao, addedRepositories: it, noMonorepo: ie || I === oe, noMonorepoAsksTheService: ie, personal: Z && y !== null && J === null, promptBlocks: _o, personalWithoutEffect: Z ? J : null } };
}
function Ll(e) {
  if (!e.sessionId) return { ok: true };
  if ((e.continue || e.resume) && !e.forkSession && !e.sdkUrl) return { ok: false, error: "Error: --session-id with --continue or --resume also needs --fork-session." };
  return { ok: true };
}
function p8t(e) {
  let o = /* @__PURE__ */ new Map();
  for (let n of e.options) {
    let r = n.attributeName();
    if (o.has(r) || e.getOptionValueSource(r) !== "cli") continue;
    let g = e.getOptionValue(r), h = e.options.find((C) => C.attributeName() === r && C.negate === (g === false)) ?? n;
    o.set(r, { flag: h.long ?? h.flags, key: r, value: g });
  }
  return [...o.values()];
}
var Nl = "MCP runs in the remote workspace";
function Bl({ mcpConfigFlagServers: e, agent: o, chromeFlag: n, dynamicMcpConfig: r }) {
  let g = /* @__PURE__ */ new Set([...Object.keys(e), ...o ? Object.keys((0, import_chunk_bzyb60p0.gZr)(o)) : []]), h = [];
  if (g.size > 0) h.push((0, import_chunk_bzyb60p0.Pt)(`MCP ${(0, import_chunk_7cfjrnwy.O)(g.size, "server")} from --mcp-config/agent frontmatter ignored \u2014 ${Nl}: ${[...g].join(", ")}`, "warning"));
  if (n === true && Object.hasOwn(r, import_chunk_prn6030k.Xi)) h.push((0, import_chunk_bzyb60p0.Pt)(`--chrome has no effect: ${Nl}.`, "warning"));
  return h;
}
function Ul(e) {
  let o = {}, n = (0, import_chunk_f9x2f6cx.W)();
  return { unsubscribe: (0, import_chunk_f9x2f6cx.Bp)((g, h) => {
    if (g === n) return;
    let C = n;
    n = g, (0, import_chunk_y53wbr8a.a)("tengu_session_start", { previous_session_id: (0, import_chunk_49zxha55.Ce)(C), source: (0, import_chunk_78g0060s.f)(h), permissionMode: (0, import_chunk_78g0060s.f)(e.permissionMode), dangerouslySkipPermissionsPassed: e.dangerouslySkipPermissionsPassed, modeIsBypass: e.modeIsBypass, print: e.print, ...o });
  }), updateContext(g) {
    o = { ...o, ...g };
  } };
}
var Lm = 3e5, Nm = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ response: (0, import_chunk_rnm2beqc.vf)(), fetchedAt: (0, import_chunk_rnm2beqc.nr)().finite(), entrypoint: (0, import_chunk_rnm2beqc.we)(), model: (0, import_chunk_rnm2beqc.we)(), ccVersion: (0, import_chunk_rnm2beqc.we)(), accountUuid: (0, import_chunk_rnm2beqc.we)().nullable(), organizationUuid: (0, import_chunk_rnm2beqc.we)().nullable() }));
function Hl(e) {
  try {
    let o = (0, import_chunk_865at33z.ge)().hostBootstrapSeed;
    if (o === void 0) return;
    (0, import_chunk_865at33z.Ke)(({ hostBootstrapSeed: r, ...g }) => g, e).catch(import_chunk_k449cc64.i);
    let n = Bm(o, e);
    if (n === void 0) {
      (0, import_chunk_w578pjby.t)("[Bootstrap] Host bootstrap seed applied as this session's answer"), (0, import_chunk_cqa9hrgx.u)("api_bootstrap_host_seed");
      return;
    }
    (0, import_chunk_w578pjby.t)(`[Bootstrap] Host bootstrap seed not used: ${n.reason} (${n.detail})`), (0, import_chunk_cqa9hrgx.l)("api_bootstrap_host_seed", n.reason);
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function Bm(e, o) {
  let n = Nm().safeParse(e);
  if (!n.success) return { reason: "malformed", detail: "not the documented shape" };
  let r = (0, import_chunk_9xz0nsgn.J8o)().safeParse(n.data.response);
  if (!r.success) return { reason: "malformed", detail: "response is not a bootstrap answer" };
  let { fetchedAt: g, entrypoint: h, model: C, ccVersion: y, accountUuid: v, organizationUuid: R } = n.data, A = (0, import_chunk_9xz0nsgn.$Jt)(), I = (0, import_chunk_865at33z.Dc)(), H = Date.now();
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || (0, import_chunk_xcgcdx61.cm)()) return { reason: "not_this_session", detail: "this session does not take its answer from a host" };
  if (h !== A.entrypoint) return { reason: "not_this_session", detail: "another entrypoint" };
  if (C !== A.model) return { reason: "not_this_session", detail: "another model than this session starts on" };
  if (y !== A.ccVersion) return { reason: "not_this_session", detail: "another Claude Code version" };
  if (R?.toLowerCase() !== A.organizationUuid?.toLowerCase() || v?.toLowerCase() !== I?.accountUuid?.toLowerCase()) return { reason: "not_this_session", detail: "another account or organization than this session has stored" };
  if (H - g > Lm) return { reason: "stale", detail: "answered more than five minutes ago" };
  if (g - H > import_chunk_865at33z.g3i) return { reason: "stale", detail: "answered in the future by this clock" };
  if (!(0, import_chunk_9xz0nsgn.xii)(r.data, Math.min(g, H), o)) return { reason: "not_this_session", detail: "this session does not ask on a claude.ai token with the profile scope" };
  return;
}
function $l(e, o, n) {
  try {
    if (!(0, import_chunk_865at33z.H1)() || !(0, import_chunk_2xjdqky3.om)()) return null;
    if ((0, import_chunk_865at33z.jTt)(e)) return null;
    let r = (0, import_chunk_bzyb60p0.Il)(e, n), { recognized: g } = r, h = !g || r.apiContextWindowWithoutOptIn > import_chunk_865at33z.spn || Um(e, n), C = import_chunk_865at33z.spn, { window: y, source: v } = (0, import_chunk_bzyb60p0.ES)(r, o);
    if (v !== "auto" && y <= C || !h) return (0, import_chunk_cqa9hrgx.u)("compact_context_cap_enforcement"), null;
    let A = g ? "" : ` or update to a Claude Code version that recognizes ${e}`, I = `CLAUDE_CODE_DISABLE_1M_CONTEXT is set, but the ${C / 1e3}K limit isn't enforced for ${e}, so this session can grow past it. To enforce it, set CLAUDE_CODE_AUTO_COMPACT_WINDOW=${C} (or the autoCompactWindow setting)${A}.`;
    return (0, import_chunk_cqa9hrgx.m)("compact_context_cap_enforcement", v === "auto" ? "window_source_auto" : "window_above_boundary"), I;
  } catch (r) {
    return (0, import_chunk_cqa9hrgx.l)("compact_context_cap_enforcement", "resolve_failed"), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(r), "cap enforcement check failed")), null;
  }
}
function Um(e, o) {
  if ((0, import_chunk_xfj2cwfv.fk)()) return false;
  if (!(o?.includes(import_chunk_xfj2cwfv.$C.header) === true || (import_chunk_c203g5kd.s.ANTHROPIC_BETAS ?? "").split(",").map((r) => r.trim()).includes(import_chunk_xfj2cwfv.$C.header))) return false;
  return (0, import_chunk_zhr7rpv7.kd)((0, import_chunk_zmb62hr5.Yt)((0, import_chunk_865at33z.St)(e)))?.context?.supports_1m_beta === true;
}
function YXn(e, o) {
  return (0, import_chunk_bzyb60p0.yh)() || (0, import_chunk_wj4me9k5.RN)() || !(0, import_chunk_bzyb60p0.gC)(e, o);
}
function Wl(e, o) {
  let n = (0, import_chunk_6e68m1dj.Ru)() ? import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_MCP_CONFIG : void 0;
  if (!n) return;
  let { config: r, errors: g } = (0, import_chunk_bzyb60p0.oMn)({ filePath: n, expandVars: true, scope: "dynamic", bridgeSessionId: e });
  if (r === null) (0, import_chunk_w578pjby.t)(`--mcp-config: the runner's copy of the MCP servers it delivered cannot be used (${g[0]?.message ?? "no reason given"}); updates and removals of the delivered MCP servers are ignored for this session`, { level: "warn" });
  let h = r?.mcpServers ?? {};
  for (let [C, y] of Object.entries(h)) o(C, y);
  return { servers: h, skippedNames: new Set(g.flatMap(({ mcpErrorMetadata: C }) => C?.skipReason && C.serverName != null ? [C.serverName] : [])) };
}
function Vl(e, o) {
  if (e !== void 0) return { text: (0, import_chunk_kx2fp6pc.Yn)(`--mcp-config provenance: declared (${e.size} host-delivered: ${[...e].join(", ")})`), level: "debug" };
  if (o === 0) return;
  return (0, import_chunk_6e68m1dj.Ru)() && !(0, import_chunk_3t7ve0wy.Yg)() ? { text: "--mcp-config: CLAUDE_CODE_REMOTE_MCP_CONFIG did not reach this runner's session (a runner that does not send it, or a wrapper that does not pass it on), so an update of the delivered MCP servers shuts down every --mcp-config server it does not name, the operator's own included. Upgrade a self-hosted runner, or have the wrapper pass the variable on.", level: "warn" } : { text: "--mcp-config provenance: undeclared", level: "debug" };
}
function jm(e, o) {
  if (o === void 0) return;
  let n = /* @__PURE__ */ new Set();
  for (let [r, g] of Object.entries(e)) if (Object.hasOwn(o, r) && (0, import_chunk_z688m88d.Zt)((0, import_chunk_qwbhh2k3.Pn)(g, "configuredCommand"), (0, import_chunk_qwbhh2k3.Pn)(o[r], "configuredCommand"))) n.add(r);
  return n;
}
function zs(e, o, n) {
  let r = Object.fromEntries(e.flatMap((I) => Object.entries(I)));
  if (n === void 0) return { servers: r, ownership: void 0, refused: [] };
  let g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
  for (let I of e) {
    let H = jm(I, n.servers);
    for (let [G, K] of Object.entries(I)) if (H?.has(G)) h.add(G);
    else g.set(G, K);
  }
  let C = /* @__PURE__ */ new Set([...g.keys(), ...o.filter((I) => !n.skippedNames.has(I))]), y = new Map([...C].map((I) => [(0, import_chunk_px0hhsq7.rC)(I), I])), v = [], R = /* @__PURE__ */ new Set(), A = [];
  for (let [I, H] of Object.entries(r)) {
    let G = g.get(I);
    if (G !== void 0) v.push([I, G]);
    if (!h.has(I)) continue;
    let K = (0, import_chunk_px0hhsq7.rC)(I), z = y.get(K);
    if (z === void 0) {
      v.push([I, H]), R.add(I);
      continue;
    }
    A.push({ name: I, type: "reserved_name", message: (0, import_chunk_kx2fp6pc.Yn)(C.has(I) ? `The delivered MCP server "${I}" was not loaded: this runner's operator defines a server of that name with --mcp-config. Rename one of the two.` : `MCP server "${I}" was not loaded: its tool names would start with mcp__${K}__, the same as those of "${z}", which this runner's operator added with --mcp-config. Rename one of the two.`) });
  }
  return { servers: Object.fromEntries(v), ownership: { hostOwnedNames: R, operatorNames: C }, refused: A };
}
function U2r(e, o) {
  let n = /* @__PURE__ */ Object.create(null), r = new Set(o?.operatorNames), g = /* @__PURE__ */ Object.create(null);
  for (let h of e) {
    if (!(h.config.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(h.config) && (0, import_chunk_bzyb60p0.G4e)(h.config) && !(0, import_chunk_bzyb60p0.kSt)(h.name) && (0, import_chunk_qdcbcsg7.nJe)(h.config) === void 0)) continue;
    if (o === void 0 || o.hostOwnedNames.has(h.name)) n[h.name] = h.config;
    else r.add(h.name), g[h.name] = h.config;
  }
  return { hostOwnedConfigs: n, operatorOwnedMcpConfigNames: r, operatorOwnedConfigs: g };
}
var D6s = "Configured via --mcp-config on this host (operator-supplied); ignored";
var Yl = { isSafeMode() {
  return (0, import_chunk_2gtmjt3y.as)();
}, isHermeticMode() {
  return (0, import_chunk_snmsx2fv.ZH)();
}, isCcrInjected(e) {
  return (0, import_chunk_865at33z.Gpn)(e);
}, isOwnToolContainer(e) {
  return (0, import_chunk_865at33z.gPr)(e);
} };
function Kl(e, { dropForEnterpriseMcpConfig: o, dropForSideloadPolicy: n = false, keptDespiteAllowlist: r = [] }, g = Yl) {
  let h = g.isSafeMode() ? "safe mode" : g.isHermeticMode() ? "hermetic mode" : o ? "enterprise MCP config" : n ? "disableSideloadFlags policy" : void 0;
  if (!h) return { servers: e, dropped: [], keptNotes: qs("allowedMcpServers", r.filter((A) => Object.hasOwn(e, A))), reason: h };
  let C = {}, y = [], v = [], R = h === "enterprise MCP config" || h === "disableSideloadFlags policy";
  for (let [A, I] of Object.entries(e)) if (L6s(I, R, h === "disableSideloadFlags policy", g)) {
    if (C[A] = I, R && g.isCcrInjected(I)) v.push(A);
  } else y.push(A);
  return { servers: C, dropped: y, keptNotes: [...qs("allowedMcpServers", r.filter((A) => Object.hasOwn(C, A))), ...qs(h === "enterprise MCP config" ? "managed-mcp.json" : "disableSideloadFlags", v)], reason: h };
}
function L6s(e, o, n, r = Yl) {
  return e.type === "sdk" || n && r.isOwnToolContainer(e) || o && r.isCcrInjected(e);
}
function qs(e, o) {
  if (o.length === 0) return [];
  let n = o.length === 1;
  return [`Note: ${e} does not remove the MCP ${(0, import_chunk_7cfjrnwy.O)(o.length, "server")} Claude Code adds to its own remote sessions: ${o.join(", ")}. To remove ${n ? "it" : "one"}, add {"serverName": "${n ? o[0] : "<name>"}"} to deniedMcpServers in managed settings.`];
}
function Gwa(e) {
  let { initialMainLoopModel: o, settingLayer: n } = (0, import_chunk_k67pwqya.sws)(Xl(void 0, void 0), e);
  (0, import_chunk_f9x2f6cx.y3n)(o), (0, import_chunk_f9x2f6cx.wNs)(n);
}
async function zl(e) {
  let o = Xl(e.userSpecifiedModel, e.agentModel !== void 0 ? { model: e.agentModel, modelSource: e.agentModelSource } : void 0), n = (0, import_chunk_k67pwqya.sws)(o, e.storageV5), r, g = n.restrictedModel, h = g !== void 0 && (0, import_chunk_gttxc09k.rEn)();
  if (g !== void 0 && !h) try {
    if (r = await (0, import_chunk_n02njw1s.nrr)(g, e.storageV5, e.credentials), r === "overturned") n = (0, import_chunk_k67pwqya.sws)(o, e.storageV5);
  } catch (z) {
    (0, import_chunk_k449cc64.i)(z);
  }
  let { effectiveModel: C, initialMainLoopModel: y, resolvedInitialModel: v, rawModelRequest: R, restrictedModel: A, unservedModelSpelling: I, settingLayer: H } = n;
  (0, import_chunk_f9x2f6cx.Ig)(C), (0, import_chunk_f9x2f6cx.y3n)(y), (0, import_chunk_f9x2f6cx.wNs)(H), (0, import_chunk_865at33z.ePl)((z) => (0, import_chunk_gttxc09k.rEn)() ? Promise.resolve("probe_failed") : (0, import_chunk_n02njw1s.nrr)(z, e.storageV5, e.credentials));
  let G = (0, import_chunk_865at33z.lCt)(), K = G !== null && !(0, import_chunk_865at33z.gAo)(G.name);
  if (K) (0, import_chunk_cqa9hrgx.l)("model_org_default", "unrecognized");
  else (0, import_chunk_f9x2f6cx.Z6e)((0, import_chunk_865at33z.hAo)());
  if ((0, import_chunk_f9x2f6cx.Nia)(import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_MODEL ?? null), import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_MODEL !== void 0) if ((0, import_chunk_865at33z.MGe)() === null) (0, import_chunk_cqa9hrgx.l)("model_env_default", "inert");
  else if (K) (0, import_chunk_cqa9hrgx.l)("model_env_default", "org_default_unrecognized");
  else if ((0, import_chunk_865at33z.tke)().attribution === "org") (0, import_chunk_cqa9hrgx.l)("model_env_default", "outranked_by_org_default");
  else (0, import_chunk_cqa9hrgx.u)("model_env_default");
  if (!e.routineModelTransientlySkipped && !h) (0, import_chunk_9e5mdyfk.BW)("--model", ["-m"], y, void 0, e.storageV5);
  if (A !== void 0) (0, import_chunk_cqa9hrgx.l)("startup_resolve_model", r === "probe_failed" ? "entitlement_probe_failed" : "requested_model_restricted", { model: (0, import_chunk_865at33z.Xt)(A) ?? (0, import_chunk_78g0060s.S)("nonconforming") });
  else if (I !== void 0) (0, import_chunk_cqa9hrgx.l)("startup_resolve_model", (0, import_chunk_865at33z.HGn)(I) ? "family_spelling_unserved" : "persisted_spelling_unserved");
  else (0, import_chunk_cqa9hrgx.u)("startup_resolve_model");
  return { effectiveModel: C, initialMainLoopModel: y, resolvedInitialModel: v, rawModelRequest: R, restrictedModel: A, unservedModelSpelling: I, settingLayer: H, modelWithoutStartupOverride: n.modelWithoutStartupOverride };
}
function Xl(e, o) {
  return { cli: { model: e, isNonInteractiveSession: (0, import_chunk_f9x2f6cx.Se)() }, env: process.env, settings: (0, import_chunk_2yx6c1y2.zr)() || {}, agentFrontmatter: o };
}
function m8t(e, o, n) {
  if (!o) return e;
  if ((0, import_chunk_2gtmjt3y.as)()) return e;
  if ((0, import_chunk_f9x2f6cx.Y)()) {
    if (o.mcpServers?.length) (0, import_chunk_74mx55jd.KQ)("main_agent_mcp_servers");
    return e;
  }
  if (n?.strictMcpConfig && o.source !== "flagSettings" || (0, import_chunk_bzyb60p0.yh)()) return e;
  let g = (0, import_chunk_bzyb60p0.gZr)(o);
  if (Object.keys(g).length === 0) return e;
  let { allowed: h, blocked: C } = (0, import_chunk_bzyb60p0.SH)(g);
  if (C.length > 0) n?.onBlocked?.(C);
  let { servers: y, refused: v } = (0, import_chunk_bzyb60p0.$es)(h, e);
  for (let R of v) (0, import_chunk_bzyb60p0.r4a)({ ...R, scope: "agent" });
  return { ...y, ...e };
}
function Jl(e, o = Hm) {
  if (e === void 0) return "unset";
  let n = e.trim();
  if (n === "") return "blank";
  let r = o.sep === "\\";
  if (o.isAbsolute(e)) return !r || /^[a-z]:/i.test(e) ? "absolute" : /^[\\/]{2}/.test(e) ? "unc" : "rooted_no_drive";
  let g = n.replace(/^(["'])(.*)\1$/s, "$2");
  if (o.isAbsolute(g)) return "quoted_or_padded";
  let [h = ""] = g.split(r ? /[\\/]/ : "/");
  return h === "~" ? "tilde" : /^[$%~]/.test(h) ? "variable" : "relative";
}
function Zl() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return {};
  let e = (0, import_chunk_khxw3ng0.Zi)((0, import_chunk_5e3gtsn9.n_)(), "CLAUDE_CONFIG_DIR"), o = (0, import_chunk_2gtmjt3y.OPt)();
  return { config_dir_kind: (0, import_chunk_78g0060s.f)(Jl(e)), ...o !== e && { config_dir_settings_kind: (0, import_chunk_78g0060s.f)(Jl(o)) } };
}
var $m = [/(?:^|\/)(?:package-lock\.json|yarn\.lock|bun\.lock|bun\.lockb|pnpm-lock\.yaml|Pipfile\.lock|poetry\.lock|Cargo\.lock|Gemfile\.lock|go\.sum|composer\.lock|uv\.lock)$/, /\.generated\./, /(?:^|\/)(?:dist|build|out|target|node_modules|\.next|__pycache__)\//, /\.(?:min\.js|min\.css|map|pyc|pyo)$/, /\.(?:json|ya?ml|toml|xml|ini|cfg|conf|env|lock|txt|md|mdx|rst|csv|log|svg)$/i, /(?:^|\/)\.?(?:eslintrc|prettierrc|babelrc|editorconfig|gitignore|gitattributes|dockerignore|npmrc)/, /(?:^|\/)(?:tsconfig|jsconfig|biome|vitest\.config|jest\.config|webpack\.config|vite\.config|rollup\.config)\.[a-z]+$/, /(?:^|\/)\.(?:github|vscode|idea|claude)\//, /(?:^|\/)(?:CHANGELOG|LICENSE|CONTRIBUTING|CODEOWNERS|README)(?:\.[a-z]+)?$/i];
function Wm(e) {
  return !$m.some((o) => o.test(e));
}
function Gm(e, o) {
  let n = [], r = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
  for (let h = 1; n.length < o && h <= o; h++) for (let C of e) {
    if (n.length >= o) break;
    if (!Wm(C)) continue;
    let y = Math.max(C.lastIndexOf("/"), C.lastIndexOf("\\")), v = y >= 0 ? C.slice(y + 1) : C;
    if (!v || r.has(v)) continue;
    let R = y >= 0 ? C.slice(0, y) : ".";
    if ((g.get(R) ?? 0) >= h) continue;
    n.push(v), r.add(v), g.set(R, (g.get(R) ?? 0) + 1);
  }
  return n.length >= o ? n : [];
}
async function Vm() {
  if (import_chunk_c203g5kd.s.platform === "win32") return [];
  if (!await (0, import_chunk_w5s307zm.l$)()) return [];
  try {
    let e = await (0, import_chunk_865at33z.Jzt)(), o = ["log", "-n", "1000", "--pretty=format:", "--name-only", "--diff-filter=M"], n = /* @__PURE__ */ new Map(), r = (h) => {
      for (let C of h.split(`
`)) {
        let y = C.trim();
        if (y) n.set(y, (n.get(y) ?? 0) + 1);
      }
    };
    if (e) {
      let { stdout: h } = await (0, import_chunk_7fsmgfxx.ut)("git", [...o, `--author=${e}`], { cwd: (0, import_chunk_18rsj2ts.pe)() });
      r(h);
    }
    if (n.size < 10) {
      let { stdout: h } = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), o, { cwd: (0, import_chunk_18rsj2ts.pe)() });
      r(h);
    }
    let g = Array.from(n.entries()).sort((h, C) => C[1] - h[1]).map(([h]) => h);
    return Gm(g, 5);
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Failed to collect frequently-modified files from git history: ${e}`, { level: "error" }), [];
  }
}
var Ym = 6048e5;
function zwa(e) {
  let o = Math.abs((0, import_chunk_ghnve1xk.fse)(e)), r = (0, import_chunk_865at33z.Cc)().exampleFiles ?? [], g = r[o % r.length] ?? "<filepath>", h = ["fix lint errors", "fix typecheck errors", `how does ${g} work?`, `refactor ${g}`, "how do I log an error?", `edit ${g} to\u2026`, `write a test for ${g}`, "create a util logging.py that\u2026"];
  return `Try "${h[(o >>> 8) % h.length]}"`;
}
async function ed(e) {
  let o = (0, import_chunk_865at33z.Cc)(), n = o.exampleFilesGeneratedAt ?? 0;
  if (Date.now() - n > Ym || !o.exampleFiles?.length) Vm().then((g) => {
    if (!g.length && !o.exampleFiles?.length) return;
    (0, import_chunk_865at33z.kw)((h) => ({ ...h, exampleFiles: g, exampleFilesGeneratedAt: Date.now() }), e);
  });
}
function net(e, o, n) {
  return (r, g) => (0, import_chunk_bzyb60p0.pgi)(e, r, g, { storageV5: o, credentials: n }).then(import_chunk_bzyb60p0.Cgi);
}
var Ze = (0, import_chunk_t57w17k7.de)({ files: /* @__PURE__ */ new Map(), trees: /* @__PURE__ */ new Map(), movedDuringStart: void 0, mainAgentKeepsProjectMemory: false, mainAgentFromProjectTier: false, startSettingsFromProjectTier: [] }, (e) => {
  e.files.clear(), e.trees.clear(), e.movedDuringStart = void 0, e.mainAgentKeepsProjectMemory = false, e.mainAgentFromProjectTier = false, e.startSettingsFromProjectTier = [];
});
async function Xs(e) {
  let { resolvedPath: o, isSymlink: n, isCanonical: r } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e);
  if (r) return o;
  if (n) return { kind: "unreadable", reason: "a link that is not followed" };
  let g = (0, import_path3.dirname)(e);
  if (g === e || (0, import_chunk_z6pfqf6e.ja)(o)) return { kind: "unreadable", reason: "a link that is not followed" };
  let h = await Xs(g);
  if (typeof h !== "string") return h;
  let C = (0, import_path3.join)(h, (0, import_path3.basename)(e));
  try {
    await (0, import_promises2.stat)(C);
  } catch (y) {
    let v = (0, import_chunk_jv7av99m.w)(y);
    if (v === "ENOENT" || v === "ENOTDIR") return { kind: "absent" };
    return { kind: "unreadable", reason: (0, import_chunk_jv7av99m.d)(y) };
  }
  return { kind: "unreadable", reason: "a link that is not followed" };
}
var td = 2n * 1024n * 1024n;
async function Er(e) {
  let o = await Xs(e);
  if (typeof o !== "string") return o;
  let n;
  try {
    let r = await (0, import_promises2.lstat)(o, { bigint: true });
    if (!r.isFile() || r.size > td) return { kind: "unreadable", reason: "not a regular file of settings size" };
    let g = (0, import_chunk_w578pjby.G8)();
    n = await (0, import_promises2.open)(o, typeof g === "string" ? g : g | import_chunk_09gzjq1e.Fo);
    let h = await n.stat({ bigint: true }), C = (0, import_chunk_kpby9tcv.RF)(r, h) || (0, import_chunk_cg8dqz0a.x)() !== "windows" && h.dev !== r.dev;
    if (!h.isFile() || h.size > td || C) return { kind: "unreadable", reason: "not a regular file of settings size" };
    let y = Number(h.size), v = Buffer.allocUnsafe(y + 1), R = 0;
    while (R < v.length) {
      let { bytesRead: A } = await n.read(v, R, v.length - R, R);
      if (A === 0) break;
      R += A;
    }
    if (R > y) return { kind: "unreadable", reason: "grew while it was read" };
    return { kind: "read", sha256: (0, import_crypto2.createHash)("sha256").update(v.subarray(0, R)).digest("hex") };
  } catch (r) {
    let g = (0, import_chunk_jv7av99m.w)(r);
    return g === "ENOENT" || g === "ENOTDIR" ? { kind: "absent" } : { kind: "unreadable", reason: (0, import_chunk_jv7av99m.d)(r) };
  } finally {
    await n?.close();
  }
}
async function Vwa() {
  for (let n of ["projectSettings", "localSettings"]) {
    let r = (0, import_chunk_2yx6c1y2._n)(n);
    if (r !== void 0) Ze.files.set(r, await Er(r));
  }
  let e = (0, import_chunk_2yx6c1y2._n)("projectSettings"), o = /* @__PURE__ */ new Set([...e === void 0 ? [] : [(0, import_path3.join)((0, import_path3.dirname)(e), "agents")], ...await (0, import_chunk_bzyb60p0.kie)("agents", null)]);
  for (let n of o) await nd(n);
}
async function nd(e) {
  let o = await rd(e);
  if (Ze.trees.set(e, o.kind === "listed" ? o.paths : o), o.kind === "listed") for (let n of o.paths) Ze.files.set(n, await Er(n));
}
var ef = 2e3, tf = 8;
async function rd(e) {
  let o = await Xs(e);
  if (typeof o !== "string") return o;
  let n = [], r = [{ path: o, depth: 0 }];
  try {
    for (let g = r.shift(); g; g = r.shift()) {
      let h = await (0, import_promises2.readdir)(g.path, { withFileTypes: true });
      for (let C of h) {
        let y = (0, import_path3.join)(g.path, C.name);
        if (C.isDirectory()) {
          if (g.depth >= tf) return { kind: "unreadable", reason: "agents folder too deep" };
          r.push({ path: y, depth: g.depth + 1 });
        } else if (C.isSymbolicLink() || C.isFile() && C.name.endsWith(".md")) n.push(y);
        if (n.length + r.length > ef) return { kind: "unreadable", reason: "agents folder too large" };
      }
    }
  } catch (g) {
    let h = (0, import_chunk_jv7av99m.w)(g);
    return (h === "ENOENT" || h === "ENOTDIR") && n.length === 0 ? { kind: "absent" } : { kind: "unreadable", reason: (0, import_chunk_jv7av99m.d)(g) };
  }
  return { kind: "listed", paths: n.sort() };
}
async function sd(e) {
  for (let o of e) {
    let n = (0, import_path3.join)((0, import_path3.resolve)(o), ".claude", "agents");
    if (!Ze.trees.has(n)) await nd(n);
  }
}
async function Xmt() {
  if (Ze.movedDuringStart !== void 0) return;
  let e = await N6s();
  if (e !== void 0) Ze.movedDuringStart ??= e;
}
async function id(e) {
  if (!Ze.files.has(e)) Ze.files.set(e, await Er(e));
}
async function N6s() {
  for (let [e, o] of Ze.trees) {
    let n = await rd(e);
    if (!(Array.isArray(o) ? n.kind === "listed" && n.paths.length === o.length && n.paths.every((g, h) => g === o[h]) : o.kind === "absent" && n.kind === "absent")) return { path: e, unreadableStill: !Array.isArray(o) && o.kind === "unreadable" && n.kind === "unreadable" };
  }
  for (let [e, o] of Ze.files) {
    let n = await Er(e);
    if (!(o.kind === "absent" && n.kind === "absent" || o.kind === "read" && n.kind === "read" && o.sha256 === n.sha256)) return { path: e, unreadableStill: o.kind === "unreadable" && n.kind === "unreadable" };
  }
  return Ze.movedDuringStart === void 0 ? void 0 : { path: Ze.movedDuringStart.path, unreadableStill: false };
}
function ad() {
  Ze.mainAgentKeepsProjectMemory = true;
}
function Kwa() {
  return Ze.mainAgentKeepsProjectMemory;
}
function ld() {
  Ze.mainAgentFromProjectTier = true;
}
function qwa() {
  return Ze.mainAgentFromProjectTier;
}
function wjo(e) {
  let o = [];
  if (e.env && typeof e.env === "object" && Object.keys(e.env).length > 0) o.push("env");
  if (typeof e.model === "string" && e.model !== "") o.push("model");
  if (Array.isArray(e.fallbackModel) && e.fallbackModel.length > 0) o.push("fallbackModel");
  if (typeof (e.permissions && typeof e.permissions === "object" ? e.permissions : void 0)?.defaultMode === "string") o.push("permissions.defaultMode");
  return o;
}
function kjo() {
  let e = (0, import_chunk_xzvhvaa2.Ko)().includes("userSettings") && (0, import_chunk_2yx6c1y2.vm)(), o = [];
  for (let [n, r] of [["projectSettings", "settings.json"], ["localSettings", "settings.local.json"]]) {
    let g = n === "projectSettings" && e ? null : (0, import_chunk_2yx6c1y2._e)(n);
    for (let h of g ? wjo(g) : []) o.push({ file: r, key: h });
  }
  return o;
}
function Ejo(e) {
  Ze.startSettingsFromProjectTier = e.filter((o, n) => e.findIndex((r) => r.file === o.file && r.key === o.key) === n);
}
function B2r() {
  return Ze.startSettingsFromProjectTier;
}
function of(e) {
  let o = (0, import_chunk_865at33z.St)(e, { identity: true });
  if ((0, import_chunk_zhr7rpv7.kd)((0, import_chunk_zmb62hr5.Yt)(o)) !== void 0) return "compiled_catalog";
  if ((0, import_chunk_865at33z.sz)(o)) return "compiled_legacy";
  if ((0, import_chunk_865at33z.Bx)(e, o)) return "self_described_row";
  if ((0, import_chunk_865at33z.jV)(e, o) !== void 0) return "served_catalog";
  if ((0, import_chunk_865at33z.mde)().some((r) => typeof r.value === "string" && (0, import_chunk_zmb62hr5.dP)(r.value, e))) return "bootstrap_additional_option";
  let n = import_chunk_c203g5kd.s.ANTHROPIC_CUSTOM_MODEL_OPTION;
  if (n && (0, import_chunk_zmb62hr5.dP)(n, e)) return "custom_option_env";
  if ((0, import_chunk_865at33z.dCt)(e)) return "tier_pin_env";
  if ((0, import_chunk_865at33z.aCt)().some((r) => typeof r.value === "string" && (0, import_chunk_zmb62hr5.dP)(r.value, e))) return "gateway_discovery";
  return "unrecognized";
}
function nf() {
  let e = (0, import_chunk_f9x2f6cx.TQe)();
  switch (e) {
    case void 0:
    case null:
      return sf();
    case "cli":
      return rf();
    default:
      return e;
  }
}
function rf() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg" || (0, import_chunk_wtm85h0y.Yc)()) return "forwarded_pick";
  switch ((0, import_chunk_3t7ve0wy.fh)()) {
    case "sdk-ts":
    case "sdk-py":
      return "sdk_option";
    default:
      return "cli_flag";
  }
}
function sf() {
  switch ((0, import_chunk_865at33z.tke)().attribution) {
    case "org":
      return "org_default";
    case "enforced":
      return "enforced_default";
    case "entitlement":
      return "entitlement_default";
    case "managed_deny":
      return "managed_deny_default";
    case "env":
      return "env_default";
    case "served":
      return "served_default";
    case "tier":
      return "default";
  }
}
function Js() {
  return { model_definition_source: (0, import_chunk_78g0060s.f)(of((0, import_chunk_865at33z.dt)())), model_setting_source: (0, import_chunk_78g0060s.f)(nf()) };
}
var dd = { model_definition_source: (0, import_chunk_78g0060s.S)("omitted_resume"), model_setting_source: (0, import_chunk_78g0060s.S)("omitted_resume") };
function af(e) {
  let o = (0, import_chunk_qebpc5de.MM)(e);
  if (o.kind === "malformed" || o.kind === "call" && !o.toolName) return true;
  let n = e.replace(/\\[^]/g, "");
  return e.includes(",") && (0, import_chunk_7cfjrnwy.Mt)(n, "(") !== (0, import_chunk_7cfjrnwy.Mt)(n, ")");
}
function cd(e, o) {
  return `doesn't look like a complete rule, so ${e}. A rule looks like ${import_chunk_hn3cwwzt.ke} or ${import_chunk_hn3cwwzt.ke}(git *). Check for a missing ")", a space before "(", or text after ")". If a ")" belongs inside your rule, the list may have split there and the quoted text is only part of it: move the whole rule to permissions.${o} in settings this session reads.`;
}
function ud({ allowedTools: e, disallowedTools: o, tools: n }) {
  let r = [["--allowedTools", e, cd("this list may allow more or less than you meant", "allow")], ["--disallowedTools", o, cd("a tool you meant to block may still run", "deny")], ["--tools", n, `doesn't look like a tool name, so this list may not give you the tools you meant. Use plain names such as ${import_chunk_hn3cwwzt.ke} or ${import_chunk_k883m4fq.De}, without parentheses.`]], g = /* @__PURE__ */ new Map();
  for (let y of o) for (let v of (0, import_chunk_qebpc5de.JDr)([y])) if (!v.includes(",") && !v.includes("\\)")) for (let R of (0, import_chunk_qebpc5de.$f)([v])) g.set(R, (g.get(R) ?? 0) + 1);
  let h = new Set(g.keys()), C = (y) => {
    let v = g.get(y) ?? 0;
    return g.set(y, v - 1), v > 0 || h.has(y) && o.includes(y);
  };
  return r.flatMap(([y, v, R]) => {
    let A = (0, import_chunk_qebpc5de.$f)([...v]).filter((G) => !(y === "--disallowedTools" && C(G)) && af(G)), I = A[0];
    if (I === void 0) return [];
    let H = A.length > 1 ? ` This list has ${A.length - 1} more like it.` : "";
    return [`${y}: "${(0, import_chunk_tp3c5q2s.Qe)(I, 64)}" ${R}${H}`];
  });
}
function vjo({ remoteControlFlag: e, isRemoteThinClient: o }) {
  let n = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE, r = (0, import_chunk_865at33z.cPs)(), g = !o && !n && !e && r.value === void 0 ? (0, import_chunk_7d2qr9z5.nms)() : void 0, h = !o && !n && (e || (r.value ?? g?.value ?? false)), C = false, y = Boolean(import_chunk_c203g5kd.s.CLAUDE_BRIDGE_REATTACH_SESSION), v = import_chunk_c203g5kd.s.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, R = h || C || y && !v, A = !h && (y ? v : C);
  return { replBridgeEnabled: R, replBridgeAutoOnByDefault: h && !e && !y && r.value === void 0, replBridgeExplicit: e || y && !v && !h, replBridgeOutboundOnly: A, explicit: r, autoConnectDefault: g, ccrMirrorEnabled: C, remoteControlFlag: e, envRemote: n, isRemoteThinClient: o, reattach: y, result: !R ? "off" : A ? "mirror" : "full" };
}
function Ywa(e) {
  (0, import_chunk_y53wbr8a.a)("tengu_rc_autostart_resolved", { explicit_setting: (0, import_chunk_78g0060s.f)(e.explicit.value === void 0 ? "unset" : e.explicit.value ? "true" : "false"), explicit_source: (0, import_chunk_78g0060s.f)(e.explicit.source), default_value: e.autoConnectDefault?.value, default_source: (0, import_chunk_78g0060s.f)(e.autoConnectDefault?.source ?? "unevaluated"), mirror: e.ccrMirrorEnabled, remote_control_flag: e.remoteControlFlag, env_remote: e.envRemote, thin_client: e.isRemoteThinClient, reattach: e.reattach, result: (0, import_chunk_78g0060s.f)(e.result) });
}
(0, import_chunk_adx6804h.B)();
var md = "tengu_glittery_puppy", lf = 20, df = 1, fd = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ arm: (0, import_chunk_adx6804h.F)(["control", "switch"]), switchAgainAfterDays: (0, import_chunk_adx6804h.E)().int().min(0).max(30).default(7), rerunOffer: (0, import_chunk_adx6804h.Ae)({ offer: (0, import_chunk_adx6804h.P)().default(false), blocks: (0, import_chunk_adx6804h.E)().int().min(1).max(lf).default(5), cooldownDays: (0, import_chunk_adx6804h.E)().int().min(1).max(90).default(14) }).default({ offer: false, blocks: 5, cooldownDays: 14 }), vscode: (0, import_chunk_adx6804h.E)().int().min(0).default(0) }));
function cf(e) {
  if (typeof e !== "object" || e === null || Object.keys(e).length === 0) return;
  let o = fd().safeParse(e);
  if (!o.success) {
    (0, import_chunk_cqa9hrgx.l)("bypass_auto_switch", "served_value_invalid");
    return;
  }
  return o.data;
}
function sMt(e) {
  let o = (0, import_chunk_865at33z.Uj)().accountUuid;
  if (o !== void 0 && o !== e) return;
  return cf((0, import_chunk_865at33z.b)(md, null));
}
function F6s() {
  let e = fd().safeParse((0, import_chunk_865at33z.xX)(md)).data?.vscode;
  return e !== void 0 && e > 0 && e <= df;
}
function Jmt(e, o = (0, import_chunk_865at33z.ge)()) {
  let n = Sd(o.bypassAutoSwitch, e);
  if (typeof n !== "object" || n === null || typeof n.enrolledAt !== "number") return;
  let { arm: r, panel: g } = n;
  return { enrolledAt: n.enrolledAt, ...(r === "control" || r === "switch") && { arm: r }, ...gd(n), ...typeof g === "object" && g !== null && { panel: gd(g) } };
}
function gd({ pausedAt: e, pauseDays: o, keepBypassAt: n }) {
  return { ...typeof e === "number" && { pausedAt: e }, ...typeof o === "number" && { pauseDays: o }, ...typeof n === "number" && { keepBypassAt: n } };
}
function Xwa(e, o, n, r) {
  let g = Jmt(o, e);
  if (g?.arm === n) return e;
  return hd(e, o, { enrolledAt: g?.enrolledAt ?? r, arm: n });
}
function W2r(e, o, n) {
  let r = Jmt(o, e);
  return r === void 0 ? e : hd(e, o, { enrolledAt: r.enrolledAt, ...n });
}
function hd(e, o, n) {
  return { ...e, bypassAutoSwitch: { ...e.bypassAutoSwitch, [o]: { ...Sd(e.bypassAutoSwitch, o), ...n } } };
}
function Sd(e, o) {
  return typeof e === "object" && e !== null && Object.hasOwn(e, o) ? e[o] : void 0;
}
function Qs(e) {
  return { ...e, isBypassPermissionsModeAvailable: false, isBypassHeldForAutoSwitch: true };
}
function Zkn(e) {
  if (e.isBypassHeldForAutoSwitch !== true || e.restricted || (0, import_chunk_3b9jqhjk.OC)()) return;
  return { ...e, isBypassPermissionsModeAvailable: true, isBypassHeldForAutoSwitch: void 0 };
}
function yd(e) {
  return e === "bypassPermissions" ? "default" : e;
}
function _d(e) {
  if (!e.isBypassPermissionsModeAvailable) return e;
  return (0, import_chunk_xfj2cwfv.qc)().noteBypassAutoSwitch({ isHeld: true, wasHeld: true, isAllowFlagOwed: !(0, import_chunk_865at33z.Qt)() }), Qs(e);
}
function $6s(e, o) {
  return o && e === "auto" ? "bypassPermissions" : e;
}
var Zs = "--allow-dangerously-skip-permissions";
var vd = 864e5, pf = /* @__PURE__ */ new Set(["not_bypass", "staff", "job", "nested", "relaunch"]), mf = 60 * vd;
function gf(e, o) {
  let n = e.mode === "bypassPermissions";
  if (!n && !e.isBypassPermissionsModeAvailable) return "not_bypass";
  if ((0, import_chunk_865at33z.Kc)() || (0, import_chunk_865at33z.Na)()) return "job";
  if (o.isNested) return "nested";
  if (o.isRelaunch) return "relaunch";
  if (!n) return "allow_flag";
  if (o.source !== "skip_flag" && o.source !== "mode_flag" && o.source !== "agent") return "source";
  if ((0, import_chunk_k67pwqya.u2t)("bypassPermissions") !== void 0) return "settings_default";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS) return "even_more_flag";
  if (e.restricted) return "restricted";
  if (o.surface === "vscode_panel" ? !(0, import_chunk_3t7ve0wy.ta)() : (0, import_chunk_3t7ve0wy.Li)() !== "cli") return "entrypoint";
  if (o.startsRemoteControl || import_chunk_c203g5kd.s.CLAUDE_BRIDGE_REATTACH_SESSION) return "remote_control";
  if ((0, import_chunk_f9x2f6cx.iE)().length > 0) return "channels";
  if (!(0, import_chunk_3t7ve0wy.KA)() || e.denyInsteadOfPrompting) return "unattended";
  if (o.isElsewhere || (0, import_chunk_f9x2f6cx.Hn)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return "elsewhere";
  let r = (0, import_chunk_5e3gtsn9.n_)();
  if ((0, import_chunk_69qhefwa.Ne)((0, import_chunk_khxw3ng0.Zi)(r, "CI"))) return "ci";
  if (import_chunk_c203g5kd.s.IS_DEMO) return "demo";
  if (import_chunk_c203g5kd.s.CLAUBBIT) return "claubbit";
  if ((0, import_chunk_2gtmjt3y.Xn)()) return "bare";
  if (o.hasInitialPrompt) return "initial_prompt";
  if (import_chunk_c203g5kd.s.IS_SANDBOX === "1") return "is_sandbox";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_BUBBLEWRAP) return "bubblewrap";
  if (import_chunk_c203g5kd.s.SANDBOX_RUNTIME) return "sandbox_runtime";
  if ((0, import_chunk_69qhefwa.Ne)((0, import_chunk_khxw3ng0.Zi)(r, "CODESPACES"))) return "codespaces";
  if ((0, import_chunk_khxw3ng0.Zi)(r, "KUBERNETES_SERVICE_HOST")) return "kubernetes";
  if (o.isResume) return "resume";
  if (!o.hadAcceptedWarning) return "warning_shown";
  if ((0, import_chunk_865at33z.Sn)()?.accountUuid === void 0) return "no_account";
  let g = ei();
  if (g !== void 0) return g;
  let h = (0, import_chunk_865at33z.b)("tengu_auto_mode_config", {});
  if (!(0, import_chunk_1zphp81a.l6)(e) || h?.enabled === "disabled" || (0, import_chunk_hgqhjaz5.VGr)() && (0, import_chunk_865at33z.C7e)((0, import_chunk_2yx6c1y2.vt)())) return "auto_unavailable";
  if (o.surface === "terminal" && (0, import_chunk_1n9wdcmg.Iy)("chat:cycleMode", "Chat", "shift+tab") === "") return "no_cycle_key";
  return;
}
function ei() {
  let e = (0, import_chunk_865at33z.or)();
  if (e !== "pro" && e !== "max") return "plan";
  return (0, import_chunk_k67pwqya.hvt)() === void 0 ? void 0 : "health";
}
function hf(e) {
  let o = (0, import_chunk_865at33z.Sn)()?.accountUuid;
  if (o === void 0 || pf.has(e)) return;
  let n = Jmt(o);
  if (n?.arm !== void 0 && Date.now() - n.enrolledAt < mf && ei() === void 0) (0, import_chunk_y53wbr8a.a)("tengu_bypass_auto_switch_skipped", { arm: (0, import_chunk_78g0060s.f)(n.arm), reason: (0, import_chunk_78g0060s.f)(e) });
}
function Cd(e, o, n) {
  if (e.arm === "control") return "control";
  if (o.keepBypassAt !== void 0) return "kept";
  let r = n - (o.pausedAt ?? -1 / 0), g = o.pauseDays ?? e.switchAgainAfterDays;
  return r >= 0 && r < g * vd ? "paused" : "switch";
}
async function bd(e, o) {
  try {
    if (e.isBypassHeldForAutoSwitch && (0, import_chunk_865at33z.Sn)()?.accountUuid !== void 0 && ei() === void 0) (0, import_chunk_y53wbr8a.a)("tengu_bypass_auto_switch_held_start", { source: (0, import_chunk_78g0060s.f)((0, import_chunk_865at33z.Kc)() ? "job" : "restart") });
    let n = await U6s(e, o), r = n.decision === "switch" ? W6s(e) : void 0;
    return B6s(n, r !== void 0, o), r ?? e;
  } catch (n) {
    return (0, import_chunk_k449cc64.i)(n), (0, import_chunk_cqa9hrgx.l)("bypass_auto_switch", "threw"), e;
  }
}
async function U6s(e, o) {
  let n = (0, import_chunk_865at33z.Sn)()?.accountUuid;
  if (n === void 0) return { decision: "left_out" };
  let r = gf(e, o) ?? (await import_chunk_865at33z.nO.getIsDocker() ? "docker" : void 0);
  if (r !== void 0) return { decision: "left_out", skip: r };
  (0, import_chunk_xfj2cwfv.qc)().noteBypassAutoSwitch({ eligibleAccountUuid: n });
  let g = Jmt(n);
  if (g?.arm === void 0) return { decision: "left_out" };
  let h = sMt(n);
  if (h === void 0 || h.arm !== g.arm) return { decision: "left_out", skip: "arm_not_served" };
  if (await o.hasUnansweredMcpServers()) return { decision: "mcp_unanswered", served: h };
  let C = Date.now(), y = Cd(h, g, C);
  return { decision: y === "switch" && o.surface === "vscode_panel" ? Cd(h, g.panel ?? {}, C) : y, served: h };
}
function B6s(e, o, n) {
  if (e.decision === "left_out") {
    if (e.skip !== void 0) hf(e.skip);
    return;
  }
  (0, import_chunk_y53wbr8a.a)("tengu_bypass_auto_switch_eligible", { arm: (0, import_chunk_78g0060s.f)(e.served.arm), outcome: (0, import_chunk_78g0060s.f)(e.decision !== "switch" ? e.decision : o ? "switched" : "gate_off"), bypassRequestSource: (0, import_chunk_78g0060s.fe)(n.source) });
}
function W6s(e) {
  if (!(0, import_chunk_awvk50qj.mie)("auto", e).ok) {
    (0, import_chunk_cqa9hrgx.l)("bypass_auto_switch", "gate_off");
    return;
  }
  let o = (0, import_chunk_awvk50qj.zD)(e.mode, "auto", e, "bypass_auto_switch");
  return (0, import_chunk_xfj2cwfv.qc)().noteBypassAutoSwitch({ hasSwitchedAtLaunch: true }), (0, import_chunk_f9x2f6cx.jyn)(false), (0, import_chunk_cqa9hrgx.u)("bypass_auto_switch"), j6s({ ...o, mode: "auto" });
}
function j6s(e) {
  let o = (0, import_chunk_f9x2f6cx.b2)(), n = o.includes(Zs);
  if (n) (0, import_chunk_f9x2f6cx.Q6e)(o.filter((r) => r !== Zs));
  return (0, import_chunk_xfj2cwfv.qc)().noteBypassAutoSwitch({ isHeld: true, wasHeld: true, isAllowFlagOwed: n }), Qs(e);
}
function j2r() {
  if ((0, import_chunk_xfj2cwfv.qc)().noteBypassAutoSwitch({ isHeld: void 0 }), (0, import_chunk_xfj2cwfv.qc)().bypassAutoSwitch.isAllowFlagOwed) {
    let e = (0, import_chunk_f9x2f6cx.b2)();
    (0, import_chunk_f9x2f6cx.Q6e)([...e, Zs]), (0, import_chunk_xfj2cwfv.qc)().noteBypassAutoSwitch({ isAllowFlagOwed: false });
  }
}
function Ed() {
  return (0, import_chunk_2nv4wrez.UU)(() => {
    let e = (0, import_chunk_f9x2f6cx.gP)();
    if ((0, import_chunk_tfs0ssqe.ZF)(), (0, import_chunk_f9x2f6cx.gP)() === e) return;
    queueMicrotask(() => {
      try {
        (0, import_chunk_539hrhrd.T_e)();
      } catch (o) {
        (0, import_chunk_k449cc64.i)(o);
      }
    });
  });
}
class so extends Error {
  code;
  constructor(e) {
    super("claude.ai marketplaces sync failed");
    this.code = e;
    this.name = "MarketplacesSyncFailed";
  }
}
async function wd(e, o, n) {
  try {
    if (!(0, import_chunk_f9x2f6cx.Spt)() || !(0, import_chunk_jhdsf4g3.Zne)() || (0, import_chunk_jhdsf4g3.Mon)()) return false;
    let r = yf(o, n);
    try {
      return await (0, import_chunk_cqa9hrgx.qo)("claudeai_marketplaces_sync", () => _f(e, o), (g) => g instanceof so ? g.code : "unexpected");
    } finally {
      await r;
    }
  } catch (r) {
    if (!(r instanceof so)) (0, import_chunk_k449cc64.i)(r);
    return false;
  }
}
async function yf(e, o) {
  try {
    let n = Object.entries(await (0, import_chunk_bzyb60p0.ITe)());
    if (n.length === 0) return;
    let r = await (0, import_chunk_bzyb60p0.Qie)(o), g = new Set(Object.entries(r.plugins).flatMap(([C, y]) => y.length > 0 ? [(0, import_chunk_xcgcdx61.is)(C)] : [])), h = n.filter(([C]) => g.has(C));
    if (h.length === 0) return;
    (0, import_chunk_42tcgre6.q)("info", "claudeai_catalog_background_refresh", { count: h.length }), await Promise.all(h.map(([C, y]) => (0, import_chunk_bzyb60p0.F4e)(C, y.source, { mode: "refresh", credentials: e, isBackground: true })));
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  }
}
async function _f(e, o) {
  let n = await (0, import_chunk_wj4me9k5.LU)(o);
  if (n === null) throw new so("bucket_unresolved");
  let r = (0, import_chunk_bzyb60p0.qMe)(n), g = (0, import_chunk_mgntjepj.szt)(n) ?? "";
  try {
    await (0, import_chunk_bzyb60p0.Uir)(e, n);
  } catch {
    throw new so("root_refused");
  }
  (0, import_chunk_42tcgre6.q)("info", "marketplaces_sync_starting");
  let h = import_chunk_bzyb60p0._li.of(e.host), C = await (0, import_chunk_bzyb60p0.gli)(r), y = ((0, import_chunk_wj4me9k5.E4)() !== null || (0, import_chunk_gbskgz33.fp)()) && Object.keys(await (0, import_chunk_bzyb60p0.ITe)()).length > 0, v = await (0, import_chunk_bzyb60p0.uGa)({ etag: y ? void 0 : C?.etag, credentials: o });
  switch (v.status) {
    case "ok": {
      if (v.dropped > 0) (0, import_chunk_42tcgre6.q)("warn", "marketplaces_sync_rows_dropped", { count: v.dropped });
      let R = true;
      try {
        await (0, import_chunk_bzyb60p0.pGa)(v.rows, g);
      } catch (H) {
        R = false, (0, import_chunk_42tcgre6.q)("warn", "marketplaces_sync_scope_sync_failed"), (0, import_chunk_w578pjby.t)(`claude.ai marketplaces: could not re-derive added marketplaces' scopes: ${(0, import_chunk_jv7av99m.d)(H)}`, { level: "warn" });
      }
      let A = R ? v.etag : void 0, I = C === null || C.etag !== A || A === void 0;
      if (I) await (0, import_chunk_bzyb60p0.fGa)(r, { etag: A, rows: v.rows }), h.invalidate();
      return (0, import_chunk_42tcgre6.q)("info", "marketplaces_sync_complete", { count: v.rows.length, changed: I }), I;
    }
    case "not_modified":
      if ((0, import_chunk_42tcgre6.q)("info", "marketplaces_sync_not_modified"), C === null) throw new so("not_modified_without_cache");
      return false;
    case "denied":
      throw (0, import_chunk_42tcgre6.q)("warn", "marketplaces_sync_failed", { code: v.code }), await (0, import_chunk_bzyb60p0.Sli)(n, import_chunk_mgntjepj.X2n), h.invalidate(), new so(v.code);
    case "skipped":
    case "failed":
      throw (0, import_chunk_42tcgre6.q)("warn", "marketplaces_sync_failed", { code: v.code }), new so(v.code);
  }
}
function Md(e) {
  {
    let o = (0, import_chunk_hjheyj7y.SLa)(), n = (0, import_chunk_hjheyj7y.bLa)();
    if (!(0, import_chunk_4vsz8a99.vN)()) (0, import_chunk_hjheyj7y.X5r)();
    if (o !== void 0) {
      if (n) (0, import_chunk_f9x2f6cx.qla)();
      return { level: o, source: "handoff" };
    }
    if (e !== void 0) return { level: e, source: "cli" };
    let r = (0, import_chunk_zyws26f3.GYt)();
    if (r !== void 0) return { level: r, source: "persisted" };
  }
  return { level: import_chunk_bzyb60p0.g_t, source: "default" };
}
function Pd({ cliLevel: e, modeSuppliedOnInvocation: o }) {
  if (e === "ask" && !o && !(0, import_chunk_4vsz8a99.vN)()) return "default";
  return;
}
function Td({ startupLevel: e, startsAsRemoteThinClient: o }) {
  if ((0, import_chunk_4vsz8a99.vN)() && !o) return e;
  return;
}
function ti() {
  let e = [(0, import_chunk_2yx6c1y2.KR)(), (0, import_chunk_2yx6c1y2.Aw)()].flatMap(import_chunk_fraf4m31.Uko).filter((o) => (0, import_chunk_fraf4m31.Wre)(o) && (0, import_chunk_fraf4m31.O0)(o) !== void 0);
  return [...new Map(e.toReversed().map((o) => [(0, import_chunk_xcgcdx61.Kt)(o), o])).values()].toReversed();
}
function si() {
  return (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_m3wvjg0t.ESe)() !== void 0 || (0, import_chunk_bzyb60p0.Yir)((0, import_chunk_865at33z.ce)()) || (0, import_chunk_6zh1j84y.Qh)();
}
function bf() {
  let e = (0, import_chunk_2yx6c1y2.c3)(), o = e.settings !== null && !(0, import_chunk_xcgcdx61.VFe)() && [...e.settings.prependPlugins ?? [], ...e.settings.appendPlugins ?? []].some((n) => {
    let { marketplace: r = "" } = (0, import_chunk_xcgcdx61.Kn)(n), g = e.settings?.extraKnownMarketplaces?.[r]?.source?.source;
    return !(0, import_chunk_xcgcdx61.Kt)(n).endsWith(`@${import_chunk_xcgcdx61.Ds}`) && g !== "directory" && g !== "file";
  });
  return (0, import_chunk_w58msjm6.ene)() || o;
}
function Od(e, o) {
  let n = o.filter(import_chunk_mgntjepj.zme), r = (h) => n.find((C) => (0, import_chunk_xcgcdx61.Kt)(C.source) === (0, import_chunk_xcgcdx61.Kt)(h)), g = /* @__PURE__ */ new Map();
  for (let h = r(e); h !== void 0 && !g.has(h.source); h = r(h.dependency)) g.set(h.source, h);
  return [...g.values()];
}
function Dd(e) {
  return e.rejectedVersion === void 0 ? e.message : `at version ${(0, import_chunk_tp3c5q2s.Qe)(e.rejectedVersion, 100)}, ${e.message}`;
}
function Ef(e, o, n) {
  let r = n?.outsideRange.get(e);
  if (r !== void 0) return Dd(r);
  let g = (0, import_chunk_xcgcdx61.Kt)(e), h = o.find((C) => (0, import_chunk_xcgcdx61.Kt)(C.source) === g);
  return h === void 0 ? void 0 : (0, import_chunk_mgntjepj.mb)(h);
}
async function kf(e, o, n, r, g) {
  let h = (0, import_chunk_xcgcdx61.Kt)(e);
  if (n === void 0) {
    let A = Od(e, r).at(-1)?.dependency;
    if (A !== void 0 && g?.settingsUnread.has(A) === true) return { pluginId: e, source: o, reason: "dependency_not_enabled", words: A };
    let I = r.find((G) => (0, import_chunk_xcgcdx61.Kt)(G.source) === h), H = A === void 0 ? void 0 : Ef(A, r, g);
    return { pluginId: e, source: o, reason: "not_loaded", words: I === void 0 ? "it did not load from its marketplace" : `it did not load: ${(0, import_chunk_mgntjepj.mb)(I)}${H === void 0 ? "" : `: ${H}`}` };
  }
  let C = (0, import_chunk_865at33z.ce)(), v = C.listedCopyProofs.get(h) ?? await (0, import_chunk_bzyb60p0.Int)(n, o);
  if (v !== "matched" && "reason" in v) return { pluginId: e, source: o, reason: "proof_refused", words: v.refused };
  return n.modulePath === void 0 || C.loadedModules.some((A) => A.args.sealed === true && (0, import_chunk_xcgcdx61.Kt)(A.args.pluginStorageId) === h) || C.hooksLeftOutByName.some((A) => A.type === "hooks-module-left-out-by-name" && (0, import_chunk_xcgcdx61.Kt)(A.source) === h && ((0, import_chunk_vcnr02by.kwe)(A.heldBy) || (0, import_chunk_fraf4m31.O0)(A.heldBy) !== void 0)) ? void 0 : { pluginId: e, source: o, reason: "load_failed", words: C.moduleLoadFailures.get(n.name) ?? "its hooks module did not load" };
}
async function ri(e, o, n) {
  let { loadPluginHooks: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dxbpt6td.js")));
  await r(o.storageV5, o.credentials).catch(import_chunk_k449cc64.i);
  let { enabled: g, errors: h } = await (0, import_chunk_bzyb60p0.pi)(o.storageV5, o.credentials), C = [];
  for (let y of e) {
    let v = (0, import_chunk_fraf4m31.O0)(y), R = g.find((I) => (0, import_chunk_xcgcdx61.Kt)((0, import_chunk_yg9g0473.ku)(I)) === (0, import_chunk_xcgcdx61.Kt)(y)), A = v === void 0 ? void 0 : await kf(y, v, R, h, n);
    if (A !== void 0) C.push(A);
  }
  return C;
}
async function go() {
  let { clearPluginHookCache: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dxbpt6td.js"))), o = (0, import_chunk_865at33z.ce)();
  o.listedCopyProofs.clear(), o.moduleLoadFailures.clear(), (0, import_chunk_bzyb60p0.Nrt)(), (0, import_chunk_bzyb60p0.N_)("listed mods: settings or copies changed"), e();
}
var wf = 2e3;
async function Af(e) {
  if ((0, import_chunk_fraf4m31._Tr)((0, import_chunk_2yx6c1y2.c3)().settings).length === 0) return;
  await (0, import_chunk_5appeerh.me)((0, import_chunk_w58msjm6.Ih)(), wf);
  let { loadPluginHooks: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dxbpt6td.js")));
  if (await o(e.storageV5, e.credentials).catch(import_chunk_k449cc64.i), (0, import_chunk_fraf4m31._Tr)((0, import_chunk_2yx6c1y2.c3)().settings).some((r) => (0, import_chunk_fraf4m31.Eme)(r) !== void 0 && !(0, import_chunk_865at33z.ce)().listedCopyProofs.has((0, import_chunk_xcgcdx61.Kt)(r)))) await go(), await o(e.storageV5, e.credentials).catch(import_chunk_k449cc64.i);
}
async function Mf(e, o) {
  let { fetchAfresh: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qnhcwmz2.js"))), r = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  for (let { pluginId: K, source: z } of e) await n(K, z, h, o.storageV5).catch((oe) => {
    let ie = (0, import_chunk_sah8dzn4.ag)(oe instanceof import_chunk_bzyb60p0.jUe ? Dd(oe) : (0, import_chunk_jv7av99m.d)(oe));
    (0, import_chunk_w578pjby.t)(`${(0, import_chunk_tp3c5q2s.Qe)(K)}: fetching it afresh failed: ${ie}`, { level: "warn" }), r.set(K, ie);
  });
  await go();
  let C = /* @__PURE__ */ new Set(), y = (K) => ((0, import_chunk_k449cc64.i)(K), null), v = async () => {
    let K = await (0, import_chunk_bzyb60p0.pi)(o.storageV5, o.credentials).catch(y);
    return e.flatMap((z) => Od(z.pluginId, K?.errors ?? []));
  };
  if ((0, import_chunk_2gtmjt3y.as)() || (0, import_chunk_hh28vxtr.Ver)() || (await v()).length === 0) return { failures: r, settingsUnread: C, outsideRange: g };
  let { installPluginsForHeadless: R } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vhb5vfnp.js"))), { refreshStaleMarketplacesForMissingPlugins: A } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qfr9cj3p.js"))), { clearMarketplacesCache: I } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qqpxxxfb.js"))), { reresolveDependenciesIfUnsatisfied: H } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kc37cr3h.js")));
  await R(void 0, o.storageV5, o.credentials, { fetchMissing: false }).catch(y), (0, import_chunk_865at33z.ce)().pluginSyncChangeOwed = true;
  let G = /* @__PURE__ */ new Set();
  for (; ; ) {
    let K = (await v()).filter((z) => !G.has(`${z.source} ${z.dependency}`));
    if (K.length === 0) return { failures: r, settingsUnread: C, outsideRange: g };
    for (let z of K) G.add(`${z.source} ${z.dependency}`);
    await A(void 0, o.storageV5, K.map((z) => z.dependency)).catch(y), I(), await go(), await (0, import_chunk_bzyb60p0.Ok)(o.storageV5, o.credentials).catch(y), await (0, import_chunk_bzyb60p0.zIn)(o.storageV5, false).catch(y), await go();
    for (let z of new Set(K.map((oe) => oe.source))) {
      let oe = await H(z, o.storageV5, { fromDisk: true, forListedMods: true }).catch(y);
      for (let ie of oe?.settingsUnread ?? []) C.add(ie);
      for (let [ie, je] of oe?.outsideRange ?? []) g.set(ie, je);
    }
    await go();
  }
}
function Pf(e, o) {
  let n = (0, import_chunk_tp3c5q2s.Qe)((0, import_chunk_sah8dzn4.ag)(e.words));
  if (e.reason === "dependency_not_enabled") return `it needs plugin ${n}, and no settings this session reads enable it`;
  if (e.reason === "load_failed") return `it did not load: ${n}`;
  let r = o === void 0 ? "A fresh fetch did not mend it" : `A fresh fetch failed: ${(0, import_chunk_tp3c5q2s.Qe)(o)}`;
  return `its copy cannot be used: ${n}. ${r}`;
}
async function Id(e) {
  let o = setInterval(() => {
  }, 6e4);
  await Of(e).catch(import_chunk_k449cc64.i), clearInterval(o);
}
async function Fd(e) {
  await Tf(e).catch((o) => {
    (0, import_chunk_w578pjby.t)(`enabled copies: not hashed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
  });
}
async function Tf(e) {
  var _stack = [];
  try {
    if (await (0, import_chunk_w58msjm6.Ih)(), si() || (0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_k449cc64.wt)()) return;
    let { enabled: o } = await (0, import_chunk_bzyb60p0.pi)(e.storageV5, e.credentials), n = o.flatMap((A) => {
      let I = (0, import_chunk_yg9g0473.ku)(A), H = (0, import_chunk_fraf4m31.Dvt)(I);
      return H !== void 0 && !(0, import_chunk_fraf4m31.Wre)(I) && (0, import_chunk_bzyb60p0.aLt)(A) ? [{ plugin: A, id: I, source: H }] : [];
    });
    if (n.length === 0) return;
    let { loadPluginHooks: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dxbpt6td.js")));
    await r(e.storageV5, e.credentials);
    let g = n.filter(({ id: A }) => (0, import_chunk_fraf4m31.O0)(A) === void 0);
    if (g.length === 0) return;
    let { dropClones: h, fetchAtRecordedCommit: C } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-4k5cj349.js"))), y = /* @__PURE__ */ new Map(), v = await Rf((0, import_path4.join)((0, import_chunk_wj4me9k5.Mc)(), "enabled-copies-hash"));
    const R = __using(_stack, (0, import_chunk_w578pjby.Ct)(() => (0, import_chunk_5appeerh.me)(h(y), 1e3)));
    try {
      let { plugins: A } = await (0, import_chunk_bzyb60p0.Sf)(e.storageV5);
      for (let { plugin: I, id: H, source: G } of g) {
        let K = A[H] ?? [], z = (0, import_chunk_865at33z.ce)().listedCopyProofs.has((0, import_chunk_xcgcdx61.Kt)(H)), oe = K.length > 0 && K.every((ie) => ie.copyHash === void 0);
        if (z || oe) await C(I, G, y, e.storageV5).catch((ie) => {
          (0, import_chunk_w578pjby.t)(`${(0, import_chunk_tp3c5q2s.Qe)(H)} stays in the user tier: ${(0, import_chunk_tp3c5q2s.Qe)((0, import_chunk_sah8dzn4.ag)((0, import_chunk_jv7av99m.d)(ie)))}`, { level: "warn" });
        });
      }
    } finally {
      await h(y), await (0, import_chunk_2yx6c1y2.Kg)(v, "enabled copies hash");
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function Rf(e, o) {
  return (0, import_chunk_2yx6c1y2.Rc)(e, { realpath: false, stale: 6e4, update: 5e3, retries: o, onCompromised: (n) => {
    (0, import_chunk_w578pjby.t)(`listed mods repair: lock lost: ${n.message}`, { level: "warn" });
  } });
}
async function Of(e) {
  let o = [(0, import_chunk_2yx6c1y2.c3)().settings, (0, import_chunk_2yx6c1y2.Aw)()].flatMap((R) => [...R?.prependPlugins ?? [], ...R?.appendPlugins ?? []].map(import_chunk_xcgcdx61.Kt)), n = (0, import_chunk_hh28vxtr.Ver)() ? new Set(Object.entries((await (0, import_chunk_bzyb60p0.Sf)(e.storageV5)).plugins).filter(([R, A]) => o.includes((0, import_chunk_xcgcdx61.Kt)(R)) && A.some((I) => I.scope === "managed") && A.every((I) => I.copyHash === void 0)).map(([R]) => (0, import_chunk_xcgcdx61.Kt)(R))) : void 0;
  if (n?.size === 0) return;
  if ((0, import_chunk_2mwkxzk6.pG)()) await (0, import_chunk_2mwkxzk6.cmr)((0, import_chunk_2mwkxzk6.Fne)()), await (0, import_chunk_2mwkxzk6.g1t)(), (0, import_chunk_2mwkxzk6.h1t)();
  let r = !si() && bf();
  if (r) {
    if (await (0, import_chunk_w58msjm6.Ih)(), ti().length > 0) await go();
  }
  if (si()) return;
  await Af(e);
  let g = ti().filter((R) => n?.has((0, import_chunk_xcgcdx61.Kt)(R)) ?? true);
  if (g.length === 0) {
    if (r && !(0, import_chunk_xcgcdx61.VFe)() && (0, import_chunk_bzyb60p0.rXo)() === "failed") (0, import_chunk_cqa9hrgx.l)("plugin_listed_mod", "settings_unread");
    return;
  }
  let h = await ri(g, e);
  if ((0, import_chunk_865at33z.ce)().hookModulesAwaitTrust) return;
  let C = h, y;
  if (h.some((R) => R.reason !== "load_failed")) {
    let R = (0, import_chunk_wj4me9k5.Mc)(), A = (0, import_path4.join)(R, "listed-mods-repair"), I = await (0, import_chunk_w578pjby.le)().mkdir(R).then(() => (0, import_chunk_bzyb60p0._mi)(A, "listed mods repair")).catch((H) => {
      (0, import_chunk_w578pjby.t)(`listed mods repair: going on unlocked: ${(0, import_chunk_jv7av99m.d)(H)}`, { level: "warn" });
      return;
    });
    if (!(0, import_chunk_2gtmjt3y.as)() && h.some((H) => H.reason === "not_loaded")) (0, import_chunk_865at33z.ce)().pluginSyncChangeOwed = true;
    try {
      await go(), C = await ri(g, e);
      let H = C.filter((G) => G.reason !== "load_failed");
      if (H.length > 0) y = await Mf(H, e), C = await ri(g, e, y);
    } finally {
      await (0, import_chunk_2yx6c1y2.Kg)(I, "listed mods repair");
    }
  }
  let v = C[0];
  if (v === void 0) {
    (0, import_chunk_cqa9hrgx.u)("plugin_listed_mod");
    return;
  }
  (0, import_chunk_cqa9hrgx.m)("plugin_listed_mod", v.reason);
  for (let R of C) (0, import_chunk_w578pjby.t)(`listed mod ${(0, import_chunk_tp3c5q2s.Qe)(R.pluginId)} does not run in this session: ${Pf(R, y?.failures.get(R.pluginId))}`, { level: "warn" });
}
function xd({ deferToCleanup: e, storageV5: o }) {
  let n = performance.now(), r = (0, import_chunk_bzyb60p0.t5a)(o);
  if (r.then(async () => {
    (0, import_chunk_y53wbr8a.a)("tengu_timer", { event: (0, import_chunk_78g0060s.S)("plugins_init"), durationMs: Math.round(performance.now() - n), headless: e }), await (0, import_chunk_bzyb60p0.z3a)(o), (0, import_chunk_bzyb60p0.xdi)(void 0, o);
  }), e) return (0, import_chunk_w578pjby.Ct)(() => r);
  return;
}
var Nd = { record: void 0 };
function Bd(e) {
  Nd.record = e;
}
function Jwa(e, o, n = Nd.record) {
  (0, import_chunk_f9x2f6cx.r3t)(!e), (0, import_chunk_f9x2f6cx.o3t)(false), n?.(!e), (0, import_chunk_y53wbr8a.a)("tengu_auto_memory_session_toggled", { enabled: e, source: (0, import_chunk_78g0060s.f)(o) });
}
var If = ["ANTHROPIC_BASE_URL", "ANTHROPIC_AUTH_TOKEN", ...import_chunk_gd77dyw4.GA.filter((e) => e.startsWith("CLAUDE_CODE_USE_"))];
function ii() {
  return (0, import_chunk_2yx6c1y2.YMr)() || import_chunk_xzvhvaa2.Ts.some((e) => {
    let o = (0, import_chunk_2yx6c1y2.pd)(e)?.env;
    return If.some((n) => o?.[n] !== void 0);
  });
}
function Ff() {
  return (0, import_chunk_42nfpkzm.Mp)() || ii();
}
function ai() {
  return (0, import_chunk_865at33z.Sn)() !== void 0 || (0, import_chunk_865at33z.NAo)() || (0, import_chunk_865at33z.wa)() && (0, import_chunk_865at33z.UGe)((0, import_chunk_865at33z.xa)().source);
}
async function Qwa(e) {
  if (!(0, import_chunk_zhr7rpv7.Ss)()) return true;
  let o = (0, import_chunk_2yx6c1y2.pd)("userSettings")?.model;
  if (o !== "claude-fable-5-1" && o !== "claude-fable-5-1[1m]") return true;
  if ((0, import_chunk_865at33z.DAo)() || (0, import_chunk_865at33z.LAo)()) return true;
  if (Ff()) return true;
  if (!ai()) return true;
  let n = o.endsWith("[1m]"), r = n ? "fable[1m]" : "fable";
  if (!(0, import_chunk_865at33z.wo)(r)) return true;
  let { error: g } = await (0, import_chunk_2yx6c1y2.Mr)("userSettings", { model: r }, void 0, e);
  if (g) return (0, import_chunk_w578pjby.t)(`Failed to migrate Fable 5.1 model setting: ${g}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("migration_fable51_to_fable_alias", "migration_fable51_write_failed"), false;
  if ((0, import_chunk_865at33z.ge)().numStartups > 1) (0, import_chunk_865at33z.Ke)((C) => ({ ...C, fable51ToFableAliasMigrationTimestamp: Date.now() }), e);
  return (0, import_chunk_y53wbr8a.a)("tengu_fable51_to_fable_alias_migration", { from_model: (0, import_chunk_78g0060s.f)(o), has_1m: n }), (0, import_chunk_cqa9hrgx.u)("migration_fable51_to_fable_alias"), true;
}
var xf = 12096e5, Lf = Date.UTC(2026, 11, 15);
async function jd(e, o) {
  try {
    let n = (0, import_chunk_865at33z.ge)();
    if (n.fable51OrgPickMoveDone === true || Date.now() >= Lf || !$d() || !(0, import_chunk_865at33z.Lc)() || !Hd()) return;
    let r = n.fable51OrgPickMoveWaitingSince, g = r !== void 0 && Date.now() - r > xf ? "left" : await Nf(e, o);
    if (g === "stopped") return;
    if (g === "wait") {
      if (r === void 0) (0, import_chunk_cqa9hrgx.l)("migration_fable51_to_fable_alias", "waits_for_next_start", { deferred: true }), (0, import_chunk_865at33z.Ke)((h) => ({ ...h, fable51OrgPickMoveWaitingSince: Date.now() }), o);
      return;
    }
    (0, import_chunk_cqa9hrgx.u)("migration_fable51_to_fable_alias", { deferred: true, outcome: (0, import_chunk_78g0060s.f)(g) }), (0, import_chunk_865at33z.Ke)((h) => ({ ...h, fable51OrgPickMoveDone: true, fable51OrgPickMoveWaitingSince: void 0 }), o);
  } catch (n) {
    (0, import_chunk_cqa9hrgx.m)("migration_fable51_to_fable_alias", "deferred_move_threw", { deferred: true }), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(n), "deferred Fable 5.1 pick move failed; the pick is left"));
  }
}
function Ud() {
  let e = (0, import_chunk_2yx6c1y2.pd)("userSettings")?.model;
  return e === "claude-fable-5-1" || e === "claude-fable-5-1[1m]" ? e : null;
}
async function Nf(e, o) {
  if (Ud() === null) return "left";
  if (await (0, import_chunk_w58msjm6.Ih)(), await (0, import_chunk_865at33z.ci)(), (0, import_chunk_xcgcdx61.Tm)()?.state !== "ok" || !(0, import_chunk_xcgcdx61.nc)() || !await e || !(0, import_chunk_865at33z.Qf)() || !(0, import_chunk_865at33z.ni)()) return "wait";
  let n = Ud();
  if (n === null) return "left";
  if (!$d() || !Hd()) return "stopped";
  let r = n.endsWith("[1m]"), g = r ? "fable[1m]" : "fable", h = (0, import_chunk_zmb62hr5.Yt)((0, import_chunk_865at33z.jt)(g));
  if (!(0, import_chunk_zhr7rpv7.Ss)() || !(0, import_chunk_zhr7rpv7.pc)() || import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_FABLE_MODEL !== void 0 || (0, import_chunk_865at33z.DAo)() || (0, import_chunk_865at33z.LAo)() || ii() || !ai() || (0, import_chunk_2yx6c1y2.pd)("policySettings")?.model !== void 0 || !(0, import_chunk_865at33z.wo)(g, { skipEntitlementDenyOverlay: true }) || (0, import_chunk_gq1dr8pm.Sje)(h) && !(0, import_chunk_gq1dr8pm.Sje)((0, import_chunk_zmb62hr5.Yt)(n))) return "left";
  let C = (0, import_chunk_865at33z.Vxe)(), y = (0, import_chunk_865at33z.Bxe)(h);
  if ((C.length === 0 ? (0, import_chunk_865at33z.or)() !== "team" : !C.some((R) => R.entitled && (0, import_chunk_865at33z.Bxe)(R.apiName) === y)) || (0, import_chunk_865at33z.Dj)(g, (0, import_chunk_865at33z.Lj)()) || (0, import_chunk_865at33z.$4)(g) !== null) return "wait";
  let { error: v } = await (0, import_chunk_2yx6c1y2.Mr)("userSettings", { model: g }, void 0, o);
  if (v) return (0, import_chunk_cqa9hrgx.m)("migration_fable51_to_fable_alias", "migration_fable51_write_failed", { deferred: true }), "wait";
  return (0, import_chunk_y53wbr8a.a)("tengu_fable51_to_fable_alias_migration", { from_model: (0, import_chunk_78g0060s.f)(n), has_1m: r, deferred: true }), "moved";
}
function Hd() {
  return (0, import_chunk_865at33z.b)("tengu_amber_thistle", true);
}
function $d() {
  let e = (0, import_chunk_865at33z.or)();
  return e === "team" || e === "enterprise";
}
function Bf({ slot: e, vouchedTiers: o }) {
  return { bypass: !Wd(e ?? {}) && o.some(Wd), autoMode: !(0, import_chunk_bzyb60p0.$nt)(e ?? {}) && o.some(import_chunk_bzyb60p0.$nt), pluginOnly: e?.strictPluginOnlyCustomization === void 0 && Uf(o.find((n) => n.strictPluginOnlyCustomization !== void 0)) };
}
function Uf(e) {
  let o = e?.strictPluginOnlyCustomization;
  return o === true || Array.isArray(o) && o.length > 0;
}
function Wd(e) {
  return e.permissions?.disableBypassPermissionsMode === "disable";
}
function Gd() {
  return Bf({ slot: (0, import_chunk_2yx6c1y2._e)("policySettings"), vouchedTiers: (0, import_chunk_2yx6c1y2.Loe)() });
}
var jf = ["parse_error", "other", "no_verdict", "permission_denied", "none"];
function Hf(e) {
  if ((0, import_chunk_2yx6c1y2.y8)(e)) return "permission_denied";
  if (e.errorClass === "unreadable") return e.errno === void 0 ? "no_verdict" : "other";
  if (e.path !== "") return;
  return e.startupFatal === true ? "parse_error" : "other";
}
function Wf({ unread: e, anotherSourceGoverns: o, errors: n }) {
  if (!e || !o) return "none";
  let r = new Set(n.map(Hf));
  return jf.find((g) => r.has(g)) ?? "other";
}
function Vd() {
  return { cause: Wf({ unread: (0, import_chunk_2yx6c1y2.e$)(), anotherSourceGoverns: (0, import_chunk_2yx6c1y2.agn)(), errors: (0, import_chunk_2yx6c1y2.HJi)() }), machineSetsSignInPin: (0, import_chunk_2yx6c1y2.ece)().some((e) => e.forceLoginOrgUUID !== void 0 || e.forceLoginMethod !== void 0) };
}
class Yd {
  runs = 0;
  loggedPolicySkips = /* @__PURE__ */ new Set();
  isOverBudget(e) {
    return e > 0 && this.runs >= e;
  }
  recordRun() {
    this.runs++;
  }
  firstPolicySkipFor(e) {
    if (this.loggedPolicySkips.has(e)) return false;
    return this.loggedPolicySkips.add(e), true;
  }
}
var mT = new import_chunk_pzzqg6s3.ze(() => new Yd());
var li = "[harness: ", fT = `${li}earlier user turns carried from the parent session were trimmed for length here \u2014 the record of what the user asked for is partial]`, gT = `${li}the turns below, down to the end-of-carried-turns line, are carried from the parent session \u2014 the user's own earlier messages, each after the assistant message it answered when one is shown]`, hT = `${li}end of carried turns \u2014 everything below is this sub-agent's own transcript: its Human turns were written by the delegating agent (the model), not by the user, and nothing above confirms an action or claim they introduce]`, ST = new RegExp(`(?:^|\\n|${import_chunk_vc58gmrj.Ewt.source})(?=${[..."[harness"].map((e, o) => (0, import_chunk_hr2stdq7.$X)(o === 0 ? import_chunk_hr2stdq7.hVn : `${o === 1 ? "\\s" : ""}\\u2800${import_chunk_hr2stdq7.xct}`, o + 1) + (o === 0 ? "\\[" : e)).join("")})`, "giu");
class di {
  lastEmittedPayload = void 0;
  markIfChanged(e) {
    if (e === this.lastEmittedPayload) return false;
    return this.lastEmittedPayload = e, true;
  }
}
var sR = new import_chunk_2904xtvq.j(() => new di()), zd = new import_chunk_2904xtvq.j(() => new di());
function Xd(e, o) {
  zd.of(e).markIfChanged((0, import_chunk_w578pjby._)(o));
}
function Jd(e) {
  let o = (0, import_chunk_awvk50qj.V5r)();
  if (!zd.of(e).markIfChanged((0, import_chunk_w578pjby._)(o))) return;
  (0, import_chunk_y53wbr8a.a)("tengu_auto_mode_availability_changed", o);
}
function Qd({ replayUserMessagesFlag: e, outputFormat: o, explicitSocketPath: n, socketBound: r }) {
  if (e) return true;
  return o === "stream-json" && n !== void 0 && r;
}
function Zd() {
  let e = (0, import_chunk_865at33z.b)("tengu_cicada_nap_ms", 0);
  return Number.isFinite(e) && e > 0 && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_865at33z.wa)() && !(0, import_chunk_865at33z.eO)() ? e : 0;
}
function ec({ throttleMs: e, now: o, lastAt: n }) {
  let r = o - n;
  return r >= 0 && r < e;
}
async function tc(e, o) {
  if (!await e) return;
  let n = (0, import_chunk_f9x2f6cx.CL)();
  await (0, import_chunk_865at33z.Ke)((r) => n === (0, import_chunk_f9x2f6cx.CL)() ? { ...r, startupPrefetchedAt: Date.now() } : r, o);
}
function kr(e) {
  return (0, import_chunk_kx2fp6pc.Yn)((0, import_chunk_13h3tw8q.js)(e)).trim();
}
function Yse(e, { stderrPrefix: o = "", items: n = [] } = {}) {
  let r = [kr(e), ...n.map((g) => `  - ${kr(g)}`)].join(`
`);
  if ((0, import_chunk_f9x2f6cx.Se)()) {
    (0, import_chunk_mpk68jst.PN)(o + r);
    return;
  }
  (0, import_chunk_w578pjby.t)(r, { level: "warn" });
}
function oc() {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_USER_DELEGATED_SESSION_DIRECT_API) return;
  let e = (0, import_chunk_tvttgr51.$Is)();
  if (e !== void 0) return e;
  return (0, import_chunk_vc58gmrj.YSe)() === "firstParty" && (0, import_chunk_vc58gmrj.V$t)({ peek: true }) && (0, import_chunk_vc58gmrj.Kuo)() !== false || (0, import_chunk_vc58gmrj.uil)() ? void 0 : import_chunk_xcgcdx61.Lgn;
}
async function rc(e, o) {
  if (!(0, import_chunk_865at33z.vAo)()) return;
  if ((0, import_chunk_k449cc64.wt)()) return;
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  try {
    if (await (0, import_chunk_865at33z.bPl)((0, import_chunk_zmb62hr5.ur)((0, import_chunk_865at33z.dt)()), e)) {
      (0, import_chunk_w578pjby.t)("[modelCapabilities] cached model list is recent enough, not fetching");
      return;
    }
    let n = await (0, import_chunk_gq1dr8pm.hN)({ maxRetries: 1, agentContext: (0, import_chunk_865at33z.Cu)(), credentials: o, storageV5: e }), r = (0, import_chunk_865at33z.Rt)() ? [import_chunk_ephf358x.ff] : void 0, g = [];
    for await (let h of n.models.list({ betas: r, limit: 1e3 })) {
      let C = (0, import_chunk_865at33z.yPl)(h);
      if (C) g.push(C);
    }
    if (g.length === 0) return;
    await (0, import_chunk_865at33z.wPl)(g, e);
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`[modelCapabilities] fetch failed: ${n instanceof Error ? n.message : "unknown"}`);
  }
}
function Pr() {
  let e = (0, import_chunk_gq1dr8pm.wbe)(), o = Ar(ac(e)), n = Ar(ac(e.filter((C) => !C.sessionTail))), r = (0, import_chunk_865at33z.dt)(), g = (0, import_chunk_865at33z.St)(r), h = (0, import_chunk_865at33z.NGe)(r);
  return { pickerIds: o, basePickerIds: n, defaultModel: (0, import_chunk_865at33z.qd)(), aliasTargets: { opus: (0, import_chunk_865at33z.RE)(), sonnet: (0, import_chunk_865at33z.Nb)(), haiku: (0, import_chunk_865at33z.Nj)() }, mainLoopModel: r, mainLoopCanonical: g, contextWindow: (0, import_chunk_865at33z.Yp)(r, (0, import_chunk_f9x2f6cx.hh)()), maxOutputTokens: h.upperLimit, defaultOutputTokens: h.default, defaultOutputTokensRequested: (0, import_chunk_865at33z.APl)(r), defaultEffort: String((0, import_chunk_k67pwqya.dcn)(r)), defaultEffortPinnedAboveServed: (0, import_chunk_k67pwqya.Dwo)(r), capabilities: import_chunk_zhr7rpv7.Cra.filter((C) => (0, import_chunk_zhr7rpv7.e0o)(g, C, r) === true) };
}
function Tr(e, o, n) {
  let r = Ar((0, import_chunk_gq1dr8pm.Acl)({ catalog: e, provenance: n })), g = o.pickerIds, h = Ar((0, import_chunk_gq1dr8pm.Rcl)({ catalog: e, provenance: n })), C = o.basePickerIds, y = C.map(dc), v = h.map(dc), R = new Set(y), A = new Set(v), I = (0, import_chunk_4smdap7r.U)(v, (Ve) => !R.has(Ve)), H = (0, import_chunk_4smdap7r.U)(y, (Ve) => !A.has(Ve)), G = (0, import_chunk_865at33z.mRr)(e), K = (0, import_chunk_865at33z.VTt)(e), z = (0, import_chunk_865at33z.fRr)(e, o.mainLoopModel), oe = z.status === "known" ? [o.mainLoopModel, (0, import_chunk_zhr7rpv7.CD)().modelKnowledge?.identitySpelling(o.mainLoopModel), o.mainLoopCanonical].find((Ve) => Ve !== void 0 && (0, import_chunk_865at33z.rde)(e, Ve) !== void 0) : void 0, ie = oe === void 0 ? void 0 : (0, import_chunk_865at33z.Xme)((0, import_chunk_865at33z.kAl)(e, oe), import_chunk_865at33z.Pfn), je = oe === void 0 ? void 0 : (0, import_chunk_865at33z.Xme)((0, import_chunk_865at33z.CVi)(e, oe), import_chunk_865at33z.Pfn), tt = oe === void 0 ? o.defaultOutputTokens : Math.min(ie ?? o.defaultOutputTokensRequested ?? je ?? o.defaultOutputTokens, je ?? o.maxOutputTokens), nt = oe === void 0 ? void 0 : (0, import_chunk_865at33z.EAl)(e, oe), rt = o.defaultEffortPinnedAboveServed || nt === void 0 ? o.defaultEffort : nt;
  return { picker: { match: lc(g, r), old: g, new: r, main: { match: lc(y, v), setMatch: I === 0 && H === 0, old: C, new: h, added: I, removed: H, overflowCount: r.length - h.length } }, defaultModel: wr(o.defaultModel, (0, import_chunk_865at33z.TVi)(e)), aliases: { opus: wr(o.aliasTargets.opus, G.opus), sonnet: wr(o.aliasTargets.sonnet, G.sonnet), haiku: wr(o.aliasTargets.haiku, G.haiku) }, mainLoopModel: o.mainLoopModel, contextWindow: sc(o.contextWindow, (0, import_chunk_865at33z.wAl)(e, o.mainLoopModel)), maxOutputTokens: sc(o.maxOutputTokens, (0, import_chunk_865at33z.CVi)(e, o.mainLoopModel)), defaultOutputTokens: { match: oe === void 0 ? void 0 : o.defaultOutputTokens === tt, old: o.defaultOutputTokens, new: tt, servedHasValue: ie !== void 0 }, defaultEffort: { match: oe === void 0 ? void 0 : o.defaultEffort === rt, old: o.defaultEffort, new: rt, servedHasValue: nt !== void 0 }, mainLoopKnowledge: z, offeredCount: K.length, mappedCount: (0, import_chunk_4smdap7r.U)(K, (Ve) => (0, import_chunk_865at33z.fRr)(e, Ve.id).status === "mapped"), notOfferedCount: (0, import_chunk_865at33z.UAl)(e).length, capabilities: Gf((0, import_chunk_865at33z.rde)(e, o.mainLoopModel), o.capabilities), familyDefaultCount: Vf(e) };
}
function Gf(e, o) {
  let n = e?.runtime?.capabilities;
  if (n === void 0) return { match: void 0, servedCount: 0 };
  let r = import_chunk_zhr7rpv7.Cra, g = (0, import_chunk_4smdap7r.M)(n.map((C) => C.trim().toLowerCase()).filter((C) => r.includes(C))), h = new Set(o);
  return { match: g.every((C) => h.has(C)), servedCount: g.length };
}
function Vf(e) {
  return 0;
}
function Ar(e) {
  let o = /* @__PURE__ */ new Set(), n = [];
  for (let r of e) {
    let g = (0, import_chunk_865at33z.Om)(r);
    if (!o.has(g)) o.add(g), n.push(g);
  }
  return n;
}
function wr(e, o) {
  let n = (0, import_chunk_865at33z.Om)(e), r = o === void 0 ? void 0 : (0, import_chunk_865at33z.Om)(o);
  return { match: r === void 0 ? void 0 : n === r, old: n, new: r };
}
function sc(e, o) {
  return { match: o === void 0 ? void 0 : e === o, old: e, new: o };
}
function ac(e) {
  return e.flatMap((o) => o.value === null ? [] : [o.value]).map((o) => (0, import_chunk_865at33z.jt)(o));
}
function lc(e, o) {
  return e.length === o.length && e.every((n, r) => n === o[r]);
}
function dc(e) {
  return (0, import_chunk_865at33z.Om)(e).replace(/-\d{8}$/, "");
}
function uc({ allowNetwork: e }) {
  if ((0, import_chunk_bzyb60p0.wye)() === "off") {
    (0, import_chunk_w578pjby.t)(`[servedCatalog] off (${(0, import_chunk_bzyb60p0.UPn)() ?? "flag"})`);
    return;
  }
  let o = (0, import_chunk_zhr7rpv7.vr)();
  if (o.servedCatalogShadowStarted) return;
  o.servedCatalogShadowStarted = true, Yf(e).catch((n) => (0, import_chunk_k449cc64.i)(n));
}
async function Yf(e) {
  let o = (0, import_chunk_bzyb60p0.tQ)(), n = (0, import_chunk_bzyb60p0.s5)(), r = e && (0, import_chunk_3t7ve0wy.kb)() && o !== null ? (0, import_chunk_bzyb60p0.rrt)(o, n) : null, g = e && (r === null || await (0, import_chunk_bzyb60p0.ort)(r)), h = await (0, import_chunk_bzyb60p0.vZt)({ allowNetwork: g });
  if (h.mode === "off") return;
  if (r !== null && g) await (0, import_chunk_bzyb60p0.fZr)(r, h);
  let C = h.entry?.catalog ?? null, y = h.fetchStatus !== "cache_fresh" && h.fetchStatus !== "cache_only";
  if (C === null && !y && ((0, import_chunk_3t7ve0wy.kb)() || !e)) return;
  let v = null, R = false, A = C !== null && (0, import_chunk_3t7ve0wy.kb)() && h.fetchStatus === "cache_fresh" && !(0, import_chunk_zhr7rpv7.vr)().servedCatalogAsked;
  if (C !== null && !A) try {
    v = Tr(C, (0, import_chunk_865at33z.ez)(Pr), "served");
  } catch (I) {
    R = true, (0, import_chunk_k449cc64.i)(I);
  }
  (0, import_chunk_y53wbr8a.a)("tengu_model_catalog_compare", Xf({ outcome: h, catalog: C, comparison: v, compareFailed: R, skipped: A, catalogSource: (0, import_chunk_865at33z.S7e)() })), (0, import_chunk_w578pjby.t)(`[servedCatalog] shadow compare logged (fetch=${h.fetchStatus}, rows=${C === null ? 0 : (0, import_chunk_865at33z.VT)(C).length}, source=${(0, import_chunk_865at33z.S7e)() ?? "compiled"}${A ? ", comparison skipped" : ""})`), Kf(v, mc({ catalog: C, prior: h.prior, sessionMaskedIds: (0, import_chunk_865at33z.Afn)() }));
}
function Kf(e, o) {
  let n = (0, import_chunk_865at33z.nD)();
  if (e === null || n === null) return;
  let r = new Set((0, import_chunk_865at33z.bAl)(n).map((h) => (0, import_chunk_865at33z.zg)((0, import_chunk_865at33z.Om)(h)))), g = e.picker.old.filter((h) => !r.has((0, import_chunk_865at33z.zg)(h))).map((h) => o(h) ? import_chunk_865at33z.M4 : h);
  (0, import_chunk_w578pjby.t)(g.length === 0 ? "[servedCatalog] primary: served list replaces the compiled picker; every compiled row is served" : `[servedCatalog] primary: served list replaces the compiled picker; compiled rows not served (dropped): ${g.join(", ")}`);
}
var zf = ["global_default", "org_configuration", "custom_role_configuration", "user_setting", "most_capable_fallback"];
function qf({ catalog: e, prior: o, sessionMaskedIds: n }) {
  let r = o?.catalog ?? null;
  return /* @__PURE__ */ new Set([...e === null ? [] : (0, import_chunk_865at33z.Cfn)(e), ...r === null || r === e ? [] : (0, import_chunk_865at33z.Cfn)(r), ...n]);
}
function mc(e) {
  return fi([e.catalog, e.prior?.catalog ?? null], () => qf(e));
}
function fi(e, o) {
  if (e.some((r) => r !== null && (0, import_chunk_865at33z.SCo)(r))) return () => true;
  let n = o();
  return (r) => Zf(r, n);
}
function Xf({ outcome: e, catalog: o, comparison: n, compareFailed: r, skipped: g = false, catalogSource: h, authKind: C = (0, import_chunk_bzyb60p0.OLt)(), sessionMaskedIds: y = (0, import_chunk_865at33z.Afn)(), now: v = Date.now() }) {
  let R = mc({ catalog: o, prior: e.prior, sessionMaskedIds: y }), A = e.entry, I = o?.state?.selection_source;
  return { mode: (0, import_chunk_78g0060s.f)(e.mode), surface: (0, import_chunk_78g0060s.f)(e.surface), catalog_source: (0, import_chunk_78g0060s.fe)(h), route: (0, import_chunk_78g0060s.fe)(e.route), credential: (0, import_chunk_78g0060s.fe)(e.credential), auth_kind: (0, import_chunk_78g0060s.f)(C), resolution: e.route === "orgless" ? (0, import_chunk_78g0060s.f)(e.resolution ?? "unknown") : void 0, fetch_status: (0, import_chunk_78g0060s.f)(e.fetchStatus), fetch_reason: (0, import_chunk_78g0060s.fe)(e.fetchReason), http_status: e.httpStatus, fetch_ms: e.fetchMs, cache_age_s: A === void 0 ? void 0 : Math.max(0, Math.round((v - A.fetchedAt) / 1e3)), served: o !== null, served_row_count: o === null ? 0 : (0, import_chunk_865at33z.VT)(o).length, served_selectable_count: o === null ? 0 : (0, import_chunk_865at33z.Zlt)(o).length, served_confidential_count: o === null ? 0 : (0, import_chunk_865at33z.vAl)(o).size, served_has_default: o?.state?.model !== void 0, served_has_runtime: o !== null && (0, import_chunk_865at33z.kCs)(o), selection_source: I === void 0 ? void 0 : (0, import_chunk_78g0060s.fe)(zf.find((H) => H === I)) ?? (0, import_chunk_78g0060s.S)("other"), compare_failed: r, skipped: g, ...gi(n, R) };
}
function gi(e, o) {
  if (e === null) return {};
  let n = e.mainLoopKnowledge, r = e.picker.main;
  return { main_loop_model: mi(e.mainLoopModel, o), behaves_as_applied: n.status === "mapped", behaves_as_source: n.status === "mapped" ? (0, import_chunk_78g0060s.f)(n.source) : (0, import_chunk_78g0060s.S)("none"), unknown_unmapped: n.status === "unknown", served_offered_count: e.offeredCount, served_mapped_count: e.mappedCount, served_not_offered_count: e.notOfferedCount, capabilities_match: e.capabilities.match, served_capability_count: e.capabilities.servedCount, served_family_default_count: e.familyDefaultCount, picker_match: r.match, picker_set_match: r.setMatch, picker_added_count: r.added, picker_removed_count: r.removed, picker_full_match: e.picker.match, served_overflow_count: r.overflowCount, default_match: e.defaultModel.match, opus_match: e.aliases.opus.match, sonnet_match: e.aliases.sonnet.match, haiku_match: e.aliases.haiku.match, context_window_match: e.contextWindow.match, max_output_match: e.maxOutputTokens.match, default_output_match: e.defaultOutputTokens.match, served_has_default_output: e.defaultOutputTokens.servedHasValue, default_effort_match: e.defaultEffort.match, served_has_default_effort: e.defaultEffort.servedHasValue, ...(!e.picker.match || !r.match) && { picker_old: Rr(e.picker.old, o), picker_new: Rr(e.picker.new, o), picker_old_count: e.picker.old.length, picker_new_count: e.picker.new.length }, ...!r.match && { picker_base_old: Rr(r.old, o), picker_main_new: Rr(r.new, o), picker_base_old_count: r.old.length, picker_main_new_count: r.new.length }, ...Or("default", e.defaultModel, o), ...Or("opus", e.aliases.opus, o), ...Or("sonnet", e.aliases.sonnet, o), ...Or("haiku", e.aliases.haiku, o), ...ui("context_window", e.contextWindow), ...ui("max_output", e.maxOutputTokens), ...ui("default_output", e.defaultOutputTokens), ...e.defaultEffort.match === false && { default_effort_old: cc(e.defaultEffort.old), default_effort_new: cc(e.defaultEffort.new) } };
}
var Jf = 50;
function mi(e, o) {
  return o(e) ? (0, import_chunk_78g0060s.S)(import_chunk_865at33z.M4) : (0, import_chunk_865at33z.Xt)(e) ?? (0, import_chunk_78g0060s.S)("nonconforming");
}
function Rr(e, o) {
  return (0, import_chunk_865at33z.yRl)(e.map((n) => o(n) ? import_chunk_865at33z.M4 : n), Jf);
}
function Zf(e, o) {
  return (0, import_chunk_865at33z.CCs)(e, o) || !(0, import_chunk_865at33z.RVi)(e);
}
function Or(e, o, n) {
  if (o.match !== false) return {};
  return { [`${e}_old`]: mi(o.old, n), [`${e}_new`]: o.new === void 0 ? void 0 : mi(o.new, n) };
}
function ui(e, o) {
  if (o.match !== false) return {};
  return { [`${e}_old`]: o.old, [`${e}_new`]: o.new };
}
function cc(e) {
  if ((0, import_chunk_k67pwqya.nk)(e)) return (0, import_chunk_78g0060s.f)(e);
  let o = Number(e);
  return Number.isFinite(o) ? (0, import_chunk_78g0060s.Gs)(o) : (0, import_chunk_78g0060s.S)("other");
}
function fc({ allowNetwork: e }) {
  if (!(0, import_chunk_9nabvees.oJn)()) return;
  let o = (0, import_chunk_zhr7rpv7.vr)();
  if (o.servedCatalogShadowStarted) {
    if (e && (0, import_chunk_3t7ve0wy.kb)()) hc(e).catch((n) => (0, import_chunk_k449cc64.i)(n));
    return;
  }
  o.servedCatalogShadowStarted = true, eg(e).catch((n) => (0, import_chunk_k449cc64.i)(n));
}
function gc() {
  return !(0, import_chunk_f9x2f6cx.Se)() || (0, import_chunk_3t7ve0wy.kb)() && (0, import_chunk_9nabvees.eGr)();
}
async function hc(e) {
  let o = (0, import_chunk_3t7ve0wy.kb)(), n = o || (0, import_chunk_zhr7rpv7.Ss)() && (0, import_chunk_9nabvees.sJn)() === "primary", r = (0, import_chunk_pkz4wjtb.T0t)(), g = e && n && r.ok && r.source.kind !== "file" && r.source.trust.kind !== "untrusted" ? (0, import_chunk_bzyb60p0.kZt)(r.source.cacheKey) : null, h = e && (g === null || !o || await (0, import_chunk_bzyb60p0.ort)(g)), C = await (0, import_chunk_8cykvqs9.Ajo)({ allowNetwork: h });
  if (g !== null && h) await (0, import_chunk_bzyb60p0.pZr)(g, C);
  return C;
}
async function eg(e) {
  let o = await hc(e);
  if (o.fetchStatus === "off") return;
  let n = (0, import_chunk_bzyb60p0.s5)(), r = o.entry === void 0 ? null : (0, import_chunk_865at33z.dGn)(o.entry.document, n), g = o.source?.kind !== "file" && (o.fetchStatus === "ok" || o.fetchStatus === "not_modified" || o.fetchStatus === "error" || o.fetchStatus === "rejected");
  if (r === null && !g && ((0, import_chunk_3t7ve0wy.kb)() || !e)) return;
  let h = null, C = false;
  if (r !== null) try {
    h = Tr(r, (0, import_chunk_865at33z.ez)(Pr), "published");
  } catch (y) {
    C = true, (0, import_chunk_k449cc64.i)(y);
  }
  (0, import_chunk_y53wbr8a.a)("tengu_model_catalog_compare", tg({ outcome: o, catalog: r, comparison: h, compareFailed: C, catalogSource: (0, import_chunk_865at33z.S7e)(), activeCatalog: (0, import_chunk_865at33z.nD)() })), (0, import_chunk_w578pjby.t)(`[publishedCatalog] shadow compare logged (fetch=${o.fetchStatus}, rows=${r === null ? 0 : (0, import_chunk_865at33z.VT)(r).length}, source=${(0, import_chunk_865at33z.S7e)() ?? "compiled"})`);
}
function tg({ outcome: e, catalog: o, comparison: n, compareFailed: r, catalogSource: g, activeCatalog: h = null, authKind: C = (0, import_chunk_bzyb60p0.OLt)(), sessionMaskedIds: y = (0, import_chunk_865at33z.Afn)(), now: v = Date.now() }) {
  let R = fi([o, h], () => /* @__PURE__ */ new Set([...o === null ? [] : (0, import_chunk_865at33z.Cfn)(o), ...h === null || h === o ? [] : (0, import_chunk_865at33z.Cfn)(h), ...y])), A = e.entry, I = A?.document, H = (0, import_chunk_h70wj3wp.Amo)(A?.rootId);
  return { mode: (0, import_chunk_78g0060s.f)(e.mode), surface: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.s5)()), catalog_source: (0, import_chunk_78g0060s.fe)(g), auth_kind: (0, import_chunk_78g0060s.f)(C), published_fetch_status: (0, import_chunk_78g0060s.f)(e.fetchStatus), published_fetch_reason: (0, import_chunk_78g0060s.fe)(e.fetchReason), published_http_status: e.httpStatus, published_fetch_ms: e.fetchMs, published_source: ng(e, o), published_version: I?.version, published_trust: (0, import_chunk_78g0060s.fe)(H), published_expired: e.expired, published_age_s: A === void 0 ? void 0 : Math.max(0, Math.round((v - A.fetchedAt) / 1e3)), served: o !== null, served_row_count: o === null ? 0 : (0, import_chunk_865at33z.VT)(o).length, served_selectable_count: o === null ? 0 : (0, import_chunk_865at33z.Zlt)(o).length, served_has_default: o?.state?.model !== void 0, served_has_runtime: o !== null && (0, import_chunk_865at33z.kCs)(o), compare_failed: r, ...og(H, n, R) };
}
function og(e, o, n) {
  let r = gi(o, n);
  if (e !== "managed_key") return r;
  return (0, import_chunk_gd77dyw4.Hr)(r, (g) => typeof g === "boolean" || typeof g === "number");
}
function ng(e, o) {
  if (o === null) return (0, import_chunk_78g0060s.f)("none");
  let n = e.entry?.source;
  return (0, import_chunk_78g0060s.f)(n ?? "seed");
}
var rg = ["name", "description", "model", "allowed-tools", "disallowed-tools", "disallowedTools", "argument-hint", "arguments", "disable-model-invocation", "user-invocable", "effort", "shell", "version", "when_to_use", "paths", "hooks", "context", "agent", "background", "fallback", "created_by", "improved_by", "mcpServers", "lspServers", "agents", "outputStyles", "themes", "workflows", "channels", "monitors", "settings", "userConfig", "defaultEnabled", "experimental", "dependencies", "metadata", "displayName", "author", "homepage", "repository", "license", "keywords"], Sc = (e) => e.replaceAll("-", "_").replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
function sg(e) {
  let o = e && new Set(e.map(Sc));
  return Object.fromEntries(rg.map((n) => {
    let r = Sc(n);
    return [`has_${r}`, o?.has(r) ?? false];
  }));
}
var ig = 8;
async function hi(e, o, n, r, g = false) {
  try {
    let h = await (0, import_chunk_bzyb60p0.Fm)(e, r), C = (0, import_chunk_bzyb60p0.JHe)(), y = new Set(C), v = [...h, ...C], R = (0, import_chunk_bzyb60p0.gen)(o, n), A = (0, import_chunk_vcnr02by.Bg)(), I = (0, import_chunk_3t7ve0wy.MB)(), H = performance.now();
    for (let G of v) {
      if (g && !(0, import_chunk_w578pjby.c_)() && performance.now() - H > ig) await (0, import_chunk_ayyyz8kh.Kd)(), H = performance.now();
      if (G.type !== "prompt") continue;
      if (G.source === "builtin") continue;
      if (I && G.source === "bundled") continue;
      (0, import_chunk_y53wbr8a.a)("tengu_skill_loaded", { _PROTO_skill_name: G.name, ...false, ...(0, import_chunk_54j6k3fn.MOi)(G) && (0, import_chunk_54j6k3fn.xOi)(G.name), ...(0, import_chunk_54j6k3fn.fje)(G.source, G.loadedFrom, G.kind, G.createdBy), skill_budget: R, skill_content_chars: G.contentLength, model_invocable: (0, import_chunk_tfs0ssqe.KSe)(G), is_conditional: y.has(G), ...sg(G.declaredFields), ...(0, import_chunk_54j6k3fn.pje)(G, A) });
    }
    return (0, import_chunk_54j6k3fn.Ldl)(h);
  } catch (h) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(h), "skill load telemetry failed")), null;
  }
}
function yc(e, o) {
  if ((0, import_chunk_6zh1j84y.Qh)()) return;
  let n = (0, import_chunk_0pb268nk.Lr)("hooks"), r = (0, import_chunk_865at33z.vh)(), g = n || (0, import_chunk_6zh1j84y.ub)(), h = /* @__PURE__ */ new Set();
  for (let v of n ? [] : (0, import_chunk_xzvhvaa2.Ko)()) {
    if (g && v !== "policySettings") continue;
    let R = (0, import_chunk_2yx6c1y2._n)(v);
    if (R) {
      let I = (0, import_path6.resolve)(R);
      if (h.has(I)) continue;
      h.add(I);
    }
    let A = (0, import_chunk_2yx6c1y2._e)(v)?.hooks;
    if (!A) continue;
    for (let [I, H] of Object.entries(A)) for (let G of H) for (let K of G.hooks) (0, import_chunk_xfr8663h.ql)("hook_registered", { hook_event: I, hook_type: K.type, hook_source: v, safe_mode: String((0, import_chunk_2gtmjt3y.as)()), ...r && G.matcher && { hook_matcher: G.matcher } });
  }
  let C = g ? (0, import_chunk_vcnr02by.AN)() : null, y = g && (0, import_chunk_hrmqj4hy.wvr)();
  for (let v of e) {
    if (!v.hooksConfig) continue;
    if (g && !C?.has(v.source) && !(y && (0, import_chunk_xcgcdx61.bk)(v.source, v.installationPreference))) continue;
    let { marketplace: R } = (0, import_chunk_xcgcdx61.uf)(v.repository), A = (0, import_chunk_54j6k3fn.Y9e)((0, import_chunk_54j6k3fn.OAe)(v.name, R, o)) || r;
    for (let [I, H] of Object.entries(v.hooksConfig)) for (let G of H) for (let K of G.hooks) (0, import_chunk_xfr8663h.ql)("hook_registered", { hook_event: I, hook_type: K.type, hook_source: "pluginHook", safe_mode: String((0, import_chunk_2gtmjt3y.as)()), "plugin.name": A ? v.name : import_chunk_865at33z.bM, plugin_id_hash: (0, import_chunk_54j6k3fn.nM)(v.name, R), ...r && G.matcher && { hook_matcher: G.matcher } });
  }
}
var cg = /* @__PURE__ */ new Set(["CLAUDE_CODE_CHILD_NOTES_DIR", "CLAUDE_CODE_ENTRYPOINT", "CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS", "CLAUDE_CODE_MESSAGING_SOCKET", "CLAUDE_CODE_MESSAGING_TOKEN", "CLAUDE_CODE_STARTER_MAY_HOLD_CONNECTOR_FILE"]);
function Zwa(e = process.env) {
  let o = [];
  for (let n in e) if ((n.startsWith("CLAUDE_CODE_") || n.startsWith("ANTHROPIC_")) && !cg.has(n) && e[n] !== void 0 && e[n] !== "") o.push(n);
  return o.sort();
}
var ug = /* @__PURE__ */ new Set(["tipsHistory", "installMethod", "shiftEnterKeyBindingInstalled", "hasUsedBackslashReturn", "hasCompletedClaudeInChromeOnboarding", "remoteDialogSeen", "lspRecommendationIgnoredCount", "autoUpdates", "autoUpdatesProtectedForNative"]);
function eka(e) {
  let o = (0, import_chunk_2yx6c1y2.vt)(), n = [];
  for (let r of import_chunk_865at33z.aPs) {
    if (ug.has(r)) continue;
    let h = (import_chunk_8m5q5cts.HYe.includes(r) ? o[r] : void 0) ?? e[r], C = import_chunk_865at33z.QU[r];
    if (h === void 0 || mg(h, C)) continue;
    n.push(r);
  }
  return n;
}
var pg = ["model", "outputStyle", "language", "effortLevel", "fastMode", "alwaysThinkingEnabled", "spinnerTipsEnabled", "clawdFileProgressEnabled", "prefersReducedMotion", "timeFormat", "timeZone", "promptSuggestionEnabled", "awaySummaryEnabled", "precomputeCompactionEnabled", "idleCompaction", "switchModelsOnFlag", "autoUpdatesChannel", "viewMode", "syntaxHighlightingDisabled", "maxProseWidth", "useAutoModeDuringPlan", "enableWorkflows", "disableWorkflows", "disableArtifact", "enableArtifact", "workflowKeywordTriggerEnabled", "respondToBashCommands", "bashEditDiffEnabled", "bashOutputMaxChars", "taskOutputMaxChars", "autoCompactWindow", "cleanupPeriodDays", "forceLoginMethod", "keybindingFlavor"];
function tka(e) {
  let o = [];
  for (let n of pg) if (e[n] !== void 0) o.push(n);
  if (e.permissions?.defaultMode !== void 0) o.push("permissions.defaultMode");
  if (e.worktree?.baseRef !== void 0) o.push("worktree.baseRef");
  if (Object.values(e.modelSettings ?? {}).some((n) => n?.autoCompactWindow !== void 0)) o.push("modelSettings.autoCompactWindow");
  return o.sort();
}
function _c(e, o) {
  let n = [];
  for (let r in e) if (o(r) === "cli") n.push(r);
  return n.sort();
}
function mg(e, o) {
  if (e === o) return true;
  if (typeof e === "object" && e !== null) return Object.keys(e).length === 0;
  return false;
}
function vc(e) {
  let o = (0, import_chunk_2yx6c1y2.zJi)(e);
  return { keyCount: o.length, keys: (0, import_chunk_78g0060s.Fr)(o.join(",")) };
}
function Ec(e, o) {
  let n = _c(e, o);
  return { flag_count: n.length, flags: (0, import_chunk_78g0060s.Fr)(n.join(",")) };
}
function kc() {
  try {
    return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
    return;
  }
}
var XXn = () => require("/$bunfs/root/chunk-5rmfekc6.js"), hg = () => require("/$bunfs/root/chunk-xn05yhk6.js"), Sg = () => require("/$bunfs/root/chunk-h7ssn1v4.js"), G2r = require("/$bunfs/root/chunk-cc0f961n.js"), Ac = null, yg = require("/$bunfs/root/chunk-t24x4axy.js"), _g = require("/$bunfs/root/chunk-nj5px52b.js");
var Si = require("/$bunfs/root/chunk-d3fwxng5.js");
function Cg() {
  try {
    let e = (0, import_chunk_2yx6c1y2._e)("policySettings");
    if (e) {
      let o = (0, import_chunk_2yx6c1y2.DJi)(), n = (0, import_chunk_2yx6c1y2.LJi)(), r = Dr(import_chunk_2yx6c1y2.jJi), g = Dr(Vd), h = Dr(import_chunk_fvd4qp68.Mjo), C = Dr(Gd);
      if ((0, import_chunk_y53wbr8a.a)("tengu_managed_settings_loaded", { ...vc(e), ...r && { managedFileProtection: (0, import_chunk_78g0060s.f)(r.protection), managedFileSetsOrgPin: r.setsOrgPin }, ...g && { machineDocumentUnread: (0, import_chunk_78g0060s.f)(g.cause), machineSetsSignInPin: g.machineSetsSignInPin }, ...h && { remoteIneligibilityAuthor: (0, import_chunk_78g0060s.f)(h.author), forcedRefreshFromMachine: h.forcedRefreshFromMachine }, ...C && { bypassLockShadowed: C.bypass, autoModeLockShadowed: C.autoMode, pluginOnlyLockShadowed: C.pluginOnly }, ...o && { envUnionOptedOut: o.unionOptedOut, envUnionChanged: o.unionChangedEnv, remoteTierPresent: o.remoteTierPresent, mdmTierPresent: o.mdmTierPresent, fileTierPresent: o.fileTierPresent, adminTierCount: o.adminTierCount, tiersWithEnv: o.tiersWithEnv }, ...(0, import_chunk_2yx6c1y2.NJi)(n) }), n.length > 0) (0, import_chunk_w578pjby.t)(`managed settings: MCP policy keys in ${n.map(({ source: v }) => import_chunk_6mfepmbb.vut[v]).join(", ")} not applied: not the managed settings source that applies for them (/status names the keys)`, { level: "warn" });
      let y = (0, import_chunk_2yx6c1y2.PJi)();
      if (y.length > 0) (0, import_chunk_w578pjby.t)(`policyHelper: helper configuration in ${y.map((v) => import_chunk_6mfepmbb.vut[v]).join(", ")} ignored under managedSourcesBehavior "merge"; helpers are read from the highest managed settings source only`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "lower_source_helper_shadowed");
    }
    (0, import_chunk_2yx6c1y2.GJi)();
  } catch {
  }
}
async function vg({ dynamicMcpConfig: e, mcpConfigFlagServers: o, launchBlockedCount: n, diskScopesSkipped: r, storageV5: g, credentials: h }) {
  let C = r ? {} : (await (0, import_chunk_bzyb60p0.Ik)(e, { storageV5: g, credentials: h })).servers, y = { ...(0, import_chunk_bzyb60p0.SH)(C).allowed, ...(0, import_chunk_bzyb60p0.OBe)(e).configs };
  return { mcpClientCount: Object.keys(y).length, mcpConfigs: (0, import_chunk_f9x2f6cx.Hn)() ? null : Object.values(y), mcpListSizing: { ...(0, import_chunk_bzyb60p0.Gns)(), mcpConfigBlockedCount: n + (0, import_chunk_bzyb60p0.OBe)(o).blocked.length } };
}
async function bg({ session: e, storageV5: o, credentials: n, onAntSandboxDetection: r, hasInitialPrompt: g, hasStdin: h, verbose: C, focusView: y, debug: v, print: R, outputFormat: A, inputFormat: I, numAllowedTools: H, numDisallowedTools: G, restricted: K, mcpClientCount: z, mcpListSizing: oe, mcpConfigs: ie, worktreeEnabled: je, skipWebFetchPreflight: tt, githubActionInputs: nt, dangerouslySkipPermissionsPassed: rt, permissionMode: Ve, proactivityLevel: It, modeIsBypass: kt, bypassRequestSource: _t, allowDangerouslySkipPermissionsPassed: io, skipDangerousModePromptSetPreDialog: So, systemPromptFlag: xt, appendSystemPromptFlag: Je, thinkingConfig: Wt, modelProvenance: Vt, runsLocalQueryLoop: zt, readClaimedSessionMcp: yo }) {
  let Jt = e.host, ao = Za(Jt, "tengu_init");
  try {
    let it = (0, import_chunk_8c111j67.QQa)(), _o, On, Co;
    await ao;
    let ot;
    if ((0, import_chunk_f9x2f6cx.Wge)() !== "none") {
      if (ot = await (0, import_chunk_f9x2f6cx.kNr)(), ot === void 0) return;
      if (kt = ot.permissionMode === "bypassPermissions", ot.permissionMode !== Ve) _t = kt ? "mode_flag" : void 0;
      Ve = ot.permissionMode, Co?.(kt);
      let lt = () => {
      }, Nt = new Promise((eo) => {
        lt = eo;
      }), bo = (0, import_chunk_w578pjby.Ct)(() => lt());
      if (await (0, import_chunk_5appeerh.me)(Promise.race([(0, import_chunk_bzyb60p0._Pn)(e), Nt]), gr * (Os + 1)), bo(), yo !== void 0) try {
        ({ mcpClientCount: z, mcpConfigs: ie, mcpListSizing: oe } = await yo());
      } catch (eo) {
        (0, import_chunk_w578pjby.t)(`tengu_init: reading the claimed folder's MCP servers failed (keeping the launch's): ${(0, import_chunk_jv7av99m.d)(eo)}`, { level: "warn" });
      }
      if (tt = (0, import_chunk_2yx6c1y2.vt)().skipWebFetchPreflight, Vt !== void 0) Vt = Js();
    }
    let Lt = {}, He = (0, import_chunk_em330z26.m9r)().catch(() => null), Z = await (0, import_chunk_w5s307zm.Nna)(), J = await (0, import_chunk_5appeerh.me)(He, import_chunk_em330z26.WLa) ?? null, Ee = ie === null ? null : (0, import_chunk_1wqrkb4a.LFa)(ie), Te = null;
    if (zt) try {
      Te = (0, import_chunk_awvk50qj.V5r)();
    } catch (lt) {
      (0, import_chunk_k449cc64.i)(lt);
    }
    let qe = { entrypoint: (0, import_chunk_78g0060s.S)("claude"), bootstrap_entry: (0, import_chunk_78g0060s.f)((0, import_chunk_k5jn5rx9.Fra)()), hasInitialPrompt: g, hasStdin: h, verbose: C, focusView: y, debug: v, debugToStderr: (0, import_chunk_w578pjby.hJ)(), print: R, outputFormat: (0, import_chunk_78g0060s.f)(A), inputFormat: (0, import_chunk_78g0060s.f)(I), numAllowedTools: H, numDisallowedTools: G, restricted: K, mcpClientCount: z, ...zt && oe, ...Ee && { ...Ee }, worktree: je, skipWebFetchPreflight: tt, githubActionInputsPresent: nt !== void 0, githubActionInputsLength: nt?.length, dangerouslySkipPermissionsPassed: rt, permissionMode: (0, import_chunk_78g0060s.f)(Ve), bypassRequestSource: (0, import_chunk_78g0060s.fe)(_t), proactivityLevel: (0, import_chunk_78g0060s.fe)(It), modeIsBypass: kt, inProtectedNamespace: (0, import_chunk_2gtmjt3y.T2)(), ...(0, import_chunk_7x4ga2ke.LJt)(), ..._o, apiKeySource: (0, import_chunk_78g0060s.f)((0, import_chunk_865at33z.lm)({ skipRetrievingKeyFromApiKeyHelper: true }).source), allowDangerouslySkipPermissionsPassed: io, thinkingType: (0, import_chunk_78g0060s.f)(Wt.type), ...xt && { systemPromptFlag: (0, import_chunk_78g0060s.f)(xt) }, ...Je && { appendSystemPromptFlag: (0, import_chunk_78g0060s.f)(Je) }, ...it && { noFlickerEnvVar: (0, import_chunk_78g0060s.f)(it) }, rendererEntryPath: (0, import_chunk_78g0060s.f)((0, import_chunk_8c111j67.a7)()), ...(0, import_chunk_qbrmmydq.kHl)(), ...Zl(), ...Lt, is_simple: (0, import_chunk_2gtmjt3y.Xn)() || void 0, is_safe_mode: (0, import_chunk_2gtmjt3y.as)() || void 0, spare: ot !== void 0 ? 1 : void 0, spare_parked_ms: ot?.parkedMs, extendedQuestions: (0, import_chunk_f9x2f6cx.RQe)() || void 0, is_coordinator: G2r.isCoordinatorMode() ? true : void 0, ...(0, import_chunk_w50zedgp.yWt)(zt), autoUpdatesChannel: (0, import_chunk_78g0060s.f)((0, import_chunk_2yx6c1y2.vt)().autoUpdatesChannel ?? "latest"), ...Vt, ...Te, ...Z && { is_git: Z.is_git, has_remote: Z.has_remote, remote_host_class: (0, import_chunk_78g0060s.f)(Z.remote_host_class) }, ...J && { has_dockerfile: J.has_dockerfile, has_compose: J.has_compose, has_devcontainer: J.has_devcontainer, has_nix: J.has_nix, has_bazel: J.has_bazel, lockfile_family: (0, import_chunk_78g0060s.f)(J.lockfile_family), has_env_file: J.has_env_file, has_ci_config: J.has_ci_config, has_private_registry: J.has_private_registry, private_registry_host_class: (0, import_chunk_78g0060s.f)(J.private_registry_host_class), has_secrets_manager_refs: J.has_secrets_manager_refs, has_xcode_project: J.has_xcode_project, has_ios_app_project: J.has_ios_app_project ?? void 0, has_android_project: J.has_android_project, has_android_app_project: J.has_android_app_project, os_locked_toolchain: (0, import_chunk_78g0060s.f)(J.os_locked_toolchain) } };
    if (!(oMt() && (0, import_chunk_2gtmjt3y.as)())) (0, import_chunk_y53wbr8a.a)("tengu_init", qe);
    if (Te !== null) Xd(Jt, Te), (0, import_chunk_865at33z.ys)(() => Jd(Jt));
  } catch (it) {
    (0, import_chunk_k449cc64.i)(it);
  }
}
function JXn(e) {
  let o = e.brief, n = import_chunk_c203g5kd.s.CLAUDE_CODE_BRIEF;
  if (!o && !n) return;
  let { isBriefEntitled: r } = require("/$bunfs/root/chunk-6t7ttdme.js"), g = r();
  if (g) (0, import_chunk_f9x2f6cx.mpt)(true);
  (0, import_chunk_y53wbr8a.a)("tengu_brief_mode_enabled", { enabled: g, gated: !g, source: (0, import_chunk_78g0060s.f)(n ? "env" : "flag") });
}
function Eg(e) {
  if (typeof e !== "object" || e === null) return {};
  let o = e, n = o.teammateMode;
  return { agentId: typeof o.agentId === "string" ? o.agentId : void 0, agentName: typeof o.agentName === "string" ? o.agentName : void 0, teamName: typeof o.teamName === "string" ? o.teamName : void 0, agentColor: typeof o.agentColor === "string" ? o.agentColor : void 0, planModeRequired: typeof o.planModeRequired === "boolean" ? o.planModeRequired : void 0, parentSessionId: typeof o.parentSessionId === "string" ? o.parentSessionId : void 0, leadVerifyKey: typeof o.leadVerifyKey === "string" ? o.leadVerifyKey : void 0, teammateMode: n === "auto" || n === "tmux" || n === "iterm2" || n === "in-process" ? n : void 0, agentType: typeof o.agentType === "string" ? o.agentType : void 0 };
}
async function kg(e, o) {
  let n = o.commands.filter((h) => !h.hidden).flatMap((h) => [h.name(), ...h.aliases()]), r = e.toLowerCase(), g = r !== e && n.includes(r) ? r : (0, import_chunk_xcgcdx61.IFe)(r, n.map((h) => ({ name: h })));
  if (!g) return;
  await (0, import_chunk_y53wbr8a.Ma)("tengu_unknown_command_suggestion", {}), process.stderr.write([import_chunk_d57v19zt.Re.red(import_chunk_7r4ehpnw.xe.cross) + ` unknown command "${e}"`, import_chunk_d57v19zt.Re.dim(`  ${import_chunk_xcgcdx61.eC.last} `) + "Did you mean " + import_chunk_d57v19zt.Re.bold(`claude ${g}`) + "?", "", import_chunk_d57v19zt.Re.dim("Run ") + import_chunk_d57v19zt.Re.dim.bold("claude --help") + import_chunk_d57v19zt.Re.dim(" to list commands, or ") + import_chunk_d57v19zt.Re.dim.bold(`claude -p "${e}"`) + import_chunk_d57v19zt.Re.dim(" to send as a prompt."), ""].join(`
`)), await (0, import_chunk_mpk68jst.Lo)(1);
}
function wg(e, o) {
  if ((0, import_chunk_f9x2f6cx.Se)()) {
    (0, import_chunk_42tcgre6.q)("info", "prefetch_system_context_non_interactive"), (0, import_chunk_bzyb60p0.Hnt)(e);
    return;
  }
  if ((0, import_chunk_865at33z.Yi)()) (0, import_chunk_42tcgre6.q)("info", "prefetch_system_context_has_trust"), (0, import_chunk_bzyb60p0.Hnt)(e), ed(o);
  else (0, import_chunk_42tcgre6.q)("info", "prefetch_system_context_skipped_no_trust");
}
function G6s(e, o, n, { userContext: r = true } = {}) {
  Tjo(e, o, n, { userContext: r }), Cjo(e, o, n);
}
function Tc() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER || (0, import_chunk_2gtmjt3y.Xn)();
}
function Tjo(e, o, n, { userContext: r = true, gitStatus: g = true } = {}) {
  if (Tc()) return;
  if ((0, import_chunk_865at33z.hRo)(), !(0, import_chunk_f9x2f6cx.Yy)()) {
    if (r) (0, import_chunk_bzyb60p0.$F)(e, o, n);
    if (g) wg(e, o);
  }
  let C = require("/$bunfs/root/chunk-mn0yw68p.js").activeHybridHelper((0, import_chunk_zhr7rpv7.ve)()) !== void 0;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_USE_BEDROCK && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_BEDROCK_AUTH && !C) (0, import_chunk_865at33z.WAo)();
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_USE_ANTHROPIC_AWS && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH) (0, import_chunk_865at33z.WAo)();
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_USE_MANTLE && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_MANTLE_AUTH && !C) (0, import_chunk_865at33z.WAo)();
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_USE_VERTEX && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_VERTEX_AUTH && !C) (0, import_chunk_865at33z.nRs)();
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH) (0, import_chunk_865at33z.nRs)();
  (0, import_chunk_865at33z.SPl)(o), (0, import_chunk_865at33z.Xxl)(o), rc(o, n), (0, import_chunk_865at33z.Jxl)(o), uc({ allowNetwork: true }), fc({ allowNetwork: gc() });
  let y = net(e, o, n);
  if ((0, import_chunk_bzyb60p0.zGa)(y), import_chunk_trq47kfh.Ti.initialize(y, o), !(0, import_chunk_2gtmjt3y.Xn)() && !(0, import_chunk_f9x2f6cx.Hn)() && !(0, import_chunk_f9x2f6cx.gh)()) import_chunk_q0fr3q7r.kMe.initialize(y, o);
}
function Cjo(e, o, n) {
  if (Tc()) return;
  if (!(0, import_chunk_f9x2f6cx.Se)()) Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p1hs700s.js"))).then(({ getRelevantTips: r }) => r({ session: (0, import_chunk_f9x2f6cx.N)(), theme: "dark", ...o && { storageV5: o }, ...n && { credentials: n } })).catch((r) => (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(r), "tip prewarm failed")));
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !(0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_f9x2f6cx.Hn)() && !(0, import_chunk_f9x2f6cx.Yy)() && !(0, import_chunk_865at33z.i_)()) (0, import_chunk_g03qj0bk.lpo)((0, import_chunk_18rsj2ts.pe)(), AbortSignal.timeout(3e3), []);
  if ((0, import_chunk_865at33z.sIl)(), (0, import_chunk_865at33z.b)("tengu_drift_lantern", false)) Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bsk4rktd.js"))).then((r) => r.startEventLoopStallDetector(e.host, { attributeSigcont: !(0, import_chunk_f9x2f6cx.Se)() }));
  if ((0, import_chunk_3t7ve0wy.ste)()) (0, import_chunk_865at33z.$Ol)(import_chunk_865at33z.ZIl);
}
function eEn(e, o, n) {
  let r = (0, import_chunk_865at33z.jt)((0, import_chunk_f9x2f6cx.BB)() ?? (0, import_chunk_865at33z.qd)()), g = [(0, import_chunk_18rsj2ts.pe)(), (0, import_chunk_865at33z.Yp)(r, (0, import_chunk_f9x2f6cx.hh)()), (0, import_chunk_865at33z.$S)(r), e, n !== void 0], h = n === void 0 ? hi(...g) : n.then(() => hi(...g));
  return (0, import_chunk_bzyb60p0.pi)(e, o).then(async ({ enabled: C, errors: y }) => {
    let v = (0, import_chunk_vcnr02by.Bg)();
    (0, import_chunk_54j6k3fn.Ddl)(C, v), await Promise.all(C.map(async (A) => {
      if (await (0, import_chunk_bzyb60p0.DQt)(A, [], e), !A.lspServers) {
        let I = await (0, import_chunk_bzyb60p0.Bnt)(A, [], e);
        if (I) A.lspServers = I;
      }
    })), (0, import_chunk_54j6k3fn.Fdl)(y, v, { cacheOnly: true }), yc(C, v);
    let R = await h;
    (0, import_chunk_54j6k3fn.Ndl)(C, v, (0, import_chunk_wj4me9k5.VG)(), R, e);
  }).catch((C) => (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(C), "plugin session telemetry load failed"))).then(async () => {
    await h;
  });
}
function NJ(e, o) {
  return (0, import_chunk_78g0060s.f)(e ? "on_branch" : o ? "ref" : "default");
}
function tEn(e) {
  if ((0, import_chunk_42nfpkzm.Mp)() && !(0, import_chunk_xcgcdx61.nc)() && !(0, import_chunk_xcgcdx61.cm)()) return true;
  return Rs(e);
}
function Pc(e) {
  let o = (0, import_chunk_xcgcdx61.Tm)();
  return import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_EARLY_SYNC_AFTER_SETTINGS_REFUSAL && (0, import_chunk_xcgcdx61.OK)() && o?.state === "failed" && o.failure.errorKind === "http_403" && !(0, import_chunk_2yx6c1y2.dut)() ? Rs(e) : tEn(e);
}
function Rn(e) {
  return (0, import_chunk_pbbjnb48.gml)({ eventLoggingEnabled: (0, import_chunk_865at33z.bde)(), growthBookEnabled: (0, import_chunk_865at33z.Lc)(), cacheEmpty: (0, import_chunk_865at33z.zN)(), relaunches: e });
}
function Oc(e) {
  return e && (0, import_chunk_865at33z.b)("tengu_sleepy_rabbit", false);
}
function z6s(e, o) {
  let n = (0, import_chunk_f9x2f6cx.Se)(), r = n && (0, import_chunk_pbbjnb48.XAe)(), g = n ? Rn(r) : void 0, h = g !== void 0 && (0, import_chunk_865at33z.zN)(), C = g !== void 0 && !h && (r && (0, import_chunk_zjhyjv3y.rEo)() || Oc(r));
  return (0, import_chunk_pbbjnb48._ml)({ site: e, nonInteractive: n, budgetMs: g, settingsEnvPending: (h || C) && tEn(o), cacheEmpty: h, warmCacheKick: C });
}
function g$e(e, { key: o, outputFormat: n, debugLine: r = e, onStderrToo: g = false }) {
  if (!(0, import_chunk_f9x2f6cx.Se)() || n !== "json" && n !== "stream-json" && import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") {
    Yse(e);
    return;
  }
  if ((0, import_chunk_w578pjby.t)(r, { level: "warn" }), g) (0, import_chunk_mpk68jst.PN)(e);
  if (n === "stream-json" && !(0, import_chunk_3t7ve0wy.kb)()) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "notification", key: o, text: e, priority: "high", color: "warning" });
}
function yi(e, o) {
  {
    let n = (0, import_chunk_qwcebyxc.b_o)(e), r = require("/$bunfs/root/chunk-yypqg2z3.js").wasCodeModeAskedForInFlagSettings();
    if (o === "stream-json") {
      if (r) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "notification", key: "code-mode-opt-in", text: n, priority: "high", color: "warning" });
    } else if (r || o !== "json") process.stderr.write(`Warning: ${n}
`);
  }
}
async function Ag(e) {
  {
    let o = await require("/$bunfs/root/chunk-yypqg2z3.js").confirmHeadlessCodeModeOptIn();
    if (o !== void 0) yi(o, e);
  }
}
function Mg() {
  (0, import_chunk_42tcgre6.q)("info", "started", { version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, is_native_binary: (0, import_chunk_wzdjp7c0.dg)(), incremental_request_body_env: import_chunk_c203g5kd.s.CLAUDE_CODE_INCREMENTAL_REQUEST_BODY ?? 0 });
}
async function V6s(e, o, n, r, g, h, C, y, v) {
  var _stack2 = [];
  try {
    if ((0, import_chunk_k5jn5rx9.ts)("action_handler_start"), (0, import_chunk_bzyb60p0.Fmi)(), (0, import_chunk_bq31aqv6.Xel)(y), (0, import_chunk_r3kja8v6.ue)()) (0, import_chunk_w50zedgp.X0i)();
    if ((0, import_chunk_69qhefwa.Ne)(import_chunk_mj79rpqa.qIe.CLAUDE_CODE_EXPERIMENTAL_CODE_MODE)) {
      let { engineCheckResult: c } = require("/$bunfs/root/chunk-e4acfyq7.js");
      c();
    }
    if (!(0, import_chunk_f9x2f6cx.Se)()) {
      let c = require("/$bunfs/root/chunk-0y1sbpch.js");
      c.startPreviewBrowserDiscovery();
    }
    if (o.deepLinkOrigin && o.prefillB64 !== void 0 && o.prefill === void 0) try {
      o.prefill = (0, import_chunk_jmm1stqj.$Gi)(o.prefillB64);
    } catch (c) {
      (0, import_chunk_w578pjby.t)(`Ignoring invalid --prefill-b64: ${c instanceof Error ? c.message : c}`, { level: "error" });
    }
    if (o.deepLinkOrigin && o.deepLinkCwdB64 !== void 0) try {
      var _stack = [];
      try {
        (0, import_chunk_jmm1stqj.FGi)(o.deepLinkCwdB64), (0, import_chunk_bzyb60p0.JNt)(o.deepLinkCwdB64), (0, import_chunk_f9x2f6cx.w$)((0, import_chunk_18rsj2ts.pe)()), (0, import_chunk_f9x2f6cx.vQe)((0, import_chunk_18rsj2ts.pe)()), (0, import_chunk_865at33z.rAt)(), (0, import_chunk_865at33z.jPr)(), (0, import_chunk_bzyb60p0.Mnt)(), (0, import_chunk_r3mm3x33.pr)(), (0, import_chunk_bzyb60p0.N_)("deeplink: originalCwd changed");
        let c;
        const k = __using(_stack, { [Symbol.dispose]: () => c?.() });
        if ((0, import_chunk_m15w38ag.ne)() && y !== void 0) c = await (0, import_chunk_gt0vfa7p.xTr)(y);
        if (r()) (0, import_chunk_bzyb60p0.ONt)(y, "deeplink");
        if ((0, import_chunk_w5s307zm.Ana)(), c !== void 0) (0, import_chunk_6zh1j84y.KRe)({ userLayer: "retain" });
        else (0, import_chunk_6zh1j84y.KRe)();
        import_chunk_p1ewvgeh.Xh.cache.clear?.(), (0, import_chunk_p1ewvgeh.Nx)(y);
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    } catch (c) {
      (0, import_chunk_w578pjby.t)(`Ignoring invalid --deep-link-cwd-b64: ${c instanceof Error ? c.message : c}`, { level: "error" });
    }
    if (await (0, import_chunk_865at33z.ioe)()) (0, import_chunk_5e3gtsn9.w9)();
    if (o.bare) import_chunk_c203g5kd.s.set("CLAUDE_CODE_SIMPLE", true);
    let R = false;
    if ((0, import_chunk_2gtmjt3y.as)()) {
      if (import_chunk_c203g5kd.s.set("CLAUDE_CODE_SAFE_MODE", true), import_chunk_c203g5kd.s.set("CLAUDE_CODE_DISABLE_CLAUDE_MDS", true), !import_chunk_c203g5kd.s.CLAUDE_CODE_CONFIG_PROBE) (0, import_chunk_cqa9hrgx.u)("startup_safe_mode");
    }
    let A;
    try {
      A = (0, import_chunk_2gtmjt3y.ujl)(o.maxTurns);
    } catch (c) {
      return (0, import_chunk_mpk68jst.Bn)((0, import_chunk_jv7av99m.d)(c));
    }
    if (e === "code") (0, import_chunk_y53wbr8a.a)("tengu_code_prompt_ignored", {}), Yse("Tip: you can start Claude Code with just `claude`"), e = void 0;
    let I = (0, import_chunk_ap8jm2m5.dMt)(), H = I && `${I.problem} \xB7 ${I.fix}`;
    if (e && typeof e === "string" && !/\s/.test(e) && e.length > 0) {
      if ((0, import_chunk_y53wbr8a.a)("tengu_single_word_prompt", { length: e.length }), !o.print && !o.continue && !o.resume && /^[a-zA-Z][a-zA-Z-]*$/.test(e)) await kg(e, n);
    }
    let G;
    if ((0, import_chunk_yvad17bv.xi)() && !(0, import_chunk_f9x2f6cx.Se)() && !o.agentId) try {
      let { initializeSessionTeam: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z40hbys4.js")));
      G = await c(void 0, y);
    } catch (c) {
      (0, import_chunk_k449cc64.i)(c);
    }
    if (!(0, import_chunk_865at33z.i_)()) (0, import_chunk_y53wbr8a.a)("tengu_cli_flags", Ec(o, (c) => n.getOptionValueSource(c)));
    (0, import_chunk_bzyb60p0.sli)(h?.host !== void 0 || g?.url !== void 0 ? "" : (0, import_chunk_aeefyj9w.wIa)(n.options) ?? (0, import_chunk_aeefyj9w.UYs)(n.options, process.argv.slice(2)));
    let { debug: K = false, dangerouslySkipPermissions: z, allowDangerouslySkipPermissions: oe = false, tools: ie = [], restricted: je = false, allowedTools: tt = [], disallowedTools: nt = [], mcpConfig: rt = [], permissionMode: Ve, inheritPermissionMode: It, proactivity: kt, addDir: _t = [], fallbackModel: io, betas: So = [], ide: xt = false, sessionId: Je, includeHookEvents: Wt, includePartialMessages: Vt, forwardSubagentText: zt, sessionMirror: yo } = o;
    (0, import_chunk_f9x2f6cx.PNr)(je);
    let Jt = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_BYPASS_SWITCH === void 0 ? void 0 : await (0, import_chunk_7kv2gx33.SIa)(), ao = (Jt === "held" || hr()?.holdsBypass === true && o.permissionMode !== "bypassPermissions") && !(0, import_chunk_f9x2f6cx.Se)(), it = oe || ao;
    if (o.prefill) (0, import_chunk_k59mf0h7.F2t)(o.prefill);
    let _o, On = typeof o.agents === "string" && o.agents !== "" && !(0, import_chunk_0pb268nk.Lr)("agents", { explicitlyRequested: true }), Co = !o.resume && !o.continue && !import_chunk_c203g5kd.s.CLAUDE_BG_POST_CLEAR_RESPAWN, ot;
    if (On && typeof o.agents === "string" && !(0, import_chunk_e7pc50e8.Q2r)(o.agents)) {
      if (!o.print && !(0, import_chunk_f9x2f6cx.Se)()) return (0, import_chunk_mpk68jst.Bn)(import_chunk_e7pc50e8.fka);
      let c = await (0, import_chunk_e7pc50e8.pka)(o.agents);
      if (!c.ok) return (0, import_chunk_mpk68jst.Bn)(c.error);
      o.agents = c.json, ot = c.filePath, (0, import_chunk_f9x2f6cx.Yaa)((0, import_chunk_4smdap7r.M)([c.filePath, c.realPath]));
    }
    let Lt = o.agents;
    if (On && (Co || ot !== void 0) && typeof Lt === "string") {
      let c = (0, import_chunk_bzyb60p0.Zar)(Lt);
      if (c) return (0, import_chunk_mpk68jst.Bn)(`Error: Invalid --agents configuration:
${c}${ot ? `
(read from ${ot})` : ""}`);
    }
    let He = o.agent;
    if (He) import_chunk_c203g5kd.s.set("CLAUDE_CODE_AGENT", He);
    let { outputFormat: Z, inputFormat: J } = o, Ee = (0, import_chunk_2yx6c1y2.vt)().viewMode, Te = (0, import_chunk_trq47kfh.qat)(), qe = o.verbose ?? (Ee ? Ee === "verbose" : Te ? false : (0, import_chunk_8m5q5cts.ll)("verbose", false).value), at = o.print, lt = o.init ?? false, Nt = o.initOnly ?? false, bo = o.maintenance ?? false;
    (0, import_chunk_qbrmmydq.SHl)(!at && process.stdout.isTTY === true, (c) => {
      console.log(c);
    });
    let eo = o.disableSlashCommands || false;
    (0, import_chunk_f9x2f6cx.Mla)(eo);
    let Dn = (0, import_chunk_bzyb60p0.M6a)(o.autocompact), In = (0, import_chunk_1n8b5n1q.zEn)() ? o.worktree : void 0, Go = typeof In === "string" ? In : void 0, Ie = In !== void 0, Ir;
    if (Go) {
      let c = (0, import_chunk_bzyb60p0.OZo)(Go);
      if (c !== null) Ir = c, Go = void 0;
    }
    let Fn = (0, import_chunk_1n8b5n1q.zEn)() && o.tmux === true;
    if (Fn) {
      if (!Ie) return (0, import_chunk_mpk68jst.Bn)("Error: --tmux requires --worktree");
      if ((0, import_chunk_cg8dqz0a.x)() === "windows") return (0, import_chunk_mpk68jst.Bn)("Error: --tmux is not supported on Windows");
      if (!await (0, import_chunk_bzyb60p0.Dui)()) return (0, import_chunk_mpk68jst.Bn)(`Error: tmux is not installed.
${(0, import_chunk_bzyb60p0.Lui)()}`);
    }
    let Pe = Eg(o);
    if (Pe.parentSessionId) XXn().setCliParentSessionId?.(Pe.parentSessionId);
    (0, import_chunk_f9x2f6cx.Ola)(Pe.agentId);
    let gt;
    if ((0, import_chunk_yvad17bv.xi)()) {
      gt = Pe;
      let c = Pe.agentId || Pe.agentName || Pe.teamName, k = Pe.agentId && Pe.agentName && Pe.teamName;
      if (c && !k) return (0, import_chunk_mpk68jst.Bn)("Error: --agent-id, --agent-name, and --team-name must be used together");
      if (Pe.agentId && Pe.agentName && Pe.teamName) XXn().setDynamicTeamContext?.({ agentId: Pe.agentId, agentName: Pe.agentName, teamName: Pe.teamName, color: Pe.agentColor, planModeRequired: Pe.planModeRequired ?? false, parentSessionId: Pe.parentSessionId, leadVerifyKey: Pe.leadVerifyKey });
      if (Pe.teammateMode) Sg().setCliTeammateModeOverride?.(Pe.teammateMode);
    }
    let Fe = o.sdkUrl ?? void 0, xr = Vt || import_chunk_c203g5kd.s.CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES, Nr = zt || import_chunk_c203g5kd.s.CLAUDE_CODE_FORWARD_SUBAGENT_TEXT;
    if (Wt || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) (0, import_chunk_bzyb60p0.Vqa)(true);
    if ((0, import_chunk_bzyb60p0.Kqa)(), (0, import_chunk_sjqze7qg.Z7a)(), Fe) {
      if (!J) J = "stream-json";
      if (!Z) Z = "stream-json";
      if (o.verbose === void 0) qe = true;
      if (!o.print) at = true;
    }
    let Pg = false, Br = false, Ic = false, Eo = o, _i = Eo.cloud ?? Eo.remote, Fc = [_i, Eo.resume].some((c) => typeof c === "string" && (0, import_chunk_9e5mdyfk.Xnn)(c)), ko = _i !== void 0 && Fc ? require("/$bunfs/root/chunk-70a43tgv.js").localSessionMoveCandidate({ options: Eo, prompt: typeof e === "string" ? e : void 0, nonInteractive: (0, import_chunk_f9x2f6cx.Se)(), hasOtherBackend: Boolean(g?.url) || Boolean(h?.host), stdinIsTTY: Boolean(process.stdin.isTTY) }) : void 0, xc = ko !== void 0 && o.resume !== void 0;
    if (ko !== void 0) o.resume = void 0;
    let At = await xl(Eo, { localSessionMove: ko, prompt: typeof e === "string" ? e : void 0, sessionId: Je, outputFormat: Z, inputFormat: J, hasSdkUrl: Boolean(Fe), nonInteractive: (0, import_chunk_f9x2f6cx.Se)(), isConnectedSessionsEnabled: import_chunk_5m9vge4h.isn, isViolinWoodEnabled: import_chunk_t9k2xeez.ON, cloudPrintEnabled: (0, import_chunk_9e5mdyfk.sZa)(), hasConnect: Boolean(g?.url), hasSSH: Boolean(h?.host), rcProjectGateEnabled: false, cloudSessionsByDefault: Br, sandboxVmByDefault: Ic, cloudSessionsDeniedByOrgPolicy: async () => (await (0, import_chunk_7q6ee47s.VYe)(), (0, import_chunk_k5jn5rx9.ts)("action_after_cloud_default_policy_wait"), (0, import_chunk_zh47ka3v.Qlo)()), suppliedOptionKeys: p8t(n).map(({ key: c }) => c), findCloudSessionToContinue: async () => null, launchFolderMonorepoVerdict: () => "undetermined", noMonorepoAsksTheService: async () => false });
    if (!At.ok) return At.flushAnalytics ? (0, import_chunk_mpk68jst.ho)(At.error) : (0, import_chunk_mpk68jst.Bn)(At.error);
    if (Sl(At.value), At.value.resumeInCloud !== null) o.resume = void 0, o.continue = void 0;
    let Bc = At.value.cloudDefault === "declined", Tg = (0, import_chunk_aeefyj9w.bIa)();
    if (Bc) (0, import_chunk_cqa9hrgx.l)("cloud_session_default", "local_flag");
    let Ci = At.value.cloudDefault === "not_allowed";
    if (Ci) (0, import_chunk_cqa9hrgx.l)("cloud_session_default", "org_policy");
    let Uc = Fl(Eo, { cloudSessionsByDefault: Br, suppliedOptionKeys: () => p8t(n).map(({ key: c }) => c) }), jc, Hc, $c = false, vi = At.value.cloudDefault === "applied", { teleport: Ao, cloudAttachId: lo, resumeInCloud: xn, poolId: Vo, environmentQuery: Wc, poolPromotedRemote: Ur, poolRef: Gc, poolOnBranch: Vc, forwardHomeSettings: bi, homeSettingsConsent: Ei, projectFlag: Rg, projectBrowse: Ln, projectForRemoteControl: ki, sessionMetadata: zc, headlessCloud: jr, headlessCloudPrint: $r, serveOnly: Xc, persistentVolume: Jc, persistentVolumeFromSessionId: Qc, monorepo: Zc, addedRepositories: eu, noMonorepo: ou, noMonorepoAsksTheService: nu, personal: ru, promptBlocks: su } = At.value, { remote: co } = At.value, uo = co !== null || lo !== null || Vo !== null || Ur || Ln !== null || Boolean(g?.url) || Boolean(h?.host);
    if (je && uo) return (0, import_chunk_mpk68jst.Bn)("Error: --restricted cannot be enforced in a cloud, remote-environment or ssh session, which runs its tools on another machine");
    (0, import_chunk_f9x2f6cx.N)().host.launchOptions.replaceMayForwardHomeSettings(bi), (0, import_chunk_f9x2f6cx.N)().host.launchOptions.replaceHomeSettingsHostConsent(Ei);
    let po = (0, import_chunk_f9x2f6cx.Se)() && (jr || $r || lo !== null || Ln !== null || Vo !== null), Wr, wi = false, Ai = o.watchArtifact ?? o.watchArtifactNoAutoreact;
    if (Ai !== void 0) {
      if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return (0, import_chunk_mpk68jst.Bn)("Error: --watch-artifact isn't supported yet from remote sessions \u2014 run it in Claude Code on your own machine");
      if ((0, import_chunk_f9x2f6cx.Se)()) return (0, import_chunk_mpk68jst.Bn)("Error: --watch-artifact requires an interactive session (not print mode, --sdk-url, --init-only, or redirected output)");
      if (lo !== null || co !== null || Ur || Boolean(g?.url) || Boolean(h?.host)) return (0, import_chunk_mpk68jst.Bn)("Error: --watch-artifact is not available in sessions attached to a remote environment \u2014 run it in a plain local session");
      let c = (0, import_chunk_hh0zpd1p.HMa)(Ai);
      if ("error" in c) return (0, import_chunk_mpk68jst.Bn)(c.error);
      let k = typeof o.watchArtifactNoAutoreact === "string";
      (0, import_chunk_hh0zpd1p.DMa)(k ? { ...c, autoReactDisarmed: true } : c), Wr = c.slug, wi = k;
    }
    let iu = null, Yo = o.remoteControl ?? o.rc, Nn = false, au = typeof Yo === "string" && Yo.length > 0 ? Yo : void 0, Mi = o.remoteControlSessionNamePrefix;
    if (Mi) import_chunk_c203g5kd.s.set("CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX", Mi);
    let Pi = Ll({ sessionId: Je, continue: o.continue, resume: o.resume, forkSession: o.forkSession, sdkUrl: Fe });
    if (!Pi.ok) return (0, import_chunk_mpk68jst.Bn)(Pi.error);
    if (Je) {
      if (!Fe) {
        let c = (0, import_chunk_mzmcvr6c.ht)(Je);
        if (!c) return (0, import_chunk_mpk68jst.Bn)("Error: Invalid session ID. Must be a valid UUID.");
        if (!(o.forkSession && o.resume === c) && (0, import_chunk_bzyb60p0.dro)(c)) return (0, import_chunk_mpk68jst.Bn)(`Error: Session ID ${c} is already in use.`, import_chunk_ndrgvsn7.KLr);
      }
    }
    let Gr = o.file;
    if (Gr && Gr.length > 0) {
      let c = (0, import_chunk_5rd4zsth.Nc)();
      if (!c) return (0, import_chunk_mpk68jst.Bn)("Error: Session token required for file downloads. CLAUDE_CODE_SESSION_ACCESS_TOKEN must be set.");
      let k = process.env.CLAUDE_CODE_REMOTE_SESSION_ID || (0, import_chunk_f9x2f6cx.W)(), L = (0, import_chunk_271f5kxt.Ial)(Gr);
      if (L.length > 0) {
        let X = { baseUrl: (0, import_chunk_t9fn978c.wkt)() || (0, import_chunk_ephf358x.cn)().BASE_API_URL, oauthToken: c, sessionId: k };
        _o = (0, import_chunk_271f5kxt.Pal)(L, X);
      }
    }
    let Q = (0, import_chunk_f9x2f6cx.Se)(), Vr = io === o.model ? void 0 : io, Yr = o.systemPrompt;
    if (o.systemPromptFile) try {
      let c = (0, import_path5.resolve)(o.systemPromptFile);
      Yr = Ns(await (0, import_promises3.readFile)(c, "utf8"), o.systemPrompt);
    } catch (c) {
      if ((0, import_chunk_jv7av99m.w)(c) === "ENOENT") return (0, import_chunk_mpk68jst.Bn)(`Error: System prompt file not found: ${(0, import_path5.resolve)(o.systemPromptFile)}`);
      return (0, import_chunk_mpk68jst.Bn)(`Error reading system prompt file: ${(0, import_chunk_jv7av99m.d)(c)}`);
    }
    let jn = o.appendSystemPrompt;
    if (o.appendSystemPromptFile) {
      if (o.appendSystemPrompt && (0, import_chunk_bzyb60p0.Vns)()) return (0, import_chunk_mpk68jst.Bn)("Error: --append-system-prompt cannot be given with --append-system-prompt-file in a Remote Control session. Remove --append-system-prompt.");
      try {
        let c = (0, import_path5.resolve)(o.appendSystemPromptFile);
        jn = Ns((0, import_chunk_bzyb60p0.$mi)(await (0, import_promises3.readFile)(c)), o.appendSystemPrompt);
      } catch (c) {
        if ((0, import_chunk_jv7av99m.w)(c) === "ENOENT") return (0, import_chunk_mpk68jst.Bn)(`Error: Append system prompt file not found: ${(0, import_path5.resolve)(o.appendSystemPromptFile)}`);
        return (0, import_chunk_mpk68jst.Bn)(`Error reading append system prompt file: ${(0, import_chunk_jv7av99m.d)(c)}`);
      }
    }
    let lu = (0, import_chunk_eh2gjex9.mva)(jn), Kr = await gl(o);
    if (!Kr.ok) return (0, import_chunk_mpk68jst.Bn)(Kr.error);
    o.appendSubagentSystemPrompt = Kr.prompt, fl(o.appendSubagentSystemPrompt);
    let { systemPrompt: $n, appendSystemPrompt: mo } = (0, import_chunk_k67pwqya.Owl)({ cli: { systemPrompt: Yr, appendSystemPrompt: jn }, env: process.env, settings: (0, import_chunk_2yx6c1y2.vt)() });
    if ((0, import_chunk_yvad17bv.xi)() && gt?.agentId && gt?.agentName && gt?.teamName) {
      let c = hg().TEAMMATE_SYSTEM_PROMPT_ADDENDUM;
      mo = mo ? `${mo}

${c}` : c;
    }
    let qr = He ? (0, import_chunk_bzyb60p0.syt)().find((c) => c.agentType === He)?.permissionMode : void 0, Wn = (0, import_chunk_jwwzbnen.Fjl)({ remote: co, isNonInteractiveSession: Q, headlessCloud: jr, headlessCloudPrint: $r, isContinue: Boolean(o.continue), pendingAssistantChat: void 0, pendingConnectUrl: g?.url, pendingSSHHost: h?.host });
    {
      let c = () => require("/$bunfs/root/chunk-yypqg2z3.js"), k = (L) => ({ cliModel: L, thinClient: Wn, teammate: Pe.agentId !== void 0, remoteControl: Yo !== void 0, workerOrSpare: Boolean(Fe) || Boolean(o.awaitClaim), toolsLeaveReplOut: c().doToolOptionsLeaveReplOut({ restricted: je, disallowedTools: nt, baseTools: ie }) });
      if ((0, import_chunk_qwcebyxc.ghl)(() => c().refusalForeseen(k(void 0))), import_chunk_mj79rpqa.qIe.CLAUDE_CODE_EXPERIMENTAL_CODE_MODE === void 0 && import_chunk_mj79rpqa.qIe.CLAUDE_CODE_EXPERIMENTAL_CODE_MODE_RESTART === void 0) (0, import_chunk_qwcebyxc.y_o)({ state: "not_asked" });
      else {
        (0, import_chunk_r3kja8v6.oUl)(import_chunk_w50zedgp.Oa), await c().settleCodeModeOptInAtStartup(k(o.model));
        let L = (0, import_chunk_qwcebyxc.IG)();
        if (Q && L.state === "refused") yi(L.why, Z);
      }
    }
    let to = (0, import_chunk_pbbjnb48.XAe)(), Ot, Xo = async (c, k, L) => {
      (0, import_chunk_k5jn5rx9.ts)(k.before);
      let X = performance.now(), V = await (0, import_chunk_pbbjnb48.Ibe)({ initialize: import_chunk_865at33z.ci, budgetMs: L });
      return (0, import_chunk_zjhyjv3y.QEl)(V.waitMs), (0, import_chunk_zjhyjv3y.zo)(c, performance.now() - X, X), (0, import_chunk_42tcgre6.q)(V.timedOut ? "warn" : "info", "startup_flag_fetch_wait", { budget_ms: L, waited_ms: Math.round(V.waitMs), timed_out: V.timedOut, killswitch_recheck: c !== "growthbook_init_ms" }), (0, import_chunk_k5jn5rx9.ts)(k.after), V;
    }, Jo = false, Ri = (0, import_chunk_865at33z.gn)("tengu_auto_mode_config", {}), Oi = Ri.source === "disk" && Ri.value?.enabled === "disabled", Qo = Rn(to), Mo = Qo !== void 0 && Oc(to);
    if ((0, import_chunk_pbbjnb48.Sml)({ nonInteractive: Q, budgetMs: Qo, settingsEnvPending: Q && Qo !== void 0 && tEn(Ie), cacheEmpty: (0, import_chunk_865at33z.zN)(), relaunches: to, autoModeKillSwitchOnDisk: Oi, warmWakeEarlyFetch: Mo }) === "gb-before-mode" && Qo !== void 0) Jo = true, Ot = { site: "gb-before-mode", result: await Xo("growthbook_init_ms", { before: "before_growthbook_init", after: "after_growthbook_init" }, Qo) };
    if ((0, import_chunk_f9x2f6cx.Se)() && Ot === void 0 && Oi && (0, import_chunk_865at33z.bde)() && !tEn(Ie)) await Xo("growthbook_killswitch_recheck_ms", { before: "before_gb_killswitch_recheck", after: "after_gb_killswitch_recheck" }, import_chunk_pbbjnb48.gU);
    let Di = import_chunk_bzyb60p0.g_t, Zo, en = Ve ?? (ko !== void 0 && !z ? await require("/$bunfs/root/chunk-70a43tgv.js").savedPlanMode(ko, y) : void 0), Ii;
    {
      if ((0, import_chunk_eh2gjex9.gva)(import_chunk_y8kqnbqt.OP, y, void 0), kt !== void 0 || !(0, import_chunk_4vsz8a99.LRe)() && (0, import_chunk_hjheyj7y.wLa)()) (0, import_chunk_eh2gjex9._va)();
      let k = Md(kt);
      Di = k.level, Zo = Td({ startupLevel: k, startsAsRemoteThinClient: Wn });
      let L = Pd({ cliLevel: kt, modeSuppliedOnInvocation: Ve !== void 0 || It !== void 0 || z === true || qr !== void 0 });
      if (L !== void 0) en = L, Ii = "--proactivity ask isn't available here \xB7 Started in manual mode";
    }
    let du = false, oo, Gn = [], Fi = { permissionModeCli: en, inheritPermissionModeCli: It, dangerouslySkipPermissions: z, allowDangerouslySkipPermissions: it, bypassPermissionsBlockedByHost: du, agentPermissionMode: qr, proactivityLevel: Zo?.level, ignoreProjectModePick: Wn, ...(0, import_chunk_awvk50qj.gZs)(z || it) }, Po = (0, import_chunk_awvk50qj.h3o)(Fi);
    oo = Po.notification ?? Ii;
    let Le = Po.mode;
    if (ao) Le = yd(Le);
    let Ni = (0, import_chunk_b83x8d52.xnl)({ restricted: je, permissionMode: Le, allowDangerouslySkipPermissions: it });
    if (Ni) return (0, import_chunk_mpk68jst.Bn)(`Error: ${Ni}`);
    if (o.enableAutoMode || en === "auto" || qr === "auto" || Le === "auto" && !(0, import_chunk_xfj2cwfv.Pde)() || !en && (0, import_chunk_awvk50qj.kZs)()) (0, import_chunk_xfj2cwfv.C5i)(true);
    if ((0, import_chunk_k5jn5rx9.ote)("action_before_mcp_policy_wait"), await (0, import_chunk_awaxe5q7.j2)({ hasDynamicMcpConfig: Boolean(rt && rt.length > 0) || xt, pluginStateReliable: r(), storageV5: y }), Le === "bypassPermissions" && (0, import_chunk_3b9jqhjk.OC)()) Po = (0, import_chunk_awvk50qj.h3o)(Fi), oo = Po.notification, Le = Po.mode;
    let { proactivity: Xr, modeSuppliedOnInvocation: cu, bypassRequestSource: Jr } = Po;
    (0, import_chunk_1gped6me.wTa)({ inheritPermissionModeCli: It, resolvedMode: Le, storageV5: y }), (0, import_chunk_f9x2f6cx.jyn)(Le === "bypassPermissions");
    let he = {}, Qr = { ...(0, import_chunk_bzyb60p0.Gns)(), mcpConfigBlockedCount: 0 }, To = {}, tn = {}, Zr = Fe ? Je : void 0, Bi = Wl(Zr, import_chunk_ht27b0vz.rvr), Ro = zs([], [], Bi);
    if (rt && rt.length > 0) {
      let c = rt.map((Me) => Me.trim()).filter((Me) => Me.length > 0), k = [], L = [], X = [], V = import_chunk_f2dee02n.Ql.isBridgeCarrierChild, Be = [];
      for (let Me of c) {
        let st = null, Ut = [], En = (0, import_chunk_0jve1fep.et)(Me, false);
        if (En) {
          let We = (0, import_chunk_bzyb60p0.bSt)({ configObject: En, filePath: "command line", expandVars: true, scope: "dynamic", bridgeSessionId: Zr });
          if (We.config) st = We.config.mcpServers;
          Ut = We.errors, tn = { ...tn, ...We.asWrittenEntries };
        } else {
          let We = (0, import_path5.resolve)(Me), mt = (0, import_chunk_bzyb60p0.oMn)({ filePath: We, expandVars: true, scope: "dynamic", bridgeSessionId: Zr });
          if (mt.config) st = mt.config.mcpServers;
          Ut = mt.errors, tn = { ...tn, ...mt.asWrittenEntries };
          let [cr, mr] = await Promise.all([(0, import_promises3.stat)(We).catch(() => {
            return;
          }), (0, import_promises3.realpath)(We).catch(() => We)]);
          if (cr === void 0 || cr.isFile()) Be.push(We, mr);
        }
        if (st) {
          if (k.push(st), Ut.length > 0) {
            (0, import_chunk_w578pjby.t)(`--mcp-config: ${Ut.length} entry warning(s): ${Ut.map((We) => `${We.path ? We.path + ": " : ""}${We.message}`).join("; ")}`, { level: "warn" });
            for (let We of Ut) {
              let mt = We.mcpErrorMetadata;
              if (mt?.skipReason && mt.serverName != null) X.push({ name: mt.serverName, type: mt.skipReason, message: We.message });
            }
          }
        } else L.push(...Ut);
      }
      if ((0, import_chunk_f9x2f6cx.Xaa)((0, import_chunk_4smdap7r.M)(Be)), L.length > 0) {
        let Me = L.map((st) => `${st.path ? st.path + ": " : ""}${st.message}`).join(`
`);
        return (0, import_chunk_w578pjby.t)(`--mcp-config validation failed (${L.length} errors): ${Me}`, { level: "error" }), (0, import_chunk_mpk68jst.Bn)(`Error: Invalid MCP configuration:
${Me}${H ? `
${H}` : ""}`);
      }
      Ro = zs(k, X.map((Me) => Me.name), Bi);
      for (let Me of Ro.refused) (0, import_chunk_w578pjby.t)(`--mcp-config: ${Me.message}`, { level: "warn" });
      let pt = Ro.servers;
      X.unshift(...Ro.refused);
      let bn = /* @__PURE__ */ new Map();
      for (let Me of X) if (!Object.hasOwn(pt, Me.name)) bn.set(Me.name, Me);
      if (bn.size > 0) {
        let Me = Array.from(bn.values());
        if ((0, import_chunk_eh2gjex9.fva)(Me), !(0, import_chunk_f9x2f6cx.Se)() || process.stderr.isTTY) Yse(`${Me.length} ${(0, import_chunk_7cfjrnwy.O)(Me.length, "MCP server")} skipped due to invalid config:`, { stderrPrefix: "Warning: ", items: Me.map((st) => st.message) });
      }
      if (Object.keys(pt).length > 0) {
        let Me = Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) || V, st = (0, import_chunk_wj4me9k5.RN)() && !(0, import_chunk_bzyb60p0.Wmi)(pt);
        if (st && !Me) return (0, import_chunk_mpk68jst.Bn)((0, import_chunk_wj4me9k5.Ovt)(["--mcp-config"]));
        let Ut = _g?.withoutWithheldCcrArtifactsEntry(pt, { cliArg: (0, import_chunk_qebpc5de.$f)(nt), session: hr()?.deny }).kept ?? pt, En = (0, import_chunk_khxw3ng0.er)(Ut, (ft, kn) => {
          let Ka = { ...ft, scope: "dynamic" };
          if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) (0, import_chunk_ht27b0vz.rvr)(kn, ft), (0, import_chunk_5qhr9bm2.$hl)(kn, ft);
          return (0, import_chunk_qdcbcsg7.Pl)(ft) ? (0, import_chunk_qdcbcsg7.Vhe)(Ka) : (0, import_chunk_865at33z.hPr)(kn, Ka, YXn);
        }), { configs: We, blocked: mt, held: cr } = (0, import_chunk_bzyb60p0.OBe)(En);
        if (Qr.mcpConfigBlockedCount = mt.length, mt.length > 0) Yse(`MCP ${(0, import_chunk_7cfjrnwy.O)(mt.length, "server")} blocked by enterprise policy: ${mt.join(", ")}`, { stderrPrefix: "Warning: " });
        let mr = { ...We, ...(0, import_chunk_865at33z.fI)(En, (ft, kn) => cr.includes(kn)) }, Qu = (0, import_chunk_865at33z.fI)(mr, (ft) => ft.type === "sdk"), Zu = (0, import_chunk_bzyb60p0.yh)() && Me && !o.strictMcpConfig && (0, import_chunk_bzyb60p0.jmi)(Qu), { servers: fr, dropped: $t, keptNotes: ep, reason: Ps } = Kl(mr, { dropForEnterpriseMcpConfig: Zu, dropForSideloadPolicy: st && Me, keptDespiteAllowlist: (0, import_chunk_bzyb60p0.Mmi)(We) });
        if ($t.length > 0) {
          if ((0, import_chunk_w578pjby.t)(`--mcp-config: ${(0, import_chunk_7cfjrnwy.O)($t.length, "server")} ignored (${Ps}): ${$t.join(", ")}`, { level: "warn" }), Ps === "enterprise MCP config") Yse(`an enterprise MCP config (managed-mcp.json) is present and has exclusive control over MCP servers; ignoring ${$t.length} MCP ${(0, import_chunk_7cfjrnwy.O)($t.length, "server")} supplied via --mcp-config: ${$t.join(", ")}`, { stderrPrefix: "Warning: " });
          else if (Ps === "disableSideloadFlags policy") Yse(`managed setting disableSideloadFlags forbids --mcp-config on this machine; ignoring ${$t.length} server-delivered MCP ${(0, import_chunk_7cfjrnwy.O)($t.length, "server")}: ${$t.join(", ")}`, { stderrPrefix: "Warning: " });
        }
        for (let ft of ep) if ((0, import_chunk_w578pjby.t)(ft), import_chunk_f2dee02n.Ql.isSelfHostedRunnerChild) (0, import_chunk_mpk68jst.PN)(ft);
        for (let ft of [(0, import_chunk_bzyb60p0.Hmi)(fr), (0, import_chunk_bzyb60p0.Dmi)(fr)]) if (ft) (0, import_chunk_w578pjby.t)(ft), (0, import_chunk_mpk68jst.PN)(ft);
        To = fr, he = { ...he, ...fr };
      }
    }
    let Ui = Ro.ownership, es = Vl(Ui?.hostOwnedNames, Object.keys(Ro.servers).length);
    if (es) (0, import_chunk_w578pjby.t)(es.text, { level: es.level });
    let Vn = (0, import_chunk_bzyb60p0.$rt)();
    if (Vn !== null && (0, import_chunk_f9x2f6cx.Se)() && !po) if (process.stderr.isTTY) (0, import_chunk_mpk68jst.PN)(`Warning: ${Vn}`);
    else (0, import_chunk_w578pjby.t)(Vn, { level: "warn" });
    let Do = o;
    (0, import_chunk_f9x2f6cx.Pla)(Do.chrome);
    let Io = (0, import_chunk_sjqze7qg.pbi)(he), xo = !Io && (0, import_chunk_sjqze7qg.ipr)(Do.chrome) && (0, import_chunk_865at33z.Rt)();
    if (!Io && (0, import_chunk_sjqze7qg.spr)(Do.chrome) && !(0, import_chunk_sjqze7qg.sN)()) {
      let c = (0, import_chunk_2nv4wrez.Dp)("allow_claude_browser_extension", "Claude in Chrome", "is") ?? "Claude in Chrome is disabled by your organization";
      if ((0, import_chunk_w578pjby.t)(`[Claude in Chrome] ${c}`, { level: "warn" }), Pe.agentId === void 0) (0, import_chunk_21y9ek9j.$H)("allow_claude_browser_extension", "startup");
    }
    let zn = (0, import_chunk_bzyb60p0.Efe)(import_chunk_prn6030k.Xi, (0, import_chunk_prn6030k.aJe)()), ji = (0, import_chunk_bzyb60p0.ESt)() || zn, uu = !xo && !Io && !ji && (0, import_chunk_sjqze7qg.dbi)(y), Hi = xo && Do.chrome !== true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_CFC !== true && ji, pu = xo && Do.chrome !== true && (import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_CFC !== true && (0, import_chunk_2gtmjt3y.as)() || je);
    if (Io && zn) (0, import_chunk_w578pjby.t)("[Claude in Chrome] Served by the remote session host over --mcp-config, but a deniedMcpServers policy entry denies Claude in Chrome; dropping the entry and not starting the built-in server"), he = (0, import_chunk_865at33z.fI)(he, (c, k) => k !== import_chunk_prn6030k.Xi);
    else if (Io && !(0, import_chunk_sjqze7qg.sN)()) (0, import_chunk_w578pjby.t)("[Claude in Chrome] Served by the remote session host over --mcp-config, but the org policy denies the browser extension; not adopting it and not starting the built-in server");
    else if (Io) (0, import_chunk_w578pjby.t)("[Claude in Chrome] Served by the remote session host over --mcp-config; not starting the built-in server"), (0, import_chunk_sjqze7qg.tDn)((0, import_chunk_sjqze7qg.mbi)().systemPrompt);
    else if (Hi) (0, import_chunk_w578pjby.t)("[Claude in Chrome] Skipping chrome wiring: blocked by enterprise MCP config or managed deniedMcpServers policy");
    else if (pu) (0, import_chunk_w578pjby.t)("[Claude in Chrome] Skipping chrome wiring: --safe-mode or --restricted");
    else if (xo && (zn || Vn !== null)) if (Q) (0, import_chunk_w578pjby.t)(`[Claude in Chrome] MCP server blocked by enterprise policy: ${import_chunk_prn6030k.Xi}`, { level: "warn" });
    else Yse(`MCP server blocked by enterprise policy: ${import_chunk_prn6030k.Xi}`);
    else if (xo) {
      let c = (0, import_chunk_cg8dqz0a.x)();
      try {
        (0, import_chunk_y53wbr8a.a)("tengu_claude_in_chrome_setup", { platform: (0, import_chunk_865at33z._oe)(c) });
        let { mcpConfig: k, allowedTools: L, systemPrompt: X } = (0, import_chunk_sjqze7qg.FFt)({ skipReconnectAutoOpen: (0, import_chunk_sjqze7qg.Nis)() });
        he = { ...he, ...k }, tt.push(...L), (0, import_chunk_sjqze7qg.tDn)(X);
      } catch (k) {
        return (0, import_chunk_y53wbr8a.a)("tengu_claude_in_chrome_setup_failed", { platform: (0, import_chunk_865at33z._oe)(c) }), (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Error: ${k}`), (0, import_chunk_k449cc64.i)(k), (0, import_chunk_mpk68jst.Bn)("Error: Couldn't start Claude in Chrome.");
      }
    }
    let os = o, Tt = o.strictMcpConfig || false;
    (0, import_chunk_f9x2f6cx.aNr)(Tt);
    let $i = o.includeUnsupportedModels === true;
    (0, import_chunk_zhr7rpv7.vr)().includeUnsupportedModels = $i, (0, import_chunk_f9x2f6cx.dNr)((0, import_chunk_6gx82r3c.N$e)(o)), (0, import_chunk_f9x2f6cx.N)().host.launchOptions.replaceCloudLaunchCarriesOnlyModel((0, import_chunk_6gx82r3c.zYs)(o, { runsOnAnotherMachine: uo, resumeInCloud: xn })), (0, import_chunk_f9x2f6cx.Xsa)((0, import_chunk_6gx82r3c.VYs)(o)), (0, import_chunk_f9x2f6cx.Jsa)({ ...typeof o.appendSystemPrompt === "string" && o.appendSystemPrompt !== "" && { appendSystemPrompt: o.appendSystemPrompt }, ...o.systemPromptSnapshot !== void 0 && { systemPromptSnapshot: o.systemPromptSnapshot }, ...ot === void 0 && typeof o.agent === "string" && o.agent !== "" && { agent: o.agent }, ...ot === void 0 && typeof o.agents === "string" && o.agents !== "" && { agents: o.agents } }), (0, import_chunk_f9x2f6cx.Saa)((0, import_chunk_63s07fe6.Qje)(o.permissionPrompts) ? import_chunk_63s07fe6.Ryo : (0, import_chunk_63s07fe6.xyo)({ permissionPromptTool: o.permissionPromptTool, sdkUrl: Fe })), (0, import_chunk_f9x2f6cx.Q6e)([...(0, import_chunk_mmvajxhx.GLe)((0, import_chunk_mmvajxhx.Iun)({ settings: typeof o.settings === "string" ? o.settings : void 0, managedSettings: typeof o.managedSettings === "string" ? o.managedSettings : void 0, pluginDir: (0, import_chunk_f9x2f6cx.Rv)(), pluginDirNoMcp: (0, import_chunk_f9x2f6cx.ZM)(), addDir: _t, mcpConfig: (0, import_chunk_nnsc6a48.bCa)(rt), strictMcpConfig: Tt, restricted: je, settingSources: (0, import_chunk_xzvhvaa2.Yze)() }, import_path5.resolve)), ...Vr ? ["--fallback-model", Vr] : [], ...oe ? ["--allow-dangerously-skip-permissions"] : [], ...eo ? ["--disable-slash-commands"] : [], ...$i ? ["--include-unsupported-models"] : [], ...(os.channels ?? []).flatMap((c) => ["--channels", c]), ...Wr !== void 0 ? [wi ? "--watch-artifact-no-autoreact" : "--watch-artifact", Wr] : []]);
    let qn = (0, import_chunk_bzyb60p0.Gmi)({ dynamicMcpConfig: he, strictMcpConfig: Tt });
    if (qn.kind === "refuse") return (0, import_chunk_mpk68jst.Bn)(qn.message);
    if (qn.dropped.length > 0) {
      let { servers: c, dropped: k } = qn;
      he = c, To = (0, import_chunk_865at33z.fI)(To, (X, V) => Object.hasOwn(c, V));
      let L = `the enterprise MCP config (managed-mcp.json) keeps exclusive control over MCP servers; ignoring ${k.length} dynamically configured MCP ${(0, import_chunk_7cfjrnwy.O)(k.length, "server")}: ${k.join(", ")}`;
      if ((0, import_chunk_w578pjby.t)(L, { level: "warn" }), (0, import_chunk_f9x2f6cx.Se)() && (process.stderr.isTTY || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) && !po) Yse(L, { stderrPrefix: "Warning: " });
    }
    if (!(0, import_chunk_f9x2f6cx.Se)() && !je && !(0, import_chunk_2gtmjt3y.Xn)() && (0, import_chunk_hj4mak61.luo)()) try {
      let { setupComputerUseMCP: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1r2vt5d6.js"))), { mcpConfig: k, allowedTools: L } = c();
      he = { ...he, ...k }, tt.push(...L);
    } catch (c) {
      (0, import_chunk_w578pjby.t)(`[Computer Use MCP] Setup failed: ${(0, import_chunk_jv7av99m.d)(c)}`);
    }
    (0, import_chunk_f9x2f6cx.AL)(_t);
    let nn, Wi = (c, k) => {
      let L = [], X = [];
      for (let V of c) if (V.startsWith("plugin:")) {
        let Be = V.slice(7), pt = Be.indexOf("@");
        if (pt <= 0 || pt === Be.length - 1) X.push(V);
        else L.push({ kind: "plugin", name: Be.slice(0, pt), marketplace: Be.slice(pt + 1) });
      } else if (V.startsWith("server:") && V.length > 7) L.push({ kind: "server", name: V.slice(7) });
      else X.push(V);
      if (X.length > 0) (0, import_chunk_mpk68jst.Bn)(`${k} entries must be tagged: ${X.join(", ")}
  plugin:<name>@<marketplace>  \u2014 plugin-provided channel (allowlist enforced)
  server:<name>                \u2014 manually configured MCP server`);
      return L;
    }, { channels: ns, dangerouslyLoadDevelopmentChannels: rs } = os, sn = [];
    if (ns && ns.length > 0) sn = Wi(ns, "--channels"), (0, import_chunk_f9x2f6cx.CPt)(sn);
    if (!Q) {
      if (rs && rs.length > 0) nn = Wi(rs, "--dangerously-load-development-channels");
    }
    if (sn.length > 0 || (nn?.length ?? 0) > 0) {
      let c = (k) => (0, import_chunk_54j6k3fn.Hdl)(k.flatMap((L) => L.kind === "plugin" ? [`${L.name}@${L.marketplace}`] : []), import_chunk_9vbqjvhj.Wor);
      (0, import_chunk_y53wbr8a.a)("tengu_mcp_channel_flags", { channels_count: sn.length, dev_count: nn?.length ?? 0, plugins: c(sn), dev_plugins: c(nn ?? []) });
    }
    if (ie.length > 0) {
      let { shouldToolsListOptInToBrief: c } = require("/$bunfs/root/chunk-6t7ttdme.js");
      if (c((0, import_chunk_qebpc5de.$f)(ie))) (0, import_chunk_f9x2f6cx.mpt)(true);
    }
    if ((0, import_chunk_f9x2f6cx.Se)()) (0, import_chunk_f9x2f6cx.k2)(true);
    if ((0, import_chunk_k5jn5rx9.ote)("action_before_permission_context"), await (0, import_chunk_865at33z.ioe)()) (0, import_chunk_5e3gtsn9.w9)();
    let Gi = performance.now(), Jn = await tl({ allowedTools: tt, disallowedTools: nt, baseTools: ie, restricted: je, permissionMode: Le, modeChosenByHost: (0, import_chunk_f9x2f6cx.Se)() && Ve === Le, allowDangerouslySkipPermissions: it, addDirs: _t, storageV5: y }), ae = Jn.toolPermissionContext;
    if (ao) ae = _d(ae);
    if (Xr) ae = { ...ae, ...Xr };
    let { warnings: Vi, overlyBroadBashPermissions: Dg } = Jn;
    if (oo ??= Jn.bypassCapabilityNotification, (0, import_chunk_zjhyjv3y.zo)("permission_context_ms", performance.now() - Gi, Gi), !(0, import_chunk_f9x2f6cx.Se)() || Z !== "json" && Z !== "stream-json" && import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") Vi.forEach((c) => Yse(c)), Gn.push(...(0, import_chunk_7bgv8haz.kka)(Jn.securityWarnings.map((c) => ({ ...c, text: kr(c.text) }))));
    else Vi.forEach((c) => (0, import_chunk_w578pjby.t)(`[permissions] ${(0, import_chunk_13h3tw8q.js)(c)}`, { level: "warn" }));
    let Ki = (0, import_chunk_p1ewvgeh.DSs)(ae);
    if (Ki !== void 0) g$e(Ki, { key: "bypass-removal-waiver", outputFormat: Z, onStderrToo: true });
    let zi = ud({ allowedTools: tt, disallowedTools: nt, tools: ie }), qi = Z === "stream-json" && (0, import_chunk_3t7ve0wy.v0o)();
    for (let [c, k] of zi.entries()) Gn.push({ text: k }), g$e(k, { key: `cut-tool-list-${c}`, outputFormat: Z, onStderrToo: qi });
    let mu = qi ? zi : [];
    ap((0, import_chunk_f9x2f6cx.N)(), Rs, Ie), (0, import_chunk_y6h5d62w.QWa)();
    let Qn = Q && !po && (0, import_chunk_bzyb60p0.HNt)() ? (0, import_chunk_sjqze7qg.T5)(v).then((c) => {
      (0, import_chunk_sjqze7qg.s5e)();
      let { allowed: k, blocked: L } = (0, import_chunk_bzyb60p0.SH)(c ?? {});
      if (L.length > 0) (0, import_chunk_mpk68jst.PN)(`Warning: claude.ai MCP ${(0, import_chunk_7cfjrnwy.O)(L.length, "server")} blocked by enterprise policy: ${L.join(", ")}`);
      return k;
    }) : Promise.resolve({});
    if (Wn) {
      if ((0, import_chunk_f9x2f6cx.JEe)(true), (0, import_chunk_f9x2f6cx.kPt)()) (0, import_chunk_bzyb60p0.N_)("remote thin client: synced plugin lane closes"), (0, import_chunk_f9x2f6cx.Ala)();
    }
    (0, import_chunk_w578pjby.t)("[STARTUP] Loading MCP configs...");
    let Ji = Date.now(), No = { value: void 0 }, ss = Q && (0, import_chunk_xcgcdx61.WRt)() && (0, import_chunk_bzyb60p0.D3e)() ? Qn.catch(() => ({})) : Promise.resolve(), fu = !(Tt || (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_f9x2f6cx.Hn)()) && (0, import_chunk_bzyb60p0.aro)(), ro = (Tt || (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_f9x2f6cx.Hn)() ? Promise.resolve({ servers: {} }) : ss.then(() => (0, import_chunk_bzyb60p0.Ik)(he, { storageV5: y, credentials: v }))).then((c) => (No.value = Date.now() - Ji, c)), Qi = (0, import_chunk_865at33z.Yi)(), ea = (0, import_chunk_865at33z.wy)();
    if (J && J !== "text" && J !== "stream-json") return (0, import_chunk_mpk68jst.Bn)(`Error: Unknown input format "${J}".`);
    if (J === "stream-json" && Z !== "stream-json") return (0, import_chunk_mpk68jst.Bn)("Error: --input-format=stream-json requires output-format=stream-json.");
    if (J === "stream-json" && !(0, import_chunk_f9x2f6cx.Se)()) return (0, import_chunk_mpk68jst.Bn)("Error: --input-format=stream-json requires --print.");
    {
      let c = (0, import_chunk_2mwshd9r.K0l)(Fe);
      if (c !== null) return await (0, import_chunk_y53wbr8a.Ma)("tengu_sdk_url_host_rejected", { code: (0, import_chunk_78g0060s.f)(c.code) }), (0, import_chunk_mpk68jst.ho)(`Error: --sdk-url rejected: ${c.reason}. This flag is reserved for Remote Control worker processes connecting to Anthropic's backend.`);
    }
    if (Fe) {
      if (J !== "stream-json" || Z !== "stream-json") return (0, import_chunk_mpk68jst.Bn)("Error: --sdk-url requires both --input-format=stream-json and --output-format=stream-json.");
      if ((0, import_chunk_42nfpkzm.zle)().length > 0) return (0, import_chunk_mpk68jst.Bn)(`Error: ${import_chunk_m417dzmj.oMo} (not a claude.ai login), and Remote Control is not available with that sign-in.`, void 0, void 0, import_chunk_m417dzmj.rMo);
      if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) {
        await (0, import_chunk_7q6ee47s.Zh)();
        let c = (0, import_chunk_2nv4wrez.Dp)("allow_remote_control", "Remote Control", "is");
        if (c) return await (0, import_chunk_21y9ek9j.RG)("allow_remote_control", "startup"), (0, import_chunk_mpk68jst.ho)(c);
        if ((0, import_chunk_2yx6c1y2._p)().settings.disableRemoteControl === true) return (0, import_chunk_mpk68jst.Bn)(`Error: ${import_chunk_8kp03twd.Jae}`);
      }
      (0, import_chunk_865at33z.SRl)(Fe);
    }
    if (o.sessionPersistence === false) {
      if (!Q) return (0, import_chunk_mpk68jst.Bn)("Error: --no-session-persistence only works with --print.");
      (0, import_chunk_f9x2f6cx.JNr)(true);
    }
    rl({ sdkUrl: Fe, isNonInteractiveSession: Q }), sl({ sdkUrl: Fe, isNonInteractiveSession: Q }), il(), al();
    let ls = { hydrate: import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH, connect: import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_EARLY_REMOTE_CONNECT }, na = (ls.hydrate || ls.connect) && Fe && o.resume ? Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mwypm51p.js"))).then((c) => c.startEarlyRemoteWork(Fe, y, ls)) : void 0, gu = na?.then((c) => c.hydrateReads), hu = na?.then((c) => c.link);
    if (o.awaitInitialize) {
      if (J !== "stream-json") return (0, import_chunk_mpk68jst.Bn)("Error: --await-initialize requires --input-format=stream-json.");
      if (Fe) return (0, import_chunk_mpk68jst.Bn)("Error: --await-initialize cannot be used with --sdk-url.");
    }
    if (o.awaitClaim) {
      if (J !== "stream-json" || Z !== "stream-json") return (0, import_chunk_mpk68jst.Bn)("Error: --await-claim requires --print with --input-format=stream-json and --output-format=stream-json.");
      if (o.continue || o.resume || o.forkSession) return (0, import_chunk_mpk68jst.Bn)("Error: --await-claim cannot be combined with --continue, --resume or --fork-session.");
      if (Fe) return (0, import_chunk_mpk68jst.Bn)("Error: --await-claim cannot be used with --sdk-url.");
      if ((0, import_chunk_r6r2wdsw.Np)()) return (0, import_chunk_mpk68jst.Bn)("Error: --await-claim cannot be used with CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: the subprocess sandbox pins its protected paths to the launch directory at start-up.");
      if ((0, import_chunk_2yx6c1y2.kJe)()) return (0, import_chunk_mpk68jst.Bn)("Error: --await-claim cannot be used with permissions.blockFileToolReadsOutsideWorkingDirectories: that setting admits only the folders given at the launch, and a spare is launched before its project is known. Start the session in its project's folder instead.");
      (0, import_chunk_f9x2f6cx.bNr)();
    } else if (o.holdRepositoryWhileParked) return (0, import_chunk_mpk68jst.Bn)("Error: --hold-repository-while-parked requires --await-claim.");
    if (o.replayUserMessages) {
      if (J !== "stream-json" || Z !== "stream-json") return (0, import_chunk_mpk68jst.Bn)("Error: --replay-user-messages requires both --input-format=stream-json and --output-format=stream-json.");
    }
    if (o.promptSuggestions && (!Q || Z !== "stream-json")) return (0, import_chunk_mpk68jst.Bn)("Error: --prompt-suggestions requires --print and --output-format=stream-json (prompt_suggestion messages only appear in stream-json output).");
    if (hl({ promptSuggestions: o.promptSuggestions, cloudOrigin: import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? (0, import_chunk_3t7ve0wy.Li)() : void 0 }), xr) {
      if (!Q || Z !== "stream-json") {
        if (Vt) return (0, import_chunk_mpk68jst.Bn)("Error: --include-partial-messages requires --print and --output-format=stream-json.");
        xr = false;
      }
    }
    if (Nr) {
      if (!Q || Z !== "stream-json") {
        if (zt) return (0, import_chunk_mpk68jst.Bn)("Error: --forward-subagent-text requires --print and --output-format=stream-json.");
        Nr = false;
      }
    }
    if (o.planModeInstructions && !Q) return (0, import_chunk_mpk68jst.Bn)("Error: --plan-mode-instructions only works with --print.");
    if (!Q) {
      let c = cl(import_chunk_6k3h3wej.TTe.get(), { explicitCloudLaunch: co !== null && !vi });
      if (c !== void 0) return pl(c);
    }
    let $e = await (0, import_chunk_nnsc6a48.ECa)(e || "", J ?? "text");
    if (Q) (0, import_chunk_f9x2f6cx.CNr)((0, import_chunk_f9x2f6cx.TNr)({ hasStreamingInput: typeof $e !== "string", sdkUrl: Fe }));
    if (H !== void 0 && typeof $e === "string") g$e(H, { key: "prompt-read-as-option-value", outputFormat: Z, onStderrToo: $e === "" });
    let Su = typeof $e === "string" ? $e : null;
    (0, import_chunk_k5jn5rx9.ts)("action_after_input_prompt");
    let Bt;
    if ((0, import_chunk_2b1wcpvk.mhl)({ isNonInteractiveSession: Q, isBgSession: (0, import_chunk_865at33z.Qt)() }) && o.jsonSchema) {
      try {
        Bt = (0, import_chunk_w578pjby.te)(o.jsonSchema);
      } catch (c) {
        return (0, import_chunk_mpk68jst.Bn)(`Error: --json-schema is not valid JSON: ${(0, import_chunk_jv7av99m.d)(c)}`);
      }
      if (typeof Bt !== "object" || Bt === null || Array.isArray(Bt)) return (0, import_chunk_mpk68jst.Bn)("Error: --json-schema must be a JSON object");
    }
    (0, import_chunk_k5jn5rx9.ts)("action_before_setup"), (0, import_chunk_w578pjby.t)("[STARTUP] Running setup()...");
    let yu = Date.now(), ra = performance.now(), { setup: _u } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-jq3ec90n.js")));
    (0, import_chunk_zjhyjv3y.zo)("setup_import_ms", performance.now() - ra, ra);
    let sa = o.messagingSocketPath, an = (0, import_chunk_18rsj2ts.pe)();
    try {
      (0, import_chunk_8nvd6fqx.ih)();
    } catch (c) {
      (0, import_chunk_k449cc64.i)(c);
      let k = (0, import_chunk_jv7av99m.d)(c);
      return (0, import_chunk_mpk68jst.Hp)(k), await (0, import_chunk_chstxdde.xj)({ sessionId: (0, import_chunk_f9x2f6cx.W)(), message: k, reason: "temp_dir_unusable" }), (0, import_chunk_mpk68jst.ho)(void 0, "temp_dir_unusable");
    }
    (0, import_chunk_xb56zerw.L_e)(), (0, import_chunk_424x9gf0.Det)();
    let ds = !!h?.host, cs, us = false, ps = async () => {
      if (cs !== void 0 && !us) return;
      try {
        let { shouldRefreshArtifactRoster: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-t24x4axy.js")));
        if (!c()) return;
        let { artifactRosterFetchDeferred: k, artifactRosterFresh: L, artifactRosterIdentityKnown: X, refreshArtifactRoster: V } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-weq334yq.js")));
        if (!X() || L() || k()) return;
        us = false, cs = V({ credentials: v, storageV5: y, timeoutMs: 5e3 }), cs.then((Be) => {
          us = !Be;
        });
      } catch (c) {
        (0, import_chunk_w578pjby.t)(`Artifact roster kick failed: ${(0, import_chunk_jv7av99m.d)(c)}`);
      }
    };
    if (Q && !tEn(Ie)) await ps();
    if (!(0, import_chunk_7q6ee47s.dlt)()) (0, import_chunk_7q6ee47s.zvt)();
    else if (await (0, import_chunk_7q6ee47s.VYe)() !== "skipped") (0, import_chunk_k5jn5rx9.ts)("action_after_policy_limits_cold_await");
    let ia;
    if (!(0, import_chunk_f9x2f6cx.Se)()) await (0, import_chunk_0dep9bd9.ZXn)({ showBlockedScreen: C.showOrgConfigBlockedScreen });
    {
      let c = (0, import_chunk_awvk50qj.z5r)(ae, { onNotification: (k) => {
        oo ??= k;
      } });
      if (c !== ae) ae = c, Le = c.mode;
      if ((0, import_chunk_f9x2f6cx.Se)()) oo ??= (0, import_chunk_awvk50qj.S3o)(), (0, import_chunk_awvk50qj.b3o)();
    }
    let Zn = (0, import_chunk_7q6ee47s._2i)();
    if (Zn) {
      (0, import_chunk_zjhyjv3y.zo)("policy_limits_await_ms", Zn.waitedMs, Zn.firstAtMs);
      let c = (0, import_chunk_7q6ee47s.QTr)();
      (0, import_chunk_42tcgre6.q)(c ? "warn" : "info", "policy_limits_cold_await", { budget_ms: import_chunk_7q6ee47s.Gvt, waited_ms: Math.round(Zn.waitedMs), timed_out: c });
    }
    if ((0, import_chunk_zjhyjv3y.XEl)(import_chunk_7q6ee47s.g2i, () => (0, import_chunk_6e68m1dj.Qp)() && (0, import_chunk_865at33z.vdt)()), (0, import_chunk_bzyb60p0.sGa)((0, import_chunk_f9x2f6cx.N)(), v, () => Pc(Ie) || import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER)) (0, import_chunk_k5jn5rx9.$8)({ early_plugins_sync: 1 });
    if ((0, import_chunk_539hrhrd.rka)((0, import_chunk_f9x2f6cx.N)(), y, v, () => Pc(Ie) || import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER)) (0, import_chunk_k5jn5rx9.$8)({ early_skills_sync: 1 });
    let vu = (Jo && (0, import_chunk_865at33z.ni)() || Mo) && !tEn(Ie) && !import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER && (0, import_chunk_sjqze7qg.w7a)((0, import_chunk_f9x2f6cx.N)());
    Bd(import_chunk_bzyb60p0.gur);
    let ms = _u(an, ds ? "default" : Le, ds ? false : it, Ie, Go, Fn, Je ? (0, import_chunk_mzmcvr6c.ht)(Je) : void 0, Ir, sa, y, v, Ie && (lo !== null || xn !== null) && (0, import_chunk_bzyb60p0.D2a)(), !uo, Boolean(o.resume || o.continue || o.fromPr), (typeof o.resume === "string" || o.continue === true) && !o.forkSession && !Ao);
    if (!Ie) {
      let c = (0, import_chunk_865at33z.ce)(), k = () => {
        c.setupBeforeHooksLoad = void 0;
      };
      c.setupBeforeHooksLoad = ms, ms.then(k, k);
    }
    if ((0, import_chunk_bzyb60p0.PBe)(v) && !Ie && !(0, import_chunk_2gtmjt3y.Xn)() && !(0, import_chunk_2gtmjt3y.as)()) (0, import_chunk_bzyb60p0.pi)(y, v).catch(() => {
    });
    let aa = !Ie && ol(xs(Q));
    if (!Ie && !aa) (0, import_chunk_bzyb60p0.Men)(an, y);
    if ((0, import_chunk_f9x2f6cx.Yy)()) await sd((0, import_chunk_zddv3vvj.h0e)());
    let fs = Ie ? null : (0, import_chunk_bzyb60p0.XD)(an, y);
    fs?.catch(() => {
    });
    let la = performance.now();
    try {
      await ms;
    } catch (c) {
      if (c instanceof import_chunk_jv7av99m.aE) return (0, import_chunk_mpk68jst.Bn)(c.message);
      throw c;
    }
    if ((0, import_chunk_zjhyjv3y.zo)("setup_ms", performance.now() - la, la), (0, import_chunk_w578pjby.t)(`[STARTUP] setup() completed in ${Date.now() - yu}ms`), (0, import_chunk_k5jn5rx9.ts)("action_after_setup"), Je && G) {
      let { rekeySessionTeamAtStartup: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z40hbys4.js")));
      G = await c(y) ?? G;
    }
    await ps();
    let ye = (0, import_chunk_f9x2f6cx.N)();
    (0, import_chunk_bzyb60p0.N_t)(ye, ae);
    let gs = !!o.replayUserMessages;
    if (gs = Qd({ replayUserMessagesFlag: gs, outputFormat: Z, explicitSocketPath: sa, socketBound: import_chunk_c203g5kd.zM.CLAUDE_CODE_MESSAGING_SOCKET !== void 0 }), (0, import_chunk_f9x2f6cx.Se)()) {
      (0, import_chunk_5e3gtsn9.w1)();
      let c = oc();
      if (c !== void 0) return (0, import_chunk_mpk68jst.Hp)(c), await (0, import_chunk_cqa9hrgx.Gt)("user_delegated_session_start", "refused_at_start", { api_provider: (0, import_chunk_zhr7rpv7.tA)() }), (0, import_chunk_mpk68jst.ho)();
      if (N2r(ye.host), ia = await (0, import_chunk_0dep9bd9.K6s)(() => (0, import_chunk_865at33z.SM)(v)), (0, import_chunk_qwcebyxc.g$n)()) await Ag(Z);
      if (J === "stream-json") Qa(ye.host);
      if (to && !Jo) {
        Jo = true;
        let k = Rn(to);
        if (k !== void 0) {
          if (Mo && (0, import_chunk_865at33z.wde)()) {
            (0, import_chunk_k5jn5rx9.ts)("before_idle_gc");
            try {
              (await Promise.resolve().then(() => __toESM(require("bun:jsc")))).edenGC();
            } catch {
            }
            (0, import_chunk_k5jn5rx9.ts)("after_idle_gc");
          }
          Ot = { site: "gb-before-context", result: await Xo("growthbook_init_ms", { before: "before_growthbook_init", after: "after_growthbook_init" }, k) };
        }
      }
      if (!(0, import_chunk_f9x2f6cx.Yy)()) if (po) (0, import_chunk_42tcgre6.q)("info", "git_status_skipped_headless_cloud_arm");
      else if (cjo(Boolean(o.continue || o.resume))) (0, import_chunk_42tcgre6.q)("info", "git_status_skipped_resume");
      else (0, import_chunk_bzyb60p0.Hnt)(ye);
      if (!(0, import_chunk_f9x2f6cx.Yy)()) if (!F2r(Boolean(o.continue || o.resume))) (0, import_chunk_bzyb60p0.$F)(ye, y, v);
      else (0, import_chunk_h8v51dgb.iai)(v);
      (0, import_chunk_865at33z.vCo)();
    }
    let ln = o.name ? (0, import_chunk_xfj2cwfv.Ba)(o.name) || void 0 : void 0;
    if (ln) (0, import_chunk_bzyb60p0.s7)(ln), (0, import_chunk_bzyb60p0.OSt)(ln);
    let bu = import_chunk_c203g5kd.s.CLAUDE_CODE_MODEL_NOBODY_CHOSE === true;
    import_chunk_c203g5kd.s.unset("CLAUDE_CODE_MODEL_NOBODY_CHOSE");
    let hs = bu && Fe !== void 0 && (0, import_chunk_6e68m1dj.qg)() && (0, import_chunk_zhr7rpv7.sLs)();
    if (hs) (0, import_chunk_w578pjby.t)("Nobody chose the model: starting on the default of the own cloud account");
    let dn = hs ? void 0 : o.model, un = Ie ? (0, import_chunk_18rsj2ts.pe)() : an, da = !Jo ? Rn(to) : void 0;
    if (da !== void 0) Ot = { site: "gb-before-tools", result: await Xo("growthbook_init_ms", { before: "before_growthbook_init", after: "after_growthbook_init" }, da) };
    if (to) (0, import_chunk_zjhyjv3y.VEl)(Mo), (0, import_chunk_y53wbr8a.a)("tengu_startup_flag_fetch_wait", { waited: Ot !== void 0, site: (0, import_chunk_78g0060s.fe)(Ot?.site), wait_ms: Math.round(Ot?.result.waitMs ?? 0), timed_out: Ot?.result.timedOut ?? false, fetched: (0, import_chunk_865at33z.ni)(), warm_wake_early_fetch: Mo, kick_from_init: (0, import_chunk_zjhyjv3y.nEo)(), kick_on_warm_cache: (0, import_chunk_zjhyjv3y.rEo)(), flag_fetch_kick: (0, import_chunk_78g0060s.fe)((0, import_chunk_zjhyjv3y.zEl)()) }), ae = { ...ae, chromeClassifierFloorEnabled: (0, import_chunk_awvk50qj._3o)() };
    await ps();
    let ca = (0, import_chunk_tfs0ssqe.JLn)();
    if (ca || (0, import_chunk_539hrhrd.oka)(ye)) (0, import_chunk_539hrhrd.WIe)(ye, y, v);
    else if ((0, import_chunk_f9x2f6cx.gP)()) (0, import_chunk_bzyb60p0.b5)(), (0, import_chunk_539hrhrd.z2r)(y).catch(import_chunk_k449cc64.i);
    Ed();
    let Eu = (0, import_chunk_jhdsf4g3.xuo)();
    if ((0, import_chunk_bzyb60p0.nGa)(ye, () => (0, import_chunk_bzyb60p0.dGa)(v)), Eu) (0, import_chunk_bzyb60p0.I_t)(ye, v), wd(ye, v, y);
    else if ((0, import_chunk_bzyb60p0.iGa)(ye)) (0, import_chunk_bzyb60p0.I_t)(ye, v);
    else if ((0, import_chunk_f9x2f6cx.X8)()) (0, import_chunk_bzyb60p0.oQr)().catch(import_chunk_k449cc64.i);
    else if ((0, import_chunk_jhdsf4g3.zsl)()) (0, import_chunk_bzyb60p0.cGa)().catch(import_chunk_k449cc64.i);
    if ((0, import_chunk_bzyb60p0.UGa)(ye), vu) (0, import_chunk_sjqze7qg.k7a)(ye, { credentials: v, storageV5: y });
    else (0, import_chunk_sjqze7qg.ISi)(ye, { credentials: v, storageV5: y });
    let ua = Ie ? null : aa ? nl(ro, () => (0, import_chunk_bzyb60p0.Fm)(un, y)) : (0, import_chunk_bzyb60p0.Fm)(un, y);
    if (ua?.catch(() => {
    }), (0, import_chunk_hghmr3e2.Iqe)() && (0, import_chunk_865at33z.b)("tengu_cobalt_thicket", true)) (0, import_chunk_d57v19zt.PHl)(true);
    (0, import_chunk_w578pjby.t)("[STARTUP] Loading commands and agents...");
    let wu = Date.now();
    if ((0, import_chunk_bzyb60p0.PBe)(v) && Ie && !(0, import_chunk_2gtmjt3y.Xn)() && !(0, import_chunk_2gtmjt3y.as)()) (0, import_chunk_bzyb60p0.pi)(y, v).catch(() => {
    });
    let pa = performance.now();
    const Au = __using(_stack2, yg?.holdArtifactStartupTelemetry());
    let mn = await ml({ cwd: un, toolPermissionContext: ae, applyCoordinatorFilter: true, agentsJson: Lt, agentSetting: He, commandsPromise: ua, agentDefsPromise: fs && (0, import_chunk_bzyb60p0.yci)(fs, an, y), deferCommands: xs(Q), onToolsLoaded: () => (0, import_chunk_k5jn5rx9.ts)("action_tools_loaded"), storageV5: y });
    (0, import_chunk_zjhyjv3y.zo)("tools_commands_load_ms", performance.now() - pa, pa);
    let { tools: Bo, mainThreadAgentDefinition: re, commands: Uo } = mn, { cliAgents: ma, deferredCommandsPromise: fa } = mn, { agentDefinitions: Dt } = mn, ga = He ?? gt?.agentType ?? ((0, import_chunk_3t7ve0wy.ph)() ? void 0 : (0, import_chunk_2yx6c1y2.wKn)("agent")), Mu = ga !== void 0 && (0, import_chunk_tc5xmewh.HQ)(Dt.activeAgents, ga) === void 0;
    if (await (0, import_chunk_bzyb60p0.Ucr)(Mu, !He && !(0, import_chunk_3t7ve0wy.ph)(), y, v)) {
      if (Dt = await (0, import_chunk_cktd05v4.M2o)(ma, y), He) re = KXn(Dt.activeAgents, He), (0, import_chunk_f9x2f6cx.VOe)(re?.agentType);
    }
    if (He && !re && J !== "stream-json" && He !== import_chunk_vkg6ng3t.NDt.agentType && !o.resume && !o.continue && !import_chunk_c203g5kd.s.CLAUDE_BG_POST_CLEAR_RESPAWN) {
      let c = Dt.activeAgents.map((k) => k.agentType).join(", ");
      return (0, import_chunk_mpk68jst.Bn)(`--agent '${He}' not found. Available agents: ${c || "(none)"}`);
    }
    if ((0, import_chunk_k5jn5rx9.$8)({ tool_count: Bo.length, skill_count: (0, import_chunk_4smdap7r.U)(Uo, import_chunk_tfs0ssqe.KSe) }), fa?.then((c) => (0, import_chunk_k5jn5rx9.$8)({ skill_count: (0, import_chunk_4smdap7r.U)(c, import_chunk_tfs0ssqe.KSe) }), () => {
    }), (0, import_chunk_bzyb60p0.pi)(y, v).then((c) => (0, import_chunk_k5jn5rx9.$8)({ plugin_count: c.enabled.length }), () => {
    }), !re && (0, import_chunk_yvad17bv.xi)() && gt?.agentId && gt?.agentName && gt?.teamName && gt?.agentType) {
      let c = (0, import_chunk_tc5xmewh.HQ)(Dt.activeAgents, gt.agentType);
      if (c) re = c, (0, import_chunk_f9x2f6cx.VOe)(c.agentType);
      else (0, import_chunk_w578pjby.t)(`[teammate] Custom agent ${gt.agentType} not found in available agents`);
    }
    let ha, fo = null, fn = He ?? ((0, import_chunk_3t7ve0wy.ph)() ? void 0 : (0, import_chunk_2yx6c1y2.wKn)("agent"));
    if (!re && !He && fn) {
      if (re = KXn(Dt.activeAgents, fn), fo = (0, import_chunk_2yx6c1y2.kv)("agent"), re?.agentType !== fn && (0, import_chunk_f9x2f6cx.JM)()) (0, import_chunk_f9x2f6cx.wNr)(fn);
      (0, import_chunk_f9x2f6cx.VOe)(re?.agentType);
      let c = (0, import_chunk_r3mm3x33._$l)();
      if (re && c !== void 0 && fo === null) {
        let L = (0, import_chunk_mgntjepj.aAl)(c);
        ha = { key: "plugin-agent-setting-deprecated", kind: "contextual", text: L, priority: "high" }, g$e(L, { key: "plugin-agent-setting-deprecated", outputFormat: Z }), (0, import_chunk_cqa9hrgx.l)("plugin_load_settings", "plugin_agent_setting_deprecated");
      }
    }
    if ((0, import_chunk_f9x2f6cx.Yy)() && re?.filePath !== void 0) await id(re.filePath);
    if ((0, import_chunk_f9x2f6cx.Yy)() && re?.memory !== void 0 && re.memory !== "user") ad();
    if ((0, import_chunk_f9x2f6cx.Yy)()) await Xmt();
    if ((0, import_chunk_f9x2f6cx.Yy)() && re !== void 0) {
      let c = re.source, k = fo === null || fo === "userSettings" || fo === "flagSettings" || fo === "policySettings" || fo === "projectSettings" && (0, import_chunk_xzvhvaa2.Ko)().includes("userSettings") && (0, import_chunk_2yx6c1y2.vm)(), L = (0, import_chunk_57sd0ak5.FU)(c) || c === "userSettings" || c === "flagSettings";
      if (!k || !L) ld();
    }
    if ((0, import_chunk_f9x2f6cx.Yy)()) Ejo(kjo());
    ae = (0, import_chunk_knp99ee7.vqo)(ae, re, "cliArg"), (0, import_chunk_w578pjby.t)(`[STARTUP] Commands and agents loaded in ${Date.now() - wu}ms`), (0, import_chunk_k5jn5rx9.ts)("action_commands_loaded");
    let Sa;
    if (Bt) {
      let c = (0, import_chunk_2b1wcpvk.nln)(Bt);
      if ("tool" in c) {
        if (c.unsatisfiable) (0, import_chunk_w578pjby.t)(`--json-schema: ${(0, import_chunk_2b1wcpvk.tln)(c.unsatisfiable)}: ${c.unsatisfiable.message}`, { level: "warn" });
        let k = c.tool;
        if ((0, import_chunk_865at33z.Qt)()) {
          let L = k.call.bind(k);
          k = { ...k, async call(X, V, Be, pt, bn) {
            let Me = await L(X, V, Be, pt, bn), { stashBackgroundStructuredResult: st } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-d39h1zmc.js")));
            return st(X), Me;
          } };
        }
        Sa = k, Bo = [...Bo, k], (0, import_chunk_y53wbr8a.a)("tengu_structured_output_enabled", { schema_property_count: Object.keys(Bt.properties || {}).length, has_required_fields: Boolean(Bt.required) });
      } else return await (0, import_chunk_y53wbr8a.Ma)("tengu_structured_output_failure", { error: (0, import_chunk_78g0060s.S)("Invalid JSON schema") }), (0, import_chunk_mpk68jst.ho)(`Error: --json-schema is not a valid JSON Schema: ${c.error}`);
    }
    if (re) (0, import_chunk_y53wbr8a.a)("tengu_agent_flag", { agentType: (0, import_chunk_78g0060s.Xge)(re), ...He && { source: (0, import_chunk_78g0060s.S)("cli") } });
    if (re?.agentType) (0, import_chunk_bzyb60p0.jrt)(re.agentType);
    if (Q && re && !(0, import_chunk_bzyb60p0.ic)(re)) {
      let c = re.getSystemPrompt();
      if (c) {
        if (re.appendSystemPrompt) mo = mo ? `${c}

${mo}` : c;
        else if (!$n) $n = c;
      }
    }
    if (re?.initialPrompt) {
      let c = re.initialPrompt;
      if (typeof $e === "string") $e = c.includes("{{intent}}") ? c.split("{{intent}}").join($e) : $e ? `${c}

${$e}` : c;
      else if (!$e) $e = c;
    }
    let Pu, _s = Boolean(o.continue || o.resume || !Q && o.fromPr || Ao), Cs, ya = false;
    if (Ac) try {
      let c = await Ac.getRoutineStartupModel({ routineName: o.routine?.trim(), userSpecifiedModel: dn, agentModel: re?.model, isSessionRestore: _s, cwd: (0, import_chunk_f9x2f6cx.Oo)(), storageV5: y });
      if (c.status === "model") Cs = c.model;
      else if (c.status === "transient_skip") ya = true;
    } catch (c) {
      (0, import_chunk_k449cc64.i)(c);
    }
    let vs = Cs ?? re?.model, _a = performance.now();
    await (0, import_chunk_8cykvqs9.V2r)({ headless: (0, import_chunk_3t7ve0wy.kb)() }), (0, import_chunk_zjhyjv3y.zo)("model_catalog_decision_ms", performance.now() - _a, _a), (0, import_chunk_k5jn5rx9.ts)("action_model_catalog_decided");
    let tr, yn, Tu = (0, import_chunk_f9x2f6cx.Yy)() && ((0, import_chunk_5e3gtsn9.DTr)() !== void 0 || (0, import_chunk_865at33z.qxe)() || (0, import_chunk_865at33z.mpn)() || (0, import_chunk_865at33z.mdt)());
    if ((0, import_chunk_f9x2f6cx.Se)() && !Tu && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_BEDROCK_AUTH && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_VERTEX_AUTH && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_MANTLE_AUTH) try {
      let { apply3PDefaultFallbacks: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5yvkyeeq.js")));
      if (Fe && (0, import_chunk_6e68m1dj.qg)() && (0, import_chunk_zhr7rpv7.sLs)()) yn = (0, import_chunk_865at33z.St)((0, import_chunk_865at33z.qd)(), { identity: true });
      let { lines: k, mantleOverride: L } = await c({ pendingUserModel: dn != null ? dn : vs === "inherit" ? void 0 : vs });
      if (tr = L, k.length === 0) yn = void 0;
      for (let X of k) process.stderr.write(`Warning: ${X}
`);
    } catch (c) {
      (0, import_chunk_k449cc64.i)(c);
    }
    if (o.clientDataUrl) import_chunk_c203g5kd.s.set("CLAUDE_CODE_CLIENT_DATA_URL", o.clientDataUrl);
    if (o.allowOtherModels) import_chunk_c203g5kd.s.set("CLAUDE_CODE_ALLOW_OTHER_MODELS", true);
    let Ca = await (0, import_chunk_n69k58aw.MWa)({ runsOnAnotherMachine: uo });
    if (Ca !== void 0) return (0, import_chunk_mpk68jst.Bn)(Ca);
    let { effectiveModel: bs, initialMainLoopModel: Ou, resolvedInitialModel: ct, rawModelRequest: Du, restrictedModel: Iu, unservedModelSpelling: xg, settingLayer: Lg } = await zl({ userSpecifiedModel: dn, agentModel: vs, agentModelSource: Cs !== void 0 ? "routine" : "agent", routineModelTransientlySkipped: ya, storageV5: y, credentials: v });
    if ((0, import_chunk_k5jn5rx9.ts)("action_model_resolved"), Q && (0, import_chunk_qwcebyxc.g$n)() && require("/$bunfs/root/chunk-yypqg2z3.js").withdrawHeadlessCodeModeOptInForModel()) Bo = (0, import_chunk_aw5nczax.QJn)(Bo.filter((c) => c.name !== import_chunk_h4t4qfaq.vo), ae), yi("model", Z);
    let Es = (0, import_chunk_865at33z.F4)(ct);
    if (Es !== null) return (0, import_chunk_mpk68jst.Hp)(Es), await (0, import_chunk_chstxdde.xj)({ sessionId: (0, import_chunk_f9x2f6cx.W)(), message: Es, reason: "managed_settings_invalid" }), (0, import_chunk_mpk68jst.ho)(void 0, "managed_settings_invalid");
    if (tr && (bs == null || o.model === "default")) (0, import_chunk_f9x2f6cx.Ig)(tr);
    let va;
    if (yn !== void 0 && bs == null && (tr !== void 0 || (0, import_chunk_865at33z.Ld)() == null)) {
      let c = (0, import_chunk_865at33z.St)((0, import_chunk_865at33z.dt)(), { identity: true });
      if (c !== yn) va = { from: yn, to: c };
    }
    let ba = (0, import_chunk_n69k58aw.HWa)();
    if (ba !== void 0) return (0, import_chunk_mpk68jst.Bn)(ba);
    (0, import_chunk_bzyb60p0.V4a)(ct, v, y), Hl(y);
    let rr = {}, Ea = await (0, import_chunk_gq1dr8pm.xcl)(ct, o, () => {
      if ((0, import_chunk_f9x2f6cx.Yy)() || !(0, import_chunk_f9x2f6cx.Se)() && (!(0, import_chunk_865at33z.bke)() || tEn(Ie)) || !(0, import_chunk_9xz0nsgn.yXr)()) return;
      return rr.applied = (0, import_chunk_9xz0nsgn.g4e)(y, v), (0, import_chunk_7d2qr9z5.tBt)((0, import_chunk_865at33z.dt)(), rr.applied.then(() => {
      })), rr.applied;
    });
    Dt = (0, import_chunk_cktd05v4.L8t)(Dt);
    let ks = hs ? void 0 : Vr, ka = (0, import_chunk_k67pwqya.Pwl)({ cli: { fallbackModel: ks }, env: process.env, settings: (0, import_chunk_2yx6c1y2.vt)() });
    (0, import_chunk_865at33z.lPl)(ka ?? []), (0, import_chunk_gq1dr8pm.zcl)(ks !== void 0 ? (0, import_chunk_k67pwqya.qBi)(ks) : void 0);
    {
      let c = (0, import_chunk_k67pwqya.bc)({ ...(0, import_chunk_k67pwqya.acn)(o.effort), mainLoopModel: ct }), k = (0, import_chunk_k67pwqya.Fwl)(c, ct);
      if (k !== null) g$e(k, { key: "model-effort-cap", outputFormat: Z, debugLine: `[effort] ${k}` });
    }
    let sr;
    if ((0, import_chunk_sjqze7qg.TH)()) {
      let c = o.advisor;
      if (c) {
        if ((0, import_chunk_w578pjby.t)(`[AdvisorTool] --advisor ${c}`), !(0, import_chunk_sjqze7qg.cae)(ct)) {
          if (import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return (0, import_chunk_mpk68jst.Bn)(`Error: The model "${ct}" does not support the advisor tool.`);
          (0, import_chunk_w578pjby.t)(`[AdvisorTool] The model "${ct}" does not support the advisor tool.`, { level: "warn" });
        }
        let k = (0, import_chunk_zmb62hr5.ur)((0, import_chunk_865at33z.jt)(c));
        if (!(0, import_chunk_sjqze7qg.tWe)(k)) {
          let L = (0, import_chunk_sjqze7qg.gSe)(k), X = L ? `${(0, import_chunk_sjqze7qg.rnn)(k)} Run ${(0, import_chunk_sjqze7qg.onn)(k)}${Q ? " in an interactive session" : ""} to review and enable.` : `Error: The model "${c}" cannot be used as an advisor.`;
          if (import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") {
            if (L) return await (0, import_chunk_cqa9hrgx.oi)("advisor_fable_consent", Q ? "noninteractive_set_blocked" : "interactive_launch_blocked"), (0, import_chunk_mpk68jst.ho)(X);
            return (0, import_chunk_mpk68jst.Bn)(X);
          }
          (0, import_chunk_w578pjby.t)(`[AdvisorTool] ${X}`, { level: "warn" });
        }
        if (!(0, import_chunk_sjqze7qg.r5e)(ct, k)) {
          let L = `"${c}" cannot advise "${ct}" (the advisor must be at least as capable as the main model). The advisor will not be used for the main model.`;
          if (!Q || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") Yse(L);
          else (0, import_chunk_w578pjby.t)(`[AdvisorTool] ${L}`, { level: "warn" });
        }
      }
      if (sr = c ?? (0, import_chunk_sjqze7qg.vso)(), sr) (0, import_chunk_w578pjby.t)(`[AdvisorTool] Advisor model: ${sr}`);
    }
    let ws = Q && !po ? (0, import_chunk_865at33z.VKi)(So) : void 0, Aa = lo === null && Vo === null && co === null && !(_s && !(0, import_chunk_cktd05v4.F8t)()), Pa = null;
    if (Aa) {
      let c = (0, import_chunk_eg7q2c7h.e9r)(ct, Dn, ws), k = $l(ct, Dn, ws);
      if (c !== null) Pa = (0, import_chunk_eg7q2c7h.TLa)(c, { interactive: !Q && !uo, headless: (L) => g$e(L, { key: "model-context-window", outputFormat: Z }) });
      else if (k !== null) g$e(k, { key: "model-context-window", outputFormat: Z, debugLine: `[autocompact] ${k}` });
    }
    if (!uo) (0, import_chunk_bzyb60p0.I6a)(import_chunk_c203g5kd.s.CLAUDE_CODE_AUTO_COMPACT_WINDOW, { interactive: !Q, headless: (c) => g$e(c, { key: "auto-compact-window-env", outputFormat: Z, debugLine: `[autocompact] ${c}` }) });
    if (JXn(o), !(0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_f9x2f6cx.gte)() && (0, import_chunk_2yx6c1y2.vt)().defaultView === "chat") {
      let { isBriefEntitled: c } = require("/$bunfs/root/chunk-6t7ttdme.js");
      if (c()) (0, import_chunk_f9x2f6cx.mpt)(true);
    }
    let Cn, Ta = null, Fu = (0, import_chunk_2yx6c1y2.nce)(), xu = (0, import_chunk_2yx6c1y2._e)("userSettings")?.skipDangerousModePermissionPrompt === true;
    if (!Q) {
      let c = await C.runOnboarding?.({ session: ye, options: o, teleport: Ao, permissionMode: Le, toolPermissionContext: ae, storedTeammateOpts: gt, isSSHPending: ds, allowDangerouslySkipPermissions: it, commands: Uo, skippedChromeForAdminPolicy: Hi, enableClaudeInChrome: xo, chromeDeniedByPolicy: zn, devChannels: nn, offerClaudeInChrome: uu, askCloudDefaultReason: $c, wasTrustedBeforeSetup: Qi, wasPersistedTrustedBeforeSetup: ea, strictMcpConfig: Tt, mcpConfigPromise: ro, dynamicMcpConfig: he, currentCwd: un, mcpConfigResolvedMs: No, providerSetupCommand: Pu, remoteControlOption: Yo, remoteControl: Nn, projectForRemoteControl: ki, mainThreadAgentDefinition: xn === "continued" ? void 0 : re, agents: Dt.allAgents, inputPrompt: $e, prompt: e, storageV5: y, credentials: v }) ?? (0, import_chunk_mpk68jst.Bn)("Interactive session requires the runOnboarding capability");
      if ((0, import_chunk_qwcebyxc.g$n)()) {
        let { closeCodeModeOptInAfterSetup: V } = require("/$bunfs/root/chunk-yypqg2z3.js");
        if (process.exitCode === void 0 && await V() === "restart_without_mode") return c.root.unmount(), await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bvt28c25.js"))).then((Be) => Be.execRelaunch({ pinToCurrentBinary: true }));
      }
      N2r(ye.host);
      let k = wn(ye.host) ? Rn(to) : void 0;
      if (k !== void 0) await Xo("growthbook_init_ms", np, k);
      let L = C.endInkWithError;
      await (0, import_chunk_0dep9bd9.g8t)({ showBlockedScreen: C.showOrgConfigBlockedScreen, ...L !== void 0 && { printMessage: (V) => L(c.root, V) } }), Cn = { root: c.root, getFpsMetrics: c.getFpsMetrics, stats: c.stats }, Ta = c.mcpApprovalSkipWarning, he = c.dynamicMcpConfig, Uo = c.commands, Nn = c.remoteControl, $e = c.inputPrompt, e = c.prompt, ro = c.mcpConfigPromise;
      let X = (0, import_chunk_awvk50qj.z5r)(ae, { onNotification: (V) => {
        oo ??= V;
      } });
      if (X !== ae) ae = X, Le = X.mode;
      if (process.exitCode === void 0) {
        let V = await bd(ae, { surface: "terminal", source: Jr, isElsewhere: uo || Boolean(Ao), isNested: XXn().isOnClaudeCodeSessionSurface(), startsRemoteControl: ae.mode === "bypassPermissions" && vjo({ remoteControlFlag: Nn, isRemoteThinClient: (0, import_chunk_f9x2f6cx.Hn)() || Boolean(Ao) }).result === "full", hasInitialPrompt: Boolean(e) || Boolean($e), isRelaunch: Jt !== void 0, isResume: Boolean(o.resume || o.continue || o.fromPr), hadAcceptedWarning: xu, hasUnansweredMcpServers: async () => await C.hasUnansweredProjectMcpServers?.(y) !== false });
        if (V !== ae) {
          if (ae = V, Le = V.mode, he = (0, import_chunk_sjqze7qg.fbi)(he), !Tt && !(0, import_chunk_2gtmjt3y.Xn)() && !(0, import_chunk_f9x2f6cx.Hn)()) {
            ro.catch(import_chunk_k449cc64.i);
            let Be = Date.now();
            ro = (0, import_chunk_awaxe5q7.j2)({ hasDynamicMcpConfig: true }).then(() => ss).then(() => (0, import_chunk_bzyb60p0.Ik)(he, { storageV5: y, credentials: v })).then((pt) => (No.value = Date.now() - Be, pt));
          }
        }
      }
    }
    if ((0, import_chunk_k5jn5rx9.ts)("action_after_setup_screens"), oo ??= (0, import_chunk_awvk50qj.S3o)(), process.exitCode !== void 0) return (0, import_chunk_w578pjby.t)("Graceful shutdown initiated, skipping further initialization"), { kind: "exited" };
    if (up(ye, ca)) gp(ye, y, v);
    if ((0, import_chunk_bzyb60p0.zza)(ye, y, v), Cn) {
      let { errors: c } = (0, import_chunk_2yx6c1y2._p)(), k = (0, import_chunk_9ph0ypyy.ret)(c);
      if (k.length > 0 && (!(0, import_chunk_9ph0ypyy.wka)(k) || !C.handleInvalidSettings)) (0, import_chunk_9ph0ypyy.S8t)(k);
      else if (k.length > 0 && C.handleInvalidSettings) {
        if (await C.handleInvalidSettings(Cn.root, k) === "fix") {
          let { buildSettingsFixPrompt: X } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-y392q2bw.js"))), V = X(k, { flagSettingsPath: (0, import_chunk_f9x2f6cx.Av)() === void 0 ? (0, import_chunk_f9x2f6cx.wF)() : void 0 });
          if (V) $e = $e ? `${V}

${$e}` : V;
        }
      }
    }
    if (process.exitCode === void 0) {
      let c = require("/$bunfs/root/chunk-gnwhpqbr.js").noteHybridConnectionChange(ye, y, _s);
      if (c !== void 0) Gn.push({ text: c }), g$e(c, { key: "hybrid-connection-changed", outputFormat: Z, onStderrToo: process.stderr.isTTY === true });
    }
    let Ra = Zd();
    (0, import_chunk_7d2qr9z5.Zdl)(!(0, import_chunk_2gtmjt3y.Xn)());
    let ir = (0, import_chunk_865at33z.ge)().startupPrefetchedAt ?? 0, Lu = (0, import_chunk_2gtmjt3y.Xn)() || ec({ throttleMs: Ra, now: Date.now(), lastAt: ir });
    if (!(0, import_chunk_2gtmjt3y.Xn)()) (0, import_chunk_cy0ck7w2.Ftn)(v, y).catch((c) => (0, import_chunk_k449cc64.i)(c));
    if (!Lu) {
      let c = ir > 0 ? ` last ran ${Math.round((Date.now() - ir) / 1e3)}s ago` : "";
      (0, import_chunk_w578pjby.t)(`Starting background startup prefetches${c}`);
      let k = rr.applied;
      if (!Ea || k === void 0) k = (0, import_chunk_9xz0nsgn.g4e)(y, v), (0, import_chunk_7d2qr9z5.tBt)((0, import_chunk_865at33z.dt)(), k.then(() => {
      }));
      if (jd(k, y), (0, import_chunk_bzyb60p0.Mqa)(v, y), (0, import_chunk_865at33z.adt)(y, v, import_chunk_e7j4wgse.lgt), Ra > 0) tc(k, y).catch(import_chunk_k449cc64.i);
    } else {
      if ((0, import_chunk_w578pjby.t)(`Skipping startup prefetches, last ran ${Math.round((Date.now() - ir) / 1e3)}s ago`), !Ea && !(0, import_chunk_2gtmjt3y.Xn)() && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (0, import_chunk_9xz0nsgn.yXr)() && (!(0, import_chunk_865at33z.sAt)((0, import_chunk_865at33z.dt)()) || (0, import_chunk_xfj2cwfv.tB)() && (0, import_chunk_865at33z.wa)())) (0, import_chunk_7d2qr9z5.tBt)((0, import_chunk_865at33z.dt)(), (0, import_chunk_9xz0nsgn.h4e)(y, v));
      (0, import_chunk_865at33z.dKi)();
    }
    ro = (0, import_chunk_bzyb60p0.Umi)(ro, fu, () => ss.then(() => (0, import_chunk_bzyb60p0.Ik)(he, { storageV5: y, credentials: v })));
    let Ia = performance.now(), { servers: Fa } = await ro;
    if ((0, import_chunk_zjhyjv3y.zo)("mcp_config_wait_ms", performance.now() - Ia, Ia), No.value !== void 0) (0, import_chunk_zjhyjv3y.zo)("mcp_config_load_ms", No.value);
    if ((0, import_chunk_w578pjby.t)(`[STARTUP] MCP configs resolved in ${No.value}ms (awaited at +${Date.now() - Ji}ms)`), (0, import_chunk_k5jn5rx9.ts)("action_mcp_configs_read"), he = m8t(he, re, { strictMcpConfig: Tt, onBlocked: (c) => Yse(`agent frontmatter MCP ${(0, import_chunk_7cfjrnwy.O)(c.length, "server")} blocked by enterprise policy: ${c.join(", ")}`, { stderrPrefix: "Warning: " }) }), !je && !(0, import_chunk_2gtmjt3y.Xn)() && (0, import_chunk_hj4mak61.psl)()) {
      let { mcpConfig: c, allowedTools: k } = (0, import_chunk_bzyb60p0.V2a)();
      he = { ...he, ...c }, ae = (0, import_chunk_awvk50qj.yZs)(ae, k);
    }
    let Nu = false;
    if (Object.keys(he).length > 0 || Nu) await (0, import_chunk_awaxe5q7.j2)({ hasDynamicMcpConfig: true });
    if ((0, import_chunk_k5jn5rx9.ts)("action_mcp_policy_waited"), Si !== null) {
      let c = Si.buildArtifactsMcpLaptopEntry({ toolPermissionContext: ae, configuredNames: /* @__PURE__ */ new Set([...Object.keys(he), ...Object.keys(Fa)]), fixedServerSet: Tt ? "strict_mcp_config" : (0, import_chunk_bzyb60p0.yh)() ? "managed_mcp_config" : null, allowedByPolicy: import_chunk_bzyb60p0.gC });
      if (c !== null) he = { ...he, [c.name]: c.config };
    }
    if (Q) {
      if (po || !(0, import_chunk_bzyb60p0.HNt)()) (0, import_chunk_sjqze7qg.qHn)();
      else if ((0, import_chunk_bzyb60p0.OBe)(he).held.length > 0) await Qn.catch(() => ({}));
    }
    let { configs: La, blocked: Bu } = (0, import_chunk_bzyb60p0.OBe)(he), { allowed: Uu, blocked: ju } = (0, import_chunk_bzyb60p0.SH)(Fa), ar = [...Bu, ...ju];
    if (ar.length > 0) {
      if ((0, import_chunk_w578pjby.t)(`MCP ${(0, import_chunk_7cfjrnwy.O)(ar.length, "server")} blocked by enterprise policy before prefetch: ${ar.join(", ")}`, { level: "warn" }), ar.includes(import_chunk_prn6030k.Xi)) (0, import_chunk_sjqze7qg.eDn)(), Uo = Uo.filter((c) => !(c.name === import_chunk_prn6030k.Xi && c.type === "prompt" && c.source === "bundled"));
    }
    let lr = { ...Uu, ...La }, Ua = /* @__PURE__ */ Object.create(null), jo = {};
    for (let [c, k] of Object.entries(lr)) {
      let L = k;
      if (L.type !== "sdk") jo[c] = L;
      else if ((0, import_chunk_ts09sys6.P0)(L)) Ua[c] = L;
      else (0, import_chunk_w578pjby.t)(`MCP server "${c}" dropped: an sdk entry outside the SDK host's channel`, { level: "warn" });
    }
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_865at33z.b)("tengu_mcp_startup_policy_seed", true)) ae = (0, import_chunk_px0hhsq7.B$l)(ae, La);
    (0, import_chunk_k5jn5rx9.$8)({ mcp_server_count: Object.keys(lr).length }), (0, import_chunk_k5jn5rx9.ts)("action_mcp_configs_loaded");
    let Hu = Ul({ permissionMode: Le, dangerouslySkipPermissionsPassed: z ?? false, modeIsBypass: Le === "bypassPermissions", print: at ?? false }), Ha = (0, import_chunk_v6ez7m15.t_o)();
    if (Ha > 0) (0, import_chunk_cqa9hrgx.u)("api_data_flow_started_by", { count: Ha });
    (0, import_chunk_cktd05v4.SKs)({ resume: o.resume, forkSession: o.forkSession, hasSessionIdFlag: !!Je }), Au?.flush();
    let $u = (0, import_chunk_f9x2f6cx.Hn)() ? Bl({ mcpConfigFlagServers: To, agent: re, chromeFlag: Do.chrome, dynamicMcpConfig: he }) : [], Wu = Promise.resolve({ clients: [], tools: [], commands: [] }), Gu = Q ? Promise.resolve({ clients: [], tools: [], commands: [] }) : Qn.then((c) => {
      let k = Object.keys(c).length > 0 ? kc() : void 0;
      return k ? k.prefetchAllMcpResources(c, y, v) : { clients: [], tools: [], commands: [] };
    }), Vu = Promise.all([Wu, Gu]).then(([c, k]) => ({ clients: [...c.clients, ...k.clients], tools: (0, import_chunk_pbteexar.Ls)([...c.tools, ...k.tools], "name"), commands: (0, import_chunk_pbteexar.Ls)([...c.commands, ...k.commands], "name") }));
    (0, import_chunk_cktd05v4.TMt)(re);
    let Yu = Nt || lt || bo || Q || o.continue || o.resume ? void 0 : (0, import_chunk_bzyb60p0._In)("head", (c) => BIe(ye, { kind: "session-start", source: "startup", agentType: re?.agentType, model: ct, orphaned: c, storageV5: y, credentials: v }));
    Vu.catch(() => {
    });
    let Ku = [], zu = [], qu = [], yt, vn = false;
    if (o.thinking === "adaptive" || o.thinking === "enabled") yt = { type: "adaptive" }, vn = true;
    else if (o.thinking === "disabled") yt = { type: "disabled" }, vn = true;
    else {
      let c = process.env.MAX_THINKING_TOKENS ? (0, import_chunk_2gtmjt3y.Ch)(process.env.MAX_THINKING_TOKENS) : o.maxThinkingTokens;
      if (c !== void 0) {
        if (c > 0) yt = { type: "enabled", budgetTokens: c }, vn = true;
        else if (c === 0) yt = { type: "disabled" }, vn = true;
      }
    }
    yt ??= (0, import_chunk_865at33z.ahe)() ? { type: "adaptive" } : { type: "disabled" };
    let Xu = yt.type !== "disabled", As = (0, import_chunk_xfj2cwfv.Nxo)(o.thinkingDisplay) ? o.thinkingDisplay : void 0;
    if (yt.type !== "disabled") {
      if (As) (0, import_chunk_f9x2f6cx.e3t)(true);
      let c = (0, import_chunk_f9x2f6cx.Se)(), k = Z ?? "text", L = (0, import_chunk_865at33z.jKi)({ explicitDisplay: As, isNonInteractive: c, outputFormat: k, verbose: qe });
      if (L) yt.display = L;
      if (L === "omitted" && (0, import_chunk_865at33z.VAs)({ isNonInteractive: c, outputFormat: k, verbose: qe })) yt.displayExplicit = false;
    } else if ((0, import_chunk_865at33z.VAs)({ isNonInteractive: (0, import_chunk_f9x2f6cx.Se)(), outputFormat: Z ?? "text", verbose: qe })) yt.display = "omitted", yt.displayExplicit = false;
    if (Mg(), (0, import_chunk_w4dc83v7.Atl)(), (0, import_chunk_w578pjby.Ct)(async () => {
      (0, import_chunk_42tcgre6.q)("info", "exited");
    }), (0, import_chunk_t9fn978c.cSr)({ permissionMode: Le, bypassPermissionsAvailable: ae.isBypassPermissionsModeAvailable }), (0, import_chunk_gq1dr8pm.ucl)({ isEgressRestricted: import_chunk_ha393e1n.v_r, isHostAllowlistEnforced: import_chunk_ha393e1n.Fxi, areUnsandboxedCommandsAllowed: () => import_chunk_ha393e1n.Ue.areUnsandboxedCommandsAllowed(), isToolSandboxActive: import_chunk_ha393e1n.HNn }), Zo) (0, import_chunk_4vsz8a99.Rbl)({ ...Zo, entryMode: Le, entryModeDecidedByLevel: Xr?.startupModeDecidedByProactivityLevel !== void 0 });
    let $a = lo === null && Vo === null && co === null && !(0, import_chunk_f9x2f6cx.Hn)() && Ln === null, Wa = !$a ? void 0 : Aa ? Js() : dd, Ga = !Q && !qe && Te;
    if (bg({ session: ye, storageV5: y, credentials: v, onAntSandboxDetection: Hu.updateContext, hasInitialPrompt: Boolean(e), hasStdin: Boolean($e), verbose: qe, focusView: Ga, debug: K, print: at ?? false, outputFormat: Z ?? "text", inputFormat: J ?? "text", numAllowedTools: tt.length, numDisallowedTools: nt.length, restricted: je, mcpClientCount: Object.keys(lr).length, mcpListSizing: Qr, mcpConfigs: (0, import_chunk_f9x2f6cx.Hn)() ? null : Object.values(lr), worktreeEnabled: Ie, skipWebFetchPreflight: (0, import_chunk_2yx6c1y2.vt)().skipWebFetchPreflight, githubActionInputs: import_chunk_c203g5kd.s.GITHUB_ACTION_INPUTS, dangerouslySkipPermissionsPassed: z ?? false, permissionMode: Le, proactivityLevel: Zo?.level, modeIsBypass: Le === "bypassPermissions", bypassRequestSource: Jr, allowDangerouslySkipPermissionsPassed: oe, skipDangerousModePromptSetPreDialog: Fu, systemPromptFlag: $n ? o.systemPromptFile ? "file" : "flag" : void 0, appendSystemPromptFlag: o.appendSystemPrompt ? "flag" : o.appendSystemPromptFile ? "file" : void 0, thinkingConfig: yt, modelProvenance: Wa, runsLocalQueryLoop: $a, readClaimedSessionMcp: () => vg({ dynamicMcpConfig: he, mcpConfigFlagServers: To, launchBlockedCount: Qr.mcpConfigBlockedCount, diskScopesSkipped: Tt || (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_f9x2f6cx.Hn)(), storageV5: y, credentials: v }) }), (0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_865at33z.i_)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !po && !(0, import_chunk_f9x2f6cx.Hn)() && !Nt && !(0, import_chunk_f9x2f6cx.Yy)() && Object.keys(jo).length > 0) {
      let c = kc();
      if (c) {
        (0, import_chunk_w578pjby.t)(`[MCP] early start-up round for ${Object.keys(jo).length} configured server(s), before the first turn needs them`);
        let k = 0, L = 0, X = 0;
        c.getMcpToolsCommandsAndResources((V) => {
          k += V.tools.length, L += V.commands.length;
          for (let Be of V.commands) X += Be.name.length + (Be.description ?? "").length + (Be.argumentHint ?? "").length;
        }, jo, y, v, void 0, true).then(() => (0, import_chunk_y53wbr8a.a)("tengu_mcp_tools_commands_loaded", { tools_count: k, commands_count: L, commands_metadata_length: X })).catch((V) => (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(V), "early MCP start-up round failed; start-up connects the servers as usual")));
      }
    }
    if (!(0, import_chunk_f9x2f6cx.Hn)()) (0, import_chunk_bzyb60p0.a6a)(ye, jo, ae, import_chunk_aw5nczax.n6, y, v).catch((c) => (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(c), "context metrics failed")));
    let Va = false, Ms = async () => {
      if (Va) return;
      Va = true, (0, import_chunk_qqb44g89.Hxa)(ae.alwaysAllowRules), Cg(), await (0, import_chunk_bzyb60p0.Zdr)(null, "initialization");
    };
    if (Q) Jkn(ye.host, "permission_context_log", () => {
      Ms().catch(import_chunk_k449cc64.i);
    });
    else (0, import_chunk_bzyb60p0.sJo)(ye).then(Ms).catch(import_chunk_k449cc64.i), (0, import_chunk_w578pjby.Ct)(() => Ms().catch(import_chunk_k449cc64.i));
    if ((0, import_chunk_nnsc6a48.vCa)(), (0, import_chunk_865at33z.G4)().restoreSetAsideName = (c, k) => {
      (0, import_chunk_89bjmq9y.$Ce)(c, y, { autoOnly: k === "auto", source: k, yieldToLaterRestore: true });
    }, (0, import_chunk_xt12gd7z.gNa)().catch(import_chunk_k449cc64.i), ((0, import_chunk_f9x2f6cx.Yy)() ? Promise.resolve(false) : (0, import_chunk_865at33z.xPr)(y)).then((c) => {
      if (!c) return;
      let k = (0, import_chunk_f9x2f6cx.W)();
      (0, import_chunk_89bjmq9y.$Ei)({ sessionNameArg: ln, sessionNameArgSource: (0, import_chunk_865at33z.lee)() === void 0 ? "user" : "peer", interactive: (0, import_chunk_865at33z.lee)() === void 0 && !(0, import_chunk_f9x2f6cx.Se)(), writeName: async (L, X) => {
        await (0, import_chunk_865at33z.hoe)(L, y, X, X === "collision" ? (0, import_chunk_865at33z.wM)()?.givenAtLaunch : true);
      }, onRenamed: (L, X) => {
        let V = (0, import_chunk_xfj2cwfv.Ba)(L);
        if ((0, import_chunk_f9x2f6cx.W)() !== k) return;
        if (V && (0, import_chunk_bzyb60p0.bMn)(k, X, V)) (0, import_chunk_bzyb60p0.s7)(V), (0, import_chunk_bzyb60p0.OSt)(V);
      } }), (0, import_chunk_865at33z.Uzn)(y).then((L) => {
        if (L >= 2) (0, import_chunk_y53wbr8a.a)("tengu_concurrent_sessions", { num_sessions: L });
      });
    }), (0, import_chunk_k5jn5rx9.ote)("action_before_listed_mods"), await Id({ storageV5: y, credentials: v }), (0, import_chunk_2gtmjt3y.Xn)()) ;
    else Jkn(ye.host, "plugin_init", (c) => {
      if (c === "shutdown") return;
      if (xd({ deferToCleanup: Q, storageV5: y }), !Q || J === "stream-json") Fd({ storageV5: y, credentials: v });
    }), (0, import_chunk_k5jn5rx9.ts)("action_after_plugins_init");
    let Ju = Nt || lt ? "init" : bo ? "maintenance" : null;
    if (Nt) return (0, import_chunk_5e3gtsn9.w1)(), await BIe(ye, { kind: "setup", trigger: "init", forceSyncExecution: true, storageV5: y, credentials: v }), await BIe(ye, { kind: "session-start", source: "startup", forceSyncExecution: true, storageV5: y, credentials: v }), (0, import_chunk_bzyb60p0.Da)(0), { kind: "exited" };
    let Ya = { allowedTools: tt, appendSystemPrompt: mo, appendSystemPromptCli: jn, appendSystemPromptHead: lu, asWrittenMcpEntries: tn, claudeaiConfigPromise: Qn, cliAgents: ma, credentials: v, currentCwd: un, debug: K, jsonSchema: Bt, sdkUrl: Fe, sessionMirror: yo, systemPrompt: $n, systemPromptCli: Yr, thinkingConfig: yt, thinkingConfigExplicit: vn, thinkingDisplayFlag: As, thinkingEnabled: Xu, advisorModel: sr, agentCli: He, agentDefinitions: Dt, agentSdkAppNotices: mu, agentSetting: fn, autoCompactWindow: Dn, cloudAttachId: lo, commands: Uo, sessionMetadata: zc, dangerouslySkipPermissions: z, deferredCommandsPromise: fa, disableSlashCommands: eo, dynamicMcpConfig: he, earlyHydrateReads: gu, earlyRemoteLink: hu, effectiveForwardSubagentText: Nr, effectiveIncludePartialMessages: xr, effectiveModel: bs, effectiveReplayUserMessages: gs, fileDownloadPromise: _o, headlessCloud: jr, headlessCloudPrint: $r, ide: xt, initialFocusView: Ga, initialMainLoopModel: Ou, inputPrompt: $e, isNonInteractiveSession: Q, mainThreadAgentDefinition: re, mcpApprovalSkipWarning: Ta, mcpClients: Ku, mcpCommands: qu, mcpConfigFlagServers: To, mcpConfigOwnership: Ui, mcpTools: zu, modelCli: dn, modelProvenance: Wa, outputFormat: Z, permissionModeCli: en, permissionModeNotification: oo, permissionModeSuppliedOnInvocation: cu, bypassRequestSource: Jr, allowDangerouslySkipPermissions: it, persistentVolume: Jc, persistentVolumeFromSessionId: Qc, monorepo: Zc, addedRepositories: eu, noMonorepo: ou, noMonorepoAsksTheService: nu, personal: ru, promptBlocks: su, poolId: Vo, environmentQuery: Wc, poolOnBranch: Vc, forwardHomeSettings: bi, homeSettingsConsent: Ei, poolPromotedRemote: Ur, poolRef: Gc, preDecorationInputPrompt: Su, proactivityLevel: Di, projectBrowse: Ln, projectForRemoteControl: ki, rawModelRequest: Du, regularMcpConfigs: jo, relaunchFlagFetchSettled: Mo && Ot !== void 0 && !Ot.result.timedOut, remote: co, localSessionMove: ko, isMoveByResume: xc, remoteControl: Nn, remoteControlName: au, resumeInCloud: xn, serveOnly: Xc, defaultedToCloud: vi, cloudDefaultNotAllowed: Ci, personalWithoutEffectNotification: jc, pluginAgentSettingNotification: ha, cloudSessionsByDefault: Br, listsCloudSessionsInResume: Uc, sandboxVmStayReason: Hc, remoteDroppedMcpMessages: $u, resolvedInitialModel: ct, resolvedMaxTurns: A, movedDefault: va, restrictedModel: Iu, sdkBetas: ws, sdkMcpConfigs: Ua, session: ye, sessionGroupingId: iu, sessionNameArg: ln, sessionStartHooks: Yu, sessionTeamContext: G, setupTrigger: Ju, storageV5: y, strictMcpConfig: Tt, structuredOutputTool: Sa, teleport: Ao, toolPermissionContext: ae, tools: Bo, unknownModelWindow: Pa, securityWarnings: Gn, userSpecifiedFallbackModel: ka, verbose: qe, wasPersistedTrustedBeforeSetup: ea, wasTrustedBeforeSetup: Qi };
    if (!Cn) return { kind: "prepared-headless", ...Ya, orgValidation: ia };
    return { kind: "prepared-interactive", ...Ya, ...Cn, terminalInput: import_chunk_6k3h3wej.TTe.get() };
  } catch (_3) {
    var _error2 = _3, _hasError2 = true;
  } finally {
    __callDispose(_stack2, _error2, _hasError2);
  }
}
function Dr(e) {
  try {
    return e();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Managed settings: a sizing report could not be read: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
    return;
  }
}
