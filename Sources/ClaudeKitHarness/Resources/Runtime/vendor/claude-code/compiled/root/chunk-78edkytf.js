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
var chunk_78edkytf_exports = {};
__export(chunk_78edkytf_exports, {
  IIa: () => IIa,
  UJ: () => UJ,
  XYs: () => XYs,
  cKo: () => cKo
});
module.exports = __toCommonJS(chunk_78edkytf_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
function P(r) {
  return (0, import_path.join)(m(), `${r}.json`);
}
function m() {
  let r = (0, import_chunk_hsqa3g9e.Hre)();
  return (0, import_path.join)(r, (0, import_chunk_f9x2f6cx.W)(), "workflows");
}
function UJ(r) {
  let a = (0, import_chunk_hsqa3g9e.Hre)();
  return (0, import_path.join)(a, (0, import_chunk_f9x2f6cx.W)(), "subagents", "workflows", r);
}
function cKo() {
  let r = (0, import_chunk_hsqa3g9e.Hre)();
  return (0, import_path.dirname)(r) === (0, import_chunk_hsqa3g9e.bh)() ? (0, import_path.basename)(r) : void 0;
}
function j(r, a, n) {
  return import_chunk_hkvzj051.at.sidecar(r, a, ["workflows", `${n}.json`]);
}
async function IIa(r, a, n) {
  try {
    let i = { runId: r, timestamp: (/* @__PURE__ */ new Date()).toISOString(), ...a }, l = P(r), s = (0, import_chunk_m15w38ag.ne)() && n ? cKo() : void 0, o = (0, import_chunk_f9x2f6cx.W)();
    if (await (0, import_promises.mkdir)((0, import_path.dirname)(l), { recursive: true, mode: 448 }), (0, import_chunk_m15w38ag.ne)() && n && s !== void 0 && (0, import_chunk_hkvzj051.Ao)(`${r}.json`)) {
      let e = await n.write(j(s, o, r), (0, import_chunk_w578pjby._)(i), { publishDiscipline: "inPlace", mode: 384 });
      if (!e.ok) (0, import_chunk_w578pjby.t)(`Failed to write workflow snapshot ${r}: ${e.error.code}`);
      return;
    }
    await (0, import_promises.writeFile)(l, (0, import_chunk_w578pjby._)(i), { encoding: "utf8", mode: 384 });
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`Failed to write workflow snapshot ${r}: ${i instanceof Error ? i.message : i}`);
  }
}
function d(r, a) {
  let n = r.runId ?? a;
  return { runId: n, taskId: r.taskId ?? n, timestamp: r.timestamp ?? (/* @__PURE__ */ new Date(0)).toISOString(), script: r.script ?? "", scriptPath: r.scriptPath, args: r.args, result: r.result, agentCount: r.agentCount ?? 0, logs: r.logs ?? [], durationMs: r.durationMs ?? 0, error: r.error, summary: typeof r.summary === "string" ? r.summary : void 0, workflowName: typeof r.workflowName === "string" ? r.workflowName : void 0, title: r.title, status: r.status ?? (r.error ? "failed" : "completed"), startTime: r.startTime ?? (Date.parse(r.timestamp ?? "") || 0), phases: r.phases, defaultModel: r.defaultModel, workflowProgress: r.workflowProgress ?? [], totalTokens: r.totalTokens ?? 0, totalToolCalls: r.totalToolCalls ?? 0 };
}
async function XYs(r) {
  let a = r ? cKo() : void 0;
  if (r && a !== void 0) return T(r, a);
  let n = m(), i;
  try {
    i = await (0, import_promises.readdir)(n);
  } catch {
    return [];
  }
  let l = (await Promise.all(i.filter((s) => s.endsWith(".json")).map(async (s) => {
    try {
      let o = await (0, import_promises.readFile)((0, import_path.join)(n, s), "utf8"), e = (0, import_chunk_w578pjby.te)(o);
      return d(e, s.replace(/\.json$/, ""));
    } catch (o) {
      return (0, import_chunk_w578pjby.t)(`Failed to parse workflow snapshot ${s}: ${o instanceof Error ? o.message : o}`), null;
    }
  }))).filter((s) => s !== null);
  return l.sort((s, o) => o.startTime - s.startTime), l;
}
async function T(r, a) {
  let n = { namespace: "sidecar", projectKey: a, sessionId: (0, import_chunk_f9x2f6cx.W)(), relPath: ["workflows"] }, i = [], l;
  do {
    let o = await r.listEntries(n, l === void 0 ? void 0 : { cursor: l });
    if (!o.ok) return (0, import_chunk_w578pjby.t)(`Failed to list workflow snapshots: ${o.error.code}`), [];
    for (let e of o.value.items) {
      if (e.kind !== "key" || e.key.namespace !== "sidecar") continue;
      if ((e.key.relPath.at(-1) ?? "").endsWith(".json")) i.push(e.key);
    }
    l = o.value.cursor;
  } while (l !== void 0);
  let s = (await Promise.all(i.map(async (o) => {
    let e = o.relPath.at(-1) ?? "";
    try {
      let f = await r.read([o]);
      if (!f.ok) return (0, import_chunk_w578pjby.t)(`Failed to parse workflow snapshot ${e}: ${f.error.code}`), null;
      let c = f.value.items[0];
      if (!c?.found) return (0, import_chunk_w578pjby.t)(`Failed to parse workflow snapshot ${e}: deleted between list and read`), null;
      let w = (0, import_chunk_w578pjby.te)(Buffer.from(c.value).toString("utf8"));
      return d(w, e.replace(/\.json$/, ""));
    } catch (f) {
      return (0, import_chunk_w578pjby.t)(`Failed to parse workflow snapshot ${e}: ${f instanceof Error ? f.message : f}`), null;
    }
  }))).filter((o) => o !== null);
  return s.sort((o, e) => e.startTime - o.startTime), s;
}
