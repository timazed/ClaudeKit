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
var chunk_p3c3yd0h_exports = {};
__export(chunk_p3c3yd0h_exports, {
  $ga: () => $ga,
  Bga: () => Bga,
  Fga: () => Fga,
  SZe: () => SZe,
  Uga: () => Uga,
  Wga: () => Wga,
  tYn: () => tYn
});
module.exports = __toCommonJS(chunk_p3c3yd0h_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_ksyt0qhy = require("/$bunfs/root/chunk-ksyt0qhy.js");
var import_chunk_9a1t7x37 = require("/$bunfs/root/chunk-9a1t7x37.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ id: (0, import_chunk_rnm2beqc.we)(), title: (0, import_chunk_rnm2beqc.we)().optional(), text: (0, import_chunk_rnm2beqc.we)(), textIfUnusedLimitReset: (0, import_chunk_rnm2beqc.we)().optional().catch(void 0), footer: (0, import_chunk_rnm2beqc.we)().optional(), priority: (0, import_chunk_rnm2beqc.nr)().default(0), maxImpressions: (0, import_chunk_rnm2beqc.nr)().default(3), accentBar: (0, import_chunk_rnm2beqc.Ci)().default(true), requiresModel: (0, import_chunk_rnm2beqc.we)().optional(), fromVersion: (0, import_chunk_rnm2beqc.we)().optional().catch(""), beforeVersion: (0, import_chunk_rnm2beqc.we)().optional().catch("") })).default([]));
function s() {
  return require("/$bunfs/root/chunk-1fanrzgd.js").getDuePrivacyCheckup();
}
var i = [];
function c() {
  let e = (0, import_chunk_865at33z.sD)("tengu_startup_announcements", i), t = l().safeParse(e);
  return t.success ? t.data : i;
}
function d(e) {
  if (e.requiresModel !== void 0 && !(0, import_chunk_865at33z.wo)(e.requiresModel)) return false;
  try {
    return (e.fromVersion === void 0 || (0, import_chunk_tvttgr51.yFe)(e.fromVersion) && (0, import_chunk_tvttgr51.Vb)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, e.fromVersion)) && (e.beforeVersion === void 0 || (0, import_chunk_tvttgr51.yFe)(e.beforeVersion) && (0, import_chunk_tvttgr51._I)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, e.beforeVersion));
  } catch {
    return false;
  }
}
function a() {
  let e = (0, import_chunk_865at33z.ge)().announcementImpressions ?? {};
  return c().filter((t) => (e[t.id] ?? 0) < t.maxImpressions && d(t));
}
function SZe(e) {
  let t = (0, import_chunk_9a1t7x37.vT)();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let n = s(), o = a().sort((f, m) => m.priority - f.priority)[0], r = n !== void 0 ? { id: n.id, text: n.text, url: n.url, priority: 0, maxImpressions: 1, accentBar: true, fromServer: true } : o?.textIfUnusedLimitReset && (0, import_chunk_ksyt0qhy.a_a)() ? { ...o, text: o.textIfUnusedLimitReset } : o;
  if (e && r !== void 0) t.startupAnnouncementPick = r;
  return r;
}
function Fga(e, t) {
  if (a().some((n) => n.textIfUnusedLimitReset)) (0, import_chunk_ksyt0qhy.l_a)(e, t);
}
function $ga() {
  let e = c().filter(d).sort((t, n) => n.priority - t.priority)[0];
  if (e === void 0) return false;
  return JSON.stringify({ id: e.id, title: e.title, text: e.text, footer: e.footer });
}
function Uga(e, t) {
  {
    let { refreshPrivacyCheckup: n } = require("/$bunfs/root/chunk-1fanrzgd.js");
    n(e, t);
  }
}
function Bga() {
  let e = (0, import_chunk_9a1t7x37.vT)();
  if (e.idePrivacyCheckup === void 0) {
    let t = s();
    e.idePrivacyCheckup = t === void 0 ? false : (0, import_chunk_w578pjby._)({ id: t.id, eventId: t.eventId, text: t.text, url: t.url, linkText: t.linkText, endsAt: new Date(t.endsAt).toISOString() });
  }
  return e.idePrivacyCheckup;
}
function Wga(e, t) {
  {
    let { recordPrivacyCheckupShown: n, refreshPrivacyCheckup: o } = require("/$bunfs/root/chunk-1fanrzgd.js");
    return { refresh: () => void o(e, t), shown: (r) => n(r, "vscode", e, t), dismissed: (r) => n(r, "vscode", e, t, true) };
  }
  return;
}
function tYn() {
  let { source: e } = (0, import_chunk_865at33z.lm)({ skipRetrievingKeyFromApiKeyHelper: true }), { source: t } = (0, import_chunk_865at33z.xa)();
  if (e === "none" || t === "none") return null;
  if (e === "apiKeyHelper" && t === "apiKeyHelper") return null;
  return { tokenSource: t, apiKeySource: e };
}
