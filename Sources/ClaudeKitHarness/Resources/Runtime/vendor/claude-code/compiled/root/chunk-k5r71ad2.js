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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_k5r71ad2_exports = {};
__export(chunk_k5r71ad2_exports, {
  $Gr: () => $Gr,
  BGr: () => BGr,
  DGr: () => DGr,
  E2o: () => E2o,
  EJn: () => EJn,
  FGr: () => FGr,
  GGr: () => GGr,
  GIe: () => GIe,
  JEa: () => JEa,
  JVs: () => JVs,
  KVs: () => KVs,
  LGr: () => LGr,
  NGr: () => NGr,
  QEa: () => QEa,
  QVs: () => QVs,
  S$e: () => S$e,
  S2o: () => S2o,
  TEn: () => TEn,
  UGr: () => UGr,
  VVs: () => VVs,
  WGr: () => WGr,
  XEa: () => XEa,
  XVs: () => XVs,
  YVs: () => YVs,
  ZEa: () => ZEa,
  ZVs: () => ZVs,
  b2o: () => b2o,
  eKs: () => eKs,
  eva: () => eva,
  iva: () => iva,
  jGr: () => jGr,
  k2o: () => k2o,
  nKs: () => nKs,
  nva: () => nva,
  oKs: () => oKs,
  ova: () => ova,
  qVs: () => qVs,
  rKs: () => rKs,
  rva: () => rva,
  sva: () => sva,
  t6: () => t6,
  tKs: () => tKs,
  tva: () => tva,
  v2o: () => v2o,
  vJn: () => vJn,
  w2o: () => w2o,
  x8t: () => x8t,
  y2o: () => y2o
});
module.exports = __toCommonJS(chunk_k5r71ad2_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_1ea72zr6 = require("/$bunfs/root/chunk-1ea72zr6.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_s0zsg6za = require("/$bunfs/root/chunk-s0zsg6za.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ddznn4yb = require("/$bunfs/root/chunk-ddznn4yb.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_xzph4c6z = require("/$bunfs/root/chunk-xzph4c6z.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_179jgyn9 = require("/$bunfs/root/chunk-179jgyn9.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_yn71faep = require("/$bunfs/root/chunk-yn71faep.js");
var import_chunk_fe5esh7d = require("/$bunfs/root/chunk-fe5esh7d.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_5w3q7h0v = require("/$bunfs/root/chunk-5w3q7h0v.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_ta6q9jek = require("/$bunfs/root/chunk-ta6q9jek.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_84n38n3t = require("/$bunfs/root/chunk-84n38n3t.js");
var import_chunk_0vvtfqck = require("/$bunfs/root/chunk-0vvtfqck.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_6k9zs54e = require("/$bunfs/root/chunk-6k9zs54e.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_02wf5c4s = require("/$bunfs/root/chunk-02wf5c4s.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_snpsm13w = require("/$bunfs/root/chunk-snpsm13w.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_1dkksxs0 = require("/$bunfs/root/chunk-1dkksxs0.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_f6abynt8 = require("/$bunfs/root/chunk-f6abynt8.js");
var import_chunk_0ty8qx28 = require("/$bunfs/root/chunk-0ty8qx28.js");
var import_chunk_7xxwg4th = require("/$bunfs/root/chunk-7xxwg4th.js");
var import_chunk_1n9wdcmg = require("/$bunfs/root/chunk-1n9wdcmg.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_z2c6pmpw = require("/$bunfs/root/chunk-z2c6pmpw.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_kxbewx27 = require("/$bunfs/root/chunk-kxbewx27.js");
var import_chunk_h8v51dgb = require("/$bunfs/root/chunk-h8v51dgb.js");
var import_chunk_at8q9dqk = require("/$bunfs/root/chunk-at8q9dqk.js");
var import_chunk_ata1yp21 = require("/$bunfs/root/chunk-ata1yp21.js");
var import_chunk_rdcxsb11 = require("/$bunfs/root/chunk-rdcxsb11.js");
var import_chunk_202wmj18 = require("/$bunfs/root/chunk-202wmj18.js");
var import_chunk_k7fvzexf = require("/$bunfs/root/chunk-k7fvzexf.js");
var import_chunk_s7te3n3c = require("/$bunfs/root/chunk-s7te3n3c.js");
var import_chunk_fpk6xk4r = require("/$bunfs/root/chunk-fpk6xk4r.js");
var import_chunk_d109n23j = require("/$bunfs/root/chunk-d109n23j.js");
var import_chunk_xggvpcqr = require("/$bunfs/root/chunk-xggvpcqr.js");
var import_chunk_7kf5v011 = require("/$bunfs/root/chunk-7kf5v011.js");
var import_chunk_wsm915mg = require("/$bunfs/root/chunk-wsm915mg.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_zajgr60e = require("/$bunfs/root/chunk-zajgr60e.js");
var import_chunk_h5jsp3s5 = require("/$bunfs/root/chunk-h5jsp3s5.js");
var import_chunk_5t8k9r3t = require("/$bunfs/root/chunk-5t8k9r3t.js");
var import_chunk_g5qq9mjy = require("/$bunfs/root/chunk-g5qq9mjy.js");
var import_chunk_mjyj9rac = require("/$bunfs/root/chunk-mjyj9rac.js");
var import_chunk_hgqhjaz5 = require("/$bunfs/root/chunk-hgqhjaz5.js");
var import_chunk_8dns2jbk = require("/$bunfs/root/chunk-8dns2jbk.js");
var import_chunk_s9223e1q = require("/$bunfs/root/chunk-s9223e1q.js");
var import_chunk_r3y72ye0 = require("/$bunfs/root/chunk-r3y72ye0.js");
var import_chunk_kb3nnh8q = require("/$bunfs/root/chunk-kb3nnh8q.js");
var import_chunk_jv1xpxw5 = require("/$bunfs/root/chunk-jv1xpxw5.js");
var import_chunk_24am9sn7 = require("/$bunfs/root/chunk-24am9sn7.js");
var import_chunk_4yvcsx6j = require("/$bunfs/root/chunk-4yvcsx6j.js");
var import_chunk_tteqedwm = require("/$bunfs/root/chunk-tteqedwm.js");
var import_chunk_cr2vz9cc = require("/$bunfs/root/chunk-cr2vz9cc.js");
var import_chunk_y13trfs7 = require("/$bunfs/root/chunk-y13trfs7.js");
var import_chunk_be4a2jph = require("/$bunfs/root/chunk-be4a2jph.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_thj6vbn4 = require("/$bunfs/root/chunk-thj6vbn4.js");
var import_chunk_41appe38 = require("/$bunfs/root/chunk-41appe38.js");
var import_chunk_z3bdjzsf = require("/$bunfs/root/chunk-z3bdjzsf.js");
var import_chunk_pt2stgge = require("/$bunfs/root/chunk-pt2stgge.js");
var import_chunk_0ywkmnxx = require("/$bunfs/root/chunk-0ywkmnxx.js");
var import_chunk_jp3c197c = require("/$bunfs/root/chunk-jp3c197c.js");
var import_chunk_3mgqz62p = require("/$bunfs/root/chunk-3mgqz62p.js");
var import_chunk_sp8p28qh = require("/$bunfs/root/chunk-sp8p28qh.js");
var import_chunk_v3ek5a4a = require("/$bunfs/root/chunk-v3ek5a4a.js");
var import_chunk_yta0vzjp = require("/$bunfs/root/chunk-yta0vzjp.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_gkm2eky6 = require("/$bunfs/root/chunk-gkm2eky6.js");
var import_chunk_jsm9pvcb = require("/$bunfs/root/chunk-jsm9pvcb.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_rtsmzy7m = require("/$bunfs/root/chunk-rtsmzy7m.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_x1z3yh1m = require("/$bunfs/root/chunk-x1z3yh1m.js");
var import_chunk_r3e8vdzv = require("/$bunfs/root/chunk-r3e8vdzv.js");
var import_chunk_07r720jc = require("/$bunfs/root/chunk-07r720jc.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_q4y63y6c = require("/$bunfs/root/chunk-q4y63y6c.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_cvv9kfq3 = require("/$bunfs/root/chunk-cvv9kfq3.js");
var import_chunk_dwxd9se5 = require("/$bunfs/root/chunk-dwxd9se5.js");
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
var import_chunk_t99xdws4 = require("/$bunfs/root/chunk-t99xdws4.js");
var import_chunk_ch6321bk = require("/$bunfs/root/chunk-ch6321bk.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_0djtvg5h = require("/$bunfs/root/chunk-0djtvg5h.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_xrav2tvh = require("/$bunfs/root/chunk-xrav2tvh.js");
var import_chunk_mjq4pbxz = require("/$bunfs/root/chunk-mjq4pbxz.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_2567t09g = require("/$bunfs/root/chunk-2567t09g.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_v6yexwhb = require("/$bunfs/root/chunk-v6yexwhb.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var import_crypto = require("crypto");
var import_crypto2 = require("crypto");
var import_async_hooks = require("async_hooks");
var import_path2 = require("path");
var import_os = require("os");
var import_util = require("util");
var import_crypto3 = require("crypto");
function ei(e, o, r) {
  let { screened: g } = r, y = g?.dropped === true ? void 0 : g?.rewritten;
  if (!(r.interrupted !== true && g?.dropped !== true)) return;
  if (y === void 0) return e;
  return e.trim() === o.trim() ? y : void 0;
}
async function k2o(e, o, { prompt: r, reading: g }) {
  let y = (0, import_chunk_z2xw6net.Gin)() ? void 0 : g;
  if (!(0, import_chunk_z2xw6net.o1)()) {
    try {
      (0, import_chunk_z2xw6net.VMi)(r, e, e);
    } catch (E) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(E));
    }
    return o(void 0);
  }
  let h = /* @__PURE__ */ new Set(), k, R = false, w = (E) => {
    if (k !== void 0) return;
    k = E;
    try {
      h.forEach((O) => (0, import_chunk_be4a2jph.Xqr)(O, ei(O.text, e, E))), h.clear(), (0, import_chunk_z2xw6net.VMi)(r, e, ei(e, e, E));
    } catch (O) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(O));
    }
  };
  try {
    return await o({ hold: (E) => {
      if (k === void 0) h.add(E);
      else (0, import_chunk_be4a2jph.Xqr)(E, ei(E.text, e, k));
    }, settled: (E) => w({ screened: E }), handedOn: () => {
      R = true;
    } });
  } finally {
    let E = !R && y !== void 0 && !(0, import_chunk_z2xw6net.Gin)() && !(0, import_chunk_thj6vbn4.K2)(y);
    w(E ? { screened: {} } : { interrupted: true });
  }
}
var xy = 30, ti = 6e4, Oy = 2, Py = 3, Fy = 120, Dy = " \xB7 idle check-ins paused until your next message", Ly = " Claude Code won't wake this session for another check-in until the user sends a message, so say clearly where things stand.";
function Ny(e) {
  return e.mode === "task-notification" && (0, import_chunk_tjdnrbvx.Tc)(e) && e.passive !== true;
}
function ri() {
  if (!(0, import_chunk_865at33z.b)("tengu_saffron_wren", true)) return 0;
  return (import_chunk_c203g5kd.s.CLAUDE_CODE_GOAL_CHECKIN_MINUTES ?? xy) * 6e4;
}
function Ua() {
  return (0, import_chunk_865at33z.b)("tengu_pewter_avocet", true) && ri() !== 0;
}
function Su(e, o) {
  return e * 2 ** Math.min(o, Oy);
}
function Tu(e, o, r) {
  let g = Math.max(1, Math.round(o / 6e4)), y = Ru(e);
  if (r.length === 0) return { summary: "Goal check-in: background work no longer running", body: `${y} is still active. Its evaluation was deferred for ${g} min while background work ran, and that work is no longer running (it finished or was stopped without reporting back). Continue toward the goal.` };
  let h = r.map((k) => {
    let R = k.type === "local_bash" && !(0, import_chunk_z6hn62tj.lre)(k) ? k.command : k.description;
    return (0, import_chunk_hr2stdq7.sn)((0, import_chunk_7cfjrnwy.ed)(`- ${k.id} \xB7 ${(0, import_chunk_z6hn62tj.Nin)(k)} \xB7 ${Au(R)}`, Fy));
  });
  return { summary: "Goal check-in: background work still running", body: `${y} is still active, and evaluation has been deferred for ${g} min because background work is still running:
${h.join(`
`)}
Check on their progress (e.g. read their output). If they are progressing, say so briefly and keep waiting; if they are stuck or no longer needed, fix or stop them and continue toward the goal.` };
}
function By(e) {
  return { summary: e.summary + Dy, body: e.body + Ly };
}
function oi(e) {
  return (e.idleCheckinCount ?? 0) >= Py;
}
function ku(e, o, r, g) {
  let y = (0, import_chunk_4smdap7r.U)(g, (h) => h.type === "local_bash");
  if ((0, import_chunk_y53wbr8a.a)("tengu_goal_checkin_injected", { trigger: (0, import_chunk_78g0060s.f)(e), deferredMs: o, activeShells: y, activeAgents: g.length - y, checkinCount: r.checkinCount ?? 0, idleCheckinCount: r.idleCheckinCount ?? 0 }), e === "idle_timer" && oi(r)) (0, import_chunk_cqa9hrgx.l)("goal_checkin", "idle_cap_reached");
  else (0, import_chunk_cqa9hrgx.u)("goal_checkin");
  (0, import_chunk_w578pjby.t)(`[goal] check-in injected (${e}) after ${Math.round(o / 1e3)}s deferred`);
}
function Cu(e, o, r, g) {
  if (e.deferredSince === void 0) return { deferredSince: r, checkinCount: 0, isNewRun: true };
  let y = Math.min(...o.map((k) => k.startTime)), h = e.lastDeferralPassAt !== void 0 && Number.isFinite(y) && y > e.lastDeferralPassAt && r - e.lastDeferralPassAt > g;
  return h ? { deferredSince: r, checkinCount: 0, isNewRun: h } : { deferredSince: e.deferredSince, checkinCount: e.checkinCount ?? 0, isNewRun: h };
}
function bu(e, o, r) {
  let g = ri();
  if (g === 0 || e.paused) return { nextGoal: e, checkinText: void 0 };
  let y = Cu(e, o, r, g), h = r - y.deferredSince;
  if (h < Su(g, y.checkinCount)) return { nextGoal: { ...e, deferredSince: y.deferredSince, checkinCount: y.checkinCount, lastDeferralPassAt: r }, checkinText: void 0 };
  let k = { ...e, deferredSince: r, checkinCount: y.checkinCount + 1, lastDeferralPassAt: r }, R = Tu(e.condition, h, o).body;
  return ku("turn_end", h, k, o), { nextGoal: k, checkinText: R };
}
function BGr(e) {
  let o = e.pendingGoalIdleCheckin();
  if (o !== void 0) clearTimeout(o), e.replacePendingGoalIdleCheckin(void 0);
}
function qr(e) {
  BGr(e.sessionScratch);
  let o = ri();
  if (o === 0 || e.goal.deferredSince === void 0) return;
  let r = Su(o, e.goal.checkinCount ?? 0), g = oi(e.goal) ? 0 : e.now - e.goal.deferredSince, y = Math.min(import_chunk_2567t09g.au, Math.max(ti, r - g));
  Da(e, y);
}
function Da(e, o) {
  let r = setTimeout(qy, o, e);
  r.unref(), e.sessionScratch.replacePendingGoalIdleCheckin(r);
}
function qy(e) {
  e.sessionScratch.replacePendingGoalIdleCheckin(void 0);
  let { goal: o, getAppState: r, setAppState: g, getDeferringTasks: y, deliver: h, hasQueued: k } = e, R = o;
  try {
    let w = r().activeGoal;
    if (!vu(w, o) || w.deferredSince === void 0) return;
    let E = ri();
    if (E === 0) return;
    if (oi(w)) {
      (0, import_chunk_w578pjby.t)("[goal] idle check-in cap reached \u2014 tick re-armed only"), qr({ ...e, goal: w, now: Date.now() });
      return;
    }
    if ((0, import_chunk_f9x2f6cx.UQe)() || k(import_chunk_tjdnrbvx.bko)) {
      Da(e, ti);
      return;
    }
    let O = y();
    if (O.length === 0 && k(Ny)) {
      Da(e, ti);
      return;
    }
    let P = Date.now(), I = Cu(w, O, P, E);
    if (I.isNewRun) {
      let X = { ...w, deferredSince: P, checkinCount: 0, lastDeferralPassAt: P };
      g((re) => re.activeGoal !== w ? re : { ...re, activeGoal: X }), R = X, qr({ ...e, goal: X, now: P });
      return;
    }
    let H = P - I.deferredSince, Q = { ...w, deferredSince: P, checkinCount: I.checkinCount + 1, lastDeferralPassAt: P, idleCheckinCount: (w.idleCheckinCount ?? 0) + 1 };
    g((X) => X.activeGoal !== w ? X : { ...X, activeGoal: Q }), R = Q;
    let z = Tu(w.condition, H, O);
    h(oi(Q) ? By(z) : z), ku("idle_timer", H, Q, O), qr({ ...e, goal: Q, now: P });
  } catch (w) {
    (0, import_chunk_k449cc64.i)(w);
    try {
      qr({ ...e, goal: R, now: Date.now() });
    } catch (E) {
      (0, import_chunk_k449cc64.i)(E);
    }
    try {
      (0, import_chunk_cqa9hrgx.m)("goal_checkin", "fire_failed");
    } catch (E) {
      (0, import_chunk_k449cc64.i)(E);
    }
  }
}
function vJn(e) {
  let o = e.pendingGoalReprompt();
  if (o !== void 0) clearTimeout(o), e.replacePendingGoalReprompt(void 0);
}
function Hr(e) {
  vJn(e), e.replaceGoalInterruptionStreak(void 0);
}
function Mu(e, o) {
  vJn(e.sessionScratch), Eu(e, o);
}
function Eu(e, o) {
  let r = setTimeout(Hy, o, e);
  r.unref(), e.sessionScratch.replacePendingGoalReprompt(r);
}
function Hy(e) {
  let { sessionScratch: o, getAppState: r } = e;
  o.replacePendingGoalReprompt(void 0);
  try {
    let g = r().activeGoal;
    if (!vu(g, e.goal) || !Ua()) return;
    if ((0, import_chunk_f9x2f6cx.UQe)() || e.hasQueued(import_chunk_tjdnrbvx.bko)) {
      Eu(e, ti);
      return;
    }
    e.deliver({ summary: "Goal check-in: continuing after the last turn ended early", body: `${Ru(g.condition)} is still active. The last turn ended before the goal could be evaluated: ${e.cause}. Continue toward the goal.` }), (0, import_chunk_cqa9hrgx.u)("goal_interruption"), (0, import_chunk_w578pjby.t)("[goal] re-prompt delivered after an unevaluated turn");
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
    try {
      (0, import_chunk_cqa9hrgx.m)("goal_interruption", "fire_failed");
    } catch (y) {
      (0, import_chunk_k449cc64.i)(y);
    }
  }
}
function WGr(e, o) {
  try {
    Hr(o), e((r) => {
      if (r.activeGoal?.idleCheckinCount === void 0 && r.activeGoal?.paused === void 0) return r;
      let { idleCheckinCount: g, paused: y, ...h } = r.activeGoal;
      return { ...r, activeGoal: h };
    });
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function Au(e) {
  return (0, import_chunk_hr2stdq7.Jx)((0, import_chunk_kx2fp6pc.$c)(e));
}
function Ru(e) {
  return `${import_chunk_0ha8wex8.lIr}${(0, import_chunk_hr2stdq7.sn)(Au(e))}\xBB`;
}
function vu(e, o) {
  return e !== void 0 && e.paused === void 0 && e.setAt === o.setAt && e.condition === o.condition;
}
function GGr(e) {
  (0, import_chunk_bzyb60p0.s3e)({ expired: false });
  try {
    (0, import_chunk_trwykz8a.mn)().autoReactHumanTurnObserver?.({ ownWords: e?.ownWords === true });
  } catch (o) {
    if ((0, import_chunk_jv7av99m.Fe)(o)) return;
    (0, import_chunk_k449cc64.i)(o);
  }
}
function E2o({ composerEnter: e, preExpansion: o, localStdinOrigin: r, input: g }) {
  if ((0, import_chunk_vhsysgcd.EC)(e)) return o !== void 0 && (0, import_chunk_bq31aqv6.WCe)((0, import_chunk_bq31aqv6.zW)(o)).length > 0;
  if (!r) return false;
  let y = (0, import_chunk_tjdnrbvx.fv)(g) ?? "", h = (O) => O.match(/\bultrathink\b/gi)?.length ?? 0, k = h(y), R = Math.max(0, k - h((0, import_chunk_bq31aqv6.zW)(y))), w = Math.max(0, k - h((0, import_chunk_k449cc64.OLs)(y))), E = (O) => (0, import_chunk_bq31aqv6.WCe)(O).length > 0;
  return k - R - w > 0 && E((0, import_chunk_bq31aqv6.zW)((0, import_chunk_k449cc64.OLs)(y))) && E((0, import_chunk_k449cc64.OLs)((0, import_chunk_bq31aqv6.zW)(y)));
}
var Wy = new RegExp(import_chunk_bq31aqv6.u7);
function xu(e, o, r) {
  return e.lastIndex = r, e.test(o) ? e.lastIndex : -1;
}
function Pu(e) {
  let o = (0, import_chunk_bq31aqv6.zW)(e), r = [], g = /\s/g, y = new RegExp(String.raw`[ \t]*\[${import_chunk_865at33z.Udt}\]`, "y"), h = 0, k = -1, R = -1, w = [], E = 0;
  for (let O = o.indexOf("@"); O !== -1; O = o.indexOf("@", Math.max(O + 1, h))) {
    if (O > 0 && !Wy.test(o[O - 1])) continue;
    let P = O + 1, I = -1;
    if (o[P] === '"') {
      let Q = o.indexOf('"', P + 1);
      if (Q > P + 1) I = Q + 1;
    }
    if (I === -1) {
      if (P >= k) {
        g.lastIndex = P, k = g.test(o) ? g.lastIndex - 1 : o.length, R = -1, w = [], E = 0;
        for (let Q = P + 1; Q <= k; Q++) if ((0, import_chunk_bq31aqv6.Lrn)(o, Q - 1) !== (0, import_chunk_bq31aqv6.Lrn)(o, Q)) {
          if (R = Q, xu(y, o, Q) !== -1) w.push(Q);
        }
      }
      while ((w[E] ?? 1 / 0) <= P) E++;
      if (I = w[E] ?? R, I <= P) continue;
    }
    let H = xu(y, o, I);
    h = H === -1 ? I : H, r.push(o.slice(O, h));
  }
  return r;
}
function UGr(e, o) {
  let r = new Set(Pu(o));
  return Pu(e).filter((g) => r.has(g)).join(" ");
}
function TEn(e) {
  return typeof e === "string" ? e : e.findLast((o) => o.type === "text")?.text || "";
}
function nva(e) {
  let o = e.toLowerCase();
  return /\b(wtf|wth|ffs|omfg|shit(ty|tiest)?|dumbass|horrible|awful|piss(ed|ing)? off|piece of (shit|crap|junk)|what the (fuck|hell)|fucking? (broken|useless|terrible|awful|horrible)|fuck you|screw (this|you)|so frustrating|this sucks|damn it)\b/.test(o);
}
function rva(e) {
  let o = e.toLowerCase().trim();
  if (o === "continue") return true;
  return /\b(keep going|go on)\b/.test(o);
}
function ova(e) {
  let o = e.toLowerCase().replace(/\u2019/g, "'").replace(/\s+/g, " ").trim();
  return /^(?:(?:ok|okay|please|pls|can you|could you|would you),? )*(?:explain|walk me through|help me understand|teach me)\b|^(?:why (?:does|do|is|are|was|were|would|should) (?!you\b|u\b)(?![^.?!]*\b(?:still|again)\b)|how (?:come|does|do (?:these|those)) |what (?:does|do) (?!you\b|u\b|we\b|i\b)|what(?:'s| is) (?:this|that)\b|i (?:don'?t|do not) (?:understand\b|get (?:this|it|why|how|what)\b))/.test(o);
}
function sva(e) {
  let o = e.slice(0, 500).toLowerCase().replace(/\s+/g, " ").replace(/\b(?:(?:social|spring)[ -]security|security[ -](?:groups?|deposits?|questions?|contexts?)|security audit[ -](?:logs?|logging|trails?)|(?:dependency|constructor|setter|field|method|property|fault)[ -]injection)\b ?/g, "");
  if (/\b(?:find|are there any|(?:audit|check|hunt|look|review|scan|search)(?:n?ing)?(?: [\w'-]+){0,4} for) (?:[\w'-]+ ){0,3}(?:vulnerabilit(?:y|ies)|vulns?|security (?:issues?|bugs?|holes?|flaws?|problems?|risks?))\b|\bsecurity audit\b|\b(?:an?|run|do|perform|need|want) security (?:scan|review|assessment)\b|\b(?:is|are) (?:this|that|the|my|our|these|those) (?:\w+ )?(?:code(?:base)?|apps?|applications?|repos?|repositor(?:y|ies)|projects?|services?|systems?|(?:web)?sites?|changes) (?:secure|vulnerable)\b/.test(o)) return 2;
  return /\b(?:security|vuln\w*|exploit\w*|injections?)\b|\b(?:is|are) (?:\w+ ){1,4}secure\b/.test(o) ? 1 : 0;
}
function Iu(e) {
  let o = e.toLowerCase();
  return /\bgo to (sleep|bed)\b/.test(o);
}
var Gy = /* @__PURE__ */ new Set(["ping", "u there", "you there", "are you there", "r u there", "u here", "you here", "are you here", "you back", "are you back", "u back", "anyone there", "anybody there", "still there", "you still there", "are you still there", "still working", "you still working", "are you still working", "you stuck", "are you stuck", "u stuck", "\u5582", "\u5728\u5417", "\u5728\u55CE", "\u8FD8\u5728\u5417", "\u9084\u5728\u55CE", "\u5728\u4E0D\u5728", "\u3082\u3057\u3082\u3057", "\u304A\u3044", "\u304A\u30FC\u3044", "\u3044\u307E\u3059\u304B", "\uC5EC\uBCF4\uC138\uC694", "\uC57C", "\uC788\uC5B4\uC694", "hola", "oye", "est\xE1s ah\xED", "estas ahi", "sigues ah\xED", "sigues ahi", "oi", "ol\xE1", "ola", "al\xF4", "alo", "t\xE1 a\xED", "ta ai", "est\xE1 a\xED", "esta ai", "allo", "all\xF4", "salut", "coucou", "t'es l\xE0", "t'es la", "tu es l\xE0", "tu es la", "hallo", "bist du da", "noch da", "\u043F\u0440\u0438\u0432\u0435\u0442", "\u044D\u0439", "\u0430\u043B\u043B\u043E", "\u0442\u044B \u0442\u0443\u0442", "ciao", "ehi", "ci sei"]);
function iva(e) {
  let o = e.trim();
  if (o.length > 40) return false;
  if (/^(\?+|\.{2,}|\u2026+)$/u.test(o)) return true;
  let r = o.toLowerCase().replace(/^[\u00BF\u00A1]+|[?!.\u00BF\u00A1\uFF1F\uFF01\u3002\u2026]+$/gu, "").trim();
  if (/^(hi+|hello+|he+y+|yo+)$/.test(r)) return true;
  return Gy.has(r);
}
function Qy(e, o) {
  let { agentContext: r, hookOrigin: g, options: y } = o;
  return (0, import_chunk_865at33z.qi)(r) || y?.settingsHooksOff === true ? e : { ...e, callModel: async function* (k, R) {
    try {
      if ((0, import_chunk_5zps0wmn.Qi)("prompt.attachment", void 0, (0, import_chunk_02wf5c4s.M5e)("prompt.attachment"))) {
        let { resolveAttachments: E } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-4rhdh4ha.js")));
        await E(k.messages, { signal: k.signal, origin: g }, k.options.agentId);
      }
    } catch (w) {
      if (k.signal.aborted) throw w;
      if (!(0, import_chunk_jv7av99m.Fe)(w)) (0, import_chunk_k449cc64.i)(w);
    }
    return yield* e.callModel(k, R);
  } };
}
function Lu(e, o) {
  if (o?.abortController.signal.aborted === true) return;
  if (e instanceof import_chunk_hcg738hf.je) (0, import_chunk_w578pjby.t)(`tool.offer: ${e.message}`, { level: "error" });
  else if (!(0, import_chunk_jv7av99m.Fe)(e)) (0, import_chunk_k449cc64.i)(e);
}
function Du(e) {
  try {
    return (0, import_chunk_5zps0wmn.Qi)("tool.offer", e) && !(0, import_chunk_02wf5c4s.WW)("tool.offer");
  } catch (o) {
    return Lu(o), false;
  }
}
import_chunk_q2404y26.e9e.set({ isHooked: Du, logFailure: Lu, toolsIn(e) {
  return e instanceof import_chunk_b83x8d52.Gne ? e.names.flatMap((o) => e.toolFor(o) ?? []) : [];
}, isAskedAbout(e) {
  return e.name !== import_chunk_2b1wcpvk.ga && !(0, import_chunk_ht27b0vz.p1)(e);
}, staysListed(e) {
  return (0, import_chunk_bzyb60p0._Be)([e]);
}, ask(e, o, r) {
  let g = (0, import_chunk_865at33z.hb)((0, import_chunk_q2404y26.wLn)(e));
  if (!Du({ tool: g })) return true;
  return r.abortController.signal.aborted ? Promise.reject(new import_chunk_jv7av99m.Ie()) : (0, import_chunk_bzyb60p0.jGa)(e).then((y) => (0, import_chunk_bzyb60p0.Aa)("tool.offer", { signal: r.abortController.signal, origin: r.hookOrigin })({ tool: g, provider: y, ...o })).then(({ isOffered: y }) => y);
} });
var ja = () => Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-f1gmnmy7.js")));
import_chunk_bzyb60p0.jQt.set(ja);
var Jy = /* @__PURE__ */ new Set(["user", "assistant", "attachment", "system"]), Zy = (e) => typeof e === "object" && e !== null && "uuid" in e && "type" in e && Jy.has(e.type), Gn = (e, o) => (0, import_chunk_w578pjby.t)(`session.append at the loop's keep point: ${e} failed, the row is kept as made: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
function eh(e) {
  if (e === void 0) return (0, import_chunk_bzyb60p0.ufe)() !== void 0;
  return (0, import_chunk_bzyb60p0.wfi)(e) !== void 0 || import_chunk_bzyb60p0.ben.of(e) !== void 0;
}
function Uu(e, o, r) {
  import_chunk_bzyb60p0.jQt.set(ja);
  let { agentId: g } = e, y = (0, import_chunk_865at33z.qi)(e.agentContext) || e.options.settingsHooksOff === true, h = /* @__PURE__ */ new WeakSet(), k = /* @__PURE__ */ new WeakSet(), R = [], w, E = false;
  try {
    w = (0, import_chunk_bzyb60p0.Uc)()?.conversation?.(g), E = eh(g);
  } catch (re) {
    Gn("reading the running turn", re);
  }
  let O = E && !y, P = (0, import_chunk_bzyb60p0.vHe)({ ...g !== void 0 && { agentId: g }, keep: () => {
  }, rows: () => [...w?.rows() ?? o, ...R], isHookable: O }), I = O ? w?.attachLoop() : void 0, Q = (g === void 0 ? (0, import_chunk_865at33z.Pr)(r) === "main" : E) && !y ? w : void 0, z = Q?.notes.served();
  try {
    Q?.notes.add((0, import_chunk_865at33z.Dqi)(o));
  } catch (re) {
    (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_append_note", "restore_threw"), Gn("reading the held notes", re);
  }
  function X(re) {
    if (!O || !Zy(re) || h.has(re)) return;
    if (re.type === "assistant" && re.message.content.some((ie) => ie.type === "tool_use") && !k.has(re)) k.add(re), R.push(re);
    if (!(0, import_chunk_bzyb60p0.BMe)()) return;
    h.add(re);
    try {
      return Promise.resolve((0, import_chunk_bzyb60p0.XY)(P, [re], { fills: true })).catch((ie) => Gn("an append", ie));
    } catch (ie) {
      Gn("an append", ie);
      return;
    }
  }
  return { through: async function* (pe, ie) {
    let se = false;
    try {
      while (true) {
        let le = await pe.next();
        if (le.done) return se = true, le.value;
        try {
          ie?.(le.value);
        } catch (oe) {
          Gn("a write on a row that leaves", oe);
        }
        let ae = X(le.value);
        if (ae !== void 0) await ae;
        yield le.value;
      }
    } finally {
      if (!se) await pe.return(void 0);
    }
  }, appended: async (re) => {
    await X(re);
  }, answeredAs: (re, pe) => {
    if (h.has(pe)) h.add(re);
  }, withArrivedRows: (re) => {
    try {
      let pe = I?.taken() ?? [];
      if (pe.length === 0) return re;
      let ie = new Set(re.map((le) => le.uuid)), se = pe.filter((le) => !ie.has(le.uuid));
      return se.length === 0 ? re : [...re, ...se];
    } catch (pe) {
      return Gn("taking the rows that arrived", pe), re;
    }
  }, takenNotes: function* (pe, ie) {
    try {
      let se = Q?.notes.waiting() ?? [];
      if (Q === void 0 || se.length === 0) return;
      if ((0, import_chunk_7f901c6t.DQ)(pe)) {
        (0, import_chunk_cqa9hrgx.l)("plugin_function_hooks_append_note", "call_open");
        return;
      }
      let le = (0, import_chunk_r3y72ye0.aTa)(se, pe, ie.now);
      if ((0, import_chunk_r3y72ye0.lTa)(le, pe, ie)) {
        (0, import_chunk_cqa9hrgx.l)("plugin_function_hooks_append_note", "cannot_fold");
        return;
      }
      (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_append_note");
      for (let [ae, oe] of le.entries()) {
        let Ae = se[ae];
        if (Ae !== void 0 && Q.notes.took(Ae.rowUuid)) h.add(oe), yield oe;
      }
    } catch (se) {
      (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_append_note", "take_threw"), Gn("taking the notes that wait", se);
    }
  }, [Symbol.dispose]: () => {
    I?.[Symbol.dispose](), z?.[Symbol.dispose]();
    try {
      if (Q !== void 0) (0, import_chunk_r3y72ye0.Rzr)(Q);
    } catch (re) {
      (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_append_note", "hold_threw"), Gn("holding the notes left waiting", re);
    }
  } };
}
var Nu = "poll-event";
function Bu({ querySource: e, toolUseContext: o, messages: r, turnStartIndex: g }) {
  try {
    if ((0, import_chunk_865at33z.Pr)(e) === "auxiliary") return null;
    let y = o.session, h = o.agentId ?? import_chunk_41appe38.SMe, k = (0, import_chunk_41appe38.lTe)(y, h), R = k.filter((oe) => oe.state === "armed");
    if (R.length === 0) return null;
    let w = new Set(R), E = r.findLastIndex((oe) => oe.type === "assistant" && !(0, import_chunk_f9x2f6cx.Gh)(oe) || oe.type === "user" && oe.isCompactSummary === true), O = r.slice(Math.max(g, E + 1)), I = O.some((oe) => oe.type === "user" && oe.toolUseResult !== void 0) && !O.some((oe) => oe.type === "user" && Wr(oe.message.content) !== void 0) ? r.slice(g) : O, H = th(I), Q = I.filter((oe) => oe.type === "user" && !H.has(oe)), z = oh(Q);
    if (z !== void 0) for (let oe of R) oe.lastTrigger = (0, import_chunk_41appe38.Y_e)(z, import_chunk_41appe38.PDt);
    if (I.some((oe) => oe.type === "user" && qa(oe.origin, k))) return null;
    let X = z, re = Q.some((oe) => oe.type === "user" && (0, import_chunk_865at33z.doe)(oe)), pe = true, ie = false, se = [];
    for (let oe of I) {
      let Ae = H.get(oe), qe = oe.type === "user" ? Wr(oe.message.content) : void 0;
      if (Ae !== void 0 && qe !== void 0) se.push({ type: "non_user_message", source: Ae, text: (0, import_chunk_41appe38.Y_e)(qe, import_chunk_41appe38.PDt) });
    }
    let le = false, ae = (oe) => {
      let Ae = oe ? [...se, oe] : se;
      if (se = [], Ae.length === 0) return;
      (0, import_chunk_41appe38.oNa)(y, { observedKey: h, activity: Ae, trigger: X, triggerRelay: re, opensTurn: pe, openedWith: w }), X = void 0, pe = false;
    };
    return { capture(oe) {
      try {
        let Ae = nh(oe, (0, import_chunk_41appe38.lTe)(y, h));
        if (Ae) se.push(...Ae);
      } catch (Ae) {
        (0, import_chunk_w578pjby.t)(`[agentObserver] capture failed: ${(0, import_chunk_jv7av99m.d)(Ae)}`);
      }
    }, flushSegment() {
      try {
        if (le) return;
        if (!ie) {
          ie = true;
          return;
        }
        ae();
      } catch (oe) {
        (0, import_chunk_w578pjby.t)(`[agentObserver] flush failed: ${(0, import_chunk_jv7av99m.d)(oe)}`);
      }
    }, finish(oe) {
      try {
        if (le) return;
        le = true, ae({ type: "turn_ended", reason: oe });
      } catch (Ae) {
        (0, import_chunk_w578pjby.t)(`[agentObserver] finish failed: ${(0, import_chunk_jv7av99m.d)(Ae)}`);
      }
    } };
  } catch (y) {
    return (0, import_chunk_w578pjby.t)(`[agentObserver] tap creation failed: ${(0, import_chunk_jv7av99m.d)(y)}`), null;
  }
}
function qa(e, o) {
  return e !== void 0 && o.some((r) => r.reportOrigins.has(e));
}
function Ha(e, o) {
  if (e === void 0) return o === true ? "unattributed" : void 0;
  return (0, import_chunk_865at33z.PCt)(e) ? void 0 : e.kind;
}
function th(e) {
  let o = /* @__PURE__ */ new Map(), r;
  for (let g of e) if (g.type === "user") {
    r = g;
    let y = Ha(g.origin, g.isMeta);
    if (y !== void 0) o.set(g, y);
  } else if (g.type === "attachment" && g.attachment.type === "poll_events" && g.attachment.deliveredVia === "value_dispatch" && r !== void 0) if (g.attachment.provenance?.[0]?.authority === "human-principal") o.delete(r);
  else o.set(r, Nu);
  return o;
}
function oh(e) {
  let o = [];
  for (let r of e) {
    if (r.type !== "user") continue;
    let g = Wr(r.message.content);
    if (g) o.push(g);
  }
  if (o.length === 0) return;
  return o.join(`

`);
}
function nh(e, o) {
  if (!e || typeof e !== "object" || !("type" in e)) return null;
  let r = (0, import_chunk_865at33z.eXe)(e);
  if ((0, import_chunk_f9x2f6cx.Gh)(r)) return null;
  if (r.type === "attachment") return rh(r.attachment, o);
  if (r.type === "assistant") {
    let g = [], y = r.message.content;
    for (let h of y) if (h.type === "text") {
      if (h.text.trim()) g.push({ type: "assistant_text", text: (0, import_chunk_41appe38.Y_e)(h.text, import_chunk_41appe38.prr) });
    } else if (h.type === "tool_use") g.push({ type: "tool_call", name: h.name, input: sh(h.input) });
    return g;
  }
  if (r.type === "user") {
    let g = r.message.content;
    if (Array.isArray(g)) {
      let k = [];
      for (let R of g) if (R.type === "tool_result") k.push({ type: "tool_result", content: (0, import_chunk_41appe38.Y_e)(Wr(R.content) ?? "") });
      if (k.length > 0) return k;
    }
    if (qa(r.origin, o)) return null;
    let y = Wr(g);
    if (!y) return null;
    let h = Ha(r.origin, r.isMeta);
    return [h === void 0 ? { type: "user_message", text: (0, import_chunk_41appe38.Y_e)(y, import_chunk_41appe38.PDt), relay: (0, import_chunk_865at33z.doe)(r) } : { type: "non_user_message", source: h, text: (0, import_chunk_41appe38.Y_e)(y) }];
  }
  return null;
}
function rh(e, o) {
  switch (e.type) {
    case "nested_memory":
      return [{ type: "guidance_loaded", path: e.displayPath, content: (0, import_chunk_41appe38.Y_e)(e.content.content) }];
    case "dynamic_skill":
      return [{ type: "skills_discovered", dir: e.displayPath, names: e.skillNames }];
    case "queued_command": {
      let r = (0, import_chunk_xfj2cwfv.K0)(e.origin, e.commandMode);
      if (qa(r, o)) return null;
      let g = Wr(e.prompt);
      if (!g) return null;
      let y = (0, import_chunk_41appe38.Y_e)(g, import_chunk_41appe38.PDt), h = (0, import_chunk_bzyb60p0.uSe)(y, r, { verifiedSlackHumanTurn: e.verifiedSlackHumanTurn, isMeta: e.isMeta, hearthServerEnvelope: (0, import_chunk_865at33z.pzn)(e), hearthJoinedTextBlocks: Array.isArray(e.prompt) && (0, import_chunk_4smdap7r.U)(e.prompt, (w) => w.type === "text") > 1, sendMessageToolAbsent: e.sendMessageToolAbsent }), k = Ha(r, e.isMeta);
      if (k !== void 0) return [{ type: "non_user_message", source: k, text: h }];
      let R = (0, import_chunk_865at33z.doe)(e);
      return [{ type: "user_message", text: R ? h : y, relay: R }];
    }
    case "poll_events": {
      let r = e.envelopes.flatMap((g, y) => {
        switch (e.kinds[y]) {
          case import_chunk_qf73a9we.kE:
            return (0, import_chunk_r3kja8v6.ue)() ? [{ type: "tool_result", content: (0, import_chunk_41appe38.Y_e)(g) }] : [];
          case import_chunk_qf73a9we.gre:
            return [];
          default: {
            let h = (0, import_chunk_41appe38.Y_e)(g, import_chunk_41appe38.PDt);
            return [e.provenance?.[y]?.authority === "human-principal" ? { type: "user_message", text: h, relay: false } : { type: "non_user_message", source: Nu, text: h }];
          }
        }
      });
      return r.length > 0 ? r : null;
    }
    default:
      return null;
  }
}
function Wr(e) {
  if (typeof e === "string") return e.trim() ? e : void 0;
  if (Array.isArray(e)) {
    let o = e.map((r) => r && typeof r === "object" && "type" in r && r.type === "text" ? r.text : "").filter(Boolean);
    return o.length > 0 ? o.join(`
`) : void 0;
  }
  return;
}
function sh(e) {
  try {
    return JSON.stringify(e) ?? String(e);
  } catch {
    return "[unserializable]";
  }
}
function qu(e, o, r, g, y, h, k) {
  try {
    let R = (0, import_chunk_bzyb60p0.Q_t)(e, (0, import_chunk_bzyb60p0.Fie)(e)).savingTokens, w = (0, import_chunk_bzyb60p0.fZt)();
    if (!R && (w === "off" || w === "shadow")) return;
    let E = R ? void 0 : (0, import_chunk_bzyb60p0.Dar)(e, o, r, g, void 0, y, k && !(0, import_chunk_f9x2f6cx.zl)(k.betas, import_chunk_xfj2cwfv.J_) && ((0, import_chunk_865at33z.E_)(r) || k.bodyModels.some((se) => (0, import_chunk_865at33z.E_)(se))), k && { thinkingIsOn: k.thinkingIsOn });
    if (!E && !R) return;
    let O = new Set(E?.edit.exclude_tools), P = new Set(E?.edit.clear_tool_inputs), I = /* @__PURE__ */ new Map(), H = [], Q = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Map(), X = 0;
    for (let se of e) {
      if (se.type !== "assistant" && se.type !== "user" || (0, import_chunk_f9x2f6cx.Hu)(se) || !Array.isArray(se.message.content)) continue;
      let le = se.type === "assistant" ? (se.batchToolUses ?? []).map((ae) => `${ae.id}_`) : [];
      for (let ae of se.message.content) if (se.type === "assistant" && ae?.type === "tool_use" && typeof ae.name === "string") {
        let oe = (0, import_chunk_qebpc5de.Gl)(ae.name);
        if (!I.has(ae.id) && !O.has(oe) && !le.some((Ae) => ae.id.startsWith(Ae))) I.set(ae.id, { sentName: oe, input: ae.input, replyId: se.message.id });
      } else if (ae?.type === "tool_result") {
        let oe = I.get(ae.tool_use_id);
        if (oe && !Q.has(ae.tool_use_id)) {
          Q.add(ae.tool_use_id), H.push({ ...oe, result: ae });
          let Ae = (z.get(oe.replyId) ?? 0) + 1;
          z.set(oe.replyId, Ae), X = Math.max(X, Ae);
        }
      }
    }
    let re = 0, pe = 0;
    if (E) {
      let se = E.edit.trigger.value, le = se + 1 - E.edit.keep.value, ae = H.length + X, oe = 1 + Math.floor((ae - se - 1) / le);
      re = Math.max(oe * le, Math.min(E.returnAfterIdle.toolUsesClearedSinceIdle, H.length - E.returnAfterIdle.keepToolUses)), pe = ae - E.edit.keep.value;
    }
    let ie = /* @__PURE__ */ new Set();
    for (let [se, { sentName: le, input: ae, result: oe }] of H.entries()) {
      let Ae = R ? R.has(oe.tool_use_id) : re > 0 && se < pe, { content: qe } = oe, rt = typeof qe === "string" ? qe.length : Array.isArray(qe) ? qe.reduce((Oe, He) => He?.type === "text" && typeof He.text === "string" ? Oe + He.text.length : Oe, 0) : 0, Ue = Ae && P.has(le) && (0, import_chunk_bzyb60p0.CJo)(qe);
      if (Ue || Ae && rt >= import_chunk_bzyb60p0.TJo) re--;
      if (oe.is_error === true || typeof ae !== "object" || !ae) continue;
      if ((le === import_chunk_k883m4fq.De || le === import_chunk_rb36kwbn.Dt || le === import_chunk_rb36kwbn.lt && Ue) && "file_path" in ae && (0, import_chunk_2yx6c1y2.KC)(ae.file_path)) {
        let Oe = (0, import_chunk_n2dbhmj2.Fa)(ae.file_path);
        if (Oe === null) continue;
        if (le === import_chunk_rb36kwbn.Dt && !Ue || !Ae && !("offset" in ae) && !("limit" in ae) && typeof qe === "string" && !(0, import_chunk_xzph4c6z.Zan)(qe)) ie.delete(Oe);
        else if (Ae) ie.add(Oe);
      } else if (Ae && import_chunk_wwft95x8.dp.includes(le) && "command" in ae && typeof ae.command === "string") for (let Oe of (0, import_chunk_bzyb60p0.b_i)(ae.command)) {
        let He = (0, import_chunk_2yx6c1y2.KC)(Oe.filePath) ? (0, import_chunk_n2dbhmj2.Fa)(Oe.filePath) : null;
        if (He !== null) ie.add(He);
      }
    }
    for (let se of ie) {
      let le = h.get(se);
      if (le && !le.contentNotInModelContext) h.set(se, { ...le, contentNotInModelContext: true });
    }
  } catch (R) {
    (0, import_chunk_bzyb60p0.cne)(R, "sad", "marking_cleared_reads_threw");
  }
}
function ih(e) {
  return Array.isArray(e.content) && e.content.some((o) => o.type === "image");
}
function Wu(e, { options: o, querySource: r, model: g, effort: y, agentId: h, turnStart: k, resumeActive: R, stamp: w }) {
  if (!k || R || o.bareFork || (0, import_chunk_2gtmjt3y.Xn)()) return [];
  try {
    let E = Gu(e, { querySource: r, model: g, effort: y, agentId: h });
    if (!E) return [];
    let O = 0;
    if (XVs(g)) {
      let P = (0, import_chunk_bzyb60p0.qMn)(e);
      for (let I of e) if (I.type === "assistant" && Array.isArray(I.message.content) && P.get(I.message.id) !== 0) O += (0, import_chunk_4smdap7r.U)(I.message.content, import_chunk_bzyb60p0.aae);
    }
    if (!(0, import_chunk_bzyb60p0.w6a)(E.returnAfterIdle, r)) return [];
    return (0, import_chunk_y53wbr8a.a)("tengu_tool_result_clearing_after_idle_cut", { cut_tool_uses: E.callIds.length, earlier_named_tool_uses: E.earlierNamed, kept_tool_uses: E.kept, rough_tokens_kept: E.roughTokensKept, spared_error_tool_uses: E.errorsSpared, rough_tokens_spared_errors: E.roughTokensOfErrorsSpared, rough_tokens_to_clear: E.roughTokens, returned_at_ms: E.returnAfterIdle.returnedAtMs, thinking_blocks_left_out: O }), [...O > 0 ? [(0, import_chunk_bzyb60p0.Ut)({ type: "thinking_stripped", scope: "all", cause: "return_after_idle" }, w)] : [], (0, import_chunk_bzyb60p0.Ut)({ type: "tool_results_cut", callIds: E.callIds, standIn: import_chunk_bzyb60p0.cZt, roughTokens: E.roughTokens }, w)];
  } catch (E) {
    return (0, import_chunk_bzyb60p0.cne)(E, "sad", "writing_cut_record_threw"), [];
  }
}
function Gu(e, { querySource: o, model: r, effort: g, agentId: y }) {
  let h = (0, import_chunk_bzyb60p0.AJo)(e, o, y, r, () => {
    let z = (0, import_chunk_bzyb60p0.SJr)();
    if (!z || (0, import_chunk_2gtmjt3y.zge)(r, z.heldOutModels) || !(0, import_chunk_bzyb60p0.pir)()) return false;
    let X = g();
    return X === void 0 || !z.heldOutEfforts.includes((0, import_chunk_k67pwqya.CN)(X));
  });
  if (!h) return;
  let k = (0, import_chunk_bzyb60p0.yJr)(e), R = new Set(h.callIdsInBatch), w = new Set(h.connectorCallIdsInBatch), E = [], O = 0, P = 0, I = 0, H = 0, Q = 0;
  for (let z of e) {
    if (z.type !== "user" || !Array.isArray(z.message.content)) continue;
    for (let X of z.message.content) {
      if (X.type !== "tool_result" || !R.has(X.tool_use_id) || k.has(X.tool_use_id)) continue;
      if ((0, import_chunk_bzyb60p0.bJr)(X, import_chunk_bzyb60p0.cZt) === void 0) {
        if (X.is_error === true) H++, Q += (0, import_chunk_c1hnv4fm.Gfe)(X);
        continue;
      }
      let re = (0, import_chunk_c1hnv4fm.Gfe)(X);
      if (w.has(X.tool_use_id) && z.mcpCallNotReadOnly === "no_hint" && re <= import_chunk_bzyb60p0.vJo && !ih(X)) {
        P++, I += re;
        continue;
      }
      E.push(X.tool_use_id), O += re;
    }
  }
  return E.length === 0 || O + ((0, import_chunk_bzyb60p0.b6a)(e, r) ? I : 0) < import_chunk_bzyb60p0.JUe.clearAtLeastTokens ? void 0 : { returnAfterIdle: h, callIds: E, roughTokens: O, kept: P, roughTokensKept: I, errorsSpared: H, roughTokensOfErrorsSpared: Q, earlierNamed: k.size };
}
function XVs(e) {
  return (0, import_chunk_bzyb60p0.SJr)()?.leavesOutOldThinking === true && (0, import_chunk_865at33z.L7e)({ runtimeOverride: (0, import_chunk_f9x2f6cx.hVe)(e), resolvedModel: e, canonicalModel: (0, import_chunk_865at33z.St)(e) }) === "adaptive";
}
function ZEa(e, o, r, g, y, h) {
  try {
    let k = Date.now(), [R, w] = ((0, import_chunk_2gtmjt3y.Xn)() ? [] : [k, k + y]).map((E) => Gu([...e, { ...(0, import_chunk_bzyb60p0.Me)({ content: "x" }), timestamp: new Date(E).toISOString() }], { querySource: "sdk", model: r, effort: g, agentId: void 0 })?.callIds);
    if (!(0, import_chunk_z688m88d.Zt)(R, w) || (0, import_chunk_bzyb60p0.k6a)(e, o, r, y, R !== void 0, h)) return "refuse";
    return R && new Map(R.map((E) => [E, import_chunk_bzyb60p0.cZt]));
  } catch (k) {
    return (0, import_chunk_bzyb60p0.cne)(k, "sad", "cache_warm_clearing_check_threw", h), "refuse";
  }
}
var S$e = (e, o) => (0, import_chunk_bzyb60p0.tv)((0, import_chunk_865at33z.Or)([...e]), o);
var ah = "claude/cutEarlierResults", Wa = "[Result removed: a later call of this tool withdrew it, and it no longer applies.]", Qa = "[Result removed: it no longer applies.]", lh = /^[a-zA-Z0-9_-]{1,128}$/;
function Vu(e, { options: o, querySource: r, agentId: g, resumeActive: y, stamp: h }) {
  if (g !== void 0 || (0, import_chunk_865at33z.Pr)(r) !== "main" || y || o.bareFork || (0, import_chunk_2gtmjt3y.Xn)()) return [];
  try {
    if (!e.some((X) => Ku(X) || ii(X) !== void 0) || (0, import_chunk_bzyb60p0.i7o)() !== "cut_and_recorded") return [];
    let k = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), w = [], E = [], O = /* @__PURE__ */ new Map([[Wa, /* @__PURE__ */ new Set()], [Qa, /* @__PURE__ */ new Set()]]);
    for (let X of e) {
      let re = ii(X)?.names;
      if (re?.size) {
        for (let [ie, se] of k) if (re.has(se)) E.push(ie);
      }
      if (X.type !== "assistant" && X.type !== "user" || !Array.isArray(X.message.content)) continue;
      let pe = Ku(X);
      for (let ie of X.message.content) {
        if (!(0, import_chunk_jsm9pvcb.Wi)(ie)) continue;
        if (X.type === "assistant" && ie.type === "tool_use" && typeof ie.name === "string" && (0, import_chunk_bzyb60p0.ELt)(ie.name, "withdrawn_by_tool")) {
          k.set(ie.id, ie.name);
          let le = R.get(ie.name) ?? [];
          le.push(ie.id), R.set(ie.name, le);
        }
        if (X.type !== "user" || ie.type !== "tool_result") continue;
        let se = R.get(k.get(ie.tool_use_id) ?? "");
        if (se === void 0) continue;
        for (let [le, ae] of O) if ((0, import_chunk_bzyb60p0.bJr)(ie, le) !== void 0) ae.add(ie.tool_use_id);
        if (pe) w.push(...se.splice(0, se.indexOf(ie.tool_use_id)));
      }
    }
    let P = (0, import_chunk_bzyb60p0.yJr)(e), I = (X, re) => {
      let pe = (0, import_chunk_4smdap7r.M)(X).filter((se) => O.get(re)?.has(se) && !P.has(se));
      if (pe.length === 0) return [];
      let ie = (0, import_chunk_bzyb60p0.Fie)([...e, $a(pe, re)]);
      return pe.filter((se) => ie?.has(se));
    }, H = [], Q = I(w, Wa);
    if (Q.length > 0) H.push($a(Q, Wa, h)), (0, import_chunk_cqa9hrgx.u)("compact_tool_results_withdrawn", { count: Q.length });
    let z = I(E.filter((X) => !Q.includes(X)), Qa);
    if (z.length > 0) H.push($a(z, Qa, h));
    return H;
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), (0, import_chunk_cqa9hrgx.m)("compact_tool_results_withdrawn", "writing_record_threw"), [];
  }
}
function $a(e, o, r) {
  return (0, import_chunk_bzyb60p0.Ut)({ type: "tool_results_cut", callIds: e, standIn: o, roughTokens: 0, cause: "withdrawn_by_tool" }, r);
}
function Ku(e) {
  return e.type === "user" && e.mcpMeta?._meta?.[ah] === true && !(0, import_chunk_1hg0ytx8.ZDn)(e);
}
function ii(e) {
  let o = e.type === "user" ? e.withdrawnTools : void 0;
  if (typeof o !== "object" || o === null || !("names" in o) || !Array.isArray(o.names)) return;
  let r = o.names.filter(Yu);
  return { names: new Set(r), isWholeList: "isWholeList" in o && o.isWholeList === true && r.length === o.names.length };
}
function Yu(e) {
  return typeof e === "string" && lh.test(e) && (0, import_chunk_bzyb60p0.ELt)(e, "withdrawn_by_tool");
}
function zu(e) {
  let o;
  for (let r of e) {
    let g = ii(r);
    if (g !== void 0) o = g.isWholeList ? g.names : /* @__PURE__ */ new Set([...o ?? [], ...g.names]);
  }
  return o;
}
function Va(e, o) {
  try {
    let [r, ...g] = e, y = [...zu(o) ?? []];
    return r === void 0 || y.length === 0 ? e : [{ ...r, withdrawnTools: { names: y, isWholeList: false } }, ...g];
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), (0, import_chunk_cqa9hrgx.m)("compact_tool_results_withdrawn", "writing_record_threw"), e;
  }
}
function dh(e) {
  return `The ${e} tool is no longer available in this conversation. Don't call it, and don't mention it or this note.`;
}
function fh(e) {
  return `The ${e} tool is available again. Call it when its description fits, and don't mention this note.`;
}
function Xu(e, { options: o, querySource: r, agentId: g, resumeActive: y, stamp: h }) {
  if (g !== void 0 || (0, import_chunk_865at33z.Pr)(r) !== "main" || y || o.bareFork || (0, import_chunk_2gtmjt3y.Xn)()) return [];
  try {
    let k = e.findLast((I) => I.type === "user" || I.type === "assistant");
    if (k?.type === "user" && Array.isArray(k.message?.content) && k.message.content.some((I) => I?.type === "tool_result")) return [];
    let R = zu(e);
    if (R === void 0 || (0, import_chunk_bzyb60p0.i7o)() !== "cut_and_recorded") return [];
    let w = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
    for (let I of e) {
      if (I.type === "assistant") E.clear();
      let H = ii(I);
      if (H !== void 0) {
        for (let z of H.isWholeList ? w : []) E.add(z);
        for (let z of H.names) E.delete(z);
      }
      let Q = I.type === "attachment" && I.attachment?.type === "critical_system_reminder" ? I.attachment.withdrawnTool : void 0;
      if (typeof Q === "object" && Q !== null && "name" in Q && Yu(Q.name)) if (E.delete(Q.name), "isOff" in Q && Q.isOff === true) w.add(Q.name);
      else w.delete(Q.name);
    }
    let O = [...[...R].filter((I) => !w.has(I)).map((I) => ({ name: I, isOff: true, content: dh(I) })), ...[...E].map((I) => ({ name: I, isOff: false, content: fh(I) }))], P = O.length > 0 ? S$e(e, o.tools).at(-1) : void 0;
    if (P?.type === "user" && Array.isArray(P.message.content) && P.message.content.at(-1)?.type === "tool_result") return [];
    return O.map(({ name: I, isOff: H, content: Q }) => (0, import_chunk_bzyb60p0.Ut)({ type: "critical_system_reminder", content: Q, withdrawnTool: { name: I, isOff: H } }, h));
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), (0, import_chunk_cqa9hrgx.m)("compact_tool_results_withdrawn", "writing_record_threw"), [];
  }
}
function Ju(e, o) {
  if (!e.some(import_chunk_qf73a9we.W_)) return [];
  let r = /* @__PURE__ */ new Set();
  for (let g = o.length - 1; g >= 0; g--) {
    let y = o[g];
    if ((0, import_chunk_865at33z.On)(y)) break;
    if ((0, import_chunk_f9x2f6cx.Hu)(y)) continue;
    if (y.type === "assistant") break;
    if (y.type === "attachment" && y.attachment?.type === "poll_events" && Array.isArray(y.attachment.envelopes)) y.attachment.envelopes.forEach((h) => r.add(h));
  }
  if (r.size === 0) return [];
  return e.filter((g) => (g.pollEvent?.declared !== void 0 || g.pollEvent?.wake === false) && r.has((0, import_chunk_qf73a9we.Qit)(g)) && !(0, import_chunk_qf73a9we._re)(g.pollEvent.kind));
}
var gh = "tengu_snug_hippo";
function ai(e, o) {
  try {
    if (e.length === 0) return;
    let r = (0, import_chunk_865at33z.b)(gh, null);
    if (typeof r !== "object" || r === null || Array.isArray(r) || (0, import_chunk_bzyb60p0.YLt)({ ...r }, o)?.[1] !== true) return;
    (0, import_chunk_cqa9hrgx.u)("memory_snapshot_placement", { count: e.length });
    for (let g of e) g.placement = "next_to_message";
  } catch (r) {
    (0, import_chunk_cqa9hrgx.l)("memory_snapshot_placement", "mark_failed"), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(r), "memory snapshot placement failed; rows left unmarked"));
  }
}
function Zu({ host: e, messages: o, model: r, createAttachmentMessage: g }) {
  try {
    let y = (0, import_chunk_sjqze7qg.x7a)(e, o, r).map(g);
    return ai(y, r), y;
  } catch (y) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(y)), [];
  }
}
async function ec(e, o, r, g) {
  try {
    await (0, import_chunk_sjqze7qg.O7a)(e, o, r, g);
  } catch (y) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(y));
  }
}
var yh = `Write a short summary label describing what these tool calls accomplished. It appears as a single-line row in a mobile app and truncates around 30 characters, so think git-commit-subject, not sentence.

Keep the verb in past tense and the most distinctive noun. Drop articles, connectors, and long location context first.

Examples:
- Searched in auth/
- Fixed NPE in UserService
- Created signup endpoint
- Read config.json
- Ran failing tests`;
async function oc({ tools: e, messages: o, signal: r, isNonInteractiveSession: g, lastAssistantText: y, agentContext: h, credentials: k }) {
  if (e.length === 0) return null;
  try {
    let R = e.map((H) => {
      let Q = tc(H.input, 300), z = tc(H.output, 300);
      return `Tool: ${H.name}
Input: ${Q}
Output: ${z}`;
    }).join(`

`), w = y ? `User's intent (from assistant's last message): ${y.slice(0, 200)}

` : "", E = (0, import_chunk_g9n176jp.e9)((0, import_chunk_g9n176jp.rM)(o, void 0, false)), O = await (0, import_chunk_bzyb60p0.tG)({ systemPrompt: (0, import_chunk_4mh8nmh5.Sl)([yh]), userPrompt: `${E}${w}Tools completed:

${R}

Label:`, signal: r, options: { querySource: "tool_use_summary_generation", toolFreeHelper: true, enablePromptCaching: false, agents: [], isNonInteractiveSession: g, hasAppendSystemPrompt: false, mcpTools: [], agentContext: h, credentials: k } });
    if (O.isApiErrorMessage) return (0, import_chunk_cqa9hrgx.l)("summary_tool_use_generate", "api_error"), null;
    let P = O.message.content.filter((H) => H.type === "text").map((H) => H.type === "text" ? H.text : "").join("").trim(), I = (0, import_chunk_7cfjrnwy.Ir)(P).trimEnd();
    if (!I) return (0, import_chunk_cqa9hrgx.l)("summary_tool_use_generate", "empty_response"), null;
    return (0, import_chunk_cqa9hrgx.u)("summary_tool_use_generate"), I;
  } catch (R) {
    if (r.aborted) return null;
    let w = (0, import_chunk_jv7av99m.D)(R);
    return w.cause = { errorId: "tool_use_summary_generation_failed" }, (0, import_chunk_k449cc64.i)(w), (0, import_chunk_cqa9hrgx.m)("summary_tool_use_generate", "api_failed"), null;
  }
}
function tc(e, o) {
  try {
    let r = (0, import_chunk_w578pjby._)(e);
    if (r.length <= o) return r;
    return r.slice(0, o - 3) + "...";
  } catch {
    return "[unable to serialize]";
  }
}
function _h(e) {
  return e && e.length ? (0, import_chunk_xfj2cwfv.fPs)(e, import_chunk_v6yexwhb.xge) : 0;
}
var DGr = _h;
var VVs = 64, KVs = 4096, nc = new import_chunk_2904xtvq.j(() => ({ writesAreChecked: false, paths: /* @__PURE__ */ new Set() }));
function Ya(e, o) {
  if (o.length > KVs || !e.has(o) && e.size >= VVs) return false;
  return e.add(o), true;
}
var Sh = 2e3, li = new import_chunk_pzzqg6s3.ze(() => ({ pending: void 0, over: false, sameText: /* @__PURE__ */ new Map() }));
function XEa(e, o, r, g, y) {
  try {
    let h = li.of(e);
    if (h.pending = void 0, !y || h.over || !(0, import_chunk_at8q9dqk.hq)() || !import_chunk_h8v51dgb.C0t.mayBeDue(e) || !r.some((w) => w.type === "attachment" && w.attachment.type === "project_doc_reads" && (0, import_chunk_ta6q9jek.a1)(w.attachment)?.some((E) => E.read.changed !== "removed" && E.read.file_kind === void 0)) || (0, import_chunk_865at33z.IRs)(r) || (0, import_chunk_bzyb60p0.oSt)()?.getTeleportCacheState().status === "active" || !(0, import_chunk_865at33z.b)(import_chunk_h8v51dgb.sai, false) || !(0, import_chunk_865at33z.b)(import_chunk_h8v51dgb.IXr, false)) return;
    let k = Date.now(), R = new AbortController();
    h.pending = (0, import_chunk_5appeerh.me)((0, import_chunk_5appeerh.Tn)((0, import_chunk_h8v51dgb.y4e)(o).then((w) => w.ok ? (0, import_chunk_at8q9dqk.jWa)(AbortSignal.any([g, R.signal])) : { reason: w.reason }), g, () => new import_chunk_jv7av99m.Ie()), import_chunk_c203g5kd.So.CLAUDE_CODE_PROJECT_DOC_LOOK_TIMEOUT_MS ?? Sh).then((w) => {
      if (w !== void 0 && !("reason" in w)) return (0, import_chunk_cqa9hrgx.u)("projects_context_doc_hashes", { duration_ms: Date.now() - k }), w;
      R.abort(), h.over = true, (0, import_chunk_cqa9hrgx.l)("projects_context_doc_hashes", w?.reason ?? "no_answer_in_time");
      return;
    }, (w) => {
      h.over ||= !g.aborted, (0, import_chunk_cqa9hrgx.l)("projects_context_doc_hashes", g.aborted ? "stopped" : (0, import_chunk_at8q9dqk.DXr)(w) ? "unknown_op" : "failed");
      return;
    });
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
  }
}
async function rc(e) {
  try {
    let o = li.peek(e), r = o?.pending;
    if (o !== void 0) o.pending = void 0;
    let g = await r;
    return g && { ...g, salted: new Map([...g.salted].filter(([y, h]) => o?.sameText.get(y) !== h)) };
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function sc() {
  return (0, import_chunk_865at33z.b)("tengu_peppy_nest", false) && (0, import_chunk_s0zsg6za.bbl)();
}
var ic = new import_chunk_pzzqg6s3.ze(() => ({ latest: void 0 }));
function y2o(e) {
  try {
    return (0, import_chunk_fe5esh7d.n_r)() ? (0, import_chunk_fe5esh7d.TA)(e)?.contextRendering : void 0;
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function Ch(e) {
  try {
    return (0, import_chunk_fe5esh7d.n_r)() && (0, import_chunk_bzyb60p0.zue)(e) !== void 0 ? "announced" : void 0;
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function lc(e) {
  let { claudeMd: o, ...r } = e.userContext;
  return { ...e, userContext: o === "" ? r : e.userContext, bare: true, rendering: "inline" };
}
async function fs(e, o, r, g) {
  let { session: y } = r, h = r.options.bareFork ? void 0 : (0, import_chunk_ata1yp21.IYs)(y, e), k = (0, import_chunk_rdcxsb11._Ra)(h !== void 0 && (g.afterCompaction === true || qVs(g.messages) === void 0) ? await h : e, r, g), R = { userContext: k, systemContext: o, announced: {}, workerTools: void 0, sections: [], instructions: void 0, refreshReason: "session_start", bare: r.options.bareFork === true, carriesContext: Object.keys(k).length > 0 || Object.keys(o).length > 0, rendering: void 0 };
  if (r.options.bareFork && r.options.querySource !== "resume_cache_warm") return R;
  let w = y2o(g.messages) ?? Ch(g.messages);
  if (w === "inline") return lc(R);
  try {
    let E = k.claudeMd === void 0 ? void 0 : await (0, import_chunk_bzyb60p0.yXo)(y, (0, import_chunk_m15w38ag.ne)() ? r.storageV5 : void 0, (0, import_chunk_m15w38ag.ne)() ? r.credentials : void 0), O = E && (0, import_chunk_bq31aqv6.ndo)(E, r.options), P = { ...k }, I = { ...o }, H = {};
    for (let oe of import_chunk_bzyb60p0.iJr) {
      let Ae = P[oe] ?? I[oe];
      if (Ae) H[oe] = Ae;
      delete P[oe], delete I[oe];
    }
    delete P.currentDate;
    let Q = (0, import_chunk_8fkaxt3d.zbt)() ? P.workerToolsContext : void 0;
    if (Q !== void 0) delete P.workerToolsContext;
    delete I.currentDate;
    let z = y.host.launchOptions.diskless(), X = nc.of(y.host), re = z && (0, import_chunk_865at33z.b)("tengu_mellow_thistle", false);
    if (re) {
      for (let oe of (0, import_chunk_bzyb60p0.xja)(g.messages)) if (!za(oe)) Ya(X.paths, oe);
    }
    let pe, ie;
    if (P.claudeMd !== void 0 && O !== void 0) {
      let oe = (0, import_chunk_bzyb60p0.Rja)(O);
      pe = oe;
      let Ae = dc(pe), { readFileState: qe } = r, { tools: rt } = r.options, Ue = re && X.writesAreChecked, Oe = pe.filter((He) => He.type === "Project" && (!z || Ue || za(He.path)));
      if (Oe.length > 0 && qe !== void 0 && rt !== void 0 && (0, import_chunk_2xjdqky3.om)() && Eh(r) && !y.host.launchOptions.isInteractive() && !rt.some((He) => (0, import_chunk_4vsz8a99.gt)(He, import_chunk_h4t4qfaq.vo))) {
        let He = (0, import_chunk_bzyb60p0.Il)(r.loopModel), We = (0, import_chunk_bzyb60p0.L6a)(He, r.options.autoCompactWindow), J = dc(Oe), ve = Ae > We ? "announcedFileCut" : void 0;
        if (ve === void 0) {
          let G = g.compaction?.replacedMessages ?? g.messages, ye = (0, import_chunk_bzyb60p0.dir)(G), he = Oe.some((dt) => ye?.get(dt.path)?.cutForRoom === true);
          if (he || (g.compaction?.consecutiveRapidRefills ?? 0) >= import_chunk_bzyb60p0.CPn - 1) {
            let dt = (0, import_chunk_865at33z.b)("tengu_brisk_acorn", 0), Ge = (J - We / 10) / He.bytesPerToken;
            if (typeof dt === "number" && dt > 0 && Ge >= dt && (he || !(0, import_chunk_bzyb60p0.tZr)((0, import_chunk_bzyb60p0.lZt)(G), Ge, He, r.options.autoCompactWindow))) ve = he ? "announcedFileCutKept" : "announcedFileCutBeforeStop";
          }
        }
        if (ve !== void 0 && Ae - J <= We && (0, import_chunk_865at33z.b)("tengu_temporal_haven", false)) {
          let G = (0, import_chunk_bz1f2qnq.Z)(r), ye = rt.some((Ge) => (0, import_chunk_4vsz8a99.gt)(Ge, import_chunk_k883m4fq.De)), he = Math.floor(We / 10 / Oe.length);
          pe = pe.map((Ge) => {
            if (!Oe.includes(Ge)) return Ge;
            let no = (0, import_chunk_7cfjrnwy.FB)(Ge.content, he).length;
            if (Ge.content.length <= no) return Ge;
            let lo = z && !za(Ge.path);
            if (!lo) qe.markStartOnly(Ge.path);
            else if (!Ya(X.paths, Ge.path)) return Ge;
            return { ...Ge, content: (0, import_chunk_bzyb60p0.zYo)(Ge.content, ye && (lo || !z && (0, import_chunk_p1ewvgeh.w2e)(Ge.path, G)) ? Ge.path : void 0, no, true), startOnly: true, ...ve !== "announcedFileCut" && { cutForRoom: true } };
          });
          let dt = import_chunk_bzyb60p0.jli.of(y.host);
          if (pe.some((Ge) => Ge.startOnly) && !dt[ve]) dt[ve] = true, (0, import_chunk_cqa9hrgx.l)("context_claude_md_load", bh[ve]);
        }
      }
      if ((0, import_chunk_865at33z.Pr)(g.querySource) === "main" && r.agentId === void 0) ic.of(y).latest = { bytes: Ae, cutCount: (0, import_chunk_4smdap7r.U)(pe, (He) => He.startOnly) };
      try {
        let He = oe.filter((J, ve) => pe?.[ve]?.startOnly), We = He.length > 0 ? (0, import_chunk_865at33z.b)("tengu_vivid_treehouse", 0) : 0;
        if (typeof We === "number" && We > 0) {
          let J = Math.min(We, Mh), ve = (0, import_chunk_bzyb60p0.VYo)({ files: He }), G = Buffer.byteLength(ve);
          if (G <= J) ie = { text: ve }, (0, import_chunk_cqa9hrgx.u)("context_claude_md_for_check", { bytes: G });
          else (0, import_chunk_cqa9hrgx.l)("context_claude_md_for_check", "over_limit", { bytes: G, limit: J });
        }
      } catch (He) {
        (0, import_chunk_k449cc64.i)(He), (0, import_chunk_cqa9hrgx.m)("context_claude_md_for_check", "threw");
      }
      delete P.claudeMd;
    } else if (P.claudeMd === "") delete P.claudeMd;
    let { cacheBreaker: se, ...le } = I, ae = [...Object.entries(P), ...Object.entries(le)].filter(([, oe]) => oe !== "").map(([oe, Ae]) => ({ name: oe, text: Ae }));
    return { userContext: {}, systemContext: se === void 0 ? {} : { cacheBreaker: se }, announced: H, workerTools: Q, sections: ae, instructions: pe, ...ie && { wholeCutFiles: ie }, refreshReason: (0, import_chunk_bzyb60p0.pQr)(y) ?? "session_start", bare: R.bare, carriesContext: R.carriesContext, rendering: "announced" };
  } catch (E) {
    if ((0, import_chunk_k449cc64.i)(E), Ah(E, g.querySource, w === "announced" ? "none" : "inline", g.afterCompaction === true), w === "announced") {
      let { cacheBreaker: O } = o;
      return { ...R, userContext: {}, systemContext: O === void 0 ? {} : { cacheBreaker: O }, bare: true, rendering: "announced" };
    }
    return lc(R);
  }
}
async function Xa(e, o, r, g, y) {
  if (e.rendering !== "announced") return e;
  let h = await fs(o, r, g, { ...y, afterCompaction: true });
  if (!e.instructions || h.instructions) return h;
  let k = await (0, import_chunk_ata1yp21.IYs)(g.session, Object.fromEntries(e.sections.map(({ name: R, text: w }) => [R, w])));
  return k === void 0 ? e : { ...e, sections: Object.entries(k).map(([R, w]) => ({ name: R, text: w })) };
}
function za(e) {
  return import_path.posix.normalize(e).startsWith(import_chunk_6mfepmbb.tQi);
}
var bh = { announcedFileCut: "announced_file_cut", announcedFileCutBeforeStop: "announced_file_cut_before_stop", announcedFileCutKept: "announced_file_cut_kept" }, Mh = 4e6;
function dc(e) {
  return e.reduce((o, r) => o + Buffer.byteLength(r.content), 0);
}
function Eh(e) {
  return "getAppState" in e;
}
function Ah(e, o, r, g) {
  try {
    (0, import_chunk_y53wbr8a.a)("tengu_context_routing_failed", { error_class: (0, import_chunk_jv7av99m.A$)(e), query_source: (0, import_chunk_865at33z.ka)(o), fallback: (0, import_chunk_78g0060s.f)(r), after_compaction: g });
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
  }
}
async function ui(e, o, r, g) {
  let { gitStatus: y, ...h } = o.announced;
  try {
    let k = g ? (0, import_chunk_bzyb60p0.LGa)(r.session) : void 0;
    if (!o.carriesContext || o.bare) return o;
    let R, w = (0, import_chunk_bzyb60p0.zue)(e);
    if (w !== void 0) R = w.gitStatus;
    else if (!r.options.omitGitStatus && (0, import_chunk_bzyb60p0.sar)()) {
      let E = (0, import_chunk_bzyb60p0.Gue)();
      if (E === void 0 || !(await E)?.system) R = await (k ?? (0, import_chunk_bzyb60p0._Xo)(r.session)) ?? void 0;
    }
    return { ...o, announced: R === void 0 ? h : { ...h, gitStatus: R } };
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), { ...o, announced: h };
  }
}
function uc(e, o, r, g, y, h) {
  try {
    let k = import_chunk_h8v51dgb.C0t.mayBeDue(r.session);
    if (!k && import_chunk_h8v51dgb.b4e.peek(r.session)?.listed === void 0 || !g || !o.carriesContext || o.bare || (0, import_chunk_865at33z.IRs)(e) || (0, import_chunk_bzyb60p0.oSt)()?.getTeleportCacheState().status === "active") return false;
    if (tl(e) !== void 0) {
      if (!y || import_chunk_h8v51dgb.C0t.changesSince(r.session, e, h) === void 0 || !(0, import_chunk_865at33z.b)(import_chunk_h8v51dgb.IXr, false)) return false;
    } else {
      if (!k) return false;
      let w = e.filter((E) => E.type === "assistant");
      if (w.length > 0 && !(y && w.some((E) => !(0, import_chunk_7f901c6t.Vot)(E)) && (0, import_chunk_865at33z.b)(import_chunk_h8v51dgb.cYo, false))) return false;
    }
    let R = S$e(e, r.options.tools).at(-1);
    return R?.type === "user" && !(0, import_chunk_wzzzxdne.SG)(R.message.content);
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), false;
  }
}
var Ja = 2e5;
async function cc(e, o, r, g, y, h) {
  let k = g.messages.some((E) => E.type === "assistant"), R, w;
  try {
    w = tl(g.messages) === void 0 ? void 0 : import_chunk_h8v51dgb.C0t.changesSince(o.session, g.messages, h);
    let E = (0, import_chunk_rdcxsb11.fYt)(o.options.tools, (0, import_chunk_bz1f2qnq.Z)(o), r), O = E === "pre_tool_use_hook" && y !== void 0 && !(0, import_chunk_f9x2f6cx.st)(), P = (0, import_chunk_bzyb60p0.J_t)(g.messages);
    R = await import_chunk_h8v51dgb.C0t.read(o.session, o.credentials, o.abortController.signal, (I, H) => {
      let { bytesPerToken: Q } = g.modelFacts, z = (0, import_chunk_2xjdqky3.Dhs)(Q), X = H.map((re) => Math.max(re.storedTokens ?? 0, Math.ceil(Buffer.byteLength(re.text, "utf8") / Q)));
      return DGr(X) <= import_chunk_h8v51dgb.Gsr && (0, import_chunk_bzyb60p0.fne)((0, import_chunk_bzyb60p0.ip)(g.messages, (0, import_chunk_bzyb60p0._H)(Q)) + (0, import_chunk_bzyb60p0.Z2)(g.messages) + (0, import_chunk_c1hnv4fm.Ul)(P ? I : [I, ...g.systemPrompt, ...Object.values(e.systemContext), ...Object.values(e.announced), ...e.sections.map((re) => re.text), ...(e.instructions ?? []).map((re) => re.content)].join(`
`), z) + (P ? 0 : Math.ceil(Ja / Q)) + DGr(H.map((re, pe) => Math.max(0, X[pe] - (0, import_chunk_c1hnv4fm.Ul)(re.text, z)))), g.modelFacts, (0, import_chunk_bzyb60p0.afe)(o.options.autoCompactWindow)).level === "ok";
    }, E !== "pre_tool_use_hook" ? E : O ? void 0 : "read_refused_by_hook", O ? y : void 0, w?.toRead, h !== void 0);
  } catch (E) {
    import_chunk_h8v51dgb.C0t.attachThrew(o.session, E);
  }
  if ((k || w !== void 0) && !o.abortController.signal.aborted) R ??= [];
  if (w !== void 0 && R !== void 0) {
    let E = new Set(R.map((Q) => Q.docId)), O = [...w.toRead].filter(([Q]) => !E.has(Q)), { lastKnown: P } = w;
    if (P !== void 0 && h !== void 0) {
      let { sameText: Q } = li.of(o.session);
      if (R = R.filter((z) => {
        if ((0, import_chunk_h8v51dgb.oai)(h.organizationUuid, (0, import_chunk_ccm69jjy.Je)(z.read.content)) !== P.get(z.docId)) return true;
        let X = h.salted.get(z.docId);
        if (typeof X === "string") Q.set(z.docId, X);
        return false;
      }), R.length + O.length + w.removed.length === 0) return (0, import_chunk_cqa9hrgx.l)("projects_context_doc_changes", "same_text"), e;
    }
    let I = { docs: R.length, left_out: O.length, removed: w.removed.length };
    if (O.length === 0) (0, import_chunk_cqa9hrgx.u)("projects_context_doc_changes", I);
    else (0, import_chunk_cqa9hrgx.l)("projects_context_doc_changes", "not_read", I);
    let H = w.removed.length > 0 && (0, import_chunk_865at33z.Lt)(import_chunk_dwxd9se5.JSr, false);
    R = [...H ? w.removed : [], ...R, ...O.map(([Q, z]) => (0, import_chunk_h8v51dgb.dYo)(Q, z, "not_read", h?.salted.get(Q))), ...H ? [] : w.removed];
  }
  return R === void 0 ? e : { ...e, projectDocReads: R, ...w?.lastKnown !== void 0 && w.removed.length === 0 && w.toRead.size === w.lastKnown.size && { projectDocReadsForNewHashes: true } };
}
function mc(e, o, r, g, y) {
  try {
    let h = (0, import_chunk_dwxd9se5.w0e)(o).count - (0, import_chunk_dwxd9se5.w0e)(e).count;
    if (h > 0) (0, import_chunk_bzyb60p0.jY)(r, "project_docs_withdrawn"), (0, import_chunk_bzyb60p0.qnt)(g, y), (0, import_chunk_cqa9hrgx.u)("projects_context_doc_text_withdrawn", { count: h });
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
  }
}
function di(e, o) {
  return o === void 0 ? e : o(e);
}
function pc(e, o) {
  if (o === void 0) return e;
  try {
    return o(e);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
    return;
  }
}
function Za(e, o, { querySource: r, resumeActive: g, stamp: y, announcementWalk: h, instructionsBesideToolResults: k }) {
  if (g || o.bare) return [];
  let R = (0, import_chunk_865at33z.Pr)(r) === "auxiliary";
  try {
    let w = [], E = (0, import_chunk_bzyb60p0.dir)(e), O = di(o.instructions, h);
    if (O && !(R && E)) {
      let se = (0, import_chunk_bzyb60p0.Pja)(O, E);
      if (se) {
        let le = (0, import_chunk_bzyb60p0.Ut)({ type: "instructions", ...se, ...se.changed && { reason: o.refreshReason }, ...k && { besideToolResults: true } }, y);
        w.push({ ...le, ...(0, import_chunk_84n38n3t.Ep)().typedMarks === true && { [import_chunk_865at33z.EX]: { texts: (le.rendered ?? []).flatMap(({ content: ae }) => (0, import_chunk_sjqze7qg.tU)(ae)) } } });
      }
    }
    let P = (0, import_chunk_bzyb60p0.zue)(e), I = di(o.announced, h), H = Object.keys(I).length > 0, Q = H && !I.userEmail && (0, import_chunk_bzyb60p0.Cja)(e);
    if (P ? !R && (H || o.carriesContext) && (Q || !(0, import_chunk_bzyb60p0.Tja)(P, I)) : H || o.carriesContext) w.push((0, import_chunk_bzyb60p0.Ut)(P ? { type: "session_context", context: I, changed: true, reason: o.refreshReason, ...Q && { withdrawsEmail: true } } : { type: "session_context", context: I }, y));
    let z = Rh(e), X = di(o.workerTools, h), re = (0, import_chunk_c4zg4pwc.dl)();
    if (!R && z && (0, import_chunk_8fkaxt3d.zbt)() && !re) w.push((0, import_chunk_bzyb60p0.Ut)({ type: "coordinator_context", content: "", changed: true }, y));
    else if (re && X !== void 0 && (R ? z === void 0 : z !== X)) w.push((0, import_chunk_bzyb60p0.Ut)({ type: "coordinator_context", content: X, ...z !== void 0 && { changed: true } }, y));
    if (o.sections.length > 0 && gc(e) === void 0) w.push((0, import_chunk_bzyb60p0.Ut)({ type: "context_sections", sections: di(o.sections, h) }, y));
    if (o.projectDocReads !== void 0) {
      let se = tl(e) !== void 0, le = !se && o.projectDocReads.length > 0 && o.projectDocReads.every((ae) => ae.noToolWriteRecorded === true && !ae.read.path.startsWith(import_chunk_dwxd9se5._an) && ae.read.file_kind === void 0 && ae.read.content !== "");
      if (le) (0, import_chunk_cqa9hrgx.u)("projects_context_doc_as_documents");
      if (o.projectDocReads.length > 0) (0, import_chunk_1ek4hhs6.$P)(import_chunk_ta6q9jek.fy);
      w.push((0, import_chunk_bzyb60p0.Ut)({ type: "project_doc_reads", reads: o.projectDocReads.map(({ docId: ae, read: oe, hash: Ae }) => ({ docId: ae, read: oe, ...Ae !== void 0 && { hash: Ae } })), ...le && { form: "documents" }, ...e.some((ae) => ae.type === "assistant") && { midChat: true }, ...se && { changed: true }, ...o.projectDocReadsForNewHashes && { forNewHashes: true } }, y));
    }
    let pe = (0, import_chunk_s0zsg6za.oBi)(), ie = (0, import_chunk_bzyb60p0.Aja)(e);
    if (R ? ie === void 0 : ie !== pe) w.push((0, import_chunk_bzyb60p0.Ut)({ type: "date", date: pe, ...ie !== void 0 && { changed: true }, ...sc() && { assumedUtc: true } }, y));
    return w;
  } catch (w) {
    return (0, import_chunk_k449cc64.i)(w), [];
  }
}
function fc(e, o, r) {
  let g = Za(e, o, r);
  return el(g, r.querySource), g;
}
function el(e, o) {
  for (let { attachment: r } of e) try {
    (0, import_chunk_y53wbr8a.a)("tengu_context_announcement", { announcement_type: (0, import_chunk_78g0060s.f)(r.type), token_estimate: (0, import_chunk_c1hnv4fm.P0n)(r), updates_copy: "changed" in r && r.changed === true, assumed_utc: r.type === "date" && r.assumedUtc === true, refresh_reason: (0, import_chunk_78g0060s.fe)(r.type === "instructions" || r.type === "session_context" ? r.reason : void 0), query_source: (0, import_chunk_865at33z.ka)(o) });
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
  }
}
function Rh(e) {
  return (0, import_chunk_bzyb60p0.xir)().safeParse(e.findLast(wh)?.attachment).data?.content;
}
function wh(e) {
  return e.type === "attachment" && e.attachment.type === "coordinator_context";
}
function gc(e) {
  let o = e.findLast((r) => r.type === "attachment" && r.attachment.type === "context_sections");
  return (0, import_chunk_bzyb60p0.OQt)().safeParse(o?.attachment).data?.sections;
}
function qVs(e) {
  try {
    return y2o(e) === "inline" ? void 0 : gc((0, import_chunk_865at33z.Or)([...e]));
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function tl(e) {
  let o = e.findLast((r) => r.type === "attachment" && r.attachment.type === "project_doc_reads");
  return (0, import_chunk_ta6q9jek.a1)(o?.attachment);
}
function yc(e) {
  return typeof e === "string" ? [] : e.filter((o) => o.type === "tool_result");
}
async function hc(e, o, r, g, y, h) {
  try {
    let { machine: k } = import_chunk_bzyb60p0.qar.of(g.session.host);
    if (e.rendering !== "announced" || k?.hasNewFiles() !== true) return;
    let R = (0, import_chunk_bzyb60p0.tv)(h.messages, h.tools, h.modelFacts).findLast((Q) => Q.type !== "api_system");
    if (R?.type !== "user") return;
    let w = yc(R.message.content), E = new Map(h.messages.flatMap((Q) => Q.type === "user" ? yc(Q.message.content) : []).map((Q) => [Q.tool_use_id, Q.content])), O = w.filter(({ content: Q }) => !Array.isArray(Q) || Q.length === 0 || !Q.every(import_chunk_yn71faep.hje));
    if (w.length > 0 && !((0, import_chunk_865at33z.E_)(h.modelFacts) && k.mayFollowResultsOf(O.map((Q) => Q.tool_use_id)) && O.every((Q) => (0, import_chunk_z688m88d.Zt)(Q.content, E.get(Q.tool_use_id))))) return;
    let { instructions: P, wholeCutFiles: I, refreshReason: H } = await fs(o, r, g, y);
    if (P === void 0) return;
    return k.filesTaken(P.map((Q) => Q.path)), { routing: { ...e, instructions: P, wholeCutFiles: I, refreshReason: H }, endsOnToolResults: w.length > 0 };
  } catch (k) {
    (0, import_chunk_k449cc64.i)(k);
    return;
  }
}
var vh = { row: void 0, sent: void 0 };
function Sc(e, o) {
  let r = import_chunk_bzyb60p0.g3a.peek(o.session), g = r?.pdf;
  if (r === void 0 || g === void 0) return _c(e, o);
  r.pdf = void 0;
  let y = "fault", h;
  try {
    let k = (0, import_chunk_4vsz8a99.tn)(o.tools, import_chunk_k883m4fq.De);
    if (y = Ph(e, g, o) ?? "written", y === "written" && k === void 0) y = "no_read_tool";
    if (y === "written" && k !== void 0) {
      let R = (0, import_chunk_c1hnv4fm.bDe)({ type: "message_pdf_reads", reads: [{ path: g.path, pages: g.pages, result: Buffer.isBuffer(g.data) ? k.mapToolResultToToolResultBlockParam({ type: "pdf", file: { filePath: g.path, originalSize: g.data.length, base64: g.data.toString("base64") } }, "").content : [{ type: "text", text: `PDF file read: ${g.path} (${(0, import_chunk_7e12xj51.dn)(g.data.originalSize)}). This is the text of all ${g.pages} pages. It shows no pictures, charts or scanned pages: those are in the file alone.
` }, xh({ type: "page_texts", file_uuid: g.data.fileUuid }, g.data.pageTexts)] }] });
      if (R === void 0) throw Error("The result for a PDF is not in the form that a row keeps");
      h = (0, import_chunk_bzyb60p0.Ut)({ type: "message_pdf_reads", reads: R }, o.stamp);
    }
  } catch (k) {
    (0, import_chunk_k449cc64.i)(k), y = "fault", h = void 0;
  }
  try {
    g.settled(y);
  } catch (k) {
    (0, import_chunk_k449cc64.i)(k);
  }
  if (y === "left_behind") return { row: Gr(o.stamp), sent: void 0 };
  return y === "written" || y === "already_written" ? { row: h, sent: g.sent } : _c(e, o);
}
function xh(e, o) {
  let r = (0, import_chunk_865at33z.tg)(o);
  return e[import_chunk_c1hnv4fm.R0n] = () => r, e;
}
function _c(e, { stamp: o }) {
  return Mc(() => {
    let r = yr(e);
    return r === void 0 || !(0, import_chunk_c1hnv4fm.PSe)((0, import_chunk_qanr9g0g.l0)(r).attachment) || bc(r, e);
  }) ? vh : { row: Gr(o), sent: void 0 };
}
function yr(e) {
  let o = e.findLast((r) => (0, import_chunk_c1hnv4fm.F1t)(r) || r?.type === "attachment" && (0, import_chunk_c1hnv4fm.bDe)(r.attachment) !== void 0);
  return o?.type === "attachment" ? o : void 0;
}
function Gr(e) {
  return (0, import_chunk_bzyb60p0.Ut)({ type: "message_pdf_reads", reads: [] }, e);
}
function kc({ modelFacts: e, betas: o, recorded: r }, g, y) {
  return Mc(() => {
    let h = yr(g);
    return h === void 0 || !(0, import_chunk_c1hnv4fm.PSe)(h.attachment) || (0, import_chunk_865at33z.E_)(e) && !(0, import_chunk_f9x2f6cx.zl)(o, import_chunk_xfj2cwfv.J_) && r?.systemTurns !== false && bc(h, g);
  }) ? void 0 : Gr(y);
}
function mi(e) {
  try {
    let o = yr(e);
    return o !== void 0 && (0, import_chunk_c1hnv4fm.PSe)((0, import_chunk_qanr9g0g.l0)(o).attachment);
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), true;
  }
}
function Cc(e, o, r) {
  return e !== "last" && mi(o) ? Gr(r) : void 0;
}
function bc(e, o) {
  return o.slice(o.lastIndexOf(e) + 1).every((r) => (0, import_chunk_f9x2f6cx.Hu)(r) || (0, import_chunk_c1hnv4fm.Rel)(r));
}
function Mc(e) {
  try {
    return e();
  } catch (o) {
    return (0, import_chunk_w578pjby.t)("A check for a PDF that Claude has not answered threw, so the row that takes one back is written", { level: "error" }), (0, import_chunk_k449cc64.i)(o), false;
  }
}
function Oh(e) {
  return e.some((o) => o.type === "assistant" || (0, import_chunk_865at33z.On)(o));
}
function Ph(e, o, { modelMayBeSwapped: r, modelFacts: g, systemPrompt: y, tools: h, autoCompactWindow: k }) {
  if (!o.afterReplies && Oh(e)) return "not_first_message";
  let R = e.findLastIndex((H) => H.type === "user" && H.isMeta !== true);
  if (e[R]?.uuid !== o.messageUuid) return "other_message";
  let w = e.slice(R).findLast((H) => H.type === "attachment" && H.attachment.type === "message_pdf_reads");
  if (w?.type === "attachment") {
    if (!(0, import_chunk_c1hnv4fm.PSe)(w.attachment)) return "no_room";
    return e.slice(e.lastIndexOf(w) + 1).every(import_chunk_f9x2f6cx.Hu) ? "already_written" : "left_behind";
  }
  if (e.slice(R).some((H) => H.type === "attachment" && H.attachment.type === "project_doc_reads")) return "project_docs";
  let E = S$e([...e, (0, import_chunk_bzyb60p0.Ut)({ type: "message_pdf_reads", reads: [] })], h).at(-1);
  if (E?.type === "user" && (0, import_chunk_wzzzxdne.SG)(E.message.content)) return "behind_results";
  if (!(0, import_chunk_865at33z.E_)(g) || r()) return "model";
  if (!o.wouldStillRunUnjudged()) return "judged";
  let { bytesPerToken: O } = g, P = (0, import_chunk_2xjdqky3.Dhs)(O), I = Buffer.isBuffer(o.data) ? o.pages * import_chunk_c1hnv4fm.KEi : (0, import_chunk_c1hnv4fm.Ul)(o.data.pageTexts, { byCharacterKind: O });
  if (!Buffer.isBuffer(o.data) && I > import_chunk_h8v51dgb.Gsr) return "no_room";
  return (0, import_chunk_bzyb60p0.fne)((0, import_chunk_bzyb60p0.ip)(e, (0, import_chunk_bzyb60p0._H)(O)) + (0, import_chunk_bzyb60p0.Z2)(e) + ((0, import_chunk_bzyb60p0.J_t)(e) ? 0 : (0, import_chunk_c1hnv4fm.Ul)(y.join(`
`), P) + Math.ceil(Ja / O)) + I, g, k).level === "ok" ? void 0 : "no_room";
}
var Ec = 20;
async function b2o(e, o, r) {
  try {
    for (let g = 0; g < e.length; g += Ec) if ((await Promise.all(e.slice(g, g + Ec).map((h) => Lh(h, o, r)))).includes(true)) return true;
    return r.aborted;
  } catch (g) {
    if (!r.aborted) (0, import_chunk_w578pjby.t)(`project doc read: a PreToolUse hook threw (${g instanceof Error ? g.name : typeof g}), so the docs are not used`, { level: "error" });
    return true;
  }
}
async function Lh(e, o, r) {
  for await (let g of (0, import_chunk_bzyb60p0.cBe)(import_chunk_ta6q9jek.fy, `project_doc_read_${(0, import_crypto.randomUUID)()}`, (0, import_chunk_w578pjby.Ka)(e), o, (0, import_chunk_bz1f2qnq.Z)(o).mode, r)) if (g.blockingError || g.preventContinuation || g.permissionBehavior !== void 0 && g.permissionBehavior !== "allow" && g.permissionBehavior !== "passthrough" || g.updatedInput !== void 0 && !(0, import_chunk_r9ecxfn9.KW)(g.updatedInput, e)) return true;
  return false;
}
var Rc = /* @__PURE__ */ new WeakSet();
function eva(e) {
  let o = Object.freeze({ text: e });
  return Rc.add(o), o;
}
function NGr(e) {
  return typeof e === "object" && e !== null && Rc.has(e);
}
function wc(e, o) {
  try {
    if (e.attachment.type !== "queued_command" || o === void 0 || o.attachmentSourceUuid !== e.attachment.source_uuid || (NGr(o.ownerStamp) ? o.ownerStamp.text !== e.attachment.prompt : !(0, import_chunk_vhsysgcd.EC)(o.composerEnter) || o.inputSource === "suggestion_accepted") || (0, import_chunk_84n38n3t.Ep)().typedMarks !== true) return;
    e[import_chunk_865at33z.EX] = { as: NGr(o.ownerStamp) ? "ownerTyped" : void 0, texts: (0, import_chunk_bzyb60p0.cSe)(e).messages.flatMap((r) => (0, import_chunk_sjqze7qg.tU)(r.message.content)) }, (0, import_chunk_cqa9hrgx.u)("typed_marks");
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function xc(e, o, r) {
  try {
    vc(e(), o);
  } catch (y) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(y), "context room hand-in failed"));
    return;
  }
  let g = 0;
  return { get threshold() {
    return vc(e(), o);
  }, get apiLimit() {
    return (0, import_chunk_bzyb60p0.TLt)(e());
  }, held: () => (0, import_chunk_bzyb60p0.ip)(r(), (0, import_chunk_bzyb60p0._H)(e().bytesPerToken)) + (0, import_chunk_bzyb60p0.Z2)(r()), claimed: () => g, claim: (y) => {
    g += y;
  } };
}
function vc(e, o) {
  let r = (0, import_chunk_bzyb60p0.Vw)(e, o);
  return (0, import_chunk_gq1dr8pm.Rpe)() || (0, import_chunk_865at33z.ge)().cachedExtraUsageDisabledReason === null ? r : Math.min(r, import_chunk_865at33z.M1);
}
var Uh = require("/$bunfs/root/chunk-gjd6m6ps.js");
function Pc(e, o) {
  return (r) => {
    try {
      if (Uh?.getTeleportCacheState().status === "active") return;
      return e()?.find((g) => g.name === r)?.description ?? o()?.find((g) => g.name === r)?.description;
    } catch (g) {
      (0, import_chunk_k449cc64.i)(g);
      return;
    }
  };
}
function Fc(e) {
  return (o, r) => {
    try {
      return (0, import_chunk_4vsz8a99.tn)(e, o)?.getActivityDescription?.(r) ?? void 0;
    } catch (g) {
      (0, import_chunk_w578pjby.t)(`[classifier] getActivityDescription(${o}) threw: ${(0, import_chunk_jv7av99m.D)(g).message}`);
      return;
    }
  };
}
var Nh = "tengu_shimmying_sparkle";
function w2o() {
  try {
    return (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_865at33z.Lt)(Nh, false) === true;
  } catch (e) {
    return (0, import_chunk_bzyb60p0.CIn)("source_switch_threw", e), false;
  }
}
function Dc(e, o) {
  if (!o) return;
  let r = { uuids: /* @__PURE__ */ new Set(), lost: false };
  try {
    for (let g of e) r.uuids.add(g.uuid);
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g), r.lost = true;
  }
  return r;
}
function ol(e, o, r) {
  if (e === void 0) return;
  try {
    for (let y of r.replacement ?? []) e.uuids.add(y.uuid);
    let g = /* @__PURE__ */ new Set();
    for (let y of o) g.add(y.uuid);
    for (let y of r.messagesToKeep) if (!g.has(y.uuid)) e.uuids.add(y.uuid);
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g), e.lost = true;
  }
}
function Lc(e) {
  try {
    if (e.endedBecause !== "completed" || (0, import_chunk_xfj2cwfv.nn)() || e.aborted || e.response.length > 0 || e.stopReason !== "end_turn" || e.olderRows === void 0 || e.olderRows.lost) return;
    let o = e.olderRows.uuids, r = e.rows.filter((R) => !o.has(R.uuid)), g = r.findLastIndex((R) => R.type === "attachment" && (R.attachment.type === "queued_command" || R.attachment.type === "poll_events")), y = r.slice(g + 1), h = y.findLast((R) => R.type !== "attachment");
    if (!(0, import_chunk_0vvtfqck.$in)(y) || (0, import_chunk_0vvtfqck.$in)(y.filter((R) => R.type !== "user" || R === h)) || !(0, import_chunk_865at33z.b)("tengu_prancy_charm", false)) return;
    let k = (0, import_chunk_bzyb60p0.La)({ content: [{ type: "text", text: "", citations: null }], now: e.now, uuid: e.uuid });
    return (0, import_chunk_cqa9hrgx.u)("query_silent_turn_end"), { ...k, message: { ...k.message, stop_reason: "end_turn" } };
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o), (0, import_chunk_cqa9hrgx.m)("query_silent_turn_end", "threw");
    return;
  }
}
async function nl(e, { routing: o, toolUseContext: r, querySource: g, resumeActive: y, foreground: h, stamp: k }) {
  try {
    let R = e.boundaryMarker, w = (0, import_chunk_865at33z.On)(R) ? R.compactMetadata.preservedMessages?.anchorUuid : void 0;
    if (e.messagesToKeep.length === 0 || y || w !== void 0 && w !== e.summaryMessages.at(-1)?.uuid) return [];
    if (!(0, import_chunk_865at33z.b)("tengu_calm_noodle", true)) return (0, import_chunk_cqa9hrgx.u)("compact_kept_tail_announcements", { enabled: false, placed: 0 }), [];
    let E = /* @__PURE__ */ new Set();
    for (let H of e.messagesToKeep) if (H.type === "attachment" && import_chunk_bzyb60p0.x_t.has(H.attachment.type) && !(H.attachment.type === "instructions" && H.attachment.changed)) E.add(H.attachment.type);
    let O = (0, import_chunk_bzyb60p0.e7)(e), P = await ui(O, o, r, h), I = Za(O, P, { querySource: g, resumeActive: y, stamp: k, announcementWalk: r.options.announcementWalk }).filter((H) => !E.has(H.attachment.type));
    return (0, import_chunk_cqa9hrgx.u)("compact_kept_tail_announcements", { enabled: true, placed: I.length, kept_types: E.size }), el(I, g), I;
  } catch (R) {
    return (0, import_chunk_k449cc64.i)(R), (0, import_chunk_cqa9hrgx.l)("compact_kept_tail_announcements", "announce_failed"), [];
  }
}
function gs(e, o) {
  let [r, ...g] = e;
  if (o.length === 0 || r === void 0 || !(0, import_chunk_865at33z.On)(r)) return e;
  return [r, ...o, ...g];
}
var qh = "tengu_toasty_thimble", Hh = "tengu_gentle_parasol", Wh = "First privately list what you need next; then request every item that doesn't depend on another's result in this one response.";
function rl(e, o, r) {
  let g = e.trim();
  if (g === "") return null;
  return { text: g, textForAnalytics: (0, import_chunk_myvyhcm0.Zn)(g), source: o, matchedPattern: r };
}
function Qh(e) {
  let o = e.trim();
  return (0, import_chunk_69qhefwa.Oi)(o) || (0, import_chunk_69qhefwa.Ne)(o) ? null : rl(o, "env", void 0);
}
var Nc = /* @__PURE__ */ new Set();
function qc(e, o) {
  if (Nc.has(e)) return;
  Nc.add(e), (0, import_chunk_w578pjby.t)(`[ephemeral reminder] ignoring client_data ${e}: ${o}`, { level: "warn" });
}
function Kh(e, { model: o, clientData: r }) {
  let y = import_chunk_c203g5kd.s[e.envVar];
  if (y !== void 0) return Qh(y);
  let h = r?.[e.clientDataKey];
  if (h !== void 0 && h !== null) if (typeof h !== "object" || Array.isArray(h)) qc(e.clientDataKey, `expected a map from model pattern to text, got ${Array.isArray(h) ? "array" : typeof h}`);
  else {
    let R = (0, import_chunk_bzyb60p0.YLt)(h, o);
    if (R !== void 0) return Vh(e, R);
  }
  let k = e.modelOwn?.((0, import_chunk_865at33z.St)(o));
  return k !== void 0 ? rl(k, "model", void 0) : null;
}
function Vh(e, [o, r]) {
  if (typeof r !== "string") return qc(e.clientDataKey, `value for pattern "${o}" is ${typeof r}, expected the reminder text`), null;
  return rl(r, "clientData", o);
}
var Yh = new import_chunk_pzzqg6s3.ze(() => ({ latched: void 0 })), zh = new import_chunk_pzzqg6s3.ze(() => ({ latched: void 0 })), Xh = { clientDataKey: qh, envVar: "CLAUDE_CODE_TOASTY_THIMBLE", modelOwn: (e) => (0, import_chunk_0djtvg5h.Vat)(e) ? Wh : void 0, latches: Yh, logApplied: (e) => {
  (0, import_chunk_cqa9hrgx.u)("batching_reminder"), (0, import_chunk_y53wbr8a.a)("tengu_toasty_thimble_applied", e);
} }, Jh = { clientDataKey: Hh, envVar: "CLAUDE_CODE_GENTLE_PARASOL", modelOwn: void 0, latches: zh, logApplied: (e) => {
  (0, import_chunk_cqa9hrgx.u)("secondary_reminder"), (0, import_chunk_y53wbr8a.a)("tengu_gentle_parasol_applied", e);
} };
function Wc(e, o, r) {
  if (!(0, import_chunk_865at33z.E_)(r)) return null;
  let { model: g } = r, y = Kh(e, r);
  if (y === null) return null;
  let h = e.latches.of(o);
  if (h.latched?.conversationId !== o.id) h.latched = { conversationId: o.id, byModel: /* @__PURE__ */ new Map() };
  let k = (0, import_chunk_zmb62hr5.ur)((0, import_chunk_865at33z.St)(g)).toLowerCase(), R = h.latched.byModel.get(k);
  if (R === void 0) R = y, h.latched.byModel.set(k, R), e.logApplied({ model: (0, import_chunk_865at33z.Xt)((0, import_chunk_zmb62hr5.ur)(g)), source: (0, import_chunk_78g0060s.f)(y.source), text: y.textForAnalytics, len: y.text.length });
  return R.text;
}
function Zh(e, o) {
  return Wc(Xh, e, o);
}
function t_(e, o) {
  return Wc(Jh, e, o);
}
var o_ = /* @__PURE__ */ new Set(["queued_command", "teammate_mailbox", "poll_events"]);
function n_() {
  return [import_chunk_0ha8wex8.hp, import_chunk_bzyb60p0.O6, import_chunk_bzyb60p0.Tq, import_chunk_bzyb60p0.B3e, import_chunk_0ha8wex8.mI, import_chunk_0ha8wex8.hze, import_chunk_0ha8wex8.YNe, import_chunk_0ha8wex8.Lke, import_chunk_0ha8wex8.EPe, import_chunk_0ha8wex8.vPe, import_chunk_0ha8wex8.UXe, import_chunk_0ha8wex8.$Xe, import_chunk_0ha8wex8.BXe, import_chunk_0ha8wex8.ou, import_chunk_0ha8wex8.dB, import_chunk_0ha8wex8.dT, import_chunk_0ha8wex8.fD, import_chunk_0ha8wex8.bz];
}
function r_(e) {
  if (e.type !== "tool_result") return false;
  let o = typeof e.content === "string" ? e.content : Array.isArray(e.content) ? e.content.map((r) => r?.type === "text" && typeof r.text === "string" ? r.text : "").join("") : "";
  return n_().some((r) => o.startsWith(r));
}
function sl(e, o, r) {
  let g = { messages: e, text: null, secondaryText: null, afterUuid: null };
  try {
    let y = true, h = e.length - 1;
    for (; h >= 0; h--) {
      let O = e[h];
      if ((0, import_chunk_f9x2f6cx.Hu)(O)) continue;
      if (O.type !== "attachment") break;
      if (o_.has(O.attachment.type)) y = false;
    }
    let k = h >= 0 ? e[h] : void 0;
    if (!jc(k) || (0, import_chunk_k449cc64.MOe)(k)) return g;
    for (let O = h; y && O >= 0; O--) {
      let P = e[O];
      if ((0, import_chunk_f9x2f6cx.Hu)(P) || P.type === "attachment") continue;
      if (!jc(P)) break;
      if (P.message.content.some(r_)) y = false;
    }
    let R = y ? Zh(o, r) : null, w = t_(o, r);
    if (R === null && w === null) return g;
    let E = [];
    if (R !== null) E.push(Bc({ type: "batching_reminder", text: R }));
    if (w !== null) E.push(Bc({ type: "secondary_reminder", text: w }));
    return { messages: [...e.slice(0, h + 1), ...E, ...e.slice(h + 1)], text: R, secondaryText: w, afterUuid: k.uuid };
  } catch (y) {
    return (0, import_chunk_k449cc64.i)(y), g;
  }
}
function Gc(e, o, r) {
  try {
    let g = sl(e, o, r), y = /* @__PURE__ */ new Map();
    for (let k = e.length - 1; k >= 0; k--) {
      let R = e[k];
      if (R.type !== "attachment") {
        if ((0, import_chunk_f9x2f6cx.Hu)(R)) continue;
        break;
      }
      let w = R.attachment;
      if ((w.type === "batching_reminder_sent" || w.type === "secondary_reminder_sent") && w.clearAt === "next_user_message" && !y.has(w.type)) y.set(w.type, w.text);
    }
    let h = [];
    for (let [k, R] of [["batching_reminder_sent", g.text ?? ""], ["secondary_reminder_sent", g.secondaryText ?? ""]]) {
      let w = y.get(k);
      if (w === void 0 ? R !== "" : w !== R) h.push({ type: k, text: R });
    }
    return h;
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), [];
  }
}
function Bc(e) {
  return { type: "attachment", attachment: e, uuid: (0, import_crypto2.randomUUID)(), timestamp: (/* @__PURE__ */ new Date()).toISOString() };
}
function jc(e) {
  return e?.type === "user" && Array.isArray(e.message.content) && e.message.content.some((o) => o.type === "tool_result");
}
var s_ = 5e3, i_ = 5e3;
async function a_() {
  let e = (0, import_chunk_52ckkfmm.Fh)();
  if (!e.binding) return false;
  e.lettingGoAtTurnEnd = true;
  let o = await (0, import_chunk_5appeerh.me)(e.binding.dispatch("left_mouse_up", {}).catch((r) => {
    (0, import_chunk_w578pjby.t)(`[Computer Use MCP] turn-end left_mouse_up threw (${(0, import_chunk_jv7av99m.Qu)(r) ?? typeof r})`);
  }).finally(() => {
    e.lettingGoAtTurnEnd = false;
  }), i_);
  if (e.leftButtonDown) (0, import_chunk_w578pjby.t)(`[Computer Use MCP] the turn-end release has not gone through, so the left mouse button may still be down (error_kind=${o?.telemetry?.error_kind ?? "none"})`, { level: "warn" });
  return !e.leftButtonDown;
}
async function* Un(e) {
  let o = (0, import_chunk_52ckkfmm.Fh)().leftButtonDown && !await a_(), r = (0, import_chunk_k7fvzexf.cor)(e.session), g = r?.get()?.hiddenDuringTurn, y = !!(g && g.size > 0), h = (0, import_chunk_sp8p28qh.M8r)();
  if (!y && !h) return;
  let k = false;
  if (y) {
    let { unhideComputerUseApps: R } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cqr8s0g0.js"))), w = false, E = R([...g]).then(() => {
      w = true;
    }, (I) => {
      w = true, (0, import_chunk_w578pjby.t)(`[Computer Use MCP] auto-unhide failed: ${(0, import_chunk_jv7av99m.d)(I)}`);
    }), O = Promise.withResolvers(), P = setTimeout(O.resolve, s_);
    if (await Promise.race([E, O.promise]).finally(() => clearTimeout(P)), !w) k = true;
    r?.update((I) => I?.hiddenDuringTurn === void 0 ? I : { ...I, hiddenDuringTurn: void 0 });
  }
  if (h) {
    try {
      (0, import_chunk_202wmj18.g1a)();
    } catch (R) {
      (0, import_chunk_w578pjby.t)(`[Computer Use MCP] unregisterEscHotkey failed: ${(0, import_chunk_jv7av99m.d)(R)}`);
    }
    (0, import_chunk_sp8p28qh.e1a)(), yield { type: "os_notification", message: "Claude is done using your computer", notificationType: "computer_use_exit" };
  }
  if (k) (0, import_chunk_cqa9hrgx.m)("computeruse_turn_cleanup", "unhide_timeout");
  else if (o) (0, import_chunk_cqa9hrgx.m)("computeruse_turn_cleanup", "left_button_down");
  else (0, import_chunk_cqa9hrgx.u)("computeruse_turn_cleanup");
}
function FGr(e, o = (0, import_chunk_bzyb60p0.CTe)()) {
  let r = (0, import_chunk_ghnve1xk.zft)(e);
  if (!r.some((h) => h.kind === "block" && h.id === o)) return { text: e, pastedContents: {} };
  let g = /* @__PURE__ */ new Set();
  for (let [h, k] of r.entries()) if (k.kind === "block" && k.id === o && k.body.length <= import_chunk_s7te3n3c.jL && (0, import_chunk_bq31aqv6.f7)(k.body) <= 2) g.add(h);
  for (; ; ) {
    let h = l_(Vc(r, o, g, () => {
      return;
    }));
    if (h.length === 0) break;
    for (let k of h) g.delete(k);
  }
  let y = Vc(r, o, g, (h, k) => ({ id: (0, import_chunk_bzyb60p0.eN)(e, k), type: "text", content: h }));
  return { text: y.text, pastedContents: y.entries };
}
function Vc(e, o, r, g) {
  let y = {}, h = [], k = [], R = "";
  for (let [w, E] of e.entries()) {
    if (E.kind === "text") {
      R += E.text;
      continue;
    }
    if (E.id !== o) {
      R += E.raw;
      continue;
    }
    if (r.has(w)) {
      let I = (0, import_chunk_bzyb60p0.lxn)(E.body, y, import_chunk_bzyb60p0.aJr);
      if (I) {
        y[I.id] = I;
        let Q = R.length + E.body.length - E.body.trimStart().length;
        k.push({ piece: w, from: Q, to: Q + I.content.length });
      }
      R += E.body;
      let H = e[w + 1];
      if (H !== void 0 && (H.kind === "block" || !(0, import_chunk_ghnve1xk.Goa)(H.text))) R += `
`;
      continue;
    }
    let O = R.length, P = g(E.body, y);
    if (P) y[P.id] = P, R += (0, import_chunk_bq31aqv6.jCe)(P.id, (0, import_chunk_bq31aqv6.f7)(E.body));
    h.push({ from: O, to: R.length });
  }
  return { text: R, entries: y, pills: h, shortPastes: k };
}
function l_(e) {
  let o = (0, import_chunk_bq31aqv6.wDe)(e.entries), r = [], g = 0;
  for (let y of [...e.pills, void 0]) {
    let h = y?.from ?? e.text.length, k = (0, import_chunk_bq31aqv6.D0n)(e.text.slice(g, h), o);
    for (let R of e.shortPastes) if (R.from >= g && R.to <= h && !k.some((w) => w.from + g <= R.from && R.to <= w.to + g)) r.push(R.piece);
    g = y?.to ?? g;
  }
  return r;
}
function JVs(e) {
  return (0, import_chunk_tjdnrbvx.qP)() ? FGr(e) : { text: e, pastedContents: {} };
}
var Yc = (e, o, r) => ({ ...e, display: o, pastedContents: r });
function GIe(e, o) {
  let r = FGr(o), g = {};
  for (let y of Object.values(e.pastedContents)) {
    let h = r.text.includes((0, import_chunk_bq31aqv6.bae)(y.id));
    if (y.type === "image" && h) g[y.id] = y;
  }
  return Yc(e, r.text, { ...g, ...r.pastedContents });
}
async function zc(e, o) {
  for (let r of e) try {
    let { value: g, promptSubmitted: y } = r, h = TEn(g), k = o ? r.ownWord === true && r.bearsNoUntypedMark === true : r.foreignWord === void 0 && (0, import_chunk_865at33z.ree)(r);
    if (r.mode !== "prompt" || r.isMeta || !k || !h) continue;
    let R = (0, import_chunk_bzyb60p0.wu)(g) ?? "", w = (0, import_chunk_thj6vbn4.h6)();
    await k2o(R, async (E) => {
      if ((0, import_chunk_be4a2jph.IHt)({ text: h, attributes: { "message.uuid": r.attachmentSourceUuid ?? r.uuid, "delivery.mode": "mid_turn" } }, E?.hold), y && !w.wasUnknown) E?.settled(y.text === R ? {} : { rewritten: y.text });
    }, { prompt: void 0, reading: w });
  } catch (g) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(g));
  }
}
function il(e) {
  return (0, import_chunk_865at33z.St)((0, import_chunk_865at33z.jt)(e));
}
function Xc({ userModel: e, automaticModels: o }) {
  let r = il(e);
  for (let y of o) if (y && il(y) === r) return {};
  let g = (0, import_chunk_865at33z.qd)();
  return { isDefaultModel: il(g) === r, defaultModel: g };
}
var ul = { inEpisode: false, cursor: void 0, pendingNotice: void 0 };
function Jc(e, o, r) {
  let g = e.cursor;
  if (g === void 0) return { armTarget: void 0, hop: void 0, state: e };
  let y = r.firstReachableStage(g.remaining, (k) => r.resolveStage(k, o, g.triedModels));
  r.logSkippedStages({ stages: y?.skippedStages ?? g.remaining, chainLength: g.chainLength, firstStageIndex: g.chainLength - g.remaining.length + 1, model: o, armedFallbackModel: void 0, apiRefusalCategory: g.triggerCategory, requestId: g.triggerRequestId });
  let h = y !== void 0 && y.remainingChain.length > 0 ? { ...g, remaining: y.remainingChain, nextHopIndex: g.nextHopIndex + 1 } : void 0;
  return { armTarget: y?.model, hop: y === void 0 ? void 0 : { index: g.nextHopIndex, length: g.chainLength }, state: { ...e, cursor: h } };
}
function cl(e) {
  return e.routeMatched === "chain";
}
function Zc(e, o, r, g) {
  if (cl(o)) return e.cursor === void 0 ? { ...e, inEpisode: true } : { ...e, inEpisode: true, cursor: { ...e.cursor, triedModels: [...e.cursor.triedModels, g(o.fallbackModel)], triggerRequestId: o.requestId ?? void 0, triggerCategory: o.apiRefusalCategory ?? void 0 } };
  let y = r ? o.remainingChain ?? [] : [], h = y.length > 0 && o.cascadeChainLength !== void 0 ? { remaining: y, chainLength: o.cascadeChainLength, nextHopIndex: 2, triedModels: [g(o.originalModel), g(o.fallbackModel)], triggerRequestId: o.requestId ?? void 0, triggerCategory: o.apiRefusalCategory ?? void 0 } : void 0;
  return { ...e, inEpisode: true, cursor: h };
}
function em(e, o) {
  let r = e.pendingNotice;
  return { ...e, pendingNotice: { originModel: r?.originModel ?? o.originModel, servingModel: o.servingModel, retractedMessageUuids: [...r?.retractedMessageUuids ?? [], ...r?.provisionalFlushUuid !== void 0 ? [r.provisionalFlushUuid] : [], ...o.retractedMessageUuids], refusedUserMessageUuid: r?.refusedUserMessageUuid ?? o.refusedUserMessageUuid, apiRefusalCategory: r ? r.apiRefusalCategory : o.apiRefusalCategory, apiRefusalCyberVerification: r ? r.apiRefusalCyberVerification : o.apiRefusalCyberVerification, sawCyberRefusal: r?.sawCyberRefusal === true || o.apiRefusalCategory === "cyber", requestId: r ? r.requestId : o.requestId, provisionalFlushUuid: void 0 } };
}
function tm(e, o) {
  let r = e.pendingNotice;
  if (r === void 0 || r.provisionalFlushUuid !== void 0) return { notice: void 0, state: e };
  return { notice: r, state: { ...e, pendingNotice: { ...r, provisionalFlushUuid: o } } };
}
function ys(e) {
  let o = e.pendingNotice;
  return { notice: o !== void 0 && o.provisionalFlushUuid === void 0 ? o : void 0, state: { ...e, pendingNotice: void 0 } };
}
function nm(e) {
  return { ...e, pendingNotice: void 0 };
}
function rm() {
  return ul;
}
function ml(e, o) {
  return e >= o;
}
function pl(e, o, r, g) {
  let y = r.splice(0);
  if ((0, import_chunk_bzyb60p0.RTe)()) {
    let { scriptCallsForBatchHooks: h } = require("/$bunfs/root/chunk-q6j2j10z.js"), k = new Set(o.flatMap((w) => w.type === "user" && w.toolDenialKind !== void 0 ? d_(w) : [])), R = (0, import_chunk_bzyb60p0.i2a)() || (0, import_chunk_bzyb60p0.ZD)("PostToolBatch") === "some";
    return [...sm(e, o).flatMap((w) => {
      if (R || !(0, import_chunk_bzyb60p0.Sir)(w.tool_name)) return [w];
      let { name: E, input: O } = (0, import_chunk_bzyb60p0.FUe)(w.tool_name, w.tool_input);
      return k.has(w.tool_use_id) && E !== w.tool_name ? [{ ...w, tool_name: E, tool_input: O }] : [];
    }), ...h(y, g).filter((w) => !(0, import_chunk_bzyb60p0.Sir)(w.tool_name))];
  }
  return sm(e, o);
}
function d_({ message: { content: e } }) {
  return Array.isArray(e) ? e.flatMap((o) => o.type === "tool_result" ? [o.tool_use_id] : []) : [];
}
function sm(e, o) {
  let r = /* @__PURE__ */ new Map();
  for (let g of o) if (g.type === "user" && Array.isArray(g.message.content)) {
    for (let y of g.message.content) if (y.type === "tool_result") r.set(y.tool_use_id, y.content);
  }
  return e.map((g) => ({ tool_name: g.name, tool_input: g.input, tool_use_id: g.id, tool_response: r.get(g.id) }));
}
async function* im({ toolUseBlocks: e, toolResults: o, scriptRows: r, toolUseContext: g, deps: y }) {
  let h = `hook-${y.uuid()}`, k = pl(e, o, r, g.options.tools), R = (0, import_chunk_bzyb60p0.YQo)(k.map((O) => O.tool_name), g.options.tools), w = false, E;
  try {
    for await (let O of (0, import_chunk_bzyb60p0.Olr)(k, h, g, (0, import_chunk_bz1f2qnq.Z)(g).mode, g.abortController.signal)) {
      if (O.message && !(O.message.type === "attachment" && O.message.attachment.type === "hook_blocking_error")) yield O.message;
      if (O.additionalContexts && O.additionalContexts.length > 0) {
        let P = (0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: O.additionalContexts, hookName: "PostToolBatch", toolUseID: h, hookEvent: "PostToolBatch", accountMemoryBatch: R }, y);
        yield P, o.push(P);
      }
      if (O.blockingError) w = true, E ??= O.blockingError.blockingError;
      if (O.preventContinuation) w = true, E ??= O.stopReason;
    }
  } catch (O) {
    if (!(0, import_chunk_mjq4pbxz.zjn)(O, g.abortController.signal)) throw O;
    (0, import_chunk_w578pjby.t)("PostToolBatch hooks cancelled");
  }
  return w ? { type: "hook_stopped_continuation", message: E || "Execution stopped by PostToolBatch hook", hookName: "PostToolBatch", toolUseID: h, hookEvent: "PostToolBatch", accountMemoryBatch: R } : void 0;
}
class am {
  hooks = [];
  register(e) {
    this.hooks.push(e);
  }
}
var pi = new import_chunk_2904xtvq.j(() => new am());
function $Gr(e) {
  pi.of((0, import_chunk_f9x2f6cx.N)().host).register(e);
}
async function lm(e, o, r, g, y, h) {
  let k = { messages: e, systemPrompt: o, userContext: r, systemContext: g, toolUseContext: y, querySource: h };
  for (let R of pi.of(y.session.host).hooks) try {
    await R(k);
  } catch (w) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(w));
  }
}
function Qr(e, o, r) {
  let g = e.discardAndAbortInFlight((0, import_chunk_cbnm4p23.PMr)()), y = r?.earlierCounts ?? g;
  if (r?.silent) (0, import_chunk_y53wbr8a.a)("tengu_convolute_arcades_tools", { aborted: y.aborted, completed_before_event: y.completedBeforeEvent, queued_never_started: y.queuedNeverStarted, compensated_removes: g.toolUseIds.length });
  else (0, import_chunk_y53wbr8a.a)("tengu_fallback_sweep_tools", { lane: (0, import_chunk_78g0060s.f)(o), aborted: y.aborted, completed_before_event: y.completedBeforeEvent, queued_never_started: y.queuedNeverStarted, compensated_removes: g.toolUseIds.length });
  return { removes: g.toolUseIds.length === 0 ? void 0 : { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: g.toolUseIds }, reason: "fallback_sweep" }, startedToolUseIds: g.startedToolUseIds };
}
var u_ = "tengu_amber_kettle", c_ = "tengu_plucky_quarry", m_ = "tengu_sunny_deer", p_ = 6048e5, fi = { command: "pwd" };
function f_() {
  let e = (0, import_chunk_865at33z.ge)().powerShellCommandLostAt;
  return e !== void 0 && Math.abs(Date.now() - e) < p_;
}
function dm({ event: e }, o, r, g) {
  if (e.type !== "content_block_start" || e.content_block.type !== "tool_use") return;
  try {
    let y = (0, import_chunk_b83x8d52.Dh)(o.options.tools, e.content_block.name, o.options.toolAliases);
    if (y?.name !== import_chunk_hn3cwwzt.ke && y?.name !== import_chunk_rb36kwbn.yt || y.mcpInfo !== void 0 || o.requireCanUseTool === true || (0, import_chunk_865at33z.Pr)(r) === "auxiliary" || (0, import_chunk_4vsz8a99.x0)(o.session, y.name) !== void 0 || (0, import_chunk_2hdy50wd.wj)() || (0, import_chunk_bzyb60p0.jLt)(y, fi, o) !== void 0) return;
    if (y.name === import_chunk_rb36kwbn.yt) {
      if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return;
      if ((0, import_chunk_865at33z.b)(c_, true)) (0, import_chunk_bzyb60p0.p2a)();
      let { value: k, source: R } = (0, import_chunk_865at33z.gn)(m_, false);
      if (k && (0, import_chunk_865at33z.km)(R) && !(0, import_chunk_bzyb60p0.El)() && !f_()) {
        let w = (0, import_chunk_n2dbhmj2.u3)(), { storageV5: E } = o;
        w.onPowerShellCommandLost = () => void (0, import_chunk_865at33z.Ke)((O) => ({ ...O, powerShellCommandLostAt: Date.now() }), E).catch(import_chunk_k449cc64.i), (0, import_chunk_bzyb60p0.Q5a)(w);
      }
      return;
    }
    if ((0, import_chunk_n2dbhmj2.u3)().shellConfig !== null) return;
    let h = g_(y, o, g);
    if (h === void 0) (0, import_chunk_bzyb60p0.xgi)(o.storageV5);
    else if (g) (0, import_chunk_n2dbhmj2.u3)().snapshotHeadStartSkip = h;
    else (0, import_chunk_n2dbhmj2.u3)().snapshotHeadStartSkip ??= h;
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
  }
}
function g_(e, o, r) {
  let g = (0, import_chunk_bz1f2qnq.Z)(o);
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_SHELL_HEAD_START) return "switched_off";
  if (!(0, import_chunk_f9x2f6cx.Cl)() && !(0, import_chunk_3t7ve0wy.vce)()) return "script";
  let y = (0, import_chunk_bzyb60p0.ZD)("PreToolUse");
  if (y === "some" || Object.keys((0, import_chunk_2yx6c1y2.ege)() ?? {}).length > 0) return "managed";
  if (!(0, import_chunk_865at33z.ce)().loadedModules.every(import_chunk_59mwkeke.yd)) return "mod";
  if ((0, import_chunk_hrmqj4hy.zP)("PreToolUse").some(({ matcher: h, hooks: k }) => k.some((R) => R.type !== "callback") && (0, import_chunk_bzyb60p0.Cne)({ hook_event_name: "PreToolUse", tool_name: import_chunk_hn3cwwzt.ke, tool_input: fi, tool_use_id: "", session_id: "", transcript_path: "", cwd: "" }, h))) return "hook";
  if (o.sessionHooksRegistry.has(o.session.id, "PreToolUse")) return "session_hook";
  if (!(0, import_chunk_865at33z.Yk)()) return "untrusted";
  if (g.bashCommandClamps !== void 0 || (0, import_chunk_b83x8d52.Dds)(g, [...(0, import_chunk_ht27b0vz.Vs)(g), ...(0, import_chunk_ht27b0vz.al)(g)]) !== null) return "rule";
  if ((0, import_chunk_bzyb60p0.hHe)((0, import_chunk_bzyb60p0.qm)(fi), fi.command, false, "bash") !== null) return "sandbox";
  if (y !== "none") return "managed_unknown";
  if ((0, import_chunk_bzyb60p0.S6)()) return "mods_loading";
  if (g.mode === "plan") return "plan";
  if (o.agentId !== void 0) return "subagent";
  if (!r) return "later_call";
  return (0, import_chunk_865at33z.b)(u_, true) ? void 0 : "switched_off";
}
var um = "tengu_pewter_samphire";
class fl {
  answers = [];
  scope;
  controller;
  constructor(e) {
    this.scope = (0, import_chunk_bzyb60p0.Odr)({ abortController: e }), this.controller = (0, import_chunk_cbnm4p23.sd)(this.scope.context.abortController);
  }
  add(e, o, r) {
    let g = { toolName: e, toolUseID: o, ended: r(this.controller.signal).then((y) => {
      g.context = y;
    }, (y) => (0, import_chunk_jv7av99m.Fe)(y) ? (0, import_chunk_w578pjby.t)(`PostToolUse hook for ${e} was stopped or timed out, so it added no context`) : (0, import_chunk_k449cc64.i)(y)) };
    this.answers.push(g);
  }
  async ended() {
    await Promise.all(this.answers.map((e) => e.ended));
  }
  take(e) {
    return this.answers.flatMap((o) => {
      let { toolName: r, toolUseID: g, context: y } = o;
      if (!y || g === e) return [];
      return o.context = void 0, [(0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: [y], hookName: `PostToolUse:${r}`, toolUseID: g, hookEvent: "PostToolUse" })];
    });
  }
  close() {
    this.controller.abort(), this.scope.hooksEnded(), this.scope[Symbol.dispose]();
  }
}
var y_ = "tengu_velvet_codd", cm = "tengu_memory_read_ahead";
function mm() {
  return (0, import_chunk_865at33z.b)(y_, 0) === 1;
}
var pm = 5e3, __ = /* @__PURE__ */ new Set([import_chunk_hn3cwwzt.ke, import_chunk_rb36kwbn.Dt, import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Ks]), S_ = /* @__PURE__ */ new Set(["project_info", "project_read", "project_search", "project_write", "project_delete"]);
function k_(e, o) {
  let r = e.mcpInfo;
  if (r !== void 0) return r.serverProvenance === "connector" && (r.serverOrigin === "directory" || r.serverOrigin === "custom") && r.serverType === "http" && r.scope === "dynamic" && r.accountMemory !== true && r.accountMemoryHeld !== true && r.accountMemoryServer !== true && r.artifactsServer !== true && r.hostedChromeServer !== true && r.cliOwned !== true && r.pluginSource === void 0;
  return e.isMcp !== true && !(0, import_chunk_cvv9kfq3.m0)(e) && !(0, import_chunk_syr33dp2.Ic)(o) && (__.has(e.name) || e.name === import_chunk_ta6q9jek.fy && S_.has(Object(o).method));
}
function gl(e) {
  let o = (0, import_chunk_865at33z.QCt)(e.getMcp().clients);
  return o?.type === "connected" ? o.client : void 0;
}
class gi {
  tool;
  input;
  toolUseId;
  assistantMessage;
  #a = new import_async_hooks.AsyncResource("memory read ahead");
  #e;
  #o = false;
  #n;
  #r;
  #s;
  #i = false;
  constructor(e, o, r, g) {
    this.tool = e;
    this.input = o;
    this.toolUseId = r;
    this.assistantMessage = g;
  }
  static of(e, o, r, g) {
    try {
      if (e.mcpInfo?.serverName !== import_chunk_865at33z.FPr || !(e.mcpInfo.toolName === import_chunk_p1ewvgeh.py ? e.persistenceThresholdCeiling !== void 0 : e.mcpInfo.toolName === import_chunk_p1ewvgeh.RC && !Object(o.input).include_preview) || !(0, import_chunk_f9x2f6cx.st)() || !((0, import_chunk_3t7ve0wy.kl)() || (0, import_chunk_3t7ve0wy.b0o)()) || !(0, import_chunk_bzyb60p0.Nnt)(g) || !(r.permissionModeAtRequest instanceof import_chunk_bz1f2qnq.hwo) || (0, import_chunk_bzyb60p0.hes)(o.id, false) !== null || !(0, import_chunk_865at33z.wke)((0, import_chunk_865at33z.QCt)((0, import_chunk_4vsz8a99.Oc)(g)))) return;
      let y = (0, import_chunk_bzyb60p0.xdr)(e, Object(o.input));
      return y.ok ? new gi(e, y.input, o.id, r) : void 0;
    } catch (y) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(y));
      return;
    }
  }
  lookBeside(e, o) {
    if (this.#i || this.#e !== void 0) return;
    try {
      if (this.#o = mm(), e === void 0 || !k_(e.tool, e.input)) this.#e = "left_out";
      else if (this.#l(e.tool, o)) this.#e = "switched_off";
      else if (this.#e = "not_taken", this.#o && !o.sessionState?.userDecisionPending) this.#s = o.sessionState?.userDecisionPendingChanged.subscribe(() => this.#t("question")), this.#n = this.#a.runInAsyncScope(() => this.#d(o));
    } catch (r) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    }
  }
  async answerInTurn(e, o) {
    this.#s?.();
    let r = this.#n;
    if (r === void 0) return e.send();
    if (r.under !== o || r.connection !== gl(o) || r.projectUuid !== import_chunk_c203g5kd.s.CLAUDE_PROJECT_UUID || Date.now() - r.at > pm || e.decision.decisionReason?.type !== "rule" || !(0, import_chunk_f9x2f6cx.cg)(e.input, this.input)) this.#t("unusable");
    let g = (0, import_chunk_cbnm4p23.VX)(e.context.abortController, r.controller), y = setTimeout((R) => this.#t(R.aborted ? "not_run" : "at_limit"), Math.max(0, r.at + pm - Date.now()), r.controller.signal), h = e.timing.mark("external"), k = await r.answer;
    if (h(), clearTimeout(y), g(), k === void 0 || r.controller.signal.aborted) return this.#t(r.controller.signal.aborted ? "not_run" : "failed"), e.send();
    return this.#e = "taken", e.context.options.activeMcpServer = r.options.activeMcpServer, e.context.options.activeMcpTool = r.options.activeMcpTool, k;
  }
  end(e) {
    if (this.#i) return;
    if (this.#i = true, this.#s?.(), this.#e === void 0) return;
    try {
      if (this.#e === "taken") (0, import_chunk_cqa9hrgx.u)("ccr_memory_read_ahead");
      else if (this.#o && this.#e === "not_taken") this.#t("not_run"), (0, import_chunk_cqa9hrgx.l)("ccr_memory_read_ahead", this.#r ?? "not_sent");
      (0, import_chunk_y53wbr8a.a)(cm, { toolUseID: (0, import_chunk_49zxha55.Ce)(this.toolUseId), requestId: (0, import_chunk_49zxha55.Ce)(this.assistantMessage.requestId), outcome: (0, import_chunk_78g0060s.f)(this.#e), enabled: this.#o, reason: (0, import_chunk_78g0060s.fe)(this.#r), durationMs: e?.durationMs, is_error: e?.isError });
    } catch (o) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
    }
  }
  #l(e, o) {
    return gl(o) === void 0 || o.sessionState === void 0 || (0, import_chunk_f9x2f6cx.E$)() || (0, import_chunk_2hdy50wd.Xf)() || (0, import_chunk_f9x2f6cx.aA)() || (0, import_chunk_865at33z.BPr)() || (0, import_chunk_4chf71g6.are)() || (0, import_chunk_xfr8663h.X2e)() || o.requireCanUseTool === true || false || (0, import_chunk_bzyb60p0.S6)() || !(0, import_chunk_865at33z.ce)().loadedModules.every(import_chunk_59mwkeke.yd) || (0, import_chunk_5zps0wmn.Gq)(this.tool.name) || (0, import_chunk_5zps0wmn.Gq)(e.name) || (0, import_chunk_5zps0wmn.Qi)("tool.check", { tool: this.tool.name }, (0, import_chunk_5zps0wmn.Ib)("tool.check")) || ["PreToolUse", "PermissionRequest"].some((r) => (0, import_chunk_bzyb60p0.Z$)({ hookEvent: r, toolName: this.tool.name, toolInput: this.input, tools: o.options.tools, toolAliases: o.options.toolAliases, sessionHooks: o.sessionHooksRegistry, sessionId: o.session.id }));
  }
  #t(e) {
    if (this.#n?.controller.abort(), this.#n?.left) this.#r ??= e;
  }
  #d(e) {
    let o = (0, import_chunk_cbnm4p23.sd)(e.abortController), r = { at: Date.now(), under: e, projectUuid: import_chunk_c203g5kd.s.CLAUDE_PROJECT_UUID, options: { ...e.options }, connection: gl(e), controller: o, left: false, answer: Promise.resolve(void 0) };
    return r.answer = this.#u(r).catch(() => {
      return;
    }), r;
  }
  async #u(e) {
    let { tool: o, input: r, toolUseId: g, assistantMessage: y } = this, h = { ...e.under, options: e.options, abortController: e.controller, toolUseId: void 0, permissionRound: void 0, permissionModeAtRequest: (0, import_chunk_bzyb60p0.GZt)(y, g, e.under) }, k = await (0, import_chunk_bzyb60p0.hrt)({ tool: o, input: r, context: h, toolUseID: g, evaluate: () => (0, import_chunk_bzyb60p0.gne)(o, r, h, { crashIsObjection: true }) }, y.message.id);
    if (k.behavior !== "allow" || k.decisionReason?.type !== "rule" || e.controller.signal.aborted) return;
    e.left = true;
    let R = await o.call(r, { ...(0, import_chunk_bz1f2qnq.Nre)(h, [{ kind: "avoid_prompts" }]), toolUseId: g, permissionPhase: {}, requestDialog: void 0 }, () => Promise.reject(new import_chunk_jv7av99m.Ie()), y);
    return R.urlElicitationDeclined === void 0 ? R : void 0;
  }
}
function C_(e, o, r) {
  let g = e.stopWait;
  return r === "user_interrupted" && g !== void 0 && (g.kept || o?.type === "progress");
}
function _l(e, o) {
  let r = o?.type === "user" ? o.toolDenialKind : void 0;
  return e.callRunning === true && (r === void 0 || r === "interrupted");
}
function b_(e, o) {
  if (e.type !== "user" || e.toolDenialKind !== void 0) return e;
  return { ...e, toolDenialKind: "user-rejected", message: { ...e.message, content: A_(e.message.content, o) } };
}
function M_() {
  return (0, import_chunk_r3kja8v6.ue)() ? `The user stopped this call. ${import_chunk_0ywkmnxx.wXt}` : import_chunk_0ywkmnxx.wXt;
}
function A_(e, o) {
  if (typeof e === "string") return e;
  return e.map((r) => {
    if (r.type !== "tool_result" || r.tool_use_id !== o) return r;
    let g = typeof r.content === "string" ? r.content === "" ? [] : [{ type: "text", text: r.content }] : r.content ?? [];
    return { ...r, content: [...g, { type: "text", text: M_() }] };
  });
}
function R_(e) {
  return (0, import_chunk_1hg0ytx8.v5e)(e) !== false || e.type === "attachment" && e.attachment.type === "hook_stopped_continuation";
}
function fm(e) {
  return e.results.some((o) => o.type === "user" && Array.isArray(o.message.content) && o.message.content.some((r) => r.type === "tool_result" && r.is_error === true));
}
function gm(e, o) {
  return e.type === "user" && Array.isArray(e.message.content) && e.message.content.some((r) => r.type === "tool_result" && r.tool_use_id === o);
}
class Tl {
  toolDefinitions;
  canUseTool;
  now;
  queuedCallsForMove;
  tools = [];
  toolUseContext;
  discardController = new AbortController();
  get discarded() {
    return this.discardController.signal.aborted;
  }
  responseOpen = true;
  progressAvailableResolve;
  drainableResolve;
  drainGeneration = 0;
  appliedLayers = false;
  leavingCallsForMove = false;
  firstCallStartedAt;
  lateHookContext;
  constructor(e, o, r, g, y) {
    this.toolDefinitions = e;
    this.canUseTool = o;
    this.now = g;
    this.queuedCallsForMove = y;
    this.toolUseContext = r;
  }
  discard() {
    this.discardController.abort(), this.closeLateHookContext(), this.wakeWaiters();
  }
  discardAndAbortInFlight(e) {
    this.discard();
    let o = 0, r = 0, g = 0, y = [], h = [];
    for (let k of this.tools) {
      if (k.callStarted === true) h.push(k.id);
      if (k.status === "completed" || k.status === "yielded") {
        if (r++, k.status === "completed" && k.callStarted === true) y.push(k.id);
        continue;
      }
      if (k.status === "queued") {
        g++, k.readAhead?.end();
        continue;
      }
      if (k.status === "executing") {
        if (k.callStarted === true) y.push(k.id);
        if (k.abortController && !k.abortController.signal.aborted) k.abortController.abort(e), o++;
      }
    }
    return (0, import_chunk_f9x2f6cx.en)().markNoMessage(this.toolUseContext.agentId, h), { aborted: o, completedBeforeEvent: r, queuedNeverStarted: g, toolUseIds: this.tools.map((k) => k.id), startedToolUseIds: y };
  }
  takeFinishedResults() {
    if (this.discarded) return [];
    let e = [];
    for (let o of this.tools) if (o.status === "completed") o.status = "yielded", e.push(...o.results);
    return [...e, ...this.closeLateHookContext()];
  }
  closeLateHookContext() {
    let e = this.lateHookContext;
    return this.lateHookContext = void 0, e?.close(), e?.take() ?? [];
  }
  addTool(e, o) {
    let r = (0, import_chunk_b83x8d52.Dh)(this.toolDefinitions, e.name, this.toolUseContext.options.toolAliases);
    if (!r && (0, import_chunk_bzyb60p0.DPn)(e.name, this.toolUseContext, (0, import_chunk_bz1f2qnq.Z)(this.toolUseContext))) {
      this.tools.push({ id: e.id, block: e, assistantMessage: o, status: "queued", isConcurrencySafe: false, pendingProgress: [], pendingBridgeEvents: [], results: [] }), this.processQueue();
      return;
    }
    if (!r) {
      let h = (0, import_chunk_bzyb60p0.Oes)(e.name, (0, import_chunk_q2404y26.gG)(this.toolUseContext, this.toolDefinitions), this.toolUseContext.options.toolCatalog.getAllBaseTools(), this.toolUseContext.agentId, (0, import_chunk_4vsz8a99.Oc)(this.toolUseContext), (0, import_chunk_bz1f2qnq.Z)(this.toolUseContext), (0, import_chunk_bzyb60p0.xto)(this.toolUseContext), e.input, (0, import_chunk_b83x8d52.cst)(this.toolUseContext), (0, import_chunk_b83x8d52.tLn)(this.toolUseContext));
      (0, import_chunk_1ek4hhs6.nkt)(e.name, e.id, this.toolUseContext.agentId), (0, import_chunk_bzyb60p0.xfi)(e.name, e.id, this.toolUseContext, o.requestId), this.tools.push({ id: e.id, block: e, assistantMessage: o, status: "completed", isConcurrencySafe: true, pendingProgress: [], pendingBridgeEvents: [], results: [(0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: `<tool_use_error>Error: No such tool available: ${e.name}${h}</tool_use_error>`, is_error: true, tool_use_id: e.id }], toolUseResult: `Error: No such tool available: ${e.name}${h}`, sourceToolAssistantUUID: o.uuid, now: this.now })] }), this.wakeWaiters();
      return;
    }
    let g = r.inputSchema.safeParse(e.input), y = g?.success ? (() => {
      try {
        return Boolean(r.isConcurrencySafe(g.data));
      } catch {
        return false;
      }
    })() : false;
    this.tools.push({ id: e.id, block: e, toolName: r.name, assistantMessage: o, status: "queued", isConcurrencySafe: y, pendingProgress: [], pendingBridgeEvents: [], results: [], readAhead: gi.of(r, e, o, this.toolUseContext) }), this.processQueue(), this.lookAtReadsAhead();
  }
  lookAtReadsAhead() {
    let e = this.tools.find((o) => o.status === "executing");
    if (e?.callRunning !== true || e.isConcurrencySafe || this.discarded) return;
    for (let o of this.tools) {
      if (o.status !== "queued") continue;
      if (o.readAhead === void 0) return;
      o.readAhead.lookBeside(e.startedHere, this.toolUseContext);
    }
  }
  canExecuteTool(e) {
    let o = this.tools.filter((r) => r.status === "executing");
    return o.length === 0 || e && o.every((r) => r.isConcurrencySafe);
  }
  async processQueue() {
    for (let e of this.tools) {
      if (e.status !== "queued") continue;
      if (this.canExecuteTool(e.isConcurrencySafe)) {
        if (this.applyEndedRunLayers(), this.givesWayToMove()) e.leftForMove = true;
        else this.firstCallStartedAt ??= Date.now();
        await this.executeTool(e);
      } else if (!e.isConcurrencySafe) break;
    }
  }
  givesWayToMove() {
    if (this.leavingCallsForMove) return true;
    if (this.queuedCallsForMove === void 0 || this.firstCallStartedAt === void 0 || this.hasExecutingTools() || this.tools.some((e) => e.results.some(R_)) || this.tools.some((e) => e.status === "queued" && (0, import_chunk_vc58gmrj.wil)(e.assistantMessage, e.id))) return false;
    try {
      this.leavingCallsForMove = this.queuedCallsForMove.giveWay(Date.now() - this.firstCallStartedAt);
    } catch (e) {
      (0, import_chunk_k449cc64.i)(e);
    }
    return this.leavingCallsForMove;
  }
  createSyntheticErrorMessage(e, o, r, g, y = false, h = false) {
    if (o === "user_interrupted") {
      let k = (0, import_chunk_cbnm4p23.Ai)(this.toolUseContext.abortController.signal.reason), R = (0, import_chunk_cbnm4p23.XT)(this.toolUseContext.abortController.signal), w = (0, import_chunk_gq1dr8pm.$Ae)();
      if (k === "turn-abort" || R || w) {
        let P = w ? import_chunk_0ha8wex8.mze : R ? import_chunk_0ha8wex8.zmn : import_chunk_0ha8wex8.dB;
        return (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: P, is_error: true, tool_use_id: e }], toolUseResult: P, toolDenialKind: "interrupted", sourceToolAssistantUUID: r.uuid, now: this.now });
      }
      if (k === "background") return (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: (0, import_chunk_bzyb60p0._5)(import_chunk_0ha8wex8.mI), is_error: true, tool_use_id: e }], toolUseResult: import_chunk_0ha8wex8.mI, toolDenialKind: "cancelled", sourceToolAssistantUUID: r.uuid, now: this.now });
      let E = this.tools.find((P) => P.id === e), O = E !== void 0 && (E.callStarted !== true || E.callRunning === void 0 && this.toolUseContext.toolDecisions?.get(e)?.decision === "reject");
      return (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: (0, import_chunk_bzyb60p0._5)(y ? import_chunk_0ha8wex8.qmn : g && (k === "remote-cancel" || h && (0, import_chunk_bzyb60p0.xes)(this.toolUseContext.abortController.signal)) ? import_chunk_0ha8wex8.Kmn : import_chunk_0ha8wex8.hp), is_error: true, tool_use_id: e }], toolUseResult: import_chunk_0ha8wex8.sIr, toolDenialKind: "user-rejected", toolDenialBeforeRun: O ? true : void 0, interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(this.toolUseContext.abortController.signal), sourceToolAssistantUUID: r.uuid, now: this.now });
    }
    if (o === "left_for_move") return (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: import_chunk_0ha8wex8.hze, is_error: true, tool_use_id: e }], toolUseResult: import_chunk_0ha8wex8.hze, toolDenialKind: "cancelled", sourceToolAssistantUUID: r.uuid, now: this.now });
    if (o === "conversation_ended") return (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: "<tool_use_error>Cancelled: Claude ended the conversation</tool_use_error>", is_error: true, tool_use_id: e }], toolUseResult: "Conversation ended by model", sourceToolAssistantUUID: r.uuid, now: this.now });
    return (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: "<tool_use_error>Error: Streaming fallback - tool execution discarded</tool_use_error>", is_error: true, tool_use_id: e }], toolUseResult: "Streaming fallback - tool execution discarded", sourceToolAssistantUUID: r.uuid, now: this.now });
  }
  getAbortReason(e, o, r = false) {
    if (this.discarded) return "streaming_fallback";
    return (0, import_chunk_bzyb60p0.Dto)(this.toolUseContext.abortController.signal, { name: e.block.name, ran: o, ...(0, import_chunk_r3kja8v6.ue)() && { asyncReplReceipt: r } }, (0, import_chunk_bzyb60p0.iir)(this.toolUseContext));
  }
  armStoppedResultWait(e, o) {
    if ((0, import_chunk_r3kja8v6.ue)()) {
      if (e.status !== "executing" || e.stopWait !== void 0 || !(0, import_chunk_bzyb60p0.Yqa)(this.toolUseContext.abortController.signal, e.block.name)) return;
      let r = { kept: false, taken: false, withdrawn: false, timedOut: false, hookController: (0, import_chunk_cbnm4p23._r)() };
      r.timer = setTimeout((g, y, h, k) => {
        if (g.status !== "executing") return;
        y.timedOut = true, y.commit = void 0, y.hookController.abort(k), h();
      }, (0, import_chunk_bzyb60p0.ven)(), e, r, o, this.toolUseContext.abortController.signal.reason), e.stopWait = r;
    }
  }
  takeKeptResult(e, o) {
    if ((0, import_chunk_r3kja8v6.ue)()) {
      let r = e.stopWait;
      if (r === void 0 || !gm(o, e.id)) return o;
      clearTimeout(r.timer), r.taken = true;
      let g = r.commit;
      return r.commit = void 0, g?.(), b_(o, e.id);
    }
    return o;
  }
  stoppedResultWaitOf(e) {
    if ((0, import_chunk_r3kja8v6.ue)()) {
      let o = e.stopWait;
      if (o === void 0) return;
      return { hookController: o.hookController, get kept() {
        return o.kept;
      }, keep: (r) => {
        if (o.timedOut || o.withdrawn || o.taken) return false;
        return o.kept = true, o.commit = r, true;
      }, withdraw: () => {
        if (!o.taken) o.withdrawn = true, o.kept = false, o.commit = void 0;
      } };
    }
    return;
  }
  wakeWaiters() {
    if (this.drainGeneration++, this.progressAvailableResolve) this.progressAvailableResolve(), this.progressAvailableResolve = void 0;
    if (this.drainableResolve) this.drainableResolve(), this.drainableResolve = void 0;
  }
  hasWakeSince(e) {
    return this.drainGeneration > e;
  }
  waitForDrainable(e) {
    if (this.drainGeneration > e) return Promise.resolve(this.drainGeneration);
    return new Promise((o) => {
      this.drainableResolve = () => o(this.drainGeneration);
    });
  }
  buildSameTurnToolUses(e) {
    try {
      let o = /* @__PURE__ */ new Map();
      for (let r of this.tools) {
        if (r === e) break;
        let g = o.get(r.assistantMessage) ?? [];
        g.push(r.block), o.set(r.assistantMessage, g);
      }
      return [...o.entries()].map(([r, g]) => ({ ...r, message: { ...r.message, content: g } }));
    } catch (o) {
      (0, import_chunk_y53wbr8a.a)("tengu_auto_mode_sibling_context_error", { ...(0, import_chunk_qbrmmydq.T_)(o) });
      return;
    }
  }
  buildSameTurnErroredToolUseIds(e) {
    try {
      let o = /* @__PURE__ */ new Set();
      for (let r of this.tools) {
        if (r === e) break;
        if (fm(r)) o.add(r.id);
      }
      return o;
    } catch (o) {
      (0, import_chunk_k449cc64.i)(o), (0, import_chunk_y53wbr8a.a)("tengu_same_turn_errored_ids_error", { ...(0, import_chunk_qbrmmydq.T_)(o) });
      return;
    }
  }
  async executeTool(e) {
    e.status = "executing";
    let { readAhead: o } = e, r = Date.now(), g = [], y = [], k = (async () => {
      var _stack = [];
      try {
        let R = this.getAbortReason(e, false) ?? (e.leftForMove ? "left_for_move" : null);
        if (R) {
          if (R === "left_for_move") try {
            this.queuedCallsForMove?.left(e.toolName ?? e.block.name);
          } catch (J) {
            (0, import_chunk_k449cc64.i)(J);
          }
          if (R !== "streaming_fallback") (0, import_chunk_1ek4hhs6.nkt)(e.block.name, e.id, this.toolUseContext.agentId, (0, import_chunk_b83x8d52.Dh)(this.toolDefinitions, e.block.name, this.toolUseContext.options.toolAliases));
          g.push(this.createSyntheticErrorMessage(e.id, R, e.assistantMessage, false)), e.results = g, e.contextLayers = y, e.status = "completed", this.wakeWaiters();
          return;
        }
        let w = (0, import_chunk_cbnm4p23.sd)(this.toolUseContext.abortController);
        (0, import_chunk_cbnm4p23.tKn)(w, this.toolUseContext.abortController, this.discardController.signal), e.abortController = w;
        let E = (0, import_chunk_trwykz8a.mn)().exclusiveCallQueuedBehind, O = { isQueued: () => !this.discarded && this.tools.slice(this.tools.indexOf(e) + 1).some((J) => J.status === "queued" && !J.isConcurrencySafe), mayYetBeQueued: () => !this.discarded && this.responseOpen, holdLogged: false };
        E.set(e.id, O);
        const P = __using(_stack, { [Symbol.dispose]: () => {
          if (E.get(e.id) === O) E.delete(e.id);
        } });
        let I = this.toolUseContext.abortController.signal, { unfinishedCallsOfResponse: H } = (0, import_chunk_trwykz8a.mn)(), Q = () => this.discarded || this.responseOpen ? void 0 : this.tools.filter((J) => J.status === "queued" || J.status === "executing").map((J) => J.id);
        H.set(e.id, Q);
        const z = __using(_stack, { [Symbol.dispose]: () => {
          if (H.get(e.id) === Q) H.delete(e.id);
        } });
        let X = false, re = () => {
          if ((0, import_chunk_r3kja8v6.ue)() && X) X = false, this.toolUseContext.onStopWaitChange?.(-1);
        }, pe = (0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_bzyb60p0.Lto)(e.block.name) ? () => {
          let J = () => {
            g.push(this.createSyntheticErrorMessage(e.id, "user_interrupted", e.assistantMessage, _l(e), e.keepsOwnErrorAfterEsc, e.answered)), e.results = g, e.contextLayers = y, e.status = "completed", this.wakeWaiters();
          };
          if (this.armStoppedResultWait(e, J), e.stopWait === void 0) re();
        } : void 0;
        if ((0, import_chunk_r3kja8v6.ue)() && pe !== void 0) I.addEventListener("abort", pe, { once: true }), X = true, this.toolUseContext.onStopWaitChange?.(1);
        const ie = __using(_stack, (0, import_chunk_r3kja8v6.ue)() ? { [Symbol.dispose]: () => {
          if (pe !== void 0) I.removeEventListener("abort", pe);
          re(), clearTimeout(e.stopWait?.timer);
        } } : void 0);
        let se = false, le = false, ae, oe = (0, import_chunk_bzyb60p0.Y$)(e.block, e.assistantMessage, this.canUseTool, { ...this.toolUseContext, takesReportRows: true, abortController: w, markToolCallStarted: (J, ve) => {
          if (J === e.id) e.callStarted = true, e.startedHere = ve;
        }, markToolCallRunning: (J, ve = true) => {
          if (J === e.id) e.callRunning = ve, this.lookAtReadsAhead();
        }, keepOwnErrorAfterEsc: (J) => {
          if (J === e.id) e.keepsOwnErrorAfterEsc = true;
        }, markToolCallAnswered: (J) => {
          if (J === e.id) e.answered = true;
        }, lendToolExecEnd: (J, ve) => {
          if (J === e.id) ae = ve;
        }, toolCallAbandoned: (J) => J === e.id && se, handOverContextHook: (J, ve, G) => {
          let ye = this.tools[this.tools.indexOf(e) + 1];
          if (J !== e.id || e.status !== "executing" || e.isConcurrencySafe || this.discarded || I.aborted || ye?.status !== "queued" || !ve(ye.toolName ?? ye.block.name, ye.block.input) || (0, import_chunk_5zps0wmn.Gq)(e.toolName ?? e.block.name) || (0, import_chunk_865at33z.b)(um, true) === false) return false;
          return this.lateHookContext ??= new fl(this.toolUseContext.abortController), this.lateHookContext.add(e.toolName ?? e.block.name, e.id, G), le = true, true;
        }, answerReadAhead: o && ((J, ve) => J === e.id ? o.answerInTurn(ve, this.toolUseContext) : ve.send()), ...(0, import_chunk_r3kja8v6.ue)() && pe !== void 0 && { stoppedResultWait: (J) => J === e.id ? this.stoppedResultWaitOf(e) : void 0 }, sameTurnToolUses: this.buildSameTurnToolUses(e), sameTurnErroredToolUseIds: this.buildSameTurnErroredToolUseIds(e), runsAloneToolUseId: e.isConcurrencySafe ? void 0 : e.id }, this.now, void 0, true), Ae = false, qe = false, rt, Ue = (J) => {
          if (e.status !== "executing" || (0, import_chunk_xfj2cwfv.nn)()) return;
          se = true;
          try {
            if (!g.some((ve) => gm(ve, e.id))) g.push(this.createSyntheticErrorMessage(e.id, "user_interrupted", e.assistantMessage, _l(e), e.keepsOwnErrorAfterEsc, e.answered));
            ae?.(), (0, import_chunk_y53wbr8a.a)("tengu_aborted_tool_call_abandoned", { toolName: (0, import_chunk_865at33z.hr)(e.block.name), abortKind: (0, import_chunk_78g0060s.f)((0, import_chunk_cbnm4p23.bFe)(I.reason)), graceMs: J });
          } catch (ve) {
            (0, import_chunk_k449cc64.i)(ve);
          }
          e.results = g, e.contextLayers = y, e.status = "completed", this.wakeWaiters();
        }, Oe = false, He = () => {
          if (Oe = e.keepsOwnErrorAfterEsc === true && this.toolUseContext.agentId === void 0 && (0, import_chunk_cbnm4p23.Ai)(I.reason) === "user-cancel" && !(0, import_chunk_xfj2cwfv.nn)(), Oe) {
            rt = setTimeout(Ue, import_chunk_bzyb60p0.Rfi, import_chunk_bzyb60p0.Rfi);
            return;
          }
          let J = (0, import_chunk_bzyb60p0.qqa)(e.toolName ?? e.block.name);
          if (J > 0 && (0, import_chunk_bzyb60p0.xes)(I)) rt = setTimeout(Ue, J, J);
        };
        if (pe === void 0) I.addEventListener("abort", He, { once: true });
        const We = __using(_stack, { [Symbol.dispose]: () => {
          I.removeEventListener("abort", He), clearTimeout(rt);
        } });
        for await (let J of oe) {
          if (se) break;
          if ((0, import_chunk_r3kja8v6.ue)() && e.stopWait?.timedOut) break;
          if ((0, import_chunk_r3kja8v6.ue)() && e.stopWait?.kept === true && !e.stopWait.taken && (0, import_chunk_xfj2cwfv.nn)()) e.stopWait.kept = false, e.stopWait.commit = void 0;
          if ((0, import_chunk_bzyb60p0.IO)(J)) {
            e.pendingBridgeEvents.push(J), this.wakeWaiters();
            continue;
          }
          let ve = J.message?.type !== "user" || J.message.toolDenialKind === void 0;
          qe ||= (0, import_chunk_r3kja8v6.ue)() && J.message?.type === "user" && require("/$bunfs/root/chunk-zpvfxt2w.js").isAsyncReplReceipt(J.message.toolUseResult);
          let G = J.message?.type === "user" && Array.isArray(J.message.message.content) && J.message.message.content.some((he) => he.type === "tool_result" && he.is_error !== true), ye = this.getAbortReason(e, ve, qe);
          if (ye && !Ae && !((0, import_chunk_r3kja8v6.ue)() && C_(e, J.message, ye)) && !(Oe && ye === "user_interrupted" && ve && !G)) {
            if ((0, import_chunk_r3kja8v6.ue)()) clearTimeout(e.stopWait?.timer);
            g.push(this.createSyntheticErrorMessage(e.id, ye, e.assistantMessage, _l(e, J.message), e.keepsOwnErrorAfterEsc, e.answered));
            break;
          }
          if (J.message.type === "user" && Array.isArray(J.message.message.content) && J.message.message.content.some((he) => he.type === "tool_result" && he.is_error === true)) Ae = true;
          if (J.message) {
            if (J.message.type === "progress") {
              if (e.pendingProgress.push(J.message), J.message.data.type === "tool_heartbeat") this.wakeWaiters();
              else if (this.progressAvailableResolve) this.progressAvailableResolve(), this.progressAvailableResolve = void 0;
            } else if (g.push((0, import_chunk_r3kja8v6.ue)() && e.stopWait?.kept ? this.takeKeptResult(e, J.message) : J.message), J.toolDuration) e.toolDuration = J.toolDuration;
          }
          if (J.contextLayers) y.push(...J.contextLayers.layers);
        }
        if (!le && this.lateHookContext !== void 0) await this.lateHookContext.ended();
        if ((0, import_chunk_r3kja8v6.ue)() && e.stopWait?.timedOut) return;
        if (se) return;
        if (le) g.unshift(...this.lateHookContext?.take(e.id) ?? []), g.push(...this.lateHookContext?.take() ?? []);
        else g.unshift(...this.closeLateHookContext());
        if (e.results = g, e.contextLayers = y, e.status = "completed", this.wakeWaiters(), !e.isConcurrencySafe && y.length > 0) this.toolUseContext = (0, import_chunk_bz1f2qnq.Nre)(this.toolUseContext, (0, import_chunk_bzyb60p0.Ten)(this.toolUseContext, y)), this.appliedLayers = true;
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    })();
    e.promise = k, k.finally(() => {
      o?.end(e.callRunning === true && !this.toolUseContext.abortController.signal.aborted ? { durationMs: Date.now() - r, isError: fm(e) } : void 0), this.processQueue();
    });
  }
  *getCompletedResults() {
    if (this.discarded) return;
    for (let e of this.tools) {
      while (e.pendingBridgeEvents.length > 0) yield e.pendingBridgeEvents.shift();
      while (e.pendingProgress.length > 0) yield { message: e.pendingProgress.shift(), newContext: this.toolUseContext };
      if (e.status === "yielded") continue;
      if (e.status === "completed") {
        e.status = "yielded";
        let o = e.toolDuration;
        for (let r of e.results) yield { message: r, newContext: this.toolUseContext, toolDuration: o }, o = void 0;
        yield { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: [e.id] } };
      } else if (e.status === "executing" && !e.isConcurrencySafe) break;
    }
  }
  hasPendingProgress() {
    return this.tools.some((e) => e.pendingProgress.length > 0 || e.pendingBridgeEvents.length > 0);
  }
  async *getRemainingResults() {
    if (this.responseOpen = false, this.discarded) return;
    while (this.hasUnfinishedTools()) {
      await this.processQueue();
      let e = false;
      for (let o of this.getCompletedResults()) e = true, yield o;
      if (this.hasExecutingTools() && !e && !this.hasPendingProgress()) {
        let o = this.tools.filter((g) => g.status === "executing" && g.promise).map((g) => g.promise), r = new Promise((g) => {
          this.progressAvailableResolve = g;
        });
        if (o.length > 0) await Promise.race([...o, r]);
      }
    }
    for (let e of this.getCompletedResults()) yield e;
    if (this.lateHookContext !== void 0) {
      await this.lateHookContext.ended();
      for (let e of this.closeLateHookContext()) yield { message: e, newContext: this.toolUseContext };
    }
    if (this.applyEndedRunLayers(), this.appliedLayers) yield { newContext: this.toolUseContext };
  }
  applyEndedRunLayers() {
    if (this.tools.some((e) => e.status === "executing")) return;
    for (let e of this.tools) if (e.isConcurrencySafe && e.layersApplied !== true && e.contextLayers !== void 0 && e.contextLayers.length > 0) this.toolUseContext = (0, import_chunk_bz1f2qnq.Nre)(this.toolUseContext, (0, import_chunk_bzyb60p0.Ten)(this.toolUseContext, e.contextLayers)), e.layersApplied = true, this.appliedLayers = true;
  }
  hasExecutingTools() {
    return this.tools.some((e) => e.status === "executing");
  }
  hasStartedToolCall() {
    return this.tools.some((e) => e.callStarted === true);
  }
  hasUnfinishedTools() {
    return this.tools.some((e) => e.status !== "yielded");
  }
  getUpdatedContext() {
    return this.toolUseContext;
  }
}
async function* ym(e, o, r, g) {
  let y = { it: Symbol.asyncIterator in e ? e[Symbol.asyncIterator]() : e[Symbol.iterator]() };
  e = [];
  let h, k = o(), R = 0, w = (P) => o() === P && !P.hasUnfinishedTools() && !P.hasWakeSince(R), E, O;
  if (r !== void 0 && g !== void 0) {
    let P = (0, import_chunk_bzyb60p0.AIn)("query", () => E !== void 0 && w(E), r);
    g((I, H) => {
      let Q = P(I, H);
      if (!Q) O = I;
      return Q;
    });
  }
  try {
    while (true) {
      let P = o();
      if (P !== k) k = P, R = 0;
      if (h === void 0 && !P.hasUnfinishedTools() && !P.hasWakeSince(R)) {
        E = P;
        let H;
        try {
          H = await y.it.next();
          while (r !== void 0 && !H.done && (0, import_chunk_bzyb60p0.Nen)(H.value) && H.value !== O && w(P) && r(H.value)) H = await y.it.next();
        } finally {
          E = void 0;
        }
        if (H.done) return;
        yield H.value;
        continue;
      }
      h ??= Promise.resolve(y.it.next()).then((H) => ({ kind: "stream", r: H }));
      let I = await Promise.race([h, P.waitForDrainable(R).then((H) => ({ kind: "drain", gen: H }))]);
      if (I.kind === "drain") {
        R = I.gen, yield { type: "tool_drain_tick" };
        continue;
      }
      if (h = void 0, I.r.done) return;
      yield I.r.value;
    }
  } finally {
    Promise.resolve(y.it.return?.(void 0)).catch(() => {
    }), y.it = e[Symbol.iterator]();
  }
}
var w_ = 4e3, hm = "bg consent gate: own GrowthBook evaluation not ready";
async function _m() {
  try {
    if (!(0, import_chunk_865at33z.Qt)() || (0, import_chunk_gq1dr8pm.Rpe)() || (0, import_chunk_865at33z.ni)()) return;
    let e = Date.now();
    try {
      await (0, import_chunk_5appeerh.qt)((0, import_chunk_865at33z.ci)(), w_, hm), (0, import_chunk_w578pjby.t)(`bg consent gate: waited ${Date.now() - e}ms for own GrowthBook evaluation`);
    } catch (o) {
      let r = (0, import_chunk_jv7av99m.D)(o);
      (0, import_chunk_w578pjby.t)(`bg consent gate: proceeding on cached flags after ${Date.now() - e}ms (${r.message === hm ? "timeout" : r.name})`, { level: "warn" });
    }
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
}
function Tm(e) {
  let o = true;
  return { disarm() {
    o = false;
  }, [Symbol.dispose]() {
    if (!o) return;
    o = false;
    try {
      e();
    } catch (r) {
      (0, import_chunk_k449cc64.i)(r);
    }
  } };
}
function Cm(e, o, r, g) {
  return { fromModel: e, toModel: o, toModelIsConfigured: r, leftModels: [e], allOverloaded: g === "overloaded" };
}
function bm(e, o) {
  return e?.toModel === o.fromModel ? { ...o, fromModel: e.fromModel, leftModels: [...e.leftModels, ...o.leftModels], allOverloaded: e.allOverloaded && o.allOverloaded } : o;
}
function Mm(e, o) {
  try {
    let r = Em(e), g = Am(o, e.fromModel);
    return { ...r, noticeSuffix: r.toWindow >= r.fromWindow ? "" : ` \xB7 context window ${Sr(r.fromWindow)} \u2192 ${Sr(r.toWindow)} tokens` + (g === void 0 ? "" : ` (to keep ${Sr(r.fromWindow)}, ${g})`) };
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
    return;
  }
}
function hs({ fallback: e, model: o, configuredWindow: r }) {
  let g = { content: import_chunk_bzyb60p0.N6a, afterShrinkingFallback: false };
  if (e === void 0 || e.toModel !== o) return g;
  try {
    let y = Em(e);
    if (y.toWindow >= y.fromWindow || (0, import_chunk_bzyb60p0.ES)((0, import_chunk_bzyb60p0.Il)(e.toModel), r).window >= (0, import_chunk_bzyb60p0.ES)((0, import_chunk_bzyb60p0.Il)(e.fromModel), r).window) return g;
    let h = (0, import_chunk_865at33z.yi)(e.fromModel), k = Am(e, e.fromModel);
    return { content: `${import_chunk_bzyb60p0.Vdi} The likely cause: while working on this response, Claude Code fell back from ${h} to ${(0, import_chunk_865at33z.yi)(e.toModel)} and runs that model with a ${Sr(y.toWindow)}-token context window on your provider, instead of ${Sr(y.fromWindow)}. Your next message tries ${h} first. ` + (k === void 0 ? `To avoid this, use a fallback model with a ${Sr(y.fromWindow)} context window, or use /clear to start fresh.` : `To keep ${Sr(y.fromWindow)}, ${k}.`), afterShrinkingFallback: true };
  } catch (y) {
    return (0, import_chunk_k449cc64.i)(y), g;
  }
}
function Em(e) {
  let o = (0, import_chunk_f9x2f6cx.hh)();
  return { fromWindow: (0, import_chunk_865at33z.Yp)(e.fromModel, o), toWindow: (0, import_chunk_865at33z.Yp)(e.toModel, o) };
}
function Am(e, o) {
  if (!e.toModelIsConfigured || !(0, import_chunk_865at33z.US)(o) || !e.allOverloaded) return;
  let r = (0, import_chunk_865at33z.XZ)(e.toModel);
  if (e.leftModels.some((k) => k.toLowerCase() === r.toLowerCase())) return;
  let g = (0, import_chunk_865at33z.St)(r), y = (0, import_chunk_865at33z.WV)(r, g);
  return (y === "opus" ? (0, import_chunk_865at33z.VZ)() : y === "sonnet" ? (0, import_chunk_865at33z.KZ)() : true) && (0, import_chunk_zhr7rpv7.kd)((0, import_chunk_zmb62hr5.Yt)(g))?.context?.supports_1m_beta === true ? `use ${r} for this entry in your fallback model list` : void 0;
}
function Sr(e) {
  return (0, import_chunk_f64qna2j.go)(e).toUpperCase();
}
function Rm({ outcome: e, compactionCheck: o, blockingCheck: r, configuredWindow: g }) {
  try {
    return { loopTopOutcome: (0, import_chunk_78g0060s.f)(e.kind), thresholdSource: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Sye)(o.facts, g)), compactCheckContextWindow: o.contextWindow, blockingCheckContextWindow: (0, import_chunk_bzyb60p0.bx)(r.facts), blockingCheckTokenCount: r.tokenCount };
  } catch (y) {
    return (0, import_chunk_k449cc64.i)(y), {};
  }
}
function wm(e, o) {
  try {
    if (e.kind !== "not_needed" || e.breakerSkipped !== "rapid_refill") return;
    return hs(o).content;
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(r), "blocking limit: the thrash copy threw"));
    return;
  }
}
function vm(e, o, r) {
  try {
    if (e.kind !== "not_needed" || e.consecutiveFailures !== void 0 || e.breakerSkipped !== void 0 || (0, import_chunk_bzyb60p0.dZt)(o) || (0, import_chunk_bzyb60p0.bx)(o) < o.apiContextWindowWithoutOptIn && ((0, import_chunk_bzyb60p0.bx)(o) > import_chunk_865at33z.M1 || (0, import_chunk_865at33z.H1)() || !(0, import_chunk_865at33z.Rt)() || !(0, import_chunk_2xjdqky3.tml)() || !(0, import_chunk_2xjdqky3.b1n)()) || !(0, import_chunk_2xjdqky3.Zpl)()) return false;
    return (0, import_chunk_cqa9hrgx.u)("compact_not_needed_at_blocking_limit", r), true;
  } catch (g) {
    return (0, import_chunk_cqa9hrgx.m)("compact_not_needed_at_blocking_limit", "check_threw"), (0, import_chunk_k449cc64.i)(g), false;
  }
}
function xm(e) {
  return !e.foldSuspended && (!e.isMainThread || !e.lastIteration || (0, import_chunk_w50zedgp.Ng)());
}
async function Om(e, o, r) {
  if ((0, import_chunk_r3kja8v6.ue)()) {
    if (!(0, import_chunk_w50zedgp.cZ)()) return;
    let g = e.agentId ?? import_chunk_w50zedgp.Bk;
    try {
      let { isEvalSettleCommand: y, REPL_STATUS_EVENT_KIND: h } = require("/$bunfs/root/chunk-nm2eybte.js"), { getReplSessions: k } = require("/$bunfs/root/chunk-sprssgrr.js"), { enqueueReplStatus: R } = require("/$bunfs/root/chunk-v1sgwpdh.js"), w = k(e), { isReplSpliceWaitEnabled: E } = require("/$bunfs/root/chunk-x9ps0v7x.js");
      if (E()) {
        let re = e.abortController.signal, pe = e.messageQueue, ie = w.takeUnwaited(g), se = w.takeStatusLineGiven(g);
        if (re.aborted) return;
        if (ie.length === 0) {
          let We = w.pending(g);
          if (!se && We.some((J) => J.state === "detached")) R(pe, We, e.agentId, true);
          return;
        }
        let le = new AbortController(), ae = false, oe = () => {
          ae ||= w.ledger(g).some((J) => J.state === "late" && ie.includes(J.id));
          let We = w.undelivered(g);
          if (!ie.some((J) => We.has(J))) le.abort();
        }, Ae = w.onRunningScriptsChange(oe);
        oe();
        let { replSpliceEventBatching: qe, waitForNews: rt } = require("/$bunfs/root/chunk-x9ps0v7x.js"), Ue = () => {
          try {
            return r().filter((We) => !(We.mode === "poll-event" && We.pollEvent?.kind === h));
          } catch (We) {
            if (!(0, import_chunk_jv7av99m.Fe)(We)) (0, import_chunk_k449cc64.i)(We);
            return [];
          }
        }, Oe = void 0;
        try {
          await rt({ news: Ue, subscribe: (We) => pe.subscribe(We), signal: re, settled: le.signal, nothingToLingerFor: () => {
            if (ae || w.undelivered(g).size > 0 || w.isLateReportDue(g)) return false;
            let We = Ue();
            return We.length > 0 && We.every(y);
          }, ...qe() });
        } finally {
          Oe?.(), Ae();
        }
        let He = w.pending(g);
        if (He.length > 0 && !re.aborted) {
          let We = w.undelivered(g), J = He.some((ve) => ve.state === "detached") && ie.some((ve) => !We.has(ve));
          R(pe, He, e.agentId, J);
        }
        return;
      }
      let O = w.attached(g);
      if (O === void 0) return;
      let P = e.abortController.signal, I = e.messageQueue, H = () => I.peek((re) => o(re) && !y(re) && re.priority !== "later") !== void 0;
      if (P.aborted || H()) return;
      let Q = Math.max(0, (0, import_chunk_w50zedgp.Jan)() - Math.max(0, ...w.pending(g).map((re) => re.runningMs))), z = false;
      if (await new Promise((re) => {
        let pe = I.subscribe(() => {
          if (H()) se();
        }), ie = setTimeout(se, Q);
        function se() {
          clearTimeout(ie), pe(), P.removeEventListener("abort", se), re();
        }
        P.addEventListener("abort", se, { once: true }), O.then(() => {
          z = true, se();
        });
      }), z || P.aborted) return;
      let X = w.pending(g);
      if (X.length > 0 && !H()) R(I, X, e.agentId);
    } catch (y) {
      if ((0, import_chunk_jv7av99m.Fe)(y)) return;
      (0, import_chunk_k449cc64.i)(y);
    }
  }
}
var x_ = 18e5, O_ = 1e5;
function Ml(e) {
  try {
    return e();
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(o), "tengu_return_after_idle dropped")), null;
  }
}
function Pm(e, o) {
  Ml(() => {
    import_chunk_bzyb60p0.oyt.of(e).lastTurnEnd = { reason: o, at: Date.now(), monotonicAt: performance.now() };
  });
}
function Im(e, o) {
  return Ml(() => {
    let r = import_chunk_bzyb60p0.oyt.of(e), { record: g, lastTurnEnd: y } = r;
    r.record = { timer: "not_tried" }, r.lastTurnEnd = void 0;
    let h = Date.now(), k = h - (0, import_chunk_bzyb60p0.O6a)(o), R = (0, import_chunk_f9x2f6cx.R1e)() ?? 0, w = (0, import_chunk_f9x2f6cx.A1e)(), E = w !== null && ((0, import_chunk_f9x2f6cx.UB)() ?? w) === w, O = E ? { ...g, lastTurnEnd: y } : void 0;
    if (!Number.isFinite(k) || k < x_ || R < O_ && O?.result !== "compacted") return null;
    let P = (0, import_chunk_bzyb60p0.dCe)(e.precompute, void 0), I = { idle_seconds: Math.round(k / 1e3), contextTokens: R, turn_origin: (0, import_chunk_78g0060s.fe)((0, import_chunk_bzyb60p0.kos)(o)), is_same_process: E, slept_ms: O?.lastTurnEnd && Math.max(0, Math.round(h - O.lastTurnEnd.at - (performance.now() - O.lastTurnEnd.monotonicAt))), terminal_reason: (0, import_chunk_78g0060s.fe)(O?.lastTurnEnd?.reason), timer: (0, import_chunk_78g0060s.fe)(O?.timer), outcome: (0, import_chunk_78g0060s.fe)(O?.outcome), result: (0, import_chunk_78g0060s.fe)(O?.result), held_summary: (0, import_chunk_78g0060s.f)(P?.status ?? "none"), armTrigger: (0, import_chunk_78g0060s.fe)(P?.armTrigger), is_idle_compaction_on: (0, import_chunk_2xjdqky3.om)() && (0, import_chunk_2xjdqky3.Iit)() && (r.host !== null || (0, import_chunk_2xjdqky3.zBt)()) };
    return (H) => void Ml(() => (0, import_chunk_y53wbr8a.a)("tengu_return_after_idle", { ...I, loopTopOutcome: (0, import_chunk_78g0060s.f)(H) }));
  });
}
function x8t({ commandName: e, args: o, isMcp: r }, g) {
  let y = (0, import_chunk_8704k7wd.zs)(e, g), h = y !== void 0 && (0, import_chunk_vhsysgcd.yl)(y), [k = "", ...R] = o.split(/\s+/), E = !h && !r && k !== "" ? (0, import_chunk_8704k7wd.zs)(`${e}:${k}`, g) : void 0, O = h ? y : E;
  if (O === void 0) return;
  let P = (0, import_chunk_be4a2jph.zet)(O, E === void 0 ? o : R.join(" ")), I = P === void 0 ? void 0 : (0, import_chunk_8704k7wd.zs)(P.targetName, g);
  return I !== void 0 && (0, import_chunk_vhsysgcd.yl)(I) ? I : O;
}
function QVs(e, o) {
  return (0, import_chunk_3t7ve0wy.kl)() && (0, import_chunk_865at33z.E_)(e) && !(0, import_chunk_f9x2f6cx.zl)(o, import_chunk_xfj2cwfv.J_);
}
function EJn(e, o, r) {
  let g = QVs(e, o);
  return (y) => {
    if (!g || !(0, import_chunk_tjdnrbvx.yko)(y.value)) return false;
    try {
      let h = (0, import_chunk_tjdnrbvx.fv)(y.value), k = h?.startsWith("/") ? (0, import_chunk_be4a2jph.Ww)(h) : null;
      return k === null || x8t(k, r) === void 0;
    } catch {
      return (0, import_chunk_k449cc64.i)(Error("slashWordsTakenBy: the command look-up threw, so this slash line waits for the turn's end")), false;
    }
  };
}
async function Fm(e, o, r, g, y, h) {
  try {
    if (!((0, import_chunk_f9x2f6cx.l3t)() || (0, import_chunk_3t7ve0wy.kl)()) || e.mode !== "prompt" || e.isMeta || e.shouldQuery === false || !(0, import_chunk_865at33z.ree)(e) || (0, import_chunk_7f901c6t.zot)(e) || e.fromConnector === true || !(0, import_chunk_865at33z.E_)(o.modelFacts) || (0, import_chunk_f9x2f6cx.zl)(h, import_chunk_xfj2cwfv.J_)) return [];
    let k = (0, import_chunk_tjdnrbvx.fv)(e.value) ?? "", R = e.textNotTyped ? e.ownFilePaths ?? [] : (0, import_chunk_bzyb60p0.mcr)(UGr(e.promptSubmitted?.text ?? k, k));
    if (R.length === 0) return [];
    return await (0, import_chunk_bzyb60p0.dBe)((0, import_chunk_bzyb60p0.MHe)(null, { ...o, nestedMemoryAttachmentTriggers: [], pendingNestedMemoryTriggers: [] }, null, [], r, g, y, { inputMentionsOnly: true, ownFilePaths: R }));
  } catch (k) {
    if (!(0, import_chunk_jv7av99m.Fe)(k)) (0, import_chunk_k449cc64.i)(k);
    return [];
  }
}
function Lm(e, o, r, g) {
  try {
    if (!e.some((k) => k.mode === "prompt" && !k.isMeta && k.shouldQuery !== false && (0, import_chunk_865at33z._a)(k.origin) && !k.textNotTyped && (k.ultrathinkTyped || E2o({ composerEnter: k.composerEnter, preExpansion: k.preExpansionValue, localStdinOrigin: k.localStdinOrigin, input: k.value })) && (0, import_chunk_k67pwqya.Hwo)(o, r, k.ultrathinkTyped))) return;
    let h = (0, import_chunk_bzyb60p0.Ut)({ type: "ultrathink_effort" }, g);
    return (0, import_chunk_cqa9hrgx.u)("ultrathink_boost"), (0, import_chunk_y53wbr8a.a)("tengu_ultrathink", {}), (0, import_chunk_bzyb60p0.$_t)((0, import_chunk_f9x2f6cx.ot)()).setTurnEffort("xhigh"), { layer: { kind: "effort", effort: "xhigh" }, reminder: h };
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
    return;
  }
}
function Um(e) {
  let o = e.flatMap((g) => g.type === "assistant" ? g.message.content.flatMap((y) => y.type === "tool_use" && (y.name === import_chunk_4x1jja6d.Ac || y.name === import_chunk_4x1jja6d.Ooe) ? [y.id] : []) : []).at(-1);
  if (o === void 0) return "none";
  return new Set(e.flatMap((g) => g.type === "user" && typeof g.message.content !== "string" ? g.message.content.flatMap((y) => y.type === "tool_result" && y.is_error === true && !P_(y.content) ? [y.tool_use_id] : []) : [])).has(o) ? "failed" : "delivered";
}
function P_(e) {
  return (Array.isArray(e) ? e.map((r) => r.type === "text" ? r.text : "") : [e]).some((r) => typeof r === "string" && r.startsWith(import_chunk_4x1jja6d.phn));
}
function $r(e) {
  try {
    e();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[end-turn] bookkeeping threw and was skipped: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
function Al({ requested: e, lastIteration: o }) {
  try {
    return e === "mcp_meta_blockable" && !o && (0, import_chunk_865at33z.b)("tengu_glittery_mitten", true);
  } catch (r) {
    return $r(() => (0, import_chunk_cqa9hrgx.l)("query_mcp_end_turn_stop_hooks", "gate_threw")), (0, import_chunk_k449cc64.i)(r), false;
  }
}
async function* Nm({ throughStopHooks: e, onThrow: o, queryChainId: r, queryDepth: g }) {
  let y;
  try {
    y = yield* e();
  } catch (h) {
    let k = (0, import_chunk_jv7av99m.Fe)(h);
    if (!k) (0, import_chunk_k449cc64.i)(h);
    return $r(() => (0, import_chunk_cqa9hrgx.l)("query_mcp_end_turn_stop_hooks", k ? "aborted" : "pass_threw")), $r(o), { reason: "completed" };
  }
  return $r(() => {
    if (typeof y === "string") (0, import_chunk_y53wbr8a.a)("tengu_mcp_end_turn_overridden_by_stop_hook", { queryChainId: r, queryDepth: g });
    else (0, import_chunk_y53wbr8a.a)("tengu_mcp_tool_result_ended_turn", { queryChainId: r, queryDepth: g, source: (0, import_chunk_78g0060s.S)("mcp_meta_blockable"), terminalReason: (0, import_chunk_78g0060s.f)(y.reason) });
    (0, import_chunk_cqa9hrgx.u)("query_mcp_end_turn_stop_hooks");
  }), y;
}
var I_ = "tengu_joyful_globe";
function hi() {
  return (0, import_chunk_865at33z.Hc)() && (0, import_chunk_865at33z.b)(I_, true);
}
function Ti() {
  return (0, import_chunk_3t7ve0wy.Dm)();
}
function Bm(e) {
  if (!Ti()) return false;
  let o = e.findLast((r) => r.type === "assistant" || vl(r) || Si(r) || r.type === "user" && !(0, import_chunk_bzyb60p0.Rne)(r));
  return o !== void 0 && Si(o);
}
function QEa(e) {
  try {
    if (!Ti()) return;
    let o = e.findLastIndex(Si);
    if (o === -1) return;
    let r = e.slice(o + 1);
    if (wl(r).join("").trim() !== "" || r.some((g) => vl(g) || g.type === "user" && !(0, import_chunk_bzyb60p0.Rne)(g))) return;
    return e.slice(0, o).findLast((g) => g.type === "assistant");
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function jm(e) {
  let o = e.slice(e.findLastIndex((w) => vl(w) || w.type === "user" && !(0, import_chunk_bzyb60p0.Sm)(w) && !(0, import_chunk_bzyb60p0.Rne)(w)) + 1), r = o.findLastIndex(Si);
  if (r !== -1) {
    let w = o.slice(r + 1);
    return { kind: "reminded", sent: (0, import_chunk_bzyb60p0.Ros)(w, import_chunk_cee6q0wn.Yd), textLength: wl(w).join("").trim().length };
  }
  let g = [(0, import_chunk_6mfepmbb.tge)(), (0, import_chunk_6mfepmbb.sce)(), "/tmp"], y = new RegExp(`\\]\\(<?(?:computer://|file://)?((?:${g.map(import_chunk_7cfjrnwy.fo).join("|")})/[^\\s)>]{1,500})`, "g"), h = /!\[[^\]]{0,300}\]\(<?((?:\.\/)?(?![/~.%])[^\s()#?<>:]{1,500}\.(?:png|jpe?g|gif|webp|svg))(?=[\s)>])/gi, k = /* @__PURE__ */ new Map();
  for (let w of wl(o)) {
    let E = (0, import_chunk_bzyb60p0.ofi)(w.replace(/(```|~~~)[\s\S]*?(?:\1|$)/g, ""), () => "");
    for (let [, O = ""] of [h, y].flatMap((P) => [...E.matchAll(P)])) {
      let P = O;
      try {
        P = decodeURIComponent(O);
      } catch {
      }
      if (!P.includes("/.") && /\.[a-z0-9]+$/i.test(P)) k.set(import_path2.posix.basename(P), O);
    }
  }
  for (let w of k.size > 0 ? e : []) {
    if (w.type === "user") for (let E of F_(w.toolUseResult)) k.delete(E);
    if (w.type !== "assistant") continue;
    for (let E of w.message.content) {
      if (E.type !== "tool_use" || E.name !== import_chunk_cee6q0wn.Yd || typeof E.input !== "object" || E.input === null || !("files" in E.input)) continue;
      let O = (0, import_chunk_6k9zs54e.jk)(E.input.files) ?? [E.input.files];
      for (let P of O === import_chunk_6k9zs54e.Qm ? [] : O) if (typeof P === "string") k.delete(import_path2.posix.basename(P));
    }
  }
  if (k.size === 0) return { kind: "skip" };
  let R = [...k.values()].slice(0, 5).map(import_chunk_kx2fp6pc.mh).join(", ");
  return { kind: "remind", text: `${import_chunk_0ha8wex8.Q6n} ${R}. The user did not write this note and cannot see it. It is about your reply above only. A link to a file that you did not send may not open for them. If they should have a file, call ${import_chunk_cee6q0wn.Yd} with it now, then say in one short line that you sent it, or that the send failed. If they should have none, end your turn with no text. Do not repeat your reply, and do not mention this note.` };
}
function F_(e) {
  let o = (0, import_chunk_ma3kja9f.T)(e) ? e.attachments : void 0;
  return (Array.isArray(o) ? o : []).flatMap((r) => (0, import_chunk_ma3kja9f.T)(r) && typeof r.path === "string" && r.path.startsWith(import_chunk_cee6q0wn.ROr) ? [import_path2.posix.basename(r.path)] : []);
}
function vl(e) {
  return e.type === "attachment" && e.attachment.type === "queued_command";
}
function Si(e) {
  return e.type === "user" && e.isMeta === true && typeof e.message.content === "string" && e.message.content.startsWith(import_chunk_0ha8wex8.Q6n);
}
function wl(e) {
  let o = [];
  for (let r of e) {
    if (r.type !== "assistant") continue;
    for (let g of r.message.content) if (g.type === "text") o.push(g.text);
    else if (g.type === "tool_use" && g.name === import_chunk_4x1jja6d.Ac && typeof g.input === "object" && g.input !== null && "message" in g.input && typeof g.input.message === "string") o.push(g.input.message);
  }
  return o;
}
function jGr({ messageQueue: e, drain: o }) {
  try {
    let r = e.peek(import_chunk_tjdnrbvx.Kl);
    return !o.endSessionRequested && r !== void 0 && (0, import_chunk_tjdnrbvx._9)(r) && (0, import_chunk_bzyb60p0.One)(r) && r.shouldQuery !== false && r.textNotTyped !== true && !(0, import_chunk_tjdnrbvx.wg)(r.value);
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), false;
  }
}
function tva({ messageQueue: e, drain: o, io: r, alsoTo: g }) {
  (0, import_chunk_s9223e1q.BL)(() => {
    let y = r.sessionState.pendingTurnEndSummary;
    if (y === void 0 || o.turnUnderWay || !r.sessionState.turnEndSummaryOutstanding() || !jGr({ messageQueue: e, drain: o })) return;
    r.sessionState.endTurnEndSummaryHold(), (0, import_chunk_cqa9hrgx.u)("headless_follow_up_ends_hold");
    let h = performance.now();
    y.promise.then(() => {
      (0, import_chunk_s9223e1q.BL)(() => {
        let k = { call_ran_on_ms: Math.round(performance.now() - h) };
        (0, import_chunk_42tcgre6.q)("info", "cli_turn_end_wait_ended_by_message", k), g?.(k);
      });
    });
  });
}
var D_ = "tengu_dusky_paddock";
function Hm({ messageQueue: e, sessionState: o }) {
  if (!(0, import_chunk_865at33z.b)(D_, true)) return;
  let r = new AbortController(), g = () => {
    if (o?.hostHoldsMessage === true || jGr({ messageQueue: e, drain: { endSessionRequested: false } })) r.abort();
  };
  g();
  let y = [e.subscribe(g), o?.hostHoldsMessageChanged.subscribe(g)];
  return { signal: r.signal, release: () => {
    for (let h of y) h?.();
  } };
}
var ki = (e, o, r) => ({ agentId: e, teammateName: o, teamName: r });
function Wm(e, o, r) {
  let g = Object.values(o.all()).flatMap((k) => k.type === "in_process_teammate" && k.identity.agentId === e.agentId ? [k.identity.resumableAgentId] : []);
  if (g.length === 0) (0, import_chunk_w578pjby.t)(`[stopHooks] no task holds teammate ${e.agentId}: its turn ends with no TeammateIdle`);
  return r !== void 0 && g.includes(r) ? ki(r, e.agentName, e.teamName) : void 0;
}
function $m(e) {
  let o = (0, import_chunk_wtm85h0y.lT)(), r = o !== null && Boolean(o.agentId) && Boolean(o.teamName), g = e?.agentType === "subagent" && e.isMainSession === true;
  return r ? ki(g ? e.agentId : void 0, o.agentName, o.teamName) : void 0;
}
function Km(e, o, r) {
  return e?.agentType === "teammate" ? Wm(e, o, r) : $m(e);
}
(0, import_chunk_adx6804h.B)();
function Ym(e) {
  let o = e.input?.text;
  return typeof o === "string" && o.trim().length > 0 ? o : null;
}
var Vm = /* @__PURE__ */ new Map([["\u2713", "completed"], ["\u2714", "completed"], ["\u2705", "completed"], ["\u2731", "in_progress"], ["\u25CB", "pending"], ["\u25EF", "pending"], ["\u2022", "pending"]]), q_ = 512, H_ = 32;
function zm(e) {
  let o = e.split(`
`).map((y) => (0, import_chunk_wbk1hf21.Dr)(y).slice(0, q_).trim().replace(/^(\*{1,2})(.+?)\1$/, "$2")), r = o[0] ?? "";
  return { header: r !== "" && !Vm.has(r.charAt(0)) ? r : null, items: o.flatMap((y) => {
    let h = Vm.get(y.charAt(0)), k = y.slice(1).trim();
    return h !== void 0 && k !== "" ? [{ content: k, status: h }] : [];
  }).slice(0, H_) };
}
var G_ = (0, import_chunk_epy4sc29.Jke)(["update_status"]).map((e) => `__${e}`), Q_ = [import_chunk_0vvtfqck.UFn, "__react", ...import_chunk_0vvtfqck.MMi], $_ = (0, import_chunk_epy4sc29.Jke)(["ask_decision"]).map((e) => `__${e}`), K_ = (0, import_chunk_epy4sc29.Jke)(["close_decision", "set_thread_resolved"]).map((e) => `__${e}`), V_ = /* @__PURE__ */ new Set(["github_webhook", "trigger_fire"]), Y_ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ notifications: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ origin: (0, import_chunk_adx6804h.n)() })) })), z_ = 2592e5;
function Xm(e) {
  if (!Zm()) return;
  try {
    let o = ep(e);
    return o?.shown === true && (0, import_chunk_865at33z.B4)(e.slice(o.row), (r, g) => r === void 0 && g.type === "user" && g.isMeta === true && g.turnOrigin === void 0) ? o.id : void 0;
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[classifier] shown message not read: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
    return;
  }
}
function Jm(e, o) {
  if (!Zm()) return false;
  try {
    let r = ep(o);
    if (r?.id !== e || Date.now() - Date.parse(o[r.row].timestamp) >= z_) return false;
    let g = o.slice(r.row);
    return (0, import_chunk_tteqedwm._er)(g) && (0, import_chunk_865at33z.B4)(g, X_) && Z_(g);
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`[classifier] quiet turn not read: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" }), false;
  }
}
function Zm() {
  return (0, import_chunk_0vvtfqck.BFn)() && (0, import_chunk_865at33z.b)("tengu_graceful_cake", true);
}
function Ci(e, o) {
  return o.some((r) => e.endsWith(r));
}
function ep(e) {
  let o = (0, import_chunk_0vvtfqck.kje)(), r = /* @__PURE__ */ new Set();
  for (let g of e) if (g.type === "user" && Array.isArray(g.message.content)) {
    for (let y of g.message.content) if (y.type === "tool_result" && y.is_error === true) r.add(y.tool_use_id);
  }
  for (let g = e.length - 1; g >= 0; g--) {
    let y = e[g];
    if (y.type !== "assistant") continue;
    for (let h of y.message.content.toReversed()) {
      if (h.type !== "tool_use") continue;
      if ((0, import_chunk_h4t4qfaq.Lb)(h.name)) return { row: g, id: h.id, shown: false };
      if (r.has(h.id)) continue;
      if (Ci(h.name, K_)) return { row: g, id: h.id, shown: false };
      if (Ci(h.name, $_)) return { row: g, id: h.id, shown: true };
      if (!o.has(h.name) || Ci(h.name, Q_)) continue;
      if (!Ci(h.name, G_)) return { row: g, id: h.id, shown: true };
      if (!zm(Ym(h) ?? "").items.some((k) => k.status !== "completed")) return { row: g, id: h.id, shown: false };
    }
  }
  return;
}
function X_(e, o) {
  if (e !== void 0 && e.kind !== "task-notification") return false;
  if (e?.subkind === "scheduled-trigger" || e?.producer === "session-task") return true;
  if (!(0, import_chunk_xfj2cwfv.kAt)(e?.subkind)) return false;
  if (e === void 0 && o.type === "user" && o.isMeta === true && (o.turnOrigin === void 0 || o.turnOrigin === "scheduled")) return true;
  let r = o.type === "user" ? (0, import_chunk_bzyb60p0.wu)(o.message.content) : o.type === "attachment" && o.attachment.type === "queued_command" ? (0, import_chunk_bzyb60p0.wu)(o.attachment.prompt) : null;
  if (r === null) return false;
  let g = (0, import_chunk_xggvpcqr.lUe)(r);
  return g === null ? (0, import_chunk_1ek4hhs6.nmo)(r) : !(0, import_chunk_xggvpcqr.Igt)(g) && (g.from === void 0 || g.from === "system");
}
function Z_(e) {
  let o = /* @__PURE__ */ new Set();
  for (let r of e) if (r.type === "assistant") for (let g of r.message.content) {
    if (g.type !== "tool_use") continue;
    if (g.name === import_chunk_snpsm13w.Xne) return false;
    if (g.name === import_chunk_xfj2cwfv.fS) o.add(g.id);
  }
  else if (r.type === "user" && Array.isArray(r.message.content)) for (let g of r.message.content) {
    if (g.type !== "tool_result" || !o.delete(g.tool_use_id)) continue;
    let y = Y_().safeParse(r.toolUseResult);
    if (!y.success || !y.data.notifications.every((h) => V_.has(h.origin))) return false;
  }
  return o.size === 0;
}
var Kr = require("/$bunfs/root/chunk-nv7fsyzy.js"), Qn = require("/$bunfs/root/chunk-d39h1zmc.js"), eS = require("/$bunfs/root/chunk-pyvarp1z.js");
var bi = require("/$bunfs/root/chunk-6t7ttdme.js"), Kn = require("/$bunfs/root/chunk-4tjhvemm.js");
var Jo = require("/$bunfs/root/chunk-qt6dxc5b.js");
function tp(e) {
  return e.findLastIndex((o) => o.type === "user" && !o.isMeta && !(0, import_chunk_bzyb60p0.Sm)(o));
}
function rp() {
  return { type: "notification", notification: { key: "stop-hook-error", text: `stop hook problem \xB7 ${(0, import_chunk_1n9wdcmg.Iy)("app:toggleTranscript", "Global", "ctrl+o")} to see`, priority: "immediate" } };
}
function xl(e) {
  return e.type === "attachment" && e.attachment.type === "hook_blocking_error";
}
function _s(e) {
  try {
    if (pi.of(e.toolUseContext.session.host).hooks.includes(import_chunk_bzyb60p0.zpi)) (0, import_chunk_bzyb60p0.L6l)(e, (0, import_chunk_bzyb60p0.hfe)(e));
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function Mi(e) {
  try {
    if ((0, import_chunk_865at33z.mp)(e.toolUseContext.agentContext) && (e.querySource.startsWith("repl_main_thread") || e.querySource === "sdk")) e.toolUseContext.saveForkParams?.((0, import_chunk_bzyb60p0.hfe)(e)), (0, import_chunk_bzyb60p0.SIn)();
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
async function* Fl(e, o, r, g, y, h, k, R, w, E, O, P) {
  let I = P === "tool", H = [...e, ...o, ...r], { policy: Q, launchPolicyLabel: z } = (0, import_chunk_bzyb60p0.wno)();
  if (Jo && P === "mcp_meta" && R === "sdk" && !k.agentId && !k.abortController.signal.aborted && Q !== void 0) $r(() => {
    let ie = Jo.evaluateProjectsReplyGate(e, [...o, ...r], cp(Q, k));
    switch (ie.kind) {
      case "answered":
        (0, import_chunk_cqa9hrgx.u)("projects_reply_gate_policy", { ...z, person_opened_turn: ie.personOpened, no_reply_only: ie.noReplyOnly, source: (0, import_chunk_78g0060s.S)("mcp_meta") });
        break;
      case "still_silent":
      case "bounce":
        (0, import_chunk_mjyj9rac.P8t)(import_chunk_mjyj9rac.ava[ie.reason], { ...z, person_opened_turn: ie.personOpened });
        break;
      case "skip":
        break;
    }
  });
  if ((0, import_chunk_865at33z.mp)(k.agentContext) && (R.startsWith("repl_main_thread") || R === "sdk")) k.saveForkParams?.((0, import_chunk_bzyb60p0.hfe)({ messages: H, systemPrompt: g, userContext: y, systemContext: h, toolUseContext: k, querySource: R, stickyBetas: E }));
  if (I || !(0, import_chunk_865at33z.Qt)() && k.sessionState) yield* sp(O, [...e, ...o], o, k, R);
  if (!k.agentId) try {
    yield* Un(k);
  } catch {
  }
  let X = Date.now(), re = k.agentId ? void 0 : k.getAppState().activeGoal, pe = false;
  try {
    let ie = (0, import_chunk_bzyb60p0.FBe)((0, import_chunk_bz1f2qnq.Z)(k).mode, k.abortController.signal, void 0, w, k.agentId, k, H, k.agentType, "loop_tick"), se = [];
    for await (let le of ie) {
      if (le.timedOut && (0, import_chunk_ch6321bk.dLe)(re, le.hook)) (0, import_chunk_cqa9hrgx.l)("goal_met", "evaluator_timeout");
      if (le.message) {
        if (yield le.message, le.message.type === "attachment") {
          let ae = le.message.attachment;
          if ("hookEvent" in ae && (ae.hookEvent === "Stop" || ae.hookEvent === "SubagentStop")) {
            if (ae.type === "hook_non_blocking_error") se.push(ae.stderr || `Exit code ${ae.exitCode}`);
            else if (ae.type === "hook_error_during_execution") se.push(ae.content);
          }
        }
      }
      if (le.blockingError || le.preventContinuation) (0, import_chunk_w578pjby.t)(`[end-turn] Stop hook block discarded (turn ended by ${P === "tool" ? "tool result" : P === "mcp_meta" ? "MCP end-turn" : "loop tick"}, no model re-invoke): ${le.blockingError ? "block" : "preventContinuation"}`);
    }
    if (se.length > 0) yield rp();
    if (P) pe = true, yield* Fo(k, H, { stopHookActive: w });
  } catch (ie) {
    if ((0, import_chunk_jv7av99m.Fe)(ie) && (k.abortController.signal.aborted || ie instanceof import_chunk_jv7av99m.wp)) {
      if ((0, import_chunk_w578pjby.t)("Stop hook cancelled (abort or stream teardown)"), P && !pe && !k.abortController.signal.aborted) try {
        yield* Fo(k, H, { stopHookActive: w });
      } catch (se) {
        (0, import_chunk_w578pjby.t)(`[stop-hooks] teardown reactions compensation failed: ${(0, import_chunk_jv7av99m.d)(se)}`);
      }
      return;
    }
    if ((0, import_chunk_y53wbr8a.a)("tengu_stop_hook_error", { duration: Date.now() - X, queryChainId: (0, import_chunk_49zxha55.Ce)(k.queryTracking?.chainId), queryDepth: k.queryTracking?.depth }), yield (0, import_chunk_bzyb60p0.Pt)(`Stop hook failed: ${(0, import_chunk_jv7av99m.d)(ie)}`, "warning"), P && !pe) try {
      yield* Fo(k, H, { stopHookActive: w });
    } catch (se) {
      (0, import_chunk_w578pjby.t)(`[stop-hooks] turn-end reactions compensation failed: ${(0, import_chunk_jv7av99m.d)(se)}`, { level: "error" });
    }
  }
}
var tS = "tengu_flint_orchard", oS = "tengu_radiant_breeze";
async function* sp(e, o, r, g, y) {
  if (!e || (0, import_chunk_865at33z.Pr)(y) !== "main" || g.agentId || (0, import_chunk_xfj2cwfv.nn)() && !g.abortController.signal.aborted) return;
  let h = eS, k = h.detectSurfaces((0, import_chunk_m15w38ag.ne)() && g.storageV5 ? await h.watchedForSurfaces(g.storageV5) : void 0), R = h.sinksFor(k), w = h.engineFor(R);
  if (!w) return;
  e.lastEmittedDetail = "";
  let E = g.getAppState().postTurnSummary;
  if (R.has("summary")) yield { type: "post_turn_summary", value: null };
  let O = h.projectsRecapEnabled(g.options.tools), P, I, H, Q = (J) => {
    if (H?.outdated) H.publishKept = () => Q(J);
    else (0, import_chunk_r60bafc1.dat)(g.sessionState, J);
  }, z = (0, import_chunk_78g0060s.S)("none"), X = R.has("summary") ? Xm(o) : void 0, re = (J, ve) => {
    if (ve || !R.has("summary")) return;
    let G = P?.superseded || I?.aborted || e.onClassified !== re, ye = J.source === "no-text-turn" && J.detail === "";
    if (ye && !G) {
      if (E) g.setAppState((Ge) => Ge.postTurnSummary === E ? Ge : { ...Ge, postTurnSummary: E }), Q(E), z = (0, import_chunk_78g0060s.S)("republished_prior");
      return;
    }
    let he = h.classifiedToPostTurnSummary(J, { projectsRecap: O }), dt = J.source === "no-text-turn" ? E?.standing : X;
    if (he.status_category === "blocked" && dt !== void 0) he.standing = dt;
    if (J.source === "no-text-turn") {
      if (he.recent_action = E?.recent_action ?? "", E?.description !== void 0) he.description = E.description;
      if (E?.reply !== void 0) he.reply = E.reply;
    }
    if (G) {
      if ((0, import_chunk_w578pjby.t)("[classifier] did not publish a late end-of-turn summary: a newer session status, later work or a person's message replaced it while it was being generated"), z = (0, import_chunk_78g0060s.S)("dropped_superseded"), P !== void 0 && !ye) g.sessionState?.keepDroppedSummary(P, he);
      return;
    }
    g.setAppState((Ge) => Ge.postTurnSummary?.status_category === he.status_category && Ge.postTurnSummary.status_detail === he.status_detail && Ge.postTurnSummary.needs_action === he.needs_action && Ge.postTurnSummary.recent_action === he.recent_action && Ge.postTurnSummary.description === he.description && Ge.postTurnSummary.reply === he.reply && Ge.postTurnSummary.standing === he.standing ? Ge : { ...Ge, postTurnSummary: he }), Q(he), z = (0, import_chunk_78g0060s.S)("published"), (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "post_turn_summary", summarizes_uuid: r.at(-1)?.uuid ?? "", status_category: he.status_category, status_detail: he.status_detail, needs_action: he.needs_action });
  };
  e.onClassified = re;
  let pe = (0, import_chunk_f9x2f6cx.vb)(), ie = pe ? g.options.agentDefinitions.activeAgents.find((J) => J.agentType === pe) : void 0, se = o.filter((J) => J.type === "assistant"), le = O || (0, import_chunk_5w3q7h0v.Dne)() ? (0, import_chunk_5w3q7h0v.hao)(o) : void 0;
  if (O) {
    if (e.latestAsk = "", le) Qn.captureLatestAsk(e, le.text);
  } else {
    let J = Qn.findLatestRealUserAsk(o);
    if (J) Qn.captureLatestAsk(e, J);
  }
  if (e.readsOtherAgents = (E?.status_category === "blocked" || E?.status_category === "need_input") && le !== void 0 && le.id !== e.personWordsReadId, e.personWordsId = le?.id, e.scriptPosts = g.toolState.get(import_chunk_pt2stgge.MDt).take(), e.quietTurnKeepsAsk = R.has("summary") && E?.standing !== void 0 && Jm(E.standing, o), e.quietTurnKeepsAsk) (0, import_chunk_cqa9hrgx.u)("chat_relay_standing_ask");
  let ae = g.sessionState, oe = k.has("ccr") && ((0, import_chunk_3t7ve0wy.Gm)() || (0, import_chunk_3t7ve0wy._S)()), Ae = (0, import_chunk_3t7ve0wy.Sa)(), qe = oe && ae !== void 0 && !Ae, rt = w === "llm" && y === "sdk" && !(0, import_chunk_865at33z.Qt)() && !qe && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? (0, import_chunk_cbnm4p23.RMr)(g.abortController.signal, (J) => {
    if ((0, import_chunk_cbnm4p23.Ai)(J) !== "interrupt") return false;
    try {
      let ve = g.messageQueue.peek(import_chunk_tjdnrbvx.Kl);
      return ve !== void 0 && (0, import_chunk_bzyb60p0.Pne)(ve) && !(0, import_chunk_bzyb60p0.fSe)(ve);
    } catch (ve) {
      return Pl(ve), false;
    }
  }) : void 0, Ue = rt !== void 0 && (0, import_chunk_bz1f2qnq.Tp)(import_chunk_865at33z.txl) === "on", Oe = w === "llm" && y === "sdk" && k.has("desktop") && !k.has("ccr") ? Hm(g) : void 0, He = Oe !== void 0 && !Oe.signal.aborted && (0, import_chunk_3t7ve0wy.UBl)() && (!k.has("bridge") || ae?.hostHoldsBridgeTurnEnd === true && (0, import_chunk_865at33z.b)(oS, true)) && (0, import_chunk_865at33z.b)(tS, true);
  if (He) I = Oe.signal;
  let We = Qn.classifyAndPush(e, (0, import_chunk_9e5mdyfk.TS)(), ie, "", se, (0, import_chunk_ed372ykp.Lq)(g.taskRegistry.all()), w, k, false, O, Ue ? rt.signal : Oe?.signal).catch((J) => {
    (0, import_chunk_w578pjby.t)(`[classifier] error: ${(0, import_chunk_jv7av99m.d)(J)}`, { level: "error" });
  });
  if ((0, import_chunk_865at33z.Qt)() || y === "sdk") {
    let J = qe || He ? 0 : import_chunk_r3e8vdzv.Kpo, ve = Date.now();
    if (qe) P = ae.holdTurnEndSummary(We, performance.now() + import_chunk_r3e8vdzv.Kpo);
    else if (He) {
      if (We.finally(() => Oe?.release()), ae !== void 0) {
        let ye = { promise: We.then(() => {
          ye.settled = true;
        }), deadlineAt: performance.now() + import_chunk_r3e8vdzv.Kpo, settled: false, outdated: false };
        ae.followingSummary = H = ye;
      }
    } else try {
      await (0, import_chunk_5appeerh.qt)(We, import_chunk_r3e8vdzv.Kpo, "classifier write timed out").catch(() => {
      });
    } finally {
      rt?.release(), Oe?.release();
    }
    let G = Date.now();
    if (rt?.signal.aborted) (0, import_chunk_cqa9hrgx.u)("headless_interrupt_during_summary_wait", { held_ms: G - ve, interrupt_can_cut_call: Ue });
    if (Oe?.signal.aborted) (0, import_chunk_cqa9hrgx.u)("headless_waiting_message_cut_summary_call", { held_ms: G - ve });
    if (y === "sdk") We.then(() => {
      let ye = P?.endedAt;
      (0, import_chunk_y53wbr8a.a)("tengu_turn_end_classifier_hold", { hold_cap_ms: J, held_ms: G - ve, summary_after_turn_ms: Math.max(0, Date.now() - G), cowork_ccr: oe, summary_follows_result: He, engine: (0, import_chunk_78g0060s.f)(w), summary_outcome: z, session_origin_chat: Ae, interrupt_can_cut_call: Ue, message_waited: Oe?.signal.aborted === true, ...ye !== void 0 && { call_ran_on_ms: Math.round(performance.now() - ye) } });
    });
  }
}
function ap(e, o) {
  try {
    if (!e?.turnEndSummaryOutstanding() || !o()) return;
    return e.waitForTurnEndSummary()?.catch(Pl);
  } catch (r) {
    Pl(r);
    return;
  }
}
function Pl(e) {
  (0, import_chunk_k449cc64.i)(e);
}
async function* up(e, o, r, g, y, h, k, R, w, E, O = []) {
  if ((0, import_chunk_xfj2cwfv.nn)() && !h.abortController.signal.aborted) return { blockingErrors: [], preventContinuation: false };
  if (h.options.settingsHooksOff || k === "agent_summary") return { blockingErrors: [], preventContinuation: false };
  let P = Date.now(), I = { messages: [...e, ...o, ...O], systemPrompt: r, userContext: g, systemContext: y, toolUseContext: h, querySource: k, stickyBetas: w };
  if ((0, import_chunk_865at33z.mp)(h.agentContext) && (k.startsWith("repl_main_thread") || k === "sdk")) h.saveForkParams?.((0, import_chunk_bzyb60p0.hfe)(I));
  if (yield* sp(E, I.messages, o, h, k), !(0, import_chunk_2gtmjt3y.Xn)()) {
    if (!(0, import_chunk_69qhefwa.Oi)(process.env.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION)) if ((0, import_chunk_wsm915mg.RCn)() && (0, import_chunk_865at33z.mp)(h.agentContext)) h.session.promptSuggestion.arm();
    else (0, import_chunk_8dns2jbk.yva)(I, E?.lastResult);
    if (!h.agentId && ((0, import_chunk_865at33z.imn)() || Kr.isLaptopExtractActive(h.session.host))) {
      let G = Kr.executeExtractMemories(I, h.appendSystemMessage);
      if ((0, import_chunk_865at33z.E6t)()?.sync || Kr.isLaptopExtractSync(h.session.host)) try {
        await G;
      } catch (ye) {
        (0, import_chunk_w578pjby.t)(`extractMemories (sync) failed: ${ye}`);
      }
    }
    if (!h.agentId) (0, import_chunk_7kf5v011.dva)(I, h.appendSystemMessage);
  }
  if (!h.agentId) try {
    yield* Un(h);
  } catch {
  }
  let H = null;
  if ((k.startsWith("repl_main_thread") || k === "sdk") && bi.isBriefEnabled() && !import_chunk_c203g5kd.s.DISABLE_BRIEF_MODE_STOP_HOOK && !h.agentId && h.options.tools.some((G) => (0, import_chunk_4vsz8a99.gt)(G, Kn.BRIEF_TOOL_NAME))) try {
    let G = tp(e), ye = e.slice(G + 1), he = Um([...ye, ...o]), dt = he === "delivered", Ge = !dt && ye.some((no) => no.type === "user" && no.isMeta && typeof no.message.content === "string" && no.message.content.includes(Kn.BRIEF_ENFORCE_SENTINEL));
    if (!dt && !Ge) H = (0, import_chunk_bzyb60p0.Me)({ content: `${Kn.BRIEF_ENFORCE_SENTINEL} ${he === "failed" ? `${Kn.BRIEF_FAILED_NOTE} ` : ""}${bi.getBriefEnforceText()}`, isMeta: true }), yield H;
  } catch (G) {
    (0, import_chunk_w578pjby.t)(`Brief mode enforcement failed: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "error" });
  }
  let Q = null, z = null, { policy: X, launchPolicyLabel: re, isLaunchPolicyOff: pe } = (0, import_chunk_bzyb60p0.wno)();
  if (pe && k === "sdk" && !h.agentId) (0, import_chunk_w578pjby.t)("Reply gate: verdict=skip why=disableReplyCheck");
  if (Jo && k === "sdk" && !h.agentId && (X !== void 0 || Jo.isProjectsReplyGateEnabled() && Jo.isProjectsReplyMountConnected(h.getAppState()))) try {
    let G = (0, import_chunk_epy4sc29.LPe)(h.options.tools), ye, he = Jo.evaluateProjectsReplyGate(e, [...o, ...O], X !== void 0 ? cp(X, h) : { kind: "remote_control", toolNames: G, workOutFrom: new Set(Object.values(h.taskRegistry.all()).filter((dt) => (0, import_chunk_z6hn62tj.uy)(dt) && !(0, import_chunk_z6hn62tj.dre)(dt)).flatMap((dt) => dt.toolUseId ?? [])) }, X && ((dt) => {
      ye = dt;
    }));
    switch (he.kind) {
      case "answered":
        if (X !== void 0) (0, import_chunk_cqa9hrgx.u)("projects_reply_gate_policy", { ...re, person_opened_turn: he.personOpened, no_reply_only: he.noReplyOnly });
        else (0, import_chunk_cqa9hrgx.u)("bridge_projects_reply_gate");
        break;
      case "still_silent":
        if (X !== void 0) (0, import_chunk_mjyj9rac.P8t)("still_silent", { ...re, person_opened_turn: he.personOpened });
        else (0, import_chunk_cqa9hrgx.m)("bridge_projects_reply_gate", "still_silent");
        break;
      case "skip":
        if (ye?.verdict === "skip" && ye.why !== "not_held") (0, import_chunk_cqa9hrgx.u)("projects_reply_gate_policy_skip", { ...re, why: (0, import_chunk_78g0060s.f)(ye.why) });
        break;
      case "bounce":
        if (!(0, import_chunk_epy4sc29.l8)(h.options.tools, X?.terminalTools ?? [G.reply])) {
          if (X !== void 0) (0, import_chunk_mjyj9rac.P8t)("reply_tool_not_in_pool", { ...re, person_opened_turn: he.personOpened }), ye &&= { ...ye, verdict: "no_bounce", why: "reply_tool_not_in_pool" };
          else (0, import_chunk_cqa9hrgx.m)("bridge_projects_reply_gate", "reply_tool_not_in_pool");
          break;
        }
        if (X?.skipRetryWhileServerDown === true && he.reason === "reply_errored" && Jo.areTerminalToolServersDown(X, h.options.tools, (0, import_chunk_4vsz8a99.Oc)(h))) {
          (0, import_chunk_mjyj9rac.P8t)("reply_server_down", { ...re, person_opened_turn: he.personOpened }), ye &&= { ...ye, verdict: "no_bounce", why: "reply_server_down" };
          break;
        }
        if (X !== void 0) (0, import_chunk_cqa9hrgx.l)("projects_reply_gate_policy", he.reason, { ...re, person_opened_turn: he.personOpened });
        else (0, import_chunk_cqa9hrgx.l)("bridge_projects_reply_gate", he.afterChecklist === true ? "checklist_only" : he.reason);
        z = (0, import_chunk_bzyb60p0.Me)({ content: he.text, isMeta: true });
        break;
    }
    if (ye !== void 0 && re !== void 0) {
      let { verdict: dt, why: Ge, ...no } = ye;
      (0, import_chunk_w578pjby.t)(`Reply gate: ${Object.entries({ verdict: dt, why: Ge, ...no }).filter(([, lo]) => lo !== void 0).map(([lo, Ft]) => `${lo}=${Ft}`).join(" ")}`);
    }
    if (z !== null) yield z;
  } catch (G) {
    (0, import_chunk_w578pjby.t)(`Projects reply gate enforcement failed: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "error" });
  }
  let ie = null;
  if (h.options.requiresStructuredOutput && (0, import_chunk_865at33z.Pr)(k) !== "auxiliary") try {
    let G = tp(e), ye = e.slice(G + 1), he = (0, import_chunk_bzyb60p0.Ros)([...ye, ...o], import_chunk_2b1wcpvk.ga), dt = !he && ye.some((Ge) => Ge.type === "user" && Ge.isMeta && typeof Ge.message.content === "string" && Ge.message.content.includes(import_chunk_0ha8wex8.J6n));
    if (!he && !dt) ie = (0, import_chunk_bzyb60p0.Me)({ content: `${import_chunk_0ha8wex8.J6n} You MUST call the ${import_chunk_2b1wcpvk.ga} tool to complete this request. Call this tool now.`, isMeta: true }), yield ie;
  } catch (G) {
    (0, import_chunk_w578pjby.t)(`StructuredOutput enforcement failed: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "error" });
  }
  let se = null;
  if (h.options.requiresHandback && (0, import_chunk_865at33z.Pr)(k) !== "auxiliary" && h.agentId !== void 0) try {
    let G = h.agentId, ye = h.taskRegistry.get(G), he = (0, import_chunk_4dnx2vkh.B0e)(ye, G), dt = (0, import_chunk_4dnx2vkh.hV)(ye)?.handbackBounces ?? 0;
    (0, import_chunk_bzyb60p0.cfe)(G, h.taskRegistry);
    let Ge = (0, import_chunk_bzyb60p0.Oyt)(G, h.taskRegistry);
    if (he !== void 0 && he.length === 0 && !Ge && dt < import_chunk_4dnx2vkh.$gl) h.taskRegistry.update(G, (no) => ({ ...no, handbackBounces: dt + 1 })), se = (0, import_chunk_bzyb60p0.Me)({ content: `${import_chunk_4dnx2vkh.Fgl} Your report has not been delivered. Call ${import_chunk_060xwhvh.mu}({message: <your full report>}) now; the call ends your run.`, isMeta: true }), yield se;
  } catch (G) {
    (0, import_chunk_w578pjby.t)(`Subagent hand-back enforcement failed: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "error" });
  }
  let le = null;
  if (k === "sdk" && !h.agentId && Ti() && h.options.tools.some((G) => (0, import_chunk_4vsz8a99.gt)(G, import_chunk_cee6q0wn.Yd))) try {
    let G = jm(I.messages);
    switch (G.kind) {
      case "skip":
        break;
      case "remind":
        (0, import_chunk_cqa9hrgx.l)("query_unsent_file_reminder", "reminded"), le = (0, import_chunk_bzyb60p0.Me)({ content: G.text, isMeta: true }), yield le;
        break;
      case "reminded":
        if (G.sent) (0, import_chunk_cqa9hrgx.u)("query_unsent_file_reminder", { message_length: G.textLength });
        else (0, import_chunk_cqa9hrgx.l)("query_unsent_file_reminder", "not_sent", { message_length: G.textLength });
        break;
    }
  } catch (G) {
    (0, import_chunk_w578pjby.t)(`Unsent file reminder check failed: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "error" });
  }
  if ((0, import_chunk_865at33z.Pr)(k) !== "auxiliary" && (0, import_chunk_bzyb60p0.k_i)()) try {
    let G = (0, import_chunk_bzyb60p0.N9a)(e.slice((0, import_chunk_bzyb60p0.L9a)(e)), o, h.agentId ?? null, h.options.tools);
    if (G === void 0) (0, import_chunk_cqa9hrgx.l)("skill_inline_command_handoff", "too_much_to_check");
    else if (G.length > 0) (0, import_chunk_cqa9hrgx.m)("skill_inline_command_handoff", "not_run");
  } catch (G) {
    (0, import_chunk_w578pjby.t)(`Skill inline command turn-end check failed: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "error" });
  }
  let ae = [H, Q, z, ie, se, le].filter((G) => G !== null), oe = false, Ae, qe = void 0, rt = [...ae], Ue = false, Oe = [], He = false, We = h.agentId ? void 0 : h.getAppState().activeGoal, J, ve;
  try {
    let G = h.getAppState(), ye = (0, import_chunk_bz1f2qnq.Z)(h).mode, he = G.activeGoal, dt = !h.agentId;
    if (dt) BGr(h.session.sessionScratch);
    if (he && dt) {
      let Pe = op(h.taskRegistry.all());
      if (Pe.length > 0) {
        if (Ae = (0, import_chunk_ch6321bk.TYe)(h.sessionHooksRegistry, (0, import_chunk_f9x2f6cx.W)()).find((Qe) => (0, import_chunk_ch6321bk.dLe)(he, Qe)), Ae) {
          h.sessionHooksRegistry.remove((0, import_chunk_f9x2f6cx.W)(), "Stop", Ae), (0, import_chunk_w578pjby.t)("[goal] evaluation deferred \u2014 background work still running"), J = "deferred", ve = { activeAgents: (0, import_chunk_4smdap7r.U)(Pe, import_chunk_ed372ykp.nrn), activeShells: (0, import_chunk_4smdap7r.U)(Pe, import_chunk_ed372ykp.uls) };
          let Qe;
          try {
            let nt = bu(he, Pe, Date.now());
            qe = nt.nextGoal, Qe = nt.checkinText;
          } catch (nt) {
            (0, import_chunk_k449cc64.i)(nt), qe = he, (0, import_chunk_cqa9hrgx.m)("goal_checkin", "plan_failed");
          }
          if (qe !== void 0 && qe !== he) yield { type: "active_goal", value: qe };
          if (Qe !== void 0) {
            let nt = (0, import_chunk_bzyb60p0.Me)({ content: Qe, isMeta: true });
            rt.push(nt), ae.push(nt), yield nt;
          }
        }
      } else if (he.deferredSince !== void 0) {
        let { deferredSince: Qe, checkinCount: nt, lastDeferralPassAt: Ze, ...Ht } = he;
        yield { type: "active_goal", value: Ht };
      }
    }
    let Ge = (Pe) => {
      if (!Pe) return;
      return (h.sessionHooksRegistry.get((0, import_chunk_f9x2f6cx.W)(), "Stop").get("Stop") ?? []).flatMap((nt) => nt.hooks).some((nt) => (0, import_chunk_jhdsf4g3.Lgr)(nt, Pe)) ? Pe : void 0;
    }, no = (0, import_chunk_bzyb60p0.FBe)(ye, h.abortController.signal, void 0, R, h.agentId, h, I.messages, h.agentType, "blockable_turn_end"), lo = "", Ft = 0, Bo = "", jo = false, _e = [], te = [], kt = [], Jt = [], bo = false;
    for await (let Pe of no) {
      if (Pe.message) {
        if (yield Pe.message, xl(Pe.message) && hi()) rt.push(Pe.message);
        if (Pe.message.type === "progress" && Pe.message.toolUseID) {
          lo = Pe.message.toolUseID, Ft++;
          let Qe = Pe.message.data;
          if (Qe.command) Jt.push({ command: Qe.command, promptText: Qe.promptText });
        }
        if (Pe.message.type === "attachment") {
          let Qe = Pe.message.attachment;
          if ("hookEvent" in Qe && (Qe.hookEvent === "Stop" || Qe.hookEvent === "SubagentStop")) {
            if ((0, import_chunk_ch6321bk.dLe)(We, Pe.hook) && (Qe.type === "hook_non_blocking_error" || Qe.type === "hook_error_during_execution")) J = "error", (0, import_chunk_cqa9hrgx.l)("goal_met", "evaluator_error");
            if (Qe.type === "hook_non_blocking_error") te.push(_e.length), _e.push(Qe.stderr || `Exit code ${Qe.exitCode}`), jo = true;
            else if (Qe.type === "hook_error_during_execution") te.push(_e.length), _e.push(Qe.content), jo = true;
            else if (Qe.type === "hook_success") {
              if (Qe.stdout && Qe.stdout.trim() || Qe.stderr && Qe.stderr.trim()) jo = true;
              let nt = Ge(Pe.hook);
              if (Qe.hookEvent === "Stop" && nt) {
                h.sessionHooksRegistry.remove((0, import_chunk_f9x2f6cx.W)(), "Stop", nt);
                let Ze = h.getAppState().activeGoal;
                if ((0, import_chunk_ch6321bk.dLe)(Ze, nt)) {
                  let Ht = Ze.iterations + 1, ro = Date.now() - Ze.setAt, Zo = (0, import_chunk_f9x2f6cx.rw)() - Ze.tokensAtStart;
                  if (yield { type: "active_goal", value: void 0 }, J = Pe.impossible ? "impossible" : "met", Pe.impossible) yield (0, import_chunk_bzyb60p0.Ut)({ type: "goal_status", met: false, failed: true, condition: nt.prompt, reason: Pe.stopReason, iterations: Ht, durationMs: ro, tokens: Zo }), (0, import_chunk_y53wbr8a.a)("tengu_goal_failed", { promptLength: nt.prompt.length, reasonLength: Pe.stopReason?.length ?? 0, iterations: Ht, durationMs: ro, tokens: Zo, origin: (0, import_chunk_78g0060s.fe)(Ze.origin) }), (0, import_chunk_cqa9hrgx.m)("goal_met", "impossible");
                  else yield (0, import_chunk_bzyb60p0.Ut)({ type: "goal_status", met: true, condition: nt.prompt, reason: Pe.stopReason, iterations: Ht, durationMs: ro, tokens: Zo }), (0, import_chunk_y53wbr8a.a)("tengu_goal_achieved", { promptLength: nt.prompt.length, iterations: Ht, durationMs: ro, tokens: Zo, origin: (0, import_chunk_78g0060s.fe)(Ze.origin) }), (0, import_chunk_cqa9hrgx.u)("goal_met"), h.sessionState?.notifyMetadataChanged({ goal: { condition: nt.prompt, set_at: Ze.setAt, iterations: Ht, last_reason: null, met: true } });
                }
              }
            }
            if ("durationMs" in Qe && "command" in Qe) {
              let nt = Jt.find((Ze) => Ze.command === Qe.command && Ze.durationMs === void 0);
              if (nt) nt.durationMs = Qe.durationMs;
            }
          }
        }
      }
      if (Pe.timedOut) {
        if ((0, import_chunk_ch6321bk.dLe)(We, Pe.hook)) J = "cancelled", (0, import_chunk_cqa9hrgx.l)("goal_met", "evaluator_timeout");
        continue;
      }
      if (Pe.blockingError) {
        let Qe = h.getAppState().activeGoal;
        if ((0, import_chunk_ch6321bk.dLe)(Qe, Pe.hook) && Qe.paused) {
          J = "not_met", yield { type: "active_goal", value: { ...Qe, iterations: Qe.iterations + 1, lastReason: Pe.stopReason } };
          continue;
        }
        let nt = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.IMn)(Pe.blockingError), isMeta: true });
        rt.push(nt), yield nt, jo = true;
        let Ze = Ge(Pe.hook), Ht = h.getAppState().activeGoal;
        if (Ze && (0, import_chunk_ch6321bk.dLe)(Ht, Ze)) J = "not_met", yield { type: "active_goal", value: { ...Ht, iterations: Ht.iterations + 1, lastReason: Pe.stopReason } }, yield (0, import_chunk_bzyb60p0.Ut)({ type: "goal_status", met: false, condition: Ze.prompt, reason: Pe.stopReason });
        else _e.push(Pe.blockingError.blockingError), bo = true;
      }
      if (Pe.additionalContexts && Pe.additionalContexts.length > 0) {
        let Qe = h.agentId ? "SubagentStop" : "Stop", nt = (0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: Pe.additionalContexts, hookName: Qe, toolUseID: lo, hookEvent: Qe });
        if (!(0, import_chunk_dwxd9se5.jBt)(nt)) rt.push(nt);
        yield nt, jo = true, kt.push(...Pe.additionalContexts);
      }
      if (Pe.preventContinuation) Ue = true, Bo = Pe.stopReason || "Stop hook prevented continuation", yield (0, import_chunk_bzyb60p0.Ut)({ type: "hook_stopped_continuation", message: Bo, hookName: "Stop", toolUseID: lo, hookEvent: "Stop" });
      if (h.abortController.signal.aborted) {
        if ((0, import_chunk_y53wbr8a.a)("tengu_pre_stop_hooks_cancelled", { queryChainId: (0, import_chunk_49zxha55.Ce)(h.queryTracking?.chainId), queryDepth: h.queryTracking?.depth }), !(0, import_chunk_cbnm4p23.jPe)(h.abortController.signal.reason)) yield (0, import_chunk_bzyb60p0.hR)({ toolUse: false, interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(h.abortController.signal) });
        return { blockingErrors: [], preventContinuation: true };
      }
    }
    if (Ft > 0) {
      if (yield (0, import_chunk_bzyb60p0.b9a)(Ft, Jt, _e, Ue, Bo, jo, "suggestion", lo, void 0, void 0, kt, te), _e.length > 0) {
        if (!R) yield rp();
      }
    }
    if (Ue) return yield* Fo(h, I.messages, { stopHookActive: R }), { blockingErrors: [], preventContinuation: true };
    if (rt.length > 0) {
      if (bo) (0, import_chunk_bzyb60p0.Efi)({ pushback: { hookEvent: h.agentId ? "subagent_stop" : "stop" }, permissionMode: ye, agentContext: h.agentContext });
      return { blockingErrors: rt, preventContinuation: false, goalPass: J };
    }
    let Mo = Km(h.agentContext, h.taskRegistry, h.agentId);
    if (Mo !== void 0 && h.agentId === Mo.agentId) {
      let { teammateName: Pe, teamName: Qe } = Mo, nt, Ze = "", Ht = (0, import_chunk_0dht3xy7.rb)(), Zo = (await (0, import_chunk_0dht3xy7.HP)(Ht, h.storageV5)).filter((Nt) => Nt.status === "in_progress" && Nt.owner === Pe);
      for (let Nt of Zo) {
        (0, import_chunk_bzyb60p0.T3e)(h.agentId);
        let rn = (0, import_chunk_bzyb60p0.xMn)(Nt.id, Nt.subject, Nt.description, Pe, Qe, ye, h.abortController.signal, void 0, h);
        for await (let mo of rn) {
          if (mo.message) {
            if (mo.message.type === "progress" && mo.message.toolUseID) Ze = mo.message.toolUseID;
            if (yield mo.message, xl(mo.message) && hi()) Oe.push(mo.message);
          }
          if (mo.blockingError) {
            let xo = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.xur)(mo.blockingError), isMeta: true });
            Oe.push(xo), yield xo;
          }
          if (mo.preventContinuation) He = true, nt = mo.stopReason || "TaskCompleted hook prevented continuation", yield (0, import_chunk_bzyb60p0.Ut)({ type: "hook_stopped_continuation", message: nt, hookName: "TaskCompleted", toolUseID: Ze, hookEvent: "TaskCompleted" });
          if (h.abortController.signal.aborted) return { blockingErrors: [], preventContinuation: true };
        }
      }
      let on = (0, import_chunk_bzyb60p0.Grs)(Pe, Qe, ye, h.abortController.signal, void 0, h);
      for await (let Nt of on) {
        if (Nt.message) {
          if (Nt.message.type === "progress" && Nt.message.toolUseID) Ze = Nt.message.toolUseID;
          if (yield Nt.message, xl(Nt.message) && hi()) Oe.push(Nt.message);
        }
        if (Nt.blockingError) {
          let rn = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.vgi)(Nt.blockingError), isMeta: true });
          Oe.push(rn), yield rn;
        }
        if (Nt.preventContinuation) He = true, nt = Nt.stopReason || "TeammateIdle hook prevented continuation", yield (0, import_chunk_bzyb60p0.Ut)({ type: "hook_stopped_continuation", message: nt, hookName: "TeammateIdle", toolUseID: Ze, hookEvent: "TeammateIdle" });
        if (h.abortController.signal.aborted) return { blockingErrors: [], preventContinuation: true };
      }
      if (He) return yield* Fo(h, I.messages, { stopHookActive: R }), { blockingErrors: [], preventContinuation: true };
      if (Oe.length > 0) return { blockingErrors: Oe, preventContinuation: false, goalPass: J };
    }
    return yield* Fo(h, I.messages, { stopHookActive: R }), { blockingErrors: [], preventContinuation: false, goalPass: J };
  } catch (G) {
    if ((0, import_chunk_jv7av99m.Fe)(G) && (h.abortController.signal.aborted || G instanceof import_chunk_jv7av99m.wp)) {
      if ((0, import_chunk_w578pjby.t)("Stop hook cancelled (abort or stream teardown)"), !h.abortController.signal.aborted) {
        let he = [...rt, ...Oe], dt = Ue || He;
        if (dt || he.length === 0) yield* Fo(h, I.messages, { stopHookActive: R });
        return { blockingErrors: he, preventContinuation: dt };
      }
      return { blockingErrors: [], preventContinuation: false };
    }
    oe = true;
    let ye = Date.now() - P;
    if ((0, import_chunk_y53wbr8a.a)("tengu_stop_hook_error", { duration: ye, queryChainId: (0, import_chunk_49zxha55.Ce)(h.queryTracking?.chainId), queryDepth: h.queryTracking?.depth }), yield (0, import_chunk_bzyb60p0.Pt)(`Stop hook failed: ${(0, import_chunk_jv7av99m.d)(G)}`, "warning"), ae.length === 0) yield* Fo(h, I.messages, { stopHookActive: R });
    return { blockingErrors: ae, preventContinuation: false, goalPass: We && (J === void 0 || J === "not_met") ? "error" : J };
  } finally {
    if (Ae && h.getAppState().activeGoal?.setAt === We?.setAt) h.sessionHooksRegistry.add((0, import_chunk_f9x2f6cx.W)(), "Stop", "", Ae);
    if (qe !== void 0 && !h.options.isNonInteractiveSession) {
      let { getAppState: G, setAppState: ye, taskRegistry: he, session: dt, messageQueue: Ge } = h;
      try {
        qr({ goal: qe, now: Date.now(), sessionScratch: dt.sessionScratch, getAppState: G, setAppState: ye, getDeferringTasks: () => op(he.all()), ...Dl(Ge) });
      } catch (no) {
        (0, import_chunk_k449cc64.i)(no);
        try {
          (0, import_chunk_cqa9hrgx.m)("goal_checkin", "arm_failed");
        } catch (lo) {
          (0, import_chunk_k449cc64.i)(lo);
        }
      }
    }
    if (oe) (0, import_chunk_cqa9hrgx.m)("hook_stop_handler", "hook_stop_handler_failed");
    else (0, import_chunk_cqa9hrgx.u)("hook_stop_handler");
    if (We) {
      let G = h.abortController.signal.aborted, ye = J === "met" || J === "not_met" || J === "impossible";
      (0, import_chunk_y53wbr8a.a)("tengu_goal_evaluated", { outcome: (0, import_chunk_78g0060s.f)(J ?? (oe ? "error" : G ? "cancelled" : "absent")), durationMs: Date.now() - P, iterations: We.iterations + (ye ? 1 : 0), parentAborted: G, origin: (0, import_chunk_78g0060s.fe)(We.origin), ...ve });
    }
  }
}
async function* Fo(e, o, { stopHookActive: r }) {
  try {
    let g = (0, import_chunk_bzyb60p0.FBe)((0, import_chunk_bz1f2qnq.Z)(e).mode, e.abortController.signal, void 0, r, e.agentId, e, o, e.agentType, "turn_end_reactions");
    for await (let y of g) {
      if (y.message) yield y.message;
      if (y.blockingError || y.preventContinuation) (0, import_chunk_w578pjby.t)(`[stop-hooks] Turn-end reaction hook block discarded: ${y.blockingError ? "block" : "preventContinuation"}`);
    }
  } catch (g) {
    if ((0, import_chunk_jv7av99m.Fe)(g) && (e.abortController.signal.aborted || g instanceof import_chunk_jv7av99m.wp)) {
      (0, import_chunk_w578pjby.t)("[stop-hooks] Turn-end reactions pass cancelled (abort or stream teardown)");
      return;
    }
    (0, import_chunk_w578pjby.t)("[stop-hooks] Turn-end reactions pass failed", { level: "error" }), (0, import_chunk_k449cc64.i)(g);
  }
}
function op(e) {
  return Object.values(e).filter((o) => !(0, import_chunk_z6hn62tj.Kf)(o) && !(o.type === "local_agent" && o.agentType === "main-session") && ((0, import_chunk_ed372ykp.nrn)(o) || (0, import_chunk_ed372ykp.uls)(o)));
}
function Dl(e) {
  return { deliver: (o) => {
    (0, import_chunk_bzyb60p0.jlr)({ ...o, queue: e, origin: import_chunk_tjdnrbvx.Ckl });
  }, hasQueued: (o) => e.peek(o) !== void 0 };
}
function cp(e, o) {
  return { kind: "policy", policy: e, ...e.skipWhileWorkerOut === true && { coordinatorMode: (0, import_chunk_c4zg4pwc.dl)(), workerStillRunning: (0, import_chunk_ed372ykp.Abt)(o.taskRegistry.all()) }, ...(0, import_chunk_w50zedgp.$h)(o.options.tools) ? { replMode: true } : {} };
}
var nS = "stop-hook-block-cap";
function pp(e) {
  try {
    (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "notification", key: nS, text: e, priority: "high", color: "warning" });
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
var rS = { auth: { label: "authentication failed", errorCode: "cleared_auth" }, disk_full: { label: "disk full", errorCode: "cleared_disk_full" }, verification_required: { label: "organization verification required", errorCode: "cleared_verification_required" }, billing: { label: "credit balance too low", errorCode: "cleared_billing" }, context_limit: { label: "context limit reached", errorCode: "cleared_context_limit" }, model_unavailable: { label: "model unavailable", errorCode: "cleared_model_unavailable" } }, sS = 80;
function* fp(e, o, r) {
  let { label: g, errorCode: y } = rS[r], { sessionHooksRegistry: h } = o;
  (0, import_chunk_ch6321bk.TYe)(h, (0, import_chunk_f9x2f6cx.W)()).filter((k) => (0, import_chunk_ch6321bk.dLe)(e, k)).forEach((k) => h.remove((0, import_chunk_f9x2f6cx.W)(), "Stop", k)), (0, import_chunk_ch6321bk.$Re)(e, r === "context_limit" ? "context_limit" : "api_error"), (0, import_chunk_cqa9hrgx.m)("goal_met", y), yield { type: "active_goal", value: void 0 }, yield (0, import_chunk_ch6321bk.Kbs)(true, e.condition), yield (0, import_chunk_yta0vzjp.lp)(`Goal cleared after an unrecoverable error (${g}): "${(0, import_chunk_f64qna2j.Us)(e.condition, sS, true)}". Run /goal again to continue.`, "warning");
}
var Nl = [6e4, 3e5, 9e5], iS = 0.2, Ll = Nl.length, aS = { api_unavailable: "the API was unavailable or the connection dropped", unclassified: "the API returned an unexpected response", output_limit: "the response hit the output token limit", cloud_credentials: "cloud credentials did not load", host_auth: "sign-in was being refreshed", image: "an image could not be sent", unreadable_tool_call: "Claude's tool call could not be read", goal_check: "the goal check could not complete" }, lS = { request_rejected: "Goal paused \xB7 the API rejected the last request \xB7 send a message to continue, or run /goal clear", turn_error: "Goal paused \xB7 the last turn could not finish \xB7 send a message to continue", hook_stopped: "Goal paused \xB7 a hook ended the turn \xB7 send a message to continue", goal_check_timeout: "Goal paused \xB7 the goal check timed out \xB7 send a message to continue", goal_check_capped: "Goal paused \xB7 goal checks kept finding it unmet this turn \xB7 send a message to continue", rate_limited: "Goal paused \xB7 the request was rate limited \xB7 send a message to retry", daily_cap: "Goal paused \xB7 usage is paused for your organization", usage_limit: "Goal paused \xB7 usage limit reached \xB7 send a message after it resets to continue", usage_limit_waiting: "Goal paused \xB7 usage limit reached \xB7 continues automatically when it resets" };
function* gp(e, o, r, g, y) {
  try {
    if (e.agentId || (0, import_chunk_865at33z.Pr)(r) !== "main") return;
    let { sessionScratch: h } = e.session, k = o().activeGoal;
    if (k === void 0 || e.abortController.signal.aborted) {
      Hr(h);
      return;
    }
    let R = dS(g);
    if (R.kind === "none") {
      if (g.reason !== "completed" || g.goalPass !== void 0) Hr(h);
      return;
    }
    if (R.kind === "stop") {
      if (Hr(h), !(0, import_chunk_865at33z.b)("tengu_quartz_pipit", true)) return;
      Ss(g, R, "cleared", 0), yield* fp(k, e, R.cause);
      return;
    }
    if (k.paused || !Ua() || e.options.isNonInteractiveSession) {
      Hr(h);
      return;
    }
    let w = h.goalInterruptionStreak(), E = w?.goalSetAt === k.setAt, O = E ? w.retries : 0, P = E ? w.announced : void 0;
    if (R.kind === "retry") {
      let Q = y(e.messageQueue);
      if (E && (h.pendingGoalReprompt() !== void 0 || Q.hasQueued(import_chunk_tjdnrbvx.bko))) return;
      let z = aS[R.cause];
      if (O >= Ll) {
        if (P === "gave_up") return;
        h.replaceGoalInterruptionStreak({ goalSetAt: k.setAt, retries: O, announced: "gave_up" }), Ss(g, R, "gave_up", O), (0, import_chunk_cqa9hrgx.l)("goal_interruption", "gave_up"), yield (0, import_chunk_yta0vzjp.lp)(`Goal paused after ${Ll} automatic retries \xB7 ${z} \xB7 send a message to continue`, "warning");
        return;
      }
      h.replaceGoalInterruptionStreak({ goalSetAt: k.setAt, retries: O + 1, announced: void 0 });
      let X = Nl[O] ?? Nl[0];
      Mu({ goal: k, cause: z, sessionScratch: h, getAppState: o, ...Q }, Math.round(X * (1 + Math.random() * iS))), Ss(g, R, "reprompt_armed", O + 1), yield (0, import_chunk_yta0vzjp.lp)(`Goal still active \xB7 ${z} \xB7 retrying in ${Math.round(X / 6e4)} min (${O + 1}/${Ll}) \xB7 send a message to retry now`, "notice");
      return;
    }
    vJn(h);
    let I = R.cause === "usage_limit" && import_chunk_bzyb60p0.Qnt.of(e.session.host).hasIntent(), H = I ? "usage_limit_waiting" : R.cause;
    if (P === H) return;
    if (h.replaceGoalInterruptionStreak({ goalSetAt: k.setAt, retries: O, announced: H }), I) Ss(g, R, "usage_limit_wait_owns", O);
    else Ss(g, R, "paused", O), (0, import_chunk_cqa9hrgx.l)("goal_interruption", "paused");
    yield (0, import_chunk_yta0vzjp.lp)(lS[H], "notice");
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
  }
}
function dS(e) {
  switch (e.reason) {
    case "completed":
      return uS(e.goalPass);
    case "aborted_streaming":
    case "aborted_tools":
    case "max_turns":
    case "tool_deferred":
    case "background_requested":
      return { kind: "none" };
    case "stop_hook_prevented":
    case "hook_stopped":
      return { kind: "pause", cause: "hook_stopped" };
    case "blocking_limit":
    case "prompt_too_long":
    case "rapid_refill_breaker":
      return { kind: "stop", cause: "context_limit" };
    case "image_error":
      return { kind: "retry", cause: "image" };
    case "model_error":
      return { kind: "pause", cause: "turn_error" };
    case "malformed_tool_use_exhausted":
      return { kind: "retry", cause: "unreadable_tool_call" };
    case "api_error":
      if (e.errorKind === "rate_limit") {
        if (e.quotaLimits?.dailyCapPaused === true) return { kind: "pause", cause: "daily_cap" };
        return e.quotaLimits !== void 0 && (0, import_chunk_bzyb60p0.wx)(e.quotaLimits) ? { kind: "pause", cause: "usage_limit" } : { kind: "pause", cause: "rate_limited" };
      }
      if (e.errorKind === "max_output_tokens") return { kind: "retry", cause: "output_limit" };
      if (e.errorKind === "cloud_credential_error") return { kind: "retry", cause: "cloud_credentials" };
      if (e.isTransient) return { kind: "retry", cause: "api_unavailable" };
      switch (e.oauthRefreshDiskFull ? "authentication_failed" : e.errorKind) {
        case "overloaded":
        case "server_error":
          return { kind: "retry", cause: "api_unavailable" };
        case "unknown":
        case void 0:
          return { kind: "retry", cause: "unclassified" };
        case "invalid_request":
          return { kind: "pause", cause: "request_rejected" };
        case "authentication_failed":
        case "oauth_org_not_allowed":
          return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (0, import_chunk_3t7ve0wy.Ol)() || (0, import_chunk_f9x2f6cx.Bge)() !== null || (0, import_chunk_7xxwg4th.yDe)() ? { kind: "retry", cause: "host_auth" } : { kind: "stop", cause: e.oauthRefreshDiskFull ? "disk_full" : "auth" };
        case "account_on_hold":
          return { kind: "stop", cause: "auth" };
        case "verification_required":
          return { kind: "stop", cause: "verification_required" };
        case "billing_error":
          return { kind: "stop", cause: "billing" };
        case "model_not_found":
          return { kind: "stop", cause: "model_unavailable" };
      }
  }
}
function uS(e) {
  switch (e) {
    case "error":
      return { kind: "retry", cause: "goal_check" };
    case "cancelled":
      return { kind: "pause", cause: "goal_check_timeout" };
    case "not_met":
      return { kind: "pause", cause: "goal_check_capped" };
    case "met":
    case "impossible":
    case "deferred":
    case void 0:
      return { kind: "none" };
  }
}
function Ss(e, o, r, g) {
  (0, import_chunk_y53wbr8a.a)("tengu_goal_interruption", { interruption: (0, import_chunk_78g0060s.f)(o.kind), action: (0, import_chunk_78g0060s.f)(r), cause: (0, import_chunk_78g0060s.f)(o.cause), terminal_reason: (0, import_chunk_78g0060s.f)(e.reason), error_kind: (0, import_chunk_78g0060s.fe)(e.reason === "api_error" ? e.errorKind : void 0), goal_pass: (0, import_chunk_78g0060s.fe)(e.reason === "completed" ? e.goalPass : void 0), retries: g });
}
function fn(e, o, r, g, y = false) {
  try {
    let h = (0, import_chunk_bz1f2qnq.Z)(r);
    return e === o || !(0, import_chunk_xfj2cwfv.Jr)(h.mode, h.servedCall) || (0, import_chunk_865at33z.GGn)({ model: e, fastMode: g === true || y && (0, import_chunk_865at33z.jU)(e, g), disableFastMode: (0, import_chunk_hgqhjaz5.VGr)() }).supported;
  } catch (h) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(h)), false;
  }
}
function yp(e, o, r, g, y = false) {
  return e.serverLane?.mode !== "explicit" || fn(e.serverLane.model, o, r, g, y) ? e : { ...e, serverLane: void 0 };
}
function _p(e, o, r) {
  return (g) => {
    let y = e.substituteFor(g);
    return y === null || fn(y ?? g, e.failedModel, o, r) ? y : e.failedModel;
  };
}
function Sp({ chain: e, from: o, failedModel: r, reason: g, substituteFor: y }) {
  let h = o, k = false, R = false;
  while (h < e.length) {
    let E = e[h], O = y(E), P = O !== void 0;
    R ||= P;
    let I = P ? O : E;
    if (I === r) k = true;
    else if (I !== null) return { chainIndex: h, target: I, substituted: P, inPlace: false, anySubstituted: R };
    h++;
  }
  let w = k && (g === "overloaded" || g === "server_error");
  return { chainIndex: h, target: w ? r : null, substituted: false, inPlace: w, anySubstituted: R };
}
function kp(e, o, r) {
  let g = Sp({ ...r, substituteFor: _p(r, e, o) });
  return { ...g, anySubstituted: r.chain.slice(r.from, g.chainIndex + 1).some((y) => r.substituteFor(y) !== void 0) };
}
async function bp(e, o, r, g) {
  let y = (0, import_chunk_865at33z.N9)();
  if (y === null || !(0, import_chunk_865at33z.b)("tengu_jazzy_corbato", true)) return;
  let h = (0, import_chunk_865at33z.yw)(e), k = await (0, import_chunk_bzyb60p0.IPn)(r, g), R = (0, import_chunk_bzyb60p0.SZt)(k), w = (0, import_chunk_gq1dr8pm.n1)() ? ZVs(h, R, k) : void 0;
  return { ...w && !(0, import_chunk_3t7ve0wy.Sa)() && mS(w, y), source: "usage_credits_model_consent", header: "Credits", question: o ? "You've reached your Fable limit for this week. Switch models?" : `${h} now runs on usage credits. Switch models?`, choices: [{ value: "switch_default", label: `Switch to ${(0, import_chunk_865at33z.yi)(y)}`, description: "For this session" }, R ? { value: "consent", label: "Continue with usage credits", description: `Stay on ${h} for this session` } : { value: "cancelled", label: "Not now", description: !w ? cS(h, k) : w.seat === "owner" ? `${w.body} ${pS}` : w.body }] };
}
function cS(e, { overagesEnabled: o }) {
  if (!(0, import_chunk_gq1dr8pm.sb)()) return `${e} needs usage credits, which your admin manages`;
  let r = (0, import_chunk_865at33z.or)();
  if (r === "team" || r === "enterprise") return `${e} needs usage credits, which ${o ? "your organization has used up" : "are off for your organization"}`;
  if (!o) return `${e} needs usage credits. See Usage in Settings`;
  return v2o() ? "You've hit your monthly spend limit. See Usage in Settings" : "You're out of usage credits. See Usage in Settings";
}
function v2o() {
  let e = (0, import_chunk_865at33z.ge)().cachedExtraUsageDisabledReason;
  return e !== "out_of_credits" && (0, import_chunk_865at33z.Tzt)(e ?? null);
}
function ZVs(e, o, { overagesEnabled: r }) {
  let g = o ? "on" : !r ? "off" : v2o() ? "capped" : "empty", y = (0, import_chunk_865at33z.or)() !== "team" ? "owner" : (0, import_chunk_gq1dr8pm.sb)() ? "admin" : "member";
  return { title: `${(0, import_chunk_865at33z.dde)(e)} now runs on usage credits`, body: yS(e, y, g), state: g, seat: y };
}
var Cp = "credits_ready";
function mS(e, o) {
  let r = e.state === "on";
  return { appData: { usage_credits: { ...e, fallback_model_id: (0, import_chunk_zmb62hr5.Yt)(o), actions: ["switch", r ? "spend" : "stop"], ...!r && { ready_answer: Cp } } }, unlistedChoices: [{ value: "switch_default", label: "switch_model" }, ...r ? [] : [{ value: "consent", label: Cp }]] };
}
var pS = "See Settings\xA0\u2192\xA0Usage.", eKs = " You\u2019ve hit your monthly spend limit.", gS = { owner: { empty: " You\u2019re out of usage credits.", capped: eKs }, admin: { empty: " Your organization is out of usage credits." } };
function yS(e, o, r) {
  let g = o === "owner" ? "plan" : "seat";
  if (r === "on") return (0, import_chunk_865at33z.hKi)(e, (0, import_chunk_gq1dr8pm.Rmo)(), true, g);
  return o === "member" ? `${e} requires usage credits. Switch models to continue.` : `${(0, import_chunk_865at33z.hKi)(e, (0, import_chunk_gq1dr8pm.Rmo)(), false, g)}${gS[o][r] ?? ""}`;
}
async function jl(e, o, r, g, y) {
  let h = r && (0, import_chunk_gq1dr8pm.n1)(), { stoppedUnder: k } = o.session.usageCreditsOnlyModelConsentSlots, R = (ie) => (k.set(Bl(e), (0, import_chunk_f9x2f6cx.M1e)()?.uuid), vp(e, true, y, ie)), w = async () => (0, import_chunk_bzyb60p0.SZt)(await (0, import_chunk_bzyb60p0.IPn)(o.credentials, o.storageV5)), E = (0, import_chunk_f9x2f6cx.M1e)()?.uuid;
  if (h && E && k.get(Bl(e)) === E) return R();
  if (h && (0, import_chunk_gq1dr8pm.PIi)(e)) {
    if (await CS(o), !(0, import_chunk_gq1dr8pm.C7)(e)) return { kind: "proceed" };
  }
  let O = "cancelled", P = false, I = false, H = false, Q = false, z = null, X = !(0, import_chunk_gq1dr8pm.Sje)(e) && (0, import_chunk_865at33z.OGe)(e), re = (0, import_chunk_bzyb60p0.Y6a)({ requestDialog: o.requestDialog, isMainThread: r }) && !o.abortController.signal.aborted;
  if (re && o.requestDialog) {
    let ie = o.abortController.signal, se = h && ((0, import_chunk_f9x2f6cx.TL)() ? !(0, import_chunk_f9x2f6cx.Od)() : !(0, import_chunk_865at33z.Qt)() && (0, import_chunk_f9x2f6cx.np)() === void 0), le = (0, import_chunk_gq1dr8pm.cit)(), ae = !se && !(0, import_chunk_f9x2f6cx.TL)() && (0, import_chunk_865at33z.Na)(), oe = new AbortController(), Ae = () => oe.abort();
    ie.addEventListener("abort", Ae, { once: true });
    let qe = false, rt = Date.now(), Ue = ae && !(0, import_chunk_865at33z.Qt)() ? (0, import_chunk_f9x2f6cx.jK)(() => {
      if (Date.now() - rt > 1e3) qe = true;
    }) : () => {
    }, Oe = (ye) => ye.uuid ?? ye, He = new Set(o.messageQueue.getCommandQueueSnapshot().filter(import_chunk_tjdnrbvx._9).map(Oe)), We = () => {
      if ((0, import_chunk_f9x2f6cx.VEe)(), !qe && o.messageQueue.getCommandQueueSnapshot().some((ye) => (0, import_chunk_tjdnrbvx._9)(ye) && !He.has(Oe(ye)))) I = true, oe.abort();
    }, J = ae ? o.messageQueue.subscribe(We) : () => {
    }, ve = ae && le > 0 ? setTimeout((ye) => {
      if ((0, import_chunk_f9x2f6cx.VEe)(), !qe) ye.abort();
    }, le, oe) : void 0, G = false;
    try {
      let ye = h && (0, import_chunk_f9x2f6cx.TL)() ? await w() : void 0;
      z = ye === false && (0, import_chunk_bzyb60p0.q6a)() ? await (0, import_chunk_cr2vz9cc.$qr)(o.credentials) : null, O = await o.requestDialog(import_chunk_bzyb60p0.trt, { overagesEnabled: ye ?? ((0, import_chunk_gq1dr8pm.lkt)() || (0, import_chunk_f9x2f6cx.TL)() && await (0, import_chunk_bzyb60p0.Y4e)(o.credentials, o.storageV5) === "enabled"), modelName: (0, import_chunk_865at33z.yw)(e), model: e, ...h && { leftOutOf: (0, import_chunk_bzyb60p0.K6a)(), endedOn: (0, import_chunk_gq1dr8pm.Rmo)() }, ...z && { member: true, request: z.row === "sentence" ? { greyed: z.text } : {} } }, { signal: oe.signal, ...se && { parkTimeoutMs: 0, closesOnNewPrompt: true }, alsoHideWhile: (0, import_chunk_bzyb60p0.cZr)() ? ["draft"] : [], asRemoteQuestion: async () => {
        let he = await bp(e, X, o.credentials, o.storageV5);
        return Q = he !== void 0, he;
      }, onSettledUnanswered: (he) => {
        G = true, I ||= he === "moved_on";
      }, onAnsweredOverBridge: () => {
        H = true;
      } });
    } finally {
      clearTimeout(ve), Ue(), J(), ie.removeEventListener("abort", Ae);
    }
    if (O === "request_admin" && (z === null || z.row === "sentence" || H)) O = "cancelled";
    P = O === "cancelled" && (oe.signal.aborted || G || H) && !ie.aborted;
  }
  if (O === "request_admin") {
    let ie = (0, import_chunk_5appeerh.qt)((0, import_chunk_cr2vz9cc.$$e)(z?.row === "live" ? z.extraUsage : void 0, o.credentials), SS, "admin request").catch(() => null).then((se) => {
      let le = se !== null && se.outcome !== "refused" && se.outcome !== "failed";
      if (le) (0, import_chunk_cqa9hrgx.l)("model_fable_consent", "overage_enable_deferred");
      else (0, import_chunk_cqa9hrgx.m)("model_fable_consent", "admin_request_failed");
      return R(le ? se.grantLine ?? se.value : se && !se.filed ? se.value : kS);
    });
    return Rp(ie, o.abortController.signal);
  }
  let pe = O === "consent" && (!(h && (H || (0, import_chunk_f9x2f6cx.TL)())) || await w()) && await (0, import_chunk_bzyb60p0.J6a)(e, o.storageV5, o.credentials, { sessionOnly: H });
  if (!pe && o.abortController.signal.aborted) return { kind: "aborted" };
  if (P) {
    if (H) (0, import_chunk_cqa9hrgx.l)("model_fable_consent", "remote_cancelled");
    else (0, import_chunk_cqa9hrgx.m)("model_fable_consent", I ? "dialog_queued_at_park" : "dialog_unanswered");
    if (h) return R();
    let ie = H ? "was closed from Remote Control without a choice \xB7 nothing was sent \xB7 you\u2019ll be asked again on your next message, or /model to change" : "went unanswered \xB7 nothing was sent \xB7 answer it where this session is running, or /model to change", se = (0, import_chunk_865at33z.yw)(e), le = X ? `Fable limit reached \xB7 continuing on ${se} uses usage credits` : `${se} now uses usage credits`;
    return { kind: "failed", message: (0, import_chunk_bzyb60p0._i)({ content: Q ? `${le} \xB7 Claude stopped here \xB7 send a message to be asked again, or switch models` : `${le}${X ? ", and " : " \xB7 "}the prompt to confirm ${ie}`, apiError: "consent_unanswered", now: y.now, uuid: y.uuid }), error: Error("Usage-credits-only model consent dialog was not answered") };
  }
  if (re && ((0, import_chunk_f9x2f6cx.TL)() || H)) if (pe) (0, import_chunk_cqa9hrgx.u)("model_fable_consent");
  else if (O === "consent") (0, import_chunk_cqa9hrgx.l)("model_fable_consent", "overage_enable_deferred");
  else if (O === "switch_default") (0, import_chunk_cqa9hrgx.m)("model_fable_consent", "declined");
  else (0, import_chunk_cqa9hrgx.l)("model_fable_consent", "dismissed");
  if (!pe && h && O !== "switch_default") return R();
  if (!pe) {
    if (!re && r) (0, import_chunk_cqa9hrgx.l)("model_fable_consent", "no_dialog_fallback");
    let ie = (0, import_chunk_865at33z.N9)();
    if (ie === null) {
      let ae = (0, import_chunk_865at33z.L9)();
      if (r) (0, import_chunk_cqa9hrgx.m)("model_fable_consent", ae ? "no_model_fallback_env" : "no_allowed_fallback");
      return { kind: "failed", message: (0, import_chunk_bzyb60p0._i)({ content: ae ? "CLAUDE_CODE_NO_MODEL_FALLBACK is set: model substitution is disabled \xB7 unset it to allow the swap" : `Your model policy only allows ${(0, import_chunk_865at33z.yw)(e)}, which requires usage credits \xB7 /model to set it up`, apiError: ae ? "model_substitution_disabled" : "no_allowed_fallback", now: y.now, uuid: y.uuid }), error: ae ? Error("CLAUDE_CODE_NO_MODEL_FALLBACK forbids model substitution") : Error("Usage-credits-only model consent declined and the model policy allows no other fallback") };
    }
    if (!fn(ie, e, o, g(), r && !h)) {
      if (r) (0, import_chunk_cqa9hrgx.m)("model_fable_consent", "auto_mode_refuses_fallback");
      return { kind: "failed", message: (0, import_chunk_bzyb60p0._i)({ content: `Auto mode doesn't run on ${(0, import_chunk_865at33z.yi)(ie)}, and ${(0, import_chunk_865at33z.yw)(e)} requires usage credits \xB7 /model to pick another model`, apiError: "no_allowed_fallback", now: y.now, uuid: y.uuid }), error: Error("Usage-credits-only model consent declined and auto mode does not run on the fallback model") };
    }
    let se = e, le = false;
    if (r) {
      if (O === "switch_default" && !H) le = (0, import_chunk_bzyb60p0.X6a)(se, ie, o.storageV5);
    }
    return { kind: "switch", model: ie, keepsFastModeOff: h, notice: !r ? void 0 : { type: "system", subtype: "model_consent_fallback", content: `Switched to ${(0, import_chunk_865at33z.yi)(ie)}${le ? ", now your default model" : " for this session"} \xB7 ${(0, import_chunk_865at33z.yi)(se)} requires usage credits \xB7 /model to change`, level: "warning", choice: O, originalModel: se, originalModelName: (0, import_chunk_865at33z.yw)(se), fallbackModel: ie, persistedAsDefault: le, isMeta: false, timestamp: y.now(), uuid: y.uuid() } };
  }
  return { kind: "proceed" };
}
var hS = 3e3, SS = 2e4, kS = "Couldn't send your request to your admin.";
async function CS({ credentials: e }) {
  let o = Date.now(), r = NaN, y = (await (0, import_chunk_5appeerh.qt)((0, import_chunk_cy0ck7w2.DO)(e, { read: "windows", onServedAt: (h) => r = h }), hS, "usage report timed out").catch(() => null))?.limits;
  if (Array.isArray(y) && y.some((h) => h?.kind === "weekly_scoped" && /^fable\b/i.test(String(h.scope?.model?.display_name ?? "")))) (0, import_chunk_gq1dr8pm.scl)(r, o);
}
function Mp(e) {
  return (0, import_chunk_865at33z.Pr)(e) !== "auxiliary" && !e.startsWith("hook_") && (0, import_chunk_gq1dr8pm.n1)();
}
function Ap(...e) {
  return (0, import_chunk_bzyb60p0.kts)(bS(...e), { maxSilentMs: 1 / 0 });
}
async function* bS(...[e, o, r, g, y]) {
  let { openQuestion: h, lastSwitch: k } = o.session.usageCreditsOnlyModelConsentSlots, R = Bl(e), w = k.get(R), E = w?.pick === (0, import_chunk_f9x2f6cx.ju)() ? w?.outcome : void 0;
  if (E === void 0) {
    let P = h.get(R);
    if (P === void 0) {
      let I = new AbortController();
      P = { answer: jl(e, { ...o, abortController: I }, true, g, y), withdraw: I, waiters: 0 }, h.set(R, P);
    }
    P.waiters++;
    try {
      E = await Rp(P.answer, o.abortController.signal);
    } finally {
      if (--P.waiters === 0) h.delete(R), P.withdraw.abort();
    }
  }
  if (E.kind === "switch") {
    if (r) return k.set(R, { outcome: E, pick: E.model }), E;
    if (k.get(R)?.outcome !== E) k.set(R, { outcome: E, pick: (0, import_chunk_f9x2f6cx.ju)() });
    return { ...E, notice: void 0 };
  }
  return k.delete(R), (E.kind === "failed" ? !r : E.kind === "proceed" && (0, import_chunk_gq1dr8pm.C7)(e)) ? vp(e, r, y) : E;
}
function Rp(e, o) {
  let { promise: r, resolve: g } = Promise.withResolvers(), y = () => g({ kind: "aborted" });
  if (o.aborted) y();
  return o.addEventListener("abort", y, { once: true }), Promise.race([e, r]).finally(() => o.removeEventListener("abort", y));
}
function Bl(e) {
  let o = (0, import_chunk_865at33z.Sn)();
  return [(0, import_chunk_f9x2f6cx.W)(), o?.accountUuid, o?.organizationUuid, (0, import_chunk_865at33z.qV)(e)].join(":");
}
function vp(e, o, { now: r, uuid: g }, y) {
  let h = !o ? "To keep this agent going, switch models or continue with usage credits." : `Switch models${(0, import_chunk_f9x2f6cx.Cl)() ? " with /model" : ""}, or send a message to choose again.`;
  return { kind: "failed", message: (0, import_chunk_bzyb60p0._i)({ content: `${y ? `${y} ` : ""}Claude stopped here because ${(0, import_chunk_865at33z.yw)(e)} now requires usage credits. ${h}`, apiError: "consent_unanswered", ...!o && { error: "rate_limit" }, now: r, uuid: g }), error: Error("Usage-credits-only model: no yes and no switch") };
}
function Ei(e, o) {
  if (e !== "aborted") return { rows: [e], terminal: { reason: "api_error", isTransient: false } };
  let r = { reason: "aborted_streaming" };
  try {
    return { terminal: r, rows: (0, import_chunk_cbnm4p23.jPe)(o.signal.reason) ? [] : [(0, import_chunk_bzyb60p0.hR)({ toolUse: false, interruptedMessageId: o.interruptedMessageId(), interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(o.signal), now: o.now, uuidFn: o.uuid })] };
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), { rows: [], terminal: r };
  }
}
async function* Ri(e, o) {
  if (await e, !o.signal.aborted) return;
  let r = Ei("aborted", o);
  if (yield* o.heldRows, o.mainThreadSession !== void 0) try {
    yield* Un({ session: o.mainThreadSession });
  } catch {
  }
  return yield* r.rows, o.markAborted(), r.terminal;
}
function xp({ outcome: e, querySource: o, agentId: r, isInterrupted: g }) {
  try {
    if (e.kind !== "failed" || e.consecutiveFailures !== import_chunk_bzyb60p0.cno && !e.uncountedStopReached || g || (0, import_chunk_f9x2f6cx.Se)() || !(0, import_chunk_bzyb60p0.f5)(o, r) || !(0, import_chunk_q4y63y6c.oV)()) return;
    let y = e.compactFailure;
    switch (y?.reason) {
      case "aborted":
        return;
      case "exhausted":
      case "too_few_groups":
        return ql(MS);
      case "media_unstrippable":
        return ql(import_chunk_4yvcsx6j.VKr);
      case void 0:
      case "error":
        return ql(y?.detail ? (0, import_chunk_f64qna2j.Us)(y.detail, import_chunk_bzyb60p0.api, true) : void 0);
    }
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
    return;
  }
}
var MS = "try /compact";
function ql(e) {
  return (0, import_chunk_bzyb60p0.Pt)(e ? `${import_chunk_4yvcsx6j.QYt} \xB7 ${e}` : import_chunk_4yvcsx6j.QYt, "warning");
}
function Op({ requested: e, batchResults: o, spent: r, lastIteration: g, queryChainId: y, queryDepth: h, deps: k, makeUserMessage: R }) {
  try {
    if (e === false || e === "tool" || r || g || !o.some(import_chunk_1hg0ytx8.ZDn) || !(0, import_chunk_865at33z.b)("tengu_cozy_fern", false)) return;
    let w = R({ content: import_chunk_0ha8wex8.eVn, isMeta: true, turnCompanion: true, now: k.now, uuidFn: k.uuid });
    return (0, import_chunk_y53wbr8a.a)("tengu_mcp_end_turn_overridden_by_failed_sibling", { queryChainId: y, queryDepth: h }), w;
  } catch (w) {
    (0, import_chunk_k449cc64.i)(w);
    return;
  }
}
function Pp(e, o, r) {
  try {
    let g = e.flatMap((y) => y.replacesDisallowedTools === true && y.disallowedTools !== void 0 ? [y.disallowedTools] : []);
    if (g.length === 0 || o === void 0) return r.tools;
    return o((0, import_chunk_4smdap7r.M)(g.flat())), r.refreshTools?.() ?? r.tools;
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "joined_list_threw"), r.tools;
  }
}
var AS = "tengu_modular_seal", RS = 2;
async function* Ip({ autocompact: e, refusal: o, hasAttempted: r, loopTopOutcome: g, offPickedModel: y, messages: h, toolUseContext: k, facts: R, cacheSafeParams: w, querySource: E, tracking: O, snipTokensFreed: P, sentSystemPrompt: I, sentInlineTools: H }) {
  try {
    if (!(0, import_chunk_bzyb60p0.mpi)(E)) return { result: null };
    let { actualTokens: Q, limitTokens: z } = (0, import_chunk_bzyb60p0.KTe)(o.errorDetails ?? ""), X = (0, import_chunk_bzyb60p0.yf)(h, R.bytesPerToken), re = Q !== void 0 && z !== void 0 ? z - (Q - X) : void 0, pe = re !== void 0 && re < import_chunk_bzyb60p0.ZQr, { refusals: ie, afterBoundary: se } = wS(h), le = se, ae = (0, import_chunk_bzyb60p0.nSt)(h.filter((he) => !Fp(he))).length, oe = ae < 2, Ae = (0, import_chunk_bzyb60p0.oSt)(), qe = Ae?.getTeleportCacheState().status, rt = Ae?.getLastDispatchFallback(), Ue = qe === "active" && rt?.cause !== "model_mismatch" && rt?.httpStatus !== 400 && rt?.httpStatus !== 413, Oe = r ? "prior_attempt" : k.abortController.signal.aborted ? "aborted" : !(0, import_chunk_865at33z.lde)(E) || k.agentId !== void 0 ? "not_main_thread" : g !== "not_needed" ? "decided_at_loop_top" : y ? "off_picked_model" : le ? "unanswered_compaction" : ie >= RS ? "repeated_refusals" : oe ? "one_round" : Ue ? "relay_still_on" : pe ? "futile" : void 0, He = (0, import_chunk_bzyb60p0.dcr)(I.map((he) => ({ text: he })), H?.map((he) => he.schema) ?? [], /* @__PURE__ */ new Map()), We = { skipReason: (0, import_chunk_78g0060s.fe)(Oe), loopTopOutcome: (0, import_chunk_78g0060s.f)(g), refusalsSinceReply: ie, unansweredCompaction: le, oneRound: oe, roundsInViewMax5: Math.min(ae, 5), futile: pe, roomAfterPrefixTokens: re, requestOffPickedModel: y, relayStatus: (0, import_chunk_78g0060s.fe)(qe), relayFallbackCause: (0, import_chunk_78g0060s.fe)(rt?.cause), relayHttpStatus: rt?.httpStatus, actualTokens: Q, limitTokens: z, messagesEstimate: X, systemCharLength: He?.systemCharLength, toolsCharLength: He?.toolsCharLength, toolsCount: He?.toolsCount, bytesPerToken: R.bytesPerToken, blockingLimitTokens: (0, import_chunk_bzyb60p0.TLt)(R) - import_chunk_bzyb60p0.RJo, hadPromptUsage: (0, import_chunk_bzyb60p0.J_t)(h), thresholdSource: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Sye)(R, k.options.autoCompactWindow)), querySource: (0, import_chunk_865at33z.ka)(E), queryChainId: (0, import_chunk_49zxha55.Ce)(k.queryTracking?.chainId), queryDepth: k.queryTracking?.depth };
    if (Oe !== void 0) return (0, import_chunk_y53wbr8a.a)("tengu_compact_after_prompt_too_long", { ...We, outcome: (0, import_chunk_78g0060s.S)("skipped") }), { result: null };
    if ((0, import_chunk_865at33z.b)(AS, !(0, import_chunk_865at33z.ni)()) !== true) return (0, import_chunk_y53wbr8a.a)("tengu_compact_after_prompt_too_long", { ...We, outcome: (0, import_chunk_78g0060s.S)("flag_off") }), { result: null };
    let J = performance.now(), ve;
    try {
      ve = yield* e(h, k, R, w, E, O, P, void 0, true);
    } catch (he) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(he), "compactAfterRefusal: the compaction threw")), ve = { kind: "threw" };
    }
    let G = ve.kind === "failed" ? ve.compactFailure : ve.kind === "threw" ? { reason: "error", detail: "an internal error" } : void 0, ye = ve.kind === "compacted" ? ve.result : null;
    try {
      let he = (0, import_chunk_cbnm4p23.Ai)(k.abortController.signal.reason) === "recovery-timeout";
      if ((0, import_chunk_y53wbr8a.a)("tengu_compact_after_prompt_too_long", { ...We, outcome: (0, import_chunk_78g0060s.f)(ve.kind), failureReason: (0, import_chunk_78g0060s.fe)(G?.reason), recoveryTimedOut: he, preCompactTokenCount: ye?.preCompactTokenCount, truePostCompactTokenCount: ye?.truePostCompactTokenCount, ptlAttempts: ye?.ptlAttempts, promptCacheSharingEnabled: ye?.promptCacheSharingEnabled, durationMs: Math.round(performance.now() - J) }), ye) (0, import_chunk_cqa9hrgx.u)("compact_after_prompt_too_long");
      else if (he) (0, import_chunk_cqa9hrgx.m)("compact_after_prompt_too_long", "recovery_timeout");
      else if (G?.reason === "aborted") (0, import_chunk_cqa9hrgx.l)("compact_after_prompt_too_long", G.reason);
      else (0, import_chunk_cqa9hrgx.m)("compact_after_prompt_too_long", G?.reason ?? ve.kind);
    } catch (he) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(he), "compactAfterRefusal: logging the outcome threw"));
    }
    return { result: ye, failure: G };
  } catch (Q) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(Q), "compactAfterRefusal: threw before the compaction")), { result: null };
  }
}
function wS(e) {
  let o = 0, r = e.findLast(import_chunk_865at33z.On)?.compactMetadata?.preservedMessages, g = new Set(r?.allUuids ?? r?.uuids);
  for (let y = e.length - 1; y >= 0; y--) {
    let h = e[y];
    if (!h || g.has(h.uuid)) continue;
    if ((0, import_chunk_865at33z.On)(h)) return { refusals: o, afterBoundary: !(0, import_chunk_865at33z.kdt)(h) };
    if (h.type === "assistant" && !Fp(h)) return { refusals: o, afterBoundary: false };
    if (h.type === "assistant" && (0, import_chunk_865at33z.nz)(h)) o++;
  }
  return { refusals: o, afterBoundary: false };
}
function Fp(e) {
  return e.type === "assistant" && e.message.model === import_chunk_bp9b0hd8.xs;
}
function Dp(e, o, r) {
  try {
    return e.type === "assistant" && (0, import_chunk_bzyb60p0.zar)(e) && (0, import_chunk_bzyb60p0.bx)(o) <= import_chunk_865at33z.M1 && !(0, import_chunk_bzyb60p0.dZt)(o) && (0, import_chunk_bzyb60p0.nno)({ hasAttempted: false, querySource: r, aborted: false }) && (0, import_chunk_2xjdqky3.b1n)();
  } catch (g) {
    return (0, import_chunk_cqa9hrgx.l)("compact_after_long_context_refusal", "check_threw"), (0, import_chunk_k449cc64.i)(g), false;
  }
}
var tKs = "tengu_paper_heron";
function nKs(e) {
  let o = (0, import_chunk_7jczpc8b.Bwt)(e);
  if (o !== void 0) return o.takesPersonsText === true ? o.maxBytes : void 0;
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) || (0, import_chunk_mxhw2w5n.bV)(e) === null ? void 0 : import_chunk_tt4yhkc0.rIr;
}
function rKs(e) {
  return (0, import_chunk_zhr7rpv7.d4t)() === true || !e.recognized && e.servedWindow === void 0 ? void 0 : Math.max((0, import_chunk_bzyb60p0.bx)(e), e.apiContextWindowWithoutOptIn, e.servedWindow?.declared ?? 0);
}
async function Lp({ rows: e, requestTokens: o, needsProof: r, beforeCompaction: g, facts: y, session: h, storageV5: k, tools: R, signal: w, stamp: E }) {
  let O = g ? "prompt_as_file_before_compaction" : "prompt_as_file";
  try {
    let P = (0, import_chunk_bzyb60p0.bx)(y), I = e.slice(e.findLastIndex((oe) => oe.type === "assistant" && oe.message.model !== import_chunk_bp9b0hd8.xs) + 1), H = I.flatMap((oe) => {
      let Ae = (0, import_chunk_zajgr60e.XZn)(oe);
      return Ae !== void 0 && Ae.length / import_chunk_zajgr60e.jKr > P && Ae === (0, import_chunk_zajgr60e.XZn)((0, import_chunk_qanr9g0g.l0)(oe)) ? [{ row: oe, text: Ae }] : [];
    });
    if (H.length === 0) return;
    let Q = new Set(e.flatMap((oe) => oe.type === "attachment" && oe.attachment.type === "prompt_as_file" ? [oe.attachment.promptUuid] : [])), [z] = H.filter(({ row: oe }) => !Q.has(oe.uuid)).sort((oe, Ae) => Ae.text.length - oe.text.length);
    if (z === void 0 || z.row.type === "user" && !(0, import_chunk_865at33z.$u)(z.row.origin)) return;
    if (g && !(z.text.length / import_chunk_zajgr60e.PVo > (rKs(y) ?? 1 / 0))) return;
    let X = e.filter((oe) => oe !== z.row), re = Math.max(1, (o ?? 0) / (0, import_chunk_bzyb60p0.yf)(e));
    if ((0, import_chunk_bzyb60p0.yf)(X) * re > P) return;
    if (r && !(z.text.length / import_chunk_zajgr60e.PVo > P) && !(o !== void 0 && !I.slice(0, I.indexOf(z.row)).some((oe) => oe.type === "assistant" && (0, import_chunk_zajgr60e.OVo)(oe)) && o - (0, import_chunk_bzyb60p0.yf)(X, import_chunk_zajgr60e.jKr) > P)) return;
    if ((0, import_chunk_865at33z.b)(tKs, false) !== true) return;
    if ((0, import_chunk_4vsz8a99.tn)(R, import_chunk_k883m4fq.De) === void 0 && (0, import_chunk_4vsz8a99.tn)(R, import_chunk_hn3cwwzt.ke) === void 0) return (0, import_chunk_cqa9hrgx.l)(O, "no_read_tool"), "no_file";
    let pe = nKs(h);
    if (pe === void 0) return (0, import_chunk_cqa9hrgx.l)(O, "not_allowed"), "no_file";
    if (Buffer.byteLength(z.text) > pe) return (0, import_chunk_cqa9hrgx.l)(O, "over_max_bytes"), "no_file";
    let ie = `prompt-${z.row.uuid}`, se = (0, import_chunk_7jczpc8b.Bwt)(h), le = "not_saved", ae;
    if (se !== void 0) ae = (await (0, import_chunk_7jczpc8b.tje)(se, { leafName: `${ie}.txt`, data: Buffer.from(z.text) }, (Ae) => {
      le = Ae;
    }))?.path;
    else {
      let oe = await (0, import_chunk_qp5chy39.Bq)(z.text, ie, (0, import_chunk_mxhw2w5n.bV)(h), k);
      ae = (0, import_chunk_qp5chy39.Wq)(oe) ? void 0 : oe.filepath;
    }
    if (ae === void 0) {
      if (!w.aborted) (0, import_chunk_cqa9hrgx.l)(O, le);
      return "no_file";
    }
    return (0, import_chunk_cqa9hrgx.u)(O), (0, import_chunk_bzyb60p0.Ut)({ type: "prompt_as_file", promptUuid: z.row.uuid, path: ae, characters: z.text.length }, E);
  } catch (P) {
    return (0, import_chunk_k449cc64.i)(P), (0, import_chunk_cqa9hrgx.m)(O, "threw"), "no_file";
  }
}
function Hl(e) {
  try {
    let { actualTokens: o, limitTokens: r } = (0, import_chunk_bzyb60p0.KTe)(e.errorDetails ?? ""), g = (0, import_chunk_bzyb60p0.dcr)(e.systemPrompt.map((k) => ({ text: k })), e.inlineTools?.map((k) => k.schema) ?? [], /* @__PURE__ */ new Map());
    if (g === void 0) return {};
    let y = (0, import_chunk_bzyb60p0.yf)(e.messages), h = o === void 0 ? void 0 : (o - (g.systemCharLength + g.toolsCharLength) / 4) / y;
    return { actualTokens: o, limitTokens: r, systemCharLength: g.systemCharLength, toolsCharLength: g.toolsCharLength, roundSizingEstimate: y, actualToRoundSizingRatio: (0, import_chunk_78g0060s.f)(h === void 0 ? "no_numbers" : h < 1.5 ? "under_1_5" : h < 2 ? "1_5_to_2" : h < 3 ? "2_to_3" : h < 4 ? "3_to_4" : "4_and_over") };
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(o), "refusedRequestSizeFields threw: the too-long event has no sizes")), {};
  }
}
var Ql = Object.freeze({ delivery: "transient", records: Object.freeze([]) });
function Up(e) {
  try {
    let o = e.deliveryOverride ?? e.decide(e.querySource, e.agentId, e.model, e.reminderModelFacts, e.retryGoesStateless, e.recordedKeptReminders);
    if (o !== "kept") return { delivery: o, records: [] };
    let r = e.recordsDue(e.messages, e.session, e.reminderModelFacts).map((g) => e.createRecord({ type: g.type, text: g.text, model: e.reminderModelFacts.model, clearAt: "next_user_message" }, e.stamp));
    return { delivery: o, records: r };
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), Ql;
  }
}
function wi(e) {
  try {
    return e.length > 0 && e.every((o) => o.answeredWithoutRequest === true);
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
function vi() {
  return false;
}
var Ts = 3, vS = " The last attempt reached the limit while still thinking.";
function Np({ withheld: e, request: o, responses: r, attemptsSpent: g, resumeActive: y, resumeRefused: h, model: k, modelFor: R, querySource: w, isNonInteractiveSession: E, agentId: O, signal: P, deps: I }) {
  let H = h ? g : g + 1;
  if (H <= Ts) {
    let z = !h && xS(r, R([...o, ...r.filter((re) => !re.isApiErrorMessage)]));
    if (y && !h && !z && r.some((re) => !re.isApiErrorMessage)) (0, import_chunk_cqa9hrgx.u)("query_thinking_block_resumption", { attempt: g, host_forced: (0, import_chunk_bzyb60p0.Fen)("live") });
    let X = z ? void 0 : (0, import_chunk_bzyb60p0.Me)({ content: OS(r, H, w, o), isMeta: true, turnCompanion: true, now: I.now, uuidFn: I.uuid });
    return { kind: "retry", attempt: H, nudge: X };
  }
  if (y) (0, import_chunk_cqa9hrgx.m)("query_thinking_block_resumption", "exhausted", { host_forced: (0, import_chunk_bzyb60p0.Fen)("live") });
  return { kind: "exhausted", error: { ...PS({ withheld: e, responses: r, model: k, isNonInteractiveSession: E, agentId: O }), ...(0, import_chunk_bzyb60p0._no)(r, P.aborted) } };
}
function xS(e, o) {
  let r = e.filter((h) => !h.isApiErrorMessage && !(0, import_chunk_bzyb60p0.qHe)(h)), g = r.length === 1 ? r[0] : void 0;
  if (g === void 0 || g.message.content.length !== 1) return false;
  let y = g.message.content[0];
  return y !== void 0 && (0, import_chunk_bzyb60p0.aae)(y) && (0, import_chunk_bzyb60p0.ooo)(y) && g.message.stop_reason === "max_tokens" && !(0, import_chunk_bzyb60p0.W3e)(g, (0, import_chunk_zmb62hr5.ur)(o)) && (0, import_chunk_bzyb60p0.X4a)(o, g.message.resumable, (0, import_chunk_xfj2cwfv.EM)(g.message.usage));
}
function OS(e, o, r, g = []) {
  try {
    let y = qp(e), h = e.some((H) => H.toolCallCutAtOutputLimit) && (0, import_chunk_3t7ve0wy.ph)(), k = e.findLast((H) => !H.isApiErrorMessage)?.message, R = k?.content.at(-1), w = k?.stop_reason === "max_tokens" && R?.type === "text" && R.text.trim() !== "" && !e.some((H) => H.cutInUnfinishedBlock), E = (0, import_chunk_865at33z.Pr)(r), O = w && E === "main" && (0, import_chunk_3t7ve0wy.Dm)(), P = w && E === "subagent" && o < Ts, I = P && IS(g);
    if ((0, import_chunk_cqa9hrgx.l)("query_output_limit_recovery", y ? "nudged_thinking_discarded" : "nudged_resume", h ? { attempt: o, nudge_name: (0, import_chunk_78g0060s.S)("tool_call_cut") } : O ? { attempt: o, nudge_name: (0, import_chunk_78g0060s.S)("reopen_block") } : P ? { attempt: o, nudge_name: I ? (0, import_chunk_78g0060s.S)("restate_shorter") : (0, import_chunk_78g0060s.S)("restate") } : { attempt: o }), h) return import_chunk_0ha8wex8._Os;
    if (O) return import_chunk_0ha8wex8.hOs;
    if (P) return I ? import_chunk_0ha8wex8.gOs : import_chunk_0ha8wex8.WPo;
    return y && vi() ? import_chunk_0ha8wex8.BPo : import_chunk_0ha8wex8.UPo;
  } catch (y) {
    return (0, import_chunk_w578pjby.t)("[output-limit-recovery] nudge choice threw; keeping the resume nudge", { level: "warn" }), (0, import_chunk_k449cc64.i)(y), import_chunk_0ha8wex8.UPo;
  }
}
function PS({ withheld: e, responses: o, model: r, isNonInteractiveSession: g, agentId: y }) {
  try {
    let h = qp(o);
    (0, import_chunk_cqa9hrgx.m)("query_output_limit_recovery", h ? "exhausted_thinking_discarded" : "exhausted_resume");
    let k = e.message.content[0];
    if (!h || !vi() || e.message.content.length !== 1 || k?.type !== "text" || o.findLast((E) => !E.isApiErrorMessage)?.effort === import_chunk_8hfdvrr1.ea[0] || !(0, import_chunk_k67pwqya.zk)(r)) return e;
    let R = !g && y === void 0 && (0, import_chunk_bzyb60p0.Gar)() ? (0, import_chunk_865at33z.zZ)("effort") : void 0, w = R === void 0 ? " Lower the effort level to leave room for a reply." : ` Lower the effort level with ${R} to leave room for a reply.`;
    return { ...e, message: { ...e.message, content: [{ ...k, text: k.text + vS + w }] } };
  } catch (h) {
    return (0, import_chunk_w578pjby.t)("[output-limit-recovery] exhausted-error build threw; surfacing the withheld error", { level: "warn" }), (0, import_chunk_k449cc64.i)(h), e;
  }
}
function Bp({ transition: e, resumed: o, request: r, responses: g, withheld: y }) {
  try {
    if (e?.reason !== "max_output_tokens_recovery" || o) return;
    let h = g.at(-1);
    if (h?.isApiErrorMessage) {
      if (h !== y) (0, import_chunk_cqa9hrgx.m)("query_output_limit_recovery", "continuation_failed", { attempt: e.attempt });
      return;
    }
    let k = r.findLast((R) => R.type === "user" && (R.message.content === import_chunk_0ha8wex8.BPo || R.message.content === import_chunk_0ha8wex8.UPo || R.message.content === import_chunk_0ha8wex8.hOs || R.message.content === import_chunk_0ha8wex8.WPo || R.message.content === import_chunk_0ha8wex8.gOs || R.message.content === import_chunk_0ha8wex8._Os));
    if (h === void 0 || k?.type !== "user") return;
    (0, import_chunk_cqa9hrgx.u)("query_output_limit_recovery", { attempt: e.attempt, ...vi() && { thinking_discarded: k.message.content === import_chunk_0ha8wex8.BPo } });
  } catch (h) {
    (0, import_chunk_w578pjby.t)("[output-limit-recovery] outcome count threw", { level: "warn" }), (0, import_chunk_k449cc64.i)(h);
  }
}
function jp(e, o) {
  try {
    if (o !== void 0 || e?.reason !== "max_output_tokens_recovery") return;
    import_chunk_bzyb60p0.Dnt.emit({ kind: "agent-mode", agentId: (0, import_chunk_f9x2f6cx.ot)(), mode: "requesting", outputLimitRecovery: { attempt: e.attempt, limit: Ts } });
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(r), "output-limit recovery announcement failed"));
  }
}
function IS(e) {
  return e.slice(e.findLastIndex((o) => o.type === "assistant") + 1).some((o) => o.type === "user" && o.message.content === import_chunk_0ha8wex8.WPo);
}
function qp(e) {
  let o = e.filter((r) => !r.isApiErrorMessage);
  return o.at(-1)?.message.stop_reason === "max_tokens" && o.every((r) => r.message.content.length > 0 && r.message.content.every((g) => (0, import_chunk_bzyb60p0.aae)(g)));
}
function Hp(e, o, r) {
  try {
    let y = e.streamCutError;
    if (y !== void 0 && (0, import_chunk_865at33z.b)("tengu_dreamy_flute", false)) {
      let h = o.serverErrorCutRetryCount + 1, k = Math.min((0, import_chunk_bzyb60p0.Sno)(), import_chunk_bzyb60p0.yno);
      if (h > k) return;
      let R = (0, import_chunk_bzyb60p0.yZt)(y) === "overloaded" && h > 1, w = (0, import_chunk_865at33z.NN)(h, void 0, R ? import_chunk_c203g5kd.s.CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS : void 0, r, R ? import_chunk_c203g5kd.s.CLAUDE_CODE_OVERLOADED_RETRY_BASE_DELAY_MS : void 0);
      return { attempt: h, spent: { serverErrorCutRetryCount: h }, wait: (0, import_chunk_bzyb60p0.Xnt)(y, w, h, k, "cut_retry") };
    }
  } catch (y) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(y), "could not set up the wait after a cut reply; using the tries with no wait"));
  }
  let g = o.maxOutputTokensRecoveryCount + 1;
  return g <= Ts ? { attempt: g, spent: { maxOutputTokensRecoveryCount: g } } : void 0;
}
function ks(e, o, r) {
  let g = e + o.maxOutputTokens, y = (0, import_chunk_bzyb60p0.Vw)(o, r) <= import_chunk_865at33z.M1, { window: h } = (0, import_chunk_bzyb60p0.ES)(o, r);
  return (0, import_chunk_bzyb60p0.fne)(g, o, r).level !== "blocked" && (!y || g < Math.min(h, import_chunk_865at33z.M1));
}
function Wp(e, o, r) {
  try {
    let g = (0, import_chunk_bzyb60p0.sfe)(e);
    if (g <= 0 || !(0, import_chunk_knp99ee7.wtr)(e, o.model)) return false;
    return ks(g + (0, import_chunk_bzyb60p0.Z2)(e), o, r) && ((0, import_chunk_bzyb60p0.lcr)("live") ?? (0, import_chunk_865at33z.b)("tengu_concurrent_lake", false));
  } catch (g) {
    return (0, import_chunk_cqa9hrgx.l)("query_thinking_block_resumption", "compaction_skip_gate_threw"), (0, import_chunk_k449cc64.i)(g), false;
  }
}
function FS() {
  let e = (0, import_chunk_865at33z.b)("tengu_ambling_tortoise", 0);
  return typeof e === "number" && e > 0 ? Math.ceil(e) : 0;
}
function Gp() {
  let e = (0, import_chunk_865at33z.b)("tengu_mellow_badger", 0);
  return typeof e === "number" && e > 0 ? Math.ceil(e) : 0;
}
async function Qp(e, o, r, g) {
  let y = (0, import_chunk_cbnm4p23.sd)(r);
  try {
    await Promise.race([e.settled, (0, import_chunk_5appeerh.K)(o, y.signal, { clock: g })]);
  } finally {
    y.abort();
  }
}
function $p(e, o, r, g, y, h, k) {
  try {
    let { toolUseContext: R } = r;
    if (k !== "next_turn" || (0, import_chunk_r6r2wdsw.Uy)() === "none" || !(0, import_chunk_bzyb60p0.f5)(g, R.agentId) || y?.compacted === true && y.turnCounter < import_chunk_bzyb60p0.PJo || (y?.consecutiveFailures ?? 0) > 0) return false;
    let w = R.session.precompute.get((0, import_chunk_f9x2f6cx.Ice)(R.agentId));
    if (w !== void 0 && (w.status !== "pending" || w.armTrigger === "stop")) return false;
    let E = R.options.autoCompactWindow, O = (0, import_chunk_bzyb60p0.ip)(e, (0, import_chunk_bzyb60p0._H)(o.bytesPerToken)) + (0, import_chunk_bzyb60p0.Z2)(e), P = (0, import_chunk_bzyb60p0.KQr)(e), I = P ? e.slice(e.indexOf(P) + 1) : e;
    if ((0, import_chunk_bzyb60p0.A4e)(I) || !ks(O, o, E)) return false;
    let H = FS(), Q = (0, import_chunk_bzyb60p0.Vw)(o, E), z = Math.min(Q + H, (0, import_chunk_bzyb60p0.ES)(o, E).window);
    if (H === 0 || O >= z) return false;
    if (h) return (0, import_chunk_cqa9hrgx.l)("compact_beside_turn", "usage_credits"), false;
    let X = w !== void 0 || (0, import_chunk_bzyb60p0.scr)({ querySource: g, messages: e, facts: o, cacheSafeParams: r, armTrigger: "beside_turn" });
    if (X) (0, import_chunk_y53wbr8a.a)("tengu_auto_compact_beside_turn", { contextTokens: Math.round(O), autoCompactThreshold: Q, limit: z });
    return X;
  } catch (R) {
    return (0, import_chunk_cqa9hrgx.l)("compact_beside_turn", "threw"), (0, import_chunk_k449cc64.i)(R), false;
  }
}
var DS = [{ share: 1, reason: "over_point" }, { share: 0.99, reason: "within_1_pct" }, { share: 0.98, reason: "within_2_pct" }, { share: 0.95, reason: "within_5_pct" }];
function Kp(e, o, r, g, y) {
  try {
    if (!(0, import_chunk_f9x2f6cx.st)() || !(0, import_chunk_bzyb60p0.f5)(g, y) || !(0, import_chunk_2xjdqky3.om)() || (0, import_chunk_2xjdqky3.i1)() && !(0, import_chunk_bzyb60p0.zTe)(o, r)) return;
    let h = (0, import_chunk_bzyb60p0.ip)(e, (0, import_chunk_bzyb60p0._H)(o.bytesPerToken)) + (0, import_chunk_bzyb60p0.Z2)(e), k = (0, import_chunk_bzyb60p0.Vw)(o, r);
    for (let { share: R, reason: w } of DS) if (h >= R * k) {
      (0, import_chunk_y53wbr8a.a)("tengu_turn_end_compaction_point", { reason: (0, import_chunk_78g0060s.f)(w) });
      return;
    }
  } catch (h) {
    (0, import_chunk_cqa9hrgx.l)("turn_end_compaction_point", "threw"), (0, import_chunk_k449cc64.i)(h);
  }
}
function Vp(e, o, r) {
  return e && o?.reason === "refusal_retry" && o.model === r && (0, import_chunk_865at33z.b)("tengu_sturdy_plover", false);
}
function Xp({ toolUseContext: e, isMainThread: o }) {
  try {
    return o && e.agentId === void 0 && (0, import_chunk_8m5q5cts.ll)("switchModelsOnFlag", true).source === "default" && (0, import_chunk_xzvhvaa2.Ko)().includes("userSettings") && !(0, import_chunk_3t7ve0wy.xft)() && !(0, import_chunk_865at33z.sf)() && (0, import_chunk_f9x2f6cx.np)() === void 0 && (0, import_chunk_h5jsp3s5.u0t)(e) && (!(0, import_chunk_f9x2f6cx.Se)() || (0, import_chunk_f9x2f6cx.Mce)() !== void 0) && (0, import_chunk_865at33z.b)(import_chunk_gq1dr8pm.IFn, false);
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), (0, import_chunk_cqa9hrgx.m)("refusal_fallback_preference_prompt", "gate_error"), false;
  }
}
async function Jp({ canUseTool: e, toolUseContext: o, originalModel: r, fallbackModel: g, apiRefusalCategory: y, telemetry: h }) {
  try {
    let k = (0, import_chunk_865at33z.yi)(r), R = (0, import_chunk_865at33z.yi)(g), w = (0, import_chunk_gq1dr8pm.pBt)(k, r, y), E = await (0, import_chunk_h5jsp3s5.Uue)({ canUseTool: e, toolUseContext: o, source: "refusal_fallback_preference", header: "Model switch", question: `${w} Switch to ${R} and keep going whenever this happens? You can change this later in /config.`, choices: [{ value: "switch_automatically", label: import_chunk_gq1dr8pm.FAe.switchAutomatically, description: `Continue on ${R} now, and switch without asking from now on` }, { value: "pause", label: `Stay on ${k}`, description: "Stop here without switching, and ask me each time a message is flagged" }] }), O = E.kind === "chose" ? E.value : E.kind;
    switch ((0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_preference_prompt", { ...h, choice: (0, import_chunk_78g0060s.f)(O) }), E.kind) {
      case "unanswered":
        return (0, import_chunk_cqa9hrgx.l)("refusal_fallback_preference_prompt", E.reason), "retry_fallback";
      case "declined":
        return (0, import_chunk_cqa9hrgx.u)("refusal_fallback_preference_prompt"), "retry_fallback";
      case "aborted":
        return (0, import_chunk_cqa9hrgx.u)("refusal_fallback_preference_prompt"), "cancelled";
      case "chose":
        break;
    }
    let P = E.value === "switch_automatically", { error: I } = await (0, import_chunk_gq1dr8pm.Umo)(P, "first_flag_prompt", (0, import_chunk_m15w38ag.ne)() ? o.storageV5 : void 0);
    if (I) (0, import_chunk_w578pjby.t)(`refusal fallback preference: could not store the answer: ${I.message}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("refusal_fallback_preference_prompt", "save_failed");
    else (0, import_chunk_cqa9hrgx.u)("refusal_fallback_preference_prompt");
    return P ? "retry_fallback" : "edit_prompt";
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), (0, import_chunk_cqa9hrgx.m)("refusal_fallback_preference_prompt", "error"), "retry_fallback";
  }
}
function LS(e) {
  return (0, import_chunk_sjqze7qg.abt)(e) || null;
}
async function NS(e, o, r) {
  let g = (0, import_chunk_bzyb60p0.wci)(e, r), y = (R) => (0, import_chunk_bzyb60p0.nBe)(e, ["status", "--porcelain", import_chunk_gd77dyw4.zy, `--untracked-files=${R}`], { abortSignal: r, userLocale: true, listing: g }), [h, k] = await Promise.all([y("normal"), o ? y("all") : Promise.resolve(null)]);
  return { normal: h, all: k };
}
async function BS(e, o) {
  let r = await (0, import_chunk_bzyb60p0.nBe)(e, ["config", "-z", "--get-regexp", "^(remote\\..+\\.(url|pushurl)|remote\\.pushdefault|branch\\..+\\.remote)$"], { abortSignal: o }), g = { remotes: /* @__PURE__ */ new Map(), branchRemotes: /* @__PURE__ */ new Map(), pushDefault: void 0 };
  if (!r.ok) return r.code === 1 && !r.timedOut && !r.overflowed ? g : null;
  for (let y of r.stdout.split("\0")) {
    let h = y.indexOf(`
`);
    if (h < 0) continue;
    let k = y.slice(0, h), R = y.slice(h + 1);
    if (k === "remote.pushdefault") {
      g.pushDefault = R;
      continue;
    }
    let w = k.match(/^remote\.(.+)\.(url|pushurl)$/);
    if (w !== null) {
      let O = w[1], P = g.remotes.get(O) ?? { url: [], pushurl: [] };
      P[w[2]].push(R), g.remotes.set(O, P);
      continue;
    }
    let E = k.match(/^branch\.(.+)\.remote$/);
    if (E !== null) g.branchRemotes.set(E[1], R);
  }
  return g;
}
function jS(e, o) {
  return (o !== null && o !== "HEAD" ? e.branchRemotes.get(o) : void 0) ?? e.pushDefault ?? "origin";
}
function $l(e) {
  let o = (0, import_chunk_sjqze7qg.Zso)(e);
  return o === "unverified" ? "unknown" : o;
}
function ef(e) {
  return (0, import_chunk_sjqze7qg.abt)(e) === e && e !== "" ? e : null;
}
function qS(e) {
  let o = [];
  for (let [r, g] of e.remotes) {
    let y = ef(r);
    if (y === null) continue;
    let h = g.pushurl.length > 0 ? g.pushurl : g.url, k = /* @__PURE__ */ new Set();
    for (let R of h) {
      let w = (0, import_chunk_3hr8g93j.eE)(R);
      if (w === null) continue;
      let E = `${w.owner}/${w.name}`;
      if (k.has(`${w.host}/${E}`)) continue;
      k.add(`${w.host}/${E}`), o.push({ name: y, host: w.host, remote: (0, import_chunk_sjqze7qg.abt)(E), visibility: $l({ slug: E, host: w.host, visibility: import_chunk_sjqze7qg.bbi.lookup(w.host, E) ?? "unknown" }) });
    }
  }
  return o.sort((r, g) => r.name.localeCompare(g.name) || r.remote.localeCompare(g.remote)), o;
}
function Zp() {
  return import_chunk_sjqze7qg.bbi.entries().map((e) => ({ host: e.host, remote: (0, import_chunk_sjqze7qg.abt)(e.slug), visibility: $l(e) })).filter((e) => e.remote !== "");
}
async function tf(e, o, r, g = "read") {
  let y = (() => {
    try {
      return (0, import_chunk_sjqze7qg.Gis)();
    } catch {
      return false;
    }
  })(), h = (k) => ({ cwd: e, root: null, branch: null, default_branch: null, status: null, visibility: y ? { origin: null, push_remote: null, remotes: [], visibility_cache: Zp().slice(0, import_chunk_vc58gmrj.Wuo) } : null, error: k });
  if (e === null || (0, import_chunk_f9x2f6cx.Y)()) return h("error");
  try {
    let k = (0, import_chunk_w5s307zm.jy)(e);
    if (k === null) return h("not_a_repo");
    let R = {};
    if (r !== void 0 && y) r.visibility = R;
    let w = (0, import_chunk_bzyb60p0.wZr)(), E = (0, import_chunk_bzyb60p0.kZr)(), [O, P, I, H] = await Promise.all([g !== "skip" && (w || E) ? NS(e, E, o) : null, (0, import_chunk_bzyb60p0.nBe)(e, ["rev-parse", "--abbrev-ref", "HEAD"], { abortSignal: o }), y ? (0, import_chunk_sjqze7qg.zis)(e, R, import_chunk_bzyb60p0.bZr) : null, y ? BS(e, o) : null]), Q = P.ok ? P.stdout.trim() : null, z = Q === null ? null : LS(Q), X = H === null ? [] : qS(H), re = y ? Zp() : [], pe = X.length > import_chunk_vc58gmrj.Lus || re.length > import_chunk_vc58gmrj.Wuo || z !== Q, ie = { cwd: e, root: k, branch: z, default_branch: null, visibility: y ? { origin: I === null ? null : { host: I.host, remote: (0, import_chunk_sjqze7qg.abt)(I.slug), visibility: $l(I) }, push_remote: H === null ? null : ef(jS(H, Q)), remotes: X.slice(0, import_chunk_vc58gmrj.Lus), visibility_cache: re.slice(0, import_chunk_vc58gmrj.Wuo) } : null, ...pe && { truncated: true } };
    if (O === null) return { ...ie, status: null };
    let { normal: se, all: le } = O, ae = le?.ok ? le : se.ok ? se : null;
    if (ae === null) return { ...ie, status: null, error: !se.ok && se.timedOut || le !== null && !le.ok && le.timedOut ? "timeout" : "error" };
    let oe = ae.stdout.split(`
`).filter((Oe) => Oe.length > 0), Ae = [...oe.filter((Oe) => Oe.startsWith("??")), ...oe.filter((Oe) => !Oe.startsWith("??"))].join(`
`), qe = (0, import_chunk_bzyb60p0.kci)(), rt = E ? (0, import_chunk_bzyb60p0.Eci)(Ae, qe > 0 ? Math.min(qe, import_chunk_vc58gmrj.TRi) : import_chunk_vc58gmrj.TRi) : null, Ue = (0, import_chunk_bzyb60p0.XJo)(ae.stdout);
    return { ...ie, status: { clean: oe.length === 0, counts: w ? { staged: Ue.staged, modified: Ue.modified, untracked: le?.ok ? Ue.untracked : null, untracked_normal: se.ok ? (0, import_chunk_bzyb60p0.XJo)(se.stdout).untracked : null } : null, porcelain: rt, truncated: rt !== null && (ae !== le || rt !== Ae) } };
  } catch {
    return h("error");
  }
}
var HS = 3;
function of(e, o) {
  if (e === void 0 || o !== "arbiter" && o !== "arbiterWithLocalFallback" || (0, import_chunk_bzyb60p0.kZr)() || !(0, import_chunk_bzyb60p0.wZr)()) return "read";
  let r = /* @__PURE__ */ new Set();
  for (let g of e.toReversed()) if (g.type === "user") {
    if (g.toolDenialKind === "automode-blocked" || g.isCompactSummary) return "await";
  } else if (g.type === "assistant" && !g.isApiErrorMessage) {
    if (r.add(g.message.id), r.size === HS) return "skip";
  }
  return "skip";
}
var GS = "tengu_velvet_marble", $S = 300, nf = 128, rf = 32, KS = 300, YS = 2e3, zS = 1024;
function uf(e, o, r) {
  return new Promise((g, y) => {
    let h = setTimeout((k, R) => k(R), o, g, r);
    e.then((k) => {
      clearTimeout(h), g(k);
    }, (k) => {
      clearTimeout(h), y(k);
    });
  });
}
var af = (0, import_chunk_t57w17k7.de)({}, (e) => {
  delete e.whole, delete e.rulesUnread;
});
function XS() {
  return uf((0, import_chunk_jp3c197c.qFa)(), KS, void 0);
}
function lf(e, o) {
  if ((0, import_chunk_px0hhsq7.GDs)().length === 0) return [...e];
  let r = new Set(e.map(({ rule: g, source: y }) => `${y} ${g}`));
  return [...e, ...o.flatMap(({ ruleValue: g, source: y }) => (0, import_chunk_px0hhsq7.G$l)(g.toolName).flatMap((h) => {
    let k = (0, import_chunk_qebpc5de.yn)({ ...g, toolName: h }), R = `${y} ${k}`;
    if (r.has(R)) return [];
    return r.add(R), [{ rule: k, source: y }];
  }))];
}
function JS({ toolName: e, ruleContent: o = "" }) {
  return e === import_chunk_pmryp5f3.Fn && (0, import_chunk_sxd14zzs.amo)(o);
}
async function ZS(e, o, r = false) {
  let g = (0, import_chunk_xcgcdx61.Qc)(e.mode), y = r && (0, import_chunk_bzyb60p0.MQr)(g), h = import_chunk_p1ewvgeh.TU, k = (0, import_chunk_f9x2f6cx.Y)(), R = (_e) => _e === "mcpMount" || k && _e === "userSettings", w = (_e, te) => te.map((kt) => {
    let Jt = (0, import_chunk_qebpc5de.yn)(kt.ruleValue), bo = { rule: (0, import_chunk_px0hhsq7.ZHo)(kt.stored ?? Jt, _e), source: kt.source, ...kt.stored !== void 0 && kt.stored !== Jt && { canonical: (0, import_chunk_px0hhsq7.ZHo)(Jt, _e) } }, { toolName: Mo, ruleContent: Pe } = kt.ruleValue;
    if (Pe === void 0 || Bo === null || Mo !== import_chunk_k883m4fq.De && Mo !== import_chunk_rb36kwbn.lt) return bo;
    if (k && Pe.startsWith("~/") || R(kt.source) && /^\/(?!\/)/.test(Pe)) return bo;
    let Qe = (0, import_chunk_p1ewvgeh.hUi)(Pe, kt.source, _e);
    if (Qe === null) return bo;
    return { ...bo, root: Qe.root === null ? null : h(Qe.root), pattern: Qe.pattern };
  }), E = o?.options.toolAliases !== void 0 && (0, import_chunk_vc58gmrj.cil)(), O = Object.entries(o?.options.toolAliases ?? {}).filter(([_e, te]) => te !== _e && (E || (0, import_chunk_rmc00en4.Mus)(te, e.mode, e) || o?.options.tools.some((kt) => (0, import_chunk_4vsz8a99.gt)(kt, te) && (0, import_chunk_bzyb60p0.HQr)(kt, e) !== "off"))).map(([_e]) => _e), P = (_e, te) => Object.entries(_e).flatMap(([kt, Jt]) => (Jt ?? []).map((bo) => ({ source: kt, ruleBehavior: te, ruleValue: (0, import_chunk_qebpc5de.Ur)(bo), stored: bo }))).filter((kt) => kt.ruleValue.ruleContent !== void 0 || (0, import_chunk_ht27b0vz._Bn)(kt) || !O.some((Jt) => kt.ruleValue.toolName === Jt || (0, import_chunk_qebpc5de.vv)(kt.ruleValue.toolName) && (0, import_chunk_qebpc5de.pO)(kt.ruleValue.toolName, Jt))), { mcpServerPolicy: I, ...H } = (0, import_chunk_p1ewvgeh.bEr)(e, "ask"), Q = y ? {} : H, z = P((0, import_chunk_p1ewvgeh.bEr)(e, "deny"), "deny"), X = P(Q, "ask"), re = y ? import_chunk_vc58gmrj.cNn : (0, import_chunk_865at33z.b)(GS, import_chunk_vc58gmrj.cNn), pe = typeof re === "number" && Number.isInteger(re) && re > import_chunk_vc58gmrj.cNn ? Math.min(re, import_chunk_vc58gmrj.Buo) : import_chunk_vc58gmrj.cNn, ie = !y && (0, import_chunk_rmc00en4.sNn)(e.mode, e), se = y ? [] : (0, import_chunk_ht27b0vz.wV)(e).filter(({ ruleValue: _e }) => !(0, import_chunk_gbskgz33.AV)(_e)), le = (0, import_chunk_865at33z.ce)(), ae;
  if (o !== void 0 && pe > import_chunk_vc58gmrj.cNn && !ie && le.hooksRespawns.size === 0 && le.hookRegistrationInFlight === void 0) try {
    let _e = (0, import_chunk_5zps0wmn.Ib)("tool.check"), te, kt = {}, [Jt, bo] = (0, import_chunk_6mfepmbb.Wl)(se.filter(({ ruleValue: Ze }) => Ze.ruleContent === void 0 && Ze.toolName.startsWith(import_chunk_px0hhsq7.ch)), (Ze) => (0, import_chunk_ht27b0vz.ZUi)(Ze.ruleValue.toolName)), Mo = (0, import_chunk_ht27b0vz.JSl)(Jt), Pe = Map.groupBy(bo, (Ze) => Ze.ruleValue.toolName), Qe = (0, import_chunk_ht27b0vz.al)(e), nt = (0, import_chunk_ht27b0vz.yBn)(e, [...Qe, ...Qe.map((Ze) => ({ ...Ze, ruleValue: { toolName: Ze.ruleValue.toolName } }))]);
    ae = new Set(o.options.tools.filter((Ze) => {
      let { name: Ht, mcpInfo: ro } = Ze, Zo, on = Pe.get(Ht);
      if (on === void 0 || ro === void 0 || Ht !== (0, import_chunk_px0hhsq7.ca)(Ze) || (0, import_chunk_px0hhsq7.Ev)(Ht) !== Ht) return false;
      return ro.serverType !== void 0 && !(0, import_chunk_xcgcdx61.Ogn)(ro.serverType) && ro.serverName !== import_chunk_qdcbcsg7.$n && !(0, import_chunk_ddznn4yb.MC)(Ht) && !(0, import_chunk_bzyb60p0.bQo)(Ht) && Ze.classifierOnly === void 0 && Ze.ignoresWholeToolAllowRule === void 0 && !(0, import_chunk_xfj2cwfv.v5i)(Ht) && !(0, import_chunk_bzyb60p0.YZr)(Ze, e) && !(0, import_chunk_5zps0wmn.Qi)("tool.check", { ...(0, import_chunk_rtsmzy7m.UO)(Ze, () => e), agentId: o.agentId }, _e) && !(0, import_chunk_ht27b0vz.EYe)(e, nt, Ze) && [...on.toReversed(), ...Mo(Ze)].every((Nt) => (0, import_chunk_wzzzxdne.ywt)(Nt, Ze, {}, Zo ??= (0, import_chunk_xcgcdx61.da)(Ze, e), o, () => te ??= (0, import_chunk_vc58gmrj.zp)(e.mode), kt) === void 0);
    }).map((Ze) => Ze.name));
  } catch (_e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(_e), "Auto mode could not filter the MCP allow rules, so it sends them to the classifier unfiltered and without mcp_allow_rules_exact"));
  }
  let oe = (0, import_chunk_px0hhsq7.L$l)(), Ae = se.filter(({ ruleValue: _e }) => !oe(_e.toolName) && !oe((0, import_chunk_px0hhsq7.ZHo)(_e.toolName, "allow")) && (0, import_chunk_px0hhsq7.u6e)(_e.toolName) === _e.toolName && !(ie && (0, import_chunk_px0hhsq7.mr)(_e.toolName) !== null) && !(ie && JS(_e)) && !(0, import_chunk_rmc00en4.wRi)(_e.toolName, e.mode, e) && !(0, import_chunk_rmc00en4.Qsl)(_e.toolName, e.mode, e) && !(0, import_chunk_rmc00en4.Zsl)(_e.toolName, e.mode, e) && !(0, import_chunk_rmc00en4.eil)(_e.toolName, e.mode, e) && !(0, import_chunk_rmc00en4.Mus)(_e.toolName, e.mode, e) && !(0, import_chunk_bzyb60p0.aKa)(_e.toolName) && !(ae !== void 0 && _e.ruleContent === void 0 && _e.toolName.startsWith(import_chunk_px0hhsq7.ch) && !ae.has(_e.toolName)) && !(_e.ruleContent === void 0 && (0, import_chunk_bzyb60p0.XZr)(_e.toolName) && (0, import_chunk_bzyb60p0.rOn)(_e.toolName, e.mode, e))), qe = (0, import_chunk_4smdap7r.bT)(Ae, (_e) => `${_e.source} ${(0, import_chunk_qebpc5de.yn)(_e.ruleValue)}`), rt = pe > import_chunk_vc58gmrj.cNn ? qe : Ae, Ue = (0, import_chunk_2yx6c1y2.aL)(), Oe = Ue?.allow ?? [], He = (0, import_chunk_khxw3ng0.EDr)(Oe) ? (0, import_chunk_vc58gmrj.Wus)() : void 0, We = He === void 0 || Oe.includes(He) ? Oe : [...Oe, He], J = (0, import_chunk_f9x2f6cx.W)(), ve = (0, import_chunk_929j4hj9.Fi)().lastExecutedTabUrlByScope.get((0, import_chunk_3mgqz62p.oor)()), G = ve === void 0 ? [] : [[J, ve]], ye = G, he = G.length === 0 ? void 0 : await XS(), dt = he !== void 0 && he.length > rf, Ge = ye.length === 0 ? void 0 : { enabled: e.chromeNavigationClassifierEnabled === true, baselines: Object.fromEntries(ye.map(([_e, te]) => [_e.slice(0, nf), (0, import_chunk_bzyb60p0.nlr)(te)])), ...he !== void 0 && { tabs: { [J.slice(0, nf)]: Object.fromEntries(he.slice(0, rf).map((_e) => [String(_e.tabId), (0, import_chunk_bzyb60p0.nlr)(_e.url)])) } } }, no = (_e) => ({ path: h(_e), resolved: y ? [] : k ? [h(_e)] : (0, import_chunk_p1ewvgeh.rLe)(_e).map(h) }), lo = (0, import_chunk_18rsj2ts.oa)(), Ft = (0, import_chunk_f9x2f6cx.ns)(), Bo = lo === null || Ft === null ? null : { live: lo, original: Ft }, jo = { permission_mode: g, platform: (0, import_chunk_cg8dqz0a.x)(), ...Bo !== null && { live_cwd: h(Bo.live) }, ...!k && { home_dir: h((0, import_os.homedir)().normalize("NFC")) }, rule_roots: Bo === null || y ? {} : Object.fromEntries(import_chunk_ht27b0vz.IRe.filter((_e) => !R(_e)).map((_e) => [_e, h((0, import_chunk_p1ewvgeh.tBn)(_e))])), trusted_directories: { ...Bo !== null && { primary: no(Bo.original) }, additional: y ? [] : Array.from(e.additionalWorkingDirectories.values(), (_e) => ({ ...no(_e.path), source: _e.source })), network: y ? [] : (0, import_chunk_4smdap7r.M)(Array.from(e.trustedNetworkDirectories?.entries() ?? [], ([_e, te]) => [_e, ...te]).flat().map(h)), block_reads_outside_working_directories: e.blockReadsOutsideWorkingDirectories === true }, rules: { allow: w("allow", rt), deny: lf(w("deny", z), z), ask: lf(w("ask", X), X) }, case_insensitive_paths: (0, import_chunk_cg8dqz0a.x)() === "windows", auto_mode: { allow: We, soft_deny: Ue?.soft_deny ?? [], hard_deny: Ue?.hard_deny ?? [], environment: Ue?.environment ?? [] }, artifact_consent_holdback: !(0, import_chunk_bzyb60p0.JJo)(), ...Ge !== void 0 && { chrome_navigation: Ge }, ...dt && { truncated: true }, restricted: e.restricted === true, is_remote_mode: e.isRemoteMode === true, ...ae !== void 0 && { mcp_allow_rules_exact: true }, classify_all_shell: (0, import_chunk_bz1f2qnq.fwe)(), user_identity: await uf((0, import_chunk_bzyb60p0.YJo)(), YS, null) };
  return (0, import_chunk_vc58gmrj.oil)(jo, pe, (_e) => {
    let te = (0, import_chunk_f9x2f6cx.W)(), kt = y ? "rulesUnread" : "whole";
    if (af[kt] === te) return;
    af[kt] = te, (0, import_chunk_y53wbr8a.a)("tengu_auto_mode_context_incomplete", { rules_left_out: y, bytes: _e.bytes, bytes_before_shedding: _e.bytesBeforeShedding, over_cap_before_shedding: _e.overCapBeforeShedding, over_cap: _e.overCap, allow_rules_shed: _e.allowRulesShed, resolved_spellings_shed: _e.resolvedSpellingsShed, path_clamped: _e.pathClamped, identity_clamped: _e.identityClamped, additional_directories: _e.additionalDirectories, network_roots: _e.networkRoots, chrome_tabs_cut: dt, truncated: _e.truncated, dropped_allow: _e.dropped.allow ?? 0, dropped_deny: _e.dropped.deny ?? 0, dropped_ask: _e.dropped.ask ?? 0, allow_rules: Ae.length, allow_rules_repeated: Ae.length - qe.length, allow_rules_distinct: (0, import_chunk_4smdap7r.M)(Ae.map((Jt) => (0, import_chunk_qebpc5de.yn)(Jt.ruleValue))).length, allow_rules_cap: pe, deny_rules: _e.denyRules, ask_rules: _e.askRules, auto_mode_allow: Oe.length, auto_mode_soft_deny: _e.autoMode.softDeny, auto_mode_hard_deny: _e.autoMode.hardDeny, auto_mode_environment: _e.autoMode.environment });
  });
}
function cf(e, o, r) {
  try {
    let g = (0, import_chunk_bz1f2qnq.Z)(e), { role: y, offReason: h } = (0, import_chunk_vc58gmrj.$on)(g.mode), k = y !== "off", R = (0, import_chunk_f9x2f6cx.zl)(o, import_chunk_xfj2cwfv.Ub);
    if ((R || !k) && h !== "not_auto_mode") {
      let Q = R ? "beta_rejected" : h;
      if (Q !== void 0 && Q !== "refused_latch") (0, import_chunk_vc58gmrj.fNn)({ state: "not_requested", reason: Q });
    }
    if (R) {
      r?.("beta_rejected");
      return;
    }
    let w = k ? void 0 : e.options.tools.filter((Q) => (0, import_chunk_bzyb60p0.yar)(Q, g)).map((Q) => Q.name), E = w && new Set(w.flatMap((Q) => [Q, ...(0, import_chunk_qebpc5de.nJ)(Q, e.options.toolAliases)]));
    if (E !== void 0 && (E.size === 0 || E.size > zS)) {
      if (h !== void 0) r?.(h);
      return;
    }
    let O = (0, import_chunk_18rsj2ts.oa)(), P = {}, I = of(e.messages, y), H = w === void 0 || w.includes(import_chunk_hn3cwwzt.ke) || w.includes(import_chunk_9xt9z453.Xo);
    return { probeTrace: P, gitStatusPlan: I, ...E !== void 0 && { judgeOnlyTools: E }, ...!H && { logged: true }, tools: e.options.tools, computerAttached: () => rT(e.toolState), ...e.options.structuredOutputIsHandback === true && { structuredOutputIsHandback: true }, context: ZS(g, e, E !== void 0 && !import_chunk_c203g5kd.s.CLAUDE_CODE_AUTO_MODE_FULL_CONTEXT).catch((Q) => {
      (0, import_chunk_k449cc64.i)(Q);
      return;
    }), git: H ? tf(O, e.abortController.signal, P, I) : Promise.resolve({ cwd: O, root: null, branch: null, default_branch: null, status: null, visibility: null }), cwd: O, startedAt: Date.now() };
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g), r?.("context_failed");
    return;
  }
}
function mf(e) {
  try {
    return (0, import_chunk_bz1f2qnq.Ewl)((0, import_chunk_bz1f2qnq.Z)(e).mode);
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function pf(e) {
  try {
    return (0, import_chunk_vc58gmrj.zp)((0, import_chunk_bz1f2qnq.Z)(e).mode) !== "off";
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
async function ff(e, o = iT) {
  if (e === void 0) return;
  try {
    return await eT(e, o);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
    return;
  }
}
async function eT(e, o) {
  let r = await e.context;
  if (r === void 0) return;
  let g = (0, import_chunk_vc58gmrj.b7)(r);
  if (g > import_chunk_vc58gmrj.nil && e.overCeilingLogged === void 0) e.overCeilingLogged = true, (0, import_chunk_y53wbr8a.a)("tengu_auto_mode_context_over_ceiling", { bytes: g });
  let y = Date.now(), h = await aT(e.git, o, e.gitStatusPlan === "await" ? import_chunk_gd77dyw4.TOe : $S, { cwd: e.cwd, root: null, branch: null, default_branch: null, status: null, visibility: null, error: "pending" }), k = (0, import_chunk_vc58gmrj.sil)({ ...h, cwd: h.cwd === null ? null : (0, import_chunk_p1ewvgeh.TU)(h.cwd), root: h.root === null ? null : (0, import_chunk_p1ewvgeh.TU)(h.root) });
  if (e.logged === void 0) {
    e.logged = true;
    let w = !df.logged;
    if (df.logged = true, e.gitStatusPlan === "await" && (k.error === "pending" || k.error === "timeout")) (0, import_chunk_cqa9hrgx.l)("auto_mode_git_status_on_demand", "status_too_slow");
    (0, import_chunk_y53wbr8a.a)("tengu_auto_mode_git_state_probe", { duration_ms: y - e.startedAt, wait_ms: Date.now() - y, outcome: (0, import_chunk_78g0060s.f)(k.error ?? (k.status === null ? e.gitStatusPlan === "skip" ? "skipped" : "no_status" : k.status.clean ? "clean" : "dirty")), truncated: k.truncated === true || k.status?.truncated === true, first_in_process: w, repo_visibility_lookup: (0, import_chunk_78g0060s.f)(sT(e, k)), ...e.cwd === null && { no_directory: true } });
  }
  let R;
  try {
    let { artifactsClassifierContext: w } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gwffxaq4.js")));
    R = w({ tools: e.tools });
  } catch (w) {
    (0, import_chunk_k449cc64.i)(w), R = void 0;
  }
  return { context: r, git: k, ...e.gitStatusPlan === "skip" && k.error !== "not_a_repo" && k.error !== "error" && { gitStatusSkipped: true }, ...R !== void 0 && { artifacts: R }, ...e.judgeOnlyTools !== void 0 && { judgeOnlyTools: e.judgeOnlyTools }, ...await nT(e) && (0, import_chunk_vc58gmrj.pil)() && { computerAttached: true }, ...e.structuredOutputIsHandback === true && { structuredOutputIsHandback: true }, ...tT() && { holdsHostHardDeny: true } };
}
function tT() {
  if (!(0, import_chunk_f9x2f6cx.st)()) return false;
  let e = (0, import_chunk_f9x2f6cx.Fd)()?.autoMode;
  return typeof e === "object" && e !== null && "hard_deny" in e;
}
async function nT(e) {
  if (e.computerAttached === void 0) return true;
  try {
    return await e.computerAttached() !== false;
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), true;
  }
}
async function rT(e) {
  if (e === void 0) return true;
  try {
    let { isComputerAttached: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-74s4d2d8.js")));
    return o(e);
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), true;
  }
}
var df = (0, import_chunk_t57w17k7.de)({ logged: false }, (e) => {
  e.logged = false;
});
function sT(e, o) {
  let r = e.probeTrace.visibility;
  switch (r?.lookup) {
    case "hit":
      return "cache_hit";
    case "joined":
      return "joined_running";
    case "fetched":
      return "own_lookup";
    default:
      return r !== void 0 && o.error === "pending" ? "not_reached" : "none";
  }
}
var iT = { setTimeout: (e, o) => {
  let r = setTimeout(e, o);
  return () => clearTimeout(r);
} };
function aT(e, o, r, g) {
  return new Promise((y) => {
    let h = false, k = o.setTimeout(() => {
      if (!h) h = true, y(g);
    }, r);
    e.then((R) => {
      if (!h) h = true, k(), y(R);
    }, () => {
      if (!h) h = true, k(), y(g);
    });
  });
}
async function hf(e, o, { querySource: r, resumeActive: g, model: y, stamp: h }) {
  if (g || (0, import_chunk_865at33z.Pr)(r) === "auxiliary") return [];
  try {
    let k = e.findLast((O) => O.type === "user" && !O.isVirtual && !O.isCompactSummary && O.taskDelivery === void 0 && !(0, import_chunk_bzyb60p0.Sm)(O));
    if (k?.type === "user" && k.handedOff) {
      let O = (0, import_chunk_bzyb60p0.uJo)();
      if (!O.commit && !O.pr) return [];
    }
    let R = await uT(e, (0, import_chunk_q2404y26.Ob)(o), y);
    if (R === void 0) return [];
    let w = e.findLast((O) => (O.type === "user" || O.type === "assistant") && !O.isVirtual) === k, E = (0, import_chunk_bzyb60p0.Iai)(e);
    if (!w && E !== void 0 && !R.managedCommit && !R.managedPr && R.url === E.url && R.sendUserFileHint === E.sendUserFileHint && R.commit === "" === (E.commit === "") && R.pr === "" === (E.pr === "")) return [];
    return [(0, import_chunk_bzyb60p0.Ut)(R, h)];
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), [];
  }
}
async function uT(e, o, r) {
  let g = (0, import_chunk_bzyb60p0.Iai)(e), y = (0, import_chunk_bzyb60p0.cJo)()?.url ?? null, h = (0, import_chunk_r60bafc1.NT)(), k = ((0, import_chunk_r60bafc1._kr)() !== void 0 || h !== null && !h.outboundOnly) && o.some((I) => (0, import_chunk_4vsz8a99.gt)(I, import_chunk_cee6q0wn.Yd)), R = (0, import_chunk_7d2qr9z5.yFn)(), w = R ? r : void 0;
  if (g === void 0) {
    let I = y !== null || k;
    if (!I && !(R && (0, import_chunk_bzyb60p0.fLt)() && (o.some((X) => (0, import_chunk_4vsz8a99.gt)(X, import_chunk_hn3cwwzt.ke)) || (0, import_chunk_w50zedgp.D7)(o)))) return;
    let { commit: H, pr: Q } = await gf(w);
    if (!I && !H && !Q) return;
    let z = (0, import_chunk_bzyb60p0.uJo)();
    return { type: "remote_session_change", url: y, commit: H, pr: Q, sendUserFileHint: k, managedCommit: z.commit, managedPr: z.pr };
  }
  let { commit: E, pr: O } = await gf(w), P = (0, import_chunk_bzyb60p0.uJo)();
  if (y === g.url && k === g.sendUserFileHint && E === g.commit && O === g.pr && P.commit === (g.managedCommit ?? false) && P.pr === (g.managedPr ?? false)) return;
  return { type: "remote_session_change", url: y, commit: E, pr: O, sendUserFileHint: k, managedCommit: P.commit, managedPr: P.pr };
}
function gf(e) {
  let o = (0, import_chunk_f9x2f6cx.ns)();
  return o === null ? (0, import_chunk_bzyb60p0.Wnt)({ model: e }) : (0, import_chunk_18rsj2ts.uh)(o, () => (0, import_chunk_bzyb60p0.Wnt)({ model: e }));
}
async function* _f(e, o, r, g) {
  let y = (0, import_chunk_q2404y26.WQ)(e, e.options.tools), h = y && (yield* Ri(y, g));
  if (h !== void 0) return { stopped: h };
  let k;
  try {
    let R = (0, import_chunk_q2404y26.vCi)(e, o);
    k = R && (0, import_chunk_bzyb60p0.Ut)(R, r);
  } catch (R) {
    (0, import_chunk_q2404y26.yCi)(R);
  }
  if (k === void 0) return { messages: o };
  return yield k, { messages: [...o, k] };
}
function Sf(e) {
  try {
    return { recorded: (0, import_chunk_fe5esh7d.TA)(e), uuids: e.map((o) => o.uuid) };
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function Vl(e, o, r) {
  try {
    return { ...e, messages: o, turnStartIndex: r(o), contextRoom: void 0, sentToolDescription: void 0 };
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), e;
  }
}
function Tf(e, o, r) {
  try {
    if (r) e.settleTaken();
    return o.filter((g) => !e.wasPutBack(g));
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), o;
  }
}
function S2o(e, o) {
  try {
    return e.wasPutBack(o);
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), false;
  }
}
function kf(e) {
  try {
    e.startRequeueWindow();
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function YVs(e) {
  try {
    e.settleTaken();
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
var cT = `${import_chunk_bp9b0hd8._Fr}
Claude's earlier thinking was written while you were signed in to another organization, so Claude can't use it now. It isn't deleted: resume this session signed in to that organization to use it again. Claude's next responses may be slower and use more tokens because it has to reread this session and generate new thinking. See docs for more: https://platform.claude.com/docs/en/build-with-claude/preserved-thinking`;
function Cf(e, { querySource: o, mainThread: r, model: g, stamp: y }) {
  if ((0, import_chunk_865at33z.Pr)(o) === "auxiliary") return [];
  try {
    let h = (0, import_chunk_cy0ck7w2.SCe)(), k = e.findLast((E) => E.type === "attachment" && E.attachment?.type === "credential_org")?.attachment.organizationUuid;
    if (h === void 0 || h === k) return [];
    let R = (0, import_chunk_bzyb60p0.Ut)({ type: "credential_org", organizationUuid: h }, y);
    if (typeof k !== "string") return [R];
    let w = r && e.some((E) => E.type === "assistant" && Array.isArray(E.message?.content) && E.message.content.some((O) => O?.type === "thinking" || O?.type === "redacted_thinking")) && (0, import_chunk_ge3qft6b.$T)("org_locked_thinking", (0, import_chunk_865at33z.St)(g), g) && (0, import_chunk_865at33z.b)("tengu_lexical_glade", false);
    return (0, import_chunk_cqa9hrgx.u)("context_credential_org_change", { warned: w }), w ? [R, (0, import_chunk_yta0vzjp.lp)(cT, "warning")] : [R];
  } catch (h) {
    return (0, import_chunk_k449cc64.i)(h), (0, import_chunk_cqa9hrgx.l)("context_credential_org_change", "record_failed"), [];
  }
}
var bf = "An image in this turn could not be sent to the API, so this tool call was cancelled. If it had already started, some of its effects may have happened.";
function Mf(e) {
  return `The turn ended on an error, so this tool call was cancelled. If it had already started, some of its effects may have happened. Error: ${e}`;
}
var mT = { safety_monitor_block: "tool cancel failed after safety monitor block", image_error: "tool cancel failed after image error", model_error: "tool cancel failed after model error" };
function Vr(e, o) {
  let r = new Set(Af(e)), g = [];
  try {
    g = e.streamingToolExecutor.takeFinishedResults();
    let { removes: y } = Qr(e.streamingToolExecutor, o);
    return e.rebuildStreamingToolExecutor(), { removes: y, answeredToolUseIds: r, finishedResults: g };
  } catch (y) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(y), mT[o])), { removes: void 0, answeredToolUseIds: r, finishedResults: g };
  }
}
function Ef(e) {
  return /* @__PURE__ */ new Set([...Af(e), ...e.toolResults.flatMap((o) => o.type === "attachment" && o.attachment.type === "hook_deferred_tool" ? [(0, import_chunk_bzyb60p0.Aie)(o.attachment)] : [])]);
}
function Af(e) {
  return e.toolResults.flatMap((o) => o.type === "user" && Array.isArray(o.message.content) ? o.message.content.filter((r) => r.type === "tool_result").map((r) => r.tool_use_id) : []);
}
function xi(e) {
  return e?.isApiErrorMessage === true && e.apiError === import_chunk_865at33z.$xe;
}
function Rf(e) {
  return e.needsFollowUp = false, Vr(e, "safety_monitor_block");
}
function wf(e, { options: o, querySource: r, model: g, agentId: y, stickyBetas: h, turnStart: k, resumeActive: R, wroteCutRecord: w, thinkingIsOn: E, stamp: O }) {
  if (!k || R || o.bareFork || (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_865at33z.Pr)(r) === "auxiliary") return [];
  try {
    if ((0, import_chunk_bzyb60p0.fZt)() !== "on" || !(0, import_chunk_865at33z.b)(import_chunk_bzyb60p0.Ndi, false) || !(0, import_chunk_bzyb60p0.Udi)(e)) return [];
    let P = !(0, import_chunk_f9x2f6cx.zl)(h, import_chunk_xfj2cwfv.J_) && (0, import_chunk_865at33z.E_)(g), I = !w ? (0, import_chunk_bzyb60p0.Dar)(e, r, g, y, void 0, void 0, P, { plansAheadOfNote: true, thinkingIsOn: E })?.returnAfterIdle : P ? (0, import_chunk_bzyb60p0.AJo)(e, r, y, g, () => true) : void 0;
    if (!I || I.repliesSinceIdle > 0 || (0, import_chunk_bzyb60p0.$di)(e, I.returnIndex)) return [];
    let H = (0, import_chunk_bzyb60p0.Ut)({ type: "critical_system_reminder", content: import_chunk_bzyb60p0.Fdi, onlyAsSystemMessage: true }, O);
    return (0, import_chunk_cqa9hrgx.u)("compact_cleared_results_note"), [H];
  } catch (P) {
    return (0, import_chunk_k449cc64.i)(P), (0, import_chunk_cqa9hrgx.l)("compact_cleared_results_note", "note_failed"), [];
  }
}
function vf(e, o, { options: r, querySource: g, resumeActive: y, turnStart: h, takesSystemMessages: k, stamp: R }) {
  let w = (0, import_chunk_gkm2eky6.Eel)();
  if (w === void 0 || y || r.bareFork || (0, import_chunk_865at33z.Pr)(g) !== "main") return [];
  try {
    let E = k(), O = e.flatMap((z) => z.type === "attachment" && z.attachment?.type === "critical_system_reminder" && typeof z.attachment.content === "string" && (E || !z.attachment.onlyAsSystemMessage) ? [z.attachment.content] : []).findLast((z) => (0, import_chunk_gkm2eky6.nds)([z]) || (0, import_chunk_gkm2eky6.BEi)(z)), P = (0, import_chunk_fe5esh7d.spe)(e, r)?.systemPrompt ?? o, I = O === void 0 ? (0, import_chunk_gkm2eky6.nds)(P) || P.some((z) => (0, import_chunk_gkm2eky6.BEi)(z) && !o.includes(z)) : O !== w.off;
    if (I === (0, import_chunk_gkm2eky6.nds)(o)) return [];
    let H = h ? S$e(e, r.tools).at(-1) : void 0, Q = !h || H?.type === "user" && (0, import_chunk_wzzzxdne.SG)(H.message.content);
    return Q && !E ? [] : [(0, import_chunk_bzyb60p0.Ut)({ type: "critical_system_reminder", content: I ? w.off : w.on, ...Q && { onlyAsSystemMessage: true } }, R)];
  } catch (E) {
    return (0, import_chunk_k449cc64.i)(E), [];
  }
}
function xf(e, o, { options: r, querySource: g, resumeActive: y, stamp: h }) {
  if (y || r.bareFork || (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_865at33z.Pr)(g) === "auxiliary") return [];
  try {
    if (((0, import_chunk_fe5esh7d.spe)(e, r)?.systemPrompt ?? o).some((E) => E.includes(import_chunk_bzyb60p0.W0t))) return [];
    let R = (0, import_chunk_ghnve1xk.Gft)((0, import_chunk_bzyb60p0.CTe)()), w = false;
    for (let E of e) {
      let O = E.type === "attachment" ? E.attachment : void 0;
      if (O?.type === "critical_system_reminder" && O.content === import_chunk_bzyb60p0.W0t) return [];
      let P = null;
      if (E.type === "user" && (0, import_chunk_865at33z.$u)(E.origin ?? void 0)) P = (0, import_chunk_bzyb60p0.wu)(E.message?.content);
      else if (O?.type === "queued_command" && (0, import_chunk_865at33z.$u)((0, import_chunk_xfj2cwfv.K0)(O.origin, O.commandMode))) P = (0, import_chunk_bzyb60p0.wu)(O.prompt);
      w ||= O?.type === "file" && O.pastedContentTag === "around" || (P?.includes(R) ?? false);
    }
    if (!w) return [];
    return (0, import_chunk_cqa9hrgx.u)("context_pasted_content_note"), [(0, import_chunk_bzyb60p0.Ut)({ type: "critical_system_reminder", content: import_chunk_bzyb60p0.W0t }, h)];
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), (0, import_chunk_cqa9hrgx.l)("context_pasted_content_note", "note_failed"), [];
  }
}
async function Of(e, o, { options: r, getToolPermissionContext: g, agentId: y, querySource: h, carrier: k, modelFacts: R }) {
  try {
    let { attachment: w } = e;
    if (w.type !== "prompt_snapshot" || w.tools !== void 0 || y !== void 0 || (0, import_chunk_865at33z.Pr)(h) !== "main") return;
    let { tools: E, agentDefinitions: O } = r, P = (0, import_chunk_b83x8d52.qrn)(E, k), I = [import_chunk_5t8k9r3t.kQn, import_chunk_5t8k9r3t.EQn, import_chunk_5t8k9r3t.vQn].flatMap((z) => (0, import_chunk_4vsz8a99.tn)(P, z) ?? []);
    if (I.length === 0) return;
    let H = (0, import_chunk_bzyb60p0.Gen)(k, o, r, R, E, await g()), Q = [];
    for (let z of I) if (z.inputJSONSchema !== void 0 && !(0, import_chunk_179jgyn9.cN)(z, H, E)) Q.push({ name: z.name, description: await z.prompt({ getToolPermissionContext: g, tools: E, agents: O.activeAgents, allowedAgentTypes: O.allowedAgentTypes }), input_schema: z.inputJSONSchema });
    if (Q.length > 0) w.declaredTools = Q, (0, import_chunk_cqa9hrgx.u)("chat_enable_tools_recorded", { count: Q.length });
  } catch (w) {
    (0, import_chunk_cqa9hrgx.m)("chat_enable_tools_recorded", "threw"), (0, import_chunk_k449cc64.i)(w);
  }
}
function Pi(e, o) {
  try {
    let r = Map.groupBy(o, ([, g]) => g);
    for (let [g, y] of r) {
      let h = (0, import_chunk_07r720jc.HT)(g);
      (0, import_chunk_yg9g0473.c7)(g, "rewrote the prompt, so its cache starts over", "once");
      for (let [k] of y) (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_prompt_rewrite", { ...h !== void 0 && (0, import_chunk_1ea72zr6.P5)(h), [e]: k });
    }
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
  }
}
var Pf = { epoch: 0, owed: /* @__PURE__ */ new Set() };
function gT() {
  let e = { standings: /* @__PURE__ */ new WeakMap() };
  function o(h, k) {
    try {
      if (h === void 0 || h.toolDescriptions.size === 0) return k > 0 ? { names: Pf.owed, epoch: k } : void 0;
      let R = e.standings.get(h.record) ?? Pf, w = k > R.epoch;
      if (!w && R.owed.size === 0) return;
      let E = [...h.toolDescriptions.keys()].filter(w ? import_chunk_179jgyn9.MKl : (P) => R.owed.has(P));
      return w || E.length > 0 ? { names: new Set(E), epoch: Math.max(k, R.epoch) } : void 0;
    } catch (R) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(R));
      return;
    }
  }
  let r = (h, k, R) => void e.standings.set(h, { epoch: k.epoch, owed: new Set([...k.names].filter((w) => !R.has(w))) });
  function g(h, k) {
    let R = e.standings.get(h);
    if (R !== void 0) e.standings.set(k, R);
  }
  return { redescribing: o, noteRedescribed: r, noteCopied: g, forgetStandings: () => {
    e.standings = /* @__PURE__ */ new WeakMap();
  } };
}
var Yr = (0, import_chunk_t57w17k7.de)(gT(), (e) => e.forgetStandings());
function If(e) {
  try {
    return e.settingsHooksOff ? void 0 : (0, import_chunk_179jgyn9.DKl)();
  } catch (o) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
    return;
  }
}
var yT = 16;
function hT() {
  let e = /* @__PURE__ */ new Map();
  function o(g, y) {
    e.delete(g), e.set(g, y);
    for (let h of [...e.keys()].slice(0, -yT)) e.delete(h);
  }
  function r(g, y, h) {
    try {
      let k = e.get(g.systemPromptHash);
      if (h === void 0 || !h.isFresh) return;
      if (k === void 0) {
        o(g.systemPromptHash, h.answers);
        return;
      }
      let R = _T(k, h.answers), w = [...R].filter(([Q]) => h.answers.get(Q)?.breaker !== void 0), E = new Set(g.systemPrompt), O = [...R].some(([Q, { before: z, after: X }]) => X === null && E.has(z) && h.answers.get(Q)?.breaker === void 0), P = new Map(O ? w.filter(([, { before: Q }]) => Q === null || E.has(Q)) : w), I = new Map([...R].flatMap(([Q, { before: z, after: X }]) => P.has(Q) || X === null || z === void 0 ? [] : [[X, z]])), H = TT(g.systemPrompt, (0, import_chunk_4mh8nmh5.Sl)(y.flatMap((Q) => {
        let z = I.get(Q);
        return z === void 0 ? [Q] : z ?? [];
      })), [...P.values()]);
      if (H !== void 0 || k === "behind") o(H === void 0 ? g.systemPromptHash : (0, import_chunk_fe5esh7d.vfo)(H), ST({ held: k, answers: h.answers, owed: P, sent: H }));
      if (H !== void 0) Pi("section", [...P].flatMap(([Q, z]) => {
        let X = h.answers.get(Q)?.breaker, re = Uf(z, H), pe = (0, import_chunk_bzyb60p0.oJr)(Q);
        return X !== void 0 && re ? [[(0, import_chunk_865at33z.zIl)(pe), X]] : [];
      }));
      return H;
    } catch (k) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(k));
      return;
    }
  }
  return { owedPrompt: r, noteRendered: (g, y) => {
    if (y !== void 0) o(g, y.isFresh ? y.answers : "behind");
  }, notedCount: () => e.size, forgetStandings: () => e.clear() };
}
var Yl = (0, import_chunk_t57w17k7.de)(hT(), (e) => e.forgetStandings());
function Di(e, o) {
  try {
    return !e.options.settingsHooksOff && e.agentId === void 0 ? { isFresh: o === (0, import_chunk_f9x2f6cx.I1e)(), answers: (0, import_chunk_bzyb60p0.$zl)() } : void 0;
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    return;
  }
}
function Ii(e) {
  return e === "" ? null : e;
}
function _T(e, o) {
  return new Map([...o].flatMap(([r, g]) => {
    let y = e === "behind" ? void 0 : e.get(r), h = Ii(g.answer), k = y === void 0 ? void 0 : Ii(y.answer), R = y !== void 0 && k !== Ii(y.text), w = h !== Ii(g.text);
    return h !== k && (R || w) && (h !== null || typeof k === "string") ? [[r, { before: k, after: h }]] : [];
  }));
}
function Uf(e, o) {
  return e?.after === null ? o?.includes(e.before ?? "") === false : typeof e?.after === "string" && o?.includes(e.after) === true;
}
function ST({ held: e, answers: o, owed: r, sent: g }) {
  return new Map([...o].flatMap(([y, h]) => {
    let k = r.get(y), R = e === "behind" ? void 0 : e.get(y), w = Uf(k, g) ? h : R;
    return w === void 0 ? [] : [[y, w]];
  }));
}
function TT(e, o, r) {
  let g = Ff(e), y = Ff(o), h = e.filter((H) => H !== "" && g.counts.get(H) === 1 && y.counts.get(H) === 1), k = h.map((H) => y.places.get(H) ?? -1), R = k.every((H, Q) => Q === 0 || (k[Q - 1] ?? H) < H), w = r.flatMap(({ before: H, after: Q }) => {
    let z = typeof H === "string" && g.counts.get(H) === 1 && !y.counts.has(H);
    return Q === null && !z ? [] : [{ before: z || H === null ? H : void 0, after: Q }];
  }), E = [...h, void 0].flatMap((H, Q) => {
    let z = h[Q - 1], X = kT(Df(g, z, H), Df(y, z, H), w);
    return H === void 0 ? X : [...X, H];
  }), O = E.filter((H) => H !== ""), P = e.filter((H) => H !== ""), I = O.length === P.length && O.every((H, Q) => H === P[Q]);
  return !R || I ? void 0 : (0, import_chunk_4mh8nmh5.Sl)(E);
}
function Ff(e) {
  let o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (let [g, y] of e.entries()) o.set(y, (o.get(y) ?? 0) + 1), r.set(y, g);
  return { parts: e, counts: o, places: r };
}
function Df(e, o, r) {
  return e.parts.slice(o === void 0 ? 0 : (e.places.get(o) ?? -1) + 1, r === void 0 ? e.parts.length : e.places.get(r));
}
function Lf(e, o, r) {
  return e.filter((g) => o.some((y) => y.after === g && y.before === r));
}
function kT(e, o, r) {
  let g = o.filter((E) => E !== ""), y = r.filter((E) => E.after === null || g.includes(E.after)), h = e.flatMap((E) => {
    let O = y.find((P) => P.before === E);
    return O === void 0 ? [E] : O.after ?? [];
  }), k = e.filter((E) => E !== "" && !y.some((O) => O.before === E)), R = Lf(g, y, void 0);
  return g.every((E) => y.some((O) => O.after === E)) && k.length === R.length && (R.length > 0 || Lf(g, y, null).length > 0) ? g : h;
}
function Tr({ options: e, querySource: o }) {
  return !e.bareFork && (0, import_chunk_865at33z.Pr)(o) !== "auxiliary";
}
function Nf(e, o) {
  let { fold: r, cached: g } = (0, import_chunk_bzyb60p0.Hja)(o);
  try {
    (0, import_chunk_y53wbr8a.a)("tengu_reminder_fold_recorded", { recorded: r !== void 0, ...r !== void 0 && { fold: r }, carriedForward: e, inherited: o !== void 0, cached: g.value, cachedSource: (0, import_chunk_78g0060s.f)(g.source) });
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
  }
  return r;
}
var Bf = ["systemTurns", "toolChangeHeader", "inlineTools", "keptReminders", "toolResultSafeguards"];
function CT(e, o) {
  if (o === void 0 || !(0, import_chunk_865at33z.Hc)()) return { wireShape: e, changed: false };
  let r = (0, import_chunk_fe5esh7d.Efo)({ systemTurns: o.systemTurns ?? e.systemTurns, toolChangeHeader: o.toolChangeHeader ?? e.toolChangeHeader, inlineTools: o.inlineTools ?? e.inlineTools, keptReminders: o.keptReminders ?? e.keptReminders, toolResultSafeguards: o.toolResultSafeguards ?? e.toolResultSafeguards, systemTurnsAnsweredBy: o.systemTurnsAnsweredBy ?? e.systemTurnsAnsweredBy, projectDocsAsDocuments: o.projectDocsAsDocuments ?? e.projectDocsAsDocuments, effortAfterText: e.effortAfterText, leadingTools: e.leadingTools }), g = Bf.some((y) => r[y] !== e[y]);
  if (g) try {
    let { systemTurnsAnsweredBy: y, projectDocsAsDocuments: h, effortAfterText: k, leadingTools: R, ...w } = r;
    (0, import_chunk_y53wbr8a.a)("tengu_wire_shape_recorded", { ...w, overwrote: Bf.some((E) => e[E] !== void 0 && r[E] !== e[E]) });
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
  }
  return { wireShape: r, changed: g || r.systemTurnsAnsweredBy !== e.systemTurnsAnsweredBy || r.projectDocsAsDocuments !== e.projectDocsAsDocuments };
}
function jf(e, o) {
  let { echo: r, cached: g } = (0, import_chunk_bzyb60p0.j2a)(o);
  try {
    (0, import_chunk_y53wbr8a.a)("tengu_wire_tool_input_echo_recorded", { recorded: r !== void 0, ...r !== void 0 && { echo: r }, carriedForward: e, inherited: o !== void 0, cached: g.value, cachedSource: (0, import_chunk_78g0060s.f)(g.source) });
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
  }
  return r;
}
function qf(e, o) {
  if (o === void 0) return;
  try {
    (0, import_chunk_y53wbr8a.a)("tengu_context_rendering_recorded", { rendering: (0, import_chunk_78g0060s.f)(o), carriedForward: e });
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
  return o;
}
function Wf(e, o, r) {
  let g = MT(e, o, r);
  try {
    let y = (0, import_chunk_fe5esh7d.tM)(e, r.options);
    if (y !== void 0 && g.record?.attachment.type === "prompt_snapshot") Yr.noteCopied(y.record, g.record.attachment);
    if (g.source === "live_recorded" && g.snapshotHash && !g.rewritten) Yl.noteRendered(g.snapshotHash, r.turnSections);
    let h = r.toolDescribeEpoch !== void 0 && Tr(r) ? Yr.redescribing(y, r.toolDescribeEpoch) : void 0;
    return h === void 0 ? g : { ...g, redescribing: h };
  } catch (y) {
    return (0, import_chunk_k449cc64.i)(y), g;
  }
}
function MT(e, o, { resumeActive: r, stamp: g, inheritedReminderFold: y, inheritedWireShape: h, inheritedEchoWireToolInputs: k, leadingTools: R, contextRendering: w, turnSections: E, ...O }) {
  let P = { systemPrompt: o, toolDescriptions: void 0, toolEntries: void 0, toolServers: void 0, recordedCliPrefix: void 0, recordedWireShape: void 0, record: void 0, source: "live_unrecorded", snapshotHash: void 0 };
  try {
    if (!(0, import_chunk_fe5esh7d.QSe)(O.options)) return P;
    let I = (0, import_chunk_fe5esh7d.tM)(e, O.options), H = I !== void 0 && ((0, import_chunk_fe5esh7d.Jus)(e) || (0, import_chunk_k67pwqya.xwl)(I.systemPrompt, o)), Q = I !== void 0 && !H && !r && Tr(O) && (0, import_chunk_865at33z.Pr)(O.querySource) === "main" ? Yl.owedPrompt(I, o, E) : void 0, z = Q !== void 0, X = H || z, re = Q ?? o;
    if (I && (!X || r || !Tr(O))) {
      let qe = !X && !r && Tr(O), rt = qe && I.reminderFold === void 0 && (0, import_chunk_bzyb60p0.cxn)() ? Nf(true, y?.()) : void 0, Ue = qe && I.echoWireToolInputs === void 0 && (0, import_chunk_bzyb60p0.Iir)() ? jf(true, k?.()) : void 0, Oe = qe && I.contextRendering === void 0 && (0, import_chunk_fe5esh7d.n_r)() ? qf(true, w) : void 0, He = I.reminderFold ?? rt, We = I.echoWireToolInputs ?? Ue, J = I.contextRendering ?? Oe;
      return { systemPrompt: I.systemPrompt, toolDescriptions: I.toolDescriptions, toolEntries: I.toolEntries, toolServers: I.toolServers, recordedCliPrefix: I.cliPrefix, recordedWireShape: I.wireShape, record: rt !== void 0 || Ue !== void 0 || Oe !== void 0 ? (0, import_chunk_bzyb60p0.Ut)({ type: "prompt_snapshot", systemPrompt: [...I.systemPrompt], ...I.toolDescriptions.size > 0 && { tools: (0, import_chunk_fe5esh7d.Xus)(I) }, ...I.cliPrefix !== void 0 && { cliPrefix: I.cliPrefix }, ...He !== void 0 && { reminderFold: He }, ...(0, import_chunk_fe5esh7d.Efo)(I.wireShape), ...We !== void 0 && { echoWireToolInputs: We }, ...J !== void 0 && { contextRendering: J } }, g) : void 0, source: "from_snapshot", snapshotHash: I.systemPromptHash };
    }
    if (r || !Tr(O)) return P;
    let pe = I?.reminderFold ?? ((0, import_chunk_bzyb60p0.cxn)() ? Nf(I !== void 0, y?.()) : void 0), ie = I?.wireShape ?? (0, import_chunk_fe5esh7d.sal)(h?.()), se = ie === void 0 && (0, import_chunk_865at33z.Pr)(O.querySource) === "main" && !e.some((qe) => qe.type === "assistant"), le = ie === void 0 ? R?.(se) : void 0, ae = le?.length ? { leadingTools: le } : ie, oe = I?.echoWireToolInputs ?? ((0, import_chunk_bzyb60p0.Iir)() ? jf(I !== void 0, k?.()) : void 0), Ae = I?.contextRendering ?? ((0, import_chunk_fe5esh7d.n_r)() ? qf(I !== void 0, w) : void 0);
    return { systemPrompt: re, toolDescriptions: I?.toolDescriptions, toolEntries: I?.toolEntries, toolServers: I?.toolServers, recordedCliPrefix: I?.cliPrefix, recordedWireShape: ae, record: (0, import_chunk_bzyb60p0.Ut)({ type: "prompt_snapshot", systemPrompt: [...re], ...I !== void 0 && I.toolDescriptions.size > 0 && { tools: (0, import_chunk_fe5esh7d.Xus)(I) }, ...I?.cliPrefix !== void 0 && { cliPrefix: I.cliPrefix }, ...pe !== void 0 && { reminderFold: pe }, ...(0, import_chunk_fe5esh7d.Efo)(ae), ...oe !== void 0 && { echoWireToolInputs: oe }, ...Ae !== void 0 && { contextRendering: Ae } }, g), source: "live_recorded", snapshotHash: (0, import_chunk_fe5esh7d.vfo)(re), atRenderPoint: z || H && I !== void 0 && !(0, import_util.isDeepStrictEqual)([...re], [...I.systemPrompt]), ...z && { rewritten: z } };
  } catch (I) {
    return (0, import_chunk_k449cc64.i)(I), P;
  }
}
function Xl(e, o, { head: r, stamp: g, handed: y, ...h }) {
  try {
    if (o === void 0 || !(0, import_chunk_fe5esh7d.QSe)(h.options) || !Tr(h)) return;
    let k = (0, import_chunk_fe5esh7d.spe)(e, h.options);
    if (!k) return;
    let R = o.filter((X) => !k.toolDescriptions.has(X.name)), w = new Map(o.flatMap((X) => y?.names.has(X.name) === true && k.toolDescriptions.get(X.name) !== X.description ? [[X.name, X]] : []));
    Pi("toolName", [...w].map(([X, re]) => [(0, import_chunk_865at33z.b6t)(X, re.server !== void 0), (0, import_chunk_179jgyn9.rTi)(X) ?? "hooks"]));
    let E = new Set(o.map((X) => X.name)), O = k.toolDescriptions.has(import_chunk_t99xdws4.co) && !E.has(import_chunk_t99xdws4.co) && (0, import_chunk_bzyb60p0.BOn)() ? /* @__PURE__ */ new Set([import_chunk_t99xdws4.co]) : void 0, P = k.cliPrefix ?? r?.cliPrefix, I = P !== k.cliPrefix, { wireShape: H, changed: Q } = CT(k.wireShape, r?.wireShape);
    if (R.length === 0 && w.size === 0 && !I && !Q && O === void 0) {
      if (y !== void 0) Yr.noteRedescribed(k.record, y, E);
      return;
    }
    let z = (0, import_chunk_bzyb60p0.Ut)({ type: "prompt_snapshot", systemPrompt: [...k.systemPrompt], tools: [...(0, import_chunk_fe5esh7d.Xus)(k, O).map((X) => w.get(X.name) ?? X), ...R].map(({ name: X, description: re, schema: pe, server: ie }) => ({ name: X, description: re, ...pe && { schema: pe }, ...ie !== void 0 && { server: ie } })), ...P !== void 0 && { cliPrefix: P }, ...k.reminderFold !== void 0 && { reminderFold: k.reminderFold }, ...H, ...k.echoWireToolInputs !== void 0 && { echoWireToolInputs: k.echoWireToolInputs }, ...k.contextRendering !== void 0 && { contextRendering: k.contextRendering } }, g);
    if (z.attachment.type === "prompt_snapshot") {
      if (Yr.noteCopied(k.record, z.attachment), y !== void 0) Yr.noteRedescribed(z.attachment, y, E);
    }
    return z;
  } catch (k) {
    (0, import_chunk_k449cc64.i)(k);
    return;
  }
}
function JEa(e) {
  return (0, import_chunk_bzyb60p0.Ut)((0, import_chunk_fe5esh7d.aal)(), e);
}
function Gf(e, o, { stamp: r, toolInputCopies: g, ...y }) {
  try {
    if (!Tr(y)) return;
    if (o === void 0 && (g?.size ?? 0) === 0) return;
    let h = (0, import_chunk_fe5esh7d.tj)(e), k = /* @__PURE__ */ new Map();
    for (let O of o?.entries ?? []) if (!k.has(O.name) && !(0, import_util.isDeepStrictEqual)(h.entries.get(O.name), O)) k.set(O.name, O);
    let R = [...o?.nameOnlyAnnouncements ?? []].filter((O) => !h.nameOnlyAnnouncements.has(O)), w = [...o?.strippedReferences ?? []].filter((O) => !h.strippedReferences.has(O)), E = [...g ?? []].filter(([O, P]) => h.toolInputCopies.get(O) !== P).map(([O, P]) => ({ id: O, copy: P }));
    if (k.size === 0 && R.length === 0 && w.length === 0 && E.length === 0) return;
    return (0, import_chunk_bzyb60p0.Ut)({ type: "deferred_tools_record", entries: [...k.values()], ...R.length > 0 && { nameOnlyAnnouncements: R }, ...w.length > 0 && { strippedReferences: w }, ...E.length > 0 && { toolInputCopies: E } }, r);
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
    return;
  }
}
async function Qf(e, o, r) {
  let { signal: g } = o.abortController;
  try {
    g.throwIfAborted();
    let y = (0, import_chunk_f9x2f6cx.I1e)(), h = await (0, import_chunk_5appeerh.Tn)(e(o.options, r), g, () => new import_chunk_jv7av99m.Ie());
    if (o.agentId !== void 0) (0, import_chunk_p1ewvgeh.Vyl)(o.agentId);
    return { systemPrompt: h, promptRenderEpoch: y, sampledSections: Di(o, y) };
  } catch (y) {
    if (!g.aborted) (0, import_chunk_k449cc64.i)(y);
    return;
  }
}
function $f(e, o, r = []) {
  if (o === void 0) return false;
  try {
    e.needsFollowUp = true;
    let g = (0, import_chunk_bzyb60p0.jTe)(r);
    e.toolResults.push(...r);
    for (let y of o) {
      let h = y.message.content.filter((k) => k.type === "tool_use" && !g.has(k.id));
      e.assistantMessages.push(y), e.toolUseBlocks.push(...h);
      for (let k of h) e.streamingToolExecutor.addTool(k, y);
    }
    return true;
  } catch (g) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(g), "kept first response not taken")), e.reset({ clearAssistantMessages: true }), false;
  }
}
function Vf(e) {
  return { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: e.flatMap((o) => Array.isArray(o.message.content) ? o.message.content.flatMap((r) => r.type === "tool_use" ? [r.id] : []) : []) } };
}
function Yf({ createStreamingToolExecutor: e, onReset: o }) {
  let r = { assistantMessages: [], toolResults: [], toolUseBlocks: [], scriptRows: [], toolDurations: [], needsFollowUp: false, toolRequestedEndTurn: false, shouldPreventContinuation: false, toolWasDeferred: false, streamingToolExecutor: e(), reset({ clearAssistantMessages: g }) {
    if (g) r.assistantMessages.length = 0;
    r.toolResults.length = 0, r.toolUseBlocks.length = 0, r.scriptRows.length = 0, r.toolDurations.length = 0, r.needsFollowUp = false, r.toolRequestedEndTurn = false, r.shouldPreventContinuation = false, r.toolWasDeferred = false, o?.();
  }, rebuildStreamingToolExecutor() {
    r.streamingToolExecutor = e();
  }, *abandonAttempt(g, y) {
    for (let k of r.assistantMessages) yield { type: "tombstone", message: k };
    for (let k of r.toolResults) yield { type: "tombstone", message: k };
    r.reset({ clearAssistantMessages: true });
    let { removes: h } = Qr(r.streamingToolExecutor, g, y);
    if (r.rebuildStreamingToolExecutor(), h) yield h;
  } };
  return r;
}
function zf(e) {
  return e.type === "attachment" && e.rendered?.length && !(e.attachment.type === "invoked_skills" && e.attachment.mcpSkillEntries?.length) ? [(0, import_chunk_w578pjby._)([e.attachment.type, e.rendered])] : [];
}
function Jf(e) {
  let o = new Set(e.messagesToKeep.flatMap(zf)), r = (g) => !zf(g).some((y) => o.has(y));
  return { ...e, attachments: e.attachments.filter(r), hookResults: e.hookResults.filter(r) };
}
function Zf() {
  return { sessionId: (0, import_chunk_f9x2f6cx.W)(), gates: { emitToolUseSummaries: import_chunk_c203g5kd.s.CLAUDE_CODE_EMIT_TOOL_USE_SUMMARIES === true, isAnt: false, fastModeEnabled: !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_FAST_MODE } };
}
function ET(e, o, r) {
  if (e === void 0) return eg(r, o);
  if (!e.backfillObservableInput) return null;
  let g = { ...o };
  try {
    let y = e.backfillObservableInput(g) === true;
    return Object.keys(g).some((k) => !(k in o)) || y ? g : null;
  } catch (y) {
    if (y instanceof import_chunk_n2dbhmj2.f3 || y instanceof import_chunk_n2dbhmj2.oce) return (0, import_chunk_w578pjby.t)(`${e.name}: backfillObservableInput met a path that is refused (${y.name}); passing the tool input on as the model sent it`), null;
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(y), "backfillObservableInput threw")), eg(r, o);
  }
}
async function og(e, o, r, g) {
  try {
    let y = await e?.deriveObservableInput?.(o, g);
    if (y !== void 0) return y;
  } catch (y) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(y), "deriveObservableInput threw"));
  }
  return ET(e, o, r);
}
function eg(e, o) {
  return e === import_chunk_bne5t4g3.Ln ? (0, import_chunk_bne5t4g3.NVn)(o) ?? null : null;
}
function ng(e) {
  return async function* (o, r) {
    for await (let g of e(o, r)) {
      if (g.type === "assistant") g[import_chunk_865at33z.Rpn] = true;
      yield g;
    }
  };
}
function sg() {
  return { callModel: ng(import_chunk_bzyb60p0.xIn), autocompact: import_chunk_bzyb60p0.gts, uuid: import_crypto3.randomUUID, now: () => (/* @__PURE__ */ new Date()).toISOString() };
}
var Jl = 10, ig = 20, Ui = { maxOutputTokensRecoveryCount: 0, serverErrorCutRetryCount: 0, hasAttemptedReactiveCompact: false, reactiveCompactDeeperPass: "none" }, Zl = { ...Ui, thinkingOnlyNudged: false, emptyCompletionResent: false, malformedToolUseRetryCount: 0, stopHookBlockingCount: 0 };
function ag(e) {
  return e.length > 0 && e.every((o) => o.name === import_chunk_x1z3yh1m.q6 || o.name === import_chunk_x1z3yh1m.gAe || o.name === import_chunk_f6abynt8.e$t || o.name === import_chunk_0ty8qx28.ast);
}
async function lg(e) {
  try {
    return await e();
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
function dg({ terminal: e, querySource: o, agentContext: r, hasActiveGoal: g, startedAt: y }) {
  try {
    let h = (0, import_chunk_865at33z.Pr)(o);
    (0, import_chunk_y53wbr8a.a)("tengu_turn_end", { terminal_reason: (0, import_chunk_78g0060s.f)(e.reason), error_kind: (0, import_chunk_78g0060s.fe)(e.reason === "api_error" ? e.errorKind ?? "unknown" : void 0), is_error: (0, import_chunk_xrav2tvh.Ome)(e.reason), turn_count: e.reason === "max_turns" ? e.turnCount : void 0, is_subagent: (0, import_chunk_865at33z.ghe)(r), goal_active: h === "main" && (0, import_chunk_865at33z.mp)(r) && g, duration_ms: Math.max(0, Math.round(performance.now() - y)), query_source: (0, import_chunk_865at33z.ka)(o), query_source_category: (0, import_chunk_78g0060s.fe)(h) });
  } catch (h) {
    (0, import_chunk_w578pjby.t)(`tengu_turn_end: analytics sink threw, event dropped: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "error" });
  }
}
function td(e) {
  try {
    if (e.message.stop_reason === "stop_sequence") e.message.stop_reason = "tool_use", e.message.stop_sequence = null;
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function od(e, o) {
  try {
    return e?.reason === "next_turn" && o.toolUseBlocks.length === 0 && (0, import_chunk_f9x2f6cx.VS)() !== void 0;
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), false;
  }
}
function ug(e, o) {
  if (e.isApiErrorMessage && o.needsFollowUp && o.toolRequestedEndTurn === false && !o.shouldPreventContinuation && !o.toolWasDeferred) td(e);
}
function mg(e, { session: o, agentId: r }, g, y, h) {
  let k = (0, import_chunk_bzyb60p0.afe)(e);
  try {
    let R = (0, import_chunk_24am9sn7.OYt)(e, g, y, "estimate");
    if (!(0, import_chunk_bzyb60p0.lHe)(R)) return { window: R };
    let w = import_chunk_szvrpg0x.iO.of(o.host), E = (0, import_chunk_bzyb60p0.Vw)(g, k), O = (0, import_chunk_bzyb60p0.Vw)(g, R);
    if ((0, import_chunk_865at33z.Pr)(h) !== "auxiliary" && w.claimIfChanged(`auto_compact_fixed_load:${o.id}:${r ?? ""}`, `${g.settingsKey}|${R.loadTokens}`)) (0, import_chunk_y53wbr8a.a)("tengu_auto_compact_raised_for_load", { querySource: (0, import_chunk_865at33z.ka)(h), estimatedTokens: R.loadTokens, limit: E, autoCompactThreshold: O }), (0, import_chunk_cqa9hrgx.u)("compact_fixed_load_window");
    if (!(0, import_chunk_bzyb60p0.f5)(h, r)) return { window: R };
    let P = (0, import_chunk_bzyb60p0.ip)(y, g.bytesPerToken) + (0, import_chunk_bzyb60p0.Z2)(y);
    if (P < E || P >= O || !w.claim(`auto_compact_fixed_load_notice:${o.id}`)) return { window: R };
    let [I, H] = [k, R].map((z) => (0, import_chunk_f64qna2j.go)((0, import_chunk_bzyb60p0.ES)(g, z).window)), Q = (0, import_chunk_865at33z.zZ)("context");
    return { window: R, notice: `Raised this conversation's auto-compact window from ${I} to ${H} tokens${Q === void 0 ? ", to fit what loads with every request" : ` \xB7 ${Q} to see why`}` };
  } catch (R) {
    return (0, import_chunk_k449cc64.i)(R), (0, import_chunk_cqa9hrgx.m)("compact_fixed_load_window", "threw"), { window: k };
  }
}
function nd(e) {
  return e.refusalOverride ?? e.consentOverride ?? e.liveSwitchOverride ?? e.chainModel ?? e.primaryModel;
}
function pg(e) {
  let { pickSeen: o, livePick: r, userModel: g, turn: y, resolveLiveModel: h } = e, k = y.refusalOverride !== void 0 || y.consentOverride !== void 0;
  if (r !== o) {
    let R = h();
    return { pick: r, adopt: R !== g || k ? { model: R, latch: "session_pick" } : void 0 };
  }
  try {
    let R = y.chain[y.chainIndex], w = nd({ ...y, chainModel: R });
    if ((0, import_chunk_865at33z.rke)(w)) return;
    let E = !k && y.liveSwitchOverride === void 0 && y.chainIndex > 0 && R !== void 0;
    if (E) for (let P = y.chainIndex + 1; P < y.chain.length; P++) {
      let I = y.chain[P];
      if (I !== void 0 && (0, import_chunk_865at33z.rke)(I)) return { pick: r, adopt: { model: I, latch: "availability_chain", chainIndex: P } };
    }
    let O = h();
    if (O === w || E && O === y.primaryModel) return;
    return { pick: r, adopt: { model: O, latch: "session_pick" } };
  } catch (R) {
    (0, import_chunk_k449cc64.i)(R);
    return;
  }
}
function fg(e) {
  try {
    if ((0, import_chunk_865at33z.bAo)(e.primaryModel, e.configuredFallbacks).length > 0) return { chain: e.chain, chainIndex: e.chainIndex };
    return { chain: (0, import_chunk_865at33z.DGe)(e.adoptedModel, e.configuredFallbacks), chainIndex: 0 };
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), { chain: e.chain, chainIndex: e.chainIndex };
  }
}
var rd = "antml:", RT = new RegExp("<" + rd + "invoke\\b"), wT = new RegExp(`<(?:${rd})?(?:function_calls>|invoke name=)|</(?:${rd})?(?:function_calls|invoke)>`);
function gg(e) {
  let o = e.flatMap((r) => r.message.content).findLast((r) => r.type === "text")?.text ?? "";
  return RT.test(o);
}
function oKs(e) {
  return wT.test(e);
}
var vT = 2;
function id(e) {
  return e < vT;
}
function yg(e, o, r, g) {
  if (e > 0) return "succeeded";
  if (o === "tool_use" && !r) return id(g) ? "malformed_again" : "gave_up";
  if (o === "end_turn") return "end_turn";
  return "other";
}
function hg(e) {
  try {
    return (0, import_chunk_bzyb60p0.Mg)([e]).filter(import_chunk_bzyb60p0.bQ).map((o) => o.uuid);
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), [];
  }
}
function _g() {
  let e = [];
  return { add: (o) => {
    let r = o.flatMap(hg);
    return e = [...e, ...r], r;
  }, nameOn: (o) => {
    if (e.length === 0 || o.type !== "assistant" || hg(o).length === 0) return;
    o.supersedesUuids = [...o.supersedesUuids ?? [], ...e], (0, import_chunk_865at33z.Gx)(o), e = [];
  } };
}
var LGr = /* @__PURE__ */ new Set(["queued_command", "poll_events", "teammate_mailbox"]);
function Sg(e) {
  try {
    if (!(0, import_chunk_1dkksxs0.Ax)() || !(0, import_chunk_865at33z.b)("tengu_jazzy_wren", true)) return false;
    let o = e.findLastIndex((y) => y.type === "assistant"), r = /* @__PURE__ */ new Set();
    for (let y of e.slice(o + 1)) {
      if (y.type === "attachment") {
        if (LGr.has(y.attachment.type) || y.attachment.type === "hook_blocking_error") return false;
        continue;
      }
      if (y.type !== "user") continue;
      if ((0, import_chunk_865at33z.Ipn)(y)) return false;
      let h = y.message.content;
      if (!Array.isArray(h)) continue;
      for (let k of h) {
        if (k.type !== "tool_result" || k.is_error) continue;
        if (!(typeof k.content === "string" ? [k.content] : (k.content ?? []).map((w) => w.type === "text" ? w.text : "")).some((w) => w.includes(import_chunk_4x1jja6d.UIr) || w.includes(import_chunk_4x1jja6d.BIr))) r.add(k.tool_use_id);
      }
    }
    let g = false;
    for (let y = o; y >= 0; y--) {
      let h = e[y];
      if (h.type !== "assistant") break;
      for (let k of h.message.content) {
        if (k.type !== "tool_use") continue;
        if (!(0, import_chunk_4x1jja6d.FIr)(k.name) || !r.has(k.id)) return false;
        g = true;
      }
    }
    if (g) (0, import_chunk_cqa9hrgx.l)("query_thinking_only_response", "nudge_skipped_brief_reply");
    return g;
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(o), `could not check whether this brief-mode turn already replied with ${import_chunk_4x1jja6d.Ac}; nudging as usual`)), false;
  }
}
function OT() {
  return (0, import_chunk_865at33z.b)("tengu_snazzy_hare", false);
}
function zr(e) {
  return !e.some((o) => o.message.content.some(import_chunk_f9x2f6cx.$Oe));
}
function PT(e) {
  return zr(e) && !e.some((o) => o.message.content.some((r) => r.type === "thinking" && r.thinking.trim() !== ""));
}
function Tg({ request: e, reply: o, stopReason: r, guards: { thinkingOnlyNudged: g, emptyCompletionResent: y }, transition: h, querySource: k, agentId: R, deps: w }) {
  let E = !R && OT();
  if ((r === "end_turn" || r === "stop_sequence") && !o.at(-1)?.isApiErrorMessage && k !== "compact" && !(0, import_chunk_2xjdqky3.Mit)(k) && !(0, import_chunk_0vvtfqck.$in)(e) && !o.some((O) => O.message.content.some((P) => P.type === "text" && (E ? (0, import_chunk_f9x2f6cx.$Oe)(P) : P.text.trim().length > 0))) && !IT(e) && !Bm(e) && (h?.reason !== "next_turn" || R !== void 0 || !Sg(e))) {
    if (!g) return (0, import_chunk_cqa9hrgx.l)("query_thinking_only_response", "nudged"), { kind: "nudge", nudge: (0, import_chunk_bzyb60p0.Me)({ content: import_chunk_0ha8wex8.Z6n, isMeta: true, turnCompanion: true, now: w.now, uuidFn: w.uuid }) };
    let O = (E ? PT(o) : o.length === 0 || y) && !R && FT(e);
    if ((O || E && zr(o)) && !y) return (0, import_chunk_cqa9hrgx.l)("query_thinking_only_response", "empty_resent"), { kind: "resend" };
    if ((0, import_chunk_cqa9hrgx.m)("query_thinking_only_response", "nudge_exhausted"), O) return { kind: "give_up", error: (0, import_chunk_bzyb60p0._i)({ content: "The model returned an empty response (retry also failed).", apiError: "empty_completion", now: w.now, uuid: w.uuid }) };
  } else if (g) (0, import_chunk_cqa9hrgx.u)("query_thinking_only_response");
  return;
}
function IT(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "user") {
      if (r.isMeta || (0, import_chunk_bzyb60p0.Sm)(r)) continue;
      return false;
    }
    if (r.type !== "assistant") continue;
    if (r.message.content.some((g) => g.type === "tool_use" && g.name === import_chunk_2b1wcpvk.ga)) return true;
  }
  return false;
}
function kg(e, { effortValue: o, turnEffort: r, querySource: g, stickyBetas: y }) {
  try {
    if (!(0, import_chunk_865at33z.txr)(e.model) || r !== void 0 || (0, import_chunk_k67pwqya.rk)() !== void 0 || !(0, import_chunk_865at33z.Szt)(e, y)) return;
    let h = { effortValue: o, turnEffort: void 0, querySource: g }, k = (0, import_chunk_bzyb60p0.$en)(e, { ...h, hookEffortValue: void 0 });
    return typeof k === "string" && (0, import_chunk_8hfdvrr1.f6e)("xhigh", k) && (0, import_chunk_bzyb60p0.$en)(e, { ...h, hookEffortValue: "xhigh" }) === "xhigh" && (0, import_chunk_865at33z.b)("tengu_nifty_prism", false) ? "xhigh" : void 0;
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
    return;
  }
}
function FT(e) {
  try {
    return DT(e) && (0, import_chunk_865at33z.b)("tengu_calm_waffle", false);
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
function DT(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "assistant") return false;
    if (r.type !== "user") continue;
    if ((0, import_chunk_bzyb60p0.Sm)(r)) return false;
    if (r.turnCompanion) continue;
    return !r.isMeta && !r.isCompactSummary && !(0, import_chunk_0ha8wex8.rg)(r) && (0, import_chunk_865at33z.$u)(r.origin) && (r.turnOrigin === void 0 || r.turnOrigin === "human" || r.turnOrigin === "sdk" || r.turnOrigin === "auto_continuation" || r.turnOrigin === "host_synthetic" || r.turnOrigin === "peer");
  }
  return false;
}
var bg = ["um", "user", "Hmm", "User", "Benutzer", "Human", "usr", "usem", "Mensch", "usuario"], LT = ["Human:", "Assistant:", "<dm ", "<system", "<tool_", "<function_"], UT = ["<dm ", "<system", "<tool_", "<function_"], BT = new RegExp("\\n\\n(\\p{L}{1,12})(?=[< ])", "u"), jT = /\u00B7 ?(\r?\n\r?\nuser)(?![\p{L}\p{N}])/u, ad = 200;
function Eg(e) {
  if (e === "<") return "<";
  if (e === " ") return " ";
  return "other";
}
function Ag(e) {
  for (let o of LT) if (e.includes(o)) return o;
  return null;
}
function qT(e) {
  let o = jT.exec(e);
  if (o !== null) {
    let h = o.index + o[0].length - o[1].length, k = e.slice(h, h + ad);
    return { shape: "tui_user_turn", fragment: "user", suffix: Eg(e[o.index + o[0].length]), looksFabricated: true, tailMarker: Ag(k), matchIndex: h, tail: k };
  }
  let r = null;
  for (let h of bg) {
    let k = e.indexOf(`

${h}`);
    if (k !== -1 && (r === null || k < r.index)) r = { index: k, fragment: h };
  }
  let g = null;
  for (let h of UT) {
    let k = e.indexOf(`

${h}`);
    if (k !== -1 && (g === null || k < g.index)) g = { index: k, marker: h };
  }
  if (r !== null && (g === null || r.index <= g.index)) return Cg(e, r.index, r.fragment);
  if (g !== null) {
    let h = e.slice(g.index, g.index + ad);
    return { shape: "artifact_free", fragment: "", suffix: "other", looksFabricated: true, tailMarker: g.marker, matchIndex: g.index, tail: h };
  }
  let y = BT.exec(e);
  if (y !== null) return Cg(e, y.index, y[1]);
  return null;
}
function Cg(e, o, r) {
  let g = o + 2 + r.length, y = e.slice(o, o + ad), h = Ag(y);
  return { shape: "junk_fragment", fragment: r, suffix: Eg(e[g]), looksFabricated: h !== null, tailMarker: h, matchIndex: o, tail: y };
}
function Rg(e) {
  if (e === "") return "none";
  for (let o of bg) if (o === e) return o;
  return "catch_all";
}
function* WT(e) {
  for (let o of e) for (let r of o.message.content) {
    let g, y;
    if (r.type === "text") g = "text", y = r.text;
    else if (r.type === "thinking") g = "thinking", y = r.thinking;
    else continue;
    let h = qT(y);
    if (h === null) continue;
    if (Rg(h.fragment) === "catch_all" && h.suffix !== "<" && !h.looksFabricated) continue;
    yield { hit: h, blockType: g, message: o };
  }
}
function vg(e, o) {
  for (let { hit: r, blockType: g, message: y } of WT(e)) (0, import_chunk_y53wbr8a.a)("tengu_fabricated_turn_candidate", { model: (0, import_chunk_865at33z.Xt)(o), shape: (0, import_chunk_78g0060s.f)(r.shape), matched_fragment: (0, import_chunk_78g0060s.f)(Rg(r.fragment)), suffix: (0, import_chunk_78g0060s.f)(r.suffix), looks_fabricated: r.looksFabricated, tail_marker: r.tailMarker !== null ? (0, import_chunk_78g0060s.f)(r.tailMarker) : void 0, block_type: (0, import_chunk_78g0060s.f)(g), tail_sha256: (0, import_chunk_myvyhcm0.Zn)(r.tail), request_id: (0, import_chunk_49zxha55.Ce)(y.requestId), message_id: (0, import_chunk_49zxha55.Ce)(y.message.id) });
}
var Og = /* @__PURE__ */ new Set(["reactive_compact_retry", "precomputed_compact_swap", "message_pdf_withdrawn", "whole_text_withdrawn"]);
function Pg(e) {
  try {
    if (!import_chunk_c203g5kd.s.CLAUDE_CODE_FIRST_CALL_THINKING_TITLES || (0, import_chunk_3t7ve0wy.Sa)() || (0, import_chunk_2yx6c1y2.vt)().showThinkingSummaries === true) return false;
    let o = (0, import_chunk_bzyb60p0.lSe)(e), r = e[o];
    return r?.type === "user" && r.turnOrigin === "human" && !r.isCompactSummary && e.findLastIndex((g) => g.type === "assistant") < o;
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), false;
  }
}
var GT = new RegExp(`^<${import_chunk_k449cc64.Ou}>\\n<${import_chunk_k449cc64.qA}>[^<]+</${import_chunk_k449cc64.qA}>\\n<${import_chunk_k449cc64.xg}>${import_chunk_k449cc64.tPt}`), QT = /error|fail|(?<!de)fault|fatal|crash|panic|exception|abort|(?<!s)kill|denied|refused|cancel|traceback|assert|\boom\b|out.?of.?memory|tim(?:e[ds]?|ing)[ -]?out/i, VT = new RegExp(`<${import_chunk_k449cc64.k4t}>\\[(?:Monitor|plugin monitor|WebSocket|Dropped|\\d+ events)\\b`);
function ld(e, o) {
  if (e?.kind !== "peer" && !(0, import_chunk_xfj2cwfv.rB)(e)) return false;
  let r = (0, import_chunk_bzyb60p0.wu)(o) ?? "";
  if (r.includes(import_chunk_yesjd46y.$de)) return false;
  if (e?.kind === "peer") return e.senderTaskId !== void 0 && e.flagged !== true && e.handbackNote === void 0;
  let g = import_chunk_nhpsytqr.PAe.exec(r);
  return !r.includes(`<${import_chunk_k449cc64.Ou}>`, 1) && (g ? r.startsWith("completed<", g[0].length) && !r.includes(`<${import_chunk_k449cc64.xg}>Monitor `) : GT.test(r) && !QT.test(r) && !VT.test(r));
}
function dd(e, o) {
  return o.type === "user" ? ld(e, o.message.content) : o.type === "attachment" && o.attachment.type === "queued_command" && ld(e, o.attachment.prompt);
}
function Ig({ taskRegistry: e, messageQueue: o }) {
  return Object.values(e.all()).some((r) => {
    if (!(0, import_chunk_z6hn62tj.uy)(r) || (0, import_chunk_z6hn62tj.Kf)(r)) return false;
    return r.type === "local_bash" ? r.agentId === void 0 || !(0, import_chunk_4dnx2vkh.okr)(r.agentId) : (0, import_chunk_ed372ykp.Abt)({ task: r }) && !(0, import_chunk_4dnx2vkh.okr)(r.id) && (0, import_chunk_z6hn62tj._it)(r) !== "main-session";
  }) || o.peek((r) => (0, import_chunk_tjdnrbvx.Kl)(r) && r.shouldQuery !== false && ld(r.origin, r.value)) !== void 0;
}
function YT() {
  return (0, import_chunk_f9x2f6cx.Cl)() || (0, import_chunk_3t7ve0wy.vce)() && !(0, import_chunk_3t7ve0wy.nx)() || (0, import_chunk_3t7ve0wy.Hge)() && (0, import_chunk_3t7ve0wy.U6e)() || (0, import_chunk_3t7ve0wy.Li)() === "ssh-remote" && (0, import_chunk_3t7ve0wy.lyn)() || (0, import_chunk_6e68m1dj.r$)() && !(0, import_chunk_3t7ve0wy.kk)() && !(0, import_chunk_v6ez7m15.R0e)();
}
function Fg(e, o, r) {
  try {
    if ((0, import_chunk_f9x2f6cx.st)() || !YT() || (0, import_chunk_0vvtfqck.BFn)() || (0, import_chunk_f9x2f6cx.VB)()?.some(({ name: y }) => y === import_chunk_epy4sc29.bd)) return;
    let g = e.slice(e.findLastIndex((y) => y.type === "assistant") + 1);
    if (!g.some((y) => y.type === "user" && dd(y.origin, y)) || !(0, import_chunk_865at33z.B4)(g, dd) || !Ig(o) || (0, import_chunk_1dkksxs0.Ax)() || !(0, import_chunk_865at33z.b)("tengu_glistening_snowglobe", false)) return;
    return (0, import_chunk_cqa9hrgx.u)("query_quiet_wake_note"), (0, import_chunk_bzyb60p0.Me)({ content: import_chunk_0ha8wex8.pOs, isMeta: true, turnCompanion: true, now: r.now, uuidFn: r.uuid });
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.m)("query_quiet_wake_note", "threw");
    return;
  }
}
function zT(e) {
  if (e.type === "assistant") return e.message.content.some((o) => o.type === "thinking" ? (0, import_chunk_bzyb60p0.WTe)(o) : o.type === "text" && (0, import_chunk_f9x2f6cx.$Oe)(o));
  if (e.type === "user") return (0, import_chunk_0ha8wex8.q1)(e) && e.message.content !== import_chunk_0ha8wex8.Xmn || (0, import_chunk_1hg0ytx8.ZDn)(e) || e.permissionDecision?.source.startsWith("user_") === true;
  return e.type === "attachment" && (e.attachment.type === "hook_blocking_error" || e.attachment.type === "hook_additional_context" && e.attachment.hookEvent === "Stop");
}
function Dg(e, o, r, g, y) {
  try {
    if (e === void 0 || !(g === "end_turn" || g === "stop_sequence") || !zr(r)) return false;
    let h = o.findLastIndex((R) => R.uuid === e.uuid), k = o.slice(h + 1);
    return h !== -1 && (0, import_chunk_865at33z.B4)(k, (R, w) => w.type === "attachment" && dd(R, w)) && (0, import_chunk_tteqedwm._er)(k) && !k.some(zT) && Ig(y);
  } catch (h) {
    return (0, import_chunk_k449cc64.i)(h), (0, import_chunk_cqa9hrgx.m)("query_quiet_wake_end", "threw"), false;
  }
}
function Lg(e, o) {
  if ((0, import_chunk_xfj2cwfv.nn)()) return [];
  return (0, import_chunk_cqa9hrgx.u)("query_quiet_wake_end"), [...e.at(-1)?.message.stop_reason === "end_turn" ? [] : [""], import_chunk_bp9b0hd8.OD].map((r) => {
    let g = (0, import_chunk_bzyb60p0.La)({ content: [{ type: "text", text: r, citations: null }], now: o.now, uuid: o.uuid });
    return { ...g, message: { ...g.message, stop_reason: "end_turn" }, closesQuietTurn: true };
  });
}
var Ug = null, Co = () => require("/$bunfs/root/chunk-d39h1zmc.js"), Cs = () => require("/$bunfs/root/chunk-pyvarp1z.js");
var JT = new import_chunk_2904xtvq.j(() => ({ state: void 0 }));
function An(e) {
  let o = JT.of(e.session.host);
  if (o.state === void 0) o.state = Co?.().createClassifierJobState(e) ?? null;
  return o.state;
}
var cd = require("/$bunfs/root/chunk-0kggeevz.js"), ZT = require("/$bunfs/root/chunk-gjd6m6ps.js"), ek = { resolveStage: (e, o, r) => (0, import_chunk_gq1dr8pm.xin)({ mappedTarget: e, armedFallbackModel: void 0, refusingModel: o, triedModels: r }), firstReachableStage: import_chunk_gq1dr8pm.Mmo, logSkippedStages: import_chunk_gq1dr8pm.Ems };
function Qg({ name: e, id: o }, { agentId: r, options: { tools: g, toolAliases: y } }) {
  (0, import_chunk_1ek4hhs6.nkt)(e, o, r, (0, import_chunk_b83x8d52.Dh)(g, e, y));
}
function* Bg(e, o, r, g, y) {
  for (let h of e) {
    let k = h.message.content.filter((R) => R.type === "tool_use");
    for (let R of k) {
      if (g?.has(R.id)) continue;
      Qg(R, y), yield (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: o, is_error: true, tool_use_id: R.id }], toolUseResult: o, sourceToolAssistantUUID: h.uuid, now: r?.now, uuidFn: r?.uuid });
    }
  }
}
function ko(e, o) {
  let r = An(e);
  if (!Co || !r || !o.startsWith("repl_main_thread") || e.agentId) return;
  Co().markTurnAborted(r, (0, import_chunk_9e5mdyfk.TS)());
}
function Yn(e) {
  if (e.agentId) return;
  let o = (0, import_chunk_cbnm4p23.Ai)(e.abortController.signal.reason);
  if (o !== "user-cancel" && o !== "remote-cancel") return;
  return (0, import_chunk_f9x2f6cx.ypt)() ?? void 0;
}
async function* $g(e, o) {
  if (!e.agentId) try {
    yield* Un(e);
  } catch {
  }
  if (!(0, import_chunk_cbnm4p23.jPe)(e.abortController.signal.reason)) yield (0, import_chunk_bzyb60p0.hR)({ toolUse: false, interruptedMessageId: Yn(e), interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(e.abortController.signal), now: o.now, uuidFn: o.uuid });
}
function tk(e) {
  let o = e.findLastIndex((g) => g.type === "assistant");
  return e.slice(o + 1).findLast(import_chunk_bzyb60p0.yQ)?.uuid ?? null;
}
async function* jg({ endTurnSource: e, messagesForQuery: o, assistantMessages: r, toolResults: g, toolUseBlocks: y, scriptRows: h, batchHooksRan: k = false, systemPrompt: R, userContext: w, systemContext: E, toolUseContext: O, updatedToolUseContext: P, querySource: I, stopHookActive: H, stickyBetas: Q, queryChainIdForAnalytics: z, queryDepth: X, deps: re }) {
  try {
    if ((0, import_chunk_y53wbr8a.a)("tengu_mcp_tool_result_ended_turn", { queryChainId: z, queryDepth: X, source: (0, import_chunk_78g0060s.f)(e) }), e === "mcp_meta") ko(O, I);
    try {
      for await (let pe of k ? [] : (0, import_chunk_bzyb60p0.Olr)(pl(y, g, h, P.options.tools), `hook-${re.uuid()}`, P, (0, import_chunk_bz1f2qnq.Z)(P).mode, P.abortController.signal)) {
        if (pe.message) yield pe.message;
        if (pe.blockingError || pe.preventContinuation) (0, import_chunk_w578pjby.t)(`[end-turn] PostToolBatch block discarded (turn ended by ${e === "tool" ? "tool result" : "MCP end-turn"}, no model re-invoke): ${pe.blockingError ? "block" : "preventContinuation"}`);
      }
    } catch (pe) {
      if (!(0, import_chunk_mjq4pbxz.zjn)(pe, P.abortController.signal)) throw pe;
      (0, import_chunk_w578pjby.t)("PostToolBatch hooks cancelled");
    }
    if (P.abortController.signal.aborted) yield* $g(P, re);
    yield* Fl(o, r, g, R, w, E, O, I, H, Q, An(O), e);
  } catch (pe) {
    if ((0, import_chunk_jv7av99m.Fe)(pe)) return;
    (0, import_chunk_k449cc64.i)(pe);
  }
}
function hn(e, o, r) {
  let g = An(e);
  if (!Co || !g || !o.startsWith("repl_main_thread") || e.agentId) return;
  Co().markApiFailure(g, (0, import_chunk_9e5mdyfk.TS)(), r.error, (0, import_chunk_bzyb60p0.oN)(r) ?? r.errorDetails ?? "", r.apiError).catch(() => {
  });
}
function qg(e) {
  return e?.type === "assistant" && e.apiError === "max_output_tokens";
}
function ok(e, o, r) {
  return e?.type === "assistant" && e.isApiErrorMessage === true && e.truncatedAfterOutput === true && ((0, import_chunk_865at33z.Pr)(r) === "subagent" || (0, import_chunk_865at33z.Pr)(r) === "main" && o.options.isNonInteractiveSession) && (0, import_chunk_865at33z.b)("tengu_truncated_response_recovery", true);
}
function nk(e, o) {
  let g = [typeof e === "string" ? e : Array.isArray(e) ? e.join(`

`) : void 0, o].filter((y) => !!y);
  return g.length > 0 ? g.join(`

`) : void 0;
}
async function* t6(e) {
  var _stack = [];
  try {
    if (e.querySource !== "hook_prompt") e = { ...e, toolUseContext: (0, import_chunk_bzyb60p0.iye)(e.toolUseContext) };
    let o = [], r = performance.now();
    if ((0, import_chunk_865at33z.Pr)(e.querySource) === "main" && !e.toolUseContext.agentId) (0, import_chunk_w4dc83v7.Qw)("engine_pickup"), (0, import_chunk_w4dc83v7.Lk)("loop_entry");
    let g = [], y;
    const h = __using(_stack, Uu(e.toolUseContext, e.messages, e.querySource));
    const k = __using(_stack, (0, import_chunk_bzyb60p0.Uto)(e.toolUseContext, e.querySource));
    let R = _g();
    try {
      await (0, import_chunk_sjqze7qg.$Ft)(e.toolUseContext.options.tools);
      let E = (0, import_chunk_f9x2f6cx.st)() ? require("/$bunfs/root/chunk-zq725g1t.js").openPrePublishTurn(e) : void 0, O = E === void 0 ? e : { ...e, takePlainDelta: E.tapping(e.takePlainDelta), streamWatcher: E }, H = (0, import_chunk_z3bdjzsf.ODt)() ? sk({ ...O, takePlainDelta: void 0 }, o, g, h, R) : h.through(Kg(O, o, g, h, R), R.nameOn), z = ((0, import_chunk_sjqze7qg.mot)() ? await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-x1kkh644.js"))).then(({ watchFirstWeekTurn: X }) => X(e), () => {
        return;
      }) : void 0)?.through(H) ?? H;
      y = yield* E?.through(z) ?? z;
    } finally {
      if ((0, import_chunk_r3kja8v6.ue)()) {
        let O = (0, import_chunk_865at33z.Pr)(e.querySource);
        if (O === "main" || O === void 0) (0, import_chunk_d109n23j.azo)(e.toolUseContext);
      }
      let E = e.toolUseContext.agentId;
      if (E) (0, import_chunk_bzyb60p0.vIn)(e.toolUseContext.session.precompute, E, "subagent_exit", e.querySource, e.toolUseContext.storageV5);
    }
    yield* gp(e.toolUseContext, e.toolUseContext.getAppState, e.querySource, y, Dl);
    let w = (0, import_chunk_xrav2tvh.KEo)(y.reason) ? "cancelled" : "completed";
    for (let E of Tf(e.toolUseContext.messageQueue, o, !e.toolUseContext.agentId)) yield { type: "command_lifecycle", uuid: E, state: w };
    for (let E of g) yield { type: "command_lifecycle", uuid: E, state: "completed" };
    if ((0, import_chunk_xrav2tvh.Ome)(y.reason)) (0, import_chunk_cqa9hrgx.m)("turn", (0, import_chunk_xrav2tvh.kTl)(y));
    else (0, import_chunk_cqa9hrgx.u)("turn");
    if ((0, import_chunk_865at33z.Pr)(e.querySource) === "main" && !e.toolUseContext.agentId) Pm(e.toolUseContext.session, y.reason);
    return dg({ terminal: y, querySource: e.querySource, agentContext: e.toolUseContext.agentContext, hasActiveGoal: e.toolUseContext.options.activeGoal !== void 0, startedAt: r }), y;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function* sk(e, o, r, g, y) {
  if ((0, import_chunk_865at33z.Pr)(e.querySource) === "main") {
    let w = e.toolUseContext.options.agentDefinitions?.activeAgents ?? [], E = (0, import_chunk_f9x2f6cx.vb)(), O = (0, import_chunk_41appe38.nNa)({ mainAgentDefinition: E ? w.find((P) => P.agentType === E) : void 0, activeAgents: w, toolUseContext: e.toolUseContext, canUseTool: e.canUseTool });
    if ((0, import_chunk_f9x2f6cx.Se)()) try {
      await O;
    } catch (P) {
      (0, import_chunk_w578pjby.t)(`[agentObserver] non-interactive arm failed (degrading to unobserved): ${P}`);
    }
  }
  let h = Bu({ querySource: e.querySource, toolUseContext: e.toolUseContext, messages: e.messages, turnStartIndex: Bi(e.messages) }), k = g.through(Kg(e, o, r, g, y), y.nameOn), R;
  try {
    let w;
    while (true) {
      let E = await k.next(w);
      if (E.done) {
        R = E.value;
        break;
      }
      if (h) if (E.value.type === "stream_request_start") h.flushSegment();
      else h.capture(E.value);
      w = yield E.value;
    }
  } finally {
    if (R === void 0) try {
      await k.return(void 0);
    } catch {
    }
    try {
      h?.finish(R?.reason ?? "ended");
    } catch {
    }
  }
  if (R === void 0) throw Error("queryWithObserverTap: missing terminal after completion");
  return R;
}
function* Hg({ events: e, queue: o, signal: r, phase: g, deliveredPollEventUuids: y }) {
  if ((0, import_chunk_xfj2cwfv.Rke)(e), r.aborted || o.isMidTurnFoldSuspended()) return (0, import_chunk_w578pjby.t)(`[query] abort/suspension during ${g} absorption \u2014 leaving ${e.length} poll event(s) queued`), [];
  o.consume(e, { reason: "absorbed_mid_turn" }), (0, import_chunk_qf73a9we.$pe)(e, g), (0, import_chunk_cqa9hrgx.u)("poll_event_delivery");
  let h = !(0, import_chunk_w50zedgp.Ng)();
  for (let k of e) if (k.uuid && h) y.push(k.uuid), yield { type: "command_lifecycle", uuid: k.uuid, state: "started" };
  try {
    return (0, import_chunk_jv1xpxw5.qKe)(e);
  } catch (k) {
    return (0, import_chunk_k449cc64.i)(k), [];
  }
}
function Wg(e, o) {
  (0, import_chunk_cqa9hrgx.l)("poll_event_delivery", "left_queued"), (0, import_chunk_w578pjby.t)(`[query] ${e} poll_events emission degraded to 0 for ${o} event(s) \u2014 leaving them queued`, { level: "warn" });
}
var io = "next_round";
async function* ik() {
}
var ak = async function* () {
  return { kind: "not_needed" };
};
async function* Kg(e, o, r, g, y) {
  var _stack = [];
  try {
    let { userContext: h, systemContext: k, canUseTool: R, fallbackModel: w, querySource: E, spawnedBySkill: O, maxTurns: P, skipCacheWrite: I, skipMessageCacheMarkers: H, relayFork: Q, compactionRequestKind: z, noServerToolCalls: X, apiAttemptsLeft: re, evictCacheOnComplete: pe, agentCacheTtlOverride: ie, forkPointUuid: se, divergesAtMessageId: le, thinkingStripPlan: ae, advisorStripPlan: oe, toolResultCuts: Ae } = e;
    if (e.inPlaceOfFirstRequest !== void 0) {
      let A = Ei(e.inPlaceOfFirstRequest, { signal: e.toolUseContext.abortController.signal, interruptedMessageId: () => Yn(e.toolUseContext), now: e.deps?.now, uuid: e.deps?.uuid });
      if (yield* A.rows, A.terminal.reason === "aborted_streaming") ko(e.toolUseContext, E);
      return A.terminal;
    }
    let qe = (0, import_chunk_tteqedwm.sIa)(e.messages), rt = false, Ue = E.startsWith("repl_main_thread") || E === "sdk", Oe = Ue && !e.toolUseContext.agentId, He = Dc(e.messages, Oe), We = Oe && Pg(e.messages);
    if (Oe) e.toolUseContext.session.userPresence.noteWhoseTurn(qe && e.toolUseContext.messageQueue.peek(import_chunk_tteqedwm.jht) === void 0);
    let J = await fs(h, k, e.toolUseContext, { messages: e.messages, querySource: E });
    const ve = __using(_stack, (0, import_chunk_bzyb60p0.I6l)(Qy(e.deps ?? sg(), e.toolUseContext), e.toolUseContext, import_chunk_bzyb60p0.wBe));
    let G = (0, import_chunk_knp99ee7.UGl)(ve.deps, e.toolUseContext, ve.beneathHooks), { systemPrompt: ye } = e, he = false, dt = (0, import_chunk_gkm2eky6.Kmr)(e.toolUseContext.loopModel) !== null, Ge = e.promptRenderEpoch ?? (0, import_chunk_f9x2f6cx.I1e)(), no = If(e.toolUseContext.options), lo = Di(e.toolUseContext, e.promptRenderEpoch), Ft = Ue && !e.toolUseContext.agentId, Bo = Ft ? Im(e.toolUseContext.session, e.messages) : null;
    if (Ue) try {
      (0, import_chunk_865at33z.c3i)(), (0, import_chunk_k67pwqya.Lwl)(), import_chunk_bzyb60p0.oyt.of(e.toolUseContext.session).summarize = (A) => (0, import_chunk_bzyb60p0.$4a)(E, A);
    } catch (A) {
      (0, import_chunk_k449cc64.i)(A);
    }
    let jo = (0, import_chunk_865at33z.Or)(e.messages);
    if (Co && Ue && !e.toolUseContext.agentId) Co().seedFromResumedConversation(An(e.toolUseContext), jo, e.toolUseContext.getAppState().postTurnSummary);
    if (e.querySource !== "comparison_fork") (0, import_chunk_bzyb60p0.e7o)(jo);
    let _e = tk(jo), te = { guards: { ...Zl, refusalRetrySpent: false, firstRefusalCyberVerification: void 0, mcpEndTurnOverrideSpent: false, stopHookActive: e.stopHookActive ?? false, turnCount: 1 }, messages: e.messages, toolUseContext: e.toolUseContext, compactTracking: void 0, transition: void 0 }, kt = void 0, Jt = Zf(), bo = (0, import_chunk_sjqze7qg.H7a)(jo, te.toolUseContext, E, te.toolUseContext.loopModel);
    const Mo = __using(_stack, (0, import_chunk_bzyb60p0.S3a)(te.messages, te.toolUseContext, E, bo));
    if (bo) {
      if (Ft) (0, import_chunk_w4dc83v7.Qw)("loop_entry"), (0, import_chunk_w4dc83v7.Lk)("memory_context_wait");
      let A = (await bo).map((Et) => (0, import_chunk_bzyb60p0.Ut)(Et, G));
      if (ai(A, te.toolUseContext.loopModel), Ft) (0, import_chunk_w4dc83v7.Qw)("memory_context_wait"), (0, import_chunk_w4dc83v7.Lk)("loop_entry");
      if (A.length > 0) te = { ...te, messages: [...te.messages, ...A] };
      for (let Et of A) yield Et;
    }
    let Pe = [], Qe = false;
    {
      let A = te.toolUseContext.agentContext, Et = Ue || (0, import_chunk_r3kja8v6.ue)() && A?.agentType === "subagent" && A.agentId === te.toolUseContext.agentId, Do = Ju(te.toolUseContext.messageQueue.getCommandQueue(), te.messages), Ot = !Et || te.toolUseContext.messageQueue.isMidTurnFoldSuspended() ? [] : [...Do.map((Eo) => [Eo]), te.toolUseContext.messageQueue.getTurnStartFoldCommands(te.toolUseContext.abortController.signal.aborted).filter((Eo) => !Do.includes(Eo))].flatMap((Eo) => (0, import_chunk_bzyb60p0.vQ)(Eo, { isMainThread: Ue, currentAgentId: te.toolUseContext.agentId }).filter(import_chunk_qf73a9we.W_));
      if (Ot.length > 0) {
        let Eo = te.toolUseContext.messageQueue;
        Eo.registerFoldInFlight(Ot), qe &&= !Ot.some(import_chunk_tteqedwm.jht);
        try {
          let es = Eo.countRemainingWakePollEventsAfter(Ot), Jn = [];
          try {
            Jn = await (0, import_chunk_bzyb60p0.zye)(Ot, (0, import_chunk_yvba4101.ac)(te.toolUseContext.modelFacts.model), es, { messages: te.toolUseContext.messages, alreadyRecorded: Do });
          } catch (_n) {
            if ((0, import_chunk_jv7av99m.Fe)(_n)) (0, import_chunk_w578pjby.t)("[query] turn-start poll_events build aborted \u2014 leaving events queued");
            else (0, import_chunk_k449cc64.i)(_n);
          }
          if (Ot.every((_n) => Do.includes(_n)) || Jn.some((_n) => _n.type === "poll_events")) {
            if (!((0, import_chunk_r3kja8v6.ue)() && require("/$bunfs/root/chunk-wspa4gaz.js").deliversOnlyLostEvents(Ot, es))) te.toolUseContext.setToolPermissionContext(import_chunk_pmryp5f3.Pcn);
            let ts = Jn.map((qo) => (0, import_chunk_bzyb60p0.Ut)((0, import_chunk_bzyb60p0.qja)(qo, te.messages), G));
            te = { ...te, messages: [...te.messages, ...ts] };
            for (let qo of ts) yield qo;
            if ((0, import_chunk_r3kja8v6.ue)()) {
              let { deliverTurnStartFollowing: qo, foldAddedHookStop: er } = require("/$bunfs/root/chunk-t0an2927.js"), Hi = te.messages.length, Bn = yield* qo(Ot, te.messages);
              Qe = er(Bn, Hi), te = { ...te, messages: Bn };
            }
            Pe = yield* Hg({ events: Ot, queue: Eo, signal: te.toolUseContext.abortController.signal, phase: "turn-start", deliveredPollEventUuids: r });
          } else Wg("turn-start", Ot.length);
        } finally {
          Eo.unregisterFoldInFlight(Ot);
        }
      }
    }
    if (Ue && !te.toolUseContext.agentId && !te.toolUseContext.options.bareFork) {
      let A = te.toolUseContext.messageQueue;
      try {
        let Et = A.isMidTurnFoldSuspended() ? [] : A.getCommandQueue().filter(import_chunk_bzyb60p0.EQ);
        if (Et.length > 0) {
          let Do = await (0, import_chunk_bzyb60p0.zye)(Et, (0, import_chunk_yvba4101.ac)(te.toolUseContext.modelFacts.model), 0, { messages: te.toolUseContext.messages });
          if (Do.length === Et.length && !te.toolUseContext.abortController.signal.aborted) {
            (0, import_chunk_xfj2cwfv.Rke)(Et);
            let Ot = Do.map((Eo) => (0, import_chunk_bzyb60p0.Ut)(Eo, G));
            te = { ...te, messages: [...te.messages, ...Ot] };
            for (let Eo of Ot) yield Eo;
            A.consume(Et, { reason: "absorbed_mid_turn" }), qe &&= !Et.some(import_chunk_tteqedwm.jht);
          } else if (!te.toolUseContext.abortController.signal.aborted) (0, import_chunk_w578pjby.t)(`[query] turn-start passive fold emitted ${Do.length} of ${Et.length} \u2014 leaving them queued`, { level: "warn" });
        }
      } catch (Et) {
        if (!(0, import_chunk_jv7av99m.Fe)(Et)) (0, import_chunk_k449cc64.i)(Et);
      }
    }
    let nt;
    if (Ue && !te.toolUseContext.agentId && !te.toolUseContext.options.bareFork) {
      if ((0, import_chunk_kb3nnh8q.VTa)(te.messages), nt = Fg(te.messages, te.toolUseContext, G), nt) te = { ...te, messages: [...te.messages, nt] }, yield nt;
    }
    let Ze = false, Ht = 0, ro = false, Zo = false, on, Nt = false, rn = (0, import_chunk_bz1f2qnq.jBi)(e.toolUseContext), mo = rn, xo = (0, import_chunk_865at33z.DGe)(rn, w), Oo = 0, Nn = rn, bs, kr = (A, Et) => {
      bs = Et === "the turn" ? { primaryModel: (0, import_chunk_4vsz8a99.$dn)({ loopModel: Nn, availabilityFallback: bs }), fallbackModel: A } : void 0, Nn = A;
    }, ji = /* @__PURE__ */ new Map();
    if (e.modelFacts !== void 0) ji.set(e.modelFacts.model, e.modelFacts);
    let zn, Qo, Cr, br, Ms, { sessionModel: an } = e, Mr = an?.lastWritten(), Kt = an !== void 0, md = E === "side_question" || e.forkOrigin === "btw", Rn = (0, import_chunk_865at33z.Pr)(E), Xr = Rn === "main" || Rn === "subagent", wt = e.stickyBetas ?? (Rn === "main" || Rn === void 0 ? void 0 : Rn === "subagent" ? (0, import_chunk_f9x2f6cx.fte)() : (0, import_chunk_f9x2f6cx.vL)((0, import_chunk_f9x2f6cx.ao)())), ln = Rn === "main" || Rn === void 0, pd = /* @__PURE__ */ new Map(), Es = void 0, $o, Zr = (0, import_chunk_r3kja8v6.ue)() ? require("/$bunfs/root/chunk-mj8nmcg7.js") : void 0;
    async function* Vg() {
      var _stack2 = [];
      try {
        if (Qe) return yield* Pe, ko(te.toolUseContext, E), yield* Fo(te.toolUseContext, te.messages, { stopHookActive: te.guards.stopHookActive }), { reason: "hook_stopped" };
        if (ln && te.toolUseContext.shouldStopBeforeNextApiCall?.()) return yield* Pe, { reason: "background_requested" };
        if (ln && te.transition?.reason === "next_turn" && te.toolUseContext.stopsAtToolGap !== void 0 && await lg(te.toolUseContext.stopsAtToolGap)) {
          let v = Ei("aborted", { signal: te.toolUseContext.abortController.signal, interruptedMessageId: () => Yn(te.toolUseContext), now: G.now, uuid: G.uuid });
          for (let V of v.rows) yield V.type === "user" ? { ...V, afterNotePass: true } : V;
          return ko(te.toolUseContext, E), v.terminal;
        }
        if (Ft) (0, import_chunk_w4dc83v7.Qw)("loop_entry"), (0, import_chunk_w4dc83v7.Lk)("message_prep");
        let { toolUseContext: A } = te, Et = te.messages, Do, { guards: Ot, compactTracking: Eo, resumeIncompleteThinking: es, pendingToolUseSummary: Jn, prevToolDurations: _n } = te, { maxOutputTokensRecoveryCount: ts, hasAttemptedReactiveCompact: qo, reactiveCompactDeeperPass: er, emptyCompletionResent: Hi, malformedToolUseRetryCount: Bn, refusalRetrySpent: zg, firstRefusalCyberVerification: Xg, mcpEndTurnOverrideSpent: fd, stopHookActive: wn, stopHookBlockingCount: As, turnCount: tr } = Ot, Jg = te.transition === void 0 ? e.maxOutputTokensOverride : void 0;
        We &&= te.transition === void 0 || Og.has(te.transition.reason);
        let ut = es;
        if (jp(te.transition, A.agentId), ln && !A.agentId) kf(A.messageQueue);
        if (yield { type: "stream_request_start" }, (0, import_chunk_bzyb60p0.QS)("query_fn_entry"), !A.agentId) (0, import_chunk_k5jn5rx9.wb)("query_started");
        let Zg = A.queryTracking?.billedToUsageCredits, gd = performance.now(), ht = A.queryTracking ? { chainId: A.queryTracking.chainId, depth: A.queryTracking.depth + 1, roundStartedAtMs: gd } : { chainId: G.uuid(), depth: 0, roundStartedAtMs: gd }, Vt = (0, import_chunk_49zxha55.Ce)(ht.chainId);
        A = { ...A, queryTracking: ht };
        let F = (0, import_chunk_bzyb60p0.Iar)([...(0, import_chunk_865at33z.Or)(Et)], A.agentId);
        F = g.withArrivedRows(F);
        for (let v of Vu(F, { options: A.options, querySource: E, agentId: A.agentId, resumeActive: ut, stamp: G })) yield v, F = [...F, v];
        let hd = (v) => (0, import_chunk_knp99ee7.wtr)(F, v), xt = Eo, Gi = A.precomputeSourceKey !== void 0 && xt?.compacted !== true && !(0, import_chunk_bzyb60p0.uno)(E);
        const _d = __using(_stack2, Co && (0, import_chunk_865at33z.Kc)() && E.startsWith("repl_main_thread") && !A.agentId ? Tm(() => ko(A, E)) : void 0);
        if (Co && _d) {
          let v = F.findLast((V) => V.type === "user" && !V.isMeta && typeof V.message.content === "string");
          Co().markTurnActive(An(A), (0, import_chunk_9e5mdyfk.TS)(), { userText: v?.type === "user" && typeof v.message.content === "string" && !(0, import_chunk_xfj2cwfv.hee)(v.message.content) ? v.message.content : void 0, isTurnStart: te.transition === void 0 });
        }
        let ey = E.startsWith("agent:") || E.startsWith("repl_main_thread");
        F = await (0, import_chunk_qp5chy39.Irl)(F, A.contentReplacementState, (0, import_chunk_mxhw2w5n.bV)(A.session), ey ? (v) => void (0, import_chunk_bzyb60p0.MBe)(v, A.agentId, A.storageV5).catch(import_chunk_k449cc64.i) : void 0, (0, import_chunk_qp5chy39.Orl)(A.options.tools), A.storageV5);
        let Sd = (0, import_chunk_knp99ee7.ntt)(A.abortController.signal);
        if (Sd !== void 0) {
          let v = yield* Ri(Sd, { signal: A.abortController.signal, mainThreadSession: A.agentId ? void 0 : A.session, heldRows: Pe, interruptedMessageId: () => Yn(A), now: G.now, uuid: G.uuid, markAborted: () => ko(A, E) });
          if (v !== void 0) return v;
        }
        let Td = () => nd({ refusalOverride: Qo, consentOverride: br, liveSwitchOverride: Ms, chainModel: xo[Oo], primaryModel: rn });
        if (Kt) {
          let v = pg({ pickSeen: Mr, livePick: an.lastWritten(), userModel: mo, turn: { refusalOverride: Qo, consentOverride: br, liveSwitchOverride: Ms, chain: xo, chainIndex: Oo, primaryModel: rn }, resolveLiveModel: an.resolvedModel });
          if (v !== void 0) {
            let V = v.pick === Mr;
            Mr = v.pick;
            let Te = v.adopt;
            if (Te !== void 0) {
              let Re = Td(), Ee = Te.model;
              if (V && !fn(Ee, Re, A, A.getAppState().fastMode)) {
                let Ve = (0, import_chunk_bzyb60p0._i)({ content: `Auto mode doesn't run on ${(0, import_chunk_865at33z.yi)(Ee)}, and the model policy no longer allows ${(0, import_chunk_865at33z.yi)(Re)} \xB7 /model to pick another model`, apiError: "no_allowed_fallback", now: G.now, uuid: G.uuid });
                return yield Ve, hn(A, E, Ve), yield* Pe, { reason: "model_error", error: Error("The model policy excludes the turn model and auto mode does not run on the model it would move to") };
              }
              switch (Te.latch) {
                case "session_pick":
                  zn = void 0, Ms = Ee, mo = Ee, kr(Ee, "the session"), Qo = void 0, br = void 0, { chain: xo, chainIndex: Oo } = fg({ chain: xo, chainIndex: Oo, primaryModel: rn, configuredFallbacks: w, adoptedModel: Ee });
                  break;
                case "availability_chain":
                  Oo = Te.chainIndex, kr(Ee, "the turn");
                  break;
              }
              (0, import_chunk_y53wbr8a.a)("tengu_live_model_switch", { from_model: (0, import_chunk_865at33z.Xt)(Re), to_model: (0, import_chunk_865at33z.Xt)(Ee), query_source: (0, import_chunk_865at33z.ka)(E), entrypoint: (0, import_chunk_78g0060s.S)("cli"), queryChainId: Vt, queryDepth: ht.depth });
            }
          }
        }
        let $i = (v, V) => (0, import_chunk_bzyb60p0.b3e)({ permissionMode: V, setting: A.options.getPlanModeSetting?.(), mainLoopModel: Td(), messages: v }), Ki = () => (0, import_chunk_k67pwqya.iws)(Qo, Cr) === void 0 ? (0, import_chunk_bz1f2qnq.e_)(A) : (0, import_chunk_bz1f2qnq.WBi)(A), Rs = async (v) => {
          let V = ji.get(v) ?? await (0, import_chunk_bzyb60p0.pne)(v, A);
          return ji.set(V.model, V), V;
        }, Cd = async (v, V) => {
          let Te = $i(v, V);
          if (Ft) (0, import_chunk_w4dc83v7.Lk)("model_config_wait");
          let Re = await Rs(Te);
          if (Ft) (0, import_chunk_w4dc83v7.Qw)("model_config_wait");
          return [Te, Re];
        };
        if (Ft) (0, import_chunk_w4dc83v7.Qw)("message_prep");
        let [tt, Be] = await Cd(F, (0, import_chunk_bz1f2qnq.Z)(A).mode);
        if (A.modelFacts = Be, A.loopModel = Nn, A.availabilityFallback = bs, Ft) (0, import_chunk_w4dc83v7.Lk)("message_prep");
        let ws = async (v) => {
          tt = v, Be = await Rs(v), A.modelFacts = Be, A.loopModel = Nn, A.availabilityFallback = bs;
        };
        if (E !== "compact") F = (0, import_chunk_zajgr60e.YZn)(F, Be, te.transition === void 0 && Ue && !A.agentId);
        let vn = Ue && (0, import_chunk_865at33z.mp)(A.agentContext), Md = false;
        async function* os(v, V, Te = {}, Re = false) {
          if (Md || !vn || A.agentId !== void 0 || A.abortController.signal.aborted || tt !== mo) return false;
          let Ee = await Lp({ rows: F, requestTokens: v, needsProof: V, beforeCompaction: Re, facts: Be, session: A.session, storageV5: A.storageV5, tools: A.options.tools, signal: A.abortController.signal, stamp: G });
          if (Ee === void 0 || Ee === "no_file") return Md = Ee === "no_file", false;
          if (yield Ee, Re) return F = (0, import_chunk_zajgr60e.YZn)([...F, Ee], Be, false), true;
          return te = { guards: Ot, messages: [...F, Ee], toolUseContext: A, compactTracking: xt, ...Te, transition: { reason: "prompt_as_file" } }, true;
        }
        yield* os(void 0, true, {}, true);
        let vs = mg(A.options.autoCompactWindow, A, Be, F, E);
        if (vs.window !== A.options.autoCompactWindow) A = { ...A, options: { ...A.options, autoCompactWindow: vs.window } };
        if (vs.notice !== void 0) yield (0, import_chunk_bzyb60p0.Pt)(vs.notice, "notice");
        let rs = 0;
        if ((0, import_chunk_bzyb60p0.h6a)(), await _m(), (0, import_chunk_bzyb60p0.QS)("query_autocompact_start"), Ft) (0, import_chunk_w4dc83v7.Qw)("message_prep"), (0, import_chunk_w4dc83v7.Lk)("autocompact");
        let ty = { facts: Be, contextWindow: (0, import_chunk_bzyb60p0.bx)(Be) }, Ed = () => ({ systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, forkContextMessages: F, advisorModel: A.getAppState().advisorModel, stickyBetas: wt, agentCacheTtlOverride: ie }), Ad = false, oy = ($o ? ak : G.autocompact)(F, A, Be, Ed(), E, xt, rs, import_chunk_bzyb60p0.yts, void 0, (v) => ut === true && Wp(F, Be, A.options.autoCompactWindow) || (Ad = $p(F, Be, v, E, xt, Zg, te.transition?.reason))), so = yield* (0, import_chunk_bzyb60p0.iui)(oy);
        if (Bo?.(so.kind), Bo = null, (0, import_chunk_bzyb60p0.QS)("query_autocompact_end"), Ft) (0, import_chunk_w4dc83v7.Qw)("autocompact"), (0, import_chunk_w4dc83v7.Lk)("request_announcements");
        if (so.kind === "rapid_refill_breaker_tripped") {
          let v = hs({ fallback: Ue ? zn : void 0, model: Be.model, configuredWindow: A.options.autoCompactWindow });
          (0, import_chunk_y53wbr8a.a)("tengu_auto_compact_rapid_refill_breaker", { consecutiveRapidRefills: xt?.consecutiveRapidRefills ?? 0, turnsSincePreviousCompact: xt?.turnCounter ?? -1, queryChainId: Vt, queryDepth: ht.depth, afterShrinkingFallback: v.afterShrinkingFallback });
          let V = { ...(0, import_chunk_bzyb60p0._i)({ content: v.content, error: "invalid_request", apiError: "autocompact_thrashing", now: G.now, uuid: G.uuid }), ...(0, import_chunk_bzyb60p0.Ets)([], A.abortController.signal.aborted) };
          return yield V, (0, import_chunk_bzyb60p0.DSt)(V, A), hn(A, E, V), yield* Pe, { reason: "rapid_refill_breaker" };
        }
        async function* Rd(v) {
          let { result: V, thresholdSource: Te, thresholdWindow: Re } = v, { preCompactTokenCount: Ee, postCompactTokenCount: ft, truePostCompactTokenCount: Ve, compactionUsage: at } = V, zt = (0, import_chunk_k67pwqya.mw)(Be.model, (0, import_chunk_bz1f2qnq.e_)(A), (0, import_chunk_bz1f2qnq.kh)(A.permissionLayers));
          if ((0, import_chunk_y53wbr8a.a)("tengu_auto_compact_succeeded", { thresholdSource: (0, import_chunk_78g0060s.fe)(Te), autoCompactWindow: Re.window, autoCompactWindowOrigin: (0, import_chunk_78g0060s.f)(Re.origin), routedThroughReactive: v.routedThroughReactive, ...v.afterIdle && { armTrigger: (0, import_chunk_78g0060s.S)("idle") }, onThinkingResumeRound: ut === true, originalMessageCount: Et.length, compactedMessageCount: V.summaryMessages.length + V.attachments.length + V.hookResults.length, ...zt && { effort_level: (0, import_chunk_78g0060s.f)(zt) }, preCompactTokenCount: Ee, postCompactTokenCount: ft, truePostCompactTokenCount: Ve, compactionInputTokens: at?.input_tokens, compactionOutputTokens: at?.output_tokens, compactionCacheReadTokens: at?.cache_read_input_tokens ?? 0, compactionCacheCreationTokens: at?.cache_creation_input_tokens ?? 0, compactionTotalTokens: at ? at.input_tokens + (at.cache_creation_input_tokens ?? 0) + (at.cache_read_input_tokens ?? 0) + at.output_tokens : 0, queryChainId: Vt, queryDepth: ht.depth }), e.taskBudget) {
            let et = (0, import_chunk_bzyb60p0.Mdi)(F);
            kt = Math.max(0, (kt ?? e.taskBudget.total) - et);
          }
          (0, import_chunk_bzyb60p0.Pui)(A.agentId ?? "main", (0, import_chunk_bzyb60p0.sfe)(F)), xt = (0, import_chunk_bzyb60p0.zdi)(G.uuid(), v.consecutiveRapidRefills), V.summaryMessages = Va((0, import_chunk_bzyb60p0.zgi)(V.summaryMessages, F), F), J = await Xa(J, h, k, A, { messages: e.messages, querySource: E, compaction: { replacedMessages: F, consecutiveRapidRefills: v.consecutiveRapidRefills } });
          let oo = await nl(V, { routing: J, toolUseContext: A, querySource: E, resumeActive: ut, foreground: Ue && (0, import_chunk_865at33z.mp)(A.agentContext), stamp: G });
          if (ol(He, F, V), F = gs((0, import_chunk_bzyb60p0.e7)(V), oo), Et !== e.messages) {
            if (Do = Sf(Et), Do !== void 0) Et = F;
          }
          A = Vl(A, F, Bi), he = true, te = { ...te, messages: Et, toolUseContext: A }, Mi({ messages: F, systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, querySource: E, stickyBetas: wt });
          for (let et of gs((0, import_chunk_bzyb60p0.ppi)(V), oo)) yield et;
          if (v.afterIdle) yield (0, import_chunk_bzyb60p0.Pt)(import_chunk_bzyb60p0.dVa, "notice");
        }
        if (so.kind === "compacted") yield* (0, import_chunk_bzyb60p0.iui)(Rd(so));
        else if ((so.kind === "failed" || so.kind === "not_needed") && so.consecutiveFailures !== void 0) {
          xt = { ...xt ?? { compacted: false, turnId: "", turnCounter: 0 }, consecutiveFailures: so.consecutiveFailures, consecutiveUncountedFailures: so.consecutiveUncountedFailures };
          let v = xp({ outcome: so, querySource: E, agentId: A.agentId, isInterrupted: A.abortController.signal.aborted });
          if (v !== void 0) yield v;
        }
        let wd = so.kind === "compacted" || so.kind === "failed";
        if ((0, import_chunk_bzyb60p0.ypi)({ autocompactRan: wd, hasAttemptedReactiveCompact: qo, lastTransitionReason: te.transition?.reason, isPreFirstCompactFork: Gi, querySource: E, contextTokens: (0, import_chunk_bzyb60p0.ip)(F, (0, import_chunk_bzyb60p0._H)(Be.bytesPerToken)) - rs, messagesCounted: F, facts: Be, autoCompactWindow: A.options.autoCompactWindow })) if (Rn === "subagent") (0, import_chunk_bzyb60p0._ts)(A.session.precompute, A.agentId, "subagent_estimate", (0, import_chunk_865at33z.ka)(E));
        else (0, import_chunk_bzyb60p0.scr)({ querySource: E, messages: F, facts: Be, cacheSafeParams: { systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, forkContextMessages: F, advisorModel: A.getAppState().advisorModel, stickyBetas: wt, agentCacheTtlOverride: ie }, ...E === "sdk" && { promptScan: (0, import_chunk_bzyb60p0.Ggi)(F) } });
        if ((0, import_chunk_865at33z.Pr)(E) === "main" && !A.agentId && !ut && (0, import_chunk_kxbewx27.cva)(A.session) && (0, import_chunk_sjqze7qg._bi)(A.session)) await (0, import_chunk_kxbewx27.uva)(A.session, A.abortController.signal);
        if ((0, import_chunk_865at33z.Pr)(E) === "main" && !A.agentId && !ut && (0, import_chunk_sjqze7qg.CXa)(A.session) && (0, import_chunk_sjqze7qg._bi)(A.session)) {
          let v = import_chunk_sjqze7qg.gnn.of(A.session).take();
          for (let V of v) {
            let Te = (0, import_chunk_bzyb60p0.Ut)({ type: "dir_sync_notice", content: V }, G);
            yield Te, F = [...F, Te];
          }
        }
        if ((0, import_chunk_865at33z.Pr)(E) === "main" && !A.agentId && !ut) try {
          for (let v of await (0, import_chunk_bzyb60p0.lqa)(A.session)) {
            for (let V of v.messages) yield V, F = [...F, V];
            if (v.contexts.length > 0) {
              let V = (0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: v.contexts, hookName: "PostModelSwitch", toolUseID: "PostModelSwitch", hookEvent: "PostModelSwitch" }, G);
              yield V, F = [...F, V];
            }
          }
        } catch (v) {
          (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(v));
        }
        if (!A.abortController.signal.aborted && !(te.transition === void 0 && e.keptFirstResponse !== void 0)) {
          for (let v of g.takenNotes(F, { now: G.now, tools: A.options.tools, model: (0, import_chunk_f9x2f6cx.zl)(wt ?? (0, import_chunk_f9x2f6cx.ao)(), import_chunk_xfj2cwfv.J_) ? void 0 : Be })) if (yield v, F = [...F, v], A.abortController.signal.aborted) break;
        }
        F = yield* (0, import_chunk_0tkterak.CLa)(F, { resumeActive: ut, isMainLoop: ln, querySource: E, depth: ht.depth, continuesInterruptedWork: e.continuesInterruptedWork, model: tt, toolUseContext: A, now: G.now, uuid: G.uuid });
        let vd = Oe && !ut ? await hc(J, h, k, A, { messages: e.messages, querySource: E }, { messages: F, tools: A.options.tools, modelFacts: Be }) : void 0;
        J = vd?.routing ?? J;
        let Vi = ut ? J : await ui(F, J, A, vn), Er = te.transition === void 0, xd = !ut && vn && Er ? await rc(A.session) : void 0, Pd = !ut && uc(F, Vi, A, vn, Er, xd) ? await cc(Vi, A, () => (0, import_chunk_4vsz8a99.Kjt)(A), { messages: F, systemPrompt: ye, modelFacts: Be }, (v, V) => b2o(v, A, V), xd) : Vi, ny = F;
        for (let v of fc(F, Pd, { querySource: E, resumeActive: ut, stamp: G, announcementWalk: A.options.announcementWalk, instructionsBesideToolResults: vd?.endsOnToolResults })) yield v, F = [...F, v];
        if (Pd.projectDocReads !== void 0) mc(ny, F, wt ?? (0, import_chunk_f9x2f6cx.ao)(), E, A.agentId);
        let Id = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && !(te.transition === void 0 && e.keptFirstResponse !== void 0) ? (0, import_chunk_bzyb60p0.EKa)(A.options.appendSystemPrompt) : null;
        if (Id !== null) {
          let { startBehindNote: v } = require("/$bunfs/root/chunk-ghpe3kwt.js");
          for (let V of await v(Id, F, A, { foreground: vn, resumeActive: ut, stamp: G })) yield V, F = [...F, V];
        }
        let Os = (0, import_chunk_bz1f2qnq.Z)(A).mode;
        if (Ft) (0, import_chunk_w4dc83v7.Qw)("request_announcements");
        [tt, Be] = await Cd(F, Os), A.modelFacts = Be;
        let Ps = (0, import_chunk_bzyb60p0.b3e)({ permissionMode: Os, setting: A.options.getPlanModeSetting?.(), mainLoopModel: (0, import_chunk_4vsz8a99.$dn)(A), messages: F }), Dd = await Rs(Ps);
        if (Ft) (0, import_chunk_w4dc83v7.Lk)("request_announcements");
        let Ld = (0, import_chunk_gkm2eky6.Kmr)(Ps) !== null;
        if ((he || dt !== Ld) && e.renderSystemPrompt !== void 0) {
          he = false, dt = Ld;
          let v = await Qf(e.renderSystemPrompt, { ...A, options: { ...A.options, tools: (0, import_chunk_q2404y26.Ob)(A) } }, Dd);
          if (v !== void 0) ({ systemPrompt: ye, promptRenderEpoch: Ge, sampledSections: lo } = v), A.renderedSystemPrompt = ye, Mi({ messages: F, systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, querySource: E, stickyBetas: wt });
        }
        let ry = (0, import_chunk_865at33z.JP)(E) ? [] : (0, import_chunk_bzyb60p0.fts)(F, (0, import_chunk_bzyb60p0.kIn)(A), A.taskRegistry, A.toolState.get(import_chunk_bzyb60p0._rt));
        for (let v of ry) {
          let V = (0, import_chunk_bzyb60p0.Ut)(v, G);
          yield V, F = [...F, V];
        }
        for (let v of Cf(F, { querySource: E, mainThread: Ue && (0, import_chunk_865at33z.mp)(A.agentContext), model: Be.model, stamp: G })) yield v, F = [...F, v];
        if ((0, import_chunk_q2404y26.xDe)()) {
          let v = yield* _f(A, F, G, { signal: A.abortController.signal, mainThreadSession: A.agentId ? void 0 : A.session, heldRows: Pe, interruptedMessageId: () => Yn(A), now: G.now, uuid: G.uuid, markAborted: () => ko(A, E) });
          if (v.stopped !== void 0) return v.stopped;
          F = v.messages;
        }
        for (let v of await hf(F, A, { querySource: E, resumeActive: ut, model: Ps, stamp: G })) yield v, F = [...F, v];
        if ((0, import_chunk_r3kja8v6.ue)() && !(te.transition === void 0 && e.keptFirstResponse !== void 0)) {
          let { replMcpServersNote: v } = require("/$bunfs/root/chunk-56ts67a9.js");
          for (let V of v(F, { options: A.options, querySource: E, resumeActive: ut, stamp: G, agentId: A.agentId, shownTools: (0, import_chunk_q2404y26.Ob)(A) })) yield V, F = [...F, V];
        }
        for (let v of xf(F, ye, { options: A.options, querySource: E, resumeActive: ut, stamp: G })) yield v, F = [...F, v];
        if (!(Er && e.keptFirstResponse !== void 0)) for (let v of vf(F, ye, { options: A.options, querySource: E, resumeActive: ut, turnStart: Er, takesSystemMessages: () => !(0, import_chunk_f9x2f6cx.zl)(wt ?? (0, import_chunk_f9x2f6cx.ao)(), import_chunk_xfj2cwfv.J_) && (0, import_chunk_865at33z.E_)(Be), stamp: G })) yield v, F = [...F, v];
        let Ud = false;
        for (let v of Wu(F, { options: A.options, querySource: E, model: tt, effort: () => (0, import_chunk_bzyb60p0.$en)(Be, { effortValue: Ki(), turnEffort: (0, import_chunk_bz1f2qnq.kh)(A.permissionLayers) ?? e.turnEffortCap, hookEffortValue: e.pinnedEffort, querySource: E }), agentId: A.agentId, turnStart: Er, resumeActive: ut, stamp: G })) yield v, F = [...F, v], Ud = true;
        for (let v of wf(F, { options: A.options, querySource: E, model: tt, agentId: A.agentId, stickyBetas: wt ?? (0, import_chunk_f9x2f6cx.ao)(), turnStart: Er, resumeActive: ut, wroteCutRecord: Ud, thinkingIsOn: (0, import_chunk_865at33z.uxr)((0, import_chunk_bz1f2qnq.Bat)(A), Be.thinking.alwaysOn), stamp: G })) yield v, F = [...F, v];
        for (let v of Xu(F, { options: A.options, querySource: E, agentId: A.agentId, resumeActive: ut, stamp: G })) yield v, F = [...F, v];
        let ss = (0, import_chunk_y13trfs7.jqr)(F, A, { querySource: E, resumeActive: ut, baseModel: Dd, carrier: wt ?? (0, import_chunk_f9x2f6cx.ao)(), toolChangesRide: () => (0, import_chunk_b83x8d52.Uq)(wt ?? (0, import_chunk_f9x2f6cx.ao)(), Be) });
        if (ss.announcement !== void 0) {
          let v = (0, import_chunk_bzyb60p0.Ut)(ss.announcement, G);
          yield v, F = [...F, v];
        }
        yield* Pe, Pe = [];
        let { advisorModel: is, advisorDeferred: sy, advisorActive: iy } = ss, Yi = () => Do ? Do.recorded : (0, import_chunk_fe5esh7d.TA)(Et), zi = wt ?? (0, import_chunk_f9x2f6cx.ao)(), to = Wf(F, ye, { options: A.options, querySource: E, resumeActive: ut, stamp: G, inheritedReminderFold: () => Yi()?.reminderFold, inheritedWireShape: () => Yi()?.wireShape, inheritedEchoWireToolInputs: () => Yi()?.echoWireToolInputs, leadingTools: (v) => zi.leadingTools ?? (v ? (0, import_chunk_bzyb60p0.l6a)(A.options, ye) : []), contextRendering: J.rendering, toolDescribeEpoch: no, turnSections: lo });
        if (to.source !== "live_unrecorded") zi.leadingTools = to.recordedWireShape?.leadingTools ?? [];
        if (to.record) await Of(to.record, F, { options: A.options, getToolPermissionContext: async () => (0, import_chunk_bz1f2qnq.Z)(A, true), agentId: A.agentId, querySource: E, carrier: zi, modelFacts: Be }), yield to.record, F = [...F, to.record];
        if (Es !== void 0 && yr(F) === void 0) Es = void 0;
        if (te.transition === void 0 && !ut && vn && !A.agentId) {
          let v = Sc(F, { session: A.session, modelMayBeSwapped: () => (0, import_chunk_bzyb60p0.nrt)(tt, A.requestDialog), modelFacts: Be, tools: (0, import_chunk_q2404y26.Ob)(A), systemPrompt: ye, autoCompactWindow: A.options.autoCompactWindow, stamp: G });
          if (Es = v.sent, v.row !== void 0) yield v.row, F = [...F, v.row];
        }
        let ay = (0, import_chunk_bzyb60p0.USt)(F);
        if (to.atRenderPoint) try {
          if ((0, import_chunk_bzyb60p0.jY)(wt ?? (0, import_chunk_f9x2f6cx.ao)(), to.rewritten ? "prompt_invalidated" : "host_prompt"), Ue && !A.agentId) (0, import_chunk_cy0ck7w2.GSt)(import_chunk_cy0ck7w2.w5);
        } catch (v) {
          (0, import_chunk_k449cc64.i)(v);
        }
        let Is = (0, import_chunk_4mh8nmh5.Sl)((0, import_chunk_bzyb60p0.s6a)(to.systemPrompt, J.systemContext)), nr, Xi, Ds, Ji, Zi = () => {
          let v = Gf(F, Ds, { options: A.options, querySource: E, stamp: G, toolInputCopies: Ji });
          if (v) F = [...F, v];
          return v;
        };
        if (Oe && !qe) A.session.userPresence.noteWhoseTurn(false);
        A = { ...A, messages: F, turnStartIndex: Bi(F), modelFacts: Be, contextRoom: xc(() => Be, A.options.autoCompactWindow, () => F), unsavedHeads: { chars: 0 }, sentToolDescription: Pc(() => nr, () => Ds?.entries) };
        let Ar = (v) => {
          if (ut && (0, import_chunk_f9x2f6cx.Gh)(v)) v.virtualInResumeRun = true;
          return v;
        }, as = null, ta, Rr, Ls, jn, wr, Ns = (0, import_chunk_knp99ee7.QXs)(E, zg), Bs = (0, import_chunk_knp99ee7.bHa)(E, Ns);
        if ((0, import_chunk_bzyb60p0.QS)("query_setup_start"), Ft) (0, import_chunk_w4dc83v7.Qw)("request_announcements"), (0, import_chunk_w4dc83v7.Lk)("query_setup");
        let xe = Yf({ createStreamingToolExecutor: () => new Tl(A.options.tools, R, A, G.now, ln ? A.queuedCallsForMove : void 0), onReset: () => ud(A.options, Xr) }), { assistantMessages: be, toolResults: pt, toolUseBlocks: po } = xe;
        function na(v) {
          if (xe.toolRequestedEndTurn = (0, import_chunk_1hg0ytx8._Za)(xe.toolRequestedEndTurn, (0, import_chunk_1hg0ytx8.v5e)(v)), v.type !== "attachment") return;
          if (v.attachment.type === "hook_stopped_continuation") xe.shouldPreventContinuation = true;
          else if (v.attachment.type === "hook_deferred_tool") xe.toolWasDeferred = true;
        }
        function ra(v, V) {
          if (qe &&= !(0, import_chunk_tteqedwm.rIa)(v), rt ||= po.some(import_chunk_tteqedwm.eKo), v.type === "attachment") {
            pt.push(v);
            return;
          }
          if ((0, import_chunk_f9x2f6cx.Gh)(v)) {
            xe.scriptRows.push(v);
            return;
          }
          if (v.type === "user" && typeof v.appendToToolResult === "string") {
            pt.push(v);
            return;
          }
          let Te;
          try {
            let Re = V.options.refreshTools?.() ?? V.options.tools;
            if (v.type === "progress") return;
            Te = (0, import_chunk_bzyb60p0.tv)([v], Re, Be, { reminderFold: ay }), (0, import_chunk_p3d6wgn7.Apo)(Te, (0, import_chunk_yvba4101.ac)(Be.model).maxBase64Size);
          } catch (Re) {
            if (v.type === "user") pt.push(v);
            throw Re;
          }
          pt.push(...Te.filter((Re) => Re.type === "user"));
        }
        let Nd = false;
        function* ls(v = true) {
          if (A.abortController.signal.aborted) return;
          for (let V of xe.streamingToolExecutor.getCompletedResults()) {
            if ((0, import_chunk_bzyb60p0.IO)(V)) {
              yield V;
              continue;
            }
            if (V.message) {
              if (!v && (0, import_chunk_bzyb60p0.Qgi)(V.message)) continue;
              if (Nd) (0, import_chunk_wx3ay5nf.sgt)([V.message], A);
              if (yield Ar(V.message), (0, import_chunk_r3kja8v6.ue)()) Ni(V.message);
              na(V.message), ra(V.message, A);
            }
            if (V.toolDuration) xe.toolDurations.push(V.toolDuration);
          }
        }
        function* sa(v) {
          let V = v instanceof import_chunk_p3d6wgn7.PUt || v instanceof import_chunk_fbqj9ad4.lU, Te = v instanceof Error ? v.message : String(v);
          if (V) (0, import_chunk_w578pjby.t)(`Query image error: ${Te}`, { level: "error" });
          else (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(v), "queryLoop invariant broken"));
          try {
            let Re;
            if (po.length > 0) {
              try {
                yield* ls(false);
              } catch (Ee) {
                (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(Ee), "tool drain failed while ending the turn"));
              }
              Re = Vr(xe, V ? "image_error" : "model_error"), (0, import_chunk_wx3ay5nf.sgt)(xe.toolResults, A);
              for (let Ee of Re.finishedResults) {
                if ((0, import_chunk_bzyb60p0.Qgi)(Ee)) continue;
                try {
                  if ((0, import_chunk_wx3ay5nf.sgt)([Ee], A), yield Ar(Ee), (0, import_chunk_r3kja8v6.ue)()) Ni(Ee);
                  na(Ee), ra(Ee, A);
                } catch (ft) {
                  (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(ft), "finished tool result not recorded while ending the turn"));
                }
              }
            }
            if (yield* Bg(be, V ? bf : Mf(Te), G, Ef(xe), A), Re?.removes) yield Re.removes;
          } catch (Re) {
            (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(Re), "tool_result pairing failed while ending the turn"));
          }
          try {
            let Re = (0, import_chunk_bzyb60p0._i)(V ? { content: Te, error: "invalid_request", errorDetails: Te, now: G.now, uuid: G.uuid } : { content: Te, now: G.now, uuid: G.uuid });
            yield Re, hn(A, E, Re);
          } catch (Re) {
            (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(Re), "error frame failed while ending the turn"));
          }
          if (V) return { reason: "image_error" };
          return (0, import_chunk_w578pjby.DOe)("Query error", v), { reason: "model_error", error: v };
        }
        function* Bd(v) {
          yield* jd(), yield v;
        }
        function* jd() {
          if (Kt && wr) yield { type: "system", subtype: "model_refusal_no_fallback", content: "", level: "warning", originalModel: wr.originalModel, requestId: wr.requestId, apiRefusalCategory: wr.apiRefusalCategory, apiRefusalExplanation: wr.apiRefusalExplanation, refusedUserMessageUuid: _e, isMeta: false, timestamp: G.now(), uuid: G.uuid() };
        }
        let { mcp: Hd } = A.getAppState(), Wd, Gd = cf(A, wt ?? (0, import_chunk_f9x2f6cx.ao)(), (v) => {
          Wd = v;
        }), dy = mf(A), js = {};
        if (Kt) try {
          js = Xc({ userModel: (0, import_chunk_bzyb60p0.b3e)({ permissionMode: Os, setting: A.options.getPlanModeSetting?.(), mainLoopModel: mo, messages: F }), automaticModels: an.automaticModels() });
        } catch (v) {
          (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(v)), js = {};
        }
        if ((0, import_chunk_bzyb60p0.nrt)(tt, A.requestDialog)) {
          let v = [tt, A, Kt, () => A.getAppState().fastMode, G], V = Mp(E) ? yield* Ap(...v) : await jl(...v);
          switch (V.kind) {
            case "proceed":
              break;
            case "aborted":
              if (!(0, import_chunk_cbnm4p23.jPe)(A.abortController.signal.reason)) yield (0, import_chunk_bzyb60p0.hR)({ toolUse: false, interruptedMessageId: Yn(A), interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(A.abortController.signal), now: G.now, uuidFn: G.uuid });
              return ko(A, E), { reason: "aborted_streaming" };
            case "failed":
              return yield V.message, hn(A, E, V.message), { reason: "model_error", error: V.error };
            case "switch":
              if (an?.moveTo(V.model, { kind: "usage_credits", keepsFastModeOff: V.keepsFastModeOff }), Mr = an?.lastWritten(), kr(V.model, "the session"), await ws(V.model), br = V.model, yield { type: "query_model_change", toModel: V.model }, V.notice) yield V.notice;
          }
        }
        if ((0, import_chunk_bzyb60p0.QS)("query_setup_end"), Ft) (0, import_chunk_w4dc83v7.Qw)("query_setup");
        let Qd = Jt.gates.isAnt && (0, import_chunk_865at33z.Pr)(E) !== "auxiliary" ? (0, import_chunk_fpk6xk4r.dNa)(A.agentId ?? Jt.sessionId, A.storageV5) : void 0, $d = E === "comparison_fork" ? import_chunk_bzyb60p0.G4a : Qd, qs = (0, import_chunk_865at33z.Pr)(E) === "main" && !A.agentId;
        if (cd && (qs || Q)) try {
          let v = qs ? Et : F, V = qs ? Do?.uuids : void 0;
          $d = cd.composeTeleportFetchOverride(Qd, () => V ?? v.map((Te) => Te.uuid), qs ? "main" : "fork", v, F, (Te) => (0, import_chunk_sjqze7qg.P7a)(A.session.host, Te ?? tt));
        } catch (v) {
          (0, import_chunk_k449cc64.i)(v);
        }
        let Kd = (0, import_chunk_2xjdqky3.om)() && (0, import_chunk_2xjdqky3.i1)(), cy = Kd && (!(0, import_chunk_bzyb60p0.zTe)(Be, A.options.autoCompactWindow) || (0, import_chunk_bzyb60p0.eZr)(E, Be, A.options.autoCompactWindow));
        if (so.kind !== "compacted" && E !== "compact" && $o === void 0 && !cy && !A.abortController.signal.aborted) {
          let v = (0, import_chunk_bzyb60p0.VQr)(F, Be.bytesPerToken) - rs;
          if ((0, import_chunk_bzyb60p0.fne)(v, Be, A.options.autoCompactWindow).level === "blocked") {
            let Te = (0, import_chunk_2xjdqky3.Mit)(E), Re = so.kind === "failed" ? so.compactFailure : void 0, Ee = Te ? {} : Rm({ outcome: so, compactionCheck: ty, blockingCheck: { tokenCount: v, facts: Be }, configuredWindow: A.options.autoCompactWindow });
            if (!Te && Kd && vm(so, Be, Ee)) ;
            else if (yield* os(void 0, false, { pendingToolUseSummary: Jn, prevToolDurations: _n })) return io;
            else {
              if (!Te) (0, import_chunk_y53wbr8a.a)("tengu_ptl_surfaced_to_user", { reason: (0, import_chunk_78g0060s.S)("blocking_limit"), querySource: (0, import_chunk_865at33z.ka)(E), wasGatedByPriorAttempt: false, reactiveUnsupported: !(0, import_chunk_2xjdqky3.i1)(), compactFailureReason: (0, import_chunk_78g0060s.fe)(Re?.reason), ...Ee });
              let ft = wm(so, { fallback: Ue ? zn : void 0, model: Be.model, configuredWindow: A.options.autoCompactWindow }), Ve = { ...(0, import_chunk_bzyb60p0._i)({ content: ft ?? (0, import_chunk_bzyb60p0.lpi)(Re) ?? import_chunk_865at33z.GV, error: "invalid_request", apiError: ft === void 0 ? void 0 : "autocompact_thrashing", now: G.now, uuid: G.uuid }), ...(0, import_chunk_bzyb60p0.Ets)([], A.abortController.signal.aborted) };
              return yield Ve, hn(A, E, Ve), { reason: "blocking_limit" };
            }
          }
        }
        let ia = te.transition === void 0 ? e.keptFirstResponse : void 0, vr = !$f(xe, ia, e.keptResults);
        if (vr && ia !== void 0) yield Vf(ia);
        let kn, rr = false, Cn, xn, aa, la, ua, Pn = { mintedStateless: false, delivery: void 0, isRefusalToken: false }, ma, pa, fa, Vd, Gt = ul, sr;
        function ds(v, V, Te) {
          return { type: "system", subtype: "model_refusal_fallback", direction: "retry", scope: "session", content: (0, import_chunk_gq1dr8pm.mBt)(v.originModel, v.servingModel, v.apiRefusalCategory), level: "warning", trigger: "refusal", originalModel: v.originModel, fallbackModel: v.servingModel, requestId: v.requestId, apiRefusalCategory: v.apiRefusalCategory, apiRefusalExplanation: null, ...v.apiRefusalCyberVerification !== void 0 && { apiRefusalCyberVerification: v.apiRefusalCyberVerification }, retractedMessageUuids: [...v.retractedMessageUuids], refusedUserMessageUuid: v.refusedUserMessageUuid, ...v.sawCyberRefusal && { sawCyberRefusal: true }, isMeta: false, timestamp: G.now(), uuid: V, ...Te && { provisional: Te } };
        }
        let my = Xr ? A.options.activeMcpServer : void 0, gy = Xr ? A.options.activeMcpTool : void 0;
        ud(A.options, Xr), (0, import_chunk_bzyb60p0.QS)("query_api_loop_start"), _d?.disarm();
        try {
          while (vr) {
            vr = false;
            let v = kc({ modelFacts: Be, betas: wt ?? (0, import_chunk_f9x2f6cx.ao)(), recorded: to.recordedWireShape }, F, G);
            if (v !== void 0) yield v, F = [...F, v], A.messages = F;
            let V, Te = Es, Re = Te !== void 0 || mi(F);
            if (ut && (Cn !== void 0 || !hd(tt))) ut = false;
            let Ee = is !== void 0 && ((0, import_chunk_k67pwqya.b4)(tt, Ps) || (0, import_chunk_sjqze7qg.t7a)(tt, is)) ? is : void 0;
            if (is !== void 0 && Ee === void 0) (0, import_chunk_w578pjby.t)(`[AdvisorTool] Skipping advisor for this attempt: ${is} ranks below the fallback model ${tt}`);
            if (on !== void 0) if (Nt) on = void 0, Nt = false;
            else Nt = true;
            let ft = (0, import_chunk_bzyb60p0.cts)(xo, Oo, tt), Ve = be.length, at, zt, oo = [], et, yo = false;
            function* Ct() {
              let Xe = at;
              if (Xe === void 0) return 0;
              let ct = [];
              for (let Wt = be.length - 1; Wt >= 0; Wt--) if (Xe.has(be[Wt].uuid)) ct.unshift(be[Wt]), be.splice(Wt, 1);
              oo.push(...ct);
              for (let Wt of ct) yield { type: "tombstone", message: Wt };
              return ct.length;
            }
            function* Mt() {
              let Xe = G.uuid(), { notice: ct, state: Wt } = tm(Gt, Xe);
              if (Gt = Wt, ct === void 0) return;
              let ho = ds(ct, Xe, true);
              sr = ho, yield ho;
            }
            function* Vo() {
              let { notice: Xe, state: ct } = ys(Gt);
              if (Gt = ct, sr = void 0, Xe === void 0) return;
              yield ds(Xe, G.uuid());
            }
            function* Po() {
              let Xe = zt;
              if (Xe === void 0) return;
              if (oo.length > 0) Xe.retractedMessageUuids = oo.flatMap((ct) => (0, import_chunk_bzyb60p0.Mg)([ct]).filter(import_chunk_bzyb60p0.bQ).map((Wt) => Wt.uuid));
              Xe.refusedUserMessageUuid = _e, yield Xe, zt = void 0;
            }
            let It, it;
            e: try {
              let Xe = [], ct = [], Wt = e.takePlainDelta, ho = Jc(Gt, tt, ek);
              Gt = ho.state;
              let Lo = !Bs && ho.armTarget === void 0 ? (0, import_chunk_gq1dr8pm.sMi)(tt) : void 0, ar = tt, Dn = {}, Fr = !Bs && !Ze && !ro ? (L, Tt, At) => {
                if (Ze || ro) return;
                let Ho = (0, import_chunk_gq1dr8pm.sMi)(ar, { visibleRouteDeclined: L, apiRefusalCategory: Tt, responseSwapped: At });
                if (Ho === void 0) return;
                let gr = xe.streamingToolExecutor;
                if (gr.hasStartedToolCall()) return;
                try {
                  let { aborted: En, completedBeforeEvent: Wo, queuedNeverStarted: we } = gr.discardAndAbortInFlight((0, import_chunk_cbnm4p23.PMr)());
                  Dn.counts = { aborted: En, completedBeforeEvent: Wo, queuedNeverStarted: we };
                } catch (En) {
                  (0, import_chunk_k449cc64.i)(En);
                }
                return Ho;
              } : void 0, un = (0, import_chunk_gq1dr8pm.eul)(), Yo = (0, import_chunk_78g0060s.f)((0, import_chunk_f9x2f6cx.xia)()), Lr = (0, import_chunk_gq1dr8pm.rul)(A.permissionRelays?.bridge?.dialog, () => (0, import_chunk_865at33z.b)("tengu_loggia_denkbild", false)), lr = A.getAppState().replBridgeSessionActive && Lr === void 0, Nr = un || lr, us = Xp({ toolUseContext: A, isMainThread: Kt }), bn = !Bs && (0, import_chunk_bzyb60p0.Jyt)(E, A.agentId, tt), dr = Vp(bn, te.transition, tt), va = !Bs ? (0, import_chunk_bzyb60p0.ano)({ currentModel: tt, compiledTablesOnly: (0, import_chunk_865at33z.JP)(E), alreadyUsed: ho.armTarget === void 0 && ml(Ht, (0, import_chunk_gq1dr8pm.JIi)()), declined: ro, inCascadeEpisode: Gt.inEpisode, cascadeNext: ho.armTarget, suppressionAlreadyLogged: Zo, requestDialog: A.requestDialog, isMainThread: Kt, isAgentThread: E.startsWith("agent:"), consumerLacksDialogCapability: Nr, preferenceQuestionPending: us, serverDefaultFallbacksEnabled: () => (0, import_chunk_865at33z.b)(import_chunk_bzyb60p0.lts, false), selfTargetDefaultFallbacksEnabled: () => (0, import_chunk_865at33z.b)(import_chunk_bzyb60p0.dts, false), sticky: wt ?? (0, import_chunk_f9x2f6cx.ao)(), threadedRequest: bn && !dr, summaryRequest: E === "compact" }) : import_chunk_bzyb60p0.M4a, Hn = yp(va, tt, A, A.getAppState().fastMode, Kt);
              if (Hn.shouldLogSuppression) Zo = true, (0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_suppressed", { reason: !Kt ? (0, import_chunk_78g0060s.S)("subagent_setting_off") : A.requestDialog === void 0 ? (0, import_chunk_78g0060s.S)("no_dialog_host_setting_off") : un ? (0, import_chunk_78g0060s.S)("no_consumer_capability_setting_off") : (0, import_chunk_78g0060s.S)("remote_controlled_session_setting_off"), capability_source: Yo });
              let cr = dr && Hn.serverLane?.mode === "default", $t = dr && !cr ? void 0 : Hn.serverLane, uo = $t === void 0 ? Hn.visibleModel : void 0, zo = Ze ? void 0 : Lo, Mn = xn;
              xn = void 0;
              let pr = aa;
              aa = void 0;
              let cs = la;
              la = void 0;
              let xa = ua;
              ua = void 0;
              let fr = Mn !== void 0 && Pn.mintedStateless;
              Pn.mintedStateless = false;
              let Cy = Pn.isRefusalToken;
              Pn.isRefusalToken = false;
              let by = fr ? Pn.delivery : void 0;
              Pn.delivery = void 0;
              let cu = ma;
              ma = void 0;
              let My = pa;
              pa = void 0;
              let Ey = fa;
              fa = void 0;
              let Ay = !ro && Lo !== void 0 && uo === void 0 && $t === void 0 && Mn === void 0;
              if ((0, import_chunk_xfj2cwfv.nn)() && !A.abortController.signal.aborted) await (0, import_chunk_xfj2cwfv.Ga)();
              (0, import_chunk_bzyb60p0.QS)("query_api_streaming_start");
              let Ys = cs ?? Be, Oa = Ys.model, pu = () => A.agentId === void 0 && (0, import_chunk_865at33z.Pr)(E) === "main" && !A.abortController.signal.aborted && !ut && Cn === void 0 && Mn === void 0 && !mi(F);
              if (pu()) await ec(A.session.host, F, A.abortController.signal, Nn);
              if (pu()) for (let L of Zu({ host: A.session.host, messages: F, model: Nn, createAttachmentMessage: (Tt) => (0, import_chunk_bzyb60p0.Ut)(Tt, G) })) yield L, F = [...F, L];
              let Pa = { messages: F, text: null, secondaryText: null, afterUuid: null }, Xs = Cn !== void 0 ? Ql : Up({ querySource: E, agentId: A.agentId, model: tt, reminderModelFacts: Ys, messages: F, session: A.session, stamp: G, decide: import_chunk_bzyb60p0.Jqa, deliveryOverride: by, retryGoesStateless: fr || cr, recordedKeptReminders: to.recordedWireShape?.keptReminders, recordsDue: Gc, createRecord: import_chunk_bzyb60p0.Ut }), cn;
              if (Cn !== void 0) cn = { ...Pa, messages: [...F, Cn] };
              else if (Xs.delivery === "kept") {
                for (let L of Xs.records) yield L, F = [...F, L];
                cn = { ...Pa, messages: F };
              } else if (Xs.delivery === "none") cn = Pa;
              else cn = sl(F, A.session, Ys);
              for (let [L, Tt] of [["batching_reminder_sent", cn.text], ["secondary_reminder_sent", cn.secondaryText]]) {
                let At = pd.get(L);
                if (Tt === null || cn.afterUuid === null || At?.afterUuid === cn.afterUuid && At.text === Tt && At.model === Oa) continue;
                pd.set(L, { afterUuid: cn.afterUuid, text: Tt, model: Oa });
                let Ho = (0, import_chunk_bzyb60p0.Ut)({ type: L, text: Tt, model: Oa }, G);
                yield Ho, F = [...F, Ho];
              }
              let fu = Ft && Gd !== void 0;
              if (fu) (0, import_chunk_w4dc83v7.Lk)("auto_mode_context_wait");
              let Js = await ff(Gd);
              if (fu) (0, import_chunk_w4dc83v7.Qw)("auto_mode_context_wait");
              Ds = void 0, Ji = void 0;
              let gu = false, Zs = G.callModel;
              if ((0, import_chunk_r3kja8v6.ue)() && ln) {
                if ((0, import_chunk_d109n23j.azo)(A), (0, import_chunk_d109n23j.lzo)(A)) Zs = ik;
              }
              if ($o !== void 0) {
                let L = $o;
                $o = void 0, Zs = async function* () {
                  yield L;
                };
              }
              let ms = { systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, querySource: E };
              if (Zs === G.callModel) _s({ ...ms, messages: F }), (0, import_chunk_bzyb60p0.z4a)({ ...ms, messages: F }, () => ({ relayActive: ZT?.getTeleportCacheState().status === "active", compactedBeforeFirstCall: so.kind === "compacted" })), qu(F, E, tt, A.agentId, se, A.readFileState, { bodyModels: [Be, Ys], betas: wt ?? (0, import_chunk_f9x2f6cx.ao)(), thinkingIsOn: (0, import_chunk_865at33z.uxr)((0, import_chunk_bz1f2qnq.Bat)(A), Be.thinking.alwaysOn) });
              let yu = Zs, Ia = Wt !== void 0 && w2o() ? (0, import_chunk_bzyb60p0.Y4a)() : void 0, Ry = Ia !== void 0 ? (L) => yu(L, Ia.borrowed) : yu;
              for await (let L of ym(Ry({ messages: J.bare ? (0, import_chunk_bzyb60p0.i6a)(cn.messages, J.userContext) : cn.messages, systemPrompt: Is, thinkingConfig: (0, import_chunk_bz1f2qnq.Bat)(A), tools: (0, import_chunk_q2404y26.Ob)(A), signal: A.abortController.signal, options: { clock: A.session.host.clock, random: G.random, withheldTools: (0, import_chunk_q2404y26.wCi)(A), async getToolPermissionContext() {
                return (0, import_chunk_bz1f2qnq.Z)(A, true);
              }, recordedToolDescriptions: to.toolDescriptions, recordedToolEntries: to.toolEntries, recordedToolServers: to.toolServers, redescribedTools: to.redescribing?.names, recordedCliPrefix: to.recordedCliPrefix, recordedWireShape: to.recordedWireShape, systemPromptSource: to.source, systemPromptSnapshotHash: to.snapshotHash, onInlineToolsDeclared: (Tt) => {
                nr = Tt;
              }, onPromptHeadSent: (Tt) => {
                Xi = Tt;
              }, onWrittenPdfReadSent: Re ? (Tt) => {
                V = Tt, Te?.(Tt);
              } : void 0, recordedDeferredTools: () => (0, import_chunk_fe5esh7d.tj)(F), onDeferredToolsSent: (Tt) => {
                Ds = Tt;
              }, onToolInputCopiesSent: (Tt) => {
                Ji = Tt;
              }, model: tt, modelFacts: Be, promptRenderEpoch: Ge, isDefaultModel: js.isDefaultModel, defaultModel: js.defaultModel, ...Jt.gates.fastModeEnabled && { fastMode: A.options.fastMode }, modelIsRefusalFallbackTarget: (0, import_chunk_gq1dr8pm.Jcl)({ requestModel: tt, turnRefusalOverride: Qo, chainStepModel: Oo > 0 ? xo[Oo] : void 0, userModel: mo }), modelIsFallbackForThisTurn: Qo !== void 0 || Oo > 0, noServerToolCalls: X, isNonInteractiveSession: A.options.isNonInteractiveSession, withoutToolDescribeHooks: A.options.settingsHooksOff, fallbackModel: xo[Oo + 1], accessFallbackModel: ft, refusalFallbackModel: !ro ? uo ?? zo : void 0, refusalFallbackModelLane: !ro ? uo !== void 0 ? "visible" : zo !== void 0 ? "silent" : void 0 : void 0, refusalFallbackCascadeHop: uo !== void 0 ? ho.hop : void 0, refusalFallbackSilentArmActive: Ay, refusalFallbackSilentRearm: Fr, serverRefusalFallback: $t, fallbackCreditCode: Mn, fallbackCreditIsRefusalToken: Cy, autoModeServerContext: Js, wholeCutFiles: J.wholeCutFiles, ...A.agentId === void 0 && (0, import_chunk_865at33z.Pr)(E) === "main" && { memoryFilesOnRequest: (Tt) => (0, import_chunk_sjqze7qg.N7a)(A.session.host, Tt), queuedMessages: (Tt, At) => (0, import_chunk_bzyb60p0.Gqa)(A.session, Tt, At) }, laidFilesModels: () => (0, import_chunk_sjqze7qg.xso)(A.session.host), ...Js === void 0 && { noAutoModeContextReason: Wd ?? "context_failed" }, ...Js !== void 0 && (pf(A) || Js.judgeOnlyTools !== void 0) && { serverClassifier: true }, fallbackCreditMintModel: pr, fallbackCreditMintModelFacts: cs, fallbackCreditMintRequestId: xa, fallbackCreditMintedStateless: fr, refusalRetryLeavesItsThread: cr, fallbackStampFromModel: cu, fallbackStampCategory: My, fallbackStampTrigger: Ey, fallbackStampOriginalRequestId: cu !== void 0 ? Vd : void 0, fallbackCreditLaneArmed: Hn.visibleModel !== void 0, querySource: E, keepPartialMessageOnAbort: e.keepPartialMessageOnAbort, spawnedBySkill: O, activeSkill: A.options.activeSkill, activeMcpServer: my, activeMcpTool: gy, messageClientPlatform: A.options.messageClientPlatform, agents: A.options.agentDefinitions.activeAgents, allowedAgentTypes: A.options.agentDefinitions.allowedAgentTypes, primitiveToolGrant: A.primitiveToolGrant, hasAppendSystemPrompt: !!A.options.appendSystemPrompt, userSystemPrompt: !A.agentId && (0, import_chunk_z2xw6net.UH)() ? nk(A.options.customSystemPrompt, A.options.appendSystemPrompt) : void 0, maxOutputTokensOverride: Jg, replyFits: (Tt) => ks(Tt, Be, A.options.autoCompactWindow), continuesCutReply: te.transition?.reason === "max_output_tokens_recovery", resumeIncompleteThinking: ut, thinkingTitles: We, fetchOverride: $d, mcpTools: Hd.tools, promptTooLongIsHandled: true, hasPendingMcpServers: Hd.clients.some((Tt) => Tt.type === "pending") && !(0, import_chunk_q2404y26.bCi)(A), toolPoolRefreshes: A.options.refreshTools !== void 0, mcpClients: A.options.mcpClients, queryTracking: ht, continuesInterruptedWork: e.continuesInterruptedWork, effortValue: Ki(), effortSetAsideByHold: (0, import_chunk_bz1f2qnq.Avr)(A), turnEffort: (0, import_chunk_bz1f2qnq.kh)(A.permissionLayers) ?? e.turnEffortCap, hookEffortValue: e.pinnedEffort ?? (Hi && te.transition?.reason === "thinking_only_retry" ? kg(Be, { effortValue: Ki(), turnEffort: (0, import_chunk_bz1f2qnq.kh)(A.permissionLayers) ?? e.turnEffortCap, querySource: E, stickyBetas: wt ?? (0, import_chunk_f9x2f6cx.ao)() }) : void 0), isEffortPinned: e.pinnedEffort !== void 0, refusalFallbackEffort: (0, import_chunk_k67pwqya.iws)(Qo, Cr), advisorModel: Ee, advisorDeferred: sy, advisorActive: iy, skipCacheWrite: I, skipMessageCacheMarkers: H, compactionRequestKind: z, apiAttemptsLeft: re, prevToolDurations: _n, evictCacheOnComplete: pe, agentCacheTtlOverride: ie, forkPointUuid: se, divergesAtMessageId: le, thinkingStripPlan: ae, advisorStripPlan: oe, toolResultCuts: Ae, stickyBetas: wt, proactivityLevel: (0, import_chunk_4vsz8a99.hme)(A), agentId: A.agentId, agentContext: A.agentContext, dataFlowLoop: (0, import_chunk_bzyb60p0.ALt)(A), credentials: A.credentials, storageV5: A.storageV5, isBackgroundAgent: A.isBackgroundAgent, modelCallNames: A.modelCallNames, sendSideQueryBeta: (0, import_chunk_865at33z.JP)(E) && (0, import_chunk_4vsz8a99.BG)().size > 0 && (0, import_chunk_bzyb60p0.eQ)() || A.sendSideQueryBeta, spendingLoopId: A.spendingLoopId, onRetryStatus: A.onRetryStatus, subscribeRetryWake: A.subscribeRetryWake, ...e.taskBudget && { taskBudget: { total: e.taskBudget.total, ...kt !== void 0 && { remaining: kt } } } } }), () => xe.streamingToolExecutor, Wt === void 0 ? void 0 : (0, import_chunk_bzyb60p0.AIn)("query", () => ct.length === 0, Wt), Ia?.lend)) {
                if (L.type === "assistant") (0, import_chunk_7f901c6t.DZa)(L);
                if (L.type === "tool_drain_tick") {
                  yield* ls();
                  continue;
                }
                if (L.type === "stream_event") dm(L, A, E, po.length === 0);
                if (L.type === "model_fallback_triggered") {
                  it = L.error;
                  break e;
                }
                if (L.type === "assistant" && (0, import_chunk_bzyb60p0.Uen)(L)) {
                  yield L;
                  continue;
                }
                if (L.type === "stream_event" && L.event.type === "content_block_start" && L.event.content_block.type === "tool_use") setTimeout(import_chunk_bzyb60p0.a2a, 0), e.streamWatcher?.atToolUseStart(A);
                if (!gu && L.type === "assistant" && !L.isApiErrorMessage) {
                  if (gu = true, !ut) {
                    let we = Zi();
                    if (we) yield we;
                  }
                }
                let Tt = Re && !ut && L.type === "assistant" && !L.isApiErrorMessage ? Cc(V, F, G) : void 0;
                if (Tt !== void 0) yield Tt, F = [...F, Tt], A.messages = F, _s({ ...ms, messages: F });
                if (L.type === "attachment") {
                  yield L, F = [...F, L], _s({ ...ms, messages: F });
                  continue;
                }
                if (L.type === "hint_clears") {
                  let we = new Set(L.ids);
                  for (let mt of (0, import_chunk_bzyb60p0.XQr)(F, we)) {
                    let bt = (0, import_chunk_n2dbhmj2.Fa)(mt);
                    if (bt === null) {
                      (0, import_chunk_w578pjby.t)("hint_clears: a cleared Read has a file_path that cannot be expanded (null byte in it or in the working directory); leaving readFileState as is");
                      continue;
                    }
                    A.readFileState.delete(bt);
                  }
                  F = (0, import_chunk_bzyb60p0.uZt)(F, we, new Map(Object.entries(L.contentById))), _s({ ...ms, messages: F }), yield L;
                  continue;
                }
                if (L.type === "server_fallback") {
                  e.streamWatcher?.atFallback();
                  let we = (0, import_chunk_bzyb60p0.H4a)(L, { isMainThread: Kt, emitsLocalScope: md });
                  if ((0, import_chunk_y53wbr8a.a)("tengu_rotunda_pennant_applied", { reason: (0, import_chunk_78g0060s.f)(we.telemetry.reason), entitlement_blind: (0, import_chunk_865at33z.P7e)(), armed_mode: (0, import_chunk_78g0060s.f)($t?.mode ?? "none"), mid_stream: we.telemetry.midStream, discarded_block_count: we.telemetry.discardedBlockCount, tombstoned_had_tool_use: we.telemetry.tombstonedHadToolUse, request_id_sha12: we.telemetry.requestId !== null ? (0, import_chunk_myvyhcm0.Zn)(we.telemetry.requestId) : void 0, original_model_scope: (0, import_chunk_78g0060s.f)(we.telemetry.originalModelScope), queryChainId: Vt, queryDepth: ht.depth, querySource: (0, import_chunk_865at33z.ka)(E), final_stop_reason: (0, import_chunk_78g0060s.fe)(we.telemetry.finalStopReason ?? void 0), api_refusal_category: (0, import_chunk_78g0060s.fe)(we.telemetry.apiRefusalCategory), ...(0, import_chunk_k67pwqya.Ovr)(L.refusedEffort) }), we.userVisible) {
                    (0, import_chunk_cqa9hrgx.u)("refusal_fallback");
                    let mt = tt, bt = (0, import_chunk_bzyb60p0.K4a)({ scope: we.bannerScope, category: L.apiRefusalCategory, refusingModel: tt, firstRefusal: Xg }), Bt = (0, import_chunk_bzyb60p0.ino)($t?.model, L.toModel), Uo = tt === Bt, No = !fn(L.toModel, tt, A, A.getAppState().fastMode, Kt);
                    if (No || !((0, import_chunk_865at33z.N0)(L.toModel) ?? ((0, import_chunk_865at33z.wo)(L.toModel) || (0, import_chunk_865at33z.KT)(L.toModel)))) {
                      if ((0, import_chunk_w578pjby.t)(`Server refusal-fallback target "${L.toModel}" ${No ? "is a model auto mode does not run on" : "is not in the availableModels allowlist"}; declining the swap`, { level: "warn" }), ro = true, !No && $t?.mode === "default" && import_chunk_xfj2cwfv.oT !== null) (0, import_chunk_f9x2f6cx.jh)(wt ?? (0, import_chunk_f9x2f6cx.ao)(), import_chunk_xfj2cwfv.oT);
                      let _t = [];
                      for (let Io of L.discardedMessages) {
                        let pn = be.findIndex((ps) => ps.uuid === Io.uuid);
                        if (pn !== -1) be.splice(pn, 1);
                        _t.push(Io);
                      }
                      for (let Io = be.length - 1; Io >= 0; Io--) {
                        let pn = be[Io];
                        if (pn.message.model === L.toModel) be.splice(Io, 1), _t.push(pn);
                      }
                      let Ro = pt.slice();
                      xe.reset({ clearAssistantMessages: false }), Xe.length = 0;
                      let _o = xe.streamingToolExecutor.discardAndAbortInFlight((0, import_chunk_cbnm4p23.PMr)());
                      (0, import_chunk_y53wbr8a.a)("tengu_rotunda_pennant_tools", { lane: (0, import_chunk_78g0060s.S)("decline"), aborted: _o.aborted, completed_before_event: _o.completedBeforeEvent, queued_never_started: _o.queuedNeverStarted, compensated_removes: _o.toolUseIds.length }), xe.rebuildStreamingToolExecutor();
                      for (let Io of _t) yield { type: "tombstone", message: Io };
                      for (let Io of Ro) yield { type: "tombstone", message: Io };
                      if (_o.toolUseIds.length > 0) yield { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: _o.toolUseIds } };
                      let Wn = L.reason === "refusal" ? (0, import_chunk_bzyb60p0.xPn)("refusal", { type: "refusal", category: L.apiRefusalCategory ?? null, explanation: null, fallback_credit_token: null, fallback_has_prefill_claim: null, recommended_model: null }, L.requestId, tt) : (0, import_chunk_bzyb60p0._i)({ content: No ? "The server routed this response to a model that auto mode does not run on; the response was discarded." : "The server routed this response to a model that is not in your organization\u2019s availableModels allowlist; the response was discarded.", error: "invalid_request", now: G.now, uuid: G.uuid });
                      if (Wn) await g.appended(Wn), be.push(Wn), yield Wn;
                      break;
                    }
                    Ht += 1;
                    let Br = (0, import_chunk_k67pwqya.QBi)({ refusedEffort: L.refusedEffort, fallbackModel: Bt, heldBySession: we.swapSession && (0, import_chunk_865at33z.uz)(A.agentContext), loopOverride: Qo, loopEffort: Cr });
                    if (Qo = Bt, Cr = Br.loopEffort, ut && !hd(Bt)) ut = false;
                    if (we.swapSession) an?.moveTo(Bt, { kind: "refusal", carriedEffort: Br.latchEffort, isCyber: L.reason === "refusal" && L.apiRefusalCategory === "cyber", requestId: L.requestId }), Mr = an?.lastWritten(), kr(Bt, "the session");
                    let Go = new Set(L.discardedMessages.map((_t) => _t.uuid));
                    if (Go.size > 0) {
                      for (let _t = be.length - 1; _t >= 0; _t--) if (Go.has(be[_t].uuid)) be.splice(_t, 1);
                    }
                    let Ao = [];
                    if (we.tombstonedToolUse) {
                      let _t = xe.streamingToolExecutor.discardAndAbortInFlight((0, import_chunk_cbnm4p23.PMr)());
                      if ((0, import_chunk_y53wbr8a.a)("tengu_rotunda_pennant_tools", { lane: (0, import_chunk_78g0060s.S)("accept"), aborted: _t.aborted, completed_before_event: _t.completedBeforeEvent, queued_never_started: _t.queuedNeverStarted, compensated_removes: _t.toolUseIds.length }), Ao = [...pt], xe.reset({ clearAssistantMessages: false }), xe.rebuildStreamingToolExecutor(), _t.toolUseIds.length > 0) yield { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: _t.toolUseIds }, reason: "fallback_sweep" };
                    }
                    if (await ws(Bt), L.midStream) {
                      at = new Set(be.slice(Ve).map((Ro) => Ro.uuid));
                      let _t = L.retainedText;
                      if (_t !== void 0 && _t.length > 0 && kn === void 0) et = { text: _t, originals: L.retainedMessages ?? [] };
                      else if (_t !== void 0 && _t.length > 0 && kn !== void 0) (0, import_chunk_w578pjby.t)("server_fallback: silent stitch already pending \u2014 skipping seam merge", { level: "warn" });
                    }
                    oo.push(...L.discardedMessages, ...Ao), yield { type: "query_model_change", toModel: Bt };
                    for (let _t of L.discardedMessages) yield { type: "tombstone", message: _t, displayOnly: true };
                    for (let _t of Ao) yield { type: "tombstone", message: _t, displayOnly: true };
                    if (et !== void 0) yo = true, yield { type: "refusal_continuation", phase: "begin", salvageText: et.text, join: "exact", replacesUuids: et.originals.map((_t) => _t.uuid) };
                    if (we.showBanner && !Uo) zt = (0, import_chunk_bzyb60p0.D4a)({ ...L, fromModel: mt, toModel: Bt }, { timestamp: G.now(), uuid: G.uuid() }, we.bannerScope, bt);
                  }
                  continue;
                }
                if (L.type === "refusal_no_fallback") {
                  if (Ns) {
                    wr = L;
                    continue;
                  }
                  if (zt !== void 0) {
                    let we = yield* Ct();
                    if (yo) yo = false, et = void 0, yield { type: "refusal_continuation", phase: "end" };
                    (0, import_chunk_y53wbr8a.a)("tengu_rotunda_pennant_chain_exhausted", { swept_dangling_count: we, queryChainId: Vt, queryDepth: ht.depth, querySource: (0, import_chunk_865at33z.ka)(E) }), yield* Po();
                  }
                  if (yield* Vo(), Kt) yield { type: "system", subtype: "model_refusal_no_fallback", content: "", level: "warning", originalModel: L.originalModel, requestId: L.requestId, apiRefusalCategory: L.apiRefusalCategory, apiRefusalExplanation: L.apiRefusalExplanation, refusedUserMessageUuid: _e, isMeta: false, timestamp: G.now(), uuid: G.uuid() };
                  continue;
                }
                if (L.type === "fallback_request") {
                  e.streamWatcher?.atFallback();
                  let we = L.routeMatched == null && (Lo !== void 0 || L.silentArmAtTrigger === true), mt = Gt.inEpisode && cl(L), bt = fn(L.fallbackModel, L.originalModel, A, A.getAppState().fastMode, Kt);
                  if (!(we ? Ze : !mt && ml(Ht, (0, import_chunk_gq1dr8pm.JIi)())) && !ro && ((0, import_chunk_gq1dr8pm.sV)() || we)) {
                    let Bt = mt ? "episode_continuation" : (0, import_chunk_gq1dr8pm.qmo)({ requestDialog: A.requestDialog, isMainThread: Kt, silentAttempt: we, consumerLacksDialogCapability: Nr }), Uo = { original_model: (0, import_chunk_865at33z.Xt)(L.originalModel), fallback_model: (0, import_chunk_865at33z.Xt)(L.fallbackModel), trigger: (0, import_chunk_78g0060s.f)(L.trigger), request_id: (0, import_chunk_49zxha55.Ce)(L.requestId), queryChainId: Vt, queryDepth: ht.depth, querySource: (0, import_chunk_865at33z.ka)(E), api_refusal_category: L.apiRefusalCategory ? (0, import_chunk_78g0060s.f)((0, import_chunk_gq1dr8pm.i0e)(L.apiRefusalCategory)) : void 0, route_matched: L.routeMatched != null ? (0, import_chunk_78g0060s.f)(L.routeMatched) : void 0, ...L.cascadeHopIndex !== void 0 && { chain_index: L.cascadeHopIndex }, ...L.cascadeChainLength !== void 0 && { chain_length: L.cascadeChainLength }, has_api_refusal_explanation: Boolean(L.apiRefusalExplanation), entitlement_blind: (0, import_chunk_865at33z.P7e)() }, No = [...be, ...pt].flatMap((jr) => (0, import_chunk_bzyb60p0.Mg)([jr]).filter(import_chunk_bzyb60p0.bQ).map((vy) => vy.uuid)), Br = Bt === "no_consumer_capability";
                    if (Br) (0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_dialog_suppressed", { ...Uo, reason: un ? (0, import_chunk_78g0060s.S)("no_consumer_capability") : (0, import_chunk_78g0060s.S)("remote_controlled_session"), capability_source: Yo, retracted_wire_uuid_count: No.length });
                    let Go = Br || !bt ? "cancelled" : "retry_fallback", Ao = bt && us && !mt && !we;
                    if (Ao) Go = await Jp({ canUseTool: R, toolUseContext: A, originalModel: L.originalModel, fallbackModel: L.fallbackModel, apiRefusalCategory: L.apiRefusalCategory, telemetry: Uo });
                    else if (bt && Bt === void 0 && A.requestDialog) Go = await (0, import_chunk_gq1dr8pm.oul)({ requestDialog: A.requestDialog, signal: A.abortController.signal, bridgeDialog: Lr, terminalOnlyWaits: A.permissionRelays, hasQueuedPrompts: () => A.messageQueue.peek(import_chunk_tjdnrbvx._9) !== void 0, payload: { originalModel: L.originalModel, fallbackModel: L.fallbackModel, apiRefusalCategory: L.apiRefusalCategory, retractedMessageUuids: No, guidanceText: (0, import_chunk_gq1dr8pm.nul)() }, telemetry: Uo, shownExtras: { capability_source: Yo, retracted_wire_uuid_count: No.length } });
                    let _t = !bt || Go === "retry_fallback" && !fn(L.fallbackModel, L.originalModel, A, A.getAppState().fastMode, Kt);
                    if (_t) Go = "cancelled";
                    if (Go !== "retry_fallback") {
                      if (ro = true, L.creditCode !== null) (0, import_chunk_y53wbr8a.a)("tengu_fallback_credit_forfeited", { reason: _t ? (0, import_chunk_78g0060s.S)("auto_mode_refuses_target") : Go === "cancelled" ? (0, import_chunk_78g0060s.S)("cancelled") : Ao ? (0, import_chunk_78g0060s.S)("preference_question_paused") : (0, import_chunk_78g0060s.S)("dialog_declined"), mint_request_id: (0, import_chunk_49zxha55.Ce)(L.requestId), mint_model: (0, import_chunk_865at33z.Xt)(tt) });
                      if (yield* xe.abandonAttempt("refusal_decline"), Xe.length = 0, Go === "edit_prompt") A.abortController.abort((0, import_chunk_cbnm4p23.hl)("refusal-fallback-edit"));
                      if (Go === "cancelled" && !A.abortController.signal.aborted) {
                        let jr = (0, import_chunk_bzyb60p0.xPn)("refusal", { type: "refusal", category: L.apiRefusalCategory ?? null, explanation: L.apiRefusalExplanation ?? null, fallback_credit_token: null, fallback_has_prefill_claim: null, recommended_model: null }, L.requestId, L.originalModel);
                        if (jr) await g.appended(jr), be.push(jr), yield jr;
                      }
                      break;
                    }
                    let Ro = (0, import_chunk_gq1dr8pm.Qcl)(be), _o = E.startsWith("repl_main_thread") && !A.options.isNonInteractiveSession, Wn = (0, import_chunk_f9x2f6cx.bse)(), Io = !_o ? "surface" : Wn ? "session_latch" : Ro.skipReason, pn = we && Io === void 0 ? Ro.salvageText : void 0;
                    if (we) Ze = true;
                    else {
                      if (!mt) Ht += 1;
                      Gt = Zc(Gt, L, (0, import_chunk_gq1dr8pm.Kmo)(), import_chunk_gq1dr8pm.Oin);
                    }
                    let ps = we ? void 0 : (0, import_chunk_k67pwqya.QBi)({ refusedEffort: L.refusedEffort, fallbackModel: L.fallbackModel, heldBySession: Kt && (0, import_chunk_865at33z.uz)(A.agentContext), loopOverride: Qo, loopEffort: Cr });
                    if (Qo = L.fallbackModel, ps !== void 0) Cr = ps.loopEffort;
                    if (xn = we ? void 0 : L.creditCode ?? void 0, aa = xn !== void 0 ? tt : void 0, la = xn !== void 0 ? Be : void 0, ua = xn !== void 0 ? L.requestId ?? void 0 : void 0, Pn.mintedStateless = xn !== void 0 && (L.mintedStateless || L.creditIsRefusalToken === true), Pn.isRefusalToken = xn !== void 0 && L.creditIsRefusalToken === true, Pn.delivery = xn !== void 0 && Cn === void 0 ? Xs.delivery : void 0, ma = L.originalModel, pa = L.apiRefusalCategory ?? void 0, fa = L.trigger, Vd ??= L.requestId ?? void 0, we) (0, import_chunk_f9x2f6cx.kia)(L.requestId ?? void 0);
                    if (vr = true, on = Kt && !we && No.length > 0 ? No : void 0, Nt = false, Kt && !we) an.moveTo(L.fallbackModel, { kind: "refusal", carriedEffort: ps?.latchEffort, isCyber: L.apiRefusalCategory === "cyber", requestId: L.requestId }), Mr = an.lastWritten(), kr(L.fallbackModel, "the session");
                    if (we) (0, import_chunk_y53wbr8a.a)("tengu_convolute_arcades_retry", { request_id: (0, import_chunk_49zxha55.Ce)(L.requestId), queryChainId: Vt, queryDepth: ht.depth, querySource: (0, import_chunk_865at33z.ka)(E), continuation: pn !== void 0, ...Io !== void 0 && { continuation_skip_reason: (0, import_chunk_78g0060s.f)(Io) }, had_partial_text: Ro.partialTextChars > 0, partial_text_chars: Ro.partialTextChars, salvaged_tool_use_count: Ro.toolUseCount, had_empty_input_tool_use: Ro.hadEmptyInputToolUse, credit_minted: L.creditCode !== null, armed_at_trigger: L.silentArmAtTrigger === true, arm_source: (0, import_chunk_78g0060s.f)((0, import_chunk_gq1dr8pm.uit)()) });
                    else (0, import_chunk_cqa9hrgx.u)("refusal_fallback"), (0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_triggered", { ...Uo, retracted_wire_uuid_count: No.length, prompt_skipped_reason: Ao ? (0, import_chunk_78g0060s.S)("preference_question") : (0, import_chunk_78g0060s.fe)(Bt), had_partial_text: Ro.partialTextChars > 0, partial_text_chars: Ro.partialTextChars, salvaged_tool_use_count: Ro.toolUseCount, had_empty_input_tool_use: Ro.hadEmptyInputToolUse, credit_minted: L.creditCode !== null, ...(0, import_chunk_k67pwqya.Ovr)(L.refusedEffort) });
                    let hu = rr;
                    if (hu) rr = false, kn = void 0, Cn = void 0, (0, import_chunk_y53wbr8a.a)("tengu_convolute_arcades_retry_outcome", { outcome: (0, import_chunk_78g0060s.S)("error"), queryChainId: Vt, queryDepth: ht.depth, querySource: (0, import_chunk_865at33z.ka)(E) });
                    if (yield { type: "query_model_change", toModel: L.fallbackModel }, hu) yield { type: "refusal_continuation", phase: "end" };
                    let _u = Dn.counts;
                    if (Dn.counts = void 0, yield* xe.abandonAttempt("refusal_retry", { silent: we, ..._u !== void 0 && { earlierCounts: _u } }), await ws(L.fallbackModel), Xe.length = 0, pn !== void 0) Cn = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_gq1dr8pm.Zcl)(pn), isMeta: true, ephemeral: true, now: G.now, uuidFn: G.uuid }), yield { type: "refusal_continuation", phase: "begin", salvageText: pn }, kn = pn, rr = true;
                    if (sr !== void 0 && Gt.pendingNotice?.provisionalFlushUuid === sr.uuid) yield { type: "tombstone", message: sr }, sr = void 0;
                    if (!mt) Gt = nm(Gt), sr = void 0;
                    let wy = Gt.inEpisode && (Gt.cursor !== void 0 || mt);
                    if (Kt && !we && wy) Gt = em(Gt, { originModel: L.originalModel, servingModel: L.fallbackModel, retractedMessageUuids: No, refusedUserMessageUuid: _e ?? void 0, apiRefusalCategory: L.apiRefusalCategory ?? null, apiRefusalCyberVerification: L.apiRefusalCyberVerification, requestId: L.requestId ?? null });
                    else if (!we && (Kt || md)) yield { type: "system", subtype: "model_refusal_fallback", direction: "retry", scope: Kt ? "session" : "local", content: Kt ? (0, import_chunk_gq1dr8pm.mBt)(L.originalModel, L.fallbackModel, L.apiRefusalCategory) : (0, import_chunk_gq1dr8pm.Wmo)(L.originalModel, L.fallbackModel, L.apiRefusalCategory), level: "warning", trigger: L.trigger, originalModel: L.originalModel, fallbackModel: L.fallbackModel, requestId: L.requestId, apiRefusalCategory: L.apiRefusalCategory, apiRefusalExplanation: L.apiRefusalExplanation, ...Kt && L.apiRefusalCyberVerification !== void 0 && { apiRefusalCyberVerification: L.apiRefusalCyberVerification }, retractedMessageUuids: No, refusedUserMessageUuid: _e, isMeta: false, timestamp: G.now(), uuid: G.uuid() };
                  } else if (Lo === void 0) {
                    let Bt = (0, import_chunk_bzyb60p0.xPn)("refusal", { type: "refusal", category: L.apiRefusalCategory ?? null, explanation: L.apiRefusalExplanation ?? null, fallback_credit_token: null, fallback_has_prefill_claim: null, recommended_model: null }, L.requestId, L.originalModel);
                    if (Bt) await g.appended(Bt), be.push(Bt), yield Bt;
                  }
                  break;
                }
                if (L.type === "streaming_fallback_began") {
                  (0, import_chunk_y53wbr8a.a)("tengu_orphaned_messages_tombstoned", { orphanedMessageCount: be.length, queryChainId: Vt, queryDepth: ht.depth }), yield* xe.abandonAttempt("streaming_fallback"), Xe.length = 0;
                  try {
                    if (E.startsWith("repl_main_thread") && (0, import_chunk_865at33z.mp)(A.agentContext) && (L.cause === "no_events" || L.cause === "stream_truncated") && (0, import_chunk_30a5awzz.eo)().once("stream_no_events_fallback_warning")) yield (0, import_chunk_yta0vzjp.lp)("Streaming response ended before any complete data was received. Retrying without streaming. If this keeps happening, check any proxy or gateway between Claude Code and your model provider.", "warning");
                  } catch (we) {
                    (0, import_chunk_k449cc64.i)(we);
                  }
                  continue;
                }
                if (ut && L.type === "assistant" && !L.isApiErrorMessage && !wi([L])) L.resumedFromIncompleteThinking = true;
                if (L.type === "assistant" && !L.isApiErrorMessage && !wi([L])) L.permissionModeAtRequest = dy;
                if (L.type === "assistant" && L.message.content.some((we) => we.type === "tool_use")) await g.appended(L);
                let At = L, Ho, gr = false, En;
                if (L.type === "assistant") {
                  let we;
                  for (let mt = 0; mt < L.message.content.length; mt++) {
                    let bt = L.message.content[mt];
                    if (bt.type === "tool_use" && typeof bt.input === "object" && bt.input !== null) {
                      let Bt = (0, import_chunk_4vsz8a99.tn)(A.options.tools, bt.name, A.options.toolAliases), Uo = await og(Bt, bt.input, bt.name, A);
                      if (Uo) we ??= [...L.message.content], we[mt] = { ...bt, input: Uo };
                    }
                  }
                  if (we) At = { ...L, message: { ...L.message, content: we } }, Xe.push({ src: L.message, dst: At.message, srcRow: L, dstRow: At });
                }
                if ((kn !== void 0 || et !== void 0) && L.type === "assistant" && !L.isApiErrorMessage) {
                  let we = At.type === "assistant" ? At : L, mt = we.message.content, bt = mt.findIndex((Uo) => Uo.type === "text"), Bt = bt === -1 ? void 0 : mt[bt];
                  if (Bt !== void 0 && Bt.type === "text" && Bt.text.trim().length > 0) {
                    let Uo = [...mt];
                    Uo[bt] = (0, import_chunk_p1ewvgeh.FUn)(Bt, et !== void 0 ? et.text + Bt.text : (0, import_chunk_gq1dr8pm.cMi)(kn, Bt.text));
                    let { apiBlockIndex: No, apiBlockIndices: Br, ...Go } = we, Ao = { ...Go, joinedApiReply: true, message: { ...we.message, content: Uo } };
                    if (Xe.push({ src: L.message, dst: Ao.message, srcRow: L, dstRow: Ao }), et !== void 0) {
                      let _t = et.originals, Ro = new Set(_t.map((_o) => _o.uuid));
                      for (let _o = be.length - 1; _o >= 0; _o--) if (Ro.has(be[_o].uuid)) be.splice(_o, 1);
                      if (be.push(Ao), gr = true, En = _t, oo.push(..._t), Kt) Ao.supersedesUuids = _t.flatMap((_o) => (0, import_chunk_bzyb60p0.Mg)([_o]).filter(import_chunk_bzyb60p0.bQ).map((Wn) => Wn.uuid)), (0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_supersedes", { lane: (0, import_chunk_78g0060s.S)("server_stitch"), count: Ao.supersedesUuids.length });
                      at = /* @__PURE__ */ new Set([Ao.uuid]), et = void 0;
                    } else kn = void 0;
                    At = Ao, Ho = Ao;
                  }
                }
                if (L.type === "stream_event" && L.event.type === "message_delta") {
                  if (typeof L.event.delta.stop_reason === "string") as = L.event.delta.stop_reason;
                  let we = L.event.usage?.output_tokens;
                  if (typeof we === "number") ta = Math.max(we, ta ?? 0);
                  for (let { src: mt, dst: bt } of Xe) {
                    if (bt.usage = mt.usage, bt.stop_reason = mt.stop_reason, bt.stop_details = mt.stop_details, mt.context_management !== void 0) bt.context_management = mt.context_management;
                    if (mt.pausedResponses !== void 0) bt.pausedResponses = mt.pausedResponses;
                  }
                  for (let { srcRow: mt, dstRow: bt } of Xe) {
                    if (mt.isUnmetered !== true) delete bt.isUnmetered;
                    (0, import_chunk_865at33z.Gx)(bt);
                  }
                  if (!(0, import_chunk_xfj2cwfv.yAt)(L.event)) Xe.length = 0;
                }
                let Wo = false;
                if ((0, import_chunk_bzyb60p0.O4a)(L)) Wo = true;
                if (!xe.needsFollowUp && Dp(L, Be, E)) Wo = true, Ls = L;
                if (!xe.needsFollowUp && L.type === "assistant" && (0, import_chunk_bzyb60p0.zar)(L) && vn && !A.agentId && ((0, import_chunk_c1hnv4fm.PSe)(yr(F)?.attachment) || (0, import_chunk_bzyb60p0.Lai)(F))) Wo = true, Ls = L;
                if ((0, import_chunk_bzyb60p0.rts)(L)) Wo = true, ct.push(L);
                if (qg(L)) Wo = true;
                if (Ns && (0, import_chunk_knp99ee7.V$e)(L)) Wo = true;
                if (!xe.needsFollowUp && ok(L, A, E)) Wo = true, Rr = L;
                if (ut && !xe.needsFollowUp && (0, import_chunk_bzyb60p0.kpi)(L)) Wo = true;
                if (xe.needsFollowUp && L.type === "assistant" && xi(L)) Wo = true;
                if (Wo && L.type === "assistant") jn = L;
                if (!Wo) {
                  if (ct.length > 0) {
                    for (let mt of ct) td(mt);
                    yield* ct, ct.length = 0;
                  }
                  if (Gt.pendingNotice !== void 0 && At.type === "assistant" && !At.isApiErrorMessage && (0, import_chunk_bzyb60p0.Mg)([At]).some(import_chunk_bzyb60p0.bQ)) yield* Mt();
                  if (on !== void 0 && At.type === "assistant" && !At.isApiErrorMessage && (0, import_chunk_bzyb60p0.Mg)([At]).some(import_chunk_bzyb60p0.bQ)) {
                    let mt = on;
                    on = void 0, Nt = false, At = { ...At, supersedesUuids: mt }, (0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_supersedes", { lane: (0, import_chunk_78g0060s.S)("client_retry"), count: mt.length });
                  }
                  if (At !== L && At.type === "assistant" && L.type === "assistant" && Ho === void 0) g.answeredAs(At, L);
                  if (At.type === "assistant") {
                    if (ug(At, xe), At.isApiErrorMessage && od(te.transition, xe)) At.afterNotePass = true;
                  }
                  yield At;
                }
                if (L.type === "assistant") {
                  let we = Ho ?? L;
                  if (ln && (0, import_chunk_bzyb60p0.W4a)(A.agentId, A.agentContext) && !L.isApiErrorMessage) (0, import_chunk_bzyb60p0.j4a)(L.message.content), (0, import_chunk_v3ek5a4a.O$a)(A, we);
                  if (!gr) {
                    if (be.push(we), (0, import_chunk_r3kja8v6.ue)() && ln) (0, import_chunk_d109n23j.vAa)(A, we.message.id);
                  }
                  let mt = we.message.content.filter((bt) => bt.type === "tool_use");
                  if (mt.length > 0) po.push(...mt), xe.needsFollowUp = true;
                  (0, import_chunk_1ek4hhs6.hdl)(we, A.agentId);
                  for (let bt of mt) xe.streamingToolExecutor.addTool(bt, we);
                }
                if (En !== void 0) {
                  let we = En;
                  En = void 0;
                  for (let mt of we) yield { type: "tombstone", message: mt, displayOnly: true };
                }
                if (xe.streamingToolExecutor.hasUnfinishedTools()) yield* ls();
              }
              if ((0, import_chunk_bzyb60p0.QS)("query_api_streaming_end"), rr && !vr) {
                rr = false;
                let L = kn === void 0;
                kn = void 0, Cn = void 0, (0, import_chunk_y53wbr8a.a)("tengu_convolute_arcades_retry_outcome", { outcome: (0, import_chunk_78g0060s.f)(L ? "merged" : "no_text"), queryChainId: Vt, queryDepth: ht.depth, querySource: (0, import_chunk_865at33z.ka)(E) }), yield { type: "refusal_continuation", phase: "end" };
              }
              if (at !== void 0 && (be.at(-1)?.message.stop_reason ?? as) === "refusal") yield* Ct();
              if (yo) yo = false, et = void 0, yield { type: "refusal_continuation", phase: "end" };
              yield* Po();
              {
                let L = be.at(-1), Tt = L ? (0, import_chunk_xfj2cwfv.W1)(L) : void 0;
                if (Tt) {
                  let At = (0, import_chunk_xfj2cwfv.EM)(Tt);
                  if ((0, import_chunk_bzyb60p0.ypi)({ autocompactRan: wd, hasAttemptedReactiveCompact: qo, lastTransitionReason: te.transition?.reason, isPreFirstCompactFork: Gi, querySource: E, contextTokens: At, messagesCounted: be, facts: Be, autoCompactWindow: A.options.autoCompactWindow })) if (Rn === "subagent" && po.length === 0) (0, import_chunk_bzyb60p0._ts)(A.session.precompute, A.agentId, "subagent_final_turn", (0, import_chunk_865at33z.ka)(E));
                  else {
                    let Ho = (0, import_chunk_xfj2cwfv.Q9)(Tt), gr = Ho.input_tokens + Ho.cache_creation_input_tokens + Ho.cache_read_input_tokens, En = (0, import_chunk_bzyb60p0.ip)(F, (0, import_chunk_bzyb60p0._H)(Be.bytesPerToken)) - rs;
                    (0, import_chunk_bzyb60p0.scr)({ querySource: E, messages: [...F, ...be], facts: Be, cacheSafeParams: { systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, forkContextMessages: F, advisorModel: A.getAppState().advisorModel, stickyBetas: wt, agentCacheTtlOverride: ie }, armTrigger: "api_response", estimateGapTokens: gr - En, ...E === "sdk" && { promptScan: (0, import_chunk_bzyb60p0.Ggi)([...F, ...be]) } });
                  }
                }
              }
            } catch (Xe) {
              It = { error: Xe };
            }
            if (It !== void 0 || it !== void 0) {
              let Xe = it ?? It?.error;
              if (yo) yo = false, et = void 0, yield { type: "refusal_continuation", phase: "end" };
              if (yield* Po(), yield* Vo(), rr) rr = false, kn = void 0, Cn = void 0, (0, import_chunk_y53wbr8a.a)("tengu_convolute_arcades_retry_outcome", { outcome: (0, import_chunk_78g0060s.S)("error"), queryChainId: Vt, queryDepth: ht.depth, querySource: (0, import_chunk_865at33z.ka)(E) }), yield { type: "refusal_continuation", phase: "end" };
              if ((0, import_chunk_bzyb60p0.uts)(ft, Xe)) xo = [...xo, ft];
              let ct = xo[Oo + 1];
              if (it !== void 0 && ct !== void 0) {
                if ((0, import_chunk_865at33z.L9)()) (0, import_chunk_865at33z.ixr)();
                Oo++, Qo = void 0, Gt = rm(), br = void 0, Ms = void 0;
                let Wt = A.getAppState().fastMode, { chainIndex: ho, target: Lo, substituted: ar, inPlace: Dn, anySubstituted: Fr } = kp(A, Wt, { chain: xo, from: Oo, failedModel: it.originalModel, reason: it.reason, substituteFor: (Lr) => {
                  if (!(0, import_chunk_bzyb60p0.nrt)(Lr, A.requestDialog)) return;
                  let lr = (0, import_chunk_865at33z.N9)();
                  return lr !== null && E === "compact" && (0, import_chunk_865at33z.Wxe)(xo[0], lr) ? null : lr;
                } });
                if (Oo = ho, Fr && Kt) (0, import_chunk_cqa9hrgx.l)("model_fable_consent", "chain_advance_substituted");
                if (Lo === null) throw (0, import_chunk_cqa9hrgx.m)("model_fallback", "no_usable_fallback", { reason: (0, import_chunk_78g0060s.f)(it.reason) }), it.originalError ?? it;
                if (ar || Dn) br = Lo;
                if (vr = true, Nt = false, yield* xe.abandonAttempt("chain_advance"), kr(Lo, "the turn"), await ws(Lo), Dn) {
                  (0, import_chunk_w578pjby.t)(`chain advance collapsed onto the failed model ${tt}; re-dispatching in place with the full retry budget`);
                  continue;
                }
                if (Ft) (0, import_chunk_w4dc83v7.j0n)("fallback_model");
                let un = Cm(it.originalModel, tt, !ar, it.reason);
                zn = bm(zn, un);
                let Yo = Mm(un, zn);
                (0, import_chunk_cqa9hrgx.u)("model_fallback"), (0, import_chunk_y53wbr8a.a)("tengu_model_fallback_triggered", { original_model: (0, import_chunk_865at33z.Xt)(it.originalModel), fallback_model: (0, import_chunk_865at33z.Xt)(tt), original_context_window: Yo?.fromWindow, fallback_context_window: Yo?.toWindow, chain_index: Oo, query_source: (0, import_chunk_865at33z.ka)(E), reason: (0, import_chunk_78g0060s.f)(it.reason), entrypoint: (0, import_chunk_78g0060s.S)("cli"), queryChainId: Vt, queryDepth: ht.depth }), yield { type: "query_model_change", toModel: tt }, yield { type: "system", subtype: "model_fallback", content: lk(it.reason, (0, import_chunk_865at33z.yi)(it.originalModel), (0, import_chunk_865at33z.yi)(tt), it.originalError) + (Yo?.noticeSuffix ?? ""), level: "warning", trigger: it.reason, originalModel: it.originalModel, fallbackModel: tt, isMeta: false, timestamp: G.now(), uuid: G.uuid() };
                continue;
              }
              throw Xe;
            }
          }
        } catch (v) {
          {
            let V = ys(Gt);
            if (Gt = V.state, V.notice !== void 0) yield ds(V.notice, G.uuid());
          }
          if ((0, import_chunk_y53wbr8a.a)("tengu_query_error", { assistantMessages: be.length, toolUses: be.flatMap((V) => V.message.content.filter((Te) => Te.type === "tool_use")).length, queryChainId: Vt, queryDepth: ht.depth }), v instanceof import_chunk_bzyb60p0.X$ && v.reason === "model_blocked") {
            let V = (0, import_chunk_bzyb60p0._i)({ content: (0, import_chunk_bzyb60p0.ats)(v, (0, import_chunk_865at33z.yi)(v.originalModel)), error: "rate_limit", now: G.now, uuid: G.uuid });
            return (0, import_chunk_wx3ay5nf.sgt)(xe.toolResults, A), yield V, hn(A, E, V), { reason: "model_error", error: v };
          }
          return yield* sa(v);
        }
        Nd = true, (0, import_chunk_wx3ay5nf.sgt)(xe.toolResults, A);
        let zd = be.at(-1);
        if (xe.needsFollowUp && xi(zd)) {
          try {
            yield* ls();
          } catch (V) {
            (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(V), "tool drain failed after safety monitor block"));
          }
          let v = Rf(xe);
          if (yield* Bg(be, import_chunk_0ha8wex8.mze, G, v.answeredToolUseIds, A), v.removes) yield v.removes;
          yield zd;
        }
        if (be.some((v) => v.message.content.some((V) => V.type === "text" && Iu(V.text)))) (0, import_chunk_y53wbr8a.a)("tengu_model_response_keyword_detected", { is_suggests_break: true, queryChainId: Vt, queryDepth: ht.depth });
        if (be.length > 0) lm([...F, ...be], ye, h, k, A, E);
        let Hs = async function* () {
          for await (let v of xe.streamingToolExecutor.getRemainingResults()) {
            if ((0, import_chunk_bzyb60p0.IO)(v)) {
              yield v;
              continue;
            }
            if (v.message) {
              if ((0, import_chunk_wx3ay5nf.sgt)([v.message], A), yield Ar(v.message), (0, import_chunk_r3kja8v6.ue)()) Ni(v.message);
            }
          }
          if ((0, import_chunk_knp99ee7.V$e)(jn)) yield* Bd(jn);
          if (!A.agentId) try {
            yield* Un(A);
          } catch {
          }
          {
            let v = ys(Gt);
            if (Gt = v.state, v.notice !== void 0) yield ds(v.notice, G.uuid());
          }
          if (!(0, import_chunk_cbnm4p23.jPe)(A.abortController.signal.reason)) yield { ...(0, import_chunk_bzyb60p0.hR)({ toolUse: false, interruptedMessageId: Yn(A), interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(A.abortController.signal), now: G.now, uuidFn: G.uuid }), ...od(te.transition, xe) && { afterNotePass: true } };
          return ko(A, E), { reason: "aborted_streaming" };
        };
        if (A.abortController.signal.aborted) return yield* Hs();
        {
          let v = ys(Gt);
          if (Gt = v.state, v.notice !== void 0) yield ds(v.notice, G.uuid());
        }
        let Xd = !be.at(-1)?.isApiErrorMessage;
        if (Xd && !xe.needsFollowUp) {
          let v = Xl(F, nr, { options: A.options, querySource: E, head: Xi, stamp: G, handed: to.redescribing });
          if (v) yield v, F = [...F, v];
          let V = Zi();
          if (V) yield V;
        }
        if (Jn) {
          let v = await Jn;
          if (v) yield v;
        }
        if (te.transition?.reason === "refusal_retry") (0, import_chunk_knp99ee7.kHa)({ sentOn: te.transition.model, servedBy: tt, lastMessage: be.at(-1), withheldRecoverable: jn });
        if (te.transition?.reason === "malformed_tool_use_retry") {
          let v = be.at(-1);
          (0, import_chunk_y53wbr8a.a)("tengu_malformed_tool_use_retry_outcome", { model: (0, import_chunk_865at33z.Xt)(tt), retry_count: Bn, outcome: (0, import_chunk_78g0060s.f)(yg(po.length, v?.message.stop_reason ?? as, v?.isApiErrorMessage, Bn)) });
        }
        if (te.transition?.reason === "truncated_response_recovery") {
          let v = be.at(-1);
          if (v !== void 0 && !v.isApiErrorMessage) (0, import_chunk_cqa9hrgx.u)("query_truncated_response_recovery", { attempt: te.transition.attempt, cause: (0, import_chunk_78g0060s.f)(te.transition.cause) });
          else if (v?.isApiErrorMessage && v !== jn) (0, import_chunk_cqa9hrgx.m)("query_truncated_response_recovery", "continuation_failed", { attempt: te.transition.attempt, cause: (0, import_chunk_78g0060s.f)(te.transition.cause) });
        }
        if (Bp({ transition: te.transition, resumed: es === true, request: F, responses: be, withheld: jn }), ut && wi(be)) ut = false;
        let ya = false;
        if (ut) {
          let v = be.at(-1), V = false;
          if (v?.isApiErrorMessage) V = V || v === Rr || v === Ls || (0, import_chunk_865at33z.nz)(v) || (0, import_chunk_bzyb60p0.rts)(v);
          ya = (0, import_chunk_bzyb60p0.J4a)(be, { healedElsewhere: V, attempt: ts });
        }
        let qn = be.at(-1);
        if (Ns && (0, import_chunk_knp99ee7.V$e)(qn) && qn === jn) {
          try {
            yield* ls();
          } catch (Re) {
            if (!(Re instanceof import_chunk_p3d6wgn7.PUt || Re instanceof import_chunk_fbqj9ad4.lU)) {
              let Ee = Vr(xe, "model_error");
              if (Ee.removes) yield Ee.removes;
              throw Re;
            }
            try {
              yield* jd();
            } catch (Ee) {
              (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(Ee), "withheld refusal event failed while ending the turn"));
            }
            return yield* sa(Re);
          }
          let v = xe.toolWasDeferred || xe.shouldPreventContinuation || xe.toolRequestedEndTurn !== false, V, Te;
          if (!v) try {
            let Re = Qr(xe.streamingToolExecutor, "same_model_retry");
            if (V = Re.removes, xe.rebuildStreamingToolExecutor(), Re.startedToolUseIds.length > 0) ud(A.options, Xr);
            let Ee = be.filter((ft) => ft !== qn);
            Te = { ...(0, import_chunk_knp99ee7.wHa)({ refused: qn, kept: Ee, producedNothing: Ee.length === 0 && ta === 0, answered: pt, started: Re.startedToolUseIds, modelFacts: Be, querySource: E, queryChainId: Vt, queryDepth: ht.depth, deps: G, makeUserMessage: import_chunk_bzyb60p0.Me }), kept: Ee };
          } catch (Re) {
            (0, import_chunk_k449cc64.i)(Re);
          }
          if (V) yield V;
          if (Te) {
            for (let { message: Re } of Te.kept) for (let Ee of Re.content) if (Ee.type === "tool_use") Qg(Ee, A);
            return yield* Te.notRun, yield Te.notice, yield Te.nudge, te = { guards: { ...Ot, refusalRetrySpent: true, firstRefusalCyberVerification: { refusingModel: tt, cyberVerification: (0, import_chunk_bzyb60p0.hno)(qn.message.stop_details) }, ...po.length > 0 && { stopHookBlockingCount: 0 } }, messages: [...F, ...Te.kept, ...pt, ...Te.notRun, Te.nudge], toolUseContext: A, compactTracking: xt, transition: { reason: "refusal_retry", model: tt }, prevToolDurations: xe.toolDurations.length > 0 ? [...xe.toolDurations] : void 0 }, io;
          }
        }
        if ((0, import_chunk_knp99ee7.V$e)(qn) && qn === jn) yield* Bd(qn);
        if (!xe.needsFollowUp) {
          let v = be.at(-1), V = v !== void 0 && v === Ls, Te = V || v?.type === "assistant" && v.isApiErrorMessage && (0, import_chunk_865at33z.nz)(v), Ee = !(Ug !== null && v?.type === "assistant" && Ug.isToolUseDeniedMessage(v)) && (0, import_chunk_bzyb60p0.rts)(v), ft = (Te || Ee) && !(0, import_chunk_865at33z.Zme)() ? (0, import_chunk_cbnm4p23.DNl)(A.abortController, (0, import_chunk_bzyb60p0.hts)(F, Te ? v?.errorDetails : void 0), A.session.host.clock) : void 0, Ve = ft !== void 0 ? { ...A, abortController: ft, onRetryStatus: (0, import_chunk_bzyb60p0.nts)(A.onRetryStatus, A.abortController.signal) } : A;
          e: if (Te || Ee) {
            if (vn && !A.agentId && !A.abortController.signal.aborted && (0, import_chunk_c1hnv4fm.PSe)(yr(F)?.attachment)) {
              let $t = Gr(G);
              return yield $t, te = { guards: Ot, messages: [...F, $t], toolUseContext: A, compactTracking: xt, transition: { reason: "message_pdf_withdrawn" } }, io;
            }
            if (Te && vn && !A.agentId && !A.abortController.signal.aborted && (0, import_chunk_bzyb60p0.Lai)(F)) {
              let $t = (0, import_chunk_bzyb60p0.Ut)({ type: "whole_texts_withdrawn" }, G);
              return yield $t, (0, import_chunk_cqa9hrgx.l)("input_file_at_mention", "withdrawn"), (0, import_chunk_bzyb60p0.jY)(wt ?? (0, import_chunk_f9x2f6cx.ao)(), "whole_text_withdrawn"), (0, import_chunk_cy0ck7w2.GSt)(import_chunk_cy0ck7w2.w5), te = { guards: Ot, messages: [...F, $t], toolUseContext: A, compactTracking: xt, transition: { reason: "whole_text_withdrawn" } }, io;
            }
            let { actualTokens: It, limitTokens: it } = (0, import_chunk_bzyb60p0.KTe)(v?.errorDetails ?? "");
            if (Te && !V && (yield* os(It, true))) return io;
            let Xe = Te && qo && er === "available" && te.transition?.reason === "reactive_compact_retry" ? te.transition : void 0, ct = Xe?.passes ?? 0, Wt = Xe !== void 0 && (ct < 2 || ct < Jl && It !== void 0 && it !== void 0 && Xe.refusedTokens !== void 0 && Xe.refusedTokens - It >= it / ig);
            if (ct >= 2) if (Wt) (0, import_chunk_cqa9hrgx.u)("compact_further_refusal_passes");
            else (0, import_chunk_cqa9hrgx.m)("compact_further_refusal_passes", ct >= Jl ? "cap" : "not_enough_fall_shown");
            let ho = qo && !Wt, Lo = Wt ? { action: "proceed", consecutiveRapidRefills: xt?.consecutiveRapidRefills ?? 0 } : (0, import_chunk_bzyb60p0.nZr)(xt), { consecutiveRapidRefills: ar } = Lo;
            if (!qo && Lo.action === "trip") {
              if (V) {
                (0, import_chunk_cqa9hrgx.m)("compact_after_long_context_refusal", "rapid_refill_breaker");
                break e;
              }
              let $t = hs({ fallback: Ue && Te ? zn : void 0, model: Be.model, configuredWindow: A.options.autoCompactWindow });
              (0, import_chunk_y53wbr8a.a)("tengu_auto_compact_rapid_refill_breaker", { consecutiveRapidRefills: xt?.consecutiveRapidRefills ?? 0, turnsSincePreviousCompact: xt?.turnCounter ?? -1, queryChainId: Vt, queryDepth: ht.depth, reactive: true, afterShrinkingFallback: $t.afterShrinkingFallback });
              let uo = { ...(0, import_chunk_bzyb60p0._i)({ content: $t.content, error: "invalid_request", apiError: "autocompact_thrashing", now: G.now, uuid: G.uuid }), ...(0, import_chunk_bzyb60p0.Ets)(be, A.abortController.signal.aborted) };
              return yield uo, (0, import_chunk_bzyb60p0.DSt)(uo, A), hn(A, E, uo), { reason: "rapid_refill_breaker" };
            }
            if (v && (0, import_chunk_bzyb60p0.nno)({ hasAttempted: ho, querySource: E, aborted: A.abortController.signal.aborted }) && (0, import_chunk_bzyb60p0.tno)(F)) {
              if (V) {
                (0, import_chunk_cqa9hrgx.m)("compact_after_long_context_refusal", "too_few_groups");
                break e;
              }
              if (Te && (yield* os(It, false))) return io;
              let $t = (0, import_chunk_bzyb60p0.nSt)(F), uo = $t.length, zo = Ee ? "image_error" : "prompt_too_long", { actualTokens: Mn, limitTokens: pr } = (0, import_chunk_bzyb60p0.KTe)(v.errorDetails ?? ""), cs = (0, import_chunk_bzyb60p0.yf)($t.flat()), xa = Mn !== void 0 ? Math.max(0, Mn - cs) : void 0;
              (0, import_chunk_y53wbr8a.a)("tengu_ptl_surfaced_to_user", { reason: (0, import_chunk_78g0060s.f)(zo), querySource: (0, import_chunk_865at33z.ka)(E), wasGatedByPriorAttempt: ho, deeperPass: (0, import_chunk_78g0060s.f)(er), reactiveUnsupported: !(0, import_chunk_2xjdqky3.i1)(), precomputedKind: (0, import_chunk_78g0060s.S)("not_consulted"), compactionImpossible: true, totalGroups: uo, overheadTokensEstimate: xa, ...zo === "prompt_too_long" && Hl({ errorDetails: v.errorDetails, messages: F, systemPrompt: Is, inlineTools: nr }) });
              let fr = zo === "prompt_too_long" ? (0, import_chunk_bzyb60p0.Xdi)(v, (0, import_chunk_bzyb60p0.U6a)({ actualTokens: Mn, limitTokens: pr, conversationTokensEstimate: cs, errorDetails: v.errorDetails }), G) : v;
              return yield fr, (0, import_chunk_bzyb60p0.DSt)(fr, A), hn(A, E, fr), { reason: zo };
            }
            let Dn = performance.now(), Fr = Te && v ? (0, import_chunk_bzyb60p0.Ydi)(v) : void 0, { outcome: un, swap: Yo, emittedEarlyCompactStart: Lr } = yield* (0, import_chunk_bzyb60p0.EPn)(($t, uo, zo) => (0, import_chunk_bzyb60p0.yts)({ toolUseContext: $t, messages: F, trigger: "ptl", isWithheld413: Te, hasAttemptedReactiveCompact: qo, borrowFrom: Gi ? A.precomputeSourceKey : void 0, detectedAt: Dn, querySource: E, sizingFacts: Be, onResponseLength: zo }), Ve), lr = yield* (0, import_chunk_bzyb60p0.EPn)(($t, uo, zo) => (0, import_chunk_bzyb60p0.rno)({ hasAttempted: ho, querySource: E, aborted: Ve.abortController.signal.aborted, messages: F, cacheSafeParams: { systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: $t, forkContextMessages: F, advisorModel: A.getAppState().advisorModel, stickyBetas: wt, agentCacheTtlOverride: ie }, precomputed: Yo, precomputeOutcome: un, userWaitStartedAt: Dn, promptTooLong: Fr, allowLastResort: !Ee && (ct < 2 || (0, import_chunk_bzyb60p0.nSt)(F).length < 3), requestCannotGoOut: !Ee, onNotification: uo, onResponseLength: zo }), Ve), { result: Nr, failure: us } = Te && !Ee && v && !(0, import_chunk_2xjdqky3.i1)() ? yield* Ip({ autocompact: G.autocompact, refusal: v, hasAttempted: qo, loopTopOutcome: so.kind, offPickedModel: tt !== mo, messages: F, toolUseContext: Ve, facts: Be, cacheSafeParams: { systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: Ve, forkContextMessages: F, advisorModel: A.getAppState().advisorModel, stickyBetas: wt, agentCacheTtlOverride: ie }, querySource: E, tracking: xt, snipTokensFreed: rs, sentSystemPrompt: Is, sentInlineTools: nr }) : lr, bn = Nr && ct >= 2 ? Jf(Nr) : Nr;
            if (bn) {
              if (V) (0, import_chunk_cqa9hrgx.u)("compact_after_long_context_refusal");
              if (e.taskBudget) {
                let pr = (0, import_chunk_bzyb60p0.Mdi)(F);
                kt = Math.max(0, (kt ?? e.taskBudget.total) - pr);
              }
              (0, import_chunk_bzyb60p0.Pui)(A.agentId ?? "main", (0, import_chunk_bzyb60p0.sfe)(F)), bn.summaryMessages = Va((0, import_chunk_bzyb60p0.zgi)(bn.summaryMessages, F), F), J = await Xa(J, h, k, Ve, { messages: e.messages, querySource: E, compaction: { replacedMessages: F, consecutiveRapidRefills: ar } });
              let $t = await nl(bn, { routing: J, toolUseContext: Ve, querySource: E, resumeActive: ut, foreground: Ue && (0, import_chunk_865at33z.mp)(Ve.agentContext), stamp: G }), uo = gs((0, import_chunk_bzyb60p0.e7)(bn), $t);
              ol(He, F, bn), A = Vl(A, uo, Bi), he = true, Mi({ messages: uo, systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, querySource: E, stickyBetas: wt });
              for (let pr of gs((0, import_chunk_bzyb60p0.ppi)(bn), $t)) yield pr;
              xt = (0, import_chunk_bzyb60p0.zdi)(G.uuid(), ar);
              let Mn = (Wt ? (0, import_chunk_2xjdqky3.qpl)() : Yo === void 0 && Te && (0, import_chunk_2xjdqky3.i1)() && er === "none") && ((0, import_chunk_bzyb60p0.nSt)(uo).length >= 3 || (0, import_chunk_bzyb60p0.x4a)(uo, Fr?.gap, A.contentReplacementState?.replacements)) ? "available" : Wt ? "spent" : er;
              if (Ft) (0, import_chunk_w4dc83v7.j0n)("reactive_compact");
              return te = { guards: { ...Ot, hasAttemptedReactiveCompact: Yo === void 0, reactiveCompactDeeperPass: Mn }, messages: uo, toolUseContext: A, compactTracking: xt, resumeIncompleteThinking: ut, transition: Yo ? { reason: "precomputed_compact_swap" } : { reason: "reactive_compact_retry", passes: ct + 1, refusedTokens: It } }, io;
            }
            if (Lr) yield { type: "compact_progress", event: { type: "compact_end" } }, yield { type: "sdk_status", status: null };
            if (Te && !V && (yield* os(It, false))) return io;
            if ((!Ee || (0, import_chunk_865at33z.Zme)()) && A.abortController.signal.aborted) {
              if (V) (0, import_chunk_cqa9hrgx.l)("compact_after_long_context_refusal", "aborted");
              return yield* Hs();
            }
            if (V) {
              (0, import_chunk_cqa9hrgx.m)("compact_after_long_context_refusal", ho ? "still_refused" : "not_compacted");
              break e;
            }
            let dr = Ee ? "image_error" : "prompt_too_long", va = E === "compact" || (0, import_chunk_2xjdqky3.Mit)(E);
            if (!A.abortController.signal.aborted && !va) (0, import_chunk_y53wbr8a.a)("tengu_ptl_surfaced_to_user", { reason: (0, import_chunk_78g0060s.f)(dr), querySource: (0, import_chunk_865at33z.ka)(E), wasGatedByPriorAttempt: ho, deeperPass: (0, import_chunk_78g0060s.f)(er), ...dr === "prompt_too_long" && Hl({ errorDetails: v?.errorDetails, messages: F, systemPrompt: Is, inlineTools: nr }), precomputedKind: (0, import_chunk_78g0060s.f)(un.kind), precomputedFailureCause: (0, import_chunk_78g0060s.fe)(un.kind === "failed" ? un.failure.cause : void 0), reactiveUnsupported: !(0, import_chunk_2xjdqky3.i1)(), compactFailureReason: (0, import_chunk_78g0060s.fe)(us?.reason) });
            let Hn = Te ? (0, import_chunk_bzyb60p0.lpi)(us) : void 0, cr = Hn !== void 0 ? (0, import_chunk_bzyb60p0.Xdi)(v, Hn, G) : v;
            return yield cr, (0, import_chunk_bzyb60p0.DSt)(cr, A), hn(A, E, cr), { reason: dr };
          }
          if (V) yield v;
          vg(be, tt);
          let at;
          if (v !== void 0 && (qg(v) || ya) && E !== "resume_cache_warm") {
            let It = Np({ withheld: v, request: F, responses: be, attemptsSpent: ts, resumeActive: ut, resumeRefused: ya, model: tt, modelFor: (it) => $i(it, Os), querySource: E, isNonInteractiveSession: A.options.isNonInteractiveSession, agentId: A.agentId, signal: A.abortController.signal, deps: G });
            if (It.kind === "retry") {
              let { attempt: it, nudge: Xe } = It;
              if (Xe !== void 0) yield Xe;
              return te = { guards: { ...Ot, maxOutputTokensRecoveryCount: it }, messages: Xe === void 0 ? [...F, ...be.filter((ct) => !ct.isApiErrorMessage)] : [...F, ...be, Xe], resumeIncompleteThinking: Xe === void 0 || void 0, toolUseContext: A, compactTracking: xt, transition: { reason: "max_output_tokens_recovery", attempt: it } }, io;
            }
            at = It.error, yield at;
          }
          if (Rr !== void 0 && v === Rr) {
            let It = Rr.streamCutCause ?? "unknown", it = Hp(Rr, Ot, G.random);
            if (it !== void 0) {
              (0, import_chunk_cqa9hrgx.l)("query_truncated_response_recovery", "nudged", { attempt: it.attempt, cause: (0, import_chunk_78g0060s.f)(It), ...it.wait !== void 0 && { wait_ms: it.wait.retryInMs } });
              let Xe = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_865at33z.Pr)(E) === "subagent" ? import_chunk_0ha8wex8.SOs : import_chunk_0ha8wex8.yOs, isMeta: true, turnCompanion: true, now: G.now, uuidFn: G.uuid });
              if (yield Xe, it.wait !== void 0) {
                if (yield it.wait, await (0, import_chunk_5appeerh.K)(it.wait.retryInMs, A.abortController.signal, { clock: A.session.host.clock }), A.abortController.signal.aborted) return yield* Hs();
              }
              return te = { guards: { ...Ot, ...it.spent }, messages: [...F, ...be, Xe], toolUseContext: A, compactTracking: xt, transition: { reason: "truncated_response_recovery", attempt: it.attempt, cause: It } }, io;
            }
            (0, import_chunk_cqa9hrgx.m)("query_truncated_response_recovery", "exhausted", { cause: (0, import_chunk_78g0060s.f)(It) }), yield v;
          }
          if ((v?.message.stop_reason ?? as) === "tool_use" && po.length === 0 && !v?.isApiErrorMessage) {
            let It = id(Bn);
            if ((0, import_chunk_y53wbr8a.a)("tengu_malformed_tool_use_response", { will_retry: It, retry_count: Bn, model: (0, import_chunk_865at33z.Xt)(tt), text_has_leaked_invoke: gg(be) }), It) {
              if (!zr(be)) nt = void 0;
              for (let ct of be) yield { type: "tombstone", message: ct };
              let Xe = (0, import_chunk_bzyb60p0.Me)({ content: import_chunk_0ha8wex8.Xmn, isMeta: true, turnCompanion: true, now: G.now, uuidFn: G.uuid });
              if (Xe.retractedMessageUuids = be.map((ct) => ct.uuid), Ue) Xe.retractedWireUuids = y.add(be);
              return yield Xe, te = { guards: { ...Ot, ...Ui, malformedToolUseRetryCount: Bn + 1 }, messages: [...F, Xe], toolUseContext: A, compactTracking: xt, transition: { reason: "malformed_tool_use_retry" } }, io;
            }
            let it = (0, import_chunk_bzyb60p0._i)({ content: "The model's tool call could not be parsed (retry also failed).", apiError: "malformed_tool_use_exhausted", now: G.now, uuid: G.uuid });
            return it.retractedMessageUuids = [], yield it, (0, import_chunk_bzyb60p0.DSt)(it, A), hn(A, E, it), { reason: "malformed_tool_use_exhausted" };
          }
          let zt = v?.message.stop_reason ?? as, oo = Dg(nt, F, be, zt, A), et = oo ? void 0 : Tg({ request: F, reply: be, stopReason: zt, guards: Ot, transition: te.transition, querySource: E, agentId: A.agentId, deps: G });
          if (et?.kind === "nudge") {
            let { nudge: It } = et;
            return yield It, te = { guards: { ...Ot, thinkingOnlyNudged: true }, messages: [...F, It], toolUseContext: A, compactTracking: xt, transition: { reason: "thinking_only_retry" } }, io;
          }
          if (et?.kind === "resend") return te = { guards: { ...Ot, emptyCompletionResent: true }, messages: F, toolUseContext: A, compactTracking: xt, transition: { reason: "thinking_only_retry" } }, io;
          if (et?.kind === "give_up") return yield et.error, (0, import_chunk_bzyb60p0.DSt)(et.error, A), hn(A, E, et.error), { reason: "api_error", isTransient: false };
          if (v?.isApiErrorMessage) {
            if (Co && An(A) && (0, import_chunk_865at33z.Kc)() && E.startsWith("repl_main_thread") && !A.agentId) {
              let It = (0, import_chunk_bzyb60p0.oN)(at ?? v) ?? v.errorDetails ?? "";
              await Co().markApiFailure(An(A), (0, import_chunk_9e5mdyfk.TS)(), v.error, It, v.apiError);
            }
            return (0, import_chunk_bzyb60p0.DSt)(at ?? v, A), { reason: "api_error", errorKind: v.error, isTransient: (0, import_chunk_bzyb60p0.eFt)(v), quotaLimits: v.quotaLimits, oauthRefreshDiskFull: v.oauthRefreshDiskFull };
          }
          let yo = A.agentId ? void 0 : (0, import_chunk_bzyb60p0.Uye)(A, A.abortController.signal, "turn_end");
          if (yo !== void 0) {
            if (await yo, A.abortController.signal.aborted) return yield* Hs();
          }
          let Ct = yield* Jd(A), Mt = Lc({ endedBecause: Ct === io ? void 0 : Ct.reason, aborted: A.abortController.signal.aborted, response: be, stopReason: zt, olderRows: He, rows: F, now: G.now, uuid: G.uuid }), Vo = Ct !== io && Ct.reason === "completed", Po = Mt ? [Mt] : oo && Vo && !A.abortController.signal.aborted ? Lg(be, G) : [];
          if (yield* Po, Vo) Kp([...be, ...Po], Be, A.options.autoCompactWindow, E, A.agentId);
          if (Vo && zt === "end_turn" && Ad) yield* yy(Po);
          return Ct;
        }
        async function* yy(v) {
          let V = false, Te;
          try {
            let Re = Gp();
            if (Re === 0) return;
            let Ee = () => (0, import_chunk_bzyb60p0.dCe)(A.session.precompute, void 0);
            F = [...F, ...be, ...v];
            let ft = () => !A.abortController.signal.aborted && !(0, import_chunk_xfj2cwfv.nn)() && !(0, import_chunk_sjqze7qg.jfr)(A.session.host, F, Be.model), Ve = Ee();
            if (V = Ve?.status === "pending" && ft(), Ve && V) yield { type: "sdk_status", status: "compacting" }, await Qp(Ve, Re, A.abortController, A.session.host.clock);
            if (F = g.withArrivedRows(F), Ee()?.status === "ready" && ft()) Te = yield* (0, import_chunk_bzyb60p0.hpi)(F, A, Be, Ed(), E, xt, import_chunk_bzyb60p0.yts, "turn_end");
            if (Te?.kind !== "compacted") {
              let at = Ee()?.status;
              (0, import_chunk_cqa9hrgx.l)("compact_at_turn_end", at === "pending" || at === "ready" ? "summary_left_held" : "summary_gone");
            }
          } catch (Re) {
            (0, import_chunk_cqa9hrgx.m)("compact_at_turn_end", "threw"), (0, import_chunk_k449cc64.i)(Re);
          }
          if (Te?.kind === "compacted") (0, import_chunk_cqa9hrgx.u)("compact_at_turn_end"), yield* Rd(Te);
          else if (V) yield { type: "sdk_status", status: null };
        }
        async function* Jd(v, V) {
          let Te = V?.toolResults ?? [], Re = !v.agentId && v.getAppState().activeGoal !== void 0, Ee = yield* up(F, be, ye, h, k, v, E, wn, wt, An(v), Te);
          if (As > 0 && Ee.blockingErrors.length === 0) (0, import_chunk_y53wbr8a.a)("tengu_stop_hook_block_count", { count: As, is_subagent: (0, import_chunk_865at33z.ghe)(v.agentContext), hit_max_turns: false, hit_cap: false, goal_active: Re });
          if (Ee.preventContinuation) return V && v.abortController.signal.aborted ? { reason: "aborted_tools" } : { reason: "stop_hook_prevented" };
          let ft = ap(v.sessionState, () => Ee.blockingErrors.length > 0);
          if (ft !== void 0) await ft;
          if (Ee.blockingErrors.length > 0) {
            let Ve = tr + 1, at = As + 1;
            if (P && Ve > P) return (0, import_chunk_y53wbr8a.a)("tengu_stop_hook_block_count", { count: at, is_subagent: (0, import_chunk_865at33z.ghe)(v.agentContext), hit_max_turns: true, hit_cap: false, goal_active: Re }), yield (0, import_chunk_bzyb60p0.Ut)({ type: "max_turns_reached", maxTurns: P, turnCount: Ve }, G), yield* Fo(v, [...F, ...be, ...Te], { stopHookActive: wn }), { reason: "max_turns", turnCount: Ve };
            let zt = import_chunk_c203g5kd.s.CLAUDE_CODE_STOP_HOOK_BLOCK_CAP ?? 8;
            if (zt > 0 && at > zt) {
              (0, import_chunk_y53wbr8a.a)("tengu_stop_hook_block_count", { count: at, is_subagent: (0, import_chunk_865at33z.ghe)(v.agentContext), hit_max_turns: false, hit_cap: true, goal_active: Re });
              let oo = (0, import_chunk_bzyb60p0.UVa)(at);
              if (yield (0, import_chunk_bzyb60p0.Pt)(oo, "warning"), v.agentContext.agentType !== "teammate" && !(0, import_chunk_865at33z.ghe)(v.agentContext)) pp(oo);
              return yield* Fo(v, [...F, ...be, ...Te], { stopHookActive: wn }), { reason: "completed", goalPass: Ee.goalPass };
            }
            return te = { guards: { ...Ot, ...Ui, malformedToolUseRetryCount: 0, stopHookActive: true, stopHookBlockingCount: at, turnCount: Ve }, messages: [...F, ...be, ...Te, ...Ee.blockingErrors], toolUseContext: v, compactTracking: xt, transition: { reason: "stop_hook_blocking" }, pendingToolUseSummary: V?.pendingToolUseSummary, prevToolDurations: V?.prevToolDurations }, io;
          }
          return { reason: "completed", goalPass: Ee.goalPass };
        }
        let Le = A;
        (0, import_chunk_bzyb60p0.QS)("query_tool_execution_start");
        let ha = Cs ? Cs().detectSurfaces((0, import_chunk_m15w38ag.ne)() && A.storageV5 ? await Cs().watchedForSurfaces(A.storageV5) : void 0) : null, Ws = ha ? Cs().sinksFor(ha) : null, Zd = Ws ? Cs().engineFor(Ws) : null, In = An(A);
        if (Co && In && Zd && (0, import_chunk_865at33z.Pr)(E) === "main" && !A.agentId) {
          let v = Ws.has("summary"), V = Ws.has("headline");
          In.onClassified = (Ve, at) => {
            if (!at || !(v || V) || Ve.detail === In.lastEmittedDetail) return;
            if (In.lastEmittedDetail = Ve.detail, v) A.sessionState?.notifyMetadataChanged({ task_summary: Ve.detail });
            if (V) {
              let zt = Ve.detail ? { text: Ve.detail, at: Date.now(), namesCall: Ve.detail !== In.lastMidturnLlmDetail } : null;
              A.setAppState((oo) => oo.taskSummary?.text === zt?.text ? oo : { ...oo, taskSummary: zt });
            }
          }, In.describeToolUse = Fc(A.options.tools);
          let Te = (0, import_chunk_f9x2f6cx.vb)(), Re = Te ? A.options.agentDefinitions.activeAgents.find((Ve) => Ve.agentType === Te) : void 0, Ee = F.find((Ve) => Ve.type === "user" && Ve.turnCompanion !== true);
          if (Ee?.type === "user") {
            let Ve = Ee.message.content;
            Co().captureIntent(In, typeof Ve === "string" ? Ve : Ve.find((at) => at.type === "text")?.text ?? "");
          }
          let ft = Co().findLatestRealUserAsk(F);
          if (ft) Co().captureLatestAsk(In, ft);
          Co().classifyAndPushDebounced(In, (0, import_chunk_9e5mdyfk.TS)(), Re, [...F, ...be].filter((Ve) => Ve.type === "assistant"), (0, import_chunk_ed372ykp.Lq)(A.taskRegistry.all()), Zd, ha);
        }
        if (Ft) (0, import_chunk_gq1dr8pm._Mi)();
        let hy = xe.streamingToolExecutor.getRemainingResults();
        try {
          for await (let v of hy) {
            if ((0, import_chunk_bzyb60p0.IO)(v)) {
              yield v;
              continue;
            }
            if (v.message) {
              if ((0, import_chunk_wx3ay5nf.sgt)([v.message], A), yield Ar(v.message), (0, import_chunk_r3kja8v6.ue)()) Ni(v.message);
              na(v.message), ra(v.message, Le);
            }
            if (v.toolDuration) xe.toolDurations.push(v.toolDuration);
            if (v.newContext) Le = { ...v.newContext, queryTracking: ht };
          }
        } catch (v) {
          if (!(v instanceof import_chunk_p3d6wgn7.PUt || v instanceof import_chunk_fbqj9ad4.lU)) {
            let V = Vr(xe, "model_error");
            if (V.removes) yield V.removes;
            throw v;
          }
          return yield* sa(v);
        }
        if ((0, import_chunk_bzyb60p0.QS)("query_tool_execution_end"), Ft && !A.abortController.signal.aborted) (0, import_chunk_gq1dr8pm._Mi)();
        if (Xd) {
          let v = Xl(F, nr, { options: A.options, querySource: E, head: Xi, stamp: G, handed: to.redescribing });
          if (v) yield v, F = [...F, v];
          let V = Zi();
          if (V) yield V;
        }
        let Ta;
        if (Jt.gates.emitToolUseSummaries && po.length > 0 && !A.abortController.signal.aborted && !A.agentId) {
          let v = be.at(-1), V;
          if (v) {
            let Ee = v.message.content.filter((ft) => ft.type === "text");
            if (Ee.length > 0) {
              let ft = Ee.at(-1);
              if (ft && "text" in ft) V = ft.text;
            }
          }
          let Te = po.map((Ee) => Ee.id), Re = po.map((Ee) => {
            let ft = pt.find((at) => at.type === "user" && Array.isArray(at.message.content) && at.message.content.some((zt) => zt.type === "tool_result" && zt.tool_use_id === Ee.id)), Ve = ft?.type === "user" && Array.isArray(ft.message.content) ? ft.message.content.find((at) => at.type === "tool_result" && at.tool_use_id === Ee.id) : void 0;
            return { name: Ee.name, input: Ee.input, output: Ve && "content" in Ve ? Ve.content : null };
          });
          Ta = oc({ tools: Re, messages: [...F, ...be], signal: A.abortController.signal, isNonInteractiveSession: A.options.isNonInteractiveSession, lastAssistantText: V, agentContext: A.agentContext, credentials: A.credentials }).then((Ee) => {
            if (Ee) return (0, import_chunk_bzyb60p0.k9a)(Ee, Te);
            return null;
          }).catch(() => null);
        }
        let Ca = async function* () {
          if (!A.agentId) try {
            yield* Un(A);
          } catch {
          }
          if (!(0, import_chunk_cbnm4p23.jPe)(A.abortController.signal.reason)) yield (0, import_chunk_bzyb60p0.hR)({ toolUse: true, interruptedMessageId: Yn(A), interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(A.abortController.signal), now: G.now, uuidFn: G.uuid });
          let v = tr + 1;
          if (P && v > P) yield (0, import_chunk_bzyb60p0.Ut)({ type: "max_turns_reached", maxTurns: P, turnCount: v }, G);
          return ko(A, E), { reason: "aborted_tools" };
        };
        if ($o = await Zr?.noteScriptVerdicts(A.agentId, be, pt), (0, import_chunk_r3kja8v6.ue)() && ln) (0, import_chunk_d109n23j.lzo)(A), (0, import_chunk_d109n23j.P4s)(A, ht.chainId);
        if (A.abortController.signal.aborted) return yield* Ca();
        if (xe.toolWasDeferred) return ko(A, E), { reason: "tool_deferred" };
        if (xe.shouldPreventContinuation) return ko(A, E), yield* Fo(A, [...F, ...be, ...pt], { stopHookActive: wn }), { reason: "hook_stopped" };
        let xr = Op({ requested: xe.toolRequestedEndTurn, batchResults: pt, spent: fd, lastIteration: Boolean(P && tr + 1 > P), queryChainId: Vt, queryDepth: ht.depth, deps: G, makeUserMessage: import_chunk_bzyb60p0.Me }), tu = !xr && Al({ requested: xe.toolRequestedEndTurn, lastIteration: Boolean(P && tr + 1 > P) });
        if (xe.toolRequestedEndTurn && !xr && !tu) return yield* jg({ endTurnSource: xe.toolRequestedEndTurn === "tool" ? "tool" : "mcp_meta", messagesForQuery: F, assistantMessages: be, toolResults: pt, toolUseBlocks: po, scriptRows: xe.scriptRows, systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: A, updatedToolUseContext: Le, querySource: E, stopHookActive: wn, stickyBetas: wt, queryChainIdForAnalytics: Vt, queryDepth: ht.depth, deps: G }), { reason: "completed" };
        if (po.length === 1 && po[0].name === import_chunk_xfj2cwfv.bl && (0, import_chunk_0djtvg5h.CV)((0, import_chunk_865at33z.St)(Nn), Nn)) {
          let v = po[0].input.prompt;
          if ((0, import_chunk_f9x2f6cx.eu)().some((V) => V.kind === "loop" && V.prompt === v)) return (0, import_chunk_y53wbr8a.a)("tengu_loop_dynamic_wakeup_ends_turn", { queryChainId: Vt, queryDepth: ht.depth }), ko(A, E), yield* Fl(F, be, pt, ye, h, k, A, E, wn, wt, An(A)), { reason: "completed" };
        }
        if (xt?.compacted) xt.turnCounter++, (0, import_chunk_y53wbr8a.a)("tengu_post_autocompact_turn", { turnId: (0, import_chunk_49zxha55.Ce)(xt.turnId), turnCounter: xt.turnCounter, queryChainId: Vt, queryDepth: ht.depth });
        (0, import_chunk_y53wbr8a.a)("tengu_query_before_attachments", { messagesForQueryCount: F.length, assistantMessagesCount: be.length, toolResultsCount: pt.length, queryChainId: Vt, queryDepth: ht.depth });
        async function* nu(v) {
          if ((0, import_chunk_bzyb60p0.iSe)("PostToolBatch", Le.sessionHooksRegistry, (0, import_chunk_bzyb60p0.ly)(Le, "PostToolBatch", Le.session.id))) {
            let V = yield* im({ toolUseBlocks: v, toolResults: pt, scriptRows: xe.scriptRows, toolUseContext: Le, deps: G });
            if (Le.abortController.signal.aborted) return yield* $g(Le, G), ko(Le, E), { reason: "aborted_tools" };
            if (V !== void 0) return yield (0, import_chunk_bzyb60p0.Ut)(V, G), ko(Le, E), yield* Fo(Le, [...F, ...be, ...pt], { stopHookActive: wn }), { reason: "hook_stopped" };
          }
          return;
        }
        let ru = yield* nu(po);
        if (ru !== void 0) return ru;
        let su = () => Nm({ throughStopHooks: () => Jd(Le, { toolResults: pt, pendingToolUseSummary: Ta, prevToolDurations: xe.toolDurations.length > 0 ? [...xe.toolDurations] : void 0 }), onThrow: () => ko(Le, E), queryChainId: Vt, queryDepth: ht.depth });
        if (tu) return yield* su();
        let iu = (0, import_chunk_b83x8d52.ZI)(Le.abortController.signal);
        if (iu !== void 0) await iu;
        let _y = (0, import_chunk_xfj2cwfv.tct)(), Sy = EJn(Le.modelFacts, wt ?? (0, import_chunk_f9x2f6cx.ao)(), Le.options.commands), Gs = () => (0, import_chunk_bzyb60p0.vQ)(A.messageQueue.getCommandsByMaxPriority("next").concat(A.queuedNotificationsRegistry.heldNudge({ agentId: A.agentId, messageQueue: A.messageQueue, ccrTurnId: _y, nobodysTurn: qe && !rt })), { isMainThread: Ue, currentAgentId: A.agentId, isWords: Sy }).filter((0, import_chunk_kb3nnh8q.Bzr)((0, import_chunk_z2c6pmpw.D5r)(() => Le, { latch: true })));
        if (xm({ foldSuspended: A.messageQueue.isMidTurnFoldSuspended(), isMainThread: Ue, lastIteration: Boolean(P && tr + 1 > P) })) await Om(A, (0, import_chunk_bzyb60p0.c_i)({ isMainThread: Ue, agentId: A.agentId }), Gs);
        if ((0, import_chunk_r3kja8v6.ue)() && ln) {
          if ((0, import_chunk_d109n23j.lzo)(A) || A.abortController.signal.aborted && (0, import_chunk_w50zedgp.Ng)()) return yield* Ca();
          (0, import_chunk_d109n23j.azo)(A);
        }
        let lu = (0, import_chunk_b83x8d52.ZI)(Le.abortController.signal);
        if (lu !== void 0) await lu;
        if (Le.options.refreshTools) {
          let v = Le.options.refreshTools();
          if (v !== Le.options.tools) {
            let V = (0, import_chunk_4smdap7r.U)(Le.options.tools, (Re) => !!Re.mcpInfo), Te = (0, import_chunk_4smdap7r.U)(v, (Re) => !!Re.mcpInfo);
            if (V !== Te) (0, import_chunk_y53wbr8a.a)("tengu_mcp_tools_refreshed_mid_turn", { oldMcpCount: V, newMcpCount: Te, recovered: V === 0 && Te > 0 });
            Le = { ...Le, options: { ...Le.options, tools: v } };
          }
        }
        if (Le.options.refreshMcpClients) {
          let v = Le.options.refreshMcpClients();
          Le = { ...Le, options: { ...Le.options, mcpClients: v } };
        }
        Le = { ...Le, modelFacts: await Rs($i([...F, ...be], (0, import_chunk_bz1f2qnq.Z)(Le).mode)) };
        let Qs = Ue, $s = tr + 1, du = Boolean(P && $s > P), ba = du && $o === void 0 && !Zr?.holdsScriptReport(A.agentId) ? P : void 0, Ma = A.messageQueue.isMidTurnFoldSuspended() ? [] : ba !== void 0 ? (0, import_chunk_w50zedgp.Ng)() && Qs ? Gs().filter(require("/$bunfs/root/chunk-nm2eybte.js").isEvalSettleCommand) : [] : (0, import_chunk_r3kja8v6.ue)() ? require("/$bunfs/root/chunk-t0an2927.js").withoutInputAHookStopWouldStrand(Gs(), ht.chainId) : Gs();
        qe &&= !Ma.some(import_chunk_tteqedwm.jht);
        let Ea = false, Ra = Qs ? await (0, import_chunk_kb3nnh8q.zTa)(Ma, Le) : { deliverable: Ma, notices: [], dropped: [] }, ir = Ra.deliverable;
        A.messageQueue.registerFoldInFlight(ir);
        let uu = [];
        try {
          for (let { uuid: Ct } of Ra.dropped) if (Ct !== void 0) yield { type: "command_lifecycle", uuid: Ct, state: "started" }, yield { type: "command_lifecycle", uuid: Ct, state: "completed" };
          for (let Ct of Ra.notices) yield Ct;
          let v = 0, V = 0, Te = false, Re, Ee = (0, import_chunk_kb3nnh8q.Bzr)((0, import_chunk_z2c6pmpw.D5r)(() => Le, { latch: false })), ft = /* @__PURE__ */ new Set(), Ve = /* @__PURE__ */ new Set(), at = ir.filter(import_chunk_bzyb60p0.cSt), zt = Pp(at, e.joinedDisallowedTools, Le.options);
          if (zt !== Le.options.tools) Le = { ...Le, options: { ...Le.options, tools: zt } };
          let oo = 0;
          for await (let Ct of (0, import_chunk_bzyb60p0.MHe)(null, Le, null, ir, G, [...F, ...be, ...pt], E, { conversationLatches: wt, afterToolStep: true })) {
            let Mt;
            if (Ct.attachment.type === "queued_command" && Ct.attachment.commandMode !== void 0) {
              if (Mt = at[oo], oo++, Mt !== void 0 && !Ee(Mt)) {
                ft.add(Mt);
                continue;
              }
              wc(Ct, Mt);
            }
            let Vo = pc(Ct, Le.options.announcementWalk);
            if (Vo === void 0) continue;
            if (yield Vo, pt.push(Vo), Ct.attachment.type === "queued_command" && Ct.attachment.commandMode !== void 0) {
              if (v++, Mt !== void 0 && (Ct.attachment.humanTurn || Ct.attachment.hostsOwnTurn)) Ve.add(Mt);
              for (let Po of await (0, import_chunk_kb3nnh8q.gGo)(Mt?.promptSubmitted, Le)) yield Po, pt.push(Po);
            }
            if (Ct.attachment.type === "poll_events") {
              if (V++, (0, import_chunk_r3kja8v6.ue)()) {
                let { deliverMidTurnFollowing: Po, endTurnKeysOf: It, foldAddedHookStop: it } = require("/$bunfs/root/chunk-t0an2927.js"), Xe = pt.length;
                Ea = (0, import_chunk_1hg0ytx8.rmr)(It(ir, ht.chainId)), Re = yield* Po(ir.filter(import_chunk_qf73a9we.W_), () => {
                  let ct = Le.getAppState();
                  return { chainId: ht.chainId, mode: ct.toolPermissionContext.mode, fastMode: ct.fastMode ?? false };
                }, pt, (ct) => {
                  let Wt = (0, import_chunk_jv1xpxw5.qKe)(ct);
                  return Te = true, Wt.map(Ar);
                }), Qe ||= it(pt, Xe);
              }
            }
          }
          let et = at.filter((Ct) => !ft.has(Ct));
          if (et.length > 0 && v === 0) (0, import_chunk_w578pjby.t)(`[query] queued_command attachments degraded to 0 for ${et.length} consumed command(s) \u2014 leaving them queued instead of dropping them`, { level: "warn" });
          else {
            if (et.length > 0 && v < et.length) (0, import_chunk_w578pjby.t)(`[query] partial queued_command emission: ${v}/${et.length} \u2014 removing commands that were not all delivered`, { level: "error" });
            if ((0, import_chunk_xfj2cwfv.Rke)(et), et.length > 0) if (Le.abortController.signal.aborted || Le.messageQueue.isMidTurnFoldSuspended()) (0, import_chunk_w578pjby.t)(`[query] abort/suspension during mid-turn absorption \u2014 leaving ${et.length} command(s) queued`);
            else {
              if (A.messageQueue.consume(et, { reason: "absorbed_mid_turn" }), (0, import_chunk_wx3ay5nf.ott)(et, "mid_turn"), (0, import_chunk_p3d6wgn7.j9e)(et), zc(et, A.options.isNonInteractiveSession), (0, import_chunk_865at33z.GOl)(et), (0, import_chunk_bzyb60p0.d_i)(et, Ue), (0, import_chunk_bq31aqv6.kWe)(et, A.storageV5, { armUndo: false, placed: GIe }), Qs && et.some((Mt) => Mt.mode === "prompt" && !Mt.isMeta && Mt.shouldQuery !== false && (0, import_chunk_865at33z._a)(Mt.origin))) GGr(), WGr(A.setAppState, A.session.sessionScratch);
              if ((0, import_chunk_g5qq9mjy.aRa)(A.toolState, et), (0, import_chunk_g5qq9mjy.cRa)(A, et), Qs && et.some(import_chunk_bzyb60p0.VJr)) {
                let Mt = Date.now();
                (0, import_chunk_bzyb60p0.FNt)(() => Mt, A.storageV5);
              }
              let Ct = Lm(et, Le.modelFacts, (0, import_chunk_bz1f2qnq.e_)(Le), G);
              if (Ct) Le = (0, import_chunk_bz1f2qnq.Nre)(Le, [Ct.layer]), yield Ct.reminder, pt.push(Ct.reminder);
              for (let Mt of et) if (Mt.uuid && !S2o(A.messageQueue, Mt.uuid)) o.push(Mt.uuid), yield { type: "command_lifecycle", uuid: Mt.uuid, state: "started" };
              uu = et.filter((Mt) => Ve.has(Mt));
            }
          }
          let yo = ir.filter(import_chunk_qf73a9we.W_);
          if (yo.length > 0) if (V === 0) Wg("mid-turn", yo.length);
          else {
            if ((0, import_chunk_r3kja8v6.ue)() && Re !== void 0) {
              let { followingSettingsToApply: Mt, reportsNoInTurn: Vo } = require("/$bunfs/root/chunk-t0an2927.js");
              if (Vo(yo, ht.chainId)) (0, import_chunk_d109n23j.E6r)(A, ht.chainId);
              Le = (0, import_chunk_bz1f2qnq.Nre)(Le, (0, import_chunk_bzyb60p0.Ten)(Le, Mt(yo, Re, () => {
                let Po = Le.getAppState();
                return { mode: Po.toolPermissionContext.mode, fastMode: Po.fastMode ?? false };
              })));
            }
            let Ct = yield* Hg({ events: yo, queue: A.messageQueue, signal: Le.abortController.signal, phase: "mid-turn", deliveredPollEventUuids: r });
            if (Te) for (let { pollEvent: Mt } of yo) delete Mt?.displayRows;
            for (let Mt of Te ? [] : Ct) yield Ar(Mt);
            xe.scriptRows.push(...Ct.filter(import_chunk_f9x2f6cx.Gh));
          }
        } finally {
          A.messageQueue.unregisterFoldInFlight(ir);
        }
        if ((0, import_chunk_r3kja8v6.ue)() && ln && (0, import_chunk_d109n23j.P4s)(A, ht.chainId)) return yield* Ca();
        for (let v of uu) {
          if (Le.abortController.signal.aborted) break;
          for (let V of await Fm(v, Le, G, [...F, ...be, ...pt], E, wt ?? (0, import_chunk_f9x2f6cx.ao)())) yield V, pt.push(V);
        }
        if (xe.scriptRows.length > 0 && (0, import_chunk_bzyb60p0.RTe)()) {
          let v = yield* nu([]);
          if (v !== void 0) return v;
        }
        if (Ea && !Qe && !Le.abortController.signal.aborted) {
          if (Al({ requested: Ea, lastIteration: ba !== void 0 })) return yield* su();
          return yield* jg({ endTurnSource: "mcp_meta", messagesForQuery: F, assistantMessages: be, toolResults: pt, toolUseBlocks: po, scriptRows: [], batchHooksRan: true, systemPrompt: ye, userContext: h, systemContext: k, toolUseContext: Le, updatedToolUseContext: Le, querySource: E, stopHookActive: wn, stickyBetas: wt, queryChainIdForAnalytics: Vt, queryDepth: ht.depth, deps: G }), { reason: "completed" };
        }
        if (Mo && Mo.settledAt !== null && Mo.consumedOnIteration === -1) {
          let v = (0, import_chunk_bzyb60p0.b3a)(Mo.screen(await Mo.promise, [...F, ...be, ...pt]), A.readFileState, A.session, Mo.earlierReadsMayBeCleared);
          for (let V of v) {
            let Te = (0, import_chunk_bzyb60p0.Ut)(V, G);
            yield Te, pt.push(Te);
          }
          Mo.consumedOnIteration = tr - 1;
        }
        let Ty = (0, import_chunk_4smdap7r.U)(pt, (v) => v.type === "attachment" && v.attachment.type === "edited_text_file");
        (0, import_chunk_y53wbr8a.a)("tengu_query_after_attachments", { totalToolResultsCount: pt.length, fileChangeAttachmentCount: Ty, queryChainId: Vt, queryDepth: ht.depth });
        let ky = { ...Le, queryTracking: ht }, wa = ba;
        if (Zr !== void 0) {
          let { reply: v, note: V, endsAtLimit: Te } = Zr.settleScriptReport(A.agentId, be, pt, du, $o);
          if ($o = v, V !== void 0) yield V, pt.push(V);
          if (Te && v !== void 0) yield v, $o = void 0, wa = P;
        }
        if (wa !== void 0 && $o === void 0) return yield (0, import_chunk_bzyb60p0.Ut)({ type: "max_turns_reached", maxTurns: wa, turnCount: $s }, G), ko(A, E), yield* Fo(Le, [...F, ...be, ...pt], { stopHookActive: wn }), { reason: "max_turns", turnCount: $s };
        if (xr) yield xr, pt.push(xr);
        return (0, import_chunk_bzyb60p0.QS)("query_recursive_call"), te = { guards: { ...Ot, ...Zl, ...ag(po) && { stopHookBlockingCount: As }, mcpEndTurnOverrideSpent: fd || xr !== void 0, turnCount: $s }, messages: [...F, ...be, ...pt], toolUseContext: ky, compactTracking: xt, pendingToolUseSummary: Ta, transition: { reason: "next_turn" }, prevToolDurations: xe.toolDurations.length > 0 ? [...xe.toolDurations] : void 0 }, io;
      } catch (_3) {
        var _error2 = _3, _hasError2 = true;
      } finally {
        __callDispose(_stack2, _error2, _hasError2);
      }
    }
    async function* Yg() {
      let A = yield* Vg();
      if (A !== io && !te.toolUseContext.abortController.signal.aborted) {
        let Et = $o ?? (A.reason === "completed" ? void 0 : Zr?.takeUnsettledReport(te.toolUseContext.agentId));
        if (Et !== void 0) yield Et;
      }
      if (A !== io) {
        let { recordProjectsReplyTurnError: Et } = require("/$bunfs/root/chunk-h6wn5e8m.js");
        Et(A, E, { messages: te.messages, agentId: te.toolUseContext.agentId, engineState: () => te.toolUseContext.getAppState() });
      }
      return A;
    }
    while (true) {
      let A = yield* Yg();
      if (A !== io) return A;
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function lk(e, o, r, g) {
  switch (e) {
    case "overloaded":
    case "server_error":
      return `Switched to ${r} due to high demand for ${o}`;
    case "model_not_found":
    case "permission_denied":
    case "model_blocked": {
      let y = e === "model_not_found" && !(0, import_chunk_865at33z.edt)(g) ? Gg(g) : "";
      return `Switched to ${r} because ${o} is not available${y}`;
    }
    case "last_resort":
      return `Switched to ${r} because ${o} returned an error that could not be retried${Gg(g)}`;
  }
}
function Gg(e) {
  let o = e === void 0 ? "" : (0, import_chunk_jv7av99m.d)(e), r = (0, import_chunk_7cfjrnwy.ee)(o, 300), g = r.length < o.length ? `${r}\u2026` : o;
  return g ? ` (${g})` : "";
}
function Bi(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "user" && !r.isMeta && !r.toolUseResult && !r.isCompactSummary) return o;
  }
  return 0;
}
function ud(e, o) {
  try {
    if (!o) return;
    e.activeMcpServer = void 0, e.activeMcpTool = void 0;
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function Ni(e) {
  if ((0, import_chunk_r3kja8v6.ue)()) require("/$bunfs/root/chunk-8hqp4e5e.js").releaseScriptCallProgress(e);
}
