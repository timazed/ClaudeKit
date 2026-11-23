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
var chunk_jtppe9b0_exports = {};
__export(chunk_jtppe9b0_exports, {
  A1n: () => A1n,
  C1n: () => C1n,
  Cml: () => Cml,
  Fhs: () => Fhs,
  Nhs: () => Nhs,
  Tml: () => Tml,
  YBt: () => YBt,
  _Di: () => _Di,
  ban: () => ban,
  gDi: () => gDi
});
module.exports = __toCommonJS(chunk_jtppe9b0_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function YBt() {
  return gDi() ? C1n() : void 0;
}
function gDi() {
  if (!(0, import_chunk_f9x2f6cx.st)()) {
    let e = (0, import_chunk_865at33z.Rdt)({ anthropicAuthEnabled: (0, import_chunk_865at33z.wa)(), oauthScopes: (0, import_chunk_865at33z.hde)(import_chunk_ephf358x.uP) ? [import_chunk_ephf358x.uP] : [] });
    return (0, import_chunk_865at33z.VOl)({ isSubscriber: e });
  }
  return false;
}
function _Di() {
  try {
    let e = YBt(), n = e === void 0 ? w : `${e.project?.taggedId}|${e.project?.source}|${e.ignored.join(",")}`;
    if (e !== void 0 && n !== _.last) {
      let { project: r, ignored: o } = e;
      if (o.length > 0) if ((0, import_chunk_w578pjby.t)(`Attribution Project: ignored a value that names no Project (from ${o.join(", ")})`, { level: "warn" }), r === void 0) (0, import_chunk_cqa9hrgx.m)("attribution_project", "not_a_project_id");
      else (0, import_chunk_cqa9hrgx.l)("attribution_project", "not_a_project_id");
      else if (r !== void 0) (0, import_chunk_cqa9hrgx.u)("attribution_project");
      if (r !== void 0) (0, import_chunk_w578pjby.t)(`Attribution Project: ${r.taggedId} (from ${r.source})`);
    }
    return _.last = n, e?.project;
  } catch (e) {
    if (_.last !== h) _.last = h, (0, import_chunk_cqa9hrgx.m)("attribution_project", "resolution_failed"), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(e), "attribution Project resolution failed"));
    return;
  }
}
function C1n(e = Nhs) {
  let n = [], r = P.peek((0, import_chunk_f9x2f6cx.N)())?.taggedId;
  if (r !== void 0) return { project: { taggedId: r, source: "harness" }, written: r, ignored: n, serverStated: true };
  let o = import_chunk_c203g5kd.s.CLAUDE_CODE_ATTRIBUTION_PROJECT;
  if (o !== void 0 && o.trim() !== "") {
    let c = e(o);
    if (c !== void 0) return { project: { taggedId: c, source: "harness" }, written: o.trim(), ignored: n };
    n.push("harness");
  }
  let d = (0, import_chunk_xzvhvaa2.Ko)(), p = d.includes("userSettings") && (0, import_chunk_2yx6c1y2.vm)(), f, g = null;
  for (let c = d.length - 1; c >= 0; c--) {
    let a = d[c];
    if (a === "projectSettings" && p) continue;
    if ((0, import_chunk_2yx6c1y2._e)(a)?.attributionProject === void 0) continue;
    if (import_chunk_xzvhvaa2.yp.has(a)) {
      if (f === void 0) if ((0, import_chunk_f9x2f6cx.Se)()) {
        let T = (0, import_chunk_f9x2f6cx.ns)(), E = (0, import_chunk_f9x2f6cx.dpt)();
        f = T !== null && (0, import_chunk_865at33z.Xk)(T) && (E === null || (0, import_chunk_865at33z.Xk)(E));
      } else f = (0, import_chunk_865at33z.Yi)();
      if (!f) continue;
    }
    g = a;
    break;
  }
  let j = g === null ? void 0 : (0, import_chunk_2yx6c1y2._e)(g)?.attributionProject;
  if (g !== null && typeof j === "string" && j.trim() !== "") {
    let c = O[g], a = e(j);
    if (a !== void 0) return { project: { taggedId: a, source: c }, written: j.trim(), ignored: n };
    n.push(c);
  }
  let S = (0, import_chunk_2yx6c1y2._e)("policySettings")?.attributionProjectPolicy, b = typeof S === "object" && S !== null && "default" in S ? S.default : void 0;
  if (typeof b === "string" && b.trim() !== "") {
    let c = e(b);
    if (c !== void 0) return { project: { taggedId: c, source: "admin_default" }, written: b.trim(), ignored: n };
    n.push("admin_default");
  }
  return { project: void 0, written: void 0, ignored: n };
}
function Nhs(e) {
  let n = e.trim();
  if (R.test(n)) {
    let o = BigInt(`0x${n.replaceAll("-", "")}`), d = "";
    while (o > 0n) d = A[Number(o % 58n)] + d, o /= 58n;
    return `claude_proj_01${d.padStart(I, A[0])}`;
  }
  if (!import_chunk_865at33z.l4i.test(n)) return;
  let r = 0n;
  for (let o of n.slice(-I)) r = r * 58n + BigInt(A.indexOf(o));
  return r <= y ? n : void 0;
}
function ban(e) {
  let { project: n, written: r, ignored: o, serverStated: d } = e;
  if (n === void 0) return;
  if (d) return { name: r ?? n.taggedId, origin: "set by the server for this session" };
  let [p] = o, f = p === void 0 ? "" : `; ignored the invalid ${A1n(p)}`;
  return { name: r ?? n.taggedId, origin: `${Fhs(n.source)}${f}` };
}
function A1n(e) {
  switch (e) {
    case "harness":
      return "CLAUDE_CODE_ATTRIBUTION_PROJECT";
    case "admin_default":
      return "your organization's default Project";
    case "flag":
      return "attributionProject in --settings";
    default:
      return `attributionProject in ${Fhs(e)}`;
  }
}
function Fhs(e) {
  switch (e) {
    case "harness":
      return "CLAUDE_CODE_ATTRIBUTION_PROJECT";
    case "admin_default":
      return "your organization's default";
    case "user":
      return (0, import_chunk_n2dbhmj2.os)((0, import_chunk_2yx6c1y2._n)("userSettings") ?? "~/.claude/settings.json");
    case "project":
      return ".claude/settings.json";
    case "local":
      return ".claude/settings.local.json";
    case "flag":
      return (0, import_chunk_f9x2f6cx.Fd)()?.attributionProject === void 0 ? "--settings" : "set with /project";
    case "managed":
      return "managed settings";
  }
}
var O = { userSettings: "user", projectSettings: "project", localSettings: "local", flagSettings: "flag", policySettings: "managed" }, R = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, A = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", I = 22, y = (1n << 128n) - 1n, w = "not sent", h = "failed", P = new import_chunk_pzzqg6s3.ze(() => ({}));
function Tml(e) {
  let n = typeof e === "string" ? Nhs(e) : void 0;
  if (n === void 0) {
    if (e !== void 0) (0, import_chunk_cqa9hrgx.l)("attribution_project", "not_a_project_id");
    return false;
  }
  return P.of((0, import_chunk_f9x2f6cx.N)()).taggedId = n, true;
}
function Cml() {
  P.drop((0, import_chunk_f9x2f6cx.N)());
}
var _ = (0, import_chunk_t57w17k7.de)({ last: void 0 }, (e) => {
  e.last = void 0;
});
