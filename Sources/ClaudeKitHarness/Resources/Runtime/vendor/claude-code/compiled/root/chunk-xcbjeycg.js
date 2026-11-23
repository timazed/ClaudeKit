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
var chunk_xcbjeycg_exports = {};
__export(chunk_xcbjeycg_exports, {
  I1r: () => I1r,
  SFo: () => SFo,
  bFo: () => bFo,
  h9l: () => h9l,
  wFo: () => wFo,
  yFo: () => yFo
});
module.exports = __toCommonJS(chunk_xcbjeycg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_bsw3jbbx = require("/$bunfs/root/chunk-bsw3jbbx.js");
var import_chunk_tjr3fy8z = require("/$bunfs/root/chunk-tjr3fy8z.js");
var import_chunk_zjby1kcv = require("/$bunfs/root/chunk-zjby1kcv.js");
var import_chunk_5bnj11f9 = require("/$bunfs/root/chunk-5bnj11f9.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_r949v7h0 = require("/$bunfs/root/chunk-r949v7h0.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var j = 3e3, I1r = 134217728, z = /* @__PURE__ */ new Set(["csv", "docx", "jsonl", "log", "md", "ndjson", "ods", "odt", "parquet", "pdf", "pptx", "rtf", "tsv", "txt", "xls", "xlsm", "xlsx", "zip"]), k = /* @__PURE__ */ new Set(["cmakecache.txt", "cmakelists.txt", "conanfile.txt", "constraints.txt", "requirements.txt"]), X = /^test.*\.txt$/;
function yFo(e) {
  if (e.includes(import_path.posix.sep)) return "has_directory";
  if (Buffer.byteLength(e) > import_chunk_bsw3jbbx.W7r) return "too_long";
  if (!(0, import_chunk_7cfjrnwy.Cf)(e)) return "odd_spelling";
  let d = (0, import_chunk_bsw3jbbx.MMe)(e);
  if (d !== void 0) return d;
  let o = (0, import_chunk_fbnv54pa.za)(e), c = o.lastIndexOf(".");
  if (c <= 0) return "no_suffix";
  if (!z.has(o.slice(c + 1))) return "not_data";
  return k.has(o) || X.test(o) ? "project_file" : void 0;
}
async function K(e, { fileUuid: d, name: o }, c) {
  let r = await (0, import_chunk_bsw3jbbx.lnt)(e, o);
  if (r !== void 0) return { outcome: r.outcome === "refused_name" ? `refused_${r.refusal}` : r.outcome, bytes: 0 };
  let t = (0, import_chunk_tjr3fy8z.LXt)(d, void 0);
  if (t === void 0) return { outcome: "source_missing", bytes: 0 };
  if (t.size > c) return { outcome: "over_byte_budget", bytes: 0 };
  let i = await (0, import_chunk_qanr9g0g.rAe)(t.path, t.size);
  if (i === null) return { outcome: "source_unreadable", bytes: 0 };
  if ((0, import_chunk_ccm69jjy.Je)(i) !== t.sha256) return { outcome: "source_changed", bytes: 0 };
  let _ = await SFo(e, o, i, void 0);
  if (_.outcome === "placed") await wFo(e, { fileUuid: d, name: o }, t);
  return _.outcome === "refused_name" ? { outcome: `refused_${_.refusal}`, bytes: 0 } : { outcome: _.outcome, bytes: _.outcome === "placed" ? i.length : 0 };
}
async function SFo(e, d, o, c) {
  return await bFo(e, d, o, (r) => (0, import_chunk_bsw3jbbx.xJt)(r, e, d, c));
}
async function bFo(e, d, o, c) {
  let r = import_path.posix.join(e, `${(0, import_chunk_zjby1kcv.X9r)(d)}${Date.now()}.${Math.random().toString(36).slice(2)}`), t = await (0, import_promises.open)(r, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr, 384);
  try {
    try {
      await t.writeFile(o);
    } finally {
      await t.close();
    }
    return await c(r);
  } finally {
    await (0, import_promises.unlink)(r).catch(() => {
    });
  }
}
async function wFo(e, { fileUuid: d, name: o }, { size: c, sha256: r }) {
  let t = (0, import_chunk_f9x2f6cx.UOe)(), i = (0, import_chunk_5bnj11f9.ISn)(o), _ = import_path.posix.join(e, o), b = t.get(i);
  t.delete(i);
  let h = await (0, import_promises.lstat)(_).catch(() => {
    return;
  });
  if (h === void 0) return;
  let w = t.size >= import_chunk_5bnj11f9.OSn && t.keys().next().value;
  if (typeof w === "string") t.delete(w);
  t.set(i, { path: _, fileUuid: d.toLowerCase(), dev: h.dev, ino: h.ino, mtimeMs: Math.floor(h.mtimeMs), size: c, sha256: r, ...b !== void 0 && b.path !== _ && { ambiguous: true } });
}
var N = { filesWait: "not_reached", filesWaitMs: 0, copiedBytes: 0, namedInCall: 0, namedInCallPlaced: 0, namedInCallAlreadyPresent: 0, counts: {} };
async function h9l(e, d, o = j, c = I1r) {
  let { fileNames: r } = e;
  if (r === void 0) return;
  let t = performance.now(), { outcome: i, filesWait: _, counts: b, lastErrorCode: h, ...w } = r === "malformed" ? { ...N, outcome: "malformed" } : await Y(r, e, d, o, c).catch((g) => ({ ...N, outcome: "failed", lastErrorCode: (0, import_chunk_jv7av99m.Cr)(g) ?? (0, import_chunk_78g0060s.S)("unknown") })), C = r === "malformed" ? 0 : r.length, F = { outcome: (0, import_chunk_78g0060s.f)(i), files_wait: (0, import_chunk_78g0060s.f)(_), files_wait_ms: w.filesWaitMs, duration_ms: Math.round(performance.now() - t), approx_copied_bytes: Number(w.copiedBytes.toPrecision(2)), files_listed: C, files_named_in_call: w.namedInCall, files_named_in_call_placed: w.namedInCallPlaced, files_named_in_call_already_present: w.namedInCallAlreadyPresent, ...(0, import_chunk_9zdrdv25.iP)(b, (g, E) => `files_${E}`), ...h !== void 0 && { last_error_code: h } };
  (0, import_chunk_y53wbr8a.a)("tengu_turn_handoff_files_by_name", F), (0, import_chunk_42tcgre6.q)(h !== void 0 || i === "malformed" ? "warn" : "info", "turn_handoff_files_by_name", F);
  let I = (b.placed ?? 0) + (b.already_present ?? 0) + (b.present_under_another_name ?? 0), T = (0, import_chunk_xfj2cwfv.gb)(Object.entries(b), ([g, E]) => g.startsWith("refused_") || g === "repeated_name" || g === "path_occupied" ? E : 0);
  if (i === "aborted") ;
  else if (i === "not_applicable") (0, import_chunk_cqa9hrgx.l)("ccr_turn_handoff_files_by_name", i);
  else if (i !== "finished") (0, import_chunk_cqa9hrgx.m)("ccr_turn_handoff_files_by_name", i);
  else if (T === C) (0, import_chunk_cqa9hrgx.l)("ccr_turn_handoff_files_by_name", "all_skipped_by_rule");
  else if (I + T === C) (0, import_chunk_cqa9hrgx.u)("ccr_turn_handoff_files_by_name");
  else if (I > 0) (0, import_chunk_cqa9hrgx.l)("ccr_turn_handoff_files_by_name", "some_files_absent");
  else (0, import_chunk_cqa9hrgx.m)("ccr_turn_handoff_files_by_name", "all_files_absent");
}
async function Y(e, d, o, c, r) {
  let t = (0, import_chunk_6mfepmbb.sce)(), [i, _] = await Promise.all([(0, import_chunk_18rsj2ts.pe)(), t].map((n) => (0, import_promises.realpath)(n).catch(() => {
    return;
  })));
  if (!(0, import_chunk_3t7ve0wy.Sa)() || !(0, import_chunk_r949v7h0.FG)(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID, import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND) || _ === void 0 || i !== _) return { ...N, outcome: "not_applicable" };
  let b = performance.now(), h = await (0, import_chunk_sjqze7qg.Cnn)(o), w = Math.round(performance.now() - b);
  await (0, import_chunk_zjby1kcv.DXt)(t, import_chunk_6mfepmbb.r2), await (0, import_chunk_5bnj11f9.q5n)();
  let C = d.messages.at(-1), F = C?.type === "assistant" && Array.isArray(C.message.content) ? C.message.content.flatMap((n) => n.type === "tool_use" && d.toolUseIDs.includes(n.id) && typeof n.input === "object" && n.input !== null ? Object.values(n.input).flatMap((y) => typeof y === "string" ? [y, y.replaceAll("\\", "")] : []) : []) : [], I = new Set(e.filter(({ name: n }) => n !== "" && F.some((y) => y.includes(n)))), T = /* @__PURE__ */ new Map();
  for (let { name: n, fileUuid: y } of e) T.set(n, (T.get(n) ?? /* @__PURE__ */ new Set()).add(y.toLowerCase()));
  let g = {}, E = /* @__PURE__ */ new Set(), O = 0, M = 0, L = 0, x, B = false, D = performance.now() + c;
  for (let n of e.toSorted((y, p) => Number(I.has(p)) - Number(I.has(y)))) {
    if (o.aborted) {
      B = true;
      break;
    }
    let y = yFo(n.name), p;
    if (y !== void 0) p = `refused_${y}`;
    else if (T.get(n.name)?.size !== 1) p = "repeated_name";
    else if (E.has(n.fileUuid.toLowerCase())) p = "present_under_another_name";
    else if (performance.now() > D) p = "over_time_budget";
    else try {
      let P = await K(t, n, r - O);
      p = P.outcome, O += P.bytes;
    } catch (P) {
      x = (0, import_chunk_jv7av99m.Cr)(P) ?? (0, import_chunk_78g0060s.S)("unknown"), p = "copy_failed";
    }
    if (g[p] = (g[p] ?? 0) + 1, p === "placed" || p === "already_present") E.add(n.fileUuid.toLowerCase());
    if (I.has(n) && p === "placed") M++;
    else if (I.has(n) && p === "already_present") L++;
  }
  if ((g.placed ?? 0) > 0) await (0, import_chunk_5bnj11f9.P1r)();
  return { outcome: B ? "aborted" : "finished", filesWait: h, filesWaitMs: w, copiedBytes: O, namedInCall: I.size, namedInCallPlaced: M, namedInCallAlreadyPresent: L, counts: g, ...x !== void 0 && { lastErrorCode: x } };
}
