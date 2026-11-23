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
var chunk_ezcqffvw_exports = {};
__export(chunk_ezcqffvw_exports, {
  bigQueryExportIntervalMs: () => hr,
  bootstrapTelemetry: () => cr,
  flushTelemetry: () => zs,
  getOTLPExporterConfig: () => Qt,
  getOtlpLogExporters: () => fr,
  initializeTelemetry: () => Gs,
  isTelemetryEnabled: () => Ie,
  otlpEndpointIn: () => Yt,
  parseExporterTypes: () => At,
  parseOtelHeadersEnvVar: () => Tr,
  resolveInClusterOtlpTrust: () => lr,
  withContentLengthBuffering: () => Gt
});
module.exports = __toCommonJS(chunk_ezcqffvw_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
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
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
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
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
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
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
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
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_y6mqk49g = require("/$bunfs/root/chunk-y6mqk49g.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_kbsax5x5 = require("/$bunfs/root/chunk-kbsax5x5.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_ay36ksef = require("/$bunfs/root/chunk-ay36ksef.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_8f66wxnw = require("/$bunfs/root/chunk-8f66wxnw.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_gyyf94kt = require("/$bunfs/root/chunk-gyyf94kt.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_3jaw45cy = require("/$bunfs/root/chunk-3jaw45cy.js");
var import_chunk_ee1mwmgn = require("/$bunfs/root/chunk-ee1mwmgn.js");
var import_chunk_an3w1y1q = require("/$bunfs/root/chunk-an3w1y1q.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_p9gcfhjr = require("/$bunfs/root/chunk-p9gcfhjr.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_gt0vfa7p = require("/$bunfs/root/chunk-gt0vfa7p.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_rfgw2dcy = require("/$bunfs/root/chunk-rfgw2dcy.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_f9mxtmjz = require("/$bunfs/root/chunk-f9mxtmjz.js");
var import_chunk_sps8tde9 = require("/$bunfs/root/chunk-sps8tde9.js");
var import_chunk_tvbk4t18 = require("/$bunfs/root/chunk-tvbk4t18.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_6xae35jp = require("/$bunfs/root/chunk-6xae35jp.js");
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_1ag56sne = require("/$bunfs/root/chunk-1ag56sne.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_hkqn792p = require("/$bunfs/root/chunk-hkqn792p.js");
var import_chunk_rwh01902 = require("/$bunfs/root/chunk-rwh01902.js");
var import_chunk_p78dm83c = require("/$bunfs/root/chunk-p78dm83c.js");
var import_chunk_4rp6k6sw = require("/$bunfs/root/chunk-4rp6k6sw.js");
var import_chunk_tps03s5j = require("/$bunfs/root/chunk-tps03s5j.js");
var import_chunk_k4bqn7hc = require("/$bunfs/root/chunk-k4bqn7hc.js");
var import_chunk_r949v7h0 = require("/$bunfs/root/chunk-r949v7h0.js");
var import_chunk_sqvd6je2 = require("/$bunfs/root/chunk-sqvd6je2.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_3v09xgvh = require("/$bunfs/root/chunk-3v09xgvh.js");
var import_chunk_v6tczjz9 = require("/$bunfs/root/chunk-v6tczjz9.js");
var import_chunk_8bq2fhrn = require("/$bunfs/root/chunk-8bq2fhrn.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
var import_chunk_wqe8b1g0 = require("/$bunfs/root/chunk-wqe8b1g0.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_9p9dsn6j = require("/$bunfs/root/chunk-9p9dsn6j.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_qk25vh5t = require("/$bunfs/root/chunk-qk25vh5t.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_67f81g6v = require("/$bunfs/root/chunk-67f81g6v.js");
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
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_http = __toESM(require("http"));
var import_os = require("os");
var import_async_hooks = require("async_hooks");
var N = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)(), 1);
var it = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)(), 1), K = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.U6t)(), 1);
var dt = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)());
class mt {
  export(e, r) {
    this._sendLogRecords(e, r);
  }
  shutdown() {
    return Promise.resolve();
  }
  _exportInfo(e) {
    return { resource: { attributes: e.resource.attributes }, instrumentationScope: e.instrumentationScope, timestamp: dt.hrTimeToMicroseconds(e.hrTime), traceId: e.spanContext?.traceId, spanId: e.spanContext?.spanId, traceFlags: e.spanContext?.traceFlags, severityText: e.severityText, severityNumber: e.severityNumber, body: e.body, attributes: e.attributes };
  }
  _sendLogRecords(e, r) {
    for (let o of e) console.dir(this._exportInfo(o), { depth: 3 });
    r?.({ code: dt.ExportResultCode.SUCCESS });
  }
}
var ft = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)(), 1);
var Be = 15e5;
function ke(e) {
  let r = [[]], o = 0;
  for (let n of e) {
    let a = 0;
    for (let [p, c] of Object.entries(n.attributes)) a += p.length + Buffer.byteLength(String(c));
    if (o > 0 && o + a > Be) r.push([]), o = 0;
    r.at(-1).push(n), o += a;
  }
  return r;
}
function Kt(e) {
  let r = e.export.bind(e), o = e.shutdown.bind(e), n = /* @__PURE__ */ new Set();
  return e.export = (a, p) => {
    let c = a.some((E) => (0, import_chunk_67f81g6v.Ict)(String(E.attributes.tool_use_id))) ? ke(a) : [a];
    if (c.length === 1) {
      r(a, p);
      return;
    }
    let l = (async () => {
      let E = { code: ft.ExportResultCode.SUCCESS };
      for (let h of c) {
        let T = await new Promise((g) => r(h, g)).catch((g) => ({ code: ft.ExportResultCode.FAILED, error: g }));
        if (T.code !== ft.ExportResultCode.SUCCESS) E = T;
      }
      p(E);
    })().finally(() => n.delete(l));
    n.add(l);
  }, e.shutdown = async () => {
    await Promise.allSettled(n), await o();
  }, e;
}
var G = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_rwh01902.pgt)(), 1);
var se = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)()), ie = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.U6t)());
var P = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)()), Z = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)());
var A = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)()), S = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)()), D = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.ict)());
var qt = "exception";
class vt {
  _spanContext;
  kind;
  parentSpanContext;
  attributes = {};
  links = [];
  events = [];
  startTime;
  resource;
  instrumentationScope;
  _droppedAttributesCount = 0;
  _droppedEventsCount = 0;
  _droppedLinksCount = 0;
  name;
  status = { code: A.SpanStatusCode.UNSET };
  endTime = [0, 0];
  _ended = false;
  _duration = [-1, -1];
  _spanProcessor;
  _spanLimits;
  _attributeValueLengthLimit;
  _performanceStartTime;
  _performanceOffset;
  _startTimeProvided;
  constructor(e) {
    let r = Date.now();
    if (this._spanContext = e.spanContext, this._performanceStartTime = S.otperformance.now(), this._performanceOffset = r - (this._performanceStartTime + S.getTimeOrigin()), this._startTimeProvided = e.startTime != null, this._spanLimits = e.spanLimits, this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, this._spanProcessor = e.spanProcessor, this.name = e.name, this.parentSpanContext = e.parentSpanContext, this.kind = e.kind, this.links = e.links || [], this.startTime = this._getTime(e.startTime ?? r), this.resource = e.resource, this.instrumentationScope = e.scope, e.attributes != null) this.setAttributes(e.attributes);
    this._spanProcessor.onStart(this, e.context);
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(e, r) {
    if (r == null || this._isSpanEnded()) return this;
    if (e.length === 0) return A.diag.warn(`Invalid attribute key: ${e}`), this;
    if (!S.isAttributeValue(r)) return A.diag.warn(`Invalid attribute value set for key: ${e}`), this;
    let { attributeCountLimit: o } = this._spanLimits;
    if (o !== void 0 && Object.keys(this.attributes).length >= o && !Object.prototype.hasOwnProperty.call(this.attributes, e)) return this._droppedAttributesCount++, this;
    return this.attributes[e] = this._truncateToSize(r), this;
  }
  setAttributes(e) {
    for (let [r, o] of Object.entries(e)) this.setAttribute(r, o);
    return this;
  }
  addEvent(e, r, o) {
    if (this._isSpanEnded()) return this;
    let { eventCountLimit: n } = this._spanLimits;
    if (n === 0) return A.diag.warn("No events allowed."), this._droppedEventsCount++, this;
    if (n !== void 0 && this.events.length >= n) {
      if (this._droppedEventsCount === 0) A.diag.debug("Dropping extra events.");
      this.events.shift(), this._droppedEventsCount++;
    }
    if (S.isTimeInput(r)) {
      if (!S.isTimeInput(o)) o = r;
      r = void 0;
    }
    let a = S.sanitizeAttributes(r);
    return this.events.push({ name: e, attributes: a, time: this._getTime(o), droppedAttributesCount: 0 }), this;
  }
  addLink(e) {
    return this.links.push(e), this;
  }
  addLinks(e) {
    return this.links.push(...e), this;
  }
  setStatus(e) {
    if (this._isSpanEnded()) return this;
    if (this.status = { ...e }, this.status.message != null && typeof e.message !== "string") A.diag.warn(`Dropping invalid status.message of type '${typeof e.message}', expected 'string'`), delete this.status.message;
    return this;
  }
  updateName(e) {
    if (this._isSpanEnded()) return this;
    return this.name = e, this;
  }
  end(e) {
    if (this._isSpanEnded()) {
      A.diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
      return;
    }
    if (this._ended = true, this.endTime = this._getTime(e), this._duration = S.hrTimeDuration(this.startTime, this.endTime), this._duration[0] < 0) A.diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0];
    if (this._droppedEventsCount > 0) A.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`);
    this._spanProcessor.onEnd(this);
  }
  _getTime(e) {
    if (typeof e === "number" && e <= S.otperformance.now()) return S.hrTime(e + this._performanceOffset);
    if (typeof e === "number") return S.millisToHrTime(e);
    if (e instanceof Date) return S.millisToHrTime(e.getTime());
    if (S.isTimeInputHrTime(e)) return e;
    if (this._startTimeProvided) return S.millisToHrTime(Date.now());
    let r = S.otperformance.now() - this._performanceStartTime;
    return S.addHrTimes(this.startTime, S.millisToHrTime(r));
  }
  isRecording() {
    return this._ended === false;
  }
  recordException(e, r) {
    let o = {};
    if (typeof e === "string") o[D.ATTR_EXCEPTION_MESSAGE] = e;
    else if (e) {
      if (e.code) o[D.ATTR_EXCEPTION_TYPE] = e.code.toString();
      else if (e.name) o[D.ATTR_EXCEPTION_TYPE] = e.name;
      if (e.message) o[D.ATTR_EXCEPTION_MESSAGE] = e.message;
      if (e.stack) o[D.ATTR_EXCEPTION_STACKTRACE] = e.stack;
    }
    if (o[D.ATTR_EXCEPTION_TYPE] || o[D.ATTR_EXCEPTION_MESSAGE]) this.addEvent(qt, o, r);
    else A.diag.warn(`Failed to record an exception ${e}`);
  }
  get duration() {
    return this._duration;
  }
  get ended() {
    return this._ended;
  }
  get droppedAttributesCount() {
    return this._droppedAttributesCount;
  }
  get droppedEventsCount() {
    return this._droppedEventsCount;
  }
  get droppedLinksCount() {
    return this._droppedLinksCount;
  }
  _isSpanEnded() {
    if (this._ended) {
      let e = Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
      A.diag.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, e);
    }
    return this._ended;
  }
  _truncateToLimitUtil(e, r) {
    if (e.length <= r) return e;
    return e.substring(0, r);
  }
  _truncateToSize(e) {
    let r = this._attributeValueLengthLimit;
    if (r <= 0) return A.diag.warn(`Attribute value limit must be positive, got ${r}`), e;
    if (typeof e === "string") return this._truncateToLimitUtil(e, r);
    if (Array.isArray(e)) return e.map((o) => typeof o === "string" ? this._truncateToLimitUtil(o, r) : o);
    return e;
  }
}
var _t = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)()), I = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)());
var k;
(function(e) {
  e[e.NOT_RECORD = 0] = "NOT_RECORD", e[e.RECORD = 1] = "RECORD", e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
})(k || (k = {}));
class V {
  shouldSample() {
    return { decision: k.NOT_RECORD };
  }
  toString() {
    return "AlwaysOffSampler";
  }
}
class F {
  shouldSample() {
    return { decision: k.RECORD_AND_SAMPLED };
  }
  toString() {
    return "AlwaysOnSampler";
  }
}
var j = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)()), Jt = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)());
class q {
  _root;
  _remoteParentSampled;
  _remoteParentNotSampled;
  _localParentSampled;
  _localParentNotSampled;
  constructor(e) {
    if (this._root = e.root, !this._root) Jt.globalErrorHandler(Error("ParentBasedSampler must have a root sampler configured")), this._root = new F();
    this._remoteParentSampled = e.remoteParentSampled ?? new F(), this._remoteParentNotSampled = e.remoteParentNotSampled ?? new V(), this._localParentSampled = e.localParentSampled ?? new F(), this._localParentNotSampled = e.localParentNotSampled ?? new V();
  }
  shouldSample(e, r, o, n, a, p) {
    let c = j.trace.getSpanContext(e);
    if (!c || !j.isSpanContextValid(c)) return this._root.shouldSample(e, r, o, n, a, p);
    if (c.isRemote) {
      if (c.traceFlags & j.TraceFlags.SAMPLED) return this._remoteParentSampled.shouldSample(e, r, o, n, a, p);
      return this._remoteParentNotSampled.shouldSample(e, r, o, n, a, p);
    }
    if (c.traceFlags & j.TraceFlags.SAMPLED) return this._localParentSampled.shouldSample(e, r, o, n, a, p);
    return this._localParentNotSampled.shouldSample(e, r, o, n, a, p);
  }
  toString() {
    return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
  }
}
var Zt = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)());
class Et {
  _ratio;
  _upperBound;
  constructor(e = 0) {
    this._ratio = e, this._ratio = this._normalize(e), this._upperBound = Math.floor(this._ratio * 4294967295);
  }
  shouldSample(e, r) {
    return { decision: Zt.isValidTraceId(r) && this._accumulate(r) < this._upperBound ? k.RECORD_AND_SAMPLED : k.NOT_RECORD };
  }
  toString() {
    return `TraceIdRatioBased{${this._ratio}}`;
  }
  _normalize(e) {
    if (typeof e !== "number" || isNaN(e)) return 0;
    return e >= 1 ? 1 : e <= 0 ? 0 : e;
  }
  _accumulate(e) {
    let r = 0;
    for (let o = 0; o < e.length / 8; o++) {
      let n = o * 8, a = parseInt(e.slice(n, n + 8), 16);
      r = (r ^ a) >>> 0;
    }
    return r;
  }
}
var U;
(function(e) {
  e.AlwaysOff = "always_off", e.AlwaysOn = "always_on", e.ParentBasedAlwaysOff = "parentbased_always_off", e.ParentBasedAlwaysOn = "parentbased_always_on", e.ParentBasedTraceIdRatio = "parentbased_traceidratio", e.TraceIdRatio = "traceidratio";
})(U || (U = {}));
var ht = 1;
function Tt() {
  return { sampler: bt(), forceFlushTimeoutMillis: 3e4, generalLimits: { attributeValueLengthLimit: I.getNumberFromEnv("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0, attributeCountLimit: I.getNumberFromEnv("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128 }, spanLimits: { attributeValueLengthLimit: I.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0, attributeCountLimit: I.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128, linkCountLimit: I.getNumberFromEnv("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128, eventCountLimit: I.getNumberFromEnv("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128, attributePerEventCountLimit: I.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128, attributePerLinkCountLimit: I.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128 } };
}
function bt() {
  let e = I.getStringFromEnv("OTEL_TRACES_SAMPLER") ?? U.ParentBasedAlwaysOn;
  switch (e) {
    case U.AlwaysOn:
      return new F();
    case U.AlwaysOff:
      return new V();
    case U.ParentBasedAlwaysOn:
      return new q({ root: new F() });
    case U.ParentBasedAlwaysOff:
      return new q({ root: new V() });
    case U.TraceIdRatio:
      return new Et(te());
    case U.ParentBasedTraceIdRatio:
      return new q({ root: new Et(te()) });
    default:
      return _t.diag.error(`OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${U.ParentBasedAlwaysOn}".`), new q({ root: new F() });
  }
}
function te() {
  let e = I.getNumberFromEnv("OTEL_TRACES_SAMPLER_ARG");
  if (e == null) return _t.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${ht}.`), ht;
  if (e < 0 || e > 1) return _t.diag.error(`OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to ${ht}.`), ht;
  return e;
}
var at = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)()), Fe = 128, $e = 1 / 0;
function ee(e) {
  let r = { sampler: bt() }, o = Tt(), n = Object.assign({}, o, r, e);
  return n.generalLimits = Object.assign({}, o.generalLimits, e.generalLimits || {}), n.spanLimits = Object.assign({}, o.spanLimits, e.spanLimits || {}), n;
}
function re(e) {
  let r = Object.assign({}, e.spanLimits);
  return r.attributeCountLimit = e.spanLimits?.attributeCountLimit ?? e.generalLimits?.attributeCountLimit ?? at.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? at.getNumberFromEnv("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? Fe, r.attributeValueLengthLimit = e.spanLimits?.attributeValueLengthLimit ?? e.generalLimits?.attributeValueLengthLimit ?? at.getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? at.getNumberFromEnv("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? $e, Object.assign({}, e, { spanLimits: r });
}
var X = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)()), w = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)());
class It {
  _exporter;
  _maxExportBatchSize;
  _maxQueueSize;
  _scheduledDelayMillis;
  _exportTimeoutMillis;
  _isExporting = false;
  _finishedSpans = [];
  _timer;
  _shutdownOnce;
  _droppedSpansCount = 0;
  constructor(e, r) {
    if (this._exporter = e, this._maxExportBatchSize = typeof r?.maxExportBatchSize === "number" ? r.maxExportBatchSize : w.getNumberFromEnv("OTEL_BSP_MAX_EXPORT_BATCH_SIZE") ?? 512, this._maxQueueSize = typeof r?.maxQueueSize === "number" ? r.maxQueueSize : w.getNumberFromEnv("OTEL_BSP_MAX_QUEUE_SIZE") ?? 2048, this._scheduledDelayMillis = typeof r?.scheduledDelayMillis === "number" ? r.scheduledDelayMillis : w.getNumberFromEnv("OTEL_BSP_SCHEDULE_DELAY") ?? 5e3, this._exportTimeoutMillis = typeof r?.exportTimeoutMillis === "number" ? r.exportTimeoutMillis : w.getNumberFromEnv("OTEL_BSP_EXPORT_TIMEOUT") ?? 3e4, this._shutdownOnce = new w.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize) X.diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize;
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
    return this._flushAll();
  }
  onStart(e, r) {
  }
  onEnd(e) {
    if (this._shutdownOnce.isCalled) return;
    if ((e.spanContext().traceFlags & X.TraceFlags.SAMPLED) === 0) return;
    this._addToBuffer(e);
  }
  shutdown() {
    return this._shutdownOnce.call();
  }
  _shutdown() {
    return Promise.resolve().then(() => this.onShutdown()).then(() => this._flushAll()).then(() => this._exporter.shutdown());
  }
  _addToBuffer(e) {
    if (this._finishedSpans.length >= this._maxQueueSize) {
      if (this._droppedSpansCount === 0) X.diag.debug("maxQueueSize reached, dropping spans");
      this._droppedSpansCount++;
      return;
    }
    if (this._droppedSpansCount > 0) X.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), this._droppedSpansCount = 0;
    this._finishedSpans.push(e), this._maybeStartTimer();
  }
  _flushAll() {
    return new Promise((e, r) => {
      let o = [], n = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
      for (let a = 0, p = n; a < p; a++) o.push(this._flushOneBatch());
      Promise.all(o).then(() => {
        e();
      }).catch(r);
    });
  }
  _flushOneBatch() {
    if (this._clearTimer(), this._finishedSpans.length === 0) return Promise.resolve();
    return new Promise((e, r) => {
      let o = setTimeout(() => {
        r(Error("Timeout"));
      }, this._exportTimeoutMillis);
      X.context.with(w.suppressTracing(X.context.active()), () => {
        let n;
        if (this._finishedSpans.length <= this._maxExportBatchSize) n = this._finishedSpans, this._finishedSpans = [];
        else n = this._finishedSpans.splice(0, this._maxExportBatchSize);
        let a = () => this._exporter.export(n, (c) => {
          if (clearTimeout(o), c.code === w.ExportResultCode.SUCCESS) e();
          else r(c.error ?? Error("BatchSpanProcessor: span export failed"));
        }), p = null;
        for (let c = 0, l = n.length; c < l; c++) {
          let E = n[c];
          if (E.resource.asyncAttributesPending && E.resource.waitForAsyncAttributes) p ??= [], p.push(E.resource.waitForAsyncAttributes());
        }
        if (p === null) a();
        else Promise.all(p).then(a, (c) => {
          w.globalErrorHandler(c), r(c);
        });
      });
    });
  }
  _maybeStartTimer() {
    if (this._isExporting) return;
    let e = () => {
      this._isExporting = true, this._flushOneBatch().finally(() => {
        if (this._isExporting = false, this._finishedSpans.length > 0) this._clearTimer(), this._maybeStartTimer();
      }).catch((r) => {
        this._isExporting = false, w.globalErrorHandler(r);
      });
    };
    if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
    if (this._timer !== void 0) return;
    if (this._timer = setTimeout(() => e(), this._scheduledDelayMillis), typeof this._timer !== "number") this._timer.unref();
  }
  _clearTimer() {
    if (this._timer !== void 0) clearTimeout(this._timer), this._timer = void 0;
  }
}
class W extends It {
  onShutdown() {
  }
}
class J {
  generateTraceId = oe(16);
  generateSpanId = oe(8);
}
var gt = Buffer.allocUnsafe(16);
function oe(e) {
  return function() {
    for (let o = 0; o < e / 4; o++) gt.writeUInt32BE(Math.random() * 4294967296 >>> 0, o * 4);
    for (let o = 0; o < e; o++) if (gt[o] > 0) break;
    else if (o === e - 1) gt[e - 1] = 1;
    return gt.toString("hex", 0, e);
  };
}
class Nt {
  _sampler;
  _generalLimits;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  constructor(e, r, o, n) {
    let a = ee(r);
    this._sampler = a.sampler, this._generalLimits = a.generalLimits, this._spanLimits = a.spanLimits, this._idGenerator = r.idGenerator || new J(), this._resource = o, this._spanProcessor = n, this.instrumentationScope = e;
  }
  startSpan(e, r = {}, o = P.context.active()) {
    if (r.root) o = P.trace.deleteSpan(o);
    let n = P.trace.getSpan(o);
    if (Z.isTracingSuppressed(o)) return P.diag.debug("Instrumentation suppressed, returning Noop Span"), P.trace.wrapSpanContext(P.INVALID_SPAN_CONTEXT);
    let a = n?.spanContext(), p = this._idGenerator.generateSpanId(), c, l, E;
    if (!a || !P.trace.isSpanContextValid(a)) l = this._idGenerator.generateTraceId();
    else l = a.traceId, E = a.traceState, c = a;
    let h = r.kind ?? P.SpanKind.INTERNAL, T = (r.links ?? []).map((M) => ({ context: M.context, attributes: Z.sanitizeAttributes(M.attributes) })), g = Z.sanitizeAttributes(r.attributes), O = this._sampler.shouldSample(o, l, e, h, g, T);
    E = O.traceState ?? E;
    let R = O.decision === P.SamplingDecision.RECORD_AND_SAMPLED ? P.TraceFlags.SAMPLED : P.TraceFlags.NONE, y = { traceId: l, spanId: p, traceFlags: R, traceState: E };
    if (O.decision === P.SamplingDecision.NOT_RECORD) return P.diag.debug("Recording is off, propagating context in a non-recording span"), P.trace.wrapSpanContext(y);
    let L = Z.sanitizeAttributes(Object.assign(g, O.attributes));
    return new vt({ resource: this._resource, scope: this.instrumentationScope, context: o, spanContext: y, name: e, kind: h, links: T, parentSpanContext: c, attributes: L, startTime: r.startTime, spanProcessor: this._spanProcessor, spanLimits: this._spanLimits });
  }
  startActiveSpan(e, r, o, n) {
    let a, p, c;
    if (arguments.length < 2) return;
    else if (arguments.length === 2) c = r;
    else if (arguments.length === 3) a = r, c = o;
    else a = r, p = o, c = n;
    let l = p ?? P.context.active(), E = this.startSpan(e, a, l), h = P.trace.setSpan(l, E);
    return P.context.with(h, c, void 0, E);
  }
  getGeneralLimits() {
    return this._generalLimits;
  }
  getSpanLimits() {
    return this._spanLimits;
  }
}
var ne = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)());
class Mt {
  _spanProcessors;
  constructor(e) {
    this._spanProcessors = e;
  }
  forceFlush() {
    let e = [];
    for (let r of this._spanProcessors) e.push(r.forceFlush());
    return new Promise((r) => {
      Promise.all(e).then(() => {
        r();
      }).catch((o) => {
        ne.globalErrorHandler(o || Error("MultiSpanProcessor: forceFlush failed")), r();
      });
    });
  }
  onStart(e, r) {
    for (let o of this._spanProcessors) o.onStart(e, r);
  }
  onEnd(e) {
    for (let r of this._spanProcessors) r.onEnd(e);
  }
  shutdown() {
    let e = [];
    for (let r of this._spanProcessors) e.push(r.shutdown());
    return new Promise((r, o) => {
      Promise.all(e).then(() => {
        r();
      }, o);
    });
  }
}
var Q;
(function(e) {
  e[e.resolved = 0] = "resolved", e[e.timeout = 1] = "timeout", e[e.error = 2] = "error", e[e.unresolved = 3] = "unresolved";
})(Q || (Q = {}));
class ct {
  _config;
  _tracers = /* @__PURE__ */ new Map();
  _resource;
  _activeSpanProcessor;
  constructor(e = {}) {
    let r = se.merge({}, Tt(), re(e));
    this._resource = r.resource ?? ie.defaultResource(), this._config = Object.assign({}, r, { resource: this._resource });
    let o = [];
    if (e.spanProcessors?.length) o.push(...e.spanProcessors);
    this._activeSpanProcessor = new Mt(o);
  }
  getTracer(e, r, o) {
    let n = `${e}@${r || ""}:${o?.schemaUrl || ""}`;
    if (!this._tracers.has(n)) this._tracers.set(n, new Nt({ name: e, version: r, schemaUrl: o?.schemaUrl }, this._config, this._resource, this._activeSpanProcessor));
    return this._tracers.get(n);
  }
  forceFlush() {
    let e = this._config.forceFlushTimeoutMillis, r = this._activeSpanProcessor._spanProcessors.map((o) => new Promise((n) => {
      let a, p = setTimeout(() => {
        n(Error(`Span processor did not completed within timeout period of ${e} ms`)), a = Q.timeout;
      }, e);
      o.forceFlush().then(() => {
        if (clearTimeout(p), a !== Q.timeout) a = Q.resolved, n(a);
      }).catch((c) => {
        clearTimeout(p), a = Q.error, n(c);
      });
    }));
    return new Promise((o, n) => {
      Promise.all(r).then((a) => {
        let p = a.filter((c) => c !== Q.resolved);
        if (p.length > 0) n(p);
        else o();
      }).catch((a) => n([a]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
}
var ut = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)());
class pt {
  export(e, r) {
    return this._sendSpans(e, r);
  }
  shutdown() {
    return this._sendSpans([]), this.forceFlush();
  }
  forceFlush() {
    return Promise.resolve();
  }
  _exportInfo(e) {
    return { resource: { attributes: e.resource.attributes }, instrumentationScope: e.instrumentationScope, traceId: e.spanContext().traceId, parentSpanContext: e.parentSpanContext, traceState: e.spanContext().traceState?.serialize(), name: e.name, id: e.spanContext().spanId, kind: e.kind, timestamp: ut.hrTimeToMicroseconds(e.startTime), duration: ut.hrTimeToMicroseconds(e.duration), attributes: e.attributes, status: e.status, events: e.events, links: e.links };
  }
  _sendSpans(e, r) {
    for (let o of e) console.dir(this._exportInfo(o), { depth: 3 });
    if (r) return r({ code: ut.ExportResultCode.SUCCESS });
  }
}
var v = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.ict)(), 1);
function ae() {
  if ((0, import_chunk_k449cc64.ox)()) return false;
  let e = (0, import_chunk_865at33z.or)(), r = (0, import_chunk_865at33z.Rt)() && (e === "enterprise" || e === "team");
  return (0, import_chunk_865at33z.Wzt)() || r;
}
function ce() {
  if (!(0, import_chunk_865at33z.Rt)()) return { "user.customer_type": "api" };
  let e = (0, import_chunk_865at33z.or)();
  return e ? { "user.customer_type": "claude_ai", "user.subscription_type": e } : { "user.customer_type": "claude_ai" };
}
var B = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)(), 1), Dt = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_rwh01902.pgt)(), 1);
var tt = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.U6t)(), 1), ue = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.ict)(), 1);
function He(e) {
  switch (e) {
    case "arm":
      return "arm32";
    case "ppc":
      return "ppc32";
    case "x64":
      return "amd64";
    default:
      return e;
  }
}
function Ot() {
  let e = {};
  if ((0, import_chunk_cg8dqz0a.x)() === "wsl") {
    let n = (0, import_chunk_cg8dqz0a.Qxt)();
    if (n) e["wsl.version"] = n;
  }
  let r = tt.resourceFromAttributes((0, import_chunk_xfr8663h.X2e)() ? {} : tt.osDetector.detect().attributes || {}), o = tt.resourceFromAttributes({ [ue.SEMRESATTRS_HOST_ARCH]: He((0, import_os.arch)()) });
  return tt.resourceFromAttributes(e).merge(r).merge(o);
}
function Ge(e) {
  let { kind: r, status: o } = (0, import_chunk_jv7av99m.$i)(e);
  switch (r) {
    case "auth":
      return [o === 401 ? "http_401" : "http_403", o];
    case "timeout":
      return ["timeout"];
    case "network":
      return ["network_error"];
    default:
      if (o !== void 0 && o >= 500) return ["http_5xx", o];
      if (o !== void 0 && o >= 400) return ["http_4xx", o];
      return o !== void 0 ? ["unknown_error", o] : ["unknown_error"];
  }
}
function pe(e) {
  let { status: r, message: o } = (0, import_chunk_jv7av99m.$i)(e);
  return r === void 0 ? o : `HTTP ${r}: ${o}`;
}
var ze = 250;
function Ve() {
  return Math.max(0, Math.min(import_chunk_c203g5kd.s.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS ?? import_chunk_w578pjby.FK, import_chunk_w578pjby.FK) - ze);
}
function je(e) {
  if (!import_chunk_3jjr3wje.bn.isAxiosError(e)) return false;
  let r = e.response?.status;
  if (r === 401) return true;
  return r === 403 && typeof e.response?.data === "string" && e.response.data.includes("OAuth token has been revoked");
}
var We = /* @__PURE__ */ new Set(["claude-code", "claude-code-desktop", "cowork"]), Qe = /* @__PURE__ */ new Map([["host.arch", /^(amd64|arm64|x86)$/], ["os.type", /^(darwin|linux|windows)$/], ["os.version", /^\d+\.\d+/]]);
function Ye(e, r) {
  let o = e[r];
  return Object.hasOwn(e, "claude.deployment_mode") && typeof o === "string" && Qe.get(r)?.test(o) === true;
}
function Ke(e) {
  e.reportInFlightAtShutdown();
}
class Ut {
  endpoint;
  isAntEndpointOverride;
  timeout;
  storageV5;
  pendingExports = [];
  isShutdown = false;
  reportedFailures = /* @__PURE__ */ new Set();
  failures = new import_chunk_865at33z.gRo("BigQuery metrics");
  successReported = false;
  inFlight = 0;
  oauthRefreshAttempted = false;
  constructor(e) {
    let r = `${(0, import_chunk_ephf358x.cn)().BASE_API_URL}/api/claude_code/metrics`, o = void 0;
    this.isAntEndpointOverride = false, this.endpoint = r, this.timeout = e.timeout || 5e3, this.storageV5 = e.storageV5;
  }
  async export(e, r) {
    if (this.isShutdown) {
      (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics export arrived after shutdown, skipping`), r({ code: B.ExportResultCode.SUCCESS });
      return;
    }
    let o = this.doExport(e, r);
    this.pendingExports.push(o), o.finally(() => {
      let n = this.pendingExports.indexOf(o);
      if (n > -1) this.pendingExports.splice(n, 1);
    });
  }
  async doExport(e, r) {
    try {
      if (!((0, import_chunk_865at33z.Yi)() || (0, import_chunk_f9x2f6cx.Se)())) {
        (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics export: trust not established, skipping`), r({ code: B.ExportResultCode.SUCCESS });
        return;
      }
      if (!this.dispatchHostMatchesEndpoint()) {
        (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics export: WIF dispatch host differs from the metrics endpoint host, skipping`), r({ code: B.ExportResultCode.SUCCESS });
        return;
      }
      let n = await (0, import_chunk_865at33z.JV)(), a = (0, import_chunk_865at33z._7e)(n, this.endpoint).reasonCode === "misrouted_credential";
      if (a && !this.isAntEndpointOverride) {
        (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics export: credential does not belong to the metrics endpoint host, skipping`), r({ code: B.ExportResultCode.SUCCESS });
        return;
      }
      let p = (0, import_chunk_865at33z._7e)(n, `${(0, import_chunk_ephf358x.cn)().BASE_API_URL}/api/claude_code/organizations/metrics_enabled`).reasonCode === "misrouted_credential";
      if (!a && !p) {
        let T = await (0, import_chunk_gyyf94kt.H0a)(this.storageV5);
        if (T.hasError) {
          if (n.reasonCode === "wif_error") this.reportFailure("wif_error"), this.failures.record(`metrics opt-out check failed (WIF exchange failed: ${n.error}); skipping export`);
          else this.failures.record("metrics opt-out check failed; skipping export");
          r({ code: B.ExportResultCode.SUCCESS });
          return;
        }
        if (!T.enabled) {
          (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics export disabled by organization setting, skipping`), r({ code: B.ExportResultCode.SUCCESS });
          return;
        }
      }
      let c = this.transformMetricsForInternal(e), l = (0, import_chunk_865at33z._7e)(await (0, import_chunk_865at33z.JV)(), this.endpoint), E = l.reasonCode === "misrouted_credential";
      if (l.error && !E) {
        if (l.reasonCode === "wif_error") this.reportFailure("wif_error");
        this.failures.record(l.error), r({ code: B.ExportResultCode.SUCCESS });
        return;
      }
      let h;
      try {
        h = await this.postWithOAuth401Recovery(c, E ? {} : l.headers);
      } catch (T) {
        throw this.reportFailure(...Ge(T)), T;
      }
      if ((0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics exported successfully`), !this.successReported) this.successReported = true, (0, import_chunk_cqa9hrgx.u)("internal_metrics_export");
      (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery API Response: ${(0, import_chunk_w578pjby._)(h.data, null, 2)}`), r({ code: B.ExportResultCode.SUCCESS });
    } catch (o) {
      let { kind: n, status: a } = (0, import_chunk_jv7av99m.$i)(o);
      if (n === "other" && a === void 0) (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics export threw before the request: ${pe(o)}`, { level: "error" });
      this.failures.record(pe(o)), r({ code: B.ExportResultCode.SUCCESS });
    }
  }
  reportFailure(e, r) {
    let o = `${e}:${r ?? ""}`;
    if (this.reportedFailures.has(o)) return;
    this.reportedFailures.add(o), (0, import_chunk_cqa9hrgx.m)("internal_metrics_export", e, r === void 0 ? {} : { http_status: r });
  }
  dispatchHostMatchesEndpoint() {
    if (!((0, import_chunk_865at33z.FR)() === null && (0, import_chunk_865at33z.cl)())) return true;
    let e = (0, import_chunk_3f2ytgjw.Hwe)();
    if (e === void 0) return false;
    return (e === null ? "api.anthropic.com" : new URL(e).host) === new URL(this.endpoint).host;
  }
  async postWithOAuth401Recovery(e, r) {
    let o = (0, import_chunk_865at33z.tr)(), n = o?.accessToken && o.refreshToken && r.Authorization === `Bearer ${o.accessToken}` ? o.accessToken : void 0;
    this.inFlight++;
    try {
      return await this.postOnce(e, r);
    } catch (a) {
      if (!n || !je(a)) throw a;
      let p = (0, import_chunk_865at33z.tr)()?.accessToken;
      if (p && p !== n) return await this.postOnce(e, { ...r, Authorization: `Bearer ${p}` });
      if (this.oauthRefreshAttempted) throw a;
      this.oauthRefreshAttempted = true;
      try {
        await (0, import_chunk_865at33z.UR)(n, void 0, this.storageV5);
      } catch {
        throw a;
      }
      let c = (0, import_chunk_865at33z.tr)()?.accessToken;
      if (!c || c === n) throw a;
      let l = await this.postOnce(e, { ...r, Authorization: `Bearer ${c}` });
      return this.oauthRefreshAttempted = false, l;
    } finally {
      this.inFlight--;
    }
  }
  postOnce(e, r) {
    let o = { "Content-Type": "application/json", "User-Agent": (0, import_chunk_tb84sczh.Ri)(), ...r }, n = (0, import_chunk_865at33z.GRs)({ url: this.endpoint, payload: e, storageV5: this.storageV5 });
    return import_chunk_3jjr3wje.bn.post(this.endpoint, n?.body ?? e, { timeout: this.timeout, maxRedirects: 0, headers: n ? { ...o, ...n.headers } : o });
  }
  transformMetricsForInternal(e) {
    let r = (0, import_chunk_3jaw45cy.eAn)().attributes, o = { "service.name": e.resource.attributes["service.name"], "service.version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, ...(0, import_chunk_xcgcdx61.mi)(Ot().attributes, (h, T) => Object.hasOwn(r, T) && !Ye(r, T)) }, n = {};
    for (let [h, T] of Object.entries(import_chunk_3jaw45cy.Rei)) {
      let g = o[h], O = typeof g === "string" && g !== "" ? g : T;
      if (O !== void 0) n[h] = O;
    }
    let a = o["service.name"];
    n["service.name"] = typeof a === "string" && We.has(a) ? a : (0, import_chunk_3t7ve0wy.ate)() ? "cowork" : (0, import_chunk_3t7ve0wy.Dw)() ? "claude-code-desktop" : "claude-code", n["aggregation.temporality"] = this.selectAggregationTemporality() === Dt.AggregationTemporality.DELTA ? "delta" : "cumulative", Object.assign(n, ce());
    let c = (0, import_chunk_2zeyvjwb.t2)() || (0, import_chunk_2zeyvjwb.uo)("hipaa"), l = (0, import_chunk_xfr8663h.cEl)();
    return { resource_attributes: c ? (0, import_chunk_865at33z.Kqi)(n, import_chunk_865at33z.AOl) : n, metrics: e.scopeMetrics.flatMap((h) => h.metrics.map((T) => ({ name: T.descriptor.name, description: T.descriptor.description, unit: T.descriptor.unit, data_points: this.extractDataPoints(T, c, l) }))) };
  }
  extractDataPoints(e, r, o) {
    let n = e.dataPoints || [], a = /* @__PURE__ */ new Map();
    for (let p of n) {
      if (typeof p.value !== "number") continue;
      let c = (0, import_chunk_865at33z.cIl)((0, import_chunk_xcgcdx61.mi)(p.attributes, (O, R) => o.get(R)?.has(O))), l = this.convertAttributes(c), E = r ? (0, import_chunk_865at33z.Kqi)(l, import_chunk_865at33z.ROl) : l, h = this.hrTimeToISOString(p.endTime || p.startTime || [Date.now() / 1e3, 0]), T = (0, import_chunk_w578pjby.cs)(Object.entries(E).sort(([O], [R]) => O < R ? -1 : 1)), g = a.get(T);
      if (g) {
        if (g.value += p.value, h > g.timestamp) g.timestamp = h;
        continue;
      }
      a.set(T, { attributes: E, value: p.value, timestamp: h });
    }
    return Array.from(a.values());
  }
  async shutdown() {
    this.isShutdown = true, await this.forceFlush(), (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics exporter shutdown complete`);
  }
  armShutdownReport() {
    let e = Ve();
    if (e <= 0) return;
    setTimeout(Ke, e, this).unref?.();
  }
  reportInFlightAtShutdown() {
    if (this.inFlight === 0) return;
    (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics export still in flight at the shutdown budget (${this.inFlight})`), this.reportFailure("pending_at_shutdown");
  }
  async forceFlush() {
    await Promise.all(this.pendingExports), this.failures.logSummary(), (0, import_chunk_w578pjby.t)(`${import_chunk_865at33z._de} BigQuery metrics exporter flush complete`);
  }
  convertAttributes(e) {
    let r = {};
    if (e) for (let [o, n] of Object.entries(e)) {
      if (o.startsWith("vcs.")) continue;
      if (o.startsWith("anthropic.")) continue;
      if (n !== void 0 && n !== null) r[o] = String(n);
    }
    return r;
  }
  hrTimeToISOString(e) {
    let [r, o] = e;
    return new Date(r * 1e3 + o / 1e6).toISOString();
  }
  selectAggregationTemporality() {
    return Dt.AggregationTemporality.DELTA;
  }
}
var Bt = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)(), 1), le = 64, de = { code: Bt.ExportResultCode.SUCCESS };
function fe(e) {
  return { code: Bt.ExportResultCode.FAILED, error: Error(e) };
}
function Ee() {
}
class kt {
  delegate;
  buffer = [];
  shutDown = false;
  setDelegate(e) {
    if (this.shutDown) {
      e.shutdown().catch(() => {
      });
      return;
    }
    this.delegate = e;
    let r = this.buffer;
    this.buffer = [];
    for (let o of r) e.export(o, Ee);
  }
  export(e, r) {
    if (this.shutDown) {
      r(fe("Exporter has been shut down"));
      return;
    }
    if (this.delegate) {
      this.delegate.export(e, r);
      return;
    }
    if (this.buffer.length >= le) this.buffer.shift();
    this.buffer.push(e), r(de);
  }
  async forceFlush() {
    if (this.delegate?.forceFlush) await this.delegate.forceFlush();
  }
  async shutdown() {
    if (this.shutDown = true, this.buffer = [], this.delegate) await this.delegate.shutdown();
  }
}
class Ft {
  delegate;
  buffer = [];
  shutDown = false;
  setDelegate(e) {
    if (this.shutDown) {
      e.shutdown().catch(() => {
      });
      return;
    }
    this.delegate = e;
    let r = this.buffer;
    this.buffer = [];
    for (let o of r) e.export(o, Ee);
  }
  export(e, r) {
    if (this.shutDown) {
      r(fe("Exporter has been shut down"));
      return;
    }
    if (this.delegate) {
      this.delegate.export(e, r);
      return;
    }
    if (this.buffer.length >= le) this.buffer.shift();
    this.buffer.push(e), r(de);
  }
  async shutdown() {
    if (this.shutDown = true, this.buffer = [], this.delegate) await this.delegate.shutdown();
  }
}
var Je = [0, 5e3, 3e4, 6e4, 3e5], $t = new import_async_hooks.AsyncLocalStorage(), Xt = Symbol("otlpExportConnection.use");
function he(e) {
  return (...r) => $t.run({}, e, ...r);
}
function _e() {
  return $t.getStore()?.connection;
}
function St(e) {
  return (...r) => {
    try {
      e(...r);
    } catch (o) {
      (0, import_chunk_k449cc64.i)(o);
    }
  };
}
var Te = St(Ze);
function Ze(e) {
  let r = $t.getStore();
  if (e.once("socket", St((o) => {
    if (o[Xt] ??= {}, r) r.connection = er(o);
  })), r) r.connection = void 0, e.once("response", St((o) => {
    o.once("end", () => {
      r.connection = void 0;
    });
  }));
}
function er(e) {
  let r = e[Xt]?.freedAt;
  if (!r) return { socket_reused: false };
  let o = performance.now() - r.monotonicMs;
  return { socket_reused: true, socket_idle_ms: Pt(o), ...!(0, import_chunk_f9x2f6cx.Pd)() && { slept_ms: Pt(Date.now() - r.wallMs - o) } };
}
function Pt(e) {
  return Je.findLast((r) => e >= r) ?? 0;
}
function ge(e) {
  e.on("free", St((r) => {
    let o = r[Xt];
    if (o) o.freedAt = { wallMs: Date.now(), monotonicMs: performance.now() };
  }));
}
var Oe = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)(), 1);
function rr(e, r) {
  let o = typeof e === "object" && e !== null && "code" in e ? e.code : void 0;
  if (typeof o === "number" && Number.isInteger(o)) {
    if (r === "grpc" && o >= 0 && o <= 16) return { errorCode: `grpc_${o}` };
    if (r !== "grpc" && o >= 300 && o < 600) return { errorCode: o === 401 || o === 403 ? `http_${o}` : `http_${Math.floor(o / 100)}xx`, httpStatus: o };
  }
  let n = (0, import_chunk_865at33z.Tqi)(e);
  if (n !== void 0) return { errorCode: `headers_helper_${n}` };
  if ((0, import_chunk_jv7av99m.MD)(e, "Request Timeout")) return { errorCode: "timeout" };
  if ((0, import_chunk_jv7av99m.MD)(e, "Export failed with retryable status")) return { errorCode: "http_retries_exhausted" };
  let a = (0, import_chunk_865at33z.rh)(e);
  return { errorCode: a && ((0, import_chunk_865at33z.RCo)(a.code) ?? (a.isSSLError ? a.code : void 0)) || "other" };
}
function Re(e, r) {
  let o = { signal: (0, import_chunk_78g0060s.f)(e), protocol: (0, import_chunk_78g0060s.f)(r.protocol === "grpc" ? "grpc" : r.protocol === "http/json" ? "http_json" : r.protocol === "http/protobuf" ? "http_protobuf" : "other"), ...r.viaProxy === void 0 ? {} : { via_proxy: r.viaProxy } }, n = false, a = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
  return (c, l) => {
    if (c.code === Oe.ExportResultCode.SUCCESS) {
      if (!n) n = true, (0, import_chunk_cqa9hrgx.u)("otlp_export", o);
      return;
    }
    let { errorCode: E, httpStatus: h } = rr(c.error, r.protocol), T = l?.socket_reused ? Pt(l.socket_idle_ms + (l.slept_ms ?? 0)) : l && "new", g = `${E}:${h ?? ""}:${T ?? ""}`;
    if (a.has(g)) return;
    a.add(g);
    let O = `${E}:${h ?? ""}`, R = (p.get(O) ?? 0) + 1;
    p.set(O, R), (0, import_chunk_cqa9hrgx.m)("otlp_export", E, { ...o, ...h !== void 0 && { http_status: h }, ...l, ...R > 1 && { count: R } });
  };
}
var sr = 6e4, Ae = 5e3, xe = 5e3, ir = "http/protobuf", Ht = 3e5, ar = 36e5;
class Vt extends Error {
}
function zt(e, r) {
  return new Promise((o, n) => {
    setTimeout((a, p) => a(new Vt(p)), e, n, r).unref();
  });
}
function cr() {
  if (N.context.setGlobalContextManager(import_chunk_xfr8663h.WYe), !import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE) import_chunk_c203g5kd.s.set("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE", "delta");
  if ((0, import_chunk_z2xw6net.UH)() && !(0, import_chunk_f9x2f6cx.J4t)()) be();
}
function yt() {
  return (0, import_chunk_xfr8663h.X2e)() ? (0, import_chunk_7cfjrnwy.nt)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, "-") : { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION;
}
function Pe() {
  return import_chunk_c203g5kd.s.OTEL_RESOURCE_INCLUDE_HOST === true && (Ie() || (0, import_chunk_z2xw6net.UH)()) && !(0, import_chunk_f9x2f6cx.Y)() && (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE !== true || (0, import_chunk_6e68m1dj.ny)()) && !(0, import_chunk_xfr8663h.dEl)() && ![import_chunk_c203g5kd.s.OTEL_METRICS_EXPORTER, import_chunk_c203g5kd.s.OTEL_LOGS_EXPORTER, import_chunk_c203g5kd.s.OTEL_TRACES_EXPORTER].some((e) => At(e).includes("console"));
}
function we() {
  let e = (0, import_chunk_f9x2f6cx.naa)();
  if (e) return e;
  let r = (0, import_chunk_cg8dqz0a.x)(), o = { [v.ATTR_SERVICE_NAME]: "claude-code", [v.ATTR_SERVICE_VERSION]: yt() }, n = K.resourceFromAttributes(o), a = Pe() ? K.hostDetector.detect().attributes : void 0, p = Math.min(1e3, (import_chunk_c203g5kd.s.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS ?? 2e3) / 2), c = a && ((0, import_chunk_xcgcdx61.fce)() && !(0, import_chunk_xcgcdx61.OK)() ? (0, import_chunk_5appeerh.me)(new Promise((L) => {
    let C = (0, import_chunk_xcgcdx61.pDr)(() => {
      C(), L();
    });
  }), p) : Promise.resolve()).then(Pe), l = K.resourceFromAttributes(a && c ? { [v.SEMRESATTRS_HOST_NAME]: c.then((L) => L ? a[v.SEMRESATTRS_HOST_NAME] : void 0), [v.SEMRESATTRS_HOST_ID]: Promise.all([c, (0, import_chunk_5appeerh.me)(Promise.resolve(a[v.SEMRESATTRS_HOST_ID]), p)]).then(([L, C]) => L && C || void 0) } : {}), E = (0, import_chunk_865at33z.Sxr)(), h = Object.keys(E).length > 0, T = (0, import_chunk_3jaw45cy.eAn)(), g = it.getStringFromEnv("OTEL_SERVICE_NAME"), O = { ...T.isEveryEntryRead ? T.attributes : (0, import_chunk_xcgcdx61.mi)(T.attributes, (L, C) => import_chunk_3jaw45cy.xei.has(C)), ...g !== void 0 && { [v.ATTR_SERVICE_NAME]: g }, ...import_chunk_c203g5kd.s.OTEL_RESOURCE_INCLUDE_HOST === true && (0, import_chunk_nnk8tdzz.xut)().some((L) => (r === "windows" ? L.toUpperCase() : L) === "OTEL_RESOURCE_ATTRIBUTES") && { [v.SEMRESATTRS_HOST_NAME]: void 0, [v.SEMRESATTRS_HOST_ID]: void 0 } }, R = K.resourceFromAttributes((0, import_chunk_xfr8663h.UYe)() ? {} : h ? (0, import_chunk_xcgcdx61.mi)(O, (L, C) => C.startsWith("user.") || C.startsWith("identity.")) : O), y = n.merge(Ot()).merge(l).merge(R).merge(K.resourceFromAttributes(E));
  return y.waitForAsyncAttributes?.(), (0, import_chunk_f9x2f6cx.raa)(y), y;
}
function be() {
  let e = we(), r = new kt(), o = new W(r, { scheduledDelayMillis: xe }), n = new ct({ resource: e, spanProcessors: [o] });
  N.trace.setGlobalTracerProvider(n), (0, import_chunk_f9x2f6cx.xNs)(n);
  let a = new Ft(), p = new import_chunk_865at33z.bzn({ resource: e, processors: [new import_chunk_865at33z.Qzt(a, { scheduledDelayMillis: Ae })] });
  import_chunk_865at33z.URs.setGlobalLoggerProvider(p), (0, import_chunk_f9x2f6cx.TNs)(p);
  let c = import_chunk_865at33z.URs.getLogger("com.anthropic.claude_code.events", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION);
  (0, import_chunk_f9x2f6cx.ANs)(c, "beta"), process.on("beforeExit", async () => {
    await p.forceFlush().catch(() => {
    }), await n.forceFlush().catch(() => {
    });
  }), process.on("exit", () => {
    p.forceFlush().catch(() => {
    }), n.forceFlush().catch(() => {
    });
  }), ur(r, a).catch((l) => (0, import_chunk_w578pjby.t)(`Beta tracing exporter wiring failed: ${l}`, { level: "error" }));
}
async function ur(e, r) {
  let o = import_chunk_c203g5kd.s.BETA_TRACING_ENDPOINT;
  if (!o) return;
  let [{ OTLPTraceExporter: n }, { OTLPLogExporter: a }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0we4fxb3.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-rv6bz9rk.js")))]), p = et(o, { carriesOurToken: false, direct: true }), c = (l) => {
    let E = { url: `${o}/v1/${l}` };
    if ((0, import_chunk_3jjr3wje.vM)()?.cert || !pr(l)) E.httpAgentOptions = p;
    return E;
  };
  e.setDelegate(new n(c("traces"))), r.setDelegate(new a(c("logs")));
}
var Le = { any: ["OTEL_EXPORTER_OTLP_CERTIFICATE", "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "OTEL_EXPORTER_OTLP_CLIENT_KEY"], traces: ["OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE", "OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE", "OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY"], logs: ["OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE", "OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE", "OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY"] };
function pr(e) {
  return [...Le.any, ...Le[e]].some((r) => process.env[r]);
}
async function lr() {
}
function At(e) {
  return (e || "").trim().split(",").filter(Boolean).map((r) => r.trim()).filter((r) => r !== "none");
}
function jt(e, r) {
  let o = false, n = r && Re(e, r);
  return (a) => {
    let p = a instanceof G.ConsoleMetricExporter || a instanceof mt || a instanceof pt ? void 0 : n, c = he(a.export.bind(a));
    return a.export = (l, E) => c(l, (h) => {
      if (!o) o = true, (0, import_chunk_w578pjby.t)(`[3P telemetry] First ${e} export: ${h.code === it.ExportResultCode.SUCCESS ? "SUCCESS" : `FAILED (${h.error?.message ?? "unknown"})`}`);
      try {
        p?.(h, _e());
      } catch (T) {
        (0, import_chunk_k449cc64.i)(T);
      }
      E(h);
    }), p ? (0, import_chunk_ee1mwmgn.w0a)(a, e) : a;
  };
}
function Wt(e, r, o) {
  if ((0, import_chunk_xfr8663h.lEl)(e)) return;
  return { protocol: r, viaProxy: r === "grpc" ? void 0 : o.httpAgentOptions === (0, import_chunk_f9x2f6cx.PLo)(true, "strict") || o.httpAgentOptions === (0, import_chunk_f9x2f6cx.PLo)(true, "customer") };
}
function st(e, r) {
  let o = r.onlyConfigHeaders === true ? ["OTEL_EXPORTER_OTLP_HEADERS", `OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[e]}_HEADERS`].flatMap((n) => {
    let a = import_chunk_c203g5kd.s[n];
    return a === void 0 ? [] : [{ name: n, value: a }];
  }) : [];
  for (let { name: n } of o) import_chunk_c203g5kd.s.unset(n);
  return { [Symbol.dispose]() {
    for (let { name: n, value: a } of o) import_chunk_c203g5kd.s.set(n, a);
  } };
}
function xt(e) {
  return import_chunk_c203g5kd.s[`OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[e]}_PROTOCOL`] || import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_PROTOCOL || (dr(e) === null ? void 0 : ir);
}
function dr(e) {
  return Yt(Object.fromEntries(["OTEL_EXPORTER_OTLP_ENDPOINT", `OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[e]}_ENDPOINT`].map((r) => {
    let o = process.env[r];
    return [r, o === void 0 ? void 0 : String(o)];
  })), e);
}
function H(e, r) {
  if (r?.url === void 0 && xt(e) === void 0) throw wt(e, void 0);
}
function wt(e, r) {
  let o = import_chunk_xfr8663h.jre[e];
  return Error(r === void 0 ? `No protocol is set for the ${e} OTLP exporter, and its endpoint (OTEL_EXPORTER_OTLP_${o}_ENDPOINT if set, otherwise OTEL_EXPORTER_OTLP_ENDPOINT) is unset or not a valid http:// or https:// URL (check for stray white space)` : `Unknown protocol set in OTEL_EXPORTER_OTLP_${o}_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${r}`);
}
async function mr(e) {
  let r = import_chunk_c203g5kd.s.OTEL_METRIC_EXPORT_INTERVAL ?? sr, o = xt("metrics");
  (0, import_chunk_w578pjby.t)(`[3P telemetry] getOtlpReaders: types=${(0, import_chunk_w578pjby._)(e)}, interval=${r}, protocol=${o}, endpoint=${(0, import_chunk_sah8dzn4.XA)(import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_ENDPOINT ?? "")}`);
  let n = [], a;
  for (let c of e) if (c === "console") {
    let l = new G.ConsoleMetricExporter(), E = l.export.bind(l);
    l.export = (h, T) => {
      if (h.resource && h.resource.attributes) (0, import_chunk_w578pjby.t)(`
=== Resource Attributes ===`), (0, import_chunk_w578pjby.t)((0, import_chunk_w578pjby._)(h.resource.attributes)), (0, import_chunk_w578pjby.t)(`===========================
`);
      return E(h, T);
    }, n.push(l);
  } else if (c === "otlp") {
    let l = Qt("metrics", o);
    switch (a = Wt("metrics", o, l), o) {
      case "grpc": {
        let { OTLPMetricExporter: E } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-eynhxr3s.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1));
        H("metrics"), n.push(new E());
        break;
      }
      case "http/json": {
        var _stack = [];
        try {
          let { OTLPMetricExporter: E } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-wk2zvssq.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1));
          H("metrics", l);
          const h = __using(_stack, st("metrics", l));
          n.push(new E(l));
          break;
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      }
      case "http/protobuf": {
        var _stack2 = [];
        try {
          let { OTLPMetricExporter: E } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-6g5bpe4r.js")));
          H("metrics", l);
          const h = __using(_stack2, st("metrics", l));
          n.push(new E(l));
          break;
        } catch (_3) {
          var _error2 = _3, _hasError2 = true;
        } finally {
          __callDispose(_stack2, _error2, _hasError2);
        }
      }
      default:
        throw wt("metrics", o);
    }
  } else if (c === "prometheus") {
    let { PrometheusExporter: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-n5gnv02g.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1));
    n.push(new l());
  } else throw Error(`Unknown exporter type set in OTEL_METRICS_EXPORTER env var: ${c}`);
  let p = jt("metrics", a);
  return n.map((c) => {
    if ("export" in c) return new G.PeriodicExportingMetricReader({ exporter: p(c), exportIntervalMillis: r });
    return c;
  });
}
async function fr() {
  let e = At(import_chunk_c203g5kd.s.OTEL_LOGS_EXPORTER), r = xt("logs"), o = import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_ENDPOINT;
  (0, import_chunk_w578pjby.t)(`[3P telemetry] getOtlpLogExporters: types=${(0, import_chunk_w578pjby._)(e)}, protocol=${r}, endpoint=${(0, import_chunk_sah8dzn4.XA)(o ?? "")}`);
  let n = [], a;
  for (let p of e) if (p === "console") n.push(new mt());
  else if (p === "otlp") {
    let c = Qt("logs", r);
    switch (a = Wt("logs", r, c), r) {
      case "grpc": {
        let { OTLPLogExporter: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-354wckat.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1));
        H("logs"), n.push(new l());
        break;
      }
      case "http/json": {
        var _stack = [];
        try {
          let { OTLPLogExporter: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-rv6bz9rk.js")));
          H("logs", c);
          const E = __using(_stack, st("logs", c));
          n.push(new l(c));
          break;
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      }
      case "http/protobuf": {
        var _stack2 = [];
        try {
          let { OTLPLogExporter: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-4hdjh9tw.js")));
          H("logs", c);
          const E = __using(_stack2, st("logs", c));
          n.push(new l(c));
          break;
        } catch (_3) {
          var _error2 = _3, _hasError2 = true;
        } finally {
          __callDispose(_stack2, _error2, _hasError2);
        }
      }
      default:
        throw wt("logs", r);
    }
  } else throw Error(`Unknown exporter type set in OTEL_LOGS_EXPORTER env var: ${p}`);
  return n.map(jt("logs", a));
}
async function Er() {
  let e = At(import_chunk_c203g5kd.s.OTEL_TRACES_EXPORTER), r = [], o;
  for (let n of e) if (n === "console") r.push(new pt());
  else if (n === "otlp") {
    let a = (0, import_chunk_xfr8663h.Kws)() !== null ? "http/protobuf" : xt("traces"), p = Qt("traces", a);
    switch (o = Wt("traces", a, p), a) {
      case "grpc": {
        let { OTLPTraceExporter: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-12yz2gba.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1));
        H("traces"), r.push(new c());
        break;
      }
      case "http/json": {
        var _stack = [];
        try {
          let { OTLPTraceExporter: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0we4fxb3.js")));
          H("traces", p);
          const l = __using(_stack, st("traces", p));
          r.push(new c(p));
          break;
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      }
      case "http/protobuf": {
        var _stack2 = [];
        try {
          let { OTLPTraceExporter: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bwxavhza.js")));
          H("traces", p);
          const l = __using(_stack2, st("traces", p));
          r.push(new c(p));
          break;
        } catch (_3) {
          var _error2 = _3, _hasError2 = true;
        } finally {
          __callDispose(_stack2, _error2, _hasError2);
        }
      }
      default:
        throw wt("traces", a);
    }
  } else throw Error(`Unknown exporter type set in OTEL_TRACES_EXPORTER env var: ${n}`);
  return r.map(jt("traces", o));
}
function Ie() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_ENABLE_TELEMETRY);
}
function hr() {
  let e = (0, import_chunk_865at33z.b)("tengu_cozy_dusk", Ht);
  return typeof e === "number" && Number.isFinite(e) ? Math.min(Math.max(e, Ht), ar) : Ht;
}
function _r(e) {
  let r = new Ut({ storageV5: e });
  return (0, import_chunk_w578pjby.Ct)(() => r.armShutdownReport()), new G.PeriodicExportingMetricReader({ exporter: r, exportIntervalMillis: hr() });
}
async function Gs(e, r) {
  if ((0, import_chunk_k5jn5rx9.ts)("telemetry_init_start"), cr(), await lr(), N.propagation.setGlobalPropagator(new it.W3CTraceContextPropagator()), (0, import_chunk_w578pjby.Qoa)()) for (let E of ["OTEL_METRICS_EXPORTER", "OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER"]) {
    let h = process.env[E];
    if (h?.includes("console")) process.env[E] = h.split(",").map((T) => T.trim()).filter((T) => T !== "console").join(",");
  }
  N.diag.setLogger(new import_chunk_hkqn792p.EQs(), import_chunk_c203g5kd.s.CLAUDE_CODE_IS_COWORK ? N.DiagLogLevel.WARN : N.DiagLogLevel.ERROR), (0, import_chunk_z2xw6net.lfl)();
  let o = [], n = Ie(), a = n ? At(import_chunk_c203g5kd.s.OTEL_METRICS_EXPORTER) : [];
  if ((0, import_chunk_w578pjby.t)(`[3P telemetry] isTelemetryEnabled=${n} (CLAUDE_CODE_ENABLE_TELEMETRY=${process.env.CLAUDE_CODE_ENABLE_TELEMETRY})`), n) o.push(...await mr(a));
  if (!r?.disableBigQuery && ae()) o.push(_r(e));
  let p = we();
  if ((0, import_chunk_z2xw6net.UH)()) {
    if (!(0, import_chunk_f9x2f6cx.J4t)()) be();
    let E = new G.MeterProvider({ resource: p, views: [], readers: o });
    return (0, import_chunk_p78dm83c.tvi)(E), (0, import_chunk_w578pjby.Ct)(async () => {
      let T = import_chunk_c203g5kd.s.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS ?? 2e3;
      try {
        (0, import_chunk_z2xw6net.h8e)();
        let g = (0, import_chunk_f9x2f6cx.upt)(), O = (0, import_chunk_f9x2f6cx.J4t)(), R = [E.shutdown()];
        if (g) R.push(import_chunk_xfr8663h.vme.settledWithin(T / 2).then(() => g.forceFlush()).then(() => g.shutdown()));
        if (O) R.push(O.forceFlush().then(() => O.shutdown()));
        await Promise.race([Promise.all(R), zt(T, "OpenTelemetry shutdown timeout")]);
      } catch {
      }
    }), { meter: E.getMeter("com.anthropic.claude_code", yt()), metricsExporterKinds: a };
  }
  let c = new G.MeterProvider({ resource: p, views: [], readers: o });
  if ((0, import_chunk_p78dm83c.tvi)(c), n && (!(0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_xfr8663h.X2e)())) {
    let E = await fr();
    if ((0, import_chunk_w578pjby.t)(`[3P telemetry] Created ${E.length} log exporter(s)`), E.length > 0) {
      let h = new import_chunk_865at33z.bzn({ resource: p, processors: E.map((g) => new import_chunk_865at33z.Qzt(Kt(g), { scheduledDelayMillis: import_chunk_c203g5kd.s.OTEL_LOGS_EXPORT_INTERVAL ?? Ae })) });
      if (!(0, import_chunk_f9x2f6cx.Y)()) import_chunk_865at33z.URs.setGlobalLoggerProvider(h);
      (0, import_chunk_f9x2f6cx.TNs)(h);
      let T = h.getLogger("com.anthropic.claude_code.events", yt());
      (0, import_chunk_f9x2f6cx.ANs)(T, "org"), (0, import_chunk_w578pjby.t)("[3P telemetry] Event logger set successfully"), process.on("beforeExit", async () => {
        await h?.forceFlush(), await (0, import_chunk_f9x2f6cx.J4t)()?.forceFlush();
      }), process.on("exit", () => {
        h?.forceFlush(), (0, import_chunk_f9x2f6cx.J4t)()?.forceFlush();
      });
    }
  }
  if (n && (0, import_chunk_z2xw6net.pSr)() && !(0, import_chunk_f9x2f6cx.Y)()) {
    let E = await Er();
    if (E.length > 0) {
      import_chunk_xfr8663h.qws.freeze();
      let T = (0, import_chunk_xfr8663h.UYe)() ? Pr : void 0, g = E.map((R) => new W(R, { scheduledDelayMillis: import_chunk_c203g5kd.s.OTEL_TRACES_EXPORT_INTERVAL ?? xe, ...T !== void 0 && { maxExportBatchSize: T } })), O = new ct({ resource: p, spanProcessors: g });
      N.trace.setGlobalTracerProvider(O), (0, import_chunk_f9x2f6cx.xNs)(O), process.on("beforeExit", async () => {
        await O.forceFlush();
      });
    }
  }
  return (0, import_chunk_w578pjby.Ct)(async () => {
    let E = import_chunk_c203g5kd.s.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS ?? 2e3;
    try {
      (0, import_chunk_z2xw6net.h8e)();
      let h = [c.shutdown()], T = (0, import_chunk_f9x2f6cx.upt)();
      if (T) h.push(import_chunk_xfr8663h.vme.settledWithin(E / 2).then(() => T.shutdown()));
      let g = (0, import_chunk_f9x2f6cx.J4t)();
      if (g) h.push(g.shutdown());
      await Promise.race([Promise.all(h), zt(E, "OpenTelemetry shutdown timeout")]);
    } catch (h) {
      if (h instanceof Error && h.message.includes("timeout")) (0, import_chunk_w578pjby.t)(`
OpenTelemetry telemetry flush timed out after ${E}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: ${E}ms
`, { level: "error" });
      throw h;
    }
  }), { meter: c.getMeter("com.anthropic.claude_code", yt()), metricsExporterKinds: a };
}
async function zs() {
  let e = (0, import_chunk_p78dm83c.edo)();
  if (!e) return;
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS ?? 5e3;
  try {
    let o = [e.forceFlush()], n = (0, import_chunk_f9x2f6cx.upt)();
    if (n) o.push(import_chunk_xfr8663h.vme.settledWithin(r / 2).then(() => n.forceFlush()));
    let a = (0, import_chunk_f9x2f6cx.J4t)();
    if (a) o.push(a.forceFlush());
    await Promise.race([Promise.all(o), zt(r, "OpenTelemetry flush timeout")]), (0, import_chunk_w578pjby.t)("Telemetry flushed successfully");
  } catch (o) {
    if (o instanceof Vt) (0, import_chunk_w578pjby.t)(`Telemetry flush timed out after ${r}ms. Some metrics may not be exported.`, { level: "warn" });
    else (0, import_chunk_w578pjby.t)(`Telemetry flush failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
function Tr() {
  let e = {}, r = import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_HEADERS;
  if (r) for (let o of r.split(",")) {
    let [n, ...a] = o.split("=");
    if (n && a.length > 0) e[n.trim()] = a.join("=").trim();
  }
  return e;
}
function Qt(e, r) {
  let o = !!(0, import_chunk_865at33z.Fxr)(), n = {}, a = (0, import_chunk_f9x2f6cx.Io)(), p = (0, import_chunk_f9x2f6cx.iA)(a) ? gr(e, a, o) : null;
  if ((0, import_chunk_f9x2f6cx.iA)(a) && p === null) {
    let g = a.url;
    return n.url = `${g}/v1/${e}`, n.headers = async () => {
      await (0, import_chunk_np189awg.o3)();
      let O = (0, import_chunk_f9x2f6cx.Io)();
      if (!O || O.url !== g) return {};
      if ((0, import_chunk_f9x2f6cx.yPt)()) throw Error("Cloud gateway session expired, so this telemetry batch was not sent. Run /login to reconnect.");
      return { Authorization: `Bearer ${O.jwt}` };
    }, n.httpAgentOptions = et(g, { carriesOurToken: false }), n;
  }
  let c = (0, import_chunk_f9x2f6cx.iA)(a) ? null : (0, import_chunk_xfr8663h.Vws)(e);
  if (c !== null) return n.url = c, n.headers = async () => {
    if ((0, import_chunk_xfr8663h.Vws)(e) !== c) return {};
    return (0, import_chunk_5rd4zsth.VPe)(import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_ACCESS_TOKEN);
  }, n.httpAgentOptions = et(c, { carriesOurToken: true }), n;
  let l = Tr(), E = Sr(e, o), h = Lr(e);
  if (h.send) return n.url = h.url, n.headers = h.headers, n.httpAgentOptions = et(h.url, { carriesOurToken: true }), import_chunk_xfr8663h.qws.arm(), n;
  if (o) {
    if (n.headers = async () => {
      let g = await (0, import_chunk_865at33z.bRs)();
      return { ...l, ...g };
    }, r === "http/json" || r === "http/protobuf") (0, import_chunk_865at33z.Aqi)();
  } else if (E.send) return n.url = E.url, n.headers = E.headers, n.onlyConfigHeaders = true, n.httpAgentOptions = et(E.url, { carriesOurToken: false }), n;
  else if (Object.keys(l).length > 0) n.headers = async () => l;
  let T = et(p ?? (process.env[`OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[e]}_ENDPOINT`]?.trim() || import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_ENDPOINT), { carriesOurToken: false });
  if (n.httpAgentOptions = T, p !== null) {
    n.url = p;
    let g = a?.url, O = n.headers;
    n.headers = async () => {
      if ((0, import_chunk_f9x2f6cx.Io)()?.url !== g) throw Error("The Cloud gateway session that named this collector ended \u2014 dropping this telemetry batch");
      return typeof O === "function" ? await O() : {};
    };
  }
  return n;
}
function gr(e, r, o) {
  if (o) return null;
  let n = Yt(Or()?.env, e);
  if (n === null) return null;
  if (Me(e) !== n || Rr(n, r) || !Ue(n) || !De(n, e)) return null;
  return (0, import_chunk_w578pjby.t)(`[3P telemetry] ${e}: exporting to the collector the gateway's managed settings name (${(0, import_chunk_sah8dzn4.XA)(n)}), not through the gateway relay`), n;
}
function Or() {
  if ((0, import_chunk_2yx6c1y2.Kb)() !== "remote") return null;
  if (!(0, import_chunk_xcgcdx61.nc)() && (0, import_chunk_xcgcdx61.kI)() === void 0) return null;
  return (0, import_chunk_2yx6c1y2.Rp)()[0] ?? null;
}
function Me(e) {
  let r = import_chunk_xfr8663h.jre[e];
  return Yt({ OTEL_EXPORTER_OTLP_ENDPOINT: import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_ENDPOINT, [`OTEL_EXPORTER_OTLP_${r}_ENDPOINT`]: import_chunk_c203g5kd.s[`OTEL_EXPORTER_OTLP_${r}_ENDPOINT`] }, e);
}
function Yt(e, r) {
  if (!e) return null;
  let o = /* @__PURE__ */ new Map();
  for (let [p, c] of Object.entries(e)) {
    let l = p.toUpperCase();
    if (c !== void 0 && (!o.has(l) || p === l)) o.set(l, c);
  }
  let n = o.get(`OTEL_EXPORTER_OTLP_${import_chunk_xfr8663h.jre[r]}_ENDPOINT`);
  if (n?.trim()) return ot(n);
  let a = o.get("OTEL_EXPORTER_OTLP_ENDPOINT");
  if (!a?.trim() || ot(a) === null) return null;
  return ot(`${a}${a.endsWith("/") ? "" : "/"}v1/${r}`);
}
function Rr(e, r) {
  let o = Ce(e);
  if (o === null) return false;
  let n = [r.url], a = (0, import_chunk_np189awg.hD)(r.jwt);
  if (a !== null && typeof a === "object" && "iss" in a && typeof a.iss === "string") n.push(a.iss);
  return n.some((p) => Ce(p) === o);
}
function Ce(e) {
  let r = ot(e);
  return r === null ? null : new URL(r).host.replace(/\.(?=:|$)/, "");
}
function De(e, r) {
  let o = new URL(e);
  return o.pathname.endsWith(`/v1/${r}`) && !o.search && !o.hash;
}
function Ue(e) {
  let r = new URL(e);
  return r.protocol === "https:" || r.protocol === "http:" && (0, import_chunk_y6mqk49g.OHr)(r.href);
}
function ot(e) {
  try {
    let r = new URL(e);
    return (r.protocol === "https:" || r.protocol === "http:") && r.host ? r.href : null;
  } catch {
    return null;
  }
}
function Sr(e, r) {
  let o = { send: false }, n = (c) => {
    if (!c || ot(c) === null) return null;
    let l = ot(`${c.replace(/\/+$/, "")}/v1/${e}`);
    return l !== null && Ue(l) && De(l, e) ? l : null;
  };
  if (!(0, import_chunk_865at33z.cc)()) return o;
  let a = (0, import_chunk_zhr7rpv7.ve)();
  if (a !== "firstParty" && a !== "gateway") return o;
  if (!(0, import_chunk_np189awg.AVt)(import_chunk_c203g5kd.s.ANTHROPIC_AUTH_TOKEN)) return o;
  if (r) return o;
  let p = n(import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL);
  if (!p) return o;
  if (Me(e) !== p) return o;
  return { send: true, url: p, headers: async () => {
    let c = import_chunk_c203g5kd.s.ANTHROPIC_AUTH_TOKEN;
    return c && (0, import_chunk_np189awg.AVt)(c) && n(import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL) === p ? { Authorization: `Bearer ${c}` } : {};
  } };
}
var Pr = 100;
function Lr(e) {
  let r = { send: false };
  if (e !== "traces") return r;
  let o = (0, import_chunk_xfr8663h.Kws)();
  if (o === null) return r;
  return { send: true, url: o, headers: async () => (0, import_chunk_5rd4zsth.JX)() };
}
function ye(e, r) {
  if (Buffer.isBuffer(e)) return e;
  if (typeof e === "string") return typeof r === "string" ? Buffer.from(e, r) : Buffer.from(e);
  if (e instanceof Uint8Array) return Buffer.from(e);
  throw TypeError("OTLP request body chunk is not string or Uint8Array");
}
function Gt(e) {
  let r = e, o = r.addRequest.bind(r);
  return r.addRequest = function(a, ...p) {
    if (Te(a), !a.getHeader("content-length") && !a.getHeader("transfer-encoding")) {
      let h = function() {
        a.write = l, a.end = E;
      }, T = function(g) {
        h(), a.destroy(g instanceof Error ? g : TypeError("OTLP request body chunk conversion failed"));
      }, c = [], l = a.write.bind(a), E = a.end.bind(a);
      a.write = function(O, R, y) {
        try {
          c.push(ye(O, R));
        } catch (C) {
          return T(C), false;
        }
        let L = typeof R === "function" ? R : y;
        if (L) process.nextTick(L, null);
        return true;
      }, a.end = function(O, R, y) {
        if (O != null && typeof O !== "function") try {
          c.push(ye(O, R));
        } catch (M) {
          return T(M), a;
        }
        let L = typeof O === "function" ? O : typeof R === "function" ? R : y, C = Buffer.concat(c);
        if (!a.headersSent) a.setHeader("Content-Length", String(C.byteLength));
        return h(), E(C, L);
      };
    }
    o(a, ...p);
  }, ge(e), e;
}
function Lt(e) {
  let r = e?.trim() ? Number(e) : Number.NaN;
  return Number.isFinite(r) && r > 0 ? r : void 0;
}
function et(e, { carriesOurToken: r, direct: o = false }) {
  let n = e ?? "http://localhost:4318", a = (0, import_chunk_3jjr3wje.YX)(n), p = !o && a !== void 0 && !(0, import_chunk_y6mqk49g.OHr)(n), c = r ? void 0 : (0, import_chunk_3jjr3wje.Yde)(e), l = c ? "customer" : "strict", E = (0, import_chunk_f9x2f6cx.PLo)(p, l);
  if (E) return E;
  let h = (0, import_chunk_3jjr3wje.kFe)((0, import_chunk_3jjr3wje.Khn)(c)), T, g, O = /* @__PURE__ */ new Map(), R = 25e3, y = Lt(import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_TIMEOUT) ?? R, L = Math.min(R, Math.max(Lt(import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_LOGS_TIMEOUT) ?? y, Lt(import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_METRICS_TIMEOUT) ?? y, Lt(import_chunk_c203g5kd.s.OTEL_EXPORTER_OTLP_TRACES_TIMEOUT) ?? y)), C = (M) => {
    if (p) {
      let lt = M !== "http:", z = O.get(lt);
      if (!z) z = Gt(new import_chunk_3jjr3wje.IXi({ isSecure: lt, tunnelOpensWithinMs: L }, a, { ...h, keepAlive: true, maxFreeSockets: 1 })), O.set(lt, z), z.options = { ...z.options, ...h };
      return z;
    }
    if (M === "http:") {
      if (!T) T = Gt(new import_http.default.Agent({ keepAlive: true, maxSockets: 1 }));
      return T;
    }
    if (!g) g = Gt(new import_chunk_3jjr3wje.MIo({ ...h, keepAlive: true, maxSockets: 1 }));
    return g;
  };
  return (0, import_chunk_f9x2f6cx.oaa)(p, l, C), C;
}
