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
var chunk_wx3ay5nf_exports = {};
__export(chunk_wx3ay5nf_exports, {
  $Ha: () => $Ha,
  $qo: () => $qo,
  BHa: () => BHa,
  Bqo: () => Bqo,
  DHa: () => DHa,
  Dqo: () => Dqo,
  FHa: () => FHa,
  Fqo: () => Fqo,
  G7t: () => G7t,
  GHa: () => GHa,
  HHa: () => HHa,
  Hqo: () => Hqo,
  Htr: () => Htr,
  IHa: () => IHa,
  Iqo: () => Iqo,
  Itr: () => Itr,
  KHa: () => KHa,
  LHa: () => LHa,
  Lqo: () => Lqo,
  MHa: () => MHa,
  Mqo: () => Mqo,
  Mtr: () => Mtr,
  NHa: () => NHa,
  Nqo: () => Nqo,
  OHa: () => OHa,
  Oqo: () => Oqo,
  Otr: () => Otr,
  Pqo: () => Pqo,
  Ptr: () => Ptr,
  QTn: () => QTn,
  RO: () => RO,
  SJs: () => SJs,
  UHa: () => UHa,
  Uqo: () => Uqo,
  VHa: () => VHa,
  W7t: () => W7t,
  WHa: () => WHa,
  XHt: () => XHt,
  YHt: () => YHt,
  ZTn: () => ZTn,
  _Js: () => _Js,
  a3r: () => a3r,
  bJs: () => bJs,
  c3r: () => c3r,
  d3r: () => d3r,
  fJs: () => fJs,
  gJs: () => gJs,
  hJs: () => hJs,
  i3r: () => i3r,
  j7t: () => j7t,
  jHa: () => jHa,
  kJs: () => kJs,
  l3r: () => l3r,
  mJs: () => mJs,
  o3r: () => o3r,
  ott: () => ott,
  pJs: () => pJs,
  qHa: () => qHa,
  qHt: () => qHt,
  s3r: () => s3r,
  sgt: () => sgt,
  u3r: () => u3r,
  uJs: () => uJs,
  wJs: () => wJs,
  xqo: () => xqo,
  xtr: () => xtr,
  yJs: () => yJs,
  zHa: () => zHa
});
module.exports = __toCommonJS(chunk_wx3ay5nf_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_2ms4sey3 = require("/$bunfs/root/chunk-2ms4sey3.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_jejz6sfb = require("/$bunfs/root/chunk-jejz6sfb.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_xzph4c6z = require("/$bunfs/root/chunk-xzph4c6z.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_qjd2kk5d = require("/$bunfs/root/chunk-qjd2kk5d.js");
var import_chunk_s3d8sr7p = require("/$bunfs/root/chunk-s3d8sr7p.js");
var import_chunk_t2e49pze = require("/$bunfs/root/chunk-t2e49pze.js");
var import_chunk_r3e8vdzv = require("/$bunfs/root/chunk-r3e8vdzv.js");
var import_chunk_cc0rj9gh = require("/$bunfs/root/chunk-cc0rj9gh.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_etd6y4ew = require("/$bunfs/root/chunk-etd6y4ew.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_67f81g6v = require("/$bunfs/root/chunk-67f81g6v.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_path = require("path");
var import_crypto = require("crypto");
function xqo(e, r, o) {
  let a = [];
  if (r === void 0 || !o.has(r)) return a;
  for (let g = e.at(-1); g !== void 0 && g.type !== "assistant" && !(g.type === "user" && (0, import_chunk_bzyb60p0.sne)(g.message.content, "tool_result")) && !o.has(g.uuid); g = e.at(-1)) {
    if (e.pop(), g.type === "user" && g.origin === void 0) g.turnCompanion = true, (0, import_chunk_865at33z.Gx)(g);
    a.unshift(g);
  }
  return a;
}
var Kn = "tengu_homing_swift";
function qHt() {
  return (0, import_chunk_sghy0qej.Pe)(Kn, { safe: true });
}
function Pqo(e, r, o, a) {
  try {
    let g = { lane: (0, import_chunk_78g0060s.f)(e), toolName: (0, import_chunk_865at33z.AX)(r.name), isMcp: r.isMcp ?? false };
    if (o === null) (0, import_chunk_cqa9hrgx.l)("permission_late_allow_no_input", `${e}_no_record`, g);
    else if ((0, import_chunk_f9x2f6cx.cg)((0, import_chunk_bzyb60p0.uR)(r.name, o), (0, import_chunk_bzyb60p0.uR)(r.name, a))) (0, import_chunk_cqa9hrgx.u)("permission_late_allow_no_input", g);
    else (0, import_chunk_cqa9hrgx.l)("permission_late_allow_no_input", `${e}_differs${r.askInputPreparer === void 0 ? "" : "_card_step"}`, g);
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
  }
}
var Bn = `The call was not run. The permission answer gave it an input past what this session takes from an answer: ${import_chunk_r9ecxfn9.uCi} values, ${import_chunk_r9ecxfn9.cCi} levels of nesting, ${import_chunk_r9ecxfn9.fCi} characters of text. Nothing of the answer is in force.`;
function Hn(e) {
  return `The call was not run: it could not be confirmed that ${e} still reaches the server that its permission request was made for. If the call is still needed, make it again: it then goes through the usual permission check.`;
}
var Wn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_bzyb60p0.K0t)("cut", "orphaned permission"));
function Yt(e, r, o, a) {
  let g, S = false;
  return { refusalOf: (y, h, R, C) => {
    let A = !S;
    return S = true, g ??= jn(e, r, o, a, A, y, h, R, C);
  }, hasServedAllow: () => S && g === void 0, warnIfNeverAsked: () => {
    if (!S) Tt(o, r.updatedPermissions);
  } };
}
function Tt(e, r) {
  if (r !== void 0) (0, import_chunk_w578pjby.t)(`the late allow for toolUseID=${e} was never served: nothing of its updatedPermissions (${Array.isArray(r) ? r.length : 1} item(s)) was applied`, { level: "warn" });
}
function jn(e, { updatedInput: r, updatedPermissions: o }, a, g, S, y, h, R, C) {
  try {
    let A = (0, import_chunk_r9ecxfn9._st)(r);
    if (!A.within) return (0, import_chunk_w578pjby.t)(`refused a late permission answer for ${y.name}: its updatedInput is past the answer bounds (${A.values} values, depth ${A.depth}, ${A.chars} string characters when the walk stopped)`, { level: "warn" }), { behavior: "deny", message: Bn, toolUseID: a, decisionReason: { type: "other", reason: "the permission answer's input is past the answer bounds", label: "answerInputTooLarge" }, decideLocation: "ask-path" };
    if (!S) return;
    let k = (0, import_chunk_bz1f2qnq.Z)(R);
    if ((0, import_chunk_bzyb60p0.yyt)(k) && !(0, import_chunk_ht27b0vz.p1)(y)) return { behavior: "deny", message: (0, import_chunk_bzyb60p0.EQo)(y.name), toolUseID: a, decisionReason: { type: "other", reason: import_chunk_bzyb60p0.glr } };
    if (e.lateAllowMayRun?.(y, a) === false) return { behavior: "deny", message: Hn(y.name), toolUseID: a, decisionReason: { type: "other", reason: "the server under the name could not be confirmed as the card's" } };
    let P = Object.keys(r).length > 0 ? r : h, { lostTightenings: D } = (0, import_chunk_bzyb60p0.bxn)(e, Wn().parse(o), { vetoed: () => false, strip: (x) => g(x, y, P, k), toolName: (0, import_chunk_px0hhsq7.ca)(y), input: h, suggested: (x) => y.suggestedAllowRule?.(x, "late") === true, setContext: C });
    return D > 0 ? (0, import_chunk_bzyb60p0.Sxn)(y.name, a) : void 0;
  } catch (A) {
    return (0, import_chunk_w578pjby.t)(`refused a late permission answer for ${y.name}: judging it threw`, { level: "warn" }), (0, import_chunk_k449cc64.i)(A), { behavior: "deny", message: import_chunk_zsqk76p8.TFt, toolUseID: a, decisionReason: import_chunk_pbteexar.Mqn, decideLocation: "ask-path" };
  }
}
var qn = "tengu_frolicking_riddle";
function Xt() {
  return (0, import_chunk_sghy0qej.Pe)(qn, { safe: true });
}
var Gn = { stdio: true, sse: true, "sse-ide": true, "ws-ide": true, http: true, ws: true, sdk: true, "claudeai-proxy": true };
function Vn(e, r, o, a) {
  let g = (0, import_chunk_b83x8d52.Yfe)(e, o, a, void 0, void 0, r).kind, S = (0, import_chunk_bzyb60p0.nyt)(e, o), y = S.filter((R) => R.type === "connected"), h = y[0] ?? S[0];
  if (!h) return { departureCause: g, serverTransport: void 0, serverIsDeviceBridge: void 0, serverToolsListFailed: void 0, serverToolsInPool: void 0 };
  return { departureCause: g, serverTransport: zn(h.config), serverIsDeviceBridge: h.name === import_chunk_qdcbcsg7.$n, serverToolsListFailed: y.length > 0 ? y.some((R) => R.toolsListError !== void 0) : void 0, serverToolsInPool: Xn((0, import_chunk_4smdap7r.U)(r, (R) => (0, import_chunk_bzyb60p0.nyt)(R.name, o).includes(h))) };
}
function Qt(e, r, o) {
  try {
    let a = (0, import_chunk_bzyb60p0.LPn)(e, o.options.toolAliases);
    if (typeof a !== "string") return;
    return Vn(a, o.options.refreshTools?.() ?? r, (0, import_chunk_4vsz8a99.Oc)(o), (0, import_chunk_bz1f2qnq.Z)(o));
  } catch (a) {
    (0, import_chunk_w578pjby.t)(`Could not read why a tool is missing, so its telemetry fields are left out (the turn is unaffected): ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "warn" }), (0, import_chunk_k449cc64.i)(a);
    return;
  }
}
function zn(e) {
  let r = e.type ?? "stdio";
  return typeof r === "string" && Object.hasOwn(Gn, r) ? r : "other";
}
function Xn(e) {
  if (e <= 2) return e === 0 ? "0" : e === 1 ? "1" : "2";
  return e < 10 ? "3_to_9" : "10_plus";
}
function Oqo(e, r) {
  try {
    let o = e.inputSchema.safeParse(r);
    return o.success && Boolean(e.isConcurrencySafe(o.data));
  } catch {
    return false;
  }
}
function Qn() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY ?? 10;
}
async function* kt(e, r, o, a) {
  var _stack = [];
  try {
    const g = __using(_stack, (0, import_chunk_bzyb60p0.Uto)(a));
    let S = (0, import_chunk_bzyb60p0.$qa)(e, a, import_chunk_bzyb60p0.wBe);
    const y = __using(_stack, S && await S);
    let h = a;
    for (let { isConcurrencySafe: R, blocks: C } of Jn(e, h.options.tools, h.options.toolAliases)) if (R) {
      let A = {};
      for await (let k of eo(C, r, o, h)) {
        if ((0, import_chunk_bzyb60p0.IO)(k)) {
          yield k;
          continue;
        }
        if (k.contextLayers) {
          let { toolUseID: P, layers: D } = k.contextLayers;
          if (!A[P]) A[P] = [];
          A[P].push(...D);
        }
        yield { message: k.message, newContext: h };
      }
      for (let k of C) {
        let P = A[k.id];
        if (!P || P.length === 0) continue;
        h = Jt(h, P);
      }
      yield { newContext: h };
    } else for await (let A of Zn(C, r, o, h)) {
      if ((0, import_chunk_bzyb60p0.IO)(A)) {
        yield A;
        continue;
      }
      if (A.newContext) h = A.newContext;
      yield { message: A.message, newContext: h };
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function Jn(e, r, o) {
  return e.reduce((a, g) => {
    let S = (0, import_chunk_4vsz8a99.tn)(r, g.name, o), y = S?.inputSchema.safeParse(g.input), h = y?.success ? (() => {
      try {
        return Boolean(S?.isConcurrencySafe(y.data));
      } catch {
        return false;
      }
    })() : false;
    if (h && a.at(-1)?.isConcurrencySafe) a.at(-1).blocks.push(g);
    else a.push({ isConcurrencySafe: h, blocks: [g] });
    return a;
  }, []);
}
async function* Zn(e, r, o, a) {
  let g = a;
  for (let S of e) {
    for await (let y of (0, import_chunk_bzyb60p0.Y$)(S, r.find((h) => h.message.content.some((R) => R.type === "tool_use" && R.id === S.id)), o, g, () => (/* @__PURE__ */ new Date()).toISOString(), void 0, true)) {
      if ((0, import_chunk_bzyb60p0.IO)(y)) {
        yield y;
        continue;
      }
      if (y.contextLayers) g = Jt(g, y.contextLayers.layers);
      yield { message: y.message, newContext: g };
    }
    yield { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: [S.id] } };
  }
}
async function* eo(e, r, o, a) {
  yield* (0, import_chunk_bzyb60p0.ZZt)(e.map(async function* (g) {
    yield* (0, import_chunk_bzyb60p0.Y$)(g, r.find((S) => S.message.content.some((y) => y.type === "tool_use" && y.id === g.id)), o, a, () => (/* @__PURE__ */ new Date()).toISOString(), void 0, true), yield { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: [g.id] } };
  }), Qn());
}
function Jt(e, r) {
  let o = (0, import_chunk_bz1f2qnq.Nre)(e, (0, import_chunk_bzyb60p0.Ten)(e, r)), { mainLoopModel: a } = o.options;
  return a === e.options.mainLoopModel ? o : { ...o, modelFacts: (0, import_chunk_bzyb60p0.Il)(a), loopModel: a };
}
class Zt {
  #e = /* @__PURE__ */ new Set();
  noteResults(e) {
    try {
      if (e.type !== "user" || (0, import_chunk_0ha8wex8.e3)(e)) return;
      let r = e.message.content;
      if (!Array.isArray(r)) return;
      for (let o of r) if (o.type === "tool_result") this.#e.add(o.tool_use_id);
    } catch (r) {
      (0, import_chunk_k449cc64.i)(r);
    }
  }
  has(e) {
    return this.#e.has(e);
  }
}
var o3r = new import_chunk_pzzqg6s3.ze(() => new Zt());
function ott(e, r) {
  try {
    to(e, r);
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function to(e, r) {
  let o = e.filter((A) => A.pollEmptyDispatch !== true);
  if (o.length === 0) return;
  let a = Date.now(), g = a, S = 0, y = 0, h = 0, R = 0, C = 0;
  for (let A of o) {
    if (A.mode === "prompt") S++;
    if (A.artifactCommentTurn !== void 0) h++;
    if (A.monitorEvent !== void 0) R++, C += typeof A.value === "string" ? A.value.length : 0;
    if ((0, import_chunk_865at33z.rT)(A.origin) && A.hearthRelayMessageIds !== void 0) y++;
    let k = A.timestamp ? Date.parse(A.timestamp) : Number.NaN;
    if (k < g) g = k;
  }
  (0, import_chunk_cqa9hrgx.u)("queued_message_delivered", { delivery: (0, import_chunk_78g0060s.f)(r), command_count: o.length, prompt_count: S, relay_count: y, artifact_comment_count: h, monitor_event_count: R, monitor_event_chars: C, wait_ms: a - g });
}
function sgt(e, { messageQueue: r }) {
  try {
    let o = new Set(e.flatMap((g) => g.type === "attachment" && g.attachment?.type === "queued_command" && g.attachment.beside_result !== void 0 ? g.attachment.delivery_id ?? [] : []));
    if (o.size === 0) return;
    let a = r.getCommandQueue().filter(({ deliveryId: g }) => g !== void 0 && o.has(g));
    if (a.length === 0) return;
    (0, import_chunk_xfj2cwfv.Rke)(a), r.consume(a, { reason: "absorbed_mid_turn" }), ott(a, "mid_turn"), (0, import_chunk_p3d6wgn7.j9e)(a), (0, import_chunk_cqa9hrgx.u)("report_beside_its_result");
  } catch (o) {
    uJs(), (0, import_chunk_cqa9hrgx.m)("report_beside_its_result", "not_taken"), (0, import_chunk_k449cc64.i)(o);
  }
}
function uJs() {
  for (let e of [() => (0, import_chunk_xfj2cwfv.Cmn)("cross_sender_content"), import_chunk_xfj2cwfv.Rhe]) try {
    e();
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function en(e) {
  return e.replace(/\r\n?|[\v\f\u0085\u2028\u2029]/g, `
`).split(`
`).map((r) => (0, import_chunk_kx2fp6pc.Yn)((0, import_chunk_kx2fp6pc.Og)((0, import_chunk_wbk1hf21.Dr)(r))));
}
function At(e) {
  let r = `${en(e.hookName).join(" ")} says: `;
  return en(e.content).map((o) => r + o).join(`
`);
}
function Iqo(e) {
  return { type: "system", subtype: "informational", content: At(e), level: "notice" };
}
function YHt(e, r, o = []) {
  let a = new Set(o.map((k) => k.uuid)), g = e.filter((k) => !a.has(k.uuid)), S = new Set(g.map((k) => k.uuid)), y = new Set(e.map((k) => k.uuid)), h = new Set(r?.map((k) => k.uuid)), R = (k, ...P) => Array.isArray(k.message.content) && k.message.content.some((D) => P.includes(D.type)), C = r?.filter((k) => R(k, "tool_use")) ?? [];
  if (r === void 0 || !e.every((k) => h.has(k.uuid)) || r.some((k) => k.resumedFromIncompleteThinking === true) || C.some((k) => !y.has(k.uuid)) && (r.slice(r.indexOf(C[0]) + 1).some((k) => R(k, "thinking", "redacted_thinking")) || !(0, import_chunk_865at33z.b)(import_chunk_865at33z.Xfn, false))) return g;
  let A = r.findLastIndex((k) => a.has(k.uuid));
  return r.filter((k, P) => S.has(k.uuid) || P > A && !R(k, "tool_use"));
}
function Mt(e, r, o) {
  let a = e[0], g = a !== void 0 && "parentUuid" in a ? a.parentUuid : void 0, S = r.findLastIndex((h) => h.uuid === g), y = r.slice(S + 1).filter(o);
  if (S === -1 || !y.some((h) => h.type === "user" && h.queueTranscriptOnly === true) || y.length > import_chunk_bzyb60p0.N7o || !(0, import_chunk_865at33z.b)(import_chunk_865at33z.fxl, false)) return {};
  return (0, import_chunk_cqa9hrgx.u)("ccr_rows_ahead_of_put_back", { count: y.length }), { rowsAheadOfPutBack: y.map((h) => h.uuid) };
}
function Mqo(e) {
  return typeof e === "string" && (0, import_chunk_ge3qft6b.$T)("quizzical_shore", (0, import_chunk_865at33z.St)(e), e);
}
function on(e) {
  return Mqo(e) ? "hidden" : "faint";
}
var je = String.raw`[\p{L}\p{N}](?:(?!${import_chunk_03kvdj1s.mDo.source})[\p{Mn}\p{Mc}])*`, ln = String.raw((0, import_chunk_w1d7ygsk.jE)(["[.\\-#'\u2018\u201C\u201E\xAB\xBF\xA1\u300C\u300E]"])`[.\-#'\u2018\u201C\u201E\u00AB\u00BF\u00A1\u300C\u300E]`), vt = String.raw((0, import_chunk_w1d7ygsk.jE)(["['\u2019\\-/._,:\u3001\u3002\uFF0C\uFF1A\u30FB\uFF0F\u060C]"])`['\u2019\-/._,:\u3001\u3002\uFF0C\uFF1A\u30FB\uFF0F\u060C]`), un = String.raw((0, import_chunk_w1d7ygsk.jE)(["[,.:?!%+/#'\u2019\u2026\xBB\u201D\u201C\u300D\u300F\u3001\u3002\uFF0C\uFF1A\uFF01\uFF1F\uFF05\uFF0B\u060C\u061F]"])`[,.:?!%+/#'\u2019\u2026\u00BB\u201D\u201C\u300D\u300F\u3001\u3002\uFF0C\uFF1A\uFF01\uFF1F\uFF05\uFF0B\u060C\u061F]`), Rt = `${je}(?:${vt}?${je})*`, rn = String.raw((0, import_chunk_w1d7ygsk.jE)(["(?:\\(", "\\)|\uFF08", "\uFF09)"])`(?:\(${0}\)|\uFF08${0}\uFF09)`, Rt, Rt), sn = new RegExp(`^(?:${ln}?${Rt}${rn}?|${rn})${un}*$`, "u"), an = `(?:${je}(?:${vt}(?=${je}))?)*`, no = new RegExp(`^${ln}?(?:(?=${je}|[(\uFF08])${an}(?:[(\uFF08]${an}[)\uFF09]?)?${un}*)?`, "u"), oo = new RegExp(`^${vt}$`, "u"), dn = /* @__PURE__ */ new Set(["&", "\uFF06", "-", "\u2013", "\u2014", ":", "\uFF1A"]), bt = /* @__PURE__ */ new Set(["!", "?", "\uFF01", "\uFF1F"]);
function cn(e) {
  if (e.trim() === "") return "is empty";
  if (/^\d{1,9}\.(?: |$)/.test(e)) return "starts like a numbered list, whose number an app may not show";
  let r = e.split(" ");
  for (let [o, a] of r.entries()) {
    if (a === "") return "starts or ends with a blank, or holds two in a row";
    if (dn.has(a) || bt.has(a)) {
      if (o > 0 && sn.test(r[o - 1]) && (o < r.length - 1 ? dn : bt).has(a)) continue;
      return `has ${We(a)} on its own, which may only ${bt.has(a) ? "end the label, right after a word" : "stand between two words"}`;
    }
    if (/www\./iu.test(a)) return "has www., which an app may draw as a link";
    if (/[:\uFF1A].*[:\uFF1A]/u.test(a)) return "has two colons in one word, which an app may read as the name of an emoji";
    if (sn.test(a)) continue;
    let g = no.exec(a)?.[0] ?? "", S = Array.from(a.slice(g.length)), y = S[0] !== void 0 && /[\p{L}\p{N}]/u.test(S[0]) ? Array.from(g).at(-1) : S[0];
    if (/[()\uFF08\uFF09]/u.test(y ?? a)) return 'has a bracket out of place: "(" and ")" go around one word with no blank in it, as in "Yes (safer)", and only signs that may end a word follow ")"';
    if (!/[\p{L}\p{N}]/u.test(g)) return `has a word that starts with ${We(y ?? a)}: start each word with a letter or digit`;
    if (!/[\p{L}\p{N}]/u.test(S.join(""))) return `has ${We(y)} at the end of a word, where only , . : ? ! % + / # ' or a bracketed word may stand`;
    return y !== void 0 && oo.test(y) ? `has ${We(y)} next to another sign inside a word, where signs stand one at a time` : `has ${We(y)} inside a word, where only one of ' - / . _ , : may stand, between two letters or digits`;
  }
  return;
}
function We(e = "") {
  let r = `U+${(e.codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0")}`;
  if (/^[!#-~]$/.test(e)) return `"${e}"`;
  return /[\p{C}\p{Z}\p{M}"]/u.test(e) ? `${r}${e === "\xA0" ? " (a no-break space)" : ""}` : `"${e}" (${r})`;
}
var Hqo = 24, Ct = /[^\p{L}\p{N}]/gu, mn = String.raw`\uFFFC\u{1D159}\u{13441}\u{13442}\u{16910}\u{16FE4}`, ro = new RegExp(`[${import_chunk_kx2fp6pc.nw}${mn}]`, "u"), _n = new RegExp(`[${mn}]+`, "gu"), QTn = 500, so = /-{4,5}[ \t]*BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY[\s\S]*$/i, io = new RegExp("\\p{M}+", "gu"), fn = /(?:\[REDACTED\]|<(?:token|jwt|redacted)>)(?=[\w.~+/=%-]{8})/g, ao = "antml:", lo = new RegExp(`(?:</[\\w.:-]*>?\\s*)?</?(?:${ao}\\w+|recap|ask|actions|blocked|outcome|failures|not_verified|needs_user|next_recap|next_ask|next_brief|next_actions|next|parameter|invoke)\\b[\\s\\S]*$`), uo = [cn, (e) => (0, import_chunk_bq31aqv6.bWe)(e.replace(Ct, "").toUpperCase()) === e.replace(Ct, "").toUpperCase() ? void 0 : "spells ultracode, ultraplan, ultrareview or ultrathink, in any case or width, once blanks and punctuation are left out: they change how a turn runs, and only the user may type them", (e) => (0, import_chunk_bzyb60p0.AGa)(e.replace(Ct, "").toUpperCase()) ? "has letters that, once blanks and punctuation are left out, spell the start of a code or link that only the user may paste: use other words" : void 0, (e) => ro.test(e) ? "holds a line break, a tab, or a character that may not show as written" : void 0, (e) => /\S\s{2,}\S/.test(e) ? "holds two blanks in a row" : void 0];
function fJs(e) {
  return e.length > Hqo ? [`is longer than ${Hqo} characters, the longest allowed`] : uo.flatMap((r) => r(e) ?? r(e.normalize("NFKD"))?.replace(/^/, "(once decomposed, NFKD) ") ?? []);
}
function pJs({ recap: e, ask: r, blocked: o, actions: a }) {
  let g = pn(r ?? ""), S = a.map((A) => {
    let k = "label" in A ? A.label : void 0;
    return typeof k === "string" ? Ot(k) === k ? [{ label: k }] : [] : "action" in A ? [{ action: A.action }] : [];
  }), y = S[0]?.length === 0 ? [] : S.flat(), [h, R] = y, C = h !== void 0 && R !== void 0 && "label" in h && "label" in R && h.label === R.label;
  return { recap: pn(e), ...g !== "" && { ask: g }, blocked: (0, import_chunk_xcgcdx61.uO)(o) === true, actions: g === "" ? [] : C ? y.slice(0, 1) : y };
}
function gn(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e) || typeof e.recap !== "string") return;
  try {
    return pJs({ recap: e.recap, ask: typeof e.ask === "string" ? e.ask : void 0, blocked: e.blocked, actions: (Array.isArray(e.actions) ? e.actions : []).map((r) => {
      let o = (0, import_chunk_ma3kja9f.T)(r) ? r.label : void 0;
      return { label: typeof o === "string" && fJs(o).length === 0 ? o : void 0 };
    }) });
  } catch (r) {
    (0, import_chunk_sah8dzn4.j6e)(r);
    return;
  }
}
function pn(e) {
  let r = Ot(e), o = (0, import_chunk_7cfjrnwy.ee)(r, 4 * QTn), a = It(o), g = o.length < r.length || a.length > QTn, S = yn(g ? It((0, import_chunk_7cfjrnwy.ee)(a, QTn - 1)) : a);
  return (0, import_chunk_mh32mevx.MZ)(S) ? g ? `${S}\u2026` : S : "";
}
function yn(e) {
  let r = (0, import_chunk_p1ewvgeh.oEr)(e);
  return r === e ? e : yn(It(r));
}
function Ot(e) {
  let r = Et(e), o = r.replace(/[^\S\uFEFF]+/g, " ").replace(fn, (y) => y.startsWith("[") ? y.toLowerCase() : y.toUpperCase()), a = (0, import_chunk_p1ewvgeh.b_)((0, import_chunk_wbk1hf21.Dr)(o.replace(new RegExp("\\p{Cs}", "gu"), "\u200B"))), g = a === o || r.length > 4 * QTn ? a : Et(a), S = (0, import_chunk_p1ewvgeh.b_)((0, import_chunk_kx2fp6pc.FE)(g, "").replace(_n, "").replace(io, ""));
  return S !== o && (Et(S) !== S || S.search(fn) >= 0) ? "" : r;
}
function Et(e) {
  return (0, import_chunk_sah8dzn4.z8)((0, import_chunk_xfj2cwfv.xde)((0, import_chunk_sah8dzn4.ute)((0, import_chunk_sah8dzn4.t3n)(e)))).replace(so, "");
}
function It(e) {
  let r = e;
  for (let o = 2 * e.length + 2; o > 0; o--) {
    let a = Ot((0, import_chunk_mh32mevx.HS)((0, import_chunk_p1ewvgeh.b_)((0, import_chunk_7cfjrnwy.Wr)((0, import_chunk_kx2fp6pc.FE)(r, " ", { keepSpelledJoiners: true }).replace(_n, " "))))).replace(lo, "");
    if (a === r) return r;
    r = a;
  }
  return "";
}
(0, import_chunk_adx6804h.B)();
var co = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), non_execution_kind: (0, import_chunk_adx6804h.F)(import_chunk_3grsnd7a.fhn) })), Fs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), permission_decision: (0, import_chunk_adx6804h.c)({ decision: (0, import_chunk_adx6804h.v)("reject"), reason_type: (0, import_chunk_adx6804h.v)("classifier") }) }));
function fo(e, r, o) {
  let a = o.filter((h) => h.type === "tool_result"), [g] = a, y = Array.isArray(r) && a.length === 1 && g?.is_error === true ? r : [];
  for (let h of y) {
    let R = e.safeParse(h);
    if (R.success && R.data.id === g?.tool_use_id) return R.data;
  }
  return;
}
function Dqo(e, r) {
  return fo(co(), e, r)?.non_execution_kind;
}
function mJs(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 100 && e <= 599;
}
function W7t(e) {
  return e.flatMap((r) => {
    switch (r.type) {
      case "assistant":
        if (typeof r.local_command_source === "string") return [{ type: "system", subtype: "local_command", content: r.local_command_source, level: "info", timestamp: r.timestamp ?? (/* @__PURE__ */ new Date()).toISOString(), uuid: r.uuid ?? (0, import_crypto.randomUUID)(), isMeta: false, ...r.local_command_run !== void 0 && { commandRun: { command: r.local_command_run.command, args: r.local_command_run.args, ...typeof r.local_command_run.plugin === "string" && { plugin: r.local_command_run.plugin } } }, ...(0, import_chunk_xfj2cwfv.rHl)(r.local_command_outcome) && { commandOutcome: { kind: r.local_command_outcome.kind, ...typeof r.local_command_outcome.suggestion === "string" && { suggestion: r.local_command_outcome.suggestion } } } }];
        if (r.is_meta === true) return [];
        let o = (0, import_chunk_px0hhsq7.T$l)(r.message.content), a = o === r.message.content ? r.message : { ...r.message, content: o }, g = (0, import_chunk_bzyb60p0.Oir)(r.wire_tool_inputs, a.content, r.batch_tool_uses), S = (0, import_chunk_bzyb60p0.Hir)(r.wire_ingest_context, g, a.content), y = a.content, h = typeof y === "string" ? { ...a, content: (0, import_chunk_bzyb60p0.s_i)(y) } : a, R = h.id ? h : { ...h, id: (0, import_crypto.randomUUID)() };
        return [{ type: "assistant", message: r.error === "verification_required" ? hJs(R) : (0, import_chunk_qjd2kk5d.Dtr)(r) ? { ...R, content: (0, import_chunk_qjd2kk5d.p3r)(R.content) } : R, uuid: r.uuid ?? (0, import_crypto.randomUUID)(), requestId: void 0, timestamp: r.timestamp ?? (/* @__PURE__ */ new Date()).toISOString(), ...r.resumed_from_incomplete_thinking === true && { resumedFromIncompleteThinking: true }, ...r.is_virtual === true && { isVirtual: true }, ...r.aborted === true && { isAbortedMidStream: true }, ...(0, import_chunk_qjd2kk5d.f3r)(r) && { isApiErrorMessage: true }, ...(0, import_chunk_qjd2kk5d.Dtr)(r) && { sessionFailureNotice: true }, ...mJs(r.api_error_status) && { apiErrorStatus: r.api_error_status }, ...r.api_error !== void 0 && { apiError: r.api_error }, ...r.api_error_params !== void 0 && { apiErrorParams: r.api_error_params }, ...r.api_error_code !== void 0 && { apiErrorCode: r.api_error_code }, ...r.api_error_type !== void 0 && { apiErrorType: r.api_error_type }, ...r.error !== void 0 && { error: r.error }, ...r.batch_tool_uses !== void 0 && r.batch_tool_uses.length > 0 && { batchToolUses: r.batch_tool_uses }, ...g !== void 0 && { wireToolInputs: g }, ...S !== void 0 && { wireIngestContext: S } }];
      case "user": {
        let C = r.message.content, A = Array.isArray(C) ? Dqo(r.tool_result_meta, C) : void 0;
        return [{ type: "user", message: r.message, uuid: r.uuid ?? (0, import_crypto.randomUUID)(), timestamp: r.timestamp ?? (/* @__PURE__ */ new Date()).toISOString(), isMeta: r.isSynthetic, ...r.is_virtual === true && { isVirtual: true }, ...A !== void 0 && { remoteToolDenialKind: A } }];
      }
      case "system":
        if (r.subtype === "compact_boundary") return [{ type: "system", content: "Conversation compacted", level: "info", subtype: "compact_boundary", compactMetadata: Lqo(r.compact_metadata), uuid: r.uuid, timestamp: (/* @__PURE__ */ new Date()).toISOString(), remoteSourced: true }];
        return [];
      default:
        return [];
    }
  });
}
function hJs(e) {
  let r = `${import_chunk_865at33z.Vc}: `;
  return { ...e, content: e.content.map((o) => {
    if (o.type !== "text") return o;
    let a = o.text.startsWith(r), g = (0, import_chunk_865at33z.MCo)(a ? o.text.slice(r.length) : o.text);
    if (g === void 0) return { ...o, text: a ? r.trimEnd() : "" };
    return { ...o, text: a ? `${r}${g}` : g };
  }) };
}
function j7t(e) {
  return e.isMeta || e.isVisibleInTranscriptOnly || e.isCompactSummary || void 0;
}
function gJs(e) {
  if (e.origin?.kind !== "plugin" || e.origin.asUser === true) return {};
  try {
    let r = (0, import_chunk_bzyb60p0.iG)(e.origin.name), o = (0, import_chunk_xfj2cwfv.fee)(e.message.content) ?? "", a = (0, import_chunk_q3a5dy2r.tVn)(o, e.pluginPrompt);
    if (a?.label === r) return { plugin_prompt: { name: r, text: a.text } };
    let g = (0, import_chunk_bzyb60p0.Ldr)(o);
    return g === null ? {} : { plugin_prompt: { name: r, text: (0, import_chunk_bzyb60p0.Ndr)(g) } };
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), {};
  }
}
function xtr(e) {
  let { preservedSegment: r, preservedMessages: o } = e;
  return { trigger: e.trigger, pre_tokens: e.preTokens, ...e.postTokens !== void 0 && { post_tokens: e.postTokens }, ...e.cumulativeDroppedTokens !== void 0 && { cumulative_dropped_tokens: e.cumulativeDroppedTokens }, ...e.durationMs !== void 0 && { duration_ms: e.durationMs }, ...e.userContext !== void 0 && { user_context: e.userContext }, ...e.messagesSummarized !== void 0 && { messages_summarized: e.messagesSummarized }, ...e.precomputed !== void 0 && { precomputed: e.precomputed }, ...e.preCompactDiscoveredTools !== void 0 && { pre_compact_discovered_tools: e.preCompactDiscoveredTools }, ...e.preCompactArtifactReadVersions !== void 0 && { pre_compact_artifact_read_versions: e.preCompactArtifactReadVersions }, ...r && { preserved_segment: { head_uuid: r.headUuid, anchor_uuid: r.anchorUuid, tail_uuid: r.tailUuid } }, ...o && { preserved_messages: { anchor_uuid: o.anchorUuid, uuids: o.uuids, ...o.allUuids !== void 0 && { all_uuids: o.allUuids } } } };
}
function Lqo(e) {
  let { preserved_segment: r, preserved_messages: o } = e;
  return { trigger: e.trigger, preTokens: e.pre_tokens, ...e.post_tokens !== void 0 && { postTokens: e.post_tokens }, ...e.cumulative_dropped_tokens !== void 0 && { cumulativeDroppedTokens: e.cumulative_dropped_tokens }, ...e.duration_ms !== void 0 && { durationMs: e.duration_ms }, ...e.user_context !== void 0 && { userContext: e.user_context }, ...e.messages_summarized !== void 0 && { messagesSummarized: e.messages_summarized }, ...e.precomputed !== void 0 && { precomputed: e.precomputed }, ...e.pre_compact_discovered_tools !== void 0 && { preCompactDiscoveredTools: [...e.pre_compact_discovered_tools] }, ...e.pre_compact_artifact_read_versions !== void 0 && { preCompactArtifactReadVersions: e.pre_compact_artifact_read_versions.map((a) => ({ ...a })) }, ...r && { preservedSegment: { headUuid: r.head_uuid, anchorUuid: r.anchor_uuid, tailUuid: r.tail_uuid } }, ...o && { preservedMessages: { anchorUuid: o.anchor_uuid, uuids: [...o.uuids], ...o.all_uuids !== void 0 && { allUuids: [...o.all_uuids] } } } };
}
function s3r(e) {
  return { type: "system", subtype: "compact_boundary", content: "Conversation compacted", level: "info", compactMetadata: Lqo(e.compact_metadata), ...e.logical_parent_uuid !== void 0 && { logicalParentUuid: e.logical_parent_uuid }, uuid: e.uuid, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
}
function i3r(e) {
  return { type: "system", subtype: "model_refusal_fallback", content: e.content, level: "warning", trigger: e.trigger, direction: e.direction, ...e.scope !== void 0 && { scope: e.scope }, originalModel: e.original_model, fallbackModel: e.fallback_model, requestId: e.request_id, apiRefusalCategory: e.api_refusal_category, apiRefusalExplanation: e.api_refusal_explanation, ...e.api_refusal_cyber_verification !== void 0 && { apiRefusalCyberVerification: e.api_refusal_cyber_verification }, ...e.saw_cyber_refusal && { sawCyberRefusal: true }, ...e.retracted_message_uuids !== void 0 && { retractedMessageUuids: e.retracted_message_uuids }, ...e.refused_user_message_uuid !== void 0 && { refusedUserMessageUuid: e.refused_user_message_uuid }, ...e.provisional && { provisional: e.provisional }, isMeta: false, uuid: e.uuid, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
}
function a3r(e) {
  return { type: "system", subtype: "model_refusal_no_fallback", content: e.content, level: "warning", originalModel: e.original_model, requestId: e.request_id, apiRefusalCategory: e.api_refusal_category, apiRefusalExplanation: e.api_refusal_explanation, refusedUserMessageUuid: e.refused_user_message_uuid, isMeta: false, uuid: e.uuid, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
}
function l3r(e) {
  return { type: "system", subtype: "model_fallback", content: e.content, level: "warning", trigger: e.trigger, originalModel: e.original_model, fallbackModel: e.fallback_model, isMeta: false, uuid: e.uuid, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
}
function G7t(e) {
  return { type: "system", subtype: "model_consent_fallback", content: e.content, level: "warning", choice: e.choice, originalModel: e.original_model, originalModelName: (0, import_chunk_865at33z.Jfn)(e.original_model_name) ? e.original_model_name : void 0, fallbackModel: e.fallback_model, persistedAsDefault: e.persisted_as_default, isMeta: false, uuid: e.uuid, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
}
var mo = { low: true, medium: true, high: true, immediate: true }, _o = new Set(Object.keys(mo)), go = 6e4, yo = 1e3, ho = 256, wo = 64;
function Nqo(e) {
  return typeof e.key === "string" && typeof e.text === "string" && _o.has(e.priority);
}
var To = 3;
function Fqo(e, r) {
  if (e.current?.key === r || e.queue.some((a) => a.key === r)) return null;
  let o = e.queue.filter((a) => a.key.startsWith("remote:"));
  return o.length >= To ? o[0].key : null;
}
function Ptr(e, r = "local") {
  let o = Number.isFinite(e.timeout_ms) ? Math.min(Math.max(e.timeout_ms, 0), go) : void 0;
  return { key: r === "remote" ? `remote:${e.key.slice(0, ho)}` : e.key, text: (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_wbk1hf21.Dr)(e.text), yo).replace(/\s*[\r\n\v\f]+\s*/g, " "), priority: r === "remote" && e.priority === "immediate" ? "high" : e.priority, ...typeof e.color === "string" && e.color.length <= wo && !(e.color in Object.prototype) && { color: e.color }, ...o !== void 0 && { timeoutMs: o } };
}
function ot(e, r) {
  let o = r === void 0 ? e.wireToolInputs : (0, import_chunk_bzyb60p0.W2a)(e.wireToolInputs, r, e.batchToolUses), a = { aborted: e.isAbortedMidStream ? true : void 0, is_api_error_message: e.isApiErrorMessage === true ? true : void 0, api_error_status: e.apiErrorStatus, api_error: e.apiError, api_error_params: e.apiErrorParams, api_error_code: e.apiErrorCode, api_error_type: e.apiErrorType, api_error_origin: e[import_chunk_865at33z.TNe], refused_message_id: e.refusedMessageId, resumed_from_incomplete_thinking: e.resumedFromIncompleteThinking === true ? true : void 0, is_virtual: e.isVirtual === true ? true : void 0, batch_tool_uses: e.batchToolUses !== void 0 && e.batchToolUses.length > 0 ? e.batchToolUses : void 0, wire_tool_inputs: o !== void 0 && Object.keys(o).length > 0 ? o : void 0, wire_ingest_context: o !== void 0 && e.wireIngestContext !== void 0 ? Ao((0, import_chunk_gd77dyw4.Hr)(e.wireIngestContext, (g, S) => Object.hasOwn(o, S))) : void 0 };
  return (0, import_chunk_gd77dyw4.Hr)(a, (g) => g !== void 0);
}
function Ge(e, r) {
  if (!Array.isArray(e)) return {};
  let o = (0, import_chunk_bzyb60p0.d6a)(e);
  if (o.length === 0) return {};
  let a = (0, import_chunk_3t7ve0wy.fh)() === "claude-vscode" ? on(r) : void 0;
  return { narration_block_indexes: o, ...a !== void 0 && { narration_hint: a } };
}
function Pt(e, r) {
  if (!Array.isArray(r) || e.message.content.length !== 1 || r.length !== 1 || r[0]?.type !== "thinking") return {};
  let { thinkingDurationMs: o, thinkingDisplay: a } = e;
  return { ...o !== void 0 && Number.isSafeInteger(o) && o >= 1 && { thinking_duration_ms: o }, ...typeof a === "string" && { thinking_display: a } };
}
function Otr(e, r) {
  if (e[import_chunk_865at33z.sRo] === true) return;
  let o = (0, import_chunk_s3d8sr7p.stt)(e, r.uuid);
  if (o === void 0) return;
  return { type: "user", message: { role: "user", content: o.content }, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: o.uuid, timestamp: r.timestamp, isReplay: true, ...o.isMeta && { isSynthetic: true }, ...e.fileAttachments?.length && { file_attachments: e.fileAttachments }, ...o.origin && { origin: o.origin } };
}
function $qo(e, r) {
  return { type: "user", message: { ...e.message, content: (0, import_chunk_wbk1hf21.Dr)(r) }, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: e.uuid, timestamp: e.timestamp, isReplay: !e.isCompactSummary, isSynthetic: j7t(e) };
}
function ZTn(e, r) {
  return e.flatMap((o) => {
    switch (o.type) {
      case "assistant": {
        if ((0, import_chunk_r3kja8v6.ue)() && o.visibleToRemoteClients === true) return require("/$bunfs/root/chunk-q6j2j10z.js").remoteClientAssistantFrames(o, (S) => ZTn([S], r));
        let a = Ft(ko(o), o.requestedModel), g = (0, import_chunk_bzyb60p0.vdr)(a.content, r, { publishMarkFrom: o });
        return [{ type: "assistant", message: a, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: o.uuid, timestamp: o.timestamp, error: o.error, ...o.requestId !== void 0 && { request_id: o.requestId }, ...ot(o), ...Ge(a.content, a.model), ...Pt(o, a.content), ...g.length > 0 && { tool_use_meta: g } }];
      }
      case "user": {
        if ((0, import_chunk_r3kja8v6.ue)() && (o.isVirtual === true || o.hiddenToolUseIds !== void 0)) return require("/$bunfs/root/chunk-q6j2j10z.js").remoteClientUserFrames(o, (R) => ZTn([R], r), r);
        let a = (0, import_chunk_bzyb60p0.qyt)(o);
        switch (a) {
          case "terminal-hint":
            if (typeof o.message.content === "string") return [$qo(o, o.message.content)];
            break;
          case "stdout":
          case "stderr":
          case void 0:
            break;
          default:
        }
        let g = (0, import_chunk_bzyb60p0.vto)(o), S = (0, import_chunk_bzyb60p0.Cza)(o), y = gn(S?.nextStep), h = (0, import_chunk_bzyb60p0.Tto)(o, o.toolUseResult, S === void 0 || o.toolUseResult === void 0 ? void 0 : { _meta: S, ...y !== void 0 && { nextStep: y } });
        return [{ type: "user", message: o.message, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null, uuid: o.uuid, timestamp: o.timestamp, isSynthetic: j7t(o), ...false, ...h !== void 0 && { tool_use_result: h }, ...g.length > 0 && { tool_result_meta: g }, ...o.origin !== void 0 && { origin: o.origin }, ...gJs(o), ...o.refusedMessageId !== void 0 && { refused_message_id: o.refusedMessageId }, ...(0, import_chunk_f9x2f6cx.rpt)(o) && { is_virtual: true } }];
      }
      case "system":
        if (o.subtype === "compact_boundary" && o.compactMetadata) return [{ type: "system", subtype: "compact_boundary", session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: o.uuid, compact_metadata: xtr(o.compactMetadata) }];
        if (o.subtype === "local_command" && (o.content.includes(`<${import_chunk_k449cc64.Tf}>`) || o.content.includes(`<${import_chunk_k449cc64.Ky}>`))) {
          let a = Itr(o.content, o.uuid, o.timestamp, o.contextUsage, o.commandRun, o.usageReport, o.commandOutcome);
          return a ? [a] : [];
        }
        if (o.subtype === "model_consent_fallback") return [{ type: "system", subtype: "informational", content: o.content, level: o.level, uuid: o.uuid, session_id: (0, import_chunk_f9x2f6cx.W)() }];
        return [];
      case "attachment":
        if (o.attachment.type === "hook_system_message") return [{ type: "assistant", message: (0, import_chunk_bzyb60p0.La)({ content: At(o.attachment) }).message, parent_tool_use_id: null, is_meta: true, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: o.uuid, timestamp: o.timestamp }];
        if (o.attachment.type === "queued_command") {
          let a = Otr(o.attachment, o);
          return a ? [a] : [];
        }
        if (o.attachment.type === "tool_host_result_lines") return [d3r(o.attachment, o.uuid, (0, import_chunk_f9x2f6cx.W)())];
        return [];
      default:
        return [];
    }
  });
}
function d3r(e, r, o) {
  return { type: "system", subtype: "tool_host_result", tool_use_id: e.toolUseID, host: { name: e.host, ...e.workingDir !== void 0 && { working_dir: e.workingDir } }, ...e.disposition !== void 0 && { disposition: e.disposition }, ...e.label !== void 0 && { label: e.label }, ...e.unverified === true && { unverified: true }, lines: e.lines, uuid: r, session_id: o };
}
function Itr(e, r, o, a, g, S, y) {
  let h = (0, import_chunk_wbk1hf21.Dr)(e), R = new RegExp(`<(${import_chunk_k449cc64.Tf}|${import_chunk_k449cc64.Ky})>`, "g"), C = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), k = "", P = 0;
  for (let H = R.exec(h); H !== null && C.size < 2; H = R.exec(h)) {
    let I = H[1];
    if (A.has(I)) continue;
    let L = h.indexOf(`</${I}>`, R.lastIndex);
    if (L === -1) {
      A.add(I);
      continue;
    }
    let O = L + `</${I}>`.length;
    if (!C.has(I)) C.add(I), k += h.slice(P, H.index) + (0, import_chunk_hr2stdq7.ty)(h.slice(R.lastIndex, L)), P = O;
    R.lastIndex = O;
  }
  let D = (k + h.slice(P)).trim();
  if (D === "") return null;
  return { type: "assistant", message: { ...(0, import_chunk_bzyb60p0.La)({ content: D }).message, stop_reason: "end_turn", stop_sequence: null }, parent_tool_use_id: null, local_command_source: e, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: r, timestamp: o, ...a !== void 0 && { context_usage: a }, ...S !== void 0 && { usage_report: S }, ...g !== void 0 && { local_command_run: { command: g.command, args: g.args, ...g.plugin !== void 0 && { plugin: g.plugin } } }, ...y !== void 0 && { local_command_outcome: y } };
}
function OHa(e) {
  return { type: "system", subtype: "model_consent_fallback", choice: e.choice, original_model: e.originalModel, original_model_name: e.originalModelName, fallback_model: e.fallbackModel, persisted_as_default: e.persistedAsDefault, content: e.content };
}
function IHa(e) {
  return { type: "tool_use_summary", summary: e.summary, preceding_tool_use_ids: e.precedingToolUseIds };
}
function MHa(e) {
  return { status: e.status, resetsAt: e.resetsAt ?? null, rateLimitType: e.rateLimitType ?? null, isUsingOverage: e.isUsingOverage ?? false };
}
function HHa(e, r, o = {}) {
  let a = (0, import_chunk_bzyb60p0.rZr)(e, o);
  if (!a) return;
  return { type: "rate_limit_event", rate_limit_info: a, uuid: (0, import_crypto.randomUUID)(), session_id: r };
}
function DHa(e, { unifiedRateLimitFallbackAvailable: r, upgradePaths: o }) {
  return { status: e.status, unifiedRateLimitFallbackAvailable: r, ...o !== void 0 && { upgradePaths: o }, ...e.resetsAt !== void 0 && { resetsAt: e.resetsAt }, ...e.rateLimitType !== void 0 && { rateLimitType: e.rateLimitType }, ...e.utilization !== void 0 && { utilization: e.utilization }, ...e.overageStatus !== void 0 && { overageStatus: e.overageStatus }, ...e.overageResetsAt !== void 0 && { overageResetsAt: e.overageResetsAt }, ...e.overageDisabledReason !== void 0 && { overageDisabledReason: e.overageDisabledReason }, ...e.limitScope !== void 0 && { overageScope: e.limitScope }, ...e.memberSpendLimit !== void 0 && { memberSpendLimit: e.memberSpendLimit }, ...e.isUsingOverage !== void 0 && { isUsingOverage: e.isUsingOverage }, ...e.overageInUse !== void 0 && { overageInUse: e.overageInUse }, ...e.surpassedThreshold !== void 0 && { surpassedThreshold: e.surpassedThreshold }, ...e.dailyCapPaused === true && { dailyCapPaused: true }, ...e.rateLimitGraceActive === true && { rateLimitGraceActive: true }, ...e.overagePeriodMonthly !== void 0 && { overagePeriodMonthly: { utilization: e.overagePeriodMonthly.utilization } }, ...e.overagePeriodChannel !== void 0 && { overagePeriodChannel: { utilization: e.overagePeriodChannel.utilization } }, ...e.errorCode !== void 0 && { errorCode: e.errorCode }, ...e.canUserPurchaseCredits !== void 0 && { canUserPurchaseCredits: e.canUserPurchaseCredits }, ...e.hasChargeableSavedPaymentMethod !== void 0 && { hasChargeableSavedPaymentMethod: e.hasChargeableSavedPaymentMethod } };
}
var _Js = { status: "allowed", isUsingOverage: false };
function LHa(e) {
  return e.status === "allowed" && e.resetsAt === void 0 && e.isUsingOverage !== true && e.overageInUse !== true && e.rateLimitGraceActive !== true;
}
function So(e, r = Date.now() / 1e3) {
  let o = Mo(e, r), a = e.resetsAt !== void 0 && e.resetsAt <= r, g = e.overageResetsAt !== void 0 && e.overageResetsAt <= r, S = e.status === "rejected" && e.overageStatus === "rejected" && g;
  if (a || S) return { info: { ..._Js, ...o.unifiedWindows !== void 0 && { unifiedWindows: o.unifiedWindows } }, degradation: "clear" };
  if (g) {
    let { overageStatus: y, overageResetsAt: h, overageDisabledReason: R, limitScope: C, memberSpendLimit: A, adminRequestOffer: k, ...P } = o;
    return { info: { ...P, isUsingOverage: P.isUsingOverage ?? false }, degradation: "overage_strip" };
  }
  return { info: o, degradation: "none" };
}
function NHa(e, r = Date.now() / 1e3) {
  let o = e.at(-1);
  return o === void 0 ? void 0 : So(o, r);
}
function Ft(e, r) {
  return r !== void 0 && (0, import_chunk_zmb62hr5.jM)(r) && typeof e.model === "string" && e.model.startsWith((0, import_chunk_zmb62hr5.gF)(r)) ? { ...e, model: r } : e;
}
function ko(e) {
  let r = e.message.content;
  if (!Array.isArray(r)) return e.message;
  let o = (0, import_chunk_p1ewvgeh.VEt)(r).map((a) => {
    if (a.type !== "tool_use") return a;
    if (a.name === import_chunk_bkfd2ttj._d && !(0, import_chunk_bzyb60p0.P4e)()) {
      (0, import_chunk_p1ewvgeh.KH)((0, import_chunk_p1ewvgeh.xC)());
      let g = (0, import_chunk_p1ewvgeh.Tle)();
      if (g) return { ...a, input: { ...a.input, plan: g } };
    }
    return a;
  });
  return { ...e.message, content: o };
}
function Ao(e) {
  return Object.keys(e).length > 0 ? e : void 0;
}
function Mo(e, r) {
  let { unifiedWindows: o, ...a } = e;
  if (o === void 0) return e;
  let g = (0, import_chunk_gd77dyw4.Hr)(o, (y) => y !== void 0 && y.resetsAt > r), S = Object.keys(g).length;
  if (S === 0) return a;
  return S === Object.keys(o).length ? e : { ...a, unifiedWindows: g };
}
var bo = 10;
function FHa(e, r = null) {
  if (!e) return false;
  if (e.type === "assistant") {
    let o = (0, import_chunk_qwbhh2k3.lL)(e.message.content);
    return o?.type === "text" || o?.type === "thinking" || o?.type === "redacted_thinking";
  }
  if ((0, import_chunk_bzyb60p0.RHe)(e)) return true;
  return r === "end_turn";
}
function $Ha({ trailing: e, preceding: r, terminalReason: o, retractionExhausted: a }) {
  return e?.type === "assistant" && e.isApiErrorMessage === true && e.error === "server_error" && o === "completed" && !a && r !== void 0 && (0, import_chunk_bzyb60p0.RHe)(r) && (0, import_chunk_1hg0ytx8.v5e)(r) !== false;
}
function UHa(e, r) {
  let o = (0, import_chunk_qwbhh2k3.lL)(e.message.content), a = (0, import_chunk_qwbhh2k3.lL)(r?.message.content);
  return o?.type === "text" && !import_chunk_0ha8wex8.XNe.has(o.text) && a?.type === "text" ? a.text : void 0;
}
function yJs(e) {
  let r = (0, import_chunk_k449cc64._1e)(), o = e ? r.lastIndexOf(e) + 1 : 0;
  return r.slice(o).map((a) => a.error);
}
function BHa(e, r, o) {
  return [SJs(e, r), ...yJs(o)];
}
function SJs(e, r) {
  let o = e?.type ?? "undefined", a = e?.type === "assistant" ? (0, import_chunk_qwbhh2k3.lL)(e.message.content)?.type ?? "none" : "n/a";
  return `[ede_diagnostic] result_type=${o} last_content_type=${a} stop_reason=${r}`;
}
function bJs(e) {
  if (e.type !== "assistant" && e.type !== "user") return false;
  let r = e.message.content;
  if (!Array.isArray(r)) return false;
  let o = r[0];
  return o?.type === "tool_use" || o?.type === "tool_result";
}
function c3r(e, r) {
  return e.enabled && (e.forwardText || bJs(r));
}
function* Mtr(e, r) {
  let o = e.data.agentType, a = e.data.description, g = e.data.message, S = (0, import_chunk_w50zedgp.Ng)() && (g.type === "assistant" || g.type === "user") && g.isVirtual === true, y = g.type === "user" ? (0, import_chunk_bzyb60p0.vto)(g).flatMap(({ id: h, non_execution_kind: R, permission_decision: C }) => C ? [{ id: h, ...R && C.decision === "reject" && g.toolDenialAfterRun !== true && { non_execution_kind: R }, permission_decision: C }] : []) : [];
  for (let h of (0, import_chunk_bzyb60p0.Mg)([g.type === "user" && (0, import_chunk_0ha8wex8.e3)(g) ? (0, import_chunk_0ha8wex8.Ymn)(g) : g])) switch (h.type) {
    case "assistant":
      if (!(0, import_chunk_bzyb60p0.bQ)(h)) break;
      {
        let R = (0, import_chunk_bzyb60p0.vdr)(h.message.content, r), C = (0, import_chunk_p1ewvgeh.VEt)(h.message.content), A = e.data.message.type === "assistant" ? e.data.message : void 0;
        yield { type: "assistant", message: C === h.message.content ? h.message : { ...h.message, content: C }, parent_tool_use_id: e.parentToolUseID, agent_id: e.data.agentId, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: h.uuid, timestamp: h.timestamp, error: h.error, ...h.requestId !== void 0 && { request_id: h.requestId }, ...o !== void 0 && { subagent_type: o }, ...a !== void 0 && { task_description: a }, ...h.isApiErrorMessage === true && { is_api_error_message: true }, ...h.apiError !== void 0 && { api_error: h.apiError }, ...h.apiErrorParams !== void 0 && { api_error_params: h.apiErrorParams }, ...h.apiErrorCode !== void 0 && { api_error_code: h.apiErrorCode }, ...h.apiErrorType !== void 0 && { api_error_type: h.apiErrorType }, ...A?.[import_chunk_865at33z.TNe] !== void 0 && { api_error_origin: A[import_chunk_865at33z.TNe] }, ...Ge(C, h.message.model), ...R.length > 0 && { tool_use_meta: R }, ...S && { is_virtual: true } };
      }
      break;
    case "user": {
      let R = (0, import_chunk_bzyb60p0.Tfi)(y, h.message.content);
      yield { type: "user", message: h.message, parent_tool_use_id: e.parentToolUseID, agent_id: e.data.agentId, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: h.uuid, timestamp: h.timestamp, isSynthetic: j7t(h), ...false, tool_use_result: !h.mcpMeta && h.toolUseResult === void 0 ? (0, import_chunk_bzyb60p0.JYo)(h) : (0, import_chunk_bzyb60p0.Tto)(h, h.toolUseResult, h.mcpMeta), ...R.length > 0 && { tool_result_meta: R }, ...h.origin && { origin: h.origin }, ...o !== void 0 && { subagent_type: o }, ...a !== void 0 && { task_description: a }, ...S && { is_virtual: true } };
      break;
    }
  }
}
function Ro(e) {
  let r = e.message.content, o = Array.isArray(r) ? r.find((a) => a.type === "tool_result") : void 0;
  return o?.type === "tool_result" ? (0, import_chunk_bzyb60p0.Bqa)(o.tool_use_id, e.uuid) : void 0;
}
function* RO(e, r) {
  switch (e.type) {
    case "assistant": {
      let o = e.supersedesUuids;
      for (let a of (0, import_chunk_bzyb60p0.Mg)([e])) {
        if (!(0, import_chunk_bzyb60p0.bQ)(a)) continue;
        let g = o;
        o = void 0;
        let S = (0, import_chunk_bzyb60p0.vdr)(a.message.content, r, { publishMarkFrom: e });
        yield { type: "assistant", message: Ft(a.message, e.requestedModel), parent_tool_use_id: null, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: a.uuid, timestamp: a.timestamp, error: a.error, ...a.requestId !== void 0 && { request_id: a.requestId }, ...g !== void 0 && g.length > 0 && { supersedes: g }, ...ot(e, a.message.content), ...Ge(a.message.content, a.message.model), ...Pt(e, a.message.content), ...S.length > 0 && { tool_use_meta: S } };
      }
      return;
    }
    case "progress":
      if ((0, import_chunk_bzyb60p0.UY)(e)) yield* Mtr(e, r);
      else if ((0, import_chunk_r3kja8v6.ue)() && e.data.type === "repl_tool_call") {
        let o = require("/$bunfs/root/chunk-fb2ex9yv.js").scriptCallFrame({ toolUseID: e.toolUseID, parentToolUseID: e.parentToolUseID, data: e.data });
        if (o !== void 0) yield { ...o, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: e.uuid };
      } else if (e.data.type === "tool_heartbeat") yield { type: "tool_progress", tool_use_id: e.toolUseID, tool_name: e.data.toolName, parent_tool_use_id: e.parentToolUseID, elapsed_time_seconds: e.data.elapsedTimeSeconds, heartbeat: true, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: e.uuid };
      else if (e.data.type === "agent_api_retry") yield { type: "tool_progress", tool_use_id: e.toolUseID, tool_name: import_chunk_060xwhvh._t, parent_tool_use_id: e.parentToolUseID, elapsed_time_seconds: 0, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: e.uuid, subagent_type: e.data.agentType, ...e.data.resolved !== true && { subagent_retry: { agent_id: e.data.agentId, attempt: e.data.attempt, max_retries: e.data.maxRetries, retry_delay_ms: e.data.retryDelayMs, error_status: e.data.errorStatus ?? null, error_category: e.data.errorCategory } } };
      break;
    case "user": {
      let o = (0, import_chunk_bzyb60p0.vto)(e), a = Ro(e);
      for (let g of (0, import_chunk_bzyb60p0.Mg)([e])) {
        let S = (0, import_chunk_bzyb60p0.Tfi)(o, g.message.content), y = { type: "user", message: g.message, parent_tool_use_id: null, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: g.uuid, timestamp: g.timestamp, isSynthetic: j7t(g), tool_use_result: a ?? (0, import_chunk_bzyb60p0.Tto)(e, g.toolUseResult, g.mcpMeta), ...S.length > 0 && { tool_result_meta: S }, ...void 0, ...g.origin && { origin: g.origin }, ...e.isVirtual === true && { is_virtual: true }, ...e.refusedMessageId !== void 0 && { refused_message_id: e.refusedMessageId }, ...e.retractedWireUuids?.length && { retracted_message_uuids: e.retractedWireUuids } }, h = y;
        if ((0, import_chunk_r3kja8v6.ue)() && (e.visibleToRemoteClients === true || e.hiddenToolUseIds !== void 0 || e.detachedToolUseIds !== void 0)) try {
          if (require("/$bunfs/root/chunk-ak2t98x8.js").outputShowsScriptCalls()) h = require("/$bunfs/root/chunk-q6j2j10z.js").headlessScriptCallFrame(y, e, r);
        } catch (R) {
          (0, import_chunk_k449cc64.i)(R);
        }
        yield h;
      }
      return;
    }
    default:
  }
}
function* vo(e, r = false) {
  let { attachment: o } = e, a;
  try {
    if (o.type === "tool_host_result_lines") a = d3r(o, e.uuid, (0, import_chunk_f9x2f6cx.W)());
    else if (o.type === "hook_system_message") a = { ...Iqo(o), uuid: e.uuid, session_id: (0, import_chunk_f9x2f6cx.W)() };
    else if (r && o.type === "queued_command" && o.beside_result !== void 0) a = Otr(o, e);
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
  }
  if (a) yield a;
}
async function* WHa(e, r, o, a, g) {
  let S = Pn(o, e);
  if (S === void 0) return;
  let y = `${e.toolName} isn't available, so this deferred call was dropped without running.`, h = `${y}${e.script === void 0 ? "" : " The script that made it was stopped there, and its earlier calls may have run."}`, R = (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: h, is_error: true, tool_use_id: (0, import_chunk_bzyb60p0.Aie)(e) }], toolUseResult: `Error: ${h}`, sourceToolAssistantUUID: S.uuid });
  await Se(o, R);
  let C = Rn(e, S)?.missingResult(e, [R], { text: y }), A = C === void 0 ? R : (0, import_chunk_bzyb60p0.Me)({ ...C, isVirtual: true });
  if (A !== R) await Se(o, A);
  await Te(o, a, g), yield* RO(A, r);
}
function Rn(e, r) {
  if ((0, import_chunk_67f81g6v.Ict)(e.toolUseID) && r.type === "assistant" && r.message.content.some((o) => o.type === "tool_use" && o.id === e.script?.toolUseID && (0, import_chunk_h4t4qfaq.li)(o.name))) return require("/$bunfs/root/chunk-h0704xph.js");
  return;
}
function Do(e, r) {
  return async (o, a, g, S, y, h) => {
    let R = (0, import_chunk_bz1f2qnq.Z)(g);
    if ((0, import_chunk_r3kja8v6.vi)() && o.isMcp !== true && (0, import_chunk_h4t4qfaq.li)(o.name) && y === r && h === void 0 && (0, import_chunk_xfj2cwfv.Jr)(R.mode) && (0, import_chunk_ht27b0vz.Tr)(R, o) === null && (0, import_chunk_ht27b0vz.Di)(R, o) === null) return { behavior: "allow", updatedInput: a };
    return e(o, a, g, S, y, h);
  };
}
async function* jHa(e, r, o, a) {
  let g = !(0, import_chunk_f9x2f6cx.DI)(), S, y = (0, import_chunk_bz1f2qnq.Z)(a).mode;
  if (y !== e.permissionMode) (0, import_chunk_w578pjby.t)(`Deferred tool resume: permissionMode mismatch (deferred under '${e.permissionMode}', resuming under '${y}'). --resume does not restore permissionMode \u2014 pass --permission-mode ${e.permissionMode} to match.`, { level: "warn" });
  let h = Pn(o, e);
  if (!h || h.type !== "assistant") {
    (0, import_chunk_w578pjby.t)(`Deferred tool resume: tool_use ${e.toolUseID} not found in transcript, or held only by a row that the model did not make`, { level: "warn" });
    return;
  }
  let R = h.message.content.find((I) => I.type === "tool_use" && I.id === (0, import_chunk_bzyb60p0.Aie)(e));
  if (!R) return;
  (0, import_chunk_w578pjby.t)(`Deferred tool resume: re-emitting ${e.toolName} (${e.toolUseID}) through PreToolUse`);
  let C = (0, import_chunk_z2xw6net.hfl)(e.traceparent), A = Rn(e, h), k = o.length, P, D = () => a.options.refreshTools?.() ?? a.options.tools;
  a.setToolPermissionContext(import_chunk_pmryp5f3.yLe);
  let x = kt([R], [h], e.script === void 0 ? r : Do(r, R.id), e.script === void 0 ? a : { ...a, resumedScriptCall: { deferred: e, canUseTool: r, hostWasAnswered: (I) => {
    P = I;
  } } })[Symbol.asyncIterator]();
  (0, import_chunk_w4dc83v7.B0n)("resume_other", "turn_start_tool_run");
  try {
    while (true) {
      let I = await (0, import_chunk_z2xw6net.gfl)(C, () => x.next());
      if (I.done) break;
      let L = e.script !== void 0 && !(0, import_chunk_bzyb60p0.IO)(I.value) && I.value.message?.type === "attachment" && I.value.message.attachment.type === "hook_deferred_tool" && I.value.message.attachment.script === void 0 ? { ...I.value, message: { ...I.value.message, attachment: e } } : I.value;
      if ((0, import_chunk_bzyb60p0.IO)(L)) continue;
      if (L.message) {
        if (await Se(o, A?.asRefusedAtResume(L.message, e) ?? L.message), g) await (0, import_chunk_bzyb60p0._E)(o, void 0, void 0, void 0, a.storageV5);
        if (L.message.type === "progress" || L.message.type === "user" || L.message.type === "assistant" && L.message.isVirtual === true) {
          if (!A?.answersTheScript(L.message, e)) yield* RO(L.message, D());
          if ((0, import_chunk_r3kja8v6.ue)() && L.message.type === "user") require("/$bunfs/root/chunk-8hqp4e5e.js").releaseScriptCallProgress(L.message);
          continue;
        }
        if (L.message.type === "attachment" && L.message.attachment.type === "hook_deferred_tool") S = L.message.attachment;
        else if (A !== void 0 && L.message.type === "attachment" && "toolUseID" in L.message.attachment && L.message.attachment.toolUseID === R.id) continue;
        yield { ...L.message, ...L.message.type === "attachment" && L.message.attachment.type === "hook_deferred_tool" && L.message.attachment.script !== void 0 && { attachment: { ...L.message.attachment, script: void 0 } }, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null };
      }
    }
  } catch (I) {
    try {
      await x.return?.(void 0);
    } catch {
    }
    throw I;
  } finally {
    (0, import_chunk_w4dc83v7.W0n)("resume_other", "turn_start_tool_run"), await x.return?.(void 0);
  }
  let H = S === void 0 ? A?.missingResult(e, o.slice(k), { aborted: a.abortController.signal.aborted, notSaved: P }) : void 0;
  if (H !== void 0) {
    let I = (0, import_chunk_bzyb60p0.Me)({ ...H, isVirtual: true });
    await Se(o, I), await Te(o, g, a), yield* RO(I, D());
  }
  return S;
}
var Co = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_bzyb60p0.K0t)("refused", "orphaned permission"));
function Eo(e, r) {
  let o = (0, import_chunk_w578pjby._)(e), a = (0, import_chunk_4smdap7r.M)(r.filter((g) => !o.includes(g.sha256)).map((g) => g.folder));
  return a.length > 1 ? "mixed" : a[0];
}
function hn(e) {
  return new Map(Object.entries(e).filter(([, r]) => r !== void 0));
}
function wn(e, r) {
  let o = hn(e), a = hn(r);
  return o.size === a.size && [...o.keys()].every((g) => a.has(g)) ? [...o].flatMap(([g, S]) => (0, import_chunk_r9ecxfn9.KW)(S, a.get(g)) ? [] : [[S, a.get(g)]]) : void 0;
}
function Io(e, r) {
  let o = wn(e, r);
  if (o === void 0) return "argument_names";
  if (o.length !== 1) return "several_arguments";
  let [a, g] = o[0];
  if (!Array.isArray(a) || !Array.isArray(g)) return "one_argument";
  if (a.length !== g.length) return "list_length";
  let S = a.flatMap((h, R) => (0, import_chunk_r9ecxfn9.KW)(h, g[R]) ? [] : [[h, g[R]]]);
  return !S.every(([h, R]) => {
    let C = (0, import_chunk_0jve1fep.Le)(h) && (0, import_chunk_0jve1fep.Le)(R) ? wn(h, R) : void 0, [A, k] = C?.length === 1 ? C[0] : [];
    return typeof A === "string" && typeof k === "string" && A.slice(0, A.lastIndexOf("/") + 1) === k.slice(0, k.lastIndexOf("/") + 1) && import_chunk_ccm69jjy.fm.test(A.slice(A.lastIndexOf("/") + 1)) && import_chunk_ccm69jjy.fm.test(k.slice(k.lastIndexOf("/") + 1));
  }) ? "entries_otherwise" : a.length === 1 ? "reference_end_one_of_one" : S.length === 1 ? "reference_end_one_of_many" : S.length === a.length ? "reference_end_all" : "reference_end_some";
}
async function wJs(e, r, o, a, g, S) {
  let { signal: y } = g.abortController, h, R, C;
  try {
    let A = await e.askInputPreparer?.(r, g, S);
    if (A?.prepareAgain === void 0) return;
    if (a === null) return { ended: "no_record" };
    if (Object.keys(o).length === 0) return { ended: "answer_empty" };
    if (!(0, import_chunk_r9ecxfn9.KW)(o, a)) return { ended: "answer_differs" };
    let k = await A.prepareAgain(a);
    if (!("error" in k)) {
      if (h = k.release, !y.aborted) {
        if ((0, import_chunk_r9ecxfn9.KW)(a, k.input)) return { ended: "served", input: k.input };
        if (R = Io(a, k.input), R.startsWith("reference_end_")) C = Eo(a, k.files ?? []);
      }
    }
  } catch (A) {
    if (!(0, import_chunk_jv7av99m.Fe)(A)) (0, import_chunk_k449cc64.i)(A);
  }
  return await h?.(), y.aborted ? { ended: "aborted" } : R === void 0 ? { ended: "step_failed" } : { ended: "step_differs", differs: R, folder: C };
}
function XHt(e, r, o) {
  return { behavior: "deny", toolUseID: r, decideLocation: "ask-path", ...o === "aborted" ? { message: "Tool permission request aborted", decisionReason: import_chunk_pbteexar.c6e } : { message: `The approval of ${e} was asked for before Claude Code restarted, and cannot be reused. Call ${e} again with the same arguments; it may need approval again. ${e} was not called.`, decisionReason: { type: "other", reason: "approval cannot be reused", label: "approvalNotReusable" } } };
}
function Tn(e, r, o, a) {
  let g = (0, import_chunk_ht27b0vz.xle)(e, void 0, a), S = !r || r.suppressesAllPermissionUpdates?.(o) === true || r.mcpInfo?.serverName === import_chunk_qdcbcsg7.$n && (0, import_chunk_2hdy50wd.elt)() ? (0, import_chunk_bzyb60p0.hne)(g) : (0, import_chunk_bzyb60p0.Wie)(g, r, a);
  return r?.name === import_chunk_pmryp5f3.Fn ? (0, import_chunk_bzyb60p0.dQo)((0, import_chunk_p1ewvgeh.EEr)(r, a), S, a) : S;
}
function Oo(e, r, o) {
  return typeof e === "string" && (0, import_chunk_px0hhsq7.mr)(e)?.serverName === import_chunk_qdcbcsg7.$n && r.resumesInterruptedTurn === true && !(!(0, import_chunk_f9x2f6cx.st)() && o.toolState.get(import_chunk_t2e49pze.GJ).canAsk() && (0, import_chunk_2hdy50wd.elt)());
}
function Po(e, r) {
  return e.type === "user" && !(0, import_chunk_0ha8wex8.e3)(e) && Array.isArray(e.message.content) && e.message.content.some((o) => o.type === "tool_result" && o.tool_use_id === r);
}
async function Fo(e, r, o, a, g) {
  let S = (0, import_chunk_prn6030k._b)(e.mcpInfo?.serverName ?? "") ? (0, import_chunk_929j4hj9.Fi)().resolvedHostByToolUseId.get((0, import_chunk_929j4hj9.fZ)(a)) : void 0, y = { checkPermissions: async (k) => {
    let { batchNavigateHosts: P, chromeDomainGrants: D, domainRuleDenial: x } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-73vfcqgt.js"))), H = P(e.mcpInfo?.toolName === "navigate" ? { actions: [{ name: "navigate", input: k }] } : e.mcpInfo?.toolName === "browser_batch" ? k : {});
    if (H === "unvettable") return { behavior: "deny", message: "The call opens a page whose address cannot be checked.", decisionReason: { type: "other", reason: "a page that the call opens has an address that cannot be checked", label: "pageAddressUncheckable" } };
    let I = D((0, import_chunk_bz1f2qnq.Z)(o));
    return [...S ? [S.host, `${S.host}:80`] : [], ...H].map((L) => x(I, L)).find((L) => L !== void 0) ?? { behavior: "passthrough", message: "" };
  } }, h, C = S === void 0 && g === void 0 ? e : Object.create(e, Object.getOwnPropertyDescriptors(S === void 0 ? { checkPermissions: async (...k) => h = await e.checkPermissions(...k) } : y));
  for (let k of r) try {
    let P = await (0, import_chunk_bzyb60p0.ev)(C, (0, import_chunk_xcgcdx61.mi)(k, (D, x) => (0, import_chunk_bzyb60p0.FZr)(x)), { ...o, toolUseId: a, lateAnswerFor: a }, { crashIsObjection: true });
    if (P?.decisionReason?.type === "other" && P.decisionReason.reason === import_chunk_bzyb60p0.WF) return XHt(e.name, a, "step_failed");
    if (P?.behavior === "deny") return { ...(0, import_chunk_bzyb60p0.gyt)(P), toolUseID: a };
  } catch (P) {
    if ((0, import_chunk_jv7av99m.Fe)(P)) throw P;
    return (0, import_chunk_k449cc64.i)(P), XHt(e.name, a, "step_failed");
  }
  let A = r.at(-1);
  if (g !== void 0) {
    let k = h?.behavior === "ask" ? h : void 0, P = (0, import_chunk_sxd14zzs.lmo)(h?.behavior === "allow" ? h.askMetadata : k?.metadata);
    if (P === void 0) return XHt(e.name, a, "step_differs");
    if (k && A !== void 0 && (0, import_chunk_r9ecxfn9.KW)(g, P)) (0, import_chunk_271f5kxt.WDe)(o, a, A, k, e.name);
  }
  return;
}
async function* GHa(e, r, o, a, g, S, y, h) {
  var _stack2 = [];
  try {
    const R = __using(_stack2, { [Symbol.dispose]() {
      let E = e.permissionResult?.toolUseID;
      if (E !== void 0) (0, import_chunk_jejz6sfb.kRn)(g.session, E), (0, import_chunk_929j4hj9.p_o)(E);
    } });
    const C = __using(_stack2, { [Symbol.dispose]() {
      let E = (e.siblings ?? []).map((Y) => Y.toolUseID), q = e.permissionResult?.toolUseID;
      if (g.toolState.get(import_chunk_bzyb60p0.gq).takeStopAfterBatch(q === void 0 ? E : [q, ...E])) (0, import_chunk_cbnm4p23.JT)(g.abortController).abort((0, import_chunk_cbnm4p23.hl)("remote-cancel"));
    } });
    switch (g.setToolPermissionContext(import_chunk_pmryp5f3.yLe), y.kind) {
      case "strict":
      case "launcher":
        break;
      default:
        return (0, import_chunk_w578pjby.t)(`handleOrphanedPermission: dropping orphaned permission \u2014 the answer policy's kind (a ${typeof y.kind}) is not one this sink knows`, { level: "warn" }), { reExecuted: false, reason: "unknown_answer_policy", toolWait: void 0, callStarted: false };
    }
    let A = !(0, import_chunk_f9x2f6cx.DI)(), { permissionResult: k, assistantMessage: P } = e, { toolUseID: D } = k;
    if (!D) return (0, import_chunk_w578pjby.t)("handleOrphanedPermission: dropping orphaned permission \u2014 permissionResult is missing toolUseID", { level: "warn" }), { reExecuted: false, reason: "no_tool_use_id", toolWait: void 0, callStarted: false };
    let x = P.message.content, H;
    if (Array.isArray(x)) {
      for (let E of x) if (E.type === "tool_use" && E.id === D) {
        H = E;
        break;
      }
    }
    if (!H) return (0, import_chunk_w578pjby.t)(`handleOrphanedPermission: dropping orphaned permission for toolUseID=${D} \u2014 assistant message ${P.message.id} has no matching tool_use block`, { level: "warn" }), { reExecuted: false, reason: "no_tool_use_block", toolWait: void 0, callStarted: false };
    let I = H.name, [L, O] = (0, import_chunk_6mfepmbb.Wl)(e.notSent, (E) => E.otherToolBehindCard === true), K = { toOtherTools: L, cardToolUseID: D, afterRefusal: k.behavior === "deny", mutableMessages: a, persistSession: A, context: g };
    if (y.kind === "launcher" && y.overNetwork === true && e.cardInput === void 0 && (g.session !== void 0 && o3r.peek(g.session)?.has(D) === true || a.some((E) => Po(E, D)))) return (0, import_chunk_w578pjby.t)(`handleOrphanedPermission: dropping orphaned permission for toolUseID=${D} \u2014 the call has its result`, { level: "warn" }), { reExecuted: false, reason: "already_settled", toolWait: void 0, callStarted: false };
    let { behindNewInput: j } = e, z = j === void 0 ? -1 : a.findIndex((E) => E.uuid === j.closingRow), X = a[z], N = X?.type === "user" && (0, import_chunk_0ha8wex8.NPo)(X.toolUseResult);
    if (j !== void 0 && (z === -1 || a.slice(z).some((E) => (0, import_chunk_865at33z.On)(E) || E.type === "assistant" && Array.isArray(E.message.content) && E.message.content.some((q) => q.type === "tool_use" && q.name === I && ((0, import_chunk_f9x2f6cx.cg)(q.input, H.input) || !N && !("isSidechain" in E && E.isSidechain === true)))))) return { reExecuted: false, reason: "asked_again", toolWait: void 0, callStarted: false };
    if (k.behavior === "deny" && e.denyIsRefusal === true) {
      let E = g.options.toolAliases;
      if ((0, import_chunk_0jve1fep.Le)(H.input)) g.onPermissionDenial?.((0, import_chunk_b83x8d52.Dh)(r, I, E) ?? { name: I }, D, H.input);
      yield* kn({ block: H, assistantMessage: P, messageRows: e.messageRows, message: k.message, fromHostsPrompt: true, tools: r, context: g, mutableMessages: a, persistSession: A, toolDenialKind: "decisionClassification" in k && k.decisionClassification === "user_reject" ? "user-rejected" : void 0, ...!e.siblings?.length && { notSent: O } });
      let q = r, Y = Ut(e.siblings, q, E);
      for (let se of new Set(Y.missingToolNames)) {
        let oe = await (0, import_chunk_bzyb60p0.QUe)(se, q, g);
        if (q = oe.tools, oe.aborted) break;
      }
      if ((e.siblings?.length ?? 0) > 0 && g.abortController.signal.aborted) {
        if (O.length) yield* await Ie({ notSent: O, tools: r, mutableMessages: a, persistSession: A, context: g });
        return yield* await rt({ ...K, tools: q }), { reExecuted: false, reason: "aborted", toolWait: void 0, callStarted: false };
      }
      if (Y.missingToolNames.length > 0) Y = Ut(e.siblings, q, E);
      if (Y.runs.length > 0) {
        let se = new Set(Y.runs.map((oe) => oe.block.id));
        yield* Nt({ runs: Y.runs, tools: q, canUseTool: async (oe, _e, nt, Ke, de, He) => {
          if (de === D) return { behavior: "deny", message: typeof k.message === "string" && k.message !== "" ? k.message : import_chunk_0ha8wex8.hp, decisionReason: { type: "mode", mode: "default" } };
          return (se.has(de) ? bn(He) : void 0) ?? o(oe, _e, nt, Ke, de, He);
        }, executionContext: { ...g, requireCanUseTool: true, ...q !== r && { options: { ...g.options, tools: q, mcpClients: [...(0, import_chunk_4vsz8a99.Oc)(g)] } } }, mutableMessages: a, persistSession: A, notSent: O, echoed: /* @__PURE__ */ new Set([P.uuid]) });
      } else if (e.siblings?.length) yield* await Ie({ notSent: O, tools: r, mutableMessages: a, persistSession: A, context: g });
      return yield* await rt({ ...K, tools: q }), { reExecuted: true, toolWait: void 0, ...await Sn(e, a, A, g), callStarted: false };
    }
    let J = k.behavior === "allow" && y.kind === "launcher" ? Co().safeParse(k.updatedPermissions) : void 0, G = (0, import_chunk_2ms4sey3.g3r)((0, import_chunk_b83x8d52.Dh)(r, I, g.options.toolAliases) ?? { name: I }, e.cardInput ?? void 0, k, () => (0, import_chunk_bz1f2qnq.Z)(g), Date.now(), y.kind === "strict" ? () => (0, import_chunk_865at33z.b)("tengu_mellow_kestrel", false) : void 0), re = G.kind === "admitted" || e.nobodyAnswered === true, te;
    if (G.kind === "refused") te = (0, import_chunk_2ms4sey3.eCn)(G.reason, D);
    else if (J?.success === false) te = { behavior: "deny", message: `The canUseTool callback returned an invalid permission result. ${import_chunk_bzyb60p0.Eir}`, toolUseID: D, decisionReason: import_chunk_pbteexar.fqt, decideLocation: "ask-path" }, (0, import_chunk_w578pjby.t)(`handleOrphanedPermission: treating the orphaned allow for toolUseID=${D} as a denial: its updatedPermissions is too long. ${import_chunk_bzyb60p0.Eir}`, { level: "warn" });
    let V = te ?? k;
    if (G.kind === "admitted") (0, import_chunk_cqa9hrgx.l)("ask_user_question_no_answer_offer", "afk_timeout"), V = { behavior: "allow", updatedInput: G.input, toolUseID: D };
    let ie = r, ne = (0, import_chunk_b83x8d52.Dh)(ie, I, g.options.toolAliases), Q, ye, fe = typeof I === "string" ? (0, import_chunk_px0hhsq7.mr)(I)?.serverName : void 0, ae = !ne && Oo(I, e, g);
    if (!ne) {
      if (Q = await (0, import_chunk_w4dc83v7.Brn)("resume_other", "resume_connector_wait", () => ae && V.behavior === "allow" ? S(I, r, g, g.storageV5) : (0, import_chunk_bzyb60p0.QUe)(I, r, g, V.behavior === "allow" && e.resumesInterruptedTurn === true ? { dialsCachedRowForCall: D } : void 0)), ne = Q.tool, ie = Q.tools, ne) (0, import_chunk_w578pjby.t)(`handleOrphanedPermission: tool "${I}" for toolUseID=${D} joined the pool after ${Q.waitedMs}ms (${Q.bridgeEnd ? `the device bridge listed it: ${Q.bridgeEnd}` : "its MCP server finished connecting"}); re-executing`);
    }
    let me = e.cardInput ?? H.input, le = (0, import_chunk_0jve1fep.Le)(me) ? me : {}, Oe = V === k && k.behavior === "allow" && y.kind === "launcher" && y.overNetwork === true ? (0, import_chunk_2ms4sey3.z7t)(ne ?? { name: I }, k.updatedInput, le, (0, import_chunk_bz1f2qnq.Z)(g)) : void 0;
    if (Oe === "changed") te = (0, import_chunk_bzyb60p0.Yue)(I, D), V = te;
    else if (Oe === "as_shown" && k.behavior === "allow" && (0, import_chunk_2ms4sey3.EJs)(k.updatedInput, le) && !(0, import_chunk_2ms4sey3.YHa)(ne ?? { name: I }, (0, import_chunk_0jve1fep.Le)(e.cardInput) ? e.cardInput : void 0, (0, import_chunk_0jve1fep.Le)(H.input) ? H.input : {})) te = XHt(I, D, "step_differs"), V = te;
    else if (y.kind === "launcher" && V.behavior === "allow" && e.askedMcpSkill !== void 0) te = XHt(I, D, "step_differs"), V = te;
    let Re = V.behavior === "allow" && ne !== void 0 && (0, import_chunk_etd6y4ew.CWt)(ne.name) && typeof le.server === "string" ? le.server : void 0;
    if (Re !== void 0) {
      let E = await (0, import_chunk_w4dc83v7.Brn)("resume_other", "resume_connector_wait", () => (0, import_chunk_bzyb60p0.QUe)((0, import_chunk_px0hhsq7.Rr)(Re), ie, g));
      if (E.aborted) Q = E, ne = void 0;
    }
    if (!ne) {
      let E = Q !== void 0 && !Q.aborted && Q.serverState !== "not_mcp" && Q.serverState !== "unknown" && (V.behavior === "allow" || V.behavior === "deny") && e.resumesInterruptedTurn === true && !e.siblings?.length && kJs(a) && (fe !== import_chunk_qdcbcsg7.$n || ae);
      if ((0, import_chunk_w578pjby.t)(Q?.aborted ? `handleOrphanedPermission: turn aborted while waiting for tool "${I}" (toolUseID=${D}); not re-executing` : `handleOrphanedPermission: ${E ? "closing the call of the" : "dropping"} orphaned permission for toolUseID=${D} \u2014 tool "${I}" not found in active tools (${ie.length} available; MCP server ${Q?.serverState ?? "unknown"} after ${Q?.waitedMs ?? 0}ms)`, { level: "warn" }), ye = Q?.aborted || Q?.serverState === "unknown" ? void 0 : Qt(I, r, g), !E) {
        if (y.kind === "strict" && V.behavior === "allow") Tt(D, V.updatedPermissions);
        let q = O.filter((Y) => !Y.onUsersDevice);
        if (q.length) yield* await Ie({ notSent: q, tools: r, mutableMessages: a, persistSession: A, context: g });
        return { reExecuted: false, reason: Q?.aborted ? "aborted" : "tool_unavailable", toolWait: Q, missingTool: ye, callStarted: false };
      }
      if (V.behavior === "deny") {
        if (yield* kn({ block: H, assistantMessage: P, messageRows: e.messageRows, message: V.message, fromHostsPrompt: V === k, tools: ie, context: g, mutableMessages: a, persistSession: A }), O.length) yield* await Ie({ notSent: O, tools: r, mutableMessages: a, persistSession: A, context: g });
        return yield* await rt({ ...K, tools: ie }), { reExecuted: false, reason: "closed_unrun", toolWait: Q, missingTool: ye, callStarted: false };
      }
    }
    let $e = ie === r && Re === void 0 ? g : { ...g, options: { ...g.options, tools: ie, mcpClients: [...(0, import_chunk_4vsz8a99.Oc)(g)] } }, at = (y.kind === "launcher" || e.behindNewInput !== void 0) && V.behavior === "allow" && I === import_chunk_hn3cwwzt.ke && !(0, import_chunk_syr33dp2.Ic)(H.input) && qHt(), Be = at ? e.askedInDirectory : void 0;
    const $o = __using(_stack2, y.kind === "strict" && V.behavior === "allow" && e.nobodyAnswered !== true ? y.lateAllowStarts?.() : void 0);
    if (Be !== void 0 && y.kind === "strict") {
      if (await y.hearsShell?.(g.abortController.signal), g.abortController.signal.aborted) return { reExecuted: false, reason: "aborted", toolWait: Q, callStarted: false };
    }
    let dt = (0, import_chunk_f9x2f6cx.VS)(), Ae = !at ? void 0 : Be === void 0 ? y.kind === "strict" || (0, import_chunk_6e68m1dj.Qp)() && e.cardInput === void 0 ? "no_record" : void 0 : y.kind === "strict" && (dt?.directory === void 0 || dt.shell === void 0) ? "shell_unheard" : void 0;
    if (at && Be === void 0 && Ae === void 0 && (0, import_chunk_6e68m1dj.Qp)()) (0, import_chunk_cqa9hrgx.l)("permission_late_allow_directory", "no_record_on_card");
    let ve = Ae === void 0 ? Be : void 0, xe = ve === void 0 ? void 0 : dt?.directory?.path ?? (0, import_chunk_cc0rj9gh.dje)(g.session.project?.projectRoot), Ce = ve === void 0 || xe === void 0 ? void 0 : (0, import_chunk_cc0rj9gh.ayr)(xe, ve), Ue = { endedWell: false };
    if (Ce !== void 0 && (y.kind === "strict" || Ce !== (0, import_chunk_18rsj2ts.pe)())) try {
      Ue = await h?.(Ce, $e) ?? Ue;
    } catch (E) {
      if (!(0, import_chunk_jv7av99m.Fe)(E)) (0, import_chunk_k449cc64.i)(E);
    }
    let ce, Xe;
    if (V.behavior === "allow") {
      let E = V.updatedInput;
      if (E && Object.keys(E).length > 0 && !(Oe !== void 0 && (0, import_chunk_2ms4sey3.EJs)(E, le))) ce = Oe !== "as_shown" ? E : (0, import_chunk_bzyb60p0.uR)(I, e.cardInput ?? {});
      else {
        if (ce = {}, !re && e.cardInputDigest === void 0) Xe = e.cardInput;
        (0, import_chunk_w578pjby.t)(`Orphaned permission for ${I}: updatedInput is missing or empty, falling back to original tool input`, { level: "warn" });
      }
    }
    let Qe = V.behavior === "allow" ? J?.data ?? [] : [], ut = y.kind === "launcher" && y.overNetwork === true && V.behavior === "allow", Je = y.kind === "strict" && V.behavior === "allow" && I === import_chunk_pmryp5f3.Fn ? e.askedMcpSkill : void 0, ct = Je?.server;
    if (typeof ct === "string" && !g.getMcp().commands.some((E) => {
      let q = E.type === "prompt" && E.mcpInfo?.serverName === ct ? E.mcpSkillEntry?.() : void 0;
      return q !== void 0 && (0, import_chunk_sxd14zzs.IAe)(q) === Je?.version;
    })) await (0, import_chunk_w4dc83v7.Brn)("resume_other", "resume_connector_wait", () => (0, import_chunk_bzyb60p0.QUe)((0, import_chunk_px0hhsq7.Rr)(ct), r, g, e.resumesInterruptedTurn === true ? { dialsCachedRowForCall: D } : void 0));
    let ft = async (E) => {
      if (E.length > 0) try {
        let q = Tn(E, ne, H.input, (0, import_chunk_bz1f2qnq.Z)(g)), Y = (0, import_chunk_p1ewvgeh.d9)(ut ? (0, import_chunk_ze4kt7fs.mit)(q, [], (0, import_chunk_ze4kt7fs.Ebe)(g.setSessionToolPermissionContext)) : q, g.session), Ee = Y.updates;
        (0, import_chunk_bzyb60p0.Tye)(Y.reason, g.appendSystemMessage), g.setSessionToolPermissionContext((se) => (0, import_chunk_p1ewvgeh.vU)(se, Ee)), await (0, import_chunk_p1ewvgeh.NG)(Ee, g.storageV5);
      } catch (q) {
        (0, import_chunk_w578pjby.t)(`Orphaned permission for ${I}: applying or persisting updatedPermissions failed: ${q}`, { level: "warn" });
      }
    }, $t = Qe.findLast((E) => E.type === "setMode"), be = $t?.type === "setMode" ? $t.mode : void 0, pt = be !== void 0 ? (0, import_chunk_bz1f2qnq.Z)(g).mode : void 0, Bt = pt === "plan" && be !== "plan" && Xt(), Ze = Bt ? Qe.filter((E) => E.type === "setMode") : [], Ht = (E, q) => (0, import_chunk_cqa9hrgx.l)("permission_stored_plan_exit", E, { permission_mode: (0, import_chunk_78g0060s.f)(q), ...be !== void 0 && { requested_mode: (0, import_chunk_78g0060s.f)(be) } }), mt = Bt ? Qe.filter((E) => E.type !== "setMode") : Qe, et = ut;
    if (!et) await ft(mt);
    let xn = new Set((e.siblings ?? []).map((E) => E.toolUseID)), gt = y.kind === "strict" && V.behavior === "allow" && ce !== void 0 ? Yt(y, { updatedInput: ce, updatedPermissions: V.updatedPermissions }, D, Tn) : void 0, tt, Wt, Ne, yt = false, jt, Un = () => {
      if (Ze.length === 0) return;
      let E = Ze;
      Ze = [];
      let q = (0, import_chunk_bz1f2qnq.Z)(g).mode;
      if (q === pt) {
        if (jt = ft(E), (0, import_chunk_bz1f2qnq.Z)(g).mode === be) (0, import_chunk_cqa9hrgx.u)("permission_stored_plan_exit");
      } else (0, import_chunk_w578pjby.t)(`Orphaned permission for ${I}: the mode changed from ${pt} to ${q} before the call started, so the session stays in ${q} mode and the stored answer's switch to ${be} was not applied`, { level: "warn" }), Ht("mode_changed", q);
    }, Ln = (E, q) => {
      let Y = ce && Object.keys(ce).length > 0 ? ce : void 0;
      if (Y === void 0) return [q];
      if (Oe === "as_shown") return [Y];
      if ((0, import_chunk_bzyb60p0.Ddr)(E.inputSchema, Y) !== null) return [q];
      return [q, (0, import_chunk_bzyb60p0.UZr)(Y, (0, import_chunk_bzyb60p0.$Zr)(E.inputSchema.safeParse(Y).error?.issues))];
    }, qt = ne !== void 0, Gt, Nn = async (E, q, Y, Ee, se, oe) => {
      if (se === D) qt = true, yt = true;
      if (xn.has(se)) return bn(oe) ?? o(E, q, Y, Ee, se, oe);
      if (se !== D || oe?.behavior === "ask" && oe.forcedByCaller === true && (oe.pendingBeforeRestart === true || se === D && gt?.hasServedAllow() === true)) return o(E, q, Y, Ee, se, oe);
      if (oe?.behavior === "ask" && oe.forcedByCaller === true) return oe;
      if (Xe !== void 0) Pqo("main", E, Xe, q), Xe = void 0;
      if (j !== void 0) {
        Gt ??= j.storedWith(P.uuid);
        let de = await Gt;
        if (Y.abortController.signal.aborted) return j.endUnrun("stopped"), XHt(I, D, "aborted");
        if (!de) return j.endUnrun("not_run"), { behavior: "deny", toolUseID: D, decideLocation: "ask-path", message: "This call was not run. Claude Code could not save its record that the approval is used up, and without that record the call could run twice. If the call still makes sense, make it again; it may need approval again.", decisionReason: { type: "other", reason: "the record that the approval is used up is not confirmed as stored" } };
      }
      if (Ae !== void 0 && Ne === void 0) Ne = false, (0, import_chunk_cqa9hrgx.m)("permission_late_allow_directory", Ae);
      if (ve !== void 0 && Ne === void 0) if (Ne = y.kind === "strict" ? Ue.endedWell && (0, import_chunk_cc0rj9gh.qpo)((0, import_chunk_f9x2f6cx.VS)()) === ve : Ce !== void 0 && (0, import_chunk_cc0rj9gh.Vsn)(xe, ve), Ne) (0, import_chunk_cqa9hrgx.u)("permission_late_allow_directory", { at_start: ve === "." });
      else (0, import_chunk_cqa9hrgx.m)("permission_late_allow_directory", xe === void 0 ? "no_start" : Ce === void 0 ? "not_under_start" : "not_reached");
      if (Ne === false) {
        let de = xo(y), He = `The shell's directory ${y.kind === "strict" && de !== "unknown" ? "was last reported as" : "is"} ${de}.`;
        return (0, import_chunk_w578pjby.t)(`Orphaned permission for ${I}: not run, because the shell's directory (${de}) could not be confirmed as the one that the card recorded, ${(0, import_chunk_w578pjby._)(Be)}${Ae !== void 0 ? `: ${Ae}` : `${y.kind === "strict" && !Ue.endedWell ? ": the cd there did not run or did not end well" : ""}${xe === void 0 ? ": this worker has no directory to measure the record from" : ""}`}`, { level: "warn" }), { behavior: "deny", toolUseID: D, decideLocation: "ask-path", message: Ue.why !== void 0 && (y.kind !== "strict" || Ce !== void 0 && (0, import_chunk_kx2fp6pc.z6e)(Ce)) ? `This call was not run. Claude Code tried a cd to move the shell back to the directory where it was approved. It ended with this: ${Ue.why}
${He} If the command still makes sense, cd to the directory it was meant for and make the call again; it may need approval again.` : `This call was not run. Claude Code could not confirm that the shell is back in the directory where it was approved. ${Ae === "no_record" ? "It kept no record of that directory." : Ae === "shell_unheard" ? "The machine that runs the tools did not say where its shell stands." : xe === void 0 ? "It does not keep track of that directory across a restart in a session that has been in a worktree." : "That directory may be gone or replaced, lie outside the directory where the session started, or be one that Claude Code needs approval to enter or is not allowed to examine."} ${He} If the command still makes sense, cd to the directory it was meant for and make the call again; it may need approval again.`, decisionReason: { type: "other", reason: "the shell could not be confirmed in the directory where the call was approved", label: "shellNotInApprovedDirectory" } };
      }
      let _e = te ?? gt?.refusalOf(E, q, Y, Y.setSessionToolPermissionContext), nt = _e === void 0 && ce !== void 0 && e.cardInputDigest !== void 0 && (0, import_chunk_r3e8vdzv.kps)(q) !== e.cardInputDigest;
      if (nt) tt ??= Promise.resolve({ ended: "step_differs" });
      if (_e === void 0 && (ut || Je !== void 0) && !nt) {
        Wt ??= Fo(E, Ln(E, q), Y, D, Je);
        let de = await Wt;
        if (de !== void 0) return de;
        if (et) et = false, await ft(mt);
      }
      if (_e === void 0 && ce !== void 0 && e.cardInput !== void 0 && Y.forRemoteExecution !== true) tt ??= wJs(E, q, ce, e.cardInput, Y, D);
      let Ke = _e === void 0 ? await tt : void 0;
      if (Ke !== void 0 && Ke.ended !== "served") return XHt(E.name, D, Ke.ended);
      if (_e === void 0 && V.behavior === "allow") (0, import_chunk_jejz6sfb.VYr)((0, import_chunk_jejz6sfb.kRn)(Y.session, D), E, D, Y);
      return _e ?? { ...V, updatedInput: Ke?.input ?? ce, decisionReason: y.kind === "strict" && !re || V.behavior === "deny" ? { type: "permissionPromptTool", permissionPromptToolName: E.name, toolResult: V } : { type: "mode", mode: "default" } };
    }, Vt = Ut(e.siblings, ie, g.options.toolAliases).runs, ht = /* @__PURE__ */ new Set();
    {
      var _stack = [];
      try {
        const E = __using(_stack, y.kind === "strict" && V.behavior === "allow" && I === import_chunk_hn3cwwzt.ke ? y.lateAllowBatchStarts?.(e.askedInDirectory) : void 0);
        const q = __using(_stack, y.kind === "strict" && !re ? y.lateAnswerBatchStarts?.(D) : void 0);
        let Y = [];
        const Ee = __using(_stack, { [Symbol.dispose]: () => we(a).keep(Y) });
        if (e.nobodyAnswered === true && y.kind !== "strict" && A) {
          let se = await (0, import_chunk_bzyb60p0.KNt)(g.storageV5);
          if ((0, import_chunk_bzyb60p0.BMe)()) await we(a).settled();
          Y.push(...xqo(a, P.uuid, se)), we(a).keep(YHt((0, import_chunk_pbteexar.Ls)([P, ...Vt.map((oe) => oe.assistantMessage)], (oe) => oe.uuid), e.messageRows, a));
        }
        yield* Nt({ runs: [{ block: H, assistantMessage: P, messageRows: e.messageRows }, ...Vt], tools: ie, canUseTool: Nn, executionContext: { ...$e, requireCanUseTool: true, lateAnswerFor: D, markToolCallStarted: ht.add.bind(ht), ...(0, import_chunk_bzyb60p0.Q6a)(Q?.bridgeEnd) && ye?.departureCause === "not_offered" && { missingToolHint: { toolUseID: D, hint: import_chunk_bzyb60p0.eVa } }, ...Q?.bridgeEnd === "stub" && ye?.departureCause === "not_offered" && { missingToolHint: { toolUseID: D, hint: import_chunk_bzyb60p0.Z6a } }, markToolCallRunning: (se, oe = true, _e = false) => {
          if (se === D && !_e && oe) Un();
        } }, mutableMessages: a, persistSession: A, notSent: O, stampsShutdownCuts: e.nobodyAnswered });
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    }
    if (et && mt.length > 0) (0, import_chunk_w578pjby.t)(`Orphaned permission for ${I}: the call was refused or ended before its rules were checked, so none of the answer's permission updates was applied`, { level: "warn" });
    if (await jt, Ze.length > 0) {
      let E = (0, import_chunk_bz1f2qnq.Z)(g).mode;
      (0, import_chunk_w578pjby.t)(yt ? `Orphaned permission for ${I}: the call reached its permission check but did not start (for example, its directory could not be confirmed, its approval could not be reused, or the answer's input did not fit the tool), so the session stays in ${E} mode and the stored answer's switch to ${be} was not applied` : `Orphaned permission for ${I}: the call ended before the stored answer was consulted (for example, invalid input or a hook's deny), so the session stays in ${E} mode and the stored answer's switch to ${be} was not applied`, { level: "warn" }), Ht(yt ? "not_run_after_permission_check" : "call_ended_before_permission_check", E);
    }
    gt?.warnIfNeverAsked();
    let wt = ht.has(D);
    yield* await rt({ ...K, tools: ie });
    let zt = await Sn(e, a, A, g);
    if (qt) {
      let E = await tt;
      return { reExecuted: true, toolWait: Q, ...zt, callStarted: wt, ...E !== void 0 && { cardStep: E.ended }, ...E !== void 0 && "differs" in E && E.differs !== void 0 && { cardStepDiffers: E.differs }, ...E !== void 0 && "folder" in E && E.folder !== void 0 && { cardStepFolder: E.folder } };
    }
    return g.abortController.signal.aborted ? { reExecuted: false, reason: "aborted", toolWait: Q, callStarted: wt } : { reExecuted: false, reason: "closed_unrun", toolWait: Q, missingTool: ye, ...zt, callStarted: wt };
  } catch (_3) {
    var _error2 = _3, _hasError2 = true;
  } finally {
    __callDispose(_stack2, _error2, _hasError2);
  }
}
function xo(e) {
  return e.kind === "strict" ? (0, import_chunk_f9x2f6cx.VS)()?.shell ?? "unknown" : (0, import_chunk_18rsj2ts.pe)();
}
async function Sn(e, r, o, a) {
  if (e.note === void 0 || a.abortController.signal.aborted) return {};
  let g = false;
  try {
    await Se(r, e.note()), g = true, await Te(r, o, a);
  } catch (S) {
    if (!(0, import_chunk_jv7av99m.Fe)(S)) (0, import_chunk_k449cc64.i)(S);
  }
  return g ? { noteStored: true } : {};
}
function kJs(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "user" && !(0, import_chunk_bzyb60p0.eot)(o) && !(0, import_chunk_f9x2f6cx.Hu)(o)) return true;
    if (o.type === "assistant" && !(0, import_chunk_f9x2f6cx.Hu)(o) && !(0, import_chunk_bzyb60p0.qHe)(o)) return false;
  }
  return false;
}
async function* kn({ block: e, assistantMessage: r, messageRows: o, message: a, fromHostsPrompt: g, tools: S, context: y, mutableMessages: h, persistSession: R, toolDenialKind: C, notSent: A }) {
  if ((0, import_chunk_xfj2cwfv.nn)() && !y.abortController.signal.aborted) await (0, import_chunk_xfj2cwfv.Ga)();
  let k = h.some((x) => x.type === "assistant" && Array.isArray(x.message.content) && x.message.content.some((H) => H.type === "tool_use" && "id" in H && H.id === e.id)), P = {};
  if (!k) {
    let x = YHt([r], o, h);
    P = Mt(x, h, import_chunk_bzyb60p0.Pb), we(h).keep(x), await Te(h, R, y);
  }
  if (yield Ye(r, S), A?.length) yield* await Ie({ notSent: A, tools: S, mutableMessages: h, persistSession: R, context: y });
  let D = { ...Uqo(e.id, typeof a === "string" && a !== "" ? a : import_chunk_0ha8wex8.hp, g, r, C), ...P };
  await Se(h, D), await Te(h, R, y), yield* RO(D, S);
}
function zHa(e, r, o, a) {
  let g = o.message.content.find((h) => h.type === "tool_use" && h.id === r), S = g?.type === "tool_use" ? g : void 0, y = S && (0, import_chunk_b83x8d52.Dh)(a.options.tools, S.name, a.options.toolAliases);
  if ((0, import_chunk_2ms4sey3.V7t)(e, y, a), S !== void 0 && (0, import_chunk_0jve1fep.Le)(S.input)) a.onPermissionDenial?.(y ?? { name: S.name }, r, S.input);
  return Uqo(r, e.message || import_chunk_bzyb60p0.Tq, true, o, e.decisionClassification === "user_reject" ? "user-rejected" : void 0);
}
function Uqo(e, r, o, a, g) {
  let S = { behavior: "deny", message: r, toolUseID: e, decisionReason: { type: "mode", mode: "default" } };
  return (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: r, is_error: true, tool_use_id: e }], toolUseResult: `Error: ${r}`, toolDenialKind: g ?? (0, import_chunk_bzyb60p0.JTe)(S), holdsPersonsWords: (0, import_chunk_bzyb60p0.DMn)(r, o) !== void 0 ? true : void 0, ...g === "user-rejected" && { permissionDecision: { decision: "reject", source: "user_reject" } }, sourceToolAssistantUUID: a.uuid });
}
function VHa(e) {
  if (e.ran) return true;
  switch (e.reason) {
    case "not_stored":
    case "history_appended":
    case "stopped_closed":
    case "stopped_unconfirmed":
      return true;
    case "no_tool_use_block":
    case "tool_unavailable":
    case "already_recorded":
    case "carried_writes_unplaceable":
    case "conversation_moved":
    case "store_refused":
      return false;
  }
}
function vn(e, { kind: r, relayMarker: o, messages: a }, g, S) {
  if (!e || o === void 0 || r === "stopped") return;
  let y;
  try {
    y = e.planRelayFromHandoff({ relayMarker: o, carried: a, conversation: g, persistSession: !(0, import_chunk_bzyb60p0.El)(), storeConfirms: S, turnKind: r });
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h), y = { arm: false };
  }
  return y.arm ? y.markerLine : void 0;
}
async function Dn({ memoryLine: e }, r, { storageV5: o }) {
  if (e && r && await (0, import_chunk_bzyb60p0.zrt)((0, import_chunk_f9x2f6cx.W)(), e.uuid, o)) {
    (0, import_chunk_w578pjby.t)("handleHandedOffTurn: the memory line is already in the transcript; the turn goes on without it", { level: "warn" });
    return;
  }
  return e;
}
function Cn(e, r, o) {
  return o ? e.toSpliced(e.length - r + 1, 0, o) : e;
}
function En(e, r, o, a) {
  if (!e || !r) return;
  try {
    e.armRelayFromStoredHandoff(r, o, a);
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g);
  }
}
async function* KHa(e, r, o, a, g, S, y, h, R) {
  let C = !(0, import_chunk_f9x2f6cx.DI)();
  if (e.kind !== "run") return yield* Uo(e, r, o, a, C, S, y);
  let A = (0, import_chunk_qwbhh2k3.lL)(e.messages);
  if (A?.type !== "assistant" || e.toolUseIDs.length === 0) return (0, import_chunk_w578pjby.t)("handleHandedOffTurn: the turn does not end with an assistant message naming tool_uses to run; running nothing", { level: "warn" }), e.release?.(), { ran: false, reason: "no_tool_use_block" };
  let k = Array.isArray(A.message.content) ? A.message.content : [], P = [];
  for (let N of e.toolUseIDs) {
    let J = k.find((re) => re.type === "tool_use" && re.id === N), G = o.some((re) => re.type === "user" && Array.isArray(re.message.content) && re.message.content.some((te) => te.type === "tool_result" && te.tool_use_id === N));
    if (J === void 0 || G) return (0, import_chunk_w578pjby.t)(`handleHandedOffTurn: tool_use ${N} is not an unanswered call of the turn's last assistant message; running nothing`, { level: "warn" }), e.release?.(), { ran: false, reason: "no_tool_use_block" };
    if (!(0, import_chunk_b83x8d52.Dh)(r, J.name, a.options.toolAliases) && !(0, import_chunk_bzyb60p0.DPn)(J.name, a)) return (0, import_chunk_w578pjby.t)(`handleHandedOffTurn: tool "${J.name}" for tool_use ${N} is not in the pool (${r.length} available); running nothing`, { level: "warn" }), e.release?.(), { ran: false, reason: "tool_unavailable" };
    P.push({ block: J, assistantMessage: A });
  }
  if ((0, import_chunk_7f901c6t.DQ)(o)) return (0, import_chunk_w578pjby.t)("handleHandedOffTurn: the conversation ends in a call that has no result yet; running nothing", { level: "warn" }), e.release?.(), { ran: false, reason: "conversation_moved" };
  let D = vn(y, e, o, S !== void 0), x = e.messages, H = A;
  if (y && !D) {
    H = (0, import_chunk_bzyb60p0.Gur)(A), x = [...x.slice(0, -1).map((N) => N.type === "assistant" ? (0, import_chunk_bzyb60p0.Gur)(N) : N), H];
    for (let N of P) N.assistantMessage = H;
  }
  let I = await Dn(e, C, a);
  if (C) {
    for (let N of D ? [...x, D] : x) if (await (0, import_chunk_bzyb60p0.zrt)((0, import_chunk_f9x2f6cx.W)(), N.uuid, a.storageV5)) return (0, import_chunk_w578pjby.t)(`handleHandedOffTurn: line ${N.uuid} of the handed-off turn is already in the transcript; running nothing`, { level: "warn" }), { ran: false, reason: "already_recorded" };
  }
  if (a.setToolPermissionContext(import_chunk_pmryp5f3.yLe), R && !await R(e, r, a)) return (0, import_chunk_w578pjby.t)("handleHandedOffTurn: could not write the files of the Write calls the turn brought already answered (the reason is in the turn_handoff_carried_writes diagnostic line); running nothing", { level: "warn" }), e.release?.(), { ran: false, reason: "carried_writes_unplaceable" };
  let L = S?.(), O = [I, D, ...x].flatMap((N) => N ? [N.uuid] : []);
  if (we(o).keep(I ? [I, ...x] : x), (0, import_chunk_1ek4hhs6.wOi)(x), D) y?.beginMarkerLineWrite();
  let K = await (0, import_chunk_w4dc83v7.Brn)("resume_other", "resume_store_confirm", async () => {
    if (C) {
      let N = performance.now();
      await (0, import_chunk_bzyb60p0._E)(Cn(o, x.length, D), void 0, void 0, void 0, a.storageV5), (0, import_chunk_w4dc83v7._tl)(performance.now() - N);
    }
    return L === void 0 || await L(a.abortController.signal, O) === true;
  });
  if (L !== void 0 && !K) {
    let N = (0, import_chunk_cbnm4p23.Ai)(a.abortController.signal.reason);
    if (N === "remote-cancel" || N === "user-cancel") {
      let J = await L(AbortSignal.timeout(Lt), O) === true;
      return yield* In(H, J, r, o, () => Te(o, C, a)), { ran: false, reason: J ? "stopped_closed" : "stopped_unconfirmed" };
    }
    return (0, import_chunk_w578pjby.t)("handleHandedOffTurn: the carried lines were not confirmed stored (dropped by the store, or the turn was interrupted while waiting); running nothing", { level: "warn" }), { ran: false, reason: "not_stored" };
  }
  En(y, D, o, "run");
  let j = e.messages.some(An);
  if (j) {
    let { alwaysAllowRules: N, pollEventDeliveryGuard: J } = (0, import_chunk_bz1f2qnq.Z)(a);
    if (N.command !== void 0 || J !== void 0) (0, import_chunk_qf73a9we.T_o)(a, void 0, void 0);
    (0, import_chunk_qanr9g0g.O$t)(a.setToolPermissionContext, []);
  }
  let z = o.findLastIndex(An);
  return { ran: true, contextLayers: yield* Nt({ runs: P, tools: r, canUseTool: g, executionContext: { ...a, turnStartIndex: j && z >= 0 ? z : o.length }, mutableMessages: o, persistSession: C, beforeRun: h && (() => h(a.abortController.signal)) }) };
}
function An(e) {
  return e.type === "user" && !e.isMeta && !e.toolUseResult && !e.isCompactSummary && !(0, import_chunk_bzyb60p0.Sm)(e);
}
var Lt = 15e3;
async function* Uo(e, r, o, a, g, S, y) {
  let { kind: h, messages: R } = e, C = (0, import_chunk_7f901c6t.mmr)(R), A = o.find((G) => G.uuid === C?.uuid) ?? C, k = (G, re) => {
    if ((0, import_chunk_w578pjby.t)(`handleHandedOffTurn: ${re}; appending nothing`, { level: "warn" }), G !== "already_recorded") e.release?.();
    return { ran: false, reason: G };
  };
  if (A?.type !== "assistant") return k("no_tool_use_block", "the turn holds no assistant message to echo");
  let P = () => Te(o, g, a), D = new Set(o.map((G) => G.uuid)), x = 0;
  while (x < R.length && D.has(R[x].uuid)) x++;
  let H = R.slice(x);
  if (H.some((G) => D.has(G.uuid))) return k("already_recorded", "the conversation holds some of the carried lines out of order");
  if (x > 0 && !(h === "history" && H.length === 0) && (0, import_chunk_7f901c6t.a0n)(o)?.uuid !== R[x - 1].uuid) return k("conversation_moved", "the conversation has moved on past the part of the turn it holds");
  if (x === 0 && (0, import_chunk_7f901c6t.DQ)(o)) return k("conversation_moved", "the conversation ends in a call that has no result yet");
  if (g) {
    for (let G of H) if (await (0, import_chunk_bzyb60p0.zrt)((0, import_chunk_f9x2f6cx.W)(), G.uuid, a.storageV5)) return k("already_recorded", `carried message ${G.uuid} is already in the transcript`);
  }
  let I = h === "history" && x === 0, L = I ? await Dn(e, g, a) : void 0, O = I ? vn(y, e, o, S !== void 0) : void 0;
  if (O && await (0, import_chunk_bzyb60p0.zrt)((0, import_chunk_f9x2f6cx.W)(), O.uuid, a.storageV5)) (0, import_chunk_w578pjby.t)("handleHandedOffTurn: the marker line is already in the transcript; appending the turn without it", { level: "warn" }), O = void 0;
  let K = S?.();
  if (H.length > 0) {
    if (we(o).keep(L ? [L, ...H] : H), (0, import_chunk_1ek4hhs6.wOi)(H), O) y?.beginMarkerLineWrite();
    await Te(Cn(o, H.length, O), g, a);
  }
  let j = K === void 0 || await K(AbortSignal.timeout(Lt), [L, O, ...R].flatMap((G) => G ? [G.uuid] : [])), z = j === true, X = o.findIndex((G) => G.uuid === R[0]?.uuid), N = o[X - 1], J = j === "refused" && h === "history" && N?.type === "attachment" && N.attachment.type === "cowork_memory_context" && (N.uuid === L?.uuid || x > 0 && K !== void 0 && await K(AbortSignal.timeout(Lt), [N.uuid]) === "refused");
  if (j === "refused" && h === "history" && X >= 0 && o.findLast(import_chunk_bzyb60p0.eae)?.uuid === R.at(-1)?.uuid) {
    if (J) X--;
    return o.splice(X), (0, import_chunk_w578pjby.t)("handleHandedOffTurn: the store refused lines of the turn; removed it, echoing nothing", { level: "warn" }), { ran: false, reason: "store_refused" };
  }
  if (h === "stopped") yield* In(A, z, r, o, P);
  else if (z) En(y, O, o, "history"), yield Ye(A, r);
  if (!z) return (0, import_chunk_w578pjby.t)("handleHandedOffTurn: the carried lines were not confirmed stored; echoing nothing", { level: "warn" }), { ran: false, reason: h === "stopped" ? "stopped_unconfirmed" : "not_stored" };
  return { ran: false, reason: h === "stopped" ? "stopped_closed" : "history_appended" };
}
async function* In(e, r, o, a, g) {
  if (r) yield Ye(e, o);
  let S = /* @__PURE__ */ new Set();
  for (let C of a) if (C.type === "user" && Array.isArray(C.message.content)) {
    for (let A of C.message.content) if (A.type === "tool_result") S.add(A.tool_use_id);
  }
  let h = (Array.isArray(e.message.content) ? e.message.content.filter((C) => C.type === "tool_use" && !S.has(C.id)) : []).map((C) => (0, import_chunk_bzyb60p0.Me)({ content: [{ ...(0, import_chunk_bzyb60p0.Qrt)(C.id), content: (0, import_chunk_bzyb60p0._5)(import_chunk_0ha8wex8.mI) }], toolUseResult: import_chunk_0ha8wex8.mI, toolDenialKind: "cancelled", sourceToolAssistantUUID: e.uuid })), R = (0, import_chunk_bzyb60p0.hR)({ toolUse: true });
  for (let C of [...h, R]) if (await Se(a, C), await g(), r) yield* RO(C, o);
}
async function Te(e, r, o) {
  if (r) await (0, import_chunk_bzyb60p0._E)(e, void 0, void 0, void 0, o.storageV5);
}
function Ye(e, r) {
  let o = (0, import_chunk_bzyb60p0.vdr)(e.message.content, r);
  return { type: "assistant", message: e.message, parent_tool_use_id: null, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: e.uuid, timestamp: e.timestamp, error: e.error, ...e.requestId !== void 0 && { request_id: e.requestId }, ...ot(e), ...Ge(e.message.content, e.message.model), ...o.length > 0 && { tool_use_meta: o } };
}
async function Ie({ notSent: e, tools: r, mutableMessages: o, persistSession: a, context: g, afterRefusal: S = false }) {
  let y = [], h = new Set(e.map((A) => A.toolUseID)), R = 0;
  for (let { toolUseID: A, assistantMessage: k, host: P, onUsersDevice: D, otherToolBehindCard: x } of e) try {
    if (!o.some((j) => j.type === "assistant" && Array.isArray(j.message.content) && j.message.content.some((z) => z.type === "tool_use" && z.id === A))) {
      if (Array.isArray(k.message.content) && k.message.content.some((z) => z.type === "tool_use" && !h.has(z.id))) {
        (0, import_chunk_w578pjby.t)(`answerCallsNeverSent: toolUseID=${A} shares its row with a call this batch does not answer; left unanswered`);
        continue;
      }
      we(o).keep([k]), y.push(Ye(k, r));
    }
    let I = x && Array.isArray(k.message.content) ? k.message.content.find((j) => j.type === "tool_use" && j.id === A) : void 0, L = I?.type === "tool_use" ? (0, import_chunk_b83x8d52.Dh)(r, I.name, g.options.toolAliases) : void 0, O = D ? import_chunk_bzyb60p0.yja : x ? (0, import_chunk_bzyb60p0.Sja)(I?.type === "tool_use" && L !== void 0 && !Oqo(L, I.input) && !(0, import_chunk_bzyb60p0.h_t)(k, A, r), S) : (0, import_chunk_bzyb60p0._ja)(P), K = (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: O, is_error: true, tool_use_id: A }], toolUseResult: `Error: ${O}`, sourceToolAssistantUUID: k.uuid });
    await Se(o, K), await Te(o, a, g), y.push(...RO(K, r)), R += x ? 1 : 0;
  } catch (H) {
    if ((0, import_chunk_jv7av99m.Fe)(H)) (0, import_chunk_w578pjby.t)(`answerCallsNeverSent: turn stopped before toolUseID=${A} got its result`);
    else (0, import_chunk_k449cc64.i)(H);
  }
  let C = (0, import_chunk_4smdap7r.U)(e, (A) => A.otherToolBehindCard === true) - R;
  if (C > 0) (0, import_chunk_cqa9hrgx.l)("ccr_calls_put_back", "left_unanswered", { count: C });
  else if (R > 0) (0, import_chunk_cqa9hrgx.u)("ccr_calls_put_back", { count: R });
  return y;
}
async function rt({ toOtherTools: e, cardToolUseID: r, ...o }) {
  if (e.length === 0) return [];
  let a = o.context.abortController.signal.aborted ? "aborted" : (0, import_chunk_bzyb60p0.U3e)(o.mutableMessages, [r]).size > 0 ? "card_call_unanswered" : void 0;
  if (a !== void 0) return (0, import_chunk_cqa9hrgx.l)("ccr_calls_put_back", a, { count: e.length }), [];
  let g = new Set(o.mutableMessages.flatMap((S) => S.type === "user" && Array.isArray(S.message.content) ? S.message.content.flatMap((y) => y.type === "tool_result" ? [y.tool_use_id] : []) : []));
  return Ie({ notSent: e.filter((S) => !g.has(S.toolUseID)), ...o });
}
async function* Nt({ runs: e, tools: r, canUseTool: o, executionContext: a, mutableMessages: g, persistSession: S, beforeRun: y, notSent: h, echoed: R, stampsShutdownCuts: C }) {
  let A = (0, import_chunk_pbteexar.Ls)(e.map((D) => D.assistantMessage), (D) => D.uuid), k;
  for (let D of A) {
    let x = e.filter((L) => L.assistantMessage.uuid === D.uuid), H = x.map((L) => L.block.id);
    if (!g.some((L) => L.type === "assistant" && Array.isArray(L.message.content) && L.message.content.some((O) => O.type === "tool_use" && "id" in O && H.includes(O.id)))) {
      let L = YHt([D], x.find((O) => O.messageRows !== void 0)?.messageRows, g);
      if (k ??= Mt(L, g, import_chunk_bzyb60p0.Pb), we(g).keep(L), S) await (0, import_chunk_bzyb60p0._E)(g, void 0, void 0, void 0, a.storageV5);
    }
    if (!R?.has(D.uuid)) yield Ye(D, r);
  }
  if (h?.length) yield* await Ie({ notSent: h, tools: r, mutableMessages: g, persistSession: S, context: a });
  if (y) try {
    await y();
  } catch (D) {
    if (!(0, import_chunk_jv7av99m.Fe)(D)) (0, import_chunk_k449cc64.i)(D);
  }
  let P = a.permissionLayers;
  (0, import_chunk_w4dc83v7.B0n)("resume_other", "turn_start_tool_run");
  try {
    for await (let D of kt(e.map((x) => x.block), A, o, { ...a, takesReportRows: true })) {
      if ((0, import_chunk_bzyb60p0.IO)(D)) continue;
      if (P = D.newContext.permissionLayers, C && D.message?.type === "user" && Lo(D.message, a.abortController.signal)) D.message = { ...D.message, interruptedByShutdown: true };
      if (k !== void 0 && D.message?.type === "user") D.message = { ...D.message, ...k }, k = void 0;
      if (D.message) {
        if (sgt([D.message], a), await Se(g, D.message), S) await (0, import_chunk_bzyb60p0._E)(g, void 0, void 0, void 0, a.storageV5);
        if (D.message.type === "progress" || D.message.type === "user") {
          yield* RO(D.message, a.options.refreshTools?.() ?? r);
          continue;
        }
        if (D.message.type === "attachment") {
          yield* vo(D.message, a.replaysUserMessages);
          continue;
        }
        if (D.message.type === "system" && D.message.subtype === "informational" && D.message.promptSubmitEnding !== void 0) continue;
        yield { ...D.message, session_id: (0, import_chunk_f9x2f6cx.W)(), parent_tool_use_id: null };
      }
    }
  } finally {
    (0, import_chunk_w4dc83v7.W0n)("resume_other", "turn_start_tool_run");
  }
  return P;
}
function Lo(e, r) {
  return (0, import_chunk_cbnm4p23.UA)(r) === true && (e.toolDenialKind === void 0 || import_chunk_3grsnd7a.Qj.includes(e.toolDenialKind)) && Array.isArray(e.message.content) && e.message.content.some((o) => o.type === "tool_result" && o.is_error === true);
}
var No = new RegExp(`(?:^|\\n)(?:<(?:${import_chunk_k449cc64.pQe}|${import_chunk_k449cc64.Cce})>|${import_chunk_k449cc64.lu})(?:\\n|$)`);
function Mn(e) {
  return new Date(e).getTime() || 0;
}
function it(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function Htr(e, r, o = bo) {
  let a = (0, import_chunk_5sjwf92x.iv)(o), g = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map();
  for (let O of e) {
    if (O.type === "attachment" && O.attachment.type === "read_truncation_notice") {
      h.add(O.attachment.toolUseID);
      continue;
    }
    if (O.type === "attachment" && O.attachment.type === "edited_text_file") {
      let K = O.attachment.filename, j = O.attachment.rereadEntry;
      if (typeof K !== "string" || !(0, import_chunk_0jve1fep.Le)(j)) continue;
      let { timestamp: z, contentHash: X, contentLength: N, isPartialView: J } = j, G = j.readBaseline, re = (0, import_chunk_0jve1fep.Le)(G) ? G.sha256 : void 0, te = (0, import_chunk_0jve1fep.Le)(G) ? G.bytes : void 0;
      if (!it(z) || typeof X !== "string" || !/^[0-9a-z]{1,16}$/.test(X) || !it(N) || J !== void 0 && J !== true || G !== void 0 && (typeof re !== "string" || !/^[0-9a-f]{64}$/.test(re) || !it(te))) continue;
      let V = (0, import_chunk_2yx6c1y2.KC)(K) ? (0, import_chunk_n2dbhmj2.Fa)(K, r) : null;
      if (V !== null) R.set(O, { filePath: V, state: { content: "", contentHash: X, contentLength: N, timestamp: z, offset: void 0, limit: void 0, contentNotInModelContext: true, ...J === true && { isPartialView: true }, ...typeof re === "string" && it(te) && { readBaseline: { sha256: re, bytes: te } } } });
      continue;
    }
    if (O.type === "assistant" && Array.isArray(O.message.content)) for (let K of O.message.content) {
      if (K.type !== "tool_use") continue;
      if ((0, import_chunk_syr33dp2.Ic)(K.input)) continue;
      try {
        if (K.name === import_chunk_k883m4fq.De) {
          let z = (0, import_chunk_bzyb60p0.Les)(K.input)?.input ?? K.input, X = (0, import_chunk_339n78pp.gwt)(z?.offset), N = (0, import_chunk_339n78pp.gwt)(z?.limit);
          if ((0, import_chunk_2yx6c1y2.KC)(z?.file_path) && (X === void 0 || typeof X === "number" && Number.isInteger(X) && X >= 0) && (N === void 0 || typeof N === "number" && Number.isInteger(N) && N >= 1)) g.set(K.id, { filePath: (0, import_chunk_n2dbhmj2.xt)(z.file_path, r), offset: X, limit: N });
        } else if (K.name === import_chunk_rb36kwbn.Dt) {
          let z = (0, import_chunk_bzyb60p0.oJo)(K.input)?.input ?? K.input;
          if ((0, import_chunk_2yx6c1y2.KC)(z?.file_path) && typeof z.content === "string") S.set(K.id, { filePath: (0, import_chunk_n2dbhmj2.xt)(z.file_path, r), content: z.content });
        } else if (K.name === import_chunk_rb36kwbn.lt) {
          let j = K.input;
          if ((0, import_chunk_2yx6c1y2.KC)(j?.file_path)) y.set(K.id, (0, import_chunk_n2dbhmj2.xt)(j.file_path, r));
        }
      } catch (j) {
        (0, import_chunk_w578pjby.t)(`extractReadFilesFromMessages: skipping malformed ${K.name} tool_use: ${j}`);
      }
    }
  }
  let C = /* @__PURE__ */ new Set(), A = (0, import_chunk_5sjwf92x.iv)(o), k = [], P = (O, K) => {
    C.add((0, import_path.normalize)(O)), A.set(O, K), k.push(O);
  }, D = (0, import_chunk_2hdy50wd.wj)() ? new Set([...S.values()].map((O) => O.filePath).concat([...y.values()], [...R.values()].filter((O) => O.state.readBaseline !== void 0).map((O) => O.filePath)).map((O) => (0, import_path.normalize)(O))) : void 0, x = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Set();
  if (R.size > 0) for (let O of e) {
    if (O.type !== "user" || !Array.isArray(O.message.content)) continue;
    for (let K of O.message.content) {
      if (K.type !== "tool_result" || K.is_error === true) continue;
      let j = g.get(K.tool_use_id)?.filePath ?? S.get(K.tool_use_id)?.filePath ?? y.get(K.tool_use_id);
      if (j !== void 0) H.add((0, import_path.normalize)(j));
    }
  }
  let I = (O, K) => {
    let j = (0, import_path.normalize)(O), z = A.get(O);
    A.set(O, K), A.set(O, z), x.delete(j);
  }, L = /* @__PURE__ */ new Map();
  e: for (let O = e.length - 1; O >= 0; O--) {
    let K = e[O], j = R.get(K);
    if (j !== void 0) {
      let X = (0, import_path.normalize)(j.filePath), N = j.state.readBaseline === void 0;
      if (x.has(X)) {
        if (!N) I(j.filePath, j.state);
        else if (j.state.contentHash !== x.get(X)) x.delete(X);
      } else if (H.has(X) && !C.has(X) && C.size < o) {
        if (P(j.filePath, j.state), N && D?.has(X)) x.set(X, A.get(j.filePath).contentHash);
      }
      continue;
    }
    if (K.type !== "user" || !Array.isArray(K.message.content)) continue;
    let z = K.message.content;
    for (let X = z.length - 1; X >= 0; X--) {
      let N = z[X];
      if (N.type !== "tool_result" || !N.tool_use_id) continue;
      let J = g.get(N.tool_use_id), G = J && (0, import_path.normalize)(J.filePath), re = G !== void 0 && !C.has(G) && C.size < o;
      if (J && (re || x.has(G)) && N.is_error !== true && typeof N.content === "string" && !(0, import_chunk_xzph4c6z.Zan)(N.content) && N.content !== import_chunk_bp9b0hd8.mFr && N.content !== import_chunk_bp9b0hd8.Ept) {
        let fe = K.toolUseResult, ae = fe?.file?.truncatedByTokenCap === true || h.has(N.tool_use_id) || N.content.startsWith("<system-reminder>" + import_chunk_xzph4c6z.oEt), me, le = fe?.file?.content;
        if ((z.length === 1 || (0, import_chunk_4smdap7r.U)(z, (Re) => Re.type === "tool_result") === 1) && typeof le === "string" && le !== "") me = le.trim();
        else if (No.test(N.content)) continue;
        else me = (0, import_chunk_bzyb60p0.dli)(N.content);
        if (!re) {
          if ((0, import_chunk_5sjwf92x.ubs)(me) !== x.get(G)) x.delete(G);
        } else {
          let Re = Mn(K.timestamp), $e = (0, import_chunk_n2dbhmj2.nF)(J.filePath);
          if (P(J.filePath, { content: me, timestamp: Re, offset: $e ? 1 : J.offset ?? 1, limit: $e ? void 0 : J.limit, ...ae && { isPartialView: true }, contentFromTranscript: true }), D?.has(G)) x.set(G, A.get(J.filePath).contentHash);
        }
      }
      let te = S.get(N.tool_use_id), V = te && (0, import_path.normalize)(te.filePath), ie = V !== void 0 && !C.has(V) && C.size < o;
      if (te && (ie || x.has(V)) && N.is_error !== true) {
        let fe = Mn(K.timestamp), ae = { content: (0, import_chunk_5sjwf92x.eT)(te.content), timestamp: fe, offset: void 0, limit: void 0 };
        if (ie) P(te.filePath, ae);
        else I(te.filePath, ae);
      }
      let ne = y.get(N.tool_use_id), Q = ne && (0, import_path.normalize)(ne), ye = Q !== void 0 && !C.has(Q) && C.size < o;
      if (ne && (ye || x.has(Q)) && N.is_error !== true) {
        let fe;
        try {
          let { content: ae } = (0, import_chunk_73gwqz1r.hra)(ne, void 0, (le) => {
            fe = Math.floor(le.mtimeMs);
          }), me = { content: (0, import_chunk_5sjwf92x.IR)(ae), timestamp: (0, import_chunk_2yx6c1y2.YXi)(ne), offset: void 0, limit: void 0, contentNotInModelContext: true };
          if (ye) P(ne, me);
          else I(ne, me);
        } catch (ae) {
          if ((0, import_chunk_w578pjby.t)(`extractReadFilesFromMessages: skipping Edit disk read for ${ne}: ${(0, import_chunk_jv7av99m.d)(ae)}`), fe !== void 0 && ((0, import_chunk_jv7av99m.w)(ae) === "EAGAIN" || (0, import_chunk_73gwqz1r.vD)(ae))) L.set(Q, { filePath: ne, mtime: fe });
        }
      }
      if (C.size >= o && x.size === 0) break e;
    }
  }
  for (let [O, { filePath: K, mtime: j }] of L) if (!C.has(O) && C.size < o) P(K, { content: "", timestamp: j, offset: void 0, limit: void 0, contentNotInModelContext: true, isPartialView: true });
  for (let O = k.length - 1; O >= 0; O--) {
    let K = k[O];
    a.set(K, A.get(K));
  }
  return a;
}
function u3r(e, r, o) {
  let a = [], g = [], S = [], y = { count: Kt.count, characters: Kt.characters, skipped: 0, isPastLimits: false };
  for (let h of e.toReversed()) {
    if (h.type === "assistant") {
      if (!Array.isArray(h.message.content)) continue;
      for (let C of h.message.content.toReversed()) {
        if (!(0, import_chunk_0jve1fep.Le)(C) || C.type !== "tool_use" || !(0, import_chunk_0jve1fep.Le)(C.input) || (0, import_chunk_syr33dp2.Ic)(C.input)) continue;
        let A = C.input, k = (0, import_chunk_qebpc5de.TEe)(C.name, o).at(-1), P = k === import_chunk_rb36kwbn.Ks ? A.notebook_path : k === import_chunk_k883m4fq.De || k === import_chunk_rb36kwbn.lt || k === import_chunk_rb36kwbn.Dt ? A.file_path : void 0;
        if (typeof P !== "string" || !Ve(P, y)) continue;
        if (k === import_chunk_k883m4fq.De && (0, import_chunk_k883m4fq.uct)(P)) continue;
        let D = (0, import_chunk_n2dbhmj2.Fa)(P, r);
        if (D !== (0, import_path.normalize)(P)) S.push(P);
        if (D === null) {
          (0, import_chunk_w578pjby.t)(`collectRewoundFileTrackingPaths: skipping ${C.name} tool_use: its path cannot be resolved`);
          continue;
        }
        a.push(D);
      }
    }
    if (h.type !== "attachment") continue;
    let R = h.attachment;
    if (R.type === "file") {
      let C = R.content?.type;
      if (C !== "image" && C !== "pdf" && C !== "parts" && Ve(R.filename, y)) try {
        a.push((0, import_chunk_n2dbhmj2.xt)(R.filename, r));
      } catch (A) {
        (0, import_chunk_w578pjby.t)(`collectRewoundFileTrackingPaths: skipping malformed file attachment: ${(0, import_chunk_jv7av99m.d)(A)}`);
      }
    } else if (R.type === "nested_memory") {
      if (Ve(R.path, y)) g.push(R.path);
    } else if (R.type === "relevant_memories") {
      if (Array.isArray(R.memories)) {
        for (let C of R.memories.toReversed()) if (Ve(C?.path, y)) a.push(C.path);
      }
    } else if (R.type === "edited_text_file" && Ve(R.filename, y)) try {
      a.push((0, import_chunk_n2dbhmj2.xt)(R.filename, r));
    } catch (C) {
      (0, import_chunk_w578pjby.t)(`collectRewoundFileTrackingPaths: skipping malformed edited_text_file attachment: ${(0, import_chunk_jv7av99m.d)(C)}`);
    }
  }
  if (y.skipped > 0) (0, import_chunk_w578pjby.t)(`collectRewoundFileTrackingPaths: skipped ${y.skipped} paths that are not strings or that MOST_REWOUND_PATHS does not allow`);
  return { readFilePaths: a.reverse(), nestedMemoryPaths: g.reverse(), spelledFilePaths: S.reverse(), isPastLimits: y.isPastLimits };
}
var Kt = { count: 1e4, length: import_chunk_2yx6c1y2.kRt, characters: 4194304 };
function Ve(e, r) {
  if (typeof e !== "string" || e.length > Kt.length || e.length > r.characters || r.count === 0) return r.skipped++, r.isPastLimits ||= typeof e === "string", false;
  return r.count--, r.characters -= e.length, true;
}
function Pn(e, r) {
  let o = e.filter((a) => a.type === "assistant" && (0, import_chunk_7f901c6t.srn)(a) && Array.isArray(a.message.content) && a.message.content.some((g) => g.type === "tool_use" && g.id === (0, import_chunk_bzyb60p0.Aie)(r)));
  return o.findLast((a) => a.handedOff !== true) ?? o[0];
}
var Ko = "tengu_polished_frog";
function Bqo(e, r) {
  try {
    return e.type === "progress" && r.at(-1)?.type === "progress" && (0, import_chunk_bzyb60p0.Qcr)(e.data.type) && (0, import_chunk_865at33z.b)(Ko, true) !== false;
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), false;
  }
}
async function Se(e, r) {
  if (Bqo(r, e)) return;
  try {
    await (0, import_chunk_bzyb60p0.XY)(we(e), [r]);
  } catch (o) {
    if ((0, import_chunk_k449cc64.i)(o), !e.some((a) => a.uuid === r.uuid)) e.push(r);
  }
}
function we(e) {
  return (0, import_chunk_bzyb60p0.T6l)(e, (r) => {
    e.push(...r);
  });
}
function Ut(e, r, o) {
  let a = [], g = [];
  for (let S of e ?? []) {
    let y = Array.isArray(S.assistantMessage.message.content) ? S.assistantMessage.message.content.find((h) => h.type === "tool_use" && h.id === S.toolUseID) : void 0;
    if (y === void 0) continue;
    if ((0, import_chunk_b83x8d52.Dh)(r, y.name, o)) a.push({ block: y, assistantMessage: S.assistantMessage });
    else g.push(y.name);
  }
  return { runs: a, missingToolNames: g };
}
function bn(e) {
  if (e?.behavior === "ask" && e.forcedByCaller === true) return e.pendingBeforeRestart === true ? void 0 : e;
  return { behavior: "allow", updatedInput: {}, decisionReason: { type: "mode", mode: "default" } };
}
function qHa(e, r, o) {
  return e.slice(r).some((a) => a.type === "user" && Array.isArray(a.message.content) && a.message.content.some((g) => g.type === "tool_result" && g.tool_use_id === o));
}
