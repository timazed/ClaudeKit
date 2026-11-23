const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var chunk_bwy57kck_exports = {};
__export(chunk_bwy57kck_exports, {
  _Qs: () => _Qs,
  cnr: () => cnr,
  unr: () => unr
});
module.exports = __toCommonJS(chunk_bwy57kck_exports);
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_ws = __toESM(require("ws"));
var x = '{"type":"KeepAlive"}', L = '{"type":"CloseStream"}', U = "/api/ws/speech_to_text/voice_stream", F = 8e3, R = { safety: 5e3, noData: 1500 };
function A(e, o, d) {
  return typeof e === "number" && Number.isInteger(e) && e >= o && e <= d ? String(e) : "unknown";
}
function z(e) {
  return (0, import_chunk_jv7av99m.Cr)(e)?.toLowerCase() ?? "unknown";
}
var D = 1500;
async function _Qs() {
  if ((0, import_chunk_k449cc64.wt)() || (0, import_chunk_k449cc64.ox)()) return "skipped_privacy";
  try {
    let e = await import_chunk_3jjr3wje.bn.get(`${(0, import_chunk_ephf358x.cn)().BASE_API_URL}/api/hello`, { headers: { "User-Agent": (0, import_chunk_865at33z.XV)() }, timeout: D, validateStatus: () => true, maxRedirects: 0 }), o = A(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${o}` : `http_${o}`;
  } catch (e) {
    return import_chunk_3jjr3wje.bn.isAxiosError(e) && (0, import_chunk_tvttgr51.Yhe)(e.code) ? "timeout" : "fetch_failed";
  }
}
function B() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) return true;
  return (0, import_chunk_865at33z.b)("tengu_brick_follow", false);
}
function cnr() {
  if (!(0, import_chunk_865at33z.wa)()) return false;
  let e = (0, import_chunk_865at33z.tr)();
  return e !== null && e.accessToken !== null;
}
var N = 1024;
function H(e) {
  let o = /* @__PURE__ */ new Set(), d = [], u = 0;
  for (let C of e) {
    let p = C.replace(/,/g, " ").replace(/[^\x20-\x7E]/g, "").replace(/\s+/g, " ").trim();
    if (!p || o.has(p)) continue;
    let T = p.length + (d.length > 0 ? 1 : 0);
    if (u + T > N) break;
    o.add(p), d.push(p), u += T;
  }
  return d.join(",");
}
function W() {
  return;
}
async function unr(e, o, d) {
  let u;
  if ((0, import_chunk_m15w38ag.ne)() && d !== void 0) await (0, import_chunk_865at33z.od)({ credentials: d }), u = await (0, import_chunk_865at33z.pp)(d);
  else await (0, import_chunk_865at33z.od)(), u = (0, import_chunk_865at33z.tr)();
  if (!u?.accessToken) return (0, import_chunk_w578pjby.t)("[voice_stream] No OAuth token available"), null;
  if (o?.isStillWanted?.() === false) return null;
  let C = W() ?? (0, import_chunk_ephf358x.cn)().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://"), p = B(), T = new URLSearchParams({ encoding: "linear16", sample_rate: "16000", channels: "1", endpointing_ms: "300", utterance_end_ms: "1000", language: o?.language ?? "en", use_conversation_engine: "true", ...p && { forward_interims: "typed" } }), E = `${C}${U}?${T.toString()}`;
  (0, import_chunk_w578pjby.t)(`[voice_stream] Connecting to ${E}`);
  let I = { Authorization: `Bearer ${u.accessToken}`, "User-Agent": (0, import_chunk_865at33z.XV)(), "x-app": "cli", "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)() };
  if (o?.keyterms?.length) {
    let r = H(o.keyterms);
    if (r) I["x-config-keyterms"] = r;
  }
  let V = (0, import_chunk_3jjr3wje.QN)(void 0), P = { headers: I, proxy: (0, import_chunk_3jjr3wje.Z1)(E), tls: V || void 0 };
  (0, import_chunk_np189awg.COo)(E, import_ws.default);
  let a = new import_ws.default(E, P), f = null, y = false, w = false, S = false, g = false, k = false, _ = null, v = null, O = { send(r) {
    if (a.readyState !== import_ws.default.OPEN) return;
    if (S) {
      (0, import_chunk_w578pjby.t)(`[voice_stream] Dropping audio chunk after CloseStream: ${String(r.length)} bytes`);
      return;
    }
    (0, import_chunk_w578pjby.t)(`[voice_stream] Sending audio chunk: ${String(r.length)} bytes`), a.send(Buffer.from(r));
  }, finalize() {
    if (g || S) return Promise.resolve("ws_already_closed");
    return g = true, new Promise((r) => {
      let c = setTimeout(() => _?.("safety_timeout"), R.safety), n = setTimeout(() => _?.("no_data_timeout"), R.noData);
      if (v = () => {
        clearTimeout(n), v = null;
      }, _ = (i) => {
        if (clearTimeout(c), clearTimeout(n), _ = null, v = null, l) {
          (0, import_chunk_w578pjby.t)(`[voice_stream] Promoting unreported interim before ${i} resolve`);
          let M = l;
          l = "", e.onTranscript(M, true);
        }
        (0, import_chunk_w578pjby.t)(`[voice_stream] Finalize resolved via ${i}`), r(i);
      }, a.readyState === import_ws.default.CLOSED || a.readyState === import_ws.default.CLOSING) {
        _("ws_already_closed");
        return;
      }
      setTimeout(() => {
        if (S = true, a.readyState === import_ws.default.OPEN) (0, import_chunk_w578pjby.t)("[voice_stream] Sending CloseStream (finalize)"), a.send(L);
      }, 0);
    });
  }, close() {
    if (S = true, f) clearInterval(f), f = null;
    if (y = false, a.readyState === import_ws.default.OPEN) a.close();
  }, isConnected() {
    return y && a.readyState === import_ws.default.OPEN;
  } };
  a.on("open", () => {
    (0, import_chunk_w578pjby.t)("[voice_stream] WebSocket connected"), y = true, w = true, (0, import_chunk_w578pjby.t)("[voice_stream] Sending initial KeepAlive"), a.send(x), f = setInterval((r) => {
      if (r.readyState === import_ws.default.OPEN) (0, import_chunk_w578pjby.t)("[voice_stream] Sending periodic KeepAlive"), r.send(x);
    }, F, a), e.onReady(O);
  });
  let l = "";
  function h(r) {
    if (!l) return;
    (0, import_chunk_w578pjby.t)(`[voice_stream] Promoting unreported interim to final (${r})`);
    let c = l;
    l = "", e.onTranscript(c, true);
  }
  return a.on("message", (r) => {
    let c = r.toString();
    (0, import_chunk_w578pjby.t)(`[voice_stream] Message received (${String(c.length)} chars)`);
    let n;
    try {
      n = (0, import_chunk_w578pjby.te)(c);
    } catch {
      return;
    }
    switch (n.type) {
      case "TranscriptInterim":
      case "TranscriptText": {
        let i = n.data;
        if ((0, import_chunk_w578pjby.t)(`[voice_stream] ${n.type} (${String(i?.length ?? 0)} chars)`), S) v?.();
        if (i) l = i, e.onTranscript(i, false);
        break;
      }
      case "TranscriptEndpoint": {
        (0, import_chunk_w578pjby.t)(`[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`);
        let i = l;
        if (l = "", i) e.onTranscript(i, true);
        if (S) _?.("post_closestream_endpoint");
        break;
      }
      case "TranscriptError": {
        let i = n.description ?? n.error_code ?? "unknown transcription error";
        if ((0, import_chunk_w578pjby.t)(`[voice_stream] TranscriptError: ${i}`), h("TranscriptError"), !g) e.onError(i);
        break;
      }
      case "error": {
        let i = n.message ?? `unstructured error frame (keys: ${Object.keys(n).join(", ")})`;
        if ((0, import_chunk_w578pjby.t)(`[voice_stream] Server error: ${i}`), h("server error"), !g) e.onError(i);
        break;
      }
      default:
        break;
    }
  }), a.on("close", (r, c) => {
    let n = c?.toString() ?? "";
    if ((0, import_chunk_w578pjby.t)(`[voice_stream] WebSocket closed: code=${String(r)} reason="${n}"`), y = false, f) clearInterval(f), f = null;
    if (h("ws close"), _?.("ws_close"), !g && !k && r !== 1e3 && r !== 1005) e.onError(`Connection closed: code ${String(r)}${n ? ` \u2014 ${n}` : ""}`, w ? void 0 : { connectFailureCode: `ws_closed_${A(r, 1e3, 4999)}` });
    e.onClose();
  }), a.on("unexpected-response", (r, c) => {
    let n = c.statusCode ?? 0;
    if (n === 101) {
      (0, import_chunk_w578pjby.t)("[voice_stream] unexpected-response fired with 101; ignoring");
      return;
    }
    if ((0, import_chunk_w578pjby.t)(`[voice_stream] Upgrade rejected: status=${String(n)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`), k = true, c.resume(), r.destroy?.(), g) return;
    e.onError(`WebSocket upgrade rejected with HTTP ${String(n)}`, { fatal: n >= 400 && n < 500, connectFailureCode: c.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${A(n, 100, 599)}` : `upgrade_rejected_${A(n, 100, 599)}` });
  }), a.on("error", (r) => {
    if ((0, import_chunk_w578pjby.t)(`[voice_stream] WebSocket error: ${r.message}`, { level: "error" }), h("ws error"), !g) e.onError(`Voice stream connection error: ${r.message}`, w ? void 0 : { connectFailureCode: `ws_error_${z(r)}` });
  }), O;
}
