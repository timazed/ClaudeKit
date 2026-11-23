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
var chunk_j7dp96he_exports = {};
__export(chunk_j7dp96he_exports, {
  $dl: () => $dl,
  CS: () => CS,
  DOi: () => DOi,
  LOi: () => LOi,
  NOi: () => NOi,
  Udl: () => Udl,
  rkt: () => rkt
});
module.exports = __toCommonJS(chunk_j7dp96he_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var u = 80;
function CS() {
  if (!(0, import_chunk_865at33z.wa)() || !(0, import_chunk_865at33z.Vg)()) return;
  let o = (0, import_chunk_865at33z.tr)(), n = (0, import_chunk_865at33z.Sn)(), t = o?.accountUuid && n?.accountUuid && o.accountUuid !== n.accountUuid, e = o?.organizationUuid || t ? o : n;
  if (!e?.accountUuid) return;
  return { accountUuid: e.accountUuid, organizationUuid: e.organizationUuid };
}
async function DOi(o) {
  let n = CS();
  if (n && !(0, import_chunk_865at33z.uc)((0, import_chunk_865at33z.Sn)(), n)) await (0, import_chunk_865at33z.U9)(o);
}
function rkt(o, n) {
  if (!o?.accountUuid || !n) return false;
  return !(0, import_chunk_865at33z.uc)(o, n);
}
function $dl() {
  if ((0, import_chunk_f9x2f6cx.Se)() || (0, import_chunk_865at33z.Qt)()) return false;
  return (0, import_chunk_865at33z.b)("tengu_ticklish_moon", false);
}
async function Udl(o) {
  let n = (0, import_chunk_865at33z.Sn)();
  if (!n?.accountUuid || !(0, import_chunk_865at33z.Vg)()) return;
  let t = n.organizationUuid ?? "", e = (0, import_chunk_865at33z.ge)().knownAccounts?.[n.accountUuid], i = n.organizationName ?? e?.organizations?.[t] ?? null;
  if (e?.emailAddress === n.emailAddress && e.organizations?.[t] === i) return;
  await (0, import_chunk_865at33z.Ke)((r) => {
    let s = r.knownAccounts?.[n.accountUuid];
    if (s?.emailAddress === n.emailAddress && s.organizations?.[t] === i) return r;
    return { ...r, knownAccounts: { ...r.knownAccounts, [n.accountUuid]: { emailAddress: n.emailAddress, organizations: { ...s?.organizations, [t]: i } } } };
  }, o);
}
function LOi(o) {
  let n = (0, import_chunk_865at33z.ge)().knownAccounts?.[o.accountUuid];
  if (typeof n?.emailAddress !== "string") return;
  let t = n.organizations?.[o.organizationUuid ?? ""];
  return a(n.emailAddress, typeof t === "string" ? t : null);
}
function NOi(o) {
  let n = CS(), t = (0, import_chunk_865at33z.Sn)();
  if (n && !(0, import_chunk_865at33z.uc)(t, n)) {
    let i = LOi(n);
    return i && i !== o ? i : "your current account";
  }
  if (typeof t?.emailAddress !== "string") return "your current account";
  let e = a(t.emailAddress, t.organizationName);
  return e === o ? `${a(t.emailAddress, null)} (another organization)` : e;
}
function a(o, n) {
  return (0, import_chunk_f64qna2j.Tt)((0, import_chunk_xfj2cwfv.Pi)(n && n !== `${o}'s Organization` ? `${o} (${n})` : o).replace(/[\r\n]+/g, " "), u);
}
