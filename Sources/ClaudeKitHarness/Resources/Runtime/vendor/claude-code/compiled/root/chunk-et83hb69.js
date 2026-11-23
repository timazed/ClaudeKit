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
var chunk_et83hb69_exports = {};
__export(chunk_et83hb69_exports, {
  rie: () => rie
});
module.exports = __toCommonJS(chunk_et83hb69_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_j2ybpxmz = require("/$bunfs/root/chunk-j2ybpxmz.js");
var import_chunk_gkm2eky6 = require("/$bunfs/root/chunk-gkm2eky6.js");
var k = "tengu_log_datadog_events", c = "tengu_quizzical_giraffe", y = /* @__PURE__ */ new Set(["tengu_started", "tengu_oauth_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_race_recovered", "tengu_oauth_refresh_token_cleared_on_disk", "tengu_api_error", "tengu_feature_bad", "tengu_feature_sad"]);
function R() {
  if ((0, import_chunk_865at33z.qCt)("datadog")) return false;
  try {
    return (0, import_chunk_865at33z.b)(k, false);
  } catch {
    return false;
  }
}
function _(e, n) {
  if (!y.has(e)) return n;
  try {
    let { value: o, source: r } = (0, import_chunk_865at33z.gn)(c, false), a = r === "fallback" || r === "disabled";
    return { ...n, [c]: (0, import_chunk_78g0060s.f)(a ? "unset" : o === true ? "on" : "off") };
  } catch {
    return n;
  }
}
function m(e, n, o) {
  return n;
}
function p(e, n) {
  let o = (0, import_chunk_865at33z.J4i)(e);
  if (o === 0 || e !== "tengu_feature_ok" || n.feature_name === void 0) return o;
  let r = (0, import_chunk_865at33z.Gzn)((0, import_chunk_865at33z.Jxs)()[`${e}:${n.feature_name}`]?.sample_rate);
  if (r === null) return o;
  return o === null ? r : o * r;
}
function E(e) {
  return e || (0, import_chunk_865at33z.bde)();
}
function h(e, n) {
  if (n === null) return e;
  let o = e.sample_rate;
  return { ...e, sample_rate: typeof o === "number" && o > 0 && o < 1 ? o * n : n };
}
function v(e, n) {
}
function M() {
  try {
    return (0, import_chunk_865at33z.dt)();
  } catch {
    return;
  }
}
function g(e, n, o, r) {
  let a = r();
  if (!E(a)) return;
  let i = M(), l = _(e, m(e, (0, import_chunk_gkm2eky6.qmr)(n, i), i)), u = h(l, o);
  (0, import_chunk_865at33z.X4i)(i, () => {
    if (a) (0, import_chunk_j2ybpxmz.zWn)(e, (0, import_chunk_y53wbr8a.L4n)(u));
    (0, import_chunk_865at33z.zzn)(e, u), v(e, u);
  });
}
var s = false;
function S(e, n, o) {
  if (s) {
    (0, import_chunk_w578pjby.t)(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, { level: "error" });
    return;
  }
  s = true;
  try {
    let r = p(e, n);
    if (r === 0) return;
    if ((0, import_chunk_865at33z.Zqi)()) {
      g(e, n, r, o);
      return;
    }
    let a = () => {
      s = true;
      try {
        g(e, n, r, o);
      } finally {
        s = false;
      }
    };
    (0, import_chunk_865at33z.t6t)().then(a, a);
  } finally {
    s = false;
  }
}
async function L(e, n, o) {
  let r = p(e, n);
  if (r === 0) return;
  if (!(0, import_chunk_865at33z.Zqi)()) await (0, import_chunk_865at33z.t6t)();
  let a = o();
  if (!E(a)) return;
  let i = M(), l = _(e, m(e, (0, import_chunk_gkm2eky6.qmr)(n, i), i)), u = h(l, r), d = [];
  (0, import_chunk_865at33z.X4i)(i, () => {
    if (a) d.push((0, import_chunk_j2ybpxmz.zWn)(e, (0, import_chunk_y53wbr8a.L4n)(u)));
    d.push((0, import_chunk_865at33z.G0)(e, u)), v(e, u);
  }), await Promise.all(d);
}
function rie() {
  (0, import_chunk_y53wbr8a.Kra)(A(R));
}
function A(e) {
  return { logEvent: (n, o) => S(n, o, e), logEventAsync: (n, o) => L(n, o, e) };
}
