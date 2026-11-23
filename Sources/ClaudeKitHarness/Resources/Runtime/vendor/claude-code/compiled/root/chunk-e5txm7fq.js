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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
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
var chunk_e5txm7fq_exports = {};
__export(chunk_e5txm7fq_exports, {
  PowerShellTool: () => Xi
});
module.exports = __toCommonJS(chunk_e5txm7fq_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6sjp0rab = require("/$bunfs/root/chunk-6sjp0rab.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_y6mqk49g = require("/$bunfs/root/chunk-y6mqk49g.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_kbsax5x5 = require("/$bunfs/root/chunk-kbsax5x5.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
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
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
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
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_w0pnqmj8 = require("/$bunfs/root/chunk-w0pnqmj8.js");
var import_chunk_9y45rehj = require("/$bunfs/root/chunk-9y45rehj.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_fa4dxeec = require("/$bunfs/root/chunk-fa4dxeec.js");
var import_chunk_6xae35jp = require("/$bunfs/root/chunk-6xae35jp.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_nw2twe6x = require("/$bunfs/root/chunk-nw2twe6x.js");
var import_chunk_b9qnxh4s = require("/$bunfs/root/chunk-b9qnxh4s.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_tvbk4t18 = require("/$bunfs/root/chunk-tvbk4t18.js");
var import_chunk_s0zsg6za = require("/$bunfs/root/chunk-s0zsg6za.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_a6xqvbh2 = require("/$bunfs/root/chunk-a6xqvbh2.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_vc431dg0 = require("/$bunfs/root/chunk-vc431dg0.js");
var import_chunk_ta6q9jek = require("/$bunfs/root/chunk-ta6q9jek.js");
var import_chunk_yqt5s0xz = require("/$bunfs/root/chunk-yqt5s0xz.js");
var import_chunk_5qhr9bm2 = require("/$bunfs/root/chunk-5qhr9bm2.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_p2s0km69 = require("/$bunfs/root/chunk-p2s0km69.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_tvq790h1 = require("/$bunfs/root/chunk-tvq790h1.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_f9mxtmjz = require("/$bunfs/root/chunk-f9mxtmjz.js");
var import_chunk_sps8tde9 = require("/$bunfs/root/chunk-sps8tde9.js");
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_m20gh621 = require("/$bunfs/root/chunk-m20gh621.js");
var import_chunk_kvvabk01 = require("/$bunfs/root/chunk-kvvabk01.js");
var import_chunk_kmbc34js = require("/$bunfs/root/chunk-kmbc34js.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_5m00y1wc = require("/$bunfs/root/chunk-5m00y1wc.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_1ag56sne = require("/$bunfs/root/chunk-1ag56sne.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_jtppe9b0 = require("/$bunfs/root/chunk-jtppe9b0.js");
var import_chunk_yn71faep = require("/$bunfs/root/chunk-yn71faep.js");
var import_chunk_fe5esh7d = require("/$bunfs/root/chunk-fe5esh7d.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_gtxzjvjq = require("/$bunfs/root/chunk-gtxzjvjq.js");
var import_chunk_kma6xjgr = require("/$bunfs/root/chunk-kma6xjgr.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_xzph4c6z = require("/$bunfs/root/chunk-xzph4c6z.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_fc3gfgch = require("/$bunfs/root/chunk-fc3gfgch.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_z9f6hbhp = require("/$bunfs/root/chunk-z9f6hbhp.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_ygx90amt = require("/$bunfs/root/chunk-ygx90amt.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_7fjbagnr = require("/$bunfs/root/chunk-7fjbagnr.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_pb0vn6an = require("/$bunfs/root/chunk-pb0vn6an.js");
var import_chunk_4ssv8fte = require("/$bunfs/root/chunk-4ssv8fte.js");
var import_chunk_ejeefcyk = require("/$bunfs/root/chunk-ejeefcyk.js");
var import_chunk_4b5275ey = require("/$bunfs/root/chunk-4b5275ey.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_5w3q7h0v = require("/$bunfs/root/chunk-5w3q7h0v.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_pyawkp3j = require("/$bunfs/root/chunk-pyawkp3j.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_chunk_3zfyrdna = require("/$bunfs/root/chunk-3zfyrdna.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_pzj67pdt = require("/$bunfs/root/chunk-pzj67pdt.js");
var import_chunk_6a9gdcsm = require("/$bunfs/root/chunk-6a9gdcsm.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_84n38n3t = require("/$bunfs/root/chunk-84n38n3t.js");
var import_chunk_a9pcmp5n = require("/$bunfs/root/chunk-a9pcmp5n.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
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
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_b3gt63am = require("/$bunfs/root/chunk-b3gt63am.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
var import_chunk_81q3wevd = require("/$bunfs/root/chunk-81q3wevd.js");
var import_chunk_xkpbmcsq = require("/$bunfs/root/chunk-xkpbmcsq.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_0c92mmpr = require("/$bunfs/root/chunk-0c92mmpr.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_2vn4k5m6 = require("/$bunfs/root/chunk-2vn4k5m6.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_qwcebyxc = require("/$bunfs/root/chunk-qwcebyxc.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_q7cfnzfy = require("/$bunfs/root/chunk-q7cfnzfy.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_q5veqmrm = require("/$bunfs/root/chunk-q5veqmrm.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_a152y2zc = require("/$bunfs/root/chunk-a152y2zc.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_z12zbtvr = require("/$bunfs/root/chunk-z12zbtvr.js");
var import_chunk_d70fgf5t = require("/$bunfs/root/chunk-d70fgf5t.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_tnmn1726 = require("/$bunfs/root/chunk-tnmn1726.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_txqh3v33 = require("/$bunfs/root/chunk-txqh3v33.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_89bjmq9y = require("/$bunfs/root/chunk-89bjmq9y.js");
var import_chunk_jzfcqxfe = require("/$bunfs/root/chunk-jzfcqxfe.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_97tvwnfb = require("/$bunfs/root/chunk-97tvwnfb.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_vn6r8r95 = require("/$bunfs/root/chunk-vn6r8r95.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_3a2r0s2z = require("/$bunfs/root/chunk-3a2r0s2z.js");
var import_chunk_j2ybpxmz = require("/$bunfs/root/chunk-j2ybpxmz.js");
var import_chunk_g6k95sax = require("/$bunfs/root/chunk-g6k95sax.js");
var import_chunk_qv6h6wr9 = require("/$bunfs/root/chunk-qv6h6wr9.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_cq1312e8 = require("/$bunfs/root/chunk-cq1312e8.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_9r4r85pg = require("/$bunfs/root/chunk-9r4r85pg.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_jnrh77bs = require("/$bunfs/root/chunk-jnrh77bs.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_6dfy8crz = require("/$bunfs/root/chunk-6dfy8crz.js");
var import_chunk_1ea72zr6 = require("/$bunfs/root/chunk-1ea72zr6.js");
var import_chunk_j59m93ez = require("/$bunfs/root/chunk-j59m93ez.js");
var import_chunk_507k3c1m = require("/$bunfs/root/chunk-507k3c1m.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_179jgyn9 = require("/$bunfs/root/chunk-179jgyn9.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_dkc86g0t = require("/$bunfs/root/chunk-dkc86g0t.js");
var import_chunk_6s9tac84 = require("/$bunfs/root/chunk-6s9tac84.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_q2a93xh8 = require("/$bunfs/root/chunk-q2a93xh8.js");
var import_chunk_2wqvb3q7 = require("/$bunfs/root/chunk-2wqvb3q7.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_yrh4vxq4 = require("/$bunfs/root/chunk-yrh4vxq4.js");
var import_chunk_5ke1b82m = require("/$bunfs/root/chunk-5ke1b82m.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_wxn0h5vf = require("/$bunfs/root/chunk-wxn0h5vf.js");
var import_chunk_02wf5c4s = require("/$bunfs/root/chunk-02wf5c4s.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_ak45b7eq = require("/$bunfs/root/chunk-ak45b7eq.js");
var import_chunk_00egnvdb = require("/$bunfs/root/chunk-00egnvdb.js");
var import_chunk_hvkyrv0z = require("/$bunfs/root/chunk-hvkyrv0z.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_qhpw13wh = require("/$bunfs/root/chunk-qhpw13wh.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_d0bewyh8 = require("/$bunfs/root/chunk-d0bewyh8.js");
var import_chunk_wnt799dt = require("/$bunfs/root/chunk-wnt799dt.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_sdks5h78 = require("/$bunfs/root/chunk-sdks5h78.js");
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
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_02cqsykt = require("/$bunfs/root/chunk-02cqsykt.js");
var import_chunk_1dkksxs0 = require("/$bunfs/root/chunk-1dkksxs0.js");
var import_chunk_1p0ddgd7 = require("/$bunfs/root/chunk-1p0ddgd7.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_jm0134kz = require("/$bunfs/root/chunk-jm0134kz.js");
var import_chunk_6x49srhn = require("/$bunfs/root/chunk-6x49srhn.js");
var import_chunk_snpsm13w = require("/$bunfs/root/chunk-snpsm13w.js");
var import_chunk_pjgajh0r = require("/$bunfs/root/chunk-pjgajh0r.js");
var import_chunk_7ds2xzy3 = require("/$bunfs/root/chunk-7ds2xzy3.js");
var import_chunk_6b5tg8j3 = require("/$bunfs/root/chunk-6b5tg8j3.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_wvxk15ee = require("/$bunfs/root/chunk-wvxk15ee.js");
var import_chunk_31sz6df3 = require("/$bunfs/root/chunk-31sz6df3.js");
var import_chunk_07kqypdk = require("/$bunfs/root/chunk-07kqypdk.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_qnq7dhb5 = require("/$bunfs/root/chunk-qnq7dhb5.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_1n9wdcmg = require("/$bunfs/root/chunk-1n9wdcmg.js");
var import_chunk_f6abynt8 = require("/$bunfs/root/chunk-f6abynt8.js");
var import_chunk_0ty8qx28 = require("/$bunfs/root/chunk-0ty8qx28.js");
var import_chunk_rnad4hj1 = require("/$bunfs/root/chunk-rnad4hj1.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_bs4v8td1 = require("/$bunfs/root/chunk-bs4v8td1.js");
var import_chunk_q0pdqy04 = require("/$bunfs/root/chunk-q0pdqy04.js");
var import_chunk_hmc67k1s = require("/$bunfs/root/chunk-hmc67k1s.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_tmh9ctw1 = require("/$bunfs/root/chunk-tmh9ctw1.js");
var import_chunk_21cxvf80 = require("/$bunfs/root/chunk-21cxvf80.js");
var import_chunk_w1zyy3zs = require("/$bunfs/root/chunk-w1zyy3zs.js");
var import_chunk_wpyz5pav = require("/$bunfs/root/chunk-wpyz5pav.js");
var import_chunk_5gh3v8c1 = require("/$bunfs/root/chunk-5gh3v8c1.js");
var import_chunk_pcsags68 = require("/$bunfs/root/chunk-pcsags68.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_hj4mak61 = require("/$bunfs/root/chunk-hj4mak61.js");
var import_chunk_44g93ygc = require("/$bunfs/root/chunk-44g93ygc.js");
var import_chunk_gp23aqt9 = require("/$bunfs/root/chunk-gp23aqt9.js");
var import_chunk_ghhxe1kj = require("/$bunfs/root/chunk-ghhxe1kj.js");
var import_chunk_c2m5gm43 = require("/$bunfs/root/chunk-c2m5gm43.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_x9vzz8b9 = require("/$bunfs/root/chunk-x9vzz8b9.js");
var import_chunk_jmm1stqj = require("/$bunfs/root/chunk-jmm1stqj.js");
var import_chunk_hgbq13xy = require("/$bunfs/root/chunk-hgbq13xy.js");
var import_chunk_yq00hd9s = require("/$bunfs/root/chunk-yq00hd9s.js");
var import_chunk_7xxwg4th = require("/$bunfs/root/chunk-7xxwg4th.js");
var import_chunk_x9aavfmb = require("/$bunfs/root/chunk-x9aavfmb.js");
var import_chunk_gqe1nb2a = require("/$bunfs/root/chunk-gqe1nb2a.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_vbjta162 = require("/$bunfs/root/chunk-vbjta162.js");
var import_chunk_kf08yh2z = require("/$bunfs/root/chunk-kf08yh2z.js");
var import_chunk_x0nfhv1g = require("/$bunfs/root/chunk-x0nfhv1g.js");
var import_chunk_ysm157pk = require("/$bunfs/root/chunk-ysm157pk.js");
var import_chunk_daz70crr = require("/$bunfs/root/chunk-daz70crr.js");
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
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
var import_chunk_75f58nqg = require("/$bunfs/root/chunk-75f58nqg.js");
var import_chunk_r216zqgx = require("/$bunfs/root/chunk-r216zqgx.js");
var import_chunk_01eypw0a = require("/$bunfs/root/chunk-01eypw0a.js");
var import_chunk_etd6y4ew = require("/$bunfs/root/chunk-etd6y4ew.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
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
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var import_chunk_0bfd61k9 = require("/$bunfs/root/chunk-0bfd61k9.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
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
var import_os = require("os");
var import_path2 = require("path");
var import_os2 = require("os");
var import_path3 = require("path");
(0, import_chunk_adx6804h.B)();
function Ut(e) {
  if (!e.startsWith("../")) return e;
  let o = ke((0, import_path2.basename)((0, import_chunk_18rsj2ts.pe)()));
  if (!o) return e;
  let r = "../" + o + "/", u = e;
  while (u.startsWith(r)) u = u.slice(r.length);
  if (u === "../" + o) return ".";
  return u;
}
function Dn(e) {
  return rt(e, import_chunk_bzyb60p0.TW);
}
function at(e) {
  let o = /* @__PURE__ */ new Set([rt(e, (r) => r), Dn(e), rt(e, import_chunk_bzyb60p0.Kue), rt(e, import_chunk_bzyb60p0.xTe)]);
  return Array.from(o);
}
function rt(e, o) {
  let r = e;
  if (r = (0, import_chunk_bzyb60p0.Tie)(r), r.length > 0 && (import_chunk_bzyb60p0.que.has(r[0]) || r[0] === "/")) {
    let m = r.indexOf(":", 1);
    if (m > 0) r = (0, import_chunk_bzyb60p0.Tie)(r.slice(m + 1));
  }
  if (r = o(r), r = (0, import_chunk_bzyb60p0.cR)(r), r = r.replace(/^(?:[A-Za-z0-9_.]+\\){0,3}FileSystem::/i, ""), r = r.replace(/^[A-Za-z]:(?![/\\])/, "./"), r = r.replaceAll("\\", "/"), r === "~" || r.startsWith("~/")) r = ((0, import_os.homedir)() + r.slice(1)).replaceAll("\\", "/");
  let u = "";
  if (/^[A-Za-z]:\//.test(r)) u = r.slice(0, 2), r = r.slice(2);
  if (r = r.split("/").map((m) => m === "" ? m : (0, import_chunk_2fxy1zey.x9)(m) || ".").join("/"), r = import_path2.posix.normalize(r), u) r = u + r;
  if (r.startsWith("./")) r = r.slice(2);
  return r;
}
function ke(e) {
  return e.toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s").normalize("NFC").replaceAll("\u03C2", "\u03C3");
}
var Ln = ["head", "objects", "refs", "hooks"];
function zt(e) {
  let o = (0, import_chunk_w578pjby.le)(), r = (0, import_chunk_18rsj2ts.pe)(), u = (0, import_path2.resolve)(r, e), m = (0, import_chunk_w578pjby.$K)(o, u) ?? u, g = (0, import_chunk_w578pjby.no)(o, r).resolvedPath, w = g.endsWith(import_path2.sep) ? g : g + import_path2.sep, b = ke(m), h = ke(g), _ = ke(w);
  if (b === h) return ".";
  if (!b.startsWith(_)) return null;
  return b.slice(_.length).replaceAll("\\", "/");
}
function Wt(e) {
  if (e === "head" || e === ".git") return true;
  if (e.startsWith(".git/") || /^git~\d+($|\/)/.test(e)) return true;
  for (let o of Ln) {
    if (o === "head") continue;
    if (e === o || e.startsWith(o + "/")) return true;
  }
  return false;
}
function Xe(e) {
  for (let o of at(e)) {
    let r = Ut(ke(o));
    if (Wt(r)) return true;
    let u = zt(o);
    if (u !== null && Wt(u)) return true;
  }
  return false;
}
function it(e) {
  for (let o of at(e)) {
    let r = Ut(ke(o));
    if ($t(r)) return true;
    let u = zt(o);
    if (u !== null && $t(u)) return true;
  }
  return false;
}
function $t(e) {
  if (e === ".git" || e.startsWith(".git/")) return true;
  return /^git~\d+($|\/)/.test(e);
}
function ct(e) {
  if (!e.includes(",")) return [e];
  return [e, ...e.split(",")];
}
var Mn = ["path", "literalpath"], Nn = /* @__PURE__ */ new Set(["pspath", "lp"]), Fn = /* @__PURE__ */ new Set(["cf", "wi", "vb", "db", "usetx"]), Wn = /* @__PURE__ */ new Set(["ea", "ev", "wa", "wv", "infa", "iv", "proga", "ov", "ob", "pv"]), $n = ["container", "force", "passthru", "recurse", "whatif", "confirm", "usetransaction", "verbose", "debug"], Vn = ["filter", "include", "exclude", "credential", "fromsession", "tosession", "erroraction", "errorvariable", "warningaction", "warningvariable", "informationaction", "informationvariable", "progressaction", "outvariable", "outbuffer", "pipelinevariable"];
function Vt(e) {
  return /[*?[\]$]/.test(e);
}
function Bn(e) {
  let o = (0, import_chunk_w578pjby.le)(), r = (0, import_chunk_18rsj2ts.pe)(), u = (0, import_path2.resolve)(r, e), m = (0, import_chunk_z6pfqf6e.$r)(u) ? u : (0, import_chunk_w578pjby.$K)(o, u) ?? u, g = (0, import_chunk_w578pjby.no)(o, r).resolvedPath, w = ke(m);
  if (ke(g) === w) return true;
  let b = (0, import_chunk_w578pjby.no)(o, (0, import_chunk_f9x2f6cx.Te)()).resolvedPath, h = (0, import_path2.relative)(b, g);
  if (h === ".." || h.startsWith(".." + import_path2.sep) || (0, import_path2.isAbsolute)(h)) return false;
  let _ = ke(b), T = g;
  for (; ; ) {
    if (ke(T) === w) return true;
    if (ke(T) === _ || T === (0, import_path2.dirname)(T)) return false;
    T = (0, import_path2.dirname)(T);
  }
}
function Ht(e, o = false) {
  let r = [], u = [], m, g = false, w = false, b = [];
  for (let R = 0; R < e.length; R++) {
    let L = (0, import_chunk_bzyb60p0.Tie)(e[R]);
    if (L.length === 0 || !import_chunk_bzyb60p0.que.has(L[0])) {
      u.push(e[R]);
      continue;
    }
    let I = L.indexOf(":", 1), O = (I > 0 ? L.slice(1, I) : L.slice(1)).toLowerCase(), F = I > 0 ? L.slice(I + 1) : void 0;
    if (O === "") return true;
    let U = "destination".startsWith(O), z = Nn.has(O) || "literalpath".startsWith(O), N = z || Mn.some((q) => q.startsWith(O)), G = Fn.has(O) || $n.some((q) => q.startsWith(O)), W = Wn.has(O) || Vn.some((q) => q.startsWith(O));
    if (Number(U) + Number(N) + Number(G) + Number(W) !== 1) return true;
    if (G) {
      if ("container".startsWith(O) && F !== void 0) {
        let q = (0, import_chunk_bzyb60p0.Tie)(F);
        if (![import_chunk_bzyb60p0.TW, import_chunk_bzyb60p0.Kue, import_chunk_bzyb60p0.xTe].every((re) => /^\$true$/i.test(re(q).trim()))) w = true;
      }
      continue;
    }
    let V = F ?? e[++R];
    if (V === void 0) continue;
    if (U) m = V;
    else if (N) if (g = true, z) b.push(...V.split(","));
    else r.push(...V.split(","));
  }
  let h = (g ? 0 : 1) + (m === void 0 ? 1 : 0);
  if (u.length > h) return true;
  let _, T = 0;
  if (!g && T < u.length) r.push(...u[T].split(",")), T++;
  if (m === void 0 && T < u.length) _ = u[T];
  if (r.length === 0 && b.length === 0 && !o) return false;
  let k = m ?? _;
  if (k !== void 0) {
    let R = at(k).map((L) => L === "" ? "." : L);
    if (R.some(Vt)) return true;
    if (!R.some(Bn)) return false;
  }
  if (w || o) return true;
  for (let [R, L] of [[false, r], [true, b]]) for (let I of L) for (let O of at(I)) {
    let F = O === "" ? "." : O;
    if (R ? /\$/.test(F) : Vt(F)) return true;
    let U = import_path2.posix.basename(F);
    if (U === "." || U === "..") return true;
    if (Xe(U)) return true;
  }
  return false;
}
var jn = /* @__PURE__ */ new Set(["set-content", "add-content", "remove-item", "clear-content"]);
function gt(e) {
  let o = (0, import_chunk_x0nfhv1g.hE)(e);
  return jn.has(o);
}
var Un = /* @__PURE__ */ new Set(["symboliclink", "junction", "hardlink"]);
function zn(e) {
  return e.length >= 3 && "-itemtype".startsWith(e) || e.length >= 3 && "-type".startsWith(e);
}
function wt(e) {
  if ((0, import_chunk_x0nfhv1g.hE)(e.name) !== "new-item") return false;
  for (let r = 0; r < e.args.length; r++) {
    let u = e.args[r] ?? "";
    if (u.length === 0) continue;
    let g = (import_chunk_bzyb60p0.que.has(u[0]) || u[0] === "/" ? "-" + u.slice(1) : u).toLowerCase(), w = g.indexOf(":", 1), b = w > 0 ? g.slice(0, w) : g, h = (0, import_chunk_bzyb60p0.cR)(b.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
    if (!zn(h)) continue;
    let _ = w > 0 ? g.slice(w + 1) : e.args[r + 1]?.toLowerCase() ?? "", T = (0, import_chunk_bzyb60p0.TW)((0, import_chunk_bzyb60p0.Tie)((0, import_chunk_bzyb60p0.cR)(_.replace(/`[\r\n]+\s*/g, "")))).toLowerCase();
    if (/[?*[\]($]/.test(T)) return true;
    for (let k of Un) if (T.length > 0 && k.startsWith(T)) return true;
  }
  return false;
}
function bt(e, o, r) {
  if (r.mode === "bypassPermissions" || r.mode === "dontAsk") return { behavior: "passthrough", message: "Mode is handled in main permission flow" };
  if (r.mode !== "acceptEdits") return { behavior: "passthrough", message: "No mode-specific validation required" };
  if (!o.valid) return { behavior: "passthrough", message: "Cannot validate mode for unparsed command" };
  let u = (0, import_chunk_bzyb60p0.PTe)(o);
  if (u.hasSubExpressions || u.hasScriptBlocks || u.hasMemberInvocations || u.hasSplatting || u.hasAssignments || u.hasStopParsing || u.hasExpandableStrings) return { behavior: "passthrough", message: "Command contains subexpressions, script blocks, or member invocations that require approval" };
  if ((0, import_chunk_bzyb60p0.w6)(o).some((b) => (0, import_chunk_x0nfhv1g.C9r)(b) && b.typedArgs?.some(import_chunk_x0nfhv1g.grr))) return { behavior: "passthrough", message: "This command needs approval: an argument starts with an en dash, em dash or horizontal bar, and a program may not read that as a normal dash." };
  let m = (0, import_chunk_bzyb60p0.xJr)(o);
  if (m.length === 0) return { behavior: "passthrough", message: "No commands found to validate for acceptEdits mode" };
  let g = m.reduce((b, h) => b + h.commands.length, 0);
  if (m.some((b) => b.commands.some((h) => h.elementType === "CommandAst" && wt(h)))) return { behavior: "passthrough", message: "Command creates a filesystem link (New-Item -ItemType SymbolicLink/Junction/HardLink) \u2014 cannot auto-allow because later path validation cannot follow just-created links" };
  if (g > 1) {
    let b = false, h = false;
    for (let _ of m) for (let T of _.commands) {
      if (T.elementType !== "CommandAst") continue;
      if ((0, import_chunk_x0nfhv1g.v9r)(T.name)) b = true;
      if (gt(T.name)) h = true;
    }
    if (b && h) return { behavior: "passthrough", message: "Compound command contains a directory-changing command (Set-Location/Push-Location/Pop-Location) with a write operation \u2014 cannot auto-allow because path validation uses stale cwd" };
  }
  for (let b of m) {
    for (let h of b.commands) {
      if (h.elementType !== "CommandAst") return { behavior: "passthrough", message: `Pipeline contains expression source (${h.elementType}) that cannot be statically validated` };
      if (h.nameType === "application") return { behavior: "passthrough", message: `Command '${h.name}' resolved from a path-like name and requires approval` };
      if (h.elementTypes) for (let _ = 1; _ < h.elementTypes.length; _++) {
        let T = h.elementTypes[_];
        if (T !== "StringConstant" && T !== "Parameter") return { behavior: "passthrough", message: `Command argument has unvalidatable type (${T}) \u2014 variable paths cannot be statically resolved` };
        if (T === "Parameter") {
          let k = h.args[_ - 1] ?? "", R = k.indexOf(":");
          if (R > 0 && /[$(@{[]/.test(k.slice(R + 1))) return { behavior: "passthrough", message: "Colon-bound parameter contains an expression that cannot be statically validated" };
        }
      }
      if ((0, import_chunk_x0nfhv1g.QCn)(h.args, h.elementTypes) || (0, import_chunk_x0nfhv1g.JCn)(h.args, h.elementTypes)) return { behavior: "passthrough", message: `Variable-writing or ActionPreference argument in '${h.name}' requires approval` };
      if ((0, import_chunk_x0nfhv1g.XCn)(h.name) && h.args.length === 0) continue;
      if ((0, import_chunk_x0nfhv1g.pei)(h, e.command)) continue;
      if (!gt(h.name)) return { behavior: "passthrough", message: `No mode-specific handling for '${h.name}' in acceptEdits mode` };
      if ((0, import_chunk_x0nfhv1g.KJ)(h.name, h)) return { behavior: "passthrough", message: `Arguments in '${h.name}' cannot be statically validated in acceptEdits mode` };
    }
    if (b.nestedCommands) for (let h of b.nestedCommands) {
      if (h.elementType !== "CommandAst") return { behavior: "passthrough", message: `Nested expression element (${h.elementType}) cannot be statically validated` };
      if (h.nameType === "application") return { behavior: "passthrough", message: `Nested command '${h.name}' resolved from a path-like name and requires approval` };
      if ((0, import_chunk_x0nfhv1g.QCn)(h.args, h.elementTypes) || (0, import_chunk_x0nfhv1g.JCn)(h.args, h.elementTypes)) return { behavior: "passthrough", message: `Variable-writing or ActionPreference argument in nested '${h.name}' requires approval` };
      if ((0, import_chunk_x0nfhv1g.XCn)(h.name) && h.args.length === 0) continue;
      if ((0, import_chunk_x0nfhv1g.pei)(h, e.command)) continue;
      if (!gt(h.name)) return { behavior: "passthrough", message: `No mode-specific handling for '${h.name}' in acceptEdits mode` };
      if ((0, import_chunk_x0nfhv1g.KJ)(h.name, h)) return { behavior: "passthrough", message: `Arguments in nested '${h.name}' cannot be statically validated in acceptEdits mode` };
    }
  }
  return { behavior: "allow", updatedInput: e, decisionReason: { type: "mode", mode: "acceptEdits" } };
}
var Hn = "tengu_curious_lake";
function Kt() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY) return false;
  let e = (0, import_chunk_865at33z.gn)(Hn, true);
  return !(e.value === false && e.source === "payload");
}
var qn = /^\/[ckr](?:$|\s)/i, Gn = /^(rd|rmdir|del|erase)(?=$|[.:\\/+[\]",;=])/i, Kn = /^(?:(?:cd|chdir|pushd|popd)(?=$|[.:\\/+[\]",;=])|[a-z]:$)/i, Yn = /[^\S\uFEFF]|\u0085/;
function Yt(e) {
  let o = e.length;
  while (o > 0 && (e[o - 1] === "." || e[o - 1] === " ")) o--;
  let r = e.slice(Math.max(e.lastIndexOf("\\", o), e.lastIndexOf("/", o)) + 1, o);
  return /^cmd(?:\.exe)?$/i.test(r);
}
function qt(e) {
  if (e === void 0 || e === "StringConstant") return "literal";
  return e === "ExpandableString" ? "expands" : "unknown";
}
function Qn(e) {
  let o = false;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    if (u === '"' && e[r - 1] !== "\\") o = !o;
    else if (!o && Yn.test(u)) return true;
  }
  return false;
}
function ut(e, o) {
  if (e === "unknown" || o === "unknown") return "unknown";
  return e === "expands" || o === "expands" ? "expands" : "literal";
}
function Qt(e) {
  let o = [], r = "", u = "literal", m = false, g = 0, w = () => {
    if (r !== "") o.push({ text: r, kind: u, separator: false });
    r = "", u = "literal";
  };
  for (let b = 0; b < e.length; b++) {
    let { ch: h, kind: _ } = e[b];
    if (m) {
      r += h, u = ut(u, _), m = h !== '"';
      continue;
    }
    if (h === "^" && b + 1 < e.length) {
      b++, r += e[b].ch, u = ut(u, ut(_, e[b].kind));
      continue;
    }
    if ("&|<>".includes(h) || h === "(" && r === "" || h === ")" && g > 0) {
      w(), g += h === "(" ? 1 : h === ")" ? -1 : 0, o.push({ text: h, kind: _, separator: true });
      continue;
    }
    if (/[ \t\r\n\v\f,;=]/.test(h)) {
      w();
      continue;
    }
    if (h === '"') m = true;
    r += h, u = ut(u, _);
  }
  return w(), o;
}
function Xn(e) {
  let o = null;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    if (u === "`" && o !== "'") r++;
    else if (o !== null) {
      if (u === o) o = null;
    } else if (u === '"' || u === "'") o = u;
    else if (e.startsWith("--%", r) && (r === 0 || /\s/.test(e[r - 1])) && (r + 3 === e.length || /\s/.test(e[r + 3]))) return r;
  }
  return -1;
}
function Zn(e) {
  if (qt(e.elementTypes?.[0]) !== "literal" || !Yt(e.name)) return null;
  let o = Xn(e.text), r = o === -1 ? void 0 : e.text.slice(o + 3).trimStart(), u = (T) => o !== -1 && /^--%(?:$|\s)/.test(T), m = e.args.some(u), g = [], w = false;
  for (let T = 0; T < e.args.length; T++) {
    let k = e.args[T], R = qt(e.elementTypes?.[T + 1]);
    if (!w && r !== void 0 && !m && T === e.args.length - 1) w = true, k = r;
    if (!w && u(k)) {
      if (w = true, k = k.slice(3).trimStart(), k === "") continue;
    }
    if (w) R = "literal";
    if (k !== "" || w) g.push({ text: k, kind: R, verbatim: w });
  }
  let b = g.findIndex((T) => T.kind !== "unknown" && qn.test(T.text));
  if (b === -1) return null;
  let h = [];
  g.forEach((T, k) => {
    if (k < b) return;
    let R = k === b ? T.text.slice(2).trimStart() : T.text;
    if (k === b && R === "") return;
    if (h.length > 0) h.push({ ch: " ", kind: "literal" });
    let L = !T.verbatim && k > b && Qn(R);
    for (let I of L ? `"${R}"` : R) h.push({ ch: I, kind: T.kind });
  });
  let _ = h.findIndex((T) => !/\s/.test(T.ch));
  if (_ !== -1 && h[_].ch === '"') {
    let T = -1;
    for (let k = h.length - 1; k > _; k--) if (h[k].ch === '"') {
      T = k;
      break;
    }
    h = h.filter((k, R) => R !== _ && R !== T);
  }
  return h;
}
function Xt(e) {
  let o = Zn(e);
  if (o === null) return [];
  let r = /* @__PURE__ */ new Map(), u = (b) => {
    let h = r.get(b);
    if (h !== void 0) return h;
    let _ = /^\$[\p{L}\p{Nd}_:]+$/u.test(b), T = { copies: 0, escaped: 0 };
    for (let k = e.text.indexOf(b); k !== -1; k = e.text.indexOf(b, k + 1)) {
      if (_ && /[\p{L}\p{Nd}_:]/u.test(e.text[k + b.length] ?? "")) continue;
      let R = 0;
      while (k - R > 0 && e.text[k - R - 1] === "`") R++;
      T.copies++, T.escaped += R % 2;
    }
    return r.set(b, T), T;
  }, m = (b) => {
    let { copies: h, escaped: _ } = u(b);
    return h > 0 && _ === h;
  }, g = (b) => u(b).escaped > 0, w = [];
  return St(Qt(o), { cdSeen: false, cdTarget: null }, false, { operands: w, everyCopyEscaped: m, someCopyEscaped: g }), w;
}
var Gt = 8;
function St(e, o, r, u, m = 0) {
  let g = true, w = "none", b = false;
  for (let h = 0; h < e.length; h++) {
    let _ = e[h];
    if (_.separator) {
      if (_.text === "<" || _.text === ">") h = kt(e, h);
      else if (g = true, w = "none", b = _.text === "|", b) o.cdTarget = null;
      continue;
    }
    if (/^\d$/.test(_.text) && ["<", ">"].includes(e[h + 1]?.text ?? "")) continue;
    if (w === "condition") {
      let I = _.text.toLowerCase();
      if (I === "/i" || I === "not") continue;
      w = I === "exist" || I === "defined" ? "operand" : "none";
      continue;
    }
    if (w === "operand") {
      w = "none", g = true;
      continue;
    }
    if (!g) continue;
    let T = _.text.replace(/^@+/, "");
    if (!r && (_.kind === "unknown" || Kn.test(T))) o.cdSeen = true, o.cdTarget = b || _.kind === "unknown" ? null : Jn({ ..._, text: T }, e, h + 1);
    if (_.kind !== "unknown") {
      let I = T.toLowerCase();
      if (I === "call" || I === "") continue;
      if (/^start(?=$|\/)/.test(I) && m < Gt) {
        let O = vt(e, h + 1), F = /\/d/.test(I.slice(5));
        St(e.slice(h + 1, O), F ? { cdSeen: true, cdTarget: null } : { ...o }, true, u, m + 1), h = O - 1, g = false;
        continue;
      }
      if (r && I.startsWith("/d")) o.cdSeen = true, o.cdTarget = null;
      if (I === "if") {
        w = "condition", g = false;
        continue;
      }
      if (Yt(T.replaceAll('"', ""))) {
        let O = h + 1;
        while (O < e.length && !/^\/[ckr]$/i.test(e[O].text)) {
          let z = vt(e, O, O + 1);
          if (z === O) break;
          O = z;
        }
        let F = O < e.length && !e[O].separator;
        if (F && m >= Gt) {
          h = O, g = true;
          continue;
        }
        let U = vt(e, O);
        if (F && O + 1 < U) {
          let z = e.slice(O + 1, U);
          if (z[0].text.startsWith('"')) {
            let N = z.flatMap((W) => [...` ${W.text}`].map((K) => ({ ch: K, kind: W.kind })));
            N.splice(0, 2);
            let G = N.findLastIndex((W) => W.ch === '"');
            if (G !== -1) N.splice(G, 1);
            z = Qt(N);
          }
          St(z, { ...o }, false, u, m + 1);
        }
        h = U - 1, g = false;
        continue;
      }
    }
    g = r;
    let k = _.kind === "unknown" ? null : Gn.exec(T);
    if (k === null) continue;
    let R = [], L = T.slice(k[0].length);
    if (L !== "") R.push({ ..._, text: L });
    for (let I = h + 1; I < e.length; I++) {
      let O = e[I];
      if (!O.separator) {
        R.push(O), h = I;
        continue;
      }
      if (O.text !== "<" && O.text !== ">") break;
      if (/^\d$/.test(R.at(-1)?.text ?? "")) R.pop();
      I = kt(e, I), h = I;
    }
    for (let I of R) {
      if (I.kind === "unknown" || I.text.startsWith("/")) continue;
      let O = I.text.replaceAll('"', "").trim();
      if (O === "") continue;
      let F = I.kind === "expands" ? [u.everyCopyEscaped, u.someCopyEscaped].map((U) => es(O, U)) : [{ view: O, literalPrefix: null }];
      for (let [U, { view: z, literalPrefix: N }] of F.entries()) {
        if (U > 0 && z === F[0].view) continue;
        u.operands.push({ verb: k[1].toLowerCase(), text: O, emptied: N === null ? null : { view: z, literalPrefix: N }, afterCd: o.cdSeen, ...o.cdTarget !== null && { cdTarget: o.cdTarget } });
      }
    }
  }
}
function Pt(e, o) {
  if (!e.includes("%")) return e;
  let r = new Map(Object.entries(o).map(([u, m]) => [u.toLowerCase(), m]));
  return e.replace(/%([^%:]+)%/g, (u, m) => r.get(m.toLowerCase()) ?? u);
}
function Jn(e, o, r) {
  let u = /^(cd|chdir|pushd)(?![a-z])/i.exec(e.text);
  if (u === null) return null;
  let m = r;
  while (m < o.length && !o[m].separator) m++;
  let g = [{ ...e, text: e.text.slice(u[0].length) }, ...o.slice(r, m)].filter((h) => h.text !== "");
  if (["<", ">"].includes(o[m]?.text ?? "") && /^\d$/.test(g.at(-1)?.text ?? "")) g.pop();
  if (g.some((h) => h.kind !== "literal")) return null;
  let w = u[1].toLowerCase() === "pushd" || g.some((h) => /^\/d$/i.test(h.text)), b = g.filter((h) => !h.text.startsWith("/")).map((h) => h.text.replaceAll('"', "")).join(" ").trim();
  return w && /^(?:[A-Za-z]:[\\/]|%)/.test(b) ? b : null;
}
function vt(e, o, r = e.length) {
  let u = o;
  while (u < r) {
    let m = e[u];
    if (!m.separator) u++;
    else if (m.text === "<" || m.text === ">") u = kt(e, u) + 1;
    else break;
  }
  return u;
}
function kt(e, o) {
  let r = o;
  while (e[r + 1]?.separator && ["<", ">", "&"].includes(e[r + 1].text)) r++;
  return e[r + 1] !== void 0 && !e[r + 1].separator ? r + 1 : r;
}
function es(e, o = () => false) {
  let r = "", u = null, m = 0;
  while (m < e.length) {
    let g = e[m] === "$" ? ts(e, m) : m;
    if (g === m || o(e.slice(m, g))) {
      r += e.slice(m, Math.max(g, m + 1)), m = Math.max(g, m + 1);
      continue;
    }
    u ??= r, m = g;
  }
  return { view: r, literalPrefix: u };
}
function ts(e, o) {
  let r = e[o + 1];
  if (r === "{") {
    let m = e.indexOf("}", o + 2);
    return m === -1 ? e.length : m + 1;
  }
  if (r === "(") {
    let m = 0;
    for (let g = o + 1; g < e.length; g++) if (e[g] === "(") m++;
    else if (e[g] === ")" && --m === 0) return g + 1;
    return e.length;
  }
  if (r === "$" || r === "^" || r === "?") return o + 2;
  let u = o + 1;
  while (u < e.length && /[\p{L}\p{Nd}_:]/u.test(e[u])) u++;
  return u === o + 1 ? o : u;
}
var Ct = 5, tt = { "set-content": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-passthru", "-force", "-whatif", "-confirm", "-usetransaction", "-nonewline", "-asbytestream"], knownValueParams: ["-value", "-filter", "-include", "-exclude", "-credential", "-encoding", "-stream"] }, "add-content": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-passthru", "-force", "-whatif", "-confirm", "-usetransaction", "-nonewline", "-asbytestream"], knownValueParams: ["-value", "-filter", "-include", "-exclude", "-credential", "-encoding", "-stream"] }, "remove-item": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-recurse", "-force", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-filter", "-include", "-exclude", "-credential", "-stream"] }, "clear-content": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-filter", "-include", "-exclude", "-credential", "-stream"] }, "out-file": { operationType: "write", pathParams: ["-filepath", "-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-append", "-force", "-noclobber", "-nonewline", "-whatif", "-confirm"], knownValueParams: ["-inputobject", "-encoding", "-width"] }, "tee-object": { operationType: "write", pathParams: ["-filepath", "-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-append"], knownValueParams: ["-inputobject", "-variable", "-encoding"] }, "export-csv": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-append", "-force", "-noclobber", "-notypeinformation", "-includetypeinformation", "-useculture", "-noheader", "-whatif", "-confirm"], knownValueParams: ["-inputobject", "-delimiter", "-encoding", "-quotefields", "-usequotes"] }, "export-clixml": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-noclobber", "-whatif", "-confirm"], knownValueParams: ["-inputobject", "-depth", "-encoding"] }, "new-item": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-target"], leafOnlyPathParams: ["-name"], knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-itemtype", "-value", "-credential", "-type"] }, "copy-item": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-destination"], knownSwitches: ["-container", "-force", "-passthru", "-recurse", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-filter", "-include", "-exclude", "-credential", "-fromsession", "-tosession"] }, "move-item": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-destination"], knownSwitches: ["-force", "-passthru", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-filter", "-include", "-exclude", "-credential"] }, "rename-item": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-passthru", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-newname", "-credential", "-filter", "-include", "-exclude"] }, "set-item": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-passthru", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-value", "-credential", "-filter", "-include", "-exclude"] }, "get-content": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-usetransaction", "-wait", "-raw", "-asbytestream"], knownValueParams: ["-readcount", "-totalcount", "-tail", "-first", "-head", "-last", "-filter", "-include", "-exclude", "-credential", "-delimiter", "-encoding", "-stream"] }, "get-childitem": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-recurse", "-force", "-name", "-usetransaction", "-followsymlink", "-directory", "-file", "-hidden", "-readonly", "-system"], knownValueParams: ["-filter", "-include", "-exclude", "-depth", "-attributes", "-credential"] }, "get-item": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-usetransaction"], knownValueParams: ["-filter", "-include", "-exclude", "-credential", "-stream"] }, "get-itemproperty": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-usetransaction"], knownValueParams: ["-name", "-filter", "-include", "-exclude", "-credential"] }, "get-itempropertyvalue": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-usetransaction"], knownValueParams: ["-name", "-filter", "-include", "-exclude", "-credential"] }, "get-filehash": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: [], knownValueParams: ["-algorithm", "-inputstream"] }, "get-acl": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-audit", "-allcentralaccesspolicies", "-usetransaction"], knownValueParams: ["-inputobject", "-filter", "-include", "-exclude"] }, "get-module": { operationType: "read", pathParams: ["-name", "-fullyqualifiedname"], knownSwitches: ["-listavailable", "-all", "-refresh", "-skipeditioncheck"], knownValueParams: ["-psedition", "-pssession", "-cimsession"] }, "format-hex": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-raw"], knownValueParams: ["-inputobject", "-encoding", "-count", "-offset"] }, "test-path": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-isvalid", "-usetransaction"], knownValueParams: ["-filter", "-include", "-exclude", "-pathtype", "-credential", "-olderthan", "-newerthan"] }, "resolve-path": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-relative", "-usetransaction", "-force"], knownValueParams: ["-credential", "-relativebasepath"] }, "convert-path": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-usetransaction"], knownValueParams: [] }, "select-string": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-simplematch", "-casesensitive", "-quiet", "-list", "-notmatch", "-allmatches", "-noemphasis", "-raw"], knownValueParams: ["-inputobject", "-pattern", "-include", "-exclude", "-encoding", "-context", "-culture"] }, "set-location": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-passthru", "-usetransaction"], knownValueParams: ["-stackname"] }, "push-location": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-passthru", "-usetransaction"], knownValueParams: ["-stackname"] }, "pop-location": { operationType: "read", pathParams: [], knownSwitches: ["-passthru", "-usetransaction"], knownValueParams: ["-stackname"] }, "select-xml": { operationType: "read", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: [], knownValueParams: ["-xml", "-content", "-xpath", "-namespace"] }, "get-winevent": { operationType: "read", pathParams: ["-path"], knownSwitches: ["-force", "-oldest"], knownValueParams: ["-listlog", "-logname", "-listprovider", "-providername", "-maxevents", "-computername", "-credential", "-filterxpath", "-filterxml", "-filterhashtable"] }, "invoke-webrequest": { operationType: "write", pathParams: ["-outfile", "-infile"], positionalSkip: 1, optionalWrite: true, knownSwitches: ["-allowinsecureredirect", "-allowunencryptedauthentication", "-disablekeepalive", "-nobodyprogress", "-passthru", "-preservefileauthorizationmetadata", "-resume", "-skipcertificatecheck", "-skipheadervalidation", "-skiphttperrorcheck", "-usebasicparsing", "-usedefaultcredentials"], knownValueParams: ["-uri", "-method", "-body", "-contenttype", "-headers", "-maximumredirection", "-maximumretrycount", "-proxy", "-proxycredential", "-retryintervalsec", "-sessionvariable", "-timeoutsec", "-token", "-transferencoding", "-useragent", "-websession", "-credential", "-authentication", "-certificate", "-certificatethumbprint", "-form", "-httpversion"] }, "invoke-restmethod": { operationType: "write", pathParams: ["-outfile", "-infile"], positionalSkip: 1, optionalWrite: true, knownSwitches: ["-allowinsecureredirect", "-allowunencryptedauthentication", "-disablekeepalive", "-followrellink", "-nobodyprogress", "-passthru", "-preservefileauthorizationmetadata", "-resume", "-skipcertificatecheck", "-skipheadervalidation", "-skiphttperrorcheck", "-usebasicparsing", "-usedefaultcredentials"], knownValueParams: ["-uri", "-method", "-body", "-contenttype", "-headers", "-maximumfollowrellink", "-maximumredirection", "-maximumretrycount", "-proxy", "-proxycredential", "-responseheaderstvariable", "-retryintervalsec", "-sessionvariable", "-statuscodevariable", "-timeoutsec", "-token", "-transferencoding", "-useragent", "-websession", "-credential", "-authentication", "-certificate", "-certificatethumbprint", "-form", "-httpversion"] }, "expand-archive": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-destinationpath"], knownSwitches: ["-force", "-passthru", "-whatif", "-confirm"], knownValueParams: [] }, "compress-archive": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-destinationpath"], knownSwitches: ["-force", "-update", "-passthru", "-whatif", "-confirm"], knownValueParams: ["-compressionlevel"] }, "set-itemproperty": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-passthru", "-force", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-name", "-value", "-type", "-filter", "-include", "-exclude", "-credential", "-inputobject"] }, "new-itemproperty": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-name", "-value", "-propertytype", "-type", "-filter", "-include", "-exclude", "-credential"] }, "remove-itemproperty": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-name", "-filter", "-include", "-exclude", "-credential"] }, "clear-item": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"], knownValueParams: ["-filter", "-include", "-exclude", "-credential"] }, "export-alias": { operationType: "write", pathParams: ["-path", "-literalpath", "-pspath", "-lp"], knownSwitches: ["-append", "-force", "-noclobber", "-passthru", "-whatif", "-confirm"], knownValueParams: ["-name", "-description", "-scope", "-as"] } };
function as(e) {
  return [["path", e.pathParams], ["leafOnly", e.leafOnlyPathParams ?? []], ["switch", [...e.knownSwitches, ...import_chunk_x0nfhv1g.cei]], ["value", [...e.knownValueParams, ...import_chunk_x0nfhv1g.uei]]];
}
function is(e, o) {
  let r = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), m = false;
  for (let [b, h] of o) for (let _ of h) if (_ === e) r.add(b);
  else if (e.length > 1 && _.startsWith(e)) {
    let T = u.get(_);
    if (T !== void 0 && T !== b) m = true;
    u.set(_, b);
  }
  if (r.size > 1) return "ambiguous";
  let g = [...r][0];
  if (g !== void 0) return g === "value" && (m || [...u.values()].some((h) => h !== "value")) ? "ambiguous" : g;
  if (m || u.size > 1) return "ambiguous";
  let w = [...u.values()][0];
  if (w !== void 0) return w;
  return "unknown";
}
function nt(e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return e;
  return e.split(/([/\\])/).map((o, r) => {
    if (r % 2 !== 0) return o;
    return (0, import_chunk_2fxy1zey.x9)(o);
  }).join("");
}
function mt(e) {
  return (0, import_chunk_bzyb60p0.Tie)(e);
}
function Rt(e) {
  if (/['"\u2018-\u201F]/.test(e)) return true;
  if (e.includes("\u180E")) return true;
  let o = mt(e);
  return o.includes(",") || o.startsWith("(") || o.startsWith("[") || o.includes("`") || o.includes("@(") || o.startsWith("@") || o.includes("$");
}
function dt(e) {
  let o = e.length;
  if (o <= Ct) return e.map((u) => `'${u}'`).join(", ");
  return `${e.slice(0, Ct).map((u) => `'${u}'`).join(", ")}, and ${o - Ct} more`;
}
function Be(e) {
  if (e === "~" || e.startsWith("~/") || e.startsWith("~\\")) return (0, import_os2.homedir)() + e.slice(1);
  return e;
}
function Qe(e) {
  let o = /* @__PURE__ */ new Set([(0, import_chunk_bzyb60p0.TW)(e), (0, import_chunk_bzyb60p0.Kue)(e), (0, import_chunk_bzyb60p0.xTe)(e)]);
  for (let r of o) {
    let u = r.indexOf("::");
    if (u >= 0 && Zt(r.slice(u + 2)) || Zt(r)) return true;
  }
  return false;
}
function Zt(e) {
  let o = Be(e).replace(/\\/g, "/"), r = nt(o);
  if ((0, import_path3.isAbsolute)(r)) r = (0, import_path3.normalize)(r);
  return (0, import_chunk_pqb914sj.Iwt)(r) || (0, import_chunk_pqb914sj.Iwt)(o);
}
function xt(e, o) {
  let r = /* @__PURE__ */ new Set([e, (0, import_chunk_bzyb60p0.Kue)(e), (0, import_chunk_bzyb60p0.xTe)(e)]);
  for (let u of [...r]) {
    if (u.includes("`")) r.add((0, import_chunk_bzyb60p0.cR)(u));
    if (u.includes("::")) {
      let m = u.slice(u.indexOf("::") + 2);
      if (r.add(m), m.includes("`")) r.add((0, import_chunk_bzyb60p0.cR)(m));
    }
  }
  for (let u of r) {
    let m = nt(Be(u).replace(/\\/g, "/"));
    if (m === "") continue;
    let g = (0, import_path3.isAbsolute)(m) ? m : (0, import_path3.resolve)(o, m), { resolvedPath: w } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), g);
    if ((0, import_chunk_pqb914sj.Iwt)(w)) return w;
  }
  return null;
}
function de(e) {
  return (0, import_chunk_bzyb60p0.TW)(e) === e;
}
function xe(e, o = `Remove-Item on system path '${e}' is blocked. This path is protected from removal.`) {
  return { behavior: "deny", message: o, decisionReason: { type: "safetyCheck", reason: "Removal targets a protected system path", classifierApprovable: false } };
}
function ls(e) {
  let o = e.length;
  while (o > 0 && (e[o - 1] === "\\" || e[o - 1] === "/")) o--;
  let r = o;
  while (r > 0 && "*?.".includes(e[r - 1])) r--;
  let u = e.slice(r, o);
  if (!(r === 0 || e[r - 1] === "\\" || e[r - 1] === "/") || !/[*?]/.test(u)) return e;
  return r === 0 ? "." : e.slice(0, r);
}
function cs(e, o, r, u, m) {
  let g = ls((0, import_chunk_z6pfqf6e.BQe)(e));
  if (Qe(g)) return { path: g, quotable: true };
  let w = r && !/^(?:[A-Za-z]:)?[\\/]/.test(g);
  if (!(0, import_chunk_z6pfqf6e.$r)(g) && !w) {
    let b = xt(g, o);
    if (b !== null) return { path: b, quotable: true };
  }
  if (w && u !== void 0 && !/^[A-Za-z]:/.test(g)) for (let b of /* @__PURE__ */ new Set([u, Pt(u, m)])) {
    if (!/^[A-Za-z]:[\\/]/.test(b)) continue;
    let h = import_path3.win32.resolve(b, g);
    if (Qe(h)) return { path: h, quotable: b === u, viaCd: u };
  }
  return null;
}
function Jt(e, o, r) {
  if (!Kt()) return;
  let u = Xt(e);
  if (u.length === 0) return;
  let m = (0, import_chunk_r6r2wdsw.Hs)();
  for (let { verb: g, text: w, emptied: b, afterCd: h, cdTarget: _ } of u) {
    if (b?.literalPrefix === "") continue;
    let T = b?.view ?? w;
    for (let k of /* @__PURE__ */ new Set([T, Pt(T, m)])) {
      let R = cs(k, o, r || h, _, m);
      if (R === null) continue;
      let L = R.quotable && k === T, I = R.viaCd === void 0 ? null : `after this line's cd to '${R.viaCd}'`, F = (L ? [I, b !== null ? "if its variables are empty" : null] : [I, `with cmd's %NAME% variables replaced${b !== null ? " and PowerShell's $ variables empty" : ""}`]).filter((U) => U !== null).join(" and ");
      return xe(w, !L ? `cmd's ${g} on '${w}' is blocked because, ${F}, it targets a path that no command may remove: a drive root, a folder directly under one, or the home folder.` : w === R.path ? `cmd's ${g} on '${R.path}' is blocked because no command may remove that path.` : `cmd's ${g} on '${w}' is blocked because${F === "" ? "" : `, ${F},`} it targets '${R.path}', which no command may remove.`);
    }
  }
  return;
}
function et(e, o, r, u) {
  if (!e || e.includes("\0")) return null;
  let m = Be(nt(e)), g = (0, import_path3.isAbsolute)(m) ? m : (0, import_path3.resolve)(o, m), { resolvedPath: w } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), g), b = u === "read" ? "read" : "edit";
  for (let h of (0, import_chunk_w578pjby.Ei)(w)) {
    let _ = (0, import_chunk_p1ewvgeh.Ia)(h, r, b, "deny");
    if (_ !== null) return { resolvedPath: w, rule: _ };
  }
  return null;
}
function Ke(e, o, r, u) {
  let m = (0, import_chunk_bzyb60p0.TW)(e), g = m !== e;
  if (g) {
    let L = /* @__PURE__ */ new Set();
    for (let I of [e.replaceAll("\\", "/"), (0, import_chunk_bzyb60p0.Kue)(e).replaceAll("\\", "/"), (0, import_chunk_bzyb60p0.xTe)(e).replaceAll("\\", "/")]) {
      if (L.add(I), I.includes("`")) L.add((0, import_chunk_bzyb60p0.cR)(I));
      if (I.includes("::")) {
        let O = I.slice(I.indexOf("::") + 2);
        if (L.add(O), O.includes("`")) L.add((0, import_chunk_bzyb60p0.cR)(O));
      }
    }
    for (let I of L) {
      let O = et(I, o, r, u);
      if (O) return { allowed: false, resolvedPath: O.resolvedPath, decisionReason: { type: "rule", rule: O.rule } };
    }
  }
  let w = (L) => ({ allowed: false, resolvedPath: L, decisionReason: { type: "other", reason: "Paths containing quote characters cannot be statically validated and require manual approval" } }), h = Be(m).replaceAll("\\", "/");
  if (/^~[^/]/.test(h)) return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: "Paths beginning with ~user cannot be statically validated and require manual approval" } };
  if (h.includes("`")) {
    let L = (0, import_chunk_bzyb60p0.cR)(h), I = et(L, o, r, u);
    if (I) return { allowed: false, resolvedPath: I.resolvedPath, decisionReason: { type: "rule", rule: I.rule } };
    return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: "Backtick escape characters in paths cannot be statically validated and require manual approval" } };
  }
  if (h.includes("::")) {
    let L = h.slice(h.indexOf("::") + 2), I = et(L, o, r, u);
    if (I) return { allowed: false, resolvedPath: I.resolvedPath, decisionReason: { type: "rule", rule: I.rule } };
    return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: "Module-qualified provider paths (::) cannot be statically validated and require manual approval" } };
  }
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && /^[a-z]:(?![/\\])/i.test(h)) return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: `Path '${g ? e : h}' is drive-relative (resolves against the per-drive current directory, which cannot be statically validated) and requires manual approval` } };
  if (h = nt(h), (0, import_chunk_z6pfqf6e.$r)(h) || /DavWWWRoot/i.test(h) || /@SSL@/i.test(h)) return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: "UNC paths are blocked because they can trigger network requests and credential leakage" } };
  if (h.includes("$") || h.includes("%")) return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: "Variable expansion syntax in paths requires manual approval" } };
  if (((0, import_chunk_cg8dqz0a.x)() === "windows" ? /^[a-z0-9]{2,}:/i : /^[a-z0-9]+:/i).test(h)) return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: `Path '${g ? e : h}' uses a non-filesystem provider and requires manual approval` } };
  if ((0, import_chunk_pqb914sj.x9e)(h)) {
    let L = et(h, o, r, u);
    if (L) return { allowed: false, resolvedPath: L.resolvedPath, decisionReason: { type: "rule", rule: L.rule } };
    return { allowed: false, resolvedPath: (0, import_path3.resolve)(o, h), decisionReason: { type: "other", reason: "Path contains '..' traversal after a directory segment, which may follow a symlink outside the working directory" } };
  }
  if ((0, import_chunk_z6pfqf6e._P)(h) !== -1) {
    if (u === "write" || u === "create") return { allowed: false, resolvedPath: h, decisionReason: { type: "other", reason: "Glob patterns are not allowed in write operations. Please specify an exact file path." } };
    if ((0, import_chunk_n2dbhmj2.RM)(h)) {
      let z = (0, import_path3.isAbsolute)(h) ? h : (0, import_path3.resolve)(o, h), { resolvedPath: N } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), z), G = u === "read" ? "read" : "edit";
      for (let W of (0, import_chunk_w578pjby.Ei)(N)) {
        let K = (0, import_chunk_p1ewvgeh.Ia)(W, r, G, "deny");
        if (K !== null) return { allowed: false, resolvedPath: N, decisionReason: { type: "rule", rule: K } };
      }
      if (g) return w(N);
      return { allowed: false, resolvedPath: N, decisionReason: { type: "other", reason: "Glob patterns in paths cannot be statically validated \u2014 symlinks inside the glob expansion are not examined. Requires manual approval." } };
    }
    let L = us(h), I = (0, import_path3.isAbsolute)(L) ? L : (0, import_path3.resolve)(o, L), { resolvedPath: O } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), I), U = (0, import_chunk_p1ewvgeh.Ia)(O, r, u === "read" ? "read" : "edit", "deny");
    if (U !== null) return { allowed: false, resolvedPath: O, decisionReason: { type: "rule", rule: U } };
    return { allowed: false, resolvedPath: O, decisionReason: { type: "other", reason: "Glob patterns in paths cannot be statically validated \u2014 symlinks inside the glob expansion are not examined. Requires manual approval." } };
  }
  let T = (0, import_path3.isAbsolute)(h) ? h : (0, import_path3.resolve)(o, h), { resolvedPath: k, ...R } = (0, import_chunk_pqb914sj.mfs)(T, r, u);
  if (g && R.allowed) return w(k);
  if (g && !R.allowed && R.decisionReason?.type === "safetyCheck") return { allowed: false, resolvedPath: k, decisionReason: { type: "safetyCheck", reason: `Path '${e}' resolves near a sensitive file under quote-stripping and cannot be statically validated; requires manual approval`, classifierApprovable: false } };
  return { ...R, resolvedPath: k };
}
function us(e) {
  let o = (0, import_chunk_z6pfqf6e._P)(e);
  if (o === -1) return e;
  let r = e.substring(0, o), u = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
  if (u === -1) return ".";
  return r.substring(0, u + 1) || "/";
}
var ds = /* @__PURE__ */ new Set(["StringConstant", "Parameter"]), ms = /* @__PURE__ */ new Set(["get-childitem", "get-item", "get-itemproperty", "resolve-path", "convert-path", "get-filehash", "get-acl", "test-path"]);
function en(e) {
  let o = (0, import_chunk_x0nfhv1g.hE)(e.name), r = (0, import_chunk_xcgcdx61.ko)(tt, o);
  if (!r) return { paths: [], operationType: "read", hasUnvalidatablePathArg: false, optionalWrite: false };
  let u = as(r), m = [], { args: g, elementTypes: w } = e, b = false, h = 0, _ = r.positionalSkip ?? 0;
  function T(k) {
    if (!w) return;
    let R = w[k + 1];
    if (R && !ds.has(R)) b = true;
  }
  for (let k = 0; k < g.length; k++) {
    let R = g[k];
    if (!R) continue;
    let L = w ? w[k + 1] : void 0;
    if ((0, import_chunk_bzyb60p0.Ent)(R, L)) {
      let I = "-" + R.slice(1), O = I.indexOf(":", 1), U = (O > 0 ? I.substring(0, O) : I).toLowerCase(), z = is(U, u);
      if (z === "path") {
        let N;
        if (O > 0) {
          let G = R.substring(O + 1);
          if (Rt(G)) b = true;
          N = mt(G);
        } else {
          let G = g[k + 1], W = w ? w[k + 2] : void 0;
          if (G && !(0, import_chunk_bzyb60p0.Ent)(G, W)) N = G, T(k + 1), k++;
        }
        if (N) m.push(N);
      } else if (z === "leafOnly") {
        let N;
        if (O > 0) {
          let G = R.substring(O + 1);
          if (Rt(G)) b = true;
          N = mt(G);
        } else {
          let G = g[k + 1], W = w ? w[k + 2] : void 0;
          if (G && !(0, import_chunk_bzyb60p0.Ent)(G, W)) N = G, T(k + 1), k++;
        }
        if (N !== void 0) if (N.includes("/") || N.includes("\\") || N === "." || N === "..") b = true;
        else m.push(N);
      } else if (z === "switch") ;
      else if (z === "value") if (O > 0) {
        if (Rt(R.substring(O + 1))) b = true;
      } else {
        let N = g[k + 1], G = w ? w[k + 2] : void 0;
        if (N && !(0, import_chunk_bzyb60p0.Ent)(N, G)) T(k + 1), k++;
      }
      else {
        b = true;
        {
          let N = g[k + 1], G = w ? w[k + 2] : void 0;
          if (N && !(0, import_chunk_bzyb60p0.Ent)(N, G)) m.push(N);
        }
        if (O > 0) {
          let N = R.substring(O + 1);
          m.push(mt(N));
        }
      }
      continue;
    }
    if (h < _) {
      h++;
      continue;
    }
    h++, T(k), m.push(R);
  }
  return { paths: m, operationType: r.operationType, hasUnvalidatablePathArg: b, optionalWrite: r.optionalWrite ?? false };
}
function At(e, o, r, u = false) {
  if (!o.valid) return { behavior: "passthrough", message: "Cannot validate paths for unparsed command" };
  let m, g;
  for (let w of o.statements) {
    let b;
    try {
      b = gs(w, r, u);
    } catch (h) {
      if (!(h instanceof import_chunk_n2dbhmj2.f3)) throw h;
      let _ = "This command was not run: a path in it contains a null character, which file names cannot contain. Remove it, or, if the value is not a path, pass it as a named parameter such as -Value or -Pattern.";
      return { behavior: "deny", message: _, decisionReason: { type: "other", reason: _, standsForDenyRules: true } };
    }
    if (b.behavior === "deny") return b;
    if (b.behavior === "ask") {
      if (m ??= b, (0, import_chunk_pbteexar.IM)(b.decisionReason)) g ??= b;
    }
  }
  return g ?? m ?? { behavior: "passthrough", message: "All path constraints validated successfully" };
}
function ps(e, o, r, u) {
  let m = (0, import_chunk_x0nfhv1g.hE)(e.name), g = e.elementTypes, w = e.name.slice(Math.max(e.name.lastIndexOf("\\"), e.name.lastIndexOf("/")) + 1).replace(/\.exe$/i, "").replace(/[\d.]+$/, ""), b = import_chunk_pbteexar.Oqn.get(w) ?? (w.toLowerCase() === "cmd" ? /* @__PURE__ */ new Set(["/c", "/k"]) : void 0);
  if (b !== void 0 && e.args.some((_) => {
    let T = _.toLowerCase();
    return [...b].some((k) => T === k.toLowerCase() || T.startsWith(k.toLowerCase() + "="));
  })) return (0, import_chunk_pbteexar.joe)(`${m} runs inline code, which cannot be checked against the read block`);
  let h;
  for (let _ = 0; _ < e.args.length; _++) {
    let T = e.args[_], k = g ? g[_ + 1] : void 0;
    if (k !== void 0 && k !== "StringConstant" && k !== "Parameter") {
      h ??= (0, import_chunk_pbteexar.pT)(m);
      continue;
    }
    if (T === "") continue;
    let R = T.indexOf(":"), L = T.indexOf("="), I = R > 0 && /^[-/][A-Za-z]+$/.test(T.slice(0, R)) ? T.slice(R + 1) : L > 0 && /^--?[A-Za-z][A-Za-z-]*$/.test(T.slice(0, L)) ? T.slice(L + 1) : void 0;
    if (I !== void 0 && I.includes("$")) {
      h ??= (0, import_chunk_pbteexar.pT)(m);
      continue;
    }
    if ((0, import_chunk_z6pfqf6e.$r)(T)) {
      h ??= (0, import_chunk_pbteexar.pT)(m);
      continue;
    }
    if (I === void 0 && (0, import_chunk_bzyb60p0.Ent)(T, k)) continue;
    for (let O of I !== void 0 ? [I] : [T]) {
      if (O === "") continue;
      if (O.startsWith("~") && O !== "~" && !/^~[\\/]/.test(O)) {
        h ??= (0, import_chunk_pbteexar.pT)(m);
        continue;
      }
      let F = Be(O);
      if (u && !(0, import_path3.isAbsolute)(F)) {
        h ??= (0, import_chunk_pbteexar.pT)(m);
        continue;
      }
      let U = O, z = (0, import_chunk_z6pfqf6e._P)(F);
      if (z !== -1) {
        let K = F.slice(0, z);
        U = /[\\/]$/.test(K) ? K : (0, import_path3.dirname)(K);
      }
      let N = Be(U);
      if ((0, import_chunk_z6pfqf6e.$r)(N)) {
        h ??= (0, import_chunk_pbteexar.pT)(m);
        continue;
      }
      let G = (0, import_path3.isAbsolute)(N) ? N : (0, import_path3.resolve)(o, N);
      if (!(0, import_chunk_pqb914sj.x9e)(N.replaceAll("\\", "/")) && !(0, import_chunk_w578pjby.le)().existsSync(G)) continue;
      let W = Ke(U, o, r, "read");
      if (W.allowed) continue;
      if (W.decisionReason?.type === "rule") return { behavior: "deny", message: `${m} targeting '${W.resolvedPath}' was blocked by a deny rule`, decisionReason: W.decisionReason };
      if ((0, import_chunk_pbteexar.IM)(W.decisionReason)) {
        h ??= Tt(m, W.decisionReason, de(U) ? W.resolvedPath : void 0);
        continue;
      }
      h ??= (0, import_chunk_pbteexar.pT)(m);
    }
  }
  return h;
}
function fs(e) {
  let o = false, r = false;
  for (let u = 0; u < e.length; u++) {
    let g = e[u].toLowerCase(), w = g.indexOf(":"), b = w > 0 ? g.slice(0, w) : g, h = w > 0 ? g.slice(w + 1) : (e[u + 1] ?? "").toLowerCase();
    if (b.length >= 2 && ("-itemtype".startsWith(b) || "-type".startsWith(b)) && /link|junction/.test(h)) o = true;
    if (b.length >= 2 && "-value".startsWith(b)) r = true;
  }
  return o && r;
}
var hs = /* @__PURE__ */ new Set(["copy-item", "move-item", "compress-archive", "expand-archive", "invoke-webrequest", "invoke-restmethod", "new-item"]);
function Tt(e, o, r) {
  return { behavior: "ask", message: `${e} names a path outside the working directories, which the read block does not allow without asking (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.`, blockedPath: r, decisionReason: o };
}
function gs(e, o, r = false) {
  let u = (0, import_chunk_18rsj2ts.pe)(), m, g, w = o.blockReadsOutsideWorkingDirectories === true, b = (k, R) => w && (R === "read" || hs.has(k));
  if (r) m = { behavior: "ask", message: "Compound command changes working directory (Set-Location/Push-Location/Pop-Location/New-PSDrive) \u2014 relative paths cannot be validated against the original cwd and require manual approval", decisionReason: { type: "other", reason: "Compound command contains cd with path operation \u2014 manual approval required to prevent path resolution bypass" } };
  let h = false, _, T = false;
  for (let k of e.commands) {
    if (k.elementType !== "CommandAst") {
      h = true, _ = k.text;
      continue;
    }
    let { paths: R, operationType: L, hasUnvalidatablePathArg: I, optionalWrite: O } = en(k), F = (0, import_chunk_x0nfhv1g.hE)(k.name), U = (0, import_chunk_xcgcdx61.ko)(tt, F) !== void 0, z = Jt(k, u, r);
    if (z !== void 0) return z;
    if (w && !U) {
      let W = ps(k, u, o, r);
      if (W?.behavior === "deny") return W;
      g ??= W;
    }
    if (w && F === "new-item" && fs(k.args)) g ??= (0, import_chunk_pbteexar.pT)(F);
    let N = T;
    if (!ms.has(F)) T = true;
    if (h) {
      let W = (0, import_chunk_x0nfhv1g.hE)(k.name);
      if (_ !== void 0) {
        let K = /* @__PURE__ */ new Set();
        for (let V of [_, (0, import_chunk_bzyb60p0.TW)(_), (0, import_chunk_bzyb60p0.Kue)(_), (0, import_chunk_bzyb60p0.xTe)(_)]) {
          if (K.add(V), V.includes("`")) K.add((0, import_chunk_bzyb60p0.cR)(V));
          if (V.includes("::")) {
            let q = V.slice(V.indexOf("::") + 2);
            if (K.add(q), q.includes("`")) K.add((0, import_chunk_bzyb60p0.cR)(q));
          }
        }
        for (let V of K) {
          let q = et(V, u, o, L);
          if (q) return { behavior: "deny", message: `${W} targeting '${q.resolvedPath}' was blocked by a deny rule`, decisionReason: { type: "rule", rule: q.rule } };
        }
      }
      if (m ??= { behavior: "ask", message: `${W} receives its path from a pipeline expression source that cannot be statically validated and requires manual approval` }, b(F, L)) g ??= (0, import_chunk_pbteexar.pT)(F);
    }
    if (I) {
      let W = (0, import_chunk_x0nfhv1g.hE)(k.name);
      if (m ??= { behavior: "ask", message: `${W} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval` }, b(F, L)) g ??= (0, import_chunk_pbteexar.pT)(F);
    }
    if (L !== "read" && !O && R.length === 0 && U) {
      m ??= { behavior: "ask", message: `${F} is a write operation but no target path could be determined; requires manual approval` };
      continue;
    }
    if (N && U) {
      if (m ??= { behavior: "ask", message: `${F} may receive a path from an upstream pipeline command whose output cannot be statically validated and requires manual approval` }, b(F, L)) g ??= (0, import_chunk_pbteexar.pT)(F);
    }
    let G = (0, import_chunk_x0nfhv1g.hE)(k.name) === "remove-item";
    if (G) {
      if (k.args.some((K) => {
        let V = (K.length > 0 ? "-" + K.slice(1) : K).toLowerCase(), q = V.indexOf(":"), M = q > 0 ? V.slice(0, q) : V;
        return M.length >= 2 && "-recurse".startsWith(M);
      })) {
        let K = (0, import_chunk_p1ewvgeh.Yo)(u);
        for (let V of R) {
          let q = Be(nt(V)).replace(/\\/g, "/"), M = (0, import_path3.isAbsolute)(q) ? (0, import_path3.resolve)(q) : (0, import_path3.resolve)(u, q), re = (0, import_chunk_p1ewvgeh.Yo)(M);
          if (re === K || K.startsWith(re + "/") || K.startsWith(re + "\\")) {
            m ??= { behavior: "ask", message: `Remove-Item -Recurse targeting '${V}' would delete the working directory including .git and .claude \u2014 requires manual approval` };
            break;
          }
        }
      }
    }
    if (r && b(F, L) && R.some((W) => !(0, import_path3.isAbsolute)(Be(W)))) g ??= (0, import_chunk_pbteexar.pT)(F);
    for (let W of R) {
      if (G && Qe(W)) return xe(W);
      let { allowed: K, resolvedPath: V, decisionReason: q } = Ke(W, u, o, L);
      if (L !== "read" && b(F, L)) {
        let M = Ke(W, u, o, "read");
        if (!M.allowed && M.decisionReason?.type === "rule") return { behavior: "deny", message: `${F} targeting '${M.resolvedPath}' was blocked by a deny rule`, decisionReason: M.decisionReason };
        if (!M.allowed && (0, import_chunk_pbteexar.IM)(M.decisionReason)) g ??= Tt(F, M.decisionReason, de(W) ? M.resolvedPath : void 0);
      }
      if (G && (0, import_chunk_pqb914sj.Iwt)(V)) return xe(V);
      if (G) {
        let M = xt(W, u);
        if (M !== null) return xe(M);
      }
      if (!K) {
        let M = (0, import_chunk_x0nfhv1g.hE)(k.name), re = Array.from((0, import_chunk_p1ewvgeh.sv)(o)), ce = dt(re), ue = q?.type === "other" || q?.type === "safetyCheck" ? q.reason : `${M} targeting '${de(W) ? V : W}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${ce}.`;
        if (q?.type === "rule") return { behavior: "deny", message: ue, decisionReason: q };
        let ie = [];
        if (V && de(W)) if (L === "read") {
          let we = (0, import_chunk_p1ewvgeh.wjt)((0, import_chunk_n2dbhmj2.nOe)(V), "session");
          if (we) ie.push(we);
        } else ie.push({ type: "addDirectories", directories: [(0, import_chunk_n2dbhmj2.nOe)(V)], destination: "session" });
        if (de(W) && (L === "write" || L === "create") && (0, import_chunk_p1ewvgeh.Tdn)(o)) ie.push({ type: "setMode", mode: "acceptEdits", destination: "session" });
        let me = { behavior: "ask", message: ue, blockedPath: de(W) ? V : void 0, decisionReason: q, suggestions: ie };
        if (m ??= me, (0, import_chunk_pbteexar.IM)(q)) g ??= me;
      }
    }
  }
  if (e.nestedCommands) for (let k of e.nestedCommands) {
    let { paths: R, operationType: L, hasUnvalidatablePathArg: I, optionalWrite: O } = en(k), F = (0, import_chunk_x0nfhv1g.hE)(k.name), U = Jt(k, u, r);
    if (U !== void 0) return U;
    if (I) {
      if (m ??= { behavior: "ask", message: `${F} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval` }, b(F, L)) g ??= (0, import_chunk_pbteexar.pT)(F);
    }
    if (L !== "read" && !O && R.length === 0 && (0, import_chunk_xcgcdx61.ko)(tt, F) !== void 0) {
      m ??= { behavior: "ask", message: `${F} is a write operation but no target path could be determined; requires manual approval` };
      continue;
    }
    let z = (0, import_chunk_x0nfhv1g.hE)(k.name) === "remove-item";
    for (let N of R) {
      if (z && Qe(N)) return xe(N);
      let { allowed: G, resolvedPath: W, decisionReason: K } = Ke(N, u, o, L);
      if (L !== "read" && b(F, L)) {
        let V = Ke(N, u, o, "read");
        if (!V.allowed && V.decisionReason?.type === "rule") return { behavior: "deny", message: `${F} targeting '${V.resolvedPath}' was blocked by a deny rule`, decisionReason: V.decisionReason };
        if (!V.allowed && (0, import_chunk_pbteexar.IM)(V.decisionReason)) g ??= Tt(F, V.decisionReason, de(N) ? V.resolvedPath : void 0);
      }
      if (z && (0, import_chunk_pqb914sj.Iwt)(W)) return xe(W);
      if (z) {
        let V = xt(N, u);
        if (V !== null) return xe(V);
      }
      if (!G) {
        let V = (0, import_chunk_x0nfhv1g.hE)(k.name), q = Array.from((0, import_chunk_p1ewvgeh.sv)(o)), M = dt(q), re = K?.type === "other" || K?.type === "safetyCheck" ? K.reason : `${V} targeting '${de(N) ? W : N}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${M}.`;
        if (K?.type === "rule") return { behavior: "deny", message: re, decisionReason: K };
        let ce = [];
        if (W && de(N)) if (L === "read") {
          let ie = (0, import_chunk_p1ewvgeh.wjt)((0, import_chunk_n2dbhmj2.nOe)(W), "session");
          if (ie) ce.push(ie);
        } else ce.push({ type: "addDirectories", directories: [(0, import_chunk_n2dbhmj2.nOe)(W)], destination: "session" });
        if (de(N) && (L === "write" || L === "create") && (0, import_chunk_p1ewvgeh.Tdn)(o)) ce.push({ type: "setMode", mode: "acceptEdits", destination: "session" });
        let ue = { behavior: "ask", message: re, blockedPath: de(N) ? W : void 0, decisionReason: K, suggestions: ce };
        if (m ??= ue, (0, import_chunk_pbteexar.IM)(K)) g ??= ue;
      }
    }
    if (h) m ??= { behavior: "ask", message: `${(0, import_chunk_x0nfhv1g.hE)(k.name)} appears inside a control-flow or chain statement where piped expression sources cannot be statically validated and requires manual approval` };
  }
  if (e.nestedCommands) {
    for (let k of e.nestedCommands) if (k.redirections) for (let R of k.redirections) {
      if (R.isMerging) continue;
      if (!R.target) continue;
      if ((0, import_chunk_bzyb60p0.yxn)(R.target)) continue;
      let { allowed: L, resolvedPath: I, decisionReason: O } = Ke(R.target, u, o, "create");
      if (!L) {
        let F = Array.from((0, import_chunk_p1ewvgeh.sv)(o)), U = dt(F), z = O?.type === "other" || O?.type === "safetyCheck" ? O.reason : `Output redirection to '${de(R.target) ? I : R.target}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${U}.`;
        if (O?.type === "rule") return { behavior: "deny", message: z, decisionReason: O };
        m ??= { behavior: "ask", message: z, blockedPath: de(R.target) ? I : void 0, decisionReason: O, suggestions: de(R.target) ? [{ type: "addDirectories", directories: [(0, import_chunk_n2dbhmj2.nOe)(I)], destination: "session" }] : [] };
      }
    }
  }
  if (e.redirections) for (let k of e.redirections) {
    if (k.isMerging) continue;
    if (!k.target) continue;
    if ((0, import_chunk_bzyb60p0.yxn)(k.target)) continue;
    let { allowed: R, resolvedPath: L, decisionReason: I } = Ke(k.target, u, o, "create");
    if (!R) {
      let O = Array.from((0, import_chunk_p1ewvgeh.sv)(o)), F = dt(O), U = I?.type === "other" || I?.type === "safetyCheck" ? I.reason : `Output redirection to '${de(k.target) ? L : k.target}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${F}.`;
      if (I?.type === "rule") return { behavior: "deny", message: U, decisionReason: I };
      m ??= { behavior: "ask", message: U, blockedPath: de(k.target) ? L : void 0, decisionReason: I, suggestions: de(k.target) ? [{ type: "addDirectories", directories: [(0, import_chunk_n2dbhmj2.nOe)(L)], destination: "session" }] : [] };
    }
  }
  return g ?? m ?? { behavior: "passthrough", message: "All path constraints validated successfully" };
}
var ws = /^(?:(?:Remove|Clear|Set|Move|Rename|Copy)-(?:Item|Content|Wmi)|Stop-(?:Process|Service)|Add-Content|New-Item|Invoke-Expression|Tee-Object|Export-(?:Csv|Alias))/i, bs = /* @__PURE__ */ new Set(["CustomAttributeTypeNotFound", "DscResourceInvalidKeyProperty", "IncompleteString", "ParameterAttributeArgumentNeedsToBeConstant", "ParameterAttributeArgumentNeedsToBeConstantOrScriptBlock", "TypeNotAllowedInDataSection", "TypeNotFound"]);
function tn(e) {
  return (0, import_chunk_7cfjrnwy.Wr)((0, import_chunk_xfj2cwfv.UC)((0, import_chunk_wbk1hf21.w1e)(e)).text);
}
function nn(e) {
  let o = e.aliasShadows;
  if (!e.valid && !e.errors.every(({ errorId: m }) => bs.has(m)) || !o?.some(({ target: m }) => ws.test(m)) || !(0, import_chunk_bzyb60p0.y7o)()) return;
  (0, import_chunk_cqa9hrgx.l)("shell_powershell_alias_shadow", "refused");
  let r = o.map(({ name: m, target: g }) => `\`${tn(m)}\` is an alias of \`${tn(g)}\``).join(", and ");
  return { behavior: "deny", message: `The command was not run. ${r}. PowerShell runs an alias before a function, so a call by such a name runs what the alias names, not the function defined here. Rename the function, for example with a Verb-Noun name, and change every call to the new name. Keeping the name is not safe: after Set-Alias, with an [Alias()] attribute, in a script file or after removing the alias, the built-in can still run. Any command that defines this name is refused.`, decisionReason: { type: "safetyCheck", reason: `${r}, so a call by such a name runs the alias, not the function defined here.`, classifierApprovable: false } };
}
var ys = new Set(["alias", "allowemptycollection", "allowemptystring", "allownull", "argumentcompleter", "argumentcompletions", "array", "bigint", "bool", "byte", "char", "cimclass", "cimconverter", "ciminstance", "cimtype", "cmdletbinding", "cultureinfo", "datetime", "decimal", "double", "dsclocalconfigurationmanager", "dscproperty", "dscresource", "experimentaction", "experimental", "experimentalfeature", "float", "guid", "hashtable", "int", "int16", "int32", "int64", "ipaddress", "ipendpoint", "long", "mailaddress", "norunspaceaffinity", "nullstring", "objectsecurity", "ordered", "outputtype", "parameter", "physicaladdress", "pscredential", "pscustomobject", "psdefaultvalue", "pslistmodifier", "psobject", "psprimitivedictionary", "pstypenameattribute", "ref", "regex", "sbyte", "securestring", "semver", "short", "single", "string", "supportswildcards", "switch", "timespan", "uint", "uint16", "uint32", "uint64", "ulong", "uri", "ushort", "validatecount", "validatedrive", "validatelength", "validatenotnull", "validatenotnullorempty", "validatenotnullorwhitespace", "validatepattern", "validaterange", "validatescript", "validateset", "validatetrusteddata", "validateuserdrive", "version", "void", "wildcardpattern", "x500distinguishedname", "x509certificate", "xml", "system.array", "system.boolean", "system.byte", "system.char", "system.datetime", "system.decimal", "system.double", "system.guid", "system.int16", "system.int32", "system.int64", "system.numerics.biginteger", "system.sbyte", "system.single", "system.string", "system.timespan", "system.uint16", "system.uint32", "system.uint64", "system.uri", "system.version", "system.void", "system.collections.hashtable", "system.text.regularexpressions.regex", "system.globalization.cultureinfo", "system.net.ipaddress", "system.net.ipendpoint", "system.net.mail.mailaddress", "system.net.networkinformation.physicaladdress", "system.security.securestring", "system.security.cryptography.x509certificates.x509certificate", "system.security.cryptography.x509certificates.x500distinguishedname", "system.xml.xmldocument", "system.management.automation.pscredential", "system.management.automation.pscustomobject", "system.management.automation.pslistmodifier", "system.management.automation.psobject", "system.management.automation.psprimitivedictionary", "system.management.automation.psreference", "system.management.automation.semanticversion", "system.management.automation.switchparameter", "system.management.automation.wildcardpattern", "system.management.automation.language.nullstring", "microsoft.management.infrastructure.cimclass", "microsoft.management.infrastructure.cimconverter", "microsoft.management.infrastructure.ciminstance", "microsoft.management.infrastructure.cimtype", "system.collections.specialized.ordereddictionary", "system.security.accesscontrol.objectsecurity", "object", "system.object", "microsoft.powershell.commands.modulespecification"].map((e) => e.toLowerCase()));
function vs(e) {
  return e.toLowerCase().replace(/\[\]$/, "").replace(/\[.*\]$/, "").trim();
}
function Et(e) {
  return ys.has(vs(e));
}
var _t = "This command may run Get-Module, which can load a module manifest, and a manifest can run any command. Approve only if you trust every module or path it names or receives from the pipeline", sn = /* @__PURE__ */ new Set(["pwsh", "pwsh.exe", "powershell", "powershell.exe"]);
function It(e) {
  let o = e.toLowerCase();
  if (sn.has(o)) return true;
  let r = Math.max(o.lastIndexOf("/"), o.lastIndexOf("\\"));
  if (r >= 0) return sn.has(o.slice(r + 1));
  return false;
}
var Ss = /* @__PURE__ */ new Set(["/", "\u2013", "\u2014", "\u2015"]);
function Ze(e, o, r) {
  if ((0, import_chunk_bzyb60p0.Vai)(e, o, r)) return true;
  let u = { ...e, args: e.args.map((m) => m.length > 0 && Ss.has(m[0]) ? "-" + m.slice(1) : m) };
  return (0, import_chunk_bzyb60p0.Vai)(u, o, r);
}
function ks(e) {
  if ((0, import_chunk_bzyb60p0.zai)(e, "Invoke-Expression")) return { behavior: "ask", message: "Command uses Invoke-Expression which can execute arbitrary code" };
  return { behavior: "passthrough" };
}
function Ps(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    if (o.elementType !== "CommandAst") continue;
    let r = o.elementTypes?.[0];
    if (r !== void 0 && r !== "StringConstant") return { behavior: "ask", message: "Command name is a dynamic expression which cannot be statically validated" };
  }
  return { behavior: "passthrough" };
}
function Cs(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) if (It(o.name)) {
    if (Ze(o, "-encodedcommand", "-e")) return { behavior: "ask", message: "Command uses encoded parameters which obscure intent" };
  }
  return { behavior: "passthrough" };
}
function xs(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) if (It(o.name)) return { behavior: "ask", message: "Command spawns a nested PowerShell process which cannot be validated" };
  return { behavior: "passthrough" };
}
var Ts = /* @__PURE__ */ new Set(["invoke-webrequest", "iwr", "invoke-restmethod", "irm", "new-object", "start-bitstransfer"]);
function on(e) {
  return Ts.has(e.toLowerCase());
}
function rn(e) {
  let o = e.toLowerCase();
  return o === "invoke-expression" || o === "iex";
}
function As(e) {
  for (let r of e.statements) {
    let u = r.commands;
    if (u.length < 2) continue;
    let m = u.some((w) => on(w.name)), g = u.some((w) => rn(w.name));
    if (m && g) return { behavior: "ask", message: "Command downloads and executes remote code" };
  }
  let o = (0, import_chunk_bzyb60p0.w6)(e);
  if (o.some((r) => on(r.name)) && o.some((r) => rn(r.name))) return { behavior: "ask", message: "Command downloads and executes remote code" };
  return { behavior: "passthrough" };
}
function Es(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase();
    if (r === "start-bitstransfer") return { behavior: "ask", message: "Command downloads files via BITS transfer" };
    if (r === "certutil" || r === "certutil.exe") {
      if (o.args.some((m) => {
        let g = m.toLowerCase();
        return g === "-urlcache" || g === "/urlcache";
      })) return { behavior: "ask", message: "Command uses certutil to download from a URL" };
    }
    if (r === "bitsadmin" || r === "bitsadmin.exe") {
      if (o.args.some((u) => u.toLowerCase() === "/transfer")) return { behavior: "ask", message: "Command downloads files via BITS transfer" };
    }
  }
  return { behavior: "passthrough" };
}
function _s(e) {
  if ((0, import_chunk_bzyb60p0.zai)(e, "Add-Type")) return { behavior: "ask", message: "Command compiles and loads .NET code" };
  return { behavior: "passthrough" };
}
var Is = "tengu_prancy_lantern";
function Os(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    if (o.name.toLowerCase() !== "new-object") continue;
    if (Ze(o, "-comobject", "-com")) return { behavior: "ask", message: "Command instantiates a COM object which may have execution capabilities" };
    let r;
    for (let u = 0; u < o.args.length; u++) {
      let m = o.args[u], g = m.toLowerCase();
      if (g.startsWith("-t") && g.includes(":")) {
        let w = m.indexOf(":"), b = g.slice(0, w);
        if ("-typename".startsWith(b)) {
          r = m.slice(w + 1);
          break;
        }
      }
      if (g.startsWith("-t") && "-typename".startsWith(g) && o.args[u + 1] !== void 0) {
        r = o.args[u + 1];
        break;
      }
    }
    if (r === void 0) {
      let u = /* @__PURE__ */ new Set(["-argumentlist", "-comobject", "-property"]), m = /* @__PURE__ */ new Set(["-strict"]);
      for (let g = 0; g < o.args.length; g++) {
        let w = o.args[g];
        if (w.startsWith("-")) {
          let b = w.toLowerCase();
          if (b.startsWith("-t") && "-typename".startsWith(b)) {
            g++;
            continue;
          }
          let h = w.indexOf(":");
          if (h !== -1) {
            if ((0, import_chunk_bzyb60p0.Tie)(w.slice(h + 1)) === "" && (0, import_chunk_sghy0qej.Pe)(Is, { safe: true })) return { behavior: "ask", message: `New-Object argument '${w}' has nothing after its colon, so Claude Code cannot tell which .NET type this command would create` };
            continue;
          }
          if (m.has(b)) continue;
          if (u.has(b)) {
            g++;
            continue;
          }
          continue;
        }
        r = w;
        break;
      }
    }
    if (r !== void 0 && !Et(r)) return { behavior: "ask", message: `New-Object instantiates .NET type '${r}' outside the ConstrainedLanguage allowlist` };
  }
  return { behavior: "passthrough" };
}
function Ds(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase(), u = import_chunk_bzyb60p0.fye[r]?.toLowerCase() ?? r;
    if (!import_chunk_ysm157pk.aei.has(u)) continue;
    if (Ze(o, "-filepath", "-f") || Ze(o, "-literalpath", "-l")) return { behavior: "ask", message: `${o.name} -FilePath executes an arbitrary script file` };
    for (let m = 0; m < o.args.length; m++) {
      let g = o.elementTypes?.[m + 1], w = o.args[m];
      if (g === "StringConstant" && w && !w.startsWith("-")) return { behavior: "ask", message: `${o.name} with positional string argument binds to -FilePath and executes a script file` };
    }
  }
  return { behavior: "passthrough" };
}
function Ls(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase();
    if ((import_chunk_bzyb60p0.fye[r]?.toLowerCase() ?? r) !== "foreach-object") continue;
    if (Ze(o, "-membername", "-m")) return { behavior: "ask", message: "ForEach-Object -MemberName invokes methods by string name which cannot be validated" };
    for (let m = 0; m < o.args.length; m++) {
      let g = o.elementTypes?.[m + 1], w = o.args[m];
      if (g === "StringConstant" && w && !w.startsWith("-")) return { behavior: "ask", message: "ForEach-Object with positional string argument binds to -MemberName and invokes methods by name" };
    }
  }
  return { behavior: "passthrough" };
}
function Ms(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase();
    if (r !== "start-process" && r !== "saps" && r !== "start") continue;
    if (Ze(o, "-Verb", "-v") && o.args.some((u) => u.toLowerCase() === "runas")) return { behavior: "ask", message: "Command requests elevated privileges" };
    if (o.children) for (let u = 0; u < o.args.length; u++) {
      let m = (0, import_chunk_bzyb60p0.cR)(o.args[u].replace(/`[\r\n]+\s*/g, ""));
      if (!/^[-\u2013\u2014\u2015/]v[a-z]*:/i.test(m)) continue;
      let g = o.children[u];
      if (!g) continue;
      for (let w of g) if ((0, import_chunk_bzyb60p0.cR)(w.text).replace(/['"\u2018-\u201F\s]/g, "").toLowerCase() === "runas") return { behavior: "ask", message: "Command requests elevated privileges" };
    }
    if (o.args.some((u) => {
      let m = (0, import_chunk_bzyb60p0.cR)(u.replace(/`[\r\n]+\s*/g, ""));
      return /^[-\u2013\u2014\u2015/]v[a-z]*:['"` \u2018-\u201f]*runas['"` \u2018-\u201f]*$/i.test(m);
    })) return { behavior: "ask", message: "Command requests elevated privileges" };
    for (let u of o.args) {
      let m = (0, import_chunk_bzyb60p0.TW)(u);
      if (It(m)) return { behavior: "ask", message: "Start-Process launches a nested PowerShell process which cannot be validated" };
    }
  }
  return { behavior: "passthrough" };
}
var an = /* @__PURE__ */ new Set(["where-object", "sort-object", "select-object", "group-object", "format-table", "format-list", "format-wide", "format-custom"]);
function Ns(e) {
  if (!(0, import_chunk_bzyb60p0.PTe)(e).hasScriptBlocks) return { behavior: "passthrough" };
  for (let u of (0, import_chunk_bzyb60p0.w6)(e)) {
    let m = u.name.toLowerCase();
    if (import_chunk_ysm157pk.lei.has(m)) return { behavior: "ask", message: "Command contains script block with dangerous cmdlet that may execute arbitrary code" };
  }
  if ((0, import_chunk_bzyb60p0.w6)(e).every((u) => {
    let m = u.name.toLowerCase();
    if (an.has(m)) return true;
    let g = import_chunk_bzyb60p0.fye[m];
    if (g && an.has(g.toLowerCase())) return true;
    return false;
  })) return { behavior: "passthrough" };
  return { behavior: "ask", message: "Command contains script block that may execute arbitrary code" };
}
function Fs(e) {
  if ((0, import_chunk_bzyb60p0.PTe)(e).hasSubExpressions) return { behavior: "ask", message: "Command contains subexpressions $()" };
  return { behavior: "passthrough" };
}
function Ws(e) {
  if ((0, import_chunk_bzyb60p0.PTe)(e).hasExpandableStrings) return { behavior: "ask", message: "Command contains expandable strings with embedded expressions" };
  return { behavior: "passthrough" };
}
function $s(e) {
  if ((0, import_chunk_bzyb60p0.PTe)(e).hasSplatting) return { behavior: "ask", message: "Command uses splatting (@variable)" };
  return { behavior: "passthrough" };
}
function Bs(e) {
  if ((0, import_chunk_bzyb60p0.PTe)(e).hasStopParsing) return { behavior: "ask", message: "Command uses stop-parsing token (--%)" };
  return { behavior: "passthrough" };
}
function js(e) {
  if ((0, import_chunk_bzyb60p0.PTe)(e).hasMemberInvocations) return { behavior: "ask", message: "Command invokes .NET methods" };
  return { behavior: "passthrough" };
}
function zs(e) {
  for (let o of e.typeLiterals ?? []) if (!Et(o)) return { behavior: "ask", message: `Command uses .NET type [${o}] outside the ConstrainedLanguage allowlist` };
  return { behavior: "passthrough" };
}
function qs(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase();
    if (r === "invoke-item" || r === "ii") return { behavior: "ask", message: "Invoke-Item opens files with the default handler (ShellExecute). On executable files this runs arbitrary code." };
  }
  return { behavior: "passthrough" };
}
var Gs = /* @__PURE__ */ new Set(["register-scheduledtask", "new-scheduledtask", "new-scheduledtaskaction", "set-scheduledtask"]);
function Ks(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase();
    if (Gs.has(r)) return { behavior: "ask", message: `${o.name} creates or modifies a scheduled task (persistence primitive)` };
    if (r === "schtasks" || r === "schtasks.exe") {
      if (o.args.some((u) => {
        let m = u.toLowerCase();
        return m === "/create" || m === "/change" || m === "-create" || m === "-change";
      })) return { behavior: "ask", message: "schtasks with create/change modifies scheduled tasks (persistence primitive)" };
    }
  }
  return { behavior: "passthrough" };
}
var Ys = /* @__PURE__ */ new Set(["set-item", "si", "new-item", "ni", "remove-item", "ri", "del", "rm", "rd", "rmdir", "erase", "clear-item", "cli", "set-content", "add-content", "ac"]);
function Qs(e) {
  let o = (0, import_chunk_bzyb60p0.m2a)(e, "env");
  if (o.length === 0) return { behavior: "passthrough" };
  for (let r of (0, import_chunk_bzyb60p0.w6)(e)) if (Ys.has(r.name.toLowerCase())) return { behavior: "ask", message: "Command modifies environment variables" };
  if ((0, import_chunk_bzyb60p0.PTe)(e).hasAssignments && o.length > 0) return { behavior: "ask", message: "Command modifies environment variables" };
  return { behavior: "passthrough" };
}
function Xs(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase();
    if (import_chunk_ysm157pk.dei.has(r)) return { behavior: "ask", message: "Command loads, installs, or downloads a PowerShell module or script, which can execute arbitrary code" };
    if ((r === "module" || (import_chunk_bzyb60p0.fye[r]?.toLowerCase() ?? r) === "get-module") && (0, import_chunk_x0nfhv1g.T9r)()) return { behavior: "ask", message: _t, ruleProof: true };
  }
  return { behavior: "passthrough" };
}
var Zs = /* @__PURE__ */ new Set(["set-alias", "sal", "new-alias", "nal", "set-variable", "sv", "new-variable", "nv"]);
function Js(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase(), u = r.includes("\\") ? r.slice(r.lastIndexOf("\\") + 1) : r;
    if (Zs.has(u)) return { behavior: "ask", message: "Command creates or modifies an alias or variable that can affect future command resolution" };
  }
  return { behavior: "passthrough" };
}
var eo = /* @__PURE__ */ new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim"]);
function to(e) {
  for (let o of (0, import_chunk_bzyb60p0.w6)(e)) {
    let r = o.name.toLowerCase();
    if (eo.has(r)) return { behavior: "ask", message: `${o.name} can spawn arbitrary processes via WMI/CIM (Win32_Process Create)` };
    let u = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\")), m = u >= 0 ? r.slice(u + 1) : r;
    if (m === "wmic" || m === "wmic.exe") return { behavior: "ask", message: "wmic can spawn arbitrary processes (process call create), execute scripts (/format, /translate XSL), or write arbitrary files (/output, /append, /record) via WMI" };
  }
  return { behavior: "passthrough" };
}
function ln(e, o) {
  if (!o.valid) return { behavior: "ask", message: "Could not parse command for security analysis" };
  let r = [ks, Ps, Cs, xs, As, Es, _s, Os, Ds, qs, Ks, Ls, Ms, Ns, Fs, Ws, $s, Bs, js, zs, Qs, Xs, Js, to];
  for (let u of r) {
    let m = u(o);
    if (m.behavior === "ask") return m;
  }
  return { behavior: "passthrough" };
}
var oo = /(?<![\w-])(?:get-module|gmo|module)(?![\w-])/i, Ot = /* @__PURE__ */ new Set(["new-item", "set-content", "add-content", "out-file", "copy-item", "move-item", "rename-item", "expand-archive", "invoke-webrequest", "invoke-restmethod", "tee-object", "export-csv", "export-clixml"]), ro = /* @__PURE__ */ new Set(["get-uptime", "join-string"]), ao = /* @__PURE__ */ new Set(["tar", "tar.exe", "bsdtar", "bsdtar.exe", "unzip", "unzip.exe", "7z", "7z.exe", "7za", "7za.exe", "gzip", "gzip.exe", "gunzip", "gunzip.exe", "expand-archive"]), lo = /* @__PURE__ */ new Set(["xcopy", "xcopy.exe", "robocopy", "robocopy.exe"]);
function co(e) {
  let o = e.name.toLowerCase(), r = o.slice(Math.max(o.lastIndexOf("\\"), o.lastIndexOf("/")) + 1);
  return lo.has(r);
}
async function cn(e) {
  let o = e.trim();
  if (!o) return "";
  let r = await (0, import_chunk_bzyb60p0.knt)(o);
  return (0, import_chunk_bzyb60p0.Gai)(r)[0] ?? "";
}
function ft(e) {
  return (0, import_chunk_xcgcdx61.Gut)(e);
}
function un(e, o = (0, import_chunk_x0nfhv1g.Ctt)()) {
  let r = (0, import_chunk_x0nfhv1g.gei)(), u = r ? e.replace(import_chunk_bzyb60p0.f2a, "") : e.trimStart(), m = u[0];
  if (m === '"' || m === "'") {
    let g = u.indexOf(m, 1), w = g === -1 ? u.length : g + 1;
    return o(u.slice(0, w));
  }
  return o(u.split(r ? import_chunk_bzyb60p0.kir : /\s+/)[0] ?? "");
}
function Lt(e) {
  let o = e.length;
  while (o > 0 && /[\s\u0085\u180e]/.test(e[o - 1])) o--;
  return o;
}
function ot(e) {
  return e.slice(0, Lt(e)).replace(/^[\s\u0085\u180e]+/, "");
}
function pn(e) {
  let o = e, r = o.match(/^[\s\u0085\u180e]+/);
  if (r && /[\u0085\u180e]/.test(r[0])) o = o.slice(r[0].length);
  let u = o.slice(Lt(o));
  if (/[\u0085\u180e]/.test(u)) o = o.slice(0, o.length - u.length);
  return o;
}
function st(e) {
  let o = e, r = o.match(/^[\s\u0085\u180e]+/);
  if (r && /[\u0085\u180e]/.test(r[0])) o = r[0].replace(/[\u0085\u180e]/g, "") + o.slice(r[0].length);
  let u = o.slice(Lt(o));
  if (/[\u0085\u180e]/.test(u)) o = o.slice(0, o.length - u.length) + u.replace(/[\u0085\u180e]/g, "");
  return o;
}
function Me(e) {
  if (e.includes(`
`) || e.includes("*")) return [];
  return (0, import_chunk_xcgcdx61.Vgn)(import_chunk_rb36kwbn.yt, ot(e));
}
var uo = "", mo = "", po = "", fo = /('(?:[^']|'')*'|"(?:[^"]|"")*"|[^\s'"]+)(?:\s+|$)/g;
function fn(e) {
  return e.map((o) => o.replace(/\s/g, (r) => r === " " ? uo : mo) || po).join(" ");
}
function ho(e) {
  let o = ft(st(e)), r = o.type === "exact" ? o.command : o.type === "prefix" ? o.prefix : o.pattern, u = Array.from(r.matchAll(fo));
  if (!/['"]/.test(r) || r.includes("`") || u.reduce((w, [b]) => w + b.length, 0) !== r.length) return;
  let m = u.map(([, w = ""]) => (0, import_chunk_bzyb60p0.Cie)(w.startsWith("'") ? w.slice(1, -1).replaceAll("''", "'") : w.startsWith('"') ? w.slice(1, -1).replaceAll('""', '"') : w)), g = fn(m) + (o.type === "prefix" ? ":*" : "");
  return ft(g).type === o.type ? g : void 0;
}
function pt(e, o, r, u) {
  let m = ot(e.command), g = u === "allow" && (0, import_chunk_x0nfhv1g.W3o)(), w = u === "allow" ? (0, import_chunk_x0nfhv1g.Ctt)(g) : (0, import_chunk_x0nfhv1g._ei)(), b = u === "allow" && !g ? (U) => U : w, h = !g;
  function _(U, z) {
    return w(U) === w(z);
  }
  function T(U, z) {
    return w(U).startsWith(w(z));
  }
  function k(U) {
    if (u === "allow") return U;
    return (0, import_chunk_bzyb60p0.S7o)(U);
  }
  let R = m.split(import_chunk_bzyb60p0.$Ue)[0] ?? "", L = (0, import_chunk_bzyb60p0.S7o)(R), I = (0, import_chunk_x0nfhv1g.hE)(L, w), O = m.slice(R.length).replace(/^[\s\u0085\u180e]+/, " "), F = I + O;
  return Array.from(o.entries()).filter(([U]) => {
    let z = ft(st(U)), N = z.type === "exact" ? { ...z, command: pn(U) } : z.type === "prefix" ? { ...z, prefix: st(z.prefix) } : z.type === "wildcard" ? { ...z, pattern: st(z.pattern) } : z;
    function G(W) {
      switch (N.type) {
        case "exact":
          return _(N.command, W);
        case "prefix":
          switch (r) {
            case "exact":
              return _(N.prefix, W);
            case "prefix": {
              if (_(W, N.prefix)) return true;
              return T(W, N.prefix + " ");
            }
          }
          break;
        case "wildcard":
          if (r === "exact") return false;
          return (0, import_chunk_xcgcdx61.E8)(b(N.pattern), b(W), h, true);
      }
    }
    if (G(m)) return true;
    if (G(F)) return true;
    if (N.type === "exact") {
      let W = N.command.split(import_chunk_bzyb60p0.$Ue)[0] ?? "";
      if ((0, import_chunk_x0nfhv1g.hE)(k(W), w) === I) {
        let V = N.command.slice(W.length).replace(/^[\s\u0085\u180e]+/, " ");
        if (_(V, O)) return true;
      }
    } else if (N.type === "prefix") {
      let W = N.prefix.split(import_chunk_bzyb60p0.$Ue)[0] ?? "";
      if ((0, import_chunk_x0nfhv1g.hE)(k(W), w) === I) {
        let V = N.prefix.slice(W.length).replace(/^[\s\u0085\u180e]+/, " "), q = I + V;
        if (r === "exact") {
          if (_(q, F)) return true;
        } else if (_(F, q) || T(F, q + " ")) return true;
      }
    } else if (N.type === "wildcard") {
      let W = N.pattern.split(import_chunk_bzyb60p0.$Ue)[0] ?? "";
      if ((0, import_chunk_x0nfhv1g.hE)(k(W), w) === I && r !== "exact") {
        let V = N.pattern.slice(W.length).replace(/^[\s\u0085\u180e]+/, " "), q = I + V;
        if ((0, import_chunk_xcgcdx61.E8)(b(q), b(F), h, true)) return true;
      }
    }
    return false;
  }).map(([, U]) => U);
}
function je(e, o, r) {
  let u = (0, import_chunk_ht27b0vz.Gk)(o, import_chunk_rb36kwbn.yt, "deny"), m = pt(e, u, r, "deny"), g = (0, import_chunk_ht27b0vz.Gk)(o, import_chunk_rb36kwbn.yt, "ask"), w = pt(e, g, r, "ask"), b = (0, import_chunk_ht27b0vz.Gk)(o, import_chunk_rb36kwbn.yt, "allow"), h = pt(e, b, r, "allow");
  return { matchingDenyRules: m, matchingAskRules: w, matchingAllowRules: h };
}
function hn(e, o) {
  let r = ot(e.command), u = { ...e, command: r }, { matchingDenyRules: m, matchingAskRules: g, matchingAllowRules: w } = je(u, o, "exact");
  if (m[0] !== void 0) return { behavior: "deny", message: `Permission to use ${import_chunk_rb36kwbn.yt} with command ${r} has been denied.`, decisionReason: { type: "rule", rule: m[0] } };
  if (g[0] !== void 0) return { behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt), decisionReason: { type: "rule", rule: g[0] } };
  if (w[0] !== void 0) return { behavior: "allow", updatedInput: e, decisionReason: { type: "rule", rule: w[0] } };
  let b = { type: "other", reason: "This command requires approval" };
  return { behavior: "passthrough", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, b), decisionReason: b, suggestions: Me(r) };
}
function dn(e, o) {
  let r = ot(e.command), u = { ...e, command: r }, m = hn(e, o), g = (0, import_chunk_p1ewvgeh.wEr)(m);
  if (m.behavior === "deny" || m.behavior === "ask" && !g) return m;
  let { matchingDenyRules: w, matchingAskRules: b, matchingAllowRules: h } = je(u, o, "prefix");
  if (w[0] !== void 0) return { behavior: "deny", message: `Permission to use ${import_chunk_rb36kwbn.yt} with command ${r} has been denied.`, decisionReason: { type: "rule", rule: w[0] } };
  if (g) return m;
  if (b[0] !== void 0) return { behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt), decisionReason: { type: "rule", rule: b[0] } };
  if (m.behavior === "allow") return m;
  if (h[0] !== void 0) return { behavior: "allow", updatedInput: e, decisionReason: { type: "rule", rule: h[0] } };
  let _ = { type: "other", reason: "This command requires approval" };
  return { behavior: "passthrough", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, _), decisionReason: _, suggestions: Me(r) };
}
var go = "tengu_plumb_kestrel";
async function wo(e, o) {
  if (!e.valid) return [{ text: o, element: { name: await cn(o), nameType: "unknown", elementType: "CommandAst", args: [], text: o }, statement: null, isSafeOutput: false }];
  let r = [];
  for (let u of e.statements) {
    for (let m of u.commands) {
      if (m.elementType !== "CommandAst") continue;
      r.push({ text: m.text, element: m, statement: u, isSafeOutput: m.nameType !== "application" && (0, import_chunk_x0nfhv1g.XCn)(m.name) && m.args.length === 0 });
    }
    if (u.nestedCommands) for (let m of u.nestedCommands) r.push({ text: m.text, element: m, statement: u, isSafeOutput: m.nameType !== "application" && (0, import_chunk_x0nfhv1g.XCn)(m.name) && m.args.length === 0 });
  }
  if (r.length > 0) return r;
  return [{ text: o, element: { name: await cn(o), nameType: "unknown", elementType: "CommandAst", args: [], text: o }, statement: null, isSafeOutput: false }];
}
function bo(e, o) {
  let r = (0, import_chunk_bzyb60p0.cR)(e), u = r.replace(/[\uff3c\ufe68\u2216\u00a5\u20a9]/g, "\\").replace(/[\uff0f\u2215\u2044\u00b4]/g, "/"), m = u.replace(/[\uff01-\uff5e]/g, (w) => String.fromCharCode(w.charCodeAt(0) - 65248)).replace(/[\u02ba\u030e\u2018-\u201f]/g, '"'), g = m.replace(/[\u0589\u2236]/g, ":").replace(/\u037e/g, ";").replace(/[\u2017\u2261\u2264\u2265\u2550]/g, "=");
  return (0, import_chunk_p1ewvgeh.dM)(g, true) || [...u.matchAll(/[\\/]{2,}/g)].some((w) => !r.startsWith(w[0], w.index)) || [g.replace(/(?!\s)[\u0080-\uffff]/g, "?"), m.replace(/(?!\s)[\u0080-\uffff]/g, "?"), u.replace(/[\u0080-\uffff]/g, "?"), u.replace(/[\u{80}-\u{10ffff}]/gu, "?")].some((w) => /(?:^|[\s"',;=@])(?:(?:\/[A-Za-z]*|[-?])[-A-Za-z?]{1,2}:["']?(?:\\\?\?\\|[\\/]{2})|["']?\\\?\?\\)/.test(o ? w.replaceAll("-", "?") : w));
}
async function wn(e, o) {
  let r = (0, import_chunk_bz1f2qnq.Z)(o);
  if (r.bashCommandClamps !== void 0 && r.bashCommandClamps.length > 0) return { behavior: "deny", message: "Permission to use PowerShell has been denied: this agent carries a per-spawn bashCommandClamp, which scopes shell execution to a fixed set of Bash command forms \u2014 PowerShell commands cannot match them. Use the clamped Bash forms instead.", decisionReason: { type: "other", reason: import_chunk_pbteexar.d_n } };
  let u = ot(e.command);
  if (!u) return { behavior: "allow", updatedInput: e, decisionReason: { type: "other", reason: "Empty command is safe" } };
  let m = await (0, import_chunk_bzyb60p0.knt)(u), g = nn(m);
  try {
    let w = await yo(e, u, m, o, r);
    if (g === void 0) return w;
    return w.behavior === "deny" ? { ...w, message: `${w.message} ${g.message}` } : g;
  } catch (w) {
    if (g === void 0 || o.abortController.signal.aborted && (0, import_chunk_jv7av99m.Fe)(w)) throw w;
    return (0, import_chunk_k449cc64.i)(w), g;
  }
}
function bn(e) {
  let o = (0, import_chunk_bz1f2qnq.Z)(e).bashCommandClamps;
  if (o !== void 0 && o.length > 0) return { behavior: "deny", message: "The PowerShell permission check crashed and this agent carries a per-spawn bashCommandClamp; denying rather than running an unverified command.", decisionReason: { type: "other", reason: import_chunk_pbteexar.LDr } };
  return;
}
async function yo(e, o, r, u, m) {
  let g = { ...e, command: o }, w = hn(e, m);
  if (w.behavior === "deny") return w;
  let { matchingDenyRules: b, matchingAskRules: h } = je(g, m, "prefix");
  if (b[0] !== void 0) return { behavior: "deny", message: `Permission to use ${import_chunk_rb36kwbn.yt} with command ${o} has been denied.`, decisionReason: { type: "rule", rule: b[0] } };
  if (r.errors[0]?.errorId === import_chunk_bzyb60p0.RJr) {
    let y = (0, import_chunk_x0nfhv1g._ei)()((0, import_chunk_bzyb60p0.Cie)(o)).replace(/[`^]/g, "").replace(/[*\d]?>&[12]/g, " "), C = `${y.replace(/['"\u2018-\u201f]/g, "")} ${y.replace(/['"\u2018-\u201f]/g, " ")}`, j = [C, ...(C.match(/[\w-]+/g) ?? []).map((H) => (0, import_chunk_x0nfhv1g.hE)(H))].join(" ");
    if (/`u\{|[`^][\r\n]/i.test(o) || /\b(?:remove-item|cmd)\b/.test(j) || (0, import_chunk_ht27b0vz.Vs)(m).some(({ ruleValue: { toolName: H, ruleContent: X } }) => X !== void 0 && [import_chunk_rb36kwbn.yt, import_chunk_k883m4fq.De, import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt].includes(H))) {
      let H = `${r.errors[0].message} It was not run, because a deny rule is set, or it may remove something or hide what it runs. To run it, reword it without those words.`;
      return { behavior: "deny", message: H, decisionReason: { type: "other", reason: H, standsForDenyRules: true } };
    }
  }
  let _ = null;
  if (h[0] !== void 0) _ = { behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt), decisionReason: { type: "rule", rule: h[0] } };
  if (_ === null && (0, import_chunk_p1ewvgeh.dM)(o)) _ = { behavior: "ask", message: "Command contains a UNC path that could trigger network requests" };
  let T = w.behavior === "allow" && !r.valid && (0, import_chunk_x0nfhv1g.T9r)() && [o, (0, import_chunk_bzyb60p0.cR)(o), (0, import_chunk_bzyb60p0.TW)((0, import_chunk_bzyb60p0.cR)(o))].some((y) => oo.test(y));
  if (w.behavior === "allow" && !r.valid && r.errors[0]?.errorId !== import_chunk_bzyb60p0.RJr && _ === null && (0, import_chunk_bzyb60p0.jai)(o.split(import_chunk_bzyb60p0.$Ue)[0] ?? "") !== "application" && !T) return w;
  if (!r.valid) {
    let y = (0, import_chunk_bzyb60p0.cR)(o.replace(/<#[\s\S]*?#>/g, " ").replace(/`[\r\n]+\s*/g, "")), C = false, j, H = h[0];
    for (let ae of y.split(/[;|\n\r{}()&]+/)) {
      let Q = ae.trim();
      if (!Q) continue;
      let ee = Q.split(import_chunk_bzyb60p0.$Ue);
      for (let oe = 0; oe < ee.length; oe++) {
        let te = ee[oe], ye = (0, import_chunk_bzyb60p0.TW)(te);
        if (!ye) continue;
        if (j === void 0 && !import_chunk_bzyb60p0.que.has(te[0] ?? "") && Qe(te)) j = te;
        if ((0, import_chunk_x0nfhv1g.hE)(ye) === "remove-item") {
          C = true;
          for (let Ve of ee.slice(oe + 1)) {
            if (import_chunk_bzyb60p0.que.has(Ve[0] ?? "")) continue;
            if (Qe(Ve)) return xe(Ve);
          }
        }
        let Ge = ee.slice(oe + 1), _e = Ge.filter((Ve) => !(0, import_chunk_x0nfhv1g.E9r)((0, import_chunk_bzyb60p0.Cie)((0, import_chunk_bzyb60p0.TW)(Ve))) && !(0, import_chunk_x0nfhv1g.hei)(Ve)), Oe = _e.length === Ge.length ? [Ge] : [Ge, _e];
        for (let Ve of /* @__PURE__ */ new Set([ye, (0, import_chunk_bzyb60p0.Kue)(te), (0, import_chunk_bzyb60p0.xTe)(te)])) for (let xn of Oe) {
          let Tn = [Ve, ...xn].join(" "), { matchingDenyRules: Nt, matchingAskRules: An } = je({ command: Tn }, m, "prefix");
          if (Nt[0] !== void 0) return { behavior: "deny", message: `Permission to use ${import_chunk_rb36kwbn.yt} with command ${o} has been denied.`, decisionReason: { type: "rule", rule: Nt[0] } };
          H ??= An[0];
        }
      }
    }
    if (C && j !== void 0) return xe(j);
    let X = (ae) => H !== void 0 && ae.behavior === "ask" && !(0, import_chunk_bzyb60p0.Kw)(ae) ? { ...ae, matchedAskRule: H } : ae;
    if (r.errors[0]?.errorId === import_chunk_bzyb60p0.RJr) {
      let ae = `${r.errors[0].message} Allow it only if you trust it.`, Q = m.blockReadsOutsideWorkingDirectories === true;
      return X({ behavior: "ask", message: ae, decisionReason: { type: "safetyCheck", reason: ae, classifierApprovable: false, circuitBreaker: Q ? "outsideReadsBlocked" : "unfinishedCheck", ...Q && { also: ["unfinishedCheck"] } }, suppressAlwaysAllowRule: true });
    }
    if (_ !== null) return X(_);
    let se = T ? _t : `Command contains malformed syntax that cannot be parsed: ${r.errors[0]?.message ?? "unknown error"}`;
    if (m.blockReadsOutsideWorkingDirectories === true) return (0, import_chunk_pbteexar.joe)(se);
    let Y = { type: "other", reason: se }, J = { behavior: "ask", decisionReason: Y, message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, Y) };
    return X({ ...J, decisionReason: { type: "subcommandResults", reasons: /* @__PURE__ */ new Map([[o, J]]) } });
  }
  let k = await wo(r, o), R = [];
  if (_ !== null) R.push(_);
  let L = ln(o, r);
  if (L.behavior !== "passthrough") if (m.blockReadsOutsideWorkingDirectories === true) R.push((0, import_chunk_pbteexar.joe)(L.message));
  else {
    let y = { type: "other", reason: L.message };
    R.push({ behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, y), decisionReason: y, suggestions: L.ruleProof ? [] : Me(o) });
  }
  if (r.hasUsingStatements) {
    let y = { type: "other", reason: "Command contains a `using` statement that may load external code (module or assembly)" };
    R.push({ behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, y), decisionReason: y, suggestions: Me(o) });
  }
  if (r.hasScriptRequirements) {
    let y = { type: "other", reason: "Command contains a `#Requires` directive that may trigger module loading" };
    R.push({ behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, y), decisionReason: y, suggestions: Me(o) });
  }
  if (r.hasBackgroundJob) {
    let y = { type: "other", reason: "Command uses the background job operator (`&`) which spawns a child PowerShell process" };
    R.push({ behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, y), decisionReason: y, suggestions: Me(o) });
  }
  let I = /^(?:[\w.]+\\)?(env|hklm|hkcu|function|alias|variable|cert|wsman|registry)::?/i;
  function O(y) {
    let C = y;
    if (C.length > 0 && (import_chunk_bzyb60p0.que.has(C[0]) || C[0] === "/")) {
      let j = C.indexOf(":", 1);
      if (j > 0 && (C[0] !== "/" || /^\/[A-Za-z]{1,2}:/.test(C))) C = C.substring(j + 1);
    }
    return (0, import_chunk_bzyb60p0.cR)(C.replace(/`[\r\n]+\s*/g, ""));
  }
  function F(y) {
    let C = O(y);
    if (I.test(C)) return { behavior: "ask", message: `Command argument '${y}' uses a non-filesystem provider path and requires approval` };
    if (U(C)) return { behavior: "ask", message: `Command argument '${y}' contains a UNC path that could trigger network requests` };
    return null;
  }
  function U(y) {
    if ((0, import_chunk_p1ewvgeh.dM)(y, true)) return true;
    return (0, import_chunk_cg8dqz0a.x)() === "windows" && /(?<!:)[\\/]{2}[^ \t\r\n\f\v\\/]/.test(y);
  }
  e: for (let y of r.statements) {
    for (let C of y.commands) {
      if (C.elementType !== "CommandAst") continue;
      for (let j of C.args) {
        let H = F(j);
        if (H !== null) {
          R.push(H);
          break e;
        }
      }
    }
    if (y.nestedCommands) for (let C of y.nestedCommands) for (let j of C.args) {
      let H = F(j);
      if (H !== null) {
        R.push(H);
        break e;
      }
    }
  }
  let z = new Map(Array.from((0, import_chunk_ht27b0vz.Gk)(m, import_chunk_rb36kwbn.yt, "deny")).flatMap(([y, C]) => {
    let j = ho(y);
    return j === void 0 ? [] : [[j, C]];
  }));
  for (let { text: y, element: C } of k) {
    let j = C.name !== "" ? [C.name, ...C.args].join(" ") : null, H = { command: y }, { matchingDenyRules: X, matchingAskRules: se } = je(H, m, "prefix"), Y = X[0], J = se[0], ae = C.args.filter(mn), Q = C.name !== "" && ae.length !== C.args.length ? [C.name, ...ae].join(" ") : null;
    for (let ee of [j, Q]) {
      if (Y !== void 0 || ee === null) continue;
      let { matchingDenyRules: oe, matchingAskRules: te } = je({ command: ee }, m, "prefix");
      Y = oe[0], J ??= te[0];
    }
    if (Y === void 0 && C.typedText !== void 0) {
      let ee = C.typedArgs ?? C.args, oe = [C.typedText, [C.name, ...ee].join(" "), [C.name, ...ee.filter((te, ye) => mn(C.args[ye]))].join(" ")].map((te) => je({ command: te }, m, "prefix"));
      Y = oe.flatMap((te) => te.matchingDenyRules)[0], J ??= oe.flatMap((te) => te.matchingAskRules)[0];
    }
    for (let ee of C.name === "" ? [] : [C.args, ae]) Y ??= pt({ command: fn([C.name, ...ee]) }, z, "prefix", "deny")[0];
    if (Y !== void 0) return { behavior: "deny", message: `Permission to use ${import_chunk_rb36kwbn.yt} with command ${o} has been denied.`, decisionReason: { type: "rule", rule: Y } };
    if (J !== void 0) R.push({ behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt), decisionReason: { type: "rule", rule: J } });
  }
  let N = k.length > 1 && k.some(({ element: y }) => (0, import_chunk_x0nfhv1g.v9r)(y.name)), G = k.some(({ element: y }) => wt(y)), W = k.some(({ element: y }) => (0, import_chunk_x0nfhv1g.hE)(y.name) === "git");
  if (N && W) R.push({ behavior: "ask", message: "Compound commands with cd/Set-Location and git require approval to prevent bare repository attacks" });
  let K = W && (0, import_chunk_w5s307zm.cft)();
  if (K) R.push({ behavior: "ask", message: K === "bare-indicators" ? "Git command in a directory with bare-repo indicators (HEAD/objects/refs outside a .git/ directory). Git may treat it as a git dir and run config/hooks from here." : "The .git file or symlink here redirects to a location that cannot be verified as safe (it may have been planted by an untrusted archive). Git commands need approval." });
  let V = W ? (0, import_chunk_bzyb60p0.pQo)() : void 0;
  if (W) {
    let y = k.some(({ element: H, statement: X }) => {
      for (let Y of H.redirections ?? []) if (Xe(Y.target)) return true;
      let se = (0, import_chunk_x0nfhv1g.hE)(H.name);
      if (!Ot.has(se)) return false;
      if (H.args.flatMap(ct).some((Y) => Xe(Y))) return true;
      if (se === "copy-item" || se === "move-item") {
        let Y = X === null ? -1 : X.commands.indexOf(H), J = X !== null && (Y > 0 || Y === -1 && X.commands.length > 1);
        if (Ht(H.args, J)) return true;
      }
      if (X !== null) for (let Y of X.commands) {
        if (Y.elementType === "CommandAst") continue;
        if (Xe(Y.text)) return true;
      }
      return false;
    }), C = (0, import_chunk_bzyb60p0.PJr)(r).some((H) => Xe(H.target));
    if (y || C) R.push({ behavior: "ask", message: "Command writes to a git-internal path (HEAD, objects/, refs/, hooks/, .git/) and runs git. This could plant a malicious hook that git then executes." });
    if (k.some(({ element: H }) => co(H))) R.push({ behavior: "ask", message: "Compound command runs a native file copier (xcopy/robocopy) and git. The copier can place files at git-internal paths (HEAD, objects/, refs/) that git then treats as repository state." });
  }
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && k.length > 1) {
    let y = /* @__PURE__ */ new Set();
    for (let j of (0, import_chunk_bzyb60p0.PJr)(r)) for (let H of (0, import_chunk_x0nfhv1g.U3o)(j.target)) y.add(H);
    let C = null;
    for (let { element: j } of k) {
      if ((0, import_chunk_x0nfhv1g.B3o)(j.name).some(({ base: X, stem: se }) => se !== "" && y.has(se) || X !== se && y.has(X))) {
        C = j.name;
        break;
      }
      for (let X of j.redirections ?? []) for (let se of (0, import_chunk_x0nfhv1g.U3o)(X.target)) y.add(se);
      let H = (0, import_chunk_x0nfhv1g.hE)(j.name);
      if (Ot.has(H)) for (let X of j.args.flatMap(ct)) {
        let se = X.replace(/^[-\u2013\u2014\u2015]+[A-Za-z]+:?/, ""), Y = (0, import_chunk_bzyb60p0.Tie)(se);
        if ((0, import_chunk_bzyb60p0.TW)(Y) !== "") for (let J of (0, import_chunk_x0nfhv1g.U3o)(Y)) y.add(J);
      }
    }
    if (C !== null) R.push({ behavior: "ask", message: `An earlier sub-command writes a file (./${C}.*) that would shadow the later \`${C}\` command under Windows PowerShell 5.1 cwd-first resolution.` });
  }
  if (k.some(({ element: y }) => {
    let C = y.name.toLowerCase(), j = C.slice(Math.max(C.lastIndexOf("\\"), C.lastIndexOf("/")) + 1);
    return ao.has(j);
  }) && k.length > 1) R.push({ behavior: "ask", message: W ? "Compound command extracts an archive and runs git. Archive contents may plant bare-repository indicators (HEAD, hooks/, refs/) that git then treats as the repository root." : "Compound command extracts an archive followed by other commands. Archive contents (symlinks, config files) cannot be validated and may redirect subsequent path operations." });
  if (k.some(({ element: C }) => {
    for (let H of C.redirections ?? []) if (it(H.target)) return true;
    let j = (0, import_chunk_x0nfhv1g.hE)(C.name);
    if (!Ot.has(j)) return false;
    return C.args.flatMap(ct).some(it);
  }) || (0, import_chunk_bzyb60p0.PJr)(r).some((C) => it(C.target))) R.push({ behavior: "ask", message: "Command writes to .git/ \u2014 hooks or config planted there execute on the next git operation." });
  let M = At(g, r, m, N);
  if (M.behavior !== "passthrough") R.push(M);
  if ((0, import_chunk_bzyb60p0.w6)(r).some((y) => y.typedArgs ?? y.typedText)) for (let y of [yn, vo]) {
    let C = At(g, { ...r, statements: r.statements.map((j) => ({ ...j, commands: j.commands.map((H) => y(H)), nestedCommands: j.nestedCommands?.map((H) => y(H)) })) }, m, N);
    if (C.behavior !== "passthrough") R.push(C);
  }
  let re = w.behavior === "allow" && w.decisionReason?.type === "rule" ? w.decisionReason.rule.ruleValue.ruleContent : void 0, ce = (0, import_chunk_x0nfhv1g.Ctt)(), ue = re !== void 0 && ce(pn(re).trim()) === ce(o);
  if (w.behavior === "allow" && k[0] !== void 0 && (ue || k.every((y) => y.element.nameType !== "application" && !(0, import_chunk_x0nfhv1g.KJ)(y.text, y.element)))) R.push(w);
  if (V === void 0 && (0, import_chunk_x0nfhv1g.bXt)(o, r)) R.push({ behavior: "allow", updatedInput: e, decisionReason: { type: "other", reason: import_chunk_pbteexar.PDr } });
  if ((0, import_chunk_bzyb60p0.PJr)(r).length > 0) R.push({ behavior: "ask", message: "Command contains file redirections that could write to arbitrary paths", suggestions: Me(o) });
  let me = (0, import_chunk_cg8dqz0a.x)() === "windows" && k.filter(({ element: y }) => (0, import_chunk_x0nfhv1g.fei)(y) && (y.dashFolded || y.args.some((C) => /[\u0080-\uffff]/.test(C)))).flatMap(({ element: y }) => y.args.filter((C) => bo(C, y.dashFolded)))[0];
  if (me) R.push({ behavior: "ask", message: `Command argument '${me}' could name a network or device path once Windows converts this command's characters, and requires approval` });
  let we = bt(g, r, m);
  if (we.behavior !== "passthrough") R.push(we);
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && k.some(({ element: y }) => {
    let C = (0, import_chunk_x0nfhv1g.hE)(y.name), j = y.nameType === "cmdlet" && !ro.has(C) && (Object.hasOwn(import_chunk_x0nfhv1g.$3o, C) || Object.hasOwn(tt, C));
    return y.args.some((H, X) => {
      let se = y.elementTypes?.[X + 1] === "StringConstant";
      if (se && j) return false;
      let Y = (0, import_chunk_bzyb60p0.cR)(H), J = se ? Y.replace(/(^|[^\\])"+/g, "$1") : (0, import_chunk_bzyb60p0.TW)(Y);
      return [Y, J, O(J)].some((ae) => U(ae));
    });
  })) R.push({ behavior: "ask", message: "A command argument may be read as a network (UNC) path, which could trigger network requests" });
  let Ue = R.find((y) => y.behavior === "deny");
  if (Ue !== void 0) return Ue;
  let fe = R.find((y) => y.behavior === "ask" && (0, import_chunk_pbteexar.IM)(y.decisionReason)) ?? (L.behavior === "ask" && L.ruleProof === true ? R.find((y) => y.behavior === "ask" && y.decisionReason?.type === "safetyCheck") : void 0) ?? R.find((y) => y.behavior === "ask");
  if (fe !== void 0) {
    let y = { ...fe, decisionReason: { type: "subcommandResults", reasons: /* @__PURE__ */ new Map([[o, fe]]) } };
    if (!(0, import_chunk_bzyb60p0.Kw)(y)) {
      for (let C of R) if (C.behavior === "ask" && C.decisionReason?.type === "rule" && C.decisionReason.rule.ruleBehavior === "ask") return { ...y, matchedAskRule: C.decisionReason.rule };
    }
    return y;
  }
  let ze = R.find((y) => y.behavior === "allow");
  if (ze !== void 0) return ze;
  let Ce = k.filter(({ element: y, isSafeOutput: C }) => {
    if (C) return false;
    if (y.nameType === "application") return true;
    if ((0, import_chunk_x0nfhv1g.hE)(y.name) === "set-location" && y.args.length > 0) {
      if ((0, import_chunk_sghy0qej.Pe)(go, { safe: true })) return true;
      let H = y.args.find((X) => X.length === 0 || !import_chunk_bzyb60p0.que.has(X[0]));
      if (H && (0, import_path.resolve)((0, import_chunk_18rsj2ts.pe)(), H) === (0, import_chunk_18rsj2ts.pe)()) return false;
    }
    return true;
  }), We = (y) => {
    if (y.nameType === "application") return null;
    let C = y.name.toLowerCase(), j = (0, import_chunk_x0nfhv1g.hE)(C), H = j.indexOf("-");
    return j !== C || H > 0 && import_chunk_x0nfhv1g.F3o.has(j.slice(0, H)) ? "full" : "exact";
  }, ne = [], ve = false, ge = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set();
  for (let { text: y, element: C, statement: j } of Ce) {
    if (C.typedText !== void 0) ge.add(y);
    let H = { command: y }, X = dn(H, m);
    if (X.behavior === "deny") return { behavior: "deny", message: `Permission to use ${import_chunk_rb36kwbn.yt} with command ${o} has been denied.`, decisionReason: X.decisionReason };
    if (X.behavior === "ask") {
      if (j !== null) he.add(j);
      ne.push(y);
      continue;
    }
    let se = false;
    if (X.behavior === "allow" && C.nameType === "application") {
      let Y = (0, import_chunk_x0nfhv1g.Ctt)(), J = Y(C.name), ae = Y((0, import_chunk_bzyb60p0.Kue)(un(y, Y)));
      if (J.length > 0 && ae === J) se = je(H, m, "prefix").matchingAllowRules.some((Q) => {
        let ee = ft(st(Q.ruleValue.ruleContent ?? "")), oe = ee.type === "exact" ? ee.command : ee.type === "prefix" ? ee.prefix : ee.pattern;
        return Y((0, import_chunk_bzyb60p0.Kue)(un(oe, Y))) === J;
      });
    }
    if (X.behavior === "allow" && (C.nameType !== "application" || se) && !G) {
      if ((0, import_chunk_x0nfhv1g.KJ)(y, C)) {
        if (j !== null) he.add(j);
        ne.push(y), ge.add(y);
        continue;
      }
      let Y = We(C);
      if (Y !== null && ((0, import_chunk_x0nfhv1g.QCn)(C.args, C.elementTypes, Y) || (0, import_chunk_x0nfhv1g.JCn)(C.args, C.elementTypes, Y))) {
        if (j !== null) he.add(j);
        ne.push(y), ge.add(y);
        continue;
      }
      if (C.typedText !== void 0 && dn({ command: C.typedText }, m).behavior !== "allow") {
        if (j !== null) he.add(j);
        ne.push(y);
        continue;
      }
      continue;
    }
    if (X.behavior === "allow") {
      if (j !== null) he.add(j);
      ne.push(y);
      continue;
    }
    if (j !== null && !N && !G && (0, import_chunk_x0nfhv1g.mei)(j) && (0, import_chunk_x0nfhv1g.Tgt)(C, y)) {
      if (V === void 0 || (0, import_chunk_x0nfhv1g.hE)(C.name) !== "git") {
        ve = true;
        continue;
      }
      Se.add(y);
    } else if (V !== void 0 && (0, import_chunk_x0nfhv1g.hE)(C.name) === "git" && C.typedText !== void 0 && (0, import_chunk_x0nfhv1g.Tgt)(C, y, { ignoreConvertibleArguments: true })) Se.add(y);
    if (j !== null && !N && !G) {
      if (bt({ command: y }, { valid: true, errors: [], variables: r.variables, hasStopParsing: r.hasStopParsing, originalCommand: y, statements: [j] }, m).behavior === "allow") continue;
    }
    if (j !== null) he.add(j);
    ne.push(y);
    {
      let Y = We(C);
      if (Y !== null && ((0, import_chunk_x0nfhv1g.QCn)(C.args, C.elementTypes, Y) || (0, import_chunk_x0nfhv1g.JCn)(C.args, C.elementTypes, Y))) ge.add(y);
    }
  }
  let $e = /* @__PURE__ */ new Set(), be = new Set(ne);
  for (let y of r.statements) if (!(0, import_chunk_x0nfhv1g.mei)(y) && !he.has(y) && !be.has(y.text)) ne.push(y.text), be.add(y.text), $e.add(y.text);
  if (ne.length === 0) {
    if ((0, import_chunk_bzyb60p0.PTe)(r).hasScriptBlocks) {
      let y = { behavior: "ask", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt), decisionReason: { type: "other", reason: "Pipeline consists of output-formatting cmdlets with script blocks \u2014 block content cannot be verified" } };
      return { ...y, decisionReason: { type: "subcommandResults", reasons: /* @__PURE__ */ new Map([[o, y]]) } };
    }
    return { behavior: "allow", updatedInput: e, decisionReason: { type: "other", reason: ve || (0, import_chunk_x0nfhv1g.bXt)(o, r, { ignoreConvertibleArguments: true }) ? import_chunk_pbteexar.ODr : "All pipeline commands are individually allowed" } };
  }
  let Re = { type: "other", reason: (Se.size > 0 ? V : void 0) ?? "This command requires approval", ...Se.size > 0 && { bashMissKind: "git-untrusted-checkout" } };
  if (Se.size > 0) (0, import_chunk_y53wbr8a.a)("tengu_powershell_git_untrusted_checkout", {});
  let He = [];
  for (let y of ne) {
    if ($e.has(y) && y !== o) continue;
    if (ge.has(y) && y !== o) {
      if (y === (0, import_chunk_bzyb60p0.Cie)(o)) He.push(...Me(o));
      continue;
    }
    He.push(...Me(y));
  }
  let qe = { behavior: "passthrough", message: (0, import_chunk_bzyb60p0._c)(import_chunk_rb36kwbn.yt, Re), decisionReason: Re, suggestions: Se.size > 0 ? [] : He };
  return { ...qe, decisionReason: { type: "subcommandResults", reasons: /* @__PURE__ */ new Map([[o, qe]]) } };
}
function mn(e) {
  return !(0, import_chunk_x0nfhv1g.E9r)(e) && !(0, import_chunk_x0nfhv1g.hei)(e);
}
function yn(e) {
  let { typedArgs: o, typedText: r, ...u } = e;
  return { ...u, args: o ?? u.args, text: r ?? u.text };
}
function vo(e) {
  let o = yn(e);
  if (!(0, import_chunk_x0nfhv1g.C9r)(e)) return o;
  return { ...o, elementTypes: o.elementTypes?.map((r, u) => (0, import_chunk_x0nfhv1g.grr)(o.args[u - 1] ?? "") ? "StringConstant" : r) };
}
var Sn = `
`, Po = /* @__PURE__ */ new Set(["select-string", "get-childitem", "findstr", "where.exe"]), Co = /* @__PURE__ */ new Set(["get-content", "get-item", "test-path", "resolve-path", "get-process", "get-service", "get-childitem", "get-location", "get-filehash", "get-acl", "format-hex"]), Ro = /* @__PURE__ */ new Set(["write-output", "write-host"]);
function xo(e) {
  let o = e.trim();
  if (!o) return { isSearch: false, isRead: false };
  let r = o.split(/\s*[;|]\s*/).filter(Boolean);
  if (r.length === 0) return { isSearch: false, isRead: false };
  let u = false, m = false, g = false;
  for (let w of r) {
    let b = w.trim().split(/\s+/)[0];
    if (!b) continue;
    let h = (0, import_chunk_x0nfhv1g.hE)(b);
    if (Ro.has(h)) continue;
    g = true;
    let _ = Po.has(h), T = Co.has(h);
    if (!_ && !T) return { isSearch: false, isRead: false };
    if (_) u = true;
    if (T) m = true;
  }
  if (!g) return { isSearch: false, isRead: false };
  return { isSearch: u, isRead: m };
}
var kn = 2e3, To = 1e3, Ao = ["start-sleep", "sleep"];
async function Eo(e) {
  let o = e.trim().split(/\s+/)[0];
  if (!o) return true;
  let r = (0, import_chunk_x0nfhv1g.hE)(o);
  return !Ao.includes(r);
}
function _o(e) {
  let o = e.trim().split(/[;|&\r\n]/)[0]?.trim() ?? "", r = /^(?:start-sleep|sleep)(?:\s+-s(?:econds)?)?\s+(\d+(?:\.\d*)?)\s*$/i.exec(o);
  if (!r) return null;
  let u = parseFloat(r[1]);
  if (u < import_chunk_bzyb60p0.los) return null;
  let m = e.trim().slice(o.length).replace(/^[\s;|&]+/, "");
  return m ? `Start-Sleep ${u} followed by: ${m}` : `standalone Start-Sleep ${u}`;
}
function Ne(e, o) {
  return (0, import_chunk_bzyb60p0.qm)({ command: e.command, dangerouslyDisableSandbox: e.dangerouslyDisableSandbox, shellType: "powershell" }, o);
}
function Rn() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows";
}
var Io = { supported: true, refusedInputFields: import_chunk_daz70crr.k9r, decidingInputFields: ["command", "run_in_background", "dangerouslyDisableSandbox"] }, Oo = "command contains control characters that would be hidden in the approval dialog", Do = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ command: (0, import_chunk_adx6804h.n)().refine(import_chunk_xfj2cwfv.Kx, Oo).describe("The PowerShell command to execute"), timeout: (0, import_chunk_339n78pp.z6)((0, import_chunk_adx6804h.E)().optional()).describe(`Optional timeout in milliseconds (max ${(0, import_chunk_daz70crr.hrr)()} for a foreground command)`), description: (0, import_chunk_adx6804h.n)().optional().describe("Clear, concise description of what this command does in active voice."), run_in_background: (0, import_chunk_xcgcdx61.QR)((0, import_chunk_adx6804h.P)().optional()).describe((0, import_chunk_37zqqqnw.Xdo)()), dangerouslyDisableSandbox: (0, import_chunk_xcgcdx61.QR)((0, import_chunk_adx6804h.P)().optional()).describe("Set this to true to dangerously override sandbox mode and run commands without sandboxing."), ...(0, import_chunk_bzyb60p0.JMe)() && (0, import_chunk_bzyb60p0.Zxn)(), ...Rn() && (0, import_chunk_syr33dp2.Mle)() })), Pn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_bzyb60p0.FYo)(Do(), import_chunk_daz70crr.iei)), Lo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_jg3mepas.th)() ? Pn().omit({ run_in_background: true }) : Pn()), Mo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ stdout: (0, import_chunk_adx6804h.n)().describe("The standard output of the command"), stderr: (0, import_chunk_adx6804h.n)().describe("The standard error output of the command"), interrupted: (0, import_chunk_adx6804h.P)().describe("Whether the command was interrupted"), returnCodeInterpretation: (0, import_chunk_adx6804h.n)().optional().describe("Semantic interpretation for non-error exit codes with special meaning"), isImage: (0, import_chunk_adx6804h.P)().optional().describe("Flag to indicate if stdout contains image data"), persistedOutputPath: (0, import_chunk_adx6804h.n)().optional().describe("Path to persisted full output when too large for inline"), persistedOutputSize: (0, import_chunk_adx6804h.E)().optional().describe("Total output size in bytes when persisted"), backgroundTaskId: (0, import_chunk_adx6804h.n)().optional().describe("ID of the background task if command is running in background"), backgroundedByUser: (0, import_chunk_adx6804h.P)().optional().describe("True if the user manually backgrounded the command with Ctrl+B"), backgroundedByTurnAbort: (0, import_chunk_adx6804h.P)().optional().describe("@internal True if a plugin's turn abort moved the running command to the background"), backgroundedToDeliverMessage: (0, import_chunk_adx6804h.P)().optional().describe("@internal True if the command was moved to the background so a message queued for the model could reach it"), backgroundedForAgentReport: (0, import_chunk_adx6804h.v)(true).optional().describe("@internal True if that message was a subagent's message or report, and the command had run for a minute"), timedOutAfterMs: (0, import_chunk_adx6804h.E)().optional().describe("Set when the command hit its timeout and was auto-backgrounded; the timeout value in ms"), subagentCapApplied: (0, import_chunk_adx6804h.v)(true).optional().describe("@internal True if the async subagent foreground cap shortened the command's timeout"), backgroundEndsWithFinalResponse: (0, import_chunk_adx6804h.v)(true).optional().describe("True when this backgrounded command is terminated at its caller's final response, so no completion notification can follow (a synchronous subagent's command, or a headless session that takes no further input and is not waiting for background commands); absent when the command survives"), gitOperation: (0, import_chunk_sjqze7qg.knn)().optional().describe("Structured classification of git/gh operations detected in this command (commit/push/merge/rebase/PR). Client-facing \u2014 lets clients render git activity without re-parsing stdout; not surfaced to the model.") }));
function Cn(e) {
  if ((0, import_chunk_x0nfhv1g.pNa)(e.command)) return false;
  return (0, import_chunk_x0nfhv1g.bXt)(e.command);
}
function Mt(e, o) {
  return { get session() {
    return e.session;
  }, get storageV5() {
    return e.storageV5;
  }, get agentId() {
    return e.agentId;
  }, get agentContext() {
    return e.agentContext;
  }, get agentWorktree() {
    return e.agentWorktree;
  }, get hookCaller() {
    return e.hookCaller;
  }, get agentCall() {
    return e.agentCall;
  }, get hookServesModel() {
    return e.hookServesModel;
  }, get pluginUnnamed() {
    return e.pluginUnnamed;
  }, get taskRegistry() {
    return e.taskRegistry;
  }, get messageQueue() {
    return e.messageQueue;
  }, get toolState() {
    return e.toolState;
  }, get applyFileHistoryOp() {
    return e.applyFileHistoryOp;
  }, get sessionEnvVars() {
    return e.sessionEnvVars;
  }, get markPrResolvedThisSession() {
    return e.markPrResolvedThisSession;
  }, emitToolProgress: e.emitToolProgress, get shellPermission() {
    return { ...e.shellPermission, abortController: { signal: o.signal }, toolUseId: o.toolUseId };
  }, get modelFacts() {
    return e.modelFacts;
  }, get permissions() {
    return e.permissions;
  }, get hasSpendCap() {
    return e.hasSpendCap;
  }, get toolUseId() {
    return o.toolUseId;
  }, get userTypedShellDispatch() {
    return o.userTypedShellDispatch === true;
  }, get abortController() {
    return { signal: o.signal };
  }, get innerCall() {
    return o.innerCall;
  }, get shellWallCapMs() {
    return o.shellWallCapMs;
  }, get promptShellPluginId() {
    return o.promptShellPluginId;
  }, get remoteCall() {
    return o.remoteCall;
  } };
}
var Xi = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "faa00ba8-5454-5215-85f2-caaf71050b59", name: import_chunk_rb36kwbn.yt, ruleContentField: "command", searchHint: "execute Windows PowerShell commands", enablesCodeExecution: true, get remoteExecution() {
  return Rn() ? Io : import_chunk_4vsz8a99.Cbs;
}, backgrounding: "self", get maxResultSizeChars() {
  return (0, import_chunk_c1hnv4fm.rst)();
}, persistenceThresholdCeiling: import_chunk_tt4yhkc0.LAt, strict: true, async description({ description: e }) {
  return e || "Run PowerShell command";
}, async prompt(e) {
  return (0, import_chunk_daz70crr.uNa)((0, import_chunk_bzyb60p0.oHe)(e?.tools ?? []));
}, isConcurrencySafe(e) {
  return this.isReadOnly?.(e) ?? false;
}, suppressesAllPermissionUpdates(e) {
  return (0, import_chunk_syr33dp2.Ic)(e);
}, isSearchOrReadCommand(e) {
  if (typeof e?.command !== "string") return { isSearch: false, isRead: false };
  return xo(e.command);
}, isReadOnly(e) {
  return Cn(e);
}, sandboxNetworkLists(e) {
  return (0, import_chunk_bzyb60p0._ye)(e);
}, toAutoClassifierInput(e) {
  let o = e.dangerouslyDisableSandbox, r = false, u = (0, import_chunk_bzyb60p0.FMe)(e), m = (0, import_chunk_bzyb60p0.ePn)(e);
  if (u !== void 0 || m !== void 0) return { command: e.command, ...false, ...u !== void 0 && { [import_chunk_syr33dp2.io]: u }, ...m };
  return e.command;
}, async preparePermissionMatcher({ command: e }) {
  let o = await (0, import_chunk_bzyb60p0.knt)(e);
  if (!o.valid) return () => true;
  let r = (0, import_chunk_bzyb60p0.w6)(o).flatMap((u) => {
    let m = [u.name, ...u.args].join(" "), g = [(0, import_chunk_x0nfhv1g.hE)(u.name), ...u.args].join(" ");
    return m.toLowerCase() === g ? [m] : [m, g];
  });
  return (u) => {
    let m = (0, import_chunk_xcgcdx61.UKt)(u);
    return r.some((g) => {
      if (m !== null) {
        let w = m.toLowerCase(), b = g.toLowerCase();
        return b === w || b.startsWith(`${w} `);
      }
      return (0, import_chunk_xcgcdx61.E8)(u, g, true, true);
    });
  };
}, get inputSchema() {
  return Lo();
}, get outputSchema() {
  return Mo();
}, userFacingName() {
  return "PowerShell";
}, getToolUseSummary(e) {
  if (!e?.command) return null;
  let { command: o, description: r } = e;
  if (r) return r;
  return (0, import_chunk_f64qna2j.Us)(o, import_chunk_tt4yhkc0.Yx);
}, getActivityDescription(e) {
  if (!e?.command) return "Running command";
  return `Running ${e.description ?? (0, import_chunk_f64qna2j.Us)(e.command, import_chunk_tt4yhkc0.Yx)}`;
}, isEnabled() {
  return true;
}, mapToolResultToToolResultBlockParam({ interrupted: e, stdout: o, stderr: r, isImage: u, persistedOutputPath: m, persistedOutputSize: g, backgroundTaskId: w, backgroundedByUser: b, backgroundedToDeliverMessage: h, backgroundedForAgentReport: _, backgroundedByTurnAbort: T, timedOutAfterMs: k, subagentCapApplied: R, backgroundEndsWithFinalResponse: L }, I) {
  if (u) {
    let z = (0, import_chunk_bzyb60p0.dos)(o, I);
    if (z) return z;
  }
  let O = o;
  if (m) {
    let z = o ? o.replace(/^(\s*\n)+/, "").trimEnd() : "", N = (0, import_chunk_qp5chy39.TDe)(z, import_chunk_qp5chy39.uN);
    O = (0, import_chunk_qp5chy39.FSe)({ filepath: m, originalSize: g ?? 0, isJson: false, preview: N.preview, hasMore: N.hasMore, carriedMarkers: (0, import_chunk_trwykz8a.Sd)(z), truncatedAtBytes: (g ?? 0) >= import_chunk_4f4ysf31.o4 ? import_chunk_4f4ysf31.o4 : void 0 });
  } else if (o) O = o.replace(/^(\s*\n)+/, ""), O = O.trimEnd();
  let F = r.trim();
  if (e) {
    if (r) F += Sn;
    F += "<error>Command was aborted before completion</error>";
  }
  let U = w ? (0, import_chunk_bzyb60p0.fos)({ backgroundTaskId: w, outputPath: (0, import_chunk_4f4ysf31.cp)(w), backgroundedByUser: b, backgroundedToDeliverMessage: h, backgroundedForAgentReport: _, backgroundedByTurnAbort: T, timedOutAfterMs: k, subagentCapApplied: R, noOutputSeenAtTimeout: k !== void 0 && !O, reapedAtFinalResponse: L, readToolName: import_chunk_k883m4fq.De }) : "";
  if (w && (0, import_chunk_bzyb60p0.yrt)()) return { tool_use_id: I, type: "tool_result", content: (0, import_chunk_37zqqqnw.qdo)(w, [F, U].filter(Boolean).join(`
`), { backgroundedByUser: b, ending: L ? "final_response" : void 0 }) };
  return { tool_use_id: I, type: "tool_result", content: [O, F, U].filter(Boolean).join(`
`), is_error: e };
}, create(e) {
  return { async validateInput(o, r) {
    if ((0, import_chunk_2hdy50wd.xV)() && (0, import_chunk_syr33dp2.Ic)(o)) return { result: false, message: (0, import_chunk_syr33dp2.cwe)(), errorCode: 12 };
    if ((0, import_chunk_bzyb60p0.yeo)(o.command)) return { result: false, message: import_chunk_bzyb60p0.Seo, errorCode: 13 };
    let u = (0, import_chunk_bzyb60p0.hHe)(Ne(o), o.command, false, "powershell");
    if (u !== null) return (0, import_chunk_cqa9hrgx.l)("sandbox_exec", "sandbox_policy_refusal", { tool: (0, import_chunk_78g0060s.S)("powershell") }), { result: false, message: u, errorCode: 11 };
    let m = (0, import_chunk_bzyb60p0.tPn)(o, Ne(o));
    if (m !== void 0) return m;
    if ((0, import_chunk_wwft95x8.Gd)() && !(0, import_chunk_jg3mepas.th)() && (0, import_chunk_bzyb60p0.rHe)() && r.remoteCall?.constraints.background !== "forbidden" && !o.run_in_background && r.shellWallCapMs === void 0) {
      let g = _o(o.command);
      if (g !== null) return { result: false, message: `Blocked: ${g}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\` \u2014 Monitor runs bash). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`, errorCode: 10 };
    }
    return { result: true };
  }, permissionCheckFailureDecision(o, r) {
    let u = Mt(e, r);
    return bn(u.shellPermission);
  }, async checkPermissions(o, r) {
    var _stack = [];
    try {
      let u = Mt(e, r);
      const m = __using(_stack, (0, import_chunk_bzyb60p0.SOn)({ ...r, toolState: u.toolState }, o, import_chunk_rb36kwbn.yt, () => Ne(o), void 0));
      let g = await wn(o, o.dangerouslyDisableSandbox && !Ne(o) && Ne({ ...o, dangerouslyDisableSandbox: false }) ? (0, import_chunk_bzyb60p0.rZo)(u.shellPermission) : u.shellPermission);
      if (o.dangerouslyDisableSandbox && g.behavior !== "deny" && !(0, import_chunk_bzyb60p0.V0t)(g.decisionReason) && !Ne(o) && Ne({ ...o, dangerouslyDisableSandbox: false }) && (g.behavior !== "ask" || (0, import_chunk_bzyb60p0.fOn)(g))) {
        let w = (0, import_chunk_bzyb60p0.iZo)({ toolName: import_chunk_rb36kwbn.yt, input: o, context: u.shellPermission });
        if (w) return w;
        if (g.behavior !== "ask") return { behavior: "ask", decisionReason: { type: "sandboxOverride", reason: "dangerouslyDisableSandbox" }, message: "Run outside of the sandbox" };
        return { behavior: "ask", decisionReason: { type: "sandboxOverride", reason: "dangerouslyDisableSandbox", replaces: { decisionReason: g.decisionReason, message: g.message, blockedPath: g.blockedPath } }, message: "Run outside of the sandbox" };
      }
      return g;
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }, async call(o, r) {
    var _stack = [];
    try {
      let u = Mt(e, r), { onProgress: m } = r, g = (0, import_chunk_bzyb60p0.dZo)(r.parentMessage, u.modelFacts().model), w = u.userTypedShellDispatch, b = u.remoteCall?.constraints, h = b?.sandbox === "required", _ = (0, import_chunk_bzyb60p0.Ryt)(r.permissionPhase, o), T = Ne(o, { userTypedShellDispatch: w, disableUnsandboxedCommands: h || _ });
      if (!w && (0, import_chunk_bzyb60p0.yeo)(o.command)) throw new import_chunk_jv7av99m.WE(import_chunk_bzyb60p0.Seo);
      let k = (0, import_chunk_bzyb60p0.hHe)(T, o.command, w && o.dangerouslyDisableSandbox === true, "powershell");
      if (k !== null) throw (0, import_chunk_cqa9hrgx.l)("sandbox_exec", "sandbox_policy_refusal", { tool: (0, import_chunk_78g0060s.S)("powershell") }), new import_chunk_ha393e1n.Xq(k);
      if (h) {
        let K = !T || (0, import_chunk_ha393e1n.AA)() !== "strict" || (0, import_chunk_r6r2wdsw.Np)() ? { confined: false, reason: "sandbox_unconfined" } : await (0, import_chunk_sjqze7qg._ot)();
        if (!K.confined) throw (0, import_chunk_cqa9hrgx.l)("sandbox_exec", "remote_floor_refusal"), new import_chunk_ha393e1n.Xq("This call must run inside a fully confining sandbox and none is available here. The command was not run.", K.reason);
      }
      if (_ && !T) throw (0, import_chunk_cqa9hrgx.l)("sandbox_exec", "sandbox_gone_since_check", { tool: (0, import_chunk_78g0060s.S)("powershell") }), new import_chunk_ha393e1n.Xq(import_chunk_bzyb60p0.xyt);
      let R = !w && u.innerCall !== true && u.remoteCall === void 0, L = (0, import_chunk_bzyb60p0.bOn)(_, "powershell", () => Ne(o, { userTypedShellDispatch: w, disableUnsandboxedCommands: h })) && R ? import_chunk_bzyb60p0.wOn : void 0, { abortController: I, emitToolProgress: O } = u, F = !u.agentId, U = !F || b?.pinCwd === true, z = 0, N = Math.floor(Date.now() / 1e3) * 1e3;
      const G = __using(_stack, (0, import_chunk_bzyb60p0.cZo)(u.taskRegistry), true);
      let W = false;
      try {
        let K = No({ input: o, useSandbox: T, networkLists: (0, import_chunk_bzyb60p0.nPn)(u.toolUseId, o.command), constraints: b, backgroundHeld: () => (0, import_chunk_bzyb60p0.$4e)(u) || u.agentCall?.isRestored === true, onHeldEnd: () => {
          W = true;
        }, onNote: u.remoteCall?.onNote, abortController: I, taskRegistry: u.taskRegistry, emitToolProgress: O, session: u.session, preventCwdChanges: U, isMainThread: F, subagentCapMs: (0, import_chunk_bzyb60p0.uos)(u, r.parentMessage), toolUseId: u.toolUseId, toolState: u.toolState, agentId: u.agentId, caller: (0, import_chunk_bzyb60p0.iir)(u), shellWallCapMs: u.shellWallCapMs, promptShellPluginId: u.promptShellPluginId, agentWorktree: u.agentWorktree, isolationRoot: (0, import_chunk_mndk3x2g.ape)(u), sessionEnvVars: u.sessionEnvVars }), V = (0, import_chunk_wwft95x8.Duo)(u.remoteCall !== void 0, u.hasSpendCap) ? m : void 0, q;
        do {
          if (q = await K.next(), !q.done) (0, import_chunk_bzyb60p0.$os)(u);
          if (!q.done && V) {
            let C = q.value;
            V({ type: "progress", toolUseID: `ps-progress-${z++}`, data: { type: "powershell_progress", output: C.output, fullOutput: C.fullOutput, elapsedTimeSeconds: C.elapsedTimeSeconds, totalLines: C.totalLines, totalBytes: C.totalBytes, timeoutMs: C.timeoutMs, taskId: C.taskId } });
          }
        } while (!q.done);
        let M = q.value;
        G.track(M);
        let re = M.code === 0 && !M.stdout && M.stderr && !M.backgroundTaskId, ce = T && !re && !M.backgroundTaskId && u.toolUseId ? (0, import_chunk_bzyb60p0.oZo)(u.toolUseId) : void 0, ue = re ? void 0 : T, ie = await (0, import_chunk_sjqze7qg.yio)(M.stdout, M.outputFilePath);
        if (u.remoteCall) {
          if (!re && !M.backgroundTaskId && M.code === 0) (0, import_chunk_sjqze7qg.gpr)(o.command);
        } else if (!re && !M.backgroundTaskId && (0, import_chunk_sjqze7qg.Sio)(u.session.host, o.command, M.code, ie).prResolved) u.markPrResolvedThisSession();
        if (!re && !M.backgroundTaskId && !w) (0, import_chunk_37zqqqnw.nwt)(o.command, M.code);
        let me = (0, import_chunk_bzyb60p0.RZt)(o.command), we = (0, import_chunk_cbnm4p23.Ai)(I.signal.reason), Je = M.interrupted && we === "interrupt", Ue = M.interrupted && (0, import_chunk_cbnm4p23.xMr)(we);
        if (M.interrupted && we === "background") throw new import_chunk_jv7av99m.Ie();
        let fe = "", ze = (0, import_chunk_f9x2f6cx.Rs)(u.session).cwd;
        if (!U) {
          if ((0, import_chunk_bzyb60p0.mos)(u.session, u.permissions()) || M.cwdChangeRefused) fe = (0, import_chunk_bzyb60p0.pos)("");
        }
        fe = [re ? void 0 : L, fe].filter(Boolean).join(`
`);
        let Ce = M.backgroundTaskId !== void 0 && ((0, import_chunk_865at33z.UCt)(u.agentContext) || u.agentId === void 0 && (0, import_chunk_37zqqqnw.ton)()) ? true : void 0;
        if (M.backgroundTaskId) {
          let C = (0, import_chunk_bzyb60p0.hxn)(M.timedOutAfterMs !== void 0 && u.innerCall !== true ? await (0, import_chunk_bzyb60p0.Wos)(M.backgroundTaskId, import_chunk_qp5chy39.uN) : M.stdout || "", { command: o.command, pendingHint: u.session.pendingHint, isMainThread: F, surface: "shell" });
          if ((0, import_chunk_bzyb60p0.yrt)()) (0, import_chunk_y53wbr8a.a)("tengu_bash_task_ack", { trigger: M.backgroundedByUser ? (0, import_chunk_78g0060s.S)("user") : M.backgroundedByTurnAbort ? (0, import_chunk_78g0060s.S)("turn_abort") : M.backgroundedToDeliverMessage ? (0, import_chunk_78g0060s.S)("deliver_message") : M.timedOutAfterMs !== void 0 ? (0, import_chunk_78g0060s.S)("timeout") : (0, import_chunk_78g0060s.S)("explicit"), ends_with_final_response: Ce === true, shell: (0, import_chunk_78g0060s.S)("powershell") });
          return { data: { stdout: C, stderr: [M.stderr || "", fe].filter(Boolean).join(`
`), interrupted: false, backgroundTaskId: M.backgroundTaskId, backgroundedByUser: M.backgroundedByUser, backgroundedByTurnAbort: M.backgroundedByTurnAbort, backgroundedToDeliverMessage: M.backgroundedToDeliverMessage, backgroundedForAgentReport: (0, import_chunk_bzyb60p0.Uos)(M.backgroundTaskId, u.toolState), timedOutAfterMs: M.timedOutAfterMs, subagentCapApplied: M.subagentCapApplied, backgroundEndsWithFinalResponse: Ce }, ...ue !== void 0 && { sandboxed: ue } };
        }
        let We = new import_chunk_7cfjrnwy.VLr(), ne = (M.stdout || "").trimEnd();
        We.append(ne + Sn);
        let ve = (0, import_chunk_bzyb60p0.mui)(o.command, M.code, ne, M.stderr || ""), ge = (0, import_chunk_bzyb60p0.Pur)(We.toString());
        if (ge = (0, import_chunk_bzyb60p0.hxn)(ge, { command: o.command, pendingHint: u.session.pendingHint, isMainThread: F, surface: "shell" }), M.preSpawnError) {
          let C = new import_chunk_jv7av99m.A(M.preSpawnError, "PowerShell: pre-spawn error (cwd/argv redacted)");
          throw M.preSpawnErrorCode === "e2big" ? (0, import_chunk_r8478wtb.MX)(C, { kind: "spawn_arg_limit" }) : C;
        }
        if (ve.isError && !Je) {
          let C = ne.length <= 8192 ? ne : ne.slice(0, 4096) + ne.slice(-4096), j = (0, import_chunk_bzyb60p0.MKa)(C, M.code);
          throw (0, import_chunk_y53wbr8a.a)("tengu_powershell_tool_command_failed", { model: g, command_type: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Llr)(o.command)), exit_code: M.code, stdout_length: ne.length, error_class: (0, import_chunk_jv7av99m.dA)(j), not_recognized_kind: j === "not_recognized" || j === "command_not_found" ? (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.HKa)(C) ?? "unextracted") : void 0, parser_error_kind: j === "parser_error" || j === "ps5_chain_op" ? (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.pui)(C) ?? "unextracted") : void 0, bash_syntax_shape: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.DKa)(o.command)), powershell_edition: (0, import_chunk_78g0060s.f)(await (0, import_chunk_d775ds6c.U_r)() ?? "unknown"), user_typed_shell_dispatch: w, call_origin: (0, import_chunk_78g0060s.f)(b ? "remote" : "local"), destructive_category: (0, import_chunk_78g0060s.f)(me ?? "none"), destructive_target_scope: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.cyt)(o.command, (0, import_chunk_18rsj2ts.pe)(), me)), permission_mode: (0, import_chunk_78g0060s.f)(u.permissions().mode) }), new import_chunk_jv7av99m.ST({ stdout: ge, stderr: [W ? import_chunk_bzyb60p0.dXo : void 0, L].reduce((H, X) => X === void 0 ? H : `${H.trimEnd()}

${X}`, M.stderr || ""), code: M.code, interrupted: Ue, sandboxViolations: ce, sandboxed: ue, printedBytes: (0, import_chunk_c1hnv4fm.Ylo)(M) });
        }
        let Se = await (0, import_chunk_bzyb60p0.lZo)(M, u.session, u.storageV5, G), he = Se?.path, $e = Se?.size, be = (0, import_chunk_bzyb60p0.MMn)(ge), Re = ge;
        if (be) {
          let C = await (0, import_chunk_bzyb60p0.cos)(ge, M.outputFilePath, $e, (0, import_chunk_yvba4101.ac)(u.modelFacts().model));
          if (C) Re = C;
          else be = false;
        }
        let He = [M.stderr || "", fe].filter(Boolean).join(`
`), qe;
        if (!re) {
          let C = (0, import_chunk_sjqze7qg.uDn)(o.command, ie);
          if (Object.keys(C).length > 0) qe = C;
          if (!u.remoteCall) (0, import_chunk_sjqze7qg._io)(C, ie, { command: o.command, exitCode: M.code, cwd: ze });
        }
        (0, import_chunk_y53wbr8a.a)("tengu_powershell_tool_command_executed", { model: g, command_type: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Llr)(o.command)), stdout_length: Re.length, stderr_length: He.length, exit_code: M.code, interrupted: M.interrupted, powershell_edition: (0, import_chunk_78g0060s.f)(await (0, import_chunk_d775ds6c.U_r)() ?? "unknown"), user_typed_shell_dispatch: w, call_origin: (0, import_chunk_78g0060s.f)(b ? "remote" : "local"), destructive_category: (0, import_chunk_78g0060s.f)(me ?? "none"), destructive_target_scope: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.cyt)(o.command, (0, import_chunk_18rsj2ts.pe)(), me)), permission_mode: (0, import_chunk_78g0060s.f)(u.permissions().mode) });
        let y = (0, import_chunk_bzyb60p0.aZo)(Re, Se?.carriedMarkers ?? []);
        return { data: { stdout: y, stderr: He, interrupted: M.interrupted, returnCodeInterpretation: ve.message, isImage: be && y === Re, persistedOutputPath: he, persistedOutputSize: $e, gitOperation: qe }, ...ce !== void 0 && { sandboxViolations: ce }, ...ue !== void 0 && { sandboxed: ue } };
      } finally {
        if (u.toolUseId) O?.({ kind: "clear", toolUseId: u.toolUseId });
        if (!Cn(o)) u.applyFileHistoryOp({ kind: "touch", ...!w && { untracked: true } });
      }
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } };
} });
async function* No({ input: e, useSandbox: o, networkLists: r, constraints: u, backgroundHeld: m, onHeldEnd: g, onNote: w, abortController: b, taskRegistry: h, emitToolProgress: _, session: T, preventCwdChanges: k, isMainThread: R, subagentCapMs: L, toolUseId: I, agentId: O, caller: F, shellWallCapMs: U, promptShellPluginId: z, agentWorktree: N, isolationRoot: G, sessionEnvVars: W, toolState: K }) {
  var _stack = [];
  try {
    let { command: V, description: q, timeout: M, run_in_background: re } = e, ce = (0, import_chunk_jg3mepas.th)() || u?.background === "forbidden" || m?.() === true, ue = re === true && !ce, ie = U !== void 0 ? Math.min(M || (0, import_chunk_daz70crr.hrr)(), U, u?.maxTimeoutMs ?? 1 / 0) : Math.min(M || (0, import_chunk_daz70crr.N3o)(), ue ? (0, import_chunk_37zqqqnw.Y5e)() : (0, import_chunk_daz70crr.hrr)(), u?.maxTimeoutMs ?? 1 / 0);
    if (M && ie < M) w?.({ key: "timeout_clamped", requestedMs: M, appliedMs: ie });
    let me = "", we = "", Je = 0, Ue = 0, fe = void 0, ze = void 0, Ce = false, We = void 0, ne = () => b.signal.aborted && (0, import_chunk_bzyb60p0.ZXr)(b.signal.reason, F), ve = null;
    function ge() {
      return new Promise((Q) => {
        ve = () => Q(null);
      });
    }
    const Se = __using(_stack, (0, import_chunk_bzyb60p0.ija)(b.signal, () => {
      if (!ne()) return;
      let Q = ve;
      if (Q) ve = null, Q();
    }));
    let he = !ce && await Eo(V), $e = !ce, be = (0, import_chunk_sk0gc06z.wdo)({ requestedTimeoutMs: ie, isMainAgent: R === true, canAutoBackground: he, subagentCapMs: ue ? 0 : L }), Re = R !== true && be < ie ? true : void 0;
    if (!await (0, import_chunk_d775ds6c.e1)()) return { stdout: "", stderr: "PowerShell is not available on this system.", code: 0, interrupted: false };
    const qe = __using(_stack, new import_chunk_bzyb60p0._eo((Q, ee, oe, te, ye) => {
      we = Q, me = ee, Je = oe, Ue = ye ? te : 0;
    }));
    let y;
    try {
      y = await (0, import_chunk_bzyb60p0.Xrt)(V, b.signal, "powershell", { timeout: be, owningAgentId: O, caller: F, turnAbortBackgrounds: $e, sandboxAttributionId: I, sandboxNetworkLists: r, onProgress: qe.call, session: T, preventCwdChanges: k, ...u?.scrubCredentialEnv && { scrubCredentialEnv: true }, ...u?.sandbox === "required" && { requireConfiningSandbox: true }, sandboxDenyRead: u?.additionalDenyRead, sandboxDenyWrite: u?.additionalDenyWrite, agentWorktree: N, isolationRoot: G, shouldUseSandbox: o, shouldAutoBackground: he, sessionEnvVars: W, ...(0, import_chunk_1z1bgjzv.HSr)(z) && { bunOptionsFor: (Q) => (0, import_chunk_1z1bgjzv.MBt)(z, Q) } });
    } catch (Q) {
      if ((0, import_chunk_jv7av99m.Fe)(Q)) return { stdout: "", stderr: "Command aborted before execution", code: 145, interrupted: true };
      if (Q instanceof Error && import_chunk_bzyb60p0.nZo.has(Q.name)) throw Q;
      if ((0, import_chunk_jv7av99m.pa)(Q)) return (0, import_chunk_w578pjby.t)(`PowerShellTool: exec spawn failed: ${Q}`), { stdout: "", stderr: `Failed to execute PowerShell command: ${(0, import_chunk_jv7av99m.d)(Q)}`, code: 0, interrupted: false };
      return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(Q), "PowerShell exec() pre-spawn setup failed")), { stdout: "", stderr: `Failed to execute PowerShell command: ${(0, import_chunk_jv7av99m.d)(Q)}`, code: 0, interrupted: false };
    }
    let C = y.status !== "killed" ? (0, import_chunk_bzyb60p0.sZo)(import_chunk_rb36kwbn.yt, V, K, { useSandbox: o }) : null, j = y.result;
    if (C) j.then((Q) => {
      if (Q.preSpawnError) C();
    }).catch(() => {
    });
    async function H(Q) {
      return (await (0, import_chunk_bzyb60p0.BSt)({ command: V, shell: "powershell", description: q || V, shellCommand: y, toolUseId: I, agentId: O, timeout: Q }, { abortController: b, taskRegistry: h })).taskId;
    }
    function X(Q, ee, oe) {
      if (m?.() === true) {
        g?.(), y.kill();
        return;
      }
      if (J) {
        if (!(0, import_chunk_bzyb60p0.yoo)(J, y, q || V, h, I)) return;
        fe = J, (0, import_chunk_y53wbr8a.a)(Q, { command_type: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Llr)(V)), ...oe }), ee?.(J);
        return;
      }
      H().then((te) => {
        fe = te;
        let ye = ve;
        if (ye) ve = null, ye();
        if ((0, import_chunk_y53wbr8a.a)(Q, { command_type: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Llr)(V)), ...oe }), ee) ee(te);
      });
    }
    if (y.onTimeout && he) y.onTimeout((Q) => {
      ze = be, X("tengu_powershell_command_timeout_backgrounded", Q, { timeout_ms: be, requested_timeout_ms: (0, import_chunk_sk0gc06z.Z1t)(M, ie) ?? 0, subagent_cap_applied: Re === true });
    });
    if (ue && y.status !== "killed") {
      if (y.status === "completed") {
        let oe = await j;
        if (oe.preSpawnError) return oe;
      }
      let Q = (0, import_chunk_sk0gc06z.Z1t)(M, ie), ee = await H(Q);
      return (0, import_chunk_y53wbr8a.a)("tengu_powershell_command_explicitly_backgrounded", { command_type: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.Llr)(V)), timeout_ms: Q ?? 0 }), { stdout: "", stderr: "", code: 0, interrupted: false, backgroundTaskId: ee };
    }
    import_chunk_bzyb60p0.one.startPolling(y.taskOutput.taskId);
    let se = Date.now(), Y = se + kn, J = void 0, ae = null;
    try {
      while (true) {
        let Q = Date.now(), ee = Math.max(0, Y - Q), oe;
        if (!Ce && ne()) oe = Promise.resolve(null);
        else oe = ge();
        let te = await Promise.race([j, new Promise((_e) => setTimeout((Oe) => Oe(null), ee, _e).unref()), oe]);
        if (te !== null) {
          if (ae = te, te.backgroundTaskId !== void 0) {
            (0, import_chunk_bzyb60p0.Gos)(te.backgroundTaskId, te, h);
            let _e = { ...te, backgroundTaskId: void 0 }, { taskOutput: Oe } = y;
            if (Oe.stdoutToFile && !Oe.outputFileRedundant) _e.outputFilePath = Oe.path, _e.outputFileSize = Oe.outputFileSize, _e.outputTaskId = Oe.taskId;
            return _e;
          }
          return te;
        }
        if (fe) return { stdout: Ce ? We ?? me : "", stderr: "", code: 0, interrupted: false, backgroundTaskId: fe, ...ne() && { backgroundedByTurnAbort: true }, timedOutAfterMs: ze, subagentCapApplied: Re };
        if (b.signal.aborted && ((0, import_chunk_cbnm4p23.Ai)(b.signal.reason) === "interrupt" || ne()) && !Ce) {
          if (Ce = true, he || ne() && $e) {
            if (me) We = await (0, import_chunk_bzyb60p0.jos)(y.taskOutput.taskId, me);
            if (y.status !== "running") continue;
            X(ne() ? "tengu_powershell_command_turn_abort_backgrounded" : "tengu_powershell_command_interrupt_backgrounded");
            continue;
          }
          y.kill();
          continue;
        }
        if (J) {
          if (y.status === "backgrounded") return { stdout: "", stderr: "", code: 0, interrupted: false, backgroundTaskId: J, ...(0, import_chunk_bzyb60p0.Bos)(J, h) ? { backgroundedToDeliverMessage: true } : { backgroundedByUser: true } };
        }
        let ye = Date.now() - se, Ge = Math.floor(ye / 1e3);
        if (!ce && !Ce && fe === void 0 && Ge >= kn / 1e3) {
          if (!J) J = (0, import_chunk_bzyb60p0.Dos)({ command: V, shell: "powershell", description: q || V, shellCommand: y, agentId: O, caller: F, autoBackgroundArmed: he, timeout: (0, import_chunk_sk0gc06z.Z1t)(M, ie) }, h, I);
          if (I) _?.({ kind: "background_hint", toolUseId: I });
        }
        yield { type: "progress", fullOutput: me, output: we, elapsedTimeSeconds: Ge, totalLines: Je, totalBytes: Ue, taskId: y.taskOutput.taskId, ...M ? { timeoutMs: be } : void 0 }, Y = Date.now() + To;
      }
    } finally {
      if (import_chunk_bzyb60p0.one.stopPolling(y.taskOutput.taskId), !fe && y.status !== "backgrounded") {
        if (J) (0, import_chunk_bzyb60p0.zos)(J, ae ? (0, import_chunk_bzyb60p0.Vos)(ae, { command: V, shell: "powershell" }) : "stopped", h);
        y.cleanup();
      }
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
