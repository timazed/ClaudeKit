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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
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
var chunk_5jveksvj_exports = {};
__export(chunk_5jveksvj_exports, {
  fetchAttachmentHere: () => G
});
module.exports = __toCommonJS(chunk_5jveksvj_exports);
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
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_0k16ny5f = require("/$bunfs/root/chunk-0k16ny5f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var R = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ file_uuid: (0, import_chunk_adx6804h.n)().min(1).max(256), name: (0, import_chunk_adx6804h.n)().min(1), keep_existing: (0, import_chunk_adx6804h.P)().optional() })), q = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ outcome: (0, import_chunk_adx6804h.F)(["placed", "kept", "too_large", "failed"]), reason: (0, import_chunk_adx6804h.n)().regex(/^[a-z_]{1,32}$/).optional(), sha256: (0, import_chunk_adx6804h.n)().regex(import_chunk_ccm69jjy.fm).optional(), size: (0, import_chunk_adx6804h.E)().int().nonnegative().optional() }));
async function G(w, i, { heldDirectory: y, isPlaceableName: g, refuseLinkToNetworkPath: _ }) {
  var _stack = [];
  try {
    let t = R().parse(w);
    if (!g(t.name)) throw Error('name must be a file name of at most 255 bytes, with no directory, that does not begin with ".stage-tmp."');
    if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return { summary: "not downloaded: not permitted on this API provider", output: { outcome: "failed", reason: "not_first_party" } };
    let o = (0, import_chunk_6mfepmbb.eP)();
    await _(o), await (0, import_promises.mkdir)(o, { recursive: true });
    const l = __using(_stack, await y(o), true);
    let a = import_path.posix.join(l.path, t.name);
    if (t.keep_existing && await (0, import_promises.lstat)(a).then((r) => r.isFile(), () => false)) return { summary: "left the file that was there", output: { outcome: "kept" } };
    let [{ DOWNLOAD_TRIES: d, downloadWithRetries: A }, { openSpill: b }, { getBridgeAccessToken: z, getBridgeBaseUrlOverride: k, isBridgeFileLoginRefused: v }, { settleStoredLoginRefusal: T }, { noteSavedUpload: x }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ndefsymq.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p5gq1q0v.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3y4y9pnn.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bxqr2z0q.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z926k98a.js")))]);
    if (await T(), v()) return { summary: "not downloaded (reason code: stored_login_refused)", output: { outcome: "failed", reason: "stored_login_refused" } };
    let f = new AbortController(), m = () => f.abort();
    if (i.addEventListener("abort", m, { once: true }), i.aborted) m();
    let e = await A(t.keep_existing ? d.noTurn : d.startsTurn, 0, f, void 0, { fileUuid: t.file_uuid, baseUrl: k() ?? import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL, modelCopy: false, forPrefetch: false, maxBytes: 0, spillTo: () => b({ at: l.path, release: async () => {
    } }, import_path.posix.join(o, t.name), 292), token: z, admitBytes: () => true });
    if (i.removeEventListener("abort", m), "failure" in e) return e.failure === "too_large" ? { summary: "not downloaded: over 500 MiB", output: { outcome: "too_large" } } : { summary: `not downloaded (reason code: ${e.failure})`, output: { outcome: "failed", reason: e.failure } };
    if ("writeFailed" in e) return { summary: "not placed: a write to disk failed", output: { outcome: "failed", reason: (0, import_chunk_jv7av99m.nH)(e.writeFailed) ? "no_space" : "write" } };
    if ("data" in e) return { summary: "not placed: the file is empty", output: { outcome: "failed", reason: "empty" } };
    try {
      i.throwIfAborted();
      let r = await (0, import_promises.lstat)(e.file.path);
      if (`${r.dev}:${r.ino}` !== e.file.identity) return { summary: "not placed: the downloaded file was replaced", output: { outcome: "failed", reason: "replaced" } };
      if (!t.keep_existing) await (0, import_chunk_q7qjcthc.ra)(e.file.path, a);
      else if (!await (0, import_chunk_0k16ny5f.jDt)(e.file.path, a)) return { summary: "left the file that was there", output: { outcome: "kept" } };
      return await x(t.file_uuid, { path: import_path.posix.join(o, t.name), sha256: e.file.sha256, size: e.file.size }, true), { summary: `placed ${e.file.size} bytes`, output: { outcome: "placed", sha256: e.file.sha256, size: e.file.size } };
    } finally {
      await (0, import_promises.rm)(e.file.path, { force: true }).catch(() => {
      });
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
