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
var chunk_ee1mwmgn_exports = {};
__export(chunk_ee1mwmgn_exports, {
  t5r: () => t5r,
  w0a: () => w0a
});
module.exports = __toCommonJS(chunk_ee1mwmgn_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_r949v7h0 = require("/$bunfs/root/chunk-r949v7h0.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var E = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)(), 1);
var a = "tengu_sleepy_wicket", c = 20, u = (0, import_chunk_t57w17k7.de)({ hasEnded: false, releases: [] }, (e) => {
  e.hasEnded = false, e.releases.length = 0;
});
function h() {
  return !u.hasEnded && ((0, import_chunk_f9x2f6cx.Y)() || import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_OWNED_SPAWN_ENV === true && (0, import_chunk_r949v7h0.FG)(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID, import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND) && (0, import_chunk_f9x2f6cx.Se)());
}
function l() {
  if ((0, import_chunk_sghy0qej.Pe)(a, { safe: false })) t5r(a);
}
function w0a(e, o) {
  if (!h()) return e;
  let n = e.export.bind(e), r = e.shutdown.bind(e), t = [], f = 0;
  return e.export = (d, p) => {
    if (t !== void 0) l();
    if (t === void 0) {
      n(d, p);
      return;
    }
    if (t.length < c) t.push(d);
    else f++;
    p({ code: E.ExportResultCode.SUCCESS });
  }, e.shutdown = () => {
    if (t !== void 0) l();
    if (t !== void 0 && t.length > 0) (0, import_chunk_42tcgre6.q)("info", "org_export_not_sent_no_turn", { signal: o, kept_batches: t.length, dropped_batches: f }), t.length = 0, f = 0;
    return r();
  }, u.releases.push(() => {
    let d = t ?? [];
    t = void 0;
    for (let p of d) try {
      n(p, () => {
      });
    } catch (_) {
      (0, import_chunk_k449cc64.i)(_);
    }
    return { sent: d.length, dropped: f };
  }), e;
}
function t5r(e) {
  u.hasEnded = true;
  let o = u.releases.splice(0).map((n) => n());
  if (o.length > 0) (0, import_chunk_42tcgre6.q)("info", "org_export_wait_ended", { reason: e, sent_batches: o.reduce((n, r) => n + r.sent, 0), dropped_batches: o.reduce((n, r) => n + r.dropped, 0) });
}
