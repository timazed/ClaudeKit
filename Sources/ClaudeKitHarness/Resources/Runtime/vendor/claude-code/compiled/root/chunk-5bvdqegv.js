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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
var chunk_5bvdqegv_exports = {};
__export(chunk_5bvdqegv_exports, {
  SERVED_FILE_CALLS: () => Jc,
  countedUnlessRepeated: () => qc
});
module.exports = __toCommonJS(chunk_5bvdqegv_exports);
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
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
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
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
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_w0pnqmj8 = require("/$bunfs/root/chunk-w0pnqmj8.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_9y45rehj = require("/$bunfs/root/chunk-9y45rehj.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_gt0vfa7p = require("/$bunfs/root/chunk-gt0vfa7p.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_an3w1y1q = require("/$bunfs/root/chunk-an3w1y1q.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_p9gcfhjr = require("/$bunfs/root/chunk-p9gcfhjr.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_rfgw2dcy = require("/$bunfs/root/chunk-rfgw2dcy.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
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
var import_chunk_bsw3jbbx = require("/$bunfs/root/chunk-bsw3jbbx.js");
var import_chunk_c2m5gm43 = require("/$bunfs/root/chunk-c2m5gm43.js");
var import_chunk_psvbzxg2 = require("/$bunfs/root/chunk-psvbzxg2.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_pzj67pdt = require("/$bunfs/root/chunk-pzj67pdt.js");
var import_chunk_6a9gdcsm = require("/$bunfs/root/chunk-6a9gdcsm.js");
var import_chunk_7fjbagnr = require("/$bunfs/root/chunk-7fjbagnr.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_pb0vn6an = require("/$bunfs/root/chunk-pb0vn6an.js");
var import_chunk_4ssv8fte = require("/$bunfs/root/chunk-4ssv8fte.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_ejeefcyk = require("/$bunfs/root/chunk-ejeefcyk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ygx90amt = require("/$bunfs/root/chunk-ygx90amt.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_f9mxtmjz = require("/$bunfs/root/chunk-f9mxtmjz.js");
var import_chunk_sps8tde9 = require("/$bunfs/root/chunk-sps8tde9.js");
var import_chunk_kvvabk01 = require("/$bunfs/root/chunk-kvvabk01.js");
var import_chunk_4b5275ey = require("/$bunfs/root/chunk-4b5275ey.js");
var import_chunk_1ea72zr6 = require("/$bunfs/root/chunk-1ea72zr6.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_j59m93ez = require("/$bunfs/root/chunk-j59m93ez.js");
var import_chunk_507k3c1m = require("/$bunfs/root/chunk-507k3c1m.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_1ag56sne = require("/$bunfs/root/chunk-1ag56sne.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_gtxzjvjq = require("/$bunfs/root/chunk-gtxzjvjq.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_kma6xjgr = require("/$bunfs/root/chunk-kma6xjgr.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_xzph4c6z = require("/$bunfs/root/chunk-xzph4c6z.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_fc3gfgch = require("/$bunfs/root/chunk-fc3gfgch.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_b3gt63am = require("/$bunfs/root/chunk-b3gt63am.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
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
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_z9f6hbhp = require("/$bunfs/root/chunk-z9f6hbhp.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_5w3q7h0v = require("/$bunfs/root/chunk-5w3q7h0v.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
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
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_txqh3v33 = require("/$bunfs/root/chunk-txqh3v33.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_89bjmq9y = require("/$bunfs/root/chunk-89bjmq9y.js");
var import_chunk_jzfcqxfe = require("/$bunfs/root/chunk-jzfcqxfe.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
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
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
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
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_x9aavfmb = require("/$bunfs/root/chunk-x9aavfmb.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_hgbq13xy = require("/$bunfs/root/chunk-hgbq13xy.js");
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
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_x9vzz8b9 = require("/$bunfs/root/chunk-x9vzz8b9.js");
var import_chunk_jmm1stqj = require("/$bunfs/root/chunk-jmm1stqj.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_yrh4vxq4 = require("/$bunfs/root/chunk-yrh4vxq4.js");
var import_chunk_fz3c96rq = require("/$bunfs/root/chunk-fz3c96rq.js");
var import_chunk_4gzm04h3 = require("/$bunfs/root/chunk-4gzm04h3.js");
var import_chunk_qaaqd1gd = require("/$bunfs/root/chunk-qaaqd1gd.js");
var import_chunk_yd3aejbx = require("/$bunfs/root/chunk-yd3aejbx.js");
var import_chunk_6k3h3wej = require("/$bunfs/root/chunk-6k3h3wej.js");
var import_chunk_ma8jx6m7 = require("/$bunfs/root/chunk-ma8jx6m7.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_zs6b24vw = require("/$bunfs/root/chunk-zs6b24vw.js");
var import_chunk_0vfnz5xh = require("/$bunfs/root/chunk-0vfnz5xh.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_p3qkcp6e = require("/$bunfs/root/chunk-p3qkcp6e.js");
var import_chunk_keytq914 = require("/$bunfs/root/chunk-keytq914.js");
var import_chunk_gazdkqyt = require("/$bunfs/root/chunk-gazdkqyt.js");
var import_chunk_ctrhdh7d = require("/$bunfs/root/chunk-ctrhdh7d.js");
var import_chunk_539hrhrd = require("/$bunfs/root/chunk-539hrhrd.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_kf08yh2z = require("/$bunfs/root/chunk-kf08yh2z.js");
var import_chunk_3m4xkn4b = require("/$bunfs/root/chunk-3m4xkn4b.js");
var import_chunk_s12gh88k = require("/$bunfs/root/chunk-s12gh88k.js");
var import_chunk_2qh29p4b = require("/$bunfs/root/chunk-2qh29p4b.js");
var import_chunk_zptyswqz = require("/$bunfs/root/chunk-zptyswqz.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_bsnb5bky = require("/$bunfs/root/chunk-bsnb5bky.js");
var import_chunk_vwr252r7 = require("/$bunfs/root/chunk-vwr252r7.js");
var import_chunk_r9mc45j8 = require("/$bunfs/root/chunk-r9mc45j8.js");
var import_chunk_e18ra2xv = require("/$bunfs/root/chunk-e18ra2xv.js");
var import_chunk_0f977ndx = require("/$bunfs/root/chunk-0f977ndx.js");
var import_chunk_s72sr7gg = require("/$bunfs/root/chunk-s72sr7gg.js");
var import_chunk_7xms8wr2 = require("/$bunfs/root/chunk-7xms8wr2.js");
var import_chunk_r48wrczg = require("/$bunfs/root/chunk-r48wrczg.js");
var import_chunk_9g965wca = require("/$bunfs/root/chunk-9g965wca.js");
var import_chunk_h46f12bd = require("/$bunfs/root/chunk-h46f12bd.js");
var import_chunk_m4k4ejs3 = require("/$bunfs/root/chunk-m4k4ejs3.js");
var import_chunk_zfx767v7 = require("/$bunfs/root/chunk-zfx767v7.js");
var import_chunk_424x9gf0 = require("/$bunfs/root/chunk-424x9gf0.js");
var import_chunk_v2ykfcgj = require("/$bunfs/root/chunk-v2ykfcgj.js");
var import_chunk_p58qz2p5 = require("/$bunfs/root/chunk-p58qz2p5.js");
var import_chunk_6mhz7ytj = require("/$bunfs/root/chunk-6mhz7ytj.js");
var import_chunk_e4jbq56j = require("/$bunfs/root/chunk-e4jbq56j.js");
var import_chunk_4vdq32k8 = require("/$bunfs/root/chunk-4vdq32k8.js");
var import_chunk_xkc7pn6f = require("/$bunfs/root/chunk-xkc7pn6f.js");
var import_chunk_zsd70pa1 = require("/$bunfs/root/chunk-zsd70pa1.js");
var import_chunk_9ar7j7qe = require("/$bunfs/root/chunk-9ar7j7qe.js");
var import_chunk_9ehfvk1q = require("/$bunfs/root/chunk-9ehfvk1q.js");
var import_chunk_ga36k9j5 = require("/$bunfs/root/chunk-ga36k9j5.js");
var import_chunk_dbw5qqws = require("/$bunfs/root/chunk-dbw5qqws.js");
var import_chunk_d28sbgqz = require("/$bunfs/root/chunk-d28sbgqz.js");
var import_chunk_wsm915mg = require("/$bunfs/root/chunk-wsm915mg.js");
var import_chunk_v70mn5g6 = require("/$bunfs/root/chunk-v70mn5g6.js");
var import_chunk_qr6brph0 = require("/$bunfs/root/chunk-qr6brph0.js");
var import_chunk_sphs90qq = require("/$bunfs/root/chunk-sphs90qq.js");
var import_chunk_vj6f11qy = require("/$bunfs/root/chunk-vj6f11qy.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_2ms4sey3 = require("/$bunfs/root/chunk-2ms4sey3.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_jejz6sfb = require("/$bunfs/root/chunk-jejz6sfb.js");
var import_chunk_fpk6xk4r = require("/$bunfs/root/chunk-fpk6xk4r.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_1d0hhqv8 = require("/$bunfs/root/chunk-1d0hhqv8.js");
var import_chunk_263v0sz3 = require("/$bunfs/root/chunk-263v0sz3.js");
var import_chunk_hnh569cb = require("/$bunfs/root/chunk-hnh569cb.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_gc5a361p = require("/$bunfs/root/chunk-gc5a361p.js");
var import_chunk_jrzfkd53 = require("/$bunfs/root/chunk-jrzfkd53.js");
var import_chunk_z2c6pmpw = require("/$bunfs/root/chunk-z2c6pmpw.js");
var import_chunk_6hkrqqbp = require("/$bunfs/root/chunk-6hkrqqbp.js");
var import_chunk_ynbv8e5n = require("/$bunfs/root/chunk-ynbv8e5n.js");
var import_chunk_kb3nnh8q = require("/$bunfs/root/chunk-kb3nnh8q.js");
var import_chunk_21whhrcv = require("/$bunfs/root/chunk-21whhrcv.js");
var import_chunk_759mf2n7 = require("/$bunfs/root/chunk-759mf2n7.js");
var import_chunk_tteqedwm = require("/$bunfs/root/chunk-tteqedwm.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_wmr4c6v4 = require("/$bunfs/root/chunk-wmr4c6v4.js");
var import_chunk_8k7k08kg = require("/$bunfs/root/chunk-8k7k08kg.js");
var import_chunk_s7te3n3c = require("/$bunfs/root/chunk-s7te3n3c.js");
var import_chunk_crteww1n = require("/$bunfs/root/chunk-crteww1n.js");
var import_chunk_69q893ed = require("/$bunfs/root/chunk-69q893ed.js");
var import_chunk_qh0nzvn2 = require("/$bunfs/root/chunk-qh0nzvn2.js");
var import_chunk_g44r9njd = require("/$bunfs/root/chunk-g44r9njd.js");
var import_chunk_ttsnbbsg = require("/$bunfs/root/chunk-ttsnbbsg.js");
var import_chunk_y8s4362z = require("/$bunfs/root/chunk-y8s4362z.js");
var import_chunk_1ymj1rfb = require("/$bunfs/root/chunk-1ymj1rfb.js");
var import_chunk_9jr493jm = require("/$bunfs/root/chunk-9jr493jm.js");
var import_chunk_kjd9cbj9 = require("/$bunfs/root/chunk-kjd9cbj9.js");
var import_chunk_1n8b5n1q = require("/$bunfs/root/chunk-1n8b5n1q.js");
var import_chunk_e6sf2edz = require("/$bunfs/root/chunk-e6sf2edz.js");
var import_chunk_nx2xryz8 = require("/$bunfs/root/chunk-nx2xryz8.js");
var import_chunk_am74sq47 = require("/$bunfs/root/chunk-am74sq47.js");
var import_chunk_t03cybd7 = require("/$bunfs/root/chunk-t03cybd7.js");
var import_chunk_9mfdhvae = require("/$bunfs/root/chunk-9mfdhvae.js");
var import_chunk_ebhp3wz0 = require("/$bunfs/root/chunk-ebhp3wz0.js");
var import_chunk_ykcxdh1p = require("/$bunfs/root/chunk-ykcxdh1p.js");
var import_chunk_06pt2b41 = require("/$bunfs/root/chunk-06pt2b41.js");
var import_chunk_yzcgh8yd = require("/$bunfs/root/chunk-yzcgh8yd.js");
var import_chunk_mmh7d122 = require("/$bunfs/root/chunk-mmh7d122.js");
var import_chunk_t9sq3azb = require("/$bunfs/root/chunk-t9sq3azb.js");
var import_chunk_14xc7vxb = require("/$bunfs/root/chunk-14xc7vxb.js");
var import_chunk_3fv71fhr = require("/$bunfs/root/chunk-3fv71fhr.js");
var import_chunk_28fajby4 = require("/$bunfs/root/chunk-28fajby4.js");
var import_chunk_q0fr3q7r = require("/$bunfs/root/chunk-q0fr3q7r.js");
var import_chunk_v44b7svs = require("/$bunfs/root/chunk-v44b7svs.js");
var import_chunk_4sncjgqg = require("/$bunfs/root/chunk-4sncjgqg.js");
var import_chunk_s27zvffk = require("/$bunfs/root/chunk-s27zvffk.js");
var import_chunk_mv0px8y8 = require("/$bunfs/root/chunk-mv0px8y8.js");
var import_chunk_4ab0wvf7 = require("/$bunfs/root/chunk-4ab0wvf7.js");
var import_chunk_g49rrdp1 = require("/$bunfs/root/chunk-g49rrdp1.js");
var import_chunk_zspzqk1p = require("/$bunfs/root/chunk-zspzqk1p.js");
var import_chunk_kejyjxvj = require("/$bunfs/root/chunk-kejyjxvj.js");
var import_chunk_b18a27zs = require("/$bunfs/root/chunk-b18a27zs.js");
var import_chunk_0jwky18t = require("/$bunfs/root/chunk-0jwky18t.js");
var import_chunk_s8g3yq9x = require("/$bunfs/root/chunk-s8g3yq9x.js");
var import_chunk_0b079jxb = require("/$bunfs/root/chunk-0b079jxb.js");
var import_chunk_spjmqhhj = require("/$bunfs/root/chunk-spjmqhhj.js");
var import_chunk_phwepfsh = require("/$bunfs/root/chunk-phwepfsh.js");
var import_chunk_5nbqcb4c = require("/$bunfs/root/chunk-5nbqcb4c.js");
var import_chunk_9ph0ypyy = require("/$bunfs/root/chunk-9ph0ypyy.js");
var import_chunk_8dns2jbk = require("/$bunfs/root/chunk-8dns2jbk.js");
var import_chunk_rkksytw2 = require("/$bunfs/root/chunk-rkksytw2.js");
var import_chunk_r5rtrbxq = require("/$bunfs/root/chunk-r5rtrbxq.js");
var import_chunk_r59sj93t = require("/$bunfs/root/chunk-r59sj93t.js");
var import_chunk_02b35jvk = require("/$bunfs/root/chunk-02b35jvk.js");
var import_chunk_p5m4fqpp = require("/$bunfs/root/chunk-p5m4fqpp.js");
var import_chunk_nn7sd2sk = require("/$bunfs/root/chunk-nn7sd2sk.js");
var import_chunk_jhy72swy = require("/$bunfs/root/chunk-jhy72swy.js");
var import_chunk_xs8rc77k = require("/$bunfs/root/chunk-xs8rc77k.js");
var import_chunk_2efh61g1 = require("/$bunfs/root/chunk-2efh61g1.js");
var import_chunk_nd1dn2mq = require("/$bunfs/root/chunk-nd1dn2mq.js");
var import_chunk_twqew0sr = require("/$bunfs/root/chunk-twqew0sr.js");
var import_chunk_wcvnrqjb = require("/$bunfs/root/chunk-wcvnrqjb.js");
var import_chunk_n5r4gqb4 = require("/$bunfs/root/chunk-n5r4gqb4.js");
var import_chunk_ndx89hd3 = require("/$bunfs/root/chunk-ndx89hd3.js");
var import_chunk_b7d04a6f = require("/$bunfs/root/chunk-b7d04a6f.js");
var import_chunk_qbq98gbm = require("/$bunfs/root/chunk-qbq98gbm.js");
var import_chunk_53kayv4s = require("/$bunfs/root/chunk-53kayv4s.js");
var import_chunk_nwerbvyn = require("/$bunfs/root/chunk-nwerbvyn.js");
var import_chunk_s39wccf4 = require("/$bunfs/root/chunk-s39wccf4.js");
var import_chunk_4ymnd9qx = require("/$bunfs/root/chunk-4ymnd9qx.js");
var import_chunk_zz526ycg = require("/$bunfs/root/chunk-zz526ycg.js");
var import_chunk_1hd1ptv0 = require("/$bunfs/root/chunk-1hd1ptv0.js");
var import_chunk_983fjr5n = require("/$bunfs/root/chunk-983fjr5n.js");
var import_chunk_trqmy5ve = require("/$bunfs/root/chunk-trqmy5ve.js");
var import_chunk_dtzkavpf = require("/$bunfs/root/chunk-dtzkavpf.js");
var import_chunk_9bypzm3p = require("/$bunfs/root/chunk-9bypzm3p.js");
var import_chunk_9nypk94f = require("/$bunfs/root/chunk-9nypk94f.js");
var import_chunk_z2dejs1w = require("/$bunfs/root/chunk-z2dejs1w.js");
var import_chunk_k1q4r2vq = require("/$bunfs/root/chunk-k1q4r2vq.js");
var import_chunk_kxv2z9ac = require("/$bunfs/root/chunk-kxv2z9ac.js");
var import_chunk_v6v1wr72 = require("/$bunfs/root/chunk-v6v1wr72.js");
var import_chunk_a05a70r9 = require("/$bunfs/root/chunk-a05a70r9.js");
var import_chunk_xcwk20g6 = require("/$bunfs/root/chunk-xcwk20g6.js");
var import_chunk_s3mp6vdq = require("/$bunfs/root/chunk-s3mp6vdq.js");
var import_chunk_mzra7agn = require("/$bunfs/root/chunk-mzra7agn.js");
var import_chunk_yegw2jm5 = require("/$bunfs/root/chunk-yegw2jm5.js");
var import_chunk_5dea9071 = require("/$bunfs/root/chunk-5dea9071.js");
var import_chunk_pmap704y = require("/$bunfs/root/chunk-pmap704y.js");
var import_chunk_cpv7yv0r = require("/$bunfs/root/chunk-cpv7yv0r.js");
var import_chunk_epgpxkgh = require("/$bunfs/root/chunk-epgpxkgh.js");
var import_chunk_j7ensb3k = require("/$bunfs/root/chunk-j7ensb3k.js");
var import_chunk_pdwzrsxe = require("/$bunfs/root/chunk-pdwzrsxe.js");
var import_chunk_qjd2kk5d = require("/$bunfs/root/chunk-qjd2kk5d.js");
var import_chunk_1cer6q9x = require("/$bunfs/root/chunk-1cer6q9x.js");
var import_chunk_s3d8sr7p = require("/$bunfs/root/chunk-s3d8sr7p.js");
var import_chunk_208y07t1 = require("/$bunfs/root/chunk-208y07t1.js");
var import_chunk_t2e49pze = require("/$bunfs/root/chunk-t2e49pze.js");
var import_chunk_4cwth1j2 = require("/$bunfs/root/chunk-4cwth1j2.js");
var import_chunk_thj6vbn4 = require("/$bunfs/root/chunk-thj6vbn4.js");
var import_chunk_hjheyj7y = require("/$bunfs/root/chunk-hjheyj7y.js");
var import_chunk_waccdnpq = require("/$bunfs/root/chunk-waccdnpq.js");
var import_chunk_41appe38 = require("/$bunfs/root/chunk-41appe38.js");
var import_chunk_z3bdjzsf = require("/$bunfs/root/chunk-z3bdjzsf.js");
var import_chunk_6kz2p070 = require("/$bunfs/root/chunk-6kz2p070.js");
var import_chunk_dgdc791t = require("/$bunfs/root/chunk-dgdc791t.js");
var import_chunk_6xkqp5pj = require("/$bunfs/root/chunk-6xkqp5pj.js");
var import_chunk_tbr7tkzm = require("/$bunfs/root/chunk-tbr7tkzm.js");
var import_chunk_e1gwyq1j = require("/$bunfs/root/chunk-e1gwyq1j.js");
var import_chunk_0k16ny5f = require("/$bunfs/root/chunk-0k16ny5f.js");
var import_chunk_tgt4xm18 = require("/$bunfs/root/chunk-tgt4xm18.js");
var import_chunk_vh5947px = require("/$bunfs/root/chunk-vh5947px.js");
var import_chunk_5p1tkxex = require("/$bunfs/root/chunk-5p1tkxex.js");
var import_chunk_4qkqgt25 = require("/$bunfs/root/chunk-4qkqgt25.js");
var import_chunk_8yvg0j99 = require("/$bunfs/root/chunk-8yvg0j99.js");
var import_chunk_1jfwdjvf = require("/$bunfs/root/chunk-1jfwdjvf.js");
var import_chunk_8v27xkv5 = require("/$bunfs/root/chunk-8v27xkv5.js");
var import_chunk_2atp9x7j = require("/$bunfs/root/chunk-2atp9x7j.js");
var import_chunk_q1sh0fgd = require("/$bunfs/root/chunk-q1sh0fgd.js");
var import_chunk_924etrq7 = require("/$bunfs/root/chunk-924etrq7.js");
var import_chunk_tpax7jmw = require("/$bunfs/root/chunk-tpax7jmw.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_0a5vv9nr = require("/$bunfs/root/chunk-0a5vv9nr.js");
var import_chunk_4dn6vqbv = require("/$bunfs/root/chunk-4dn6vqbv.js");
var import_chunk_pf5ex2vv = require("/$bunfs/root/chunk-pf5ex2vv.js");
var import_chunk_ea0prthn = require("/$bunfs/root/chunk-ea0prthn.js");
var import_chunk_esqsx0j3 = require("/$bunfs/root/chunk-esqsx0j3.js");
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
var import_chunk_xdc7h7xp = require("/$bunfs/root/chunk-xdc7h7xp.js");
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
var import_chunk_75f58nqg = require("/$bunfs/root/chunk-75f58nqg.js");
var import_chunk_r216zqgx = require("/$bunfs/root/chunk-r216zqgx.js");
var import_chunk_01eypw0a = require("/$bunfs/root/chunk-01eypw0a.js");
var import_chunk_etd6y4ew = require("/$bunfs/root/chunk-etd6y4ew.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_6ygedzfy = require("/$bunfs/root/chunk-6ygedzfy.js");
var import_chunk_zc3emgcg = require("/$bunfs/root/chunk-zc3emgcg.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
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
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
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
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
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
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_promises2 = require("stream/promises");
var import_util = require("util");
var import_zlib = require("zlib");
var import_crypto2 = require("crypto");
var import_fs2 = require("fs");
var import_promises3 = require("fs/promises");
var import_path2 = require("path");
var import_crypto3 = require("crypto");
var import_promises4 = require("fs/promises");
var import_path3 = require("path");
var import_promises5 = require("fs/promises");
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var Oe = "FileSuggestions", ue = 4096, Ao = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ query: (0, import_chunk_adx6804h.n)().max(ue) })), fr = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ paths: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(ue)).max(import_chunk_waccdnpq._Xt), cwd: (0, import_chunk_adx6804h.n)().min(1).max(ue).optional(), leftOut: (0, import_chunk_adx6804h.E)().int().min(0).max(import_chunk_waccdnpq._Xt) }));
function Qe(e) {
  return e.length > 0 && e.length <= ue && (0, import_chunk_kx2fp6pc.TWl)(e);
}
async function et(e, o, r) {
  let { query: a } = Ao().parse(e), { generateFileSuggestionsWithBase: u, globalFileIndexCache: f } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-khhwz7km.js"))), { items: h, baseDir: y } = await u(f, a, true, r.toolUseContext().storageV5, false), g = y !== void 0 && Qe(y) ? y : void 0, S = [], O = h.slice(0, import_chunk_waccdnpq._Xt);
  for (let { displayText: A } of O) if (g !== void 0 && Qe(A)) S.push(A);
  return { summary: `${S.length} paths`, output: { paths: S, ...g !== void 0 && { cwd: g }, leftOut: O.length - S.length } };
}
var be = ["same", "differs", "daemon_gave_up"], zo = 1048576, Ee = 2e3, Re = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear());
async function ke(e, o, r) {
  let a = r - performance.now();
  if (a <= 0 || Re.size > 0) return "daemon_gave_up";
  let u = xo(e, o, r).catch(() => "daemon_gave_up"), f = await (0, import_chunk_5appeerh.me)(u, a);
  if (f === void 0) Re.add(u), u.finally(() => Re.delete(u));
  return f ?? "daemon_gave_up";
}
async function xo(e, o, r) {
  let a = await (0, import_promises3.open)(e, import_fs2.constants.O_RDONLY | import_chunk_09gzjq1e.Fo);
  try {
    let u = await a.stat();
    if (!u.isFile()) return "daemon_gave_up";
    if (u.size !== o.size) return "differs";
    let f = (0, import_crypto2.createHash)("sha256"), h = Buffer.allocUnsafe(Math.min(o.size, zo));
    for (let y = 0; y < o.size; ) {
      if (performance.now() >= r) return "daemon_gave_up";
      let { bytesRead: g } = await a.read(h, 0, h.length, y);
      if (g === 0) break;
      f.update(h.subarray(0, g)), y += g;
    }
    return f.digest("hex") === o.sha256 ? "same" : "differs";
  } finally {
    await a.close();
  }
}
(0, import_chunk_adx6804h.B)();
var ze = "ListDirectoryForRemote", Po = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)().max(import_chunk_qaaqd1gd.z_e) })), To = (0, import_chunk_2cbgkbm2.p)(() => Po().extend({ permission_context: (0, import_chunk_qaaqd1gd.AY)() }).strict()), Nr = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ listing: (0, import_chunk_adx6804h.c)({ entries: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), isDirectory: (0, import_chunk_adx6804h.P)(), isSymlink: (0, import_chunk_adx6804h.P)().optional(), isSpecial: (0, import_chunk_adx6804h.P)().optional() })).max(import_chunk_psvbzxg2.HGr), truncated: (0, import_chunk_adx6804h.P)() }).refine(No) }), (0, import_chunk_adx6804h.c)({ denied: (0, import_chunk_adx6804h.F)(Object.keys(import_chunk_psvbzxg2.kJn)) })]));
async function tt(e, o, r) {
  if ((0, import_chunk_0jve1fep.Le)(e) && (0, import_chunk_qaaqd1gd.J3)(e.permission_context)) throw Error("permission_context is too large");
  return Mo(To().parse(e), o, r);
}
var Mo = (0, import_chunk_w71cxznt.Rl)(4, vo);
async function vo({ permission_context: e, path: o }, r, a) {
  if (r.aborted || a.callerGone?.aborted) return pe("unexpected_error");
  let u = a.launchPermissionContext && (0, import_chunk_yd3aejbx.A3t)(a.launchPermissionContext);
  if (!u) return pe("read_rule");
  let { projectRoot: f, originalCwd: h } = (0, import_chunk_f9x2f6cx.Rs)(a.session);
  if (h !== f) return pe("workspace_moved");
  let y = (0, import_chunk_b18a27zs.D3)(e, u, f);
  try {
    let { entries: g, truncated: S } = await (0, import_chunk_psvbzxg2.zVs)(o, f, () => y, () => (0, import_chunk_f9x2f6cx.Te)() !== f), O = 0, A = g.findIndex((z) => (O += Buffer.byteLength((0, import_chunk_w578pjby._)(z)) + 1) > Io), k = A === -1 ? { entries: g, truncated: S } : { entries: g.slice(0, A), truncated: true };
    return { summary: `${k.entries.length} entries`, output: { listing: k } };
  } catch (g) {
    return pe((0, import_chunk_psvbzxg2.oht)(g) ?? "unexpected_error");
  }
}
var Io = import_chunk_yd3aejbx.Mpt - 64;
function pe(e) {
  return { summary: `list denied: ${e}`, output: { denied: e } };
}
function No(e) {
  let o = 0;
  for (let { name: r } of e.entries) o += r.length;
  return o <= import_chunk_yd3aejbx.Mpt && Buffer.byteLength((0, import_chunk_w578pjby._)(e)) <= import_chunk_yd3aejbx.Mpt;
}
(0, import_chunk_adx6804h.B)();
var ot = "RunManagedHook", Do = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ hookEvent: (0, import_chunk_adx6804h.F)(import_chunk_xcgcdx61.Jd), hook: (0, import_chunk_xcgcdx61.cOe)(), jsonInput: (0, import_chunk_adx6804h.n)(), hookIndex: (0, import_chunk_adx6804h.E)().int().nonnegative().optional(), organizationLists: (0, import_chunk_am74sq47.vVe)(), flagLists: (0, import_chunk_am74sq47.vVe)(), transcript: (0, import_chunk_am74sq47.mSn)() }));
async function nt(e, o, r) {
  let a = r.toolUseContext(), { hook: u, hookEvent: f, jsonInput: h, hookIndex: y, organizationLists: g, flagLists: S, transcript: O } = Do().parse(e);
  if (u.type !== "command" && (u.type !== "http" || g === void 0)) throw Error("only a command hook, or an http hook with the organization's lists, runs on this machine");
  let A = (0, import_chunk_am74sq47.Lpt)(h, { host: r.session.host, placed: O });
  if (A.isPathUnmade) return (0, import_chunk_am74sq47.x3t)(f);
  if (u.if && !await (0, import_chunk_am74sq47.Npt)(u.if, A)) return import_chunk_ebhp3wz0.ave;
  let k = a.abortController.signal;
  if (k.throwIfAborted(), u.type === "http") {
    await (0, import_chunk_am74sq47.EVe)(k);
    let z = await (0, import_chunk_am74sq47.GPt)(u, f, A.stdin, u.timeout, k, S, g, true);
    return { summary: `exit ${z.status}`, output: (0, import_chunk_am74sq47.rIe)({ ...(0, import_chunk_am74sq47.Dpt)(z, f), repairedInput: A.repairedInput }, f) };
  }
  return (0, import_chunk_am74sq47.P3t)(u, f, A, y, a, void 0, true);
}
(0, import_chunk_adx6804h.B)();
var rt = "JudgeHookCondition", jo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ if: (0, import_chunk_adx6804h.n)(), jsonInput: (0, import_chunk_adx6804h.n)(), wantsInput: (0, import_chunk_adx6804h.P)().optional() }));
async function it(e) {
  let o = jo().parse(e), r = (0, import_chunk_am74sq47.Lpt)(o.jsonInput);
  if (r.isPathUnmade) throw Error("the path in the tool's input could not be made absolute for the hook");
  if (!await (0, import_chunk_am74sq47.Npt)(o.if, r)) return import_chunk_ebhp3wz0.ave;
  return { summary: "it applies", output: { ...import_chunk_ebhp3wz0.ave.output, applies: true, ...o.wantsInput && { inSessionCwd: r.cwd, repairedInput: r.repairedInput } } };
}
(0, import_chunk_adx6804h.B)();
var ct = "RunSkillHook", st = "@skill", Uo = "@plugin-skill", at = "@catalog-skill", lt = "@plugin-agent";
function Go(e, o = Uo) {
  return e?.endsWith(o) ? e.slice(0, -o.length) : void 0;
}
var Bo = "this machine's settings keep a skill's hooks off", Wo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ pluginId: (0, import_chunk_adx6804h.n)(), hookEvent: (0, import_chunk_adx6804h.F)(import_chunk_xcgcdx61.Jd), hook: (0, import_chunk_xcgcdx61.cOe)(), jsonInput: (0, import_chunk_adx6804h.n)(), hookIndex: (0, import_chunk_adx6804h.E)().int().nonnegative().optional(), flagLists: (0, import_chunk_am74sq47.vVe)(), organizationLists: (0, import_chunk_am74sq47.vVe)() }));
async function fe(e, o, r, a = false) {
  let u = r.toolUseContext(), { pluginId: f, hook: h, hookEvent: y, jsonInput: g, hookIndex: S, ...O } = Wo().parse(e);
  if (h.type !== "command" && (h.type !== "http" || !f.endsWith(lt) || y === "SessionStart" || y === "Setup")) throw Error("only a command hook, or an agent's http hook, runs on this machine");
  let A = h.type === "http" && !a && (0, import_chunk_gftn60qp.ok)();
  if (h.type === "http" && !a && !A) await (0, import_chunk_am74sq47.EVe)(u.abortController.signal);
  let k = (0, import_chunk_am74sq47.Lpt)(g);
  if (k.isPathUnmade) return (0, import_chunk_am74sq47.x3t)(y);
  if (h.if && !await (0, import_chunk_am74sq47.Npt)(h.if, k)) return { ...import_chunk_ebhp3wz0.ave, output: { ...import_chunk_ebhp3wz0.ave.output, notStarted: true } };
  let z = f.endsWith(st) ? f.slice(0, -st.length) : void 0, L = z ? await (0, import_chunk_e6sf2edz.ySn)(z, u, null) : void 0;
  if (z && !L) (0, import_chunk_bzyb60p0.b5)(), L = await (0, import_chunk_e6sf2edz.ySn)(z, u, null);
  let R = f.endsWith(at) ? (0, import_chunk_xcgcdx61.Pw)(f.slice(0, -at.length)) : void 0, N = R !== void 0 && (0, import_chunk_xcgcdx61.JRt)(R) && !("reason" in await (0, import_chunk_e6sf2edz.KNo)(R)) ? (0, import_path2.join)(import_chunk_a9nnd83v.zon, import_chunk_a9nnd83v.Q$t, R) : void 0, b = Go(f), j = b !== void 0 || f.endsWith(lt), { storageV5: x, credentials: D } = u, M = b === void 0 ? void 0 : (await (0, import_chunk_am74sq47._Sn)(b, x, D)).plugin, G = true;
  if (b !== void 0 && M === void 0) G = await (0, import_chunk_e6sf2edz.wSn)(r, u.abortController.signal, async () => (M = (await (0, import_chunk_am74sq47._Sn)(b, x, D)).plugin, M !== void 0)), M ??= (await (0, import_chunk_am74sq47._Sn)(b, x, D)).plugin;
  (0, import_chunk_r3mm3x33.pr)();
  let X = b !== void 0 ? M === void 0 || (0, import_chunk_tfs0ssqe.tpe)(await (0, import_chunk_tfs0ssqe.Hgr)(M.source, M.path)) : z !== void 0 && (0, import_chunk_xcgcdx61.Pw)(z) !== z && (!L || (0, import_chunk_e6sf2edz.L5n)(L) !== void 0);
  if ((0, import_chunk_r3mm3x33.pr)(), (0, import_chunk_am74sq47.H5n)(), (0, import_chunk_am74sq47.O3t)(), M !== void 0) (0, import_chunk_am74sq47.VNo)(M);
  else if (b !== void 0) (0, import_chunk_am74sq47.z1s)(b, G, u.session);
  if (X || (0, import_chunk_6zh1j84y.bme)() || h.type === "http" && (0, import_chunk_jhdsf4g3.W5)() || !j && (0, import_chunk_57sd0ak5.Dl)("hooks") || (0, import_chunk_bzyb60p0.sG)() || !j && R === void 0 && (0, import_chunk_2yx6c1y2.Iee)(L?.source ?? "projectSettings")) throw Error("this machine's settings keep a skill's hooks off");
  if (R !== void 0 && N === void 0) throw Error("the host catalog's skill has no folder on this machine");
  u.abortController.signal.throwIfAborted();
  let I = await (0, import_chunk_am74sq47.M5n)(y, k.stdin, h.timeout, u.abortController.signal, () => M !== void 0 && (0, import_chunk_gbskgz33.tWn)(M.source), Bo);
  if (I === "answered") return fe(e, o, r, a);
  if (I !== void 0) return I;
  if (h.type === "http") {
    if (A) return await (0, import_chunk_am74sq47.EVe)(u.abortController.signal), fe(e, o, r, true);
    let W = await (0, import_chunk_am74sq47.GPt)(h, y, k.stdin, h.timeout, u.abortController.signal, O.flagLists, O.organizationLists);
    return { summary: `exit ${W.status}`, output: (0, import_chunk_am74sq47.rIe)({ ...(0, import_chunk_am74sq47.Dpt)(W, y), repairedInput: k.repairedInput }, y) };
  }
  return (0, import_chunk_am74sq47.P3t)(h, y, k, S, u, void 0, false, M?.path ?? L?.skillRoot ?? N);
}
(0, import_chunk_adx6804h.B)();
var ge = "ReadChangedFiles", $o = 3e3, Xo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ permission_context: (0, import_chunk_qaaqd1gd.AY)(), agent_id: (0, import_chunk_mmh7d122.dQs)().optional(), told: (0, import_chunk_adx6804h.Ae)({ id: (0, import_chunk_adx6804h.n)().max(64), count: (0, import_chunk_adx6804h.Zc)().min(0) }).optional() })), vi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().optional(), changed: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ filename: (0, import_chunk_adx6804h.n)(), snippet: (0, import_chunk_adx6804h.n)() })), tracked: (0, import_chunk_adx6804h.E)(), isBusy: (0, import_chunk_adx6804h.v)(true).optional() }));
function ut(e, { path: o, was: r, now: a }) {
  if (e.get(o) === r) e.set(o, a);
}
async function pt(e, o, r) {
  if ((0, import_chunk_0jve1fep.Le)(e) && (0, import_chunk_qaaqd1gd.J3)(e.permission_context)) throw Error("permission_context is too large");
  let { permission_context: a, agent_id: u, told: f } = Xo().parse(e), h = r.launchPermissionContext, y = (0, import_chunk_06pt2b41.npa)(r.session, u);
  if (h === void 0 || y === void 0 || y.size === 0) return { summary: "nothing tracked", output: { changed: [], tracked: 0 } };
  let g = await (0, import_chunk_4gzm04h3.TVe)(ge, r.meta);
  if (g.refused !== void 0) return { summary: "the repo rules could not be read", output: { changed: [], tracked: y.size } };
  let { changedFilesPasses: S } = import_chunk_06pt2b41.EO.of(r.session), O = S.get(y) ?? { copy: (0, import_chunk_5sjwf92x.iv)(y.max, y.maxSize), isRunning: false, answered: void 0 };
  if (S.set(y, O), O.isRunning) return { summary: "a pass is running", output: { isBusy: true, changed: [], tracked: y.size } };
  if (f !== void 0 && f.id === O.answered?.id) O.answered.changes.slice(0, f.count).forEach((I) => {
    ut(y, I);
  });
  O.answered = void 0;
  let A = new Map(y.entries()), k = { ...(0, import_chunk_0jwky18t.sIe)(), toolPermissionContext: (0, import_chunk_b18a27zs.D3)(a, h, (0, import_chunk_f9x2f6cx.Rs)(r.session).originalCwd, g.repoRules) }, z = r.toolUseContext(), { copy: L } = O;
  L.clear(), L.load(y.dump());
  let R = (0, import_chunk_cbnm4p23.sd)(z.abortController), N = setTimeout((I) => I.abort(), $o, R);
  O.isRunning = true;
  let b;
  try {
    b = await (0, import_chunk_bzyb60p0.Mpi)({ ...z, readFileState: L, agentId: u === void 0 ? void 0 : (0, import_chunk_mzmcvr6c.ro)(u), abortController: R, getAppState: () => k });
  } finally {
    clearTimeout(N), O.isRunning = false;
  }
  let j = new Map(y.entries()), x = [], D = [];
  for (let I of b) {
    if (I.type !== "edited_text_file" && I.type !== "edited_image_file") continue;
    let W = I.type === "edited_text_file", q = A.get(I.filename), Ze = W ? L.get(I.filename) : q && { ...q, offset: 1, limit: 1 };
    if (q !== void 0 && Ze !== void 0 && j.get(I.filename) === q) x.push({ filename: I.filename, snippet: W ? I.snippet : "" }), D.push({ path: I.filename, was: q, now: Ze });
  }
  let M = new Set(D.map(({ path: I }) => I));
  for (let [I, W] of A) {
    let q = L.get(I);
    if (q === W || q === void 0 || M.has(I) || j.get(I) !== W) continue;
    if (q.contentHash !== W.contentHash) x.push({ filename: I, snippet: "" }), D.push({ path: I, was: W, now: q });
    else ut(y, { path: I, was: W, now: { ...W, timestamp: q.timestamp } });
  }
  let G = y.size;
  if (D.length === 0) return { summary: "nothing changed", output: { changed: x, tracked: G } };
  let X = (0, import_crypto3.randomUUID)();
  return O.answered = { id: X, changes: D }, { summary: `${D.length} changed`, output: { id: X, changed: x, tracked: G } };
}
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var xe = "OfferAccountContent", Pe = "PutAccountContent", Yo = 2e4, Vo = 8388608, _e = 64, se = () => (0, import_chunk_adx6804h.n)().min(1).max(256), Z = () => (0, import_chunk_adx6804h.n)().max(1024), Jo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: se(), name: Z(), version: Z().nullish(), updated_at: Z().nullish(), marketplace_name: Z().nullish(), installation_preference: Z().nullish(), marketplace_kind: Z().nullish(), presents_as: Z().nullish() })), Zo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: se(), name: Z(), source: Z().optional(), updated_at: Z().nullish(), backing_plugin_id: Z().nullish(), user_invocable: (0, import_chunk_adx6804h.P)().nullish(), disable_model_invocation: (0, import_chunk_adx6804h.P)().nullish() })), dt = (e) => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).max(5e3).transform((o) => o.flatMap((r) => {
  let { success: a, data: u } = e().safeParse(r);
  return a ? [u] : [];
})).optional(), mt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ offer: (0, import_chunk_adx6804h.n)().min(1).max(64), from: (0, import_chunk_adx6804h.c)({ caller: (0, import_chunk_adx6804h.n)().min(1).max(64), offers: (0, import_chunk_adx6804h.E)().int().min(0), session: (0, import_chunk_adx6804h.n)().min(1).max(128), epoch: (0, import_chunk_adx6804h.E)().int().min(0) }), organizationUuid: (0, import_chunk_adx6804h.F8)(), accountUuid: (0, import_chunk_adx6804h.F8)().optional(), listing: (0, import_chunk_adx6804h.zn)("kind", [(0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.v)("plugins"), rows: dt(Jo), degraded: (0, import_chunk_adx6804h.v)(true).optional() }), (0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.v)("skills"), rows: dt(Zo) })]), sending: (0, import_chunk_adx6804h.C)(se()).max(_e).optional(), waitMs: (0, import_chunk_adx6804h.E)().int().min(0).max(Yo) })), Di = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ unknown: (0, import_chunk_adx6804h.v)(true).optional(), wants: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: se(), version: (0, import_chunk_adx6804h.n)().max(256).optional() })).max(_e), ended: (0, import_chunk_adx6804h.P)() })), ft = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.F)(["plugins", "skills"]), id: se(), version: (0, import_chunk_adx6804h.n)().max(256).optional(), part: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ offset: (0, import_chunk_adx6804h.E)().int().min(0), bytes: (0, import_chunk_adx6804h.nyn)().max(Vo), last: (0, import_chunk_adx6804h.P)() }), (0, import_chunk_adx6804h.c)({ failed: (0, import_chunk_adx6804h.n)().max(64) })]) })), ji = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(true) }), (0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(false), reason: Z() })]));
function gt({ pluginsSync: e }) {
  let o = (0, import_chunk_wj4me9k5.Dd)().relay?.listing.skills.length ?? 0;
  return [...e.relay?.listing.plugins.length ? ["plugins"] : [], ...o > 0 ? ["skills"] : []];
}
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var Qo = 65536, Me = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_t9sq3azb.l1r)(), prompt: (0, import_chunk_adx6804h.n)().max(Qo), keepCodingInstructions: (0, import_chunk_adx6804h.P)().optional(), syncedFolderId: (0, import_chunk_adx6804h.n)().max(1024).optional() }).optional().catch(void 0));
async function ht(e, o) {
  let r = e || import_chunk_bzyb60p0.K$;
  (0, import_chunk_bzyb60p0.uen)(), (0, import_chunk_bzyb60p0.fen)();
  let u = (await (0, import_chunk_bzyb60p0.d5)((0, import_chunk_f9x2f6cx.Te)(), o).catch((f) => {
    (0, import_chunk_k449cc64.i)(f);
    return;
  }))?.[r];
  return u == null || (0, import_chunk_bzyb60p0.oNt)(u) ? void 0 : Me().parse({ name: r, prompt: u.prompt, keepCodingInstructions: u.keepCodingInstructions, syncedFolderId: u.syncedFolderId });
}
var yt = "ReadProjectSettings", St = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ ...(0, import_chunk_t9sq3azb.v1s)().shape, respectGitignore: (0, import_chunk_adx6804h.P)().optional() })), _t = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("state", [(0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.v)("absent") }), (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.v)("unreadable") }), (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.v)("read"), settings: St(), turnsTelemetryOff: (0, import_chunk_adx6804h.P)().optional().catch(void 0) })])), ns = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ project: _t(), local: _t(), outputStyle: Me(), user: (0, import_chunk_t9sq3azb.T1s)().optional() }));
async function wt(e, o, r) {
  let a = ve("projectSettings"), u = ve("localSettings"), f = (0, import_chunk_ma3kja9f.T)(e) && e.user === true ? ve("userSettings") : void 0;
  return { summary: "settings read", output: { project: a, local: u, outputStyle: await ht((u.state === "read" ? u.settings.outputStyle : void 0) ?? (a.state === "read" ? a.settings.outputStyle : void 0), r.toolUseContext().storageV5), ...f?.state === "read" && { user: (0, import_chunk_t9sq3azb.T1s)().parse(f.settings) } } };
}
function Ct() {
  return import_chunk_xzvhvaa2.tp.filter((e) => Ot(e, Rt(e)?.settings?.env));
}
function Ot(e, o = {}) {
  return e === "userSettings" ? (0, import_chunk_k449cc64.ILr)(o) : Object.entries(o).some(([r, a]) => (0, import_chunk_k449cc64.ILr)({ [r.toUpperCase()]: a }));
}
function Rt(e) {
  let o = (0, import_chunk_xzvhvaa2.rn)(e) ? (0, import_chunk_2yx6c1y2._n)(e) : void 0;
  if (o === void 0) return;
  let r = (0, import_chunk_4gzm04h3.m1r)(e);
  return r === null ? void 0 : (0, import_chunk_t9sq3azb.Yua)(r ?? (0, import_chunk_6mfepmbb.cO)(o));
}
function ve(e) {
  let o = Rt(e);
  if (o === void 0) return { state: "absent" };
  let { settings: r, loadState: a } = o;
  if (r === null) return { state: a === "absent" ? "absent" : "unreadable" };
  return { state: "read", settings: St().parse(r), ...Ot(e, r.env) && { turnsTelemetryOff: true } };
}
var bt = "ReadEnvironment", ys = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ workingDirectory: (0, import_chunk_adx6804h.n)(), shellDirectory: (0, import_chunk_adx6804h.n)().optional(), isGitRepo: (0, import_chunk_adx6804h.P)(), agentProxy: (0, import_chunk_bzyb60p0.jYo)().nullable().optional().catch(void 0), toolHost: (0, import_chunk_3fv71fhr.i6r)().optional().catch(void 0), runsOnDisk: (0, import_chunk_14xc7vxb.H1s)().optional().catch(void 0), accountContent: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.F)(["plugins", "skills"])).optional().catch(void 0), telemetryOffIn: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).transform((e) => import_chunk_xzvhvaa2.tp.filter((o) => e.includes(o))).optional().catch(void 0) }));
async function At(e, o, { session: r }) {
  let a = (0, import_chunk_f9x2f6cx.Te)();
  return { summary: "the working directory", output: { workingDirectory: a, shellDirectory: (0, import_chunk_f9x2f6cx.Rs)(r).cwd, isGitRepo: (0, import_chunk_w5s307zm.ol)(a) !== null, agentProxy: (0, import_chunk_bzyb60p0.kja)() ?? (import_chunk_c203g5kd.s.CCR_AGENT_PROXY_ENABLED ? void 0 : null), toolHost: import_chunk_3fv71fhr.a6r.of(r.host).ids, runsOnDisk: await (0, import_chunk_14xc7vxb.ofa)(r.host), accountContent: gt(r), telemetryOffIn: Ct() } };
}
(0, import_chunk_adx6804h.B)();
var Ie = "ReadModAncestors", en = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ plugin: (0, import_chunk_adx6804h.n)().max(256), names: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), of: (0, import_chunk_adx6804h.n)().optional(), below: (0, import_chunk_adx6804h.n)().optional() }).refine((e) => (0, import_chunk_1ea72zr6.Els)(e) === void 0)), tn = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.n)().max(4096);
  return (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ dir: e, name: e, parts: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ path: e, content: (0, import_chunk_adx6804h.n)() })).min(1) })).refine((o) => o.reduce((r, { dir: a, name: u, parts: f }) => r + a.length + u.length + (0, import_chunk_28fajby4.I1s)(f), 0) <= import_chunk_28fajby4.FNo);
});
async function Et(e, o, r) {
  let { plugin: a, ...u } = en().parse(e), f = (0, import_chunk_28fajby4.d1r)(e, r);
  if (f === void 0) return { summary: "rules unread", output: { failed: "RULES_UNREAD" } };
  let { session: h } = r.toolUseContext();
  return (0, import_chunk_bzyb60p0.N_t)(h, f.context), { summary: "ancestors", output: await (0, import_chunk_bzyb60p0.jpi)(u, a, { held: () => (0, import_chunk_bzyb60p0.pcr)(f.context)?.within, session: h }).then((g) => {
    let S = tn().safeParse(g).data;
    return S === void 0 || Buffer.byteLength((0, import_chunk_w578pjby._)(S)) > import_chunk_kejyjxvj.Uce ? { failed: "TOO_LARGE" } : { value: S };
  }, (g) => (0, import_chunk_t9sq3azb.x5n)(g)) };
}
(0, import_chunk_adx6804h.B)();
var Lt = "ListProjectAgents", zt = 8388608, sn = 32768, xt = 2e3, an = 1e3, Ys = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ agents: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ filePath: (0, import_chunk_adx6804h.n)(), baseDir: (0, import_chunk_adx6804h.n)(), frontmatter: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()), content: (0, import_chunk_adx6804h.n)(), fromAdditionalDirectory: (0, import_chunk_adx6804h.P)().optional() })).max(xt), cut: (0, import_chunk_adx6804h.P)() })), ye = { bytes: 1 / 0, values: 1 / 0, levels: 1 / 0 };
function Pt(e, o = 0, r = /* @__PURE__ */ new Map()) {
  if (typeof e !== "object" || e === null) return { bytes: Buffer.byteLength((0, import_chunk_w578pjby.cs)(e)), values: 0, levels: 0 };
  let a = r.get(e);
  if (o + (a?.levels ?? 1) > an) return ye;
  if (a !== void 0) return a;
  r.set(e, ye);
  let u = Array.isArray(e) ? e : Object.values(e), f = Math.max(u.length + 1, 2);
  if (u !== e) for (let S of Object.keys(e)) f += Buffer.byteLength((0, import_chunk_w578pjby.cs)(S)) + 1;
  let h = u.length, y = 1;
  for (let S of u) {
    let O = Pt(S, o + 1, r);
    if (f += O.bytes, h += O.values, f > zt) return ye;
    y = Math.max(y, O.levels + 1);
  }
  let g = { bytes: f, values: h, levels: y };
  return r.set(e, g), g;
}
async function Tt(e, o, r) {
  if ((0, import_chunk_0pb268nk.Lr)("agents")) return { summary: "agents are off", output: { agents: [], cut: false } };
  (0, import_chunk_bzyb60p0.YTe)(), (0, import_chunk_r3mm3x33.pr)();
  let a = (0, import_chunk_865at33z.to)(), u = a.markdownScansGivenUp, f = await (0, import_chunk_bzyb60p0.Eie)("agents", (0, import_chunk_f9x2f6cx.Te)(), r.toolUseContext().storageV5);
  o.throwIfAborted();
  let h = [], y = 0, g = 0, S = a.markdownScansGivenUp !== u, O = [];
  if ((0, import_chunk_xzvhvaa2.rn)("projectSettings") && !(0, import_chunk_57sd0ak5.Dl)("agents")) {
    O.push(...await (0, import_chunk_bzyb60p0.kie)("agents", (0, import_chunk_f9x2f6cx.Te)()));
    for (let L of (0, import_chunk_zddv3vvj.WAe)()) {
      let R = (0, import_path3.join)(L, ".claude", "agents");
      if (!await (0, import_chunk_6mfepmbb.but)(R)) O.push(R);
    }
  }
  let A = /* @__PURE__ */ new Set();
  for (let L of new Set(f.map((R) => R.baseDir))) A.add(await (0, import_promises4.realpath)(L));
  for (let L of O) try {
    let R = A.has(await (0, import_promises4.realpath)(L));
    for (let N of await (0, import_promises4.readdir)(L, { withFileTypes: true })) S ||= N.name.endsWith(".md") && !N.isDirectory() && !R;
  } catch (R) {
    if (!(0, import_chunk_jv7av99m.kn)(R)) S = true, (0, import_chunk_w578pjby.t)(`ListProjectAgents: ${L} is there and cannot be read: ${(0, import_chunk_jv7av99m.w)(R)}`, { level: "error" });
  }
  o.throwIfAborted();
  let k = f.toSorted((L, R) => Number(L.fromAdditionalDirectory ?? false) - Number(R.fromAdditionalDirectory ?? false)), z = /* @__PURE__ */ new Set();
  for (let L of k) {
    let { filePath: R, baseDir: N, frontmatter: b, content: j, source: x } = L;
    if (x !== "projectSettings") continue;
    let D = { filePath: R, baseDir: N, frontmatter: b, content: j, ...L.fromAdditionalDirectory && { fromAdditionalDirectory: true } }, M = Pt(D);
    if (M !== ye && !(0, import_chunk_bzyb60p0.BPn)(R, N, b, j, x)) {
      if (!z.has(L)) {
        let G = { ...L, frontmatter: {}, content: "" };
        z.add(G), k.push(G);
        continue;
      }
      if (!S) continue;
    }
    if (h.length === xt || y + M.bytes > zt || g + M.values + 1 > sn) {
      S = true;
      continue;
    }
    y += M.bytes, g += M.values + 1, h.push(D);
  }
  return { summary: `${h.length} agents${S ? ", cut at a limit" : ""}`, output: { agents: h, cut: S } };
}
(0, import_chunk_adx6804h.B)();
var Mt = "ListOrgConnectorMcpServers", vt = "RelayOrgConnectorMcpMessage", ln = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)().startsWith(import_chunk_3f4m74y6.ZDr).regex(/^(?!.*[._]{2})[A-Za-z0-9._-]+[A-Za-z0-9]$/).max(import_chunk_3f4m74y6.Qta), (0, import_chunk_adx6804h.Ae)({ type: (0, import_chunk_adx6804h.F)(["http", "sse"]), url: (0, import_chunk_adx6804h.L6e)({ protocol: /^https$/ }).max(4096) })).refine((e) => Object.keys(e).length <= import_chunk_am74sq47.jPt));
function It(e, o, r) {
  let a = ln().safeParse(Object(e).servers);
  if (!a.success) throw Error("Takes `servers`: http or sse entries with an https URL, each under a name that starts with org-connector-, has only letters, digits, . _ and -, has no two of . and _ in a row, ends in a letter or a digit, and has at most 128 characters");
  let { list: u } = import_chunk_am74sq47.Rse.of(r.session);
  return u("orgConnectors", async function() {
    await (0, import_chunk_bzyb60p0.hA)(), (0, import_chunk_r3mm3x33.pr)();
    let { config: h } = (0, import_chunk_bzyb60p0.bSt)({ configObject: { mcpServers: a.data }, expandVars: false, scope: "dynamic" }), { allowed: y } = (0, import_chunk_bzyb60p0.SH)(h?.mcpServers ?? {}), g = {};
    for (let [S, O] of Object.entries(y)) g[S] = { ...O, scope: "dynamic" };
    return g;
  }, o, r);
}
function Nt(e, o, r) {
  return (0, import_chunk_am74sq47.O5n)("orgConnectors", e, o, r);
}
(0, import_chunk_adx6804h.B)();
var Ft = "ListPluginMcpServers", Dt = "RelayPluginMcpMessage", jt = "ResolvePluginMcpServer", Ht = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ pluginId: (0, import_chunk_adx6804h.n)(), key: (0, import_chunk_adx6804h.n)(), sources: (0, import_chunk_ebhp3wz0.C5n)().shape.sources.readonly().optional() })), Ut = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.F)(["stdio", "http", "sse"])), Gt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), transport: Ut(), address: (0, import_chunk_adx6804h.n)().optional() })), cn = (0, import_chunk_2cbgkbm2.p)(() => Ht().extend(Gt().shape)), ka = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ refused: (0, import_chunk_adx6804h.F)(["unlisted", "unapproved", "disabled", "policy", "failed"]), message: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ twin: (0, import_chunk_adx6804h.n)() }), Gt().extend({ signature: (0, import_chunk_adx6804h.n)().optional() })])), un = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ waitMs: (0, import_chunk_adx6804h.E)().int().positive().optional().catch(void 0), resync: (0, import_chunk_adx6804h.P)().optional().catch(void 0), registeredHooks: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_e6sf2edz.qNo)()).optional().catch(void 0), tasks: (0, import_chunk_adx6804h.P)().optional().catch(void 0), connected: (0, import_chunk_adx6804h.C)(cn()).max(import_chunk_am74sq47.jPt).optional().catch(void 0), declared: (0, import_chunk_adx6804h.P)().optional().catch(void 0), only: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().catch(void 0) }));
function pn({ type: e, command: o }) {
  return e === "stdio" || e === void 0 && typeof o === "string";
}
function dn(e, o) {
  let r = e.lastIndexOf("@");
  return `plugin:${r === -1 ? e : e.slice(0, r)}:${o}`;
}
function Bt(e) {
  if (!("url" in e)) return;
  let o = "headersHelper" in e && !!e.headersHelper || "headers" in e && Object.keys(e.headers ?? {}).length > 0;
  return (0, import_chunk_ccm69jjy.Je)(`${o} ${e.url}`);
}
function mn(e) {
  let o = "url" in e ? (0, import_chunk_bzyb60p0.RP)(e) : null;
  return o === null ? void 0 : (0, import_chunk_ccm69jjy.Je)(o);
}
async function Wt(e, o, r) {
  let a = Ht().parse(e), { storageV5: u, credentials: f } = r.toolUseContext();
  if ((0, import_chunk_r3mm3x33.pr)(), a.sources === void 0) await (0, import_chunk_e6sf2edz.SSn)(r.session, f, { resync: false, deadline: (0, import_chunk_5appeerh.K)((0, import_chunk_bzyb60p0.ane)(), o, { unref: true }) });
  o.throwIfAborted(), (0, import_chunk_bzyb60p0.Hd)(u, f);
  let { enabled: h } = await (0, import_chunk_bzyb60p0.pi)(u, f), y = await Kt(a, r), { resolution: g } = await Xt(a, h, r, y);
  if (!g.isListed) {
    let { refused: R, message: N } = g;
    return { summary: R, output: { refused: R, message: N } };
  }
  if (g.isTwin) return { summary: "twin", output: { twin: g.name } };
  let { name: S, config: O } = g;
  if (y !== void 0 && await $t(y, r)) return { summary: "failed", output: { refused: "failed", message: `The MCP server "${S}" did not connect: this session does not run every hook of its plugin.` } };
  let A = Ut().safeParse(O.type ?? "stdio").data;
  if (A === void 0) return { summary: "failed", output: { refused: "failed", message: `The MCP server "${S}" has a transport this session cannot connect.` } };
  let k = Bt(O), z = mn(O);
  return { summary: "resolved", output: { name: S, transport: A, address: k, signature: z } };
}
async function Kt({ pluginId: e, sources: o }, r, a = 1 / 0) {
  if (o === void 0) return;
  try {
    let u = { sources: [...o], waitMs: a };
    return (await (0, import_chunk_ebhp3wz0.a1r)(r.toolUseContext(), u)).find(({ row: h }) => h.pluginId === e);
  } catch (u) {
    (0, import_chunk_w578pjby.t)(`$.mcp.connect: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "warn" });
    return;
  }
}
async function $t({ plugin: e, load: o }, r) {
  let a = { sourceName: e.source, pluginPath: e.path };
  return (r.session.pluginsSync.settingsInstall.loaded?.plugins?.enabled.includes(e) ? [o, await (0, import_chunk_e6sf2edz.bSn)([e], r.toolUseContext().storageV5)] : [o]).some(({ enabled: h, errors: y }) => {
    let g = h.map((S) => ({ ...S, modulePath: void 0 }));
    return (0, import_chunk_e6sf2edz.oIe)(a, { enabled: g, errors: y }, void 0);
  });
}
async function Xt({ pluginId: e, key: o }, r, a, u) {
  let { storageV5: f, credentials: h } = a.toolUseContext(), y = u?.plugin ?? r.find((S) => (0, import_chunk_xcgcdx61.is)(S.source) === import_chunk_xcgcdx61.qs && (0, import_chunk_bzyb60p0.nG)(S.path) === e), g = await (0, import_chunk_phwepfsh.X3t)({ pluginId: y?.source ?? "", key: o, storageV5: f, credentials: h, dynamicServers: {}, load: u?.load });
  return { plugin: y, resolution: g };
}
function Yt(e, o, r) {
  return (0, import_chunk_am74sq47.O5n)("plugins", e, o, r);
}
async function Vt(e, o, r) {
  let a = un().safeParse(e ?? {}).data, { list: u } = import_chunk_am74sq47.Rse.of(r.session), f = await u("plugins", fn(a ?? {}), o, r, false, { tasks: a?.tasks });
  return { ...f, output: { ...f.output, hooksChecked: true } };
}
function fn({ waitMs: e = 1 / 0, resync: o = false, registeredHooks: r, connected: a = [], declared: u = true, only: f }) {
  return async function(y, g) {
    let { storageV5: S, credentials: O } = g.toolUseContext(), A = (0, import_chunk_5appeerh.K)(Math.min((0, import_chunk_bzyb60p0.ane)(), e), y, { unref: true });
    if (u || o || a.some((x) => !x.sources)) await (0, import_chunk_e6sf2edz.SSn)(g.session, O, { resync: o, deadline: A });
    y.throwIfAborted(), (0, import_chunk_bzyb60p0.Hd)(S, O);
    let k = await (0, import_chunk_am74sq47.WNo)(g), z = await (0, import_chunk_bzyb60p0.pi)(S, O), L = new Map(z.enabled.map((x) => [x.source, { folder: (0, import_chunk_bzyb60p0.nG)(x.path), pluginPath: x.path }])), R = {}, N = 0, b = 0;
    for (let [x, D] of u ? Object.entries(k) : []) {
      let { pluginSource: M } = D, G = M && L.get(M);
      if (!G || (0, import_chunk_xcgcdx61.is)(M) !== import_chunk_xcgcdx61.qs || !pn(D) || f?.includes(x) === false || a.some((q) => q.name === x)) continue;
      let X = (0, import_chunk_px0hhsq7.hOe)(x)?.serverName, I = X && dn(G.folder, X);
      if (I !== x) {
        N++;
        continue;
      }
      let W = { sourceName: M, pluginPath: G.pluginPath };
      if ((0, import_chunk_e6sf2edz.oIe)(W, z, r?.[G.folder])) {
        b++;
        continue;
      }
      R[I] = D;
    }
    let j = await Promise.all(a.map((x) => Kt(x, g, e)));
    for (let [x, D] of a.entries()) {
      let M = j[x], { plugin: G, resolution: X } = await Xt(D, z.enabled, g, M);
      if (G === void 0 || !X.isListed || X.isTwin || X.name !== D.name || (X.config.type ?? "stdio") !== D.transport || Bt(X.config) !== D.address) continue;
      let I = r?.[D.pluginId], W = { sourceName: G.source, pluginPath: G.path };
      if (M === void 0 ? (0, import_chunk_e6sf2edz.oIe)(W, z, I === void 0 ? [import_chunk_e6sf2edz.YNo] : I) : await $t(M, g)) {
        b++;
        continue;
      }
      R[X.name] = X.config;
    }
    if (N > 0) (0, import_chunk_cqa9hrgx.l)("ccs_plugin_mcp", "named_otherwise_by_manifest");
    if (b > 0) (0, import_chunk_cqa9hrgx.l)("ccs_plugin_mcp", "hooks_differ");
    return R;
  };
}
(0, import_chunk_adx6804h.B)();
var Jt = "ReadRepoGitState", Ne = 32, Fe = 64, qt = 256, Zt = 4096, gn = 255, Qt = /^\/[^\p{C}\p{Zl}\p{Zp}]*$/u, Na = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ branches: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)().max(qt), (0, import_chunk_adx6804h.n)().max(gn).nullable()).refine(hn), events: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.zn)("subtype", [(0, import_chunk_adx6804h.c)({ subtype: (0, import_chunk_adx6804h.v)("code_change_published"), url: (0, import_chunk_adx6804h.n)().max(import_chunk_3hr8g93j.kxt), action: (0, import_chunk_xfj2cwfv.D5i)().shape.action.unwrap(), branch: (0, import_chunk_adx6804h.n)().refine(import_chunk_sjqze7qg.cDn).optional() }), (0, import_chunk_adx6804h.c)({ subtype: (0, import_chunk_adx6804h.v)("vcs_state_changed"), kind: (0, import_chunk_xfj2cwfv.L5i)().shape.kind, cwd: (0, import_chunk_adx6804h.n)().max(Zt).regex(Qt), branch: (0, import_chunk_adx6804h.n)().refine(import_chunk_sjqze7qg.cDn).optional() })]).nullable().catch(null)).max(Fe), cut: (0, import_chunk_adx6804h.P)().optional() }));
async function eo(e, o, { callerGone: r }) {
  let a = [...(0, import_chunk_e15pxvhz.Dot)()], u = a.length > Ne, f = [];
  for (let [g, S] of a.slice(0, Ne)) {
    if (g.length > qt) {
      u = true;
      continue;
    }
    let O = (0, import_chunk_e15pxvhz.Lot)(S);
    if (O === null) continue;
    let A = await (0, import_chunk_w5s307zm.SOe)(O);
    if (A !== null) {
      let k = await (0, import_chunk_w5s307zm.O8)(A);
      f.push([g, k?.type === "branch" && (0, import_chunk_sjqze7qg.cDn)(k.name) ? k.name : null]);
    }
  }
  await (0, import_chunk_sjqze7qg.Enn)(), o.throwIfAborted(), r?.throwIfAborted();
  let h = [];
  for (let g of (0, import_chunk_865at33z.sdt)()) {
    if (g.type !== "system") continue;
    if (g.subtype === "code_change_published") h.push({ subtype: g.subtype, url: g.url, action: g.action, ...g.branch !== void 0 && { branch: g.branch } });
    else if (g.subtype === "vcs_state_changed") {
      if (g.cwd.length > Zt || !Qt.test(g.cwd)) {
        u = true;
        continue;
      }
      h.push({ subtype: g.subtype, kind: g.kind, cwd: g.cwd, ..."branch" in g && g.branch !== void 0 && (0, import_chunk_sjqze7qg.cDn)(g.branch) && { branch: g.branch } });
    }
  }
  u ||= h.length > Fe;
  let y = h.slice(-Fe);
  return { summary: `${f.length} checkouts, ${y.length} events`, output: { branches: Object.fromEntries(f), events: y, ...u && { cut: u } } };
}
function hn(e) {
  return Object.keys(e).length <= Ne;
}
async function oo(e) {
  let { configRowHandle: o, pluginConfigSettings: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-nwm6xw8c.js"))), { session: a, storageV5: u, credentials: f } = e.toolUseContext();
  await (0, import_chunk_am74sq47.D5n)(a.host);
  let { enabled: h } = await ((0, import_chunk_ebhp3wz0.k1s)() ?? (0, import_chunk_bzyb60p0.pi)(u, f)), y = new Map(h.filter((g) => (0, import_chunk_xcgcdx61.is)(g.source) === import_chunk_xcgcdx61.qs).map((g) => [g.source, (0, import_chunk_bzyb60p0.nG)(g.path)]));
  return r(h, { storageV5: u }).map(o).flatMap((g) => {
    let S = y.get(g.row.provider.plugin);
    return S === void 0 ? [] : { pluginId: S, handle: g };
  });
}
(0, import_chunk_adx6804h.B)();
var je = "ReadSessionRepo", yn = /^[^\p{C}\p{Zl}\p{Zp}]*$/u, no = /^\/[^\p{C}\p{Zl}\p{Zp}]*$/u, De = 4096, Xa = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.n)().max(De).regex(yn);
  return (0, import_chunk_adx6804h.c)({ repo: (0, import_chunk_adx6804h.c)({ root: (0, import_chunk_adx6804h.n)().max(De).regex(no), remote: e.nullable(), internal: (0, import_chunk_adx6804h.P)(), name: e.nullable() }).nullable() });
}), Sn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ cwd: (0, import_chunk_adx6804h.n)().max(De).regex(no).optional() }));
async function io(e) {
  let { cwd: o } = Sn().parse(e), r = o !== void 0 && (0, import_chunk_ya9q1k3s.x4)(o) ? null : await (0, import_chunk_bzyb60p0.$pi)(o);
  return { summary: r === null ? "no repo" : "a repo", output: { repo: r } };
}
(0, import_chunk_adx6804h.B)();
var He = "ReadTaskOutput", wn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ task_id: (0, import_chunk_adx6804h.n)() })), Za = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ output: (0, import_chunk_adx6804h.n)().max(import_chunk_4f4ysf31.Bhs), total_bytes: (0, import_chunk_adx6804h.E)().int().min(0), truncated: (0, import_chunk_adx6804h.P)() }));
async function so(e) {
  let { task_id: o } = wn().parse(e);
  if (!(0, import_chunk_ed372ykp.uG)("local_bash", o)) throw Error("ReadTaskOutput: no shell task has that task_id");
  let { content: r, bytesRead: a, bytesTotal: u } = await (0, import_chunk_4f4ysf31.JBt)(o);
  return { summary: `Read ${a} of ${u} bytes.`, output: { output: r, total_bytes: u, truncated: a < u } };
}
(0, import_chunk_adx6804h.B)();
var ao = "RunBashCommand", Cn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ command: (0, import_chunk_adx6804h.n)(), cwd: (0, import_chunk_adx6804h.n)().optional() })), tl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ outputText: (0, import_chunk_adx6804h.n)(), exitCode: (0, import_chunk_adx6804h.E)() }));
async function lo(e, o, r) {
  let { command: a, cwd: u } = Cn().parse(e), { session: f, abortController: h } = r.toolUseContext(), { runHeadlessBashCommand: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2g5zpgxj.js"))), { outputText: g, exitCode: S } = await y({ command: a, cwd: u, abortSignal: h.signal, session: f });
  return { summary: `exit ${S}`, output: { outputText: g, exitCode: S } };
}
var Rn = 6e4, bn = 2;
class uo {
  wanted;
  destPath;
  file;
  written = 0;
  isOver = false;
  lastPut = Promise.resolve();
  result = Promise.withResolvers();
  constructor(e, o) {
    this.wanted = e;
    this.destPath = o;
  }
  put(e) {
    let o = this.lastPut.then(() => this.take(e));
    return this.lastPut = o, o;
  }
  async end(e) {
    if (this.isOver) return { ok: false, reason: "not_wanted" };
    this.isOver = true;
    let { file: o } = this;
    if (this.file = void 0, await o?.close().catch(() => {
    }), !e.ok) await (0, import_promises5.rm)(this.destPath, { force: true }).catch(() => {
    });
    return this.result.resolve(e), e;
  }
  async take({ offset: e, bytes: o, last: r }) {
    if (this.isOver) return { ok: false, reason: "not_wanted" };
    if (e > this.written) return { ok: false, reason: "out_of_order" };
    let a = e + o.length;
    if (a > import_chunk_6mfepmbb.rge) return this.end({ ok: false, reason: "too_large" });
    try {
      let u = this.file ?? await this.openFile();
      if (u === void 0) return { ok: false, reason: "not_wanted" };
      if (await u.write(o, 0, o.length, e), this.written = a, !r) return { ok: true };
      await u.truncate(a);
      let f = Buffer.alloc(bn), { bytesRead: h } = await u.read(f, 0, f.length, 0);
      return await this.end((0, import_chunk_a9nnd83v.SNn)(f.subarray(0, h)) ? { ok: true } : { ok: false, reason: "not_zip" });
    } catch {
      return this.end({ ok: false, reason: "not_written" });
    }
  }
  async openFile() {
    let e = await (0, import_promises5.open)(this.destPath, "w+");
    if (this.isOver) {
      await e.close().catch(() => {
      }), await (0, import_promises5.rm)(this.destPath, { force: true }).catch(() => {
      });
      return;
    }
    return this.file = e, e;
  }
}
class Se {
  listing;
  underWay;
  wants = /* @__PURE__ */ new Map();
  waiters = /* @__PURE__ */ new Set();
  silence;
  openCalls = 0;
  isCallerThere = false;
  hasOvertaken(e) {
    let o = this.underWay?.from;
    return o !== void 0 && (o.caller === e.caller && o.offers > e.offers || o.session === e.session && o.epoch > e.epoch);
  }
  constructor(e) {
    this.listing = e;
  }
  async download(e, o) {
    if (!this.isCallerThere) return { ok: false, reason: "caller_silent" };
    let r = Ue(e);
    await this.wants.get(r)?.end({ ok: false, reason: "asked_again" });
    let a = new uo(e, o);
    this.wants.set(r, a);
    for (let f of [...this.waiters]) f();
    let u = await a.result.promise;
    if (this.wants.get(r) === a) this.wants.delete(r);
    return u;
  }
  wanted() {
    return [...this.wants.values()].map(({ wanted: { id: e, version: o } }) => ({ id: e, ...o !== void 0 && { version: o } }));
  }
  async put(e, o) {
    return this.wants.get(Ue(e))?.put(o) ?? { ok: false, reason: "not_wanted" };
  }
  async fail(e, o) {
    await this.wants.get(Ue(e))?.end({ ok: false, reason: o });
  }
  async whileCalled(e) {
    this.openCalls++, this.isCallerThere = true, clearTimeout(this.silence);
    try {
      return await e();
    } finally {
      if (this.openCalls--, this.openCalls === 0) this.silence = setTimeout(An, Rn, this), this.silence.unref();
    }
  }
  callerLeft() {
    clearTimeout(this.silence), this.isCallerThere = false;
    for (let e of [...this.wants.values()]) e.end({ ok: false, reason: "caller_silent" });
  }
  async untilWanted(e, o) {
    while (!o.aborted && this.wanted().every(({ id: r }) => e(r))) await new Promise((r) => {
      let a = () => {
        this.waiters.delete(a), o.removeEventListener("abort", a), r();
      };
      this.waiters.add(a), o.addEventListener("abort", a, { once: true });
    });
  }
}
function An(e) {
  e.callerLeft();
}
function Ue({ id: e, version: o }) {
  return `${e}\0${o ?? ""}`;
}
async function po(e, o, r) {
  let { offer: a, from: u, listing: f, sending: h, waitMs: y, organizationUuid: g, accountUuid: S } = mt().parse(e), O = (0, import_chunk_t9fn978c.h0)(r.session) ? null : f.kind === "plugins" ? Ln(r, u, f.rows, f.degraded) : xn(u, f.rows);
  if (O === null || O.hasOvertaken(u) || f.rows === void 0 && O.underWay?.offer !== a) return { summary: "unknown offer", output: { unknown: true, wants: [], ended: false } };
  let A = await O.whileCalled(async () => {
    if (O.underWay?.offer !== a) (0, import_chunk_wj4me9k5.Dd)().handedOverBucket = (0, import_chunk_mgntjepj.Q2n)(g, S), O.underWay = Pn(a, u, f.kind, r);
    let { underWay: k } = O, z = new Set(h), L = new AbortController();
    return await Promise.race([k.round, O.untilWanted((R) => z.has(R), AbortSignal.any([o, AbortSignal.timeout(y), L.signal]))]), L.abort(), { wants: O.wanted().filter(({ id: R }) => !z.has(R)).slice(0, _e), ended: k.isOver };
  });
  if (A.ended && O.wanted().length === 0) O.callerLeft();
  return { summary: `${A.wants.length} archives wanted, the round has ${A.ended ? "" : "not "}ended`, output: A };
}
async function mo(e, o, r) {
  let { kind: a, part: u, ...f } = ft().parse(e), h = a === "plugins" ? r.session.pluginsSync.relay : (0, import_chunk_wj4me9k5.Dd)().relay, y = h === null ? { ok: false, reason: "not_wanted" } : await h.whileCalled(() => En(h, f, u));
  return { summary: y.ok ? "taken" : y.reason, output: y };
}
async function En(e, o, r) {
  if ("failed" in r) return await e.fail(o, r.failed), { ok: true };
  return e.put(o, { ...r, bytes: Buffer.from(r.bytes, "base64") });
}
function Ln({ session: e }, o, r, a) {
  let u = e.pluginsSync;
  if (r !== void 0 && u.relay?.hasOvertaken(o) !== true) {
    let f = { plugins: r, ...a && { degraded: a } };
    u.relay ??= new Se(f), u.relay.listing = f;
  }
  return u.relay;
}
function xn(e, o) {
  let r = (0, import_chunk_wj4me9k5.Dd)();
  if (o !== void 0 && r.relay?.hasOvertaken(e) !== true) r.relay ??= new Se({ skills: o }), r.relay.listing = { skills: o };
  return r.relay;
}
function Pn(e, o, r, a) {
  let { storageV5: u, credentials: f } = a.toolUseContext(), y = { offer: e, from: o, isOver: false, round: (() => {
    if (r === "plugins") return (0, import_chunk_jhdsf4g3.y7)(), (0, import_chunk_bzyb60p0.N4e)(a.session, f).finally(() => (0, import_chunk_bzyb60p0.Hd)(u, f));
    (0, import_chunk_tfs0ssqe.ZF)();
    let g = (0, import_chunk_wj4me9k5.Dd)();
    if (g.firstSyncPromise !== null) return (0, import_chunk_539hrhrd.h8t)(a.session, u, f);
    return (0, import_chunk_539hrhrd.WIe)(a.session, u, f), g.firstSyncPromise ?? Promise.resolve();
  })().catch(import_chunk_k449cc64.i).then(() => {
    y.isOver = true;
  }) };
  return y;
}
(0, import_chunk_adx6804h.B)();
var fo = "StageFile", Tn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ mount_path: (0, import_chunk_adx6804h.n)().min(1).max(4096), force: (0, import_chunk_adx6804h.P)().optional(), credential: (0, import_chunk_adx6804h.Ae)({ filestore_jwt: (0, import_chunk_adx6804h.n)().min(1).max(16384), filesystem_id: (0, import_chunk_adx6804h.n)().min(1).max(256), filestore_url: (0, import_chunk_adx6804h.n)().max(2048).optional() }), connector_checks_made: (0, import_chunk_adx6804h.v)(true).optional(), browser_checks_made: (0, import_chunk_adx6804h.v)(true).optional() })), Cl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(true), noop: (0, import_chunk_adx6804h.n)().optional(), replaced: (0, import_chunk_adx6804h.F)(["nothing", "not_a_file", "same_contents", "different_contents", "same_size_not_compared", "unknown"]).optional().catch(void 0), standing_vs_placed_code: (0, import_chunk_adx6804h.v)([1, 2, 3, 4, 5]).optional().catch(void 0) }), (0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(false), error: (0, import_chunk_adx6804h.n)(), permanent: (0, import_chunk_adx6804h.v)(true).optional() })]));
async function go(e) {
  let { mount_path: o, force: r, credential: a, connector_checks_made: u, browser_checks_made: f } = Tn().parse(e), { stageFile: h, stageFileWireResult: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vrd3zykg.js"))), g = await h({ mount_path: o, force: r, connector_checks_made: u, browser_checks_made: f }, a);
  return g.ok ? { summary: "staged", output: { ...y(g), ...g.standing_vs_placed_code !== void 0 && { standing_vs_placed_code: g.standing_vs_placed_code } } } : { summary: "not staged", output: g };
}
(0, import_chunk_adx6804h.B)();
var Ge = "WorkspaceDiffForRemote", Mn = 3e4, vn = { perFileMs: 2e3, totalMs: 6e3 }, In = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ permission_context: (0, import_chunk_qaaqd1gd.AY)() })), Ml = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ answer: (0, import_chunk_xfj2cwfv.U5i)().refine((e) => {
  let o = 0;
  for (let r of e.diff?.hunks ?? []) for (let a of r.hunks) for (let u of a.lines) o += u.length;
  return o <= import_chunk_yd3aejbx.Mpt && Buffer.byteLength((0, import_chunk_w578pjby._)(e)) <= import_chunk_yd3aejbx.Mpt;
}).optional() }));
async function ho(e, o, r) {
  if ((0, import_chunk_0jve1fep.Le)(e) && (0, import_chunk_qaaqd1gd.J3)(e.permission_context)) throw Error("permission_context is too large");
  return Nn(In().parse(e), o, r);
}
var Nn = (0, import_chunk_w71cxznt.Rl)(1, Fn);
async function Fn({ permission_context: e }, o, r) {
  o.throwIfAborted(), r.callerGone?.throwIfAborted();
  let a = r.launchPermissionContext && (0, import_chunk_yd3aejbx.A3t)(r.launchPermissionContext);
  if (!a) return { summary: "read denied", output: {} };
  let { buildWorkspaceDiffResponse: u } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-c2v2c6hn.js"))), f = Dn(await u(r.session.host, { ...(0, import_chunk_b18a27zs.D3)(e, a, (0, import_chunk_f9x2f6cx.Rs)(r.session).originalCwd), ...a.blockReadsOutsideWorkingDirectories && { blockReadsOutsideWorkingDirectories: true } }, vn));
  return { summary: f.diff ? `${f.diff.perFileStats.length} rows` : "no diff", output: { answer: f } };
}
function Dn(e) {
  let { diff: o } = e;
  if (o === null) return e;
  let r = Buffer.byteLength((0, import_chunk_w578pjby._)({ diff: { ...o, hunks: [], skippedLarge: [...o.skippedLarge, ...o.hunks.map((h) => h.path)] } })), a = 0, u = [], f = [...o.skippedLarge];
  for (let h of o.hunks) {
    let y = Buffer.byteLength((0, import_chunk_w578pjby._)(h)) + 1, g = h.hunks.reduce((S, O) => S + 1 + Object.keys(O).length + O.lines.length, 0);
    if (r + y > import_chunk_yd3aejbx.Mpt || a + g > Mn) {
      f.push(h.path);
      continue;
    }
    r += y, a += g, u.push(h);
  }
  return { diff: { ...o, hunks: u, skippedLarge: f } };
}
var Bn = "ReadFileBytes";
var Wn = "WriteFileBytes", Kn = "PlaceFiles", te = { maxFiles: 16, maxFileBytes: 31457280, maxTotalBytes: 67108864 }, Co = 6291456, ce = () => (0, import_chunk_adx6804h.n)().refine((e) => import_path.posix.isAbsolute(e) && !(0, import_chunk_z6pfqf6e.pg)(e) && !(0, import_chunk_z6pfqf6e.ja)(e), "must be an absolute local path"), $n = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ path: ce(), offset: (0, import_chunk_adx6804h.E)().int().min(0), length: (0, import_chunk_adx6804h.E)().int().min(0).max(Co) })), Xc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ size: (0, import_chunk_adx6804h.E)(), bytes: (0, import_chunk_adx6804h.n)() })), qe = () => (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f-]{8,36}$/), Xn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ path: ce(), write_id: qe(), offset: (0, import_chunk_adx6804h.E)().int().min(0), bytes: (0, import_chunk_adx6804h.n)().max(Math.ceil(Co / 3) * 4), last: (0, import_chunk_adx6804h.P)(), mode: (0, import_chunk_adx6804h.E)().int().min(0).max(511).optional(), staged: (0, import_chunk_adx6804h.n)().max(64).optional(), abandon: (0, import_chunk_adx6804h.P)().optional(), keep_existing: (0, import_chunk_adx6804h.P)().optional(), keep_any_kind: (0, import_chunk_adx6804h.P)().optional(), compare_kept_with: (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f]{64}$/).optional(), stop_if_caller_gone: (0, import_chunk_adx6804h.P)().optional() })), Yc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ written: (0, import_chunk_adx6804h.E)(), placed: (0, import_chunk_adx6804h.P)(), staged: (0, import_chunk_adx6804h.n)(), kept: (0, import_chunk_adx6804h.P)().optional(), kept_compares: (0, import_chunk_adx6804h.F)(be).optional().catch(void 0), keeps_existing: (0, import_chunk_adx6804h.P)().optional(), keeps_any_kind: (0, import_chunk_adx6804h.P)().optional(), compares_kept: (0, import_chunk_adx6804h.P)().optional(), stops_for_gone_caller: (0, import_chunk_adx6804h.P)().optional() }));
function Xe(e) {
  return e !== "." && e !== ".." && !/[/\\\0]/.test(e) && !e.startsWith(import_chunk_6mfepmbb.r2) && Buffer.byteLength(e) <= 255;
}
var Yn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ directory: ce(), archive: (0, import_chunk_adx6804h.Ae)({ write_id: qe(), staged: (0, import_chunk_adx6804h.n)().min(1).max(64) }).optional(), files: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.Ae)({ name: (0, import_chunk_adx6804h.n)().min(1).refine(Xe, "must be a file name of at most 255 bytes, with no directory, that is not a staging name"), size: (0, import_chunk_adx6804h.E)().int().min(0).max(te.maxFileBytes), sha256: (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f]{64}$/), offset: (0, import_chunk_adx6804h.E)().int().min(0).max(te.maxTotalBytes), length: (0, import_chunk_adx6804h.E)().int().min(0).max(te.maxTotalBytes), mode: (0, import_chunk_adx6804h.E)().int().min(0).max(511).optional() })).max(te.maxFiles), keep_existing: (0, import_chunk_adx6804h.P)().optional(), compare_kept: (0, import_chunk_adx6804h.P)().optional() })), Vc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ placed: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.P)()), kept: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.P)()).optional(), kept_compares: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.F)(be).nullable()).optional().catch(void 0), keeps_existing: (0, import_chunk_adx6804h.P)().optional(), compares_kept: (0, import_chunk_adx6804h.P)().optional(), limits: (0, import_chunk_adx6804h.c)({ max_files: (0, import_chunk_adx6804h.E)(), max_file_bytes: (0, import_chunk_adx6804h.E)(), max_total_bytes: (0, import_chunk_adx6804h.E)() }) }));
function Be(...[e, o, r]) {
  return (0, import_chunk_t9sq3azb.C1s)(e, o, r, { settingsDropped: () => (0, import_chunk_am74sq47.D5n)(r.toolUseContext().session.host), optionRows: () => oo(r) });
}
var Jc = /* @__PURE__ */ new Map([[Bn, Qn], [Wn, er], [Kn, sr], [fo, go], ["FetchAttachment", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5jveksvj.js")))).fetchAttachmentHere(e, r.callerGone === void 0 ? o : AbortSignal.any([o, r.callerGone]), { heldDirectory: ne, isPlaceableName: Xe, refuseLinkToNetworkPath: oe })], [xe, po], [Pe, mo], ["NoteSavedUploads", async (e) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-44t54bhb.js")))).noteSavedUploadsHere(e, Xe)], ["RemoveDeletedUploads", async (e) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-44t54bhb.js")))).removeDeletedUploadsHere(e)], ["FindDeletedStagedUploads", async (e) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-44t54bhb.js")))).findDeletedStagedUploadsHere(e)], ["RemoveDeletedStagedUploads", async (e) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-44t54bhb.js")))).removeDeletedStagedUploadsHere(e)], ["RemovePromptFilesExcept", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dpd2ch5f.js")))).removePromptFilesExceptHere(e, r.callerGone === void 0 ? o : AbortSignal.any([o, r.callerGone]), ne)], ["StoreOutputs", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-tpt3nzyp.js")))).storeOutputsHere(e, r.callerGone === void 0 ? o : AbortSignal.any([o, r.callerGone]))], ["SearchWeb", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dt9188w9.js")))).searchWeb(e, r.callerGone === void 0 ? o : AbortSignal.any([o, r.callerGone]))], [Oe, et], [import_chunk_yd3aejbx.Iua, import_chunk_yd3aejbx.Mua], [ze, tt], [Ge, ho], [ao, lo], [import_chunk_zspzqk1p.$No, import_chunk_zspzqk1p.D1s], [import_chunk_4sncjgqg.aFo, import_chunk_4sncjgqg.p$s], [import_chunk_4sncjgqg.d$s, import_chunk_4sncjgqg.g$s], [import_chunk_4sncjgqg.c$s, import_chunk_4sncjgqg.m$s], [import_chunk_4sncjgqg.u$s, import_chunk_4sncjgqg.h$s], [import_chunk_e6sf2edz.Ofa, import_chunk_e6sf2edz.Hfa], [import_chunk_am74sq47.Sfa, import_chunk_am74sq47.G1s], [import_chunk_am74sq47.bfa, import_chunk_am74sq47.G1s], [import_chunk_am74sq47.wfa, import_chunk_am74sq47.kfa], [import_chunk_am74sq47.N1s, import_chunk_am74sq47.ifa], [import_chunk_ebhp3wz0.Hua, import_chunk_ebhp3wz0.$ua], [import_chunk_ebhp3wz0.Dua, import_chunk_ebhp3wz0.T5n], [import_chunk_ebhp3wz0.Lua, import_chunk_ebhp3wz0.Uua], [import_chunk_ebhp3wz0.Nua, import_chunk_ebhp3wz0.Bua], [import_chunk_ebhp3wz0.Fua, import_chunk_ebhp3wz0.Wua], [ot, nt], [ct, fe], [rt, it], [import_chunk_e6sf2edz.Ifa, import_chunk_e6sf2edz.q1s], [import_chunk_e6sf2edz.Mfa, import_chunk_e6sf2edz.q1s], [import_chunk_e6sf2edz.Tfa, import_chunk_e6sf2edz.xfa], [import_chunk_e6sf2edz.Cfa, import_chunk_e6sf2edz.V1s], [import_chunk_e6sf2edz.Afa, import_chunk_e6sf2edz.V1s], [import_chunk_e6sf2edz.Rfa, import_chunk_e6sf2edz.Pfa], [Lt, Tt], [import_chunk_28fajby4.Qua, import_chunk_28fajby4.efa], [import_chunk_28fajby4.Zua, import_chunk_28fajby4.O1s], [Ie, Et], [yt, wt], [Jt, eo], [je, io], [import_chunk_t9sq3azb.xNo, import_chunk_t9sq3azb.LNo], [import_chunk_t9sq3azb.PNo, import_chunk_t9sq3azb.LNo], [import_chunk_t9sq3azb.ONo, Be], [import_chunk_t9sq3azb.INo, Be], [import_chunk_t9sq3azb.MNo, Be], [import_chunk_t9sq3azb.HNo, import_chunk_t9sq3azb.A1s], [import_chunk_t9sq3azb.DNo, import_chunk_t9sq3azb.R1s], [import_chunk_ebhp3wz0.S1s, import_chunk_ebhp3wz0.w1s], [import_chunk_ebhp3wz0.jua, import_chunk_ebhp3wz0.b1s], [He, so], [bt, At], [ge, pt], [import_chunk_am74sq47.afa, import_chunk_am74sq47.P5n], [import_chunk_am74sq47.lfa, import_chunk_am74sq47.pfa], [Ft, Vt], [Dt, Yt], [jt, Wt], [Mt, It], [vt, Nt], [import_chunk_am74sq47.dfa, import_chunk_am74sq47.gfa], [import_chunk_am74sq47.cfa, import_chunk_am74sq47._fa], [import_chunk_am74sq47.ufa, import_chunk_am74sq47.mfa], [import_chunk_am74sq47.ffa, import_chunk_am74sq47.hfa], [import_chunk_e6sf2edz.Efa, import_chunk_e6sf2edz.vfa], [import_chunk_v44b7svs.ZNo, import_chunk_v44b7svs.Wfa], ["OpenConnectorRequest", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mq2azyfv.js")))).openConnectorRequest(e, o, r)], ["ReadConnectorAnswer", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mq2azyfv.js")))).readConnectorAnswer(e, o, r)], ["CloseConnectorRequest", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mq2azyfv.js")))).closeConnectorRequest(e, o, r)], ["ReadChromeUpload", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3fey0yqd.js")))).readChromeUploadHere(e, o, r)], ["ReadFileReference", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3fey0yqd.js")))).readChromeUploadHere(e, o, r, true)], ["UploadTaskFile", async (e, o, r) => {
  let a = await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2ryxbpmx.js")))).uploadRulesForRequest("UploadTaskFile", r);
  return (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-g5a6ys3s.js")))).uploadTaskFile(e, o, r.session, { localFileAt: ae, realDirectory: Ce, home: (0, import_os.homedir)() }, a);
}], ["DeleteTaskFile", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-g5a6ys3s.js")))).deleteTaskFile(e, r.session)], ["ReadProjectUploadText", async (e, o, r) => {
  let a = await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2ryxbpmx.js")))).uploadRulesForRequest("ReadProjectUploadText", r);
  return (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7649tkt3.js")))).readProjectUpload(e, r.session, { localFileAt: ae, realDirectory: Ce, home: (0, import_os.homedir)() }, a);
}], ["DownloadTaskFile", async (e, o, r) => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-g5a6ys3s.js")))).downloadTaskFile(e, r.callerGone === void 0 ? o : AbortSignal.any([o, r.callerGone]), r.session, { makeFoldersAsWritten: tr, placeStreamedFile: or })], [import_chunk_q1sh0fgd.Yoi, async (e, o, r) => {
  let a = await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2ryxbpmx.js")))).uploadRulesForRequest(import_chunk_q1sh0fgd.Yoi, r);
  return (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ksf286nt.js")))).hashFiles(e, o, { session: r.session, paths: { localFileAt: ae, realDirectory: Ce, home: (0, import_os.homedir)() }, launchRules: a, heldAtLaunch: r.launchPermissionContext !== void 0 });
}], [import_chunk_q1sh0fgd.Xoi, async (e, o, r) => {
  let a = await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-2ryxbpmx.js")))).uploadRulesForRequest(import_chunk_q1sh0fgd.Xoi, r);
  return (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ksf286nt.js")))).putFiles(e, o, { session: r.session, paths: { localFileAt: ae, realDirectory: Ce, home: (0, import_os.homedir)() }, launchRules: a, heldAtLaunch: r.launchPermissionContext !== void 0 }, r.meta);
}]]), Vn = /* @__PURE__ */ new Map([[Oe, "file_suggestions_failed"], [He, "read_task_output_failed"], [ge, "read_changed_files_failed"], [import_chunk_4sncjgqg.aFo, "read_calls_failed"], [Ie, "run_mod_fs_failed"], [je, "read_session_repo_failed"], [import_chunk_t9sq3azb.xNo, "run_mod_fs_failed"], [import_chunk_t9sq3azb.PNo, "run_mod_fs_failed"], [import_chunk_t9sq3azb.ONo, "run_mod_op_failed"], [import_chunk_t9sq3azb.INo, "run_mod_op_failed"], [import_chunk_t9sq3azb.MNo, "run_mod_op_failed"], [import_chunk_t9sq3azb.HNo, "run_mod_op_failed"], [import_chunk_t9sq3azb.DNo, "run_mod_op_failed"], [import_chunk_ebhp3wz0.S1s, "link_plugin_module_failed"], [ze, "list_directory_failed"], [Ge, "workspace_diff_failed"], [import_chunk_am74sq47.N1s, "place_hook_transcript_failed"], [xe, "offer_account_content_failed"], [Pe, "put_account_content_failed"], ["ReadConnectorAnswer", "read_connector_answer_failed"]]), Oo = /* @__PURE__ */ new WeakMap();
function Jn(e) {
  try {
    let o = (0, import_chunk_jv7av99m.Cr)(e) ?? "error", r = typeof e === "object" && e !== null ? Oo.get(e) : void 0;
    return r === void 0 ? o : `staged_write_${o}_${r}`;
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), "error";
  }
}
var qn = 67108864, yo = 1e3, Ke = false;
async function Zn(e, o) {
  if (Ke || (0, import_chunk_f9x2f6cx.Y)()) return "room_unknown";
  Ke = true;
  let r = (async () => (0, import_promises.statfs)(e))().catch((k) => ((0, import_chunk_w578pjby.t)(`mcp serve: statfs after a failed write into a staged file failed (${(0, import_chunk_jv7av99m.w)(k) ?? "error"})`), null)).finally(() => {
    Ke = false;
  }), a = await (0, import_chunk_5appeerh.me)(r, yo);
  if (a === void 0) (0, import_chunk_w578pjby.t)(`mcp serve: statfs after a failed write into a staged file did not answer within ${yo}ms; statfs is not called again until that call returns`);
  if (a === void 0 || a === null) return "room_unknown";
  let { type: u, bsize: f, blocks: h, bavail: y, files: g, ffree: S } = a, O = import_chunk_9mfdhvae.I3t.get(u) ?? "other";
  if (!import_chunk_9mfdhvae.g1r.has(O)) return `room_not_said_${O}`;
  return `${h === 0 ? "not_counted" : y === 0 ? "no_blocks" : g > 0 && S === 0 ? "no_inodes" : y * f < o ? "too_little" : y * f < qn ? "under_64_mib" : "over_64_mib"}_${O}`;
}
async function qc(e, o) {
  let r = Vn.get(e);
  if (r === void 0) return (0, import_chunk_cqa9hrgx.qo)("mcp_serve_file_call", o, Jn);
  try {
    return await o();
  } catch (a) {
    throw (0, import_chunk_cqa9hrgx.m)("mcp_serve_file_call", r), a;
  }
}
async function ae(e) {
  let o = ce().parse(e);
  await oe(o);
  let r = await (0, import_promises.realpath)(o);
  if ((0, import_chunk_z6pfqf6e.ja)(r)) throw Error("must be an absolute local path");
  return r;
}
function Ce(e) {
  return (0, import_promises.realpath)(e).catch(() => {
    return;
  });
}
async function Qn(e, o) {
  let { path: r, offset: a, length: u } = $n().parse(e), f = await ae(r), h = await (0, import_promises.open)(f, import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.Fo);
  try {
    let y = await h.stat();
    if (!y.isFile()) throw Error("not a regular file");
    await (0, import_chunk_am74sq47.c1r)(h, f), o.throwIfAborted();
    let g = Math.max(0, Math.min(u, y.size - a)), { bytesRead: S, buffer: O } = await h.read(Buffer.alloc(g), 0, g, a);
    return { summary: `read ${S} of ${y.size} bytes`, output: { size: y.size, bytes: O.subarray(0, S).toString("base64") } };
  } finally {
    await h.close();
  }
}
async function er(e, o, { callerGone: r }) {
  var _stack = [];
  try {
    let a = Xn().parse(e), u = a.offset === 0, f = import_path.posix.dirname(a.path);
    if (await oe(f), a.abandon) {
      let R = await Ro(f).catch((N) => {
        if ((0, import_chunk_jv7av99m.J)(N)) return;
        throw N;
      });
      if (R !== void 0) await (0, import_promises.rm)(import_path.posix.join(R, `${import_chunk_6mfepmbb.r2}${a.write_id}`), { force: true });
      return { summary: "abandoned", output: { written: 0, placed: false, staged: "", keeps_existing: true, keeps_any_kind: true, compares_kept: true, ...r !== void 0 && { stops_for_gone_caller: true } } };
    }
    let h = Buffer.from(a.bytes, "base64");
    if (h.length !== lr(a.bytes)) throw Error("bytes is not base64");
    if (u) await (0, import_promises.mkdir)(f, { recursive: true });
    const y = __using(_stack, await ne(f), true);
    let g = import_path.posix.join(y.path, `${import_chunk_6mfepmbb.r2}${a.write_id}`), S = await bo(g, u), O, A;
    try {
      let R = await S.stat();
      if (A = `${R.dev}:${R.ino}`, !R.isFile() || R.nlink !== 1) throw Error("the staged file is not a file of this write");
      if (!u && a.staged !== A) throw Error("the staged file is not the one this write began");
      if (R.size !== a.offset) throw Error("part does not follow the bytes already written");
      let N = 0;
      try {
        while (N < h.length) {
          let { bytesWritten: b } = await S.write(h, N, h.length - N, a.offset + N);
          if (b === 0) throw Error("the staged file could not take the whole part");
          N += b;
        }
      } catch (b) {
        if (typeof b === "object" && b !== null) Oo.set(b, await Zn(y.path, h.length - N).catch(() => "room_unknown"));
        throw b;
      }
      if (O = R.size + h.length, o.throwIfAborted(), a.last) {
        await S.chmod(a.mode ?? 420);
        let b = await (0, import_promises.lstat)(g);
        if (`${b.dev}:${b.ino}` !== A) throw Error("the staged file was replaced before it was placed");
      }
    } finally {
      await S.close();
    }
    if (a.stop_if_caller_gone && r?.aborted) await (0, import_promises.rm)(g, { force: true }), r.throwIfAborted();
    let k = false, z, L = a.keep_existing === true || a.keep_any_kind === true;
    if (a.last) {
      let R = import_path.posix.join(y.path, import_path.posix.basename(a.path));
      try {
        if (L) {
          if (k = await (0, import_chunk_0k16ny5f.jDt)(g, R, a.keep_any_kind), await (0, import_promises.rm)(g, { force: true }).catch(() => {
          }), !k && a.compare_kept_with !== void 0) z = await ke(R, { size: O, sha256: a.compare_kept_with }, performance.now() + Ee);
        } else await (0, import_chunk_q7qjcthc.ra)(g, R), k = true;
      } catch (N) {
        throw await (0, import_promises.rm)(g, { force: true }), N;
      }
    }
    return { summary: k ? `placed ${O} bytes` : a.last ? "left what was there" : `${O} bytes written`, output: { written: O, placed: k, staged: A, ...a.last && L && { kept: !k }, ...z !== void 0 && { kept_compares: z } } };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function tr(e) {
  throw Error("refusing to create the download folders: this is supported only on Linux");
}
async function or(e, o, r, a) {
  var _stack = [];
  try {
    await oe(e);
    const u = __using(_stack, await ne(e, { asWritten: true }), true);
    let f = import_path.posix.join(u.path, `${import_chunk_6mfepmbb.r2}${(0, import_crypto.randomBytes)(8).toString("hex")}`), h = await bo(f, true);
    try {
      let { dev: y, ino: g } = await h.stat();
      await (0, import_promises2.pipeline)(r, h.createWriteStream()), a.throwIfAborted();
      let S = await (0, import_promises.open)(f, import_chunk_09gzjq1e.Fo | import_chunk_jxja0v0z.cr);
      try {
        let O = await S.stat();
        if (!O.isFile() || O.dev !== y || O.ino !== g) throw Error("the staged file was replaced before it was placed");
        for (let A of o) if (await (0, import_chunk_bsw3jbbx.Esr)(f, S, import_path.posix.join(u.path, A), 384) !== void 0) return import_path.posix.join(e, A);
        return;
      } finally {
        await S.close().catch(() => {
        });
      }
    } finally {
      await h.close().catch(() => {
      }), await (0, import_promises.rm)(f, { force: true }).catch(() => {
      });
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
var nr = (0, import_util.promisify)(import_zlib.inflateRaw), rr = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ directory: ce(), archive: (0, import_chunk_adx6804h.c)({ write_id: qe() }) }));
async function ir(e) {
  let o = rr().safeParse(e);
  if (!o.success) return;
  try {
    var _stack = [];
    try {
      await oe(o.data.directory);
      const r = __using(_stack, await ne(o.data.directory), true);
      await (0, import_promises.rm)(import_path.posix.join(r.path, `${import_chunk_6mfepmbb.r2}${o.data.archive.write_id}`), { force: true });
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch {
  }
}
async function sr(e, o) {
  var _stack = [];
  try {
    let r = Yn().safeParse(e);
    if (!r.success) throw await ir(e), r.error;
    let { directory: a, archive: u, files: f, keep_existing: h, compare_kept: y } = r.data, g = { max_files: te.maxFiles, max_file_bytes: te.maxFileBytes, max_total_bytes: te.maxTotalBytes };
    if (f.length === 0) return { summary: "nothing to place", output: { placed: [], limits: g, keeps_existing: true, compares_kept: true } };
    if (u === void 0) throw Error("a list of files needs the archive that holds them");
    await oe(a);
    const S = __using(_stack, await ne(a).catch(() => {
      throw Error("the directory cannot be opened");
    }), true);
    let O = import_path.posix.join(S.path, `${import_chunk_6mfepmbb.r2}${u.write_id}`), A = [];
    try {
      if (new Set(f.map((b) => b.name)).size !== f.length) throw Error("a name is in the list twice");
      if (f.reduce((b, j) => b + j.size, 0) > te.maxTotalBytes) throw Error("the files together are larger than one call places");
      let k = await (0, import_promises.open)(O, import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.Fo).catch(() => {
        throw Error("the staged archive is missing, or is not the file this write staged");
      });
      try {
        let b = await k.stat();
        if (!b.isFile() || b.nlink !== 1 || `${b.dev}:${b.ino}` !== u.staged) throw Error("the staged archive is missing, or is not the file this write staged");
        if (f.some((j) => j.offset + j.length > b.size)) throw Error("a file's offset and length reach past the end of the archive");
        for (let j of f) o.throwIfAborted(), A.push(await ar(k, S.path, u.write_id, j));
      } finally {
        await k.close();
      }
      o.throwIfAborted();
      let z = f.map(() => false), L = f.map(() => false);
      for (let [b, j] of f.entries()) {
        let x = A[b];
        if (x === void 0) break;
        let D = import_path.posix.join(S.path, j.name);
        try {
          let M = await (0, import_promises.lstat)(x.path);
          if (`${M.dev}:${M.ino}` !== x.identity) break;
          if (h) {
            z[b] = await (0, import_chunk_0k16ny5f.jDt)(x.path, D), L[b] = !z[b];
            continue;
          }
          await (0, import_chunk_q7qjcthc.ra)(x.path, D);
        } catch {
          break;
        }
        A[b] = void 0, z[b] = true;
      }
      let R = [], N = performance.now() + Ee;
      for (let [b, j] of h && y ? f.entries() : []) R.push(L[b] ? await ke(import_path.posix.join(S.path, j.name), j, N) : null);
      return { summary: `placed ${(0, import_chunk_4smdap7r.U)(z, Boolean)} of ${f.length} files${h ? `, and left ${(0, import_chunk_4smdap7r.U)(L, Boolean)} already there` : ""}`, output: { placed: z, limits: g, ...h && { kept: L }, ...h && y && { kept_compares: R } } };
    } finally {
      await (0, import_promises.rm)(O, { force: true }).catch(() => {
      });
      for (let k of A) if (k !== void 0) await (0, import_promises.rm)(k.path, { force: true }).catch(() => {
      });
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function ar(e, o, r, a) {
  let u = Buffer.alloc(a.length);
  for (let g = 0; g < u.length; ) {
    let { bytesRead: S } = await e.read(u, g, u.length - g, a.offset + g);
    if (S === 0) throw Error("a file's offset and length reach past the end of the archive");
    g += S;
  }
  let f = await nr(u, { maxOutputLength: a.size + 1 }).catch(() => {
    return;
  });
  if (f === void 0) throw Error("a file could not be inflated, or holds more than its stated size");
  if (f.length !== a.size) throw Error("a file does not inflate to its stated size");
  if ((0, import_chunk_ccm69jjy.Je)(f) !== a.sha256) throw Error("a file does not match its stated SHA-256");
  let h = import_path.posix.join(o, `${import_chunk_6mfepmbb.r2}${r}-${(0, import_crypto.randomBytes)(6).toString("hex")}`), y = await (0, import_promises.open)(h, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_09gzjq1e.Fo, 384).catch((g) => {
    throw $e(g);
  });
  try {
    for (let S = 0; S < f.length; ) {
      let { bytesWritten: O } = await y.write(f, S, f.length - S, S);
      if (O === 0) throw $e(void 0);
      S += O;
    }
    await y.chmod(a.mode ?? 420);
    let g = await y.stat();
    return { path: h, identity: `${g.dev}:${g.ino}` };
  } catch (g) {
    throw await (0, import_promises.rm)(h, { force: true }).catch(() => {
    }), $e(g);
  } finally {
    await y.close();
  }
}
function $e(e) {
  switch (e instanceof Error && "code" in e ? e.code : void 0) {
    case "ENOSPC":
    case "EDQUOT":
      return Error("a file could not be staged: the disk is full");
    case "EACCES":
    case "EPERM":
    case "EROFS":
      return Error("a file could not be staged: writing is not permitted");
    default:
      return Error("a file could not be staged");
  }
}
async function Ro(e) {
  let o = await (0, import_promises.realpath)(e);
  if ((0, import_chunk_z6pfqf6e.ja)(o)) throw Error("must be an absolute local path");
  return o;
}
async function oe(e) {
  if (await (0, import_chunk_w578pjby._$)((0, import_chunk_w578pjby.le)(), e, (0, import_chunk_w578pjby.sy)()) !== void 0) throw Error("must be an absolute local path");
}
async function ne(e, o = {}) {
  let r = await Ro(e);
  if (o.asWritten) throw Error("a directory can be checked against its real path only on Linux");
  if (o.asWritten && r !== e) throw Error("the directory is not its own real path: a link is at it or above it, or it is not in normal form");
  return { path: r, [Symbol.asyncDispose]: async () => {
  } };
}
function bo(e, o) {
  return (0, import_promises.open)(e, import_fs.constants.O_WRONLY | import_chunk_09gzjq1e.Fo | (o ? import_fs.constants.O_CREAT | import_fs.constants.O_EXCL : 0), 384);
}
function lr(e) {
  if (e.length % 4 !== 0) return -1;
  let o = e.endsWith("==") ? 2 : e.endsWith("=") ? 1 : 0;
  return e.length / 4 * 3 - o;
}
