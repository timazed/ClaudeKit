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
var chunk_3v09xgvh_exports = {};
__export(chunk_3v09xgvh_exports, {
  $vl: () => $vl,
  Bvl: () => Bvl,
  Fvl: () => Fvl,
  Lvl: () => Lvl,
  Nvl: () => Nvl,
  T2i: () => T2i,
  Uvl: () => Uvl,
  eCr: () => eCr,
  eun: () => eun
});
module.exports = __toCommonJS(chunk_3v09xgvh_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var i = null;
function Lvl(n) {
  i = n;
}
function eCr() {
  return i?.credential() ?? null;
}
function Nvl() {
  return i?.road() ?? "none_at_claim";
}
function Fvl(n, e) {
  if (e === null) return "none_at_claim";
  let r = e.kind === "bearer", o = r ? "CLAUDE_CODE_OAUTH_TOKEN" : "ANTHROPIC_API_KEY", u = r ? "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR" : "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR";
  return t(n[o]) === void 0 ? (0, import_chunk_f9x2f6cx.R3n)(u) ?? "none" : "env_var";
}
function $vl(n) {
  if (l(n)) {
    let a = t((0, import_chunk_fzp6hh55.gJe)(import_chunk_fzp6hh55.Oee, "OAuth token")), s = t((0, import_chunk_fzp6hh55.gJe)(import_chunk_fzp6hh55.rut, "API key"));
    if (a !== void 0 && s !== void 0) return null;
    return a === void 0 ? _(s) : { kind: "bearer", token: a };
  }
  let e = d(n, "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"), r = d(n, "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR"), o = t(n.CLAUDE_CODE_OAUTH_TOKEN) ?? (e ? t((0, import_chunk_fzp6hh55.Zx)()) : void 0), u = t(n.ANTHROPIC_API_KEY) ?? (r ? t((0, import_chunk_fzp6hh55.wK)()) : void 0);
  if (o !== void 0) return { kind: "bearer", token: o };
  if (u !== void 0) return { kind: "key", key: u };
  if (e || r) return null;
  let c = t((0, import_chunk_fzp6hh55.Zx)());
  if (c !== void 0) return { kind: "bearer", token: c };
  return _(t((0, import_chunk_fzp6hh55.wK)()));
}
function T2i() {
  let n = i?.env();
  if (n === void 0) return "no_auth";
  if ([...import_chunk_zmb62hr5.Vy, "CLAUDE_CODE_USE_GATEWAY"].some((o) => (0, import_chunk_69qhefwa.Ne)(n[o]))) return "third_party_provider";
  let r = t(n.ANTHROPIC_BASE_URL);
  if (r !== void 0 && !(0, import_chunk_zhr7rpv7.md)(r)) return "custom_base_url";
  return eCr() === null ? "no_auth" : null;
}
function eun() {
  let n = i?.env() ?? {};
  return import_chunk_865at33z.Iqi.some((e) => process.env[e] !== n[e]);
}
function Uvl() {
  let n = i?.env();
  return n === void 0 || l(n) ? void 0 : t(n.CLAUDE_CODE_SUBSCRIPTION_TYPE);
}
function Bvl() {
  let n = i?.env();
  return n === void 0 || l(n) ? void 0 : t(n.CLAUDE_CODE_ORGANIZATION_UUID);
}
function l(n) {
  return (0, import_chunk_3t7ve0wy.Yg)() || (0, import_chunk_3t7ve0wy.kk)() || d(n, "CLAUDE_CODE_CHILD_SESSION") || d(n, "CLAUDECODE");
}
function d(n, e) {
  return t(n[e]) !== void 0;
}
function _(n) {
  return n === void 0 ? null : { kind: "key", key: n };
}
function t(n) {
  let e = n?.trim() ?? "";
  return e === "" ? void 0 : e;
}
