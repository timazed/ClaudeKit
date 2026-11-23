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
var chunk_f26je2c0_exports = {};
__export(chunk_f26je2c0_exports, {
  _Vs: () => _Vs,
  oEa: () => oEa,
  rEa: () => rEa
});
module.exports = __toCommonJS(chunk_f26je2c0_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var _Vs = [250, 500, 500, 750, 1e3];
function g() {
  return import_chunk_c203g5kd.s.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? import_chunk_fzp6hh55.KPe;
}
function C(r) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some((e) => e === "--sdk-url" || e.startsWith("--sdk-url=")) && !(0, import_chunk_6e68m1dj.h3)();
}
var I = 250, w = 50;
function d() {
  return (0, import_chunk_fzp6hh55.sKn)(import_chunk_fzp6hh55.Oee, "OAuth token").token !== null || (0, import_chunk_fzp6hh55.sKn)(import_chunk_fzp6hh55.rut, "API key").token !== null;
}
async function rEa(r, { delaysMs: e = _Vs, siblingGraceMs: o = I, siblingStepMs: f = w } = {}) {
  if (!C(r)) return;
  let l = performance.now(), S = e.reduce((i, k) => i + k, 0), E = g(), { token: a, miss: _ } = (0, import_chunk_fzp6hh55.sKn)(E, "session ingress token"), n = 0;
  while (!a && n < e.length) {
    let i = e[n];
    (0, import_chunk_w578pjby.t)(`[spare-claim] session ingress token file not readable yet (${_}), re-checking in ${i}ms (${n + 1}/${e.length})`, { level: "warn" }), await (0, import_chunk_5appeerh.K)(i), n++, { token: a, miss: _ } = (0, import_chunk_fzp6hh55.sKn)(E, "session ingress token");
  }
  if (!a) {
    (0, import_chunk_42tcgre6.q)("error", "cli_worker_lifecycle_claim_token_wait", { attempts: n, recovered: false, last_miss: _ ?? "other", waited_ms: Math.round(performance.now() - l) });
    return;
  }
  let u = n > 0 ? Math.max(S - (performance.now() - l), o) : o, p = performance.now(), c = 0, m = d();
  while (!m && performance.now() - p < u) await (0, import_chunk_5appeerh.K)(f), c++, m = d();
  if (n > 0 || c > 0) (0, import_chunk_42tcgre6.q)("info", "cli_worker_lifecycle_claim_token_wait", { attempts: n, recovered: true, sibling_attempts: c, sibling_present: m, waited_ms: Math.round(performance.now() - l) });
}
function oEa() {
  let r = !!import_chunk_c203g5kd.s.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if ((0, import_chunk_f9x2f6cx._Pt)() !== null) return { recovered: false, diag: { fd_env_set: r } };
  let { token: e, miss: o } = (0, import_chunk_fzp6hh55.sKn)(g(), "session ingress token");
  if (!e) return { recovered: false, diag: { fd_env_set: r, last_miss: o ?? "other" } };
  return (0, import_chunk_f9x2f6cx.iVe)(e), (0, import_chunk_w578pjby.t)("Session ingress token re-read from well-known file"), { recovered: true, diag: { fd_env_set: r } };
}
