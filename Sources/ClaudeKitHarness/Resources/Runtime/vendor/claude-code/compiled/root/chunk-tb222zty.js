const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_tb222zty_exports = {};
__export(chunk_tb222zty_exports, {
  FY: () => FY,
  IJt: () => IJt,
  N8o: () => N8o,
  OJl: () => OJl,
  Ygt: () => Ygt,
  aii: () => aii,
  dii: () => dii,
  lii: () => lii
});
module.exports = __toCommonJS(chunk_tb222zty_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_tv1nt56b = require("/$bunfs/root/chunk-tv1nt56b.js");
var import_chunk_7zd54r6w = require("/$bunfs/root/chunk-7zd54r6w.js");
var import_chunk_2e99ehkv = require("/$bunfs/root/chunk-2e99ehkv.js");
var import_chunk_sak3f2zv = require("/$bunfs/root/chunk-sak3f2zv.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var Ygt = "creg_", w = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function FY(e) {
  if (!(0, import_chunk_mzmcvr6c.ht)(e)) throw new import_chunk_jv7av99m.A(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex");
}
function R(e, n, i, o) {
  let s = Buffer.alloc(w.length + 48 + 8), r = 0;
  return r += w.copy(s, r), r += FY(e).copy(s, r), r += FY(n).copy(s, r), r += FY(i).copy(s, r), s.writeBigUInt64BE(BigInt(o), r), s;
}
async function S(e, n, i, o) {
  let s = Date.now(), r = await o.sign(R(e, n, i, s));
  return { deviceUUID: i, kid: Ygt + i, signature: r.toString("base64"), issuedAt: new Date(s).toISOString(), signedOver: { orgUuid: e, accountUuid: n, issuedAtMs: s } };
}
var I = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"), E = "00000000-0000-0000-0000-000000000000";
function T({ orgUuid: e, accountUuid: n, sessionUuid: i, expectedCurrentDeviceUuid: o, newDeviceUuid: s, issuedAtMs: r }) {
  let c = Buffer.alloc(I.length + 80 + 8), g = 0;
  return g += I.copy(c, g), g += FY(e).copy(c, g), g += FY(n).copy(c, g), g += FY(i).copy(c, g), g += FY(o ?? E).copy(c, g), g += FY(s).copy(c, g), c.writeBigUInt64BE(BigInt(r), g), c;
}
async function aii({ orgUuid: e, accountUuid: n, sessionUuid: i, deviceUUID: o, key: s, now: r = Date.now }) {
  let c = r(), g = await s.sign(T({ orgUuid: e, accountUuid: n, sessionUuid: i, expectedCurrentDeviceUuid: void 0, newDeviceUuid: o, issuedAtMs: c }));
  return { deviceUUID: o, kid: Ygt + o, signature: g.toString("base64"), issuedAt: new Date(c).toISOString() };
}
var H = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"), L = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"), O = /^[a-z0-9_.]{1,48}$/, x = 8;
function F(e) {
  return Buffer.concat([H, ...b(e), k(e.issuedAtMs)]);
}
function N8o(e) {
  let n = (0, import_chunk_4smdap7r.M)(e).sort();
  return e.length >= 1 && e.length <= x && e.every((i) => O.test(i)) && n.length === e.length && n.every((i, o) => i === e[o]) ? n : void 0;
}
function N(e, n) {
  if (N8o(n) === void 0) throw new import_chunk_jv7av99m.A("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
  return Buffer.concat([L, ...b(e), _(n.length), ...n.flatMap((i) => {
    let o = Buffer.from(i, "ascii");
    return [_(o.length), o];
  }), k(e.issuedAtMs)]);
}
async function lii({ orgUuid: e, accountUuid: n, sessionUuid: i, deviceUUID: o, request: s, capabilities: r, key: c, now: g = Date.now }) {
  let h = g(), B = { orgUuid: e, accountUuid: n, sessionUuid: i, deviceUuid: o, request: s, issuedAtMs: h }, m = await c.sign(r === void 0 ? F(B) : N(B, r));
  return { deviceUUID: o, kid: Ygt + o, signature: m.toString("base64"), issuedAt: new Date(h).toISOString() };
}
var C = Buffer.from("anthropic.ccr.tool_host_resume.v1", "utf8");
function K(e, n) {
  let i = Buffer.from(n, "utf8");
  if (i.length === 0 || i.length > 65535) throw new import_chunk_jv7av99m.A("deviceBind: tool-host resume nonce must be 1 to 65535 bytes", "deviceBind: malformed resume nonce");
  return Buffer.concat([C, ...b(e), _(i.length), i, k(e.issuedAtMs)]);
}
async function dii({ deviceUUID: e, nonce: n, key: i, now: o = Date.now, ...s }) {
  let r = o(), c = await i.sign(K({ ...s, deviceUuid: e, issuedAtMs: r }, n));
  return { deviceUUID: e, kid: Ygt + e, signature: c.toString("base64"), issuedAt: new Date(r).toISOString() };
}
async function q() {
  return (await P()).ok;
}
async function P() {
  let { trustedDeviceTokenForBind: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-y8vskpae.js")));
  return e(void 0);
}
async function IJt(e) {
  if (e.launchedFromHome === void 0) await (0, import_chunk_d775ds6c.nje)();
  if ((e.launchedFromHome ?? import_chunk_d775ds6c.Msn)()) return (0, import_chunk_w578pjby.Zp)("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? import_chunk_sak3f2zv.c4e)();
  } catch {
    n = false;
  }
  if (!n) return (0, import_chunk_w578pjby.Zp)("egress");
  let i = (0, import_chunk_7zd54r6w.uii)({ storedAccountUuid: e.accountUuid, hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : (0, import_chunk_7zd54r6w.fii)(e.credentials)) });
  if (i.status === "missing") return (0, import_chunk_w578pjby.Zp)("account");
  if (i.status === "mismatch") return (0, import_chunk_w578pjby.Zp)("account_mismatch");
  return await (e.hasDeviceProof ?? q)().catch(() => false) ? (0, import_chunk_w578pjby.oy)({ accountUuid: i.accountUuid, source: i.source }) : (0, import_chunk_w578pjby.Zp)("no_device_proof");
}
async function OJl(e) {
  let n = e.isEnabled ?? import_chunk_t9k2xeez.ON;
  try {
    if (!await n()) return (0, import_chunk_w578pjby.Zp)("gate");
  } catch (m) {
    return (0, import_chunk_w578pjby.Zp)(y("gate", m));
  }
  let i = "no_device_proof", o = await IJt({ ...e, hasDeviceProof: e.hasDeviceProof ?? (async () => {
    let m = await P();
    if (!m.ok && m.error !== "not_given") i = m.error;
    return m.ok;
  }) });
  if (!o.ok) {
    let m = V(o.error);
    return o.error === "no_device_proof" ? (0, import_chunk_w578pjby.Zp)(i) : m;
  }
  (0, import_chunk_y53wbr8a.a)("tengu_device_bind_account", { source: (0, import_chunk_78g0060s.f)(o.value.source) });
  let { accountUuid: s } = o.value, r = e.displayName ?? (0, import_chunk_tv1nt56b.cnt)(), c = false, g = async (m) => {
    try {
      return (0, import_chunk_w578pjby.oy)(await (0, import_chunk_tv1nt56b.b0t)(s, r, e.credentials, { relearn: m }));
    } catch (v) {
      if (!(v instanceof import_chunk_tv1nt56b.TUe) || e.confirmReenroll === void 0 || c) return (0, import_chunk_w578pjby.Zp)(y("register", v));
      return c = true, await j(e.confirmReenroll) ? h(v.refusedPublicKey) : (0, import_chunk_w578pjby.Zp)(y("register", v));
    }
  }, h = async (m) => {
    try {
      return (0, import_chunk_w578pjby.oy)(await (0, import_chunk_cqa9hrgx.qo)("device_reenroll", () => (0, import_chunk_tv1nt56b.ZBa)(s, r, m, e.credentials), W));
    } catch (v) {
      return (0, import_chunk_w578pjby.Zp)(y("register", v));
    }
  }, B = async (m) => {
    let v = await g(m);
    if (!v.ok) return v;
    let { deviceUUID: D, key: U } = v.value;
    return (0, import_chunk_w578pjby.oy)({ deviceUUID: D, held: { accountUuid: s, rowPk: D, key: U }, sign: async () => {
      try {
        let p = await S(e.orgUuid, s, D, U);
        return (0, import_chunk_cqa9hrgx.u)("device_bind"), p;
      } catch (p) {
        y("sign", p);
        return;
      }
    }, reregister: async () => (await (0, import_chunk_tv1nt56b.J7r)(s, e.credentials).catch((p) => {
      (0, import_chunk_w578pjby.t)(`[deviceBind] could not forget the cached device id: ${p instanceof Error ? p.message : String(p)}`);
    }), B(true)) });
  };
  return B(false);
}
function b({ orgUuid: e, accountUuid: n, sessionUuid: i, deviceUuid: o, request: s }) {
  let r = Buffer.from(s.workId, "utf8"), c = Buffer.from(s.environmentId, "utf8");
  if (r.length === 0 || c.length === 0 || r.length > 65535 || c.length > 65535) throw new import_chunk_jv7av99m.A("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
  return [FY(e), FY(n), FY(i), FY(o), _(r.length), r, _(c.length), c];
}
function _(e) {
  let n = Buffer.alloc(2);
  return n.writeUInt16BE(e), n;
}
function k(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n;
}
function V(e) {
  return (0, import_chunk_y53wbr8a.a)("tengu_device_bind_skipped", { reason: (0, import_chunk_78g0060s.f)(e), ...(0, import_chunk_2e99ehkv.CUe)(e) }), (0, import_chunk_w578pjby.Zp)(e);
}
async function j(e) {
  try {
    let n = await e();
    return (0, import_chunk_y53wbr8a.a)("tengu_device_reenroll", { confirmed: n, prompt_failed: false }), n;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[deviceBind] could not ask whether to register this machine again: ${(0, import_chunk_jv7av99m.d)(n)}`), (0, import_chunk_y53wbr8a.a)("tengu_device_reenroll", { confirmed: false, prompt_failed: true }), false;
  }
}
function W(e) {
  return e instanceof import_chunk_jv7av99m.A && e.errorClass || "unexpected_error";
}
function y(e, n) {
  return (0, import_chunk_y53wbr8a.a)("tengu_device_bind_failed", { phase: (0, import_chunk_78g0060s.f)(e), limit_reached: n instanceof import_chunk_tv1nt56b.HJt, registration_unavailable: n instanceof import_chunk_tv1nt56b.d4e, revoked: n instanceof import_chunk_tv1nt56b.TUe }), (0, import_chunk_cqa9hrgx.l)("device_bind", n instanceof import_chunk_jv7av99m.A && n.errorClass || e), (0, import_chunk_w578pjby.t)(`[deviceBind] continuing unbound: ${n instanceof Error ? n.message : String(n)}`), n instanceof import_chunk_tv1nt56b.HJt ? "limit_reached" : n instanceof import_chunk_tv1nt56b.d4e ? "registration_unavailable" : n instanceof import_chunk_tv1nt56b.TUe ? "device_revoked" : n instanceof import_chunk_jv7av99m.A && n.errorClass === "no_keychain" ? "no_keychain" : e;
}
