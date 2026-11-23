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
var chunk_vfw28y4s_exports = {};
__export(chunk_vfw28y4s_exports, {
  Bps: () => Bps,
  Z9e: () => Z9e,
  mFn: () => mFn,
  mmo: () => mmo,
  oit: () => oit,
  rZl: () => rZl,
  sit: () => sit
});
module.exports = __toCommonJS(chunk_vfw28y4s_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var oit = "Background task", mFn = "__warming__", mmo = "Remote task";
var k = 10, Bps = 50, Z9e = /^(?:session|cse)_[A-Za-z0-9_-]+$/;
function x(e) {
  let n = (e.title ?? "").trim();
  return n !== "" && !sit(n);
}
function sit(e) {
  return e.includes("__CBU_POOLED__") || e === mFn || e.startsWith("ditto:");
}
async function rZl(e) {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return [];
  try {
    await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-e2ckvawh.js")));
    let { axiosGetWithRetry: n, prepareApiRequest: c, getOAuthRequestHeaders: p } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s4watcfw.js"))), { getOauthConfig: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-86jbryrj.js"))), { accessToken: R, orgUUID: C, profile: b } = await c(e?.credentials), E = (e?.statuses ?? []).map((l) => `&statuses=${l}`).join(""), m = `${h().BASE_API_URL}/v1/code/sessions?limit=${e?.pageSize ?? 100}${E}`, I = { ...p(R), ...e?.requestReason && { "anthropic-client-request-reason": e.requestReason } }, f = /* @__PURE__ */ new Set(), a = [], S = 0, s = e?.cursor ?? null, o = e?.maxPages ?? k, r = 0;
    for (; r < o; r++) {
      if (e?.takeRequest?.() === false) {
        if (r === 0) throw Error("fleet-remote: no request left for the session list");
        o = r;
        break;
      }
      let l = s ? `${m}&cursor=${encodeURIComponent(s)}` : m, i;
      try {
        i = await n(l, { headers: I, timeout: 15e3 }, e?.takeRequest ? 0 : void 0);
      } catch (t) {
        if (e?.throwOnError) throw t;
        let { logForDebugging: T } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gsap2848.js")));
        T(`[ccr:list] page ${r} failed (${a.length} rows so far): ${(0, import_chunk_jv7av99m.d)(t)}`);
        break;
      }
      S += i.data.data.length;
      for (let t of i.data.data) {
        if (f.has(t.id)) continue;
        if (f.add(t.id), t.status !== "archived" && (e?.includeBridgeKind || t.environment_kind !== "bridge") && Z9e.test(t.id) && (Date.parse(t.created_at) >= (e?.keepUntitledSince ?? 1 / 0) || e?.includeBridgeKind && t.environment_kind === "bridge" ? !sit((t.title ?? "").trim()) : x(t)) && (e?.accept?.(t) ?? true)) a.push(t);
      }
      s = i.data.next_cursor ?? null;
      let g = i.data.data.at(-1), _ = g ? Date.parse(g.last_event_at ?? g.created_at) : Number.NaN;
      if (!s || !e?.exhaustive && a.length >= Bps || e?.stopWhenOlderThan !== void 0 && !Number.isNaN(_) && _ < e.stopWhenOlderThan) break;
    }
    let { logForDebugging: w } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gsap2848.js"))), u = r >= o && s !== null;
    if (e?.status) e.status.truncated = u, e.status.moreRemain = Boolean(s), e.status.nextCursor = s || void 0, e.status.profileOrganization = b ? C : void 0, e.status.pages = u ? r : r + 1;
    return w(`[ccr:list]: ${S} fetched, ${a.length} after archive/bridge/husk${e?.accept ? "/accept" : ""} filter${u ? ` (TRUNCATED: ${o}-page budget exhausted with more remaining)` : ""}`), a;
  } catch (n) {
    if (e?.throwOnError) throw n;
    let { logForDebugging: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gsap2848.js")));
    c(`[ccr:list] failed: ${(0, import_chunk_jv7av99m.d)(n)}`);
  }
  return [];
}
