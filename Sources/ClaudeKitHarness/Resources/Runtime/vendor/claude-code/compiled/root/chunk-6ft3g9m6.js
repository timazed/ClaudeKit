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
var chunk_6ft3g9m6_exports = {};
__export(chunk_6ft3g9m6_exports, {
  $1a: () => $1a,
  QXt: () => QXt,
  iri: () => iri,
  kor: () => kor,
  ori: () => ori,
  sri: () => sri
});
module.exports = __toCommonJS(chunk_6ft3g9m6_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_02qcqgas = require("/$bunfs/root/chunk-02qcqgas.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_590fnate = require("/$bunfs/root/chunk-590fnate.js");
var import_chunk_q1sh0fgd = require("/$bunfs/root/chunk-q1sh0fgd.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_shs9e3r5 = require("/$bunfs/root/chunk-shs9e3r5.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
function g({ path: e, code: i, resolved: a }, { words: { nothingDone: r }, maxFileBytes: s, toolPermissionContext: o, workingFolderElsewhere: u }) {
  if ((0, import_chunk_e1ww8aev.RJt)(i)) return (0, import_chunk_e1ww8aev.U7r)(e, i, s, r);
  switch (i) {
    case "path_rejected": {
      let f = (0, import_path.normalize)(e);
      return (0, import_chunk_fwgyarbe.sUt)(f) === void 0 && [e, f].some((h) => {
        let _ = h.slice((0, import_path.parse)(h).root.length).split(import_path.sep).join("/").replace(/^\/+/, "");
        return !(0, import_chunk_w82axegn.dpe)(_) && ![_, ...(0, import_chunk_w82axegn.Bst)(_)].some(import_path.isAbsolute) && ((0, import_chunk_w82axegn.CA)(_) || (0, import_chunk_w82axegn.c0)(_) || (0, import_chunk_w82axegn.wG)(_));
      }) ? { error: (0, import_chunk_e1ww8aev.F7r)(e, { isRemoteMode: false }, r), code: i } : { error: (0, import_chunk_e1ww8aev.UBa)(e, u?.(), r) ?? (0, import_chunk_e1ww8aev.$7r)(e, o, r), code: i };
    }
    case "resolves_elsewhere": {
      let f = a !== void 0 && /^[\x20\x21\x23-\x7e]+$/.test(a) ? a : void 0;
      return { error: `Cannot attach "${e}": it resolves to another path${f === void 0 ? ", through a link or a name that is stored otherwise" : `, "${f}"`}. A file is attached only by the path it resolves to, so that the path that is approved names the file that is sent. If that is the file you mean, call again with ${f === void 0 ? "the path it resolves to" : "that path"}. ${r}`, code: i };
    }
    case "name_direction":
      return { error: `Cannot attach "${e}": its name contains a character that changes text direction. Rename it, or copy it under another name. ${r}`, code: i };
    case "too_large_total":
      return { error: `Cannot attach "${e}": the files of this call are too large together. Attach fewer or smaller files. ${r}`, code: i };
    case "changed":
      return { error: `"${e}" changed while it was being attached. ${r} Try again.`, code: i };
    case "canceled":
      return { error: `Attaching files was interrupted. ${r}`, code: i };
    case "policy_denied":
      return { error: `This organization's policy does not allow attaching files here. ${r}`, code: i };
    case "repo_rules_unread":
      return { error: `This session's cloud environment could not read the repository's permission rules, so the files were not attached. ${r} Retrying won't help: tell the user that .claude/settings.json or .claude/settings.local.json may have to be fixed or removed.`, code: i };
    case "uploads_off":
      return { error: `Attaching files here is no longer allowed in this session. Tell the user; do not retry. ${r}`, code: i };
    case "rule_not_applicable":
    case "container_too_old":
    case "no_container":
    case "egress_blocked":
    case "essential_traffic":
      return { error: `Files cannot be attached in this session. ${r}`, code: i };
    case "policy_pending":
    case "container_unreachable":
    case "no_answer":
    case "put_hash_mismatch":
    case "put_refused":
    case "put_already_used":
    case "put_expired":
    case "put_size_mismatch":
    case "put_busy":
    case "put_failed":
    case "put_bad_answer":
    case "put_network":
      return { error: `The files could not be attached. ${r} Try again.`, code: i };
    case "bad_answer":
    case "no_server_policy":
    case "policy_unread":
    case "put_url_refused":
    case "put_header_refused":
      return { error: `The files could not be attached. ${r}`, code: i };
    default:
      return { error: `The files could not be attached. ${r}`, code: "unexpected" };
  }
}
var z = 300;
function kor(e) {
  return e instanceof import_chunk_yz5b8aaa.Bm || e instanceof import_chunk_yz5b8aaa._v || e instanceof Error && (e.name === "McpError" || e.name === "ProtocolError") && "code" in e && typeof e.code === "number";
}
var M = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ arguments: (0, import_chunk_adx6804h.Ae)({ slug: (0, import_chunk_adx6804h.n)().min(1).max(256).optional() }).optional(), files: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ sha256: (0, import_chunk_adx6804h.n)().regex(import_chunk_ccm69jjy.fm), uri: (0, import_chunk_adx6804h.n)().min(1).max(2048), upload: (0, import_chunk_adx6804h.c)({ url: (0, import_chunk_adx6804h.n)().min(1).max(2048), method: (0, import_chunk_adx6804h.v)("PUT"), headers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()), expiresAt: (0, import_chunk_adx6804h.ie)().optional() }).optional() })) }));
function $1a(e, i, a, r) {
  let s = P(e, i, a);
  if (s === void 0 || "error" in s) return s;
  let o = (0, import_chunk_590fnate.oYr)(r, s.paths.flatMap((u) => (0, import_chunk_n2dbhmj2.Fa)(u) ?? []));
  return o === null ? void 0 : { error: `The Edit or Write of ${o} sent earlier in the same response did not apply (its own result says why), so no file was sent. Settle that change first (correct it, or leave the file as it is if the change was declined), then call ${a.tool} again. ${a.nothingDone}`, code: "write_failed_same_response" };
}
function QXt(e) {
  return e === void 0 || e === null || e === "";
}
async function ori(e) {
  let i = await sri(e);
  if (i === void 0 || "error" in i) return i ?? {};
  let a = await iri(e, i);
  return a.error === void 0 ? { input: i.input } : a;
}
async function sri(e) {
  let { input: i, schema: a, words: r } = e, s;
  try {
    let o = P(i, a, r);
    if (o === void 0) return;
    s = "error" in o ? o : await I(e, o);
  } catch (o) {
    (0, import_chunk_shs9e3r5.kG)(new import_chunk_jv7av99m.A(`MCP file inputs: checking or granting the files of a call failed unexpectedly (${(0, import_chunk_shs9e3r5.u0)(o)})`, "MCP file inputs: checking or granting the files of a call failed unexpectedly"), o), s = T(r);
  }
  return s;
}
async function iri(e, i) {
  let { words: a } = e, r;
  try {
    let s = e.gate();
    if (r = s === void 0 ? await S(e, i) : g({ path: i.files[0].path, code: s }, e), r?.code === "put_expired") {
      let o = await I({ ...e, input: i.input, slugFor: void 0 }, { entries: [], paths: i.files.map((f) => f.path) }), u = "error" in o ? void 0 : i.files.find((f, h) => !(0, import_chunk_z688m88d.Zt)(f, o.files[h]));
      r = "error" in o ? o : u === void 0 ? await S(e, o) : g({ path: u.path, code: o.files.some((f) => (0, import_chunk_z688m88d.Zt)({ ...f, uri: u.uri }, u)) ? "bad_answer" : "changed" }, e);
    }
  } catch (s) {
    (0, import_chunk_shs9e3r5.kG)(new import_chunk_jv7av99m.A(`MCP file inputs: sending the granted files of a call failed unexpectedly (${(0, import_chunk_shs9e3r5.u0)(s)})`, "MCP file inputs: sending the granted files of a call failed unexpectedly"), s), r = T(a);
  }
  return r ?? {};
}
async function I(e, { entries: i, paths: a }) {
  let { words: r, files: s, signal: o } = e, u = a[0], f = e.gate();
  if (f !== void 0) return g({ path: u, code: f }, e);
  let h = [];
  for (let l of await s.hash(a, o)) {
    if ("code" in l) return g(l, e);
    h.push(l);
  }
  if (h.length !== a.length || h.some((l, m) => l.path !== a[m])) return g({ path: u, code: "bad_answer" }, e);
  let _ = await e.slugFor?.(h), F = _ !== void 0 && QXt(e.input.slug) ? { ...e.input, slug: _ } : e.input;
  if (o.aborted) return g({ path: u, code: "canceled" }, e);
  let x;
  try {
    x = await e.authorize({ for_tool: r.tool, ...typeof F.slug === "string" && { slug: F.slug }, files: h.map(({ name: l, size: m, sha256: y }) => ({ name: l, size: m, sha256: y })) });
  } catch (l) {
    if (o.aborted) return g({ path: u, code: "canceled" }, e);
    (0, import_chunk_w578pjby.t)(kor(l) ? `[file inputs] ${import_chunk_q1sh0fgd.wJt} failed: ${(0, import_chunk_jv7av99m.d)(l)}` : `[file inputs] ${import_chunk_q1sh0fgd.wJt} failed (${(0, import_chunk_shs9e3r5.Wae)(l)}); its text is not logged, as it can name a file`, { level: "error" });
    let m = l instanceof import_chunk_yz5b8aaa.Bm || l instanceof import_chunk_yz5b8aaa._v ? (0, import_chunk_7cfjrnwy.NB)((0, import_chunk_jv7av99m.d)(l).trim(), z) : "";
    return { error: `The files could not be attached${m === "" ? "." : `: ${m}${/[.!?\u2026]$/.test(m) ? "" : "."}`} ${r.nothingDone}`, code: "authorize_failed" };
  }
  if (o.aborted) return g({ path: u, code: "canceled" }, e);
  let w = M().safeParse(x);
  if (!w.success || w.data.files.length !== h.length || w.data.files.some((l, m) => l.sha256 !== h[m].sha256)) return { error: `The files could not be attached. ${r.nothingDone}`, code: "authorize_bad_answer" };
  let b = w.data.files.flatMap(({ upload: l }) => l === void 0 ? [] : [(0, import_chunk_m0xr8k74.NSr)(l.expiresAt)]);
  return { ...e.uploadsMayOverlap === true && b.length > 0 && b.every((l) => l !== void 0) && { togetherUntilMs: Math.min(...b) }, input: { ...w.data.arguments, ...F, ...QXt(F.slug) && w.data.arguments, [r.arg]: j(i, r, (l) => w.data.files[l].uri) }, files: h.map((l, m) => ({ ...l, uri: w.data.files[m].uri })), toSend: w.data.files.flatMap(({ upload: l, sha256: m }, y) => l === void 0 ? [] : [{ path: a[y], sha256: m, url: l.url, headers: l.headers }]) };
}
async function S(e, { toSend: i, togetherUntilMs: a }) {
  let r = await e.files.put(i, e.signal, a), s = r.find((o) => "code" in o);
  if (s !== void 0) return g(s, e);
  return r.length !== i.length || e.signal.aborted ? g({ path: i[0]?.path ?? "", code: e.signal.aborted ? "canceled" : "bad_answer" }, e) : void 0;
}
function T({ nothingDone: e }) {
  return { error: `The files could not be attached. ${e}`, code: "unexpected" };
}
function P(e, i, a) {
  let r = e[a.arg];
  if (r === void 0 || r === null || Array.isArray(r) && r.length === 0) return;
  let s = (0, import_chunk_02qcqgas.ZAn)(r, a);
  if (!Array.isArray(s)) return s;
  let o = [r].flat(), u = (0, import_chunk_02qcqgas.sYr)(e, i, a);
  return u === void 0 ? { entries: o, paths: s } : { error: `Cannot call ${a.tool} with these arguments: ${u.listed}.${u.takes} ${a.nothingDone}`, code: "input_schema" };
}
function j(e, { local: i, ref: a }, r) {
  return e.map((s, o) => {
    if (!(0, import_chunk_0jve1fep.Le)(s)) return s;
    let { [i]: u, ...f } = s;
    return { ...f, [a]: r(o) };
  });
}
