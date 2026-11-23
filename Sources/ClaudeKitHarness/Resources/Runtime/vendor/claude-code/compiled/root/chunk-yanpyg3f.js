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
var chunk_yanpyg3f_exports = {};
__export(chunk_yanpyg3f_exports, {
  CMt: () => CMt,
  F2o: () => F2o,
  Fve: () => Fve,
  HJn: () => HJn,
  LEn: () => LEn,
  jKe: () => jKe,
  oTa: () => oTa
});
module.exports = __toCommonJS(chunk_yanpyg3f_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
function oTa(e, n, r) {
  return e !== void 0 && e.prompt !== null && r.stdin && r.stdout && (n.outputFormat === void 0 || n.outputFormat === "text") && n.sdkUrl === void 0 && n.jsonSchema === void 0 && !n.includePartialMessages && !n.replayUserMessages && n.maxTurns === void 0 && n.maxBudgetUsd === void 0 && n.resumeSessionAt === void 0 && n.resumeDropsTurn === void 0 && n.rewindFiles === void 0 ? { open: e.open, prompt: e.prompt } : void 0;
}
var HJn = "Can't open \u2014 this session is running in another terminal", l = 60, m = /["\u02BA\u02EE\u05F4\u201C-\u201F\u2033\u2036\u301D-\u301F\uFF02]/g;
function LEn(e) {
  let n = (0, import_chunk_7cfjrnwy.lC)((0, import_chunk_7cfjrnwy.Wr)(e)).replace(m, "'");
  return `"${(0, import_chunk_f64qna2j.Tt)(n, l)}"`;
}
function jKe({ title: e, holder: n, canFork: r, handoff: a }) {
  let { jobId: s } = n, o = e ? LEn(e) : "That session", u = s ? `Run \`claude attach ${s}\` to open it, or \`claude stop ${s}\` first to resume it here.` : "Run `claude agents` to find it and open it, or stop it there first to resume it here.", c = r ? " Add --fork-session to branch off a copy instead." : "";
  return `${o} is running in the background${s ? ` (${s})` : ""}.${F2o(a)} ${u}${c}`;
}
async function Fve(e, n) {
  let r = (await CMt(e)).find((s) => s.kind !== "interactive");
  if (!r) return null;
  let a = r.jobId !== void 0 && import_chunk_9e5mdyfk.UW.test(r.jobId) && await p(r.jobId, e, n) ? r.jobId : void 0;
  return { kind: r.kind, jobId: a };
}
async function p(e, n, r) {
  try {
    let { getJobDir: a, readJobState: s } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-98gv4nzd.js"))), o = await s(a(e), r), u = n.toLowerCase();
    return o !== null && (o.sessionId.toLowerCase() === u || o.resumeSessionId?.toLowerCase() === u);
  } catch (a) {
    if ((0, import_chunk_jv7av99m.fn)(a)) (0, import_chunk_w578pjby.t)(`[resume] job state unreadable: ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "warn" });
    else (0, import_chunk_k449cc64.i)(a);
    return false;
  }
}
async function CMt(e, n) {
  let r = n?.rejectUnreadable ? await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-8s2jrd7d.js")))).listAllLiveSessions(void 0, { rejectUnreadable: true }) : await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-8s2jrd7d.js"))).then((o) => o.listAllLiveSessions()).catch(() => []), a = e.toLowerCase(), s = [];
  for (let o of r) {
    if (o.sessionId?.toLowerCase() !== a || o.pid === process.pid || !o.kind) continue;
    if (o.kind === "interactive" && o.parkedJobId !== void 0) continue;
    s.push({ kind: o.kind, jobId: o.jobId });
  }
  return s;
}
function F2o(e) {
  switch (e?.reason) {
    case void 0:
    case "not_openable":
      return "";
    case "prompt_undelivered":
      return { queued: " Your prompt was saved and will be sent to it when you next restart it.", unconfirmed: ` Your prompt may not have reached it: ${e.detail}.`, failed: ` Your prompt was not sent to it: ${e.detail}.` }[e.delivery];
    case "open_failed":
      return e.promptSent ? ` Your prompt was sent to it, but it could not be opened here: ${e.detail}.` : ` It could not be opened here: ${e.detail}.`;
  }
}
