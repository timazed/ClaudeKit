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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_xnzxknv5_exports = {};
__export(chunk_xnzxknv5_exports, {
  startGatewayOrExit: () => r0
});
module.exports = __toCommonJS(chunk_xnzxknv5_exports);
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
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
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
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
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
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_y6mqk49g = require("/$bunfs/root/chunk-y6mqk49g.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_kbsax5x5 = require("/$bunfs/root/chunk-kbsax5x5.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
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
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_8f66wxnw = require("/$bunfs/root/chunk-8f66wxnw.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_x8rfwr2t = require("/$bunfs/root/chunk-x8rfwr2t.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_qm5s85q5 = require("/$bunfs/root/chunk-qm5s85q5.js");
var import_chunk_8xs3r4c8 = require("/$bunfs/root/chunk-8xs3r4c8.js");
var import_chunk_s95w59kf = require("/$bunfs/root/chunk-s95w59kf.js");
var import_chunk_q3zwm6gk = require("/$bunfs/root/chunk-q3zwm6gk.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_kmbc34js = require("/$bunfs/root/chunk-kmbc34js.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_3v09xgvh = require("/$bunfs/root/chunk-3v09xgvh.js");
var import_chunk_v6tczjz9 = require("/$bunfs/root/chunk-v6tczjz9.js");
var import_chunk_mmevw7ty = require("/$bunfs/root/chunk-mmevw7ty.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_qk25vh5t = require("/$bunfs/root/chunk-qk25vh5t.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var import_chunk_0bfd61k9 = require("/$bunfs/root/chunk-0bfd61k9.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_1m0ck3v8 = require("/$bunfs/root/chunk-1m0ck3v8.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_vyaqbqge = require("/$bunfs/root/chunk-vyaqbqge.js");
var import_chunk_v6yexwhb = require("/$bunfs/root/chunk-v6yexwhb.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_http = __toESM(require("http"));
var import_crypto2 = require("crypto");
var import_crypto3 = require("crypto");
var import_crypto4 = require("crypto");
var import_crypto5 = require("crypto");
var import_util = require("util");
var import_promises2 = require("fs/promises");
var Yr = __toESM(require("tls"));
var import_dns = require("dns");
var import_http2 = require("http");
var import_https = require("https");
var import_tls = require("tls");
var import_crypto6 = require("crypto");
var import_net = require("net");
var import_crypto7 = require("crypto");
var import_crypto8 = require("crypto");
var import_promises3 = require("fs/promises");
var import_path = require("path");
var import_crypto9 = require("crypto");
var import_crypto10 = require("crypto");
var import_crypto11 = require("crypto");
var import_crypto12 = require("crypto");
var lt = (0, import_chunk_w1d7ygsk.V)(function(G_, Qi) {
  var { format: Vi } = (0, import_chunk_w1d7ygsk.ft)("util");
  class Xi extends Error {
    constructor({ error_description: e, error: t, error_uri: r, session_state: i, state: o, scope: a }, l) {
      super(!e ? t : `${t} (${e})`);
      if (Object.assign(this, { error: t }, e && { error_description: e }, r && { error_uri: r }, o && { state: o }, a && { scope: a }, i && { session_state: i }), l) Object.defineProperty(this, "response", { value: l });
      this.name = this.constructor.name, Error.captureStackTrace(this, this.constructor);
    }
  }
  class Zi extends Error {
    constructor(...e) {
      if (typeof e[0] === "string") super(Vi(...e));
      else {
        let { message: t, printf: r, response: i, ...o } = e[0];
        if (r) super(Vi(...r));
        else super(t);
        if (Object.assign(this, o), i) Object.defineProperty(this, "response", { value: i });
      }
      this.name = this.constructor.name, Error.captureStackTrace(this, this.constructor);
    }
  }
  Qi.exports = { OPError: Xi, RPError: Zi };
});
var sa = (0, import_chunk_w1d7ygsk.V)(function(F_, ra) {
  var na = (0, import_chunk_w1d7ygsk.ft)("crypto"), [ta, Ap] = process.version.substring(1).split(".").map((e) => parseInt(e, 10)), Tp = ta > 12 || ta === 12 && Ap >= 8, Rp = Tp && na.getHashes().includes("shake256");
  ra.exports = Rp;
});
var ca = (0, import_chunk_w1d7ygsk.V)(function(q_, aa) {
  var { strict: Ns } = (0, import_chunk_w1d7ygsk.ft)("assert"), { createHash: vn } = (0, import_chunk_w1d7ygsk.ft)("crypto"), { format: oa } = (0, import_chunk_w1d7ygsk.ft)("util"), xp = sa(), Us;
  if (Buffer.isEncoding("base64url")) Us = (e) => e.toString("base64url");
  else {
    let e = (t) => t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    Us = (t) => e(t.toString("base64"));
  }
  function Cp(e, t) {
    switch (e) {
      case "HS256":
      case "RS256":
      case "PS256":
      case "ES256":
      case "ES256K":
        return vn("sha256");
      case "HS384":
      case "RS384":
      case "PS384":
      case "ES384":
        return vn("sha384");
      case "HS512":
      case "RS512":
      case "PS512":
      case "ES512":
        return vn("sha512");
      case "EdDSA":
        switch (t) {
          case "Ed25519":
            return vn("sha512");
          case "Ed448":
            if (!xp) throw TypeError("Ed448 *_hash calculation is not supported in your Node.js runtime version");
            return vn("shake256", { outputLength: 114 });
          default:
            throw TypeError("unrecognized or invalid EdDSA curve provided");
        }
      default:
        throw TypeError("unrecognized or invalid JWS algorithm provided");
    }
  }
  function ia(e, t, r) {
    let i = Cp(t, r).update(e).digest();
    return Us(i.slice(0, i.length / 2));
  }
  function Pp(e, t, r, i, o) {
    if (typeof e.claim !== "string" || !e.claim) throw TypeError("names.claim must be a non-empty string");
    if (typeof e.source !== "string" || !e.source) throw TypeError("names.source must be a non-empty string");
    Ns(typeof t === "string" && t, `${e.claim} must be a non-empty string`), Ns(typeof r === "string" && r, `${e.source} must be a non-empty string`);
    let a, l;
    try {
      a = ia(r, i, o);
    } catch (h) {
      l = oa("%s could not be validated (%s)", e.claim, h.message);
    }
    l = l || oa("%s mismatch, expected %s, got: %s", e.claim, a, t), Ns.equal(a, t, l);
  }
  aa.exports = { validate: Pp, generate: ia };
});
var pa = (0, import_chunk_w1d7ygsk.V)(function(K_, ua) {
  var da = (0, import_chunk_w1d7ygsk.ft)("util"), la = (0, import_chunk_w1d7ygsk.ft)("crypto");
  ua.exports = da.types.isKeyObject || ((e) => e && e instanceof la.KeyObject);
});
var En = (0, import_chunk_w1d7ygsk.V)(function(Ip, js) {
  var Ms;
  if (Buffer.isEncoding("base64url")) Ms = (e, t = "utf8") => Buffer.from(e, t).toString("base64url");
  else {
    let e = (t) => t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    Ms = (t, r = "utf8") => e(Buffer.from(t, r).toString("base64"));
  }
  var Op = (e) => Buffer.from(e, "base64");
  Ip.decode = Op;
  Ip.encode = Ms;
});
var ha = (0, import_chunk_w1d7ygsk.V)(function(z_, fa) {
  var yr = En();
  fa.exports = (e) => {
    if (typeof e !== "string" || !e) throw TypeError("JWT must be a string");
    let { 0: t, 1: r, 2: i, length: o } = e.split(".");
    if (o === 5) throw TypeError("encrypted JWTs cannot be decoded");
    if (o !== 3) throw Error("JWTs must have three components");
    try {
      return { header: JSON.parse(yr.decode(t)), payload: JSON.parse(yr.decode(r)), signature: i };
    } catch (a) {
      throw Error("JWT is malformed");
    }
  };
});
var Sn = (0, import_chunk_w1d7ygsk.V)(function(J_, ma) {
  ma.exports = (e) => !!e && e.constructor === Object;
});
var Gs = (0, import_chunk_w1d7ygsk.V)(function(Y_, Hs) {
  var Bs = Sn();
  function Ws(e, t, ...r) {
    for (let i of r) {
      if (!Bs(i)) continue;
      for (let [o, a] of Object.entries(i)) {
        if (o === "__proto__" || o === "constructor") continue;
        if (typeof t[o] > "u" && typeof a < "u") t[o] = a;
        if (e && Bs(t[o]) && Bs(a)) Ws(true, t[o], a);
      }
    }
    return t;
  }
  Hs.exports = Ws.bind(void 0, false);
  Hs.exports.deep = Ws.bind(void 0, true);
});
var Fs = (0, import_chunk_w1d7ygsk.V)(function(V_, ga) {
  var Dp = /(\w+)=("[^"]*")/g;
  ga.exports = (e) => {
    let t = {};
    try {
      while (Dp.exec(e) !== null) if (RegExp.$1 && RegExp.$2) t[RegExp.$1] = RegExp.$2.slice(1, -1);
    } catch (r) {
    }
    return t;
  };
});
var wr = (0, import_chunk_w1d7ygsk.V)(function(X_, _a) {
  function Np(e, t, r) {
    if (!t[`${e}_endpoint`]) return;
    let i = `${e}_endpoint_auth_method`, o = `${e}_endpoint_auth_signing_alg`, a = `${e}_endpoint_auth_signing_alg_values_supported`;
    if (r[i] && r[i].endsWith("_jwt") && !r[o] && !t[a]) throw TypeError(`${a} must be configured on the issuer if ${o} is not defined on a client`);
  }
  function Up(e, t) {
    if (!e[t]) throw TypeError(`${t} must be configured on the issuer`);
  }
  _a.exports = { assertSigningAlgValuesSupport: Np, assertIssuerConfiguration: Up };
});
var br = (0, import_chunk_w1d7ygsk.V)(function(Z_, ya) {
  ya.exports = function(t, ...r) {
    let i = {};
    for (let o of r) if (t[o] !== void 0) i[o] = t[o];
    return i;
  };
});
var vr = (0, import_chunk_w1d7ygsk.V)(function(Q_, ba) {
  var { STATUS_CODES: qs } = (0, import_chunk_w1d7ygsk.ft)("http"), { format: wa } = (0, import_chunk_w1d7ygsk.ft)("util"), { OPError: kr } = lt(), Mp = Fs(), jp = (e) => {
    let t = Mp(e.headers["www-authenticate"]);
    if (t.error) throw new kr(t, e);
  }, Bp = (e) => {
    let t = false;
    try {
      let r;
      if (typeof e.body !== "object" || Buffer.isBuffer(e.body)) r = JSON.parse(e.body);
      else r = e.body;
      if (t = typeof r.error === "string" && r.error.length, t) Object.defineProperty(e, "body", { value: r, configurable: true });
    } catch (r) {
    }
    return t;
  };
  function Wp(e, { statusCode: t = 200, body: r = true, bearer: i = false } = {}) {
    if (e.statusCode !== t) {
      if (i) jp(e);
      if (Bp(e)) throw new kr(e.body, e);
      throw new kr({ error: wa("expected %i %s, got: %i %s", t, qs[t], e.statusCode, qs[e.statusCode]) }, e);
    }
    if (r && !e.body) throw new kr({ error: wa("expected %i %s with body but no body was returned", t, qs[t]) }, e);
    return e.body;
  }
  ba.exports = Wp;
});
var An = (0, import_chunk_w1d7ygsk.V)(function(ey, ka) {
  ka.exports = () => Math.floor(Date.now() / 1e3);
});
var Ks = (0, import_chunk_w1d7ygsk.V)(function(ty, Aa) {
  var Ea = En(), va = An();
  class Sa {
    constructor(e) {
      Object.assign(this, e);
      let { constructor: t, ...r } = Object.getOwnPropertyDescriptors(this.constructor.prototype);
      Object.defineProperties(this, r);
    }
    set expires_in(e) {
      this.expires_at = va() + Number(e);
    }
    get expires_in() {
      return Math.max.apply(null, [this.expires_at - va(), 0]);
    }
    expired() {
      return this.expires_in === 0;
    }
    claims() {
      if (!this.id_token) throw TypeError("id_token not present in TokenSet");
      return JSON.parse(Ea.decode(this.id_token.split(".")[1]));
    }
  }
  Aa.exports = Sa;
});
var Tn = (0, import_chunk_w1d7ygsk.V)(function(ny, Ta) {
  var { createHash: Hp, randomBytes: Gp } = (0, import_chunk_w1d7ygsk.ft)("crypto"), Sr = En(), Er = (e = 32) => Sr.encode(Gp(e));
  Ta.exports = { random: Er, state: Er, nonce: Er, codeVerifier: Er, codeChallenge: (e) => Sr.encode(Hp("sha256").update(e).digest()) };
});
var xa = (0, import_chunk_w1d7ygsk.V)(function(ry, Ra) {
  Ra.exports = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next) yield t.value;
    };
  };
});
var Pa = (0, import_chunk_w1d7ygsk.V)(function(sy, Ca) {
  Ca.exports = ie;
  ie.Node = Dt;
  ie.create = ie;
  function ie(e) {
    var t = this;
    if (!(t instanceof ie)) t = new ie();
    if (t.tail = null, t.head = null, t.length = 0, e && typeof e.forEach === "function") e.forEach(function(o) {
      t.push(o);
    });
    else if (arguments.length > 0) for (var r = 0, i = arguments.length; r < i; r++) t.push(arguments[r]);
    return t;
  }
  ie.prototype.removeNode = function(e) {
    if (e.list !== this) throw Error("removing node which does not belong to this list");
    var { next: t, prev: r } = e;
    if (t) t.prev = r;
    if (r) r.next = t;
    if (e === this.head) this.head = t;
    if (e === this.tail) this.tail = r;
    return e.list.length--, e.next = null, e.prev = null, e.list = null, t;
  };
  ie.prototype.unshiftNode = function(e) {
    if (e === this.head) return;
    if (e.list) e.list.removeNode(e);
    var t = this.head;
    if (e.list = this, e.next = t, t) t.prev = e;
    if (this.head = e, !this.tail) this.tail = e;
    this.length++;
  };
  ie.prototype.pushNode = function(e) {
    if (e === this.tail) return;
    if (e.list) e.list.removeNode(e);
    var t = this.tail;
    if (e.list = this, e.prev = t, t) t.next = e;
    if (this.tail = e, !this.head) this.head = e;
    this.length++;
  };
  ie.prototype.push = function() {
    for (var e = 0, t = arguments.length; e < t; e++) qp(this, arguments[e]);
    return this.length;
  };
  ie.prototype.unshift = function() {
    for (var e = 0, t = arguments.length; e < t; e++) Kp(this, arguments[e]);
    return this.length;
  };
  ie.prototype.pop = function() {
    if (!this.tail) return;
    var e = this.tail.value;
    if (this.tail = this.tail.prev, this.tail) this.tail.next = null;
    else this.head = null;
    return this.length--, e;
  };
  ie.prototype.shift = function() {
    if (!this.head) return;
    var e = this.head.value;
    if (this.head = this.head.next, this.head) this.head.prev = null;
    else this.tail = null;
    return this.length--, e;
  };
  ie.prototype.forEach = function(e, t) {
    t = t || this;
    for (var r = this.head, i = 0; r !== null; i++) e.call(t, r.value, i, this), r = r.next;
  };
  ie.prototype.forEachReverse = function(e, t) {
    t = t || this;
    for (var r = this.tail, i = this.length - 1; r !== null; i--) e.call(t, r.value, i, this), r = r.prev;
  };
  ie.prototype.get = function(e) {
    for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
    if (t === e && r !== null) return r.value;
  };
  ie.prototype.getReverse = function(e) {
    for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
    if (t === e && r !== null) return r.value;
  };
  ie.prototype.map = function(e, t) {
    t = t || this;
    var r = new ie();
    for (var i = this.head; i !== null; ) r.push(e.call(t, i.value, this)), i = i.next;
    return r;
  };
  ie.prototype.mapReverse = function(e, t) {
    t = t || this;
    var r = new ie();
    for (var i = this.tail; i !== null; ) r.push(e.call(t, i.value, this)), i = i.prev;
    return r;
  };
  ie.prototype.reduce = function(e, t) {
    var r, i = this.head;
    if (arguments.length > 1) r = t;
    else if (this.head) i = this.head.next, r = this.head.value;
    else throw TypeError("Reduce of empty list with no initial value");
    for (var o = 0; i !== null; o++) r = e(r, i.value, o), i = i.next;
    return r;
  };
  ie.prototype.reduceReverse = function(e, t) {
    var r, i = this.tail;
    if (arguments.length > 1) r = t;
    else if (this.tail) i = this.tail.prev, r = this.tail.value;
    else throw TypeError("Reduce of empty list with no initial value");
    for (var o = this.length - 1; i !== null; o--) r = e(r, i.value, o), i = i.prev;
    return r;
  };
  ie.prototype.toArray = function() {
    var e = Array(this.length);
    for (var t = 0, r = this.head; r !== null; t++) e[t] = r.value, r = r.next;
    return e;
  };
  ie.prototype.toArrayReverse = function() {
    var e = Array(this.length);
    for (var t = 0, r = this.tail; r !== null; t++) e[t] = r.value, r = r.prev;
    return e;
  };
  ie.prototype.slice = function(e, t) {
    if (t = t || this.length, t < 0) t += this.length;
    if (e = e || 0, e < 0) e += this.length;
    var r = new ie();
    if (t < e || t < 0) return r;
    if (e < 0) e = 0;
    if (t > this.length) t = this.length;
    for (var i = 0, o = this.head; o !== null && i < e; i++) o = o.next;
    for (; o !== null && i < t; i++, o = o.next) r.push(o.value);
    return r;
  };
  ie.prototype.sliceReverse = function(e, t) {
    if (t = t || this.length, t < 0) t += this.length;
    if (e = e || 0, e < 0) e += this.length;
    var r = new ie();
    if (t < e || t < 0) return r;
    if (e < 0) e = 0;
    if (t > this.length) t = this.length;
    for (var i = this.length, o = this.tail; o !== null && i > t; i--) o = o.prev;
    for (; o !== null && i > e; i--, o = o.prev) r.push(o.value);
    return r;
  };
  ie.prototype.splice = function(e, t, ...r) {
    if (e > this.length) e = this.length - 1;
    if (e < 0) e = this.length + e;
    for (var i = 0, o = this.head; o !== null && i < e; i++) o = o.next;
    var a = [];
    for (var i = 0; o && i < t; i++) a.push(o.value), o = this.removeNode(o);
    if (o === null) o = this.tail;
    if (o !== this.head && o !== this.tail) o = o.prev;
    for (var i = 0; i < r.length; i++) o = Fp(this, o, r[i]);
    return a;
  };
  ie.prototype.reverse = function() {
    var e = this.head, t = this.tail;
    for (var r = e; r !== null; r = r.prev) {
      var i = r.prev;
      r.prev = r.next, r.next = i;
    }
    return this.head = t, this.tail = e, this;
  };
  function Fp(e, t, r) {
    var i = t === e.head ? new Dt(r, null, t, e) : new Dt(r, t, t.next, e);
    if (i.next === null) e.tail = i;
    if (i.prev === null) e.head = i;
    return e.length++, i;
  }
  function qp(e, t) {
    if (e.tail = new Dt(t, e.tail, null, e), !e.head) e.head = e.tail;
    e.length++;
  }
  function Kp(e, t) {
    if (e.head = new Dt(t, null, e.head, e), !e.tail) e.tail = e.head;
    e.length++;
  }
  function Dt(e, t, r, i) {
    if (!(this instanceof Dt)) return new Dt(e, t, r, i);
    if (this.list = i, this.value = e, t) t.next = this, this.prev = t;
    else this.prev = null;
    if (r) r.prev = this, this.next = r;
    else this.next = null;
  }
  try {
    xa()(ie);
  } catch (e) {
  }
});
var Tr = (0, import_chunk_w1d7ygsk.V)(function(oy, Na) {
  var zp = Pa(), Ut = Symbol("max"), _t = Symbol("length"), tn = Symbol("lengthCalculator"), xn = Symbol("allowStale"), Mt = Symbol("maxAge"), gt = Symbol("dispose"), Oa = Symbol("noDisposeOnSet"), xe = Symbol("lruList"), ot = Symbol("cache"), La = Symbol("updateAgeOnGet"), zs = () => 1;
  class $a {
    constructor(e) {
      if (typeof e === "number") e = { max: e };
      if (!e) e = {};
      if (e.max && (typeof e.max !== "number" || e.max < 0)) throw TypeError("max must be a non-negative number");
      let t = this[Ut] = e.max || 1 / 0, r = e.length || zs;
      if (this[tn] = typeof r !== "function" ? zs : r, this[xn] = e.stale || false, e.maxAge && typeof e.maxAge !== "number") throw TypeError("maxAge must be a number");
      this[Mt] = e.maxAge || 0, this[gt] = e.dispose, this[Oa] = e.noDisposeOnSet || false, this[La] = e.updateAgeOnGet || false, this.reset();
    }
    set max(e) {
      if (typeof e !== "number" || e < 0) throw TypeError("max must be a non-negative number");
      this[Ut] = e || 1 / 0, Rn(this);
    }
    get max() {
      return this[Ut];
    }
    set allowStale(e) {
      this[xn] = !!e;
    }
    get allowStale() {
      return this[xn];
    }
    set maxAge(e) {
      if (typeof e !== "number") throw TypeError("maxAge must be a non-negative number");
      this[Mt] = e, Rn(this);
    }
    get maxAge() {
      return this[Mt];
    }
    set lengthCalculator(e) {
      if (typeof e !== "function") e = zs;
      if (e !== this[tn]) this[tn] = e, this[_t] = 0, this[xe].forEach((t) => {
        t.length = this[tn](t.value, t.key), this[_t] += t.length;
      });
      Rn(this);
    }
    get lengthCalculator() {
      return this[tn];
    }
    get length() {
      return this[_t];
    }
    get itemCount() {
      return this[xe].length;
    }
    rforEach(e, t) {
      t = t || this;
      for (let r = this[xe].tail; r !== null; ) {
        let i = r.prev;
        Ia(this, e, r, t), r = i;
      }
    }
    forEach(e, t) {
      t = t || this;
      for (let r = this[xe].head; r !== null; ) {
        let i = r.next;
        Ia(this, e, r, t), r = i;
      }
    }
    keys() {
      return this[xe].toArray().map((e) => e.key);
    }
    values() {
      return this[xe].toArray().map((e) => e.value);
    }
    reset() {
      if (this[gt] && this[xe] && this[xe].length) this[xe].forEach((e) => this[gt](e.key, e.value));
      this[ot] = /* @__PURE__ */ new Map(), this[xe] = new zp(), this[_t] = 0;
    }
    dump() {
      return this[xe].map((e) => Ar(this, e) ? false : { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) }).toArray().filter((e) => e);
    }
    dumpLru() {
      return this[xe];
    }
    set(e, t, r) {
      if (r = r || this[Mt], r && typeof r !== "number") throw TypeError("maxAge must be a number");
      let i = r ? Date.now() : 0, o = this[tn](t, e);
      if (this[ot].has(e)) {
        if (o > this[Ut]) return nn(this, this[ot].get(e)), false;
        let h = this[ot].get(e).value;
        if (this[gt]) {
          if (!this[Oa]) this[gt](e, h.value);
        }
        return h.now = i, h.maxAge = r, h.value = t, this[_t] += o - h.length, h.length = o, this.get(e), Rn(this), true;
      }
      let a = new Da(e, t, o, i, r);
      if (a.length > this[Ut]) {
        if (this[gt]) this[gt](e, t);
        return false;
      }
      return this[_t] += a.length, this[xe].unshift(a), this[ot].set(e, this[xe].head), Rn(this), true;
    }
    has(e) {
      if (!this[ot].has(e)) return false;
      let t = this[ot].get(e).value;
      return !Ar(this, t);
    }
    get(e) {
      return Js(this, e, true);
    }
    peek(e) {
      return Js(this, e, false);
    }
    pop() {
      let e = this[xe].tail;
      if (!e) return null;
      return nn(this, e), e.value;
    }
    del(e) {
      nn(this, this[ot].get(e));
    }
    load(e) {
      this.reset();
      let t = Date.now();
      for (let r = e.length - 1; r >= 0; r--) {
        let i = e[r], o = i.e || 0;
        if (o === 0) this.set(i.k, i.v);
        else {
          let a = o - t;
          if (a > 0) this.set(i.k, i.v, a);
        }
      }
    }
    prune() {
      this[ot].forEach((e, t) => Js(this, t, false));
    }
  }
  var Js = (e, t, r) => {
    let i = e[ot].get(t);
    if (i) {
      let o = i.value;
      if (Ar(e, o)) {
        if (nn(e, i), !e[xn]) return;
      } else if (r) {
        if (e[La]) i.value.now = Date.now();
        e[xe].unshiftNode(i);
      }
      return o.value;
    }
  }, Ar = (e, t) => {
    if (!t || !t.maxAge && !e[Mt]) return false;
    let r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : e[Mt] && r > e[Mt];
  }, Rn = (e) => {
    if (e[_t] > e[Ut]) for (let t = e[xe].tail; e[_t] > e[Ut] && t !== null; ) {
      let r = t.prev;
      nn(e, t), t = r;
    }
  }, nn = (e, t) => {
    if (t) {
      let r = t.value;
      if (e[gt]) e[gt](r.key, r.value);
      e[_t] -= r.length, e[ot].delete(r.key), e[xe].removeNode(t);
    }
  };
  class Da {
    constructor(e, t, r, i, o) {
      this.key = e, this.value = t, this.length = r, this.now = i, this.maxAge = o || 0;
    }
  }
  var Ia = (e, t, r, i) => {
    let o = r.value;
    if (Ar(e, o)) {
      if (nn(e, r), !e[xn]) o = void 0;
    }
    if (o) t.call(i, o.value, o.key, e);
  };
  Na.exports = $a;
});
var Ua = (0, import_chunk_w1d7ygsk.V)(function(iy, Jp) {
  Jp.exports = { name: "openid-client", version: "5.7.1", description: "OpenID Connect Relying Party (RP, Client) implementation for Node.js runtime, supports passportjs", keywords: ["auth", "authentication", "basic", "certified", "client", "connect", "dynamic", "electron", "hybrid", "identity", "implicit", "oauth", "oauth2", "oidc", "openid", "passport", "relying party", "strategy"], homepage: "https://github.com/panva/openid-client", repository: "panva/openid-client", funding: { url: "https://github.com/sponsors/panva" }, license: "MIT", author: "Filip Skokan <panva.ip@gmail.com>", exports: { types: "./types/index.d.ts", import: "./lib/index.mjs", require: "./lib/index.js" }, main: "./lib/index.js", types: "./types/index.d.ts", files: ["lib", "types/index.d.ts"], scripts: { format: "npx prettier --loglevel silent --write ./lib ./test ./certification ./types", test: "mocha test/**/*.test.js" }, dependencies: { jose: "^4.15.9", "lru-cache": "^6.0.0", "object-hash": "^2.2.0", "oidc-token-hash": "^5.0.3" }, devDependencies: { "@types/node": "^16.18.106", "@types/passport": "^1.0.16", base64url: "^3.0.1", chai: "^4.5.0", mocha: "^10.7.3", nock: "^13.5.5", prettier: "^2.8.8", "readable-mock-req": "^0.2.2", sinon: "^9.2.4", timekeeper: "^2.3.1" }, "standard-version": { scripts: { postchangelog: "sed -i '' -e 's/### \\[/## [/g' CHANGELOG.md" }, types: [{ type: "feat", section: "Features" }, { type: "fix", section: "Fixes" }, { type: "chore", hidden: true }, { type: "docs", hidden: true }, { type: "style", hidden: true }, { type: "refactor", section: "Refactor", hidden: false }, { type: "perf", section: "Performance", hidden: false }, { type: "test", hidden: true }] } };
});
var Rr = (0, import_chunk_w1d7ygsk.V)(function(ay, Ma) {
  var Yp = Symbol(), Vp = Symbol();
  Ma.exports = { CLOCK_TOLERANCE: Vp, HTTP_OPTIONS: Yp };
});
var sn = (0, import_chunk_w1d7ygsk.V)(function(cy, Vs) {
  var Zp = (0, import_chunk_w1d7ygsk.ft)("assert"), Ha = (0, import_chunk_w1d7ygsk.ft)("querystring"), Ga = (0, import_chunk_w1d7ygsk.ft)("http"), Fa = (0, import_chunk_w1d7ygsk.ft)("https"), { once: ja } = (0, import_chunk_w1d7ygsk.ft)("events"), { URL: Qp } = (0, import_chunk_w1d7ygsk.ft)("url"), ef = Tr(), rn = Ua(), { RPError: tf } = lt(), qa = br(), { deep: Ys } = Gs(), { HTTP_OPTIONS: nf } = Rr(), Cr, rf = /^[\x21\x23-\x5B\x5D-\x7E]+$/, za = ["agent", "ca", "cert", "crl", "headers", "key", "lookup", "passphrase", "pfx", "timeout"], Ja = (e, t) => {
    Cr = Ys({}, e.length ? qa(t, ...e) : t, Cr);
  };
  Ja([], { headers: { "User-Agent": `${rn.name}/${rn.version} (${rn.homepage})`, "Accept-Encoding": "identity" }, timeout: 3500 });
  function xr(e, t, r) {
    if (r) e.removeHeader("content-type"), e.setHeader("content-type", r);
    if (t) e.removeHeader("content-length"), e.setHeader("content-length", Buffer.byteLength(t)), e.write(t);
    e.end();
  }
  var Ba = new ef({ max: 100 });
  Vs.exports = async function(t, { accessToken: r, mTLS: i = false, DPoP: o } = {}) {
    let a;
    try {
      a = new Qp(t.url), delete t.url, Zp(/^(https?:)$/.test(a.protocol));
    } catch (E) {
      throw TypeError("only valid absolute URLs can be requested");
    }
    let l = this[nf], h = t, u = `${a.origin}${a.pathname}`;
    if (o && "dpopProof" in this) h.headers = h.headers || {}, h.headers.DPoP = await this.dpopProof({ htu: `${a.origin}${a.pathname}`, htm: t.method || "GET", nonce: Ba.get(u) }, o, r);
    let f;
    if (l) f = qa(l.call(this, a, Ys({}, h, Cr)), ...za);
    if (h = Ys({}, f, h, Cr), i && !h.pfx && !(h.key && h.cert)) throw TypeError("mutual-TLS certificate and key not set");
    if (h.searchParams) for (let [E, S] of Object.entries(h.searchParams)) a.searchParams.delete(E), a.searchParams.set(E, S);
    let m, b, g, k;
    ({ form: b, responseType: m, json: g, body: k, ...h } = h);
    for (let [E, S] of Object.entries(h.headers || {})) if (S === void 0) delete h.headers[E];
    let y, v = (a.protocol === "https:" ? Fa.request : Ga.request)(a.href, h);
    return (async () => {
      if (g) xr(v, JSON.stringify(g), "application/json");
      else if (b) xr(v, Ha.stringify(b), "application/x-www-form-urlencoded");
      else if (k) xr(v, k);
      else xr(v);
      if ([y] = await Promise.race([ja(v, "response"), ja(v, "timeout")]), !y) throw v.destroy(), new tf(`outgoing request timed out after ${h.timeout}ms`);
      let E = [];
      for await (let S of y) E.push(S);
      if (E.length) switch (m) {
        case "json": {
          Object.defineProperty(y, "body", { get() {
            let S = Buffer.concat(E);
            try {
              S = JSON.parse(S);
            } catch (O) {
              throw Object.defineProperty(O, "response", { value: y }), O;
            } finally {
              Object.defineProperty(y, "body", { value: S, configurable: true });
            }
            return S;
          }, configurable: true });
          break;
        }
        case void 0:
        case "buffer": {
          Object.defineProperty(y, "body", { get() {
            let S = Buffer.concat(E);
            return Object.defineProperty(y, "body", { value: S, configurable: true }), S;
          }, configurable: true });
          break;
        }
        default:
          throw TypeError("unsupported responseType request option");
      }
      return y;
    })().catch((E) => {
      if (y) Object.defineProperty(E, "response", { value: y });
      throw E;
    }).finally(() => {
      let E = y && y.headers["dpop-nonce"];
      if (E && rf.test(E)) Ba.set(u, E);
    });
  };
  Vs.exports.setDefaults = Ja.bind(void 0, za);
});
var Pr = (0, import_chunk_w1d7ygsk.V)(function(sf, Ya) {
  sf.keystores = /* @__PURE__ */ new WeakMap();
});
var Cn = (0, import_chunk_w1d7ygsk.V)(function(dy, Va) {
  Va.exports = globalThis.structuredClone || ((e) => JSON.parse(JSON.stringify(e)));
});
var Zs = (0, import_chunk_w1d7ygsk.V)(function(ly, ec) {
  var an = require("/$bunfs/root/chunk-eh5h2rgy.js"), af = Cn(), Xa = Sn(), Za = Symbol(), Qa = (e, { alg: t, use: r }) => {
    let i = 0;
    if (t && e.alg) i++;
    if (r && e.use) i++;
    return i;
  };
  function lf(e) {
    switch (typeof e === "string" && e.slice(0, 2)) {
      case "RS":
      case "PS":
        return "RSA";
      case "ES":
        return "EC";
      case "Ed":
        return "OKP";
      default:
        return;
    }
  }
  function uf(e, t, r, i) {
    if (t) return /* @__PURE__ */ new Set([t]);
    switch (r) {
      case "EC": {
        let o = [];
        if (e === "enc" || e === void 0) o = o.concat(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"]);
        if (e === "sig" || e === void 0) switch (i) {
          case "P-256":
          case "P-384":
            o = o.concat([`ES${i.slice(-3)}`]);
            break;
          case "P-521":
            o = o.concat(["ES512"]);
            break;
          case "secp256k1":
            if (an.cryptoRuntime === "node:crypto") o = o.concat(["ES256K"]);
            break;
        }
        return new Set(o);
      }
      case "OKP":
        return /* @__PURE__ */ new Set(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"]);
      case "RSA": {
        let o = [];
        if (e === "enc" || e === void 0) {
          if (o = o.concat(["RSA-OAEP", "RSA-OAEP-256", "RSA-OAEP-384", "RSA-OAEP-512"]), an.cryptoRuntime === "node:crypto") o = o.concat(["RSA1_5"]);
        }
        if (e === "sig" || e === void 0) o = o.concat(["PS256", "PS384", "PS512", "RS256", "RS384", "RS512"]);
        return new Set(o);
      }
      default:
        throw Error("unreachable");
    }
  }
  ec.exports = class {
    #e;
    constructor(t, r) {
      if (t !== Za) throw Error("invalid constructor call");
      this.#e = r;
    }
    toJWKS() {
      return { keys: this.map(({ jwk: { d: t, p: r, q: i, dp: o, dq: a, qi: l, ...h } }) => h) };
    }
    all({ alg: t, kid: r, use: i } = {}) {
      if (!i || !t) throw Error();
      let o = lf(t), a = { alg: t, use: i };
      return this.filter((l) => {
        let h = true;
        if (h && o !== void 0 && l.jwk.kty !== o) h = false;
        if (h && r !== void 0 && l.jwk.kid !== r) h = false;
        if (h && i !== void 0 && l.jwk.use !== void 0 && l.jwk.use !== i) h = false;
        if (h && l.jwk.alg && l.jwk.alg !== t) h = false;
        else if (!l.algorithms.has(t)) h = false;
        return h;
      }).sort((l, h) => Qa(h, a) - Qa(l, a));
    }
    get(...t) {
      return this.all(...t)[0];
    }
    static async fromJWKS(t, { onlyPublic: r = false, onlyPrivate: i = false } = {}) {
      if (!Xa(t) || !Array.isArray(t.keys) || t.keys.some((a) => !Xa(a) || !("kty" in a))) throw TypeError("jwks must be a JSON Web Key Set formatted object");
      let o = [];
      for (let a of t.keys) {
        a = af(a);
        let { kty: l, kid: h, crv: u } = a, { alg: f, use: m } = a;
        if (typeof l !== "string" || !l) continue;
        if (m !== void 0 && m !== "sig" && m !== "enc") continue;
        if (typeof f !== "string" && f !== void 0) continue;
        if (typeof h !== "string" && h !== void 0) continue;
        if (l === "EC" && m === "sig") switch (u) {
          case "P-256":
            f = "ES256";
            break;
          case "P-384":
            f = "ES384";
            break;
          case "P-521":
            f = "ES512";
            break;
          default:
            break;
        }
        if (u === "secp256k1") m = "sig", f = "ES256K";
        if (l === "OKP") switch (u) {
          case "Ed25519":
          case "Ed448":
            m = "sig", f = "EdDSA";
            break;
          case "X25519":
          case "X448":
            m = "enc";
            break;
          default:
            break;
        }
        if (f && !m) switch (true) {
          case f.startsWith("ECDH"):
            m = "enc";
            break;
          case f.startsWith("RSA"):
            m = "enc";
            break;
          default:
            break;
        }
        if (i && (a.kty === "oct" || !a.d)) throw Error("jwks must only contain private keys");
        if (r && (a.d || a.k)) continue;
        o.push({ jwk: { ...a, alg: f, use: m }, async keyObject(b) {
          if (this[b]) return this[b];
          let g = await an.importJWK(this.jwk, b);
          return this[b] = g, g;
        }, get algorithms() {
          return Object.defineProperty(this, "algorithms", { value: uf(this.jwk.use, this.jwk.alg, this.jwk.kty, this.jwk.crv), enumerable: true, configurable: false }), this.algorithms;
        } });
      }
      return new this(Za, o);
    }
    filter(...t) {
      return this.#e.filter(...t);
    }
    find(...t) {
      return this.#e.find(...t);
    }
    every(...t) {
      return this.#e.every(...t);
    }
    some(...t) {
      return this.#e.some(...t);
    }
    map(...t) {
      return this.#e.map(...t);
    }
    forEach(...t) {
      return this.#e.forEach(...t);
    }
    reduce(...t) {
      return this.#e.reduce(...t);
    }
    sort(...t) {
      return this.#e.sort(...t);
    }
    *[Symbol.iterator]() {
      for (let t of this.#e) yield t;
    }
  };
});
var rc = (0, import_chunk_w1d7ygsk.V)(function(uy, nc) {
  var Qs = Sn();
  function tc(e, ...t) {
    for (let r of t) {
      if (!Qs(r)) continue;
      for (let [i, o] of Object.entries(r)) {
        if (i === "__proto__" || i === "constructor") continue;
        if (Qs(e[i]) && Qs(o)) e[i] = tc(e[i], o);
        else if (typeof o < "u") e[i] = o;
      }
    }
    return e;
  }
  nc.exports = tc;
});
var to = (0, import_chunk_w1d7ygsk.V)(function(py, ac) {
  var Or = require("/$bunfs/root/chunk-eh5h2rgy.js"), { RPError: eo } = lt(), { assertIssuerConfiguration: pf } = wr(), { random: hf } = Tn(), mf = An(), oc = sn(), { keystores: gf } = Pr(), _f = rc(), sc = (e) => encodeURIComponent(e).replace(/%20/g, "+");
  async function yf(e, t) {
    let r = this[`${e}_endpoint_auth_signing_alg`];
    if (!r) pf(this.issuer, `${e}_endpoint_auth_signing_alg_values_supported`);
    if (this[`${e}_endpoint_auth_method`] === "client_secret_jwt") {
      if (!r) {
        let a = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
        r = Array.isArray(a) && a.find((l) => /^HS(?:256|384|512)/.test(l));
      }
      if (!r) throw new eo(`failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`);
      return new Or.CompactSign(Buffer.from(JSON.stringify(t))).setProtectedHeader({ alg: r }).sign(this.secretForAlg(r));
    }
    let i = await gf.get(this);
    if (!i) throw TypeError("no client jwks provided for signing a client assertion with");
    if (!r) {
      let a = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
      r = Array.isArray(a) && a.find((l) => i.get({ alg: l, use: "sig" }));
    }
    if (!r) throw new eo(`failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`);
    let o = i.get({ alg: r, use: "sig" });
    if (!o) throw new eo(`no key found in client jwks to sign a client assertion with using alg ${r}`);
    return new Or.CompactSign(Buffer.from(JSON.stringify(t))).setProtectedHeader({ alg: r, kid: o.jwk && o.jwk.kid }).sign(await o.keyObject(r));
  }
  async function ic(e, { clientAssertionPayload: t } = {}) {
    switch (this[`${e}_endpoint_auth_method`]) {
      case "self_signed_tls_client_auth":
      case "tls_client_auth":
      case "none":
        return { form: { client_id: this.client_id } };
      case "client_secret_post":
        if (typeof this.client_secret !== "string") throw TypeError("client_secret_post client authentication method requires a client_secret");
        return { form: { client_id: this.client_id, client_secret: this.client_secret } };
      case "private_key_jwt":
      case "client_secret_jwt": {
        let i = mf(), o = await yf.call(this, e, { iat: i, exp: i + 60, jti: hf(), iss: this.client_id, sub: this.client_id, aud: this.issuer.issuer, ...t });
        return { form: { client_id: this.client_id, client_assertion: o, client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" } };
      }
      case "client_secret_basic": {
        if (typeof this.client_secret !== "string") throw TypeError("client_secret_basic client authentication method requires a client_secret");
        let i = `${sc(this.client_id)}:${sc(this.client_secret)}`;
        return { headers: { Authorization: `Basic ${Buffer.from(i).toString("base64")}` } };
      }
      default:
        throw TypeError(`missing, or unsupported, ${e}_endpoint_auth_method`);
    }
  }
  function wf() {
    let { length: e, 0: t } = this.response_types;
    if (e === 1) return t;
    return;
  }
  function bf() {
    let { length: e, 0: t } = this.redirect_uris || [];
    if (e === 1) return t;
    return;
  }
  async function kf(e, t, { clientAssertionPayload: r, endpointAuthMethod: i = e, DPoP: o } = {}) {
    let a = await ic.call(this, i, { clientAssertionPayload: r }), l = _f(t, a), h = this[`${i}_endpoint_auth_method`].includes("tls_client_auth") || e === "token" && this.tls_client_certificate_bound_access_tokens, u;
    if (h && this.issuer.mtls_endpoint_aliases) u = this.issuer.mtls_endpoint_aliases[`${e}_endpoint`];
    if (u = u || this.issuer[`${e}_endpoint`], "form" in l) {
      for (let [f, m] of Object.entries(l.form)) if (typeof m > "u") delete l.form[f];
    }
    return oc.call(this, { ...l, method: "POST", url: u, headers: { ...e !== "revocation" ? { Accept: "application/json" } : void 0, ...l.headers } }, { mTLS: h, DPoP: o });
  }
  ac.exports = { resolveResponseType: wf, resolveRedirectUri: bf, authFor: ic, authenticatedPost: kf };
});
var fc = (0, import_chunk_w1d7ygsk.V)(function(jt, pc) {
  var no = (0, import_chunk_w1d7ygsk.ft)("crypto");
  jt = pc.exports = Pn;
  function Pn(e, t) {
    return t = lc(e, t), Ef(e, t);
  }
  jt.sha1 = function(e) {
    return Pn(e);
  };
  jt.keys = function(e) {
    return Pn(e, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
  };
  jt.MD5 = function(e) {
    return Pn(e, { algorithm: "md5", encoding: "hex" });
  };
  jt.keysMD5 = function(e) {
    return Pn(e, { algorithm: "md5", encoding: "hex", excludeValues: true });
  };
  var cn = no.getHashes ? no.getHashes().slice() : ["sha1", "md5"];
  cn.push("passthrough");
  var cc = ["buffer", "hex", "binary", "base64"];
  function lc(e, t) {
    t = t || {};
    var r = {};
    if (r.algorithm = t.algorithm || "sha1", r.encoding = t.encoding || "hex", r.excludeValues = t.excludeValues ? true : false, r.algorithm = r.algorithm.toLowerCase(), r.encoding = r.encoding.toLowerCase(), r.ignoreUnknown = t.ignoreUnknown !== true ? false : true, r.respectType = t.respectType === false ? false : true, r.respectFunctionNames = t.respectFunctionNames === false ? false : true, r.respectFunctionProperties = t.respectFunctionProperties === false ? false : true, r.unorderedArrays = t.unorderedArrays !== true ? false : true, r.unorderedSets = t.unorderedSets === false ? false : true, r.unorderedObjects = t.unorderedObjects === false ? false : true, r.replacer = t.replacer || void 0, r.excludeKeys = t.excludeKeys || void 0, typeof e > "u") throw Error("Object argument required.");
    for (var i = 0; i < cn.length; ++i) if (cn[i].toLowerCase() === r.algorithm.toLowerCase()) r.algorithm = cn[i];
    if (cn.indexOf(r.algorithm) === -1) throw Error('Algorithm "' + r.algorithm + '"  not supported. supported values: ' + cn.join(", "));
    if (cc.indexOf(r.encoding) === -1 && r.algorithm !== "passthrough") throw Error('Encoding "' + r.encoding + '"  not supported. supported values: ' + cc.join(", "));
    return r;
  }
  function dc(e) {
    if (typeof e !== "function") return false;
    var t = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
    return t.exec(Function.prototype.toString.call(e)) != null;
  }
  function Ef(e, t) {
    var r;
    if (t.algorithm !== "passthrough") r = no.createHash(t.algorithm);
    else r = new uc();
    if (typeof r.write > "u") r.write = r.update, r.end = r.update;
    var i = ro(t, r);
    if (i.dispatch(e), !r.update) r.end("");
    if (r.digest) return r.digest(t.encoding === "buffer" ? void 0 : t.encoding);
    var o = r.read();
    if (t.encoding === "buffer") return o;
    return o.toString(t.encoding);
  }
  jt.writeToStream = function(e, t, r) {
    if (typeof r > "u") r = t, t = {};
    return t = lc(e, t), ro(t, r).dispatch(e);
  };
  function ro(e, t, r) {
    r = r || [];
    var i = function(o) {
      if (t.update) return t.update(o, "utf8");
      else return t.write(o, "utf8");
    };
    return { dispatch: function(o) {
      if (e.replacer) o = e.replacer(o);
      var a = typeof o;
      if (o === null) a = "null";
      return this["_" + a](o);
    }, _object: function(o) {
      var a = /\[object (.*)\]/i, l = Object.prototype.toString.call(o), h = a.exec(l);
      if (!h) h = "unknown:[" + l + "]";
      else h = h[1];
      h = h.toLowerCase();
      var u = null;
      if ((u = r.indexOf(o)) >= 0) return this.dispatch("[CIRCULAR:" + u + "]");
      else r.push(o);
      if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(o)) return i("buffer:"), i(o);
      if (h !== "object" && h !== "function" && h !== "asyncfunction") if (this["_" + h]) this["_" + h](o);
      else if (e.ignoreUnknown) return i("[" + h + "]");
      else throw Error('Unknown object type "' + h + '"');
      else {
        var f = Object.keys(o);
        if (e.unorderedObjects) f = f.sort();
        if (e.respectType !== false && !dc(o)) f.splice(0, 0, "prototype", "__proto__", "constructor");
        if (e.excludeKeys) f = f.filter(function(b) {
          return !e.excludeKeys(b);
        });
        i("object:" + f.length + ":");
        var m = this;
        return f.forEach(function(b) {
          if (m.dispatch(b), i(":"), !e.excludeValues) m.dispatch(o[b]);
          i(",");
        });
      }
    }, _array: function(o, a) {
      a = typeof a < "u" ? a : e.unorderedArrays !== false;
      var l = this;
      if (i("array:" + o.length + ":"), !a || o.length <= 1) return o.forEach(function(f) {
        return l.dispatch(f);
      });
      var h = [], u = o.map(function(f) {
        var m = new uc(), b = r.slice(), g = ro(e, m, b);
        return g.dispatch(f), h = h.concat(b.slice(r.length)), m.read().toString();
      });
      return r = r.concat(h), u.sort(), this._array(u, false);
    }, _date: function(o) {
      return i("date:" + o.toJSON());
    }, _symbol: function(o) {
      return i("symbol:" + o.toString());
    }, _error: function(o) {
      return i("error:" + o.toString());
    }, _boolean: function(o) {
      return i("bool:" + o.toString());
    }, _string: function(o) {
      i("string:" + o.length + ":"), i(o.toString());
    }, _function: function(o) {
      if (i("fn:"), dc(o)) this.dispatch("[native]");
      else this.dispatch(o.toString());
      if (e.respectFunctionNames !== false) this.dispatch("function-name:" + String(o.name));
      if (e.respectFunctionProperties) this._object(o);
    }, _number: function(o) {
      return i("number:" + o.toString());
    }, _xml: function(o) {
      return i("xml:" + o.toString());
    }, _null: function() {
      return i("Null");
    }, _undefined: function() {
      return i("Undefined");
    }, _regexp: function(o) {
      return i("regex:" + o.toString());
    }, _uint8array: function(o) {
      return i("uint8array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _uint8clampedarray: function(o) {
      return i("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(o));
    }, _int8array: function(o) {
      return i("uint8array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _uint16array: function(o) {
      return i("uint16array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _int16array: function(o) {
      return i("uint16array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _uint32array: function(o) {
      return i("uint32array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _int32array: function(o) {
      return i("uint32array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _float32array: function(o) {
      return i("float32array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _float64array: function(o) {
      return i("float64array:"), this.dispatch(Array.prototype.slice.call(o));
    }, _arraybuffer: function(o) {
      return i("arraybuffer:"), this.dispatch(new Uint8Array(o));
    }, _url: function(o) {
      return i("url:" + o.toString(), "utf8");
    }, _map: function(o) {
      i("map:");
      var a = Array.from(o);
      return this._array(a, e.unorderedSets !== false);
    }, _set: function(o) {
      i("set:");
      var a = Array.from(o);
      return this._array(a, e.unorderedSets !== false);
    }, _file: function(o) {
      return i("file:"), this.dispatch([o.name, o.size, o.type, o.lastModfied]);
    }, _blob: function() {
      if (e.ignoreUnknown) return i("[blob]");
      throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
    }, _domwindow: function() {
      return i("domwindow");
    }, _bigint: function(o) {
      return i("bigint:" + o.toString());
    }, _process: function() {
      return i("process");
    }, _timer: function() {
      return i("timer");
    }, _pipe: function() {
      return i("pipe");
    }, _tcp: function() {
      return i("tcp");
    }, _udp: function() {
      return i("udp");
    }, _tty: function() {
      return i("tty");
    }, _statwatcher: function() {
      return i("statwatcher");
    }, _securecontext: function() {
      return i("securecontext");
    }, _connection: function() {
      return i("connection");
    }, _zlib: function() {
      return i("zlib");
    }, _context: function() {
      return i("context");
    }, _nodescript: function() {
      return i("nodescript");
    }, _httpparser: function() {
      return i("httpparser");
    }, _dataview: function() {
      return i("dataview");
    }, _signal: function() {
      return i("signal");
    }, _fsevent: function() {
      return i("fsevent");
    }, _tlswrap: function() {
      return i("tlswrap");
    } };
  }
  function uc() {
    return { buf: "", write: function(e) {
      this.buf += e;
    }, end: function(e) {
      this.buf += e;
    }, read: function() {
      return this.buf;
    } };
  }
});
var io = (0, import_chunk_w1d7ygsk.V)(function(Cf, oo) {
  var Sf = fc(), Af = Tr(), { RPError: hc } = lt(), { assertIssuerConfiguration: Tf } = wr(), gc = Zs(), { keystores: mc } = Pr(), Rf = vr(), _c = sn(), On = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), yc = (e) => {
    if (!so.has(e)) so.set(e, new Af({ max: 100 }));
    return so.get(e);
  };
  async function wc(e = false) {
    Tf(this, "jwks_uri");
    let t = mc.get(this), r = yc(this);
    if (e || !t) {
      if (On.has(this)) return On.get(this);
      return r.reset(), On.set(this, (async () => {
        let i = await _c.call(this, { method: "GET", responseType: "json", url: this.jwks_uri, headers: { Accept: "application/json, application/jwk-set+json" } }).finally(() => {
          On.delete(this);
        }), o = Rf(i), a = gc.fromJWKS(o, { onlyPublic: true });
        return r.set("throttle", true, 6e4), mc.set(this, a), a;
      })()), On.get(this);
    }
    return t;
  }
  async function xf({ kid: e, kty: t, alg: r, use: i }, { allowMulti: o = false } = {}) {
    let a = yc(this), l = { kid: e, kty: t, alg: r, use: i }, h = Sf(l, { algorithm: "sha256", ignoreUnknown: true, unorderedArrays: true, unorderedSets: true, respectType: false }), u = a.get(h) || a.get("throttle"), f = await wc.call(this, !u), m = f.all(l);
    if (delete l.use, m.length === 0) throw new hc({ printf: ["no valid key found in issuer's jwks_uri for key parameters %j", l], jwks: f });
    if (!o && m.length > 1 && !e) throw new hc({ printf: ["multiple matching keys found in issuer's jwks_uri for key parameters %j, kid must be provided in this case", l], jwks: f });
    return a.set(h, true), m;
  }
  Cf.queryKeyStore = xf;
  Cf.keystore = wc;
});
var Ac = (0, import_chunk_w1d7ygsk.V)(function(fy, Sc) {
  var { inspect: bc } = (0, import_chunk_w1d7ygsk.ft)("util"), { RPError: Lr, OPError: If } = lt(), kc = An();
  class Ec {
    #e;
    #t;
    #r;
    #s;
    #i;
    #a;
    #o;
    #c;
    #n;
    constructor({ client: e, exchangeBody: t, clientAssertionPayload: r, response: i, maxAge: o, DPoP: a }) {
      if (["verification_uri", "user_code", "device_code"].forEach((l) => {
        if (typeof i[l] !== "string" || !i[l]) throw new Lr(`expected ${l} string to be returned by Device Authorization Response, got %j`, i[l]);
      }), !Number.isSafeInteger(i.expires_in)) throw new Lr("expected expires_in number to be returned by Device Authorization Response, got %j", i.expires_in);
      this.#a = kc() + i.expires_in, this.#t = e, this.#s = a, this.#c = o, this.#i = t, this.#r = r, this.#n = i, this.#o = i.interval * 1e3 || 5e3;
    }
    abort() {
      this.#e = true;
    }
    async poll({ signal: e } = {}) {
      if (e && e.aborted || this.#e) throw new Lr("polling aborted");
      if (this.expired()) throw new Lr("the device code %j has expired and the device authorization session has concluded", this.device_code);
      await new Promise((r) => setTimeout(r, this.#o));
      let t;
      try {
        t = await this.#t.grant({ ...this.#i, grant_type: "urn:ietf:params:oauth:grant-type:device_code", device_code: this.device_code }, { clientAssertionPayload: this.#r, DPoP: this.#s });
      } catch (r) {
        switch (r instanceof If && r.error) {
          case "slow_down":
            this.#o += 5e3;
          case "authorization_pending":
            return this.poll({ signal: e });
          default:
            throw r;
        }
      }
      if ("id_token" in t) await this.#t.decryptIdToken(t), await this.#t.validateIdToken(t, void 0, "token", this.#c);
      return t;
    }
    get device_code() {
      return this.#n.device_code;
    }
    get user_code() {
      return this.#n.user_code;
    }
    get verification_uri() {
      return this.#n.verification_uri;
    }
    get verification_uri_complete() {
      return this.#n.verification_uri_complete;
    }
    get expires_in() {
      return Math.max.apply(null, [this.#a - kc(), 0]);
    }
    expired() {
      return this.expires_in === 0;
    }
    [bc.custom]() {
      return `${this.constructor.name} ${bc(this.#n, { depth: 1 / 0, colors: process.stdout.isTTY, compact: false, sorted: true })}`;
    }
  }
  Sc.exports = Ec;
});
var ko = (0, import_chunk_w1d7ygsk.V)(function(hy, bo) {
  var { inspect: Tc } = (0, import_chunk_w1d7ygsk.ft)("util"), jc = (0, import_chunk_w1d7ygsk.ft)("http"), dn = (0, import_chunk_w1d7ygsk.ft)("crypto"), { strict: ao } = (0, import_chunk_w1d7ygsk.ft)("assert"), pn = (0, import_chunk_w1d7ygsk.ft)("querystring"), fn = (0, import_chunk_w1d7ygsk.ft)("url"), { URL: Rc, URLSearchParams: xc } = (0, import_chunk_w1d7ygsk.ft)("url"), ge = require("/$bunfs/root/chunk-eh5h2rgy.js"), ln = ca(), Bc = pa(), Lf = ha(), xt = En(), Cc = Gs(), $f = Fs(), { assertSigningAlgValuesSupport: Pc, assertIssuerConfiguration: Ze } = wr(), go = br(), Rt = Sn(), At = vr(), je = Ks(), { OPError: co, RPError: G } = lt(), lo = An(), { random: Oc } = Tn(), un = sn(), { CLOCK_TOLERANCE: it } = Rr(), { keystores: uo } = Pr(), Hc = Zs(), Ic = Cn(), { authenticatedPost: In, resolveResponseType: Df, resolveRedirectUri: Nf } = to(), { queryKeyStore: Lc } = io(), Uf = Ac(), [$c, Mf] = process.version.slice(1).split(".").map((e) => parseInt(e, 10)), jf = $c >= 17 || $c === 16 && Mf >= 9, po = Symbol(), Dc = Symbol(), Nc = Symbol();
  function Tt(e) {
    return go(e, "access_token", "code", "error_description", "error_uri", "error", "expires_in", "id_token", "iss", "response", "session_state", "state", "token_type");
  }
  function fo(e, t = "Bearer") {
    return `${t} ${e}`;
  }
  function ho(e) {
    let t = fn.parse(e);
    if (!t.search) return {};
    return pn.parse(t.search.substring(1));
  }
  function Bf(e, t, r) {
    if (e[r] === void 0) throw new G({ message: `missing required JWT property ${r}`, jwt: t });
  }
  function $r(e) {
    let t = { client_id: this.client_id, scope: "openid", response_type: Df.call(this), redirect_uri: Nf.call(this), ...e };
    return Object.entries(t).forEach(([r, i]) => {
      if (i === null || i === void 0) delete t[r];
      else if (r === "claims" && typeof i === "object") t[r] = JSON.stringify(i);
      else if (r === "resource" && Array.isArray(i)) t[r] = i;
      else if (typeof i !== "string") t[r] = String(i);
    }), t;
  }
  function Uc(e) {
    if (!Rt(e) || !Array.isArray(e.keys) || e.keys.some((t) => !Rt(t) || !("kty" in t))) throw TypeError("jwks must be a JSON Web Key Set formatted object");
    return Hc.fromJWKS(e, { onlyPrivate: true });
  }
  function Wf(e, t) {
    try {
      let r = e.issuer.token_endpoint_auth_methods_supported;
      if (!r.includes(t.token_endpoint_auth_method)) {
        if (r.includes("client_secret_post")) t.token_endpoint_auth_method = "client_secret_post";
      }
    } catch (r) {
    }
  }
  function Hf(e, t, r) {
    if (!t.token_endpoint_auth_method) Wf(e, r);
    if (t.redirect_uri) {
      if (t.redirect_uris) throw TypeError("provide a redirect_uri or redirect_uris, not both");
      r.redirect_uris = [t.redirect_uri], delete r.redirect_uri;
    }
    if (t.response_type) {
      if (t.response_types) throw TypeError("provide a response_type or response_types, not both");
      r.response_types = [t.response_type], delete r.response_type;
    }
  }
  function Gf(e, t, r) {
    if (!t[`${e}_endpoint`]) return;
    let { token_endpoint_auth_method: i, token_endpoint_auth_signing_alg: o } = r, a = `${e}_endpoint_auth_method`, l = `${e}_endpoint_auth_signing_alg`;
    if (r[a] === void 0 && r[l] === void 0) {
      if (i !== void 0) r[a] = i;
      if (o !== void 0) r[l] = o;
    }
  }
  class wo {
    #e;
    #t;
    #r;
    #s;
    constructor(e, t, r = {}, i, o) {
      if (this.#e = /* @__PURE__ */ new Map(), this.#t = e, this.#r = t, typeof r.client_id !== "string" || !r.client_id) throw TypeError("client_id is required");
      let a = { grant_types: ["authorization_code"], id_token_signed_response_alg: "RS256", authorization_signed_response_alg: "RS256", response_types: ["code"], token_endpoint_auth_method: "client_secret_basic", ...this.fapi1() ? { grant_types: ["authorization_code", "implicit"], id_token_signed_response_alg: "PS256", authorization_signed_response_alg: "PS256", response_types: ["code id_token"], tls_client_certificate_bound_access_tokens: true, token_endpoint_auth_method: void 0 } : void 0, ...this.fapi2() ? { id_token_signed_response_alg: "PS256", authorization_signed_response_alg: "PS256", token_endpoint_auth_method: void 0 } : void 0, ...r };
      if (this.fapi()) switch (a.token_endpoint_auth_method) {
        case "self_signed_tls_client_auth":
        case "tls_client_auth":
          break;
        case "private_key_jwt":
          if (!i) throw TypeError("jwks is required");
          break;
        case void 0:
          throw TypeError("token_endpoint_auth_method is required");
        default:
          throw TypeError("invalid or unsupported token_endpoint_auth_method");
      }
      if (this.fapi2()) {
        if (a.tls_client_certificate_bound_access_tokens && a.dpop_bound_access_tokens) throw TypeError("either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true");
        if (!a.tls_client_certificate_bound_access_tokens && !a.dpop_bound_access_tokens) throw TypeError("either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true");
      }
      if (Hf(this, r, a), Pc("token", this.issuer, a), ["introspection", "revocation"].forEach((l) => {
        Gf(l, this.issuer, a), Pc(l, this.issuer, a);
      }), Object.entries(a).forEach(([l, h]) => {
        if (this.#e.set(l, h), !this[l]) Object.defineProperty(this, l, { get() {
          return this.#e.get(l);
        }, enumerable: true });
      }), i !== void 0) {
        let l = Uc.call(this, i);
        uo.set(this, l);
      }
      if (o != null && o.additionalAuthorizedParties) this.#s = Ic(o.additionalAuthorizedParties);
      this[it] = 0;
    }
    authorizationUrl(e = {}) {
      if (!Rt(e)) throw TypeError("params must be a plain object");
      Ze(this.issuer, "authorization_endpoint");
      let t = new Rc(this.issuer.authorization_endpoint);
      for (let [r, i] of Object.entries($r.call(this, e))) if (Array.isArray(i)) {
        t.searchParams.delete(r);
        for (let o of i) t.searchParams.append(r, o);
      } else t.searchParams.set(r, i);
      return t.href.replace(/\+/g, "%20");
    }
    authorizationPost(e = {}) {
      if (!Rt(e)) throw TypeError("params must be a plain object");
      let t = $r.call(this, e), r = Object.keys(t).map((i) => `<input type="hidden" name="${i}" value="${t[i]}"/>`).join(`
`);
      return `<!DOCTYPE html>
<head>
<title>Requesting Authorization</title>
</head>
<body onload="javascript:document.forms[0].submit()">
<form method="post" action="${this.issuer.authorization_endpoint}">
  ${r}
</form>
</body>
</html>`;
    }
    endSessionUrl(e = {}) {
      Ze(this.issuer, "end_session_endpoint");
      let { 0: t, length: r } = this.post_logout_redirect_uris || [], { post_logout_redirect_uri: i = r === 1 ? t : void 0 } = e, o;
      if ({ id_token_hint: o, ...e } = e, o instanceof je) {
        if (!o.id_token) throw TypeError("id_token not present in TokenSet");
        o = o.id_token;
      }
      let a = fn.parse(this.issuer.end_session_endpoint), l = Cc(ho(this.issuer.end_session_endpoint), e, { post_logout_redirect_uri: i, client_id: this.client_id }, { id_token_hint: o });
      return Object.entries(l).forEach(([h, u]) => {
        if (u === null || u === void 0) delete l[h];
      }), a.search = null, a.query = l, fn.format(a);
    }
    callbackParams(e) {
      let t = e instanceof jc.IncomingMessage || e && e.method && e.url;
      if (typeof e !== "string" && !t) throw TypeError("#callbackParams only accepts string urls, http.IncomingMessage or a lookalike");
      if (t) switch (e.method) {
        case "GET":
          return Tt(ho(e.url));
        case "POST":
          if (e.body === void 0) throw TypeError("incoming message body missing, include a body parser prior to this method call");
          switch (typeof e.body) {
            case "object":
            case "string":
              if (Buffer.isBuffer(e.body)) return Tt(pn.parse(e.body.toString("utf-8")));
              if (typeof e.body === "string") return Tt(pn.parse(e.body));
              return Tt(e.body);
            default:
              throw TypeError("invalid IncomingMessage body object");
          }
        default:
          throw TypeError("invalid IncomingMessage method");
      }
      else return Tt(ho(e));
    }
    async callback(e, t, r = {}, { exchangeBody: i, clientAssertionPayload: o, DPoP: a } = {}) {
      let l = Tt(t);
      if (r.jarm && !("response" in t)) throw new G({ message: "expected a JARM response", checks: r, params: l });
      else if ("response" in t) {
        let u = await this.decryptJARM(l.response);
        l = await this.validateJARM(u);
      }
      if (this.default_max_age && !r.max_age) r.max_age = this.default_max_age;
      if (l.state && !r.state) throw TypeError("checks.state argument is missing");
      if (!l.state && r.state) throw new G({ message: "state missing from the response", checks: r, params: l });
      if (r.state !== l.state) throw new G({ printf: ["state mismatch, expected %s, got: %s", r.state, l.state], checks: r, params: l });
      if ("iss" in l) {
        if (Ze(this.issuer, "issuer"), l.iss !== this.issuer.issuer) throw new G({ printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, l.iss], params: l });
      } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in l) && !("response" in t)) throw new G({ message: "iss missing from the response", params: l });
      if (l.error) throw new co(l);
      let h = { code: ["code"], id_token: ["id_token"], token: ["access_token", "token_type"] };
      if (r.response_type) {
        for (let u of r.response_type.split(" ")) if (u === "none") {
          if (l.code || l.id_token || l.access_token) throw new G({ message: 'unexpected params encountered for "none" response', checks: r, params: l });
        } else for (let f of h[u]) if (!l[f]) throw new G({ message: `${f} missing from response`, checks: r, params: l });
      }
      if (l.id_token) {
        let u = new je(l);
        if (await this.decryptIdToken(u), await this.validateIdToken(u, r.nonce, "authorization", r.max_age, r.state), !l.code) return u;
      }
      if (l.code) {
        let u = await this.grant({ ...i, grant_type: "authorization_code", code: l.code, redirect_uri: e, code_verifier: r.code_verifier }, { clientAssertionPayload: o, DPoP: a });
        if (await this.decryptIdToken(u), await this.validateIdToken(u, r.nonce, "token", r.max_age), l.session_state) u.session_state = l.session_state;
        return u;
      }
      return new je(l);
    }
    async oauthCallback(e, t, r = {}, { exchangeBody: i, clientAssertionPayload: o, DPoP: a } = {}) {
      let l = Tt(t);
      if (r.jarm && !("response" in t)) throw new G({ message: "expected a JARM response", checks: r, params: l });
      else if ("response" in t) {
        let u = await this.decryptJARM(l.response);
        l = await this.validateJARM(u);
      }
      if (l.state && !r.state) throw TypeError("checks.state argument is missing");
      if (!l.state && r.state) throw new G({ message: "state missing from the response", checks: r, params: l });
      if (r.state !== l.state) throw new G({ printf: ["state mismatch, expected %s, got: %s", r.state, l.state], checks: r, params: l });
      if ("iss" in l) {
        if (Ze(this.issuer, "issuer"), l.iss !== this.issuer.issuer) throw new G({ printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, l.iss], params: l });
      } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in l) && !("response" in t)) throw new G({ message: "iss missing from the response", params: l });
      if (l.error) throw new co(l);
      if (typeof l.id_token === "string" && l.id_token.length) throw new G({ message: "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()", params: l });
      delete l.id_token;
      let h = { code: ["code"], token: ["access_token", "token_type"] };
      if (r.response_type) for (let u of r.response_type.split(" ")) {
        if (u === "none") {
          if (l.code || l.id_token || l.access_token) throw new G({ message: 'unexpected params encountered for "none" response', checks: r, params: l });
        }
        if (h[u]) {
          for (let f of h[u]) if (!l[f]) throw new G({ message: `${f} missing from response`, checks: r, params: l });
        }
      }
      if (l.code) {
        let u = await this.grant({ ...i, grant_type: "authorization_code", code: l.code, redirect_uri: e, code_verifier: r.code_verifier }, { clientAssertionPayload: o, DPoP: a });
        if (typeof u.id_token === "string" && u.id_token.length) throw new G({ message: "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()", params: l });
        return delete u.id_token, u;
      }
      return new je(l);
    }
    async decryptIdToken(e) {
      if (!this.id_token_encrypted_response_alg) return e;
      let t = e;
      if (t instanceof je) {
        if (!t.id_token) throw TypeError("id_token not present in TokenSet");
        t = t.id_token;
      }
      let r = this.id_token_encrypted_response_alg, i = this.id_token_encrypted_response_enc, o = await this.decryptJWE(t, r, i);
      if (e instanceof je) return e.id_token = o, e;
      return o;
    }
    async validateJWTUserinfo(e) {
      let t = this.userinfo_signed_response_alg;
      return this.validateJWT(e, t, []);
    }
    async decryptJARM(e) {
      if (!this.authorization_encrypted_response_alg) return e;
      let t = this.authorization_encrypted_response_alg, r = this.authorization_encrypted_response_enc;
      return this.decryptJWE(e, t, r);
    }
    async decryptJWTUserinfo(e) {
      if (!this.userinfo_encrypted_response_alg) return e;
      let t = this.userinfo_encrypted_response_alg, r = this.userinfo_encrypted_response_enc;
      return this.decryptJWE(e, t, r);
    }
    async decryptJWE(e, t, r = "A128CBC-HS256") {
      let i = JSON.parse(xt.decode(e.split(".")[0]));
      if (i.alg !== t) throw new G({ printf: ["unexpected JWE alg received, expected %s, got: %s", t, i.alg], jwt: e });
      if (i.enc !== r) throw new G({ printf: ["unexpected JWE enc received, expected %s, got: %s", r, i.enc], jwt: e });
      let o = (l) => new TextDecoder().decode(l.plaintext), a;
      if (t.match(/^(?:RSA|ECDH)/)) {
        let l = await uo.get(this), h = ge.decodeProtectedHeader(e);
        for (let u of l.all({ ...h, use: "enc" })) if (a = await ge.compactDecrypt(e, await u.keyObject(h.alg)).then(o, () => {
        }), a) break;
      } else a = await ge.compactDecrypt(e, this.secretForAlg(t === "dir" ? r : t)).then(o, () => {
      });
      if (!a) throw new G({ message: "failed to decrypt JWE", jwt: e });
      return a;
    }
    async validateIdToken(e, t, r, i, o) {
      let a = e, l = this.id_token_signed_response_alg;
      if (a instanceof je) {
        if (!a.id_token) throw TypeError("id_token not present in TokenSet");
        a = a.id_token;
      }
      a = String(a);
      let u = lo(), { protected: f, payload: m, key: b } = await this.validateJWT(a, l);
      if (typeof i === "number" || i !== Nc && this.require_auth_time) {
        if (!m.auth_time) throw new G({ message: "missing required JWT property auth_time", jwt: a });
        if (typeof m.auth_time !== "number") throw new G({ message: "JWT auth_time claim must be a JSON numeric value", jwt: a });
      }
      if (typeof i === "number" && m.auth_time + i < u - this[it]) throw new G({ printf: ["too much time has elapsed since the last End-User authentication, max_age %i, auth_time: %i, now %i", i, m.auth_time, u - this[it]], now: u, tolerance: this[it], auth_time: m.auth_time, jwt: a });
      if (t !== Dc && (m.nonce || t !== void 0) && m.nonce !== t) throw new G({ printf: ["nonce mismatch, expected %s, got: %s", t, m.nonce], jwt: a });
      if (r === "authorization") {
        if (!m.at_hash && e.access_token) throw new G({ message: "missing required property at_hash", jwt: a });
        if (!m.c_hash && e.code) throw new G({ message: "missing required property c_hash", jwt: a });
        if (this.fapi1()) {
          if (!m.s_hash && (e.state || o)) throw new G({ message: "missing required property s_hash", jwt: a });
        }
        if (m.s_hash) {
          if (!o) throw TypeError('cannot verify s_hash, "checks.state" property not provided');
          try {
            ln.validate({ claim: "s_hash", source: "state" }, m.s_hash, o, f.alg, b.jwk && b.jwk.crv);
          } catch (g) {
            throw new G({ message: g.message, jwt: a });
          }
        }
      }
      if (this.fapi() && m.iat < u - 3600) throw new G({ printf: ["JWT issued too far in the past, now %i, iat %i", u, m.iat], now: u, tolerance: this[it], iat: m.iat, jwt: a });
      if (e.access_token && m.at_hash !== void 0) try {
        ln.validate({ claim: "at_hash", source: "access_token" }, m.at_hash, e.access_token, f.alg, b.jwk && b.jwk.crv);
      } catch (g) {
        throw new G({ message: g.message, jwt: a });
      }
      if (e.code && m.c_hash !== void 0) try {
        ln.validate({ claim: "c_hash", source: "code" }, m.c_hash, e.code, f.alg, b.jwk && b.jwk.crv);
      } catch (g) {
        throw new G({ message: g.message, jwt: a });
      }
      return e;
    }
    async validateJWT(e, t, r = ["iss", "sub", "aud", "exp", "iat"]) {
      let i = this.issuer.issuer === "https://self-issued.me", o = lo(), a, l;
      try {
        ({ header: a, payload: l } = Lf(e, { complete: true }));
      } catch (u) {
        throw new G({ printf: ["failed to decode JWT (%s: %s)", u.name, u.message], jwt: e });
      }
      if (a.alg !== t) throw new G({ printf: ["unexpected JWT alg received, expected %s, got: %s", t, a.alg], jwt: e });
      if (i) r = [...r, "sub_jwk"];
      if (r.forEach(Bf.bind(void 0, l, e)), l.iss !== void 0) {
        let u = this.issuer.issuer;
        if (this.#r) u = this.issuer.issuer.replace("{tenantid}", l.tid);
        if (l.iss !== u) throw new G({ printf: ["unexpected iss value, expected %s, got: %s", u, l.iss], jwt: e });
      }
      if (l.iat !== void 0) {
        if (typeof l.iat !== "number") throw new G({ message: "JWT iat claim must be a JSON numeric value", jwt: e });
      }
      if (l.nbf !== void 0) {
        if (typeof l.nbf !== "number") throw new G({ message: "JWT nbf claim must be a JSON numeric value", jwt: e });
        if (l.nbf > o + this[it]) throw new G({ printf: ["JWT not active yet, now %i, nbf %i", o + this[it], l.nbf], now: o, tolerance: this[it], nbf: l.nbf, jwt: e });
      }
      if (l.exp !== void 0) {
        if (typeof l.exp !== "number") throw new G({ message: "JWT exp claim must be a JSON numeric value", jwt: e });
        if (o - this[it] >= l.exp) throw new G({ printf: ["JWT expired, now %i, exp %i", o - this[it], l.exp], now: o, tolerance: this[it], exp: l.exp, jwt: e });
      }
      if (l.aud !== void 0) {
        if (Array.isArray(l.aud)) {
          if (l.aud.length > 1 && !l.azp) throw new G({ message: "missing required JWT property azp", jwt: e });
          if (!l.aud.includes(this.client_id)) throw new G({ printf: ["aud is missing the client_id, expected %s to be included in %j", this.client_id, l.aud], jwt: e });
        } else if (l.aud !== this.client_id) throw new G({ printf: ["aud mismatch, expected %s, got: %s", this.client_id, l.aud], jwt: e });
      }
      if (l.azp !== void 0) {
        let u = this.#s;
        if (typeof u === "string") u = [this.client_id, u];
        else if (Array.isArray(u)) u = [this.client_id, ...u];
        else u = [this.client_id];
        if (!u.includes(l.azp)) throw new G({ printf: ["azp mismatch, got: %s", l.azp], jwt: e });
      }
      let h;
      if (i) {
        try {
          ao(Rt(l.sub_jwk));
          let u = await ge.importJWK(l.sub_jwk, a.alg);
          ao.equal(u.type, "public"), h = [{ keyObject() {
            return u;
          } }];
        } catch (u) {
          throw new G({ message: "failed to use sub_jwk claim as an asymmetric JSON Web Key", jwt: e });
        }
        if (await ge.calculateJwkThumbprint(l.sub_jwk) !== l.sub) throw new G({ message: "failed to match the subject with sub_jwk", jwt: e });
      } else if (a.alg.startsWith("HS")) h = [this.secretForAlg(a.alg)];
      else if (a.alg !== "none") h = await Lc.call(this.issuer, { ...a, use: "sig" });
      if (!h && a.alg === "none") return { protected: a, payload: l };
      for (let u of h) {
        let f = await ge.compactVerify(e, u instanceof Uint8Array ? u : await u.keyObject(a.alg)).catch(() => {
        });
        if (f) return { payload: l, protected: f.protectedHeader, key: u };
      }
      throw new G({ message: "failed to validate JWT signature", jwt: e });
    }
    async refresh(e, { exchangeBody: t, clientAssertionPayload: r, DPoP: i } = {}) {
      let o = e;
      if (o instanceof je) {
        if (!o.refresh_token) throw TypeError("refresh_token not present in TokenSet");
        o = o.refresh_token;
      }
      let a = await this.grant({ ...t, grant_type: "refresh_token", refresh_token: String(o) }, { clientAssertionPayload: r, DPoP: i });
      if (a.id_token) {
        if (await this.decryptIdToken(a), await this.validateIdToken(a, Dc, "token", Nc), e instanceof je && e.id_token) {
          let l = e.claims().sub, h = a.claims().sub;
          if (h !== l) throw new G({ printf: ["sub mismatch, expected %s, got: %s", l, h], jwt: a.id_token });
        }
      }
      return a;
    }
    async requestResource(e, t, { method: r, headers: i, body: o, DPoP: a, tokenType: l = a ? "DPoP" : t instanceof je ? t.token_type : "Bearer" } = {}, h) {
      if (t instanceof je) {
        if (!t.access_token) throw TypeError("access_token not present in TokenSet");
        t = t.access_token;
      }
      if (!t) throw TypeError("no access token provided");
      else if (typeof t !== "string") throw TypeError("invalid access token provided");
      let u = { headers: { Authorization: fo(t, l), ...i }, body: o }, f = !!this.tls_client_certificate_bound_access_tokens, m = await un.call(this, { ...u, responseType: "buffer", method: r, url: e }, { accessToken: t, mTLS: f, DPoP: a }), b = m.headers["www-authenticate"];
      if (h !== po && b && b.toLowerCase().startsWith("dpop ") && $f(b).error === "use_dpop_nonce") return this.requestResource(e, t, { method: r, headers: i, body: o, DPoP: a, tokenType: l });
      return m;
    }
    async userinfo(e, { method: t = "GET", via: r = "header", tokenType: i, params: o, DPoP: a } = {}) {
      Ze(this.issuer, "userinfo_endpoint");
      let l = { tokenType: i, method: String(t).toUpperCase(), DPoP: a };
      if (l.method !== "GET" && l.method !== "POST") throw TypeError("#userinfo() method can only be POST or a GET");
      if (r === "body" && l.method !== "POST") throw TypeError("can only send body on POST");
      let h = !!(this.userinfo_signed_response_alg || this.userinfo_encrypted_response_alg);
      if (h) l.headers = { Accept: "application/jwt" };
      else l.headers = { Accept: "application/json" };
      let u = !!this.tls_client_certificate_bound_access_tokens, f;
      if (u && this.issuer.mtls_endpoint_aliases) f = this.issuer.mtls_endpoint_aliases.userinfo_endpoint;
      if (f = new Rc(f || this.issuer.userinfo_endpoint), r === "body") l.headers.Authorization = void 0, l.headers["Content-Type"] = "application/x-www-form-urlencoded", l.body = new xc(), l.body.append("access_token", e instanceof je ? e.access_token : e);
      if (o) if (l.method === "GET") Object.entries(o).forEach(([g, k]) => {
        f.searchParams.append(g, k);
      });
      else if (l.body) Object.entries(o).forEach(([g, k]) => {
        l.body.append(g, k);
      });
      else l.body = new xc(), l.headers["Content-Type"] = "application/x-www-form-urlencoded", Object.entries(o).forEach(([g, k]) => {
        l.body.append(g, k);
      });
      if (l.body) l.body = l.body.toString();
      let m = await this.requestResource(f, e, l), b = At(m, { bearer: true });
      if (h) {
        if (!/^application\/jwt/.test(m.headers["content-type"])) throw new G({ message: "expected application/jwt response from the userinfo_endpoint", response: m });
        let g = m.body.toString(), k = await this.decryptJWTUserinfo(g);
        if (!this.userinfo_signed_response_alg) try {
          b = JSON.parse(k), ao(Rt(b));
        } catch (y) {
          throw new G({ message: "failed to parse userinfo JWE payload as JSON", jwt: k });
        }
        else ({ payload: b } = await this.validateJWTUserinfo(k));
      } else try {
        b = JSON.parse(m.body);
      } catch (g) {
        throw Object.defineProperty(g, "response", { value: m }), g;
      }
      if (e instanceof je && e.id_token) {
        let g = e.claims().sub;
        if (b.sub !== g) throw new G({ printf: ["userinfo sub mismatch, expected %s, got: %s", g, b.sub], body: b, jwt: e.id_token });
      }
      return b;
    }
    encryptionSecret(e) {
      let t = e <= 256 ? "sha256" : e <= 384 ? "sha384" : e <= 512 ? "sha512" : false;
      if (!t) throw Error("unsupported symmetric encryption key derivation");
      return dn.createHash(t).update(this.client_secret).digest().slice(0, e / 8);
    }
    secretForAlg(e) {
      if (!this.client_secret) throw TypeError("client_secret is required");
      if (/^A(\d{3})(?:GCM)?KW$/.test(e)) return this.encryptionSecret(parseInt(RegExp.$1, 10));
      if (/^A(\d{3})(?:GCM|CBC-HS(\d{3}))$/.test(e)) return this.encryptionSecret(parseInt(RegExp.$2 || RegExp.$1, 10));
      return new TextEncoder().encode(this.client_secret);
    }
    async grant(e, { clientAssertionPayload: t, DPoP: r } = {}, i) {
      Ze(this.issuer, "token_endpoint");
      let o = await In.call(this, "token", { form: e, responseType: "json" }, { clientAssertionPayload: t, DPoP: r }), a;
      try {
        a = At(o);
      } catch (l) {
        if (i !== po && l instanceof co && l.error === "use_dpop_nonce") return this.grant(e, { clientAssertionPayload: t, DPoP: r }, po);
        throw l;
      }
      return new je(a);
    }
    async deviceAuthorization(e = {}, { exchangeBody: t, clientAssertionPayload: r, DPoP: i } = {}) {
      Ze(this.issuer, "device_authorization_endpoint"), Ze(this.issuer, "token_endpoint");
      let o = $r.call(this, { client_id: this.client_id, redirect_uri: null, response_type: null, ...e }), a = await In.call(this, "device_authorization", { responseType: "json", form: o }, { clientAssertionPayload: r, endpointAuthMethod: "token" }), l = At(a);
      return new Uf({ client: this, exchangeBody: t, clientAssertionPayload: r, response: l, maxAge: e.max_age, DPoP: i });
    }
    async revoke(e, t, { revokeBody: r, clientAssertionPayload: i } = {}) {
      if (Ze(this.issuer, "revocation_endpoint"), t !== void 0 && typeof t !== "string") throw TypeError("hint must be a string");
      let o = { ...r, token: e };
      if (t) o.token_type_hint = t;
      let a = await In.call(this, "revocation", { form: o }, { clientAssertionPayload: i });
      At(a, { body: false });
    }
    async introspect(e, t, { introspectBody: r, clientAssertionPayload: i } = {}) {
      if (Ze(this.issuer, "introspection_endpoint"), t !== void 0 && typeof t !== "string") throw TypeError("hint must be a string");
      let o = { ...r, token: e };
      if (t) o.token_type_hint = t;
      let a = await In.call(this, "introspection", { form: o, responseType: "json" }, { clientAssertionPayload: i });
      return At(a);
    }
    static async register(e, t = {}) {
      let { initialAccessToken: r, jwks: i, ...o } = t;
      if (Ze(this.issuer, "registration_endpoint"), i !== void 0 && !(e.jwks || e.jwks_uri)) {
        let h = await Uc.call(this, i);
        e.jwks = h.toJWKS();
      }
      let a = await un.call(this, { headers: { Accept: "application/json", ...r ? { Authorization: fo(r) } : void 0 }, responseType: "json", json: e, url: this.issuer.registration_endpoint, method: "POST" }), l = At(a, { statusCode: 201, bearer: true });
      return new this(l, i, o);
    }
    get metadata() {
      return Ic(Object.fromEntries(this.#e.entries()));
    }
    static async fromUri(e, t, r, i) {
      let o = await un.call(this, { method: "GET", url: e, responseType: "json", headers: { Authorization: fo(t), Accept: "application/json" } }), a = At(o, { bearer: true });
      return new this(a, r, i);
    }
    async requestObject(e = {}, { sign: t = this.request_object_signing_alg || "none", encrypt: { alg: r = this.request_object_encryption_alg, enc: i = this.request_object_encryption_enc || "A128CBC-HS256" } = {} } = {}) {
      if (!Rt(e)) throw TypeError("requestObject must be a plain object");
      let o, a, l = lo(), h = { alg: t, typ: "oauth-authz-req+jwt" }, u = JSON.stringify(Cc({}, e, { iss: this.client_id, aud: this.issuer.issuer, client_id: this.client_id, jti: Oc(), iat: l, exp: l + 300, ...this.fapi() ? { nbf: l } : void 0 }));
      if (t === "none") o = [xt.encode(JSON.stringify(h)), xt.encode(u), ""].join(".");
      else {
        let m = t.startsWith("HS");
        if (m) a = this.secretForAlg(t);
        else {
          let b = await uo.get(this);
          if (!b) throw TypeError(`no keystore present for client, cannot sign using alg ${t}`);
          if (a = b.get({ alg: t, use: "sig" }), !a) throw TypeError(`no key to sign with found for alg ${t}`);
        }
        o = await new ge.CompactSign(new TextEncoder().encode(u)).setProtectedHeader({ ...h, kid: m ? void 0 : a.jwk.kid }).sign(m ? a : await a.keyObject(t));
      }
      if (!r) return o;
      let f = { alg: r, enc: i, cty: "oauth-authz-req+jwt" };
      if (f.alg.match(/^(RSA|ECDH)/)) [a] = await Lc.call(this.issuer, { alg: f.alg, use: "enc" }, { allowMulti: true });
      else a = this.secretForAlg(f.alg === "dir" ? f.enc : f.alg);
      return new ge.CompactEncrypt(new TextEncoder().encode(o)).setProtectedHeader({ ...f, kid: a instanceof Uint8Array ? void 0 : a.jwk.kid }).encrypt(a instanceof Uint8Array ? a : await a.keyObject(f.alg));
    }
    async pushedAuthorizationRequest(e = {}, { clientAssertionPayload: t } = {}) {
      Ze(this.issuer, "pushed_authorization_request_endpoint");
      let r = { ..."request" in e ? e : $r.call(this, e), client_id: this.client_id }, i = await In.call(this, "pushed_authorization_request", { responseType: "json", form: r }, { clientAssertionPayload: t, endpointAuthMethod: "token" }), o = At(i, { statusCode: 201 });
      if (!("expires_in" in o)) throw new G({ message: "expected expires_in in Pushed Authorization Successful Response", response: i });
      if (typeof o.expires_in !== "number") throw new G({ message: "invalid expires_in value in Pushed Authorization Successful Response", response: i });
      if (!("request_uri" in o)) throw new G({ message: "expected request_uri in Pushed Authorization Successful Response", response: i });
      if (typeof o.request_uri !== "string") throw new G({ message: "invalid request_uri value in Pushed Authorization Successful Response", response: i });
      return o;
    }
    get issuer() {
      return this.#t;
    }
    [Tc.custom]() {
      return `${this.constructor.name} ${Tc(this.metadata, { depth: 1 / 0, colors: process.stdout.isTTY, compact: false, sorted: true })}`;
    }
    fapi() {
      return this.fapi1() || this.fapi2();
    }
    fapi1() {
      return this.constructor.name === "FAPI1Client";
    }
    fapi2() {
      return this.constructor.name === "FAPI2Client";
    }
    async validateJARM(e) {
      let t = this.authorization_signed_response_alg, { payload: r } = await this.validateJWT(e, t, ["iss", "exp", "aud"]);
      return Tt(r);
    }
    async dpopProof(e, t, r) {
      if (!Rt(e)) throw TypeError("payload must be a plain object");
      let i;
      if (Bc(t)) i = t;
      else if (t[Symbol.toStringTag] === "CryptoKey") i = t;
      else if (ge.cryptoRuntime === "node:crypto") i = dn.createPrivateKey(t);
      else throw TypeError("unrecognized crypto runtime");
      if (i.type !== "private") throw TypeError('"DPoP" option must be a private key');
      let o = yo.call(this, i, t);
      if (!o) throw TypeError("could not determine DPoP JWS Algorithm");
      return new ge.SignJWT({ ath: r ? xt.encode(dn.createHash("sha256").update(r).digest()) : void 0, ...e }).setProtectedHeader({ alg: o, typ: "dpop+jwt", jwk: await Ff(i, t) }).setIssuedAt().setJti(Oc()).sign(i);
    }
  }
  function Mc(e) {
    switch (e.algorithm.name) {
      case "Ed25519":
      case "Ed448":
        return "EdDSA";
      case "ECDSA": {
        switch (e.algorithm.namedCurve) {
          case "P-256":
            return "ES256";
          case "P-384":
            return "ES384";
          case "P-521":
            return "ES512";
          default:
            break;
        }
        break;
      }
      case "RSASSA-PKCS1-v1_5":
        return `RS${e.algorithm.hash.name.slice(4)}`;
      case "RSA-PSS":
        return `PS${e.algorithm.hash.name.slice(4)}`;
      default:
        throw TypeError("unsupported DPoP private key");
    }
  }
  var yo;
  if (ge.cryptoRuntime === "node:crypto") {
    let t = function(h, u, f) {
      if (typeof u === "object" && u.format === "jwk" && u.key && u.key.alg) return u.key.alg;
      if (Array.isArray(f)) {
        let m = f.filter(RegExp.prototype.test.bind(e));
        if (h.asymmetricKeyType === "rsa-pss") m = m.filter((b) => b.startsWith("PS"));
        return ["PS256", "PS384", "PS512", "RS256", "RS384", "RS384"].find((b) => m.includes(b));
      }
      return "PS256";
    }, l = function(h, u) {
      switch (typeof u === "object" && typeof u.key === "object" && u.key.crv) {
        case "P-256":
          return "ES256";
        case "secp256k1":
          return "ES256K";
        case "P-384":
          return "ES384";
        case "P-512":
          return "ES512";
        default:
          break;
      }
      let f = h.export({ format: "der", type: "pkcs8" }), m = f[1] < 128 ? 17 : 18, b = f[m], g = f.slice(m + 1, m + 1 + b);
      if (g.equals(r)) return "ES256";
      if (g.equals(i)) return "ES384";
      if (g.equals(o)) return "ES512";
      if (g.equals(a)) return "ES256K";
      throw TypeError("unsupported DPoP private key curve");
    };
    qf = t, Kf = l, yo = function(h, u) {
      if (u[Symbol.toStringTag] === "CryptoKey") return Mc(h);
      switch (h.asymmetricKeyType) {
        case "ed25519":
        case "ed448":
          return "EdDSA";
        case "ec":
          return l(h, u);
        case "rsa":
        case (jf && "rsa-pss"):
          return t(h, u, this.issuer.dpop_signing_alg_values_supported);
        default:
          throw TypeError("unsupported DPoP private key");
      }
    };
    let e = /^(?:RS|PS)(?:256|384|512)$/, r = Buffer.from([42, 134, 72, 206, 61, 3, 1, 7]), i = Buffer.from([43, 129, 4, 0, 34]), o = Buffer.from([43, 129, 4, 0, 35]), a = Buffer.from([43, 129, 4, 0, 10]);
  } else yo = Mc;
  var qf, Kf, mo = /* @__PURE__ */ new WeakMap();
  async function Ff(e, t) {
    if (ge.cryptoRuntime === "node:crypto" && typeof t === "object" && typeof t.key === "object" && t.format === "jwk") return go(t.key, "kty", "crv", "x", "y", "e", "n");
    if (mo.has(t)) return mo.get(t);
    let r = go(await ge.exportJWK(e), "kty", "crv", "x", "y", "e", "n");
    if (Bc(t) || ge.cryptoRuntime === "WebCryptoAPI") mo.set(t, r);
    return r;
  }
  bo.exports = (e, t = false) => class extends wo {
    constructor(...i) {
      super(e, t, ...i);
    }
    static get issuer() {
      return e;
    }
  };
  bo.exports.BaseClient = wo;
});
var Fc = (0, import_chunk_w1d7ygsk.V)(function(my, Gc) {
  var zf = Tr();
  Gc.exports = new zf({ max: 100 });
});
var Kc = (0, import_chunk_w1d7ygsk.V)(function(gy, qc) {
  var Jf = /^\d+$/;
  function Yf(e) {
    if (e.includes("://")) return true;
    let t = e.replace(/(\/|\?)/g, "#").split("#")[0];
    if (t.includes(":")) {
      let r = t.indexOf(":"), i = t.slice(r + 1);
      if (!Jf.test(i)) return true;
    }
    return false;
  }
  function Vf(e) {
    if (!e.includes("@")) return false;
    let t = e.split("@"), r = t[t.length - 1];
    return !(r.includes(":") || r.includes("/") || r.includes("?"));
  }
  function Xf(e) {
    if (typeof e !== "string") throw TypeError("input must be a string");
    let t;
    if (Yf(e)) t = e;
    else if (Vf(e)) t = `acct:${e}`;
    else t = `https://${e}`;
    return t.split("#")[0];
  }
  qc.exports = Xf;
});
var Vc = (0, import_chunk_w1d7ygsk.V)(function(_y, Yc) {
  var { inspect: zc } = (0, import_chunk_w1d7ygsk.ft)("util"), hn = (0, import_chunk_w1d7ygsk.ft)("url"), { RPError: vo } = lt(), Zf = ko(), Ct = Fc(), Jc = vr(), Qf = Kc(), Dr = sn(), eh = Cn(), { keystore: th } = io(), nh = ["https://login.microsoftonline.com/common/.well-known/openid-configuration", "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration"], Eo = Symbol(), rh = { claim_types_supported: ["normal"], claims_parameter_supported: false, grant_types_supported: ["authorization_code", "implicit"], request_parameter_supported: false, request_uri_parameter_supported: true, require_request_uri_registration: false, response_modes_supported: ["query", "fragment"], token_endpoint_auth_methods_supported: ["client_secret_basic"] };
  class So {
    #e;
    constructor(e = {}) {
      let t = e[Eo];
      delete e[Eo], ["introspection", "revocation"].forEach((i) => {
        if (e[`${i}_endpoint`] && e[`${i}_endpoint_auth_methods_supported`] === void 0 && e[`${i}_endpoint_auth_signing_alg_values_supported`] === void 0) {
          if (e.token_endpoint_auth_methods_supported) e[`${i}_endpoint_auth_methods_supported`] = e.token_endpoint_auth_methods_supported;
          if (e.token_endpoint_auth_signing_alg_values_supported) e[`${i}_endpoint_auth_signing_alg_values_supported`] = e.token_endpoint_auth_signing_alg_values_supported;
        }
      }), this.#e = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([i, o]) => {
        if (this.#e.set(i, o), !this[i]) Object.defineProperty(this, i, { get() {
          return this.#e.get(i);
        }, enumerable: true });
      }), Ct.set(this.issuer, this);
      let r = Zf(this, t);
      Object.defineProperties(this, { Client: { value: r, enumerable: true }, FAPI1Client: { value: class extends r {
      }, enumerable: true }, FAPI2Client: { value: class extends r {
      }, enumerable: true } });
    }
    get metadata() {
      return eh(Object.fromEntries(this.#e.entries()));
    }
    static async webfinger(e) {
      let t = Qf(e), { host: r } = hn.parse(t), i = `https://${r}/.well-known/webfinger`, o = await Dr.call(this, { method: "GET", url: i, responseType: "json", searchParams: { resource: t, rel: "http://openid.net/specs/connect/1.0/issuer" }, headers: { Accept: "application/json" } }), a = Jc(o), l = Array.isArray(a.links) && a.links.find((f) => typeof f === "object" && f.rel === "http://openid.net/specs/connect/1.0/issuer" && f.href);
      if (!l) throw new vo({ message: "no issuer found in webfinger response", body: a });
      if (typeof l.href !== "string" || !l.href.startsWith("https://")) throw new vo({ printf: ["invalid issuer location %s", l.href], body: a });
      let h = l.href;
      if (Ct.has(h)) return Ct.get(h);
      let u = await this.discover(h);
      if (u.issuer !== h) throw Ct.del(u.issuer), new vo("discovered issuer mismatch, expected %s, got: %s", h, u.issuer);
      return u;
    }
    static async discover(e) {
      let t = sh(e), r = await Dr.call(this, { method: "GET", responseType: "json", url: t, headers: { Accept: "application/json" } }), i = Jc(r);
      return new So({ ...rh, ...i, [Eo]: !!nh.find((o) => t.startsWith(o)) });
    }
    async reloadJwksUri() {
      await th.call(this, true);
    }
    [zc.custom]() {
      return `${this.constructor.name} ${zc(this.metadata, { depth: 1 / 0, colors: process.stdout.isTTY, compact: false, sorted: true })}`;
    }
  }
  function sh(e) {
    let t = hn.parse(e);
    if (t.pathname.includes("/.well-known/")) return e;
    else {
      let r;
      if (t.pathname.endsWith("/")) r = `${t.pathname}.well-known/openid-configuration`;
      else r = `${t.pathname}/.well-known/openid-configuration`;
      return hn.format({ ...t, pathname: r });
    }
  }
  Yc.exports = So;
});
var td = (0, import_chunk_w1d7ygsk.V)(function(yy, ed) {
  var Nr = (0, import_chunk_w1d7ygsk.ft)("url"), { format: oh } = (0, import_chunk_w1d7ygsk.ft)("util"), Xc = Cn(), { RPError: Zc, OPError: ih } = lt(), { BaseClient: ah } = ko(), { random: Ao, codeChallenge: ch } = Tn(), dh = br(), { resolveResponseType: lh, resolveRedirectUri: uh } = to();
  function ph(e, t, r = {}) {
    if (e) this.error(e);
    else if (!t) this.fail(r);
    else this.success(t, r);
  }
  function Qc({ client: e, params: t = {}, passReqToCallback: r = false, sessionKey: i, usePKCE: o = true, extras: a = {} } = {}, l) {
    if (!(e instanceof ah)) throw TypeError("client must be an instance of openid-client Client");
    if (typeof l !== "function") throw TypeError("verify callback must be a function");
    if (!e.issuer || !e.issuer.issuer) throw TypeError("client must have an issuer with an identifier");
    if (this._client = e, this._issuer = e.issuer, this._verify = l, this._passReqToCallback = r, this._usePKCE = o, this._key = i || `oidc:${Nr.parse(this._issuer.issuer).hostname}`, this._params = Xc(t), delete this._params.state, delete this._params.nonce, this._extras = Xc(a), !this._params.response_type) this._params.response_type = lh.call(e);
    if (!this._params.redirect_uri) this._params.redirect_uri = uh.call(e);
    if (!this._params.scope) this._params.scope = "openid";
    if (this._usePKCE === true) {
      let h = Array.isArray(this._issuer.code_challenge_methods_supported) ? this._issuer.code_challenge_methods_supported : false;
      if (h && h.includes("S256")) this._usePKCE = "S256";
      else if (h && h.includes("plain")) this._usePKCE = "plain";
      else if (h) throw TypeError("neither code_challenge_method supported by the client is supported by the issuer");
      else this._usePKCE = "S256";
    } else if (typeof this._usePKCE === "string" && !["plain", "S256"].includes(this._usePKCE)) throw TypeError(`${this._usePKCE} is not valid/implemented PKCE code_challenge_method`);
    this.name = Nr.parse(e.issuer.issuer).hostname;
  }
  Qc.prototype.authenticate = function(t, r) {
    (async () => {
      let i = this._client;
      if (!t.session) throw TypeError("authentication requires session support");
      let o = i.callbackParams(t), a = this._key, { 0: l, length: h } = Object.keys(o);
      if (h === 0 || h === 1 && l === "iss") {
        let P = { state: Ao(), ...this._params, ...r };
        if (!P.nonce && P.response_type.includes("id_token")) P.nonce = Ao();
        if (t.session[a] = dh(P, "nonce", "state", "max_age", "response_type"), this._usePKCE && P.response_type.includes("code")) {
          let R = Ao();
          switch (t.session[a].code_verifier = R, this._usePKCE) {
            case "S256":
              P.code_challenge = ch(R), P.code_challenge_method = "S256";
              break;
            case "plain":
              P.code_challenge = R;
              break;
          }
        }
        this.redirect(i.authorizationUrl(P));
        return;
      }
      let u = t.session[a];
      if (Object.keys(u || {}).length === 0) throw Error(oh('did not find expected authorization request details in session, req.session["%s"] is %j', a, u));
      let { state: f, nonce: m, max_age: b, code_verifier: g, response_type: k } = u;
      try {
        delete t.session[a];
      } catch (P) {
      }
      let y = { redirect_uri: this._params.redirect_uri, ...r }, v = { state: f, nonce: m, max_age: b, code_verifier: g, response_type: k }, E = await i.callback(y.redirect_uri, o, v, this._extras), S = this._passReqToCallback, O = this._verify.length > (S ? 3 : 2) && i.issuer.userinfo_endpoint, x = [E, ph.bind(this)];
      if (O) {
        if (!E.access_token) throw new Zc({ message: "expected access_token to be returned when asking for userinfo in verify callback", tokenset: E });
        let P = await i.userinfo(E);
        x.splice(1, 0, P);
      }
      if (S) x.unshift(t);
      this._verify(...x);
    })().catch((i) => {
      if (i instanceof ih && i.error !== "server_error" && !i.error.startsWith("invalid") || i instanceof Zc) this.fail(i);
      else this.error(i);
    });
  };
  ed.exports = Qc;
});
var rd = (0, import_chunk_w1d7ygsk.V)(function(wy, nd) {
  var fh = Vc(), { OPError: hh, RPError: mh } = lt(), gh = td(), _h = Ks(), { CLOCK_TOLERANCE: yh, HTTP_OPTIONS: wh } = Rr(), bh = Tn(), { setDefaults: kh } = sn();
  nd.exports = { Issuer: fh, Strategy: gh, TokenSet: _h, errors: { OPError: hh, RPError: mh }, custom: { setHttpOptionsDefaults: kh, http_options: wh, clock_tolerance: yh }, generators: bh };
});
var Xr = (0, import_chunk_w1d7ygsk.V)(function(Od, jn) {
  (function() {
    var e, t, r, i, o, a, l, h, u;
    if (t = {}, h = this, typeof jn < "u" && jn !== null && jn.exports) jn.exports = t;
    else h.ipaddr = t;
    l = function(f, m, b, g) {
      var k, y;
      if (f.length !== m.length) throw Error("ipaddr: cannot match CIDR for objects with different lengths");
      k = 0;
      while (g > 0) {
        if (y = b - g, y < 0) y = 0;
        if (f[k] >> y !== m[k] >> y) return false;
        g -= b, k += 1;
      }
      return true;
    }, t.subnetMatch = function(f, m, b) {
      var g, k, y, v, E;
      if (b == null) b = "unicast";
      for (y in m) {
        if (v = m[y], v[0] && !(v[0] instanceof Array)) v = [v];
        for (g = 0, k = v.length; g < k; g++) if (E = v[g], f.kind() === E[0].kind()) {
          if (f.match.apply(f, E)) return y;
        }
      }
      return b;
    }, t.IPv4 = (function() {
      function f(m) {
        var b, g, k;
        if (m.length !== 4) throw Error("ipaddr: ipv4 octet count should be 4");
        for (b = 0, g = m.length; b < g; b++) if (k = m[b], !(0 <= k && k <= 255)) throw Error("ipaddr: ipv4 octet should fit in 8 bits");
        this.octets = m;
      }
      return f.prototype.kind = function() {
        return "ipv4";
      }, f.prototype.toString = function() {
        return this.octets.join(".");
      }, f.prototype.toNormalizedString = function() {
        return this.toString();
      }, f.prototype.toByteArray = function() {
        return this.octets.slice(0);
      }, f.prototype.match = function(m, b) {
        var g;
        if (b === void 0) g = m, m = g[0], b = g[1];
        if (m.kind() !== "ipv4") throw Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
        return l(this.octets, m.octets, 8, b);
      }, f.prototype.SpecialRanges = { unspecified: [[new f([0, 0, 0, 0]), 8]], broadcast: [[new f([255, 255, 255, 255]), 32]], multicast: [[new f([224, 0, 0, 0]), 4]], linkLocal: [[new f([169, 254, 0, 0]), 16]], loopback: [[new f([127, 0, 0, 0]), 8]], carrierGradeNat: [[new f([100, 64, 0, 0]), 10]], private: [[new f([10, 0, 0, 0]), 8], [new f([172, 16, 0, 0]), 12], [new f([192, 168, 0, 0]), 16]], reserved: [[new f([192, 0, 0, 0]), 24], [new f([192, 0, 2, 0]), 24], [new f([192, 88, 99, 0]), 24], [new f([198, 51, 100, 0]), 24], [new f([203, 0, 113, 0]), 24], [new f([240, 0, 0, 0]), 4]] }, f.prototype.range = function() {
        return t.subnetMatch(this, this.SpecialRanges);
      }, f.prototype.toIPv4MappedAddress = function() {
        return t.IPv6.parse("::ffff:" + this.toString());
      }, f.prototype.prefixLengthFromSubnetMask = function() {
        var m, b, g, k, y, v, E;
        E = { 0: 8, 128: 7, 192: 6, 224: 5, 240: 4, 248: 3, 252: 2, 254: 1, 255: 0 }, m = 0, y = false;
        for (b = g = 3; g >= 0; b = g += -1) if (k = this.octets[b], k in E) {
          if (v = E[k], y && v !== 0) return null;
          if (v !== 8) y = true;
          m += v;
        } else return null;
        return 32 - m;
      }, f;
    })(), r = "(0?\\d+|0x[a-f0-9]+)", i = { fourOctet: new RegExp("^" + r + "\\." + r + "\\." + r + "\\." + r + "$", "i"), longValue: new RegExp("^" + r + "$", "i") }, t.IPv4.parser = function(f) {
      var m, b, g, k, y;
      if (b = function(v) {
        if (v[0] === "0" && v[1] !== "x") return parseInt(v, 8);
        else return parseInt(v);
      }, m = f.match(i.fourOctet)) return (function() {
        var v, E, S, O;
        S = m.slice(1, 6), O = [];
        for (v = 0, E = S.length; v < E; v++) g = S[v], O.push(b(g));
        return O;
      })();
      else if (m = f.match(i.longValue)) {
        if (y = b(m[1]), y > 4294967295 || y < 0) throw Error("ipaddr: address outside defined range");
        return (function() {
          var v, E;
          E = [];
          for (k = v = 0; v <= 24; k = v += 8) E.push(y >> k & 255);
          return E;
        })().reverse();
      } else return null;
    }, t.IPv6 = (function() {
      function f(m, b) {
        var g, k, y, v, E, S;
        if (m.length === 16) {
          this.parts = [];
          for (g = k = 0; k <= 14; g = k += 2) this.parts.push(m[g] << 8 | m[g + 1]);
        } else if (m.length === 8) this.parts = m;
        else throw Error("ipaddr: ipv6 part count should be 8 or 16");
        S = this.parts;
        for (y = 0, v = S.length; y < v; y++) if (E = S[y], !(0 <= E && E <= 65535)) throw Error("ipaddr: ipv6 part should fit in 16 bits");
        if (b) this.zoneId = b;
      }
      return f.prototype.kind = function() {
        return "ipv6";
      }, f.prototype.toString = function() {
        return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
      }, f.prototype.toRFC5952String = function() {
        var m, b, g, k, y;
        k = /((^|:)(0(:|$)){2,})/g, y = this.toNormalizedString(), m = 0, b = -1;
        while (g = k.exec(y)) if (g[0].length > b) m = g.index, b = g[0].length;
        if (b < 0) return y;
        return y.substring(0, m) + "::" + y.substring(m + b);
      }, f.prototype.toByteArray = function() {
        var m, b, g, k, y;
        m = [], y = this.parts;
        for (b = 0, g = y.length; b < g; b++) k = y[b], m.push(k >> 8), m.push(k & 255);
        return m;
      }, f.prototype.toNormalizedString = function() {
        var m, b, g;
        if (m = function() {
          var k, y, v, E;
          v = this.parts, E = [];
          for (k = 0, y = v.length; k < y; k++) b = v[k], E.push(b.toString(16));
          return E;
        }.call(this).join(":"), g = "", this.zoneId) g = "%" + this.zoneId;
        return m + g;
      }, f.prototype.toFixedLengthString = function() {
        var m, b, g;
        if (m = function() {
          var k, y, v, E;
          v = this.parts, E = [];
          for (k = 0, y = v.length; k < y; k++) b = v[k], E.push(b.toString(16).padStart(4, "0"));
          return E;
        }.call(this).join(":"), g = "", this.zoneId) g = "%" + this.zoneId;
        return m + g;
      }, f.prototype.match = function(m, b) {
        var g;
        if (b === void 0) g = m, m = g[0], b = g[1];
        if (m.kind() !== "ipv6") throw Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
        return l(this.parts, m.parts, 16, b);
      }, f.prototype.SpecialRanges = { unspecified: [new f([0, 0, 0, 0, 0, 0, 0, 0]), 128], linkLocal: [new f([65152, 0, 0, 0, 0, 0, 0, 0]), 10], multicast: [new f([65280, 0, 0, 0, 0, 0, 0, 0]), 8], loopback: [new f([0, 0, 0, 0, 0, 0, 0, 1]), 128], uniqueLocal: [new f([64512, 0, 0, 0, 0, 0, 0, 0]), 7], ipv4Mapped: [new f([0, 0, 0, 0, 0, 65535, 0, 0]), 96], rfc6145: [new f([0, 0, 0, 0, 65535, 0, 0, 0]), 96], rfc6052: [new f([100, 65435, 0, 0, 0, 0, 0, 0]), 96], "6to4": [new f([8194, 0, 0, 0, 0, 0, 0, 0]), 16], teredo: [new f([8193, 0, 0, 0, 0, 0, 0, 0]), 32], reserved: [[new f([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]] }, f.prototype.range = function() {
        return t.subnetMatch(this, this.SpecialRanges);
      }, f.prototype.isIPv4MappedAddress = function() {
        return this.range() === "ipv4Mapped";
      }, f.prototype.toIPv4Address = function() {
        var m, b, g;
        if (!this.isIPv4MappedAddress()) throw Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
        return g = this.parts.slice(-2), m = g[0], b = g[1], new t.IPv4([m >> 8, m & 255, b >> 8, b & 255]);
      }, f.prototype.prefixLengthFromSubnetMask = function() {
        var m, b, g, k, y, v, E;
        E = { 0: 16, 32768: 15, 49152: 14, 57344: 13, 61440: 12, 63488: 11, 64512: 10, 65024: 9, 65280: 8, 65408: 7, 65472: 6, 65504: 5, 65520: 4, 65528: 3, 65532: 2, 65534: 1, 65535: 0 }, m = 0, y = false;
        for (b = g = 7; g >= 0; b = g += -1) if (k = this.parts[b], k in E) {
          if (v = E[k], y && v !== 0) return null;
          if (v !== 16) y = true;
          m += v;
        } else return null;
        return 128 - m;
      }, f;
    })(), o = "(?:[0-9a-f]+::?)+", u = "%[0-9a-z]{1,}", a = { zoneIndex: new RegExp(u, "i"), native: new RegExp("^(::)?(" + o + ")?([0-9a-f]+)?(::)?(" + u + ")?$", "i"), transitional: new RegExp("^((?:" + o + ")|(?:::)(?:" + o + ")?)" + (r + "\\." + r + "\\." + r + "\\." + r) + ("(" + u + ")?$"), "i") }, e = function(f, m) {
      var b, g, k, y, v, E;
      if (f.indexOf("::") !== f.lastIndexOf("::")) return null;
      if (E = (f.match(a.zoneIndex) || [])[0], E) E = E.substring(1), f = f.replace(/%.+$/, "");
      b = 0, g = -1;
      while ((g = f.indexOf(":", g + 1)) >= 0) b++;
      if (f.substr(0, 2) === "::") b--;
      if (f.substr(-2, 2) === "::") b--;
      if (b > m) return null;
      v = m - b, y = ":";
      while (v--) y += "0:";
      if (f = f.replace("::", y), f[0] === ":") f = f.slice(1);
      if (f[f.length - 1] === ":") f = f.slice(0, -1);
      return m = (function() {
        var S, O, x, P;
        x = f.split(":"), P = [];
        for (S = 0, O = x.length; S < O; S++) k = x[S], P.push(parseInt(k, 16));
        return P;
      })(), { parts: m, zoneId: E };
    }, t.IPv6.parser = function(f) {
      var m, b, g, k, y, v, E;
      if (a.native.test(f)) return e(f, 8);
      else if (k = f.match(a.transitional)) {
        if (E = k[6] || "", m = e(k[1].slice(0, -1) + E, 6), m.parts) {
          v = [parseInt(k[2]), parseInt(k[3]), parseInt(k[4]), parseInt(k[5])];
          for (b = 0, g = v.length; b < g; b++) if (y = v[b], !(0 <= y && y <= 255)) return null;
          return m.parts.push(v[0] << 8 | v[1]), m.parts.push(v[2] << 8 | v[3]), { parts: m.parts, zoneId: m.zoneId };
        }
      }
      return null;
    }, t.IPv4.isIPv4 = t.IPv6.isIPv6 = function(f) {
      return this.parser(f) !== null;
    }, t.IPv4.isValid = function(f) {
      var m;
      try {
        return new this(this.parser(f)), true;
      } catch (b) {
        return m = b, false;
      }
    }, t.IPv4.isValidFourPartDecimal = function(f) {
      if (t.IPv4.isValid(f) && f.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) return true;
      else return false;
    }, t.IPv6.isValid = function(f) {
      var m, b;
      if (typeof f === "string" && f.indexOf(":") === -1) return false;
      try {
        return m = this.parser(f), new this(m.parts, m.zoneId), true;
      } catch (g) {
        return b = g, false;
      }
    }, t.IPv4.parse = function(f) {
      var m = this.parser(f);
      if (m === null) throw Error("ipaddr: string is not formatted like ip address");
      return new this(m);
    }, t.IPv6.parse = function(f) {
      var m = this.parser(f);
      if (m.parts === null) throw Error("ipaddr: string is not formatted like ip address");
      return new this(m.parts, m.zoneId);
    }, t.IPv4.parseCIDR = function(f) {
      var m, b, g;
      if (b = f.match(/^(.+)\/(\d+)$/)) {
        if (m = parseInt(b[2]), m >= 0 && m <= 32) return g = [this.parse(b[1]), m], Object.defineProperty(g, "toString", { value: function() {
          return this.join("/");
        } }), g;
      }
      throw Error("ipaddr: string is not formatted like an IPv4 CIDR range");
    }, t.IPv4.subnetMaskFromPrefixLength = function(f) {
      var m, b, g;
      if (f = parseInt(f), f < 0 || f > 32) throw Error("ipaddr: invalid IPv4 prefix length");
      g = [0, 0, 0, 0], b = 0, m = Math.floor(f / 8);
      while (b < m) g[b] = 255, b++;
      if (m < 4) g[m] = Math.pow(2, f % 8) - 1 << 8 - f % 8;
      return new this(g);
    }, t.IPv4.broadcastAddressFromCIDR = function(f) {
      var m, b, g, k, y, v;
      try {
        m = this.parseCIDR(f), k = m[0].toByteArray(), v = this.subnetMaskFromPrefixLength(m[1]).toByteArray(), y = [], g = 0;
        while (g < 4) y.push(parseInt(k[g], 10) | parseInt(v[g], 10) ^ 255), g++;
        return new this(y);
      } catch (E) {
        throw b = E, Error("ipaddr: the address does not have IPv4 CIDR format");
      }
    }, t.IPv4.networkAddressFromCIDR = function(f) {
      var m, b, g, k, y, v;
      try {
        m = this.parseCIDR(f), k = m[0].toByteArray(), v = this.subnetMaskFromPrefixLength(m[1]).toByteArray(), y = [], g = 0;
        while (g < 4) y.push(parseInt(k[g], 10) & parseInt(v[g], 10)), g++;
        return new this(y);
      } catch (E) {
        throw b = E, Error("ipaddr: the address does not have IPv4 CIDR format");
      }
    }, t.IPv6.parseCIDR = function(f) {
      var m, b, g;
      if (b = f.match(/^(.+)\/(\d+)$/)) {
        if (m = parseInt(b[2]), m >= 0 && m <= 128) return g = [this.parse(b[1]), m], Object.defineProperty(g, "toString", { value: function() {
          return this.join("/");
        } }), g;
      }
      throw Error("ipaddr: string is not formatted like an IPv6 CIDR range");
    }, t.isValid = function(f) {
      return t.IPv6.isValid(f) || t.IPv4.isValid(f);
    }, t.parse = function(f) {
      if (t.IPv6.isValid(f)) return t.IPv6.parse(f);
      else if (t.IPv4.isValid(f)) return t.IPv4.parse(f);
      else throw Error("ipaddr: the address has neither IPv6 nor IPv4 format");
    }, t.parseCIDR = function(f) {
      var m;
      try {
        return t.IPv6.parseCIDR(f);
      } catch (b) {
        m = b;
        try {
          return t.IPv4.parseCIDR(f);
        } catch (g) {
          throw m = g, Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
        }
      }
    }, t.fromByteArray = function(f) {
      var m = f.length;
      if (m === 4) return new t.IPv4(f);
      else if (m === 16) return new t.IPv6(f);
      else throw Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
    }, t.process = function(f) {
      var m = this.parse(f);
      if (m.kind() === "ipv6" && m.isIPv4MappedAddress()) return m.toIPv4Address();
      else return m;
    };
  }).call(Od);
});
var Nl = (0, import_chunk_w1d7ygsk.V)(function(Dl) {
  Object.defineProperty(Dl, "__esModule", { value: true });
  Dl.findingBlocksServing = _i;
  Dl.validateForGatewayServing = qm;
  var gs = (0, import_chunk_mmevw7ty.evo)(), $l = (0, import_chunk_8xs3r4c8._un)(), _s = (0, import_chunk_mmevw7ty.Lwe)(), Qe = (0, import_chunk_mmevw7ty.ZYe)(), ws = (0, import_chunk_qm5s85q5.RGi)(), ys = (0, import_chunk_mmevw7ty.PCr)();
  function _i(e) {
    if (e.kind === "drop-report") return e.dropKind !== "clamp";
    return e.kind !== "intake-warning" && e.kind !== "banner-text-unused" && e.kind !== "deprecated";
  }
  function Bm(e, t) {
    let r = Qe.retiredFlatKeyEffect(e);
    if (r !== void 0) return `this key has been retired \u2014 ${r}; current Claude Desktop releases ignore it, so remove it from the overlay`;
    let i = Qe.flatConfigKeys({ includeInternal: true }).find((o) => {
      var a;
      return ((a = Qe.getFieldMeta(o).legacyFlatKey) === null || a === void 0 ? void 0 : a.name) === e;
    });
    if (i !== void 0) return t.has(i) ? `deprecated name for ${i} \u2014 use ${i}` : `deprecated name for ${i}, which is not operator-settable here`;
    return "unknown desktop key \u2014 fix the typo, or upgrade the gateway if this key was added in a newer Claude Desktop release";
  }
  function Wm(e) {
    var t, r;
    if (Hm().has(e)) return "not deliverable via bootstrap \u2014 set it through MDM/local managed configuration instead";
    let i = (r = (t = Qe.FLAT_KEY_TO_NESTED_PATH.get(e)) === null || t === void 0 ? void 0 : t.join(".")) !== null && r !== void 0 ? r : e, o = Gm().find((a) => i === a || i.startsWith(`${a}.`));
    if (o !== void 0 && (o === "otlp" || o.startsWith("otlp."))) return "set by the gateway \u2014 it relays OTLP itself; configure `telemetry.forward_to` instead";
    if (o !== void 0 && (o.startsWith("inference") || o === "models.list")) return "set by the gateway from its own configuration \u2014 configure `upstreams:`/`models:` instead";
    return "not operator-settable through the gateway desktop: overlay";
  }
  var Zn;
  function Hm() {
    return Zn !== null && Zn !== void 0 || (Zn = new Set(Qe.nonBootstrapableKeys({ includeInternal: true }))), Zn;
  }
  var Qn;
  function Gm() {
    return Qn !== null && Qn !== void 0 || (Qn = ws.gatewayRefusedPathPrefixes()), Qn;
  }
  var Ll = /* @__PURE__ */ new Map();
  function Fm(e) {
    let t = Ll.get(e);
    if (t === void 0) {
      let r = ws.gatewayServableKeys({ includeInternal: e });
      t = { list: r, set: new Set(r) }, Ll.set(e, t);
    }
    return t;
  }
  function qm(e, t = {}) {
    var r, i;
    if (e === null || typeof e !== "object" || Array.isArray(e)) return [{ key: "", kind: "overlay-not-object", msg: "expected a mapping of desktop keys" }];
    let o = (r = t.includeInternal) !== null && r !== void 0 ? r : false, { list: a, set: l } = Fm(o), h = [], u = () => h.some(_i), f = {};
    for (let [k, y] of Object.entries(e)) {
      if (y === void 0) continue;
      if (l.has(k)) if (y === null || y === "") h.push({ key: k, kind: "explicit-empty", msg: `${k}: explicitly empty \u2014 set a value, or remove the key to use the Desktop default` });
      else f[k] = y;
      else if (Qe.tryGetFieldMeta(k) === void 0) h.push({ key: k, kind: "unknown-key", msg: `${k}: ${Bm(k, l)}` });
      else h.push({ key: k, kind: "refused-key", msg: `${k}: ${Wm(k)}` });
    }
    for (let k of ys.detectDeprecations(f, { keys: a })) h.push({ key: k.key, kind: "deprecated", msg: k.path.startsWith(k.key) ? _s.describeDeprecation(k) : `${k.key}: ${_s.describeDeprecation(k)}` });
    let m = (k) => (y, v) => {
      h.push({ key: k, kind: "drop-report", msg: y, dropKind: v !== null && v !== void 0 ? v : "drop" });
    }, b = /* @__PURE__ */ new Set(), g = ys.parseConfigRecord(f, { allowedKeys: a, onInvalid: (k, y, v) => {
      if (v === void 0) b.add(k), h.push({ key: k, kind: "parse-error", msg: y });
      else m(k)(y, v);
    } });
    for (let k of Object.keys(f)) {
      if (b.has(k)) continue;
      if (g[k] === void 0 && !h.some((y) => y.key === k && _i(y))) h.push({ key: k, kind: "not-representable", msg: `${k}: value not representable \u2014 the desktop parser dropped it` });
    }
    if (!u()) {
      let k = $l.parseBootstrapConfig(g, t.trustedOrigin, void 0, { includeInternal: o });
      for (let y of k.keyedParseErrors) {
        if (y.kind === "deprecated") continue;
        h.push({ key: y.key, kind: "intake-rejection", msg: y.msg });
      }
      for (let y of k.warnings) h.push({ key: "", kind: "intake-warning", msg: y });
      if (!u()) {
        let y = k.config;
        for (let v of Object.keys(g)) if (y[v] === void 0) h.push({ key: v, kind: "intake-deletion", msg: `${v}: every desktop would silently discard this value (the intake deletes it) \u2014 fix the value or remove the key` });
      }
      if (!u() && g.banner !== void 0) {
        let y = gs.resolveBannerConfig(g.banner);
        if (y.renders === false && y.reason === "invalid") h.push({ key: "banner", kind: "banner-suppressed", msg: `banner: every desktop would suppress this banner (invalid ${(i = y.field) !== null && i !== void 0 ? i : "value"} \u2014 colors are six-digit hex; text has a hard length cap)` });
        let v = g.banner.linkUrl, E = y.renders === false && y.reason === "disabled";
        if (!E && v !== void 0 && !gs.isValidBannerLinkUrl(v)) h.push({ key: "banner", kind: "banner-link-invalid", msg: "banner.linkUrl: every desktop would drop this link (must be an https URL)" });
        if (E && g.banner.text !== void 0) h.push({ key: "banner", kind: "banner-text-unused", msg: "banner.text is set but the banner is not enabled \u2014 it renders nowhere; set banner.enabled: true if it should show" });
      }
    }
    return h;
  }
});
var Bt = (0, import_chunk_w1d7ygsk.rt)(rd(), 1);
var To = Bt.default.Issuer, by = Bt.default.Strategy, ky = Bt.default.TokenSet, vy = Bt.default.errors, Ln = Bt.default.custom, mn = Bt.default.generators;
var sd = new TextEncoder(), vh = new TextDecoder();
function Ur(e) {
  return Uint8Array.fromBase64(e, { alphabet: "base64url" });
}
function Wt(e) {
  return new Uint8Array(e).toBase64({ alphabet: "base64url", omitPadding: true });
}
function $n(e) {
  return sd.encode(JSON.stringify(e));
}
function Mr(e) {
  return JSON.parse(vh.decode(e));
}
function gn(e) {
  let t = sd.encode(e);
  if (t.length !== e.length) throw TypeError("Expected ASCII text");
  return t;
}
class yt extends Error {
  code = "ERR_JOSE_GENERIC";
  name = this.constructor.name;
}
class Ro extends yt {
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
}
class wt extends yt {
  code = "ERR_JOSE_NOT_SUPPORTED";
}
class bt extends yt {
  code = "ERR_JWS_INVALID";
}
class Co extends yt {
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
}
class qe extends yt {
  code = "ERR_JWE_INVALID";
}
class Po extends yt {
  code = "ERR_JWE_DECRYPTION_FAILED";
}
class jr extends yt {
  code = "ERR_JWT_INVALID";
}
class Oo extends yt {
  payload;
  claim;
  reason;
  constructor(e, t, r = "unspecified", i = "unspecified") {
    super(e);
    this.payload = t;
    this.claim = r;
    this.reason = i;
  }
}
class Dn extends Oo {
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
}
class Io extends Oo {
  code = "ERR_JWT_EXPIRED";
}
var Br = { name: "ECDSA", namedCurve: "P-256", hash: "SHA-256" }, Wr = { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, Ah = { name: "HMAC", hash: "SHA-256" }, Th = 2048, Lo = /* @__PURE__ */ new WeakMap();
async function id(e, t = e.alg) {
  if (e.kty !== "EC" || t !== "ES256") throw new wt("Only an EC key for ES256 can be imported");
  let { alg: r, use: i, ...o } = e, a = Boolean(e.d || Reflect.get(e, "priv"));
  return import_crypto5.subtle.importKey("jwk", o, Br, e.ext ?? !a, Object(e).key_ops ?? [e.d ? "sign" : "verify"]);
}
async function ad(e, t) {
  if (typeof e !== "string" || !e.startsWith("-----BEGIN PRIVATE KEY-----")) throw TypeError('"pkcs8" must be PKCS#8 formatted string');
  let r = e.replace(/-----(?:BEGIN|END) PRIVATE KEY-----|\s/g, "");
  return import_crypto5.subtle.importKey("pkcs8", Uint8Array.fromBase64(r), Wr, false, ["sign"]);
}
async function Do(e, t, r) {
  if (e === "HS256" && r instanceof Uint8Array) return import_crypto5.subtle.importKey("raw", new Uint8Array(r), Ah, false, [t]);
  let i = t === "sign" ? e === "RS256" && Wr : e === "ES256" && Br;
  if (!i && e !== "HS256") throw new wt("Unsupported algorithm");
  if (r instanceof import_crypto5.KeyObject && r.type === "private" && r.asymmetricKeyType === "rsa" && !Lo.has(r)) Lo.set(r, r.toCryptoKey(Wr, false, ["sign"]));
  let o = r instanceof import_crypto5.KeyObject ? Lo.get(r) : r;
  if (!i || !import_util.types.isCryptoKey(o) || o.algorithm.name !== i.name || !o.usages.includes(t) || (i === Br ? Reflect.get(o.algorithm, "namedCurve") !== Br.namedCurve : Reflect.get(o.algorithm, "hash").name !== Wr.hash)) throw TypeError("The key is not of the kind that the algorithm takes");
  if (Reflect.get(o.algorithm, "modulusLength") < Th) throw TypeError("RS256 requires key modulusLength to be 2048 bits or larger");
  return o;
}
var ld = 12, cd = 16, xh = 32;
class Mo {
  claims;
  header;
  constructor(e) {
    if (!(0, import_chunk_ma3kja9f.T)(e)) throw TypeError("The claims have to be an object");
    this.claims = { ...e };
  }
  setProtectedHeader(e) {
    if ("crit" in e || "zip" in e) throw new wt("Neither crit nor zip is supported");
    return this.header = e, this;
  }
  setIssuer(e) {
    return this.claims.iss = e, this;
  }
  setSubject(e) {
    return this.claims.sub = e, this;
  }
  setAudience(e) {
    return this.claims.aud = e, this;
  }
  setJti(e) {
    return this.claims.jti = e, this;
  }
  setIssuedAt(e = No()) {
    return this.claims.iat = Gr(e), this;
  }
  setNotBefore(e) {
    return this.claims.nbf = Gr(e), this;
  }
  setExpirationTime(e) {
    if (typeof e === "number") return this.claims.exp = Gr(e), this;
    let [, t, r, i] = /^(-?)(\d+(?:\.\d+)?)([sh])$/.exec(e) ?? [];
    if (!r) throw TypeError("Invalid time period format");
    let o = Math.round(Number(r) * (i === "h" ? 3600 : 1));
    return this.claims.exp = No() + (t ? -o : o), this;
  }
}
class Gt extends Mo {
  async sign(e) {
    if (!this.header) throw new bt("No header");
    let t = `${Wt($n(this.header))}.${Wt($n(this.claims))}`, r = await Do(this.header.alg, "sign", e);
    return `${t}.${Wt(await import_crypto4.subtle.sign(r.algorithm, r, gn(t)))}`;
  }
}
class jo extends Mo {
  async encrypt(e) {
    if (this.header?.alg !== "dir" || this.header.enc !== "A256GCM") throw new wt("Unsupported algorithm");
    let t = Wt($n(this.header)), r = $n(this.claims), i = new Uint8Array((0, import_crypto4.randomBytes)(ld)), o = new Uint8Array(await import_crypto4.subtle.encrypt({ name: "AES-GCM", iv: i, additionalData: gn(t) }, await fd(e, "encrypt"), r));
    return `${t}..${[i, o.subarray(0, -cd), o.subarray(-cd)].map(Wt).join(".")}`;
  }
}
function Bo(e) {
  let t = e.split(".");
  try {
    let r = (t.length === 3 || t.length === 5) && Mr(Ur(t[0]));
    if ((0, import_chunk_ma3kja9f.T)(r)) return r;
  } catch {
  }
  throw TypeError("Not a token with a header");
}
async function Fr(e, t, { algorithms: r, ...i }) {
  let o = e.split(".");
  if (o.length !== 3) throw new bt("A signed token has three parts");
  let [a = "", l = "", h = ""] = o, u = pd(a, bt, "b64"), f = u.crit === void 0 || u.b64;
  if (typeof f !== "boolean") throw new bt("b64 is not a boolean");
  let m = Uo(u.alg, r, bt), b = typeof t === "function" ? await t(u) : t, g = `${a}.${l}`, k = f ? gn(g) : Buffer.from(g), y = Nn(h, bt), v = await Do(m, "verify", b);
  if (!await import_crypto4.subtle.verify({ name: v.algorithm.name, hash: "SHA-256" }, v, y, k).catch(() => false)) throw new Co("The signature is not good");
  if (!f) throw new jr("The claims are not encoded");
  return { payload: hd(u, Nn(l, bt), i) };
}
async function ud(e, t) {
  let r = e.split(".");
  if (r.length !== 5) throw new qe("An encrypted token has five parts");
  let [i = "", o, a = "", l = "", h = ""] = r, u = pd(i, qe);
  if (u.zip !== void 0) throw new wt("Compression is not supported");
  if (typeof u.enc !== "string" || !u.enc) throw new qe("No algorithm");
  Uo(u.alg, ["dir"], qe), Uo(u.enc, ["A256GCM"], qe);
  let f = t(u);
  if (o || !a || !h) throw new qe("A part is missing, or a key came with the token");
  let m = Nn(a, qe), b = Buffer.concat([Nn(l, qe), Nn(h, qe)]);
  if (m.length !== ld) throw new qe("The IV is not 96 bits");
  let g = await fd(f, "decrypt"), k;
  try {
    k = await import_crypto4.subtle.decrypt({ name: "AES-GCM", iv: m, additionalData: gn(i) }, g, b);
  } catch {
    throw new Po("The token could not be decrypted");
  }
  let y = hd(u, new Uint8Array(k), {});
  for (let v of ["iss", "sub", "aud"]) {
    let E = u[v];
    if (E !== void 0 && (v === "aud" ? JSON.stringify(E) !== JSON.stringify(y.aud) : E !== y[v])) throw Ht(y, v, "mismatch");
  }
  return { payload: y };
}
function No() {
  return Math.floor(Date.now() / 1e3);
}
function Gr(e) {
  if (!Number.isFinite(e)) throw TypeError("A time has to be a finite number");
  return e;
}
function Nn(e, t) {
  try {
    return Ur(e);
  } catch {
    throw new t("A part is not base64url");
  }
}
function pd(e, t, r) {
  let i;
  try {
    i = e && Mr(Ur(e));
  } catch {
    throw new t("The header is not JSON in base64url");
  }
  let o = (0, import_chunk_ma3kja9f.T)(i) ? i : {}, { crit: a } = o;
  if (a === void 0) return o;
  if (!Array.isArray(a) || a.length === 0 || a.some((l) => typeof l !== "string" || !l)) throw new t("crit is not a list of names");
  for (let l of a) {
    if (l !== r) throw new wt("crit names an unknown extension");
    if (o[l] === void 0) throw new t("crit names an absent parameter");
  }
  return o;
}
function Uo(e, t, r) {
  if (typeof e !== "string" || !e) throw new r("No algorithm");
  if (!Array.isArray(t) || !t.includes(e)) throw new Ro("The algorithm is not allowed");
  return e;
}
function fd(e, t) {
  if (!(e instanceof Uint8Array) || e.length !== xh) throw new qe("The key is not 256 bits");
  return import_crypto4.subtle.importKey("raw", new Uint8Array(e), "AES-GCM", false, [t]);
}
function hd(e, t, { issuer: r, audience: i, typ: o, requiredClaims: a = [], clockTolerance: l = 0, ...h }) {
  if (Object.keys(h).length > 0) throw TypeError("A check was asked for that is not made here");
  let u;
  try {
    u = Mr(t);
  } catch {
  }
  if (!(0, import_chunk_ma3kja9f.T)(u)) throw new jr("The claims are not a JSON object");
  if (o && (typeof e.typ !== "string" || dd(e.typ) !== dd(o))) throw Ht(u, "typ", "check_failed");
  let f = [...a, ...i === void 0 ? [] : ["aud"], ...r === void 0 ? [] : ["iss"]].findLast((g) => !Object.hasOwn(u, g));
  if (f !== void 0) throw Ht(u, f, "missing");
  if (r && ![r].flat().some((g) => g === u.iss)) throw Ht(u, "iss", "check_failed");
  if (i && ![i].flat().some((g) => [u.aud].flat().includes(g))) throw Ht(u, "aud", "check_failed");
  let m = No(), b = Gr(l);
  for (let g of ["iat", "nbf", "exp"]) {
    let k = u[g];
    if (k === void 0) continue;
    if (typeof k !== "number") throw Ht(u, g, "invalid");
    if (g === "nbf" && k > m + b) throw Ht(u, g, "check_failed");
    if (g === "exp" && k <= m - b) throw new Io("Expired", u, g, "check_failed");
  }
  return u;
}
function Ht(e, t, r) {
  return new Dn("A claim was refused", e, t, r);
}
function dd(e) {
  return (e.includes("/") ? e : `application/${e}`).toLowerCase();
}
function md(e) {
  return (Array.isArray(e) ? e : [e]).map((r) => {
    let i = (0, import_crypto3.createHash)("sha256").update(r).digest();
    return { kid: i.subarray(0, 8).toString("hex"), seal: i, sign: new TextEncoder().encode(r) };
  });
}
function gd(e, t) {
  return (r) => {
    let i = r.kid === void 0 ? e[0] : e.find((o) => o.kid === r.kid);
    if (!i) throw Error("unknown kid");
    return i[t];
  };
}
var Ph = 300;
function _d(e, t) {
  return Wo("oauth_state", e, t, Ph);
}
async function yd(e, t) {
  return await Go("oauth_state", e, t);
}
function Wo(e, t, r, i) {
  return new jo({ ...t, kind: e }).setProtectedHeader({ alg: "dir", enc: "A256GCM", kid: r[0].kid }).setIssuedAt().setExpirationTime(`${i}s`).encrypt(r[0].seal);
}
async function Go(e, t, r) {
  try {
    let { payload: i } = await ud(t, gd(r, "seal"));
    return i.kind === e ? i : null;
  } catch {
    return null;
  }
}
var wd = "claude-gateway";
function bd(e, t, r, i) {
  let o = new Gt(e).setProtectedHeader({ alg: "HS256", typ: "JWT", kid: t[0].kid }).setAudience(wd).setIssuedAt().setExpirationTime(`${r}h`);
  if (i) o.setIssuer(i);
  return o.sign(t[0].sign);
}
async function Fo(e, t, r) {
  try {
    let { payload: i } = await Fr(e, gd(t, "sign"), { algorithms: ["HS256"], audience: wd, ...r && { issuer: r } });
    return i;
  } catch {
    return null;
  }
}
var Ko = "urn:ietf:params:oauth:grant-type:device_code", zo = 5, Ft = 600, vd = "BCDFGHJKMNPQRSTVWXYZ", qo = 8;
function Ed() {
  let e = (0, import_crypto2.randomBytes)(qo), t = "";
  for (let r = 0; r < qo; r++) {
    if (r === qo / 2) t += "-";
    t += vd[e[r] % vd.length];
  }
  return t;
}
function Sd() {
  return mn.random();
}
function Ih(e) {
  return e.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function qr(e, t) {
  return Wo("device_grant", { r: e }, t, Ft);
}
async function Kr(e, t) {
  let r = await Go("device_grant", e, t);
  return r?.r ? r.r : null;
}
function Jo(e) {
  return `device:dc:${(0, import_chunk_ccm69jjy.Je)(e)}`;
}
function zr(e) {
  return `device:uc:${Ih(e)}`;
}
function Jr(e, t) {
  return `rl:${e}:${t}`;
}
var Kt = (0, import_chunk_t57w17k7.de)({ enabled: false, nativeCAs: void 0 }, (e) => {
  e.enabled = false, e.nativeCAs = void 0;
});
function Ad() {
  return Error("network: no CA certificate could be loaded, so the gateway cannot verify the servers it connects to. Check CLAUDE_CODE_CERT_STORE and the NODE_EXTRA_CA_CERTS file");
}
function Td() {
  return process.env.NO_PROXY || process.env.no_proxy || void 0;
}
function Lh(e) {
  try {
    return Yr.createSecureContext({ ca: e }), true;
  } catch {
    return false;
  }
}
function Rd() {
  let e = (0, import_chunk_3jjr3wje.yv)();
  if (!Kt.nativeCAs || Kt.nativeCAs.from !== e) Kt.nativeCAs = { from: e, blocks: (0, import_chunk_3jjr3wje.JIs)(e).filter(Lh) };
  return Kt.nativeCAs.blocks;
}
function kt() {
  let e = Rd();
  if (e.length === 0) throw Ad();
  return e;
}
function Vr(e, t) {
  return fetch(e, { ...t, tls: { ...t?.tls, ca: kt() } });
}
function Mn() {
  return { transporterOptions: { fetchImplementation: Vr, timeout: 1e4 } };
}
async function Yo(e, t) {
  let r = await e.getClient().catch(() => {
    return;
  });
  if (!r || e.jsonContent?.type !== "external_account") return;
  let i = false;
  r.on("tokens", (o) => {
    let a = (o.expiry_date ?? 1 / 0) - Date.now(), l = a <= r.eagerRefreshThresholdMillis;
    if (l && !i) (0, import_chunk_s95w59kf.xo)("warn", `upstream ${t}: Google issued an access token that expires in ${Math.round(a / 1e3)}s, because the token exchanged for it (credential_source in the Google credentials file) expires then. Unless that token is renewed first, requests to this upstream will fail.`);
    i = l;
  });
}
function xd() {
  let e = (0, import_chunk_3jjr3wje.JIs)((0, import_chunk_3jjr3wje.yv)()), t = e.filter(import_chunk_3jjr3wje.EXi);
  if (t.length === 0) throw Ad();
  Yr.setDefaultCACertificates(t);
  let r = e.length - Rd().length;
  if (r > 0) (0, import_chunk_s95w59kf.xo)("warn", `network: ${r} certificate block(s) in the CA list cannot be read and are skipped. Check the NODE_EXTRA_CA_CERTS file, or the OS certificate store, for a damaged or cut-off certificate`);
  if (Kt.enabled = false, !import_chunk_c203g5kd.s.CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY) return;
  let i = (0, import_chunk_3jjr3wje.DE)();
  if (!i) {
    (0, import_chunk_s95w59kf.xo)("warn", "CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY is set but no usable HTTPS_PROXY/HTTP_PROXY is set on the gateway, so it is NOT active and hostnames are still resolved and checked locally; set HTTPS_PROXY to your forward proxy");
    return;
  }
  if (import_chunk_c203g5kd.s.CLAUDE_GATEWAY_ALLOW_LOOPBACK) {
    (0, import_chunk_s95w59kf.xo)("warn", "CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY is set but so is CLAUDE_GATEWAY_ALLOW_LOOPBACK, so it is NOT active and hostnames are still resolved and checked locally; a loopback sidecar cannot be combined with proxy-only egress \u2014 give the collector or IdP an address the proxy can reach and unset CLAUDE_GATEWAY_ALLOW_LOOPBACK");
    return;
  }
  let o = Td();
  if (o) {
    (0, import_chunk_s95w59kf.xo)("warn", `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY is set but NO_PROXY="${o}", so it is NOT active and hostnames are still resolved and checked locally; with this setting every destination, internal ones included, goes through the proxy: set NO_PROXY and no_proxy to an empty value on the gateway pod (that overrides one your platform injects) and allow those hosts in the proxy instead`);
    return;
  }
  Kt.enabled = true, (0, import_chunk_s95w59kf.xo)("info", `network: proxy ${new URL(i).host} is the egress boundary; outbound requests hand it hostnames and rely on its allowlist instead of the gateway's own address check`);
}
function _n() {
  return Kt.enabled && !!(0, import_chunk_3jjr3wje.DE)() && !Td() && !import_chunk_c203g5kd.s.CLAUDE_GATEWAY_ALLOW_LOOPBACK;
}
var Cd = "https://oauth2.googleapis.com/token", Dh = "https://admin.googleapis.com/admin/directory/v1/groups", Nh = "https://www.googleapis.com/auth/admin.directory.group.readonly";
async function Pd(e) {
  let t = await (0, import_promises2.readFile)(e.service_account_json_path, "utf8"), r = (0, import_chunk_w578pjby.te)(t);
  if (typeof r.client_email !== "string" || typeof r.private_key !== "string") throw Error(`oidc.google_groups: ${e.service_account_json_path} is not a Google service-account key (missing client_email or private_key)`);
  let i = await ad(r.private_key, "RS256"), o;
  async function a() {
    let l = Math.floor(Date.now() / 1e3);
    if (o && o.exp - 60 > l) return o.token;
    let h = await new Gt({ scope: Nh }).setProtectedHeader({ alg: "RS256", typ: "JWT" }).setIssuer(r.client_email).setSubject(e.admin_email).setAudience(Cd).setIssuedAt(l).setExpirationTime(l + 3600).sign(i), u = await Vr(Cd, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: h }), signal: AbortSignal.timeout(1e4) });
    if (!u.ok) throw Error(`google token endpoint ${u.status}: ${(await u.text()).slice(0, 500)}`);
    let f = await u.json();
    if (typeof f.access_token !== "string") throw Error("google token endpoint returned no access_token");
    return o = { token: f.access_token, exp: l + (f.expires_in ?? 3600) }, f.access_token;
  }
  return async function(h) {
    try {
      let u = await a(), f = [], m;
      for (let b = 0; b < 50; b++) {
        let g = new URL(Dh);
        if (g.searchParams.set("userKey", h), g.searchParams.set("maxResults", "200"), m) g.searchParams.set("pageToken", m);
        let k = await Vr(g, { headers: { authorization: `Bearer ${u}` }, signal: AbortSignal.timeout(1e4) });
        if (!k.ok) {
          if (k.status === 401) o = void 0;
          throw Error(`directory API ${k.status}: ${(await k.text()).slice(0, 500)}`);
        }
        let y = await k.json();
        for (let v of y.groups ?? []) if (typeof v.email === "string") f.push(v.email.toLowerCase());
        if (m = y.nextPageToken, !m) break;
      }
      return f;
    } catch (u) {
      let f = u instanceof Error ? u.message : String(u);
      throw (0, import_chunk_s95w59kf.xo)("warn", `google_groups lookup failed: ${f}`), Object.assign(Error(`google_groups lookup failed: ${f}`), { code: "GOOGLE_GROUPS_UNAVAILABLE" });
    }
  };
}
var Wn = (0, import_chunk_w1d7ygsk.rt)(Xr(), 1);
var Vo = (0, import_chunk_w1d7ygsk.rt)(Xr(), 1);
function Zr() {
  return import_chunk_c203g5kd.s.CLAUDE_GATEWAY_ALLOW_LOOPBACK;
}
function Bn(e) {
  return Zr() && Ke(e);
}
function Ke(e) {
  try {
    let t = new URL(e).hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.$/, "");
    if (t === "localhost") return true;
    let r = Vo.parse(t).range();
    return r === "loopback" || r === "unspecified";
  } catch {
    return false;
  }
}
function Qr(e) {
  let t;
  try {
    t = Vo.parse(e.replace(/^\[|\]$/g, ""));
  } catch {
    return false;
  }
  let i = (t.kind() === "ipv6" && t.isIPv4MappedAddress() ? t.toIPv4Address() : t).range();
  if (i === "loopback" || i === "unspecified") return !Zr();
  return (0, import_chunk_akwvpp7y.pF)(t.toString().replace(/%.*$/, ""));
}
var Uh = /* @__PURE__ */ new Set(["metadata.google.internal", "metadata.goog", "metadata", "instance-data", "instance-data.ec2.internal"]);
function Ee(e) {
  try {
    let t = new URL(e);
    if (t.protocol !== "https:" && t.protocol !== "http:") return false;
    let r = t.hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.$/, "");
    if (r.split(".").includes("")) return false;
    if (Uh.has(r)) return false;
    return !Qr(r);
  } catch {
    return false;
  }
}
var Id = "ECONNREFUSED_SSRF: blocked (cloud metadata / link-local)", Ld = "ECONNREFUSED_SSRF: blocked (loopback; set CLAUDE_GATEWAY_ALLOW_LOOPBACK=1 in the gateway environment to allow it)";
function $d(e) {
  let t = Wn.parse(e).range();
  return t === "loopback" || t === "unspecified" ? Ld : Id;
}
var Hn = (e, t, r) => {
  let i = typeof t === "function" ? {} : t, o = typeof t === "function" ? t : r;
  (0, import_dns.lookup)(e, { ...i, all: true }, (a, l) => {
    if (a) return o(a);
    if (l.length === 0) return o(Object.assign(Error(`getaddrinfo ENOTFOUND ${e}`), { code: "ENOTFOUND" }));
    for (let { address: u } of l) if (Qr(u)) return o(Error(`${$d(u)}: ${e} \u2192 ${u}`));
    let h = l.find((u) => u.family === 4) ?? l[0];
    if (i.all) return o(null, [h]);
    return o(null, h.address, h.family);
  });
};
async function zt(e, t) {
  if (!Ee(e)) throw Error(`${Ke(e) ? Ld : Id}: ${e}`);
  let r = new URL(e);
  r.username = "", r.password = "";
  let i = r.hostname.replace(/^\[|\]$/g, "").replace(/\.$/, ""), { honorNoProxy: o, ...a } = t ?? {}, l = { ...a, redirect: "manual", tls: { ...a.tls, ca: kt() } };
  if (_n()) {
    if ((0, import_chunk_akwvpp7y.pF)(i)) throw Error("ECONNREFUSED_SSRF: blocked loopback/metadata host via proxy");
    if (!Wn.isValid(i)) r.hostname = i;
    let b = { ...l, proxy: t?.proxy ?? (0, import_chunk_3jjr3wje.DE)() };
    return fetch(r, b);
  }
  if (Wn.isValid(i)) return fetch(r, l);
  if (o && (0, import_chunk_3jjr3wje.DE)() && (0, import_chunk_3jjr3wje.yk)(e)) return Gh(r, l);
  let h = await import_dns.promises.lookup(i, { all: true });
  if (h.length === 0) throw Object.assign(Error(`getaddrinfo ENOTFOUND ${i}`), { code: "ENOTFOUND" });
  for (let { address: b } of h) if (Qr(b)) throw Error(`${$d(b)}: ${i} \u2192 ${b}`);
  let u = h.find((b) => b.family === 4) ?? h[0], f = r.host;
  r.hostname = u.family === 6 ? `[${u.address}]` : u.address;
  let m = new Headers(l.headers);
  return m.set("host", f), fetch(r, { ...l, headers: m, ...r.protocol === "https:" && { tls: { ...l.tls, serverName: i, checkServerIdentity: (b, g) => (0, import_tls.checkServerIdentity)(i, g) } } });
}
async function Gh(e, t) {
  let r = new Headers(t.headers);
  if (r.set("host", e.host), !r.has("user-agent")) r.set("user-agent", navigator.userAgent);
  if (!r.has("accept")) r.set("accept", "*/*");
  let i = t.body == null ? void 0 : Buffer.from(await new Response(t.body).arrayBuffer());
  return new Promise((o, a) => {
    let l = (e.protocol === "https:" ? import_https.request : import_http2.request)(e, { method: t.method, headers: Object.fromEntries(r), ...t.signal && { signal: t.signal }, lookup: Hn }, (h) => {
      h.resume();
      try {
        o(new Response(null, { status: h.statusCode ?? 502, statusText: h.statusMessage }));
      } catch (u) {
        a(u);
      }
    });
    l.on("error", (h) => a(t.signal?.aborted ? t.signal.reason : h)), l.end(i);
  });
}
async function Dd() {
  if (Zr()) return;
  try {
    await fetch("http://169.254.169.254/", { signal: AbortSignal.timeout(200), redirect: "manual" }), (0, import_chunk_s95w59kf.xo)("warn", "pod can reach cloud metadata endpoint (169.254.169.254); apply egress NetworkPolicy (see src/gateway/docs/docker/network-policy.yaml)");
  } catch {
  }
}
function es(e, t, r, i) {
  return (0, import_chunk_5appeerh.qt)(zt(e, { ...t, ...(0, import_chunk_3jjr3wje.wl)({ url: e }), timeout: false, signal: AbortSignal.timeout(r) }), r + 500, i);
}
var Zo = "https://api.anthropic.com/api/oauth/cri", Tw = `${Zo}/jwks.json`, Qo = "cri+jwt";
function Nd(e) {
  try {
    return Bo(e).typ === Qo;
  } catch {
    return false;
  }
}
var ts = "ES256", Fh = 60, qh = 1e4, Xo = 216e5, Kh = 6e5, zh = 6e4;
function Ud(e) {
  let t = new Set(e.orgAllowlist.map((y) => y.toLowerCase())), r = [...e.audience], i = e.issuer ?? Zo, o = e.jwksUrl ?? `${i}/jwks.json`;
  if (e.jwksUrl !== void 0) {
    if (!Ke(o)) throw Error("cri.jwks_url must be a loopback URL \u2014 it exists for tests against local mocks, and honoring an external URL here would let it substitute the admission authority (its keys would mint CRI principals). Remove it.");
    if (!Bn(o)) throw Error("cri.jwks_url targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every JWKS fetch at runtime. Set the escape (tests) or remove the override.");
    (0, import_chunk_s95w59kf.xo)("warn", `cri.jwks_url is set \u2014 CRI JWT verification keys are NOT coming from ${i}/jwks.json. This override exists for tests; never set it in production.`);
  } else if (i !== Zo) {
    if (!Ke(o)) {
      if (!o.startsWith("https://")) throw Error("cri.issuer must be https:// (http:// allowed for loopback only) \u2014 the verification JWKS derives from it, and keys fetched over plaintext invite substitution.");
      if (!Ee(o)) throw Error("cri.issuer must not target a cloud metadata endpoint \u2014 the verification JWKS derives from it.");
    } else if (!Bn(o)) throw Error("cri.issuer targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every derived-JWKS fetch at runtime. Set the escape (tests) or remove the issuer override.");
  }
  let a = /* @__PURE__ */ new Map(), l = 0, h = 0, u = 0, f = null;
  async function m() {
    let y;
    try {
      y = await es(o, { method: "GET" }, qh, "JWKS fetch timed out");
    } catch (S) {
      return (0, import_chunk_s95w59kf.xo)("warn", `cri jwks unreachable: ${(0, import_chunk_jv7av99m.d)(S)}`), false;
    }
    if (!y.ok) return y.body?.cancel().catch(() => {
    }), (0, import_chunk_s95w59kf.xo)("warn", `cri jwks fetch returned ${y.status}`), false;
    let v;
    try {
      v = await y.json();
    } catch {
      return (0, import_chunk_s95w59kf.xo)("warn", "cri jwks fetch returned unparseable JSON"), false;
    }
    if (typeof v !== "object" || v === null || !Array.isArray(v.keys)) return (0, import_chunk_s95w59kf.xo)("warn", "cri jwks fetch returned a non-JWKS body"), false;
    let E = /* @__PURE__ */ new Map();
    for (let S of v.keys) {
      if (typeof S !== "object" || S === null) continue;
      let O = S;
      if (O.kty !== "EC" || O.crv !== "P-256" || typeof O.kid !== "string" || O.kid.length === 0) continue;
      try {
        let x = await id({ ...O, alg: ts }, ts);
        E.set(O.kid, x);
      } catch (x) {
        (0, import_chunk_s95w59kf.xo)("warn", `cri jwks key ${O.kid} failed to import: ${(0, import_chunk_jv7av99m.d)(x)}`);
      }
    }
    if (E.size === 0) return (0, import_chunk_s95w59kf.xo)("warn", "cri jwks fetch yielded no usable ES256 keys \u2014 keeping previous set"), false;
    return a = E, l = Date.now(), h = l + b(y), true;
  }
  function b(y) {
    let v = y.headers.get("cache-control") ?? "", E = /(?:^|[,\s])max-age=(\d+)/i.exec(v);
    if (!E) return Kh;
    return Math.min(Number(E[1]) * 1e3, Xo / 2);
  }
  function g(y = false) {
    if (f) return f;
    let v = Date.now();
    if (!y && v - u < zh) return Promise.resolve(false);
    return u = v, f = m().finally(() => {
      f = null;
    }), f;
  }
  async function k() {
    let y = Date.now();
    if (a.size > 0 && y < h) return a;
    if (a.size > 0 && y - l <= Xo) return g().catch(() => {
    }), a;
    if (await g(), a.size === 0) return null;
    if (Date.now() - l > Xo) return null;
    return a;
  }
  return { async prime() {
    if (!await g(true)) (0, import_chunk_s95w59kf.xo)("warn", "cri jwks prefetch failed \u2014 the CRI wall will answer 503 until the first successful fetch (non-CRI traffic is unaffected)");
  }, async authenticate(y, v, E, S) {
    let O = (z, L) => ((0, import_chunk_s95w59kf.Tte)("auth.denied", { request_id: v, reason: `cri_${z}`, path: S, client_ip: E, ...L !== void 0 && { org: L } }), { ok: false, status: 401, reason: z, ...L !== void 0 && { org: L } }), x = await k();
    if (x === null) return (0, import_chunk_s95w59kf.Tte)("auth.denied", { request_id: v, reason: "cri_jwks_unavailable", path: S, client_ip: E }), { ok: false, status: 503, reason: "jwks_unavailable" };
    let P;
    try {
      P = Bo(y);
    } catch {
      return O("invalid_token");
    }
    if (P.typ !== Qo || P.alg !== ts) return O("invalid_token");
    if (typeof P.kid !== "string" || P.kid.length === 0) return O("invalid_token");
    let R = x.get(P.kid);
    if (R === void 0) {
      if (await g(), R = a.get(P.kid), R === void 0) return O("invalid_token");
    }
    let D;
    try {
      D = (await Fr(y, R, { algorithms: [ts], issuer: i, audience: r, typ: Qo, clockTolerance: Fh, requiredClaims: ["exp", "iat", "aud", "sub", "org", "scope"] })).payload;
    } catch (z) {
      if (z instanceof Dn && z.claim === "aud" && z.reason === "check_failed") return O("audience_mismatch");
      return O("invalid_token");
    }
    if (D.scope !== "inference") return O("scope_missing");
    let U = typeof D.org === "string" ? D.org.toLowerCase() : null;
    if (U === null || U.length === 0) return O("invalid_token");
    if (!t.has(U)) return O("org_not_allowed", U);
    if (typeof D.sub !== "string" || D.sub.length === 0) return O("invalid_token");
    let H = typeof D.act === "object" && D.act !== null && typeof D.act.sub === "string" ? D.act.sub : void 0;
    return { ok: true, claims: { sub: D.sub, cri: true, org: U, ...H !== void 0 && { act: { sub: H } }, ...typeof D.exp === "number" && { exp: D.exp }, ...typeof D.iat === "number" && { iat: D.iat } } };
  } };
}
class jd extends import_chunk_3jjr3wje.NMr {
  async connect(e, t) {
    let r = t.host, i = t;
    if (r && _n()) {
      let o = r.toLowerCase().replace(/\.$/, "");
      if ((0, import_chunk_akwvpp7y.pF)(o)) throw Error("ECONNREFUSED_SSRF: blocked loopback/metadata host via proxy");
      if (!(0, import_net.isIP)(r)) i = { ...i, host: o, servername: o };
    } else if (r && !(0, import_net.isIP)(r)) {
      let o = await new Promise((a, l) => Hn(r, {}, (h, u) => h ? l(h) : a(u)));
      i = { ...i, host: o, servername: r };
    }
    return super.connect(e, i);
  }
}
function Bd(e, t) {
  let r = new jd(e);
  if (t) r.options = { ...r.options, ca: t };
  return r;
}
function Xh(e) {
  for (let t of [e.jwks_uri, e.token_endpoint, e.userinfo_endpoint]) if (t && !Ee(t)) throw Error(`OIDC discovery returned a blocked endpoint: ${t}`);
}
async function Gd(e) {
  let t = { blockedRemoved: false }, r = e.ca_cert_pem && (0, import_chunk_3jjr3wje._Xi)(e.ca_cert_pem, "oidc.ca_cert_pem", t);
  if (e.ca_cert_pem && !r && !t.blockedRemoved) throw Error("oidc.ca_cert_pem holds no PEM certificate the gateway can use (each needs a -----BEGIN CERTIFICATE----- line, base64 lines, and a -----END CERTIFICATE----- line of its own, with no stray markers or NUL bytes around it), so the gateway cannot verify the identity provider. Set it to the identity provider's CA certificates in PEM form.");
  if (e.ca_cert_pem && !r) throw Error("oidc.ca_cert_pem has no usable certificate once those on the CLI's deny list are removed, so the gateway can't verify the identity provider. Set oidc.ca_cert_pem to the identity provider's intermediate certificates and the self-signed certificate of the root named as their issuer, with no cross-signed certificates. If oidc.ca_cert_pem already holds only those, the identity provider needs a certificate from another CA");
  if (t.blockedRemoved) (0, import_chunk_s95w59kf.xo)("warn", "oidc.ca_cert_pem: ignored one or more certificates on the CLI's deny list. Set oidc.ca_cert_pem to the identity provider's intermediate certificates and the self-signed certificate of the root named as their issuer, with no cross-signed certificates. If oidc.ca_cert_pem already holds only those, the identity provider needs a certificate from another CA");
  let i = (0, import_chunk_3jjr3wje.DE)(), o = e.use_proxy ?? _n(), a = o ? i : void 0;
  if (e.use_proxy && !i) (0, import_chunk_s95w59kf.xo)("warn", "oidc.use_proxy is set but no usable HTTPS_PROXY/HTTP_PROXY is set; IdP requests go direct");
  else if (!o && e.use_proxy === void 0 && i && !(0, import_chunk_3jjr3wje.yk)(e.issuer)) (0, import_chunk_s95w59kf.xo)("warn", "oidc: a proxy is set (HTTPS_PROXY/HTTP_PROXY) but IdP requests currently go direct; this will follow the proxy by default in a future release \u2014 set oidc.use_proxy: true to adopt now, or false to keep direct and silence this warning");
  let l = a ? Bd(a, r) : void 0;
  if (a) (0, import_chunk_s95w59kf.xo)("info", `oidc: IdP requests use proxy ${new URL(a).host}${e.use_proxy ? "; hosts in NO_PROXY go direct" : ""}`);
  let h = (b, g) => ({ ...g, ...l && !(0, import_chunk_3jjr3wje.yk)(b.href) ? { agent: l } : { lookup: Hn }, ...r && { ca: r } });
  To[Ln.http_options] = h;
  let u = await To.discover(e.discovery_url ?? e.issuer);
  u[Ln.http_options] = h, Xh(u.metadata);
  let f = u.metadata.token_endpoint_auth_methods_supported, m = new u.Client({ client_id: e.client_id, client_secret: e.client_secret, response_types: ["code"], token_endpoint_auth_method: e.token_endpoint_auth_method === "private_key_jwt" ? "none" : e.token_endpoint_auth_method ?? (f && !f.includes("client_secret_post") ? "client_secret_basic" : "client_secret_post"), ...e.id_token_signed_response_alg && { id_token_signed_response_alg: e.id_token_signed_response_alg } }, void 0, e.additional_authorized_parties ? { additionalAuthorizedParties: e.additional_authorized_parties } : void 0);
  if (m[Ln.http_options] = h, e.clock_skew_seconds !== void 0) m[Ln.clock_tolerance] = e.clock_skew_seconds;
  return m;
}
var Fd = 36e5, Hd = 24 * Fd;
function qd(e, t, r, i = Date.now) {
  if (!r) throw Error("oidc: the IdP discovery document has no token_endpoint, which private_key_jwt needs as the assertion audience");
  let o = (0, import_crypto6.createPrivateKey)(t.private_key_pem), a = new import_crypto6.X509Certificate(t.certificate_pem), l = (0, import_crypto6.createHash)("sha1").update(a.raw).digest("base64url"), h = (0, import_crypto6.createHash)("sha256").update(a.raw).digest("base64url");
  (0, import_chunk_s95w59kf.xo)("info", `oidc: client authentication private_key_jwt; certificate ${(a.subject || "(no subject)").replaceAll(`
`, ", ")}, SHA-1 thumbprint ${a.fingerprint.replaceAll(":", "")}, expires ${a.validTo}`);
  let u = Number.NEGATIVE_INFINITY;
  function f() {
    let m = i(), b = a.validToDate.getTime() - m, g = b < 0 || m < a.validFromDate.getTime();
    if (!g && b > 30 * Hd) return;
    let k = m - u;
    if (k >= 0 && k < (g ? Fd : Hd)) return;
    u = m, (0, import_chunk_s95w59kf.xo)("warn", g ? `oidc: the client_assertion certificate is not valid now (valid ${a.validFrom} to ${a.validTo}); the IdP will refuse sign-ins and refreshes until it is replaced` : `oidc: the client_assertion certificate (SHA-1 thumbprint ${a.fingerprint.replaceAll(":", "")}) expires ${a.validTo}; after that the IdP will refuse sign-ins and refreshes. To rotate: add a new certificate at the IdP and keep this one, restart every replica with the new key and certificate in oidc.client_assertion, then remove this one at the IdP`);
  }
  return f(), async () => {
    f();
    let m = Math.floor(i() / 1e3);
    return { client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer", client_assertion: await new Gt({}).setProtectedHeader({ alg: "RS256", typ: "JWT", x5t: l, "x5t#S256": h }).setIssuer(e).setSubject(e).setAudience(r).setJti((0, import_crypto6.randomUUID)()).setIssuedAt(m).setNotBefore(m).setExpirationTime(m + 300).sign(o) };
  };
}
function Kd(e, t) {
  let r = e.email_verified;
  if (r !== void 0 && r !== true && r !== "true") throw Error("id_token email is not verified");
  if (!t?.length) return;
  let i = e.email;
  if (typeof i !== "string" || !i.includes("@")) throw Error("id_token missing email claim \u2014 configure your IdP to include `email` in the id_token, or set oidc.email_claim if it uses a different claim name");
  let o = i.slice(i.lastIndexOf("@") + 1).toLowerCase();
  if (!t.includes(o)) throw Error("email domain not allowed");
}
function zd(e, t) {
  if (!t?.length) return;
  let r = new Set(t);
  if (!e?.some((i) => r.has(i))) throw Error("user is not a member of an allowed group");
}
function Gn(e, t) {
  if (!t.startsWith("/")) return e[t];
  let r = e;
  for (let i of t.slice(1).split("/")) {
    if (r === null || typeof r !== "object") return;
    let o = i.replace(/~1/g, "/").replace(/~0/g, "~");
    r = r[o];
  }
  return r;
}
function ns(e, t) {
  let r = Array.isArray(t) ? t : [t];
  for (let i of r) {
    let o = Gn(e, i);
    if (o !== void 0 && o !== null) return o;
  }
  return;
}
var Qh = `
:root{--err:#a63244}
@media (prefers-color-scheme:dark){:root{--err:#f08c99}}
.sub strong{display:block;margin:8px 0;color:var(--ink);font-weight:400;text-wrap:balance}
form{position:relative;max-width:360px;margin:28px auto 0}
.refused{position:absolute;top:100%;left:0;right:0;margin:12px 0 0;padding-bottom:24px;color:var(--err);text-wrap:pretty}
.under{position:absolute;top:100%;left:0;right:0}
.under .refused{position:static}
.notice{padding:14px 0 32px;border-top:1px solid var(--line);font-size:13.5px;text-align:start;overflow-wrap:anywhere;text-wrap:pretty}
.notice:first-child{margin-top:28px}
.notice p{margin:0}
.notice p+p{margin-top:2px;color:var(--ink2)}
.code-input,.code-display{width:100%;overflow-wrap:anywhere;font:24px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.25em;text-indent:.25em;text-align:center;padding:18px 16px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--ink);margin-bottom:12px}
.code-input{border-color:var(--ink2);text-transform:uppercase;outline:none}
.code-input:focus{border-color:#2A78D6;box-shadow:0 0 0 3px rgba(42,120,214,.18)}
button.go{appearance:none;border:none;width:100%;background:var(--ink);color:var(--bg);font:inherit;padding:13px 20px;border-radius:8px;cursor:pointer}
button.go:hover{opacity:.85}
button.deny{appearance:none;border:1px solid var(--line);width:100%;background:none;color:var(--ink);font:inherit;padding:12px 20px;border-radius:8px;cursor:pointer;margin-top:8px}
button.deny:hover{background:var(--card);border-color:var(--ink2)}
button.go:focus-visible,button.deny:focus-visible{outline:2px solid #2A78D6;outline-offset:2px}
@media (max-width:520px){.code-input,.code-display{font-size:22px}}`, em = ` \u2590\u259B\u2588\u2588\u2588\u259B\u2588
\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580
 \u259D\u259D   \u259D\u259D`;
function yn(e, t) {
  let r = t?.closeTab ? (0, import_crypto7.randomBytes)(16).toString("base64url") : void 0, i = t?.formAction ? `'self' ${t.formAction}` : "'self'";
  return new Response((0, import_chunk_x8rfwr2t.loi)(e, { css: Qh, closeTab: r !== void 0 && { nonce: r } }), { headers: { "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": `default-src 'none'; style-src 'unsafe-inline'; font-src data:; ${r ? `script-src 'nonce-${r}'; ` : ""}frame-ancestors 'none'; form-action ${i}; base-uri 'none'`, "Cache-Control": "no-store", Pragma: "no-cache" } });
}
function Jd(e, t, r) {
  let i = (0, import_chunk_x8rfwr2t.yUe)(e), o = t === null ? "(none \u2014 customer-routed inference only)" : (0, import_chunk_x8rfwr2t.yUe)(new URL(t).hostname);
  return new Response(`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Claude gateway for Amazon Bedrock, Google Cloud, and Microsoft Foundry</title>
</head>
<body style="font-family: monospace; margin: 1em;">
<pre style="line-height: 1; margin: 0 0 1em 0;">${em}</pre>
<pre style="margin: 0;">
<b>Claude gateway for Amazon Bedrock, Google Cloud, and Microsoft Foundry</b>

Running at ${i}

To connect from Claude Code:
  Your admin provisions this gateway URL via managed settings
  (forceLoginGatewayUrl) \u2014 then /login connects here directly.

Identity provider   ${o}
Discovery           <a href="/.well-known/oauth-authorization-server">/.well-known/oauth-authorization-server</a>
Version             ${(0, import_chunk_x8rfwr2t.yUe)(r)}
</pre>
</body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; form-action 'none'; base-uri 'none'", "Cache-Control": "no-store" } });
}
function Fn(e) {
  let { prefill: t, error: r, loginNotice: i, idpOrigin: o } = e, a = r ? `<p class="refused" id="e" role="alert">${(0, import_chunk_x8rfwr2t.yUe)(r)}</p>` : "", l = i ? `<div class="under">${a}<aside class="notice"><p>Notice from ${(0, import_chunk_x8rfwr2t.yUe)(i.host)}</p><p dir="auto">${(0, import_chunk_x8rfwr2t.yUe)(i.text)}</p></aside></div>` : a;
  if (t) return yn(`<h1>Approve sign-in?</h1>
<p class="sub">A device is requesting access to Claude Code. <strong>Only continue if this code matches the one shown on your device.</strong> If you didn't start this, select Deny.</p>
<form method="post" action="/device">
  <div class="code-display">${(0, import_chunk_x8rfwr2t.yUe)(t)}</div>
  <input type="hidden" name="user_code" value="${(0, import_chunk_x8rfwr2t.yUe)(t)}">
  <button class="go" type="submit">This matches my device \u2014 continue</button>
  <button class="deny" type="submit" formaction="/device/deny">Deny</button>
${l}</form>`, { formAction: o });
  return yn(`<h1 id="h">Enter the code from your device.</h1>
<p class="sub">Claude Code shows a short code when you sign in. Enter it here to connect \u2014 then you'll sign in with your company identity provider.</p>
<form method="post" action="/device">
  <input class="code-input" name="user_code" aria-labelledby="h"${r ? ' aria-describedby="e"' : ""} inputmode="latin" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" placeholder="XXXX-XXXX" maxlength="9" autofocus required>
  <button class="go" type="submit">Continue</button>
${l}</form>`, { formAction: o });
}
function ei(e) {
  if (!e) return yn(`<h1>This sign-in isn&rsquo;t waiting for approval.</h1>
<p class="sub">It may have expired, or already been approved or stopped. If you approved a sign-in you didn&rsquo;t start, tell your IT administrator now.</p>`);
  return yn(`${(0, import_chunk_x8rfwr2t.G9o)()}
<h1>You stopped this sign-in.</h1>
<p class="sub">No access was granted, and the code is no longer valid. If you didn&rsquo;t start this sign-in, tell your IT administrator. If you stopped your own sign-in by mistake, start it again from your device.</p>`);
}
function Jt(e) {
  if (e) return yn(`${(0, import_chunk_x8rfwr2t.G9o)()}
<h1>We couldn&rsquo;t finish signing you in.</h1>
<p class="sub">Close this tab and try signing in again. If the error persists, share the message below with your IT administrator.</p>
<div class="detail">${(0, import_chunk_x8rfwr2t.yUe)(e)}</div>`);
  return yn(`${(0, import_chunk_x8rfwr2t.aoi)()}
<h1>You&rsquo;re signed in.</h1>
<p class="sub">Return to your device \u2014 it should connect within a few seconds. You can close this tab.</p>`, { closeTab: true });
}
var Be = (0, import_chunk_w1d7ygsk.rt)(Xr(), 1);
function ri(e) {
  if (e.includes("/")) {
    let [r, i] = Be.parseCIDR(e);
    if (r instanceof Be.IPv6 && r.isIPv4MappedAddress() && i >= 96) return [r.toIPv4Address(), i - 96];
    return [r, i];
  }
  let t = Be.parse(e);
  if (t instanceof Be.IPv6 && t.isIPv4MappedAddress()) return [t.toIPv4Address(), 32];
  return [t, t.kind() === "ipv6" ? 128 : 32];
}
function qn(e) {
  return e.map(ri);
}
function ti(e) {
  try {
    let t = Be.parse(e);
    if (t instanceof Be.IPv6 && t.isIPv4MappedAddress()) return t.toIPv4Address();
    return t;
  } catch {
    return null;
  }
}
var tm = /^(\d{1,3}(?:\.\d{1,3}){3}):\d{1,5}$/, nm = /^\[([^\]]+)\](?::\d{1,5})?$/;
function rm(e) {
  let t = tm.exec(e) ?? nm.exec(e);
  return t ? t[1] : e;
}
function ni(e, t) {
  for (let [r, i] of t) {
    if (e instanceof Be.IPv4 && r instanceof Be.IPv4 && e.match(r, i)) return true;
    if (e instanceof Be.IPv6 && r instanceof Be.IPv6 && e.match(r, i)) return true;
  }
  return false;
}
function Yd(e, t, r) {
  if (!e || r.length === 0) return { clientIp: e };
  let i = ti(e);
  if (!i || !ni(i, r)) return { clientIp: e };
  if (!t) return { clientIp: e };
  let o = t.split(",").map((a) => a.trim()).filter(Boolean);
  for (let a = o.length - 1; a >= 0; a--) {
    let l = o[a], h = ti(rm(l));
    if (!h) return { clientIp: e, badHop: l.slice(0, 100) };
    if (!ni(h, r)) return { clientIp: h.toString() };
  }
  return { clientIp: e };
}
function Kn(e, t) {
  if (!e || t.length === 0) return false;
  let r = ti(e);
  return r !== null && ni(r, t);
}
var Vd = "amazon-bedrock-guardrails-guardContent", Zd = ["last_message", "user_messages", "all_messages", "all_messages_and_system"];
function zn(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function si(e) {
  return zn(e) && e.role === "assistant";
}
function rs(e, t) {
  if (t.trim() === "") return t;
  return e.used = true, `<${Vd}_${e.suffix}>${t}</${Vd}_${e.suffix}>`;
}
function ss(e, t) {
  if (typeof t === "string") return rs(e, t);
  return Array.isArray(t) ? t.map((r) => om(e, r)) : t;
}
function Xd(e, t) {
  return "content" in t ? { ...t, content: ss(e, t.content) } : t;
}
function om(e, t) {
  if (!zn(t)) return t;
  if (t.type === "text" && typeof t.text === "string") return { ...t, text: rs(e, t.text) };
  if (t.type === "document" && zn(t.source)) {
    let { source: r, context: i } = t;
    return { ...t, ...typeof i === "string" && { context: rs(e, i) }, source: r.type === "text" && typeof r.data === "string" ? { ...r, data: rs(e, r.data) } : Xd(e, r) };
  }
  return t.type === "tool_result" || t.type === "search_result" || t.type === "mcp_tool_result" ? Xd(e, t) : t;
}
function el(e, t) {
  if (!Array.isArray(e.messages)) return e;
  let r = e.messages, i = { suffix: (0, import_crypto9.randomBytes)(10).toString("hex"), used: false }, o = r.findLastIndex((h) => !si(h)) + 1, a = r.slice(0, o).findLastIndex(si) + 1, l = { ...e, ...t === "all_messages_and_system" && e.system !== void 0 && { system: ss(i, e.system) }, messages: r.map((h, u) => zn(h) && (t === "all_messages_and_system" || h.role !== "system" && (t === "all_messages" || (t === "user_messages" ? !si(h) : u >= a && u < o))) ? { ...h, content: ss(i, h.content) } : h), "amazon-bedrock-guardrailConfig": { tagSuffix: i.suffix } };
  if (!i.used && t === "last_message") l.messages = r.map((h, u) => zn(h) && h.role === "system" && u >= a && u < o ? { ...h, content: ss(i, h.content) } : h);
  return i.used ? l : e;
}
var hl = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.SK)(), 1);
var os = "request-tags-2026-08-21", tl = /^(?!anthropic)[A-Z0-9_.:/=+\-@]{1,64}$/i;
function nl(e, t, r) {
  let i = (0, import_chunk_ma3kja9f.T)(e) && Object.hasOwn(e, t) ? e[t] : void 0;
  if (i === void 0) return;
  return typeof i === "string" && r?.includes(i) ? { billing_group: i } : { billing_group_ignored: true };
}
function is(e) {
  let { tags: t, ...r } = e;
  return r;
}
function as(e) {
  let t = (e ?? "").split(",").map((i) => i.trim());
  if (!t.includes(os)) return e;
  let r = t.filter((i) => i !== "" && i !== os);
  return r.length > 0 ? r.join(",") : void 0;
}
function rl(e, t) {
  if (!e.startsWith(t)) return false;
  return e.length === t.length || e[t.length] === "-";
}
function sl(e, t) {
  for (let r of t) {
    if ((0, import_chunk_zmb62hr5.Zb)(r)) continue;
    let i = r.indexOf(e);
    if (i === -1) continue;
    let o = i + e.length;
    if (o === r.length || r[o] === "-") return true;
  }
  return false;
}
function im(e, t) {
  let r = (0, import_chunk_6mfepmbb.gKt)(t);
  if (r.kind !== "model") return r.kind === "family";
  let i = (0, import_chunk_zmb62hr5.Qd)(e);
  return i !== null && (0, import_chunk_6mfepmbb.cMo)(r, i, (0, import_chunk_6mfepmbb.lHr)(e, i));
}
function oi(e, t, r) {
  if (t.length === 0) return false;
  let i = t.map((a) => (0, import_chunk_zmb62hr5.Yt)(a.trim().toLowerCase())), o = (0, import_chunk_zmb62hr5.Yt)(e.trim().toLowerCase());
  if (i.includes(o)) {
    if (!(0, import_chunk_zmb62hr5.Zb)(o) || !sl(o, i)) return true;
  }
  for (let a of i) if ((0, import_chunk_zmb62hr5.Zb)(a) && !sl(a, i) && (0, import_chunk_xcgcdx61.GRt)(o, a)) return true;
  for (let a of i) {
    if ((0, import_chunk_zmb62hr5.Zb)(a)) continue;
    if (r === "exact" && !im(o, a)) continue;
    if (rl(o, a)) return true;
    if (!a.startsWith("claude-") && rl(o, `claude-${a}`)) return true;
  }
  return false;
}
function Jn(e, t, r) {
  let i = t.deniedModels;
  if (i && [e, ...Object.values(r?.upstream_model ?? {})].some((a) => (0, import_chunk_xcgcdx61.P1l)(a, i))) return "denied";
  let o = t.availableModels;
  return o && !oi(e, o, t.availableModelsMatch) ? "unlisted" : null;
}
var am = [["topicPolicy", "topics", ["name", "type"]], ["contentPolicy", "filters", ["type", "confidence", "filterStrength"]], ["wordPolicy", "customWords", []], ["wordPolicy", "managedWordLists", ["type"]], ["sensitiveInformationPolicy", "piiEntities", ["type"]], ["sensitiveInformationPolicy", "regexes", ["name"]], ["contextualGroundingPolicy", "filters", ["type", "score", "threshold"]]];
function ii(e, t) {
  let r = (0, import_chunk_vyaqbqge.hF)(e, ["amazon-bedrock-trace"]), i = (0, import_chunk_vyaqbqge.hF)(e, ["type"]);
  if (r === void 0 && i !== "message" && i !== "message_stop") return;
  if ("amazon-bedrock-trace" in e) delete e["amazon-bedrock-trace"];
  let o = (0, import_chunk_vyaqbqge.hF)(e, ["amazon-bedrock-guardrailAction"]), a = (0, import_chunk_vyaqbqge.hF)(r, ["guardrail", "outputs"]), l = (0, import_chunk_pbteexar.Ls)([...ol("input", (0, import_chunk_vyaqbqge.hF)(r, ["guardrail", "input"])), ...(Array.isArray(a) ? a : []).flatMap((h) => ol("output", h))], import_chunk_w578pjby._);
  if (l.length > 0 || o === "INTERVENED") (0, import_chunk_s95w59kf.Tte)("guardrail.trace", { ...t, action: typeof o === "string" ? o : void 0, filters: l });
}
function ol(e, t) {
  let r = [];
  for (let [i, o] of Object.entries((0, import_chunk_0jve1fep.Le)(t) ? t : {})) for (let [a, l, h] of am) {
    let u = (0, import_chunk_vyaqbqge.hF)(o, [a, l]);
    for (let f of Array.isArray(u) ? u : []) if ((0, import_chunk_0jve1fep.Le)(f) && f.detected !== false) r.push({ side: e, guardrail: i, policy: `${a}.${l}`, ...(0, import_chunk_gd77dyw4.Hr)((0, import_chunk_6mfepmbb.cf)(f, "action", h), (m) => typeof m === "string" || typeof m === "number") });
  }
  return r;
}
var cm = /* @__PURE__ */ new Set(["input", "input_schema", "input_examples", "output_schema", "output_examples", "schema", "tags", "classifier_context"]);
function ai(e, t, r = [], i = { fields: 0 }) {
  if (r.length >= 1e3) return { path: r.join("."), reason: `refused by this gateway: the request JSON is nested more than ${1e3.toLocaleString("en-US")} levels deep` };
  let o = "type" in e && e.type === "fallback";
  for (let [a, l] of Array.isArray(e) ? e.entries() : Object.entries(e)) if (a === "model" && typeof l === "string") {
    if (r.length === 0) continue;
    if (++i.fields > 100) return { path: [...r, a].join("."), reason: "refused by this gateway: the request names more than 100 models in `model` fields" };
    let h = t(l);
    if (h !== void 0) return { path: [...r, a].join("."), reason: h };
  } else if (a === "model" && r.length > 0 && (typeof l !== "object" || Array.isArray(l))) return { path: [...r, a].join("."), reason: "refused by this gateway: `model` must be a string" };
  else if (typeof l === "object" && l !== null && !cm.has(a) && !(o && (a === "from" || a === "to"))) {
    r.push(a);
    let h = ai(l, t, r, i);
    if (r.pop(), h) return h;
  }
  return;
}
var al = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_3jjr3wje.SK)(), 1), cl = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)(), 1);
var cs = "claude-apps-gateway", lm = 3e5, um = 3e4, pm = 1e4, il = 1e4;
function fm(e) {
  if (new RegExp("\\p{Surrogate}", "u").test(e)) return null;
  let t = "";
  for (let r of e) t += /^[\w+,.@-]$/.test(r) ? r : Array.from(new TextEncoder().encode(r), (i) => `=${i.toString(16).toUpperCase().padStart(2, "0")}`).join("");
  if (t.length > 64) t = `${t.slice(0, 42)}=-${(0, import_crypto10.createHash)("sha256").update(e).digest("hex").slice(0, 20)}`;
  return t.length >= 2 ? t : null;
}
function ds(e) {
  return e.replace(/(assumed-role\/[^/\s]+\/)[^\s"']+/g, "$1<session>");
}
async function dl(e) {
  let { upstreamName: t, region: r, roleArn: i } = e, o = e.maxUsers ?? pm;
  if (!/^[a-z0-9-]+$/.test(r)) throw Error("region is not a plain AWS region name");
  let a = import_chunk_c203g5kd.s.AWS_USE_FIPS_ENDPOINT === "true" && !e.stsEndpoint, l = a && !r.startsWith("us-gov-") ? "sts-fips" : "sts", h = e.stsEndpoint ?? `https://${l}.${r}.amazonaws.com`, u = { region: r, ...a ? { useFipsEndpoint: true } : { endpoint: h }, requestHandler: await (0, import_chunk_3jjr3wje.nEe)({ url: h, requestTimeoutMs: il }) ?? new al.NodeHttpHandler({ httpsAgent: (0, import_chunk_3jjr3wje.qVt)(), requestTimeout: il, throwOnRequestTimeout: true }), maxAttempts: 2 }, f = e.sourceCredentials ?? (import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_AWS_CRED_CACHE ? void 0 : async (x) => (await (0, import_chunk_865at33z.G7e)(r))(x)), { fromTemporaryCredentials: m } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1y7278ds.js")));
  function b(x) {
    return cl.memoize(m({ ...f && { masterCredentials: f }, params: { RoleArn: i, RoleSessionName: x, ...e.externalId && { ExternalId: e.externalId } }, clientConfig: u }), (P) => (P.expiration?.getTime() ?? 0) - Date.now() < lm);
  }
  let g, k = (x) => g.credentials(x), y = e.buildClient(k), v = () => ({ client: y, credentials: b(cs), createdAt: Date.now() });
  g = v();
  let E = /* @__PURE__ */ new Map();
  function S(x) {
    let P = b(x), R = { client: e.buildClient(P), credentials: P, createdAt: Date.now() };
    if (E.size >= o) E.delete(E.keys().next().value);
    return E.set(x, R), R;
  }
  function O(x, P) {
    if (x === g) return g = v(), true;
    return E.get(P) === x && E.delete(P);
  }
  return { sharedClient: y, countTokensCredentials: () => b(cs), async clientFor(x) {
    let P = g, R = cs, D = "the shared session";
    if (e.sessionNameClaim && x) {
      let H = e.sessionNameClaim === "sub" ? x.sub : x.email, se = H ? fm(H) : null;
      if (!se || se === cs) throw Error(`upstream ${t}: sub=${x.sub} has no usable ${e.sessionNameClaim} claim for assume_role.session_name (set session_name: sub, or oidc.email_claim); request not sent`);
      P = E.get(se) ?? S(se), R = se, D = `sub=${x.sub}`;
    }
    let U = P !== g;
    try {
      await P.credentials();
    } catch (H) {
      if (!e.sourceCredentials && (0, import_chunk_xfj2cwfv.aze)(H instanceof Error ? H.name : void 0, (0, import_chunk_jv7av99m.d)(H))) (0, import_chunk_865at33z.kCt)(r), O(P, R);
      let se = U ? (0, import_chunk_jv7av99m.d)(H).replaceAll(R, "<session>") : (0, import_chunk_jv7av99m.d)(H), z = H instanceof Error ? H.name : "Error", L = z === "EndpointError" ? "for FIPS endpoints set AWS_USE_FIPS_ENDPOINT=true in the gateway's environment (not use_fips_endpoint in an AWS config file) and unset AWS_ENDPOINT_URL and AWS_ENDPOINT_URL_STS. Dual-stack endpoints are not supported here: unset AWS_USE_DUALSTACK_ENDPOINT" : `the gateway's AWS identity has sts:AssumeRole on that role, the role's trust policy trusts that identity, with the same external ID as external_id if it requires one, and ${a ? `the regional STS FIPS endpoint for ${r}` : h} is reachable`;
      throw Error(`upstream ${t}: sts:AssumeRole on ${i} for ${D} failed (${z}: ${se}); request not sent; the gateway's own credentials were not used instead. Check: ${L}.`);
    }
    return { client: P.client, invalidate: () => Date.now() - P.createdAt >= um && O(P, R) };
  } };
}
var hm = /* @__PURE__ */ new Set(["content-type", "accept", "accept-encoding", "anthropic-beta", "anthropic-version", "user-agent"]);
function mm(e) {
  let t = new Headers();
  return e.forEach((r, i) => {
    let o = i.toLowerCase();
    if (hm.has(o) || o.startsWith("x-stainless-")) t.set(i, r);
  }), t;
}
function li(e) {
  return { search: new URL(e.url).search, headers: mm(e.headers) };
}
var ls = ["x-gateway-upstream-request-id", "x-gateway-upstream-cloud-request-id"], gm = ["content-encoding", "content-length", "transfer-encoding", "connection", "cf-ray", "via", "request-id", ...ls], _m = { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" }, ym = 15e3, wm = `event: ping
data: {"type": "ping"}

`, ci = 6e5, bm = /* @__PURE__ */ new Set(["bedrock", "mantle", "vertex"]), km = ["/v1/messages", "/v1/messages/count_tokens"];
async function ml(e, t, r, i, o) {
  let a = typeof e.model === "string" ? e.model : null, l = { system: e.system, messages: e.messages, tools: e.tools };
  for (let h of t) {
    if (h.kind === "sdk" && h.provider === "bedrock") continue;
    let u = a ? We(a, h, r, i) : null;
    if (!u?.ok) continue;
    let f = { ...l, model: u.model };
    try {
      if (h.kind === "sdk") return (await h.client.messages.countTokens(f)).input_tokens;
      let m = new Headers({ "content-type": "application/json", "anthropic-version": "2023-06-01" });
      Sl(m, h), Al(m, h, o), await h.applyAuth(m);
      let b = `${h.baseUrl.replace(/\/$/, "")}/v1/messages/count_tokens`, g = await (h.fetch ?? zt)(b, { method: "POST", headers: m, body: (0, import_chunk_w578pjby._)(f), ...(0, import_chunk_3jjr3wje.wl)({ url: b }), timeout: false, signal: AbortSignal.timeout(1e4) });
      if (!g.ok) continue;
      let k = await g.json();
      if (typeof k.input_tokens === "number") return k.input_tokens;
    } catch {
    }
  }
  for (let h of t) {
    if (h.kind !== "sdk" || h.provider !== "bedrock") continue;
    let u = a ? We(a, h, r, i) : null;
    if (!u?.ok) continue;
    let f = await h.countTokens?.(u.model, { ...l, max_tokens: typeof e.max_tokens === "number" ? e.max_tokens : 1, ...e.thinking !== void 0 && { thinking: e.thinking } });
    if (typeof f === "number") return f;
    try {
      return (await h.client.messages.create({ ...l, model: u.model, max_tokens: 1, stream: false })).usage.input_tokens;
    } catch {
    }
  }
  return Math.ceil((0, import_chunk_w578pjby._)(l).length / 4);
}
function ui(e) {
  return km.includes(e);
}
function gl(e) {
  let t = (0, import_chunk_865at33z.vVi)(e), r = (0, import_chunk_865at33z.lzt)(t), i = r ? t.slice(r.length + 1) : t;
  return (0, import_chunk_865at33z.iRr)(i) ? i : null;
}
function us(e, t) {
  let r = (0, import_chunk_zhr7rpv7.PB)(e), i = e.toLowerCase();
  return t.find((o) => o.id.toLowerCase() === i || r !== null && (0, import_chunk_zhr7rpv7.PB)(o.id) === r);
}
function ze(e) {
  let t = e.replace(/[^\x20-\x7e]/g, "");
  return t.length > 128 ? `${t.slice(0, 128)}...` : t;
}
function _l(e) {
  return `model ${ze(e)} is not in the operator's model allowlist`;
}
function ll(e, t, r) {
  let i = t && Jn(e, t, t.deniedModels && us(e, r));
  if (!i) return;
  return i === "denied" ? `model ${ze(e)} is blocked by your role's deniedModels denylist` : `model ${ze(e)} is not in your role's availableModels allowlist`;
}
function yl(e, t) {
  if (!e.models) return true;
  let r = (0, import_chunk_zhr7rpv7.PB)(t), i = t.toLowerCase();
  return e.models.some((o) => {
    let a = o.toLowerCase(), [l = "", h, u] = a.split("*");
    return a === i || h !== void 0 && u === void 0 && i.length >= l.length + h.length && i.startsWith(l) && i.endsWith(h) || r !== null && (0, import_chunk_zhr7rpv7.PB)(o) === r;
  });
}
function We(e, t, r, i = true, o = false) {
  let a = (0, import_chunk_zhr7rpv7.PB)(e);
  if (!yl(t, e)) return { ok: false, listSkip: true, error: o ? `model ${ze(e)} is not available on this upstream` : `model ${ze(e)} is not served by upstream '${t.name}'` };
  let l = us(e, r), h = l?.upstream_model[t.name];
  if (h) return { ok: true, model: h };
  if (a && (i || l)) {
    let u = t.region, f = !u || (0, import_chunk_865at33z.GTt)(u) === "us" || u.startsWith("ca-"), m = t.provider === "anthropic" ? a.firstParty : t.provider === "bedrock" && a.bedrock && !f ? gl(a.bedrock) : a[t.provider];
    if (!m) return { ok: false, error: o ? `model ${ze(e)} is not available on this upstream` : `model ${ze(e)} is not available on ${t.provider}` };
    return { ok: true, model: m };
  }
  if (l) return { ok: false, error: o ? `model ${ze(e)} is not configured for this upstream` : `model ${ze(e)} has no upstream_model.${t.name} configured` };
  return { ok: false, error: _l(e) };
}
function pe(e, t, r, i, o) {
  return Response.json({ type: "error", ...i && { request_id: i }, error: { type: t, message: r } }, { status: e, ...o && { headers: o } });
}
function pi(e, t) {
  return t !== void 0 ? (0, import_chunk_cy0ck7w2.O_i)(t) : fs[e] ?? "upstream error";
}
function vm(e, t) {
  let r = new Headers();
  return e.forEach((i, o) => {
    let a = o.toLowerCase();
    if (!t.includes(a) && !a.startsWith("anthropic-ratelimit-")) r.set(o, i);
  }), r;
}
var fi = ["x-gateway-upstream", "x-gateway-upstream-kind", "x-gateway-model", "x-gateway-upstream-model", ...ls];
function ps(e, t) {
  for (let r of fi) {
    let i = e.get(r);
    if (i !== null) t.set(r, i);
  }
}
function Em(e, t) {
  e.body?.cancel().catch(() => {
  });
  let r = pe(e.status, Xn(e.status), fs[e.status] ?? "upstream error", t), i = e.headers.get("retry-after");
  if (e.status === 429 && i !== null) r.headers.set("retry-after", i);
  return ps(e.headers, r.headers), r;
}
function Yn(e, t) {
  let r = (0, import_chunk_sjqze7qg.kot)(t?.get("request-id"), t);
  if (r !== null) e.headers.set("x-gateway-upstream-request-id", r);
  let i = (0, import_chunk_sjqze7qg.kot)(t?.get("apim-request-id"), t);
  if (i !== null) e.headers.set("x-gateway-upstream-cloud-request-id", i);
  return e;
}
async function Sm(e, t) {
  let r = await (0, import_chunk_kmbc34js._Re)(e, t, { keepOnError: true, wholeChunks: true });
  return new TextDecoder().decode(r).slice(0, t);
}
var bl = /* @__PURE__ */ new Set(["invalid_request_error", "authentication_error", "permission_error", "not_found_error", "request_too_large", "rate_limit_error", "not_supported", "overloaded_error", "api_error", "billing_error", "policy_blocked"]);
async function Am(e, t, r) {
  let i = await Sm(e.body, 65536), o, a = i;
  try {
    let u = (0, import_chunk_w578pjby.te)(i);
    if (typeof u?.error?.message === "string") a = u.error.message;
    if (typeof u?.error?.type === "string" && bl.has(u.error.type)) o = u.error.type;
  } catch {
  }
  let l = (0, import_chunk_cy0ck7w2.tfr)(e.status, a, t?.split(","));
  (0, import_chunk_s95w59kf.xo)("warn", `upstream ${e.status} sanitized for CRI caller (${l ?? "no capability class"}) request_id=${r ?? "-"}: ${(0, import_chunk_7cfjrnwy.ee)(a, 1e3)}`);
  let h = pe(e.status, o ?? Xn(e.status), pi(e.status, l), r);
  return ps(e.headers, h.headers), h;
}
async function kl(e, t, r) {
  if (e.headers.delete("anthropic-organization-id"), e.status < 300 || e.headers.get("x-gateway-upstream") === null) return e;
  let i = Vn.get(e);
  if (i) {
    if (e.status === 400 || e.status === 413) {
      let o = (0, import_chunk_cy0ck7w2.tfr)(e.status, i.message, t.headers.get("anthropic-beta")?.split(",")), a = pe(e.status, Xn(e.status), pi(e.status, o), r);
      return ps(e.headers, a.headers), a;
    }
    return e;
  }
  if (e.status === 400 || e.status === 413) return Am(e, t.headers.get("anthropic-beta") ?? void 0, r);
  return Em(e, r);
}
async function Tm(e, t, r, i, o) {
  let a = new AbortController(), l = setTimeout((h) => h.abort(), o, a);
  try {
    return await e(t, { ...r, signal: AbortSignal.any([i, a.signal]) });
  } finally {
    clearTimeout(l);
  }
}
var Vt = 36e5, Vn = /* @__PURE__ */ new WeakMap(), Rm = "400 The provided model identifier is invalid.";
async function ul(e, t) {
  if (!e.assume_role) return;
  if (e.auth.aws_bearer_token) throw Error("assume_role needs SigV4 source credentials (access keys or the ambient AWS chain); aws_bearer_token cannot call sts:AssumeRole");
  return dl({ upstreamName: e.name, region: e.region, roleArn: e.assume_role.role_arn, externalId: e.assume_role.external_id, sessionNameClaim: e.assume_role.session_name, sourceCredentials: e.auth.aws_access_key_id && e.auth.aws_secret_access_key ? { accessKeyId: e.auth.aws_access_key_id, secretAccessKey: e.auth.aws_secret_access_key, sessionToken: e.auth.aws_session_token } : void 0, buildClient: t });
}
async function vl(e, t) {
  let r = (o) => {
    o.delete("authorization"), o.delete("x-api-key");
  }, i = await Promise.all(e.map(async (o) => {
    switch (o.provider) {
      case "anthropic": {
        if ("api_key" in o.auth) {
          let f = o.auth.api_key;
          return { kind: "raw", name: o.name, provider: "anthropic", baseUrl: o.base_url, ...t && { fetch: t }, applyAuth: async (m) => {
            r(m), m.set("x-api-key", f);
          }, forwardUserIdentity: o.forward_user_identity === true, headers: o.headers };
        }
        if ("oauth_token" in o.auth) {
          let f = o.auth.oauth_token;
          return { kind: "raw", name: o.name, provider: "anthropic", baseUrl: o.base_url, ...t && { fetch: t }, applyAuth: async (m) => {
            r(m), m.set("Authorization", `Bearer ${f}`), m.append("anthropic-beta", import_chunk_ephf358x.ff);
          }, forwardUserIdentity: o.forward_user_identity === true, headers: o.headers };
        }
        let { resolveCredentialsFromConfig: a, TokenCache: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-e9bvzfbq.js"))), h = a({ organization_id: o.auth.organization_id, workspace_id: o.auth.workspace_id, base_url: o.base_url, authentication: { type: "oidc_federation", federation_rule_id: o.auth.federation_rule_id, service_account_id: o.auth.service_account_id, identity_token: { source: "file", path: o.auth.identity_token_file } } }, { baseURL: o.base_url, fetch: (f, m) => zt(String(f), { ...m, ...(0, import_chunk_3jjr3wje.wl)({ url: String(f) }), signal: AbortSignal.timeout(1e4) }) }), u = new l(h.provider, (f) => (0, import_chunk_s95w59kf.xo)("warn", `WIF advisory refresh (${o.name}): ${(0, import_chunk_jv7av99m.d)(f)}`));
        return { kind: "raw", name: o.name, provider: "anthropic", baseUrl: o.base_url, ...t && { fetch: t }, applyAuth: async (f) => {
          r(f), f.set("Authorization", `Bearer ${await u.getToken()}`);
          for (let [m, b] of Object.entries(h.extraHeaders)) f.set(m, b);
          f.append("anthropic-beta", import_chunk_ephf358x.ff);
        }, invalidateAuth: () => u.invalidate(), forwardUserIdentity: o.forward_user_identity === true, headers: o.headers };
      }
      case "bedrock": {
        let { AnthropicBedrock: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-drfb6rw5.js"))), l = { ...o.guardrail && { "X-Amzn-Bedrock-GuardrailIdentifier": o.guardrail.id, "X-Amzn-Bedrock-GuardrailVersion": o.guardrail.version }, ...o.guardrail_trace && { "X-Amzn-Bedrock-Trace": "ENABLED" } }, h = { awsRegion: o.region, baseURL: o.base_url || `https://bedrock-runtime.${o.region}.amazonaws.com`, timeout: Vt, fetchOptions: { ...(0, import_chunk_3jjr3wje.wl)({ url: void 0 }), timeout: false }, maxRetries: 0, ...t && { fetch: t } };
        if (!o.auth.aws_access_key_id !== !o.auth.aws_secret_access_key || o.auth.aws_session_token && !o.auth.aws_access_key_id) throw Error("bedrock upstream: aws_access_key_id and aws_secret_access_key must be set together (and are required with aws_session_token)");
        let u = !o.auth.aws_bearer_token && !(o.auth.aws_access_key_id && o.auth.aws_secret_access_key), f = (0, import_chunk_xfj2cwfv.BS)(), m = { authToken: null, defaultHeaders: { ...o.headers, ...(0, import_chunk_xfj2cwfv.YT)(), Authorization: null, ...!f && { "X-Api-Key": null }, ...l }, ...import_chunk_xfj2cwfv.jj }, b = await ul(o, (x) => new a({ ...h, ...m, providerChainResolver: async () => x })), g = b ? b.sharedClient : o.auth.aws_bearer_token ? new a({ ...h, apiKey: o.auth.aws_bearer_token, defaultHeaders: { ...o.headers, ...(0, import_chunk_xfj2cwfv.YT)(), Authorization: `Bearer ${o.auth.aws_bearer_token}`, ...!f && { "X-Api-Key": null }, ...l } }) : o.auth.aws_access_key_id && o.auth.aws_secret_access_key ? new a({ ...h, ...m, awsAccessKey: o.auth.aws_access_key_id, awsSecretKey: o.auth.aws_secret_access_key, awsSessionToken: o.auth.aws_session_token }) : new a({ ...h, ...m, providerChainResolver: (0, import_chunk_865at33z.lke)(o.region, kt) }), k, y, v = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), O = () => k ??= (async () => {
          let { BedrockRuntimeClient: x } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ezghs7rz.js")));
          if (!o.base_url && !/^[a-z0-9-]+$/.test(o.region)) throw Error("region is not a plain AWS region name");
          let P = o.base_url || `https://bedrock-runtime.${o.region}.amazonaws.com`;
          y ??= await (0, import_chunk_3jjr3wje.nEe)({ url: P }) ?? new hl.NodeHttpHandler({ httpsAgent: (0, import_chunk_3jjr3wje.qVt)() });
          let R = o.auth.aws_bearer_token ? { authSchemePreference: ["httpBearerAuth"], token: { token: o.auth.aws_bearer_token } } : o.auth.aws_access_key_id && o.auth.aws_secret_access_key ? { authSchemePreference: ["sigv4"], credentials: { accessKeyId: o.auth.aws_access_key_id, secretAccessKey: o.auth.aws_secret_access_key, sessionToken: o.auth.aws_session_token } } : { authSchemePreference: ["sigv4"], ...!import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_AWS_CRED_CACHE && { credentials: async (D) => (await (0, import_chunk_865at33z.G7e)(o.region))(D) } };
          return new x({ region: o.region, endpoint: P, requestHandler: y, maxAttempts: 1, ...R, ...b && { credentials: b.countTokensCredentials() } });
        })();
        return { kind: "sdk", name: o.name, provider: "bedrock", region: o.region, client: g, ...o.guardrail && { guardrail: true }, ...o.guardrail?.input_tagging && { inputTagging: o.guardrail.input_tagging }, ...b && { assumeRole: b }, ...o.guardrail_trace && { guardrailTrace: true }, ...u && { invalidateAuth: () => {
          let x = (0, import_chunk_865at33z.kCt)(o.region);
          if (x) k = void 0;
          return x;
        } }, countTokens: async (x, P) => {
          let R = gl(x);
          if (!R || t) return null;
          if (Date.now() < (v.get(R) ?? 0)) return null;
          let D = E.has(R) ? void 0 : S.get(R);
          if (D && await D === null) return null;
          let { tools: U, anthropic_beta: H, ...se } = P, z = (Array.isArray(H) ? H : []).filter((ye) => {
            let ae = (0, import_chunk_xfj2cwfv._mn)(String(ye));
            return ae && import_chunk_xfj2cwfv.p6n.has(ae) && !import_chunk_xfj2cwfv.JPr.has(ae);
          }), L = { ...se, ...Array.isArray(U) && U.length > 0 && { tools: U }, ...z.length > 0 && { anthropic_beta: z } }, Q = (async () => {
            let ye = new AbortController();
            try {
              let ae = await (0, import_chunk_5appeerh.qt)(O().then((j) => (0, import_chunk_865at33z._Co)(j, R, L, { abortSignal: ye.signal })), 1e4, "no answer in 10 s");
              if (ae === null) throw Error("the answer had no inputTokens");
              if (Date.now() >= (v.get(R) ?? 0)) {
                if (E.add(R), v.delete(R)) (0, import_chunk_s95w59kf.xo)("info", `upstream ${o.name}: AWS CountTokens works again for ${R}`);
              }
              return ae;
            } catch (ae) {
              let j = ae.$metadata?.httpStatusCode, be = ae instanceof Error ? ae.name : "", fe = be === "SyntaxError" || be === "Unknown" ? "the answer was not from AWS" : (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_7cfjrnwy.Ir)((0, import_chunk_jv7av99m.d)(ae)).replace(/\.$/, ""), 1e3), Oe = j ? `HTTP ${j}: ${fe}` : fe;
              if (E.has(R) && (j === 400 && be === "ValidationException" || j === 413 || j === 429)) return (0, import_chunk_s95w59kf.xo)("debug", `upstream ${o.name}: AWS CountTokens failed for ${R} for one request (${Oe})`), null;
              let at = be === "AccessDeniedException" ? " Check that the identity that signs this upstream's Bedrock calls has bedrock:CountTokens." : be === "ValidationException" && /^The provided model doesn['\u2019]?t support counting tokens/i.test(fe) ? " AWS does not count this model on bedrock-runtime (it counts some newer Claude models only on bedrock-mantle). This is not a missing permission, and it holds until AWS counts this model on bedrock-runtime." : be === "ValidationException" ? " AWS refused the model or the request body, so this is not a missing permission." : o.base_url ? " Check that the proxy at base_url passes /model/{id}/count-tokens." : "";
              return (0, import_chunk_s95w59kf.xo)(v.has(R) ? "debug" : "warn", `upstream ${o.name}: AWS CountTokens failed for ${R} (${Oe}). Model requests are not affected. For the next ${ci / 6e4} minutes, count_tokens for this model goes to the next upstream. If there is none, the client gets a 501, and Claude Code counts with a billed model request or estimates locally. After ${ci / 6e4} minutes, the gateway asks AWS again on the next count.${at}`), v.set(R, Date.now() + ci), E.delete(R), k = void 0, null;
            } finally {
              ye.abort();
            }
          })();
          if (!D && !E.has(R)) S.set(R, Q), Q.then(() => S.delete(R));
          return Q;
        } };
      }
      case "mantle": {
        let { AnthropicBedrockMantle: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-drfb6rw5.js")));
        if (!o.auth.aws_access_key_id !== !o.auth.aws_secret_access_key || o.auth.aws_session_token && !o.auth.aws_access_key_id) throw Error("mantle upstream: aws_access_key_id and aws_secret_access_key must be set together (and are required with aws_session_token)");
        let l = (0, import_chunk_xfj2cwfv.BS)(), h = { awsRegion: o.region, baseURL: o.base_url ?? `https://bedrock-mantle.${o.region}.api.aws/anthropic`, timeout: Vt, fetchOptions: { ...(0, import_chunk_3jjr3wje.wl)({ url: void 0 }), timeout: false }, maxRetries: 0, ...t && { fetch: t } }, u = { authToken: null, defaultHeaders: { ...o.headers, ...(0, import_chunk_xfj2cwfv.YT)(), Authorization: null, ...!l && { "X-Api-Key": null } }, ...import_chunk_xfj2cwfv.jj }, f = !o.auth.aws_bearer_token && !o.auth.aws_access_key_id, m = (k) => {
          let y = import_chunk_c203g5kd.s.AWS_BEARER_TOKEN_BEDROCK;
          import_chunk_c203g5kd.s.unset("AWS_BEARER_TOKEN_BEDROCK");
          try {
            return new a({ ...h, ...u, providerChainResolver: k });
          } finally {
            if (y !== void 0) import_chunk_c203g5kd.s.set("AWS_BEARER_TOKEN_BEDROCK", y);
          }
        }, b = await ul(o, (k) => m(async () => k)), g;
        if (b) g = b.sharedClient;
        else if (o.auth.aws_bearer_token) g = new a({ ...h, apiKey: o.auth.aws_bearer_token, defaultHeaders: { ...o.headers, ...(0, import_chunk_xfj2cwfv.YT)(), Authorization: `Bearer ${o.auth.aws_bearer_token}`, ...!l && { "X-Api-Key": null } } });
        else if (o.auth.aws_access_key_id) g = new a({ ...h, ...u, awsAccessKey: o.auth.aws_access_key_id, awsSecretAccessKey: o.auth.aws_secret_access_key, awsSessionToken: o.auth.aws_session_token });
        else g = m((0, import_chunk_865at33z.lke)(o.region, kt));
        return { kind: "sdk", name: o.name, provider: "mantle", client: g, ...b && { assumeRole: b }, ...f && { invalidateAuth: () => (0, import_chunk_865at33z.kCt)(o.region) } };
      }
      case "anthropicAws": {
        let { AnthropicAws: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-f0pwtf9y.js"))), l = { awsRegion: o.region, workspaceId: o.workspace_id, baseURL: o.base_url ?? `https://aws-external-anthropic.${o.region}.api.aws`, authToken: null, defaultHeaders: { ...o.headers, ...(0, import_chunk_xfj2cwfv.YT)(), Authorization: null }, ...import_chunk_xfj2cwfv.jj, timeout: Vt, fetchOptions: { ...(0, import_chunk_3jjr3wje.wl)({ url: void 0 }), timeout: false }, maxRetries: 0, ...t && { fetch: t } }, h;
        if (o.auth.api_key) h = new a({ ...l, apiKey: o.auth.api_key });
        else if (o.auth.aws_access_key_id || o.auth.aws_secret_access_key) h = new a({ ...l, awsAccessKey: o.auth.aws_access_key_id, awsSecretAccessKey: o.auth.aws_secret_access_key, awsSessionToken: o.auth.aws_session_token });
        else {
          let f = process.env.ANTHROPIC_AWS_API_KEY;
          delete process.env.ANTHROPIC_AWS_API_KEY;
          try {
            h = new a({ ...l, providerChainResolver: (0, import_chunk_865at33z.lke)(o.region, kt) });
          } finally {
            if (f !== void 0) process.env.ANTHROPIC_AWS_API_KEY = f;
          }
        }
        let u = !o.auth.api_key && !o.auth.aws_access_key_id && !o.auth.aws_secret_access_key;
        return { kind: "sdk", name: o.name, provider: "anthropicAws", client: h, ...u && { invalidateAuth: () => (0, import_chunk_865at33z.kCt)(o.region) } };
      }
      case "anthropicGoogleCloud": {
        let { AnthropicGoogleCloud: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vcq9tvvq.js"))), l = o.auth.access_token, h = {};
        for (let [f, m] of Object.entries(o.headers ?? {})) if (f.toLowerCase() !== "authorization") h[f] = m;
        let u = { project: o.project_id, location: o.location, workspaceId: o.workspace_id, baseURL: o.base_url ?? `https://claude.googleapis.com/v1/projects/${o.project_id}/locations/${o.location}/workspaces/${o.workspace_id}/invoke`, defaultHeaders: { ...h, ...(0, import_chunk_xfj2cwfv.YT)() }, timeout: Vt, fetchOptions: { ...(0, import_chunk_3jjr3wje.wl)({ url: void 0 }), timeout: false }, maxRetries: 0, ...t && { fetch: t } };
        if (l) u.bearerTokenProvider = async () => l;
        else {
          let { GoogleAuth: f } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-q9g7ztzs.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default, 1));
          u.googleAuth = new f({ scopes: ["https://www.googleapis.com/auth/cloud-platform"], projectId: o.project_id, ...o.auth.service_account_json && { keyFilename: o.auth.service_account_json }, clientOptions: Mn() }), Yo(u.googleAuth, o.name);
        }
        return { kind: "sdk", name: o.name, provider: "anthropicGoogleCloud", client: new a(u) };
      }
      case "vertex": {
        let { AnthropicVertex: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-a3tb07vm.js"))), l = { region: o.region, projectId: o.project_id, baseURL: o.base_url || null, defaultHeaders: { ...o.headers, ...(0, import_chunk_xfj2cwfv.mXe)() }, ...import_chunk_xfj2cwfv.jj, timeout: Vt, fetchOptions: { ...(0, import_chunk_3jjr3wje.wl)({ url: void 0 }), timeout: false }, maxRetries: 0, ...t && { fetch: t } };
        if (o.auth.access_token) {
          let h = o.auth.access_token;
          l.authClient = { projectId: o.project_id, getRequestHeaders: async () => ({ Authorization: `Bearer ${h}` }) };
        } else {
          let { GoogleAuth: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-q9g7ztzs.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default, 1));
          l.googleAuth = new h({ scopes: ["https://www.googleapis.com/auth/cloud-platform"], projectId: o.project_id, ...o.auth.service_account_json && { keyFilename: o.auth.service_account_json }, clientOptions: Mn() }), Yo(l.googleAuth, o.name);
        }
        return { kind: "sdk", name: o.name, provider: "vertex", client: (0, import_chunk_xfj2cwfv.pXe)(new a(l)) };
      }
      case "foundry": {
        let { AnthropicFoundry: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-9mt9c1vn.js"))), l = { ...o.base_url ? { baseURL: o.base_url, resource: "" } : { resource: o.resource, baseURL: null }, defaultHeaders: "api_key" in o.auth ? { ...o.headers, ...(0, import_chunk_xfj2cwfv.YT)(), Authorization: null } : { ...o.headers, ...(0, import_chunk_xfj2cwfv.YT)() }, ...import_chunk_xfj2cwfv.jj, timeout: Vt, fetchOptions: { ...(0, import_chunk_3jjr3wje.wl)({ url: void 0 }), timeout: false }, maxRetries: 0, ...t && { fetch: t } };
        if ("api_key" in o.auth) l.apiKey = o.auth.api_key;
        else {
          l.apiKey = null;
          let { DefaultAzureCredential: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xmxdgc97.js"))), u = new h();
          l.azureADTokenProvider = async () => {
            let f = await u.getToken("https://cognitiveservices.azure.com/.default");
            if (!f) throw Error("Azure AD token unavailable");
            return f.token;
          };
        }
        return { kind: "sdk", name: o.name, provider: "foundry", client: new a(l) };
      }
    }
  }));
  if (e.forEach((o, a) => {
    if (o.models) i[a].models = o.models;
  }), t) xm(i, t);
  return i;
}
function xm(e, t) {
  for (let r of e) if ((r.kind === "raw" ? r.fetch : r.client.fetch) !== t) throw (0, import_chunk_s95w59kf.xo)("error", `load_test_mode: upstream '${r.name}' was built without the canned-reply fetch`), Error("load_test_mode is on, but an upstream (named in the log line above) would still send real requests. This is a bug in the gateway. Do not send load to this gateway, and report it to Anthropic.");
}
async function El(e, t, r, i, o = true, a, l = 12e4, h, u) {
  let f, m;
  if (u?.body) f = u.body.buf, m = u.body.parsed;
  else {
    f = await e.arrayBuffer();
    try {
      m = (0, import_chunk_w578pjby.te)(Buffer.from(f).toString("utf8"));
    } catch {
      return pe(400, "invalid_request_error", "invalid JSON", h);
    }
  }
  if (typeof m !== "object" || m === null || Array.isArray(m)) return pe(400, "invalid_request_error", "request body must be a JSON object", h);
  if (!("model" in m) || m.model === "") return pe(400, "invalid_request_error", "model is required", h);
  if (typeof m.model !== "string") return pe(400, "invalid_request_error", "model must be a string", h);
  let b = m.model, g = ll(b, a, i);
  if (g) return pe(400, "invalid_request_error", g, h);
  if (r.length === 0) return pe(400, "invalid_request_error", "you aren't in a group that can use this gateway. Ask your administrator to add you to one", h);
  if (a?.availableModels || a?.deniedModels || !o) {
    let L = ai(m, (Q) => ll(Q, a, i) ?? (o || us(Q, i) ? void 0 : _l(Q)));
    if (L) return pe(400, "invalid_request_error", `${ze(L.path)}: ${L.reason}`, h);
  }
  let k = [], y = false, v = [], E = () => {
    let L = v.filter((Q) => !y || !Q.listSkip).map((Q) => Q.text);
    if (L.length === 0) return;
    (0, import_chunk_s95w59kf.xo)("warn", `inference: model resolution failed request_id=${h ?? "-"}: ${L.join("; ")}`);
  }, S = null, O = null, x = null, P = null, R = null, D = e.headers.get("anthropic-beta") ?? void 0, U = {};
  e.headers.forEach((L, Q) => {
    if (Q.toLowerCase().startsWith("x-stainless-")) U[Q] = L;
  });
  let H = u?.criPrincipal === true, se = u?.ttfbOnSdkUpstreams ? l : void 0;
  for (let L of r) {
    if (e.signal.aborted) break;
    let Q = We(b, L, i, o, H);
    if (!Q.ok) {
      k.push(Q.error), v.push({ text: `${L.name}: ${Q.error}`, listSkip: Q.listSkip === true });
      continue;
    }
    let ye = Q.model, ae = ye === b ? m : { ...m, model: ye };
    y = true;
    try {
      let j;
      if (L.kind === "raw") {
        let fe = ae === m ? f : new TextEncoder().encode((0, import_chunk_w578pjby._)(ae));
        if (j = await pl(e, t, fe, L, l, u?.user), j.status === 401 && L.invalidateAuth) L.invalidateAuth(), (0, import_chunk_s95w59kf.xo)("warn", `401 from ${L.name}; invalidated WIF bearer cache, retrying request_id=${h ?? "-"}`), j.body?.cancel().catch(() => {
        }), j = await pl(e, t, fe, L, l, u?.user);
      } else {
        let fe = (L.guardrail || L.guardrailTrace) && t === "/v1/messages" ? Object.keys(m).find((Ge) => /^amazon-bedrock-/i.test(Ge)) : void 0, Oe = ae;
        if (fe === void 0 && L.inputTagging && t === "/v1/messages") try {
          Oe = el(ae, L.inputTagging);
        } catch (Ge) {
          Oe = void 0, (0, import_chunk_s95w59kf.xo)("warn", `upstream '${L.name}': input_tagging failed, answered 400 request_id=${h ?? "-"}: ${(0, import_chunk_jv7av99m.d)(Ge)}`);
        }
        if (fe !== void 0 || Oe === void 0) {
          for (let Ge of [S, O, x, P]) Ge?.body?.cancel().catch(() => {
          });
          return E(), pe(400, "invalid_request_error", fe === void 0 ? H ? "the request could not be processed on this upstream" : "the request could not be prepared for the guardrail this gateway applies to Bedrock requests, so it was not sent" : H ? `${fe} is not permitted on this upstream` : `${fe} is not permitted: this gateway applies a guardrail to Bedrock requests`, h);
        }
        let at = H ? b : void 0, Lt = t === "/v1/messages/count_tokens", vt = Lt ? void 0 : u?.user, ct = L.guardrailTrace ? { request_id: h, sub: u?.user?.sub, email: u?.user?.email, upstream: L.name } : void 0, He = L.assumeRole && !(Lt && L.provider === "bedrock") ? await L.assumeRole.clientFor(vt) : void 0;
        j = await fl(t, Oe, L.provider, L.name, He?.client ?? L.client, D, U, e.signal, se, h, at, L.countTokens, ct);
        let ce = Vn.get(j), Ye = j.status === 401 || j.status === 403 ? He ? He.invalidate : L.invalidateAuth : void 0, X = ce !== void 0 && (0, import_chunk_xfj2cwfv.aze)(ce.errorType, ce.message);
        if (Ye && !X) Ye();
        if (Ye && X) {
          let Ge = Ye();
          if ((0, import_chunk_s95w59kf.xo)("warn", `${j.status} from ${L.name}; ${Ge ? "invalidated credential cache" : "credential invalidation debounced"}, retrying request_id=${h ?? "-"}`), j.body?.cancel().catch(() => {
          }), He && L.assumeRole) He = await L.assumeRole.clientFor(vt);
          j = await fl(t, Oe, L.provider, L.name, He?.client ?? L.client, D, U, e.signal, se, h, at, L.countTokens, ct);
        }
        let Ie = Vn.get(j), Et = Ie?.message.startsWith(`400 Invocation of model ID ${ye} with on-demand throughput isn`);
        if (Ie && L.provider === "bedrock" && (Et || Ie.message === Rm)) {
          let Ge = ze(b);
          (0, import_chunk_s95w59kf.xo)("warn", `upstream '${L.name}': AWS says model id ${ye} (sent for ${Ge}) ${Et ? "runs only through an inference profile here" : "is invalid"} request_id=${h ?? "-"}: under models:, map ${Ge} to ${Et ? "an inference profile this AWS account offers; AWS may then run it in any region that profile spans" : "a model id or inference profile this AWS account and region offer"}`);
          let bn = pe(400, "invalid_request_error", `model ${Ge} is not available on bedrock`, h);
          ps(j.headers, bn.headers), j = bn, Vn.set(j, Ie);
        }
      }
      if (j.headers.set("x-gateway-upstream", L.name), j.headers.set("x-gateway-upstream-kind", "operator"), j.headers.set("x-gateway-model", b), j.headers.set("x-gateway-upstream-model", ye), !(j.status === 429 && L.kind === "raw" && L.forwardUserIdentity && di(u?.user?.email) !== void 0) && (j.status >= 500 || j.status === 429 || j.status === 401 || j.status === 403 || j.status === 404)) {
        if (k.push(`${L.name}: ${j.status} ${j.statusText}`), j.status === 501) {
          if (S) S.body?.cancel().catch(() => {
          });
          S = j;
        } else if (j.status === 429) {
          if (O) O.body?.cancel().catch(() => {
          });
          O = j;
        } else if (j.status === 401 || j.status === 403) {
          if (x) x.body?.cancel().catch(() => {
          });
          x = j;
        } else if (j.status === 404) {
          if (P) P.body?.cancel().catch(() => {
          });
          P = j;
        } else if (j.body?.cancel().catch(() => {
        }), ls.some((fe) => j.headers.has(fe))) R = j;
        continue;
      }
      for (let fe of [S, O, x, P]) fe?.body?.cancel().catch(() => {
      });
      if (j.status >= 300) E();
      return j;
    } catch (j) {
      let be = `${L.name}: ${ds((0, import_chunk_jv7av99m.d)(j))}`;
      k.push(be), (0, import_chunk_s95w59kf.xo)("warn", `upstream failed, trying next request_id=${h ?? "-"}: ${be}`);
    }
  }
  if (e.signal.aborted) {
    for (let L of [S, O, x, P]) L?.body?.cancel().catch(() => {
    });
    return pe(499, "api_error", "client closed request", h, { "x-gateway-model": ze(b) });
  }
  if (E(), !y) return pe(400, "invalid_request_error", k.join("; "), h);
  if (O) {
    for (let L of [S, x, P]) L?.body?.cancel().catch(() => {
    });
    return O;
  }
  if (x) {
    for (let L of [S, P]) L?.body?.cancel().catch(() => {
    });
    return x;
  }
  if (P) return S?.body?.cancel().catch(() => {
  }), P;
  if (S) return S;
  (0, import_chunk_s95w59kf.xo)("warn", `all upstreams failed request_id=${h ?? "-"}: ${k.join("; ")}`);
  let z = pe(502, "api_error", `all upstreams failed (${r.length} attempted)`, h, { "x-gateway-model": ze(b) });
  for (let L of ls) {
    let Q = R?.headers.get(L);
    if (Q) z.headers.set(L, Q);
  }
  return z;
}
function di(e) {
  return e === void 0 ? void 0 : (0, import_chunk_7cfjrnwy.vc)(e.trim()).replace(/[^\x21-\x7e]|%/gu, (t) => encodeURIComponent(t)) || void 0;
}
function Sl(e, t) {
  for (let [r, i] of Object.entries(t.headers ?? {})) e.set(r, i);
}
function Al(e, t, r) {
  if (!t.forwardUserIdentity || !r) return;
  let i = di(r.email), o = di(r.sub), a = [["x-litellm-end-user-id", i], ["x-claude-gateway-user-id", o], ["x-claude-gateway-user-email", i]];
  for (let [l, h] of a) if (h) e.set(l, h);
}
async function pl(e, t, r, i, o, a) {
  let l = li(e), h = `${i.baseUrl.replace(/\/$/, "")}${t}${l.search}`, u = l.headers, f = typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" } < "u" ? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION : "unknown", m = u.get("user-agent");
  u.set("user-agent", m ? `${m} cc-gateway/${f}` : `cc-gateway/${f}`), Sl(u, i), Al(u, i, a), await i.applyAuth(u);
  let b = await Tm(i.fetch ?? zt, h, { method: e.method, headers: u, body: r, duplex: "half", ...(0, import_chunk_3jjr3wje.wl)({ url: h }), timeout: false }, e.signal, o), g = new Response(b.body, { status: b.status, statusText: b.statusText, headers: vm(b.headers, gm) });
  return Yn(g, b.headers);
}
function Cm(e, { requestId: t, upstreamName: r, wireModel: i, guardrailTraceRow: o, keepaliveIntervalMs: a = ym } = {}) {
  let l = new TextEncoder(), h = l.encode(wm), u = e[Symbol.asyncIterator](), f = Date.now(), m = false, b;
  return new ReadableStream({ start(g) {
    b = setInterval(() => {
      if (!m && Date.now() - f >= a && (g.desiredSize ?? 0) > 0) g.enqueue(h), f = Date.now();
    }, Math.ceil(a / 3)), b.unref?.();
  }, async pull(g) {
    try {
      let { value: k, done: y } = await u.next();
      if (m) return;
      if (y) {
        m = true, clearInterval(b), g.close();
        return;
      }
      if (o) ii(k, o);
      let v = k, E = i !== void 0 && k.type === "message_start" && typeof v.message === "object" && v.message !== null ? { ...k, message: { ...v.message, model: i } } : k;
      g.enqueue(l.encode(`event: ${E.type}
data: ${(0, import_chunk_w578pjby._)(E)}

`)), f = Date.now();
    } catch (k) {
      if (m) return;
      (0, import_chunk_s95w59kf.xo)("warn", `upstream stream error request_id=${t ?? "-"}: ${r ?? "-"}: ${ds((0, import_chunk_jv7av99m.d)(k))}`);
      let y = k instanceof import_chunk_jv7av99m.Nt ? k.status ?? 500 : 500;
      g.enqueue(l.encode(`event: error
data: ${(0, import_chunk_w578pjby._)({ type: "error", ...t && { request_id: t }, error: { type: Xn(y), message: fs[y] ?? "upstream error" } })}

`)), m = true, clearInterval(b), g.close();
    }
  }, async cancel() {
    m = true, clearInterval(b), await u.return?.(void 0).catch(() => {
    });
  } });
}
function Pm(e, t, r) {
  if (r !== "bedrock" || !t) return { body: e, betaHeader: t || void 0 };
  let i = [];
  for (let a of t.split(",")) {
    let l = a.trim();
    if (!l) continue;
    let h = (0, import_chunk_xfj2cwfv._mn)(l);
    i.push(h ? h.header : l);
  }
  if (i.length === 0) return { body: e, betaHeader: void 0 };
  let o = e.anthropic_beta;
  return { body: { ...e, anthropic_beta: (0, import_chunk_4smdap7r.M)([...Array.isArray(o) ? o : [], ...i]) }, betaHeader: void 0 };
}
var Om = ["workspace_id"];
async function fl(e, t, r, i, o, a, l, h, u, f, m, b, g) {
  let k = bm.has(r), y = Pm(k ? is(t) : t, k ? as(a) : a, r), v = y.body, E = { ...l, ...y.betaHeader && { "anthropic-beta": y.betaHeader } }, S = u !== void 0 && (e !== "/v1/messages" || Boolean(v.stream)), O = { signal: h, ...S && { timeout: Math.min(u, Vt) }, ...Object.keys(E).length > 0 && { headers: E } }, x = Om.find((P) => Object.hasOwn(v, P));
  if (x !== void 0) return pe(400, "invalid_request_error", `${x}: not supported through the gateway`, f);
  if (e === "/v1/messages/count_tokens" && r === "bedrock") {
    let { model: P, ...R } = v, U = v.thinking?.budget_tokens, H = await b?.(P, { max_tokens: typeof U === "number" ? U + 1 : 1, ...R });
    if (typeof H === "number") return Response.json({ input_tokens: H });
    return pe(501, "not_supported", "count_tokens is not available on this Bedrock upstream", f, { "x-should-retry": "false" });
  }
  try {
    switch (e) {
      case "/v1/messages": {
        if (v.stream) {
          let { data: D, response: U } = await o.messages.create({ ...v, stream: true }, O).withResponse();
          return Yn(new Response(Cm(D, { requestId: f, upstreamName: i, wireModel: m, guardrailTraceRow: g }), { headers: _m }), U.headers);
        }
        let { data: P, response: R } = await o.messages.create(v, O).withResponse();
        if (g) ii(P, g);
        return Yn(Response.json(m !== void 0 ? { ...P, model: m } : P), R.headers);
      }
      case "/v1/messages/count_tokens": {
        let { data: P, response: R } = await o.messages.countTokens(v, O).withResponse();
        return Yn(Response.json(P), R.headers);
      }
    }
  } catch (P) {
    if (P instanceof import_chunk_jv7av99m.Nt) {
      let R = P.status ?? 500, D = S && P instanceof import_chunk_jv7av99m.CF ? ` (timeouts.upstream_ttfb_ms: ${u})` : "", U = P.cause instanceof Error ? `${P.message} (cause: ${P.cause.name}: ${(0, import_chunk_7cfjrnwy.ee)(P.cause.message, 1e3)})` : P.message;
      (0, import_chunk_s95w59kf.xo)("warn", `${r} upstream ${R} request_id=${f ?? "-"}: ${i}: ${ds(U)}${D}`);
      let H = pe(R, Xn(R), Lm(R, P, a), f);
      return Vn.set(H, { errorType: P.headers?.get("x-amzn-errortype") ?? void 0, message: P.message }), Yn(H, P.headers);
    }
    throw P;
  }
}
var Im = { 400: "invalid_request_error", 401: "authentication_error", 403: "permission_error", 404: "not_found_error", 413: "request_too_large", 429: "rate_limit_error", 501: "not_supported", 529: "overloaded_error" }, fs = { 400: "upstream rejected the request", 401: "upstream authentication failed \u2014 check the gateway operator", 403: "upstream denied the request \u2014 check the gateway operator", 404: "upstream resource not found", 413: "request too large for this upstream", 429: "upstream rate limit exceeded", 500: "upstream error", 501: "upstream does not support this endpoint", 529: "upstream overloaded" };
function Xn(e) {
  return e !== void 0 && Im[e] || "api_error";
}
function Lm(e, t, r) {
  if (e !== 400 && e !== 413) return fs[e] ?? "upstream error";
  let i = t.error;
  if (i?.type === "error" && typeof i.error?.message === "string" && i.error.message !== "" && typeof i.error.type === "string" && bl.has(i.error.type)) return (0, import_chunk_7cfjrnwy.ee)(i.error.message, 1e3);
  if (e === 400 && ((0, import_chunk_cy0ck7w2.Eoo)(t.message) || (0, import_chunk_cy0ck7w2.voo)(t.message))) return "Input is too long.";
  return pi(e, (0, import_chunk_cy0ck7w2.tfr)(e, t.message, r?.split(",")));
}
var $m = ["haiku45", "haiku55", "sonnet45", "sonnet46", "sonnet5", "sonnet55", "opus41", "opus46", "opus47", "opus48", "opus5", "opus55", "fable5", "fable51", "fable52"];
function hi(e, t, r, i) {
  let o = /* @__PURE__ */ new Map();
  for (let a of e) o.set(a.id, { type: "model", id: a.id, display_name: a.label ?? a.id, ...a.description && { description: a.description } });
  if (r) {
    let a = [import_chunk_865at33z.EKi, import_chunk_865at33z.zU, import_chunk_865at33z.I7e], l = $m.filter((h) => !a.includes(h)).reverse();
    for (let h of [...a, ...l]) {
      let u = import_chunk_zhr7rpv7.Xs[h];
      if (o.has(u.firstParty)) continue;
      if (t.some((m) => (m.provider === "anthropic" || u[m.provider] !== null) && yl(m, u.firstParty))) o.set(u.firstParty, { type: "model", id: u.firstParty, display_name: u.firstParty });
    }
  }
  return i ? [...o.values()].filter((a) => !Jn(a.id, i, i.deniedModels && us(a.id, e))) : [...o.values()];
}
function Dm(e, t, r, i) {
  let o;
  for (let a of r) {
    let l = We(e, a, t, i);
    if (!l.ok) continue;
    let h = (0, import_chunk_zhr7rpv7.kd)((0, import_chunk_865at33z.zg)(l.model))?.context;
    if (h === void 0 || h.maximum_window !== void 0) return;
    o = Math.min(o ?? h.window, h.window);
  }
  return o;
}
function Tl(e, t, r = true, i, o = true) {
  return Response.json({ data: hi(e, t, r, i).map((a) => ({ ...a, max_input_tokens: o ? Dm(a.id, e, t, r) : void 0 })), has_more: false, first_id: null, last_id: null });
}
function Rl(e, t) {
  return hs(e) === hs(t);
}
function hs(e) {
  let t = mi(e);
  return t !== null ? `builtin:${t}` : `string:${e.toLowerCase()}`;
}
function mi(e) {
  let t = (0, import_chunk_zhr7rpv7.PB)(e);
  return t ? (0, import_chunk_865at33z.zg)(t.firstParty) : null;
}
function Pl(e, t, r, i, o) {
  let a = Um(t), l = Pt(i, o, e, r), h = (0, import_chunk_865at33z.iCt)(e ?? "") ? e : (0, import_chunk_865at33z.iCt)(r ?? "") ? r : null, u = l ? Nm(l) : h != null ? (0, import_chunk_865at33z.CGn)(h, a) : import_chunk_865at33z.ldt;
  return (0, import_chunk_865at33z.Yfn)(u, a) * 100 * (i?.multiplier ?? 1);
}
function Nm(e) {
  return { inputTokens: e.input, outputTokens: e.output, promptCacheReadTokens: e.cache_read, promptCacheWriteTokens: e.cache_write, webSearchRequests: import_chunk_865at33z.ldt.webSearchRequests };
}
function Pt(e, t, r, i) {
  if (!e || !t) return;
  let o = e.overrides.filter((l) => l.upstream === t);
  if (o.length === 0) return;
  let a = xl(r) ?? xl(i);
  return o.find((l) => Cl(l.model, r)) ?? o.find((l) => Cl(l.model, i)) ?? (a ? o.find((l) => mi(l.model) === a) : void 0);
}
function xl(e) {
  if (!e) return null;
  let t = (0, import_chunk_865at33z.zg)(e);
  return import_chunk_865at33z.xGe[t] !== void 0 ? t : null;
}
function Cl(e, t) {
  return t != null && e.toLowerCase() === t.toLowerCase();
}
function Um(e) {
  return { output_tokens_details: null, input_tokens: e.input_tokens, output_tokens: e.output_tokens, cache_creation_input_tokens: e.cache_creation_input_tokens ?? 0, cache_read_input_tokens: e.cache_read_input_tokens ?? 0, cache_creation: e.cache_creation ? { ephemeral_5m_input_tokens: e.cache_creation.ephemeral_5m_input_tokens ?? 0, ephemeral_1h_input_tokens: e.cache_creation.ephemeral_1h_input_tokens ?? 0 } : null, server_tool_use: { web_search_requests: e.server_tool_use?.web_search_requests ?? 0, web_fetch_requests: 0 }, service_tier: null, inference_geo: null, iterations: null, speed: e.speed === "fast" ? "fast" : null, fallback_credit: null };
}
var gi = /[^\x21-\x7e]|[,;=\\"%]/, Mm = /* @__PURE__ */ new Set(["service.name", "service.version", "claude.deployment_mode", "host.arch", "os.type", "os.version", "wsl.version"]), jm = ["enduser.", "user.", "identity."];
function Ol(e, t) {
  if (!/^[A-Za-z0-9._-]{1,255}$/.test(e)) return `label name '${e}' may use only letters, digits, ".", "_" and "-", 255 characters at most`;
  let r = e.toLowerCase();
  if (Mm.has(r) || jm.some((i) => r.startsWith(i))) return `label '${e}' is reserved: the gateway or Claude sets it. Use another name`;
  if (t === "" || gi.test(t)) return `label '${e}' needs a non-empty value of printable ASCII with no space and none of , ; = \\ " % (if it comes from a \${VAR}, check that variable's value)`;
  if (!ms(t)) return `label '${e}' has too long a value: the limit is 255 characters, and characters such as / : @ count as three`;
  return;
}
function ms(e) {
  try {
    return encodeURIComponent(e).length <= 255;
  } catch {
    return false;
  }
}
function Il(e, t) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return ["auth.google needs a url that parses"];
  }
  let i = r.hostname.replace(/\.$/, ""), o = [];
  if (r.protocol !== "https:") o.push("auth.google needs an https:// url: over http:// the access token would cross the network unencrypted");
  if (!(i === "googleapis.com" || i.endsWith(".googleapis.com") && !i.split(".").includes(""))) o.push(`auth.google sends a Google access token, so url must be a googleapis.com host such as https://telemetry.googleapis.com (got ${i})`);
  if (Object.keys(t).some((l) => l.toLowerCase() === "authorization")) o.push("auth.google sets the Authorization header on each export: remove Authorization from headers, or remove auth");
  return o;
}
var _e = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qm5s85q5.ACr)(), 1), bs = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_8xs3r4c8._un)(), 1), ks = (0, import_chunk_w1d7ygsk.rt)(Nl(), 1);
function Jm(e, t, r) {
  return e == null ? e : (0, import_chunk_gd77dyw4.V0s)(e, t, r);
}
var Ul = Jm;
function Ym(e) {
  if ((0, import_chunk_04nf05xp.tE)(e)) return (0, import_chunk_04nf05xp.cJ)(e, import_chunk_v6yexwhb.wce);
  return (0, import_chunk_04nf05xp.Uz)(e) ? [e] : (0, import_chunk_qwbhh2k3.$Kn)((0, import_chunk_v6yexwhb.z0s)((0, import_chunk_04nf05xp.uJ)(e)));
}
var Ml = Ym;
(0, import_chunk_adx6804h.B)();
var Hl = (0, import_chunk_2cbgkbm2.p)(() => bi().filter((e) => {
  let t = _e.getFieldMeta(e).support.executionTarget;
  return t !== void 0 && t !== "desktop";
}));
function jl(e) {
  return `${e}: this gateway does not serve settings that run Claude Desktop sessions off the device (such as a self-hosted session host), because they make Claude Desktop ignore the gateway as its inference provider and stop applying its on-device settings (disabledBuiltinTools and coworkEgressAllowedHosts among them); remove the key`;
}
function vs(e, t) {
  let r = (i) => Array.isArray(i) && i.every((o) => typeof o === "string");
  if (!r(e) || !r(t)) return;
  return (0, import_chunk_4smdap7r.M)([...e, ...t]);
}
function Gl(e, t) {
  let r = {}, i = vs(e?.disabledBuiltinTools, t?.disabledBuiltinTools);
  if (i !== void 0) r.disabledBuiltinTools = i;
  let o = e?.builtinToolPolicy, a = t?.builtinToolPolicy;
  if ((0, import_chunk_ma3kja9f.T)(o) && (0, import_chunk_ma3kja9f.T)(a)) {
    let l = {};
    for (let [h, u] of Object.entries(o)) if (typeof u === "string") l[h] = u;
    for (let [h, u] of Object.entries(a)) if (typeof u === "string") l[h] = u;
    for (let [h, u] of Object.entries(o)) if (typeof u === "string" && u !== "allow") l[h] = u;
    r.builtinToolPolicy = l;
  }
  return r;
}
function Fl(e, t) {
  if (e.coworkTabEnabled === false) (0, import_chunk_s95w59kf.xo)("warn", `${t}: from November 10, 2026 (12:00 PM PT), coworkTabEnabled no longer keeps Cowork off while desktopHome is not set: current versions of Claude Desktop then open Unified Claude with Cowork on.`);
  if (e.chatSessionRetentionDays !== void 0 && e.coworkSessionRetentionDays !== e.chatSessionRetentionDays) (0, import_chunk_s95w59kf.xo)("warn", `${t}: from November 10, 2026 (12:00 PM PT), while desktopHome is not set, current versions of Claude Desktop start new conversations as Cowork tasks. chatSessionRetentionDays does not delete Cowork tasks. coworkSessionRetentionDays does. To delete chats and Cowork tasks after the same number of days, set both to the same number.`);
}
function ql(e, t) {
  let r = e?.managedMcpServers ?? [], i = t?.managedMcpServers ?? [];
  if (i.length === 0) return {};
  let o = _e.findWebSearchBuiltin(i) && _e.findWebSearchBuiltin(r);
  return { managedMcpServers: (0, import_chunk_4smdap7r.bT)([...i, ...r.filter((a) => a !== o)], (a) => a.name) };
}
function Kl(e, t) {
  let r = e.sandbox;
  if (!(0, import_chunk_ma3kja9f.T)(r)) return;
  let i = r.network;
  if (!(0, import_chunk_ma3kja9f.T)(i)) return;
  let o = i.allowedDomains;
  if (!Array.isArray(o)) return;
  if (o.length === 0) {
    (0, import_chunk_s95w59kf.xo)("warn", `${t}: sandbox.network.allowedDomains is explicitly empty \u2014 the derived coworkEgressAllowedHosts is not served (desktops treat absent and empty identically; a desktop: overlay value, when set, still serves); remove the key, or list the domains to allow`);
    return;
  }
  _e.gatewayOverlayDropChecks().coworkEgressAllowedHosts?.(o, (a) => {
    (0, import_chunk_s95w59kf.xo)("warn", `${t}: desktop intake of the derived coworkEgressAllowedHosts \u2014 ${a} (the CLI sandbox still honors the entry; only desktops drop it)`);
  });
}
function wi(e, t = bi()) {
  let [r] = (0, import_chunk_xcgcdx61.age)((0, import_chunk_0jve1fep.Sge)(e), t.map(import_chunk_0jve1fep.Sge), 1);
  return t.find((i) => (0, import_chunk_0jve1fep.Sge)(i) === r);
}
function Bl(e, t, r, i) {
  if (_e.tryGetFieldMeta(e) !== void 0 || e in {}) return false;
  if (i.includes(e)) return false;
  if (/^(inference|otlp|selfhosted)/.test((0, import_chunk_0jve1fep.Sge)(e))) return false;
  if (_e.retiredFlatKeyEffect(e) !== void 0) return false;
  if (wi(e) !== void 0) return false;
  let { config: o, sentKeys: a } = bs.parseBootstrapConfig({ [e]: t }, r);
  return Object.keys(o).length === 0 && a.length === 1 && a[0] === e;
}
function zl(e) {
  return e === null || typeof e !== "object" ? [] : Object.entries(e).flatMap(([t, r]) => [...t === "properties" ? Object.keys(r) : [], ...zl(r)]);
}
function Jl(e, t, r, i, o) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) throw new import_chunk_jv7av99m.A(`${t} invalid: expected a mapping of desktop keys`, "desktop overlay invalid: expected a mapping of desktop keys");
  _e.setDeprecationClock(0);
  let a = r === void 0 ? void 0 : new URL(r).origin, [l, h] = (0, import_chunk_6mfepmbb.Wl)(Object.entries(e), ([E, S]) => Bl(E, S, a, o)), u = [];
  for (let E of yi()) {
    let S = _e.FlatManagedConfig.shape[E];
    if (S === void 0) continue;
    _e.reportUnread(E, S, e[E], (O, x, P) => {
      let R = Ml(P).at(-1) ?? "", D = (0, import_chunk_vyaqbqge.hF)(e, P);
      if (Bl(R, D, a, o) && wi(R, zl((0, import_chunk_adx6804h.ise)(S, { io: "input", unrepresentable: "any" }))) === void 0) u.push(P);
    });
  }
  let f = (E, S = "") => (0, import_chunk_s95w59kf.xo)("warn", `${t}: ${E}: unknown to the apps gateway's bundled Claude Desktop schema (it may be newer). Sent to Claude Desktop as written.${S}`);
  for (let [E] of l) f(E);
  let m = new Set(Hl()), b = (0, import_chunk_w578pjby.Ka)(Object.fromEntries(h.filter(([E]) => !m.has(E))));
  for (let E of u) (0, import_chunk_6mfepmbb.IMs)(b, E);
  let g = _e.parseConfigRecord(b, { allowedKeys: yi() }), k = new Map(_e.detectDeprecations(g, { keys: yi() }).filter((E) => E.supportEnds !== void 0).map((E) => [_e.describeDeprecation(E), `${_e.describeDeprecation(E, Date.now())} Only Claude Desktop enforces that date. This version of the gateway does not refuse the key or stop sending it because of that date, so it stays in this policy until you remove it.`])), y = ks.validateForGatewayServing(b, { trustedOrigin: a, includeInternal: false }).map((E) => {
    let S = E.msg.includes("unknown desktop key") ? wi(E.key) : void 0;
    return { key: E.key, msg: E.kind === "explicit-empty" && Vm(i, E.key) ? `${E.key}: explicitly empty \u2014 a role policy cannot unset a key the catch-all base sets; set an explicit value here, or remove the key to inherit the base value` : o.includes(E.key) ? `${E.key}: one of gateway.yaml's own keys, not a desktop setting \u2014 check the indentation` : S !== void 0 && m.has(S) ? `${E.key}: unknown desktop key, and the nearest one, ${S}, runs Claude Desktop sessions off the device, which this gateway does not serve; remove the key` : (0, import_chunk_0jve1fep.Sge)(E.key).startsWith("selfhosted") ? jl(E.key) : S !== void 0 ? `${E.key}: unknown desktop key \u2014 did you mean ${S}?` : k.get(E.msg) ?? E.msg, severity: ks.findingBlocksServing(E) ? "error" : "warn" };
  });
  for (let E of m) if (e[E] !== void 0) y.push({ key: E, msg: jl(E), severity: "error" });
  for (let E of y) if (E.severity === "warn") (0, import_chunk_s95w59kf.xo)("warn", `${t}: ${E.msg}`);
  let v = y.filter((E) => E.severity === "error");
  if (v.length > 0) throw new import_chunk_jv7av99m.A(`${t} invalid:
${v.map((E) => `  ${E.msg}`).join(`
`)}`, "desktop overlay invalid: refused or unparseable keys");
  if (e.orgPluginSettings !== void 0) (0, import_chunk_s95w59kf.xo)("warn", `${t}: orgPluginSettings is served in the array form, read by Claude Desktop 1.15200.0 and later; older desktops ignore it and enforce no plugin tool policy`);
  if (g.dictationEnabled === true) (0, import_chunk_s95w59kf.xo)("warn", `${t}: dictationEnabled is set, but this gateway has no dictation route, so the dictation control in Claude Desktop will fail; remove the key`);
  if (g.codeAllowedRepositories !== void 0) (0, import_chunk_s95w59kf.xo)("warn", `${t}: codeAllowedRepositories is served, but Claude Desktop does not apply it yet where sessions run on the device, as every session of this gateway does; it does not limit which repositories Claude Code works in`);
  if (u.length > 0) {
    let E = bs.parseBootstrapConfig(g, a).config;
    for (let S of u) Ul(g, S, (0, import_chunk_vyaqbqge.hF)(e, S));
    if (!(0, import_chunk_z688m88d.Zt)(bs.parseBootstrapConfig(g, a).config, E)) throw new import_chunk_jv7av99m.A(`${t} invalid:
  ${u.join(", ")}: unknown to the apps gateway's bundled Claude Desktop schema, and Claude Desktop would drop or misread the entry or key that holds such a field; check the spelling, or upgrade the gateway if the field is new`, "desktop overlay invalid: refused or unparseable keys");
    for (let S of u) f(S, " This gateway did not check its value.");
  }
  return { ...Object.fromEntries(l), ...g };
}
function Vm(e, t) {
  if (e === void 0) return false;
  let r = e[t];
  return r !== void 0 && r !== null && r !== "";
}
var bi = (0, import_chunk_2cbgkbm2.p)(() => _e.gatewayServableKeys({ includeInternal: false })), yi = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = new Set(Hl());
  return bi().filter((t) => !e.has(t));
});
function ki(e) {
  return e === void 0 || !Ke(e) || Bn(e);
}
function vi(e) {
  try {
    let t = new URL(e);
    if (t.protocol === "https:") return true;
    if (t.protocol === "http:" && (0, import_chunk_dvkg7v5x.DM)(t.hostname)) return true;
    return false;
  } catch {
    return false;
  }
}
var eg = "https://api.anthropic.com", tg = /* @__PURE__ */ new Set(["authorization", "proxy-authorization", "x-api-key", "api-key", "host", "content-length", "content-encoding", "transfer-encoding", "connection", "keep-alive", "te", "trailer", "upgrade", "expect", "content-type", "accept", "accept-encoding", "user-agent", "x-litellm-end-user-id"]), ng = ["anthropic-", "x-stainless-", "x-claude-gateway-", "x-goog-", "x-amz-", "x-amzn-"];
function rg(e) {
  return tg.has(e) || ng.some((t) => e.startsWith(t));
}
var sg = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, og = /^[\x20-\x7e]+$/, Yl = "models on an upstream needs at least one entry: the only models to send to this upstream, named as clients send them, for example models: [claude-opus-4-8]. Remove the key to send it every model.", Ei = "groups on an upstream must be a list of IdP group names, none empty, for example groups: [team-a]. Only developers in one of them are sent to this upstream. Remove the key to serve everyone.", Vl = "a mantle upstream needs a models list: the models your AWS account has on Mantle, named as clients send them, for example models: [claude-opus-4-7, claude-haiku-4-5]. Only these go to this upstream.", nu = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_rnm2beqc.we)().optional(), t = (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1), { invalid_type_error: Yl }).min(1, { message: Yl }).optional(), r = (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1, Ei), { invalid_type_error: Ei }).min(1, Ei).optional(), i = (0, import_chunk_rnm2beqc.we)().min(1).regex(/^[\x21-\x7e]+$/, "must be a valid header value"), o = (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)()).superRefine((u, f) => {
    let m = /* @__PURE__ */ new Set();
    for (let [b, g] of Object.entries(u)) {
      let k = b.toLowerCase(), y = !sg.test(b) ? "is not a valid HTTP header name" : m.has(k) ? "is listed twice (header names ignore case)" : rg(k) ? "is reserved (the gateway or the provider's SDK sets or signs it). Remove it from this upstream's headers." : !og.test(g) || g !== g.trim() ? "has an empty or invalid value: use printable ASCII with no space at either end (if it comes from a ${VAR}, check that variable's value)" : void 0;
      if (m.add(k), y) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: [b], message: `header '${b}' ${y}` });
    }
  }).optional(), a = (0, import_chunk_rnm2beqc.Xp)({ role_arn: (0, import_chunk_rnm2beqc.we)().regex(/^arn:aws(-us-gov)?:iam::\d{12}:role\/[\w+=,.@\/-]+$/, "must be an IAM role ARN (arn:aws:iam::<account>:role/<name>)"), external_id: (0, import_chunk_rnm2beqc.we)().regex(/^[\w+=,.@:\/-]{2,1224}$/, "must be 2 to 1224 characters of letters, digits and _+=,.@:/-").optional(), session_name: (0, import_chunk_rnm2beqc.df)(["email", "sub"]).optional() }).optional(), l = (0, import_chunk_rnm2beqc.ROo)("provider", [(0, import_chunk_rnm2beqc.Xp)({ name: e, headers: o, groups: r, models: t, provider: (0, import_chunk_rnm2beqc.Cg)("anthropic"), base_url: (0, import_chunk_rnm2beqc.we)().default(eg).refine(Ee, { message: "base_url targets a metadata endpoint" }), auth: (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.on)({ api_key: (0, import_chunk_rnm2beqc.we)().min(1) }).strict(), (0, import_chunk_rnm2beqc.on)({ oauth_token: (0, import_chunk_rnm2beqc.we)().min(1) }).strict(), (0, import_chunk_rnm2beqc.on)({ federation_rule_id: (0, import_chunk_rnm2beqc.we)().min(1), organization_id: (0, import_chunk_rnm2beqc.we)().min(1), identity_token_file: (0, import_chunk_rnm2beqc.we)().min(1), service_account_id: (0, import_chunk_rnm2beqc.we)().optional(), workspace_id: (0, import_chunk_rnm2beqc.we)().optional() }).strict()]), forward_user_identity: (0, import_chunk_rnm2beqc.Ci)().optional() }), (0, import_chunk_rnm2beqc.Xp)({ name: e, headers: o, groups: r, models: t, provider: (0, import_chunk_rnm2beqc.Cg)("bedrock"), region: (0, import_chunk_rnm2beqc.we)().min(1), guardrail: (0, import_chunk_rnm2beqc.Xp)({ id: i, version: i, input_tagging: (0, import_chunk_rnm2beqc.df)(Zd).optional() }).optional(), guardrail_trace: (0, import_chunk_rnm2beqc.Ci)().optional(), base_url: (0, import_chunk_rnm2beqc.we)().optional().refine((u) => u === void 0 || Ee(u), { message: "base_url targets a metadata endpoint" }), auth: (0, import_chunk_rnm2beqc.Xp)({ aws_access_key_id: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_secret_access_key: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_session_token: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_bearer_token: (0, import_chunk_rnm2beqc.we)().min(1).optional() }).default({}).refine((u) => !u.aws_access_key_id === !u.aws_secret_access_key, { message: "aws_access_key_id and aws_secret_access_key must be set together" }).refine((u) => !u.aws_session_token || !!u.aws_access_key_id, { message: "aws_session_token requires aws_access_key_id and aws_secret_access_key" }), assume_role: a }), (0, import_chunk_rnm2beqc.Xp)({ name: e, headers: o, groups: r, provider: (0, import_chunk_rnm2beqc.Cg)("mantle"), region: (0, import_chunk_rnm2beqc.we)().regex(/^[a-z0-9-]+$/, "must be an AWS region (lowercase alnum + hyphens)"), base_url: (0, import_chunk_rnm2beqc.we)().optional().refine((u) => u === void 0 || Ee(u), { message: "base_url targets a metadata endpoint" }), models: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1), { required_error: Vl, invalid_type_error: Vl }).min(1, { message: "a mantle upstream needs at least one entry in models: list the models your AWS account has on Mantle, named as clients send them." }), auth: (0, import_chunk_rnm2beqc.Xp)({ aws_access_key_id: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_secret_access_key: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_session_token: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_bearer_token: (0, import_chunk_rnm2beqc.we)().min(1).optional() }).default({}).refine((u) => !u.aws_access_key_id === !u.aws_secret_access_key, { message: "aws_access_key_id and aws_secret_access_key must be set together" }).refine((u) => !u.aws_session_token || !!u.aws_access_key_id, { message: "aws_session_token requires aws_access_key_id and aws_secret_access_key" }), assume_role: a }), (0, import_chunk_rnm2beqc.Xp)({ name: e, headers: o, groups: r, models: t, provider: (0, import_chunk_rnm2beqc.Cg)("anthropicAws"), region: (0, import_chunk_rnm2beqc.we)().regex(/^[a-z0-9-]+$/, "must be an AWS region (lowercase alnum + hyphens)"), workspace_id: i, base_url: (0, import_chunk_rnm2beqc.we)().optional().refine((u) => u === void 0 || Ee(u), { message: "base_url targets a metadata endpoint" }), auth: (0, import_chunk_rnm2beqc.Xp)({ api_key: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_access_key_id: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_secret_access_key: (0, import_chunk_rnm2beqc.we)().min(1).optional(), aws_session_token: (0, import_chunk_rnm2beqc.we)().min(1).optional() }).default({}).refine((u) => !u.aws_access_key_id === !u.aws_secret_access_key, { message: "aws_access_key_id and aws_secret_access_key must be set together" }).refine((u) => !u.aws_session_token || !!u.aws_access_key_id, { message: "aws_session_token requires aws_access_key_id and aws_secret_access_key" }) }), (0, import_chunk_rnm2beqc.Xp)({ name: e, headers: o, groups: r, models: t, provider: (0, import_chunk_rnm2beqc.Cg)("anthropicGoogleCloud"), project_id: (0, import_chunk_rnm2beqc.we)().regex(/^[A-Za-z0-9_-]+$/, "must be a GCP project id"), workspace_id: (0, import_chunk_rnm2beqc.we)().regex(/^[A-Za-z0-9_-]+$/, "must be a workspace id"), location: (0, import_chunk_rnm2beqc.we)().regex(/^[A-Za-z0-9_-]+$/, "must be a GCP location").default("global"), base_url: (0, import_chunk_rnm2beqc.we)().optional().refine((u) => u === void 0 || Ee(u), { message: "base_url targets a metadata endpoint" }), auth: (0, import_chunk_rnm2beqc.Xp)({ service_account_json: (0, import_chunk_rnm2beqc.we)().min(1).optional(), access_token: (0, import_chunk_rnm2beqc.we)().min(1).optional() }).default({}) }), (0, import_chunk_rnm2beqc.Xp)({ name: e, headers: o, groups: r, models: t, provider: (0, import_chunk_rnm2beqc.Cg)("vertex"), region: (0, import_chunk_rnm2beqc.we)().min(1), project_id: (0, import_chunk_rnm2beqc.we)().min(1), base_url: (0, import_chunk_rnm2beqc.we)().optional().refine((u) => u === void 0 || Ee(u), { message: "base_url targets a metadata endpoint" }), auth: (0, import_chunk_rnm2beqc.Xp)({ service_account_json: (0, import_chunk_rnm2beqc.we)().optional(), access_token: (0, import_chunk_rnm2beqc.we)().optional() }).default({}) }), (0, import_chunk_rnm2beqc.Xp)({ name: e, headers: o, groups: r, models: t, provider: (0, import_chunk_rnm2beqc.Cg)("foundry"), resource: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_gq1dr8pm.$Ii, "must be 2-64 letters, digits or hyphens, not starting or ending with a hyphen"), base_url: (0, import_chunk_rnm2beqc.we)().optional().refine((u) => u === void 0 || Ee(u), { message: "base_url targets a metadata endpoint" }), auth: (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.Xp)({ api_key: (0, import_chunk_rnm2beqc.we)().min(1) }), (0, import_chunk_rnm2beqc.Xp)({ use_azure_ad: (0, import_chunk_rnm2beqc.Cg)(true) })]) })]), h = (0, import_chunk_rnm2beqc.we)().refine((u) => {
    try {
      return ri(u), true;
    } catch {
      return false;
    }
  }, { message: "must be a valid IP or CIDR" });
  return (0, import_chunk_rnm2beqc.Xp)({ $schema: (0, import_chunk_rnm2beqc.we)().optional(), listen: (0, import_chunk_rnm2beqc.Xp)({ host: (0, import_chunk_rnm2beqc.we)().default("0.0.0.0"), port: import_chunk_rnm2beqc.pK.number().default(8080), tls: (0, import_chunk_rnm2beqc.Xp)({ cert: (0, import_chunk_rnm2beqc.we)(), key: (0, import_chunk_rnm2beqc.we)() }).optional(), public_url: (0, import_chunk_rnm2beqc.we)().url().transform((u) => u.replace(/\/$/, "")).optional(), trusted_proxies: (0, import_chunk_rnm2beqc._o)(h).default([]) }).refine((u) => u.public_url !== void 0 || (0, import_chunk_dvkg7v5x.DM)(u.host), { path: ["public_url"], message: "listen.public_url is required when listen.host is not a loopback address \u2014 set it to the externally-visible origin (e.g. https://claude-gateway.corp.example.com). Without it the IdP redirect_uri and token issuer would be derived from the client-controlled Host header." }), access_control: (0, import_chunk_rnm2beqc.Xp)({ allow_cidrs: (0, import_chunk_rnm2beqc._o)(h).default([]), deny_cidrs: (0, import_chunk_rnm2beqc._o)(h).default([]) }).default({}), limits: (0, import_chunk_rnm2beqc.Xp)({ max_request_bytes: import_chunk_rnm2beqc.pK.number().int().positive().default(33554432), max_request_header_bytes: import_chunk_rnm2beqc.pK.number().int().positive().optional(), max_url_length: import_chunk_rnm2beqc.pK.number().int().positive().optional() }).default({}), rate_limits: (0, import_chunk_rnm2beqc.Xp)({ device_authorization: (0, import_chunk_rnm2beqc.Xp)({ max: import_chunk_rnm2beqc.pK.number().int().positive().default(30), window_seconds: import_chunk_rnm2beqc.pK.number().int().positive().default(600) }).default({}), device_verify: (0, import_chunk_rnm2beqc.Xp)({ max: import_chunk_rnm2beqc.pK.number().int().positive().default(10), window_seconds: import_chunk_rnm2beqc.pK.number().int().positive().default(600) }).default({}) }).default({}), timeouts: (0, import_chunk_rnm2beqc.Xp)({ upstream_ttfb_ms: import_chunk_rnm2beqc.pK.number().int().positive().optional() }).default({}).transform((u) => u.upstream_ttfb_ms === void 0 ? { upstream_ttfb_ms: 12e4 } : { upstream_ttfb_ms: u.upstream_ttfb_ms, operator_set: true }), upstreams: (0, import_chunk_rnm2beqc._o)(l).min(1).transform((u) => u.map((f) => ({ ...f, name: f.name ?? f.provider }))).superRefine((u, f) => {
    let m = /* @__PURE__ */ new Set();
    for (let g of u) {
      if (m.has(g.name)) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: `duplicate upstream name '${g.name}' \u2014 set distinct 'name:' on each` });
      if (m.add(g.name), (g.provider === "bedrock" || g.provider === "mantle") && g.assume_role && g.auth.aws_bearer_token) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: `upstream '${g.name}': assume_role needs SigV4 source credentials (access keys or the ambient AWS chain, auth: {}); aws_bearer_token cannot call sts:AssumeRole` });
      let k = g.provider === "anthropic" && g.forward_user_identity && URL.canParse(g.base_url) ? new URL(g.base_url).hostname.replace(/\.$/, "") : "";
      if (k === "anthropic.com" || k.endsWith(".anthropic.com") || /^aws-external-anthropic\.[^.]+\.api\.aws$/.test(k) || k === "claude.googleapis.com") f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: `upstream '${g.name}': forward_user_identity is for identifying users to a proxy you run at base_url; it is refused for ${k} so user emails are never sent to Anthropic` });
    }
    let b = u.filter((g) => g.provider === "bedrock");
    if (b.some((g) => g.guardrail) && !b.every((g) => g.guardrail)) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: "set guardrail: on all bedrock upstreams or none \u2014 failover could otherwise send requests to a bedrock upstream without the guardrail" });
    if (new Set(b.map((g) => g.guardrail?.input_tagging)).size > 1) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: "set the same guardrail.input_tagging on all bedrock upstreams \u2014 failover could otherwise send requests to a bedrock upstream that tags them differently" });
    if (b.some((g) => g.guardrail) && u.some((g) => g.provider === "mantle")) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: "a mantle upstream cannot be used beside a bedrock upstream that has a guardrail, because the gateway applies no guardrail to requests it sends to Mantle. Remove every mantle upstream, or remove the guardrail from every bedrock upstream." });
  }), auto_include_builtin_models: (0, import_chunk_rnm2beqc.Ci)().default(true), models: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.Xp)({ id: (0, import_chunk_rnm2beqc.we)().min(1), label: (0, import_chunk_rnm2beqc.we)().optional(), description: (0, import_chunk_rnm2beqc.we)().optional(), upstream_model: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)()).refine((u) => Object.keys(u).length > 0, { message: "upstream_model must set at least one upstream" }) })).default([]), login_notice: (0, import_chunk_rnm2beqc.we)().transform(import_chunk_tp3c5q2s.Xb).pipe((0, import_chunk_rnm2beqc.we)().min(1).max(import_chunk_q3zwm6gk.pBr)).optional(), oidc: (0, import_chunk_rnm2beqc.Xp)({ issuer: (0, import_chunk_rnm2beqc.we)().refine(Ee, { message: "oidc.issuer must be an http(s) URL and not target a cloud metadata endpoint" }), client_id: (0, import_chunk_rnm2beqc.we)().min(1), client_secret: (0, import_chunk_rnm2beqc.we)().min(1).optional(), client_assertion: (0, import_chunk_rnm2beqc.Xp)({ private_key_pem: (0, import_chunk_rnm2beqc.we)().min(1), certificate_pem: (0, import_chunk_rnm2beqc.we)().min(1) }).optional(), ca_cert_pem: (0, import_chunk_rnm2beqc.we)().optional(), groups_claim: (0, import_chunk_rnm2beqc.we)().min(1).default("groups"), email_claim: (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.we)().min(1), (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1)).min(1)]).default("email"), user_id_claim: (0, import_chunk_rnm2beqc.we)().min(1).optional(), userinfo_fallback: (0, import_chunk_rnm2beqc.Ci)().default(false), use_pkce: (0, import_chunk_rnm2beqc.Ci)().default(true), clock_skew_seconds: import_chunk_rnm2beqc.pK.number().int().nonnegative().optional(), token_endpoint_auth_method: (0, import_chunk_rnm2beqc.df)(["client_secret_basic", "client_secret_post", "private_key_jwt"]).optional(), id_token_signed_response_alg: (0, import_chunk_rnm2beqc.df)(["RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512", "EdDSA"]).optional(), additional_authorized_parties: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), discovery_url: (0, import_chunk_rnm2beqc.we)().url().refine(Ee, { message: "oidc.discovery_url must be an http(s) URL and not target a cloud metadata endpoint" }).refine((u) => {
    try {
      return new URL(u).pathname.includes("/.well-known/");
    } catch {
      return false;
    }
  }, { message: "oidc.discovery_url must point at the discovery document itself (path containing /.well-known/) \u2014 openid-client appends /.well-known/openid-configuration to any other path" }).optional(), use_proxy: (0, import_chunk_rnm2beqc.Ci)().optional(), scopes: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().trim().min(1).refine((u) => !/\s/.test(u), { message: "must be a single OAuth scope token (no whitespace)" })).optional().refine((u) => u === void 0 || u.includes("openid"), { message: "oidc.scopes must include 'openid' \u2014 without it the IdP will not return an id_token" }), scope_on_refresh: (0, import_chunk_rnm2beqc.Ci)().default(false), extra_auth_params: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)().min(1), (0, import_chunk_rnm2beqc.we)()).default({}).refine((u) => !Object.keys(u).some((f) => ["redirect_uri", "state", "nonce", "code_challenge", "code_challenge_method", "scope", "response_type", "response_mode", "client_id"].includes(f)), { message: "oidc.extra_auth_params must not override protocol parameters the gateway manages (redirect_uri, state, nonce, code_challenge*, scope, response_type, response_mode, client_id) \u2014 use oidc.scopes for scope; the gateway callback only reads query-mode responses" }), allowed_email_domains: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).transform((u, f) => {
    let m = u.map((b) => b.trim().replace(/^@/, "").toLowerCase()).filter(Boolean);
    if (u.length > 0 && m.length === 0) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: "allowed_email_domains contains only empty entries after normalization" });
    return m;
  }).optional(), form_action_origins: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().refine(Ee, { message: "each form_action_origin must be an http(s) URL and not target a cloud metadata endpoint" })).transform((u) => u.map((f) => new URL(f).origin)).refine((u) => u.every((f) => !/[;,'"\s]/.test(f)), { message: "oidc.form_action_origins entries must not contain CSP delimiters (; , quotes or whitespace)" }).default([]), allowed_groups: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).refine((u) => !u.length || u.some((f) => f.trim()), { message: "oidc.allowed_groups contains only empty entries" }).transform((u) => u.map((f) => f.trim()).filter(Boolean)).optional(), google_groups: (0, import_chunk_rnm2beqc.Xp)({ service_account_json_path: (0, import_chunk_rnm2beqc.we)().min(1), admin_email: (0, import_chunk_rnm2beqc.we)().email() }).optional() }).superRefine((u, f) => {
    if (u.token_endpoint_auth_method !== "private_key_jwt") {
      if (u.client_secret === void 0) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_secret"], message: "oidc.client_secret is required \u2014 or, if your IdP issues certificates instead of secrets (for example Microsoft Entra certificate credentials), set token_endpoint_auth_method: private_key_jwt with a client_assertion block" });
      if (u.client_assertion !== void 0) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion"], message: "oidc.client_assertion is only used with token_endpoint_auth_method: private_key_jwt \u2014 set that and remove client_secret, or remove this block" });
      return;
    }
    if (u.client_secret !== void 0) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_secret"], message: "oidc.client_secret must be removed when token_endpoint_auth_method is private_key_jwt \u2014 the gateway authenticates to the IdP with the client_assertion certificate instead" });
    if (u.client_assertion === void 0) {
      f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion"], message: "oidc.client_assertion is required when token_endpoint_auth_method is private_key_jwt: private_key_pem (the key the gateway signs with) and certificate_pem (the certificate you uploaded to the IdP)" });
      return;
    }
    let { private_key_pem: m, certificate_pem: b } = u.client_assertion;
    if (m.includes("ENCRYPTED")) {
      f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion", "private_key_pem"], message: "oidc.client_assertion.private_key_pem is encrypted with a passphrase; the gateway needs the key as an unencrypted PEM file" });
      return;
    }
    let g;
    try {
      g = (0, import_crypto8.createPrivateKey)(m);
    } catch {
      f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion", "private_key_pem"], message: 'oidc.client_assertion.private_key_pem is not a PEM private key the gateway can read \u2014 expected a key beginning with "-----BEGIN PRIVATE KEY-----" (PKCS#8) or "-----BEGIN RSA PRIVATE KEY-----" (PKCS#1)' });
      return;
    }
    if (g.asymmetricKeyType !== "rsa") {
      f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion", "private_key_pem"], message: `oidc.client_assertion.private_key_pem must be an RSA key (the client assertion is signed with RS256); got ${g.asymmetricKeyType}` });
      return;
    }
    let k = g.asymmetricKeyDetails?.modulusLength ?? 0;
    if (k < 2048) {
      f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion", "private_key_pem"], message: `oidc.client_assertion.private_key_pem must be an RSA key of at least 2048 bits; got ${k}` });
      return;
    }
    if (b.split("-----BEGIN CERTIFICATE-----").length > 2) {
      f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion", "certificate_pem"], message: "oidc.client_assertion.certificate_pem must contain only the client certificate, not a chain \u2014 keep the one certificate issued for private_key_pem (with openssl pkcs12, add -clcerts)" });
      return;
    }
    let y;
    try {
      y = new import_crypto8.X509Certificate(b);
    } catch {
      f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion", "certificate_pem"], message: 'oidc.client_assertion.certificate_pem is not a PEM certificate the gateway can read \u2014 expected one beginning with "-----BEGIN CERTIFICATE-----"' });
      return;
    }
    if (!y.checkPrivateKey(g)) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["client_assertion", "certificate_pem"], message: "oidc.client_assertion.certificate_pem does not match private_key_pem \u2014 use the certificate that was issued for this key" });
  }).optional(), session: (0, import_chunk_rnm2beqc.Xp)({ jwt_secret: (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.we)().min(32), (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(32)).min(1)]).transform((u) => Array.isArray(u) ? u : [u]), ttl_hours: import_chunk_rnm2beqc.pK.number().default(1) }), store: (0, import_chunk_rnm2beqc.Xp)({ postgres_url: (0, import_chunk_rnm2beqc.we)().regex(/^postgres(ql)?:\/\//, "must be postgres:// or postgresql://"), username: (0, import_chunk_rnm2beqc.we)().optional(), password: (0, import_chunk_rnm2beqc.we)().optional(), max_connections: import_chunk_rnm2beqc.pK.number().int().positive().default(5), connect_timeout_seconds: import_chunk_rnm2beqc.pK.number().int().min(1).max(60).default(5), readiness_grace_seconds: (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.nr)(), (0, import_chunk_rnm2beqc.we)().regex(/^\d+$/, "must be a whole number of seconds").transform(Number)]).pipe((0, import_chunk_rnm2beqc.nr)().int().min(0).max(3600)).default(0) }), telemetry: (0, import_chunk_rnm2beqc.Xp)({ forward_to: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.Xp)({ url: (0, import_chunk_rnm2beqc.we)().refine(vi, { message: "forward_to.url must be https:// (http:// allowed for loopback only)" }).refine((u) => Ke(u) || Ee(u), { message: "forward_to.url must not target a cloud metadata endpoint" }).refine((u) => !Ke(u) || Ee(u), { message: "forward_to.url is a loopback address, which the gateway blocks by default; set CLAUDE_GATEWAY_ALLOW_LOOPBACK=1 in the gateway environment to allow a sidecar collector" }), headers: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)()).default({}), auth: (0, import_chunk_rnm2beqc.Xp)({ google: (0, import_chunk_rnm2beqc.Xp)({ service_account_json: (0, import_chunk_rnm2beqc.we)().min(1).optional() }) }).optional(), metrics: (0, import_chunk_rnm2beqc.Ci)().default(true), logs: (0, import_chunk_rnm2beqc.Ci)().default(false), traces: (0, import_chunk_rnm2beqc.Ci)().default(false) })).default([]), resource_attributes: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)()).superRefine((u, f) => {
    for (let [m, b] of Object.entries(u)) {
      let g = Ol(m, b);
      if (g) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: [m], message: g });
    }
  }).optional() }).default({ forward_to: [] }), managed: (0, import_chunk_rnm2beqc.Xp)({ settings: (0, import_chunk_rnm2beqc.we)().optional(), policy_mode: (0, import_chunk_rnm2beqc.df)(["first_match", "layered"]).optional(), policies: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ match: (0, import_chunk_rnm2beqc.Xp)({ groups: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1, "match.groups contains an empty entry \u2014 set a group name or remove the entry")).min(1, "match.groups is empty \u2014 the policy would match no one (and is not a catch-all); list groups or remove the key").optional(), email_domain: (0, import_chunk_rnm2beqc.we)().min(1, "match.email_domain is empty \u2014 an empty domain disables the match and the policy would apply to every authenticated user; set a domain or remove the key").transform((u) => u.trim().replace(/^@/, "").toLowerCase()).refine((u) => u.length > 0, { message: "match.email_domain is blank after normalization \u2014 set a domain or remove the key" }).refine((u) => !/[@\s,]/.test(u), { message: 'match.email_domain contains "@", whitespace, or "," \u2014 write one bare domain (e.g. acme.com, not a full email address or a list); the matcher compares a single domain exactly' }).optional() }).default({}), code: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.vf)()).optional(), cli: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.vf)()).optional(), settings: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.vf)()).optional(), desktop: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.vf)()).optional(), serve_to_desktop: (0, import_chunk_rnm2beqc.Ci)().optional() }).strict()).superRefine((u, f) => {
    if (!u.some((m) => m.code)) return;
    for (let [m, b] of u.entries()) for (let g of ["cli", "settings"]) if (b[g]) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: [m, g], message: b.code ? `this policy has a \`code\` block and a \`${g}\` block. Put all its settings into the one \`code\` block` : `this file has a \`code\` block, so this \`${g}\` block's rules would not reach Claude Desktop's Code tab. Write every block under \`code\`, or every block under \`cli\` (terminal Claude Code only). See "Choose cli or code" in the gateway configuration docs` });
  }).transform((u) => u.map(({ match: f, code: m, cli: b, settings: g, desktop: k, serve_to_desktop: y }) => ({ match: f, cli: m ?? b ?? g ?? {}, desktop: k, serve_to_desktop: y, ...u.some((v) => v.code) && { underCode: true } }))).optional() }).optional(), admin: (0, import_chunk_rnm2beqc.Xp)({ read_keys: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.Xp)({ id: (0, import_chunk_rnm2beqc.we)(), key: (0, import_chunk_rnm2beqc.we)().min(32) })).default([]), write_keys: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.Xp)({ id: (0, import_chunk_rnm2beqc.we)(), key: (0, import_chunk_rnm2beqc.we)().min(32) })).default([]), admin_groups: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1, "admin.admin_groups contains an empty entry \u2014 an empty entry can pair with an empty IdP group claim and grant admin access; set a group name or remove the entry")).default([]), blocked_message: (0, import_chunk_rnm2beqc.we)().optional(), audit_retention_days: import_chunk_rnm2beqc.pK.number().int().positive().default(365), spend_retention_months: import_chunk_rnm2beqc.pK.number().int().positive().default(13), identity_retention_days: import_chunk_rnm2beqc.pK.number().int().positive().default(90), pooled_conflict_rule: (0, import_chunk_rnm2beqc.df)(["default_order", "priority_list"]).optional(), pooled_priority_order: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1)).max(50).refine((u) => new Set(u).size === u.length, "admin.pooled_priority_order lists a group more than once").optional(), group_limit_mode: (0, import_chunk_rnm2beqc.df)(["min", "max"]).default("min"), billing_group_tag: (0, import_chunk_rnm2beqc.we)().regex(tl, 'must be 1 to 64 characters, each an ASCII letter, a digit or one of _ . : / = + - @, and must not start with "anthropic" in any letter case').optional() }).superRefine((u, f) => {
    let m = [...u.read_keys, ...u.write_keys].map((g) => g.id), b = m.find((g, k) => m.indexOf(g) !== k);
    if (b) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, message: `admin key id '${b}' is repeated; key ids must be unique for audit attribution` });
    if (u.pooled_conflict_rule === "priority_list" && !u.pooled_priority_order?.length) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["pooled_priority_order"], message: "admin.pooled_conflict_rule: priority_list needs at least one group in admin.pooled_priority_order" });
  }).optional(), enforcement: (0, import_chunk_rnm2beqc.Xp)({ fail_closed_on_error: (0, import_chunk_rnm2beqc.Ci)().default(false) }).default({ fail_closed_on_error: false }), load_test_mode: (0, import_chunk_rnm2beqc.Xp)({ enabled: (0, import_chunk_rnm2beqc.Ci)(), reply_tokens: (0, import_chunk_rnm2beqc.nr)().int().min(1).max(1e5).default(750), reply_seconds: (0, import_chunk_rnm2beqc.nr)().min(0).max(600).default(9.5) }).optional(), cri: (0, import_chunk_rnm2beqc.Xp)({ enabled: (0, import_chunk_rnm2beqc.Ci)().default(false), audience: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().trim().min(1)).default([]), jwks_url: (0, import_chunk_rnm2beqc.we)().optional().refine((u) => u === void 0 || Ke(u), { message: "cri.jwks_url must be a loopback URL \u2014 it exists for tests against local mocks, and honoring an external URL here would let it substitute the admission authority (its keys would mint CRI principals); remove it to use the pinned Anthropic JWKS" }).refine(ki, { message: "cri.jwks_url targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every JWKS fetch at runtime, so as configured the CRI wall could never admit anyone" }), issuer: (0, import_chunk_rnm2beqc.we)().refine(vi, { message: "cri.issuer must be https:// (http:// allowed for loopback only) \u2014 the verification JWKS derives from it" }).refine((u) => Ke(u) || Ee(u), { message: "cri.issuer must not target a cloud metadata endpoint" }).refine(ki, { message: "cri.issuer targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every derived-JWKS fetch at runtime, so as configured the CRI wall could never admit anyone" }).refine((u) => {
    try {
      return new URL(u).href === u && !u.includes("?") && !u.includes("#");
    } catch {
      return false;
    }
  }, { message: "cri.issuer must be a canonical URL with no query or fragment \u2014 the iss pin and the {issuer}/jwks.json derivation both use the exact configured string" }).refine((u) => !u.endsWith("/"), { message: "cri.issuer must not end with '/' \u2014 the gateway pins the token's iss claim to this exact string and derives the verification JWKS URL as {issuer}/jwks.json" }).optional(), org_allowlist: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().trim().min(1).transform((u) => u.toLowerCase())).default([]), policy: (0, import_chunk_rnm2beqc.Xp)({ webhook: (0, import_chunk_rnm2beqc.Xp)({ url: (0, import_chunk_rnm2beqc.we)().refine(vi, { message: "cri.policy.webhook.url must be https:// (http:// allowed for loopback only)" }).refine((u) => Ke(u) || Ee(u), { message: "cri.policy.webhook.url must not target a cloud metadata endpoint" }).refine(ki, { message: "cri.policy.webhook.url targets loopback, which the gateway blocks at runtime unless CLAUDE_GATEWAY_ALLOW_LOOPBACK=1 is set \u2014 as configured, the policy webhook could never run" }), timeout_ms: import_chunk_rnm2beqc.pK.number().int().positive().max(3e4).default(2e3), fail_closed: (0, import_chunk_rnm2beqc.Ci)().default(true) }) }).optional() }).optional(), pricing: (0, import_chunk_rnm2beqc.Xp)({ multiplier: import_chunk_rnm2beqc.pK.number().gt(0).lte(10).default(1), overrides: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.Xp)({ upstream: (0, import_chunk_rnm2beqc.we)().min(1), model: (0, import_chunk_rnm2beqc.we)().min(1), input: import_chunk_rnm2beqc.pK.number().positive().max(1e4), output: import_chunk_rnm2beqc.pK.number().positive().max(1e4), cache_read: import_chunk_rnm2beqc.pK.number().positive().max(1e4), cache_write: import_chunk_rnm2beqc.pK.number().positive().max(1e4) })).default([]) }).optional() }).superRefine((u, f) => {
    if (u.enforcement.fail_closed_on_error && u.admin === void 0) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["enforcement", "fail_closed_on_error"], message: "has no effect without an `admin:` block \u2014 spend enforcement only runs when admin is configured" });
    let m = new Set(u.upstreams.map((k) => k.name));
    for (let [k, y] of u.models.entries()) for (let v of Object.keys(y.upstream_model)) if (!m.has(v)) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["models", k, "upstream_model", v], message: `references unknown upstream '${v}'` });
    let b = u.cri?.enabled === true;
    if (b && (u.cri?.audience.length ?? 0) === 0) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["cri", "audience"], message: "cri.audience must list at least one registered audience value when cri.enabled is true \u2014 the audience binding is what stops a CRI JWT minted for another org's gateway from replaying here, so a wall with no expected audience would admit no one" });
    if (b && (u.cri?.org_allowlist.length ?? 0) === 0) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["cri", "org_allowlist"], message: "cri.org_allowlist must list at least one Claude Enterprise organization UUID when cri.enabled is true \u2014 an empty allowlist would admit no one" });
    if (u.oidc === void 0 && !b) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["oidc"], message: "oidc is required \u2014 it may be omitted only for a customer-routed-inference-only deployment (cri.enabled: true)" });
    if (u.pricing !== void 0 && u.admin === void 0 && !du(u.managed)) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["pricing"], message: "has no effect without an `admin:` block or a `managed:` block with at least one policy \u2014 the spend meter (admin) and the modelPricing pushed to clients (managed) are the only readers" });
    for (let [k, y] of u.telemetry.forward_to.entries()) {
      if (!y.auth) continue;
      for (let v of Il(y.url, y.headers)) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["telemetry", "forward_to", k, "auth", "google"], message: v });
    }
    let g = u.pricing?.overrides ?? [];
    for (let [k, y] of g.entries()) {
      if (!m.has(y.upstream)) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["pricing", "overrides", k, "upstream"], message: `references unknown upstream '${y.upstream}'` });
      let v = g.slice(0, k).find((E) => E.upstream === y.upstream && Rl(E.model, y.model));
      if (v) f.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["pricing", "overrides", k], message: `duplicates the pricing override for '${v.model}' on upstream '${y.upstream}'` });
    }
  });
});
async function Ai(e) {
  if (typeof e === "string") {
    let t = e.match(/^\$\{file:(.+)\}$/);
    if (t) {
      let r = t[1];
      if (!(0, import_path.isAbsolute)(r)) throw Error(`\${file:} path must be absolute: ${r}`);
      return (await (0, import_promises3.readFile)(r, "utf8")).trim();
    }
    return e.replace(/\$\{(\w+)\}/g, (r, i) => {
      let o = process.env[i];
      if (o === void 0) throw Error(`undefined env var in config: ${i}`);
      return o;
    });
  }
  if (Array.isArray(e)) return Promise.all(e.map(Ai));
  if (e && typeof e === "object") {
    let t = {};
    for (let [r, i] of Object.entries(e)) t[r] = await Ai(i);
    return t;
  }
  return e;
}
async function ru(e) {
  let t = await (0, import_promises3.readFile)(e, "utf8"), r = (0, import_chunk_p1ewvgeh.V7)(t), i = await Ai(r);
  if (typeof i === "object" && i !== null && "dev" in i) throw Error("`dev:` was removed \u2014 the gateway is Postgres-only. Set store.postgres_url (local: docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres)");
  return nu().parse(i);
}
function Xl(e, t) {
  let r = e[t];
  return Array.isArray(r) && r.every((i) => typeof i === "string") ? r : void 0;
}
async function su(e) {
  let t = lg(e), r = du(e.managed) ? ug(e) : null, i = e.managed, o, a = [];
  if (i?.policies) {
    let f = i.policies.some((g) => g.desktop !== void 0);
    if (e.listen.public_url === void 0 && f) (0, import_chunk_s95w59kf.xo)("warn", "managed.policies: listen.public_url is not set \u2014 origin-pin hygiene is skipped at boot, so an origin-pinned overlay value would be silently dropped by desktops");
    let m = i.policies.find((g) => er(g.match))?.desktop, b = [];
    if (o = i.policies.map((g, k) => {
      let y = `managed.policies[${k}].${g.underCode ? "code" : "cli"}`, { cli: v, aliasIssues: E } = eu(g.cli, y);
      try {
        tu(v, y, E);
      } catch (O) {
        b.push(O instanceof Error ? O.message : String(O));
      }
      if (i.policy_mode === "layered") {
        for (let x of import_chunk_6mfepmbb.OKn) if (v[x] !== void 0) b.push(`${y}.${x} can't be used with policy_mode: layered. A policy helper's output replaces the settings served here or adds to them, so it could drop another matching policy's deny rules. Remove it, or remove policy_mode.`);
        for (let x of er(g.match) ? [] : dg) if (v[x] !== void 0) b.push(`${y}.${x} can't be used in this policy with policy_mode: layered. It limits every hook that a person is served, so it could switch off another matching policy's hooks. Move it to a match: {} policy, or remove policy_mode.`);
        let O = (0, import_chunk_ma3kja9f.T)(v.permissions) ? v.permissions : {};
        for (let x of au) {
          let P = O[x];
          for (let R of Array.isArray(P) ? P : []) if (typeof R === "string" && import_chunk_8hfdvrr1.hT.test(R)) b.push(`${y}.permissions.${x}: "${R}" can't be used with policy_mode: layered. A rule whose path starts with "!" takes paths back out of the rules before it, and under layered those can be another matching policy's rules. Remove it and narrow the rule it carved out of, or remove policy_mode.`);
        }
      }
      let S;
      if (g.desktop !== void 0) try {
        S = Jl(g.desktop, `managed.policies[${k}].desktop`, e.listen.public_url, (0, import_chunk_ma3kja9f.T)(m) && !er(g.match) ? m : void 0, [...Object.keys(g), "settings", "code", ...Object.keys(nu().innerType().shape)]);
      } catch (O) {
        b.push(O instanceof Error ? O.message : String(O));
      }
      return { match: g.match, cli: v, underCode: g.underCode, desktop: S, serve_to_desktop: g.serve_to_desktop };
    }), b.length > 0) throw new import_chunk_jv7av99m.A(b.join(`
`), "managed policies invalid: one or more policies failed validation");
    a = o, o = ig(o, i.policy_mode === "layered");
    for (let [g, k] of o.entries()) {
      if (k.desktop !== void 0 && k.desktop.coworkEgressAllowedHosts === void 0) Kl(k.cli, `managed.policies[${g}].${k.underCode ? "code" : "cli"}`);
      if (k.desktop !== void 0 && k.desktop.desktopHome === void 0) Fl(k.desktop, `managed.policies[${g}].desktop`);
    }
  } else if (i?.settings) {
    let { cli: f, aliasIssues: m } = eu(await hg(i.settings), "managed settings");
    tu(f, "managed settings", m), o = [{ match: {}, cli: f }];
  } else if (t) o = [{ match: {}, cli: {} }];
  else return null;
  let l = 0, h = (f) => {
    let { match: m, cli: b, underCode: g, desktop: k, serve_to_desktop: y } = f, v = b;
    if (t) v = { ...v, env: { ...t, ...(0, import_chunk_ma3kja9f.T)(b.env) ? b.env : {} } };
    let E = b.modelPricing;
    if (r && (E === void 0 || (0, import_chunk_ma3kja9f.T)(E) && Object.keys(E).length > 0 && E.multiplier === void 0 && E.overrides === void 0)) v = { ...v, modelPricing: { ...E, ...r } }, l++;
    let S = (0, import_chunk_xcgcdx61.xz)(v), O = { uuid: S, checksum: S, settings: v }, x = (0, import_chunk_6mfepmbb.Tut)(b), P = v.availableModelsMatch, R = P === "prefix" || P === "exact" ? P : void 0;
    return { match: m, payload: O, availableModels: Xl(v, "availableModels"), availableModelsMatch: R, deniedModels: Xl(v, "deniedModels"), underCode: g, desktop: k, serveToDesktop: y, desktopSessionPayload: (g ? x : y === true && Object.keys(v).length > 0) ? O : void 0 };
  }, u = o.map(h);
  if (i?.policy_mode === "layered") {
    let f = /* @__PURE__ */ new Map();
    for (let m of u.filter((b) => !er(b.match))) m.layered = (b) => {
      let g = b.join(), k = f.get(g);
      if (!k) {
        if (f.size >= 1024) f.clear();
        k = h(b.map((y) => a[y]).reduceRight((y, v) => ou(y, v, true))), f.set(g, k);
      }
      return k;
    };
  }
  if (r) (0, import_chunk_s95w59kf.xo)("info", `pricing: pushing modelPricing (${Object.keys(r.overrides ?? {}).length} model(s), multiplier ${r.multiplier ?? 1}) to clients in ${l} of ${o.length} managed policies`);
  return u;
}
function er(e) {
  return e.groups === void 0 && e.email_domain === void 0;
}
function ig(e, t) {
  let r = e.findIndex((o) => er(o.match));
  if (r === -1) return e;
  if (r !== e.length - 1) (0, import_chunk_s95w59kf.xo)("warn", `managed.policies[${r}] is a catch-all (match: {}) but is not the last entry \u2014 policies after it will never match. Move it to the end.`);
  let i = e[r];
  return e.map((o, a) => {
    if (a === r) return o;
    let l = ou(i, o, t);
    if (Ql(`managed.policies[${a}] after merge with catch-all base`, l.cli, o.cli), l.desktop !== void 0) Ql(`managed.policies[${a}] desktop overlay after merge with catch-all base`, l.desktop, o.desktop);
    return l;
  });
}
function ou(e, t, r) {
  let i = r && !(0, import_chunk_6mfepmbb.n$)(t.cli.managedMcpServers) ? [...Ti, "managedMcpServers"] : Ti;
  return { ...t, cli: ag(e.cli, t.cli, i), desktop: e.desktop || t.desktop ? { ...e.desktop, ...t.desktop, ...Gl(e.desktop, t.desktop), ...r && ql(e.desktop, t.desktop) } : void 0, serve_to_desktop: t.serve_to_desktop ?? e.serve_to_desktop };
}
function ag(e, t, r = Ti) {
  let i = { ...e, ...t };
  for (let o of r) {
    let a = e[o], l = t[o];
    if ((0, import_chunk_ma3kja9f.T)(a) && (0, import_chunk_ma3kja9f.T)(l)) i[o] = { ...a, ...l };
  }
  for (let o of cg) i[o] = cu(e[o], t[o]);
  return i.permissions = Zl(e.permissions, t.permissions, au), i.hooks = Zl(e.hooks, t.hooks), iu(i);
}
function Zl(e, t, r) {
  let i = (0, import_chunk_ma3kja9f.T)(e) ? e : void 0, o = (0, import_chunk_ma3kja9f.T)(t) ? t : void 0;
  if (!i && !o) return;
  let a = { ...i ?? {}, ...o ?? {} };
  for (let l of r ?? Object.keys(a)) a[l] = cu(i?.[l], o?.[l]);
  return iu(a);
}
function iu(e) {
  for (let t of Object.keys(e)) if (e[t] === void 0) delete e[t];
  return e;
}
var Ti = ["env", "modelOverrides", "skillOverrides"], cg = ["disabledMcpjsonServers", "deniedMcpServers", "blockedMarketplaces", "deniedModels"], au = ["deny", "ask"], dg = ["disableAllHooks", "allowedHttpHookUrls", "httpHookAllowedEnvVars"];
function cu(e, t) {
  let r = Array.isArray(e) ? e : [], i = Array.isArray(t) ? t : [];
  if (r.length === 0 && i.length === 0) return Array.isArray(e) || Array.isArray(t) ? [] : void 0;
  let o = /* @__PURE__ */ new Set(), a = [];
  for (let l of [...r, ...i]) {
    let h = (0, import_chunk_w578pjby._)(l);
    if (!o.has(h)) o.add(h), a.push(l);
  }
  return a;
}
function lg(e) {
  if (e.telemetry.forward_to.length === 0) {
    if (Object.keys(e.telemetry.resource_attributes ?? {}).length > 0) (0, import_chunk_s95w59kf.xo)("warn", "telemetry.resource_attributes is set but telemetry.forward_to is empty, so the labels are not applied");
    return null;
  }
  let t = e.listen.public_url;
  if (!t) return (0, import_chunk_s95w59kf.xo)("warn", "telemetry.forward_to is configured but listen.public_url is not \u2014 clients will not be told to export OTLP. Set listen.public_url so /managed/settings can push OTEL_EXPORTER_OTLP_ENDPOINT."), null;
  let r = e.telemetry.forward_to, i = Object.entries(e.telemetry.resource_attributes ?? {});
  return { CLAUDE_CODE_ENABLE_TELEMETRY: "1", OTEL_METRICS_EXPORTER: Si(r, "metrics"), OTEL_LOGS_EXPORTER: Si(r, "logs"), OTEL_TRACES_EXPORTER: Si(r, "traces"), OTEL_EXPORTER_OTLP_ENDPOINT: t, OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf", ...i.length > 0 && { OTEL_RESOURCE_ATTRIBUTES: i.map(([o, a]) => `${o}=${a}`).join(",") } };
}
function Si(e, t) {
  return e.some((r) => r[t]) ? "otlp" : "none";
}
function Ql(e, t, r) {
  let i = (a) => {
    if (Array.isArray(a)) {
      let l = a.map(i);
      return l.every((h) => typeof h === "string") ? (0, import_chunk_4smdap7r.M)(l).sort() : l;
    }
    if ((0, import_chunk_ma3kja9f.T)(a)) return Object.fromEntries(Object.keys(a).sort().map((l) => [l, i(a[l])]));
    return a;
  }, o = Object.keys(t).filter((a) => (0, import_chunk_w578pjby._)(i(t[a])) !== (0, import_chunk_w578pjby._)(i(r?.[a])));
  if (o.length > 0) (0, import_chunk_s95w59kf.xo)("info", `${e} \u2014 changed keys: ${o.join(", ")}`);
}
function Ss(e, t) {
  if (t.cri === true) return null;
  let r = t.groups ?? [], i = t.email?.includes("@") ? t.email.slice(t.email.lastIndexOf("@") + 1).toLowerCase() : void 0, o = [];
  for (let [u, f] of e.entries()) {
    let { groups: m, email_domain: b } = f.match;
    if (m && !m.some((g) => r.includes(g))) continue;
    if (b && i !== b) continue;
    if (o.push({ index: u, policy: f }), !f.layered) break;
  }
  let [a, l] = o;
  if (!a?.policy.layered || !l?.policy.layered) return a ?? null;
  let h = o.map((u) => u.index);
  return { index: a.index, indexes: h, policy: a.policy.layered(h) };
}
function du(e) {
  return e?.policies ? e.policies.length > 0 : Boolean(e?.settings);
}
function As(e, t) {
  for (let r of e.upstreams) {
    let i = We(t, r, e.models, e.auto_include_builtin_models);
    if (i.ok) return r.groups ? void 0 : { upstream: r, model: i.model };
  }
  return;
}
function ug(e) {
  let t = e.pricing;
  if (!t) return null;
  let r = [];
  for (let i of pg(e)) {
    let o = As(e, i), a = o && Pt(t, o.upstream.name, o.model, i);
    if (a) r.push([i, { input: a.input, output: a.output, cacheRead: a.cache_read, cacheWrite: a.cache_write }]);
  }
  if (r.length === 0 && t.multiplier === 1) return null;
  return { ...t.multiplier !== 1 && { multiplier: t.multiplier }, ...r.length > 0 && { overrides: Object.fromEntries(r) } };
}
function pg(e) {
  let t = /* @__PURE__ */ new Set(), r = [];
  for (let i of [...(e.pricing?.overrides ?? []).map((o) => (0, import_chunk_zhr7rpv7.PB)(o.model)?.firstParty ?? o.model), ...e.models.map((o) => o.id)]) {
    let o = hs(i);
    if (!t.has(o)) t.add(o), r.push(i);
  }
  return r;
}
var fg = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_xcgcdx61.qgn)((0, import_chunk_xcgcdx61.$Kt)(), { strictPolicyHelperKeys: true }));
function eu(e, t) {
  let r = { ...e }, i = (0, import_chunk_xcgcdx61.fge)(r, t, { loneNullAlias: "rename" });
  return { cli: r, aliasIssues: i.map((o) => `  ${o.alias}: this document sets both "${o.alias}" and "${o.canonical}", which are the same setting \u2014 keep only "${o.canonical}"`) };
}
function tu(e, t, r) {
  let i = fg(), o = [...r], a = (0, import_chunk_6mfepmbb.dQi)(e);
  if (a !== void 0) o.push(`  ${a}`);
  else {
    let f = i.safeParse(e);
    if (!f.success) o.push(...f.error.issues.map((m) => `  ${m.path.join(".")}: ${m.message}`));
  }
  o.push(...(0, import_chunk_6mfepmbb.aQi)(e).map((f) => `  ${f}`)), o.push(...(0, import_chunk_6mfepmbb.KMs)(e).map((f) => `  ${f}`));
  let l = (0, import_chunk_6mfepmbb.lQi)(e);
  if (l !== void 0) o.push(`  crossSessionInbound: ${l} \u2014 fix the value`);
  let h = (0, import_chunk_6mfepmbb.YMs)(e);
  if (h !== void 0) o.push(`  strictPluginOnlyCustomization: ${h} \u2014 fix the value`);
  let u = (0, import_chunk_6mfepmbb.XMs)(e);
  if (u !== void 0) o.push(`  allowedProviders: ${u} \u2014 fix the value`);
  if (e !== null && typeof e === "object") {
    let f = new Set(Object.keys(i.shape));
    for (let [m, b] of Object.entries(e)) if (m === "mcpServers") {
      if (b !== void 0) o.push('  mcpServers: not a managed-settings key \u2014 use "managedMcpServers" (http/sse servers only; same entry shape as .mcp.json)');
    } else if (!f.has(m)) o.push(`  ${m}: unknown settings key \u2014 fix the typo, upgrade the gateway if this key was added in a newer CLI, or set the gateway's matching env/build gate if the key is gated (e.g. CLAUDE_CODE_ENABLE_XAA for xaaIdp)`);
  }
  if (o.length > 0) throw Error(`${t} invalid:
${o.join(`
`)}`);
}
async function hg(e) {
  if (!e) return {};
  let t;
  try {
    t = await (0, import_promises3.readFile)(e, "utf8");
  } catch (i) {
    if ((0, import_chunk_jv7av99m.J)(i)) return {};
    throw i;
  }
  let r = (0, import_chunk_w578pjby.te)(t);
  if (typeof r !== "object" || r === null || Array.isArray(r)) throw Error(`Managed settings file ${e}: expected a JSON object, got ${Array.isArray(r) ? "array" : typeof r}`);
  return r;
}
var et = { "Cache-Control": "no-store" }, mg = { 400: "invalid_request_error", 401: "authentication_error", 403: "permission_error", 404: "not_found_error", 429: "rate_limit_error", 504: "timeout_error" };
function F(e, t, r) {
  return Response.json({ type: "error", error: { type: mg[e], message: t }, request_id: r }, { status: e });
}
function Xt(e, t) {
  let r = Number(e.get("limit") ?? t);
  if (!Number.isInteger(r) || r < 1 || r > 1e3) return null;
  return r;
}
async function lu(e) {
  let t = await e.reserve();
  try {
    (0, import_chunk_s95w59kf.xo)("info", "waiting for migration lock (another replica may be migrating; check pg_locks for key 6775156 if this persists)"), await t`SELECT pg_advisory_lock(6775156)`;
    try {
      await t`CREATE TABLE IF NOT EXISTS _migrations (
        version    INTEGER PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`;
      let r = await t`SELECT coalesce(max(version), 0) AS v FROM _migrations`, i = Number(r[0].v);
      while (true) {
        i += 1;
        let o = false;
        if (await t.begin(async (a) => {
          switch (i) {
            case 1:
              await a`CREATE TABLE kv (
                key        TEXT PRIMARY KEY,
                value      TEXT NOT NULL,
                expires_at TIMESTAMPTZ
              )`, await a`CREATE INDEX kv_expires_at ON kv (expires_at)
                       WHERE expires_at IS NOT NULL`;
              break;
            case 2:
              await a`CREATE TABLE spend_limits (
                id          TEXT PRIMARY KEY,
                scope_type  TEXT NOT NULL
                            CHECK (scope_type IN ('user', 'rbac_group', 'organization')),
                scope_id    TEXT NOT NULL DEFAULT '',
                amount      BIGINT,
                period      TEXT NOT NULL DEFAULT 'monthly'
                            CHECK (period IN ('daily', 'weekly', 'monthly')),
                currency    TEXT NOT NULL DEFAULT 'USD'
                            CHECK (currency = 'USD'),
                created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
                updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
                created_by  TEXT
              )`, await a`CREATE UNIQUE INDEX spend_limits_scope
                       ON spend_limits (scope_type, scope_id, period)`, await a`
                CREATE OR REPLACE FUNCTION caps_by_period(p_principal text, p_groups text[], p_mode text)
                RETURNS TABLE(period text, amount bigint, scope_type text, scope_id text, id text)
                LANGUAGE sql STABLE AS $$
                  SELECT DISTINCT ON (period) period, amount, scope_type, scope_id, id
                  FROM spend_limits
                  WHERE (scope_type = 'user' AND scope_id = p_principal)
                     OR (scope_type = 'rbac_group' AND scope_id = ANY(p_groups))
                     OR scope_type = 'organization'
                  -- The sort order IS the precedence (DISTINCT ON keeps the
                  -- first row). User beats group beats org. Within that, the
                  -- boolean-equals on the next line isn't a typo: it sorts a
                  -- real cap ahead of "unlimited" when mode is 'min', and the
                  -- other way for 'max' (or anything else). Then the smallest
                  -- or largest group cap wins.
                  ORDER BY period,
                    CASE scope_type WHEN 'user' THEN 0 WHEN 'rbac_group' THEN 1 ELSE 2 END,
                    (amount IS NULL) = (p_mode = 'min'),
                    CASE WHEN scope_type = 'rbac_group'
                         THEN CASE WHEN p_mode = 'min' THEN amount ELSE -amount END END,
                    id
                $$`;
              break;
            case 3:
              await a`CREATE TABLE admin_audit (
                id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                at      TIMESTAMPTZ NOT NULL DEFAULT now(),
                actor   TEXT NOT NULL,
                action  TEXT NOT NULL,
                target  TEXT NOT NULL,
                before  JSONB,
                after   JSONB,
                reason  TEXT
              )`, await a`CREATE INDEX admin_audit_at ON admin_audit (at)`;
              break;
            case 4:
              await a`CREATE TABLE spend (
                principal  TEXT NOT NULL,
                period     TEXT NOT NULL,  -- bucket key: YYYY-MM | YYYY-MM-DD | YYYY-Www
                cents      DOUBLE PRECISION NOT NULL DEFAULT 0,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                PRIMARY KEY (principal, period)
              )`, await a`CREATE INDEX spend_updated_at ON spend (updated_at)`;
              break;
            case 5:
              await a`CREATE TABLE principal_emails (
                principal  TEXT PRIMARY KEY,
                email      TEXT,
                name       TEXT,
                groups     JSONB,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
              )`, await a`CREATE INDEX principal_emails_updated_at ON principal_emails (updated_at)`;
              break;
            case 6:
              await a`CREATE INDEX spend_period_cents
                       ON spend (period, cents DESC, principal)`;
              break;
            case 7:
              await a`SET LOCAL lock_timeout = '1s'`, await a`ALTER TABLE spend_limits
                ADD COLUMN pooled_limit_enabled BOOLEAN NOT NULL DEFAULT false,
                ADD COLUMN pooled_monthly_credit_limit BIGINT,
                ADD CONSTRAINT spend_limits_pooled_requires_limit
                  CHECK (NOT pooled_limit_enabled OR pooled_monthly_credit_limit IS NOT NULL),
                ADD CONSTRAINT spend_limits_pooled_amount_requires_group
                  CHECK (pooled_monthly_credit_limit IS NULL
                         OR (scope_type = 'rbac_group' AND period = 'monthly'))`.catch((l) => {
                if (l instanceof Error && "errno" in l && l.errno === "55P03") (0, import_chunk_s95w59kf.xo)("error", "migration 7 could not lock the spend_limits table within 1s: another session holds a lock on it (a backup, a long query, or a session idle in a transaction; see pg_locks). Nothing was changed. Start the gateway again once the lock is gone");
                throw l;
              }), await a`CREATE TABLE pooled_spend (
                rbac_group_id TEXT NOT NULL,
                period        TEXT NOT NULL,  -- YYYY-MM
                cents         DOUBLE PRECISION NOT NULL DEFAULT 0,
                updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
                PRIMARY KEY (rbac_group_id, period)
              )`;
              break;
            case 8:
              await a`CREATE TABLE principal_groups (
                day        TEXT NOT NULL,  -- YYYY-MM-DD
                principal  TEXT NOT NULL,
                groups     JSONB NOT NULL,
                PRIMARY KEY (day, principal)
              )`;
              break;
            default:
              return;
          }
          await a`INSERT INTO _migrations (version) VALUES (${i})`, o = true;
        }), !o) break;
        (0, import_chunk_s95w59kf.xo)("info", `migration ${i} applied`);
      }
    } finally {
      await t`SELECT pg_advisory_unlock(6775156)`;
    }
  } finally {
    t.release();
  }
}
function uu(e) {
  return "sslMode" in e.options ? e.options.sslMode : void 0;
}
var gg = 3e4, _g = 36e5;
async function fu(e, t) {
  if (typeof Bun > "u") throw Error("claude gateway requires the native binary");
  let r = false, i = () => r, o = { connectionTimeout: t?.connectTimeoutSeconds ?? 5, max: t?.maxConnections ?? 5, ...t?.username !== void 0 && { username: t.username }, ...t?.password !== void 0 && { password: t.password }, onclose: (k) => {
    if (k && r) (0, import_chunk_s95w59kf.xo)("warn", `postgres connection closed: ${k.message}`);
  } }, { SQL: a } = globalThis.Bun, l = new a(e, o), h = new a(e, { ...o, tls: { ca: kt() } }), u = uu(l);
  if (u === void 0) throw Error("store: this build cannot tell which sslmode store.postgres_url asks for, so it cannot tell how to verify the database. This is a fault in the build, not in the configuration: use another release of Claude Code");
  let f = u === uu(h) ? h : l;
  try {
    await lu(f);
  } catch (k) {
    throw f.close({ timeout: 0 }).catch(() => {
    }), k;
  }
  r = true, f`SHOW server_version_num`.then((k) => {
    let y = yg(Number(k[0]?.server_version_num));
    if (r && y !== void 0) (0, import_chunk_s95w59kf.xo)("warn", y);
  }).catch(() => {
  });
  let m = setInterval(vg, gg, f, i);
  m.unref?.();
  let b = { auditRetentionDays: t?.auditRetentionDays, spendRetentionMonths: t?.spendRetentionMonths, identityRetentionDays: t?.identityRetentionDays };
  pu(f, b, i);
  let g = setInterval(pu, _g, f, b, i);
  return g.unref?.(), { sql: f, async set(k, y, v) {
    await f`
        INSERT INTO kv (key, value, expires_at)
        VALUES (${k}, ${y}, now() + make_interval(secs => ${v}))
        ON CONFLICT (key) DO UPDATE
        SET value = ${y}, expires_at = now() + make_interval(secs => ${v})
      `;
  }, async get(k) {
    let y = await f`
        SELECT value FROM kv
        WHERE key = ${k} AND (expires_at IS NULL OR expires_at > now())
      `;
    return y.length > 0 ? y[0].value : null;
  }, async setIfUnchanged(k, y, v, E) {
    return (await f`
        UPDATE kv
        SET value = ${v}, expires_at = now() + make_interval(secs => ${E})
        WHERE key = ${k} AND value = ${y}
          AND (expires_at IS NULL OR expires_at > now())
        RETURNING key
      `).length > 0;
  }, async del(k) {
    await f`DELETE FROM kv WHERE key = ${k}`;
  }, async incr(k, y) {
    let v = await f`
        INSERT INTO kv (key, value, expires_at)
        VALUES (${k}, '1', now() + make_interval(secs => ${y}))
        ON CONFLICT (key) DO UPDATE SET
          value = CASE
            WHEN kv.expires_at IS NOT NULL AND kv.expires_at <= now() THEN '1'
            ELSE (kv.value::bigint + 1)::text
          END,
          expires_at = CASE
            WHEN kv.expires_at IS NOT NULL AND kv.expires_at <= now()
              THEN now() + make_interval(secs => ${y})
            ELSE kv.expires_at
          END
        RETURNING value
      `;
    return Number(v[0].value);
  }, close() {
    r = false, clearInterval(m), clearInterval(g), f.close().catch(() => {
    });
  } };
}
function yg(e) {
  if (!Number.isFinite(e) || e >= 11e4) return;
  let t = Math.floor(e / 1e4);
  return `Postgres ${t} is below the supported floor (11) \u2014 upgrade; PostgreSQL ${t} is past upstream end-of-life`;
}
var wg = 13, bg = 90, kg = 365, Qt = 1e4;
function vg(e, t) {
  e`DELETE FROM kv WHERE expires_at IS NOT NULL AND expires_at <= now()`.catch((r) => {
    if (t()) {
      if ((0, import_chunk_s95w59kf.xo)("warn", `kv cleanup failed: ${(0, import_chunk_jv7av99m.d)(r)}`), Ts(r) === "25006") (0, import_chunk_s95w59kf.xo)("warn", "Postgres is read-only (a standby, or default_transaction_read_only is on), so nothing can be written: new sign-ins fail and spend is not recorded. Make Postgres accept writes, or point store.postgres_url at the node that does. If this line, logged every 30s, goes on after that, restart this gateway replica to drop its old connections");
    }
  });
}
function pu(e, t, r = () => true) {
  let i = (h, u) => (async () => {
    for (let f = 0; f < 50 && r(); f++) if ((await e.begin(async (b) => (await b`SET LOCAL statement_timeout = '30s'`, u(b)))).length < Qt) return;
  })().catch((f) => {
    if (r()) Eg(h, f);
  }), o = t?.auditRetentionDays ?? kg;
  i("admin_audit", (h) => h`DELETE FROM admin_audit WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM admin_audit
        WHERE at < now() - make_interval(days => ${o})
        LIMIT ${Qt}
      )) RETURNING 1`);
  let a = t?.spendRetentionMonths ?? wg;
  i("spend", (h) => h`DELETE FROM spend WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM spend
        WHERE updated_at < now() - make_interval(months => ${a})
        LIMIT ${Qt}
      )) AND updated_at < now() - make_interval(months => ${a})
      RETURNING 1`), i("pooled_spend", (h) => h`DELETE FROM pooled_spend WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM pooled_spend
        WHERE updated_at < now() - make_interval(months => ${a})
        LIMIT ${Qt}
      )) AND updated_at < now() - make_interval(months => ${a})
      RETURNING 1`);
  let l = t?.identityRetentionDays ?? bg;
  i("principal_emails", (h) => h`DELETE FROM principal_emails WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM principal_emails
        WHERE updated_at < now() - make_interval(days => ${l})
        LIMIT ${Qt}
      )) AND updated_at < now() - make_interval(days => ${l})
      RETURNING 1`), i("principal_groups", (h) => h`DELETE FROM principal_groups WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM principal_groups
        WHERE day < to_char(
          now() AT TIME ZONE 'UTC' - make_interval(days => ${l}),
          'YYYY-MM-DD')
        LIMIT ${Qt}
      )) RETURNING 1`).then(() => i("principal_groups", (h) => h`DELETE FROM principal_groups WHERE ctid = ANY(ARRAY(
          SELECT g.ctid FROM principal_groups g
          WHERE g.day < to_char(now() AT TIME ZONE 'UTC', 'YYYY-MM-DD')
            AND NOT EXISTS (
              SELECT 1 FROM principal_emails e WHERE e.principal = g.principal)
          LIMIT ${Qt}
        )) RETURNING 1`));
}
function Eg(e, t) {
  if (Ts(t) === "42501") {
    if ((0, import_chunk_szvrpg0x.Wa)().claim(`gateway_sweep_denied:${e}`)) (0, import_chunk_s95w59kf.xo)("warn", `${e} retention sweep failed: the database role lacks DELETE on ${e} \u2014 grant it (see the docs' restricted-role grant list) or rows will outlive their retention window. Warning once.`);
    return;
  }
  (0, import_chunk_s95w59kf.xo)("warn", `${e} cleanup failed: ${(0, import_chunk_jv7av99m.d)(t)}`);
}
function Ts(e) {
  if (typeof e === "object" && e !== null) {
    if ("errno" in e && typeof e.errno === "string") return e.errno;
    if ("code" in e && typeof e.code === "string") return e.code;
  }
  return;
}
var Ot = ["daily", "weekly", "monthly"];
function Ce(e = "monthly", t = /* @__PURE__ */ new Date()) {
  if (e === "monthly") return t.toISOString().slice(0, 7);
  if (e === "daily") return t.toISOString().slice(0, 10);
  let r = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())), i = r.getUTCDay() || 7;
  r.setUTCDate(r.getUTCDate() + 4 - i);
  let o = r.getUTCFullYear(), a = Date.UTC(o, 0, 1), l = Math.ceil(((r.getTime() - a) / 864e5 + 1) / 7);
  return `${o}-W${String(l).padStart(2, "0")}`;
}
function hu(e, t = /* @__PURE__ */ new Date()) {
  let r = t.getUTCFullYear(), i = t.getUTCMonth(), o = t.getUTCDate();
  if (e === "monthly") return new Date(Date.UTC(r, i + 1, 1));
  if (e === "daily") return new Date(Date.UTC(r, i, o + 1));
  let a = 8 - (t.getUTCDay() || 7);
  return new Date(Date.UTC(r, i, o + a));
}
var Rs = 864e5, Ag = 3e5, xi = 31, mu = ["starting_at", "ending_at", "time_bucket_width", "group_by[]", "actor_ids[]", "actor_types[]", "rbac_group_ids[]", "exclude_deleted_users", "order_by", "order", "limit", "page"], gu = "the gateway records spend per user per day only", Tg = 6775157, Rg = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(\.\d+)?([Zz]|[+-]\d{2}:\d{2})$/, _u = "must be an RFC 3339 timestamp with a time zone offset (Z or \xB1HH:MM), such as 2026-08-01T00:00:00Z", xg = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ c: (0, import_chunk_rnm2beqc.we)().regex(/^-?\d{1,24}(\.\d{1,6})?$/), p: (0, import_chunk_rnm2beqc.we)(), g: (0, import_chunk_rnm2beqc.we)(), d: (0, import_chunk_rnm2beqc.we)().regex(/^\d{4}-\d{2}-\d{2}$/), q: (0, import_chunk_rnm2beqc.we)() }));
async function wu({ url: e, sql: t, requestId: r }) {
  let i = e.searchParams;
  for (let X of i.keys()) if (!mu.includes(X) && X !== "beta") return F(400, `${X}: not a parameter of the gateway's cost report, which takes ${mu.join(", ")}`, r);
  let o = i.get("starting_at");
  if (o === null) return F(400, "starting_at: required", r);
  let a = yu(o);
  if (a === null) return F(400, `starting_at: ${_u}`, r);
  let l = i.get("ending_at"), h = l === null ? null : yu(l);
  if (l !== null && h === null) return F(400, `ending_at: ${_u}`, r);
  let u = i.get("time_bucket_width");
  if (u !== null && u !== "1d") return F(400, `time_bucket_width: must be 1d; ${gu}`, r);
  if (u !== null && h === null) return F(400, "ending_at: required when time_bucket_width is set", r);
  let f = Date.now(), m = h ?? Math.min(f, a + xi * Rs);
  if (a >= m) return F(400, "starting_at: must be before ending_at, which defaults to now", r);
  if (m - a > xi * Rs) return F(400, `ending_at: the range may span at most ${xi} days`, r);
  let b = i.getAll("group_by[]");
  if (b.some((X) => X !== "actor" && X !== "rbac_group_id")) return F(400, `group_by[]: must be actor or rbac_group_id; ${gu}`, r);
  let g = b.includes("actor"), k = b.includes("rbac_group_id"), y = i.getAll("actor_ids[]");
  if (y.length > 100) return F(400, "actor_ids[]: at most 100 entries per request", r);
  let v = i.getAll("rbac_group_ids[]");
  if (v.length > 100) return F(400, "rbac_group_ids[]: at most 100 entries per request", r);
  if (i.getAll("actor_types[]").some((X) => X !== "user_actor")) return F(400, "actor_types[]: must be user_actor, the only kind of actor a gateway has", r);
  let E = Xt(i, 20);
  if (E === null) return F(400, "limit: must be between 1 and 1000", r);
  let S = i.get("order") ?? "desc";
  if (S !== "asc" && S !== "desc") return F(400, "order: must be asc or desc", r);
  let O = i.get("order_by") ?? "amount";
  if (O !== "amount" && O !== "list_amount" && O !== "time") return F(400, "order_by: must be amount, list_amount or time", r);
  let x = i.get("exclude_deleted_users")?.toLowerCase() ?? "false";
  if (x !== "true" && x !== "false") return F(400, "exclude_deleted_users: must be true or false", r);
  if (x === "true" && !g) return F(400, "exclude_deleted_users: requires group_by[]=actor", r);
  let P = u !== null, R = Ce("daily", new Date(a + 1e3)), D = Ce("daily", new Date(h === null && m === f ? f + Rs : m + 1e3)), U = Ce("daily", new Date(f - Ag)), H = D > U, se = (0, import_crypto12.createHash)("sha256").update((0, import_chunk_w578pjby._)([...[...i].filter(([X]) => !["page", "limit", "beta"].includes(X)).sort(), H])).digest("base64url"), z, L = i.get("page");
  if (L !== null) {
    try {
      z = xg().parse((0, import_chunk_w578pjby.te)(Buffer.from(L, "base64url").toString()));
    } catch {
    }
    if (z?.q !== se) return F(400, "page: invalid page token, one from a request with other parameters, or one made before the range's last day was over; start again without page", r);
  }
  if (z !== void 0 && H) return F(400, `page: a range that includes today (UTC), or a day that ended less than 5 minutes ago, can't be read in pages, because its amounts are still changing and rows could be skipped or repeated. ${R < U ? `Start again with ending_at at ${U}T00:00:00Z or earlier, or read` : "Read"} the range in one page (limit up to 1000; if it has more rows, split the developers across calls with actor_ids[], up to 100 a call)`, r);
  let Q = S === "desc" ? -1 : 1, ye = P && O === "time", ae = ye ? Q : 0, j = ye ? -1 : Q, be = y.length > 0 ? t.array(y, "TEXT") : null, fe = v.length > 0 ? t.array(v, "TEXT") : null, Oe = z?.c ?? null, at = z?.p ?? null, Lt = z?.g ?? null, vt = z?.d ?? null, ct;
  try {
    ct = await t.begin(async (X) => {
      await X`SET LOCAL statement_timeout = '10s'`;
      let [Ie] = await X`SELECT pg_try_advisory_xact_lock(${Tg}) AS free`;
      if (!Ie?.free) return null;
      return X`
    WITH per AS (
      SELECT CASE WHEN ${g}::boolean THEN s.principal ELSE '' END AS principal,
             coalesce(member.rbac_group, '') AS rbac_group,
             CASE WHEN ${P}::boolean THEN s.period ELSE ${R} END AS day,
             round(sum(s.cents::numeric), 6) AS amount
      FROM spend s
      -- The groups held on the UTC day of the spend, as on 1P. The day before
      -- stands in for a request checked before midnight and metered after. The
      -- CASE keeps monthly and weekly keys from ever reaching the date cast.
      LEFT JOIN LATERAL (
        SELECT g.groups FROM principal_groups g
        WHERE (${k}::boolean OR ${fe}::text[] IS NOT NULL)
          AND g.principal = s.principal
          AND g.day IN (s.period, to_char(
            CASE WHEN length(s.period) = 10 THEN s.period::date - 1 END,
            'YYYY-MM-DD'))
        ORDER BY g.day DESC LIMIT 1
      ) held ON true
      -- Also as on 1P: counted in full in each group when grouping, once when only
      -- filtering, and '' (null on the wire) where no group is recorded.
      LEFT JOIN LATERAL jsonb_array_elements_text(held.groups) AS member(rbac_group)
        ON ${k}::boolean
        AND (${fe}::text[] IS NULL OR member.rbac_group = ANY(${fe}::text[]))
      WHERE s.period >= ${R} AND s.period < ${D}
        AND length(s.period) = 10
        AND (${be}::text[] IS NULL OR s.principal = ANY(${be}::text[]))
        AND (${fe}::text[] IS NULL OR held.groups ?| ${fe}::text[])
      GROUP BY 1, 2, 3
    )
    SELECT per.principal, per.rbac_group, per.day, per.amount::text AS amount,
           e.email, e.name
    FROM per
    LEFT JOIN principal_emails e ON e.principal = per.principal
    WHERE ${Oe}::numeric IS NULL
       OR (${ae}::int * replace(per.day, '-', '')::int,
           ${j}::int * per.amount, per.principal, per.rbac_group, per.day)
        > (${ae}::int * replace(${vt}::text, '-', '')::int,
           ${j}::int * ${Oe}::numeric, ${at}::text,
           ${Lt}::text, ${vt}::text)
    ORDER BY ${ae}::int * replace(per.day, '-', '')::int,
             ${j}::int * per.amount, per.principal, per.rbac_group, per.day
    LIMIT ${E + 1}
  `;
    });
  } catch (X) {
    if (Ts(X) !== "57014") throw X;
    let Ie = F(504, "the report took more than 10 seconds; ask for a shorter range, fewer group_by[] dimensions, no time_bucket_width, or only some actor_ids[] (up to 100 a call)", r);
    return Ie.headers.set("x-should-retry", "false"), Ie;
  }
  if (ct === null) {
    let X = F(429, "another cost report is running, and they run one at a time; try again in a few seconds", r);
    return X.headers.set("x-should-retry", "true"), X.headers.set("retry-after", "1"), X;
  }
  let He = ct.length > E, ce = ct.slice(0, E), Ye = ce.at(-1);
  return Response.json({ data: ce.map((X) => ({ starting_at: `${X.day}T00:00:00Z`, ending_at: `${P ? Ce("daily", new Date(Date.parse(X.day) + Rs)) : D}T00:00:00Z`, group: { product: null, model: null, context_window: null, inference_geo: null, speed: null, slack_channel_id: null, claude_tag_category: null, claude_tag_user_id: null, rbac_group_id: X.rbac_group || null, workspace_id: null, service_tier: null, user_profile_id: null, agent_id: null, environment_id: null, deployment_id: null, session_id: null, actor: g ? { type: "user_actor", user_id: X.principal, email_address: X.email ?? null, name: X.name ?? null, deleted: false } : null, actor_type: null, api_key_id: null, cost_type: null, token_type: null }, cost: { currency: "USD", amount: X.amount, list_amount: X.amount, requests: null } })), has_more: He, next_page: He && Ye !== void 0 ? Buffer.from((0, import_chunk_w578pjby._)({ c: Ye.amount, p: Ye.principal, g: Ye.rbac_group, d: Ye.day, q: se })).toString("base64url") : null, data_refreshed_at: new Date(f).toISOString() }, { headers: et });
}
function yu(e) {
  let t = Rg.test(e) ? Date.parse(e) : NaN;
  return Number.isNaN(t) ? null : t;
}
function xs(e) {
  return e.toFixed(3).replace(/\.?0+$/, "");
}
function Cs(e, t) {
  if (e === "user") return { type: "user", user_id: t ?? "" };
  if (e === "rbac_group") return { type: "rbac_group", rbac_group_id: t ?? "" };
  return { type: "organization" };
}
function Pg(e, t, r, i, o = /* @__PURE__ */ new Date()) {
  let a = Ot.map((l) => Ce(l, o));
  return e`
    WITH pb AS (
      SELECT period, bucket, ordinality AS ord
      FROM unnest(${e.array([...Ot], "TEXT")}, ${e.array(a, "TEXT")})
        WITH ORDINALITY AS t(period, bucket)
    )
    SELECT pb.period, c.amount AS cap_cents, c.scope_type,
           coalesce(s.cents, 0)::float8 AS spent_cents
    FROM pb
    JOIN caps_by_period(${t}, ${e.array([...r], "TEXT")}, ${i}) c
      ON c.period = pb.period
    LEFT JOIN spend s ON s.principal = ${t} AND s.period = pb.bucket
    WHERE c.amount IS NOT NULL
    ORDER BY pb.ord
  `;
}
function Og(e, t, r) {
  return e`
    SELECT l.scope_id AS "group",
           l.pooled_monthly_credit_limit::float8 AS "limit",
           coalesce(s.cents, 0)::float8 AS spent
    FROM spend_limits l
    LEFT JOIN pooled_spend s
      ON s.rbac_group_id = l.scope_id AND s.period = ${Ce("monthly", r)}
    WHERE l.scope_type = 'rbac_group' AND l.period = 'monthly'
      AND l.scope_id = ANY(${e.array([...t], "TEXT")})
      AND l.pooled_limit_enabled
  `;
}
async function Pi(e, t, r, i, o, a, l = []) {
  let h = await e.reserve();
  try {
    a?.throwIfAborted();
    let [u, f, m, , b, g] = await Promise.allSettled([h`BEGIN`, h`SET LOCAL statement_timeout = '2s'`, Pg(h, t, r, i, o), l.length > 0 ? h`SET LOCAL statement_timeout = '300ms'` : [], l.length > 0 ? Og(h, l, o) : [], h`COMMIT`]);
    for (let k of [u, f]) if (k.status === "rejected") throw k.reason;
    if (m.status === "rejected") throw m.reason;
    if (g.status === "rejected") throw g.reason;
    return { caps: m.value, pools: b };
  } finally {
    Promise.resolve(h.release()).catch(() => {
    });
  }
}
async function bu(e, t, r) {
  let [i, o, a] = Ot.map((h) => Ce(h, r)), [l] = await e.begin(async (h) => (await h`SET LOCAL statement_timeout = '2s'`, h`
      SELECT floor(coalesce(max(cents) FILTER (WHERE period = ${i}), 0))::float8 AS daily,
             floor(coalesce(max(cents) FILTER (WHERE period = ${o}), 0))::float8 AS weekly,
             floor(coalesce(max(cents) FILTER (WHERE period = ${a}), 0))::float8 AS monthly
      FROM spend
      WHERE principal = ${t} AND period IN (${i}, ${o}, ${a})
    `));
  return l;
}
async function Oi(e, t) {
  let r = await e.reserve();
  try {
    let i = t(r), o = await Promise.allSettled([r`BEGIN`, r`SET LOCAL statement_timeout = '2s'`, i, r`COMMIT`]), [a, , l, h] = o;
    if (a.status === "rejected") {
      if (l.status === "rejected") throw l.reason;
      return l.value;
    }
    if (l.status === "rejected" || h.status === "rejected") throw o.find((u) => u.status === "rejected")?.reason;
    return l.value;
  } finally {
    Promise.resolve(r.release()).catch(() => {
    });
  }
}
async function ku(e, t, r) {
  let i = Ot.map((a) => Ce(a)), o = () => Oi(e, (a) => a`
        INSERT INTO spend (principal, period, cents)
        SELECT DISTINCT ${t}, b, ${r}
        FROM unnest(${a.array(i, "TEXT")}) AS t(b)
        ORDER BY 2
        ON CONFLICT (principal, period) DO UPDATE
          SET cents = spend.cents + EXCLUDED.cents, updated_at = now()
      `);
  try {
    await o();
  } catch (a) {
    let l = a ?? {};
    if (l.errno === "57014" || l.code === "57014") {
      await o();
      return;
    }
    throw a;
  }
}
async function vu(e, t) {
  var _stack = [];
  try {
    const r = __using(_stack, await e.reserve(), true);
    await r`
    INSERT INTO pooled_spend (rbac_group_id, period, cents)
    SELECT rbac_group_id, ${Ce("monthly")}, cents
    FROM unnest(
      ${e.array([...t.keys()], "TEXT")},
      ${e.array([...t.values()], "DOUBLE PRECISION")}
    ) AS t(rbac_group_id, cents)
    ORDER BY 1
    ON CONFLICT (rbac_group_id, period) DO UPDATE
      SET cents = pooled_spend.cents + EXCLUDED.cents, updated_at = now()
  `;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function Eu(e, t) {
  let r = t.email || null, i = t.name || null, o = t.groups ?? [];
  await Oi(e, (a) => a`
      INSERT INTO principal_emails ${a({ principal: t.sub, email: r, name: i, groups: o })}
      ON CONFLICT (principal) DO UPDATE SET
        email = coalesce(${r}, principal_emails.email),
        name = coalesce(${i}, principal_emails.name),
        groups = ${o},
        updated_at = now()
    `);
}
async function Su(e, t, r, i) {
  await Oi(e, (o) => o`
      INSERT INTO principal_groups ${o({ day: i, principal: t, groups: (0, import_chunk_4smdap7r.M)(r) })}
      ON CONFLICT (day, principal) DO UPDATE SET groups = (
        SELECT jsonb_agg(DISTINCT g)
        FROM jsonb_array_elements(principal_groups.groups || EXCLUDED.groups) AS g
      )
      WHERE NOT principal_groups.groups @> EXCLUDED.groups
    `);
}
async function Ii(e, t) {
  await e`INSERT INTO admin_audit ${e({ actor: t.actor, action: t.action, target: t.target, before: t.before ?? null, after: t.after ?? null, reason: t.reason ?? null })}`;
}
function Au(e, t = Ot, r = /* @__PURE__ */ new Date()) {
  let i = t.map((o) => Ce(o, r));
  return e`
    SELECT period, bucket, ordinality AS ord
    FROM unnest(${e.array([...t], "TEXT")}, ${e.array(i, "TEXT")})
      WITH ORDINALITY AS t(period, bucket)
  `;
}
async function Ru({ url: e, sql: t, requestId: r }, i) {
  let o = e.searchParams, a = Xt(o, 20);
  if (a === null) return F(400, "limit: must be between 1 and 1000", r);
  let l = Ig(o);
  if (l === null) return F(400, "period[]: must be one of daily, weekly, monthly", r);
  let h = o.getAll("user_ids[]");
  if (h.length > 100) return F(400, "user_ids[]: at most 100 entries per request", r);
  let u = o.get("q");
  if (u !== null && u.length > 256) return F(400, "q: too long", r);
  let f = o.get("sort");
  if (f !== null && f !== "spend_desc") return F(400, "sort: must be spend_desc", r);
  let m = f === "spend_desc";
  if (m && l.length !== 1) return F(400, "sort=spend_desc requires exactly one period[]", r);
  if (h.length > 0) {
    let E = await Tu(t, h, l, i);
    return Response.json({ data: E, next_page: null }, { headers: et });
  }
  let b = o.get("page"), g;
  if (b !== null) {
    if (g = Dg(b, m), g === void 0) return F(400, "page: invalid page token", r);
  }
  let k = u === null ? null : `%${Mg(u)}%`, y = m ? await Ng(t, Ce(l[0]), g, k, a) : await Ug(t, g, k, a), v = await Tu(t, y.subs, l, i);
  return Response.json({ data: v, next_page: y.nextToken }, { headers: et });
}
function Ig(e) {
  let t = e.getAll("period[]");
  if (t.length === 0) return Ot;
  let r = [];
  for (let i of t) {
    if (i !== "daily" && i !== "weekly" && i !== "monthly") return null;
    if (!r.includes(i)) r.push(i);
  }
  return r;
}
var Lg = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ p: (0, import_chunk_rnm2beqc.we)(), s: (0, import_chunk_rnm2beqc.BYi)().optional() })), $g = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ p: (0, import_chunk_rnm2beqc.we)(), c: (0, import_chunk_rnm2beqc.nr)(), s: (0, import_chunk_rnm2beqc.Cg)(true) }));
function xu(e) {
  return Buffer.from(JSON.stringify(e)).toString("base64url");
}
function Dg(e, t) {
  let r = t ? $g() : Lg();
  try {
    return r.parse(JSON.parse(Buffer.from(e, "base64url").toString()));
  } catch {
    return;
  }
}
async function Ng(e, t, r, i, o) {
  let a = r?.p ?? null, l = r?.s === true ? r.c : null, h = await e`
    SELECT s.principal, s.cents FROM spend s
    LEFT JOIN principal_emails e ON e.principal = s.principal
    WHERE s.period = ${t}
      AND (${l}::float8 IS NULL
           OR s.cents < ${l}
           OR (s.cents = ${l} AND s.principal > ${a}))
      AND (${i}::text IS NULL OR s.principal ILIKE ${i}
           OR e.email ILIKE ${i} OR e.name ILIKE ${i})
    ORDER BY s.cents DESC, s.principal LIMIT ${o + 1}
  `, u = h.length > o, f = h.slice(0, o), m = f.at(-1);
  return { subs: f.map((b) => b.principal), nextToken: u && m !== void 0 ? xu({ p: m.principal, c: m.cents, s: true }) : null };
}
async function Ug(e, t, r, i) {
  let o = t?.p ?? null, a = await e`
    SELECT s.principal FROM spend s
    LEFT JOIN principal_emails e ON e.principal = s.principal
    WHERE (${o}::text IS NULL OR s.principal > ${o})
      AND (${r}::text IS NULL OR s.principal ILIKE ${r}
           OR e.email ILIKE ${r} OR e.name ILIKE ${r})
    GROUP BY s.principal ORDER BY s.principal LIMIT ${i + 1}
  `, l = a.map((f) => f.principal).slice(0, i), h = a.length > i, u = l.at(-1);
  return { subs: l, nextToken: h && u !== void 0 ? xu({ p: u }) : null };
}
function Mg(e) {
  return e.replace(/[\\%_]/g, (t) => `\\${t}`);
}
async function Tu(e, t, r, i) {
  if (t.length === 0) return [];
  return (await e`
    WITH p AS (
      SELECT principal, ordinality AS ord
      FROM unnest(${e.array(t, "TEXT")}) WITH ORDINALITY AS t(principal)
    ),
    per AS (${Au(e, r)})
    SELECT p.principal, per.period, cap.amount, cap.scope_type,
           cap.scope_id, cap.id AS spend_limit_id,
           coalesce(s.cents, 0) AS cents,
           e.email, e.name, e.groups
    FROM p
    CROSS JOIN per
    LEFT JOIN principal_emails e ON e.principal = p.principal
    LEFT JOIN LATERAL caps_by_period(
      p.principal,
      ARRAY(SELECT jsonb_array_elements_text(coalesce(e.groups, '[]'::jsonb))),
      ${i}
    ) cap ON cap.period = per.period
    LEFT JOIN spend s ON s.principal = p.principal AND s.period = per.bucket
    ORDER BY p.ord, per.ord
  `).map((a) => jg(a));
}
function jg(e) {
  let t = e.scope_type === null ? null : Cs(e.scope_type, e.scope_id);
  return { scope: { type: "user", user_id: e.principal }, groups: e.groups ?? [], actor: { type: "user_actor", user_id: e.principal, name: e.name ?? null, email_address: e.email ?? null, deleted: false }, amount: e.amount, currency: "USD", period: e.period, source: t, spend_limit_id: e.spend_limit_id, period_to_date_spend: xs(e.cents) };
}
var It = "/v1/organizations/spend_limits", Ou = "/v1/organizations/analytics/cost";
function $i(e) {
  return e === It || e.startsWith(`${It}/`) || e === Ou;
}
async function Iu(e, t, r, i, o, a, l = "min") {
  if (!$i(t.pathname)) return null;
  let h = `req_${crypto.randomUUID().replace(/-/g, "")}`, u = await Wg({ req: e, url: t, sql: r, keys: i, requestId: h, oidcAdmin: o, clientIp: a, groupLimitMode: l });
  return u.headers.set("request-id", h), (0, import_chunk_s95w59kf.xo)("info", `admin ${e.method} ${t.pathname} -> ${u.status} (${h})`), u;
}
async function Wg({ req: e, url: t, sql: r, keys: i, requestId: o, oidcAdmin: a, clientIp: l, groupLimitMode: h }) {
  let u = t.pathname, f = e.method, m = e.headers.get("x-api-key"), b = Hg(m, i, a);
  if (!b) return (0, import_chunk_s95w59kf.Tte)("admin.denied", { reason: m ? "invalid_key" : e.headers.get("authorization") ? "bearer_rejected" : "no_credentials", method: f, path: u, client_ip: l ?? null }), F(401, "missing or invalid admin credentials", o);
  let g = { req: e, url: t, sql: r, requestId: o, auth: b };
  if (u === `${It}/effective` && f === "GET") return Ru(g, h);
  if (u === `${It}/audit` && f === "GET") return Gg(g);
  if (u === Ou && f === "GET") return wu(g);
  if (u === It && f === "GET") return Fg(g);
  if (u === It && f === "POST") return qg(g);
  if (u.startsWith(`${It}/`)) {
    let k;
    try {
      k = decodeURIComponent(u.slice(It.length + 1));
    } catch {
      return F(400, "malformed spend limit id", o);
    }
    if (f === "GET") return Kg(g, k);
    if (f === "DELETE") return Jg(g, k);
    return F(404, "not found", o);
  }
  return F(404, "not found", o);
}
function Hg(e, t, r) {
  if (!e) return r ? { canWrite: true, actor: `oidc:${r.sub}` } : null;
  let i = Cu(e, t.writeKeys), o = Cu(e, t.readKeys);
  if (i !== void 0) return { canWrite: true, actor: `admin-key:${i}` };
  if (o !== void 0) return { canWrite: false, actor: `admin-key:${o}` };
  return null;
}
function Cu(e, t) {
  let r = Buffer.from(e), i;
  for (let o of t) {
    let a = Buffer.from(o.key);
    if (a.length === r.length && (0, import_crypto11.timingSafeEqual)(r, a)) i = o.id;
  }
  return i;
}
async function Gg({ url: e, sql: t, requestId: r }) {
  let i = Xt(e.searchParams, 100);
  if (i === null) return F(400, "limit: must be between 1 and 1000", r);
  let o = e.searchParams.get("after_id");
  if (o !== null && !/^\d{1,18}$/.test(o)) return F(400, "after_id: must be an audit event id", r);
  let a = await t`
    SELECT id, at, actor, action, target, before, after, reason
    FROM admin_audit
    WHERE (${o}::bigint IS NULL OR id < ${o}::bigint)
    ORDER BY id DESC LIMIT ${i + 1}
  `, l = a.length > i;
  return Response.json({ data: a.slice(0, i).map((h) => ({ type: "audit_event", id: h.id, created_at: h.at.toISOString(), actor: h.actor, action: h.action, target_id: h.target, before: h.before ?? null, after: h.after ?? null, reason: h.reason ?? null })), has_more: l }, { headers: et });
}
async function Fg({ url: e, sql: t, requestId: r }) {
  let i = e.searchParams, o = Xt(i, 20);
  if (o === null) return F(400, "limit: must be between 1 and 1000", r);
  let a = i.get("scope_type");
  if (a !== null && a !== "organization" && a !== "rbac_group" && a !== "user") return F(400, "scope_type: must be one of organization, rbac_group, user", r);
  let l = i.get("after_id"), h = i.get("before_id");
  if (l !== null && h !== null) return F(400, "after_id and before_id are mutually exclusive", r);
  let u = l ?? h, f;
  if (u !== null) {
    if (f = (await t`SELECT created_at::text AS created_at, id FROM spend_limits WHERE id = ${u}`)[0], !f) return F(400, `${l !== null ? "after_id" : "before_id"}: no spend limit with this id`, r);
  }
  let m = o + 1, b, g;
  if (h !== null && f) {
    let y = await t`
      SELECT id, scope_type, scope_id, amount, period, currency, pooled_limit_enabled, pooled_monthly_credit_limit, created_at, updated_at
      FROM spend_limits
      WHERE (created_at, id) < (${f.created_at}::timestamptz, ${f.id})
        AND (${a}::text IS NULL OR scope_type = ${a})
      ORDER BY created_at DESC, id DESC LIMIT ${m}
    `;
    b = y.length > o, g = y.slice(0, o).reverse().map(wn);
  } else {
    let y = f?.created_at ?? null, v = await t`
      SELECT id, scope_type, scope_id, amount, period, currency, pooled_limit_enabled, pooled_monthly_credit_limit, created_at, updated_at
      FROM spend_limits
      WHERE (${y}::timestamptz IS NULL
             OR (created_at, id) > (${y}::timestamptz, ${f?.id ?? null}))
        AND (${a}::text IS NULL OR scope_type = ${a})
      ORDER BY created_at, id LIMIT ${m}
    `;
    b = v.length > o, g = v.slice(0, o).map(wn);
  }
  let k = await Di(t, g);
  return Response.json({ data: k, has_more: b, first_id: k[0]?.id ?? null, last_id: k.at(-1)?.id ?? null }, { headers: et });
}
async function qg({ req: e, sql: t, requestId: r, auth: i }) {
  if (!i.canWrite) return F(403, "requires write:spend_limits", r);
  let o = await Xg(e, r);
  if (o instanceof Response) return o;
  let { scope: a, period: l } = o;
  if (o.amount === void 0 && !o.pooled_budget) return F(400, "amount: Required", r);
  let h = o.pooled_budget ?? {};
  if (h.paused === false || (h.amount ?? null) !== null) {
    if (a.type !== "rbac_group") return F(400, "Pooled budget fields can only be set on a group-level limit", r);
    if (l !== "monthly") return F(400, "Pooled budgets are monthly only. Set pooled fields on the group's monthly limit.", r);
  }
  let u = Li(a), f = `spend_limits:${a.type}:${u}:${l}`, m = { id: `spl_${crypto.randomUUID().replace(/-/g, "")}`, scope_type: a.type, scope_id: u, period: l, created_by: i.actor }, b = await t.begin(async (v) => {
    await v`SELECT pg_advisory_xact_lock(hashtext(${f}))`;
    let [E] = await v`
      SELECT id, scope_type, scope_id, amount, period, currency, pooled_limit_enabled, pooled_monthly_credit_limit, created_at, updated_at
      FROM spend_limits
      WHERE scope_type = ${a.type} AND scope_id = ${u} AND period = ${l}
      FOR UPDATE
    `, S = E && wn(E), O = o.amount === void 0 ? S?.amount : o.amount;
    if (O === void 0) return "This spend limit doesn't exist yet, so it needs amount (each member's own limit). Set amount; it may equal pooled_budget.amount.";
    let x = S?.pooled_budget, P = h.amount === void 0 ? x?.amount ?? null : h.amount, R = h.paused ?? x?.paused ?? P === null;
    if (!R) {
      if (P === null) return "A pooled budget that isn't paused needs an amount. Set pooled_budget.amount, or set pooled_budget.paused to true.";
      if (O === null) return "A pooled budget that isn't paused needs amount (each member's own limit) on the same spend limit. Set amount; it may equal pooled_budget.amount.";
    }
    let D = { pooled_limit_enabled: !R, pooled_monthly_credit_limit: P }, [U] = await v`
      INSERT INTO spend_limits ${v({ ...m, amount: O, ...D })}
      ON CONFLICT (scope_type, scope_id, period) DO UPDATE
        SET amount = ${O},
            pooled_limit_enabled = ${D.pooled_limit_enabled},
            pooled_monthly_credit_limit = ${D.pooled_monthly_credit_limit},
            updated_at = now()
      RETURNING id, scope_type, scope_id, amount, period, currency, pooled_limit_enabled, pooled_monthly_credit_limit, created_at, updated_at
    `, H = wn(U);
    return await Ii(v, { actor: i.actor, action: "spend_limit.upsert", target: H.id, before: S ?? null, after: H }), { before: S, after: H, json: (await Di(v, [H]))[0] };
  });
  if (typeof b === "string") return F(400, b, r);
  let { before: g, after: k, json: y } = b;
  return (0, import_chunk_s95w59kf.Tte)("admin.limit.upsert", { actor: i.actor, target: k.id, scope_type: a.type, scope_id: u, period: l, ...g !== void 0 && { before_amount: g.amount }, amount: k.amount, ...g?.pooled_budget !== void 0 && { before_pooled_budget: g.pooled_budget }, ...k.pooled_budget !== void 0 && { pooled_budget: k.pooled_budget } }), Response.json(y);
}
async function Kg({ sql: e, requestId: t }, r) {
  let o = (await e`
    SELECT id, scope_type, scope_id, amount, period, currency, pooled_limit_enabled, pooled_monthly_credit_limit, created_at, updated_at FROM spend_limits WHERE id = ${r}
  `)[0];
  return o ? Response.json((await Di(e, [wn(o)]))[0], { headers: et }) : F(404, "spend limit not found", t);
}
async function Jg({ sql: e, requestId: t, auth: r }, i) {
  if (!r.canWrite) return F(403, "requires write:spend_limits", t);
  let o = await e.begin(async (a) => {
    let h = (await a`
      DELETE FROM spend_limits WHERE id = ${i} RETURNING id, scope_type, scope_id, amount, period, currency, pooled_limit_enabled, pooled_monthly_credit_limit, created_at, updated_at
    `)[0];
    if (!h) return false;
    return await Ii(a, { actor: r.actor, action: "spend_limit.delete", target: i, before: wn(h) }), h;
  });
  if (o) return (0, import_chunk_s95w59kf.Tte)("admin.limit.delete", { actor: r.actor, target: i, scope_type: o.scope_type, scope_id: o.scope_id, period: o.period }), Response.json({ type: "spend_limit_deleted", id: i });
  return F(404, "spend limit not found", t);
}
var Pu = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.we)().regex(/^\d{1,18}$/, "must be a whole-number decimal string of cents").nullable()), Yg = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ scope: (0, import_chunk_rnm2beqc.ROo)("type", [(0, import_chunk_rnm2beqc.on)({ type: (0, import_chunk_rnm2beqc.Cg)("user"), user_id: (0, import_chunk_rnm2beqc.we)().min(1) }), (0, import_chunk_rnm2beqc.on)({ type: (0, import_chunk_rnm2beqc.Cg)("rbac_group"), rbac_group_id: (0, import_chunk_rnm2beqc.we)().min(1) }), (0, import_chunk_rnm2beqc.on)({ type: (0, import_chunk_rnm2beqc.Cg)("organization") })]), amount: Pu().optional(), period: (0, import_chunk_rnm2beqc.df)(["daily", "weekly", "monthly"]).default("monthly"), currency: (0, import_chunk_rnm2beqc.Cg)("USD").optional(), pooled_budget: (0, import_chunk_rnm2beqc.on)({ amount: Pu().optional(), paused: (0, import_chunk_rnm2beqc.Ci)().nullish(), currency: (0, import_chunk_rnm2beqc.Cg)("USD").optional() }).nullish() }));
function Vg(e) {
  let t = e.issues[0];
  if (!t) return "invalid request body";
  let r = t.path.join(".");
  return r ? `${r}: ${t.message}` : t.message;
}
async function Xg(e, t) {
  let r;
  try {
    r = await e.json();
  } catch {
    return F(400, "invalid JSON body", t);
  }
  let i = Yg().safeParse(r);
  return i.success ? i.data : F(400, Vg(i.error), t);
}
function Li(e) {
  switch (e.type) {
    case "user":
      return e.user_id;
    case "rbac_group":
      return e.rbac_group_id;
    case "organization":
      return "";
  }
}
function wn(e) {
  return { id: e.id, scope: Cs(e.scope_type, e.scope_id), amount: e.amount, period: e.period, currency: e.currency, ...e.scope_type === "rbac_group" && e.period === "monthly" && { pooled_budget: e.pooled_monthly_credit_limit === null ? null : { amount: e.pooled_monthly_credit_limit, paused: !e.pooled_limit_enabled } }, created_at: e.created_at.toISOString(), updated_at: e.updated_at.toISOString() };
}
async function Di(e, t) {
  let r = t.filter((a) => a.pooled_budget).map((a) => Li(a.scope)), i = r.length === 0 ? [] : await e`
          SELECT rbac_group_id, cents FROM pooled_spend
          WHERE period = ${Ce("monthly")}
            AND rbac_group_id = ANY(${e.array(r, "TEXT")})
        `, o = new Map(i.map((a) => [a.rbac_group_id, a.cents]));
  return t.map((a) => ({ type: "spend_limit", id: a.id, created_at: a.created_at, updated_at: a.updated_at, scope: a.scope, amount: a.amount, currency: a.currency, period: a.period, ...a.pooled_budget !== void 0 && { pooled_budget: a.pooled_budget && { ...a.pooled_budget, currency: a.currency, period_to_date_spend: xs(o.get(Li(a.scope)) ?? 0) } } }));
}
function Lu(e, t) {
  let r = e.indexOf(t);
  return r === -1 ? e.length : r;
}
function $u(e, t) {
  let [r, ...i] = e.toSorted((l, h) => (t ? Lu(t, l.group) - Lu(t, h.group) : h.limit - l.limit) || (l.group < h.group ? -1 : 1));
  if (!r) return null;
  let o = [r, ...i], a = o.find((l) => l.spent < l.limit);
  return a ? { pays: a } : { usedUp: o };
}
var Zg = 3e4;
function Du(e, t, r = () => performance.now()) {
  let i = /* @__PURE__ */ new Map(), o;
  return async (a, l) => {
    if (i.set(a, (i.get(a) ?? 0) + l), o !== void 0) {
      if (r() - o >= Zg) o = r(), t();
      return;
    }
    try {
      while (i.size > 0) {
        let h = i;
        i = /* @__PURE__ */ new Map(), o = r(), await e(h);
      }
    } finally {
      o = void 0;
    }
  };
}
var Ni = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function Nu(e) {
  return `This request exceeds your group's budget. Ask your organization's admins to raise it, or try again after it resets on ${Ni[e.getUTCMonth()]} ${e.getUTCDate()} at ${e.toISOString().slice(11, 16)} UTC.`;
}
function Wu(e, t, r, i = null, o, a = () => {
}) {
  if (!e.body || e.status >= 400) return e;
  let l = (e.headers.get("content-type") ?? "").includes("text/event-stream"), h = e.body.getReader(), u = Qg(l, i, o), f = false;
  async function m() {
    if (f) return;
    f = true;
    try {
      let g = await u.usage();
      if (g) await r(t(g), g);
    } catch (g) {
      (0, import_chunk_s95w59kf.xo)("warn", `usage metering failed: ${(0, import_chunk_jv7av99m.d)(g)}`);
    }
  }
  let b = new ReadableStream({ async pull(g) {
    try {
      let k = await h.read();
      if (k.done) {
        a(m()), g.close();
        return;
      }
      u.push(k.value), g.enqueue(k.value);
    } catch (k) {
      a(m()), g.error(k);
    }
  }, async cancel(g) {
    a(m()), await h.cancel(g);
  } });
  return new Response(b, { status: e.status, statusText: e.statusText, headers: e.headers });
}
var Uu = 8388608;
function Qg(e, t, r) {
  let i = new TextDecoder();
  if (e) {
    let h = "", u = r_();
    return { push(f) {
      h += i.decode(f, { stream: true });
      let m = h.split(e_);
      h = m.pop() ?? "";
      for (let b of m) Mu(u, b);
      if (h.length > Uu) h = "";
    }, async usage() {
      if (h !== "") Mu(u, h), h = "";
      return s_(u);
    } };
  }
  let o = "", a = 0, l = false;
  return { push(h) {
    let u = i.decode(h, { stream: true });
    if (a += u.length, l) return;
    if (o += u, o.length > Uu) l = true, o = "";
  }, async usage() {
    let h = l ? null : o_(o);
    if (h) return h;
    if (a === 0) return null;
    return { input_tokens: await t?.().catch(() => null) ?? 0, output_tokens: Math.ceil(a / Hu), speed: r };
  } };
}
var e_ = /\r?\n\r?\n/, Hu = 4, t_ = 80;
function r_() {
  return { usage: { input_tokens: 0, output_tokens: 0 }, seen: false, estOutputChars: 0, sawOutputTokens: false };
}
function Mu(e, t) {
  let r = Ui(t, "event:"), i = r ? t.slice(r[0], r[1]).trim() : null;
  if (i === "content_block_delta") {
    ju(e, t);
    return;
  }
  if (i !== null && i !== "message_start" && i !== "message_delta") return;
  if (i === null) {
    if (!t.includes('"usage"')) {
      if (t.includes('"content_block_delta"')) ju(e, t);
      return;
    }
  }
  let o = Ui(t, "data:");
  if (!o) return;
  let a;
  try {
    a = JSON.parse(t.slice(o[0], o[1]).trim());
  } catch {
    return;
  }
  let l = a_().safeParse(a);
  if (!l.success) {
    Gu(l.error);
    return;
  }
  if (l.data.type === "message_start" && l.data.message?.usage) {
    qu(e.usage, l.data.message.usage), e.seen = true;
    return;
  }
  if (l.data.type === "content_block_delta" && l.data.delta) {
    let h = l.data.delta;
    e.estOutputChars += (h.text?.length ?? 0) + (h.partial_json?.length ?? 0) + (h.thinking?.length ?? 0);
    return;
  }
  if (l.data.type === "message_delta" && l.data.usage) {
    let h = l.data.usage, u = { input_tokens: h.input_tokens, cache_read_input_tokens: h.cache_read_input_tokens, cache_creation_input_tokens: Fu(h) };
    for (let f of ["input_tokens", "cache_read_input_tokens", "cache_creation_input_tokens"]) {
      let m = u[f];
      if (m != null && m > (e.usage[f] ?? 0)) e.usage[f] = m;
    }
    for (let f of ["ephemeral_5m_input_tokens", "ephemeral_1h_input_tokens"]) {
      let m = h.cache_creation?.[f];
      if (m != null && m > (e.usage.cache_creation?.[f] ?? 0)) e.usage.cache_creation = { ...e.usage.cache_creation, [f]: m };
    }
    if (h.output_tokens !== void 0) e.usage.output_tokens = h.output_tokens, e.sawOutputTokens = true;
    if (h.server_tool_use != null) e.usage.server_tool_use = h.server_tool_use;
    e.seen = true;
  }
}
function ju(e, t) {
  let r = Ui(t, "data:");
  if (r) e.estOutputChars += Math.max(0, r[1] - r[0] - t_);
}
function Ui(e, t) {
  let r = 0;
  while (true) {
    if (e.startsWith(t, r)) {
      let o = r + t.length;
      if (e.charCodeAt(o) === 32) o += 1;
      let a = e.indexOf(`
`, o);
      return [o, a === -1 ? e.length : a];
    }
    let i = e.indexOf(`
`, r);
    if (i === -1) return null;
    r = i + 1;
  }
}
function s_(e) {
  if (!e.sawOutputTokens && e.estOutputChars > 0) e.usage.output_tokens = Math.ceil(e.estOutputChars / Hu), e.seen = true;
  return e.seen ? e.usage : null;
}
var Bu = (0, import_chunk_t57w17k7.de)({ unreadableUsage: false }, (e) => {
  e.unreadableUsage = false;
});
function Gu(e) {
  if (Bu.unreadableUsage) return;
  Bu.unreadableUsage = true;
  let t = e.issues[0], r = t ? `${t.path.join(".")}: ${t.message}` : "unknown";
  (0, import_chunk_s95w59kf.xo)("warn", `usage metering: the upstream sent a usage object that does not match the API's shape (${r}), so that response's spend was metered from its other frames or from the abort-floor estimate and may be under-counted; check the upstream or proxy that produced it. This warning is logged once per process.`);
}
function o_(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  let r = c_().safeParse(t);
  if (!r.success) return Gu(r.error), null;
  if (!r.data.usage) return null;
  let i = { input_tokens: 0, output_tokens: 0 };
  if (qu(i, r.data.usage), i.output_tokens = r.data.usage.output_tokens ?? 0, r.data.usage.server_tool_use != null) i.server_tool_use = r.data.usage.server_tool_use;
  return i;
}
function Fu(e) {
  let t = e.cache_creation_input_tokens ?? void 0, r = (e.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (e.cache_creation?.ephemeral_1h_input_tokens ?? 0);
  return !t && r > 0 ? r : t;
}
function qu(e, t) {
  if (e.input_tokens = t.input_tokens ?? e.input_tokens, e.cache_read_input_tokens = t.cache_read_input_tokens ?? void 0, e.cache_creation_input_tokens = Fu(t), e.cache_creation = t.cache_creation ?? void 0, t.server_tool_use != null) e.server_tool_use = t.server_tool_use;
  if (t.speed !== void 0) e.speed = t.speed;
}
var Mi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ input_tokens: (0, import_chunk_rnm2beqc.nr)().optional(), output_tokens: (0, import_chunk_rnm2beqc.nr)().optional(), cache_read_input_tokens: (0, import_chunk_rnm2beqc.nr)().nullish(), cache_creation_input_tokens: (0, import_chunk_rnm2beqc.nr)().nullish(), cache_creation: (0, import_chunk_rnm2beqc.on)({ ephemeral_5m_input_tokens: (0, import_chunk_rnm2beqc.nr)().optional(), ephemeral_1h_input_tokens: (0, import_chunk_rnm2beqc.nr)().optional() }).nullish(), speed: (0, import_chunk_rnm2beqc.we)().nullable().optional(), server_tool_use: (0, import_chunk_rnm2beqc.on)({ web_search_requests: (0, import_chunk_rnm2beqc.nr)().optional() }).passthrough().nullish() }).passthrough()), i_ = (0, import_chunk_2cbgkbm2.p)(() => Mi().extend({ input_tokens: (0, import_chunk_rnm2beqc.nr)().nullish() })), a_ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ type: (0, import_chunk_rnm2beqc.we)().optional(), usage: i_().optional(), message: (0, import_chunk_rnm2beqc.on)({ usage: Mi().optional() }).passthrough().optional(), delta: (0, import_chunk_rnm2beqc.on)({ text: (0, import_chunk_rnm2beqc.we)().optional(), partial_json: (0, import_chunk_rnm2beqc.we)().optional(), thinking: (0, import_chunk_rnm2beqc.we)().optional() }).passthrough().optional() }).passthrough()), c_ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ usage: Mi().optional() }).passthrough());
var Ku = 2e3;
function Ju(e, t, r) {
  if (!t.admin) return null;
  let i = t.admin, o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), l = 9e5, h = /* @__PURE__ */ new Map(), u = 2e3, f = /* @__PURE__ */ new Set(), m = Number.NEGATIVE_INFINITY, b = Du((R) => vu(e, R).catch((D) => {
    (0, import_chunk_s95w59kf.xo)("warn", `pooled spend record failed, so this spend is missing from group budgets: ${(0, import_chunk_jv7av99m.d)(D)}`), r?.("write");
  }), () => (0, import_chunk_s95w59kf.xo)("warn", "a write to pooled_spend has not returned after 30 s, so this replica is not counting spend toward group budgets. The unsaved spend is held in memory and lost if the replica stops. Look for a lock on pooled_spend or a dead database connection"));
  function g(R) {
    f.add(R), R.finally(() => f.delete(R));
  }
  async function k(R, D) {
    let U = /* @__PURE__ */ new Date(), H = new AbortController(), se = (0, import_chunk_5appeerh.qt)(Pi(e, R.sub, R.groups ?? [], i.group_limit_mode, U, H.signal, R.groups), Ku + 500, "spend precheck timed out");
    S(R);
    let z;
    try {
      z = await se;
    } catch (ae) {
      if (H.abort(), (0, import_chunk_s95w59kf.xo)("warn", `spend check failed: ${(0, import_chunk_jv7av99m.d)(ae)}`), r?.("check"), !t.enforcement.fail_closed_on_error) return { blocked: null, headers: {}, payingGroup: null };
      return { blocked: E(R.sub, D, null, { "anthropic-ratelimit-unified-overage-disabled-reason": "fetch_error" }) };
    }
    let { binding: L, headers: Q } = zu(z.caps, U);
    if (L?.exceeded) return { blocked: E(R.sub, D, L, Q) };
    if (z.pools.status === "rejected") {
      if (U.getTime() - m >= 6e4) m = U.getTime(), (0, import_chunk_s95w59kf.xo)("warn", `pooled spend check failed, so group budgets are not enforced (developers' own caps are). Logged at most once a minute: ${(0, import_chunk_jv7av99m.d)(z.pools.reason)}`);
      return r?.("check"), { blocked: null, headers: Q, payingGroup: null };
    }
    let ye = $u(z.pools.value, i.pooled_conflict_rule === "priority_list" ? i.pooled_priority_order : void 0);
    if (ye && "usedUp" in ye) {
      let ae = zu([{ period: "monthly", cap_cents: String(ye.usedUp[0].limit), scope_type: "group_pool", spent_cents: ye.usedUp[0].spent }], U);
      return { blocked: E(R.sub, D, ae.binding, ae.headers, ye.usedUp.map((j) => j.group)) };
    }
    return { blocked: null, headers: Q, payingGroup: ye?.pays.group ?? null };
  }
  async function y(R, D) {
    let U = /* @__PURE__ */ new Date(), H;
    try {
      H = await v(R, U);
    } catch (se) {
      return (0, import_chunk_s95w59kf.xo)("warn", `GET /api/oauth/usage: spend store read failed: ${(0, import_chunk_jv7av99m.d)(se)} request_id=${D}`), r?.("check"), new Response("spend limit unavailable", { status: 503, headers: et });
    }
    return Response.json(Array.isArray(H) ? l_(H, U) : u_(H), { headers: et });
  }
  function v(R, D) {
    let U = h.get(R.sub);
    if (U && D.getTime() - U.at < u) return U.read;
    if (h.size >= 1e4) h.clear();
    let H = new AbortController(), se = (0, import_chunk_5appeerh.qt)(Pi(e, R.sub, R.groups ?? [], i.group_limit_mode, D, H.signal).then(async ({ caps: z }) => z.length > 0 ? z : bu(e, R.sub, D)), Ku + 500, "spend usage read timed out").catch((z) => {
      throw H.abort(), z;
    });
    return h.set(R.sub, { at: D.getTime(), read: se }), se;
  }
  function E(R, D, U, H, se) {
    (0, import_chunk_s95w59kf.Tte)("spend.blocked", { request_id: D, sub: R, cause: U ? "over_limit" : "store_error", ...U && { cap_cents: U.cap_cents, source: U.scope_type, period: U.period }, ...se && { groups: se }, ...t.load_test_mode?.enabled && { load_test: true } });
    let z = U ? U.scope_type === "group_pool" ? Nu(U.resetsAt) : Number(U.cap_cents) === 0 ? "spend limit reached" : `spend limit reached \xB7 resets ${Ni[U.resetsAt.getUTCMonth()].slice(0, 3)} ${U.resetsAt.getUTCDate()}` : "spend limit unavailable";
    return Response.json({ type: "error", error: { type: "billing_error", message: i.blocked_message ? `${z.replace(/\.$/, "")} \xB7 ${i.blocked_message}` : z } }, { status: 429, headers: { ...H, "x-should-retry": "false" } });
  }
  function S(R) {
    let D = `${R.sub}\0${R.email ?? ""}\0${R.name ?? ""}\0${(R.groups ?? []).join(",")}`, U = a.get(D) ?? 0;
    if (Date.now() - U >= l) {
      if (a.size >= 1e4) a.clear();
      a.set(D, Date.now()), g(Eu(e, R).catch((H) => (0, import_chunk_s95w59kf.xo)("warn", `identity record failed: ${(0, import_chunk_jv7av99m.d)(H)}`))), g(Su(e, R.sub, R.groups ?? [], Ce("daily")).catch((H) => (0, import_chunk_s95w59kf.xo)("warn", `could not save a developer's IdP groups for today, so the cost report may show their spend today under yesterday's groups or none: ${(0, import_chunk_jv7av99m.d)(H)}`)));
    }
  }
  function O(R, D, U, H, se, z, L, Q, ye, ae) {
    if (R.status < 400 && L !== null && !(0, import_chunk_865at33z.iCt)(Q ?? "") && !Pt(t.pricing, z, L, Q)) x(L);
    return Wu(R, (j) => t.load_test_mode?.enabled ? 0 : Pl(L, j, Q, t.pricing, z), (j, be) => {
      let fe = Promise.all([ku(e, D.sub, j).catch((Oe) => {
        (0, import_chunk_s95w59kf.xo)("warn", `spend record failed: ${(0, import_chunk_jv7av99m.d)(Oe)}`), r?.("write");
      }), U !== null && b(U, j)]);
      if (i.billing_group_tag) (0, import_chunk_s95w59kf.Tte)("spend.metered", { request_id: H, sub: D.sub, ...se, model: Q, input_tokens: be.input_tokens, output_tokens: be.output_tokens, cache_read_input_tokens: be.cache_read_input_tokens, cache_creation_input_tokens: be.cache_creation_input_tokens, cents: Number(j.toFixed(6)), ...t.load_test_mode?.enabled && { load_test: true } });
      return fe;
    }, ye, ae, g);
  }
  function x(R) {
    if ((0, import_chunk_865at33z.iCt)(R) || o.has(R) || o.size >= 1e3) return;
    o.add(R), (0, import_chunk_s95w59kf.xo)("warn", `spend meter has no exact rates for model '${R}' \u2014 metering at the unknown-model default tier`);
  }
  async function P() {
    while (f.size > 0) await Promise.all(f);
  }
  return { precheck: k, usage: y, meter: O, flush: P };
}
var d_ = [0.95, 0.75];
function zu(e, t = /* @__PURE__ */ new Date()) {
  let r = Vu(e.map((i) => Yu(i, t)));
  return { binding: r, headers: r ? f_(r, t) : {} };
}
function Yu(e, t) {
  let r = Number(e.cap_cents), i = e.spent_cents >= r;
  return { ...e, exceeded: i, utilization: r > 0 ? e.spent_cents / r : 1, resetsAt: hu(e.period, t) };
}
function Vu(e) {
  let t = null;
  for (let r of e) t = t ? p_(t, r) : r;
  return t;
}
function ji(e) {
  let t = Math.round(e.utilization * 100) / 100;
  return e.exceeded ? t : Math.min(t, 0.99);
}
function l_(e, t = /* @__PURE__ */ new Date()) {
  let r = e.map((o) => Yu(o, t)), i = Vu(r);
  return { ...i && { extra_usage: { is_enabled: true, monthly_limit: Number(i.cap_cents), used_credits: Math.floor(i.spent_cents), utilization: Math.round(ji(i) * 100), currency: "USD" } }, limits: r.map((o) => ({ kind: "spend", group: o.period, percent: Math.round(ji(o) * 100), resets_at: o.resetsAt.toISOString(), severity: o.exceeded || o.utilization > 0.95 ? "critical" : o.utilization > 0.75 ? "warning" : "normal", is_active: o === i })) };
}
function u_(e) {
  return { extra_usage: { is_enabled: true, monthly_limit: null, used_credits: e.monthly, utilization: null, currency: "USD", daily: { limit: null, used_credits: e.daily, utilization: null }, weekly: { limit: null, used_credits: e.weekly, utilization: null } }, limits: [] };
}
function p_(e, t) {
  if (e.exceeded !== t.exceeded) return e.exceeded ? e : t;
  if (e.exceeded) return e.resetsAt.getTime() > t.resetsAt.getTime() ? e : t;
  return e.utilization > t.utilization ? e : t;
}
function f_(e, t) {
  let r = String(Math.floor(e.resetsAt.getTime() / 1e3)), i = e.exceeded ? 1 : d_.find((l) => e.utilization > l), o = e.exceeded ? "rejected" : i ? "allowed_warning" : "allowed", a = { "anthropic-ratelimit-unified-status": o, "anthropic-ratelimit-unified-reset": r, "anthropic-ratelimit-unified-overage-reset": r, "anthropic-ratelimit-unified-overage-utilization": String(ji(e)) };
  if (i) a["anthropic-ratelimit-unified-overage-surpassed-threshold"] = String(i);
  if (e.exceeded) {
    if (a["anthropic-ratelimit-unified-overage-period"] = e.period, e.scope_type === "group_pool") a["anthropic-ratelimit-unified-overage-scope"] = e.scope_type;
    a["anthropic-ratelimit-unified-overage-disabled-reason"] = "org_spend_cap_reached", a["retry-after"] = String(Math.max(1, Math.ceil((e.resetsAt.getTime() - t.getTime()) / 1e3)));
  } else a["anthropic-ratelimit-unified-representative-claim"] = "overage", a["anthropic-ratelimit-unified-overage-status"] = o;
  return a;
}
function Bi(e, t) {
  return t !== void 0 && t.admin_groups.length > 0 && (e ?? []).some((r) => t.admin_groups.includes(r));
}
var ep = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qm5s85q5.ACr)(), 1);
var Zu = /* @__PURE__ */ new Set(["claude-sonnet-4-0", "claude-sonnet-4-5"]);
function Qu(e, t) {
  if ((0, import_chunk_865at33z.cdt)(e)) return false;
  let r = Zu.has((0, import_chunk_865at33z.zg)(e)) ? void 0 : Xu(e);
  if (r === false) return false;
  let i = t.upstreams.flatMap((o) => {
    let a = We(e, o, t.models, t.auto_include_builtin_models);
    return a.ok ? [Xu(a.model)] : [];
  });
  return !i.includes(false) && (r === true || i.includes(true));
}
function Xu(e) {
  let t = (0, import_chunk_865at33z.zg)(e);
  if ((0, import_chunk_865at33z.D7e)(t) || Zu.has(t)) return false;
  let r = (0, import_chunk_zhr7rpv7.kd)(t)?.context;
  return r === void 0 ? void 0 : r.supports_1m_beta === true;
}
function tr(e) {
  return e?.underCode === true && e.desktopSessionPayload !== void 0;
}
function tp(e, t, r, i) {
  let o = t?.payload.settings ?? {}, a = __(o), l = t?.desktop;
  if (e.upstreams.length > 0 && e.upstreams.every((m) => ["bedrock", "mantle"].includes(m.provider)) && ep.findWebSearchBuiltin(l?.managedMcpServers) === void 0) a.disabledBuiltinTools = vs(a.disabledBuiltinTools ?? [], [import_chunk_ht27b0vz.Wc]);
  let h = vs(a.disabledBuiltinTools, l?.disabledBuiltinTools), u = l === void 0 ? void 0 : { ...l, ...h === void 0 ? {} : { disabledBuiltinTools: h } }, f = e.telemetry.forward_to.length > 0 && e.listen.public_url;
  return { inferenceProvider: "gateway", inferenceGatewayBaseUrl: i, inferenceCredentialKind: "interactive", ...tr(t) && { inferenceGatewayManagedClaudeCode: true }, ...f && { otlpEndpoint: i, otlpProtocol: y_(o), otlpResourceAttributes: m_(r, e.telemetry.resource_attributes) }, ...g_(e, t ?? void 0, o), ...a, ...w_(o), ...u, expiresAt: Math.floor(Date.now() / 1e3) + e.session.ttl_hours * 3600 };
}
var h_ = "enduser.sub";
function m_(e, t) {
  let r = { ...t, "enduser.id": e.email ?? e.sub };
  if (e.email) r["user.email"] = e.email;
  let i = e.groups ?? [], o = i.join(",");
  if (o.length > 0 && !i.some((l) => l.includes(",") || l.includes("=")) && ms(o)) r["user.groups"] = o;
  let a = e.sub;
  if (!gi.test(a) && ms(a)) r[h_] = a;
  return r;
}
function g_(e, t, r) {
  let i = !Wi(r), o = hi(e.models, e.upstreams, e.auto_include_builtin_models, t).map((a) => ({ name: a.id, ...a.display_name !== a.id && { labelOverride: a.display_name }, ...i && Qu(a.id, e) && { supports1m: true } }));
  return o.length > 0 ? { inferenceModels: o } : {};
}
function Wi(e) {
  let t = np(e).CLAUDE_CODE_DISABLE_1M_CONTEXT;
  return (0, import_chunk_69qhefwa.Ne)(typeof t === "string" || typeof t === "boolean" ? t : typeof t === "number" ? String(t) : void 0);
}
function np(e) {
  return e.env !== null && typeof e.env === "object" ? e.env : {};
}
function __(e) {
  let t = rp(e, ["permissions", "deny"]);
  if (!t) return {};
  let r = t.filter((i) => !i.includes("(") && !i.startsWith("mcp__"));
  return r.length > 0 ? { disabledBuiltinTools: r } : {};
}
function y_(e) {
  let t = np(e);
  return ["OTEL_EXPORTER_OTLP_PROTOCOL", "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL", "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL", "OTEL_EXPORTER_OTLP_TRACES_PROTOCOL"].some((i) => t[i] === "http/json") ? "http/json" : "http/protobuf";
}
function w_(e) {
  let t = rp(e, ["sandbox", "network", "allowedDomains"]);
  return t !== void 0 && t.length > 0 ? { coworkEgressAllowedHosts: t } : {};
}
function rp(e, t) {
  let r = e;
  for (let i of t) {
    if (r === null || typeof r !== "object") return;
    r = r[i];
  }
  return Array.isArray(r) && r.every((i) => typeof i === "string") ? r : void 0;
}
(0, import_chunk_adx6804h.B)();
var b_ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ modelPicker: (0, import_chunk_adx6804h.c)({ options: (0, import_chunk_adx6804h.C)((0, import_chunk_xcgcdx61.nDr)()) }).optional(), modelOverrides: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() }));
function sp(e, t) {
  let r = /* @__PURE__ */ new Set();
  for (let o of t ?? []) {
    let a = b_().safeParse(o.payload.settings).data;
    for (let l of a?.modelPicker?.options ?? []) if (l.behavesAs) r.add((0, import_chunk_zmb62hr5.Yt)(l.model.toLowerCase()));
    for (let l of Object.values(a?.modelOverrides ?? {})) r.add((0, import_chunk_zmb62hr5.Yt)(l.toLowerCase()));
  }
  let i = /* @__PURE__ */ new Map();
  for (let o of e) {
    let a = (0, import_chunk_zmb62hr5.Yt)(o.id);
    if (r.has(a.toLowerCase()) || (0, import_chunk_zmb62hr5.Hw)(a.toLowerCase()) || (0, import_chunk_865at33z.sz)((0, import_chunk_865at33z.zg)(a))) continue;
    let l = i.get(a) ?? /* @__PURE__ */ new Set();
    for (let h of Object.values(o.upstream_model)) l.add((0, import_chunk_865at33z.zg)(h));
    i.set(a, l);
  }
  return [...i].filter(([, o]) => [...o].some((a) => (0, import_chunk_865at33z.sz)(a))).map(([o, a]) => ({ id: o, model: a.size === 1 ? [...a][0] : void 0 }));
}
var k_ = ["https://www.googleapis.com/auth/cloud-platform"], op = 10;
function ip(e) {
  let t;
  return async () => {
    let { GoogleAuth: r, gcpMetadata: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-q9g7ztzs.js"))).then((m) => (0, import_chunk_w1d7ygsk.rt)(m.default, 1));
    t ??= new r({ scopes: k_, projectId: "unused", ...e.service_account_json && { keyFilename: e.service_account_json }, clientOptions: Mn() });
    try {
      let o = await (0, import_chunk_5appeerh.qt)(t.getRequestHeaders(), op * 1e3, `no Google credentials or token within ${op} s`), a = o.get("authorization");
      if (!a) throw Error("Google's library returned no Authorization header");
      let l = o.get("x-goog-user-project");
      return { authorization: a, ...l && { "x-goog-user-project": l } };
    } catch (o) {
      throw t = void 0, i.resetIsAvailableCache(), Error(`no Google access token: ${(0, import_chunk_7cfjrnwy.NB)((0, import_chunk_jv7av99m.d)(o), 500)}`);
    }
  };
}
var Hi = { "/v1/metrics": "metrics", "/v1/logs": "logs", "/v1/traces": "traces" }, v_ = 128, E_ = 5, S_ = 3e4;
function rr(e) {
  return String(e).replace(/(\b\w+:\/\/)[^@/]+@/g, "$1");
}
class Gi {
  inFlight = 0;
  dropped = 0;
  refused = /* @__PURE__ */ new Map();
  circuitBreakers = /* @__PURE__ */ new Map();
  googleAuths = /* @__PURE__ */ new Map();
  googleHeaders(e) {
    let t = this.googleAuths.get(e);
    if (!t) t = ip(e), this.googleAuths.set(e, t);
    return t();
  }
  async fanout(e, t, r, i, o) {
    if (o.length === 0) return;
    if (this.inFlight >= v_) {
      if (this.dropped++ % 100 === 0) (0, import_chunk_s95w59kf.xo)("warn", `otel fanout saturated (${this.inFlight} in flight); dropping`);
      return;
    }
    this.inFlight++;
    try {
      let a = Date.now(), l = o.map((u) => (this.circuitBreakers.get(u.url)?.openUntil ?? 0) > a);
      (await Promise.allSettled(o.map(async (u, f) => {
        if (l[f]) return Promise.reject(Error("circuit open"));
        let m = { "Content-Type": r, ...i && { "Content-Encoding": i }, ...u.headers };
        if (u.auth) {
          let b = await this.googleHeaders(u.auth.google), g = Object.keys(u.headers).map((k) => k.toLowerCase());
          for (let k of Object.keys(m)) if (k.toLowerCase() === "authorization") delete m[k];
          for (let [k, y] of Object.entries(b)) if (k === "authorization" || !g.includes(k)) m[k] = y;
        }
        return zt(`${u.url.replace(/\/$/, "")}${e}`, { method: "POST", body: t, honorNoProxy: true, headers: m, signal: AbortSignal.timeout(1e4) }).then((b) => {
          if (b.body?.cancel().catch(() => {
          }), b.status === 400 || b.status === 413 || b.status === 415 || b.status === 422 || b.status === 431) {
            let g = this.refused.get(u.url) ?? 0;
            if (this.refused.set(u.url, g + 1), g % 100 === 0) (0, import_chunk_s95w59kf.xo)("warn", `otel dest ${rr(u.url)} refused an export's payload: ${b.status} ${rr(b.statusText)} (not counted as a dest failure)`);
            return "refused";
          }
          if (!b.ok) throw Error(`${b.status} ${b.statusText}`);
          return "delivered";
        });
      }))).forEach((u, f) => {
        if (l[f]) return;
        let m = o[f].url;
        if (u.status === "fulfilled") {
          if (u.value === "delivered") this.circuitBreakers.delete(m);
        } else {
          let b = this.circuitBreakers.get(m) ?? { fails: 0, openUntil: 0 };
          if (++b.fails >= E_) b.openUntil = Date.now() + S_, (0, import_chunk_s95w59kf.xo)("warn", `otel dest ${rr(m)} tripped; skipping 30s`);
          else (0, import_chunk_s95w59kf.xo)("warn", `otel forward to ${rr(m)} failed: ${rr(u.reason)}`);
          this.circuitBreakers.set(m, b);
        }
      });
    } finally {
      this.inFlight--;
    }
  }
}
var ap = 256, A_ = 6e4;
function cp(e) {
  if (e === void 0 || !/^\+?\d(_*\d)*$/.test(e)) return ap;
  let t = Number(e.replaceAll("_", ""));
  return t >= 1 && t <= 65535 ? t : ap;
}
function dp(e, t = () => performance.now()) {
  let r = Number.NEGATIVE_INFINITY;
  return (i) => {
    if (i <= e || t() - r < A_) return;
    r = t(), (0, import_chunk_s95w59kf.xo)("warn", `${i} client requests are open on this gateway process, more than the ${e} it sends upstream at once. Requests past that limit wait inside the gateway for a free slot, so developers see slow or stalled responses, or a 502 after a long wait. Add replicas, or raise BUN_CONFIG_MAX_HTTP_REQUESTS and the replica's memory limit together.`);
  };
}
var up = "blocked by your organization's policy", lp = 500;
function T_(e) {
  let t = e.replace(/[\p{Cc}\p{Cf}]+/gu, " ").trim();
  if (t.length === 0) return up;
  let r = Array.from(t);
  return r.length > lp ? r.slice(0, lp).join("") + "\u2026" : t;
}
function pp(e) {
  let t = e.cri?.enabled ? e.cri.policy?.webhook : void 0;
  if (!t) return null;
  let { url: r, timeout_ms: i } = t, o = t.fail_closed !== false;
  function a(l, h, u, f, m, b, g, k) {
    return (0, import_chunk_s95w59kf.Tte)("policy.blocked", { request_id: h, sub: l, cause: u, path: m, ...b !== void 0 && { org: b }, ...g !== void 0 && { act: g }, ...k !== void 0 && { rule_id: k } }), pe(400, "policy_blocked", f, h, { "x-should-retry": "false" });
  }
  return { async precheck(l, h, u, f, m, b) {
    let g, k = (y) => {
      (0, import_chunk_s95w59kf.Tte)("policy.skipped", { request_id: u, sub: l.sub, cause: y, path: f.path, ...m !== void 0 && { org: m }, ...b !== void 0 && { act: b } });
    };
    try {
      let y = await es(r, { method: "POST", headers: { "content-type": "application/json", "x-request-id": u, "x-principal-sub": l.sub.replace(/[^\x21-\x7e]/g, "") }, body: (0, import_chunk_w578pjby._)({ path: f.path, query: f.query, headers: f.headers, body: h }) }, i, "policy webhook timed out");
      if (!y.ok) throw y.body?.cancel().catch(() => {
      }), (0, import_chunk_s95w59kf.xo)("warn", `policy check failed: webhook returned ${y.status}`), Error("policy webhook returned a non-OK status");
      let v = await y.json();
      if (typeof v !== "object" || v === null || Array.isArray(v)) throw Error("policy webhook returned a non-object decision");
      if (g = v, typeof g.block !== "boolean") {
        if (o) throw Error("policy webhook decision has no boolean block field");
        return (0, import_chunk_s95w59kf.xo)("warn", "policy check: webhook decision has no boolean block field \u2014 allowing (fail-open)"), k("decision_shape"), null;
      }
    } catch (y) {
      if ((0, import_chunk_s95w59kf.xo)("warn", `policy check failed: ${(0, import_chunk_jv7av99m.d)(y)}`), o) return a(l.sub, u, "engine_error", "policy check unavailable", f.path, m, b);
      return k("engine_error"), null;
    }
    if (g.block !== true) return null;
    return a(l.sub, u, "policy_hit", typeof g.reason === "string" && g.reason.length > 0 ? T_(g.reason) : up, f.path, m, b, typeof g.rule_id === "string" ? g.rule_id : void 0);
  } };
}
var fp = `# Claude Code gateway protocol

This is the wire contract the Claude Code CLI uses to talk to this gateway:
sign-in, inference, managed settings, and telemetry. It's served from the
gateway itself so it always matches the version you're running.

> **Stability:** this protocol exists to give you a more stable target than
> proxying raw CLI traffic. Auth is standard OAuth 2.0, inference is the
> Messages API, and headers are the lowest common denominator across
> backends. We keep it backwards compatible within reason to support older
> clients, but not forever \u2014 expect changes, managed settings in particular,
> with notice.

A developer points Claude Code at your gateway's base URL via \`/login\` and
the client does the rest. All paths below are relative to that base URL, and
the client does not follow cross-origin redirects.

## Flow

1. Client fetches \`GET {base}/.well-known/oauth-authorization-server\`.
2. On first contact, client fingerprints your TLS certificate and asks the
   user to trust it.
3. Client runs the RFC 8628 device flow: \`POST device_authorization_endpoint\`
   -> user approves in a browser at \`verification_uri\` -> client polls
   \`token_endpoint\` until it gets a bearer token.
4. Client sends \`Authorization: Bearer <token>\` on every subsequent request.
5. Client uses fixed paths under \`{base}\` for inference (\`/v1/messages\`),
   policy (\`/managed/settings\`), model discovery (\`/v1/models\`), and
   telemetry (\`/v1/{metrics,logs,traces}\`).
6. Before the token expires, client silently calls \`token_endpoint\` with
   \`grant_type=refresh_token\`. If you didn't issue a refresh token, the user
   is sent back through the browser flow instead.

Don't reject what you don't recognize. New optional request parameters, body
fields and headers can appear in any Claude Code release, and many developer
machines update on their own, so a server that rejects unknown input can stop
working for its users from one day to the next. On the sign-in endpoints
ignore them (RFC 6749 \xA73.2 and RFC 8628 \xA73.1 require that for request
parameters). On \`/v1/messages\` pass body fields and \`anthropic-beta\` values
to your upstream unchanged (except request tags, below), and forward or drop
other headers, but never fail the request over them.

## Discovery \u2014 required

\`GET /.well-known/oauth-authorization-server\` (unauthenticated)

RFC 8414 authorization server metadata. The client reads
\`device_authorization_endpoint\` and \`token_endpoint\` and, when present,
\`revocation_endpoint\`, and ignores the rest. It uses each only when it is an
absolute URL on the same origin as \`{base}\`; otherwise it sends the request
to \`{base}/oauth/device_authorization\` or \`{base}/oauth/token\` instead, and
skips revocation. So a gateway reached through a reverse proxy on another
hostname works when the proxy serves every path on this page, those two
included, and \`verification_uri\` is one the user's browser can open.
With a \`revocation_endpoint\`, sign-out sends
\`POST {revocation_endpoint}\` form-encoded with \`token=<bearer>\` and, when
you issued a refresh token, a second request with \`token=<refresh_token>\`
and \`token_type_hint=refresh_token\` (RFC 7009, no client authentication,
best effort); answer directly, the client follows no redirect here. A client
signed in before you advertised \`revocation_endpoint\` reads the metadata
again at sign-out. Answer a revoked bearer's next request with \`401\` and
\`x-should-retry: false\` (see Errors).
\`authorization_endpoint\` is intentionally absent.

    {
      "issuer": "https://gw.corp.example.com",
      "device_authorization_endpoint": "https://gw.corp.example.com/oauth/device_authorization",
      "token_endpoint": "https://gw.corp.example.com/oauth/token",
      "grant_types_supported": ["urn:ietf:params:oauth:grant-type:device_code", "refresh_token"]
    }

## Device authorization \u2014 required

\`POST {device_authorization_endpoint}\` (unauthenticated; answer directly, the
client follows no redirect here)

RFC 8628 \xA73.2. The client opens \`verification_uri_complete\` in the user's
browser and polls \`token_endpoint\` every \`interval\` seconds.

    {
      "device_code": "AbK9-s3n4C8H...",
      "user_code": "WDJB-MJHT",
      "verification_uri": "https://gw.corp.example.com/device",
      "verification_uri_complete": "https://gw.corp.example.com/device?user_code=WDJB-MJHT",
      "expires_in": 600,
      "interval": 5
    }

\`device_code\` should be >=256 bits, opaque, single-use. \`user_code\` should
use a base-20 charset (RFC 8628 \xA76.1).

The response may carry one optional extension, \`login_notice\`: a plain-text
string (\u2264500 chars) the client shows next to the code on its sign-in screen.

The request body is form-encoded and may carry one extension parameter next
to RFC 8628 \xA73.1's: \`surface\`, a stable identifier of the client application
that is signing in. Claude Code sends \`surface=claude_code\`. Record it if you
attribute sessions by client; otherwise ignore it, as OAuth servers do for
any parameter they do not recognize (RFC 6749 \xA73.1, \xA73.2). Today that is the
whole form: Claude Code sends no \`client_id\` or \`scope\`, here or at the token
endpoint, so don't require them. Don't require the form to be empty or to
hold only this field either. Claude Code also sends
\`User-Agent: claude-code/<version>\` on the metadata, device, token, refresh
and revoke requests.

## Verification page \u2014 required

\`GET/POST {verification_uri}\` (browser-facing; the client never calls this)

Accept the user code, authenticate the user against your IdP, and mark the
matching \`device_code\` approved so the next token poll succeeds. Apply a
per-IP rate limit (RFC 8628 \xA75.1) and don't auto-submit a pre-filled code
(\xA75.4).

## Token \u2014 required

\`POST {token_endpoint}\` (unauthenticated,
\`application/x-www-form-urlencoded\`; answer directly, the client follows no
redirect here)

**Device grant** (\`grant_type=urn:ietf:params:oauth:grant-type:device_code\`):

| Status | Body | Client reaction |
|---|---|---|
| 200 | \`{"access_token","token_type":"Bearer","expires_in","refresh_token"?,"email"?}\` | Login complete. \`refresh_token\` is optional; omit it and the client re-runs the device flow on expiry. \`email\` is an extension: the account that approved the code. When present and non-blank, the client shows it and asks the user to confirm it before storing the credential, then shows it in \`/status\`. |
| 400 | \`{"error":"authorization_pending"}\` | Keep polling. |
| 400/429 | \`{"error":"slow_down"}\` | Add 5s to the poll interval. |
| 400 | \`{"error":"access_denied"}\` | Stop. |
| 400 | \`{"error":"expired_token"}\` | Stop. |

**Refresh grant** (\`grant_type=refresh_token\`): return a fresh
\`{"access_token","token_type","expires_in","refresh_token"}\` on 200. Return
\`401 {"error":"invalid_grant"}\` to force re-login \u2014 this is your
deprovisioning hook.

## Messages \u2014 required

\`POST /v1/messages\` and \`POST /v1/messages/count_tokens\` (bearer)

The Anthropic Messages API (https://platform.claude.com/docs/en/api/messages),
unchanged. Proxy to your upstream and stream the response back. Enforce your
model allowlist here, returning \`400 invalid_request_error\` for a denied
model. Don't buffer SSE on the \`stream: true\` path. The client always sets
\`Content-Length\`, so you may reject chunked-without-CL (\`411\`) and cap body
size (\`413\`). The client doesn't assume server-side tools are available. The
client also sends \`x-app\` and \`x-stainless-*\` headers \u2014 pass them through or
drop them, but don't reject the request because of them.

In auto mode the client adds an \`anthropic-beta\` value and a top-level
\`safeguards\` field, asking the upstream to run auto mode's safety check, and
reads \`safeguard_results\` from the reply. Pass all three through unchanged.
If you or your upstream can't, answer \`400 invalid_request_error\` with a
message that names \`safeguards\`: the client retries without them and runs the
check itself with ordinary requests.

## Managed settings \u2014 optional

\`GET /managed/settings\` (bearer)

Return \`{"uuid": "<id>", "checksum": "<checksum>", "settings": {...}}\`, where
\`settings\` is the authenticated user's Claude Code \`managed-settings.json\`;
see https://code.claude.com/docs/en/settings for the key reference. A \`200\`
without that wrapper counts as a failed fetch. The client polls about once an
hour and sends \`If-None-Match: "<checksum>"\`, a value it computes from the
settings it holds: \`sha256:\` plus the hex SHA-256 of the \`settings\` JSON with
keys sorted at every level and no whitespace. Use that value as your
\`checksum\` and, quoted, your \`ETag\`, and answer \`304\` on a match to keep
polling cheap; answering \`200\` every time also works. Send \`304\` only in
answer to an \`If-None-Match\`: the client counts one it didn't ask for as a
failed fetch. Return \`404\` for "no managed policy"; \`200\` with an empty
\`settings\` object means "this user has an empty policy" \u2014 they're not the
same. **This is the endpoint most likely to change.**

A Claude Desktop Code tab session on a machine that doesn't take your settings
sends the same request with \`If-None-Match: *\` at its start. It asks only
whether you have settings for that session: it reads no body and applies
nothing. Answer as you would without the header. On a \`200\`, a \`304\` or a \`404\`
the session starts and shows a warning that your settings may not apply. On a
\`429\`, a \`5xx\` or no answer within 3 seconds it doesn't start. An answer that
carries both \`x-cc-gateway-version\` and \`Cache-Control: no-store\` is read more
closely: such a \`404\` says "nothing for this session", so no warning is shown,
and such a \`304\` says "there are settings that must not be missing", so the
session doesn't start. Send the two together only if you mean that.

Serve \`"CLAUDE_CODE_GATEWAY_HINT_HEADERS": "1"\` in the \`env\` block to learn,
on each model request, which managed settings the session runs under, so you can
find machines whose settings are out of date, edited or missing (an older client
may send no checksum). The client then sends the hint headers listed at
https://code.claude.com/docs/en/llm-gateway-protocol#gateway-hint-headers and
\`x-claude-code-managed-settings-checksum\`, computed the same way as the
\`If-None-Match\` value above, over the managed settings as the client loaded
them. In an interactive session the developer is asked to approve the variable
before it takes effect (if they decline, Claude Code exits); \`claude -p\` and
Agent SDK runs apply it without asking.

To use it, record the values that correctly set-up machines send and accept only
those. Expect more than one value per policy:

- It can differ from the \`checksum\` you serve: the client changes some values
  as it loads them, a managed settings file or MDM profile on the machine can
  add \`env\` entries, and Claude Desktop can add restrictions and drop model
  settings.
- After you edit your settings, keep accepting the previous value for at least
  an hour, until every session has polled again. A session whose sign-in has
  expired stops polling: once a \`/login\` in another terminal lets it carry on,
  its first requests still send the value from before the expiry.

A session that sends its requests through \`ANTHROPIC_UNIX_SOCKET\`, as
\`claude ssh\` does, sends no checksum. Treat a missing checksum like an unknown
one.

The checksum doesn't prove what a machine runs. The client computes it itself,
and anyone with a bearer token can send any value (with curl or an
\`ANTHROPIC_CUSTOM_HEADERS\` line). Use it to find stale or unmanaged machines,
not as a security control; the model and headers you enforce are on the request
itself. If you serve \`ANTHROPIC_CUSTOM_HEADERS\` in \`env\`, a repository can't
add a line of its own, but your value also replaces the custom headers
developers set in their own settings.

Treat the header as sensitive, for example in access logs. It is a plain SHA-256
with no secret key, and it also covers \`env\` entries added by a managed
settings file or MDM profile on the machine, so anyone who sees it and knows the
rest of the policy can test guesses at a short or human-chosen value there, such
as a password in a proxy URL. A long random secret can't be found that way.

A client that reaches you through \`ANTHROPIC_BASE_URL\` instead of \`/login\`
(other than Claude Desktop in gateway mode) never reads your
\`/managed/settings\`. For those machines, set
\`CLAUDE_CODE_GATEWAY_HINT_HEADERS\` and \`ANTHROPIC_BASE_URL\` together in the
managed settings they do take, such as a managed settings file or MDM profile.
Otherwise the developer's own settings, or those of a repository they have
trusted, decide which host receives the checksum. If those machines take
server-managed settings from Anthropic, a session that starts from its saved
copy leaves out \`managedMcpServers\` and \`env\` entries such as proxy,
certificate, endpoint, credential and custom-header variables until its first
fetch answers, and its checksum covers only what is left: accept that value too.

## Models \u2014 optional

\`GET /v1/models\` (bearer)

Anthropic models-list shape: \`{"data":[{"id","display_name"},...]}\`. Use
Anthropic-style IDs (\`claude-{family}-{major}-{minor}\`) \u2014 the client's
model-family logic keys on that shape. The client only calls this when
\`CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY\` is set on the client, which you
can push via the \`env\` block in \`/managed/settings\`. Return \`404\` to fall
back to the client's built-in list.

## Telemetry \u2014 optional

\`POST /v1/metrics\`, \`/v1/logs\`, \`/v1/traces\` (bearer)

OTLP/HTTP (protobuf or JSON). When connected to a gateway the client sends
telemetry here and ignores \`OTEL_EXPORTER_OTLP_*\` env vars, with one
exception: when your own \`/managed/settings\` document names an OTLP endpoint
on another host (https, or http to loopback, at a collector's
\`\u2026/v1/<signal>\` path) and nothing has overridden it, the
client exports there as an ordinary managed install (set the protocol and
headers in the same document; where it does not, the developer's apply) and
never sends the gateway bearer to it. Return \`200\`
whether you forward or discard \u2014 \`404\` makes the client's exporter log an
error on every flush.

## Errors

OAuth endpoints use \`{"error":"...","error_description":"..."}\`
(RFC 6749/8628). Bearer-authenticated endpoints use the Anthropic envelope so
the SDK surfaces the message to the user:

    {"type":"error","error":{"type":"authentication_error","message":"..."}}

| HTTP | error.type | Use for |
|---|---|---|
| 400 | \`invalid_request_error\` | Denied model, malformed body, policy violation |
| 401 | \`authentication_error\` | Missing/expired/invalid bearer; client prompts re-login. Send \`x-should-retry: false\` with it for a revoked or expired bearer so the prompt is immediate; without the header the client retries with backoff for about three minutes first |
| 403 | \`permission_error\` | Authenticated but not allowed |
| 413 | \`request_too_large\` | Body over your cap |
| 429 | \`rate_limit_error\` | Throttling; include \`Retry-After\` |
| 429 | \`billing_error\` | The user's own cap on your gateway, or a budget their group shares, is reached; see Usage-limit headers below |
| 501 | \`not_supported\` | Endpoint not available on this backend. Send \`x-should-retry: false\` with it; without the header the client asks once more, about half a second later, before it falls back |
| 529 | \`overloaded_error\` | Upstream at capacity; client backs off and retries |
| 5xx | \`api_error\` | Anything else |

## Usage-limit headers \u2014 optional

If you enforce a per-user spend or usage cap, report the caller's standing
against it on each successful \`POST /v1/messages\` response and Claude Code
(2.1.225 and later, when signed in to a gateway) shows its usual "You've used
NN% of your usage credits \xB7 resets \u2026" notice past 75% and again past 95%.
These are the same \`anthropic-ratelimit-unified-*\` headers api.anthropic.com
sends its subscribers, so strip the upstream's own \`anthropic-ratelimit-*\`
response headers first \u2014 otherwise your org-wide quota reaches users as if it
were theirs. Send none of these for a user with no cap.

| Header | Value |
|---|---|
| \`anthropic-ratelimit-unified-status\` | \`allowed\`, or \`allowed_warning\` once past a threshold |
| \`anthropic-ratelimit-unified-representative-claim\` | \`overage\` \u2014 the window-agnostic claim; \`5h\`/\`7d\` mean rolling 5-hour/7-day windows the client does time math on, so don't borrow them for a calendar budget |
| \`anthropic-ratelimit-unified-overage-status\` | Same value as \`-status\` |
| \`anthropic-ratelimit-unified-overage-utilization\` | Fraction of the cap used, two decimals, kept below \`1\` while you're still allowing requests (\`0.82\`) |
| \`anthropic-ratelimit-unified-overage-surpassed-threshold\` | \`0.75\` or \`0.95\` once utilization passes it \u2014 this header is what triggers the client's notice; omit it below 75% |
| \`anthropic-ratelimit-unified-reset\`, \`-overage-reset\` | When the cap resets, Unix seconds |

When the cap is reached, reject \`POST /v1/messages\` before proxying:

    HTTP/1.1 429
    retry-after: 37800
    x-should-retry: false
    anthropic-ratelimit-unified-status: rejected
    anthropic-ratelimit-unified-reset: 1786147200
    anthropic-ratelimit-unified-overage-reset: 1786147200
    anthropic-ratelimit-unified-overage-utilization: 1
    anthropic-ratelimit-unified-overage-surpassed-threshold: 1
    anthropic-ratelimit-unified-overage-period: daily
    anthropic-ratelimit-unified-overage-disabled-reason: org_spend_cap_reached

    {"type":"error","error":{"type":"billing_error","message":"spend limit reached \xB7 resets Aug 8 \xB7 request an increase at https://go.corp.example.com/claude-limits"}}

Leave \`representative-claim\` and \`overage-status\` off the 429. With them the
client composes its own "You've hit your limit" line and drops your message;
without them it prints \`error.message\` as-is (older clients too, behind a
generic "API Error" prefix), so put when the cap resets and what the user
should do next in that one sentence. \`retry-after\` is seconds until the
reset; \`x-should-retry: false\` keeps the SDK from retrying into the block. If
you can't read your counter and choose to fail closed, send the 429 with
\`x-should-retry: false\`,
\`anthropic-ratelimit-unified-overage-disabled-reason: fetch_error\`, and a
message, nothing else. This gateway sends exactly the shapes above for caps
set through its admin API (\`overage-period\` is \`daily\`, \`weekly\`, or
\`monthly\`); when several caps apply it describes the fullest one, or once
blocked the one that resets last. When what ran out is a budget the user's
whole group shares, it sends the \`monthly\` shape plus
\`anthropic-ratelimit-unified-overage-scope: group_pool\`, which tells the
client that the user's own cap is not what blocked them.

To show the user dollars as well ("$271.40 / $500.00 spent"), also answer
\`GET /api/oauth/usage\`, the path claude.ai serves Claude Code's usage data on,
for the bearer's own cap. Newer Claude Code clients call it when signed in to
a gateway and add the amounts to \`/usage\` and the status line; on a 404 or
any other error they show the percent alone, and older clients never call it.
Put the cap the headers describe in \`extra_usage\` and one \`limits\` row per cap
naming its period, with \`is_active\` on the row the dollars belong to.
\`monthly_limit\` and \`used_credits\` are cents and must be numbers (the field
is named \`monthly_limit\` whatever the period); \`utilization\` and \`percent\`
are whole percents from 0 to 100 (above 100 once over), not the fraction the
headers use; \`resets_at\` is an ISO 8601 UTC time, the same instant as that
cap's \`anthropic-ratelimit-unified-overage-reset\` header, since clients pair
the dollars with the percent only when the two agree to the second. A user
with no cap gets \`"limits": []\` and, in \`extra_usage\`, their spend in cents
for the current UTC month (\`used_credits\`), day (\`daily\`) and week from Monday
(\`weekly\`). \`monthly_limit\` and \`utilization\` are null: 0 would be a $0 cap.
\`daily\` is \`{"limit": null, "used_credits": 1240, "utilization": null}\`, and
\`weekly\` the same. Clients show all three amounts, or none if \`daily\` or
\`weekly\` is missing; older clients read this as \`{"limits": []}\`.

    GET /api/oauth/usage
    Authorization: Bearer <access_token>

    HTTP/1.1 200
    cache-control: no-store

    {"extra_usage": {"is_enabled": true, "monthly_limit": 50000, "used_credits": 27140, "utilization": 54, "currency": "USD"},
     "limits": [{"kind": "spend", "group": "monthly", "percent": 54, "resets_at": "2026-10-01T00:00:00.000Z", "severity": "normal", "is_active": true}]}

## Billing group \u2014 optional

A request may say which of the developer's groups it is for, in the Anthropic
API's request tags: \`"tags": {"<name>": "<group>"}\` in the body of
\`POST /v1/messages\`. \`<name>\` is what the gateway's admin set as
\`admin.billing_group_tag\`. With it set, this gateway writes the group in its
audit log if the bearer token lists it, and takes a signed-in developer's tags
and their \`anthropic-beta\` value out before any upstream. The tag changes
nothing else about the request.

If your token is a JWT whose payload has \`"billing_group_tag": "<name>"\`,
Claude Code puts the developer's \`attributionProject\` setting under that key
in \`tags\` on each Messages request. Add the claim only if your gateway
removes \`tags\` before any upstream.

## Bearer token

The client stores your \`access_token\`, sends it, and refreshes it before
\`expires_in\`. If it is a JWT, the client also reads some of its claims without
verifying them, such as \`exp\`, \`sub\` and \`billing_group_tag\`. Encode the
user's identity and groups in the token (or in server-side state keyed by it)
so you can apply per-user RBAC at \`/v1/messages\` and per-group policy at
\`/managed/settings\`. The same token must work across every
bearer-authenticated endpoint.

## TLS

\`https://\` is required; \`http://\` is accepted only for loopback during
development. The client pins the SHA-256 fingerprint of your TLS leaf
certificate per-hostname after the user confirms it on first connect. The
device authorization, token, refresh, revocation, managed-settings and usage
requests then fail when the certificate presented is not the pinned one (not
checked when the request goes through an HTTPS proxy), so serve the same leaf
certificate from every node behind the hostname. After a rotation, running
sessions can no longer refresh and the next launch starts signed out, until
the user runs \`/login\` and accepts the new certificate.

## Client guarantees

- OAuth endpoint paths come from your discovery document; the client uses
  the default paths only when it can't use yours (see Discovery).
- Fixed-path endpoints are resolved against \`{base}\`, never a redirect.
- Every request body carries \`Content-Length\`.
- The OTLP exporter is locked to \`{base}/v1/{signal}\` regardless of the
  user's environment; only your own \`/managed/settings\` document can name a
  different collector, and the gateway bearer is never sent to it.
- \`404\` from \`/v1/models\` or \`/managed/settings\` is a clean "not
  implemented", with no retry storm.

## Proxying to Bedrock, Vertex, or Foundry

Proxying to \`api.anthropic.com\` is pass-through. Proxying to a cloud
provider's Claude endpoint needs translation:

- **Model IDs.** The client sends Anthropic-style IDs like
  \`claude-sonnet-4-5\`; translate to the upstream's form (Bedrock model ID or
  inference-profile ARN; Vertex \`@\`-versioned ID), or advertise
  upstream-native IDs from \`/v1/models\`.
- **\`anthropic-beta\`.** Bedrock rejects some betas in the *header*; move them
  into the request body as \`"anthropic_beta": [...]\`. Vertex and Foundry
  accept the header.
- **Request tags.** Bedrock, Bedrock Mantle and Vertex reject the Anthropic
  API's top-level \`tags\` body field and its beta value,
  \`${os}\`. Leave both out before those upstreams: they label
  usage and do not change the reply.
- **Streaming.** Bedrock's native stream is AWS binary event-stream, not SSE;
  decode and re-emit Anthropic-shaped \`text/event-stream\`. The provider SDKs
  handle this, but their stream iterators drop the upstream's \`ping\` events
  (and Bedrock sends none) \u2014 emit your own \`event: ping\` during silent gaps
  so long thinking pauses don't trip client or proxy idle timeouts.
- **\`count_tokens\`.** Answer it with Bedrock's \`CountTokens\` (an invoke
  body: no \`model\`, a \`max_tokens\` above any thinking budget, no empty
  \`tools\`, and of the betas only those Claude Code sends Bedrock on a count,
  such as \`claude-code-20250219\`) as \`{"input_tokens": N}\`. If that fails,
  or the model is an application inference profile (\`CountTokens\` takes
  foundation-model ids only), return \`501 not_supported\`. A Claude Code session
  that holds a gateway credential (signed in with \`/login\`, or started with
  \`CLAUDE_CODE_USE_GATEWAY\`, as Claude Desktop does under your \`code\` policy)
  then counts by sending the prompt as a normal, billed model request with
  minimal output. That request goes to Haiku, or, in a session that reads your
  \`/managed/settings\`, to the session's model when \`availableModels\` there
  leaves Haiku out. \`ANTHROPIC_SMALL_FAST_MODEL\` or
  \`ANTHROPIC_DEFAULT_HAIKU_MODEL\` on the client picks another model. A client
  that only points \`ANTHROPIC_BASE_URL\` at the gateway estimates locally.
- **Headers.** Forward \`content-type\`, \`accept\`, \`accept-encoding\`,
  \`anthropic-version\`, \`anthropic-beta\`, \`user-agent\`, and \`x-stainless-*\`;
  strip the client's \`Authorization\` and apply the upstream's own
  credentials. On the response, strip hop-by-hop headers
  (\`content-encoding\`, \`content-length\`, \`transfer-encoding\`, \`connection\`).
- **Errors.** Upstream error messages can carry your cloud account
  IDs/ARNs/project IDs \u2014 log them for the operator and return a generic
  message, keeping \`error.type\`. The exception is a 400/413 in Anthropic's
  own error envelope (e.g. \`prompt is too long: \u2026\`): relay that
  \`error.message\`, the client's recovery (auto-compact etc.) keys on it.
  A second exception is Bedrock's 400 whose whole message is
  \`Input is too long.\`: send exactly that as \`error.message\`; the client's
  recovery (drop older images, then compact) matches the whole message.
  Send that same sentence for Vertex's size 400, e.g.
  \`The request size (30037042 bytes) exceeds 30.000MB limit.\` (also worded
  \`The message size \u2026\`).

## References

RFC 6749 (OAuth 2.0), RFC 8414 (AS metadata), RFC 8628 (device grant),
Anthropic Messages API, Claude Code settings reference, OTLP spec.
`, R_ = `
## Customer-routed inference

This deployment accepts customer-routed inference (CRI) callers: Claude
Enterprise clients that authenticate with a short-lived, audience-bound
CRI JWT minted by Anthropic instead of a gateway session token. These
rules are the contract any gateway (this one or third-party software)
must honor to serve such clients.

**Authentication.** The client sends \`Authorization: Bearer <token>\` where
the token is a compact JWS with header \`typ: "cri+jwt"\`, \`alg: ES256\`,
and a \`kid\` naming a key in Anthropic's published CRI JWKS. The issuer
is \`https://api.anthropic.com/api/oauth/cri\`: its OIDC-style discovery
document at \`{issuer}/.well-known/openid-configuration\` names the
\`jwks_uri\` (\`{issuer}/jwks.json\`), so configure your verifier from the
issuer alone or pin that JWKS URL directly. Verify each token
entirely offline \u2014 no per-request call to Anthropic \u2014 and admit the
caller only when ALL of: the ES256 signature verifies against Anthropic's
CRI JWKS (accept no other algorithm, and use no other key set for tokens
of this type); \`iss\` is exactly the issuer above; \`typ\` is
exactly \`cri+jwt\`; \`aud\` matches an audience value registered for YOUR
gateway (reject every other audience \u2014 this is what stops a token minted
for another org's gateway from replaying here); \`exp\`/\`nbf\` hold
(allow ~60s clock skew); \`scope\` is \`"inference"\`; and the token's
\`org\` claim is an organization you have explicitly allowlisted. Tokens
are short-lived (minutes) and carry the caller's identity in \`sub\`
(hosted sessions: \`sub = "ccr:<session>"\` with the acting user in
\`act.sub\`) \u2014 record them in your audit log. Verify at ADMISSION ONLY:
let an in-flight streaming response that crosses \`exp\` complete.
Refresh the JWKS periodically, honoring its cache headers, and refetch
(bounded by a cooldown) on an unknown \`kid\`; when you cannot obtain a
current-enough key set \u2014 never fetched, or stale past a hard ceiling
(hours) \u2014 fail CLOSED with \`503\` on the CRI paths, not \`401\`, so
clients back off instead of discarding tokens that may be fine. CRI
callers may use \`POST /v1/messages\` and
\`POST /v1/messages/count_tokens\` only.

**Forwarding.** Every upstream leg \u2014 Anthropic or cloud \u2014 runs on YOUR
OWN upstream credential. Never forward the caller's \`Authorization\`
header to any upstream: the CRI JWT is a gateway-admission credential
with no meaning beyond your wall, and nothing else the caller sends is a
credential at all. (The earlier revision of this contract had an
Anthropic-side credential-relay mode \u2014 "auth passthrough" \u2014 which is
REMOVED; per-user metering at Anthropic's edge is deferred to a future
token-exchange design.)

**Response hygiene.** On every response, strip the upstream's identity,
quota, and infra headers (\`request-id\`, \`anthropic-organization-id\`,
\`anthropic-ratelimit-*\`, \`cf-ray\`, \`via\`) before the wire: every
upstream answers as YOU, so those headers describe your deployment and
quota, never the caller's.

**Errors.** The HTTP status is always preserved. For CRI callers,
replace the error body with a generic envelope that keeps the status
and an accurate \`error.type\` \u2014 your upstream's raw error pages can
carry internal hostnames and banners, so never relay them. One
obligation comes with that: the client recovers from an upstream
rejecting a capability by matching \`status === 400\` (plus one 413
variant) and the upstream's own error wording, which your replacement
hides. So before replacing a \`400\` or \`413\` body, classify the
upstream's message and, when it matches a class below, make your
envelope's \`error.message\` the stable token
\`capability_rejected: <class>\` \u2014 the client matches the token exactly
as it would the wording, and the session self-heals instead of
stranding. A message matching no class gets your generic copy. (Where
your gateway authors the error body itself \u2014 e.g. a cloud-SDK leg \u2014
classify the SDK error's message the same way.)

| Class (in classification order) | Upstream meaning (what to classify) |
|---|---|
| \`mid_conv_system\` | A mid-conversation \`{role:"system"}\` message was rejected \u2014 the role itself, where the message is placed, or a cache breakpoint on it |
| \`cache_control_field\` | The \`cache_control\` field itself was rejected by schema validation, with no system-message wording |
| \`thinking_signature\` | A thinking block's signature, or a \`redacted_thinking\` block's \`data\`, was rejected ("Invalid signature in thinking block", "Invalid data in redacted_thinking block", "\u2026cannot be modified", a \`\u2026thinking.signature: Field required\` path) \u2014 the client strips thinking blocks and retries |
| \`thinking_type:<enabled\\|adaptive>\` | The \`thinking.type\` value was rejected ("thinking.type: enabled \u2026is not supported", "adaptive thinking is not supported\u2026"); \`<enabled\\|adaptive>\` names the rejected value (lowercased) so the client can swap off it |
| \`structured_outputs_unsupported\` | \`output_config.format\` was rejected as an unknown field ("output_config.format: Extra inputs are not permitted") \u2014 the client stops sending structured outputs to that model |
| \`effort_unsupported\` | The effort parameter / per-turn \`output_config\` was rejected ("This model does not support the effort parameter", \`output_config\u2026\` "Extra inputs are not permitted" / "requires a model that supports\u2026") \u2014 the client drops effort (and, from the next turn, the per-turn statements) |
| \`media_budget\` | The combined media budget was exceeded ("Too much media: N document pages + M images > B") \u2014 the client strips both media kinds |
| \`image_block\` | An image content block was rejected ("Could not process image", size/dimension limits, a \`messages.N.content.M.image\u2026\` path) |
| \`document_block\` | A PDF/document block was rejected ("Could not process PDF", page limits, "\u2026does not support PDF input" / "\u2026does not support PDFs", a \`\u2026document\` path) |
| \`prompt_too_long\` | "Prompt is too long" / "Input is too long for requested model" (either status), or a 413 naming the model context window |
| \`max_tokens_context_overflow\` | "input length and \`max_tokens\` exceed context limit: \u2026" |
| \`beta_header:<value>\` | The upstream rejected an \`anthropic-beta\` value the caller sent; \`<value>\` is that caller-sent value, verbatim |

The token is the whole \`error.message\` \u2014 nothing else in it. The table
is ordered: where a wording matches more than one row, the earlier row
wins \u2014 in particular, a rejection of the mid-conversation-system beta
value classifies as \`mid_conv_system\`, not \`beta_header:\u2026\`. Classes are
append-only contract; classify conservatively (a wording you cannot
confidently classify takes the generic copy \u2014 a wrong token triggers
the wrong client recovery).

**Blocking.** To refuse a request on content policy, respond

    HTTP 400
    x-should-retry: false
    {"type":"error","request_id":"<id>","error":{"type":"policy_blocked","message":"<shown to the user>"}}

and do not forward it. Put the id your audit row is keyed by in
\`request_id\`: the message is rendered to a developer who cannot see your
logs, and the id is what they quote to you to find the block. The client
keys on \`error.type\` (any status, and a
status-less mid-stream \`event: error\` routes the same), renders the
message with no retry and no sign-in prompt, and never substitutes a
fallback model. Never rewrite a request or response body instead \u2014 blocking
substitutes the whole response; modification poisons prompt caching and
diverges the client's view of the conversation.

**Discovery additions.** This deployment's
\`/.well-known/oauth-authorization-server\` carries one extra field:
\`cri_enabled: true\` (CRI callers are accepted). The earlier
\`cri_passthrough\` and \`first_party_compatible\` fields are RETIRED with
the credential-relay mode \u2014 no deployment can truthfully advertise a
verbatim first-party wire surface when every request rides an operator
credential.

**Endpoint shape.** The client is configured with an origin-root base URL
and posts to fixed paths under it, with query strings it controls (e.g.
\`/v1/messages?beta=true\`) \u2014 match on the path, tolerate the query.
Clients also send telemetry to Anthropic directly; it does not traverse
this gateway.
`, x_ = `> **This deployment runs without an identity provider (\`oidc\` is not
> configured):** the device sign-in flow described below is unavailable \u2014
> every IdP-backed sign-in route returns 404 and the well-known document
> advertises no OAuth endpoints. Callers authenticate as customer-routed
> inference principals with a short-lived CRI JWT minted by Anthropic (see
> the customer-routed inference section).

`;
function hp(e) {
  let t = e.oidcConfigured ? fp : fp.replace("## Flow", `${x_}## Flow`);
  return e.criEnabled ? t + R_ : t;
}
var pt = { "Cache-Control": "no-store", Pragma: "no-cache" }, L_ = 500, _p = 5e3;
function ut(e, t = 400, r) {
  return Response.json({ error: e, ...r && { error_description: r } }, { status: t, headers: pt });
}
function sr() {
  return new Response("not found", { status: 404 });
}
function $_(e) {
  let t = /^claude-(?:cli|code)\/\S+ \(([^)]*)\)/.exec(e ?? "")?.[1];
  return t !== void 0 && t.split(",").some((r) => (0, import_chunk_3t7ve0wy.m4t)(r.trim()));
}
function yp(e, t) {
  return e !== null ? { cri: true, org: e.org, act: e.act?.sub ?? null, upstream_kind: t } : {};
}
function D_() {
  if (typeof Bun > "u") throw Error("claude gateway requires the native binary. Install via https://claude.ai/install.sh instead of npm.");
}
var N_ = { "X-Content-Type-Options": "nosniff", "X-Frame-Options": "DENY", "Referrer-Policy": "no-referrer", "Cross-Origin-Opener-Policy": "same-origin" };
function wp(e, t) {
  for (let [r, i] of Object.entries(N_)) if (!e.headers.has(r)) e.headers.set(r, i);
  if (t && !e.headers.has("Strict-Transport-Security")) e.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  return e;
}
var U_ = "x-client-request-id", M_ = "x-request-id", Fi = /^[A-Za-z0-9._-]{1,64}$/, j_ = ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", "127.0.0.0/8", "::1/128", "fc00::/7"], bp = /connect|ECONNREFUSED|ENOTFOUND|ETIMEDOUT/i;
async function B_(e) {
  for (let t = 1; ; t++) try {
    return await e();
  } catch (r) {
    let i = (0, import_chunk_jv7av99m.d)(r);
    if (t === 3 || !bp.test(i)) throw r;
    (0, import_chunk_s95w59kf.xo)("warn", `could not connect to Postgres at boot, attempt ${t} of 3: ${i}. Trying again in 2s`), await (0, import_chunk_5appeerh.K)(2e3);
  }
}
async function r0(e) {
  try {
    return await W_(e);
  } catch (t) {
    (0, import_chunk_s95w59kf.opa)(t instanceof Error ? t.message : String(t)), process.exit(1);
  }
}
async function W_(e) {
  let t = (0, import_chunk_tvttgr51.UIs)();
  if (t !== void 0) throw new import_chunk_tvttgr51.Zct(t);
  D_();
  let r = await ru(e);
  (0, import_chunk_s95w59kf.Tte)("config.load", { path: e, sha256: (0, import_crypto.createHash)("sha256").update(JSON.stringify(r)).digest("hex") }), xd();
  let i = qn(r.listen.trusted_proxies), o = qn(r.access_control.allow_cidrs), a = qn(r.access_control.deny_cidrs), l = qn([...j_, "169.254.0.0/16", "fe80::/10"]), h = false, u = false, f = { device_authorization: 0, device_verify: 0 }, m = 0, b = r.store.readiness_grace_seconds, g = false, k = null, y = null, v = false, E = new Gi(), S = cp((0, import_chunk_5e3gtsn9.n_)().BUN_CONFIG_MAX_HTTP_REQUESTS), O = dp(S), x = await B_(() => fu(r.store.postgres_url, { auditRetentionDays: r.admin?.audit_retention_days, maxConnections: r.store.max_connections, connectTimeoutSeconds: r.store.connect_timeout_seconds, username: r.store.username, password: r.store.password, spendRetentionMonths: r.admin?.spend_retention_months, identityRetentionDays: r.admin?.identity_retention_days })).catch((I) => {
    let W = (0, import_chunk_jv7av99m.d)(I);
    if (bp.test(W)) throw (0, import_chunk_s95w59kf.xo)("error", `could not connect to Postgres at boot: ${W}. Check store.postgres_url. If the database needs longer to become reachable, raise store.connect_timeout_seconds (now ${r.store.connect_timeout_seconds}s)`), Error(`could not connect to Postgres: ${W}. Check store.postgres_url in ${e}`);
    if ((0, import_chunk_jv7av99m.w)(I) === "ERR_INVALID_URL" || I instanceof URIError) throw Error(`store.postgres_url in ${e} is not a URL the gateway can read. It takes one host, as postgres://host:port/database; a comma-separated list of hosts is not supported. A password containing / ? # or % goes in store.password, not in the URL`);
    throw I;
  }), P = { readKeys: r.admin?.read_keys ?? [], writeKeys: r.admin?.write_keys ?? [] }, R = r.load_test_mode?.enabled ? await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s83gtsnh.js")))).startLoadTest(r.load_test_mode, x.sql).catch((I) => {
    throw x.close(), I;
  }) : void 0, D = Ju(x.sql, r, R?.spendFault), U = [...r.oidc ? ["new sign-ins fail"] : [], !D ? "inference is not affected" : r.enforcement.fail_closed_on_error ? "signed-in developers' inference is refused with 429 'spend limit unavailable' (enforcement.fail_closed_on_error is true)" : "spend limits are not enforced, signed-in developers' requests pass unchecked (enforcement.fail_closed_on_error is false)"].join("; "), H = r.cri?.enabled === true, se = H && r.cri ? Ud({ audience: r.cri.audience, orgAllowlist: r.cri.org_allowlist, jwksUrl: r.cri.jwks_url, issuer: r.cri.issuer }) : null;
  if (se !== null) await se.prime();
  let z = pp(r), L = md(r.session.jwt_secret), Q = r.listen.public_url, ye = r.oidc?.groups_claim ?? "groups", ae = r.oidc?.email_claim ?? "email", j = r.oidc?.user_id_claim ?? "sub", be;
  function fe(I) {
    return typeof I === "string" && I.length > 0 ? I : void 0;
  }
  function Oe(I) {
    let W = Gn(I, ye);
    if (typeof W === "string") return W.length > 0 ? [W] : void 0;
    if (!Array.isArray(W)) return;
    let ke = W.filter((Z) => typeof Z === "string" && Z.length > 0);
    return ke.length > 0 ? ke : void 0;
  }
  function at(I) {
    return Gn(I, ye) !== void 0;
  }
  function Lt(I) {
    return ns(I, ae) !== void 0;
  }
  async function vt(I, W, ke, Z, Me, me = false) {
    (0, import_chunk_s95w59kf.xo)("debug", `oidc id_token claim names request_id=${Z}: ${Object.keys(I).sort().join(",")}` + (Me ? `; userinfo claim names: ${Object.keys(Me).sort().join(",")}` : ""));
    let St = Lt(I) ? ns(I, ae) : Me ? ns(Me, ae) : void 0;
    if (Kd({ email: St, email_verified: I.email_verified ?? Me?.email_verified }, r.oidc?.allowed_email_domains), fe(I.sub) === void 0) throw Error("IdP claims missing required `sub`");
    let tt = fe(Gn(I, j));
    if (tt === void 0) throw Object.assign(Error(`oidc.user_id_claim names \`${j}\`, which the IdP did not send as a non-empty string. Check oidc.scopes, and oidc.scope_on_refresh if only refreshes fail`), { code: "USER_ID_CLAIM_MISSING" });
    let Ue = typeof St === "string" ? St : void 0, nt;
    if (be) {
      if (Ue === void 0) throw Object.assign(Error("oidc.google_groups is configured but the id_token has no email \u2014 check oidc.email_claim and that the email scope is requested"), { code: "GOOGLE_GROUPS_UNAVAILABLE" });
      nt = await be(Ue);
    } else if (nt = at(I) ? Oe(I) : Me ? Oe(Me) : void 0, W === "session.refresh" && !at(I) && !Me && r.upstreams.some((ar) => ar.groups)) (0, import_chunk_s95w59kf.xo)("info", `refresh request_id=${Z}: no groups claim for sub=${tt}, so only upstreams without groups serve them. ${me ? "Your IdP sent no id_token on this refresh, and its userinfo response had no groups. If this developer is in a group, set your IdP to add groups to its userinfo response. Some IdPs send an id_token on refresh only when oidc.scope_on_refresh is true" : "If your IdP leaves groups out of the refreshed id_token, set oidc.userinfo_fallback: true"}`);
    zd(nt, r.oidc?.allowed_groups);
    let en = fe(I.name) ?? fe(Me?.name), ir = await bd({ sub: tt, email: Ue, name: en, groups: nt, billing_group_tag: r.admin?.billing_group_tag }, L, r.session.ttl_hours, Q);
    return (0, import_chunk_s95w59kf.Tte)(W, { request_id: Z, result: "success", sub: tt, email: Ue, client_ip: ke, ttl_hours: r.session.ttl_hours }), ir;
  }
  let ct = r.oidc?.google_groups;
  if (ct) be = await Pd(ct);
  let He = r.listen.tls, [ce, Ye, X, Ie] = await Promise.all([r.oidc ? Gd(r.oidc) : Promise.resolve(null), vl(r.upstreams, R?.fetch), su(r), He ? Promise.all([(0, import_promises.readFile)(He.cert, "utf8"), (0, import_promises.readFile)(He.key, "utf8")]).then(([I, W]) => ({ cert: I, key: W })) : Promise.resolve(void 0)]), Et = ce && r.oidc?.token_endpoint_auth_method === "private_key_jwt" && r.oidc.client_assertion ? qd(r.oidc.client_id, r.oidc.client_assertion, ce.issuer.metadata.token_endpoint) : void 0, Ge = X?.some((I) => I.desktop !== void 0) ?? false, bn = (0, import_chunk_4smdap7r.M)(r.oidc?.scopes ?? ["openid", "profile", "email", "offline_access"]).join(" ");
  async function qi(I, W) {
    if (!r.oidc?.userinfo_fallback || !W || !ce) return;
    if (Lt(I) && (be !== void 0 || at(I))) return;
    let ke = await ce.userinfo(W);
    if (typeof ke.sub !== "string" || ke.sub !== I.sub) throw Error("userinfo sub missing or does not match id_token sub");
    return ke;
  }
  if (ce && r.oidc?.scopes && !r.oidc.scopes.includes("offline_access") && Array.isArray(ce.issuer.metadata.scopes_supported) && ce.issuer.metadata.scopes_supported.includes("offline_access")) (0, import_chunk_s95w59kf.xo)("warn", `oidc.scopes omits offline_access but the IdP advertises it \u2014 refresh tokens will not be issued; developers re-run the browser login every ${r.session.ttl_hours}h (session.ttl_hours)`);
  if (ce && r.oidc && (ce.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com") && (r.oidc.extra_auth_params.access_type !== "offline" || !(r.oidc.extra_auth_params.prompt ?? "").split(" ").includes("consent"))) (0, import_chunk_s95w59kf.xo)("warn", `oidc.issuer is accounts.google.com \u2014 Google ignores offline_access and needs extra_auth_params: { access_type: offline, prompt: consent } and scopes: [openid, profile, email] for refresh tokens. Without both params developers re-run the browser login every ${r.session.ttl_hours}h (session.ttl_hours); without prompt: consent specifically, refresh tokens are issued only on each user\u2019s first login.`);
  if (ce && (ce.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com") && (r.oidc?.allowed_groups?.length ?? 0) > 0 && !r.oidc?.google_groups) (0, import_chunk_s95w59kf.xo)("warn", "oidc.allowed_groups is set but Google ID tokens do not carry a groups claim \u2014 every login will be denied. Set oidc.google_groups to fetch Workspace groups via the Admin SDK, or use allowed_email_domains instead.");
  if (ce && r.oidc?.google_groups && !(ce.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com")) (0, import_chunk_s95w59kf.xo)("warn", "oidc.google_groups is set but oidc.issuer is not accounts.google.com \u2014 the Directory API only returns groups for Google Workspace users, so every login will be refused");
  let or = ce && r.oidc ? (0, import_chunk_4smdap7r.M)([new URL(ce.issuer.metadata.authorization_endpoint ?? r.oidc.issuer).origin, ...r.oidc.form_action_origins]).join(" ") : "", Ki = Boolean(Ie) || r.listen.public_url !== void 0 && new URL(r.listen.public_url).protocol === "https:", Ps = Ki ? "__Host-gw_dev" : "gw_dev", zi = `HttpOnly; SameSite=Lax; Path=/${Ki ? "; Secure" : ""}`;
  function kp(I) {
    let W = I.headers.get("cookie") ?? "";
    for (let ke of W.split(";")) {
      let Z = ke.indexOf("=");
      if (Z > 0 && ke.slice(0, Z).trim() === Ps) return ke.slice(Z + 1).trim();
    }
    return null;
  }
  async function vp(I, W, ke, Z, Me) {
    let me = (N, Y) => (0, import_chunk_s95w59kf.Tte)(N, { request_id: Z, ...Y }), St = (N) => x.del(zr(N)).catch((Y) => {
      (0, import_chunk_s95w59kf.xo)("warn", `user_code cleanup failed request_id=${Z}: ${(0, import_chunk_jv7av99m.d)(Y)}`);
    }), tt = (N) => {
      let Y = Date.now();
      if (Y - f[N] < 6e4) return;
      f[N] = Y;
      let { max: q, window_seconds: le } = r.rate_limits[N], ne = Me ? ` This request carried X-Forwarded-For, which the gateway ignored because ${W} is not in listen.trusted_proxies. If ${W} is your load balancer and adds the connecting address to that header itself, list it there first so each developer is counted separately. If it is your load balancer but does not, or many developers still share an address after that` : " If many developers share that address";
      (0, import_chunk_s95w59kf.xo)("warn", `sign-in refused: ${W ?? "unknown address"} went over rate_limits.${N}.max (${q} per ${le}s per client address).${ne}, for example behind a NAT, raise rate_limits.${N}.max.${N === "device_verify" ? " If they do not, someone may be guessing sign-in codes." : ""} Logged at most once a minute; every refusal has an audit event with "result":"rate_limited".`);
    }, { pathname: Ue } = new URL(I.url), nt = I.method === "GET" && (Ue === "/healthz" || Ue === "/readyz");
    if (Ue === "/v1/messages" && I.method === "POST") R?.arrived();
    let en = a.length > 0 || o.length > 0 && !nt;
    if (ke !== void 0) {
      if ((0, import_chunk_szvrpg0x.Wa)().claim("gateway_xff_unparseable")) (0, import_chunk_s95w59kf.xo)("warn", `X-Forwarded-For via trusted proxy ${W} contained '${ke}', which is not an IP address, so the real client is unknown; ` + (a.length > 0 || o.length > 0 ? "access_control is set, so such requests get 403 (audit reason xff_unparseable). " : "per-IP rate limits and audit client_ip use the proxy address instead. ") + "Either a proxy writes something other than 'ip', 'ipv4:port' or '[ipv6]:port' (for example 'unknown', a hostname, or an IPv6 address with a port and no brackets), or listen.trusted_proxies covers hosts that are not your proxies.");
      if (en) return me("access.denied", { reason: "xff_unparseable", client_ip: W, xff_hop: ke }), new Response("forbidden", { status: 403 });
    }
    if (W === void 0 && en) return me("access.denied", { reason: "client_ip_unknown" }), new Response("forbidden", { status: 403 });
    if (Kn(W, a)) return me("access.denied", { reason: "ip_denylist", client_ip: W }), new Response("forbidden", { status: 403 });
    if (I.method === "GET" && Ue === "/healthz") return new Response("ok", { status: 200 });
    if (I.method === "GET" && Ue === "/readyz") {
      if (b === 0) try {
        return await x.get("__readyz_probe__"), g = false, new Response("ready", { status: 200 });
      } catch (N) {
        if (!g) g = true, (0, import_chunk_s95w59kf.xo)("warn", `Postgres is not answering (${(0, import_chunk_jv7av99m.d)(N)}), so /readyz reports not ready and whatever checks /readyz may stop sending this replica traffic or replace it. To keep reporting ready through a short outage such as a database failover, set store.readiness_grace_seconds to more seconds than the outage lasts (at most 3600)`);
        return new Response("store unavailable", { status: 503 });
      }
      if (y ??= (0, import_chunk_5appeerh.qt)(x.get("__readyz_probe__"), _p, `no reply within ${_p / 1e3}s`).then(() => {
        if (k !== null) (0, import_chunk_s95w59kf.xo)("info", `Postgres is answering again after about ${Math.round((performance.now() - k) / 1e3)}s; /readyz reports ready`);
        k = null, v = false;
      }, (N) => {
        if (k === null) k = performance.now(), (0, import_chunk_s95w59kf.xo)("warn", `Postgres is not answering (${(0, import_chunk_jv7av99m.d)(N)}). /readyz keeps reporting ready for up to ${b}s (store.readiness_grace_seconds), then reports not ready. Until Postgres is back: ${U}`);
      }).finally(() => {
        y = null;
      }), await (0, import_chunk_5appeerh.qt)(y, L_, "readyz answer bound").catch(() => {
      }), k === null) return new Response("ready", { status: 200 });
      if (performance.now() - k <= b * 1e3) return new Response("ready", { status: 200 });
      if (!v) v = true, (0, import_chunk_s95w59kf.xo)("warn", `Postgres has not answered for more than ${b}s (store.readiness_grace_seconds), so /readyz now reports not ready and whatever checks /readyz may stop sending this replica traffic or replace it`);
      return new Response("store unavailable", { status: 503 });
    }
    if (o.length > 0 && !Kn(W, o)) return me("access.denied", { reason: "ip_not_allowlisted", client_ip: W }), new Response("forbidden", { status: 403 });
    let ir = Date.now();
    if (ir - m > 6e4) {
      m = ir;
      let N = await (0, import_chunk_2yx6c1y2.Zhe)();
      (0, import_chunk_2yx6c1y2.YPe)(N.mdm, N.hkcu, N.wslInherits, N.whereAsked, N.readOutcomes), (0, import_chunk_r3mm3x33.pr)();
    }
    let ar = (0, import_chunk_tvttgr51.UIs)();
    if (ar !== void 0) {
      if ((0, import_chunk_szvrpg0x.Wa)().claim("gateway_provider_policy_refusal")) (0, import_chunk_s95w59kf.xo)("error", ar);
      return me("access.denied", { reason: "provider_policy", client_ip: W }), new Response("service unavailable", { status: 503 });
    }
    if (o.length === 0 && !h && W !== void 0 && !Kn(W, l)) h = true, me("access.public_client", { client_ip: W }), (0, import_chunk_s95w59kf.xo)("warn", `request from ${W}, which is not a private address: this gateway may be reachable from the public internet. It must not be: it can push settings that run commands on developer machines. Check the network in front of it, then set access_control.allow_cidrs (behind a proxy that adds X-Forwarded-For itself, set listen.trusted_proxies first so the gateway sees real client addresses)`);
    if (Me && !u) u = true, (0, import_chunk_s95w59kf.xo)("warn", `request from ${W} carried an X-Forwarded-For header, but ${i.length === 0 ? "listen.trusted_proxies is not set" : `${W} is not in listen.trusted_proxies`}, so the gateway ignored the header and used ${W} as the client address. If ${W} is your load balancer or ingress, every developer behind it shares one sign-in rate limit (rate_limits), and access_control and audit events see only that address. List its source range, and nothing wider, in listen.trusted_proxies only if it adds the connecting address to the header itself, or if clients can reach it only through another proxy that does. If it only passes on what clients send, listing it lets them fake their address and get past access_control and rate_limits. Have it add the address before you list it, or raise rate_limits instead. If developers connect to the gateway directly and something on their side adds the header, nothing needs to change. Logged once per start, however many requests are affected.`);
    let cr = r.limits;
    if (cr.max_url_length !== void 0 && I.url.length > cr.max_url_length) return new Response("uri too long", { status: 414 });
    if (cr.max_request_header_bytes !== void 0) {
      let N = 0;
      for (let [Y, q] of I.headers) N += Y.length + q.length + 4;
      if (N > cr.max_request_header_bytes) return new Response("request header fields too large", { status: 431 });
    }
    let ht = new URL(I.url), oe = ht.pathname, st = r.listen.public_url ?? ht.origin;
    if (oe === "/" && I.method === "GET") return Jd(st, r.oidc?.issuer ?? null, typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" } < "u" ? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION : "unknown");
    if (oe === "/.well-known/oauth-authorization-server") return Response.json({ issuer: st, ...r.oidc !== void 0 ? { device_authorization_endpoint: `${st}/oauth/device_authorization`, token_endpoint: `${st}/oauth/token`, grant_types_supported: [Ko, "refresh_token"] } : { grant_types_supported: [] }, response_types_supported: [], token_endpoint_auth_methods_supported: ["none"], scopes_supported: ["openid", "profile", "email"], gateway_protocol_version: import_chunk_q3zwm6gk.kga, ...H && { cri_enabled: true } });
    if (oe === "/protocol" && I.method === "GET") return new Response(hp({ oidcConfigured: r.oidc !== void 0, criEnabled: H }), { headers: { "content-type": "text/markdown; charset=utf-8" } });
    let Os = I.headers.get("content-length");
    if (Os === null && I.headers.get("transfer-encoding")) return new Response("length required", { status: 411 });
    if (Os !== null) {
      let N = Number(Os);
      if (!Number.isFinite(N) || N < 0 || N > r.limits.max_request_bytes) return new Response("payload too large", { status: 413 });
    }
    if (r.admin && $i(oe)) {
      let N = r.admin, Y = I.headers.get("authorization"), q = null;
      if (N.admin_groups.length > 0 && !I.headers.get("x-api-key") && Y?.startsWith("Bearer ")) {
        let ne = await Fo(Y.slice(7), L, Q);
        if (ne && Bi(ne.groups, N)) q = { sub: ne.sub };
      }
      let le = await Iu(I, ht, x.sql, P, q, W, N.group_limit_mode);
      if (le) return le;
    }
    if (oe === "/oauth/device_authorization" && I.method === "POST") {
      if (!ce) return sr();
      if (await x.incr(Jr("devauth", W ?? "unknown"), r.rate_limits.device_authorization.window_seconds) > r.rate_limits.device_authorization.max) return me("device.authorize", { result: "rate_limited", client_ip: W }), tt("device_authorization"), ut("slow_down", 429, "Too many sign-in attempts came from your network, which other people may share.");
      let Y = Sd(), q = Ed(), le = { status: "pending", user_code: q, created_at: Date.now(), client_ip: W }, ne = Jo(Y);
      return await Promise.all([x.set(ne, await qr(le, L), Ft), x.set(zr(q), ne, Ft)]), me("device.authorize", { result: "success", client_ip: W }), Response.json({ device_code: Y, user_code: q, verification_uri: `${st}/device`, verification_uri_complete: `${st}/device?user_code=${encodeURIComponent(q)}`, expires_in: Ft, interval: zo, login_notice: r.login_notice }, { headers: pt });
    }
    let dr = r.login_notice ? { text: r.login_notice, host: new URL(st).hostname } : void 0;
    if (oe === "/device" && I.method === "GET") {
      if (!ce) return sr();
      let N = ht.searchParams.get("user_code") ?? void 0;
      return Fn({ prefill: N, loginNotice: dr, idpOrigin: or });
    }
    let lr = oe === "/device/deny";
    if ((oe === "/device" || lr) && I.method === "POST") {
      let N = r.oidc;
      if (!ce || !N) return sr();
      let Y = I.headers.get("origin"), q = I.headers.get("sec-fetch-site");
      if (!(q !== null ? q === "same-origin" || q === "none" : Y !== null && Y === st)) return me("device.verify", { result: "csrf_rejected", client_ip: W }), Fn({ loginNotice: dr, idpOrigin: or, error: "This request came from another site and was blocked. Open the verification link directly." });
      if (await x.incr(Jr("device", W ?? "unknown"), r.rate_limits.device_verify.window_seconds) > r.rate_limits.device_verify.max) return me("device.verify", { result: "rate_limited", client_ip: W }), tt("device_verify"), Fn({ loginNotice: dr, idpOrigin: or, error: "Too many attempts came from your network, which other people may share. Wait a few minutes and try again." });
      let ue;
      try {
        ue = (await I.formData()).get("user_code")?.toString() ?? null;
      } catch {
        ue = null;
      }
      let Ae = ue ? await x.get(zr(ue)) : null;
      if (lr && Ae) {
        let mt = await x.get(Ae), Xe = mt ? await Kr(mt, L) : null;
        if (mt && Xe?.status === "pending" && await x.setIfUnchanged(Ae, mt, await qr({ status: "denied", user_code: Xe.user_code, created_at: Xe.created_at }, L), Ft)) return me("device.deny", { result: "denied", client_ip: W, requested_from: Xe.client_ip, requested_at: Xe.created_at && new Date(Xe.created_at).toISOString() }), await St(Xe.user_code), ei(true);
      }
      if (lr || !Ae) {
        if (me("device.verify", { result: "unknown_code", client_ip: W }), lr) return ei(false);
        return Fn({ loginNotice: dr, idpOrigin: or, error: "That code was not recognized \u2014 it may have expired. Check your device and try again." });
      }
      let Re = mn.codeVerifier(), $e = mn.nonce(), Pe = (0, import_crypto.randomBytes)(32).toString("base64url"), dt = (0, import_chunk_ccm69jjy.Je)(Pe), Ve = await _d({ deviceCodeKey: Ae, idpCodeVerifier: Re, nonce: $e, browserHash: dt }, L);
      return me("device.verify", { result: "redirect", client_ip: W }), new Response(null, { status: 302, headers: { "Set-Cookie": `${Ps}=${Pe}; Max-Age=600; ${zi}`, Location: ce.authorizationUrl({ ...N.extra_auth_params, redirect_uri: `${st}/oauth/callback`, state: Ve, nonce: $e, ...N.use_pkce && { code_challenge: mn.codeChallenge(Re), code_challenge_method: "S256" }, scope: bn, response_mode: "query" }) } });
    }
    if (oe === "/oauth/callback") {
      let N = r.oidc;
      if (!ce || !N) return sr();
      let Y = ht.searchParams.get("error");
      if (Y) {
        let De = ht.searchParams.get("error_description");
        return Jt(De ? `${Y}: ${De}` : `Identity provider returned: ${Y}`);
      }
      let q = ht.searchParams.get("code"), le = ht.searchParams.get("state"), ne = le ? await yd(le, L) : null;
      if (!q || !ne) return Jt("This sign-in link has expired. Try again from your device.");
      let ue = `${Ps}=; Max-Age=0; ${zi}`, Ae = kp(I), Re = Buffer.from(ne.browserHash ?? "", "hex"), $e = Ae ? (0, import_crypto.createHash)("sha256").update(Ae).digest() : Buffer.alloc(0);
      if (Re.length !== 32 || $e.length !== Re.length || !(0, import_crypto.timingSafeEqual)($e, Re)) {
        me("device.callback", { result: "browser_mismatch", client_ip: W });
        let De = Jt("This sign-in link was started in a different browser. Open the verification link on the same device that showed the code.");
        return De.headers.set("Set-Cookie", ue), De;
      }
      let Pe = ne.deviceCodeKey, dt = await x.get(Pe), Ve = dt ? await Kr(dt, L) : null;
      if (!dt || !Ve || Ve.status !== "pending") return Jt("This device code has already been used or has expired.");
      let mt = dt;
      async function Xe(De) {
        let Fe = await x.setIfUnchanged(Pe, mt, await qr(De, L), Ft);
        if (Fe) await St(De.user_code);
        return Fe;
      }
      try {
        let De = ht.searchParams.get("iss"), Fe = await ce.callback(`${st}/oauth/callback`, { code: q, ...De && { iss: De } }, { ...N.use_pkce && { code_verifier: ne.idpCodeVerifier }, nonce: ne.nonce }, Et && { exchangeBody: await Et() }), ve = Fe.claims(), mr = await vt(ve, "session.mint", W, Z, await qi(ve, Fe.access_token)), kn = await Xe({ status: "complete", user_code: Ve.user_code, created_at: Ve.created_at, access_token: mr, ...Fe.refresh_token && { refresh_token: Fe.refresh_token }, expires_in: r.session.ttl_hours * 3600 });
        if (!kn) me("device.callback", { result: "not_pending", client_ip: W });
        let gr = Jt(kn ? null : "This device code has already been used or has expired.");
        return gr.headers.set("Set-Cookie", ue), gr;
      } catch (De) {
        let Fe = (0, import_chunk_jv7av99m.d)(De);
        return (0, import_chunk_s95w59kf.xo)("warn", `token exchange failed request_id=${Z}: ${Fe}`), me("session.mint", { result: "fail", client_ip: W, err: Fe }), await Xe({ status: "denied", user_code: Ve.user_code, created_at: Ve.created_at }), Jt("Sign-in could not be completed.");
      }
    }
    if (oe === "/oauth/token" && I.method === "POST") {
      if (!ce) return sr();
      let N;
      try {
        N = await I.formData();
      } catch {
        return ut("invalid_request");
      }
      let Y = N.get("grant_type")?.toString();
      if (Y === Ko) {
        let q = N.get("device_code")?.toString();
        if (!q) return ut("invalid_request");
        let le = Jo(q), ne = await x.get(le), ue = ne ? await Kr(ne, L) : null;
        if (!ue) return ut("expired_token");
        if (ue.status === "pending") {
          if (await x.incr(Jr("poll", le), zo - 1) > 1) return ut("slow_down", 429);
          return ut("authorization_pending");
        }
        if (ue.status === "denied") return await x.del(le), ut("access_denied");
        return await x.del(le), Response.json({ access_token: ue.access_token, refresh_token: ue.refresh_token, token_type: "Bearer", expires_in: ue.expires_in }, { headers: pt });
      }
      if (Y === "refresh_token") {
        let q = N.get("refresh_token")?.toString();
        if (!q) return ut("invalid_request");
        let le = "token_endpoint";
        try {
          let ne = await ce.refresh(q, { exchangeBody: { ...r.oidc?.scope_on_refresh && { scope: bn }, ...Et && await Et() } }), ue;
          try {
            ue = ne.claims();
          } catch {
            ue = void 0;
          }
          let Ae, Re;
          if (ue === void 0) {
            if (!ne.access_token) throw Error("IdP refresh response had neither id_token nor access_token");
            le = "userinfo_no_id_token", Ae = await ce.userinfo(ne.access_token);
          } else Ae = ue, le = "userinfo_fallback", Re = await qi(ue, ne.access_token);
          le = "claims";
          let $e = await vt(Ae, "session.refresh", W, Z, Re, ue === void 0);
          return Response.json({ access_token: $e, refresh_token: ne.refresh_token ?? q, token_type: "Bearer", expires_in: r.session.ttl_hours * 3600 }, { headers: pt });
        } catch (ne) {
          let ue = ne.response !== void 0 || typeof ne.code === "string" || ne.name === "RPError", Ae = ne.error === "invalid_grant", Re = ue && !Ae ? "temporarily_unavailable" : "invalid_grant", $e = (0, import_chunk_jv7av99m.d)(ne);
          return (0, import_chunk_s95w59kf.xo)("warn", `refresh failed request_id=${Z}: ${$e} (at ${le}, answered ${Re})`), me("session.refresh", { result: "fail", client_ip: W, err: $e, step: le, answer: Re }), ut(Re, Re === "temporarily_unavailable" ? 503 : 401);
        }
      }
      return ut("unsupported_grant_type");
    }
    let Is = I.headers.get("authorization"), ur = Is?.startsWith("Bearer ") ? Is.slice(7) : null, re = null, Te = null, Ji = false;
    if (ur !== null) if (se !== null && ui(oe) && I.method === "POST" && Nd(ur)) {
      Ji = true;
      let N = await se.authenticate(ur, Z, W, oe);
      if (!N.ok && N.status === 503) return pe(503, "api_error", "customer-routed inference is temporarily unavailable: the gateway cannot obtain current verification keys", Z, { "retry-after": "30" });
      Te = N.ok ? N.claims : null, re = Te;
    } else re = await Fo(ur, L, Q);
    if (!re) {
      if (!Ji) me("auth.denied", { reason: Is ? "invalid_token" : "missing_token", path: oe, client_ip: W });
      return pe(401, "authentication_error", "invalid token", Z);
    }
    let fr = r.upstreams.filter((N) => !N.groups || N.groups.some((Y) => re.groups?.includes(Y))), $s = Ye.filter((N) => fr.some((Y) => Y.name === N.name)), hr = r.models.filter((N) => fr.some((Y) => Object.hasOwn(N.upstream_model, Y.name)) || fr.length > 0 && (0, import_chunk_zhr7rpv7.PB)(N.id) !== null);
    if (oe === "/managed/settings") {
      let N = { "x-cc-gateway-version": typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" } < "u" ? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION : "unknown", Vary: "User-Agent" }, Y = { status: 404, headers: { ...N, ...pt } };
      if (!X) return new Response("not configured", Y);
      let q = Ss(X, re);
      if (!q) return (0, import_chunk_s95w59kf.xo)("warn", `no managed policy matched for sub=${re.sub} (groups: ${(re.groups ?? []).join(",") || "none"}) request_id=${Z}`), new Response("no policy matched", Y);
      let { payload: le } = q.policy;
      if ($_(I.headers.get("user-agent"))) {
        if (q.policy.desktopSessionPayload === void 0) {
          if (q.policy.serveToDesktop !== false) (0, import_chunk_s95w59kf.xo)("info", `managed policy ${q.index} withheld from a Claude Desktop session for sub=${re.sub}: it has no \`code\` settings request_id=${Z}`);
          return new Response("not served to Claude Desktop sessions", Y);
        }
        le = q.policy.desktopSessionPayload;
      }
      let ne = `"${le.checksum}"`, ue = I.headers.get("if-none-match");
      if (ue === "*" && tr(q.policy)) return (0, import_chunk_s95w59kf.xo)("info", `Claude Desktop's Code tab doesn't start for sub=${re.sub}: managed policy ${q.index} has \`code\` settings, and Claude Code on that machine doesn't take this gateway's settings. To let the Code tab start, name this gateway in forceLoginGatewayUrl in that machine's Claude Code managed settings, and make sure the machine resolves the gateway's hostname itself and reaches it over HTTPS on a private network. request_id=${Z}`), new Response(null, { status: 304, headers: { ...N, ...pt } });
      if (ue === ne) return new Response(null, { status: 304, headers: N });
      return me("managed.serve", { sub: re.sub, email: re.email, policy_index: q.index, ...q.indexes && { policy_indexes: q.indexes }, checksum: le.checksum }), Response.json(le, { headers: { ETag: ne, ...N } });
    }
    if (oe === "/api/oauth/usage" && I.method === "GET") {
      if (!D) return new Response("not configured", { status: 404, headers: pt });
      return D.usage(re, Z);
    }
    if (oe === "/user/bootstrap" && I.method === "GET") {
      if (!X || !Ge) return me("desktop_bootstrap.denied", { reason: "not_configured", sub: re.sub, email: re.email }), pe(404, "not_found_error", 'Claude Desktop is not configured on this gateway \u2014 add a "desktop:" block to a managed policy', Z, pt);
      let N = Ss(X, re);
      if (!N || N.policy.desktop === void 0) return (0, import_chunk_s95w59kf.xo)("warn", `no desktop-enabled managed policy matched for sub=${re.sub} (groups: ${(re.groups ?? []).join(",") || "none"}) request_id=${Z}`), me("desktop_bootstrap.denied", { reason: N ? "policy_not_opted_in" : "no_policy_matched", sub: re.sub, email: re.email }), pe(404, "not_found_error", N ? 'the policy matching this user does not opt into desktop \u2014 add a "desktop:" block to it' : "no policy matched", Z, pt);
      let Y = tp({ ...r, upstreams: fr, models: hr }, N.policy, re, st), q = Bi(re.groups, r.admin);
      return me("desktop_bootstrap.serve", { sub: re.sub, email: re.email, policy_index: N.index, ...N.indexes && { policy_indexes: N.indexes } }), Response.json(Y, { headers: { ...pt, "x-gateway-spend-admin": String(q) } });
    }
    if (oe in Hi && I.method === "POST") {
      let N = Hi[oe], Y = r.telemetry.forward_to.filter((ue) => ue[N]);
      if (Y.length === 0) return new Response(null, { status: 200 });
      let q = await I.arrayBuffer(), le = I.headers.get("content-type") ?? "application/x-protobuf", ne = I.headers.get("content-encoding");
      return E.fanout(oe, q, le, ne, Y), new Response(null, { status: 200 });
    }
    let Ds = Te !== null ? void 0 : X ? Ss(X, re)?.policy : void 0;
    if (oe === "/v1/models" && I.method === "GET") return Tl(hr, $s, r.auto_include_builtin_models, Ds, !Wi(Ds?.payload.settings ?? {}));
    if (ui(oe) && I.method === "POST") {
      let N = { sub: re.sub, email: re.email }, Y = r.load_test_mode?.enabled && Te === null ? I.headers.get("x-load-test-user") : null;
      if (Y !== null) {
        if (!/^\d{1,7}$/.test(Y)) return me("inference", { sub: re.sub, email: re.email, path: oe, model: null, upstream: null, upstream_request_id: null, upstream_cloud_request_id: null, load_test: true, status: 400, ms: 0 }), pe(400, "invalid_request_error", "x-load-test-user must be a whole number of at most 7 digits", Z);
      }
      let q = Y === null ? re : { ...re, sub: `${re.sub}+loadtest-${Number(Y)}` }, le = {}, ne = null;
      if (D && oe === "/v1/messages" && Te === null) {
        let Se = await D.precheck(q, Z);
        if (Se.blocked) return Se.blocked;
        le = Se.headers, ne = Se.payingGroup;
      }
      let ue = performance.now(), Ae = () => {
        me("inference", { sub: q.sub, email: q.email, path: oe, model: null, upstream: null, upstream_request_id: null, upstream_cloud_request_id: null, ...yp(Te, null), ...r.load_test_mode?.enabled && { load_test: true }, status: 400, ms: Math.round(performance.now() - ue) });
      }, Re = await I.arrayBuffer();
      if (oe === "/v1/messages") R?.bodyRead(Re.byteLength, q.sub);
      let $e;
      try {
        $e = (0, import_chunk_w578pjby.te)(Buffer.from(Re).toString("utf8"));
      } catch {
        return Ae(), pe(400, "invalid_request_error", "invalid JSON", Z);
      }
      if (typeof $e !== "object" || $e === null || Array.isArray($e)) return Ae(), pe(400, "invalid_request_error", "request body must be a JSON object", Z);
      let Pe = { buf: Re, parsed: $e }, dt = Te === null ? re.billing_group_tag ?? r.admin?.billing_group_tag : void 0;
      if (dt !== void 0) {
        let Se = as(I.headers.get("anthropic-beta") ?? void 0);
        if (Se === void 0) I.headers.delete("anthropic-beta");
        else I.headers.set("anthropic-beta", Se);
      }
      let Ve = dt !== void 0 && "tags" in Pe.parsed, mt = Ve && oe === "/v1/messages" ? nl(Pe.parsed.tags, dt, re.groups) : void 0;
      if (Ve) Pe.parsed = is(Pe.parsed);
      if (z || Te !== null || Ve) {
        let Se;
        try {
          Se = new TextEncoder().encode((0, import_chunk_w578pjby._)(Pe.parsed));
        } catch {
          return Ae(), pe(400, "invalid_request_error", "request body cannot be re-serialized", Z);
        }
        Pe.buf = Se.slice().buffer;
      }
      if (z) {
        let Se = li(I), _r = await z.precheck(re, Pe.parsed, Z, { path: oe, query: Se.search, headers: Object.fromEntries(Se.headers.entries()) }, Te?.org, Te !== null ? Te.act?.sub ?? null : void 0);
        if (_r) return _r;
      }
      let Xe = performance.now(), De = null, Fe;
      if (D && oe === "/v1/messages" && Pe.parsed.stream !== true && Te === null) De = Pe.parsed, Fe = Pe.parsed.speed === "fast" ? "fast" : void 0;
      let ve = await El(I, oe, $s, hr, r.auto_include_builtin_models, Ds, r.timeouts.upstream_ttfb_ms, Z, { body: Pe, ...Te !== null && { criPrincipal: true }, ...Te === null && { user: N }, ttfbOnSdkUpstreams: r.timeouts.operator_set });
      if (Te !== null) ve = await kl(ve, I, Z);
      let mr = ve.headers.get("x-gateway-model"), kn = ve.headers.get("x-gateway-upstream"), gr = ve.headers.get("x-gateway-upstream-model"), Yi = ve.headers.get("x-gateway-upstream-kind"), Ep = ve.headers.get("x-gateway-upstream-request-id")?.match(Fi)?.[0] ?? null, Sp = ve.headers.get("x-gateway-upstream-cloud-request-id")?.match(Fi)?.[0] ?? null;
      me("inference", { sub: q.sub, email: q.email, path: oe, model: mr, upstream: kn, upstream_request_id: Ep, upstream_cloud_request_id: Sp, ...mt, ...yp(Te, Yi), ...r.load_test_mode?.enabled && { load_test: true }, status: ve.status, ms: Math.round(performance.now() - Xe) });
      for (let Se of fi) ve.headers.delete(Se);
      if (ve.headers.delete("x-cri-upstream-kind"), Te !== null) {
        if (Yi !== null) ve.headers.set("x-cri-upstream-kind", "cloud");
      }
      if (ve.ok) {
        for (let [Se, _r] of Object.entries(le)) ve.headers.set(Se, _r);
        ve.headers.set("request-id", Z);
      }
      if (ve.status >= 500) (0, import_chunk_s95w59kf.xo)("warn", `upstream ${ve.status} on ${oe} request_id=${Z}`);
      if (D && oe === "/v1/messages" && Te === null) {
        let Se = De;
        return D.meter(ve, q, ne, Z, mt, kn, gr, mr, Se ? () => ml(Se, $s, hr, r.auto_include_builtin_models, N) : null, Fe);
      }
      return ve;
    }
    return new Response("not found", { status: 404 });
  }
  import_http.default.maxHeaderSize = 262144;
  let $t = Bun.serve({ hostname: r.listen.host, port: r.listen.port, idleTimeout: 0, development: false, ...Ie && { tls: Ie }, fetch: async (I, W) => {
    O(W.pendingRequests);
    let ke = W.requestIP(I)?.address, Z = I.headers.get("x-forwarded-for"), { clientIp: Me, badHop: me } = Yd(ke, Z, i), St = !!Z && ke !== void 0 && !Kn(ke, i), tt = I.headers.get(U_), Ue = tt && Fi.test(tt) ? tt : (0, import_crypto.randomUUID)(), nt;
    try {
      nt = await vp(I, Me, me, Ue, St);
    } catch (en) {
      (0, import_chunk_s95w59kf.xo)("error", `unhandled request_id=${Ue}: ${(0, import_chunk_jv7av99m.d)(en)}`), nt = pe(500, "api_error", "internal server error", Ue);
    }
    return nt.headers.set(M_, Ue), wp(nt, !!Ie);
  }, error: (I) => ((0, import_chunk_s95w59kf.xo)("error", `unhandled: ${(0, import_chunk_jv7av99m.d)(I)}`), wp(pe(500, "api_error", "internal server error"), !!Ie)) });
  (0, import_chunk_s95w59kf.spa)(r, { tls: !!Ie, hostname: $t.hostname ?? r.listen.host, port: $t.port ?? r.listen.port, managed: !!X, outboundLimit: S });
  for (let I of H_(r, X)) (0, import_chunk_s95w59kf.xo)("warn", I);
  return Dd(), { port: $t.port ?? r.listen.port, stop: () => {
    $t.stop(true), x.close(), R?.close();
  }, drain: async (I) => {
    let W = $t.stop(false);
    await Promise.race([W, (0, import_chunk_5appeerh.K)(I)]);
    let ke = $t.pendingRequests;
    return await $t.stop(true), await D?.flush(), x.close(), R?.close(), ke;
  } };
}
function H_(e, t = null) {
  let r = [];
  if (e.load_test_mode?.enabled) r.push("load_test_mode is on: no model request is sent upstream and every reply is canned. Credential calls, such as AWS STS, still go out. Set load_test_mode.enabled: false (or remove the block) and restart before developers use this gateway");
  if (t?.some(tr)) r.push(`settings in a code: block reach Claude Desktop's Code tab only on machines whose own Claude Code managed settings name this gateway and that reach it over HTTPS on a private network. On any other machine the Code tab doesn't start, where Claude Desktop bundles Claude Code v2.1.296 or later. An earlier one starts without them, and the docs list a few more such cases. Each machine's Claude Code managed settings need: ${JSON.stringify({ forceLoginGatewayUrl: e.listen.public_url ?? "<listen.public_url>", parentSettingsBehavior: "merge" })}. See "Choose cli or code" in the gateway configuration docs`);
  if (t?.some((y) => tr(y) && y.serveToDesktop === false)) r.push("serve_to_desktop: false is ignored in a file that has a code: block, so that policy's settings are served to Claude Desktop's Code tab too. Remove it, or write every block under cli: (terminal Claude Code only)");
  if (e.upstreams.some((y) => y.provider === "bedrock" && !y.guardrail) && /X-Amzn-Bedrock-GuardrailIdentifier/i.test((0, import_chunk_w578pjby._)(t))) r.push("managed settings contain an X-Amzn-Bedrock-GuardrailIdentifier header. The gateway does not forward it to Bedrock and no bedrock upstream sets guardrail:, so the header has no effect. To apply a guardrail, set guardrail: on every bedrock upstream");
  if (e.admin?.pooled_priority_order?.length && e.admin.pooled_conflict_rule !== "priority_list") r.push("admin.pooled_priority_order is ignored unless admin.pooled_conflict_rule is priority_list");
  let i = new Set(e.upstreams.filter((y) => y.provider === "vertex").map((y) => y.name));
  if (i.size > 0) {
    let y = [import_chunk_zhr7rpv7.Xs.sonnet45, import_chunk_zhr7rpv7.Xs.sonnet40], v = [];
    for (let E of e.models) for (let [S, O] of Object.entries(E.upstream_model)) {
      let x = (0, import_chunk_zhr7rpv7.PB)(O);
      if (i.has(S) && x && y.includes(x)) v.push(E.id);
    }
    if (e.auto_include_builtin_models && e.upstreams.some((E) => E.provider === "vertex" && y.some((S) => We(S.firstParty, E, e.models, true).ok))) v.push("claude-sonnet-4-5 (via auto_include_builtin_models)");
    if (v.length > 0) r.push(`vertex upstream serves ${(0, import_chunk_4smdap7r.M)(v).join(", ")}: Sonnet 4.5/Sonnet 4 do not support 1M context on Vertex \u2014 requests with the context-1m beta (the [1m] model suffix) for these models will be rejected with a 400. Vertex 1M lineup: Opus 4.6+/Sonnet 4.6.`);
  }
  let o = sp(e.models, t);
  if (o.length > 0 && e.oidc !== void 0) {
    let y = o.find((E) => E.model !== void 0), v = t?.some((E) => (0, import_chunk_6mfepmbb.Tut)(E.payload.settings));
    r.push(`Claude Code does not recognize these model IDs: ${o.map((E) => `'${E.id}'`).join(", ")}. It runs them with the output limit and context window that its version assumes for an unknown model, which may not be the model's. ` + (y ? `To have Claude Code v2.1.287 or later give one that routes to a single model that model's window, output limit and effort levels, list it in modelPicker.options, for example ${(0, import_chunk_w578pjby._)({ model: y.id, behavesAs: y.model })}. ` + (v ? "Do so in the settings that this gateway already serves, in the block each policy already uses, with every such ID that its developers can use, since that list replaces a developer's own modelPicker. " : "Do so in the managed settings on your developers' machines, which this gateway cannot see: it serves Claude Code no settings, and by default the first that it serves would replace those. ") : "") + 'See "Correct the window for a gateway or custom model ID" in the Claude Code model configuration docs');
  }
  for (let y of e.upstreams) {
    if (!y.models) continue;
    for (let v of y.models) {
      if (v.includes("*")) {
        if (![...e.models.map((O) => O.id), ...Object.values(import_chunk_zhr7rpv7.Xs).map((O) => O.firstParty)].some((O) => We(O, { ...y, models: [v] }, e.models, e.auto_include_builtin_models).ok)) r.push(`upstream '${y.name}' lists '${v}' in models, but no model it matches can be sent there. Check the spelling.`);
        continue;
      }
      let E = We(v, y, e.models, e.auto_include_builtin_models);
      if (!E.ok) r.push(`upstream '${y.name}' lists '${v}' in models, but that entry routes no model there (${E.error.replace("the operator's", "your")}). Check the spelling, list the model as clients name it, or map it with a top-level models[] entry whose upstream_model.${y.name} is ${y.provider === "mantle" ? "its Mantle id" : "the id that upstream takes"}.`);
    }
    for (let v of e.models) {
      if (v.upstream_model[y.name] === void 0) continue;
      let E = We(v.id, y, e.models, e.auto_include_builtin_models);
      if (!E.ok && E.listSkip) r.push(`models[] entry '${v.id}' sets upstream_model.${y.name}, but '${v.id}' is not in upstream '${y.name}' models, so that mapping never applies. Add '${v.id}' to the upstream's models list, or remove that mapping.`);
    }
    for (let v of e.upstreams) {
      if (y.provider !== "mantle" || v.provider !== "bedrock") continue;
      let [E, S] = y.assume_role?.session_name ? [y, v] : [v, y];
      if (E.assume_role?.session_name && !S.assume_role?.session_name) r.push(`upstream '${E.name}' sets assume_role.session_name for per-developer AWS attribution, but upstream '${S.name}' sets none, so the requests '${S.name}' serves are not attributed per developer. Set assume_role (role_arn and session_name) on '${S.name}' too, with a role that allows the ${S.provider === "mantle" ? "bedrock-mantle" : "bedrock"} actions.`);
    }
  }
  let a = (0, import_chunk_zhr7rpv7.kd)((0, import_chunk_zhr7rpv7.d1e)("opus", "gateway") ?? "")?.provider_ids, l = a && (a.gateway ?? a.first_party), h = [];
  for (let [y, v] of (t ?? []).entries()) {
    let E = v.payload.settings, S = { maxEffortLevel: E.maxEffortLevel };
    for (let [D, U] of Object.entries((0, import_chunk_ma3kja9f.T)(E.modelSettings) ? E.modelSettings : {})) if ((0, import_chunk_ma3kja9f.T)(U)) S[`modelSettings.${D}.maxEffortLevel`] = U.maxEffortLevel;
    for (let [D, U] of Object.entries(S)) if (U !== void 0 && !import_chunk_8hfdvrr1.ea.some((H) => H === U)) r.push(`managed policy ${y} ${D} is not one of ${import_chunk_8hfdvrr1.ea.join(", ")}, so Claude Code ignores it. Fix the value, or upgrade the gateway if the level was added in a newer Claude Code.`);
    let O = v.availableModels;
    if (!O) continue;
    if (O.length === 0) {
      r.push(`managed policy ${y} availableModels is an empty list. Claude Code reads that as "Default model only", but the gateway checks requests against the list itself, so every inference request for this role will be rejected, Default included. List the models this role may use.`);
      continue;
    }
    let x = O.filter((D) => (0, import_chunk_zmb62hr5.Hw)(D.trim().toLowerCase()) && !(0, import_chunk_zmb62hr5.Zb)(D.trim().toLowerCase()));
    if (x.length > 0) {
      let D = x.length === O.length ? "so every inference request for this role will be rejected" : "so these entries never match (other entries in the list still do)";
      r.push(`managed policy ${y} availableModels contains ${x.map((U) => `'${U}'`).join(", ")} \u2014 the CLI resolves these aliases when picking a model, but the gateway matches the raw request string, ${D}. List concrete model ids or family aliases (fable/opus/sonnet/haiku) instead.`);
    }
    let P = E.env ?? {}, R = typeof E.model === "string" || E.enforceAvailableModels === true || E.availableModelsMatch === "exact" || typeof P.ANTHROPIC_MODEL === "string" || typeof P.ANTHROPIC_DEFAULT_MODEL === "string" || typeof P.ANTHROPIC_DEFAULT_OPUS_MODEL === "string";
    if (l && !R && !oi(l, O)) h.push(y);
  }
  if (l && h.length > 0) {
    let y = h.length === 1 ? `policy ${h[0]}` : `policies ${h.join(", ")}`;
    r.push(`managed ${y}: availableModels leaves out ${l}, the model Claude Code (as of this release) starts on when nobody has picked one, and neither model nor enforceAvailableModels is set, so those developers get a 400 on every request until they pick a listed model with /model. Add enforceAvailableModels: true so the Default option resolves to a listed model, or set model.`);
  }
  let u = e.upstreams.filter((y) => !y.groups);
  for (let y of e.models) {
    if ((0, import_chunk_zhr7rpv7.PB)(y.id) || !As({ ...e, upstreams: u }, y.id) || e.upstreams.every((O) => y.upstream_model[O.name])) continue;
    let v = y.id.toLowerCase(), E = [], S = [];
    for (let [O, x] of (t ?? []).entries()) if (x.availableModels?.some((P) => (0, import_chunk_zmb62hr5.Yt)(P.trim().toLowerCase()) === v)) E.push(`managed.policies[${O}]`);
    else if (x.availableModels && !Jn(y.id, x, y)) S.push(`managed.policies[${O}]`);
    if (E.length > 0 && S.length > 0) r.push(`model '${y.id}' is listed by name in availableModels of ${E.join(", ")}, but developers under ${S.join(", ")} can use it too. An availableModels entry can also match ids that it does not name: a family word such as opus matches ids with that word in them and, unless availableModelsMatch is exact, a model name matches ids that begin with it. If this model is meant only for the policies that list it, map it only to upstreams that set groups, which serve only the IdP groups they list, or rename it so that no other policy's entries match it.`);
  }
  let [f, m] = (0, import_chunk_6mfepmbb.Wl)(e.upstreams, (y) => "region" in y && y.region.startsWith("us-gov-"));
  for (let y of f) {
    let v = m.filter((E) => !y.groups || !E.groups || y.groups.some((S) => E.groups?.includes(S)));
    if (v.length > 0) r.push(`upstream '${y.name}' is in AWS GovCloud (its region starts with us-gov-), but developers it serves can also use these upstreams outside GovCloud: ${v.map((E) => `'${E.name}'`).join(", ")}. Their whole conversation can go there without notice, for example when they pick a model served there, or when a request or token count for a model both serve fails and the gateway fails over. To keep each developer on one side, set groups on '${y.name}' and on each upstream named here, so that no group is listed on both sides and no developer belongs to groups on both sides.`);
  }
  for (let [y, v] of [["bedrock", "ANTHROPIC_BEDROCK_BASE_URL"], ["vertex", "ANTHROPIC_VERTEX_BASE_URL"], ["foundry", "ANTHROPIC_FOUNDRY_BASE_URL"]]) {
    let E = e.upstreams.filter((S) => S.provider === y && !S.base_url);
    if (import_chunk_c203g5kd.s[v] && E.length > 0) r.push(`${v} is set in the gateway's environment, but the gateway does not read it. Model requests to every ${y} upstream that has no base_url (${E.map((S) => `'${S.name}'`).join(", ")}) go to the provider's default endpoint for that upstream. Earlier gateway versions read it. To send those requests to the variable's URL, copy the URL into base_url on each of these upstreams. Remove the variable to stop this warning.`);
  }
  let b = e.upstreams.flatMap((y) => y.provider === "anthropic" && y.forward_user_identity ? [y] : []);
  if (e.oidc !== void 0) for (let y of b) r.push(`upstream '${y.name}' has forward_user_identity: true \u2014 every forwarded request carries the signed-in developer's IdP subject and email as headers to ${y.base_url} (x-litellm-end-user-id is the email and is omitted for a user whose IdP token has none; set oidc.email_claim if your IdP puts it under another claim name)`);
  if (e.cri && !e.cri.enabled) r.push("a cri: block is present but cri.enabled is not true \u2014 customer-routed inference is OFF and the block (org_allowlist, policy webhook) is inert");
  if (e.oidc === void 0) {
    let y = [];
    if (t && t.length > 0) y.push("managed: policies (no session principal can ever reach /managed/settings or /user/bootstrap)");
    if (e.admin) y.push("admin: spend limits (the spend limits it manages bind session principals only, and no session principal can exist)");
    if (e.telemetry.forward_to.length > 0) y.push("telemetry.forward_to (the OTLP relay sits behind the session wall)");
    if (b.length > 0) y.push(`forward_user_identity on upstream ${b.map((v) => `'${v.name}'`).join(", ")} (identity headers name a signed-in developer, and no session principal can exist, so none are ever sent)`);
    if (e.login_notice !== void 0) y.push("login_notice (no one can sign in, so no one sees it)");
    if (y.length > 0) r.push(`oidc is not configured (CRI-only deployment), so no gateway session JWT can ever be minted and these configured sections are inert: ${y.join("; ")}. Remove them, or configure oidc if developer sign-in is intended.`);
  }
  let g = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  if (e.cri) {
    for (let y of e.cri.org_allowlist) if (!g.test(y)) r.push(`cri.org_allowlist entry '${y}' does not look like a UUID (8-4-4-4-12) \u2014 Anthropic organization identifiers are canonical UUIDs, so this entry will almost certainly never match any caller's signed org claim, and every caller from the intended org will be denied (cri_org_not_allowed)`);
  }
  if (t && !t.some((y) => y.desktop !== void 0)) r.push("no managed policy carries a desktop: block \u2014 Claude Desktop clients will be rejected by /user/bootstrap until a policy opts in");
  if (t && t.some((y) => y.desktop !== void 0 && !y.underCode && Object.keys(y.payload.settings).length > 0) && !t.some((y) => y.serveToDesktop === false)) r.push(`Claude Code settings outside a code: block do not reach the Code tab of a Claude Desktop connected through bootstrapUrl, even with serve_to_desktop: true. To reach it, write every policy's block under code:. That also changes how Claude Desktop runs Cowork and Chat: read "Choose cli or code" in the gateway configuration docs first. serve_to_desktop: false silences this and serves Claude Desktop sessions nothing`);
  if (e.admin) {
    let y = [];
    for (let v of e.models) for (let [E, S] of Object.entries(v.upstream_model)) if (!(0, import_chunk_865at33z.iCt)(S) && !(0, import_chunk_865at33z.iCt)(v.id) && !Pt(e.pricing, E, S, v.id)) y.push(`${v.id} (${S})`);
    if (y.length > 0) r.push(`spend meter has no exact rates for ${(0, import_chunk_4smdap7r.M)(y).join(", ")} \u2014 these will be metered at the unknown-model default tier`);
  }
  let k = e.pricing?.multiplier ?? 1;
  if (k > 1) r.push(`pricing.multiplier is ${k}, a markup.` + (e.admin ? ` Spend limits count ${k}\xD7 the price, so developers reach them sooner. Raise the caps if that is not intended.` : "") + (t && t.length > 0 ? " Claude Code clients older than v2.1.270 ignore a multiplier above 1 and show costs without the markup." : ""));
  for (let y of e.pricing?.overrides ?? []) {
    let v = e.upstreams.find((O) => O.name === y.upstream), E = (O) => {
      if (!v) return false;
      if (!e.admin && As(e, O)?.upstream !== v) return false;
      let x = We(O, v, e.models, e.auto_include_builtin_models);
      return x.ok && Pt(e.pricing, y.upstream, x.model, O) === y;
    }, S = (0, import_chunk_zhr7rpv7.PB)(y.model)?.firstParty ?? y.model;
    if (!E(S) && !e.models.some((O) => E(O.id))) r.push(`pricing override for '${y.model}' on upstream '${y.upstream}' will never apply \u2014 no model a client can request there is priced by it (a typo, a model not in models[], a more specific row covers it, or \u2014 with no admin: meter \u2014 an earlier upstream serves the model and only its price is pushed to clients${e.upstreams.some((O) => O.groups) ? ", or the first upstream to serve it sets groups, so no price is pushed" : ""})`);
  }
  return r;
}
