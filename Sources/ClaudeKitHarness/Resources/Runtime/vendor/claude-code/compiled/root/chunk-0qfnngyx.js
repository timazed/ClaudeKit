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
var chunk_0qfnngyx_exports = {};
__export(chunk_0qfnngyx_exports, {
  createDeviceHooksWorker: () => we,
  productionDeviceHooksWorkerDeps: () => ve
});
module.exports = __toCommonJS(chunk_0qfnngyx_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_q61tyrt3 = require("/$bunfs/root/chunk-q61tyrt3.js");
var import_chunk_n6ekzgjh = require("/$bunfs/root/chunk-n6ekzgjh.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var te = 65536, oe = 600, Z = 200, re = 5e3, ae = 3e5;
function ee(o) {
  return Math.min(600, Math.max(5, Math.round(o ?? 60)));
}
function ne(o, u) {
  if (o === void 0) return "unknown_template";
  if (!o.digests.some((y) => y.sha256 === u.digest)) return "version_mismatch";
  if (u.event !== o.event || !(0, import_chunk_sjqze7qg.bSe)(u.event)) return "event_not_allowed";
  return "awaiting_upload";
}
function we(o) {
  let u = null, y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
  o.registry.onLeaseExpired((i) => o.forwarder.removeForOwner(i.instanceId));
  let S = () => o.policy.pluginOnly() || o.policy.customizationDisabled() || o.policy.managedOnly() || o.policy.allDisabled(), D = () => {
    let i = o.registry.current();
    if (i !== null) o.forwarder.removeForOwner(i.instanceId), o.templateRunner.remove(i.instanceId);
    o.registry.clear(), R.clear(), o.templates.clear();
  }, O = async () => {
    let i = u !== null && !u.settled;
    if (u === null || u.settled) {
      let c = { promise: o.readAccountFlags(), startedAt: o.now(), settled: false };
      c.promise.then(() => c.settled = true, () => c.settled = true), u = c;
    }
    let s = u, r = o.now(), l = Math.max(0, o.flagWaitCapMs - (r - s.startedAt));
    return { state: await (0, import_chunk_5appeerh.me)(s.promise.then((c) => c ? "on" : "off", () => "pending"), l) ?? "pending", waitMs: o.now() - r, shared: i };
  }, A = async () => {
    let i = { flagWaitMs: 0, sharedFlagRead: false };
    if (S()) return D(), { ok: false, error: "hook_forwarding_disabled: policy", outcome: "disabled_policy", ...i };
    let s = await O(), r = { flagWaitMs: s.waitMs, sharedFlagRead: s.shared };
    if (s.state === "pending") return { ok: false, error: "hook_forwarding_not_ready: feature flags not yet available; retry", outcome: "not_ready", ...r };
    if (s.state === "off") return D(), { ok: false, error: "hook_forwarding_disabled: flag_off", outcome: "disabled_flag_off", ...r };
    if (S()) return D(), { ok: false, error: "hook_forwarding_disabled: policy", outcome: "disabled_policy", ...r };
    return { ok: true, ...r };
  }, P = async (i) => {
    let s = { flagWaitMs: 0, sharedFlagRead: false };
    if ((0, import_chunk_w578pjby.cs)(i).length > te) return { ok: false, error: "invalid_registration: request larger than 64 KiB", outcome: "invalid", ...s };
    let r = (0, import_chunk_xfj2cwfv.zxo)().safeParse(i.request);
    if (!r.success) return { ok: false, error: `invalid_registration: ${(0, import_chunk_kx2fp6pc.Ji)(r.error.issues[0]?.message ?? "malformed", { maxCodeUnits: Z })}`, outcome: "invalid", ...s };
    if (r.data.worker_epoch !== void 0 && r.data.worker_epoch !== o.workerEpoch) return { ok: false, error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`, outcome: "stale_epoch", ...s };
    let l = await A();
    return l.ok ? { ok: true, parsed: r.data, flagWaitMs: l.flagWaitMs, sharedFlagRead: l.sharedFlagRead } : l;
  }, x = async (i) => {
    let s = await P(i);
    if (!s.ok) return o.telemetry.register({ outcome: s.outcome, accepted: 0, ignored: 0, templatesAwaitingUpload: 0, templatesRefused: 0, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "error", error: s.error };
    let r = s.parsed, l = o.projectRoot(), g = o.cwd(), c = (0, import_chunk_xfj2cwfv.Mmn)().safeParse({ status: "unregistered", project_dir: l, cwd: g, worker_epoch: o.workerEpoch }).success, m = { project_dir: l, cwd: c ? g : l, worker_epoch: o.workerEpoch }, d = (e, n) => {
      if (o.registry.removeOwner(r.instance_id)) o.forwarder.removeForOwner(r.instance_id), o.templateRunner.remove(r.instance_id);
      return R.delete(r.instance_id), o.telemetry.register({ outcome: "unregistered", accepted: 0, ignored: e.length, templatesAwaitingUpload: 0, templatesRefused: n.length, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "success", response: { status: "unregistered", ...m, ...e.length > 0 && { ignored_ids: e.slice(0, 128) }, ...n.length > 0 && { templates: [...n] } } };
    };
    if (r.hooks.length === 0 && r.templates.length === 0) return d([], []);
    let _ = [], h = [], W = /* @__PURE__ */ new Set();
    for (let e of r.hooks) {
      let n = (0, import_chunk_n6ekzgjh.WVe)(e.id), p = e.matcher === void 0 || e.matcher === "" || e.matcher === "*" || import_chunk_sjqze7qg.pbt.test(e.matcher), C = W.has(e.id);
      if (W.add(e.id), C || n === null || n.instanceId !== r.instance_id || n.event !== e.event || !(0, import_chunk_sjqze7qg.bSe)(e.event) || !p) {
        h.push(e.id);
        continue;
      }
      _.push({ id: e.id, event: e.event, ...e.matcher !== void 0 && e.matcher !== "" && e.matcher !== "*" && { matcher: e.matcher }, kind: e.kind, ...e.timeout_s !== void 0 && { timeoutS: e.timeout_s }, source: e.source, hasCondition: e.has_condition === true, targetPinned: e.target_pinned === true });
    }
    let f = {}, H = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), a = R.get(r.instance_id) ?? /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), M = (e) => {
      let n = a.get(e);
      if (n === void 0) return false;
      return H.set(n.matcher, e), f[n.event] = [...f[n.event] ?? [], n.matcher], w.set(e, n), b.add(e), true;
    }, K = (e, n) => {
      if (!(0, import_chunk_q61tyrt3._Br)(e) || !y.get(r.instance_id)?.has(e.id)) return;
      let p = { matcher: e.matcher, hooks: [{ type: "callback", timeout: n, callback: async () => (o.telemetry.templateStandInBlocked?.({ template: e.id }), { decision: "block", reason: `cloud template ${e.id} could not be installed on this worker; matching calls are blocked until it is (register again to retry)` }) }] };
      H.set(p, e.id), f[e.event] = [...f[e.event] ?? [], p], w.set(e.id, { event: e.event, matcher: p }), b.add(e.id);
    }, N = new Map(r.templates.map((e) => [e.template, e]));
    for (let e of N.values()) {
      let n = o.templates.template(e.template), p = ne(n, e), C = p === "awaiting_upload" ? o.templates.bytesFor(e.digest) : void 0;
      if (n === void 0 || C === void 0) {
        if (k.set(e.template, { template: e.template, status: p }), !M(e.template) && n !== void 0) K(n, ee(e.timeout_s));
        continue;
      }
      let I = ee(e.timeout_s);
      if (await o.templateRunner.resolveInterpreter() === null) {
        if (k.set(e.template, { template: e.template, status: "interpreter_unavailable" }), !M(e.template)) K(n, I);
        continue;
      }
      let j;
      try {
        if (j = await (0, import_chunk_5appeerh.me)(o.templateRunner.prepare(n, e.digest, C, I), re), j === void 0) throw Error("template prepare timed out");
      } catch (B) {
        if ((0, import_chunk_w578pjby.t)(`[deviceHooks] template ${e.template} install failed: ${B instanceof Error ? B.message : String(B)}`, { level: "error" }), k.set(e.template, { template: e.template, status: "install_failed" }), !M(e.template)) K(n, I);
        continue;
      }
      let L = { matcher: n.matcher, hooks: [{ type: "callback", timeout: I, callback: j }] };
      H.set(L, n.id), f[n.event] = [...f[n.event] ?? [], L], w.set(n.id, { event: n.event, matcher: L }), k.set(e.template, { template: e.template, status: "installed" });
    }
    let E = [...k.values()];
    if (S()) return D(), o.telemetry.register({ outcome: "disabled_policy", accepted: 0, ignored: 0, templatesAwaitingUpload: 0, templatesRefused: 0, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "error", error: "hook_forwarding_disabled: policy" };
    let G = r.lease_s ?? oe, z = o.now() + G * 1e3, v = { instanceId: r.instance_id, displayName: (0, import_chunk_kx2fp6pc.Ji)(r.display_name ?? "", { maxCodeUnits: import_chunk_kx2fp6pc.Pce }) || r.instance_id, epoch: o.workerEpoch, leaseExpiresAt: z, entries: _, templates: [...N.values()].flatMap((e) => {
      let n = k.get(e.template)?.status, p = b.has(e.template) ? w.get(e.template)?.event ?? e.event : e.event;
      return (n === "awaiting_upload" || n === "installed" || b.has(e.template)) && (0, import_chunk_sjqze7qg.bSe)(p) ? [{ template: e.template, digest: e.digest, event: p, ...e.timeout_s !== void 0 && { timeoutS: e.timeout_s } }] : [];
    }) };
    if (v.entries.length === 0 && v.templates.length === 0) return d(h, E);
    let { replaced: F, awaySince: X } = o.registry.replaceOwner(v);
    if (F !== void 0) o.forwarder.removeForOwner(F), o.templateRunner.remove(F), R.delete(F);
    o.forwarder.installForOwner(v), o.templateRunner.install(v.instanceId, f, (e, n) => H.get(n) ?? "template"), R.set(v.instanceId, w);
    let V = y.get(v.instanceId) ?? /* @__PURE__ */ new Set();
    for (let e of k.values()) if (e.status === "installed") V.add(e.template);
    y.set(v.instanceId, V);
    let J = (0, import_chunk_4smdap7r.U)(E, (e) => e.status === "awaiting_upload"), Q = (0, import_chunk_4smdap7r.U)(E, (e) => e.status === "installed");
    return o.telemetry.register({ outcome: "accepted", accepted: _.length, ignored: h.length, templatesAwaitingUpload: J, templatesInstalled: Q, templatesRefused: E.length - J - Q, flagWaitMs: s.flagWaitMs, sharedFlagRead: s.sharedFlagRead }), { kind: "success", response: { status: "registered", ...m, lease_s: G, lease_expires_at: new Date(z).toISOString(), accepted: _.length, ignored: h.length, ...h.length > 0 && { ignored_ids: h.slice(0, 128) }, templates: E, ...F !== void 0 && { replaced_owner: F }, ...X !== void 0 && { away_since: new Date(X).toISOString() } } };
  }, T = 4e5, q = async (i) => {
    let s = (m, d = "unknown", _ = 0) => o.telemetry.upload({ outcome: m, template: d, bytes: _ });
    if ((0, import_chunk_w578pjby.cs)(i).length > T) return s("invalid"), { kind: "error", error: "invalid_upload: request larger than 400 KB" };
    let r = (0, import_chunk_xfj2cwfv.Vxo)().safeParse(i.request);
    if (!r.success) return s("invalid"), { kind: "error", error: `invalid_upload: ${(0, import_chunk_kx2fp6pc.Ji)(r.error.issues[0]?.message ?? "malformed", { maxCodeUnits: Z })}` };
    let l = r.data;
    if (l.worker_epoch !== void 0 && l.worker_epoch !== o.workerEpoch) return s("stale_epoch", l.template), { kind: "error", error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}` };
    let g = await A();
    if (!g.ok) return s(g.outcome, l.template), { kind: "error", error: g.error };
    let c = o.templates.accept({ template: l.template, digest: l.digest, contentBase64: l.content_base64 });
    if (!c.ok) return s(c.kind, l.template), { kind: "error", error: c.error };
    return s(c.status, c.template.id, c.bytes), { kind: "success", response: { template: c.template.id, digest: l.digest, status: c.status } };
  };
  return { async handle(i) {
    switch (i.request.subtype) {
      case "register_device_hooks":
        return x(i);
      case "upload_device_hook_template":
        return q(i);
      default:
        return { kind: "error", error: `Unsupported control request subtype: ${i.request.subtype}` };
    }
  } };
}
function se(o) {
  return o !== void 0 && Number.isInteger(o) && o >= 1 ? o : 1;
}
async function ve(o) {
  let [{ isRestrictedToPluginOnly: u }, { isCustomizationDisabled: y }, { shouldHoldDeviceHooksByPolicy: R, shouldDisableAllHooksIncludingManaged: S }, { isAccountGateServed: D, isViolinAmatiEnabled: O }, { getToolServingFlagAnsweredOff: A, isToolServingEnabled: P }, { holdsPartialFlagAnswer: x, refreshGrowthBookFeatures: T }, { createDeviceHookRegistry: q, productionRegistryTimer: i }, { createDeviceHookForwarder: s, productionForwarderTimer: r }, { createDeviceHookTemplateStore: l }, { productionDeviceHookTemplateRunner: g, telemetryTemplateId: c }, { logEvent: m }, { fromEnum: d }, { logFeatureBad: _, logFeatureOk: h, logFeatureSad: W }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qraajz6q.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-11nw2afx.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-119669fx.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xrsph9qz.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-8dzgs0dw.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vgvexp78.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-she6sjrp.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7p6rv27p.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-rwz83c6a.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-j64609n0.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ss4ft2hs.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-b12bqts4.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-tde77zdh.js")))]), f = q({ now: Date.now, setTimer: i, onLeaseExpired: () => m("tengu_device_hooks_lease_expired", {}) }), H = s({ registry: f, sender: o.sender, toolAliases: o.toolAliases, now: Date.now, setTimer: r, telemetry: { forwarded: (a) => m("tengu_device_hook_forwarded", { event: d(a.event), outcome: d(a.outcome), fields_dropped: a.fieldsDropped, blocked: a.blocked, rtt_ms: a.rttMs, error_replies_ignored: a.errorRepliesIgnored, malformed_replies_ignored: a.malformedRepliesIgnored }) } }), k = { policy: { pluginOnly: () => u("hooks"), customizationDisabled: () => y("hooks"), managedOnly: R, allDisabled: S }, readAccountFlags: async () => {
    let [a, w] = await Promise.all([P({ cloudClient: true }), O()]);
    if (a && w) {
      if (!(0, import_chunk_q61tyrt3.yBr)()) return true;
      return m("tengu_device_hooks_shelved", { side: d("worker") }), false;
    }
    let M = A({ cloudClient: true }) ?? (!w && D("tengu_violin_amati") ? "tengu_violin_amati" : void 0);
    if (M === void 0) {
      if (!x()) T().catch(() => {
      });
      throw Error("account flags not served yet");
    }
    return m("tengu_device_hooks_account_flag_off", { flag: d(M) }), false;
  }, flagWaitCapMs: 5e3, now: Date.now, workerEpoch: se(o.workerEpoch), projectRoot: o.projectRoot, cwd: o.cwd, registry: f, forwarder: H, templates: l(), templateRunner: (0, import_chunk_f9x2f6cx.Y)() ? { resolveInterpreter: async () => null, prepare: async () => {
    throw Error("no device hook templates in a diskless session");
  }, install: () => {
  }, remove: () => {
  } } : g(o.projectRoot), telemetry: { templateStandInBlocked: (a) => m("tengu_device_hook_template_run", { template: d(c(a.template)), outcome: d("stand_in_blocked"), duration_ms: 0 }), upload: (a) => m("tengu_device_hook_template_upload", { outcome: d(a.outcome), template: d(c(a.template)), bytes: a.bytes }), register: (a) => {
    if (m("tengu_device_hooks_register", { outcome: d(a.outcome), accepted: a.accepted, ignored: a.ignored, templates_awaiting_upload: a.templatesAwaitingUpload, templates_installed: a.templatesInstalled ?? 0, templates_refused: a.templatesRefused, flag_wait_ms: a.flagWaitMs, shared_flag_read: a.sharedFlagRead }), a.outcome === "accepted" || a.outcome === "unregistered") h("device_hooks_register", { accepted: a.accepted });
    else if (a.outcome === "not_ready") W("device_hooks_register", a.outcome);
    else _("device_hooks_register", a.outcome);
  } } }, b = Date.now();
  return { ...k, readAccountFlags: () => {
    let a = Date.now();
    if (a - b >= ae) b = a, T().catch(() => {
    });
    return k.readAccountFlags();
  } };
}
