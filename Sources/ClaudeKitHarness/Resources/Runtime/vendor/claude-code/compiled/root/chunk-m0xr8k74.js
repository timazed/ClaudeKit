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
var chunk_m0xr8k74_exports = {};
__export(chunk_m0xr8k74_exports, {
  IHi: () => IHi,
  Jfl: () => Jfl,
  Kfl: () => Kfl,
  LSr: () => LSr,
  Lho: () => Lho,
  MHi: () => MHi,
  NSr: () => NSr,
  Nho: () => Nho,
  OHi: () => OHi,
  PHi: () => PHi,
  Pkt: () => Pkt,
  Qfl: () => Qfl,
  RHi: () => RHi,
  Shs: () => Shs,
  Vfl: () => Vfl,
  Xfl: () => Xfl,
  Yfl: () => Yfl,
  Zfl: () => Zfl,
  _hs: () => _hs,
  e1n: () => e1n,
  k8e: () => k8e,
  nle: () => nle,
  qfl: () => qfl,
  w8e: () => w8e,
  xHi: () => xHi,
  yhs: () => yhs,
  zfl: () => zfl
});
module.exports = __toCommonJS(chunk_m0xr8k74_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_spnfty7j = require("/$bunfs/root/chunk-spnfty7j.js");
var import_chunk_hy0sycbj = require("/$bunfs/root/chunk-hy0sycbj.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var x = "io.modelcontextprotocol/protocolVersion", F = /* @__PURE__ */ new Set(["tools/list", "prompts/list", "resources/list", "resources/templates/list", "resources/read", "server/discover"]), N = 256;
function _hs(e, n) {
  let o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), u = e.send.bind(e);
  e.send = (r, a) => {
    if ("method" in r && "id" in r && U(r)) {
      if (o.size >= N) {
        let i = o.keys().next();
        if (!i.done) o.delete(i.value);
      }
      o.set(String(r.id), r.method);
    }
    return u(r, a);
  };
  let c = e.onmessage;
  e.onmessage = (r, a) => {
    if (c?.(r, a), "method" in r || !("id" in r) || r.id === void 0) return;
    let i = o.get(String(r.id));
    if (i === void 0) return;
    if (o.delete(String(r.id)), !("result" in r)) return;
    let l = r.result;
    if (typeof l !== "object" || l === null || Array.isArray(l)) return;
    let d = P(i, r.result);
    if (d.length > 0 && !s.has(i)) s.add(i), (0, import_chunk_k449cc64.He)(n, `${i} result omits required fields although the server negotiated ${import_chunk_hy0sycbj.Bre}; filled in ${d.join(", ")} instead of rejecting it (not logged again for ${i} on this connection)`);
  };
}
function U(e) {
  let n = e.params?._meta;
  return typeof n === "object" && n !== null && x in n && typeof n[x] === "string";
}
function P(e, n) {
  let o = [];
  if (n.resultType === void 0) n.resultType = "complete", o.push('resultType="complete"');
  if (n.resultType === "complete" && F.has(e)) {
    if (n.ttlMs === void 0) n.ttlMs = 0, o.push("ttlMs=0");
    if (n.cacheScope === void 0) n.cacheScope = "private", o.push('cacheScope="private"');
  }
  return o;
}
var q = "io.modelcontextprotocol/clientInfo", LSr = "io.modelcontextprotocol/clientCapabilities";
function zfl(e) {
  let n = (0, import_chunk_ma3kja9f.T)(e) ? e[LSr] : void 0, o = (0, import_chunk_ma3kja9f.T)(n) ? n.extensions : void 0;
  return (0, import_chunk_ma3kja9f.T)(o) && o[import_chunk_spnfty7j.$kt] !== void 0;
}
function Vfl(e) {
  let { [x]: n, [q]: o, [LSr]: s, ...u } = e;
  return u;
}
var nle = "io.modelcontextprotocol/files", Kfl = "io.modelcontextprotocol/files/upload", C = "upload_required", L = /* @__PURE__ */ new Set(["fileId", "url", "path", "method", "form", "headers", "credentials", "expiresAt", "_meta"]), j = /* @__PURE__ */ new Set(["fields", "fileField", "_meta"]), H = /* @__PURE__ */ new Set(["name", "value", "_meta"]), B = /* @__PURE__ */ new Set(["content-type", "content-encoding", "content-range", "content-digest", "repr-digest"]), qfl = ["other_input", "state_only", "request_state", "uploads", "target", "target_member", "file_id", "url", "path", "url_or_path", "target_method", "form", "expires_at", "credentials", "headers", "unknown_file", "repeated_file", "missing_file"], RHi = { other_input: 'it asks for input of another kind (resultType "input_required"), which Claude Code does not answer in a call that sends files; the files extension asks for uploads with resultType "upload_required"', state_only: 'it asks only for the call to be made again with its requestState (resultType "input_required" with no input request in it), and asked again after Claude Code had called it again ten times', request_state: "its requestState is missing or is not text; the files extension has the server bind the call to a requestState, which Claude Code sends back unchanged when it calls again", uploads: "its uploads is missing or is not a list", target: "an entry in uploads is not an object", target_member: "an entry in uploads has a member the files extension does not define; the extension says a client must refuse such a target", file_id: "an entry in uploads has a fileId that is missing, not text, or empty", url_or_path: "an entry in uploads has both a url and a path, or neither; the files extension requires exactly one", url: "an entry in uploads has a url that is not text, is empty, or is longer than 4,096 characters", path: "an entry in uploads has a path that is not text, is empty, or is longer than 4,096 characters", target_method: "an entry in uploads asks for a method other than PUT or POST (in capitals)", form: "an entry in uploads has a form and breaks a rule the files extension sets for one (for example, the entry's method is not POST, its headers include Content-Type, or a field of the form lacks a name or a value)", expires_at: "an entry in uploads has an expiresAt that is not text; the files extension writes it as an RFC 3339 date and time", credentials: 'an entry in uploads has no credentials, or credentials other than "omit" or "include"; the files extension requires one of the two', headers: "an entry in uploads has headers that are not an object of text values, or more than 32 headers, or a header name or value longer than 4,096 characters", unknown_file: "it names a fileId that isn't one of the call's files with bytes to send (Claude Code numbers the call's files file-1, file-2 and so on, skipping any that already stands as text under a key named id in the call's arguments; a file of no bytes gets no upload target)", repeated_file: "it gives one fileId more than one entry in uploads; the files extension allows one", missing_file: "it gives no upload target for one of the call's files" }, K = 4096, e1n = "/uploads", X = 32, O = 4096;
function I(e) {
  return `file-${e + 1}`;
}
var v = { extensions: { [nle]: { upload: {} } } };
function w8e(e) {
  let n = e.capabilities?.extensions?.[nle];
  return e.protocolEra === "modern" && (0, import_chunk_0jve1fep.Le)(n) && (0, import_chunk_0jve1fep.Le)(n.upload) && (n.revision === void 0 || n.revision === null);
}
class Pkt extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(`Claude Code didn't send any file or run the tool: it sends files to "${e}" only over MCP protocol version 2026-07-28, and only when the server lists "upload" in its file-uploads extension and does not ask for a newer version of that extension.`, "MCP file upload refused: the connection is not MCP 2026-07-28, or its server does not list upload in its file-uploads extension or asks for a newer version of it");
    this.name = "FilesNotSpokenError";
  }
}
function Lho(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && (e.resultType === C || e.resultType === "input_required");
}
function yhs(e) {
  return { content: `The tool "${e}" did not finish. The connector got the call with its file contents, then asked for more input before running it, which can't be given here, so nothing more was sent. Don't assume anything was saved or delivered. Tell the user it did not finish and that their admin may need to check this connector. Don't repeat this call unless they ask, since that sends the contents again.`, urlElicitationDeclined: { url: "" }, isError: true };
}
function xHi(e, n = "McpToolCallError") {
  return `${n}; its message (${e.length} characters) is not logged because an error from a call that sends files can contain a file's details or an upload address.`;
}
function PHi(e, n) {
  return { id: n, ...!e.noName && { name: e.name }, mimeType: e.mimeType === "" ? "application/octet-stream" : e.mimeType, size: e.size, ...!e.noDigest && { digest: { algorithm: "sha-256", value: Buffer.from(e.sha256, "hex").toString("base64url") } } };
}
function Yfl(e, n) {
  let o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), u = [e];
  while (u.length > 0) {
    let i = u.pop();
    if (s.has(i) || !(Array.isArray(i) || (0, import_chunk_0jve1fep.Le)(i))) continue;
    s.add(i);
    for (let [l, d] of Object.entries(i)) {
      if (l === "id" && typeof d === "string") o.add(d);
      u.push(d);
    }
  }
  let c = { ...e }, r = [], a = 0;
  for (let i of n) {
    let l = I(a++);
    while (o.has(l)) l = I(a++);
    r.push(l);
    let d = PHi(i, l);
    if (i.index === void 0) {
      c[i.argument] = d;
      continue;
    }
    let f = c[i.argument];
    if (Array.isArray(f)) {
      let p = f === e[i.argument] ? [...f] : f;
      p[i.index] = d, c[i.argument] = p;
    }
  }
  return { sent: c, fileIds: r };
}
function Shs(e) {
  if (!(0, import_chunk_0jve1fep.Le)(e) || e.resultType !== "input_required") return;
  let { inputRequests: n, requestState: o } = e;
  return (!(0, import_chunk_0jve1fep.Le)(n) || Object.keys(n).length === 0) && typeof o === "string" ? o : void 0;
}
function OHi(e, n) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return;
  if (e.resultType === "input_required") return { malformed: Shs(e) === void 0 ? "other_input" : "state_only" };
  if (e.resultType !== C) return;
  let { requestState: o, uploads: s } = e;
  if (typeof o !== "string") return { malformed: "request_state" };
  if (!Array.isArray(s)) return { malformed: "uploads" };
  let u = /* @__PURE__ */ new Map();
  for (let r of s) {
    if (!(0, import_chunk_0jve1fep.Le)(r)) return { malformed: "target" };
    if (!b(r, L)) return { malformed: "target_member" };
    let { fileId: a, headers: i, credentials: l } = r;
    if (typeof a !== "string" || a === "") return { malformed: "file_id" };
    let d = _(r, "url");
    if (d === _(r, "path")) return { malformed: "url_or_path" };
    let f = d ? r.url : r.path;
    if (typeof f !== "string" || f === "" || f.length > K) return { malformed: d ? "url" : "path" };
    let p = _(r, "method") ? r.method : "PUT";
    if (p !== "PUT" && p !== "POST") return { malformed: "target_method" };
    let m;
    if (_(r, "form")) {
      if (p !== "POST" || !(0, import_chunk_0jve1fep.Le)(r.form) || !b(r.form, j)) return { malformed: "form" };
      let { fields: h, fileField: g } = r.form;
      if (!Array.isArray(h) || !D(g)) return { malformed: "form" };
      let k = [];
      for (let E of h) {
        if (!(0, import_chunk_0jve1fep.Le)(E) || !b(E, H)) return { malformed: "form" };
        let { name: R, value: S } = E;
        if (!D(R) || R === g || typeof S !== "string" || /[\r\n\0]/.test(S)) return { malformed: "form" };
        k.push({ name: R, value: S });
      }
      m = { fields: k, fileField: g };
    }
    let y;
    if (_(r, "expiresAt")) {
      if (typeof r.expiresAt !== "string") return { malformed: "expires_at" };
      if (y = NSr(r.expiresAt), y === void 0) (0, import_chunk_w578pjby.t)("[connector upload] an upload target's expiresAt is not an RFC 3339 date and time, so it is treated as absent");
    }
    if (l !== "omit" && l !== "include") return { malformed: "credentials" };
    if (i !== void 0 && i !== null && !(0, import_chunk_0jve1fep.Le)(i)) return { malformed: "headers" };
    let w = Object.entries(i ?? {}).filter(([, h]) => h !== null);
    if (w.length > X) return { malformed: "headers" };
    let M = [];
    for (let [h, g] of w) {
      if (typeof g !== "string" || h.length > O || g.length > O) return { malformed: "headers" };
      if (m !== void 0 && B.has(h.toLowerCase())) return { malformed: "form" };
      M.push([h, g]);
    }
    if (!n.includes(a)) return { malformed: "unknown_file" };
    if (u.has(a)) return { malformed: "repeated_file" };
    u.set(a, { fileId: a, ...d ? { url: f } : { path: f }, method: p, ...m !== void 0 && { form: m }, headers: Object.fromEntries(M), credentials: l, ...y !== void 0 && { expiresAtMs: y } });
  }
  let c = [];
  for (let r of n) {
    let a = u.get(r);
    if (a === void 0) return { malformed: "missing_file" };
    c.push(a);
  }
  return { targets: c, requestState: o };
}
function D(e) {
  return typeof e === "string" && /^[^\p{Cc}"\\]+$/u.test(e);
}
function NSr(e) {
  let n = typeof e === "string" ? Y.exec(e) : null;
  if (n === null) return;
  let o = Number(n[1]), s = Number(n[2]), u = Number(n[3]), c = Number(n[4]), r = Number(n[5]), a = Number(n[6]), i = Number((n[7] ?? "").slice(0, 3).padEnd(3, "0")), l = n[8] === void 0 ? 0 : (n[8] === "-" ? -1 : 1) * (Number(n[9]) * 60 + Number(n[10])), d = o % 4 === 0 && (o % 100 !== 0 || o % 400 === 0), f = /* @__PURE__ */ new Date(0);
  f.setUTCFullYear(o, s - 1, u), f.setUTCHours(c, r, a, i);
  let p = f.getTime() - l * 6e4, m = new Date(p - 1e3);
  if (s < 1 || s > 12 || u < 1 || u > z[s - 1] + (s === 2 && d ? 1 : 0) || c > 23 || r > 59 || a > 60 || Number(n[9] ?? 0) > 23 || Number(n[10] ?? 0) > 59 || a === 60 && (m.getUTCHours() !== 23 || m.getUTCMinutes() !== 59 || m.getUTCSeconds() !== 59)) return;
  return p;
}
var Y = /^(\d{4})-(\d{2})-(\d{2})[Tt](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(?:[Zz]|([+-])(\d{2}):(\d{2}))$/, z = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Xfl(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && e.resultType === C;
}
function IHi(e) {
  if (!(0, import_chunk_0jve1fep.Le)(e) || typeof e.requestState !== "string") return false;
  let n = (0, import_chunk_0jve1fep.Le)(e._meta) ? e._meta[LSr] : void 0, o = (0, import_chunk_0jve1fep.Le)(n) ? n.extensions : void 0, s = (0, import_chunk_0jve1fep.Le)(o) ? o[nle] : void 0;
  return (0, import_chunk_0jve1fep.Le)(s) && (0, import_chunk_0jve1fep.Le)(s.upload);
}
function Jfl(e) {
  if (!e.includes('"requestState"')) return false;
  let n;
  try {
    n = (0, import_chunk_w578pjby.te)(e);
  } catch {
    return false;
  }
  return (0, import_chunk_0jve1fep.Le)(n) && n.method === "tools/call" && IHi(n.params);
}
function Qfl(e) {
  let n = Nho(v, e), o = n.extensions?.[nle];
  return n === v || !(0, import_chunk_0jve1fep.Le)(o) ? n : { ...n, extensions: { ...n.extensions, [nle]: { upload: {}, ...o } } };
}
function k8e(e) {
  let n = e?.extensions?.[nle];
  return (0, import_chunk_0jve1fep.Le)(n) && (n.revision === void 0 || n.revision === null);
}
var MHi = "X-CCR-Files-Advertised";
function Zfl(e, n = false) {
  let o = e.extensions?.[nle];
  if (!k8e(e) || !(0, import_chunk_0jve1fep.Le)(o)) return "none";
  return ["files", ...(o.upload ?? false) === false ? [] : ["upload"], ...typeof o.maxInlineBytes === "number" ? ["inline"] : [], ...n ? ["save"] : []].join(",");
}
function Nho(e, { serverAdvertisedDownloads: n, downloadsOn: o }) {
  if (!n || !o) return e;
  return { ...e, extensions: { ...e.extensions, [nle]: { ...(0, import_chunk_0jve1fep.Le)(e.extensions?.[nle]) ? e.extensions[nle] : {}, download: {} } } };
}
function b(e, n) {
  return Object.keys(e).every((o) => n.has(o) || !_(e, o));
}
function _(e, n) {
  return Object.hasOwn(e, n) && e[n] !== null;
}
