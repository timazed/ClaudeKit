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
var chunk_brncaawc_exports = {};
__export(chunk_brncaawc_exports, {
  I0a: () => I0a,
  OQs: () => OQs,
  PQs: () => PQs,
  V_e: () => V_e,
  mtt: () => mtt,
  xQs: () => xQs
});
module.exports = __toCommonJS(chunk_brncaawc_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
(0, import_chunk_adx6804h.B)();
class xQs {
  #t;
  constructor(e) {
    this.#t = e;
  }
  reveal() {
    return this.#t;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
}
async function PQs(e, r) {
  let o;
  try {
    o = await import_chunk_865at33z.zt.post("/v1/code/github/import-token", { token: e.reveal() }, { headers: { "anthropic-beta": import_chunk_xfj2cwfv.c6n.header }, auth: "teleport-org", timeout: 15e3, validateStatus: () => true, credentials: r });
  } catch (a) {
    if ((0, import_chunk_3jjr3wje.fd)(a)) {
      (0, import_chunk_w578pjby.t)(`import-token network error: ${a.code ?? "unknown"}`, { level: "error" });
      let d = (0, import_chunk_865at33z.jZ)(a);
      return { ok: false, error: { kind: "network", ...d && { sslHint: d } } };
    }
    return { ok: false, error: { kind: "not_signed_in" } };
  }
  if (!o.ok) return { ok: false, error: { kind: "not_signed_in" } };
  if (o.status === 200) return { ok: true, result: o.data };
  if (o.status === 400) {
    let a = (0, import_chunk_7cfjrnwy.BK)((0, import_chunk_qesvcmqe.k1)(o.data) ?? "");
    return { ok: false, error: { kind: "invalid_token", ...a && { message: a } } };
  }
  if (o.status === 401) return { ok: false, error: { kind: "not_signed_in" } };
  return (0, import_chunk_w578pjby.t)(`import-token returned ${o.status}`, { level: "error" }), { ok: false, error: { kind: "server", status: o.status } };
}
async function I0a(e) {
  try {
    return await (0, import_chunk_865at33z.B0)(e, false), true;
  } catch {
    return false;
  }
}
async function h(e, { timeout: r, isBackground: o }) {
  try {
    let a = await import_chunk_865at33z.zt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", { auth: "teleport-org", timeout: r, isBackground: o, validateStatus: () => true, credentials: e });
    if (!a.ok || a.status !== 200) return null;
    let d = a.data?.auth_source;
    return { isAuthenticated: a.data?.is_authenticated === true, authSource: d === "oauth" || d === "cli_import" ? d : null };
  } catch {
    return null;
  }
}
async function OQs(e) {
  let r = await h(e, { timeout: 1e4, isBackground: false });
  return r?.isAuthenticated ? r.authSource : null;
}
async function f(e) {
  let r = await h(e, { timeout: 3e3, isBackground: true });
  if (r === null) return (0, import_chunk_cqa9hrgx.l)("api_github_connection_status", "request_failed"), "unknown";
  return (0, import_chunk_cqa9hrgx.u)("api_github_connection_status"), r.isAuthenticated ? "connected" : "not_connected";
}
function mtt() {
  return `${(0, import_chunk_ephf358x.cn)().CLAUDE_AI_ORIGIN}/code`;
}
class k {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(e, r) {
    if (this.seedFromPersisted(), this.inFlight) await this.inFlight;
    else if (!g()) await this.fetch(e, r);
    return this.status ?? "unknown";
  }
  peek(e, r) {
    if (this.seedFromPersisted(), this.status === void 0 && !this.inFlight && !g()) this.fetch(e, r);
    return this.status;
  }
  markConnected(e) {
    this.generation++, this.inFlight = void 0, this.status = "connected", m("connected", e);
  }
  clear() {
    this.generation++, this.inFlight = void 0, this.status = void 0;
  }
  seedFromPersisted() {
    if (this.status !== void 0 || this.inFlight) return;
    let e = S();
    if (e) this.status = C((0, import_chunk_865at33z.ge)(), e);
  }
  fetch(e, r) {
    let o = this.generation, a = f(e).then((d) => {
      this.settle(o, d, r);
    }, (d) => {
      (0, import_chunk_k449cc64.i)(d), this.settle(o, "unknown", r);
    });
    return this.inFlight = a, a;
  }
  settle(e, r, o) {
    if (e !== this.generation) return;
    if (this.inFlight = void 0, r === "unknown") {
      this.status ??= r;
      return;
    }
    this.status = r, m(r, o);
  }
}
var V_e = new import_chunk_2904xtvq.j(() => new k());
function g() {
  return (0, import_chunk_865at33z.b)("tengu_cheerful_horizon", false);
}
var _ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ accountUuid: (0, import_chunk_adx6804h.n)(), orgUuid: (0, import_chunk_adx6804h.n)(), status: (0, import_chunk_adx6804h.F)(["connected", "not_connected"]) }));
function S() {
  let e = (0, import_chunk_865at33z.Sn)();
  if (!e?.organizationUuid) return;
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_ORGANIZATION_UUID;
  if (r && r !== e.organizationUuid) return;
  if ((0, import_chunk_865at33z.$R)() !== "store") return;
  return { accountUuid: e.accountUuid, orgUuid: e.organizationUuid };
}
function C(e, r) {
  let o = _().safeParse(e.githubWebConnectionStatusCache);
  if (!o.success || o.data.accountUuid !== r.accountUuid || o.data.orgUuid !== r.orgUuid) return;
  return o.data.status;
}
function m(e, r) {
  let o = S();
  if (!o) return;
  (0, import_chunk_865at33z.Ke)((a) => C(a, o) === e ? a : { ...a, githubWebConnectionStatusCache: { ...o, status: e } }, r);
}
