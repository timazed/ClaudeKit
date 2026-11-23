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
var chunk_hkvzj051_exports = {};
__export(chunk_hkvzj051_exports, {
  Ao: () => Ao,
  CEe: () => CEe,
  HM: () => HM,
  J$l: () => J$l,
  Q$l: () => Q$l,
  T_n: () => T_n,
  Z$l: () => Z$l,
  at: () => at,
  eUl: () => eUl,
  jqn: () => jqn,
  n0r: () => n0r,
  r0r: () => r0r,
  tUl: () => tUl
});
module.exports = __toCommonJS(chunk_hkvzj051_exports);
var l = String.fromCharCode(0), p = /^\.[0-9a-f]{16}\.aside$/;
function n0r(e) {
  if (e.charCodeAt(0) !== 46) return false;
  return CEe(e).some((n) => p.test(n));
}
var g = /(^\.[0-9a-f]{16}\.tmp~?$)|(\.tmp[.~][0-9a-f]{8}$)|(\.purge\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.tmp$)/;
function J$l(e) {
  return CEe(e).some((n) => g.test(n));
}
function u(e) {
  return typeof e === "string" && /^[. ]+$/.test(e);
}
function Ao(e) {
  return !(typeof e !== "string" || e.length === 0 || u(e) || e.includes("/") || e.includes("\\") || e.includes(l) || n0r(e));
}
function HM(e) {
  return e.length > 0 && e.every(Ao);
}
function jqn(e) {
  return CEe(e).some((n) => n.endsWith(".jsonl"));
}
var r0r = "team";
function CEe(e) {
  let n = s.get(e);
  if (n !== void 0) return n;
  let a = Object.freeze(m(e));
  if (s.size >= d) s.clear();
  return s.set(e, a), a;
}
function m(e) {
  let n = e.toLowerCase(), a = n.indexOf(":");
  return a === -1 ? [i(n)] : [i(n), i(n.slice(0, a))];
}
var s = /* @__PURE__ */ new Map(), d = 32768;
function i(e) {
  let n = e.length;
  while (n > 0) {
    let a = e.charCodeAt(n - 1);
    if (a !== 46 && a !== 32) break;
    n -= 1;
  }
  return n === e.length ? e : e.slice(0, n);
}
function r(e, n, a) {
  return a === void 0 ? e : { ...e, [n]: a };
}
function f(e, n, a, t) {
  let o = r({ namespace: "transcript", projectKey: e, sessionId: n }, "agentId", a);
  return r(o, "agentRelPath", t);
}
function h(e, n, a) {
  let c = r({ namespace: "log", sessionId: e, channel: n }, "agentId", a?.agentId);
  return r(c, "runId", a?.runId);
}
var at = { transcript: f, journal: (e, n, a) => ({ namespace: "transcript", projectKey: e, sessionId: n, agentRelPath: a, journal: true }), sessionJournal: (e, n, a) => ({ namespace: "transcript", projectKey: e, sessionId: n, sessionJournal: a }), history: () => ({ namespace: "history" }), log: h, globalConfig: () => ({ namespace: "globalConfig" }), globalConfigCopy: (e, n) => ({ namespace: "globalConfig", kind: e, stamp: n }), userSettings: () => ({ namespace: "settings", layer: "user" }), projectSettings: (e) => ({ namespace: "settings", layer: "project", projectKey: e }), localSettings: (e) => ({ namespace: "settings", layer: "local", consentRootKey: e }), task: (e, n) => ({ namespace: "task", listId: e, taskId: n }), taskListMeta: (e) => ({ namespace: "task", listId: e, meta: true }), taskListHighWaterMark: (e) => ({ namespace: "task", listId: e, highWaterMark: true }), memory: (e, n) => ({ namespace: "memory", projectKey: e, relPath: n }), pluginRegistry: (e) => ({ namespace: "pluginRegistry", file: e }), marketplaceCache: (e, n) => ({ namespace: "marketplaceCache", marketplace: e, form: n }), marketplaceTree: (e, n) => ({ namespace: "marketplaceCache", marketplace: e, relPath: n }), pluginCache: (e, n, a, t) => ({ namespace: "pluginCache", marketplace: e, plugin: n, version: a, relPath: t }), cache: (e, n) => ({ namespace: "cache", store: e, id: n }), paste: (e) => ({ namespace: "paste", id: e }), state: (e) => ({ namespace: "state", id: e }), pluginAssetCache: (e) => ({ namespace: "pluginAssetCache", digest: e }), plan: (e) => ({ namespace: "plan", name: e }), daemon: (e) => ({ namespace: "daemon", relPath: e }), feedbackDraft: (e) => ({ namespace: "feedbackDraft", draftId: e }), agentMemory: (e, n) => ({ namespace: "agentMemory", layer: "user", agentType: e, relPath: n }), identity: () => ({ namespace: "identity" }), team: (e) => ({ namespace: "team", team: e }), sidecar: (e, n, a) => ({ namespace: "sidecar", projectKey: e, sessionId: n, relPath: a }), mailbox: (e, n) => ({ namespace: "mailbox", team: e, teammate: n }), scratch: (e, n) => ({ namespace: "scratch", sessionId: e, relPath: n }), userConfigDir: (e, n) => ({ namespace: "userConfigDir", dir: e, relPath: n }), fileHistory: (e, n) => ({ namespace: "fileHistory", sessionId: e, backupFileName: n }), job: (e, n) => ({ namespace: "job", jobId: e, relPath: n }), jobTimeline: (e) => ({ namespace: "jobTimeline", jobId: e }), recording: (e, n, a) => ({ namespace: "recording", projectKey: e, sessionId: n, stamp: a }), sessionLog: (e, n, a) => ({ namespace: "sessionLog", projectKey: e, year: n.year, month: n.month, day: n.day, logName: a }), jobPins: () => ({ namespace: "jobsRoot", file: "pins" }), jobDraft: (e) => ({ namespace: "jobsRoot", draftKey: e }), session: (e) => ({ namespace: "session", file: e }), bridgePointer: (e) => ({ namespace: "bridgePointer", projectKey: e }), sessionAliases: (e) => ({ namespace: "sessionAliases", projectKey: e }), dirSyncRecord: (e, n) => ({ namespace: "dirSyncRecord", projectKey: e, sessionId: n }) };
function Q$l(e, n) {
  return { namespace: "transcript", projectKey: e, sessionId: n, agentRelPath: [] };
}
function T_n(e) {
  return JSON.stringify(K(e));
}
function Z$l(e, n) {
  return T_n(e) === T_n(n);
}
function K(e) {
  switch (e.namespace) {
    case "transcript":
      return e.journal === true ? [e.namespace, e.projectKey, e.sessionId, null, e.agentRelPath, "journal"] : e.sessionJournal !== void 0 ? [e.namespace, e.projectKey, e.sessionId, null, null, e.sessionJournal] : [e.namespace, e.projectKey, e.sessionId, e.agentId ?? null, e.agentRelPath ?? null];
    case "history":
    case "identity":
      return [e.namespace];
    case "globalConfig":
      return "kind" in e ? [e.namespace, e.kind, e.stamp] : [e.namespace];
    case "settings":
      return e.layer === "user" ? [e.namespace, e.layer] : e.layer === "project" ? [e.namespace, e.layer, e.projectKey] : [e.namespace, e.layer, e.consentRootKey];
    case "task":
      return "meta" in e ? [e.namespace, e.listId, e.meta] : "highWaterMark" in e ? [e.namespace, e.listId, ["highWaterMark"]] : [e.namespace, e.listId, e.taskId];
    case "memory":
      return [e.namespace, e.projectKey, e.relPath];
    case "pluginRegistry":
      return [e.namespace, e.file];
    case "marketplaceCache":
      return "relPath" in e ? [e.namespace, e.marketplace, e.relPath] : [e.namespace, e.marketplace, e.form];
    case "pluginCache":
      return [e.namespace, e.marketplace, e.plugin, e.version, e.relPath];
    case "cache":
      return [e.namespace, e.store, e.id];
    case "paste":
      return [e.namespace, e.id];
    case "pluginAssetCache":
      return [e.namespace, e.digest];
    case "state":
      return [e.namespace, e.id];
    case "plan":
      return [e.namespace, e.name];
    case "feedbackDraft":
      return [e.namespace, e.draftId];
    case "agentMemory":
      return [e.namespace, e.layer, e.layer === "user" ? null : e.projectKey, e.agentType, e.relPath];
    case "team":
      return [e.namespace, e.team];
    case "sidecar":
      return [e.namespace, e.projectKey, e.sessionId, e.relPath];
    case "scratch":
      return [e.namespace, e.sessionId, e.relPath];
    case "userConfigDir":
      return [e.namespace, e.dir, e.relPath];
    case "fileHistory":
      return [e.namespace, e.sessionId, e.backupFileName];
    case "job":
      return [e.namespace, e.jobId, e.relPath];
    case "daemon":
      return [e.namespace, e.relPath];
    case "jobsRoot":
      return "file" in e ? [e.namespace, e.file] : [e.namespace, "draft", e.draftKey];
    case "session":
      return [e.namespace, e.file];
    case "bridgePointer":
    case "sessionAliases":
      return [e.namespace, e.projectKey];
    case "dirSyncRecord":
      return [e.namespace, e.projectKey, e.sessionId];
    case "mailbox":
      return [e.namespace, e.team, e.teammate];
    case "log":
      return [e.namespace, e.sessionId, e.channel, e.agentId ?? null, e.runId ?? null];
    case "jobTimeline":
      return [e.namespace, e.jobId];
    case "recording":
      return [e.namespace, e.projectKey, e.sessionId, e.stamp];
    case "sessionLog":
      return [e.namespace, e.projectKey, e.year, e.month, e.day, e.logName];
  }
}
function eUl() {
  return { namespace: "bridgeSpawn" };
}
function tUl(e, n) {
  return n === void 0 || n.length === 0 ? { namespace: "marketplaceCache", marketplace: e } : { namespace: "marketplaceCache", marketplace: e, relPath: n };
}
