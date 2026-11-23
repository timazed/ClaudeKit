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
var chunk_jvq8g4xf_exports = {};
__export(chunk_jvq8g4xf_exports, {
  Exa: () => Exa,
  O$e: () => O$e,
  O5s: () => O5s,
  P5s: () => P5s,
  _Vr: () => _Vr,
  gVr: () => gVr,
  kxa: () => kxa,
  n6o: () => n6o,
  wxa: () => wxa,
  x5s: () => x5s
});
module.exports = __toCommonJS(chunk_jvq8g4xf_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_2qh29p4b = require("/$bunfs/root/chunk-2qh29p4b.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_02pvhny0 = require("/$bunfs/root/chunk-02pvhny0.js");
var import_chunk_7h77vtaa = require("/$bunfs/root/chunk-7h77vtaa.js");
var import_chunk_0f977ndx = require("/$bunfs/root/chunk-0f977ndx.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
function S() {
  return (0, import_chunk_0rkwgmhx.se)().durable.rows;
}
async function x(e, n) {
  let r = (0, import_chunk_0rkwgmhx.se)().durable.slugOps, o = (r.get(e) ?? Promise.resolve()).then(n, n), d = o.then(() => {
    return;
  }, () => {
    return;
  });
  r.set(e, d);
  try {
    return await o;
  } finally {
    if (r.get(e) === d) r.delete(e);
  }
}
function gVr() {
  return [...S().values()];
}
function O$e(e) {
  return S().get(e);
}
var Ee = [3e4, 12e4, 6e5];
function wxa(e, n) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || e === null) return;
  if (e.readFailed) {
    if ((0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "registry_unread"), n.reread !== void 0) Me(n.reread, n);
    return;
  }
  le(e, n);
}
async function Me(e, n, r = Ee) {
  for (let a of r) {
    if (await (0, import_chunk_5appeerh.K)(a, void 0, { unref: true }), (0, import_chunk_0rkwgmhx.se)().durable.registrySink !== null) return true;
    let o;
    try {
      o = await e();
    } catch (d) {
      (0, import_chunk_w578pjby.t)(`[artifact] worker-state re-read threw: ${String(d)}`);
      continue;
    }
    if (o === null || o.readFailed) continue;
    try {
      le(o, n);
    } catch (d) {
      return (0, import_chunk_k449cc64.i)(d), false;
    }
    return (0, import_chunk_cqa9hrgx.u)("artifact_durable_subscribe", { registry_reread: true }), true;
  }
  return (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "registry_reread_failed"), false;
}
function le(e, n) {
  let r = (0, import_chunk_02pvhny0.xMa)(e.internal?.artifact_durable_watches), { durable: a } = (0, import_chunk_0rkwgmhx.se)();
  for (let o of r?.orphans ?? []) a.orphanTriggers.add(o);
  for (let o of r?.rows ?? []) {
    if (a.unwatchedSlugs.has(o.slug) && !a.rows.has(o.slug)) {
      Y(o);
      continue;
    }
    if (a.slugOps.has(o.slug)) {
      a.pendingRestoredRows.set(o.slug, o), N(x(o.slug, async () => {
        a.pendingRestoredRows.delete(o.slug), Y(o), (0, import_chunk_02pvhny0.Yet)();
      }));
      continue;
    }
    Y(o);
  }
  (0, import_chunk_02pvhny0.C4r)(r?.stopped ?? /* @__PURE__ */ new Map(), n);
  for (let o of /* @__PURE__ */ new Set([...a.rows.keys(), ...a.pendingRestoredRows.keys(), ...a.slugOps.keys()])) if (a.stopLatches.isStopped(o)) We(o);
  if ((0, import_chunk_02pvhny0.AMa)(n.sink), r !== null) (0, import_chunk_02pvhny0.RMa)();
  if ((0, import_chunk_02pvhny0.Yet)(), r !== null && r.rows.length + r.stopped.size > 0) (0, import_chunk_cqa9hrgx.u)("artifact_durable_subscribe", { restored_rows: r.rows.length, restored_stops: r.stopped.size }), (0, import_chunk_w578pjby.t)(`[artifact] restored ${r.rows.length} durable watch row(s) and ${r.stopped.size} stop(s) from prior worker epoch`);
}
function We(e) {
  let { durable: n } = (0, import_chunk_0rkwgmhx.se)(), r = () => {
    let a = n.rows.get(e);
    if (a === void 0 || !n.stopLatches.isStopped(e)) return;
    n.rows.delete(e), n.unwatchedSlugs.add(e);
    for (let o of [a.triggerId, ...a.unreleased ?? []]) n.orphanTriggers.add(o);
    (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "restored_stop_retired_row");
  };
  if (n.slugOps.has(e)) {
    N(x(e, async () => {
      r(), (0, import_chunk_02pvhny0.Yet)();
    }));
    return;
  }
  r();
}
function Y(e) {
  let { durable: n } = (0, import_chunk_0rkwgmhx.se)();
  if (e.claudeDoc) (0, import_chunk_7h77vtaa.o4r)(e.slug);
  let r = n.rows.get(e.slug);
  if (r !== void 0 || n.unwatchedSlugs.has(e.slug) || n.stopLatches.isStopped(e.slug)) {
    for (let a of [e.triggerId, ...e.unreleased ?? []]) if (a !== r?.triggerId) n.orphanTriggers.add(a);
    if (r !== void 0 && e.claudeDoc) n.rows.set(e.slug, { ...r, claudeDoc: true });
    return;
  }
  n.rows.set(e.slug, { ...e, restored: true });
}
function ue(e) {
  let n = (0, import_chunk_2qh29p4b.l0t)(e);
  if (!n) return null;
  let r = (0, import_chunk_f9x2f6cx.vse)();
  if (!r) return null;
  return { found: n, dial: r };
}
function kxa(e) {
  return ue(e) !== null;
}
async function de(e, n, r) {
  let a = ue(e);
  if (!a) return null;
  try {
    return await a.dial(a.found, r?.detachedFromUser ? { timeoutMs: 15e3 } : { signal: n });
  } catch {
    return null;
  }
}
var ke = "com.anthropic/watch-url", Ae = "/integrations/v1/code/webhook-triggers/", Pe = "/fire", Te = ["published", "comment"], te = ["published"];
function Exa() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? null : "not_remote";
}
function x5s() {
  let e = (0, import_chunk_0rkwgmhx.se)().durable, n = e.subscribeForbidden;
  if (n) if (!n.relayActive && (0, import_chunk_ac8t6db0.mj)(import_chunk_ac8t6db0.ykr)) X();
  else return { reason: "subscribe_forbidden", serverMessage: n.serverMessage };
  let r = e.subscribeUnrelayed;
  return r ? { reason: "relay_unavailable", ...r } : null;
}
function X() {
  let e = (0, import_chunk_0rkwgmhx.se)().durable;
  if (e.subscribeForbidden === null) return;
  e.subscribeForbidden = null, (0, import_chunk_7h77vtaa.D7s)("subscribe_forbidden");
}
function ce() {
  let e = (0, import_chunk_0rkwgmhx.se)().durable;
  if (e.subscribeUnrelayed === null) return;
  e.subscribeUnrelayed = null, (0, import_chunk_7h77vtaa.D7s)("relay_unavailable");
}
var fe = "watch_url", Oe = "anthropic/ccr.error";
function Fe(e, n) {
  let r = false;
  for (let a of e) {
    if (a.mcpInfo?.serverName !== n) continue;
    if (a.mcpInfo.toolName === fe) return true;
    r = true;
  }
  return r ? false : null;
}
function P5s() {
  return (0, import_chunk_6e68m1dj.hn)() && (0, import_chunk_ac8t6db0.Jpe)() && !(0, import_chunk_ac8t6db0.mj)(import_chunk_ac8t6db0.ykr) && !(0, import_chunk_865at33z.wGn)();
}
function O5s(e) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return null;
  let { watchUrlWithheld: n, watchUrlGranted: r } = (0, import_chunk_0rkwgmhx.se)().durable;
  if (n) return n;
  if (r) return null;
  let a = (0, import_chunk_2qh29p4b.l0t)(e.clients);
  return (a?.type === "connected" || a?.type === "cached" && a.listedByHost === true) && Fe(e.tools, a.name) === false ? "tool_not_offered" : null;
}
function Ie(e, n) {
  if ((0, import_chunk_mzmcvr6c.ht)(n) === null) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return r.protocol === "https:" && r.username === "" && r.password === "" && r.search === "" && r.hash === "" && r.pathname === Ae + n + Pe;
}
var Ue = "url_webhook_trigger_limit", xe = "no_originator", Ne = ["tool_not_offered", "org_not_enabled", "session_device_bound"], He = ["session_not_found", "unavailable_in_deployment"], ne = 160, $e = /^[('\[]?[A-Za-z_]+(?:[-'][A-Za-z_]+)?[\])'.,;:!?]*$/, Be = 40, Ge = /^[(']?\d{1,5}[)'.,;:!?%]*$/, be = /^[-\u2013\u2014.,;:!?()]{1,3}$/, je = new RegExp("(?!\\u0020)\\p{Zs}|[\\p{M}\\p{Default_Ignorable_Code_Point}\\u2800\\u{1D159}\\u{13441}\\u{13442}\\uFFFC]", "gu"), ge = /\r\n|[\n\v\f\r\u0085\u2028\u2029]/, T = "[redacted]", L = "[url]", ze = 2048;
function _e(e) {
  return e.length <= Be && $e.test(e);
}
function ae(e) {
  return e === void 0 || e !== L && e !== T && _e(e);
}
function Ve(e, n, r) {
  return _e(e) || be.test(e) || Ge.test(e) && ae(n) && ae(r);
}
function oe(e) {
  let n = (0, import_chunk_7cfjrnwy.ee)(e, ze), r = n.split(ge).map((c) => (0, import_chunk_7cfjrnwy.I_)(c.replaceAll("	", " ")).replace(je, "")), a = r.findIndex((c) => c.trim() !== "");
  if (a === -1) return;
  let o = r[a] ?? "", d = a === r.length - 1 && n.length < e.length, b = o.replace(/["`]/g, "'").replace(/[a-z][a-z0-9+.-]*:\/\/\S+/gi, ` ${L} `).split(/\s+/).filter((c) => c !== "");
  if (d && b.length > 0) b[b.length - 1] = T;
  let _ = b.map((c, g) => c === L || Ve(c, b[g - 1], b[g + 1]) ? c : T).filter((c, g, v) => c !== T || v[g - 1] !== T);
  if (!_.some((c) => c !== T && c !== L && !be.test(c))) return;
  let p = _.join(" ");
  return p.length > ne ? `${(0, import_chunk_7cfjrnwy.ee)(p, ne - 3)}...` : p;
}
function Ke(e) {
  let n = "content" in e ? e.content : void 0;
  if (!Array.isArray(n)) return "";
  let r = [];
  for (let a of n) if (typeof a === "object" && a !== null && "type" in a && a.type === "text" && "text" in a && typeof a.text === "string") r.push(a.text);
  return r.join(`
`);
}
async function pe(e, n, r) {
  try {
    let a = await (0, import_chunk_gvzh3pxp.Vq)(e, { name: n, arguments: r }, { timeout: 15e3 }), o = a._meta?.[Oe];
    return { isError: "isError" in a && a.isError === true, text: Ke(a), errorCode: typeof o === "object" && o !== null && "code" in o && typeof o.code === "string" ? o.code : void 0, watchUrlFields: a._meta?.[ke] };
  } catch {
    return null;
  }
}
async function O(e, n) {
  let r = await pe(e, "unwatch_url", { trigger_id: n });
  return r !== null && !r.isError;
}
async function he(e) {
  let { durable: n } = (0, import_chunk_0rkwgmhx.se)(), r = [...n.orphanTriggers];
  if (r.length === 0) return;
  let a = await Promise.all(r.map((d) => O(e, d))), o = 0;
  if (r.forEach((d, b) => {
    if (a[b]) n.orphanTriggers.delete(d);
    else o++;
  }), o > 0) (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "orphan_trigger_release_failed");
  (0, import_chunk_02pvhny0.Yet)();
}
async function ye(e, n, r, a) {
  try {
    let o = await import_chunk_ac8t6db0.im.postRelayBound(e, n, { headers: (0, import_chunk_ddfyyyy7.sm)(), timeout: 15e3, refreshOAuth: true, credentials: a, ...r && { signal: r } });
    return { res: o, relayed: o.route === "relay" };
  } catch (o) {
    return { res: void 0, relayed: (0, import_chunk_ac8t6db0.SN)(o) };
  }
}
function we(e) {
  return e.relayed ? { relayed: true } : {};
}
function U(e) {
  return e.relayed ? [{ relay: true }] : [];
}
async function n6o(e) {
  let { slug: n, context: r, detachedFromUser: a } = e;
  (0, import_chunk_7h77vtaa.nMa)(n);
  let o;
  try {
    let d = Xe(n, r, a);
    return N(d), o = await d, Ze(o, (0, import_chunk_0rkwgmhx.se)().durable.claudeDocSlugs.has(n) || void 0), o;
  } finally {
    let d = (0, import_chunk_7h77vtaa.rMa)(n, o);
    try {
      e.onSettled?.(d);
    } catch (b) {
      (0, import_chunk_k449cc64.i)(b);
    }
  }
}
function N(e) {
  let { pendingOps: n } = (0, import_chunk_0rkwgmhx.se)().durable;
  n.add(e);
  let r = () => void n.delete(e);
  e.then(r, r), (0, import_chunk_w578pjby.oA)(Ye);
}
async function Ye() {
  await (0, import_chunk_5appeerh.me)(Promise.allSettled([...(0, import_chunk_0rkwgmhx.se)().durable.pendingOps]), 1e4);
}
async function Xe(e, n, r) {
  return x(e, async () => {
    let a = S().get(e);
    if (a?.restored && !r) {
      let o = await ie(e, n, false, a);
      if (o.outcome === "subscribed") return o;
      let d = o.outcome === "already_watching" ? o.outcome : o.outcome === "failed" && o.kept ? "outcome_unknown" : o.reason;
      return (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", `refresh_${d}`), (0, import_chunk_w578pjby.t)(`[artifact] restored durable watch not refreshed: reason=${d}`), Re(S().get(e) ?? a);
    }
    return ie(e, n, r);
  });
}
function Ze(e, n) {
  switch (e.outcome) {
    case "subscribed":
      if (e.downgraded) {
        (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "comment_events_unsupported", ...U(e));
        break;
      }
      (0, import_chunk_cqa9hrgx.u)("artifact_durable_subscribe", ...U(e));
      break;
    case "already_watching":
      (0, import_chunk_cqa9hrgx.u)("artifact_durable_subscribe", { already_watching: true, ...e.restored && { restored: true } });
      break;
    case "skipped":
      (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", e.reason);
      break;
    case "failed": {
      let r = qe(e, n), [a] = U(e), o = { ...e.status !== void 0 && { status: e.status }, ...e.gatewayDeclined !== void 0 && { gateway_declined: e.gatewayDeclined }, ...a }, d = Object.keys(o).length > 0 ? [o] : [];
      if (r !== void 0) (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", r, ...d);
      else (0, import_chunk_cqa9hrgx.m)("artifact_durable_subscribe", e.reason, d[0]);
      let b = e.status !== void 0 ? ` status=${e.status}` : "", _ = e.serverMessage !== void 0 ? ` server="${e.serverMessage}"` : "";
      (0, import_chunk_w578pjby.t)(`[artifact] durable watch failed: reason=${e.reason}${b}${_}`, { level: r !== void 0 ? "debug" : "warn" });
      break;
    }
  }
}
function qe(e, n) {
  switch (e.reason) {
    case "aborted":
      return "aborted";
    case "no_originator":
      return e.latched ? "no_originator_latched" : void 0;
    case "subscribe_forbidden":
      return e.latched ? "subscribe_forbidden_latched" : "subscribe_forbidden";
    case "relay_unavailable":
      return e.latched ? "relay_unavailable_latched" : "relay_unavailable";
    case "subscribe_failed":
      return n && (0, import_chunk_7h77vtaa.H7s)(e) ? "claude_doc_not_admitted" : void 0;
    default:
      return;
  }
}
function Re(e) {
  return { outcome: "already_watching", triggerId: e.triggerId, since: e.since, events: e.events, ...e.restored && { restored: true } };
}
async function ie(e, n, r, a) {
  if (!import_chunk_r8478wtb.yo.test(e)) return { outcome: "failed", reason: "invalid_slug" };
  let o = S().get(e);
  if (o && o !== a) return Re(o);
  if ((0, import_chunk_02pvhny0.iie)({ storageV5: n.storageV5 }), (0, import_chunk_0rkwgmhx.se)().durable.stopLatches.isStopped(e)) return { outcome: "skipped", reason: "stop_latched" };
  if ((0, import_chunk_k449cc64.wt)() || (0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return { outcome: "failed", reason: "client_policy" };
  if (P5s()) return { outcome: "skipped", reason: "relay_not_served" };
  if (r && (0, import_chunk_0rkwgmhx.se)().durable.originatorRefused) return { outcome: "failed", reason: "no_originator", latched: true };
  let d = x5s();
  if (r && d) return d.reason === "subscribe_forbidden" ? { outcome: "failed", reason: "subscribe_forbidden", latched: true, serverMessage: d.serverMessage } : { outcome: "failed", reason: "relay_unavailable", latched: true, status: d.status, relayed: true, fromGateway: true };
  let b = r ? O5s(n.getMcp()) : null;
  if (b) return { outcome: "skipped", reason: b };
  let _ = await de(n.getMcp().clients, n.abortController.signal, r ? { detachedFromUser: r } : void 0);
  if (!_) {
    if (!r && n.abortController.signal.aborted) return { outcome: "failed", reason: "aborted" };
    return { outcome: "skipped", reason: "no_wake_minter" };
  }
  await he(_);
  let p = await pe(_, fe, {});
  if (!p || p.isError) {
    let h = p?.errorCode !== void 0 ? oe(p.text) : void 0, C = h !== void 0 ? { serverMessage: h } : {}, W = p?.errorCode;
    if (W === Ue) return { outcome: "failed", reason: "trigger_limit", ...C };
    if (W === xe) {
      let R = (0, import_chunk_0rkwgmhx.se)().durable, V = R.originatorRefused;
      return R.originatorRefused = true, V ? { outcome: "failed", reason: "no_originator", latched: true, ...C } : { outcome: "failed", reason: "no_originator", ...C };
    }
    let P = Ne.find((R) => R === W);
    if (P) return (0, import_chunk_0rkwgmhx.se)().durable.watchUrlWithheld = P, { outcome: "skipped", reason: P };
    return { outcome: "failed", reason: He.find((R) => R === W) ?? (p ? "mint_refused" : "mint_failed"), ...C };
  }
  let c = (0, import_chunk_0rkwgmhx.se)().durable;
  c.originatorRefused = false, c.watchUrlWithheld = null, c.watchUrlGranted = true;
  let g = (0, import_chunk_0jve1fep.Le)(p.watchUrlFields) ? p.watchUrlFields : {}, { url: v, trigger_id: y, sealed_secret: D } = g;
  if (typeof y !== "string" || y === "") return { outcome: "failed", reason: "mint_unreadable" };
  if (typeof v !== "string" || typeof D !== "string" || D === "" || !Ie(v, y)) return await O(_, y), { outcome: "failed", reason: "mint_unreadable" };
  let w = { url: v, triggerId: y, sealedSecret: D };
  if (!r && n.abortController.signal.aborted) return { outcome: "failed", reason: await O(_, w.triggerId) ? "aborted" : "watch_trigger_release_failed" };
  let E, M = false, k = {}, Z = false, H = false, B, G = false, F = (0, import_chunk_0f977ndx.mA)() ? Te : te, q = false, J = `/api/frame/subscribe/${e}`, j = (0, import_chunk_ac8t6db0.Jpe)() ? (0, import_chunk_ac8t6db0.$ln)("POST", J) : null, Se = (0, import_chunk_ac8t6db0.mj)(j), Ce = j !== null && (0, import_chunk_ac8t6db0.Cys)(j), Q = () => ye(J, { url: w.url, sealed_secret: w.sealedSecret, events: F }, r ? void 0 : n.abortController.signal, n.credentials), A = await Q();
  if (A.res?.ok && A.res.fromFrame && A.res.status === 400 && F.includes("comment")) F = te, q = true, A = await Q();
  let I = we(A), { res: f } = A;
  if (!f) G = !r && n.abortController.signal.aborted;
  else if (f.ok) {
    if (E = f.status, M = f.status >= 200 && f.status < 300, !M) {
      let h = typeof f.data === "string" ? f.data.trim() : void 0, C = f.response?.headers?.["content-type"], W = h !== void 0 && h !== "" && !ge.test(h) && !/[<>]/.test(h) && typeof C === "string" && C.toLowerCase().startsWith("text/plain"), P = (0, import_chunk_f2vegtjy.F0e)(f.data), z = f.fromFrame && (P !== null || W), R = z ? oe(P?.error ?? h ?? "") : void 0;
      k = { ...!f.fromFrame && { fromGateway: true }, ...f.gatewayDeclined !== void 0 && { gatewayDeclined: f.gatewayDeclined }, ...R !== void 0 && { serverMessage: R } };
      let V = f.route === "relay" || !(Ce || f.gatewayDeclined === 0);
      if (f.status === 403 && W && R !== void 0 && V && a === void 0) Z = true, H = c.subscribeForbidden !== null, c.subscribeForbidden = { serverMessage: R, relayActive: Se };
      else if (z && f.status >= 400 && f.status < 500 && f.status !== 401 && f.status !== 403) X();
    } else if (f.fromFrame) X();
    if (f.fromFrame) ce();
  } else if (f.reason === "relay-unavailable" || f.reason === "relay-not-served") {
    if (f.status !== 0) {
      if (B = "relay_unavailable", E = f.status, k = { fromGateway: true }, a === void 0) H = c.subscribeUnrelayed !== null, c.subscribeUnrelayed = { status: E };
    }
  } else B = f.reason === "no-auth" ? "no_auth" : "client_policy";
  if (!M) {
    let h = !f || f.ok && (!f.fromFrame || f.status >= 500);
    if (a !== void 0 && h) return S().set(e, { ...a, unreleased: [...a.unreleased ?? [], w.triggerId] }), (0, import_chunk_02pvhny0.Yet)(), (0, import_chunk_w578pjby.t)(`[artifact] refresh subscribe outcome unknown; keeping trigger ${w.triggerId} beside ${a.triggerId}`), { outcome: "failed", reason: G ? "aborted" : "subscribe_failed", status: E, kept: true, ...I, ...k };
    let C = await O(_, w.triggerId);
    if (G) return { outcome: "failed", reason: C ? "aborted" : "watch_trigger_release_failed", ...I };
    return { outcome: "failed", reason: B ?? (Z ? "subscribe_forbidden" : "subscribe_failed"), status: E, ...I, ...k, ...H && { latched: true } };
  }
  let re = (/* @__PURE__ */ new Date()).toISOString();
  S().set(e, { slug: e, triggerId: w.triggerId, since: re, events: F, ...(c.claudeDocSlugs.has(e) || a?.claudeDoc) && { claudeDoc: true } }), (0, import_chunk_02pvhny0.Yet)();
  let De = a ? [a.triggerId, ...a.unreleased ?? []].filter((h) => h !== w.triggerId) : [];
  if ((await Promise.all(De.map((h) => O(_, h)))).includes(false)) (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "superseded_trigger_release_failed");
  return { outcome: "subscribed", triggerId: w.triggerId, since: re, events: F, ...q && { downgraded: true }, ...I };
}
async function _Vr(e) {
  let { slug: n, context: r } = e;
  if ((0, import_chunk_7h77vtaa.L7s)(n), !S().has(n) && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return { wasWatching: false, teardown: "unsent" };
  if (!import_chunk_r8478wtb.yo.test(n)) return { wasWatching: false, teardown: "unsent" };
  let a = x(n, () => Je(n, r));
  return N(a), a;
}
async function Je(e, n) {
  let r = S().get(e);
  (0, import_chunk_0rkwgmhx.se)().durable.unwatchedSlugs.add(e);
  let a = false, o = "dispatched", d = false, b, _ = false, p = await ye(`/api/frame/unsubscribe/${e}`, {}, n.abortController.signal, n.credentials), c = U(we(p)), { res: g } = p;
  if (!g) d = n.abortController.signal.aborted;
  else if (g.ok) {
    if (a = g.status >= 200 && g.status < 300, g.fromFrame) ce();
  } else if (o = "refused", g.reason === "relay-unavailable" || g.reason === "relay-not-served") if (g.status !== 0) b = g.status;
  else _ = true;
  let v = true;
  if (r || (0, import_chunk_0rkwgmhx.se)().durable.orphanTriggers.size > 0) {
    let y = await de(n.getMcp().clients, n.abortController.signal, { detachedFromUser: true });
    if (r) {
      let D = [r.triggerId, ...r.unreleased ?? []], w = y === null ? D.map(() => false) : await Promise.all(D.map((M) => O(y, M)));
      v = !w.includes(false);
      let { durable: E } = (0, import_chunk_0rkwgmhx.se)();
      D.forEach((M, k) => {
        if (!w[k]) E.orphanTriggers.add(M);
      }), S().delete(e), (0, import_chunk_02pvhny0.Yet)();
    }
    if (y !== null) await he(y);
  }
  if (a && v) (0, import_chunk_cqa9hrgx.u)("artifact_durable_subscribe", { unwatch: true, ...c[0] });
  else if (d && v) (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "unwatch_aborted", ...c);
  else if (b !== void 0 && v) (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "unwatch_relay_unavailable", { status: b, ...c[0] });
  else {
    let y = g?.ok && !a ? { status: g.status, ...c[0] } : b !== void 0 ? { status: b, ...c[0], trigger_release_failed: true } : c[0];
    (0, import_chunk_cqa9hrgx.m)("artifact_durable_subscribe", a ? "unwatch_trigger_release_failed" : b !== void 0 ? "unwatch_relay_unavailable" : o === "refused" && !_ ? "unwatch_client_policy" : "unwatch_failed", ...y ? [y] : []);
  }
  return { wasWatching: r !== void 0, teardown: o };
}
