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
var chunk_nfer120v_exports = {};
__export(chunk_nfer120v_exports, {
  Cet: () => Cet,
  Eht: () => Eht,
  H_e: () => H_e,
  QMt: () => QMt,
  R$e: () => R$e,
  Zse: () => Zse,
  bRa: () => bRa
});
module.exports = __toCommonJS(chunk_nfer120v_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_nc4smb26 = require("/$bunfs/root/chunk-nc4smb26.js");
var import_chunk_587zek71 = require("/$bunfs/root/chunk-587zek71.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var p = " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment", h = "Self-hosted runner tools need your claude.ai login, and Claude Code didn't send it to the configured API address because your administrator set an API key helper. Ask your administrator to remove the key helper or to use Anthropic's API address.";
class a extends Error {
  status;
  constructor(e, t) {
    super(t);
    this.name = "SelfHostedRunnerApiError", this.status = e;
  }
}
var QMt = 8080;
function f() {
  let { getAPIProvider: e } = require("/$bunfs/root/chunk-1h13dc6g.js");
  if (e() !== "firstParty") throw new a(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.");
}
var m = "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)";
function R$e() {
  let e = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (e) return e;
  return (0, import_chunk_ephf358x.cn)().BASE_API_URL;
}
function bRa() {
  return (0, import_chunk_ephf358x.cn)().CLAUDE_AI_ORIGIN;
}
async function w(e, t = R$e()) {
  if (f(), (0, import_chunk_865at33z.qU)(t)) throw new a(403, new import_chunk_587zek71.RA("organization_gateway").message);
  let n = require("/$bunfs/root/chunk-s4watcfw.js");
  if (n.isConsoleProfileSessionsCredential()) {
    let u = await n.sessionsApiAccessToken(true);
    if (!u) throw new a(401, n.cloudSessionsSignInRefusal());
    return u;
  }
  await (0, import_chunk_865at33z.od)({ credentials: e }).catch(() => {
  });
  let o = (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? (await (0, import_chunk_865at33z.pp)(e))?.accessToken : (0, import_chunk_865at33z.tr)()?.accessToken;
  if (!o) throw new a(401, m);
  if ((0, import_chunk_478yxt5w.KAe)(t, true)) {
    let u = await (0, import_chunk_865at33z.v_)(e);
    if ((u === "env" || u === "fd") && !(0, import_chunk_f9x2f6cx.QM)() && !(0, import_chunk_865at33z.aoe)() && (0, import_chunk_865at33z.tr)()?.accessToken === o) return o;
    let d = (0, import_chunk_478yxt5w.Tje)();
    throw new a(403, d === "admin" ? h : new import_chunk_587zek71.RA(d).message);
  }
  return o;
}
function Eht(e) {
  return { ui: e };
}
async function Cet(e, t, n, o, u) {
  await (0, import_chunk_478yxt5w.O7)({ url: R$e(), signal: o }), f();
  let d = R$e(), c = await w(u, d);
  if (R$e() !== d) return Cet(e, t, n, o, u);
  if ((0, import_chunk_n25gt70y.LIr)(c)) throw new a(401, m);
  let r = await import_chunk_3jjr3wje.bn.request({ method: e, url: `${R$e()}${t}`, data: n, headers: { Authorization: `Bearer ${c}`, "anthropic-version": "2023-06-01", "content-type": "application/json" }, timeout: 2e4, signal: o, validateStatus: (i) => i < 500 }).catch((i) => {
    if (import_chunk_3jjr3wje.bn.isAxiosError(i) && !import_chunk_3jjr3wje.bn.isCancel(i) && i.response === void 0) throw new a(0, `${e} ${t}: ${i.message}`);
    throw i;
  });
  if (r.status >= 400) {
    let i = r.data?.error?.message ?? (0, import_chunk_w578pjby._)(r.data), l = `HTTP ${r.status} ${e} ${t}: ${i}`;
    if ([401, 403, 404, 409, 429].includes(r.status)) {
      let g = r.status === 401 || r.status === 403 ? p : "";
      throw new a(r.status, l + g);
    }
    throw Error(l);
  }
  return r.data;
}
function H_e(e, t) {
  return { tool_use_id: e, type: "tool_result", content: (0, import_chunk_nc4smb26.xf)((0, import_chunk_w578pjby._)(t)) };
}
function Zse(e) {
  let t = (0, import_chunk_0jve1fep.yge)(e);
  if (t !== null) return t;
  return Object.entries(e).filter(([, n]) => n !== void 0).map(([n, o]) => `${n}=${typeof o === "string" ? o : (0, import_chunk_w578pjby._)(o)}`).join(" ");
}
