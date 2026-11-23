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
var chunk_tks6zd9m_exports = {};
__export(chunk_tks6zd9m_exports, {
  $$s: () => $$s,
  B$s: () => B$s,
  F$s: () => F$s,
  G$s: () => G$s,
  OFo: () => OFo,
  S9l: () => S9l,
  U$s: () => U$s,
  W$s: () => W$s,
  j$s: () => j$s,
  y9l: () => y9l,
  z$s: () => z$s
});
module.exports = __toCommonJS(chunk_tks6zd9m_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_tv1nt56b = require("/$bunfs/root/chunk-tv1nt56b.js");
var import_chunk_q3twytbf = require("/$bunfs/root/chunk-q3twytbf.js");
var import_chunk_fvm45mg0 = require("/$bunfs/root/chunk-fvm45mg0.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_nhch6tkn = require("/$bunfs/root/chunk-nhch6tkn.js");
var import_chunk_d1nhs44g = require("/$bunfs/root/chunk-d1nhs44g.js");
var import_chunk_7zd54r6w = require("/$bunfs/root/chunk-7zd54r6w.js");
var import_chunk_sak3f2zv = require("/$bunfs/root/chunk-sak3f2zv.js");
async function F$s(e) {
  let i = e.session.then((r) => ({ read: true, session: r }), (r) => ({ read: false, error: r }));
  if (!await (e.isEnabled ?? import_chunk_t9k2xeez.bjn)().catch(() => false)) return { status: "disabled" };
  let o = await i;
  if (!o.read) return B("session_unreadable", o.error);
  if (o.session.archived) return { status: "disabled" };
  if (o.session.boundDeviceId === void 0) {
    let r = await (e.readUnboundCreateReason ?? ((y) => (0, import_chunk_fvm45mg0.Pei)(y, import_chunk_sjqze7qg.LXa, (0, import_chunk_fvm45mg0.Oei)(e.storageV5))))(e.sessionId).catch(() => {
      return;
    });
    return (0, import_chunk_y53wbr8a.a)("tengu_device_bind_attach", { outcome: (0, import_chunk_78g0060s.S)("session_unbound"), created_here: r !== void 0 }), r === void 0 ? { status: "not_applicable" } : { status: "created_unbound", reason: r };
  }
  let s;
  try {
    s = (e.isEgressAllowed ?? import_chunk_sak3f2zv.c4e)();
  } catch {
    s = false;
  }
  if (!s) return D("egress");
  let n = await (e.getAccount?.() ?? (0, import_chunk_7zd54r6w.Y2)(e.credentials));
  if (n.status === "missing") return D("account");
  if (n.status === "mismatch") return D("account_mismatch");
  let g = await (e.loadLocalDevice?.(n.accountUuid) ?? (0, import_chunk_tv1nt56b.MJt)(n.accountUuid, e.credentials)).then((r) => ({ read: true, held: r }), (r) => ({ read: false, error: r }));
  if (!g.read) return B("local_device_unreadable", g.error);
  if (g.held === void 0) return D("no_device_here");
  let v = g.held.rowPk.toLowerCase();
  if (v !== o.session.boundDeviceId.toLowerCase()) return D("other_device");
  let { toolHostLink: h } = o.session;
  return (0, import_chunk_y53wbr8a.a)("tengu_device_bind_attach", { outcome: (0, import_chunk_78g0060s.S)("bound"), tool_host_link: (0, import_chunk_78g0060s.f)(h) }), (0, import_chunk_cqa9hrgx.u)("device_bind_attach"), { status: "bound", deviceId: v, held: g.held, toolHostLink: h };
}
function $$s(e) {
  return { archived: e.session_status === "archived", boundDeviceId: e.bound_device_uuid, toolHostLink: (0, import_chunk_q3twytbf.kpa)(e.tool_host_status, e.device_bind_posture) };
}
async function y9l(e, { isEnabled: i = import_chunk_t9k2xeez.bjn, isEgressAllowed: o = import_chunk_sak3f2zv.c4e } = {}) {
  if (e.catch(() => {
  }), !await i().catch(() => false)) return;
  let { archived: s, boundDeviceId: n } = await e;
  if (s) return;
  try {
    return o() ? n : void 0;
  } catch {
    return;
  }
}
function U$s(e) {
  return e.then((i) => i.status === "bound", () => false);
}
function B$s(e) {
  return e.then((i) => i.status === "bound" ? i.deviceId : void 0, () => {
    return;
  });
}
function W$s(e) {
  return e.then((i) => i.status === "bound" ? i.held : void 0, () => {
    return;
  });
}
function k({ viewerOnly: e, binding: i }) {
  return !e && i.status === "bound" && (0, import_chunk_q3twytbf.RVe)(i.toolHostLink) ? { owner: true, deviceId: i.deviceId } : { owner: false };
}
async function OFo(e, i) {
  try {
    let o = await i();
    return o.session_status !== "archived" && typeof o.bound_device_uuid === "string" && o.bound_device_uuid.toLowerCase() === e.toLowerCase();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[attachBinding] re-reading the session's binding failed (keeping it): ${(0, import_chunk_jv7av99m.d)(o)}`);
    return;
  }
}
async function S9l({ sessionId: e, binding: i, deviceBridge: o, onNotice: s, repositoryTrust: n, readSession: g }) {
  return (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1hj7p44x.js")))).servedToolsAttachOptions({ owner: i.then((v) => {
    let h = k({ viewerOnly: false, binding: v });
    return () => h;
  }, () => () => ({ owner: false })), cloudClient: true, ...o && { deviceBridge: o }, ...s && { onNotice: s }, ...n && { repositoryTrust: n }, stillBound: () => i.then((v) => v.status === "bound" ? OFo(v.deviceId, g) : void 0, () => {
    return;
  }), plumbing: (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-tznp3s0z.js")))).servedSessionPlumbing(e) });
}
var j$s = "This session can run tools on this computer, so Claude Code must first keep a copy of this folder's settings, and it could not. Check free disk space and that ~/.claude/state can be written, then attach again; add --debug to see the cause.";
function G$s(e, i = {}) {
  let o = { status: "disabled" }, s = (c, p) => (0, import_chunk_w578pjby.t)(`[remote-tools] ${c}: ${p}`), n = [], g = (c) => {
    let p = n ?? [];
    n = void 0, p.forEach(([b, _]) => {
      try {
        c(b, _);
      } catch {
        s(b, _);
      }
    });
  }, v = i.onNotice ?? s, h = false, r, y, A = e.catch((c) => ((0, import_chunk_w578pjby.t)(`[deviceBind] attach binding failed unexpectedly: ${(0, import_chunk_jv7av99m.d)(c)}`), o)).then(async (c) => {
    if (c.status !== "bound" || (0, import_chunk_q3twytbf.RVe)(c.toolHostLink)) return c;
    if (h) return o;
    let p = i.loadHoldSettings ? await i.loadHoldSettings() : (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-n6bc0fjy.js")))).holdSettingsBesideAHelper;
    if (h) return o;
    return r = p((b, _) => n ? void n.push([b, _]) : v(b, _)), y = (0, import_chunk_w578pjby.Ct)(async () => r?.end()), g(v), c;
  });
  return A.then(() => {
    if (r !== void 0) (0, import_chunk_cqa9hrgx.u)("attach_settings_held_beside_helper");
  }, (c) => {
    (0, import_chunk_cqa9hrgx.m)("attach_settings_held_beside_helper", "hold_failed"), g(s), (0, import_chunk_w578pjby.t)(`[deviceBind] attach could not hold the settings beside the session's helper: ${(0, import_chunk_jv7av99m.d)(c)}`);
  }).catch(() => {
  }), { binding: A.catch(() => o), kept: A.then(() => true, () => false), end: () => {
    h = true, y?.(), r?.end();
  } };
}
function z$s(e) {
  let i = e.binding.catch((n) => ((0, import_chunk_w578pjby.t)(`[deviceBind] attach binding failed unexpectedly: ${(0, import_chunk_jv7av99m.d)(n)}`), { status: "disabled" })), o = false, s;
  return i.then((n) => {
    if (o || n.status !== "bound" || !(0, import_chunk_q3twytbf.RVe)(n.toolHostLink)) return;
    s = (e.startRegistration ?? import_chunk_nhch6tkn.J5n)({ sessionId: e.sessionId, getAccessToken: e.getAccessToken, orgUuid: e.orgUuid, getDeviceId: () => n.deviceId, cloudClient: e.cloudClient, storageV5: e.storageV5, ...e.dirSync !== void 0 && { dirSync: e.dirSync }, ...e.folderRelation !== void 0 && { folderRelation: e.folderRelation }, ...e.onNotice && { onNotice: e.onNotice }, ...e.servedSettingsChanged && { servedSettingsChanged: e.servedSettingsChanged }, ...e.deviceMcpQuestion && { deviceMcpQuestion: e.deviceMcpQuestion } });
  }).catch((n) => {
    (0, import_chunk_w578pjby.t)(`[deviceBind] attach could not start the device registration: ${(0, import_chunk_jv7av99m.d)(n)}`);
  }), { announceSettled: (n) => s?.announceSettled(n), serving: i.then(() => s?.serving), notice: i.then((n) => n.status === "unbound" ? { text: (0, import_chunk_sjqze7qg.aio)(n.reason), toast: true } : n.status === "created_unbound" ? { text: (0, import_chunk_sjqze7qg.iio)(n.reason), toast: true } : n.status === "bound" && e.toolServingOn && !(0, import_chunk_q3twytbf.RVe)(n.toolHostLink) ? (0, import_chunk_sjqze7qg.FXa)(n.toolHostLink) : void 0), stop: async () => {
    o = true, await s?.stop();
  }, heldServedCall: (n) => s?.heldServedCall(n) ?? import_chunk_d1nhs44g.Kse };
}
function D(e) {
  return (0, import_chunk_y53wbr8a.a)("tengu_device_bind_attach", { outcome: (0, import_chunk_78g0060s.f)(e) }), (0, import_chunk_cqa9hrgx.l)("device_bind_attach", e), { status: "unbound", reason: e };
}
function B(e, i) {
  if ((0, import_chunk_y53wbr8a.a)("tengu_device_bind_attach", { outcome: (0, import_chunk_78g0060s.f)(e) }), e === "session_unreadable") (0, import_chunk_cqa9hrgx.l)("device_bind_attach", e);
  else (0, import_chunk_cqa9hrgx.m)("device_bind_attach", e);
  return (0, import_chunk_w578pjby.t)(`[deviceBind] attach could not check the session's binding (${e}): ${(0, import_chunk_jv7av99m.d)(i)}`), { status: "unbound", reason: e };
}
