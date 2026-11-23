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
var chunk_97e5a0h6_exports = {};
__export(chunk_97e5a0h6_exports, {
  Eqr: () => Eqr,
  PIa: () => PIa,
  RIa: () => RIa,
  STn: () => STn,
  Tqr: () => Tqr,
  YYs: () => YYs,
  bTn: () => bTn,
  bqr: () => bqr,
  dKo: () => dKo,
  kqr: () => kqr,
  qYs: () => qYs,
  vqr: () => vqr,
  wqr: () => wqr,
  xIa: () => xIa,
  xer: () => xer
});
module.exports = __toCommonJS(chunk_97e5a0h6_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_ejeefcyk = require("/$bunfs/root/chunk-ejeefcyk.js");
var import_chunk_swfr0z2f = require("/$bunfs/root/chunk-swfr0z2f.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_yq00hd9s = require("/$bunfs/root/chunk-yq00hd9s.js");
var import_chunk_gp23aqt9 = require("/$bunfs/root/chunk-gp23aqt9.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_6a9gdcsm = require("/$bunfs/root/chunk-6a9gdcsm.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_8mxqzyge = require("/$bunfs/root/chunk-8mxqzyge.js");
var import_chunk_p75nz1y9 = require("/$bunfs/root/chunk-p75nz1y9.js");
var import_chunk_qr6brph0 = require("/$bunfs/root/chunk-qr6brph0.js");
var import_chunk_4rrhthp1 = require("/$bunfs/root/chunk-4rrhthp1.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_ft02b5r0 = require("/$bunfs/root/chunk-ft02b5r0.js");
var import_chunk_8a0qz0ab = require("/$bunfs/root/chunk-8a0qz0ab.js");
var import_chunk_6hkrqqbp = require("/$bunfs/root/chunk-6hkrqqbp.js");
var import_chunk_78edkytf = require("/$bunfs/root/chunk-78edkytf.js");
var import_chunk_xgypevhc = require("/$bunfs/root/chunk-xgypevhc.js");
var import_chunk_3ccq0r9v = require("/$bunfs/root/chunk-3ccq0r9v.js");
var import_chunk_k1q4r2vq = require("/$bunfs/root/chunk-k1q4r2vq.js");
var import_chunk_kxv2z9ac = require("/$bunfs/root/chunk-kxv2z9ac.js");
var import_chunk_kzz1w7z4 = require("/$bunfs/root/chunk-kzz1w7z4.js");
var import_chunk_6qga2yp9 = require("/$bunfs/root/chunk-6qga2yp9.js");
var import_chunk_a05a70r9 = require("/$bunfs/root/chunk-a05a70r9.js");
var import_chunk_t92frmtn = require("/$bunfs/root/chunk-t92frmtn.js");
var import_chunk_35s5d0tg = require("/$bunfs/root/chunk-35s5d0tg.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_abbz0fqx = require("/$bunfs/root/chunk-abbz0fqx.js");
var import_chunk_j7dp96he = require("/$bunfs/root/chunk-j7dp96he.js");
var import_chunk_cvv9kfq3 = require("/$bunfs/root/chunk-cvv9kfq3.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var import_chunk_k886eq88 = require("/$bunfs/root/chunk-k886eq88.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_fs = require("fs");
var import_path = require("path");
var Fo = __toESM(require("vm"));
var dr = __toESM(require("vm"));
var Xn = __toESM(require("vm"));
var import_async_hooks = require("async_hooks");
var import_os = require("os");
var import_crypto = require("crypto");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_crypto2 = require("crypto");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
function Ao(e) {
  return `scriptPath must be a script path this tool returned, or a file you can already read (the working directory or a directory you have added): ${e}
A session that cannot call ${import_chunk_k883m4fq.De} cannot load any scriptPath. Pass the whole script inline through ${import_chunk_jar84hn9.xc}'s \`script\` input instead.`;
}
function es(e) {
  let o = { tools: e.options.tools, permissions: () => (0, import_chunk_bz1f2qnq.Z)(e) };
  if ((0, import_chunk_r3kja8v6.ue)()) Object.defineProperty(o, "primitiveToolGrant", { get: () => e.primitiveToolGrant, enumerable: true });
  return o;
}
function dKo(e, o) {
  let r = (0, import_path.resolve)((0, import_chunk_18rsj2ts.pe)(), e), g = (0, import_chunk_p1ewvgeh.nSl)(e, r);
  if (g !== null) return g;
  return ts(r, o) ? null : Ao(e);
}
function ts(e, o) {
  if ((o.tools ?? []).length > 0 && !(0, import_chunk_p1ewvgeh.evt)(o)) return false;
  return (0, import_chunk_p1ewvgeh.LEr)(import_chunk_jar84hn9.xc, e, o, o.permissions());
}
async function wqr(e, o) {
  let r = dKo(e, o);
  if (r !== null) return { error: r };
  let g = (0, import_path.resolve)((0, import_chunk_18rsj2ts.pe)(), e), k = import_fs.constants.O_RDONLY | ni, h;
  try {
    h = await (0, import_promises.open)(g, k);
  } catch (R) {
    return { error: (0, import_chunk_jv7av99m.J)(R) ? `Workflow script file not found: ${e}` : `Failed to read workflow script file ${e}` };
  }
  try {
    let R = await h.stat({ bigint: true });
    if (R.ino === 0n || R.nlink > 1n) return { error: Ao(e) };
    let C = await (0, import_chunk_bzyb60p0.Ixn)(h.fd), E = C ?? await (0, import_promises.realpath)(g);
    if (C === null) {
      let re = await (0, import_promises.open)(E, k | ri);
      try {
        let I = await re.stat({ bigint: true });
        if (I.ino !== R.ino || I.dev !== R.dev || I.nlink !== 1n) return { error: Ao(e) };
      } finally {
        await re.close();
      }
      if (await (0, import_promises.realpath)(E).catch(() => null) !== E) return { error: Ao(e) };
      if ((await h.stat({ bigint: true })).nlink !== 1n) return { error: Ao(e) };
    }
    if (!ts(E, o)) return { error: Ao(e) };
    if (!R.isFile()) return { error: `Workflow script file ${e} is not a regular file` };
    if (R.size > BigInt(import_chunk_p1ewvgeh.qO)) return { error: `Workflow script file ${e} exceeds ${import_chunk_p1ewvgeh.qO} bytes` };
    let le = Buffer.alloc(Number(R.size)), G = 0;
    while (G < le.length) {
      let { bytesRead: re } = await h.read(le, G, le.length - G, G);
      if (re === 0) break;
      G += re;
    }
    return (0, import_chunk_bzyb60p0.jMe)([g, E], void 0), { script: (0, import_chunk_p1ewvgeh.ARe)(le.subarray(0, G).toString("utf-8")), path: E };
  } catch {
    return { error: `Failed to read workflow script file ${e}` };
  } finally {
    await h.close();
  }
}
var ni = (0, import_chunk_cg8dqz0a.x)() === "windows" ? 0 : import_fs.constants.O_NONBLOCK, ri = (0, import_chunk_cg8dqz0a.x)() === "windows" ? 0 : import_fs.constants.O_NOFOLLOW;
function to(e) {
  return Object.setPrototypeOf(e, null), delete e.constructor, delete e.prototype, e;
}
var si = "Date.now() / new Date() are unavailable in workflow scripts (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.", ii = "Math.random() is unavailable in workflow scripts (breaks resume). For N independent samples, include the index in the agent label or prompt.", ai = `(() => {
      'use strict';
      const NOW_ERR = ${(0, import_chunk_w578pjby._)(si)};
      const RANDOM_ERR = ${(0, import_chunk_w578pjby._)(ii)};
      Math.random = function random() { throw new Error(RANDOM_ERR) };
      const RealDate = Date;
      RealDate.now = function now() { throw new Error(NOW_ERR) };
      function ShimDate(...a) {
        if (!new.target) throw new Error(NOW_ERR); // bare Date() \u2192 now-string
        if (a.length === 0) throw new Error(NOW_ERR);
        return Reflect.construct(RealDate, a, new.target);
      }
      ShimDate.now = RealDate.now;
      ShimDate.parse = RealDate.parse;
      ShimDate.UTC = RealDate.UTC;
      ShimDate.prototype = RealDate.prototype;
      // Close the (new Date(x)).constructor backdoor to RealDate.now \u2014 point
      // .constructor at the shim, then freeze RealDate so it can't be undone.
      RealDate.prototype.constructor = ShimDate;
      Object.freeze(RealDate);
      globalThis.Date = ShimDate;
    })()`;
function dn(e) {
  Fo.runInContext(ai, e);
}
var fn = 3e4;
function ns(e) {
  let o = /* @__PURE__ */ new Set(), r = (k) => k();
  function g() {
    for (let k of o) clearTimeout(k);
    o.clear();
  }
  return e?.addEventListener("abort", g, { once: true }), { setTimeout: (0, import_chunk_ejeefcyk.bGe)((k, h) => {
    if (e?.aborted) return 0;
    let R = typeof h === "number" ? h : typeof h === "string" ? +h || 0 : 0, C = Number(setTimeout(() => {
      try {
        r(k);
      } catch {
      }
    }, R));
    return o.add(C), C;
  }), clearTimeout: (0, import_chunk_ejeefcyk.bGe)((k) => {
    if (typeof k === "number" || typeof k === "string") {
      let h = typeof k === "number" ? k : +k;
      if (o.has(h)) o.delete(h), clearTimeout(h);
    }
  }), bindVMInvoke: (k) => {
    r = k;
  } };
}
var se = "__wRg$", rs = `${se}resolve`;
function cn(e) {
  Fo.runInContext(`Object.defineProperty(globalThis, ${(0, import_chunk_w578pjby._)(rs)}, {
      value: Promise.resolve.bind(Promise),
      writable: false, enumerable: false, configurable: false,
    })`, e);
}
function di(e) {
  let o = require("/$bunfs/root/chunk-qkq8jy2e.js"), r = import_chunk_swfr0z2f.Cqr, g = (0, import_chunk_swfr0z2f.Aqr)(e), k = (0, import_chunk_sghy0qej.Pe)("tengu_steady_metcalfe", { safe: true }), h = [], R = (0, import_chunk_swfr0z2f.Rqr)(g, { onToken: k ? (I) => {
    let de = (0, import_chunk_vfyns8ja.v2n)({ token: I, source: g, offset: r.length });
    if (de) h.push(de);
  } : void 0 });
  if (k) os(e, h);
  o.full(R, (I) => {
    if (I.name?.startsWith(se)) throw SyntaxError(`Identifier '${I.name}' is reserved.`);
    if (I.type === "WithStatement") throw SyntaxError("'with' statements are not supported in workflow scripts.");
    if (I.type === "ImportExpression") throw SyntaxError("import() is not available in workflow scripts.");
  });
  let C = [], E = (I) => {
    if (!I) return;
    C.push([I.start, ` ${se}((`], [I.end, "))"]);
  }, le = (I) => {
    for (let de = I.length - 2; de >= 0; de--) {
      let we = I[de];
      if (we && (we.type === "FunctionDeclaration" || we.type === "FunctionExpression" || we.type === "ArrowFunctionExpression")) return we;
    }
    return;
  };
  if (o.simple(R, { VariableDeclaration(I) {
    if (I.kind === "await using") throw SyntaxError("'await using' declarations are not supported in workflow scripts.");
  }, AwaitExpression(I) {
    E(I.argument);
  }, ArrowFunctionExpression(I) {
    if (I.async && I.expression) E(I.body);
  }, ForOfStatement(I) {
    if (I.await) C.push([I.right.start, ` ${se}a((`], [I.right.end, "))"]);
  }, ReturnStatement(I, de) {
    let we = le(de);
    if (!we?.async) return;
    if (we.generator) {
      if (I.argument) C.push([I.argument.start, ` await ${se}((`], [I.argument.end, "))"]);
    } else E(I.argument);
  }, YieldExpression(I, de) {
    let we = le(de);
    if (!(we?.async && we.generator)) return;
    if (I.delegate) {
      if (I.argument) C.push([I.argument.start, ` ${se}a((`], [I.argument.end, "))"]);
    } else E(I.argument);
  } }), C.length === 0) return e;
  C.sort((I, de) => de[0] - I[0]);
  let G = g;
  for (let [I, de] of C) G = G.slice(0, I) + de + G.slice(I);
  let re = G.slice(r.length, G.length - import_chunk_swfr0z2f.OIa.length);
  if (k) os(e, h, { text: re, tokens: ui(h, C, r.length) });
  return re;
}
var qYs = `Workflow scripts run only when Claude Code runs on Bun, the JavaScript runtime its native binary is built with. This process is not running on Bun (it reports ${process.versions.deno !== void 0 ? `Deno ${process.versions.deno}` : `Node.js ${process.version}`}), so the script was not started. To use workflows, run the native \`claude\` binary (the Agent SDK launches it by default) rather than a JavaScript bundle under another runtime.`;
function STn(e) {
  if (!(0, import_chunk_wzdjp7c0.f_)()) return (0, import_chunk_cqa9hrgx.m)("workflow_compile", "unsupported_runtime"), { ok: false, error: qYs };
  try {
    (0, import_chunk_swfr0z2f.Per)(e);
    let o = di(e), r = `((${se} => ((${se}a) => async () => {'use strict';
${o}
})(${se}it => ({[Symbol.asyncIterator](){const ${se}ai = ${se}it[Symbol.asyncIterator];if (${se}ai != null && typeof ${se}ai !== 'function') throw new TypeError('@@asyncIterator is not a function');const ${se}i = ${se}ai != null ? ${se}ai.call(${se}it) : ${se}it[Symbol.iterator]();if (${se}i === null || (typeof ${se}i !== 'object' && typeof ${se}i !== 'function')) throw new TypeError('Iterator is not an object');const ${se}nxt = ${se}i.next;if (typeof ${se}nxt !== 'function') throw new TypeError('Iterator.next is not a function');const ${se}ret = ${se}i.return;const ${se}thr = ${se}i.throw;const ${se}w = s => ${se}(s).then(s => { if (s === null || (typeof s !== 'object' && typeof s !== 'function')) throw new TypeError('Iterator result is not an object'); const done = s.done; return ${se}(s.value).then(value => ({value, done})) });return {next:v=>${se}w(${se}nxt.call(${se}i,v)),return:v=>${se}w(typeof ${se}ret==='function'?${se}ret.call(${se}i,v):{value:v,done:true}),throw:e=>typeof ${se}thr==='function'?${se}w(${se}thr.call(${se}i,e)):${se}(typeof ${se}ret==='function'?${se}ret.call(${se}i):undefined).then(()=>{throw new TypeError('The iterator does not provide a throw method')})}}})))(${rs}))()`, g = new Fo.Script(r, { filename: "workflow.js", importModuleDynamically: () => {
      throw (0, import_chunk_ejeefcyk.FAr)("import() is not available in workflow scripts.");
    } });
    return (0, import_chunk_cqa9hrgx.u)("workflow_compile"), { ok: true, vmScript: g };
  } catch (o) {
    return (0, import_chunk_cqa9hrgx.m)("workflow_compile", o instanceof qn ? "slash_mismatch" : "syntax_error"), { ok: false, error: `SyntaxError: ${o instanceof Error ? o.message : String(o)}` };
  }
}
class qn extends SyntaxError {
}
function os(e, o, r) {
  let g = (0, import_chunk_vfyns8ja.T2n)({ text: r?.text ?? e, tokens: r?.tokens ?? o, engineParses: import_chunk_swfr0z2f.Per });
  if (g === -1) return;
  let k = e.slice(0, o[g].start).split(/\r\n|[\n\r\u2028\u2029]/), h = k.length, R = k.at(-1).length + 1;
  throw new qn(`Line ${h}, column ${R} of the script body (counted after the meta statement, if any): this '/' could be read either as the start of a regular expression or as a division, so the script was not run. End the statement before it with ';' (or parenthesize the expression) so it reads one way.`);
}
function ui(e, o, r) {
  let g = [], k = o.reduce((R, [, C]) => R + C.length, 0), h = 0;
  for (let R = e.length - 1; R >= 0; R--) {
    let C = e[R];
    while (h < o.length && o[h][0] - r > C.start) k -= o[h][1].length, h++;
    g[R] = { start: C.start + k, end: C.end + k, regex: C.regex };
  }
  return g;
}
function bqr(e) {
  let { parse: o } = require("/$bunfs/root/chunk-dzjs7e5t.js"), r = require("/$bunfs/root/chunk-qkq8jy2e.js"), g = false;
  try {
    let k = o(e, { sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true });
    r.simple(k, { MemberExpression(h) {
      if (h.computed || h.object.type !== "Identifier" || h.property.type !== "Identifier") return;
      let R = h.object.name, C = h.property.name;
      if (R === "Date" && C === "now" || R === "Math" && C === "random") g = true;
    }, NewExpression(h) {
      if (h.callee.type === "Identifier" && h.callee.name === "Date" && h.arguments.length === 0) g = true;
    } });
  } catch {
    return false;
  }
  return g;
}
var fi = (0, import_chunk_bzyb60p0.x2a)("Workflow: swallowed an unhandled rejection (not exiting): a script left a promise that carries the reason of a failed agent(), parallel(), pipeline() or workflow() call without a handler");
function pn(e) {
  let o = (0, import_chunk_ejeefcyk.NTo)(e), r = (0, import_chunk_ejeefcyk.XCl)(e, fi);
  return (g) => r(o(g));
}
function Qn(e, o) {
  let r = e, g = (le, G) => {
    let re = r[le];
    if (typeof re !== G || re === null) throw TypeError("sealSyncGlobalsInVM: the context lacks one of log, phase, setTimeout, clearTimeout, console, budget \u2014 call it only on a context built by createWorkflowContext or createChildRealm");
    return re;
  }, k = (le, G) => Object.defineProperty(e, le, { ...Object.getOwnPropertyDescriptor(e, le), value: G });
  for (let le of ["log", "phase", "setTimeout", "clearTimeout"]) k(le, o(g(le, "function")));
  let { vmConsole: h, vmBudget: R } = Xn.runInContext(`((freeze) => ({
      vmConsole: (log, info, debug, error, warn) => freeze({ __proto__: null, log, info, debug, error, warn }),
      vmBudget: (total, spent, remaining) => freeze({ __proto__: null, total, spent, remaining }),
    }))(Object.freeze)`, e), C = g("console", "object");
  k("console", h(o(C.log), o(C.info), o(C.debug), o(C.error), o(C.warn)));
  let E = g("budget", "object");
  k("budget", R(E.total, o(E.spent), o(E.remaining)));
}
function er(e, o = { sanitize: (r) => r === null || typeof r !== "object" && typeof r !== "function" ? r : {}, toStr: (r) => (0, import_chunk_ejeefcyk.$Ar)(r) }) {
  function r(k) {
    return k.map((h) => {
      if (typeof h === "string") return h;
      if (h === null || typeof h !== "object" && typeof h !== "function") try {
        return (0, import_chunk_w578pjby._)(h);
      } catch {
        return `[${typeof h}]`;
      }
      let R;
      try {
        let E = (0, import_chunk_w578pjby._)(o.sanitize(h));
        if (E !== void 0 && E !== "{}") return E;
        R = E ?? `[${typeof h}]`;
      } catch (E) {
        let le = false;
        try {
          let G = E?.message;
          le = typeof G === "string" && G.includes("exceeds the maximum");
        } catch {
        }
        return le ? `[${typeof h}: array exceeds the ${import_chunk_k886eq88.NS}-element logging cap]` : `[${typeof h}]`;
      }
      let C = o.toStr(h);
      return C === "[object Object]" || C === "<unprintable>" ? R : C;
    }).join(" ");
  }
  let g = (k) => (0, import_chunk_ejeefcyk.bGe)((...h) => e(k + r(h)));
  return { __proto__: null, log: g(""), info: g(""), debug: g(""), error: g("[error] "), warn: g("[warn] ") };
}
async function ci(e, o) {
  let r = e.intakeClone(o);
  if (typeof r === "string") {
    let g = await e.resolveWorkflow(r, (0, import_chunk_18rsj2ts.pe)());
    if (!g) {
      let h = (await e.getAllWorkflows((0, import_chunk_18rsj2ts.pe)())).map((R) => R.name).join(", ");
      throw Error(`workflow('${r}'): no workflow with that name. Available: ${h || "(none)"}`);
    }
    let k = (0, import_chunk_gp23aqt9.gR)(g.script);
    if ("error" in k) throw Error(`workflow('${r}'): ${k.error}`);
    return { childName: g.name, scriptBody: k.scriptBody };
  }
  if (r && typeof r === "object" && "scriptPath" in r && typeof r.scriptPath === "string") {
    if ((0, import_chunk_t92frmtn.S7t)()) throw Error("workflow({scriptPath}): this session restricts workflows to named bundled workflows (CLAUDE_WORKFLOW_NAME_ONLY is set) \u2014 nest with workflow('<name>') instead.");
    let g = await e.loadScriptPath(r.scriptPath);
    if ("error" in g) throw Error(`workflow({scriptPath: '${r.scriptPath}'}): ${g.error}`);
    let k = (0, import_chunk_gp23aqt9.gR)(g.script);
    if ("error" in k) throw Error(`workflow({scriptPath: '${r.scriptPath}'}): ${k.error}`);
    return { childName: k.meta.name, scriptBody: k.scriptBody };
  }
  throw TypeError("workflow() expects a workflow name (string) or {scriptPath: string}");
}
function pi(e, o, r) {
  let g = `[${o}] `, k = { sanitize: (ge) => ge === null || typeof ge !== "object" && typeof ge !== "function" ? ge : {}, toStr: (ge) => (0, import_chunk_ejeefcyk.$Ar)(ge) }, h = { __proto__: null, budget: e.budget, setTimeout: e.timers.setTimeout, clearTimeout: e.timers.clearTimeout, phase: (0, import_chunk_ejeefcyk.bGe)((ge) => {
  }), log: (0, import_chunk_ejeefcyk.bGe)((ge) => e.hooks.log(g + (0, import_chunk_ejeefcyk.$Ar)(ge))), console: er((ge) => e.hooks.log(g + ge), k) }, R = (0, import_chunk_ejeefcyk.BZ)(h, { codeGeneration: { strings: false, wasm: false } });
  if (dn(R), (0, import_chunk_ejeefcyk.DTo)(R), (0, import_chunk_ejeefcyk.Txe)(R, import_chunk_ejeefcyk.f7e), cn(R), e.sealSyncHooksInVM) Qn(R, (0, import_chunk_ejeefcyk.NTs)(R));
  let C = (0, import_chunk_ejeefcyk.PTt)(R), E = (0, import_chunk_ejeefcyk.NAr)(R), le = (0, import_chunk_ejeefcyk.I2n)(R), G = (0, import_chunk_ejeefcyk.M2n)(R, import_chunk_ejeefcyk.f7e), { vmToStr: re } = (0, import_chunk_ejeefcyk.UTs)(R);
  k.sanitize = G.sanitize, k.toStr = re;
  let I = Xn.runInContext('(o => { try { const s = o && typeof o === "object" ? o.schema : undefined; return s && typeof s === "object" ? s : undefined } catch { return undefined } })', R), de = /* @__PURE__ */ new WeakMap(), we = (ge, _e) => {
    let Oe = le(_e), Qe = I(_e);
    if (Oe && typeof Oe === "object" && Qe) {
      let he = de.get(Qe);
      if (he !== void 0) Oe.schema = he;
      else if (Oe.schema !== void 0) de.set(Qe, Oe.schema);
    }
    return e.hooks.agent(ge, { ...Oe, phase: r });
  };
  return { childCtx: R, errorInfo: C, settle: E, clone: le, asyncWrap: pn(R), agent: we };
}
function mi() {
  return Promise.reject(Error("workflow() cannot be called from within a child workflow \u2014 nesting is limited to one level. Inline the inner script or call its agents directly."));
}
function gi() {
  let e = /* @__PURE__ */ new Map();
  return (o) => {
    let r = (e.get(o) ?? 0) + 1;
    return e.set(o, r), `${import_chunk_xcgcdx61.Fgn} ${o}${r > 1 ? ` #${r}` : ""}`;
  };
}
function ss(e) {
  let o = gi();
  return to(async function(g, k) {
    if (e.abortSignal?.aborted) return new Promise(() => {
    });
    let { childName: h, scriptBody: R } = await ci(e, g), C = STn(R);
    if (!C.ok) throw Error(`workflow('${h}'): ${C.error}`);
    let E = o(h);
    e.hooks.reservePhase(E, "child"), e.hooks.log(`${import_chunk_xcgcdx61.Fgn} running dynamic workflow ${h}`);
    let le;
    try {
      let G = pi(e, h, E);
      le = G.errorInfo;
      let re = { agent: (we, ge) => G.agent(we, ge), parallel: e.hooks.parallel, pipeline: e.hooks.pipeline, workflow: mi };
      for (let [we, ge] of Object.entries(re)) Object.defineProperty(G.childCtx, we, { value: G.asyncWrap((0, import_chunk_ejeefcyk.FTs)(ge)), writable: true, enumerable: true, configurable: true });
      Object.defineProperty(G.childCtx, "args", { value: k === void 0 ? void 0 : G.clone(k), writable: true, enumerable: true, configurable: true });
      let I = await G.settle(C.vmScript.runInContext(G.childCtx, (0, import_chunk_ejeefcyk.O2n)(fn))), de = G.clone(I.v);
      return e.hooks.log(`${import_chunk_xcgcdx61.Fgn} ${h} done`), de;
    } catch (G) {
      let re, I, de;
      if (le) ({ name: re, message: I, stack: de } = le(G));
      else re = G instanceof Error ? G.name : "Error", I = G instanceof Error ? G.message : "", de = G instanceof Error ? G.stack : void 0;
      let we = (0, import_chunk_865at33z.ePs)({ name: re, message: I, stack: de });
      throw e.hooks.recordFailure(`${E}: ${we}`), e.hooks.log(`${import_chunk_xcgcdx61.Fgn} ${h} failed: ${we}`), (0, import_chunk_ejeefcyk.FAr)((0, import_chunk_865at33z.ng)(I), re, we);
    }
  });
}
var _i = "v2", bi = (0, import_chunk_w578pjby._)({ type: "restoring" }), Si = (0, import_chunk_w578pjby._)({ type: "restored" }), mn = (0, import_chunk_w578pjby._)({ type: "resumed" }), or = (0, import_chunk_w578pjby._)({ type: "launched" }).slice(0, -1), Ti = "unreadable";
function rr(e) {
  if (e === void 0) return;
  return typeof e === "string" && import_chunk_ccm69jjy.fm.test(e) ? e : Ti;
}
function Ri(e) {
  for (let o = e.indexOf("{"); o !== -1; o = e.indexOf("{", o + 1)) {
    let r = e.startsWith(or, o), g = e.length - o < or.length && or.startsWith(e.slice(o));
    if (r || g) return true;
  }
  return false;
}
function gn(e) {
  let o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), R;
  for (let C of e) if (C.type === "launched") R ??= rr(C.hiddenScriptSha256);
  else if (C.type === "result") {
    if (o.has(C.key) || k.has(C.key) || g.has(C.key)) h.add(C.key);
    o.set(C.key, C), k.delete(C.key);
  } else if (C.type === "started") {
    if (o.delete(C.key)) k.add(C.key);
    let E = r.get(C.key);
    if (E) E.push(C);
    else r.set(C.key, [C]);
  } else if (C.type === "failed") o.delete(C.key), g.add(C.key);
  return { results: o, started: r, failed: g, demoted: k, replaced: h, ...R !== void 0 && { hiddenScriptSha256: R } };
}
function Ci(e) {
  if (!e) return "{}";
  let o = {}, r = ["schema", "model", "effort", "isolation", "agentType", "disallowedTools", "bashCommandClamp"];
  for (let k of r) {
    let h = e[k];
    if (h === void 0 || typeof h === "function") continue;
    o[k] = h;
  }
  let g = (k) => {
    if (typeof k === "function") return;
    if (Array.isArray(k)) {
      let h = [], R = k.length, C = Number.isSafeInteger(R) ? R : 0;
      for (let E = 0; E < C; E++) h[E] = g(k[E]);
      return h;
    }
    if (k && typeof k === "object") {
      let h = {};
      for (let R of Object.keys(k).sort()) {
        if (R === "__proto__") continue;
        h[R] = g(k[R]);
      }
      return h;
    }
    return k;
  };
  return (0, import_chunk_w578pjby._)(g(o));
}
function ls(e, o, r) {
  let g = (0, import_crypto.createHash)("sha256").update(r).update("\0").update(e).update("\0").update(Ci(o)).digest("hex");
  return `${_i}:${g}`;
}
function ds({ hits: e, recorded: o, firstMiss: r }) {
  if (o === 0) return;
  let g = e === 0 && r !== void 0 ? `Resume matched nothing: 0 of the journal's ${o} saved ${(0, import_chunk_7cfjrnwy.O)(o, "result")} served from cache.` : `Resume: ${e} of the journal's ${o} saved ${(0, import_chunk_7cfjrnwy.O)(o, "result")} served from cache.`;
  if (r === void 0) return g;
  let k = r.failed ? "left no saved result in the earlier run (it failed, was skipped or refused, or its result could not be saved)" : "has no saved result (it or a call before it changed through a script edit, a reorder or different args, an earlier resume re-ran it without finishing, or the earlier run never started it)";
  return `${g} Call ${r.index} and every call after it run fresh, not from cache: it ${k}.`;
}
function wn(e, o, r) {
  let g = (0, import_crypto.createHash)("sha256").update(e).update("\0").update(o).update("\0");
  if (typeof r === "number") g.update(`slot:${r}`);
  else if (r === "fork") g.update("fork");
  else {
    g.update("join");
    for (let k of r) g.update("\0").update(k);
  }
  return g.digest("hex");
}
function sr(e, o) {
  return (0, import_crypto.createHash)("sha256").update(e).update("\0replaced\0").update(o).digest("hex");
}
function Ei(e) {
  let o = (0, import_chunk_78edkytf.cKo)();
  if (o === void 0) return;
  let r = import_chunk_hkvzj051.at.journal(o, (0, import_chunk_f9x2f6cx.W)(), ["workflows", e]);
  return (0, import_chunk_fp3vnecp.db)(r) === void 0 ? r : void 0;
}
class mo {
  path;
  storageV5;
  dirReady = false;
  isTailEnded = false;
  appendTurns = (0, import_chunk_gjzwg6ck.Yee)();
  constructor(e, o) {
    this.path = (0, import_path2.join)((0, import_chunk_78edkytf.UJ)(e), "journal.jsonl");
    let r = o === void 0 ? void 0 : Ei(e);
    this.storageV5 = o === void 0 || r === void 0 ? void 0 : { backend: o, key: r };
  }
  async readLines() {
    if (this.storageV5 !== void 0) return this.loadV5(this.storageV5);
    try {
      return (await (0, import_promises2.readFile)(this.path, "utf8")).split(`
`);
    } catch (e) {
      if (!(0, import_chunk_jv7av99m.J)(e)) throw e;
      return;
    }
  }
  async restoreState() {
    let e = await this.readLines();
    if (e === void 0) return "missing";
    return e[0] === bi && !e.includes(Si) ? "partial" : "complete";
  }
  async writeRestored(e) {
    let o = [{ type: "restoring" }, ...e, { type: "restored" }].map((h) => (0, import_chunk_w578pjby.fP)(h)), r = this.storageV5;
    if (r === void 0) {
      await (0, import_promises2.mkdir)((0, import_path2.dirname)(this.path), { recursive: true }), await (0, import_chunk_q7qjcthc.yr)(this.path, o.join(""));
      return;
    }
    let g = await r.backend.delete(r.key);
    if (!g.ok && g.error.code !== "NotFound") throw Error("LocalFileJournal: journal delete failed", { cause: g.error });
    let k = await r.backend.append(r.key, o.map((h) => ({ data: h })));
    if (!k.ok) throw Error("LocalFileJournal: journal append failed", { cause: k.error });
  }
  async load() {
    let e = await this.readLines();
    if (e === void 0) return gn([]);
    let o = [], r = this.storageV5 !== void 0 && await this.isTailTorn();
    for (let [g, k] of e.entries()) {
      if (!k || k === mn) continue;
      try {
        o.push((0, import_chunk_w578pjby.Cs)(k));
      } catch (h) {
        let C = (this.storageV5 === void 0 && g === e.length - 1 || e[g + 1] === mn) && !Ri(k);
        r ||= !C, (0, import_chunk_w578pjby.t)(`LocalFileJournal: skipping unparseable line in ${this.path}: ${h}`);
      }
    }
    return { ...gn(o), ...r && { hasUnreadLine: true } };
  }
  async loadV5({ backend: e, key: o }) {
    let r = new TextDecoder("utf-8", { ignoreBOM: true }), g = [], k;
    for (; ; ) {
      let h = await e.readRecords(o, k === void 0 ? void 0 : { fromSeq: k });
      if (!h.ok) {
        if (h.error.code === "NotFound") return;
        throw (0, import_chunk_w578pjby.t)(`LocalFileJournal: read of ${this.path} failed: ${(0, import_chunk_7n1spq36.un)(h.error)}`), Error("LocalFileJournal: journal read failed", { cause: h.error });
      }
      for (let C of h.value.items) {
        let E = r.decode(C.data);
        g.push(E.endsWith(`
`) ? E.slice(0, -1) : E);
      }
      let R = h.value.nextSeq;
      if (R === void 0) return g;
      if (k !== void 0 && R <= k) throw Error("LocalFileJournal: journal read cursor failed to advance");
      k = R;
    }
  }
  async isTailTorn() {
    let e = this.storageV5;
    if (e !== void 0) {
      let r = await e.backend.stat(e.key);
      if (!r.ok) {
        if (r.error.code === "NotFound") return false;
        throw Error("LocalFileJournal: journal stat failed", { cause: r.error });
      }
      return (r.value.tornTailBytes ?? 0) > 0;
    }
    let o;
    try {
      o = await (0, import_promises2.open)(this.path, "r");
    } catch (r) {
      if ((0, import_chunk_jv7av99m.J)(r)) return false;
      throw r;
    }
    try {
      let { size: r } = await o.stat();
      if (r === 0) return false;
      let g = Buffer.alloc(1);
      return await o.read(g, 0, 1, r - 1), g[0] !== 10;
    } finally {
      await o.close();
    }
  }
  async append(e) {
    let o = await this.appendTurns.acquire();
    try {
      let r = !this.isTailEnded && await this.isTailTorn(), g = this.storageV5;
      if (g !== void 0) {
        let h = r ? [{ data: `
` }, { data: `${mn}
` }] : [], R = await g.backend.append(g.key, [...h, { data: (0, import_chunk_w578pjby.fP)(e) }]);
        if (!R.ok) throw (0, import_chunk_w578pjby.t)(`LocalFileJournal: append to ${this.path} failed: ${(0, import_chunk_7n1spq36.un)(R.error)}`), Error("LocalFileJournal: journal append failed", { cause: R.error });
        this.isTailEnded = true;
        return;
      }
      if (!this.dirReady) await (0, import_promises2.mkdir)((0, import_path2.dirname)(this.path), { recursive: true }), this.dirReady = true;
      let k = r ? `
${mn}
` : "";
      await (0, import_promises2.appendFile)(this.path, k + (0, import_chunk_w578pjby.fP)(e), "utf8"), this.isTailEnded = true;
    } finally {
      o();
    }
  }
}
var ir = 2, ar = 2, us = 3e4, vi = 2, Oi = 2e3, Mi = 3e4, fs = 9e4, Pi = 15e3;
class lr {
  #e;
  #u;
  #r;
  #n;
  #t;
  #o;
  #a = 0;
  #l = 0;
  #f = false;
  #s = "unscanned";
  #d;
  #i;
  constructor({ signal: e, log: o, onChange: r, storageV5: g, context: k }) {
    if (this.#e = e, this.#u = k, this.#r = o, this.#n = r, this.#c(g, vi), (0, import_chunk_3t7ve0wy.wLr)()) this.#i = Promise.race([this.#h(), (0, import_chunk_5appeerh.K)(Pi, e, { unref: true })]).finally(() => {
      this.#i = void 0;
    });
  }
  async #h() {
    try {
      if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return;
      let e = (0, import_chunk_865at33z.tr)()?.accessToken;
      if (e === void 0 || !(0, import_chunk_865at33z.Rt)() || !(0, import_chunk_865at33z.Qf)() || (0, import_chunk_k449cc64.wt)()) return;
      let o = await (0, import_chunk_865at33z.ehe)(e);
      this.#d = o?.organization.billing_type ?? void 0;
    } catch (e) {
      (0, import_chunk_k449cc64.i)(e);
    }
  }
  async #c(e, o) {
    try {
      this.#s = await (0, import_chunk_2yx6c1y2.IRt)("autoContinueAtUsageLimit", e);
    } catch (r) {
      this.#s = "unknowable", (0, import_chunk_k449cc64.i)(r);
    }
    if (this.#s === "unknowable" && o > 0 && !this.#e?.aborted) await (0, import_chunk_5appeerh.K)(Oi, this.#e, { unref: true }), await this.#c(e, o - 1);
  }
  #p() {
    if (!(0, import_chunk_865at33z.b)("tengu_linked_clover", true) || !(0, import_chunk_35s5d0tg.vgt)()) return "killswitch";
    return (0, import_chunk_35s5d0tg.a9r)(this.#s) ? void 0 : "setting_off";
  }
  #m() {
    return (0, import_chunk_865at33z.Rt)() && this.#p() === void 0 && (0, import_chunk_35s5d0tg.l9r)() && ((0, import_chunk_35s5d0tg.zCn)() && !(0, import_chunk_865at33z.Na)() && (0, import_chunk_865at33z.Sn)()?.billingType !== "usage_based" || (0, import_chunk_3t7ve0wy.wLr)() && this.#d !== void 0 && this.#d !== "usage_based" && !(0, import_chunk_3t7ve0wy.nx)() && (0, import_chunk_3t7ve0wy.KA)());
  }
  wouldWait(e) {
    try {
      let o = (e ?? 0) * 1e3;
      return !this.#e?.aborted && o - Date.now() <= import_chunk_bzyb60p0.PPn && this.#a < ir && this.#l < ar && this.#m();
    } catch (o) {
      return (0, import_chunk_k449cc64.i)(o), false;
    }
  }
  async whenClear() {
    if (this.#i !== void 0) await this.#i;
    while (this.#o !== void 0) await this.#o;
  }
  join(e) {
    try {
      return this.#k(e);
    } catch (o) {
      return (0, import_chunk_k449cc64.i)(o), { outcome: "declined", failureNote: void 0 };
    }
  }
  #k(e) {
    if (this.#e?.aborted) return { outcome: "aborted" };
    if (e === void 0 || e.resetsAt === void 0 || !(0, import_chunk_bzyb60p0.wx)(e) || e.dailyCapPaused === true || e.rateLimitType === "seven_day_overage_included" || !this.#m()) return { outcome: "declined", failureNote: void 0 };
    let o = Date.now(), r = e.resetsAt * 1e3;
    if (r - o > import_chunk_bzyb60p0.PPn) return this.#w(`usage limit; resets ${cs(e.resetsAt)}, too far out to wait for`);
    let g = Math.max(r, o) + (0, import_chunk_5appeerh.LI)({ baseMs: fs, capMs: fs, attempt: 0, floorMs: Mi });
    if (this.#t !== void 0 && this.#o !== void 0) return this.#t.status = { ...this.#t.status, resetsAt: Math.max(this.#t.status.resetsAt, e.resetsAt), resumeAtMs: Math.max(this.#t.status.resumeAtMs, g), waitingAgents: this.#t.status.waitingAgents + 1 }, this.#n(this.#t.status), { outcome: "waiting", ended: this.#o };
    let k = r <= o;
    if (k ? this.#l >= ar : this.#a >= ir) return this.#w(`usage limit; resets ${cs(e.resetsAt)}, and this run already waited for ${k ? ar : ir} resets`);
    if (k) this.#l++;
    else this.#a++;
    let h = { status: { resetsAt: e.resetsAt, resumeAtMs: g, waitingAgents: 1 }, startedAtMs: o, armedFor: (0, import_chunk_j7dp96he.CS)() };
    this.#t = h, this.#o = this.#g(h);
    let R = (0, import_chunk_gp23aqt9.mHn)(e.resetsAt, true);
    return this.#r(`Usage limit reached${R === void 0 ? "" : ` \xB7 ${R}`}. Workflow paused; waiting agents re-run shortly after the reset.`), this.#n(h.status), { outcome: "waiting", ended: this.#o };
  }
  async #g(e) {
    let o = "failed", r;
    try {
      let g = e.status.resumeAtMs - Date.now(), { session: k, credentials: h } = this.#u, R = import_chunk_bzyb60p0.Qnt.of(k.host), C = e.status.isHeldForLogin === true;
      do {
        if (await (0, import_chunk_5appeerh.K)(C ? us : Math.max(0, Math.min(g, us)), this.#e), g = e.status.resumeAtMs - Date.now(), (0, import_chunk_35s5d0tg.zCn)() && !this.#e?.aborted) {
          if (g <= 0 && !C) await (0, import_chunk_865at33z.U9)(k.host, h).catch(import_chunk_k449cc64.i), g = e.status.resumeAtMs - Date.now();
          let E = (0, import_chunk_35s5d0tg.irr)(e.armedFor), le = C;
          if (C = E === "other" || E === "missing" && (le || g <= 0), C !== le) {
            if (e.promptsAtHold = R.humanPrompts(), e.status = { ...e.status, isHeldForLogin: C }, this.#n(e.status), C) R.announceHeld();
          }
        }
        r = C ? void 0 : this.#p();
      } while (!this.#e?.aborted && r === void 0 && (C ? e.promptsAtHold === R.humanPrompts() || (0, import_chunk_865at33z.cke)().sessionOwnerHold?.() : g > 0));
      o = this.#e?.aborted ? "aborted" : r === void 0 ? "resumed" : "revoked";
    } catch (g) {
      if ((0, import_chunk_k449cc64.i)(g), e.status.isHeldForLogin) return this.#g(e);
    }
    this.#t = void 0, this.#o = void 0;
    try {
      this.#n(void 0);
      let g = { wait_ms: Date.now() - e.startedAtMs, agents_waiting: e.status.waitingAgents };
      switch (o) {
        case "resumed":
          this.#r(`${e.status.isHeldForLogin ? "Continuing on this login" : "Usage limit reset"}. Re-running ${e.status.waitingAgents} waiting ${(0, import_chunk_7cfjrnwy.O)(e.status.waitingAgents, "agent")}.`), (0, import_chunk_cqa9hrgx.u)("workflow_rate_limit_wait", g);
          break;
        case "aborted":
          (0, import_chunk_cqa9hrgx.l)("workflow_rate_limit_wait", "killed_while_waiting", g);
          break;
        case "revoked":
          this.#r(`Waiting for usage limits to reset was turned off. ${e.status.waitingAgents} waiting ${(0, import_chunk_7cfjrnwy.O)(e.status.waitingAgents, "agent")} will not run again.`), (0, import_chunk_cqa9hrgx.l)("workflow_rate_limit_wait", r === "setting_off" ? "setting_off_while_waiting" : "killswitch_while_waiting", g);
          break;
        case "failed":
          (0, import_chunk_cqa9hrgx.m)("workflow_rate_limit_wait", "wait_error", g);
          break;
      }
    } catch (g) {
      (0, import_chunk_k449cc64.i)(g);
    }
    return o;
  }
  #w(e) {
    if (!this.#f) this.#f = true, (0, import_chunk_cqa9hrgx.l)("workflow_rate_limit_wait", "gave_up", { wait_ms: 0, agents_waiting: 0 });
    return { outcome: "declined", failureNote: e };
  }
}
function cs(e) {
  return (0, import_chunk_dd5safr0.PA)(e, true) ?? "at an unknown time";
}
(0, import_chunk_adx6804h.B)();
function ps(e) {
  return (0, import_chunk_sghy0qej.Pe)("tengu_serialized_sunrise", { safe: false }) && (0, import_chunk_vc58gmrj.zp)(e, { peek: true }) === "arbiter";
}
var Wi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().describe("Your full report for your caller") })), Ii = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ success: (0, import_chunk_adx6804h.P)(), message: (0, import_chunk_adx6804h.n)() }));
function ms(e, o) {
  return (0, import_chunk_4vsz8a99.vn)({ registryToolId: "9bd314a8-dbf1-5d05-aeee-8f21ec501ad2", name: import_chunk_060xwhvh.mu, searchHint: "deliver your final report to the agent that spawned you", backgrounding: "never", maxResultSizeChars: 1e5, alwaysLoad: true, userFacingName() {
    return import_chunk_060xwhvh.mu;
  }, get inputSchema() {
    return Wi();
  }, get outputSchema() {
    return Ii();
  }, isReadOnly() {
    return false;
  }, classifierOnly() {
    return { onBlock: "flag" };
  }, async description() {
    return import_chunk_6hkrqqbp.U4r;
  }, async prompt() {
    return import_chunk_6hkrqqbp.B4r;
  }, toAutoClassifierInput(r) {
    return `${import_chunk_6hkrqqbp.W4r}: ${r.message}`;
  }, create(r) {
    return { async validateInput(g) {
      return g.message.trim().length === 0 ? { result: false, message: "Your report is empty. Put your full report in message and call again.", errorCode: 9 } : { result: true };
    }, async call(g, k) {
      let h = (0, import_chunk_bzyb60p0.JZr)(k.toolUseId);
      if (h !== void 0 && h.kind !== "unavailable" && r.agentId !== void 0) (0, import_chunk_4dnx2vkh.U0e)(r.agentId);
      if (r.agentId !== e) return { data: { success: false, message: `Nothing was sent: ${import_chunk_060xwhvh.mu} is not active for this agent. Write your report as plain text instead.` } };
      let R = h === void 0 ? null : h.kind === "blocked" ? { warning: (0, import_chunk_bzyb60p0.Xes)(h.reason), kind: "flagged" } : void 0;
      if (!o({ message: g.message, review: R, ...h !== void 0 && h.kind !== "blocked" && { noVerdict: h }, toolUseId: k.toolUseId })) return { data: { success: false, message: "Not sent: you already delivered a report, and only the first one counts. Stop now." } };
      if (k.toolUseId !== void 0) (0, import_chunk_4dnx2vkh.Hgl)(e, k.toolUseId);
      return { data: { success: true, message: "Report delivered to your caller." }, ...(0, import_chunk_865at33z.b)("tengu_purring_pine", true) && { endsTurn: true } };
    } };
  }, mapToolResultToToolResultBlockParam(r, g) {
    return { tool_use_id: g, type: "tool_result", content: [{ type: "text", text: (0, import_chunk_w578pjby._)(r) }] };
  }, renderToolUseMessage() {
    return null;
  } });
}
function Uo(e) {
  return /^wf_[0-9a-f]{8}-[0-9a-f]{3}$/.test(e) ? (0, import_chunk_78g0060s.Fr)(e) : (0, import_chunk_myvyhcm0.Zn)(e);
}
function $i(e) {
  return Math.min(16, Math.max(2, e - 2));
}
var Di = $i((0, import_os.availableParallelism)()), Ni = 50, Ss = 1e3, Fi = `Workflow agent() call cap reached (${Ss}). This usually means a loop using budget.remaining() never terminates because no token budget was set \u2014 remaining() returns Infinity when budget.total is null. Add a hard iteration cap to the loop, or pass a token budget.`;
class Ts extends Error {
  constructor() {
    super(Fi);
    this.name = "WorkflowAgentCapError";
  }
}
class As extends Error {
  constructor(e, o) {
    super(`Workflow token budget exceeded (${e.toLocaleString()} / ${o.toLocaleString()} output tokens). Stopping further agent() calls. In-flight agents will complete; their results are preserved.`);
    this.name = "WorkflowBudgetExceededError";
  }
}
var gs = 400;
function no(e) {
  if (e == null) return;
  let o = (typeof e === "string" ? e : (0, import_chunk_w578pjby._)(e)).trim();
  if (!o) return;
  return o.length > gs ? (0, import_chunk_7cfjrnwy.ee)(o, gs) + "\u2026" : o;
}
var kn = "A note that the task text was computed by a workflow script and carries no user authority is not by itself a reason to skip the task: the task is the step this workflow assigned to you. Do that step, and only that step.", Ui = `You are a subagent spawned by a workflow orchestration script. Use the tools available to complete the task.

CRITICAL: Your final text response is returned **verbatim** as a string to the calling script \u2014 it is your return value, not a message to a human.
- Output the literal result (data, JSON, text). Do NOT output confirmations like "Done." or "Sent."
- If asked for JSON, return ONLY the raw JSON \u2014 no code fences, no prose, no markdown.
- Do NOT use SendUserMessage to deliver your answer. Put your answer in your final text response.
- Be concise. The script will parse your output.

${kn}`, ji = `

---

NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like "Done." Be concise \u2014 the script will parse your output.

${kn}`, Hi = `

If you are told to deliver your final report through ${import_chunk_060xwhvh.mu}, the \`message\` of that call is your return value in place of your final text response, and everything said above about your final text response holds for it. Put the whole literal result in \`message\`, not a confirmation and not a pointer to text that you wrote before the call.`, Bi = `

---

NOTE: You are running inside a workflow script. You MUST return your final answer by calling the ${import_chunk_2b1wcpvk.ga} tool exactly once \u2014 the tool's input schema defines the required shape. Do your work, then call ${import_chunk_2b1wcpvk.ga}; do NOT put your answer in a text response (the script reads ONLY the tool call). If validation fails, read the error and call ${import_chunk_2b1wcpvk.ga} again with a corrected shape.

${kn}`, Vi = `You are a subagent spawned by a workflow orchestration script. Use the tools available to complete the task.

CRITICAL: You MUST call the ${import_chunk_2b1wcpvk.ga} tool exactly once to return your final answer. The tool's input schema defines the required shape.
- Do your work (Read files, run commands, etc.), then call ${import_chunk_2b1wcpvk.ga} with your answer.
- Do NOT put your answer in a text response. The script reads ONLY the ${import_chunk_2b1wcpvk.ga} tool call.
- If the schema validation fails, read the error and call ${import_chunk_2b1wcpvk.ga} again with a corrected shape.
- After calling ${import_chunk_2b1wcpvk.ga} successfully, end your turn. No acknowledgment needed.

${kn}`, hn = { agentType: import_chunk_jar84hn9.vLn, whenToUse: "Internal subagent for workflow script orchestration.", tools: ["*"], disallowedTools: [import_chunk_4x1jja6d.Ac, import_chunk_060xwhvh._t, import_chunk_jar84hn9.xc], source: "built-in", baseDir: "built-in", getSystemPrompt: () => Ui }, Ji = { ...hn, getSystemPrompt: () => Vi }, ws = 5;
function hs(e, o, r) {
  e.push(r.replyLost ? "reply lost" : r.stalledReason ?? "stalled"), o.maxContextTokens = Math.max(o.maxContextTokens, r.tokens), o.toolCalls += r.toolCalls, o.durationMs += r.durationMs;
}
var Ki = 9e4;
function Es(e, o, r, g, k, h, R, C, E, le, G, re, I, de) {
  let we = 0, ge = async (v) => ({ v: await v }), _e = (v, ...F) => v(...F), Oe = (v) => (0, import_chunk_w578pjby.Ka)(v), Qe = (v) => v, he = (v) => v, Nt = { prev: "" }, qe = new import_async_hooks.AsyncLocalStorage(), He = false, Mt = 0, Pt;
  function Ft() {
    return ds({ hits: Mt, recorded: E?.results.size ?? 0, firstMiss: Pt });
  }
  let nt = { inSlot: (v, F) => F(), join: () => {
  } };
  function rt(v) {
    if (!C) return nt;
    let F = qe.getStore() ?? Nt, H = F.prev;
    F.prev = wn(H, v, "fork");
    let Re = [];
    return { inSlot: (be, ce) => {
      let L = { prev: wn(H, v, be) };
      return Re[be] = L, qe.run(L, ce);
    }, join: () => {
      F.prev = wn(F.prev, v, Array.from(Re, (be) => be?.prev ?? ""));
    } };
  }
  let ft = (0, import_chunk_sghy0qej.Pe)(import_chunk_jar84hn9.DCi, { safe: true }), Wt = false, St = false, Ht = false, Bt = [], ro = e.hookCaller !== void 0 || e.pluginUnnamed === true, st = /* @__PURE__ */ new Set(), Te = (v) => {
    for (let F of import_chunk_trwykz8a.Th) if (v?.includes(F) === true) st.add(F);
  }, Ot = (v) => {
    for (let F of import_chunk_trwykz8a.Th) if ((0, import_chunk_xfj2cwfv.eOr)(v, F)) st.add(F);
  }, go = /* @__PURE__ */ new Map(), Co = /* @__PURE__ */ new Set(), Q = (v, F) => {
    let H = go.get(v);
    if (H === void 0) H = /* @__PURE__ */ new Set(), go.set(v, H);
    H.add((0, import_chunk_f9x2f6cx.YM)(F));
  }, Yt = (v) => [...go.get(v ?? "") ?? []].filter((F) => (0, import_chunk_f9x2f6cx.en)().has(F)), wo, qt, so = /* @__PURE__ */ new Set(), Vt = /* @__PURE__ */ new Map(), ho = (v) => (st.has(import_chunk_k449cc64.lu) && !v.includes(import_chunk_k449cc64.lu) ? `

${(0, import_chunk_xfj2cwfv.HMl)(true).trimEnd()}` : "") + (st.has(import_chunk_trwykz8a.jb) && !v.includes(import_chunk_trwykz8a.jb) ? `

${(0, import_chunk_xfj2cwfv.DMl)(true).trimEnd()}` : ""), Eo = /* @__PURE__ */ new WeakSet();
  function q(v, { log: F }) {
    let H = (0, import_chunk_865at33z.ng)(v);
    if (Bt.push(H), F) r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: H } });
  }
  let Be = new lr({ signal: e.abortController?.signal, log: (v) => r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: v } }), onChange: (v) => I?.(v), storageV5: e.storageV5, context: e }), Ge = (0, import_chunk_w71cxznt.Rl)(1, import_chunk_bzyb60p0.nCe), Jt;
  function Oo() {
    return Jt ??= (async () => {
      let v = (0, import_chunk_18rsj2ts.pe)(), F = await (0, import_chunk_w5s307zm.pm)(v);
      if (F === "HEAD") return;
      if (await (0, import_chunk_w5s307zm.C0r)(F, v)) return F;
      r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `local branch '${F}' is not pushed to origin; remote agents will run against the repository's default branch.` } });
      return;
    })(), Jt;
  }
  let Kt = /* @__PURE__ */ new Set();
  function jo(v) {
    return (F, H) => {
      let Re = `${v}\0${F}\0${H}`;
      if (Kt.has(Re)) return;
      Kt.add(Re), r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${v}] ${(0, import_chunk_865at33z.QP)(F, H)}` } });
    };
  }
  function ko() {
    if (we < Ss) return;
    if (!Wt) Wt = true, (0, import_chunk_y53wbr8a.a)("tengu_workflow_agent_cap_exceeded", { agentCount: we });
    throw new Ts();
  }
  function Xt() {
    if (R?.total == null || R.total <= 0) return;
    let v = R.getTurnSpent();
    if (v < R.total) return;
    if (!St) St = true, (0, import_chunk_y53wbr8a.a)("tengu_workflow_budget_cap_exceeded", { spent: v, budget: R.total, agentCount: we });
    throw new As(v, R.total);
  }
  let yo = 0, bn, pr = /* @__PURE__ */ new Map(), D = { ...(0, import_chunk_bzyb60p0.iye)((0, import_chunk_bz1f2qnq._y)(e)), loopModel: (0, import_chunk_a05a70r9.TTn)(e), isBackgroundAgent: true, setAppState: () => {
  }, setToolPermissionContext: () => {
  }, setSessionToolPermissionContext: e.setSessionToolPermissionContext };
  function Ho(v) {
    if (v) return v;
    let F = (0, import_chunk_abbz0fqx.pDe)();
    if (F !== void 0) return F;
    let H = (0, import_chunk_bzyb60p0.BTe)();
    return H !== "inherit" ? H : D.loopModel;
  }
  function gr(v, F) {
    let H = (0, import_chunk_865at33z.ng)(v), Re = pr.get(H);
    if (Re == null) Re = { index: ++yo, kind: F, announced: false, title: H }, pr.set(H, Re);
    return Re;
  }
  function Us(v, F) {
    return gr(v, F).index;
  }
  function Tn(v) {
    let F = gr(v);
    if (!F.announced) F.announced = true, r({ type: "progress", toolUseID: `workflow_phase_${F.index}`, data: { type: "workflow_phase", index: F.index, title: F.title, kind: F.kind } });
    return F.index;
  }
  for (let v of h ?? []) Tn(v);
  let js = to((v) => {
    bn = (0, import_chunk_ejeefcyk.OTt)(v), Tn(bn);
  }), wr = import_chunk_c203g5kd.s.CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS ?? Di;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS !== void 0) (0, import_chunk_w578pjby.t)(`workflow: concurrent agent gate = ${wr} (CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS)`);
  let Hs = (0, import_chunk_w71cxznt.Rl)(wr, Js), Bs = (0, import_chunk_w71cxznt.Rl)(Ni, zs);
  async function Bo({ idx: v, promptStr: F, label: H, ownPhaseTitle: Re, ownPhaseIndex: be, opts: ce, queuedAt: L, provenanceOn: et }) {
    let ne = (0, import_chunk_bz1f2qnq.Z)(D);
    if (ne.mode !== "auto") return false;
    let Ae, Xe;
    if (ce?.schema != null) {
      let me = [], Ve = /* @__PURE__ */ new Set(), Ke = import_chunk_2b1wcpvk.uLi, lt = 0;
      try {
        let We = JSON.stringify(ce.schema, function(pt, tt) {
          if (--Ke < 0) throw Error("output schema expansion exceeds the node budget");
          let xe = typeof tt === "bigint" ? tt.toString() : tt;
          if (lt += pt.length + (typeof xe === "string" ? xe.length : 0), lt > import_chunk_knp99ee7.Tqo) throw Error("output schema too large to classify");
          if (xe !== null && typeof xe === "object") {
            while (me.length > 0 && me.at(-1) !== this) Ve.delete(me.pop());
            if (Ve.has(xe)) return "[Circular]";
            me.push(xe), Ve.add(xe);
          }
          return xe;
        });
        if (We !== void 0 && We.length > import_chunk_knp99ee7.Tqo) throw lt = We.length, Error("output schema too large to classify");
        Ae = We || void 0;
      } catch {
        Xe = lt > import_chunk_knp99ee7.Tqo ? "output schema too large for the safety classifier" : "output schema could not be serialized for the safety classifier";
      }
    }
    let Ye = (0, import_chunk_knp99ee7.iJs)(Ae);
    if (et && !Ye && Xe === void 0) return false;
    let Ie = (me) => ((0, import_chunk_y53wbr8a.a)("tengu_auto_mode_decision", { decision: (0, import_chunk_78g0060s.f)("blocked"), toolName: (0, import_chunk_78g0060s.f)(import_chunk_060xwhvh.Df), inProtectedNamespace: (0, import_chunk_2gtmjt3y.T2)(), ...(0, import_chunk_bzyb60p0.FZt)(e), isHandoff: false }), { reason: me, unreviewed: true }), Ce = Xe ?? (et ? (0, import_chunk_bzyb60p0.XQt)("workflow_schema") ? `output schema is over ${import_chunk_knp99ee7.sJs} characters, too large to pass unreviewed in auto mode, so this agent was not started; shorten the schema` : void 0 : (0, import_chunk_bzyb60p0.XQt)("workflow_prompt") ? import_chunk_knp99ee7.aJs : void 0), it = Ce ? Ie(Ce) : await (0, import_chunk_knp99ee7.AHa)({ prompt: F, schemaJson: Ae, agentType: ce?.agentType != null ? String(ce.agentType) : void 0, parentMessages: e.messages, inheritedVerifiedHumanTurns: e.inheritedVerifiedHumanTurns, parentTools: e.options.tools, rootToolSurface: e.rootToolSurface, toolPermissionContext: ne, abortSignal: D.abortController.signal, dispatchAgentId: e.agentId, storageV5: e.storageV5, credentials: e.credentials }).catch((me) => {
      if (!D.abortController?.signal.aborted) (0, import_chunk_k449cc64.i)(me);
      if (!Ye || D.abortController?.signal.aborted) return null;
      return Ie("classifier error; output schema too large to pass unreviewed");
    });
    if (D.abortController?.signal.aborted) throw Error("Workflow aborted");
    if (!it) return false;
    let Tt = it.unreviewed ? `[${H}] blocked: ${it.reason}` : `[${H}] blocked by safety classifier: ${it.reason}`;
    return q(Tt, { log: false }), r({ type: "progress", toolUseID: `workflow_agent_${v}_blocked`, data: { type: "workflow_agent", index: v, label: H, phaseIndex: be, phaseTitle: Re, agentType: ce?.agentType != null ? String(ce.agentType) : void 0, isolation: ce?.isolation === "worktree" || ce?.isolation === "remote" ? ce.isolation : void 0, model: Ho(ce?.model), state: "error", blocked: true, error: Tt, queuedAt: L, promptPreview: no(F), lastProgressAt: Date.now() } }), true;
  }
  let hr = /* @__PURE__ */ new WeakMap(), Vs = to(async (v, F) => {
    let H = e.agentContext, Re = new Set(Vt.keys()), be = qe.getStore() ?? Nt, ce;
    if (F !== null && typeof F === "object" && !(0, import_chunk_kbr9bg9m.dd)(F)) {
      let V = Object.getOwnPropertyDescriptor(F, "schema"), Ee = V && "value" in V ? V.value : void 0;
      if (Ee !== null && typeof Ee === "object") ce = Ee;
    }
    let L = (0, import_chunk_ejeefcyk.XGt)(Qe(F));
    if (L && ce !== void 0) {
      let V = hr.get(ce);
      if (V === void 0) V = (0, import_chunk_ejeefcyk.XGt)(Qe(ce)), hr.set(ce, V);
      L.schema = V;
    }
    let et = (0, import_chunk_abbz0fqx.pDe)() !== void 0 ? "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL is set" : import_chunk_c203g5kd.s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE ? "CLAUDE_CODE_SUBAGENT_MODEL_FORCE is on" : void 0;
    if (L?.model !== void 0 && et !== void 0) (0, import_chunk_w578pjby.t)(`Workflow agent model "${L.model}" ignored: ${et}`), L.model = void 0;
    if (D.abortController?.signal.aborted) return new Promise(() => {
    });
    try {
      ko(), Xt();
      let V = L?.disallowedTools;
      if (V !== void 0) {
        if (!Array.isArray(V) || V.some((Le) => typeof Le !== "string" || Le === "" || Le !== Le.trim())) throw new import_chunk_jv7av99m.A("agent() opts.disallowedTools must be an array of non-empty tool-name strings (e.g. ['Bash', 'Write']); got " + (Array.isArray(V) ? "an array with non-string, empty, or whitespace-padded entries" : typeof V) + ". Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools malformed \u2014 spawn refused");
        if (L !== void 0) L.disallowedTools = V.length === 0 ? void 0 : (0, import_chunk_4smdap7r.M)(V).sort();
      }
      let Ee = L?.bashCommandClamp;
      if (Ee !== void 0) {
        if (!Array.isArray(Ee) || Ee.some((ct) => typeof ct !== "string" || ct === "" || ct !== ct.trim())) throw new import_chunk_jv7av99m.A("agent() opts.bashCommandClamp must be an array of non-empty strings; got " + (Array.isArray(Ee) ? "an array with non-string, empty, or whitespace-padded entries" : typeof Ee) + ". Refusing the spawn rather than running it un-clamped.", "agent() bashCommandClamp malformed \u2014 spawn refused");
        let Le = Ee.length === 0 ? void 0 : (0, import_chunk_4smdap7r.M)(Ee).sort();
        for (let ct of Le ?? []) {
          let { toolName: It, ruleContent: mt } = (0, import_chunk_qebpc5de.Ur)(ct);
          if (It !== import_chunk_hn3cwwzt.ke || mt === void 0 || mt === "" || mt !== mt.trim()) throw new import_chunk_jv7av99m.A(`agent() opts.bashCommandClamp entry '${ct}' must be a '${import_chunk_hn3cwwzt.ke}(<command or prefix>)' permission rule (tool name case-sensitive, non-empty content with no leading/trailing whitespace inside the parens); it parses to tool '${It}'` + (mt === void 0 || mt === "" ? " with no rule content" : mt !== mt.trim() ? " with whitespace-padded rule content" : "") + ". Refusing the spawn rather than running it with an inert clamp entry.", "agent() opts.bashCommandClamp inert entry \u2014 spawn refused");
        }
        if (L !== void 0) L.bashCommandClamp = Le;
      }
      let ze = L?.sharedHeadLength;
      if (ze !== void 0 && (!Number.isSafeInteger(ze) || Number(ze) < 0)) throw new import_chunk_jv7av99m.A("agent() opts.sharedHeadLength must be a whole number of characters, 0 or more (for example head.length). Pass one, or leave the option out.", "agent() opts.sharedHeadLength malformed \u2014 spawn refused");
    } catch (V) {
      throw await (0, import_chunk_5appeerh.K)(0), V;
    }
    let ne = ++we, Ae = (0, import_chunk_ejeefcyk.OTt)(v), Xe = Ae.slice(L?.sharedHeadLength ?? 0).trim() === "" ? Ae : Ae.slice(L?.sharedHeadLength ?? 0), Ye = L?.label != null ? String(L.label).replace(/\s+/g, " ").trim() : de ? `agent ${ne}` : (0, import_chunk_7cfjrnwy.ee)(Xe, 60).replace(/\s+/g, " ").trim(), Ie = L?.phase != null ? String(L.phase) : bn, Ce = Ie != null ? Tn(Ie) : void 0, it = L?.stallMs != null ? Number(L.stallMs) : (0, import_chunk_knp99ee7.cJs)(), Tt = no(Xe), me, Ve, Ke = false;
    if (C) {
      me = ls(Ae, L, be.prev), be.prev = me;
      let V = He ? void 0 : E?.results.get(me);
      if (V !== void 0) {
        if (Mt++, E?.replaced.has(me)) be.prev = sr(me, typeof V.agentId === "string" ? V.agentId : "");
        if (V.foreignArtifactContent) st.add(import_chunk_k449cc64.lu);
        if (V.remoteControlDeviceReport !== false) st.add(import_chunk_trwykz8a.jb);
        if (Te((0, import_chunk_w578pjby._)(V.result)), V.sessionId !== (0, import_chunk_f9x2f6cx.W)()) (0, import_chunk_1ek4hhs6.yg)([V.sessionId ?? null], []);
        if (Array.isArray(V.toolsUsed)) {
          for (let Le of V.toolsUsed) if (typeof Le === "string") Co.add((0, import_chunk_f9x2f6cx.en)().has(Le) ? Le : import_chunk_f9x2f6cx.p_);
        }
        return r({ type: "progress", toolUseID: `workflow_agent_${ne}_cached`, data: { type: "workflow_agent", index: ne, label: Ye, phaseIndex: Ce, phaseTitle: Ie, agentId: V.agentId, model: Ho(L?.model), state: "done", startedAt: Date.now(), lastProgressAt: Date.now(), cached: true, resultPreview: no(V.result), promptPreview: Tt } }), Oe(V.result);
      }
      let Ee = E?.started.get(me);
      if (!(!He && Ee !== void 0 && Ee.length > 0 && !E?.failed.has(me) && !E?.demoted.has(me)) && !He) {
        He = true, Pt = { index: ne, failed: E?.failed.has(me) === true };
        let Le = Ft();
        if (Le !== void 0) r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: Le } });
      }
      if (Ke = E !== void 0 && (E.results.has(me) || E.demoted.has(me) || E.failed.has(me)), Ee && Ee.length > 0) (0, import_chunk_y53wbr8a.a)("tengu_workflow_journal_started_hit_respawn", { attempts: Ee.length });
    }
    let lt = false, We = (V) => {
      if (lt = true, Ve = V, !C || me === void 0) return;
      C.append({ type: "started", key: me, agentId: V, ...ks(Ye, Ie) }).catch((Ee) => (0, import_chunk_w578pjby.t)(`workflow journal started-append failed: ${Ee}`, { level: "warn" }));
    }, pt = async () => {
      if (!C || !me || D.abortController?.signal.aborted) return;
      await C.append({ type: "failed", key: me, agentId: Ve ?? "" }).catch((V) => (0, import_chunk_w578pjby.t)(`workflow journal failed-append failed: ${V}`, { level: "warn" }));
    }, tt = async (V) => {
      if (V === null) {
        if (so.delete(ne) && me) return Vt.set(me, Ve ?? ""), V;
        await pt();
      }
      let Ee = C && me && V !== null ? [...Vt].filter(([ze]) => Re.has(ze)) : [];
      if (C && Ee.length > 0) {
        if (D.abortController?.signal.aborted) return V;
        if ((await Promise.all(Ee.map(([Le, ct]) => C.append({ type: "failed", key: Le, agentId: ct }).then(() => (Vt.delete(Le), true), (It) => ((0, import_chunk_w578pjby.t)(`workflow journal failed-append failed: ${It}`, { level: "warn" }), false))))).includes(false)) return await pt(), V;
      }
      if (C && me && V !== null) {
        let ze = V;
        if (ft) try {
          ze = (0, import_chunk_ejeefcyk.XGt)(Qe(V));
        } catch (Le) {
          return (0, import_chunk_w578pjby.t)(`workflow journal: did not save an agent() result, so a resumed run will re-run from this call: ${(0, import_chunk_ejeefcyk.Blt)(Le).msg}`, { level: "warn" }), await pt(), V;
        }
        else if (typeof V === "object") return await pt(), V;
        if (await C.append({ type: "result", key: me, agentId: Ve ?? "", result: ze, ...st.has(import_chunk_k449cc64.lu) && { foreignArtifactContent: true }, remoteControlDeviceReport: st.has(import_chunk_trwykz8a.jb), ...Yt(Ve).length > 0 && { toolsUsed: Yt(Ve) }, sessionId: (0, import_chunk_f9x2f6cx.W)() }).catch((Le) => (0, import_chunk_w578pjby.t)(`workflow journal result-append failed: ${Le}`, { level: "warn" })), Ke && be.prev === me) be.prev = sr(me, Ve ?? "");
      }
      return V;
    }, xe = Date.now(), _o = () => r({ type: "progress", toolUseID: `workflow_agent_${ne}_queued`, data: { type: "workflow_agent", index: ne, label: Ye, phaseIndex: Ce, phaseTitle: Ie, agentType: L?.agentType != null ? String(L.agentType) : void 0, isolation: L?.isolation === "worktree" || L?.isolation === "remote" ? L.isolation : void 0, model: Ho(L?.model), state: "start", queuedAt: xe, promptPreview: Tt, lastProgressAt: xe } }), io = (V) => {
      if (lt || D.abortController?.signal.aborted) return;
      r({ type: "progress", toolUseID: `workflow_agent_${ne}_queued`, data: { type: "workflow_agent", index: ne, label: Ye, phaseIndex: Ce, phaseTitle: Ie, model: Ho(L?.model), state: "error", error: V instanceof Error ? V.message : String(V), queuedAt: xe, promptPreview: Tt, lastProgressAt: Date.now() } });
    };
    if (L?.isolation === "remote") throw Error("agent({isolation:'remote'}) is not available in this build");
    _o();
    try {
      return await tt(await Hs(ne, Ae, Ye, Ie, Ce, it, L, We, xe, H));
    } catch (V) {
      if (io(V), await pt(), D.abortController?.signal.aborted) return new Promise(() => {
      });
      throw V;
    }
  });
  async function kr({ idx: v, promptStr: F, label: H, agent: Re, model: be, permissionMode: ce }) {
    let L = e.agentContext, et = typeof be === "string" ? be : void 0, ne = await (0, import_chunk_qr6brph0.Str)({ tool_use_id: e.toolUseId ?? "", prompt: de ? "(withheld: this workflow run does not share its script)" : F, description: H, agent: Re, agents: [], model: et, parentModel: D.loopModel, parentAgentId: (0, import_chunk_865at33z.mp)(L) ? void 0 : L?.agentId, permissionMode: ce, background: false, fork: false, name: void 0, cwd: void 0, workflow: Object.freeze({ runId: g ?? "", agentIndex: v }), signal: AbortSignal.any([D.abortController?.signal].filter((Ae) => Ae !== void 0)), origin: D.hookOrigin }, import_chunk_bzyb60p0.uSt).catch((Ae) => {
      throw ro = true, Ae;
    });
    if (D.abortController?.signal.aborted === true) throw ne.starting?.[Symbol.dispose](), Error("Workflow aborted");
    if (ro ||= ne.deny !== void 0 || ne.isRewritten === true, ne.deny !== void 0) {
      if (!Ht) Ht = true, (0, import_chunk_cqa9hrgx.m)("subagent_launch", "workflow_spawn_denied_by_hook");
      throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`Workflow agent spawn denied by a plugin: ${ne.deny}`, "Workflow agent spawn denied by a plugin");
    }
    return { starting: ne.starting, prompt: de ? F : ne.spawn.prompt, model: ne.spawn.model === et || import_chunk_c203g5kd.s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE ? be : ne.spawn.model, isRewritten: ne.isRewritten };
  }
  async function Js(v, F, H, Re, be, ce, L, et, ne, Ae) {
    var _stack = [];
    try {
      if (await Be.whenClear(), D.abortController?.signal.aborted) throw Error("Workflow aborted");
      let Xe = ks(H, Re);
      Xt();
      let Ye = (0, import_chunk_4rrhthp1.Her)();
      if (await Bo({ idx: v, promptStr: F, label: H, ownPhaseTitle: Re, ownPhaseIndex: be, opts: L, queuedAt: ne, provenanceOn: Ye })) return null;
      let Ie;
      if (L?.agentType != null) {
        let y = String(L.agentType), ye = D.options.agentDefinitions.activeAgents, te = (0, import_chunk_bz1f2qnq.Z)(D), oe = await (0, import_chunk_bzyb60p0.IQo)(ye, te, import_chunk_060xwhvh._t), X = oe.find((ie) => ie.agentType === y);
        if (!X) {
          let ie = ye.find((ot) => ot.agentType === y), Ue = ie ? (0, import_chunk_ht27b0vz.vZ)(te, import_chunk_060xwhvh._t, y) : null;
          if (Ue) throw Error(`agent({agentType}): '${y}' is denied by permission rule '${import_chunk_060xwhvh._t}(${y})' from ${Ue.source}.`);
          if (ie && (0, import_chunk_bzyb60p0.LZt)(ie, te)) throw new import_chunk_jv7av99m.A(`agent({agentType}): ${(0, import_chunk_bzyb60p0.NZt)(y)}`, "workflow agent(): agent type unavailable, tool pool denied");
          throw Error(`agent({agentType}): agent type '${y}' not found. Available agents: ${oe.map((ot) => ot.agentType).join(", ")}`);
        }
        let j = [...X.disallowedTools ?? [], ...hn.disallowedTools ?? []], $e = L.schema ? Bi : ji, Fe = L.schema && !(0, import_chunk_bzyb60p0.pHe)(X.tools) ? [...X.tools ?? [], import_chunk_2b1wcpvk.ga] : X.tools;
        Ie = { ..._s(X, $e), disallowedTools: j, tools: Fe };
      }
      let Ce;
      if (L?.schema) {
        let y = (0, import_chunk_2b1wcpvk.nln)(L.schema);
        if ("error" in y || y.unsatisfiable) await (0, import_chunk_5appeerh.K)(0);
        if ("error" in y) throw new import_chunk_jv7av99m.A(`agent({schema}) received an invalid JSON Schema: ${y.error}`, "Workflow agent({schema}) invalid JSON Schema");
        if (y.unsatisfiable) {
          let ye = `agent({schema}) received an unusable JSON Schema \u2014 ${(0, import_chunk_2b1wcpvk.tln)(y.unsatisfiable)}`, { message: te } = y.unsatisfiable;
          if ((0, import_chunk_865at33z.b)("tengu_workflow_schema_lint_enforce", true)) throw new import_chunk_jv7av99m.A(`${ye}: ${te}. The subagent was not started \u2014 fix the schema and call agent() again.`, "Workflow agent({schema}) unsatisfiable JSON Schema");
          if (!Eo.has(y)) Eo.add(y), r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${H}] warning: ${ye}: ${te}` } });
        }
        Ce = y.tool;
      }
      let it = Ie ?? (Ce ? Ji : hn), Tt = (0, import_chunk_k67pwqya.AZ)(L?.effort) ?? (0, import_chunk_6hkrqqbp.XXs)(it, D.permissionLayers), me = Tt !== void 0 ? { ...it, effort: Tt } : it, Ve = L?.disallowedTools, Ke = L?.bashCommandClamp, We = Ve !== void 0 && Ve.length > 0 || Ke !== void 0 && Ke.length > 0 ? { ...me, disallowedTools: [...me.disallowedTools ?? [], ...Ve ?? [], import_chunk_h4t4qfaq.vo, ...Ke !== void 0 && Ke.length > 0 ? ["mcp__*", import_chunk_rb36kwbn.yt] : []] } : me;
      await (0, import_chunk_0canfdjs.EBt)(() => D.getAppState().mcp);
      let pt = (0, import_chunk_b83x8d52.ZI)(D.abortController?.signal ?? new AbortController().signal);
      if (pt !== void 0) await pt;
      let tt = D.getAppState(), xe = (0, import_chunk_bz1f2qnq.Z)(D), _o = D.options.tools.filter(import_chunk_cvv9kfq3.qf), io = D.options.toolCatalog.assembleToolPool(xe, (0, import_chunk_0canfdjs.m8e)(tt.mcp.tools.concat(_o)), { skipReplFilter: true, machineMcpTools: (0, import_chunk_bzyb60p0.DUe)(D) }), V = (y) => (0, import_chunk_knp99ee7.KL)(We, y, false, false, false, (0, import_chunk_865at33z.oh)(Ae) + 1, (0, import_chunk_sjqze7qg.dG)(D).mode), Ee = (y) => {
        let ye = (0, import_chunk_b83x8d52.IP)([import_chunk_bzyb60p0.AW, import_chunk_bzyb60p0.RW, ...(0, import_chunk_6a9gdcsm.hho)([import_chunk_bzyb60p0.RW.name, import_chunk_bzyb60p0.AW.name])], xe).filter((te) => !y.some((oe) => (0, import_chunk_4vsz8a99.gt)(oe, te.name)));
        return ye.length > 0 ? [...y, ...ye] : y;
      }, ze = io;
      if (Ve !== void 0 && Ve.length > 0) {
        if ((0, import_chunk_bzyb60p0.dR)() && !V(ze).resolvedTools.some((te) => (0, import_chunk_4vsz8a99.gt)(te, import_chunk_hn3cwwzt.ke))) ze = Ee(ze);
        let y = (0, import_chunk_knp99ee7.Ttr)(We.mcpServers), ye = (te) => {
          if (te.length === 0) return;
          let oe = `mcp__${te}`, X = (0, import_chunk_knp99ee7.oJs)(oe, ze, y);
          if (X === null) return;
          switch (X.kind) {
            case "pool-server":
            case "declared-server":
              return oe;
            case "slip":
              return X.correctedSpelling;
            case "unmatched":
              return;
          }
        };
        for (let te of Ve) {
          let oe = (0, import_chunk_knp99ee7.ngt)([te]);
          if (ze.some((ie) => oe.isToolDisallowed(ie))) continue;
          let { toolName: X } = (0, import_chunk_qebpc5de.Ur)(te);
          if (X !== X.trim() || /[\s()]/.test(X.trim())) throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.disallowedTools entry '${te}' parses to tool name '${X}', which can never match a tool \u2014 check for a space before the rule parens or an unbalanced paren. Refusing the spawn rather than running it un-narrowed.`, "agent() opts.disallowedTools unparseable entry \u2014 spawn refused");
          {
            let ie = /^mcp__/i.test(X) ? (0, import_chunk_px0hhsq7.mr)(`mcp__${X.slice(5)}`) : null;
            if (/^mcp__/i.test(X) && ie === null) throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.disallowedTools entry '${te}' cannot match any tool \u2014 its server segment is empty, so it names no server. Use 'mcp__<server>' to deny one server's tools ('mcp__<server>__<tool>' for one tool), or 'mcp__*' to deny every MCP server's tools. Refusing the spawn rather than running it un-narrowed.`, "agent() opts.disallowedTools empty mcp server segment \u2014 spawn refused");
            if (ie !== null && ie.serverName.includes("*") && ie.serverName !== "*") {
              let Ue = ye(ie.serverName.replace(/\*+/g, ""));
              throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.disallowedTools entry '${te}' cannot match any tool \u2014 server names take no wildcard. Use ` + (Ue !== void 0 ? `'${Ue}' for that server's tools, or ` : "") + "'mcp__*' for every MCP server's tools. Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools wildcard mcp server \u2014 spawn refused");
            }
            if (ie !== null && ie.toolName !== void 0 && ie.toolName !== "*" && ie.toolName.includes("*")) {
              let Ue = ye(ie.serverName);
              throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.disallowedTools entry '${te}' cannot match any tool \u2014 tool names take no wildcard. ` + (Ue !== void 0 ? `Use '${Ue}' to deny all of that server's tools, or enumerate exact tool names. ` : "Enumerate exact tool names, or use 'mcp__*' to deny every MCP server's tools. ") + "Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools wildcard mcp tool \u2014 spawn refused");
            }
          }
          if (X.includes("*") && (0, import_chunk_px0hhsq7.mr)(X) === null && !/^mcp__/i.test(X)) throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.disallowedTools entry '${te}' cannot match any tool \u2014 '*' is not a deny wildcard outside mcp__ server specs. ` + (X.toLowerCase().startsWith("skill__") ? `Use '${import_chunk_pmryp5f3.Fn}' to deny every skill. ` : "Enumerate the tools to deny (e.g. ['Bash', 'Write']), or use 'mcp__*' to deny every MCP server's tools. ") + "Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools wildcard-bearing entry \u2014 spawn refused");
          if (X === import_chunk_pmryp5f3.Fn) continue;
          if (Ce !== void 0 && X === import_chunk_2b1wcpvk.ga) continue;
          let j = X.toLowerCase(), $e = ze.flatMap((ie) => [ie.name, (0, import_chunk_px0hhsq7.ca)(ie)]).find((ie) => ie.toLowerCase() === j) ?? (j === import_chunk_pmryp5f3.Fn.toLowerCase() ? import_chunk_pmryp5f3.Fn : void 0) ?? (Ce !== void 0 && j === import_chunk_2b1wcpvk.ga.toLowerCase() ? import_chunk_2b1wcpvk.ga : void 0), Fe = (0, import_chunk_knp99ee7.oJs)(X, ze, y);
          if (Fe?.kind === "declared-server") {
            let ie = (0, import_chunk_px0hhsq7.mr)(X);
            if (!(!Fe.verifiable && $e !== void 0 && (0, import_chunk_px0hhsq7.mr)($e)?.serverName === ie?.serverName)) {
              (0, import_chunk_w578pjby.t)(`workflow agent(): disallowedTools mcp entry '${X}' covers this agent's declared frontmatter MCP server '${Fe.declaredSpelling}' \u2014 those tools connect at spawn, after this check, and the deny is applied to them then` + (Fe.verifiable ? "" : " (a full tool-name entry cannot be verified here)"));
              continue;
            }
          }
          if ($e !== void 0) throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.disallowedTools entry '${te}'` + (X !== te ? ` (parsed tool name '${X}')` : "") + ` does not match any tool, but '${$e}' exists \u2014 tool names are case-sensitive. Refusing the spawn rather than running it with this deny silently dropped.`, "agent() opts.disallowedTools case-mismatched entry \u2014 spawn refused");
          if (Fe !== null) {
            if (Fe.kind === "pool-server") continue;
            if (Fe.kind === "slip") throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.disallowedTools entry '${te}'` + (X !== te ? ` (parsed tool name '${X}')` : "") + ` cannot match as written, but '${Fe.correctedSpelling}' would \u2014 deny entries must match the normalized server spelling exactly, mcp__ prefix and case included. Refusing the spawn rather than running it with this deny silently dropped.`, "agent() opts.disallowedTools mismatched mcp entry \u2014 spawn refused");
            (0, import_chunk_w578pjby.t)(`workflow agent(): disallowedTools mcp entry '${X}' matches no tool in this session's pool \u2014 the deny is a no-op here`);
            continue;
          }
          (0, import_chunk_w578pjby.t)(`workflow agent(): disallowedTools entry '${X}' matches no tool in this session's pool \u2014 the deny is a no-op here`);
        }
      }
      if (Ce !== void 0 && (0, import_chunk_knp99ee7.ngt)(We.disallowedTools).isToolDisallowed(Ce)) throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() schema mode needs the ${import_chunk_2b1wcpvk.ga} tool, but the spawn's merged disallowedTools deny it \u2014 refusing the spawn instead of running an agent that cannot return its structured output.`, "agent() schema mode with StructuredOutput denied \u2014 spawn refused");
      if (Ke !== void 0 && Ke.length > 0 && (0, import_chunk_bzyb60p0.dR)()) ze = Ee(ze);
      if (Ke !== void 0 && Ke.length > 0) {
        let y = (0, import_chunk_bz1f2qnq.Z)(D).toolAliases, ye = D.options.toolAliases, te = [import_chunk_hn3cwwzt.ke, import_chunk_9xt9z453.Xo, import_chunk_rb36kwbn.yt].find((oe) => y?.[oe] !== void 0 || ye?.[oe] !== void 0);
        if (te !== void 0) throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.bashCommandClamp cannot bind in this session: the host remaps ${te} via toolAliases, so exec dispatch runs the alias target's permission path instead \u2014 the clamp cannot be guaranteed to apply on that surface. Refusing the spawn rather than running it un-clamped.`, "agent() bashCommandClamp under a shell toolAlias \u2014 spawn refused");
      }
      if (Ke !== void 0 && Ke.length > 0 && !V(ze).resolvedTools.some((y) => (0, import_chunk_4vsz8a99.gt)(y, import_chunk_hn3cwwzt.ke))) throw await (0, import_chunk_5appeerh.K)(0), new import_chunk_jv7av99m.A(`agent() opts.bashCommandClamp can bind nothing: the spawned agent's resolved tool pool has no ${import_chunk_hn3cwwzt.ke} (removed by this spawn's disallowedTools, the agent definition's denies, or absent from the session pool). A clamp on a Bash-less agent means the commands it was meant to keep are unavailable \u2014 refusing the spawn rather than running a blind agent. Drop the clamp or the Bash deny.`, "agent() bashCommandClamp with no Bash in resolved pool \u2014 spawn refused");
      let Le = ze, ct = Ce ? [...Le.filter((y) => !(0, import_chunk_4vsz8a99.gt)(y, import_chunk_2b1wcpvk.ga)), Ce] : Le, It = await kr({ idx: v, promptStr: F, label: H, agent: We, model: L?.model, permissionMode: xe.mode });
      const mt = __using(_stack, It.starting);
      let { prompt: Ut, model: Vo, isRewritten: Jo } = It;
      if (Ut !== F && await Bo({ idx: v, promptStr: Ut, label: H, ownPhaseTitle: Re, ownPhaseIndex: be, opts: L, queuedAt: ne, provenanceOn: Ye })) return null;
      let Qt = { agentDefinition: We, model: Vo, toolUseContext: D, run: "spawn", detached: false, spawnedByWorkflowRunId: g, onModelRestricted: jo(H) }, Rn = await (0, import_chunk_knp99ee7.NF)(Qt), Ze = Rn.model, ht = xe.mode === "auto", _r = Ce === void 0 && ps(xe.mode), Ko = Ce !== void 0 && (0, import_chunk_3ccq0r9v.QYs)(xe.mode), kt = null, An = (0, import_chunk_mzmcvr6c.qS)(), br = g ? `${g}-${v}` : `wf-${v}`, Cn = e.agentContext, Sr = { name: br, from: (0, import_chunk_18rsj2ts.pe)(), for: "agent", agentId: An, ...Cn !== void 0 && !(0, import_chunk_865at33z.mp)(Cn) && { parentAgentId: Cn.agentId }, base: (0, import_chunk_bzyb60p0.lQ)() };
      if (L?.isolation === "worktree" && (0, import_chunk_tc5xmewh.yA)(We)) (0, import_chunk_w578pjby.t)("[web-fetch agent] isolation:'worktree' ignored; the built-in web-fetch agent always runs as a local agent");
      else if (L?.isolation === "worktree") kt = await (0, import_chunk_bzyb60p0.YY)(Sr, { origin: D.hookOrigin, signal: D.abortController?.signal, make: (y) => Ge(br, { ...y, storageV5: D.storageV5, credentials: D.credentials }) });
      let ao = kt?.isInPlace ? kt : void 0, Mo = ao ? void 0 : kt?.worktreePath, En = Ye ? (0, import_chunk_4rrhthp1.Ler)(e.messages, e.agentId) : null, zo = En?.kind === "relay" ? (0, import_chunk_4rrhthp1.n7s)(En) : null, Tr = !Ye ? "none" : En?.kind === "automated" ? "automated" : "plain", Yo = L?.sharedHeadLength ?? 0, Po = Ut.slice(0, Yo), On = Ut.slice(Yo), Mn = Po === F.slice(0, Yo) && Po.trim() !== "" && On.trim() !== "" && !/[\uD800-\uDBFF]$/.test(Po) && (0, import_chunk_trwykz8a.Sd)(Ut).every((y) => Po.includes(y) || On.includes(y)), Rr = Mn ? On : Ut, lo = Mn ? (0, import_chunk_4rrhthp1.t7s)(Po, Tr) : void 0;
      if (Mn) (0, import_chunk_cqa9hrgx.u)("workflow_shared_head");
      else if (Yo > 0) (0, import_chunk_cqa9hrgx.l)("workflow_shared_head", "not_split");
      let Pn = `${(0, import_chunk_4rrhthp1.t7s)(Rr, Tr)}${ho(Ut)}`, qo = ao ? `${Pn}

---
${(0, import_chunk_9e5mdyfk.xao)()}` : kt ? `${Pn}

---
You are running in an isolated ${kt.copy.madeBy === "mod" || (await (0, import_chunk_bzyb60p0.Gue)(kt.worktreePath))?.system ? "" : "git "}worktree at \`${(0, import_chunk_4rrhthp1.ZYs)(kt.worktreePath)}\` (a separate working copy of the ${kt.copy.madeBy === "mod" ? "project" : "repo"}). Changes you make here do NOT affect the main working directory (\`${(0, import_chunk_4rrhthp1.ZYs)((0, import_chunk_18rsj2ts.pe)())}\`) or other agents. Work normally \u2014 the worktree will be cleaned up automatically if you made no changes, or preserved for review if you did.` : Pn, Et = 0, bt = 0, jt = 0, Ar = Date.now(), Cr = no(Rr), Xs = [Ze ?? "", String(We.effort ?? (0, import_chunk_bz1f2qnq.e_)(D) ?? ""), We.agentType, ct.map((y) => y.name).join(","), L?.schema ? (0, import_chunk_w578pjby._)(L.schema) : "", Mo ?? (0, import_chunk_18rsj2ts.pe)(), ...lo === void 0 ? [] : [(0, import_chunk_ccm69jjy.Je)(`${zo ?? ""}
${lo}`)]].join(`
`), Wn;
      async function Qs(y, ye, te, oe, X) {
        let j = An ?? (0, import_chunk_mzmcvr6c.qS)();
        if (An = void 0, ao && j !== ao.agentId) ao.lineage?.add(j), await (0, import_chunk_bzyb60p0.YY)({ ...Sr, agentId: j }, { origin: D.hookOrigin, signal: D.abortController?.signal, make: () => Promise.reject(Error("isolated already")) }).then((N) => (0, import_chunk_rb36kwbn.UX)().delete(N), () => false);
        et(j), mt.started({ agentId: j, model: Ze });
        let $e = { agentId: j, parentAgentId: (0, import_chunk_865at33z.mp)(Ae) ? void 0 : Ae?.agentId, depth: (0, import_chunk_865at33z.oh)(Ae) + 1, parentSessionId: (0, import_chunk_wtm85h0y.cD)(), agentType: "subagent", subagentName: We.agentType, workflowRunId: g, workflowName: le, workflowWaitsOutUsageLimit: (N) => Be.wouldWait(N), isAsync: false, isBuiltIn: (0, import_chunk_bzyb60p0.ic)(We), isBackgroundAgent: true, invokingRequestId: G, invocationKind: "spawn", invocationEmitted: false, parentPromptId: re }, Fe = `workflow_agent_${v}_${j}`, ie, Ue, ot, Lt = /* @__PURE__ */ new Map(), uo = /* @__PURE__ */ new Map(), Wr, Ir = Ze, xr = Ze ? (0, import_chunk_zmb62hr5.ur)(Ze) : void 0, zt = (N, ae) => r({ type: "progress", toolUseID: Fe, data: { type: "workflow_agent", index: v, label: te, phaseIndex: be, phaseTitle: Re, agentId: j, agentType: Ie?.agentType, isolation: Mo ? "worktree" : void 0, model: Ze, fallbackModel: Wr, state: N, startedAt: Ar, queuedAt: ne, attempt: oe, lastAttemptReason: X === "rate_limited" ? "throttled" : X, lastToolName: ie, lastToolSummary: Ue, promptPreview: Cr, promptFramed: Ye, lastProgressAt: Date.now(), ...ae } }), Gt = new AbortController(), xn = D.abortController?.signal, Lr = () => Gt.abort(new DOMException("workflow-abort", "AbortError"));
        if (xn?.addEventListener("abort", Lr), xn?.aborted) Gt.abort(new DOMException("workflow-abort", "AbortError"));
        let So, $r = 0, Zs = Math.min(ce * 0.1, 1e3), Ln = () => {
          if (So?.clear(), ce > 0) So = (0, import_chunk_cbnm4p23.eKn)(zi.bind(void 0, Gt), ce, y.host.clock, { unref: false });
        }, To = /* @__PURE__ */ new Set(), $n = (0, import_chunk_8a0qz0ab.xqr)(), Dr = () => {
          if (To.size === 0 && So === void 0) Ln();
        }, Nr = () => {
          if (To.size > 0) return;
          let N = Date.now();
          if (N - $r < Zs) return;
          $r = N, Ln();
        }, Io = { ...D, abortController: Gt, ...Ke !== void 0 && Ke.length > 0 && { permissionLayers: [...D.permissionLayers ?? [], { kind: "bash_command_clamp", rules: Ke }] } };
        (0, import_chunk_bzyb60p0.iar)({ toolUseContext: Io }, Jo), zt("start", Et || bt ? { tokens: Et, toolCalls: bt } : void 0), Ln();
        let jr, je, tn = /* @__PURE__ */ new Map(), Hr, xo = 0, Br = /* @__PURE__ */ new Set(), Vr = 0, Dn = /* @__PURE__ */ new Map(), Nn = false, fo = ht ? [] : void 0;
        Te(ye), Te(lo), Te(zo);
        let $t, Dt = 0, At = 0, Un = (N, ae = true) => {
          let ut = (0, import_chunk_r3kja8v6.ue)() ? require("/$bunfs/root/chunk-fke3b51h.js").isRunningPhase : () => false, z = (eo) => [...(eo === void 0 ? void 0 : Lt.get(eo)?.values()) ?? []], vt = (eo) => z(eo).some((oi) => ut(oi.phase)), Yr = (eo) => z(eo).length > 0, Kn = (N !== void 0 && vt(N) ? N : void 0) ?? [...Lt.keys()].findLast(vt) ?? (N !== void 0 && Yr(N) ? N : void 0) ?? [...Lt.keys()].findLast(Yr), zn = Kn === void 0 ? [...uo.entries()].at(-1) : void 0, qr = z(Kn), ln = qr.findLast((eo) => ut(eo.phase)) ?? qr.at(-1), No = ln !== void 0 ? { id: Kn, name: ln.name, summary: (0, import_chunk_8a0qz0ab.Oer)(ln.input, ln.name) || void 0 } : zn !== void 0 ? { id: zn[0], ...zn[1] } : void 0;
          if (ot = No?.id, No?.name === ie && No?.summary === Ue) return;
          if (ie = No?.name, Ue = No?.summary, ae) zt("progress", { tokens: Et + Dt, toolCalls: bt + At });
        }, co = 0, Lo = 0, Ro, on, Jr = /* @__PURE__ */ new Set(), nn = /* @__PURE__ */ new Map(), jn, rn = { responses: /* @__PURE__ */ new Set(), lastRow: 0 }, Kr = import_chunk_c203g5kd.s.MAX_STRUCTURED_OUTPUT_RETRIES ?? import_chunk_xgypevhc.Iqr, po = Date.now(), sn = (0, import_chunk_tc5xmewh.yA)(We) ? (0, import_chunk_d3vfy4gs.abe)() : void 0;
        try {
          k?.(j, Gt), await (0, import_chunk_865at33z.N1)($e, async () => {
            for await (let N of (0, import_chunk_knp99ee7.VL)({ agentDefinition: _r ? _s(We, Hi) : We, turnPrompt: lo === void 0 ? ye : `${lo}
${ye}`, promptMessages: [...zo === null ? [] : [(0, import_chunk_bzyb60p0.Me)({ content: zo })], ...lo === void 0 ? [] : [{ ...(0, import_chunk_bzyb60p0.Me)({ content: lo }), sharedHeadBlocks: 1 }], (0, import_chunk_bzyb60p0.Me)({ content: ye })], toolUseContext: Io, session: y, canUseTool: o, isAsync: false, querySource: (0, import_chunk_qr6brph0.Zve)(We.agentType, (0, import_chunk_bzyb60p0.ic)(We)), spawnedBySkill: D.options.spawnedBySkill ?? D.options.activeSkill, spawnedByForkedSkill: D.options.spawnedByForkedSkill, availableTools: ct, requiresStructuredOutput: Ce !== void 0, structuredOutputIsHandback: Ko, ..._r && { handbackOptIn: true, handbackTool: ms(j, (ae) => {
              if (je === void 0) return je = ae, true;
              if (je.review === null && ae.review !== null || je.review === void 0 && ae.review?.kind === "flagged") je = { ...je, review: ae.review, noVerdict: ae.noVerdict };
              return false;
            }), callerDeliveredReport: () => je === void 0 ? void 0 : [...je.review ? [je.review.warning] : [], ...je.noVerdict ? [ys(je.noVerdict).warning] : [], (0, import_chunk_yq00hd9s.k0)(je.message).sanitized].join(`

`) }, transcriptSubdir: g ? `${import_chunk_jar84hn9.TLn}/${g}` : void 0, spawnedByWorkflowRunId: g, description: Xe.label, workflowPhase: Xe.phase, override: { agentId: j, agentContext: $e }, persistedToolResultFiles: sn, model: Vo, modelFacts: X === void 0 ? Rn : await (0, import_chunk_knp99ee7.NF)({ ...Qt, toolUseContext: Io }), onQueryProgress: Nr, worktreePath: Mo })) {
              if (N.type === "attachment" && N.attachment.type === "structured_output") {
                $t = N.attachment.data, jn = N.attachment.toolUseID;
                continue;
              }
              if (N.type === "attachment") Ot(N);
              if (N.type === "api_metrics") {
                if (N.event.type === "start") Wn?.responded();
                continue;
              }
              if (N.type === "query_model_change") {
                Ir = N.toModel;
                continue;
              }
              if (N.type === "set_in_progress_tool_use_ids") {
                if (N.op.action === "remove") {
                  for (let ae of N.op.ids) if (To.delete(ae), (0, import_chunk_r3kja8v6.ue)()) uo.delete(ae), Lt.delete(ae);
                  Dr();
                }
                continue;
              }
              if ((0, import_chunk_r3kja8v6.ue)() && N.type === "progress") {
                let ae = N.data;
                if (ae.type === "repl_tool_call") {
                  if (ae.executed) Q(j, ae.toolName);
                  for (let z of ae.delegatedToolNames ?? []) Q(j, z);
                }
                let ut = Lt.get(N.parentToolUseID);
                if (ae.type === "repl_tool_call" && ut !== void 0 && To.has(N.parentToolUseID) && ut.get(ae.toolUseId)?.phase !== ae.phase && !require("/$bunfs/root/chunk-z5pk1qtk.js").isScriptHelperCallName(ae.toolName)) ut.set(ae.toolUseId, { name: ae.toolName, input: ae.toolInput, phase: ae.phase }), Un(N.parentToolUseID);
                continue;
              }
              if (N.type === "user") {
                fo?.push(N), Ot(N);
                let ae = [];
                if (Array.isArray(N.message.content)) for (let z of N.message.content) {
                  if (z.type !== "tool_result") continue;
                  let vt = Dn.get(z.tool_use_id);
                  if (Dn.delete(z.tool_use_id), vt !== void 0 && !ae.includes(vt)) ae.push(vt);
                }
                for (let z of (0, import_chunk_bzyb60p0.rne)([...ae, N])) Q(j, z);
                let ut = N.message.content;
                if (Array.isArray(ut)) {
                  for (let z of ut) if (typeof z === "object" && z?.type === "tool_result") {
                    if (To.delete(z.tool_use_id), (0, import_chunk_r3kja8v6.ue)()) {
                      uo.delete(z.tool_use_id);
                      let vt = Lt.delete(z.tool_use_id);
                      if (z.tool_use_id === ot && (vt || Lt.size > 0)) Un(void 0);
                    }
                    if ((0, import_chunk_8a0qz0ab.Oqr)($n, z.tool_use_id, N.isVirtual === true, z.is_error === true), Jr.delete(z.tool_use_id) && z.is_error) Lo++, on = (0, import_chunk_xgypevhc.JYs)(z.content) ?? on;
                  }
                  if (Dr(), Lo > 0 && Lo >= Kr && $t === void 0) {
                    let z = on === void 0 ? "" : ` \u2014 last StructuredOutput error: ${on}`;
                    throw new import_chunk_jv7av99m.A(`agent({schema}): StructuredOutput retry cap (${Kr}) exceeded \u2014 ${Lo} failed ${(0, import_chunk_7cfjrnwy.O)(Lo, "call")} with no valid output` + z, "Workflow agent({schema}) StructuredOutput retry cap exceeded");
                  }
                }
                continue;
              }
              if (N.type === "assistant") {
                if (N.streamWatchdogGaveUp) {
                  (0, import_chunk_w578pjby.t)(`workflow agent [${te}] ended with "${(0, import_chunk_bzyb60p0.Go)(N.message.content, " ")}"; treating it as a stall`, { level: "warn" }), Nn = true;
                  let z = new DOMException("stalled", "AbortError");
                  throw Gt.abort(z), z;
                }
                if (jr = N, !N.isApiErrorMessage) Hr = N.message.id;
                xo++;
                for (let z of N.message.content) {
                  if (z.type === "tool_use") Dn.set(z.id, N);
                  if (z.type === "tool_use" && z.name === import_chunk_060xwhvh.mu && (0, import_chunk_4dnx2vkh.pRe)(j) === true) {
                    if (!tn.has(z.id)) tn.set(z.id, { response: N.message.id, row: xo });
                  } else if (z.type === "tool_use" || z.type === "server_tool_use" || z.type === "mcp_tool_use") {
                    if (Br.add(N.message.id), Vr = xo, z.type !== "tool_use" || z.name !== import_chunk_2b1wcpvk.ga) rn.responses.add(N.message.id), rn.lastRow = xo;
                  }
                }
                fo?.push(N), Ot(N);
                for (let z of N.message.content) if (z.type === "tool_use" || z.type === "server_tool_use") Q(j, (0, import_chunk_qebpc5de.Gl)(z.name.trim()));
                if (!N.isApiErrorMessage) {
                  Wn?.responded();
                  let z = N.isUnmetered === true ? void 0 : (0, import_chunk_hym6yzrf.Jle)(N.message.usage);
                  if (z) Dt = (0, import_chunk_bzyb60p0.bJo)(z);
                  let vt = N.message.model;
                  if (vt && xr && (0, import_chunk_bzyb60p0.W3e)(N, xr)) Wr = vt;
                }
                let ae = 0, ut = 0;
                for (let z of N.message.content) {
                  if (z.type !== "tool_use") continue;
                  if ((0, import_chunk_r3kja8v6.ue)() && N.scriptErrorCopy === true) continue;
                  let vt = (0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_8a0qz0ab.Pqr)($n, z, N.isVirtual === true);
                  if ((0, import_chunk_r3kja8v6.ue)() && $n.helperCalls.has(z.id)) continue;
                  if (ae++, vt) ut++;
                  if (To.add(z.id), (0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_h4t4qfaq.li)(z.name) && N.isVirtual !== true) Lt.set(z.id, /* @__PURE__ */ new Map()), Un(z.id, false);
                  else if (ie = z.name, Ue = (0, import_chunk_8a0qz0ab.Oer)(z.input, z.name) || void 0, ot = z.id, (0, import_chunk_r3kja8v6.ue)() && N.isVirtual !== true) uo.set(z.id, { name: z.name, summary: Ue });
                  if (z.name === import_chunk_2b1wcpvk.ga) {
                    if (co++, Ro = z.input, Jr.add(z.id), Ko && !nn.has(z.id)) nn.set(z.id, { response: N, written: Yi(z.input), row: xo });
                    if ($t !== void 0 && co > 2) {
                      Gt.abort("stalled");
                      break;
                    }
                  }
                }
                if (At += ae - ut, ae > 0) So?.clear(), So = void 0;
                else Nr();
                zt("progress", { tokens: Et + Dt, toolCalls: bt + At });
              }
            }
          });
        } catch (N) {
          let ae = Gt.signal.aborted ? (0, import_chunk_cbnm4p23.Ai)(Gt.signal.reason) : void 0;
          if (ae === "stalled" || ae === "user-retry") {
            if (ae === "stalled" && $t !== void 0) {
              let ut = Date.now() - po;
              return zt("done", { tokens: Et + Dt, toolCalls: bt + At, durationMs: jt + ut, resultPreview: no($t) }), (0, import_chunk_knp99ee7.rgt)(j, Io), { structured: $t, text: "", agentMessages: fo, toolReportReview: Ko ? await bs({ calls: nn, deliveredId: jn, delivered: $t, otherToolCalls: rn, context: D }) : void 0, tokens: Dt, toolCalls: At, stalled: false, skipped: false, durationMs: ut, stopReason: void 0, outputTokens: void 0, structuredOutputAttempts: co, lastStructuredOutputInput: Ro };
            }
            return zt("error", { error: ae === "stalled" ? Nn ? "reply lost \u2014 the response stream went silent and Claude Code gave up waiting for it" : `stalled \u2014 no progress for ${ce}ms` : "retry requested by user", tokens: Et + Dt, toolCalls: bt + At, durationMs: jt + (Date.now() - po) }), { structured: void 0, text: "", agentMessages: fo, tokens: Dt, toolCalls: At, stalled: true, stalledReason: ae, replyLost: ae === "stalled" && Nn, skipped: false, durationMs: Date.now() - po, stopReason: void 0, outputTokens: void 0, structuredOutputAttempts: co, lastStructuredOutputInput: Ro };
          }
          if (ae === "user-skip") return zt("error", { error: "skipped by user", skipped: true, tokens: Et + Dt, toolCalls: bt + At, durationMs: jt + (Date.now() - po) }), { structured: void 0, text: "", agentMessages: fo, tokens: Dt, toolCalls: At, stalled: false, skipped: true, durationMs: Date.now() - po, stopReason: void 0, outputTokens: void 0, structuredOutputAttempts: co, lastStructuredOutputInput: Ro };
          throw zt("error", { error: N instanceof Error ? N.message : String(N), tokens: Et + Dt, toolCalls: bt + At, durationMs: jt + (Date.now() - po) }), N;
        } finally {
          So?.clear(), xn?.removeEventListener("abort", Lr), k?.(j, null);
          for (let N of (0, import_chunk_bzyb60p0.gHe)(j)) st.add(N);
        }
        let Ct = jr, Hn = je?.message ?? (Ct ? (0, import_chunk_bzyb60p0.Go)(Ct.message.content, `
`) : ""), Bn = Ct?.isApiErrorMessage === true && je === void 0, Do = je?.toolUseId === void 0 ? void 0 : tn.get(je.toolUseId), ei = Do !== void 0 && Do.response !== "" && Do.response === Hr && !Br.has(Do.response) && Vr <= Do.row;
        if ((0, import_chunk_4dnx2vkh.pRe)(j) && !Bn) if (je === void 0) (0, import_chunk_cqa9hrgx.l)("workflow_handback_tool", tn.size > 0 ? "handback_call_refused" : Hn === "" ? "no_final_text" : "plain_text_ending");
        else (0, import_chunk_cqa9hrgx.u)("workflow_handback_tool", { flagged: je.review?.kind === "flagged" });
        let Zt;
        if (Bn) Zt = (0, import_chunk_knp99ee7.Q4r)((0, import_chunk_yq00hd9s.k0)(Hn, { prependMarker: false }).sanitized);
        else if (Zt = (0, import_chunk_yq00hd9s.k0)(Hn).sanitized, sn) Zt = `${Zt}

${(0, import_chunk_tc5xmewh.imr)(sn)}`;
        let Vn = Ct?.message.usage, zr = Vn && typeof Vn.output_tokens === "number" ? Vn.output_tokens : void 0, an = Date.now() - po, ti = Ct?.isUnmetered === true ? void 0 : Ct?.message.usage, Jn = Dt || (0, import_chunk_bzyb60p0.bJo)((0, import_chunk_hym6yzrf.Jle)(ti) ?? import_chunk_hym6yzrf.Eg), Gr = Et + Jn;
        if (!(0, import_chunk_knp99ee7.VHt)(Ct) || je !== void 0) (0, import_chunk_knp99ee7.rgt)(j, Io);
        if (Ct !== void 0 && Bn) {
          if ((0, import_chunk_knp99ee7.V$e)(Ct)) qt = (0, import_chunk_knp99ee7.YTn)(Ct, (0, import_chunk_q2404y26.wA)(e).some((ut) => (0, import_chunk_4vsz8a99.gt)(ut, import_chunk_060xwhvh._t)));
          let N = Zt || "API error", ae = Ct.error === "rate_limit" ? { kind: "rate_limit", text: N, model: Ir, quotaLimits: Ct.quotaLimits } : { kind: "other", text: N };
          return zt("error", { error: N, tokens: Gr, toolCalls: bt + At, durationMs: jt + an }), { structured: $t, text: Zt, agentMessages: fo, apiError: ae, tokens: Jn, toolCalls: At, stalled: false, skipped: false, durationMs: an, stopReason: Ct.message.stop_reason, outputTokens: zr, structuredOutputAttempts: co, lastStructuredOutputInput: Ro };
        }
        return zt("done", { tokens: Gr, toolCalls: bt + At, durationMs: jt + an, resultPreview: no(Ce ? $t : Zt) }), { structured: $t, text: Zt, agentMessages: fo, toolReportReview: je !== void 0 ? je.review === null && !ei ? void 0 : je.review : Ko ? await bs({ calls: nn, deliveredId: jn, delivered: $t, otherToolCalls: rn, context: D }) : void 0, ...je?.noVerdict !== void 0 && { toolReportUnjudged: ys(je.noVerdict) }, ...je !== void 0 && { toolReportAgentId: j }, tokens: Jn, toolCalls: At, stalled: false, skipped: false, durationMs: an, stopReason: Ct?.message.stop_reason, outputTokens: zr, structuredOutputAttempts: co, lastStructuredOutputInput: Ro, webFetchSavedFiles: sn };
      }
      let Er = 0;
      function Qo(y, ye, te, oe) {
        let X = D.session.withProject({ cwd: Mo ?? ao?.from });
        return (0, import_chunk_18rsj2ts.L0r)((0, import_chunk_f9x2f6cx.Rs)(X).cwd, () => Qs(X, y, ye, te + Er, oe));
      }
      let Zo;
      async function In(y, ye) {
        function te(X, j) {
          r({ type: "progress", toolUseID: `workflow_agent_${v}_queued`, data: { type: "workflow_agent", index: v, label: H, phaseIndex: be, phaseTitle: Re, agentType: Ie?.agentType, isolation: Mo ? "worktree" : void 0, model: Ze, queuedAt: Date.now(), tokens: Et + X.tokens, toolCalls: bt + X.toolCalls, promptPreview: Cr, promptFramed: Ye, lastProgressAt: Date.now(), ...j } });
        }
        let oe = y;
        while (oe.apiError?.kind === "rate_limit") {
          let X = oe.apiError.text, j = Be.join(oe.apiError.quotaLimits);
          if (j.outcome === "declined") return Zo = j.failureNote, oe;
          if (j.outcome === "aborted") throw Error("Workflow aborted");
          te(oe, { state: "start" });
          let $e = await j.ended;
          if ($e === "aborted") throw Error("Workflow aborted");
          if ($e === "revoked") return Zo = "usage-limit wait turned off", te(oe, { state: "error", error: X, durationMs: jt + oe.durationMs }), oe;
          Et += oe.tokens, bt += oe.toolCalls, jt += oe.durationMs, Ar = Date.now(), Er++, oe = await vr(() => Qo(qo, `${H}${import_chunk_gp23aqt9.$oo}`, ye, "rate_limited"));
        }
        return oe;
      }
      async function vr(y) {
        let ye = await (0, import_chunk_ft02b5r0.Mqr)().enter(Xs, { capMs: (0, import_chunk_ft02b5r0.Hqr)(), signal: D.abortController?.signal });
        if (Wn = ye, ye.waitedMs > 0) (0, import_chunk_w578pjby.t)(`workflow agent [${H}] held ${ye.waitedMs}ms for a same-prefix sibling's first response (prompt-cache warm-up)`);
        try {
          return await y();
        } finally {
          ye.done();
        }
      }
      let Or, xt = [], Wo = { maxContextTokens: 0, toolCalls: 0, durationMs: 0 }, Mr = 0, bo, Pr = false;
      try {
        let y = await vr(() => Qo(qo, H, 1));
        y = await In(y, 1);
        let ye = (j) => !j.stalled && !j.skipped && j.stopReason == null && j.structured === void 0 && (j.outputTokens ?? 1 / 0) < 50 && j.durationMs > Math.min(ce * 0.5, Ki), te = ye(y);
        if (te) {
          if (r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${H}] throttled response (no stop_reason, ${y.outputTokens ?? "?"} output tokens in ${Math.round(y.durationMs / 1e3)}s) \u2014 sleeping 45s before retry` } }), await (0, import_chunk_5appeerh.K)(45e3, D.abortController?.signal, { throwOnAbort: true }), Et += y.tokens, bt += y.toolCalls, jt += y.durationMs, y = await In(await Qo(qo, `${H} (throttle-retry)`, 2, "throttled"), 2), ye(y)) r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${H}] throttle-retry also degraded \u2014 giving up on throttle backoff` } });
        }
        for (let j = 1; y.stalled && !te && j <= ws; j++) {
          if (hs(xt, Wo, y), D.abortController?.signal.aborted) throw Error("Workflow aborted");
          Mr++;
          let $e = y.stalledReason ?? "stalled", Fe = $e === "user-retry" ? "retry requested by user" : y.replyLost ? "lost its reply (Claude Code gave up waiting on a silent response stream)" : "stalled (no progress)", ie = "";
          if ($e === "stalled" && y.structuredOutputAttempts > 0 && y.structured === void 0) {
            let Ue = (0, import_chunk_w578pjby._)(y.lastStructuredOutputInput), ot = Ue.length > 300 ? (0, import_chunk_7cfjrnwy.ee)(Ue, 300) + "\u2026" : Ue;
            ie = ` \u2014 ${y.structuredOutputAttempts} StructuredOutput validation ${(0, import_chunk_7cfjrnwy.O)(y.structuredOutputAttempts, "failure")} (last input: ${ot})`;
          }
          r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[stall] agent "${H}" ${Fe} after ${Math.round(y.durationMs / 1e3)}s${ie} \u2014 retrying (${j}/${ws})` } }), Et += y.tokens, bt += y.toolCalls, jt += y.durationMs, y = await In(await Qo(qo, `${H} (retry ${j})`, j + 1, $e), j + 1);
        }
        if (y.stalled) hs(xt, Wo, y);
        if (bo = y.skipped ? "skipped" : y.stalled ? te ? "stalled_after_throttle" : "retries_exhausted" : y.apiError ? "api_error" : "completed", y.skipped) return null;
        if (y.stalled) {
          let j = xt.length, $e = xt.every((ot) => ot === "user-retry"), Fe = xt.every((ot) => ot === "stalled"), ie = xt.every((ot) => ot === "reply lost"), Ue = y.stalledReason !== "user-retry" && y.structuredOutputAttempts > 0 && y.structured === void 0 ? ` \u2014 ${y.structuredOutputAttempts} StructuredOutput validation ${(0, import_chunk_7cfjrnwy.O)(y.structuredOutputAttempts, "failure")} on the last attempt` : "";
          throw Error($e ? `agent abandoned: user requested retry on all ${j} attempts` : Fe ? `agent stalled on all ${j} attempts (no progress for ${ce}ms each)${Ue}` : ie ? `agent lost its reply on all ${j} attempts (Claude Code gave up waiting on a silent response stream each time)${Ue}` : `agent abandoned after ${j} attempts (${xt.join(" \u2192 ")})${Ue}`);
        }
        if (y.apiError?.kind === "rate_limit" && y.apiError.quotaLimits) Or = { model: y.apiError.model, limits: y.apiError.quotaLimits };
        if (y.apiError) {
          let j = Zo === void 0 || y.apiError.kind !== "rate_limit" ? `[${H}] failed: ${y.apiError.text}` : `[${H}] failed: ${Zo}: ${y.apiError.text}`;
          if (q(j, { log: true }), y.apiError.kind === "rate_limit") so.add(v);
          return null;
        }
        let oe = Ce && y.structured !== void 0 ? (0, import_chunk_yq00hd9s.Rgl)(y.structured, { reservedKeys: ["webFetchSavedFiles"] }) : void 0, X = (0, import_chunk_bz1f2qnq.Z)(D);
        if (X.mode === "auto" || y.toolReportReview || y.toolReportUnjudged) {
          let j = await (0, import_chunk_knp99ee7.Z4r)({ child: Ce ? "workflow_object" : "workflow_text", childAgentId: void 0, checkpoint: false, handback: y.toolReportReview === void 0 ? void 0 : y.toolReportReview === null ? "send" : "flagged", agentMessages: y.agentMessages ?? [], inheritedVerifiedHumanTurns: (0, import_chunk_bzyb60p0.ILt)(D), tools: ct, rootToolSurface: e.rootToolSurface, toolPermissionContext: X, abortSignal: D.abortController.signal, agentType: (0, import_chunk_78g0060s.Xge)(We), totalToolUseCount: bt + y.toolCalls, finalResultText: Ce ? oe !== void 0 ? (0, import_chunk_w578pjby._)(oe.value) : void 0 : y.text, agentId: D.agentId, storageV5: D.storageV5, credentials: D.credentials }).catch((ie) => {
            if (D.abortController.signal.aborted) return y.toolReportUnjudged ?? null;
            return (0, import_chunk_k449cc64.i)(ie), (0, import_chunk_knp99ee7.Atr)();
          }), $e = j === null ? X.mode !== "auto" : j.kind === "unavailable", Fe = y.toolReportReview ?? ($e ? y.toolReportUnjudged ?? j : j);
          if (Fe && Fe.kind !== "unavailable" && y.toolReportAgentId !== void 0) (0, import_chunk_4dnx2vkh.U0e)(y.toolReportAgentId);
          if (Fe) {
            if (Ce) {
              let ie = `[${H}] ${Fe.warning}`;
              q(ie, { log: true });
            } else if (y.text = `${Fe.warning}

${y.text}`, Fe.kind !== "unavailable") {
              let ie = `[${H}] ${Fe.warning}`;
              q(ie, { log: true });
            }
          }
        }
        if (Ce) {
          if (oe === void 0) throw Error("agent({schema}): subagent completed without calling StructuredOutput (after in-conversation nudge)");
          let j = oe.value;
          if (oe.droppedReservedKeys > 0) r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${H}] Dropped a "webFetchSavedFiles" key the agent put in its structured output \u2014 that key is reserved for the harness's own record of files ${import_chunk_ww0784kh.Gn} saved, and the agent cannot supply it.` } });
          if (oe.reportable.length > 0) r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${H}] ${(0, import_chunk_yq00hd9s.uys)(oe.reportable)} (Matched in the string values or key names of the agent's structured output; neutralized there in place.)` } });
          if (y.webFetchSavedFiles) {
            let $e = (0, import_chunk_ma3kja9f.T)(j);
            if (r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${H}] ${(0, import_chunk_tc5xmewh.imr)(y.webFetchSavedFiles)}${$e ? "" : " (The agent's structured result is not an object, so this record is not attached to it as webFetchSavedFiles \u2014 this log line is its only carrier.)"}` } }), $e) return Oe({ ...j, webFetchSavedFiles: { dirs: [...y.webFetchSavedFiles.dirs], paths: [...y.webFetchSavedFiles.paths] } });
          }
          return Oe(j);
        }
        return y.text;
      } catch (y) {
        throw Pr = true, y;
      } finally {
        if (wo = Or, kt) {
          let { worktreePath: y, worktreeBranch: ye, headCommit: te, gitRoot: oe, hookBased: X } = kt;
          try {
            let j = D.hookOrigin, { taskRegistry: $e } = D, Fe = (0, import_chunk_k1q4r2vq.Mer)(kt, $e), ie = await (0, import_chunk_bzyb60p0.Hyt)(kt, j)?.(), Ue = ie ? !ie.holdsWork && !(X && ie.isCores) && !(Fe ?? (0, import_chunk_k1q4r2vq.Mer)(kt, $e)) : !X && te && !await (0, import_chunk_bzyb60p0.ldr)(y, te), ot = false, Lt = Ue ? await (0, import_chunk_bzyb60p0.Dyt)(kt, { origin: j, isDiscard: false, reason: "the workflow agent ended", storageV5: D.storageV5, remove() {
              return ot = true, (0, import_chunk_bzyb60p0.cQ)(y, ye, oe, X ?? false, "workflow_tool");
            } }) : void 0;
            if (oe && !ot && !Lt?.isReleased) await (0, import_chunk_bzyb60p0.rCe)(y, oe);
            let uo = (0, import_chunk_9e5mdyfk.Wnn)(ao?.copy);
            if (uo && !Lt?.isReleased) r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: `[${H}] ${(0, import_chunk_9e5mdyfk.jnn)(uo)}` } });
          } catch {
          }
        }
        if (xt.length > 0) try {
          let y = D.abortController?.signal, ye = !Pr ? bo ?? "error" : bo === "retries_exhausted" || bo === "stalled_after_throttle" ? bo : y?.aborted ? (0, import_chunk_cbnm4p23.Ai)(y.reason) === "background" ? "backgrounded" : "aborted" : bo === "completed" ? "failed_after_rerun" : "error", te = (0, import_chunk_f9x2f6cx.Y)() ? void 0 : (0, import_chunk_bzyb60p0.hZt)();
          (0, import_chunk_y53wbr8a.a)("tengu_workflow_agent_stall_retries", { workflow_run_id: g === void 0 ? void 0 : Uo(g), agent_type: (0, import_chunk_78g0060s.Xge)(We), restarts: Mr, stalled_attempts: (0, import_chunk_4smdap7r.U)(xt, (oe) => oe === "stalled"), reply_lost_attempts: (0, import_chunk_4smdap7r.U)(xt, (oe) => oe === "reply lost"), user_retry_attempts: (0, import_chunk_4smdap7r.U)(xt, (oe) => oe === "user-retry"), outcome: (0, import_chunk_78g0060s.f)(ye), max_lost_context_tokens: Wo.maxContextTokens, lost_tool_calls: Wo.toolCalls, lost_duration_ms: Wo.durationMs, stall_window_ms: ce, api_provider: (0, import_chunk_78g0060s.fe)(te?.provider), base_url: (0, import_chunk_78g0060s.fe)(te?.base_url), base_url_gateway: (0, import_chunk_78g0060s.fe)(te?.base_url_gateway), https_proxy: te?.https_proxy });
        } catch (y) {
          (0, import_chunk_w578pjby.t)(`tengu_workflow_agent_stall_retries was not sent: ${(0, import_chunk_jv7av99m.d)(y)}`, { level: "warn" });
        }
      }
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }
  function Ks(v) {
    if (v === "bubble") return;
    if (v === "bypassPermissions") return "auto";
    return v;
  }
  async function zs(v, F, H, Re, be, ce, L, et) {
    var _stack = [];
    try {
      let ne = D.abortController?.signal;
      if (ne?.aborted) throw Error("Workflow aborted");
      Xt();
      let Ae = (0, import_chunk_4rrhthp1.Her)();
      if (await Bo({ idx: v, promptStr: F, label: H, ownPhaseTitle: Re, ownPhaseIndex: be, opts: ce, queuedAt: L, provenanceOn: Ae })) return null;
      let Xe = await kr({ idx: v, promptStr: F, label: H, agent: hn, model: ce.model, permissionMode: (0, import_chunk_bz1f2qnq.Z)(D).mode });
      const Ye = __using(_stack, Xe.starting);
      let { prompt: Ie, model: Ce } = Xe;
      if (Ie !== F && await Bo({ idx: v, promptStr: Ie, label: H, ownPhaseTitle: Re, ownPhaseIndex: be, opts: ce, queuedAt: L, provenanceOn: Ae })) return null;
      let it = (0, import_chunk_mzmcvr6c.qS)(), Tt = Date.now(), me = no(Ie), Ve, Ke = (tt, xe) => r({ type: "progress", toolUseID: `workflow_agent_${v}_${it}`, data: { type: "workflow_agent", index: v, label: H, phaseIndex: be, phaseTitle: Re, agentId: it, isolation: "remote", remoteSessionId: Ve, state: tt, startedAt: Tt, queuedAt: L, promptPreview: me, lastProgressAt: Date.now(), ...xe } }), lt = new AbortController(), We = () => lt.abort(new DOMException("workflow-abort", "AbortError"));
      if (ne?.addEventListener("abort", We), ne?.aborted) lt.abort(new DOMException("workflow-abort", "AbortError"));
      Ke("start"), et(it);
      let pt;
      try {
        k?.(it, lt);
        let tt = (0, import_chunk_bz1f2qnq.Z)(D), { proactivityLevel: xe } = D.getAppState(), _o = (0, import_chunk_bzyb60p0.xye)(tt.mode, xe, (0, import_chunk_bzyb60p0.E6)(tt)), io = Ce || (0, import_chunk_abbz0fqx.pDe)() !== void 0 || (0, import_chunk_bzyb60p0.BTe)() !== "inherit" ? (0, import_chunk_bzyb60p0.aJo)(void 0, D.loopModel, Ce, jo(H), { inWorkflowRun: g !== void 0, inheritedModel: () => (0, import_chunk_bz1f2qnq.nws)(D) }) : void 0, V = Ae ? (0, import_chunk_4rrhthp1.Ler)(e.messages, e.agentId) : null, Ee = V?.kind === "relay" ? (0, import_chunk_4rrhthp1.n7s)(V) : null;
        Te(Ie), Te(Ee);
        let ze = (!Ae ? Ie : V?.kind === "automated" ? (0, import_chunk_4rrhthp1.e7s)(Ie) : (Ee !== null ? Ee + `

` : "") + (0, import_chunk_4rrhthp1.wTn)(Ie)) + ho(Ie), Le = await (0, import_chunk_bzyb60p0._q)({ initialMessage: ze, source: "workflow_remote_agent", tags: [import_chunk_865at33z.g6t], description: H, branchName: await Oo(), ...(0, import_chunk_kxv2z9ac.Dqr)(Ks(_o), xe), model: io, signal: lt.signal, onBundleFail: (Ze) => {
          pt = Ze;
        }, onCreateFail: (Ze) => {
          pt = Ze;
        }, storageV5: D.storageV5, credentials: D.credentials });
        if (!Le) throw Error(pt ?? "Failed to create cloud session");
        Ve = Le.id, Ye.started({ agentId: it, model: io ?? (0, import_chunk_865at33z.dt)() }), Ke("progress");
        let { text: ct, structuredOutput: It, resultSubtype: mt, usage: Ut, modelUsage: Vo, toolCalls: Jo } = await (0, import_chunk_bzyb60p0.tui)(Ve, lt.signal, D.credentials), Qt = (0, import_chunk_yq00hd9s.k0)(ct).sanitized;
        Te(ct);
        for (let [Ze, ht] of Object.entries(Vo ?? {})) (0, import_chunk_bzyb60p0.vLt)(ht.costUSD, { ...import_chunk_hym6yzrf.Eg, input_tokens: ht.inputTokens, output_tokens: ht.outputTokens, output_tokens_details: { thinking_tokens: ht.thinkingTokens ?? 0 }, cache_read_input_tokens: ht.cacheReadInputTokens, cache_creation_input_tokens: ht.cacheCreationInputTokens, cache_creation: { ephemeral_5m_input_tokens: ht.cacheCreationEphemeral5mInputTokens ?? 0, ephemeral_1h_input_tokens: ht.cacheCreationEphemeral1hInputTokens ?? 0 }, server_tool_use: { web_search_requests: ht.webSearchRequests, web_fetch_requests: 0 } }, Ze);
        if (ce.schema && It === void 0) {
          let Ze = mt === "error_max_structured_output_retries" ? "the cloud agent called StructuredOutput but no attempt produced a surviving valid output (failed schema validation, or retracted by a model fallback)" : mt && mt !== "success" ? `the cloud agent turn ended with result subtype '${mt}'` : "the cloud agent never called the StructuredOutput tool";
          throw Error(`agent({isolation:'remote', schema}) completed without structured output: ${Ze}.`);
        }
        if (Ke("done", { tokens: Ut ? (0, import_chunk_bzyb60p0.bJo)(Ut) : 0, toolCalls: Jo, durationMs: Date.now() - Tt, resultPreview: no(ce.schema ? It : Qt) }), ce.schema) return Oe(It);
        if ((0, import_chunk_bz1f2qnq.Z)(D).mode === "auto" && Qt) {
          let Ze = await (0, import_chunk_knp99ee7.Z4r)({ child: "workflow_remote", childAgentId: void 0, checkpoint: false, agentMessages: [], inheritedVerifiedHumanTurns: (0, import_chunk_bzyb60p0.ILt)(D), tools: e.options.tools, rootToolSurface: e.rootToolSurface, toolPermissionContext: (0, import_chunk_bz1f2qnq.Z)(D), abortSignal: lt.signal, agentType: (0, import_chunk_78g0060s.S)(import_chunk_jar84hn9.vLn), totalToolUseCount: Jo, finalResultText: Qt, agentId: D.agentId, storageV5: D.storageV5, credentials: D.credentials }).catch((ht) => {
            if (lt.signal.aborted) return null;
            return (0, import_chunk_k449cc64.i)(ht), (0, import_chunk_knp99ee7.Atr)();
          });
          if (Ze) {
            if (Ze.kind !== "unavailable") {
              let ht = `[${H}] ${Ze.warning}`;
              q(ht, { log: true });
            }
            return `${Ze.warning}

${Qt}`;
          }
        }
        return Qt;
      } catch (tt) {
        if (Ve) (0, import_chunk_865at33z.XU)(Ve).catch(() => {
        });
        if ((0, import_chunk_cbnm4p23.Ai)(lt.signal.reason) === "user-skip") return Ke("error", { error: "skipped by user", skipped: true, durationMs: Date.now() - Tt }), null;
        throw Ke("error", { error: tt instanceof Error ? tt.message : String(tt), durationMs: Date.now() - Tt }), tt;
      } finally {
        ne?.removeEventListener("abort", We), k?.(it, null);
      }
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }
  let Gs = to(async (v) => {
    if (D.abortController?.signal.aborted) return new Promise(() => {
    });
    let F = rt("parallel");
    if (await (0, import_chunk_5appeerh.K)(0), !Array.isArray(v)) throw TypeError("parallel() expects an array of functions");
    let H = (0, import_chunk_ejeefcyk.$Ts)(he(v));
    if (H.length === 0) return Oe([]);
    ko(), Xt();
    for (let L of H) if (typeof L !== "function") throw TypeError("parallel() expects an array of functions, not promises. Wrap each call: () => agent(...)");
    let Re = await Promise.allSettled(H.map((L, et) => {
      try {
        return F.inSlot(et, () => ge(_e(L)));
      } catch (ne) {
        return Promise.reject(ne);
      }
    }));
    F.join();
    let be = 0, ce = Re.map((L, et) => {
      if (L.status === "fulfilled") return L.value.v;
      let { name: ne, msg: Ae } = (0, import_chunk_ejeefcyk.Blt)(L.reason);
      if (ne === "WorkflowBudgetExceededError") return be++, null;
      let Xe = `parallel[${et}] failed: ${Ae}`;
      return q(Xe, { log: true }), null;
    });
    if (be > 0) Bt.push(`parallel: ${be} ${(0, import_chunk_7cfjrnwy.O)(be, "slot")} dropped \u2014 token budget exceeded`);
    return Oe(ce);
  }), Ys = to(async (v, ...F) => {
    if (D.abortController?.signal.aborted) return new Promise(() => {
    });
    let H = rt("pipeline");
    if (await (0, import_chunk_5appeerh.K)(0), !Array.isArray(v)) throw TypeError("pipeline() expects an array as the first argument");
    let Re = (0, import_chunk_ejeefcyk.$Ts)(he(v)), be = (0, import_chunk_ejeefcyk.$Ts)(F);
    if (Re.length === 0) return Oe([]);
    ko(), Xt();
    for (let ne of be) if (typeof ne !== "function") throw TypeError("pipeline() stages must be functions: pipeline(items, item => ..., result => ...)");
    let ce = await Promise.allSettled(Re.map((ne, Ae) => H.inSlot(Ae, async () => {
      let Xe = await ge(ne);
      for (let Ye of be) {
        if (Xe.v === null) break;
        Xe = await ge(_e(Ye, Xe.v, ne, Ae));
      }
      return Xe;
    })));
    H.join();
    let L = 0, et = ce.map((ne, Ae) => {
      if (ne.status === "fulfilled") return ne.value.v;
      let { name: Xe, msg: Ye } = (0, import_chunk_ejeefcyk.Blt)(ne.reason);
      if (Xe === "WorkflowBudgetExceededError") return L++, null;
      let Ie = `pipeline[${Ae}] failed: ${Ye}`;
      return q(Ie, { log: true }), null;
    });
    if (L > 0) Bt.push(`pipeline: ${L} ${(0, import_chunk_7cfjrnwy.O)(L, "slot")} dropped \u2014 token budget exceeded`);
    return Oe(et);
  }), qs = to((v) => {
    r({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: (0, import_chunk_ejeefcyk.OTt)(v) } });
  });
  return { agent: Vs, parallel: Gs, pipeline: Ys, log: qs, phase: js, reservePhase: Us, recordFailure: (v) => q(v, { log: false }), getAgentCount: () => we, getFailures: () => Bt, getForeignArtifactContent: () => st.has(import_chunk_k449cc64.lu), getRemoteControlDeviceReport: () => st.has(import_chunk_trwykz8a.jb), getPluginSteered: () => ro, getJournalReplay: Ft, getToolsUsed: () => (0, import_chunk_4smdap7r.M)([...[...go.keys()].flatMap(Yt), ...Co]), takeUsageLimitDenial: () => {
    let v = wo;
    return wo = void 0, v;
  }, takeRefusedAgentNote: () => {
    let v = qt;
    return qt = void 0, v;
  }, bindVMAwait: (v) => {
    ge = v.settle, _e = v.call, Oe = v.clone, Qe = v.sanitize, he = v.snapshot;
  }, sanitizeVMValue: (v) => Qe(v) };
}
function vs(e) {
  return (o) => {
    e(o.type === "progress" ? { ...o, data: Gi(o.data) } : o);
  };
}
function zi(e) {
  e.abort(new DOMException("stalled", "AbortError"));
}
function ks(e, o) {
  return { ...e && { label: (0, import_chunk_865at33z.ng)(e) }, ...o && { phase: (0, import_chunk_865at33z.ng)(o) } };
}
function Gi(e) {
  let o;
  for (let r of Object.keys(e)) {
    let g = Reflect.get(e, r);
    if (typeof g !== "string") continue;
    let k = (0, import_chunk_865at33z.ng)(g);
    if (k !== g) o ??= { ...e }, Reflect.set(o, r, k);
  }
  return o ?? e;
}
function ys(e) {
  switch (e.kind) {
    case "refused":
      return { warning: e.switchedOff ? (0, import_chunk_bzyb60p0.$Mn)("report") : import_chunk_bzyb60p0.Yes, kind: "refused" };
    case "unavailable":
      return { warning: (0, import_chunk_bzyb60p0.FMn)(e.model, e.httpStatus, e.errorKind), kind: "unavailable" };
  }
}
function _s(e, o) {
  return (0, import_chunk_bzyb60p0.ic)(e) ? { ...e, getSystemPrompt: (r) => e.getSystemPrompt(r) + o } : { ...e, getSystemPrompt: (r) => e.getSystemPrompt(r) + o };
}
function Yi(e) {
  try {
    return { input: (0, import_chunk_w578pjby.Ka)(e) };
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`workflow agent: a ${import_chunk_2b1wcpvk.ga} call's input could not be copied (${(0, import_chunk_jv7av99m.d)(o)}); no verdict clears the result`, { level: "warn" });
    return;
  }
}
async function bs({ calls: e, deliveredId: o, delivered: r, otherToolCalls: g, context: k }) {
  if (o === void 0) return;
  let h = e.get(o), R = h === void 0 ? void 0 : await (0, import_chunk_3ccq0r9v.Ier)(h.response, o), C = h?.written !== void 0 && (0, import_chunk_f9x2f6cx.cg)(h.written.input, r);
  if (R?.flagged) return (0, import_chunk_cqa9hrgx.u)("workflow_structured_output_verdict", { flagged: true }), (0, import_chunk_bzyb60p0.Kfi)(R.reason, C || h?.written === void 0 ? "flagged" : "flagged_then_changed");
  let E = R === void 0;
  for (let [le, G] of e) {
    if (le === o) continue;
    let re = await (0, import_chunk_3ccq0r9v.Ier)(G.response, le);
    if (re?.flagged) return (0, import_chunk_cqa9hrgx.u)("workflow_structured_output_verdict", { flagged: true }), (0, import_chunk_bzyb60p0.Kfi)(re.reason, "another");
    E ||= re === void 0;
  }
  if (E) {
    (0, import_chunk_cqa9hrgx.l)("workflow_structured_output_verdict", "no_verdict");
    return;
  }
  if (h?.written === void 0) {
    (0, import_chunk_cqa9hrgx.l)("workflow_structured_output_verdict", "no_copy");
    return;
  }
  if (!C) {
    (0, import_chunk_cqa9hrgx.l)("workflow_structured_output_verdict", "changed_by_hook");
    return;
  }
  if (g.responses.has(h.response.message.id) || h.row < g.lastRow) {
    (0, import_chunk_cqa9hrgx.l)("workflow_structured_output_verdict", "not_last_step");
    return;
  }
  if (!(0, import_chunk_3ccq0r9v.QYs)((0, import_chunk_bz1f2qnq.Z)(k).mode)) {
    (0, import_chunk_cqa9hrgx.l)("workflow_structured_output_verdict", "judge_changed");
    return;
  }
  return (0, import_chunk_cqa9hrgx.u)("workflow_structured_output_verdict", { flagged: false }), null;
}
var qi = "tengu_zesty_feather";
function Os() {
  return (0, import_chunk_sghy0qej.Pe)(qi, { safe: true });
}
function Ms(e, o, r, g, k, h, R, C, E, le, G, re, I, de, we) {
  let ge = vs(r), _e = Es(e, o, ge, g, k, R, C, E, le, G, re, I, de, we), Oe = { sanitize: (Te) => Te === null || typeof Te !== "object" && typeof Te !== "function" ? Te : {}, toStr: (Te) => (0, import_chunk_ejeefcyk.$Ar)(Te) }, Qe = er((Te) => ge({ type: "progress", toolUseID: "workflow_log", data: { type: "workflow_log", message: Te } }), Oe), he = Object.freeze({ __proto__: null, total: C?.total ?? null, spent: (0, import_chunk_ejeefcyk.bGe)(() => C?.getTurnSpent() ?? 0), remaining: (0, import_chunk_ejeefcyk.bGe)(() => C?.total == null ? 1 / 0 : Math.max(0, C.total - C.getTurnSpent())) }), Nt = e.abortController?.signal, qe = ns(Nt), He = (0, import_chunk_ejeefcyk.BZ)({ __proto__: null, log: (0, import_chunk_ejeefcyk.bGe)(_e.log), phase: (0, import_chunk_ejeefcyk.bGe)(_e.phase), console: Qe, budget: he, setTimeout: qe.setTimeout, clearTimeout: qe.clearTimeout }, { codeGeneration: { strings: false, wasm: false } });
  dn(He), (0, import_chunk_ejeefcyk.DTo)(He), (0, import_chunk_ejeefcyk.Txe)(He, import_chunk_ejeefcyk.f7e), cn(He);
  let Mt = Os();
  if (Mt) Qn(He, (0, import_chunk_ejeefcyk.NTs)(He));
  let { vmToStr: Pt, vmStringify: Ft, vmOwnString: nt } = (0, import_chunk_ejeefcyk.UTs)(He);
  qe.bindVMInvoke(dr.runInContext("(fn => { fn() })", He));
  let rt = (0, import_chunk_ejeefcyk.I2n)(He), ft = (0, import_chunk_ejeefcyk.NAr)(He), Wt = (0, import_chunk_ejeefcyk.LTo)(He), St = { hooks: _e, budget: he, abortSignal: Nt, timers: qe, resolveWorkflow: (Te, Ot) => (0, import_chunk_t92frmtn.jer)(Te, Ot, e.storageV5), getAllWorkflows: (Te) => (0, import_chunk_t92frmtn.zht)(Te, e.storageV5), intakeClone: rt, sealSyncHooksInVM: Mt, loadScriptPath: (Te) => wqr(Te, es(e)) }, Ht = ss(St), Bt = pn(He), ro = (Te, Ot) => _e.agent(Te, Ot);
  for (let [Te, Ot] of [["agent", ro], ["parallel", _e.parallel], ["pipeline", _e.pipeline], ["workflow", Ht]]) Object.defineProperty(He, Te, { value: Bt((0, import_chunk_ejeefcyk.FTs)(Ot)), writable: true, enumerable: true, configurable: true });
  {
    let Te = h === void 0 ? void 0 : JSON.stringify(h);
    Object.defineProperty(He, "args", { value: Te === void 0 ? void 0 : dr.runInContext(`JSON.parse(${JSON.stringify(Te)})`, He), writable: true, enumerable: true, configurable: true });
  }
  let st = (0, import_chunk_ejeefcyk.M2n)(He, import_chunk_ejeefcyk.f7e);
  return Oe.sanitize = st.sanitize, Oe.toStr = Pt, _e.bindVMAwait({ settle: ft, call: Wt, clone: rt, sanitize: st.sanitize, snapshot: st.snapshot }), { vmContext: He, hooks: _e, vmToStr: Pt, vmOwnString: nt, vmStringify: Ft, vmAsyncWrap: Bt, childWorkflow: St };
}
var Xi = 1e3;
async function Ps(e, o, r, g = {}) {
  let k = Date.now(), h = [], R = (I) => {
    if (I.type === "progress" && I.data.type === "workflow_log" && h.length < Xi) h.push(I.data.message);
    g.onProgress?.(I);
  }, C = g.journal ? await g.journal.load() : void 0, E = Ms(o, r, R, g.workflowRunId, g.onAgentController, g.args, g.seedPhaseTitles, g.tokenBudget, g.journal, C, g.workflowName, g.invokingRequestId, g.parentPromptId, g.onRateLimitWait, g.withholdScript), le = (0, import_chunk_ejeefcyk.PTt)(E.vmContext), G = o.abortController?.signal, re;
  try {
    let I = e.runInContext(E.vmContext, (0, import_chunk_ejeefcyk.O2n)(fn, g.syncTimeoutMs)), de = (0, import_chunk_ejeefcyk.NAr)(E.vmContext)(I);
    de.catch(() => {
    });
    let ge = (G ? await Promise.race([de, new Promise((he, Nt) => {
      let qe = () => Nt(Error("Workflow aborted"));
      if (G.aborted) qe();
      else G.addEventListener("abort", qe), re = () => G.removeEventListener("abort", qe);
    })]) : await de).v;
    if (typeof ge === "function") throw Error("workflow result cannot be a function");
    let _e = ge !== null && typeof ge === "object" ? E.hooks.sanitizeVMValue(ge) : ge, Oe;
    try {
      Oe = (0, import_chunk_w578pjby.Ka)(_e);
    } catch (he) {
      if (_e === null || typeof _e !== "object") throw he;
      Oe = JSON.parse((0, import_chunk_w578pjby._)(_e, (Nt, qe) => typeof qe === "function" ? void 0 : qe) ?? "null");
    }
    (0, import_chunk_w578pjby._)(Oe);
    let Qe = E.hooks.getToolsUsed();
    return { result: Oe, agentCount: E.hooks.getAgentCount(), logs: h, failures: E.hooks.getFailures(), ...E.hooks.getForeignArtifactContent() && { foreignArtifactContent: true }, ...E.hooks.getPluginSteered() && { pluginSteered: true }, ...E.hooks.getRemoteControlDeviceReport() && { remoteControlDeviceReport: true }, journalReplay: E.hooks.getJournalReplay(), ...Qe.length > 0 && { toolsUsed: Qe }, usageLimitDenial: E.hooks.takeUsageLimitDenial(), refusedAgentNote: E.hooks.takeRefusedAgentNote(), durationMs: Date.now() - k };
  } catch (I) {
    let { name: de, message: we, stack: ge } = le(I);
    if (ge) (0, import_chunk_w578pjby.t)(`Workflow script error stack trace:
${ge}`, { level: "error" });
    let _e = E.hooks.getToolsUsed();
    return { result: null, agentCount: E.hooks.getAgentCount(), logs: h, failures: E.hooks.getFailures(), ...E.hooks.getForeignArtifactContent() && { foreignArtifactContent: true }, ...E.hooks.getPluginSteered() && { pluginSteered: true }, ...E.hooks.getRemoteControlDeviceReport() && { remoteControlDeviceReport: true }, journalReplay: E.hooks.getJournalReplay(), ..._e.length > 0 && { toolsUsed: _e }, usageLimitDenial: E.hooks.takeUsageLimitDenial(), refusedAgentNote: E.hooks.takeRefusedAgentNote(), durationMs: Date.now() - k, error: (0, import_chunk_865at33z.ePs)({ name: de, message: we, stack: ge }) };
  } finally {
    re?.();
  }
}
var yn = "workflow-journal", xs = "workflow-script", ta = /^[a-z0-9_-]+\.js$/, oa = /^v\d+:[0-9a-f]{64}$/;
function Ls(e, o) {
  return ta.test(e) && e.endsWith(`-${o}.js`);
}
function na(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return;
  if (e.type === "launched") {
    let k = rr(e.hiddenScriptSha256);
    return k === void 0 ? { type: "launched" } : { type: "launched", hiddenScriptSha256: k };
  }
  let { key: o, agentId: r } = e, g = e.type === "failed" || e.type === "result";
  if (typeof o !== "string" || !oa.test(o) || typeof r !== "string" || !((0, import_chunk_mzmcvr6c.DD)(r) || g && r === "")) return;
  switch (e.type) {
    case "started": {
      let { remoteSessionId: k } = e;
      if (k === void 0) return { type: "started", key: o, agentId: r };
      return typeof k === "string" && (0, import_chunk_mzmcvr6c.DD)(k) ? { type: "started", key: o, agentId: r, remoteSessionId: k } : void 0;
    }
    case "result":
      return { type: "result", key: o, agentId: r, result: e.result, ...e.foreignArtifactContent === true && { foreignArtifactContent: true }, ...typeof e.remoteControlDeviceReport === "boolean" && { remoteControlDeviceReport: e.remoteControlDeviceReport }, ...Array.isArray(e.toolsUsed) && { toolsUsed: e.toolsUsed.filter((k) => typeof k === "string") }, ...typeof e.sessionId === "string" && { sessionId: e.sessionId } };
    case "failed":
      return { type: "failed", key: o, agentId: r };
    default:
      return;
  }
}
function _n(e) {
  (0, import_chunk_w578pjby.t)(`Failed to mirror workflow run to CCR: ${e}`, { level: "warn" });
}
function $s(e, o) {
  let r = new mo(e, o), g = (0, import_chunk_f9x2f6cx.W)();
  return { load: () => r.load(), async append(k) {
    await r.append(k), (0, import_chunk_bzyb60p0.Dir)()?.mirror(yn, { entry: k }, { sessionId: g, agentId: e }).catch(_n);
  } };
}
var ra = 2;
async function sa(e, o) {
  for (let r = 0; r < ra; r++) {
    if ((await e.load()).hiddenScriptSha256 !== void 0) return;
    await e.append(o);
  }
  if ((await e.load()).hiddenScriptSha256 === void 0) throw Error("the journal holds no mark after it was written");
}
async function Ds(e) {
  let { runId: o } = e, r = { type: "launched", hiddenScriptSha256: e.hiddenScriptSha256 }, g = new mo(o, e.storageV5), k = { sessionId: (0, import_chunk_f9x2f6cx.W)(), agentId: o };
  await (e.isResume ? sa(g, r) : g.append(r));
  let h = (0, import_chunk_bzyb60p0.Dir)()?.mirror(yn, { entry: r }, k).catch((R) => (_n(R), false)) ?? Promise.resolve(false);
  return { load: () => g.load(), async append(R) {
    await g.append(R), h.then((C) => {
      if (C) (0, import_chunk_bzyb60p0.Dir)()?.mirror(yn, { entry: R }, k).catch(_n);
    });
  } };
}
class bTn {
  probes = /* @__PURE__ */ new Map();
  mirroredScripts = /* @__PURE__ */ new Map();
}
function Ns(e, o) {
  let r = (0, import_path3.resolve)((0, import_chunk_18rsj2ts.pe)(), e);
  return (0, import_chunk_2yx6c1y2.bv)((0, import_path3.dirname)(r), (0, import_chunk_p1ewvgeh.bdn)()) && Ls((0, import_path3.basename)(r), o);
}
function RIa(e, o, r, g) {
  if (!Ns(o, e)) return;
  let k = (0, import_path3.basename)(o), h = (0, import_crypto2.createHash)("sha256").update(k).update("\0").update(r).digest("hex");
  if (g.mirroredScripts.get(e) === h) return;
  let R = (0, import_chunk_bzyb60p0.Dir)();
  if (R === void 0) return;
  g.mirroredScripts.set(e, h), R.mirror(xs, { fileName: k, script: r }, { sessionId: (0, import_chunk_f9x2f6cx.W)(), agentId: e }).catch((C) => {
    g.mirroredScripts.delete(e), _n(C);
  });
}
function kqr(e, o, r, g, k) {
  let h = k.probes.get(e);
  if (h) return h;
  let R = ia(e, o, r, g).then((C) => {
    if (C.kind !== "restore") k.probes.delete(e);
    return C;
  });
  return k.probes.set(e, R), R;
}
async function ia(e, o, r, g) {
  let k = (h) => ({ kind: "refused", message: h });
  try {
    let h = await new mo(e, r).restoreState() === "complete", R = o !== void 0 && Ns(o, e) && !await (0, import_chunk_2yx6c1y2.ep)((0, import_path3.resolve)((0, import_chunk_18rsj2ts.pe)(), o));
    if (h && !R) return { kind: "ready" };
    let C = await (0, import_chunk_bzyb60p0.Dir)()?.readAgent(e, g);
    if (h && !C) return { kind: "ready" };
    if (C === void 0) return k(`The journal for workflow run ${e} is not on disk, and this session cannot fetch a remote copy, so there is nothing to resume. Fallback: Read the agent-<id>.jsonl files in ${(0, import_chunk_78edkytf.UJ)(e)} and hand-author a continuation script.`);
    if (C === null) return k(`Could not fetch the journal for workflow run ${e} from the session store. Try the resume again.`);
    let E = [], le = false, G;
    for (let re of C) if (re.type === yn) {
      let I = na(re.entry);
      if (I !== void 0) E.push(I);
      else le = true;
    } else if (re.type === xs && typeof re.fileName === "string" && Ls(re.fileName, e) && typeof re.script === "string" && re.script.length <= import_chunk_p1ewvgeh.qO && (0, import_chunk_xfj2cwfv.Kx)(re.script)) G = { fileName: re.fileName, script: re.script };
    if (h) return G ? { kind: "restore", entries: void 0, script: G } : { kind: "ready" };
    if (E.length === 0) return k(`No journal found for workflow run ${e}, so there is nothing to resume. To run the workflow from the start, call Workflow again without resumeFromRunId.`);
    return { kind: "restore", entries: E, ...le && { hasUnreadEntry: true }, script: G };
  } catch (h) {
    return k(`Could not read the journal for workflow run ${e}: ${(0, import_chunk_jv7av99m.d)(h)}`);
  }
}
async function xIa(e, o, r, g, k) {
  let h = await kqr(e, o, r, g, k);
  if (h.kind === "refused") return { refusal: h.message };
  if (h.kind === "restore" && h.entries !== void 0) return { ...gn(h.entries), ...h.hasUnreadEntry && { hasUnreadLine: true } };
  try {
    return await new mo(e, r).load();
  } catch (R) {
    return { refusal: `Could not read the journal for workflow run ${e}: ${(0, import_chunk_jv7av99m.d)(R)}` };
  }
}
function YYs(e, o) {
  if (e.kind !== "restore" || e.script === void 0) return;
  let r = (0, import_path3.join)((0, import_chunk_p1ewvgeh.bdn)(), e.script.fileName);
  return (0, import_chunk_2yx6c1y2.bv)((0, import_path3.resolve)((0, import_chunk_18rsj2ts.pe)(), o), r) ? e.script.script : void 0;
}
async function PIa(e, o, r, g, k) {
  let h = await kqr(e, o, r, g, k);
  if (h.kind === "refused") return h.message;
  if (h.kind === "ready") return null;
  return h.written ??= aa(e, r, h).finally(() => k.probes.delete(e)), h.written;
}
async function aa(e, o, { entries: r, script: g }) {
  if (g) {
    let h = (0, import_chunk_p1ewvgeh.bdn)();
    try {
      await (0, import_promises3.mkdir)(h, { recursive: true, mode: 448 }), await (0, import_chunk_q7qjcthc.l2)((0, import_path3.join)(h, g.fileName), g.script, 384);
    } catch (R) {
      if ((0, import_chunk_jv7av99m.w)(R) !== "EEXIST") (0, import_chunk_w578pjby.t)(`Failed to restore a workflow script: ${R}`, { level: "warn" });
    }
  }
  if (r === void 0) return null;
  let k = new mo(e, o);
  try {
    if (await k.restoreState() === "complete") return null;
    await k.writeRestored(r);
  } catch (h) {
    return `Could not restore the journal for workflow run ${e}: ${(0, import_chunk_jv7av99m.d)(h)}`;
  }
  return null;
}
var la = 16, da = 250, ua = 6e4;
function Fs(e, o) {
  return e === void 0 ? { summary: o } : { summary: (0, import_chunk_gp23aqt9.V8a)(e), usageLimitWait: { resets_at: e.resetsAt } };
}
var fa = 1e4, pa = 3e4, ma = 36e5, wa = "6.7665.0";
function ha(e) {
  let o = [], r, g = 0, k = (h) => {
    if (r = void 0, o.length === 0) return;
    if (!h && !(0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_f9x2f6cx.Od)()) {
      let C = g + da - Date.now();
      if (C > 0) {
        r = setTimeout(k, C);
        return;
      }
      g = Date.now();
    }
    let R = o;
    if (o = [], e.onBatch(R), !(0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_f9x2f6cx.Od)()) return;
    e.onSdkEmit(R);
  };
  return { onProgress: (h) => {
    if (o.push(h), !r) r = setTimeout(k, la);
  }, flushNow: () => {
    if (r) clearTimeout(r);
    k(true);
  }, cancel: () => {
    if (r) clearTimeout(r), r = void 0;
    o = [];
  } };
}
function ka(e, o) {
  if (o) return e;
  return (0, import_chunk_865at33z.vh)() ? e : "custom";
}
function xer(e, o) {
  return e === "built-in" && o;
}
var ya = 200;
function Eqr(e, o, r) {
  if (xer(o, r) && e) return (0, import_chunk_78g0060s.Fr)(e);
  return (0, import_chunk_78g0060s.S)("custom");
}
function vqr(e, o, r) {
  if (xer(o, r)) return (0, import_chunk_78g0060s.Fr)((e ?? "").slice(0, ya));
  return (0, import_chunk_78g0060s.S)("");
}
function _a(e, o, r) {
  if (xer(o, r)) return (0, import_chunk_78g0060s.Fr)(e);
  return (0, import_chunk_78g0060s.S)("custom");
}
function cr(e, o) {
  return e && o !== import_chunk_6qga2yp9.f7s ? import_chunk_6qga2yp9.u7s : o;
}
function Tqr(e) {
  let { taskId: o, workflowRunId: r, script: g, scriptPath: k, args: h, meta: R, vmScript: C, toolUseContext: E, canUseTool: le, toolUseId: G, transcriptDir: re, telemetry: I, isResume: de, invokingRequestId: we, parentPromptId: ge } = e, { description: _e, name: Oe } = R;
  if (de) {
    (0, import_chunk_cqa9hrgx.u)("task_local_workflow_resume");
    for (let [nt, rt] of Object.entries(E.taskRegistry.all())) if (rt.type === "local_workflow" && rt.workflowRunId === r && rt.status !== "running" && !((0, import_chunk_ed372ykp.$o)(rt.status) && !(0, import_chunk_4yjj7pjs.kH)(nt))) E.taskRegistry.remove(nt);
    (0, import_chunk_p75nz1y9.d7s)(r);
  }
  let Qe = (0, import_chunk_bzyb60p0._ne)(E.agentId, E.taskRegistry), he = (0, import_chunk_p75nz1y9.o7s)({ taskId: o, script: g, scriptPath: k, summary: _e, workflowName: Oe, title: R.title, phases: R.phases, defaultModel: (0, import_chunk_a05a70r9.TTn)(E), workflowRunId: r, args: h, ownerAgentId: Qe, spawnerAgentId: E.agentId, taskRegistry: E.taskRegistry, toolUseId: G, withholdScriptFromSdkEvents: e.withholdScriptFromSdkEvents });
  if (e.withholdScriptFromSdkEvents) E.toolState.get(import_chunk_kzz1w7z4.kTn).scriptSha256ById.set(r, (0, import_chunk_ccm69jjy.Je)(g));
  let Nt = (0, import_chunk_4yjj7pjs.Ytn)(o, he.abortController, { settleRequiresEmptyAgentAssociations: true });
  if (Qe && !(0, import_chunk_f9x2f6cx.Se)()) (0, import_chunk_4yjj7pjs.EH)(Qe, `workflow:${o}`, E.taskRegistry);
  let qe = { ...E, abortController: he.abortController ?? E.abortController }, He = { total: null, getTurnSpent: import_chunk_f9x2f6cx.rw }, Mt, Pt, Ft;
  return (0, import_chunk_865at33z.Qme)(async () => {
    let nt = 0, rt, ft = 0, Wt = { onBatch: (q) => {
      if (q.some(import_chunk_6qga2yp9.Wer)) rt = q, ft = Date.now();
      (0, import_chunk_p75nz1y9.i7s)(o, q, E.taskRegistry);
    }, onSdkEmit: (q, Be) => {
      let Ge = q.filter(import_chunk_6qga2yp9.Wer);
      if (Ge.length === 0) return;
      let Jt = qe.getAppState()?.tasks?.[o];
      if (Jt?.type !== "local_workflow" || Jt.status !== "running") return;
      let Oo = Ge.findLast((yo) => yo.type === "workflow_agent"), Kt = Oo && e.withholdScriptFromSdkEvents ? (0, import_chunk_6qga2yp9.p7s)(Oo) : Oo, jo = Ge.every((yo) => yo.type === "workflow_agent" && yo.state === "progress"), ko = Date.now(), Xt = !jo || ko - nt >= fa;
      if (Xt && !Be) nt = ko, Ft?.refresh();
      (0, import_chunk_bzyb60p0.ofe)({ taskId: o, toolUseId: G, description: Kt ? Kt.phaseTitle ? `${Kt.phaseTitle}: ${Kt.label}` : Kt.label : he.description, startTime: he.startTime, totalTokens: Jt.totalTokens, toolUses: Jt.totalToolCalls, lastToolName: Kt?.label, ...Fs(Jt.rateLimitWait, _e), workflowProgress: Xt ? (0, import_chunk_8mxqzyge.y7t)(Jt.workflowProgress, e.withholdScriptFromSdkEvents) : void 0, resent: Be });
    } }, St = ha(Wt), Ht = (0, import_chunk_3t7ve0wy.syn)(), Bt = (0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_3t7ve0wy.Ol)() && !((0, import_chunk_tvttgr51.yFe)(Ht) && (0, import_chunk_tvttgr51.Vb)(Ht, wa));
    Ft = setInterval(() => {
      if (rt !== void 0 && Pt === void 0 && ((0, import_chunk_6e68m1dj.r$)() || (0, import_chunk_f9x2f6cx.Od)() && (!Bt || Date.now() - ft < ma))) Wt.onSdkEmit(rt, true);
    }, pa), Ft.unref(), E.taskRegistry.update(o, (q) => q.status === "running" ? { ...q, flushHeldProgress: St.flushNow } : q);
    let ro = (q) => {
      if (q.type !== "progress") return;
      St.onProgress(q.data);
    }, st = (q, Be) => {
      if (Be) he.agentControllers?.set(q, Be), (0, import_chunk_4yjj7pjs.nso)(o, q, Be);
      else he.agentControllers?.delete(q), (0, import_chunk_4yjj7pjs.yYa)(o, q);
    }, Te = () => {
      if (!(0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_f9x2f6cx.Od)()) return;
      let q = qe.getAppState()?.tasks?.[o];
      if (q?.type !== "local_workflow" || q.status !== "running") return;
      nt = Date.now(), Ft?.refresh(), (0, import_chunk_bzyb60p0.ofe)({ taskId: o, toolUseId: G, description: he.description, startTime: he.startTime, totalTokens: q.totalTokens, toolUses: q.totalToolCalls, ...Fs(q.rateLimitWait, _e), workflowProgress: (0, import_chunk_8mxqzyge.y7t)(q.workflowProgress, e.withholdScriptFromSdkEvents) });
    }, Ot, go = (q) => {
      if ((0, import_chunk_p75nz1y9.a7s)(o, q, E.taskRegistry), q?.resetsAt === Ot) return;
      Ot = q?.resetsAt, clearInterval(Pt), Pt = q === void 0 ? void 0 : setInterval(Te, ua), Pt?.unref(), Te();
    }, Co = e.withholdScriptFromSdkEvents ? await Ds({ runId: r, storageV5: E.storageV5, hiddenScriptSha256: (0, import_chunk_ccm69jjy.Je)(g), isResume: de }).catch((q) => {
      throw (0, import_chunk_w578pjby.t)(`workflow journal: a hidden run's mark was not written: ${q}`, { level: "warn" }), new import_chunk_jv7av99m.A(import_chunk_6qga2yp9.f7s, "a hidden workflow run's mark was not written");
    }) : $s(r, E.storageV5);
    if (!de && !e.withholdScriptFromSdkEvents) await Co.append({ type: "launched" }).catch((q) => (0, import_chunk_w578pjby.t)(`workflow journal launched-append failed: ${q}`, { level: "warn" }));
    let Q = await Ps(C, qe, le, { workflowRunId: r, onProgress: ro, onAgentController: st, onRateLimitWait: go, args: h, seedPhaseTitles: R.phases?.map((q) => q.title), tokenBudget: He, journal: Co, workflowName: ka(R.name, I.scriptIsVerbatimBuiltIn), invokingRequestId: we, parentPromptId: ge, withholdScript: e.withholdScriptFromSdkEvents });
    if ((0, import_chunk_cbnm4p23.Ai)(he.abortController?.signal.reason) === "background") {
      Mt = { status: "adopted" }, St.cancel();
      return;
    }
    St.flushNow();
    let Yt = qe.getAppState()?.tasks?.[o], wo = (Yt?.workflowProgress ?? []).filter((q) => q.type !== "workflow_log"), qt = Yt?.totalTokens ?? 0, so = Yt?.totalToolCalls ?? 0, Vt = he.abortController?.signal.aborted ? "killed" : Q.error ? "failed" : "completed";
    Mt = Vt === "killed" ? { status: "killed" } : Q.error ? { status: "failed", error: Q.error, agentCount: Q.agentCount, logs: Q.logs, durationMs: Q.durationMs } : { status: "completed", result: Q.result, agentCount: Q.agentCount, logs: Q.logs, failures: Q.failures, durationMs: Q.durationMs }, (0, import_chunk_y53wbr8a.a)("tengu_workflow_completed", { workflow_run_id: Uo(r), workflow_source: (0, import_chunk_78g0060s.f)(I.source), workflow_name: I.name, workflow_description: I.description, status: (0, import_chunk_78g0060s.f)(Vt), agent_count: Q.agentCount, total_tokens: qt, total_tool_calls: so, duration_ms: Q.durationMs });
    let ho = { agents: Q.agentCount, duration_ms: Q.durationMs };
    switch (Vt) {
      case "completed":
        (0, import_chunk_cqa9hrgx.u)("workflow_run", ho);
        break;
      case "failed":
        (0, import_chunk_cqa9hrgx.m)("workflow_run", "failed", ho);
        break;
      case "killed":
        (0, import_chunk_cqa9hrgx.l)("workflow_run", "killed", ho);
        break;
    }
    if (xer(I.source, I.scriptIsVerbatimBuiltIn)) {
      let q = /* @__PURE__ */ new Map();
      for (let Be of Yt?.workflowProgress ?? []) {
        if (Be.type !== "workflow_agent") continue;
        if (Be.phaseIndex === void 0 || !Be.phaseTitle) continue;
        let Ge = q.get(Be.phaseIndex);
        if (!Ge) Ge = { title: Be.phaseTitle, tokens: 0, toolCalls: 0, durationMs: 0, agentCount: 0, errorCount: 0, skipCount: 0 }, q.set(Be.phaseIndex, Ge);
        if (Ge.tokens += Be.tokens ?? 0, Ge.toolCalls += Be.toolCalls ?? 0, Ge.durationMs += Be.durationMs ?? 0, Ge.agentCount += 1, Be.state === "error") if (Be.error === "skipped by user") Ge.skipCount += 1;
        else Ge.errorCount += 1;
      }
      for (let [Be, Ge] of q) (0, import_chunk_y53wbr8a.a)("tengu_workflow_phase_completed", { workflow_run_id: Uo(r), workflow_source: (0, import_chunk_78g0060s.f)(I.source), workflow_name: I.name, phase_index: Be, phase_title: _a(Ge.title, I.source, I.scriptIsVerbatimBuiltIn), phase_tokens: Ge.tokens, phase_tool_calls: Ge.toolCalls, phase_agent_duration_ms: Ge.durationMs, phase_agent_count: Ge.agentCount, phase_error_count: Ge.errorCount, phase_skip_count: Ge.skipCount });
    }
    if ((0, import_chunk_78edkytf.IIa)(r, { taskId: o, script: g, scriptPath: k, args: h, result: Q.result, agentCount: Q.agentCount, logs: Q.logs, durationMs: Q.durationMs, error: Q.error, summary: _e, workflowName: Oe, title: R.title, status: Vt, startTime: he.startTime, phases: he.phases, defaultModel: he.defaultModel, workflowProgress: wo, totalTokens: qt, totalToolCalls: so }, E.storageV5), he.abortController?.signal.aborted) return;
    let Eo = { total_tokens: qt, tool_uses: so, duration_ms: Q.durationMs };
    if (Q.error) {
      let q = cr(e.withholdScriptFromSdkEvents, Q.error);
      (0, import_chunk_p75nz1y9.fKo)(o, q, Q.agentCount, Q.logs, E.taskRegistry, { summary: `Dynamic workflow "${_e}" failed: ${q}`, output_file: he.outputFile, usage: Eo });
    } else (0, import_chunk_p75nz1y9.l7s)(o, Q.result, Q.agentCount, Q.logs, E.taskRegistry, { summary: `Dynamic workflow "${_e}" completed`, output_file: he.outputFile, usage: Eo });
    if (e.suppressCompletionNotification) E.taskRegistry.update(o, (q) => ({ ...q, notified: true })), (0, import_chunk_4yjj7pjs.NO)(Qe, `workflow:${o}`, E.taskRegistry);
    else (0, import_chunk_p75nz1y9.mKo)({ taskId: o, summary: _e, status: Q.error ? "failed" : "completed", error: Q.error === void 0 ? void 0 : cr(e.withholdScriptFromSdkEvents, Q.error), result: Q.result, failures: e.withholdScriptFromSdkEvents ? Q.failures.map(() => import_chunk_6qga2yp9.u7s) : Q.failures, foreignArtifactContent: Q.foreignArtifactContent, pluginSteered: de || Q.pluginSteered, remoteControlDeviceReport: Q.remoteControlDeviceReport, journalReplay: Q.journalReplay, toolsUsed: Q.toolsUsed, usageLimitDenial: Q.usageLimitDenial, refusedAgentNote: e.withholdScriptFromSdkEvents ? void 0 : Q.refusedAgentNote, agentCount: Q.agentCount, totalTokens: qt, totalToolCalls: so, durationMs: Q.durationMs, taskRegistry: E.taskRegistry, toolUseId: G, transcriptDir: re, scriptPath: k, workflowRunId: r, args: h, workflowProgress: wo });
  }).catch((nt) => {
    (0, import_chunk_k449cc64.i)(nt);
    let rt = nt instanceof Error ? nt.message : String(nt), ft = qe.getAppState()?.tasks?.[o], Wt = ft?.agentCount ?? 0;
    if (ft?.status !== "completed" && Mt?.status !== "killed") Mt = { status: "failed", error: rt, agentCount: Wt, logs: ft?.logs ?? [], durationMs: Date.now() - he.startTime };
    let St = cr(e.withholdScriptFromSdkEvents, rt);
    if ((0, import_chunk_p75nz1y9.fKo)(o, St, Wt, ft?.logs ?? [], E.taskRegistry, { summary: `Dynamic workflow "${_e}" failed: ${St}`, output_file: he.outputFile, usage: { total_tokens: ft?.totalTokens ?? 0, tool_uses: ft?.totalToolCalls ?? 0, duration_ms: Date.now() - he.startTime } }), e.suppressCompletionNotification) E.taskRegistry.update(o, (Ht) => ({ ...Ht, notified: true })), (0, import_chunk_4yjj7pjs.NO)(Qe, `workflow:${o}`, E.taskRegistry);
    else (0, import_chunk_p75nz1y9.mKo)({ taskId: o, summary: _e, status: "failed", error: St, pluginSteered: true, agentCount: Wt, totalTokens: ft?.totalTokens ?? 0, totalToolCalls: ft?.totalToolCalls ?? 0, durationMs: Date.now() - he.startTime, taskRegistry: E.taskRegistry, toolUseId: G, transcriptDir: re, scriptPath: k, workflowRunId: r, args: h, workflowProgress: ft?.workflowProgress });
  }).finally(() => {
    if (clearInterval(Pt), clearInterval(Ft), Nt(), !e.onSettled) return;
    try {
      e.onSettled(Mt ?? { status: "unknown" });
    } catch (nt) {
      (0, import_chunk_k449cc64.i)(nt);
    }
  }), he;
}
