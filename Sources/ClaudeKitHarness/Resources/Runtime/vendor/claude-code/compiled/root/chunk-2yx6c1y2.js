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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s3, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s3, _2;
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
var chunk_2yx6c1y2_exports = {};
__export(chunk_2yx6c1y2_exports, {
  $Io: () => $Io,
  $Ji: () => $Ji,
  $ze: () => $ze,
  AFl: () => AFl,
  AJi: () => AJi,
  AMs: () => AMs,
  ARt: () => ARt,
  A_: () => A_,
  Aw: () => Aw,
  BIo: () => BIo,
  BJi: () => BJi,
  Bze: () => Bze,
  CFl: () => CFl,
  CJe: () => CJe,
  CJi: () => CJi,
  CM: () => CM,
  CMs: () => CMs,
  CRt: () => CRt,
  C_: () => C_,
  Cz: () => Cz,
  D3l: () => D3l,
  DJi: () => DJi,
  Dee: () => Dee,
  Doe: () => Doe,
  EFe: () => EFe,
  EFl: () => EFl,
  EJe: () => EJe,
  EJi: () => EJi,
  EMs: () => EMs,
  ERt: () => ERt,
  FJi: () => FJi,
  Fze: () => Fze,
  GIo: () => GIo,
  GJi: () => GJi,
  GMr: () => GMr,
  GXi: () => GXi,
  H3l: () => H3l,
  HJi: () => HJi,
  Hee: () => Hee,
  I3l: () => I3l,
  IJi: () => IJi,
  IRt: () => IRt,
  Iee: () => Iee,
  JIo: () => JIo,
  JMr: () => JMr,
  JNl: () => JNl,
  JPe: () => JPe,
  JXi: () => JXi,
  Jde: () => Jde,
  Jhn: () => Jhn,
  KC: () => KC,
  KIo: () => KIo,
  KJi: () => KJi,
  KMr: () => KMr,
  KNl: () => KNl,
  KR: () => KR,
  KXi: () => KXi,
  Kb: () => Kb,
  Kg: () => Kg,
  L3l: () => L3l,
  LJi: () => LJi,
  Lee: () => Lee,
  Loe: () => Loe,
  M3l: () => M3l,
  MJi: () => MJi,
  Mee: () => Mee,
  Mr: () => Mr,
  NJi: () => NJi,
  Nze: () => Nze,
  O3l: () => O3l,
  OJi: () => OJi,
  ORt: () => ORt,
  PJi: () => PJi,
  PRt: () => PRt,
  Po: () => Po,
  QIo: () => QIo,
  QMr: () => QMr,
  QNl: () => QNl,
  QPe: () => QPe,
  QT: () => QT,
  QX: () => QX,
  QXi: () => QXi,
  Qde: () => Qde,
  Qhe: () => Qhe,
  Qhn: () => Qhn,
  RFl: () => RFl,
  RJi: () => RJi,
  RMs: () => RMs,
  RRt: () => RRt,
  Rc: () => Rc,
  Rp: () => Rp,
  Rw: () => Rw,
  SB: () => SB,
  SFl: () => SFl,
  SI: () => SI,
  SJe: () => SJe,
  SJi: () => SJi,
  SKn: () => SKn,
  SMs: () => SMs,
  Sk: () => Sk,
  Snd: () => Snd,
  Sv: () => Sv,
  TFe: () => TFe,
  TFl: () => TFl,
  TJe: () => TJe,
  TJi: () => TJi,
  TM: () => TM,
  TMs: () => TMs,
  TRt: () => TRt,
  Tz: () => Tz,
  UIo: () => UIo,
  UJi: () => UJi,
  Uze: () => Uze,
  VC: () => VC,
  VIo: () => VIo,
  VJi: () => VJi,
  VMr: () => VMr,
  VXi: () => VXi,
  WIo: () => WIo,
  WJi: () => WJi,
  WMr: () => WMr,
  Wze: () => Wze,
  XIo: () => XIo,
  XMr: () => XMr,
  XNl: () => XNl,
  XPe: () => XPe,
  XXi: () => XXi,
  Xde: () => Xde,
  YIo: () => YIo,
  YJi: () => YJi,
  YMr: () => YMr,
  YNl: () => YNl,
  YPe: () => YPe,
  YXi: () => YXi,
  ZIo: () => ZIo,
  ZMr: () => ZMr,
  ZN: () => ZN,
  ZNl: () => ZNl,
  ZPe: () => ZPe,
  ZXi: () => ZXi,
  Zde: () => Zde,
  Zhe: () => Zhe,
  Zhn: () => Zhn,
  _8: () => _8,
  _D: () => _D,
  _Fl: () => _Fl,
  _Je: () => _Je,
  _Ji: () => _Ji,
  _Kn: () => _Kn,
  _Ms: () => _Ms,
  _e: () => _e,
  _n: () => _n,
  _nd: () => _nd,
  _p: () => _p,
  aFl: () => aFl,
  aJi: () => aJi,
  aKn: () => aKn,
  aKt: () => aKt,
  aL: () => aL,
  agn: () => agn,
  ah: () => ah,
  aut: () => aut,
  bFl: () => bFl,
  bI: () => bI,
  bJe: () => bJe,
  bJi: () => bJi,
  bKn: () => bKn,
  bMs: () => bMs,
  bnd: () => bnd,
  bv: () => bv,
  c3: () => c3,
  cFl: () => cFl,
  cJi: () => cJi,
  cKn: () => cKn,
  cKt: () => cKt,
  cMs: () => cMs,
  cgn: () => cgn,
  cut: () => cut,
  dFl: () => dFl,
  dJi: () => dJi,
  dKn: () => dKn,
  dKt: () => dKt,
  dMs: () => dMs,
  dgn: () => dgn,
  dut: () => dut,
  e$: () => e$,
  eF: () => eF,
  eFl: () => eFl,
  eHr: () => eHr,
  eJi: () => eJi,
  eKt: () => eKt,
  eMo: () => eMo,
  eOe: () => eOe,
  ece: () => ece,
  ege: () => ege,
  egn: () => egn,
  ep: () => ep,
  fFl: () => fFl,
  fJi: () => fJi,
  fKn: () => fKn,
  fKt: () => fKt,
  fMs: () => fMs,
  fl: () => fl,
  fut: () => fut,
  g8: () => g8,
  gFl: () => gFl,
  gJi: () => gJi,
  gKn: () => gKn,
  gMs: () => gMs,
  gnd: () => gnd,
  hFl: () => hFl,
  hJi: () => hJi,
  hKn: () => hKn,
  hMs: () => hMs,
  iFl: () => iFl,
  iHr: () => iHr,
  iJi: () => iJi,
  iKn: () => iKn,
  iKt: () => iKt,
  iL: () => iL,
  ign: () => ign,
  iut: () => iut,
  jIo: () => jIo,
  jJi: () => jJi,
  jMr: () => jMr,
  jXi: () => jXi,
  kFl: () => kFl,
  kJe: () => kJe,
  kJi: () => kJi,
  kK: () => kK,
  kMs: () => kMs,
  kRt: () => kRt,
  kv: () => kv,
  lFl: () => lFl,
  lJi: () => lJi,
  lKn: () => lKn,
  lKt: () => lKt,
  lMs: () => lMs,
  lgn: () => lgn,
  lut: () => lut,
  mFl: () => mFl,
  mJi: () => mJi,
  mKn: () => mKn,
  mMs: () => mMs,
  mut: () => mut,
  nFl: () => nFl,
  nHr: () => nHr,
  nJi: () => nJi,
  nKt: () => nKt,
  nce: () => nce,
  ngn: () => ngn,
  oEe: () => oEe,
  oFl: () => oFl,
  oHr: () => oHr,
  oJi: () => oJi,
  oKt: () => oKt,
  ogn: () => ogn,
  pFl: () => pFl,
  pJi: () => pJi,
  pKn: () => pKn,
  pKt: () => pKt,
  pMs: () => pMs,
  pd: () => pd,
  put: () => put,
  qIo: () => qIo,
  qJi: () => qJi,
  qMr: () => qMr,
  qNl: () => qNl,
  qPe: () => qPe,
  qXi: () => qXi,
  rEe: () => rEe,
  rFl: () => rFl,
  rHr: () => rHr,
  rJi: () => rJi,
  rKt: () => rKt,
  rgn: () => rgn,
  sEe: () => sEe,
  sFl: () => sFl,
  sHr: () => sHr,
  sJi: () => sJi,
  sKt: () => sKt,
  sL: () => sL,
  sgn: () => sgn,
  tF: () => tF,
  tFl: () => tFl,
  tHr: () => tHr,
  tJi: () => tJi,
  tKt: () => tKt,
  tce: () => tce,
  tgn: () => tgn,
  uFl: () => uFl,
  uJi: () => uJi,
  uKn: () => uKn,
  uKt: () => uKt,
  uMs: () => uMs,
  uut: () => uut,
  vFe: () => vFe,
  vFl: () => vFl,
  vJe: () => vJe,
  vJi: () => vJi,
  vMs: () => vMs,
  vRt: () => vRt,
  vl: () => vl,
  vm: () => vm,
  vt: () => vt,
  wFl: () => wFl,
  wJe: () => wJe,
  wJi: () => wJi,
  wKn: () => wKn,
  wMs: () => wMs,
  wnd: () => wnd,
  wv: () => wv,
  xFl: () => xFl,
  xJi: () => xJi,
  xMs: () => xMs,
  xRt: () => xRt,
  y8: () => y8,
  yB: () => yB,
  yFl: () => yFl,
  yJe: () => yJe,
  yJi: () => yJi,
  yKn: () => yKn,
  yMs: () => yMs,
  ynd: () => ynd,
  zIo: () => zIo,
  zJi: () => zJi,
  zMr: () => zMr,
  zXi: () => zXi,
  zr: () => zr
});
module.exports = __toCommonJS(chunk_2yx6c1y2_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_m417dzmj = require("/$bunfs/root/chunk-m417dzmj.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_path = require("path");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path2 = require("path");
var import_fs2 = require("fs");
var import_promises2 = require("fs/promises");
var import_path3 = require("path");
var import_async_hooks = require("async_hooks");
var import_promises3 = require("fs/promises");
var import_path4 = require("path");
var import_fs3 = require("fs");
var import_promises4 = require("fs/promises");
var import_path5 = require("path");
var import_fs4 = require("fs");
var import_promises5 = require("fs/promises");
var import_path6 = require("path");
var import_promises6 = require("fs/promises");
var import_os2 = require("os");
var import_path7 = require("path");
var import_fs5 = require("fs");
var import_path8 = require("path");
var import_promises7 = require("fs/promises");
var import_path9 = require("path");
var import_path10 = require("path");
var import_path11 = require("path");
(0, import_chunk_adx6804h.B)();
function ZN(e, r) {
  (0, import_chunk_w578pjby.t)(`Diskless session: skipped the ${e} write to ${r} because no storage backend could take it`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_diskless_write_skipped", { writer: (0, import_chunk_78g0060s.f)(e) });
}
function je(e) {
  return (0, import_chunk_q7qjcthc.qoe)(e) || (0, import_chunk_jv7av99m.w)(e) === "EBADF";
}
function Ke(e) {
  switch (e) {
    case "replaced":
      return "another writer has replaced the file";
    case "torn":
      return "the file may be damaged, or hold another writer's save";
    case "unflushed":
      return "its old content is back but may not have reached the disk";
  }
}
async function On(e, r, o) {
  let g = Cn(r, o);
  if (g !== void 0) return g;
  try {
    let h = Buffer.allocUnsafe(Number(r.size)), y = await Ln(e, h);
    return { kind: "putBack", oldBytes: h.subarray(0, y), dev: r.dev, ino: r.ino };
  } catch (h) {
    return (0, import_chunk_w578pjby.t)(`In-place fallback has no copy of the file: ${h}`), { kind: "none" };
  }
}
async function An(e, r, o, g, h, y, E = () => (0, import_promises2.unlink)(o)) {
  if (e.kind !== "putBack") {
    let P = e.kind === "remove" && await (0, import_chunk_q7qjcthc.t0s)(o, e, h, y);
    switch (await Nt(r), e.kind) {
      case "nothing":
        return "clear";
      case "none":
        return "torn";
      case "remove":
        if (P) return "replaced";
        try {
          return await E(), "clear";
        } catch (b) {
          return (0, import_chunk_jv7av99m.J)(b) ? "clear" : "torn";
        }
    }
  }
  if (r !== void 0) try {
    return await (0, import_chunk_q7qjcthc.t0s)(o, e, h, void 0) ? "replaced" : await vn(r, e.oldBytes, h);
  } catch (P) {
    (0, import_chunk_w578pjby.t)(`In-place fallback could not put the file back: ${P}`);
  } finally {
    await Nt(r);
  }
  try {
    let P = await (0, import_promises2.open)(o, g);
    try {
      return xn(await P.stat({ bigint: true }), e) ? await vn(P, e.oldBytes, h) : "torn";
    } finally {
      await Nt(P);
    }
  } catch (P) {
    return (0, import_chunk_w578pjby.t)(`In-place fallback could not put the file back: ${P}`, { level: "error" }), "torn";
  }
}
function Tn(e, r, o) {
  let g = Cn(r, o);
  if (g !== void 0) return g;
  try {
    let h = Buffer.allocUnsafe(Number(r.size)), y = Hn(e, h);
    return { kind: "putBack", oldBytes: h.subarray(0, y), dev: r.dev, ino: r.ino };
  } catch (h) {
    return (0, import_chunk_w578pjby.t)(`In-place fallback has no copy of the file: ${h}`), { kind: "none" };
  }
}
function In(e, r, o, g, h, y) {
  if (e.kind !== "putBack") {
    let E = e.kind === "remove" && (0, import_chunk_q7qjcthc.n0s)(o, e, h, y);
    switch (Dt(r), e.kind) {
      case "nothing":
        return "clear";
      case "none":
        return "torn";
      case "remove":
        if (E) return "replaced";
        try {
          return (0, import_fs2.unlinkSync)(o), "clear";
        } catch (P) {
          return (0, import_chunk_jv7av99m.J)(P) ? "clear" : "torn";
        }
    }
  }
  if (r !== void 0) try {
    return (0, import_chunk_q7qjcthc.n0s)(o, e, h, void 0) ? "replaced" : Fn(r, e.oldBytes, h);
  } catch (E) {
    (0, import_chunk_w578pjby.t)(`In-place fallback could not put the file back: ${E}`);
  } finally {
    Dt(r);
  }
  try {
    let E = (0, import_fs2.openSync)(o, g);
    try {
      return xn((0, import_fs2.fstatSync)(E, { bigint: true }), e) ? Fn(E, e.oldBytes, h) : "torn";
    } finally {
      Dt(E);
    }
  } catch (E) {
    return (0, import_chunk_w578pjby.t)(`In-place fallback could not put the file back: ${E}`, { level: "error" }), "torn";
  }
}
function xn(e, r) {
  return e.dev === r.dev && e.ino === r.ino;
}
function Cn(e, r) {
  if (!e.isFile()) return { kind: "nothing" };
  if (r && e.size === 0n) return { kind: "remove", ino: e.ino };
  return e.size > BigInt(import_chunk_q7qjcthc.l0r) ? { kind: "none" } : void 0;
}
async function Nt(e) {
  try {
    await e?.close();
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`Failed to close the file: ${r}`);
  }
}
async function Ln(e, r) {
  let o = 0;
  while (o < r.length) {
    let { bytesRead: g } = await e.read(r, o, r.length - o, o);
    if (g === 0) break;
    o += g;
  }
  return o;
}
function Mn(e, r) {
  return Buffer.allocUnsafe(Math.max(e.length, r.length) + 1);
}
function Dn(e, r, o) {
  if (o.equals(e)) return "clear";
  return o.some((g, h) => g !== 0 && g !== e[h] && g !== r[h]) ? "torn" : void 0;
}
async function vn(e, r, o) {
  let g = Mn(r, o), h;
  try {
    h = await Ln(e, g);
    let E = Dn(r, o, g.subarray(0, h));
    if (E !== void 0) return E;
  } catch (E) {
    (0, import_chunk_w578pjby.t)(`In-place fallback could not read the file back: ${E}`);
  }
  let y = 0;
  while (y < r.length) {
    let { bytesWritten: E } = await e.write(r, y, r.length - y, y);
    if (E === 0) throw Error("write made no progress");
    y += E;
  }
  if (h === void 0 || h > r.length) await e.truncate(r.length);
  try {
    return await e.sync(), "clear";
  } catch (E) {
    return (0, import_chunk_w578pjby.t)(`fsync of the restored file failed: ${E}`), je(E) ? "clear" : "unflushed";
  }
}
function Dt(e) {
  if (e === void 0) return;
  try {
    (0, import_fs2.closeSync)(e);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`Failed to close the file: ${r}`);
  }
}
function Hn(e, r) {
  let o = 0;
  while (o < r.length) {
    let g = (0, import_fs2.readSync)(e, r, o, r.length - o, o);
    if (g === 0) break;
    o += g;
  }
  return o;
}
function Fn(e, r, o) {
  let g = Mn(r, o), h;
  try {
    h = Hn(e, g);
    let E = Dn(r, o, g.subarray(0, h));
    if (E !== void 0) return E;
  } catch (E) {
    (0, import_chunk_w578pjby.t)(`In-place fallback could not read the file back: ${E}`);
  }
  let y = 0;
  while (y < r.length) {
    let E = (0, import_fs2.writeSync)(e, r, y, r.length - y, y);
    if (E === 0) throw Error("write made no progress");
    y += E;
  }
  if (h === void 0 || h > r.length) (0, import_fs2.ftruncateSync)(e, r.length);
  try {
    return (0, import_fs2.fsyncSync)(e), "clear";
  } catch (E) {
    return (0, import_chunk_w578pjby.t)(`fsync of the restored file failed: ${E}`), je(E) ? "clear" : "unflushed";
  }
}
var kRt = 4096;
function KC(e) {
  return typeof e === "string" && e.length <= 4096;
}
class Yn {
  identities = /* @__PURE__ */ new Map();
  record(e, r, o, g) {
    let h = Bn(e), y = this.identities.get(h);
    if (y) try {
      (0, import_fs.closeSync)(y.fd);
    } catch {
    }
    this.identities.set(h, { dev: r, ino: o, fd: g });
  }
  identity(e) {
    return this.identities.get(Bn(e));
  }
  reset() {
    for (let { fd: e } of this.identities.values()) try {
      (0, import_fs.closeSync)(e);
    } catch {
    }
    this.identities.clear();
  }
}
var _o = new import_chunk_2904xtvq.j(() => new Yn());
function Ut() {
  return _o.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Bn(e) {
  return (0, import_path2.resolve)(e);
}
function qXi(e, r, o, g) {
  Ut().record(e, r, o, g);
}
function Qhn(e) {
  if (!e) return;
  let r = Ut().identity(e);
  if (!r) return;
  let o;
  try {
    o = (0, import_fs.openSync)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW);
  } catch (g) {
    let h = (0, import_chunk_jv7av99m.w)(g);
    if (h === "ENOENT" || h === "ENOTDIR" || h === "ELOOP" || h === "EACCES") tKt(`Staging dir ${e} was established for a sandboxed command but is now unopenable (${h}) \u2014 refusing atomic write`);
    throw g;
  }
  try {
    let g = (0, import_fs.fstatSync)(o);
    if (g.dev !== r.dev || g.ino !== r.ino) tKt(`Staging dir ${e} identity changed (expected ${r.dev}/${r.ino}, found ${g.dev}/${g.ino}) \u2014 refusing atomic write`);
  } finally {
    (0, import_fs.closeSync)(o);
  }
}
function BIo(e, r, o, g) {
  let h = `${r}${o}`;
  if (!e) return h;
  let y = Ut().identity(e);
  if (g && (0, import_path2.dirname)(r) !== (0, import_path2.dirname)(e)) return Qhn(e), h;
  let E = import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW;
  try {
    (0, import_fs.closeSync)((0, import_fs.openSync)((0, import_path2.dirname)(e), E));
  } catch (b) {
    let v = (0, import_chunk_jv7av99m.w)(b);
    if (v === "ELOOP" || v === "ENOTDIR") {
      if (y) tKt(`Staging dir parent ${(0, import_path2.dirname)(e)} is ${v} but a sandboxed command established ${e} \u2014 refusing sibling fallback`);
      if (g) return h;
      throw new C_(`Refusing to stage atomic write under non-directory parent: ${(0, import_path2.dirname)(e)}`);
    }
    if (!(0, import_chunk_jv7av99m.J)(b)) throw b;
    if (y) tKt(`Staging dir parent ${(0, import_path2.dirname)(e)} is absent but a sandboxed command established ${e} \u2014 refusing sibling fallback`);
    return h;
  }
  let P;
  try {
    P = (0, import_fs.openSync)(e, E);
  } catch (b) {
    let v = (0, import_chunk_jv7av99m.w)(b);
    if (v === "ENOENT" || v === "ENOTDIR" || v === "ELOOP") {
      if (y) tKt(`Staging dir ${e} is ${v} but a sandboxed command established it \u2014 refusing sibling fallback`);
      return h;
    }
    throw b;
  }
  try {
    if (y) {
      let b = (0, import_fs.fstatSync)(P);
      if (b.dev !== y.dev || b.ino !== y.ino) tKt(`Staging dir ${e} identity changed (expected ${y.dev}/${y.ino}, found ${b.dev}/${b.ino}) \u2014 refusing atomic write`);
    }
  } finally {
    (0, import_fs.closeSync)(P);
  }
  return (0, import_path2.join)(e, `${(0, import_path2.basename)(r)}${o}`);
}
class C_ extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkWriteRefusedError";
  }
}
class WMr extends C_ {
  constructor(e, r) {
    super((0, import_chunk_q7qjcthc.ona)(e, r));
    this.name = "HardLinkWriteRefusedError";
  }
}
function Jn(e, r) {
  let o = import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | e;
  return { flags: r ? import_fs.constants.O_RDWR | import_fs.constants.O_CREAT | e : o, flagsIfMissing: void 0, flagsIfRefused: r ? o : void 0, flagsToReopen: import_fs.constants.O_RDWR | e };
}
function Xn(e) {
  return e !== void 0 && (e & import_fs.constants.S_IFMT) === import_fs.constants.S_IFREG;
}
class TM extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkReadRefusedError";
  }
}
async function eKt(e, r) {
  let o = (0, import_path2.relative)(e, r);
  if (o === "" || o.startsWith("..") || (0, import_path2.isAbsolute)(o)) throw new import_chunk_jv7av99m.A(`assertDirChainReal: dir must be strictly inside base (rel: ${o})`, "assertDirChainReal: dir must be strictly inside base");
  let g = e;
  for (let h of o.split(import_path2.sep)) {
    g = (0, import_path2.join)(g, h);
    try {
      await (await (0, import_promises.open)(g, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW)).close();
    } catch (y) {
      let E = (0, import_chunk_jv7av99m.w)(y);
      if (E === "ELOOP" || E === "ENOTDIR") throw new C_(`Refusing to write under symlinked or non-directory path: ${g}`);
      if (E === "ENOENT") return;
      throw y;
    }
  }
}
class WIo extends Error {
  constructor(e) {
    super(e);
    this.name = "StagingDirTamperedError";
  }
}
function tKt(e) {
  throw (0, import_chunk_cqa9hrgx.m)("sandbox_exec", "atomic_write_staging_dir_tampered"), new WIo(e);
}
function Uze(e, r, o = "write") {
  return qn(e, r, o) ?? (0, import_chunk_w578pjby.Ei)(r);
}
function qn(e, r, o) {
  let g = e.session.writePermissionStash.consume(e.toolUseId, r, o);
  if (g === import_chunk_f9x2f6cx.EQe) throw new (o === "read" ? TM : C_)(`Refusing to ${o === "read" ? "read" : "write"} ${r}: its permission check expired before it ran (too many concurrent file operations). Retry.`);
  if (g !== void 0) return g;
  if (e.toolUseId) (0, import_chunk_w578pjby.t)(`takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`);
  return;
}
function jMr(e, r) {
  return Uze(e, r, "read");
}
function jIo(e, r) {
  let o = qn(e, r, "read");
  if (o !== void 0) return { spellings: o, unresolved: false };
  let g = (0, import_chunk_w578pjby.ua)(r);
  return { spellings: (0, import_chunk_w578pjby.cte)(g), unresolved: g.unresolved };
}
async function ep(e) {
  try {
    return await (0, import_promises.stat)(e), true;
  } catch {
    return false;
  }
}
async function Sv(e) {
  return (0, import_promises.lstat)(e).then(() => "present", (r) => (0, import_chunk_jv7av99m.J)(r) || (0, import_chunk_jv7av99m.w)(r) === "ENOTDIR" ? "gone" : "unreadable");
}
var nKt = 262144;
function YXi(e) {
  let r = (0, import_chunk_w578pjby.le)();
  return Math.floor(r.statSync(e).mtimeMs);
}
async function _D(e) {
  let r = await (0, import_chunk_w578pjby.le)().stat(e);
  return Math.floor(r.mtimeMs);
}
function aKn() {
  return (0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_PERFORCE_MODE);
}
var ERt = "File is read-only \u2014 it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.";
function vRt(e) {
  return aKn() && (e & 128) === 0;
}
var ko = (0, import_chunk_gjzwg6ck.GS)();
function g8(e, r) {
  return ko.run(e, r);
}
function Bze(e, r) {
  if (r !== "CRLF") return e;
  return e.replaceAll(`\r
`, `
`).split(`
`).join(`\r
`);
}
async function Zhn(e, r, o, g, h) {
  let y = Bze(r, g), E = await SI(e, y, { encoding: o, heldDirectory: h }), P = typeof E === "object" ? E : void 0, b = E === "inPlace" || P?.inPlace === true ? "inPlace" : void 0, v = Buffer.byteLength(y, o), k, F;
  if (h?.at?.lstat !== void 0) k = await h.at.lstat((0, import_path2.basename)(e));
  else if (P !== void 0) k = P;
  else F = await (0, import_chunk_w578pjby.le)().stat(e), k = F;
  if (k.size !== v) throw new import_chunk_jv7av99m.A(`Write verification failed: ${e} is ${k.size} bytes on disk, expected ${v}. The filesystem may have silently truncated the write (network drive / cloud sync).`, "writeTextContent: on-disk size mismatch after write");
  if (b === "inPlace" && (P !== void 0 ? P.isFile : F?.isFile() === true) && v <= import_chunk_q7qjcthc.l0r) {
    let O;
    try {
      var _stack = [];
      try {
        const I = __using(_stack, await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | (h !== void 0 && import_chunk_jxja0v0z.oC !== 0 ? import_chunk_jxja0v0z.oC | import_chunk_09gzjq1e.u2 : import_chunk_09gzjq1e.Fo)), true);
        O = await (0, import_chunk_w578pjby.KM)(I, v + 1, "file");
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        var _promise = __callDispose(_stack, _error, _hasError);
        _promise && await _promise;
      }
    } catch (I) {
      (0, import_chunk_w578pjby.t)(`Could not read the file back after saving it: ${I}`);
    }
    if (O !== void 0 && !O.equals(Buffer.from(y, o))) throw new import_chunk_jv7av99m.A(`Write verification failed: ${e} does not hold what was written. The filesystem may have silently kept only part of the write, or another process may have changed the file.`, "writeTextContent: on-disk bytes differ after write", "write_bytes_differ");
  }
  return Math.floor(k.mtimeMs);
}
function XXi(e) {
  try {
    let r = (0, import_chunk_w578pjby.le)(), { resolvedPath: o } = (0, import_chunk_w578pjby.no)(r, e);
    return (0, import_chunk_73gwqz1r.mra)(o);
  } catch (r) {
    if ((0, import_chunk_jv7av99m.fn)(r) || (0, import_chunk_jv7av99m.Kz)(r) || (0, import_chunk_jv7av99m.Tk)(r)) (0, import_chunk_w578pjby.t)(`detectFileEncoding failed for expected reason: ${(0, import_chunk_jv7av99m.w)(r)}`, { level: "debug" });
    else (0, import_chunk_k449cc64.i)(r);
    return "utf8";
  }
}
function Qhe(e) {
  if (!e.includes("	")) return e;
  return e.replace(/^\t+/gm, (r) => "  ".repeat(r.length));
}
function vo(e) {
  let r = e ? (0, import_chunk_18rsj2ts.WUl)() ?? void 0 : void 0, o = e && KC(e) ? (0, import_chunk_n2dbhmj2.Fa)(e, r) ?? void 0 : void 0, g = o && r !== void 0 ? (0, import_path2.relative)(r, o) : void 0;
  return { absolutePath: o, relativePath: g };
}
var rKt = "Path hidden (unsupported characters)";
function Po(e) {
  if (e.includes("\0")) return rKt;
  let { relativePath: r } = vo(e);
  if (r && !r.startsWith("..")) return r;
  if ((0, import_chunk_f9x2f6cx.Pd)()) return e;
  let o = (0, import_os.homedir)();
  if (e.startsWith(o + import_path2.sep)) return "~" + e.slice(o.length);
  return e;
}
function egn(e, r) {
  let o = r === void 0 ? (0, import_chunk_18rsj2ts.zqt)() : (0, import_chunk_18rsj2ts.Gqt)(r), g = (r !== void 0 || !(0, import_chunk_18rsj2ts.Nz)()) && o === (0, import_chunk_f9x2f6cx.aFr)();
  return (0, import_path2.relative)(o, g ? (0, import_path2.resolve)(o, e) : e);
}
var Oo = /^(\.[\p{L}\p{N}_+~#-]{1,32})?$/u;
async function _Je(e) {
  let r = (0, import_chunk_w578pjby.le)();
  try {
    let o = (0, import_path2.dirname)(e), g = (0, import_path2.basename)(e, (0, import_path2.extname)(e)), E = (await r.readdir(o)).filter((P) => Oo.test((0, import_path2.extname)(P.name).normalize("NFC")) && (0, import_path2.basename)(P.name, (0, import_path2.extname)(P.name)) === g && (0, import_path2.join)(o, P.name) !== e)[0];
    if (E) return E.name;
    return;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) (0, import_chunk_w578pjby.t)(`findSimilarFile failed for ${e}: ${o}`, { level: "error" });
    return;
  }
}
var Jde = "Note: your current working directory is", GIo = `File does not exist. ${Jde}`;
async function qPe(e) {
  let r = (0, import_chunk_18rsj2ts.pe)(), o = (0, import_path2.dirname)(r), g = e;
  try {
    let k = await (0, import_promises.realpath)((0, import_path2.dirname)(e));
    g = (0, import_path2.join)(k, (0, import_path2.basename)(e));
  } catch {
  }
  let h = o === import_path2.sep ? import_path2.sep : o + import_path2.sep, E = (0, import_chunk_cg8dqz0a.x)() === "windows" ? (k) => k.toLowerCase() : (k) => k, P = E(g);
  if (!P.startsWith(E(h)) || P.startsWith(E(r + import_path2.sep)) || P === E(r)) return;
  let b = (0, import_path2.relative)(o, g), v = (0, import_path2.join)(r, b);
  try {
    return await (0, import_promises.stat)(v), v;
  } catch {
    return;
  }
}
function TRt({ content: e, startLine: r, tabAwareSeparator: o = false }) {
  if (!e) return "";
  let g = o && (e.startsWith("	") || e.includes(`
	`)) ? ":" : "	", h = [], y = r, E = 0, P = e.indexOf(`
`);
  while (P !== -1) h.push(lKn(e.slice(E, P), y++, g)), E = P + 1, P = e.indexOf(`
`, E);
  return h.push(lKn(e.slice(E), y, g)), h.join(`
`);
}
function lKn(e, r, o) {
  let g = e.endsWith("\r") ? e.slice(0, -1) : e;
  return `${r}${o}${g}`;
}
function JXi(e) {
  return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}
function st(e, r, o = "") {
  if (e instanceof Error && !(e instanceof C_) && e !== r) try {
    if (e.cause === void 0) e.message += `${o} (atomic write failed first: ${(0, import_chunk_jv7av99m.d)(r)})`, Object.defineProperty(e, "cause", { value: r, writable: true, configurable: true, enumerable: false });
  } catch {
  }
  throw e;
}
function Qn(e) {
  return e === void 0 ? void 0 : e & 511 | 128;
}
function dKn(e, r, o = { encoding: "utf-8" }) {
  Zn(e, r, o, false);
}
function Zn(e, r, o, g) {
  let h = (0, import_chunk_w578pjby.le)(), y = o.allowSymlink ? 0 : import_fs.constants.O_NOFOLLOW, E = e, P, b = false;
  if (o.allowSymlink) try {
    let I = h.readlinkSync(e);
    E = (0, import_path2.isAbsolute)(I) ? I : (0, import_path2.resolve)((0, import_chunk_w578pjby.no)(h, (0, import_path2.dirname)(e)).resolvedPath, I), (0, import_chunk_w578pjby.t)(`Writing through symlink: ${e} -> ${E}`);
  } catch {
  }
  else {
    if (o.checkParentDir) try {
      (0, import_fs.closeSync)((0, import_fs.openSync)((0, import_path2.dirname)(e), import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW));
    } catch (I) {
      let H = (0, import_chunk_jv7av99m.w)(I);
      if (H === "ELOOP" || H === "ENOTDIR") throw new C_(`Refusing to write into symlinked directory: ${(0, import_path2.dirname)(e)}`);
    }
    try {
      let I = h.lstatSync(e);
      if (I.isSymbolicLink()) throw new C_(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
      P = I.mode, b = true;
    } catch (I) {
      if (!(0, import_chunk_jv7av99m.J)(I)) throw I;
    }
  }
  let v = `.tmp.${process.pid}.${(0, import_crypto.randomBytes)(6).toString("hex")}`, k = BIo(o.stagingDir, E, v, o.allowSymlink ?? false), F = false, O = false;
  if (o.allowSymlink && !b) try {
    P = h.statSync(E).mode, b = true;
  } catch (I) {
    if (!(0, import_chunk_jv7av99m.J)(I)) throw I;
  }
  if (b && P !== void 0) (0, import_chunk_w578pjby.t)(`Preserving file permissions: ${P.toString(8)}`);
  else if (o.mode !== void 0) P = o.mode, (0, import_chunk_w578pjby.t)(`Setting permissions for new file: ${P.toString(8)}`);
  try {
    (0, import_chunk_w578pjby.t)(`Writing to temp file: ${k}`);
    let I = (0, import_fs.openSync)(k, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | y, b ? Qn(P) : o.mode), H = false, G;
    try {
      if ((0, import_path2.dirname)(k) !== (0, import_path2.dirname)(E)) Qhn(o.stagingDir);
      if ((0, import_fs.writeFileSync)(I, r, { encoding: o.encoding }), b && P !== void 0) try {
        (0, import_fs.fchmodSync)(I, P), (0, import_chunk_w578pjby.t)("Applied original permissions to temp file");
      } catch (z) {
        if (!(0, import_chunk_q7qjcthc.qoe)(z)) throw z;
        (0, import_chunk_w578pjby.t)(`fchmod unsupported on this filesystem: ${z}`);
      }
      try {
        (0, import_fs.fsyncSync)(I);
      } catch (z) {
        if (!(0, import_chunk_q7qjcthc.qoe)(z)) throw z;
        (0, import_chunk_w578pjby.t)(`fsync unsupported on this filesystem: ${z}`);
      }
      F = true;
    } catch (z) {
      H = true, G = z;
    }
    try {
      (0, import_fs.closeSync)(I);
    } catch (z) {
      if (!H) throw z;
      (0, import_chunk_w578pjby.t)(`closeSync also failed after temp write error: ${z}`, { level: "error" });
    }
    if (H) throw G;
    if ((0, import_chunk_w578pjby.t)(`Temp file written successfully, size: ${r.length} bytes`), (0, import_path2.dirname)(k) !== (0, import_path2.dirname)(E)) Qhn(o.stagingDir);
    (0, import_chunk_w578pjby.t)(`Renaming ${k} to ${E}`), O = true, (0, import_chunk_q7qjcthc.ina)(k, E, (z, W) => h.renameSync(z, W)), (0, import_chunk_q7qjcthc._Do)(E), (0, import_chunk_w578pjby.t)(`File ${E} written atomically`);
  } catch (I) {
    if ((0, import_chunk_w578pjby.t)(`Failed to write file atomically: ${I}`, { level: "error" }), O && (0, import_chunk_q7qjcthc.fna)(I, k, E, g)) {
      (0, import_chunk_w578pjby.t)(`EBUSY in an NFS folder: saving ${E} once more`), Zn(e, r, o, true);
      return;
    }
    let H = (0, import_chunk_jv7av99m.w)(I);
    if (F && H !== void 0 && (import_chunk_q7qjcthc.mF.has(H) || g && O && !import_chunk_q7qjcthc.gDo.has(H)) || !F && b && H === "EACCES") {
      let { flags: W, flagsIfMissing: V, flagsIfRefused: oe, flagsToReopen: te } = Jn(y, !b || Xn(P)), Q = !b && o.mode !== void 0 ? o.mode : void 0, Z;
      try {
        try {
          Z = (0, import_fs.openSync)(E, W, Q);
        } catch (ae) {
          let ye = V !== void 0 && (0, import_chunk_jv7av99m.J)(ae), ce = ye ? V : oe;
          if (ce === void 0) throw ae;
          if (ye) (0, import_chunk_q7qjcthc.hUl)(E);
          Z = (0, import_fs.openSync)(E, ce, Q);
        }
      } catch (ae) {
        try {
          h.unlinkSync(k);
        } catch (ye) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${ye}`);
        }
        if ((0, import_chunk_jv7av99m.w)(ae) === "ELOOP") throw new C_(`Refusing to write through symlink: ${E} (O_NOFOLLOW)`);
        throw I;
      }
      let re, X;
      try {
        let ae = (0, import_fs.fstatSync)(Z, { bigint: true });
        if (ae.nlink > 1n && (o.refuseHardLinkedInPlace ?? (0, import_chunk_q7qjcthc.hDo)())) throw new WMr(E, Number(ae.nlink));
        if (X = Buffer.from(r, o.encoding), re = Tn(Z, ae, !b), re.kind === "none") (0, import_fs.ftruncateSync)(Z, 0);
      } catch (ae) {
        try {
          (0, import_fs.closeSync)(Z);
        } catch {
        }
        try {
          h.unlinkSync(k);
        } catch (ye) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${ye}`);
        }
        st(ae, I);
      }
      let we = true;
      try {
        if ((0, import_fs.writeFileSync)(Z, X), re.kind === "putBack" && (0, import_fs.fstatSync)(Z).size > X.length) (0, import_fs.ftruncateSync)(Z, X.length);
        try {
          (0, import_fs.fsyncSync)(Z);
        } catch (ae) {
          if (!je(ae)) throw ae;
          (0, import_chunk_w578pjby.t)(`fsync failed, and the write stands: ${ae}`);
        }
        we = false, (0, import_fs.closeSync)(Z);
        try {
          h.unlinkSync(k);
        } catch (ae) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${ae}`);
        }
        (0, import_chunk_w578pjby.t)(`File ${E} written via in-place fallback`);
        return;
      } catch (ae) {
        let ye = In(re, we ? Z : void 0, E, te, X, ae);
        if (ye !== "clear" && F) throw Object.assign(new import_chunk_jv7av99m.A(`Write to ${E} failed (${(0, import_chunk_jv7av99m.w)(ae) ?? ae}); ${Ke(ye)}. The new content was preserved at ${k}.`, "writeFileSyncAndFlush: in-place fallback write failed; content preserved at temp path"), { code: (0, import_chunk_jv7av99m.w)(ae) });
        try {
          h.unlinkSync(k);
        } catch (ce) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${ce}`);
        }
        st(ae, I, ye === "clear" ? "" : `; ${Ke(ye)}`);
      }
    }
    try {
      h.unlinkSync(k);
    } catch (W) {
      (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${W}`);
    }
    throw I;
  }
}
async function Ae(e, r, o) {
  if (r?.at !== void 0) {
    await r.at.unlink((0, import_path2.basename)(e));
    return;
  }
  await o.unlink(e);
}
function SI(e, r, o = { encoding: "utf-8" }) {
  return er(e, r, o, false);
}
async function er(e, r, o, g) {
  let h = (0, import_chunk_w578pjby.le)(), y = o.heldDirectory, E;
  if (y !== void 0 && (o.allowSymlink || o.stagingDir !== void 0 || o.createOnly)) throw Error("writeFileAndFlush: heldDirectory cannot be combined with allowSymlink, stagingDir or createOnly");
  let P = o.allowSymlink ? 0 : y !== void 0 && import_chunk_jxja0v0z.oC !== 0 ? import_chunk_jxja0v0z.oC : import_fs.constants.O_NOFOLLOW, b = e, v, k = false;
  if (o.allowSymlink) try {
    let G = await (0, import_promises.readlink)(e);
    b = (0, import_path2.isAbsolute)(G) ? G : (0, import_path2.resolve)(await (0, import_promises.realpath)((0, import_path2.dirname)(e)), G), (0, import_chunk_w578pjby.t)(`Writing through symlink: ${e} -> ${b}`);
  } catch {
  }
  else {
    if (o.checkParentDir) try {
      await (await (0, import_promises.open)((0, import_path2.dirname)(e), import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW)).close();
    } catch (G) {
      let z = (0, import_chunk_jv7av99m.w)(G);
      if (z === "ELOOP" || z === "ENOTDIR") throw new C_(`Refusing to write into symlinked directory: ${(0, import_path2.dirname)(e)}`);
    }
    try {
      let G = await (0, import_promises.lstat)(e);
      if (G.isSymbolicLink()) throw new C_(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
      v = G.mode, k = true;
    } catch (G) {
      if (!(0, import_chunk_jv7av99m.J)(G)) throw G;
    }
  }
  let F = `.tmp.${process.pid}.${(0, import_crypto.randomBytes)(6).toString("hex")}`, O = BIo(o.stagingDir, b, F, o.allowSymlink ?? false), I = false, H = false;
  if (o.allowSymlink && !k) try {
    v = (await h.stat(b)).mode, k = true;
  } catch (G) {
    if (!(0, import_chunk_jv7av99m.J)(G)) throw G;
  }
  if (k && v !== void 0) (0, import_chunk_w578pjby.t)(`Preserving file permissions: ${v.toString(8)}`);
  else if (o.mode !== void 0) v = o.mode, (0, import_chunk_w578pjby.t)(`Setting permissions for new file: ${v.toString(8)}`);
  try {
    (0, import_chunk_w578pjby.t)(`Writing to temp file: ${O}`);
    let G = await (0, import_promises.open)(O, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | P, k ? Qn(v) : o.mode), z = false, W;
    try {
      if ((0, import_path2.dirname)(O) !== (0, import_path2.dirname)(b)) Qhn(o.stagingDir);
      if (await G.writeFile(r, { encoding: o.encoding }), k && v !== void 0) try {
        await G.chmod(v), (0, import_chunk_w578pjby.t)("Applied original permissions to temp file");
      } catch (V) {
        if (!(0, import_chunk_q7qjcthc.qoe)(V)) throw V;
        (0, import_chunk_w578pjby.t)(`fchmod unsupported on this filesystem: ${V}`);
      }
      try {
        await G.sync();
      } catch (V) {
        if (!(0, import_chunk_q7qjcthc.qoe)(V)) throw V;
        (0, import_chunk_w578pjby.t)(`fsync unsupported on this filesystem: ${V}`);
      }
      if (y !== void 0) {
        let V = await G.stat();
        E = { size: V.size, mtimeMs: V.mtimeMs, isFile: V.isFile(), inPlace: false };
      }
      I = true;
    } catch (V) {
      z = true, W = V;
    }
    try {
      await G.close();
    } catch (V) {
      if (!z) throw V;
      (0, import_chunk_w578pjby.t)(`close also failed after temp write error: ${V}`, { level: "error" });
    }
    if (z) throw W;
    if ((0, import_chunk_w578pjby.t)(`Temp file written successfully, size: ${r.length} bytes`), (0, import_path2.dirname)(O) !== (0, import_path2.dirname)(b)) Qhn(o.stagingDir);
    if (o.createOnly) {
      if (o.beforeRename) await o.beforeRename();
      try {
        await (0, import_chunk_q7qjcthc.ZR)(() => h.link(O, b), b);
      } catch (V) {
        if ((0, import_chunk_jv7av99m.w)(V) === "EEXIST") throw V;
        await (0, import_chunk_q7qjcthc.l2)(b, r, o.mode);
      }
      await h.unlink(O).catch((V) => {
        (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${V}`);
      }), (0, import_chunk_w578pjby.t)(`Created ${b}`);
      return;
    }
    if ((0, import_chunk_w578pjby.t)(`Renaming ${O} to ${b}`), y?.at !== void 0) {
      if (o.beforeRename) await o.beforeRename();
      H = true, await y.at.rename((0, import_path2.basename)(O), (0, import_path2.basename)(b));
    } else await (0, import_chunk_q7qjcthc.sna)(O, b, async (V, oe) => {
      if (o.beforeRename) await o.beforeRename();
      return H = true, h.rename(V, oe);
    }, o.shortRenameWaits);
    return (0, import_chunk_q7qjcthc._Do)(b), (0, import_chunk_w578pjby.t)(`File ${b} written atomically`), E;
  } catch (G) {
    let z = (0, import_chunk_jv7av99m.w)(G);
    if (!o.createOnly || z !== "EEXIST") (0, import_chunk_w578pjby.t)(`Failed to write file atomically: ${G}`, { level: "error" });
    if (H && await (0, import_chunk_q7qjcthc.una)(G, O, b, g)) return (0, import_chunk_w578pjby.t)(`EBUSY in an NFS folder: saving ${b} once more`), er(e, r, o, true);
    let W = I && z !== void 0 && (import_chunk_q7qjcthc.mF.has(z) || g && H && !import_chunk_q7qjcthc.gDo.has(z)) && !o.createOnly, V = !I && k && z === "EACCES" && !o.createOnly;
    if (W) try {
      if (o.beforeRename) await o.beforeRename();
    } catch (oe) {
      throw await Ae(O, y, h).catch(() => {
      }), oe;
    }
    if (W || V) {
      let { flags: oe, flagsIfMissing: te, flagsIfRefused: Q, flagsToReopen: Z } = Jn(P, !k || Xn(v)), re = !k && o.mode !== void 0 ? o.mode : void 0, X;
      try {
        try {
          X = await (0, import_promises.open)(b, oe, re);
        } catch (ce) {
          let fe = te !== void 0 && (0, import_chunk_jv7av99m.J)(ce), it = fe ? te : Q;
          if (it === void 0) throw ce;
          if (fe) await (0, import_chunk_q7qjcthc.vI)(b);
          X = await (0, import_promises.open)(b, it, re);
        }
      } catch (ce) {
        try {
          await Ae(O, y, h);
        } catch (fe) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${fe}`);
        }
        if ((0, import_chunk_jv7av99m.w)(ce) === "ELOOP") throw new C_(y !== void 0 ? `Refusing to write ${b}: a symbolic link is on its path (the file itself, or a directory replaced during the write). Nothing was written there; check where the path leads now and retry.` : `Refusing to write through symlink: ${b} (O_NOFOLLOW)`);
        throw G;
      }
      let we, ae;
      try {
        let ce = await X.stat({ bigint: true });
        if (ce.nlink > 1n && (o.refuseHardLinkedInPlace ?? (0, import_chunk_q7qjcthc.hDo)())) throw new WMr(b, Number(ce.nlink));
        if (ae = Buffer.from(r, o.encoding), we = await On(X, ce, !k), we.kind === "none") await X.truncate(0);
      } catch (ce) {
        await X.close().catch(() => {
        });
        try {
          await Ae(O, y, h);
        } catch (fe) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${fe}`);
        }
        st(ce, G);
      }
      let ye = true;
      try {
        if (await X.writeFile(ae), we.kind === "putBack" && (await X.stat()).size > ae.length) await X.truncate(ae.length);
        try {
          await X.sync();
        } catch (fe) {
          if (!je(fe)) throw fe;
          (0, import_chunk_w578pjby.t)(`fsync failed, and the write stands: ${fe}`);
        }
        let ce;
        if (y !== void 0) try {
          let fe = await X.stat();
          ce = { size: fe.size, mtimeMs: fe.mtimeMs, isFile: fe.isFile(), inPlace: true };
        } catch (fe) {
          (0, import_chunk_w578pjby.t)(`Could not stat ${b} after writing it in place; the write stands: ${fe}`);
        }
        ye = false, await X.close();
        try {
          await Ae(O, y, h);
        } catch (fe) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${fe}`);
        }
        return (0, import_chunk_w578pjby.t)(`File ${b} written via in-place fallback`), ce ?? "inPlace";
      } catch (ce) {
        let fe = await An(we, ye ? X : void 0, b, Z, ae, ce, y?.at !== void 0 ? () => Ae(b, y, h) : void 0);
        if (fe !== "clear" && I) throw Object.assign(new import_chunk_jv7av99m.A(`Write to ${b} failed (${(0, import_chunk_jv7av99m.w)(ce) ?? ce}); ${Ke(fe)}. The new content was preserved at ${O}.`, "writeFileAndFlush: in-place fallback write failed; content preserved at temp path"), { code: (0, import_chunk_jv7av99m.w)(ce) });
        try {
          await Ae(O, y, h);
        } catch (it) {
          (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${it}`);
        }
        st(ce, G, fe === "clear" ? "" : `; ${Ke(fe)}`);
      }
    }
    if (y !== void 0 && z === "ELOOP" && !I) throw new C_(`Refusing to write ${b}: a directory on its path was replaced by a symbolic link during the write. Nothing was written there; check where the path leads now and retry.`);
    try {
      await Ae(O, y, h);
    } catch (oe) {
      (0, import_chunk_w578pjby.t)(`Failed to clean up temp file: ${oe}`);
    }
    throw G;
  }
}
var Ao = /* @__PURE__ */ new Set(["Public", "Default", "Default User", "All Users"]);
async function QXi() {
  let e = (0, import_chunk_cg8dqz0a.x)(), r = (0, import_os.homedir)(), o = (0, import_chunk_w578pjby.le)();
  if (e === "macos") return (0, import_path2.join)(r, "Desktop");
  if (e === "windows") {
    let h = import_chunk_c203g5kd.s.USERPROFILE ? import_chunk_c203g5kd.s.USERPROFILE.replaceAll("\\", "/") : null;
    if (h) {
      let E = `/mnt/c${h.replace(/^[A-Z]:/, "")}/Desktop`;
      if (await ep(E)) return E;
    }
    try {
      let E = await o.readdir("/mnt/c/Users");
      for (let P of E) {
        if (Ao.has(P.name)) continue;
        let b = (0, import_path2.join)("/mnt/c/Users", P.name, "Desktop");
        if (await ep(b)) return b;
      }
    } catch (y) {
      (0, import_chunk_w578pjby.t)(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${y}`, { level: "error" });
    }
  }
  let g = (0, import_path2.join)(r, "Desktop");
  if (await ep(g)) return g;
  return r;
}
async function GMr(e, r = nKt) {
  try {
    return (await (0, import_chunk_w578pjby.le)().stat(e)).size <= r;
  } catch {
    return false;
  }
}
function ah(e) {
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows", o = (0, import_path2.normalize)(e), g = r ? /[\\/]+$/ : /\/+$/, h = o.length > (0, import_path2.parse)(o).root.length ? o.replace(g, "") : o;
  return r ? h.replaceAll("/", "\\").toLowerCase() : h;
}
function bv(e, r) {
  return ah(e) === ah(r);
}
function eF(e, { uncached: r = false } = {}) {
  return null;
}
var tr = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function uMs(e, { uncached: r = false } = {}) {
  let o = r ? void 0 : tr.get(e);
  if (o !== void 0) return o;
  let g = (0, import_chunk_z6pfqf6e.zh)(e);
  if (g === null) return;
  let h;
  try {
    h = (0, import_chunk_6mfepmbb.nHs)();
  } catch {
    return;
  }
  let y = (0, import_chunk_z6pfqf6e.pn)(g) === h;
  return tr.set(e, y), y;
}
var fu = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function No(e, { uncached: r = false } = {}) {
  return false;
}
function fMs(e, { uncached: r = false } = {}) {
  let o = e;
  for (; ; ) {
    let g = eF(o, { uncached: r });
    if (g === null) return null;
    let h = No(g, { uncached: r });
    if (h !== false) return { root: g, readable: h === true };
    let y = (0, import_path3.dirname)(g);
    if (y === g) return null;
    o = y;
  }
}
function nr(e, r, o) {
  let g = fMs(e, { uncached: o });
  if (g === null) return r();
  if (!g.readable) return null;
  switch (uMs(g.root, { uncached: o })) {
    case false:
      return g.root;
    case true:
      return r();
    default:
      return null;
  }
}
function CM(e) {
  return nr(e, () => (0, import_chunk_w5s307zm.Mi)(e), false);
}
function wv(e) {
  return nr(e, () => (0, import_chunk_w5s307zm.Gy)(e), true);
}
function cKn(e) {
  let r = fMs(e);
  return r !== null && uMs(r.root) !== true ? r.root : (0, import_chunk_w5s307zm.dr)(e);
}
function ZNl(e) {
  return (0, import_chunk_4smdap7r.M)([CM(e), (0, import_chunk_w5s307zm.Mi)(e)].filter((r) => r !== null));
}
var Do = /* @__PURE__ */ new Set(["ENOENT", "ENOTDIR"]), Ho = /* @__PURE__ */ new Set(["EAGAIN", "EBUSY", "EMFILE", "ENFILE", "ENOSPC", "EDQUOT", "ENOMEM"]);
function Wo(e) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  return r !== void 0 && Do.has(r);
}
function Nze(e, r) {
  return (0, import_chunk_jv7av99m.w)(e) === r;
}
function Jhn(e) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  return r !== void 0 && Ho.has(r);
}
function $o(e) {
  return Wo(e) ? { kind: "absent" } : { kind: "fs", error: e };
}
function Fze(e) {
  return e.kind === "fs" ? (0, import_chunk_jv7av99m.w)(e.error) ?? "unknown" : e.kind;
}
async function ue(e) {
  try {
    return (0, import_chunk_w578pjby.oy)(await e);
  } catch (r) {
    return (0, import_chunk_w578pjby.Zp)($o(r));
  }
}
async function ct(e) {
  try {
    return (0, import_chunk_w578pjby.oy)(await e);
  } catch (r) {
    return (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: r });
  }
}
function Bt() {
  return require("/$bunfs/root/chunk-wnbnyt4a.js");
}
async function Rc(e, r) {
  let o = await Bt().lock(e, r);
  return Object.assign(o, { [Symbol.asyncDispose]: o });
}
function UIo(e, r) {
  let o = Bt().lockSync(e, r);
  return Object.assign(o, { [Symbol.dispose]: o });
}
function YNl(e, r) {
  return Bt().check(e, r);
}
async function Kg(e, r) {
  if (!e) return;
  try {
    await e();
  } catch (o) {
    let g;
    try {
      let h = (0, import_chunk_jv7av99m.w)(o);
      g = h === "ERELEASED" || h === "ENOTACQUIRED" ? `lock was no longer held at release (${h}); the locked section may have run without exclusivity` : `lock directory could not be removed and is left to go stale: ${(0, import_chunk_jv7av99m.d)(o)}`;
    } catch {
      g = "lock release rejected with a value that cannot be described";
    }
    (0, import_chunk_w578pjby.t)(`${r}: ${g}`, { level: "warn" });
  }
}
var lMs = 384, dMs = 438, or = 448;
async function cMs(e, r, o = lMs) {
  let g = await ue((0, import_promises5.lstat)(e));
  if (!g.ok && g.error.kind !== "absent") return (0, import_chunk_w578pjby.Zp)(g.error);
  if (g.ok && !g.value.isFile()) return (0, import_chunk_w578pjby.Zp)(ar(e, g.value));
  return ue((0, import_promises5.open)(e, r | import_chunk_09gzjq1e.Fo, o));
}
async function VC(e) {
  if (import_chunk_09gzjq1e.Fo === 0) return cMs(e, import_fs4.constants.O_RDONLY);
  return Vo(e, await ue((0, import_promises5.open)(e, import_fs4.constants.O_RDONLY | import_chunk_09gzjq1e.Fo)));
}
function Vo(e, r) {
  return !r.ok && r.error.kind === "fs" && Nze(r.error.error, "ELOOP") ? (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, "ELOOP") }) : r;
}
function $ze(e, r) {
  return Object.assign(Yo(r), { code: r, path: e });
}
function sr(e) {
  return { kind: "fs", error: $ze(e, import_chunk_7n1spq36.Eyn) };
}
function ar(e, r) {
  return { kind: "fs", error: $ze(e, r.isSymbolicLink() ? "ELOOP" : "ENXIO") };
}
function Yo(e) {
  switch (e) {
    case "ELOOP":
      return Error("refusing a symlinked path");
    case "ENXIO":
      return Error("refusing a non-regular file");
    case "EISDIR":
      return Error("refusing a directory at the leaf");
    case "ENOTDIR":
      return Error("refusing a non-directory node on a write path");
    case "EFBIG":
      return Error("refusing a file over the size cap");
    case import_chunk_7n1spq36.Eyn:
      return Error("refusing a value that has a second name (hard link)");
    case import_chunk_7n1spq36.vyn:
      return Error("refusing a value whose opened object is no longer at its key");
    case import_chunk_7n1spq36.iLo:
      return Error("refusing a hardened read the host cannot verify");
  }
}
async function iut(e, r) {
  let o = await gt();
  if (!o.ok) return o;
  if (o.value) {
    let v = await ue((0, import_promises5.readlink)(`/proc/self/fd/${e.fd}`));
    if (v.ok) return (0, import_chunk_w578pjby.oy)(!v.value.endsWith(" (deleted)") && v.value === r);
    if (v.error.kind === "fs" && Jhn(v.error.error)) return v;
    return v.error.kind === "fs" && Nze(v.error.error, "ENAMETOOLONG") ? (0, import_chunk_w578pjby.oy)(false) : (0, import_chunk_w578pjby.oy)("unavailable");
  }
  let [g, h] = await Promise.all([ue((0, import_promises5.lstat)(r, { bigint: true })), ue(e.stat({ bigint: true }))]);
  if (!h.ok) return h;
  let y = ir(g, h.value);
  if (!y.ok || y.value !== true) return y;
  let E = await ue((0, import_promises5.realpath)((0, import_path6.dirname)(r)));
  if (!E.ok) return E.error.kind === "absent" ? (0, import_chunk_w578pjby.oy)(false) : E;
  if (E.value !== (0, import_path6.dirname)(r)) return (0, import_chunk_w578pjby.oy)(false);
  let P = await ue((0, import_promises5.lstat)(r, { bigint: true })), b = ir(P, h.value);
  if (!b.ok || b.value !== true) return b;
  return g.ok && g.value.nlink > 1n || P.ok && P.value.nlink > 1n || h.value.nlink > 1n ? (0, import_chunk_w578pjby.oy)("otherNames") : (0, import_chunk_w578pjby.oy)(true);
}
async function KNl(e, r, o = dMs) {
  if (import_chunk_jxja0v0z.oC === 0) {
    let h = await gt();
    if (!h.ok || !h.value) return false;
  }
  let g = await (0, import_promises5.open)(e, import_fs4.constants.O_WRONLY | import_fs4.constants.O_CREAT | import_chunk_09gzjq1e.u2 | import_chunk_jxja0v0z.cr | (import_chunk_jxja0v0z.oC || import_chunk_09gzjq1e.Fo), o).catch((h) => {
    if (Nze(h, "ELOOP") || Nze(h, "EINVAL")) return;
    throw h;
  });
  if (g === void 0) return false;
  try {
    let h = await g.stat(), y = await iut(g, e);
    if (!h.isFile() || h.nlink !== 1 || !y.ok || y.value !== true) return false;
    return await g.truncate(0), await g.writeFile(r), true;
  } finally {
    await g.close();
  }
}
function ir(e, r) {
  if (!e.ok) return e.error.kind === "absent" ? (0, import_chunk_w578pjby.oy)(false) : e;
  if (!e.value.isFile()) return (0, import_chunk_w578pjby.oy)(false);
  if (!Xde(r.ino) || !Xde(e.value.ino) || r.nlink === 0n || e.value.nlink === 0n) return (0, import_chunk_w578pjby.oy)("unavailable");
  return (0, import_chunk_w578pjby.oy)(e.value.ino === r.ino && (e.value.dev === r.dev || (0, import_chunk_cg8dqz0a.x)() === "windows" && e.value.ctimeNs === r.ctimeNs));
}
class lr {
  available = void 0;
  probing = void 0;
  procUnreadableLogged = false;
}
var Jo = new import_chunk_2904xtvq.j(() => new lr());
function Xo() {
  return Jo.of((0, import_chunk_f9x2f6cx.N)().host);
}
async function gt() {
  let e = Xo();
  if (e.available !== void 0) return (0, import_chunk_w578pjby.oy)(e.available);
  return e.available = false, (0, import_chunk_w578pjby.oy)(false);
}
function Xde(e) {
  return !(0, import_chunk_kpby9tcv.ia)(e);
}
function Gt(e) {
  let r = e / 1000000000n;
  if (r * 1000000000n > e) r -= 1n;
  return Number(r) * 1e3 + Number(e - r * 1000000000n) / 1e6;
}
var jXi = "LinkMisdirected", $Io = "LinkUnverified";
async function qNl(e, r, o) {
  if (!Xde(r.inode)) return (0, import_chunk_w578pjby.Zp)({ kind: "classified", error: (0, import_chunk_7n1spq36.GLr)("unknown", { telemetryCode: $Io }) });
  let g = await ue((0, import_promises5.link)(e, o));
  if (!g.ok) return g;
  let h = await ue((0, import_promises5.lstat)(o, { bigint: true }));
  if (!h.ok) return h.error.kind === "absent" ? (0, import_chunk_w578pjby.Zp)({ kind: "classified", error: (0, import_chunk_7n1spq36.GLr)("unknown", { telemetryCode: $Io }) }) : h;
  if (!Xde(h.value.ino)) return (0, import_chunk_w578pjby.Zp)({ kind: "classified", error: (0, import_chunk_7n1spq36.GLr)("unknown", { telemetryCode: $Io }) });
  if (ze(h.value, r) || await qo(o, r)) return (0, import_chunk_w578pjby.oy)(void 0);
  let y = { device: h.value.dev, inode: h.value.ino }, [E, P] = await Promise.all([ue((0, import_promises5.lstat)(e, { bigint: true })), ue((0, import_promises5.stat)(e, { bigint: true }))]), b = E.ok && ze(E.value, y) || P.ok && ze(P.value, y);
  if ((0, import_chunk_w578pjby.t)(`storage: a link publish landed on another object (expected ${r.device}:${r.inode}, found ${y.device}:${y.inode}, ${h.value.isSymbolicLink() ? "a symlink" : `nlink ${h.value.nlink}`}); ${b ? "the staged name was swapped \u2014 removing the entry" : "leaving the entry"}`, { level: "warn" }), b) {
    let v = await ue((0, import_promises5.lstat)(o, { bigint: true }));
    if (v.ok && ze(v.value, y)) await ue((0, import_promises5.unlink)(o));
  }
  return (0, import_chunk_w578pjby.Zp)({ kind: "classified", error: (0, import_chunk_7n1spq36.GLr)("unknown", { telemetryCode: jXi }) });
}
async function qo(e, r) {
  let o = await ue((0, import_promises5.open)(e, import_fs4.constants.O_RDONLY | import_chunk_09gzjq1e.Fo));
  if (!o.ok) return false;
  try {
    let g = await ue(o.value.stat({ bigint: true }));
    return g.ok && ze(g.value, r);
  } finally {
    await ue(o.value.close());
  }
}
function ze(e, r) {
  return Xde(e.ino) && e.dev === r.device && e.ino === r.inode;
}
var ds = 268435456, XNl = ds;
async function GXi(e, r, o, g) {
  let h = o === void 0 ? void 0 : await gt();
  if (h !== void 0 && !h.ok) return h;
  if (h !== void 0 && !h.value) {
    let P = await ue((0, import_promises4.lstat)(e));
    if (P.ok && P.value.isSymbolicLink()) return (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, "ELOOP") });
    if (!P.ok && P.error.kind !== "absent") return P;
    if (P.ok) {
      let b = await ue((0, import_promises4.realpath)((0, import_path5.dirname)(e)));
      if (b.ok && (0, import_path5.join)(b.value, (0, import_path5.basename)(e)) !== o) return (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, import_chunk_7n1spq36.vyn) });
      if (!b.ok && b.error.kind !== "absent") return b;
    }
  }
  let y = r === "refuse" || o !== void 0 ? await VC(e) : await ue((0, import_promises4.open)(e, import_fs3.constants.O_RDONLY | import_chunk_09gzjq1e.u2));
  if (!y.ok) return y;
  let E = y.value;
  try {
    let P = await cs(E);
    if (!P.ok) return P;
    if (!P.value.isFile) return (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, "ENXIO") });
    if (o !== void 0) {
      if (P.value.nlink > 1) return (0, import_chunk_w578pjby.Zp)(sr(e));
      if (P.value.nlink === 0) return (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, import_chunk_7n1spq36.iLo) });
      let b = await iut(E, o);
      if (!b.ok) return b;
      if (b.value !== true) {
        let v = b.value === "unavailable" ? import_chunk_7n1spq36.iLo : b.value === "otherNames" ? import_chunk_7n1spq36.Eyn : import_chunk_7n1spq36.vyn;
        return (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, v) });
      }
    }
    return await g(E, P.value);
  } finally {
    if ((0, import_chunk_cg8dqz0a.x)() === "windows") await E.close().catch(() => {
    });
    else E.close().catch(() => {
    });
  }
}
async function cs(e) {
  let r = await ue(e.stat({ bigint: true }));
  if (!r.ok) return r;
  let o = r.value;
  return (0, import_chunk_w578pjby.oy)({ isFile: o.isFile(), identity: { device: o.dev, inode: o.ino }, nlink: Number(o.nlink), mode: Number(o.mode), size: Number(o.size), mtimeMs: Gt(o.mtimeNs), birthtimeMs: Gt(o.birthtimeNs), mtimeNs: o.mtimeNs, ctimeNs: o.ctimeNs });
}
async function zXi(e, r) {
  let o = new Uint8Array(r), g = 0;
  while (g < r) {
    let h = await ue(e.read(o, g, r - g, g));
    if (!h.ok) return h;
    if (h.value.bytesRead === 0) return (0, import_chunk_w578pjby.oy)(o.subarray(0, g));
    g += h.value.bytesRead;
  }
  return (0, import_chunk_w578pjby.oy)(o);
}
async function JNl(e, r, o, g) {
  let h = 0;
  while (h < o) {
    let { bytesRead: y } = await e.read(r, h, o - h, g + h);
    if (y <= 0) return false;
    h += y;
  }
  return true;
}
async function VXi(e, r, o) {
  let g = 0;
  while (g < r.byteLength) {
    let { bytesWritten: h } = await e.write(r, g, r.byteLength - g, o === null ? null : o + g);
    if (h <= 0) throw Object.assign(Error("write made no progress"), { code: "EIO" });
    g += h;
  }
}
var fs = /* @__PURE__ */ new Set(["EPERM", "ENOTSUP", "EOPNOTSUPP", "ENOSYS"]);
class ur {
  logged = false;
  claim() {
    if (this.logged) return false;
    return this.logged = true, true;
  }
}
var Pc = new import_chunk_2904xtvq.j(() => new ur());
function QNl(e) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  if (r === void 0) return false;
  return fs.has(r) || r === "EISDIR" && (0, import_chunk_cg8dqz0a.x)() === "windows";
}
async function fr(e, r = or) {
  let o = await ct((0, import_promises4.mkdir)(e, { recursive: true, mode: r }));
  if (o.ok) return (0, import_chunk_w578pjby.oy)(void 0);
  let g = (0, import_chunk_jv7av99m.w)(o.error.kind === "fs" ? o.error.error : 0);
  if (g !== "EEXIST" && g !== "ENOTDIR") return o;
  let h = await ct((0, import_promises4.stat)(e));
  if (h.ok) return h.value.isDirectory() ? (0, import_chunk_w578pjby.oy)(void 0) : (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, "ENOTDIR") });
  let y = (0, import_chunk_jv7av99m.w)(h.error.kind === "fs" ? h.error.error : 0);
  return y === "ENOENT" || y === "ENOTDIR" ? (0, import_chunk_w578pjby.Zp)({ kind: "fs", error: $ze(e, "ENOTDIR") }) : h;
}
var ws = 3e4, gr = new import_async_hooks.AsyncLocalStorage(), pt = /* @__PURE__ */ new Map(), Es = /* @__PURE__ */ new Set(["ERELEASED", "ENOTACQUIRED"]);
async function iKn(e, r, o) {
  var _stack = [];
  try {
    let g = o.lockfilePath ?? e, h = (0, import_path4.resolve)(g), y = gr.getStore() ?? [];
    if (y.some((W) => W.identity === h && !W.released)) return o.ifReentrant();
    const E = __using(_stack, await Rs(h), true);
    let P = () => r({ suspect: () => false }), b = (W) => (o.onForgone?.(W), P());
    if (o.proceedIf !== void 0 && !await o.proceedIf()) return await P();
    let v = (0, import_path4.dirname)(g);
    if (o.createParent !== false) {
      let W = await fr(v, o.parentMode);
      if (!W.ok) {
        if (o.forgoIf?.(W.error) !== true) return o.ifContended(W.error);
        return await b(W.error);
      }
    } else {
      let W = await ue((0, import_promises3.stat)(v));
      if (!W.ok && W.error.kind === "absent") {
        if (o.forgoIf?.(W.error) !== true) return o.ifContended(W.error);
        return await b(W.error);
      }
    }
    let k = false, F = Date.now(), O = performance.now(), I = bs(o.acquireTimeoutMs), H = (W) => ue(Rc(o.registryKeyedOnLockfile ? g : e, { realpath: false, stale: o.staleMs ?? ws, retries: W, ...o.lockfilePath !== void 0 && { lockfilePath: o.lockfilePath }, ...o.updateMs !== void 0 && { update: o.updateMs }, onCompromised: (V) => {
      k = true, (0, import_chunk_w578pjby.t)(`storage lock compromised (likely a process suspend or slow filesystem): ${V}`, { level: "warn" });
    } })), G = await H(o.forgoIf === void 0 ? I : 0);
    if (!G.ok && o.forgoIf !== void 0) {
      let W = mr(G.error).kind === "contended";
      if (!W) {
        let V = await ue((0, import_promises3.lstat)(o.lockfilePath ?? `${e}.lock`));
        W = V.ok || V.error.kind !== "absent";
      }
      if (W) G = await H(I);
    }
    if (!G.ok) {
      let W = mr(G.error);
      if (o.forgoIf?.(W) !== true) return o.ifContended(W);
      return await b(W);
    }
    let z = { identity: h, released: false };
    try {
      return await gr.run([...y, z], () => r({ suspect: () => {
        let W = Date.now() - F, V = performance.now() - O;
        return k || Math.abs(W - V) > 1e3;
      } }));
    } finally {
      z.released = true, await G.value().catch(_s);
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
var Ce = { factor: 1.25, minTimeout: 5, maxTimeout: 200 }, Ps = 28, KXi = 6e5;
function bs(e) {
  if (e === void 0) return { retries: Ps, ...Ce };
  let r = Math.min(e, KXi), o = 0, g = 0;
  for (; ; ) {
    let h = Math.min(Ce.maxTimeout, Math.round(Ce.minTimeout * Ce.factor ** o));
    if (g + h > r) return { retries: o, ...Ce };
    if (h === Ce.maxTimeout) {
      let y = Math.floor((r - g) / h);
      return { retries: o + y, ...Ce };
    }
    g += h, o += 1;
  }
}
function mr(e) {
  return e.kind === "fs" && Nze(e.error, "ELOCKED") ? { kind: "contended" } : e;
}
async function Rs(e) {
  let r = pt.get(e) ?? Promise.resolve(), o = () => {
  }, g = new Promise((y) => {
    o = y;
  }), h = r.then(() => g);
  return pt.set(e, h), await r, { async [Symbol.asyncDispose]() {
    if (o(), pt.get(e) === h) pt.delete(e);
  } };
}
function _s(e) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  if (r === void 0 || !Es.has(r)) (0, import_chunk_w578pjby.t)(`storage lock release failed: ${e}`, { level: "warn" });
}
var jt = String.raw`'([^']*)'(?:(=)(?:'([^']*)')?)?`, ks = new RegExp(String.raw`^(?:${jt}(?:[ \t\r\n]+${jt})*)?[ \t\r\n]*$`);
function CRt(e = process.env) {
  let r = [], o = e.GIT_CONFIG_COUNT;
  if (o !== void 0) {
    if (!/^\d{1,3}$/.test(o)) return {};
    for (let E = 0; E < Number(o); E++) {
      let P = e[`GIT_CONFIG_KEY_${E}`], b = e[`GIT_CONFIG_VALUE_${E}`];
      if (P === void 0 || b === void 0) return {};
      r.push([P, b]);
    }
  }
  let g = e.GIT_CONFIG_PARAMETERS;
  if (g !== void 0 && ks.test(g)) for (let [, E = "", P, b = ""] of g.matchAll(new RegExp(jt, "g"))) {
    let v = P === void 0 ? E.indexOf("=") : -1;
    r.push(P !== void 0 || v === -1 ? [E, b] : [E.slice(0, v), E.slice(v + 1)]);
  }
  let h = {}, y = 0;
  for (let [E, P] of r) if (E.toLowerCase() === "safe.directory") h[`GIT_CONFIG_KEY_${y}`] = "safe.directory", h[`GIT_CONFIG_VALUE_${y}`] = P, y++;
  if (y === 0) return {};
  return h.GIT_CONFIG_COUNT = String(y), h;
}
function pMs() {
  let e = {};
  for (let r of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let o = process.env[r];
    if (o !== void 0 && (o === "" || (0, import_path7.isAbsolute)(o))) e[r] = o;
  }
  return (0, import_chunk_gd77dyw4.ms)({ ...e, ...CRt() });
}
async function ZXi(e, r) {
  let { exitCode: o } = await (0, import_chunk_7fsmgfxx.ut)("git", [...import_chunk_gd77dyw4.Nn, "check-ignore", "--", e], { preserveOutputOnError: false, cwd: r, env: pMs() });
  return o;
}
async function mMs(e, r) {
  return await ZXi(e, r) === 0;
}
async function Is(e) {
  let { stdout: r, code: o } = await (0, import_chunk_7fsmgfxx.ut)("git", ["config", "--global", "--get", "core.excludesfile"], { preserveOutputOnError: false, cwd: e });
  return xs(o === 0 ? r : "");
}
function xs(e) {
  let r = e.trim();
  if (r) {
    if (r === "~" || r.startsWith("~/")) return (0, import_path7.join)((0, import_os2.homedir)(), r.slice(2));
    if ((0, import_path7.isAbsolute)(r)) return r;
  }
  let o = import_chunk_c203g5kd.s.XDG_CONFIG_HOME;
  if (o && (0, import_path7.isAbsolute)(o)) return (0, import_path7.join)(o, "git", "ignore");
  return (0, import_path7.join)((0, import_os2.homedir)(), ".config", "git", "ignore");
}
async function hMs(e, r = (0, import_chunk_18rsj2ts.pe)(), o = false) {
  try {
    let g = await (0, import_chunk_w5s307zm.Lna)(r);
    if (!g && !o) return { written: false, effective: false };
    let h = e.replaceAll("\\", "/"), y = `**/${h}`, E = h.endsWith("/") ? `${h}sample-file.txt` : h;
    if (g && await mMs(E, r)) return { written: false, effective: true };
    let P = await Is(r), b = (0, import_path7.dirname)(P);
    await (0, import_promises6.mkdir)(b, { recursive: true });
    try {
      let k = await (0, import_promises6.readFile)(P, { encoding: "utf-8" });
      if (!g && k.includes(y)) return { written: false, effective: k.split(`
`).some((F) => F.trim() === y) };
      if (k.includes(y)) {
        let F = await yr(E, r) ? "already_tracked" : "excludesfile_not_read";
        return (0, import_chunk_w578pjby.t)(`[gitignore] '${y}' already present in ${P} but git check-ignore reports not-ignored \u2014 ${Sr(F, E)}`, { level: "warn" }), { written: false, effective: false, reason: F };
      }
      await (0, import_promises6.appendFile)(P, `
${y}
`);
    } catch (k) {
      if ((0, import_chunk_jv7av99m.w)(k) === "ENOENT") await (0, import_promises6.writeFile)(P, `${y}
`, "utf-8");
      else throw k;
    }
    if (!g) return { written: true, effective: true };
    if (!await mMs(E, r)) {
      let k = await yr(E, r) ? "already_tracked" : "excludesfile_not_read";
      return (0, import_chunk_w578pjby.t)(`[gitignore] wrote '${y}' to ${P} but git check-ignore still reports not-ignored \u2014 ${Sr(k, E)}`, { level: "warn" }), { written: true, effective: false, reason: k };
    }
    return { written: true, effective: true };
  } catch (g) {
    return (0, import_chunk_w578pjby.t)(`Failed to add gitignore entry to global gitignore: ${g instanceof Error ? g.message : String(g)}`, { level: "error" }), { written: false, effective: false };
  }
}
async function yr(e, r) {
  let { code: o } = await (0, import_chunk_7fsmgfxx.ut)("git", [...import_chunk_gd77dyw4.Nn, "ls-files", "--error-unmatch", "--", e], { preserveOutputOnError: false, cwd: r, env: pMs() });
  return o === 0;
}
function Sr(e, r) {
  return e === "already_tracked" ? `'${r}' is tracked in the index; gitignore rules do not apply to tracked files` : "core.excludesfile may point elsewhere";
}
var $s = 255, Pr = /* @__PURE__ */ new Set(["ENOENT", "ENOTDIR", "EACCES", "EPERM", "ELOOP", "ENAMETOOLONG", "EINVAL"]);
function Fe(e) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  if (r === void 0 || !Pr.has(r)) throw e;
}
function tgn(e) {
  let r = (0, import_path8.resolve)(e), o = r;
  try {
    o = (0, import_chunk_w578pjby.le)().realpathSync(r);
  } catch {
    if (Us(r)) return true;
  }
  try {
    return wr(o) || o !== r && wr(r);
  } catch {
    return true;
  }
}
function Us(e) {
  let r = (0, import_chunk_w578pjby.le)();
  for (let o = e; ; ) {
    try {
      if (r.lstatSync(o).isSymbolicLink()) return true;
    } catch (h) {
      let y = (0, import_chunk_jv7av99m.w)(h);
      if (y === void 0 || !Pr.has(y)) return true;
    }
    let g = (0, import_path8.dirname)(o);
    if (g === o) return false;
    o = g;
  }
}
function wr(e) {
  let r = (0, import_chunk_w578pjby.le)(), o;
  try {
    o = r.lstatSync(e).dev;
  } catch (h) {
    Fe(h), o = void 0;
  }
  let g = e;
  for (; ; ) {
    if ((0, import_chunk_aka192fb.w3)(g)) return !(0, import_chunk_aka192fb.Qoe)(g);
    let h = (0, import_path8.join)(g, ".git"), y;
    try {
      y = r.lstatSync(h);
    } catch (P) {
      Fe(P);
    }
    if (y?.isSymbolicLink() && Rr(h, g)) return true;
    if (y !== void 0 && Bs(h, y)) return false;
    if (br(g, "generously")) return true;
    let E = (0, import_path8.dirname)(g);
    if (E === g) return false;
    if ((0, import_chunk_cg8dqz0a.x)() !== "windows" && o !== void 0) try {
      if (r.lstatSync(E).dev !== o) return false;
    } catch (P) {
      return Fe(P), false;
    }
    g = E;
  }
}
function Bs(e, r) {
  let o = (0, import_chunk_w578pjby.le)(), g = r, h = e;
  if (r.isSymbolicLink()) try {
    g = o.statSync(e), h = (0, import_chunk_z6pfqf6e.uC)(import_fs5.realpathSync.native(e));
  } catch (y) {
    return Fe(y), false;
  }
  if (g.isDirectory()) return br(h, "strictly");
  return g.isFile();
}
function br(e, r) {
  let o = (0, import_chunk_w578pjby.le)();
  try {
    let g = o.lstatSync((0, import_path8.join)(e, "HEAD"));
    if (g.isSymbolicLink()) {
      let h = o.readlinkSync((0, import_path8.join)(e, "HEAD"));
      if (!(r === "generously" && (0, import_chunk_cg8dqz0a.x)() === "windows" ? h.replaceAll("\\", "/") : h).startsWith("refs/")) return false;
    } else {
      if (!g.isFile()) return false;
      let h = Gs((0, import_path8.join)(e, "HEAD"), $s);
      if (h === null || !((r === "strictly" ? /^ref:[ \t\n\r]*refs\// : /^ref:\s*refs\//).test(h) || /^[0-9a-fA-F]{40}/.test(h))) return false;
    }
  } catch (g) {
    return Fe(g), false;
  }
  try {
    return o.lstatSync((0, import_path8.join)(e, "commondir")), r === "generously";
  } catch (g) {
    Fe(g);
  }
  try {
    for (let g of ["objects", "refs"]) if (r === "strictly") {
      if (o.lstatSync((0, import_path8.join)(e, g)).isSymbolicLink() && Rr((0, import_path8.join)(e, g), e)) return false;
      if (!o.statSync((0, import_path8.join)(e, g)).isDirectory()) return false;
      (0, import_fs5.accessSync)((0, import_path8.join)(e, g), import_fs5.constants.X_OK);
    } else o.lstatSync((0, import_path8.join)(e, g));
    return true;
  } catch (g) {
    return Fe(g), false;
  }
}
function Rr(e, r) {
  let o = (0, import_chunk_w5s307zm.d2)(e);
  return o === null || (0, import_chunk_z6pfqf6e.fa)(o, r) || (0, import_chunk_w5s307zm.Rg)(o, r);
}
function Gs(e, r) {
  let o;
  try {
    o = (0, import_fs5.openSync)(e, (0, import_chunk_6mfepmbb.Xu)());
  } catch (g) {
    return Fe(g), null;
  }
  try {
    let g = Buffer.alloc(r), h = (0, import_fs5.readSync)(o, g, 0, r, 0);
    return g.toString("latin1", 0, h);
  } finally {
    (0, import_fs5.closeSync)(o);
  }
}
function Ks(e) {
  return e === "--cloud" || e === "--remote" || e.startsWith("--cloud=") || e.startsWith("--remote=");
}
function rEe() {
  return (0, import_chunk_dw5px5e0.Tb)(import_chunk_z8cg6ntt.D0o) !== void 0 || (0, import_chunk_dw5px5e0.L1e)(Ks) !== -1 && (0, import_chunk_dw5px5e0.ZOe)() && !(0, import_chunk_dw5px5e0.GE)("-p") && !(0, import_chunk_dw5px5e0.GE)("--print");
}
function eFl(e) {
  return e !== "globalConfig" && import_chunk_xzvhvaa2.yp.has(e) && rEe();
}
var eJi = "--ignore-persisted-trust";
function gMs() {
  return (0, import_chunk_44yfdc64.gce)(() => import_chunk_c203g5kd.s.CLAUDE_CODE_IGNORE_PERSISTED_TRUST) || process.argv.includes(eJi);
}
function QX() {
  return (0, import_chunk_f9x2f6cx.Se)() && gMs();
}
function aut(e) {
  return e !== "globalConfig" && import_chunk_xzvhvaa2.yp.has(e) && (rEe() || QX());
}
function Iee(e) {
  return e !== void 0 && import_chunk_xzvhvaa2.yp.has(e) && QX();
}
var _r = ["BASE_API_URL", "TOKEN_URL", "CLAUDE_AI_ORIGIN", "API_KEY_URL", "ROLES_URL", "MCP_PROXY_URL"], kr = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function yB() {
  let e = kr.get("isPinned") ?? import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN === true;
  return kr.set("isPinned", e), e;
}
function tJi() {
  return true;
}
function tFl() {
  return "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN";
}
function nJi(e) {
  return `Error: serve helper stopped: ${e} does not resolve to this computer's stored claude.ai login on Anthropic's own service`;
}
function zs() {
  let e = (0, import_chunk_ephf358x.Lft)(), r = e.OAUTH_FILE_SUFFIX === "-local-oauth", o = URL.parse(import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL ?? ""), g = (0, import_chunk_zhr7rpv7.pc)() && (o === null || o.protocol === "https:"), h = r && (0, import_chunk_dvkg7v5x.P_)(o?.hostname ?? "");
  if (!g && !h) return "base_url";
  try {
    let y = (0, import_chunk_ephf358x.cn)();
    if (_r.some((E) => y[E] !== e[E])) return "oauth_endpoint";
  } catch {
    return "oauth_endpoint";
  }
  if (r && _r.some((y) => !(0, import_chunk_dvkg7v5x.P_)(URL.parse(e[y])?.hostname ?? ""))) return "oauth_endpoint";
  return;
}
function zMr() {
  if (!yB()) return;
  let e = zs();
  if (e === void 0) return;
  try {
    process.stderr.write(`${nJi(e)}
`);
  } finally {
    process.exit(import_chunk_m417dzmj.n2);
  }
}
var yJe = (0, import_chunk_t57w17k7.de)({ asks: void 0, isAsking: false, readAs: void 0, told: void 0 }, (e) => {
  e.asks = void 0, e.isAsking = false, e.readAs = void 0, e.told = void 0;
});
function SJe() {
  let e = yJe;
  if (e.isAsking) return e.readAs ??= (0, import_chunk_xcgcdx61.cm)(), e.readAs;
  let r = (0, import_chunk_xcgcdx61.cm)();
  if (e.asks !== void 0) {
    e.isAsking = true;
    try {
      r = e.asks();
    } finally {
      e.isAsking = false;
    }
  }
  let o = e.readAs !== void 0 && e.readAs !== r;
  if (e.readAs = r, o) (0, import_chunk_r3mm3x33.Br)().invalidatePolicyLayer();
  return r;
}
var rJi = 5e3;
function ngn(e, r) {
  let o = (0, import_chunk_r3mm3x33.Br)(), g = (0, import_chunk_ccm69jjy.Je)((0, import_chunk_73gwqz1r.E3)(typeof r === "string" ? Buffer.from(r) : r));
  o.internalWrites.set(e, { markedAt: Date.now(), contentHash: g }), o.noteOwnWrite(e, g);
}
function nFl(e, r) {
  let o = (0, import_chunk_r3mm3x33.Br)().internalWrites, g = o.get(e);
  if (g !== void 0 && Date.now() - g.markedAt < r) return o.delete(e), g.contentHash;
  return;
}
function rFl(e) {
  let r = (0, import_chunk_r3mm3x33.Br)();
  r.internalWrites.delete(e), r.withdrawOwnWrite(e);
}
function oFl() {
  (0, import_chunk_r3mm3x33.Br)().internalWrites.clear();
}
function zIo(e, r) {
  let o = (0, import_chunk_r3mm3x33.Br)(), g = (o.hookVerdictRuns.get(e) ?? 0) + 1;
  if (o.hookVerdictRuns.set(e, g), r) o.hookBlockedFiles.add(e);
  else o.hookBlockedFiles.delete(e);
  return g;
}
function sFl(e, r, o) {
  if ((0, import_chunk_r3mm3x33.Br)().hookVerdictRuns.get(e) === r) zIo(e, o);
}
function vr(e) {
  return (0, import_chunk_r3mm3x33.Br)().hookBlockedFiles.has(e);
}
function Fr() {
  return (0, import_chunk_r3mm3x33.Br)().configChangeGate;
}
function iFl(e) {
  (0, import_chunk_r3mm3x33.Br)().configChangeGate = e;
}
function aFl(e) {
  let r = (0, import_chunk_r3mm3x33.Br)();
  if (r.configChangeGate === e) r.configChangeGate = void 0;
}
var Xt = Object.freeze({ settings: {}, errors: [], loadState: "absent" }), Oe = Object.freeze({ settings: {}, errors: [] });
class xr {
  mdm = null;
  hkcu = null;
  wslInherits = false;
  whereAsked = void 0;
  readOutcomes = null;
  unansweredReadsInARow = 0;
  lastAnswered = null;
  seatedWithNoAnswer = void 0;
  heldSince = void 0;
  loadPromise = null;
  sdkReread = { lastReadAt: 0, lastOutcomes: null, inFlight: void 0, lossSeen: "" };
  reread = { failedFor: void 0, failedAt: 0, inFlight: void 0, startedAt: 0 };
  startLoad(e) {
    if (this.loadPromise) return;
    this.loadPromise = (async () => {
      let r = Date.now(), g = await ((0, import_chunk_7n1tpv84.ZJi)() ?? (0, import_chunk_7n1tpv84.tMo)()), { mdm: h, hkcu: y, wslInherits: E, whereAsked: P } = await ht(g, e);
      this.replace(h, y, E, P, g.outcomes), this.readOutcomes = g.outcomes;
      let b = Date.now() - r;
      (0, import_chunk_w578pjby.t)(`MDM settings load completed in ${b}ms`);
      try {
        (0, import_chunk_y53wbr8a.a)("tengu_managed_settings_os_read", sa(g, b));
      } catch {
      }
      let v = Tz();
      if (Object.keys(v.settings).length > 0) {
        (0, import_chunk_w578pjby.t)(`MDM settings found: ${Object.keys(v.settings).join(", ")}`);
        try {
          (0, import_chunk_42tcgre6.q)("info", "mdm_settings_loaded", { duration_ms: b, key_count: Object.keys(h.settings).length, error_count: h.errors.length });
        } catch {
        }
      }
    })();
  }
  replace(e, r, o, g, h) {
    if (this.mdm = e, this.hkcu = r, this.wslInherits = o, this.whereAsked = g, this.sdkReread.lossSeen = "", h === void 0) return;
    this.sdkReread.lastReadAt = Date.now(), this.sdkReread.lastOutcomes = h;
    let y = { mdm: e, hkcu: r, wslInherits: o, whereAsked: g }, E = (h.hklm === null || h.hklm.answered) && !bJe(y).mdm.errors.some((P) => P.errorClass === "unreadable" && P.errno === void 0 && P.userWritable !== true);
    if (E) this.unansweredReadsInARow = 0, this.lastAnswered = y, this.seatedWithNoAnswer = void 0;
    else this.unansweredReadsInARow++, this.seatedWithNoAnswer = e;
    {
      let P = Zt();
      if (E && this.heldSince !== void 0) {
        let b = Date.now() - this.heldSince;
        this.heldSince = void 0, (0, import_chunk_cqa9hrgx.u)("managed_settings_os_hold", { duration_ms: b });
      } else if (this.heldSince === void 0 && P !== void 0 && Cr(P)) this.heldSince = Date.now(), (0, import_chunk_cqa9hrgx.l)("managed_settings_os_hold", h.hklm === null || h.hklm.answered ? "document_unread" : h.hklm.status === "ok" ? "no_value_printed" : h.hklm.status);
    }
  }
  reset() {
    this.mdm = null, this.hkcu = null, this.wslInherits = false, this.whereAsked = void 0, this.readOutcomes = null, this.unansweredReadsInARow = 0, this.lastAnswered = null, this.seatedWithNoAnswer = void 0, this.heldSince = void 0, this.loadPromise = null, this.sdkReread = { lastReadAt: 0, lastOutcomes: null, inFlight: void 0, lossSeen: "" }, this.reread = { failedFor: void 0, failedAt: 0, inFlight: void 0, startedAt: 0 };
  }
}
var Or = "@builtin", Js = ["prependPlugins", "appendPlugins"];
function Xs(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var qs = new import_chunk_2904xtvq.j(() => new xr());
function he() {
  return qs.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Qs(e) {
  he().startLoad(e);
}
async function lut() {
  let e = he();
  if (!e.loadPromise) Qs();
  await e.loadPromise;
}
function Tz() {
  if ((0, import_chunk_6mfepmbb.t$)()) return Xt;
  return qt().mdm;
}
function qt() {
  let e = Qt();
  {
    let r = Zt();
    if (r !== void 0 && Cr(r)) return Zs(r, e);
  }
  return e;
}
function Cr(e) {
  return e.mdm.loadState !== "absent" || (e.mdm.heldDocuments ?? []).length > 0 || e.wslInherits || Object.keys(e.hkcu.settings).length > 0;
}
function Zs(e, r) {
  let o = r.mdm.errors.filter((g) => g.severity !== "warning" && g.userWritable !== true && !e.mdm.errors.some((h) => (0, import_chunk_f9x2f6cx.bp)(h, g)));
  return { ...e, wslInherits: e.wslInherits || r.wslInherits, mdm: o.length === 0 ? e.mdm : { ...e.mdm, errors: [...e.mdm.errors, ...o], loadState: (0, import_chunk_6mfepmbb.qze)(e.mdm.loadState, r.mdm.loadState), documentHasPolicyContent: e.mdm.documentHasPolicyContent || r.mdm.documentHasPolicyContent } };
}
function Qt() {
  let { mdm: e, hkcu: r, wslInherits: o } = bJe(he());
  return { mdm: e ?? Xt, hkcu: r ?? Oe, wslInherits: o };
}
function bJe(e) {
  return e.whereAsked !== void 0 && SJe() ? e.whereAsked : e;
}
function VMr(e) {
  let r = he().readOutcomes;
  if (r === null) return false;
  let o = r[e];
  return o === null || o.answered;
}
function VIo(e) {
  let r = he().readOutcomes;
  return r === null ? void 0 : r[e];
}
function ARt(e) {
  he().readOutcomes = e ?? null;
}
function oEe() {
  return he().mdm !== null;
}
function oKt() {
  let e = he();
  return e.loadPromise !== null && e.mdm === null;
}
function KIo() {
  if ((0, import_chunk_6mfepmbb.t$)()) return Oe;
  return qt().hkcu;
}
function SB() {
  return qt().wslInherits;
}
function YPe(e, r, o, g, h) {
  he().replace(e, r, o, g, h);
}
function qIo() {
  he().unansweredReadsInARow++;
}
function lFl() {
  return he().unansweredReadsInARow;
}
function Zt() {
  let { mdm: e, seatedWithNoAnswer: r, lastAnswered: o } = he();
  if (e !== r || o === null) return;
  let g = bJe(o);
  return g.mdm.userWritable === true ? void 0 : g;
}
function RRt() {
  return Zt()?.mdm.settings ?? null;
}
function dFl() {
  let e = he().lastAnswered;
  return e === null ? null : bJe(e).mdm;
}
function rgn() {
  return he().reread;
}
function xRt() {
  let { mdm: e, hkcu: r, wslInherits: o, whereAsked: g } = he();
  return { mdm: e ?? Xt, hkcu: r ?? Oe, wslInherits: o, whereAsked: g };
}
async function Zhe(e) {
  let r = await (0, import_chunk_7n1tpv84.tMo)(true);
  return { ...await ht(r, e), readOutcomes: r.outcomes };
}
function Ye(e, r, { userWritable: o = false } = {}) {
  let g = (0, import_chunk_0jve1fep.et)(e, false);
  if (!(0, import_chunk_ma3kja9f.T)(g)) return { settings: {}, errors: [(0, import_chunk_6mfepmbb.hMo)(r, { userWritable: o })], documentHasPolicyContent: false, loadState: "didNotLoad" };
  let h = [], y = g;
  for (let O of o ? import_chunk_6mfepmbb.pMo : []) {
    if (!(O in y)) continue;
    if (y = y === g ? { ...g } : y, delete y[O], !(0, import_chunk_6mfepmbb.Eut)(O)) h.push({ file: r, path: O, message: `"${O}" is only honored from administrator-controlled managed settings and was ignored in ${r}, which the user account can write.`, severity: "warning", statusOnly: true });
  }
  if (o) {
    for (let I of Js) {
      if (!(I in y)) continue;
      y = y === g ? { ...g } : y, delete y[I], h.push({ file: r, path: I, message: `"${I}" is only honored from administrator-controlled managed settings and was ignored in ${r}, which the user account can write.`, severity: "warning", statusOnly: true });
    }
    let O = y.enabledPlugins;
    if (Xs(O)) {
      if (Object.entries(O).filter(([H, G]) => H.endsWith(Or) || G !== false).length > 0) {
        y = y === g ? { ...g } : y;
        let H = (0, import_chunk_gd77dyw4.Hr)(O, (G, z) => !z.endsWith(Or) && G === false);
        if (Object.keys(H).length > 0) y.enabledPlugins = H;
        else delete y.enabledPlugins;
        h.push({ file: r, path: "enabledPlugins", message: `"enabledPlugins" entries that enable a plugin, or name a built-in, are only honored from administrator-controlled managed settings and were ignored in ${r}, which the user account can write.`, severity: "warning", statusOnly: true });
      }
    }
  }
  let { settings: E, errors: P, documentHasPolicyContent: b, loadState: v, onlySubstitutes: k } = (0, import_chunk_6mfepmbb.s2)(y, r), F = [...h, ...P];
  return { settings: E ?? {}, errors: o ? F.map((O) => ({ ...O.severity === "warning" && !O.startupFatal ? O : { ...ea(O), severity: "warning", statusOnly: true }, userWritable: true })) : F, documentHasPolicyContent: b, loadState: v, ...k && { onlySubstitutes: k } };
}
function ea({ startupFatal: e, loadedWithoutGuardHook: r, ...o }) {
  return o;
}
function Vt(e, r, o, g) {
  return { file: e, path: "", message: `Managed settings document (${e}) could not be read: ${r}; none of its settings are in effect.`, severity: o ? "warning" : "fatal", statusOnly: true, errorClass: "unreadable", ...g.errno !== void 0 && { errno: g.errno }, ...g.cause !== void 0 && { unreadCause: g.cause }, ...o && { userWritable: true } };
}
function mt(e, r = "Settings") {
  let o = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), g = new RegExp(`^[ \\t]+${o}[ \\t]+REG_(?:EXPAND_)?SZ[ \\t]+([\\s\\S]*)`, "im"), h = e.match(g)?.[1]?.trimEnd();
  return h ? h : null;
}
var ta = /* @__PURE__ */ new Map([["ENOENT", (0, import_chunk_78g0060s.S)("ENOENT")], ["EACCES", (0, import_chunk_78g0060s.S)("EACCES")], ["EPERM", (0, import_chunk_78g0060s.S)("EPERM")], ["ENOEXEC", (0, import_chunk_78g0060s.S)("ENOEXEC")], ["EAGAIN", (0, import_chunk_78g0060s.S)("EAGAIN")], ["EMFILE", (0, import_chunk_78g0060s.S)("EMFILE")], ["ENOMEM", (0, import_chunk_78g0060s.S)("ENOMEM")], ["ETIMEDOUT", (0, import_chunk_78g0060s.S)("ETIMEDOUT")], ["ERR_CHILD_PROCESS_STDIO_MAXBUFFER", (0, import_chunk_78g0060s.S)("ERR_CHILD_PROCESS_STDIO_MAXBUFFER")]]), na = /* @__PURE__ */ new Map([["SIGTERM", (0, import_chunk_78g0060s.S)("SIGTERM")], ["SIGKILL", (0, import_chunk_78g0060s.S)("SIGKILL")], ["SIGINT", (0, import_chunk_78g0060s.S)("SIGINT")]]);
function ra(e) {
  if (!e) return;
  return ta.get(e) ?? (0, import_chunk_78g0060s.S)("other");
}
function oa(e) {
  if (!e) return;
  return na.get(e) ?? (0, import_chunk_78g0060s.S)("other");
}
function Ar(e, r) {
  if (!r) return {};
  return { [`${e}_status`]: (0, import_chunk_78g0060s.f)(r.status), [`${e}_exit_code`]: r.exitCode ?? void 0, [`${e}_errno`]: ra(r.errno), [`${e}_signal`]: oa(r.signal), [`${e}_duration_ms`]: r.durationMs };
}
function sa(e, r) {
  return { is_wsl: (0, import_chunk_dqanqm2x.FKn)(), await_ms: r, ...Ar("hklm", e.outcomes.hklm), ...Ar("hkcu", e.outcomes.hkcu) };
}
async function ht(e, r, o = false) {
  let g = [], h = false, y = "absent";
  for (let W of e.plistStdouts ?? []) {
    let { label: V, userWritable: oe } = W;
    if (oe && h) continue;
    let te = W.stdout === null ? { settings: {}, errors: [Vt(V, W.unreadReason, oe, { errno: W.unreadErrno, cause: W.unreadCause })], documentHasPolicyContent: false, loadState: "didNotLoad", ...oe && { userWritable: oe } } : { ...Ye(W.stdout, V, { userWritable: oe }), ...oe && { userWritable: oe } };
    if (oe ? (0, import_chunk_6mfepmbb.IKn)(te.settings) : te.documentHasPolicyContent) return { mdm: { ...te, errors: [...g, ...te.errors], documentHasPolicyContent: true, plist: V }, hkcu: Oe, wslInherits: false };
    if (h ||= (0, import_chunk_6mfepmbb.kgn)(te), g.push(...te.errors), !oe) y = (0, import_chunk_6mfepmbb.qze)(y, te.loadState);
  }
  let E = `Registry: ${import_chunk_dqanqm2x.TKt}\\${import_chunk_dqanqm2x.LKn}`, P = null, b = "disarmed", v = `Registry: ${import_chunk_dqanqm2x.EMo}\\${import_chunk_dqanqm2x.LKn}`;
  if (!o && (e.hklmStdout !== null || e.hklmUnreadReason !== void 0 || e.hkcuStdout !== null) && true && (0, import_chunk_dqanqm2x.NKn)()) {
    let [W, V] = await Promise.all([import_chunk_dqanqm2x.URt, (0, import_path9.dirname)(import_chunk_dqanqm2x.URt)].map((te) => (0, import_promises7.lstat)(te).then(({ uid: Q, gid: Z, mode: re }) => ({ uid: Q, gid: Z, mode: re }), () => {
      return;
    }))), oe = true;
    try {
      oe = (0, import_chunk_6mfepmbb.xKn)(new import_chunk_f9x2f6cx.GEe(), import_chunk_dqanqm2x.URt, W, V);
    } catch (te) {
      (0, import_chunk_w578pjby.t)(`registry tool: could not be asked about, held: ${te}`, { level: "error" });
    }
    if (oe) {
      let te = [];
      if (e.hklmStdout !== null) te.push([E, Ye(mt(e.hklmStdout) ?? "", E)]);
      else if (e.hklmUnreadReason !== void 0) te.push([E, { settings: {}, errors: [Vt(E, e.hklmUnreadReason, false, { cause: "oversize" })], documentHasPolicyContent: false, loadState: "didNotLoad" }]);
      if (e.hkcuStdout !== null) te.push([v, Ye(mt(e.hkcuStdout) ?? "", v, { userWritable: true })]);
      let Q = await ht(e, r, true), Z = await ht({ ...e, hklmStdout: null, hklmUnreadReason: void 0, hkcuStdout: null }, r, true);
      return { ...Q, whereAsked: { ...Z, mdm: { ...Z.mdm, heldDocuments: te.map(([re, X]) => ({ path: re, parsed: { ...X, settings: X.loadState === "loaded" ? X.settings : null }, ...re === v && { userWritable: true } })) } } };
    }
  }
  if (e.hklmStdout !== null) {
    let W = mt(e.hklmStdout) ?? "";
    P = Ye(W, E);
    let V = (0, import_chunk_0jve1fep.et)(W, false);
    if ((0, import_chunk_ma3kja9f.T)(V)) b = (0, import_chunk_xcgcdx61.XZi)(V);
  } else if (e.hklmUnreadReason !== void 0) P = { settings: {}, errors: [Vt(E, e.hklmUnreadReason, false, { cause: "oversize" })], documentHasPolicyContent: false, loadState: "didNotLoad" };
  let k = P !== null && (0, import_chunk_6mfepmbb.kgn)(P);
  if (P) g.push(...P.errors), y = (0, import_chunk_6mfepmbb.qze)(y, P.loadState);
  let F = (0, import_chunk_dqanqm2x.FKn)(), O = "disarmed", I = E, H = [];
  if (F) {
    if (O = b, O !== "armed") {
      let W = await la(r);
      if (H = W.links, W.flag === "armed" || O === "disarmed") O = W.flag, I = W.unreadableFlagPath ?? import_chunk_dqanqm2x.wI;
      if (O === "disarmed") g.push(...W.records), y = (0, import_chunk_6mfepmbb.qze)(y, W.loadState);
    }
  }
  let G = O !== "disarmed", z = { settings: {}, errors: g, loadState: y };
  if (F && !G) {
    let W = new Set(P?.errors.filter((V) => V.severity === "warning"));
    return { mdm: { ...z, errors: z.errors.map((V) => W.has(V) ? { ...V, wslIgnored: true } : V), ...H.length > 0 && { managedDocumentLinks: H } }, hkcu: Oe, wslInherits: false };
  }
  if (P && k) return { mdm: P, hkcu: Oe, wslInherits: G };
  if (O === "unreadable") {
    let W = await Jt(import_chunk_dqanqm2x.wI, r), V = (0, import_chunk_6mfepmbb.mQi)(I);
    return { mdm: { ...z, errors: W ? z.errors : [...z.errors, V], ...W && { withheldFlagRecord: V }, documentHasPolicyContent: true, loadState: (0, import_chunk_6mfepmbb.qze)(z.loadState, "loaded") }, hkcu: Oe, wslInherits: G };
  }
  if (e.hkcuStdout !== null && !(0, import_chunk_f9x2f6cx.Y)() && !await aa(G, r)) {
    let W = Ye(mt(e.hkcuStdout) ?? "", v, { userWritable: true });
    if (!F || W.settings.wslInheritsWindowsSettings === true) {
      let { wslInheritsWindowsSettings: V, managedSourcesBehavior: oe, ...te } = W.settings;
      return { mdm: z, hkcu: { settings: te, errors: W.errors }, wslInherits: G };
    }
    if (W.errors.length > 0) return { mdm: z, hkcu: { settings: {}, errors: W.errors }, wslInherits: G };
  }
  return { mdm: z, hkcu: Oe, wslInherits: G };
}
async function yt(e, r) {
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0) return (await (0, import_chunk_73gwqz1r.wk)(e, import_chunk_6mfepmbb.Jp)).content;
  return (0, import_chunk_73gwqz1r.RB)(e, import_chunk_6mfepmbb.Jp);
}
async function aa(e, r) {
  if (e && await Jt(import_chunk_dqanqm2x.wI, r)) return true;
  return Jt((0, import_chunk_6mfepmbb.Sb)(), r);
}
async function Tr(e, r) {
  let o;
  try {
    o = await yt(e, r);
  } catch (g) {
    return !(0, import_chunk_jv7av99m.J)(g);
  }
  try {
    let g = (0, import_chunk_6mfepmbb.uT)(o, e, true);
    return (0, import_chunk_6mfepmbb.kgn)({ ...g, loadState: (0, import_chunk_6mfepmbb.Uee)(g) });
  } catch {
    return true;
  }
}
async function oJi(e) {
  let r = he().wslInherits;
  if (r = SB(), !(0, import_chunk_dqanqm2x.FKn)() || !r) return "";
  let o = [];
  try {
    o.push(await yt((0, import_path9.join)(import_chunk_dqanqm2x.wI, "managed-settings.json"), e));
  } catch (g) {
    o.push(Yt(g));
  }
  try {
    let g = (0, import_path9.join)(import_chunk_dqanqm2x.wI, "managed-settings.d"), h = (await (0, import_chunk_w578pjby.le)().readdir(g)).filter((y) => (y.isFile() || y.isSymbolicLink()) && y.name.endsWith(".json") && !y.name.startsWith(".")).map((y) => y.name).sort();
    for (let y of h) try {
      o.push(`${y}\0${await yt((0, import_path9.join)(g, y), e)}`);
    } catch (E) {
      o.push(`${y}\0${Yt(E)}`);
    }
  } catch (g) {
    let h = Yt(g);
    if (h !== "") o.push(h);
  }
  return o.join("");
}
function Yt(e) {
  return St(e) ? "" : "\0unreadable";
}
function St(e) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  return r === "ENOENT" || r === "ENOTDIR";
}
async function la(e) {
  let r = [], o = "absent", g = [], h = /* @__PURE__ */ new Map();
  async function y(F, O) {
    let I = (0, import_path9.join)(import_chunk_dqanqm2x.wI, ...F), H;
    try {
      H = await yt(I, e);
    } catch (W) {
      if (St(W)) return "disarmed";
      r.push((0, import_chunk_6mfepmbb.bHr)(I, W)), o = "didNotLoad";
    }
    let G = await (0, import_chunk_6mfepmbb.NFl)(import_chunk_dqanqm2x.wI, F, O, h);
    if (G !== null) g.push({ link: G, read: H !== void 0 });
    if (H === void 0) return "disarmed";
    let z = H.trim() === "" ? {} : (0, import_chunk_0jve1fep.et)(H, false);
    if (!(0, import_chunk_ma3kja9f.T)(z)) return r.push((0, import_chunk_6mfepmbb.hMo)(I)), o = "didNotLoad", "disarmed";
    return o = (0, import_chunk_6mfepmbb.qze)(o, "loaded"), (0, import_chunk_xcgcdx61.XZi)(z);
  }
  let E = (0, import_path9.join)(import_chunk_dqanqm2x.wI, "managed-settings.json"), P = await y(["managed-settings.json"]);
  if (P === "armed") return { flag: P, records: r, loadState: o, links: g };
  let b = P === "unreadable" ? E : void 0, v = (0, import_path9.join)(import_chunk_dqanqm2x.wI, "managed-settings.d"), k;
  try {
    k = await (0, import_chunk_w578pjby.le)().readdir(v);
  } catch (F) {
    if (!St(F)) r.push((0, import_chunk_6mfepmbb.bHr)(v, F, "directory")), o = "didNotLoad";
    return { flag: P, unreadableFlagPath: b, records: r, loadState: o, links: g };
  }
  for (let F of k) {
    if (!(F.isFile() || F.isSymbolicLink()) || !F.name.endsWith(".json") || F.name.startsWith(".")) continue;
    let O = await y(["managed-settings.d", F.name], F.isSymbolicLink());
    if (O === "armed") return { flag: O, records: r, loadState: o, links: g };
    if (O === "unreadable") P = O, b ??= (0, import_path9.join)(v, F.name);
  }
  return { flag: P, unreadableFlagPath: b, records: r, loadState: o, links: g };
}
async function Jt(e, r) {
  if (await Tr((0, import_path9.join)(e, "managed-settings.json"), r)) return true;
  let o = (0, import_path9.join)(e, "managed-settings.d"), g;
  try {
    g = await (0, import_chunk_w578pjby.le)().readdir(o);
  } catch (h) {
    return !St(h);
  }
  for (let h of g) if ((h.isFile() || h.isSymbolicLink()) && (0, import_chunk_6mfepmbb.Foe)(h.name) && await Tr((0, import_path9.join)(o, h.name), r)) return true;
  return false;
}
(0, import_chunk_adx6804h.B)();
var Lr = ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass"], $r = "C:\\Windows", wt = "C:\\Program Files", KMr = `${$r}\\System32`, en = `${KMr}\\WindowsPowerShell\\v1.0`, da = `${KMr}\\cmd.exe`, ca = [`${wt}\\PowerShell\\7\\pwsh.exe`, `${wt}\\PowerShell\\7-preview\\pwsh.exe`, `${en}\\powershell.exe`];
function ga() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return null;
  for (let e of ca) {
    let r = (0, import_chunk_z6pfqf6e.TF)(e);
    if (r === null) {
      if ((0, import_chunk_w578pjby.le)().existsSync(e)) return null;
      continue;
    }
    if (r.toLowerCase() === e.toLowerCase()) return e;
  }
  return null;
}
var pa = "PowerShell not found at any of its stock install locations on C: (fixed absolute candidates only; PATH is never consulted)", tn = "CLAUDE_CODE_POLICY_HELPER_PSMODULEPATH", nn = "CLAUDE_CODE_POLICY_HELPER_PS1_PATH", ma = `$env:PSModulePath = $env:${tn}; `, ha = "if ($ExecutionContext.SessionState.LanguageMode -eq 'FullLanguage') { try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new() } catch {} }; ";
function Ur(e) {
  return `${ma}${ha}$LASTEXITCODE = 0; try { ${e} } catch { Write-Error $_; exit 1 }; exit $LASTEXITCODE`;
}
var ya = Ur(`& ($env:${nn})`), Sa = Ur("Invoke-Expression (@($input) -join [char]10)");
function wa(e) {
  return (0, import_chunk_4smdap7r.M)([`${e}\\Modules`, `${wt}\\PowerShell\\Modules`, `${wt}\\WindowsPowerShell\\Modules`, `${en}\\Modules`]).join(";");
}
function Ea(e) {
  return (0, import_chunk_4smdap7r.M)([e, KMr, $r, `${KMr}\\Wbem`, en]).join(";");
}
var Pa = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC", ba = ["DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_"], Ra = /* @__PURE__ */ new Set(["DEVPATH", "__PSLOCKDOWNPOLICY", "PSMODULEANALYSISCACHEPATH", "PSMODULEPATH", "PATH", "PATHEXT", "COMSPEC", "TERM", tn, nn]), _a = ["LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "LC_"], ka = /* @__PURE__ */ new Set(["ENV", "BASH_ENV", "SHELLOPTS", "PS4", "GCONV_PATH", "IFS", "PWD", "CDPATH", "OLDPWD", "TMOUT", "POSIXLY_CORRECT", "BASHOPTS", "BASH_COMPAT", "EXECIGNORE", "BASH_SOURCE_PATH", "BASH_LOADABLES_PATH", "GLOBIGNORE", "GLOBSORT", "LOCPATH", "PATH_LOCALE", "NLSPATH", "LANG", "TMPDIR", "TMP", "TEMP"]), va = "/usr/bin:/bin:/usr/sbin:/sbin";
function Nr(e, r, o, g) {
  for (let h of Object.keys(e)) {
    let y = g(h);
    if (r.has(y) || o.some((E) => y.startsWith(E))) delete e[h];
  }
}
function Gr(e, r) {
  let o = { ...e };
  switch (r.routedInterpreter) {
    case void 0:
      return o;
    case "sh":
      return Nr(o, ka, _a, (g) => g), o.PATH = va, o.LC_ALL = "C", o;
    case "pwsh": {
      Nr(o, Ra, ba, (h) => h.toUpperCase());
      let g = import_path11.win32.dirname(r.file);
      if (o.PSModulePath = wa(g), o[tn] = o.PSModulePath, o.PATH = Ea(g), o.PATHEXT = Pa, o.COMSPEC = da, o.TERM = "dumb", r.ps1Path !== void 0) o[nn] = r.ps1Path;
      return o;
    }
  }
}
function jr(e) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? import_path11.win32.dirname(e.file) : "/";
}
function Kr(e) {
  if (e.script != null) {
    if (e.interpreter === "sh") return { plan: { file: "/bin/sh", args: ["-s"], input: e.script, routedInterpreter: "sh" } };
    return Dr({ args: [...Lr, "-Command", Sa], input: e.script });
  }
  let { path: r } = e;
  if (r == null) return { error: "no path or script configured", code: "bad_path" };
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows" || !(0, import_chunk_xcgcdx61.zZi)(r)) return { plan: { file: r, args: [] } };
  return Dr({ args: [...Lr, "-Command", ya], ps1Path: r });
}
function Dr(e) {
  let r = ga();
  if (r === null) return { error: pa, code: "interpreter_unavailable" };
  return { plan: { file: r, routedInterpreter: "pwsh", ...e } };
}
async function Vr(e, r, o) {
  if (e.routedInterpreter !== void 0) return null;
  let g;
  try {
    g = await (0, import_chunk_5appeerh.me)(Oa(e.file, o), r);
  } catch (h) {
    return `cannot stat path (${(0, import_chunk_jv7av99m.w)(h) ?? "unknown error"}): ${e.file}`;
  }
  if (g === void 0) return on(e.file, r);
  return g.isFile() ? null : `path is not a regular file: ${e.file}`;
}
function Oa(e, r) {
  let o = r.get(e);
  if (o === void 0) {
    o = (0, import_chunk_w578pjby.le)().stat(e), r.set(e, o);
    let g = () => r.delete(e);
    o.then(g, g);
  }
  return o;
}
function on(e, r) {
  return `cannot stat path (timed out after ${r} ms): ${e}`;
}
var Aa = ["LD_", "DYLD_", "BASH_FUNC_", "__BASH_FUNC<", "PYTHON", "PERL5", "RUBY", "LUA_", "DOTNET_", "COMPLUS_", "COR_", "CORECLR_", "APPDOMAIN_MANAGER_", "GIT_"], Ta = /* @__PURE__ */ new Set(["NODE_OPTIONS", "NODE_PATH", "BASH_ENV", "ENV", "SHELLOPTS", "BASHOPTS", "PS4", "PERLLIB", "GEM_PATH", "GEM_HOME", "JAVA_TOOL_OPTIONS", "_JAVA_OPTIONS", "JDK_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "CLASSPATH", "BUN_OPTIONS", "MONO_PATH", "R_PROFILE_USER", "DEVPATH", "GCONV_PATH", "OPENSSL_CONF", "OPENSSL_MODULES", "OPENSSL_ENGINES", "KRB5_CONFIG", "GTK_PATH", "QT_PLUGIN_PATH", "GIO_MODULE_DIR", "FPATH", "IFS", "CDPATH", "SSH_ASKPASS", "SSH_ASKPASS_REQUIRE", "SASL_PATH", "PHPRC", "PHP_INI_SCAN_DIR"]), Ia = /* @__PURE__ */ new Set(["PATH", "COMSPEC", "ZDOTDIR", "XDG_CONFIG_HOME", "PSMODULEPATH", "SYSTEMROOT", "WINDIR", "SYSTEMDRIVE", "PATHEXT"]), xa = "/usr/bin:/bin:/usr/sbin:/sbin", Ca = "C:\\Windows\\System32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0", La = "C:\\Windows\\System32\\cmd.exe", Ma = "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules", Na = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC", Xe = "/var/empty/claude-code-policy-helper", Yr = "C:\\Windows\\claude-code-policy-helper";
function cFl(e) {
  return e === "win32" ? Yr : Xe;
}
function sJi(e) {
  let r = e.toUpperCase();
  return Ta.has(r) || Aa.some((o) => r.startsWith(o));
}
function Da(e) {
  return Ia.has(e.toUpperCase()) || sJi(e);
}
function _Ms(e, r) {
  let o = { ...e }, g = new Set((0, import_chunk_9zdrdv25.r1e)(e).map((h) => h.toUpperCase()));
  for (let h of Object.keys(o)) if (Da(h) || g.has(h.toUpperCase())) delete o[h];
  if (Object.assign(o, (0, import_chunk_9zdrdv25.n1e)(o).respelled), o.PYTHONNOUSERSITE = "1", o.GIT_CONFIG_NOSYSTEM = "1", r === "win32") o.GIT_CONFIG_GLOBAL = Yr, o.PATH = Ca, o.COMSPEC = La, o.PSModulePath = Ma, o.PATHEXT = Na, o.SystemRoot = "C:\\Windows", o.windir = "C:\\Windows", o.SystemDrive = "C:";
  else o.GIT_CONFIG_GLOBAL = Xe, o.PATH = xa, o.ZDOTDIR = Xe, o.XDG_CONFIG_HOME = Xe, o.PSModulePath = Xe;
  return o;
}
var Wa = 1e4, Et = 1048576, $a = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ managedSettings: (0, import_chunk_adx6804h.ie)().optional(), claudeMd: (0, import_chunk_adx6804h.n)().optional(), appendSystemPrompt: (0, import_chunk_adx6804h.n)().optional() }));
function Pt(e) {
  return { message: e, remote: null };
}
var iJi = "<policyHelper>";
function Me() {
  let e = (0, import_chunk_r3mm3x33.Br)();
  if ((0, import_chunk_m15w38ag.ne)() && e.primer !== void 0) e.invalidatePolicyLayer();
  else (0, import_chunk_r3mm3x33.pr)();
}
class ti {
  state = null;
  selectionWarnings = [];
  initializeAttempted = false;
  structuralRefusalLogged = false;
  noEntrySadLogged = false;
  defaultFallback = null;
  payloadRefusalError = null;
  refreshTimer = null;
  refreshInFlight = false;
  midSessionArmingEnabled = false;
  osAdminArming = null;
  undeliveredRefusal = null;
  startsNoSession = false;
  decidedOrigin = null;
  pendingStats = /* @__PURE__ */ new Map();
  remoteArmGeneration = 0;
  osAdminRetireGeneration = 0;
  stoppedAsking = false;
  remoteArmingConfig = null;
  remoteFailedConfig = null;
  lastFailure = null;
  selectedEntry = null;
  restartFrom = null;
  releaseLatchWhenTickSettles = false;
  readRemotePayload = null;
  armedFromUserWritableBase = false;
  retiredHelperPaths = /* @__PURE__ */ new Set();
  remoteDecision = null;
  refreshed = (0, import_chunk_69qhefwa.Be)();
  passesInFlight = 0;
  passSettled = (0, import_chunk_69qhefwa.Be)();
  claimInitialize() {
    if (this.initializeAttempted) return false;
    return this.initializeAttempted = true, true;
  }
  apply(e) {
    if (this.state = e, this.remoteFailedConfig = null, this.lastFailure = null, Me(), e.config) this.startRefreshTimer(e.config, e.fromPerOs, e.armedFromRemote);
    else this.stopRefreshTimer();
  }
  retireState() {
    let e = this.state?.config?.path;
    if (e !== void 0) this.retiredHelperPaths.add(e);
    this.state = null, this.lastFailure = null, this.selectedEntry = null;
  }
  reset() {
    this.remoteArmGeneration++, this.remoteArmingConfig = null, this.armedFromUserWritableBase = false, this.remoteDecision = null, this.state = null, this.retiredHelperPaths.clear(), this.selectionWarnings = [], this.initializeAttempted = false, this.structuralRefusalLogged = false, this.noEntrySadLogged = false, this.defaultFallback = null, this.payloadRefusalError = null, this.refreshInFlight = false, this.midSessionArmingEnabled = false, this.osAdminArming = null, this.undeliveredRefusal = null, this.restartFrom = null, this.stoppedAsking = false, this.decidedOrigin = null, this.remoteFailedConfig = null, this.lastFailure = null, this.selectedEntry = null, this.releaseLatchWhenTickSettles = false, this.readRemotePayload = null, this.stopRefreshTimer(), Me();
  }
  announceTierChange() {
    Me();
    try {
      (0, import_chunk_r3mm3x33.Br)().changed.emit("policySettings"), this.refreshed.emit();
    } catch (e) {
      (0, import_chunk_k449cc64.i)(e);
    }
  }
  stopRefreshTimer() {
    if (this.refreshTimer) clearInterval(this.refreshTimer), this.refreshTimer = null;
  }
  holdRemoteFailure({ config: e, fromPerOs: r }, o) {
    if (this.remoteFailedConfig = e, !o) return;
    if (e.path !== void 0) this.retiredHelperPaths.add(e.path);
    this.startRefreshTimer(e, r, true);
  }
  retireRemoteFailure() {
    if (this.remoteFailedConfig === null) return;
    this.remoteFailedConfig = null, this.lastFailure = null, this.selectedEntry = null, this.stopRefreshTimer(), this.releaseLatch();
  }
  releaseLatch() {
    if (this.refreshInFlight) this.releaseLatchWhenTickSettles = true;
    else this.initializeAttempted = false;
  }
  settleRefreshExec() {
    if (this.refreshInFlight = false, this.releaseLatchWhenTickSettles) this.releaseLatchWhenTickSettles = false, this.releaseLatchAfterTornDownExec();
  }
  releaseLatchAfterTornDownExec() {
    if (this.initializeAttempted = false, this.readRemotePayload !== null) wMs(this.readRemotePayload);
  }
  startRefreshTimer(e, r, o) {
    this.stopRefreshTimer();
    let g = e.refreshIntervalMs ?? 0;
    if (g <= 0) return;
    this.refreshTimer = setInterval((h, y, E) => {
      if (this.refreshInFlight) return;
      if (this.refreshInFlight = true, E && this.state === null) {
        Xa(h, y).finally(() => this.settleRefreshExec());
        return;
      }
      let P = this.state;
      En(h, y, E, () => this.state === P).then((b) => {
        if (this.state === null || this.state !== P) return;
        let v = E && Rt(h) || h;
        if ("error" in b) {
          if (this.defaultFallback) {
            let k = `the static ${this.defaultFallback.sourceField} settings payload governs`;
            if (this.state.serving === "default") {
              if ((0, import_chunk_w578pjby.t)(`policyHelper refresh: helper still failing (${b.error}); the static default settings payload continues to govern`, { level: "debug" }), sn(b.error, k, y), this.lastFailure !== b.code) this.lastFailure = b.code, this.announceTierChange();
              return;
            }
            (0, import_chunk_w578pjby.t)(`policyHelper refresh failed (${b.error}); applying the static ${this.defaultFallback.sourceField} settings payload`, { level: "warn" }), sn(b.error, k, y), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "refresh_fell_back_to_default"), this.state.serving = "default", this.lastFailure = b.code, this.state.mergesOutput = un(v, this.defaultFallback), this.state.output = { managedSettings: _t(this.defaultFallback.settings, E, (0, import_chunk_xcgcdx61.nc)()) }, this.state.warnings = this.defaultFallback.warnings, this.announceTierChange();
            return;
          }
          if ((0, import_chunk_w578pjby.t)(`policyHelper refresh failed (retaining current policy): ${b.error}`, { level: "warn" }), sn(b.error, "the last successful helper output still governs", y), (0, import_chunk_cqa9hrgx.l)("settings_policy_helper", "refresh_failed", { attempts: b.attempts }), this.lastFailure !== b.code) this.lastFailure = b.code, this.announceTierChange();
          return;
        }
        if (yn(), this.state.serving === "default") (0, import_chunk_w578pjby.t)("policyHelper refresh: helper recovered; its output replaces the static default settings payload", { level: "info" }), (0, import_chunk_cqa9hrgx.u)("settings_policy_helpers_per_os");
        this.state.serving = "helper", this.lastFailure = null, this.state.mergesOutput = v.outputBehavior === "merge", this.state.output = b.output, this.state.warnings = b.warnings, this.announceTierChange();
      }).catch((b) => {
        (0, import_chunk_k449cc64.i)(b);
      }).finally(() => this.settleRefreshExec());
    }, Math.min(g, import_chunk_xcgcdx61.dDs), e, r, o), this.refreshTimer.unref?.();
  }
}
var R = new ti(), np = (0, import_chunk_jk26f2gn.f$)({ clear: Qa }), uFl = R.refreshed, ni = /* @__PURE__ */ new Set(["plist", "hklm", "file"]);
async function uKn(e, r, o) {
  let g = R.undeliveredRefusal;
  if (g !== null) return R.undeliveredRefusal = null, g;
  let h = await oi(e, r, o);
  if (h === null) return null;
  if (h.remote) {
    if (R.startsNoSession) return ri(h.message, h.remote), null;
    ii(h.remote);
  }
  return h.message;
}
function fFl() {
  R.startsNoSession = true;
}
function ri(e, r) {
  (0, import_chunk_w578pjby.t)(`policyHelper: ${e} (reached in a command that starts no session; it proceeds without the helper)`, { level: "error" }), Le('onFailure is "refuse", but this command starts no Claude Code session, so it proceeds without the helper; sessions will not start until the helper succeeds', r.tuple), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "remote_refuse_not_enforced_no_session");
}
function ii(e) {
  (0, import_chunk_cqa9hrgx.m)("settings_policy_helpers_per_os", e.code, e.helperFailureReason === void 0 ? void 0 : { helper_failure_reason: (0, import_chunk_78g0060s.f)(e.helperFailureReason) });
}
function fKn(e) {
  return e.find((r) => r.startupFatal && (r.path === "" || r.path === "policyHelpers" || r.path.startsWith("policyHelpers.")));
}
function aJi(e) {
  let r = fKn(e);
  if (r) return import_chunk_xcgcdx61.v8.some((o) => r.path === `policyHelpers.${o}`) ? "helper_failed" : "policy_invalid";
  return R.payloadRefusalError !== null ? "policy_invalid" : "helper_failed";
}
async function oi(e, r, o) {
  R.passesInFlight++;
  try {
    let g = await Jr(e, r, o);
    for (let h = R.restartFrom; h !== null; h = R.restartFrom) {
      Ot(Ft()), R.restartFrom = null;
      let y = h();
      bMs(y.origin), g = await Jr(y.settings, y.origin, y.loadErrors);
    }
    return g;
  } finally {
    if (R.restartFrom !== null) try {
      Ot(Ft()), R.restartFrom = null;
    } catch (g) {
      (0, import_chunk_k449cc64.i)(g);
    }
    R.passesInFlight--, R.passSettled.emit();
  }
}
async function Jr(e, r, o) {
  let g = fKn(o);
  if (g) {
    if (!R.structuralRefusalLogged) {
      R.structuralRefusalLogged = true;
      let H = g.path;
      (0, import_chunk_cqa9hrgx.m)("settings_policy_helpers_per_os", H === "" ? "document_invalid" : H === "policyHelpers" ? "structural_invalid" : H === "policyHelpers.default" || H.endsWith(".defaultSettings") ? "default_payload_invalid" : "entry_invalid");
    }
    return Pt(`${g.file === void 0 ? "managed settings" : (0, import_chunk_7cfjrnwy.el)(g.file)}: ${g.message}`);
  }
  if (R.payloadRefusalError !== null) return Pt(R.payloadRefusalError);
  if (!R.claimInitialize()) return null;
  R.decidedOrigin = r, ui(), R.remoteDecision = null, R.selectedEntry = null, De(fi), De(ln);
  let h = e?.policyHelpers, y = r === "remote" && yMs(e), E = y ? wn(e) : null, P = E?.tuple, b = y ? void 0 : e?.policyHelper;
  if (!h && !b) {
    if ((0, import_chunk_xcgcdx61.JC)() === true && !(0, import_chunk_xcgcdx61.Yb)()) (0, import_chunk_w578pjby.t)("policyHelper: no helper configuration present at helper-pass time (remote managed settings eligible, no payload in cache); a payload landing later arms one only through a fetch cycle after preAction", { level: "debug" });
    return R.initializeAttempted = false, null;
  }
  if (E) {
    if (R.remoteDecision = E, !E.verified && P !== void 0) return R.initializeAttempted = false, Le("remote settings not verified this session", P), null;
  } else if (r === "remote" && h) return (0, import_chunk_w578pjby.t)("remote policyHelpers names no helper and carries no static payload for this platform", { level: "debug" }), R.initializeAttempted = false, null;
  else if (r === null || !ni.has(r)) {
    if ((0, import_chunk_w578pjby.t)(`policyHelper ignored: delivered via non-admin source '${r ?? "unknown"}'`, { level: "warn" }), r === "remote") R.initializeAttempted = false;
    return null;
  }
  R.armedFromUserWritableBase = r === "plist" && Tz().userWritable === true;
  let v = h ? (0, import_chunk_xcgcdx61.zFe)() : null, k = null;
  if (E) dn(E);
  else k = ja(h, v?.chain ?? []);
  if (k) return R.payloadRefusalError = k, Pt(k);
  let F = Va(h, b, v, y);
  if (!F) return R.initializeAttempted = false, null;
  if (R.selectedEntry = F.kind === "helper" ? { key: F.entryKey, config: F.config } : { key: Pi(F.fallback.sourceField), config: null }, F.kind === "default") {
    if (E && !E.payloadServable) {
      if (R.initializeAttempted = false, Le(E.verified ? `${F.fallback.sourceField} carries settings not yet approved in the managed-settings dialog; it is not applied until they are` : `${F.fallback.sourceField} carries settings the managed-settings dialog lists and remote settings are not verified this session; it is not applied until they are`, void 0), E.verified) (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "remote_consent_missing");
      return null;
    }
    return (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "fell_back_to_default"), (0, import_chunk_w578pjby.t)(`policyHelper: no policyHelpers helper entry for platform "${v?.platform ?? "unknown"}"; applying the static ${F.fallback.sourceField} settings payload`, { level: "info" }), an(null, F.fallback.mergesOutput, y), null;
  }
  let O = R.defaultFallback, I = si(F.fromPerOs ? F.config : null, y);
  if (E && !E.helperMayExec) {
    if (O && E.payloadServable) return an(null, un(F.config, O), true), Le(`not yet approved in the managed-settings dialog; the static ${O.sourceField} settings payload governs until it is`, P), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "remote_consent_missing"), null;
    if (R.initializeAttempted = false, Le(O ? `not yet approved in the managed-settings dialog, and neither are settings the static ${O.sourceField} payload carries; nothing from the entry applies until they are` : "not yet approved in the managed-settings dialog", P), I) return { message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${ai(P)} to succeed (onFailure "refuse"), and it cannot run until those settings are approved in the managed-settings dialog. Contact your administrator.`, remote: { code: "remote_refused_on_failure", helperFailureReason: void 0, tuple: P } };
    return (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "remote_consent_missing"), null;
  }
  try {
    if (F.fromPerOs) {
      if (await qr(F, { armedFromRemote: y, suppressExecEvents: y || O !== null }) === "applied") (0, import_chunk_cqa9hrgx.u)("settings_policy_helpers_per_os");
    } else await qr(F);
  } catch (H) {
    let G = R.defaultFallback, z = y ? R.remoteDecision?.helperRefusesOnFailure ?? I : I;
    if (F.fromPerOs && !G) if (!(H instanceof kt)) (0, import_chunk_cqa9hrgx.m)("settings_policy_helpers_per_os", "error");
    else if (y && z) ;
    else if (!y && !I) (0, import_chunk_cqa9hrgx.m)("settings_policy_helpers_per_os", "continued_on_failure", { helper_failure_reason: (0, import_chunk_78g0060s.f)(H.code) });
    else (0, import_chunk_cqa9hrgx.m)("settings_policy_helpers_per_os", H.code);
    if (H instanceof kt) {
      if (G) return (0, import_chunk_w578pjby.t)(`${H.message}; applying the static ${G.sourceField} settings payload instead`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "fell_back_to_default_on_failure"), an(H.code === "bad_path" ? null : F, un(F.config, G), y), R.lastFailure = H.code, null;
      if (R.lastFailure = H.code, y) return Le(H.message, P), R.holdRemoteFailure(F, H.code !== "bad_path"), z ? Ua(H, P) : null;
      if (!I) return Ba(H.message), null;
      return Pt(H.message);
    }
    throw H;
  }
  return null;
}
function si(e, r) {
  let o = e?.onFailure;
  return o == null ? !r : o !== "continue";
}
function Ua(e, r) {
  return { message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${ai(r)} to succeed (onFailure "refuse"), and it failed [${e.code}] \u2014 ${e.message}. Contact your administrator.`, remote: { code: "remote_refused_on_failure", helperFailureReason: e.code, tuple: r } };
}
function ai(e) {
  return (e === void 0 ? void 0 : (0, import_chunk_xcgcdx61._Ds)(e)) ?? "it configures";
}
var ln = 'policyHelpers entry skipped (onFailure "continue"): ', Xr = "; Claude Code started without the helper's output";
function Ba(e) {
  let r = Tt((0, import_chunk_xcgcdx61.XKt)(e.replace(/\s+/gu, " ")), gn - ln.length - Xr.length);
  hn(`${ln}${r}${Xr}`);
}
var li = "remote policyHelpers entry not run: ", di = "remote policyHelpers static settings payload not applied: ", gn = 512;
function Tt(e, r = gn) {
  return e.length > r ? `${e.slice(0, r - 1)}\u2026` : e;
}
function Le(e, r) {
  let o = (0, import_chunk_xcgcdx61.XKt)(e.replace(/\s+/gu, " ")), g = r === void 0 ? void 0 : (0, import_chunk_xcgcdx61._Ds)(r), h = Tt(r === void 0 ? `${di}${o}` : `${li}${g ? `${g}: ` : ""}${o}`);
  hn(h);
}
var mn = "remote policyHelpers static settings payload skipped: ";
function Ga(e, r, o) {
  if (hn(Tt(`${mn}${e} is not a valid static settings payload (${(0, import_chunk_xcgcdx61.XKt)(r.replace(/\s+/gu, " "))})`)), o) (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "remote_default_payload_invalid");
}
function hn(e) {
  R.selectionWarnings.push({ file: "policyHelper", path: "policyHelpers", message: e, severity: "warning", statusOnly: true }), Me(), (0, import_chunk_w578pjby.t)(e, { level: "warn" });
}
function ui() {
  ci(), De(mn);
}
function ci() {
  De(li), De(di), R.retireRemoteFailure();
}
var bt = "policyHelper refresh failing: ";
function sn(e, r, o) {
  let g = `; ${r}`, h = Tt((0, import_chunk_xcgcdx61.XKt)(e.replace(/\s+/gu, " ")), gn - bt.length - g.length), y = `${bt}${h}${g}`;
  if (R.selectionWarnings.some((b) => b.message === y)) return;
  let E = R.selectionWarnings.filter((b) => !b.message.startsWith(bt)), P = E.length !== R.selectionWarnings.length;
  if (R.selectionWarnings = [...E, { file: "policyHelper", path: o ? "policyHelpers" : "policyHelper", message: y, severity: "warning", statusOnly: true }], !P) Me();
}
function yn() {
  De(bt);
}
var fi = "policyHelpers is configured but has no entry for platform ";
function De(e) {
  let r = R.selectionWarnings.filter((o) => !o.message.startsWith(e));
  if (r.length === R.selectionWarnings.length) return;
  R.selectionWarnings = r, Me();
}
function gi(e, r) {
  let o = (0, import_chunk_6mfepmbb.VMs)(e, r);
  for (let g of o.strippedKeys) (0, import_chunk_w578pjby.t)(`${r}: stripped ${g} from the settings payload (no recursion)`, { level: "warn" });
  for (let g of o.warnings) (0, import_chunk_w578pjby.t)(`${r}: ${g.message}`, { level: "warn" });
  return o;
}
function Sn(e, r) {
  let o = [];
  for (let g of r) {
    let h = e[g], y = h?.defaultSettings;
    if (y !== void 0 && y !== null) o.push({ field: `policyHelpers.${g}.defaultSettings`, raw: y, onChain: true, mergesOutput: h?.outputBehavior === "merge" });
  }
  for (let g of import_chunk_xcgcdx61.v8) {
    let h = e[g]?.defaultSettings;
    if (h !== void 0 && h !== null && !r.includes(g)) o.push({ field: `policyHelpers.${g}.defaultSettings`, raw: h, onChain: false, mergesOutput: false });
  }
  if (e.default !== void 0 && e.default !== null) o.push({ field: "policyHelpers.default", raw: e.default, onChain: true, mergesOutput: false });
  return o;
}
function pi(e, r) {
  if (e.raw !== null && typeof e.raw === "object" && !Array.isArray(e.raw)) {
    let { policyHelper: g, policyHelpers: h, ...y } = e.raw, E = (0, import_chunk_xcgcdx61.WKt)().safeParse(y);
    if (!E.success) return { error: E.error.issues[0]?.message ?? "failed validation" };
  }
  let o = r ? gi(e.raw, e.field) : (0, import_chunk_6mfepmbb.VMs)(e.raw, e.field);
  if ("error" in o) return { error: o.error };
  return { settings: o.settings, warnings: o.warnings.map((g) => ({ ...g, statusOnly: true })), sourceField: e.field, mergesOutput: e.mergesOutput };
}
function ja(e, r) {
  if (R.defaultFallback = null, !e) return null;
  let o = null;
  for (let g of Sn(e, r)) {
    let h = pi(g, g.onChain && !o);
    if ("error" in h) return (0, import_chunk_cqa9hrgx.m)("settings_policy_helpers_per_os", "default_payload_invalid"), `${g.field} is not a valid static settings payload (${h.error}); Claude Code will not start until it is fixed`;
    if (g.onChain && !o) o = h;
  }
  return R.defaultFallback = o, null;
}
function mi(e) {
  let r = null, o = [];
  for (let g of e) {
    let h = pi(g, false);
    if ("error" in h) o.push({ field: g.field, error: h.error });
    else if (!r) r = { ...h, warnings: (0, import_chunk_6mfepmbb.OJe)(h.warnings) };
  }
  return { winner: r, skipped: o };
}
function dn(e) {
  De(mn), R.defaultFallback = e.winner;
  for (let { field: r, error: o } of e.skipped) Ga(r, o, e.verified);
}
function hi(e, r) {
  return (0, import_chunk_xcgcdx61.h$l)((0, import_chunk_xcgcdx61.Iz)(e, "listing"), r.sourceField) || (0, import_chunk_xcgcdx61.uce)((0, import_chunk_xcgcdx61.Iz)(r.settings, "listing"));
}
function yi(e) {
  let r = e?.policyHelpers;
  return r ? Sn(r, (0, import_chunk_xcgcdx61.zFe)().chain).filter((o) => o.onChain) : [];
}
function pFl(e) {
  if (za(e) !== void 0) return true;
  let { winner: r } = mi(yi(e));
  return r !== null && hi(e, r);
}
function _t(e, r, o) {
  return r && !o ? (0, import_chunk_xcgcdx61.hta)(e) : e;
}
function wn(e) {
  let r = (0, import_chunk_xcgcdx61.nc)(), o = (0, import_chunk_xcgcdx61.VFe)(), g = e?.policyHelpers, h = g ? Qe(g, (0, import_chunk_xcgcdx61.zFe)().chain, true)?.config ?? null : null, y = (0, import_chunk_xcgcdx61.yqn)(h), E = yi(e), { winner: P, skipped: b } = mi(E);
  return { verified: r, tuple: y, helperMayExec: y !== void 0 && o, helperMergesOutput: h?.outputBehavior === "merge", helperRefusesOnFailure: si(h, true), payloadKey: (0, import_chunk_w578pjby._)((0, import_chunk_xcgcdx61.sF)(E.map((v) => [v.field, v.raw, v.mergesOutput]))), winner: P, skipped: b, payloadServable: P !== null && (o || !hi(e, P) && (r || y === void 0)) };
}
function wi(e, r) {
  return e.verified === r.verified && e.tuple === r.tuple && e.helperMayExec === r.helperMayExec && e.helperMergesOutput === r.helperMergesOutput && e.helperRefusesOnFailure === r.helperRefusesOnFailure && e.payloadKey === r.payloadKey && e.payloadServable === r.payloadServable;
}
function un(e, r) {
  return e.outputBehavior === "merge" || r?.mergesOutput === true;
}
function an(e, r, o) {
  let g = R.defaultFallback;
  if (!g) return;
  let h = (0, import_chunk_xcgcdx61.nc)();
  R.apply({ config: e?.config ?? null, fromPerOs: e?.fromPerOs ?? false, serving: "default", armedFromRemote: o, mergesOutput: r, output: { managedSettings: _t(g.settings, o, h) }, warnings: g.warnings }), (0, import_chunk_w578pjby.t)(`${g.sourceField} static settings payload applied${o ? ` from remote managed settings${h ? "" : " (cached, not yet verified this session)"}` : ""} (keys: ${Object.keys(g.settings).join(",")})`, { level: "debug" });
}
function yMs(e) {
  let r = e?.policyHelpers;
  if (!r) return false;
  let o = (0, import_chunk_xcgcdx61.zFe)().chain;
  return Qe(r, o, true) !== null || r.default !== void 0 && r.default !== null || o.some((g) => {
    let h = r[g]?.defaultSettings;
    return h !== void 0 && h !== null;
  });
}
function Qe(e, r, o) {
  for (let g of r) {
    let h = e[g];
    if (h == null) continue;
    if (o ? (0, import_chunk_xcgcdx61.yqn)(h) !== void 0 : h.path != null || h.script != null) {
      let { defaultSettings: E, ...P } = h;
      return { osKey: g, config: P };
    }
  }
  return null;
}
function za(e) {
  let r = e?.policyHelpers;
  return r ? (0, import_chunk_xcgcdx61.yqn)(Qe(r, (0, import_chunk_xcgcdx61.zFe)().chain, true)?.config ?? null) : void 0;
}
function Pi(e) {
  return import_chunk_xcgcdx61.v8.find((r) => e === `policyHelpers.${r}.defaultSettings`) ?? "default";
}
function bi(e, r) {
  return { key: e, ...r?.path !== void 0 && { path: r.path }, ...r?.script !== void 0 && e !== "policyHelper" && { script: r.script } };
}
function Ri(e, r, o, g, h) {
  let y = e && o ? Qe(e, o, g) : null;
  if (y) return { kind: "helper", entryKey: y.osKey, config: y.config, fromPerOs: true };
  if (e && o && h) return { kind: "payload", payload: h };
  return r ? { kind: "helper", entryKey: "policyHelper", config: r, fromPerOs: false } : null;
}
function lJi(e) {
  let r = e?.policyHelpers ?? void 0, o = r ? (0, import_chunk_xcgcdx61.zFe)().chain : null, g = Ri(r, e?.policyHelper ?? void 0, o, false, r && o ? Sn(r, o).find((h) => h.onChain) ?? null : null);
  if (g === null) return null;
  return g.kind === "payload" ? { key: Pi(g.payload.field) } : bi(g.entryKey, g.config);
}
function Va(e, r, o, g) {
  let h = Ri(e, r, o?.chain ?? null, g, R.defaultFallback);
  if (h !== null) {
    if (h.kind === "payload") return { kind: "default", fallback: h.payload };
    if (e && o && !h.fromPerOs) (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "fell_back_to_singular");
    return h;
  }
  if (!e || !o) return null;
  let { platform: y } = o;
  if (g) return null;
  let E = `${fi}"${y}", no default settings payload, and no policyHelper fallback; no policy helper will run`;
  if (R.selectionWarnings.push({ file: "policyHelper", path: "policyHelpers", message: E, severity: "warning", statusOnly: true }), Me(), (0, import_chunk_w578pjby.t)(E, { level: "warn" }), !R.noEntrySadLogged) R.noEntrySadLogged = true, (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "no_entry_for_platform");
  return null;
}
class kt extends Error {
  code;
  constructor(e, r) {
    super(r);
    this.code = e;
  }
}
async function qr({ config: e, fromPerOs: r }, o) {
  let g = o?.armedFromRemote === true, { remoteArmGeneration: h, osAdminRetireGeneration: y } = R;
  if (g) R.remoteArmingConfig = e;
  let E;
  try {
    E = await En(e, r, g, () => !g || R.remoteArmGeneration === h);
  } finally {
    if (R.remoteArmingConfig === e) R.remoteArmingConfig = null;
  }
  if (g && R.remoteArmGeneration !== h) {
    if (e.path !== void 0 && !("error" in E && E.code === "bad_path")) R.retiredHelperPaths.add(e.path);
    return (0, import_chunk_w578pjby.t)("policyHelper: remote arming revoked during exec; discarding output", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "deactivated_during_exec"), R.releaseLatchAfterTornDownExec(), "dropped";
  }
  if (!g && R.osAdminRetireGeneration !== y) {
    if (e.path !== void 0 && !("error" in E && E.code === "bad_path")) R.retiredHelperPaths.add(e.path);
    return (0, import_chunk_w578pjby.t)("policyHelper: OS-admin pass retired during exec; discarding output", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("settings_policy_helper", Ft().code), R.initializeAttempted = false, "dropped";
  }
  if ("error" in E) {
    if (!o?.suppressExecEvents) (0, import_chunk_cqa9hrgx.m)("settings_policy_helper", E.code, { attempts: E.attempts });
    throw new kt(E.code, `policyHelper failed: ${E.error}`);
  }
  if (R.apply({ config: e, fromPerOs: r, serving: "helper", armedFromRemote: g, mergesOutput: e.outputBehavior === "merge", output: E.output, warnings: E.warnings }), (0, import_chunk_w578pjby.t)(`policyHelper applied (keys: ${Object.keys(E.output).join(",")})`, { level: "debug" }), !o?.suppressExecEvents) (0, import_chunk_cqa9hrgx.u)("settings_policy_helper", { attempts: E.attempts });
  return "applied";
}
function _i() {
  return R.state?.output.managedSettings ?? null;
}
function ki() {
  let e = R.state;
  return e && !e.armedFromRemote ? e.output : void 0;
}
function YIo() {
  return ki()?.claudeMd ?? null;
}
function mFl() {
  return ki()?.appendSystemPrompt ?? null;
}
function Qde() {
  return R.state !== null;
}
function dut() {
  return R.passesInFlight > 0;
}
function XIo() {
  return R.releaseLatchWhenTickSettles;
}
function hFl(e) {
  return R.passSettled.subscribe(e);
}
function gFl() {
  return R.initializeAttempted;
}
function SMs() {
  return R.state?.armedFromRemote === true;
}
function sKt() {
  return R.state !== null && R.armedFromUserWritableBase;
}
function vi() {
  return R.state?.mergesOutput === true;
}
function bMs(e) {
  if (e !== "remote" || !R.initializeAttempted || R.state?.armedFromRemote === true) return;
  Ot({ said: "the remote payload that landed shadows the MDM/file policy it was read from", code: "retired_shadowed_by_remote" });
}
function _Fl(e) {
  Fi(e, false);
}
function yFl(e) {
  Fi(e, true);
}
function Fi(e, r) {
  let { state: o } = R;
  if (o?.armedFromRemote === true || R.remoteArmingConfig !== null || R.remoteFailedConfig !== null) return;
  if (R.stoppedAsking = r, R.osAdminRetireGeneration++, R.passesInFlight > 0) {
    R.restartFrom = e;
    return;
  }
  if (o === null && !R.initializeAttempted) {
    if (r) R.decidedOrigin = null, Ai("is read whole at the turn away from asking");
    return;
  }
  Ot(Ft()), Ti({ readBase: e, refuse: Oi }, `was read again at the turn ${r ? "away from" : "to"} asking its organization`);
}
function Oi(e) {
  let r = R.osAdminArming;
  if (r) r.refuse(e);
  else R.undeliveredRefusal = e;
}
var Ya = { said: "the session asks its organization: a fresh pass runs from the base as now read", code: "retired_held_document" }, Ja = { said: "the session stopped asking its organization: the base is read whole again", code: "retired_stopped_asking" };
function Ft() {
  return R.stoppedAsking ? Ja : Ya;
}
function Ot({ said: e, code: r }) {
  yn(), R.stopRefreshTimer();
  let o = R.state !== null;
  if (R.retireState(), R.defaultFallback = null, R.payloadRefusalError = null, R.remoteFailedConfig = null, R.initializeAttempted = false, r !== "retired_shadowed_by_remote") R.decidedOrigin = null;
  if (!o) return;
  (0, import_chunk_w578pjby.t)(`policyHelper: OS-admin helper pass retired; ${e}`, { level: "info" }), (0, import_chunk_cqa9hrgx.l)("settings_policy_helper", r), R.announceTierChange();
}
function qe() {
  if (R.remoteArmGeneration++, ui(), R.remoteDecision !== null) R.defaultFallback = null, R.remoteDecision = null, R.selectedEntry = null;
  if (R.state?.armedFromRemote !== true) return;
  yn(), R.stopRefreshTimer(), R.retireState(), R.releaseLatch(), (0, import_chunk_w578pjby.t)("policyHelper: remote-armed helper (or remote static payload) deactivated", { level: "info" }), R.announceTierChange();
}
(0, import_chunk_xcgcdx61.mea)(qe);
function Rt(e) {
  let r = R.readRemotePayload;
  if (r === null || !(0, import_chunk_xcgcdx61.VFe)()) return null;
  let o = r()?.policyHelpers, g = o ? Qe(o, (0, import_chunk_xcgcdx61.zFe)().chain, true)?.config ?? null : null;
  return g !== null && (0, import_chunk_xcgcdx61.yqn)(g) === (0, import_chunk_xcgcdx61.yqn)(e) ? g : null;
}
async function Xa(e, r) {
  try {
    if (Rt(e) === null) {
      (0, import_chunk_w578pjby.t)("policyHelper: remote retry stopped; the payload in force no longer authorizes the entry", { level: "info" }), qe();
      return;
    }
    let o = R.remoteArmGeneration;
    R.remoteArmingConfig = e;
    let g;
    try {
      g = await En(e, r, true, () => R.remoteArmGeneration === o && Rt(e) !== null);
    } finally {
      if (R.remoteArmingConfig === e) R.remoteArmingConfig = null;
    }
    let h = R.remoteArmGeneration !== o, y = h ? null : Rt(e);
    if (y === null) {
      if (!h) qe();
      (0, import_chunk_w578pjby.t)("policyHelper: remote retry revoked during exec; discarding output", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "deactivated_during_exec");
      return;
    }
    if ("error" in g) {
      (0, import_chunk_w578pjby.t)(`policyHelper retry failed (remote entry still not armed): ${g.error}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("settings_policy_helper", "refresh_failed", { attempts: g.attempts });
      return;
    }
    let E = { ...e, outputBehavior: y.outputBehavior };
    R.apply({ config: E, fromPerOs: r, serving: "helper", armedFromRemote: true, mergesOutput: E.outputBehavior === "merge", output: g.output, warnings: g.warnings }), ci(), (0, import_chunk_w578pjby.t)("policyHelper: remote entry armed by a retry tick", { level: "info" }), (0, import_chunk_cqa9hrgx.u)("settings_policy_helpers_per_os"), R.announceTierChange();
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function SFl(e) {
  R.midSessionArmingEnabled = true, R.osAdminArming = e ?? null;
  let r = R.undeliveredRefusal;
  if (r !== null && e) e.refuse(r), R.undeliveredRefusal = null;
}
function wMs(e) {
  qa(e), Ai("became the base mid-session");
}
function Ai(e) {
  let r = R.osAdminArming;
  if (r === null || !R.midSessionArmingEnabled || R.initializeAttempted || !r.baseSettled()) return;
  let { origin: o } = r.readBase();
  if (o === null || !ni.has(o) || o === R.decidedOrigin) return;
  Ti(r, e);
}
function Ti(e, r) {
  let { settings: o, origin: g, loadErrors: h } = e.readBase();
  bMs(g), uKn(o, g, h).then((y) => {
    if (y !== null) {
      (0, import_chunk_w578pjby.t)(`policyHelper: the ${g} source ${r} and its pass refused; exiting as the launch would have: ${y}`, { level: "error" }), e.refuse(y), R.decidedOrigin = g;
      return;
    }
    if (R.state === null) return;
    (0, import_chunk_w578pjby.t)(`policyHelper: armed from the ${g} source, which ${r}`, { level: "info" }), R.announceTierChange();
  }).catch((y) => {
    (0, import_chunk_k449cc64.i)(y);
  });
}
function qa(e) {
  if (R.readRemotePayload = e, !R.midSessionArmingEnabled || R.initializeAttempted || !(0, import_chunk_xcgcdx61.nc)()) return;
  let r = e();
  if (!yMs(r)) return;
  let o = R.remoteDecision;
  if (o !== null && wi(o, wn(r))) return;
  let g = R.retiredHelperPaths.size, { remoteFailedConfig: h, osAdminRetireGeneration: y } = R;
  oi(r, "remote", []).then((E) => {
    if (E === null) return;
    if (E.remote && R.startsNoSession) {
      ri(E.message, E.remote);
      return;
    }
    let P = R.osAdminArming;
    if (P !== null && (!(0, import_chunk_f9x2f6cx.Cl)() || P.isUnwatchedRepl())) {
      if ((0, import_chunk_w578pjby.t)(`policyHelper: ${E.message} (reached after this unwatched session started; ending it as the launch refusal would have)`, { level: "error" }), E.remote) ii(E.remote);
      P.refuse(E.message), R.midSessionArmingEnabled = false;
      return;
    }
    if (E.remote === null && R.osAdminRetireGeneration !== y) {
      (0, import_chunk_w578pjby.t)(`policyHelper: ${E.message} (refused by the pass a turn of the ask ran in this one's place; handed to the launch's handler, or kept for it)`, { level: "error" }), Oi(E.message), R.midSessionArmingEnabled = false;
      return;
    }
    if ((0, import_chunk_w578pjby.t)(`policyHelper: ${E.message} (reached after this interactive session started; it continues without the helper)`, { level: "error" }), E.remote) Le('onFailure is "refuse", but this was reached after this interactive session started, so it continues on the remote managed settings without the helper; new sessions will not start (and non-interactive or unwatched ones are ended) until the helper succeeds', E.remote.tuple), (0, import_chunk_cqa9hrgx.l)("settings_policy_helpers_per_os", "remote_refuse_unenforceable_midsession");
  }).catch((E) => {
    (0, import_chunk_k449cc64.i)(E);
  }).finally(() => {
    let E = R.state?.armedFromRemote === true;
    if (E) (0, import_chunk_w578pjby.t)(`policyHelper: remote ${R.state?.serving === "default" ? "static payload applied" : "entry armed"} mid-session`, { level: "info" });
    if (E || R.retiredHelperPaths.size > g || R.remoteFailedConfig !== h) R.announceTierChange();
  });
}
function bFl(e) {
  let r = R.remoteDecision;
  if (r === null) return;
  let o = e(), g = wn(o);
  if (wi(r, g)) return;
  let h = R.state;
  if (h?.armedFromRemote === true && h.serving === "default") {
    let b = g.tuple === r.tuple && g.helperMayExec === r.helperMayExec, v = g.winner;
    if (b && g.payloadServable && v !== null) {
      dn(g), R.remoteDecision = g;
      let k = _t(v.settings, true, g.verified);
      if (g.payloadKey === r.payloadKey && g.helperMergesOutput === r.helperMergesOutput && _t(v.settings, true, r.verified) === k) {
        (0, import_chunk_w578pjby.t)(`policyHelper: remote static payload from ${v.sourceField} stands as served (document ${g.verified ? "verified" : "no longer verified"} this session)`, { level: "debug" });
        return;
      }
      h.mergesOutput = g.helperMergesOutput || v.mergesOutput, h.output = { managedSettings: k }, h.warnings = v.warnings, (0, import_chunk_w578pjby.t)(`policyHelper: remote static payload re-served in place from ${v.sourceField}`, { level: "info" }), R.announceTierChange();
      return;
    }
    qe();
    return;
  }
  let y = h?.armedFromRemote === true ? h.config : R.remoteArmingConfig ?? R.remoteFailedConfig, E = y != null && g.helperMayExec && g.tuple === (0, import_chunk_xcgcdx61.yqn)(y), P = h !== null || R.remoteFailedConfig === null;
  if (E && P) {
    dn(g), R.remoteDecision = g, (0, import_chunk_w578pjby.t)("policyHelper: remote static payloads re-resolved under the armed entry; the arm stands", { level: "debug" });
    return;
  }
  qe();
}
function wFl() {
  return R.state?.config?.path ?? null;
}
function kFl() {
  return [...R.retiredHelperPaths];
}
function EFl(e) {
  let r = e?.policyHelpers, o = r ? (0, import_chunk_xcgcdx61.zFe)().chain.map((y) => r[y]).filter((y) => y != null).map((y) => ({ config: y, fromPerOs: true })) : [];
  if (e?.policyHelper != null) o.push({ config: e.policyHelper, fromPerOs: false });
  let g = Ii(), h = [];
  for (let { config: y, fromPerOs: E } of o) if (typeof y.path === "string" && xi(y, g, E, false) === null) h.push(y.path);
  return h;
}
function vFl() {
  return R.state?.serving === "default";
}
function ogn() {
  let { state: e, lastFailure: r, selectedEntry: o, remoteFailedConfig: g } = R, h = R.remoteDecision, y = o?.config ?? null, E = "none";
  if (h?.helperRefusesOnFailure === true && (g !== null || h.verified && h.tuple !== void 0 && !h.helperMayExec)) E = "refuse_pending";
  else if (r !== null) E = r;
  else if (h !== null && !h.verified && (h.tuple !== void 0 || !h.payloadServable)) E = "unverified";
  else if (h !== null && (y !== null && !h.helperMayExec || o !== null && y === null && !h.payloadServable)) E = "consent_missing";
  else if (y !== null && e?.serving === "helper") E = "ok";
  return { state: E, applied: e === null ? "none" : e.serving === "helper" ? "output" : "fallback", entry: o && bi(o.key, y) };
}
function cut() {
  return [...R.selectionWarnings, ...R.state?.warnings ?? []];
}
function Qa() {
  R.reset(), R.startsNoSession = false;
}
var At = null;
function TFl(e, r) {
  At = { remoteArmed: e, osAdmin: r };
}
function CFl() {
  return At?.osAdmin() ?? process.env;
}
var Za = 500, tl = 250, nl = 4e3;
function rl(e) {
  switch (e) {
    case "exit_nonzero":
    case "timed_out":
    case "not_a_file":
    case "interpreter_unavailable":
      return true;
    case "bad_path":
    case "oversize":
    case "parse_failed":
    case "envelope_invalid":
    case "schema_rejected":
      return false;
  }
}
var Qr = 2048;
function il(e) {
  let r = (0, import_chunk_13h3tw8q.js)(e);
  if (r.length <= Qr) return r;
  let o = (0, import_chunk_7cfjrnwy.ee)(r, Qr);
  return `${o}\u2026 (+${r.length - o.length} chars not shown; the full output is in the debug log)`;
}
async function En(e, r, o, g) {
  let h = r ? e.retries : void 0, y = h !== void 0 && Number.isInteger(h) && h > 0 ? Math.min(h, import_chunk_xcgcdx61.qZi) : 0;
  for (let E = 1; ; E++) {
    let P = await ol(e, r, o);
    if (!("error" in P)) return { ...P, attempts: E };
    let b = il(P.error), v = { error: E > 1 ? `after ${E} attempts: ${b}` : b, code: P.code, attempts: E };
    if (E > y || !rl(P.code) || !g()) return v;
    let k = (0, import_chunk_5appeerh.LI)({ baseMs: Za, floorMs: tl, capMs: nl, attempt: E - 1 });
    if ((0, import_chunk_w578pjby.t)(`policyHelper attempt ${E} of ${y + 1} failed [${P.code}]; retrying in ${k}ms: ${b}`, { level: "warn" }), await (0, import_chunk_5appeerh.K)(k), !g()) return v;
  }
}
async function ol(e, r, o) {
  let g = Ii(), h = xi(e, g, r, o);
  if (h) return { error: h, code: "bad_path" };
  let y = Kr(e);
  if ("error" in y) return y;
  let { plan: E } = y, P = Math.min(e.timeoutMs ?? Wa, import_chunk_xcgcdx61.dDs), b = performance.now(), v = await Vr(E, P, R.pendingStats);
  if (v) return { error: v, code: "not_a_file" };
  let k = Math.ceil(P - (performance.now() - b));
  if (k <= 0) return { error: on(E.file, P), code: "not_a_file" };
  let F;
  if (!o || E.input !== void 0) F = jr(E);
  else if (e.path === void 0) return { error: "remote-armed helper has no path", code: "bad_path" };
  else F = (g === "win32" ? import_path10.win32 : import_path10.posix).dirname(e.path);
  let O = (0, import_chunk_ch6jxpf8.cL)(() => {
    let X = process.env;
    return Gr(o ? _Ms(At?.remoteArmed() ?? X, g) : At?.osAdmin() ?? X, E);
  }), { stdout: I, stderr: H, code: G, error: z, maxBufferExceeded: W, timedOut: V } = await (0, import_chunk_7fsmgfxx.ut)(E.file, E.args, { timeout: k, cwd: F, useToolMemoryCgroup: false, maxBuffer: Et + 1, env: { ...O, CLAUDE_CODE_VERSION: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION }, extendEnv: false, stdin: E.input === void 0 ? "ignore" : "pipe", input: E.input });
  if (H) (0, import_chunk_w578pjby.t)(`policyHelper stderr: ${H}`, { level: "debug" });
  if (W) return { error: `${H.length > I.length ? "stderr" : "stdout"} exceeded ${Et} bytes`, code: "oversize" };
  if (V) return { error: `timed out after ${P}ms`, code: "timed_out" };
  let oe = (X) => {
    if (I) (0, import_chunk_w578pjby.t)(`policyHelper stdout: ${I}`, { level: "debug" });
    return X;
  };
  if (G !== 0) return oe({ error: `exited with code ${G}: ${H || I || z || ""}`, code: "exit_nonzero" });
  if (Buffer.byteLength(I, "utf8") > Et) return { error: `stdout exceeded ${Et} bytes`, code: "oversize" };
  let te = (0, import_chunk_0jve1fep.et)(I, false);
  if (te === null || typeof te !== "object") return oe({ error: "stdout is not a JSON object", code: "parse_failed" });
  let Q = $a().safeParse(te);
  if (!Q.success) return oe({ error: `invalid envelope: ${Q.error.message}`, code: "envelope_invalid" });
  let Z = {}, re = [];
  if (Q.data.managedSettings !== void 0) {
    let X = gi(Q.data.managedSettings, "policyHelper");
    if ("error" in X) return oe({ error: X.error, code: "schema_rejected" });
    if (re = X.warnings, o) re = (0, import_chunk_6mfepmbb.OJe)(re), delete X.settings.claudeMd;
    Z.managedSettings = X.settings;
  }
  if (Q.data.claudeMd !== void 0) Z.claudeMd = Q.data.claudeMd;
  if (Q.data.appendSystemPrompt !== void 0) Z.appendSystemPrompt = Q.data.appendSystemPrompt;
  return { output: Z, warnings: re };
}
function Ii() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? "win32" : "posix";
}
function xi(e, r, o, g) {
  if (e.script == null && e.interpreter == null) return sl(e.path, r, o, g);
  if (!o) return "inline scripts are not supported on the singular policyHelper key";
  if (e.path != null) return import_chunk_xcgcdx61.YZi;
  return (0, import_chunk_xcgcdx61.i$l)(e, r === "win32" ? "windows" : "linux");
}
function sl(e, r, o, g) {
  let h = r === "win32" ? import_path10.win32 : import_path10.posix;
  if (typeof e !== "string") return "path must be a string";
  if (!h.isAbsolute(e)) return `path must be absolute: ${e}`;
  if (r === "win32") {
    if (o && !import_chunk_xcgcdx61.GZi.test(e)) return `path must end in .exe or .ps1 on Windows: ${e}`;
    if (!o && !e.toLowerCase().endsWith(".exe")) return `path must end in .exe on Windows: ${e}`;
    if ((0, import_chunk_xcgcdx61.VZi)(e)) return `${import_chunk_xcgcdx61.KZi}: ${e}`;
  }
  if (g && (r === "win32" ? (0, import_chunk_xcgcdx61.BZi)(e) : (0, import_chunk_xcgcdx61.lqn)(e) || (0, import_chunk_xcgcdx61.WZi)(e))) return `path must not be a UNC, network-automount (/net, /Network/Servers, or macOS /.vol /.file /.nofollow /.resolve) or kernel magic-link (/proc, /dev/fd) path when delivered via remote managed settings: ${e}`;
  if (!(0, import_chunk_xcgcdx61.jZi)(e, r, { rejectDriveRelative: r === "win32" })) return r === "win32" ? `path must be a drive-qualified (C:\\...) or UNC path in normalized form (no "." or ".." segments, no doubled or trailing separators, no ":" or trailing "."/space in a component, no device-namespace prefix): ${e}` : `path must be in normalized form (no "." or ".." segments, no doubled or trailing separators): ${e}`;
  return null;
}
var al = "bot_protected_tengu_dapper_origami", Ci = new import_chunk_8jsh3ct2.ex();
function AFl(e) {
  return Ci.register(e);
}
function Li() {
  return Ci.read(al, true);
}
var qMr = (0, import_chunk_t57w17k7.de)({ onlyTightens: true, settled: true }, (e) => {
  e.onlyTightens = true, e.settled = true;
});
async function iKt(e, r, o) {
  let g = await e.read([{ key: import_chunk_hkvzj051.at.userSettings(), offset: 0, length: import_chunk_6mfepmbb.Jp + 1 }]);
  if (!g.ok) return { kind: "failing", code: g.error.code, failureClass: "failureClass" in g.error ? g.error.failureClass : void 0 };
  let h = g.value.items[0];
  if (!h.found) return ll(e.hostFiles, r);
  if (h.totalBytes > import_chunk_6mfepmbb.Jp) return { kind: "oversize" };
  let y = (0, import_chunk_ccm69jjy.Je)(h.value), E = (0, import_chunk_73gwqz1r.E3)(h.value), P = o !== void 0 && o.contentHash === y ? o.parsed : (0, import_chunk_6mfepmbb.uT)(E, r);
  return { kind: "seeded", contentHash: y, size: h.totalBytes, parsed: P, text: E };
}
async function ll(e, r) {
  let o;
  try {
    o = await e.stat(import_chunk_w578pjby.yS.home(r));
  } catch (g) {
    return { kind: "failing", code: (0, import_chunk_jv7av99m.d)(g) };
  }
  if (o.ok) return o.value.kind === "absent" ? { kind: "absent" } : { kind: "failing", code: o.value.kind };
  return (0, import_chunk_7n1spq36.Tyn)(o.error) ? { kind: "absent" } : It(o.error);
}
async function dJi(e, r) {
  if (!(0, import_chunk_m15w38ag.ne)()) return;
  let o = e.epoch;
  try {
    let g = await r.read(), h = g.kind === "seeded" ? g.parsed : g.kind === "absent" && r.whenAbsent === "seedAbsence" ? (0, import_chunk_6mfepmbb.Uoe)() : void 0;
    if (h === void 0) {
      (0, import_chunk_w578pjby.t)(`settings: ${r.label} not re-seeded (${pKn(g)}); the file read serves`);
      return;
    }
    if (r.source !== "userSettings" && e.walkReadDiffers(r.path, h)) {
      (0, import_chunk_w578pjby.t)(`settings: ${r.label} not re-seeded (the file read already saw different content this generation); the file read serves`);
      return;
    }
    if (g.kind === "absent") (0, import_chunk_6mfepmbb.kKt)(r.path);
    return e.seedParsedFile(r.path, r.source, h, o) ? e.retainLayer(r.path, h) : void 0;
  } catch (g) {
    (0, import_chunk_w578pjby.t)(`settings: ${r.label} not re-seeded: ${(0, import_chunk_jv7av99m.d)(g)}; the file read serves`, { level: "warn" });
    return;
  }
}
function cJi(e, r) {
  return { source: "userSettings", path: r, read: () => iKt(e, r), label: "user settings", whenAbsent: "seedAbsence" };
}
async function dl(e, r) {
  if (!e.serves("userNamed")) return { kind: "failing", code: import_chunk_7n1spq36.zLs };
  if (!(0, import_chunk_6mfepmbb.qC)(r)) try {
    await (0, import_chunk_w578pjby.EL)((0, import_chunk_w578pjby.le)(), r);
  } catch {
    return { kind: "failing", code: import_chunk_w578pjby.SQe };
  }
  return cl(e, import_chunk_w578pjby.yS.userNamed(r), r);
}
async function ul(e, r, o) {
  let g = await Ni(e, import_chunk_w578pjby.yS.system(r));
  if (g.kind !== "bytes") return g;
  return { kind: "seeded", contentHash: g.contentHash, size: g.size, parsed: o !== void 0 && o.contentHash === g.contentHash ? o.parsed : { ...(0, import_chunk_6mfepmbb.uT)((0, import_chunk_73gwqz1r.E3)(g.bytes), r, true), ...g.owner && { fileOwner: g.owner } } };
}
async function cl(e, r, o) {
  let g = await Ni(e, r);
  if (g.kind !== "bytes") return g;
  return { kind: "seeded", contentHash: g.contentHash, size: g.size, parsed: (0, import_chunk_6mfepmbb.uT)((0, import_chunk_73gwqz1r.E3)(g.bytes), o, false) };
}
async function Ni(e, r) {
  let o = await e.stat(r);
  if (!o.ok) return It(o.error);
  if (o.value.kind === "absent") return { kind: "absent" };
  if (o.value.kind !== "file") return { kind: "failing", code: o.value.kind };
  if (o.value.size > import_chunk_6mfepmbb.Jp) return { kind: "oversize" };
  let g = await e.readBytes(r);
  if (!g.ok) return It(g.error);
  if (!g.value.found) return { kind: "absent" };
  if (g.value.bytes > import_chunk_6mfepmbb.Jp) return { kind: "oversize" };
  return { kind: "bytes", bytes: g.value.value, contentHash: (0, import_chunk_ccm69jjy.Je)(g.value.value), size: g.value.bytes, owner: o.value.uid === void 0 ? void 0 : { uid: o.value.uid, gid: o.value.gid, mode: o.value.mode } };
}
async function RFl(e, r) {
  let o = await e.listFolder(import_chunk_w578pjby.yS.system(r));
  if (!o.ok) {
    if (o.error.code === "Failed" && o.error.telemetryCode === "ENOTDIR") return { kind: "listed", names: [] };
    return It(o.error);
  }
  if (!o.value.found) return { kind: "listed", names: [] };
  return { kind: "listed", names: o.value.entries.filter((g) => (g.kind === "file" || g.kind === "link") && (0, import_chunk_6mfepmbb.Foe)(g.name)).map((g) => g.name).sort() };
}
function pKn(e) {
  if (e.kind !== "failing") return e.kind;
  return e.code === import_chunk_7n1spq36.zLs ? "the backend does not serve this space" : `backend read failed: ${e.code}`;
}
function It(e) {
  return { kind: "failing", code: e.telemetryCode ?? e.code, failureClass: e.failureClass };
}
function uJi(e, r, o, g) {
  return { source: r, path: o, read: () => dl(e.hostFiles, o), label: g, whenAbsent: "seedAbsence" };
}
function fJi(e, r, o, g) {
  return { source: "policySettings", path: r, read: () => ul(e.hostFiles, r, g.managedFileReads.get(r)), label: o, whenAbsent: "fileServes" };
}
async function kMs(e, r, o) {
  return dJi(r, cJi(e, o));
}
class Ki {
  firedSites = /* @__PURE__ */ new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), (0, import_chunk_y53wbr8a.a)("tengu_dead_probe_legacy_local_settings", { site: (0, import_chunk_78g0060s.f)(e) });
  }
  reset() {
    this.firedSites.clear();
  }
}
var O3l = new import_chunk_2904xtvq.j(() => new Ki()), gl = ["EACCES", "EAGAIN", "EBADF", "EBUSY", "ECONNRESET", "EFBIG", "EHOSTDOWN", "EHOSTUNREACH", "EINTR", "EINVAL", "EIO", "EISDIR", "ELOOP", "EMFILE", "ENAMETOOLONG", "ENFILE", "ENODEV", "ENOMEM", "ENOTCONN", "ENOTDIR", "ENOTSUP", "ENXIO", "EOPNOTSUPP", "EOVERFLOW", "EPERM", "ESTALE", "ETIMEDOUT", "UNKNOWN", "ERR_FILE_TOO_LARGE", "ERR_NOT_REGULAR_FILE", "ERR_SYMLINK_TO_NETWORK_PATH"], pl = { userSettings: "user", projectSettings: "project", localSettings: "local" }, Di = 20;
class zi {
  seen = 0;
  count(e, r, o) {
    try {
      if ((0, import_chunk_f9x2f6cx.Y)() || this.seen > Di) return;
      this.seen++;
      let g = this.seen > Di;
      queueMicrotask(() => this.send(e, r, o, g));
    } catch {
    }
  }
  send(e, r, o, g) {
    try {
      let h = e.file ?? "", y = r ? void 0 : import_chunk_xzvhvaa2.tp.find((v) => _n(v) === h) ?? (h === A_() ? "localSettings" : void 0), E = r ? (0, import_path.basename)((0, import_path.dirname)(h)) === "managed-settings.d" ? "managed_dropin" : "managed_file" : y ? pl[y] : "outside", P = gl.find((v) => v === e.errno), b = P === "ERR_SYMLINK_TO_NETWORK_PATH" ? "path_not_vetted" : P?.toLowerCase() ?? "other";
      (0, import_chunk_cqa9hrgx.l)("settings_file_reread", g ? "cap_reached" : `${o ? "first_" : ""}${E}_${b}`);
    } catch {
    }
  }
}
function Sk(e, r, o) {
  return (0, import_chunk_6mfepmbb.EK)(e, (0, import_chunk_r3mm3x33.Br)(), r, o);
}
function L() {
  let e = (0, import_chunk_r3mm3x33.Br)();
  e.failedRereads ??= new zi();
  let r = { store: e, cwd: (0, import_chunk_f9x2f6cx.ns)(), projectConfigDir: (0, import_chunk_f9x2f6cx.us)() ?? void 0, launchsLocalSettingsStoreRoot: (0, import_chunk_f9x2f6cx.yNr)(), allowedSources: (0, import_chunk_f9x2f6cx.wPt)(), diskless: (0, import_chunk_f9x2f6cx.Y)(), onLegacyLocalSettingsRead: (o) => O3l.of((0, import_chunk_f9x2f6cx.N)().host).fire(o), parentManaged: (0, import_chunk_f9x2f6cx._te)(), hostPolicyInForce: (0, import_chunk_f9x2f6cx.ela)(), parentOrganizationSettings: (0, import_chunk_f9x2f6cx.DNr)(), hostManagedProvider: import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST, flagInline: (0, import_chunk_f9x2f6cx.Fd)(), flagPath: (0, import_chunk_f9x2f6cx.wF)(), flagExpectedContent: (0, import_chunk_f9x2f6cx.Av)() ?? (0, import_chunk_f9x2f6cx.Gz)(), flagInlineJson: (0, import_chunk_f9x2f6cx.Av)() !== void 0, coworkPlugins: (0, import_chunk_f9x2f6cx.KNr)(), canonicalGitRoot: CM, mdm: () => Tz(), hkcu: () => KIo(), helper: () => _i(), helperArmedFromRemote: () => SMs(), helperMergesOutput: () => vi(), helperWarnings: () => cut(), wslInherits: () => SB(), helperArmedFromUserWritableBase: () => sKt(), credentialHelperKeysFrom: (o) => I3l(o), launchFolderKeysFrom: (o) => M3l(o), asksOrganization: () => SJe(), policyOnlyServerTier: Vi };
  return r.file = () => (0, import_chunk_6mfepmbb.ice)(r), r;
}
function EMs(e) {
  let r = { ...L(), store: new import_chunk_f9x2f6cx.GEe({ repoTierFreeze: (0, import_chunk_r3mm3x33.Br)().repoTierFreeze }), credentialHelperKeysFrom: () => "none", ...e && { mdm: () => e.mdm, hkcu: () => e.hkcu, wslInherits: () => e.wslInherits } };
  return r.file = () => (0, import_chunk_6mfepmbb.ice)(r), r;
}
function pJi(e, r) {
  return (0, import_chunk_xzvhvaa2.rn)(r) ? bn(r, e) : null;
}
function vMs(e) {
  let r = (0, import_chunk_6mfepmbb.ige)(e), o = (0, import_chunk_6mfepmbb.ice)(e);
  return [...r.errors, ...(0, import_chunk_6mfepmbb.gMo)(e.mdm?.() ?? { settings: null, errors: [] }, () => r, () => o), ...o.errors, ...(0, import_chunk_6mfepmbb.bgn)(e).errors, ...e.hkcu?.().errors ?? []];
}
function TMs(e) {
  let r = (0, import_chunk_6mfepmbb.sHs)({ ...e, helper: void 0 });
  return r === "helper" ? null : r;
}
function CMs(e) {
  if (!yB()) return false;
  if (e !== "policySettings") return true;
  let r = Kb();
  return !(((0, import_chunk_6mfepmbb.ZX)(r) || r === "remote") && Tz().userWritable !== true && !sKt() && ((0, import_chunk_xcgcdx61.Yb)() === null || (0, import_chunk_xcgcdx61.nc)()));
}
function I3l(e) {
  if ((0, import_chunk_j4z7srhg.ec)()) return "none";
  if (e === "policySettings" && Vi() !== void 0 && Kb() === "remote") return "machine_admin";
  if (!yB()) return aut(e) ? "none" : "as_read";
  if (e !== "policySettings") return "none";
  return CMs(e) ? "machine_admin" : "as_read";
}
function M3l(e) {
  if (!aut(e)) return "as_read";
  if (e === "projectSettings" && vm()) return "as_read";
  return Iee(e) && qMr.onlyTightens ? "none_and_only_tightens" : "none";
}
function mKn(e) {
  return (0, import_chunk_6mfepmbb.PKn)(e, L());
}
function mJi() {
  let e = L();
  if (e.cwd === null) return;
  let r = (0, import_chunk_6mfepmbb.tHs)(e.cwd, e.canonicalGitRoot);
  return r.decided === void 0 ? r.root : void 0;
}
function _n(e) {
  return (0, import_chunk_6mfepmbb.vK)(e, L());
}
function QT(e) {
  return (0, import_chunk_6mfepmbb.MKn)(e, L());
}
function EFe(e) {
  return (0, import_chunk_6mfepmbb.hQi)(e, L());
}
function A_() {
  return (0, import_chunk_6mfepmbb.oOe)(L());
}
function vm() {
  let e = _n("projectSettings"), r = _n("userSettings");
  return !!e && !!r && (0, import_path.resolve)(e) === (0, import_path.resolve)(r);
}
function hJi() {
  let e = L(), r = (0, import_chunk_6mfepmbb.vK)("projectSettings", e), o = (0, import_chunk_6mfepmbb.vK)("userSettings", e);
  return r !== void 0 && o !== void 0 && Xi(r, [o]);
}
function aKt() {
  let e = _n("localSettings");
  if (!e) return [];
  return Sk(e).errors;
}
function lKt() {
  return (0, import_chunk_6mfepmbb.ige)(L());
}
function wJe() {
  return (0, import_chunk_6mfepmbb.ice)(L());
}
function YMr() {
  let e = (0, import_chunk_r3mm3x33.Br)();
  if (e.policy.baseNamesHelper === void 0) {
    let r = Cz();
    e.policy.baseNamesHelper = r?.policyHelper != null || r?.policyHelpers != null;
  }
  return e.policy.baseNamesHelper;
}
function gJi() {
  let e = (0, import_chunk_r3mm3x33.Br)();
  return e.policy.managedFileLoadState ??= (0, import_chunk_6mfepmbb.Uee)(wJe()), e.policy.managedFileLoadState;
}
function _Ji() {
  return (0, import_chunk_6mfepmbb.uQi)(L());
}
function sgn(e) {
  return (0, import_chunk_6mfepmbb.fQi)(L(), e);
}
function Vi() {
  if ((0, import_chunk_xcgcdx61.Si)() !== null) return (0, import_chunk_xcgcdx61.nc)() ? "confirmed" : "unconfirmed";
  return;
}
function Doe() {
  return (0, import_chunk_6mfepmbb.cHs)(L());
}
function XPe(e) {
  return oKt() || (0, import_chunk_6mfepmbb.NQi)(L(), e);
}
function yJi() {
  return oKt() || (0, import_chunk_6mfepmbb.FQi)(L());
}
function SJi(e) {
  return (0, import_chunk_6mfepmbb.bMo)(L(), e) === "names_none" && Aw()?.allowedProviders?.includes("anthropic") !== false && !Yi() && Mee() === "unset";
}
function Yi() {
  let { envs: e, apiKeyHelper: r } = SKn();
  return r || e.some((o) => import_chunk_gd77dyw4.lBl.some((g) => o[g]));
}
(0, import_chunk_xcgcdx61.ita)(Yi);
function _e(e) {
  return (0, import_chunk_xzvhvaa2.rn)(e) ? bn(e) : null;
}
function kJe() {
  let r = (0, import_chunk_f9x2f6cx.Av)() ?? (0, import_chunk_f9x2f6cx.Gz)();
  if (!r?.includes("blockFileToolReadsOutsideWorkingDirectories") && !r?.includes("\\u")) return false;
  let o = (0, import_chunk_0jve1fep.et)(r, false);
  return (0, import_chunk_ma3kja9f.T)(o) && (0, import_chunk_ma3kja9f.T)(o.permissions) && o.permissions.blockFileToolReadsOutsideWorkingDirectories === true;
}
function vl(e) {
  return Ji(e);
}
function pd(e) {
  let r = Ji(e);
  if (r === null || !Iee(e)) return r;
  let o = L(), g = (0, import_chunk_6mfepmbb.vHr)(e, o);
  return g && (0, import_chunk_6mfepmbb.lHs)(e, g, o);
}
function Ji(e) {
  return _e(e) ?? ((0, import_chunk_xzvhvaa2.rn)(e) ? null : bn(e));
}
function bn(e, r) {
  if ((0, import_chunk_f9x2f6cx.JA)() && import_chunk_xzvhvaa2.yp.has(e)) return null;
  if ((e === "userSettings" || import_chunk_xzvhvaa2.yp.has(e)) && (0, import_chunk_6e68m1dj.uL)()) return null;
  if (r !== void 0) return (0, import_chunk_6mfepmbb.FRt)(e, r);
  let o = (0, import_chunk_6mfepmbb.rHs)(e, (0, import_chunk_r3mm3x33.Br)());
  return o !== void 0 ? o : (0, import_chunk_6mfepmbb.FRt)(e, L());
}
function vFe() {
  let e = (0, import_chunk_r3mm3x33.Br)().policy.pairedModelOverrides;
  return e !== void 0 ? e.value : (0, import_chunk_6mfepmbb.gQi)(L());
}
function bJi() {
  return (0, import_chunk_6mfepmbb._Qi)(L());
}
function wJi() {
  return (0, import_chunk_6mfepmbb.yQi)(L());
}
function kJi() {
  let e = (0, import_chunk_r3mm3x33.Br)().policy.hostToolSearchEnv;
  if (e !== void 0) return e.value;
  return (0, import_chunk_6mfepmbb.SQi)(L());
}
function sL(e) {
  return (0, import_chunk_6mfepmbb.vHr)(e, L(), { includeLegacyLocalSettings: false });
}
var H3l = 5e3;
function uut(e = H3l) {
  return (0, import_chunk_5appeerh.me)((0, import_chunk_r3mm3x33.Br)().backgroundWorkTail, e).then(() => {
    return;
  });
}
var D3l = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Map());
function XMr(e) {
  let r = L(), o = [(0, import_chunk_6mfepmbb.vK)(e, r), ...e === "localSettings" ? [(0, import_chunk_6mfepmbb.oOe)(r)] : []].filter((k) => k !== void 0), g = D3l.of((0, import_chunk_f9x2f6cx.N)().host), h = o.map((k) => ({ file: k, ...(0, import_chunk_6mfepmbb.Kze)(k, g, e === "userSettings") })), y = h.filter(({ settings: k, errors: F }) => k === null && F.some((O) => O.severity !== "warning")), [E, P] = h.map(({ file: k, settings: F, textRead: O }) => F ?? (O === void 0 ? (0, import_chunk_w578pjby.Ka)(g.get(k)?.parsed.settings ?? null) : null)), b = P === null || P === void 0 ? E ?? null : (0, import_chunk_6mfepmbb.xM)({}, P, E ?? {}, import_chunk_6mfepmbb.eJ);
  if (y.length === 0) return { kind: "in_effect", settings: b };
  let v = y.flatMap(({ textRead: k }) => k ?? []);
  if (v.length === y.length) return { kind: "some_do_not_load", texts: v, settingsOfTheOtherFile: b };
  return y.every(({ file: k, textRead: F }) => F !== void 0 || g.has(k)) ? { kind: "unreadable_for_now", settingsAsLastRead: b } : { kind: "unreadable", settingsOfTheOtherFile: b };
}
var Ze;
function rt() {
  let e = L(), r = Ze;
  if (r === void 0) return e;
  let o = e.canonicalGitRoot;
  return { ...e, cwd: r.cwd, projectConfigDir: r.projectConfigDir, launchsLocalSettingsStoreRoot: r.launchsLocalSettingsStoreRoot, canonicalGitRoot: (g) => g === r.cwd ? r.canonicalRoot : o?.(g) ?? null };
}
function hKn(e) {
  let r = (0, import_chunk_w578pjby.le)();
  try {
    let o = (0, import_chunk_w578pjby.RD)(r, e, { failClosed: true }).linksResolvedPath;
    if (o === void 0) {
      for (let E of [(0, import_path.dirname)(e), e]) try {
        if (r.lstatSync(E).isSymbolicLink()) return true;
      } catch (P) {
        if (!(0, import_chunk_jv7av99m.J)(P)) return true;
      }
      return sEe(e) !== "absent";
    }
    let g = (0, import_chunk_w578pjby.RD)(r, (0, import_path.dirname)((0, import_path.dirname)(e)), { failClosed: true }), h = (0, import_path.join)(g.linksResolvedPath ?? g.resolvedPath, (0, import_path.basename)((0, import_path.dirname)(e)), (0, import_path.basename)(e));
    if (!bv(o, h)) return true;
    let y = r.lstatSync(o);
    return !y.isFile() || y.nlink > 1;
  } catch {
    return true;
  }
}
function ml(e, r) {
  let o = (0, import_chunk_6mfepmbb.vK)("userSettings", r), g = [...o ? [o] : [], ...(0, import_chunk_6mfepmbb.lEe)().flatMap((h) => Object.values(import_chunk_6mfepmbb.YR).map((y) => (0, import_path.join)(h, y)))];
  return Xi(e, g);
}
function Xi(e, r) {
  let o = (0, import_chunk_w578pjby.le)(), g = [(0, import_path.resolve)(e)];
  try {
    let y = (0, import_chunk_w578pjby.RD)(o, e);
    g.push(y.linksResolvedPath ?? y.resolvedPath);
  } catch {
  }
  let h = (0, import_chunk_cg8dqz0a.x)() === "macos";
  return r.some((y) => [(0, import_path.resolve)(y), (0, import_chunk_w578pjby.no)(o, y).resolvedPath].some((E) => g.some((P) => bv(P, E) || h && ah(P).toLowerCase() === ah(E).toLowerCase())));
}
function EJi(e) {
  let r = EJe(e) ? rt() : L();
  return { file: (0, import_chunk_6mfepmbb.vK)(e, r), second: e === "localSettings" ? (0, import_chunk_6mfepmbb.oOe)(r) : void 0 };
}
function fut() {
  let e = rt(), r = (0, import_chunk_6mfepmbb.vK)("projectSettings", e), o = { project: r && !ml(r, e) ? r : null, local: (0, import_chunk_6mfepmbb.vK)("localSettings", e) ?? null, legacy: (0, import_chunk_6mfepmbb.oOe)(e) ?? null };
  return { key: `${e.cwd ?? ""}\0${e.projectConfigDir ?? ""}`, ...o, linkedAway: ["project", "local", "legacy"].filter((g) => {
    let h = o[g];
    return h !== null && hKn(h);
  }) };
}
function sEe(e) {
  let r = /* @__PURE__ */ new Map(), o = (0, import_chunk_6mfepmbb.Kze)(e, r), g = r.get(e);
  if (g !== void 0) return { text: g.content };
  return o.errors.some((h) => h.severity !== "warning") ? "unreadable" : "absent";
}
function put(e = /* @__PURE__ */ new Map(), r = []) {
  let o = new import_chunk_f9x2f6cx.GEe();
  for (let [y, E] of e) o.parsedFiles.set(y, E);
  let g = { ...rt(), store: o }, h = /* @__PURE__ */ new Map();
  for (let y of [...r, ...import_chunk_xzvhvaa2.WA]) {
    if (y === "projectSettings" && (() => {
      let P = (0, import_chunk_6mfepmbb.vK)(y, g), b = (0, import_chunk_6mfepmbb.vK)("userSettings", g);
      return !!P && !!b && bv((0, import_path.resolve)(P), (0, import_path.resolve)(b));
    })()) {
      let P = h.get("userSettings");
      if (P !== void 0) h.set(y, P);
      continue;
    }
    let E = y === "localSettings" ? (0, import_chunk_6mfepmbb.oOe)(g) : void 0;
    h.set(y, { settings: (0, import_chunk_6mfepmbb.FRt)(y, g), errors: (0, import_chunk_6mfepmbb.MKn)(y, g), unfiltered: (0, import_chunk_6mfepmbb.vHr)(y, g), ...y === "localSettings" && { legacy: E === void 0 ? null : (0, import_chunk_6mfepmbb.EK)(E, o).settings ?? null } });
  }
  return h;
}
var xt;
function JMr(e) {
  let r = (0, import_chunk_r3mm3x33.Br)(), o = !r.repoTierFreeze.isHeld(), g = L();
  if (o) Ze = { cwd: g.cwd, projectConfigDir: g.projectConfigDir, launchsLocalSettingsStoreRoot: g.launchsLocalSettingsStoreRoot, canonicalRoot: g.cwd === null ? null : g.canonicalGitRoot?.(g.cwd) ?? null };
  let h;
  try {
    h = e === void 0 ? r.repoTierFreeze.engage(put) : r.repoTierFreeze.engage(() => put(e.files, e.also), () => put(void 0, e.also));
  } catch (y) {
    if (o) Ze = void 0;
    throw y;
  }
  if (o) xt = e?.onOwnWrite;
  try {
    r.invalidateAll();
  } catch (y) {
    if (h.abandon(), !r.repoTierFreeze.isHeld()) Ze = void 0, xt = void 0;
    throw y;
  }
  return { began: o, release: () => {
    let y = h.release();
    if (y.last) Ze = void 0, xt = void 0, r.invalidateAll();
    return y;
  }, replace: (y) => r.repoTierFreeze.replace(() => put(y, e?.also)) };
}
function JIo(e) {
  return put(e);
}
function vJi() {
  let e = rt();
  return `${e.cwd ?? ""}\0${e.projectConfigDir ?? ""}`;
}
function TJi(e, r) {
  let o = (0, import_chunk_r3mm3x33.Br)();
  if (o.repoTierFreeze.isHeld()) return;
  o.repoTierFreeze.linger(e, r), o.invalidateAll();
}
function CJi() {
  return (0, import_chunk_r3mm3x33.Br)().repoTierFreeze.differingTiers(put()).length === 0 ? "same" : "changed";
}
function hl(e) {
  let r = (0, import_chunk_r3mm3x33.Br)().repoTierFreeze, o = import_chunk_xzvhvaa2.yp.has(e) && r.isHeld() && r.baselineTier(e) !== void 0, g = false, h = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), E = (P) => {
    try {
      return (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), P).resolvedPath;
    } catch {
      return P;
    }
  };
  return { before: (P, b, v) => {
    let k = o ? r.baselineTier(e) : void 0;
    if (k === void 0) return;
    let F = rt(), O = e === "localSettings" ? (0, import_chunk_6mfepmbb.oOe)(F) : void 0, I = O === void 0 ? void 0 : (0, import_chunk_6mfepmbb.EK)(O, new import_chunk_f9x2f6cx.GEe());
    if (O !== void 0 && I !== void 0) h.set(O, I), y.set(O, E(O));
    let H = (0, import_chunk_6mfepmbb.vK)(e, F);
    if (H !== v) {
      g = true;
      return;
    }
    let G = H === void 0 ? void 0 : (0, import_chunk_6mfepmbb.EK)(H, new import_chunk_f9x2f6cx.GEe());
    if (H !== void 0 && G !== void 0) h.set(H, G), y.set(H, E(H));
    let z = P === null ? null : (0, import_chunk_6mfepmbb.uT)((0, import_chunk_w578pjby._)(P), (0, import_chunk_6mfepmbb.vK)(e, F) ?? ""), W = z?.settings ?? null, V = I?.settings ? (0, import_chunk_6mfepmbb.xM)((0, import_chunk_w578pjby.Ka)(I.settings), W ?? {}, import_chunk_6mfepmbb.eJ) : W, oe = [...z?.errors ?? [], ...I?.errors ?? []], te = (re) => {
      let X = re && (0, import_chunk_0jve1fep.et)((0, import_chunk_w578pjby._)(re), false);
      return typeof X === "object" ? (0, import_chunk_f9x2f6cx.c3n)(X) : X;
    }, Q = r.differingTiers(put(h)).includes(e), Z = (re) => re.filter((X) => X.file === O || (b || X.preserveOnWrite) && !("alias" in X));
    g = Q || !(0, import_chunk_f9x2f6cx.bp)(te(V), te(k.unfiltered)) || !(0, import_chunk_f9x2f6cx.bp)(Z(oe), Z(k.errors)) || !(0, import_chunk_f9x2f6cx.bp)(te(G?.settings ?? null), te(W));
  }, noteRead: ({ path: P, content: b }) => {
    let v = h.get(P), k = (0, import_chunk_6mfepmbb.uT)(b, P);
    if (o && (v === void 0 || !(0, import_chunk_f9x2f6cx.bp)((0, import_chunk_f9x2f6cx.c3n)(k.settings), (0, import_chunk_f9x2f6cx.c3n)(v.settings)) || !(0, import_chunk_f9x2f6cx.bp)(k.errors, v.errors))) g = true;
  }, after: ({ path: P, content: b }) => {
    let v = (0, import_chunk_6mfepmbb.uT)(b, P), k = y.get(P);
    h.set(P, v);
    for (let F of h.keys()) if (F !== P && k !== void 0 && y.get(F) === k) h.set(F, v);
    if (o && !g && r.isHeld()) {
      r.rebaseline(put(h), [e]);
      try {
        xt?.(P, b);
      } catch (F) {
        (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(F));
      }
    }
  } };
}
function AJi(e) {
  let r = (0, import_chunk_r3mm3x33.Br)();
  if (!r.repoTierFreeze.isHeld()) return e();
  try {
    return r.repoTierFreeze.whileLive(e);
  } finally {
    r.invalidateAll();
  }
}
function ign() {
  return (0, import_chunk_r3mm3x33.Br)().repoTierFreeze.isHeld();
}
function EJe(e) {
  return (0, import_chunk_r3mm3x33.Br)().repoTierFreeze.tier(e) !== void 0;
}
function gnd() {
  let e = L();
  if (!(0, import_chunk_ma3kja9f.T)(e.flagInline)) return false;
  if (!Lt(e.flagInline)) return false;
  return (0, import_chunk_6mfepmbb.wgn)(e).settings === null;
}
function vJe(e) {
  let r = L();
  if (!(0, import_chunk_ma3kja9f.T)(r.flagInline) || !(e in r.flagInline)) return false;
  return (0, import_chunk_6mfepmbb.wgn)(r).settings === null;
}
function TJe() {
  return (0, import_chunk_6mfepmbb.PQi)(L());
}
function RJi() {
  return (0, import_chunk_f9x2f6cx.EJ)() ? false : (0, import_chunk_6mfepmbb.OQi)(L());
}
function gKn() {
  return (0, import_chunk_6mfepmbb.bgn)(L()).settings;
}
function xJi() {
  return (0, import_chunk_6mfepmbb.eHs)(L())?.settings?.allowManagedHooksOnly === true;
}
function dKt() {
  return (0, import_chunk_6mfepmbb.TK)(L());
}
function QMr() {
  return (0, import_chunk_6mfepmbb.iHs)(L());
}
function PJi() {
  return (0, import_chunk_6mfepmbb.oF)(L()).shadowedHelperSources;
}
function Lt(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return false;
  let r = e.attribution;
  return "includeCoAuthoredBy" in e || r === false || (0, import_chunk_ma3kja9f.T)(r) && ("commitTrailers" in r || "commit" in r || "pr" in r);
}
function _nd() {
  let e = L(), r = (0, import_chunk_6mfepmbb.vK)("flagSettings", e);
  if (!r) return false;
  if ((0, import_chunk_6mfepmbb.EK)(r, e.store, e.flagExpectedContent).settings !== null) return false;
  if (e.flagExpectedContent !== void 0) {
    let o = (0, import_chunk_0jve1fep.et)(e.flagExpectedContent, false);
    if (!(0, import_chunk_ma3kja9f.T)(o)) return true;
    return Lt(o);
  }
  return Rn(r);
}
function OJi() {
  let e = L(), r = e.flagExpectedContent, o = (0, import_chunk_6mfepmbb.vK)("flagSettings", e);
  if (!o || r === void 0) return;
  let g = (0, import_chunk_0jve1fep.et)(r, false), h = (0, import_chunk_ma3kja9f.T)(g) ? g.sandbox : /(?<![\w-])sandbox["']?\s*:/.test(r) || void 0, y = (0, import_chunk_ma3kja9f.T)(h) ? h.enabled : h;
  if (h === void 0 || h === null || y === false) return;
  let { settings: E, errors: P } = (0, import_chunk_6mfepmbb.EK)(o, e.store, r);
  if (E !== null) return;
  let b = P.find((v) => v.severity !== "warning");
  return { turnsSandboxOn: y !== void 0 && y !== null, allowsUnsandboxed: (0, import_chunk_ma3kja9f.T)(h) && h.failIfUnavailable === false, firstError: b && [b.path, b.message].filter(Boolean).join(": ") };
}
function Rn(e, r = false) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return false;
  let o;
  try {
    let g = r || (0, import_chunk_6mfepmbb.qC)(e) ? (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e) : (0, import_chunk_w578pjby.RD)((0, import_chunk_w578pjby.le)(), e);
    o = (0, import_chunk_0jve1fep.et)((0, import_chunk_73gwqz1r.RB)(g.resolvedPath, import_chunk_6mfepmbb.Jp), false);
  } catch (g) {
    if ((0, import_chunk_jv7av99m.J)(g)) return false;
    return true;
  }
  if (!(0, import_chunk_ma3kja9f.T)(o)) return true;
  return Lt(o);
}
function ynd(e, r) {
  let o = L(), g = (P) => P.settings === null && P.errors.some((b) => b.severity !== "warning");
  if (e === "flagSettings" && o.flagInline && r in o.flagInline) {
    let P = (0, import_chunk_6mfepmbb.wgn)(o);
    if (g(P)) return o.flagInline[r];
    if (P.settings?.[r] !== void 0) return;
  }
  let h = (0, import_chunk_6mfepmbb.vK)(e, o);
  if (!h) return;
  let y = e === "flagSettings" ? o.flagExpectedContent : void 0;
  if (!g((0, import_chunk_6mfepmbb.EK)(h, o.store, y))) return;
  if (y === void 0 && o.diskless) return;
  let E;
  try {
    if (y !== void 0) E = (0, import_chunk_0jve1fep.et)(y, false);
    else {
      let { resolvedPath: P } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), h);
      E = (0, import_chunk_0jve1fep.et)((0, import_chunk_73gwqz1r.RB)(P, import_chunk_6mfepmbb.Jp), false);
    }
  } catch {
    return;
  }
  if (!(0, import_chunk_ma3kja9f.T)(E) || !(r in E)) return;
  return E[r];
}
async function Snd(e, r) {
  let o = L(), g = (0, import_chunk_6mfepmbb.vK)(e, o);
  if (!g) return false;
  let h = (0, import_chunk_6mfepmbb.EK)(g, o.store);
  if (h.settings !== null) return false;
  if (h.errors.length === 0) return false;
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0 && Mt(e, g)) {
    let y;
    try {
      y = await kn(r);
    } catch {
      return true;
    }
    switch (y.kind) {
      case "absent":
        return false;
      case "object":
        return Lt(y.raw);
      default:
        return true;
    }
  }
  return Rn(g, e === "userSettings");
}
function Mt(e, r) {
  return e === "userSettings" && (0, import_path.basename)(r) === import_chunk_6mfepmbb.YR.default;
}
async function kn(e) {
  let r = await e.read([import_chunk_hkvzj051.at.userSettings()]);
  if (!r.ok) return { kind: "unreadable", code: r.error.code };
  let o = r.value.items[0];
  if (!o.found) return { kind: "absent" };
  if (o.totalBytes > import_chunk_6mfepmbb.Jp) return { kind: "oversize" };
  let g = (0, import_chunk_73gwqz1r.E3)(o.value);
  if (!g.trim()) return { kind: "empty" };
  let h = (0, import_chunk_0jve1fep.et)(g, false);
  if (!(0, import_chunk_ma3kja9f.T)(h)) return { kind: "non-object" };
  return { kind: "object", raw: h, content: g };
}
function bnd() {
  let e = L(), r = (0, import_chunk_6mfepmbb.oOe)(e);
  if (!r) return false;
  let o = (0, import_chunk_6mfepmbb.EK)(r, e.store);
  if (o.settings !== null) return false;
  if (o.errors.length === 0) return false;
  return Rn(r);
}
function _Kn() {
  let e = L(), r = e.store.repoTierFreeze.tier("localSettings");
  if (r?.legacy !== void 0) return r.legacy;
  let o = (0, import_chunk_6mfepmbb.oOe)(e);
  if (!o) return null;
  return (0, import_chunk_6mfepmbb.EK)(o, e.store).settings ?? null;
}
function Rp() {
  return (0, import_chunk_r3mm3x33.Br)().policy.allTiers ?? (0, import_chunk_6mfepmbb.kHr)(L());
}
function ZMr() {
  try {
    if (oKt()) return true;
    let e = (0, import_chunk_r3mm3x33.Br)();
    return e.policy.machineMayPinSignInOrg ??= (0, import_chunk_6mfepmbb.LQi)(L()), e.policy.machineMayPinSignInOrg;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`machineAdminMayPinSignInOrg: the machine policy read threw: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), true;
  }
}
function IJi() {
  try {
    return Aw()?.forceLoginOrgUUID !== void 0;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`machineAdminPinsSignInOrg: the machine policy read threw: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), false;
  }
}
function Mee() {
  {
    if (oKt()) return "unreadable";
    let e = Zde()?.enforceAnthropicSignIn;
    if (e === true) return "set";
    let r = (0, import_chunk_6mfepmbb.SMo)(L());
    if (e !== void 0 && e !== false || r.some((o) => o.path === "enforceAnthropicSignIn")) return "unreadable";
    if (tF()) return e === void 0 ? "unloaded" : "unreadable";
  }
  return "unset";
}
function MJi() {
  return (0, import_chunk_6mfepmbb.CQi)(L()).find((e) => e.errorClass === "unreadable" && !y8(e));
}
function Aw() {
  return (0, import_chunk_6mfepmbb.Cut)(L());
}
function Zde() {
  return (0, import_chunk_6mfepmbb.DQi)(L());
}
function c3() {
  return (0, import_chunk_6mfepmbb.UQi)(L());
}
function yKn() {
  return (0, import_chunk_6mfepmbb.wMo)(L());
}
function eHr() {
  return (0, import_chunk_6mfepmbb.vQi)(L());
}
function ece() {
  return (0, import_chunk_6mfepmbb.TQi)(L());
}
function HJi() {
  return QPe((0, import_chunk_6mfepmbb.SMo)(L()));
}
function e$() {
  return (0, import_chunk_6mfepmbb.aHs)(L());
}
function Hee(e) {
  let r = (0, import_chunk_r3mm3x33.Br)().policy.adminTierEnvView;
  if (r !== void 0) return r[e];
  return (0, import_chunk_6mfepmbb.BQi)(L(), e);
}
function DJi() {
  return (0, import_chunk_r3mm3x33.Br)().lastPolicyEnvComposition;
}
function kK() {
  return (0, import_chunk_r3mm3x33.Br)().policy.durableTiers ?? (0, import_chunk_6mfepmbb.MQi)(L());
}
function PRt() {
  return (0, import_chunk_r3mm3x33.Br)().policy.adminTiers ?? (0, import_chunk_6mfepmbb.AQi)(L());
}
function ege() {
  return (0, import_chunk_6mfepmbb.HQi)(L());
}
function cKt() {
  return { slot: _e("policySettings"), adminTiers: PRt() };
}
function LJi() {
  return (0, import_chunk_6mfepmbb.xQi)(L());
}
function NJi(e) {
  let r = cKt(), o = (0, import_chunk_6mfepmbb.xJe)(r);
  return { mcpLockFromLowerSource: o && r.slot?.allowManagedMcpServersOnly !== true, mcpAllowlistFromLowerSource: o && r.slot?.allowedMcpServers === void 0 && (0, import_chunk_6mfepmbb.wut)(r) !== void 0, mcpShadowedSourceCount: e.length, mcpShadowedKeyCount: e.reduce((g, { keys: h }) => g + h.length, 0) };
}
function vt() {
  return _p().settings || {};
}
var zr = vt;
function AMs() {
  (0, import_chunk_r3mm3x33.pr)();
  let e = [];
  for (let r of (0, import_chunk_xzvhvaa2.Ko)()) {
    let o = _e(r);
    if (o && Object.keys(o).length > 0) e.push({ source: r, settings: o });
  }
  return { effective: vt(), sources: e };
}
function kv(e) {
  let r = (0, import_chunk_xzvhvaa2.Ko)();
  for (let o = r.length - 1; o >= 0; o--) {
    let g = r[o];
    if (_e(g)?.[e] !== void 0) return g;
  }
  return null;
}
function _p() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.mergedSettings;
  if (r !== null) return r;
  (0, import_chunk_k5jn5rx9.ts)("loadSettingsFromDisk_start");
  let o = (0, import_chunk_6mfepmbb.uHs)(L());
  return (0, import_chunk_k5jn5rx9.ts)("loadSettingsFromDisk_end"), e.mergedSettings = o, o;
}
function FJi() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { hasBase: false, hasDropIns: false };
  for (let e of (0, import_chunk_6mfepmbb.sge)(SB())) {
    let r = (0, import_chunk_6mfepmbb.$Rt)(Sk((0, import_path.join)(e, "managed-settings.json"), void 0, true)), o = false;
    try {
      let g = (0, import_path.join)(e, "managed-settings.d"), h = (E) => (0, import_chunk_6mfepmbb.$Rt)(Sk((0, import_path.join)(g, E), void 0, true)), y = (0, import_chunk_r3mm3x33.Br)().primedFolderListing(g);
      if (y !== void 0) o = y.some(h);
      else o = (0, import_chunk_w578pjby.le)().readdirSync(g).some((E) => {
        if (!(E.isFile() || E.isSymbolicLink()) || !(0, import_chunk_6mfepmbb.Foe)(E.name)) return false;
        return h(E.name);
      });
    } catch {
    }
    if (r || o) return { hasBase: r, hasDropIns: o };
  }
  return { hasBase: false, hasDropIns: false };
}
function Cz() {
  let e = { ...L(), helper: void 0 }, { present: r, heldEmpty: o } = (0, import_chunk_6mfepmbb.oF)(e);
  if (o) return {};
  if (r.remote) return (0, import_chunk_6mfepmbb.ige)(e).settings;
  if (r.mdm) return Tz().settings;
  if (r.file) return wJe().settings;
  let { settings: g } = (0, import_chunk_6mfepmbb.bgn)(e);
  if (g) return g;
  let h = KIo();
  return Object.keys(h.settings).length > 0 ? h.settings : null;
}
function Dee() {
  return TMs(L());
}
function tHr() {
  let e = Cz();
  return (0, import_chunk_6mfepmbb.ZX)(Dee()) && (e?.policyHelpers != null || e?.policyHelper != null);
}
function uKt() {
  return (0, import_chunk_6mfepmbb.IQi)(L());
}
function Kb() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.origin;
  if (r !== void 0) return r.value;
  let o = (0, import_chunk_6mfepmbb.sHs)(L());
  return e.policy.origin = { value: o }, o;
}
function Loe() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = (0, import_chunk_xcgcdx61.nc)(), o = e.policy.vouchedTiers;
  if (o !== void 0 && o.remoteVerified === r) return o.value;
  let g = (0, import_chunk_6mfepmbb.RQi)(L(), r);
  return e.policy.vouchedTiers = { remoteVerified: r, value: g }, g;
}
function KR() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = (0, import_chunk_xcgcdx61.nc)(), o = e.policy.vouchedAdminTier;
  if (o !== void 0 && o.remoteVerified === r) return o.value;
  let g = (0, import_chunk_6mfepmbb.$Qi)(L(), r);
  return e.policy.vouchedAdminTier = { remoteVerified: r, value: g }, g;
}
function JPe() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.hostLoginPins;
  if (r !== void 0) return r.value;
  let o = (0, import_chunk_6mfepmbb.bQi)(L());
  return e.policy.hostLoginPins = { value: o }, o;
}
function SKn() {
  if (oKt()) return { envs: [], apiKeyHelper: false, unread: true };
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.machineCredentialInputs;
  if (r !== void 0) return r;
  let o = L(), g = (0, import_chunk_6mfepmbb.ice)(o);
  o.file = () => g;
  let h = (0, import_chunk_6mfepmbb.wMo)(o), y = { envs: h.flatMap((E) => Object.entries(E.env ?? {}).map(([P, b]) => ({ [P.toUpperCase()]: b }))), apiKeyHelper: h.some((E) => E.apiKeyHelper !== void 0), unread: (0, import_chunk_6mfepmbb.EHr)(o) };
  return e.policy.machineCredentialInputs = y, y;
}
function $Ji() {
  if (oKt()) return;
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.managedFilesApiKeyHelper;
  if (r !== void 0) return r.value;
  let o = (0, import_chunk_6mfepmbb.cQi)(L());
  return e.policy.managedFilesApiKeyHelper = { value: o }, o;
}
function nHr() {
  return (0, import_chunk_6mfepmbb.wQi)(L());
}
function rHr() {
  return (0, import_chunk_6mfepmbb.kQi)(L());
}
function _8() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.slotAdminOrParentComposed;
  if (r !== void 0) return r;
  let o = (0, import_chunk_6mfepmbb.EQi)(L());
  return e.policy.slotAdminOrParentComposed = o, o;
}
function UJi() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.adminRetentionGoverned;
  if (r !== void 0) return r;
  let g = [(0, import_chunk_6mfepmbb.ige)(L()).settings, Tz().settings, (0, import_chunk_6mfepmbb.ice)(L()).settings].some((h) => h?.cleanupPeriodDays !== void 0);
  return e.policy.adminRetentionGoverned = g, g;
}
function Rw() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.loadErrors;
  if (r !== void 0) return r;
  let o = vMs(L());
  return e.policy.loadErrors = o, o;
}
function yl() {
  if (RRt() !== null) return Qt().mdm;
  return Tz();
}
function Sl() {
  return (0, import_chunk_6mfepmbb.gMo)(Tz(), () => (0, import_chunk_6mfepmbb.ige)(L()), wJe);
}
function tce() {
  return [...Tz().errors, ...wJe().errors];
}
function QIo(e) {
  return Rw().some((r) => {
    if (r.userWritable || r.wslIgnored || r.file === import_chunk_6mfepmbb.$oe) return false;
    if (r.path === "") return true;
    return r.path === e && !r.statusOnly;
  });
}
function qi() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.adminLoadErrors;
  if (r !== void 0) return r;
  let o = [];
  return o.push(...(0, import_chunk_6mfepmbb.ige)(L()).errors), o.push(...Sl()), o.push(...wJe().errors), e.policy.adminLoadErrors = o, o;
}
function ZIo() {
  return qi().some((e) => e.userWritable !== true && e.wslIgnored !== true);
}
function BJi() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.machinePluginKeyLoadRecords;
  if (r !== void 0) return r;
  let o = tce().some((g) => g.userWritable !== true && g.wslIgnored !== true && (g.severity !== "warning" || wl.includes((0, import_chunk_7cfjrnwy.nt)((0, import_chunk_7cfjrnwy.nt)(g.path, "."), "["))));
  return e.policy.machinePluginKeyLoadRecords = o, o;
}
var wl = ["", "enabledPlugins", "extraKnownMarketplaces", "strictKnownMarketplaces", "prependPlugins", "appendPlugins", "policyHelper", "policyHelpers", ...import_chunk_xcgcdx61.$Je.map((e) => e.alias)];
function bI() {
  return QPe(qi());
}
function QPe(e) {
  return e.length === 0 ? [] : e.filter((r) => r.severity !== "warning");
}
function agn() {
  let e = (0, import_chunk_r3mm3x33.Br)(), r = e.policy.adminSurvivor;
  if (r !== void 0) return r;
  let o = L(), g = (0, import_chunk_6mfepmbb.TK)(o), h = yl(), y = g.composes === "tier" && !sKt() && !h.userWritable || (0, import_chunk_6mfepmbb.$ee)((0, import_chunk_6mfepmbb.ige)(o)) || !h.userWritable && (0, import_chunk_6mfepmbb.$ee)(Tz()) && ((0, import_chunk_6mfepmbb.$ee)(h) || QPe(h.errors).length === 0);
  if (!y) {
    let E = wJe();
    y = E.heldOnly !== true && (0, import_chunk_6mfepmbb.$ee)(E);
  }
  return e.policy.adminSurvivor = y, y;
}
function ZPe() {
  return !agn() && bI().length > 0;
}
var El = /* @__PURE__ */ new Set(["EACCES", "EPERM"]);
function y8(e) {
  return e.errorClass === "unreadable" && e.errno !== void 0 && El.has(e.errno);
}
function tF() {
  if (agn()) return false;
  let e = bI();
  return e.length > 0 && e.some((r) => !y8(r));
}
function WJi() {
  let e = Rw(), r = cut().filter((y) => !(0, import_chunk_6mfepmbb.Eut)(y.path));
  if (e.length === 0 && r.length === 0) return;
  let o = e.some((y) => y.severity !== "warning"), g = e.some(import_chunk_6mfepmbb.rF), h = [];
  if (e.length > 0) {
    let y = g ? "Managed settings failed to load; policies from the failed source are NOT in effect:" : o ? "Managed settings contain invalid entries, including PreToolUse/PermissionRequest hooks that are NOT loaded; fix or remove each entry:" : "Managed settings contain invalid entries (remaining valid policies are still enforced):";
    h.push(`${y}
${e.map(Hi).join(`
`)}`);
  }
  if (r.length > 0) h.push(`Managed settings notices:
${r.map(Hi).join(`
`)}`);
  if (process.stderr.write(`${h.join(`
`)}
`), e.length === 0) return;
  (0, import_chunk_y53wbr8a.a)("tengu_managed_settings_validation_errors", { error_count: e.length, remote_error_count: (0, import_chunk_4smdap7r.U)(e, (y) => y.file === "remote managed settings"), fatal: o });
}
function Qi() {
  return Rw(), [...(0, import_chunk_r3mm3x33.Br)().managedDocumentLinks.all(), ...Tz().managedDocumentLinks ?? []];
}
function oHr() {
  return Qi().flatMap((e) => {
    let r = (0, import_chunk_6mfepmbb.LFl)(e);
    return r === null ? [] : [r];
  });
}
function Pl() {
  return Rw(), (0, import_chunk_r3mm3x33.Br)().managedFileProtections.all();
}
function jJi() {
  let e = new Set(Pl().map(([, o]) => o)), r = import_chunk_f9x2f6cx.IWl.find((o) => e.has(o));
  if (r === void 0) return;
  return { protection: r, setsOrgPin: (0, import_chunk_r3mm3x33.Br)().managedFileProtections.setsOrgPin };
}
function GJi() {
  let e = Qi().map((r) => r.link);
  if (e.length === 0) return;
  (0, import_chunk_y53wbr8a.a)("tengu_managed_settings_links", { inside_count: (0, import_chunk_4smdap7r.U)(e, (r) => r.kind === "inside"), outside_count: (0, import_chunk_4smdap7r.U)(e, (r) => r.kind === "outside"), unverified_count: (0, import_chunk_4smdap7r.U)(e, (r) => r.kind === "unverified"), outside_writable_count: (0, import_chunk_4smdap7r.U)(e, (r) => r.kind === "outside" && r.targetWritable === "yes"), outside_writable_unknown_count: (0, import_chunk_4smdap7r.U)(e, (r) => r.kind === "outside" && r.targetWritable === "unknown") });
}
function Hi(e) {
  return `  ${e.file === void 0 ? "managed settings" : (0, import_chunk_7cfjrnwy.el)(e.file)}${e.path ? ` (${e.path})` : ""}: ${e.message}`;
}
function Mr(e, r, o, g) {
  return fl(e, () => r, o, g);
}
function fl(e, r, o, g) {
  if (e === "policySettings" || e === "flagSettings") return Promise.resolve({ error: null });
  let h = _n(e);
  if (!h) {
    if ((0, import_chunk_f9x2f6cx.ns)() === null) return Promise.resolve({ error: new import_chunk_f9x2f6cx.$B() });
    if (!(0, import_chunk_f9x2f6cx.Y)() && (e === "projectSettings" || e === "localSettings") && (0, import_chunk_6mfepmbb.oge)(mKn(e))) return Promise.resolve({ error: Error("Settings aren't saved here: this folder is in a connector-downloads folder, where Claude Code saves files from claude.ai connectors, and Claude Code takes no settings from there. To use settings here, move or rename the folder named connector-downloads.") });
    return Promise.resolve(to(e));
  }
  return Zi(h, () => Tl(e, r, h, o, g));
}
var bl = 500;
function Zi(e, r) {
  let o = !(0, import_chunk_f9x2f6cx.Y)() && e === _n("userSettings");
  return eo.run(e, () => o ? iKn(e, r, { staleMs: 1e4, acquireTimeoutMs: bl, createParent: false, forgoIf: () => true, onForgone: (g) => (0, import_chunk_w578pjby.t)(`settings: no lock on ${e} (${Fze(g)}); writing without it`, { level: "warn" }), ifReentrant: Wi, ifContended: Wi }) : r());
}
function Wi() {
  throw Error("A settings file was written from inside a write of it");
}
var eo = (0, import_chunk_gjzwg6ck.GS)();
function to(e) {
  return ZN("settings", e), { error: Error("This session does not write settings to disk") };
}
function fKt(e, r) {
  return Zi(e, async () => {
    try {
      return await r();
    } finally {
      (0, import_chunk_r3mm3x33.pr)();
    }
  });
}
function ORt() {
  return eo.drain();
}
(0, import_chunk_0yc3wy8b.hut)(ORt);
function bKn() {
  let e = hMs((0, import_chunk_6mfepmbb.BA)("localSettings"), (0, import_chunk_f9x2f6cx.us)() ?? (0, import_chunk_f9x2f6cx.Te)(), true).then((o) => {
    if (!o.written) return;
    if (o.effective) (0, import_chunk_cqa9hrgx.u)("gitignore_global_rule");
    else if (o.reason === "already_tracked") (0, import_chunk_cqa9hrgx.l)("gitignore_global_rule", o.reason);
    else (0, import_chunk_cqa9hrgx.m)("gitignore_global_rule", o.reason ?? "write_ineffective");
  }).catch(() => {
    return;
  }), r = (0, import_chunk_r3mm3x33.Br)();
  r.backgroundWorkTail = Promise.all([r.backgroundWorkTail, e]).then(() => {
    return;
  });
}
async function ro(e, r, o) {
  try {
    await SI(e, r, o);
  } catch (g) {
    if (!(g instanceof C_) || !await Rl(e)) throw g;
    (0, import_chunk_w578pjby.t)(`Writing settings through symlinked path ${e}`), await SI(e, r, { ...o, allowSymlink: true, checkParentDir: false });
  }
}
async function Rl(e) {
  return false;
}
function io(e, r) {
  let o = (0, import_chunk_6mfepmbb.RFe)(e).copy;
  return (0, import_chunk_xcgcdx61.fge)(o, r), (0, import_chunk_6mfepmbb.NRt)(o), o;
}
class We extends Error {
  why;
  constructor(e, r) {
    super(r);
    this.why = e;
  }
}
function _l(e, r) {
  switch (e.kind) {
    case "object": {
      let o = (0, import_chunk_6mfepmbb.uT)(e.content, r), g = o.settings === null || o.errors.some((h) => h.preserveOnWrite);
      return { settings: g ? io(e.raw, r) : o.settings, raw: g };
    }
    case "absent":
      return { settings: null, raw: false };
    case "empty":
      return { settings: {}, raw: false };
    case "oversize":
      throw new We("stored_oversize", "Your saved settings are too large to read, so this change was not saved");
    case "non-object":
      throw new We("stored_not_object", "Your saved settings are damaged, so this change was not saved");
    case "unreadable":
      throw new We("stored_unreadable", "Your saved settings could not be read, so this change was not saved");
  }
}
var kl = 5, Fl = 40, Ol = 1500;
async function oo(e, r) {
  try {
    let o = e === "userSettings" || (0, import_chunk_6mfepmbb.qC)(r) ? (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), r) : await (0, import_chunk_w578pjby.EL)((0, import_chunk_w578pjby.le)(), r);
    return (await (0, import_chunk_73gwqz1r.wk)(o.resolvedPath, import_chunk_6mfepmbb.Jp)).content;
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) throw o;
    return null;
  }
}
function Pn(e) {
  return (0, import_chunk_6mfepmbb.EK)(e, L().store).settings !== null;
}
function $i(e, r) {
  return !(0, import_chunk_ma3kja9f.T)((0, import_chunk_0jve1fep.et)(e, false)) && Pn(r);
}
async function Ui(e, r, o) {
  try {
    if (o !== void 0) {
      let h = await iKt(o, r).catch((y) => ({ kind: "failing", code: (0, import_chunk_jv7av99m.w)(y) ?? "threw" }));
      if (h.kind === "seeded" && h.text !== void 0) return { parsed: h.parsed, text: h.text, partway: $i(h.text, r) };
      if (h.kind === "absent") return { parsed: (0, import_chunk_6mfepmbb.Uoe)(), text: null, partway: Pn(r) };
      (0, import_chunk_w578pjby.t)(`settings: could not read user settings through the storage backend before a write (${pKn(h)}); reading the file instead`);
    }
    let g = await oo(e, r);
    return g === null ? { parsed: (0, import_chunk_6mfepmbb.Uoe)(), text: g, partway: Pn(r) } : { parsed: (0, import_chunk_6mfepmbb.uT)(g, r), text: g, partway: $i(g, r) };
  } catch (g) {
    let h = (0, import_chunk_jv7av99m.w)(g);
    if (h === void 0) (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(g));
    return (0, import_chunk_w578pjby.t)(`settings: could not read ${r} before a write (${h ?? "unexpected error"}), so it falls back to the last parse`), { parsed: (0, import_chunk_6mfepmbb.EK)(r, L().store), partway: (0, import_chunk_6mfepmbb.Rz)(h) };
  }
}
async function Al(e, r, o) {
  let g = await Ui(e, r, o);
  for (let h = 0; h < kl && g.partway; h++) await (0, import_chunk_5appeerh.K)(Fl), g = await Ui(e, r, o);
  if (!g.partway) return g;
  if (g.text === null) return (0, import_chunk_w578pjby.t)(`settings: ${r} is gone, so this write starts a new file holding only its change`), g;
  return (0, import_chunk_w578pjby.t)(`settings: ${r} is still empty, broken or locked, so this write replaces it from the last parse`), { parsed: (0, import_chunk_6mfepmbb.EK)(r, L().store), partway: false };
}
function lgn(e, r) {
  let o = (0, import_chunk_r3mm3x33.Br)();
  try {
    let { settings: g } = Buffer.byteLength(r) > import_chunk_6mfepmbb.Jp ? { settings: null } : (0, import_chunk_6mfepmbb.uT)(r, e);
    if (g !== null) {
      o.noteSaved(e, g);
      return;
    }
  } catch (g) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(g));
  }
  o.forgetLastRead(e);
}
async function Tl(e, r, o, g, h) {
  var _stack = [];
  try {
    let y = (0, import_chunk_m15w38ag.ne)() && h !== void 0 && Mt(e, o);
    if ((0, import_chunk_f9x2f6cx.Y)() && !y) return to(o);
    let E = g?.legacyRevocation === "skip", P = null, b;
    const v = __using(_stack, { [Symbol.dispose]: () => b?.() });
    let k = y && (0, import_chunk_f9x2f6cx.Y)() ? h : void 0;
    try {
      let F = hl(e), O = false, I = (0, import_chunk_6mfepmbb.Uoe)(), H, G = false;
      if (!k && vr(o)) G = true, (0, import_chunk_w578pjby.t)(`settings: a ConfigChange hook blocked the latest change to ${o} or is deciding, so this write seeds from the last parse`), I = (0, import_chunk_6mfepmbb.EK)(o, L().store);
      else if (!k) {
        let Z = await Al(e, o, y ? h : void 0);
        I = Z.parsed, H = Z.text;
        let re = Fr(), X = re ? (0, import_chunk_6mfepmbb.EK)(o, L().store) : void 0;
        if (re && X && !(0, import_chunk_f9x2f6cx.bp)([X.settings ?? {}, X.errors], [I.settings ?? {}, I.errors])) {
          let we = await (0, import_chunk_5appeerh.me)(re(e, o).catch((ae) => ((0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(ae)), true)), Ol);
          if ((0, import_chunk_w578pjby.t)(`settings: ConfigChange hooks on an unreported edit of ${o}: ${we === void 0 ? "no answer in time, so it counts as blocked" : we ? "blocked, so this write overwrites it" : "allowed"}`), we !== false) G = true, I = X, H = void 0;
        }
      }
      let z = I.settings, W = z !== null && I.errors.some((Q) => Q.preserveOnWrite);
      if (W) z = null;
      if (!z && !k) {
        let Q = H !== void 0 ? H : await oo(e, o);
        if (Q !== null && Q.trim() !== "") {
          let Z = (0, import_chunk_0jve1fep.et)(Q, false);
          if (Z === null) return (0, import_chunk_w578pjby.t)(`updateSettingsForSource: invalid JSON in settings file at ${o}`, { level: "error" }), { error: Error(`Invalid JSON syntax in settings file at ${o}`) };
          if (Z && typeof Z === "object") z = io(Z, o), O = true, (0, import_chunk_w578pjby.t)(W ? `Using raw settings from ${o} so entries this build does not recognize survive the write` : `Using raw settings from ${o} due to validation failure`);
        }
      }
      if (k) {
        let Q = _l(await kn(k), o);
        z = Q.settings, O = Q.raw;
      }
      F.before(z ?? null, O, o);
      let V = r(z ?? null);
      if (V === null) {
        let Q = !k && !G && !(0, import_chunk_f9x2f6cx.bp)((0, import_chunk_6mfepmbb.EK)(o, L().store).settings ?? {}, I.settings ?? {});
        if (Q) (0, import_chunk_r3mm3x33.pr)();
        let Z = false;
        if (e === "localSettings" && !E) {
          let re = await ji(r, F);
          if (re.error) return { error: re.error };
          Z = re.changed;
        }
        if (Z || Q) {
          if ((0, import_chunk_m15w38ag.ne)() && h !== void 0) b = await Bi(h, o);
          try {
            _p();
          } catch (re) {
            (0, import_chunk_k449cc64.i)(re);
          }
          Gi(e);
        }
        return { error: null };
      }
      if (!(0, import_chunk_f9x2f6cx.Y)()) await (0, import_chunk_w578pjby.le)().mkdir((0, import_path.dirname)(o));
      let oe = (0, import_chunk_6mfepmbb.xM)(z || {}, V, (Q, Z, re, X) => {
        if (Z === void 0 && X && typeof re === "string") {
          delete X[re];
          return;
        }
        if (Array.isArray(Z)) return Z;
        if (re === "extraKnownMarketplaces" && (0, import_chunk_ma3kja9f.T)(Q) && (0, import_chunk_ma3kja9f.T)(Z)) return (0, import_chunk_6mfepmbb.HKn)(Q, Z);
        return;
      }), te = (0, import_chunk_w578pjby._)(oe, null, 2) + `
`;
      if (k && Buffer.byteLength(te) > import_chunk_6mfepmbb.Jp) throw new We("result_oversize", "Your saved settings would be too large after this change, so the change was not saved");
      if (ngn(o, te), y) {
        let Q = await h.write(import_chunk_hkvzj051.at.userSettings(), te, { publishDiscipline: "followAtomic" });
        if (!Q.ok) throw new import_chunk_jv7av99m.A(`settings storageV5 write failed: ${Q.error.code}${"failureClass" in Q.error ? ` (${Q.error.failureClass})` : ""}`, "settings storageV5 write failed");
      } else {
        let Q = (0, import_chunk_2gtmjt3y.eve)((0, import_path.dirname)(o));
        await ro(o, te, { encoding: "utf-8", allowSymlink: e === "userSettings" || Q, checkParentDir: (e === "projectSettings" || e === "localSettings") && !Q, stagingDir: (0, import_path.join)((0, import_path.dirname)(o), import_chunk_q7qjcthc.ED) });
      }
      if (F.after({ path: o, content: te }), zIo(o, false), (0, import_chunk_r3mm3x33.pr)(), lgn(o, te), y) b = Il(o, te);
      if (e === "localSettings" && !E) {
        let Q = await ji(r, F);
        if (Q.error && Q.phase !== void 0 && !so(V)) (0, import_chunk_w578pjby.t)(`localSettings: legacy settings.local.json could not be evaluated (${Q.phase} failure) but this write contains no removals \u2014 canonical write succeeded, ignoring: ${Q.error.message}`, { level: "warn" });
        else P = Q.error;
      }
      if (e === "localSettings") bKn();
      if (k && O) (0, import_chunk_cqa9hrgx.l)("ccs_user_settings_write", "merged_into_raw_record");
      else if (k) (0, import_chunk_cqa9hrgx.u)("ccs_user_settings_write");
    } catch (F) {
      if (k) (0, import_chunk_cqa9hrgx.m)("ccs_user_settings_write", F instanceof We ? F.why : "failed");
      if (F instanceof We) return (0, import_chunk_w578pjby.t)(`updateSettingsForSource: refused (${F.why}): ${F.message}`, { level: "error" }), { error: F };
      let O = Error(`Failed to read raw settings from ${o}: ${F}`, { cause: F });
      return (0, import_chunk_w578pjby.t)(O.message, { level: "error" }), { error: O };
    }
    if ((0, import_chunk_m15w38ag.ne)() && h !== void 0 && !y) b = await Bi(h, o);
    try {
      _p();
    } catch (F) {
      (0, import_chunk_k449cc64.i)(F);
    }
    return Gi(e), { error: P };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function Bi(e, r) {
  let o = _n("userSettings");
  if (o === void 0 || o === r || !Mt("userSettings", o)) return;
  return kMs(e, (0, import_chunk_r3mm3x33.Br)(), o);
}
function Il(e, r) {
  if (Buffer.byteLength(r) > import_chunk_6mfepmbb.Jp) return;
  let o;
  try {
    o = (0, import_chunk_6mfepmbb.uT)(r, e);
  } catch (h) {
    (0, import_chunk_w578pjby.t)(`updateSettingsForSource: written settings not seeded: ${(0, import_chunk_jv7av99m.d)(h)}`);
    return;
  }
  let g = (0, import_chunk_r3mm3x33.Br)();
  return g.seedParsedFile(e, "userSettings", o, g.epoch), g.retainLayer(e, o);
}
function so(e) {
  if (e === void 0 || Array.isArray(e)) return true;
  if (e === null || typeof e !== "object") return false;
  return Object.values(e).some(so);
}
function Gi(e) {
  try {
    (0, import_chunk_r3mm3x33.Br)().changed.emit(e);
  } catch (r) {
    for (let o of r instanceof AggregateError ? r.errors : [r]) (0, import_chunk_k449cc64.i)(o);
  }
}
async function ji(e, r) {
  let o = (0, import_chunk_6mfepmbb.oOe)(L());
  if (!o) return { changed: false, error: null };
  let g;
  try {
    let k = (0, import_chunk_6mfepmbb.qC)(o) ? (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), o) : await (0, import_chunk_w578pjby.EL)((0, import_chunk_w578pjby.le)(), o);
    g = (await (0, import_chunk_73gwqz1r.wk)(k.resolvedPath, import_chunk_6mfepmbb.Jp)).content;
  } catch (k) {
    if ((0, import_chunk_jv7av99m.J)(k)) return { changed: false, error: null };
    let F = new import_chunk_jv7av99m.A(`Failed to read legacy settings.local.json at ${o}: ${k}`, "Failed to read legacy settings.local.json");
    return (0, import_chunk_w578pjby.t)(F.message, { level: "error" }), { changed: false, error: F, phase: "read" };
  }
  r.noteRead({ path: o, content: g });
  let h = (0, import_chunk_0jve1fep.et)(g, false);
  if (!h || typeof h !== "object" || Array.isArray(h)) return { changed: false, error: null };
  let y = (0, import_chunk_6mfepmbb.RFe)(h).copy;
  (0, import_chunk_xcgcdx61.fge)(y, o), (0, import_chunk_6mfepmbb.NRt)(y);
  let E = y, P;
  try {
    P = e((0, import_chunk_w578pjby.Ka)(E));
  } catch (k) {
    let F = new import_chunk_jv7av99m.A(`Transform failed against legacy settings.local.json at ${o} (malformed legacy content?): ${k}`, "Transform failed against legacy settings.local.json");
    return (0, import_chunk_w578pjby.t)(F.message, { level: "error" }), { changed: false, error: F, phase: "transform" };
  }
  if (P === null) return { changed: false, error: null };
  let b = (0, import_chunk_6mfepmbb.xM)((0, import_chunk_w578pjby.Ka)(E), P, (k, F, O, I) => {
    if (F === void 0 && I && typeof O === "string") {
      delete I[O];
      return;
    }
    if (Array.isArray(F)) return F;
    return;
  }), v = xFl(E, b);
  if ((0, import_chunk_w578pjby._)(v) === (0, import_chunk_w578pjby._)(E)) return { changed: false, error: null };
  try {
    let k = (0, import_chunk_w578pjby._)(v, null, 2) + `
`;
    ngn(o, k);
    let F = (0, import_chunk_2gtmjt3y.eve)((0, import_path.dirname)(o));
    return await ro(o, k, { encoding: "utf-8", allowSymlink: F, checkParentDir: !F, stagingDir: (0, import_path.join)((0, import_path.dirname)(o), import_chunk_q7qjcthc.ED) }), r.after({ path: o, content: k }), (0, import_chunk_r3mm3x33.pr)(), lgn(o, k), { changed: true, error: null };
  } catch (k) {
    let F = new import_chunk_jv7av99m.A(`Failed to revoke from legacy settings.local.json at ${o}: ${k}`, "Failed to revoke from legacy settings.local.json");
    return (0, import_chunk_w578pjby.t)(F.message, { level: "error" }), { changed: false, error: F };
  }
}
function xFl(e, r) {
  if (Array.isArray(e) && Array.isArray(r)) {
    let o = new Set(r.map((g) => (0, import_chunk_w578pjby._)(g)));
    return e.filter((g) => o.has((0, import_chunk_w578pjby._)(g)));
  }
  if ((0, import_chunk_ma3kja9f.T)(e) && (0, import_chunk_ma3kja9f.T)(r)) {
    let o = {};
    for (let g of Object.keys(e)) {
      if (!(g in r) || r[g] === void 0) continue;
      o[g] = xFl(e[g], r[g]);
    }
    return o;
  }
  return e;
}
function zJi(e) {
  let r = (0, import_chunk_xcgcdx61.a$l)(e).parse(e), o = ["permissions", "sandbox", "hooks"], g = [], h = { permissions: new Set(Object.keys((0, import_chunk_xcgcdx61.aHo)().shape)), sandbox: new Set(Object.keys((0, import_chunk_xcgcdx61.$Hr)().shape)), hooks: new Set(import_chunk_xcgcdx61.Jd) };
  for (let y of Object.keys(r)) if (o.includes(y) && r[y] && typeof r[y] === "object") {
    let E = r[y], P = h[y];
    if (P) {
      for (let b of Object.keys(E)) if (P.has(b)) g.push(`${y}.${b}`);
    }
  } else g.push(y);
  return g.sort();
}
function wKn(e) {
  if (!(0, import_chunk_r3mm3x33.Br)().pluginBaseLoaded) (0, import_chunk_y53wbr8a.a)("tengu_plugin_settings_premature_read", { key: (0, import_chunk_78g0060s.f)(e) });
  let { settings: r } = _p();
  return (r || {})[e];
}
function iL(e) {
  return Lee(e).map((r) => r.value);
}
var L3l = ["policySettings", "flagSettings", "userSettings"];
function Lee(e) {
  let r = [];
  for (let o of L3l) {
    let g = vl(o), h = g?.[e];
    if (h !== void 0 && ((0, import_chunk_xzvhvaa2.rn)(o) || (0, import_chunk_8hfdvrr1.a$)().some((y) => y.path.length === 1 && y.path[0] === e && (0, import_chunk_8hfdvrr1._ce)(y.restrictive).some((E) => E === (0, import_chunk_8hfdvrr1.Yoe)(y, g))))) r.push({ source: o, value: h });
  }
  return r;
}
function nce() {
  return !!(_e("userSettings")?.skipDangerousModePermissionPrompt || _e("localSettings")?.skipDangerousModePermissionPrompt || _e("flagSettings")?.skipDangerousModePermissionPrompt || _e("policySettings")?.skipDangerousModePermissionPrompt);
}
function pKt() {
  return !!(_e("policySettings")?.skipDangerousModePermissionPrompt || _e("userSettings")?.skipDangerousModePermissionPrompt);
}
function RMs() {
  return !!(_e("userSettings")?.skipWorkflowUsageWarning || _e("localSettings")?.skipWorkflowUsageWarning || _e("flagSettings")?.skipWorkflowUsageWarning || _e("policySettings")?.skipWorkflowUsageWarning);
}
function Wze() {
  return (0, import_chunk_xzvhvaa2.Ko)().some((e) => _e(e)?.isolatePeerMachines === true);
}
function TFe() {
  return (0, import_chunk_xzvhvaa2.Ko)().some((e) => _e(e)?.disableClaudeAiConnectors === true) || kK().some((e) => e.disableClaudeAiConnectors === true);
}
function VJi() {
  return kK().some((e) => e.disableClaudeAiConnectors === true);
}
function xMs(e, { withoutLocalFile: r = false } = {}) {
  let o = e === "useAutoModeDuringPlan" ? _e : vl;
  return ![...Rp(), ...kK(), _e("policySettings"), _e("flagSettings"), o("userSettings"), ...r ? [] : [o("localSettings"), e !== "useAutoModeDuringPlan" || (0, import_chunk_xzvhvaa2.rn)("localSettings") ? _Kn() : null]].some((g) => g?.[e] === false);
}
function KJi(e) {
  return [...Loe(), _e("flagSettings")].some((r) => r?.[e] === false);
}
function dgn() {
  return xMs("useAutoModeDuringPlan");
}
function cgn() {
  return iL("askUserQuestionTimeout")[0];
}
function sHr() {
  return iL("dialogExpiry")[0];
}
function mut() {
  return iL("modelProposedGoals")[0] ?? "auto";
}
async function qJi(e) {
  let r = iL("modelProposedGoals")[0];
  if (r !== void 0) return r;
  if (await IRt("modelProposedGoals", e) !== "absent") return "alwaysAsk";
  return "auto";
}
var eOe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ allow: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), soft_deny: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), hard_deny: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), deny: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), environment: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), CJe = ["userSettings", "flagSettings", "policySettings"];
function aL() {
  return ao(CJe);
}
function wnd(e) {
  let { soft_deny: r, hard_deny: o } = ao(e) ?? {};
  return { soft_deny: r, hard_deny: o };
}
function ao(e) {
  let r = eOe(), o = (0, import_chunk_r3mm3x33.Br)();
  if (!o.autoModeUntrustedSourceWarned) for (let k of ["projectSettings", "localSettings"]) {
    if (k === "projectSettings" && vm()) continue;
    let F = _e(k)?.autoMode;
    if (F && r.safeParse(F).success) o.autoModeUntrustedSourceWarned = true, (0, import_chunk_w578pjby.t)(`settings autoMode in ${k} ignored \u2014 only user/flag/managed settings may set classifier rules (projectSettings and localSettings are repo-controllable)`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_settings_auto_mode_rules_untrusted_source_ignored", { source: (0, import_chunk_78g0060s.f)(k) });
  }
  let g = {}, h = {}, y = [], E = [], P = false;
  for (let k of e) {
    let F = _e(k);
    if (!F) continue;
    let O = r.safeParse(F.autoMode);
    if (O.success) {
      if (O.data.allow) g[k] = O.data.allow;
      if (O.data.soft_deny) y.push(...O.data.soft_deny);
      if (O.data.hard_deny) E.push(...O.data.hard_deny);
      if (O.data.environment) h[k] = O.data.environment;
    }
  }
  if (g.flagSettings) g.flagSettings = eMo("allow", g.flagSettings, g.policySettings);
  if (h.flagSettings) h.flagSettings = eMo("environment", h.flagSettings, h.policySettings);
  let b = CJe.flatMap((k) => g[k] ?? []), v = CJe.flatMap((k) => h[k] ?? []);
  if (b.length > 0 || y.length > 0 || E.length > 0 || v.length > 0 || P) return { ...b.length > 0 && { allow: b }, ...y.length > 0 && { soft_deny: y }, ...E.length > 0 && { hard_deny: E }, ...v.length > 0 && { environment: v }, ...{} };
  return;
}
function eMo(e, r, o) {
  return r.includes(import_chunk_khxw3ng0.Sp) && ((0, import_chunk_khxw3ng0.EDr)(o) && (e === "allow" || !(0, import_chunk_6e68m1dj.ny)() && Li()) || e === "allow" && (QIo("autoMode") || QIo("autoMode.allow"))) ? r.filter((g) => g !== import_chunk_khxw3ng0.Sp) : r;
}
function iHr() {
  return (0, import_chunk_khxw3ng0.EDr)(aL()?.allow);
}
function YJi() {
  for (let e of CJe) if (vl(e)?.autoMode?.classifyAllShell === true) return true;
  return false;
}
async function IRt(e, r, o) {
  let g = L(), h = (0, import_chunk_6mfepmbb.SHr)(g), y = false, E = false;
  for (let P of h) {
    if (P === "policySettings" && (g.diskless || (0, import_chunk_6mfepmbb.mKt)(g))) continue;
    let b = P !== "policySettings" && (o?.presenceSources === void 0 || o.presenceSources.includes(P));
    if (b && P === "flagSettings" && (0, import_chunk_ma3kja9f.T)(g.flagInline) && e in g.flagInline && e !== "attribution" && e !== "includeCoAuthoredBy") y = true;
    if (P === "flagSettings" && g.flagExpectedContent !== void 0) {
      if (!g.flagExpectedContent.trim()) continue;
      let I = (0, import_chunk_0jve1fep.et)(g.flagExpectedContent, false);
      if (I === null || typeof I !== "object" || Array.isArray(I)) E = true;
      else if (b && e in I && e !== "attribution" && e !== "includeCoAuthoredBy") y = true;
      continue;
    }
    let v = (0, import_chunk_6mfepmbb.vK)(P, g);
    if (!v) continue;
    if ((0, import_chunk_m15w38ag.ne)() && r !== void 0 && P === "projectSettings" && h.includes("userSettings") && vm()) continue;
    let k = P === "localSettings" ? (0, import_chunk_6mfepmbb.oOe)(g) : void 0, F = k ? [v, k] : [v], O = (0, import_chunk_m15w38ag.ne)() && r !== void 0 && Mt(P, v);
    for (let I of F) {
      if (O) {
        let H = await kn(r);
        switch (H.kind) {
          case "unreadable":
            (0, import_chunk_w578pjby.t)(`rawSettingsKeyPresence: v5 user-settings read failed: ${H.code}`), E = true;
            break;
          case "oversize":
          case "non-object":
            E = true;
            break;
          case "object":
            if (b && e in H.raw && !(e === "attribution" || e === "includeCoAuthoredBy")) y = true;
            break;
          case "absent":
          case "empty":
            break;
        }
        continue;
      }
      if (g.diskless) continue;
      try {
        let H = P === "policySettings" || P === "userSettings" || (0, import_chunk_6mfepmbb.qC)(I) ? (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), I) : (0, import_chunk_w578pjby.RD)((0, import_chunk_w578pjby.le)(), I), G = (0, import_chunk_73gwqz1r.RB)(H.resolvedPath, import_chunk_6mfepmbb.Jp);
        if (!G.trim()) continue;
        let z = (0, import_chunk_0jve1fep.et)(G, false);
        if (z === null || typeof z !== "object" || Array.isArray(z)) E = true;
        else if (b && e in z && !(e === "attribution" || e === "includeCoAuthoredBy")) y = true;
      } catch (H) {
        if ((0, import_chunk_6mfepmbb.ZMs)(H, I), !(0, import_chunk_jv7av99m.J)(H)) E = true;
      }
    }
  }
  if (E) return "unknowable";
  return y ? "present" : "absent";
}
