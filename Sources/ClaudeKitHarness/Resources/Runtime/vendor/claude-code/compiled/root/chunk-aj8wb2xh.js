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
var chunk_aj8wb2xh_exports = {};
__export(chunk_aj8wb2xh_exports, {
  B0l: () => B0l,
  JIr: () => JIr,
  RVt: () => RVt
});
module.exports = __toCommonJS(chunk_aj8wb2xh_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_util = require("util");
function y(e) {
  return (0, import_chunk_zzrn5zap.lXi)(e) ?? [e];
}
async function JIr(e, r, n) {
  let s = y(e);
  return (0, import_chunk_zzrn5zap.mRt)(async () => {
    let a = [];
    for (let [c, o] of [...s.entries()].reverse()) {
      let u = false;
      try {
        let { success: i, transient: l } = await o.mutate((m) => {
          let f = w(r, m);
          return u = f !== m, f;
        }, v(e, c, n));
        a[c] = { name: o.name, result: l === void 0 ? { success: i } : { success: i, transient: l }, changed: u };
      } catch (i) {
        a[c] = { name: o.name, error: i };
      }
    }
    return a;
  });
}
async function RVt(e, r, n, s) {
  let a = [];
  for (let [c, o] of y(e).entries()) {
    let u = v(e, c, n), i;
    try {
      o.invalidateCache?.(s), i = await (o.readAsyncStrict?.(u, { inaccessibleAs: "failure", unreadableFileAs: "failure", unparsableEntryAs: "failure" }) ?? o.readAsync(u));
    } catch (l) {
      (0, import_chunk_w578pjby.t)(`[secureStorage] strict read of ${o.name} rejected: ${(0, import_chunk_jv7av99m.d)(l)}`, { level: "warn" }), i = import_chunk_zzrn5zap.bs;
    }
    if (i !== import_chunk_zzrn5zap.bs && i != null && !(0, import_chunk_0jve1fep.Le)(i)) i = import_chunk_zzrn5zap.bs;
    a.push({ name: o.name, value: i === import_chunk_zzrn5zap.bs ? import_chunk_zzrn5zap.bs : r((0, import_chunk_w578pjby.Ka)((o.osGuarded === true ? i : (0, import_chunk_zzrn5zap.dXi)(i ?? null)) ?? {})) });
  }
  return a;
}
async function B0l(e, r, n) {
  if ((0, import_chunk_zzrn5zap.Dze)() === "keychain" && !n(await e.readAsync() ?? {}) && await e.readAsyncStrict?.(void 0, { inaccessibleAs: "failure" }) === import_chunk_zzrn5zap.bs) return { confirmed: false, reason: "keychain_unreadable" };
  let s;
  try {
    s = (await JIr(e, r)).every((c) => !("error" in c) && c.result.success);
  } catch (a) {
    (0, import_chunk_w578pjby.t)(`[secureStorage] removal refused: ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "warn" }), s = (await RVt(e, n)).every((o) => o.value === false);
  }
  return s ? { confirmed: true } : { confirmed: false, reason: "credential_store_failed" };
}
function w(e, r) {
  if (!(0, import_chunk_0jve1fep.Le)(r) || Object.keys(r).length === 0) return r;
  let n = e((0, import_chunk_w578pjby.Ka)(r));
  if (!(0, import_chunk_0jve1fep.Le)(n)) throw new import_chunk_jv7av99m.A("removeFromEveryLeg: the remove function did not return a plain object (an async function returns a Promise). Nothing was written to this store.", "secure storage: a remove function did not return a plain object (caller bug, nothing written)");
  let s = g(r), a = g(n), c = Object.keys(a).find((o) => !Object.hasOwn(s, o));
  if (c !== void 0) throw new import_chunk_jv7av99m.A(`removeFromEveryLeg: the remove function added the key "${c}". It may only delete keys. Nothing was written to this store.`, "secure storage: a remove function added a key (caller bug, nothing written)");
  if (!h(s, a)) throw new import_chunk_jv7av99m.A("removeFromEveryLeg: the remove function added or changed a value. It may only delete keys. Nothing was written to this store.", "secure storage: a remove function added or changed a value (caller bug, nothing written)");
  return (0, import_util.isDeepStrictEqual)(a, s) ? r : a;
}
function h(e, r) {
  if (!(0, import_chunk_0jve1fep.Le)(e) || !(0, import_chunk_0jve1fep.Le)(r)) return (0, import_util.isDeepStrictEqual)(e, r);
  return Object.keys(r).every((n) => Object.hasOwn(e, n) && h(e[n], r[n]));
}
function g(e) {
  return (0, import_chunk_w578pjby.te)((0, import_chunk_w578pjby._)(e));
}
function v(e, r, n) {
  return (0, import_chunk_zzrn5zap.lXi)(e) === void 0 || r > 0 ? n : void 0;
}
