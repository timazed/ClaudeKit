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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
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
var chunk_34mh7jpw_exports = {};
__export(chunk_34mh7jpw_exports, {
  recordStagedOutputAsRead: () => O
});
module.exports = __toCommonJS(chunk_34mh7jpw_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_g6rfsx76 = require("/$bunfs/root/chunk-g6rfsx76.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_promises = require("fs/promises");
var m = 10485760, u = 4;
async function O(r, o) {
  try {
    let t = (0, import_chunk_n2dbhmj2.xt)(o);
    if ((0, import_chunk_g6rfsx76.ODe)(t) || (0, import_chunk_n2dbhmj2.nF)(t)) return "not_recordable";
    return await f.readAndRecord(r, t);
  } catch (t) {
    let n = (0, import_chunk_jv7av99m.w)(t);
    return n === "ENOENT" || n === "EISDIR" || (0, import_chunk_73gwqz1r.ese)(t) || (0, import_chunk_73gwqz1r.vD)(t) ? "not_recordable" : "read_failed";
  }
}
function c() {
  return (0, import_chunk_w71cxznt.Rl)(u, p);
}
var f = (0, import_chunk_t57w17k7.de)({ readAndRecord: c() }, (r) => {
  r.readAndRecord = c();
});
async function p(r, o) {
  var _stack = [];
  try {
    const t = __using(_stack, await (0, import_promises.open)(o, (0, import_chunk_w578pjby.G8)()), true);
    let n = Math.floor((await t.stat()).mtimeMs), e = r.get(o);
    if (e !== void 0 && !(e.contentFromTranscript && e.limit === void 0 && (0, import_chunk_5sjwf92x.AU)(e) && e.timestamp < n)) return "kept_existing";
    let i = await (0, import_chunk_73gwqz1r.oQe)(t, o, m);
    if (i.content.slice(0, 4096).includes("\0")) return "not_recordable";
    let a = (0, import_chunk_5sjwf92x.IR)(i.content);
    if (e !== void 0 && !(0, import_chunk_5sjwf92x.c9)(e, a.trim())) return "kept_existing";
    let d = r.get(o);
    if (d !== void 0 && d !== e) return "kept_existing";
    return r.set(o, { content: a, timestamp: n, offset: void 0, limit: void 0, contentNotInModelContext: true }), "recorded";
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
