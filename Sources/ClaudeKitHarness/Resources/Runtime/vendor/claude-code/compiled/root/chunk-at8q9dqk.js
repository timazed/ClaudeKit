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
var chunk_at8q9dqk_exports = {};
__export(chunk_at8q9dqk_exports, {
  BJl: () => BJl,
  DXr: () => DXr,
  GJt: () => GJt,
  GWa: () => GWa,
  KWa: () => KWa,
  LXr: () => LXr,
  VWa: () => VWa,
  _nt: () => _nt,
  aai: () => aai,
  dai: () => dai,
  fYo: () => fYo,
  hq: () => hq,
  jWa: () => jWa,
  lai: () => lai,
  nxn: () => nxn,
  qD: () => qD,
  qWa: () => qWa,
  zWa: () => zWa,
  zsr: () => zsr
});
module.exports = __toCommonJS(chunk_at8q9dqk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
function x(e) {
  if (!Array.isArray(e?.files) || !Array.isArray(e.documents)) return e;
  let r = new Set(e.documents.map((d) => d.file_name)), o = /* @__PURE__ */ new Set([...r, ...e.files.map((d) => d.file_name)]), i = e.files.toReversed().map((d) => {
    let f = d.file_name;
    if (!f || !r.has(f)) return r.add(f), d;
    let w = f.lastIndexOf("."), y = w > f.lastIndexOf("/") + 1 ? w : f.length, j = d.file_uuid.replaceAll("-", ""), k = `${f.slice(0, y)} (${j.slice(-8)})${f.slice(y)}`, A = o.has(k) ? `${f.slice(0, y)} (${j})${f.slice(y)}` : k;
    return o.add(A), { ...d, file_name: A, stored_name: f };
  }).toReversed(), s = (0, import_chunk_4smdap7r.U)(i, (d) => d.stored_name !== void 0);
  if (s === 0) return e;
  return (0, import_chunk_y53wbr8a.a)("tengu_projects_namesake_uploads", { count: s }), { ...e, files: i };
}
var z = 3e4, O = "/v2/ccr-sessions/-/chat-project";
function hq() {
  return (0, import_chunk_5rd4zsth.Nc)() !== null;
}
async function m(e, r, o, i, s) {
  let d = await import_chunk_865at33z.zt.post(O, { op: e, ...r }, { host: (0, import_chunk_f9x2f6cx.QNr)() !== void 0 && (0, import_chunk_865at33z.Hj)() ? "ccr-gateway" : "api", auth: "session-jwt", timeout: z, validateStatus: () => true, signal: i, maxContentLength: s });
  if (d.ok && d.status >= 300) throw new qD(o, d.status, v(d.data), H(d.data), I(d.response));
  return g(d, o);
}
function DXr(e) {
  return e instanceof qD && e.status === 400 && e.body === "unknown op";
}
function aai(e) {
  return e instanceof qD && e.status === 400 && typeof e.body === "string" && e.body.startsWith("consistency and base_content_sha256 are switched off");
}
function H(e) {
  return e !== null && typeof e === "object" && "error_code" in e && typeof e.error_code === "string" && e.error_code !== "" ? e.error_code : void 0;
}
function v(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || typeof e.error !== "string") return e;
  let r = H(e);
  return r === void 0 ? e.error : `${e.error} (${r})`;
}
function h(e, r) {
  return { auth: "teleport-org", timeout: z, headers: { "anthropic-beta": import_chunk_ephf358x.ff }, validateStatus: () => true, signal: e, credentials: r };
}
function b(e, r) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${r}`;
}
async function GJt(e, r, o, i) {
  if (hq()) return x(await m("detail", { asked_ahead: i }, "get project detail", r));
  let s = await import_chunk_865at33z.zt.get(b(e, "/detail"), h(r, o));
  return x(g(s, "get project detail"));
}
var L = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ organization_uuid: (0, import_chunk_adx6804h.u1e)().optional(), documents: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ uuid: (0, import_chunk_adx6804h.n)(), content_salted_sha256: (0, import_chunk_adx6804h.n)().regex(import_chunk_ccm69jjy.fm).nullable() })), reason: (0, import_chunk_adx6804h.F)(["flag_off", "timed_out", "too_many", "too_large", "other"]).catch("other").optional() }));
async function jWa(e) {
  let { organization_uuid: r, documents: o, reason: i } = L().parse(await m("doc-hashes", {}, "get doc hashes", e));
  if (i !== void 0) return { reason: i };
  if (r === void 0) throw Error("The doc hashes came without organization_uuid");
  return { organizationUuid: r, salted: new Map(o.map((s) => [s.uuid, s.content_salted_sha256])) };
}
async function zsr(e, r, o, i, s, d = false, f = false) {
  if (hq()) {
    let y = { doc_uuid: r, ...d && { include_written_by_assistant: true } };
    if (f) try {
      return await m("read-doc", { ...y, consistency: "strong" }, "read doc", o, s);
    } catch (j) {
      if (!aai(j)) throw j;
    }
    return m("read-doc", y, "read doc", o, s);
  }
  let w = await import_chunk_865at33z.zt.get(b(e, `/docs/${encodeURIComponent(r)}`), { ...h(o, i), maxContentLength: s });
  return g(w, "read doc");
}
async function GWa(e, r, o) {
  return m(o ? "folder-docs" : "read-docs", {}, "read docs", e, r);
}
async function LXr(e, r, o, i, s) {
  if (hq()) return m("read-file", { file_uuid: r }, "read file", o, s);
  let d = await import_chunk_865at33z.zt.get(b(e, `/files/${encodeURIComponent(r)}/extracted`), { ...h(o, i), maxContentLength: s });
  return g(d, "read file");
}
var fYo = 20971520, _nt = 262144, D = Math.ceil(fYo * 4 / 3) + 65536;
async function zWa(e, r, o, i) {
  if (hq()) return m("read-file-raw", { file_uuid: r }, "download file", o, D);
  let s = await import_chunk_865at33z.zt.get(b(e, `/files/${encodeURIComponent(r)}/raw`), { ...h(o, i), maxContentLength: D });
  return g(s, "download file");
}
var N = 4194304;
async function T(e, r, o) {
  if (hq()) throw new qD("read project memory", 0, "no memory route over the CCR bridge");
  let i = await import_chunk_865at33z.zt.get(b(e, "/detail?include=melange_memory"), { ...h(r, o), maxContentLength: N });
  return G(g(i, "read project memory").melange_memory);
}
var X = 255, Y = /^[^\r\n\v\f\u0085\u2028\u2029]*$/, K = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)().max(X).regex(Y), content: (0, import_chunk_adx6804h.n)(), size_bytes: (0, import_chunk_adx6804h.E)().optional().catch(void 0), updated_at: (0, import_chunk_adx6804h.n)().nullable().optional().catch(void 0), truncated: (0, import_chunk_adx6804h.P)().optional().catch(void 0) })), W = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ files: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()), truncated: (0, import_chunk_adx6804h.P)().optional().catch(void 0) }));
function G(e) {
  if (e === void 0 || e === null) return null;
  let r = W().safeParse(e);
  if (!r.success) return (0, import_chunk_cqa9hrgx.l)("projects_tool_memory", "parse_failed"), (0, import_chunk_w578pjby.t)("project memory: melange_memory did not parse", { level: "warn" }), null;
  let o = [], i = 0;
  for (let s of r.data.files) {
    let d = K().safeParse(s);
    if (!d.success) {
      i++;
      continue;
    }
    let f = d.data;
    o.push({ path: f.path, content: f.content, size_bytes: f.size_bytes ?? Buffer.byteLength(f.content, "utf8"), updated_at: f.updated_at ?? null, truncated: f.truncated === true });
  }
  if (i > 0) (0, import_chunk_cqa9hrgx.l)("projects_tool_memory", "entries_dropped", { dropped: i }), (0, import_chunk_w578pjby.t)(`project memory: ${i} entries dropped at parse`, { level: "warn" });
  else (0, import_chunk_cqa9hrgx.u)("projects_tool_memory");
  return { files: o, truncated: r.data.truncated === true };
}
async function lai(e, r, o, i, s) {
  if (hq()) return m("write-doc", { file_name: r, content: o }, "create doc", i);
  let d = await import_chunk_865at33z.zt.post(b(e, "/docs"), { file_name: r, content: o }, h(i, s));
  return g(d, "create doc");
}
async function VWa(e, r, o, i, s, d, f) {
  let w = { content: o, ...d !== void 0 && { base_content_sha256: d }, ...f !== void 0 && { max_replaced_content_bytes: f } };
  if (hq()) return m("update-doc", { doc_uuid: r, ...w }, "update doc", i);
  let y = await import_chunk_865at33z.zt.patch(b(e, `/docs/${encodeURIComponent(r)}`), w, h(i, s));
  return g(y, "update doc");
}
async function dai(e, r, o, i) {
  if (hq()) {
    await m("delete-doc", { doc_uuid: r }, "delete doc", o);
    return;
  }
  let s = await import_chunk_865at33z.zt.delete(b(e, `/docs/${encodeURIComponent(r)}`), void 0, h(o, i));
  g(s, "delete doc");
}
var R = 22020096;
async function KWa(e, r, o, i, s, d) {
  if (hq()) return M(await m("kb-search", i > 0 ? { query: r, n: o, images: i } : { query: r, n: o }, "search knowledge base", s, R));
  let f = await import_chunk_865at33z.zt.get(b(e, `/kb/search?query=${encodeURIComponent(r)}&n=${o}${i > 0 ? `&images=${i}` : ""}`), { ...h(s, d), maxContentLength: R });
  return M(g(f, "search knowledge base"));
}
function M(e) {
  if (typeof e === "string") try {
    return (0, import_chunk_w578pjby.te)(e);
  } catch {
    return e;
  }
  return e;
}
function qWa(e, r) {
  if (!r) return e;
  return e.split(r).join("[redacted-oauth-token]");
}
class qD extends Error {
  action;
  status;
  body;
  errorCode;
  retryAfter;
  constructor(e, r, o, i, s) {
    super(`Projects API: ${e} failed (HTTP ${r})${J(o).replace(/(?:sk-ant-|eyJ)[\w.~+/=-]*/g, "[redacted]")}`);
    this.action = e;
    this.status = r;
    this.body = o;
    this.errorCode = i;
    this.retryAfter = s;
    this.name = "ProjectsApiError";
  }
}
function g(e, r) {
  if (!e.ok) throw new qD(r, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new qD(r, e.status, e.data, (0, import_chunk_qesvcmqe.llt)(e.data), I(e.response));
  return e.data;
}
function I(e) {
  let r = e.headers?.["retry-after"];
  return typeof r === "string" ? r : void 0;
}
function J(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${(0, import_chunk_w578pjby._)(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var S = /* @__PURE__ */ new Map();
function nxn(e, r) {
  let o = S.get(e);
  if (o !== void 0) return o;
  let i = T(e, void 0, r).catch((s) => {
    if (S.get(e) === i) S.delete(e);
    throw s;
  });
  return S.set(e, i), i;
}
function BJl() {
  S.clear();
}
