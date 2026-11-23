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
var chunk_d688kptq_exports = {};
__export(chunk_d688kptq_exports, {
  AEa: () => AEa,
  AVs: () => AVs,
  CEa: () => CEa,
  CVs: () => CVs,
  DEa: () => DEa,
  Dve: () => Dve,
  E8t: () => E8t,
  EEa: () => EEa,
  EVs: () => EVs,
  HEa: () => HEa,
  IEa: () => IEa,
  MEa: () => MEa,
  OEa: () => OEa,
  PEa: () => PEa,
  REa: () => REa,
  RVs: () => RVs,
  SEa: () => SEa,
  T8t: () => T8t,
  TEa: () => TEa,
  TVs: () => TVs,
  Xse: () => Xse,
  _Ea: () => _Ea,
  _Gr: () => _Gr,
  a2o: () => a2o,
  bEa: () => bEa,
  cEa: () => cEa,
  cEn: () => cEn,
  dEa: () => dEa,
  eht: () => eht,
  fEa: () => fEa,
  fEn: () => fEn,
  fJn: () => fJn,
  gEa: () => gEa,
  gGr: () => gGr,
  hEa: () => hEa,
  hGr: () => hGr,
  i2o: () => i2o,
  jIe: () => jIe,
  kEa: () => kEa,
  kVs: () => kVs,
  mEa: () => mEa,
  mGr: () => mGr,
  mJn: () => mJn,
  n2o: () => n2o,
  o2o: () => o2o,
  pEa: () => pEa,
  pEn: () => pEn,
  pJn: () => pJn,
  r2o: () => r2o,
  s2o: () => s2o,
  tht: () => tht,
  uEa: () => uEa,
  uEn: () => uEn,
  uJn: () => uJn,
  v8t: () => v8t,
  vEa: () => vEa,
  vVs: () => vVs,
  wEa: () => wEa,
  wMt: () => wMt,
  xEa: () => xEa,
  xVs: () => xVs,
  y$e: () => y$e,
  yEa: () => yEa
});
module.exports = __toCommonJS(chunk_d688kptq_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_fe5esh7d = require("/$bunfs/root/chunk-fe5esh7d.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_fc3gfgch = require("/$bunfs/root/chunk-fc3gfgch.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_179jgyn9 = require("/$bunfs/root/chunk-179jgyn9.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_zd24r3fj = require("/$bunfs/root/chunk-zd24r3fj.js");
var import_chunk_2kw0fwms = require("/$bunfs/root/chunk-2kw0fwms.js");
var import_chunk_vj6f11qy = require("/$bunfs/root/chunk-vj6f11qy.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_h5jsp3s5 = require("/$bunfs/root/chunk-h5jsp3s5.js");
var import_chunk_k5r71ad2 = require("/$bunfs/root/chunk-k5r71ad2.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_mzajx23m = require("/$bunfs/root/chunk-mzajx23m.js");
var import_chunk_759mf2n7 = require("/$bunfs/root/chunk-759mf2n7.js");
var import_chunk_d1r21263 = require("/$bunfs/root/chunk-d1r21263.js");
var import_chunk_144c0mc5 = require("/$bunfs/root/chunk-144c0mc5.js");
var import_chunk_c44qd7ec = require("/$bunfs/root/chunk-c44qd7ec.js");
var import_chunk_08bv0y93 = require("/$bunfs/root/chunk-08bv0y93.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_k1bhehpr = require("/$bunfs/root/chunk-k1bhehpr.js");
var import_chunk_gy3c59ma = require("/$bunfs/root/chunk-gy3c59ma.js");
var import_chunk_tjja7dsj = require("/$bunfs/root/chunk-tjja7dsj.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_y8s4362z = require("/$bunfs/root/chunk-y8s4362z.js");
var import_chunk_5f9jkxad = require("/$bunfs/root/chunk-5f9jkxad.js");
var import_chunk_hemc71zd = require("/$bunfs/root/chunk-hemc71zd.js");
var import_chunk_kb3nnh8q = require("/$bunfs/root/chunk-kb3nnh8q.js");
var import_chunk_tteqedwm = require("/$bunfs/root/chunk-tteqedwm.js");
var import_chunk_j2nb09zj = require("/$bunfs/root/chunk-j2nb09zj.js");
var import_chunk_eh2gjex9 = require("/$bunfs/root/chunk-eh2gjex9.js");
var import_chunk_41xvhnb0 = require("/$bunfs/root/chunk-41xvhnb0.js");
var import_chunk_dfgwgq6h = require("/$bunfs/root/chunk-dfgwgq6h.js");
var import_chunk_egw85n2m = require("/$bunfs/root/chunk-egw85n2m.js");
var import_chunk_zyws26f3 = require("/$bunfs/root/chunk-zyws26f3.js");
var import_chunk_tfgxeb6k = require("/$bunfs/root/chunk-tfgxeb6k.js");
var import_chunk_xgypevhc = require("/$bunfs/root/chunk-xgypevhc.js");
var import_chunk_s3d8sr7p = require("/$bunfs/root/chunk-s3d8sr7p.js");
var import_chunk_2e866jns = require("/$bunfs/root/chunk-2e866jns.js");
var import_chunk_7gv3ezdz = require("/$bunfs/root/chunk-7gv3ezdz.js");
var import_chunk_yta0vzjp = require("/$bunfs/root/chunk-yta0vzjp.js");
var import_chunk_vqrgm5ev = require("/$bunfs/root/chunk-vqrgm5ev.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_vyzg3yfa = require("/$bunfs/root/chunk-vyzg3yfa.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_xrav2tvh = require("/$bunfs/root/chunk-xrav2tvh.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_path2 = require("path");
var import_crypto = require("crypto");
var import_crypto2 = require("crypto");
var import_crypto3 = require("crypto");
var import_util = require("util");
var import_util2 = require("util");
var import_crypto4 = require("crypto");
var fd = "tengu_quizzical_knuth";
function tht() {
  return (0, import_chunk_sghy0qej.Pe)(fd, { safe: true });
}
var gd = "tengu_mellow_heron", _d = "tengu_snappy_sunrise_killswitch";
function jIe() {
  try {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_HELD_MESSAGE_RECOGNITION) return false;
    return (0, import_chunk_865at33z.b)(gd, false) === true || mGr();
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), false;
  }
}
function mGr() {
  try {
    return (0, import_chunk_6e68m1dj.Qp)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_HELD_MESSAGE_RECOGNITION && (0, import_chunk_865at33z.b)(import_chunk_865at33z.qRl, false) === true;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), false;
  }
}
function kVs() {
  try {
    return (0, import_chunk_6e68m1dj.qg)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_HELD_MESSAGE_RECOGNITION && !(0, import_chunk_sghy0qej.Pe)(_d, { safe: false });
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), false;
  }
}
function fEn(e) {
  return jIe() ? Hn(e) : [];
}
function pEn(e) {
  return new Set([...e].flatMap(Hn));
}
function Hn(e) {
  let r = (0, import_chunk_zsqk76p8.EFt)(e);
  if (r) return [r];
  return e.type === "user" ? (0, import_chunk_zsqk76p8.vFt)(e.mergedSendUuids) : [];
}
function vn(e) {
  return jIe() ? pEn(e) : /* @__PURE__ */ new Set();
}
function uJn(e, r) {
  let o = e.findIndex((y) => y.uuid === r);
  if (o === -1 || !jIe()) return [r];
  let g = e[o];
  return [...g.isMeta === true ? [] : Hn(g), r, ...e.slice(o + 1).flatMap((y) => as(y) ? Hn(y) : [])];
}
function as(e) {
  return typeof e.attachment === "object" && e.attachment !== null && Reflect.get(e.attachment, "commandMode") === "prompt" && Reflect.get(e.attachment, "isMeta") !== true;
}
function Dve(e, r, o = jIe()) {
  let g = e.findIndex((y) => y.uuid === r);
  return g !== -1 || !o ? g : e.findLastIndex((y) => Hn(y).includes(r));
}
function y$e(e) {
  return mGr() ? "on" : (0, import_chunk_bz1f2qnq.Tp)(e);
}
var Ot = 64;
function r2o(e, r, { primaryIsMeta: o = false, resultsAlsoList: g = [], standIn: y, wasPutBack: h } = {}) {
  let P = [], C = [], L = (I) => h !== void 0 && C.includes(I) && h(I), O = /* @__PURE__ */ new Set(), R = e === void 0 || o, N = (I) => {
    if (I === "" || P.includes(I)) return;
    if (P.length < Ot) P.push(I);
    else if (R) P[Ot - 1] = I;
  };
  for (let I of r ?? []) N(I);
  if (e !== void 0) {
    if (!P.includes(e)) if (P.length >= Ot) P[Ot - 1] = e;
    else P.push(e);
  }
  let z = () => {
    let I = P.filter((se) => !L(se)), V = I.at(-1);
    if (V === void 0) return;
    let J = C.findLast((se) => I.includes(se));
    return { user_message_uuid: e !== void 0 && !(o && J !== void 0) ? e : J ?? (y !== void 0 && P.includes(y) ? y : V), user_message_uuids: I };
  }, ie = () => {
    let I = z();
    try {
      let V = g.filter((be) => !P.includes(be)), J = V.at(-1);
      if (J === void 0) return I;
      return { user_message_uuid: I?.user_message_uuid ?? J, user_message_uuids: [...V, ...(I?.user_message_uuids ?? []).slice(-(Ot - V.length))] };
    } catch (V) {
      return (0, import_chunk_k449cc64.i)(V), I;
    }
  };
  return { fields: z, resultFields: ie, errorVariantFields: () => ie() ?? { user_message_uuid: void 0, ...C.some(L) && { user_message_uuids: [] } }, noteAttachment: (I) => {
    if (I.type === "queued_command" && I.commandMode === "prompt" && I.isMeta !== true && I.source_uuid !== void 0 && O.size < Ot) O.add(I.source_uuid);
  }, noteCommandStarted: (I) => {
    if (O.delete(I)) {
      if (N(I), P.includes(I)) C.push(I);
      return true;
    }
    return false;
  } };
}
var yd = 64;
function Fo(e) {
  let r = [], o, g = [], y, h = false, P = (C) => {
    if (h) return;
    try {
      h = C() === false;
    } catch (L) {
      h = true, (0, import_chunk_k449cc64.i)(L);
      try {
        (0, import_chunk_cqa9hrgx.m)("compact_running_turn_record", "tracker_threw");
      } catch (O) {
        (0, import_chunk_k449cc64.i)(O);
      }
    }
  };
  return { onAssistantRow: (C) => P(() => {
    if (Lo(C)) r = e(), o = C.uuid;
  }), onRoundStart: () => P(() => {
    g = r;
  }), onRetraction: (C) => P(() => {
    if (C === o) r = g;
  }), onBoundary: (C, L) => P(() => {
    let O = hd(C, { ...L, takenIn: e(), takenInAtLastReply: r, boundaryOfThisTurn: y });
    return y = C, O;
  }) };
}
function Lo(e) {
  return e.type === "assistant" && !("isSidechain" in e && e.isSidechain === true) && !e.isApiErrorMessage && e.isVirtual !== true && e.message.model !== import_chunk_bp9b0hd8.xs;
}
function Oo(e, r) {
  let o = e.findLastIndex(r);
  if (o === -1 || xo(e[o])) return false;
  let g = e.slice(o + 1);
  return g.some(Lo) && !g.some(import_chunk_865at33z.On);
}
function xo(e) {
  return e.type === "attachment" && e.attachment?.type === "queued_command" && Boolean(e.attachment.renderedByBatchHead);
}
function Do(e, r) {
  return typeof e === "string" && e.toLowerCase() === r?.toLowerCase();
}
function hd(e, { boundaryOfThisTurn: r, continuedTurnsRows: o, conversation: g, ...y }) {
  try {
    let h = o ?? [], P = Oo(h, (I) => Do(I.uuid, y.openerUuid)) && y.openerUuid !== void 0 ? [y.openerUuid] : [], C = (0, import_chunk_bz1f2qnq.Tp)(import_chunk_865at33z.YRl) === "on" ? y.takenIn.filter((I) => Oo(h, (V) => [V.uuid, ...fEn(V)].some((J) => Do(J, I)))) : [], L = r ?? (o && E8t(y.openerUuid, o)), O = y$e(import_chunk_865at33z.eAo) === "on" ? L?.compactMetadata?.preservedMessages?.uuids : void 0, R = new Set(Array.isArray(O) ? O.map((I) => String(I).toLowerCase()) : []), N = g.findLastIndex((I) => I.uuid === L?.uuid), z = R.size === 0 || N === -1 ? [] : g.filter((I, V) => V > N && typeof I.uuid === "string" && R.has(I.uuid.toLowerCase()) && !xo(I)), ie = Sd({ ...y, keptAtTheLastBoundary: [...z.map((I) => I.uuid), ...vn(z)], takenInAtLastReply: [...y.takenInAtLastReply, ...P], repliedToOnALostWorker: C, earlierBoundary: L });
    if (ie === "too_many_unanswered") return (0, import_chunk_cqa9hrgx.l)("compact_running_turn_record", "too_many_unanswered"), false;
    if ((0, import_chunk_cqa9hrgx.u)("compact_running_turn_record", { recorded: ie !== void 0 }), ie !== void 0) e.compactMetadata.runningTurnSends = ie;
    return true;
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
    try {
      (0, import_chunk_cqa9hrgx.m)("compact_running_turn_record", "threw");
    } catch (P) {
      (0, import_chunk_k449cc64.i)(P);
    }
    return false;
  }
}
function E8t(e, r) {
  let o = r.findLastIndex(import_chunk_865at33z.On), g = r[o];
  if (g === void 0 || !(0, import_chunk_865at33z.On)(g)) return;
  let y = g.compactMetadata?.runningTurnSends?.openerUuid;
  return (e !== void 0 ? typeof y === "string" && y.toLowerCase() === e.toLowerCase() : !r.some((h, P) => P > o && ds(r, P))) ? g : void 0;
}
function ds(e, r) {
  let o = e[r];
  return o.type === "user" && o.queueTranscriptOnly !== true && !(0, import_chunk_bzyb60p0.sBe)(o) && !((0, import_chunk_bz1f2qnq.Tp)(import_chunk_865at33z.gAs) === "on" && (0, import_chunk_bzyb60p0.VPn)(e, r));
}
function Sd({ takenIn: e, takenInAtLastReply: r, repliedToOnALostWorker: o = [], keptAtTheLastBoundary: g, openerUuid: y, earlierBoundary: h }) {
  let P = [...r, ...o], C = h?.compactMetadata, L = typeof C === "object" && C !== null ? Reflect.get(C, "runningTurnSends") : void 0, O = (ae) => typeof L === "object" && L !== null ? Reflect.get(L, ae) : void 0, R = (ae) => {
    let Q = O(ae);
    return Array.isArray(Q) ? Q.slice(0, Ot) : [];
  }, N = (ae) => typeof ae === "string" ? ae.toLowerCase() : ae, z = (ae, Q) => ae.some((ge) => N(ge) === N(Q)), ie = (ae) => (0, import_chunk_pbteexar.Ls)(ae.filter((Q) => typeof Q === "string" && Q !== "" && Q.length <= yd), N), I = R("summarisedOnly"), V = I.filter((ae) => !(z(g, ae) && z(e, ae) && z(P, ae))), J = [...R("uuids").filter((ae) => !z(V, ae)), ...e.filter((ae) => z(P, ae) && !z(V, ae))], be = ie(J).slice(0, Ot), se = ie([...I, ...e].filter((ae) => !z(J, ae)));
  if (se.length > Ot) return "too_many_unanswered";
  if (be.length === 0 && se.length === 0) return;
  let [he] = ie([y, O("openerUuid")]), H = be.filter((ae) => z(R("byLostWorkersReplies"), ae) || z(o, ae) && !z(r, ae) && !z(R("uuids"), ae));
  return { uuids: be, ...he !== void 0 && { openerUuid: he }, ...se.length > 0 && { summarisedOnly: se }, ...H.length > 0 && { byLostWorkersReplies: H } };
}
var ls = 864e5;
function eht(e, r) {
  for (let o of e) try {
    let g = { ...r, turn: [...r.turn], client: [...r.client] };
    if ((0, import_chunk_865at33z.On)(o)) o.compactMetadata.denyLists = g;
    else if (o.type === "user" || o.type === "attachment") o.denyLists = g;
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
  }
}
function Bo(e, r) {
  try {
    if (r !== void 0 && e?.handedOffTurn !== void 0 && e.storesDenyListsOnHandedRows === true) eht(e.handedOffTurn.messages, r);
  } catch (o) {
    (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "handed_rows_stamp_threw"), (0, import_chunk_k449cc64.i)(o);
  }
}
function wMt(e) {
  let r, o = [], g = false;
  for (let C of e) try {
    let L = (0, import_chunk_865at33z.On)(C) ? Object(C.compactMetadata).denyLists : Object(C).denyLists;
    if (L === void 0 || Object(C).isSidechain === true) continue;
    let O = Object(L), R = O.version, N = (0, import_chunk_qanr9g0g.s9e)({ disallowed_tools: O.turn }, "stored"), z = (0, import_chunk_qanr9g0g.s9e)({ disallowed_tools: O.client }, "stored");
    if (N === void 0 || z === void 0 || typeof R !== "number" || !Number.isSafeInteger(R) || R < 0 || R > Date.now() + ls) o.push({ turn: N ?? [], client: z ?? [], version: R });
    else if (R >= (r?.version ?? 0)) r = { turn: N, client: z, version: R };
  } catch (L) {
    if (!g) (0, import_chunk_k449cc64.i)(L), (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "stored_list_threw");
    g = true;
  }
  let y = o.filter(({ version: C }) => r === void 0 || typeof C !== "number" || !(C < r.version)), h = y.flatMap((C) => C.turn), P = y.flatMap((C) => C.client);
  if (h.length + P.length === 0) return r;
  return { turn: (0, import_chunk_4smdap7r.M)([...r?.turn ?? [], ...h]), client: (0, import_chunk_4smdap7r.M)([...r?.client ?? [], ...P]), version: r?.version ?? 0 };
}
function us(e, r, o) {
  if (r?.onInternalMetadataChanged === void 0) return o;
  try {
    let g = { turn: (0, import_chunk_4smdap7r.M)((0, import_chunk_qanr9g0g.s9e)({ disallowed_tools: e.turn }, "stored") ?? []), client: (0, import_chunk_4smdap7r.M)((0, import_chunk_qanr9g0g.s9e)({ disallowed_tools: e.client }, "stored") ?? []) };
    if (o !== void 0 && Uo(o.turn, g.turn) && Uo(o.client, g.client)) return o;
    let y = { ...g, version: e.version };
    return r.notifyInternalMetadataChanged({ turn_deny_lists: y }), g;
  } catch (g) {
    return (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "record_write_threw"), (0, import_chunk_k449cc64.i)(g), o;
  }
}
function Uo(e, r) {
  let o = new Set(e);
  return o.size === r.length && r.every((g) => o.has(g));
}
function Ho(e) {
  try {
    if (e?.onInternalMetadataChanged !== void 0) e.notifyInternalMetadataChanged({ turn_deny_lists: null });
  } catch (r) {
    (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "record_write_threw"), (0, import_chunk_k449cc64.i)(r);
  }
}
function pJn(e) {
  if (e === void 0 || e === null) return;
  try {
    return Td(Object(e));
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), "unreadable";
  }
}
function Td(e) {
  let r = (0, import_chunk_qanr9g0g.s9e)({ disallowed_tools: e.turn }, "stored"), o = (0, import_chunk_qanr9g0g.s9e)({ disallowed_tools: e.client }, "stored"), g = e.version;
  if (r === void 0 || o === void 0 || typeof g !== "number" || !Number.isSafeInteger(g) || g < 0) return "unreadable";
  return { turn: r, client: o, version: g };
}
function hGr(e, r) {
  return e === void 0 || r.version >= e.version || r.version > Date.now() + ls;
}
function Wo(e, r, o = false) {
  if (r === void 0 || !(o || hGr(e, r))) return e;
  return { turn: (0, import_chunk_4smdap7r.M)([...r.turn, ...e?.turn ?? []]), client: (0, import_chunk_4smdap7r.M)([...r.client, ...e?.client ?? []]), version: Math.max(e?.version ?? 0, r.version > Date.now() + ls ? 0 : r.version) };
}
var Md = 1e4;
function It(e) {
  return new Set(e.flatMap((r) => typeof r === "string" ? [r.toLowerCase()] : []));
}
function fEa(e, r, o = e) {
  let g, y, h = false, P = false, C;
  try {
    g = e.findLast(import_chunk_865at33z.On);
    let R = Object(Object(g?.compactMetadata).preservedMessages).uuids, N = It(Array.isArray(R) ? R : []);
    if (N.size > 0) {
      let V = It(o.map((J) => J.uuid));
      h = !(V.has(String(g?.uuid).toLowerCase()) && [...N].some((J) => V.has(J)));
    }
    let z = r !== void 0 && E8t(r, e) === void 0;
    y = E8t(void 0, e) !== void 0 && !z;
    let ie = e.findLastIndex(import_chunk_865at33z.On), I = e.filter((V, J) => J > ie && ds(e, J));
    if (z || I.some((V) => V.isMeta !== true)) P = "prompt_behind_compaction";
    else if (I.some((V) => V.turnOrigin !== void 0)) P = "hidden_opener_behind_compaction";
    C = (0, import_chunk_bz1f2qnq.Tp)(import_chunk_865at33z.gAs) === "on" && e.some((V, J) => J > ie && V.type === "user" && V.isMeta !== true && (0, import_chunk_bzyb60p0.VPn)(e, J));
  } catch (R) {
    (0, import_chunk_k449cc64.i)(R);
    return;
  }
  if (g === void 0) return;
  let L = Date.parse(String(g.timestamp)), O = Object(Object(g.compactMetadata).runningTurnSends);
  return { listed: Array.isArray(O.uuids) ? It(O.uuids) : void 0, takenInSince: It(Array.isArray(O.summarisedOnly) ? O.summarisedOnly : []), listedByLostWorkersReplies: It(Array.isArray(O.byLostWorkersReplies) ? O.byLostWorkersReplies : []), opener: [...It([O.openerUuid])][0], atMs: L <= Date.now() ? L : void 0, ranInsideTheCutOffTurn: y, keptRowsNotLoaded: h, openedBehindIt: P, commandRowsNotCounted: C };
}
function pEa(e, r, o) {
  return r?.opener === e.toLowerCase() && !o.some((g) => g.uuid.toLowerCase() === e.toLowerCase());
}
function mEa({ uuid: e, conversation: r, loadedCompaction: o }) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (o?.listed?.has(e.toLowerCase()) === true || o?.takenInSince.has(e.toLowerCase()) === true) && o.atMs !== void 0 && Date.now() - o.atMs < import_chunk_bzyb60p0.Dci && !(0, import_chunk_bzyb60p0.pyt)(r.filter((g) => !(0, import_chunk_xfj2cwfv.ky)(g))) && (0, import_chunk_865at33z.Hc)() && r.slice(r.findLastIndex(import_chunk_865at33z.On) + 1).every((g) => g.type === "assistant" ? (0, import_chunk_xfj2cwfv.ky)(g) : g.type !== "user" || g.isCompactSummary === true);
}
function jo({ uuid: e, loadedCompaction: r, carriesTheCutOffTurnOn: o }) {
  return o && r?.listed?.has(e.toLowerCase()) === true ? y$e(import_chunk_865at33z.hAs) : void 0;
}
function kd({ startedAtMs: e, loadedCompaction: r, carriesTheCutOffTurnOn: o }) {
  return o && r !== void 0 && r.listed === void 0 && r.atMs !== void 0 && e !== void 0 && e + Md < r.atMs;
}
var wd = /* @__PURE__ */ new Set(["reply", "reply_then_reminder", "stop_marker", "terminal_api_error", "terminal_tool_result", "silent_reply_after_terminal_tool", "deliberate_stop_result", "max_turns"]);
function hEa({ uuid: e, loadedCompaction: r, carriesTheCutOffTurnOn: o, finishedTail: g, growthBookCold: y }) {
  if (r === void 0) return {};
  if (r.listed === void 0) return { ended_turn_copy_no_record: true };
  if (!r.listed.has(e.toLowerCase())) return { ended_turn_copy_not_in_record: true };
  let h = g !== void 0 && (wd.has(g.because) || g.because === "not_continued_api_error_too_old" && g.rateLimitRowSteppedOver === true), P = { ...o && { ended_turn_copy_turn_carried_on: true }, ...r.keptRowsNotLoaded && { ended_turn_copy_kept_rows_not_loaded: true }, ...g !== void 0 && !r.ranInsideTheCutOffTurn && { ended_turn_copy_user_row_after_boundary: true }, ...!h && { ended_turn_copy_last_turn_not_ended: true }, ...g !== void 0 && g.callsWithoutResult > 0 && { ended_turn_copy_tool_calls_without_result: true } };
  return { ...Object.keys(P).length === 0 ? { ended_turn_copy_would_skip: true } : P, ...y && { ended_turn_copy_growthbook_cold: true }, ...g !== void 0 && { ...g.lastPromptUuid !== void 0 && { ended_turn_copy_sent_prompt_loaded: true }, ended_turn_copy_finished_because: g.because, ended_turn_copy_last_reply_stop_reason: g.lastReplyStopReason, ended_turn_copy_stored_tail_row: g.tailRows[0] } };
}
var bd = { on: void 0, off: "flag_off", cold: "flag_cold" };
function gEa(e, r) {
  let o = r.carriesTheCutOffTurnOn();
  if (r.loadedCompaction?.ranInsideTheCutOffTurn === false) {
    if (jo({ uuid: e, loadedCompaction: r.loadedCompaction, carriesTheCutOffTurnOn: o }) !== "on" || !r.anInheritedPromptWaits()) return;
    let h = r.loadedCompaction.keptRowsNotLoaded ? "kept_rows_not_loaded" : r.loadedCompaction.openedBehindIt || bd[y$e(import_chunk_865at33z.URl)];
    return r.noteCopyAwaitsTheCutOffTurn(), h !== void 0 ? { whileStillOwed: r.cutOffTurnIsStillOwed, because: h } : r.cutOffTurnIsStillOwed;
  }
  let { loadedCompaction: g } = r, y = jo({ uuid: e, loadedCompaction: g, carriesTheCutOffTurnOn: o });
  if (y === void 0) {
    if (o && g?.takenInSince.has(e.toLowerCase())) return "taken_in_since";
    return kd({ startedAtMs: r.startedAtMs(e), loadedCompaction: g, carriesTheCutOffTurnOn: o }) ? "unlisted" : void 0;
  }
  if (g?.keptRowsNotLoaded === true) return "kept_rows_not_loaded";
  if (y !== "on") return y;
  return r.noteCopyAwaitsTheCutOffTurn(), r.cutOffTurnIsStillOwed;
}
function qo(e) {
  return "isCompactSummary" in e && e.isCompactSummary === true || (0, import_chunk_0ha8wex8.rg)(e) || (0, import_chunk_bzyb60p0.Sm)(e) || (0, import_chunk_0ha8wex8.q1)(e);
}
function fJn(e) {
  return e.type === "user" && e.promptSource === void 0 && !qo(e) && (e.isMeta === true || (0, import_chunk_xfj2cwfv.oct)(e) !== void 0);
}
function EVs(e, r) {
  let o = Dve(e, r), g = e[o];
  if (g === void 0 || g.uuid === r) return (0, import_chunk_bzyb60p0.Hro)(e, r, (0, import_chunk_2xjdqky3.VBt)());
  return vVs(e, o);
}
function vVs(e, r) {
  let o = e[r], g = e.filter((h, P) => P > r && (h.type === "user" || h.type === "assistant") && !("isSidechain" in h && h.isSidechain === true) && !(0, import_chunk_xfj2cwfv.ky)(h) && !fJn(h)), y = (h) => h.type === "user" && h.interruptedByShutdown !== true && (0, import_chunk_0ha8wex8.rg)(h);
  if (!g.some((h) => h.type === "assistant") && !(o.type === "attachment" ? g.length > 0 && y(g.at(-1)) && g.some((h) => !qo(h)) : g.some(y))) return true;
  return (0, import_chunk_bzyb60p0.Hro)([o, ...g], o.uuid, false);
}
function _Ea(e, r, o) {
  let g = /* @__PURE__ */ new Set();
  try {
    g = pEn(e);
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
  }
  let y = o();
  return (h) => jIe() && (o() === y && g.has(h) || r().some((P) => fEn(P).includes(h)));
}
function Ko(e, r) {
  let o = e[r];
  return !("isSidechain" in o && o.isSidechain === true) && (0, import_chunk_bzyb60p0.myt)(e, r);
}
function Vo(e, r) {
  let o = e[r];
  return o.type === "user" && o.isMeta === true && o.promptSource === void 0 && Ko(e, r);
}
function ms(e) {
  return e.type === "assistant" && ((0, import_chunk_bzyb60p0.IZr)(e) || (0, import_chunk_bzyb60p0.lQo)(e));
}
function cs(e, r) {
  return Ko(e, r) && !Vo(e, r);
}
function Go(e, r) {
  return e.findIndex((o, g) => g > r && o.uuid !== e[r].uuid && cs(e, g));
}
function v8t(e, r, o) {
  let g = Dve(e, r, o);
  if (g === -1) return e;
  let y = Go(e, g);
  return e.filter((h, P) => (y === -1 || P < y) && (P <= g || !(Vo(e, P) || ms(e[P]))));
}
function fr(e) {
  return e.type === "assistant" && !e.isApiErrorMessage && !(0, import_chunk_xfj2cwfv.ky)(e);
}
function $o(e, r) {
  let o = e[r], g = e[r - 1];
  return o.type === "user" && o.interruptedByShutdown !== true && (0, import_chunk_0ha8wex8.rg)(o) && !(0, import_chunk_bzyb60p0.Sm)(o) && (o.retiredByStop ?? !(g?.type === "user" && (g.toolUseResult === import_chunk_0ha8wex8.EPe || g.toolUseResult === import_chunk_0ha8wex8.vPe || g.toolDenialEndsTurn === true && !(0, import_chunk_bzyb60p0.NMe)(g))));
}
function TVs(e, r, o) {
  let g = Dve(e, r, o), y = e[g];
  if (y === void 0 || y.uuid === r) return;
  let h = e.findLast((O, R) => R <= g && cs(e, R)), P = v8t(e, r, o), C = P.slice(P.indexOf(y) + 1).filter((O) => (O.type === "user" || O.type === "assistant") && !("isSidechain" in O && O.isSidechain === true) && !(0, import_chunk_xfj2cwfv.ky)(O) && !fJn(O)), L = C.at(-1);
  return L !== void 0 && ($o(C, C.length - 1) || L.type === "assistant" && L.isApiErrorMessage === true) && gr(e, r, o) && h !== void 0 && (0, import_chunk_bzyb60p0.vye)([h]) !== void 0;
}
function gr(e, r, o) {
  let g = e[Dve(e, r, o)];
  if (g?.type !== "attachment") return g !== void 0;
  let y = v8t(e, r, o), h = y.slice(y.indexOf(g) + 1), P = h.findIndex((C) => (0, import_chunk_xfj2cwfv.ky)(C) || (0, import_chunk_bzyb60p0.VY)(C));
  return (P === -1 ? h : h.slice(0, P)).some((C) => fr(C) && !("isSidechain" in C && C.isSidechain === true));
}
function ps(e, r) {
  if (gr(e, r)) return true;
  let o = e[Dve(e, r)];
  return o?.type === "attachment" && o.attachment.type === "queued_command" && o.attachment.commandMode === "prompt" && (typeof o.attachment.prompt === "string" || Array.isArray(o.attachment.prompt) && o.attachment.prompt.every((g) => g.type === "text")) && o.attachment.isMeta !== true && o.attachment.verifiedSlackHumanTurn !== true && (0, import_chunk_865at33z.$u)(o.attachment.origin) && !o.attachment.fileAttachments?.length && y$e(import_chunk_865at33z.eAo) === "on";
}
function o2o(e, r) {
  let o = TVs(e, r);
  return o === void 0 ? void 0 : !o;
}
function fs(e, r) {
  let o = e.findLastIndex((C) => C.uuid === r), g = o === -1 ? e : e.slice(0, o + 1), y = g.findLastIndex((C, L) => cs(e, L));
  if (y !== -1) return g.slice(y);
  let h = vd(e), P = h === void 0 ? -1 : g.lastIndexOf(h);
  if (P !== -1) return g.slice(P);
  return y$e(import_chunk_865at33z.ZCo) === "on" ? g.slice(g.findLastIndex(import_chunk_865at33z.On) + 1) : [];
}
function vd(e) {
  if (y$e(import_chunk_865at33z.eAo) !== "on" || y$e(import_chunk_865at33z.hAs) !== "on" || !jIe()) return;
  let r = E8t(void 0, e), o = Object(r?.compactMetadata?.runningTurnSends), g = Object(r?.compactMetadata?.preservedMessages).uuids, y = It(e.map((P) => P.uuid)), h = [...It(Array.isArray(g) ? g : [])].map((P) => y.has(P));
  return Array.isArray(o.uuids) && It(o.uuids).has(String(o.openerUuid).toLowerCase()) && (!h.includes(false) || h.includes(true) && (0, import_chunk_bz1f2qnq.Tp)(import_chunk_865at33z.QCo) === "on") ? r : void 0;
}
function yEa(e, r, o = /* @__PURE__ */ new Set()) {
  try {
    let g = fs(e, r), y = g[0];
    if (y === void 0 || !(0, import_chunk_865at33z.On)(y)) return;
    return (0, import_chunk_pbteexar.Ls)([...y.compactMetadata.runningTurnSends?.uuids ?? [], ...uJn(g, y.uuid).filter((h) => h !== y.uuid && (o.has(h) || ps(e, h)))], (h) => h.toLowerCase());
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
    return;
  }
}
function SEa(e, r) {
  try {
    return new Set([...vn(fs(e, r))].filter((o) => ps(e, o)));
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), /* @__PURE__ */ new Set();
  }
}
function bEa(e, r, o) {
  let g = [];
  try {
    g = fs(e, r);
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
  }
  return () => {
    try {
      let y = g[0];
      if (y === void 0 || o !== void 0 && y.uuid !== o) return /* @__PURE__ */ new Set();
      let h = g.slice(0, -1).findLastIndex((C) => (0, import_chunk_xfj2cwfv.ky)(C) || (0, import_chunk_bzyb60p0.VY)(C)), P = vn(g.slice(h + 1));
      return new Set([...vn(g)].filter((C) => P.has(C) || ps(g, C)));
    } catch (y) {
      return (0, import_chunk_k449cc64.i)(y), /* @__PURE__ */ new Set();
    }
  };
}
function s2o(e, r) {
  let o = Dve(e, r);
  if (e[o]?.type !== "attachment") return;
  let g = Go(e, o), y = e.slice(o + 1, g === -1 ? void 0 : g).filter((R) => !("isSidechain" in R && R.isSidechain === true)), h = y.filter((R) => (R.type === "user" || R.type === "assistant") && !(0, import_chunk_xfj2cwfv.ky)(R) && !fJn(R)), P = y.findLastIndex((R) => (0, import_chunk_xfj2cwfv.ky)(R) || (0, import_chunk_bzyb60p0.VY)(R)), C = h.at(-1), L = e.slice(0, o).findLast((R) => fr(R) && !("isSidechain" in R && R.isSidechain === true)), O = L?.type === "assistant" ? L.message.id : void 0;
  return { badEnd: C === void 0 ? void 0 : $o(h, h.length - 1) ? "stopped" : ms(C) ? "reply_failed" : C.type === "assistant" && C.isApiErrorMessage === true ? "reply_refused" : void 0, failedTransiently: C?.type === "assistant" && ms(C) && ((0, import_chunk_bzyb60p0.eFt)(C) || C.streamWatchdogGaveUp === true), claudesRowBehind: h.some((R) => fr(R) && R.type === "assistant" && (!R.message.id || R.message.id !== O)), reRunsRowBehind: P !== -1 && y.slice(P + 1).some((R) => fr(R) || (0, import_chunk_bzyb60p0.Sm)(R)) };
}
var Dt = (0, import_chunk_t57w17k7.de)({ isStarted: false, folder: void 0, isShared: false, counted: /* @__PURE__ */ new Set() }, (e) => {
  e.isStarted = false, e.folder = void 0, e.isShared = false, e.counted.clear();
});
async function CEa() {
  if (Dt.isStarted || !(0, import_chunk_6e68m1dj.qg)() || (0, import_chunk_6e68m1dj.uL)()) return;
  Dt.isStarted = true;
  try {
    let e = (0, import_chunk_2gtmjt3y.Nl)();
    if (e === null) return;
    let [r, o] = await Promise.all([(0, import_promises.realpath)(e), (0, import_chunk_wj4me9k5.LU)()]);
    if (o === null) {
      (0, import_chunk_cqa9hrgx.l)("remote_read_synced_skills", "account_unknown");
      return;
    }
    Dt.folder = { spelled: (0, import_path.join)((0, import_path.resolve)(e), import_chunk_mgntjepj.Ij, o), resolved: (0, import_path.join)(r, import_chunk_mgntjepj.Ij, o) };
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`anchorSyncedSkillsFolder failed: ${e instanceof Error ? `${e.name}/${"code" in e ? String(e.code) : "no code"}` : typeof e}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("remote_read_synced_skills", "anchor_failed");
  }
}
function a2o(e, r, o, g = false) {
  if (Dt.isShared ||= o === "not_owner_only", Dt.folder === void 0 || r.restricted === true || (0, import_chunk_pbteexar.jS)(r) || (0, import_chunk_wddxyb00.rm)(e) || (0, import_chunk_zd24r3fj.due)() || (0, import_chunk_865at33z.b)(import_chunk_865at33z.Lxl, false) !== true || (0, import_chunk_p1ewvgeh.rwe)(r)) return;
  if (Dt.isShared || !(0, import_chunk_2kw0fwms.vTe)(o)) {
    let y = Dt.isShared ? "shared_session" : "writers_unknown";
    if (g && !Dt.counted.has(y)) Dt.counted.add(y), (0, import_chunk_cqa9hrgx.l)("remote_read_synced_skills", y);
    return;
  }
  return Dt.folder;
}
function Qo(e) {
  return AVs(e) === void 0;
}
function AVs(e) {
  if ((0, import_chunk_wddxyb00.rm)(e)) return "lane";
  let r = Ed() ?? ((0, import_chunk_865at33z.b)(import_chunk_865at33z.Ixl, false) === true ? void 0 : "switched_off");
  return Od(e, r), r;
}
function AEa() {
  return (0, import_chunk_865at33z.b)(import_chunk_865at33z.Mxl, false) === true;
}
function Ed() {
  try {
    return !(0, import_chunk_zd24r3fj.due)() ? void 0 : (0, import_chunk_2zeyvjwb.uo)("hipaa") ? "hipaa" : "no_policy_answer";
  } catch {
    return "no_policy_answer";
  }
}
var Pd = { hipaa: "the organization is marked hipaa", no_policy_answer: "no answer yet from /api/claude_code/policy_limits" }, Rd = new import_chunk_pzzqg6s3.ze(() => ({ last: void 0 }));
function Od(e, r) {
  let o = Rd.of(e), g;
  if (r === "hipaa" || r === "no_policy_answer") {
    if (r === o.last) return;
    o.last = r, g = `read_file as_written is not served: ${Pd[r]} (${r})`;
  } else if (r === void 0 && o.last !== void 0) o.last = void 0, g = "read_file as_written is served now";
  else return;
  try {
    (0, import_chunk_w578pjby.t)(g, { level: "warn" });
  } catch {
  }
}
function REa(e) {
  return Id[e];
}
var Id = { directories: false, file_state: false, file_search: false, unfit_text: false, no_file: false, tie: false, held_file_unreadable: false, needs_file_search: false, search_incomplete: false, too_many: false, outside: false, hipaa: false, no_policy_answer: false, switched_off: false, lane: true, unfit_within: true, not_served: true, fault: true, time_limit: true, stranded: true, waited_too_long: true, session_ending: true };
(0, import_chunk_adx6804h.B)();
var Xo = "tengu_polished_lagoon", Jo = false, Zo = "session_notices", xd = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("session_notice"), uuid: (0, import_chunk_adx6804h.n)().regex(/^[A-Za-z0-9_-]{1,128}$/), notice_class: (0, import_chunk_adx6804h.n)().regex(/^[a-z][a-z0-9_]{0,63}$/), from_session_id: (0, import_chunk_adx6804h.n)().regex(/^[A-Za-z0-9_.:-]{1,256}$/), content: (0, import_chunk_adx6804h.n)(), isSynthetic: (0, import_chunk_adx6804h.v)(true), inbound_origin: (0, import_chunk_adx6804h.v)("mcp_session_notice") }));
function ei() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && (0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_865at33z.b)(Xo, Jo) && (0, import_chunk_qf73a9we.Mx)() && !(0, import_chunk_qf73a9we.kWt)();
}
function ni(e, r) {
  let o = import_chunk_wddxyb00.Yh.of(e).active?.isRemoteTransport() === true, g = r === "auto" && ei() && o, { value: y, source: h } = (0, import_chunk_865at33z.gn)(Xo, Jo);
  return (0, import_chunk_w578pjby.t)(`[session-notices] advertise=${g} mode=${r} flag=${y}(${h}) pollChannel=${(0, import_chunk_qf73a9we.Mx)()} ownEventsOnly=${(0, import_chunk_qf73a9we.kWt)()} remote=${o} remoteEnv=${import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true} nonInteractive=${(0, import_chunk_f9x2f6cx.Se)()}`), g;
}
function gs(e, r) {
  if (e === void 0) return;
  import_chunk_wddxyb00.Yh.of(r).active?.onCommandLifecycle?.(e, "completed");
}
function HEa(e, { getAppState: r, setAppState: o, session: g, sessionHooks: y, isRemoteTransport: h, ingressTail: P, storageV5: C, credentials: L }) {
  if (!h()) {
    (0, import_chunk_w578pjby.t)("[session-notices] session_notice on a non-RemoteIO transport \u2014 dropping without ack", { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("ccr_session_notices", "not_remote_transport");
    return;
  }
  let O = (0, import_chunk_mzmcvr6c.ht)(e.uuid) ?? void 0, R = xd().safeParse(e);
  if (!R.success) {
    (0, import_chunk_w578pjby.t)("[session-notices] dropping malformed session_notice payload", { level: "error" }), (0, import_chunk_cqa9hrgx.m)("ccr_session_notices", "malformed_payload"), gs(O, g);
    return;
  }
  let N = R.data;
  if (!ei()) {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE !== true || !(0, import_chunk_f9x2f6cx.Se)()) {
      (0, import_chunk_cqa9hrgx.m)("ccr_session_notices", "structurally_not_a_consumer"), gs(N.uuid, g);
      return;
    }
    (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", (0, import_chunk_qf73a9we.Mx)() && (0, import_chunk_qf73a9we.kWt)() ? "own_events_only" : "flag_disabled");
    return;
  }
  if (r().toolPermissionContext.mode !== "auto") {
    (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", "mode_not_auto_will_retry");
    return;
  }
  if (r().sessionNoticesPoll.pendingDeliveryUuids.includes(N.uuid)) {
    (0, import_chunk_w578pjby.t)("[session-notices] duplicate redelivery while delivery in flight \u2014 suppressed");
    return;
  }
  let I = (0, import_chunk_qf73a9we.k_o)(N.content), V = false, J = import_chunk_qf73a9we.Fpe - 1024, be = false, se = be ? import_chunk_bzyb60p0.__t : import_chunk_qf73a9we.iRe, he = se(I);
  if (Buffer.byteLength(he, "utf8") > J) {
    let pe = 0, De = I.length;
    while (pe < De) {
      let Oe = pe + Math.ceil((De - pe) / 2), Le = (0, import_chunk_7cfjrnwy.ee)(I, Oe);
      if (Buffer.byteLength(se(Le), "utf8") <= J - 128) pe = Oe;
      else De = Oe - 1;
    }
    let Ae = I.length, oe = (0, import_chunk_7cfjrnwy.ee)(I, pe);
    I = oe + `
\u2026[session_notice content truncated by the CLI: ${Ae - oe.length} characters dropped]`, V = true;
  }
  let H = (/* @__PURE__ */ new Date()).toISOString(), ae = be ? { typed: { at: H, fields: { "notice-class": N.notice_class, "from-session": N.from_session_id, text: I } } } : { element: (0, import_chunk_qf73a9we.pZ)({ kind: import_chunk_qf73a9we.sln, at: H, content: I, attributes: { "notice-class": N.notice_class, "from-session": N.from_session_id } }) };
  try {
    o((ge) => ({ ...ge, sessionNoticesPoll: { pendingDeliveryUuids: [...ge.sessionNoticesPoll.pendingDeliveryUuids, N.uuid] } }));
  } catch (ge) {
    (0, import_chunk_w578pjby.t)(`[session-notices] pending-add subscriber threw (contained): ${(0, import_chunk_jv7av99m.d)(ge)}`, { level: "error" });
  }
  let Q = () => {
    o((ge) => ({ ...ge, sessionNoticesPoll: { pendingDeliveryUuids: ge.sessionNoticesPoll.pendingDeliveryUuids.filter((pe) => pe !== N.uuid) } }));
  };
  P.current = P.current.then(async () => {
    if ((0, import_chunk_4smdap7r.U)((0, import_chunk_bzyb60p0.YHe)(), import_chunk_qf73a9we.W_) >= import_chunk_qf73a9we.lEt) {
      Q(), (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", "queue_cap_will_retry");
      return;
    }
    let ge = false;
    try {
      for await (let pe of (0, import_chunk_bzyb60p0.LSt)(g, y, I, r().toolPermissionContext.mode, void 0, C, L)) if (pe.blockingError) {
        ge = true;
        break;
      }
    } catch (pe) {
      if ((0, import_chunk_jv7av99m.Fe)(pe)) (0, import_chunk_w578pjby.t)("[session-notices] enqueue hook pass aborted");
      else (0, import_chunk_w578pjby.t)(`[session-notices] enqueue hook pass failed (failing open): ${(0, import_chunk_jv7av99m.d)(pe)}`, { level: "error" });
    }
    if (ge) {
      Q(), (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", "hook_blocked_will_retry");
      return;
    }
    (0, import_chunk_bzyb60p0.j3e)({ kind: import_chunk_qf73a9we.sln, ...ae, wake: true, allowReservedKind: true, provenance: { authority: "peer-agent", senderId: N.from_session_id, senderText: I } }).then(async () => {
      try {
        if (await (0, import_chunk_bzyb60p0.Pf)(), !(await import_chunk_wddxyb00.Yh.of(g).active?.flushInternalEventsConfirmed() ?? true)) {
          Q(), (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", "delivery_record_dropped_will_retry");
          return;
        }
      } catch (pe) {
        (0, import_chunk_w578pjby.t)(`[session-notices] persistence flush failed (ack skipped, will redeliver): ${(0, import_chunk_jv7av99m.d)(pe)}`, { level: "error" }), Q(), (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", "flush_failed_will_retry");
        return;
      }
      if (Q(), gs(N.uuid, g), V) (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", "content_truncated");
      else (0, import_chunk_cqa9hrgx.u)("ccr_session_notices");
    }, (pe) => {
      (0, import_chunk_w578pjby.t)(`[session-notices] delivery rejected (will redeliver): ${(0, import_chunk_jv7av99m.d)(pe)}`, { level: "error" }), Q(), (0, import_chunk_cqa9hrgx.l)("ccr_session_notices", "delivery_rejected_will_retry");
    }).catch((pe) => {
      (0, import_chunk_w578pjby.t)(`[session-notices] settle handler failed: ${(0, import_chunk_jv7av99m.d)(pe)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("ccr_session_notices", "settle_handler_failed");
    });
  }).catch((ge) => {
    (0, import_chunk_w578pjby.t)(`[session-notices] ingress-tail link failed: ${(0, import_chunk_jv7av99m.d)(ge)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("ccr_session_notices", "ingress_tail_link_failed");
  });
}
var Ss = require("/$bunfs/root/chunk-gjd6m6ps.js");
function cEn(e, r, { hideBefore: o = 0, earlier: g = [], onDisk: y = [] } = {}) {
  let h = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
  try {
    let C = di(r), L = new Set(r), O = [...g, ...e], R = [...(0, import_chunk_bzyb60p0.o7o)(O), ...y, ...li(O, r, [])];
    for (let he of R) if (C.has(he.file_uuid.toLowerCase())) h.add(he.path);
    let N = new Set(R.map((he) => he.path)), z = o > 0 ? [(0, import_chunk_fwgyarbe.ov)(), ...(0, import_chunk_fwgyarbe.Fae)()] : [], ie = Yd(O, h), I = 0, V = 0, J = 0, be = /* @__PURE__ */ new Set(), se = [];
    for (let [he, H] of e.entries()) {
      let ae = o > 0 && !(Date.parse(H.timestamp) >= o);
      if (H.type === "user") {
        let Q = (0, import_chunk_4smdap7r.U)((0, import_chunk_4smdap7r.Nr)(H.withdrawnFilesBefore), (We) => C.has(We)), ge = Math.max(H.withdrawnResults ?? 0, (0, import_chunk_4smdap7r.U)((0, import_chunk_4smdap7r.Nr)(H.withdrawnResultsBefore), (We) => L.has(We))), pe = Q === (H.withdrawnFiles ?? 0) && ge === (H.withdrawnResults ?? 0), De = H.message?.content;
        if (!Array.isArray(De)) {
          if (!pe) se.push([he, { ...H, withdrawnFiles: Q, withdrawnResults: ge, [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
          continue;
        }
        let Ae = (0, import_chunk_4smdap7r.U)(De, (We) => hs(We, ie, L)), oe = yr(H.imageFileUuids, C), Oe = ae && H.isMeta !== true && (0, import_chunk_865at33z.$u)(H.origin ?? void 0) && !De.some((We) => We?.type === "tool_result"), Le = _s(De, "image", oe, !Oe), He = yr(H.documentFileUuids, C), lt = _s(Le, "document", He).map((We) => hs(We, ie, L) ? { ...We, content: L.has(We.tool_use_id) ? import_chunk_bp9b0hd8.mFr : import_chunk_bp9b0hd8.Ept } : We), Ve = De.length - Le.length, Ft = Le.length - lt.length;
        if (Ve === 0 && Ft === 0 && Ae === 0 && pe) continue;
        J += Ae + Ft;
        for (let We of De) if (hs(We, ie, L) && L.has(We.tool_use_id)) be.add(We.tool_use_id);
        let Mt = Math.min(Ve, (0, import_chunk_4smdap7r.U)(oe, (We) => !We));
        I += Mt, V += Ve - Mt, se.push([he, { ...H, message: { ...H.message, content: lt.length > 0 ? lt : [{ type: "text", text: import_chunk_bp9b0hd8.Wp }] }, withdrawnFiles: Q, withdrawnResults: ge, withdrawnImages: (H.withdrawnImages ?? 0) + Mt, hiddenPictures: (H.hiddenPictures ?? 0) + Ve - Mt, withdrawnDocuments: (H.withdrawnDocuments ?? 0) + Ft, imageFileUuids: Wt(H.imageFileUuids, oe), documentFileUuids: Wt(H.documentFileUuids, He), imagePasteIds: Wt(H.imagePasteIds, oe, !Oe), [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
      } else if (H.type !== "attachment") continue;
      else if (H.attachment?.type === "inlined_image_paths") {
        let { attachment: Q } = H;
        if (!Array.isArray(Q.paths)) continue;
        let ge = yr(Q.fileUuids, C), pe = Wt(Q.paths, ge, !ae) ?? [];
        if (pe.length === Q.paths.length) continue;
        se.push([he, { ...(0, import_chunk_bzyb60p0.dSe)(H, { ...Q, paths: pe, fileUuids: Wt(Q.fileUuids, ge), names: Wt(Q.names, ge, !ae) }), [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
      } else if (H.attachment?.type === "file") {
        let { filename: Q } = H.attachment, ge = h.has(Q), pe = H.attachment.content?.type === "image";
        if (!(ge || pe && ae && typeof Q === "string" && !N.has(Q) && z.some((De) => (0, import_chunk_g9ztbtfd.ti)(De, Q, false)))) continue;
        I += ge && pe ? 1 : 0, J += pe ? 0 : 1, V += ge ? 0 : 1, se.push([he, { ...(0, import_chunk_bzyb60p0.dSe)(H, { type: "critical_system_reminder", content: !pe ? ri(O, g.length + he, Q) ? import_chunk_bp9b0hd8.Cca : import_chunk_bp9b0hd8.hFr : ge ? import_chunk_bp9b0hd8.XLo : import_chunk_bp9b0hd8.K3n }), [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
      } else if ((H.attachment?.type === "pdf_reference" || H.attachment?.type === "compact_file_reference" || H.attachment?.type === "edited_text_file") && h.has(H.attachment.filename) || H.attachment?.type === "at_mention_reference" && Array.isArray(H.attachment.mentions) && H.attachment.mentions.some((Q) => h.has(Q))) J++, se.push([he, { ...(0, import_chunk_bzyb60p0.dSe)(H, { type: "critical_system_reminder", content: ri(O, g.length + he, H.attachment.type !== "at_mention_reference" ? H.attachment.filename : H.attachment.mentions.length === 1 ? H.attachment.mentions[0] : void 0) ? import_chunk_bp9b0hd8.Cca : import_chunk_bp9b0hd8.hFr }), [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
      else if (H.attachment?.type === "message_pdf_reads") {
        let { attachment: Q } = H, ge = (0, import_chunk_c1hnv4fm.bDe)(Q) ?? [], pe = ge.filter((De) => !h.has(De.path));
        if (pe.length === ge.length) continue;
        J += ge.length - pe.length, se.push([he, { ...(0, import_chunk_bzyb60p0.dSe)(H, { ...Q, reads: pe }), [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
      } else if (H.attachment?.type === "read_truncation_notice") {
        let { attachment: Q } = H;
        if (!ie.has(Q.toolUseID) || Q.banner === import_chunk_bp9b0hd8.Ept) continue;
        J++, se.push([he, { ...(0, import_chunk_bzyb60p0.dSe)(H, { ...Q, banner: import_chunk_bp9b0hd8.Ept }), [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
      } else if (H.attachment?.type === "queued_command") {
        let { attachment: Q } = H;
        if (!Array.isArray(Q.prompt)) continue;
        let ge = yr(Q.imageFileUuids, C), pe = ae && Q.isMeta !== true && (0, import_chunk_865at33z.$u)(Q.origin ?? void 0), De = _s(Q.prompt, "image", ge, !pe), Ae = Q.prompt.length - De.length;
        if (Ae === 0) continue;
        let oe = Math.min(Ae, (0, import_chunk_4smdap7r.U)(ge, (Oe) => !Oe));
        I += oe, V += Ae - oe, se.push([he, { ...(0, import_chunk_bzyb60p0.dSe)(H, { ...Q, prompt: De.length > 0 ? De : import_chunk_bp9b0hd8.Wp, withdrawnImages: (Q.withdrawnImages ?? 0) + oe, hiddenPictures: (Q.hiddenPictures ?? 0) + Ae - oe, imageFileUuids: Wt(Q.imageFileUuids, ge), inlinedImagePaths: Wt(Q.inlinedImagePaths, ge, !pe), inlinedImageNames: Wt(Q.inlinedImageNames, ge, !pe) }), [import_chunk_865at33z.loe]: (0, import_chunk_qanr9g0g.l0)(H) }]);
      }
    }
    for (let [he, H] of se) e[he] = H;
    if (se.length > 0) {
      if (Ss?.getTeleportCacheState().status === "active") Ss.revertTeleportCache("context_reduced", "main");
      (0, import_chunk_bzyb60p0.jY)((0, import_chunk_f9x2f6cx.ao)(), "pictures_withdrawn"), (0, import_chunk_bzyb60p0.qnt)("sdk");
    }
    if ((0, import_chunk_cqa9hrgx.u)("bridge_attachment_withdraw", { listed_count: C.size, cut_picture_count: I, hidden_picture_count: V, cut_read_count: J }), V > 0) (0, import_chunk_cqa9hrgx.l)("bridge_attachment_withdraw", "pictures_with_no_id_hidden");
    for (let he of (0, import_chunk_bzyb60p0.XQr)(be.size > 0 ? [...g, ...e] : [], be)) {
      let H = (0, import_chunk_n2dbhmj2.Fa)(he);
      if (H !== null) P.add(H);
    }
  } catch (C) {
    (0, import_chunk_k449cc64.i)(C), (0, import_chunk_cqa9hrgx.m)("bridge_attachment_withdraw", "cut_failed");
  }
  return [...h, ...P];
}
var Hd = /^[0-9a-f]{8}-(?![0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i;
function dEa(e) {
  return e.some((r) => {
    let o = (0, import_chunk_bzyb60p0.r7o)(r);
    if (Array.isArray(o) ? o.length > 0 : o != null) return true;
    if (Nd(r).length > 0) return true;
    if (r.type === "user") return (r.imageFileUuids?.length ?? 0) > 0 || si(r.message?.content) || _i(r.message?.content, "document");
    if (r.type !== "attachment") return false;
    switch (r.attachment?.type) {
      case "file":
        return r.attachment.content?.type !== "text";
      case "inlined_image_paths":
      case "message_pdf_reads":
      case "pdf_reference":
        return true;
      case "queued_command":
        return (r.attachment.imageFileUuids?.length ?? 0) > 0 || si(r.attachment.prompt);
      default:
        return false;
    }
  });
}
function Nd(e) {
  return [...ui(e).flatMap((r) => {
    let o = (0, import_chunk_w578pjby._)(r ?? {});
    return /[0-9a-f]{8}-/i.test(o) ? o.split(ci) : [];
  }), ...mi(e).map(hr)].filter((r) => Hd.test(r));
}
function cEa(e) {
  return e.some((r) => r.type === "user" && _i(r.message?.content, "image"));
}
var Wd = 4, jd = 32, qd = 3145728, Kd = "mcp__browser__";
function uEa(e) {
  try {
    let r = new Map(e.flatMap((o) => o.type === "assistant" && Array.isArray(o.message?.content) ? o.message.content.flatMap((g) => g?.type === "tool_use" ? [[g.id, g.name]] : []) : []));
    return e.some((o) => {
      let g = o.type === "user" ? o.message?.content : void 0;
      if (!Array.isArray(g)) return false;
      let y = g.flatMap((P) => P?.type === "tool_result" && Array.isArray(P.content) ? [{ block: P, pictures: P.content.filter(Vd) }] : []);
      return y.reduce((P, { pictures: C }) => P + C.length, 0) > jd || y.some(({ block: P, pictures: C }) => {
        let L = r.get(P.tool_use_id);
        return C.length > 0 && (C.length > Wd || (P.is_error ?? false) !== false || typeof L !== "string" || L.startsWith(Kd) || !C.every(Gd));
      });
    });
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), true;
  }
}
function Vd(e) {
  return e?.type === "image";
}
function Gd({ source: e }) {
  return e?.type === "base64" && typeof e.data === "string" && e.data !== "" && e.data.length / 4 * 3 <= qd;
}
function oi(e, r, o = []) {
  try {
    let g = Array.from(new Map(e.map((I) => [I.uuid, I])).values()), y = di(r), h = new Set(r), P = new Set(g.flatMap((I) => I.type === "user" ? [...(0, import_chunk_4smdap7r.Nr)(I.withdrawnBefore), ...(0, import_chunk_4smdap7r.Nr)(I.withdrawnFilesBefore), ...(0, import_chunk_4smdap7r.Nr)(I.withdrawnResultsBefore)] : [])), C = g.map((I) => (0, import_chunk_qanr9g0g.l0)(I)), L = [...(0, import_chunk_bzyb60p0.o7o)(C), ...o], O = li(C, r, L), R = (0, import_chunk_bzyb60p0.s7o)(C), N = 0, z = 0, ie = 0;
    for (let I of g) if (I.type === "user") N += ys(I.hiddenPictures), ie += ys(I.hiddenBefore);
    else if (I.type !== "attachment") continue;
    else if (I.attachment?.type === "queued_command") N += ys(I.attachment.hiddenPictures);
    else if (I.attachment?.type === "critical_system_reminder" && I.attachment.content === import_chunk_bp9b0hd8.K3n) z++;
    return { withdrawnBefore: Array.from(R).filter((I) => y.has(I) && !P.has(I)), withdrawnFilesBefore: (0, import_chunk_4smdap7r.M)([...L.filter((I) => !import_chunk_k883m4fq.RXe.has((0, import_path2.extname)(I.path).slice(1).toLowerCase())), ...O].map((I) => I.file_uuid).concat(C.flatMap((I) => I.type === "user" ? (0, import_chunk_4smdap7r.Nr)(I.documentFileUuids) : [])).map((I) => I.toLowerCase())).filter((I) => y.has(I) && !P.has(I) && !R.has(I)), withdrawnResultsBefore: (0, import_chunk_4smdap7r.M)(g.flatMap((I) => I.type === "user" && Array.isArray(I.message?.content) ? I.message.content.flatMap((V) => V?.type === "tool_result" ? [V.tool_use_id] : []) : [])).filter((I) => h.has(I) && !P.has(I)), hiddenBefore: Math.max(0, (N || z) - ie) };
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.m)("bridge_attachment_withdraw", "stamp_failed"), { withdrawnBefore: [], withdrawnFilesBefore: [], withdrawnResultsBefore: [], hiddenBefore: 0 };
  }
}
function ai(e, r, { withdrawnBefore: o, withdrawnFilesBefore: g, withdrawnResultsBefore: y, hiddenBefore: h }) {
  try {
    if (o.length === 0 && g.length === 0 && y.length === 0 && h === 0) return;
    let P = e.find((C) => C.uuid === r);
    if (P?.type === "user" && P.taskDelivery === void 0 && P.origin?.kind !== "voice-call") for (let C of [P, (0, import_chunk_qanr9g0g.l0)(P)]) {
      if (o.length > 0) C.withdrawnBefore = o;
      if (g.length > 0) C.withdrawnFilesBefore = g;
      if (y.length > 0) C.withdrawnResultsBefore = y;
      if (h > 0) C.hiddenBefore = h;
    }
    else (0, import_chunk_cqa9hrgx.l)("bridge_attachment_withdraw", "deletion_note_not_kept");
  } catch (P) {
    (0, import_chunk_k449cc64.i)(P), (0, import_chunk_cqa9hrgx.m)("bridge_attachment_withdraw", "stamp_failed");
  }
}
function ri(e, r, o) {
  let g = e.slice(0, r).findLast((h) => h.type !== "attachment" || h.attachment?.type === "queued_command"), y = g && (0, import_chunk_bzyb60p0.r7o)(g);
  return o !== void 0 && Array.isArray(y) && y.length === 1 && y[0]?.path === o;
}
function di(e) {
  return new Set(e.filter((r) => r !== "").map((r) => r.toLowerCase()));
}
function yr(e, r) {
  return Array.isArray(e) ? e.map((o) => typeof o !== "string" || !r.has(o.toLowerCase())) : [];
}
function Wt(e, r, o = true) {
  return Array.isArray(e) ? e.filter((g, y) => r[y] ?? o) : void 0;
}
function _s(e, r, o, g = true) {
  let y = 0;
  return e.filter((h) => h?.type !== r || (o[y++] ?? g));
}
function ys(e) {
  return typeof e === "number" && e > 0 ? Math.floor(e) : 0;
}
function li(e, r, o) {
  try {
    let g = new Map(o.map((C) => [hr(C.path), C.file_uuid])), y = new Map(r.map((C) => [`${(0, import_chunk_fwgyarbe.Hwt)(C)}-`, C])), h = [...g.keys(), ...y.keys()], P = e.flatMap((C) => [...ui(C).flatMap((L) => fi(L, h)), ...mi(C)]);
    return (0, import_chunk_4smdap7r.M)(P).flatMap((C) => {
      let L = hr(C), O = g.get(L) ?? y.get(L.slice(0, 9));
      return O === void 0 ? [] : [{ file_uuid: O, path: C }];
    });
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.l)("bridge_attachment_withdraw", "call_scan_failed"), [];
  }
}
function ui(e) {
  return e.type === "assistant" && Array.isArray(e.message?.content) ? e.message.content.flatMap((r) => r?.type === "tool_use" ? [r.input] : []) : [];
}
function mi(e) {
  if (e.type !== "attachment") return [];
  switch (e.attachment?.type) {
    case "file":
    case "pdf_reference":
    case "compact_file_reference":
    case "edited_text_file":
      return (0, import_chunk_4smdap7r.Nr)([e.attachment.filename]);
    case "at_mention_reference":
      return (0, import_chunk_4smdap7r.Nr)(e.attachment.mentions);
    default:
      return [];
  }
}
var ci = /(?:\\(?:u[0-9a-fA-F]{4}|.)|[^\w.-])+/, $d = new RegExp(String.raw`(?:\\(?:u[0-9a-fA-F]{4}|.)|(?!${import_chunk_6mfepmbb.Gze})[^])+`, "u");
function fi(e, r) {
  let o = (0, import_chunk_w578pjby._)(e ?? {});
  return r.some((g) => o.includes(g)) ? [...o.split(ci), ...o.split($d)].map(gi) : [];
}
function hr(e) {
  return gi((0, import_path2.basename)(e));
}
function Yd(e, r) {
  let o = /* @__PURE__ */ new Set();
  try {
    let g = new Set([...r].map(hr).filter((h) => h !== "")), y = [...g];
    for (let h of g.size > 0 ? e : []) {
      if (h.type !== "assistant" || !Array.isArray(h.message?.content)) continue;
      for (let P of h.message.content) if (P?.type === "tool_use" && fi(P.input, y).some((C) => g.has(C))) o.add(P.id);
    }
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.l)("bridge_attachment_withdraw", "call_scan_failed");
  }
  return o;
}
function gi(e) {
  let r = e.length;
  while (r > 0 && e[r - 1] === ".") r--;
  return e.slice(0, r);
}
function hs(e, r, o) {
  return e?.type === "tool_result" && (r.has(e.tool_use_id) || o.has(e.tool_use_id)) && e.content !== import_chunk_bp9b0hd8.Ept && e.content !== import_chunk_bp9b0hd8.mFr;
}
function _i(e, r) {
  return Array.isArray(e) && e.some((o) => o?.type === "tool_result" && Array.isArray(o.content) && o.content.some((g) => g?.type === r));
}
function si(e) {
  return Array.isArray(e) && e.some((r) => r?.type === "image" || r?.type === "document");
}
(0, import_chunk_adx6804h.B)();
function gGr({ proactivityLevel: e, toolPermissionContext: r }) {
  return;
}
function _Gr(e, r) {
  if (!(0, import_chunk_4vsz8a99.awe)()) return;
  e.notifyMetadataChanged({ proactivity: RVs(r) });
}
function RVs(e) {
  if (!(0, import_chunk_4vsz8a99.vN)()) return null;
  return gGr(e) ?? { level: e.proactivityLevel };
}
function xEa(e, r) {
  return () => r((0, import_chunk_xcgcdx61.Qc)(e().toolPermissionContext.mode));
}
function PEa(e) {
  return (0, import_chunk_f9x2f6cx.F3n)(() => {
    if ((0, import_chunk_4vsz8a99.Udn)() === "session_excluded") return;
    e();
  });
}
function OEa({ optIn: e, permissionModeSuppliedOnInvocation: r, attaching: o, planModeRestoredAtBoot: g, getAppState: y, setAppState: h }) {
  {
    let P = (0, import_chunk_4vsz8a99.vN)();
    if ((0, import_chunk_eh2gjex9.zGr)(e), !(0, import_chunk_4vsz8a99.vN)() || P || o || g) return;
    let C = y().proactivityLevel;
    if (C === "default" || r) return;
    h((L) => {
      let O = (0, import_chunk_egw85n2m._8s)(C, L.toolPermissionContext, { offerBypass: false });
      return { ...L, toolPermissionContext: { ...O.context, mode: O.nextMode, startupModeDecidedByProactivityLevel: C } };
    });
  }
}
var zd = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ level: (0, import_chunk_adx6804h.F)(import_chunk_bzyb60p0.$Me) }));
function IEa(e, r) {
  {
    (0, import_chunk_eh2gjex9.zGr)(true);
    let o = zd().safeParse(e);
    if (!o.success || (0, import_chunk_zyws26f3.GYt)() !== void 0) return false;
    let { level: g } = o.data;
    return r((y) => y.proactivityLevel === g ? y : { ...y, proactivityLevel: g, toolPermissionContext: { ...y.toolPermissionContext, startupModeDecidedByProactivityLevel: void 0 } }), true;
  }
  return false;
}
function xVs(e, r, o) {
  e.notifyInternalMetadataChanged({ proactivity_opt_in: r ? true : null }), _Gr(e, o);
}
function MEa(e, r, o, g, { offerBypass: y, cloudOptIn: h } = {}) {
  {
    let P = (L, O) => ((0, import_chunk_cqa9hrgx.m)("proactivity_cycle", L), { ok: false, error: O });
    if ((0, import_chunk_4vsz8a99.Udn)() === "session_excluded") return P("session_excluded", `Cannot set proactivity: levels are not enabled for this session \u2014 the session is excluded (${(0, import_chunk_4vsz8a99.Mbo)()})`);
    if (!(0, import_chunk_bzyb60p0.T4e)(e)) return P("invalid_level", `Cannot set proactivity: unrecognized level ${hi(e)} (expected one of ${import_chunk_bzyb60p0.$Me.join(", ")})`);
    if (y !== void 0 && typeof y !== "boolean") return P("invalid_offer_bypass", `Cannot set proactivity: offer_bypass must be a boolean when present (got ${hi(y, { quoteStrings: true })})`);
    if (h && (0, import_chunk_4vsz8a99.Udn)() === "gate_off") (0, import_chunk_eh2gjex9.zGr)(true), xVs(h, true, r());
    if ((0, import_chunk_4vsz8a99.Udn)() === "gate_off") return P("not_enabled", "Cannot set proactivity: levels are not enabled for this session (the host must send proactivity: true on initialize, with no kill switch set)");
    (0, import_chunk_egw85n2m.eOa)(e, o, g, { offerBypass: y ?? true });
    let C = r();
    return { ok: true, response: { level: C.proactivityLevel, permissionMode: (0, import_chunk_xcgcdx61.Qc)(C.toolPermissionContext.mode) } };
  }
  return { ok: false, error: "Unsupported control request subtype" };
}
var yi = 64;
function hi(e, { quoteStrings: r = false } = {}) {
  let o;
  if (typeof e === "string" && !r) o = e;
  else try {
    o = (0, import_chunk_w578pjby._)(e) ?? String(e);
  } catch {
    o = String(e);
  }
  return o.length > yi ? `${(0, import_chunk_7cfjrnwy.ee)(o, yi)}\u2026` : o;
}
var mJn = new import_chunk_pzzqg6s3.ze(() => ({}));
function vEa(e) {
  let r = (0, import_chunk_ma3kja9f.T)(e) && e.type === "user" ? e.highest_task_id_shown : void 0;
  return typeof r === "number" && Number.isInteger(r) && r < import_chunk_vj6f11qy.OMt ? r : void 0;
}
async function TEa(e, r) {
  try {
    let o = (0, import_chunk_0dht3xy7.rb)();
    if (e > await (0, import_chunk_0dht3xy7.fon)(o, r) && await (0, import_chunk_0dht3xy7.ALn)(o, e, r)) (0, import_chunk_0dht3xy7.kst)(), (0, import_chunk_cqa9hrgx.u)("task_id_mark_from_host");
  } catch (o) {
    (0, import_chunk_cqa9hrgx.m)("task_id_mark_from_host", "raise_failed"), (0, import_chunk_k449cc64.i)(o);
  }
}
async function Qd(e, r) {
  let o = (0, import_chunk_0dht3xy7.rb)(), g = { creates: 0, updates: 0, skipped: 0, missing: 0, conflicts: 0, failed: 0 }, y = 0, h = [...(0, import_chunk_vj6f11qy.VEn)(e)], P = /* @__PURE__ */ new Map();
  for (let { kind: L, taskId: O, named: R } of h) {
    let N = L === "create" ? R.subject ?? "" : R.subject;
    if (N !== void 0) P.set(O, (P.get(O) ?? /* @__PURE__ */ new Set()).add(N));
  }
  let C = /* @__PURE__ */ new Set();
  for (let { kind: L, taskId: O, named: R } of h) {
    let N = (0, import_chunk_vj6f11qy.tQn)(O);
    if (N === void 0) {
      g.skipped++;
      continue;
    }
    if (y = Math.max(y, N), L === "update" && C.has(O)) {
      g.conflicts++;
      continue;
    }
    try {
      if (L === "create") {
        let se = R.subject ?? "";
        if (await (0, import_chunk_0dht3xy7.vol)(o, { id: O, subject: se, description: R.description ?? "", ...R.activeForm !== void 0 && { activeForm: R.activeForm }, status: "pending", blocks: [], blockedBy: [], ...R.metadata !== void 0 && { metadata: R.metadata } }, r)) g.creates++;
        else {
          let H = await (0, import_chunk_0dht3xy7.Iae)(o, O, r), ae = H !== null && P.get(O)?.has(H.subject) === true;
          if (!ae) C.add(O);
          g[ae ? "skipped" : "conflicts"]++;
        }
        continue;
      }
      if (R.status === "deleted") {
        if (await (0, import_chunk_0dht3xy7.RLn)(o, O, r)) g.updates++;
        else {
          let se = await (0, import_chunk_0dht3xy7.Iae)(o, O, r);
          g[se === null ? "skipped" : "failed"]++;
        }
        continue;
      }
      let z = (0, import_chunk_0dht3xy7.jSe)().safeParse(R.status), ie = { ...R.subject !== void 0 && { subject: R.subject }, ...R.description !== void 0 && { description: R.description }, ...R.activeForm !== void 0 && { activeForm: R.activeForm }, ...z.success && { status: z.data }, ...R.owner !== void 0 && { owner: R.owner }, ...R.metadata !== void 0 && { metadata: (0, import_chunk_0dht3xy7.pon)((await (0, import_chunk_0dht3xy7.Iae)(o, O, r))?.metadata, R.metadata) } }, I = (se) => !C.has(se), V = (R.addBlocks ?? []).filter(I), J = (R.addBlockedBy ?? []).filter(I);
      if (Object.keys(ie).length === 0 && V.length + J.length === 0) {
        g.skipped++;
        continue;
      }
      let be = await (0, import_chunk_0dht3xy7.DWe)(o, O, ie, r);
      if (be === null) (0, import_chunk_w578pjby.t)(`[Tasks] hand-off apply: task ${O} is not in the list; its update is skipped`);
      for (let se of V) await (0, import_chunk_0dht3xy7.xLn)(o, O, se, r);
      for (let se of J) await (0, import_chunk_0dht3xy7.xLn)(o, se, O, r);
      g[be === null ? "missing" : "updates"]++;
    } catch (z) {
      g.failed++, g.error ??= z;
    }
  }
  if (y > 0) try {
    await (0, import_chunk_0dht3xy7.ALn)(o, y, r);
  } catch (L) {
    g.failed++, g.error ??= L;
  }
  return g;
}
async function Xd(e, r, o) {
  try {
    if (mJn.peek(e)?.honoured !== true) return;
    let { error: g, ...y } = await Qd(r, o);
    if (y.failed + y.missing + y.conflicts > 0) {
      if ((0, import_chunk_cqa9hrgx.l)("task_list_handoff_apply", "handoff_apply_partial", y), g !== void 0) (0, import_chunk_k449cc64.i)(g);
    } else if (y.creates + y.updates + y.skipped > 0) (0, import_chunk_cqa9hrgx.u)("task_list_handoff_apply", y);
  } catch (g) {
    (0, import_chunk_cqa9hrgx.m)("task_list_handoff_apply", "handoff_apply_failed"), (0, import_chunk_k449cc64.i)(g);
  }
}
function Si(e, r, o, g) {
  if (mJn.peek(e)?.honoured !== true) return { beforeRun: async () => {
  }, catchUp: async () => {
  } };
  let y = new Set(o.map((L) => L.uuid)), h = r.some((L) => !y.has(L.uuid)), P = false, C = async () => {
    P = true, await Xd(e, r, g);
  };
  return { beforeRun: C, catchUp: async (L) => {
    if (!P && h && L) await C();
  } };
}
var Jd = /* @__PURE__ */ new Set(["tool_use", "server_tool_use", "mcp_tool_use"]), Zd = { onStreamEvent: () => [], onAssistantMessage: () => {
}, onTombstone: () => [], onRefusalFallbackBanner: () => [], closeAtTurnEnd: () => [] };
function Mi(e) {
  if (!e) return Zd;
  let r = null, o = null, g = false, y = false, h = false, P = /* @__PURE__ */ new Map(), C = null;
  function L() {
    if (C === null) return [];
    let R = C;
    return C = null, (0, import_chunk_y53wbr8a.a)("tengu_partial_stream_retraction_closed", { stop_reason: R.source === "tombstone" ? (0, import_chunk_78g0060s.fe)(R.retracted.stop_reason) : (0, import_chunk_78g0060s.f)("refusal"), had_open_block: false, ...R.source === "refusal_banner" && { source: (0, import_chunk_78g0060s.S)("refusal_banner") } }), R.source === "tombstone" ? Wn(R.messageId, R.retracted.stop_reason, R.retracted.stop_sequence, jn(R.retracted.usage)) : Wn(R.messageId, "refusal", null, jn(R.usage));
  }
  function O(R, N, z) {
    if (r === null) return [];
    let ie = [], I = o !== null;
    if (o !== null && !h) ie.push(Ts(r, o));
    if (y) ie.push(ki(r));
    else ie.push(...Wn(r, null, null, jn(R), z ? void 0 : P.get(r) ?? 0));
    return (0, import_chunk_y53wbr8a.a)("tengu_partial_stream_retraction_closed", { stop_reason: void 0, had_open_block: I, stop_reason_already_sent: y, source: (0, import_chunk_78g0060s.f)(N) }), r = null, o = null, h = false, y = false, ie;
  }
  return { onStreamEvent(R, N) {
    return Nn(() => {
      let z = [];
      if (C !== null) if ((0, import_chunk_bzyb60p0.Pfe)(R)) ;
      else if (R.type === "message_start") z.push(...L());
      else r = C.messageId, C = null;
      if (R.type === "message_start") z.push(...O(N, "stale_message_start", R.message.id === r)), r = R.message.id, o = null, h = false, g = false, y = false;
      else if (R.type === "content_block_start") o = R.index, h = Jd.has(R.content_block.type), y = false;
      else if (R.type === "content_block_stop") o = null, h = false, g = true;
      else if (R.type === "message_delta") {
        if (R.delta.stop_reason != null && o === null) y = true;
      } else if (R.type === "message_stop") r = null, o = null, h = false, y = false;
      return z;
    });
  }, onAssistantMessage(R) {
    Nn(() => {
      let N = R.apiBlockIndex;
      return P.set(R.message.id, Math.max(P.get(R.message.id) ?? 0, N !== void 0 && Number.isSafeInteger(N) && N >= 0 ? N + 1 : Number.NaN)), [];
    });
  }, onTombstone(R) {
    return Nn(() => {
      if (r === null || R.message.type !== "assistant" || R.message.message.id !== r) return [];
      if (R.displayOnly === true) return (0, import_chunk_y53wbr8a.a)("tengu_partial_stream_retraction_display_only", { had_open_block: o !== null }), [];
      let N = R.message.message;
      if (o === null) return C = { source: "tombstone", messageId: r, retracted: N }, r = null, [];
      let z = [...h ? [] : [Ts(r, o)], ...Wn(r, N.stop_reason, N.stop_sequence, jn(N.usage))];
      return (0, import_chunk_y53wbr8a.a)("tengu_partial_stream_retraction_closed", { stop_reason: (0, import_chunk_78g0060s.fe)(N.stop_reason), had_open_block: true }), r = null, o = null, z;
    });
  }, onRefusalFallbackBanner(R, N) {
    return Nn(() => {
      if (r === null || g || R !== "retry") return [];
      if (o !== null) {
        let z = [...h ? [] : [Ts(r, o)], ...Wn(r, "refusal", null, jn(N))];
        return (0, import_chunk_y53wbr8a.a)("tengu_partial_stream_retraction_closed", { stop_reason: (0, import_chunk_78g0060s.f)("refusal"), had_open_block: true, source: (0, import_chunk_78g0060s.S)("refusal_banner") }), r = null, o = null, z;
      }
      return C = { source: "refusal_banner", messageId: r, usage: N }, r = null, [];
    });
  }, closeAtTurnEnd(R) {
    return Nn(() => [...L(), ...O(R, "turn_end", false)]);
  } };
}
function Nn(e) {
  try {
    return e();
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), [];
  }
}
function Sr(e, r) {
  let o = { type: "stream_event", event: e.event, session_id: r.session_id, parent_tool_use_id: null, uuid: r.uuid };
  if (e.ttftMs !== void 0) o.ttft_ms = e.ttftMs;
  if (e.thinkingDisplay !== void 0) o.thinking_display = e.thinkingDisplay;
  if (e.apiMessageId !== void 0) o.api_message_id = e.apiMessageId;
  if (e.abandonedBlocks !== void 0) o.abandoned_blocks = { api_message_id: e.abandonedBlocks.apiMessageId, from_block_index: e.abandonedBlocks.fromBlockIndex };
  if (e.textRunsJoined) o.text_runs_joined = true;
  return o;
}
function ks(e) {
  return typeof e === "string" && e !== "" ? { api_message_id: e } : {};
}
function Ts(e, r) {
  return { type: "stream_event", event: { type: "content_block_stop", index: r }, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: (0, import_crypto.randomUUID)(), ...ks(e) };
}
function Wn(e, r, o, g, y) {
  return [{ type: "stream_event", event: { type: "message_delta", context_management: null, delta: { container: null, stop_details: null, stop_reason: r, stop_sequence: o }, usage: g }, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: (0, import_crypto.randomUUID)(), ...ks(e) }, ki(e, y)];
}
function ki(e, r) {
  let o = ks(e);
  return { type: "stream_event", event: { type: "message_stop" }, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: (0, import_crypto.randomUUID)(), ...o, ...o.api_message_id !== void 0 && r !== void 0 && Number.isSafeInteger(r) && { abandoned_blocks: { api_message_id: o.api_message_id, from_block_index: r } } };
}
function jn(e) {
  return { output_tokens_details: e.output_tokens_details ?? null, cache_creation_input_tokens: e.cache_creation_input_tokens ?? null, cache_read_input_tokens: e.cache_read_input_tokens ?? null, input_tokens: e.input_tokens ?? null, iterations: e.iterations ?? null, output_tokens: e.output_tokens, server_tool_use: e.server_tool_use ?? null, fallback_credit: e.fallback_credit ?? null };
}
function n2o(e) {
  if (e.type === "system" && (e.subtype === "model_fallback" || e.subtype === "model_consent_fallback")) return e;
  return e;
}
function* bi(e, r, o) {
  let { replayUserMessages: g, includePartialMessages: y } = o;
  switch (e.type) {
    case "assistant":
      if (!("parent_tool_use_id" in e)) yield* wi(e, r());
      return;
    case "user":
    case "progress":
      yield* wi(e, r());
      return;
    case "system":
      switch (e.subtype) {
        case "status":
          if (e.status !== "requesting" || y) yield e;
          return;
        case "model_refusal_fallback": {
          let { provisional: h, ...P } = e;
          yield P;
          return;
        }
        case "init":
        case "notification":
        case "api_retry":
        case "model_refusal_no_fallback":
        case "memory_recall":
        case "thinking_tokens":
        case "compact_boundary":
          yield e;
          return;
        case "model_fallback":
        case "model_consent_fallback":
          yield e;
          return;
        case "informational": {
          if (!("timestamp" in e)) {
            yield e;
            return;
          }
          let h;
          try {
            h = { ...Xse(e), session_id: e.session_id };
          } catch (P) {
            (0, import_chunk_k449cc64.i)(P);
          }
          if (h) yield h;
          return;
        }
        default:
          return;
      }
    case "tool_use_summary":
      yield e;
      return;
    case "attachment":
      if (g && e.attachment.type === "queued_command") {
        let h = (0, import_chunk_wx3ay5nf.Otr)(e.attachment, e);
        if (h) yield { ...h, session_id: e.session_id };
        return;
      }
      if (o.replayOwnTaskNotifications && e.attachment.type === "queued_command") {
        let h;
        try {
          let P = e.attachment.commandMode === "task-notification" ? (0, import_chunk_s3d8sr7p.stt)(e.attachment, e.uuid)?.origin : void 0;
          if ((0, import_chunk_xfj2cwfv.rB)(P) && (0, import_chunk_xfj2cwfv.mee)(P)) h = (0, import_chunk_wx3ay5nf.Otr)(e.attachment, e);
        } catch (P) {
          (0, import_chunk_k449cc64.i)(P);
        }
        if (h) {
          yield { ...h, session_id: e.session_id };
          return;
        }
      }
      if (e.attachment.type === "tool_host_result_lines") {
        yield (0, import_chunk_wx3ay5nf.d3r)(e.attachment, e.uuid, e.session_id);
        return;
      }
      yield* ws([e], e.session_id);
      return;
    case "result": {
      let { parent_tool_use_id: h, priority: P, shouldQuery: C, timestamp: L, ...O } = e;
      if (O.subtype === "success" && O.deferred_tool_use !== void 0) {
        let { api_error_status: R, api_error_code: N, api_error_type: z, api_error_origin: ie, api_error: I, structured_output: V, ...J } = O;
        yield { ...J, is_error: false, stop_reason: "tool_deferred", result: "" };
        return;
      }
      yield O;
      return;
    }
    case "stream_event":
      if (y) yield Sr(e, e);
      return;
    case "tombstone":
    case "stream_request_start":
    case "tool_progress":
    case "command_lifecycle":
    case "auth_status":
    case "prompt_suggestion":
    case "rate_limit_event":
    case "sdk_status":
    case "compact_progress":
    case "stream_mode":
    case "response_length":
    case "set_expanded_view":
    case "post_turn_summary":
    case "active_goal":
    case "set_in_progress_tool_use_ids":
    case "conversation_reset":
    case "hint_clears":
    case "api_metrics":
    case "os_notification":
    case "open_message_selector":
    case "apply_flag_settings":
    case "refusal_continuation":
    case "query_model_change":
      return;
    default:
  }
}
function vi(e) {
  if (e.type === "user" && typeof e.message.content === "string" && (0, import_chunk_bzyb60p0.qyt)(e) !== void 0) return (0, import_chunk_wx3ay5nf.$qo)(e, e.message.content);
  if (e.type === "system" && e.subtype === "local_command" && typeof e.content === "string" && (e.content.includes(`<${import_chunk_k449cc64.Tf}>`) || e.content.includes(`<${import_chunk_k449cc64.Ky}>`))) return (0, import_chunk_wx3ay5nf.Itr)(e.content, e.uuid, e.timestamp, e.contextUsage, e.commandRun, e.usageReport, e.commandOutcome) ?? void 0;
  return;
}
function* Ci(e) {
  for (let r of e) {
    if (r.type !== "system") continue;
    let o = vi(r);
    if (o) yield o;
  }
}
function* Ai(e) {
  for (let r of e) {
    let o = vi(r);
    if (o) {
      yield o;
      continue;
    }
    if (r.type === "user" && typeof r.message.content === "string" && r.isCompactSummary) yield (0, import_chunk_wx3ay5nf.$qo)(r, r.message.content);
    if (r.type === "system" && r.subtype === "compact_boundary") yield { type: "system", subtype: "compact_boundary", session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: r.uuid, compact_metadata: (0, import_chunk_wx3ay5nf.xtr)(r.compactMetadata), ...r.logicalParentUuid !== void 0 && { logical_parent_uuid: r.logicalParentUuid } };
    if (r.type === "system" && r.subtype === "informational") yield Xse(r);
  }
}
function Xse(e) {
  return { type: "system", subtype: "informational", content: (0, import_chunk_wbk1hf21.Tl)(e.content), level: e.level, ...e.toolUseID && { tool_use_id: e.toolUseID }, ...e.preventContinuation && { prevent_continuation: e.preventContinuation }, ...e.promptSubmitEnding && { prompt_submit_outcome: { kind: e.promptSubmitEnding.ending.kind, prompt_kept: e.promptSubmitEnding.promptKept, ...e.promptSubmitEnding.ending.kind === "no_verdict" && { no_verdict_kind: e.promptSubmitEnding.ending.noVerdictKind }, ...e.promptSubmitEnding.ending.reason !== void 0 && { reason: e.promptSubmitEnding.ending.reason } } }, uuid: e.uuid, session_id: (0, import_chunk_f9x2f6cx.W)() };
}
function ws(e, r) {
  try {
    let o = e.find(import_chunk_865at33z.On)?.compactMetadata?.preservedMessages, g = new Set(o?.allUuids ?? o?.uuids ?? []);
    return e.flatMap((y) => y.type === "attachment" && y.attachment.type === "hook_system_message" && !g.has(y.uuid) ? [{ ...(0, import_chunk_wx3ay5nf.Iqo)(y.attachment), uuid: y.uuid, session_id: r }] : []);
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), [];
  }
}
function* wi(e, r) {
  for (let o of (0, import_chunk_wx3ay5nf.RO)(e, r)) yield { ...o, session_id: e.session_id };
}
var el = new import_chunk_2904xtvq.j(() => ({}));
function bs(e, r, o) {
  e.compactMetadata.preCompactProjectSeen = el.of(o).read?.(r);
}
function Ei(e, r) {
  switch (e.type) {
    case "project_doc_reads":
      return (e.midChat === true || e.changed === true) && e.reads.length > 0;
    case "session_context":
      return e.changed === true && e.context.attachedProject !== (0, import_chunk_bzyb60p0.zue)(r)?.attachedProject;
    default:
      return false;
  }
}
var nl = "tengu_jolly_aurora";
function qn() {
  return (0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_3t7ve0wy.OB)() && !(0, import_chunk_3t7ve0wy.kk)() && !(0, import_chunk_3t7ve0wy.nx)();
}
function rl(e) {
  if (!e.totalOverLimit) return null;
  return { total_chars: e.totalChars, total_limit_chars: e.totalLimitChars, file_count: e.fileCount, ...e.fileCount > 1 && e.largestChars > e.totalLimitChars && { largest_chars: e.largestChars } };
}
async function Pi(e, r, o) {
  try {
    if (!qn()) return null;
    let g = await e;
    if (g === void 0) return null;
    let y = (0, import_chunk_bzyb60p0.MGa)(g, o), h = rl(y);
    if (h === null) return null;
    if (!(0, import_chunk_865at33z.b)(nl, false)) return null;
    return (0, import_chunk_cqa9hrgx.u)("context_instruction_size_warning", { total_chars: y.totalChars, total_limit_chars: y.totalLimitChars, limit_chars: y.limitChars, file_count: y.fileCount, files_over_limit: y.filesOverLimit }), { type: "system", subtype: "instruction_size_warning", ...h, uuid: (0, import_crypto3.randomUUID)(), session_id: r };
  } catch (g) {
    if (!(0, import_chunk_jv7av99m.Fe)(g)) (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.m)("context_instruction_size_warning", "threw");
    return null;
  }
}
function Ri(e) {
  try {
    let r = (0, import_chunk_f9x2f6cx.Io)(), o = r?.hostVerdict;
    if (!r || !o || "unresolvedReason" in o || o.verified || o.hasCodeTabRules === false) return null;
    if (!qn() || (0, import_chunk_wddxyb00.rm)(e)) return null;
    let { origin: g, pathname: y } = new URL(r.url);
    return Xse((0, import_chunk_bzyb60p0.Pt)(`Rules your organization sets on the gateway at ${g}${y.replace(/\/$/, "")}, such as blocked commands, may not apply in this session. Claude Code doesn't take settings from that gateway${o.reason ? `: ${o.reason}` : "."}`, "warning"));
  } catch (r) {
    if (!(0, import_chunk_jv7av99m.Fe)(r)) (0, import_chunk_k449cc64.i)(r);
    return null;
  }
}
var sl = "Remote managed settings are still loading", ol = "Remote managed settings did not load", il = "Remote managed settings have now loaded";
function Oi(e) {
  try {
    if (!qn()) return null;
    let r = (0, import_chunk_xcgcdx61.Tm)(), o = (0, import_chunk_xcgcdx61.Gee)(), g = (0, import_chunk_xcgcdx61.QKt)();
    if (!g) {
      if (e === void 0) return null;
      if (r?.state === "ineligible") return { said: void 0, frame: null };
      if (e.word === "answered" || r?.state !== "ok" && r?.state !== "stale_cache") return null;
    }
    let y = !g ? "answered" : r === void 0 && (0, import_chunk_xcgcdx61.fce)() && !(0, import_chunk_xcgcdx61.OK)() ? "pending" : "missing";
    if (e?.epoch === o && e.word === y) return null;
    let h;
    if (r === void 0) h = y === "pending" ? sl : ol;
    else switch (r.state) {
      case "failed":
        h = `Remote managed settings failed to load (${(0, import_chunk_t3er6wbx.Uhe)(r.failure.errorKind, r.failure.httpStatus)}) \xB7 ${r.restrictionsOnly ? "the cached policy's restrictions still apply" : "no remote policy applied"}`;
        break;
      case "stale_cache":
        h = `Remote managed settings failed to load (${(0, import_chunk_t3er6wbx.Uhe)(r.failure.errorKind, r.failure.httpStatus)}) \xB7 using cached policy${r.transportEnvWithheld ? " (proxy/CA/provider env withheld)" : ""}`;
        break;
      case "ok":
        h = `${il} \xB7 ${r.hasSettings ? "remote policy applied" : "no remote policy to apply"}`;
        break;
      case "ineligible":
        return null;
    }
    let P = Xse((0, import_chunk_yta0vzjp.lp)(h, y === "answered" ? "notice" : "warning"));
    return (0, import_chunk_cqa9hrgx.u)("remote_managed_settings_desktop_notice", { word: (0, import_chunk_78g0060s.f)(y) }), { said: { word: y, epoch: o }, frame: P };
  } catch (r) {
    if (!(0, import_chunk_jv7av99m.Fe)(r)) (0, import_chunk_k449cc64.i)(r), (0, import_chunk_cqa9hrgx.m)("remote_managed_settings_desktop_notice", "threw");
    return null;
  }
}
var Ii = "remote managed settings";
function Di(e) {
  try {
    let r = (0, import_chunk_xcgcdx61.Tm)(), o = new Set(r?.state === "stale_cache" && r.failure.errorKind === "ruled_empty" ? (0, import_chunk_6mfepmbb.OJe)(r.failure.rulings ?? []).map(({ file: y, path: h }) => `${y}\0${h}`) : []), g = (0, import_chunk_2yx6c1y2.bI)().filter(({ file: y, path: h }) => (h === "hooks" || h.startsWith("hooks.")) && !o.has(`${y}\0${h}`));
    if (g.length === 0 || (0, import_chunk_2yx6c1y2._e)("policySettings")?.disableAllHooks === true) return { said: false, frame: null };
    if (e) return { said: true, frame: null };
    return (0, import_chunk_cqa9hrgx.u)("managed_settings_unloaded_hooks_notice", { count: g.length, source: (0, import_chunk_78g0060s.f)(g.every((y) => y.file === Ii) ? "remote" : g.some((y) => y.file === Ii) ? "both" : "machine") }), { said: true, frame: { ...Xse((0, import_chunk_yta0vzjp.lp)("Some checks your organization set up (hooks) did not load, so they are not running in this session. Ask your admin to look at Claude Code's managed settings.", "warning")), tag: "managed_hooks_not_loaded" } };
  } catch (r) {
    if (!(0, import_chunk_jv7av99m.Fe)(r)) (0, import_chunk_k449cc64.i)(r), (0, import_chunk_cqa9hrgx.m)("managed_settings_unloaded_hooks_notice", "threw");
    return { said: e, frame: null };
  }
}
var al = 262144;
async function uEn(e, r, o) {
  try {
    let g = (0, import_chunk_0dht3xy7.rb)();
    if (!(0, import_chunk_bzyb60p0.rur)() || g !== (0, import_chunk_0dht3xy7.E$t)(r.id)) return;
    let y = await (0, import_chunk_0dht3xy7.UCi)(g, o);
    if (y === null || y.tasks === null) y = await (0, import_chunk_0dht3xy7.UCi)(g, o) ?? y;
    if (y === null) {
      (0, import_chunk_cqa9hrgx.m)("task_list_carry", "list_unreadable");
      return;
    }
    let { tasks: h, highestId: P } = y;
    if (P === 0) return;
    if (P > import_chunk_vj6f11qy.OMt) {
      (0, import_chunk_cqa9hrgx.m)("task_list_carry", "highest_id_over_limit");
      return;
    }
    if (h === null) {
      e.compactMetadata.preCompactTaskList = { highestId: P }, (0, import_chunk_cqa9hrgx.l)("task_list_carry", "task_unreadable", { highest_id: P });
      return;
    }
    let C = h.filter((z) => !z.metadata?._internal), L = { task_count: C.length, highest_id: P }, O = vs({ shown: C, highestId: P, descriptions: true, metadata: true });
    if (Cs(O)) {
      e.compactMetadata.preCompactTaskList = O, (0, import_chunk_cqa9hrgx.u)("task_list_carry", L);
      return;
    }
    let R = vs({ shown: C, highestId: P, descriptions: true, metadata: false });
    if (Cs(R)) {
      e.compactMetadata.preCompactTaskList = R, (0, import_chunk_cqa9hrgx.l)("task_list_carry", "metadata_left_out", L);
      return;
    }
    let N = vs({ shown: C, highestId: P, descriptions: false, metadata: false });
    if (Cs(N)) {
      e.compactMetadata.preCompactTaskList = N, (0, import_chunk_cqa9hrgx.l)("task_list_carry", "descriptions_left_out", L);
      return;
    }
    e.compactMetadata.preCompactTaskList = { highestId: P }, (0, import_chunk_cqa9hrgx.l)("task_list_carry", "tasks_left_out", L);
  } catch (g) {
    (0, import_chunk_cqa9hrgx.m)("task_list_carry", "carry_failed"), (0, import_chunk_k449cc64.i)(g);
  }
}
function vs({ shown: e, highestId: r, descriptions: o, metadata: g }) {
  return { tasks: e.map((y) => ({ id: y.id, subject: y.subject, ...o && y.description !== "" && { description: y.description }, ...y.activeForm !== void 0 && { activeForm: y.activeForm }, status: y.status, ...y.owner !== void 0 && { owner: y.owner }, ...y.blocks.length > 0 && { blocks: y.blocks }, ...y.blockedBy.length > 0 && { blockedBy: y.blockedBy }, ...g && y.metadata !== void 0 && { metadata: y.metadata } })), highestId: r };
}
function Cs(e) {
  return Buffer.byteLength((0, import_chunk_w578pjby._)(e), "utf8") <= al;
}
function As(e, r, o) {
  try {
    if (e.length === 0 || !(0, import_chunk_sghy0qej.Pe)(import_chunk_qanr9g0g.Iol, { safe: true })) return [];
    let g, y;
    return e.filter((h) => {
      if (!h.startsWith(import_chunk_px0hhsq7.ch)) return false;
      if ((0, import_chunk_qanr9g0g.Yco)(h)) return true;
      let C = r().filter((0, import_chunk_qanr9g0g._gr)([h]));
      if (g ??= o.flatMap((L) => [L.name, ...(0, import_chunk_qyhf6bts._2t)(L.name, [L])].map(import_chunk_px0hhsq7.Rr)), y ??= new Set(g), C.some((L) => (0, import_chunk_px0hhsq7.VJe)(h, L)) || y.has(`${h}__`)) return true;
      return C.length === 0 && !g.some((L) => h.startsWith(L));
    });
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), [...e];
  }
}
function Fi() {
  let e, r = /* @__PURE__ */ new Set(), o = 0;
  function g(P) {
    let C = P.retractedMessageUuids;
    if (C === void 0 || r.size === 0) return P;
    return { ...P, retractedMessageUuids: C.filter((L) => !r.has(L)) };
  }
  function y(P, C) {
    let L = { banner: g(P), suppressedCount: o, emittedVia: C };
    return o = 0, L;
  }
  function h(P) {
    if (e === void 0) return [];
    let C = y(e, P);
    return e = void 0, [C];
  }
  return { accept(P) {
    let C = [];
    if (e !== void 0) if (P.retractedMessageUuids?.includes(e.uuid)) r.add(e.uuid), o += 1, e = void 0;
    else C.push(...h("episode_boundary"));
    if (P.provisional) e = P;
    else C.push(y(P, o > 0 ? "supersedes" : "immediate"));
    return C;
  }, dropHeld(P) {
    if (e?.uuid === P) r.add(e.uuid), o += 1, e = void 0;
  }, settle(P) {
    return h(P);
  } };
}
function Es(e, r) {
  return e.map(({ banner: o, suppressedCount: g, emittedVia: y }) => {
    if (g > 0) (0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_notice_collapsed", { suppressed_count: g, emitted_via: (0, import_chunk_78g0060s.f)(y) });
    if (o.apiRefusalCyberVerification !== void 0) (0, import_chunk_cqa9hrgx.u)("refusal_fallback_cyber_verification");
    return { type: "system", subtype: "model_refusal_fallback", trigger: o.trigger, direction: o.direction, ...o.scope !== void 0 && { scope: o.scope }, original_model: o.originalModel, fallback_model: o.fallbackModel, request_id: o.requestId, api_refusal_category: o.apiRefusalCategory ?? null, api_refusal_explanation: o.apiRefusalExplanation ?? null, ...o.apiRefusalCyberVerification !== void 0 && { api_refusal_cyber_verification: o.apiRefusalCyberVerification }, ...o.sawCyberRefusal && { saw_cyber_refusal: true }, ...o.retractedMessageUuids !== void 0 && { retracted_message_uuids: o.retractedMessageUuids }, refused_user_message_uuid: o.refusedUserMessageUuid ?? null, content: o.content, session_id: r, uuid: o.uuid };
  });
}
var Li = 15e3, dl = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set());
function ul(e, r, o, g) {
  if (o.aborted) return;
  let y = [];
  for (let h of dl.of(e)) try {
    let P = h(r, o);
    if (P !== void 0) y.push(P.catch((C) => {
      if (o.aborted && (0, import_chunk_jv7av99m.Fe)(C)) return;
      (0, import_chunk_k449cc64.i)(Error("A built-in plugin failed while getting ready for this prompt; the prompt runs without waiting for it", { cause: C }));
    }));
  } catch (P) {
    (0, import_chunk_k449cc64.i)(Error("A built-in plugin threw while getting ready for this prompt; the prompt runs without waiting for it", { cause: P }));
  }
  if (y.length === 0) return;
  return (0, import_chunk_5appeerh.Tn)((0, import_chunk_5appeerh.me)(Promise.all(y), Li, g), o, () => new import_chunk_jv7av99m.Ie()).then((h) => {
    if (h === void 0) (0, import_chunk_w578pjby.t)(`Built-in plugins still getting ready after ${Li} ms; the prompt runs now`);
  }, (h) => {
    if (!(0, import_chunk_jv7av99m.Fe)(h)) (0, import_chunk_k449cc64.i)(Error("Waiting for built-in plugins before the prompt failed; the prompt runs now", { cause: h }));
  });
}
function xi(e, r, o, g) {
  try {
    let h = o?.inputMode !== "bash" && o?.textNotTyped !== true && (o?.skipSlashCommands !== true || o?.bridgeOrigin === true || o?.modelScheduledOrigin === true) && (0, import_chunk_865at33z.$u)(o?.origin) ? (0, import_chunk_tjdnrbvx.fv)(r) : null;
    return h === null ? void 0 : ul(e, h, g);
  } catch (y) {
    (0, import_chunk_k449cc64.i)(Error("Waiting for built-in plugins before the prompt failed; the prompt runs now", { cause: y }));
    return;
  }
}
function Ui(e, r) {
  try {
    e?.(r);
  } catch (o) {
    (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "carried_callback_threw"), (0, import_chunk_k449cc64.i)(o);
  }
}
function Ps(e, r) {
  try {
    e?.(r);
  } catch (o) {
    (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "record_callback_threw"), (0, import_chunk_k449cc64.i)(o);
  }
}
function Bi(e, r) {
  try {
    e?.(r);
  } catch (o) {
    (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "record_callback_threw"), (0, import_chunk_k449cc64.i)(o);
  }
}
function Hi(e, r, o) {
  try {
    let g = new Set(o);
    if (r !== void 0) g.add(r);
    let y = e.findLast(import_chunk_0ha8wex8.rg);
    if (g.size > 0 && y?.type === "user") y.droppedPromptUuids = [...g];
  } catch (g) {
    (0, import_chunk_k449cc64.i)(Error(`could not write a stopped prompt's uuids on its interruption marker: a rewind or a fork to that prompt will answer "target not found"`, { cause: g }));
  }
}
function Rs(e, r, o) {
  if (r.length > 0) return e;
  let g = o.map((y) => (0, import_chunk_px0hhsq7.Rr)(y.name));
  return e.filter((y) => g.includes(`${y}__`) || !g.some((h) => y.startsWith(h)));
}
function Ni(e, r, o) {
  try {
    let { id: g, model: y, usage: h } = e.message;
    if (e.isApiErrorMessage || y === import_chunk_bp9b0hd8.xs || g === r || g === o) return;
    return (0, import_chunk_bzyb60p0.qie)(import_chunk_hym6yzrf.Eg, h);
  } catch (g) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(g), "usage of an unstreamed answer not added to the turn total"));
    return;
  }
}
function Wi(e) {
  let r = [];
  function o(g, y, h) {
    if (r.some((C) => C.tool_use_id === y)) return;
    let P = (0, import_chunk_bzyb60p0.FUe)(g.name, (0, import_chunk_bzyb60p0.Xro)(g, y, h));
    r.push({ tool_name: (0, import_chunk_zd24r3fj.AJn)(P.name), tool_use_id: y, tool_input: P.input });
  }
  return { permissionDenials: r, recordDenial: o, canUseTool: async (g, y, h, P, C, L) => {
    let O = await e(g, y, h, P, C, L);
    if ((0, import_chunk_pbteexar.dxt)(O, L) && !(0, import_chunk_cbnm4p23.XT)(h.abortController.signal)) o(g, C, (0, import_chunk_bzyb60p0.QNt)(g, C, y, P, import_chunk_vc58gmrj.w7));
    return O;
  } };
}
function qi(e, r) {
  return e.filter((o) => o.type === "user" && !o.toolUseResult && (!o.isMeta && Os(o, r) || (0, import_chunk_bzyb60p0.v9a)(o.origin)) || o.type === "system" && o.subtype === "compact_boundary");
}
function Os(e, r) {
  return e.type === "user" && r?.localStdinOrigin === true && Ds(e, r) ? (0, import_chunk_bzyb60p0.bos)(e, "own-prompt") : (0, import_chunk_bzyb60p0.i9a)(e);
}
function* Is(e, r) {
  for (let o of e) {
    if (o.type !== "user") continue;
    yield r?.inputMode === "bash" ? { type: "user", message: o.message, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: o.uuid, timestamp: o.timestamp, isSynthetic: (0, import_chunk_wx3ay5nf.j7t)(o) } : Vi(o, r);
  }
}
function* Ki(e, r) {
  let o = r?.shouldQuery === false;
  for (let g of e) if (g.type === "user") {
    if (!o && !Ds(g, r)) continue;
    yield Vi(g, r);
  }
}
function Ds(e, r) {
  return r?.uuid != null && e.uuid === r.uuid;
}
function Vi(e, r) {
  let g = Ds(e, r) ? r?.fileAttachments : void 0;
  return { type: "user", message: e.message, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: e.uuid, timestamp: e.timestamp, isReplay: true, isSynthetic: (0, import_chunk_wx3ay5nf.j7t)(e), ...g && g.length > 0 && { file_attachments: g }, ...e.origin && { origin: e.origin }, ...(0, import_chunk_wx3ay5nf.gJs)(e) };
}
function Gi(e) {
  let r = [];
  for (let o of e) {
    if (o.type !== "user" || o.isMeta || (0, import_chunk_xfj2cwfv.dOr)(o) === "input") continue;
    let g = o.message.content;
    r.push({ ...o, message: { ...o.message, content: typeof g === "string" ? ji(g) : g.map((y) => y.type === "text" ? { ...y, text: ji(y.text) } : y) } });
  }
  return r;
}
function ji(e) {
  try {
    return (0, import_chunk_k1bhehpr.W2o)(e, { keepColors: true });
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), "";
  }
}
function $i(e, r, o) {
  try {
    return e?.() === true && !(0, import_chunk_fe5esh7d.Qus)(r, o) ? (0, import_chunk_fe5esh7d.TA)(r)?.systemPrompt : void 0;
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
    return;
  }
}
function Yi(e, r, o = []) {
  try {
    let g = r?.flatMap((h) => uJn(v8t(e, h), h).filter((P) => P === h || o.includes(P) || gr(e, P))), y = new Set(g);
    return g?.concat(o.filter((h) => {
      let P = e[Dve(e, h)];
      return !y.has(h) && (P?.type === "user" ? P.isMeta !== true : P !== void 0 && as(P));
    }));
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), r;
  }
}
function zi(e, r, o, g, y, h, P, C, L, O, R) {
  if (!L && !o?.length && g === void 0 && y === void 0 && h === void 0 && P === void 0 && C === void 0 && O === void 0 && R === void 0) return;
  try {
    let N = e.find((z) => z.uuid === r);
    if (N?.type !== "user") {
      if (h === true && r !== void 0) {
        let z = e.find((ie) => ie.type === "system" && ie.subtype === "local_command" && ie.submitUuid === r);
        if (z !== void 0) z.typedByPerson = true;
      }
      return;
    }
    if (o?.length) N.mergedSendUuids = [...o];
    if (g !== void 0) N.clientPlatform = g;
    if (y !== void 0) N.turnAttributionKey = y;
    if (h === true) N.typedByPerson = true;
    if (P !== void 0) N.publishClickPath = P;
    if (C !== void 0) N.traceparent = C;
    if (O !== void 0) N.carriesOnTurnOf = O;
    if (R !== void 0) N.withdrawnTools = R;
    if (L) N.storedAnewFor = N.uuid, (0, import_chunk_cqa9hrgx.u)("prompt_row_stored_anew");
  } catch (N) {
    (0, import_chunk_k449cc64.i)(N);
  }
}
function Qi({ conversation: e, messages: r, persistSession: o, storageV5: g, holdsLoadersRows: y = false, foldCopies: h, neverParentUuid: P }) {
  let C = 0, L, O = r.length, R = O, N, z = null, ie = /* @__PURE__ */ new Set(), I = 0, V = /* @__PURE__ */ new Map(), J = 0, be = /* @__PURE__ */ new WeakSet(), se = [], he, H, ae, Q, ge = false;
  function pe(X) {
    function te() {
      if ((0, import_chunk_cbnm4p23.UA)(X)) De();
    }
    Oe(() => {
      ae ??= (0, import_chunk_bzyb60p0.Qye)(De), X.addEventListener("abort", te, { once: true }), Q = () => X.removeEventListener("abort", te);
    });
  }
  function De() {
    if (Q !== void 0) ge = true, Oe(() => (0, import_chunk_cqa9hrgx.u)("shutdown_writes_held_calls", { count: Math.max(0, Ae() - C) }));
    return Ve("all");
  }
  function Ae() {
    return ge ? r.findLastIndex((X, te) => te >= O && (0, import_chunk_bzyb60p0._Ce)(X)) + 1 : 0;
  }
  function oe() {
    if (Q === void 0 && se.length === 0 && H === void 0) {
      let X = ae;
      ae = void 0, Oe(() => X?.());
    }
  }
  function Oe(X) {
    try {
      return X();
    } catch (te) {
      (0, import_chunk_k449cc64.i)(te);
      return;
    }
  }
  function Le(X, te) {
    Oe(() => {
      if (h.foldCopyFate(te) === "wait") {
        if (se.push({ row: X, sourceUuid: te }), o) ae ??= (0, import_chunk_bzyb60p0.Qye)(De);
      }
    });
  }
  function He(X) {
    if (se.length === 0) return false;
    let te = se;
    se = [], clearTimeout(he), he = void 0;
    let le = Oe(() => h.requeueWindowLeftMs());
    for (let ce of te) if (Oe(() => {
      if (X === "compaction") return true;
      let je = h.foldCopyFate(ce.sourceUuid);
      if (je === "wait" && X === "decidable") se.push(ce);
      else if (je === "drop") _n(ce.row.uuid);
      else h.foldCopyWritten(ce.sourceUuid);
      return true;
    }) === void 0) Oe(() => h.foldCopyWritten(ce.sourceUuid));
    if (se.length > 0 && le !== void 0) he = setTimeout(Ve, le + 10), he.unref();
    return se.length < te.length;
  }
  function lt(X) {
    let te = H === void 0 ? We(X) : H.then(() => We(X)), le = te.then(() => {
    }, () => {
    }).finally(() => {
      if (H === le) H = void 0, oe();
    });
    return H = le, te;
  }
  function Ve(X = "decidable") {
    if (Oe(() => {
      if ((He(X) || Ae() > C) && o) lt(false).catch(import_chunk_k449cc64.i);
    }), X === "all") Q?.(), Q = void 0;
    return oe(), H ?? Promise.resolve();
  }
  async function Ft(X, te, le) {
    let ce = (0, import_chunk_bzyb60p0.TSt)(X, le);
    return await (0, import_chunk_bzyb60p0.$Nt)(() => (0, import_chunk_bzyb60p0._E)(X, void 0, te, le, g, ce));
  }
  function Mt(X = false) {
    return H === void 0 && se.length === 0 ? We(X) : lt(X);
  }
  function We(X) {
    He(X ? "all" : "decidable");
    let te = C, le = Math.max(te, O, Oe(Ae) ?? 0), ce = (0, import_chunk_bzyb60p0.DNt)(r, Math.max(le, R), !X);
    for (let { row: it } of se) {
      let Kt = r.lastIndexOf(it);
      if (Kt !== -1) {
        ce = Math.min(ce, Kt);
        break;
      }
    }
    if (!X) ce = wr(le, ce);
    let ye = In(te, Rn(te, ce));
    if (!X) ce = ye;
    if (te >= ce) return (0, import_chunk_gy3c59ma.RAn)(r, ce)?.(true), Promise.resolve(null);
    let je = te === 0 && ce === r.length ? r : r.slice(te, ce), Ue = P === void 0 ? je : je.filter((it) => it.uuid !== P);
    C = ce;
    let ut = L;
    L = pn(Ue) ?? L;
    let ct = (0, import_chunk_gy3c59ma.RAn)(r, ce), st = Ft(Ue, ut, Kn);
    return ct === void 0 ? st : st.then((it) => (ct(true), it), (it) => {
      throw ct(false), it;
    });
  }
  function wr(X, te) {
    let le = te;
    for (let ce = te - 1; ce >= X; ce--) {
      let ye = r[ce];
      if ((0, import_chunk_bzyb60p0.Qns)(ye)) le = ce;
      else if (ye.type === "assistant" && ye.isApiErrorMessage !== true && ye.message.stop_reason !== "refusal") break;
    }
    return le;
  }
  function Kn() {
    return (0, import_chunk_bzyb60p0.ISt)(r.slice(I), ie), I = r.length, ie;
  }
  function Cn() {
    ie = /* @__PURE__ */ new Set(), I = 0, V = /* @__PURE__ */ new Map(), J = 0;
  }
  function Vn(X) {
    if (X === void 0) return false;
    for (; J < r.length; J++) {
      let { uuid: le } = r[J];
      if (!V.has(le)) V.set(le, J);
    }
    let te = V.get(X.uuid);
    if (te !== void 0 && r[te] === X) return false;
    return r.find((le) => le.uuid === X.uuid) !== X;
  }
  function pn(X) {
    return X.findLast((te, le) => (0, import_chunk_bzyb60p0.Pb)(te) && (0, import_chunk_bzyb60p0.eae)(te) && !(0, import_chunk_bzyb60p0.J2)(te.uuid) && te.uuid !== P && !Vn(te) && !((0, import_chunk_xfj2cwfv.ky)(te) && Vn(X[le + 1])))?.uuid;
  }
  function _n(X) {
    let te = r.findLastIndex((ce) => ce.uuid === X);
    if (te !== -1) {
      let ce = r[te];
      if (r.splice(te, 1), Cn(), C > te) {
        if (C--, L === X && !(0, import_chunk_bzyb60p0.chi)()) L = pn(r.slice(0, te)) ?? L;
        if (o) {
          (0, import_chunk_y53wbr8a.a)("tengu_tombstone_persisted_removal", { message_type: (0, import_chunk_78g0060s.f)(ce.type) });
          let ye = (0, import_chunk_f9x2f6cx.W)();
          (0, import_chunk_bzyb60p0.$Nt)(async () => {
            (0, import_chunk_bzyb60p0.sur)(X, g, ye).catch(import_chunk_k449cc64.i);
          });
        }
      }
      if (O > te) O--;
      if (R > te) R--;
    }
    let le = e.findLastIndex((ce) => ce.uuid === X);
    if (le !== -1) e.splice(le, 1);
  }
  function en(X) {
    let te = X;
    try {
      let le = X.compactMetadata.preservedMessages;
      if (!le) return X;
      let ce = new Map(e.map((st) => [st.uuid, st])), ye = le.uuids.filter((st) => ce.has(st));
      if (ye.length === le.uuids.length) return X;
      let { preservedSegment: je, ...Ue } = X.compactMetadata;
      te = { ...X, compactMetadata: { ...Ue, ...je && ye.length > 0 && { preservedSegment: { ...je, headUuid: ye[0], tailUuid: ye.at(-1) } }, preservedMessages: { ...le, uuids: ye } } };
      let ut = /* @__PURE__ */ new Set(), ct = /* @__PURE__ */ new Set();
      for (let st of ye) {
        let it = ce.get(st);
        if (it?.type !== "assistant" && it?.type !== "user") continue;
        let Kt = it.message?.content;
        for (let At of Array.isArray(Kt) ? Kt : []) if (At?.type === "tool_use") ut.add(At.id);
        else if (At?.type === "tool_result") ct.add(At.tool_use_id);
      }
      (0, import_chunk_y53wbr8a.a)("tengu_compact_preserved_not_in_conversation", { listed: le.uuids.length, dropped: le.uuids.length - ye.length, tailDropped: !ce.has(le.uuids.at(-1)), unpairedToolBlocksRemaining: (0, import_chunk_4smdap7r.U)([...ut], (st) => !ct.has(st)) + (0, import_chunk_4smdap7r.U)([...ct], (st) => !ut.has(st)) });
    } catch (le) {
      (0, import_chunk_k449cc64.i)(le);
    }
    return te;
  }
  async function An(X) {
    He("compaction"), await H;
    let te = X.compactMetadata.preservedMessages?.uuids.at(-1) ?? X.compactMetadata.preservedSegment?.tailUuid;
    if (!te) return;
    let le = e.findLastIndex((ce) => ce.uuid === te);
    if (le === -1) return;
    await Ft(e.slice(0, le + 1), void 0, void 0), C = 0, L = void 0;
  }
  function En(X) {
    let te = X.compactMetadata.preservedMessages, le = (0, import_chunk_4smdap7r.Qyn)(e, (Ue) => Ue.uuid), ce = (te?.allUuids ?? te?.uuids ?? []).map((Ue) => le.get(Ue)).filter((Ue) => Ue !== void 0).map(import_chunk_bzyb60p0.PHe);
    z = te && ce.length > 0 ? { preserved: ce, anchorUuid: te.anchorUuid } : null;
    let ye = e.length - 1;
    if (ye > 0) e.splice(0, ye);
    kt(X.uuid);
    let je = r.length - 1;
    if (je > 0) r.splice(0, je), Cn(), C = r.length, O = r.length, R = r.length;
  }
  function kt(X) {
    if (z !== null && z.anchorUuid === X) e.push(...z.preserved), z = null;
  }
  function Pn() {
    if (z === null) return;
    (0, import_chunk_y53wbr8a.a)("tengu_compact_preserved_unanchored", { preservedCount: z.preserved.length }), e.push(...z.preserved), z = null;
  }
  function Rn(X, te) {
    let le = -1;
    for (let ce = X; ce < te; ce++) {
      let ye = r[ce];
      if (be.has(ye)) {
        if (le === -1) le = ce;
      } else if ((0, import_chunk_865at33z.On)(ye)) le = -1;
      else if (ye.type === "assistant" || ye.type === "user") if (le === -1 || !(0, import_chunk_bzyb60p0.Sm)(ye)) le = -1;
      else r.splice(ce, 1), r.splice(le, 0, ye), Cn(), le++;
    }
    return le === -1 ? te : le;
  }
  function In(X, te) {
    if (!y) return te;
    let le = te, ce = false, ye = false;
    for (let je = te - 1; je >= X; je--) {
      let Ue = r[je], ut = (0, import_chunk_bzyb60p0.NMe)(Ue);
      if (Ue.type === "assistant" && (Ue.isApiErrorMessage !== true || je < O) || (0, import_chunk_865at33z.On)(Ue) || Ue.type === "user" && (Ue.isMeta !== true || Ue.promptSource !== void 0 && !(0, import_chunk_bzyb60p0.VY)(Ue)) && !ut && !be.has(Ue) && !(0, import_chunk_bzyb60p0.Rne)(Ue) && !(0, import_chunk_bzyb60p0.fHe)(Ue) && (Ue.promptSource !== void 0 || (0, import_chunk_xfj2cwfv.oct)(Ue) === void 0)) break;
      ce ||= ut, ye ||= (0, import_chunk_bzyb60p0.VY)(Ue), le = je;
    }
    return ce || ye ? le : te;
  }
  function qt(X) {
    for (let te of X) be.add(te);
    r.push(...X);
  }
  return { record: Mt, unrecorded: () => o ? r.slice(C) : [], appendHostRows: qt, isHostRow: (X) => be.has(X), noteResponseBegan: (X) => {
    if (X !== void 0 && X !== N) N = X, R = r.length;
  }, evict: _n, holdFoldCopy: Le, settleFoldCopies: Ve, writeHeldCallsAtShutdown: pe, dropPreservedRowsNotInConversation: en, flushBeforeCompactBoundary: An, applyCompactBoundary: En, settlePreservedTail: kt, flushUnanchoredPreservedTail: Pn };
}
function Xi(e, r) {
  try {
    return delete e.shownAsStoredIn, e.isVirtual === true || e.handedOff === true ? void 0 : r?.();
  } catch (o) {
    (0, import_chunk_k449cc64.i)(Error("could not ask the host for the mark of a reply that is shown as stored: a later worker will not send this reply again", { cause: o }));
    return;
  }
}
function Ji(e, r, o) {
  try {
    if (!o) e.shownAsStoredIn = r;
  } catch (g) {
    (0, import_chunk_k449cc64.i)(Error("could not mark a reply as shown as stored: a later worker will not send this reply again", { cause: g }));
  }
}
var Zi = 32, pl = 40;
function wEa(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return { ok: false, error: `apply_flag_settings requires \`settings\` to be an object, got ${e === null ? "null" : Array.isArray(e) ? "an array" : typeof e}` };
  let r = ra(e);
  if ((0, import_chunk_6mfepmbb.PJe)(r, Zi)) return { ok: false, error: `apply_flag_settings: settings nest deeper than ${Zi} levels` };
  return { ok: true, settings: r };
}
function kEa(e, r) {
  let { merged: o, stored: g, aliasWarnings: y } = ea(e);
  for (let P of y) (0, import_chunk_w578pjby.t)(`apply_flag_settings: ${P.message}`, { level: "warn" });
  if (!((0, import_util2.isDeepStrictEqual)(o, g) && (0, import_chunk_3t7ve0wy.Gm)() && !(0, import_chunk_gbskgz33.fp)() && !r())) (0, import_chunk_f9x2f6cx.oE)(o), import_chunk_trq47kfh.Ti.notifyChange("flagSettings");
  if ("viewMode" in e) (0, import_chunk_trq47kfh.QBn)();
}
function CVs(e) {
  try {
    let { merged: r, stored: o } = ea(e), { settings: g, errors: y } = (0, import_chunk_6mfepmbb.mMo)(r);
    if (g !== null || o !== null && (0, import_chunk_6mfepmbb.mMo)(o).settings === null) return;
    let h = y.filter((C) => C.severity !== "warning");
    for (let C of h) (0, import_chunk_w578pjby.t)(`apply_flag_settings: refused: ${C.path}: ${C.message}`, { level: "warn" });
    return `apply_flag_settings: nothing in this request was applied and earlier settings stay in force. Fix or remove these invalid settings and send it again: ${(0, import_chunk_4smdap7r.M)(h.map((C) => (0, import_chunk_7cfjrnwy.nt)(C.path, "."))).join(", ")}`;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`apply_flag_settings: layer check failed: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" }), (0, import_chunk_k449cc64.i)(Error("apply_flag_settings: layer check failed")), "apply_flag_settings failed";
  }
}
function i2o(e) {
  return (0, import_chunk_865at33z.na)() && (0, import_chunk_865at33z.xRl)({ settings: (0, import_chunk_2yx6c1y2.vt)(), fastMode: e });
}
function EEa(e, r) {
  let o = "ultracode" in e ? e.ultracode === true : void 0, g = typeof e.effortLevel === "object" && e.effortLevel !== null;
  if ("effortLevel" in e && !g && !(0, import_chunk_k67pwqya.Pwo)(r.model, e.effortLevel, r.getEngineState())) {
    let y = e.effortLevel == null ? void 0 : (0, import_chunk_k67pwqya.AZ)(e.effortLevel) ?? (0, import_chunk_k67pwqya._vt)(e.effortLevel);
    if (e.effortLevel == null || y !== void 0) {
      let P = (0, import_chunk_k67pwqya.uLe)(y), C = (0, import_chunk_k67pwqya.$2e)(e.effortLevel) === "ultracode";
      r.setEngineState((L) => {
        let O = o ?? (C || ((0, import_chunk_k67pwqya.xwo)(r.model, L, y) ? false : void 0)), R = L;
        if (!(0, import_chunk_k67pwqya.WRe)(R.sessionEffort, P)) R = { ...R, sessionEffort: P };
        if (O !== void 0 && (R.ultracode ?? false) !== O) R = { ...R, ultracode: O };
        return R;
      });
    }
    let h = e.effortLevel == null ? null : String(y ?? e.effortLevel);
    if (h === null || h.length <= pl) r.reportEffortMetadata(h);
  }
  if (o !== void 0) r.setEngineState((y) => (y.ultracode ?? false) === o ? y : { ...y, ultracode: o });
  return "effortLevel" in e || o !== void 0;
}
function ea(e) {
  let r = { ...ra(e) }, o = (0, import_chunk_xcgcdx61.fge)(r, "apply_flag_settings", { loneNullAlias: "rename" }), g = (0, import_chunk_f9x2f6cx.Fd)(), y = { ...g ?? {}, ...r };
  for (let h of Object.keys(y)) if (y[h] === null) delete y[h];
  return { merged: y, stored: g, aliasWarnings: o };
}
function ra(e) {
  let r = e[import_chunk_bzyb60p0.lno];
  if (r == null || (0, import_chunk_bzyb60p0.L4a)(r)) return e;
  return (0, import_chunk_w578pjby.t)(`apply_flag_settings: ${import_chunk_bzyb60p0.lno} must be null or an object with exactly "for" (the session's model, in the spelling the session holds; 1 to 256 characters) and "models" (a list of one to three model ids, each 1 to 256 characters: letters, digits, . _ : / @ [ ] -, starting with a letter or digit). The value sent was not, so it is read as null, which removes any earlier value if the request is applied.`, { level: "warn" }), { ...e, [import_chunk_bzyb60p0.lno]: null };
}
function sa({ turnThinking: e, heldThinking: r, turnModel: o, fastMode: g, toolPermissionContext: y }) {
  if (!(0, import_chunk_3t7ve0wy.Gm)() && !(0, import_chunk_3t7ve0wy._S)()) return {};
  try {
    let h = e.type === "disabled" ? void 0 : e.display, P = !(0, import_chunk_d1r21263.HVs)(h) && (h !== "highlights" || (0, import_chunk_bzyb60p0.Len)(o));
    return { ...(0, import_util.isDeepStrictEqual)(e, r()) && { client_thinking: { max_thinking_tokens: e.type === "disabled" ? 0 : e.type === "enabled" ? e.budgetTokens ?? null : null, thinking_display: (P ? h : void 0) ?? null } }, ...(0, import_chunk_2yx6c1y2._e)("flagSettings")?.switchModelsOnFlag === true && !(0, import_chunk_tfs0ssqe.Asl)("switchModelsOnFlag") && !g && !i2o(g) && !(0, import_chunk_tjja7dsj.wJn)(y, g) && ((0, import_chunk_865at33z.cI)((0, import_chunk_865at33z.dt)()) || !(0, import_chunk_xfj2cwfv.Jr)(y.mode)) && { flag_restate_noop: true } };
  } catch (h) {
    return (0, import_chunk_k449cc64.i)(h), {};
  }
}
function oa(e, r, o) {
  if (!o || r === void 0) return { left: false, kept: [], toAck: e };
  try {
    let g = r.uuid;
    return { left: true, kept: e.filter((y) => y.uuid === g), toAck: e.filter((y) => y.uuid !== g) };
  } catch (g) {
    return (0, import_chunk_cqa9hrgx.l)("headless_stop_marker_after_check", "split_threw"), (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`headless: could not find the Stop's interruption marker among the turn's rows, so sent none and acknowledged every row (${aa(g)})`, "headless: could not find the Stop's interruption marker among the turn's rows, so sent none and acknowledged every row")), { left: false, kept: [], toAck: e };
  }
}
function ia(e) {
  if (!e.left) return [];
  let r;
  try {
    r = e.kept.flatMap((o) => Array.from((0, import_chunk_wx3ay5nf.RO)(o.type === "user" ? { ...o, origin: void 0 } : o)));
  } catch (o) {
    return (0, import_chunk_cqa9hrgx.l)("headless_stop_marker_after_check", "frame_threw"), (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`headless: could not make the frame of the Stop's interruption marker, so sent none; the stopped result still went out (${aa(o)})`, "headless: could not make the frame of the Stop's interruption marker, so sent none; the stopped result still went out")), [];
  }
  if (r.length > 0) (0, import_chunk_cqa9hrgx.u)("headless_stop_marker_after_check");
  else (0, import_chunk_cqa9hrgx.l)("headless_stop_marker_after_check", e.kept.length === 0 ? "not_kept" : "no_frame");
  return r;
}
function aa(e) {
  try {
    return (0, import_chunk_jv7av99m.Qu)(e) ?? "unnamed error";
  } catch {
    return "unnamed error";
  }
}
var da = 0.03125;
function la(e) {
  try {
    if (!(0, import_chunk_3t7ve0wy.ta)() || Math.random() >= da || e.enqueuedWallMs === void 0 || e.previousTurnEndedWallMs === void 0 || e.enqueuedWallMs < e.previousTurnEndedWallMs) return;
    (0, import_chunk_y53wbr8a.a)("tengu_sdk_time_to_init", { waited_ms: Math.max(0, e.startWallMs - e.enqueuedWallMs), duration_ms: e.startToInitMs, sample_rate: da });
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function ua(e) {
  if (e === void 0) return {};
  try {
    let { builds: r, lapsed: o, movedAtLapse: g, limitMs: y } = e();
    return { tool_pool_build_count: r, tool_pool_build_lapsed_count: o, tool_pool_moved_at_lapse_count: g, ...y !== void 0 && { tool_pool_limit_ms: y } };
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`takeToolPoolBuildCounts threw; the result goes without its counts: ${(0, import_chunk_jv7av99m.d)(r)}`, "takeToolPoolBuildCounts threw")), {};
  }
}
var yl = 7e3, Ml = 3e3;
async function ma(e, r, o) {
  let g = Error("aborted");
  try {
    let y = await (0, import_chunk_5appeerh.me)((0, import_chunk_5appeerh.Tn)(Promise.resolve().then(e), o, () => g).then((h) => ({ value: h })), r);
    return y ? { how: "done", value: y.value } : { how: "late" };
  } catch (y) {
    return y === g ? { how: "aborted" } : { how: "failed", error: y };
  }
}
async function ca(e, r, o, g, y = {}) {
  let h = y.pollMs ?? yl, P = y.lookMs ?? Ml, { signal: C } = o.abortController, L = Date.now(), O = await (0, import_chunk_bzyb60p0.QUe)(e, r, o, { connectedGraceMs: h });
  function R(z, ie = {}) {
    let I = Date.now() - L;
    return (0, import_chunk_w578pjby.t)(`waitForDeviceBridgeTool: the wait for "${e}" ended as ${z} after ${I}ms`), { ...O, ...ie, waitedMs: I, aborted: C.aborted, bridgeEnd: z };
  }
  let N = () => R("aborted", { tool: void 0, tools: r });
  if (O.aborted || C.aborted) return N();
  if (O.tool) return R("in_pool");
  if (O.serverState !== "connected") return R(O.serverState === "unknown" ? "threw" : "not_connected");
  try {
    let z = (0, import_chunk_bzyb60p0.LPn)(e, o.options.toolAliases), ie = () => (0, import_chunk_bzyb60p0.nyt)(z, (0, import_chunk_4vsz8a99.Oc)(o)), I = (oe) => R(oe, { serverState: (0, import_chunk_bzyb60p0.rci)(ie()) }), V = ie().find((oe) => oe.type === "connected");
    if (!V) return I("not_connected");
    let J = await ma(() => (0, import_chunk_gvzh3pxp.Gon)(V, { signal: C, timeout: P }), P, C);
    if (J.how === "aborted" || C.aborted) return N();
    if (J.how === "late") return I("look_timed_out");
    if (J.how === "failed") return (0, import_chunk_w578pjby.t)(`waitForDeviceBridgeTool: tools/list on the device bridge failed: ${(0, import_chunk_jbjjrhxt.gl)(J.error, V.config)}`, { level: "warn" }), I("look_failed");
    let be = J.value.tools, se = Array.isArray(be) && be.some((oe) => typeof oe === "object" && oe !== null && "name" in oe && typeof oe.name === "string" && (0, import_chunk_px0hhsq7.lr)(V.name, oe.name) === z), he = (0, import_chunk_qdcbcsg7.Vct)(J.value), H = he === "stub" ? "stub" : he === "live" ? "live_without_tool" : "unmarked_without_tool";
    if (!se && (he === "stub" || !J.value.nextCursor)) return I(H);
    let ae, Q = await ma(() => (0, import_chunk_y8s4362z.FJ)(V, (oe, Oe) => {
      ae = (0, import_chunk_f9x2f6cx.nFr)(oe, Oe, V.config);
    }, g), P, C);
    if (Q.how === "aborted" || C.aborted) return N();
    let ge = (0, import_chunk_b83x8d52.ZI)(C);
    if (ge !== void 0) await ge;
    let pe = o.options.refreshTools?.() ?? r, De = (0, import_chunk_4vsz8a99.tn)(pe, e, o.options.toolAliases);
    if (De) return R("after_look", { tool: De, tools: pe });
    (0, import_chunk_w578pjby.t)(`waitForDeviceBridgeTool: refreshing the device bridge's tools did not bring "${e}" (${Q.how === "failed" ? (0, import_chunk_jbjjrhxt.gl)(Q.error, V.config) : Q.how === "done" ? `${Q.value.status}, ${ae === void 0 ? "nothing swapped" : ae ? "swapped in" : "the swap was refused"}` : "not in time"})`, { level: "warn" });
    let Ae = Q.how === "done" && Q.value.status === "refreshed" ? Q.value.newTools : void 0;
    if (se || Ae && (0, import_chunk_4vsz8a99.tn)(Ae, e, o.options.toolAliases)) return I("listed_not_pooled");
    if (Ae) return I(H);
    return I(Q.how === "late" ? "look_timed_out" : "look_failed");
  } catch (z) {
    return (0, import_chunk_k449cc64.i)(z), R("threw", { tool: void 0, tools: r, serverState: "unknown" });
  }
}
async function pa(e, r) {
  let o = { command: `cd ${(0, import_chunk_vh92d4r0.No)([e])}` }, g = `${(0, import_crypto4.randomUUID)()}${import_chunk_37zqqqnw.Tae}`, y = await (0, import_chunk_bzyb60p0.v6)(import_chunk_bzyb60p0.ii, o, { ...r, permissionRound: void 0, localDenialTracking: (0, import_chunk_bzyb60p0.a5)(), clientRequestedToolUseId: g }, (0, import_chunk_bzyb60p0.La)({ content: [] }), g), h = y.decisionReason === void 0 && (0, import_chunk_4vsz8a99.Ile)(r.session, import_chunk_bzyb60p0.ii.name) !== void 0;
  if (y.behavior !== "allow" || !(h || fa(y.decisionReason))) return (0, import_chunk_w578pjby.t)(`Shell not moved to ${e} for a stored approval: the permission check on the cd returned ${y.behavior} (${y.decisionReason?.type ?? "no reason"}), and only an allow from a rule, the mode, Bash's own checks, the classifier or the tool container moves it`, { level: "warn" }), { endedWell: false };
  let P = (0, import_chunk_37zqqqnw.non)(y);
  try {
    await import_chunk_bzyb60p0.ii.call(o, { ...r, innerCall: true, keepsSandboxOn: true, toolUseId: g, allowGivenBy: P && { toolUseId: g, approver: P } });
  } catch (C) {
    if (C instanceof import_chunk_ha393e1n.zDe) return (0, import_chunk_w578pjby.t)(`Shell not moved to ${e} for a stored approval: ${C.message}`, { level: "warn" }), { endedWell: false, why: C.message };
    if (!(C instanceof import_chunk_jv7av99m.ST || C instanceof import_chunk_4vsz8a99.H2e)) throw C;
    return (0, import_chunk_w578pjby.t)(`Shell may not have moved to ${e} for a stored approval: the cd failed (${C instanceof import_chunk_jv7av99m.ST ? `exit code ${C.code}` : C.code ?? C.message}); the directory may be missing, or the cd may not have run`, { level: "warn" }), { endedWell: false, ...C instanceof import_chunk_4vsz8a99.H2e && { why: C.message } };
  }
  return { endedWell: true };
}
function fa(e) {
  switch (e?.type) {
    case "rule":
    case "mode":
      return true;
    case "classifier":
      return e.classifierAllowed === true;
    case "other":
      return e.reason === import_chunk_pbteexar.YFe || e.reason === import_chunk_pbteexar.pOe;
    case "subcommandResults":
      return e.reasons.size > 0 && [...e.reasons.values()].every((r) => r.behavior === "allow" && fa(r.decisionReason));
    case "hook":
    case "permissionPromptTool":
    case "asyncAgent":
    case "sandboxOverride":
    case "workingDir":
    case "safetyCheck":
    case void 0:
      return false;
  }
}
function _a({ behavior: e, outcome: r, toolUseID: o, behindNewInput: g, assistantMessage: y, messages: h, turnStartTools: P, toolAliases: C }) {
  let L = (J) => o !== void 0 && J.type === "user" && Array.isArray(J.message?.content) ? J.message.content.find((be) => be?.type === "tool_result" && be.tool_use_id === o) : void 0, O = h.findLast((J) => L(J) !== void 0), R = O && L(O), N = import_chunk_3grsnd7a.fhn.find((J) => O?.type === "user" && J === O.toolDenialKind), z = o !== void 0 && Array.isArray(y?.message?.content) ? y.message.content.find((J) => J?.type === "tool_use" && J.id === o) : void 0, ie = z && (0, import_chunk_b83x8d52.Dh)(r.toolWait?.tools ?? P, z.name, C), I = h.findIndex((J) => J.uuid === g?.closingRow), V = h.findIndex((J) => J.uuid === y?.uuid);
  return { answer_behavior_kind: e === "allow" || e === "deny" ? e : "other", answer_outcome_kind: r.reExecuted ? "applied" : r.reason, call_result_kind: R?.type !== "tool_result" ? "none" : N ?? (!R.is_error ? "ok" : r.callStarted ? "error" : "error-not-started-here"), call_concurrency_kind: z === void 0 ? "no_call" : ie === void 0 ? "tool_not_loaded" : (0, import_chunk_wx3ay5nf.Oqo)(ie, z.input) ? "safe" : "unsafe", call_is_for_device_bridge: typeof z?.name === "string" && (0, import_chunk_px0hhsq7.mr)(z.name)?.serverName === import_chunk_qdcbcsg7.$n, waited_for_tool_ms: r.toolWait?.waitedMs ?? 0, tool_server_state_kind: r.toolWait?.serverState ?? "no_wait", tool_server_state_at_start_kind: r.toolWait?.initialServerState ?? "no_wait", tool_server_transport_kind: (r.reExecuted ? void 0 : r.missingTool?.serverTransport) ?? "none", device_bridge_wait_end_kind: r.toolWait?.bridgeEnd ?? "did_not_wait_for_computer", note_stored: r.noteStored === true, ...g !== void 0 && { behind_new_input: true, same_tool_called_since: I !== -1 && h.slice(I, V === -1 ? void 0 : V).some((J) => J.type === "assistant" && Array.isArray(J.message?.content) && J.message.content.some((be) => be?.type === "tool_use" && be.name === z?.name)) }, card_step_again_kind: (r.reExecuted ? r.cardStep : void 0) ?? "not_run", card_step_differs_kind: (r.reExecuted ? r.cardStepDiffers : void 0) ?? "none", card_files_folder_kind: (r.reExecuted ? r.cardStepFolder : void 0) ?? "none" };
}
function bl(e) {
  try {
    return (0, import_chunk_4smdap7r.U)(e.slice(e.findLastIndex((r) => r.type === "assistant" || r.type === "user" && Array.isArray(r.message.content) && r.message.content[0]?.type === "tool_result") + 1), (r) => r.type === "attachment" && (0, import_chunk_bzyb60p0.cSe)(r).messages.length > 0);
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`attachmentRowsAtTail threw; reporting 0: ${(0, import_chunk_jv7av99m.d)(r)}`, "attachmentRowsAtTail threw")), 0;
  }
}
function ya({ orphanedPermission: e, handedOffTurn: r, deferredToolUse: o }) {
  if (e) return "orphaned_permission";
  if (r) return "turn_handoff";
  return o ? "deferred_tool_use" : "none";
}
async function* ha({ orphanedPermission: e, handedOffTurn: r, beginTranscriptFlush: o, awaitStagedFiles: g, placeFilesByName: y, placeCarriedWrites: h, handoffRelay: P, deferredToolUse: C, hasPrompt: L, tools: O, mutableMessages: R, processUserInputContext: N, canUseTool: z, answers: ie, persistSession: I, earlyResult: V, onHandedOffCallsRan: J, onOrphanedAnswerSettled: be, keptDeferredToolNotice: se, dropsUnavailableDeferredTool: he }) {
  if (e || r || C) try {
    (0, import_chunk_sjqze7qg.A7a)(N.session.host);
  } catch (Ae) {
    (0, import_chunk_k449cc64.i)(Ae);
  }
  let H = R.length, ae = () => C !== void 0 && (e?.denyIsRefusal === true || tht()) && (0, import_chunk_wx3ay5nf.qHa)(R, H, (0, import_chunk_bzyb60p0.Aie)(C)), Q = () => (0, import_chunk_08bv0y93.lue)({ startedAt: V.startedAt, common: { is_error: false, duration_api_ms: 0, num_turns: 0, stop_reason: null, session_id: (0, import_chunk_f9x2f6cx.W)(), total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), usage: V.usage, modelUsage: (0, import_chunk_f9x2f6cx.k$)(), permission_denials: V.permissionDenials, fast_mode_state: (0, import_chunk_865at33z.ohe)(V.mainLoopModel, V.fastMode), fast_mode_disabled_reason: (0, import_chunk_865at33z.$N)() ?? (0, import_chunk_865at33z.rhe)(V.mainLoopModel, V.fastMode) ?? void 0, origin: V.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(N.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, variant: { subtype: "success", result: "", ...V.sendEcho, ...V.resumeReasonStamp } }), ge = () => (0, import_chunk_08bv0y93.lue)({ startedAt: V.startedAt, common: { is_error: true, duration_api_ms: 0, num_turns: 0, stop_reason: null, session_id: (0, import_chunk_f9x2f6cx.W)(), total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), usage: V.usage, modelUsage: (0, import_chunk_f9x2f6cx.k$)(), permission_denials: V.permissionDenials, terminal_reason: "aborted_tools", fast_mode_state: (0, import_chunk_865at33z.ohe)(V.mainLoopModel, V.fastMode), fast_mode_disabled_reason: (0, import_chunk_865at33z.$N)() ?? (0, import_chunk_865at33z.rhe)(V.mainLoopModel, V.fastMode) ?? void 0, origin: V.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(N.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, variant: { subtype: "error_during_execution", errors: ["turn_handoff: the turn was stopped before any of its calls ran"], ...V.sendEcho ?? { user_message_uuid: void 0 }, ...V.resumeReasonStamp } });
  if (e) {
    if ((0, import_chunk_xfj2cwfv.Rke)([e]), (0, import_chunk_z2xw6net.rhs)(), (0, import_chunk_gq1dr8pm._ul)(e.answerEventUuid), e.cardInput !== void 0) (0, import_chunk_bzyb60p0.S6a)(N.session);
    let Ae = (0, import_chunk_wx3ay5nf.kJs)(R), oe = yield* (0, import_chunk_wx3ay5nf.GHa)(e, O, z, R, N, ca, ie, pa);
    if (!oe.reExecuted) (0, import_chunk_xfj2cwfv.Cmn)("turn_start_resume"), e.behindNewInput?.endUnrun(oe.reason === "aborted" ? "stopped" : oe.reason === "asked_again" ? "asked_again" : "call_gone");
    try {
      let Ve = _a({ behavior: e.permissionResult?.behavior, outcome: oe, toolUseID: e.permissionResult?.toolUseID, behindNewInput: e.behindNewInput, assistantMessage: e.assistantMessage, messages: R, turnStartTools: O, toolAliases: N.options.toolAliases });
      if (Ve.answer_outcome_kind !== "asked_again") (0, import_chunk_42tcgre6.q)("info", "cli_orphan_answer_settled", { ...Ve, card_step_differs_kind: void 0, card_files_folder_kind: void 0, behind_new_input: void 0, same_tool_called_since: void 0 });
      if (e.nobodyAnswered !== true) be?.(Ve);
    } catch (Ve) {
      (0, import_chunk_k449cc64.i)(Ve);
    }
    let Oe = { waited_ms: oe.toolWait?.waitedMs ?? 0, server_state: (0, import_chunk_78g0060s.fe)(oe.toolWait?.serverState), server_state_at_start: (0, import_chunk_78g0060s.fe)(oe.toolWait?.initialServerState), device_bridge_wait_end: (0, import_chunk_78g0060s.fe)(oe.toolWait?.bridgeEnd), resumes_interrupted_turn: e.resumesInterruptedTurn === true }, Le = e.permissionResult?.behavior, He = oe.reExecuted ? void 0 : oe.missingTool, lt = { answer_behavior: (0, import_chunk_78g0060s.f)(Le === "allow" || Le === "deny" ? Le : "other"), tool_departure_cause: (0, import_chunk_78g0060s.fe)(He?.departureCause), server_transport: (0, import_chunk_78g0060s.fe)(He?.serverTransport), server_is_device_bridge: He?.serverIsDeviceBridge, server_tools_list_failed: He?.serverToolsListFailed, server_tools_in_pool: (0, import_chunk_78g0060s.fe)(He?.serverToolsInPool) };
    if (oe.reExecuted) (0, import_chunk_y53wbr8a.a)("tengu_orphaned_permission_applied", { found_on_reread: oe.toolWait !== void 0, ...Oe });
    if (!oe.reExecuted && oe.reason === "closed_unrun") (0, import_chunk_y53wbr8a.a)("tengu_orphaned_permission_closed_unrun", { ...Oe, ...lt });
    if (!oe.reExecuted && oe.reason !== "closed_unrun" && !L && (!C || ae())) {
      if (oe.reason === "aborted") return false;
      let Ve = { reason: (0, import_chunk_78g0060s.f)(oe.reason), ...Oe, ...lt };
      if (e.resumesInterruptedTurn && !e.siblings?.length && Ae) return (0, import_chunk_w578pjby.t)("Orphaned permission could not be applied; it stood in for the interrupted turn it was parked on, so the turn proceeds to the model on the interrupted prompt"), (0, import_chunk_y53wbr8a.a)("tengu_orphaned_permission_unapplied_turn_resumed", Ve), false;
      return (0, import_chunk_w578pjby.t)("Orphaned permission could not be applied, or left a served call unsettled, and the turn has no prompt: ending the turn without a model call"), (0, import_chunk_y53wbr8a.a)("tengu_orphaned_permission_unapplied_turn_end", Ve), yield Q(), true;
    }
  }
  if (r) {
    (0, import_chunk_xfj2cwfv.Cmn)("turn_start_resume"), (0, import_chunk_z2xw6net.rhs)();
    let Ae = Si(N.session, r.messages, R, N.storageV5), oe = bl(R), Oe = r.memoryLine?.attachment;
    if (Oe?.type === "cowork_memory_context") try {
      if (Oe.version !== null) (0, import_chunk_sjqze7qg.S7a)(N.session.host, Oe.version);
      else (0, import_chunk_sjqze7qg.b7a)(N.session.host);
    } catch (He) {
      (0, import_chunk_k449cc64.i)(He);
    }
    let Le;
    try {
      Le = yield* (0, import_chunk_wx3ay5nf.KHa)(r, O, R, N, z, o, P, async (He) => {
        try {
          await Ae.beforeRun();
        } finally {
          if (g) await (0, import_chunk_w4dc83v7.Brn)("resume_other", "resume_staged_files_wait", () => g(He));
          await y?.(r, He);
        }
      }, h);
    } finally {
      if (P && r.relayMarker !== void 0 && r.kind !== "stopped") try {
        P.noteHandoffMarkerFate(r.kind, Le === void 0 ? "unfinished" : Le.ran ? "ran" : Le.reason);
      } catch (He) {
        (0, import_chunk_k449cc64.i)(He);
      }
    }
    if (await Ae.catchUp((0, import_chunk_wx3ay5nf.VHa)(Le)), Le.ran) J(Le.contextLayers);
    if ((0, import_chunk_y53wbr8a.a)("tengu_turn_handoff_run", { ran: Le.ran, reason: (0, import_chunk_78g0060s.fe)(Le.ran ? void 0 : Le.reason), kind: (0, import_chunk_78g0060s.f)(r.kind), tool_uses: r.toolUseIDs.length, carried_messages: r.messages.length, has_memory_context: r.memoryLine !== void 0, has_relay_marker: r.relayMarker !== void 0, attachment_rows_ahead: oe }), !Le.ran && (r.kind === "stopped" || Le.reason === "stopped_closed" || Le.reason === "stopped_unconfirmed")) return yield ge(), true;
    if (!Le.ran && Le.reason === "history_appended") return yield Q(), true;
    if (!Le.ran && !L && !C) return yield Q(), true;
  }
  if (!C) return false;
  (0, import_chunk_xfj2cwfv.Cmn)("turn_start_resume"), (0, import_chunk_865at33z.jOl)(), (0, import_chunk_z2xw6net.rhs)();
  let pe = (Ae, oe) => (0, import_chunk_08bv0y93.lue)({ startedAt: V.startedAt, common: { is_error: oe, duration_api_ms: 0, num_turns: R.length, stop_reason: oe ? "tool_deferred_unavailable" : "tool_deferred", session_id: (0, import_chunk_f9x2f6cx.W)(), total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), usage: V.usage, modelUsage: (0, import_chunk_f9x2f6cx.k$)(), permission_denials: V.permissionDenials, ...oe && { terminal_reason: "tool_deferred_unavailable" }, fast_mode_state: (0, import_chunk_865at33z.ohe)(V.mainLoopModel, V.fastMode), fast_mode_disabled_reason: (0, import_chunk_865at33z.$N)() ?? (0, import_chunk_865at33z.rhe)(V.mainLoopModel, V.fastMode) ?? void 0, origin: V.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(N.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, variant: { subtype: "success", result: oe ? se ?? "" : "", ...(oe || !L) && V.sendEcho, ...(oe || !L) && V.resumeReasonStamp, deferred_tool_use: { id: Ae.toolUseID, name: Ae.toolName, input: Ae.toolInput } } });
  if (ae()) return (0, import_chunk_w578pjby.t)(`Deferred tool resume: ${C.toolUseID} already has this turn's result; not run again`), false;
  if (!(0, import_chunk_b83x8d52.Dh)(C.script !== void 0 ? require("/$bunfs/root/chunk-6nfqwb5z.js").scriptToolsOfPool(O, (0, import_chunk_bz1f2qnq.Z)(N), N.primitiveToolGrant) : O, C.toolName, N.options.toolAliases)) {
    (0, import_chunk_w578pjby.t)(`Deferred tool resume: tool '${C.toolName}' is no longer available (MCP server disconnected or tool removed)`, { level: "warn" });
    try {
      if (he) yield* (0, import_chunk_wx3ay5nf.WHa)(C, O, R, I, N);
      else if (se !== void 0 && I) await (0, import_chunk_bzyb60p0._E)([...R, (0, import_chunk_bzyb60p0.Ut)(C)], void 0, void 0, void 0, N.storageV5);
    } catch (Ae) {
      if ((0, import_chunk_jv7av99m.fn)(Ae) || (0, import_chunk_jv7av99m.w)(Ae) === "ENOSPC") (0, import_chunk_w578pjby.t)(`Deferred tool resume: not recorded: ${(0, import_chunk_jv7av99m.d)(Ae)}`, { level: "error" });
      else (0, import_chunk_k449cc64.i)(Ae);
    }
    return yield pe(C, true), true;
  }
  let De = yield* (0, import_chunk_wx3ay5nf.jHa)(C, z, R, N);
  if (!De) return false;
  if (I) await (0, import_chunk_bzyb60p0._E)(R, void 0, void 0, void 0, N.storageV5);
  return yield pe(De, false), true;
}
async function Sa(e) {
  (0, import_chunk_k5jn5rx9.wb)("before_skills_plugins");
  let r = performance.now(), o = await Promise.all([(0, import_chunk_bzyb60p0.S3e)((0, import_chunk_rb36kwbn.zC)(), e), (0, import_chunk_bzyb60p0.pi)(e).then(import_chunk_xhqwsnqh.yfn)]);
  return (0, import_chunk_zjhyjv3y.zo)("qe_plugin_skills_load_ms", performance.now() - r, r), (0, import_chunk_k5jn5rx9.wb)("after_skills_plugins"), o;
}
function Ta({ shouldQuery: e, fromUserInput: r, fromOptions: o }) {
  (0, import_chunk_k5jn5rx9.wb)("system_message_yielded"), (0, import_chunk_42tcgre6.q)("info", "cli_ask_should_query_resolved", { should_query: e, from_user_input: r, from_options: o });
}
function ka() {
  if (!(0, import_chunk_3t7ve0wy.Ol)() || import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_AUTH_ENV_VAR) return [];
  let e = Ma((0, import_chunk_2yx6c1y2._e)("policySettings")), r = import_chunk_zhr7rpv7.pLr.filter((y) => (0, import_chunk_5e3gtsn9.yks)({ [y]: e.get(y) ?? "" }));
  if (r.length === 0 || !(0, import_chunk_vyzg3yfa.kYe)()) return [];
  let o = vl().map(Ma), g = r.filter((y) => o.some((h) => h.get(y) === e.get(y)));
  return g.includes("ANTHROPIC_BASE_URL") ? g : g.filter((y) => y !== "CLAUDE_CODE_USE_GATEWAY");
}
function Ma(e) {
  return new Map(Object.entries(e?.env ?? {}).map(([r, o]) => [(0, import_chunk_cg8dqz0a.x)() === "windows" ? r.toUpperCase() : r, o]));
}
function vl() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return (0, import_chunk_2yx6c1y2.Loe)();
  return [(0, import_chunk_xcgcdx61.nc)() ? (0, import_chunk_2yx6c1y2.lKt)().settings : null, (0, import_chunk_2yx6c1y2.Tz)().settings, (0, import_chunk_2yx6c1y2.SB)() ? (0, import_chunk_6mfepmbb.kut)(import_chunk_dqanqm2x.wI, (0, import_chunk_r3mm3x33.Br)()).settings : null];
}
var Al = require("/$bunfs/root/chunk-cc0f961n.js").getCoordinatorUserContext;
function Tr({ userSpecifiedModel: e, permissionMode: r, thinkingConfig: o }) {
  let g = e && ((0, import_chunk_865at33z.KT)(e) || (0, import_chunk_865at33z.wo)(e)) ? (0, import_chunk_865at33z.jt)(e) : (0, import_chunk_865at33z.dt)(), y = (0, import_chunk_865at33z.lI)({ permissionMode: r, setting: (0, import_chunk_865at33z.Ld)(), mainLoopModel: g });
  return { mainLoopModel: g, runtimeModel: y, thinkingConfig: o ? o : (0, import_chunk_865at33z.ahe)() !== false ? { type: "adaptive" } : { type: "disabled" } };
}
async function Fs(e) {
  let { session: r, tools: o, runtimeModel: g, customSystemPrompt: y, excludeDynamicSections: h, cacheBreakerPhrase: P, mcpClients: C, sectionsInView: L, storageV5: O, credentials: R } = e;
  (0, import_chunk_k5jn5rx9.wb)("before_getSystemPrompt");
  let N = performance.now(), { defaultSystemPrompt: z, userContext: ie, systemContext: I } = await (0, import_chunk_j2nb09zj.QVo)({ session: r, tools: o, mainLoopModel: g, customSystemPrompt: y, excludeDynamicSections: h, cacheBreakerPhrase: P, sectionsInView: L, storageV5: O, credentials: R });
  (0, import_chunk_zjhyjv3y.zo)("qe_system_prompt_ms", performance.now() - N, N), (0, import_chunk_k5jn5rx9.wb)("after_getSystemPrompt");
  let V = { ...ie, ...Al(C, import_chunk_aw5nczax.Nte.getAllBaseTools, (0, import_chunk_p1ewvgeh.YO)() ? (0, import_chunk_p1ewvgeh.Fx)() ?? void 0 : void 0, o) };
  return { systemPrompt: await ba(z, e), userContext: V, systemContext: I };
}
async function wa(e) {
  return ba(await (0, import_chunk_j2nb09zj.JVo)({ ...e, mainLoopModel: e.runtimeModel }), e);
}
async function ba(e, { tools: r, runtimeModel: o, customSystemPrompt: g, appendSystemPrompt: y, appendSystemPromptHead: h, mcpClients: P }) {
  let C = g !== void 0 && (0, import_chunk_865at33z.eAt)() ? await (0, import_chunk_p1ewvgeh.fEr)((0, import_chunk_ge3qft6b.TZ)(o)) : null, L = (0, import_chunk_sjqze7qg.dbt)((0, import_chunk_4mh8nmh5.KBt)(g, e), { model: o, tools: r, mcpClients: P, memoryMechanicsPrompt: C, appendSystemPrompt: void 0 }), O = h ? (0, import_chunk_eh2gjex9.hva)(L, y, h, (0, import_chunk_865at33z.QZ)()) : void 0, R = O ? O.append : y;
  return (0, import_chunk_4mh8nmh5.Sl)([...O ? O.base : L, ...R ? [R] : []]);
}
function El(e) {
  try {
    return (0, import_chunk_zd24r3fj.due)() ? void 0 : (0, import_chunk_p1ewvgeh.vjt)(e);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
    return;
  }
}
function Pl(e, r) {
  try {
    return a2o(e, r, import_chunk_wddxyb00.Yh.of(e).active?.sessionWriters())?.spelled;
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function Rl(e) {
  try {
    return (0, import_chunk_3t7ve0wy.Wu)() && import_chunk_c203g5kd.s.CLAUDE_CODE_SPAWNED_BY_SERVER === void 0 && !(0, import_chunk_wddxyb00.N5e)(e) ? ka() : void 0;
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    return;
  }
}
async function va({ session: e, tools: r, mcpClients: o, model: g, readSessionEffort: y, permissionMode: h, commands: P, agents: C, skills: L, plugins: O, fastMode: R, proactivityState: N, capabilities: z, messagesInView: ie }) {
  if (await (0, import_chunk_865at33z.pz)().warmCanonicalWcRoot(), (0, import_chunk_cg8dqz0a.x)() === "windows") await (0, import_chunk_d775ds6c.e1)();
  let I = performance.now(), V = (0, import_chunk_wddxyb00.rm)(e), J = (0, import_chunk_f9x2f6cx.oFr)(), be = (0, import_chunk_k5r71ad2.QVs)(g, (0, import_chunk_f9x2f6cx.ao)()) ? [import_chunk_zd24r3fj.qva] : [], se = () => ({ redactsWhatItPersists: V, isRemoteTransport: import_chunk_wddxyb00.Yh.of(e).active?.isRemoteTransport() === true, sessionWriters: import_chunk_wddxyb00.Yh.of(e).active?.sessionWriters() }), he = (0, import_chunk_zd24r3fj.H8t)({ ...V ? (0, import_chunk_zd24r3fj.dzr)() : (0, import_chunk_zd24r3fj.PJn)(), tools: r, mcpClients: o.filter((H) => !(0, import_chunk_271xsh6x.X5)(H)).filter((H) => !(0, import_chunk_271xsh6x.fre)(H)).map((H) => ({ name: H.name, type: H.type, source: (0, import_chunk_ts09sys6.XH)(H.name, H.config) })), model: g, permissionMode: h, proactivity: gGr(N), ...{}, droppedAdministratorRoute: Rl(e), commands: (0, import_chunk_tfs0ssqe.$$t)(P), agents: C, skills: L, plugins: V ? [] : O.enabled, additionalDirectories: V ? void 0 : El(N.toolPermissionContext), syncedSkillsPath: Pl(e, N.toolPermissionContext), pluginErrors: V ? [] : [...O.errors, ...(0, import_chunk_bzyb60p0.aGa)(e)].filter(import_chunk_bzyb60p0.n5a).filter((H) => !(0, import_chunk_bzyb60p0.Hns)(H, O.enabled)).map((H) => {
    if ((0, import_chunk_wddxyb00.N5e)(e) && (0, import_chunk_bzyb60p0.ymi)(H)) return { plugin: H.source, type: H.type, message: import_chunk_bzyb60p0.o5a };
    let ae = (0, import_chunk_bzyb60p0.stn)(H);
    return { plugin: H.source, type: H.type, message: (0, import_chunk_mgntjepj.mb)(H), ...ae !== void 0 && { path: ae }, ...H.type === "generic-error" && H.managedLock !== void 0 && { managed_lock: { plugin_enabled: H.managedLock.enabled, name: H.managedLock.name, ...H.managedLock.marketplace !== void 0 && { marketplace: H.managedLock.marketplace } } } };
  }), mcpServerErrors: V ? [] : (0, import_chunk_eh2gjex9.pva)(), pluginWarnings: V ? [] : O.warnings.filter((H) => H.type !== "plugin-subagent-status-line-deprecated" && ((0, import_chunk_xcgcdx61.cce)(H.source) || H.type === "version-list-not-enabled")).map((H) => ({ plugin: H.source, type: H.type, message: (0, import_chunk_mgntjepj.Vwe)(H) })), fastModeState: (0, import_chunk_865at33z.ohe)(g, R), fastModeDisabledReason: (0, import_chunk_865at33z.$N)() ?? (0, import_chunk_865at33z.rhe)(g, R) ?? void 0, perTurnEffortActive: (0, import_chunk_bzyb60p0.e4a)(g), ultrathinkAvailable: (0, import_chunk_bzyb60p0.t4a)(g, y), ultrathinkTypedRaises: (0, import_chunk_bzyb60p0.Bto)(g, y), viewMode: (0, import_chunk_trq47kfh.Yat)(), capabilities: z?.concat(be) ?? [...import_chunk_zd24r3fj.Xva, ...import_chunk_wddxyb00.Yh.of(e).active?.commandLifecycleForwarderInstalled === true ? [import_chunk_zd24r3fj.Ova] : [], ...import_chunk_wddxyb00.Yh.of(e).active?.isRemoteTransport() === true ? [import_chunk_zd24r3fj.Mva] : [], ...mJn.peek(e)?.honoured === true ? [import_chunk_zd24r3fj.Hva] : [], ...(0, import_chunk_tteqedwm.p7t)(r, e, ie), ...(0, import_chunk_bzyb60p0.YQt)() && (0, import_chunk_bzyb60p0.ndi)(r) ? [import_chunk_bzyb60p0.tza] : [], ...(0, import_chunk_xfj2cwfv.y5i)(), ...ni(e, h) ? [Zo] : [], ...(0, import_chunk_dfgwgq6h.kva)(import_chunk_wddxyb00.Yh.of(e).active), ...J === "accepted" ? [(0, import_chunk_bzyb60p0.$ts)() ? import_chunk_zd24r3fj.Uva : import_chunk_zd24r3fj.$va] : J === "refused" ? [import_chunk_zd24r3fj.Bva] : [], ...V ? [] : [import_chunk_zd24r3fj.Dva], ...V ? [] : [import_chunk_zd24r3fj.Fva], ...(0, import_chunk_dfgwgq6h.CJn)(se), ...(0, import_chunk_dfgwgq6h.nzr)(se), ...(0, import_chunk_zd24r3fj.ozr)(se()), ...(0, import_chunk_zd24r3fj.szr)(se()), ...Qo(e) ? [import_chunk_zd24r3fj.Lva] : [], import_chunk_zd24r3fj.Vva, ...be, import_chunk_zd24r3fj.Kva, ...(0, import_chunk_zd24r3fj.zva)(), ...(0, import_chunk_kb3nnh8q.Fzr)(), ...(0, import_chunk_zd24r3fj.RJn)(r) ? [import_chunk_zd24r3fj.lzr] : [], ...(0, import_chunk_fc3gfgch.Sho)(), ...import_chunk_wddxyb00.Yh.of(e).transportPersists === true ? [import_chunk_zd24r3fj.Wva] : [], ...(0, import_chunk_dfgwgq6h.ezr)(se), ...(0, import_chunk_dfgwgq6h.tzr)(se), ...(0, import_chunk_zd24r3fj.izr)(se()), ...(0, import_chunk_zd24r3fj.azr)(se()), ...import_chunk_wddxyb00.Yh.of(e).transportPersists === true ? [import_chunk_zd24r3fj.rzr] : [], import_chunk_zd24r3fj.Yva, ...[]] });
  return (0, import_chunk_zd24r3fj.czr)(he, I), he;
}
function Mr(e, r) {
  let { getAppState: o, setAppState: g, setSDKStatus: y, tools: h } = e, P = (0, import_chunk_bzyb60p0.b3e)({ permissionMode: r.appState.toolPermissionContext.mode, setting: (0, import_chunk_865at33z.Ld)(), mainLoopModel: r.mainLoopModel, messages: r.messages }), C = () => o().fileHistory, L = (O) => {
    g((R) => {
      let N = (0, import_chunk_bzyb60p0.z4e)(R.fileHistory, O, e.storageV5);
      if (N === R.fileHistory) return R;
      return { ...R, fileHistory: N };
    });
  };
  return { renderedSystemPrompt: e.renderedSystemPrompt, messages: r.messages, messageQueue: e.messageQueue, session: e.session, turnStartIndex: 0, modelFacts: r.modelFacts?.model === P ? r.modelFacts : (0, import_chunk_bzyb60p0.Il)(P), loopModel: r.mainLoopModel, primitiveToolGrant: e.primitiveToolGrant, ...r.phase === "query" && { permissionLayers: r.permissionLayers, stopsAtToolGap: e.stopsAtToolGap, queuedCallsForMove: e.queuedCallsForMove, subscribeRetryWake: e.subscribeRetryWake, saveForkParams: import_chunk_bzyb60p0.bIn }, setMessages: r.phase === "input" ? r.setMessages : () => {
  }, applyMessageOp: r.phase === "input" ? r.applyMessageOp : () => {
  }, onChangeAPIKey: () => {
  }, onPermissionDenial: e.onPermissionDenial, requestDialog: e.requestDialog, permissionRelays: import_chunk_hemc71zd.lMe, sessionState: e.sessionState, agentContext: (0, import_chunk_865at33z.Cu)(), options: { commands: e.commands, debug: false, tools: h, toolCatalog: e.toolCatalog ?? import_chunk_aw5nczax.Nte, refreshTools: e.refreshTools, admitsMcpTool: e.admitsMcpTool, refreshMcpClients: e.refreshMcpClients, verbose: e.verbose, mainLoopModel: r.mainLoopModel, fallbackModel: e.fallbackModel, getPlanModeSetting: import_chunk_865at33z.Ld, thinkingConfig: e.thinkingConfig, mcpClients: e.mcpClients, mcpResources: {}, ideInstallationStatus: null, isNonInteractiveSession: true, runQuery: import_chunk_k5r71ad2.t6, customSystemPrompt: e.customSystemPrompt, ...e.customSystemPrompt !== void 0 && { omitGitStatus: true }, appendSystemPrompt: e.appendSystemPrompt, planModeInstructions: e.planModeInstructions, systemPromptSnapshot: e.systemPromptSnapshot, appendSubagentSystemPrompt: e.appendSubagentSystemPrompt, toolAliases: e.toolAliases, excludeDynamicSections: e.excludeDynamicSections, agentDefinitions: { activeAgents: e.agents, allAgents: [], allowedAgentTypes: e.allowedAgentTypes }, theme: (0, import_chunk_7gv3ezdz.Jnr)((0, import_chunk_8m5q5cts.ll)("theme", "dark").value), maxBudgetUsd: e.maxBudgetUsd, messageClientPlatform: e.messageClientPlatform, forwardSubagentText: e.forwardSubagentText, ...r.phase === "query" && { activeSkill: r.activeSkill }, requiresStructuredOutput: e.requiresStructuredOutput, autoCompactWindow: r.appState.autoCompactWindow, fastMode: r.appState.fastMode, cacheBreakerPhrase: r.appState.cacheBreakerPhrase, activeGoal: r.appState.activeGoal, ultraplanSessionUrl: r.appState.ultraplanSessionUrl }, getAppState: o, setAppState: g, ...(0, import_chunk_tfgxeb6k.l7t)(o, g), queuedNotificationsRegistry: (0, import_chunk_tteqedwm.u7t)(o, g, e.session), taskRegistry: (0, import_chunk_4yjj7pjs.Py)(o, g), sessionHooksRegistry: e.sessionHooks, teammateColors: (0, import_chunk_hemc71zd.THt)((0, import_chunk_se72nykz.qXe)(o, g, "teammateColors")), rootToolSurface: { tools: h, mainLoopModel: r.mainLoopModel, getPlanModeSetting: import_chunk_865at33z.Ld }, abortController: r.abortController, readFileState: e.readFileState, nestedMemoryAttachmentTriggers: (0, import_chunk_p1ewvgeh.dSl)(), pendingNestedMemoryTriggers: e.pendingNestedMemoryTriggers, sessionEnvVars: e.sessionEnvVars, toolState: e.toolState, toolDecisions: /* @__PURE__ */ new Map(), dynamicSkillDirTriggers: [], memorySelector: e.memorySelector, isolationLatch: e.isolationLatch, storageV5: e.storageV5, credentials: e.credentials, getFileHistoryState: C, applyFileHistoryOp: L, ...r.phase === "input" && r.persistSession && { makeFileHistorySnapshot: async (O) => {
    await (0, import_chunk_bzyb60p0.Unt)(C, L, O, { preCheckpoint: true });
  } }, applyAttributionOp: (O) => {
    g((R) => {
      let N = (0, import_chunk_sjqze7qg.$so)(R.attribution, O);
      if (N === R.attribution) return R;
      return { ...R, attribution: N };
    });
  }, onCompactEvent: (O) => {
    if (O.type === "sdk_status") y?.(O.status, O.metadata);
  }, onQueryEvent: (O) => {
    if (O.type === "apply_flag_settings") (0, import_chunk_2e866jns.wtt)(O.settings, g);
    else if (O.type === "conversation_reset") e.sessionState?.notifyConversationReset(), (0, import_chunk_1ek4hhs6.TOi)(e.sessionState), (0, import_chunk_5f9jkxad.rht)(o());
  } };
}
function Ca(e, r) {
  try {
    (0, import_chunk_bzyb60p0.nS)(e, r);
    return;
  } catch (o) {
    return Ea(o, r);
  }
}
async function Aa(e, r, o) {
  try {
    await (0, import_chunk_bzyb60p0.Igi)(e, r, o);
    return;
  } catch (g) {
    return Ea(g, r);
  }
}
function Ea(e, r) {
  if (!(e instanceof import_chunk_bzyb60p0.btn)) throw e;
  r.setCwd(e.path), (0, import_chunk_18rsj2ts.Ixt)(e.path), (0, import_chunk_w578pjby.t)(`[headless] working directory ${e.path} no longer exists; the turn starts pinned to it`, { level: "warn" });
  let o = import_chunk_bzyb60p0.Vro.of(r);
  if (o.pinned) return;
  o.pinned = true;
  try {
    (0, import_chunk_y53wbr8a.a)("tengu_shell_set_cwd", { success: false, missing_at_turn: true });
  } catch {
  }
  let g = (0, import_chunk_wddxyb00.rm)(r) ? "" : ` ${e.path}`;
  return Xse((0, import_chunk_bzyb60p0.Pt)(`The session's working directory${g} no longer exists; shell commands cannot start there and relative file paths that use it will fail until it is restored.`, "warning"));
}
function Us(e, r, o) {
  return new import_chunk_b83x8d52.Gne(e.filter((g) => r(g) && !Ra(g, e) && Oa(g, e, o)), { only: /* @__PURE__ */ new Map(), order: [], names: e.map((g) => g.name) });
}
function Pa(e, r, o) {
  if (o.everyDenyHolds) return "free";
  if (Ra(e, r)) return "free";
  if (o.requestsHaveToolSearch ??= (0, import_chunk_p44m8w7d.j_)() && !(0, import_chunk_bzyb60p0.lto)(o.model(), r) && !(0, import_chunk_bzyb60p0.g3e)((0, import_chunk_f9x2f6cx.ao)(), o.model()), !o.requestsHaveToolSearch) return "harmful";
  if (typeof e !== "string" && Oa(e, r, o)) return o.isNewConversation && (0, import_chunk_b83x8d52.JCe)() ? "free" : "harmful";
  o.loaded ??= (0, import_chunk_bzyb60p0.C6)(o.messages, { surfaced: { exceptAnnouncements: /* @__PURE__ */ new Set() } });
  let g = typeof e === "string" ? [...o.loaded].some((y) => y === e || y.startsWith(`${e}__`)) : o.loaded.has(e.name);
  if (g && !(0, import_chunk_gz6chcf8.s_r)()) return "harmful";
  if (g && !(0, import_chunk_gz6chcf8.Cfo)()) return "costly";
  return o.held === void 0 && (typeof e === "string" || !(0, import_chunk_179jgyn9.Kbt)(e)) ? "costly" : "free";
}
function Ra(e, r) {
  if ((0, import_chunk_r3kja8v6.ue)()) return typeof e === "string" ? (0, import_chunk_w50zedgp.$h)(r) : (0, import_chunk_w50zedgp.Kit)(e, r);
  return false;
}
function Oa(e, r, o) {
  let g = o.nonDeferrableBuiltins ??= (0, import_chunk_p44m8w7d.cM)();
  if (o.held === void 0 && o.aboutToHold === void 0) {
    let y = (0, import_chunk_865at33z.Or)(o.messages);
    o.aboutToHold = (0, import_chunk_bzyb60p0.acr)((0, import_chunk_f9x2f6cx.ao)(), r, (h) => (0, import_chunk_179jgyn9.Wne)(h, g), (0, import_chunk_865at33z.ZP)(o.model()), { starts: o.isNewConversation && !y.some((h) => h.type === "assistant"), inView: y }) ?? null;
  }
  return !(0, import_chunk_179jgyn9.cN)(e, o.held ?? o.aboutToHold ?? void 0, r, { nonDeferrableBuiltins: g });
}
function Ia(e, r, o, g) {
  if (e === void 0) return;
  try {
    if ((0, import_chunk_bz1f2qnq.kh)(r) !== void 0) {
      (0, import_chunk_cqa9hrgx.l)("headless_turn_effort_cap", "turn_sets_effort");
      return;
    }
    if (!(0, import_chunk_k67pwqya.B2e)(o)) {
      (0, import_chunk_cqa9hrgx.l)("headless_turn_effort_cap", "would_rewrite_cache");
      return;
    }
    let y = (0, import_chunk_k67pwqya.bc)(g, o), h = (0, import_chunk_k67pwqya.G_)(o, y), P = (0, import_chunk_k67pwqya.G_)(o, y, { turnEffort: e });
    if (typeof h !== "string" || typeof P !== "string" || (0, import_chunk_k67pwqya.rk)() !== void 0) {
      (0, import_chunk_cqa9hrgx.l)("headless_turn_effort_cap", "level_set_elsewhere");
      return;
    }
    if (!(0, import_chunk_8hfdvrr1.f6e)(h, P)) return;
    return (0, import_chunk_cqa9hrgx.u)("headless_turn_effort_cap"), e;
  } catch (y) {
    (0, import_chunk_cqa9hrgx.l)("headless_turn_effort_cap", "check_threw"), (0, import_chunk_k449cc64.i)(y);
    return;
  }
}
function Bs(e) {
  let r = e.findLast((o) => o.type === "assistant" || o.type === "user");
  return r?.type === "assistant" && !r.isApiErrorMessage && r.message.content.every((o) => o.type !== "tool_use") && r.message.content.some((o) => o.type === "text" && o.text.trim() !== "" && o.text.trim() !== import_chunk_bp9b0hd8.Wp);
}
async function Da(e, r, o, g) {
  try {
    if (!(0, import_chunk_sjqze7qg.jfr)(e, o, g)) return [];
    if ((0, import_chunk_bzyb60p0.BMe)()) await r.settled();
    let y = Bs(o) ? (0, import_chunk_sjqze7qg.M7a)(e, o, g) : [];
    if (y.length === 0) return [];
    let h = await (0, import_chunk_bzyb60p0.XY)(r, y.map((P) => (0, import_chunk_bzyb60p0.Ut)(P)));
    if (h.length > 0) (0, import_chunk_42tcgre6.q)("info", "cowork_memory_context_withdrawn_at_turn_end", { leg: "ccr" });
    return h;
  } catch (y) {
    return (0, import_chunk_k449cc64.i)(y), (0, import_chunk_42tcgre6.q)("warn", "cowork_memory_context_turn_end_withdrawal_failed", { leg: "ccr" }), [];
  }
}
function xa(e) {
  return e && (0, import_chunk_3t7ve0wy.kl)();
}
var Fl = 6e4;
function Hs(e, r, o) {
  if (e === void 0) return;
  try {
    e.enter(r, o);
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
  }
}
function Ll(e, r, o, g) {
  if (e === void 0 || r?.turnStartMark === void 0 || r.receivedWallMs === void 0) return;
  try {
    return e.readSince(r.turnStartMark, o, g - r.enqueuedWallMs);
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
    return;
  }
}
function DEa(e) {
  (0, import_chunk_bzyb60p0.Z4e)();
  let { getAppState: r, setAppState: o } = e, g = e.initialMessages ?? [], y = new import_chunk_bzyb60p0.sHe(void 0), h = e.conversation ?? (0, import_chunk_bzyb60p0.vHe)({ keep: (K) => {
    g.push(...K);
  }, rows: () => g, list: g, isHookable: true }), P = Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_START_ANNOUNCEMENTS_BEFORE_PROMPT), C = import_chunk_144c0mc5.eUe.of(e.session.host);
  C.absorb(g);
  let L = e.readFileCache, O = e.sessionEnvVars ?? /* @__PURE__ */ new Map(), R = e.isolationLatch ?? (0, import_chunk_4chf71g6._kt)(), N = e.toolState ?? new import_chunk_sjqze7qg.Oq(), z = e.sessionHooks ?? (0, import_chunk_jhdsf4g3.cAe)(), ie = g.some((K) => K.type === "assistant" || K.type === "user" && !K.isMeta), I = false, V, J = false, be = e.memorySelector ?? (0, import_chunk_bzyb60p0.qTe)(), se = e.userSpecifiedModel, he, H = (0, import_chunk_cbnm4p23._r)();
  function ae() {
    let K = e.abortController?.signal;
    if (K?.aborted) H.abort(K.reason);
  }
  function Q() {
    H.abort(e.abortController?.signal.reason);
  }
  e.abortController?.signal.addEventListener("abort", Q, { once: true }), ae();
  function ge(K = "remote-cancel") {
    if (H.abort((0, import_chunk_cbnm4p23.hl)(K)), (0, import_chunk_r3kja8v6.ue)()) {
      let { ReplSessions: k } = require("/$bunfs/root/chunk-sprssgrr.js");
      N.get(k).interrupt([import_chunk_w50zedgp.Bk]);
    }
    H = (0, import_chunk_cbnm4p23._r)(), ae();
  }
  let pe = null, De;
  function Ae() {
    let K = De;
    return De = void 0, K;
  }
  let oe = new import_chunk_zsqk76p8.vH(), Oe = (0, import_chunk_08bv0y93.C8t)({ run: import_chunk_k5r71ad2.t6, queryParams: async () => {
    if (pe === null) throw Error("headless session: turn picked up without prepared params");
    let K = pe;
    return pe = null, K;
  }, hostOwnsPermissionMode: true, sdkResultVerdict: true, fastModeState: () => he === void 0 ? void 0 : (0, import_chunk_865at33z.ohe)(he.model, he.enabled), fastModeDisabledReason: () => (0, import_chunk_865at33z.$N)() ?? (he && (0, import_chunk_865at33z.rhe)(he.model, he.enabled)) ?? void 0, onCommandLifecycle: e.onCommandLifecycle, onTurnThrow: (K) => {
    De = K;
  } });
  Oe.streamInput(oe).catch(import_chunk_k449cc64.i);
  let Le = [], He = [], lt = (0, import_chunk_d1r21263.$2l)((K) => {
    Le.push(...K);
  }), Ve = /* @__PURE__ */ new Set(), Ft = e.turnEventsSettleMs ?? Fl, Mt = false;
  function We(K, k, re) {
    try {
      return k();
    } catch (ke) {
      return (0, import_chunk_w578pjby.t)(`headless session: ${K} failed, the turn goes on without it: ` + (0, import_chunk_jv7av99m.d)(ke), { level: "error" }), re;
    }
  }
  async function wr() {
    let K = new AbortController();
    try {
      let k = await (0, import_chunk_5appeerh.me)(Promise.race([lt.settled().then(() => (0, import_chunk_bzyb60p0.q6l)()).then(() => "settled"), (0, import_chunk_d1r21263.U2l)(e.messageQueue, K.signal).then(() => "yielded")]), Ft);
      if (Mt = k === "yielded", k === void 0) lt.sever(), We("the mods' first-turn row at the cut", import_chunk_bzyb60p0.Sfi, void 0), (0, import_chunk_w578pjby.t)(`headless session: turn events still running after ${Ft}ms; the turn ends without them and their late notes are dropped`, { level: "warn" });
      else if (k === "yielded") (0, import_chunk_w578pjby.t)("headless session: a turn event hook queued input; the turn ends so it can run, and the events settle with the turn that runs it");
    } catch (k) {
      Mt = false, (0, import_chunk_w578pjby.t)(`headless session: settling the turn events failed: ${(0, import_chunk_jv7av99m.d)(k)}`, { level: "warn" });
    } finally {
      K.abort();
    }
    return Le.splice(0);
  }
  async function Kn(K, k, re, ke) {
    if (He = await wr(), He.length === 0) return;
    try {
      if (He = [...await (0, import_chunk_bzyb60p0.XY)(h, He)], k.push(...He), re) {
        if (await K.record(true), ke) await (0, import_chunk_bzyb60p0.Pf)();
      }
    } catch (ve) {
      (0, import_chunk_w578pjby.t)("headless session: recording the turn's notes failed: " + (0, import_chunk_jv7av99m.d)(ve), { level: "error" });
    }
  }
  let Cn = new Set((0, import_chunk_fe5esh7d.ZRi)(g));
  function Vn(K, k, re) {
    let ke = false;
    try {
      ke = K !== void 0 && K !== "" && e.takeSystemPromptDelivered?.() === true;
      let ve = ke && (0, import_chunk_fe5esh7d.QSe)({ systemPromptSnapshot: re }) && !(0, import_chunk_fe5esh7d.Qus)((0, import_chunk_865at33z.Or)(g), K, e.overlooksHostPromptDates), Ne = (0, import_chunk_865at33z.Or)(g), Ke = (0, import_chunk_fe5esh7d.ZRi)(Ne).at(-1), qe = e.liveAppendSections !== void 0 && (k || Ke !== void 0 && Cn.has(Ke)) && (0, import_chunk_fe5esh7d.QSe)({ systemPromptSnapshot: re }) ? (0, import_chunk_fe5esh7d.dal)(Ne, k, e.liveAppendSections) : void 0;
      if (ve || qe !== void 0) {
        let wt = (0, import_chunk_bzyb60p0.XY)(h, [(0, import_chunk_k5r71ad2.JEa)()]);
        if (wt instanceof Promise) wt.catch(import_chunk_k449cc64.i);
        (0, import_chunk_f9x2f6cx.KB)(ve ? "sdk_system_prompt" : "host_append_section");
      }
      if (qe !== void 0) e.onLiveAppendSectionChange?.(qe);
      if (ke) ke = false, (0, import_chunk_cqa9hrgx.u)("prompt_snapshot_host_supersede", { prompt_rerendered: ve });
      if (ve) e.onHostPromptSupersedesRecord?.((0, import_chunk_fe5esh7d.lal)(Ne, K, e.overlooksHostPromptDates));
    } catch (ve) {
      if ((0, import_chunk_k449cc64.i)(ve), ke) (0, import_chunk_cqa9hrgx.m)("prompt_snapshot_host_supersede", "threw");
    }
  }
  let pn = false, _n = false, en, An, En, kt;
  function Pn(K) {
    if (kt !== void 0) {
      kt.push({ rows: K, isAnswered: true });
      return;
    }
    h.keep(K), En?.appendHostRows(K);
  }
  function Rn(K) {
    let k = (0, import_chunk_bzyb60p0.XY)(h, K, { keep: Pn });
    if (k instanceof Promise) k.catch(import_chunk_k449cc64.i);
  }
  function In() {
    let K = kt;
    kt = void 0;
    for (let { rows: k, isAnswered: re } of K ?? []) if (re) Pn(k);
    else Rn(k);
  }
  let qt;
  function X(K) {
    let k = qt;
    if (k === void 0 || k.length === 0) return;
    try {
      if (K && !Bs(g)) return;
      qt = [], Rn(k);
    } catch (re) {
      (0, import_chunk_k449cc64.i)(re);
    }
  }
  async function* te(K, k) {
    if (pn) throw Error("headless session: a turn is already in flight");
    if (pn = true, H.signal.aborted) H = (0, import_chunk_cbnm4p23._r)(), ae();
    let re = H;
    if ((0, import_chunk_w50zedgp.Ng)()) {
      let { ReplSessions: Ke } = require("/$bunfs/root/chunk-sprssgrr.js");
      N.get(Ke).hostedTurn = re;
    }
    let ke = en, ve = k?.abortController?.signal;
    function Ne() {
      re.abort(ve?.reason);
    }
    if (ve?.aborted) Ne();
    else ve?.addEventListener("abort", Ne, { once: true });
    try {
      try {
        (0, import_chunk_f9x2f6cx.j3n)(void 0);
      } catch (qe) {
        (0, import_chunk_k449cc64.i)(qe);
      }
      if (He = [], !Mt) Le.length = 0;
      if (k?.withdrawnFileUuids?.length) (0, import_chunk_bzyb60p0.our)();
      let Ke = k?.withdrawnFileUuids?.length ? await (0, import_chunk_mzajx23m.Urr)(k.withdrawnFileUuids) : [];
      if (k?.withdrawnFileUuids?.length) for (let qe of cEn(g, k.withdrawnFileUuids, { hideBefore: k.hidePicturesWithNoFileIdBefore, onDisk: Ke })) L.delete(qe);
      yield* ja(K, k, re, Ke);
      for (let qe of He) if (qe.type === "system" && qe.subtype === "informational") yield Xse(qe);
    } finally {
      if (ve?.removeEventListener("abort", Ne), In(), En = void 0, X(false), qt = void 0, pn = false, (0, import_chunk_w4dc83v7.Etl)(), en === ke) en = Date.now();
    }
  }
  let le = e.storedDenyLists ?? wMt(e.initialMessages ?? []), ce = e.denyListsOnRecord === "unreadable" ? void 0 : e.denyListsOnRecord, ye = Wo(le, ce, (e.initialMessages ?? []).length === 0), je = ye?.client ?? [], Ue = true, ut = ye?.turn ?? [], ct = [], st = false, it = (0, import_chunk_4smdap7r.M)([...ut, ...je]), Kt = (0, import_chunk_4smdap7r.U)(it, (K) => !le?.turn.includes(K) && !le?.client.includes(K));
  if (Kt > 0) Bi(e.onDenyListsOnlyOnRecord, Kt);
  let At = ce && hGr(le, ce) ? { turn: (0, import_chunk_4smdap7r.M)(ce.turn), client: (0, import_chunk_4smdap7r.M)(ce.client) } : void 0, Gn = e.denyListsOnRecord === "unreadable";
  if (Gn) (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "record_unreadable");
  function Dn(K) {
    if (ye !== void 0 || K.length > 0 || je.length > 0) {
      if (ye = { turn: [...K], client: [...je], version: Math.max((ye?.version ?? 0) + 1, Date.now()) }, !Gn && e.keepsDenyListsOnRecord === true) At = us(ye, e.sessionState, At);
    }
  }
  function Yn(K, k = []) {
    let { setToolPermissionContext: re } = (0, import_chunk_tfgxeb6k.aqr)(o), ke, ve, Ne, Ke, qe = [], wt = 0, pt;
    (0, import_chunk_f9x2f6cx.ao)().turnDeniedTools = void 0;
    try {
      if (ke = (0, import_chunk_b83x8d52.LSe)((0, import_chunk_f9x2f6cx.ao)()), ve = K.length === 0 || ke !== void 0 ? void 0 : (0, import_chunk_fe5esh7d.TA)(g), Ne = r().toolPermissionContext.alwaysDenyRules.command ?? [], K.length > 0 && ke === void 0) {
        if ((0, import_chunk_qanr9g0g.WLn)(re, []), ve === void 0) Ne = r().toolPermissionContext.alwaysDenyRules.command ?? [];
      }
      if (ve !== void 0) Wa(ve), ke = (0, import_chunk_b83x8d52.LSe)((0, import_chunk_f9x2f6cx.ao)());
      let ft = { held: ke, messages: g, isNewConversation: ke === void 0 && ve === void 0 && !(0, import_chunk_f9x2f6cx.ao)().declaredToolsDecided, everyDenyHolds: (0, import_chunk_p44m8w7d.gbs)() || (0, import_chunk_f9x2f6cx.TFs)(), model: () => Tr({ userSpecifiedModel: se, permissionMode: r().toolPermissionContext.mode, thinkingConfig: Me(e.thinkingConfig) }).mainLoopModel };
      pt = ft;
      let $e = () => Ke ??= e.refreshTools?.() ?? Me(e.tools), Vt = K.length > 0 ? e.refreshMcpClients?.() ?? Me(e.mcpClients) : [], Ze = new Set((0, import_chunk_qanr9g0g.Ool)(K, Ne, $e, (et) => ke?.has(et) ?? ve?.toolDescriptions.has(et) ?? false, (et, Yt) => Pa(et, Yt, ft), (0, import_chunk_qanr9g0g.kAi)(Vt))), Gt = As(K.filter((et) => !Ze.has(et)), $e, Vt), Lt = /* @__PURE__ */ new Set([...Ze, ...Gt]), $t = (0, import_chunk_4smdap7r.M)([...k, ...K.filter((et) => Lt.has(et))]);
      if (ke === void 0 && $t.length > 0) Ke ??= e.refreshTools?.() ?? Me(e.tools), (0, import_chunk_f9x2f6cx.ao)().turnDeniedTools = Us(Ke, (0, import_chunk_qanr9g0g._gr)($t), ft);
      (0, import_chunk_qanr9g0g.WLn)(re, $t), qe = K.filter((et) => !$t.includes(et));
      let rn = new Set(k);
      wt = (0, import_chunk_4smdap7r.U)(Gt, (et) => !rn.has(et) && $e().some((0, import_chunk_qanr9g0g._gr)([et])));
    } catch (ft) {
      (0, import_chunk_k449cc64.i)(ft);
      try {
        let $e, Vt = false;
        try {
          let Gt = Ne ?? r().toolPermissionContext.alwaysDenyRules.command ?? [], Lt = e.refreshMcpClients?.() ?? Me(e.mcpClients), $t = (0, import_chunk_qanr9g0g.kAi)(Lt), rn = Ke ??= e.refreshTools?.() ?? Me(e.tools), et = new Set(As(K, () => rn, Lt));
          Vt = et.size > 0;
          let Yt = (0, import_chunk_p44m8w7d.gbs)() || (0, import_chunk_f9x2f6cx.TFs)(), yn = (0, import_chunk_r3kja8v6.ue)() ? (0, import_chunk_w50zedgp.$h)(rn) : false;
          $e = K.filter((bt) => Yt || yn || Gt.includes(bt) || et.has(bt) || (0, import_chunk_qanr9g0g.Xco)(bt, $t) || (0, import_chunk_qanr9g0g.EAi)(bt) || (0, import_chunk_qanr9g0g.Mol)(bt, rn) || (ke?.has(bt) ?? ve?.toolDescriptions.has(bt) ?? false));
        } catch (Gt) {
          (0, import_chunk_k449cc64.i)(Gt), $e = K;
        }
        let Ze = (0, import_chunk_4smdap7r.M)([...k, ...$e]);
        if ((0, import_chunk_qanr9g0g.WLn)(re, Ze), (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "judging_threw"), Vt && ke === void 0 && Ke !== void 0 && pt !== void 0) (0, import_chunk_f9x2f6cx.ao)().turnDeniedTools = Us(Ke, (0, import_chunk_qanr9g0g._gr)(Ze), pt);
      } catch ($e) {
        (0, import_chunk_k449cc64.i)($e);
      }
    }
    try {
      if (qe.length > 0) (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "entries_dropped", { count: qe.length, server_count: (0, import_chunk_4smdap7r.U)(qe, import_chunk_qanr9g0g.Yco), total: K.length });
      if (wt > 0) (0, import_chunk_cqa9hrgx.l)("headless_turn_deny", "servers_held", { count: wt, total: K.length });
    } catch (ft) {
      (0, import_chunk_k449cc64.i)(ft);
    }
  }
  function Wa(K) {
    try {
      let k = (0, import_chunk_f9x2f6cx.ao)();
      if (k.declaredToolsDecided || e.refreshTools === void 0 || !(0, import_chunk_fe5esh7d.QSe)({ systemPromptSnapshot: Me(e.systemPromptSnapshot) })) return;
      (0, import_chunk_b83x8d52.Ldo)(k, K, e.refreshTools(), r().toolPermissionContext);
    } catch (k) {
      (0, import_chunk_k449cc64.i)(k);
    }
  }
  async function* ja(K, k, re, ke) {
    var _stack = [];
    try {
      let ve = xi(e.session.host, K, k, re.signal);
      if (ve !== void 0) await ve;
      let Ne = k?.shouldQuery === false ? void 0 : (0, import_chunk_knp99ee7.ntt)(re.signal);
      if (Ne !== void 0) await Ne;
      let Ke = k?.turnStartClock;
      Hs(Ke, "tool_reread");
      try {
        (0, import_chunk_bzyb60p0.H9a)(N, k?.clientPlatform), (0, import_chunk_aw5nczax.CTa)(e.session, k?.clientPlatform), (0, import_chunk_r9ecxfn9.Aco)(e.session, k?.clientPlatform);
      } catch (E) {
        (0, import_chunk_k449cc64.i)(E);
      }
      je = k?.clientDisallowedTools ?? je, Ue &&= k?.clientDisallowedTools === void 0;
      let qe = k?.resumeReason === void 0 ? [] : ct, wt = (0, import_chunk_4smdap7r.M)([...k?.carriedOnDisallowedTools ?? [], ...qe]);
      if (k?.shouldQuery !== false) {
        let E = (0, import_chunk_4smdap7r.U)(qe, (Ee) => !k?.carriedOnDisallowedTools?.includes(Ee));
        if (E > 0) Ps(e.onDenyListsOnlyOnMessage, E);
        ct = [], st = true;
      }
      if (k?.shouldQuery !== false && k?.skipSkillPermissionReset !== true) {
        let E = Ue && (k?.carriedOnDisallowedTools !== void 0 && k.orphanedPermission?.behindNewInput === void 0 || k?.opensOnRoutineFire === true), Ee = (0, import_chunk_4smdap7r.M)([...k?.keepsDisallowedTools !== true || E ? [] : je, ...k?.disallowedTools ?? [], ...wt]), Xe = (0, import_chunk_b83x8d52.LSe)((0, import_chunk_f9x2f6cx.ao)()) === void 0 ? it : [];
        Yn(Ee, Ee.filter((Tt) => wt.includes(Tt) || Xe.includes(Tt))), ut = [], Dn(r().toolPermissionContext.turnDisallowedTools ?? []);
      } else {
        let E = (0, import_chunk_4smdap7r.M)([...ut, ...wt]);
        if (k?.shouldQuery !== false && E.length > 0) {
          let Ee = (0, import_chunk_4smdap7r.M)([...r().toolPermissionContext.turnDisallowedTools ?? [], ...E]);
          Yn(Ee, Ee), ut = [], Dn(r().toolPermissionContext.turnDisallowedTools ?? []);
        } else if (k?.clientDisallowedTools !== void 0) Dn(ye?.turn ?? []);
      }
      let pt = k?.carriedOnDisallowedTools?.length ?? 0;
      if (pt > 0 && k?.shouldQuery !== false) Ui(e.onDenyListsCarried, pt);
      if (Gn && k?.shouldQuery !== false) if (Gn = false, ye === void 0 || e.keepsDenyListsOnRecord !== true) Ho(e.sessionState);
      else At = us(ye, e.sessionState, At);
      let ft;
      try {
        ft = k?.namesWidgetViews ? (0, import_chunk_bzyb60p0.NXo)(e.session) : void 0;
      } catch (E) {
        (0, import_chunk_k449cc64.i)(E);
      }
      let $e = import_chunk_hym6yzrf.Eg, Vt = (0, import_chunk_b83x8d52.Lds)(re.signal, {});
      if (Vt !== void 0) await Vt;
      let Ze = e.refreshTools?.() ?? Me(e.tools), Gt = Me(e.commands), Lt = e.refreshMcpClients?.() ?? Me(e.mcpClients), $t = Me(e.agents), rn = Me(e.allowedAgentTypes), et = Me(e.primitiveToolGrant), Yt = Me(e.jsonSchema), yn = Me(e.customSystemPrompt), bt = Me(e.appendSystemPrompt), Va = Me(e.planModeInstructions), qs = Me(e.systemPromptSnapshot), zn = $i(e.customPromptIsForAnotherModel, g, yn);
      if (zn === void 0) Vn(yn, bt, qs);
      let Ga = Me(e.appendSubagentSystemPrompt), $a = Me(e.toolAliases), vr = Me(e.excludeDynamicSections), Ya = Me(e.forwardSubagentText) ?? false, { storageV5: Cr } = e, Qn;
      if (Hs(Ke, "cwd"), e.cwd !== null) {
        let E = Me(e.cwd);
        if ((0, import_chunk_m15w38ag.ne)() && Cr !== void 0) Qn = await Aa(E, e.session, Cr);
        else Qn = Ca(E, e.session);
      }
      if (Qn !== void 0) yield Qn;
      (0, import_chunk_865at33z.qCo)();
      let Ge = !(0, import_chunk_f9x2f6cx.DI)(), tt = performance.now(), Ar = Date.now();
      (0, import_chunk_w4dc83v7.ctl)();
      let Jn = Ll(Ke, k?.frameTiming, tt, Ar);
      Hs(Ke, "earlier_turn", tt);
      let Fn;
      if (k?.shouldQuery !== false) {
        (0, import_chunk_bzyb60p0.qza)(e.session, { tools: Ze, toolPermissionContext: r().toolPermissionContext });
        try {
          Fn = (0, import_chunk_sjqze7qg.Rso)(e.session, { credentials: e.credentials, storageV5: Cr }, k?.userMessageUuids, { storedMessages: () => k?.orphanedPermission === void 0 && k?.handedOffTurn === void 0 && k?.deferredToolUse === void 0 && k?.inPlaceOfFirstRequest === void 0 && k?.inputMode !== "bash" && (0, import_chunk_tjdnrbvx.fv)(K)?.startsWith("/") !== true ? g : void 0, signal: re.signal });
        } catch (E) {
          (0, import_chunk_w578pjby.t)(`memory snapshot kick failed: ${E instanceof Error ? E.message : String(E)}`);
        }
      }
      let Er = k?.uuid && (k.uuidIsClientEventUuid || !k.isMeta) ? k.uuid : void 0, at = r2o(Er, k?.resumeReason === void 0 ? k?.userMessageUuids : Yi(g, k.userMessageUuids, k.alsoLeftToThisReRun), { primaryIsMeta: k?.isMeta === true, resultsAlsoList: k?.handedOffTurnUserMessageUuids, standIn: k?.userMessageUuids?.at(-1), wasPutBack: (E) => (0, import_chunk_k5r71ad2.S2o)(e.messageQueue, E) }), zt = k?.resumeReason !== void 0 ? { resume_reason: k.resumeReason } : void 0, Ks = {}, Vs = [], { permissionDenials: Ln, recordDenial: za, canUseTool: Gs } = Wi(e.canUseTool), xt = r(), { mainLoopModel: Zn, runtimeModel: Pr, thinkingConfig: Qa } = Tr({ userSpecifiedModel: se, permissionMode: xt.toolPermissionContext.mode, thinkingConfig: Me(e.thinkingConfig) });
      if (Fn?.holdUntilSent !== void 0) await Fn.holdUntilSent();
      if (k?.shouldQuery !== false) (0, import_chunk_7d2qr9z5.kmo)(e.storageV5, e.credentials);
      (0, import_chunk_w4dc83v7.Lk)("model_config_wait");
      let Ir = k?.shouldQuery === false ? void 0 : await (0, import_chunk_bzyb60p0.pne)(Pr, { storageV5: e.storageV5, credentials: e.credentials, abortController: re });
      if ((0, import_chunk_w4dc83v7.Qw)("model_config_wait"), e.storageV5 !== void 0) (0, import_chunk_bzyb60p0.pi)(e.storageV5, e.credentials).catch(() => {
      });
      let $s = { messages: g, abortController: re }, Ys = (0, import_chunk_q2404y26.WQ)($s, Ze);
      if (Ys !== void 0) await Ys;
      let Xa = (0, import_chunk_q2404y26.gG)({}, Ze), Dr = { session: e.session, tools: Xa, runtimeModel: Pr, customSystemPrompt: yn, appendSystemPrompt: bt, appendSystemPromptHead: e.appendSystemPromptHead, excludeDynamicSections: vr, cacheBreakerPhrase: xt.cacheBreakerPhrase, mcpClients: Lt, sectionsInView: vr ? (0, import_chunk_k5r71ad2.qVs)(g) : void 0, storageV5: e.storageV5, credentials: e.credentials };
      (0, import_chunk_bzyb60p0.Mno)();
      let zs = (0, import_chunk_f9x2f6cx.I1e)();
      (0, import_chunk_w4dc83v7.Lk)("system_prompt");
      let { systemPrompt: Qt, userContext: Qs, systemContext: Xs } = await Fs(Dr);
      Qt = zn ?? Qt, (0, import_chunk_w4dc83v7.Qw)("system_prompt"), (0, import_chunk_k5r71ad2.XEa)(e.session, e.credentials, g, re.signal, k?.shouldQuery !== false && k?.origin?.kind === "human");
      let Ja = ie ? void 0 : (0, import_chunk_bzyb60p0.FGa)(e.session), Fr = { session: e.session, messageQueue: e.messageQueue, stopsAtToolGap: e.stopsAtToolGap, queuedCallsForMove: e.queuedCallsForMove, subscribeRetryWake: e.subscribeRetryWake, commands: Gt, tools: Ze, refreshTools: e.refreshTools, admitsMcpTool: e.admitsMcpTool, toolCatalog: e.toolCatalog, refreshMcpClients: e.refreshMcpClients, verbose: e.verbose ?? false, fallbackModel: e.fallbackModel, thinkingConfig: Qa, mcpClients: Lt, customSystemPrompt: yn, appendSystemPrompt: bt, planModeInstructions: Va, systemPromptSnapshot: qs, appendSubagentSystemPrompt: Ga, toolAliases: $a, excludeDynamicSections: vr, agents: $t, allowedAgentTypes: rn, primitiveToolGrant: et, maxBudgetUsd: e.maxBudgetUsd, messageClientPlatform: k?.clientPlatform, forwardSubagentText: Ya, requiresStructuredOutput: Yt !== void 0 && Ze.some((E) => (0, import_chunk_4vsz8a99.gt)(E, import_chunk_2b1wcpvk.ga)), renderedSystemPrompt: Qt, onPermissionDenial: za, requestDialog: e.requestDialog, sessionState: e.sessionState, getAppState: r, setAppState: o, setSDKStatus: e.setSDKStatus, readFileState: L, pendingNestedMemoryTriggers: e.pendingNestedMemoryTriggers, sessionEnvVars: O, memorySelector: be, isolationLatch: R, toolState: N, sessionHooks: z, storageV5: e.storageV5, credentials: e.credentials }, Et = Mr(Fr, { phase: "input", messages: g, mainLoopModel: Zn, modelFacts: Ir, appState: xt, abortController: re, setMessages: (E) => {
        let Ee = E(g);
        if (Ee !== g) {
          if (Ee.length === 0) h.cut(), An = void 0;
          g.length = 0, g.push(...Ee);
        }
      }, applyMessageOp: (E) => {
        let Ee = (ns) => {
          let Nt = (0, import_chunk_d1r21263.wGr)(g, ns);
          if (Nt !== g) g.length = 0, g.push(...Nt);
        }, Xe = (0, import_chunk_d1r21263.bGr)(E, Ee), Tt = Xe === void 0 ? h.behindAppends(() => Ee(E)) : (0, import_chunk_bzyb60p0.XY)(h, Xe.rows, { keep: Xe.keep });
        if (Tt instanceof Promise) Tt.catch(import_chunk_k449cc64.i);
      }, persistSession: Ge }), Js = k?.orphanedPermission?.initFirst === true || k?.handedOffTurn !== void 0;
      if (Js) {
        (0, import_chunk_w4dc83v7.Lk)("init_message");
        let E = await js(Fr, Zn, xt.fastMode);
        (0, import_chunk_w4dc83v7.Qw)("init_message"), (0, import_chunk_w4dc83v7.Lk)("init_frame_send"), _n = true, yield Ha(E, at), (0, import_chunk_w4dc83v7.Qw)("init_frame_send");
      }
      let Lr = !(Array.isArray(K) && K.length === 0), Zs = false, xr = Et.permissionLayers;
      if (!_n) try {
        e.onTurnBeganBeforeInit?.();
      } catch (E) {
        (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`onTurnBeganBeforeInit threw; the turn goes on: ${(0, import_chunk_jv7av99m.d)(E)}`, "onTurnBeganBeforeInit threw"));
      }
      (0, import_chunk_w4dc83v7.Lk)("resume_other");
      let _t = k?.inPlaceOfFirstRequest !== void 0, mt = _t ? void 0 : k;
      if (_t) k?.orphanedPermission?.behindNewInput?.endUnrun(k.inPlaceOfFirstRequest === "aborted" ? "stopped" : "not_run");
      let Ur = mt?.orphanedPermission !== void 0 && mt.resumeReason !== void 0 && !Lr ? (0, import_chunk_bzyb60p0.l9a)(g) : void 0;
      if (Ur !== void 0) (0, import_chunk_f9x2f6cx.RPt)(Ur);
      let eo = mt?.orphanedPermission !== void 0 || mt?.handedOffTurn !== void 0 || mt?.deferredToolUse !== void 0 ? new Set(g) : void 0;
      Bo(mt, ye), Et.replaysUserMessages = e.replayUserMessages;
      let Za = yield* ha({ orphanedPermission: mt?.orphanedPermission, handedOffTurn: mt?.handedOffTurn, beginTranscriptFlush: e.beginTranscriptFlush, awaitStagedFiles: e.awaitStagedFiles, placeFilesByName: e.placeFilesByName, placeCarriedWrites: e.placeCarriedWrites, handoffRelay: e.handoffRelay, deferredToolUse: mt?.deferredToolUse, hasPrompt: Lr, tools: Ze, mutableMessages: g, processUserInputContext: Et, canUseTool: Gs, answers: e.answers, persistSession: Ge, earlyResult: { startedAt: tt, usage: $e, permissionDenials: Ln, mainLoopModel: Zn, fastMode: xt.fastMode, origin: k?.origin, sendEcho: at.fields(), resumeReasonStamp: zt }, onHandedOffCallsRan: (E) => {
        Zs = true, xr = E;
      }, onOrphanedAnswerSettled: e.onOrphanedAnswerSettled, keptDeferredToolNotice: e.keptDeferredToolNotice, dropsUnavailableDeferredTool: e.dropsUnavailableDeferredTool });
      if ((0, import_chunk_w4dc83v7.Qw)("resume_other"), eo !== void 0) {
        for (let E of g) if (!eo.has(E)) import_chunk_wx3ay5nf.o3r.of(e.session).noteResults(E);
      }
      if (Za) return;
      let Bt = Ze, sn = Lt;
      if (mt?.orphanedPermission !== void 0 && e.waitsBehindAnsweredCall !== void 0) {
        (0, import_chunk_w4dc83v7.Lk)("resume_other");
        try {
          let E = e.waitsBehindAnsweredCall(re.signal);
          if (E !== void 0) ({ tools: Bt, mcpClients: sn } = await E), Et.options.tools = Bt, Et.options.mcpClients = sn, Et.rootToolSurface = { ...Et.rootToolSurface, tools: Bt };
        } catch (E) {
          if (!(0, import_chunk_jv7av99m.Fe)(E)) (0, import_chunk_k449cc64.i)(E);
        } finally {
          (0, import_chunk_w4dc83v7.Qw)("resume_other");
        }
      }
      let ed = (0, import_chunk_k5jn5rx9.ts)("before_processUserInput", { once: true }), to = (0, import_chunk_41xvhnb0.bva)(k?.withdrawnTools, { tools: Bt, prefixesStillToCome: sn.filter((E) => E.type === "pending").map((E) => (0, import_chunk_px0hhsq7.Rr)(E.name)), messages: g }), no = k?.hearthRelayMessageIds !== void 0 || k?.hearthRelayRows !== void 0 || k?.hearthRelayThreadTs !== void 0, yt = (0, import_chunk_bzyb60p0.SZr)(k?.uuid, k?.verifiedSlackHumanTurn || no || to !== void 0);
      const ro = __using(_stack, (0, import_chunk_08bv0y93.LVs)());
      (0, import_chunk_w4dc83v7.Lk)("process_user_input");
      let { messages: Hr, shouldQuery: so, allowedTools: td, model: on, effort: oo, resultText: nd, localCommand: io, commandExitCode: rd, interrupted: Ht, stopMarker: sd } = k?.inPlaceOfInput ?? await (0, import_chunk_08bv0y93.gEn)({ input: K, mode: k?.inputMode ?? "prompt", clientBashCommand: k?.inputMode === "bash", clientBashCommandCwd: k?.inputMode === "bash" ? k.clientBashCommandCwd : void 0, interactionPrompt: (0, import_chunk_z2xw6net.mSr)(), context: { ...Et, messages: g, holdsUnregisteredMcpServers: xa(k?.resumeReason !== void 0), askPerson: (E) => (0, import_chunk_h5jsp3s5.Uue)({ ...E, canUseTool: Gs, toolUseContext: Et }) }, messages: g, uuid: yt, isMeta: k?.isMeta, shouldQuery: k?.shouldQuery, queryHeldForNextTurn: k?.queryHeldForNextTurn, querySource: "sdk", origin: k?.origin, skipSlashCommands: _t || k?.skipSlashCommands, skipAttachments: _t ? "all" : k?.skipAttachments ? k.shouldQuery === false ? "all" : "mentions" : void 0, skipSubmissionHooks: _t || k?.skipSubmissionHooks, aheadOfSessionStart: k?.orphanedPermission !== void 0, bridgeOrigin: mt?.bridgeOrigin, localStdinOrigin: k?.localStdinOrigin, sessionChannelPersonTyped: k?.sessionChannelPersonTyped, ultrathinkTyped: k?.ultrathinkTyped, carriedOnPromptId: Ur, ownWordUuids: k?.ownWordUuids, hostInitiator: k?.hostInitiator, inboundOrigin: k?.inboundOrigin, toolsUsed: k?.toolsUsed, mergedTypedText: k?.mergedTypedText, fromConnector: k?.fromConnector, fromAnotherSession: k?.fromAnotherSession, modelScheduledOrigin: mt?.modelScheduledOrigin, wakeupSource: k?.wakeupSource, artifactCommentTurn: k?.artifactCommentTurn, pollEventDelivery: k?.pollEventDelivery, pollEventProvenance: k?.pollEventProvenance, pollEventDeclared: k?.pollEventDeclared, pollEventRows: k?.pollEventRows, skipSkillPermissionReset: k?.skipSkillPermissionReset === true || Zs, verifiedSlackHumanTurn: k?.verifiedSlackHumanTurn, textNotTyped: k?.textNotTyped, ownFilePaths: k?.ownFilePaths, noPersonArrived: k?.noPersonArrived, inlinedImagePaths: k?.inlinedImagePaths, inlinedImageNames: (0, import_chunk_bzyb60p0.n7o)(k?.inlinedImagePaths, k?.savedFiles), stampThreadState: k?.stampThreadState, widgetViews: ft, entries: ro });
      if ((0, import_chunk_w4dc83v7.Qw)("process_user_input"), (0, import_chunk_w4dc83v7.Lk)("conversation_append"), ed) (0, import_chunk_k5jn5rx9.ts)("after_processUserInput");
      let Be = (k?.orphanedPermission !== void 0 || k?.handedOffTurn !== void 0) && !Lr ? Hr.filter((E) => !(0, import_chunk_bzyb60p0.eot)(E)) : _t ? Hr.filter((E) => k?.refusedPromptIsStoredAlready === true && E.type === "user" && E.isMeta !== true) : Hr, Rt = k?.inPlaceOfFirstRequest !== "nothing" && (_t || so && k?.shouldQuery !== false);
      if (k?.origin?.kind !== "plugin") (0, import_chunk_f9x2f6cx.qda)(Rt ? void 0 : rd);
      if (k?.origin) (0, import_chunk_bzyb60p0.loo)(Be, k.origin);
      if (k?.skipAttachments === true) (0, import_chunk_bzyb60p0.doo)(Be);
      if (k?.textNotTyped === true) (0, import_chunk_bzyb60p0.coo)(Be);
      if (k?.shouldQuery === false && k.queryHeldForNextTurn !== true) (0, import_chunk_bzyb60p0.uoo)(Be);
      if (Ht) Hi(Be, yt, k?.resumeReason === void 0 ? k?.userMessageUuids : void 0);
      if (k?.taskDelivery) (0, import_chunk_bzyb60p0.foo)(Be, k.taskDelivery, yt);
      if (zi(Be, yt, k?.mergedSendUuids, k?.clientPlatform, (0, import_chunk_865at33z.xNe)(), k?.typedByPerson, k?.publishClickPath, (0, import_chunk_z2xw6net.m0e)(), k?.promptRowIsStoredAnew, k?.carriesOnTurnOf, to), ye !== void 0) eht(Be, ye);
      if ((0, import_chunk_bzyb60p0.cQt)(Be, k?.picturesToHide), (0, import_chunk_bzyb60p0.Jja)(Be, yt, K, k?.imageFileUuids, k?.savedFiles, k?.picturesToHide, Ht === true || _t), k?.verifiedSlackHumanTurn && yt) (0, import_chunk_bzyb60p0.yZr)(Be, yt, { projectsUserTurn: k.projectsUserTurn === true, emailSenderTurn: k.emailSenderTurn, answeredPost: k.answeredPost });
      if (no && yt) (0, import_chunk_865at33z.rOl)(Be, yt, { messageIds: k?.hearthRelayMessageIds, rows: k?.hearthRelayRows, threadTs: k?.hearthRelayThreadTs });
      if (k?.withdrawnFileUuids?.length) {
        ai(Be, yt, oi([...g, ...Be], k.withdrawnFileUuids, ke));
        for (let E of cEn(Be, k.withdrawnFileUuids, { earlier: g, onDisk: ke })) L.delete(E);
      }
      if ((0, import_chunk_r3kja8v6.ue)() && k?.pollEventFollowing !== void 0) Be.push(...k.pollEventFollowing);
      if (P) P = !(0, import_chunk_bzyb60p0.jja)({ conversation: g, turnMessages: Be, model: Pr, startsModelTurn: Rt }) && !Rt;
      if (Rt) try {
        e.beforeTurnInput?.();
      } catch (E) {
        (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`beforeTurnInput threw; the turn goes on without the host's rows: ${(0, import_chunk_jv7av99m.d)(E)}`, "beforeTurnInput threw"));
      }
      let Wr = Be.find(import_chunk_865at33z.On);
      if (Wr !== void 0) bs(Wr, g, e.session.host), await uEn(Wr, e.session, e.storageV5);
      let lo = Ge && !_t && yt !== void 0 ? await (0, import_chunk_bzyb60p0.KNt)(e.storageV5) : void 0;
      if ((0, import_chunk_bzyb60p0.BMe)()) await h.settled();
      let od = lo === void 0 ? [] : (0, import_chunk_wx3ay5nf.xqo)(g, yt, lo), er = { before: g.at(-1)?.uuid, next: void 0 }, mo = await (0, import_chunk_bzyb60p0.XY)(h, Be);
      if (mo !== Be) Be.splice(0, Be.length, ...mo);
      h.keep(od);
      let tr = _t ? k?.errorRowBehindRefusedPrompt : void 0;
      if (tr !== void 0 && g.findLastIndex((E) => E.uuid === tr.uuid) === -1) h.keep([tr]);
      if (tr !== void 0) An = k?.uuid;
      if (Rt && e.afterTurnInput !== void 0) {
        try {
          e.afterTurnInput();
        } catch (E) {
          (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`afterTurnInput threw; the turn goes on without the host's rows: ${(0, import_chunk_jv7av99m.d)(E)}`, "afterTurnInput threw"));
        }
        if ((0, import_chunk_bzyb60p0.BMe)()) await h.settled();
      }
      ro.handedOff();
      let Qe = [...g];
      if ((0, import_chunk_865at33z.Hc)()) qt = [];
      let Re = Qi({ conversation: g, messages: Qe, persistSession: Ge, storageV5: e.storageV5, holdsLoadersRows: e.loadShowsCutOffCalls === true, foldCopies: e.messageQueue, neverParentUuid: An });
      if (En = Ge ? Re : void 0, Rt && !_t && !Ht && k?.origin?.kind === "human" && (0, import_chunk_gq1dr8pm.Sul)()) await (0, import_chunk_gq1dr8pm.bul)((0, import_chunk_bzyb60p0.ABe)(Qe, (0, import_chunk_865at33z.Cu)()), () => (e.refreshMcpClients?.() ?? []).some((E) => E.type === "pending"));
      let hn = Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_EAGER_FLUSH) || Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_IS_COWORK);
      if (Ge && Be.length > 0) {
        let E = Re.record();
        if ((0, import_chunk_2gtmjt3y.Xn)()) ;
        else {
          if ((0, import_chunk_w4dc83v7.Qw)("conversation_append"), (0, import_chunk_w4dc83v7.Lk)("transcript_persist"), await E, hn) await (0, import_chunk_bzyb60p0.Pf)();
          (0, import_chunk_w4dc83v7.Qw)("transcript_persist"), (0, import_chunk_w4dc83v7.Lk)("conversation_append");
        }
      }
      let jr = oa(Be, sd, Ht === true), nr = k?.inputMode === "bash" ? Gi(jr.toAck) : e.replayUserMessages ? qi(jr.toAck, k) : [], an = e.includePartialMessages ?? false, id = an && (e.replayAcksAtRequestDispatch ?? false);
      (0, import_chunk_w4dc83v7.Qw)("conversation_append"), (0, import_chunk_w4dc83v7.Lk)("tool_pool_refresh"), (0, import_chunk_qf73a9we.T_o)((0, import_chunk_tfgxeb6k.aqr)(o), td, k);
      let co = on != null && ((0, import_chunk_865at33z.KT)(on) || (0, import_chunk_865at33z.wo)(on));
      if (on && !co) (0, import_chunk_w578pjby.t)(`Skill/command model "${on}" is not in the availableModels allowlist; keeping the session model`, { level: "warn" });
      let St = co && (0, import_chunk_865at33z.N7e)({ skillModel: on, mode: r().toolPermissionContext.mode, fastMode: r().fastMode ?? false }) ? on : Zn;
      he = { model: St, enabled: xt.fastMode };
      let Sn = Bt, qr = sn, Kr;
      try {
        let E = (0, import_chunk_b83x8d52.ZI)(re.signal);
        if (E !== void 0) await E;
        let Ee = e.refreshTools?.() ?? Bt;
        if (e.refreshTools !== void 0) Kr = Ee === Ze;
        Sn = Ee.length === Bt.length && Ee.every((Xe, Tt) => Xe.name === Bt[Tt]?.name) ? Bt : Ee, qr = e.refreshMcpClients?.() ?? sn;
      } catch (E) {
        (0, import_chunk_k449cc64.i)(E);
      }
      if ((0, import_chunk_w4dc83v7.Qw)("tool_pool_refresh"), Sn !== Ze) try {
        let E = (0, import_chunk_q2404y26.WQ)($s, Sn);
        if (E !== void 0) await E;
        let Ee = (0, import_chunk_f9x2f6cx.I1e)();
        (0, import_chunk_w4dc83v7.Lk)("system_prompt_rebuild");
        try {
          ({ systemPrompt: Qt, userContext: Qs, systemContext: Xs } = await Fs({ ...Dr, tools: (0, import_chunk_q2404y26.gG)({}, Sn), mcpClients: sn === Lt ? qr : sn })), Qt = zn ?? Qt;
        } finally {
          (0, import_chunk_w4dc83v7.Qw)("system_prompt_rebuild");
        }
        zs = Ee;
      } catch (E) {
        if (!(0, import_chunk_jv7av99m.Fe)(E)) (0, import_chunk_k449cc64.i)(E);
      }
      let po = { ...Fr, tools: Sn, mcpClients: qr, renderedSystemPrompt: Qt }, Mn = Mr(po, { phase: "query", messages: Qe, mainLoopModel: St, modelFacts: Ir, appState: r(), abortController: re, permissionLayers: oo !== void 0 ? [...xr ?? [], { kind: "effort", effort: oo }] : xr, activeSkill: Et.options.activeSkill });
      if (!Js) {
        (0, import_chunk_w4dc83v7.Lk)("init_message");
        let E = await js(po, St, xt.fastMode);
        (0, import_chunk_w4dc83v7.Qw)("init_message"), (0, import_chunk_w4dc83v7.Lk)("init_frame_send"), _n = true;
        let Ee = Ct(tt, performance.now());
        if (yield Ha(E, at, Rt && !_t && an && k?.resumeReason === void 0 && k?.orphanedPermission === void 0 && k?.deferredToolUse === void 0), Rt) la({ enqueuedWallMs: k?.frameTiming?.enqueuedWallMs, previousTurnEndedWallMs: en, startWallMs: Ar, startToInitMs: Ee });
      } else (0, import_chunk_w4dc83v7.Lk)("init_frame_send");
      if (Ta({ shouldQuery: Rt, fromUserInput: so, fromOptions: k?.shouldQuery }), yield* ws(Be, (0, import_chunk_f9x2f6cx.W)()), !ie) {
        ie = true;
        let E = await Pi(Ja, (0, import_chunk_f9x2f6cx.W)(), St);
        if (E !== null) yield E;
      }
      if (!I) {
        I = true;
        let E = Ri(e.session);
        if (E !== null) yield E;
      }
      let rr = Oi(V);
      if (rr !== null) {
        if (V = rr.said, rr.frame !== null) yield rr.frame;
      }
      let Vr = Di(J);
      if (J = Vr.said, Vr.frame !== null) yield Vr.frame;
      if (!Rt) {
        if ((0, import_chunk_w4dc83v7.Qw)("init_frame_send"), k?.inputMode !== "bash") yield* Ai(Be);
        if (Ge) {
          if (await Re.record(e.loadShowsCutOffCalls === true && k?.resumeReason !== void 0 && !Ht), hn) await (0, import_chunk_bzyb60p0.Pf)();
        }
        if (yield* k?.inputMode === "bash" ? Is(nr, k) : Ki(nr, k), Ht) {
          try {
            k?.onPromptCheckInterrupted?.();
          } catch (E) {
            if ((0, import_chunk_jv7av99m.Fe)(E)) (0, import_chunk_w578pjby.t)(`onPromptCheckInterrupted aborted: ${E}`);
            else (0, import_chunk_k449cc64.i)(E);
          }
          yield* ia(jr);
        }
        if (yield (0, import_chunk_08bv0y93.lue)({ startedAt: tt, common: { is_error: Ht === true, duration_api_ms: 0, num_turns: 0, stop_reason: null, session_id: (0, import_chunk_f9x2f6cx.W)(), total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), usage: $e, modelUsage: (0, import_chunk_f9x2f6cx.k$)(), permission_denials: Ln, terminal_reason: Ht ? "aborted_streaming" : void 0, fast_mode_state: (0, import_chunk_865at33z.ohe)(St, r().fastMode), fast_mode_disabled_reason: (0, import_chunk_865at33z.$N)() ?? (0, import_chunk_865at33z.rhe)(St, r().fastMode) ?? void 0, origin: k?.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(e.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, variant: Ht ? { subtype: "error_during_execution", errors: ["prompt_check: the turn was stopped before its prompt was checked"], ...at.errorVariantFields(), ...zt } : { subtype: "success", result: nd ?? "", ...at.fields(), ...zt, ...io !== void 0 && { local_command: (0, import_chunk_08bv0y93.BEa)(io) } } }), Mt) await Kn(Re, Qe, Ge, hn);
        return;
      }
      if (yield* Ci(Be), (0, import_chunk_bzyb60p0.UF)() && Ge) (0, import_chunk_bzyb60p0.Unt)(Mn.getFileHistoryState, Mn.applyFileHistoryOp, Be.filter((E) => Os(E, k)).map((E) => E.uuid));
      let Jt = (0, import_chunk_d1r21263.NEa)({ toolUseContext: Mn, sessionState: e.sessionState }), Gr = false, fo = false, $r = 0, xn = an ? k?.emitPlainDelta : void 0, ad = xn === void 0 ? void 0 : (E, Ee) => {
        if (xn === void 0 || !Gr || !fo && E.event.type === "content_block_delta" && E.event.delta.type === "text_delta") return false;
        try {
          let Xe = xn(Sr(E, { uuid: (0, import_crypto2.randomUUID)(), session_id: (0, import_chunk_f9x2f6cx.W)() }), Ee);
          if (Xe) $r++;
          return Xe;
        } catch (Xe) {
          return xn = void 0, (0, import_chunk_bzyb60p0.CIn)("host_threw", Xe), false;
        }
      };
      pe = { messages: Qe, systemPrompt: Qt, promptRenderEpoch: zs, renderSystemPrompt: async ({ tools: E, mcpClients: Ee }, { model: Xe }) => zn ?? wa({ ...Dr, tools: E, mcpClients: Ee, runtimeModel: Xe }), modelFacts: Ir, sessionModel: (0, import_chunk_d1r21263.mEn)(Mn), userContext: Qs, systemContext: Xs, canUseTool: e.canUseTool, toolUseContext: Mn, fallbackModel: e.fallbackModel, querySource: "sdk", maxTurns: e.maxTurns, taskBudget: e.taskBudget, takePlainDelta: ad, stopHookActive: k?.stopHookActive, turnEffortCap: Ia(mt?.turnEffortCap, Mn.permissionLayers, St, r()), continuesInterruptedWork: k?.continuesInterruptedWork, joinedDisallowedTools: (E) => {
        let Ee = E.length > 0 ? [] : e.refreshMcpClients?.() ?? Me(e.mcpClients);
        Yn(E, Rs(r().toolPermissionContext.turnDisallowedTools ?? [], E, Ee)), je = (0, import_chunk_4smdap7r.M)([...Rs(je, E, Ee), ...E]), Ue &&= E.length === 0, Dn(r().toolPermissionContext.turnDisallowedTools ?? []);
      }, inPlaceOfFirstRequest: k?.inPlaceOfFirstRequest === "nothing" ? void 0 : k?.inPlaceOfFirstRequest }, Ae();
      let dd = (0, import_chunk_k449cc64._1e)().at(-1);
      for (let E of Ve) E.next = er;
      Ve.clear(), Ve.add(er);
      let go = We("turn.start", () => (0, import_chunk_d1r21263.IVs)({ turnEvents: lt, newMessages: Be, input: typeof K === "string" ? K : void 0, signal: re.signal, abort: () => re.abort((0, import_chunk_cbnm4p23.hl)("turn-abort")) }), void 0);
      (0, import_chunk_w4dc83v7.Qw)("init_frame_send"), (0, import_chunk_w4dc83v7.Lk)("engine_pickup"), oe.enqueue({ type: "user", message: { role: "user", content: K }, parent_tool_use_id: null, origin: k?.origin });
      let ld = (0, import_crypto2.randomUUID)(), _o = (E) => E.findLast((Ee) => (Ee.type === "assistant" || Ee.type === "user") && !Re.isHostRow(Ee)), yo = /* @__PURE__ */ new Map(), ho, ud = () => e.refreshTools?.() ?? Sn, So = false;
      try {
        So = Me(e.replayOwnTaskNotifications) ?? false;
      } catch (E) {
        (0, import_chunk_k449cc64.i)(E);
      }
      let md = { replayUserMessages: e.replayUserMessages ?? false, replayOwnTaskNotifications: So, includePartialMessages: an, ...false }, Yr = Fi(), Zt = (E) => Es(Yr.settle(E), (0, import_chunk_f9x2f6cx.W)()), dn = Mi(an), cd = Yt ? (0, import_chunk_bzyb60p0.o_i)(g, import_chunk_2b1wcpvk.ga) : 0, pd = g.at(-1), ln = [], kn = 0, zr = /* @__PURE__ */ new Set(), ot = import_chunk_hym6yzrf.Eg, To, Mo, ko = /* @__PURE__ */ new Set(), Qr = () => an ? { begun_message_ids: [...ko] } : void 0, sr = null, wn = 0, or = 0, ir = 0, un, Un, Bn = 0, ar = 0, Xr = 0, bo = 0, vo = 1, Zr = nr.length === 0;
      function* dr() {
        if (!Zr) Zr = true, yield* Is(nr, k);
      }
      let ur = false, es = false, cr = Fo(() => at.fields()?.user_message_uuids ?? []);
      if (k?.inputMode === "bash") yield* dr();
      if (Ge && (0, import_chunk_bzyb60p0.lro)()) Re.writeHeldCallsAtShutdown(re.signal);
      try {
        while (true) {
          let { value: E, done: Ee } = await Oe.next();
          if (Gr = false, Ee) throw Error("headless session: the engine loop ended before the turn result");
          let Xe = E, Tt = true, ns = E.type === "assistant" && !("parent_tool_use_id" in E) || E.type === "user" || E.type === "system" && E.subtype === "compact_boundary", Nt = [], Co = false;
          switch (E.type) {
            case "assistant": {
              if ("parent_tool_use_id" in E || (0, import_chunk_bzyb60p0.Uen)(E)) break;
              let G = kr(E);
              (0, import_chunk_k5r71ad2.YVs)(e.messageQueue);
              let we = Xi(G, Ge ? e.markOfRepliesShownAsStored : void 0);
              if (cr.onAssistantRow(G), Jt.onAssistantMessage(G), !wn) wn = performance.now();
              if (G.message.stop_reason != null && !((0, import_chunk_w50zedgp.Ng)() && G.isVirtual === true)) sr = G.message.stop_reason;
              if (G.isApiErrorMessage) Nt.push(...Zt("stream_error"));
              let xe = Ni(G, To, Mo);
              if (xe) Mo = G.message.id, $e = (0, import_chunk_bzyb60p0.sSt)($e, xe);
              if (Co = G.message.stop_reason != null && G.message.stop_reason !== "refusal", Qe.push(G), Ge && we === void 0) Re.record();
              if (h.keep([G]), we === void 0) yield* dr(), C.absorb([G]);
              let Je;
              try {
                let rt = await (0, import_chunk_d1r21263.$Ea)(e.session, G, ld, z, re.signal, e.storageV5, e.credentials);
                if (Je = rt.message, we !== void 0) Ji(G, we, rt.hookOutputApplied);
              } finally {
                if (we !== void 0) Re.record();
              }
              if (we !== void 0) yield* dr(), C.absorb([G]);
              if (Je !== G) yo.set(G, Je);
              Xe = { ...Je, session_id: E.session_id, uuid: E.uuid };
              break;
            }
            case "user": {
              let G = kr(E);
              if ((0, import_chunk_0ha8wex8.rg)(G)) Nt.push(...Zt("interrupted"));
              if (ye !== void 0) eht([G], ye);
              kt = [];
              try {
                if (Qe.push(G), import_chunk_wx3ay5nf.o3r.of(e.session).noteResults(G), Ge) await Re.record();
                if (h.keep([G]), y.hasNews()) Ws(Re, Qe);
                C.absorb([G]), Re.settlePreservedTail(G.uuid);
              } finally {
                In();
              }
              if (!((0, import_chunk_w50zedgp.Ng)() && E.isVirtual === true)) vo++;
              break;
            }
            case "progress":
            case "attachment": {
              let G = Ul(kr(E)), we = (0, import_chunk_bzyb60p0.QYo)(G), xe = (0, import_chunk_zsqk76p8.EFt)(G);
              if (xe !== void 0 && ye !== void 0) eht([we], ye);
              if (!(0, import_chunk_wx3ay5nf.Bqo)(we, g)) h.keep([we]);
              if (C.absorb([G]), xe !== void 0) Re.holdFoldCopy(we, xe);
              if (Ge) {
                if (we.type === "attachment") {
                  let Je = true;
                  try {
                    Je = Ei(we.attachment, Qe) || (0, import_chunk_c1hnv4fm.PSe)(we.attachment);
                  } catch (rt) {
                    (0, import_chunk_k449cc64.i)(rt);
                  }
                  if (Je) Vs.push(we.uuid);
                }
                if (!(0, import_chunk_wx3ay5nf.Bqo)(we, Qe)) Qe.push(we);
                Re.record();
              }
              if (G.type === "attachment") at.noteAttachment(G.attachment);
              if (G.type === "attachment" && G.attachment.type === "structured_output") if (G.attachment.toolUseID !== void 0 ? zr.has(G.attachment.toolUseID) : zr.size > 0) Re.evict(G.uuid), (0, import_chunk_y53wbr8a.a)("tengu_structured_output_late_retraction_drop", {});
              else ln.push({ toolUseID: G.attachment.toolUseID, attachmentUuid: G.uuid });
              break;
            }
            case "tombstone": {
              cr.onRetraction(E.message.uuid), yield* dn.onTombstone(E), Re.evict(E.message.uuid), Yr.dropHeld(E.message.uuid);
              let G = E.message.type === "assistant" ? E.message.message.content : void 0, we = Array.isArray(G) ? G.flatMap((xe) => xe.type === "tool_use" && xe.name === import_chunk_2b1wcpvk.ga ? [xe.id] : []) : [];
              if (we.length > 0) {
                kn++, we.forEach((rt) => zr.add(rt));
                let xe = (rt) => rt.toolUseID === void 0 || we.includes(rt.toolUseID), Je = ln.filter(xe);
                Je.forEach((rt) => Re.evict(rt.attachmentUuid)), ln = ln.filter((rt) => !xe(rt)), (0, import_chunk_y53wbr8a.a)("tengu_structured_output_retracted", { retracted_results: Je.length, surviving_results: ln.length, tombstoned_calls: kn });
              }
              break;
            }
            case "stream_event":
              if (!("parent_tool_use_id" in E && E.parent_tool_use_id) && !(0, import_chunk_bzyb60p0.Pfe)(E.event)) {
                if ((0, import_chunk_k5r71ad2.YVs)(e.messageQueue), E.event.type === "message_start" && typeof E.event.message.id === "string" && E.event.message.id !== "") ko.add(E.event.message.id);
                if (e.nextProcessCarriesTurnOn === true && E.event.type === "message_start" && (0, import_chunk_865at33z.Hc)()) Re.noteResponseBegan(E.event.message.id);
                Re.settleFoldCopies();
              }
              if (Jt.onStreamEvent(E), Nt.push(...dn.onStreamEvent(E.event, ot)), !ir && (E.event.type === "content_block_start" || E.event.type === "content_block_delta")) ir = performance.now();
              if (E.event.type === "message_start") {
                if (!or) or = performance.now();
                if (ot = (0, import_chunk_bzyb60p0.qie)(import_chunk_hym6yzrf.Eg, E.event.message.usage), !Bn && "requestSentAtMs" in E && E.requestSentAtMs) Bn = E.requestSentAtMs;
                if (!ar && "requestSentWallMs" in E && E.requestSentWallMs) ar = E.requestSentWallMs, Xr = ot.input_tokens + ot.cache_read_input_tokens + ot.cache_creation_input_tokens, bo = ot.cache_read_input_tokens;
                To = E.event.message.id;
              } else if (E.event.type === "message_delta") {
                if (E.event.delta.stop_reason != null) {
                  if (sr = E.event.delta.stop_reason, E.event.delta.stop_reason !== "refusal") Nt.push(...Zt("served"));
                }
                if (ot = (0, import_chunk_bzyb60p0.sno)(E.event.usage)?.servedFallbackModel ? (0, import_chunk_bzyb60p0.Tpi)(ot, E.event.usage) : (0, import_chunk_bzyb60p0.qie)(ot, E.event.usage), (0, import_chunk_xfj2cwfv.yAt)(E.event)) $e = (0, import_chunk_bzyb60p0.sSt)($e, ot), ot = (0, import_chunk_bzyb60p0.qie)(import_chunk_hym6yzrf.Eg, E.event.resumed_usage);
                if (Ge) Re.record();
              } else if (E.event.type === "message_stop") $e = (0, import_chunk_bzyb60p0.sSt)($e, ot);
              break;
            case "system":
              if (E.subtype === "status" && E.status === "compacting") Re.settleFoldCopies("compaction");
              else if (E.subtype === "status") Re.settleFoldCopies();
              if (E.subtype === "status" && E.status === "requesting") cr.onRoundStart();
              if (E.subtype === "model_refusal_fallback") {
                Tt = false;
                let G = (0, import_chunk_wx3ay5nf.i3r)(E);
                if (Ka(G, Qe, Ge), yield* dn.onRefusalFallbackBanner(G.direction, ot), (0, import_chunk_gq1dr8pm.sV)()) yield* Es(Yr.accept(G), (0, import_chunk_f9x2f6cx.W)());
              } else if (qa(E, Qe, Re, Ge), E.subtype === "model_refusal_no_fallback") yield* Zt("exhausted");
              else if (E.subtype === "model_fallback") yield* Zt("availability_switch");
              else if (E.subtype === "informational") try {
                Tt = !(0, import_chunk_wddxyb00.rm)(e.session);
              } catch {
                Tt = false;
              }
              if (E.subtype === "compact_boundary") {
                let G = Re.dropPreservedRowsNotInConversation((0, import_chunk_wx3ay5nf.s3r)(E)), we = k?.resumeReason !== void 0;
                if (cr.onBoundary(G, { openerUuid: we && k.isMeta ? k.resumedTurnOpenerUuid : k?.resumedTurnOpenerUuid ?? Er, conversation: g, continuedTurnsRows: we ? g : void 0 }), (0, import_chunk_vqrgm5ev.RAe)(G, Qe), bs(G, Qe, e.session.host), (0, import_chunk_bzyb60p0.cQt)([G], k?.picturesToHide), ye !== void 0) eht([G], ye);
                G.compactMetadata.runningTurnPrompt = { clientPlatform: k?.clientPlatform, traceparent: (0, import_chunk_z2xw6net.m0e)() }, ho = _o(Qe), kt = [];
                try {
                  if (await uEn(G, e.session, e.storageV5), Ge) await Re.flushBeforeCompactBoundary(G);
                  if (Qe.push(G), Ge) await Re.record(true);
                  h.keep([G]), Re.applyCompactBoundary(G);
                } finally {
                  In();
                }
              }
              break;
            case "post_turn_summary":
              o((G) => G.postTurnSummary === E.value ? G : { ...G, postTurnSummary: E.value });
              break;
            case "active_goal":
              o((G) => G.activeGoal === E.value ? G : { ...G, activeGoal: E.value });
              break;
            case "command_lifecycle":
              if (E.state === "started") {
                let G = at.noteCommandStarted(E.command_uuid);
                try {
                  k?.onCommandTakenIn?.(E.command_uuid, G);
                } catch (we) {
                  (0, import_chunk_k449cc64.i)(we);
                }
                Re.settleFoldCopies();
              }
              break;
            case "result": {
              ur = true, es = true, Jt.end(E.terminal_reason), br(Re, Ze);
              let G = Ae();
              if (G !== void 0) throw yield* dn.closeAtTurnEnd(ot), G.error;
              E.permission_denials.unshift(...Ln), yield* dn.closeAtTurnEnd(ot), yield* Zt("turn_end");
              let we = (0, import_chunk_f9x2f6cx.Yyn)();
              if (we !== void 0) {
                let is = we;
                try {
                  if ((0, import_chunk_wddxyb00.rm)(e.session)) is = (0, import_chunk_vc58gmrj.Xgr)(we);
                } catch {
                  is = (0, import_chunk_vc58gmrj.Xgr)(we);
                }
                yield Xse((0, import_chunk_bzyb60p0.Pt)(is, "warning"));
              }
              if (Qe.push(...await Da(e.session.host, h, g, St)), (0, import_chunk_sjqze7qg.K7a)(e.session.host, g, St), Ge) {
                if (await Re.record(true), hn) await (0, import_chunk_bzyb60p0.Pf)();
              }
              let xe = E.subtype === "success" && !E.is_error && E.deferred_tool_use === void 0;
              if (Yt !== void 0 && xe && ln.length === 0 && kn > 0) {
                (0, import_chunk_y53wbr8a.a)("tengu_structured_output_retraction_exhausted", { tombstoned_calls: kn, num_turns: E.num_turns }), yield (0, import_chunk_08bv0y93.lue)({ startedAt: tt, common: { is_error: true, duration_api_ms: E.duration_api_ms, num_turns: E.num_turns, stop_reason: sr, session_id: (0, import_chunk_f9x2f6cx.W)(), total_cost_usd: E.total_cost_usd, usage: $e, modelUsage: E.modelUsage, permission_denials: E.permission_denials, terminal_reason: (0, import_chunk_xrav2tvh.WT)(E.terminal_reason) ? E.terminal_reason : "structured_output_retry_exhausted", fast_mode_state: E.fast_mode_state, fast_mode_disabled_reason: E.fast_mode_disabled_reason, origin: k?.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(e.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, variant: { subtype: "error_max_structured_output_retries", errors: [import_chunk_xgypevhc.MIa], ...at.errorVariantFields(), ...zt, ...Qr() } });
                return;
              }
              if (xe && wn) (0, import_chunk_y53wbr8a.a)("tengu_sdk_ttft", { ttft_ms: Ct(tt, wn), model: (0, import_chunk_865at33z.Xt)(St), ...Kr !== void 0 && { tool_pool_reused: Kr } });
              let Je = xe ? (0, import_chunk_zjhyjv3y.dvl)() : void 0, rt = xe && Bn ? Ct(tt, Bn) : void 0, Te = rt !== void 0 ? (0, import_chunk_w4dc83v7.wtl)(rt, Bn) : void 0, Eo = E.subtype === "success" && E.is_error && E.deferred_tool_use === void 0 ? (0, import_chunk_w4dc83v7.ktl)() : void 0, Po = xe && E.result.trim() === "" ? (0, import_chunk_k5r71ad2.QEa)(Qe) : void 0, rs = _o(Qe), pr = Po ?? (rs?.type === "user" && rs.isCompactSummary ? ho : rs), Ro = pr?.type === "assistant" && !(pr.isApiErrorMessage && !E.is_error) ? (0, import_chunk_wx3ay5nf.UHa)(pr, yo.get(pr) ?? Po) : void 0, ss = at.resultFields(), os = Ba(xe, tt, un), bn = Ba(xe, tt, Un);
              Xe = { ...E, usage: $e, duration_ms: Ct(tt, performance.now()), ...Qr(), ...Fn && { memory_check_detail: { ...Fn.detail } }, ...E.subtype === "error_during_execution" && { errors: (0, import_chunk_wddxyb00.Vlo)(e.session, E.errors[0] ?? "", Bl(E.errors.slice(1), (0, import_chunk_wx3ay5nf.yJs)(dd)), "first") }, ...E.subtype !== "success" && at.errorVariantFields(), ...E.subtype !== "success" && zt, ...E.subtype === "success" && { ...Ro !== void 0 && { result: Ro }, ttft_ms: xe && wn ? Ct(tt, wn) : void 0, ttft_stream_ms: xe && or ? Ct(tt, or) : void 0, time_to_request_ms: rt, ...Te && { time_to_request_phases_ms: Te.phases, turn_start_resume_kind: ya({ orphanedPermission: k?.orphanedPermission, handedOffTurn: k?.handedOffTurn, deferredToolUse: k?.deferredToolUse }), ...k?.handedOffTurn?.intakePhasesMs !== void 0 && { handoff_intake_phases_ms: k.handedOffTurn.intakePhasesMs } }, ...Eo !== void 0 && { process_turn_index: Eo }, ...Te?.window && { process_turn_index: Te.window.processTurnIndex }, ...Te?.window?.loopLagMs !== void 0 && { time_to_request_loop_lag_ms: Te.window.loopLagMs }, ...Te?.window?.resources && { time_to_request_cpu_ms: Te.window.resources.cpuMs, time_to_request_major_faults: Te.window.resources.majorFaults }, ...Te?.memory && { process_rss_mib_turn_start: Te.memory.atBegin.rssMib, process_anon_mib_turn_start: Te.memory.atBegin.anonMib, process_rss_mib_result: Te.memory.atConsume.rssMib, process_anon_mib_result: Te.memory.atConsume.anonMib, process_peak_rss_mib: Te.memory.atConsume.peakRssMib }, ...Te?.betweenTurns && { process_cpu_ms_between_turns: Te.betweenTurns.cpuMs, process_wall_ms_between_turns: Te.betweenTurns.wallMs }, ...Te?.turn && { process_cpu_ms_turn: Te.turn.cpuMs, process_wall_ms_turn: Te.turn.wallMs, ...ua(e.takeToolPoolBuildCounts) }, ...Te?.shellCpu && { shell_cpu_ms_turn: Te.shellCpu.turnMs, ...Te.shellCpu.sinceLastResult && { shell_cpu_ms_since_last_result: Te.shellCpu.sinceLastResult.cpuMs, shell_wall_ms_since_last_result: Te.shellCpu.sinceLastResult.wallMs } }, ...Te?.streaming && { process_cpu_ms_streaming: Te.streaming.cpuMs, process_wall_ms_streaming: Te.streaming.wallMs, main_stream_count: Te.streaming.streams, main_stream_event_count: Te.streaming.events, ...Te.streaming.chunks !== void 0 && { main_stream_chunk_count: Te.streaming.chunks } }, ...Te?.states && { process_turn_states: Te.states }, ...Te?.threads && { process_turn_threads: Te.threads }, ...Te?.inputAttachments && { input_attachments_detail: Te.inputAttachments }, ...Te?.storeConfirm && { resume_store_confirm_detail: Te.storeConfirm }, ...Te?.toolSchemaBuild && { tool_schema_build_detail: Te.toolSchemaBuild }, ...Te?.messageNormalization && { message_normalization_detail: Te.messageNormalization }, ...Te?.requestBuild && { request_build_detail: Te.requestBuild }, first_content_frame_ms: xe && ir ? Ct(tt, ir) : void 0, first_stream_post_ms: os.postMs, first_stream_post_ack_ms: xe && un?.ackedAtMs ? Ct(tt, un.ackedAtMs) : void 0, first_stream_post_queue_wait_ms: os.queueWaitMs, first_stream_post_queued_behind: os.queuedBehind, first_text_post_ms: bn.postMs, first_text_post_queue_wait_ms: bn.queueWaitMs, first_text_post_queued_behind: bn.queuedBehind, text_post_count: bn.textPosts, text_post_gap_over_500ms_count: bn.textPostGapsOver500Ms, text_post_flush_timer_max_late_ms: bn.flushTimerMaxLateMs, ...ss, ...zt, ...xe && ar && ss !== void 0 && ss.user_message_uuid === Er && { request_sent_wall_ms: ar, ...Xr > 0 && { first_request_input_tokens: Xr, first_request_cache_read_input_tokens: bo }, ...k?.frameTiming?.serverReceivedWallMs !== void 0 && { user_message_server_received_wall_ms: k.frameTiming.serverReceivedWallMs }, ...un?.postedWallMs !== void 0 && { first_stream_post_wall_ms: un.postedWallMs }, ...Un?.postedWallMs !== void 0 && { first_text_post_wall_ms: Un.postedWallMs }, ...k?.frameTiming?.receivedWallMs !== void 0 && { frame_received_wall_ms: k.frameTiming.receivedWallMs, frame_enqueued_wall_ms: k.frameTiming.enqueuedWallMs, turn_started_wall_ms: Ar, ...k.frameTiming.intakePhasesMs !== void 0 && { frame_intake_phases_ms: k.frameTiming.intakePhasesMs }, ...Jn !== void 0 && { turn_start_phases_ms: Jn.phases, ...Jn.controlRequestsMs > 0 && { turn_start_control_requests_ms: Jn.controlRequestsMs } } } }, ...Je && { time_to_request_from_spawn_ms: Je.ms, warm_spare_claimed: Je.warmSpareClaimed, flag_fetch_kick: Je.flagFetchKick, time_origin_ms: Je.timeOriginMs } } };
              break;
            }
            default:
              break;
          }
          if (ns || an && E.type === "stream_event" && !(0, import_chunk_bzyb60p0.Pfe)(E.event) || id && E.type === "system" && E.subtype === "status" && E.status === "requesting") {
            if (!Zr) yield* dr();
          }
          if (Nt.length > 0) yield* Nt;
          let Ao = (0, import_chunk_f9x2f6cx.W)();
          if (Tt) for (let G of bi(Xe.session_id === Ao ? Xe : { ...Xe, session_id: Ao }, ud, md)) {
            if (G.type === "assistant" && E.type === "assistant" && !("parent_tool_use_id" in E)) dn.onAssistantMessage(E);
            if (G.type === "stream_event" && G.parent_tool_use_id == null && (0, import_chunk_d1r21263.LEa)(G.event)) {
              if (Jt.markFirstTextPainted("stream_event"), fo = true, Un === void 0 && e.trackFirstTextFrameUpload !== void 0) Un = e.trackFirstTextFrameUpload(G.uuid);
            } else if (G.type === "assistant" && G.parent_tool_use_id == null && (0, import_chunk_d1r21263.yGr)(G, import_chunk_d1r21263.hEn)) Jt.markFirstTextPainted("message", G.message.id);
            if (un === void 0 && e.trackFirstFrameUpload !== void 0 && G.type === "stream_event" && G.parent_tool_use_id == null && !(0, import_chunk_bzyb60p0.Pfe)(G.event)) un = e.trackFirstFrameUpload(G.uuid);
            let we = G.type === "assistant" && G.parent_tool_use_id == null ? "assistant" : G.type === "stream_event" && G.parent_tool_use_id == null && !(0, import_chunk_bzyb60p0.Pfe)(G.event) ? "stream_event" : void 0, xe = we === void 0 ? void 0 : at.fields();
            if (we !== void 0 && xe !== void 0 && xe.user_message_uuid !== Ks[we]) Ks[we] = xe.user_message_uuid, yield { ...G, ...xe, ...zt, ...we === "stream_event" && { owed_rows: [...Vs] } };
            else if (G.type === "system" && G.subtype === "thinking_tokens") {
              let Je = at.fields();
              yield Je === void 0 ? G : { ...G, user_message_uuid: Je.user_message_uuid };
            } else if (G.type === "system" && G.subtype === "status" && G.status === "requesting") yield Na(G, at);
            else Gr = we === "stream_event" && (0, import_chunk_bzyb60p0.Nen)(E), yield G;
          }
          if (Co) yield* Zt("served");
          if (ur) return;
          if (E.type === "user" && Yt !== void 0 && !(0, import_chunk_bzyb60p0.BF)(e.maxBudgetUsd)) {
            let G = import_chunk_c203g5kd.s.MAX_STRUCTURED_OUTPUT_RETRIES ?? import_chunk_xgypevhc.Iqr;
            if ((0, import_chunk_bzyb60p0.o_i)(g, import_chunk_2b1wcpvk.ga) + kn - cd >= G && ln.length === 0) {
              if (es = true, await Ns(re, Ln), ur = true, br(Re, Ze), Ge) {
                if (await Re.record(true), hn) await (0, import_chunk_bzyb60p0.Pf)();
              }
              Jt.end("structured_output_retry_exhausted"), yield* dn.closeAtTurnEnd(ot), yield* Zt("turn_end"), yield (0, import_chunk_08bv0y93.lue)({ startedAt: tt, common: { is_error: true, duration_api_ms: (0, import_chunk_f9x2f6cx.WK)(), num_turns: vo, stop_reason: sr, session_id: (0, import_chunk_f9x2f6cx.W)(), total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), usage: $e, modelUsage: (0, import_chunk_f9x2f6cx.k$)(), permission_denials: Ln, terminal_reason: "structured_output_retry_exhausted", fast_mode_state: (0, import_chunk_865at33z.ohe)(St, xt.fastMode), fast_mode_disabled_reason: (0, import_chunk_865at33z.$N)() ?? (0, import_chunk_865at33z.rhe)(St, xt.fastMode) ?? void 0, origin: k?.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(e.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, variant: { subtype: "error_max_structured_output_retries", errors: [(0, import_chunk_xgypevhc.HIa)(G, kn, (0, import_chunk_xgypevhc.DIa)(g, pd))], ...at.errorVariantFields(), ...zt, ...Qr() } });
              return;
            }
          }
        }
      } finally {
        if (en = Date.now(), xn = void 0, $r > 0) (0, import_chunk_w578pjby.t)(`[headless] ${$r} streamed deltas went straight to output this turn (the fast path for plain deltas, plainDeltasNeedOnlyEmit)`, { level: "info" });
        if (Jt.end(void 0, re.signal.aborted), Jt.dispose(), !ur) await Ns(re);
        if (e.messageQueue.releaseQueuedAfterTurn(), !es) br(Re, Ze);
        if (await Re.settleFoldCopies("all"), Ve.delete(er), go !== void 0) We("turn.complete", () => (0, import_chunk_knp99ee7.eJs)({ turnEvents: lt, turnId: go, transcript: { getSnapshot: () => g }, span: er, durationMs: Ct(tt, performance.now()), isAborted: re.signal.aborted }), void 0);
        await Kn(Re, Qe, Ge, hn);
      }
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }
  async function Ns(K, k) {
    if (K === H) ge();
    try {
      while (true) {
        let { value: re, done: ke } = await Oe.next();
        if (ke) return;
        if (re.type === "result") {
          k?.push(...re.permission_denials);
          return;
        }
      }
    } catch (re) {
      (0, import_chunk_w578pjby.t)(`headless session: draining an abandoned turn failed: ${re instanceof Error ? re.message : String(re)}`, { level: "warn" });
    }
  }
  function Ws(K, k) {
    try {
      let re = (0, import_chunk_7jczpc8b.Bwt)(e.session), ke = (0, import_chunk_bzyb60p0.jTe)(K.unrecorded());
      for (let ve of [g, k]) (0, import_chunk_bzyb60p0.iHe)(ve, void 0, (Ne) => ke.has(Ne) || re?.mayYetReadResult?.(Ne) === true);
    } catch (re) {
      (0, import_chunk_k449cc64.i)(re);
    }
  }
  function br(K, k) {
    if (K.flushUnanchoredPreservedTail(), y.hasReports()) Ws(K, []);
    try {
      (0, import_chunk_bzyb60p0.Wqa)();
    } catch (re) {
      (0, import_chunk_k449cc64.i)(re);
    }
    try {
      let re = (0, import_chunk_bzyb60p0.Atn)(g, k, 0, true);
      if (re !== g) for (let ke = 0; ke < re.length; ke++) g[ke] = re[ke];
      (0, import_chunk_bzyb60p0.u9a)(g);
    } catch (re) {
      (0, import_chunk_k449cc64.i)(re);
    }
    X(true);
  }
  function qa(K, k, re, ke) {
    if ("timestamp" in K && "level" in K) {
      let Ne = kr(K);
      if (h.keep([Ne]), ke) k.push(Ne), re.record();
      return;
    }
    let ve;
    switch (K.subtype) {
      case "model_fallback":
        ve = (0, import_chunk_wx3ay5nf.l3r)(K);
        break;
      case "model_consent_fallback":
        ve = (0, import_chunk_wx3ay5nf.G7t)(K);
        break;
      case "model_refusal_no_fallback":
        ve = (0, import_chunk_wx3ay5nf.a3r)(K);
        break;
      default:
        return;
    }
    if (h.keep([ve]), ke) k.push(ve);
  }
  function Ka(K, k, re) {
    if (h.keep([K]), re) k.push(K), (0, import_chunk_y53wbr8a.a)("tengu_refusal_fallback_entry_recorded", { request_id: (0, import_chunk_49zxha55.Ce)(K.requestId) });
  }
  async function js(K, k, re) {
    let [ke, ve] = await Sa(K.storageV5), Ne = r(), Ke;
    try {
      Ke = (0, import_chunk_bzyb60p0.lne)(ke, Ne.mcp.commands);
    } catch (pt) {
      (0, import_chunk_k449cc64.i)(pt), Ke = ke.filter((ft) => ft.loadedFrom !== "syncedSkills");
    }
    let qe;
    try {
      qe = Me(e.capabilities);
    } catch (pt) {
      (0, import_chunk_k449cc64.i)(pt), qe = [];
    }
    return { ...await va({ session: K.session, tools: (0, import_chunk_w50zedgp.Ng)() && (0, import_chunk_w50zedgp.$h)(K.tools) ? (0, import_chunk_pbteexar.Ls)([...K.tools, ...require("/$bunfs/root/chunk-6nfqwb5z.js").getToolsForREPL(K.tools, Ne.toolPermissionContext, Me(e.primitiveToolGrant))], (pt) => pt.name) : K.tools, mcpClients: K.mcpClients, model: k, readSessionEffort: () => (0, import_chunk_k67pwqya.bc)(Ne), permissionMode: Ne.toolPermissionContext.mode, commands: K.commands, agents: K.agents, skills: Ke, plugins: ve, fastMode: re, proactivityState: Ne, capabilities: qe, messagesInView: () => (0, import_chunk_865at33z.Or)(g) }), ...sa({ turnThinking: K.thinkingConfig, heldThinking: () => Me(e.thinkingConfig), turnModel: k, fastMode: r().fastMode, toolPermissionContext: r().toolPermissionContext }) };
  }
  return { submitMessage: te, interrupt: ge, setModel: (K) => {
    se = K;
  }, getMessages: () => g, keepArrivedRows: Pn, appendMessages: (K) => {
    if (qt !== void 0) qt.push(...K);
    else if (kt !== void 0) kt.push({ rows: K, isAnswered: false });
    else Rn(K);
  }, appendsSettled: () => h.settled(), denyNamesOfPromptServedAgain: (K) => {
    let k = r().toolPermissionContext.turnDisallowedTools ?? [], re = K.filter((ve) => !it.includes(ve) && !k.includes(ve));
    if (re.length === 0) return;
    if (st) Ps(e.onDenyListsOnlyOnMessage, re.length);
    else ct = (0, import_chunk_4smdap7r.M)([...ct, ...re]);
    let ke = (0, import_chunk_4smdap7r.M)([...k, ...ut, ...re]);
    Yn(ke, ke), Dn(r().toolPermissionContext.turnDisallowedTools ?? []);
  }, getReadFileState: () => L, turnDenyNamesOnRecord: () => e.keepsDenyListsOnRecord === true ? At?.turn ?? [] : [], denyListsToStore: () => ye, dispose: () => {
    (0, import_chunk_bzyb60p0.Z4e)(), e.abortController?.signal.removeEventListener("abort", Q), H.abort((0, import_chunk_cbnm4p23.hl)("remote-cancel")), oe.done(), Oe.return(void 0).catch(import_chunk_k449cc64.i), g = [], L = (0, import_chunk_5sjwf92x.iv)(import_chunk_5sjwf92x.JO), O = /* @__PURE__ */ new Map(), N = new import_chunk_sjqze7qg.Oq(), z = (0, import_chunk_jhdsf4g3.cAe)(), be = (0, import_chunk_bzyb60p0.qTe)();
  } };
}
function Ct(e, r) {
  return Math.max(0, Math.round(r - e));
}
function Ba(e, r, o) {
  try {
    let g = o?.postedAtMs, y = o?.enqueuedAtMs;
    if (!e || !g) return {};
    let h = o?.textRhythm;
    return { postMs: Ct(r, g), ...y !== void 0 && y !== 0 && { queueWaitMs: Ct(y, g), queuedBehind: o?.queuedBehind }, ...h !== void 0 && h.posts > 0 && !(0, import_chunk_f9x2f6cx.Y)() && { textPosts: h.posts, textPostGapsOver500Ms: h.gapsOver500Ms, flushTimerMaxLateMs: h.timerMaxLateMs } };
  } catch (g) {
    return (0, import_chunk_k449cc64.i)(g), {};
  }
}
function T8t(e, { abortController: r, userSpecifiedModel: o }) {
  let { getAppState: g, setAppState: y } = e, h = e.refreshTools?.() ?? Me(e.tools), P = e.refreshMcpClients?.() ?? Me(e.mcpClients), C = Me(e.jsonSchema), L = g(), { mainLoopModel: O, thinkingConfig: R } = Tr({ userSpecifiedModel: o, permissionMode: L.toolPermissionContext.mode, thinkingConfig: Me(e.thinkingConfig) });
  return Mr({ session: e.session, messageQueue: e.messageQueue, commands: Me(e.commands), tools: h, refreshTools: e.refreshTools, admitsMcpTool: e.admitsMcpTool, toolCatalog: e.toolCatalog, refreshMcpClients: e.refreshMcpClients, verbose: e.verbose ?? false, fallbackModel: e.fallbackModel, thinkingConfig: R, mcpClients: P, customSystemPrompt: Me(e.customSystemPrompt), appendSystemPrompt: Me(e.appendSystemPrompt), planModeInstructions: Me(e.planModeInstructions), systemPromptSnapshot: Me(e.systemPromptSnapshot), appendSubagentSystemPrompt: Me(e.appendSubagentSystemPrompt), toolAliases: Me(e.toolAliases), excludeDynamicSections: Me(e.excludeDynamicSections), agents: Me(e.agents), allowedAgentTypes: Me(e.allowedAgentTypes), primitiveToolGrant: Me(e.primitiveToolGrant), maxBudgetUsd: e.maxBudgetUsd, messageClientPlatform: void 0, forwardSubagentText: Me(e.forwardSubagentText) ?? false, requiresStructuredOutput: C !== void 0 && h.some((N) => (0, import_chunk_4vsz8a99.gt)(N, import_chunk_2b1wcpvk.ga)), onPermissionDenial: () => {
  }, requestDialog: e.requestDialog, sessionState: e.sessionState, getAppState: g, setAppState: y, setSDKStatus: e.setSDKStatus, readFileState: e.readFileCache, pendingNestedMemoryTriggers: e.pendingNestedMemoryTriggers, sessionEnvVars: e.sessionEnvVars ?? /* @__PURE__ */ new Map(), toolState: e.toolState ?? new import_chunk_sjqze7qg.Oq(), memorySelector: e.memorySelector ?? (0, import_chunk_bzyb60p0.qTe)(), isolationLatch: e.isolationLatch ?? (0, import_chunk_4chf71g6._kt)(), sessionHooks: e.sessionHooks ?? (0, import_chunk_jhdsf4g3.cAe)(), storageV5: e.storageV5, credentials: e.credentials }, { phase: "query", messages: [...e.initialMessages ?? []], mainLoopModel: O, appState: L, abortController: r, permissionLayers: void 0, activeSkill: void 0 });
}
function Me(e) {
  return xl(e) ? e() : e;
}
function xl(e) {
  return typeof e === "function";
}
function kr(e) {
  let { session_id: r, ...o } = e;
  return o;
}
function Ul(e) {
  try {
    if (e.type !== "attachment" || e.attachment.type !== "max_turns_reached") return e;
    let r = (0, import_chunk_xfj2cwfv.nn)();
    if (r) (0, import_chunk_y53wbr8a.a)("tengu_max_turns_reached_exit_committed", {});
    return { ...e, attachment: { ...e.attachment, exitCommitted: r } };
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), e;
  }
}
function Bl(e, r) {
  let o = new Set(r);
  return [...e.filter((g) => !o.has(g)), ...r];
}
function Na(e, r) {
  try {
    let o = r.fields();
    return o === void 0 ? e : { ...e, user_message_uuids: o.user_message_uuids };
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), e;
  }
}
function Ha(e, r, o = false) {
  return e.type === "system" && "subtype" in e && e.subtype === "init" ? Na(o ? { ...e, [import_chunk_c44qd7ec.$8o]: true } : e, r) : e;
}
