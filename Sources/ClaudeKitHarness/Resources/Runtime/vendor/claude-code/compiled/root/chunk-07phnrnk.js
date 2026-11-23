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
var chunk_07phnrnk_exports = {};
__export(chunk_07phnrnk_exports, {
  BVo: () => BVo,
  WVo: () => WVo,
  a7l: () => a7l,
  i7l: () => i7l,
  iYs: () => iYs,
  n7l: () => n7l,
  o7l: () => o7l,
  r7l: () => r7l,
  s7l: () => s7l,
  sYs: () => sYs
});
module.exports = __toCommonJS(chunk_07phnrnk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_02qcqgas = require("/$bunfs/root/chunk-02qcqgas.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_w8ry7jkt = require("/$bunfs/root/chunk-w8ry7jkt.js");
var import_chunk_ye486ddj = require("/$bunfs/root/chunk-ye486ddj.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_1pan7v6b = require("/$bunfs/root/chunk-1pan7v6b.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_587zek71 = require("/$bunfs/root/chunk-587zek71.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_path = require("path");
var re = 20, D = import_chunk_271f5kxt.jDe, V = 3600, ne = 27e5, O = 6e5, N = { arg: "files", feature: "managed_agents_task_file_upload", local: "path", ref: "file_id", refWord: "id", maxFiles: re }, P = { start_task: { words: { ...N, tool: "start_task", nothingDone: "No task was started." }, withoutFiles: "Start the task without files.", offerWithoutFiles: "start the task without files", offerWithoutTheFiles: "start the task without the files", withoutThisFile: "Start the task without this file", offerWithoutThisFile: "start the task without this file", wordsArg: "task_description" }, update_task: { words: { ...N, tool: "update_task", nothingDone: "Nothing was sent to the task." }, withoutFiles: "Send the update without files.", offerWithoutFiles: "send the update without files", offerWithoutTheFiles: "send the update without the files", withoutThisFile: "Send the update without this file", offerWithoutThisFile: "send the update without this file", wordsArg: "update_instructions" } };
function U(r, e) {
  let n = (0, import_chunk_f9x2f6cx.Y)(), a = n ? import_chunk_w8ry7jkt.DBa.peek(e)?.host : void 0;
  if (!(n ? a !== void 0 && (0, import_chunk_w8ry7jkt.hsr)(a, r) : (0, import_chunk_w8ry7jkt.ant)(r)) || !(0, import_chunk_865at33z.b)("tengu_twinkling_cosmos", false)) return;
  return { host: a };
}
async function n7l(r, e, n, a, o, h) {
  let f = n.files;
  if (!Array.isArray(f) || f.length === 0) return {};
  let p = P[e], c;
  try {
    let T = U(r, h);
    if (T === void 0) return {};
    let { host: k } = T;
    c = k === void 0 ? await G(f, p, a, o) : await Z(f, p, k, a, o);
  } catch (T) {
    (0, import_chunk_k449cc64.i)(T), c = { error: `The files could not be attached. ${p.words.nothingDone} ${p.withoutFiles}`, code: "unexpected" };
  }
  if ("error" in c) {
    if (c.code !== "canceled" && c.code !== "upload_canceled") (0, import_chunk_cqa9hrgx.m)("managed_agents_task_file_upload", c.code);
    return { error: c.error };
  }
  return (0, import_chunk_cqa9hrgx.u)("managed_agents_task_file_upload"), { input: { ...n, files: c.files } };
}
var oe = 6e5, B = "start-task-upload-before-ask", ie = D, se = 3e5, j = /* @__PURE__ */ new WeakMap();
function r7l(r, e, n, a, o, h, f) {
  let p = n.files;
  if (f === "" || !Array.isArray(p) || p.length === 0 || !p.every((g) => (0, import_chunk_0jve1fep.Le)(g) && typeof g.path === "string" && g.file_id === void 0) || r.config.type !== "http" || !(0, import_chunk_2mwshd9r.Yu)(r.config.url)) return;
  let c = U(r, h);
  if (c === void 0) return;
  let { host: T } = c, k = p, F = (0, import_chunk_w578pjby._)(n);
  return { prepare: () => {
    let g = (0, import_chunk_sjqze7qg.bXa)(h, f, F), w = g && j.get(g);
    if (w !== void 0) return w;
    let S = { toolUseId: f, pathFormKey: F, files: [], uploadStartedAt: Date.now(), state: "uploading", remove: (y) => X(y, T) };
    (0, import_chunk_sjqze7qg.SXa)(h, S);
    let E = ae(S, P[e], k, T, a, o, h).then((y) => {
      if ("error" in y) return y;
      let L = S.files;
      return { input: { ...n, files: L }, description: `Attaches ${k.map((ee, x) => `${(0, import_chunk_1pan7v6b._Ae)(String(ee.path))} as ${(0, import_chunk_1pan7v6b._Ae)(L[x]?.name ?? "")} (${de(L[x]?.file_id)})`).join("; ")}`, release: () => (0, import_chunk_sjqze7qg.mnn)(h, S) };
    });
    return j.set(S, E), E;
  } };
}
async function ae(r, e, n, a, o, h, f) {
  let p = { mustStartWithinMs: oe, maxTotalBytes: a === void 0 ? ie : void 0, onUploaded: (k) => {
    if (r.state === "deleted") r.remove([k.file_id]);
    else r.files.push(k);
  } }, c, T = !!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES;
  if (T) (0, import_chunk_wx7ffn80.sk)("tool_exec", B);
  try {
    c = a === void 0 ? await G(n, e, o, h, p) : await Z(n, e, a, o, h, p);
  } catch (k) {
    (0, import_chunk_k449cc64.i)(k), c = { error: `The files could not be attached. ${e.words.nothingDone} ${e.withoutFiles}`, code: "unexpected" };
  } finally {
    if (T) (0, import_chunk_wx7ffn80.ik)("tool_exec", B);
  }
  if (!("error" in c) && r.state === "deleted") c = A("canceled", e);
  if ("error" in c) {
    if (await (0, import_chunk_sjqze7qg.mnn)(f, r), c.code !== "canceled" && c.code !== "upload_canceled") (0, import_chunk_cqa9hrgx.m)("managed_agents_task_file_upload", c.code);
    return { error: c.error };
  }
  return (0, import_chunk_cqa9hrgx.u)("managed_agents_task_file_upload"), r.state = "pending", { ok: true };
}
async function X(r, e) {
  if (e === void 0) {
    await WVo(r);
    return;
  }
  await Promise.all(r.map((n) => e.delete?.(n)));
}
function de(r) {
  return r !== void 0 && import_chunk_w8ry7jkt.kUe.test(r) ? r : "?";
}
async function o7l(r, e, n) {
  let a = U(r, e);
  if (a === void 0 || !Array.isArray(n)) return;
  let o = n.flatMap((h) => (0, import_chunk_0jve1fep.Le)(h) && typeof h.file_id === "string" ? [h.file_id] : []);
  await X(o, a.host);
}
function s7l(r, e) {
  let n = P[e];
  if (Date.now() > r + V * 1e3 - se) return `The files for this task were uploaded about an hour before this approval and have expired or are about to. Call ${e} again to upload them afresh. ${n.words.nothingDone}`;
  let a = (0, import_chunk_2zeyvjwb.t2)(), o = (0, import_chunk_ye486ddj.EW)();
  if (o !== void 0) return (o === "egress_blocked" ? v(n) : C(n)).error;
  return a ? M(n).error : void 0;
}
function i7l(r, e, n) {
  let a = (0, import_chunk_e1ww8aev.AJt)(n);
  if (a === void 0 || (0, import_chunk_f9x2f6cx.Y)() || !(0, import_chunk_w8ry7jkt.ant)(r) || !(0, import_chunk_865at33z.b)("tengu_twinkling_cosmos", false)) return;
  return `In this session, files the user attached to the chat are usually in ${a}. To give one to the task, put its full path in files as an object, such as files: [{"path": "${a}/report.csv"}]. Do that rather than copying the file's text into ${P[e].wordsArg}.`;
}
function a7l(r, e, n, a, o) {
  let h = n.files;
  if (h === void 0 || h === null || Array.isArray(h) && h.length === 0 || U(r, o) === void 0) return;
  let { words: f } = P[e], p = (0, import_chunk_02qcqgas.ZAn)(h, f), c = Array.isArray(p) ? void 0 : p, { files: T, ...k } = n, F = Array.isArray(p) ? { ...k, files: p.map((E, y) => ({ file_id: `file_${y}`, name: `file_${y}` })) } : k, g = (0, import_chunk_02qcqgas.sYr)(F, a, { ...f, ignoreInside: f.arg });
  if (c === void 0 && g === void 0) return;
  if (c === void 0) (0, import_chunk_cqa9hrgx.l)("managed_agents_task_file_upload", "input_schema");
  else (0, import_chunk_cqa9hrgx.m)("managed_agents_task_file_upload", c.code);
  if (g === void 0) return c.error;
  let w = ` ${f.nothingDone}`, S = c === void 0 ? "" : ` ${c.error.endsWith(w) ? c.error.slice(0, -w.length) : c.error}`;
  return `Cannot call ${e} with these arguments: ${g.listed}.${S}${g.takes} ${f.nothingDone}`;
}
var z = { mustStartWithinMs: ne };
async function G(r, e, n, a, o = z) {
  let h = (0, import_chunk_02qcqgas.ZAn)(r, e.words);
  if (!Array.isArray(h)) return h;
  let f = (0, import_chunk_2zeyvjwb.t2)(), p = (0, import_chunk_ye486ddj.EW)();
  if (p !== void 0) return p === "egress_blocked" ? v(e) : C(e);
  if (f) return M(e);
  if (!(0, import_chunk_865at33z.fz)()) return Q(e);
  for (let F of h) try {
    await (0, import_chunk_yt7wk02j.Ust)(F, n);
  } catch (g) {
    return (0, import_chunk_w578pjby.t)(`[task files] rejected path: ${F} (${(0, import_chunk_jv7av99m.d)(g)})`), R(F, (0, import_chunk_e1ww8aev.g0t)(g), "here", n, e);
  }
  let c = [], T = Date.now() + o.mustStartWithinMs, k = o.maxTotalBytes === void 0 ? void 0 : { remainingBytes: o.maxTotalBytes };
  for (let F of h) {
    if (a.aborted) return A("canceled", e);
    if (Date.now() > T) return I(e);
    let g, w;
    try {
      ({ realPath: g, requiredDigest: w } = await (0, import_chunk_yt7wk02j.Ust)(F, n));
    } catch (y) {
      return (0, import_chunk_w578pjby.t)(`[task files] rejected path: ${F} (${(0, import_chunk_jv7av99m.d)(y)})`), R(F, (0, import_chunk_e1ww8aev.g0t)(y), "here", n, e);
    }
    let S = await BVo(g, w, a, k);
    if (!S.ok) return (0, import_chunk_w578pjby.t)(`[task files] not uploaded: ${F} (${S.code})`), R(F, S.code, "here", n, e);
    let E = { file_id: S.file_id, name: S.name };
    c.push(E), o.onUploaded?.(E);
  }
  if (a.aborted) return A("canceled", e);
  if (Date.now() > T + O) return I(e);
  return { files: c };
}
async function Z(r, e, n, a, o, h = z) {
  let f = (0, import_chunk_02qcqgas.ZAn)(r, e.words);
  if (!Array.isArray(f)) return f;
  let p = (0, import_chunk_2zeyvjwb.t2)(), c = (0, import_chunk_ye486ddj.EW)();
  if (c !== void 0) return c === "egress_blocked" ? v(e) : C(e);
  if (p) return M(e);
  let T = "elsewhere", k = [], F = Date.now() + h.mustStartWithinMs;
  for (let g of f) {
    if (o.aborted) return A("canceled", e);
    if (Date.now() > F) return I(e);
    if (n.ruleItCannotApply(a) !== void 0) return { error: `Cannot attach files: this session's limits on reading files cannot be applied in its cloud environment, where the upload would happen. ${e.words.nothingDone} ${e.withoutFiles}`, code: "rule_not_applicable" };
    if (!(0, import_chunk_e1ww8aev.Kgt)(import_path.posix.basename(g))) return { error: `Cannot attach ${(0, import_chunk_1pan7v6b.ebe)(g)}: a file handed to a task from this session's cloud environment needs a plain name, without a backslash, a line break, another control character or a character that changes text direction. Copy or rename it and attach that. ${e.words.nothingDone}`, code: "name_not_plain" };
    let w = await n.upload(g, o);
    if (!w.ok) return R(g, w.code, T, a, e);
    if (!import_chunk_w8ry7jkt.kUe.test(w.file_id) || !(0, import_chunk_e1ww8aev.Kgt)(w.name)) return R(g, "bad_answer", T, a, e);
    let S = { file_id: w.file_id, name: w.name };
    k.push(S), h.onUploaded?.(S);
  }
  if (o.aborted) return A("canceled", e);
  if (Date.now() > F + O) return I(e);
  return { files: k };
}
async function BVo(r, e, n, a) {
  let o = await (0, import_chunk_yt7wk02j.ZWe)(r);
  if ((0, import_chunk_e1ww8aev.Ssr)(o)) return { ok: false, code: "name_direction" };
  let h = await (0, import_chunk_yt7wk02j.tbe)(r, D);
  if (!("buf" in h)) return { ok: false, code: h.refusal };
  if (a !== void 0) {
    if (h.buf.length > a.remainingBytes) return { ok: false, code: "too_large_total" };
    a.remainingBytes -= h.buf.length;
  }
  if (e !== void 0 && (0, import_chunk_ccm69jjy.Je)(h.buf) !== e) return { ok: false, code: "path_rejected" };
  await (0, import_chunk_865at33z.od)();
  let f = (0, import_chunk_865at33z.fz)();
  if (!f) return { ok: false, code: "no_token" };
  let p;
  try {
    let c = await (0, import_chunk_271f5kxt.lxi)(h.buf, o, { oauthToken: f, isStoredLogin: true, sessionId: (0, import_chunk_f9x2f6cx.W)(), baseUrl: (0, import_chunk_ephf358x.cn)().BASE_API_URL }, { signal: n, expiresInSeconds: V, timeoutMs: O, retryAfterTimeout: false });
    if (c.success) return { ok: true, file_id: c.fileId, name: o };
    p = c.reason;
  } catch (c) {
    if (c instanceof import_chunk_587zek71.RA) return { ok: false, code: "egress_blocked" };
    (0, import_chunk_w578pjby.t)(`[task files] upload threw: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "error" }), p = "network";
  }
  return { ok: false, code: `upload_${p}` };
}
var q = { file_read: true, too_large: true, auth: true, forbidden: true, canceled: true, server: true, network: true }, ue = { auth: true, forbidden: true, not_found: true, server: true, network: true }, sYs = ["egress_blocked", "essential_traffic", "no_token", "timeout", "unexpected", ...Object.keys(ue).map((r) => `delete_${r}`)], J = 5e3, H = "start_task upload cleanup timed out";
async function WVo(r) {
  if (r.length === 0) return;
  let e;
  try {
    e = await (0, import_chunk_5appeerh.qt)(le(r), J, H);
  } catch (n) {
    if (n instanceof Error && n.message === H) e = "timeout";
    else (0, import_chunk_k449cc64.i)(n), e = "unexpected";
  }
  if (e === void 0) (0, import_chunk_cqa9hrgx.u)("managed_agents_task_file_cleanup");
  else (0, import_chunk_cqa9hrgx.l)("managed_agents_task_file_cleanup", e);
  return e;
}
async function le(r) {
  let e = (0, import_chunk_ephf358x.cn)().BASE_API_URL;
  try {
    (0, import_chunk_271f5kxt.tUt)(e);
  } catch {
    return "egress_blocked";
  }
  if ((0, import_chunk_k449cc64.wt)()) return "essential_traffic";
  await (0, import_chunk_865at33z.od)();
  let n = (0, import_chunk_865at33z.fz)();
  if (!n) return "no_token";
  let a = { oauthToken: n, isStoredLogin: true, sessionId: (0, import_chunk_f9x2f6cx.W)(), baseUrl: e }, h = (await Promise.all(r.map((f) => (0, import_chunk_271f5kxt.Ofo)(f, a, { timeoutMs: J })))).find((f) => !f.success);
  return h !== void 0 && !h.success ? `delete_${h.reason}` : void 0;
}
var iYs = [...Object.keys(import_chunk_e1ww8aev.Lsi), ...Object.keys(q).map((r) => `upload_${r}`), "path_rejected", "no_token", "name_direction", "too_large_total"];
function R(r, e, n, a, o) {
  let { tool: h, nothingDone: f } = o.words;
  if (n === "elsewhere" && e === "too_large") return { error: `Cannot attach "${r}": it is larger than this session's cloud environment can attach. ${f}`, code: e };
  if ((0, import_chunk_e1ww8aev.RJt)(e)) return (0, import_chunk_e1ww8aev.U7r)(r, e, D, f);
  if (n === "elsewhere" && e === "upload_auth") return { error: `The sign-in of this session's cloud environment was not accepted while uploading "${r}". ${f} ${o.withoutFiles}`, code: e };
  let p = e.startsWith("upload_") ? e.slice(7) : void 0;
  if (p !== void 0 && fe(p)) return K(r, p, o);
  switch (e) {
    case "egress_blocked":
      return v(o);
    case "path_rejected":
      return { error: n === "here" ? (0, import_chunk_e1ww8aev.$7r)(r, a, f) : `Cannot attach "${r}": only files in this session's working folder (unless that is the home folder) or in its uploads or outputs folder can be attached, by the absolute path of a regular file there. ${f}`, code: e };
    case "credential_name":
      return { error: (0, import_chunk_e1ww8aev.F7r)(r, n === "here" ? a : { isRemoteMode: true }, f), code: e };
    case "too_large_total":
      return { error: `Cannot attach "${r}": with the files before it, the files named to ${h} add up to more than ${D / 1048576} MiB, the most one call may attach. Attach fewer or smaller files. ${f}`, code: e };
    case "name_direction":
      return { error: `Cannot attach ${(0, import_chunk_1pan7v6b.ebe)(r)}: its name contains a line break, another control character or a character that changes text direction, so the task could show it under a different name. Rename it, or copy it under a name without such characters, and attach that. ${f}`, code: e };
    case "no_token":
      return n === "here" ? Q(o) : { error: `This session's cloud environment has no sign-in to upload files with. ${f} ${o.withoutFiles}`, code: e };
    case "canceled":
      return A("canceled", o);
    case "essential_traffic":
      return C(o);
    case "policy_pending":
      return { error: `This session's cloud environment has not yet loaded its organization's policy, so it cannot tell whether files may be uploaded. ${f} Try again in a moment, or ${o.offerWithoutFiles}.`, code: e };
    case "repo_rules_unread":
      return { error: `This session's cloud environment could not read the repository's permission rules, so the files were not attached. ${f} Retrying won't help: tell the user that .claude/settings.json or .claude/settings.local.json may have to be fixed or removed.`, code: e };
    case "container_too_old":
      return { error: `This session's cloud environment runs an older version of Claude Code, which cannot attach files to a task. ${f} ${o.withoutFiles}`, code: e };
    case "no_answer":
      return { ...K(r, "network", o), code: e };
    case "no_container":
    case "container_unreachable":
      return { error: `This session's cloud environment could not be reached, so the files were not attached. ${f} Try again, or ${o.offerWithoutFiles}.`, code: e };
    default:
      return { error: `The files could not be attached. ${f} ${o.withoutFiles}`, code: "unexpected" };
  }
}
function fe(r) {
  return Object.hasOwn(q, r);
}
function I(r) {
  return { error: `Attaching these files is taking too long: the first ones would expire before the task could copy them. ${r.words.nothingDone} Attach fewer or smaller files, or ${r.offerWithoutFiles}.`, code: "uploads_too_slow" };
}
function C(r) {
  return { error: `Uploading files to Anthropic is turned off by CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC. ${r.words.nothingDone} ${r.withoutFiles}`, code: "essential_traffic" };
}
function M(r) {
  return { error: `This organization's policy has not loaded yet, so files cannot be attached right now. ${r.words.nothingDone} Try again in a minute; if it is refused again, tell the user and offer to ${r.offerWithoutTheFiles}.`, code: "policy_pending" };
}
function v(r) {
  return { error: `Uploading files to Anthropic is not available in this configuration. ${r.words.nothingDone} ${r.withoutFiles}`, code: "egress_blocked" };
}
function Q(r) {
  return { error: `Attaching files needs a claude.ai sign-in (run /login). ${r.words.nothingDone}`, code: "no_token" };
}
function A(r, e) {
  return { error: `Attaching files was interrupted. ${e.words.nothingDone}`, code: r };
}
function K(r, e, n) {
  let a = `upload_${e}`, { nothingDone: o } = n.words;
  switch (e) {
    case "auth":
      return { error: `The session's sign-in was not accepted while uploading "${r}". The person may need to sign in again, or restart the session. ${o}`, code: a };
    case "forbidden":
      return { error: `This session's sign-in may not upload files, so "${r}" was not attached. ${o} ${n.withoutFiles}`, code: a };
    case "too_large":
      return { error: `The Files API refused "${r}" as too large. ${o}`, code: a };
    case "canceled":
      return A(a, n);
    case "server":
      return { error: `The Files API did not accept "${r}". ${o} ${n.withoutThisFile}, or tell the user.`, code: a };
    case "file_read":
    case "network":
      return { error: `The upload of "${r}" did not complete. ${o} Try again, or ${n.offerWithoutThisFile}.`, code: a };
  }
}
