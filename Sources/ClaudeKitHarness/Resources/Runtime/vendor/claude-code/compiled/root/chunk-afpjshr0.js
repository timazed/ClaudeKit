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
var chunk_afpjshr0_exports = {};
__export(chunk_afpjshr0_exports, {
  ORn: () => ORn,
  bTe: () => bTe,
  gBa: () => gBa,
  hBa: () => hBa,
  i4e: () => i4e,
  isr: () => isr,
  k7r: () => k7r,
  mBa: () => mBa,
  rsi: () => rsi,
  tnt: () => tnt
});
module.exports = __toCommonJS(chunk_afpjshr0_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_q5veqmrm = require("/$bunfs/root/chunk-q5veqmrm.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_h5jsp3s5 = require("/$bunfs/root/chunk-h5jsp3s5.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var x = 10;
function ORn(e) {
  return e === "" ? "" : `"${e}"`;
}
function isr(e, d, l) {
  let n = e.filter((i) => i.direction === "fetching" && (i.state === "running" || i.state === "done" || i.state === "kept")), [r] = n;
  if (r === void 0) return;
  let s = (0, import_chunk_q5veqmrm.GQ)(n.map((i) => l(i.connectorName) || "a connector")), a = r.state === "running" ? "will be" : n.length === 1 ? "was" : "were";
  return [n.length === 1 ? d(r.fileName) || "The file" : `${n.length} files`, ` ${a} saved from `, new Intl.ListFormat("en", { type: "conjunction" }).format(s), ". Download from apps you trust."];
}
function L(e, d, l) {
  let [n] = e;
  if (n === void 0 || !e.every(({ connectorName: a, direction: i, state: f }) => i === "fetching" && f === "done" && a === n.connectorName)) return {};
  let r = e.length === 1 ? d(n.fileName) : "", s = l(n.connectorName);
  return { saved_from: { files: e.length, ...r !== "" && { file: r }, ...s !== "" && { app: s } } };
}
function rsi(e, d, l) {
  let n = (r) => d(r).replace(/\bwww\./giu, "www-");
  try {
    let r = [], s = e.filter((o) => o.direction === "fetching" && o.state === "done"), a = new Set(s.length > x + 1 ? s.slice(x) : []), i = e.filter((o) => !a.has(o)).map(({ connectorName: o, direction: m, fileName: E, fileIndex: T, fileCount: g, groupedFiles: _, savedAs: w, state: u }, F) => {
      let y = n(E), p = `${y === "" ? "the file" : `"${y}"`}${g > 1 ? ` (${T} of ${g})` : ""}`;
      if (m === "sending") {
        let v = l(o);
        return `sent ${p} to ${v === "" ? "the connector" : `"${v}"`}`;
      }
      let c = w === void 0 ? void 0 : (0, import_chunk_2yx6c1y2.Po)(w), N = c === void 0 ? "Part or all of the file may have been left behind." : `Part or all of the file may remain at ${c}.`;
      if (u === "done") {
        if (w !== void 0 && c !== void 0) r.push({ line: F, path: w, shown: c });
        return `saved ${p}${c === void 0 ? "" : ` to ${c}`}`;
      }
      if (u === "kept") return `kept ${p} under a temporary name${c === void 0 ? "" : ` at ${c}`}`;
      if (typeof u === "string") return `stopped downloading ${p}. ${u === "stopped-maybe-saved" ? N : "The file was not saved."}`;
      return `${_ === void 0 ? `${p} was` : `${_}${_ < g ? ` of the ${g}` : ""} files were`} not downloaded${u.refused === "" ? "" : `: ${u.refused}`}.${u.leftBehind ? ` ${N}` : ""}`;
    });
    if (a.size > 0) i.push(`saved ${a.size} more files`);
    let f = isr(e, (o) => ORn(n(o)), (o) => ORn(l(o)));
    if (f !== void 0) i.push(f.join(""));
    if (i.length > 0) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "informational", content: i.map(import_chunk_7cfjrnwy.wi).join(`
`), level: "notice", tag: "connector_files", ...r.length > 0 && { saved_files: r }, ...L(e, n, l) });
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`connector files notice failed: ${r}`, { level: "error" });
  }
}
function tnt(e) {
  return e.replace(import_chunk_5ft9yxne.Wwt, "");
}
var S = { target_unreadable: "the connector's download details for it are not valid", no_file_type: "the connector didn't say what type of file it is", not_the_relay_address: "the connector didn't offer it in a way Claude Code can download", link_not_usable: "its link is not one Claude Code may use", expired: "the offer to download it had already expired", too_large: "it is over 500 MB", over_result_cap: "Claude Code downloads at most 10 files from one tool result in a cloud session" }, R = [{ value: "download", label: "Download" }, { value: "skip", label: "Don't download" }];
async function mBa({ canUseTool: e, toolUseContext: d, connectorName: l, folder: n, offers: r }) {
  let s = P(l, n, r);
  if (s === void 0) return { answer: "question_too_long" };
  let a = await (0, import_chunk_h5jsp3s5.Uue)({ canUseTool: e, toolUseContext: d, source: "mcp_connector_download", header: "Download", question: s, choices: R, personOnly: true });
  switch (a.kind) {
    case "chose":
      return { answer: a.value === "download" ? "allowed" : "declined" };
    case "declined":
      return { answer: "declined", typedAnswer: a.typedAnswer };
    case "aborted":
      return { answer: "aborted" };
    case "unanswered":
      return { answer: a.reason === "no_one_to_ask" ? "no_person" : "unanswered" };
  }
}
function P(e, d, l) {
  let n = l.filter((o) => o.refusal === void 0), r = isr(n.map(({ name: o }) => ({ direction: "fetching", state: "running", fileName: o, connectorName: e })), (o) => `\`${bTe(o) || "(no name)"}\``, (o) => ORn(i4e(o)));
  if (r === void 0) return;
  let s = [`Download ${n.length === 1 ? "a file" : `${n.length} files`} into the cloud session (${tnt(d)})?`, "", r.join(""), "", ...n.map(b)], a = l.filter((o) => o.refusal !== void 0), i = 0;
  for (let o of a) {
    let m = b(o);
    if (s.join(`
`).length + m.length + k < import_chunk_mh32mevx.H0) s.push(m);
    else i++;
  }
  if (i > 0) s.push(`- ${i} more ${i === 1 ? "file" : "files"} that can't be downloaded`);
  let f = s.join(`
`);
  return f.length <= import_chunk_mh32mevx.H0 ? f : void 0;
}
var A = /^(?=.{3,80}$)(application|audio|font|image|model|text|video)\/[a-z0-9][a-z0-9!#$&^_.+-]*$/, k = 60;
function b(e) {
  let d = (0, import_chunk_5ft9yxne.Tsn)(e.mimeType), n = [I.get(d) ?? (A.test(d) ? `\`${d}\`` : void 0), e.size === void 0 ? void 0 : e.size < 1048576 ? `${e.size === 0 ? 0 : Math.max(1, Math.round(e.size / 1024))}KB` : `${Number((e.size / 1048576).toFixed(1))}MB`, e.refusal === void 0 ? void 0 : `can't be downloaded: ${S[e.refusal]}`];
  return `- \`${O(e.name) || "(no name)"}\`${n.filter(Boolean).map((r) => ` \xB7 ${r}`).join("")}`;
}
var D = /[\u02D1\u0971\u119E\u11A2\u1427\u318D\uA78F]/u, M = new RegExp(`${/[^\p{L}\p{M}0-9 ._\-()[\]&+,'!@#$%=~\u2026]|\u02CB/u.source}|${D.source}`, "gu"), U = new RegExp(`${/[^\p{L}\p{M}0-9 .\-()&+,'!\u2026]|\u02CB/u.source}|${D.source}`, "gu");
function h(e) {
  return (0, import_chunk_5ft9yxne.rll)(e);
}
function i4e(e) {
  return h((0, import_chunk_5ft9yxne.ppe)(e)).replace(import_chunk_03kvdj1s.Sxt, "'").replace(U, "-").replace(import_chunk_03kvdj1s.bxt, "").replace(/\bwww\./giu, "www-");
}
function O(e) {
  return C((0, import_chunk_5ft9yxne.Esn)(e));
}
function C(e) {
  return h(e.replaceAll("`", "'").replace(M, "-").replace(import_chunk_03kvdj1s.bxt, ""));
}
function k7r(e) {
  return e.replace(import_chunk_03kvdj1s.Sxt, "'").replace(import_chunk_03kvdj1s.bxt, "");
}
function bTe(e) {
  return h(k7r(O(e)));
}
function hBa(e) {
  return h(k7r(C((0, import_chunk_kx2fp6pc.lg)((0, import_chunk_5ft9yxne.ppe)(e))))).replace(/\bwww\./giu, "www-");
}
function gBa(e) {
  return (0, import_chunk_5ft9yxne.Esn)(e.name) || "(no name)";
}
var I = /* @__PURE__ */ new Map([["application/pdf", "PDF"], ["image/png", "PNG picture"], ["image/jpeg", "JPEG picture"], ["image/gif", "GIF picture"], ["image/webp", "WebP picture"], ["text/plain", "text file"], ["text/csv", "CSV file"], ["application/csv", "CSV file"], ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "Word document"], ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Excel spreadsheet"], ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "PowerPoint presentation"]]);
