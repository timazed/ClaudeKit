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
var chunk_tv1nt56b_exports = {};
__export(chunk_tv1nt56b_exports, {
  HJt: () => HJt,
  J7r: () => J7r,
  MJt: () => MJt,
  TUe: () => TUe,
  X7r: () => X7r,
  ZBa: () => ZBa,
  b0t: () => b0t,
  cii: () => cii,
  cnt: () => cnt,
  d4e: () => d4e
});
module.exports = __toCommonJS(chunk_tv1nt56b_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_sak3f2zv = require("/$bunfs/root/chunk-sak3f2zv.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_os = require("os");
var import_crypto = require("crypto");
var import_crypto2 = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var Z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ privateKeyPkcs8B64: (0, import_chunk_adx6804h.n)(), rowPk: (0, import_chunk_adx6804h.n)().optional() })), U = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ keys: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()) }));
function v(e, r) {
  let o = e?.keys[r];
  if (o === void 0) return;
  let i = Z().safeParse(o);
  return i.success ? i.data : void 0;
}
var h = Symbol("deviceKeyStore.NO_KEYCHAIN");
function g(e) {
  return e === import_chunk_zzrn5zap.bs || e === h;
}
var C = "Claude Code-device-keys", I = 2e3, re = 4032, oe = 44, ne = /* @__PURE__ */ new Set([37, 50]);
function L(e) {
  try {
    let r = U().safeParse((0, import_chunk_w578pjby.te)(e));
    return r.success ? r.data : void 0;
  } catch {
    return;
  }
}
var H = Promise.resolve();
async function N(e, r) {
  let o = H, i = Promise.withResolvers();
  H = i.promise;
  try {
    await o;
    let s = (0, import_path.dirname)(e());
    await (0, import_chunk_w578pjby.le)().mkdir(s);
    let a = await (0, import_chunk_2yx6c1y2.Rc)((0, import_path.join)(s, ".device-keys"), { realpath: false, retries: { retries: 10, minTimeout: 100, maxTimeout: 1e3 }, stale: 15e3, onCompromised: (c) => (0, import_chunk_w578pjby.t)(`[deviceKeyStore] write lock compromised: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "warn" }) });
    try {
      return await r();
    } finally {
      await (0, import_chunk_2yx6c1y2.Kg)(a, "[deviceKeyStore] write lock");
    }
  } finally {
    i.resolve();
  }
}
function se(e) {
  return { name: "file", async read() {
    let r = e(), o;
    try {
      o = await (0, import_chunk_w578pjby.le)().readFile(r, { encoding: "utf8" });
    } catch (a) {
      let c = (0, import_chunk_jv7av99m.w)(a);
      if (c === "ENOENT") return null;
      return (0, import_chunk_w578pjby.t)(`[deviceKeyStore] file read failed: ${c ?? "unknown"}`, { level: "warn" }), import_chunk_zzrn5zap.bs;
    }
    if (!o.trim()) return null;
    let i = L(o);
    if (i) return i;
    let s = `${r}.corrupt-${Date.now()}-${process.pid}-${(0, import_crypto2.randomBytes)(3).toString("hex")}`;
    try {
      await (0, import_chunk_q7qjcthc.ra)(r, s);
    } catch (a) {
      return (0, import_chunk_w578pjby.t)(`[deviceKeyStore] device-key file is not a device-key document and could not be set aside: ${(0, import_chunk_jv7av99m.w)(a) ?? "unknown"}`, { level: "warn" }), import_chunk_zzrn5zap.bs;
    }
    return (0, import_chunk_w578pjby.t)(`[deviceKeyStore] device-key file was not a device-key document; set aside as ${s} and starting fresh`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("device_key_store", "corrupt_quarantined"), null;
  }, async write(r) {
    let o = e();
    try {
      return await (0, import_chunk_w578pjby.le)().mkdir((0, import_path.dirname)(o)), await (0, import_chunk_q7qjcthc.yr)(o, (0, import_chunk_w578pjby._)(r), 384), await (0, import_promises.chmod)(o, 384), true;
    } catch (i) {
      return (0, import_chunk_w578pjby.t)(`[deviceKeyStore] file write failed: ${(0, import_chunk_jv7av99m.w)(i) ?? "unknown"}`, { level: "warn" }), false;
    }
  }, withWriteLock(r) {
    return N(e, r);
  } };
}
function ae(e) {
  return { name: "keychain", async read() {
    let { stdout: r, code: o } = await (0, import_chunk_7fsmgfxx.kt)("security", ["find-generic-password", "-a", (0, import_chunk_hazyxdac.J1)(), "-w", "-s", C], { useCwd: false, preserveOutputOnError: false, timeout: I });
    if (o === oe) return null;
    if (ne.has(o)) return (0, import_chunk_w578pjby.t)(`[deviceKeyStore] this account has no login keychain (security exited ${o}); it holds no device key`), h;
    if (o !== 0) return (0, import_chunk_w578pjby.t)(`[deviceKeyStore] keychain read failed: security exited ${o}`, { level: "warn" }), import_chunk_zzrn5zap.bs;
    let i = r.trim();
    if (!i) return null;
    let s = L(i);
    if (!s) return (0, import_chunk_w578pjby.t)("[deviceKeyStore] keychain item is not a device-key document", { level: "warn" }), import_chunk_zzrn5zap.bs;
    return s;
  }, async write(r) {
    let o = (0, import_chunk_hazyxdac.J1)(), i = Buffer.from((0, import_chunk_w578pjby._)(r), "utf8").toString("hex"), s = `add-generic-password -U -a "${o}" -s "${C}" -X "${i}"
`;
    try {
      return (s.length <= re ? await (0, import_chunk_9zdrdv25.gS)("security", ["-i"], { input: s, stdio: ["pipe", "pipe", "pipe"], reject: false, timeout: I }) : await (0, import_chunk_9zdrdv25.gS)("security", ["add-generic-password", "-U", "-a", o, "-s", C, "-X", i], { stdio: ["ignore", "pipe", "pipe"], reject: false, timeout: I })).exitCode === 0;
    } catch {
      return false;
    }
  }, withWriteLock(r) {
    return N(e, r);
  } };
}
var Qe = se(import_chunk_p1ewvgeh.OUn), ce = ae(import_chunk_p1ewvgeh.OUn), ye = { name: "diskless", read: async () => import_chunk_zzrn5zap.bs, write: async () => false, withWriteLock: async () => {
  throw Error("This hosted session (claude-code-server) keeps no device key on its machine");
} }, O;
function K() {
  if (O) return O;
  if ((0, import_chunk_f9x2f6cx.Y)()) return ye;
  return ce;
}
function R() {
  return ge;
}
var b = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear());
function M(e) {
  return e?.inMemory === true || (0, import_chunk_cg8dqz0a.x)() === "windows" && (0, import_chunk_zzrn5zap.uXi)();
}
var ge = { async load(e, r) {
  let o = await z(e, r, "load"), i = o && k(o.stored);
  return o && i ? E(e, o, i, r) : void 0;
}, async loadOrCreate(e, r) {
  let o = await z(e, r, "create");
  if (o) {
    let f = k(o.stored);
    if (f) return E(e, o, f, r);
    if ((0, import_chunk_w578pjby.t)("[deviceKey] stored device key is unreadable; minting a new one"), o.location === "legacy") await W(e, o, r).catch((D) => {
      (0, import_chunk_w578pjby.t)(`[deviceKey] could not retire the unreadable device key: ${(0, import_chunk_jv7av99m.d)(D)}`);
    });
  }
  let i = await ke(e, r), s = i && k(i.stored);
  if (i && s) return (0, import_chunk_w578pjby.t)(`[deviceKey] adopting the device key already held in the ${i.location === "item" ? "device-key item" : "credentials store"}`), E(e, i, s, r);
  let a = { privateKeyPkcs8B64: (0, import_crypto.generateKeyPairSync)("ec", { namedCurve: "P-256" }).privateKey.export({ type: "pkcs8", format: "der" }).toString("base64") }, c;
  try {
    c = M(r) ? await pe(e, a, r) : await we(e, a);
  } catch (f) {
    throw f instanceof import_chunk_jv7av99m.A ? f : new import_chunk_jv7av99m.A(`deviceRegistry: device key could not be persisted (${(0, import_chunk_jv7av99m.d)(f)})`, "deviceRegistry: device key not persisted", "key_not_persisted");
  }
  let y = c && k(c.stored);
  if (!c || !y) throw new import_chunk_jv7av99m.A("deviceRegistry: device key could not be persisted", "deviceRegistry: device key not persisted", "key_not_persisted");
  return E(e, c, y, r);
} };
function we(e, r) {
  let o = K();
  return o.withWriteLock(async () => {
    let i = await o.read();
    if (g(i)) return T(i);
    let s = v(i, e);
    if (s && k(s)) return { location: "item", stored: s };
    if (!await o.write({ ...i, keys: { ...i?.keys, [e]: r } })) {
      (0, import_chunk_cqa9hrgx.l)("device_key_store", "item_write_failed");
      return;
    }
    let c = await o.read(), y = g(c) ? void 0 : v(c, e);
    if (!y) (0, import_chunk_cqa9hrgx.l)("device_key_store", "readback_mismatch");
    return y && { location: "item", stored: y };
  });
}
async function pe(e, r, o) {
  await (0, import_chunk_zzrn5zap.Er)().mutate((s) => {
    if (s.coworkRemoteDevice?.[e]) return s;
    return { ...s, coworkRemoteDevice: { ...s.coworkRemoteDevice, [e]: r } };
  }, o);
  let i = (await (0, import_chunk_zzrn5zap.Er)().readAsync(o))?.coworkRemoteDevice?.[e];
  return i && { location: "legacy", stored: i };
}
async function z(e, r, o) {
  let i = (await (0, import_chunk_zzrn5zap.Er)().readAsync(r))?.coworkRemoteDevice?.[e];
  if (M(r)) {
    if (i || r?.inMemory === true) return i && { location: "legacy", stored: i };
    let c = await K().read(), y = g(c) ? void 0 : v(c, e);
    return y && { location: "item", stored: y };
  }
  let s = await K().read();
  if (g(s)) {
    if (i && k(i)) {
      if (s === import_chunk_zzrn5zap.bs) (0, import_chunk_cqa9hrgx.l)("device_key_store", "item_unreadable_using_legacy");
      return { location: "legacy", stored: i };
    }
    if (s === h && o === "load") return;
    return T(s);
  }
  let a = v(s, e);
  if (a) {
    if (i?.privateKeyPkcs8B64 === a.privateKeyPkcs8B64 && (o === "create" || !b.has(e))) await j(e, a.privateKeyPkcs8B64, r);
    return { location: "item", stored: a };
  }
  if (!i) return;
  if (o === "load" && b.has(e)) return { location: "legacy", stored: i };
  return { location: await _e(e, i, r), stored: i };
}
function T(e) {
  if (e === h) throw (0, import_chunk_cqa9hrgx.l)("device_key_store", "no_keychain"), new import_chunk_jv7av99m.A("deviceRegistry: this account has no login keychain to hold a device key", "deviceRegistry: no login keychain", "no_keychain");
  throw (0, import_chunk_cqa9hrgx.l)("device_key_store", "item_read_failed"), new import_chunk_jv7av99m.A("deviceRegistry: the device-key store could not be read", "deviceRegistry: device-key store unreadable", "key_store_unreadable");
}
async function ke(e, r) {
  if (r?.inMemory !== true) {
    let i = await K().read();
    if (g(i)) return T(i);
    let s = v(i, e);
    if (s && k(s)) return { location: "item", stored: s };
  }
  let o = (0, import_chunk_zzrn5zap.Er)();
  for (let i of [{ inaccessibleAs: "failure" }, void 0]) {
    let s = await (o.readAsyncStrict?.(r, i) ?? o.readAsync(r));
    if (s === import_chunk_zzrn5zap.bs) throw (0, import_chunk_cqa9hrgx.l)("device_key_store", "legacy_read_failed"), new import_chunk_jv7av99m.A("deviceRegistry: the credentials store could not be read for a device key", "deviceRegistry: credentials store unreadable", "key_store_unreadable");
    let a = s?.coworkRemoteDevice?.[e];
    if (a && k(a)) return { location: "legacy", stored: a };
  }
  return;
}
async function _e(e, r, o) {
  let i, s = K();
  try {
    i = await s.withWriteLock(async () => {
      let a = await s.read();
      if (g(a)) return S(e, a === h ? "no_keychain" : "item_read_failed");
      if (v(a, e) === void 0) {
        if (!await s.write({ ...a, keys: { ...a?.keys, [e]: r } })) return S(e, "item_write_failed");
      }
      let c = await s.read(), y = g(c) ? void 0 : v(c, e);
      if (y === void 0) return S(e, "readback_mismatch");
      if (y.privateKeyPkcs8B64 !== r.privateKeyPkcs8B64 || y.rowPk !== r.rowPk) return S(e, "readback_foreign_key");
      return "item";
    });
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`[deviceKey] could not take the device-key lock to move the device key: ${(0, import_chunk_jv7av99m.d)(a)}`), S(e, "lock_unavailable");
  }
  if (i === "item") await j(e, r.privateKeyPkcs8B64, o);
  return i;
}
function S(e, r) {
  return b.add(e), (0, import_chunk_w578pjby.t)(`[deviceKey] device key stays in the credentials store for now (${r})`), (0, import_chunk_cqa9hrgx.l)("device_key_store", r), "legacy";
}
async function j(e, r, o) {
  let i = false;
  try {
    if ((await (0, import_chunk_zzrn5zap.Er)().mutate((a) => {
      if (a.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== r) return a;
      i = true;
      let { [e]: c, ...y } = a.coworkRemoteDevice;
      return { ...a, coworkRemoteDevice: y };
    }, o)).success) {
      if (i) (0, import_chunk_w578pjby.t)("[deviceKey] moved the device key out of the credentials store into its own item"), (0, import_chunk_cqa9hrgx.u)("device_key_store");
      return;
    }
  } catch (s) {
    (0, import_chunk_w578pjby.t)(`[deviceKey] could not clear the legacy device key: ${(0, import_chunk_jv7av99m.d)(s)}`);
  }
  S(e, "legacy_delete_failed");
}
function k(e) {
  try {
    let r = (0, import_crypto.createPrivateKey)({ key: Buffer.from(e.privateKeyPkcs8B64, "base64"), format: "der", type: "pkcs8" });
    return r.asymmetricKeyType === "ec" && r.asymmetricKeyDetails?.namedCurve === "prime256v1" ? r : void 0;
  } catch {
    return;
  }
}
function E(e, { location: r, stored: o }, i, s) {
  return { rowPk: o.rowPk, publicKeySpkiB64: (0, import_crypto.createPublicKey)(i).export({ type: "spki", format: "der" }).toString("base64"), sign: async (a) => (0, import_crypto.sign)("sha256", a, { key: i, dsaEncoding: "ieee-p1363" }), setRowPk: (a) => V(e, { location: r, stored: o }, (c) => {
    if (c.rowPk === a) return c;
    if (a === void 0) {
      let { rowPk: y, ...f } = c;
      return f;
    }
    return { ...c, rowPk: a };
  }, s), drop: () => W(e, { location: r, stored: o }, s) };
}
async function V(e, { location: r, stored: o }, i, s) {
  if (r === "legacy") {
    await (0, import_chunk_zzrn5zap.Er)().mutate((c) => {
      let y = c.coworkRemoteDevice?.[e];
      if (y?.privateKeyPkcs8B64 !== o.privateKeyPkcs8B64) return c;
      let f = i(y);
      if (f === y) return c;
      let { [e]: D, ...P } = c.coworkRemoteDevice ?? {};
      return { ...c, coworkRemoteDevice: f === void 0 ? P : { ...P, [e]: f } };
    }, s);
    return;
  }
  let a = K();
  await a.withWriteLock(async () => {
    let c = await a.read();
    if (g(c)) throw new import_chunk_jv7av99m.A(`deviceRegistry: the ${a.name} device-key store could not be read`, "deviceRegistry: device-key store unreadable");
    let y = v(c, e);
    if (c === null || y?.privateKeyPkcs8B64 !== o.privateKeyPkcs8B64) return;
    let f = i(y);
    if (f === y) return;
    let { [e]: D, ...P } = c.keys;
    if (!await a.write({ ...c, keys: f === void 0 ? P : { ...P, [e]: f } })) throw new import_chunk_jv7av99m.A(`deviceRegistry: the ${a.name} device-key store refused the write`, "deviceRegistry: device-key store write refused");
  });
}
function W(e, r, o) {
  return V(e, r, () => {
    return;
  }, o);
}
var Ke = "/api/organizations/:orgUUID/cowork/remote_devices", Se = "cowork_remote_device_limit_reached", Pe = "account_session_invalid", Re = "cowork_remote_device_registration_revoked";
async function X7r(e, r) {
  return (await MJt(e, r))?.rowPk;
}
async function cii(e, r) {
  let o = await R().load(e, r), i = (0, import_chunk_mzmcvr6c.ht)(o?.rowPk)?.toLowerCase();
  return o && i ? { rowPk: i, key: o } : void 0;
}
async function MJt(e, r, o) {
  if (o?.accountUuid === e) return o;
  let i = await cii(e, r);
  return i && { accountUuid: e, ...i };
}
function Ee() {
  return "darwin";
}
function Ce(e) {
  return (0, import_chunk_7cfjrnwy.Ea)(e.trim(), 255) || (0, import_chunk_7cfjrnwy.Ea)(cnt().trim(), 255);
}
async function b0t(e, r, o, { relearn: i = false } = {}) {
  try {
    if (!(0, import_chunk_sak3f2zv.c4e)()) throw new d4e("client egress policy");
    return await Ie(e, r, o, i);
  } catch (s) {
    throw (0, import_chunk_cqa9hrgx.m)("device_registry_register", s instanceof import_chunk_jv7av99m.A && s.errorClass || "unexpected_error"), s;
  }
}
async function Ie(e, r, o, i) {
  let s = await R().loadOrCreate(e, o);
  if (s.rowPk && !i) return (0, import_chunk_cqa9hrgx.u)("device_registry_register"), { deviceUUID: s.rowPk, key: s };
  let a = await import_chunk_865at33z.zt.post(Ke, { display_name: Ce(r), platform: Ee(), public_key: s.publicKeySpkiB64 }, { auth: "teleport-org", headers: { "anthropic-beta": import_chunk_ephf358x.ff }, timeout: 1e4, validateStatus: () => true, credentials: o }).catch((D) => {
    throw new import_chunk_jv7av99m.A(`deviceRegistry: register request failed (${(0, import_chunk_jv7av99m.d)(D)})`, "deviceRegistry: register request failed", "request_failed");
  });
  if (!a.ok) throw new import_chunk_jv7av99m.A(`deviceRegistry: register not sent (${a.reason})`, "deviceRegistry: register not sent", "not_sent");
  if ((0, import_chunk_w578pjby.t)(`[deviceRegistry] register status=${a.status} request_id=${String(a.response.headers?.["request-id"] ?? "")}`), a.status === 400 && a.data?.error?.details?.error_code === Se) throw new HJt();
  if (a.status === 403 && a.data?.error?.details?.error_code !== Pe || a.status === 404) throw new d4e(`HTTP ${a.status}`);
  let c = a.data?.error?.details?.error_code;
  if (c === Re || a.status === 409 && c === void 0) throw new TUe(s.publicKeySpkiB64);
  let y = (0, import_chunk_mzmcvr6c.ht)(a.data?.id);
  if (a.status !== 201 || y === null) throw new import_chunk_jv7av99m.A(`deviceRegistry: register ${a.status}: ${(0, import_chunk_7cfjrnwy.ee)(String((0, import_chunk_w578pjby._)(a.data) ?? ""), 200)}`, "deviceRegistry: register HTTP error", "http_error");
  if (a.data?.revoked_at !== null && a.data?.revoked_at !== void 0) throw new TUe(s.publicKeySpkiB64);
  let f = y.toLowerCase();
  return await s.setRowPk(f).catch((D) => {
    (0, import_chunk_w578pjby.t)(`[deviceRegistry] registered device row=${f} but could not cache it: ${(0, import_chunk_jv7av99m.d)(D)}`);
  }), (0, import_chunk_w578pjby.t)(`[deviceRegistry] registered device row=${f}`), (0, import_chunk_cqa9hrgx.u)("device_registry_register"), { deviceUUID: f, key: s };
}
class HJt extends import_chunk_jv7av99m.A {
  constructor() {
    super("deviceRegistry: account device limit reached", "deviceRegistry: account device limit reached", "limit_reached");
  }
}
class d4e extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(`deviceRegistry: device registration unavailable for this account or organization (${e})`, "deviceRegistry: device registration unavailable for this account or organization", "registration_unavailable");
  }
}
class TUe extends import_chunk_jv7av99m.A {
  refusedPublicKey;
  constructor(e) {
    super("deviceRegistry: this machine's device registration was removed from the account", "deviceRegistry: device registration revoked", "registration_revoked");
    this.refusedPublicKey = e;
  }
}
async function ZBa(e, r, o, i) {
  return await X(e, o, i, 2), b0t(e, r, i, { relearn: true });
}
async function X(e, r, o, i) {
  let s = await R().load(e, o);
  if (s?.publicKeySpkiB64 !== r) return;
  if (i === 0) throw q("it is still stored after being dropped");
  return await s.drop().catch((a) => {
    throw q((0, import_chunk_jv7av99m.d)(a));
  }), X(e, r, o, i - 1);
}
function q(e) {
  return new import_chunk_jv7av99m.A(`deviceRegistry: the removed device's key could not be retired (${e})`, "deviceRegistry: device key not retired", "key_not_retired");
}
async function J7r(e, r) {
  await (await R().load(e, r))?.setRowPk(void 0);
}
function cnt() {
  return `Claude Code on ${(0, import_os.hostname)()} \xB7 ${(0, import_chunk_cg8dqz0a.Nft)("darwin")}`;
}
