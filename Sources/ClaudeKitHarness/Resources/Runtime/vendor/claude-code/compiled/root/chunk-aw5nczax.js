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
var chunk_aw5nczax_exports = {};
__export(chunk_aw5nczax_exports, {
  $Ta: () => $Ta,
  $v: () => $v,
  ATa: () => ATa,
  CTa: () => CTa,
  DTa: () => DTa,
  Dzr: () => Dzr,
  FTa: () => FTa,
  GEn: () => GEn,
  HTa: () => HTa,
  Hzr: () => Hzr,
  ITa: () => ITa,
  JJn: () => JJn,
  K8t: () => K8t,
  KJn: () => KJn,
  LTa: () => LTa,
  Lzr: () => Lzr,
  MTa: () => MTa,
  Mzr: () => Mzr,
  NTa: () => NTa,
  Nte: () => Nte,
  Nzr: () => Nzr,
  OTa: () => OTa,
  PTa: () => PTa,
  Q2o: () => Q2o,
  QJn: () => QJn,
  RTa: () => RTa,
  T$e: () => T$e,
  V8t: () => V8t,
  XJn: () => XJn,
  YJn: () => YJn,
  Z2o: () => Z2o,
  _et: () => _et,
  aGo: () => aGo,
  aqs: () => aqs,
  cGo: () => cGo,
  cqs: () => cqs,
  dGo: () => dGo,
  dqs: () => dqs,
  eGo: () => eGo,
  fGo: () => fGo,
  fqs: () => fqs,
  get: () => get,
  gqs: () => gqs,
  hht: () => hht,
  hqs: () => hqs,
  iGo: () => iGo,
  iqs: () => iqs,
  jEn: () => jEn,
  lGo: () => lGo,
  lqs: () => lqs,
  mGo: () => mGo,
  mht: () => mht,
  mqs: () => mqs,
  n6: () => n6,
  nGo: () => nGo,
  nqs: () => nqs,
  oGo: () => oGo,
  oqs: () => oqs,
  pGo: () => pGo,
  pqs: () => pqs,
  qJn: () => qJn,
  rGo: () => rGo,
  rqs: () => rqs,
  sGo: () => sGo,
  sqs: () => sqs,
  tGo: () => tGo,
  tq: () => tq,
  uGo: () => uGo,
  uqs: () => uqs,
  uue: () => uue,
  v$e: () => v$e,
  xTa: () => xTa,
  zKe: () => zKe
});
module.exports = __toCommonJS(chunk_aw5nczax_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_6a9gdcsm = require("/$bunfs/root/chunk-6a9gdcsm.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_fc3gfgch = require("/$bunfs/root/chunk-fc3gfgch.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_xkpbmcsq = require("/$bunfs/root/chunk-xkpbmcsq.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_yq00hd9s = require("/$bunfs/root/chunk-yq00hd9s.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_179jgyn9 = require("/$bunfs/root/chunk-179jgyn9.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_02cqsykt = require("/$bunfs/root/chunk-02cqsykt.js");
var import_chunk_1dkksxs0 = require("/$bunfs/root/chunk-1dkksxs0.js");
var import_chunk_qnq7dhb5 = require("/$bunfs/root/chunk-qnq7dhb5.js");
var import_chunk_ak45b7eq = require("/$bunfs/root/chunk-ak45b7eq.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_gc5a361p = require("/$bunfs/root/chunk-gc5a361p.js");
var import_chunk_ynbv8e5n = require("/$bunfs/root/chunk-ynbv8e5n.js");
var import_chunk_kb3nnh8q = require("/$bunfs/root/chunk-kb3nnh8q.js");
var import_chunk_tteqedwm = require("/$bunfs/root/chunk-tteqedwm.js");
var import_chunk_8k7k08kg = require("/$bunfs/root/chunk-8k7k08kg.js");
var import_chunk_crteww1n = require("/$bunfs/root/chunk-crteww1n.js");
var import_chunk_qh0nzvn2 = require("/$bunfs/root/chunk-qh0nzvn2.js");
var import_chunk_4vdq32k8 = require("/$bunfs/root/chunk-4vdq32k8.js");
var import_chunk_g44r9njd = require("/$bunfs/root/chunk-g44r9njd.js");
var import_chunk_ttsnbbsg = require("/$bunfs/root/chunk-ttsnbbsg.js");
var import_chunk_y8s4362z = require("/$bunfs/root/chunk-y8s4362z.js");
var import_chunk_1ymj1rfb = require("/$bunfs/root/chunk-1ymj1rfb.js");
var import_chunk_9jr493jm = require("/$bunfs/root/chunk-9jr493jm.js");
var import_chunk_kjd9cbj9 = require("/$bunfs/root/chunk-kjd9cbj9.js");
var import_chunk_1n8b5n1q = require("/$bunfs/root/chunk-1n8b5n1q.js");
var import_chunk_02b35jvk = require("/$bunfs/root/chunk-02b35jvk.js");
var import_chunk_p5m4fqpp = require("/$bunfs/root/chunk-p5m4fqpp.js");
var import_chunk_nn7sd2sk = require("/$bunfs/root/chunk-nn7sd2sk.js");
var import_chunk_jhy72swy = require("/$bunfs/root/chunk-jhy72swy.js");
var import_chunk_2efh61g1 = require("/$bunfs/root/chunk-2efh61g1.js");
var import_chunk_n5r4gqb4 = require("/$bunfs/root/chunk-n5r4gqb4.js");
var import_chunk_ndx89hd3 = require("/$bunfs/root/chunk-ndx89hd3.js");
var import_chunk_dtzkavpf = require("/$bunfs/root/chunk-dtzkavpf.js");
var import_chunk_v6v1wr72 = require("/$bunfs/root/chunk-v6v1wr72.js");
var import_chunk_4cwth1j2 = require("/$bunfs/root/chunk-4cwth1j2.js");
var import_chunk_41appe38 = require("/$bunfs/root/chunk-41appe38.js");
var import_chunk_2atp9x7j = require("/$bunfs/root/chunk-2atp9x7j.js");
var import_chunk_6c0jwb75 = require("/$bunfs/root/chunk-6c0jwb75.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
var import_chunk_mahb4v28 = require("/$bunfs/root/chunk-mahb4v28.js");
var import_chunk_59xxesz9 = require("/$bunfs/root/chunk-59xxesz9.js");
var import_chunk_6qaevejb = require("/$bunfs/root/chunk-6qaevejb.js");
var import_chunk_jsm9pvcb = require("/$bunfs/root/chunk-jsm9pvcb.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_6eq0mqyj = require("/$bunfs/root/chunk-6eq0mqyj.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_s1btam0h = require("/$bunfs/root/chunk-s1btam0h.js");
var import_chunk_4rp6k6sw = require("/$bunfs/root/chunk-4rp6k6sw.js");
var import_chunk_6ygedzfy = require("/$bunfs/root/chunk-6ygedzfy.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_chunk_t99xdws4 = require("/$bunfs/root/chunk-t99xdws4.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_0djtvg5h = require("/$bunfs/root/chunk-0djtvg5h.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_rwa52046 = require("/$bunfs/root/chunk-rwa52046.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_crypto = require("crypto");
var import_path2 = require("path");
var Wo = __toESM(require("path"));
var import_url = require("url");
var import_path3 = require("path");
var import_path4 = require("path");
var import_path5 = require("path");
var import_promises2 = require("fs/promises");
var import_os = require("os");
var import_path6 = require("path");
function Q2o(e, o) {
  let r = (0, import_chunk_865at33z.ce)().toolList.answer?.added ?? [];
  if (r.length === 0 || o.builtInToolsDisabled === true) return e;
  let h = new Set(e.map((y) => y.name)), g = (0, import_chunk_b83x8d52.IP)(r.filter((y) => !h.has(y.name)), o);
  return g.length === 0 ? e : [...e, ...g.toSorted(import_chunk_4vsz8a99.gme)];
}
function nr(e, o) {
  return Q2o((0, import_chunk_b83x8d52.i$t)(e), o);
}
(0, import_chunk_adx6804h.B)();
var Hi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({})), qi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ notifications: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ notification_id: (0, import_chunk_adx6804h.n)().describe("Server-assigned stable id \u2014 the dedup key across redeliveries."), origin: (0, import_chunk_adx6804h.n)().describe('Server-attested source token: "github_webhook" | "trigger_fire" | "mcp_send_message" (open set; unknown well-formed tokens pass through verbatim, off-grammar values coerce to "unknown").'), queued_at: (0, import_chunk_adx6804h.n)().describe("RFC3339 timestamp of when the backend queued it."), content: (0, import_chunk_adx6804h.n)().describe("Verbatim notification body."), arrived_at: (0, import_chunk_adx6804h.n)().optional().describe("RFC3339 timestamp, by this machine's clock, of when the notification reached this session's queue. Missing from results saved before this field existed.") })), remaining: (0, import_chunk_adx6804h.E)().describe("Notifications still queued after this drain (drains are size-budgeted); call the tool again to read them."), read_at: (0, import_chunk_adx6804h.n)().optional().describe("RFC3339 timestamp, by this machine's clock, of when this call read the queue. Missing from results saved before this field existed.") })), sr = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "b1b9f595-4acb-534a-8354-b587f68978c3", name: import_chunk_xfj2cwfv.fS, searchHint: "read queued external notifications (webhooks, triggers)", backgrounding: "never", maxResultSizeChars: import_chunk_tteqedwm.tKo, persistenceThresholdCeiling: import_chunk_tteqedwm.tKo, skipAggregateToolResultBudget: true, get inputSchema() {
  return Hi();
}, get outputSchema() {
  return qi();
}, isEnabled: import_chunk_tteqedwm.lqr, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, async description() {
  return import_chunk_xfj2cwfv.BMl;
}, async prompt() {
  return import_chunk_xfj2cwfv.Cxo;
}, toAutoClassifierInput() {
  return "read queued notifications";
}, create({ agentId: e, queuedNotificationsRegistry: o }) {
  return { async call(r) {
    if (e !== void 0) throw Error("ReadNotifications can only be called from the main conversation \u2014 subagents must not drain the session notification buffer.");
    let h = new Date(Date.now()).toISOString(), { notifications: g, remaining: y } = o.drain();
    if (g.length > 0) (0, import_chunk_1ek4hhs6.yg)([null], g.some((k) => k.origin === import_chunk_865at33z.tO) ? [import_chunk_1ek4hhs6.Aps] : []);
    return { data: { notifications: g.map((k) => ({ notification_id: k.notificationId, origin: k.origin, queued_at: k.queuedAt, content: k.content, arrived_at: k.arrivedAt })), remaining: y, read_at: h }, notificationsRead: { session: import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID, messages: g.flatMap((k) => k.markedDigest === void 0 ? [] : [{ id: k.notificationId, digest: k.markedDigest }]) } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: (0, import_chunk_tteqedwm.mIa)(e.notifications, e.remaining, e.read_at) };
}, renderToolUseMessage() {
  return "";
}, extractSearchText(e) {
  return e.notifications.map((o) => o.content).join(`
`);
} });
(0, import_chunk_adx6804h.B)();
var Gi = `Inside the <${import_chunk_k449cc64.$0o}> tag: what the apps' views shared and their tool names, as the apps wrote them, and each view's ids, as the host set them.`, Pt = import_chunk_tt4yhkc0.ME, Ki = Pt - 5e3, Vi = 1048576, Yi = 8, Xi = 16, po = 20, Qi = 2e3, dr = new RegExp(`[${import_chunk_hr2stdq7.J0.open}${import_chunk_hr2stdq7.J0.close}&\\u2028\\u2029]`, "g");
function mr(e) {
  return `\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}`;
}
function ir(e, o, r = 1 / 0) {
  let h = e.content.flatMap((y) => y.type === "text" ? [y.text] : []).join(`
`), g = h;
  for (; ; ) {
    let y = (0, import_chunk_hr2stdq7.YAt)((0, import_chunk_w578pjby._)({ widget_id: o ?? null, tool_name: e.tool_name, view: (0, import_chunk_bzyb60p0.qYo)(e.view) === void 0 ? null : e.view, widget_reported_state: g, ...g.length < h.length && { cut_for_size: true } })).replace(dr, mr);
    if (y.length <= r || g === "") return y;
    g = (0, import_chunk_7cfjrnwy.ee)(g, Math.floor(g.length * (r / y.length) * 0.9));
  }
}
class pr {
  bytes = Vi;
  count = Yi;
  attempts = Xi;
  leftOut = 0;
  async of(e, o) {
    let r = [];
    for (let h of e.content) {
      if (h.type !== "image") continue;
      if (this.count === 0 || this.attempts === 0) {
        this.leftOut++;
        continue;
      }
      this.attempts--;
      let g = await (0, import_chunk_fbqj9ad4.bgr)(Buffer.from(h.data, "base64"), o);
      if (!g || g.source.type !== "base64" || g.source.data.length > this.bytes) {
        this.leftOut++;
        continue;
      }
      this.count--, this.bytes -= g.source.data.length, r.push({ type: "image", source: g.source });
    }
    return r;
  }
  note() {
    if (this.leftOut === 0) return "";
    return `${this.leftOut === 1 ? "1 image was" : `${this.leftOut} images were`} left out (too many, too large, or not an image the model can read). `;
  }
}
var mo = "not_sent_for_size", ar = "left_out_of_this_answer", lr = "views_with_held_state", cr = 64;
function fr(e, o, r = po) {
  let h = Math.max(0, o.length - r);
  return { type: "text", text: (0, import_chunk_hr2stdq7.YAt)((0, import_chunk_w578pjby._)({ [e]: o.slice(0, r), ...h > 0 && { more: h } })).replace(dr, mr) };
}
function ur(e, o, r) {
  return fr(e, o.map((h) => ({ widget_id: r.get(h) ?? null, tool_name: (0, import_chunk_bzyb60p0.Nja)(h.tool_name) })));
}
function fo(e, o) {
  return e > o ? `the first ${o} of them` : "them";
}
function yt(e, o = false) {
  return { blocks: [{ type: "text", text: e }], isError: o };
}
function yr(e, o, r = false) {
  return { blocks: [{ type: "text", text: `${Gi}
<${import_chunk_k449cc64.$0o}>` }, ...e, { type: "text", text: `</${import_chunk_k449cc64.$0o}>${o.trim() === "" ? "" : `
${o.trim()}`}` }], isError: r };
}
async function Zi(e, o, r, h, g) {
  let y = new pr(), k = e.map((H, X) => ({ state: H, index: X })).sort((H, X) => r(X.state) - r(H.state) || X.index - H.index), w = /* @__PURE__ */ new Map(), R = [], I = g, x = 0;
  for (let { state: H, index: X } of k) {
    let N = ir(H, o.get(H));
    if (N.length > I) {
      let Q = (!o.has(H) || e.length === 1) && I >= Qi ? ir(H, o.get(H), I) : void 0;
      if (Q === void 0 || Q.length > I) {
        R.push(H);
        continue;
      }
      N = Q, x++;
    }
    I -= N.length, w.set(X, [{ type: "text", text: N }, ...await y.of(H, h)]);
  }
  let L = e.filter((H) => H.omitted === "too_large"), K = e.length > 1 && R.length > 0, z = [...[...w.entries()].sort(([H], [X]) => H - X).flatMap(([, H]) => H), ...L.length > 0 ? [ur(mo, L, o)] : [], ...K ? [ur(ar, R, o)] : []], q = L.length === 0 ? "" : L.length === 1 ? `1 view shared more than could be sent with the user's message, so what it shared is not here; "${mo}" inside the tag above names it. ` : `${L.length} views shared more than could be sent with the user's message, so what they shared is not here; "${mo}" inside the tag above names ${fo(L.length, po)}. `, V = R.length === 0 ? "" : e.length === 1 ? "The view is too large to return. " : `${R.length === 1 ? "1 view was" : `${R.length} of the ${e.length} views were`} left out because the answer would be too large; "${ar}" inside the tag above names ${R.length === 1 ? "it" : fo(R.length, po)}. To get one, call again with its widget_id, where the tag shows one. `, G = q + V + (x === 0 ? "" : e.length === 1 ? 'The view shared more than fits in one answer, so what it shared was cut; "cut_for_size" marks it inside the tag above. ' : `${x === 1 ? "1 view has" : `${x} views have`} no widget_id, so ${x === 1 ? "it" : "they"} cannot be read alone: what ${x === 1 ? "it" : "each"} shared was cut to fit, and "cut_for_size" marks ${x === 1 ? "it" : "them"} inside the tag above. `) + y.note(), j = w.size === 0 && (e.length === 1 || !R.some((H) => o.has(H))) ? `If you need what ${e.length === 1 ? "it shows" : "these views show"}, ask the user to describe it. ` : "";
  return z.length === 0 ? yt(`${G}${j}`.trim()) : yr(z, G + j);
}
async function kr(e, o) {
  if (!e?.length) return yt("No view's shared state is held right now, so there is nothing to read. You cannot tell from here what the view shows; if what you do next depends on that, ask the user.");
  let r = (0, import_chunk_bzyb60p0.YYo)(e), h = (0, import_chunk_bzyb60p0.Dja)(o.widgetId), g = h === "" ? e : e.filter((w) => r.get(w) === h);
  if (g.length === 0) {
    let w = [...r.values()];
    return w.length === 0 ? yt("No held view has that widget_id. Call again without widget_id to read every held view.", true) : yr([fr(lr, w, cr)], `No held view has that widget_id; "${lr}" inside the tag above lists ${fo(w.length, cr)}. Call again with one of those, or without widget_id for all of them. `, true);
  }
  let [y] = g;
  if (g.length === 1 && !y?.view && y?.omitted === "too_large") return yt("The view shared more than could be sent with the user's message, so none of it is here. If you need what it shows, ask the user to describe it.");
  let k = Ki;
  for (let w = 0; w < 4; w++) {
    let R = await Zi(g, r, o.changedAt ?? (() => 0), o.imageLimits, k), I = R.blocks.reduce((x, L) => x + (L.type === "text" ? L.text.length : 0), 0) - Pt;
    if (I <= 0) return R;
    k = Math.max(0, k - I - 1e3);
  }
  return yt("What these views shared is too large to return. If you need what they show, ask the user to describe it.");
}
var Ji = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ widget_id: (0, import_chunk_adx6804h.n)().optional().describe("A widget_id as a reminder or an earlier answer named it, to read only that view; omit it to read every held view.") })), ea = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ blocks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("image"), source: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("base64"), media_type: (0, import_chunk_adx6804h.F)(["image/png", "image/jpeg", "image/gif", "image/webp"]), data: (0, import_chunk_adx6804h.n)() }) })])).describe("The views' shared text and images, or a note."), isError: (0, import_chunk_adx6804h.P)() })), wr = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "6584c477-e69e-56b6-86de-6537e87cba1a", name: import_chunk_bzyb60p0.sQt, searchHint: "read the state an MCP App view shared", backgrounding: "never", maxResultSizeChars: Pt, skipAggregateToolResultBudget: true, get inputSchema() {
  return Ji();
}, get outputSchema() {
  return ea();
}, isEnabled: import_chunk_bzyb60p0.YQt, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, async description() {
  return import_chunk_bzyb60p0.Fja;
}, async prompt() {
  return import_chunk_bzyb60p0.$ja;
}, toAutoClassifierInput(e) {
  return `read widget context${e.widget_id ? ` ${e.widget_id}` : ""}`;
}, create({ session: e, modelFacts: o }) {
  return { async call(r) {
    let h = import_chunk_bzyb60p0.vQr.peek(e);
    return { data: await kr(h?.states, { imageLimits: (0, import_chunk_yvba4101.ac)(o().model), widgetId: r.widget_id, changedAt: (y) => h?.changedAt.get((0, import_chunk_bzyb60p0.cir)(y)) ?? 0 }) };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: e.blocks, ...e.isError && { is_error: true } };
}, renderToolUseMessage(e) {
  return e.widget_id ?? "";
}, extractSearchText() {
  return "";
} });
(0, import_chunk_adx6804h.B)();
var ta = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ mode: (0, import_chunk_adx6804h.F)(["check", "update", "create", "delete"]).default("check").describe("'check' (default): if ONBOARDING.md is present locally, uploads it to the most-recent guide (creates one if none exist); otherwise reports the existing link without uploading. 'update': upload to a specific guide by short_code. 'create': always make a new link. 'delete': remove the guide named by short_code; with no short_code, nothing is deleted and the user's guides are listed."), short_code: (0, import_chunk_adx6804h.n)().regex(/^[A-Za-z0-9_-]{1,64}$/).optional().describe("Short code of one guide, from an earlier call's result. Required by delete. With check or update, targets that guide instead of the most recently updated one.") })), oa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.F)(["created", "updated", "deleted", "has_existing", "unavailable"]), share_url: (0, import_chunk_adx6804h.n)().optional(), short_code: (0, import_chunk_adx6804h.n)().optional(), message: (0, import_chunk_adx6804h.n)() })), Tt = "ONBOARDING.md", Dt = 65536, vr = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "9cf41dd7-0d2c-52f9-ba38-f3ad4b343f72", name: import_chunk_179jgyn9.dst, whenToUse: "When the user has confirmed the final ONBOARDING.md in the current directory and you are about to give them a link for teammates, or they ask to find or delete a guide already shared, use it.", searchHint: "upload ONBOARDING.md and get a team share link", backgrounding: "never", maxResultSizeChars: 1e3, async description() {
  return import_chunk_179jgyn9.iTi;
}, isEnabled() {
  return (0, import_chunk_bzyb60p0.WOn)();
}, isConcurrencySafe() {
  return false;
}, isReadOnly() {
  return false;
}, get inputSchema() {
  return ta();
}, get outputSchema() {
  return oa();
}, async prompt() {
  return import_chunk_179jgyn9.iTi;
}, toAutoClassifierInput(e) {
  let o = e.short_code ? `, short_code: ${e.short_code}` : "";
  return `share onboarding guide (mode: ${e.mode ?? "check"}${o})`;
}, isDestructive(e) {
  return e.mode === "delete";
}, renderToolUseMessage(e) {
  if (e.mode === "delete" && e.short_code) return `delete ${e.short_code}`;
  return e.mode && e.mode !== "check" ? e.mode : null;
}, create({ credentials: e }) {
  return { async call({ mode: o = "check", short_code: r }) {
    if (o === "delete") try {
      if (!r) {
        let w = await (0, import_chunk_bzyb60p0.res)(e);
        if (w.length === 0) return Ye("The user has no guides to delete.");
        let R = w.map((I) => `${I.short_code} (updated ${I.updated_at})`).join(", ");
        return Ye(`Nothing was deleted. Ask the user which guide to delete, then call again with its short_code. The user's guides: ${R}.`);
      }
      return { data: { status: "deleted", message: await (0, import_chunk_bzyb60p0.Oqa)(r, e) === "already_gone" ? `The server found no guide ${r} in this organization: it was already deleted, or the code is wrong. Call delete with no short_code to list the user's guides.` : `Guide ${r} deleted.` } };
    } catch (k) {
      let w = k instanceof Error ? k.message : String(k);
      return Ye(`Delete didn't go through (${w}).`);
    }
    if (o === "check") try {
      let k = r ? (await (0, import_chunk_bzyb60p0.res)(e)).find((w) => w.short_code === r) : await Cr(e);
      if (k) {
        let w = (0, import_path.join)((0, import_chunk_f9x2f6cx.Te)(), Tt), R = null;
        try {
          R = (await (0, import_promises.stat)(w)).size;
        } catch (L) {
          if (!(0, import_chunk_jv7av99m.J)(L)) throw L;
        }
        if (R === null) return { data: { status: "has_existing", share_url: k.share_url, short_code: k.short_code, message: `A guide already exists for this org at ${k.share_url} (short_code: ${k.short_code}). If this link is what the user needed, share it. If they want to create or update a guide, tell them to run /team-onboarding themselves (it scans local session data and cannot be invoked by the model).` } };
        if (R > Dt) return Ye(`${Tt} is over ${Dt / 1024}KB. Trim it before sharing.`);
        let I = await (0, import_promises.readFile)(w, "utf8"), x = await (0, import_chunk_bzyb60p0.hfi)(k.short_code, I, e);
        return ho("updated", x, false);
      }
    } catch (k) {
      let w = k instanceof Error ? k.message : String(k);
      return Ye(`Upload didn't go through (${w}). Fall back to the manual share copy.`);
    }
    let h = (0, import_path.join)((0, import_chunk_f9x2f6cx.Te)(), Tt), g;
    try {
      g = (await (0, import_promises.stat)(h)).size;
    } catch (k) {
      if ((0, import_chunk_jv7av99m.J)(k)) return Ye(`${Tt} not found in the current directory. Write the guide first.`);
      throw k;
    }
    if (g > Dt) return Ye(`${Tt} is over ${Dt / 1024}KB. Trim it before sharing.`);
    let y = await (0, import_promises.readFile)(h, "utf8");
    try {
      if (o === "update") {
        let w = r ?? (await Cr(e))?.short_code;
        if (w) {
          let R = await (0, import_chunk_bzyb60p0.hfi)(w, y, e);
          return ho("updated", R, true);
        }
      }
      let k = await (0, import_chunk_bzyb60p0.Pqa)(y, void 0, e);
      return ho("created", k, false);
    } catch (k) {
      let w = k instanceof Error ? k.message : String(k);
      return Ye(`Upload didn't go through (${w}). Fall back to the manual share copy.`);
    }
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: `[${e.status}] ${e.message}` };
} });
async function Cr(e) {
  let o = await (0, import_chunk_bzyb60p0.res)(e);
  if (o.length === 0) return;
  return o.reduce((r, h) => r.updated_at > h.updated_at ? r : h);
}
function ho(e, o, r) {
  let h = r ? `

Close with: "Here's your onboarding guide: ${o.share_url}" followed by the send-to-teammates line.` : "", g = "";
  return { data: { status: e, share_url: o.share_url, short_code: o.short_code, message: `Share link ${e}: ${o.share_url} (short_code: ${o.short_code})${h}` } };
}
function Ye(e) {
  return { data: { status: "unavailable", message: e } };
}
(0, import_chunk_adx6804h.B)();
var Er = 1e4;
function Ir(e, o) {
  try {
    let r = Object.getPrototypeOf(o);
    if (r !== Object.prototype && r !== null) return Xe("not_an_object");
    let h = Object.keys(o), g = h[0];
    if (g === void 0 || h.length > 1) return Xe("unknown_field");
    if (Object.keys(e).length > 0) return Xe("changed_shown_field");
    let y = o[g];
    switch (g) {
      case "role":
        if (typeof y !== "string") return Xe("response");
        return y.length > 9991 || JSON.stringify(y).length > 9991 ? Xe("too_large") : { kind: "admitted", input: { role: y } };
      case "dismissed":
        return y === true ? { kind: "admitted", input: { dismissed: true } } : Xe("response");
      default:
        return Xe("unknown_field");
    }
  } catch {
    return Xe("threw");
  }
}
function Xe(e) {
  return { kind: "refused", rule: e };
}
var ra = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({})), na = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ role: (0, import_chunk_adx6804h.n)().optional(), dismissed: (0, import_chunk_adx6804h.P)().optional() }));
function ia() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE;
}
var Ar = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "479e0cff-1f15-57d4-a320-2cdbb7be5bc1", name: import_chunk_qnq7dhb5.YCe, searchHint: "show the Cowork onboarding role picker", backgrounding: "never", maxResultSizeChars: Er, get inputSchema() {
  return ra();
}, get outputSchema() {
  return na();
}, isEnabled: ia, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, requiresUserInteraction() {
  return true;
}, admitCardAnswer: Ir, async description() {
  return import_chunk_qnq7dhb5.Gtl;
}, async prompt() {
  return import_chunk_qnq7dhb5.ztl;
}, toAutoClassifierInput() {
  return "show onboarding role picker";
}, create() {
  return { async checkPermissions(e) {
    return { behavior: "ask", message: "Pick your role?", updatedInput: {} };
  }, async call(e) {
    let { role: o, dismissed: r } = e;
    return { data: { ...typeof o === "string" && o.trim() !== "" && { role: o }, ...typeof r === "boolean" && { dismissed: r } } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: (0, import_chunk_w578pjby._)(e) };
}, renderToolUseMessage() {
  return null;
} });
(0, import_chunk_adx6804h.B)();
function Pr(e, o) {
  try {
    let r = Object.getPrototypeOf(o);
    if (r !== Object.prototype && r !== null) return Nt("not_an_object");
    let h = {};
    for (let g of Object.keys(e)) {
      if (!Object.hasOwn(o, g) || o[g] !== e[g]) return Nt("changed_shown_field");
      h[g] = e[g];
    }
    for (let g of Object.keys(o)) {
      if (Object.hasOwn(e, g)) continue;
      if (g !== "outcome") return Nt("unknown_field");
      if (o[g] === "connected") h.outcome = "connected";
    }
    return { kind: "admitted", input: h };
  } catch {
    return Nt("threw");
  }
}
function Nt(e) {
  return { kind: "refused", rule: e };
}
var aa = "tengu_brass_kite", la = "tengu_gentle_dijkstra";
function ca() {
  return (0, import_chunk_3t7ve0wy.Dm)() ? la : aa;
}
function Z2o() {
  return (0, import_chunk_f9x2f6cx.Lyn)() && (0, import_chunk_2atp9x7j.tsr)() && (0, import_chunk_zhr7rpv7.jn)() && (0, import_chunk_pyt5z6an.F7)() && pa() && da();
}
function da() {
  let e = (0, import_chunk_929j4hj9.Fi)();
  if (e.chromeSetupOfferArm !== void 0) return e.chromeSetupOfferArm;
  if (e.chromeSetupOfferStateUnread || !ma()) return false;
  let { value: o, source: r } = (0, import_chunk_865at33z.gn)(ca(), false);
  if (r === "fallback" || r === "disabled") return false;
  return e.chromeSetupOfferArm = o === true, e.chromeSetupOfferArm;
}
function CTa(e, o) {
  let r = import_chunk_929j4hj9.m$n.of(e.host);
  if (o !== void 0 && (0, import_chunk_npsm5tcc.vG)(o)) r.lastTurnClientPlatform = o;
  else if (r.lastTurnClientPlatform === void 0) r.lastTurnClientPlatform = null;
}
function xr(e, o) {
  return (0, import_chunk_929j4hj9.M8e)(o !== void 0 && (0, import_chunk_npsm5tcc.vG)(o) ? o : import_chunk_929j4hj9.m$n.of(e.host).lastTurnClientPlatform);
}
function go() {
  return (0, import_chunk_3t7ve0wy.Dm)();
}
function ma() {
  if (!go()) return true;
  let e = (0, import_chunk_929j4hj9.Fi)().lastTurnClientPlatform;
  return e !== void 0 && e !== null && !(0, import_chunk_929j4hj9.M8e)(e);
}
function Dr() {
  return fa() || (0, import_chunk_2atp9x7j.tsr)();
}
function pa() {
  return (0, import_chunk_865at33z.Hc)() && (0, import_chunk_p44m8w7d.j_)() && !(0, import_chunk_p44m8w7d.cM)().includes(import_chunk_qnq7dhb5.qCe);
}
function fa() {
  return (0, import_chunk_f9x2f6cx.Vyn)().has("tool_attempted");
}
var ha = new import_chunk_pzzqg6s3.ze(() => ({ calls: 0 }));
function Mt(e, o, r) {
  let h = ha.of(e);
  h.calls++, (0, import_chunk_y53wbr8a.a)("tengu_chrome_setup_offered", { outcome: (0, import_chunk_78g0060s.f)(o), nth_call: h.calls, chrome_tool_attempted: (0, import_chunk_f9x2f6cx.Vyn)().has("tool_attempted"), isRemoteSession: Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID), ...r && { messageClientPlatform: (0, import_chunk_r9ecxfn9.qW)(r) } });
}
var ya = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ reason: (0, import_chunk_adx6804h.n)().max(200).optional().describe("A short phrase naming what the task needs the user's own browser for.") })), ka = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ outcome: (0, import_chunk_adx6804h.F)(["connected", "not_now", "no_attempt_yet"]) }));
function Ta(e) {
  let { reason: o } = e;
  return o === void 0 ? {} : { reason: o };
}
var Lr = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "4879d7ba-7863-5223-9084-b37eb0985db4", name: import_chunk_qnq7dhb5.qCe, searchHint: "offer the user Claude in Chrome setup for their own browser", shouldDefer: true, whenToUse: import_chunk_qnq7dhb5.Dtl, alwaysListsWhenToUse: true, backgrounding: "never", maxResultSizeChars: 2e3, get inputSchema() {
  return ya();
}, get outputSchema() {
  return ka();
}, isEnabled: Z2o, isConcurrencySafe() {
  return false;
}, isReadOnly() {
  return true;
}, requiresUserInteraction() {
  return true;
}, admitCardAnswer: Pr, async description() {
  return import_chunk_qnq7dhb5.Ltl;
}, async prompt() {
  return import_chunk_qnq7dhb5.Ntl;
}, toAutoClassifierInput(e) {
  return e.reason ? `offer Claude in Chrome setup: ${e.reason}` : "offer Claude in Chrome setup";
}, create({ messageClientPlatform: e, session: o }) {
  return { async validateInput() {
    if (go() && xr(o, e)) return Mt(o, "phone", e), { result: false, message: import_chunk_qnq7dhb5.Utl, errorCode: 2 };
    if (Dr()) return { result: true };
    return Mt(o, "no_attempt_yet", e), { result: false, message: import_chunk_qnq7dhb5.Btl, errorCode: 1 };
  }, async checkPermissions(r) {
    return { behavior: "ask", message: "Set up Claude in Chrome?", suppressAlwaysAllowRule: true, updatedInput: Ta(r) };
  }, async call(r) {
    let { outcome: h } = r, g = h === "connected" ? "connected" : "not_now";
    return Mt(o, g, e), { data: { outcome: g } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: e.outcome === "connected" ? import_chunk_qnq7dhb5.Ftl : import_chunk_qnq7dhb5.$tl };
}, renderToolUseMessage(e) {
  return e.reason ?? null;
} });
(0, import_chunk_adx6804h.B)();
var wa = "tengu_merry_thunder", Sa = "tengu_refactored_crystal", Nr = ["verify", "fix_ci", "address_comments", "resolve_conflicts"], ba = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ recap: (0, import_chunk_adx6804h.n)().describe("Two or three short sentences to the user, under 300 characters if you can: what is now true or changed, then where it stands, including what is not done or not verified."), ask: (0, import_chunk_adx6804h.n)().optional().describe("The one decision that is the user's call, under 100 characters if you can: a choice, a go-ahead, an approval. No reason, no recommendation, no list of the options the buttons give."), blocked: (0, import_chunk_xcgcdx61.QR)((0, import_chunk_adx6804h.P)().optional()).describe("true when your work stops here until the user answers; omit when the answer can wait."), actions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.Ae)({ label: (0, import_chunk_adx6804h.n)().describe(`A reply: the button's text, which a click sends you as the user's message. 1-3 plain words, at most ${import_chunk_wx3ay5nf.Hqo} characters ("Yes, fix 1", "Not now"). The first button is your pick, so no need to say so. Each word starts with a letter or digit. No quotes, code marks, arrows, emoji, @ or =. Write & only between blanks.`) }), (0, import_chunk_adx6804h.Ae)({ action: (0, import_chunk_adx6804h.F)(Nr).describe("One of the app's own buttons, which asks you to check this turn's changes (verify) or, on an open pull request, to fix its failing checks, address its requested changes or resolve its merge conflicts. The app shows it only while that applies, so prefer a reply.") })])).max(2, { message: "The box has room for two buttons. Call again with two." }).optional().describe("One or two buttons that answer ask, your recommendation first; a second only when it is a realistic alternative. Needs ask.") }).superRefine(({ ask: e, actions: o = [] }, r) => {
  if (o.length > 0 && (e ?? "").trim() === "") r.addIssue({ code: "custom", path: ["ask"], message: "actions came without ask, and the box draws buttons only under a question. Call again with ask, or without actions.", params: { [import_chunk_339n78pp.a9e]: true } });
  for (let [h, g] of o.entries()) {
    let y = "label" in g ? (0, import_chunk_wx3ay5nf.fJs)(g.label) : [];
    if (y.length > 0) r.addIssue({ code: "custom", path: ["actions", h, "label"], message: `The label of button ${h + 1} ${y.join("; ")}. Call again with 1-3 plain words.`, params: { [import_chunk_339n78pp.a9e]: true } });
  }
})), _a = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ asks: (0, import_chunk_adx6804h.P)().describe("Whether the call put a question to the user"), nextStep: (0, import_chunk_adx6804h.c)({ recap: (0, import_chunk_adx6804h.n)().describe("Claude's short summary of the turn. Empty when nothing visible is left, or when it holds a key that cannot be masked alone (one that an invisible character, an accent or nested markers part, or whose rest comes to stand right after its mask), even when ask is present."), ask: (0, import_chunk_adx6804h.n)().optional().describe("The decision Claude asks of the user. Absent when Claude asked none, when nothing visible is left, or when it holds a key that cannot be masked alone, as for recap."), blocked: (0, import_chunk_adx6804h.P)().describe("Whether Claude's work stops here until the user answers. Can be true with no question."), actions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ label: (0, import_chunk_adx6804h.n)().describe("A reply button's text. Draw it as plain text with no links. On a click, put exactly this text into the message box and let the person send it. Never send it yourself.") }), (0, import_chunk_adx6804h.c)({ action: (0, import_chunk_adx6804h.F)(Nr).describe("One of the app's own buttons: verify checks this turn's changes; fix_ci, address_comments and resolve_conflicts act on an open pull request. The app shows each only while it applies.") })])).describe("The buttons to draw under the question, in Claude's order, its pick first. Two replies with the same label are listed once, and a reply whose label holds a key or token is left out. Empty when there is no question, and when the first button is left out.") }).optional().describe(`The next-step box for this call, to draw without reading the tool's input. Open the box when blocked is true or actions isn't empty; otherwise draw no box. Trust it only when the result's entry in tool_result_meta has built_in_tool set to this tool. It is built from the input the call ran with; where a permission answer or a hook before the call changed that input, the entry has no built_in_tool. The recap and the question are each cleaned to one line of at most ${import_chunk_wx3ay5nf.QTn} UTF-16 units, ending in an ellipsis where that limit cut it, with no whole <cc-memory> markers, no terminal escape sequences and no invisible characters other than those an emoji or a word needs. A placeholder such as [REDACTED] or <token> stands in place of most keys and tokens recognised by their shape. A private key that could not be masked, or a tool call's own markup, is cut with all the text after it, and an ellipsis then shows only if what is left still passes that limit or the text ran past ${4 * import_chunk_wx3ay5nf.QTn} units. Draw the recap and the question as plain text, as they stand: they may hold Markdown, HTML or links, and normalizing them can undo the cleaning. Absent from a result stored by an earlier version of Claude Code.`) })), KJn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "0adf0017-d76e-5032-aed4-da1fd13a4f0e", name: import_chunk_qnq7dhb5.z0n, searchHint: "offer the user a next step when a turn ends", backgrounding: "never", maxResultSizeChars: 1e3, stampsOwnResults: true, isEnabled() {
  return (0, import_chunk_f9x2f6cx.Bla)() && !(0, import_chunk_w50zedgp.uZ)() && (0, import_chunk_865at33z.Lt)(wa, false) && (!(0, import_chunk_f9x2f6cx.jla)() || (0, import_chunk_865at33z.Lt)(Sa, false));
}, async description() {
  return import_chunk_qnq7dhb5.Wtl;
}, async prompt() {
  return import_chunk_qnq7dhb5.jtl;
}, get inputSchema() {
  return ba();
}, get outputSchema() {
  return _a();
}, isReadOnly() {
  return true;
}, toAutoClassifierInput() {
  return "";
}, userFacingName() {
  return "Wrap up";
}, renderToolUseMessage() {
  return null;
}, create() {
  return { async checkPermissions(e) {
    return { behavior: "allow", updatedInput: e };
  }, async call({ recap: e, ask: o, blocked: r, actions: h = [] }) {
    return { data: { asks: o !== void 0 && o.trim() !== "", nextStep: (0, import_chunk_wx3ay5nf.pJs)({ recap: e, ask: o, blocked: r, actions: h }) } };
  } };
}, mapToolResultToToolResultBlockParam({ asks: e }, o) {
  return { tool_use_id: o, type: "tool_result", content: e ? "Recorded. Write your closing message now, as the last thing you say this turn, and end it with your question in one short sentence: a client without the box still sees it." : "Recorded. Write your closing message now, as the last thing you say this turn." };
} });
(0, import_chunk_adx6804h.B)();
function yo(e, o) {
  let r = (0, import_chunk_bzyb60p0.Uie)(o, e, "killed");
  return r?.abortController?.abort(), r;
}
async function Mr(e, o) {
  yo(e, o);
}
var $r = { kill: Mr }, Fr = { kill: Mr };
var zr = { async kill(e, o) {
  let r = yo(e, o);
  if (r !== void 0) await (0, import_chunk_02b35jvk.Y8t)(r.priorMtime, r.storageV5);
} };
var Wr = { async kill(e, o, r, h) {
  (0, import_chunk_bzyb60p0.XI)(e, o, h);
} };
var Br = { async kill(e, o, r, h, g, y) {
  (0, import_chunk_bzyb60p0.l5)(e, o, { by: y === "client" ? "client" : h });
} };
var jr = { async kill(e, o) {
  Ca(e, o);
} };
function Ca(e, o, r) {
  (0, import_chunk_6d4w1614.Kqo)(e, o, { ...r, onKilled: () => {
    r?.onKilled?.();
    let { streamedMonitorStops: h } = (0, import_chunk_trwykz8a.mn)(), g = h.get(e);
    h.delete(e);
    try {
      g?.();
    } catch (y) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(y));
    }
  } });
}
function zKe(e) {
  switch (e) {
    case "local_bash":
      return Br;
    case "local_agent":
      return Wr;
    case "remote_agent":
      return import_chunk_bzyb60p0.zOn;
    case "in_process_teammate":
      return import_chunk_n5r4gqb4.Dxa;
    case "local_workflow":
      return require("/$bunfs/root/chunk-37gmfcqt.js").LocalWorkflowTask;
    case "monitor_mcp":
      return jr;
    case "monitor_ws":
      return import_chunk_6d4w1614.aDa;
    case "mcp_task":
      return require("/$bunfs/root/chunk-ma1cm0js.js").MCP_TASK;
    case "dream":
      return zr;
    case "auto_mode_scan":
      return $r;
    case "post_turn_memory":
      return Fr;
    default:
      return (0, import_chunk_r3kja8v6.ue)() && e === "local_script" ? require("/$bunfs/root/chunk-7r0vf7rc.js").ScriptTask : void 0;
  }
}
function Ct(e) {
  return !(0, import_chunk_ed372ykp.$o)(e.status) || (0, import_chunk_bzyb60p0.pR)(e);
}
function $t(e, o, r) {
  let h = o.all(), g = (0, import_chunk_ndx89hd3.NVr)(e, h), y = qr((I) => I === e, o, r);
  if (g.status !== "not_found" && y) {
    let I = g.status === "found" ? [g.task.identity.agentId] : g.candidates, x = g.status === "found" ? Ct(g.task) : g.anyLive;
    return { status: "ambiguous", message: Hr(e, I, y.id), anyLiveCandidate: x || Ct(y) };
  }
  if (g.status === "ambiguous") return { status: "ambiguous", message: Ur(e, g.candidates), anyLiveCandidate: g.anyLive };
  if (g.status === "found") return { status: "found", task: g.task };
  if (y) return { status: "found", task: y };
  let k = (0, import_chunk_865at33z.$s)(e), w = Ia(k, h), R = qr((I) => (0, import_chunk_865at33z.$s)(I) === k, o, r);
  if (w.length > 0 && R) return { status: "ambiguous", message: Hr(e, w.map((I) => I.identity.agentId), R.id), anyLiveCandidate: w.some(Ct) || Ct(R) };
  if (w.length > 1) return { status: "ambiguous", message: Ur(e, w.map((I) => I.identity.agentId)), anyLiveCandidate: w.some(Ct) };
  if (w.length === 1) return { status: "found", task: w[0] };
  if (R) return { status: "found", task: R };
  return { status: "not_found", suggestion: Ea(k, o, r) };
}
function Ur(e, o) {
  return `Multiple teammates match "${(0, import_chunk_tp3c5q2s.Kee)(e)}": ${o.map((r) => (0, import_chunk_tp3c5q2s.Kee)(r)).join(", ")}. Use the full address (name@team).`;
}
function Hr(e, o, r) {
  return `"${(0, import_chunk_tp3c5q2s.Kee)(e)}" matches both teammate ${o.map((h) => (0, import_chunk_tp3c5q2s.Kee)(h)).join(", ")} and background agent ${(0, import_chunk_tp3c5q2s.Kee)(r)}. Use the full address (name@team) for the teammate or the task ID for the background agent.`;
}
function Ea(e, o, r) {
  let h = /* @__PURE__ */ new Map();
  for (let k of (0, import_chunk_ndx89hd3.MYt)(o.all())) {
    if (k.status !== "running") continue;
    h.set((0, import_chunk_865at33z.$s)(k.identity.agentName), k.identity.agentId);
  }
  let g = r?.().agentNameRegistry;
  if (g) for (let [k, w] of g) {
    let R = o.get(w);
    if (R?.type === "local_agent" && (0, import_chunk_bzyb60p0.kx)(R)) h.set((0, import_chunk_865at33z.$s)(k), k);
  }
  let y = (0, import_chunk_xcgcdx61.age)(e, [...h.keys()], 1)[0];
  return y === void 0 ? void 0 : h.get(y);
}
function Ia(e, o) {
  let r = /* @__PURE__ */ new Map();
  for (let y of (0, import_chunk_ndx89hd3.MYt)(o)) {
    if ((0, import_chunk_865at33z.$s)(y.identity.agentName) !== e) continue;
    let k = r.get(y.identity.agentId);
    if (!k || k.status !== "running" && y.status === "running") r.set(y.identity.agentId, y);
  }
  let h = [...r.values()], g = h.filter((y) => y.status === "running");
  return g.length > 0 ? g : h;
}
function qr(e, o, r) {
  let h = r?.().agentNameRegistry;
  if (!h) return;
  for (let [g, y] of h) {
    if (!e(g)) continue;
    let k = o.get(y);
    if (k?.type === "local_agent") return k;
  }
  return;
}
function Gr(e, o, r) {
  let h = new Set(o?.().agentNameRegistry?.values() ?? []), g = Object.values(e.all()).filter((y) => y.type === "local_agent" && y.id !== r && y.agentType !== "main-session" && y.isBackgrounded && y.isObserver !== true && !h.has(y.id) && (0, import_chunk_bzyb60p0.kx)(y)).map((y) => y.description ? `${y.id} (${(0, import_chunk_tp3c5q2s.Ft)(y.description)})` : y.id);
  return g.length > 0 ? `. Background agents running or waiting: ${g.join(", ")}` : "";
}
function V8t(e) {
  for (let o of (0, import_chunk_trwykz8a.mn)().cascadeStopExemptions) if (o(e)) return true;
  return false;
}
function eGo(e, o, r) {
  let h = "agentId" in e && typeof e.agentId === "string" ? e.agentId : void 0;
  return h !== void 0 && V8t(h) && (0, import_chunk_z6hn62tj.bBt)(e, o, r, (g) => g !== h && V8t(g));
}
function tGo(e, o, r, h) {
  if (o.length === 0) return;
  (0, import_chunk_trwykz8a.mn)().cascadeSpared.emit({ stoppedAgentId: e, sparedAgentIds: o, killedBy: r, taskRegistry: h });
}
function nGo(e, o) {
  let r = o.all(), h = r[e];
  if (!(0, import_chunk_4yjj7pjs.lw)(h) || (0, import_chunk_z6hn62tj.Kf)(h) || h.status !== "killed") return Promise.resolve(0);
  let g = new Set(Object.values(r).filter((y) => (0, import_chunk_4yjj7pjs.An)(y) && y.isBackgrounded && (!(0, import_chunk_ed372ykp.$o)(y.status) || (0, import_chunk_bzyb60p0.pR)(y))).map((y) => y.id));
  return (0, import_chunk_bzyb60p0.s2a)([e, ...Object.values(r).filter((y) => (0, import_chunk_4yjj7pjs.An)(y) && (0, import_chunk_z6hn62tj.bBt)(y, e, r, (k) => g.has(k) || V8t(k))).map((y) => y.id)]);
}
var Aa = 1e4, ko = new import_chunk_pzzqg6s3.ze(() => ({ restore: void 0 }));
function ATa(e, o, r = Aa) {
  let h = ko.of(e);
  h.restore = (0, import_chunk_5appeerh.me)(o, r).finally(() => {
    h.restore = void 0;
  });
}
var Mzr = new import_chunk_pzzqg6s3.ze(() => ({ descriptions: /* @__PURE__ */ new Map(), stopped: /* @__PURE__ */ new Set(), replanWake: () => {
} }));
function RTa(e, o, r) {
  let h = Mzr.of(e);
  for (let g of o) if (!r.has(g.task_id) && g.ambient !== true && g.observer_owned !== true) h.descriptions.set(g.task_id, (0, import_chunk_tp3c5q2s.Qe)(g.description) || "(no description)");
  return h;
}
class qe extends import_chunk_jv7av99m.gr {
  code;
  taskStatus;
  constructor(e, o, r) {
    super(e, `StopTask: ${o}`, "stop_task_refused");
    this.code = o;
    this.taskStatus = r;
    this.name = "StopTaskError";
  }
}
function Pa(e, o) {
  let r = o?.().agentNameRegistry?.entries();
  if (!r) return [];
  let h = [];
  for (let [g, y] of r) {
    let k = e.get(y);
    if (k?.type === "local_agent" && (0, import_chunk_bzyb60p0.kx)(k)) h.push(g);
  }
  return h;
}
function To(e, o, r, h, g) {
  let y = (0, import_chunk_ndx89hd3.Lxa)(o.all()), k = Pa(o, r), w = `No task found with ID: ${(0, import_chunk_tp3c5q2s.Kee)(e)}`;
  if (h !== void 0) w += `. Did you mean: ${(0, import_chunk_tp3c5q2s.Kee)(h)}?`;
  if (y.length > 0) w += `. Running teammates: ${y.map((R) => (0, import_chunk_tp3c5q2s.Kee)(R)).join(", ")}`;
  if (k.length > 0) w += `. Named agents running or waiting: ${k.map((R) => (0, import_chunk_tp3c5q2s.Kee)(R)).join(", ")}`;
  return w + Gr(o, r, g);
}
var xa = "No result will follow. The MCP server may already have done some of the work, or may still finish it.", vt = "It is no longer running and no result will follow.", Kr = `${vt} Do not start it again unless the user asks.`, La = `${vt} The stop came before this turn began. Do not start it again unless the user asks. If the user asks, send it a message to resume it from its saved transcript.`, Na = `${vt} The stop came before this turn began. If its work is still needed, send it a message to resume it from its saved transcript.`, Ma = "It had not read your latest messages. If you resume it, repeat what still applies.";
function nqs(e, o) {
  if (e.type !== "local_workflow" || e.toolUseId === void 0 || !(0, import_chunk_bzyb60p0.uye)()) return;
  let r = e.ownerAgentId === void 0 ? void 0 : o.get(e.ownerAgentId);
  return (0, import_chunk_4yjj7pjs.An)(r) && r.status === "running" ? (0, import_chunk_mzmcvr6c.ro)(r.id) : (0, import_chunk_f9x2f6cx.ot)();
}
function rqs(e, o, r) {
  let h = nqs(e, o);
  if (h === void 0 || e.type !== "local_workflow") return;
  Vr(e, r, h);
}
function Vr(e, o, r) {
  try {
    (0, import_chunk_6d4w1614.oCn)({ taskId: e.id, toolUseId: e.toolUseId, description: e.description, source: o, note: "No result will follow unless the user has it resumed.", body: (0, import_chunk_v6v1wr72.Nqr)(e), to: r }), (0, import_chunk_cqa9hrgx.u)("task_local_workflow_notice", { reason: (0, import_chunk_78g0060s.S)("stop") });
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h), (0, import_chunk_cqa9hrgx.m)("task_local_workflow_notice", "enqueue_failed");
  }
}
async function Hzr(e, o) {
  let { taskRegistry: r, setAppState: h, getAppState: g, callerAgentId: y, killedBy: k = "user", storageV5: w } = o, R = e, I = r.get(R);
  if (!I && o.source === "client" && (0, import_chunk_ed372ykp.uG)("local_bash", e)) throw new qe(`No task found with ID: ${e}. An ID of this shape is not looked up as an agent's name: send the agent's task ID.`, "not_found");
  let x;
  if (!I) {
    let N = $t(e, r, g);
    if (N.status === "ambiguous") {
      if (!N.anyLiveCandidate) throw new qe(N.message, "not_running", "completed");
      throw new qe(N.message, "ambiguous");
    }
    if (N.status === "found") I = N.task, R = N.task.id;
    else x = N.suggestion;
  }
  if (!I) throw new qe(To(e, r, g, x, y), "not_found");
  let L = R === e ? R : `${(0, import_chunk_tp3c5q2s.Kee)(e)} (${R})`;
  if ((0, import_chunk_z6hn62tj.Kf)(I)) {
    if (y !== void 0 && y === I.agentId) throw new qe(`Observer ${L} cannot stop itself; use the task UI or a main-session TaskStop.`, "not_owner");
    if (!(0, import_chunk_sjqze7qg.vnn)(y, I.agentId)) throw new qe(`Task ${L} is owned by ${(0, import_chunk_tp3c5q2s.Kee)((0, import_chunk_sjqze7qg.wpr)(I.agentId))}; agent ${(0, import_chunk_tp3c5q2s.Kee)(String(y))} cannot stop it.`, "not_owner");
    if (o.source !== void 0) (0, import_chunk_41appe38.qCn)(o.session, R, { agentType: I.agentType }, w);
    if (I.status !== "running" && !((0, import_chunk_ed372ykp.$o)(I.status) && !(0, import_chunk_4yjj7pjs.kH)(R))) return (0, import_chunk_bzyb60p0.XI)(R, r), { taskId: R, taskType: I.type, command: I.description };
  }
  let K = I.status !== "running" && I.type === "monitor_ws" && o.source !== void 0, z = wo(I, R), q = z ? (0, import_chunk_4yjj7pjs.SFt)(R) : void 0;
  if (o.source !== void 0 && I.sweptByStop) import_chunk_ynbv8e5n.wue.of(o.session).closed.add(R);
  if (!(0, import_chunk_bzyb60p0.kx)(I) && !K && !z) {
    if (o.source !== void 0 && (0, import_chunk_4yjj7pjs.An)(I) && (I.status === "killed" && (!I.stoppedByUser || I.sweptByStop) || (0, import_chunk_trwykz8a.mn)().resumesInFlight.has(R))) hht(R, r, w);
    throw new qe(`Task ${L} is not running (status: ${I.status})`, "not_running", I.status);
  }
  if (!(0, import_chunk_z6hn62tj.Kf)(I) && !(0, import_chunk_sjqze7qg.vnn)(y, I.agentId)) {
    let N = (0, import_chunk_4yjj7pjs.An)(I) ? `The main session, the user or the agent itself can stop task ${L}` : `Task ${L} is owned by ${(0, import_chunk_tp3c5q2s.Kee)((0, import_chunk_sjqze7qg.wpr)(I.agentId))}`;
    throw new qe(`${N}; agent ${(0, import_chunk_tp3c5q2s.Kee)(String(y))} cannot stop it.`, "not_owner");
  }
  let V = zKe(I.type);
  if (!V) throw new qe(`Unsupported task type: ${I.type}`, "unsupported_type");
  if (o.source !== void 0) hht(R, r, w);
  if (z) {
    let N = (0, import_chunk_4yjj7pjs.tso)(R);
    if (N && !N.signal.aborted) N.abort();
    for (let ae of (0, import_chunk_4yjj7pjs.Xtn)(R)) ae.abort(new DOMException("workflow-abort", "AbortError"));
    let Q = new Set((0, import_chunk_4yjj7pjs.qSt)(R));
    if (I.type === "local_agent") Q.add(R);
    let ye = 0;
    for (let ae of Q) {
      if ((0, import_chunk_4yjj7pjs.SFt)(R) !== q) break;
      let Z = (0, import_chunk_bzyb60p0.hQt)(ae);
      (0, import_chunk_bzyb60p0.w_t)(Z), ye += (await Z).length;
    }
    return (0, import_chunk_bzyb60p0.bnt)(R, I.type === "local_agent" ? [R] : [], { expectedLoopToken: q }), { taskId: R, taskType: I.type, command: (0, import_chunk_sjqze7qg.If)(I) ? I.command : I.description, note: `had already ended (${I.status}) but its loop had not exited; re-signalled it and killed ${ye} process group(s). The record remains listed while the loop is still live.` };
  }
  let G = (0, import_chunk_bzyb60p0.pR)(I);
  if (await V.kill(R, r, h, k, w, o.source), G) {
    let N = I.agentId ?? R, Q = r.all(), ye = [];
    for (let ae of Object.values(Q)) {
      if (ae.type !== "local_agent" || ae.id === R || !(0, import_chunk_bzyb60p0.kx)(ae)) continue;
      if (eGo(ae, N, Q)) {
        ye.push(ae.id);
        continue;
      }
      if ((0, import_chunk_z6hn62tj.bBt)(ae, N, Q, V8t)) {
        if ((0, import_chunk_bzyb60p0.ZL)(ae.id, r), !(0, import_chunk_z6hn62tj.Kf)(ae)) (0, import_chunk_865at33z.dk)(ae.id, "stopped", { toolUseId: ae.toolUseId, summary: ae.description });
        if (o.source !== void 0) hht(ae.id, r, w);
        await V.kill(ae.id, r, h, k, w);
      }
    }
    tGo(N, ye, k, r);
  }
  let j = await nGo(R, r);
  if ((0, import_chunk_sjqze7qg.If)(I)) (0, import_chunk_nhpsytqr.YQ)(R, r);
  if ((0, import_chunk_sjqze7qg.If)(I) && I.agentId !== void 0 && y !== I.agentId) (0, import_chunk_6d4w1614.HJs)({ taskId: R, toolUseId: I.toolUseId, description: I.description, ownerAgentId: I.agentId });
  if ((0, import_chunk_sjqze7qg.If)(I) && I.agentId === void 0 && o.source !== void 0 && (0, import_chunk_bzyb60p0.uye)()) (0, import_chunk_6d4w1614.oCn)({ taskId: R, toolUseId: I.toolUseId, description: I.description, source: o.source, outputFile: I.elsewhere ? (0, import_chunk_hr2stdq7.sn)(I.outputFile) : I.outputFile });
  if (I.type === "mcp_task" && o.source !== void 0 && (0, import_chunk_bzyb60p0.uye)() && r.get(R)?.status === "killed") (0, import_chunk_6d4w1614.oCn)({ taskId: R, toolUseId: I.toolUseId, description: I.description, source: o.source, note: xa });
  let H = r.get(R);
  if (o.source !== void 0 && H?.status === "killed") rqs(H, r, o.source);
  let X = (0, import_chunk_sjqze7qg.If)(I) ? I.command : I.description;
  if (I.type === "mcp_task" && (0, import_chunk_bzyb60p0.uye)() && r.get(R)?.status === "killed") return { taskId: R, taskType: I.type, command: X, note: `(${(0, import_chunk_tp3c5q2s.Jb)(I.description)}) is stopped. Cancellations are fire and forget, so there is no confirmation from the MCP server, and it may already have done some of the work. Only check on it if the user asks.` };
  return { taskId: R, taskType: I.type, command: X, ...j > 0 && { endedLeftovers: j } };
}
async function get(e, o) {
  try {
    await Hzr(e, o), (0, import_chunk_cqa9hrgx.u)("task_stop_user");
  } catch (r) {
    if (r instanceof qe) {
      if (r.code === "not_found") {
        if ((0, import_chunk_ed372ykp.uG)("mcp_task", e)) {
          let y = ko.peek(o.session)?.restore;
          if (y !== void 0) return await y, get(e, o);
        }
        let h = Mzr.peek(o.session), g = h?.descriptions.get(e);
        if (o.source !== void 0 && h !== void 0 && g !== void 0 && !h.stopped.has(e) && (0, import_chunk_trwykz8a.WR)(e) === void 0 && (0, import_chunk_bzyb60p0.uye)()) h.stopped.add(e), h.replanWake(), oqs(e, g, o.source);
        if (o.source !== void 0 && (0, import_chunk_mzmcvr6c.tm)(e) !== null) {
          import_chunk_ynbv8e5n.wue.of(o.session).closed.add(e);
          let { resumesInFlight: y, stoppedWithNoRecord: k } = (0, import_chunk_trwykz8a.mn)();
          k.set(e, "writing"), (0, import_chunk_bzyb60p0.ctn)((0, import_chunk_mzmcvr6c.ro)(e), "stoppedByUser", () => (0, import_chunk_bzyb60p0.vq)((0, import_chunk_mzmcvr6c.ro)(e), { stoppedByUser: true }, o.storageV5, import_chunk_jv7av99m.kn), o.storageV5).then(() => {
            if (!y.has(e)) k.delete(e);
            else if (k.has(e)) k.set(e, "written");
          });
        }
        (0, import_chunk_cqa9hrgx.u)("task_stop_user");
        return;
      }
      if (r.code === "not_running" && r.taskStatus !== void 0 && (0, import_chunk_ed372ykp.$o)(r.taskStatus)) {
        (0, import_chunk_cqa9hrgx.u)("task_stop_user");
        return;
      }
      throw (0, import_chunk_cqa9hrgx.m)("task_stop_user", r.code), r;
    }
    throw (0, import_chunk_cqa9hrgx.m)("task_stop_user", "unexpected"), r;
  }
}
function uue(e) {
  let { taskRegistry: o, setAppState: r, shouldStop: h, leaveUnmarked: g, storageV5: y } = e, k = [];
  qJn(e);
  let w = o.all();
  for (let R of Object.values(w)) {
    let I = (0, import_chunk_bzyb60p0.pR)(R) && (0, import_chunk_z6hn62tj.ZQ)(R);
    if ((0, import_chunk_z6hn62tj.Kf)(R) || !I && (R.status !== "running" || !(0, import_chunk_z6hn62tj.uy)(R) || !(0, import_chunk_z6hn62tj.ZQ)(R)) || h !== void 0 && !h(R)) continue;
    if (g !== true) hht(R.id, o, y, e.leaveResumable);
    else if (R.type === "local_agent") (0, import_chunk_bzyb60p0.vq)((0, import_chunk_mzmcvr6c.ro)(R.id), { finished: true }, y, import_chunk_jv7av99m.kn).catch((x) => {
      (0, import_chunk_w578pjby.t)(`failed to record the end of ${R.id}: ${(0, import_chunk_bzyb60p0.KI)(x)}`, { level: "warn" });
    });
    if (R.type === "local_agent") (0, import_chunk_bzyb60p0.ZL)(R.id, o), (0, import_chunk_bzyb60p0.Heo)(R.id);
    if (zKe(R.type)?.kill(R.id, o, r, "system", y), R.type === "local_agent") (0, import_chunk_865at33z.dk)(R.id, "stopped", { toolUseId: R.toolUseId, summary: R.description });
    if (R.type === "local_agent" || R.type === "local_workflow" && R.toolUseId !== void 0) {
      let x = R.ownerAgentId && w[R.ownerAgentId];
      if ((0, import_chunk_bzyb60p0.Iyt)(R.ownerAgentId, x, true) === void 0) k.push({ ...R, sweptByStop: o.get(R.id)?.sweptByStop });
    }
  }
  return k;
}
function oqs(e, o, r) {
  if ((0, import_chunk_bzyb60p0.uye)()) (0, import_chunk_6d4w1614.oCn)({ taskId: e, description: o, source: r, note: r === "service" ? vt : Kr });
}
function mht(e, o) {
  if (!(0, import_chunk_bzyb60p0.uye)()) return;
  let r = (0, import_chunk_ynbv8e5n.jHt)() ? Na : La;
  for (let h of e) {
    if (h.type === "local_workflow") {
      Vr(h, o, (0, import_chunk_f9x2f6cx.ot)());
      continue;
    }
    let g;
    (0, import_chunk_sjqze7qg.Of)(() => {
      if ((0, import_chunk_bzyb60p0.GLt)(h.id)?.hookCaller === void 0 && !(0, import_chunk_bzyb60p0.Mlr)(h.id)) g = h.startedUnderUseCase;
    });
    try {
      (0, import_chunk_6d4w1614.oCn)({ taskId: h.id, toolUseId: h.toolUseId, description: h.description, source: o, note: (0, import_chunk_4yjj7pjs.An)(h) && h.sweptByStop && h.ownerCanContinueAgents !== false ? h.pendingMessages.some(({ origin: y }) => y?.kind === "coordinator" && y.plugin === void 0) ? `${r} ${Ma}` : r : o === "client" ? Kr : vt, ownTaskUseCase: g }), (0, import_chunk_cqa9hrgx.u)("task_swept_agent_notice");
    } catch (y) {
      (0, import_chunk_k449cc64.i)(y), (0, import_chunk_cqa9hrgx.m)("task_swept_agent_notice", "enqueue_failed");
    }
  }
}
function qJn(e) {
  for (let o of Object.values(e.taskRegistry.all())) if ((0, import_chunk_z6hn62tj.Kf)(o) && o.status === "running") zKe(o.type)?.kill(o.id, e.taskRegistry, e.setAppState, "system");
}
function hht(e, o, r, h = false) {
  o.update(e, (y) => (0, import_chunk_4yjj7pjs.An)(y) ? { ...y, stoppedByUser: true, sweptByStop: h && !y.stoppedByUser && y.agentType !== "main-session" || void 0, userStopCount: (y.userStopCount ?? 0) + 1 } : y.stoppedByUser ? y : { ...y, stoppedByUser: true });
  let g = o.get(e);
  if (g?.type === "local_agent") {
    let y = "agentType" in g && typeof g.agentType === "string" ? g.agentType : "general-purpose";
    $a(e, y, o, r);
  }
}
function wo(e, o) {
  return (0, import_chunk_ed372ykp.$o)(e.status) && (e.type === "local_agent" || e.type === "local_workflow") && !(0, import_chunk_4yjj7pjs.kH)(o);
}
async function $a(e, o, r, h) {
  await (0, import_chunk_bzyb60p0.ctn)((0, import_chunk_mzmcvr6c.ro)(e), "stoppedByUser", async () => {
    let g = await (0, import_chunk_bzyb60p0.aw)((0, import_chunk_mzmcvr6c.ro)(e), h, import_chunk_jv7av99m.kn), y = g === null ? void 0 : r.get(e)?.sweptByStop;
    if (g?.stoppedByUser && (y || !g.sweptByStop)) return;
    await (0, import_chunk_bzyb60p0.$He)((0, import_chunk_mzmcvr6c.ro)(e), { ...g ?? { agentType: o }, stoppedByUser: true, sweptByStop: y }, h);
  }, h);
}
class So {
  confirmed;
}
var Xr = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ task_id: (0, import_chunk_adx6804h.n)().optional().describe("The ID of the background task to stop. Agent-team teammates and named background agents are also accepted by agent ID or name."), shell_id: (0, import_chunk_adx6804h.n)().optional().describe("Deprecated: use task_id instead") })), Fa = (0, import_chunk_2cbgkbm2.p)(() => Xr().extend((0, import_chunk_syr33dp2.Mle)())), za = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().describe("Status message about the operation"), task_id: (0, import_chunk_adx6804h.n)().describe("The ID of the task that was stopped"), task_type: (0, import_chunk_adx6804h.n)().describe("The type of the task that was stopped"), command: (0, import_chunk_adx6804h.n)().optional().describe("The command or description of the stopped task") })), Wt = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "494fa910-e620-5236-be05-9f7b68bfea0a", name: import_chunk_s1btam0h.Ra, searchHint: "kill a running background task", aliases: [...import_chunk_s1btam0h.Uin], backgrounding: "never", maxResultSizeChars: 1e5, userFacingName: () => "Stop Task", get remoteExecution() {
  return { supported: (0, import_chunk_sjqze7qg.hae)() };
}, get inputSchema() {
  return (0, import_chunk_sjqze7qg.hae)() ? Fa() : Xr();
}, get outputSchema() {
  return za();
}, whenToUse: "When you are about to end a background task, a teammate or a background agent that is still running, use it with the task's id or the agent's name.", shouldDefer: true, isConcurrencySafe() {
  return true;
}, toAutoClassifierInput(e) {
  return e.task_id ?? e.shell_id ?? "";
}, async description() {
  return "Stop a running background task by ID";
}, async prompt() {
  return import_chunk_s1btam0h.Wul;
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: (0, import_chunk_w578pjby._)({ ...e, message: (0, import_chunk_37zqqqnw.zne)(e.message), command: e.command && (0, import_chunk_37zqqqnw.zne)(e.command) }) };
}, renderToolUseMessage() {
  return "";
}, create(e) {
  return { async validateInput(o, r) {
    let { taskRegistry: h, namedAgents: g } = e;
    if ((0, import_chunk_syr33dp2.Ic)(o)) return { result: false, message: (0, import_chunk_syr33dp2.cwe)(), errorCode: 3 };
    let y = o.task_id ?? o.shell_id;
    if (!y) return { result: false, message: "Missing required parameter: task_id", errorCode: 1 };
    let k = r.remoteCall;
    if (k !== void 0) return k.ownBackgroundShells?.holds(y) === true ? { result: true } : { result: false, message: Yr(y, k), errorCode: 1 };
    let w = h.get(y), R;
    if (!w) {
      let I = $t(y, h, g);
      if (I.status === "ambiguous") return { result: false, message: I.message, errorCode: 1 };
      if (I.status === "found") w = I.task;
      else R = I.suggestion;
    }
    if (!w) {
      let I = (0, import_chunk_sjqze7qg.PCe)(e), x = (0, import_chunk_sjqze7qg.hae)() ? e.toolState.get(import_chunk_sjqze7qg.KFt).find(y, I) : void 0;
      return { result: false, message: x !== void 0 ? `Task ${y} needs ${import_chunk_syr33dp2.io}: "${x.hostName}".` : To(y, h, g, R, I), errorCode: 1 };
    }
    if (!(0, import_chunk_bzyb60p0.kx)(w) && !(0, import_chunk_z6hn62tj.Kf)(w) && !wo(w, w.id)) return { result: false, message: `Task ${y} is not running (status: ${w.status})`, errorCode: 3 };
    return { result: true };
  }, async call({ task_id: o, shell_id: r }, h) {
    let { taskRegistry: g, setTaskKillState: y, namedAgents: k } = e, w = o ?? r;
    if (!w) throw Error("Missing required parameter: task_id");
    let R = h.remoteCall;
    if (R !== void 0) return { data: { message: R.ownBackgroundShells?.stop(w) === true ? `Successfully stopped background command ${w} on ${R.origin.hostName}` : Yr(w, R), task_id: w, task_type: "local_bash" } };
    let x = await (() => Hzr(w, { taskRegistry: g, setAppState: y, session: e.session, getAppState: k, callerAgentId: (0, import_chunk_sjqze7qg.PCe)(e), killedBy: "parent", storageV5: e.storageV5 }))();
    return { data: { message: await e.toolState.get(So).confirmed?.(x.taskId, h.signal) === false ? `Task ${x.taskId} may still be running: the machine that runs it did not confirm the stop. Another ${import_chunk_s1btam0h.Ra} cannot reach it, and no notice will come when it ends.` : x.note ? `Task ${x.taskId} ${x.note}` : `Successfully stopped task: ${x.taskId} (${x.command})${x.endedLeftovers === void 0 ? "" : `. Also stopping ${x.endedLeftovers} ${(0, import_chunk_7cfjrnwy.O)(x.endedLeftovers, "process", "processes")} left running by its earlier commands or those of agents it started.`}`, task_id: x.taskId, task_type: x.taskType, command: x.command } };
  } };
} });
function Yr(e, o) {
  return `No background command with ID ${e} is running on ${o.origin.hostName} for this session: it has already finished or been stopped, or it was never this session's.`;
}
(0, import_chunk_adx6804h.B)();
var Wa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ file_uuid: (0, import_chunk_adx6804h.n)(), file_name: (0, import_chunk_adx6804h.n)(), size: (0, import_chunk_adx6804h.E)(), is_image: (0, import_chunk_adx6804h.P)(), media_type: (0, import_chunk_adx6804h.n)().optional() }).describe("A file already uploaded to the filestore (e.g. by the device attach_file tool). Passed through without local stat or upload.")), Zr = "The message for the user. Supports markdown formatting.", Ba = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ message: (0, import_chunk_adx6804h.n)().describe(Zr), attachments: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), Wa()])).optional().describe("Optional attachments for the user to see alongside your message. Each entry is either a file path (absolute or relative to cwd) for a file you can read locally, or a pre-resolved {file_uuid, file_name, size, is_image} object you obtained from a device tool such as attach_file."), status: (0, import_chunk_adx6804h.F)(["normal", "proactive"]).describe("Use 'proactive' when you're surfacing something the user hasn't asked for and needs to see now \u2014 task completion while they're away, a blocker you hit, an unsolicited status update. Use 'normal' when replying to something the user just said.") })), ja = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().describe(Zr) }));
function Qr(e) {
  return (0, import_chunk_1dkksxs0.Ax)() && "attachments" in e ? e.attachments : void 0;
}
var Ua = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().describe("The message"), attachments: (0, import_chunk_adx6804h.C)((0, import_chunk_crteww1n.z6r)()).optional().describe("Resolved attachment metadata"), sentAt: (0, import_chunk_adx6804h.n)().optional().describe("ISO timestamp captured at tool execution on the emitting process. Optional \u2014 resumed sessions replay pre-sentAt outputs verbatim."), rendered_locally: (0, import_chunk_adx6804h.P)().optional() })), en = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "57844dfe-7eef-5f2b-9ef0-6648fbe0f82b", name: import_chunk_4x1jja6d.Ac, aliases: [import_chunk_4x1jja6d.Ooe], searchHint: "send a message to the user \u2014 your primary visible output channel", briefStandalone: true, backgrounding: "never", maxResultSizeChars: 1e5, userFacingName() {
  return "";
}, get inputSchema() {
  return (0, import_chunk_1dkksxs0.Ax)() ? Ba() : ja();
}, get outputSchema() {
  return Ua();
}, isEnabled() {
  return (0, import_chunk_1dkksxs0.Ax)() || (0, import_chunk_02cqsykt.vWe)();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return e.message;
}, async description() {
  return import_chunk_4x1jja6d.bYi;
}, async prompt() {
  return (0, import_chunk_1dkksxs0.Ax)() ? import_chunk_4x1jja6d.wYi : import_chunk_4x1jja6d.kYi;
}, mapToolResultToToolResultBlockParam(e, o) {
  let r = (e.attachments ?? []).map((R) => ({ ...R, path: (0, import_chunk_kx2fp6pc.Iu)(R.path), ...R.upload_error !== void 0 && { upload_error: (0, import_chunk_kx2fp6pc.mh)(R.upload_error) } })), h = r.filter((R) => R.upload_error !== void 0), g = r.length - h.length, y = (0, import_chunk_crteww1n.X6r)(r), k = (g === 0 ? "" : ` (${g} ${(0, import_chunk_7cfjrnwy.O)(g, "attachment")} included)`) + (y === void 0 ? "" : `
${y}`);
  if (h.length === 0) return { tool_use_id: o, type: "tool_result", content: `${import_chunk_4x1jja6d.phn}${k}` };
  let w = h.map((R) => `  ${R.path}: ${(0, import_chunk_fbqj9ad4.Qco)(R)}`).join(`
`);
  if (e.rendered_locally) return { tool_use_id: o, type: "tool_result", content: `${import_chunk_4x1jja6d.phn}${k}
${h.length} ${(0, import_chunk_7cfjrnwy.O)(h.length, "attachment")} ${import_chunk_4x1jja6d.UIr} \u2014 only visible in the desktop app on this machine:
` + w + `
Tell the user the ${(0, import_chunk_7cfjrnwy.O)(h.length, "attachment is", "attachments are")} only visible in the desktop app, and why.${(0, import_chunk_fbqj9ad4.jLn)(h)}` };
  return { tool_use_id: o, type: "tool_result", is_error: true, content: `${import_chunk_4x1jja6d.phn}${k}
${h.length} ${(0, import_chunk_7cfjrnwy.O)(h.length, "attachment")} could NOT be delivered:
` + w + `
Tell the user the ${(0, import_chunk_7cfjrnwy.O)(h.length, "attachment was", "attachments were")} not delivered and why.${(0, import_chunk_fbqj9ad4.jLn)(h)}` };
}, renderToolUseMessage() {
  return "";
}, create(e) {
  return { async validateInput(o) {
    let r = Qr(o);
    if (!r?.length) return { result: true };
    return (0, import_chunk_crteww1n.q6r)(r, e.permissions());
  }, async call(o, r) {
    let { message: h } = o, g = Qr(o), y = (/* @__PURE__ */ new Date()).toISOString(), k = (0, import_chunk_crteww1n.V6r)({ replBridgeEnabled: e.replBridgeEnabled() });
    if ((0, import_chunk_y53wbr8a.a)("tengu_brief_send", { proactive: "status" in o && o.status === "proactive", attachment_count: g?.length ?? 0, ignored_attachments: g === void 0 && "attachments" in o, upload_lane: (0, import_chunk_78g0060s.f)(k) }), !g?.length) return { data: { message: h, sentAt: y } };
    let { verdict: w, judged: R } = await (0, import_chunk_crteww1n.vRa)(g, e.permissions());
    if (!w.result) throw new import_chunk_jv7av99m.A(w.message, "attachment refused at the call");
    let I = await (0, import_chunk_crteww1n.Y6r)(g, { lane: k, signal: r.signal, credentials: e.credentials, judged: R });
    return { data: { message: h, attachments: I, sentAt: y, ...(0, import_chunk_crteww1n.K6r)(k) && { rendered_locally: true } } };
  } };
} });
(0, import_chunk_adx6804h.B)();
class Bt extends Error {
  constructor(e) {
    super(e);
    this.name = "ScheduleWakeupInputError";
  }
}
var Ha = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ delaySeconds: (0, import_chunk_339n78pp.z6)((0, import_chunk_adx6804h.E)()).optional().describe("Seconds from now to wake up. Clamped to [60, 3600] by the runtime. Required unless `stop` is true."), reason: (0, import_chunk_adx6804h.n)().optional().describe("One short sentence explaining the chosen delay. Goes to telemetry and is shown to the user. Be specific. Required unless `stop` is true."), prompt: (0, import_chunk_adx6804h.n)().optional().describe(`The /loop input to fire on wake-up. Pass the same /loop input verbatim each turn so the next firing re-enters the skill and continues the loop. For autonomous /loop (no user prompt), pass the literal sentinel \`${import_chunk_xfj2cwfv.ect}\` instead (the dynamic-pacing variant, not the CronCreate-mode \`${import_chunk_xfj2cwfv.D6t}\`). Required unless \`stop\` is true.`), stop: (0, import_chunk_adx6804h.P)().optional().describe("Set to true to end the dynamic loop immediately instead of scheduling another wakeup. When true, all other fields are ignored and no further wakeups fire."), noop: (0, import_chunk_adx6804h.P)().optional().describe("true = nothing changed (you checked and there is nothing to report). false = something happened worth keeping (edited a file, posted a message, advanced state, surfaced a finding). Consecutive noop:true ticks are collapsed in the user's terminal view and tracked as a streak. Required unless `stop` is true.") })), qa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ scheduledFor: (0, import_chunk_adx6804h.E)().describe("Epoch ms timestamp when the next wakeup will fire"), clampedDelaySeconds: (0, import_chunk_adx6804h.E)().describe("Actual delay used after clamping to runtime bounds"), wasClamped: (0, import_chunk_adx6804h.P)().describe("True if the requested delaySeconds was outside [60, 3600]"), stopped: (0, import_chunk_adx6804h.P)().optional().describe("True when the model ended the loop via `stop: true`"), cancelledWakeups: (0, import_chunk_adx6804h.E)().optional().describe("How many pending dynamic-loop wakeups stop:true cancelled. 0 means nothing was pending \u2014 a recurring /loop cron is not cancelled by stop:true.") })), tn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "b944345a-355c-5b28-96da-9bda542c205a", name: import_chunk_xfj2cwfv.bl, searchHint: `self-pace the dynamic /loop: pick a delay before the next tick, or stop/end/cancel the dynamic loop with stop:true (a fixed-interval /loop is a recurring cron \u2014 cancel it with ${import_chunk_xfj2cwfv.sT})`, backgrounding: "never", maxResultSizeChars: 1e3, async description() {
  return import_chunk_xfj2cwfv.UMl;
}, async prompt() {
  let e = (0, import_chunk_bzyb60p0.t7)("repl_main_thread", { ignoreOverage: true }), o = (0, import_chunk_bzyb60p0.t7)("sdk", { ignoreOverage: true });
  return (0, import_chunk_xfj2cwfv.$Ml)(e === o ? e : void 0);
}, get inputSchema() {
  return Ha();
}, get outputSchema() {
  return qa();
}, userFacingName() {
  return "";
}, isEnabled() {
  return true;
}, shouldDefer: false, toAutoClassifierInput(e) {
  if (e.stop === true) return "stop the /loop \u2014 cancel pending wakeups, schedule nothing";
  if (e.delaySeconds == null || e.prompt == null) return `malformed ${import_chunk_xfj2cwfv.bl} call missing delaySeconds/prompt \u2014 the tool will reject it`;
  return `wake in ${e.delaySeconds}s: ${e.prompt}`;
}, renderToolUseMessage() {
  return null;
}, create(e) {
  let { permissions: o } = e;
  return { async checkPermissions(r) {
    if (o().mode === "auto") return { behavior: "passthrough", message: "Scheduling a /loop wakeup requires classifier review." };
    return { behavior: "allow", updatedInput: r };
  }, async call(r, { toolUseId: h }) {
    let { delaySeconds: g, reason: y, prompt: k, stop: w } = r, R = w !== true && (0, import_chunk_6c0jwb75.Ufe)(e) ? import_chunk_6c0jwb75.Qao : void 0;
    if (R !== void 0) throw (0, import_chunk_w578pjby.t)(`ScheduleWakeup refused: ${R}`), new Bt(R);
    if (w === true) return { data: { scheduledFor: 0, clampedDelaySeconds: 0, wasClamped: false, stopped: true, cancelledWakeups: (0, import_chunk_qh0nzvn2.yMe)() } };
    if (g === void 0 || y === void 0) throw new Bt("`delaySeconds` and `reason` are required when `stop` is not true.");
    if (k === void 0) throw new Bt("`prompt` is required when `stop` is not true.");
    let I = (0, import_chunk_qh0nzvn2.g9r)(g, k, y, h, e);
    if (I === null) return { data: { scheduledFor: 0, clampedDelaySeconds: 0, wasClamped: false } };
    return { data: { scheduledFor: I.scheduledFor, clampedDelaySeconds: I.clampedDelaySeconds, wasClamped: I.wasClamped } };
  } };
}, mapToolResultToToolResultBlockParam({ scheduledFor: e, clampedDelaySeconds: o, wasClamped: r, stopped: h, cancelledWakeups: g }, y) {
  let k = (0, import_chunk_1dkksxs0.Ax)(), w = `Then ${(0, import_chunk_xfj2cwfv.L6t)({ briefMode: k })} \u2014 and end the turn.`;
  if (h === true) {
    let q = `If you armed a ${import_chunk_9xt9z453.Xo} for this loop, ${import_chunk_s1btam0h.Ra} it now. ${w}`;
    if (g === 0) return { tool_use_id: y, type: "tool_result", content: `Loop stopped \u2014 any dynamic loop in this session is ended; there was no pending wakeup to cancel. If you are running a fixed-interval /loop (a recurring cron), it is NOT stopped by this call \u2014 cancel it with ${import_chunk_xfj2cwfv.sT}. ${q}` };
    let V = g === void 0 ? "no further wakeups scheduled" : `cancelled ${g} pending wakeup(s); no further dynamic-loop wakeups scheduled`;
    return { tool_use_id: y, type: "tool_result", content: `Loop stopped \u2014 ${V}. ${q}` };
  }
  if (e === 0) return { tool_use_id: y, type: "tool_result", content: `Wakeup not scheduled. The loop reached its maximum duration \u2014 the loop has ended; do not re-issue. Tell the user that it has ended, and that after a minute they can start it again with the same /loop command; write that command out, prompt included. ${w}` };
  let R = new Date(e).toTimeString().slice(0, 8), I = Math.max(0, Math.round((e - Date.now()) / 1e3)), x = r ? ` (clamped to ${o}s from your requested value)` : "", L = k ? `send it now via ${import_chunk_4x1jja6d.Ac} (\`status: 'proactive'\`) \u2014 plain response text is treated as unread in this session` : "write it now as ordinary response text", K = (0, import_chunk_865at33z.dt)(), z = (0, import_chunk_0djtvg5h.CV)((0, import_chunk_865at33z.St)(K), K) ? `When this call is your only tool call, the turn ends when it returns \u2014 there is no post-arm slot for a status update, so ${k ? `send the per-tick update via ${import_chunk_4x1jja6d.Ac} (\`status: 'proactive'\`)` : "write the per-tick update as ordinary response text"} immediately BEFORE calling ${import_chunk_xfj2cwfv.bl}. If you are reading this mid-turn, end the turn now \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.` : `If you owe the user a status update this tick, ${L}; then end the turn \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.`;
  return { tool_use_id: y, type: "tool_result", content: `Next wakeup scheduled for ${R} (in ${I}s)${x}. ${z}` };
} });
(0, import_chunk_adx6804h.B)();
var Ga = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ results: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ title: (0, import_chunk_rnm2beqc.we)().optional().default(""), url: (0, import_chunk_rnm2beqc.we)().optional().default(""), snippet: (0, import_chunk_rnm2beqc.we)().optional().default("") })).optional().default([]), error: (0, import_chunk_rnm2beqc.on)({ error_type: (0, import_chunk_rnm2beqc.we)(), error_message: (0, import_chunk_rnm2beqc.we)() }).nullable().optional() })), jt = 1e4, Ka = import_chunk_tt4yhkc0.ME, Va = 5e3, Ya = 2e3, Xa = 2e4, Qa = 4e4, bo = /[^\P{Cc}\t\n]|[\u2028\u2029]/gu, Za = 500, Ja = 2048;
function rn(e) {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return false;
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY) return false;
  return !!(0, import_chunk_t9fn978c.vBt)(e);
}
async function nn(e, o, r, h, g, y, k = { inSubagent: false, mayHoldPageText: false }) {
  let w = await (0, import_chunk_t9fn978c.UMi)({ session: e, route: "web-search", toolName: "WebSearch", logLabel: "websearch-proxy", targetErrorLabel: "search error", body: { query: o, ...h?.allowed_domains?.length && { allowed_domains: h.allowed_domains }, ...h?.blocked_domains?.length && { blocked_domains: h.blocked_domains }, ...g && { search_profile: g } }, schema: Ga(), signal: r });
  if (!w.ok) return w;
  let R = w.data.results.filter((j) => j.url);
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSEARCH_CITATIONS || k.inSubagent) {
    let j = k.mayHoldPageText ? Ro(R, o, k.inSubagent) : void 0;
    if (j !== void 0) return { ok: true, results: j, plainPageText: true };
    return { ok: true, results: (import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSEARCH_CITATIONS ? Ut(R, 0) : R).map((H) => ({ title: H.title, url: H.url })) };
  }
  let I = (0, import_chunk_865at33z.b)("tengu_lexical_cupcake", jt), x = typeof I === "number" && I >= 1 && I < jt ? I : jt, L = (0, import_chunk_865at33z.b)("tengu_curried_shore", 0);
  if (!(L > 0) || y === void 0) return { ok: true, results: Ut(R, x) };
  let { soFar: K, compactsAt: z, bytesPerToken: q } = y(), V = 0;
  for (let j of (0, import_chunk_865at33z.Or)(K)) {
    if (j.type !== "user" || (0, import_chunk_f9x2f6cx.Hu)(j) || !Array.isArray(j.message.content)) continue;
    for (let H of j.message.content) {
      if (!(0, import_chunk_jsm9pvcb.Wi)(H) || H.type !== "tool_result" || !Array.isArray(H.content)) continue;
      for (let X of H.content) if ((0, import_chunk_jsm9pvcb.Wi)(X) && X.type === "search_result") V += (0, import_chunk_c1hnv4fm.Gfe)(X, q);
    }
  }
  let G = Math.floor(z * L);
  return { ok: true, results: Ut(R, G > 0 && V >= G ? Math.min(x, Math.floor(Va / R.length)) : x) };
}
function Ro(e, o, r) {
  let h = (0, import_chunk_ht27b0vz.nvr)(), g = r ? h.subagent_chars : h.main_chars;
  if (!(g >= 1)) return;
  let y = Ut(e.filter((k) => k.url.search(bo) === -1).map((k) => ({ title: k.title.replace(bo, " "), url: k.url, snippet: (0, import_chunk_bzyb60p0.mes)(k.snippet.replace(bo, " ")) })), Math.min(g, Ya, Math.floor(Xa / e.length)));
  return o.length + (0, import_chunk_w578pjby._)(y).length <= Qa ? y : void 0;
}
function Ut(e, o = jt) {
  let r = Ka;
  return e.flatMap((h) => {
    if (Co(h.url, Ja) !== h.url) return [];
    let g = Co(h.snippet, Math.min(o, r));
    return r -= g.length, [{ title: Co(h.title, Za), url: h.url, ...g && { snippet: g } }];
  });
}
function Co(e, o) {
  return (0, import_chunk_yq00hd9s._yo)((0, import_chunk_hr2stdq7.uK)("system-reminder", (0, import_chunk_7cfjrnwy.ee)(e.trimStart(), o)), import_chunk_k449cc64.BEe).trim();
}
var an = new import_chunk_pzzqg6s3.ze(() => ({}));
(0, import_chunk_adx6804h.B)();
var rGo = "You run a web search for another Claude model, which is waiting on the result and can search again. Search once, then reply with a brief summary of the results.", oGo = 8;
function sGo(e) {
  return "Perform a web search for the query: " + e;
}
var sqs = 500, iqs = 100, aqs = 2e3, lqs = 8192, dqs = 1e5, cqs = 1e3, uqs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(/^[\w-]{1,128}$/)), el = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.zn)("type", [(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("server_tool_use") }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("web_search_tool_result"), tool_use_id: uqs(), content: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ title: (0, import_chunk_adx6804h.n)().max(aqs), url: (0, import_chunk_adx6804h.n)().max(lqs) })).max(iqs), (0, import_chunk_adx6804h.c)({ error_code: (0, import_chunk_adx6804h.n)().regex(/^\w{1,64}$/) })]) }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)().max(dqs) })])).max(sqs)), vh = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("type", [(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("reply"), blocks: el() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("failed"), message: (0, import_chunk_adx6804h.n)().max(cqs) })]));
var ol = null;
function qt() {
  return (0, import_chunk_ht27b0vz.ybo)() ? ol : null;
}
var pn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ query: (0, import_chunk_adx6804h.n)().min(2).describe("The search query to use"), allowed_domains: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().describe("Only include search results from these domains"), blocked_domains: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().describe("Never include search results from these domains") })), rl = (0, import_chunk_2cbgkbm2.p)(() => pn().extend({ mode: (0, import_chunk_adx6804h.F)(["standard", "extended"]).describe((0, import_chunk_ht27b0vz.Ldn)()?.mode_description ?? "").prefault("extended") })), nl = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.c)({ title: (0, import_chunk_adx6804h.n)().describe("The title of the search result"), url: (0, import_chunk_adx6804h.n)().describe("The URL of the search result"), snippet: (0, import_chunk_adx6804h.n)().optional().describe("Page text. PostToolUse hooks get it; tool_use_result does not.") });
  return (0, import_chunk_adx6804h.c)({ tool_use_id: (0, import_chunk_adx6804h.n)().describe("ID of the tool use"), content: (0, import_chunk_adx6804h.C)(e).describe("Array of search hits") });
});
function ln({ snippet: e, ...o }) {
  return o;
}
var sl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ query: (0, import_chunk_adx6804h.n)().describe("The search query that was executed"), results: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([nl(), (0, import_chunk_adx6804h.n)()])).describe("Search results and/or text commentary from the model"), durationSeconds: (0, import_chunk_adx6804h.E)().describe("Time taken to complete the search operation"), searchCount: (0, import_chunk_adx6804h.E)().optional().describe("Number of web searches performed"), plainPageText: (0, import_chunk_adx6804h.v)(true).optional().describe("@internal The hits hold page text that goes to the model in the plain string, even with citations on") })), il = /^[\w+/=-]*$/;
function cn(e, o) {
  return e?.plainPageText ? { ...o, plainPageText: true } : o;
}
function ll(e) {
  if (e === void 0) return false;
  let o = (0, import_chunk_zmb62hr5.Yt)((0, import_chunk_865at33z.St)(e, { identity: true, overridesMap: {} }));
  return (0, import_chunk_zhr7rpv7.kd)(o) !== void 0 && !(0, import_chunk_865at33z.RGe)(o, "claude-opus-5-5");
}
function un(e, o, r) {
  let h = [], g = "", y = 0, k = 0;
  for (let w of e) {
    if (w.type === "server_tool_use") {
      if (y++, g.trim().length > 0) h.push(g.trim());
      g = "";
      continue;
    }
    if (w.type === "web_search_tool_result") {
      if (k++, !Array.isArray(w.content)) {
        let I = `Web search error: ${w.content.error_code}`;
        (0, import_chunk_w578pjby.t)(I, { level: "error" }), h.push(I);
        continue;
      }
      let R = w.content.map((I) => ({ title: I.title, url: I.url }));
      h.push({ tool_use_id: w.tool_use_id, content: R });
    }
    if (w.type === "text") g += w.text;
  }
  if (g.trim().length > 0) h.push(g.trim());
  return { query: o, results: h, durationSeconds: r, searchCount: Math.max(y, k) };
}
function dn(e) {
  if (!e?.query) return null;
  return (0, import_chunk_f64qna2j.Us)(e.query, import_chunk_tt4yhkc0.Yx);
}
var hn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "877a390e-2e45-5c4a-bacd-d71baac80f0d", name: import_chunk_ht27b0vz.Wc, searchHint: "search the web for current information", backgrounding: "detach", maxResultSizeChars: 1e5, whenToUse: "When you are about to answer from memory on something recent or past your knowledge cutoff, use it and not memory alone.", shouldDefer: true, async description(e) {
  return `Claude wants to search the web for: ${e.query}`;
}, userFacingName() {
  return "Web Search";
}, getToolUseSummary: dn, getActivityDescription(e) {
  let o = dn(e);
  return o ? `Searching for ${o}` : "Searching the web";
}, isEnabled() {
  if (!(0, import_chunk_2nv4wrez.Rn)(import_chunk_ht27b0vz.zSl)) return false;
  let e = (0, import_chunk_zhr7rpv7.ve)();
  if (e === "firstParty" || (0, import_chunk_zhr7rpv7.RI)(e)) return true;
  if (e === "gateway") return false;
  if (e === "vertex") return (0, import_chunk_865at33z.KAs)((0, import_chunk_865at33z.St)((0, import_chunk_865at33z.dt)()));
  if (e === "foundry") return true;
  return false;
}, get inputSchema() {
  return (0, import_chunk_ht27b0vz.Ldn)() ? rl() : pn();
}, get outputSchema() {
  return sl();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, coerceInput(e) {
  if ((0, import_chunk_ht27b0vz.Ldn)() || !(0, import_chunk_ma3kja9f.T)(e) || !("mode" in e)) return null;
  let { mode: o, ...r } = e;
  return { input: r, shapeClass: "mode_while_off" };
}, toAutoClassifierInput(e) {
  return qt()?.queryAsSent(e.query, e) ?? e.query;
}, async prompt({ model: e, leanPrompt: o }) {
  let r = (0, import_chunk_ht27b0vz.XSl)(e, o), h = qt()?.SEARCH_SERVICE_PROMPT ?? (0, import_chunk_ht27b0vz.Ldn)()?.web_search_addendum;
  return h ? `${r.trimEnd()}

${h}
` : r;
}, renderToolUseMessage({ query: e, allowed_domains: o, blocked_domains: r }, { verbose: h }) {
  if (!e) return null;
  let g = `"${e}"`;
  if (h) {
    if (o && o.length > 0) g += `, only allowing domains: ${o.join(", ")}`;
    if (r && r.length > 0) g += `, blocking domains: ${r.join(", ")}`;
  }
  return g;
}, extractSearchText() {
  return "";
}, create(e) {
  return { async checkPermissions(o) {
    return { behavior: "passthrough", message: "WebSearchTool requires permission.", suggestions: [{ type: "addRules", rules: [{ toolName: import_chunk_ht27b0vz.Wc }], behavior: "allow", destination: "localSettings" }] };
  }, async validateInput(o) {
    let { query: r, allowed_domains: h, blocked_domains: g } = o;
    if (!r.length) return { result: false, message: "Error: Missing query", errorCode: 1 };
    if (h?.length && g?.length) return { result: false, message: "Error: Cannot specify both allowed_domains and blocked_domains in the same request", errorCode: 2 };
    let y = qt()?.searchServiceInputRefusal(r, o);
    if (y) return { result: false, message: y, errorCode: 3 };
    return { result: true };
  }, async call(o, { signal: r, onProgress: h, timing: g, toolUseId: y, parentMessage: k }) {
    let w = e, R = performance.now(), { query: I } = o, x = (0, import_chunk_ht27b0vz.YUi)(o) ? "fast" : void 0, L = w.taskRegistry.getWebSearchBudget();
    if (!L.tryConsume()) {
      let oe = (0, import_chunk_4yjj7pjs.Lss)(), se = L.refillsPerHour(), ge = L.msUntilNextCall();
      (0, import_chunk_cqa9hrgx.m)("tool_web_search", "web_search_session_cap", { max_web_searches_per_session: oe, web_search_refills_per_hour: se, ...Number.isFinite(ge) && { ms_until_next_web_search: ge } });
      let re = (0, import_chunk_f9x2f6cx.Se)() ? "turn" : "session", De = `${oe} ${import_chunk_ht27b0vz.Wc} ${(0, import_chunk_7cfjrnwy.O)(oe, "call")}`, tt = se > 0, uo = re === "turn" ? `limit: ${De} per turn, shared by every agent in it` : `limit: ${De}, shared by every agent in this session; it does not refill`, Bi = tt ? `limit: ${De} shared by every agent in this ${re}; the budget refills at about ${se} ${(0, import_chunk_7cfjrnwy.O)(se, "call")} per hour, so searching becomes possible again later in the ${re}` : uo, ji = tt ? "Do not pause or wait for the refill: continue with the information already gathered and say so in your answer" : "Continue with the information already gathered instead of searching again, and say so in your answer", rr = [...re === "turn" ? ["tell the user they can send a follow-up message after this reply to continue the search"] : [], ...(0, import_chunk_3t7ve0wy.iyn)() ? [re === "turn" ? "ask them to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION" : "ask the user to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION"] : []], Ui = rr.length > 0 ? ` If more searches are genuinely needed, ${rr.join(", or ")}.` : "";
      return st({ query: I, results: [`Web search was not performed: this ${re}'s web search budget is used up (${Bi}). ${ji}; do not work around the limit by querying search engines with curl or wget from ${import_chunk_hn3cwwzt.ke}, by querying them in a browser or through a computer-use tool, or by searching or fetching through a third-party reader, proxy or archive service.${Ui}`], durationSeconds: 0, searchCount: 0 });
    }
    let K = () => {
      let oe = (0, import_chunk_865at33z.b)("tengu_plum_vx3", false);
      return { useHaiku: oe, model: oe ? (0, import_chunk_865at33z.Wx)() : w.loopModel() };
    }, z = an.peek(w.session)?.search;
    if (z !== void 0) {
      let oe = g?.mark("external"), se = await z({ query: I, allowed_domains: o.allowed_domains, blocked_domains: o.blocked_domains, model: (0, import_chunk_865at33z.Fb)(K().model), search_profile: x, sampling_declaration: await (0, import_chunk_gq1dr8pm.fms)({ querySource: "web_search_tool", permissionContext: w.permissions(), toolNames: ["web_search"] }) }, r).finally(oe);
      h?.({ type: "progress", toolUseID: "search-elsewhere-1", data: { type: "search_results_received", resultCount: se.reduce((re, De) => De.type === "web_search_tool_result" && Array.isArray(De.content) ? re + De.content.length : re, 0), query: I } });
      let ge = un(se, I, (performance.now() - R) / 1e3);
      if (ge.results.length === 0) throw new import_chunk_jv7av99m.A("The search was cut off before any results arrived. Try again.", "web-search-elsewhere-empty");
      return st(ge);
    }
    let q = qt();
    if (q) {
      let oe = g?.mark("external"), se = await q.searchViaSearchService(I, o, r, () => L.acquireDirectSearchSlot()).finally(oe);
      if (!se.ok) throw new import_chunk_jv7av99m.A(se.message, "web-search-service");
      return h?.({ type: "progress", toolUseID: "search-service-1", data: { type: "search_results_received", resultCount: se.results.length, query: I } }), st({ query: I, results: [{ tool_use_id: "search-service-1", content: w.agentId !== void 0 && import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSEARCH_CITATIONS ? se.results.map(ln) : se.results }, ...se.leftOut > 0 ? [`${se.leftOut} ${(0, import_chunk_7cfjrnwy.O)(se.leftOut, "result")} left out by allowed_domains or blocked_domains.`] : []], durationSeconds: (performance.now() - R) / 1e3, searchCount: 1 });
    }
    let V = w.permissions(), G = k !== void 0 && !k.isVirtual && Array.isArray(k.message.content) && k.message.content.some((oe) => oe.type === "tool_use" && oe.id === y) && [k.message.model, w.loopModel(), w.modelBeforeFallback(), w.modelNamedForLoop(), w.modelFacts().model].every(ll) && w.sentToolDescription(import_chunk_ht27b0vz.Wc)?.includes(import_chunk_ht27b0vz.Sbo) === true && (w.tools.some((oe) => (0, import_chunk_4vsz8a99.gt)(oe, import_chunk_ww0784kh.Gn)) || (0, import_chunk_bzyb60p0.zyt)(w.tools, V, { ...w.agentDefinitions, depth: (0, import_chunk_865at33z.oh)(w.agentContext) })) && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_WEB_FETCH && (0, import_chunk_fc3gfgch.R7)() === void 0 && (0, import_chunk_2nv4wrez.Rn)(import_chunk_ww0784kh.DRe) && !w.session.host.launchOptions.ccrSessionLimited() && ![...(0, import_chunk_ht27b0vz.Vs)(V), ...(0, import_chunk_ht27b0vz.al)(V)].some((oe) => (0, import_chunk_ht27b0vz.jc)(V, { name: import_chunk_ww0784kh.Gn }, oe)) && V.mode !== "dontAsk" && !["PreToolUse", "PostToolUse", "PermissionRequest"].some((oe) => (0, import_chunk_bzyb60p0.Rur)({ hookEvent: oe, itemTools: [import_chunk_ww0784kh.Gn], batchTool: import_chunk_ht27b0vz.Wc, tools: w.tools, toolAliases: V.toolAliases, sessionHooks: w.sessionHooksRegistry, sessionId: (0, import_chunk_bzyb60p0.ly)(w, oe, w.session.id) }));
    if (rn(w.session)) {
      let oe = g?.mark("external"), se = await nn(w.session, I, r, { allowed_domains: o.allowed_domains, blocked_domains: o.blocked_domains }, x, () => {
        let re = w.modelFacts();
        return { soFar: w.messages().slice(w.turnStartIndex), compactsAt: (0, import_chunk_bzyb60p0.Vw)(re, w.autoCompactWindow()), bytesPerToken: re.bytesPerToken };
      }, { inSubagent: w.agentId !== void 0, mayHoldPageText: G }).finally(oe), ge = (performance.now() - R) / 1e3;
      if (!se.ok) throw new import_chunk_jv7av99m.A((0, import_chunk_w578pjby._)({ error_type: se.errorType, source: se.source, message: se.errorMessage }), "web-search-ccr-proxy");
      if (h) h({ type: "progress", toolUseID: "ccr-proxy-search-1", data: { type: "search_results_received", resultCount: se.results.length, query: I } });
      return st({ query: I, results: [{ tool_use_id: "ccr-proxy-search-1", content: se.results }], durationSeconds: ge, searchCount: 1, ...se.plainPageText && { plainPageText: se.plainPageText } });
    }
    let j = w.agentId !== void 0, H = (0, import_chunk_ht27b0vz.nvr)(), X = G && !import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY && (j ? H.subagent_chars : H.main_chars) >= 1, N = (0, import_chunk_bzyb60p0.Me)({ content: sGo(I) }), Q = { type: "web_search_20250305", name: "web_search", allowed_domains: o.allowed_domains, blocked_domains: o.blocked_domains, max_uses: oGo, ...x && { search_profile: x } }, { useHaiku: ye, model: ae } = K();
    if ((0, import_chunk_zhr7rpv7.ve)() === "foundry" && !(0, import_chunk_gq1dr8pm.hBt)(ae, "web_search")) throw Error("Web search is not available on this Foundry deployment.");
    let Z = w.helperEffortFor(ae), Ee = ye && !(0, import_chunk_k67pwqya.Svt)(ae, w.loopModel()) && Object.values(Z).every((oe) => oe === void 0) && !(0, import_chunk_k67pwqya.Dwo)(ae) && (0, import_chunk_865at33z.b)("tengu_quick_otter", false), Ke = g?.mark("model"), Oe = (0, import_chunk_bzyb60p0.xIn)({ messages: [N], systemPrompt: (0, import_chunk_4mh8nmh5.Sl)([rGo]), thinkingConfig: { type: "disabled", mechanical: true }, tools: [], signal: r, options: { getToolPermissionContext: async () => w.permissions(), model: ae, leavesLimitStateAlone: ye ? true : void 0, toolChoice: { type: "tool", name: "web_search" }, isNonInteractiveSession: w.isNonInteractiveSession, hasAppendSystemPrompt: !!w.appendSystemPrompt, extraToolSchemas: [Q], querySource: "web_search_tool", webSearchResultsOnly: X, sendSideQueryBeta: X, onRetryStatus: (0, import_chunk_f9x2f6cx.Se)() ? void 0 : (oe) => {
      if (oe?.kind !== "stalled") h?.({ type: "progress", toolUseID: "search-retry", data: { type: "search_retry", status: oe, query: I } });
    }, enablePromptCaching: false, agents: w.agentDefinitions.activeAgents, mcpTools: [], agentId: w.agentId, agentContext: w.agentContext, credentials: w.credentials, storageV5: w.storageV5, stickyBetas: (0, import_chunk_f9x2f6cx.vL)((0, import_chunk_f9x2f6cx.ao)()), proactivityLevel: w.proactivityLevel(), ...Z, ...Ee && { effortValue: "low" } } }), je = [], xe = null, Le = "", $e = 0, Re = /* @__PURE__ */ new Map(), He = null;
    for await (let oe of Oe) {
      if (oe.type === "assistant") {
        if (oe.isApiErrorMessage) {
          He = oe.truncatedAfterOutput ? "The search was cut off before any results arrived. Try again." : (0, import_chunk_bzyb60p0.Go)(oe.message.content);
          continue;
        }
        je.push(...oe.message.content);
        continue;
      }
      if (oe.type !== "stream_event") continue;
      if (oe.event?.type === "content_block_start") {
        let ge = oe.event.content_block;
        if (ge?.type === "server_tool_use") {
          xe = ge.id, Le = "";
          continue;
        }
        if (ge?.type === "web_search_tool_result") {
          let re = ge.tool_use_id, De = Re.get(re) || I, tt = ge.content;
          if ($e++, h) h({ type: "progress", toolUseID: re || `search-progress-${$e}`, data: { type: "search_results_received", resultCount: Array.isArray(tt) ? tt.length : 0, query: De } });
        }
        continue;
      }
      if (oe.event?.type !== "content_block_delta" || !xe) continue;
      let se = oe.event.delta;
      if (se?.type !== "input_json_delta" || !se.partial_json) continue;
      Le += se.partial_json;
      try {
        let ge = Le.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (!ge?.[1]) continue;
        let re = (0, import_chunk_w578pjby.te)('"' + ge[1] + '"');
        if (Re.has(xe) && Re.get(xe) === re) continue;
        if (Re.set(xe, re), $e++, h) h({ type: "progress", toolUseID: `search-progress-${$e}`, data: { type: "query_update", query: re } });
      } catch {
      }
    }
    if (Ke?.(), (0, import_chunk_zhr7rpv7.ve)() === "foundry" && !(0, import_chunk_gq1dr8pm.hBt)(ae, "web_search")) throw Error("Web search is not available on this Foundry deployment.");
    let Be = (performance.now() - R) / 1e3, Ne = un(je, I, Be);
    if (r.aborted && Ne.results.every((oe) => typeof oe === "string" || oe.content.length === 0)) throw new import_chunk_jv7av99m.Ie();
    if (He !== null && Ne.results.length === 0) throw new import_chunk_jv7av99m.A(He, "web-search-side-query-api-error");
    if (X) {
      let oe = je.at(-1)?.type === "web_search_tool_result", se = Ro(je.flatMap((ge) => oe && ge.type === "web_search_tool_result" && Array.isArray(ge.content) ? ge.content.map((re) => ({ title: re.title, url: re.url, snippet: il.test(re.encrypted_content) ? "" : re.encrypted_content })) : []), I, j);
      if (se?.some((ge) => ge.snippet)) return (0, import_chunk_cqa9hrgx.u)("web_search_results_only"), st({ ...Ne, results: [{ tool_use_id: "results-only-search-1", content: se }, ...Ne.results.filter((ge) => typeof ge === "string")], plainPageText: true });
      (0, import_chunk_cqa9hrgx.l)("web_search_results_only", oe ? "no_text" : "not_served");
    }
    return st(Ne);
  } };
}, stripForCreation: ({ plainPageText: e, ...o }) => ({ ...o, results: o.results?.map((r) => r == null || typeof r === "string" ? r : { ...r, content: r.content?.map(ln) }) }), restoreTransientForRemap: cn, keepMarksOnAnswer: cn, mapToolResultToToolResultBlockParam(e, o) {
  let { query: r, results: h } = e, g = (h ?? []).flatMap((k) => k == null || typeof k === "string" ? [] : k.content ?? []);
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSEARCH_CITATIONS && g.some((k) => k.snippet) && !e.plainPageText) return { tool_use_id: o, type: "tool_result", content: g.map((k) => ({ type: "search_result", source: k.url, title: k.title || k.url, content: [{ type: "text", text: k.snippet || k.title || k.url }], citations: { enabled: true } })) };
  let y = `Web search results for query: "${r}"

`;
  if ((h ?? []).forEach((k) => {
    if (k == null) return;
    if (typeof k === "string") y += k + `

`;
    else if (k.content?.length > 0) y += `Links: ${(0, import_chunk_w578pjby._)(k.content)}

`;
    else y += `No links found.

`;
  }), !e.plainPageText) y += `
REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.`;
  else y += `
These results carry no citations, so a source reaches the user only as a markdown link in the response.`;
  return { tool_use_id: o, type: "tool_result", content: y.trim() };
} });
function st(e) {
  let o = e.results.filter((r) => typeof r !== "string");
  return { data: e, subagentFrameResult: o.length === e.searchCount && o.every((r) => r.content.length === 0) ? { ...e, results: o } : void 0 };
}
(0, import_chunk_adx6804h.B)();
var cl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ count: (0, import_chunk_adx6804h.E)().describe("Number of findings reported"), level: (0, import_chunk_adx6804h.F)(["low", "medium", "high", "xhigh", "max"]).optional().describe("Effort level the review ran at"), findings: (0, import_chunk_adx6804h.C)((0, import_chunk_4vdq32k8.y9s)()).describe("Echoed for the result body") })), yn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "91066e76-f191-5e28-8c8d-e43b4526f286", name: import_chunk_179jgyn9.Rx, searchHint: "report code-review findings as a structured list", whenToUse: "When you are about to print the findings of a code review whose instructions say to report them with this tool, use it and not a list in your reply.", backgrounding: "never", maxResultSizeChars: 256, strict: true, async description() {
  return import_chunk_179jgyn9.sTi;
}, async prompt() {
  return import_chunk_179jgyn9.sTi;
}, get inputSchema() {
  return (0, import_chunk_4vdq32k8.lPa)();
}, get outputSchema() {
  return cl();
}, isReadOnly() {
  return true;
}, isConcurrencySafe() {
  return true;
}, toAutoClassifierInput(e) {
  return `${e.findings.length} findings`;
}, userFacingName() {
  return "Code review";
}, renderToolUseMessage(e) {
  let o = e.findings?.length ?? 0;
  return `${e.level ?? "review"} \xB7 ${o} ${(0, import_chunk_7cfjrnwy.O)(o, "finding")}`;
}, create() {
  return { async call({ findings: e, level: o }) {
    return { data: { count: e.length, level: o, findings: e } };
  } };
}, mapToolResultToToolResultBlockParam({ count: e }, o) {
  return { tool_use_id: o, type: "tool_result", content: e === 0 ? "No findings reported." : `${e} ${(0, import_chunk_7cfjrnwy.O)(e, "finding")} reported.` };
} });
(0, import_chunk_adx6804h.B)();
var ul = 'Create and update a task list for the current session. The list is rendered to the user as your working plan.\n\n- Each todo has `content`, `status` ("pending" | "in_progress" | "completed"), and `activeForm` (present-tense label shown while in progress).\n- Send the full list each call; it replaces the previous one.\n- Keep one item `in_progress` at a time and mark it `completed` when done.';
function wn(e, o) {
  return (0, import_chunk_ge3qft6b.R0)({ model: e, leanPrompt: o }) ? ul : dl;
}
var dl = `Use this tool to create and manage a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.
It also helps the user understand the progress of the task and overall progress of their requests.

## When to Use This Tool
Use this tool proactively in these scenarios:

1. Complex multi-step tasks - When a task requires 3 or more distinct steps or actions
2. Non-trivial and complex tasks - Tasks that require careful planning or multiple operations
3. User explicitly requests todo list - When the user directly asks you to use the todo list
4. User provides multiple tasks - When users provide a list of things to be done (numbered or comma-separated)
5. After receiving new instructions - Immediately capture user requirements as todos
6. When you start working on a task - Mark it as in_progress BEFORE beginning work. Ideally you should only have one todo as in_progress at a time
7. After completing a task - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use This Tool

Skip using this tool when:
1. There is only a single, straightforward task
2. The task is trivial and tracking it provides no organizational benefit
3. The task can be completed in less than 3 trivial steps
4. The task is purely conversational or informational

NOTE that you should not use this tool if there is only one trivial task to do. In this case you are better off just doing the task directly.

## Examples of When to Use the Todo List

<example>
User: I want to add a dark mode toggle to the application settings. Make sure you run the tests and build when you're done!
Assistant: *Creates todo list with the following items:*
1. Creating dark mode toggle component in Settings page
2. Adding dark mode state management (context/store)
3. Implementing CSS-in-JS styles for dark theme
4. Updating existing components to support theme switching
5. Running tests and build process, addressing any failures or errors that occur
*Begins working on the first task*

<reasoning>
The assistant used the todo list because:
1. Adding dark mode is a multi-step feature requiring UI, state management, and styling changes
2. The user explicitly requested tests and build be run afterward
3. The assistant inferred that tests and build need to pass by adding "Ensure tests and build succeed" as the final task
</reasoning>
</example>

<example>
User: Help me rename the function getCwd to getCurrentWorkingDirectory across my project
Assistant: *Uses grep or search tools to locate all instances of getCwd in the codebase*
I've found 15 instances of 'getCwd' across 8 different files.
*Creates todo list with specific items for each file that needs updating*

<reasoning>
The assistant used the todo list because:
1. First, the assistant searched to understand the scope of the task
2. Upon finding multiple occurrences across different files, it determined this was a complex task with multiple steps
3. The todo list helps ensure every instance is tracked and updated systematically
4. This approach prevents missing any occurrences and maintains code consistency
</reasoning>
</example>


<example>
User: I need to implement these features for my e-commerce site: user registration, product catalog, shopping cart, and checkout flow.
Assistant: *Creates a todo list breaking down each feature into specific tasks based on the project architecture*
Let's start with user registration. This will involve creating database models, API endpoints, and frontend forms that integrate with your existing authentication system.

<reasoning>
The assistant used the todo list because:
1. The user provided multiple complex features to implement in a comma separated list
2. The todo list helps organize these large features into manageable tasks
3. This approach allows for tracking progress across the entire implementation
</reasoning>
</example>

<example>
User: Can you help optimize my React application? It's rendering slowly and has performance issues.
Assistant: *Reviews component structure, render patterns, state management, and data fetching*
After analyzing your codebase, I've identified several performance issues.
*Creates todo list with items like: 1) Implementing memoization for expensive calculations in ProductList, 2) Adding virtualization for long lists in Dashboard, 3) Optimizing image loading in Gallery component, 4) Fixing state update loops in ShoppingCart, 5) Reviewing bundle size and implementing code splitting*
Let's start by implementing memoization for the expensive calculations in your ProductList component.

<reasoning>
The assistant used the todo list because:
1. First, the assistant examined the codebase to identify specific performance issues
2. Based on this analysis, it identified multiple optimization opportunities
3. Performance optimization is a non-trivial task requiring multiple steps
4. The todo list helps methodically track improvements across different components
5. This systematic approach ensures all performance bottlenecks are addressed
</reasoning>
</example>

## Examples of When NOT to Use the Todo List

<example>
User: How do I print 'Hello World' in Python?
Assistant: In Python, you can print "Hello World" with this simple code:

python
print("Hello World")

This will output the text "Hello World" to the console when executed.

<reasoning>
The assistant did not use the todo list because this is a single, trivial task that can be completed in one step. There's no need to track multiple tasks or steps for such a straightforward request.
</reasoning>
</example>

<example>
User: What does the git status command do?
Assistant: The git status command shows the current state of your working directory and staging area. It displays which changes have been staged, which haven't, and which files aren't being tracked by Git. This is a fundamental command for understanding the current state of your repository before making commits.

<reasoning>
The assistant did not use the todo list because this is an informational request with no actual coding task to complete. The user is simply asking for an explanation, not for the assistant to perform multiple steps or tasks.
</reasoning>
</example>

<example>
User: Can you add a comment to the calculateTotal function to explain what it does?
Assistant: Sure, let me add a comment to the calculateTotal function to explain what it does.
* Uses the ${import_chunk_rb36kwbn.lt} tool to add a comment to the calculateTotal function *

<reasoning>
The assistant did not use the todo list because this is a single, straightforward task confined to one location in the code. Adding a comment doesn't require tracking multiple steps or systematic organization.
</reasoning>
</example>

<example>
User: Run npm install for me and tell me what happens.
Assistant: I'll run the npm install command for you.

*Executes: npm install*

The command completed successfully. Here's the output:
[Output of npm install command]

All dependencies have been installed according to your package.json file.

<reasoning>
The assistant did not use the todo list because this is a single command execution with immediate results. There are no multiple steps to track or organize, making the todo list unnecessary for this straightforward task.
</reasoning>
</example>

## Task States and Management

1. **Task States**: Use these states to track progress:
   - pending: Task not yet started
   - in_progress: Currently working on (limit to ONE task at a time)
   - completed: Task finished successfully

   **IMPORTANT**: Task descriptions must have two forms:
   - content: The imperative form describing what needs to be done (e.g., "Run tests", "Build the project")
   - activeForm: The present continuous form shown during execution (e.g., "Running tests", "Building the project")

2. **Task Management**:
   - Update task status in real-time as you work
   - Mark tasks complete IMMEDIATELY after finishing (don't batch completions)
   - Exactly ONE task must be in_progress at any time (not less, not more)
   - Complete current tasks before starting new ones
   - Remove tasks that are no longer relevant from the list entirely

3. **Task Completion Requirements**:
   - ONLY mark a task as completed when you have FULLY accomplished it
   - If you encounter errors, blockers, or cannot finish, keep the task as in_progress
   - When blocked, create a new task describing what needs to be resolved
   - Never mark a task as completed if:
     - Tests are failing
     - Implementation is partial
     - You encountered unresolved errors
     - You couldn't find necessary files or dependencies

4. **Task Breakdown**:
   - Create specific, actionable items
   - Break complex tasks into smaller, manageable steps
   - Use clear, descriptive task names
   - Always provide both forms:
     - content: "Fix authentication bug"
     - activeForm: "Fixing authentication bug"

When in doubt, use this tool. Being proactive with task management demonstrates attentiveness and ensures you complete all requirements successfully.
`, Sn = "Update the todo list for the current session. To be used proactively and often to track progress and pending tasks. Make sure that at least one task is in_progress at all times. Always provide both content (imperative) and activeForm (present continuous) for each task.";
var ml = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ todos: (0, import_chunk_bzyb60p0.MLt)().describe("The updated todo list") })), pl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ oldTodos: (0, import_chunk_bzyb60p0.MLt)().describe("The todo list before the update"), newTodos: (0, import_chunk_bzyb60p0.MLt)().describe("The todo list after the update") })), bn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "138b38a9-1457-5f96-9550-d0c19a029d2b", name: import_chunk_6eq0mqyj.My, whenToUse: "When you are about to start work of three or more steps or several tasks, or are starting or have just finished a listed step, use it to update the checklist the user sees; not for one simple task.", searchHint: "manage the session task checklist", backgrounding: "never", maxResultSizeChars: 1e5, strict: true, async description() {
  return Sn;
}, async prompt({ model: e, leanPrompt: o }) {
  return wn(e, o);
}, get inputSchema() {
  return ml();
}, get outputSchema() {
  return pl();
}, userFacingName() {
  return "";
}, shouldDefer: true, isEnabled() {
  return !(0, import_chunk_0dht3xy7.YW)() && (0, import_chunk_bzyb60p0.Lie)();
}, toAutoClassifierInput(e) {
  return `${e.todos.length} items`;
}, renderToolUseMessage() {
  return null;
}, create(e) {
  return { async call({ todos: o }) {
    let r = e.agentId ?? (0, import_chunk_f9x2f6cx.W)(), h = e.todos.get(r) ?? [], g = o.every((y) => y.status === "completed");
    return e.todos.set(r, g ? [] : o), { data: { oldTodos: h, newTodos: o } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable" };
} });
(0, import_chunk_adx6804h.B)();
var fl = 50, hl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ store: (0, import_chunk_adx6804h.n)().optional().describe("Id of the memory store to list. Omit to list the memory stores available in this session (id, description, writable or read-only, and the path of its index document)."), path_prefix: (0, import_chunk_adx6804h.n)().optional().describe("Optional directory prefix to list only documents under it (e.g. /feedback/). Matching is directory-aligned (/x is the same as /x/). Omit to list the whole store."), cursor: (0, import_chunk_adx6804h.n)().optional().describe("Path of the last entry from a previous call. Returns entries after this path.") })), gl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ outcome: (0, import_chunk_adx6804h.F)(["ok", "refused", "failed"]), store_kind: (0, import_chunk_adx6804h.F)(["personal", "project"]).optional(), entries: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)(), bytes: (0, import_chunk_adx6804h.E)().optional(), updatedAt: (0, import_chunk_adx6804h.n)().optional() })).optional(), remaining: (0, import_chunk_adx6804h.E)().optional(), stores: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)(), writable: (0, import_chunk_adx6804h.P)(), index: (0, import_chunk_adx6804h.n)() })).optional(), reason: (0, import_chunk_adx6804h.n)().optional(), message: (0, import_chunk_adx6804h.n)().optional() }));
function yl(e) {
  let o = e.bytes === void 0 ? "" : `${e.bytes} bytes`, r = e.updatedAt?.match(/^\d{4}-\d{2}-\d{2}/)?.[0], h = r === void 0 ? "" : `updated ${r}`, g = [o, h].filter(Boolean).join(", "), y = JSON.stringify(e.path);
  return g === "" ? y : `${y}  (${g})`;
}
var _n = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "88632544-2fb6-5079-86a6-8d77689e18ef", name: import_chunk_p1ewvgeh.RC, searchHint: "list the memory stores and the documents in them", shouldDefer: false, backgrounding: "never", maxResultSizeChars: 1 / 0, async description() {
  return import_chunk_xkpbmcsq.tYa;
}, async prompt() {
  return import_chunk_xkpbmcsq.rYa;
}, get inputSchema() {
  return hl();
}, get outputSchema() {
  return gl();
}, userFacingName() {
  return import_chunk_p1ewvgeh.RC;
}, isEnabled() {
  return (0, import_chunk_p1ewvgeh.dYe)();
}, isReadOnly() {
  return true;
}, isConcurrencySafe() {
  return true;
}, toAutoClassifierInput(e) {
  return `list ${e.store ?? "stores"} ${e.path_prefix ?? ""}`.trim();
}, renderToolUseMessage(e) {
  return (0, import_chunk_xkpbmcsq.Q3e)(e.store, e.path_prefix);
}, extractSearchText() {
  return "";
}, getActivityDescription() {
  return "Listing memory documents";
}, create() {
  return { async call({ store: e, path_prefix: o, cursor: r }, { signal: h }) {
    if (e === void 0) {
      let k = (0, import_chunk_xkpbmcsq.vyi)();
      if (k) return (0, import_chunk_xkpbmcsq.lae)("stores", `refused_${k.reason}`), { data: { outcome: "refused", reason: k.reason, message: k.message }, ...(0, import_chunk_xkpbmcsq.Gtn)(k) };
      let w = (0, import_chunk_xkpbmcsq.wss)(), R = (0, import_chunk_xkpbmcsq.Q8a)(w), I = (0, import_chunk_xkpbmcsq.Eyi)(w);
      if (R.length === 0) (0, import_chunk_xkpbmcsq.lae)("stores", I ? "stores_connecting" : "stores_none");
      else (0, import_chunk_xkpbmcsq.ztn)("stores", "none");
      return { data: { outcome: "ok", stores: R, ...I && { message: import_chunk_xkpbmcsq.kyi } } };
    }
    let g = (0, import_chunk_xkpbmcsq.hHn)({ storeId: e });
    if (g.outcome === "refused") return (0, import_chunk_xkpbmcsq.lae)("list", `refused_${g.reason}`), { data: { outcome: "refused", reason: g.reason, message: g.message }, ...(0, import_chunk_xkpbmcsq.Gtn)(g) };
    let { kind: y } = g.served;
    try {
      let k = o === void 0 ? void 0 : (0, import_chunk_p1ewvgeh.KO)(o), w = o === void 0 || k === void 0 ? null : (0, import_chunk_xkpbmcsq.gHn)(o, g.served.promptIndex) ?? (0, import_chunk_xkpbmcsq.hFt)(k, { trailingSlashAllowed: true });
      if (w) return (0, import_chunk_xkpbmcsq.lae)("list", `refused_${w.reason}`, y), { data: { outcome: "refused", reason: w.reason, message: w.message } };
      let R = k === void 0 || k === "/" ? void 0 : k.endsWith("/") ? k : `${k}/`, I = await g.backend.list(R, { signal: h }).catch((z) => {
        if (z instanceof import_chunk_p1ewvgeh.AC && z.kind === "store") return [];
        throw z;
      });
      if (h.aborted) throw new import_chunk_jv7av99m.Ie();
      let x = I.filter((z) => (0, import_chunk_xkpbmcsq.Z8a)(z.path)).sort((z, q) => z.path < q.path ? -1 : z.path > q.path ? 1 : 0), L = r === void 0 ? x : x.filter((z) => z.path > r), K = L.slice(0, fl);
      return (0, import_chunk_xkpbmcsq.ztn)("list", y), { data: { outcome: "ok", store_kind: y, entries: K.map((z) => ({ path: z.path, bytes: z.sizeBytes, updatedAt: z.updatedAt })), remaining: L.length - K.length } };
    } catch (k) {
      if (h.aborted) throw new import_chunk_jv7av99m.Ie();
      let w = (0, import_chunk_xkpbmcsq._Hn)("list", k);
      return { data: { outcome: "failed", reason: w.reason, message: w.message } };
    }
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  if (e.outcome !== "ok") return { tool_use_id: o, type: "tool_result", is_error: true, content: e.message ?? `${import_chunk_p1ewvgeh.RC} failed: ${e.reason}` };
  if (e.stores !== void 0) return { tool_use_id: o, type: "tool_result", content: e.stores.length === 0 ? e.message ?? "No memory stores are available in this session." : `Memory stores available in this session \u2014 pass an id as store to list or read one:
${e.stores.map((y) => `${y.id}  (${y.description}, ${y.writable ? "writable" : "read-only"}, index ${y.index})`).join(`
`)}${e.message === void 0 ? "" : `
${e.message}`}` };
  let r = e.entries ?? [];
  if (r.length === 0) return { tool_use_id: o, type: "tool_result", content: "(empty)" };
  let h = e.remaining ?? 0, g = h > 0 ? `
\u2026 ${h} more \u2014 call again with cursor=${JSON.stringify(r.at(-1)?.path ?? "")} to continue.` : "";
  return { tool_use_id: o, type: "tool_result", content: `${(0, import_chunk_xkpbmcsq.yHn)(e.store_kind)}

${r.map(yl).join(`
`)}${g}` };
} });
var Cn = [_n, import_chunk_bzyb60p0.dJo, import_chunk_xkpbmcsq.Koo];
(0, import_chunk_adx6804h.B)();
var kl = 10, Tl = 3, wl = 50, _l = 20;
function Rt() {
  return (0, import_chunk_865at33z.sD)("tengu_juniper_relay_config", {});
}
function En(e, o, r, h) {
  return typeof e === "number" && Number.isInteger(e) && e >= r && e <= h ? e : o;
}
function Gt() {
  return En(Rt().maxToolCallsPerSession, kl, 1, wl);
}
function In() {
  return En(Rt().maxDraftPromptsPerSession, Tl, 0, _l);
}
(0, import_chunk_adx6804h.B)();
var Vt = 10, vl = 30, Rl = vl * 24 * 60 * 60 * 1e3, iGo = 10240, El = 200, Kt = 32768, Il = 5, Ol = 64, aGo = 32, lGo = 64, xn = 512, Al = 64;
function YJn(e) {
  return it((0, import_chunk_kx2fp6pc.Yn)((0, import_chunk_kx2fp6pc.Og)(e)), El);
}
function dGo(e) {
  return (0, import_chunk_7cfjrnwy.FB)((0, import_chunk_kx2fp6pc.Og)(e).replace(/\r\n/g, `
`).split(`
`).map((o) => (0, import_chunk_kx2fp6pc.Yn)(o)).join(`
`), iGo);
}
function _et(e, o) {
  return it((0, import_chunk_kx2fp6pc.Yn)((0, import_chunk_kx2fp6pc.Og)(e)).trim(), o);
}
var Pl = /[^A-Za-z0-9.:_/@[\]-]/g;
function cGo(e) {
  return it(e.replace(Pl, ""), Ol);
}
function uGo(e) {
  if (e === void 0) return;
  let o = _et(e, Al);
  return o === "" ? void 0 : o;
}
function K8t(e) {
  return e.filter(import_chunk_rwa52046.yO).slice(-Il);
}
var Dzr = ["bug", "idea", "missing_capability"], Dl = ["tool_error", "user_frustration", "missing_capability", "model_judgment", "exit_nudge"], XJn = ["instruction_following", "destructive_actions", "code_quality", "repetition_and_looping", "model_regression", "overconfidence_and_hallucination", "context_and_memory", "overeager", "over_correction", "stopping_short", "dispute_or_decline", "subagent_overspawn", "tone_or_preachiness", "excessive_questions", "unwanted_scope", "other"], JJn = ["code_edit", "debug", "explain", "plan", "shell", "search", "review", "other"];
function xTa(e) {
  return e !== void 0 && XJn.includes(e) ? e : void 0;
}
function PTa(e) {
  return e !== void 0 && JJn.includes(e) ? e : void 0;
}
var Dn = ["adaptive", "enabled", "disabled"];
function OTa(e) {
  return e !== void 0 && Dn.includes(e) ? e : void 0;
}
var Ll = 16;
function fGo(e) {
  if (e === void 0) return;
  let o = _et(e, Ll);
  return o === "" ? void 0 : o;
}
var Nl = 1e6;
function v$e(e) {
  return e !== void 0 && Number.isInteger(e) && e >= 0 && e <= Nl ? e : void 0;
}
var Ml = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ draft_id: (0, import_chunk_adx6804h.F8)(), created_at: (0, import_chunk_adx6804h.n)().refine((e) => Number.isFinite(Date.parse(e))).transform((e) => new Date(Date.parse(e)).toISOString()), source_session_id: (0, import_chunk_adx6804h.n)().regex(Ln), cwd: (0, import_chunk_adx6804h.n)().transform((e) => _et(e, xn)), model: (0, import_chunk_adx6804h.n)().transform((e) => cGo(e)), cli_version: (0, import_chunk_adx6804h.n)().transform((e) => _et(e, aGo)), os: (0, import_chunk_adx6804h.n)().transform((e) => _et(e, lGo)), request_ids: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).transform((e) => K8t(e)), type: (0, import_chunk_adx6804h.F)(Dzr), title: (0, import_chunk_adx6804h.n)().min(1).transform((e) => YJn(e)), details: (0, import_chunk_adx6804h.n)().transform((e) => dGo(e)), area: (0, import_chunk_adx6804h.n)().optional().transform((e) => uGo(e)), trigger: (0, import_chunk_adx6804h.F)(Dl), failure_mode: (0, import_chunk_adx6804h.F)(XJn).optional().catch(void 0), task_category: (0, import_chunk_adx6804h.F)(JJn).optional().catch(void 0), effort: (0, import_chunk_adx6804h.n)().optional().catch(void 0).transform(fGo), thinking_type: (0, import_chunk_adx6804h.F)(Dn).optional().catch(void 0), thinking_budget: (0, import_chunk_adx6804h.E)().optional().catch(void 0).transform(v$e), message_count: (0, import_chunk_adx6804h.E)().optional().catch(void 0).transform(v$e), assistant_turn_count: (0, import_chunk_adx6804h.E)().optional().catch(void 0).transform(v$e), subagent_count: (0, import_chunk_adx6804h.E)().optional().catch(void 0).transform(v$e), transcript_ref: (0, import_chunk_adx6804h.c)({ session_file: (0, import_chunk_adx6804h.n)(), message_range: (0, import_chunk_adx6804h.Tv)([(0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.E)()]).nullable(), project_dir_key: (0, import_chunk_adx6804h.n)().optional().transform((e) => e !== void 0 && Do.test(e) ? e : void 0) }).nullable(), status: (0, import_chunk_adx6804h.F)(["queued", "submitted", "discarded", "expired"]) }));
function Xt() {
  return (0, import_path2.join)((0, import_chunk_2gtmjt3y.Ze)(), "feedback", "drafts");
}
var xo = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, Ln = /^[A-Za-z0-9_-]{1,128}$/, Do = /^[A-Za-z0-9-]{1,255}$/;
function Mn(e) {
  if (!xo.test(e)) throw Error("invalid feedback draft id");
  return (0, import_path2.join)(Xt(), `${e}.json`);
}
function $n(e) {
  if (!xo.test(e)) throw Error("invalid feedback draft id");
  return import_chunk_hkvzj051.at.feedbackDraft(e);
}
function Lo(e) {
  return "telemetryCode" in e ? e.telemetryCode : void 0;
}
function Qt(e) {
  let o = Lo(e);
  return o === void 0 ? e.code : `${e.code} ${o}`;
}
async function $l(e) {
  let o = [], r = await (0, import_chunk_hnt4bwpe.Nd)((h) => e.listEntries({ namespace: "feedbackDraft" }, { cursor: h, skipKeyStats: true }), (h) => {
    for (let g of h) if (g.kind === "key" && g.key.namespace === "feedbackDraft") o.push(g.key);
  });
  if (r.status === "done") return o;
  if (r.status === "capped") return (0, import_chunk_w578pjby.t)("feedbackDrafts: draft listing kept offering cursors past the page cap; treating it as failed", { level: "error" }), null;
  if ((0, import_chunk_jv7av99m.HD)(Lo(r.error))) return (0, import_chunk_w578pjby.t)(`feedbackDrafts: draft listing failed: ${Qt(r.error)}`, { level: "error" }), null;
  throw new import_chunk_jv7av99m.A(`feedback draft listing failed: ${Qt(r.error)}`, "feedback draft listing failed");
}
var On = 8;
function Fl(e, o, r) {
  let h = (w) => w.found ? Buffer.from(w.value) : null, g = async (w) => {
    try {
      let R = await e.read([{ key: w, tail: r }]);
      return R.ok ? h(R.value.items[0]) : null;
    } catch {
      return null;
    }
  }, y = -1, k = [];
  return async (w) => {
    let R = w - w % On;
    if (R !== y) {
      let I = o.slice(R, R + On), x = await e.read(I.map((L) => ({ key: L, tail: r }))).catch(() => {
        return;
      });
      if (k = [], x?.ok && x.value.items.length === I.length) k = x.value.items.map(h);
      else for (let L of I) k.push(await g(L));
      y = R;
    }
    return k[w - R] ?? null;
  };
}
async function fqs(e) {
  if (!e.transcript_ref) return null;
  if (!Ln.test(e.source_session_id)) return null;
  let { getSessionId: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-r1tgzm8q.js")));
  if (e.source_session_id === o()) {
    let { getTranscriptPathForSession: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-apkp62f8.js")));
    return y(e.source_session_id);
  }
  let { getProjectDir: r, getProjectsDir: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-r7mqs3wt.js"))), g = e.transcript_ref.project_dir_key;
  if (g !== void 0 && Do.test(g)) return (0, import_path2.join)(h(), g, `${e.source_session_id}.jsonl`);
  return (0, import_path2.join)(r(e.cwd), `${e.source_session_id}.jsonl`);
}
var Pn = 262144;
function pGo(e, o) {
  var _stack = [];
  try {
    const r = __using(_stack, import_chunk_w578pjby.tw`transcriptContentCorroboratesDraft(${e.length})`);
    for (let h of e.split(`
`)) {
      if (!h) continue;
      let g;
      try {
        g = (0, import_chunk_w578pjby.Cs)(h);
      } catch {
        continue;
      }
      if (typeof g !== "object" || g === null) continue;
      if ("sessionId" in g && "cwd" in g && g.sessionId === o.source_session_id && g.cwd === o.cwd) return true;
    }
    return false;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function it(e, o) {
  let r = Array.from(e);
  return r.length <= o ? e : r.slice(0, o).join("");
}
function Fn(e, o = /* @__PURE__ */ new Date()) {
  let r = e.transcriptFile ? zl(e.transcriptFile) : void 0;
  return { draft_id: (0, import_crypto.randomUUID)(), created_at: o.toISOString(), source_session_id: e.sessionId, cwd: _et(e.cwd, xn), model: cGo(e.model), cli_version: _et(e.cliVersion, aGo), os: _et(e.os, lGo), request_ids: K8t(e.requestIds), type: e.type, title: YJn(e.title), details: dGo(e.details), area: uGo(e.area), failure_mode: e.failureMode, task_category: e.taskCategory, trigger: e.trigger, effort: fGo(e.effort), thinking_type: e.thinkingType, thinking_budget: v$e(e.thinkingBudget), message_count: v$e(e.messageCount), assistant_turn_count: v$e(e.assistantTurnCount), subagent_count: v$e(e.subagentCount), transcript_ref: e.transcriptFile ? { session_file: e.transcriptFile, message_range: null, project_dir_key: r } : null, status: "queued" };
}
function zl(e) {
  let o = (0, import_path2.basename)((0, import_path2.dirname)(e));
  return Do.test(o) ? o : void 0;
}
async function mGo(e, o = /* @__PURE__ */ new Date(), r) {
  let h = (0, import_chunk_w578pjby._)(e, null, 2);
  if (h === void 0 || Buffer.byteLength(h, "utf8") > Kt) return { success: false, reason: "too_large" };
  if (r) {
    let y;
    try {
      y = await r.write($n(e.draft_id), h, { mode: 384 });
    } catch (k) {
      return (0, import_chunk_w578pjby.t)(`feedbackDrafts: draft write failed: ${k instanceof Error ? k.name : "unknown"}`, { level: "error" }), { success: false, reason: "write_failed" };
    }
    if (!y.ok) return (0, import_chunk_w578pjby.t)(`feedbackDrafts: draft write failed: ${Qt(y.error)}`, { level: "error" }), { success: false, reason: "write_failed" };
  } else {
    if ((0, import_chunk_f9x2f6cx.Y)()) return (0, import_chunk_2yx6c1y2.ZN)("feedback_draft", "feedback/drafts"), { success: false, reason: "write_failed" };
    let y = (0, import_chunk_8j3h6yzg.Vn)();
    try {
      await y.mkdir(Xt()), await y.atomicWrite(Mn(e.draft_id), h, 384);
    } catch (k) {
      return (0, import_chunk_w578pjby.t)(`feedbackDrafts: draft write failed: ${k instanceof Error ? k.name : "unknown"}`, { level: "error" }), { success: false, reason: "write_failed" };
    }
  }
  let g = [];
  try {
    let { queued: y } = await T$e({ now: o, skipTranscriptCheck: true }, r);
    if (y.length > Vt) {
      let k = y.slice().sort((w, R) => w.created_at.localeCompare(R.created_at));
      for (let w of k.slice(0, y.length - Vt)) await Lzr(w.draft_id, r), g.push(w);
    }
  } catch (y) {
    (0, import_chunk_w578pjby.t)(`feedbackDrafts: eviction sweep failed: ${y instanceof Error ? y.name : "unknown"}`, { level: "error" });
  }
  return { success: true, evicted: g };
}
async function T$e(e, o) {
  let r = e?.now ?? /* @__PURE__ */ new Date(), h = e?.lightweight === true, g = h || e?.skipTranscriptCheck === true, y, k, w = o ? void 0 : (0, import_chunk_8j3h6yzg.Vn)();
  if (o) {
    let K = await $l(o);
    if (K === null) return { queued: [], expired: [] };
    y = K.map((z) => `${z.draftId}.json`), k = Fl(o, K, Kt + 1);
  } else {
    if ((0, import_chunk_f9x2f6cx.Y)()) return { queued: [], expired: [] };
    let K;
    try {
      K = await w.list(Xt());
    } catch (z) {
      if ((0, import_chunk_jv7av99m.fn)(z)) return { queued: [], expired: [] };
      throw z;
    }
    y = K.filter((z) => z.endsWith(".json"));
  }
  let R = [], I = [], x = 0, L = 0;
  for (let [K, z] of y.entries()) {
    let q;
    try {
      var _stack = [];
      try {
        let G = k === void 0 ? await w.readTail((0, import_path2.join)(Xt(), z), Kt + 1) : await k(K);
        if (G === null) continue;
        if (G.length > Kt) {
          L++;
          continue;
        }
        const j = __using(_stack, import_chunk_w578pjby.tw`listFeedbackDrafts parse(${G.length})`);
        let H = (0, import_chunk_w578pjby.Cs)(G.toString("utf8")), X = Ml().safeParse(H);
        if (!X.success) {
          let N = H?.draft_id;
          if (typeof N === "string" && !xo.test(N)) x++;
          continue;
        }
        q = X.data;
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    } catch {
      continue;
    }
    if (z !== `${q.draft_id}.json`) {
      x++;
      continue;
    }
    if (q.status !== "queued") continue;
    let V = Date.parse(q.created_at);
    if (Number.isFinite(V) && r.getTime() - V > Rl) {
      if (h) continue;
      if (await Lzr(q.draft_id, o).catch(() => false)) I.push(q), (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_expired", { type: (0, import_chunk_78g0060s.f)(q.type), trigger: (0, import_chunk_78g0060s.f)(q.trigger), age_days: (0, import_chunk_78g0060s.Gs)(Math.round((r.getTime() - V) / 864e5)) });
      continue;
    }
    R.push({ ...q, transcriptAvailable: g ? false : await Bl(q, o) });
  }
  if (R.sort((K, z) => z.created_at.localeCompare(K.created_at)), x > 0) (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_invalid_id", { count: (0, import_chunk_78g0060s.Gs)(x) });
  if (L > 0) (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_oversized_file", { count: (0, import_chunk_78g0060s.Gs)(L) });
  return { queued: R, expired: I };
}
function Wl(e, o) {
  if (!e.endsWith(".jsonl")) return;
  let r = (0, import_path2.dirname)(e), h = (0, import_path2.basename)(r), g = (0, import_path2.basename)(e).slice(0, -6);
  if ((0, import_path2.dirname)(r) !== o || !(0, import_chunk_hkvzj051.Ao)(h) || !(0, import_chunk_hkvzj051.Ao)(g)) return;
  let y = import_chunk_hkvzj051.at.transcript(h, g);
  return (0, import_chunk_fp3vnecp.db)(y) === void 0 ? y : void 0;
}
async function Bl(e, o) {
  let r = await fqs(e);
  if (r === null) return false;
  let { getSessionId: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-r1tgzm8q.js"))), g = e.source_session_id === h();
  if (o) {
    let { getProjectsDir: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-r7mqs3wt.js"))), k = Wl(r, y());
    if (k !== void 0) try {
      if (g) return (await o.statMeta(k)).ok;
      let w = await o.read([{ key: k, tail: Pn }]);
      if (!w.ok) return false;
      let [R] = w.value.items;
      return R.found && pGo(Buffer.from(R.value).toString("utf8"), e);
    } catch {
      return false;
    }
  }
  if (g) try {
    return await (0, import_chunk_8j3h6yzg.Vn)().stat(r), true;
  } catch {
    return false;
  }
  try {
    let y = await (0, import_chunk_8j3h6yzg.Vn)().readTail(r, Pn);
    return pGo(y.toString("utf8"), e);
  } catch {
    return false;
  }
}
async function Lzr(e, o) {
  if (o) {
    let r = await o.delete($n(e));
    if (!r.ok) {
      if ((0, import_chunk_jv7av99m.HD)(Lo(r.error))) return false;
      throw new import_chunk_jv7av99m.A(`feedback draft delete failed: ${Qt(r.error)}`, "feedback draft delete failed");
    }
    return r.value.existed;
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) return false;
  try {
    return await (0, import_chunk_8j3h6yzg.Vn)().delete(Mn(e)), true;
  } catch (r) {
    if (!(0, import_chunk_jv7av99m.J)(r) && !(0, import_chunk_jv7av99m.fn)(r)) throw r;
    return false;
  }
}
async function ITa(e, o) {
  let { queued: r } = await T$e({ lightweight: true }, o);
  return (0, import_chunk_4smdap7r.U)(r, (h) => h.source_session_id === e);
}
var Wn = 5e3, jl = 36e5, Bn = (0, import_chunk_t57w17k7.de)({ held: null }, (e) => {
  e.held = null;
});
async function tq() {
  try {
    if ((0, import_chunk_2nv4wrez.eD)() !== "prosumer_oauth" || (0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || (0, import_chunk_k449cc64.wt)() || (0, import_chunk_gq1dr8pm.JQ)() !== null) return;
    let e = (0, import_chunk_2nv4wrez.clt)();
    if (e === null) return;
    let o = Date.now(), r = Bn.held;
    if (r === null || r.principal !== e || o - r.at >= jl) r = { principal: e, at: o, done: Ul(e) }, Bn.held = r;
    await r.done;
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
async function Ul(e) {
  try {
    let o = await import_chunk_865at33z.zt.get(import_chunk_4jzbgp2v.wee, { timeout: Wn, signal: AbortSignal.timeout(Wn), isBackground: true });
    if (!o.ok) {
      (0, import_chunk_cqa9hrgx.l)("feedback_access_check", o.reason);
      return;
    }
    let r = o.status === 200 && (0, import_chunk_7q6ee47s.tGe)(o.response.headers) ? (0, import_chunk_2nv4wrez.ejn)().safeParse(o.data) : void 0;
    if (!r?.success) {
      (0, import_chunk_cqa9hrgx.l)("feedback_access_check", "unknown_answer", { http_status: o.status });
      return;
    }
    let h = r.data.restrictions.allow_product_feedback?.allowed === false;
    if (h && !r.data.compliance_taints.includes("hipaa")) (0, import_chunk_2efh61g1.n6r)(e);
    (0, import_chunk_cqa9hrgx.u)("feedback_access_check", { enabled: !h });
  } catch (o) {
    (0, import_chunk_cqa9hrgx.l)("feedback_access_check", !(0, import_chunk_3jjr3wje.fd)(o) ? "error" : o.code === "ECONNABORTED" || o.code === "ERR_CANCELED" ? "timeout" : "network");
  }
}
var MTa = 20, Un = 160, No = 4, HTa = 6;
function Hn(e) {
  let o = "silent";
  return import_chunk_x7880gvk.nd.feedbackNotice.setState((r) => {
    let h = { ...r, sessionDraftCount: r.sessionDraftCount + 1 };
    if (r.notice !== null) return o = "notice_pending", h.notice = e, h;
    if (r.promptedCount >= In()) return o = "silent", h;
    return h.promptedCount = r.promptedCount + 1, o = "notice_pending", h.notice = e, h;
  }), o;
}
function qn() {
  let e = false;
  return import_chunk_x7880gvk.nd.feedbackNotice.setState((o) => {
    if (o.toolCallCount >= Gt()) return o;
    return e = true, { ...o, toolCallCount: o.toolCallCount + 1 };
  }), e;
}
function jEn(e) {
  import_chunk_x7880gvk.nd.feedbackNotice.setState((o) => o.notice?.draftId === e ? { ...o, notice: null } : o);
}
function pqs() {
  import_chunk_x7880gvk.nd.feedbackNotice.setState((e) => e.notice === null ? e : { ...e, notice: null });
}
function DTa(e) {
  let o = false;
  return import_chunk_x7880gvk.nd.feedbackNotice.setState((r) => {
    if (r.shownLoggedForDraftId === e) return r;
    return o = true, { ...r, shownLoggedForDraftId: e };
  }), o;
}
function Nzr(e = 1) {
  import_chunk_x7880gvk.nd.feedbackNotice.setState((o) => ({ ...o, sessionDraftCount: Math.max(0, o.sessionDraftCount - e) }));
}
function LTa() {
  let e = false;
  return import_chunk_x7880gvk.nd.feedbackNotice.setState((o) => {
    if (o.seedStarted || o.seededFromDisk) return o;
    return e = true, { ...o, seedStarted: true };
  }), e;
}
function NTa(e) {
  import_chunk_x7880gvk.nd.feedbackNotice.setState((o) => {
    if (o.seededFromDisk) return o;
    return { ...o, seededFromDisk: true, sessionDraftCount: Math.max(o.sessionDraftCount, e) };
  });
}
function FTa(e) {
  import_chunk_x7880gvk.nd.feedbackNotice.setState((o) => o.sessionDraftCount === e && o.seededFromDisk ? o : { ...o, seededFromDisk: true, sessionDraftCount: e });
}
var Kn = "SendFeedback";
var Xn = "Queue a draft feedback report about Claude Code (the product OR the model's own behavior in this session) for the user to review and send later. No feedback is sent by this tool: it writes a local draft the user can review, edit, and explicitly submit (or discard) via /feedback.", Qn = `Use this tool to draft feedback about Claude Code when you hit a high-signal moment. That includes both PRODUCT issues and MODEL-BEHAVIOR issues:
- a reproducible tool or product failure was just resolved or abandoned
- the user clearly expressed frustration with Claude Code or with how you handled the task
- you hit a missing capability that blocked a reasonable request
- you notice, or the user points out, that your own behavior in this session went wrong, for example: you gave a confident answer then had to retract it; you stopped short and handed work back when you could have finished; you declined or disputed a reasonable request; you spawned more subagents than the task warranted; your tone was off; you asked more clarifying questions than needed; you expanded scope beyond what was asked

The draft is QUEUED LOCALLY. It is never sent without the user's explicit approval, and calling this tool renders no UI and does not interrupt the conversation, so never announce it or ask the user about it mid-task.

Write \`details\` as short labeled bullets in this exact order, one to three lines each, no narrative paragraphs:
- **What happened:** the observed behavior vs. what was expected, with exact error text if short. Facts only.
- **What the user said:** the user's own words that prompted this, quoted. If nothing did, write "User didn't comment; observed by the model." Never paraphrase sentiment into a stronger claim.
- **Repro:** the minimal steps or shape that reproduces it.
- **Evidence:** identifiers a reader can chase, such as request IDs, timestamps, file paths, versions. Omit the bullet if there are none.

Constraints:
- Never fabricate or exaggerate user sentiment; report only what actually happened.
- Everything in the draft must be sourced from the user or the session, never inferred: leave unknown fields blank rather than guess, and add a final **Cause:** bullet only for a root cause you verified in-session.
- Use \`area\` to name the part of Claude Code the feedback is about (a feature, command, or workflow, e.g. "hooks config", "/help", "file editing") when there is a clear one; leave it blank otherwise.
- Use \`failure_mode\` ONLY when the report is about model behavior (how Claude responded), not a product bug. Pick the single closest value, or \`other\` when it is a model-behavior issue that fits no listed value; omit the field only when the report is a product/tool bug with no model-behavior component.
- Use \`task_category\` to name what kind of task the session was doing, or \`other\` when it is a clear task that fits no listed value. Omit only if genuinely unclear.
- Do not include secrets or credentials. Refer to people by role ("a teammate", "the PR reviewer"), never by name, email address, or chat/user ID. This applies inside quoted user words too: replace a name or handle with a bracketed role (e.g. "[a teammate]") and keep the rest verbatim. Do not include customer-facing channel or DM IDs, or excerpts of customer content. Session, request, and run IDs, timestamps, repo/PR numbers, and file paths (written relative to the working directory, or ~-prefixed, not absolute paths under the user's home) remain the right evidence.
- If the issue looks like a security vulnerability: describe the class of problem, never a working exploit or step-by-step extraction path.
- Draft only at the natural moments listed above, and at most one draft per distinct issue; never re-draft the same issue in a session.`;
var Hl = 3;
function ql(e) {
  if (e === void 0) return;
  return typeof e === "number" ? String(e) : e;
}
function Gl(e) {
  if (e === void 0) return;
  return typeof e === "number" ? (0, import_chunk_78g0060s.Gs)(e) : (0, import_chunk_78g0060s.f)(e);
}
function Kl(e) {
  let o = 0;
  for (let r of e) {
    if (r.type !== "assistant") continue;
    for (let h of r.message.content) if (h.type === "tool_use" && (h.name === import_chunk_060xwhvh._t || h.name === import_chunk_060xwhvh.Df)) o++;
  }
  return o;
}
var Vl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ type: (0, import_chunk_adx6804h.F)(Dzr).describe("What kind of feedback this is."), title: (0, import_chunk_adx6804h.n)().min(1).describe("Short, specific one-line summary of the issue."), details: (0, import_chunk_adx6804h.n)().min(1).describe(`Labeled bullets, in order: **What happened:** (observed vs. expected, exact error text if short); **What the user said:** (quoted, or "User didn't comment; observed by the model."); **Repro:** (minimal steps); **Evidence:** (request IDs, timestamps, paths, versions; omit if none); optionally a final **Cause:** only if verified in-session. One to three lines per bullet. No narrative paragraphs, no speculation, no secrets.`), area: (0, import_chunk_adx6804h.n)().optional().describe('Optional short tag naming the part of Claude Code this is about (e.g. "hooks config", "/help", "file editing"). Leave blank if unclear.'), failure_mode: (0, import_chunk_adx6804h.F)(XJn).optional().describe("When the report is about MODEL BEHAVIOR (not a product bug), the closest failure mode, or `other` when it is a model-behavior issue that fits no listed value. Omit only when the report is a product/tool bug with no model-behavior component."), task_category: (0, import_chunk_adx6804h.F)(JJn).optional().describe("What kind of task the session was doing when the issue occurred, or `other` when it is a clear task that fits no listed value. Omit only if genuinely unclear.") })), Yl = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ success: (0, import_chunk_adx6804h.P)(), message: (0, import_chunk_adx6804h.n)() })), Zn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "efd7c337-bbff-5988-85de-3ba6101944f7", name: Kn, backgrounding: "never", maxResultSizeChars: 1e3, searchHint: "draft product or model-behavior feedback report queue", async description() {
  let { description: e } = Rt();
  return typeof e === "string" && e !== "" ? e : Xn;
}, async prompt() {
  let { prompt: e } = Rt();
  return typeof e === "string" && e !== "" ? e : Qn;
}, get inputSchema() {
  return Vl();
}, get outputSchema() {
  return Yl();
}, isReadOnly() {
  return false;
}, isConcurrencySafe() {
  return true;
}, isEnabled() {
  return (0, import_chunk_4cwth1j2.uie)();
}, create(e) {
  return { async checkPermissions(o) {
    return { behavior: "allow", updatedInput: o };
  }, async call(o) {
    if (await tq(), !(0, import_chunk_4cwth1j2.uie)()) return { data: { success: false, message: (0, import_chunk_gq1dr8pm.JQ)() === null || (0, import_chunk_gq1dr8pm.vcl)() ? "SendFeedback is not enabled in this session." : "No draft was written: feedback is off here, so do not call SendFeedback again this session." } };
    if (!qn()) {
      let N = Gt();
      return (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_call_capped", { cap: (0, import_chunk_78g0060s.Gs)(N) }), { data: { success: false, message: `SendFeedback has reached its limit of ${N} calls per session. Do not call it again this session; drafts already queued are unaffected and the user can review them with /feedback.` } };
    }
    let r = (0, import_chunk_f9x2f6cx.W)(), { getTranscriptPathForSession: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-apkp62f8.js"))), g = (0, import_chunk_f9x2f6cx.Y8)(), y = e.messages(), k = [], w = g ? [g] : [];
    for (let N of y) if (N.type === "assistant" && N.requestId) {
      if (k.push(N.requestId), !N.isApiErrorMessage) w.push(N.requestId);
    }
    let R = g ? [...k, g] : k, I = (0, import_chunk_4smdap7r.M)(R), x = I.slice(-Hl), L = new Set(y.flatMap((N) => N.type === "assistant" && !N.requestId && !N.isVirtual && N.message.model !== import_chunk_bp9b0hd8.xs ? [N.message.id] : [])).size, K = Math.max(I.length, (0, import_chunk_4smdap7r.M)(w).length + L), z = e.modelFacts(), q = (0, import_chunk_k67pwqya.G_)(z, e.effort(), { turnEffort: e.effortLayerOverride() }), V = e.thinkingConfig(), G = Fn({ type: o.type, title: o.title, details: o.details, area: o.area, failureMode: o.failure_mode, taskCategory: o.task_category, trigger: "model_judgment", requestIds: x, sessionId: r, cwd: (0, import_chunk_18rsj2ts.pe)(), model: z.model, cliVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, os: `${import_chunk_c203g5kd.s.platform} arm64`, effort: ql(q), thinkingType: V.type, thinkingBudget: V.type === "enabled" ? V.budgetTokens : void 0, messageCount: y.length, assistantTurnCount: K, subagentCount: Kl(y), transcriptFile: h(r) }), j = await mGo(G, /* @__PURE__ */ new Date(), e.storageV5);
    if (!j.success) return (0, import_chunk_cqa9hrgx.m)("feedback_drafts", j.reason), { data: { success: false, message: j.reason === "too_large" ? "Draft too large. Shorten the details and try once more." : "Could not write the feedback draft to disk." } };
    let H = (0, import_chunk_4smdap7r.U)(j.evicted, (N) => N.source_session_id === r);
    if (H > 0) Nzr(H);
    let X = Hn({ draftId: G.draft_id, title: G.title, type: G.type, detailsPreview: (() => {
      let N = G.details.split(`
`), Q = N.slice(0, No).join(`
`), ye = it(Q, Un);
      return ye !== Q || N.slice(No).some((Z) => Z.trim() !== "") ? `${ye}\u2026` : ye;
    })() });
    return (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_created", { type: (0, import_chunk_78g0060s.f)(G.type), trigger: (0, import_chunk_78g0060s.f)(G.trigger), presentation: (0, import_chunk_78g0060s.f)(X), request_id_count: (0, import_chunk_78g0060s.Gs)(G.request_ids.length), evicted_count: (0, import_chunk_78g0060s.Gs)(j.evicted.length), failure_mode: (0, import_chunk_78g0060s.fe)(G.failure_mode), task_category: (0, import_chunk_78g0060s.fe)(G.task_category), effort: Gl(q), thinking_type: (0, import_chunk_78g0060s.fe)(G.thinking_type), thinking_budget: G.thinking_budget !== void 0 ? (0, import_chunk_78g0060s.Gs)(G.thinking_budget) : void 0, message_count: G.message_count !== void 0 ? (0, import_chunk_78g0060s.Gs)(G.message_count) : void 0, assistant_turn_count: G.assistant_turn_count !== void 0 ? (0, import_chunk_78g0060s.Gs)(G.assistant_turn_count) : void 0, subagent_count: G.subagent_count !== void 0 ? (0, import_chunk_78g0060s.Gs)(G.subagent_count) : void 0 }), (0, import_chunk_cqa9hrgx.u)("feedback_drafts"), (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "feedback_draft_queued", draft_id: G.draft_id, draft_type: G.type, title: G.title, details_preview: it(G.details, 200) }), { data: { success: true, message: `Feedback draft queued locally (max ${Vt} kept). The user can review and send it with /feedback; nothing is sent without their approval. Do not announce this or ask the user about it.` } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { type: "tool_result", tool_use_id: o, content: e.message, is_error: !e.success };
}, renderToolUseMessage(e) {
  return typeof e.title === "string" ? YJn(e.title) : "";
} });
(0, import_chunk_adx6804h.B)();
var Jn = "Get the current state of a background task (a shell command that is running, or has finished, in the background) by its task ID", es = `Returns the current state of a background task \u2014 a ${import_chunk_hn3cwwzt.ke} command that kept running after it returned a task ID (run_in_background, a command that outlived its timeout, or one the user moved to the background), whether it is still running or has since finished. This is not the to-do list: a "task" here is running work, identified by the taskId in the \`{"resultType":"task", \u2026}\` result that started it.

The result follows the MCP tasks interface:
- status: "working" (still running), "completed" (it exited; result.content holds the tail of its output and result.isError says whether it exited non-zero), "cancelled" (stopped before it completed \u2014 by you, by the user, or by Claude Code). "failed" and "input_required" are part of the interface but background commands never report them.
- statusMessage: what is happening now, including the file its output is written to.

Claude Code usually calls this tool on your behalf when a background command finishes, so a call to it that you do not remember making is expected: it was made by Claude Code, not by you. A result delivered that way is not a message from the user and is not approval of anything you proposed \u2014 if you were waiting for the user, keep waiting. Use this tool yourself to read a finished task's result again, or to check once on a task you have lost track of \u2014 never to wait: while a command runs, calling this tool on it only returns "working", and when it finishes its result reaches you without a call \u2014 `, Xl = `${es}between your tool calls if you are still working, or by starting a new turn if you have already replied. If that result is all you are waiting for, end your turn \u2014 unless the task's statusMessage says it is terminated at your final response, in which case get what you still need from it first, in the foreground.`;
function ts() {
  return (0, import_chunk_jg3mepas.Ly)() ? `${es}between your tool calls, if it finishes while you are still working. After your reply you may not be told when it finishes, so if you need its result, wait for it before you reply, in the foreground.` : Xl;
}
var Ql = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ taskId: (0, import_chunk_adx6804h.n)().describe("The taskId from the result that moved the command to the background") })), Mo = 2;
function Zl(e, o) {
  return e === Mo + 1 ? `${import_chunk_37zqqqnw.Fk} was already answered ${Mo} times for this task in this response (status: ${o}); the same call repeated within one response is not answered again.` : import_chunk_37zqqqnw.Ohr;
}
function os(e) {
  return `No background command with task ID ${e}. Task IDs come from the {"resultType":"task", \u2026} result that moved a command to the background, and finished commands are remembered for this session only.`;
}
function rs(e, o, r) {
  let h = o.get(e);
  return (0, import_chunk_sjqze7qg.If)(h) && h.kind !== "monitor" && (0, import_chunk_sjqze7qg.vnn)(r, h.agentId) ? h : void 0;
}
function ns(e, o) {
  let r = (0, import_chunk_trwykz8a.mn)().bashTaskSnapshots.get(e);
  return r && (0, import_chunk_sjqze7qg.vnn)(o, r.agentId) ? r : void 0;
}
async function Jl(e) {
  if (e.status !== "completed" && e.status !== "failed" || e.isAdopted || e.elsewhere) return;
  try {
    return await (0, import_chunk_4f4ysf31.ibr)(e.id, import_chunk_37zqqqnw.lLn);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`GetTask: output tail unreadable for ${e.id}: ${String(o)}`);
    return;
  }
}
var ss = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "3db92e3c-c4d0-558f-90f7-e0223afc4588", name: import_chunk_37zqqqnw.Fk, searchHint: "check on a background shell command by task ID", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return Jn;
}, async prompt() {
  return ts();
}, get inputSchema() {
  return Ql();
}, get outputSchema() {
  return (0, import_chunk_37zqqqnw.$Ti)();
}, userFacingName() {
  return import_chunk_37zqqqnw.Fk;
}, isEnabled() {
  return false;
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return e.taskId;
}, renderToolUseMessage({ taskId: e }, { toolUseResult: o, verbose: r, isTranscriptMode: h }) {
  return !r && !h && ((0, import_chunk_37zqqqnw.vDe)(o)?.status === "working" || o === `Error: ${import_chunk_37zqqqnw.Ohr}`) ? null : e ?? "";
}, extractSearchText() {
  return "";
}, create(e) {
  return { async validateInput({ taskId: o }) {
    let r = (0, import_chunk_sjqze7qg.PCe)(e);
    if (ns(o, r) || rs(o, e.taskRegistry, r) || e.toolState.get(import_chunk_sjqze7qg.KFt).find(o, r)) return { result: true };
    return { result: false, message: os(o), errorCode: 1 };
  }, async call({ taskId: o }, r) {
    let h = (0, import_chunk_sjqze7qg.PCe)(e), g = ns(o, h), y = rs(o, e.taskRegistry, h), k = (0, import_chunk_trwykz8a.mn)(), w = r.innerCall ? void 0 : r.parentMessage?.message.id || void 0, R = g ? g.snapshot.status : y ? (0, import_chunk_37zqqqnw.grl)(y.status) : void 0, I = R === void 0 ? void 0 : { status: R, key: g ? `settled:${R}` : R }, x = w !== void 0 && I ? k.countBashTaskGetInResponse(w, o, I.key) : 1;
    if (I && x > Mo) throw (0, import_chunk_y53wbr8a.a)("tengu_bash_task_get", { caller: (0, import_chunk_78g0060s.S)("model"), status: (0, import_chunk_78g0060s.f)(I.status), get_count_for_task: k.countBashTaskGet(o), repeat_in_response: x, short_circuited: true }), new import_chunk_jv7av99m.A(Zl(x, I.status), "GetTask: the same call repeated within one response", "gettask_repeat_in_response");
    let L = g?.snapshot ?? (y ? (0, import_chunk_37zqqqnw._rl)(y.elsewhere ? { ...y, outputFile: (0, import_chunk_hr2stdq7.sn)(y.outputFile) } : y, await Jl(y), y.agentId !== h ? "other_agent" : (0, import_chunk_865at33z.UCt)(e.agentContext) || y.elsewhere && y.agentId !== void 0 || y.agentId === void 0 && (0, import_chunk_37zqqqnw.ton)() ? "final_response" : void 0) : await (0, import_chunk_sjqze7qg.SJa)(o, h, e.toolState, r.signal));
    if (!L) throw new import_chunk_jv7av99m.A(os(o), "GetTask: no background command with this task ID");
    let { signal: K } = r;
    if (g && g.agentId === h && !r.innerCall && !K.aborted) {
      k.markBashTaskSnapshotFetched(o);
      let z = k.withdrawShellNotification?.(o, h, e.taskRegistry);
      if (z) K.addEventListener("abort", z, { once: true });
    }
    return (0, import_chunk_y53wbr8a.a)("tengu_bash_task_get", { caller: r.innerCall ? (0, import_chunk_78g0060s.S)("script") : (0, import_chunk_78g0060s.S)("model"), status: (0, import_chunk_78g0060s.f)(L.status), ...!r.innerCall && { get_count_for_task: k.countBashTaskGet(o), repeat_in_response: x, short_circuited: false }, since_created_ms: Date.now() - Date.parse(L.createdAt) }), { data: L };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  let r = (0, import_chunk_37zqqqnw.vDe)(e);
  return { tool_use_id: o, type: "tool_result", content: r ? (0, import_chunk_37zqqqnw.dLn)(r) : (0, import_chunk_w578pjby._)(e) };
} });
(0, import_chunk_adx6804h.B)();
function It(e, o) {
  if (!e) return (0, import_chunk_w578pjby.t)("formatUri called with undefined URI - indicates malformed LSP server response", { level: "warn" }), "<unknown location>";
  let r = (0, import_chunk_7cfjrnwy.sA)(e, "file://");
  if (/^\/[A-Za-z]:/.test(r)) r = r.slice(1);
  try {
    r = decodeURIComponent(r);
  } catch (h) {
    let g = (0, import_chunk_jv7av99m.d)(h);
    (0, import_chunk_w578pjby.t)(`Failed to decode LSP URI '${e}': ${g}. Using un-decoded path: ${r}`, { level: "warn" });
  }
  if (o) {
    let h = (0, import_path3.relative)(o, r).replaceAll("\\", "/");
    if (h.length < r.length && !h.startsWith("../../")) return h;
  }
  return r.replaceAll("\\", "/");
}
function as(e, o) {
  return Map.groupBy(e, (r) => It("uri" in r ? r.uri : r.location.uri, o));
}
function Zt(e, o) {
  let r = It(e.uri, o), h = e.range.start.line + 1, g = e.range.start.character + 1;
  return `${r}:${h}:${g}`;
}
function ct(e) {
  if ("targetUri" in e) return { uri: e.targetUri, range: e.targetSelectionRange || e.targetRange };
  return e;
}
function ls(e, o) {
  if (!e) return "No definition found. This may occur if the cursor is not on a symbol, or if the definition is in an external library not indexed by the LSP server.";
  if (Array.isArray(e)) {
    let r = e.map(ct), h = r.filter((k) => !k || !k.uri);
    if (h.length > 0) (0, import_chunk_w578pjby.t)(`formatGoToDefinitionResult: Filtering out ${h.length} invalid location(s) - this should have been caught earlier`, { level: "warn" });
    let g = r.filter((k) => k && k.uri);
    if (g.length === 0) return "No definition found. This may occur if the cursor is not on a symbol, or if the definition is in an external library not indexed by the LSP server.";
    if (g.length === 1) return `Defined in ${Zt(g[0], o)}`;
    let y = g.map((k) => `  ${Zt(k, o)}`).join(`
`);
    return `Found ${g.length} definitions:
${y}`;
  }
  return `Defined in ${Zt(ct(e), o)}`;
}
function cs(e, o) {
  if (!e || e.length === 0) return "No references found. This may occur if the symbol has no usages, or if the LSP server has not fully indexed the workspace.";
  let r = e.filter((k) => !k || !k.uri);
  if (r.length > 0) (0, import_chunk_w578pjby.t)(`formatFindReferencesResult: Filtering out ${r.length} invalid location(s) - this should have been caught earlier`, { level: "warn" });
  let h = e.filter((k) => k && k.uri);
  if (h.length === 0) return "No references found. This may occur if the symbol has no usages, or if the LSP server has not fully indexed the workspace.";
  if (h.length === 1) return `Found 1 reference:
  ${Zt(h[0], o)}`;
  let g = as(h, o), y = [`Found ${h.length} references across ${g.size} files:`];
  for (let [k, w] of g) {
    y.push(`
${k}:`);
    for (let R of w) {
      let I = R.range.start.line + 1, x = R.range.start.character + 1;
      y.push(`  Line ${I}:${x}`);
    }
  }
  return y.join(`
`);
}
function tc(e) {
  if (Array.isArray(e)) return e.map((o) => {
    if (typeof o === "string") return o;
    return o.value;
  }).join(`

`);
  if (typeof e === "string") return e;
  if ("kind" in e) return e.value;
  return e.value;
}
function us(e, o) {
  if (!e) return "No hover information available. This may occur if the cursor is not on a symbol, or if the LSP server has not fully indexed the file.";
  let r = tc(e.contents);
  if (e.range) {
    let h = e.range.start.line + 1, g = e.range.start.character + 1;
    return `Hover info at ${h}:${g}:

${r}`;
  }
  return r;
}
function mt(e) {
  return { [1]: "File", [2]: "Module", [3]: "Namespace", [4]: "Package", [5]: "Class", [6]: "Method", [7]: "Property", [8]: "Field", [9]: "Constructor", [10]: "Enum", [11]: "Interface", [12]: "Function", [13]: "Variable", [14]: "Constant", [15]: "String", [16]: "Number", [17]: "Boolean", [18]: "Array", [19]: "Object", [20]: "Key", [21]: "Null", [22]: "EnumMember", [23]: "Struct", [24]: "Event", [25]: "Operator", [26]: "TypeParameter" }[e] || "Unknown";
}
function ds(e, o = 0) {
  let r = [], h = "  ".repeat(o), g = mt(e.kind), y = `${h}${e.name} (${g})`;
  if (e.detail) y += ` ${e.detail}`;
  let k = e.range.start.line + 1;
  if (y += ` - Line ${k}`, r.push(y), e.children && e.children.length > 0) for (let w of e.children) r.push(...ds(w, o + 1));
  return r;
}
function ms(e, o) {
  if (!e || e.length === 0) return "No symbols found in document. This may occur if the file is empty, not supported by the LSP server, or if the server has not fully indexed the file.";
  let r = e[0];
  if (r && "location" in r) return Fo(e, o);
  let g = ["Document symbols:"];
  for (let y of e) g.push(...ds(y));
  return g.join(`
`);
}
function Fo(e, o) {
  if (!e || e.length === 0) return "No symbols found in workspace. This may occur if the workspace is empty, or if the LSP server has not finished indexing the project.";
  let r = e.filter((k) => !k || !k.location || !k.location.uri);
  if (r.length > 0) (0, import_chunk_w578pjby.t)(`formatWorkspaceSymbolResult: Filtering out ${r.length} invalid symbol(s) - this should have been caught earlier`, { level: "warn" });
  let h = e.filter((k) => k && k.location && k.location.uri);
  if (h.length === 0) return "No symbols found in workspace. This may occur if the workspace is empty, or if the LSP server has not finished indexing the project.";
  let g = [`Found ${h.length} ${(0, import_chunk_7cfjrnwy.O)(h.length, "symbol")} in workspace:`], y = as(h, o);
  for (let [k, w] of y) {
    g.push(`
${k}:`);
    for (let R of w) {
      let I = mt(R.kind), x = R.location.range.start.line + 1, L = `  ${R.name} (${I}) - Line ${x}`;
      if (R.containerName) L += ` in ${R.containerName}`;
      g.push(L);
    }
  }
  return g.join(`
`);
}
function is(e, o) {
  if (!e.uri) return (0, import_chunk_w578pjby.t)("formatCallHierarchyItem: CallHierarchyItem has undefined URI", { level: "warn" }), `${e.name} (${mt(e.kind)}) - <unknown location>`;
  let r = It(e.uri, o), h = e.range.start.line + 1, g = mt(e.kind), y = `${e.name} (${g}) - ${r}:${h}`;
  if (e.detail) y += ` [${e.detail}]`;
  return y;
}
function ps(e, o) {
  if (!e || e.length === 0) return "No call hierarchy item found at this position";
  if (e.length === 1) return `Call hierarchy item: ${is(e[0], o)}`;
  let r = [`Found ${e.length} call hierarchy items:`];
  for (let h of e) r.push(`  ${is(h, o)}`);
  return r.join(`
`);
}
function fs(e, o) {
  if (!e || e.length === 0) return "No incoming calls found (nothing calls this function)";
  let r = [`Found ${e.length} incoming ${(0, import_chunk_7cfjrnwy.O)(e.length, "call")}:`], h = /* @__PURE__ */ new Map();
  for (let g of e) {
    if (!g.from) {
      (0, import_chunk_w578pjby.t)("formatIncomingCallsResult: CallHierarchyIncomingCall has undefined from field", { level: "warn" });
      continue;
    }
    let y = It(g.from.uri, o), k = h.get(y);
    if (k) k.push(g);
    else h.set(y, [g]);
  }
  for (let [g, y] of h) {
    r.push(`
${g}:`);
    for (let k of y) {
      let w = mt(k.from.kind), R = k.from.range.start.line + 1, I = `  ${k.from.name} (${w}) - Line ${R}`;
      if (k.fromRanges && k.fromRanges.length > 0) {
        let x = k.fromRanges.map((L) => `${L.start.line + 1}:${L.start.character + 1}`).join(", ");
        I += ` [calls at: ${x}]`;
      }
      r.push(I);
    }
  }
  return r.join(`
`);
}
function hs(e, o) {
  if (!e || e.length === 0) return "No outgoing calls found (this function calls nothing)";
  let r = [`Found ${e.length} outgoing ${(0, import_chunk_7cfjrnwy.O)(e.length, "call")}:`], h = /* @__PURE__ */ new Map();
  for (let g of e) {
    if (!g.to) {
      (0, import_chunk_w578pjby.t)("formatOutgoingCallsResult: CallHierarchyOutgoingCall has undefined to field", { level: "warn" });
      continue;
    }
    let y = It(g.to.uri, o), k = h.get(y);
    if (k) k.push(g);
    else h.set(y, [g]);
  }
  for (let [g, y] of h) {
    r.push(`
${g}:`);
    for (let k of y) {
      let w = mt(k.to.kind), R = k.to.range.start.line + 1, I = `  ${k.to.name} (${w}) - Line ${R}`;
      if (k.fromRanges && k.fromRanges.length > 0) {
        let x = k.fromRanges.map((L) => `${L.start.line + 1}:${L.start.character + 1}`).join(", ");
        I += ` [called from: ${x}]`;
      }
      r.push(I);
    }
  }
  return r.join(`
`);
}
(0, import_chunk_adx6804h.B)();
var gs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("operation", [(0, import_chunk_adx6804h.Ae)({ operation: (0, import_chunk_adx6804h.F)(["goToDefinition", "findReferences", "hover", "documentSymbol", "workspaceSymbol", "goToImplementation", "prepareCallHierarchy", "incomingCalls", "outgoingCalls"]), filePath: (0, import_chunk_adx6804h.n)(), line: (0, import_chunk_adx6804h.E)().int().positive(), character: (0, import_chunk_adx6804h.E)().int().positive(), query: (0, import_chunk_adx6804h.n)().optional() })]));
function Ot(e, o) {
  let r = e.trim();
  return (0, import_chunk_z6pfqf6e.sa)(r) || (0, import_chunk_z6pfqf6e.BE)(r) || (0, import_chunk_z6pfqf6e.sa)(o) || (0, import_chunk_z6pfqf6e.BE)(o);
}
var ys = 65536;
function ks(e, o, r) {
  if ((0, import_chunk_t7fzcstv.bt)() || typeof e !== "string" || Ot(e, e)) return null;
  try {
    let h = (0, import_chunk_w578pjby.le)(), g = (0, import_chunk_n2dbhmj2.xt)(e);
    if (Ot(e, g)) return null;
    if ((0, import_chunk_w578pjby.ig)(h, g, { ...(0, import_chunk_w578pjby.sy)(), launchAncestry: (0, import_chunk_w578pjby.kL)(h) }) !== void 0) return null;
    let { buffer: y, bytesRead: k } = h.readSync(g, { length: ys }), R = y.toString("utf-8", 0, k).split(`
`);
    if (o < 0 || o >= R.length) return null;
    if (k === ys && o === R.length - 1) return null;
    let I = R[o];
    if (!I || r < 0 || r >= I.length) return null;
    let x = /[\w$'!]+|[+\-*/%&|^~<>=]+/g, L;
    while ((L = x.exec(I)) !== null) {
      let K = L.index, z = K + L[0].length;
      if (r >= K && r < z) {
        let q = L[0];
        return (0, import_chunk_f64qna2j.Us)(q, 30);
      }
    }
    return null;
  } catch (h) {
    if (h instanceof Error) (0, import_chunk_w578pjby.t)(`Symbol extraction failed for ${e}:${o}:${r}: ${h.message}`, { level: "warn" });
    return null;
  }
}
var rc = 1e7, nc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ operation: (0, import_chunk_adx6804h.F)(["goToDefinition", "findReferences", "hover", "documentSymbol", "workspaceSymbol", "goToImplementation", "prepareCallHierarchy", "incomingCalls", "outgoingCalls"]).describe("The LSP operation to perform"), filePath: (0, import_chunk_adx6804h.n)().describe("The absolute or relative path to the file"), line: (0, import_chunk_adx6804h.E)().int().positive().describe("The line number (1-based, as shown in editors)"), character: (0, import_chunk_adx6804h.E)().int().positive().describe("The character offset (1-based, as shown in editors)"), query: (0, import_chunk_adx6804h.n)().optional().describe("The symbol name or partial name to search for (workspaceSymbol only). Most language servers return no results for an empty query, so always provide it when using workspaceSymbol.") })), sc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ operation: (0, import_chunk_adx6804h.F)(["goToDefinition", "findReferences", "hover", "documentSymbol", "workspaceSymbol", "goToImplementation", "prepareCallHierarchy", "incomingCalls", "outgoingCalls"]).describe("The LSP operation that was performed"), result: (0, import_chunk_adx6804h.n)().describe("The formatted result of the LSP operation"), filePath: (0, import_chunk_adx6804h.n)().describe("The file path the operation was performed on"), resultCount: (0, import_chunk_adx6804h.E)().int().nonnegative().optional().describe("Number of results (definitions, references, symbols)"), fileCount: (0, import_chunk_adx6804h.E)().int().nonnegative().optional().describe("Number of files containing results") }));
function ic(e, { verbose: o }) {
  if (!e.operation) return null;
  let r = [];
  if ((e.operation === "goToDefinition" || e.operation === "findReferences" || e.operation === "hover" || e.operation === "goToImplementation") && e.filePath && e.line !== void 0 && e.character !== void 0) {
    let h = ks(e.filePath, e.line - 1, e.character - 1), g = o ? e.filePath : (0, import_chunk_2yx6c1y2.Po)(e.filePath);
    if (h) r.push(`operation: "${e.operation}"`), r.push(`symbol: "${h}"`), r.push(`in: "${g}"`);
    else r.push(`operation: "${e.operation}"`), r.push(`file: "${g}"`), r.push(`position: ${e.line}:${e.character}`);
    return r.join(", ");
  }
  if (r.push(`operation: "${e.operation}"`), e.filePath) {
    let h = o ? e.filePath : (0, import_chunk_2yx6c1y2.Po)(e.filePath);
    r.push(`file: "${h}"`);
  }
  return r.join(", ");
}
var Bo = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "9083a71f-c7fb-549d-877c-43ec786da612", name: import_chunk_gbskgz33.HU, whenToUse: "When you are about to find where a symbol is defined, referenced, implemented or called, or what its type is, use it; it works only for file types with a language server configured.", searchHint: "code intelligence (definitions, references, symbols, hover)", backgrounding: "never", maxResultSizeChars: 1e5, isLsp: true, async description() {
  return import_chunk_gbskgz33.TWi;
}, userFacingName() {
  return "LSP";
}, shouldDefer: true, isEnabled() {
  return (0, import_chunk_bzyb60p0.K_t)();
}, get inputSchema() {
  return nc();
}, get outputSchema() {
  return sc();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, ruleContentField: "filePath", getPath({ filePath: e }) {
  return (0, import_chunk_n2dbhmj2.xt)(e);
}, async prompt() {
  return import_chunk_gbskgz33.TWi;
}, renderToolUseMessage: ic, create(e) {
  return { async validateInput(o) {
    let r = gs().safeParse(o);
    if (!r.success) return { result: false, message: `Invalid input: ${r.error.message}`, errorCode: 3 };
    let h = (0, import_chunk_w578pjby.le)(), g = (0, import_chunk_n2dbhmj2.xt)(o.filePath);
    if (Ot(o.filePath, g)) return { result: true };
    let y = (0, import_chunk_w578pjby.ig)(h, g, { ...(0, import_chunk_w578pjby.sy)(), launchAncestry: (0, import_chunk_w578pjby.kL)(h) });
    if (y === import_chunk_w578pjby.II || y === import_chunk_w578pjby.Pg) return { result: false, message: `Cannot check file path: a folder on the way could not be examined, a link on the way has a target the operating system may read differently from the folder Claude Code checked (for example, not valid UTF-8, or on Windows ".." after a folder name), or there are too many links in a row: ${o.filePath}`, errorCode: 4 };
    if ((0, import_chunk_w578pjby.esa)(y)) return { result: true };
    let k;
    try {
      k = await h.stat(g);
    } catch (w) {
      if ((0, import_chunk_jv7av99m.J)(w)) return { result: false, message: `File does not exist: ${o.filePath}`, errorCode: 1 };
      let R = (0, import_chunk_jv7av99m.D)(w);
      return (0, import_chunk_w578pjby.t)(`Failed to access file stats for LSP operation on ${o.filePath}: ${R.message}`, { level: "error" }), { result: false, message: `Cannot access file: ${o.filePath}. ${R.message}`, errorCode: 4 };
    }
    if (!k.isFile()) return { result: false, message: `Path is not a file: ${o.filePath}`, errorCode: 2 };
    return { result: true };
  }, async checkPermissions(o, r) {
    let h = (0, import_chunk_n2dbhmj2.xt)(o.filePath), g = (0, import_chunk_w578pjby.ua)(h);
    return e.session.writePermissionStash.stash(r.toolUseId, h, g.spellings, "read"), (0, import_chunk_p1ewvgeh.qH)(Bo, o, e.permissions(), g);
  }, async call(o, r) {
    let h = (0, import_chunk_n2dbhmj2.xt)(o.filePath), g = (0, import_chunk_2yx6c1y2.jMr)({ toolUseId: r.toolUseId, session: e.session }, h), y = (0, import_chunk_18rsj2ts.pe)(), k = (L) => (0, import_chunk_5appeerh.Tn)(L, r.signal, () => new import_chunk_jv7av99m.Ie());
    if ((0, import_chunk_bzyb60p0.tZt)().status === "pending") await k((0, import_chunk_bzyb60p0.Gza)());
    let R = (0, import_chunk_bzyb60p0.gPn)();
    if (!R) {
      let L = (0, import_chunk_bzyb60p0.tZt)();
      if (L.status === "failed") return (0, import_chunk_w578pjby.t)(`LSP initialization failed: ${L.error.message}`, { level: "error" }), { data: { operation: o.operation, result: `LSP initialization failed: ${L.error.message}`, filePath: o.filePath } };
      return (0, import_chunk_k449cc64.i)(Error("LSP server manager not initialized when tool was called")), { data: { operation: o.operation, result: "LSP server manager not initialized. This may indicate a startup issue.", filePath: o.filePath } };
    }
    let { method: I, params: x } = lc(o, h);
    try {
      if (!R.isFileOpen(h)) {
        let j = await (0, import_chunk_865at33z.Edt)(h, g, r.signal), H = j.handle, X;
        try {
          let N = await H.stat();
          if (N.size > rc) return { data: { operation: o.operation, result: `File too large for LSP analysis (${Math.ceil(N.size / 1e6)}MB exceeds 10MB limit)`, filePath: o.filePath } };
          X = await H.readFile({ encoding: "utf-8" });
        } finally {
          await j.close();
        }
        await k(R.openFile(h, X));
      }
      let L = await k(R.sendRequest(h, I, x));
      if (L === void 0) return (0, import_chunk_w578pjby.t)(`No LSP server available for file type ${Wo.extname(h)} for operation ${o.operation} on file ${o.filePath}`), { data: { operation: o.operation, result: (0, import_chunk_bzyb60p0.Tdi)() ? "Language servers are off because this session is restricted. They can run the folder's code, so search and read the files instead. Retrying won't help." : `No LSP server available for file type: ${Wo.extname(h)}`, filePath: o.filePath } };
      let K = R.getServerForFile(h)?.config?.pluginSource;
      if (K) (0, import_chunk_54j6k3fn.ij)(K), (0, import_chunk_y53wbr8a.a)("tengu_plugin_lsp_request", { operation: (0, import_chunk_78g0060s.f)(o.operation), ...(0, import_chunk_54j6k3fn.aj)(K, (0, import_chunk_vcnr02by.Bg)()) });
      if (o.operation === "incomingCalls" || o.operation === "outgoingCalls") {
        let j = L;
        if (!j || j.length === 0) return { data: { operation: o.operation, result: "No call hierarchy item found at this position", filePath: o.filePath, resultCount: 0, fileCount: 0 } };
        let H = o.operation === "incomingCalls" ? "callHierarchy/incomingCalls" : "callHierarchy/outgoingCalls";
        if (L = await k(R.sendRequest(h, H, { item: j[0] })), L === void 0) (0, import_chunk_w578pjby.t)(`LSP server returned undefined for ${H} on ${o.filePath}`);
      }
      if (L && Array.isArray(L) && (o.operation === "findReferences" || o.operation === "goToDefinition" || o.operation === "goToImplementation" || o.operation === "workspaceSymbol")) if (o.operation === "workspaceSymbol") {
        let j = L, H = j.filter((Q) => Q?.location?.uri).map((Q) => Q.location), X = await Ts(H, y), N = new Set(X.map((Q) => Q.uri));
        L = j.filter((Q) => !Q?.location?.uri || N.has(Q.location.uri));
      } else {
        let j = L.map(ct), H = await Ts(j, y), X = new Set(H.map((N) => N.uri));
        L = L.filter((N) => {
          let Q = ct(N);
          return !Q.uri || X.has(Q.uri);
        });
      }
      let { formatted: z, resultCount: q, fileCount: V } = uc(o.operation, L, y);
      return { data: { operation: o.operation, result: z, filePath: o.filePath, resultCount: q, fileCount: V } };
    } catch (L) {
      if (r.signal.aborted) throw new import_chunk_jv7av99m.Ie();
      let z = (0, import_chunk_jv7av99m.D)(L).message;
      return (0, import_chunk_w578pjby.t)(`LSP tool request failed for ${o.operation} on ${o.filePath}: ${z}`, { level: "error" }), { data: { operation: o.operation, result: `Error performing ${o.operation}: ${z}`, filePath: o.filePath } };
    }
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: e.result };
} });
function lc(e, o) {
  let r = (0, import_url.pathToFileURL)(o).href, h = { line: e.line - 1, character: e.character - 1 };
  switch (e.operation) {
    case "goToDefinition":
      return { method: "textDocument/definition", params: { textDocument: { uri: r }, position: h } };
    case "findReferences":
      return { method: "textDocument/references", params: { textDocument: { uri: r }, position: h, context: { includeDeclaration: true } } };
    case "hover":
      return { method: "textDocument/hover", params: { textDocument: { uri: r }, position: h } };
    case "documentSymbol":
      return { method: "textDocument/documentSymbol", params: { textDocument: { uri: r } } };
    case "workspaceSymbol":
      return { method: "workspace/symbol", params: { query: e.query ?? "" } };
    case "goToImplementation":
      return { method: "textDocument/implementation", params: { textDocument: { uri: r }, position: h } };
    case "prepareCallHierarchy":
    case "incomingCalls":
    case "outgoingCalls":
      return { method: "textDocument/prepareCallHierarchy", params: { textDocument: { uri: r }, position: h } };
  }
}
function ws(e) {
  let o = e.length;
  for (let r of e) if (r.children && r.children.length > 0) o += ws(r.children);
  return o;
}
function zo(e) {
  return new Set(e.map((o) => o.uri)).size;
}
function cc(e) {
  let o = e.replace(/^file:\/\//, "");
  if (/^\/[A-Za-z]:/.test(o)) o = o.slice(1);
  try {
    o = decodeURIComponent(o);
  } catch {
  }
  return o;
}
async function Ts(e, o) {
  if (e.length === 0) return e;
  let r = /* @__PURE__ */ new Map();
  for (let k of e) if (k.uri && !r.has(k.uri)) r.set(k.uri, cc(k.uri));
  let h = (0, import_chunk_4smdap7r.M)(r.values());
  if (h.length === 0) return e;
  let g = /* @__PURE__ */ new Set(), y = 50;
  for (let k = 0; k < h.length; k += y) {
    let w = h.slice(k, k + y), R = await (0, import_chunk_7fsmgfxx.ut)("git", ["check-ignore", ...w], { cwd: o, preserveOutputOnError: false, timeout: 5e3, env: (0, import_chunk_2yx6c1y2.pMs)() });
    if (R.code === 0 && R.stdout) for (let I of R.stdout.split(`
`)) {
      let x = I.trim();
      if (x) g.add(x);
    }
  }
  if (g.size === 0) return e;
  return e.filter((k) => {
    let w = r.get(k.uri);
    return !w || !g.has(w);
  });
}
function uc(e, o, r) {
  switch (e) {
    case "goToDefinition":
    case "goToImplementation": {
      let g = (Array.isArray(o) ? o : o ? [o] : []).map(ct), y = g.filter((w) => !w || !w.uri);
      if (y.length > 0) (0, import_chunk_w578pjby.t)(`LSP server returned ${y.length} location(s) with undefined URI for ${e} on ${r}. This indicates malformed data from the LSP server.`, { level: "error" });
      let k = g.filter((w) => w && w.uri);
      return { formatted: ls(o, r), resultCount: k.length, fileCount: zo(k) };
    }
    case "findReferences": {
      let h = o || [], g = h.filter((k) => !k || !k.uri);
      if (g.length > 0) (0, import_chunk_w578pjby.t)(`LSP server returned ${g.length} location(s) with undefined URI for findReferences on ${r}. This indicates malformed data from the LSP server.`, { level: "error" });
      let y = h.filter((k) => k && k.uri);
      return { formatted: cs(o, r), resultCount: y.length, fileCount: zo(y) };
    }
    case "hover":
      return { formatted: us(o, r), resultCount: o ? 1 : 0, fileCount: o ? 1 : 0 };
    case "documentSymbol": {
      let h = o || [], y = h.length > 0 && h[0] && "range" in h[0] ? ws(h) : h.length;
      return { formatted: ms(o, r), resultCount: y, fileCount: h.length > 0 ? 1 : 0 };
    }
    case "workspaceSymbol": {
      let h = o || [], g = h.filter((w) => !w || !w.location || !w.location.uri);
      if (g.length > 0) (0, import_chunk_w578pjby.t)(`LSP server returned ${g.length} symbol(s) with undefined location URI for workspaceSymbol on ${r}. This indicates malformed data from the LSP server.`, { level: "error" });
      let y = h.filter((w) => w && w.location && w.location.uri), k = y.map((w) => w.location);
      return { formatted: Fo(o, r), resultCount: y.length, fileCount: zo(k) };
    }
    case "prepareCallHierarchy": {
      let h = o || [];
      return { formatted: ps(o, r), resultCount: h.length, fileCount: h.length > 0 ? new Set(h.map((g) => g.uri).filter((g) => g)).size : 0 };
    }
    case "incomingCalls": {
      let h = o || [];
      return { formatted: fs(o, r), resultCount: h.length, fileCount: h.length > 0 ? new Set(h.map((g) => g.from?.uri).filter((g) => g)).size : 0 };
    }
    case "outgoingCalls": {
      let h = o || [];
      return { formatted: hs(o, r), resultCount: h.length, fileCount: h.length > 0 ? new Set(h.map((g) => g.to?.uri).filter((g) => g)).size : 0 };
    }
  }
}
(0, import_chunk_adx6804h.B)();
function dc() {
  return (0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_w50zedgp.uZ)() ? "The refreshed tools become callable inside the REPL environment (this surface routes MCP tools through the REPL rather than advertising them as top-level tools)." : "The refreshed tools are available immediately \u2014 you can call them on your next step.";
}
function Ss() {
  return `Re-queries the tool list of connected MCP servers and updates the set of available tools, reporting which tools were added or removed.

MCP servers normally push a notification when their tool list changes, but that notification can be missed (connection hiccups, a device announcing while the notification stream was down). Use this tool to re-sync when the available tools may be out of date. Good triggers:
- The user says a device or app is now open or connected (e.g. "my desktop IS open", "I just started the app") after a tool call failed with device-not-connected or the expected tools are missing.
- A tool you expect an MCP server to provide is absent from your available tools.
- A server's tools look stale after its connection recovered.

${dc()}

Usage:
- Refresh all connected servers: \`RefreshMcpTools\` with no arguments
- Refresh one server: \`RefreshMcpTools({ server: "myserver" })\`
`;
}
var bs = `Re-query the tool lists of connected MCP servers and update the available tools.

Returns one entry per server: the server name, refresh status, current tool count, and which tool names were added or removed relative to what was previously available. Servers that are not currently connected are reported as not_connected (this tool never dials or re-dials connections \u2014 it only re-reads the tool list over the existing connection).

Parameters:
- server (optional): The name of a specific MCP server to refresh. If not provided, all connected servers are refreshed.
`;
var mc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ server: (0, import_chunk_adx6804h.n)().optional().describe("Optional server name: refresh only this server. Omit to refresh all connected servers.") })), pc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ server: (0, import_chunk_adx6804h.n)().describe("Server name"), status: (0, import_chunk_adx6804h.F)(["refreshed", "error", "not_connected"]).describe("refreshed: tool list re-queried and applied. error: the re-query failed and the previous tool set was kept. not_connected: the server has no live connection to query (this tool never dials)."), toolCount: (0, import_chunk_adx6804h.E)().optional().describe("Number of tools now available from this server"), added: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().describe("Tool names this refresh added"), removed: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().describe("Tool names this refresh removed"), error: (0, import_chunk_adx6804h.n)().optional().describe("Why the refresh failed or the server was unavailable") }))), jo = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "a334ee2a-9502-5fe5-9762-50cecadf7091", isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return e.server ?? "";
}, name: import_chunk_ht27b0vz.A0, searchHint: "refresh or re-sync tool lists from connected MCP servers, recover missing device or server tools", backgrounding: "never", maxResultSizeChars: 5e4, async description() {
  return Ss();
}, async prompt() {
  return bs;
}, get inputSchema() {
  return mc();
}, get outputSchema() {
  return pc();
}, isEnabled() {
  let e = (0, import_chunk_f9x2f6cx.fg)();
  return e !== void 0 && e.length > 0;
}, create(e) {
  return { async call(o) {
    let r = { isolationLatch: e.isolationLatch, session: e.session, options: { mcpClients: e.turnMcpClients } }, h = (0, import_chunk_4chf71g6.oSr)(jo, r, o);
    if (h.denyMessage) throw new import_chunk_jv7av99m.A(h.denyMessage, "Blocked by the web search / connector isolation policy");
    let { turnMcpClients: g, tools: y } = e, { server: k } = o, { filterToolsByDenyRules: w } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-h1gj6qm4.js"))), R = e.permissions(), I = k ? (0, import_chunk_ze4kt7fs.wje)(g, k) : (0, import_chunk_ze4kt7fs.cho)(g, import_chunk_ht27b0vz.A0, R, e);
    if (k && I.length === 0) throw new import_chunk_jv7av99m.A(`Server "${k}" not found. Available servers: ${g.map((L) => L.name).join(", ")}`, "MCP server not found");
    return { data: await Promise.all(I.map(async (L) => {
      if (L.type !== "connected") return { server: L.name, status: "not_connected", error: `server connection state is "${L.type}" \u2014 this tool only re-reads tool lists over live connections and never dials` };
      let K = (0, import_chunk_bzyb60p0.Jye)(L.name, L.config);
      if (K !== "admitted") return { server: L.name, status: "error", error: K === "refused" ? "the organization's policy turns Claude in Chrome off, so this server's tools were not refreshed and cannot be used" : "the organization's Claude in Chrome policy could not be read just now, so this server's tools were not refreshed; try again later" };
      let z = (0, import_chunk_px0hhsq7.Rr)(L.name), q = new Set(y.filter((N) => (0, import_chunk_px0hhsq7.Bu)(N, L.name, z)).map((N) => N.name).filter((N) => typeof N === "string")), V = false, G = await (0, import_chunk_y8s4362z.FJ)(L, (N, Q) => {
        V = !(0, import_chunk_f9x2f6cx.nFr)(N, Q, L.config);
      }, e.storageV5);
      if (G.status === "kept-previous") return { server: L.name, status: "error", error: G.error ?? "tools/list failed; the previous tool set was kept" };
      if (V) return { server: L.name, status: "error", error: "refreshed the server, but the live tool pool was not updated \u2014 the server may have been removed or disconnected while the refresh was in flight, or its tools are not managed in this session mode; if it is still configured, the refreshed list applies on the next pool rebuild" };
      let H = w((0, import_chunk_1hg0ytx8.tls)(G.newTools, true), R).map((N) => N.name).filter((N) => typeof N === "string"), X = new Set(H);
      return { server: L.name, status: "refreshed", toolCount: H.length, added: H.filter((N) => !q.has(N)), removed: [...q].filter((N) => !X.has(N)) };
    })) };
  } };
}, renderToolUseMessage(e) {
  return e.server ? `Refresh MCP tools from server "${e.server}"` : "Refresh all MCP tool lists";
}, userFacingName: () => "refreshMcpTools", mapToolResultToToolResultBlockParam(e, o) {
  if (!e || e.length === 0) return { tool_use_id: o, type: "tool_result", content: "No MCP servers to refresh." };
  return { tool_use_id: o, type: "tool_result", content: (0, import_chunk_w578pjby._)(e) };
} });
(0, import_chunk_adx6804h.B)();
function rt(e) {
  try {
    return (0, import_chunk_w578pjby.le)().cwd();
  } catch {
    return e;
  }
}
function At(e) {
  if (e.blockFileToolReadsOutsideWorkingDirectories !== true) return null;
  if ((0, import_chunk_trq47kfh.W2e)() !== void 0 && (0, import_chunk_w578pjby.DLs)()) {
    let o = rt((0, import_chunk_18rsj2ts.pe)());
    try {
      (0, import_chunk_w578pjby.u_)(o);
    } catch (r) {
      return (0, import_chunk_w578pjby.t)(`After a chdir that threw, could not enter ${o} anew: ${(0, import_chunk_jv7av99m.d)(r)}`), o;
    }
  }
  return [rt((0, import_chunk_18rsj2ts.pe)()), (0, import_chunk_18rsj2ts.pe)()].find((o) => !(0, import_chunk_p1ewvgeh.Tjt)(o, e)) ?? null;
}
function Je(e) {
  let o = e.permissions(), r = (0, import_chunk_trq47kfh.W2e)();
  if (r === void 0 || At(o) === null) return;
  for (let y of [...r === null ? [] : [r], ...(0, import_chunk_p1ewvgeh.vjt)(o)]) try {
    if ((0, import_chunk_w578pjby.u_)(y), (0, import_chunk_bzyb60p0.nS)(y, e.session), At(o) === null) return (0, import_chunk_18rsj2ts.pe)();
  } catch (k) {
    (0, import_chunk_w578pjby.t)(`Could not go to ${y}: ${(0, import_chunk_jv7av99m.d)(k)}`);
  }
  let h = "None of the folders that this session was launched with can be entered (gone, unmounted, shut, or leading elsewhere)", g;
  try {
    g = (0, import_path5.resolve)((0, import_chunk_zsz02y6d.Ug)()), (0, import_chunk_w578pjby.u_)(g), (0, import_chunk_bzyb60p0.nS)(g, e.session);
  } catch (y) {
    (0, import_chunk_w578pjby.t)(`Could not go to the temporary folder: ${(0, import_chunk_jv7av99m.d)(y)}`);
  }
  if ((0, import_chunk_w578pjby.DLs)() || [rt((0, import_chunk_18rsj2ts.pe)()), (0, import_chunk_18rsj2ts.pe)()].some((y) => (0, import_path5.resolve)(y) !== g)) throw (0, import_chunk_w578pjby.t)(`${h}, nor can the temporary folder: ending the process`, { level: "error" }), (0, import_chunk_bzyb60p0.Da)(1), new import_chunk_jv7av99m.A(`${h}, so Claude Code is ending this session.`, "A worktree tool found no folder that it could enter, and ended the process");
  throw new import_chunk_jv7av99m.A(`${h}, so the session now stands in ${(0, import_chunk_tp3c5q2s.Jb)((0, import_chunk_18rsj2ts.pe)())}, a temporary folder of Claude Code's own. Tell the person to put them right and then start the session again.`, "A worktree tool found no folder of the launch that it could enter");
}
function vs() {
  let e = (0, import_chunk_harsxaq1.Dg)("session"), o = (0, import_chunk_dtzkavpf.zZn)();
  return `Use this tool ONLY when explicitly instructed to work in a worktree \u2014 either by the user directly, or by project instructions (CLAUDE.md / memory). This tool creates an isolated ${e ? "working copy" : "git worktree"} and switches the current session into it.

## When to Use

- The user explicitly says "worktree" (e.g., "start a worktree", "work in a worktree", "create a worktree", "use a worktree")
- CLAUDE.md or memory instructions direct you to work in a worktree for the current task

## When NOT to Use

- The user asks to create a branch, switch branches, or work on a different branch \u2014 use ${e ? "version control" : "git"} commands instead
- The user asks to fix a bug or work on a feature \u2014 use ${e ? "the normal" : "normal git"} workflow unless worktrees are explicitly requested by the user or project instructions
- Never use this tool unless "worktree" is explicitly mentioned by the user or in CLAUDE.md / memory instructions

## Requirements

${e ? "" : `- ${o ? "To create a new worktree, must" : "Must"} be in a git repository, OR have WorktreeCreate/WorktreeRemove hooks configured in settings.json
`}- Must not already be in a worktree session when creating a new worktree (\`name\`); switching into another existing worktree via \`path\` is allowed

## Behavior

${e ? "- Creates a working copy with the project's version control; the result gives its path. What it starts from is governed by the `worktree.baseRef` setting: `fresh` (default) is the latest mainline; `head` is what the current directory has now" : "- In a git repository: creates a new git worktree inside `.claude/worktrees/` on a new branch. The base ref is governed by the `worktree.baseRef` setting: `fresh` (default) branches from origin/<default-branch>; `head` branches from your current local HEAD\n- Outside a git repository: delegates to WorktreeCreate/WorktreeRemove hooks for VCS-agnostic isolation"}
- Switches the session's working directory to the new worktree
- Use ExitWorktree to leave the worktree mid-session (keep or remove). On session exit, if still in the worktree, the user will be prompted to keep or remove it

## Entering an existing worktree

Pass \`path\` instead of \`name\` to switch the session into a ${o ? "worktree that already exists. The path must be a working copy that the project's version control lists for the current repository, or, on first entry from the launch directory of a multi-repo workspace, a git worktree of a repository nested inside it; any other is rejected." : `${e ? "git " : ""}worktree that already exists (e.g., one you just created with \`git worktree add\`). On first entry from the launch directory, the path must appear in \`git worktree list\` for the repository that owns it \u2014 the current repository or, in a multi-repo workspace, a repository nested inside it; paths registered by neither are rejected.`} ExitWorktree will not remove a worktree entered this way; use \`action: "keep"\` to return to the original directory.

Switching with \`path\` also works when the session is already in a worktree (the previous worktree is left on disk, untouched, and only the new one is tracked for exit-time cleanup), and from agents whose working directory was pinned at launch (subagent isolation or explicit cwd). In both cases ${o ? "a git worktree must lie" : "the target must be a worktree"} under \`.claude/worktrees/\` of the same repository, and from a pinned agent the switch only affects this agent, not the parent session. After a further switch, previously-visited worktrees are no longer writable \u2014 re-issue EnterWorktree with \`path\` to return to one.
${""}
## Parameters

- \`name\` (optional): A name for a new worktree. If neither \`name\` nor \`path\` is provided, a random name is generated.
- \`path\` (optional): Path to an existing worktree to enter instead of creating one \u2014 of the current repository, or (on first entry from the launch directory) of a repository nested inside it. Mutually exclusive with \`name\`.
`;
}
var fc = new import_chunk_pzzqg6s3.ze(() => /* @__PURE__ */ new Set());
function hc(e) {
  return e.replace(/\.+$/, "").toLowerCase().replace(/[^a-z0-9]/g, "-");
}
function Rs(e, o) {
  return fc.peek(e)?.has(hc(o)) === true;
}
var yc = new RegExp("[\\p{Cc}\\p{Cf}\\p{Cn}\\p{Co}\\p{Zl}\\p{Zp}\\p{Default_Ignorable_Code_Point}\\u2800]|(?!\\u0020)\\p{Zs}", "gu");
function Is(e) {
  return e.replace(yc, "\uFFFD");
}
var kc = /["\u201C\u201D\u201F\u2033\u2036\uFF02\u301D\u301E\u301F\u02BA\u02EE\u02DD\u05F4]/g, Ho = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ name: (0, import_chunk_adx6804h.n)().superRefine((e, o) => {
  try {
    (0, import_chunk_bzyb60p0.pBe)(e);
  } catch (r) {
    o.addIssue({ code: "custom", message: (0, import_chunk_jv7av99m.d)(r) });
  }
}).optional().describe('Optional name for a new worktree. Each "/"-separated segment may contain only letters, digits, dots, underscores, and dashes; max 64 chars total. A random name is generated if not provided. Mutually exclusive with `path`.'), path: (0, import_chunk_adx6804h.n)().optional().describe("Path to an existing worktree to switch into instead of creating a new one. Must appear in `git worktree list` for the current repo \u2014 or, on first entry from the launch directory, for a repo nested inside it (multi-repo workspace). Mutually exclusive with `name`.") }).refine((e) => !(e.name && e.path), { message: "Provide at most one of `name` or `path`, not both." })), Tc = (0, import_chunk_2cbgkbm2.p)(() => Ho().safeExtend({ path: Ho().shape.path.describe("Path to an existing worktree to switch into instead of creating a new one. Must be one that the project's version control lists for the current repository. Mutually exclusive with `name`.") })), wc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ worktreePath: (0, import_chunk_adx6804h.n)(), worktreeBranch: (0, import_chunk_adx6804h.n)().optional(), message: (0, import_chunk_adx6804h.n)(), sandboxNote: (0, import_chunk_adx6804h.n)().optional().describe("@internal Told to the model and shown to the person where the sandbox stays on only through this move, or where commands are refused after it.") })), Ls = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "a19cc5df-2dd1-5f4c-8d33-2adb5cb0209e", name: import_chunk_59xxesz9.IT, get searchHint() {
  return `create an isolated ${(0, import_chunk_harsxaq1.Dg)("session") ? "" : "git "}worktree and switch into it`;
}, backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return `Creates an isolated worktree ${(0, import_chunk_harsxaq1.Dg)("session") ? "" : "(via git or configured hooks) "}and switches the session into it`;
}, async prompt() {
  return vs();
}, get inputSchema() {
  return (0, import_chunk_dtzkavpf.zZn)() ? Tc() : Ho();
}, get outputSchema() {
  return wc();
}, userFacingName(e) {
  return e?.path ? "Entering worktree" : "Creating worktree";
}, get whenToUse() {
  return `When the user or the project's instructions have said to work in a worktree and you are about to begin, use it; for plain branch work use ${(0, import_chunk_harsxaq1.Dg)("session") ? "version control" : "git"} and not this.`;
}, shouldDefer: true, toAutoClassifierInput(e) {
  return e.path ?? e.name ?? "";
}, renderToolUseMessage({ name: e, path: o }) {
  return (o !== void 0 ? Is(o) : null) ?? e ?? "";
}, create(e) {
  return { async validateInput(o) {
    if ((0, import_chunk_18rsj2ts.Nz)()) {
      if (o.path) return { result: true };
      let r = (0, import_chunk_18rsj2ts.pe)(), h = (0, import_chunk_w5s307zm.Mi)(r);
      return { result: false, message: `EnterWorktree cannot create a worktree from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session's process-wide working directory. ` + (h != null && r !== h && r.startsWith(h + import_path4.sep) ? "To switch this agent into an existing worktree managed by Claude Code (under .claude/worktrees/ of this repository), call EnterWorktree with `path`. To work in any other directory, spawn an Agent with `cwd` set to it." : "To work in a different directory (including a worktree), spawn an Agent with `cwd` set to it."), errorCode: 1 };
    }
    if ((0, import_chunk_rb36kwbn.ui)() && !o.path) return { result: false, message: "Already in a worktree session. Pass `path` to switch into another existing worktree, or use ExitWorktree to leave this one before creating a new worktree.", errorCode: 2 };
    return { result: true };
  }, async checkPermissions(o) {
    let r = o.path ? await (0, import_chunk_bzyb60p0.Uui)(o.path, import_chunk_bzyb60p0.qY.get()?.isHooked("vcs.list", { path: (0, import_chunk_18rsj2ts.pe)() }, e.hookOrigin)) : null, h = e.permissions(), g = h.blockFileToolReadsOutsideWorkingDirectories !== true ? null : o.path ? Ve(r?.targetReal ?? (0, import_path4.resolve)((0, import_chunk_18rsj2ts.pe)(), o.path), h, (0, import_chunk_18rsj2ts.Nz)() ? "switch" : "move", (0, import_path4.resolve)((0, import_chunk_18rsj2ts.pe)(), o.path)) : (0, import_chunk_6h9mds0d.U6)() || (0, import_chunk_harsxaq1.Dg)("session") ? null : Ve((0, import_chunk_4rp6k6sw.Yin)((0, import_chunk_w5s307zm.Mi)((0, import_chunk_18rsj2ts.pe)()) ?? (0, import_chunk_18rsj2ts.pe)()).dir, h, "new");
    if (g !== null) return { behavior: "deny", message: g, decisionReason: { type: "other", reason: g } };
    if (!o.path) return { behavior: "allow", updatedInput: o };
    if (r?.managed) return { behavior: "allow", updatedInput: { ...o, path: r.targetReal } };
    let y = (0, import_path4.resolve)((0, import_chunk_18rsj2ts.pe)(), o.path), k = (L) => Is(L).replace(kc, "\uFFFD"), w = k(y), R = r ? k(r.targetReal) : null, I = w !== y || r && R !== r.targetReal ? " (path sanitized for display)" : "", x = R !== null && R.normalize("NFC") !== w.normalize("NFC") ? ` (resolves to "${R}")` : "";
    return { behavior: "ask", message: `Enter the worktree at "${w}"${x}${I}? This moves the session's working directory and write access there, and loads project configuration (CLAUDE.md, settings) from that location.`, updatedInput: { ...o, path: y }, decisionReason: { type: "safetyCheck", reason: `permission-root relocation to "${w}"${x}${I} \u2014 a model-supplied worktree outside .claude/worktrees/`, classifierApprovable: false }, localDisplayOnly: true };
  }, async call(o, r) {
    if ((0, import_chunk_18rsj2ts.Nz)()) {
      if (!o.path) throw new import_chunk_bzyb60p0.gd("EnterWorktree from a session with a pinned working directory requires `path`.");
      let Z = await (0, import_chunk_bzyb60p0.MZo)(o.path, { requireManagedLocation: true, requireCwdInsideRepo: true, asking: { origin: e.hookOrigin, signal: r.signal } }), Ee = (0, import_chunk_mndk3x2g.b9e)() ? null : (0, import_chunk_6h9mds0d.O5)(Z.worktreePath, { agentId: e.agentId, agentWorktree: e.agentWorktree, session: e.session });
      if (Ee !== null) throw new import_chunk_bzyb60p0.gd(`Entering ${(0, import_chunk_tp3c5q2s.Jb)(Z.worktreePath)} would not give this agent write access there, so the switch was not made. ${Ee}`);
      let Ke = (0, import_chunk_18rsj2ts.pe)(), Oe = (0, import_path4.resolve)(Ke, o.path), je = Ve(Z.worktreePath, e.permissions(), "switch", Oe);
      if (je !== null) throw new import_chunk_bzyb60p0.gd(je);
      (0, import_chunk_bzyb60p0.nS)(Z.worktreePath, e.session);
      let xe = Ve((0, import_chunk_18rsj2ts.pe)(), e.permissions(), "switch", Oe);
      if (xe !== null) throw e.session.setCwd(Ke), (0, import_chunk_18rsj2ts.Ixt)(Ke), new import_chunk_bzyb60p0.gd(xe);
      if ((0, import_chunk_sghy0qej.Pe)(import_chunk_p1ewvgeh.REr, { safe: true })) (0, import_chunk_p1ewvgeh.xEr)(Z.worktreePath);
      if (Z.copy) (0, import_chunk_rb36kwbn.zIr)(Z.worktreePath, Z.copy);
      if ((0, import_chunk_bzyb60p0.ktn)(Z.worktreePath, e.agentId ?? (0, import_chunk_f9x2f6cx.W)()), e.agentId) try {
        await (0, import_chunk_bzyb60p0.vq)(e.agentId, { cwd: Z.worktreePath }, e.storageV5);
      } catch ($e) {
        (0, import_chunk_w578pjby.t)(`Failed to update agent metadata cwd after worktree switch: ${(0, import_chunk_bzyb60p0.KI)($e)}`);
      }
      (0, import_chunk_y53wbr8a.a)("tengu_worktree_entered_existing", { mid_session: true, cwd_override: true });
      let Le = Z.worktreeBranch ? ` on branch ${(0, import_chunk_tp3c5q2s.Jb)(Z.worktreeBranch)}` : "";
      return { data: { worktreePath: Z.worktreePath, worktreeBranch: Z.worktreeBranch, message: `Entered worktree at ${(0, import_chunk_tp3c5q2s.Jb)(Z.worktreePath)}${Le}. This agent's working directory and write access now point at the worktree; the previous directory was left untouched.` }, contextLayers: [{ kind: "working_directory", directory: Z.worktreePath }] };
    }
    if ((0, import_chunk_rb36kwbn.ui)() && !o.path) throw Error("Already in a worktree session");
    let h = (0, import_chunk_rb36kwbn.ui)(), g = { process: rt((0, import_chunk_18rsj2ts.pe)()), cwd: (0, import_chunk_18rsj2ts.pe)() }, y = (0, import_chunk_f9x2f6cx.Oo)(), k = (0, import_chunk_rb36kwbn.zC)() === y, w = o.path ? (0, import_path4.resolve)(g.cwd, o.path) : void 0, R = (0, import_chunk_sghy0qej.Pe)(import_chunk_59xxesz9.vnl, { safe: true }), I, x;
    if (o.path) x = await (0, import_chunk_bzyb60p0.$ui)((0, import_chunk_f9x2f6cx.W)(), o.path, { requireManagedLocation: await (0, import_chunk_bzyb60p0.ZLt)((0, import_path4.resolve)((0, import_chunk_18rsj2ts.pe)(), o.path)) || void 0, storageV5: e.storageV5, asking: { origin: e.hookOrigin, signal: r.signal }, refuses: (Z) => Ve(Z, e.permissions(), "move", w) }), I = x.nestedRepoRoot === void 0;
    else {
      let Z = (0, import_chunk_18rsj2ts.pe)(), Ee = (0, import_chunk_w5s307zm.Mi)(Z), Ke = [(0, import_chunk_f9x2f6cx.Te)(), Ee, ...e.permissions().additionalWorkingDirectories.keys()].filter((Re) => Re !== null).map((Re) => ({ named: Re, ...(0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), Re) })).filter(({ isCanonical: Re }) => Re);
      I = Ee === (0, import_chunk_w5s307zm.Mi)(y);
      let Oe = Ee && Ee !== Z ? Ee : void 0, je = (0, import_chunk_bzyb60p0.rdr)(), xe, Le, $e = false;
      try {
        if (Oe) {
          let Ce = Ve(Oe, e.permissions(), "root");
          if (Ce !== null) throw new import_chunk_bzyb60p0.gd(Ce);
          if (!je) xe = (0, import_chunk_bzyb60p0.sos)(Oe);
          (0, import_chunk_bzyb60p0.nS)(Oe, e.session), Le = (0, import_chunk_18rsj2ts.pe)();
          let Be = At(e.permissions());
          if (Be !== null) throw new import_chunk_bzyb60p0.gd(Ve(Be, e.permissions(), "root") ?? "No worktree was made: for a moment the way to the repository's root led outside the folders that this session was launched with.");
        }
        let Re = false;
        x = await (0, import_chunk_p5m4fqpp.Wzr)(o.name ?? (0, import_chunk_p1ewvgeh.DSo)((0, import_chunk_p1ewvgeh.h2e)()), Z, { repoRoot: Ee ?? void 0, slugPick: Re ? { isGiven: o.name !== void 0, hasSessionHad: (Ce) => Rs(e.session, Ce) } : void 0, fromHead: Re || void 0, storageV5: e.storageV5, credentials: e.credentials }, { parentAgentId: e.agentId, origin: e.hookOrigin, signal: r.signal, refuseGitWorktree() {
          let Ce = Ve((0, import_chunk_4rp6k6sw.Yin)(Ee ?? Z).dir, e.permissions(), "new");
          if (Ce !== null) throw new import_chunk_bzyb60p0.gd(Ce);
        } });
        let He = Ve(x.worktreePath, e.permissions(), "made");
        if (He !== null) throw await (0, import_chunk_bzyb60p0.dQ)(e.storageV5, () => As(e)), new import_chunk_bzyb60p0.gd(He);
        if ($e = true, R) Os(Sc(x.worktreePath, Ke), x, h, e);
        else (0, import_chunk_bzyb60p0.JNt)(x.worktreePath, e.session);
      } catch (Re) {
        try {
          let He = !$e || je;
          if (He && xe) xe();
          if (He && Oe && Le !== void 0) {
            let Ce = Le, Be = (0, import_chunk_bzyb60p0.aSe)(Z, (Ne) => Z.startsWith(Oe + import_path4.sep) ? Ne.startsWith(Ce + import_path4.sep) : Ne === Z);
            if (Be) (0, import_chunk_bzyb60p0.Cfe)(Be, e.session);
            else (0, import_chunk_w578pjby.t)("EnterWorktree: the worktree could not be created or entered, and the session could not go back to its directory", { level: "error" }), (0, import_chunk_w5s307zm.Joe)(), (0, import_chunk_r60bafc1.Pc)()?.refreshGitBranch?.();
          }
        } finally {
          Je(e);
        }
        throw Ds(Re, g.cwd, e.permissions());
      }
    }
    if (k && I) x.extensionRoot = y;
    let L = (0, import_path4.dirname)((0, import_chunk_bzyb60p0.Mh)((0, import_chunk_f9x2f6cx.W)())), K;
    if (o.path) try {
      if (R) Os(x.worktreePath, x, h, e);
      else (0, import_chunk_w578pjby.u_)(x.worktreePath), (0, import_chunk_bzyb60p0.nS)(x.worktreePath, e.session);
    } catch (Z) {
      K = Z;
    }
    let z = At(e.permissions());
    if (z !== null) {
      Ps(e, g), await (0, import_chunk_bzyb60p0.dQ)(e.storageV5, () => As(e));
      let Z = Ps(e, g);
      if (h) (0, import_chunk_bzyb60p0.V$)(h, e.storageV5);
      if (Z !== void 0) throw Z;
      throw Ds(new import_chunk_bzyb60p0.gd(Ve(z, e.permissions(), "move", w ?? x.worktreePath) ?? "The session was not moved: for a moment the way there led outside the folders that this session was launched with, or where the process stood could not be told."), g.cwd, e.permissions());
    }
    if (K !== void 0) throw K;
    if (o.path && x.vcsCopy) (0, import_chunk_rb36kwbn.zIr)(x.worktreePath, x.vcsCopy);
    import_chunk_ha393e1n.Ue.holdThroughRootMove(), (0, import_chunk_f9x2f6cx.w$)((0, import_chunk_18rsj2ts.pe)());
    let q = R ? (0, import_chunk_f9x2f6cx.Te)() : x.worktreePath;
    if (R) {
      (0, import_chunk_p1ewvgeh.Ejt)(q);
      let { resolvedSandboxConfigPaths: Z } = (0, import_chunk_a3fb7pa2.gy)();
      if (!Z.has(".")) Z.set(".", ["."]);
    }
    let V = (0, import_chunk_sghy0qej.Pe)(import_chunk_59xxesz9.Tnl, { safe: true }), G = true;
    if (V) G = (0, import_chunk_bzyb60p0.ktn)(q, (0, import_chunk_f9x2f6cx.W)(), { rebuildEvenIfHeld: true });
    if (!x.hookBased && !x.nestedRepoRoot) try {
      await (0, import_chunk_bzyb60p0.utn)(e.storageV5);
    } catch (Z) {
      (0, import_chunk_bzyb60p0.gro)(Z, "EnterWorktree"), (0, import_chunk_f9x2f6cx.nE)((0, import_chunk_f9x2f6cx.W)(), "cd", (0, import_path4.dirname)((0, import_chunk_bzyb60p0.Mh)((0, import_chunk_f9x2f6cx.W)())));
    }
    else (0, import_chunk_f9x2f6cx.nE)((0, import_chunk_f9x2f6cx.W)(), "cd", L);
    if (!V) G = (0, import_chunk_bzyb60p0.ktn)(q, (0, import_chunk_f9x2f6cx.W)());
    if (!G) (0, import_chunk_w578pjby.t)("EnterWorktree: the sandbox config could not be rebuilt for the worktree, so the config from before the move stayed in force", { level: "error" });
    (0, import_chunk_bzyb60p0.oG)(x, (0, import_chunk_m15w38ag.ne)() ? e.storageV5 : void 0), (0, import_chunk_bzyb60p0.lye)("worktree"), (0, import_chunk_bzyb60p0.hH)(e.session), import_chunk_p1ewvgeh.Xh.cache.clear?.(), (0, import_chunk_p1ewvgeh.Nx)(e.storageV5), (0, import_chunk_w5s307zm.Joe)(), (0, import_chunk_r60bafc1.Pc)()?.refreshGitBranch?.(), (0, import_chunk_y53wbr8a.a)(o.path ? "tengu_worktree_entered_existing" : "tengu_worktree_created", { mid_session: true, ...{} });
    let j = x.worktreeBranch ?? (0, import_chunk_9e5mdyfk.HCe)(x.vcsCopy), H = j ? ` on branch ${(0, import_chunk_tp3c5q2s.Jb)(j)}` : "", X = o.path ? "Entered" : x.resetToFreshBase ? "Reused" : x.resumedExisting ? "Resumed" : "Created", N = x.resetToFreshBase ? " A worktree with this name already existed; its previous work was fully merged upstream, so it was reset to the current base." : x.resetToFreshBaseSkipped ? ` A worktree with this name already existed and was resumed on its earlier base, because ${(0, import_chunk_rb36kwbn.OYi)(x.resetToFreshBaseSkipped)}. Keep working from this base and do not merge, rebase, pull or reset to catch up; if the task needs the current base, ${(0, import_chunk_rb36kwbn.T0l)(x.resetToFreshBaseSkipped)}.` : x.resumedExisting ? " A worktree with this name already existed and was resumed as-is \u2014 it may carry an earlier session\u2019s commits. Pass a different name if you wanted a fresh worktree." : "", Q = "", ae = "Use ExitWorktree to leave mid-session, or exit the session to be prompted.";
    return { data: { worktreePath: x.worktreePath, worktreeBranch: j, message: `${X} worktree at ${(0, import_chunk_tp3c5q2s.Jb)(x.worktreePath)}${H}.${N}${Q} The session is now working in the worktree. ${ae}`, sandboxNote: import_chunk_ha393e1n.Ue.configLeftBehindRefusal() ?? (0, import_chunk_sjqze7qg.Vis)(x.worktreePath) } };
  } };
}, mapToolResultToToolResultBlockParam({ message: e, sandboxNote: o }, r) {
  return { type: "tool_result", content: o ? `${e} ${o}` : e, tool_use_id: r };
} });
function Os(e, o, r, h) {
  let g = false;
  try {
    g = (0, import_chunk_bzyb60p0.Ogi)(e, h.session);
  } finally {
    if (!g) {
      if ((0, import_chunk_bzyb60p0.V$)(r, h.storageV5), !o.enteredExisting) (0, import_chunk_rb36kwbn.i8)();
    }
  }
  if (g) return;
  throw (0, import_chunk_cqa9hrgx.m)("git_worktree_create", "git_worktree_enter_through_link"), new import_chunk_bzyb60p0.gd(`The session was not moved: ${(0, import_chunk_tp3c5q2s.Jb)(o.worktreePath)} leads to another folder through a symlink. Nothing was removed. Tell the user.${o.enteredExisting ? "" : o.vcsCopy?.madeBy === "mod" ? " The vcs.isolate hook has to answer the folder's real path." : o.hookBased ? " The WorktreeCreate hook has to print the folder's real path." : ""}`);
}
function Sc(e, o) {
  let r = (0, import_path4.normalize)(e), [h] = o.flatMap(({ named: g, resolvedPath: y }) => [g, y].map((k) => ({ above: (0, import_path4.join)(k, import_path4.sep), real: y }))).filter(({ above: g }) => (0, import_chunk_2172r9j8.a3)(r).startsWith((0, import_path4.join)((0, import_chunk_2172r9j8.a3)(g), import_path4.sep))).sort((g, y) => g.above.length - y.above.length);
  return h === void 0 ? (0, import_chunk_bzyb60p0.aSe)(r, () => true)?.path ?? r : (0, import_path4.join)(h.real, ...r.split(import_path4.sep).slice(h.above.split(import_path4.sep).length - 1));
}
function As(e) {
  try {
    Je(e);
  } catch {
  }
}
function Ps(e, o) {
  try {
    (0, import_chunk_w578pjby.u_)(o.process), (0, import_chunk_bzyb60p0.nS)(o.cwd, e.session);
  } catch {
  }
  try {
    Je(e);
    return;
  } catch (r) {
    return r;
  }
}
function Ds(e, o, r) {
  if (r.blockFileToolReadsOutsideWorkingDirectories === true && (0, import_chunk_18rsj2ts.pe)() !== o && e instanceof Error && !(0, import_chunk_jv7av99m.Fe)(e)) try {
    e.message = `${(0, import_chunk_jv7av99m.d)(e).trimEnd().replace(/[^.!?]$/, "$&.")} The session is no longer where it stood: it is now in ${(0, import_chunk_tp3c5q2s.Jb)((0, import_chunk_18rsj2ts.pe)())}.`;
  } catch {
  }
  return e;
}
function Ve(e, o, r = "move", h = e) {
  if (o.blockFileToolReadsOutsideWorkingDirectories !== true || (0, import_chunk_p1ewvgeh.Tjt)(e, o)) return null;
  let g = "outside the folders that this session was launched with, and permissions.blockFileToolReadsOutsideWorkingDirectories keeps the file tools to those folders";
  switch (r) {
    case "move":
      return `The session was not moved: ${(0, import_chunk_tp3c5q2s.Jb)(h)} lies or leads ${g}.`;
    case "switch":
      return `This agent was not switched: ${(0, import_chunk_tp3c5q2s.Jb)(h)} lies or leads ${g}.`;
    case "new":
      return `No worktree was made: it would go under ${(0, import_chunk_tp3c5q2s.Jb)(e)}, ${g}.`;
    case "root":
      return `No worktree was made: making one first takes the session to the repository's root, ${(0, import_chunk_tp3c5q2s.Jb)(e)}, which lies ${g}.`;
    case "made":
      return `The worktree at ${(0, import_chunk_tp3c5q2s.Jb)(e)} was left as it is and the session was not moved into it, because it lies ${g}.`;
  }
}
(0, import_chunk_adx6804h.B)();
function Ns() {
  let e = (0, import_chunk_harsxaq1.Dg)("session");
  return `Exit a worktree session created by EnterWorktree and return the session to the original working directory.

## Scope

This tool ONLY operates on worktrees created by EnterWorktree in this session. It will NOT touch:
- Worktrees you created manually${e ? "" : " with `git worktree add`"}
- Worktrees from a previous session (even if created by EnterWorktree then)
- The directory you're in if EnterWorktree was never called

If called outside an EnterWorktree session, the tool is a **no-op**: it reports that no worktree session is active and takes no action. Filesystem state is unchanged.

## When to Use

- The user explicitly asks to "exit the worktree", "leave the worktree", "go back", or otherwise end the worktree session
- Do NOT call this proactively \u2014 only when the user asks

## Parameters

- \`action\` (required): \`"keep"\` or \`"remove"\`
  - \`"keep"\` \u2014 leave the worktree directory ${e ? "" : "and branch "}intact on disk. Use this if the user wants to come back to the work later, or if there are changes to preserve.
  - \`"remove"\` \u2014 delete the worktree directory${e ? ", and its branch too where Claude Code made one" : ", and its branch too unless a hook made the worktree or git refuses the delete"}. Use this for a clean exit when the work is done or abandoned.
- \`discard_changes\` (optional, default false): only meaningful with \`action: "remove"\`. If the worktree has uncommitted files or ${e ? "unpublished work, or its state is unknown" : "commits not on the original branch"}, the tool will REFUSE to remove it unless this is set to \`true\`. If the tool returns an error listing changes, confirm with the user before re-invoking with \`discard_changes: true\`. The tool also refuses while a task may be running in the worktree: wait for the task, or ask the user before stopping it, then call the tool again, or use \`keep\`.

## Behavior

- Restores the session's working directory to where it was before EnterWorktree
- Clears CWD-dependent caches (system prompt sections, memory files, plans directory) so the session state reflects the original directory
- If a tmux session was attached to the worktree: killed on \`remove\`, left running on \`keep\` (its name is returned so the user can reattach)
- Once exited, EnterWorktree can be called again to create a fresh worktree
`;
}
var Vo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ action: (0, import_chunk_adx6804h.F)(["keep", "remove"]).describe('"keep" leaves the worktree and branch on disk; "remove" deletes the worktree and, unless a hook made it or git refuses, its branch.'), discard_changes: (0, import_chunk_adx6804h.P)().optional().describe('Required true when action is "remove" and the worktree has uncommitted files or unmerged commits. The tool will refuse and list them otherwise. It also removes the worktree under any task still running there, so set it only after the user has confirmed.') })), vc = (0, import_chunk_2cbgkbm2.p)(() => Vo().extend({ action: Vo().shape.action.describe('"keep" leaves the worktree on disk; "remove" deletes the worktree and, where Claude Code made one, its branch.') })), Rc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ action: (0, import_chunk_adx6804h.F)(["keep", "remove"]), originalCwd: (0, import_chunk_adx6804h.n)(), worktreePath: (0, import_chunk_adx6804h.n)(), worktreeBranch: (0, import_chunk_adx6804h.n)().optional(), tmuxSessionName: (0, import_chunk_adx6804h.n)().optional(), discardedFiles: (0, import_chunk_adx6804h.E)().optional(), discardedCommits: (0, import_chunk_adx6804h.E)().optional(), restoredCwd: (0, import_chunk_adx6804h.n)().optional().describe("@internal Where the session's cwd ended up: originalCwd, or a fallback when it was gone or led outside what the launch gave."), originalCwdMissing: (0, import_chunk_adx6804h.P)().optional().describe("@internal originalCwd was gone (or a network path the session will not touch), so restoredCwd is a fallback directory."), message: (0, import_chunk_adx6804h.n)(), releaseNote: (0, import_chunk_adx6804h.n)().optional().describe("@internal What the mod that removed the worktree said of getting the work back."), sandboxNote: (0, import_chunk_adx6804h.n)().optional().describe("@internal Told to the model and shown to the person where the sandbox stays on only through this move, or where commands are refused after it.") })), ft = 'Confirm with the user, then re-invoke with discard_changes: true \u2014 or use action: "keep" to preserve the worktree.', Ms = 'Refusing to remove without explicit confirmation. Confirm with the user, then re-invoke with discard_changes: true to proceed \u2014 or use action: "keep" to preserve the worktree.', js = 'Wait for the task to finish, or ask the user before stopping it, then call this tool again \u2014 or use action: "keep" to preserve the worktree.';
function qo(e) {
  let o = (0, import_chunk_bzyb60p0.Weo)(e, "The user").trimStart();
  return `${o === "" ? "" : `${o} `}Tell the user which session is using the worktree${o === "" ? "" : " and what ends it"}. Do not end that session yourself, and do not remove the worktree with a shell command while it is running.`;
}
async function Hs(e, o) {
  let r = await (0, import_chunk_bzyb60p0.edr)(e, o)?.();
  if (r === void 0) return { summary: await qs(e.worktreePath, e) };
  return { told: r, summary: r.unknown === void 0 ? { changedFiles: r.changedFiles, commits: r.unpublished } : null };
}
async function qs(e, o) {
  let { originalHeadCommit: r } = o, h = await (0, import_chunk_859v5edd.sre)(e);
  if (!h.ok) return null;
  let g = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...h.args, ...import_chunk_gd77dyw4.Nn, "-C", e, ...import_chunk_gd77dyw4.Jee], { env: (0, import_chunk_kypvvv9j.su)(e, void 0, { userLocale: true }) });
  if (g.code !== 0) return null;
  let y = (0, import_chunk_ak45b7eq.$9e)(await (0, import_chunk_ak45b7eq.dbe)(e)), k = (0, import_chunk_4smdap7r.U)(g.stdout.split(`
`), (R) => R.trim() !== "") + (y === void 0 ? 0 : y.kind === "changes" ? y.paths.length : 1);
  if (!r) return null;
  let w = await (0, import_chunk_bzyb60p0.IOn)({ ...o, worktreePath: e }, (0, import_chunk_bzyb60p0.A_t)());
  if (w.commits === null || "onKeptBranch" in w && w.onKeptBranch === null) return null;
  return { changedFiles: k, commits: w.commits, atStake: w, ...y !== void 0 && { submoduleWork: y } };
}
async function Ks(e) {
  return 0;
}
function Ec(e) {
  return "";
}
async function Oc(e, o, r, h, g, y, k, w, R, I) {
  let x = o, L = false, K, z = false, q = { liveLaunchAnchor: y, launchCheckout: k, bootLaunchTree: w, preEnterOriginalCwd: r, worktreePath: g }, V = (0, import_chunk_w578pjby.g$)(o);
  try {
    if (V) throw Error("network-spelled original cwd (screened, never touched)");
    (0, import_chunk_bzyb60p0.nS)(o, e);
  } catch (X) {
    let N = V;
    if (!N) try {
      await (0, import_promises2.realpath)(o);
    } catch (ye) {
      N = (0, import_chunk_jv7av99m.J)(ye);
    }
    if (!N) throw X;
    L = true, x = "", K = (0, import_chunk_nn7sd2sk._ht)(q, e);
    let Q;
    try {
      Q = I(), z = Q !== void 0;
    } catch {
      Q = (0, import_chunk_18rsj2ts.pe)();
    }
    if (Q !== void 0) K = void 0, x = Q;
    else if (K !== void 0) x = K;
    else for (let ye of [g, (0, import_os.homedir)(), (0, import_chunk_8nvd6fqx.Fp)()]) try {
      (0, import_chunk_bzyb60p0.nS)(ye, e), x = ye;
      break;
    } catch {
    }
    if (!x) throw X;
    (0, import_chunk_w578pjby.t)(`ExitWorktree: original directory "${o}" no longer exists; session cwd recovered to "${x}"`);
  }
  let G = L && x === g, j = L ? x : r ?? x, H = !(0, import_chunk_nn7sd2sk.IMt)(j, q);
  if (H) (0, import_chunk_w578pjby.t)(`ExitWorktree: the permission anchor stays where it is: the anchor check refused "${(0, import_chunk_mh32mevx.xl)((0, import_chunk_mh32mevx.of)(String(j)))}"`);
  if ((!L || G || K !== void 0) && !H) {
    if (!L && j !== x) {
      let N = (0, import_chunk_bzyb60p0.aSe)((0, import_chunk_18rsj2ts.pe)(), () => true), Q = (0, import_chunk_nn7sd2sk._ht)(q, e);
      if (N !== void 0) (0, import_chunk_bzyb60p0.Cfe)(N, e);
      else x = Q ?? x;
      try {
        let ye = I();
        x = ye ?? x, z = ye !== void 0;
      } catch {
      }
    }
    (0, import_chunk_f9x2f6cx.w$)(j), import_chunk_ha393e1n.Ue.rebuildAfterRootMove();
    try {
      await (0, import_chunk_bzyb60p0.utn)(R);
    } catch (N) {
      (0, import_chunk_bzyb60p0.gro)(N, "ExitWorktree");
    }
    try {
      await (0, import_chunk_9e5mdyfk.Qpr)(j, R);
    } catch (N) {
      (0, import_chunk_w578pjby.t)(`ExitWorktree: bg session state rehome failed (continuing): ${N}`, { level: "error" });
    }
    let X = (!L || K !== void 0) && r !== void 0 && y === void 0;
    if (h) {
      if (!X && (0, import_chunk_2nv4wrez.sxe)(j)) (0, import_chunk_w578pjby.t)(`ExitWorktree: not installing projectRoot "${(0, import_chunk_mh32mevx.xl)((0, import_chunk_mh32mevx.of)(j))}" \u2014 untrusted display characters; keeping the existing anchor`);
      else (0, import_chunk_f9x2f6cx.vQe)(j);
      if ((0, import_chunk_m15w38ag.ne)() && R !== void 0) await (0, import_chunk_6zh1j84y.cWn)(R);
      else await (0, import_chunk_6zh1j84y.Kvr)();
    }
  }
  return (0, import_chunk_bzyb60p0.oG)(null, (0, import_chunk_m15w38ag.ne)() ? R : void 0), (0, import_chunk_bzyb60p0.lye)("worktree"), (0, import_chunk_bzyb60p0.hH)(e), import_chunk_p1ewvgeh.Xh.cache.clear?.(), (0, import_chunk_p1ewvgeh.Nx)(R), (0, import_chunk_w5s307zm.Joe)(), (0, import_chunk_r60bafc1.Pc)()?.refreshGitBranch?.(), { restoredCwd: x, originalCwdMissing: L, fellBackToWorktree: G, returnedToLaunchDir: K !== void 0, tookToLaunch: z, sandboxNote: (0, import_chunk_sjqze7qg.Vis)((0, import_chunk_f9x2f6cx.Te)()) };
}
function Ys(e, o, r) {
  let h = (0, import_chunk_jhy72swy.Q8t)(e, [o], (g) => !(0, import_chunk_ed372ykp.$o)(g.status) && !((0, import_chunk_z6hn62tj.lre)(g) && g.stopsOnExit)) ?? Object.values(e).find((g) => g.type === "local_agent" && g.cwd === void 0 && g.id !== r && !(0, import_chunk_z6hn62tj.Kf)(g) && !(0, import_chunk_ed372ykp.$o)(g.status));
  return h === void 0 ? "" : ` Nothing was removed: task ${h.id} is still running and may be working in this worktree, and removing the worktree now could lose that work or land it in the main checkout.`;
}
function Ko(e, o) {
  if (o.tookToLaunch) return `${o.originalCwdMissing ? `The original directory ${(0, import_chunk_tp3c5q2s.Jb)(e)} no longer exists` : "The way back led outside the folders that this session was launched with"}, so the session is now in ${(0, import_chunk_tp3c5q2s.Jb)(o.restoredCwd)}, a folder that it was launched with.`;
  if (!o.originalCwdMissing) return `Session is now back in ${(0, import_chunk_tp3c5q2s.Jb)(o.restoredCwd)}.`;
  let r = `The original directory ${(0, import_chunk_tp3c5q2s.Jb)(e)} no longer exists, so the session is now in ${(0, import_chunk_tp3c5q2s.Jb)(o.restoredCwd)}.`;
  return o.fellBackToWorktree || o.returnedToLaunchDir ? r : `${r} Consider restarting Claude from an existing directory.`;
}
async function xc(e) {
  return false;
}
async function zs(e, o, r) {
  let [{ summary: h, told: g }, y, k] = await Promise.all([Hs(e, o.hookOrigin), (0, import_chunk_6mfepmbb.aEe)(e.worktreePath), xc(e.worktreePath)]), w = Ec(await Ks(e.worktreePath)), R = w + Ys(o.taskRegistry.all(), e.worktreePath, o.agentId);
  if (h === null) return { found: `Could not verify worktree state at ${(0, import_chunk_tp3c5q2s.Jb)(e.worktreePath)}${g?.unknown === void 0 ? "" : `: ${g.unknown}`}.${R}`, next: Ms, errorCode: 3 };
  let { changedFiles: I, atStake: x, submoduleWork: L, movedToChangeset: K } = h, z = g?.unknown === void 0 ? g : void 0, q = z === void 0 && r && h.commits > 0 && await (0, import_chunk_bzyb60p0.Bui)(e) ? 0 : h.commits;
  if (y === "unknown" && I === 0 && q === 0 && !k) return { found: `Could not check the worktree's ${import_chunk_6mfepmbb.dO} folder, which may hold files saved from connectors that removing the worktree would delete.${R}`, next: Ms, errorCode: 3 };
  if (I > 0 || q > 0 || y !== 0 || k) {
    let V = z?.held ? [z.held] : [];
    if (z === void 0 && I > 0) V.push(`${I} uncommitted ${I === 1 ? "file" : "files"}${L ? ` (including ${(0, import_chunk_ak45b7eq.YDe)(L)}, which git status in the worktree does not show)` : ""}`);
    if (z === void 0 && q > 0) V.push(`${q} ${q === 1 ? "commit" : "commits"} ${(0, import_chunk_bzyb60p0.OOn)(x ?? { head: "not_read", commits: q }, e.worktreeBranch ? (0, import_chunk_tp3c5q2s.Jb)(e.worktreeBranch) : "the worktree branch", "the worktree's current branch")}`);
    if (y !== 0) {
      let G = z === void 0 ? "git" : "version control";
      V.push(y === "unknown" ? `a ${import_chunk_6mfepmbb.dO} folder that could not be checked, which may hold files saved from connectors that ${G} doesn't track` : `${y === 1 ? "1 item" : `${y} items`} saved from connectors in ${import_chunk_6mfepmbb.dO}, a folder ${G} doesn't track`);
    }
    return { found: `Worktree has ${V.join(" and ")}. Removing will discard this work permanently.${K ? ` (Commits made in this worktree are already stored server-side, head changeset ${K.slice(0, 12)}, and are not affected by removing it.)` : ""}${z?.isMoved ? ` (${import_chunk_bzyb60p0.AOn})` : ""}${R}`, next: ft, errorCode: 2, tellsOfCopies: k };
  }
  if (x !== void 0 && "onKeptBranch" in x) {
    let V = x.onKeptBranch;
    return { found: `The worktree is now on another branch, which has ${V} ${V === 1 ? "commit" : "commits"} that this session's starting commit lacks. Removing the worktree keeps that branch, so no commit is lost, but the user may still be working there.${R}`, next: ft, errorCode: 2 };
  }
  if (z?.isMoved) return { found: `${import_chunk_bzyb60p0.AOn} The user may still be working there.${R}`, next: ft, errorCode: 2 };
  if (R !== "") return { found: R.trimStart(), next: w === "" ? js : ft, errorCode: 6 };
  return null;
}
class Yo extends Map {
}
class oo extends WeakSet {
}
var Xs = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "97f24bfb-4314-5dc3-8773-45e146cd049d", name: import_chunk_qnq7dhb5.Bne, searchHint: "exit a worktree session and return to the original directory", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return "Exits a worktree session created by EnterWorktree and restores the original working directory";
}, async prompt() {
  return Ns();
}, get inputSchema() {
  return (0, import_chunk_harsxaq1.Dg)("session") ? vc() : Vo();
}, get outputSchema() {
  return Rc();
}, userFacingName(e) {
  return e?.action === "remove" ? "Cleaning up worktree" : "Exiting worktree";
}, whenToUse: `When the user asks to leave a worktree that ${import_chunk_59xxesz9.IT} put this session in, use it; do not call it on your own initiative.`, shouldDefer: true, isDestructive(e) {
  return e.action === "remove";
}, toAutoClassifierInput(e) {
  return e.action === "remove" && e.discard_changes ? "remove the worktree and discard any work in it" : e.action;
}, suppressesAlwaysAllowRule(e) {
  return e.action === "remove" && e.discard_changes === true;
}, ruleUsuallyOffered() {
  return true;
}, renderToolUseMessage() {
  return "";
}, create(e) {
  return { async validateInput(o) {
    if ((0, import_chunk_18rsj2ts.Nz)()) return { result: false, message: 'ExitWorktree cannot be called from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session\'s process-wide working directory. This agent is already isolated; use Bash with `cd` for directory changes within it.', errorCode: 5 };
    let r = (0, import_chunk_rb36kwbn.ui)();
    if (!r) return { result: false, message: "No-op: there is no active EnterWorktree session to exit. This tool only operates on worktrees created by EnterWorktree in the current session \u2014 it will not touch worktrees created manually or in a previous session. No filesystem changes were made.", errorCode: 1 };
    let h = Qs(r, o.action, e.permissions());
    if (h !== null) return { result: false, message: h, errorCode: 4 };
    let g = o.action === "remove" ? await (0, import_chunk_bzyb60p0.f3e)(r.worktreePath, e.storageV5) : void 0;
    if (g !== void 0) return { result: false, message: `Another Claude Code session (${(0, import_chunk_bzyb60p0.xOn)(g)}) is running in this worktree, though it may be idle, so this tool will not remove ${(0, import_chunk_tp3c5q2s.Jb)(r.worktreePath)}, even with discard_changes. ${r.enteredExisting ? "Use" : "If the user ends that session, call this tool again. Otherwise use"} action: "keep" to return to ${(0, import_chunk_tp3c5q2s.Jb)(r.originalCwd)}. ${qo(g)}`, errorCode: 8 };
    if (o.action === "remove" && r.enteredExisting) return { result: false, message: `This session is not the owner of the worktree at ${(0, import_chunk_tp3c5q2s.Jb)(r.worktreePath)} \u2014 it either entered a pre-existing worktree via EnterWorktree({path}) or resumed into a checkout whose liveness lock another running Claude Code session still holds \u2014 so this tool will not remove it. Use action: "keep" to return to ${(0, import_chunk_tp3c5q2s.Jb)(r.originalCwd)}. ` + (r.vcsCopy?.madeBy === "mod" ? "If the user wants it gone, they can remove it with the project's version control." : "If no other session is using it, remove it yourself with `git worktree remove`; while a live session's lock is present, git will refuse and name the owner."), errorCode: 4 };
    let y = (0, import_chunk_bzyb60p0.ROn)(r, e.hookOrigin);
    if (o.action === "remove" && y) return { result: false, message: `This tool will not remove the worktree at ${(0, import_chunk_tp3c5q2s.Jb)(r.worktreePath)}. ${y} Use action: "keep" to exit and leave it on disk.`, errorCode: 4 };
    let k = o.action === "remove" && !o.discard_changes ? await zs(r, e, false) : null;
    return k === null ? { result: true } : { result: false, message: `${k.found} ${k.next}`, errorCode: k.errorCode };
  }, async checkPermissions(o, r) {
    let h = (0, import_chunk_rb36kwbn.ui)();
    if (!h && o.discard_changes) return { behavior: "deny", message: "The session left its worktree before this call ran.", decisionReason: { type: "other", reason: "The session left its worktree before this call ran." } };
    if (h && r.toolUseId !== void 0) e.toolState.get(Yo).set(r.toolUseId, h);
    let { mode: g, modeBeforeRewrite: y = g } = e.permissions(), k = [g, y].some((I) => (0, import_chunk_xfj2cwfv.Jr)(I));
    if (h) e.toolState.get(oo).delete(h);
    let w = h && o.action === "remove" && o.discard_changes ? await zs(h, e, !k) : null;
    if (!h || w === null) return { behavior: "allow", updatedInput: o };
    e.toolState.get(oo).add(h);
    let R = w.found.replace("Nothing was removed: task", "Task");
    return { behavior: "ask", message: R, decisionReason: { type: "other", reason: R }, suppressAlwaysAllowRule: true };
  }, async call(o, r) {
    let h = e.toolState.get(Yo), g = h.get(r.toolUseId);
    if (h.delete(r.toolUseId), g !== void 0) to(g);
    let y = (0, import_chunk_rb36kwbn.ui)();
    if (!y) throw Error("Not in a worktree session");
    let { originalCwd: k, preEnterOriginalCwd: w, worktreePath: R, tmuxSessionName: I, liveLaunchAnchor: x, launchCheckout: L, bootLaunchTree: K } = y, z = e.toolState.get(oo).delete(y) && o.discard_changes === true, q = y.vcsCopy?.madeBy === "mod", V = q ? (0, import_chunk_9e5mdyfk.HCe)(y.vcsCopy) : y.worktreeBranch, G = (0, import_chunk_f9x2f6cx.Oo)() === (0, import_chunk_f9x2f6cx.Te)(), j = o.action === "keep" && false, { summary: H, told: X } = o.action === "remove" ? await Hs(y, e.hookOrigin) : { summary: j || q ? null : await qs(R, y) }, { changedFiles: N, commits: Q, atStake: ye, movedToChangeset: ae } = H ?? { changedFiles: 0, commits: 0 }, Z = ye !== void 0 && ye.head !== "not_read" && { head: (0, import_chunk_78g0060s.f)(ye.head), ..."onKeptBranch" in ye && { commits_on_kept_branch: ye.onKeptBranch ?? -1 } }, Ee = [e.session, k, w, G, R, x, L, K, e.storageV5, () => Je(e)];
    if (o.action === "keep") {
      to(y), eo(y, o.action, e.permissions()), import_chunk_ha393e1n.Ue.holdThroughRootMove(), await (0, import_chunk_bzyb60p0.dQ)(e.storageV5, (uo) => Ws(e, k, uo));
      let re = await Bs(e, Ee);
      (0, import_chunk_y53wbr8a.a)("tengu_worktree_kept", { mid_session: true, commits: Q, changed_files: N, ...Z });
      let De = (0, import_chunk_bzyb60p0.ROn)(y, e.hookOrigin), tt = I ? ` Tmux session ${(0, import_chunk_tp3c5q2s.Jb)(I)} is still running; reattach with \`tmux attach -t\` and that name.` : "";
      return { data: { action: "keep", originalCwd: k, worktreePath: R, worktreeBranch: V, tmuxSessionName: I, restoredCwd: re.restoredCwd, originalCwdMissing: re.originalCwdMissing, sandboxNote: re.sandboxNote, message: `Exited worktree. Your work is preserved at ${(0, import_chunk_tp3c5q2s.Jb)(R)}${V ? ` on branch ${(0, import_chunk_tp3c5q2s.Jb)(V)}` : ""}.${De ? ` ${De}` : ""} ${Ko(k, re)}${tt}` } };
    }
    if (eo(y, o.action, e.permissions()), X !== void 0 && !z && (X.unknown !== void 0 || X.held !== "" || X.isMoved)) throw new import_chunk_jv7av99m.A(`Worktree not removed. The session is still in it, and it no longer reads clean. ${ft}`, "ExitWorktree: stopped for work found at the removal", "work_since_check");
    let Ke = await Ks(R), Oe = o.discard_changes ? 0 : await (0, import_chunk_6mfepmbb.aEe)(R);
    if (Oe !== 0) throw new import_chunk_jv7av99m.A(`Worktree not removed; the session is still in it. ${Oe === "unknown" ? `Its ${import_chunk_6mfepmbb.dO} folder could not be checked, and may hold files saved from connectors that removing the worktree would delete.` : `Its ${import_chunk_6mfepmbb.dO} folder now holds files saved from connectors that removing the worktree would delete.`} ${ft}`, "ExitWorktree: stopped for files saved from connectors", "connector_downloads");
    let xe = false, Le = await (0, import_chunk_bzyb60p0.f3e)(R, e.storageV5);
    if (Le !== void 0) throw new import_chunk_jv7av99m.A(`Worktree not removed, and this session is still in it: another Claude Code session (${(0, import_chunk_bzyb60p0.xOn)(Le)}) is running in the worktree, though it may be idle. If the user ends that session, call this tool again. Otherwise use action: "keep" to leave the worktree in place. ${qo(Le)}`, "ExitWorktree: stopped for another live session in the worktree", "other_live_session");
    to(y), eo(y, o.action, e.permissions());
    let $e = Ys(e.taskRegistry.all(), R, e.agentId);
    if ($e !== "" && !o.discard_changes) throw new import_chunk_jv7av99m.A(`${$e.trimStart()} ${js}`, "ExitWorktree: stopped for a running task", "task_in_worktree");
    if (I) await (0, import_chunk_bzyb60p0.Dye)(I);
    if (to(y), eo(y, o.action, e.permissions()), import_chunk_ha393e1n.Ue.holdThroughRootMove(), xe) y[import_chunk_rb36kwbn.Nct] = "may_go";
    let Re = await (0, import_chunk_bzyb60p0.Lyt)(e.storageV5, e.credentials, (re) => Ws(e, k, re), { origin: e.hookOrigin, isDiscard: z, reason: "the session left its worktree" });
    delete y[import_chunk_rb36kwbn.Nct];
    let He = y[import_chunk_rb36kwbn.Fct] === void 0 ? "" : `: ${y[import_chunk_rb36kwbn.Fct]}`, Ce = await Bs(e, Ee);
    if (!Re) {
      let re = await (0, import_chunk_bzyb60p0.f3e)(R, e.storageV5), De = re === void 0 ? "" : ` Another Claude Code session (${(0, import_chunk_bzyb60p0.xOn)(re)}) is running in it, though it may be idle. ${qo(re)}`;
      return { data: { action: "remove", originalCwd: k, worktreePath: R, worktreeBranch: V, discardedFiles: 0, discardedCommits: 0, restoredCwd: Ce.restoredCwd, originalCwdMissing: Ce.originalCwdMissing, sandboxNote: Ce.sandboxNote, message: `Exited worktree but could not remove it. It is kept at ${(0, import_chunk_tp3c5q2s.Jb)(R)}${He}.${De} ${Ko(k, Ce)}` } };
    }
    (0, import_chunk_y53wbr8a.a)("tengu_worktree_removed", { source: (0, import_chunk_78g0060s.S)("exit_tool"), mid_session: true, commits: Q, changed_files: N, ...Z, ...Ke !== 0 && { worktrees_inside: Ke ?? -1 } });
    let Be = X?.unknown === void 0 ? X : void 0, Ne = Be?.held ? [Be.held] : [];
    if (Be === void 0 && Q > 0) Ne.push(`${Q} ${Q === 1 ? "commit" : "commits"}`);
    if (Be === void 0 && N > 0) Ne.push(`${N} uncommitted ${N === 1 ? "file" : "files"}`);
    let oe = Ne.length > 0 ? ` Discarded ${Ne.join(" and ")}.` : "", se = ae ? ` Commits made there remain stored server-side (head changeset ${ae.slice(0, 12)}).` : "", ge = (0, import_chunk_bzyb60p0.eCe)(y[import_chunk_rb36kwbn.ghn]);
    return { data: { action: "remove", originalCwd: k, worktreePath: R, worktreeBranch: V, ...ge !== void 0 && { releaseNote: ge }, discardedFiles: N, discardedCommits: Q, restoredCwd: Ce.restoredCwd, originalCwdMissing: Ce.originalCwdMissing, sandboxNote: Ce.sandboxNote, message: `Exited and removed worktree at ${(0, import_chunk_tp3c5q2s.Jb)(R)}.${oe}${se}${ge === void 0 ? "" : ` A mod noted: \u201C${ge}\u201D.`} ${Ko(k, Ce)}` } };
  } };
}, mapToolResultToToolResultBlockParam({ message: e, sandboxNote: o }, r) {
  return { type: "tool_result", content: o ? `${e} ${o}` : e, tool_use_id: r };
} });
function Qs(e, o, r) {
  if (r.blockFileToolReadsOutsideWorkingDirectories !== true) return null;
  let h = (y) => typeof y === "string" && (0, import_path6.isAbsolute)(y) && (0, import_chunk_p1ewvgeh.Tjt)(y, r), g = [e.originalCwd, e.preEnterOriginalCwd].find((y) => y !== void 0 && !h(y));
  if (g !== void 0) return `The session stays in the worktree: ${(0, import_chunk_tp3c5q2s.Jb)(String(g))}, the directory that ExitWorktree would return to, lies outside the folders that this session was launched with, and permissions.blockFileToolReadsOutsideWorkingDirectories keeps the session to those folders. Neither action can leave this worktree: go on working here.`;
  if (o !== "remove" || r.blockWritesOutsideWorkingDirectories !== true) return null;
  if (!h(e.worktreePath)) return `The worktree at ${(0, import_chunk_tp3c5q2s.Jb)(String(e.worktreePath))} lies outside the folders that this session was launched with, and permissions.blockWritesOutsideWorkingDirectories keeps writes to those folders, so this tool will not remove it. Use action: "keep" to exit and leave it on disk.`;
  return e.hookBased && !e.enteredExisting ? `${e.vcsCopy?.madeBy === "mod" ? `A mod made the worktree at ${(0, import_chunk_tp3c5q2s.Jb)(e.worktreePath)}. Its removal, by that mod,` : `A WorktreeCreate hook made the worktree at ${(0, import_chunk_tp3c5q2s.Jb)(e.worktreePath)}. Its removal, by a WorktreeRemove hook or by git where none is configured,`} would run outside the sandbox, and permissions.blockWritesOutsideWorkingDirectories keeps this session's writes to the folders that it was launched with, so this tool will not remove it. Use action: "keep" to exit and leave it on disk. If the user wants it gone, they can remove it outside this session with the tool that made it.` : null;
}
function eo(...e) {
  let o = Qs(...e);
  if (o !== null) throw new import_chunk_jv7av99m.A(o, "ExitWorktree: stopped for a directory outside what the launch gave", "outside_the_launch");
}
function to(e) {
  if ((0, import_chunk_rb36kwbn.ui)() !== e) throw new import_chunk_jv7av99m.A("ExitWorktree stopped before it left or removed any worktree: this session entered or left one while the call ran. Check where the session is now before calling ExitWorktree again.", "ExitWorktree: the worktree session changed during the call", "worktree_session_changed");
}
function Ws(e, o, r) {
  let h = e.permissions(), g = (0, import_chunk_trq47kfh.W2e)() !== void 0 && r !== void 0 && (0, import_chunk_w578pjby.DLr)(r), y = h.blockFileToolReadsOutsideWorkingDirectories === true && (g || !(0, import_chunk_p1ewvgeh.Tjt)(rt(o), h));
  try {
    Je(e);
  } catch {
  }
  return y;
}
async function Bs(e, o) {
  let r, h;
  try {
    r = await Oc(...o);
  } finally {
    try {
      h = Je(e);
    } finally {
      import_chunk_ha393e1n.Ue.rebuildAfterRootMove();
    }
  }
  let g = import_chunk_ha393e1n.Ue.configLeftBehindRefusal() ?? r.sandboxNote;
  if (h === void 0) return { ...r, sandboxNote: g };
  return (0, import_chunk_w5s307zm.Joe)(), (0, import_chunk_r60bafc1.Pc)()?.refreshGitBranch?.(), { ...r, restoredCwd: h, tookToLaunch: true, sandboxNote: g };
}
(0, import_chunk_adx6804h.B)();
var Zs = "Create a new task in the task list";
function Js() {
  let e = (0, import_chunk_bzyb60p0.iZt)(), o = e ? 'A short title in imperative form, five words at most (e.g., "Fix login bug")' : 'A brief, actionable title in imperative form (e.g., "Fix authentication bug in login flow")', r = e ? "**description** (optional): Leave it out unless the subject alone is unclear or another agent will do the task." : "**description**: What needs to be done", h = e ? "Leave it out. The subject is shown while the task is in progress." : 'Present continuous form shown in the spinner when the task is in_progress (e.g., "Fixing authentication bug"). If omitted, the spinner shows the subject instead.', g = e ? "Keep each subject short: it is a row in a progress list" : "Create tasks with clear, specific subjects that describe the outcome", y = e ? "For a task that another agent will do, include a description with enough detail to understand and complete it" : "Include enough detail in the description for another agent to understand and complete the task", k = (0, import_chunk_yvad17bv.xi)() ? " and potentially assigned to teammates" : "", w = (0, import_chunk_yvad17bv.xi)() ? `- ${y}
- New tasks are created with status 'pending' and no owner - use TaskUpdate with the \`owner\` parameter to assign them
` : "";
  return `Use this tool to create a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.
It also helps the user understand the progress of the task and overall progress of their requests.

## When to Use This Tool

Use this tool proactively in these scenarios:

- Complex multi-step tasks - When a task requires 3 or more distinct steps or actions
- Non-trivial and complex tasks - Tasks that require careful planning or multiple operations${k}
- Plan mode - When using plan mode, create a task list to track the work
- User explicitly requests todo list - When the user directly asks you to use the todo list
- User provides multiple tasks - When users provide a list of things to be done (numbered or comma-separated)
- After receiving new instructions - Immediately capture user requirements as tasks
- When you start working on a task - Mark it as in_progress BEFORE beginning work
- After completing a task - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use This Tool

Skip using this tool when:
- There is only a single, straightforward task
- The task is trivial and tracking it provides no organizational benefit
- The task can be completed in less than 3 trivial steps
- The task is purely conversational or informational

NOTE that you should not use this tool if there is only one trivial task to do. In this case you are better off just doing the task directly.

## Task Fields

- **subject**: ${o}
- ${r}
- **activeForm** (optional): ${h}

All tasks are created with status \`pending\`.

## Tips

- ${g}
- After creating tasks, use TaskUpdate to set up dependencies (blocks/blockedBy) if needed
${w}- Check TaskList first to avoid creating duplicate tasks
`;
}
var ei = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ subject: (0, import_chunk_adx6804h.n)().describe("A brief title for the task"), description: (0, import_chunk_adx6804h.n)().describe("What needs to be done"), activeForm: (0, import_chunk_adx6804h.n)().optional().describe('Present continuous form shown in spinner when in_progress (e.g., "Running tests")'), metadata: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional().describe("Arbitrary metadata to attach to the task") })), Dc = (0, import_chunk_2cbgkbm2.p)(() => ei().extend({ subject: (0, import_chunk_adx6804h.n)().describe("A short title for the task, five words at most"), description: (0, import_chunk_adx6804h.n)().optional().describe("Leave out unless the subject alone is unclear or another agent will do the task"), activeForm: (0, import_chunk_adx6804h.n)().optional().describe("Leave out: the subject is shown") })), Lc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ task: (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), subject: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)().optional().catch(void 0).describe("The task's description as saved. It can differ from the tool_use input if Claude Code corrects a malformed call or a PreToolUse hook changes the input. Absent in results from older Claude Code versions.") }), appKeepsStatuses: (0, import_chunk_adx6804h.v)(true).optional().catch(void 0).describe("@internal Present when the result told Claude that the app sets task statuses.") })), ti = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "1081a26f-7816-5c03-861f-ec38ab42e5a5", name: import_chunk_mahb4v28.Gp, whenToUse: `When you are about to start work that takes three or more steps, or the user has just given several things to do, use it once per task to list them; to hand work to a subagent, use ${import_chunk_060xwhvh._t}.`, searchHint: "create a task in the task list", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return Zs;
}, async prompt() {
  return Js();
}, get inputSchema() {
  return (0, import_chunk_bzyb60p0.iZt)() ? Dc() : ei();
}, get outputSchema() {
  return Lc();
}, userFacingName() {
  return "TaskCreate";
}, shouldDefer: true, coerceInput(e) {
  let o = (0, import_chunk_bzyb60p0.GPn)(e);
  return o === null || !(0, import_chunk_bzyb60p0.iZt)() ? o : { ...o, shapeClass: o.shapeClass.replace("backfill_description", "description_left_out") };
}, validationErrorSteer(e) {
  return (0, import_chunk_bzyb60p0.vVa)(e, (0, import_chunk_bzyb60p0.iZt)());
}, getActivityDescription(e) {
  return e?.description === void 0 && typeof e?.subject === "string" && e.subject.trim() !== "" ? `Adding task: ${e.subject}` : null;
}, isEnabled() {
  return (0, import_chunk_bzyb60p0.QMe)();
}, isConcurrencySafe() {
  return false;
}, toAutoClassifierInput(e) {
  return e.subject;
}, renderToolUseMessage() {
  return null;
}, create(e) {
  return { async validateInput({ subject: o, description: r }) {
    if (r === void 0 && o.trim() === "") return { result: false, message: "The subject is blank. Call TaskCreate again with a short title in `subject`.", errorCode: 2 };
    return { result: true };
  }, async call({ subject: o, description: r = o, activeForm: h, metadata: g }, { signal: y, onProgress: k }) {
    let w = await (0, import_chunk_0dht3xy7.kol)((0, import_chunk_0dht3xy7.rb)(), { subject: o, description: r, activeForm: h, status: "pending", owner: void 0, blocks: [], blockedBy: [], metadata: g }, e.storageV5), R = [], I = e.runTaskHooks(import_chunk_bzyb60p0.zrs, w, o, r, (0, import_chunk_wtm85h0y.jR)(), (0, import_chunk_wtm85h0y.Nf)(), void 0, y);
    try {
      for await (let L of I) if (L.blockingError) R.push((0, import_chunk_bzyb60p0.Tgi)(L.blockingError));
    } catch (L) {
      if (!(L instanceof import_chunk_jv7av99m.wp)) throw L;
      (0, import_chunk_w578pjby.t)("TaskCreated hooks cancelled (control stream closed)");
    }
    if (R.length > 0) throw await (0, import_chunk_0dht3xy7.RLn)((0, import_chunk_0dht3xy7.rb)(), w, e.storageV5), Error(R.join(`
`));
    k?.({ type: "set_expanded_view", expandedView: "tasks" });
    let x = e.agentId === void 0 && await import_chunk_bzyb60p0.DXo.peek(e.session)?.keeper?.keepsNewTask(w);
    return { data: { task: { id: w, subject: o, description: r }, ...x && { appKeepsStatuses: x } } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  let { task: r, appKeepsStatuses: h } = e;
  return { tool_use_id: o, type: "tool_result", content: `Task #${r.id} created successfully: ${r.subject}${h === true ? `

${import_chunk_bzyb60p0.Xxn}` : ""}` };
} });
(0, import_chunk_adx6804h.B)();
var oi = "Get a task by ID from the task list", ri = `Use this tool to retrieve a task by its ID from the task list.

## When to Use This Tool

- When you need the full description and context before starting work on a task
- To understand task dependencies (what it blocks, what blocks it)
- After being assigned a task, to get complete requirements

## Output

Returns full task details:
- **subject**: Task title
- **description**: Detailed requirements and context
- **status**: 'pending', 'in_progress', or 'completed'
- **blocks**: Tasks waiting on this one to complete
- **blockedBy**: Tasks that must complete before this one can start

## Tips

- After fetching a task, verify its blockedBy list is empty before beginning work.
- Use TaskList to see all tasks in summary form.
`;
var Nc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ taskId: (0, import_chunk_adx6804h.n)().describe("The ID of the task to retrieve") })), Mc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ task: (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), subject: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)(), status: (0, import_chunk_0dht3xy7.jSe)(), blocks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), blockedBy: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) }).nullable() })), ni = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "3e954f48-b7eb-5022-aef0-804e470937b5", name: import_chunk_mahb4v28.QI, whenToUse: `When you are about to start a task from the task list whose full description you have not read, such as one another agent created or assigned you, use it with its id; for all tasks in summary, use ${import_chunk_6qaevejb.Nk}.`, searchHint: "retrieve a task by ID", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return oi;
}, async prompt() {
  return ri;
}, get inputSchema() {
  return Nc();
}, get outputSchema() {
  return Mc();
}, userFacingName() {
  return "TaskGet";
}, shouldDefer: true, isEnabled() {
  return (0, import_chunk_bzyb60p0.QMe)();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return e.taskId;
}, renderToolUseMessage() {
  return null;
}, create({ storageV5: e, agentId: o }) {
  return { async call({ taskId: r }) {
    let h = (0, import_chunk_0dht3xy7.rb)(), g = await (0, import_chunk_0dht3xy7.Iae)(h, r, e);
    if (!g) return { data: { task: null } };
    return (0, import_chunk_bzyb60p0.T3e)(o), { data: { task: { id: g.id, subject: g.subject, description: g.description, status: g.status, blocks: g.blocks, blockedBy: g.blockedBy } } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  let { task: r } = e;
  if (!r) return { tool_use_id: o, type: "tool_result", content: "Task not found" };
  let h = [`Task #${r.id}: ${r.subject}`, `Status: ${r.status}`, `Description: ${r.description}`];
  if (r.blockedBy.length > 0) h.push(`Blocked by: ${r.blockedBy.map((g) => `#${g}`).join(", ")}`);
  if (r.blocks.length > 0) h.push(`Blocks: ${r.blocks.map((g) => `#${g}`).join(", ")}`);
  return { tool_use_id: o, type: "tool_result", content: h.join(`
`) };
} });
(0, import_chunk_adx6804h.B)();
var si = "Update a task in the task list", ai = `Use this tool to update a task in the task list.

## When to Use This Tool

**Mark tasks as resolved:**
- When you have completed the work described in a task
- When a task is no longer needed or has been superseded
- IMPORTANT: Always mark your assigned tasks as resolved when you finish them
- After resolving, call TaskList to find your next task

- ONLY mark a task as completed when you have FULLY accomplished it
- If you encounter errors, blockers, or cannot finish, keep the task as in_progress
- When blocked, create a new task describing what needs to be resolved
- Never mark a task as completed if:
  - Tests are failing
  - Implementation is partial
  - You encountered unresolved errors
  - You couldn't find necessary files or dependencies

**Delete tasks:**
- When a task is no longer relevant or was created in error
- Setting status to \`deleted\` permanently removes the task

**Update task details:**
- When requirements change or become clearer
- When establishing dependencies between tasks

## Fields You Can Update

- **status**: The task status (see Status Workflow below)
- **subject**: Change the task title (imperative form, e.g., "Run tests")
- **description**: Change the task description
- **activeForm**: Present continuous form shown in spinner when in_progress (e.g., "Running tests")
- **owner**: Change the task owner (agent name)
- **metadata**: Merge metadata keys into the task (set a key to null to delete it)
- **addBlocks**: Mark tasks that cannot start until this one completes
- **addBlockedBy**: Mark tasks that must complete before this one can start

## Status Workflow

Status progresses: \`pending\` \u2192 \`in_progress\` \u2192 \`completed\`

Use \`deleted\` to permanently remove a task.

## Staleness

Make sure to read a task's latest state using \`TaskGet\` before updating it.

## Examples

Mark task as in progress when starting work:
\`\`\`json
{"taskId": "1", "status": "in_progress"}
\`\`\`

Mark task as completed after finishing work:
\`\`\`json
{"taskId": "1", "status": "completed"}
\`\`\`

Delete a task:
\`\`\`json
{"taskId": "1", "status": "deleted"}
\`\`\`

Claim a task by setting owner:
\`\`\`json
{"taskId": "1", "owner": "my-name"}
\`\`\`

Set up task dependencies:
\`\`\`json
{"taskId": "2", "addBlockedBy": ["1"]}
\`\`\`
`;
var $c = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_0dht3xy7.jSe)().or((0, import_chunk_adx6804h.v)("deleted"));
  return (0, import_chunk_adx6804h.Ae)({ taskId: (0, import_chunk_adx6804h.n)().describe("The ID of the task to update"), subject: (0, import_chunk_adx6804h.n)().optional().describe("New subject for the task"), description: (0, import_chunk_adx6804h.n)().optional().describe("New description for the task"), activeForm: (0, import_chunk_adx6804h.n)().optional().describe('Present continuous form shown in spinner when in_progress (e.g., "Running tests")'), status: e.optional().describe("New status for the task"), addBlocks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().describe("Task IDs that this task blocks"), addBlockedBy: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().describe("Task IDs that block this task"), owner: (0, import_chunk_adx6804h.n)().optional().describe("New owner for the task"), metadata: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional().describe("Metadata keys to merge into the task. Set a key to null to delete it.") });
}), Fc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ success: (0, import_chunk_adx6804h.P)(), taskId: (0, import_chunk_adx6804h.n)(), updatedFields: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), error: (0, import_chunk_adx6804h.n)().optional(), statusChange: (0, import_chunk_adx6804h.c)({ from: (0, import_chunk_adx6804h.n)(), to: (0, import_chunk_adx6804h.n)() }).optional() })), li = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "728e7578-3b2a-5464-9de4-68a3665c9db1", name: import_chunk_mahb4v28.$m, whenToUse: `When you start, finish or drop a task on the task list, or need to change its details or owner or add dependencies, use it; mark a task completed only when fully done; to add a task, use ${import_chunk_mahb4v28.Gp}.`, searchHint: "update a task", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return si;
}, async prompt() {
  return ai;
}, get inputSchema() {
  return $c();
}, get outputSchema() {
  return Fc();
}, userFacingName() {
  return "TaskUpdate";
}, coerceInput: import_chunk_bzyb60p0.PZt, shouldDefer: true, isEnabled() {
  return (0, import_chunk_bzyb60p0.QMe)();
}, isConcurrencySafe() {
  return true;
}, toAutoClassifierInput(e) {
  let o = (0, import_chunk_bzyb60p0.PZt)(e)?.input ?? e, r = [o.taskId];
  if (o.status) r.push(o.status);
  if (o.subject) r.push(o.subject);
  return r.join(" ");
}, renderToolUseMessage() {
  return null;
}, create(e) {
  return { async call({ taskId: o, subject: r, description: h, activeForm: g, status: y, owner: k, addBlocks: w, addBlockedBy: R, metadata: I }, { signal: x, onProgress: L }) {
    let K = (0, import_chunk_0dht3xy7.rb)();
    L?.({ type: "set_expanded_view", expandedView: "tasks" });
    let z = e.storageV5, q = await (0, import_chunk_0dht3xy7.Iae)(K, o, z);
    if (!q) return { data: { success: false, taskId: o, updatedFields: [], error: "Task not found" } };
    (0, import_chunk_bzyb60p0.T3e)(e.agentId);
    let V = [], G = {};
    if (r !== void 0 && r !== q.subject) G.subject = r, V.push("subject");
    if (h !== void 0 && h !== q.description) G.description = h, V.push("description");
    if (g !== void 0 && g !== q.activeForm) G.activeForm = g, V.push("activeForm");
    if (k !== void 0 && k !== q.owner) G.owner = k, V.push("owner");
    if ((0, import_chunk_yvad17bv.xi)() && y === "in_progress" && k === void 0 && !q.owner) {
      let j = (0, import_chunk_wtm85h0y.jR)();
      if (j) G.owner = j, V.push("owner");
    }
    if (I !== void 0) V.push("metadata");
    if (y !== void 0) {
      if (y === "deleted") {
        let j = await (0, import_chunk_0dht3xy7.RLn)(K, o, z);
        return { data: { success: j, taskId: o, updatedFields: j ? ["deleted"] : [], error: j ? void 0 : "Failed to delete task", statusChange: j ? { from: q.status, to: "deleted" } : void 0 } };
      }
      if (y !== q.status) {
        if (y === "completed") {
          let j = [], H = e.runTaskHooks(import_chunk_bzyb60p0.xMn, o, q.subject, q.description, (0, import_chunk_wtm85h0y.jR)(), (0, import_chunk_wtm85h0y.Nf)(), void 0, x);
          try {
            for await (let X of H) if (X.blockingError) j.push((0, import_chunk_bzyb60p0.xur)(X.blockingError));
          } catch (X) {
            if (!(X instanceof import_chunk_jv7av99m.wp)) throw X;
            (0, import_chunk_w578pjby.t)("TaskCompleted hooks cancelled (control stream closed)");
          }
          if (j.length > 0) return { data: { success: false, taskId: o, updatedFields: [], error: j.join(`
`) } };
        }
        G.status = y, V.push("status");
      }
    }
    if (V.length > 0) await (0, import_chunk_0dht3xy7.DWe)(K, o, I === void 0 ? G : (j) => ({ ...G, metadata: (0, import_chunk_0dht3xy7.pon)(j.metadata, I) }), z);
    if (G.owner && (0, import_chunk_yvad17bv.xi)()) {
      let j = e.teammateContext?.agentName || (0, import_chunk_wtm85h0y.jR)() || (0, import_chunk_865at33z.Kk)(e.agentId, e.agentContext) || "team-lead", H = (0, import_chunk_wtm85h0y.Y0)(), X = (0, import_chunk_w578pjby._)({ type: "task_assignment", taskId: o, subject: q.subject, description: q.description, assignedBy: j, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
      await (0, import_chunk_0dht3xy7.$O)(G.owner, { from: j, text: X, timestamp: (/* @__PURE__ */ new Date()).toISOString(), color: H }, (0, import_chunk_wtm85h0y.Nf)() ?? (0, import_chunk_mvszxaxb.Zo)().taskList.leaderTeamName ?? K, z);
    }
    if (w && w.length > 0) {
      let j = w.filter((H) => !q.blocks.includes(H));
      for (let H of j) await (0, import_chunk_0dht3xy7.xLn)(K, o, H, z);
      if (j.length > 0) V.push("blocks");
    }
    if (R && R.length > 0) {
      let j = R.filter((H) => !q.blockedBy.includes(H));
      for (let H of j) await (0, import_chunk_0dht3xy7.xLn)(K, H, o, z);
      if (j.length > 0) V.push("blockedBy");
    }
    return { data: { success: true, taskId: o, updatedFields: V, statusChange: G.status !== void 0 ? { from: q.status, to: G.status } : void 0 } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  let { success: r, taskId: h, updatedFields: g, error: y, statusChange: k } = e;
  if (!r) return { tool_use_id: o, type: "tool_result", content: y || `Task #${h} not found` };
  let w = `Updated task #${h} ${g.join(", ")}`;
  if (k?.to === "completed" && (0, import_chunk_wtm85h0y.iB)() && (0, import_chunk_yvad17bv.xi)()) w += `

Task completed. Call TaskList now to find your next available task or see if your work unblocked others.`;
  return { tool_use_id: o, type: "tool_result", content: w };
} });
(0, import_chunk_adx6804h.B)();
var ci = "List all tasks in the task list";
function di() {
  let e = (0, import_chunk_yvad17bv.xi)() ? `- Before assigning tasks to teammates, to see what's available
` : "", o = (0, import_chunk_yvad17bv.xi)() ? "- **id**: Task identifier (use with TaskGet, TaskUpdate)" : "- **id**: Task identifier (use with TaskGet, TaskUpdate)", r = (0, import_chunk_yvad17bv.xi)() ? `
## Teammate Workflow

When working as a teammate:
1. After completing your current task, call TaskList to find available work
2. Look for tasks with status 'pending', no owner, and empty blockedBy
3. **Prefer tasks in ID order** (lowest ID first) when multiple tasks are available, as earlier tasks often set up context for later ones
4. Claim an available task using TaskUpdate (set \`owner\` to your name), or wait for leader assignment
5. If blocked, focus on unblocking tasks or notify the team lead
` : "";
  return `Use this tool to list all tasks in the task list.

## When to Use This Tool

- To see what tasks are available to work on (status: 'pending', no owner, not blocked)
- To check overall progress on the project
- To find tasks that are blocked and need dependencies resolved
${e}- After completing a task, to check for newly unblocked work or claim the next available task
- **Prefer working on tasks in ID order** (lowest ID first) when multiple tasks are available, as earlier tasks often set up context for later ones

## Output

Returns a summary of each task:
${o}
- **subject**: Brief description of the task
- **status**: 'pending', 'in_progress', or 'completed'
- **owner**: Agent ID if assigned, empty if available
- **blockedBy**: List of open task IDs that must be resolved first (tasks with blockedBy cannot be claimed until dependencies resolve)

Use TaskGet with a specific task ID to view full details including description and comments.
${r}`;
}
var zc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({})), Bc = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ tasks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), subject: (0, import_chunk_adx6804h.n)(), status: (0, import_chunk_0dht3xy7.jSe)(), owner: (0, import_chunk_adx6804h.n)().optional(), blockedBy: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) })) })), mi = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "bf213819-91d3-5845-9e1d-c22e01d27106", name: import_chunk_6qaevejb.Nk, whenToUse: `When you have just finished a task from the task list and are about to pick the next, or are about to report overall progress or which tasks are blocked, use it; for one task's full details use ${import_chunk_mahb4v28.QI}.`, searchHint: "list all tasks", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return ci;
}, async prompt() {
  return di();
}, get inputSchema() {
  return zc();
}, get outputSchema() {
  return Bc();
}, userFacingName() {
  return "TaskList";
}, shouldDefer: true, isEnabled() {
  return (0, import_chunk_bzyb60p0.QMe)();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, renderToolUseMessage() {
  return null;
}, create({ storageV5: e, agentId: o }) {
  return { async call(r) {
    let h = (0, import_chunk_0dht3xy7.rb)(), g = (await (0, import_chunk_0dht3xy7.HP)(h, e)).filter((w) => !w.metadata?._internal);
    if (g.length > 0) (0, import_chunk_bzyb60p0.T3e)(o);
    let y = new Set(g.filter((w) => w.status === "completed").map((w) => w.id));
    return { data: { tasks: g.map((w) => ({ id: w.id, subject: w.subject, status: w.status, owner: w.owner, blockedBy: w.blockedBy.filter((R) => !y.has(R)) })) } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  let { tasks: r } = e;
  if (r.length === 0) return { tool_use_id: o, type: "tool_result", content: "No tasks found" };
  let h = r.map((g) => {
    let y = g.owner ? ` (${g.owner})` : "", k = g.blockedBy.length > 0 ? ` [blocked by ${g.blockedBy.map((w) => `#${w}`).join(", ")}]` : "";
    return `#${g.id} [${g.status}] ${g.subject}${y}${k}`;
  });
  return { tool_use_id: o, type: "tool_result", content: h.join(`
`) };
} });
function pi(e, o) {
  let r, h = () => r ??= o(), g = new Set(Reflect.ownKeys(e));
  return new Proxy(e, { get(y, k, w) {
    if (g.has(k)) return Reflect.get(y, k, w);
    return typeof k === "symbol" && r === void 0 ? void 0 : Reflect.get(h(), k, w);
  }, has(y, k) {
    if (g.has(k)) return true;
    return typeof k === "symbol" && r === void 0 ? false : k in h();
  }, ownKeys() {
    return Reflect.ownKeys(h());
  }, getOwnPropertyDescriptor(y, k) {
    let w = g.has(k) ? Reflect.getOwnPropertyDescriptor(y, k) : Reflect.getOwnPropertyDescriptor(h(), k);
    return w && { ...w, configurable: true };
  }, set(y, k, w) {
    return g.delete(k), Reflect.set(h(), k, w);
  }, defineProperty(y, k, w) {
    return g.delete(k), Reflect.defineProperty(h(), k, w);
  }, deleteProperty(y, k) {
    return g.delete(k), Reflect.deleteProperty(h(), k);
  } });
}
function $Ta() {
  (0, import_chunk_f9x2f6cx.Maa)(true);
}
function fi() {
  return (0, import_chunk_f9x2f6cx.Haa)();
}
var Uc = [require("/$bunfs/root/chunk-wsxghfnt.js").CronCreateTool, require("/$bunfs/root/chunk-h6rjayys.js").CronDeleteTool, require("/$bunfs/root/chunk-bkv8qw18.js").CronListTool], qc = require("/$bunfs/root/chunk-99w82wdh.js").SELF_HOSTED_RUNNER_TOOLS, hi = require("/$bunfs/root/chunk-1hw7wpsw.js").RemoteTriggerTool, gi = null, yi = require("/$bunfs/root/chunk-0pb5tkt4.js").SearchMcpRegistryTool, ki = require("/$bunfs/root/chunk-s7jvx77b.js").SuggestConnectorsTool, Ti = require("/$bunfs/root/chunk-h9jrg1dt.js").ListConnectorsTool, Gc = require("/$bunfs/root/chunk-20c0rp7s.js").PLUGIN_SKILL_TOOLS, wi = require("/$bunfs/root/chunk-7dxv81n3.js").MonitorTool, Kc = require("/$bunfs/root/chunk-ff2jebew.js").SendUserFileTool, Vc = require("/$bunfs/root/chunk-rfp19fcd.js").ProposeSkillsTool, Yc = require("/$bunfs/root/chunk-nfshrby1.js").SetGoalTool, Xc = require("/$bunfs/root/chunk-wz730a7k.js").PauseGoalTool, Qc = require("/$bunfs/root/chunk-k8rx3pya.js").GetGoalTool, Zc = require("/$bunfs/root/chunk-c1peqx98.js").PublishPluginTool, Si = require("/$bunfs/root/chunk-gys72mpb.js").PushNotificationTool, Jc = require("/$bunfs/root/chunk-mep06dd5.js").DesignSyncTool, eu = () => {
  if ((0, import_chunk_k449cc64.wt)()) return null;
  return require("/$bunfs/root/chunk-4jdck0e0.js").DesignTool;
}, tu = require("/$bunfs/root/chunk-285q0a13.js").ProjectsTool, Qo = require("/$bunfs/root/chunk-tdyk589r.js").FetchInboxMessageTool, bi = require("/$bunfs/root/chunk-6gw8wvcd.js").EndConversationTool, Jo = () => require("/$bunfs/root/chunk-d704ygn1.js").SendMessageTool, ou = () => require("/$bunfs/root/chunk-hr4bd66k.js").SendFileTool, _i = require("/$bunfs/root/chunk-nwwj3dyw.js").ContinueInProjectsTool, Ci = require("/$bunfs/root/chunk-nwwj3dyw.js").ContinueInProjectsContextTool, ru = require("/$bunfs/root/chunk-v3y6s069.js").ENABLE_STUB_TOOLS, et = require("/$bunfs/root/chunk-djby3hvp.js").PollTool, er = require("/$bunfs/root/chunk-vynjx69e.js").YieldTool, vi = require("/$bunfs/root/chunk-vgj4sbdf.js").McpTaskResumePollingTool, Ri = pi(require("/$bunfs/root/chunk-vwcrap96.js").ARTIFACT_TOOL_HEAD, () => require("/$bunfs/root/chunk-sbyrvcnq.js").ArtifactTool);
function nu() {
  require("/$bunfs/root/chunk-sbyrvcnq.js");
}
function iu() {
  return require("/$bunfs/root/chunk-a5xfxp1m.js").blocksWithFilesLanded;
}
var au = () => require("/$bunfs/root/chunk-1rqe63hf.js").ARTIFACT_ADDON_TOOLS, Ei = require("/$bunfs/root/chunk-njzm48t0.js").AppifactReplTool, Ii = null, lu = [], Oi = null, Ai = null, ht = require("/$bunfs/root/chunk-cc0f961n.js"), Pi = null, Di = null, $i = null, Li = null, Ni = require("/$bunfs/root/chunk-fk3ahevm.js").ListAgentsTool, tr = (() => (require("/$bunfs/root/chunk-kwvfgv52.js").initBundledWorkflows(), require("/$bunfs/root/chunk-ymmm0mbs.js").WorkflowTool))(), or = () => {
  if (!(0, import_chunk_wwft95x8.vR)()) return null;
  return require("/$bunfs/root/chunk-e5txm7fq.js").PowerShellTool;
};
function zi() {
  if ((0, import_chunk_r3kja8v6.ue)()) {
    let e = require("/$bunfs/root/chunk-v7j43e2p.js");
    return e.registerEvalToolSeams(), e.EvalTool;
  }
  return null;
}
function $v() {
  import_chunk_a7h1jnra.jbe.loadWriters = nu, import_chunk_6ygedzfy.r1i.load = iu;
  let e = eu(), o = zi();
  return [import_chunk_kb3nnh8q.eQn, ...(0, import_chunk_wwft95x8.Gd)() ? [import_chunk_bzyb60p0.ii] : [], ...[import_chunk_bzyb60p0.AW, import_chunk_bzyb60p0.RW].filter((r) => !(0, import_chunk_bzyb60p0.b6)().has(r.name)), import_chunk_gc5a361p.lie, import_chunk_bzyb60p0.bH, import_chunk_bzyb60p0.hC, import_chunk_bzyb60p0.YI, ...($i?.() ?? []).filter((r) => !(0, import_chunk_bzyb60p0.b6)().has(r.underlyingV1ToolName)), import_chunk_bzyb60p0.d3e, ...Cn, import_chunk_bzyb60p0.qw, bn, yn, hn, Wt, import_chunk_g44r9njd.NY, Zn, import_chunk_8k7k08kg.Oht, ..._i ? [_i] : [], ...Ci ? [Ci] : [], import_chunk_1ymj1rfb.DVr, ...[], Jc, ...e ? [e] : [], tu, ...Ai ? [Ai] : [], ...(0, import_chunk_0dht3xy7.YW)() ? [ti, ni, li, mi] : [], ...Ri ? [Ri] : [], ...au(), ...Ei ? [Ei] : [], ...Oi ? [Oi] : [], ...lu, ...(0, import_chunk_8fkaxt3d.Gbt)() ? [Bo] : [], ...(0, import_chunk_1n8b5n1q.zEn)() ? [Ls, Xs] : [], Jo(), ou(), ...Ni ? [Ni] : [], vr, ...o ? [o] : [], ...Ii ? [Ii] : [], ...et ? [et] : [], ...er ? [er] : [], tr, ...Uc, ...fi() ? qc : [], tn, ...hi ? [hi] : [], ...yi ? [yi] : [], ...ki ? [ki] : [], Ar, Lr, KJn, ...gi ? [gi] : [], sr, wr, ...vi ? [vi] : [], ...ru, ...Ti ? [Ti] : [], ...Gc, ...wi ? [wi] : [], en, Kc, Vc, Yc, Xc, Qc, Zc, ...Si ? [Si] : [], Qo, ...bi ? [bi] : [], ...or() ? [or()] : [], ...Pi ? [Pi] : [], ...Di ? [Di] : [], ...Li ? [Li()] : [], ...[], import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e, import_chunk_ttsnbbsg.Qqe, ...import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_REFRESH_MCP_TOOLS ? [jo] : [], ...(0, import_chunk_p44m8w7d.j_)() ? [import_chunk_bzyb60p0.FJo] : [], import_chunk_bzyb60p0.Kui, ss];
}
(0, import_chunk_4vsz8a99.$bl)($v, () => [...$v(), import_chunk_bzyb60p0.ii, import_chunk_bzyb60p0.AW, import_chunk_bzyb60p0.RW, ...$i?.() ?? [], require("/$bunfs/root/chunk-e5txm7fq.js").PowerShellTool, import_chunk_ynbv8e5n.GTn, import_chunk_2b1wcpvk.m_o, import_chunk_ynbv8e5n.iqo]);
function QJn(e, o) {
  let r = new Set($v().map((h) => h.name));
  return (0, import_chunk_4smdap7r.bT)([...n6(o), ...e.filter((h) => !r.has(h.name))], (h) => h.name);
}
function mqs(e, o) {
  let r = [];
  if (et !== null && !e.includes(et)) r.push(et);
  if (!e.includes(Qo)) r.push(Qo);
  if (r.length === 0) return e;
  let h = n6(o, { onlyNames: new Set(r.map((k) => k.name)) }), g = r.filter((k) => h.includes(k)), y = g.includes(et) ? e.filter((k) => k !== er) : e;
  return g.length === 0 ? e : [...y, ...g];
}
function so(e, o) {
  return o === void 0 ? e : e.filter((r) => o.has(r.name));
}
var n6 = (e, o) => {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SIMPLE && !o?.skipSimpleModeFilter) {
    let I = zi();
    if (I !== null && (0, import_chunk_w50zedgp.Oa)() && !o?.skipReplFilter) {
      let z = (0, import_chunk_f9x2f6cx.JA)() || e.restricted === true && (0, import_chunk_ht27b0vz.Tr)(e, I) !== null ? [import_chunk_bzyb60p0.bH, import_chunk_bzyb60p0.hC, import_chunk_bzyb60p0.YI] : [I, import_chunk_bzyb60p0.hC, import_chunk_bzyb60p0.YI];
      if (et !== null && (0, import_chunk_qf73a9we.Mx)()) z.push(et);
      if (ht.isCoordinatorMode()) z.push(import_chunk_kb3nnh8q.eQn, Wt, Jo(), ...(0, import_chunk_qrpds8jv.t_)() ? [tr] : []);
      return so((0, import_chunk_b83x8d52.IP)(z, e), o?.onlyNames);
    }
    let x = or(), L = [...(0, import_chunk_wwft95x8.Gd)() ? [import_chunk_bzyb60p0.ii] : [], ...x ? [x] : [], import_chunk_bzyb60p0.bH, import_chunk_bzyb60p0.hC];
    if (ht.isCoordinatorMode()) L.push(import_chunk_kb3nnh8q.eQn, Wt, Jo(), ...(0, import_chunk_qrpds8jv.t_)() ? [tr] : []);
    return so((0, import_chunk_b83x8d52.IP)(L, e), o?.onlyNames);
  }
  let r = /* @__PURE__ */ new Set([import_chunk_ttsnbbsg.hTe.name, import_chunk_ttsnbbsg.J_e.name, import_chunk_ttsnbbsg.Qqe.name, import_chunk_2b1wcpvk.ga]), h = $v().filter((I) => !r.has(I.name)), g = (0, import_chunk_b83x8d52.IP)(h, e), y = g.some((I) => (0, import_chunk_4vsz8a99.gt)(I, import_chunk_hn3cwwzt.ke)) && import_chunk_bzyb60p0.ii.isEnabled(), k = false;
  if ((0, import_chunk_w50zedgp.Oa)() && !o?.skipReplFilter) {
    if (g.some((x) => (0, import_chunk_4vsz8a99.gt)(x, import_chunk_h4t4qfaq.vo))) g = g.filter((x) => !(0, import_chunk_4vsz8a99.dv)(x, import_chunk_w50zedgp.jje)), k = true;
  }
  if (!o?.skipReplFilter && (0, import_chunk_bzyb60p0.zyt)(g, e, { activeAgents: o?.activeAgents })) g = g.filter((I) => !(0, import_chunk_4vsz8a99.gt)(I, import_chunk_ww0784kh.Gn));
  g = so(g, o?.onlyNames);
  let w = g.map((I) => I.isEnabled()), R = g.filter((I, x) => w[x]);
  if ((0, import_chunk_bzyb60p0.dR)() && !y && !k) {
    let I = (0, import_chunk_b83x8d52.IP)([import_chunk_bzyb60p0.AW, import_chunk_bzyb60p0.RW, ...(0, import_chunk_6a9gdcsm.hho)([import_chunk_bzyb60p0.RW.name, import_chunk_bzyb60p0.AW.name])].filter((x) => !R.includes(x)), e);
    R = [...R, ...I];
  }
  if (((0, import_chunk_bzyb60p0.nqa)() || (0, import_chunk_bzyb60p0.tNt)()) && !(0, import_chunk_w50zedgp.$h)(R) && !R.some((I) => (0, import_chunk_4vsz8a99.gt)(I, import_chunk_t99xdws4.co)) && !R.some((I) => (0, import_chunk_4vsz8a99.gt)(I, import_chunk_b83x8d52.VW))) R = [...R, ...(0, import_chunk_b83x8d52.IP)([import_chunk_bzyb60p0.Kui], e)];
  return so(R, o?.onlyNames);
}, lo = 3e4, cu = 3e5;
function hqs() {
  if ((0, import_chunk_xcgcdx61.Wee)()) return lo;
  let e = (0, import_chunk_865at33z.b)("tengu_curious_rivest", lo);
  return typeof e === "number" && e >= lo && e <= cu ? e : lo;
}
function gqs(e, o) {
  let r = 0;
  for (let [h, g, y] of [[(0, import_chunk_78g0060s.S)("removed"), e, o], [(0, import_chunk_78g0060s.S)("added"), o, e]]) for (let k of g) if (!(0, import_chunk_4vsz8a99.dwe)(y).has(k.name)) (0, import_chunk_y53wbr8a.a)("tengu_tool_pool_moved_at_expiry", { toolName: (0, import_chunk_865at33z.hr)((0, import_chunk_6a9gdcsm.Jm)(k)), reason: h }), r++;
  return r;
}
function GEn(e, o, r) {
  let h = r?.lookup;
  if (h === void 0) (0, import_chunk_9jr493jm.ACa)();
  let g = r?.asBuilt ? e : (0, import_chunk_b83x8d52.Nds)(e), y = n6(g, r), k = (0, import_chunk_4smdap7r.bT)((0, import_chunk_1hg0ytx8.Uot)([...r?.machineMcpTools ?? [], ...o], h !== void 0), (L) => L.name), w = (0, import_chunk_9jr493jm.o6r)((0, import_chunk_kjd9cbj9.$Go)((0, import_chunk_b83x8d52.IP)(k, g, h), k), k, h !== void 0), R = h === void 0 ? (0, import_chunk_9jr493jm.CCa)(y, w) : (0, import_chunk_9jr493jm.s6r)(y), I = (0, import_chunk_4smdap7r.bT)(R.toSorted(import_chunk_4vsz8a99.gme).concat(w.sort(import_chunk_4vsz8a99.gme)), (L) => L.name), x = r?.asBuilt || r?.addsTools === false ? I : nr(I, e);
  return h !== void 0 && ht.isCoordinatorMode() ? (0, import_chunk_kjd9cbj9.rvn)(x) : x;
}
var Nte = { getAllBaseTools: $v, getTools: n6, assembleToolPool: GEn };
