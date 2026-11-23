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
var chunk_sxscgpaq_exports = {};
__export(chunk_sxscgpaq_exports, {
  Mii: () => Mii,
  Q8o: () => Q8o,
  YRn: () => YRn,
  vW: () => vW
});
module.exports = __toCommonJS(chunk_sxscgpaq_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
function D(i) {
  let o = (0, import_chunk_865at33z.npn)("sonnet", i), u = (0, import_chunk_865at33z.npn)("opus", i), r = (0, import_chunk_865at33z.npn)("haiku", i);
  return o === void 0 || u === void 0 || r === void 0 ? void 0 : (0, import_chunk_sjqze7qg.IFt)(u, o, r);
}
function E(i) {
  let o = D(i);
  if (o === void 0) return;
  let u = (0, import_chunk_2yx6c1y2.vt)().modelOverrides;
  for (let r of (0, import_chunk_sjqze7qg.HFt)(o, u)) {
    let { documentTarget: l, fromDocument: c } = o[r.tier], n = l?.modelId ?? import_chunk_zhr7rpv7.Xs[r.defaultKey][i];
    if (n === null || (0, import_chunk_sjqze7qg.v5)(n)) continue;
    let d = (0, import_chunk_sjqze7qg.rWe)(r.defaultKey, r.tier, l !== void 0), e = d.findIndex((m) => {
      let g = import_chunk_zhr7rpv7.Xs[m][i];
      return g !== null && (0, import_chunk_865at33z.GU)(g);
    }), k = e < 0 ? d : d.slice(0, e), O = new Set(k.filter((m) => Boolean(u?.[import_chunk_zhr7rpv7.Xs[m].firstParty]))), p = c === true ? k.find((m) => O.has(m) && !(0, import_chunk_sjqze7qg.v5)(String((0, import_chunk_865at33z.Gg)()[m]))) : void 0, L = [l === void 0 ? b(r.defaultKey, n) : { id: n, name: l.name }, ...(p === void 0 ? k : k.slice(0, k.indexOf(p))).flatMap((m) => {
      let g = import_chunk_zhr7rpv7.Xs[m][i];
      return g === null || O.has(m) || (0, import_chunk_sjqze7qg.v5)(g) ? [] : [b(m, g)];
    }), ...p === void 0 ? [] : [b(p, String((0, import_chunk_865at33z.Gg)()[p]))]];
    (0, import_chunk_865at33z.Czt)(i, r.tier, r.envVar, L);
  }
}
function b(i, o) {
  let u = import_chunk_zhr7rpv7.Xs[i].firstParty;
  return { id: o, name: (0, import_chunk_865at33z.Y_)(u) ?? u };
}
var vW = { fable: "Fable", sonnet: "Sonnet", opus: "Opus", haiku: "Haiku" };
async function YRn(i, o, u = import_chunk_sjqze7qg.Oso) {
  let r;
  try {
    return await Promise.race([o, new Promise((l) => {
      r = setTimeout((c, n, d) => {
        (0, import_chunk_w578pjby.t)(`[3p-probe] ${n} hit ${d}ms deadline; proceeding without it`), c([]);
      }, u, l, i, u);
    })]);
  } finally {
    clearTimeout(r);
  }
}
async function P(i, o, u, r = import_chunk_sjqze7qg.Oso) {
  let l = Date.now(), c = await YRn(`${i}-fallback`, o(), r), n = r - (Date.now() - l), d = n > 0 ? await YRn(`${i}-document-default`, u(), n) : [];
  return [c, d];
}
function _(i) {
  switch (i) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      return import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !(0, import_chunk_865at33z.soe)("sonnet");
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      return import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !(0, import_chunk_865at33z.soe)("opus");
    case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
      return import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0 && !(0, import_chunk_865at33z.soe)("haiku");
    case "ANTHROPIC_SMALL_FAST_MODEL":
      return import_chunk_c203g5kd.s.ANTHROPIC_SMALL_FAST_MODEL !== void 0;
    default:
      return false;
  }
}
function T(i, o) {
  switch (i) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_SONNET_MODEL", o);
      break;
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_OPUS_MODEL", o);
      break;
    default:
      return;
  }
  (0, import_chunk_865at33z.PGn)(i, o), (0, import_chunk_865at33z.sPl)(i, o);
}
function Q8o() {
  (0, import_chunk_f9x2f6cx.Jia)({ sonnet: import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !(0, import_chunk_865at33z.soe)("sonnet"), opus: import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !(0, import_chunk_865at33z.soe)("opus") });
}
async function Mii(i) {
  {
    let { startIsSureToBeRefused: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3n4jnb8b.js")));
    if (n()) return { lines: [], hasHardFailure: false };
  }
  Q8o();
  let o = i?.pendingUserModel?.trim(), r = (0, import_chunk_865at33z.fAo)(o === "default" || o === "inherit" || o === "" ? void 0 : o ?? void 0), l = (0, import_chunk_865at33z.MGe)(), c = r != null && r !== "" ? r : o !== void 0 && r == null ? l ?? void 0 : (0, import_chunk_865at33z.Ld)() ?? l ?? void 0;
  switch ((0, import_chunk_zhr7rpv7.ve)()) {
    case "bedrock":
      return { lines: await I(c), hasHardFailure: false };
    case "vertex":
      return { lines: await N(c), hasHardFailure: false };
    case "mantle": {
      let n = false;
      if (l !== null) {
        let e = (0, import_chunk_zmb62hr5.Yt)(l.trim().toLowerCase());
        n = !(e === "opus" || e === "best" || (0, import_chunk_865at33z.St)(e) === (0, import_chunk_865at33z.St)(import_chunk_zhr7rpv7.Xs[import_chunk_865at33z.epn].firstParty)) && (0, import_chunk_865at33z.gCt)();
      }
      let d = r != null && r !== "" || (0, import_chunk_865at33z.Ld)() != null || n;
      return M(d);
    }
    case "foundry": {
      let n = D("foundry"), d = n && (0, import_chunk_sjqze7qg.MFt)(c, n);
      if (d && !_(d.envVar)) T(d.envVar, d.value);
      return E("foundry"), { lines: [], hasHardFailure: false };
    }
    default:
      return { lines: [], hasHardFailure: false };
  }
}
function A(i, o) {
  let u = [];
  for (let r of i) (0, import_chunk_f9x2f6cx.Zia)(r.candidate), (0, import_chunk_y53wbr8a.a)(o === "bedrock" ? "tengu_bedrock_default_fallback" : "tengu_vertex_default_fallback", { tier: (0, import_chunk_78g0060s.f)(r.tier ?? "default"), default_key: (0, import_chunk_78g0060s.S)("document_default"), fallback_key: (0, import_chunk_78g0060s.S)("tier_default"), cross_tier: (0, import_chunk_78g0060s.S)("false") }), u.push(`Default model: ${r.name} not available on this account \u2014 not used as this session's default`);
  return u;
}
async function I(i) {
  let { checkBedrockDefaultAvailability: o, checkBedrockDocumentDefaults: u, seedEnvDefaultForUserPin: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-dehx3b9r.js"))), l = r(i);
  if (l && !_(l.envVar)) T(l.envVar, l.value);
  let [c, n] = await P("bedrock", o, u), d = [];
  for (let e of c) {
    if (_(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackBedrockId, (0, import_chunk_865at33z.PGn)(e.envVar, e.fallbackBedrockId), e.tier === "sonnet") (0, import_chunk_865at33z.SKi)("bedrock", e.fallbackBedrockId, import_chunk_sjqze7qg.CCe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL")) import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_HAIKU_MODEL", e.fallbackBedrockId);
    }
    if (e.crossTier) import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_OPUS_MODEL_NAME", e.fallbackName), import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION", `Opus unavailable \u2014 using ${e.fallbackName}`);
    (0, import_chunk_y53wbr8a.a)("tengu_bedrock_default_fallback", { tier: (0, import_chunk_78g0060s.f)(e.tier), default_key: e.documentTargetId ? (0, import_chunk_78g0060s.S)("document_target") : (0, import_chunk_78g0060s.f)(e.defaultKey), fallback_key: (0, import_chunk_78g0060s.f)(e.fallbackKey), cross_tier: (0, import_chunk_78g0060s.S)(e.crossTier ? "true" : "false") }), d.push(e.crossTier ? `${vW[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.` : `${vW[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return d.push(...A(n, "bedrock")), d;
}
async function N(i) {
  let { checkVertexDefaultAvailability: o, checkVertexDocumentDefaults: u, seedEnvDefaultForUserPin: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-f3eewfvt.js"))), l = r(i);
  if (l && !_(l.envVar)) T(l.envVar, l.value);
  let [c, n] = await P("vertex", o, u), d = [];
  for (let e of c) {
    if (_(e.envVar)) continue;
    if (process.env[e.envVar] = e.fallbackVertexId, (0, import_chunk_865at33z.PGn)(e.envVar, e.fallbackVertexId), e.tier === "sonnet") (0, import_chunk_865at33z.SKi)("vertex", e.fallbackVertexId, import_chunk_sjqze7qg.CCe);
    if (e.tier === "haiku") {
      if (!_("ANTHROPIC_DEFAULT_HAIKU_MODEL")) import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_HAIKU_MODEL", e.fallbackVertexId);
    }
    if (e.crossTier) import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_OPUS_MODEL_NAME", e.fallbackName), import_chunk_c203g5kd.s.set("ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION", `Opus unavailable \u2014 using ${e.fallbackName}`);
    (0, import_chunk_y53wbr8a.a)("tengu_vertex_default_fallback", { tier: (0, import_chunk_78g0060s.f)(e.tier), default_key: e.documentTargetId ? (0, import_chunk_78g0060s.S)("document_target") : (0, import_chunk_78g0060s.f)(e.defaultKey), fallback_key: (0, import_chunk_78g0060s.f)(e.fallbackKey), cross_tier: (0, import_chunk_78g0060s.S)(e.crossTier ? "true" : "false") }), d.push(e.crossTier ? `${vW[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.` : `${vW[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`);
  }
  return d.push(...A(n, "vertex")), d;
}
async function M(i) {
  let { checkMantleDefaultAvailability: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-fvmzfcw7.js"))), u = await YRn("mantle-fallback", o(void 0, { userPinned: i })), r = [], l = false, c;
  for (let n of u) if (n.kind === "adminPin") {
    if (!i) (0, import_chunk_f9x2f6cx.Ig)(n.adminMantleId), c = n.adminMantleId;
  } else if (n.kind === "pinRefuted") {
    if (!i) (0, import_chunk_f9x2f6cx.Ig)(n.workingMantleId), c = n.workingMantleId, (0, import_chunk_y53wbr8a.a)("tengu_mantle_default_fallback", { default_key: (0, import_chunk_78g0060s.f)(n.defaultKey), fallback_key: (0, import_chunk_78g0060s.f)(n.workingKey), admin_pin_refuted: (0, import_chunk_78g0060s.S)("true") }), r.push(`${vW[n.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${n.workingName} for this session`);
  } else if (n.kind === "fallback") {
    let d = false;
    if (!_(n.envVar)) process.env[n.envVar] = n.fallbackMantleId, (0, import_chunk_865at33z.PGn)(n.envVar, n.fallbackMantleId), d = true;
    if (!i) (0, import_chunk_f9x2f6cx.Ig)(n.fallbackMantleId), c = n.fallbackMantleId, d = true;
    if (d) (0, import_chunk_y53wbr8a.a)("tengu_mantle_default_fallback", { default_key: (0, import_chunk_78g0060s.f)(n.defaultKey), fallback_key: (0, import_chunk_78g0060s.f)(n.fallbackKey) }), r.push(`${vW[n.tier]}: ${n.defaultName} not available \u2014 using ${n.fallbackName} for this session`);
  } else l = true, (0, import_chunk_y53wbr8a.a)("tengu_mantle_default_fallback", { default_key: (0, import_chunk_78g0060s.S)("exhausted") }), r.push(`${vW[n.tier]}: no accessible model (tried ${n.triedNames.join(", ")}). Enable ${n.defaultName} in Amazon Bedrock (Mantle).`);
  return { lines: r, hasHardFailure: l, mantleOverride: c };
}
