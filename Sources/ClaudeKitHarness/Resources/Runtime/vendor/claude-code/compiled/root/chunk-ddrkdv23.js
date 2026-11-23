const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ddrkdv23_exports = {};
__export(chunk_ddrkdv23_exports, {
  _Ur: () => _Ur
});
module.exports = __toCommonJS(chunk_ddrkdv23_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_promises = require("fs/promises");
var m = 5e3, _ = (0, import_chunk_mzmcvr6c.Fce)();
var y = { teardown: () => {
}, pulseIfClientPresent: () => {
} };
async function U() {
  let a = import_chunk_c203g5kd.s.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!a) return false;
  if ((0, import_chunk_z6pfqf6e.$r)(a) && !(0, import_chunk_z6pfqf6e.mc)(a)) return false;
  try {
    return await (0, import_promises.stat)(a), true;
  } catch (c) {
    if (!(0, import_chunk_jv7av99m.J)(c)) (0, import_chunk_w578pjby.t)(`[presence] client-presence-marker stat failed: ${c}`);
    return false;
  }
}
function _Ur(a, c, b, I = () => Promise.resolve(false)) {
  if ((0, import_chunk_k449cc64.wt)()) return y;
  let u = { sessionId: a, baseUrl: c, getAuthHeaders: b, onUnauthorized: I }, n = `[presence session=${a}]`, d = null, f = 0, g = Promise.resolve(), h = async (e, o) => {
    let r = await u.getAuthHeaders();
    if (r === null) return (0, import_chunk_w578pjby.t)(`${n} ${e} skipped (no credential to send under)`), null;
    if (!(0, import_chunk_zhr7rpv7.jn)()) return (0, import_chunk_w578pjby.t)(`${n} ${e} skipped (non-first-party provider)`), null;
    let l = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
    return (0, import_chunk_w578pjby.t)(`${n} ${e} \u2192 ${l}`), import_chunk_3jjr3wje.bn.post(l, { client_id: _, ...o }, { headers: { ...r, "anthropic-version": "2023-06-01", "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)() }, timeout: m, validateStatus: () => true }).then((i) => {
      if (i.status >= 400) (0, import_chunk_w578pjby.t)(`${n} ${e} got ${i.status}`);
      let E = i.config?.headers?.get?.("Authorization");
      return { status: i.status, sentHeaders: typeof E === "string" ? { ...r, Authorization: E } : (0, import_chunk_702cfzzh.JN)(i.config) ? null : r };
    }, (i) => ((0, import_chunk_w578pjby.t)(`${n} ${e} failed: ${import_chunk_3jjr3wje.bn.isAxiosError(i) ? i.code ?? "request_error" : "error"}`), null));
  }, P = async (e) => {
    let o = e.clear === true ? "clear" : "pulse";
    if (!(0, import_chunk_zhr7rpv7.jn)()) {
      (0, import_chunk_w578pjby.t)(`${n} ${o} skipped (non-first-party provider)`);
      return;
    }
    try {
      let r = await h(o, e);
      if (r?.status === 401 && (r.sentHeaders === null || await u.onUnauthorized(r.sentHeaders, "first"))) {
        (0, import_chunk_w578pjby.t)(`${n} ${o} retrying ${r.sentHeaders === null ? "once: the first went with no credential" : "after credential refresh"}`);
        let l = await h(o, e);
        if (l?.status === 401 && l.sentHeaders !== null) u.onUnauthorized(l.sentHeaders, "resend").catch(() => {
        });
      }
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`${n} ${o} skipped (credential unavailable: ${r instanceof Error ? r.name : "error"})`);
    }
  }, v = () => {
    let e = Date.now();
    f = e, d ??= new Date(e).toISOString();
    let o = P({ connected_at: d });
    return g = g.then(() => o), o;
  }, w = () => {
    if ((0, import_chunk_f9x2f6cx.lpt)() === false) {
      (0, import_chunk_w578pjby.t)(`${n} pulse skipped (terminal blurred)`);
      return;
    }
    if (Date.now() - f < m) return;
    v();
  }, H = (0, import_chunk_f9x2f6cx.jK)(w), C = (0, import_chunk_f9x2f6cx.gia)(() => {
    let e = (0, import_chunk_f9x2f6cx.lpt)();
    if ((0, import_chunk_w578pjby.t)(`${n} terminal focus \u2192 ${e === void 0 ? "unknown" : e ? "focused" : "blurred"}`), e === true) w();
  });
  (0, import_chunk_w578pjby.t)(`${n} wired`);
  let p = false;
  return { teardown() {
    if (p) return;
    if (p = true, H?.(), H = null, C?.(), C = null, d !== null) g.then(() => P({ clear: true }));
    d = null;
  }, pulseIfClientPresent() {
    if (p || Date.now() - f < m) return;
    U().then((e) => {
      if (e && !p && Date.now() - f >= m) (0, import_chunk_w578pjby.t)(`${n} client-presence-marker active \u2192 pulse`), v();
    });
  } };
}
