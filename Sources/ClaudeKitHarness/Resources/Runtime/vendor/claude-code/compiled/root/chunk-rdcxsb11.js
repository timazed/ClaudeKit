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
var chunk_rdcxsb11_exports = {};
__export(chunk_rdcxsb11_exports, {
  SRa: () => SRa,
  W6r: () => W6r,
  _Ra: () => _Ra,
  b3s: () => b3s,
  fYt: () => fYt,
  gRa: () => gRa,
  hRa: () => hRa,
  uYt: () => uYt,
  yRa: () => yRa
});
module.exports = __toCommonJS(chunk_rdcxsb11_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_ta6q9jek = require("/$bunfs/root/chunk-ta6q9jek.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_02wf5c4s = require("/$bunfs/root/chunk-02wf5c4s.js");
var import_chunk_h8v51dgb = require("/$bunfs/root/chunk-h8v51dgb.js");
var import_chunk_rtsmzy7m = require("/$bunfs/root/chunk-rtsmzy7m.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var B = "tengu_breezy_pelican", I = 0.16666666666666666, H = 2e5;
function hRa(e) {
  let o = (n) => e.some((s) => (0, import_chunk_4vsz8a99.gt)(s, n));
  if (!o(import_chunk_k883m4fq.De) || !o(import_chunk_hn3cwwzt.ke)) return;
  if ((0, import_chunk_865at33z.b)(B, null)?.copy_hint !== true) return;
  let t = o(import_chunk_865at33z.Sr) ? import_chunk_865at33z.Sr : "`grep`";
  return `local_file is for reading only: read the parts you need with ${import_chunk_k883m4fq.De}'s offset and limit, or search it with ${t}. Edits to it never reach the project, and project_write rejects it as local_path. To change the document or make a file from it, run \`cat /path/of/local_file > new-name\` in the working directory, where new-name is a name that no file there has, and work on that file. To save a change, call project_write with the document's path and that file as local_path. If the document is an upload such as a PDF, that saves a new text document and leaves the upload as it is.`;
}
function gRa({ facts: e, configuredWindow: o, messages: r, room: t }) {
  let n = (0, import_chunk_865at33z.b)(B, null);
  if (n?.mode !== "always" && n?.mode !== "after_compaction") return;
  let s = (0, import_chunk_bzyb60p0.Vw)(e, o);
  if (!(s > 0)) return;
  if (s > H) {
    let c = n.step_share;
    if (t === void 0 || !(typeof c === "number" && c > 0 && c <= 1)) return;
    let f = e.longContextWindowWithoutOptIn > 0 ? s : Math.min(s, t.threshold);
    return { maxTokens: Math.max(0, Math.floor(f * c) - t.claimed()), bytesPerToken: e.bytesPerToken, claim: t.claim, splitLongLines: n.long_lines === true, sizedAsSent: n.as_sent === true, cutsUnsaved: n.cut_unsaved === true };
  }
  if (n.mode === "after_compaction" && !(0, import_chunk_bzyb60p0.Aos)(r)) return;
  let { fraction: a } = n;
  return { maxTokens: Math.round(s * (typeof a === "number" && a > 0 && a <= 1 ? a : I)), bytesPerToken: e.bytesPerToken, splitLongLines: n.long_lines === true, sizedAsSent: n.as_sent === true, cutsUnsaved: false };
}
var K = "tengu_imperative_whistle", F = "tengu_tailored_gusset", X = 6e3, S = 200;
function w(e, o, r = true) {
  return `

[Only the first ${e} of ${o} bytes of this text are shown.${r ? " To see the rest, call `project_info`: it can give a file that holds all of this text. `project_search` does not search it. Read or search only the parts of that file that the task needs." : ""}]`;
}
var N = /\n\n\[Only the first (\d+) of (\d+) bytes of this text are shown\./, Y = new RegExp(N, "g");
function b3s(e, o, r, t = true, n) {
  let s = (0, import_chunk_bzyb60p0.Vw)(o, (0, import_chunk_bzyb60p0.afe)(r)), a = s > H;
  if (!(s > 0) || !(0, import_chunk_2xjdqky3.om)()) return;
  let c = Math.round(s * I) * o.bytesPerToken, f = e.description ?? "", m = e.prompt_template ?? "", d = Buffer.byteLength(e.name, "utf8") + Buffer.byteLength(f, "utf8") + Buffer.byteLength(m, "utf8"), k = d - c;
  if (k <= 0) return;
  let p = n?.compaction?.replacedMessages ?? n?.messages ?? [], h = a && N.test((0, import_chunk_bzyb60p0.zue)(p)?.attachedProject ?? "");
  if (a) {
    if (!h && (n?.compaction?.consecutiveRapidRefills ?? 0) < import_chunk_bzyb60p0.CPn - 1) return;
    let g = (0, import_chunk_865at33z.b)("tengu_nimble_quarry", 0), y = k / o.bytesPerToken;
    if (!(typeof g === "number" && g > 0) || y < g || !h && (0, import_chunk_bzyb60p0.tZr)((0, import_chunk_bzyb60p0.lZt)(p), y, o, r)) return;
  }
  let _ = a ? void 0 : v((0, import_chunk_865at33z.Lt)(F, null));
  if (_ !== void 0 && n?.forToolResult) return L(e.name, f, m, c, t);
  if (_ !== void 0) {
    let g = (0, import_chunk_bzyb60p0.zue)(p)?.attachedProject, y = W6r(f, g), C = W6r(m, g), A = y !== void 0 && C !== void 0, T = A && y + C < d - Buffer.byteLength(e.name, "utf8") ? { name: U(e.name), description: O(f, y, t), prompt_template: O(m, C, t) } : void 0, P = T ? Buffer.byteLength(T.name + T.description + T.prompt_template, "utf8") : d, R = s - _.room, M = n?.compaction ? (0, import_chunk_bzyb60p0.lZt)(p) : void 0, z = (p.findLast(import_chunk_865at33z.On)?.compactMetadata?.postTokens ?? 0) * 4 / o.bytesPerToken, E = M === void 0 ? 0 : M - z - R, J = !A ? _.front + (n?.otherContextTokens ?? 0) + d / o.bytesPerToken - R : E > X ? E : 0, j = Math.min(P, Math.max(c, Math.floor(P - J * o.bytesPerToken)));
    return (0, import_chunk_cqa9hrgx.u)("projects_texts_cut", { bytes: d, limit: j }), j < P ? L(e.name, f, m, j, t) : T;
  }
  if (!(0, import_chunk_865at33z.Lt)(K, false)) {
    (0, import_chunk_cqa9hrgx.l)("projects_texts_cut", "sent_whole");
    return;
  }
  if (a) (0, import_chunk_cqa9hrgx.l)("projects_texts_cut", h ? "cut_kept" : "cut_before_stop");
  else (0, import_chunk_cqa9hrgx.u)("projects_texts_cut");
  return L(e.name, f, m, c, t);
}
function _Ra(e, o, r) {
  try {
    let { tools: t } = o.options, n = t === void 0 || t.some((h) => (0, import_chunk_4vsz8a99.gt)(h, import_chunk_ta6q9jek.fy));
    if (!n && e.attachedProject === (0, import_chunk_h8v51dgb.HXr)(true)) return (0, import_chunk_cqa9hrgx.u)("projects_context_block_without_tool"), { ...e, attachedProject: (0, import_chunk_h8v51dgb.HXr)(false) };
    let s = e.attachedProject === void 0 ? void 0 : import_chunk_h8v51dgb.txn.peek(o.session)?.get(e.attachedProject);
    if (s === void 0) {
      if (!n && e.attachedProject) (0, import_chunk_cqa9hrgx.l)("projects_context_block_without_tool", "not_rebuilt");
      return e;
    }
    let [a, c, f, , m] = s, d = (0, import_chunk_bzyb60p0.Il)(o.loopModel), k = b3s(a, d, o.options.autoCompactWindow, n, { messages: [], ...r, otherContextTokens: (0, import_chunk_xfj2cwfv.gb)(Object.entries(e), ([h, _]) => h === "attachedProject" ? 0 : (0, import_chunk_c1hnv4fm.Ul)(_, d.bytesPerToken)) });
    if (k === void 0 && n) return e;
    let p = (0, import_chunk_h8v51dgb.uYo)({ ...a, ...k }, c, f, n, m);
    if (!n) (0, import_chunk_cqa9hrgx.u)("projects_context_block_without_tool");
    return { ...e, attachedProject: p };
  } catch (t) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(t), "project block could not be rebuilt")), e;
  }
}
function yRa() {
  return v((0, import_chunk_865at33z.kde)(F)) !== void 0;
}
function v(e) {
  return typeof e === "object" && e !== null && "room" in e && "front" in e && typeof e.room === "number" && typeof e.front === "number" && e.room > 0 && e.front > 0 ? { room: e.room, front: e.front } : void 0;
}
function W6r(e, o) {
  if (o === void 0) return;
  let r = Buffer.byteLength(e, "utf8");
  for (let t of o.matchAll(Y)) {
    let n = Number(t[1]);
    if (Number(t[2]) === r && n < r && o.includes((0, import_chunk_7cfjrnwy.FB)(e, n) + t[0])) return n;
  }
  return o.includes(e) ? r : void 0;
}
function O(e, o, r) {
  let t = Buffer.byteLength(e, "utf8");
  return o < t ? (0, import_chunk_7cfjrnwy.FB)(e, o) + w(o, t, r) : e;
}
function U(e) {
  return Buffer.byteLength(e, "utf8") <= S ? e : `${(0, import_chunk_7cfjrnwy.FB)(e, S - 3)}\u2026`;
}
function L(e, o, r, t, n) {
  let s = U(e), a = t - Buffer.byteLength(s, "utf8"), c = x(o, Math.max(Math.floor(a / 4), a - Buffer.byteLength(r, "utf8")), n);
  return { name: s, description: c, prompt_template: x(r, a - Buffer.byteLength(c, "utf8"), n) };
}
function x(e, o, r) {
  let t = Buffer.byteLength(e, "utf8");
  if (t <= o) return e;
  let n = (0, import_chunk_7cfjrnwy.FB)(e, o - Buffer.byteLength(w(o, t, r), "utf8"));
  return n + w(Buffer.byteLength(n, "utf8"), t, r);
}
function V(e) {
  return [e.toolAliases, e.permissions().toolAliases];
}
function uYt(e) {
  let o = V(e).flatMap((t) => Object.entries(t ?? {})), r = o.flatMap(([t, n]) => [...n === import_chunk_ta6q9jek.fy ? [t] : [], ...t === import_chunk_ta6q9jek.fy ? [n] : []]);
  return [import_chunk_ta6q9jek.fy, ...r, ...o.flatMap(([t, n]) => r.includes(n) ? [t] : [])];
}
function q(e) {
  let o = e.permissions(), r = uYt(e);
  return [...(0, import_chunk_ht27b0vz.Vs)(o), ...(0, import_chunk_ht27b0vz.al)(o)].some((t) => (0, import_chunk_7cfjrnwy.nt)(t.ruleValue.ruleContent ?? "", ":").trim() === "path" && r.some((n) => (0, import_chunk_ht27b0vz.jc)(o, { name: n }, t)));
}
function W(e, o, r) {
  return V(r).some((t) => (0, import_chunk_bzyb60p0.Z$)({ hookEvent: e, toolName: import_chunk_ta6q9jek.fy, toolInput: o, tools: r.tools, toolAliases: t, sessionHooks: r.sessionHooksRegistry, sessionId: (0, import_chunk_bzyb60p0.ly)(r, e, r.session.id) }));
}
function G(e, o) {
  if (uYt(o).some((t, n, s) => (0, import_chunk_5zps0wmn.Gq)(t) || (0, import_chunk_5zps0wmn.aAe)(s.length > 1 ? { tool: t } : (0, import_chunk_rtsmzy7m.UO)({ name: t }), (0, import_chunk_5zps0wmn.Ib)("tool.check"))) || (0, import_chunk_02wf5c4s.bR)("PostToolBatch") || (0, import_chunk_bzyb60p0.e0)("PostToolBatch", o.sessionHooksRegistry, (0, import_chunk_bzyb60p0.ly)(o, "PostToolBatch", o.session.id)) || W("PostToolUse", e, o)) return "hook";
  let r = q(o);
  if (W("PreToolUse", e, o)) return r || uYt(o).length > 1 ? "hook" : "pre_tool_use_hook";
  return r ? "path_rule" : void 0;
}
function SRa(e, o) {
  let r = G(e, o);
  return r === "pre_tool_use_hook" ? "hook" : r;
}
function fYt(e, o, r) {
  let t = e.find((a) => (0, import_chunk_4vsz8a99.gt)(a, import_chunk_ta6q9jek.fy));
  if (t === void 0) return "tool_not_offered";
  let n = { method: "project_read" };
  if ((0, import_chunk_ht27b0vz.Tr)(o, t) !== null || (0, import_chunk_ht27b0vz.Di)(o, t) !== null || (0, import_chunk_ht27b0vz.pu)(o, t, n, "deny") !== null || (0, import_chunk_ht27b0vz.pu)(o, t, n, "ask") !== null) return "read_refused_by_rule";
  let s = G(n, r());
  if (s === "path_rule") return "read_refused_by_rule";
  return s === "hook" ? "read_refused_by_hook" : s;
}
