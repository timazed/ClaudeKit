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
var chunk_mb0hth5m_exports = {};
__export(chunk_mb0hth5m_exports, {
  Fzl: () => Fzl,
  GJl: () => GJl,
  NXr: () => NXr,
  WJl: () => WJl,
  jJl: () => jJl,
  pYo: () => pYo,
  zJl: () => zJl
});
module.exports = __toCommonJS(chunk_mb0hth5m_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_jrvfex01 = require("/$bunfs/root/chunk-jrvfex01.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
function M() {
  return (0, import_chunk_sjqze7qg.IFt)(import_chunk_865at33z.JRr);
}
async function WJl() {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "bedrock") return [];
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = (0, import_chunk_sjqze7qg.Kfr)(M(), (l) => l.includes("application-inference-profile"));
  if (e.length === 0) return [];
  (0, import_chunk_y53wbr8a.a)("tengu_bedrock_upgrade_check", { stale_tiers: (0, import_chunk_78g0060s.Gs)(e.length) });
  let i;
  try {
    i = await (0, import_chunk_865at33z.sRr)();
  } catch {
    return [];
  }
  let c = (0, import_chunk_865at33z.sGn)(await (0, import_chunk_xfj2cwfv.U1)()), r = [];
  for (let l of e) {
    let p = import_chunk_zhr7rpv7.Xs[l.defaultKey].firstParty, m = (0, import_chunk_865at33z.Tfn)(i, p, c);
    if (!m) continue;
    if ((0, import_chunk_sjqze7qg.v5)(m)) {
      (0, import_chunk_w578pjby.t)(`[bedrock-upgrade] ${(0, import_chunk_sjqze7qg.nWe)(l.tier, "upgrade", [m])}`);
      continue;
    }
    let A = (0, import_chunk_865at33z.Y_)(import_chunk_zhr7rpv7.Xs[l.pinnedKey].firstParty), _ = (0, import_chunk_865at33z.Y_)(import_chunk_zhr7rpv7.Xs[l.defaultKey].firstParty);
    if (!A || !_) continue;
    r.push({ tier: l.tier, envVar: l.envVar, fromKey: l.pinnedKey, fromMarketingName: A, toKey: l.defaultKey, toMarketingName: _, toBedrockId: m });
  }
  let g = (await Promise.all(r.map(async (l) => {
    let p = await NXr(l.toBedrockId, l.tier, { isDefault: true, versionTooOld: "unavailable" });
    return (0, import_chunk_y53wbr8a.a)("tengu_bedrock_probe_result", { tier: (0, import_chunk_78g0060s.f)(l.tier), model_id: (0, import_chunk_865at33z.Xt)(l.toBedrockId), accessible: p }), p ? l : null;
  }))).filter((l) => l !== null);
  return (0, import_chunk_w578pjby.t)(`[bedrock-upgrade] tiersWithPin=${e.length} candidates=${g.length}`), g;
}
function jJl(e) {
  return (0, import_chunk_sjqze7qg.MFt)(e, M());
}
async function GJl() {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "bedrock") return [];
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let e = (0, import_chunk_sjqze7qg.Vfr)(Date.now()), i = (0, import_chunk_2yx6c1y2.vt)().modelOverrides, c = (0, import_chunk_sjqze7qg.USi)() ? await (0, import_chunk_xfj2cwfv.U1)() : void 0, r = M(), u = (0, import_chunk_sjqze7qg.HFt)(r, i);
  if (u.length === 0) return [];
  (0, import_chunk_y53wbr8a.a)("tengu_bedrock_default_check", { unpinned_tiers: (0, import_chunk_78g0060s.Gs)(u.length) });
  let g;
  try {
    g = await (0, import_chunk_865at33z.sRr)();
  } catch {
    g = [];
  }
  let l = c ?? await (0, import_chunk_xfj2cwfv.U1)(), p = (0, import_chunk_865at33z.sGn)(l), m = u.some((o) => o.tier === "sonnet"), A = await Promise.all(u.map(async (o) => {
    let h = import_chunk_zhr7rpv7.Xs[o.defaultKey], b = r[o.tier].documentTarget, D = r[o.tier].fromDocument === true, T = b === void 0 ? void 0 : O(b.modelId, g, p), n = T ?? v(o.defaultKey, g, p);
    if (!n) return null;
    if ((0, import_chunk_sjqze7qg.v5)(n)) return (0, import_chunk_w578pjby.t)(`[bedrock-fallback] ${(0, import_chunk_sjqze7qg.nWe)(o.tier, "check", [n])}`), null;
    await S(o, n, g, p, i, b, D, m);
    let y = {}, k = await NXr(n, o.tier, { isDefault: true, ...r[o.tier].fromDocument && { versionTooOld: "unavailable" }, onVerdict: (E, C) => {
      y.verdict = E, y.at = C;
    } });
    if ((0, import_chunk_y53wbr8a.a)("tengu_bedrock_probe_result", { tier: (0, import_chunk_78g0060s.f)(o.tier), model_id: (0, import_chunk_865at33z.Xt)(n), accessible: k }), k || y.verdict === "temporary") return null;
    if (y.verdict === "refused") (0, import_chunk_865at33z.qZ)(n, (0, import_chunk_865at33z.eke)(n), (y.at ?? Date.now()) + import_chunk_jrvfex01.k4e);
    let d = await B(o.defaultKey, o.tier, g, p, i, e, b !== void 0, D);
    if (!d) return null;
    if (y.verdict !== "refused") {
      if (!(d.answeredLive === true || d.adminMapped === true || await NXr(d.regionalId, d.crossTier ? "sonnet" : o.tier, { live: true }))) return null;
      if (y.verdict === "denied" && d.adminMapped !== true) (0, import_chunk_865at33z.qZ)(n, (0, import_chunk_865at33z.eke)(n), Date.now() + import_chunk_jrvfex01.k4e), Fzl(n, o.tier, "refused");
    }
    let w = b?.name ?? (0, import_chunk_865at33z.Y_)(h.firstParty), R = (0, import_chunk_865at33z.Y_)(import_chunk_zhr7rpv7.Xs[d.key].firstParty);
    if (!w || !R) return null;
    return { tier: o.tier, envVar: o.envVar, defaultKey: o.defaultKey, defaultName: w, ...T !== void 0 && { documentTargetId: T }, fallbackKey: d.key, fallbackName: R, fallbackBedrockId: d.regionalId, ...d.crossTier && { crossTier: true } };
  })), _ = [];
  for (let o of A) if (o !== null) _.push(o);
  return (0, import_chunk_w578pjby.t)(`[bedrock-fallback] unpinnedTiers=${u.length} fallbacks=${_.length}`), _;
}
async function zJl() {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "bedrock" || import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || !(0, import_chunk_865at33z.oxr)()) return [];
  await (0, import_chunk_xfj2cwfv.U1)(), await (0, import_chunk_865at33z.sRr)().catch(() => {
    return;
  });
  let e = await (0, import_chunk_sjqze7qg.Yfr)(async (i, c) => {
    let r = {}, u = await NXr(i, c, { isDefault: true, versionTooOld: "unavailable", onVerdict: (g) => {
      r.verdict = g;
    } });
    return (0, import_chunk_y53wbr8a.a)("tengu_bedrock_probe_result", { tier: (0, import_chunk_78g0060s.f)(c ?? "default"), model_id: (0, import_chunk_865at33z.Xt)(i), accessible: u }), u || r.verdict === "temporary";
  }, (0, import_chunk_2yx6c1y2.vt)().modelOverrides);
  return (0, import_chunk_w578pjby.t)(`[bedrock-fallback] refutedDocumentDefaults=${e.length}`), e;
}
async function S(e, i, c, r, u, g, l, p) {
  let m = (n, y) => ({ id: y, name: (0, import_chunk_865at33z.Y_)(import_chunk_zhr7rpv7.Xs[n].firstParty) ?? import_chunk_zhr7rpv7.Xs[n].firstParty }), A = (n) => Boolean(u?.[import_chunk_zhr7rpv7.Xs[n].firstParty]), _ = (n) => A(n) && !(0, import_chunk_sjqze7qg.v5)(String((0, import_chunk_865at33z.Gg)()[n])), o = (n) => n.flatMap((y) => {
    let k = v(y, c, r);
    return k && !(0, import_chunk_sjqze7qg.v5)(k) ? [m(y, k)] : [];
  }), h = (n, y) => o((0, import_chunk_sjqze7qg.rWe)(n, y).filter((k) => !A(k))), b = (0, import_chunk_sjqze7qg.rWe)(e.defaultKey, e.tier, g !== void 0), D = l ? b.find(_) : void 0, T = [g === void 0 ? m(e.defaultKey, i) : { id: i, name: g.name }, ...o((D === void 0 ? b : b.slice(0, b.indexOf(D))).filter((n) => !A(n)))];
  if (D !== void 0) T.push(m(D, String((0, import_chunk_865at33z.Gg)()[D])));
  else if (e.tier === "opus") {
    let n = v(import_chunk_865at33z.zU, c, r), y = !n ? [] : !(0, import_chunk_sjqze7qg.v5)(n) ? [m(import_chunk_865at33z.zU, n)] : p ? h(import_chunk_865at33z.zU, "sonnet") : [];
    T.push(...y.map((k) => ({ ...k, crossTier: true })));
  }
  (0, import_chunk_865at33z.Czt)("bedrock", e.tier, e.envVar, T), await Promise.all(T.slice(1).map(async (n) => {
    let y = n.crossTier ? "sonnet" : e.tier, k = await K(n.id, y);
    if (k?.state === "refused") (0, import_chunk_865at33z.qZ)(n.id, (0, import_chunk_865at33z.eke)(n.id), k.at + import_chunk_jrvfex01.k4e);
  })).catch(() => {
  });
}
function v(e, i, c) {
  let r = import_chunk_zhr7rpv7.Xs[e], u = (0, import_chunk_865at33z.Tfn)(i, r.firstParty, c);
  if (u) return u;
  if (!r.bedrock) return null;
  return (0, import_chunk_865at33z.Qlt)(r.bedrock, c);
}
function O(e, i, c) {
  let r = (0, import_chunk_865at33z.uRr)(e);
  return (r === void 0 ? void 0 : (0, import_chunk_865at33z.MCs)(r, i, c)) ?? e;
}
async function B(e, i, c, r, u, g, l = false, p = false) {
  let m = [];
  function A(d, w) {
    return d.flatMap((R) => {
      let E = v(R, c, r);
      if (!E) return [];
      if ((0, import_chunk_sjqze7qg.v5)(E)) return m.push(w === i ? E : `${E} (the cross-tier Sonnet default)`), [];
      return [{ key: R, regionalId: E, probeTier: w }];
    });
  }
  let _ = (d) => Boolean(u?.[import_chunk_zhr7rpv7.Xs[d].firstParty]), o = (d) => _(d) && !(0, import_chunk_sjqze7qg.v5)(String((0, import_chunk_865at33z.Gg)()[d])), h = (0, import_chunk_sjqze7qg.rWe)(e, i, l), b = p ? h.find(o) : void 0, D = (b === void 0 ? h : h.slice(0, h.indexOf(b))).filter((d) => !_(d)), T = [A(D, i)];
  if (i === "opus" && b === void 0) T.push(A([import_chunk_865at33z.zU], "sonnet"));
  if (m.length > 0) (0, import_chunk_w578pjby.t)(`[bedrock-fallback] ${(0, import_chunk_sjqze7qg.nWe)(i, "fallback", m)}`);
  let n = /* @__PURE__ */ new Set(), y = (d) => ({ onVerdict: (w, R) => {
    if (w === "refused") (0, import_chunk_865at33z.qZ)(d.regionalId, (0, import_chunk_865at33z.eke)(d.regionalId), (R ?? Date.now()) + import_chunk_jrvfex01.k4e);
    else if (w === "accessible") {
      if ((0, import_chunk_865at33z.cAo)(d.regionalId), R === void 0) n.add(d.regionalId);
    }
  } }), k = await (0, import_chunk_jrvfex01.UXr)(T, (d, w) => NXr(d.regionalId, d.probeTier, { ...w && { live: w }, ...l && d.key === e && { isDefault: true }, ...p && { versionTooOld: "unavailable" }, ...y(d) }), async (d) => (await K(d.regionalId, d.probeTier))?.state === "refused", g);
  if (!k) return b === void 0 ? null : { key: b, regionalId: String((0, import_chunk_865at33z.Gg)()[b]), adminMapped: true };
  return { key: k.key, regionalId: k.regionalId, ...k.probeTier !== i && { crossTier: true }, ...n.has(k.regionalId) && { answeredLive: true } };
}
async function NXr(e, i, c) {
  let r = await P(i);
  if (r === void 0) return c?.onVerdict?.("temporary"), false;
  return await (0, import_chunk_jrvfex01.$Xr)("bedrock", await I(r), e, () => L(e, r), c) === "accessible";
}
async function Fzl(e, i, c) {
  try {
    let r = await P(i), u = r && await I(r);
    if (u) await (0, import_chunk_jrvfex01.r_t)(u, e, c);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[3p-model-memory] bedrock record failed: ${r}`);
  }
}
async function P(e) {
  try {
    return e === "haiku" && (0, import_chunk_2gtmjt3y.ZEe)(import_chunk_c203g5kd.s.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || await (0, import_chunk_xfj2cwfv.U1)();
  } catch {
    return;
  }
}
function I(e) {
  return (0, import_chunk_jrvfex01.VJt)("bedrock", () => [e, import_chunk_c203g5kd.s.ANTHROPIC_BEDROCK_BASE_URL, import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : void 0, ...pYo(), (0, import_chunk_jrvfex01.zJt)()]);
}
async function K(e, i) {
  let c = await P(i), r = c && await I(c);
  return r ? (0, import_chunk_jrvfex01.n_t)(r, e) : void 0;
}
function pYo() {
  let e = (0, import_chunk_2yx6c1y2.vt)();
  return [(0, import_chunk_ch6jxpf8.Bee)("AWS_PROFILE"), import_chunk_c203g5kd.s.AWS_CONFIG_FILE, import_chunk_c203g5kd.s.AWS_SHARED_CREDENTIALS_FILE, import_chunk_c203g5kd.s.AWS_ACCESS_KEY_ID, import_chunk_c203g5kd.s.AWS_ROLE_ARN, import_chunk_c203g5kd.s.AWS_WEB_IDENTITY_TOKEN_FILE, import_chunk_c203g5kd.s.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, import_chunk_c203g5kd.s.AWS_CONTAINER_CREDENTIALS_FULL_URI, e.awsCredentialExport, e.awsAuthRefresh];
}
async function L(e, i) {
  try {
    let [{ AnthropicBedrock: c }, { getProxyFetchOptions: r }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-drfb6rw5.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cydghwmm.js")))]), u = { awsRegion: i, maxRetries: 0, timeout: 8e3, fetchOptions: r({ url: import_chunk_c203g5kd.s.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${i}.amazonaws.com` }) }, g, l = (0, import_chunk_gq1dr8pm.c0e)(), p = import_chunk_c203g5kd.s.AWS_BEARER_TOKEN_BEDROCK;
    {
      let { hybridHelperCredential: m } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mn0yw68p.js")));
      p = await m("bedrock") ?? p;
    }
    if (p) g = new c({ ...u, apiKey: p, defaultHeaders: { ...l, ...(0, import_chunk_xfj2cwfv.YT)(), ...(0, import_chunk_xfj2cwfv.Y9)(), Authorization: `Bearer ${p}`, ...!(0, import_chunk_xfj2cwfv.BS)() && { "X-Api-Key": null } } });
    else {
      let m = import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_BEDROCK_AUTH, A = (0, import_chunk_865at33z.cc)(), _ = { authToken: null, defaultHeaders: { ...l, ...(0, import_chunk_xfj2cwfv.YT)(), ...(0, import_chunk_xfj2cwfv.Y9)(), Authorization: null, ...!(0, import_chunk_xfj2cwfv.BS)() && { "X-Api-Key": null } }, ...import_chunk_xfj2cwfv.jj }, o = m ? (0, import_chunk_xfj2cwfv.Kdt)() : void 0, h = m || A ? null : await (0, import_chunk_865at33z.lhe)();
      g = h ? new c({ ...u, ..._, awsAccessKey: h.accessKeyId, awsSecretKey: h.secretAccessKey, awsSessionToken: h.sessionToken }) : new c({ ...u, ...m && !o && { skipAuth: true, authToken: null, defaultHeaders: { ...l, ...(0, import_chunk_xfj2cwfv.Y9)() }, ...import_chunk_xfj2cwfv.jj }, ...m && o && { apiKey: o.match(/^Bearer (.+)$/i)?.[1] ?? o, defaultHeaders: { ...l, ...(0, import_chunk_xfj2cwfv.Y9)(), Authorization: o, ...(0, import_chunk_xfj2cwfv.m6n)() } }, ...!m && _, ...!m && A && { providerChainResolver: (0, import_chunk_865at33z.bNe)("Bedrock").providerChainResolver }, ...!m && !A && { providerChainResolver: (0, import_chunk_865at33z.lke)(i) } });
    }
    return await g.messages.create((0, import_chunk_sjqze7qg.lnn)(e)), { accessible: true };
  } catch (c) {
    if (c?.status === 429) return { accessible: true };
    return { accessible: false, error: c };
  }
}
