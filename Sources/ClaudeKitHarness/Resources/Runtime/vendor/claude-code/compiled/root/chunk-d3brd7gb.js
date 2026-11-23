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
var chunk_d3brd7gb_exports = {};
__export(chunk_d3brd7gb_exports, {
  $Cn: () => $Cn,
  A3o: () => A3o,
  ELa: () => ELa,
  Ett: () => Ett,
  IZs: () => IZs,
  OZs: () => OZs,
  PZs: () => PZs,
  TDt: () => TDt,
  TP: () => TP,
  UCn: () => UCn,
  VD: () => VD,
  VJ: () => VJ,
  Vm: () => Vm,
  Z5r: () => Z5r,
  Znr: () => Znr,
  err: () => err,
  hMe: () => hMe,
  hie: () => hie,
  ktt: () => ktt,
  vDt: () => vDt,
  vLa: () => vLa,
  xZs: () => xZs
});
module.exports = __toCommonJS(chunk_d3brd7gb_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_9xz0nsgn = require("/$bunfs/root/chunk-9xz0nsgn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_eg7q2c7h = require("/$bunfs/root/chunk-eg7q2c7h.js");
var import_chunk_n02njw1s = require("/$bunfs/root/chunk-n02njw1s.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function I(e) {
  switch ((0, import_chunk_gq1dr8pm.aBt)(e)) {
    case "pay_per_request":
    case "included_in_plan":
      return false;
    case "admin_billed":
      return (0, import_chunk_gq1dr8pm.Pmo)(e) || !(0, import_chunk_gq1dr8pm.OIi)(e);
    case "needs_consent":
    case "needs_credits":
    case "out_of_credits":
    case "consented":
      return true;
  }
}
function y(e, o, r) {
  if (!(0, import_chunk_865at33z.Rt)()) return false;
  let a = e !== null ? (0, import_chunk_865at33z.jt)(e) : (0, import_chunk_865at33z.qd)(), n = a.toLowerCase(), c = n.includes("opus") || n.includes("fable"), i = n.includes("opus-4-6"), f = n.includes("sonnet-4-6");
  if (o && (0, import_chunk_865at33z.dS)(e)) return true;
  if (I(a)) return true;
  if (!(0, import_chunk_865at33z.US)(n)) return false;
  if (c && r) return false;
  return i || f;
}
function ktt(e, o, r, a) {
  let n = (0, import_chunk_865at33z.na)(), c = n && o && (!e || a?.announceKeptOn === true), i = n && !!e && !o;
  return (c ? " \xB7 Fast mode ON" : "") + (y(r, o, (0, import_chunk_865at33z.yNe)()) ? " \xB7 Draws from usage credits" : "") + (i ? ` \xB7 Fast mode OFF${(0, import_chunk_865at33z.dS)(r) ? " (/fast turns it on)" : ""}` : "");
}
function ELa(e, o, r) {
  if (!!e === o) return null;
  return o ? `Fast mode ON${y(r, true, (0, import_chunk_865at33z.yNe)()) ? " \xB7 Draws from usage credits" : ""}` : "Fast mode OFF";
}
function TP(e) {
  let o = (0, import_chunk_865at33z.oke)(e ?? (0, import_chunk_865at33z.xE)());
  return e === null ? `${o} (default)` : o;
}
var U = 5e3;
function x(e) {
  let o = E.last.then(() => W(e));
  return E.last = o.catch(() => {
    return;
  }), o;
}
var E = (0, import_chunk_t57w17k7.de)({ last: Promise.resolve() }, (e) => {
  e.last = Promise.resolve();
});
async function W(e) {
  if (e !== null && B(e)) return v("not_representable");
  if ((0, import_chunk_bzyb60p0.wye)() !== "primary") return v("not_primary");
  if ((0, import_chunk_865at33z.S7e)() !== "served") return v("not_served");
  let o = (0, import_chunk_bzyb60p0.tQ)();
  if (o === null || o.kind !== "account") return v("no_account_scope");
  let r = (0, import_chunk_bzyb60p0.s5)();
  if (e !== null) return F(o, r, e);
  let a = (0, import_chunk_bzyb60p0.PLt)(o, r)?.catalog, n = a ? a.state : (0, import_chunk_865at33z.OVi)(), c = (0, import_chunk_865at33z.NAs)((0, import_chunk_865at33z.IVi)(n));
  if (c === void 0) return v("no_saved_pick");
  let i = (0, import_chunk_865at33z.or)();
  if (i !== "pro" && i !== "max" && i !== "team" && (0, import_chunk_865at33z.Tu)(c) === (0, import_chunk_865at33z.Tu)((0, import_chunk_865at33z.qd)())) return (0, import_chunk_865at33z.RCs)(n), v("saved_pick_is_default");
  let f = (0, import_chunk_bzyb60p0.PLt)(o, r);
  await D(o, r, void 0, null);
  let p = (0, import_chunk_bzyb60p0.PLt)(o, r), g = await F(o, r, null);
  if (g.status !== "ok" && (0, import_chunk_bzyb60p0.PLt)(o, r) === p) {
    if ((0, import_chunk_865at33z.RCs)(n), f !== void 0 && p !== f) await (0, import_chunk_bzyb60p0.Xar)(o, r, { ...f, staleAt: Math.min(f.staleAt, Date.now()) });
  }
  return g;
}
async function F(e, o, r) {
  let a = { model: r === null ? null : (0, import_chunk_865at33z.jt)(r) };
  try {
    let n = await import_chunk_865at33z.zt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, a, { auth: "teleport-org", isBackground: true, timeout: U, validateStatus: () => true });
    if (!n.ok) return (0, import_chunk_w578pjby.t)(`[servedCatalog] selection write (${o}) skipped: ${n.reason}`), (0, import_chunk_cqa9hrgx.l)("model_default_server_sync", `declined_${n.reason}`), { status: "skipped", reason: "declined" };
    let c = n.status;
    if (c < 200 || c >= 300) return (0, import_chunk_w578pjby.t)(`[servedCatalog] selection write (${o}): HTTP ${c}`), (0, import_chunk_cqa9hrgx.l)("model_default_server_sync", `http_${c}`), { status: "error", reason: "http_status", httpStatus: c };
    return (0, import_chunk_w578pjby.t)(`[servedCatalog] selection write (${o}) ok`), (0, import_chunk_cqa9hrgx.u)("model_default_server_sync"), await D(e, o, n.data, a.model), { status: "ok", httpStatus: c };
  } catch (n) {
    let c = (0, import_chunk_jv7av99m.$i)(n).kind;
    return (0, import_chunk_w578pjby.t)(`[servedCatalog] selection write (${o}) failed: ${c}`), (0, import_chunk_cqa9hrgx.l)("model_default_server_sync", `network_${c}`), { status: "error", reason: "network" };
  }
}
async function D(e, o, r, a) {
  let n = (0, import_chunk_bzyb60p0.PLt)(e, o), c = (0, import_chunk_865at33z.lRr)().safeParse(r), i = c.success && c.data.id === o ? { ...c.data, selection_source: c.data.selection_source ?? "user_setting" } : a === null ? { id: o } : { ...n?.catalog?.state ?? { id: o }, model: a, selection_source: "user_setting" };
  if ((0, import_chunk_865at33z.RCs)(i), n === void 0 || n.catalog === null) return;
  await (0, import_chunk_bzyb60p0.Xar)(e, o, { ...n, etag: void 0, staleAt: Math.min(n.staleAt, Date.now()), catalog: { ...n.catalog, state: i } });
}
function v(e) {
  return (0, import_chunk_w578pjby.t)(`[servedCatalog] selection write skipped: ${e}`), { status: "skipped", reason: e };
}
function B(e) {
  let o = e.trim().toLowerCase();
  return o === "opusplan" || o === "opusplan[1m]";
}
async function Ett(...e) {
  let o = await H(...e);
  if (!o.ok) return { ...o, message: (0, import_chunk_kx2fp6pc.wn)(o.message) };
  return o.creditsRefusal === void 0 ? o : { ...o, creditsRefusal: (0, import_chunk_kx2fp6pc.wn)(o.creditsRefusal) };
}
async function H(e, o, r, a) {
  let n = e === "default" ? null : e;
  if (n === null) {
    let i = (0, import_chunk_865at33z.F4)((0, import_chunk_865at33z.xE)(), "switch");
    if (i !== null) return (0, import_chunk_cqa9hrgx.m)("model_switch", "denied_by_managed_settings"), { ok: false, message: i, code: "restricted_by_org" };
  }
  let c;
  if (n) {
    let i = q(n);
    if (i !== null) {
      let f = (0, import_chunk_zmb62hr5.Yt)(n.trim().toLowerCase()), p = (0, import_chunk_865at33z.Mm)(n), g = (0, import_chunk_865at33z.zZ)("model");
      switch (i.kind) {
        case "disabled":
          return (0, import_chunk_cqa9hrgx.m)("model_switch", "alias_1m_disabled"), { ok: false, message: g ? `1M context is turned off here (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${p}' isn't available. Run ${g} ${f} instead.` : `1M context is turned off (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${p}' isn\u2019t available. Switch to ${f} instead.`, code: "alias_1m_disabled" };
        case "unsupported":
          return (0, import_chunk_cqa9hrgx.m)("model_switch", "alias_1m_unsupported"), { ok: false, message: g ? `${(0, import_chunk_kx2fp6pc.Ek)((0, import_chunk_865at33z.yi)(i.carrier))} doesn't have a 1M context window, so '${p}' isn't available. Run ${g} ${f} to use it with its standard context window.` : `${(0, import_chunk_kx2fp6pc.Ek)((0, import_chunk_865at33z.yi)(i.carrier))} doesn\u2019t have a 1M context window, so '${p}' isn\u2019t available. Switch to ${f} to use its standard context window.`, code: "alias_1m_unsupported" };
        case "noModeDependentVariant":
          return (0, import_chunk_cqa9hrgx.m)("model_switch", "alias_1m_no_mode_variant"), { ok: false, message: g ? `'${p}' isn't available: the ${f} setting switches models in plan mode and has no 1M form. Run ${g} ${f}, or ${g} sonnet[1m] for a 1M context window.` : `'${p}' isn\u2019t available, because the ${f} setting switches models in plan mode and has no 1M form. You can switch to ${f}, or to sonnet[1m] for a 1M context window.`, code: "alias_1m_unsupported" };
      }
    }
  }
  if (n && (0, import_chunk_865at33z.Dj)(n, (0, import_chunk_865at33z.Lj)())) {
    let i = (0, import_chunk_865at33z.aI)(n);
    if (i === null) {
      let f = await (0, import_chunk_n02njw1s.trr)(n, o, r);
      if (f.outcome === "probe_failed") return (0, import_chunk_cqa9hrgx.m)("model_switch", "entitlement_probe_failed"), { ok: false, message: f.error, code: "check_failed" };
      if (f.outcome !== "overturned") {
        (0, import_chunk_cqa9hrgx.m)("model_switch", "denied_by_entitlement");
        let p = (0, import_chunk_865at33z.zZ)("model");
        return { ok: false, message: `Model '${(0, import_chunk_865at33z.Mm)(n)}' is restricted by your organization's settings. ${p ? `Run ${p} to choose a different model.` : "Switch to a different model."}`, code: "restricted_by_org" };
      }
    } else c = n, n = i;
  } else if (n && !(0, import_chunk_865at33z.wo)(n)) {
    let i = (0, import_chunk_865at33z.aI)(n);
    if (i === null) return (0, import_chunk_cqa9hrgx.m)("model_switch", Y(n)), { ok: false, message: `Model '${(0, import_chunk_865at33z.Mm)(n)}' is not available. Your organization restricts model selection.`, code: "restricted_by_org" };
    c = n, n = i;
  }
  if (n && OZs(n)) return (0, import_chunk_cqa9hrgx.m)("model_switch", "opus_1m_unavailable"), { ok: false, message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m", code: "unavailable_for_account" };
  if (n && IZs(n)) return (0, import_chunk_cqa9hrgx.m)("model_switch", "sonnet_1m_unavailable"), { ok: false, message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m", code: "unavailable_for_account" };
  if (n && (!(0, import_chunk_t7fzcstv.bt)() || (0, import_chunk_n02njw1s.Fqe)(n))) {
    let i = (0, import_chunk_865at33z.$4)(n, { namedPick: !(0, import_chunk_n02njw1s.Fqe)(n) });
    if (i) switch (i.reason) {
      case "disabled":
        if (i.notOffered) return (0, import_chunk_cqa9hrgx.m)("model_switch", "not_offered"), { ok: false, message: `Model '${(0, import_chunk_865at33z.Mm)(n)}' is not available. ${(0, import_chunk_kx2fp6pc.$4t)(i.description)}`, code: "not_offered" };
        return (0, import_chunk_cqa9hrgx.m)("model_switch", "disabled_by_org"), { ok: false, message: `Model '${(0, import_chunk_865at33z.Mm)(n)}' is not currently available for your account. ${(0, import_chunk_kx2fp6pc.$4t)(i.description)}`.trimEnd(), code: "unavailable_for_account" };
      case "absent": {
        let f = await (0, import_chunk_n02njw1s.NZs)((0, import_chunk_n02njw1s.x3o)(n), { forceServerProbe: true, credentials: r }, a?.deadlineMs), p = L(f, a);
        if (!f.valid && !p) {
          (0, import_chunk_cqa9hrgx.m)("model_switch", f.notFound ? "fable_unavailable" : "fable_probe_failed");
          let g = (0, import_chunk_865at33z.zZ)("model");
          return { ok: false, message: f.notFound ? `${i.displayName} isn't available for your account yet. ${g ? `Run ${g} to pick another model.` : "Switch to a different model."}` : f.error, ...N(f.notFound || f.permissionDenied ? "unavailable_for_account" : T(f)), ...f.serverRefusedModel === true && c === void 0 && { serverRefusedModel: true } };
        }
        if (f.valid) (0, import_chunk_9xz0nsgn.h4e)(o, r);
        return { ok: true, model: (0, import_chunk_n02njw1s.Fqe)(n) ? n.trim().toLowerCase() : n, ...c !== void 0 && { substitutedFrom: c }, ...p && { unconfirmed: true } };
      }
    }
  }
  if (!n) return { ok: true, model: n };
  if ((0, import_chunk_n02njw1s.Fqe)(n)) return { ok: true, model: n.trim().toLowerCase() };
  try {
    let i = await (0, import_chunk_n02njw1s.NZs)((0, import_chunk_n02njw1s.x3o)(n), { credentials: r, ...a?.confirmWithServer === false && { serverProbe: false } }, a?.deadlineMs), f = !i.valid && i.creditsRequired === true && a?.acceptCreditsRequired === true && err(P(n)), p = L(i, a), g = !i.valid && i.sharedLimitReached === true && a?.acceptSharedLimitRefusal === true;
    if (!i.valid && !f && !p && !g) return (0, import_chunk_cqa9hrgx.m)("model_switch", "invalid_model"), { ok: false, message: i.error, ...N(T(i)), ...i.serverRefusedModel === true && c === void 0 && { serverRefusedModel: true } };
    return { ok: true, model: P(n), ...c !== void 0 && { substitutedFrom: c }, ...!i.valid && f && { creditsRefusal: i.error }, ...p && { unconfirmed: true } };
  } catch (i) {
    return (0, import_chunk_cqa9hrgx.m)("model_switch", "validate_exception"), { ok: false, message: `Failed to validate model: ${(0, import_chunk_kx2fp6pc.$4t)((0, import_chunk_jv7av99m.d)(i))}`, code: "check_failed" };
  }
}
function P(e) {
  return e;
}
async function VD(e, o, r, a, n = {}) {
  let c = o(), i = (0, import_chunk_bzyb60p0.OO)(c), f = j(c, r);
  if (f.length === 0) return { decision: "proceed", skipConfirm: false, messages: [] };
  let p = [], g, M = false, _ = true;
  for (let h of f) {
    let S = await (0, import_chunk_bzyb60p0.nfi)(e, { ...h, requestedModel: r, source: a }, { signal: n.signal });
    if (p.push(...S.messages), S.decision === "block") return { ...S, messages: p };
    if (S.decision === "ask") M = true, g ??= S.reason;
    else _ = _ && S.skipConfirm;
  }
  if ((0, import_chunk_bzyb60p0.OO)(o()) !== i) {
    if (n.revalidating) return { decision: "block", reason: "the session model changed while a PreModelSwitch hook was running; pick again", messages: p };
    let h = await VD(e, o, r, a, { ...n, revalidating: true });
    return { ...h, messages: [...p, ...h.messages] };
  }
  return M ? { decision: "ask", reason: g, messages: p } : { decision: "proceed", skipConfirm: _, messages: p };
}
function j(e, o) {
  let r = (0, import_chunk_bzyb60p0.gdr)(e), a = e.toolPermissionContext.mode, n = [a, a === "plan" ? "default" : "plan"], c = /* @__PURE__ */ new Set(), i = [];
  for (let f of n) {
    let p = (0, import_chunk_bzyb60p0.hdr)(r, f), g = (0, import_chunk_bzyb60p0.hdr)(o, f), M = `${p}\0${g}`;
    if (p !== g && !c.has(M)) c.add(M), i.push({ fromModel: p, toModel: g });
  }
  return i;
}
function vDt(e) {
  return [`Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${Vm(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`, ...e.messages.map(Vm)].join(`
`);
}
function Vm(e) {
  return (0, import_chunk_mh32mevx.xl)((0, import_chunk_mh32mevx.of)((0, import_chunk_mh32mevx.lCr)(e.trimEnd())));
}
function VJ(e, o, r) {
  return [`Model switch to ${TP(e)} was blocked by a PreModelSwitch hook${o ? `: ${Vm(o)}` : ""}`, ...r.map(Vm)].join(`
`);
}
async function TDt(e, o, r, a, n, c, i, f, p) {
  let g = r().fastMode;
  if ((0, import_chunk_f9x2f6cx.KEe)(), (0, import_chunk_bzyb60p0.mR)(e, r(), o, c), a((b) => ({ ...b, mainLoopModel: o, mainLoopModelForSession: null })), i !== void 0) (0, import_chunk_cqa9hrgx.l)("model_switch", "family_alias_stepped_down");
  else (0, import_chunk_cqa9hrgx.u)("model_switch");
  let M = (0, import_chunk_865at33z.na)() ? (0, import_chunk_865at33z.jU)(o, g) : !!g;
  if ((0, import_chunk_865at33z.na)()) {
    if ((0, import_chunk_865at33z.ooe)(), M !== !!g) a((b) => ({ ...b, fastMode: M })), (0, import_chunk_865at33z.KV)(g, M);
  }
  let _ = n ? await $Cn(o, f) : null;
  p?.(_);
  let h = _?.kind === "saved", S = `${import_chunk_bzyb60p0.bHe}${(0, import_chunk_bzyb60p0.CT)(TP(o))}${h ? import_chunk_bzyb60p0.wHe : " for this session only"}`;
  S += ktt(g, M, o, { announceKeptOn: true }), S += UCn(_), S += (h ? xZs(o) : "") || PZs(o);
  let O = (0, import_chunk_t7fzcstv.bt)() ? null : (0, import_chunk_eg7q2c7h.e9r)(hie(o), r().autoCompactWindow);
  if (O !== null) S += `
${O.text}`;
  return S;
}
var z = 3e3, Z5r = 15e3;
async function $Cn(e, o, r = z) {
  if ((0, import_chunk_zmb62hr5.jM)(e)) return null;
  let a = (0, import_chunk_2yx6c1y2.Mr)("userSettings", { model: e ?? void 0 }, void 0, o);
  a.then((c) => c.error ? void 0 : x(e)).catch(() => {
  });
  let n = await (0, import_chunk_5appeerh.me)(a, r);
  if (n === void 0) return (0, import_chunk_cqa9hrgx.l)("model_set_default", "unconfirmed"), { kind: "unconfirmed" };
  if (n.error) return (0, import_chunk_cqa9hrgx.m)("model_set_default", "write_failed"), { kind: "failed", error: n.error };
  return (0, import_chunk_cqa9hrgx.u)("model_set_default"), { kind: "saved" };
}
function UCn(e) {
  if (e === null || e.kind === "saved") return "";
  let o = (0, import_chunk_n2dbhmj2.os)((0, import_chunk_2yx6c1y2._n)("userSettings") ?? "settings.json");
  switch (e.kind) {
    case "unconfirmed":
      return ` \xB7 couldn't confirm it was saved as your default (${o} is still being written)`;
    case "failed": {
      let r = e.error.cause, a = r instanceof Error ? `can't be written (${(0, import_chunk_jv7av99m.w)(r) ?? (0, import_chunk_kx2fp6pc.$4t)(r.message)})` : "isn't valid JSON";
      return ` \xB7 couldn't save it as your default: ${o} ${a}`;
    }
  }
}
function xZs(e) {
  let o = import_chunk_c203g5kd.s.ANTHROPIC_MODEL;
  if (!o || !(0, import_chunk_865at33z.wo)(o)) return "";
  if (!C(e ?? (0, import_chunk_865at33z.xE)(), o)) return "";
  return k("ANTHROPIC_MODEL is set to ", (0, import_chunk_865at33z.UN)(o), " \u2014 new sessions use that while it is set");
}
function C(e, o) {
  let r = (0, import_chunk_865at33z.jt)(e), a = (0, import_chunk_865at33z.jt)(o);
  return (0, import_chunk_865at33z.oz)(e) || (0, import_chunk_865at33z.St)(r, { identity: true }) !== (0, import_chunk_865at33z.St)(a, { identity: true }) || /\[1m\]$/i.test(r) !== /\[1m\]$/i.test(a);
}
function PZs(e) {
  let o = (0, import_chunk_2yx6c1y2.kv)("model");
  if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
    let n = (0, import_chunk_865at33z.hCt)();
    if (n !== null && e !== null && o !== "flagSettings" && !import_chunk_c203g5kd.s.ANTHROPIC_MODEL && C(e, n.model)) return R(n);
    return "";
  }
  if (o !== "policySettings") {
    let n = (0, import_chunk_865at33z.hCt)();
    if (n !== null && !import_chunk_c203g5kd.s.ANTHROPIC_MODEL) {
      if (e === null) return "";
      if (C(e, n.model)) return R(n);
      return "";
    }
  }
  let r = (0, import_chunk_2yx6c1y2._e)(o)?.model;
  if (r === void 0 || e === r) return "";
  let a = o === "policySettings" ? "Managed settings" : (0, import_chunk_6mfepmbb.BA)(o);
  return k(`${a} pins `, (0, import_chunk_865at33z.UN)(r), " \u2014 that applies on restart");
}
function k(e, o, r) {
  return `${import_chunk_d57v19zt.Re.dim(`
     ${e}`)}${(0, import_chunk_bzyb60p0.CT)(o)}${import_chunk_d57v19zt.Re.dim(r)}`;
}
function R(e) {
  let o = (0, import_chunk_865at33z.UN)(e.model);
  switch (e.kind) {
    case "org":
      return k("Your organization's default (", o, ") applies on restart");
    case "standard":
      return k("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
  }
}
function A(e) {
  return (0, import_chunk_zmb62hr5.Yt)(e.toLowerCase().trim()) === "opusplan" ? [(0, import_chunk_865at33z.RE)(), (0, import_chunk_865at33z.jt)(e)] : [(0, import_chunk_865at33z.jt)(e)];
}
function q(e) {
  let o = e.toLowerCase().trim(), r = (0, import_chunk_zmb62hr5.Yt)(o);
  if (r === o || !(0, import_chunk_n02njw1s.Fqe)(o)) return null;
  if ((0, import_chunk_865at33z.H1)()) return { kind: "disabled" };
  let a = A(o).find((n) => (0, import_chunk_865at33z.rpn)(n));
  if (a !== void 0) return { kind: "unsupported", carrier: (0, import_chunk_zmb62hr5.Yt)(a) };
  if ((0, import_chunk_865at33z.oz)(r) && (0, import_chunk_865at33z.cde)(o) === null) return { kind: "noModeDependentVariant" };
  return null;
}
function OZs(e) {
  let o = e.toLowerCase();
  if (!(o.includes("opus") && o.includes("[1m]"))) return false;
  if (A(e).every((r) => (0, import_chunk_865at33z.dI)(r))) return false;
  return !(0, import_chunk_865at33z.VZ)() && !(0, import_chunk_865at33z.yNe)();
}
var K = /* @__PURE__ */ new Set(["claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet"]);
function IZs(e) {
  let o = e.toLowerCase();
  if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) return false;
  if (K.has((0, import_chunk_865at33z.St)(o.trim(), { identity: true }))) return false;
  if ((0, import_chunk_865at33z.dI)((0, import_chunk_865at33z.jt)(e))) return false;
  return !(0, import_chunk_865at33z.KZ)();
}
function hie(e) {
  return (0, import_chunk_865at33z.jt)(e ?? (0, import_chunk_865at33z.xE)());
}
function A3o(e, o, r, a, n) {
  if (n === void 0) return false;
  let c = (0, import_chunk_f9x2f6cx.rw)();
  if (c === 0 || c === a) return false;
  let i = hie(e), f = hie((0, import_chunk_bzyb60p0.oCe)({ mainLoopModel: o, mainLoopModelForSession: r })), p = (0, import_chunk_zmb62hr5.ur)((0, import_chunk_zmb62hr5.gF)(i));
  if (p === (0, import_chunk_zmb62hr5.ur)((0, import_chunk_zmb62hr5.gF)(f))) return false;
  let g = n.response?.message.model;
  return !(typeof g === "string" && (g === p || (0, import_chunk_f9x2f6cx.cFr)(p)?.has(g) === true));
}
function Znr(e) {
  let o = (0, import_chunk_bzyb60p0.CT)(TP(e.mainLoopModel)), r = (0, import_chunk_k67pwqya._we)((0, import_chunk_k67pwqya.bc)(e)), a = r !== void 0 ? ` (effort: ${r})` : "", n = (0, import_chunk_bzyb60p0.Fyt)(e.mainLoopModelForSession, e.mainLoopModel);
  if (n !== null) return `${import_chunk_bzyb60p0.GZo}${(0, import_chunk_bzyb60p0.CT)(TP(n))} (this session only)${a}
Base model: ${o}`;
  let c = (0, import_chunk_gq1dr8pm.l8e)(), i = c !== void 0 ? ` (${(0, import_chunk_gq1dr8pm.jmo)((0, import_chunk_bzyb60p0.CT)(TP(c.previousModel)))})` : "";
  return `${import_chunk_bzyb60p0.GZo}${o}${i}${a}`;
}
function err(e) {
  let o = (0, import_chunk_865at33z.jt)(e ?? (0, import_chunk_865at33z.xE)());
  return (0, import_chunk_gq1dr8pm.ccl)(o);
}
var vLa = "needs usage-credits consent \u2014 run /model first";
function hMe(e) {
  if (e === null) return false;
  return (0, import_chunk_gq1dr8pm.C7)((0, import_chunk_865at33z.jt)(e));
}
function L(e, o) {
  return false;
}
function T(e) {
  if (e.notFound) return "not_found";
  if (e.permissionDenied) return "unavailable_for_account";
  if (e.notAllowed) return "restricted_by_org";
  if (e.oauthOrgNotAllowed) return "oauth_org_not_allowed";
  if (e.authFailed) return "auth_failed";
  if (e.creditsRequired && e.serverRefusedModel) return "credits_required";
  if (e.rateLimited) return "rate_limit";
  if (e.noAnswer) return "check_unreachable";
  if (e.serverError) return "check_server_error";
  if (e.retryable) return "check_failed";
  return e.rejected ? "check_rejected" : void 0;
}
function N(e) {
  return e === void 0 ? {} : { code: e };
}
function Y(e) {
  try {
    return (0, import_chunk_865at33z.O7e)(e) ? "denied_by_managed_settings" : "not_allowed";
  } catch {
    return "not_allowed";
  }
}
