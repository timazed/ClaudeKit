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
var chunk_zq725g1t_exports = {};
__export(chunk_zq725g1t_exports, {
  openPrePublishTurn: () => Nn
});
module.exports = __toCommonJS(chunk_zq725g1t_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6sjp0rab = require("/$bunfs/root/chunk-6sjp0rab.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_y6mqk49g = require("/$bunfs/root/chunk-y6mqk49g.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_kbsax5x5 = require("/$bunfs/root/chunk-kbsax5x5.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_8f66wxnw = require("/$bunfs/root/chunk-8f66wxnw.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_ay36ksef = require("/$bunfs/root/chunk-ay36ksef.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_gk0jv3qt = require("/$bunfs/root/chunk-gk0jv3qt.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_chunk_02qcqgas = require("/$bunfs/root/chunk-02qcqgas.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_gt0vfa7p = require("/$bunfs/root/chunk-gt0vfa7p.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_an3w1y1q = require("/$bunfs/root/chunk-an3w1y1q.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_p9gcfhjr = require("/$bunfs/root/chunk-p9gcfhjr.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_rfgw2dcy = require("/$bunfs/root/chunk-rfgw2dcy.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_1kh4zp5v = require("/$bunfs/root/chunk-1kh4zp5v.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ddznn4yb = require("/$bunfs/root/chunk-ddznn4yb.js");
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_w0pnqmj8 = require("/$bunfs/root/chunk-w0pnqmj8.js");
var import_chunk_9y45rehj = require("/$bunfs/root/chunk-9y45rehj.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_fa4dxeec = require("/$bunfs/root/chunk-fa4dxeec.js");
var import_chunk_6xae35jp = require("/$bunfs/root/chunk-6xae35jp.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_nw2twe6x = require("/$bunfs/root/chunk-nw2twe6x.js");
var import_chunk_b9qnxh4s = require("/$bunfs/root/chunk-b9qnxh4s.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_tvbk4t18 = require("/$bunfs/root/chunk-tvbk4t18.js");
var import_chunk_s0zsg6za = require("/$bunfs/root/chunk-s0zsg6za.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_kma6xjgr = require("/$bunfs/root/chunk-kma6xjgr.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_xzph4c6z = require("/$bunfs/root/chunk-xzph4c6z.js");
var import_chunk_1ag56sne = require("/$bunfs/root/chunk-1ag56sne.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_gtxzjvjq = require("/$bunfs/root/chunk-gtxzjvjq.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_f9mxtmjz = require("/$bunfs/root/chunk-f9mxtmjz.js");
var import_chunk_sps8tde9 = require("/$bunfs/root/chunk-sps8tde9.js");
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_fc3gfgch = require("/$bunfs/root/chunk-fc3gfgch.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_b3gt63am = require("/$bunfs/root/chunk-b3gt63am.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_6ft3g9m6 = require("/$bunfs/root/chunk-6ft3g9m6.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_hgbq13xy = require("/$bunfs/root/chunk-hgbq13xy.js");
var import_chunk_7fjbagnr = require("/$bunfs/root/chunk-7fjbagnr.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_pzj67pdt = require("/$bunfs/root/chunk-pzj67pdt.js");
var import_chunk_6a9gdcsm = require("/$bunfs/root/chunk-6a9gdcsm.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_pb0vn6an = require("/$bunfs/root/chunk-pb0vn6an.js");
var import_chunk_4ssv8fte = require("/$bunfs/root/chunk-4ssv8fte.js");
var import_chunk_ejeefcyk = require("/$bunfs/root/chunk-ejeefcyk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ygx90amt = require("/$bunfs/root/chunk-ygx90amt.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_kvvabk01 = require("/$bunfs/root/chunk-kvvabk01.js");
var import_chunk_4b5275ey = require("/$bunfs/root/chunk-4b5275ey.js");
var import_chunk_1ea72zr6 = require("/$bunfs/root/chunk-1ea72zr6.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_j59m93ez = require("/$bunfs/root/chunk-j59m93ez.js");
var import_chunk_507k3c1m = require("/$bunfs/root/chunk-507k3c1m.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_m20gh621 = require("/$bunfs/root/chunk-m20gh621.js");
var import_chunk_179jgyn9 = require("/$bunfs/root/chunk-179jgyn9.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_a6xqvbh2 = require("/$bunfs/root/chunk-a6xqvbh2.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_vc431dg0 = require("/$bunfs/root/chunk-vc431dg0.js");
var import_chunk_ta6q9jek = require("/$bunfs/root/chunk-ta6q9jek.js");
var import_chunk_yqt5s0xz = require("/$bunfs/root/chunk-yqt5s0xz.js");
var import_chunk_5qhr9bm2 = require("/$bunfs/root/chunk-5qhr9bm2.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_p2s0km69 = require("/$bunfs/root/chunk-p2s0km69.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_tvq790h1 = require("/$bunfs/root/chunk-tvq790h1.js");
var import_chunk_kmbc34js = require("/$bunfs/root/chunk-kmbc34js.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_5m00y1wc = require("/$bunfs/root/chunk-5m00y1wc.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_jtppe9b0 = require("/$bunfs/root/chunk-jtppe9b0.js");
var import_chunk_yn71faep = require("/$bunfs/root/chunk-yn71faep.js");
var import_chunk_fe5esh7d = require("/$bunfs/root/chunk-fe5esh7d.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_z9f6hbhp = require("/$bunfs/root/chunk-z9f6hbhp.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_5w3q7h0v = require("/$bunfs/root/chunk-5w3q7h0v.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_pyawkp3j = require("/$bunfs/root/chunk-pyawkp3j.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_chunk_3zfyrdna = require("/$bunfs/root/chunk-3zfyrdna.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_84n38n3t = require("/$bunfs/root/chunk-84n38n3t.js");
var import_chunk_a9pcmp5n = require("/$bunfs/root/chunk-a9pcmp5n.js");
var import_chunk_0vvtfqck = require("/$bunfs/root/chunk-0vvtfqck.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_0a69wnzr = require("/$bunfs/root/chunk-0a69wnzr.js");
var import_chunk_6k9zs54e = require("/$bunfs/root/chunk-6k9zs54e.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_etk95yep = require("/$bunfs/root/chunk-etk95yep.js");
var import_chunk_axd2vhx2 = require("/$bunfs/root/chunk-axd2vhx2.js");
var import_chunk_ae4rjsvk = require("/$bunfs/root/chunk-ae4rjsvk.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_p052vp7t = require("/$bunfs/root/chunk-p052vp7t.js");
var import_chunk_vs7p9j3v = require("/$bunfs/root/chunk-vs7p9j3v.js");
var import_chunk_vhpt9t1j = require("/$bunfs/root/chunk-vhpt9t1j.js");
var import_chunk_81q3wevd = require("/$bunfs/root/chunk-81q3wevd.js");
var import_chunk_xkpbmcsq = require("/$bunfs/root/chunk-xkpbmcsq.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_0c92mmpr = require("/$bunfs/root/chunk-0c92mmpr.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_txqh3v33 = require("/$bunfs/root/chunk-txqh3v33.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_89bjmq9y = require("/$bunfs/root/chunk-89bjmq9y.js");
var import_chunk_jzfcqxfe = require("/$bunfs/root/chunk-jzfcqxfe.js");
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
var import_chunk_97tvwnfb = require("/$bunfs/root/chunk-97tvwnfb.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_vn6r8r95 = require("/$bunfs/root/chunk-vn6r8r95.js");
var import_chunk_3a2r0s2z = require("/$bunfs/root/chunk-3a2r0s2z.js");
var import_chunk_j2ybpxmz = require("/$bunfs/root/chunk-j2ybpxmz.js");
var import_chunk_g6k95sax = require("/$bunfs/root/chunk-g6k95sax.js");
var import_chunk_qv6h6wr9 = require("/$bunfs/root/chunk-qv6h6wr9.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_cq1312e8 = require("/$bunfs/root/chunk-cq1312e8.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_qwcebyxc = require("/$bunfs/root/chunk-qwcebyxc.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_yq00hd9s = require("/$bunfs/root/chunk-yq00hd9s.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_gp23aqt9 = require("/$bunfs/root/chunk-gp23aqt9.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_dkc86g0t = require("/$bunfs/root/chunk-dkc86g0t.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_jnrh77bs = require("/$bunfs/root/chunk-jnrh77bs.js");
var import_chunk_2vn4k5m6 = require("/$bunfs/root/chunk-2vn4k5m6.js");
var import_chunk_q7cfnzfy = require("/$bunfs/root/chunk-q7cfnzfy.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_6dfy8crz = require("/$bunfs/root/chunk-6dfy8crz.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_tnmn1726 = require("/$bunfs/root/chunk-tnmn1726.js");
var import_chunk_wxn0h5vf = require("/$bunfs/root/chunk-wxn0h5vf.js");
var import_chunk_2wqvb3q7 = require("/$bunfs/root/chunk-2wqvb3q7.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_02wf5c4s = require("/$bunfs/root/chunk-02wf5c4s.js");
var import_chunk_d70fgf5t = require("/$bunfs/root/chunk-d70fgf5t.js");
var import_chunk_6s9tac84 = require("/$bunfs/root/chunk-6s9tac84.js");
var import_chunk_5ke1b82m = require("/$bunfs/root/chunk-5ke1b82m.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_a152y2zc = require("/$bunfs/root/chunk-a152y2zc.js");
var import_chunk_z12zbtvr = require("/$bunfs/root/chunk-z12zbtvr.js");
var import_chunk_q5veqmrm = require("/$bunfs/root/chunk-q5veqmrm.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_9r4r85pg = require("/$bunfs/root/chunk-9r4r85pg.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_x9aavfmb = require("/$bunfs/root/chunk-x9aavfmb.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_wnt799dt = require("/$bunfs/root/chunk-wnt799dt.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_d0bewyh8 = require("/$bunfs/root/chunk-d0bewyh8.js");
var import_chunk_snpsm13w = require("/$bunfs/root/chunk-snpsm13w.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_q0pdqy04 = require("/$bunfs/root/chunk-q0pdqy04.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_qhpw13wh = require("/$bunfs/root/chunk-qhpw13wh.js");
var import_chunk_q2a93xh8 = require("/$bunfs/root/chunk-q2a93xh8.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_02cqsykt = require("/$bunfs/root/chunk-02cqsykt.js");
var import_chunk_1dkksxs0 = require("/$bunfs/root/chunk-1dkksxs0.js");
var import_chunk_sdks5h78 = require("/$bunfs/root/chunk-sdks5h78.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_7ds2xzy3 = require("/$bunfs/root/chunk-7ds2xzy3.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_qnq7dhb5 = require("/$bunfs/root/chunk-qnq7dhb5.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_f6abynt8 = require("/$bunfs/root/chunk-f6abynt8.js");
var import_chunk_0ty8qx28 = require("/$bunfs/root/chunk-0ty8qx28.js");
var import_chunk_rnad4hj1 = require("/$bunfs/root/chunk-rnad4hj1.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_bs4v8td1 = require("/$bunfs/root/chunk-bs4v8td1.js");
var import_chunk_hmc67k1s = require("/$bunfs/root/chunk-hmc67k1s.js");
var import_chunk_tmh9ctw1 = require("/$bunfs/root/chunk-tmh9ctw1.js");
var import_chunk_21cxvf80 = require("/$bunfs/root/chunk-21cxvf80.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_7xxwg4th = require("/$bunfs/root/chunk-7xxwg4th.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_vfw28y4s = require("/$bunfs/root/chunk-vfw28y4s.js");
var import_chunk_r3wrey46 = require("/$bunfs/root/chunk-r3wrey46.js");
var import_chunk_p6a07y1c = require("/$bunfs/root/chunk-p6a07y1c.js");
var import_chunk_r0jt20hr = require("/$bunfs/root/chunk-r0jt20hr.js");
var import_chunk_z2tg7jn4 = require("/$bunfs/root/chunk-z2tg7jn4.js");
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_6qsjjx4s = require("/$bunfs/root/chunk-6qsjjx4s.js");
var import_chunk_zh47ka3v = require("/$bunfs/root/chunk-zh47ka3v.js");
var import_chunk_21y9ek9j = require("/$bunfs/root/chunk-21y9ek9j.js");
var import_chunk_sg5zbskk = require("/$bunfs/root/chunk-sg5zbskk.js");
var import_chunk_1p0ddgd7 = require("/$bunfs/root/chunk-1p0ddgd7.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_jm0134kz = require("/$bunfs/root/chunk-jm0134kz.js");
var import_chunk_gqe1nb2a = require("/$bunfs/root/chunk-gqe1nb2a.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_vbjta162 = require("/$bunfs/root/chunk-vbjta162.js");
var import_chunk_ak45b7eq = require("/$bunfs/root/chunk-ak45b7eq.js");
var import_chunk_00egnvdb = require("/$bunfs/root/chunk-00egnvdb.js");
var import_chunk_hvkyrv0z = require("/$bunfs/root/chunk-hvkyrv0z.js");
var import_chunk_6x49srhn = require("/$bunfs/root/chunk-6x49srhn.js");
var import_chunk_pjgajh0r = require("/$bunfs/root/chunk-pjgajh0r.js");
var import_chunk_6b5tg8j3 = require("/$bunfs/root/chunk-6b5tg8j3.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_wvxk15ee = require("/$bunfs/root/chunk-wvxk15ee.js");
var import_chunk_31sz6df3 = require("/$bunfs/root/chunk-31sz6df3.js");
var import_chunk_07kqypdk = require("/$bunfs/root/chunk-07kqypdk.js");
var import_chunk_1n9wdcmg = require("/$bunfs/root/chunk-1n9wdcmg.js");
var import_chunk_w1zyy3zs = require("/$bunfs/root/chunk-w1zyy3zs.js");
var import_chunk_wpyz5pav = require("/$bunfs/root/chunk-wpyz5pav.js");
var import_chunk_5gh3v8c1 = require("/$bunfs/root/chunk-5gh3v8c1.js");
var import_chunk_pcsags68 = require("/$bunfs/root/chunk-pcsags68.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_hj4mak61 = require("/$bunfs/root/chunk-hj4mak61.js");
var import_chunk_44g93ygc = require("/$bunfs/root/chunk-44g93ygc.js");
var import_chunk_ghhxe1kj = require("/$bunfs/root/chunk-ghhxe1kj.js");
var import_chunk_c2m5gm43 = require("/$bunfs/root/chunk-c2m5gm43.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_x9vzz8b9 = require("/$bunfs/root/chunk-x9vzz8b9.js");
var import_chunk_jmm1stqj = require("/$bunfs/root/chunk-jmm1stqj.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_yrh4vxq4 = require("/$bunfs/root/chunk-yrh4vxq4.js");
var import_chunk_1yn47zgk = require("/$bunfs/root/chunk-1yn47zgk.js");
var import_chunk_s12gh88k = require("/$bunfs/root/chunk-s12gh88k.js");
var import_chunk_bsnb5bky = require("/$bunfs/root/chunk-bsnb5bky.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_kf08yh2z = require("/$bunfs/root/chunk-kf08yh2z.js");
var import_chunk_3m4xkn4b = require("/$bunfs/root/chunk-3m4xkn4b.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_vwr252r7 = require("/$bunfs/root/chunk-vwr252r7.js");
var import_chunk_r9mc45j8 = require("/$bunfs/root/chunk-r9mc45j8.js");
var import_chunk_e18ra2xv = require("/$bunfs/root/chunk-e18ra2xv.js");
var import_chunk_7mhs1h0h = require("/$bunfs/root/chunk-7mhs1h0h.js");
var import_chunk_dbw5qqws = require("/$bunfs/root/chunk-dbw5qqws.js");
var import_chunk_cfkfe0j1 = require("/$bunfs/root/chunk-cfkfe0j1.js");
var import_chunk_m9439hrw = require("/$bunfs/root/chunk-m9439hrw.js");
var import_chunk_9hnj2g25 = require("/$bunfs/root/chunk-9hnj2g25.js");
var import_chunk_hsfenxnq = require("/$bunfs/root/chunk-hsfenxnq.js");
var import_chunk_67g14a1x = require("/$bunfs/root/chunk-67g14a1x.js");
var import_chunk_p6x4t4m6 = require("/$bunfs/root/chunk-p6x4t4m6.js");
var import_chunk_40s2w0s9 = require("/$bunfs/root/chunk-40s2w0s9.js");
var import_chunk_bt5spb39 = require("/$bunfs/root/chunk-bt5spb39.js");
var import_chunk_1dwdshew = require("/$bunfs/root/chunk-1dwdshew.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_ag73x1p3 = require("/$bunfs/root/chunk-ag73x1p3.js");
var import_chunk_5fa0b8dm = require("/$bunfs/root/chunk-5fa0b8dm.js");
var import_chunk_wbm3qtjx = require("/$bunfs/root/chunk-wbm3qtjx.js");
var import_chunk_adxkgb36 = require("/$bunfs/root/chunk-adxkgb36.js");
var import_chunk_y83g67xj = require("/$bunfs/root/chunk-y83g67xj.js");
var import_chunk_9g965wca = require("/$bunfs/root/chunk-9g965wca.js");
var import_chunk_590fnate = require("/$bunfs/root/chunk-590fnate.js");
var import_chunk_q1sh0fgd = require("/$bunfs/root/chunk-q1sh0fgd.js");
var import_chunk_ye486ddj = require("/$bunfs/root/chunk-ye486ddj.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_0a5vv9nr = require("/$bunfs/root/chunk-0a5vv9nr.js");
var import_chunk_48vr3t96 = require("/$bunfs/root/chunk-48vr3t96.js");
var import_chunk_drrj083m = require("/$bunfs/root/chunk-drrj083m.js");
var import_chunk_p0p19erm = require("/$bunfs/root/chunk-p0p19erm.js");
var import_chunk_6geanr2a = require("/$bunfs/root/chunk-6geanr2a.js");
var import_chunk_zdtzd1bp = require("/$bunfs/root/chunk-zdtzd1bp.js");
var import_chunk_h9qt07a5 = require("/$bunfs/root/chunk-h9qt07a5.js");
var import_chunk_wd66nsbc = require("/$bunfs/root/chunk-wd66nsbc.js");
var import_chunk_7sbhbwjm = require("/$bunfs/root/chunk-7sbhbwjm.js");
var import_chunk_7p90qgrg = require("/$bunfs/root/chunk-7p90qgrg.js");
var import_chunk_6c0jwb75 = require("/$bunfs/root/chunk-6c0jwb75.js");
var import_chunk_gea9tjyt = require("/$bunfs/root/chunk-gea9tjyt.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_abbz0fqx = require("/$bunfs/root/chunk-abbz0fqx.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_e09cft3a = require("/$bunfs/root/chunk-e09cft3a.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
var import_chunk_72w4k1fr = require("/$bunfs/root/chunk-72w4k1fr.js");
var import_chunk_s3bbbse4 = require("/$bunfs/root/chunk-s3bbbse4.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_gkm2eky6 = require("/$bunfs/root/chunk-gkm2eky6.js");
var import_chunk_4684b8fc = require("/$bunfs/root/chunk-4684b8fc.js");
var import_chunk_p78dm83c = require("/$bunfs/root/chunk-p78dm83c.js");
var import_chunk_bf14swcm = require("/$bunfs/root/chunk-bf14swcm.js");
var import_chunk_sk0gc06z = require("/$bunfs/root/chunk-sk0gc06z.js");
var import_chunk_mahb4v28 = require("/$bunfs/root/chunk-mahb4v28.js");
var import_chunk_6qaevejb = require("/$bunfs/root/chunk-6qaevejb.js");
var import_chunk_bdxa2qdh = require("/$bunfs/root/chunk-bdxa2qdh.js");
var import_chunk_58apc8rx = require("/$bunfs/root/chunk-58apc8rx.js");
var import_chunk_1ksp50wj = require("/$bunfs/root/chunk-1ksp50wj.js");
var import_chunk_nb21njpa = require("/$bunfs/root/chunk-nb21njpa.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_rtsmzy7m = require("/$bunfs/root/chunk-rtsmzy7m.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_tnzbvb83 = require("/$bunfs/root/chunk-tnzbvb83.js");
var import_chunk_4vfdya4f = require("/$bunfs/root/chunk-4vfdya4f.js");
var import_chunk_g5kcfqmg = require("/$bunfs/root/chunk-g5kcfqmg.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_cwkztn5x = require("/$bunfs/root/chunk-cwkztn5x.js");
var import_chunk_zmrcnbgs = require("/$bunfs/root/chunk-zmrcnbgs.js");
var import_chunk_1pan7v6b = require("/$bunfs/root/chunk-1pan7v6b.js");
var import_chunk_4fssttte = require("/$bunfs/root/chunk-4fssttte.js");
var import_chunk_5m9vge4h = require("/$bunfs/root/chunk-5m9vge4h.js");
var import_chunk_drtv8e2x = require("/$bunfs/root/chunk-drtv8e2x.js");
var import_chunk_jg286npj = require("/$bunfs/root/chunk-jg286npj.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_x0vfzwdd = require("/$bunfs/root/chunk-x0vfzwdd.js");
var import_chunk_2xg3wmhp = require("/$bunfs/root/chunk-2xg3wmhp.js");
var import_chunk_shs9e3r5 = require("/$bunfs/root/chunk-shs9e3r5.js");
var import_chunk_5qqp06t1 = require("/$bunfs/root/chunk-5qqp06t1.js");
var import_chunk_8mmj96hs = require("/$bunfs/root/chunk-8mmj96hs.js");
var import_chunk_nq3exp5d = require("/$bunfs/root/chunk-nq3exp5d.js");
var import_chunk_ksk52rm1 = require("/$bunfs/root/chunk-ksk52rm1.js");
var import_chunk_vqrgm5ev = require("/$bunfs/root/chunk-vqrgm5ev.js");
var import_chunk_r3e8vdzv = require("/$bunfs/root/chunk-r3e8vdzv.js");
var import_chunk_cc0rj9gh = require("/$bunfs/root/chunk-cc0rj9gh.js");
var import_chunk_07r720jc = require("/$bunfs/root/chunk-07r720jc.js");
var import_chunk_j7dp96he = require("/$bunfs/root/chunk-j7dp96he.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_mj4h1wdm = require("/$bunfs/root/chunk-mj4h1wdm.js");
var import_chunk_q4y63y6c = require("/$bunfs/root/chunk-q4y63y6c.js");
var import_chunk_20m87428 = require("/$bunfs/root/chunk-20m87428.js");
var import_chunk_6eq0mqyj = require("/$bunfs/root/chunk-6eq0mqyj.js");
var import_chunk_g78kc1rr = require("/$bunfs/root/chunk-g78kc1rr.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_pnqybv63 = require("/$bunfs/root/chunk-pnqybv63.js");
var import_chunk_587zek71 = require("/$bunfs/root/chunk-587zek71.js");
var import_chunk_4rp6k6sw = require("/$bunfs/root/chunk-4rp6k6sw.js");
var import_chunk_tps03s5j = require("/$bunfs/root/chunk-tps03s5j.js");
var import_chunk_k4bqn7hc = require("/$bunfs/root/chunk-k4bqn7hc.js");
var import_chunk_g3a1gwww = require("/$bunfs/root/chunk-g3a1gwww.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_8x650tx8 = require("/$bunfs/root/chunk-8x650tx8.js");
var import_chunk_spnfty7j = require("/$bunfs/root/chunk-spnfty7j.js");
var import_chunk_dwxd9se5 = require("/$bunfs/root/chunk-dwxd9se5.js");
var import_chunk_pbbjnb48 = require("/$bunfs/root/chunk-pbbjnb48.js");
var import_chunk_4xgvg9z4 = require("/$bunfs/root/chunk-4xgvg9z4.js");
var import_chunk_tsfdtsmv = require("/$bunfs/root/chunk-tsfdtsmv.js");
var import_chunk_k4bfa4wx = require("/$bunfs/root/chunk-k4bfa4wx.js");
var import_chunk_f95ky4wd = require("/$bunfs/root/chunk-f95ky4wd.js");
var import_chunk_xdc7h7xp = require("/$bunfs/root/chunk-xdc7h7xp.js");
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
var import_chunk_75f58nqg = require("/$bunfs/root/chunk-75f58nqg.js");
var import_chunk_r216zqgx = require("/$bunfs/root/chunk-r216zqgx.js");
var import_chunk_01eypw0a = require("/$bunfs/root/chunk-01eypw0a.js");
var import_chunk_etd6y4ew = require("/$bunfs/root/chunk-etd6y4ew.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var import_chunk_zkwftgft = require("/$bunfs/root/chunk-zkwftgft.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_chunk_s12kntv9 = require("/$bunfs/root/chunk-s12kntv9.js");
var import_chunk_d19q7hh0 = require("/$bunfs/root/chunk-d19q7hh0.js");
var import_chunk_a9c4wn56 = require("/$bunfs/root/chunk-a9c4wn56.js");
var import_chunk_vfxmw1me = require("/$bunfs/root/chunk-vfxmw1me.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
var import_chunk_0h9rvfx7 = require("/$bunfs/root/chunk-0h9rvfx7.js");
var import_chunk_r949v7h0 = require("/$bunfs/root/chunk-r949v7h0.js");
var import_chunk_sqvd6je2 = require("/$bunfs/root/chunk-sqvd6je2.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_a8ey418s = require("/$bunfs/root/chunk-a8ey418s.js");
var import_chunk_q1wcxxgg = require("/$bunfs/root/chunk-q1wcxxgg.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_chunk_vyzg3yfa = require("/$bunfs/root/chunk-vyzg3yfa.js");
var import_chunk_t99xdws4 = require("/$bunfs/root/chunk-t99xdws4.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var import_chunk_ch6321bk = require("/$bunfs/root/chunk-ch6321bk.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_0djtvg5h = require("/$bunfs/root/chunk-0djtvg5h.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_pqpxa7em = require("/$bunfs/root/chunk-pqpxa7em.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_p6rv87rz = require("/$bunfs/root/chunk-p6rv87rz.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_jqm7sxzd = require("/$bunfs/root/chunk-jqm7sxzd.js");
var import_chunk_3v09xgvh = require("/$bunfs/root/chunk-3v09xgvh.js");
var import_chunk_cy6vm0hs = require("/$bunfs/root/chunk-cy6vm0hs.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_v6tczjz9 = require("/$bunfs/root/chunk-v6tczjz9.js");
var import_chunk_fm523nqz = require("/$bunfs/root/chunk-fm523nqz.js");
var import_chunk_nynf6rf6 = require("/$bunfs/root/chunk-nynf6rf6.js");
var import_chunk_6wkvjx00 = require("/$bunfs/root/chunk-6wkvjx00.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var import_chunk_mjq4pbxz = require("/$bunfs/root/chunk-mjq4pbxz.js");
var import_chunk_ya9q1k3s = require("/$bunfs/root/chunk-ya9q1k3s.js");
var import_chunk_8bq2fhrn = require("/$bunfs/root/chunk-8bq2fhrn.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
var import_chunk_wqe8b1g0 = require("/$bunfs/root/chunk-wqe8b1g0.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_9p9dsn6j = require("/$bunfs/root/chunk-9p9dsn6j.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_qk25vh5t = require("/$bunfs/root/chunk-qk25vh5t.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var import_chunk_0bfd61k9 = require("/$bunfs/root/chunk-0bfd61k9.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_1m0ck3v8 = require("/$bunfs/root/chunk-1m0ck3v8.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
var import_crypto = require("crypto");
var import_path4 = require("path");
var import_crypto2 = require("crypto");
var qe = /* @__PURE__ */ new Set([import_chunk_a7h1jnra.ule, import_chunk_a7h1jnra.p_l, "copy_asset", "guide", "pin_artifact", "unpin_artifact", "watch", "unwatch", "db_get", "db_list", "db_query", "db_usage", "db_whoami", "db_profiles", "db_rules_get", "reply_comment", "resolve_comment"]);
function M(e) {
  return !qe.has(e) && !/^(get|read|list|describe)_/.test(e);
}
function re(e) {
  let t = e.getMcp().clients.find(({ name: s }) => s === import_chunk_qdcbcsg7.ri);
  return (t?.type === "connected" || t?.type === "cached") && (0, import_chunk_gk0jv3qt.wUe)(import_chunk_gk0jv3qt.pq.peek(e.session)?.host, t)?.serverId === import_chunk_qdcbcsg7.aO ? t : void 0;
}
async function F(e, t, s, o, r) {
  let a = re(e);
  if (a === void 0) return;
  let { callMCPTool: h, ensureConnectedClient: g } = require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
  return (await h({ client: await g(a, { signal: o }), tool: t, args: s, meta: r, signal: o, imageLimits: import_chunk_r6fna520.Qv, hasResultSizeAnnotation: true, storageV5: e.storageV5, credentials: e.credentials, callingModel: void 0 })).structuredContent;
}
var Ve = /(r?)('''[\s\S]*?'''|"""[\s\S]*?"""|'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*")|\w+|[^ \t]/g, Ye = /\bs([/#|@,])\^?((?:\\.|(?!\1)[^\\\n])+)\1((?:\\.|(?!\1)[^\\\n])*)\1/g, Qe = { n: `
`, t: "	", "\n": "" };
function ye(e, t) {
  return e.replace(t, (s, o) => Qe[o] ?? o);
}
function Ze(e) {
  let t = [], s = performance.now() + 50;
  for (let f of e.matchAll(Ve)) {
    if (performance.now() > s) return [];
    t.push(f);
  }
  let o = /* @__PURE__ */ new Map(), r = [], a = 0, h = () => {
    let [f = "", m, w] = t[a] ?? [];
    if (w === void 0) return o.get(f);
    let y = /^('''|""")/.test(w) ? 3 : 1, S = w.slice(y, -y);
    return m ? S : ye(S, /\\(['"\\nt\n])/g);
  }, g = () => {
    let f = h();
    a++;
    while (f !== void 0 && t[a]?.[0] === "+") {
      a++;
      let m = h();
      a++, f = m === void 0 || f.length + m.length > 65536 ? void 0 : f + m;
    }
    return f;
  };
  while (a < t.length) {
    let f = t[a][0];
    if (t[a + 1]?.[0] === "=" && t[a + 2]?.[0] !== "=") {
      a += 2;
      let w = g();
      if (w === void 0) o.delete(f), a--;
      else o.set(f, w);
      continue;
    }
    let m = g();
    if (m !== void 0 && /^[,:]$/.test(t[a]?.[0] ?? "")) {
      a++;
      while (t[a]?.[0] === `
`) a++;
      let w = g();
      if (w !== void 0) r.push([m, w]);
    }
  }
  return r;
}
function Se(e, t) {
  if (t.length > 65536) return;
  let s = t.search(/<<-?\s*['"]?\w+['"]?\n|$/), o = [...[...t.slice(0, s).matchAll(Ye)].map(([, , h, g]) => [h, g].map((f) => ye(f, /\\(.)/g))), ...Ze(t.slice(s).replace(/^.*\n/, ""))];
  if (o.length > 64) return;
  let r = e, a = [];
  for (let [h = "", g = ""] of o) {
    let f = h.slice(0, 200), m = r.indexOf(f);
    if (f === "" || m < 0 || h === g) continue;
    if (r.indexOf(f, m + 1) < 0) {
      if (r.startsWith(h, m)) a.push({ find: h, replace: g }), r = r.slice(0, m) + g + r.slice(m + h.length);
    } else if (f === h) {
      let w = r.split(h, 500);
      if (w.length === 500 || w.length * g.length > 65536) return;
      a.push({ find: h, replace: g, all: true }), r = w.join(g);
    } else return;
    if (r.length > 2 * (e.length + t.length)) return;
  }
  return a.length > 0 ? { edits: a, after: r } : void 0;
}
var j = "project/", k = "index.html", et = 4, Ae = String.raw`[\p{L}\p{N}_][\p{L}\p{N}_ .-]{0,99}`, tt = new RegExp(String.raw`^${j}(?:${Ae}/){0,3}${Ae}\.(?:html|css|json)$`, "u");
class ae {
  #e = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Set();
  #n = /* @__PURE__ */ new Set();
  #r = /* @__PURE__ */ new Map();
  #a = /* @__PURE__ */ new Map();
  #d = /* @__PURE__ */ new Set();
  #f = /* @__PURE__ */ new Map();
  #i;
  constructor(e) {
    let t = /* @__PURE__ */ new Map();
    for (let s of e) {
      if (s.type !== "assistant" && s.type !== "user" || s.remoteSourced === true || !Array.isArray(s.message.content)) continue;
      for (let o of s.message.content) if (o.type === "tool_use") {
        let r = (0, import_chunk_px0hhsq7.mr)(o.name);
        if (r?.serverName === import_chunk_qdcbcsg7.ri) t.set(o.id, { served: r.toolName, input: o.input });
      } else if (o.type === "tool_result" && o.is_error !== true) {
        let r = t.get(o.tool_use_id), a = r && (0, import_chunk_a7h1jnra.n9)(o.content);
        if (a) {
          if (this.noteAnswer(r.served ?? "", a), r.served === import_chunk_a7h1jnra.yN) this.#l(a.slug, r.input);
        }
      }
    }
  }
  noteAnswer(e, { slug: t, version: s }) {
    if (e === import_chunk_a7h1jnra.f_l) this.#u(t);
    if (s !== void 0 && (e === import_chunk_a7h1jnra.yN || e === import_chunk_a7h1jnra.ule)) this.#r.set(t, s);
    else if (M(e)) this.#r.delete(t);
  }
  versionOf(e) {
    return this.#r.get(e);
  }
  publishedPaths() {
    return [...this.#e].filter(([, e]) => e !== "two" && (this.#t.size === 0 || this.#s.has(e.slug))).map(([e]) => e);
  }
  made(e) {
    this.#t.add(e);
  }
  reserved(e, t) {
    this.#a.set(t, { slug: e, as: k });
  }
  isReserved(e) {
    return this.#a.has(e);
  }
  tiesElsewhere(e) {
    return this.#e.has(e) || this.#t.size > 0 || this.#s.size > 0;
  }
  notReserved(e) {
    this.#a.delete(e);
  }
  written(e) {
    this.#s.add(e);
  }
  savedAhead(e) {
    this.#n.add(e);
  }
  published(e, t) {
    this.written(e);
    for (let s of O(t)) this.#e.delete(s.path), this.#o.delete(s.path.slice(0, -s.as.length)), this.#a.delete(s.path);
    this.#l(e, t);
  }
  mayHoldFiles(e) {
    return !(this.#t.has(e) || [...this.#a.values()].some((s) => s.slug === e)) || this.#s.has(e) || this.#n.has(e);
  }
  of(e) {
    if (!import_path2.posix.isAbsolute(e) || import_path2.posix.normalize(e) !== e) return;
    let t = this.#a.get(e);
    if (t !== void 0) return t;
    let s = /* @__PURE__ */ new Set([...this.#t, ...this.#s]), o = this.#e.get(e);
    if (o !== void 0 && (this.#t.size === 0 || o !== "two" && this.#s.has(o.slug))) return o === "two" ? void 0 : o;
    let r = Te(e);
    if (r === void 0) return;
    let a = e.slice(0, -r.length), [h] = this.#t;
    if (h === void 0) {
      let f = this.#o.get(a);
      return f === void 0 || f === "two" ? void 0 : { slug: f, as: r };
    }
    let g = import_path2.posix.basename(a);
    if (s.size > 1 || (0, import_chunk_mzmcvr6c.ht)(g) !== null && g.toLowerCase() !== h || (this.#i ??= a) !== a) return;
    return { slug: h, as: r };
  }
  pages() {
    let e = new Map([...this.#d].slice(-et).map((t) => [t, []]));
    for (let [t, s] of this.#e) if (s !== "two" && this.#f.get(s.slug + s.as) === t) e.get(s.slug)?.push(t);
    return e;
  }
  entryOf(e) {
    return this.#f.get(e + k);
  }
  #u(e) {
    this.#d.delete(e), this.#d.add(e);
  }
  wasPublished(e) {
    return this.#e.has(e);
  }
  mayComeTo(e) {
    return Te(e) !== void 0;
  }
  #l(e, t) {
    let { mode: s, remove: o } = (0, import_chunk_ma3kja9f.T)(t) ? t : {};
    for (let [r, a] of this.#e) if (a !== "two" && a.slug === e && (s === "replace" || [o].flat().includes(a.as))) this.#e.delete(r);
    for (let { path: r, as: a } of O(t)) {
      if (a === k) this.#u(e);
      this.#f.set(e + a, r);
      let h = this.#e.get(r);
      if (this.#e.set(r, h === void 0 || h !== "two" && h.slug === e ? { slug: e, as: a } : "two"), a.startsWith(j) && r.endsWith(import_path2.posix.sep + a)) {
        let g = r.slice(0, -a.length), f = this.#o.get(g) ?? e;
        this.#o.set(g, f === e ? e : "two");
      }
    }
  }
}
function O(e) {
  let t = (0, import_chunk_ma3kja9f.T)(e) ? e.files : void 0;
  return (Array.isArray(t) ? t : []).flatMap((s) => (0, import_chunk_ma3kja9f.T)(s) && typeof s.path === "string" && typeof s.as === "string" && s.as !== "" ? [{ path: s.path, as: s.as }] : []);
}
function Te(e) {
  let t = e.slice(e.indexOf(import_path2.posix.sep + j) + 1);
  return tt.test(t) && !t.includes(import_path2.posix.sep + j) && !t.startsWith(`${j}ds/`) ? t : void 0;
}
var it = /(?:^|\/)(?:\.[^/]*|node_modules|dist|build|out|target|vendor|tmp|temp|cache|coverage)\//i, de = ["<!doctype html", "<html"], R = new import_chunk_pzzqg6s3.ze(() => ({}));
function be(e, t) {
  return e === "list_types" || e === "guide" && !((0, import_chunk_ma3kja9f.T)(t) && t.topic === "exporting");
}
function he(e, t, s) {
  if (s?.isGitRepo !== false || !e.startsWith(`${s.path}/`) || import_path3.posix.normalize(e) !== e || !/\.html?$/i.test(e) || it.test(e.slice(s.path.length))) return false;
  let o = t.trimStart().slice(0, de[0].length).toLowerCase();
  if (de.some((r) => o.startsWith(r))) return true;
  return de.some((r) => r.startsWith(o)) ? void 0 : false;
}
class le {
  #e = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Map();
  #t;
  #s;
  constructor(e, t) {
    this.#t = e, this.#s = t;
  }
  set(e, { slug: t, as: s, path: o }, r, a) {
    let h = this.#n(t);
    if ((h.as ??= s) !== s) return this.unknown(e, t);
    let g = h.changes.find((f) => f.call === e);
    if (g === void 0) h.changes.push({ call: e, edits: r, path: o, state: "waits", mayGo: a }), this.offer();
    else if (g.state !== "unknown") g.edits = r, this.#a(t, h);
  }
  hold(e, t, s) {
    let o = this.#n(t), r = { call: e, edits: [], state: "judging", mayGo: async () => false };
    o.changes.push(r), s.then((a) => {
      if (!o.changes.includes(r)) return;
      if (typeof a === "object" && (o.as ??= a.as) === a.as) return Object.assign(r, a), this.#r(t, o, r);
      r.state = a === "nothing" ? "passed" : "unknown", this.#a(t, o);
    }).catch(import_chunk_k449cc64.i);
  }
  unknown(e, t) {
    let s = this.#n(t), o = s.changes.findIndex((r) => r.call === e);
    s.changes.splice(o < 0 ? s.changes.length : o, o < 0 ? 0 : 1, { call: e, edits: [], state: "unknown", mayGo: async () => false }), this.#a(t, s);
  }
  slugsOf(e) {
    return [...this.#e].filter(([, t]) => t.changes.some((s) => s.call === e)).map(([t]) => t);
  }
  drop(e) {
    for (let [t, s] of this.#e) s.changes = s.changes.filter((o) => o.call !== e), this.#a(t, s);
  }
  offer() {
    for (let [e, t] of this.#e) for (let s of t.changes) if (s.state === "waits") s.state = "judging", this.#r(e, t, s);
  }
  judgeAgain(e) {
    for (let [t, s] of this.#e) {
      for (let o of s.changes) if (o.edits.length > 0 && o.call === (e ?? o.call)) {
        let r = o.mayGo;
        if (o.mayGo = () => r(), e === void 0 || o.state !== "passed") o.state = "judging";
        this.#r(t, s, o);
      }
      this.#a(t, s);
    }
  }
  aheadOfPublish(e) {
    this.#o.set(e, new Set([...this.#e.values()].flatMap((t) => t.changes)));
  }
  published(e, t, s) {
    for (let [f, { changes: m }] of this.#e) {
      let w = m.find((y) => s?.some((S) => S.path === y.path) === true);
      if (f !== t && w !== void 0) this.#n(f).changes = [], this.unknown(e, f);
    }
    let o = this.#n(t), r = s?.find(({ as: f }) => f === (o.as ?? k));
    if (s !== void 0 && r === void 0) return;
    let a = this.#o.get(e), h = a !== void 0 && (r !== void 0 || o.changes.some((f) => f.call === e)), g = o.changes.filter((f) => f.call !== e && !(a?.has(f) === true && (f.edits.length === 0 ? r !== void 0 || f.state === "passed" : r !== void 0 && f.path === r.path)));
    if (h && o.as !== void 0 && o.changes.every((f) => f.state !== "unknown") && g.every((f) => f.state !== "passed" || f.edits.length === 0)) this.#s({ slug: t, as: o.as });
    if (h && !g.some((f) => a.has(f))) o.changes = g, this.#a(t, o);
    else o.changes = [], this.unknown(e, t);
    if (o.changes.every((f) => f.edits.length === 0)) o.as = void 0;
  }
  clear() {
    this.#e.clear(), this.#o.clear();
  }
  #n(e) {
    let t = this.#e.get(e) ?? { changes: [] };
    return this.#e.set(e, t), t;
  }
  #r(e, t, s) {
    let { mayGo: o } = s;
    o().then((r) => {
      if (s.mayGo === o) s.state = r ? "passed" : "waits", this.#a(e, t);
    }).catch(import_chunk_k449cc64.i);
  }
  #a(e, t) {
    if (t.as === void 0 || this.#e.get(e) !== t) return;
    let s = t.changes.findIndex((o) => o.state !== "passed");
    this.#t({ slug: e, as: t.as }, t.changes.slice(0, s < 0 ? void 0 : s).flatMap((o) => o.edits.map((r) => `${(0, import_chunk_w578pjby._)(r)}
`)).join(""));
  }
}
(0, import_chunk_adx6804h.B)();
var H = "open_pre_publish", U = 262144, Ee = 16, Oe = 256, xe = 16384, ve = xe - Ee * (Oe + 64) - 64, at = 300, Pe = 1e4, fe = 100, dt = 3e3, ue = 3e4, ft = 12e4, q = 5e3, ut = 16e3, ct = 3, N = "#edits", gt = new RegExp(`^${import_chunk_qdcbcsg7.sJe}/pre-publish/[A-Za-z0-9_-]{1,256}$`), pt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ url: (0, import_chunk_adx6804h.n)().max(2048), token: (0, import_chunk_adx6804h.n)().regex(/^[\x21-\x7e]{1,4096}$/), expires_at: (0, import_chunk_adx6804h.aC)({ offset: true }), beside_files_in_auto: (0, import_chunk_adx6804h.ie)().optional(), page: (0, import_chunk_adx6804h.ie)().optional() })), mt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ seq: (0, import_chunk_adx6804h.E)(), watching: (0, import_chunk_adx6804h.P)(), next_ms: (0, import_chunk_adx6804h.E)() }));
class V {
  #e;
  #o;
  #t;
  #s = 0;
  #n = /* @__PURE__ */ new Map();
  #r;
  #a = [];
  #d = 0;
  #f = /* @__PURE__ */ new Set();
  #i = /* @__PURE__ */ new Set();
  #u = /* @__PURE__ */ new Map();
  #l = /* @__PURE__ */ new WeakMap();
  #h = false;
  #c = true;
  #w = false;
  #b = false;
  #m = new AbortController();
  #v = new AbortController();
  #O;
  #k = 0;
  #N = false;
  #y = Promise.withResolvers();
  #M = Promise.withResolvers();
  #g = false;
  constructor(e, t, s) {
    this.#e = e, this.#o = t, this.#t = s;
  }
  openAhead() {
    this.#P();
  }
  start(e, t, s = false) {
    if (!e.endsWith(N)) this.#L(e, t, s);
  }
  edits(e, t) {
    let s = e + N, o = this.#n.get(s);
    if (o === void 0) {
      if (t !== "") this.#L(s, t, false);
    } else if (o.ends === void 0 && t.startsWith(o.text)) this.append(s, t.slice(o.text.length));
    else {
      if (o.ends === void 0) this.close(s, "drop");
      o.next = Buffer.byteLength(t) > U ? void 0 : t;
    }
  }
  editsSaved(e) {
    let t = this.#n.get(e + N);
    if (t !== void 0) t.next = void 0, this.close(e + N, t.ends ?? "saved");
  }
  #L(e, t, s) {
    if ((this.#f.size < Ee || this.#f.has(e)) && Buffer.byteLength((0, import_chunk_w578pjby._)(e)) <= Oe) this.#f.add(e), this.#n.set(e, { text: "", isWhole: s }), this.append(e, t);
  }
  append(e, t) {
    let s = this.#n.get(e);
    if (s === void 0 || s.ends !== void 0) return;
    if (s.text += t, this.#s = Date.now(), s.text.length * 3 > U && Buffer.byteLength(s.text) > U) this.close(e, "drop");
    this.#P();
  }
  whole(e) {
    let t = this.#n.get(e);
    if (t !== void 0) t.isWhole = true, this.#P();
  }
  close(e, t) {
    let s = this.#n.get(e);
    if (s !== void 0) s.ends = t, s.text = "", this.#P();
  }
  async dropsSent() {
    let e = Date.now() + q;
    while (Date.now() < this.#k + ut && (this.#m.signal.aborted ? this.#i.size > 0 : (this.#w || this.#a.length > 0) && [...this.#n].some(([t, { ends: s }]) => s === "drop" && this.#i.has(t)))) {
      if (Date.now() > e) this.end();
      await (0, import_chunk_5appeerh.K)(fe);
    }
  }
  mayShowEarlierText(e) {
    this.#u.set(e, [(0, import_crypto.randomUUID)()]);
  }
  async showsNothingBut(e, t) {
    let s = Date.now() + q;
    while (this.#u.get(e)?.some((o) => !t.startsWith(o))) {
      if (this.#m.signal.aborted || this.#h && this.#a.length === 0 || this.#n.get(e)?.text !== t || Date.now() > s) return false;
      await (0, import_chunk_5appeerh.K)(fe);
    }
    return true;
  }
  judgeAgainBeforeNewText() {
    this.#b = this.#O !== void 0;
  }
  mayGoBesideFilesInAuto() {
    return this.#P(), this.#y.promise;
  }
  isPage() {
    return this.#M.promise;
  }
  end() {
    this.#M.resolve(false), this.#y.resolve(false), this.#m.abort();
  }
  #P() {
    if (this.#v.abort(), !this.#m.signal.aborted) this.#O ??= this.#H();
  }
  async #H() {
    let e;
    try {
      e = await this.#G();
    } catch {
      e = this.#m.signal.aborted ? void 0 : "no_answer";
    }
    this.end();
    let t = [...this.#i].every((o) => this.#n.get(o)?.ends === "saved");
    this.#n.clear();
    let s = this.#F();
    if (e !== void 0) (0, import_chunk_cqa9hrgx.l)("artifact_pre_publish", e);
    if (await this.#R(e === void 0 && t ? "done" : "stop") && await s) this.#i.clear();
  }
  async #F() {
    return (await Promise.all(this.#a.splice(0).map((t) => this.#R("stop", t)))).every(Boolean);
  }
  async #R(e, t = this.#r) {
    if (t === void 0) return false;
    for (let s = 0; s < 2; s++) {
      let o = await this.#K({ seq: this.#d + 1, end: e }, t).then((r) => r.status, () => 0);
      if (o !== 0 && o !== 429 && o < 500) return o === 200 || o === 410;
    }
    return false;
  }
  async #G() {
    let { signal: e } = this.#m, t = 0, s = false, o;
    while (!e.aborted) {
      if (this.#v = new AbortController(), !this.#o()) return "not_allowed";
      if (this.#r === void 0 || Date.now() > this.#r.expiresAtMs - ue || this.#b && this.#E().some((S) => "append" in S)) {
        this.#b = false;
        let S;
        try {
          S = await this.#e(AbortSignal.any([e, AbortSignal.timeout(q)]));
        } catch {
          return e.aborted ? void 0 : "open_refused";
        }
        let v = pt().safeParse(S).data, C = (0, import_chunk_865at33z.Odt)(v?.url), I = v && C && new URL(v.url);
        if (!I || I.search !== "" || !gt.test(I.pathname) || Date.parse(v.expires_at) < Date.now() + 2 * ue) return "bad_answer";
        if (this.#r !== void 0) this.#a.push(this.#r);
        this.#r = { baseUrl: C, path: `/${I.pathname.slice(1)}`, token: v.token, expiresAtMs: Date.parse(v.expires_at), isPage: v.page === true };
        let A = v.beside_files_in_auto === true;
        if (this.#g && !A) return "refused";
        this.#g = A, this.#y.resolve(A), this.#M.resolve(this.#r.isPage), this.#d = 0, this.#C(), this.#w = false, o = void 0;
        continue;
      }
      if ([...o ?? []].some(([S, v]) => S.path.endsWith(N) && S.append !== void 0 && v?.ends === "drop")) o = void 0, this.#C();
      let r = o ?? new Map((this.#w ? this.#E() : []).map((S) => [S, this.#n.get(S.path)])), a = [...r.keys()], h = this.#w && this.#c && (a.length > 0 || this.#i.size > 0 || s), g = this.#d + (a.length > 0 || h ? 1 : 0);
      for (let S of a) {
        this.#i.add(S.path);
        let v = this.#l.get(S);
        if (v !== void 0) this.#u.set(S.path, [...this.#u.get(S.path) ?? [], v]);
      }
      let { status: f, data: m, retryAfterMs: w } = await this.#K({ seq: g, ...h && { reset: h }, ops: a });
      if (o = void 0, f === 410) {
        this.#r = void 0, this.#i.clear();
        return;
      }
      if (f !== 200) {
        if (![409, 429, 503].includes(f) || ++t > ct) return "refused";
        if (f === 409) this.#w = true, this.#h = false, s = true, this.#C();
        else o = r, await (0, import_chunk_5appeerh.K)(Math.min(w ?? 1e3, Pe), e);
        continue;
      }
      let y = mt().safeParse(m).data;
      if (y === void 0) return "bad_answer";
      if (t = 0, s = false, this.#w = y.watching, this.#h = !y.watching, y.watching) this.#F();
      if (g > this.#d && y.seq === g) this.#d = g, this.#z(r, h);
      if (!y.watching) this.#C();
      if (!e.aborted && Date.now() < this.#s + ft && [...this.#n.values()].some((S) => S.ends === void 0)) this.#t();
      if (!y.watching || a.length > 0 || h) {
        let S = Buffer.byteLength((0, import_chunk_w578pjby._)(a)) > ve / 2;
        await (0, import_chunk_5appeerh.K)(y.watching && S ? fe : Math.min(Math.max(y.next_ms, at), Pe), e);
      }
      if (this.#E().length === 0 && !(this.#c && this.#i.size > 0)) await (0, import_chunk_5appeerh.K)(this.#n.size > 0 ? dt : ue, AbortSignal.any([e, this.#v.signal]));
    }
    return;
  }
  #C() {
    this.#c = true;
    for (let e of this.#n.values()) e.sent = void 0;
    this.#f = new Set(this.#n.keys());
  }
  #E() {
    let e = [], t = ve;
    for (let [s, o] of this.#n) {
      if (s.endsWith(N) !== (this.#r?.isPage === true)) o.ends ??= "drop", o.next = void 0;
      let { text: r, isWhole: a, ends: h, sent: g } = o;
      if (h !== void 0) {
        if (!this.#i.has(s)) this.#I(s, o);
        else e.push(h === "drop" ? { path: s, drop: true } : { path: s, saved: true });
        continue;
      }
      let f = g?.chars ?? 0, m = (0, import_chunk_7cfjrnwy.ee)(r.slice(f), t);
      while (Buffer.byteLength((0, import_chunk_w578pjby._)(m)) - 2 > t) m = (0, import_chunk_7cfjrnwy.ee)(m, m.length >> 1);
      let w = a && f + m.length === r.length && g?.isWhole !== true;
      if (m !== "" || w || this.#c) {
        t -= Buffer.byteLength((0, import_chunk_w578pjby._)(m)) - 2;
        let y = { path: s, ...g === void 0 && { start: true }, append: m, ...w && { whole: true } };
        this.#l.set(y, r.slice(0, f + m.length)), e.push(y);
      }
    }
    return e;
  }
  #I(e, { next: t }) {
    if (this.#n.delete(e), t) this.#n.set(e, { text: t, isWhole: false });
  }
  #z(e, t) {
    if (t) this.#c = false, this.#i.clear();
    for (let [s, o] of e) {
      if (s.append === void 0) this.#i.delete(s.path);
      else this.#i.add(s.path);
      let r = this.#l.get(s);
      if (r !== void 0 && this.#w) {
        let a = (this.#u.get(s.path) ?? []).filter((h) => !s.whole && !r.startsWith(h));
        this.#u.set(s.path, [...a, r]);
      }
      if (o === void 0 || o !== this.#n.get(s.path)) continue;
      if (s.append === void 0) this.#I(s.path, o);
      else o.sent = { chars: (o.sent?.chars ?? 0) + s.append.length, isWhole: s.whole === true };
    }
    if (!this.#N && this.#i.size > 0) this.#N = true, (0, import_chunk_cqa9hrgx.u)("artifact_pre_publish");
  }
  async #K(e, t = this.#r) {
    if (t === void 0) return { status: 0 };
    this.#k = Date.now();
    let s = await import_chunk_865at33z.zt.post(t.path, (0, import_chunk_w578pjby._)(e), { auth: "none", baseUrl: t.baseUrl, headers: { "content-type": "application/json", "x-upload-token": t.token }, maxRedirects: 0, noEnvProxy: true, maxBodyLength: xe, maxContentLength: 4096, timeout: q, validateStatus: () => true });
    return s.ok ? { status: s.status, data: s.data, retryAfterMs: (0, import_chunk_865at33z.qp)(s.response.headers["retry-after"]) } : { status: 0 };
  }
}
function Y(e, t) {
  try {
    return (0, import_chunk_9g965wca.qqe)(t, e.name) || (0, import_chunk_9g965wca.YAn)(t, [e.name]) || (0, import_chunk_9g965wca.Sor)();
  } catch {
    return true;
  }
}
function Me(e, t) {
  return (0, import_chunk_9g965wca.Wni)(e, import_chunk_hn3cwwzt.ke, (s) => t.includes(s) && (0, import_chunk_f9x2f6cx.mf)()?.isPersonsOwn?.({ pluginId: s }) === false);
}
function wt(e, t, s) {
  return require("/$bunfs/root/chunk-njaa5wpv.js").decisionOfArtifactRule(s, e.mcpInfo?.toolName ?? "", t) !== null;
}
function Re(e) {
  return { ...e, toolUseId: void 0, permissionRound: void 0 };
}
function Ce(e) {
  return e.sameTurnToolUses?.some((t) => t.message.content.some((s) => s.type === "tool_use" && s.name === import_chunk_pmryp5f3.Fn)) !== false;
}
async function J(e, t, s) {
  try {
    let o = (0, import_chunk_bz1f2qnq.Z)(s);
    if ((0, import_chunk_xcgcdx61.da)(e, o) !== "auto" || (e.mcpInfo?.effectiveMaxPermission ?? "allow") !== "allow" || e.requiresUserInteraction?.() === true || (0, import_chunk_f9x2f6cx.mf)()?.owedList("PreToolUse") !== void 0 || Ce(s) || wt(e, t, o) || [...(0, import_chunk_ht27b0vz.al)(o).filter((h) => h.source !== "mcpServerPolicy" || !(0, import_chunk_bzyb60p0.neo)()), ...(0, import_chunk_ht27b0vz.Vs)(o)].some((h) => (0, import_chunk_ht27b0vz.jc)(o, e, h))) return false;
    let { behavior: r, decisionReason: a } = await e.checkPermissions(t, Re(s));
    return r === "allow" || r === "passthrough" || r === "ask" && a?.type === "rule" && a.rule.source === "mcpServerPolicy" && (0, import_chunk_bzyb60p0.neo)();
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
async function G(e, t, s) {
  try {
    let o = (0, import_chunk_bz1f2qnq.Z)(s), r = (0, import_chunk_xcgcdx61.da)(e, o);
    if (r !== "acceptEdits" && r !== "default" || e.mcpInfo === void 0 || !(0, import_chunk_y83g67xj.T9o)(e.mcpInfo, o) || (0, import_chunk_f9x2f6cx.mf)()?.owedList("PreToolUse") !== void 0 || Y(e, s) || Ce(s)) return false;
    let a = await (0, import_chunk_bzyb60p0.gne)(e, t, Re(s), { crashIsObjection: true });
    return a.behavior === "allow" && a.decisionReason?.type === "rule";
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
var Ie = new import_chunk_pzzqg6s3.ze(() => /* @__PURE__ */ new Set());
var Ne = 1024, yt = /^\s*\{\s*"file_path"\s*:\s*("(?:[^"\\]|\\.)*")\s*,\s*"content"\s*:\s*"/s;
class Q {
  text = "";
  isRuledOut = false;
  isClosed = false;
  head = void 0;
  unread = "";
  #e;
  #o = "";
  constructor(e) {
    this.#e = e;
  }
  take(e) {
    if (this.isRuledOut) return "";
    this.unread += e;
    try {
      if (this.head === void 0) {
        let o = this.#e.exec(this.unread.slice(0, Ne));
        if (o === null) return this.isRuledOut = this.unread.length >= Ne, "";
        this.head = o, this.unread = this.unread.slice(o[0].length);
      }
      if (this.isClosed) return "";
      let t = 0;
      while (t < this.unread.length && this.unread[t] !== '"') {
        let o = this.unread[t] !== "\\" ? 1 : this.unread[t + 1] === "u" ? 6 : 2;
        if (t + o > this.unread.length) break;
        t += o;
      }
      this.isClosed = this.unread[t] === '"';
      let s = this.#o + String((0, import_chunk_w578pjby.te)(`"${this.unread.slice(0, t)}"`));
      return this.unread = this.unread.slice(t + (this.isClosed ? 1 : 0)), this.#o = !this.isClosed && /[\ud800-\udbff]$/.test(s) ? s.slice(-1) : "", s = s.slice(0, s.length - this.#o.length), this.text += s, s;
    } catch {
      return this.isRuledOut = true, "";
    }
  }
}
class W extends Q {
  filePath = void 0;
  constructor() {
    super(yt);
  }
  take(e) {
    let t = super.take(e);
    try {
      this.filePath ??= this.head && String((0, import_chunk_w578pjby.te)(this.head[1]));
    } catch {
      this.isRuledOut = true;
    }
    return this.isRuledOut ||= this.isClosed && !/^\s*(\}\s*)?$/.test(this.unread), t;
  }
}
var St = /^\s*\{\s*(?:"description"\s*:\s*"(?:[^"\\]|\\.)*"\s*,\s*)?"command"\s*:\s*"/s, se = /[ \t]*(?:(&&|;|<<(?!-)|>)|(?:([\p{L}\p{N}_@%+=:,./-]+)|'([^']*)'|"([^"$\x60\\!]*)"|\\(\w+))(?=[ \t;&<>]|$))/uy, At = /* @__PURE__ */ new Set(["mkdir", "echo", "ls", "wc"]), Tt = 1024;
class ge {
  files = [];
  #e = new Q(St);
  #o;
  #t;
  #s = "";
  #n = false;
  #r = false;
  #a = /* @__PURE__ */ new Map();
  constructor(e) {
    this.#o = e;
  }
  get text() {
    return this.#e.text;
  }
  take(e) {
    this.#a = /* @__PURE__ */ new Map();
    let t = this.#e.take(e).split(`
`);
    for (let [s, o] of t.entries()) if (!this.#r) this.#s += o, this.#f(s < t.length - 1);
    if (this.#e.isClosed && !this.#r) this.#f(true);
    if (this.#e.isClosed || this.#e.isRuledOut) this.#l();
    return this.#a;
  }
  #d(e, t, s = e.state) {
    e.text += t, e.state = s, this.#a.set(e, (this.#a.get(e) ?? "") + t);
  }
  #f(e) {
    let t = this.#s, s = this.#t;
    if (s === void 0) {
      if (t.length > Tt) this.#l();
      else if (e) this.#s = "", this.#i(t);
    } else if (!s.isQuoted && /[$\x60\\]/.test(t)) this.#l();
    else if (!e) {
      if (this.#n || !s.end.startsWith(t)) this.#d(s.file, t), this.#s = "", this.#n = true;
    } else {
      if (!this.#n && t === s.end) this.#d(s.file, "", "closed"), this.#t = void 0;
      else this.#d(s.file, `${t}
`);
      this.#s = "", this.#n = false;
    }
  }
  #i(e) {
    if (/^[ \t]*(?:#|$)/.test(e)) return;
    let t = [[]], s, o = e.replace(/[ \t]+$/, "");
    se.lastIndex = 0;
    while (se.lastIndex < o.length) {
      let [, h, g, f, m, w] = se.exec(o) ?? [];
      if (s = h !== void 0 ? { is: "operator", text: h } : g !== void 0 ? { is: "bare", text: g } : w !== void 0 ? { is: "escaped", text: w } : { is: "quoted", text: f ?? m ?? "" }, se.lastIndex === 0) return this.#l();
      if (s.is === "operator" && ["&&", ";"].includes(s.text)) t.push([]);
      else t.at(-1).push(s);
    }
    if (s?.is === "operator" && s.text === ";") t.pop();
    let r;
    for (let h of t) {
      let g = h.map((w, y) => w.is === "operator" || w.is === "bare" && (y === 0 || w.text === "/dev/null") ? w.text : "_").join(" "), [f] = h, m = bt.get(g);
      if (m !== void 0 && r === void 0) r = { path: this.#u(h[m.path]), end: h[m.end] };
      else if (g === "cd _" && !h[1].text.startsWith("-")) this.#o = this.#u(h[1]);
      else if (f?.is !== "bare" || !At.has(f.text) || h.some((w) => w.is === "operator")) return this.#l();
    }
    if (r === void 0) return;
    if (r.path === void 0 || !/^[\w.-]+$/.test(r.end.text)) return this.#l();
    let a = { path: r.path, text: "", state: "open" };
    this.files.push(a), this.#d(a, ""), this.#t = { file: a, end: r.end.text, isQuoted: r.end.is !== "bare" };
  }
  #u({ text: e }) {
    if (e === "" || e.startsWith("-")) return;
    let t = import_path4.posix.isAbsolute(e) ? import_path4.posix.sep : this.#o;
    return t === void 0 ? void 0 : import_path4.posix.resolve(t, e);
  }
  #l() {
    if (this.#r = true, this.#t !== void 0) this.#d(this.#t.file, "", "ruledOut"), this.#t = void 0;
  }
}
var bt = /* @__PURE__ */ new Map([["cat > _ << _", { path: 2, end: 4 }], ["cat << _ > _", { path: 4, end: 2 }], ["tee _ << _", { path: 1, end: 3 }], ["tee _ > /dev/null << _", { path: 1, end: 5 }], ["tee _ << _ > /dev/null", { path: 1, end: 3 }]]);
var vt = 262144, kt = /* @__PURE__ */ new Set(["slug", "base_version", "path", "label", "title", "shared_live"]), Pt = /* @__PURE__ */ new Set(["users", "org"]);
class ne {
  edits = [];
  texts = /* @__PURE__ */ new Map();
  isRuledOut = false;
  #e = "";
  #o = 0;
  #t = "";
  #s;
  #n = 0;
  #r;
  #a = /* @__PURE__ */ new Set();
  take(e) {
    this.#e += e, this.isRuledOut ||= this.#e.length > vt;
    try {
      for (; !this.isRuledOut && this.#o < this.#e.length; this.#o++) this.#d(this.#e[this.#o]);
    } catch {
      this.isRuledOut = true;
    }
  }
  #d(e) {
    if (this.#s !== void 0) {
      if (e === "\\") this.#o++;
      else if (e === '"') {
        let t = this.#s;
        if (this.#s = void 0, this.#t === "{") this.#i(String(this.#f(t)));
      }
    } else if (e === '"') this.#s = this.#o;
    else if (e === "{" || e === "[") this.#t += e, this.#n = this.#o, this.isRuledOut = !"{[{".startsWith(this.#t) || this.#t !== "{" && this.#r !== "edits";
    else if (e === "}" || e === "]") {
      if (this.#t === "{[{") {
        let t = Et(this.#f(this.#n));
        if (t === void 0) this.isRuledOut = true;
        else this.edits.push(t);
      }
      this.#t = this.#t.slice(0, -1);
    } else if (e === "," && this.#t === "{") this.#r = void 0;
    else if (this.#t === "{") this.isRuledOut = !/[\s:]/.test(e);
  }
  #f(e) {
    return (0, import_chunk_w578pjby.te)(this.#e.slice(e, this.#o + 1));
  }
  #i(e) {
    if (this.#r !== void 0) {
      this.texts.set(this.#r, e), this.isRuledOut = this.#r === "shared_live" && !Pt.has(e);
      return;
    }
    this.isRuledOut = this.#a.has(e) || !(e === "edits" || kt.has(e)), this.#a.add(e), this.#r = e;
  }
}
function Et(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && Object.keys(e).length === 2 && typeof e.old_text === "string" && e.old_text !== "" && typeof e.new_text === "string" ? { old_text: e.old_text, new_text: e.new_text } : void 0;
}
(0, import_chunk_adx6804h.B)();
var z = "end_working", Le = { "anthropic/workingSave": true }, Fe = 64, xt = 2500, Ue = 2e4, Mt = 1e4, Be = 12e4, Rt = 3, It = /* @__PURE__ */ new Set(["db_write", "db_str_replace"]), Nt = /* @__PURE__ */ new Set(["slug", "base_version", "files", "remove", "title", "icon", "label"]), He = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.n)().regex(import_chunk_s12kntv9.t2e) })), Lt = (0, import_chunk_2cbgkbm2.p)(() => He().extend({ token: (0, import_chunk_adx6804h.n)().max(16384) }));
class pe {
  #e;
  #o = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Set();
  #n = /* @__PURE__ */ new Set();
  #r = new AbortController();
  #a = false;
  #d;
  #f;
  #i;
  #u = (0, import_chunk_w578pjby.Ct)(() => (this.end(), this.#i));
  constructor(e) {
    this.#e = e;
    let t = import_chunk_bt5spb39.Qtt.of(e.context().session), s = t.savesSettled;
    t.savesSettled = async (o, r) => (await s?.(o, r), this.#c(o, r));
  }
  alive() {
    if (this.#r.signal.aborted) return;
    if (this.#f !== void 0) this.#f.refresh();
    else if ([...this.#o.values()].some(({ run: e }) => e)) this.#f = setTimeout(() => this.putBack(), Be);
  }
  aheadOfCommand() {
    this.#d ??= this.#v(this.#e.ties.publishedPaths().slice(-Fe)).then((e) => {
      let t = new Set(this.#e.ties.publishedPaths());
      for (let [s, o] of e) if (t.has(s) && !this.#t.has(s)) this.#t.set(s, o);
    });
  }
  changed(e) {
    if (e !== void 0 && this.#e.ties.of(e) !== void 0 && !this.#e.ties.isReserved(e)) this.#t.set(e, void 0), this.#s.add(e);
    for (let t of this.#t.keys()) {
      let s = this.#e.ties.of(t)?.slug;
      if (s === void 0) continue;
      let o = this.#o.get(s) ?? { isDirty: false, isStopped: false, isSaving: false, lastSavedAtMs: 0, settled: Promise.resolve() };
      if (this.#o.set(s, o), o.isDirty = true, !o.isSaving) this.#w(s, o);
    }
  }
  async aheadOfPublish(e) {
    let t = this.#e.publishFiles();
    if (this.#o.size > 0 && !(t !== void 0 && await G(t, e, this.#e.context()))) this.putBack();
  }
  putBack() {
    this.#a = true, this.#l();
  }
  made() {
    this.#t.clear();
    for (let e of this.#s) this.#t.set(e, void 0);
    this.#l();
  }
  async #l() {
    let e = [...this.#o];
    while (this.#n.size > 0) await Promise.all(this.#n);
    for (let [t, s] of e) this.#m(t, s, "restore");
  }
  async #h() {
    await Promise.all([...this.#o].map(([e, t]) => this.#m(e, t, "restore")));
  }
  end() {
    if (this.#i !== void 0) return;
    this.#r.abort(), clearTimeout(this.#f);
    let e = import_chunk_bt5spb39.Qtt.of(this.#e.context().session), t = e.savesSettled;
    this.#i = (0, import_chunk_5appeerh.me)(Promise.all(this.#n).then(() => true), Be).then(async (s) => {
      if (s) await this.#h();
      if (this.#u(), e.savesSettled === t) e.savesSettled = void 0;
    });
  }
  async #c(e, t) {
    if (this.#i !== void 0) {
      await this.#i;
      return;
    }
    if (!M(e) || It.has(e)) return;
    let s = Promise.all(this.#n), o = Promise.withResolvers();
    this.#n.add(o.promise), await (0, import_chunk_5appeerh.me)(s, Ue);
    let r = (0, import_chunk_40s2w0s9.Hje)(e, t), a = this.#o.get(r ?? "");
    await a?.settled;
    let { run: h } = a ?? {}, { mode: g = "patch", ...f } = (0, import_chunk_ma3kja9f.T)(t) ? t : {}, m = /* @__PURE__ */ new Set([...O(t).map((y) => y.as), ...[f.remove].flat()]), w = h !== void 0 && e === import_chunk_a7h1jnra.yN && g === "patch" && Object.keys(f).every((y) => Nt.has(y)) && [...h.paths].every((y) => m.has(y));
    if (r === null) await this.#h();
    else if (a !== void 0 && !w) await this.#m(r, a, "restore");
    return { token: w ? h.token : void 0, asking: () => this.#h(), release: (y) => {
      if (w && y && r !== null && a) this.#m(r, a, "keep");
      this.#n.delete(o.promise), o.resolve();
    } };
  }
  async #w(e, t) {
    let { signal: s } = this.#r, { ties: o } = this.#e;
    t.isSaving = true;
    try {
      while (t.isDirty && !t.isStopped && !this.#a) {
        var _stack = [];
        try {
          t.isDirty = false, await this.#d, await (0, import_chunk_5appeerh.K)(t.lastSavedAtMs + xt - Date.now(), s);
          let r = [...await this.#v([...this.#t.keys()].filter((A) => o.of(A)?.slug === e))].filter(([A, x]) => this.#t.get(A) !== x);
          if (r.length === 0) continue;
          await t.settled;
          let a = r.flatMap(([A]) => {
            let x = o.of(A);
            return x?.slug === e ? [{ as: x.as, path: A }] : [];
          }), h = this.#e.context(), g = o.versionOf(e) ?? "", f = { slug: e, base_version: g, files: a }, m = re(h);
          if (this.#n.size > 0) return;
          if (m === void 0 || g === "" || import_chunk_bt5spb39.Qtt.of(h.session).noLongerLive.has(g) || (t.run?.paths.size ?? 0) + a.length > Fe || !await this.#b(f)) {
            t.isStopped = true;
            return;
          }
          let w = `toolu_working_${(0, import_crypto2.randomUUID)()}`, y = await (0, import_chunk_y83g67xj.jni)({ listed: { client: m, name: import_chunk_a7h1jnra.yN, meta: { [import_chunk_q1sh0fgd.s4e]: [{ arg: "files", local: "path", ref: "uri" }] }, schema: void 0 }, input: f, toolPermissionContext: (0, import_chunk_bz1f2qnq.Z)(h), callTool: (A, x) => F(h, A, x, s, Le), signal: s, session: h.session, toolUseId: w, nobodyAsked: true });
          if (await this.#e.aheadOfSave(e), await t.settled, y === f || !await this.#b(f) || s.aborted || this.#n.size > 0 || this.#a || t.isStopped || o.versionOf(e) !== g || a.some(({ path: A }) => o.of(A)?.slug !== e)) return;
          let S = Promise.withResolvers();
          const v = __using(_stack, { [Symbol.dispose]: () => S.resolve() });
          t.settled = t.settled.then(() => S.promise);
          let { version: C, token: I } = Lt().parse(await F(h, import_chunk_a7h1jnra.yN, { ...y, working: true }, AbortSignal.timeout(Ue), { ...Le, ...t.run && { [import_chunk_bt5spb39.Koi]: t.run.token }, [import_chunk_syr33dp2.jdn]: w, [import_chunk_gk0jv3qt.rye]: true }));
          if (t.lastSavedAtMs = Date.now(), o.noteAnswer(import_chunk_a7h1jnra.yN, { slug: e, version: C }), I !== "") {
            if (t.run === void 0) (0, import_chunk_cqa9hrgx.u)("artifact_working_save");
            t.run ??= { token: I, from: g, paths: /* @__PURE__ */ new Set() }, t.run.token = I;
          }
          for (let [A, x] of r) this.#t.set(A, x);
          for (let { as: A, path: x } of a) t.run?.paths.add(A), this.#e.saved(e, x);
          this.alive();
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      }
    } catch (r) {
      if (!(r instanceof import_chunk_yz5b8aaa.EXe && ["changed", "grew", "moved"].includes(r.code) || (0, import_chunk_jv7av99m.d)(r).includes("(HTTP 422): unwatched")) && !s.aborted) t.isStopped = true, (0, import_chunk_cqa9hrgx.l)("artifact_working_save", "refused");
    } finally {
      t.isSaving = false;
    }
  }
  async #b(e) {
    let t = this.#e.publishFiles(), s = t !== void 0 && await G(t, e, this.#e.context());
    if (!s) this.putBack();
    return s;
  }
  #m(e, t, s) {
    return t.isStopped ||= s === "restore" && t.run !== void 0, t.settled = t.settled.then(async () => {
      let { run: o } = t;
      if (t.run = void 0, o === void 0) return;
      let r = this.#e.context();
      if (s === "restore") t.isStopped = true, import_chunk_bt5spb39.Qtt.of(r.session).noLongerLive.add(o.from);
      for (let a = 1; a <= Rt; a++) try {
        He().parse(await F(r, z, { slug: e, token: o.token, how: s }, AbortSignal.timeout(Mt)));
        return;
      } catch {
        await (0, import_chunk_5appeerh.K)(a * 1e3);
      }
      if (s === "restore") (0, import_chunk_cqa9hrgx.l)("artifact_working_save", "not_put_back");
    }), t.settled;
  }
  async #v(e) {
    let t = /* @__PURE__ */ new Map();
    try {
      let s = this.#e.context(), o = import_chunk_gk0jv3qt.pq.peek(s.session)?.host;
      if (o === void 0 || o.ruleItCannotApply((0, import_chunk_bz1f2qnq.Z)(s)) !== void 0) return t;
      let r = new Set(e);
      while (r.size > 0) {
        let a = r.size;
        for (let h of await o.files.hash([...r], this.#r.signal)) if (r.delete(h.path), "sha256" in h) t.set(h.path, h.sha256);
        else if (h.code !== "path_rejected") return t;
        if (r.size === a) return t;
      }
    } catch {
    }
    return t;
  }
}
var Ft = "tengu_mellow_valley", Ut = "tengu_vast_hammock", Bt = "tengu_quiet_trellis", Ht = /^\s*\{\s*"file_path"\s*:\s*("(?:[^"\\]|\\.)*")/, Wt = 2048, We = /* @__PURE__ */ new Set(["command", "description", "timeout"]), we = 5e3, jt = /* @__PURE__ */ new Set([import_chunk_k883m4fq.De, import_chunk_865at33z.Qr, import_chunk_865at33z.Sr, import_chunk_t99xdws4.co, import_chunk_ht27b0vz.Wc, import_chunk_ww0784kh.Gn, import_chunk_e5q83yb8.so, import_chunk_6eq0mqyj.My, import_chunk_mahb4v28.Gp, import_chunk_mahb4v28.QI, import_chunk_6qaevejb.Nk, import_chunk_mahb4v28.$m]), Gt = /* @__PURE__ */ new Set([import_chunk_060xwhvh._t, import_chunk_bne5t4g3.Ln, import_chunk_jar84hn9.xc]), je = 32, Kt = 5e3, $t = 6e4, Xt = 2e3;
function Nn(e) {
  try {
    let { messages: t, toolUseContext: s } = e;
    if (import_chunk_gk0jv3qt.pq.peek(s.session)?.sendsAheadOfPublish !== true || [H, z].every((r) => L(s, r) === void 0) || Xe() || (0, import_chunk_865at33z.GZ)() || (0, import_chunk_865at33z.Pr)(e.querySource) !== "main" || s.agentId !== void 0 || e.continuesInterruptedWork === true || e.keptFirstResponse !== void 0) return;
    let o = (0, import_chunk_865at33z.CNe)(t);
    if (o?.type !== "user" || o.promptRewritten === true || t.findLastIndex((r) => r.type === "assistant") > t.lastIndexOf(o)) return;
    if (o.typedByPerson === true && !(0, import_chunk_865at33z.rD)(o)) return new _e(e, true);
    return import_chunk_gk0jv3qt.pq.peek(s.session)?.sendsAheadAfterAnAppsWords === true && Ie.peek(s.session)?.has(o.uuid) === true && !(0, import_chunk_865at33z.rD)({ ...o, textNotTyped: void 0 }) ? new _e(e, false) : void 0;
  } catch (t) {
    (0, import_chunk_k449cc64.i)(t);
    return;
  }
}
class _e {
  #e;
  #o;
  #t = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Map();
  #r = /* @__PURE__ */ new Map();
  #a = /* @__PURE__ */ new Map();
  #d = /* @__PURE__ */ new Set();
  #f = /* @__PURE__ */ new Set();
  #i;
  #u = [];
  #l;
  #h;
  #c;
  #w = /* @__PURE__ */ new Map();
  #b = /* @__PURE__ */ new Set();
  #m = /* @__PURE__ */ new Map();
  #v;
  #O = /* @__PURE__ */ new Map();
  #k = /* @__PURE__ */ new Set();
  #N = 0;
  #y = /* @__PURE__ */ new Set();
  #M;
  #g;
  #L = false;
  #P = false;
  #H = false;
  #F = /* @__PURE__ */ new Set();
  #R = 0;
  #G = false;
  #C = false;
  #E = false;
  #I;
  constructor({ messages: e, toolUseContext: t }, s) {
    this.#I = s, this.#e = new ae(e), this.#i = t;
    let o = (0, import_chunk_865at33z.b)(Bt, false);
    this.#v = o === "commands", this.#h = s && (o === true || o === "commands") ? new le(({ slug: a, as: h }, g) => (g === "" ? this.#t.get(a) : this.#B(a))?.edits(h, g), ({ slug: a, as: h }) => this.#t.get(a)?.editsSaved(h)) : void 0, this.#o = s && L(t, z) ? new pe({ ties: this.#e, context: () => this.#U(), publishFiles: () => this.#d.size > 0 ? void 0 : this.#S(z), aheadOfSave: (a) => this.#Le(a), saved: (a, h) => {
      this.#re(a, /* @__PURE__ */ new Set([h])), this.#h?.published("", a);
    } }) : void 0;
    let r = import_chunk_bt5spb39.Qtt.of(t.session);
    r.textTakenBack = (...a) => this.#ke(...a), r.filesHashed = (...a) => this.#Pe(...a), r.reservedPageLeft = (a, h) => {
      let g = this.#g;
      if (typeof g === "object" && g.takenBy === (a ?? "")) {
        if (g.takenBy = void 0, g.wasGiven = void 0, g.isGone = h ? true : void 0, g.hasNoText) this.#D("published_elsewhere");
      }
    }, t.abortController.signal.addEventListener("abort", () => this.#p("stopped"), { once: true });
  }
  atToolUseStart(e) {
    if (e.messages !== this.#i.messages) this.#u = [];
    this.#i = e;
  }
  atFallback() {
    this.#p();
  }
  tapping(e) {
    return e && ((t, s) => {
      let o = e(t, s);
      if (o) this.#z(t);
      return o;
    });
  }
  async *through(e) {
    let t = false;
    try {
      let s;
      while (true) {
        let o = await e.next(s);
        if (o.done) {
          if (t = true, o.value.reason === "completed") this.#p(this.#G ? "file_sent" : this.#C ? "asked" : "not_published");
          return o.value;
        }
        this.#z(o.value), s = yield o.value;
      }
    } finally {
      if (this.#p(), !t) await e.return({ reason: "aborted_streaming" });
    }
  }
  #z(e) {
    if (this.#E) return;
    try {
      switch (this.#o?.alive(), e.type) {
        case "stream_event":
          return this.#K(e);
        case "assistant":
          return this.#ve(e);
        case "user":
          return this.#Ee(e);
        case "attachment": {
          let { attachment: t } = e;
          if (t.type === "poll_events" || t.type === "teammate_mailbox") return this.#p();
          if (t.type !== "queued_command") return;
          return t.typedByPerson === true && t.promptRewritten !== true && t.isMeta !== true ? this.#J() : this.#p();
        }
        case "tombstone":
        case "refusal_continuation":
        case "query_model_change":
        case "conversation_reset":
          return this.#p();
        case "system":
          return (0, import_chunk_865at33z.On)(e) ? this.#p() : void 0;
        default:
          return;
      }
    } catch (t) {
      (0, import_chunk_k449cc64.i)(t), this.#p();
    }
  }
  #K({ event: e }) {
    switch (e.type) {
      case "message_delta":
        return e.delta.stop_reason === "refusal" ? this.#p() : void 0;
      case "message_start":
      case "content_block_start":
        if (this.#l !== void 0) {
          if (this.#ce(this.#l.id), e.type === "message_start") this.#y.delete(this.#l.id);
          this.#l = void 0;
        }
        for (let t of this.#k) if (e.type === "message_start" && !this.#n.has(t)) this.#k.delete(t);
        if (this.#c !== void 0) {
          if (e.type === "message_start") this.#y.delete(this.#c.id);
          if (e.type === "message_start" || this.#c.is.kind !== "shell") this.#h?.drop(this.#c.id);
          this.#c = void 0;
        }
        if (e.type === "content_block_start" && e.content_block.type === "tool_use") {
          let { id: t, name: s } = e.content_block, o = this.#ge(s), { kind: r } = o;
          if (this.#pe(e.index, t, o), r === "write" && this.#s.size < je) this.#l = { index: e.index, id: t }, this.#s.set(t, { write: new W(), stage: "streaming" });
          else if (r === "shell") {
            if (this.#o?.aheadOfCommand(), $e() !== void 0 && (0, import_chunk_4vsz8a99.tn)(this.#i.options.tools, import_chunk_rb36kwbn.Dt)) {
              let a = this.#y.size === 0 ? (0, import_chunk_f9x2f6cx.VS)()?.shell ?? void 0 : void 0, h = new ge(a);
              this.#l = { index: e.index, id: t, command: h };
            }
            this.#y.add(t);
          }
        }
        return;
      case "content_block_delta": {
        if (this.#c?.index === e.index && e.delta.type === "input_json_delta") this.#me(this.#c, e.delta.partial_json);
        if (this.#l?.index !== e.index || e.delta.type !== "input_json_delta") return;
        let { id: t, command: s } = this.#l;
        if (s !== void 0) return this.#Te(t, s, e.delta.partial_json);
        let o = this.#s.get(t);
        return o && this.#ie(t, o, o.write.take(e.delta.partial_json));
      }
      default:
        return;
    }
  }
  #pe(e, t, s) {
    if (this.#h === void 0) return;
    if (this.#Q(t, s), s.kind === "artifacts" && s.served === import_chunk_a7h1jnra.gys) this.#w.set(t, new ne()), this.#q([...this.#e.pages().keys()].at(-1));
    else if (s.kind === "shell") this.#Z(t);
    else if (s.kind !== "edit") return;
    this.#c = { index: e, id: t, is: s, input: "" };
  }
  #me(e, t) {
    let s = this.#w.get(e.id);
    if (s !== void 0) {
      let o = s.edits.length + s.texts.size;
      if (s.take(t), s.isRuledOut || s.edits.length + s.texts.size > o) this.#se(e.id, s);
    } else if (e.input.length < Wt) {
      e.input += t;
      let o = Ht.exec(e.input)?.[1], r = [...this.#e.pages()], a = (f) => r.findLast(([, m]) => m.some(f))?.[0], h = e.is.kind === "shell" ? a((f) => e.input.includes(f)) ?? a((f) => e.input.includes(import_path.posix.basename(f))) : a((f) => o === (0, import_chunk_w578pjby._)(f));
      this.#q(h);
      let g = h && this.#e.entryOf(h);
      if (this.#v && e.is.kind === "shell" && g && this.#O.get(e.id)?.path !== g && e.input.includes(import_path.posix.basename(g))) this.#O.set(e.id, { path: g, text: this.#we(h, g) });
    }
  }
  #Q(e, { kind: t }) {
    if (t !== "read" && t !== "artifacts" && !this.#k.has(e)) this.#k.add(e), this.#N++;
  }
  async #we(e, t) {
    try {
      if (await this.#t.get(e)?.isPage() !== true || this.#S() === void 0 || this.#T()) return;
      let s = await import_chunk_gk0jv3qt.pq.peek(this.#i.session)?.host?.read?.(t, U, AbortSignal.any([this.#i.abortController.signal, AbortSignal.timeout(we)]));
      return s && new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(s);
    } catch {
      return;
    }
  }
  #q(e) {
    if (e !== void 0 && !this.#t.has(e) && this.#S() !== void 0 && !this.#T()) this.#B(e).openAhead();
  }
  #Z(e) {
    if (this.#m.has(e)) return;
    let t = Promise.withResolvers();
    this.#m.set(e, t.resolve);
    let s = this.#k.size === 1 ? this.#N : void 0, o = () => s === this.#N;
    for (let [r, a] of this.#e.pages()) if (a.length > 0) {
      let h = this.#ee(a);
      this.#h?.hold(e, r, t.promise.then(async (g) => {
        let [f, m] = [await h, await this.#ee(a)], w = a.filter((y, S) => f?.[S] !== m?.[S]);
        if (g === "runs_on" || f === void 0 || m === void 0) return;
        return w.length === 0 ? "nothing" : w.length === 1 && g === "done" ? this.#_e(e, r, [f, m].map((y) => y[a.indexOf(w[0])]), w[0], o) : void 0;
      }));
    }
  }
  async #_e(e, t, [s, o], r, a) {
    let h = this.#O.get(e);
    this.#O.delete(e);
    let g = this.#n.get(e)?.input;
    if (h?.path !== r || !(0, import_chunk_ma3kja9f.T)(g) || typeof g.command !== "string" || Object.keys(g).some((y) => !We.has(y))) return;
    let f = await h.text, m = f !== void 0 && a() && s === (0, import_chunk_ccm69jjy.Je)(f) ? Se(f, g.command) : void 0, w = { slug: t, as: k };
    return m !== void 0 && o === (0, import_chunk_ccm69jjy.Je)(m.after) ? { as: w.as, path: r, edits: m.edits, mayGo: () => this.#te(r, w, "written") } : void 0;
  }
  async #ee(e) {
    if (this.#S() === void 0 || this.#T()) return;
    let t = await import_chunk_gk0jv3qt.pq.peek(this.#i.session)?.host?.files.hash(e, AbortSignal.any([this.#i.abortController.signal, AbortSignal.timeout(we)])).catch(() => {
      return;
    });
    return t?.length === e.length && t.every((s) => "sha256" in s) ? t.map((s) => s.sha256) : void 0;
  }
  async #te(e, t, s) {
    let o = new W();
    o.filePath = e;
    let r = { write: o, stage: s };
    return (0, import_chunk_f9x2f6cx.mf)()?.owedList("PreToolUse", void 0, true) === void 0 && !this.#W(r) && !this.#T() && await this.#$(r, t) && this.#e.of(e)?.slug === t.slug;
  }
  #se(e, t) {
    let s = t.texts.get("slug"), o = t.texts.get("path") ?? k;
    if (t.isRuledOut || o !== k) for (let r of this.#h?.slugsOf(e) ?? []) this.#h?.unknown(e, r);
    else if (s !== void 0 && this.#e.pages().has(s)) {
      if (this.#q(s), t.edits.length > 0) this.#h?.set(e, { slug: s, as: o }, t.edits.map((r) => ({ find: r.old_text, replace: r.new_text })), () => this.#ye(e, s));
    }
  }
  async #ye(e, t) {
    if (!this.#t.has(t) || !await this.#B(t).mayGoBesideFilesInAuto()) return false;
    let s = this.#w.get(e), o = this.#U(), r = this.#S(), a = L(o, import_chunk_a7h1jnra.gys);
    return r !== void 0 && a !== void 0 && s !== void 0 && (0, import_chunk_4vsz8a99.tn)(o.options.tools, a.name) !== void 0 && !this.#T() && (0, import_chunk_bzyb60p0.jLt)(a, {}, o) === void 0 && !Y(a, o) && await J(a, { ...Object.fromEntries(s.texts), edits: s.edits }, o) && await J(r, { slug: t, files: [] }, o) && this.#d.size === 0;
  }
  #Se(e, t, s) {
    let o = this.#h;
    if (o === void 0) return;
    if (this.#Q(e, t), this.#c?.id === e) this.#c = void 0;
    if (t.kind === "artifacts") {
      if (t.served === import_chunk_a7h1jnra.gys) {
        let S = new ne();
        if (S.take((0, import_chunk_w578pjby._)(s)), this.#w.set(e, S), o.slugsOf(e).some((C) => C !== S.texts.get("slug"))) S.isRuledOut = true;
        this.#se(e, S), o.judgeAgain(e);
      }
      return o.aheadOfPublish(e);
    }
    if (t.kind === "shell") return this.#Z(e);
    if (t.kind === "unseen" || t.kind === "other" || t.kind === "skill") {
      for (let S of this.#e.pages().keys()) o.unknown(e, S);
      return;
    }
    if (t.kind !== "edit" && t.kind !== "write" || !(0, import_chunk_ma3kja9f.T)(s)) return;
    let { file_path: r, old_string: a, new_string: h, replace_all: g, ...f } = s, m = String(r), w = this.#e.wasPublished(m) ? this.#e.of(m) : void 0, y = this.#e.pages();
    if (w === void 0 || y.get(w.slug)?.includes(m) !== true) {
      for (let [S, v] of y) if (v.some((C) => import_path.posix.basename(C) === import_path.posix.basename(m))) o.unknown(e, S);
      return;
    }
    if (t.kind === "write" || typeof a !== "string" || typeof h !== "string" || a === "" || Object.keys(f).length > 0 || !/\.html?$/i.test(w.as)) return o.unknown(e, w.slug);
    o.set(e, { ...w, path: m }, [{ find: a, replace: h, ...g === true && { all: true } }], () => this.#te(m, w, this.#b.has(e) ? "written" : "whole"));
  }
  #Ae(e, t, s) {
    if (s === void 0) return this.#h?.drop(e);
    if ((s.oldString ?? t.old_string) === t.old_string && (s.newString ?? t.new_string) === t.new_string && (s.filePath ?? t.file_path) === t.file_path && (s.replaceAll ?? t.replace_all ?? false) === (t.replace_all ?? false) && s.userModified !== true) return this.#b.add(e), this.#h?.offer();
    for (let o of this.#h?.slugsOf(e) ?? []) this.#h?.unknown(e, o);
  }
  #ie(e, t, s) {
    if (t.write.isRuledOut || t.write.text.length > U) this.#_(e);
    else if (t.sent !== void 0) {
      let { slug: o, as: r } = t.sent.to;
      this.#t.get(o)?.append(r, s);
    } else if ((!t.waits || t.waitsForViewer && R.peek(this.#i.session)?.isWatched?.() === true) && t.write.filePath !== void 0) this.#A(e, t);
  }
  #Te(e, t, s) {
    let o = t.files.length;
    for (let [r, a] of t.take(s)) {
      let h = t.files.indexOf(r), g = `${e} ${h}`;
      if (h >= o && this.#s.size < je) {
        let m = new W();
        m.filePath = r.path, this.#s.set(g, { write: m, stage: "streaming", isHeredoc: true });
      }
      let f = this.#s.get(g);
      if (f === void 0) continue;
      if (f.write.text = r.text, f.write.isRuledOut = r.state === "ruledOut", this.#ie(g, f, a), r.state === "closed" && this.#s.has(g)) if (f.stage = "whole", f.sent === void 0) this.#A(g, f);
      else this.#t.get(f.sent.to.slug)?.whole(f.sent.to.as);
    }
  }
  async #be(e, t) {
    let s = [...this.#s].filter(([f]) => X(f) === e), o = s.some(([, f]) => f.sent !== void 0), r = s.some(([, f]) => this.#W(f)), a = /* @__PURE__ */ new Set();
    for (let [f, m] of s) {
      let w = m.write.filePath ?? "", y = m.sent === void 0 ? this.#e.of(w) : void 0;
      if (!t || y !== void 0 && this.#j(y.slug)) this.#_(f);
      else m.stage = "ran", a.add(w);
    }
    let h = a.size === 0 || this.#T() ? void 0 : await import_chunk_gk0jv3qt.pq.peek(this.#i.session)?.host?.files.hash([...a], AbortSignal.any([this.#i.abortController.signal, AbortSignal.timeout(we)])).catch(() => {
      return;
    }), g = true;
    for (let [f, m] of s) {
      if (m.stage !== "ran") continue;
      let w = h?.find(({ path: S }) => S === m.write.filePath), y = w !== void 0 && "sha256" in w && w.sha256 === (0, import_chunk_ccm69jjy.Je)(m.write.text);
      if (g &&= y, this.#s.get(f) !== m) continue;
      if (!y) this.#_(f);
      else if (m.stage = "written", this.#a.set(m.write.filePath ?? "", m.write.text), m.sent === void 0) this.#A(f, m);
    }
    if (o && t && g) (0, import_chunk_cqa9hrgx.u)("artifact_pre_publish_heredoc");
    else if (o || r && a.size > 0) (0, import_chunk_cqa9hrgx.l)("artifact_pre_publish_heredoc", !o ? "held" : t ? "other_bytes" : "command_failed");
  }
  #ve(e) {
    if (e.isApiErrorMessage) return this.#p();
    let t = e.message.content.filter((o) => o.type === "tool_use");
    if (t.length > 0) this.#u.push({ ...e, message: { ...e.message, content: t } });
    let s = e.message.content.at(-1);
    if (s?.type === "text") this.#C = /[?\uFF1F\u061F][^\p{L}\p{N}]*$/u.test(s.text.slice(-16));
    for (let { id: o, name: r, input: a } of t) {
      let h = this.#ge(r);
      if (this.#n.set(o, { is: h, input: a }), this.#H ||= h.kind === "artifacts" && be(h.served, a), this.#G ||= r === import_chunk_cee6q0wn.Yd, r === import_chunk_e5q83yb8.so) this.#o?.putBack();
      else if (h.kind === "artifacts" && h.served === import_chunk_a7h1jnra.yN && (0, import_chunk_ma3kja9f.T)(a)) this.#o?.aheadOfPublish(a);
      if (h.kind === "artifacts" && M(h.served)) this.#ne(o, h.served, a);
      else if (h.kind === "unseen" || h.kind === "skill") this.#d.add(o), this.#X([]);
      this.#Se(o, h, a);
      let g = this.#l?.id === o ? this.#l : void 0;
      if (g !== void 0) this.#l = void 0;
      if (h.kind === "shell") {
        if (this.#y.add(o), !(0, import_chunk_ma3kja9f.T)(a) || a.command !== g?.command?.text || Object.keys(a).some((w) => !We.has(w))) this.#ce(o);
        continue;
      }
      let f = this.#s.get(o);
      if (f === void 0) continue;
      if (!(0, import_chunk_ma3kja9f.T)(a) || Object.keys(a).length !== 2 || a.file_path !== f.write.filePath || typeof a.content !== "string") {
        this.#_(o);
        continue;
      }
      let m = a.content === f.write.text;
      if (f.write.text = a.content, f.stage = "whole", f.sent === void 0) this.#A(o, f);
      else {
        let { slug: w, as: y } = f.sent.to, S = this.#t.get(w);
        if (m) S?.whole(y);
        else S?.start(y, a.content, true);
      }
    }
  }
  #ne(e, t, s) {
    let o = (0, import_chunk_40s2w0s9.Hje)(t, s);
    if (o === null) this.#d.add(e);
    else this.#e.written(o);
    this.#X(t === import_chunk_a7h1jnra.yN ? O(s).map((r) => r.path) : []);
  }
  async #ke(e, t, s = "", o) {
    try {
      if (M(e)) {
        if (!this.#E) this.#Re(e, t, s, o), this.#ne(s, e, t);
        await Promise.all([...this.#t.values()].map((r) => r.dropsSent()));
      }
    } catch (r) {
      (0, import_chunk_k449cc64.i)(r);
    }
  }
  async #Pe(e = "", t) {
    try {
      let s = ({ write: r }, a = r.text) => t.some(({ path: h, sha256: g }) => h === r.filePath && g === (0, import_chunk_ccm69jjy.Je)(a));
      for (let r of this.#s.values()) {
        let { write: a, stage: h, sent: g } = r, f = this.#a.get(a.filePath ?? "");
        if (g?.wasJudged === false && h === "written" && f !== void 0 && f !== a.text && s(r, f)) a.text = f, this.#t.get(g.to.slug)?.start(g.to.as, f, true);
      }
      await this.#Ce(e, s), await Promise.all([...this.#s].map(async ([r, a]) => {
        let { sent: h } = a;
        if (h?.wasJudged !== false || !this.#j(h.to.slug) || !t.some(({ path: f }) => f === a.write.filePath)) return;
        let g = await this.#oe(a, h.to);
        if (g && s(a)) return;
        if (g && await this.#$(a, h.to)) h.wasJudged = true;
        else this.#x(r);
      })), await Promise.all([...this.#t.values()].map((r) => r.dropsSent()));
      let o = this.#g;
      if (typeof o !== "object" || o.isDone === true || o.takenBy !== e) return;
      return o.wasGiven = true, o.slug;
    } catch (s) {
      (0, import_chunk_k449cc64.i)(s), this.#p(), await Promise.all([...this.#t.values()].map((o) => o.dropsSent()));
      return;
    }
  }
  async #oe({ write: e }, { slug: t, as: s }) {
    return await this.#t.get(t)?.showsNothingBut(s, e.text) !== false;
  }
  #Ee(e) {
    let { content: t } = e.message;
    for (let s of Array.isArray(t) ? t : []) {
      if (s.type !== "tool_result") continue;
      let o = s.tool_use_id, r = this.#n.get(o);
      if (r === void 0) return this.#p();
      let a = (0, import_chunk_ma3kja9f.T)(e.toolUseResult) ? e.toolUseResult : {}, h = s.is_error !== true && a.staged !== true, g = (0, import_chunk_ma3kja9f.T)(r.input) ? r.input : {};
      if (a.backgroundTaskId === void 0) this.#k.delete(o);
      if (this.#Y(), r.is.kind === "shell") this.#o?.changed();
      else if (h && (r.is.kind === "write" || r.is.kind === "edit") && typeof g.file_path === "string" && g[import_chunk_syr33dp2.io] === void 0) this.#o?.changed(g.file_path);
      switch (r.is.kind) {
        case "artifacts":
          this.#Oe(o, r.is.served, r.input, h ? s.content : void 0);
          break;
        case "write": {
          let f = this.#s.get(o);
          if (h && f?.write.filePath !== void 0 && (a.content ?? f.write.text) === f.write.text && (a.filePath ?? f.write.filePath) === f.write.filePath) {
            if (this.#r.set(f.write.filePath, f.write.text), this.#a.set(f.write.filePath, f.write.text), f.stage = "written", f.sent === void 0) this.#A(o, f);
          } else this.#r.delete(String(Object(r.input).file_path)), this.#_(o);
          break;
        }
        case "edit":
          this.#xe(o, h ? r.input : void 0, a), this.#Ae(o, g, h ? a : void 0);
          break;
        case "read":
          break;
        case "shell":
          this.#r.clear(), this.#y.delete(o), this.#m.get(o)?.(a.backgroundTaskId !== void 0 ? "runs_on" : h && a.interrupted !== true ? "done" : "failed"), this.#be(o, h && a.interrupted !== true && a.backgroundTaskId === void 0).catch(import_chunk_k449cc64.i);
          break;
        case "skill":
        case "other":
        case "unseen":
          if (this.#r.clear(), this.#f.add(o), r.is.kind === "skill" && a.success === true && a.status !== "forked") this.#d.delete(o), this.#h?.drop(o), this.#fe();
          else this.#J();
          break;
      }
    }
  }
  #Oe(e, t, s, o) {
    if (o === void 0) return M(t) ? this.#p("publish_failed") : void 0;
    let { slug: r, version: a } = (0, import_chunk_a7h1jnra.n9)(o) ?? {};
    if (r === void 0) {
      for (let h of this.#h?.slugsOf(e) ?? []) this.#h?.unknown(e, h);
      return this.#X([]);
    }
    if (this.#e.noteAnswer(t, { slug: r, version: a }), t === import_chunk_a7h1jnra.ule) {
      if ((0, import_chunk_a7h1jnra.Myo)(o)) {
        this.#P = true, this.#D("made_from_type");
        for (let h of this.#s.keys()) this.#x(h);
        this.#e.made(r), this.#o?.made();
        for (let h of this.#f) this.#d.delete(h);
        if (this.#T()) return this.#p();
        if (this.#S() !== void 0) this.#B(r).openAhead();
        else if (Ge(L(this.#i, H), this.#i)) (0, import_chunk_cqa9hrgx.l)("artifact_pre_publish", "listed_as_refused");
        this.#fe();
      }
    } else if (M(t)) {
      this.#e.written(r), this.#d.delete(e), this.#h?.published(e, r, t === import_chunk_a7h1jnra.yN ? O(s) : void 0);
      for (let h of this.#y.keys()) if (!this.#h?.slugsOf(h).includes(r)) this.#h?.unknown(h, r);
      if (t === import_chunk_a7h1jnra.yN) this.#e.published(r, s), this.#re(r, new Set(O(s).map((h) => h.path))), this.#Ie(r, s);
      this.#X([]);
    }
  }
  #re(e, t) {
    for (let [s, { write: o, stage: r, sent: a }] of this.#s) if ((r === "written" || r === "ran") && t.has(o.filePath ?? "")) {
      if (this.#s.delete(s), a !== void 0) this.#t.get(a.to.slug)?.close(a.to.as, a.to.slug === e ? "saved" : "drop");
    }
  }
  #xe(e, t, s) {
    if (!(0, import_chunk_ma3kja9f.T)(t) || typeof t.file_path !== "string") return;
    let { file_path: o, old_string: r, new_string: a, replace_all: h, ...g } = t, f = this.#r.get(o) ?? this.#a.get(o), m = this.#r.delete(o);
    if (this.#a.delete(o), f === void 0 || typeof r !== "string" || typeof a !== "string" || (s.oldString ?? r) !== r || (s.newString ?? a) !== a || (s.filePath ?? o) !== o || r === "" || !f.includes(r) || Object.keys(g).length > 0) return;
    let w = new W();
    if (w.filePath = o, w.text = (0, import_chunk_hgbq13xy.vfr)(f, r, a, h === true), this.#a.set(o, w.text), !m) return;
    this.#r.set(o, w.text);
    let y = { write: w, stage: "written" };
    this.#s.set(e, y), this.#A(e, y);
  }
  #A(e, t) {
    let s = t.write.filePath ?? "", o = this.#e.of(s);
    if (o?.as.endsWith(N)) return this.#_(e);
    if (t.waits = true, t.waitsForViewer = void 0, t.isBeingJudged || !o && this.#e.mayComeTo(s)) return;
    let r = this.#U(), a = this.#S() === void 0 || (0, import_chunk_f9x2f6cx.mf)()?.owedList("PreToolUse", void 0, true) !== void 0 || this.#W(t);
    if (o === void 0) {
      if (t.isHeredoc && this.#H && this.#W(t) && he(s, "", (0, import_chunk_f9x2f6cx.VS)()?.directory) === void 0) (0, import_chunk_cqa9hrgx.l)("artifact_pre_publish_heredoc", "held");
      return a || !this.#I ? this.#_(e) : this.#Me(e, t);
    }
    if (a) return;
    if (this.#T()) return this.#p();
    let h = Ke(r);
    if (!this.#j(o.slug)) return this.#ue(e, t, { to: o, wasJudged: false, under: h });
    t.isBeingJudged = true, this.#$(t, o).then((g) => {
      t.isBeingJudged = void 0;
      let f = this.#e.of(s);
      if (g && this.#s.get(e) === t && f?.slug === o.slug && f.as === o.as) this.#ue(e, t, { to: o, wasJudged: true, under: h });
    }).catch(import_chunk_k449cc64.i);
  }
  #W({ stage: e, isHeredoc: t }) {
    let s = this.#U(), o = (0, import_chunk_bz1f2qnq.Z)(s);
    return e !== "written" && ([...(0, import_chunk_ht27b0vz.al)(o), ...(0, import_chunk_ht27b0vz.Vs)(o)].some((r) => [import_chunk_rb36kwbn.Dt, import_chunk_rb36kwbn.lt, ...t ? [import_chunk_hn3cwwzt.ke] : []].some((a) => (0, import_chunk_ht27b0vz.jc)(o, { name: a }, r))) || t === true && Me(s, $e() ?? []));
  }
  #Me(e, t) {
    let { session: s } = this.#i, o = R.peek(s), r = L(this.#i, H)?.inputJSONSchema?.required, a = he(t.write.filePath ?? "", t.write.text, (0, import_chunk_f9x2f6cx.VS)()?.directory);
    if (a === void 0 && t.stage === "streaming") {
      t.waits = void 0;
      return;
    }
    if (a !== true || t.stage !== "streaming" || [...this.#d].some((m) => !this.#f.has(m)) || this.#e.tiesElsewhere(t.write.filePath ?? "") || o?.send === void 0 || !Array.isArray(r) || r.includes("slug") || this.#T()) return this.#_(e);
    let h = this.#g === void 0 && this.#H;
    if (this.#de()) return t.waitsForViewer = true, h ? void 0 : this.#_(e);
    if (!h) return this.#F.add(t.write.filePath ?? ""), this.#_(e);
    let { unusedSlug: g } = o;
    o.unusedSlug = void 0, this.#g = "opening", this.#L = false, t.isBeingJudged = true;
    let f = AbortSignal.any([this.#i.abortController.signal, AbortSignal.timeout(Kt)]);
    this.#V(g, f).then((m) => this.#ae(e, t, { slug: g, ...(0, import_chunk_ma3kja9f.T)(m) ? m : { slug: void 0 } })).catch(() => {
      o.unusedSlug = f.aborted ? g : void 0, this.#ae(e, t, void 0);
    });
  }
  #ae(e, t, s) {
    t.isBeingJudged = void 0;
    let o = (0, import_chunk_ma3kja9f.T)(s) ? s.slug : void 0, r = t.write.filePath;
    if (typeof o !== "string" || (0, import_chunk_mzmcvr6c.ht)(o) === null) return (0, import_chunk_cqa9hrgx.l)("artifact_pre_publish_new_page", "open_refused"), this.#_(e);
    if (this.#E || this.#s.get(e) !== t || r === void 0 || this.#P || this.#S() === void 0 || this.#T()) return R.of(this.#i.session).unusedSlug = o, this.#_(e);
    let a = s, h = new V(async (f) => {
      let m = a;
      return a = void 0, m !== void 0 && !this.#L ? m : this.#V(o, f);
    }, () => this.#Y(), () => this.#he(o)), { leftAtMs: g = 0 } = R.of(this.#i.session);
    if (Date.now() < g + $t) h.mayShowEarlierText(k);
    this.#t.set(o, h), this.#e.reserved(o, r), this.#g = { slug: o, path: r, draftId: e, endedBefore: new Set(this.#f) }, R.peek(this.#i.session)?.send?.({ tool_use_id: X(e), slug: o }), this.#R = Date.now(), t.waits = void 0, this.#A(e, t);
  }
  #de() {
    return R.peek(this.#i.session)?.isUnwatched?.() === true;
  }
  #he(e) {
    if (Date.now() < this.#R + Xt || this.#j(e) || this.#de()) return;
    for (let [t, { sent: s }] of this.#s) if (s?.to.slug === e) return this.#R = Date.now(), R.peek(this.#i.session)?.repeat?.({ tool_use_id: X(t), slug: e });
  }
  #Re(e, t, s, o) {
    let r = this.#g;
    if (this.#P ||= r === "opening", typeof r !== "object" || r.isDone === true || r.takenBy !== void 0) return;
    let a = O(t).find((h) => h.as === k);
    if (o === void 0 && e === import_chunk_a7h1jnra.yN && (0, import_chunk_ma3kja9f.T)(t) && (0, import_chunk_6ft3g9m6.QXt)(t.slug) && a !== void 0 && (a.path === r.path || [...this.#s.values()].every(({ write: h, stage: g }) => h.filePath !== r.path || g === "written")) && this.#S() !== void 0) {
      if (r.takenBy = s, a.path !== r.path) this.#le(r, a.path);
    } else this.#D("published_elsewhere");
  }
  async #Ce(e, t) {
    let s = this.#g;
    if (typeof s !== "object" || s.isDone === true || s.takenBy !== e || s.hasNoText === true) return;
    let o = this.#s.get(s.draftId);
    if ((!(o !== void 0 && await this.#oe(o, { slug: s.slug, as: k })) || !t(o)) && s.takenBy === e && !s.isDone) this.#le(s, s.path);
  }
  #le(e, t) {
    this.#t.get(e.slug)?.end(), this.#e.notReserved(e.path), this.#e.reserved(e.slug, t);
    for (let [s, { write: o }] of this.#s) if (o.filePath === e.path) this.#s.delete(s);
    e.path = t, e.hasNoText = true;
  }
  #Ie(e, t) {
    let s = this.#g;
    if (s === void 0 && (0, import_chunk_6ft3g9m6.QXt)(Object(t).slug) && O(t).some((o) => o.as === k && this.#F.has(o.path))) this.#F.clear(), (0, import_chunk_cqa9hrgx.l)("artifact_pre_publish_new_page", "passed_over");
    if (typeof s !== "object" || s.isDone === true) return;
    if (s.slug === e) s.isDone = true, (0, import_chunk_cqa9hrgx.u)("artifact_pre_publish_new_page"), this.#t.get(e)?.end();
    else if (O(t).some((o) => o.path === s.path)) s.takenBy = void 0, this.#D("published_elsewhere");
  }
  #D(e) {
    let t = this.#g;
    if (typeof t !== "object" || t.isDone === true) return;
    if (t.isDone = true, this.#e.notReserved(t.path), this.#t.get(t.slug)?.end(), t.takenBy !== void 0 && t.wasGiven) return;
    (0, import_chunk_cqa9hrgx.l)("artifact_pre_publish_new_page", e);
    let s = R.of(this.#i.session);
    s.unusedSlug = t.isGone ? void 0 : t.slug, s.leftAtMs = Date.now(), this.#R = Date.now(), s.send?.({ tool_use_id: X(t.draftId), slug: t.slug, gone: true });
  }
  async #$(e, { slug: t, as: s }) {
    let o = this.#U(), r = e.write.filePath ?? "", a = this.#S(), h = (0, import_chunk_f9x2f6cx.VS)()?.directory, { mode: g } = (0, import_chunk_bz1f2qnq.Z)(o);
    return this.#I && e.isHeredoc === void 0 && a !== void 0 && (e.stage === "written" || (g === "acceptEdits" || g === "auto") && h?.isGitRepo === false && r.startsWith(`${h.path}/`) && this.#e.wasPublished(r)) && (g === "auto" ? this.#Ne(a, t, { as: s, path: r }) : G(a, { slug: t, files: [{ as: s, path: r }] }, o));
  }
  async #Ne(e, t, s) {
    let o = async () => await J(e, { slug: t, files: [s] }, this.#U()) && this.#d.size === 0;
    return await o() && await this.#B(t).mayGoBesideFilesInAuto() && o();
  }
  #T() {
    return import_chunk_gk0jv3qt.pq.peek(this.#i.session)?.host?.ruleItCannotApply((0, import_chunk_bz1f2qnq.Z)(this.#i)) !== void 0;
  }
  async #Le(e) {
    this.#e.savedAhead(e);
    for (let [t, s] of this.#s) {
      let { sent: o } = s;
      if (o?.to.slug === e && !o.wasJudged) if (await this.#$(s, o.to)) o.wasJudged = true;
      else this.#x(t);
    }
    await this.#t.get(e)?.dropsSent();
  }
  #U() {
    return { ...this.#i, sameTurnToolUses: [...this.#u] };
  }
  #fe() {
    this.#h?.offer();
    for (let [e, t] of this.#s) if (t.sent === void 0 && t.write.filePath !== void 0) this.#A(e, t);
  }
  #X(e) {
    for (let [t, s] of this.#s) if (s.sent?.wasJudged === false && this.#j(s.sent.to.slug) && !e.includes(s.write.filePath ?? "")) this.#x(t), this.#A(t, s);
  }
  #ue(e, t, s) {
    let { slug: o, as: r } = s.to;
    for (let [a, { write: h, sent: { to: g } = {} }] of this.#s) {
      if (a === e) break;
      if (h.filePath === t.write.filePath) {
        if (g?.slug !== o || g.as !== r) this.#x(a);
        if (this.#s.delete(a), typeof this.#g === "object" && this.#g.draftId === a) this.#g.draftId = e;
      }
    }
    t.sent = s, this.#B(o).start(r, t.write.text, t.stage !== "streaming");
  }
  #V(e, t) {
    return F(this.#i, H, { ...e !== void 0 && { slug: e }, for_tool: import_chunk_a7h1jnra.yN }, t, this.#I && ["acceptEdits", "default"].includes((0, import_chunk_bz1f2qnq.Z)(this.#i).mode) ? { [import_chunk_gk0jv3qt.rye]: true } : void 0);
  }
  #B(e) {
    let t = this.#t.get(e) ?? new V((s) => this.#V(e, s), () => this.#Y(), () => this.#he(e));
    return this.#t.set(e, t), t;
  }
  #Y() {
    let e = Ke(this.#i);
    if (e !== (this.#M ?? e)) this.#M = e, this.#J(), this.#o?.putBack(), this.#h?.judgeAgain();
    this.#M = e;
    for (let [t, s] of this.#s) if (s.sent?.wasJudged && s.sent.under !== e) this.#x(t), this.#A(t, s);
    else if (s.sent && s.isHeredoc && this.#W(s)) this.#x(t);
    return !this.#E && this.#S() !== void 0;
  }
  #x(e) {
    let t = this.#s.get(e);
    if (t?.sent !== void 0) {
      let { slug: s, as: o } = t.sent.to;
      this.#t.get(s)?.close(o, "drop"), t.sent = void 0;
    }
  }
  #_(e) {
    if (this.#x(e), this.#s.delete(e), typeof this.#g === "object" && this.#g.draftId === e) this.#D("write_dropped");
  }
  #ce(e) {
    for (let t of this.#s.keys()) if (X(t) === e) this.#_(t);
  }
  #J() {
    this.#L = true;
    for (let e of this.#t.values()) e.judgeAgainBeforeNewText();
  }
  #p(e = "cut_short") {
    this.#E = true, this.#o?.end(), this.#D(e), this.#s.clear(), this.#h?.clear(), this.#O.clear(), this.#r.clear(), this.#a.clear();
    for (let t of this.#t.values()) t.end();
  }
  #j(e) {
    let t = this.#g, s = typeof t === "object" && t.slug === e ? t.endedBefore : void 0;
    return [...this.#d].some((o) => !s?.has(o)) || this.#e.mayHoldFiles(e);
  }
  #ge(e) {
    let { tools: t, toolAliases: s } = this.#i.options, o = (0, import_chunk_b83x8d52.Dh)(t, e, s), r = o?.mcpInfo ?? (0, import_chunk_px0hhsq7.mr)(e);
    if (r) return r.serverName === import_chunk_qdcbcsg7.ri ? { kind: "artifacts", served: r.toolName ?? "" } : { kind: "other" };
    switch (o?.name) {
      case import_chunk_rb36kwbn.Dt:
        return { kind: "write" };
      case import_chunk_rb36kwbn.lt:
        return { kind: "edit" };
      case import_chunk_pmryp5f3.Fn:
        return { kind: "skill" };
      case import_chunk_hn3cwwzt.ke:
        return { kind: "shell" };
      default:
        return { kind: jt.has(o?.name ?? "") ? "read" : o === void 0 || Gt.has(o.name) || (0, import_chunk_h4t4qfaq.li)(o.name) ? "unseen" : "other" };
    }
  }
  #S(e = H) {
    let t = this.#i, s = L(t, import_chunk_a7h1jnra.yN), o = L(t, e);
    return s !== void 0 && o?.mcpInfo?.hiddenFromModel === true && (0, import_chunk_bzyb60p0.jLt)(o, {}, t) === void 0 && !Ge(o, t) && !Xe() && (0, import_chunk_865at33z.b)("tengu_walnut_tiller", true) && (0, import_chunk_2nv4wrez.ba)("allow_cobalt_plinth") === null && !(0, import_chunk_2zeyvjwb.uo)("hipaa") && (0, import_chunk_ye486ddj.EW)() === void 0 && (0, import_chunk_bz1f2qnq.Z)(t).mode !== "plan" && (0, import_chunk_4vsz8a99.tn)(t.options.tools, s.name) !== void 0 && (0, import_chunk_bzyb60p0.jLt)(s, {}, t) === void 0 && !Y(s, t) ? s : void 0;
  }
}
function Ge(e, t) {
  let s = e?.inputJSONSchema?.["x-refused-in"];
  if (!Array.isArray(s)) return false;
  let { mode: o } = (0, import_chunk_bz1f2qnq.Z)(t);
  return s.includes("auto") && (o === "auto" || o === "bypassPermissions") || s.includes("linked") && t.getMcp().clients.some(({ name: r }) => r === import_chunk_qdcbcsg7.$n);
}
function Ke(e) {
  let { mode: t, alwaysAllowRules: s, alwaysAskRules: o, alwaysDenyRules: r } = (0, import_chunk_bz1f2qnq.Z)(e);
  return (0, import_chunk_w578pjby._)([t, s, o, r]);
}
function X(e) {
  return (0, import_chunk_7cfjrnwy.nt)(e, " ");
}
function $e() {
  let e = (0, import_chunk_865at33z.b)(Ut, false);
  return e === true ? [] : Array.isArray(e) ? e : void 0;
}
function Xe() {
  return (0, import_chunk_865at33z.b)(Ft, true) === false;
}
function L(e, t) {
  return e.getMcp().tools.find(({ mcpInfo: s }) => s?.serverName === import_chunk_qdcbcsg7.ri && s.toolName === t);
}
