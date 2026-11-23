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
var chunk_fp3vnecp_exports = {};
__export(chunk_fp3vnecp_exports, {
  Ddn: () => Ddn,
  HSl: () => HSl,
  ISl: () => ISl,
  LUi: () => LUi,
  MSl: () => MSl,
  NUi: () => NUi,
  db: () => db,
  hBn: () => hBn,
  pbs: () => pbs,
  ubo: () => ubo
});
module.exports = __toCommonJS(chunk_fp3vnecp_exports);
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
function O(e) {
  return (0, import_chunk_7n1spq36.Mu)(e, "expected a segment that is not empty or made only of dots and spaces, with no path separator, NUL or set-aside shape");
}
function db(e) {
  if (typeof e !== "object" || e === null) return (0, import_chunk_7n1spq36.Mu)("key", "expected a key object");
  let n = W(e);
  if (n !== void 0) return n;
  let r = Se(e);
  if (r === void 0) return (0, import_chunk_7n1spq36.Mu)("key", `${e.namespace} is not a storage namespace`);
  return f("key", r);
}
function f(e, n) {
  for (let [r, t, c] of n) {
    let d = `${e}.${r}`;
    if (t === void 0) {
      if (c !== "optional") return (0, import_chunk_7n1spq36.Mu)(d, "required");
    } else if (T(r)) {
      if (!(e === "scope" && r === "agentRelPath" && Array.isArray(t) && t.length === 0) && (!Array.isArray(t) || !(0, import_chunk_hkvzj051.HM)(t))) return (0, import_chunk_7n1spq36.Mu)(d, "expected a non-empty array of segments, none empty or made only of dots and spaces, with no path separator, NUL or set-aside shape");
    } else if (typeof t !== "string" || !(0, import_chunk_hkvzj051.Ao)(t)) return O(d);
  }
  return;
}
function T(e) {
  return e === "relPath" || e === "agentRelPath";
}
var g = ["commands", "agents", "output-styles", "skills", "workflows", "routines", "themes", "rules", "session-env", "uploads", "mcp-skill-archives", "usage-data", "mcp-discovery-cache"];
var p = new Set(g), m = `must be one of the userConfigDir directory names (${g.join(", ")})`, h = ["installed", "marketplaces", "flagged", "catalog", "inUseSweep"];
var F = new Set(h), D = `must be one of the pluginRegistry files (${h.join(", ")})`, y = ["manifest", "catalog"];
var G = new Set(y), H = `must be one of the marketplaceCache forms (${y.join(", ")})`;
var S = ["world"];
var Y = new Set(S), U = `must be one of the session journal names (${S.join(", ")})`;
function V(e) {
  return Y.has(e);
}
function J(e) {
  return typeof e === "string" && /^[0-9a-f]{64}$/.test(e);
}
function W(e) {
  if (e.namespace === "transcript") return X(e);
  if (e.namespace === "pluginAssetCache" && !J(e.digest)) return (0, import_chunk_7n1spq36.Mu)("key.digest", "must be a SHA-256 digest: 64 lowercase hexadecimal characters");
  if (e.namespace === "globalConfig" && "kind" in e) {
    if (!E(e.kind)) return (0, import_chunk_7n1spq36.Mu)("key.kind", j);
    if (typeof e.stamp !== "string") return (0, import_chunk_7n1spq36.Mu)("key.stamp", "a recovery copy key carries its stamp");
  }
  if (e.namespace === "task") return de(e);
  if (e.namespace === "sidecar") {
    let n = i("key.sessionId", e.sessionId);
    if (n !== void 0) return n;
    if (o(e.relPath)) return (0, import_chunk_7n1spq36.Mu)("key.relPath", a);
    return k(e.relPath) ? (0, import_chunk_7n1spq36.Mu)("key.relPath", R) : void 0;
  }
  if (e.namespace === "recording") return i("key.sessionId", e.sessionId) ?? (C(e.stamp) ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.stamp", Z));
  if (e.namespace === "jobsRoot") return ue(e);
  if (e.namespace === "userConfigDir" && !p.has(e.dir)) return (0, import_chunk_7n1spq36.Mu)("key.dir", m);
  if (e.namespace === "fileHistory") return B(e);
  if (e.namespace === "settings" && !oe(e.layer)) return (0, import_chunk_7n1spq36.Mu)("key.layer", "must be user, project or local");
  if (e.namespace === "log") return ce(e);
  if (e.namespace === "job" && v(e.relPath)) return (0, import_chunk_7n1spq36.Mu)("key.relPath", M);
  if (e.namespace === "sessionLog") return N("key", e) ?? (me(e.logName) ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.logName", "must be the session-log stem <sessionId8>[-<title-slug>]: up to eight word characters, then lower-case a-z / 0-9 runs joined by single hyphens; not a bare device name"));
  if (e.namespace === "pluginRegistry" && !F.has(e.file)) return (0, import_chunk_7n1spq36.Mu)("key.file", D);
  if (e.namespace === "marketplaceCache") {
    if (!("relPath" in e)) return G.has(e.form) ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.form", H);
    return e.form === void 0 ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.form", "a tree file key carries relPath, not form");
  }
  if (e.namespace !== "agentMemory") return;
  if (!b(e.layer)) return (0, import_chunk_7n1spq36.Mu)("key.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e) return (0, import_chunk_7n1spq36.Mu)("key.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string") return (0, import_chunk_7n1spq36.Mu)("key.projectKey", "required for the project and local layers");
  return typeof e.agentType === "string" ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.agentType", "an agent memory key names its agent");
}
function B(e) {
  return typeof e.backupFileName !== "string" || !import_chunk_q3a5dy2r.sVn.test(e.backupFileName) ? (0, import_chunk_7n1spq36.Mu)("key.backupFileName", "must be a backup file name the engine has ever written (hex hash @v version)") : void 0;
}
function b(e) {
  return e === "user" || e === "project" || e === "local";
}
var I = ["backup", "corrupted"];
var q = new Set(I), j = `must be one of the global-config copy kinds (${I.join(", ")})`;
function E(e) {
  return q.has(e);
}
function X(e) {
  let n = i("key.sessionId", e.sessionId);
  if (n !== void 0) return n;
  if (o(e.agentRelPath)) return (0, import_chunk_7n1spq36.Mu)("key.agentRelPath", a);
  if ("sessionJournal" in e) {
    if (typeof e.sessionJournal !== "string" || !V(e.sessionJournal)) return (0, import_chunk_7n1spq36.Mu)("key.sessionJournal", U);
    return e.agentId === void 0 && e.agentRelPath === void 0 && !("journal" in e) ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.sessionJournal", "a session journal key names the session's own journal: no agentId, agentRelPath or run journal");
  }
  if ("journal" in e) {
    if (e.journal !== true) return (0, import_chunk_7n1spq36.Mu)("key.journal", "must be true");
    if (!Array.isArray(e.agentRelPath)) return (0, import_chunk_7n1spq36.Mu)("key.agentRelPath", "a run journal key carries its run directory");
    return e.agentId === void 0 ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.agentId", "a transcript key names an agent transcript or the run journal, never both");
  }
  return e.agentRelPath !== void 0 && e.agentId === void 0 ? (0, import_chunk_7n1spq36.Mu)("key.agentRelPath", "requires agentId or journal") : void 0;
}
var hBn = "cloud-snapshots", ubo = "side.git", ISl = "archive-sync", MSl = "folder-sync";
var LUi = "steps-under-way", P = /* @__PURE__ */ new Set(["memory", "tiny_memory", "bagel", hBn, "connector-downloads", "bridge-pointer.json", ".session-aliases"]), z = /^[0-9]{1,16}$/, Z = "must be the recording stamp: 1 to 16 decimal digits (epoch milliseconds)", s = ".cast", R = `<stamp>${s} inside a session's folder is that session's terminal recording stream: address it as keys.recording(projectKey, sessionId, stamp)`;
function C(e) {
  return typeof e === "string" && z.test(e);
}
function k(e) {
  return Array.isArray(e) && typeof e[0] === "string" && (0, import_chunk_hkvzj051.CEe)(e[0]).some((n) => NUi(n) !== void 0);
}
function NUi(e) {
  if (!e.endsWith(s)) return;
  let n = e.slice(0, -s.length);
  return C(n) ? n : void 0;
}
var _ = [".ccr-tip.json", ".precompact.json", s], Q = `must not end with ${_.join(", ")}: those name a session's project-level sibling files`;
function K(e) {
  return (0, import_chunk_hkvzj051.CEe)(e).some((n) => _.some((r) => n.endsWith(r)));
}
var pbs = ".dir-sync.json", ee = `must not end with ${pbs}: that name is reserved for a cloud session's record at the project level`;
function ne(e) {
  return (0, import_chunk_hkvzj051.CEe)(e).some((n) => n.endsWith(pbs));
}
var te = `${[...P].join(", ")} are reserved: they name project-level entries, not sessions`;
function L(e) {
  return (0, import_chunk_hkvzj051.CEe)(e).some((n) => P.has(n));
}
function HSl(e) {
  return !L(e) && !(0, import_chunk_hkvzj051.jqn)(e) && !K(e);
}
function i(e, n) {
  if (typeof n !== "string") return;
  if (L(n)) return (0, import_chunk_7n1spq36.Mu)(e, te);
  if (K(n)) return (0, import_chunk_7n1spq36.Mu)(e, Q);
  if (ne(n)) return (0, import_chunk_7n1spq36.Mu)(e, ee);
  return (0, import_chunk_hkvzj051.jqn)(n) ? (0, import_chunk_7n1spq36.Mu)(e, a) : void 0;
}
var re = ".meta.json", ae = ".meta is reserved for the list metadata key, under every spelling that opens its file";
function se(e) {
  return ie(`${e}.json`);
}
function ie(e) {
  return (0, import_chunk_hkvzj051.CEe)(e).includes(re);
}
var a = "names a .jsonl stream, which only a transcript key addresses";
function o(e) {
  return Array.isArray(e) && e.some((n) => typeof n === "string" && (0, import_chunk_hkvzj051.jqn)(n));
}
function oe(e) {
  return e === "user" || e === "project" || e === "local";
}
var A = "must be debug, telemetry or apiDump";
function x(e) {
  return e === "debug" || e === "telemetry" || e === "apiDump";
}
function ce(e) {
  if (!x(e.channel)) return (0, import_chunk_7n1spq36.Mu)("key.channel", A);
  if (e.channel !== "apiDump") return;
  for (let n of ["agentId", "runId"]) if (n in e && e[n] !== void 0) return (0, import_chunk_7n1spq36.Mu)(`key.${n}`, "an apiDump key names its dump by one id \u2014 the agent's for a subagent's requests, else the session's (today's dump-prompts/<id>.jsonl); agentId and runId nest nothing on this channel");
  return;
}
function de(e) {
  if ("taskId" in e && ("meta" in e || "highWaterMark" in e)) return (0, import_chunk_7n1spq36.Mu)("key.taskId", "a task key names an item, the list metadata or the list high-water mark, never more than one");
  if ("meta" in e && "highWaterMark" in e) return (0, import_chunk_7n1spq36.Mu)("key.highWaterMark", "a task key names an item, the list metadata or the list high-water mark, never more than one");
  if ("meta" in e && e.meta !== true) return (0, import_chunk_7n1spq36.Mu)("key.meta", "must be true");
  if ("highWaterMark" in e && e.highWaterMark !== true) return (0, import_chunk_7n1spq36.Mu)("key.highWaterMark", "must be true");
  if (typeof e.listId !== "string") return (0, import_chunk_7n1spq36.Mu)("key.listId", "a task key carries its listId");
  if ("meta" in e || "highWaterMark" in e) return;
  if (typeof e.taskId !== "string") return (0, import_chunk_7n1spq36.Mu)("key.taskId", "a task item key carries its taskId");
  if (se(e.taskId)) return (0, import_chunk_7n1spq36.Mu)("key.taskId", ae);
  return;
}
function ue(e) {
  if ("file" in e && "draftKey" in e) return (0, import_chunk_7n1spq36.Mu)("key.draftKey", "a jobs-root key names the pins file or one draft, never both");
  if ("file" in e) return e.file === "pins" ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.file", "must be pins");
  if (typeof e.draftKey !== "string") return (0, import_chunk_7n1spq36.Mu)("key.draftKey", "a jobs-root draft key carries its draftKey");
  return ye.test(e.draftKey) ? void 0 : (0, import_chunk_7n1spq36.Mu)("key.draftKey", "must be 8 lowercase hex characters");
}
var w = "timeline.jsonl", M = `${w} is the job's timeline stream: address it as keys.jobTimeline(jobId)`;
function v(e) {
  return Array.isArray(e) && typeof e[0] === "string" && (0, import_chunk_hkvzj051.CEe)(e[0]).includes(w);
}
var le = /^\d{4}$/, l = /^\d{2}$/, fe = /^[A-Za-z0-9_-]{1,8}(?:-[a-z0-9]+)*$/, ge = 128, pe = /^(?:con|prn|aux|nul|com\d|lpt\d)$/i;
function me(e) {
  return typeof e === "string" && e.length <= ge && fe.test(e) && !pe.test(e);
}
function N(e, n) {
  if (n.year !== void 0 && !u(le, n.year)) return (0, import_chunk_7n1spq36.Mu)(`${e}.year`, "must be four digits (YYYY)");
  if (n.month !== void 0 && !u(l, n.month)) return (0, import_chunk_7n1spq36.Mu)(`${e}.month`, "must be two digits (MM)");
  if (n.day !== void 0 && !u(l, n.day)) return (0, import_chunk_7n1spq36.Mu)(`${e}.day`, "must be two digits (DD)");
  return;
}
function u(e, n) {
  return typeof n === "string" && e.test(n);
}
function he(e) {
  if (e.year !== void 0 && e.projectKey === void 0) return (0, import_chunk_7n1spq36.Mu)("scope.projectKey", "required when year is given");
  if (e.month !== void 0 && e.year === void 0) return (0, import_chunk_7n1spq36.Mu)("scope.year", "required when month is given");
  if (e.day !== void 0 && e.month === void 0) return (0, import_chunk_7n1spq36.Mu)("scope.month", "required when day is given");
  return N("scope", e);
}
var ye = /^[0-9a-f]{8}$/;
function Se(e) {
  switch (e.namespace) {
    case "transcript":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["agentId", e.agentId, "optional"], ["agentRelPath", e.agentRelPath, "optional"]];
    case "history":
    case "identity":
      return [];
    case "globalConfig":
      return "kind" in e ? [["stamp", e.stamp]] : [];
    case "settings":
      return e.layer === "user" ? [] : e.layer === "project" ? [["projectKey", e.projectKey]] : [["consentRootKey", e.consentRootKey]];
    case "task":
      return "taskId" in e ? [["listId", e.listId], ["taskId", e.taskId]] : [["listId", e.listId]];
    case "memory":
      return [["projectKey", e.projectKey], ["relPath", e.relPath]];
    case "pluginRegistry":
      return [];
    case "marketplaceCache":
      return "relPath" in e ? [["marketplace", e.marketplace], ["relPath", e.relPath]] : [["marketplace", e.marketplace]];
    case "pluginCache":
      return [["marketplace", e.marketplace], ["plugin", e.plugin], ["version", e.version], ["relPath", e.relPath]];
    case "cache":
      return [["store", e.store], ["id", e.id]];
    case "paste":
      return [["id", e.id]];
    case "pluginAssetCache":
      return [["digest", e.digest]];
    case "state":
      return [["id", e.id]];
    case "plan":
      return [["name", e.name]];
    case "feedbackDraft":
      return [["draftId", e.draftId]];
    case "agentMemory":
      return [...e.layer === "user" ? [] : [["projectKey", e.projectKey]], ["agentType", e.agentType], ["relPath", e.relPath]];
    case "team":
      return [["team", e.team]];
    case "sidecar":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["relPath", e.relPath]];
    case "scratch":
      return [["sessionId", e.sessionId], ["relPath", e.relPath]];
    case "userConfigDir":
      return [["relPath", e.relPath]];
    case "fileHistory":
      return [["sessionId", e.sessionId], ["backupFileName", e.backupFileName]];
    case "job":
      return [["jobId", e.jobId], ["relPath", e.relPath]];
    case "daemon":
      return [["relPath", e.relPath]];
    case "jobsRoot":
      return "file" in e ? [] : [["draftKey", e.draftKey]];
    case "session":
      return [["file", e.file]];
    case "bridgePointer":
    case "sessionAliases":
      return [["projectKey", e.projectKey]];
    case "dirSyncRecord":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId]];
    case "mailbox":
      return [["team", e.team], ["teammate", e.teammate]];
    case "log":
      return [["sessionId", e.sessionId], ["agentId", e.agentId, "optional"], ["runId", e.runId, "optional"]];
    case "jobTimeline":
      return [["jobId", e.jobId]];
    case "recording":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["stamp", e.stamp]];
    case "sessionLog":
      return [["projectKey", e.projectKey], ["year", e.year], ["month", e.month], ["day", e.day], ["logName", e.logName]];
  }
  return;
}
function Ddn(e) {
  if (typeof e !== "object" || e === null) return (0, import_chunk_7n1spq36.Mu)("scope", "expected a scope object");
  let n = Ee(e);
  if (n === void 0) return (0, import_chunk_7n1spq36.Mu)("scope", `${String(e.namespace)} is not a listable namespace`);
  return Ie(e) ?? f("scope", n);
}
var be = { transcript: [["agentId", "names one agent transcript, a stream key, not a scope: narrow a scope with agentRelPath"], ["journal", "names a run journal, a stream key, not a scope: narrow a scope with agentRelPath"], ["sessionJournal", "names a session's own journal, a stream key, not a scope: the session scope lists it"]], log: [["agentId", "names one log stream, a stream key, not a scope"], ["runId", "names one log stream, a stream key, not a scope"]], sessionLog: [["logName", "names one session's log, a stream key, not a scope: a day scope lists its logs"]], task: [["taskId", "names one task value, a key, not a scope: a list scope narrows with listId only"], ["meta", "names one task value, a key, not a scope: a list scope narrows with listId only"], ["highWaterMark", "names one task value, a key, not a scope: a list scope narrows with listId only"]], mailbox: [["teammate", "names one inbox, a key, not a scope"]], cache: [["id", "names one cached value, a key, not a scope: a cache scope narrows with store only"]], pluginAssetCache: [["digest", "names one cached asset, a key, not a scope"]], fileHistory: [["backupFileName", "names one backup, a key, not a scope: a file-history scope narrows with sessionId only"]], state: [["id", "names one value, a key, not a scope"]], feedbackDraft: [["draftId", "names one draft, a key, not a scope"]], jobsRoot: [["file", "names one value, a key, not a scope"], ["draftKey", "names one value, a key, not a scope"]], plan: [["name", "names one plan, a key, not a scope"]], paste: [["id", "names one paste, a key, not a scope"]], session: [["file", "names one value, a key, not a scope"]], globalConfig: [["stamp", "names one recovery copy, a key, not a scope: the scope narrows with kind only"]], marketplaceCache: [["form", "names one of the marketplace's two engine-written files, a key, not a scope: the tree narrows with relPath only"]], memory: [], pluginCache: [], daemon: [], sidecar: [], agentMemory: [], scratch: [], userConfigDir: [], job: [], bridgeSpawn: [] };
function Ie(e) {
  let n = e.namespace === "agentMemory" ? je(e) : void 0;
  if (n !== void 0) return n;
  if (e.namespace === "transcript" || e.namespace === "sidecar") {
    let t = i("scope.sessionId", e.sessionId);
    if (t !== void 0) return t;
  }
  for (let [t, c] of be[e.namespace]) if (t in e && e[t] !== void 0) return (0, import_chunk_7n1spq36.Mu)(`scope.${t}`, c);
  if (e.namespace === "sidecar" && o(e.relPath)) return (0, import_chunk_7n1spq36.Mu)("scope.relPath", a);
  if (e.namespace === "sidecar" && k(e.relPath)) return (0, import_chunk_7n1spq36.Mu)("scope.relPath", R);
  if (e.namespace === "log" && e.channel !== void 0 && !x(e.channel)) return (0, import_chunk_7n1spq36.Mu)("scope.channel", A);
  if (e.namespace === "job" && v(e.relPath)) return (0, import_chunk_7n1spq36.Mu)("scope.relPath", M);
  let r = e.namespace === "sessionLog" ? he(e) : void 0;
  if (r !== void 0) return r;
  if (e.namespace === "scratch" && e.sessionId === void 0 && e.relPath !== void 0) return (0, import_chunk_7n1spq36.Mu)("scope.relPath", "requires scope.sessionId: a scratch relPath narrows one session directory, and no cross-session prefix filter exists");
  if (e.namespace === "userConfigDir" && !p.has(e.dir)) return (0, import_chunk_7n1spq36.Mu)("scope.dir", m);
  if (e.namespace === "transcript" && e.agentRelPath !== void 0 && (e.projectKey === void 0 || e.sessionId === void 0)) return (0, import_chunk_7n1spq36.Mu)("scope.agentRelPath", "requires scope.projectKey and scope.sessionId: an agentRelPath narrows the subagents/ tree of one session directory");
  if (e.namespace === "transcript" && o(e.agentRelPath)) return (0, import_chunk_7n1spq36.Mu)("scope.agentRelPath", a);
  if (e.namespace === "pluginCache") {
    if (e.marketplace === void 0 && e.plugin !== void 0) return (0, import_chunk_7n1spq36.Mu)("scope.plugin", "requires scope.marketplace: a plugin narrows one marketplace folder");
    if (e.plugin === void 0 && e.version !== void 0) return (0, import_chunk_7n1spq36.Mu)("scope.version", "requires scope.plugin: a version narrows one plugin folder");
    if (e.version === void 0 && e.relPath !== void 0) return (0, import_chunk_7n1spq36.Mu)("scope.relPath", "requires scope.version: a relPath narrows one version folder");
  }
  if (e.namespace === "job" && e.jobId === void 0 && e.relPath !== void 0) return (0, import_chunk_7n1spq36.Mu)("scope.relPath", "requires scope.jobId: a job relPath narrows one job directory, and no cross-job prefix filter exists");
  if (e.namespace === "transcript" && e.projectKey === void 0 && e.sessionId !== void 0) return (0, import_chunk_7n1spq36.Mu)("scope.sessionId", "requires scope.projectKey: a session narrows one project folder, and no cross-project session filter exists");
  if (e.namespace === "globalConfig" && e.kind !== void 0 && !E(e.kind)) return (0, import_chunk_7n1spq36.Mu)("scope.kind", j);
  return;
}
function je(e) {
  if (!b(e.layer)) return (0, import_chunk_7n1spq36.Mu)("scope.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e) return (0, import_chunk_7n1spq36.Mu)("scope.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string") return (0, import_chunk_7n1spq36.Mu)("scope.projectKey", "required for the project and local layers");
  return e.agentType === void 0 && e.relPath !== void 0 ? (0, import_chunk_7n1spq36.Mu)("scope.relPath", "requires scope.agentType: an agent-memory relPath narrows one agent directory") : void 0;
}
function Ee(e) {
  switch (e.namespace) {
    case "transcript":
      return [["projectKey", e.projectKey, "optional"], ["sessionId", e.sessionId, "optional"], ["agentRelPath", e.agentRelPath, "optional"]];
    case "task":
      return [["listId", e.listId, "optional"]];
    case "mailbox":
      return [["team", e.team, "optional"]];
    case "memory":
      return [["projectKey", e.projectKey], ["relPath", e.relPath, "optional"]];
    case "pluginCache":
      return [["marketplace", e.marketplace, "optional"], ["plugin", e.plugin, "optional"], ["version", e.version, "optional"], ["relPath", e.relPath, "optional"]];
    case "marketplaceCache":
      return [["marketplace", e.marketplace], ["relPath", e.relPath, "optional"]];
    case "cache":
      return [["store", e.store]];
    case "state":
    case "plan":
    case "paste":
    case "pluginAssetCache":
    case "feedbackDraft":
      return [];
    case "sidecar":
      return [["projectKey", e.projectKey], ["sessionId", e.sessionId], ["relPath", e.relPath, "optional"]];
    case "agentMemory":
      return [["projectKey", e.layer === "user" ? void 0 : e.projectKey, "optional"], ["agentType", e.agentType, "optional"], ["relPath", e.relPath, "optional"]];
    case "scratch":
      return [["sessionId", e.sessionId, "optional"], ["relPath", e.relPath, "optional"]];
    case "userConfigDir":
      return [["relPath", e.relPath, "optional"]];
    case "fileHistory":
      return [["sessionId", e.sessionId, "optional"]];
    case "job":
      return [["jobId", e.jobId, "optional"], ["relPath", e.relPath, "optional"]];
    case "daemon":
      return [["relPath", e.relPath, "optional"]];
    case "jobsRoot":
    case "session":
      return [];
    case "bridgeSpawn":
      return [["dir", e.dir, "optional"]];
    case "globalConfig":
      return [["kind", e.kind, "optional"]];
    case "log":
      return [["sessionId", e.sessionId, "optional"]];
    case "sessionLog":
      return [["projectKey", e.projectKey, "optional"], ["year", e.year, "optional"], ["month", e.month, "optional"], ["day", e.day, "optional"]];
  }
  return;
}
