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
var chunk_66zhngxm_exports = {};
__export(chunk_66zhngxm_exports, {
  AWs: () => AWs,
  CWs: () => CWs,
  TWs: () => TWs,
  Vbn: () => Vbn,
  jga: () => jga
});
module.exports = __toCommonJS(chunk_66zhngxm_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var u = 14;
function TWs() {
  return (0, import_chunk_865at33z.Sn)()?.claudeCodeTrialDurationDays ?? null;
}
var l = { status: "ineligible", daysRemaining: null };
function Vbn() {
  let r = (0, import_chunk_865at33z.NVi)();
  if (r) return o(true, r.endsAt);
  let e = (0, import_chunk_865at33z.Sn)();
  if (!e || (0, import_chunk_865at33z.or)() !== "pro") return l;
  let a = e.ccOnboardingFlags?.e10 === true;
  return o(a, e.claudeCodeTrialEndsAt ?? null);
}
async function CWs(r, e) {
  return (0, import_chunk_cqa9hrgx.qo)("api_pro_trial_start", async () => {
    if ((0, import_chunk_865at33z.NVi)()) {
      let s = new Date(Date.now() + u * 24 * 60 * 60 * 1e3).toISOString();
      return (0, import_chunk_865at33z.GAl)({ endsAt: s }), o(true, s);
    }
    let n = await import_chunk_865at33z.zt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial", {}, { auth: "teleport-org", credentials: e });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `Pro trial start unavailable: ${n.reason}`);
    return (0, import_chunk_w578pjby.t)("Pro trial started", { level: "debug" }), d(n.data.ends_at, r), o(true, n.data.ends_at);
  });
}
function jga() {
  if (Vbn().status !== "expired") return false;
  return (0, import_chunk_865at33z.ge)().cachedExtraUsageDisabledReason !== null;
}
function AWs(r) {
  switch (r.status) {
    case "active": {
      let e = r.daysRemaining ?? 0;
      return `Trial: ${e} ${e === 1 ? "day" : "days"} left`;
    }
    case "expired":
      return "Usage credits";
    case "ineligible":
    case "not_started":
      return null;
  }
}
function o(r, e) {
  if (!r) return l;
  if (!e) return { status: "not_started", daysRemaining: null };
  let a = new Date(e);
  if (Number.isNaN(a.getTime())) return (0, import_chunk_k449cc64.i)(Error(`Invalid claude_code_trial_ends_at: ${e}`)), l;
  let n = a.getTime() - Date.now();
  if (n <= 0) return { status: "expired", daysRemaining: 0 };
  return { status: "active", daysRemaining: Math.ceil(n / 864e5) };
}
function d(r, e) {
  (0, import_chunk_865at33z.Ke)((a) => {
    if (!a.oauthAccount || a.oauthAccount.claudeCodeTrialEndsAt === r) return a;
    return { ...a, oauthAccount: { ...a.oauthAccount, claudeCodeTrialEndsAt: r } };
  }, e);
}
