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
var chunk_w8j62fk4_exports = {};
__export(chunk_w8j62fk4_exports, {
  BFa: () => BFa,
  C8r: () => C8r,
  E8r: () => E8r,
  Iue: () => Iue,
  KDt: () => KDt,
  Mue: () => Mue,
  T8r: () => T8r,
  VDt: () => VDt,
  Vqe: () => Vqe,
  ani: () => ani,
  ini: () => ini,
  k8r: () => k8r,
  oni: () => oni,
  rni: () => rni,
  sni: () => sni,
  tor: () => tor,
  v8r: () => v8r,
  z5o: () => z5o
});
module.exports = __toCommonJS(chunk_w8j62fk4_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_gea9tjyt = require("/$bunfs/root/chunk-gea9tjyt.js");
var import_chunk_spnfty7j = require("/$bunfs/root/chunk-spnfty7j.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var rni = ["input_unservable"], oni = ["time_limit", "server_not_responding", "task_unknown", "sign_in_stopped", "access_denied", "answer_too_large", "other"], sni = 8;
function ini(e) {
  return oni.find((n) => n === e) ?? "other";
}
var z5o = "connector:", ani = "relay:";
function BFa(e) {
  return e !== void 0 && (e.startsWith(z5o) || e.startsWith(ani));
}
var P = /^k[0-9a-z]{8}$/, g = 256, f = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u, k8r = /^[A-Za-z0-9_-]{1,128}$/, R = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ taskId: (0, import_chunk_rnm2beqc.we)().regex(P), serverName: (0, import_chunk_rnm2beqc.we)().min(1).max(g).regex(f), toolName: (0, import_chunk_rnm2beqc.we)().min(1).max(g).regex(f), mcpTaskId: (0, import_chunk_rnm2beqc.we)().min(1).regex(f), pollIntervalMs: (0, import_chunk_rnm2beqc.nr)().optional(), spawnedAt: (0, import_chunk_rnm2beqc.nr)(), toolUseId: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_trwykz8a.bPo).optional(), protocol: (0, import_chunk_rnm2beqc.we)().min(1).max(g).regex(/^[\x20-\x7e]+$/).optional(), ttlExpiresAt: (0, import_chunk_rnm2beqc.nr)().optional(), polledBy: (0, import_chunk_rnm2beqc.df)(["service", "client"]).optional().catch(void 0), pollerOffers: (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.Cg)(true), (0, import_chunk_rnm2beqc.Cg)("at_message")]).optional().catch(void 0), pollerSince: (0, import_chunk_rnm2beqc.nr)().optional().catch(void 0), pollerStopped: (0, import_chunk_rnm2beqc.we)().min(1).transform(ini).optional().catch(void 0), pollerGiveUpEvents: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)().min(1).max(g)).transform((e) => e.slice(-sni)).optional().catch(void 0), transportFingerprint: (0, import_chunk_rnm2beqc.we)().max(8192).optional(), workerWakeId: (0, import_chunk_rnm2beqc.we)().regex(k8r).optional(), cancelReason: (0, import_chunk_rnm2beqc.df)(rni).optional().catch(void 0), movedFrom: (0, import_chunk_rnm2beqc.on)({ sessionId: (0, import_chunk_rnm2beqc.we)().uuid(), projectKey: (0, import_chunk_rnm2beqc.we)().max(512).refine(import_chunk_hkvzj051.Ao) }).optional().catch(void 0) }).passthrough().superRefine((e, n) => {
  if (e.protocol === "sep2663" && (e.mcpTaskId.length > import_chunk_spnfty7j.Pbe || !import_chunk_spnfty7j.rZ.test(e.mcpTaskId))) n.addIssue({ code: import_chunk_rnm2beqc.Ho.custom, path: ["mcpTaskId"], message: "sep2663 task id exceeds the wire bound" });
}));
function E8r(e) {
  return R().safeParse(e);
}
var v8r = "stopped_by_person", D = 1e4, k = 4194304, K = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ registryId: (0, import_chunk_rnm2beqc.we)().regex(P), sessionId: (0, import_chunk_rnm2beqc.we)().min(1).max(g), runId: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_trwykz8a.bPo), toolUseId: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_trwykz8a.bPo).optional().catch(void 0), endedAt: (0, import_chunk_rnm2beqc.nr)().int().min(0).max(864e13), serverName: (0, import_chunk_rnm2beqc.we)().min(1).max(g).regex(f), toolName: (0, import_chunk_rnm2beqc.we)().min(1).max(g).regex(f), mcpTaskId: (0, import_chunk_rnm2beqc.we)().max(import_chunk_spnfty7j.Pbe).regex(import_chunk_spnfty7j.rZ), status: (0, import_chunk_rnm2beqc.df)(["completed", "failed", "cancelled"]), code: (0, import_chunk_rnm2beqc.we)().regex(/^[a-z_]{1,64}$/).optional(), resultText: (0, import_chunk_rnm2beqc.we)().optional(), resultHint: (0, import_chunk_rnm2beqc.we)().max(D).regex(f).optional().catch(void 0), statusMessage: (0, import_chunk_rnm2beqc.we)().optional() }));
function Iue() {
  return I();
}
function I() {
  return (0, import_chunk_f9x2f6cx._se)() ?? (0, import_chunk_q3a5dy2r.BAt)() ?? (0, import_chunk_q3a5dy2r.jC)((0, import_chunk_f9x2f6cx.Te)());
}
function Vqe(e, n) {
  return e === (0, import_chunk_f9x2f6cx.W)() ? Iue() : n ?? Iue();
}
function E(e = (0, import_chunk_f9x2f6cx.W)(), n = I()) {
  return (0, import_path.join)(n, e, "mcp-tasks");
}
function x(e, n = (0, import_chunk_f9x2f6cx.W)(), r, s = "meta") {
  return (0, import_path.join)(E(n, r), `mcp-task-${e}.${s}.json`);
}
function T(e = Iue()) {
  return (0, import_chunk_hsqa3g9e.JEr)(e);
}
function h(e, n, r = (0, import_chunk_f9x2f6cx.W)(), s = "meta") {
  return import_chunk_hkvzj051.at.sidecar(e, r, ["mcp-tasks", `mcp-task-${n}.${s}.json`]);
}
async function VDt(e, n, r, s) {
  let c = s?.projectDir ?? Iue(), d = (0, import_chunk_m15w38ag.ne)() && r !== void 0 ? T(c) : void 0, u = s?.sessionId ?? (0, import_chunk_f9x2f6cx.W)(), o = (0, import_chunk_gea9tjyt.cG)(c), i = o === void 0 ? void 0 : x(e, u, o);
  if (r && d !== void 0) {
    if (i !== void 0) await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(i));
    let m = await r.write(h(d, e, u), (0, import_chunk_w578pjby._)(n), { publishDiscipline: "inPlace" });
    if (!m.ok) throw (0, import_chunk_w578pjby.t)(`writeMcpTaskMetadata: ${m.error.code}`), Error("mcp task metadata write failed");
    return;
  }
  if (i === void 0) return;
  await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(i)), await (0, import_chunk_8j3h6yzg.Vn)().write(i, (0, import_chunk_w578pjby._)(n));
}
async function T8r(e, n, r) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  let { registryId: s, sessionId: c } = e, d = (0, import_chunk_m15w38ag.ne)() && n !== void 0 ? T(r) : void 0;
  if (n && d !== void 0) {
    let o = await n.write(h(d, s, c, "outcome"), (0, import_chunk_w578pjby._)(e), { publishDiscipline: "atomic", mode: 384 });
    if (!o.ok) throw (0, import_chunk_w578pjby.t)(`writeMcpTaskOutcome: ${o.error.code}`), Error("mcp task outcome write failed");
    return;
  }
  if (typeof r === "object") throw Error("mcp task outcome: the project folder is a storage scope and no storage backend can take it");
  let u = x(s, c, r, "outcome");
  await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(u), 448), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(u, (0, import_chunk_w578pjby._)(e), 384);
}
function tor(e, n, r, s) {
  return Mue(e, n, r, s, "outcome");
}
async function Mue(e, n, r, s, c = "meta") {
  let d = (0, import_chunk_m15w38ag.ne)() && n !== void 0 ? T(s) : void 0;
  if (n && d !== void 0) {
    let o = await n.delete(h(d, e, r, c));
    if (!o.ok) throw (0, import_chunk_w578pjby.t)(`deleteMcpTaskMetadata: ${o.error.code}`), Error("mcp task metadata delete failed");
    return;
  }
  if ((0, import_chunk_f9x2f6cx.Y)() || typeof s === "object") return;
  let u = x(e, r, s, c);
  try {
    await (0, import_chunk_8j3h6yzg.Vn)().delete(u);
  } catch (o) {
    if ((0, import_chunk_jv7av99m.fn)(o)) return;
    throw o;
  }
}
function KDt(e) {
  return A("listMcpTaskMetadata", ".meta.json", E8r, e);
}
function C8r(e) {
  return A("listMcpTaskOutcomes", ".outcome.json", (n, r) => K().refine((s) => r === `mcp-task-${s.registryId}.outcome.json`, "the file is named for another task").safeParse(n), e);
}
async function A(e, n, r, s) {
  let c = (0, import_chunk_m15w38ag.ne)() && s !== void 0 ? T() : void 0;
  if (s && c !== void 0) return v(e, n, r, s, c);
  if ((0, import_chunk_f9x2f6cx.Y)()) return [];
  let d = E(), u;
  try {
    u = await (0, import_chunk_8j3h6yzg.Vn)().list(d);
  } catch (i) {
    if ((0, import_chunk_jv7av99m.fn)(i)) return [];
    throw i;
  }
  let o = [];
  for (let i of u) {
    if (!i.endsWith(n)) continue;
    try {
      let m = await O((0, import_path.join)(d, i)), a = r((0, import_chunk_w578pjby.te)(m), i);
      if (!a.success) {
        (0, import_chunk_w578pjby.t)(`${e}: skipping ${i}: ${String(a.error)}`);
        continue;
      }
      o.push(a.data);
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`${e}: skipping ${i}: ${String(m)}`);
    }
  }
  return o;
}
async function O(e) {
  let n = (0, import_chunk_8j3h6yzg.Vn)();
  if (import_chunk_09gzjq1e.Fo === 0 && (await n.lstat(e))?.isFile === false) throw Error("not a regular file");
  let r = await n.readTail(e, k + 1, { noFollow: true });
  if (r.length > k) throw Error("over the size bound");
  return r.toString("utf8");
}
async function v(e, n, r, s, c) {
  let d = { namespace: "sidecar", projectKey: c, sessionId: (0, import_chunk_f9x2f6cx.W)(), relPath: ["mcp-tasks"] }, u = [], o = await (0, import_chunk_hnt4bwpe.Nd)((m) => s.listEntries(d, { cursor: m, skipKeyStats: true, skipScopeStats: true }), (m) => {
    for (let a of m) {
      if (a.kind !== "key" || a.key.namespace !== "sidecar") continue;
      if ((a.key.relPath.at(-1) ?? "").endsWith(n)) u.push(a.key);
    }
  });
  switch (o.status) {
    case "done":
      break;
    case "error":
      throw (0, import_chunk_w578pjby.t)(`${e}: ${o.error.code}`), Error("mcp task metadata list failed");
    case "capped":
      throw (0, import_chunk_w578pjby.t)(`${e}: list exceeded ${import_chunk_hnt4bwpe.pS} pages`), Error("mcp task metadata list exceeded the page cap");
  }
  let i = [];
  for (let m of u) {
    let a = m.relPath.at(-1) ?? "", S = await s.read([{ key: m, offset: 0, length: k + 1 }]);
    if (!S.ok) {
      (0, import_chunk_w578pjby.t)(`${e}: skipping ${a}: ${S.error.code}`);
      continue;
    }
    let M = S.value.items[0];
    if (!M.found) continue;
    if (M.totalBytes > k) {
      (0, import_chunk_w578pjby.t)(`${e}: skipping ${a}: over the size bound`);
      continue;
    }
    try {
      let l = r((0, import_chunk_w578pjby.te)(Buffer.from(M.value).toString("utf8")), a);
      if (!l.success) {
        (0, import_chunk_w578pjby.t)(`${e}: skipping ${a}: ${String(l.error)}`);
        continue;
      }
      i.push(l.data);
    } catch (l) {
      (0, import_chunk_w578pjby.t)(`${e}: skipping ${a}: ${String(l)}`);
    }
  }
  return i;
}
