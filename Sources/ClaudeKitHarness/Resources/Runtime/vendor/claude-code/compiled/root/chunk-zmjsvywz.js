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
var chunk_zmjsvywz_exports = {};
__export(chunk_zmjsvywz_exports, {
  aWs: () => aWs,
  dWs: () => dWs,
  iWs: () => iWs,
  lWs: () => lWs
});
module.exports = __toCommonJS(chunk_zmjsvywz_exports);
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_8f66wxnw = require("/$bunfs/root/chunk-8f66wxnw.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_jcwhbkjz = require("/$bunfs/root/chunk-jcwhbkjz.js");
var import_chunk_fvd4qp68 = require("/$bunfs/root/chunk-fvd4qp68.js");
var import_chunk_bhfdw2b8 = require("/$bunfs/root/chunk-bhfdw2b8.js");
var r = "Can't read this computer's managed settings, which may limit the organizations you can sign in to. Contact your administrator.";
async function s() {
  if ((0, import_chunk_2yx6c1y2.ZPe)()) return { ok: false, message: r };
  let n = (0, import_chunk_2yx6c1y2.Mee)();
  if (n === "unreadable" || n === "unloaded") return { ok: false, message: "Unable to read whether this computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn), so you can't sign in to your organization here. Contact your administrator." };
  if (await (0, import_chunk_w58msjm6.Ih)(), (0, import_chunk_w58msjm6.ene)() && (0, import_chunk_xcgcdx61.Si)() === null) return { ok: false, message: "Couldn't load your organization's managed settings, which may limit the organizations you can sign in to. Try again." };
  if ((0, import_chunk_2yx6c1y2.uKt)() || (0, import_chunk_zhr7rpv7.ve)() === "gateway") {
    let o = (0, import_chunk_xcgcdx61.Tm)()?.state;
    if (o === "ineligible") {
      let a = (0, import_chunk_fvd4qp68.cMt)();
      if (a !== void 0) return { ok: false, message: `Your organization requires its managed settings to load, which may limit the organizations you can sign in to. ${a}` };
    } else if (o !== "ok") return { ok: false, message: "Couldn't load your organization's managed settings, which may limit the organizations you can sign in to. Check your network connection, sign in to claude.ai again if that login has expired, or contact your administrator." };
  }
  let e = (0, import_chunk_2yx6c1y2._e)("policySettings");
  if ((0, import_chunk_2yx6c1y2.wJe)().lostSignInPins?.some((o) => e?.[o] === void 0)) return { ok: false, message: "This computer's managed settings may limit how you sign in, and this session can't apply them, so it can't sign in to your organization. Contact your administrator." };
  let i = (0, import_chunk_2yx6c1y2.Mee)();
  if ((0, import_chunk_2yx6c1y2.ZPe)() || i === "unreadable" || i === "unloaded" || (0, import_chunk_2yx6c1y2.MJi)() !== void 0) return { ok: false, message: r };
  let t = e?.forceLoginOrgUUID;
  return { ok: true, allowedOrganizationUuids: t === void 0 ? null : typeof t === "string" ? [t] : t };
}
function iWs() {
  if ((0, import_chunk_2yx6c1y2.yJi)()) return false;
  let n = (0, import_chunk_tvttgr51.BPe)(), e = (0, import_chunk_zhr7rpv7.ve)();
  if (n === void 0 || n.includes("anthropic") || (0, import_chunk_tvttgr51.ZVn)() !== void 0 || e === "gateway" || (0, import_chunk_tvttgr51.kz)("firstParty") === void 0 || (e === "firstParty" ? !Object.values(import_chunk_bhfdw2b8.tvo).some((i) => n.includes(i)) : (0, import_chunk_tvttgr51.kz)() !== void 0)) return false;
  return (0, import_chunk_jcwhbkjz.P1n)() !== void 0;
}
async function aWs(n, e, i) {
  let t = await s();
  if (!t.ok) return (0, import_chunk_jcwhbkjz.Tan)(n, { ok: false, reason: "organization_pin_unknown", message: t.message });
  return (0, import_chunk_jcwhbkjz.ADi)({ tokens: n, allowedOrganizationUuids: t.allowedOrganizationUuids, getSettingsDocument: import_chunk_w58msjm6.Nii, signal: e, whyNoNewProcess: i });
}
var lWs = "Signed in to the organization that your administrators manage in Anthropic's Enterprise Admin Console. This is an organization sign-in, not a claude.ai login.";
async function dWs(n) {
  let e = await (0, import_chunk_w58msjm6.Fii)(n), i = (0, import_chunk_2yx6c1y2.XPe)(n), t = (0, import_chunk_8f66wxnw._Ir)(n), o = i ? `${lWs} The organization's settings won't apply on this computer, because the computer's own managed settings take priority. The organization's settings apply here only if those managed settings name the organization (forceLoginOrgUUID). If you expected them to apply, ask your IT administrator.` : t !== void 0 ? `Claude Code still uses the gateway at ${(0, import_chunk_w58msjm6.hnt)(t)} and the gateway's settings, not the organization's settings. The organization sign-in is saved. To use the organization's settings, run \`claude auth logout\` at your shell prompt. This command signs out of all accounts on this computer, including the organization sign-in. Then run ${(0, import_chunk_xcgcdx61.oP)()}.` : e ? lWs : `${lWs} The organization's settings aren't saved yet. The next session that you start on your cloud provider gets them before it starts. It doesn't start without them.`;
  return { outcome: i ? "machine_priority" : t !== void 0 ? "gateway_in_use" : e ? "applied" : "not_saved", sentence: o };
}
