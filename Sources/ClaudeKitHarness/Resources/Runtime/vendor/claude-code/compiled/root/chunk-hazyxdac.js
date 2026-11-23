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
var chunk_hazyxdac_exports = {};
__export(chunk_hazyxdac_exports, {
  $Nl: () => $Nl,
  FNl: () => FNl,
  GPe: () => GPe,
  IMr: () => IMr,
  J1: () => J1,
  KX: () => KX,
  Lze: () => Lze,
  h8: () => h8,
  hXi: () => hXi,
  m8: () => m8,
  qde: () => qde,
  wFe: () => wFe,
  zhn: () => zhn
});
module.exports = __toCommonJS(chunk_hazyxdac_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var import_os = require("os");
var import_path = require("path");
var Lze = "-credentials";
function KX() {
  let n = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (n !== void 0) return (n || (0, import_path.join)((0, import_os.homedir)(), ".claude")).normalize("NFC");
  return (0, import_chunk_2gtmjt3y.Ze)();
}
function qde() {
  return (0, import_chunk_f9x2f6cx.Y)() ? null : KX();
}
function m8(n = "") {
  let e = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR, t = e !== void 0 ? !e : !process.env.CLAUDE_CONFIG_DIR, r = e !== void 0 ? e.normalize("NFC") : (0, import_chunk_2gtmjt3y.Ze)(), a = t ? "" : `-${(0, import_crypto.createHash)("sha256").update(r).digest("hex").substring(0, 8)}`;
  return `Claude Code${(0, import_chunk_ephf358x.cn)().OAUTH_FILE_SUFFIX}${n}${a}`;
}
var d = /^[a-zA-Z0-9._-]+$/;
function J1() {
  let n;
  try {
    n = process.env.USER || (0, import_os.userInfo)().username;
  } catch {
    n = "claude-code-user";
  }
  if (!d.test(n)) return "claude-code-user";
  return n;
}
var zhn = 3e4;
class i {
  cache = { data: null, cachedAt: 0 };
  generation = 0;
  readInFlight = null;
  lastReadFailure = null;
  blockingReadRetryAt = 0;
  keychainHoldsItem = false;
  lastKnown = null;
  legacyApiKeyPrefetch = null;
}
var h = new import_chunk_2904xtvq.j(() => new i());
function h8() {
  return h.of((0, import_chunk_f9x2f6cx.N)().host);
}
var hXi = 1e3;
function wFe(n = h8().cache.data) {
  c({ data: n, cachedAt: 0, expired: true });
}
function GPe() {
  c({ data: null, cachedAt: 0 });
}
function c(n) {
  let e = h8();
  e.cache = n, e.generation++, e.readInFlight = null, e.lastReadFailure = null, e.blockingReadRetryAt = 0;
}
function FNl(n, e, t = h8()) {
  if (t.cache.cachedAt !== 0 || t.generation !== e) return;
  let r = null;
  if (n) try {
    r = JSON.parse(n);
  } catch {
    return;
  }
  t.cache = { data: r, cachedAt: Date.now() };
}
function IMr(n, e, t) {
  if (n.generation === t) n.keychainHoldsItem = e;
}
function $Nl(n) {
  if (!n) return "empty";
  let e = n.toLowerCase();
  if (e.includes("errsecduplicateitem") || e.includes("already exists")) return "duplicate_item";
  if (e.includes("unable to open") || e.includes("could not open")) return "keychain_unavailable";
  if (e.includes("errsecnodefaultkeychain") || e.includes("default keychain") || e.includes("no keychain")) return "no_keychain";
  if (e.includes("errsecitemnotfound") || e.includes("item could not be found")) return "item_not_found";
  if (e.includes("errsecinteractionnotallowed") || e.includes("interaction is not allowed") || e.includes("no user interaction")) return "interaction_not_allowed";
  if (e.includes("errsecusercanceled") || e.includes("cancel")) return "user_canceled";
  if (e.includes("errsecauthfailed") || e.includes("authorization") || e.includes("authentication") || e.includes("name or passphrase")) return "auth_failed";
  if (e.includes("locked") || e.includes("unlock")) return "keychain_locked";
  return "other";
}
